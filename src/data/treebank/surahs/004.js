/**
 * Surah An-Nisa (4) - Treebank Data (Partial)
 * The Women - 176 Ayahs total
 * This file covers Ayahs 1-15
 *
 * Theme: Social justice, women's rights, family law, inheritance
 * Revelation: Madani
 */

const SURAH_4_TREEBANK = {
  surahId: 4,
  surahName: "An-Nisa",
  surahNameArabic: "النساء",
  totalAyahs: 176,
  coveredAyahs: 15,
  revelationType: "Madani",
  theme: "Social justice, women's rights, family law, inheritance, and community ethics",

  1: {
    ayahNumber: 1,
    arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
    translation: {
      en: "O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women. And fear Allah, through whom you ask one another, and the wombs. Indeed Allah is ever, over you, an Observer.",
      ur: "اے لوگو! اپنے رب سے ڈرو جس نے تمہیں ایک جان سے پیدا کیا اور اسی سے اس کا جوڑا بنایا اور ان دونوں سے بہت سے مرد اور عورتیں پھیلا دیں۔ اللہ سے ڈرو جس کے نام پر ایک دوسرے سے مانگتے ہو اور رشتوں کا بھی خیال رکھو۔ بے شک اللہ تم پر نگران ہے۔"
    },
    words: [
      {
        position: 1,
        arabic: "يَا",
        transliteration: "yaa",
        root: null,
        pos: ['VOC'],
        posLabel: 'VOC',
        meaning: { en: "O", ur: "اے" },
        grammarRole: "Vocative particle",
        grammarExplanations: {
          en: "Vocative particle used to call or address someone directly.",
          ur: "حرف ندا - کسی کو براہ راست پکارنے کے لیے۔"
        }
      },
      {
        position: 2,
        arabic: "أَيُّهَا",
        transliteration: "ayyuha",
        root: null,
        pos: ['VOC'],
        posLabel: 'VOC',
        meaning: { en: "O you", ur: "اے" },
        grammarRole: "Vocative expression (masculine plural)",
        grammarExplanations: {
          en: "Combined vocative particle for addressing a group.",
          ur: "جمع مذکر کو مخاطب کرنے کا حرف ندا۔"
        }
      },
      {
        position: 3,
        arabic: "النَّاسُ",
        transliteration: "an-naasu",
        root: "ن و س",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "mankind/people", ur: "لوگو" },
        grammarRole: "Noun (vocative)",
        case: "marfoo",
        grammarExplanations: {
          en: "The addressed noun in the vocative construction. Universal address to all humanity.",
          ur: "منادی - تمام انسانیت کو عالمگیر خطاب۔"
        },
        advanced: {
          rootFamily: ["نَاس (people)", "إِنْس (humans)", "أُنَاس (people)"],
          frequency: "241 times in Quran",
          balagha: "Universal address establishes this surah's laws as universal human rights"
        }
      },
      {
        position: 4,
        arabic: "اتَّقُوا",
        transliteration: "ittaquu",
        root: "و ق ي",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "fear/be conscious of", ur: "ڈرو" },
        grammarRole: "Verb (imperative, 2nd person masculine plural)",
        grammarExplanations: {
          en: "Imperative verb from Form VIII - means to protect oneself, be God-conscious.",
          ur: "فعل امر باب افتعال سے - اپنے آپ کو بچانا، اللہ سے ڈرنا۔"
        },
        advanced: {
          rootFamily: ["وِقَايَة (protection)", "تَقْوَى (God-consciousness)", "مُتَّقِين (the God-fearing)"],
          frequency: "258 times in various forms",
          verbForm: "Form VIII (افتعال)",
          balagha: "Taqwa is the foundation of all Islamic social laws"
        }
      },
      {
        position: 5,
        arabic: "رَبَّكُمُ",
        transliteration: "rabbakum",
        root: "ر ب ب",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "your Lord", ur: "اپنے رب سے" },
        grammarRole: "Noun + possessive pronoun (object)",
        case: "mansoob",
        grammarExplanations: {
          en: "Direct object of ittaquu. Rabb emphasizes nurturing, sustaining relationship.",
          ur: "اتقوا کا مفعول۔ رب پرورش اور نگہداشت کے رشتے پر زور دیتا ہے۔"
        }
      },
      {
        position: 6,
        arabic: "الَّذِي",
        transliteration: "alladhii",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "who", ur: "جس نے" },
        grammarRole: "Relative pronoun (masculine singular)",
        grammarExplanations: {
          en: "Introduces a relative clause describing Allah.",
          ur: "اسم موصول - اللہ کی صفت بیان کرنے والا جملہ شروع کرتا ہے۔"
        }
      },
      {
        position: 7,
        arabic: "خَلَقَكُم",
        transliteration: "khalaqakum",
        root: "خ ل ق",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        meaning: { en: "created you", ur: "تمہیں پیدا کیا" },
        grammarRole: "Verb (past) + object pronoun",
        grammarExplanations: {
          en: "Past tense verb with attached object pronoun. He created you (all).",
          ur: "فعل ماضی + ضمیر مفعول۔ تم سب کو پیدا کیا۔"
        },
        advanced: {
          rootFamily: ["خَلْق (creation)", "خَالِق (Creator)", "مَخْلُوق (created being)"],
          frequency: "261 times",
          verbForm: "Form I"
        }
      },
      {
        position: 8,
        arabic: "مِّن",
        transliteration: "min",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "from", ur: "سے" },
        grammarRole: "Preposition",
        grammarExplanations: {
          en: "Preposition indicating origin/source.",
          ur: "حرف جار - ابتدا/ماخذ ظاہر کرتا ہے۔"
        }
      },
      {
        position: 9,
        arabic: "نَّفْسٍ",
        transliteration: "nafsin",
        root: "ن ف س",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "soul/self", ur: "جان" },
        grammarRole: "Noun (genitive)",
        case: "majroor",
        grammarExplanations: {
          en: "Object of preposition min. Refers to Adam - all humanity from one soul.",
          ur: "مجرور۔ آدم کی طرف اشارہ - ساری انسانیت ایک جان سے۔"
        },
        advanced: {
          rootFamily: ["نَفْس (soul/self)", "أَنْفُس (souls)", "تَنَفَّسَ (to breathe)"],
          frequency: "295 times",
          balagha: "Establishes human equality - all from ONE soul"
        }
      },
      {
        position: 10,
        arabic: "وَاحِدَةٍ",
        transliteration: "waahidatin",
        root: "و ح د",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "one/single", ur: "ایک" },
        grammarRole: "Adjective (genitive, feminine)",
        case: "majroor",
        grammarExplanations: {
          en: "Adjective describing nafs. Feminine to match nafs (grammatically feminine).",
          ur: "نفس کی صفت۔ مؤنث کیونکہ نفس مؤنث ہے۔"
        },
        advanced: {
          balagha: "Unity of origin = basis for human rights and equality"
        }
      },
      {
        position: 11,
        arabic: "وَخَلَقَ",
        transliteration: "wa-khalaqa",
        root: "خ ل ق",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and created", ur: "اور بنایا" },
        grammarRole: "Conjunction + verb (past)",
        grammarExplanations: {
          en: "Conjunction wa + past tense verb. And He created.",
          ur: "حرف عطف + فعل ماضی۔ اور اس نے بنایا۔"
        }
      },
      {
        position: 12,
        arabic: "مِنْهَا",
        transliteration: "minhaa",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "from it (her)", ur: "اسی سے" },
        grammarRole: "Preposition + pronoun",
        grammarExplanations: {
          en: "From it/her - referring to the first soul (Adam), from whom Hawwa was created.",
          ur: "اس سے - پہلی جان (آدم) کی طرف اشارہ، جس سے حوا بنائی گئیں۔"
        }
      },
      {
        position: 13,
        arabic: "زَوْجَهَا",
        transliteration: "zawjahaa",
        root: "ز و ج",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "its/her mate", ur: "اس کا جوڑا" },
        grammarRole: "Noun + possessive pronoun (object)",
        case: "mansoob",
        grammarExplanations: {
          en: "Direct object. Zawj means spouse/mate - refers to Hawwa (Eve).",
          ur: "مفعول۔ زوج یعنی جوڑا/ہمسر - حوا کی طرف اشارہ۔"
        },
        advanced: {
          rootFamily: ["زَوْج (spouse)", "أَزْوَاج (spouses)", "زَوَّجَ (to marry)"],
          frequency: "81 times"
        }
      },
      {
        position: 14,
        arabic: "وَبَثَّ",
        transliteration: "wa-baththa",
        root: "ب ث ث",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and dispersed/spread", ur: "اور پھیلا دیے" },
        grammarRole: "Conjunction + verb (past)",
        grammarExplanations: {
          en: "And He spread/dispersed - referring to spreading humanity across the earth.",
          ur: "اور پھیلا دیا - انسانیت کو زمین پر پھیلانے کا ذکر۔"
        },
        advanced: {
          rootFamily: ["بَثَّ (to spread)", "انْبَثَّ (to scatter)"],
          frequency: "4 times in Quran"
        }
      },
      {
        position: 15,
        arabic: "مِنْهُمَا",
        transliteration: "minhumaa",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "from both of them", ur: "ان دونوں سے" },
        grammarRole: "Preposition + dual pronoun",
        grammarExplanations: {
          en: "From both of them - Adam and Hawwa together.",
          ur: "ان دونوں سے - آدم اور حوا۔"
        }
      },
      {
        position: 16,
        arabic: "رِجَالًا",
        transliteration: "rijaalan",
        root: "ر ج ل",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "men", ur: "مرد" },
        grammarRole: "Noun (accusative, object)",
        case: "mansoob",
        grammarExplanations: {
          en: "Direct object of baththa. Men - in accusative case.",
          ur: "بث کا مفعول۔ مرد - منصوب۔"
        }
      },
      {
        position: 17,
        arabic: "كَثِيرًا",
        transliteration: "kathiiran",
        root: "ك ث ر",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "many", ur: "بہت سے" },
        grammarRole: "Adjective (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Adjective describing rijaal - many men.",
          ur: "رجال کی صفت - بہت سے مرد۔"
        }
      },
      {
        position: 18,
        arabic: "وَنِسَاءً",
        transliteration: "wa-nisaa'an",
        root: "ن س و",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        meaning: { en: "and women", ur: "اور عورتیں" },
        grammarRole: "Conjunction + noun (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "And women - paired with men, showing equality in creation.",
          ur: "اور عورتیں - مردوں کے ساتھ جوڑا، تخلیق میں برابری۔"
        }
      },
      {
        position: 19,
        arabic: "وَاتَّقُوا",
        transliteration: "wa-ttaquu",
        root: "و ق ي",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and fear", ur: "اور ڈرو" },
        grammarRole: "Conjunction + verb (imperative)",
        grammarExplanations: {
          en: "Second command to have taqwa - emphasizing its importance.",
          ur: "تقویٰ کا دوسرا حکم - اس کی اہمیت پر زور۔"
        }
      },
      {
        position: 20,
        arabic: "اللَّهَ",
        transliteration: "Allaaha",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "Allah", ur: "اللہ" },
        grammarRole: "Proper noun (accusative, object)",
        case: "mansoob",
        grammarExplanations: {
          en: "Direct object of ittaquu. Fear Allah specifically.",
          ur: "اتقوا کا مفعول۔ خاص طور پر اللہ سے ڈرو۔"
        }
      },
      {
        position: 21,
        arabic: "الَّذِي",
        transliteration: "alladhii",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "whom", ur: "جس" },
        grammarRole: "Relative pronoun",
        grammarExplanations: {
          en: "Introduces relative clause about Allah.",
          ur: "اللہ کے بارے میں موصول جملہ شروع کرتا ہے۔"
        }
      },
      {
        position: 22,
        arabic: "تَسَاءَلُونَ",
        transliteration: "tasaa'aluuna",
        root: "س أ ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "you ask one another", ur: "تم ایک دوسرے سے مانگتے ہو" },
        grammarRole: "Verb (imperfect, 2nd person masculine plural)",
        grammarExplanations: {
          en: "Form VI - reciprocal action. You ask each other by His name.",
          ur: "باب تفاعل - باہمی عمل۔ تم اس کے نام پر ایک دوسرے سے مانگتے ہو۔"
        },
        advanced: {
          verbForm: "Form VI (تفاعل)",
          balagha: "Arabs would swear by Allah when making requests - this invokes that practice"
        }
      },
      {
        position: 23,
        arabic: "بِهِ",
        transliteration: "bihi",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "by Him", ur: "اس کے نام پر" },
        grammarRole: "Preposition + pronoun",
        grammarExplanations: {
          en: "By Him/His name - you invoke Allah when asking things of each other.",
          ur: "اس کے نام پر - جب تم ایک دوسرے سے مانگتے ہو تو اللہ کا نام لیتے ہو۔"
        }
      },
      {
        position: 24,
        arabic: "وَالْأَرْحَامَ",
        transliteration: "wal-arhaama",
        root: "ر ح م",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        meaning: { en: "and the wombs/family ties", ur: "اور رشتوں کا" },
        grammarRole: "Conjunction + noun (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "And the wombs - meaning family ties, blood relations. Fear violating these.",
          ur: "اور ارحام - یعنی رشتے داری، خونی رشتے۔ ان کو توڑنے سے ڈرو۔"
        },
        advanced: {
          rootFamily: ["رَحِم (womb)", "رَحْمَة (mercy)", "رَحِيم (merciful)", "أَرْحَام (wombs/relatives)"],
          balagha: "Wombs connect to mercy (rahma) - family ties are sacred"
        }
      },
      {
        position: 25,
        arabic: "إِنَّ",
        transliteration: "inna",
        root: null,
        pos: ['ACC'],
        posLabel: 'ACC',
        meaning: { en: "Indeed", ur: "بے شک" },
        grammarRole: "Accusative particle (emphasis)",
        grammarExplanations: {
          en: "Emphatic particle - indeed, verily. Introduces a strong statement.",
          ur: "حرف تاکید - بے شک، یقیناً۔"
        }
      },
      {
        position: 26,
        arabic: "اللَّهَ",
        transliteration: "Allaaha",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "Allah", ur: "اللہ" },
        grammarRole: "Subject of inna (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Subject of inna - takes accusative case.",
          ur: "اِنَّ کا اسم - منصوب ہوتا ہے۔"
        }
      },
      {
        position: 27,
        arabic: "كَانَ",
        transliteration: "kaana",
        root: "ك و ن",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "is/was", ur: "ہے" },
        grammarRole: "Verb (past, كان الناقصة)",
        grammarExplanations: {
          en: "Deficient verb kaana - links subject to predicate. Is/was always.",
          ur: "کان ناقصہ - اسم اور خبر کو جوڑتا ہے۔"
        }
      },
      {
        position: 28,
        arabic: "عَلَيْكُمْ",
        transliteration: "'alaykum",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "over you", ur: "تم پر" },
        grammarRole: "Preposition + pronoun",
        grammarExplanations: {
          en: "Over you - Allah watches over you.",
          ur: "تم پر - اللہ تم پر نگران ہے۔"
        }
      },
      {
        position: 29,
        arabic: "رَقِيبًا",
        transliteration: "raqiiban",
        root: "ر ق ب",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "an Observer/Watcher", ur: "نگران" },
        grammarRole: "Predicate of kaana (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Predicate of kaana - Allah is ever watching over you.",
          ur: "کان کا خبر - اللہ ہمیشہ تم پر نگران ہے۔"
        },
        advanced: {
          rootFamily: ["رَقَبَ (to watch)", "رَقِيب (watcher)", "مُرَاقَبَة (surveillance)"],
          balagha: "Divine oversight ensures accountability for social justice"
        }
      }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' },
      ],
    },
  },

  2: {
    ayahNumber: 2,
    arabic: "وَآتُوا الْيَتَامَىٰ أَمْوَالَهُمْ وَلَا تَتَبَدَّلُوا الْخَبِيثَ بِالطَّيِّبِ وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ إِنَّهُ كَانَ حُوبًا كَبِيرًا",
    translation: {
      en: "And give to the orphans their properties and do not substitute the defective for the good. And do not consume their properties into your own. Indeed, that is ever a great sin.",
      ur: "اور یتیموں کو ان کے مال دے دو اور خراب چیز کو اچھی سے نہ بدلو اور ان کے مال اپنے مالوں میں ملا کر نہ کھاؤ۔ یقیناً یہ بڑا گناہ ہے۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَآتُوا",
        transliteration: "wa-aatuu",
        root: "أ ت ي",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "And give", ur: "اور دو" },
        grammarRole: "Conjunction + verb (imperative)",
        grammarExplanations: {
          en: "Imperative verb - command to give. Form IV (أَعْطَى).",
          ur: "فعل امر - دینے کا حکم۔ باب افعال۔"
        }
      },
      {
        position: 2,
        arabic: "الْيَتَامَىٰ",
        transliteration: "al-yataamaa",
        root: "ي ت م",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the orphans", ur: "یتیموں کو" },
        grammarRole: "Noun (accusative, indirect object)",
        case: "mansoob",
        grammarExplanations: {
          en: "Orphans - those who lost their fathers before puberty.",
          ur: "یتیم - جن کے باپ بلوغت سے پہلے فوت ہو گئے۔"
        },
        advanced: {
          rootFamily: ["يَتِيم (orphan)", "يُتْم (orphanhood)", "يَتَامَى (orphans)"],
          frequency: "23 times in Quran",
          balagha: "Orphans mentioned first in inheritance - most vulnerable"
        }
      },
      {
        position: 3,
        arabic: "أَمْوَالَهُمْ",
        transliteration: "amwaalahum",
        root: "م و ل",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "their properties", ur: "ان کے مال" },
        grammarRole: "Noun + possessive pronoun (direct object)",
        case: "mansoob",
        grammarExplanations: {
          en: "Their wealth/properties - what belongs to the orphans.",
          ur: "ان کی دولت/مال - جو یتیموں کا ہے۔"
        }
      },
      {
        position: 4,
        arabic: "وَلَا",
        transliteration: "wa-laa",
        root: null,
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        meaning: { en: "and do not", ur: "اور نہ" },
        grammarRole: "Conjunction + prohibition particle",
        grammarExplanations: {
          en: "Introduces prohibition - do not do this.",
          ur: "نہی کا حرف - ایسا نہ کرو۔"
        }
      },
      {
        position: 5,
        arabic: "تَتَبَدَّلُوا",
        transliteration: "tatabaddaluu",
        root: "ب د ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "substitute/exchange", ur: "بدلو" },
        grammarRole: "Verb (jussive, 2nd person masculine plural)",
        grammarExplanations: {
          en: "Form V verb - to exchange/substitute. Don't swap bad for good.",
          ur: "باب تفعّل - بدلنا۔ خراب کو اچھے سے نہ بدلو۔"
        },
        advanced: {
          verbForm: "Form V (تفعّل)",
          rootFamily: ["بَدَّلَ (to change)", "بَدَل (substitute)", "تَبْدِيل (replacement)"]
        }
      },
      {
        position: 6,
        arabic: "الْخَبِيثَ",
        transliteration: "al-khabiitha",
        root: "خ ب ث",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "the defective/bad", ur: "خراب" },
        grammarRole: "Adjective (accusative, used as noun)",
        case: "mansoob",
        grammarExplanations: {
          en: "The bad/impure - refers to inferior property.",
          ur: "خراب/ناپاک - کمتر مال کی طرف اشارہ۔"
        }
      },
      {
        position: 7,
        arabic: "بِالطَّيِّبِ",
        transliteration: "bit-tayyibi",
        root: "ط ي ب",
        pos: ['P', 'ADJ'],
        posLabel: 'P+ADJ',
        meaning: { en: "for the good", ur: "اچھے سے" },
        grammarRole: "Preposition + adjective (genitive)",
        case: "majroor",
        grammarExplanations: {
          en: "With/for the good - don't exchange their good property for your bad.",
          ur: "اچھے کے بدلے - ان کا اچھا مال اپنے خراب سے نہ بدلو۔"
        }
      },
      {
        position: 8,
        arabic: "وَلَا",
        transliteration: "wa-laa",
        root: null,
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        meaning: { en: "and do not", ur: "اور نہ" },
        grammarRole: "Conjunction + prohibition particle"
      },
      {
        position: 9,
        arabic: "تَأْكُلُوا",
        transliteration: "ta'kuluu",
        root: "أ ك ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "consume/eat", ur: "کھاؤ" },
        grammarRole: "Verb (jussive, 2nd person masculine plural)",
        grammarExplanations: {
          en: "To eat/consume - metaphor for using up someone's wealth.",
          ur: "کھانا - کسی کا مال استعمال کرنے کی تمثیل۔"
        },
        advanced: {
          rootFamily: ["أَكَلَ (to eat)", "أَكْل (eating)", "مَأْكُول (eaten)"],
          balagha: "Eating = consuming/misappropriating - powerful imagery"
        }
      },
      {
        position: 10,
        arabic: "أَمْوَالَهُمْ",
        transliteration: "amwaalahum",
        root: "م و ل",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "their properties", ur: "ان کے مال" },
        grammarRole: "Noun + pronoun (direct object)",
        case: "mansoob"
      },
      {
        position: 11,
        arabic: "إِلَىٰ",
        transliteration: "ilaa",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "into/with", ur: "میں" },
        grammarRole: "Preposition",
        grammarExplanations: {
          en: "Into - mixing their property into yours.",
          ur: "میں - ان کا مال اپنے میں ملانا۔"
        }
      },
      {
        position: 12,
        arabic: "أَمْوَالِكُمْ",
        transliteration: "amwaalikum",
        root: "م و ل",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "your properties", ur: "اپنے مالوں" },
        grammarRole: "Noun + pronoun (genitive)",
        case: "majroor"
      },
      {
        position: 13,
        arabic: "إِنَّهُ",
        transliteration: "innahu",
        root: null,
        pos: ['ACC', 'PRON'],
        posLabel: 'ACC+PRON',
        meaning: { en: "Indeed it", ur: "یقیناً یہ" },
        grammarRole: "Emphatic particle + pronoun"
      },
      {
        position: 14,
        arabic: "كَانَ",
        transliteration: "kaana",
        root: "ك و ن",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "is/was", ur: "ہے" },
        grammarRole: "Verb (past, deficient)"
      },
      {
        position: 15,
        arabic: "حُوبًا",
        transliteration: "huuban",
        root: "ح و ب",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "a sin", ur: "گناہ" },
        grammarRole: "Noun (accusative, predicate of kaana)",
        case: "mansoob",
        grammarExplanations: {
          en: "A sin - specifically a grave wrongdoing.",
          ur: "گناہ - خاص طور پر بڑی غلطی۔"
        },
        advanced: {
          rootFamily: ["حُوب (sin)", "حَابَ (to sin)"],
          frequency: "Once in Quran"
        }
      },
      {
        position: 16,
        arabic: "كَبِيرًا",
        transliteration: "kabiiran",
        root: "ك ب ر",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "great", ur: "بڑا" },
        grammarRole: "Adjective (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Great/major - emphasizes severity of this sin.",
          ur: "بڑا - اس گناہ کی سنگینی پر زور۔"
        }
      }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'جار + مجرور' },
      ],
    },
  },

  3: {
    ayahNumber: 3,
    arabic: "وَإِنْ خِفْتُمْ أَلَّا تُقْسِطُوا فِي الْيَتَامَىٰ فَانكِحُوا مَا طَابَ لَكُم مِّنَ النِّسَاءِ مَثْنَىٰ وَثُلَاثَ وَرُبَاعَ فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً أَوْ مَا مَلَكَتْ أَيْمَانُكُمْ ذَٰلِكَ أَدْنَىٰ أَلَّا تَعُولُوا",
    translation: {
      en: "And if you fear that you will not deal justly with the orphan girls, then marry those that please you of [other] women, two or three or four. But if you fear that you will not be just, then [marry only] one or those your right hand possesses. That is more suitable that you may not incline [to injustice].",
      ur: "اور اگر تمہیں ڈر ہو کہ یتیم لڑکیوں کے ساتھ انصاف نہ کر سکو گے تو جو عورتیں تمہیں پسند ہوں ان سے نکاح کرو، دو دو، تین تین، چار چار۔ لیکن اگر ڈر ہو کہ عدل نہ کر سکو گے تو ایک ہی یا جو تمہارے ہاتھ کی ملکیت ہو۔ یہ اس بات کے زیادہ قریب ہے کہ تم بے انصافی نہ کرو۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَإِنْ",
        transliteration: "wa-in",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "And if", ur: "اور اگر" },
        grammarRole: "Conjunction + conditional particle"
      },
      {
        position: 2,
        arabic: "خِفْتُمْ",
        transliteration: "khiftum",
        root: "خ و ف",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "you fear", ur: "تمہیں ڈر ہو" },
        grammarRole: "Verb (past, 2nd person masculine plural)",
        grammarExplanations: {
          en: "If you fear - conditional verb in past form but future meaning.",
          ur: "اگر تمہیں ڈر ہو - شرطی فعل ماضی کی شکل میں مگر مستقبل کا معنی۔"
        }
      },
      {
        position: 3,
        arabic: "أَلَّا",
        transliteration: "allaa",
        root: null,
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        meaning: { en: "that not", ur: "کہ نہ" },
        grammarRole: "Conjunction أَنْ + negative لَا"
      },
      {
        position: 4,
        arabic: "تُقْسِطُوا",
        transliteration: "tuqsituu",
        root: "ق س ط",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "deal justly", ur: "انصاف کرو" },
        grammarRole: "Verb (subjunctive)",
        grammarExplanations: {
          en: "Form IV - to be just, deal equitably.",
          ur: "باب افعال - انصاف کرنا، برابری سے پیش آنا۔"
        },
        advanced: {
          verbForm: "Form IV (إفعال)",
          rootFamily: ["قِسْط (justice)", "مُقْسِط (just person)", "قِسْطَاس (balance)"]
        }
      },
      {
        position: 5,
        arabic: "فِي",
        transliteration: "fii",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "with/regarding", ur: "میں" },
        grammarRole: "Preposition"
      },
      {
        position: 6,
        arabic: "الْيَتَامَىٰ",
        transliteration: "al-yataamaa",
        root: "ي ت م",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the orphans", ur: "یتیموں" },
        grammarRole: "Noun (genitive)",
        case: "majroor"
      },
      {
        position: 7,
        arabic: "فَانكِحُوا",
        transliteration: "fankihuu",
        root: "ن ك ح",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "then marry", ur: "تو نکاح کرو" },
        grammarRole: "Result particle + imperative verb",
        grammarExplanations: {
          en: "Then marry - the fa introduces the result of the condition.",
          ur: "تو نکاح کرو - فا شرط کا نتیجہ بتاتا ہے۔"
        },
        advanced: {
          rootFamily: ["نِكَاح (marriage)", "نَكَحَ (to marry)", "مُنَاكَحَة (intermarriage)"]
        }
      },
      {
        position: 8,
        arabic: "مَا",
        transliteration: "maa",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "what/those that", ur: "جو" },
        grammarRole: "Relative pronoun"
      },
      {
        position: 9,
        arabic: "طَابَ",
        transliteration: "taaba",
        root: "ط ي ب",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "pleases/is good", ur: "پسند ہو" },
        grammarRole: "Verb (past)",
        grammarExplanations: {
          en: "What is good/pleasing to you - refers to suitable women.",
          ur: "جو تمہیں اچھی لگے - مناسب عورتوں کی طرف اشارہ۔"
        }
      },
      {
        position: 10,
        arabic: "لَكُم",
        transliteration: "lakum",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "to you", ur: "تمہیں" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 11,
        arabic: "مِّنَ",
        transliteration: "mina",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "from/of", ur: "میں سے" },
        grammarRole: "Preposition"
      },
      {
        position: 12,
        arabic: "النِّسَاءِ",
        transliteration: "an-nisaa'i",
        root: "ن س و",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the women", ur: "عورتوں" },
        grammarRole: "Noun (genitive)",
        case: "majroor"
      },
      {
        position: 13,
        arabic: "مَثْنَىٰ",
        transliteration: "mathnaa",
        root: "ث ن ي",
        pos: ['NUM'],
        posLabel: 'NUM',
        meaning: { en: "two (each)", ur: "دو دو" },
        grammarRole: "Distributive numeral",
        grammarExplanations: {
          en: "Two by two - distributive form meaning 'two each'.",
          ur: "دو دو - تقسیمی صورت۔"
        }
      },
      {
        position: 14,
        arabic: "وَثُلَاثَ",
        transliteration: "wa-thulaatha",
        root: "ث ل ث",
        pos: ['CONJ', 'NUM'],
        posLabel: 'CONJ+NUM',
        meaning: { en: "and three (each)", ur: "اور تین تین" },
        grammarRole: "Conjunction + distributive numeral"
      },
      {
        position: 15,
        arabic: "وَرُبَاعَ",
        transliteration: "wa-rubaa'a",
        root: "ر ب ع",
        pos: ['CONJ', 'NUM'],
        posLabel: 'CONJ+NUM',
        meaning: { en: "and four (each)", ur: "اور چار چار" },
        grammarRole: "Conjunction + distributive numeral"
      },
      {
        position: 16,
        arabic: "فَإِنْ",
        transliteration: "fa-in",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "But if", ur: "لیکن اگر" },
        grammarRole: "Result particle + conditional"
      },
      {
        position: 17,
        arabic: "خِفْتُمْ",
        transliteration: "khiftum",
        root: "خ و ف",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "you fear", ur: "تمہیں ڈر ہو" },
        grammarRole: "Verb (past)"
      },
      {
        position: 18,
        arabic: "أَلَّا",
        transliteration: "allaa",
        root: null,
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        meaning: { en: "that not", ur: "کہ نہ" },
        grammarRole: "Conjunction + negative"
      },
      {
        position: 19,
        arabic: "تَعْدِلُوا",
        transliteration: "ta'diluu",
        root: "ع د ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "be just", ur: "عدل کرو" },
        grammarRole: "Verb (subjunctive)",
        grammarExplanations: {
          en: "To be just/fair - the key condition for polygamy.",
          ur: "عدل کرنا - تعدد ازواج کی اہم شرط۔"
        },
        advanced: {
          rootFamily: ["عَدْل (justice)", "عَادِل (just)", "عَدَالَة (justice)"]
        }
      },
      {
        position: 20,
        arabic: "فَوَاحِدَةً",
        transliteration: "fa-waahidatan",
        root: "و ح د",
        pos: ['CONJ', 'NUM'],
        posLabel: 'CONJ+NUM',
        meaning: { en: "then one", ur: "تو ایک" },
        grammarRole: "Result particle + numeral (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Then one (wife) only - if you cannot be just.",
          ur: "تو صرف ایک (بیوی) - اگر عدل نہ کر سکو۔"
        }
      },
      {
        position: 21,
        arabic: "أَوْ",
        transliteration: "aw",
        root: null,
        pos: ['CONJ'],
        posLabel: 'CONJ',
        meaning: { en: "or", ur: "یا" },
        grammarRole: "Disjunctive conjunction"
      },
      {
        position: 22,
        arabic: "مَا",
        transliteration: "maa",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "what", ur: "جو" },
        grammarRole: "Relative pronoun"
      },
      {
        position: 23,
        arabic: "مَلَكَتْ",
        transliteration: "malakat",
        root: "م ل ك",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "possesses", ur: "مالک ہو" },
        grammarRole: "Verb (past, feminine)"
      },
      {
        position: 24,
        arabic: "أَيْمَانُكُمْ",
        transliteration: "aymaanukum",
        root: "ي م ن",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "your right hands", ur: "تمہارے داہنے ہاتھ" },
        grammarRole: "Noun + possessive pronoun",
        grammarExplanations: {
          en: "Your right hands possess - refers to those under your care/authority.",
          ur: "تمہارے ہاتھ کی ملکیت - تمہاری نگہداشت/اختیار میں۔"
        }
      },
      {
        position: 25,
        arabic: "ذَٰلِكَ",
        transliteration: "dhaalika",
        root: null,
        pos: ['DEM'],
        posLabel: 'DEM',
        meaning: { en: "That", ur: "یہ" },
        grammarRole: "Demonstrative pronoun"
      },
      {
        position: 26,
        arabic: "أَدْنَىٰ",
        transliteration: "adnaa",
        root: "د ن و",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "more suitable/closer", ur: "زیادہ قریب" },
        grammarRole: "Comparative adjective",
        grammarExplanations: {
          en: "Closer/more suitable - this approach is better for avoiding injustice.",
          ur: "زیادہ قریب/مناسب - یہ طریقہ ظلم سے بچنے کے لیے بہتر ہے۔"
        }
      },
      {
        position: 27,
        arabic: "أَلَّا",
        transliteration: "allaa",
        root: null,
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        meaning: { en: "that not", ur: "کہ نہ" },
        grammarRole: "Conjunction + negative"
      },
      {
        position: 28,
        arabic: "تَعُولُوا",
        transliteration: "ta'uuluu",
        root: "ع و ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "incline to injustice", ur: "بے انصافی کرو" },
        grammarRole: "Verb (subjunctive)",
        grammarExplanations: {
          en: "To deviate, incline to injustice, be unfair.",
          ur: "جھکنا، بے انصافی کرنا، ظلم کرنا۔"
        }
      }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
      ],
    },
  },

  4: {
    ayahNumber: 4,
    arabic: "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً فَإِن طِبْنَ لَكُمْ عَن شَيْءٍ مِّنْهُ نَفْسًا فَكُلُوهُ هَنِيئًا مَّرِيئًا",
    translation: {
      en: "And give the women their bridal gifts graciously. But if they give up willingly to you anything of it, then consume it in satisfaction and ease.",
      ur: "اور عورتوں کو ان کے مہر خوشی سے دو۔ پھر اگر وہ اپنی خوشی سے تمہیں کچھ دے دیں تو اسے خوشی سے کھاؤ۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَآتُوا",
        transliteration: "wa-aatuu",
        root: "أ ت ي",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "And give", ur: "اور دو" },
        grammarRole: "Conjunction + imperative verb"
      },
      {
        position: 2,
        arabic: "النِّسَاءَ",
        transliteration: "an-nisaa'a",
        root: "ن س و",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the women", ur: "عورتوں کو" },
        grammarRole: "Noun (accusative, indirect object)",
        case: "mansoob"
      },
      {
        position: 3,
        arabic: "صَدُقَاتِهِنَّ",
        transliteration: "saduqaatihinna",
        root: "ص د ق",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "their bridal gifts (mahr)", ur: "ان کے مہر" },
        grammarRole: "Noun + possessive pronoun (direct object)",
        case: "mansoob",
        grammarExplanations: {
          en: "Saduqaat = plural of saduqa = mahr/bridal gift. Obligatory gift to the wife.",
          ur: "صدقات = صدقہ کی جمع = مہر۔ بیوی کو واجب تحفہ۔"
        },
        advanced: {
          rootFamily: ["صِدْق (truth)", "صَادِق (truthful)", "صَدُقَة (mahr)"],
          balagha: "From root meaning 'truth' - mahr shows sincerity of marriage"
        }
      },
      {
        position: 4,
        arabic: "نِحْلَةً",
        transliteration: "nihlatan",
        root: "ن ح ل",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "graciously/as a gift", ur: "خوشی سے" },
        grammarRole: "Noun (accusative, adverbial)",
        case: "mansoob",
        grammarExplanations: {
          en: "As a free gift, willingly, graciously - not grudgingly.",
          ur: "بطور تحفہ، خوشی سے - نہ کہ بے دلی سے۔"
        }
      },
      {
        position: 5,
        arabic: "فَإِن",
        transliteration: "fa-in",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "But if", ur: "پھر اگر" },
        grammarRole: "Result particle + conditional"
      },
      {
        position: 6,
        arabic: "طِبْنَ",
        transliteration: "tibna",
        root: "ط ي ب",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "they give up willingly", ur: "وہ خوشی سے دیں" },
        grammarRole: "Verb (past, 3rd person feminine plural)",
        grammarExplanations: {
          en: "If their souls are pleased to give - completely voluntary.",
          ur: "اگر ان کا دل خوشی سے دے - بالکل رضاکارانہ۔"
        }
      },
      {
        position: 7,
        arabic: "لَكُمْ",
        transliteration: "lakum",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "to you", ur: "تمہیں" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 8,
        arabic: "عَن",
        transliteration: "'an",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "of", ur: "سے" },
        grammarRole: "Preposition"
      },
      {
        position: 9,
        arabic: "شَيْءٍ",
        transliteration: "shay'in",
        root: "ش ي أ",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "anything", ur: "کچھ" },
        grammarRole: "Noun (genitive)",
        case: "majroor"
      },
      {
        position: 10,
        arabic: "مِّنْهُ",
        transliteration: "minhu",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "of it", ur: "اس میں سے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 11,
        arabic: "نَفْسًا",
        transliteration: "nafsan",
        root: "ن ف س",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "willingly (lit: soul)", ur: "خوشی سے" },
        grammarRole: "Noun (accusative, tamyiz)",
        case: "mansoob",
        grammarExplanations: {
          en: "Tamyiz - specifier. With a willing soul/heart.",
          ur: "تمییز۔ خوش دلی سے۔"
        }
      },
      {
        position: 12,
        arabic: "فَكُلُوهُ",
        transliteration: "fa-kuluuhu",
        root: "أ ك ل",
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        meaning: { en: "then consume it", ur: "تو اسے کھاؤ" },
        grammarRole: "Result particle + imperative + object pronoun"
      },
      {
        position: 13,
        arabic: "هَنِيئًا",
        transliteration: "hanii'an",
        root: "ه ن أ",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "with satisfaction", ur: "خوشی سے" },
        grammarRole: "Adjective (accusative, hal)",
        case: "mansoob",
        grammarExplanations: {
          en: "Pleasant, wholesome - without guilt or worry.",
          ur: "خوشگوار - بغیر احساس جرم یا فکر۔"
        }
      },
      {
        position: 14,
        arabic: "مَّرِيئًا",
        transliteration: "marii'an",
        root: "م ر أ",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "with ease", ur: "آسانی سے" },
        grammarRole: "Adjective (accusative, hal)",
        case: "mansoob",
        grammarExplanations: {
          en: "Easy to digest, without ill effects - completely lawful.",
          ur: "آسانی سے ہضم، بغیر برے اثر - بالکل حلال۔"
        }
      }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' },
      ],
    },
  },

  5: {
    ayahNumber: 5,
    arabic: "وَلَا تُؤْتُوا السُّفَهَاءَ أَمْوَالَكُمُ الَّتِي جَعَلَ اللَّهُ لَكُمْ قِيَامًا وَارْزُقُوهُمْ فِيهَا وَاكْسُوهُمْ وَقُولُوا لَهُمْ قَوْلًا مَّعْرُوفًا",
    translation: {
      en: "And do not give the weak-minded your property, which Allah has made a means of sustenance for you, but provide for them with it and clothe them and speak to them words of appropriate kindness.",
      ur: "اور بے وقوفوں کو اپنے مال نہ دو جنہیں اللہ نے تمہارے لیے قیام کا ذریعہ بنایا ہے، ہاں انہیں اس سے کھلاؤ اور پہناؤ اور ان سے اچھی بات کہو۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَلَا",
        transliteration: "wa-laa",
        root: null,
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        meaning: { en: "And do not", ur: "اور نہ" },
        grammarRole: "Conjunction + prohibition particle"
      },
      {
        position: 2,
        arabic: "تُؤْتُوا",
        transliteration: "tu'tuu",
        root: "أ ت ي",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "give", ur: "دو" },
        grammarRole: "Verb (jussive, Form IV)",
        grammarExplanations: {
          en: "Form IV - to give, hand over. Prohibition: don't give.",
          ur: "باب افعال - دینا۔ نہی: نہ دو۔"
        }
      },
      {
        position: 3,
        arabic: "السُّفَهَاءَ",
        transliteration: "as-sufahaa'a",
        root: "س ف ه",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the weak-minded", ur: "بے وقوفوں کو" },
        grammarRole: "Noun (accusative, indirect object)",
        case: "mansoob",
        grammarExplanations: {
          en: "Those lacking judgment - includes minors, mentally incapable, financially irresponsible.",
          ur: "بے عقل - نابالغ، ذہنی طور پر نااہل، مالی طور پر غیر ذمہ دار۔"
        },
        advanced: {
          rootFamily: ["سَفِيه (foolish)", "سَفَاهَة (foolishness)", "سُفَهَاء (foolish ones)"],
          balagha: "Not derogatory - practical protection of wealth and incapable"
        }
      },
      {
        position: 4,
        arabic: "أَمْوَالَكُمُ",
        transliteration: "amwaalakum",
        root: "م و ل",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "your property", ur: "اپنے مال" },
        grammarRole: "Noun + possessive pronoun (direct object)",
        case: "mansoob"
      },
      {
        position: 5,
        arabic: "الَّتِي",
        transliteration: "allatii",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "which", ur: "جو" },
        grammarRole: "Relative pronoun (feminine)"
      },
      {
        position: 6,
        arabic: "جَعَلَ",
        transliteration: "ja'ala",
        root: "ج ع ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "made", ur: "بنایا" },
        grammarRole: "Verb (past)"
      },
      {
        position: 7,
        arabic: "اللَّهُ",
        transliteration: "Allaahu",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "Allah", ur: "اللہ" },
        grammarRole: "Proper noun (subject)",
        case: "marfoo"
      },
      {
        position: 8,
        arabic: "لَكُمْ",
        transliteration: "lakum",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "for you", ur: "تمہارے لیے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 9,
        arabic: "قِيَامًا",
        transliteration: "qiyaaman",
        root: "ق و م",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "means of sustenance", ur: "قیام کا ذریعہ" },
        grammarRole: "Noun (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Means of standing/livelihood - wealth sustains society.",
          ur: "قائم رہنے کا ذریعہ - دولت معاشرے کو سہارا دیتی ہے۔"
        },
        advanced: {
          rootFamily: ["قَامَ (to stand)", "قِيَام (standing)", "قَوَّام (maintainer)"]
        }
      },
      {
        position: 10,
        arabic: "وَارْزُقُوهُمْ",
        transliteration: "warzuquuhum",
        root: "ر ز ق",
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        meaning: { en: "and provide for them", ur: "اور انہیں کھلاؤ" },
        grammarRole: "Conjunction + imperative + object pronoun",
        grammarExplanations: {
          en: "Provide their sustenance from this wealth.",
          ur: "اس مال سے ان کا خرچ دو۔"
        }
      },
      {
        position: 11,
        arabic: "فِيهَا",
        transliteration: "fiihaa",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "from it", ur: "اس میں سے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 12,
        arabic: "وَاكْسُوهُمْ",
        transliteration: "waksuuhum",
        root: "ك س و",
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        meaning: { en: "and clothe them", ur: "اور پہناؤ" },
        grammarRole: "Conjunction + imperative + object pronoun",
        grammarExplanations: {
          en: "Provide them clothing - basic needs.",
          ur: "انہیں کپڑے دو - بنیادی ضروریات۔"
        }
      },
      {
        position: 13,
        arabic: "وَقُولُوا",
        transliteration: "wa-quuluu",
        root: "ق و ل",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and speak", ur: "اور کہو" },
        grammarRole: "Conjunction + imperative"
      },
      {
        position: 14,
        arabic: "لَهُمْ",
        transliteration: "lahum",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "to them", ur: "ان سے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 15,
        arabic: "قَوْلًا",
        transliteration: "qawlan",
        root: "ق و ل",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "words", ur: "بات" },
        grammarRole: "Noun (accusative, cognate object)",
        case: "mansoob"
      },
      {
        position: 16,
        arabic: "مَّعْرُوفًا",
        transliteration: "ma'ruufan",
        root: "ع ر ف",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "appropriate/kind", ur: "اچھی" },
        grammarRole: "Adjective (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Known good, appropriate, kind - respectful treatment.",
          ur: "معروف، مناسب، نرم - عزت سے پیش آنا۔"
        },
        advanced: {
          rootFamily: ["عَرَفَ (to know)", "مَعْرُوف (known good)", "عُرْف (custom)"]
        }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      { from: 5, to: 6, label: 'موصول + صلة' },
      { from: 6, to: 10, label: 'عطف' },
      { from: 10, to: 12, label: 'عطف' },
      { from: 12, to: 13, label: 'عطف' },
      { from: 15, to: 16, label: 'موصوف + صفت' }
      ],
    },
  },

  6: {
    ayahNumber: 6,
    arabic: "وَابْتَلُوا الْيَتَامَىٰ حَتَّىٰ إِذَا بَلَغُوا النِّكَاحَ فَإِنْ آنَسْتُم مِّنْهُمْ رُشْدًا فَادْفَعُوا إِلَيْهِمْ أَمْوَالَهُمْ وَلَا تَأْكُلُوهَا إِسْرَافًا وَبِدَارًا أَن يَكْبَرُوا وَمَن كَانَ غَنِيًّا فَلْيَسْتَعْفِفْ وَمَن كَانَ فَقِيرًا فَلْيَأْكُلْ بِالْمَعْرُوفِ فَإِذَا دَفَعْتُمْ إِلَيْهِمْ أَمْوَالَهُمْ فَأَشْهِدُوا عَلَيْهِمْ وَكَفَىٰ بِاللَّهِ حَسِيبًا",
    translation: {
      en: "And test the orphans until they reach marriageable age. Then if you perceive in them sound judgement, release their property to them. And do not consume it excessively or quickly before they grow up. And whoever is self-sufficient should refrain, and whoever is poor may take according to what is acceptable. Then when you release their property to them, bring witnesses upon them. And sufficient is Allah as Accountant.",
      ur: "اور یتیموں کو آزماتے رہو یہاں تک کہ جب وہ نکاح کی عمر کو پہنچ جائیں، پھر اگر ان میں سمجھداری پاؤ تو ان کے مال ان کے حوالے کر دو۔ اور اسے فضول خرچی اور جلدی میں نہ کھاؤ کہ وہ بڑے ہو جائیں گے۔ اور جو غنی ہو وہ بچے اور جو غریب ہو وہ مناسب طریقے سے کھائے۔ پھر جب ان کے مال ان کو دو تو گواہ بنا لو۔ اور اللہ حساب لینے والا کافی ہے۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَابْتَلُوا",
        transliteration: "wabtalu",
        root: "ب ل و",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "And test", ur: "اور آزماؤ" },
        grammarRole: "Conjunction + imperative verb (Form VIII)",
        grammarExplanations: {
          en: "Form VIII - to test, try, examine. Test orphans' maturity.",
          ur: "باب افتعال - آزمانا۔ یتیموں کی سمجھداری جانچو۔"
        },
        advanced: {
          rootFamily: ["بَلَاء (trial)", "ابْتِلَاء (test)", "مُبْتَلَى (tested one)"]
        }
      },
      {
        position: 2,
        arabic: "الْيَتَامَىٰ",
        transliteration: "al-yataamaa",
        root: "ي ت م",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the orphans", ur: "یتیموں کو" },
        grammarRole: "Noun (accusative)",
        case: "mansoob"
      },
      {
        position: 3,
        arabic: "حَتَّىٰ",
        transliteration: "hattaa",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "until", ur: "یہاں تک کہ" },
        grammarRole: "Particle (until)"
      },
      {
        position: 4,
        arabic: "إِذَا",
        transliteration: "idhaa",
        root: null,
        pos: ['COND'],
        posLabel: 'COND',
        meaning: { en: "when", ur: "جب" },
        grammarRole: "Conditional particle (temporal)"
      },
      {
        position: 5,
        arabic: "بَلَغُوا",
        transliteration: "balaghuu",
        root: "ب ل غ",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "they reach", ur: "پہنچ جائیں" },
        grammarRole: "Verb (past, 3rd person masculine plural)",
        grammarExplanations: {
          en: "To reach, attain - reaching the age of maturity.",
          ur: "پہنچنا - بلوغت کی عمر تک پہنچنا۔"
        }
      },
      {
        position: 6,
        arabic: "النِّكَاحَ",
        transliteration: "an-nikaaha",
        root: "ن ك ح",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "marriage (age)", ur: "نکاح کی عمر" },
        grammarRole: "Noun (accusative)",
        case: "mansoob"
      },
      {
        position: 7,
        arabic: "فَإِنْ",
        transliteration: "fa-in",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "then if", ur: "پھر اگر" },
        grammarRole: "Result particle + conditional"
      },
      {
        position: 8,
        arabic: "آنَسْتُم",
        transliteration: "aanastum",
        root: "أ ن س",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "you perceive", ur: "تم پاؤ" },
        grammarRole: "Verb (past, 2nd person masculine plural)",
        grammarExplanations: {
          en: "Form IV - to perceive, recognize. If you see maturity in them.",
          ur: "باب افعال - محسوس کرنا۔ اگر ان میں سمجھداری دیکھو۔"
        }
      },
      {
        position: 9,
        arabic: "مِّنْهُمْ",
        transliteration: "minhum",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "in them", ur: "ان میں" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 10,
        arabic: "رُشْدًا",
        transliteration: "rushdan",
        root: "ر ش د",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "sound judgement", ur: "سمجھداری" },
        grammarRole: "Noun (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Right guidance, maturity, sound judgment in managing affairs.",
          ur: "صحیح سمجھ، بلوغت، معاملات سنبھالنے کی صلاحیت۔"
        },
        advanced: {
          rootFamily: ["رَشَدَ (to be rightly guided)", "رُشْد (guidance)", "رَشِيد (rightly guided)"]
        }
      },
      {
        position: 11,
        arabic: "فَادْفَعُوا",
        transliteration: "fadfa'uu",
        root: "د ف ع",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "then release/hand over", ur: "تو حوالے کر دو" },
        grammarRole: "Result particle + imperative"
      },
      {
        position: 12,
        arabic: "إِلَيْهِمْ",
        transliteration: "ilayhim",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "to them", ur: "ان کو" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 13,
        arabic: "أَمْوَالَهُمْ",
        transliteration: "amwaalahum",
        root: "م و ل",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "their properties", ur: "ان کے مال" },
        grammarRole: "Noun + pronoun (direct object)",
        case: "mansoob"
      },
      {
        position: 14,
        arabic: "وَلَا",
        transliteration: "wa-laa",
        root: null,
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        meaning: { en: "and do not", ur: "اور نہ" },
        grammarRole: "Conjunction + prohibition"
      },
      {
        position: 15,
        arabic: "تَأْكُلُوهَا",
        transliteration: "ta'kuluuhaa",
        root: "أ ك ل",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        meaning: { en: "consume it", ur: "اسے کھاؤ" },
        grammarRole: "Verb (jussive) + object pronoun"
      },
      {
        position: 16,
        arabic: "إِسْرَافًا",
        transliteration: "israafan",
        root: "س ر ف",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "excessively", ur: "فضول خرچی سے" },
        grammarRole: "Noun (accusative, adverbial)",
        case: "mansoob",
        grammarExplanations: {
          en: "Extravagance, wastefully - spending beyond necessity.",
          ur: "فضول خرچی - ضرورت سے زیادہ خرچ کرنا۔"
        }
      },
      {
        position: 17,
        arabic: "وَبِدَارًا",
        transliteration: "wa-bidaaran",
        root: "ب د ر",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        meaning: { en: "and hastily", ur: "اور جلدی میں" },
        grammarRole: "Conjunction + noun (adverbial)",
        grammarExplanations: {
          en: "Hastening, rushing - consuming quickly before they mature.",
          ur: "جلدی کرنا - ان کے بڑے ہونے سے پہلے جلدی کھا جانا۔"
        }
      },
      {
        position: 18,
        arabic: "أَن",
        transliteration: "an",
        root: null,
        pos: ['CONJ'],
        posLabel: 'CONJ',
        meaning: { en: "that", ur: "کہ" },
        grammarRole: "Subjunctive particle"
      },
      {
        position: 19,
        arabic: "يَكْبَرُوا",
        transliteration: "yakbaruu",
        root: "ك ب ر",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "they grow up", ur: "وہ بڑے ہو جائیں" },
        grammarRole: "Verb (subjunctive)"
      },
      {
        position: 20,
        arabic: "وَمَن",
        transliteration: "wa-man",
        root: null,
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        meaning: { en: "and whoever", ur: "اور جو" },
        grammarRole: "Conjunction + relative pronoun"
      },
      {
        position: 21,
        arabic: "كَانَ",
        transliteration: "kaana",
        root: "ك و ن",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "is", ur: "ہو" },
        grammarRole: "Verb (past, deficient)"
      },
      {
        position: 22,
        arabic: "غَنِيًّا",
        transliteration: "ghaniyyan",
        root: "غ ن ي",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "self-sufficient/rich", ur: "غنی" },
        grammarRole: "Adjective (accusative, predicate of kaana)",
        case: "mansoob"
      },
      {
        position: 23,
        arabic: "فَلْيَسْتَعْفِفْ",
        transliteration: "falyasta'fif",
        root: "ع ف ف",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "then let him refrain", ur: "تو بچے" },
        grammarRole: "Result particle + jussive verb (Form X)",
        grammarExplanations: {
          en: "Form X - to abstain, refrain. Rich guardians should not take anything.",
          ur: "باب استفعال - پرہیز کرنا۔ امیر سرپرست کچھ نہ لیں۔"
        }
      },
      {
        position: 24,
        arabic: "وَمَن",
        transliteration: "wa-man",
        root: null,
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        meaning: { en: "and whoever", ur: "اور جو" },
        grammarRole: "Conjunction + relative pronoun"
      },
      {
        position: 25,
        arabic: "كَانَ",
        transliteration: "kaana",
        root: "ك و ن",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "is", ur: "ہو" },
        grammarRole: "Verb (past)"
      },
      {
        position: 26,
        arabic: "فَقِيرًا",
        transliteration: "faqiiran",
        root: "ف ق ر",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "poor", ur: "غریب" },
        grammarRole: "Adjective (accusative)",
        case: "mansoob"
      },
      {
        position: 27,
        arabic: "فَلْيَأْكُلْ",
        transliteration: "falya'kul",
        root: "أ ك ل",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "then let him eat/take", ur: "تو کھائے" },
        grammarRole: "Result particle + jussive verb"
      },
      {
        position: 28,
        arabic: "بِالْمَعْرُوفِ",
        transliteration: "bil-ma'ruufi",
        root: "ع ر ف",
        pos: ['P', 'N'],
        posLabel: 'P+N',
        meaning: { en: "according to what is acceptable", ur: "مناسب طریقے سے" },
        grammarRole: "Preposition + noun (genitive)",
        case: "majroor"
      },
      {
        position: 29,
        arabic: "فَإِذَا",
        transliteration: "fa-idhaa",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "then when", ur: "پھر جب" },
        grammarRole: "Result particle + temporal conditional"
      },
      {
        position: 30,
        arabic: "دَفَعْتُمْ",
        transliteration: "dafa'tum",
        root: "د ف ع",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "you release", ur: "تم دو" },
        grammarRole: "Verb (past, 2nd person masculine plural)"
      },
      {
        position: 31,
        arabic: "إِلَيْهِمْ",
        transliteration: "ilayhim",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "to them", ur: "ان کو" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 32,
        arabic: "أَمْوَالَهُمْ",
        transliteration: "amwaalahum",
        root: "م و ل",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "their properties", ur: "ان کے مال" },
        grammarRole: "Noun + pronoun",
        case: "mansoob"
      },
      {
        position: 33,
        arabic: "فَأَشْهِدُوا",
        transliteration: "fa-ashhiduu",
        root: "ش ه د",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "then bring witnesses", ur: "تو گواہ بناؤ" },
        grammarRole: "Result particle + imperative (Form IV)"
      },
      {
        position: 34,
        arabic: "عَلَيْهِمْ",
        transliteration: "'alayhim",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "upon them", ur: "ان پر" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 35,
        arabic: "وَكَفَىٰ",
        transliteration: "wa-kafaa",
        root: "ك ف ي",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and sufficient is", ur: "اور کافی ہے" },
        grammarRole: "Conjunction + verb (past)"
      },
      {
        position: 36,
        arabic: "بِاللَّهِ",
        transliteration: "billaahi",
        root: "أ ل ه",
        pos: ['P', 'PN'],
        posLabel: 'P+PN',
        meaning: { en: "Allah (as)", ur: "اللہ" },
        grammarRole: "Preposition + proper noun (genitive)",
        case: "majroor"
      },
      {
        position: 37,
        arabic: "حَسِيبًا",
        transliteration: "hasiiban",
        root: "ح س ب",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "an Accountant", ur: "حساب لینے والا" },
        grammarRole: "Noun (accusative, tamyiz)",
        case: "mansoob",
        grammarExplanations: {
          en: "One who takes account - Allah is sufficient as a reckoner.",
          ur: "حساب لینے والا - اللہ حساب لینے کو کافی ہے۔"
        },
        advanced: {
          rootFamily: ["حَسَبَ (to count)", "حِسَاب (account)", "حَسِيب (accountant)"]
        }
      }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 4, to: 5, label: 'شرط + فعل' },
      { from: 7, to: 8, label: 'شرط + فعل' },
      { from: 8, to: 11, label: 'عطف' },
      { from: 14, to: 15, label: 'نفی + فعل' },
      { from: 20, to: 21, label: 'موصول + صلة' },
      { from: 21, to: 23, label: 'عطف' },
      { from: 24, to: 25, label: 'موصول + صلة' },
      { from: 25, to: 27, label: 'عطف' },
      { from: 29, to: 30, label: 'شرط + فعل' },
      { from: 30, to: 33, label: 'عطف' },
      { from: 33, to: 35, label: 'عطف' }
      ],
    },
  },

  7: {
    ayahNumber: 7,
    arabic: "لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ وَلِلنِّسَاءِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ مِمَّا قَلَّ مِنْهُ أَوْ كَثُرَ نَصِيبًا مَّفْرُوضًا",
    translation: {
      en: "For men is a share of what the parents and close relatives leave, and for women is a share of what the parents and close relatives leave, be it little or much - an obligatory share.",
      ur: "مردوں کے لیے حصہ ہے اس میں سے جو والدین اور رشتہ دار چھوڑ جائیں، اور عورتوں کے لیے حصہ ہے اس میں سے جو والدین اور رشتہ دار چھوڑ جائیں، چاہے تھوڑا ہو یا زیادہ - مقرر حصہ۔"
    },
    words: [
      {
        position: 1,
        arabic: "لِّلرِّجَالِ",
        transliteration: "lir-rijaali",
        root: "ر ج ل",
        pos: ['P', 'N'],
        posLabel: 'P+N',
        meaning: { en: "For men", ur: "مردوں کے لیے" },
        grammarRole: "Preposition + noun (genitive)",
        case: "majroor"
      },
      {
        position: 2,
        arabic: "نَصِيبٌ",
        transliteration: "nasiibun",
        root: "ن ص ب",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "a share", ur: "حصہ" },
        grammarRole: "Noun (nominative, subject)",
        case: "marfoo",
        grammarExplanations: {
          en: "A portion, share - men have a defined share in inheritance.",
          ur: "حصہ - مردوں کا وراثت میں مقرر حصہ ہے۔"
        }
      },
      {
        position: 3,
        arabic: "مِّمَّا",
        transliteration: "mimmaa",
        root: null,
        pos: ['P', 'REL'],
        posLabel: 'P+REL',
        meaning: { en: "of what", ur: "اس سے جو" },
        grammarRole: "Preposition + relative pronoun"
      },
      {
        position: 4,
        arabic: "تَرَكَ",
        transliteration: "taraka",
        root: "ت ر ك",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "leave behind", ur: "چھوڑ جائیں" },
        grammarRole: "Verb (past)",
        grammarExplanations: {
          en: "To leave behind - what the deceased leaves as inheritance.",
          ur: "چھوڑ جانا - جو میت وراثت میں چھوڑ جائے۔"
        }
      },
      {
        position: 5,
        arabic: "الْوَالِدَانِ",
        transliteration: "al-waalidaani",
        root: "و ل د",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the parents", ur: "والدین" },
        grammarRole: "Noun (nominative, dual)",
        case: "marfoo"
      },
      {
        position: 6,
        arabic: "وَالْأَقْرَبُونَ",
        transliteration: "wal-aqrabuuna",
        root: "ق ر ب",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        meaning: { en: "and close relatives", ur: "اور رشتہ دار" },
        grammarRole: "Conjunction + noun (nominative, plural)",
        case: "marfoo"
      },
      {
        position: 7,
        arabic: "وَلِلنِّسَاءِ",
        transliteration: "wa-lin-nisaa'i",
        root: "ن س و",
        pos: ['CONJ', 'P', 'N'],
        posLabel: 'CONJ+P+N',
        meaning: { en: "and for women", ur: "اور عورتوں کے لیے" },
        grammarRole: "Conjunction + preposition + noun (genitive)",
        case: "majroor"
      },
      {
        position: 8,
        arabic: "نَصِيبٌ",
        transliteration: "nasiibun",
        root: "ن ص ب",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "a share", ur: "حصہ" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 9,
        arabic: "مِّمَّا",
        transliteration: "mimmaa",
        root: null,
        pos: ['P', 'REL'],
        posLabel: 'P+REL',
        meaning: { en: "of what", ur: "اس سے جو" },
        grammarRole: "Preposition + relative pronoun"
      },
      {
        position: 10,
        arabic: "تَرَكَ",
        transliteration: "taraka",
        root: "ت ر ك",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "leave behind", ur: "چھوڑ جائیں" },
        grammarRole: "Verb (past)"
      },
      {
        position: 11,
        arabic: "الْوَالِدَانِ",
        transliteration: "al-waalidaani",
        root: "و ل د",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the parents", ur: "والدین" },
        grammarRole: "Noun (nominative, dual)",
        case: "marfoo"
      },
      {
        position: 12,
        arabic: "وَالْأَقْرَبُونَ",
        transliteration: "wal-aqrabuuna",
        root: "ق ر ب",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        meaning: { en: "and close relatives", ur: "اور رشتہ دار" },
        grammarRole: "Conjunction + noun (nominative)",
        case: "marfoo"
      },
      {
        position: 13,
        arabic: "مِمَّا",
        transliteration: "mimmaa",
        root: null,
        pos: ['P', 'REL'],
        posLabel: 'P+REL',
        meaning: { en: "of what", ur: "جو" },
        grammarRole: "Preposition + relative pronoun"
      },
      {
        position: 14,
        arabic: "قَلَّ",
        transliteration: "qalla",
        root: "ق ل ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "is little", ur: "تھوڑا ہو" },
        grammarRole: "Verb (past)"
      },
      {
        position: 15,
        arabic: "مِنْهُ",
        transliteration: "minhu",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "of it", ur: "اس میں سے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 16,
        arabic: "أَوْ",
        transliteration: "aw",
        root: null,
        pos: ['CONJ'],
        posLabel: 'CONJ',
        meaning: { en: "or", ur: "یا" },
        grammarRole: "Disjunctive conjunction"
      },
      {
        position: 17,
        arabic: "كَثُرَ",
        transliteration: "kathura",
        root: "ك ث ر",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "is much", ur: "زیادہ ہو" },
        grammarRole: "Verb (past)"
      },
      {
        position: 18,
        arabic: "نَصِيبًا",
        transliteration: "nasiiban",
        root: "ن ص ب",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "a share", ur: "حصہ" },
        grammarRole: "Noun (accusative, hal)",
        case: "mansoob"
      },
      {
        position: 19,
        arabic: "مَّفْرُوضًا",
        transliteration: "mafruudan",
        root: "ف ر ض",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "obligatory/ordained", ur: "مقرر" },
        grammarRole: "Adjective (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Ordained, obligatory - these shares are fixed by Allah, not optional.",
          ur: "فرض، مقرر - یہ حصے اللہ نے مقرر کیے ہیں، اختیاری نہیں۔"
        },
        advanced: {
          rootFamily: ["فَرَضَ (to ordain)", "فَرْض (obligation)", "فَرِيضَة (duty)"]
        }
      }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 9, to: 10, label: 'موصول + صلة' },
      { from: 13, to: 14, label: 'موصول + صلة' },
      { from: 18, to: 19, label: 'موصوف + صفت' }
      ],
    },
  },

  8: {
    ayahNumber: 8,
    arabic: "وَإِذَا حَضَرَ الْقِسْمَةَ أُولُو الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينُ فَارْزُقُوهُم مِّنْهُ وَقُولُوا لَهُمْ قَوْلًا مَّعْرُوفًا",
    translation: {
      en: "And when relatives and orphans and the needy are present at the division, provide for them from it and speak to them words of appropriate kindness.",
      ur: "اور جب تقسیم کے وقت رشتہ دار اور یتیم اور مسکین حاضر ہوں تو ان کو اس میں سے کچھ دو اور ان سے اچھی بات کہو۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَإِذَا",
        transliteration: "wa-idhaa",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "And when", ur: "اور جب" },
        grammarRole: "Conjunction + temporal conditional"
      },
      {
        position: 2,
        arabic: "حَضَرَ",
        transliteration: "hadara",
        root: "ح ض ر",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "are present", ur: "حاضر ہوں" },
        grammarRole: "Verb (past)"
      },
      {
        position: 3,
        arabic: "الْقِسْمَةَ",
        transliteration: "al-qismata",
        root: "ق س م",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the division", ur: "تقسیم" },
        grammarRole: "Noun (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "The division of inheritance - when estate is being distributed.",
          ur: "وراثت کی تقسیم - جب ترکہ تقسیم ہو رہا ہو۔"
        }
      },
      {
        position: 4,
        arabic: "أُولُو",
        transliteration: "uluu",
        root: null,
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "those of/possessors of", ur: "والے" },
        grammarRole: "Noun (nominative, subject)"
      },
      {
        position: 5,
        arabic: "الْقُرْبَىٰ",
        transliteration: "al-qurbaa",
        root: "ق ر ب",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "kinship/relatives", ur: "رشتہ داری" },
        grammarRole: "Noun (genitive)",
        case: "majroor"
      },
      {
        position: 6,
        arabic: "وَالْيَتَامَىٰ",
        transliteration: "wal-yataamaa",
        root: "ي ت م",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        meaning: { en: "and orphans", ur: "اور یتیم" },
        grammarRole: "Conjunction + noun"
      },
      {
        position: 7,
        arabic: "وَالْمَسَاكِينُ",
        transliteration: "wal-masaakiinu",
        root: "س ك ن",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        meaning: { en: "and the needy", ur: "اور مسکین" },
        grammarRole: "Conjunction + noun (nominative)",
        case: "marfoo"
      },
      {
        position: 8,
        arabic: "فَارْزُقُوهُم",
        transliteration: "farzuquuhum",
        root: "ر ز ق",
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        meaning: { en: "then provide for them", ur: "تو ان کو دو" },
        grammarRole: "Result particle + imperative + object pronoun"
      },
      {
        position: 9,
        arabic: "مِّنْهُ",
        transliteration: "minhu",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "from it", ur: "اس میں سے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 10,
        arabic: "وَقُولُوا",
        transliteration: "wa-quuluu",
        root: "ق و ل",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and speak", ur: "اور کہو" },
        grammarRole: "Conjunction + imperative"
      },
      {
        position: 11,
        arabic: "لَهُمْ",
        transliteration: "lahum",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "to them", ur: "ان سے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 12,
        arabic: "قَوْلًا",
        transliteration: "qawlan",
        root: "ق و ل",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "words", ur: "بات" },
        grammarRole: "Noun (accusative)",
        case: "mansoob"
      },
      {
        position: 13,
        arabic: "مَّعْرُوفًا",
        transliteration: "ma'ruufan",
        root: "ع ر ف",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "appropriate/kind", ur: "اچھی" },
        grammarRole: "Adjective (accusative)",
        case: "mansoob"
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 2, to: 8, label: 'عطف' },
      { from: 8, to: 10, label: 'عطف' },
      { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },

  9: {
    ayahNumber: 9,
    arabic: "وَلْيَخْشَ الَّذِينَ لَوْ تَرَكُوا مِنْ خَلْفِهِمْ ذُرِّيَّةً ضِعَافًا خَافُوا عَلَيْهِمْ فَلْيَتَّقُوا اللَّهَ وَلْيَقُولُوا قَوْلًا سَدِيدًا",
    translation: {
      en: "And let those fear who, if they left behind weak offspring, would fear for them. So let them fear Allah and speak words of appropriate justice.",
      ur: "اور ان لوگوں کو ڈرنا چاہیے جو اگر اپنے پیچھے کمزور اولاد چھوڑ جائیں تو ان کی فکر کریں۔ پس انہیں اللہ سے ڈرنا چاہیے اور سیدھی بات کہنی چاہیے۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَلْيَخْشَ",
        transliteration: "wal-yakhsha",
        root: "خ ش ي",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "And let fear", ur: "اور ڈریں" },
        grammarRole: "Conjunction + jussive verb",
        grammarExplanations: {
          en: "Jussive verb - command for those who would worry about their own children.",
          ur: "فعل امر - ان کے لیے جو اپنے بچوں کی فکر کرتے۔"
        }
      },
      {
        position: 2,
        arabic: "الَّذِينَ",
        transliteration: "alladhiina",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "those who", ur: "وہ جو" },
        grammarRole: "Relative pronoun (masculine plural)"
      },
      {
        position: 3,
        arabic: "لَوْ",
        transliteration: "law",
        root: null,
        pos: ['COND'],
        posLabel: 'COND',
        meaning: { en: "if", ur: "اگر" },
        grammarRole: "Hypothetical conditional particle"
      },
      {
        position: 4,
        arabic: "تَرَكُوا",
        transliteration: "tarakuu",
        root: "ت ر ك",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "they left", ur: "چھوڑ جائیں" },
        grammarRole: "Verb (past, 3rd person masculine plural)"
      },
      {
        position: 5,
        arabic: "مِنْ",
        transliteration: "min",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "from", ur: "سے" },
        grammarRole: "Preposition"
      },
      {
        position: 6,
        arabic: "خَلْفِهِمْ",
        transliteration: "khalfihim",
        root: "خ ل ف",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "behind them", ur: "اپنے پیچھے" },
        grammarRole: "Noun + pronoun (genitive)",
        case: "majroor"
      },
      {
        position: 7,
        arabic: "ذُرِّيَّةً",
        transliteration: "dhurriyyatan",
        root: "ذ ر ر",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "offspring", ur: "اولاد" },
        grammarRole: "Noun (accusative)",
        case: "mansoob"
      },
      {
        position: 8,
        arabic: "ضِعَافًا",
        transliteration: "'di'aafan",
        root: "ض ع ف",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "weak", ur: "کمزور" },
        grammarRole: "Adjective (accusative)",
        case: "mansoob"
      },
      {
        position: 9,
        arabic: "خَافُوا",
        transliteration: "khaafuu",
        root: "خ و ف",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "they would fear", ur: "فکر کریں" },
        grammarRole: "Verb (past, result of law)"
      },
      {
        position: 10,
        arabic: "عَلَيْهِمْ",
        transliteration: "'alayhim",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "for them", ur: "ان کی" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 11,
        arabic: "فَلْيَتَّقُوا",
        transliteration: "falyattaquu",
        root: "و ق ي",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "so let them fear", ur: "تو ڈریں" },
        grammarRole: "Result particle + jussive verb (Form VIII)"
      },
      {
        position: 12,
        arabic: "اللَّهَ",
        transliteration: "Allaaha",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "Allah", ur: "اللہ سے" },
        grammarRole: "Proper noun (accusative)",
        case: "mansoob"
      },
      {
        position: 13,
        arabic: "وَلْيَقُولُوا",
        transliteration: "wal-yaquuluu",
        root: "ق و ل",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and let them speak", ur: "اور کہیں" },
        grammarRole: "Conjunction + jussive verb"
      },
      {
        position: 14,
        arabic: "قَوْلًا",
        transliteration: "qawlan",
        root: "ق و ل",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "words", ur: "بات" },
        grammarRole: "Noun (accusative)",
        case: "mansoob"
      },
      {
        position: 15,
        arabic: "سَدِيدًا",
        transliteration: "sadiidan",
        root: "س د د",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "appropriate/just", ur: "سیدھی" },
        grammarRole: "Adjective (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Straight, correct, just - truthful and honest words.",
          ur: "سیدھی، درست - سچی اور ایماندار بات۔"
        }
      }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
      ],
    },
  },

  10: {
    ayahNumber: 10,
    arabic: "إِنَّ الَّذِينَ يَأْكُلُونَ أَمْوَالَ الْيَتَامَىٰ ظُلْمًا إِنَّمَا يَأْكُلُونَ فِي بُطُونِهِمْ نَارًا وَسَيَصْلَوْنَ سَعِيرًا",
    translation: {
      en: "Indeed, those who devour the property of orphans unjustly are only consuming into their bellies fire. And they will burn in a Blaze.",
      ur: "بے شک جو لوگ یتیموں کا مال ظلم سے کھاتے ہیں وہ اپنے پیٹوں میں آگ بھرتے ہیں اور عنقریب دوزخ میں داخل ہوں گے۔"
    },
    words: [
      {
        position: 1,
        arabic: "إِنَّ",
        transliteration: "inna",
        root: null,
        pos: ['ACC'],
        posLabel: 'ACC',
        meaning: { en: "Indeed", ur: "بے شک" },
        grammarRole: "Emphatic particle"
      },
      {
        position: 2,
        arabic: "الَّذِينَ",
        transliteration: "alladhiina",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "those who", ur: "جو لوگ" },
        grammarRole: "Relative pronoun (subject of inna)"
      },
      {
        position: 3,
        arabic: "يَأْكُلُونَ",
        transliteration: "ya'kuluuna",
        root: "أ ك ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "consume/devour", ur: "کھاتے ہیں" },
        grammarRole: "Verb (imperfect, 3rd person masculine plural)"
      },
      {
        position: 4,
        arabic: "أَمْوَالَ",
        transliteration: "amwaala",
        root: "م و ل",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "property", ur: "مال" },
        grammarRole: "Noun (accusative)",
        case: "mansoob"
      },
      {
        position: 5,
        arabic: "الْيَتَامَىٰ",
        transliteration: "al-yataamaa",
        root: "ي ت م",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "orphans", ur: "یتیموں کا" },
        grammarRole: "Noun (genitive)",
        case: "majroor"
      },
      {
        position: 6,
        arabic: "ظُلْمًا",
        transliteration: "dhulman",
        root: "ظ ل م",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "unjustly", ur: "ظلم سے" },
        grammarRole: "Noun (accusative, adverbial)",
        case: "mansoob",
        grammarExplanations: {
          en: "Wrongfully, unjustly - they have no right to it.",
          ur: "ظلم سے - ان کا اس پر کوئی حق نہیں۔"
        }
      },
      {
        position: 7,
        arabic: "إِنَّمَا",
        transliteration: "innamaa",
        root: null,
        pos: ['RES'],
        posLabel: 'RES',
        meaning: { en: "only/indeed", ur: "بس" },
        grammarRole: "Restrictive particle"
      },
      {
        position: 8,
        arabic: "يَأْكُلُونَ",
        transliteration: "ya'kuluuna",
        root: "أ ك ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "they consume", ur: "وہ کھاتے ہیں" },
        grammarRole: "Verb (imperfect)"
      },
      {
        position: 9,
        arabic: "فِي",
        transliteration: "fii",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "into", ur: "میں" },
        grammarRole: "Preposition"
      },
      {
        position: 10,
        arabic: "بُطُونِهِمْ",
        transliteration: "butuunihim",
        root: "ب ط ن",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "their bellies", ur: "اپنے پیٹوں" },
        grammarRole: "Noun + pronoun (genitive)",
        case: "majroor",
        grammarExplanations: {
          en: "Their stomachs - vivid imagery of consuming fire.",
          ur: "اپنے پیٹ - آگ کھانے کی واضح تصویر۔"
        }
      },
      {
        position: 11,
        arabic: "نَارًا",
        transliteration: "naaran",
        root: "ن و ر",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "fire", ur: "آگ" },
        grammarRole: "Noun (accusative)",
        case: "mansoob",
        advanced: {
          balagha: "Powerful metaphor - orphans' wealth transforms to hellfire in their bellies"
        }
      },
      {
        position: 12,
        arabic: "وَسَيَصْلَوْنَ",
        transliteration: "wa-sayaslawna",
        root: "ص ل ي",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and they will burn", ur: "اور داخل ہوں گے" },
        grammarRole: "Conjunction + future verb",
        grammarExplanations: {
          en: "They will enter/burn - future punishment in Hellfire.",
          ur: "وہ داخل ہوں گے/جلیں گے - آخرت کی سزا۔"
        }
      },
      {
        position: 13,
        arabic: "سَعِيرًا",
        transliteration: "sa'iiran",
        root: "س ع ر",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "a Blaze", ur: "دوزخ" },
        grammarRole: "Noun (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Blazing fire - one of the names of Hellfire.",
          ur: "بھڑکتی آگ - جہنم کے ناموں میں سے ایک۔"
        }
      }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' },
      ],
    },
  },

  11: {
    ayahNumber: 11,
    arabic: "يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ فَإِن كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ وَإِن كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُ مِمَّا تَرَكَ إِن كَانَ لَهُ وَلَدٌ فَإِن لَّمْ يَكُن لَّهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ فَلِأُمِّهِ الثُّلُثُ فَإِن كَانَ لَهُ إِخْوَةٌ فَلِأُمِّهِ السُّدُسُ مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًا فَرِيضَةً مِّنَ اللَّهِ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا",
    translation: {
      en: "Allah instructs you concerning your children: for the male, what is equal to the share of two females. But if there are [only] daughters, two or more, for them is two thirds of one's estate. And if there is only one, for her is half. And for one's parents, to each one of them is a sixth of his estate if he left children. But if he had no children and the parents [alone] inherit from him, then for his mother is one third. And if he had brothers, for his mother is a sixth, after any bequest he may have made or debt. Your parents or your children - you know not which of them are nearest to you in benefit. [These shares are] an obligation from Allah. Indeed, Allah is ever Knowing and Wise.",
      ur: "اللہ تمہیں تمہاری اولاد کے بارے میں حکم دیتا ہے: لڑکے کا حصہ دو لڑکیوں کے برابر ہے۔ پھر اگر صرف لڑکیاں ہوں دو یا زیادہ تو ان کو ترکے کا دو تہائی ملے گا۔ اور اگر ایک ہی لڑکی ہو تو اس کو آدھا۔ اور اس کے ماں باپ میں سے ہر ایک کو چھٹا حصہ اگر اس کی اولاد ہو۔ لیکن اگر اولاد نہ ہو اور صرف ماں باپ وارث ہوں تو ماں کو تہائی۔ اور اگر اس کے بھائی ہوں تو ماں کو چھٹا حصہ، وصیت یا قرض کے بعد۔ تمہارے باپ اور بیٹے - تم نہیں جانتے کون تمہیں زیادہ فائدہ پہنچائے۔ یہ اللہ کی طرف سے فرض ہے۔ بے شک اللہ علم والا حکمت والا ہے۔"
    },
    words: [
      {
        position: 1,
        arabic: "يُوصِيكُمُ",
        transliteration: "yuusiikum",
        root: "و ص ي",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        meaning: { en: "instructs you", ur: "تمہیں حکم دیتا ہے" },
        grammarRole: "Verb (Form IV) + object pronoun",
        grammarExplanations: {
          en: "Allah commands/instructs you - divine legislation on inheritance.",
          ur: "اللہ تمہیں حکم دیتا ہے - وراثت پر الہی قانون۔"
        }
      },
      {
        position: 2,
        arabic: "اللَّهُ",
        transliteration: "Allaahu",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "Allah", ur: "اللہ" },
        grammarRole: "Proper noun (subject)",
        case: "marfoo"
      },
      {
        position: 3,
        arabic: "فِي",
        transliteration: "fii",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "concerning", ur: "کے بارے میں" },
        grammarRole: "Preposition"
      },
      {
        position: 4,
        arabic: "أَوْلَادِكُمْ",
        transliteration: "awlaadikum",
        root: "و ل د",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "your children", ur: "تمہاری اولاد" },
        grammarRole: "Noun + pronoun (genitive)",
        case: "majroor"
      },
      {
        position: 5,
        arabic: "لِلذَّكَرِ",
        transliteration: "lidh-dhakari",
        root: "ذ ك ر",
        pos: ['P', 'N'],
        posLabel: 'P+N',
        meaning: { en: "for the male", ur: "لڑکے کو" },
        grammarRole: "Preposition + noun (genitive)",
        case: "majroor"
      },
      {
        position: 6,
        arabic: "مِثْلُ",
        transliteration: "mithlu",
        root: "م ث ل",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "equal to/like", ur: "برابر" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 7,
        arabic: "حَظِّ",
        transliteration: "hadhdhhi",
        root: "ح ظ ظ",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "share", ur: "حصہ" },
        grammarRole: "Noun (genitive)",
        case: "majroor"
      },
      {
        position: 8,
        arabic: "الْأُنثَيَيْنِ",
        transliteration: "al-unthayayni",
        root: "أ ن ث",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "two females", ur: "دو لڑکیوں" },
        grammarRole: "Noun (genitive, dual)",
        case: "majroor",
        grammarExplanations: {
          en: "Two females - son gets double the share of a daughter.",
          ur: "دو لڑکیاں - بیٹے کو بیٹی سے دگنا ملتا ہے۔"
        }
      },
      {
        position: 9,
        arabic: "فَإِن",
        transliteration: "fa-in",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "but if", ur: "پھر اگر" },
        grammarRole: "Result particle + conditional"
      },
      {
        position: 10,
        arabic: "كُنَّ",
        transliteration: "kunna",
        root: "ك و ن",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "they are", ur: "ہوں" },
        grammarRole: "Verb (past, 3rd person feminine plural)"
      },
      {
        position: 11,
        arabic: "نِسَاءً",
        transliteration: "nisaa'an",
        root: "ن س و",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "women/daughters", ur: "لڑکیاں" },
        grammarRole: "Noun (accusative)",
        case: "mansoob"
      },
      {
        position: 12,
        arabic: "فَوْقَ",
        transliteration: "fawqa",
        root: "ف و ق",
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "more than", ur: "سے زیادہ" },
        grammarRole: "Preposition"
      },
      {
        position: 13,
        arabic: "اثْنَتَيْنِ",
        transliteration: "ithnatayni",
        root: "ث ن ي",
        pos: ['NUM'],
        posLabel: 'NUM',
        meaning: { en: "two", ur: "دو" },
        grammarRole: "Numeral (genitive, feminine dual)",
        case: "majroor"
      },
      {
        position: 14,
        arabic: "فَلَهُنَّ",
        transliteration: "falahunna",
        root: null,
        pos: ['CONJ', 'P', 'PRON'],
        posLabel: 'CONJ+P+PRON',
        meaning: { en: "then for them", ur: "تو ان کو" },
        grammarRole: "Result particle + preposition + pronoun"
      },
      {
        position: 15,
        arabic: "ثُلُثَا",
        transliteration: "thuluthaa",
        root: "ث ل ث",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "two-thirds", ur: "دو تہائی" },
        grammarRole: "Noun (nominative, dual construct)",
        case: "marfoo"
      },
      {
        position: 16,
        arabic: "مَا",
        transliteration: "maa",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "what", ur: "جو" },
        grammarRole: "Relative pronoun"
      },
      {
        position: 17,
        arabic: "تَرَكَ",
        transliteration: "taraka",
        root: "ت ر ك",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "he left", ur: "چھوڑا" },
        grammarRole: "Verb (past)"
      }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
      ],
    },
  },

  12: {
    ayahNumber: 12,
    arabic: "وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِن لَّمْ يَكُن لَّهُنَّ وَلَدٌ فَإِن كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكْنَ مِن بَعْدِ وَصِيَّةٍ يُوصِينَ بِهَا أَوْ دَيْنٍ وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِن لَّمْ يَكُن لَّكُمْ وَلَدٌ فَإِن كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُم مِّن بَعْدِ وَصِيَّةٍ تُوصُونَ بِهَا أَوْ دَيْنٍ",
    translation: {
      en: "And for you is half of what your wives leave if they have no child. But if they have a child, for you is one fourth of what they leave, after any bequest they may have made or debt. And for them is one fourth of what you leave if you have no child. But if you have a child, then for them is an eighth of what you leave, after any bequest you may have made or debt.",
      ur: "اور تمہارے لیے آدھا ہے جو تمہاری بیویاں چھوڑیں اگر ان کی اولاد نہ ہو۔ لیکن اگر ان کی اولاد ہو تو تمہارے لیے چوتھائی، ان کی وصیت یا قرض کے بعد۔ اور ان کے لیے چوتھائی ہے جو تم چھوڑو اگر تمہاری اولاد نہ ہو۔ لیکن اگر تمہاری اولاد ہو تو ان کے لیے آٹھواں حصہ، تمہاری وصیت یا قرض کے بعد۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَلَكُمْ",
        transliteration: "wa-lakum",
        root: null,
        pos: ['CONJ', 'P', 'PRON'],
        posLabel: 'CONJ+P+PRON',
        meaning: { en: "And for you", ur: "اور تمہارے لیے" },
        grammarRole: "Conjunction + preposition + pronoun"
      },
      {
        position: 2,
        arabic: "نِصْفُ",
        transliteration: "nisfu",
        root: "ن ص ف",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "half", ur: "آدھا" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 3,
        arabic: "مَا",
        transliteration: "maa",
        root: null,
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: "what", ur: "جو" },
        grammarRole: "Relative pronoun"
      },
      {
        position: 4,
        arabic: "تَرَكَ",
        transliteration: "taraka",
        root: "ت ر ك",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "leave", ur: "چھوڑیں" },
        grammarRole: "Verb (past)"
      },
      {
        position: 5,
        arabic: "أَزْوَاجُكُمْ",
        transliteration: "azwaajukum",
        root: "ز و ج",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "your wives", ur: "تمہاری بیویاں" },
        grammarRole: "Noun + pronoun (nominative)",
        case: "marfoo"
      },
      {
        position: 6,
        arabic: "إِن",
        transliteration: "in",
        root: null,
        pos: ['COND'],
        posLabel: 'COND',
        meaning: { en: "if", ur: "اگر" },
        grammarRole: "Conditional particle"
      },
      {
        position: 7,
        arabic: "لَّمْ",
        transliteration: "lam",
        root: null,
        pos: ['NEG'],
        posLabel: 'NEG',
        meaning: { en: "not", ur: "نہ" },
        grammarRole: "Negative particle (jussive)"
      },
      {
        position: 8,
        arabic: "يَكُن",
        transliteration: "yakun",
        root: "ك و ن",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "there is", ur: "ہو" },
        grammarRole: "Verb (jussive)"
      },
      {
        position: 9,
        arabic: "لَّهُنَّ",
        transliteration: "lahunna",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "for them", ur: "ان کی" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 10,
        arabic: "وَلَدٌ",
        transliteration: "waladun",
        root: "و ل د",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "child", ur: "اولاد" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 11,
        arabic: "فَإِن",
        transliteration: "fa-in",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "but if", ur: "لیکن اگر" },
        grammarRole: "Result particle + conditional"
      },
      {
        position: 12,
        arabic: "كَانَ",
        transliteration: "kaana",
        root: "ك و ن",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "there is", ur: "ہو" },
        grammarRole: "Verb (past)"
      },
      {
        position: 13,
        arabic: "لَهُنَّ",
        transliteration: "lahunna",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "for them", ur: "ان کی" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 14,
        arabic: "وَلَدٌ",
        transliteration: "waladun",
        root: "و ل د",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "child", ur: "اولاد" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 15,
        arabic: "فَلَكُمُ",
        transliteration: "falakum",
        root: null,
        pos: ['CONJ', 'P', 'PRON'],
        posLabel: 'CONJ+P+PRON',
        meaning: { en: "then for you", ur: "تو تمہارے لیے" },
        grammarRole: "Result particle + preposition + pronoun"
      },
      {
        position: 16,
        arabic: "الرُّبُعُ",
        transliteration: "ar-rubu'u",
        root: "ر ب ع",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "one-fourth", ur: "چوتھائی" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصول + صلة' },
      { from: 7, to: 8, label: 'نفی + فعل' },
      { from: 11, to: 12, label: 'شرط + فعل' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    arabic: "تِلْكَ حُدُودُ اللَّهِ وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
    translation: {
      en: "These are the limits set by Allah. And whoever obeys Allah and His Messenger will be admitted by Him to gardens under which rivers flow, abiding eternally therein; and that is the great attainment.",
      ur: "یہ اللہ کی حدیں ہیں۔ اور جو اللہ اور اس کے رسول کی اطاعت کرے اسے وہ جنتوں میں داخل کرے گا جن کے نیچے نہریں بہتی ہیں، ہمیشہ ان میں رہیں گے۔ اور یہی بڑی کامیابی ہے۔"
    },
    words: [
      {
        position: 1,
        arabic: "تِلْكَ",
        transliteration: "tilka",
        root: null,
        pos: ['DEM'],
        posLabel: 'DEM',
        meaning: { en: "These", ur: "یہ" },
        grammarRole: "Demonstrative pronoun (feminine)"
      },
      {
        position: 2,
        arabic: "حُدُودُ",
        transliteration: "huduudu",
        root: "ح د د",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "limits/boundaries", ur: "حدیں" },
        grammarRole: "Noun (nominative)",
        case: "marfoo",
        grammarExplanations: {
          en: "Limits - Allah's prescribed boundaries that must not be transgressed.",
          ur: "حدود - اللہ کی مقرر کردہ سرحدیں جن سے تجاوز نہیں کرنا۔"
        }
      },
      {
        position: 3,
        arabic: "اللَّهِ",
        transliteration: "Allaahi",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "of Allah", ur: "اللہ کی" },
        grammarRole: "Proper noun (genitive)",
        case: "majroor"
      },
      {
        position: 4,
        arabic: "وَمَن",
        transliteration: "wa-man",
        root: null,
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        meaning: { en: "and whoever", ur: "اور جو" },
        grammarRole: "Conjunction + relative pronoun"
      },
      {
        position: 5,
        arabic: "يُطِعِ",
        transliteration: "yuti'i",
        root: "ط و ع",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "obeys", ur: "اطاعت کرے" },
        grammarRole: "Verb (jussive, Form IV)",
        grammarExplanations: {
          en: "Form IV - to obey. Jussive due to conditional man.",
          ur: "باب افعال - اطاعت کرنا۔ مَن کی وجہ سے مجزوم۔"
        }
      },
      {
        position: 6,
        arabic: "اللَّهَ",
        transliteration: "Allaaha",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "Allah", ur: "اللہ" },
        grammarRole: "Proper noun (accusative)",
        case: "mansoob"
      },
      {
        position: 7,
        arabic: "وَرَسُولَهُ",
        transliteration: "wa-rasuulahu",
        root: "ر س ل",
        pos: ['CONJ', 'N', 'PRON'],
        posLabel: 'CONJ+N+PRON',
        meaning: { en: "and His Messenger", ur: "اور اس کے رسول" },
        grammarRole: "Conjunction + noun + pronoun (accusative)",
        case: "mansoob"
      },
      {
        position: 8,
        arabic: "يُدْخِلْهُ",
        transliteration: "yudkhilhu",
        root: "د خ ل",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        meaning: { en: "He will admit him", ur: "اسے داخل کرے گا" },
        grammarRole: "Verb (jussive, Form IV) + object pronoun"
      },
      {
        position: 9,
        arabic: "جَنَّاتٍ",
        transliteration: "jannaatin",
        root: "ج ن ن",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "gardens", ur: "جنتوں" },
        grammarRole: "Noun (accusative, plural)",
        case: "mansoob"
      },
      {
        position: 10,
        arabic: "تَجْرِي",
        transliteration: "tajrii",
        root: "ج ر ي",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "flow", ur: "بہتی ہیں" },
        grammarRole: "Verb (imperfect)"
      },
      {
        position: 11,
        arabic: "مِن",
        transliteration: "min",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "from", ur: "سے" },
        grammarRole: "Preposition"
      },
      {
        position: 12,
        arabic: "تَحْتِهَا",
        transliteration: "tahtihaa",
        root: "ت ح ت",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "beneath them", ur: "نیچے" },
        grammarRole: "Noun + pronoun (genitive)",
        case: "majroor"
      },
      {
        position: 13,
        arabic: "الْأَنْهَارُ",
        transliteration: "al-anhaaru",
        root: "ن ه ر",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "rivers", ur: "نہریں" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 14,
        arabic: "خَالِدِينَ",
        transliteration: "khaalidiina",
        root: "خ ل د",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "abiding eternally", ur: "ہمیشہ رہیں گے" },
        grammarRole: "Active participle (accusative, hal)",
        case: "mansoob"
      },
      {
        position: 15,
        arabic: "فِيهَا",
        transliteration: "fiihaa",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "therein", ur: "ان میں" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 16,
        arabic: "وَذَٰلِكَ",
        transliteration: "wa-dhaalika",
        root: null,
        pos: ['CONJ', 'DEM'],
        posLabel: 'CONJ+DEM',
        meaning: { en: "and that", ur: "اور یہی" },
        grammarRole: "Conjunction + demonstrative"
      },
      {
        position: 17,
        arabic: "الْفَوْزُ",
        transliteration: "al-fawzu",
        root: "ف و ز",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the attainment/success", ur: "کامیابی" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 18,
        arabic: "الْعَظِيمُ",
        transliteration: "al-'adhiimu",
        root: "ع ظ م",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "the great", ur: "بڑی" },
        grammarRole: "Adjective (nominative)",
        case: "marfoo"
      }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'جار + مجرور' },
      ],
    },
  },

  14: {
    ayahNumber: 14,
    arabic: "وَمَن يَعْصِ اللَّهَ وَرَسُولَهُ وَيَتَعَدَّ حُدُودَهُ يُدْخِلْهُ نَارًا خَالِدًا فِيهَا وَلَهُ عَذَابٌ مُّهِينٌ",
    translation: {
      en: "And whoever disobeys Allah and His Messenger and transgresses His limits - He will put him into the Fire to abide eternally therein, and he will have a humiliating punishment.",
      ur: "اور جو اللہ اور اس کے رسول کی نافرمانی کرے اور اس کی حدود سے تجاوز کرے، اسے آگ میں ڈالے گا ہمیشہ اس میں رہے گا، اور اس کے لیے ذلت کی سزا ہے۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَمَن",
        transliteration: "wa-man",
        root: null,
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        meaning: { en: "And whoever", ur: "اور جو" },
        grammarRole: "Conjunction + relative pronoun"
      },
      {
        position: 2,
        arabic: "يَعْصِ",
        transliteration: "ya'si",
        root: "ع ص ي",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "disobeys", ur: "نافرمانی کرے" },
        grammarRole: "Verb (jussive)",
        grammarExplanations: {
          en: "To disobey, rebel - opposite of obedience.",
          ur: "نافرمانی کرنا - اطاعت کے برعکس۔"
        }
      },
      {
        position: 3,
        arabic: "اللَّهَ",
        transliteration: "Allaaha",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "Allah", ur: "اللہ" },
        grammarRole: "Proper noun (accusative)",
        case: "mansoob"
      },
      {
        position: 4,
        arabic: "وَرَسُولَهُ",
        transliteration: "wa-rasuulahu",
        root: "ر س ل",
        pos: ['CONJ', 'N', 'PRON'],
        posLabel: 'CONJ+N+PRON',
        meaning: { en: "and His Messenger", ur: "اور اس کے رسول" },
        grammarRole: "Conjunction + noun + pronoun (accusative)",
        case: "mansoob"
      },
      {
        position: 5,
        arabic: "وَيَتَعَدَّ",
        transliteration: "wa-yata'adda",
        root: "ع د و",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "and transgresses", ur: "اور تجاوز کرے" },
        grammarRole: "Conjunction + verb (jussive, Form V)",
        grammarExplanations: {
          en: "Form V - to transgress, go beyond limits.",
          ur: "باب تفعّل - حد سے گزرنا۔"
        }
      },
      {
        position: 6,
        arabic: "حُدُودَهُ",
        transliteration: "huduudahu",
        root: "ح د د",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "His limits", ur: "اس کی حدیں" },
        grammarRole: "Noun + pronoun (accusative)",
        case: "mansoob"
      },
      {
        position: 7,
        arabic: "يُدْخِلْهُ",
        transliteration: "yudkhilhu",
        root: "د خ ل",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        meaning: { en: "He will put him", ur: "اسے ڈالے گا" },
        grammarRole: "Verb (jussive) + object pronoun"
      },
      {
        position: 8,
        arabic: "نَارًا",
        transliteration: "naaran",
        root: "ن و ر",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "Fire", ur: "آگ" },
        grammarRole: "Noun (accusative)",
        case: "mansoob"
      },
      {
        position: 9,
        arabic: "خَالِدًا",
        transliteration: "khaalidan",
        root: "خ ل د",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "abiding eternally", ur: "ہمیشہ" },
        grammarRole: "Active participle (accusative, hal)",
        case: "mansoob"
      },
      {
        position: 10,
        arabic: "فِيهَا",
        transliteration: "fiihaa",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "therein", ur: "اس میں" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 11,
        arabic: "وَلَهُ",
        transliteration: "wa-lahu",
        root: null,
        pos: ['CONJ', 'P', 'PRON'],
        posLabel: 'CONJ+P+PRON',
        meaning: { en: "and for him", ur: "اور اس کے لیے" },
        grammarRole: "Conjunction + preposition + pronoun"
      },
      {
        position: 12,
        arabic: "عَذَابٌ",
        transliteration: "'adhaabun",
        root: "ع ذ ب",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "punishment", ur: "عذاب" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 13,
        arabic: "مُّهِينٌ",
        transliteration: "muhiinun",
        root: "ه و ن",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        meaning: { en: "humiliating", ur: "ذلت کا" },
        grammarRole: "Adjective (nominative)",
        case: "marfoo",
        grammarExplanations: {
          en: "Humiliating, degrading - punishment that strips dignity.",
          ur: "ذلت آمیز - سزا جو عزت چھین لے۔"
        }
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'موصول + صلة' },
      { from: 2, to: 5, label: 'عطف' },
      { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },

  15: {
    ayahNumber: 15,
    arabic: "وَاللَّاتِي يَأْتِينَ الْفَاحِشَةَ مِن نِّسَائِكُمْ فَاسْتَشْهِدُوا عَلَيْهِنَّ أَرْبَعَةً مِّنكُمْ فَإِن شَهِدُوا فَأَمْسِكُوهُنَّ فِي الْبُيُوتِ حَتَّىٰ يَتَوَفَّاهُنَّ الْمَوْتُ أَوْ يَجْعَلَ اللَّهُ لَهُنَّ سَبِيلًا",
    translation: {
      en: "Those who commit immorality of your women - bring against them four witnesses from among you. And if they testify, confine them to houses until death takes them or Allah ordains for them another way.",
      ur: "اور تمہاری عورتوں میں سے جو بے حیائی کریں، ان پر اپنے میں سے چار گواہ لاؤ۔ پھر اگر وہ گواہی دیں تو انہیں گھروں میں روکے رکھو یہاں تک کہ موت ان کو اٹھا لے یا اللہ ان کے لیے کوئی راستہ نکالے۔"
    },
    words: [
      {
        position: 1,
        arabic: "وَاللَّاتِي",
        transliteration: "wallaatii",
        root: null,
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        meaning: { en: "And those who", ur: "اور جو عورتیں" },
        grammarRole: "Conjunction + relative pronoun (feminine plural)"
      },
      {
        position: 2,
        arabic: "يَأْتِينَ",
        transliteration: "ya'tiina",
        root: "أ ت ي",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "commit", ur: "کریں" },
        grammarRole: "Verb (imperfect, 3rd person feminine plural)"
      },
      {
        position: 3,
        arabic: "الْفَاحِشَةَ",
        transliteration: "al-faahishata",
        root: "ف ح ش",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the immorality", ur: "بے حیائی" },
        grammarRole: "Noun (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "Fahishah - grave immorality, specifically adultery/fornication.",
          ur: "فاحشہ - بڑی بے حیائی، خاص طور پر زنا۔"
        }
      },
      {
        position: 4,
        arabic: "مِن",
        transliteration: "min",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "of", ur: "میں سے" },
        grammarRole: "Preposition"
      },
      {
        position: 5,
        arabic: "نِّسَائِكُمْ",
        transliteration: "nisaa'ikum",
        root: "ن س و",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        meaning: { en: "your women", ur: "تمہاری عورتوں" },
        grammarRole: "Noun + pronoun (genitive)",
        case: "majroor"
      },
      {
        position: 6,
        arabic: "فَاسْتَشْهِدُوا",
        transliteration: "fastashhiduu",
        root: "ش ه د",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        meaning: { en: "then bring witnesses", ur: "تو گواہ لاؤ" },
        grammarRole: "Result particle + imperative (Form X)",
        grammarExplanations: {
          en: "Form X - to seek witnesses, call for testimony.",
          ur: "باب استفعال - گواہی مانگنا۔"
        }
      },
      {
        position: 7,
        arabic: "عَلَيْهِنَّ",
        transliteration: "'alayhinna",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "against them", ur: "ان پر" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 8,
        arabic: "أَرْبَعَةً",
        transliteration: "arba'atan",
        root: "ر ب ع",
        pos: ['NUM'],
        posLabel: 'NUM',
        meaning: { en: "four", ur: "چار" },
        grammarRole: "Numeral (accusative)",
        case: "mansoob"
      },
      {
        position: 9,
        arabic: "مِّنكُمْ",
        transliteration: "minkum",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "from among you", ur: "اپنے میں سے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 10,
        arabic: "فَإِن",
        transliteration: "fa-in",
        root: null,
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        meaning: { en: "then if", ur: "پھر اگر" },
        grammarRole: "Result particle + conditional"
      },
      {
        position: 11,
        arabic: "شَهِدُوا",
        transliteration: "shahiduu",
        root: "ش ه د",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "they testify", ur: "وہ گواہی دیں" },
        grammarRole: "Verb (past, 3rd person masculine plural)"
      },
      {
        position: 12,
        arabic: "فَأَمْسِكُوهُنَّ",
        transliteration: "fa-amsikuuhunna",
        root: "م س ك",
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        meaning: { en: "then confine them", ur: "تو انہیں روکو" },
        grammarRole: "Result particle + imperative + object pronoun"
      },
      {
        position: 13,
        arabic: "فِي",
        transliteration: "fii",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "in", ur: "میں" },
        grammarRole: "Preposition"
      },
      {
        position: 14,
        arabic: "الْبُيُوتِ",
        transliteration: "al-buyuuti",
        root: "ب ي ت",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "the houses", ur: "گھروں" },
        grammarRole: "Noun (genitive)",
        case: "majroor"
      },
      {
        position: 15,
        arabic: "حَتَّىٰ",
        transliteration: "hattaa",
        root: null,
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: "until", ur: "یہاں تک کہ" },
        grammarRole: "Particle (until)"
      },
      {
        position: 16,
        arabic: "يَتَوَفَّاهُنَّ",
        transliteration: "yatawaffaahunna",
        root: "و ف ي",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        meaning: { en: "takes them", ur: "ان کو اٹھا لے" },
        grammarRole: "Verb (Form V) + object pronoun",
        grammarExplanations: {
          en: "Form V - to take fully, i.e., death takes them.",
          ur: "باب تفعّل - پورا لینا، یعنی موت ان کو لے جائے۔"
        }
      },
      {
        position: 17,
        arabic: "الْمَوْتُ",
        transliteration: "al-mawtu",
        root: "م و ت",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "death", ur: "موت" },
        grammarRole: "Noun (nominative)",
        case: "marfoo"
      },
      {
        position: 18,
        arabic: "أَوْ",
        transliteration: "aw",
        root: null,
        pos: ['CONJ'],
        posLabel: 'CONJ',
        meaning: { en: "or", ur: "یا" },
        grammarRole: "Disjunctive conjunction"
      },
      {
        position: 19,
        arabic: "يَجْعَلَ",
        transliteration: "yaj'ala",
        root: "ج ع ل",
        pos: ['V'],
        posLabel: 'V',
        meaning: { en: "ordains/makes", ur: "نکالے" },
        grammarRole: "Verb (subjunctive)"
      },
      {
        position: 20,
        arabic: "اللَّهُ",
        transliteration: "Allaahu",
        root: "أ ل ه",
        pos: ['PN'],
        posLabel: 'PN',
        meaning: { en: "Allah", ur: "اللہ" },
        grammarRole: "Proper noun (nominative)",
        case: "marfoo"
      },
      {
        position: 21,
        arabic: "لَهُنَّ",
        transliteration: "lahunna",
        root: null,
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        meaning: { en: "for them", ur: "ان کے لیے" },
        grammarRole: "Preposition + pronoun"
      },
      {
        position: 22,
        arabic: "سَبِيلًا",
        transliteration: "sabiilan",
        root: "س ب ل",
        pos: ['N'],
        posLabel: 'N',
        meaning: { en: "a way", ur: "راستہ" },
        grammarRole: "Noun (accusative)",
        case: "mansoob",
        grammarExplanations: {
          en: "A way/path - later abrogated by the verse of stoning/lashing.",
          ur: "راستہ - بعد میں رجم/کوڑے کی آیت سے منسوخ ہوا۔"
        }
      }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
      ],
    },
  },

  16: {
    text: "وَٱلَّذَانِ يَأْتِيَـٰنِهَا مِنكُمْ فَـَٔاذُوهُمَا ۖ فَإِن تَابَا وَأَصْلَحَا فَأَعْرِضُوا۟ عَنْهُمَآ ۗ إِنَّ ٱللَّهَ كَانَ تَوَّابًۭا رَّحِيمًا",
    translation: {
      en: "",
      ur: "اور جو دو مرد تم میں سے بدکاری کریں تو ان کو ایذا دو۔ پھر اگر وہ توبہ کرلیں اور نیکوکار ہوجائیں تو ان کا پیچھا چھوڑ دو۔ بےشک خدا توبہ قبول کرنے والا (اور) مہربان ہے",
    },
    words: [
      { id: '4:16:1', arabic: "وَٱلَّذَانِ", transliteration: "wa-alladhāni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the two who", ur: "اور the two جو" } },
      { id: '4:16:2', arabic: "يَأْتِيَـٰنِهَا", transliteration: "yatiyānihā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "commit it", ur: "commit it" } },
      { id: '4:16:3', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '4:16:4', arabic: "فَـَٔاذُوهُمَا ۖ", transliteration: "faādhūhumā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then punish both of them", ur: "پھر punish both of them" } },
      { id: '4:16:5', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:16:6', arabic: "تَابَا", transliteration: "tābā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they repent", ur: "وہ لوگ repent" } },
      { id: '4:16:7', arabic: "وَأَصْلَحَا", transliteration: "wa-aṣlaḥā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and correct themselves", ur: "اور correct themselves" } },
      { id: '4:16:8', arabic: "فَأَعْرِضُوا۟", transliteration: "fa-aʿriḍū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then turn away", ur: "پھر turn away" } },
      { id: '4:16:9', arabic: "عَنْهُمَآ ۗ", transliteration: "ʿanhumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from both of them", ur: "سے both of them" } },
      { id: '4:16:10', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:16:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:16:12', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:16:13', arabic: "تَوَّابًۭا", transliteration: "tawwāban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:16:14', arabic: "رَّحِيمًا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most-Merciful", ur: "Most-Merciful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  17: {
    text: "إِنَّمَا ٱلتَّوْبَةُ عَلَى ٱللَّهِ لِلَّذِينَ يَعْمَلُونَ ٱلسُّوٓءَ بِجَهَـٰلَةٍۢ ثُمَّ يَتُوبُونَ مِن قَرِيبٍۢ فَأُو۟لَـٰٓئِكَ يَتُوبُ ٱللَّهُ عَلَيْهِمْ ۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "خدا انہیں لوگوں کی توبہ قبول فرماتا ہے جو نادانی سے بری حرکت کر بیٹھے ہیں۔ پھر جلد توبہ قبول کرلیتے ہیں پس ایسے لوگوں پر خدا مہربانی کرتا ہے۔ اور وہ سب کچھ جانتا (اور) حکمت والا ہے",
    },
    words: [
      { id: '4:17:1', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '4:17:2', arabic: "ٱلتَّوْبَةُ", transliteration: "l-tawbatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the acceptance of repentance", ur: "the acceptance of repentance" } },
      { id: '4:17:3', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "by", ur: "by" } },
      { id: '4:17:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:17:5', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for those who", ur: "(is) for جو لوگ" } },
      { id: '4:17:6', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } },
      { id: '4:17:7', arabic: "ٱلسُّوٓءَ", transliteration: "l-sūa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the evil", ur: "the برا" } },
      { id: '4:17:8', arabic: "بِجَهَـٰلَةٍۢ", transliteration: "bijahālatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in ignorance", ur: "میں ignorance" } },
      { id: '4:17:9', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:17:10', arabic: "يَتُوبُونَ", transliteration: "yatūbūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they repent", ur: "وہ لوگ repent" } },
      { id: '4:17:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:17:12', arabic: "قَرِيبٍۢ", transliteration: "qarībin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "soon after", ur: "soon بعد" } },
      { id: '4:17:13', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then those", ur: "پھر those" } },
      { id: '4:17:14', arabic: "يَتُوبُ", transliteration: "yatūbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will have forgiveness", ur: "will have مغفرت" } },
      { id: '4:17:15', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from) Allah", ur: "(سے) اللہ" } },
      { id: '4:17:16', arabic: "عَلَيْهِمْ ۗ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '4:17:17', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and is", ur: "اور is" } },
      { id: '4:17:18', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:17:19', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } },
      { id: '4:17:20', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  18: {
    text: "وَلَيْسَتِ ٱلتَّوْبَةُ لِلَّذِينَ يَعْمَلُونَ ٱلسَّيِّـَٔاتِ حَتَّىٰٓ إِذَا حَضَرَ أَحَدَهُمُ ٱلْمَوْتُ قَالَ إِنِّى تُبْتُ ٱلْـَٔـٰنَ وَلَا ٱلَّذِينَ يَمُوتُونَ وَهُمْ كُفَّارٌ ۚ أُو۟لَـٰٓئِكَ أَعْتَدْنَا لَهُمْ عَذَابًا أَلِيمًۭا",
    translation: {
      en: "",
      ur: "اور ایسے لوگوں کی توبہ قبول نہیں ہوتی جو (ساری عمر) برے کام کرتے ہیں۔ یہاں تک کہ جب ان میں سے کسی موت آموجود ہو تو اس وقت کہنے لگے کہ اب میں توبہ کرتا ہوں اور نہ ان کی (توبہ قبول ہوتی ہے) جو کفر کی حالت میں مریں۔ ایسے لوگوں کے لئے ہم نے عذاب الیم تیار کر رکھا ہے",
    },
    words: [
      { id: '4:18:1', arabic: "وَلَيْسَتِ", transliteration: "walaysati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '4:18:2', arabic: "ٱلتَّوْبَةُ", transliteration: "l-tawbatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the acceptance of repentance", ur: "(is) the acceptance of repentance" } },
      { id: '4:18:3', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for those who", ur: "for جو لوگ" } },
      { id: '4:18:4', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } },
      { id: '4:18:5', arabic: "ٱلسَّيِّـَٔاتِ", transliteration: "l-sayiāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the evil deeds", ur: "the برا deeds" } },
      { id: '4:18:6', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '4:18:7', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '4:18:8', arabic: "حَضَرَ", transliteration: "ḥaḍara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "approaches", ur: "approaches" } },
      { id: '4:18:9', arabic: "أَحَدَهُمُ", transliteration: "aḥadahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one of them", ur: "one of them" } },
      { id: '4:18:10', arabic: "ٱلْمَوْتُ", transliteration: "l-mawtu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] death", ur: "[the] موت" } },
      { id: '4:18:11', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he says", ur: "وہ کہتا ہے" } },
      { id: '4:18:12', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed I", ur: "بیشک میں" } },
      { id: '4:18:13', arabic: "تُبْتُ", transliteration: "tub'tu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "repent", ur: "repent" } },
      { id: '4:18:14', arabic: "ٱلْـَٔـٰنَ", transliteration: "l-āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "now", ur: "now" } },
      { id: '4:18:15', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:18:16', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:18:17', arabic: "يَمُوتُونَ", transliteration: "yamūtūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "die", ur: "die" } },
      { id: '4:18:18', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '4:18:19', arabic: "كُفَّارٌ ۚ", transliteration: "kuffārun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) disbelievers", ur: "(are) کافر" } },
      { id: '4:18:20', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those ", ur: "Those " } },
      { id: '4:18:21', arabic: "أَعْتَدْنَا", transliteration: "aʿtadnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have prepared", ur: "ہم have prepared" } },
      { id: '4:18:22', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:18:23', arabic: "عَذَابًا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '4:18:24', arabic: "أَلِيمًۭا", transliteration: "alīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "painful", ur: "painful" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'موصوف + صفت' }
      ],
    },
  },
  19: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا يَحِلُّ لَكُمْ أَن تَرِثُوا۟ ٱلنِّسَآءَ كَرْهًۭا ۖ وَلَا تَعْضُلُوهُنَّ لِتَذْهَبُوا۟ بِبَعْضِ مَآ ءَاتَيْتُمُوهُنَّ إِلَّآ أَن يَأْتِينَ بِفَـٰحِشَةٍۢ مُّبَيِّنَةٍۢ ۚ وَعَاشِرُوهُنَّ بِٱلْمَعْرُوفِ ۚ فَإِن كَرِهْتُمُوهُنَّ فَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭٔا وَيَجْعَلَ ٱللَّهُ فِيهِ خَيْرًۭا كَثِيرًۭا",
    translation: {
      en: "",
      ur: "مومنو! تم کو جائز نہیں کہ زبردستی عورتوں کے وارث بن جاؤ۔ اور (دیکھنا) اس نیت سے کہ جو کچھ تم نے ان کو دیا ہے اس میں سے کچھ لے لو انہیں (گھروں میں) میں مت روک رکھنا ہاں اگر وہ کھلے طور پر بدکاری کی مرتکب ہوں (تو روکنا مناسب نہیں) اور ان کے ساتھ اچھی طرح رہو سہو اگر وہ تم کو ناپسند ہوں تو عجب نہیں کہ تم کسی چیز کو ناپسند کرو اور خدا اس میں بہت سی بھلائی پیدا کردے",
    },
    words: [
      { id: '4:19:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:19:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:19:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:19:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '4:19:5', arabic: "يَحِلُّ", transliteration: "yaḥillu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) lawful", ur: "(is) lawful" } },
      { id: '4:19:6', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:19:7', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:19:8', arabic: "تَرِثُوا۟", transliteration: "tarithū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you inherit", ur: "تم inherit" } },
      { id: '4:19:9', arabic: "ٱلنِّسَآءَ", transliteration: "l-nisāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the women", ur: "the women" } },
      { id: '4:19:10', arabic: "كَرْهًۭا ۖ", transliteration: "karhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) force", ur: "(by) force" } },
      { id: '4:19:11', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '4:19:12', arabic: "تَعْضُلُوهُنَّ", transliteration: "taʿḍulūhunna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you constraint them", ur: "تم constraint them" } },
      { id: '4:19:13', arabic: "لِتَذْهَبُوا۟", transliteration: "litadhhabū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that you may take", ur: "so وہ تم may take" } },
      { id: '4:19:14', arabic: "بِبَعْضِ", transliteration: "bibaʿḍi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a part", ur: "a part" } },
      { id: '4:19:15', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) what", ur: "(of) کیا" } },
      { id: '4:19:16', arabic: "ءَاتَيْتُمُوهُنَّ", transliteration: "ātaytumūhunna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have given them", ur: "تم have given them" } },
      { id: '4:19:17', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:19:18', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:19:19', arabic: "يَأْتِينَ", transliteration: "yatīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they commit", ur: "وہ لوگ commit" } },
      { id: '4:19:20', arabic: "بِفَـٰحِشَةٍۢ", transliteration: "bifāḥishatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "immorality", ur: "immorality" } },
      { id: '4:19:21', arabic: "مُّبَيِّنَةٍۢ ۚ", transliteration: "mubayyinatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "open", ur: "open" } },
      { id: '4:19:22', arabic: "وَعَاشِرُوهُنَّ", transliteration: "waʿāshirūhunna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And live with them", ur: "اور live ساتھ them" } },
      { id: '4:19:23', arabic: "بِٱلْمَعْرُوفِ ۚ", transliteration: "bil-maʿrūfi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in kindness", ur: "میں kindness" } },
      { id: '4:19:24', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:19:25', arabic: "كَرِهْتُمُوهُنَّ", transliteration: "karih'tumūhunna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you dislike them", ur: "تم dislike them" } },
      { id: '4:19:26', arabic: "فَعَسَىٰٓ", transliteration: "faʿasā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then perhaps", ur: "پھر perhaps" } },
      { id: '4:19:27', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:19:28', arabic: "تَكْرَهُوا۟", transliteration: "takrahū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you dislike", ur: "تم dislike" } },
      { id: '4:19:29', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a thing", ur: "a thing" } },
      { id: '4:19:30', arabic: "وَيَجْعَلَ", transliteration: "wayajʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and has placed", ur: "اور has placed" } },
      { id: '4:19:31', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:19:32', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:19:33', arabic: "خَيْرًۭا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '4:19:34', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "much", ur: "much" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  20: {
    text: "وَإِنْ أَرَدتُّمُ ٱسْتِبْدَالَ زَوْجٍۢ مَّكَانَ زَوْجٍۢ وَءَاتَيْتُمْ إِحْدَىٰهُنَّ قِنطَارًۭا فَلَا تَأْخُذُوا۟ مِنْهُ شَيْـًٔا ۚ أَتَأْخُذُونَهُۥ بُهْتَـٰنًۭا وَإِثْمًۭا مُّبِينًۭا",
    translation: {
      en: "",
      ur: "اور اگر تم ایک عورت کو چھوڑ کر دوسری عورت کرنی چاہو۔ اور پہلی عورت کو بہت سال مال دے چکے ہو تو اس میں سے کچھ مت لینا۔ بھلا تم ناجائز طور پر اور صریح ظلم سے اپنا مال اس سے واپس لے لوگے؟",
    },
    words: [
      { id: '4:20:1', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:20:2', arabic: "أَرَدتُّمُ", transliteration: "aradttumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you intend", ur: "تم intend" } },
      { id: '4:20:3', arabic: "ٱسْتِبْدَالَ", transliteration: "is'tib'dāla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "replacing", ur: "replacing" } },
      { id: '4:20:4', arabic: "زَوْجٍۢ", transliteration: "zawjin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a wife", ur: "a wife" } },
      { id: '4:20:5', arabic: "مَّكَانَ", transliteration: "makāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(in) place", ur: "(میں) place" } },
      { id: '4:20:6', arabic: "زَوْجٍۢ", transliteration: "zawjin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) a wife", ur: "(of) a wife" } },
      { id: '4:20:7', arabic: "وَءَاتَيْتُمْ", transliteration: "waātaytum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you have given", ur: "اور تم have given" } },
      { id: '4:20:8', arabic: "إِحْدَىٰهُنَّ", transliteration: "iḥ'dāhunna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one of them", ur: "one of them" } },
      { id: '4:20:9', arabic: "قِنطَارًۭا", transliteration: "qinṭāran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "heap (of gold)", ur: "heap (of gold)" } },
      { id: '4:20:10', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (do) not", ur: "پھر (do) نہیں" } },
      { id: '4:20:11', arabic: "تَأْخُذُوا۟", transliteration: "takhudhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take away", ur: "take away" } },
      { id: '4:20:12', arabic: "مِنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '4:20:13', arabic: "شَيْـًٔا ۚ", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '4:20:14', arabic: "أَتَأْخُذُونَهُۥ", transliteration: "atakhudhūnahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Would you take it", ur: "Would تم take it" } },
      { id: '4:20:15', arabic: "بُهْتَـٰنًۭا", transliteration: "buh'tānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) slander", ur: "(by) slander" } },
      { id: '4:20:16', arabic: "وَإِثْمًۭا", transliteration: "wa-ith'man", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a sin", ur: "اور a sin" } },
      { id: '4:20:17', arabic: "مُّبِينًۭا", transliteration: "mubīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "open", ur: "open" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  21: {
    text: "وَكَيْفَ تَأْخُذُونَهُۥ وَقَدْ أَفْضَىٰ بَعْضُكُمْ إِلَىٰ بَعْضٍۢ وَأَخَذْنَ مِنكُم مِّيثَـٰقًا غَلِيظًۭا",
    translation: {
      en: "",
      ur: "اور تم دیا ہوا مال کیونکر واپس لے سکتے ہو جب کہ تم ایک دوسرے کے ساتھ صحبت کرچکے ہو۔ اور وہ تم سے عہد واثق بھی لے چکی ہے",
    },
    words: [
      { id: '4:21:1', arabic: "وَكَيْفَ", transliteration: "wakayfa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And how", ur: "اور how" } },
      { id: '4:21:2', arabic: "تَأْخُذُونَهُۥ", transliteration: "takhudhūnahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "could you take it", ur: "could تم take it" } },
      { id: '4:21:3', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "when surely", ur: "when یقیناً" } },
      { id: '4:21:4', arabic: "أَفْضَىٰ", transliteration: "afḍā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has gone ", ur: "has gone " } },
      { id: '4:21:5', arabic: "بَعْضُكُمْ", transliteration: "baʿḍukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one of you", ur: "one of تم" } },
      { id: '4:21:6', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:21:7', arabic: "بَعْضٍۢ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "another", ur: "another" } },
      { id: '4:21:8', arabic: "وَأَخَذْنَ", transliteration: "wa-akhadhna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they have taken", ur: "اور وہ لوگ have taken" } },
      { id: '4:21:9', arabic: "مِنكُم", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '4:21:10', arabic: "مِّيثَـٰقًا", transliteration: "mīthāqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "covenant", ur: "covenant" } },
      { id: '4:21:11', arabic: "غَلِيظًۭا", transliteration: "ghalīẓan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "strong", ur: "strong" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  22: {
    text: "وَلَا تَنكِحُوا۟ مَا نَكَحَ ءَابَآؤُكُم مِّنَ ٱلنِّسَآءِ إِلَّا مَا قَدْ سَلَفَ ۚ إِنَّهُۥ كَانَ فَـٰحِشَةًۭ وَمَقْتًۭا وَسَآءَ سَبِيلًا",
    translation: {
      en: "",
      ur: "اور جن عورتوں سے تمہارے باپ نے نکاح کیا ہو ان نکاح مت کرنا (مگر جاہلیت میں) جو ہوچکا (سوہوچکا) یہ نہایت بےحیائی اور (خدا کی) ناخوشی کی بات تھی۔ اور بہت برا دستور تھا",
    },
    words: [
      { id: '4:22:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:22:2', arabic: "تَنكِحُوا۟", transliteration: "tankiḥū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "marry", ur: "marry" } },
      { id: '4:22:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '4:22:4', arabic: "نَكَحَ", transliteration: "nakaḥa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "married", ur: "married" } },
      { id: '4:22:5', arabic: "ءَابَآؤُكُم", transliteration: "ābāukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your fathers", ur: "your fathers" } },
      { id: '4:22:6', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:22:7', arabic: "ٱلنِّسَآءِ", transliteration: "l-nisāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the women", ur: "the women" } },
      { id: '4:22:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:22:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:22:10', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has", ur: "has" } },
      { id: '4:22:11', arabic: "سَلَفَ ۚ", transliteration: "salafa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "passed before", ur: "passed پہلے" } },
      { id: '4:22:12', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed it", ur: "بیشک it" } },
      { id: '4:22:13', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '4:22:14', arabic: "فَـٰحِشَةًۭ", transliteration: "fāḥishatan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "an immorality", ur: "an immorality" } },
      { id: '4:22:15', arabic: "وَمَقْتًۭا", transliteration: "wamaqtan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hateful", ur: "اور hateful" } },
      { id: '4:22:16', arabic: "وَسَآءَ", transliteration: "wasāa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (an) evil", ur: "اور (an) برا" } },
      { id: '4:22:17', arabic: "سَبِيلًا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "way", ur: "راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  23: {
    text: "حُرِّمَتْ عَلَيْكُمْ أُمَّهَـٰتُكُمْ وَبَنَاتُكُمْ وَأَخَوَٰتُكُمْ وَعَمَّـٰتُكُمْ وَخَـٰلَـٰتُكُمْ وَبَنَاتُ ٱلْأَخِ وَبَنَاتُ ٱلْأُخْتِ وَأُمَّهَـٰتُكُمُ ٱلَّـٰتِىٓ أَرْضَعْنَكُمْ وَأَخَوَٰتُكُم مِّنَ ٱلرَّضَـٰعَةِ وَأُمَّهَـٰتُ نِسَآئِكُمْ وَرَبَـٰٓئِبُكُمُ ٱلَّـٰتِى فِى حُجُورِكُم مِّن نِّسَآئِكُمُ ٱلَّـٰتِى دَخَلْتُم بِهِنَّ فَإِن لَّمْ تَكُونُوا۟ دَخَلْتُم بِهِنَّ فَلَا جُنَاحَ عَلَيْكُمْ وَحَلَـٰٓئِلُ أَبْنَآئِكُمُ ٱلَّذِينَ مِنْ أَصْلَـٰبِكُمْ وَأَن تَجْمَعُوا۟ بَيْنَ ٱلْأُخْتَيْنِ إِلَّا مَا قَدْ سَلَفَ ۗ إِنَّ ٱللَّهَ كَانَ غَفُورًۭا رَّحِيمًۭا",
    translation: {
      en: "",
      ur: "تم پر تمہاری مائیں اور بیٹیاں اور بہنیں اور پھوپھیاں اور خالائیں اور بھتیجیاں اور بھانجیاں اور وہ مائیں جنہوں نے تم کو دودھ پلایا ہو اور رضاعی بہنیں اور ساسیں حرام کر دی گئی ہیں اور جن عورتوں سے تم مباشرت کر چکے ہو ان کی لڑکیاں جنہیں تم پرورش کرتے (ہو وہ بھی تم پر حرام ہیں) ہاں اگر ان کے ساتھ تم نے مباشرت نہ کی ہو تو (ان کی لڑکیوں کے ساتھ نکاح کر لینے میں) تم پر کچھ گناہ نہیں اور تمہارے صلبی بیٹوں کی عورتیں بھی اور دو بہنوں کا اکٹھا کرنا بھی (حرام ہے) مگر جو ہو چکا (سو ہو چکا) بے شک خدا بخشنے والا (اور) رحم کرنے والا ہے",
    },
    words: [
      { id: '4:23:1', arabic: "حُرِّمَتْ", transliteration: "ḥurrimat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Forbidden", ur: "Forbidden" } },
      { id: '4:23:2', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:23:3', arabic: "أُمَّهَـٰتُكُمْ", transliteration: "ummahātukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) your mothers", ur: "(are) your mothers" } },
      { id: '4:23:4', arabic: "وَبَنَاتُكُمْ", transliteration: "wabanātukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your daughters", ur: "اور your daughters" } },
      { id: '4:23:5', arabic: "وَأَخَوَٰتُكُمْ", transliteration: "wa-akhawātukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your sisters", ur: "اور your sisters" } },
      { id: '4:23:6', arabic: "وَعَمَّـٰتُكُمْ", transliteration: "waʿammātukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your father's sisters", ur: "اور your باپ's sisters" } },
      { id: '4:23:7', arabic: "وَخَـٰلَـٰتُكُمْ", transliteration: "wakhālātukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your mother's sisters", ur: "اور your ماں's sisters" } },
      { id: '4:23:8', arabic: "وَبَنَاتُ", transliteration: "wabanātu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and daughters", ur: "اور daughters" } },
      { id: '4:23:9', arabic: "ٱلْأَخِ", transliteration: "l-akhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) brothers", ur: "(of) brothers" } },
      { id: '4:23:10', arabic: "وَبَنَاتُ", transliteration: "wabanātu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and daughters", ur: "اور daughters" } },
      { id: '4:23:11', arabic: "ٱلْأُخْتِ", transliteration: "l-ukh'ti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) sisters", ur: "(of) sisters" } },
      { id: '4:23:12', arabic: "وَأُمَّهَـٰتُكُمُ", transliteration: "wa-ummahātukumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (the) mothers", ur: "اور (the) mothers" } },
      { id: '4:23:13', arabic: "ٱلَّـٰتِىٓ", transliteration: "allātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:23:14', arabic: "أَرْضَعْنَكُمْ", transliteration: "arḍaʿnakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nursed you", ur: "nursed تم" } },
      { id: '4:23:15', arabic: "وَأَخَوَٰتُكُم", transliteration: "wa-akhawātukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your sisters", ur: "اور your sisters" } },
      { id: '4:23:16', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:23:17', arabic: "ٱلرَّضَـٰعَةِ", transliteration: "l-raḍāʿati", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the nursing", ur: "the nursing" } },
      { id: '4:23:18', arabic: "وَأُمَّهَـٰتُ", transliteration: "wa-ummahātu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and mothers", ur: "اور mothers" } },
      { id: '4:23:19', arabic: "نِسَآئِكُمْ", transliteration: "nisāikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your wives", ur: "(of) your wives" } },
      { id: '4:23:20', arabic: "وَرَبَـٰٓئِبُكُمُ", transliteration: "warabāibukumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your step daughters", ur: "اور your step daughters" } },
      { id: '4:23:21', arabic: "ٱلَّـٰتِى", transliteration: "allātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:23:22', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) in", ur: "(are) میں" } },
      { id: '4:23:23', arabic: "حُجُورِكُم", transliteration: "ḥujūrikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your guardianship", ur: "your guardianship" } },
      { id: '4:23:24', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:23:25', arabic: "نِّسَآئِكُمُ", transliteration: "nisāikumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your women", ur: "your women" } },
      { id: '4:23:26', arabic: "ٱلَّـٰتِى", transliteration: "allātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '4:23:27', arabic: "دَخَلْتُم", transliteration: "dakhaltum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you had relations", ur: "تم had relations" } },
      { id: '4:23:28', arabic: "بِهِنَّ", transliteration: "bihinna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '4:23:29', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but if", ur: "لیکن if" } },
      { id: '4:23:30', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:23:31', arabic: "تَكُونُوا۟", transliteration: "takūnū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "you had", ur: "تم had" } },
      { id: '4:23:32', arabic: "دَخَلْتُم", transliteration: "dakhaltum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "relations", ur: "relations" } },
      { id: '4:23:33', arabic: "بِهِنَّ", transliteration: "bihinna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '4:23:34', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (there is) no", ur: "پھر (there is) نہیں" } },
      { id: '4:23:35', arabic: "جُنَاحَ", transliteration: "junāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sin", ur: "sin" } },
      { id: '4:23:36', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on you", ur: "پر تم" } },
      { id: '4:23:37', arabic: "وَحَلَـٰٓئِلُ", transliteration: "waḥalāilu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And wives", ur: "اور wives" } },
      { id: '4:23:38', arabic: "أَبْنَآئِكُمُ", transliteration: "abnāikumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your sons", ur: "(of) your sons" } },
      { id: '4:23:39', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:23:40', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) from", ur: "(are) سے" } },
      { id: '4:23:41', arabic: "أَصْلَـٰبِكُمْ", transliteration: "aṣlābikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your loins", ur: "your loins" } },
      { id: '4:23:42', arabic: "وَأَن", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '4:23:43', arabic: "تَجْمَعُوا۟", transliteration: "tajmaʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you gather together", ur: "تم gather together" } },
      { id: '4:23:44', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[between]", ur: "[درمیان]" } },
      { id: '4:23:45', arabic: "ٱلْأُخْتَيْنِ", transliteration: "l-ukh'tayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two sisters", ur: "two sisters" } },
      { id: '4:23:46', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:23:47', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:23:48', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has", ur: "has" } },
      { id: '4:23:49', arabic: "سَلَفَ ۗ", transliteration: "salafa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "passed before", ur: "passed پہلے" } },
      { id: '4:23:50', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:23:51', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:23:52', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:23:53', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:23:54', arabic: "رَّحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most-Merciful", ur: "Most-Merciful" } }
    ],
    structure: {
      relationships: [
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'فعل + فاعل' },
        { from: 40, to: 41, label: 'جار + مجرور' },
        { from: 43, to: 44, label: 'فعل + فاعل' },
        { from: 50, to: 51, label: 'فعل + فاعل' }
      ],
    },
  },
  24: {
    text: "۞ وَٱلْمُحْصَنَـٰتُ مِنَ ٱلنِّسَآءِ إِلَّا مَا مَلَكَتْ أَيْمَـٰنُكُمْ ۖ كِتَـٰبَ ٱللَّهِ عَلَيْكُمْ ۚ وَأُحِلَّ لَكُم مَّا وَرَآءَ ذَٰلِكُمْ أَن تَبْتَغُوا۟ بِأَمْوَٰلِكُم مُّحْصِنِينَ غَيْرَ مُسَـٰفِحِينَ ۚ فَمَا ٱسْتَمْتَعْتُم بِهِۦ مِنْهُنَّ فَـَٔاتُوهُنَّ أُجُورَهُنَّ فَرِيضَةًۭ ۚ وَلَا جُنَاحَ عَلَيْكُمْ فِيمَا تَرَٰضَيْتُم بِهِۦ مِنۢ بَعْدِ ٱلْفَرِيضَةِ ۚ إِنَّ ٱللَّهَ كَانَ عَلِيمًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "اور شوہر والی عورتیں بھی (تم پر حرام ہیں) مگر وہ جو (اسیر ہو کر لونڈیوں کے طور پر) تمہارے قبضے میں آجائیں (یہ حکم) خدا نے تم کو لکھ دیا ہے اور ان (محرمات) کے سوا اور عورتیں تم کو حلال ہیں اس طرح سے کہ مال خرچ کر کے ان سے نکاح کرلو بشرطیکہ (نکاح سے) مقصود عفت قائم رکھنا ہو نہ شہوت رانی تو جن عورتوں سے تم فائدہ حاصل کرو ان کا مہر جو مقرر کیا ہو ادا کردو اور اگر مقرر کرنے کے بعد آپس کی رضامندی سے مہر میں کمی بیشی کرلو تو تم پر کچھ گناہ نہیں بےشک خدا سب کچھ جاننے والا (اور) حکمت والا ہے",
    },
    words: [
      { id: '4:24:1', arabic: "۞ وَٱلْمُحْصَنَـٰتُ", transliteration: "wal-muḥ'ṣanātu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "And (prohibited are) the ones who are married", ur: "اور (prohibited are) the ones جو are married" } },
      { id: '4:24:2', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:24:3', arabic: "ٱلنِّسَآءِ", transliteration: "l-nisāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the women", ur: "the women" } },
      { id: '4:24:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:24:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '4:24:6', arabic: "مَلَكَتْ", transliteration: "malakat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you possess", ur: "تم possess" } },
      { id: '4:24:7', arabic: "أَيْمَـٰنُكُمْ ۖ", transliteration: "aymānukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "rightfully", ur: "rightfully" } },
      { id: '4:24:8', arabic: "كِتَـٰبَ", transliteration: "kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Decree", ur: "Decree" } },
      { id: '4:24:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:24:10', arabic: "عَلَيْكُمْ ۚ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '4:24:11', arabic: "وَأُحِلَّ", transliteration: "wa-uḥilla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And are lawful", ur: "اور are lawful" } },
      { id: '4:24:12', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:24:13', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:24:14', arabic: "وَرَآءَ", transliteration: "warāa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(is) beyond", ur: "(is) beyond" } },
      { id: '4:24:15', arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:24:16', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:24:17', arabic: "تَبْتَغُوا۟", transliteration: "tabtaghū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you seek", ur: "تم seek" } },
      { id: '4:24:18', arabic: "بِأَمْوَٰلِكُم", transliteration: "bi-amwālikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with your wealth", ur: "ساتھ your wealth" } },
      { id: '4:24:19', arabic: "مُّحْصِنِينَ", transliteration: "muḥ'ṣinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "desiring to be chaste", ur: "desiring کو be chaste" } },
      { id: '4:24:20', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:24:21', arabic: "مُسَـٰفِحِينَ ۚ", transliteration: "musāfiḥīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(to be) lustful", ur: "(کو be) lustful" } },
      { id: '4:24:22', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So what", ur: "So کیا" } },
      { id: '4:24:23', arabic: "ٱسْتَمْتَعْتُم", transliteration: "is'tamtaʿtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you benefit[ed]", ur: "تم benefit[ed]" } },
      { id: '4:24:24', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '4:24:25', arabic: "مِنْهُنَّ", transliteration: "min'hunna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '4:24:26', arabic: "فَـَٔاتُوهُنَّ", transliteration: "faātūhunna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so you give them", ur: "so تم give them" } },
      { id: '4:24:27', arabic: "أُجُورَهُنَّ", transliteration: "ujūrahunna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their bridal due", ur: "their bridal due" } },
      { id: '4:24:28', arabic: "فَرِيضَةًۭ ۚ", transliteration: "farīḍatan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(as) an obligation", ur: "(as) an obligation" } },
      { id: '4:24:29', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (there is) no", ur: "اور (there is) نہیں" } },
      { id: '4:24:30', arabic: "جُنَاحَ", transliteration: "junāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sin", ur: "sin" } },
      { id: '4:24:31', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on you", ur: "پر تم" } },
      { id: '4:24:32', arabic: "فِيمَا", transliteration: "fīmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "concerning what", ur: "concerning کیا" } },
      { id: '4:24:33', arabic: "تَرَٰضَيْتُم", transliteration: "tarāḍaytum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you mutually agree", ur: "تم mutually agree" } },
      { id: '4:24:34', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '4:24:35', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:24:36', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "beyond", ur: "beyond" } },
      { id: '4:24:37', arabic: "ٱلْفَرِيضَةِ ۚ", transliteration: "l-farīḍati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the obligation", ur: "the obligation" } },
      { id: '4:24:38', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:24:39', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:24:40', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:24:41', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } },
      { id: '4:24:42', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'موصوف + صفت' },
        { from: 24, to: 25, label: 'جار + مجرور' },
        { from: 34, to: 35, label: 'جار + مجرور' },
        { from: 36, to: 37, label: 'مضاف + مضاف إليه' },
        { from: 38, to: 39, label: 'فعل + فاعل' }
      ],
    },
  },
  25: {
    text: "وَمَن لَّمْ يَسْتَطِعْ مِنكُمْ طَوْلًا أَن يَنكِحَ ٱلْمُحْصَنَـٰتِ ٱلْمُؤْمِنَـٰتِ فَمِن مَّا مَلَكَتْ أَيْمَـٰنُكُم مِّن فَتَيَـٰتِكُمُ ٱلْمُؤْمِنَـٰتِ ۚ وَٱللَّهُ أَعْلَمُ بِإِيمَـٰنِكُم ۚ بَعْضُكُم مِّنۢ بَعْضٍۢ ۚ فَٱنكِحُوهُنَّ بِإِذْنِ أَهْلِهِنَّ وَءَاتُوهُنَّ أُجُورَهُنَّ بِٱلْمَعْرُوفِ مُحْصَنَـٰتٍ غَيْرَ مُسَـٰفِحَـٰتٍۢ وَلَا مُتَّخِذَٰتِ أَخْدَانٍۢ ۚ فَإِذَآ أُحْصِنَّ فَإِنْ أَتَيْنَ بِفَـٰحِشَةٍۢ فَعَلَيْهِنَّ نِصْفُ مَا عَلَى ٱلْمُحْصَنَـٰتِ مِنَ ٱلْعَذَابِ ۚ ذَٰلِكَ لِمَنْ خَشِىَ ٱلْعَنَتَ مِنكُمْ ۚ وَأَن تَصْبِرُوا۟ خَيْرٌۭ لَّكُمْ ۗ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ",
    translation: {
      en: "",
      ur: "اور جو شخص تم میں سے مومن آزاد عورتوں (یعنی بیبیوں) سے نکاح کرنے کا مقدور نہ رکھے تو مومن لونڈیوں میں ہی جو تمہارے قبضے میں آگئی ہوں (نکاح کرلے) اور خدا تمہارے ایمان کو اچھی طرح جانتا ہے تم آپس میں ایک دوسرے کے ہم جنس ہو تو ان لونڈیوں کے ساتھ ان کے مالکوں سے اجازت حاصل کرکے نکاح کر لو اور دستور کے مطابق ان کا مہر بھی ادا کردو بشرطیکہ عفیفہ ہوں نہ ایسی کہ کھلم کھلا بدکاری کریں اور نہ درپردہ دوستی کرنا چاہیں پھر اگر نکاح میں آکر بدکاری کا ارتکاب کر بیٹھیں تو جو سزا آزاد عورتوں (یعنی بیبیوں) کے لئے ہے اس کی آدھی ان کو (دی جائے) یہ (لونڈی کے ساتھ نکاح کرنے کی) اجازت اس شخص کو ہے جسے گناہ کر بیٹھنے کا اندیشہ ہو اور اگر صبر کرو تو یہ تمہارے لئے بہت اچھا ہے اور خدا بخشنے والا مہربان ہے",
    },
    words: [
      { id: '4:25:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:25:2', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) not", ur: "(is) نہیں" } },
      { id: '4:25:3', arabic: "يَسْتَطِعْ", transliteration: "yastaṭiʿ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "able to", ur: "able کو" } },
      { id: '4:25:4', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '4:25:5', arabic: "طَوْلًا", transliteration: "ṭawlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "afford", ur: "afford" } },
      { id: '4:25:6', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:25:7', arabic: "يَنكِحَ", transliteration: "yankiḥa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "marry", ur: "marry" } },
      { id: '4:25:8', arabic: "ٱلْمُحْصَنَـٰتِ", transliteration: "l-muḥ'ṣanāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the free chaste", ur: "the free chaste" } },
      { id: '4:25:9', arabic: "ٱلْمُؤْمِنَـٰتِ", transliteration: "l-mu'mināti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] believing women", ur: "[the] believing women" } },
      { id: '4:25:10', arabic: "فَمِن", transliteration: "famin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (marry) from", ur: "پھر (marry) سے" } },
      { id: '4:25:11', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:25:12', arabic: "مَلَكَتْ", transliteration: "malakat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "possess[ed]", ur: "possess[ed]" } },
      { id: '4:25:13', arabic: "أَيْمَـٰنُكُم", transliteration: "aymānukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your right hands", ur: "your right hands" } },
      { id: '4:25:14', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:25:15', arabic: "فَتَيَـٰتِكُمُ", transliteration: "fatayātikumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "your slave girls ", ur: "your slave girls " } },
      { id: '4:25:16', arabic: "ٱلْمُؤْمِنَـٰتِ ۚ", transliteration: "l-mu'mināti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the believers", ur: "(of) the مومنین" } },
      { id: '4:25:17', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '4:25:18', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knows best", ur: "knows best" } },
      { id: '4:25:19', arabic: "بِإِيمَـٰنِكُم ۚ", transliteration: "biīmānikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about your faith", ur: "about your faith" } },
      { id: '4:25:20', arabic: "بَعْضُكُم", transliteration: "baʿḍukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "You", ur: "تم" } },
      { id: '4:25:21', arabic: "مِّنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) from", ur: "(are) سے" } },
      { id: '4:25:22', arabic: "بَعْضٍۢ ۚ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "(one) another", ur: "(one) another" } },
      { id: '4:25:23', arabic: "فَٱنكِحُوهُنَّ", transliteration: "fa-inkiḥūhunna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So marry them", ur: "So marry them" } },
      { id: '4:25:24', arabic: "بِإِذْنِ", transliteration: "bi-idh'ni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with (the) permission", ur: "ساتھ (the) permission" } },
      { id: '4:25:25', arabic: "أَهْلِهِنَّ", transliteration: "ahlihinna", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "(of) their family", ur: "(of) their family" } },
      { id: '4:25:26', arabic: "وَءَاتُوهُنَّ", transliteration: "waātūhunna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and give them", ur: "اور give them" } },
      { id: '4:25:27', arabic: "أُجُورَهُنَّ", transliteration: "ujūrahunna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their bridal due", ur: "their bridal due" } },
      { id: '4:25:28', arabic: "بِٱلْمَعْرُوفِ", transliteration: "bil-maʿrūfi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in a fair manner", ur: "میں a fair manner" } },
      { id: '4:25:29', arabic: "مُحْصَنَـٰتٍ", transliteration: "muḥ'ṣanātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(They should be) chaste", ur: "(وہ لوگ should be) chaste" } },
      { id: '4:25:30', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:25:31', arabic: "مُسَـٰفِحَـٰتٍۢ", transliteration: "musāfiḥātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who commit immorality", ur: "جو لوگ commit immorality" } },
      { id: '4:25:32', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:25:33', arabic: "مُتَّخِذَٰتِ", transliteration: "muttakhidhāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who take", ur: "جو لوگ take" } },
      { id: '4:25:34', arabic: "أَخْدَانٍۢ ۚ", transliteration: "akhdānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "secret lovers", ur: "secret lovers" } },
      { id: '4:25:35', arabic: "فَإِذَآ", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '4:25:36', arabic: "أُحْصِنَّ", transliteration: "uḥ'ṣinna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are married", ur: "وہ لوگ are married" } },
      { id: '4:25:37', arabic: "فَإِنْ", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and if", ur: "اور if" } },
      { id: '4:25:38', arabic: "أَتَيْنَ", transliteration: "atayna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they commit", ur: "وہ لوگ commit" } },
      { id: '4:25:39', arabic: "بِفَـٰحِشَةٍۢ", transliteration: "bifāḥishatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "adultery", ur: "adultery" } },
      { id: '4:25:40', arabic: "فَعَلَيْهِنَّ", transliteration: "faʿalayhinna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then for them", ur: "پھر for them" } },
      { id: '4:25:41', arabic: "نِصْفُ", transliteration: "niṣ'fu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) half", ur: "(is) half" } },
      { id: '4:25:42', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(of) what", ur: "(of) کیا" } },
      { id: '4:25:43', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) on", ur: "(is) پر" } },
      { id: '4:25:44', arabic: "ٱلْمُحْصَنَـٰتِ", transliteration: "l-muḥ'ṣanāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the free chaste women", ur: "the free chaste women" } },
      { id: '4:25:45', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:25:46', arabic: "ٱلْعَذَابِ ۚ", transliteration: "l-ʿadhābi", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '4:25:47', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '4:25:48', arabic: "لِمَنْ", transliteration: "liman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for whoever", ur: "(is) for whoever" } },
      { id: '4:25:49', arabic: "خَشِىَ", transliteration: "khashiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fears", ur: "fears" } },
      { id: '4:25:50', arabic: "ٱلْعَنَتَ", transliteration: "l-ʿanata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "committing sin", ur: "committing sin" } },
      { id: '4:25:51', arabic: "مِنكُمْ ۚ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '4:25:52', arabic: "وَأَن", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '4:25:53', arabic: "تَصْبِرُوا۟", transliteration: "taṣbirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you be patient", ur: "تم be patient" } },
      { id: '4:25:54', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) better", ur: "(is) better" } },
      { id: '4:25:55', arabic: "لَّكُمْ ۗ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:25:56', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '4:25:57', arabic: "غَفُورٌۭ", transliteration: "ghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) Oft-Forgiving", ur: "(is) Oft-Forgiving" } },
      { id: '4:25:58', arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'جار + مجرور' },
        { from: 28, to: 29, label: 'جار + مجرور' },
        { from: 43, to: 44, label: 'جار + مجرور' },
        { from: 45, to: 46, label: 'مضاف + مضاف إليه' },
        { from: 48, to: 49, label: 'جار + مجرور' },
        { from: 53, to: 54, label: 'فعل + فاعل' }
      ],
    },
  },
  26: {
    text: "يُرِيدُ ٱللَّهُ لِيُبَيِّنَ لَكُمْ وَيَهْدِيَكُمْ سُنَنَ ٱلَّذِينَ مِن قَبْلِكُمْ وَيَتُوبَ عَلَيْكُمْ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌۭ",
    translation: {
      en: "",
      ur: "خدا چاہتا ہے کہ (اپنی آیتیں) تم سے کھول کھول کر بیان فرمائے اور تم کو اگلے لوگوں کے طریقے بتائے اور تم پر مہربانی کرے اور خدا جاننے والا (اور) حکمت والا ہے",
    },
    words: [
      { id: '4:26:1', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Wishes", ur: "Wishes" } },
      { id: '4:26:2', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:26:3', arabic: "لِيُبَيِّنَ", transliteration: "liyubayyina", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to make clear", ur: "کو make clear" } },
      { id: '4:26:4', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:26:5', arabic: "وَيَهْدِيَكُمْ", transliteration: "wayahdiyakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ه د ي", meaning: { en: "and to guide you", ur: "اور کو guide تم" } },
      { id: '4:26:6', arabic: "سُنَنَ", transliteration: "sunana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) ways", ur: "(کو) ways" } },
      { id: '4:26:7', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those", ur: "(of) those" } },
      { id: '4:26:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:26:9', arabic: "قَبْلِكُمْ", transliteration: "qablikum", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '4:26:10', arabic: "وَيَتُوبَ", transliteration: "wayatūba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (to) accept repentance", ur: "اور (کو) accept repentance" } },
      { id: '4:26:11', arabic: "عَلَيْكُمْ ۗ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '4:26:12', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '4:26:13', arabic: "عَلِيمٌ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "(is) All-Knowing", ur: "(is) سب جاننے والا" } },
      { id: '4:26:14', arabic: "حَكِيمٌۭ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  27: {
    text: "وَٱللَّهُ يُرِيدُ أَن يَتُوبَ عَلَيْكُمْ وَيُرِيدُ ٱلَّذِينَ يَتَّبِعُونَ ٱلشَّهَوَٰتِ أَن تَمِيلُوا۟ مَيْلًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "اور خدا تو چاہتا ہے کہ تم پر مہربانی کرے اور جو لوگ اپنی خواہشوں کے پیچھے چلتے ہیں وہ چاہتے ہیں کہ تم سیدھے راستے سے بھٹک کر دور جا پڑو",
    },
    words: [
      { id: '4:27:1', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '4:27:2', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wishes", ur: "wishes" } },
      { id: '4:27:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:27:4', arabic: "يَتُوبَ", transliteration: "yatūba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "accept repentance", ur: "accept repentance" } },
      { id: '4:27:5', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '4:27:6', arabic: "وَيُرِيدُ", transliteration: "wayurīdu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but wish", ur: "لیکن wish" } },
      { id: '4:27:7', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:27:8', arabic: "يَتَّبِعُونَ", transliteration: "yattabiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '4:27:9', arabic: "ٱلشَّهَوَٰتِ", transliteration: "l-shahawāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the passions", ur: "the passions" } },
      { id: '4:27:10', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:27:11', arabic: "تَمِيلُوا۟", transliteration: "tamīlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you deviate ", ur: "تم deviate " } },
      { id: '4:27:12', arabic: "مَيْلًا", transliteration: "maylan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(into) a deviation", ur: "(into) a deviation" } },
      { id: '4:27:13', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  28: {
    text: "يُرِيدُ ٱللَّهُ أَن يُخَفِّفَ عَنكُمْ ۚ وَخُلِقَ ٱلْإِنسَـٰنُ ضَعِيفًۭا",
    translation: {
      en: "",
      ur: "خدا چاہتا ہے کہ تم پر سے بوجھ ہلکا کرے اور انسان (طبعاً) کمزور پیدا ہوا ہے",
    },
    words: [
      { id: '4:28:1', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Wishes", ur: "Wishes" } },
      { id: '4:28:2', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:28:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:28:4', arabic: "يُخَفِّفَ", transliteration: "yukhaffifa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "lighten", ur: "lighten" } },
      { id: '4:28:5', arabic: "عَنكُمْ ۚ", transliteration: "ʿankum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:28:6', arabic: "وَخُلِقَ", transliteration: "wakhuliqa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and was created", ur: "اور was پیدا کیا" } },
      { id: '4:28:7', arabic: "ٱلْإِنسَـٰنُ", transliteration: "l-insānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '4:28:8', arabic: "ضَعِيفًۭا", transliteration: "ḍaʿīfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "weak", ur: "weak" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  29: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَـٰطِلِ إِلَّآ أَن تَكُونَ تِجَـٰرَةً عَن تَرَاضٍۢ مِّنكُمْ ۚ وَلَا تَقْتُلُوٓا۟ أَنفُسَكُمْ ۚ إِنَّ ٱللَّهَ كَانَ بِكُمْ رَحِيمًۭا",
    translation: {
      en: "",
      ur: "مومنو! ایک دوسرے کا مال ناحق نہ کھاؤ ہاں اگر آپس کی رضامندی سے تجارت کا لین دین ہو (اور اس سے مالی فائدہ حاصل ہو جائے تو وہ جائز ہے) اور اپنے آپ کو ہلاک نہ کرو کچھ شک نہیں کہ خدا تم پر مہربان ہے",
    },
    words: [
      { id: '4:29:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:29:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:29:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:29:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '4:29:5', arabic: "تَأْكُلُوٓا۟", transliteration: "takulū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "eat", ur: "eat" } },
      { id: '4:29:6', arabic: "أَمْوَٰلَكُم", transliteration: "amwālakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your wealth", ur: "your wealth" } },
      { id: '4:29:7', arabic: "بَيْنَكُم", transliteration: "baynakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between yourselves", ur: "درمیان yourselves" } },
      { id: '4:29:8', arabic: "بِٱلْبَـٰطِلِ", transliteration: "bil-bāṭili", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "unjustly", ur: "unjustly" } },
      { id: '4:29:9', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '4:29:10', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:29:11', arabic: "تَكُونَ", transliteration: "takūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there) be", ur: "(there) be" } },
      { id: '4:29:12', arabic: "تِجَـٰرَةً", transliteration: "tijāratan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "business", ur: "business" } },
      { id: '4:29:13', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '4:29:14', arabic: "تَرَاضٍۢ", transliteration: "tarāḍin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "mutual consent", ur: "mutual consent" } },
      { id: '4:29:15', arabic: "مِّنكُمْ ۚ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '4:29:16', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:29:17', arabic: "تَقْتُلُوٓا۟", transliteration: "taqtulū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "kill", ur: "kill" } },
      { id: '4:29:18', arabic: "أَنفُسَكُمْ ۚ", transliteration: "anfusakum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "yourselves", ur: "yourselves" } },
      { id: '4:29:19', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:29:20', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:29:21', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:29:22', arabic: "بِكُمْ", transliteration: "bikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:29:23', arabic: "رَحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  30: {
    text: "وَمَن يَفْعَلْ ذَٰلِكَ عُدْوَٰنًۭا وَظُلْمًۭا فَسَوْفَ نُصْلِيهِ نَارًۭا ۚ وَكَانَ ذَٰلِكَ عَلَى ٱللَّهِ يَسِيرًا",
    translation: {
      en: "",
      ur: "اور جو تعدی اور ظلم سے ایسا کرے گا ہم اس کو عنقریب جہنم میں داخل کریں گے اور یہ خدا کو آسان ہے",
    },
    words: [
      { id: '4:30:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:30:2', arabic: "يَفْعَلْ", transliteration: "yafʿal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '4:30:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:30:4', arabic: "عُدْوَٰنًۭا", transliteration: "ʿud'wānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) aggression", ur: "(میں) aggression" } },
      { id: '4:30:5', arabic: "وَظُلْمًۭا", transliteration: "waẓul'man", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and injustice", ur: "اور injustice" } },
      { id: '4:30:6', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then soon", ur: "پھر soon" } },
      { id: '4:30:7', arabic: "نُصْلِيهِ", transliteration: "nuṣ'līhi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (will) cast him", ur: "ہم (will) cast him" } },
      { id: '4:30:8', arabic: "نَارًۭا ۚ", transliteration: "nāran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(into) a Fire", ur: "(into) a آگ" } },
      { id: '4:30:9', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:30:10', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:30:11', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '4:30:12', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:30:13', arabic: "يَسِيرًا", transliteration: "yasīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "easy", ur: "easy" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  31: {
    text: "إِن تَجْتَنِبُوا۟ كَبَآئِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنكُمْ سَيِّـَٔاتِكُمْ وَنُدْخِلْكُم مُّدْخَلًۭا كَرِيمًۭا",
    translation: {
      en: "",
      ur: "اگر تم بڑے بڑے گناہوں سے جن سے تم کو منع کیا جاتا ہے اجتناب رکھو گے تو ہم تمہارے (چھوٹے چھوٹے) گناہ معاف کردیں گے اور تمہیں عزت کے مکانوں میں داخل کریں گے",
    },
    words: [
      { id: '4:31:1', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '4:31:2', arabic: "تَجْتَنِبُوا۟", transliteration: "tajtanibū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you avoid", ur: "تم avoid" } },
      { id: '4:31:3', arabic: "كَبَآئِرَ", transliteration: "kabāira", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great (sins)", ur: "great (sins)" } },
      { id: '4:31:4', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(of) what", ur: "(of) کیا" } },
      { id: '4:31:5', arabic: "تُنْهَوْنَ", transliteration: "tun'hawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are forbidden", ur: "تم are forbidden" } },
      { id: '4:31:6', arabic: "عَنْهُ", transliteration: "ʿanhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from [it]", ur: "سے [it]" } },
      { id: '4:31:7', arabic: "نُكَفِّرْ", transliteration: "nukaffir", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will remove", ur: "ہم will remove" } },
      { id: '4:31:8', arabic: "عَنكُمْ", transliteration: "ʿankum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '4:31:9', arabic: "سَيِّـَٔاتِكُمْ", transliteration: "sayyiātikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your evil deeds", ur: "your برا deeds" } },
      { id: '4:31:10', arabic: "وَنُدْخِلْكُم", transliteration: "wanud'khil'kum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We will admit you", ur: "اور ہم will admit تم" } },
      { id: '4:31:11', arabic: "مُّدْخَلًۭا", transliteration: "mud'khalan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) an entrance", ur: "(کو) an entrance" } },
      { id: '4:31:12', arabic: "كَرِيمًۭا", transliteration: "karīman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "noble", ur: "noble" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  32: {
    text: "وَلَا تَتَمَنَّوْا۟ مَا فَضَّلَ ٱللَّهُ بِهِۦ بَعْضَكُمْ عَلَىٰ بَعْضٍۢ ۚ لِّلرِّجَالِ نَصِيبٌۭ مِّمَّا ٱكْتَسَبُوا۟ ۖ وَلِلنِّسَآءِ نَصِيبٌۭ مِّمَّا ٱكْتَسَبْنَ ۚ وَسْـَٔلُوا۟ ٱللَّهَ مِن فَضْلِهِۦٓ ۗ إِنَّ ٱللَّهَ كَانَ بِكُلِّ شَىْءٍ عَلِيمًۭا",
    translation: {
      en: "",
      ur: "اور جس چیز میں خدا نے تم میں سے بعض کو بعض پر فضیلت دی ہے اس کی ہوس مت کرو مردوں کو ان کاموں کا ثواب ہے جو انہوں نے کئے اور عورتوں کو ان کاموں کا ثواب ہے جو انہوں نے کئے اور خدا سے اس کا فضل (وکرم) مانگتے رہو کچھ شک نہیں کہ خدا ہر چیز سے واقف ہے",
    },
    words: [
      { id: '4:32:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:32:2', arabic: "تَتَمَنَّوْا۟", transliteration: "tatamannaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "covet", ur: "covet" } },
      { id: '4:32:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:32:4', arabic: "فَضَّلَ", transliteration: "faḍḍala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(has) bestowed", ur: "(has) bestowed" } },
      { id: '4:32:5', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:32:6', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with it]", ur: "[ساتھ it]" } },
      { id: '4:32:7', arabic: "بَعْضَكُمْ", transliteration: "baʿḍakum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of you", ur: "some of تم" } },
      { id: '4:32:8', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '4:32:9', arabic: "بَعْضٍۢ ۚ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "others", ur: "others" } },
      { id: '4:32:10', arabic: "لِّلرِّجَالِ", transliteration: "lilrrijāli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For men", ur: "For men" } },
      { id: '4:32:11', arabic: "نَصِيبٌۭ", transliteration: "naṣībun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) a share", ur: "(is) a share" } },
      { id: '4:32:12', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '4:32:13', arabic: "ٱكْتَسَبُوا۟ ۖ", transliteration: "ik'tasabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they earned", ur: "وہ لوگ earned" } },
      { id: '4:32:14', arabic: "وَلِلنِّسَآءِ", transliteration: "walilnnisāi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for women", ur: "اور for women" } },
      { id: '4:32:15', arabic: "نَصِيبٌۭ", transliteration: "naṣībun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) a share", ur: "(is) a share" } },
      { id: '4:32:16', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '4:32:17', arabic: "ٱكْتَسَبْنَ ۚ", transliteration: "ik'tasabna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they earned", ur: "وہ لوگ earned" } },
      { id: '4:32:18', arabic: "وَسْـَٔلُوا۟", transliteration: "wasalū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And ask", ur: "اور ask" } },
      { id: '4:32:19', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:32:20', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:32:21', arabic: "فَضْلِهِۦٓ ۗ", transliteration: "faḍlihi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "His bounty", ur: "His bounty" } },
      { id: '4:32:22', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:32:23', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:32:24', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:32:25', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of every", ur: "of ہر" } },
      { id: '4:32:26', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '4:32:27', arabic: "عَلِيمًۭا", transliteration: "ʿalīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Knower", ur: "سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' }
      ],
    },
  },
  33: {
    text: "وَلِكُلٍّۢ جَعَلْنَا مَوَٰلِىَ مِمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ ۚ وَٱلَّذِينَ عَقَدَتْ أَيْمَـٰنُكُمْ فَـَٔاتُوهُمْ نَصِيبَهُمْ ۚ إِنَّ ٱللَّهَ كَانَ عَلَىٰ كُلِّ شَىْءٍۢ شَهِيدًا",
    translation: {
      en: "",
      ur: "اور جو مال ماں باپ اور رشتہ دار چھوڑ مریں تو (حق داروں میں تقسیم کردو کہ) ہم نے ہر ایک کے حقدار مقرر کردیئے ہیں اور جن لوگوں سے تم عہد کرچکے ہو ان کو بھی ان کا حصہ دو بےشک خدا ہر چیز کے سامنے ہے",
    },
    words: [
      { id: '4:33:1', arabic: "وَلِكُلٍّۢ", transliteration: "walikullin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for all", ur: "اور for سب" } },
      { id: '4:33:2', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We (have) made", ur: "ہم (have) made" } },
      { id: '4:33:3', arabic: "مَوَٰلِىَ", transliteration: "mawāliya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "heirs", ur: "heirs" } },
      { id: '4:33:4', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '4:33:5', arabic: "تَرَكَ", transliteration: "taraka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) left", ur: "(is) left" } },
      { id: '4:33:6', arabic: "ٱلْوَٰلِدَانِ", transliteration: "l-wālidāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) the parents", ur: "(by) the parents" } },
      { id: '4:33:7', arabic: "وَٱلْأَقْرَبُونَ ۚ", transliteration: "wal-aqrabūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the relatives", ur: "اور the relatives" } },
      { id: '4:33:8', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those whom", ur: "اور those whom" } },
      { id: '4:33:9', arabic: "عَقَدَتْ", transliteration: "ʿaqadat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "pledged", ur: "pledged" } },
      { id: '4:33:10', arabic: "أَيْمَـٰنُكُمْ", transliteration: "aymānukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your right hands ", ur: "your right hands " } },
      { id: '4:33:11', arabic: "فَـَٔاتُوهُمْ", transliteration: "faātūhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then give them", ur: "پھر give them" } },
      { id: '4:33:12', arabic: "نَصِيبَهُمْ ۚ", transliteration: "naṣībahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their share", ur: "their share" } },
      { id: '4:33:13', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:33:14', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:33:15', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:33:16', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '4:33:17', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '4:33:18', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '4:33:19', arabic: "شَهِيدًا", transliteration: "shahīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Witness", ur: "a Witness" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  34: {
    text: "ٱلرِّجَالُ قَوَّٰمُونَ عَلَى ٱلنِّسَآءِ بِمَا فَضَّلَ ٱللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍۢ وَبِمَآ أَنفَقُوا۟ مِنْ أَمْوَٰلِهِمْ ۚ فَٱلصَّـٰلِحَـٰتُ قَـٰنِتَـٰتٌ حَـٰفِظَـٰتٌۭ لِّلْغَيْبِ بِمَا حَفِظَ ٱللَّهُ ۚ وَٱلَّـٰتِى تَخَافُونَ نُشُوزَهُنَّ فَعِظُوهُنَّ وَٱهْجُرُوهُنَّ فِى ٱلْمَضَاجِعِ وَٱضْرِبُوهُنَّ ۖ فَإِنْ أَطَعْنَكُمْ فَلَا تَبْغُوا۟ عَلَيْهِنَّ سَبِيلًا ۗ إِنَّ ٱللَّهَ كَانَ عَلِيًّۭا كَبِيرًۭا",
    translation: {
      en: "",
      ur: "مرد عورتوں پر مسلط وحاکم ہیں اس لئے کہ خدا نے بعض کو بعض سے افضل بنایا ہے اور اس لئے بھی کہ مرد اپنا مال خرچ کرتے ہیں تو جو نیک بیبیاں ہیں وہ مردوں کے حکم پر چلتی ہیں اور ان کے پیٹھ پیچھے خدا کی حفاظت میں (مال وآبرو کی) خبرداری کرتی ہیں اور جن عورتوں کی نسبت تمہیں معلوم ہو کہ سرکشی (اور بدخوئی) کرنے لگی ہیں تو (پہلے) ان کو (زبانی) سمجھاؤ (اگر نہ سمجھیں تو) پھر ان کے ساتھ سونا ترک کردو اگر اس پر بھی باز نہ آئیں تو زدوکوب کرو اور اگر فرمانبردار ہوجائیں تو پھر ان کو ایذا دینے کا کوئی بہانہ مت ڈھونڈو بےشک خدا سب سے اعلیٰ (اور) جلیل القدر ہے",
    },
    words: [
      { id: '4:34:1', arabic: "ٱلرِّجَالُ", transliteration: "al-rijālu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[The] men", ur: "[The] men" } },
      { id: '4:34:2', arabic: "قَوَّٰمُونَ", transliteration: "qawwāmūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) protectors", ur: "(are) protectors" } },
      { id: '4:34:3', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:34:4', arabic: "ٱلنِّسَآءِ", transliteration: "l-nisāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the women", ur: "the women" } },
      { id: '4:34:5', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '4:34:6', arabic: "فَضَّلَ", transliteration: "faḍḍala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(has) bestowed", ur: "(has) bestowed" } },
      { id: '4:34:7', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:34:8', arabic: "بَعْضَهُمْ", transliteration: "baʿḍahum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of them", ur: "some of them" } },
      { id: '4:34:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '4:34:10', arabic: "بَعْضٍۢ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "others", ur: "others" } },
      { id: '4:34:11', arabic: "وَبِمَآ", transliteration: "wabimā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and because", ur: "اور because" } },
      { id: '4:34:12', arabic: "أَنفَقُوا۟", transliteration: "anfaqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they spend", ur: "وہ لوگ spend" } },
      { id: '4:34:13', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:34:14', arabic: "أَمْوَٰلِهِمْ ۚ", transliteration: "amwālihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their wealth", ur: "their wealth" } },
      { id: '4:34:15', arabic: "فَٱلصَّـٰلِحَـٰتُ", transliteration: "fal-ṣāliḥātu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So the righteous women", ur: "So the نیک women" } },
      { id: '4:34:16', arabic: "قَـٰنِتَـٰتٌ", transliteration: "qānitātun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) obedient", ur: "(are) obedient" } },
      { id: '4:34:17', arabic: "حَـٰفِظَـٰتٌۭ", transliteration: "ḥāfiẓātun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guarding", ur: "guarding" } },
      { id: '4:34:18', arabic: "لِّلْغَيْبِ", transliteration: "lil'ghaybi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in the unseen", ur: "میں the unseen" } },
      { id: '4:34:19', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that which", ur: "وہ جو" } },
      { id: '4:34:20', arabic: "حَفِظَ", transliteration: "ḥafiẓa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(orders) them to guard", ur: "(orders) them کو guard" } },
      { id: '4:34:21', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:34:22', arabic: "وَٱلَّـٰتِى", transliteration: "wa-allātī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those (from) whom", ur: "اور those (سے) whom" } },
      { id: '4:34:23', arabic: "تَخَافُونَ", transliteration: "takhāfūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear", ur: "تم ڈرنا" } },
      { id: '4:34:24', arabic: "نُشُوزَهُنَّ", transliteration: "nushūzahunna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their ill-conduct", ur: "their ill-conduct" } },
      { id: '4:34:25', arabic: "فَعِظُوهُنَّ", transliteration: "faʿiẓūhunna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then advise them", ur: "پھر advise them" } },
      { id: '4:34:26', arabic: "وَٱهْجُرُوهُنَّ", transliteration: "wa-uh'jurūhunna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forsake them", ur: "اور forsake them" } },
      { id: '4:34:27', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:34:28', arabic: "ٱلْمَضَاجِعِ", transliteration: "l-maḍājiʿi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the bed", ur: "the bed" } },
      { id: '4:34:29', arabic: "وَٱضْرِبُوهُنَّ ۖ", transliteration: "wa-iḍ'ribūhunna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [finally] strike them", ur: "اور [finally] strike them" } },
      { id: '4:34:30', arabic: "فَإِنْ", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then if", ur: "پھر if" } },
      { id: '4:34:31', arabic: "أَطَعْنَكُمْ", transliteration: "aṭaʿnakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they obey you", ur: "وہ لوگ obey تم" } },
      { id: '4:34:32', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (do) not", ur: "پھر (do) نہیں" } },
      { id: '4:34:33', arabic: "تَبْغُوا۟", transliteration: "tabghū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seek", ur: "seek" } },
      { id: '4:34:34', arabic: "عَلَيْهِنَّ", transliteration: "ʿalayhinna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against them", ur: "against them" } },
      { id: '4:34:35', arabic: "سَبِيلًا ۗ", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a way", ur: "a راستہ" } },
      { id: '4:34:36', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:34:37', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:34:38', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:34:39', arabic: "عَلِيًّۭا", transliteration: "ʿaliyyan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most High", ur: "Most High" } },
      { id: '4:34:40', arabic: "كَبِيرًۭا", transliteration: "kabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Great", ur: "Most Great" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 33, to: 34, label: 'فعل + فاعل' },
        { from: 36, to: 37, label: 'فعل + فاعل' },
        { from: 38, to: 39, label: 'موصوف + صفت' }
      ],
    },
  },
  35: {
    text: "وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا فَٱبْعَثُوا۟ حَكَمًۭا مِّنْ أَهْلِهِۦ وَحَكَمًۭا مِّنْ أَهْلِهَآ إِن يُرِيدَآ إِصْلَـٰحًۭا يُوَفِّقِ ٱللَّهُ بَيْنَهُمَآ ۗ إِنَّ ٱللَّهَ كَانَ عَلِيمًا خَبِيرًۭا",
    translation: {
      en: "",
      ur: "اور اگر تم کو معلوم ہو کہ میاں بیوی میں ان بن ہے تو ایک منصف مرد کے خاندان میں سے اور ایک منصف عورت کے خاندان میں سے مقرر کرو وہ اگر صلح کرا دینی چاہیں گے تو خدا ان میں موافقت پیدا کردے گا کچھ شک نہیں کہ خدا سب کچھ جانتا اور سب باتوں سے خبردار ہے",
    },
    words: [
      { id: '4:35:1', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:35:2', arabic: "خِفْتُمْ", transliteration: "khif'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear", ur: "تم ڈرنا" } },
      { id: '4:35:3', arabic: "شِقَاقَ", transliteration: "shiqāqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a dissension", ur: "a dissension" } },
      { id: '4:35:4', arabic: "بَيْنِهِمَا", transliteration: "baynihimā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between (the) two of them", ur: "درمیان (the) two of them" } },
      { id: '4:35:5', arabic: "فَٱبْعَثُوا۟", transliteration: "fa-ib'ʿathū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then send", ur: "پھر send" } },
      { id: '4:35:6', arabic: "حَكَمًۭا", transliteration: "ḥakaman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an arbitrator", ur: "an arbitrator" } },
      { id: '4:35:7', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:35:8', arabic: "أَهْلِهِۦ", transliteration: "ahlihi", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "his family", ur: "his family" } },
      { id: '4:35:9', arabic: "وَحَكَمًۭا", transliteration: "waḥakaman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and an arbitrator", ur: "اور an arbitrator" } },
      { id: '4:35:10', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:35:11', arabic: "أَهْلِهَآ", transliteration: "ahlihā", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "her family", ur: "her family" } },
      { id: '4:35:12', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '4:35:13', arabic: "يُرِيدَآ", transliteration: "yurīdā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they both wish", ur: "وہ لوگ both wish" } },
      { id: '4:35:14', arabic: "إِصْلَـٰحًۭا", transliteration: "iṣ'lāḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "reconciliation", ur: "reconciliation" } },
      { id: '4:35:15', arabic: "يُوَفِّقِ", transliteration: "yuwaffiqi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will cause reconciliation", ur: "will cause reconciliation" } },
      { id: '4:35:16', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:35:17', arabic: "بَيْنَهُمَآ ۗ", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between both of them", ur: "درمیان both of them" } },
      { id: '4:35:18', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:35:19', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:35:20', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:35:21', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Knower", ur: "سب-Knower" } },
      { id: '4:35:22', arabic: "خَبِيرًۭا", transliteration: "khabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Aware", ur: "سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'موصوف + صفت' }
      ],
    },
  },
  36: {
    text: "۞ وَٱعْبُدُوا۟ ٱللَّهَ وَلَا تُشْرِكُوا۟ بِهِۦ شَيْـًۭٔا ۖ وَبِٱلْوَٰلِدَيْنِ إِحْسَـٰنًۭا وَبِذِى ٱلْقُرْبَىٰ وَٱلْيَتَـٰمَىٰ وَٱلْمَسَـٰكِينِ وَٱلْجَارِ ذِى ٱلْقُرْبَىٰ وَٱلْجَارِ ٱلْجُنُبِ وَٱلصَّاحِبِ بِٱلْجَنۢبِ وَٱبْنِ ٱلسَّبِيلِ وَمَا مَلَكَتْ أَيْمَـٰنُكُمْ ۗ إِنَّ ٱللَّهَ لَا يُحِبُّ مَن كَانَ مُخْتَالًۭا فَخُورًا",
    translation: {
      en: "",
      ur: "اور خدا ہی کی عبادت کرو اور اس کے ساتھ کسی چیز کو شریک نہ بناؤ اور ماں باپ اور قرابت والوں اور یتیموں اور محتاجوں اور رشتہ دار ہمسائیوں اور اجنبی ہمسائیوں اور رفقائے پہلو (یعنی پاس بیٹھنے والوں) اور مسافروں اور جو لوگ تمہارے قبضے میں ہوں سب کے ساتھ احسان کرو کہ خدا (احسان کرنے والوں کو دوست رکھتا ہے اور) تکبر کرنے والے بڑائی مارنے والے کو دوست نہیں رکھتا",
    },
    words: [
      { id: '4:36:1', arabic: "۞ وَٱعْبُدُوا۟", transliteration: "wa-uʿ'budū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And worship", ur: "اور عبادت" } },
      { id: '4:36:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:36:3', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:36:4', arabic: "تُشْرِكُوا۟", transliteration: "tush'rikū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "associate", ur: "associate" } },
      { id: '4:36:5', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Him", ur: "ساتھ Him" } },
      { id: '4:36:6', arabic: "شَيْـًۭٔا ۖ", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '4:36:7', arabic: "وَبِٱلْوَٰلِدَيْنِ", transliteration: "wabil-wālidayni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to the parents", ur: "اور کو the parents" } },
      { id: '4:36:8', arabic: "إِحْسَـٰنًۭا", transliteration: "iḥ'sānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(do) good", ur: "(do) اچھا" } },
      { id: '4:36:9', arabic: "وَبِذِى", transliteration: "wabidhī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and with", ur: "اور ساتھ" } },
      { id: '4:36:10', arabic: "ٱلْقُرْبَىٰ", transliteration: "l-qur'bā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the relatives", ur: "the relatives" } },
      { id: '4:36:11', arabic: "وَٱلْيَتَـٰمَىٰ", transliteration: "wal-yatāmā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the orphans", ur: "اور the orphans" } },
      { id: '4:36:12', arabic: "وَٱلْمَسَـٰكِينِ", transliteration: "wal-masākīni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the needy", ur: "اور the needy" } },
      { id: '4:36:13', arabic: "وَٱلْجَارِ", transliteration: "wal-jāri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the neighbor", ur: "اور the neighbor" } },
      { id: '4:36:14', arabic: "ذِى", transliteration: "dhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who is)", ur: "(جو is)" } },
      { id: '4:36:15', arabic: "ٱلْقُرْبَىٰ", transliteration: "l-qur'bā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near", ur: "near" } },
      { id: '4:36:16', arabic: "وَٱلْجَارِ", transliteration: "wal-jāri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the neighbor", ur: "اور the neighbor" } },
      { id: '4:36:17', arabic: "ٱلْجُنُبِ", transliteration: "l-junubi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who is) farther away", ur: "(جو is) farther away" } },
      { id: '4:36:18', arabic: "وَٱلصَّاحِبِ", transliteration: "wal-ṣāḥibi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the companion", ur: "اور the companion" } },
      { id: '4:36:19', arabic: "بِٱلْجَنۢبِ", transliteration: "bil-janbi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by your side", ur: "by your side" } },
      { id: '4:36:20', arabic: "وَٱبْنِ", transliteration: "wa-ib'ni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the", ur: "اور the" } },
      { id: '4:36:21', arabic: "ٱلسَّبِيلِ", transliteration: "l-sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "traveler", ur: "traveler" } },
      { id: '4:36:22', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '4:36:23', arabic: "مَلَكَتْ", transliteration: "malakat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "possess[ed]", ur: "possess[ed]" } },
      { id: '4:36:24', arabic: "أَيْمَـٰنُكُمْ ۗ", transliteration: "aymānukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your right hands", ur: "your right hands" } },
      { id: '4:36:25', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:36:26', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:36:27', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '4:36:28', arabic: "يُحِبُّ", transliteration: "yuḥibbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "love", ur: "love" } },
      { id: '4:36:29', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(the one) who", ur: "(the one) جو" } },
      { id: '4:36:30', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:36:31', arabic: "مُخْتَالًۭا", transliteration: "mukh'tālan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[a] proud", ur: "[a] proud" } },
      { id: '4:36:32', arabic: "فَخُورًا", transliteration: "fakhūran", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(and) [a] boastful", ur: "(اور) [a] boastful" } }
    ],
    structure: {
      relationships: [
        { from: 25, to: 26, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'نفی + فعل' }
      ],
    },
  },
  37: {
    text: "ٱلَّذِينَ يَبْخَلُونَ وَيَأْمُرُونَ ٱلنَّاسَ بِٱلْبُخْلِ وَيَكْتُمُونَ مَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضْلِهِۦ ۗ وَأَعْتَدْنَا لِلْكَـٰفِرِينَ عَذَابًۭا مُّهِينًۭا",
    translation: {
      en: "",
      ur: "جو خود بھی بخل کریں اور لوگوں کو بھی بخل سکھائیں اور جو (مال) خدا نے ان کو اپنے فضل سے عطا فرمایا ہے اسے چھپا چھپا کے رکھیں اور ہم نے ناشکروں کے لئے ذلت کا عذاب تیار کر رکھا ہے",
    },
    words: [
      { id: '4:37:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '4:37:2', arabic: "يَبْخَلُونَ", transliteration: "yabkhalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are stingy", ur: "are stingy" } },
      { id: '4:37:3', arabic: "وَيَأْمُرُونَ", transliteration: "wayamurūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and order", ur: "اور order" } },
      { id: '4:37:4', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '4:37:5', arabic: "بِٱلْبُخْلِ", transliteration: "bil-bukh'li", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[of] stinginess", ur: "[of] stinginess" } },
      { id: '4:37:6', arabic: "وَيَكْتُمُونَ", transliteration: "wayaktumūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hide", ur: "اور hide" } },
      { id: '4:37:7', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:37:8', arabic: "ءَاتَىٰهُمُ", transliteration: "ātāhumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) given them", ur: "(has) given them" } },
      { id: '4:37:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:37:10', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:37:11', arabic: "فَضْلِهِۦ ۗ", transliteration: "faḍlihi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "His Bounty ", ur: "His Bounty " } },
      { id: '4:37:12', arabic: "وَأَعْتَدْنَا", transliteration: "wa-aʿtadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We (have) prepared", ur: "اور ہم (have) prepared" } },
      { id: '4:37:13', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the disbelievers", ur: "for the کافر" } },
      { id: '4:37:14', arabic: "عَذَابًۭا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '4:37:15', arabic: "مُّهِينًۭا", transliteration: "muhīnan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humiliating", ur: "humiliating" } }
    ],
    structure: {
      relationships: [
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  38: {
    text: "وَٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ رِئَآءَ ٱلنَّاسِ وَلَا يُؤْمِنُونَ بِٱللَّهِ وَلَا بِٱلْيَوْمِ ٱلْـَٔاخِرِ ۗ وَمَن يَكُنِ ٱلشَّيْطَـٰنُ لَهُۥ قَرِينًۭا فَسَآءَ قَرِينًۭا",
    translation: {
      en: "",
      ur: "اور خرچ بھی کریں تو (خدا کے لئے نہیں بلکہ) لوگوں کے دکھانے کو اور ایمان نہ خدا پر لائیں اور نہ روز آخرت پر (ایسے لوگوں کو ساتھی شیطان ہے) اور جس کا ساتھی شیطان ہوا تو (کچھ شک نہیں کہ) وہ برا ساتھی ہے",
    },
    words: [
      { id: '4:38:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '4:38:2', arabic: "يُنفِقُونَ", transliteration: "yunfiqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "spend", ur: "spend" } },
      { id: '4:38:3', arabic: "أَمْوَٰلَهُمْ", transliteration: "amwālahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their wealth", ur: "their wealth" } },
      { id: '4:38:4', arabic: "رِئَآءَ", transliteration: "riāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to be seen", ur: "کو be seen" } },
      { id: '4:38:5', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) the people", ur: "(by) the لوگ" } },
      { id: '4:38:6', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:38:7', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '4:38:8', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:38:9', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:38:10', arabic: "بِٱلْيَوْمِ", transliteration: "bil-yawmi", pos: ['P+N'], posLabel: 'P+N', root: "ي و م", meaning: { en: "in the Day", ur: "میں the دن" } },
      { id: '4:38:11', arabic: "ٱلْـَٔاخِرِ ۗ", transliteration: "l-ākhiri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Last", ur: "the Last" } },
      { id: '4:38:12', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '4:38:13', arabic: "يَكُنِ", transliteration: "yakuni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has", ur: "has" } },
      { id: '4:38:14', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '4:38:15', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '4:38:16', arabic: "قَرِينًۭا", transliteration: "qarīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) companion ", ur: "(as) companion " } },
      { id: '4:38:17', arabic: "فَسَآءَ", transliteration: "fasāa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then evil", ur: "پھر برا" } },
      { id: '4:38:18', arabic: "قَرِينًۭا", transliteration: "qarīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is he as) a companion", ur: "(is وہ as) a companion" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  39: {
    text: "وَمَاذَا عَلَيْهِمْ لَوْ ءَامَنُوا۟ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ وَأَنفَقُوا۟ مِمَّا رَزَقَهُمُ ٱللَّهُ ۚ وَكَانَ ٱللَّهُ بِهِمْ عَلِيمًا",
    translation: {
      en: "",
      ur: "اور اگر یہ لوگ خدا پر اور روز قیامت پر ایمان لاتے اور جو کچھ خدا نے ان کو دیا تھا اس میں سے خرچ کرتے تو ان کا کیا نقصان ہوتا اور خدا ان کو خوب جانتا ہے",
    },
    words: [
      { id: '4:39:1', arabic: "وَمَاذَا", transliteration: "wamādhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And what", ur: "اور کیا" } },
      { id: '4:39:2', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) against them", ur: "(is) against them" } },
      { id: '4:39:3', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:39:4', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they believed", ur: "وہ لوگ ایمان لائے" } },
      { id: '4:39:5', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:39:6', arabic: "وَٱلْيَوْمِ", transliteration: "wal-yawmi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "and the Day", ur: "اور the دن" } },
      { id: '4:39:7', arabic: "ٱلْـَٔاخِرِ", transliteration: "l-ākhiri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Last", ur: "the Last" } },
      { id: '4:39:8', arabic: "وَأَنفَقُوا۟", transliteration: "wa-anfaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and spent", ur: "اور spent" } },
      { id: '4:39:9', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from what", ur: "سے کیا" } },
      { id: '4:39:10', arabic: "رَزَقَهُمُ", transliteration: "razaqahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) provided them", ur: "(has) provided them" } },
      { id: '4:39:11', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:39:12', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:39:13', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:39:14', arabic: "بِهِمْ", transliteration: "bihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about them", ur: "about them" } },
      { id: '4:39:15', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Knower", ur: "سب-Knower" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  40: {
    text: "إِنَّ ٱللَّهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍۢ ۖ وَإِن تَكُ حَسَنَةًۭ يُضَـٰعِفْهَا وَيُؤْتِ مِن لَّدُنْهُ أَجْرًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "خدا کسی کی ذرا بھی حق تلفی نہیں کرتا اور اگر نیکی (کی) ہوگی تو اس کو دوچند کردے گا اور اپنے ہاں سے اجرعظیم بخشے گا",
    },
    words: [
      { id: '4:40:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:40:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:40:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '4:40:4', arabic: "يَظْلِمُ", transliteration: "yaẓlimu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wrong", ur: "wrong" } },
      { id: '4:40:5', arabic: "مِثْقَالَ", transliteration: "mith'qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(as much as) weight", ur: "(as much as) weight" } },
      { id: '4:40:6', arabic: "ذَرَّةٍۢ ۖ", transliteration: "dharratin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) an atom", ur: "(of) an atom" } },
      { id: '4:40:7', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:40:8', arabic: "تَكُ", transliteration: "taku", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "there is", ur: "there is" } },
      { id: '4:40:9', arabic: "حَسَنَةًۭ", transliteration: "ḥasanatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a good", ur: "a اچھا" } },
      { id: '4:40:10', arabic: "يُضَـٰعِفْهَا", transliteration: "yuḍāʿif'hā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He doubles it", ur: "وہ doubles it" } },
      { id: '4:40:11', arabic: "وَيُؤْتِ", transliteration: "wayu'ti", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and gives", ur: "اور gives" } },
      { id: '4:40:12', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:40:13', arabic: "لَّدُنْهُ", transliteration: "ladun'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near Him", ur: "near Him" } },
      { id: '4:40:14', arabic: "أَجْرًا", transliteration: "ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reward", ur: "a ثواب" } },
      { id: '4:40:15', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ],
    },
  },
  41: {
    text: "فَكَيْفَ إِذَا جِئْنَا مِن كُلِّ أُمَّةٍۭ بِشَهِيدٍۢ وَجِئْنَا بِكَ عَلَىٰ هَـٰٓؤُلَآءِ شَهِيدًۭا",
    translation: {
      en: "",
      ur: "بھلا اس دن کا کیا حال ہوگا جب ہم ہر امت میں سے احوال بتائے والے کو بلائیں گے اور تم کو ان لوگوں کا حال (بتانے کو) گواہ طلب کریں گے",
    },
    words: [
      { id: '4:41:1', arabic: "فَكَيْفَ", transliteration: "fakayfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So how (will it be)", ur: "So how (will it be)" } },
      { id: '4:41:2', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '4:41:3', arabic: "جِئْنَا", transliteration: "ji'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We bring", ur: "ہم bring" } },
      { id: '4:41:4', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:41:5', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '4:41:6', arabic: "أُمَّةٍۭ", transliteration: "ummatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nation", ur: "nation" } },
      { id: '4:41:7', arabic: "بِشَهِيدٍۢ", transliteration: "bishahīdin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a witness", ur: "a witness" } },
      { id: '4:41:8', arabic: "وَجِئْنَا", transliteration: "waji'nā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We bring", ur: "اور ہم bring" } },
      { id: '4:41:9', arabic: "بِكَ", transliteration: "bika", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '4:41:10', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '4:41:11', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these (people)", ur: "these (لوگ)" } },
      { id: '4:41:12', arabic: "شَهِيدًۭا", transliteration: "shahīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a witness", ur: "(as) a witness" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  42: {
    text: "يَوْمَئِذٍۢ يَوَدُّ ٱلَّذِينَ كَفَرُوا۟ وَعَصَوُا۟ ٱلرَّسُولَ لَوْ تُسَوَّىٰ بِهِمُ ٱلْأَرْضُ وَلَا يَكْتُمُونَ ٱللَّهَ حَدِيثًۭا",
    translation: {
      en: "",
      ur: "اس روز کافر اور پیغمبر کے نافرمان آرزو کریں گے کہ کاش ان کو زمین میں مدفون کرکے مٹی برابر کردی جاتی اور خدا سے کوئی بات چھپا نہیں سکیں گے",
    },
    words: [
      { id: '4:42:1', arabic: "يَوْمَئِذٍۢ", transliteration: "yawma-idhin", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(On) that Day", ur: "(پر) وہ دن" } },
      { id: '4:42:2', arabic: "يَوَدُّ", transliteration: "yawaddu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will wish", ur: "will wish" } },
      { id: '4:42:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:42:4', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '4:42:5', arabic: "وَعَصَوُا۟", transliteration: "waʿaṣawū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and disobeyed", ur: "اور disobeyed" } },
      { id: '4:42:6', arabic: "ٱلرَّسُولَ", transliteration: "l-rasūla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '4:42:7', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:42:8', arabic: "تُسَوَّىٰ", transliteration: "tusawwā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was leveled", ur: "was leveled" } },
      { id: '4:42:9', arabic: "بِهِمُ", transliteration: "bihimu", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '4:42:10', arabic: "ٱلْأَرْضُ", transliteration: "l-arḍu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:42:11', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:42:12', arabic: "يَكْتُمُونَ", transliteration: "yaktumūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will (be able to) hide", ur: "وہ لوگ will (be able کو) hide" } },
      { id: '4:42:13', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from) Allah", ur: "(سے) اللہ" } },
      { id: '4:42:14', arabic: "حَدِيثًۭا", transliteration: "ḥadīthan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(any) statement", ur: "(any) statement" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  43: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَقْرَبُوا۟ ٱلصَّلَوٰةَ وَأَنتُمْ سُكَـٰرَىٰ حَتَّىٰ تَعْلَمُوا۟ مَا تَقُولُونَ وَلَا جُنُبًا إِلَّا عَابِرِى سَبِيلٍ حَتَّىٰ تَغْتَسِلُوا۟ ۚ وَإِن كُنتُم مَّرْضَىٰٓ أَوْ عَلَىٰ سَفَرٍ أَوْ جَآءَ أَحَدٌۭ مِّنكُم مِّنَ ٱلْغَآئِطِ أَوْ لَـٰمَسْتُمُ ٱلنِّسَآءَ فَلَمْ تَجِدُوا۟ مَآءًۭ فَتَيَمَّمُوا۟ صَعِيدًۭا طَيِّبًۭا فَٱمْسَحُوا۟ بِوُجُوهِكُمْ وَأَيْدِيكُمْ ۗ إِنَّ ٱللَّهَ كَانَ عَفُوًّا غَفُورًا",
    translation: {
      en: "",
      ur: "مومنو! جب تم نشے کی حالت میں ہو تو جب تک (ان الفاظ کو) جو منہ سے کہو سمجھنے (نہ) لگو نماز کے پاس نہ جاؤ اور جنابت کی حالت میں بھی (نماز کے پاس نہ جاؤ) جب تک کہ غسل (نہ) کرلو ہاں اگر بحالت سفر رستے چلے جارہے ہو اور پانی نہ ملنے کے سبب غسل نہ کرسکو تو تیمم کرکے نماز پڑھ لو) اور اگر تم بیمار ہو سفر میں ہو یا تم میں سے کوئی بیت الخلاء سے ہو کر آیا ہو یا تم عورتوں سے ہم بستر ہوئے ہو اور تمہیں پانی نہ ملے تو پاک مٹی لو اور منہ اور ہاتھوں پر مسح (کرکے تیمم) کرلو بےشک خدا معاف کرنے والا اور بخشنے والا ہے",
    },
    words: [
      { id: '4:43:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:43:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:43:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:43:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '4:43:5', arabic: "تَقْرَبُوا۟", transliteration: "taqrabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "go near", ur: "go near" } },
      { id: '4:43:6', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '4:43:7', arabic: "وَأَنتُمْ", transliteration: "wa-antum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while you", ur: "while تم" } },
      { id: '4:43:8', arabic: "سُكَـٰرَىٰ", transliteration: "sukārā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) intoxicated", ur: "(are) intoxicated" } },
      { id: '4:43:9', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '4:43:10', arabic: "تَعْلَمُوا۟", transliteration: "taʿlamū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you know", ur: "تم جاننا" } },
      { id: '4:43:11', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:43:12', arabic: "تَقُولُونَ", transliteration: "taqūlūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are saying", ur: "تم are saying" } },
      { id: '4:43:13', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:43:14', arabic: "جُنُبًا", transliteration: "junuban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(when you are) impure", ur: "(when تم are) impure" } },
      { id: '4:43:15', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:43:16', arabic: "عَابِرِى", transliteration: "ʿābirī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(when) passing", ur: "(when) passing" } },
      { id: '4:43:17', arabic: "سَبِيلٍ", transliteration: "sabīlin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(through) a way", ur: "(through) a راستہ" } },
      { id: '4:43:18', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '4:43:19', arabic: "تَغْتَسِلُوا۟ ۚ", transliteration: "taghtasilū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have bathed", ur: "تم have bathed" } },
      { id: '4:43:20', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:43:21', arabic: "كُنتُم", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '4:43:22', arabic: "مَّرْضَىٰٓ", transliteration: "marḍā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "ill", ur: "ill" } },
      { id: '4:43:23', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:43:24', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '4:43:25', arabic: "سَفَرٍ", transliteration: "safarin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a journey", ur: "a journey" } },
      { id: '4:43:26', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:43:27', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '4:43:28', arabic: "أَحَدٌۭ", transliteration: "aḥadun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one", ur: "one" } },
      { id: '4:43:29', arabic: "مِّنكُم", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of you", ur: "of تم" } },
      { id: '4:43:30', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:43:31', arabic: "ٱلْغَآئِطِ", transliteration: "l-ghāiṭi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the toilet", ur: "the toilet" } },
      { id: '4:43:32', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:43:33', arabic: "لَـٰمَسْتُمُ", transliteration: "lāmastumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have touched", ur: "تم have touched" } },
      { id: '4:43:34', arabic: "ٱلنِّسَآءَ", transliteration: "l-nisāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the women", ur: "the women" } },
      { id: '4:43:35', arabic: "فَلَمْ", transliteration: "falam", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:43:36', arabic: "تَجِدُوا۟", transliteration: "tajidū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you find", ur: "تم find" } },
      { id: '4:43:37', arabic: "مَآءًۭ", transliteration: "māan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "water", ur: "پانی" } },
      { id: '4:43:38', arabic: "فَتَيَمَّمُوا۟", transliteration: "fatayammamū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then do tayammum", ur: "پھر do tayammum" } },
      { id: '4:43:39', arabic: "صَعِيدًۭا", transliteration: "ṣaʿīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) earth", ur: "(ساتھ) زمین" } },
      { id: '4:43:40', arabic: "طَيِّبًۭا", transliteration: "ṭayyiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "clean", ur: "clean" } },
      { id: '4:43:41', arabic: "فَٱمْسَحُوا۟", transliteration: "fa-im'saḥū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and wipe (with it)", ur: "اور wipe (ساتھ it)" } },
      { id: '4:43:42', arabic: "بِوُجُوهِكُمْ", transliteration: "biwujūhikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "your faces", ur: "your faces" } },
      { id: '4:43:43', arabic: "وَأَيْدِيكُمْ ۗ", transliteration: "wa-aydīkum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your hands", ur: "اور your hands" } },
      { id: '4:43:44', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:43:45', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:43:46', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:43:47', arabic: "عَفُوًّا", transliteration: "ʿafuwwan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Pardoning", ur: "Oft-Pardoning" } },
      { id: '4:43:48', arabic: "غَفُورًا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' },
        { from: 28, to: 29, label: 'مضاف + مضاف إليه' },
        { from: 30, to: 31, label: 'مضاف + مضاف إليه' },
        { from: 33, to: 34, label: 'فعل + فاعل' },
        { from: 36, to: 37, label: 'فعل + فاعل' },
        { from: 44, to: 45, label: 'فعل + فاعل' }
      ],
    },
  },
  44: {
    text: "أَلَمْ تَرَ إِلَى ٱلَّذِينَ أُوتُوا۟ نَصِيبًۭا مِّنَ ٱلْكِتَـٰبِ يَشْتَرُونَ ٱلضَّلَـٰلَةَ وَيُرِيدُونَ أَن تَضِلُّوا۟ ٱلسَّبِيلَ",
    translation: {
      en: "",
      ur: "بھلا تم نے ان لوگوں کو نہیں دیکھا جن کو کتاب سے حصہ دیا گیا تھا کہ وہ گمراہی کو خریدتے ہیں اور چاہتے ہیں کہ تم بھی رستے سے بھٹک جاؤ",
    },
    words: [
      { id: '4:44:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did not", ur: "Did نہیں" } },
      { id: '4:44:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '4:44:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[towards]", ur: "[towards]" } },
      { id: '4:44:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:44:5', arabic: "أُوتُوا۟", transliteration: "ūtū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were given", ur: "were given" } },
      { id: '4:44:6', arabic: "نَصِيبًۭا", transliteration: "naṣīban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a portion", ur: "a portion" } },
      { id: '4:44:7', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:44:8', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:44:9', arabic: "يَشْتَرُونَ", transliteration: "yashtarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "purchasing", ur: "purchasing" } },
      { id: '4:44:10', arabic: "ٱلضَّلَـٰلَةَ", transliteration: "l-ḍalālata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] error", ur: "[the] error" } },
      { id: '4:44:11', arabic: "وَيُرِيدُونَ", transliteration: "wayurīdūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and wishing", ur: "اور wishing" } },
      { id: '4:44:12', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:44:13', arabic: "تَضِلُّوا۟", transliteration: "taḍillū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you stray", ur: "تم stray" } },
      { id: '4:44:14', arabic: "ٱلسَّبِيلَ", transliteration: "l-sabīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from) the way", ur: "(سے) the راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  45: {
    text: "وَٱللَّهُ أَعْلَمُ بِأَعْدَآئِكُمْ ۚ وَكَفَىٰ بِٱللَّهِ وَلِيًّۭا وَكَفَىٰ بِٱللَّهِ نَصِيرًۭا",
    translation: {
      en: "",
      ur: "اور خدا تمہارے دشمنوں سے خوب واقف ہے اور خدا ہی کافی کارساز ہے اور کافی مددگار ہے",
    },
    words: [
      { id: '4:45:1', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '4:45:2', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knows better", ur: "knows better" } },
      { id: '4:45:3', arabic: "بِأَعْدَآئِكُمْ ۚ", transliteration: "bi-aʿdāikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about your enemies", ur: "about your enemies" } },
      { id: '4:45:4', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (is) sufficient", ur: "اور (is) sufficient" } },
      { id: '4:45:5', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:45:6', arabic: "وَلِيًّۭا", transliteration: "waliyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(as) a Protector", ur: "(as) a Protector" } },
      { id: '4:45:7', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and sufficient", ur: "اور sufficient" } },
      { id: '4:45:8', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '4:45:9', arabic: "نَصِيرًۭا", transliteration: "naṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(as) a Helper", ur: "(as) a Helper" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  46: {
    text: "مِّنَ ٱلَّذِينَ هَادُوا۟ يُحَرِّفُونَ ٱلْكَلِمَ عَن مَّوَاضِعِهِۦ وَيَقُولُونَ سَمِعْنَا وَعَصَيْنَا وَٱسْمَعْ غَيْرَ مُسْمَعٍۢ وَرَٰعِنَا لَيًّۢا بِأَلْسِنَتِهِمْ وَطَعْنًۭا فِى ٱلدِّينِ ۚ وَلَوْ أَنَّهُمْ قَالُوا۟ سَمِعْنَا وَأَطَعْنَا وَٱسْمَعْ وَٱنظُرْنَا لَكَانَ خَيْرًۭا لَّهُمْ وَأَقْوَمَ وَلَـٰكِن لَّعَنَهُمُ ٱللَّهُ بِكُفْرِهِمْ فَلَا يُؤْمِنُونَ إِلَّا قَلِيلًۭا",
    translation: {
      en: "",
      ur: "اور یہ جو یہودی ہیں ان میں سے کچھ لوگ ایسے بھی ہیں کہ کلمات کو ان کے مقامات سے بدل دیتے ہیں اور کہتے ہیں کہ ہم نے سن لیا اور نہیں مانا اور سنیئے نہ سنوائے جاؤ اور زبان کو مروڑ کر اور دین میں طعن کی راہ سے (تم سے گفتگو) کے وقت راعنا کہتے ہیں اور اگر (یوں) کہتے ہیں کہ ہم نے سن لیا اور مان لیا اور (صرف) اسمع اور (راعنا کی جگہ) انظرنا (کہتے) تو ان کے حق میں بہتر ہوتا اور بات بھی بہت درست ہوتی لیکن خدان نے ان کے کفر کے سبب ان پر لعنت کر رکھی ہے تو یہ کچھ تھوڑے ہی ایمان لاتے ہیں",
    },
    words: [
      { id: '4:46:1', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Of", ur: "Of" } },
      { id: '4:46:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:46:3', arabic: "هَادُوا۟", transliteration: "hādū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are Jews", ur: "are Jews" } },
      { id: '4:46:4', arabic: "يُحَرِّفُونَ", transliteration: "yuḥarrifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they distort", ur: "وہ لوگ distort" } },
      { id: '4:46:5', arabic: "ٱلْكَلِمَ", transliteration: "l-kalima", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the words", ur: "the words" } },
      { id: '4:46:6', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:46:7', arabic: "مَّوَاضِعِهِۦ", transliteration: "mawāḍiʿihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their places", ur: "their places" } },
      { id: '4:46:8', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they say", ur: "اور وہ لوگ کہو" } },
      { id: '4:46:9', arabic: "سَمِعْنَا", transliteration: "samiʿ'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We hear[d]", ur: "ہم سننا[d]" } },
      { id: '4:46:10', arabic: "وَعَصَيْنَا", transliteration: "waʿaṣaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we disobey[ed]", ur: "اور ہم disobey[ed]" } },
      { id: '4:46:11', arabic: "وَٱسْمَعْ", transliteration: "wa-is'maʿ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and \"Hear", ur: "اور \"سننا" } },
      { id: '4:46:12', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:46:13', arabic: "مُسْمَعٍۢ", transliteration: "mus'maʿin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to be heard", ur: "کو be heard" } },
      { id: '4:46:14', arabic: "وَرَٰعِنَا", transliteration: "warāʿinā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and \"Raina", ur: "اور \"Raina" } },
      { id: '4:46:15', arabic: "لَيًّۢا", transliteration: "layyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "twisting", ur: "twisting" } },
      { id: '4:46:16', arabic: "بِأَلْسِنَتِهِمْ", transliteration: "bi-alsinatihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with] their tongues", ur: "[ساتھ] their tongues" } },
      { id: '4:46:17', arabic: "وَطَعْنًۭا", transliteration: "waṭaʿnan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and defaming", ur: "اور defaming" } },
      { id: '4:46:18', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[in]", ur: "[میں]" } },
      { id: '4:46:19', arabic: "ٱلدِّينِ ۚ", transliteration: "l-dīni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the religion", ur: "the religion" } },
      { id: '4:46:20', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:46:21', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that] they", ur: "[وہ] وہ لوگ" } },
      { id: '4:46:22', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(had) said", ur: "(had) کہا" } },
      { id: '4:46:23', arabic: "سَمِعْنَا", transliteration: "samiʿ'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We hear[d]", ur: "ہم سننا[d]" } },
      { id: '4:46:24', arabic: "وَأَطَعْنَا", transliteration: "wa-aṭaʿnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we obey[ed]", ur: "اور ہم obey[ed]" } },
      { id: '4:46:25', arabic: "وَٱسْمَعْ", transliteration: "wa-is'maʿ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and \"Hear", ur: "اور \"سننا" } },
      { id: '4:46:26', arabic: "وَٱنظُرْنَا", transliteration: "wa-unẓur'nā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and look (at) us", ur: "اور look (at) us" } },
      { id: '4:46:27', arabic: "لَكَانَ", transliteration: "lakāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "surely it (would) have been", ur: "یقیناً it (would) have been" } },
      { id: '4:46:28', arabic: "خَيْرًۭا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "better", ur: "better" } },
      { id: '4:46:29', arabic: "لَّهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:46:30', arabic: "وَأَقْوَمَ", transliteration: "wa-aqwama", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and more suitable", ur: "اور more suitable" } },
      { id: '4:46:31', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "[And] but", ur: "[اور] لیکن" } },
      { id: '4:46:32', arabic: "لَّعَنَهُمُ", transliteration: "laʿanahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "cursed them", ur: "cursed them" } },
      { id: '4:46:33', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:46:34', arabic: "بِكُفْرِهِمْ", transliteration: "bikuf'rihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their disbelief", ur: "for their disbelief" } },
      { id: '4:46:35', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so not", ur: "so نہیں" } },
      { id: '4:46:36', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '4:46:37', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:46:38', arabic: "قَلِيلًۭا", transliteration: "qalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a few", ur: "a few" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 36, to: 37, label: 'فعل + فاعل' }
      ],
    },
  },
  47: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَـٰبَ ءَامِنُوا۟ بِمَا نَزَّلْنَا مُصَدِّقًۭا لِّمَا مَعَكُم مِّن قَبْلِ أَن نَّطْمِسَ وُجُوهًۭا فَنَرُدَّهَا عَلَىٰٓ أَدْبَارِهَآ أَوْ نَلْعَنَهُمْ كَمَا لَعَنَّآ أَصْحَـٰبَ ٱلسَّبْتِ ۚ وَكَانَ أَمْرُ ٱللَّهِ مَفْعُولًا",
    translation: {
      en: "",
      ur: "اے کتاب والو! قبل اس کے کہ ہم لوگوں کے مونہوں کو بگاڑ کر ان کی پیٹھ کی طرف پھیر دیں یا ان پر اس طرح لعنت کریں جس طرح ہفتے والوں پر کی تھی ہماری نازل کی ہوئی کتاب پر جو تمہاری کتاب کی بھی تصدیق کرتی ہے ایمان لے آؤ اور خدا نے جو حکم فرمایا سو (سمجھ لو کہ) ہوچکا",
    },
    words: [
      { id: '4:47:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:47:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:47:3', arabic: "أُوتُوا۟", transliteration: "ūtū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(have) been given", ur: "(have) been given" } },
      { id: '4:47:4', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:47:5', arabic: "ءَامِنُوا۟", transliteration: "āminū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '4:47:6', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in what", ur: "میں کیا" } },
      { id: '4:47:7', arabic: "نَزَّلْنَا", transliteration: "nazzalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (have) revealed", ur: "ہم (have) revealed" } },
      { id: '4:47:8', arabic: "مُصَدِّقًۭا", transliteration: "muṣaddiqan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "confirming", ur: "confirming" } },
      { id: '4:47:9', arabic: "لِّمَا", transliteration: "limā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what is", ur: "کیا is" } },
      { id: '4:47:10', arabic: "مَعَكُم", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '4:47:11', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:47:12', arabic: "قَبْلِ", transliteration: "qabli", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before", ur: "پہلے" } },
      { id: '4:47:13', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '4:47:14', arabic: "نَّطْمِسَ", transliteration: "naṭmisa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We efface", ur: "ہم efface" } },
      { id: '4:47:15', arabic: "وُجُوهًۭا", transliteration: "wujūhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "faces", ur: "faces" } },
      { id: '4:47:16', arabic: "فَنَرُدَّهَا", transliteration: "fanaruddahā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and turn them", ur: "اور turn them" } },
      { id: '4:47:17', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '4:47:18', arabic: "أَدْبَارِهَآ", transliteration: "adbārihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their backs", ur: "their backs" } },
      { id: '4:47:19', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:47:20', arabic: "نَلْعَنَهُمْ", transliteration: "nalʿanahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We curse them", ur: "ہم curse them" } },
      { id: '4:47:21', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as", ur: "as" } },
      { id: '4:47:22', arabic: "لَعَنَّآ", transliteration: "laʿannā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We cursed", ur: "ہم cursed" } },
      { id: '4:47:23', arabic: "أَصْحَـٰبَ", transliteration: "aṣḥāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "companions", ur: "companions" } },
      { id: '4:47:24', arabic: "ٱلسَّبْتِ ۚ", transliteration: "l-sabti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Sabbath", ur: "(of) the Sabbath" } },
      { id: '4:47:25', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:47:26', arabic: "أَمْرُ", transliteration: "amru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) command", ur: "(the) command" } },
      { id: '4:47:27', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:47:28', arabic: "مَفْعُولًا", transliteration: "mafʿūlan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(always) executed", ur: "(always) executed" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  48: {
    text: "إِنَّ ٱللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِۦ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَآءُ ۚ وَمَن يُشْرِكْ بِٱللَّهِ فَقَدِ ٱفْتَرَىٰٓ إِثْمًا عَظِيمًا",
    translation: {
      en: "",
      ur: "خدا اس گناہ کو نہیں بخشے گا کہ کسی کو اس کا شریک بنایا جائے اور اس کے سوا اور گناہ جس کو چاہے معاف کردے اور جس نے خدا کا شریک مقرر کیا اس نے بڑا بہتان باندھا",
    },
    words: [
      { id: '4:48:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:48:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:48:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '4:48:4', arabic: "يَغْفِرُ", transliteration: "yaghfiru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "forgive", ur: "forgive" } },
      { id: '4:48:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:48:6', arabic: "يُشْرَكَ", transliteration: "yush'raka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "partners be associated", ur: "partners be associated" } },
      { id: '4:48:7', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Him", ur: "ساتھ Him" } },
      { id: '4:48:8', arabic: "وَيَغْفِرُ", transliteration: "wayaghfiru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but He forgives", ur: "لیکن وہ forgives" } },
      { id: '4:48:9', arabic: "مَا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:48:10', arabic: "دُونَ", transliteration: "dūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '4:48:11', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:48:12', arabic: "لِمَن", transliteration: "liman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for whom", ur: "for whom" } },
      { id: '4:48:13', arabic: "يَشَآءُ ۚ", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '4:48:14', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:48:15', arabic: "يُشْرِكْ", transliteration: "yush'rik", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "associates partners", ur: "associates partners" } },
      { id: '4:48:16', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Allah", ur: "ساتھ اللہ" } },
      { id: '4:48:17', arabic: "فَقَدِ", transliteration: "faqadi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then surely", ur: "پھر یقیناً" } },
      { id: '4:48:18', arabic: "ٱفْتَرَىٰٓ", transliteration: "if'tarā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he has fabricated", ur: "وہ has fabricated" } },
      { id: '4:48:19', arabic: "إِثْمًا", transliteration: "ith'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sin ", ur: "a sin " } },
      { id: '4:48:20', arabic: "عَظِيمًا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "tremendous", ur: "tremendous" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'موصوف + صفت' }
      ],
    },
  },
  49: {
    text: "أَلَمْ تَرَ إِلَى ٱلَّذِينَ يُزَكُّونَ أَنفُسَهُم ۚ بَلِ ٱللَّهُ يُزَكِّى مَن يَشَآءُ وَلَا يُظْلَمُونَ فَتِيلًا",
    translation: {
      en: "",
      ur: "کیا تم نے ان لوگوں کو نہیں دیکھا جو اپنے تئیں پاکیزہ کہتے ہیں (نہیں) بلکہ خدا ہی جس کو چاہتا ہے پاکیزہ کرتا ہے اور ان پر دھاگے کے برابر بھی ظلم نہیں ہوگا",
    },
    words: [
      { id: '4:49:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '4:49:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '4:49:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[towards]", ur: "[towards]" } },
      { id: '4:49:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:49:5', arabic: "يُزَكُّونَ", transliteration: "yuzakkūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "claim purity", ur: "claim purity" } },
      { id: '4:49:6', arabic: "أَنفُسَهُم ۚ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) themselves", ur: "(for) themselves" } },
      { id: '4:49:7', arabic: "بَلِ", transliteration: "bali", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '4:49:8', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(it is) Allah", ur: "(it is) اللہ" } },
      { id: '4:49:9', arabic: "يُزَكِّى", transliteration: "yuzakkī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He purifies", ur: "وہ purifies" } },
      { id: '4:49:10', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '4:49:11', arabic: "يَشَآءُ", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '4:49:12', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:49:13', arabic: "يُظْلَمُونَ", transliteration: "yuẓ'lamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be wronged", ur: "وہ لوگ will be wronged" } },
      { id: '4:49:14', arabic: "فَتِيلًا", transliteration: "fatīlan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(even as much as) a hair on a date-seed", ur: "(even as much as) a hair پر a date-seed" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصول + صلة' }
      ],
    },
  },
  50: {
    text: "ٱنظُرْ كَيْفَ يَفْتَرُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ ۖ وَكَفَىٰ بِهِۦٓ إِثْمًۭا مُّبِينًا",
    translation: {
      en: "",
      ur: "دیکھو یہ خدا پر کیسا جھوٹ (طوفان) باندھتے ہیں اور یہی گناہ صریح کافی ہے",
    },
    words: [
      { id: '4:50:1', arabic: "ٱنظُرْ", transliteration: "unẓur", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "See", ur: "دیکھنا" } },
      { id: '4:50:2', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '4:50:3', arabic: "يَفْتَرُونَ", transliteration: "yaftarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they invent", ur: "وہ لوگ invent" } },
      { id: '4:50:4', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '4:50:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:50:6', arabic: "ٱلْكَذِبَ ۖ", transliteration: "l-kadhiba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] lie", ur: "[the] lie" } },
      { id: '4:50:7', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and sufficient", ur: "اور sufficient" } },
      { id: '4:50:8', arabic: "بِهِۦٓ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "is it ", ur: "is it " } },
      { id: '4:50:9', arabic: "إِثْمًۭا", transliteration: "ith'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a sin", ur: "(as) a sin" } },
      { id: '4:50:10', arabic: "مُّبِينًا", transliteration: "mubīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  51: {
    text: "أَلَمْ تَرَ إِلَى ٱلَّذِينَ أُوتُوا۟ نَصِيبًۭا مِّنَ ٱلْكِتَـٰبِ يُؤْمِنُونَ بِٱلْجِبْتِ وَٱلطَّـٰغُوتِ وَيَقُولُونَ لِلَّذِينَ كَفَرُوا۟ هَـٰٓؤُلَآءِ أَهْدَىٰ مِنَ ٱلَّذِينَ ءَامَنُوا۟ سَبِيلًا",
    translation: {
      en: "",
      ur: "بھلا تم نے ان لوگوں کو نہیں دیکھا جن کو کتاب سے حصہ دیا گیا ہے کہ بتوں اور شیطان کو مانتے ہیں اور کفار کے بارے میں کہتے ہیں کہ یہ لوگ مومنوں کی نسبت سیدھے رستے پر ہیں",
    },
    words: [
      { id: '4:51:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '4:51:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '4:51:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[towards]", ur: "[towards]" } },
      { id: '4:51:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:51:5', arabic: "أُوتُوا۟", transliteration: "ūtū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were given", ur: "were given" } },
      { id: '4:51:6', arabic: "نَصِيبًۭا", transliteration: "naṣīban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a portion", ur: "a portion" } },
      { id: '4:51:7', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:51:8', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:51:9', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "They believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '4:51:10', arabic: "بِٱلْجِبْتِ", transliteration: "bil-jib'ti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in the superstition", ur: "میں the superstition" } },
      { id: '4:51:11', arabic: "وَٱلطَّـٰغُوتِ", transliteration: "wal-ṭāghūti", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the false deities", ur: "اور the جھوٹ deities" } },
      { id: '4:51:12', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they say", ur: "اور وہ لوگ کہو" } },
      { id: '4:51:13', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for those who", ur: "for جو لوگ" } },
      { id: '4:51:14', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve[d]", ur: "disbelieve[d]" } },
      { id: '4:51:15', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "These", ur: "These" } },
      { id: '4:51:16', arabic: "أَهْدَىٰ", transliteration: "ahdā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) better guided", ur: "(are) better guided" } },
      { id: '4:51:17', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than", ur: "than" } },
      { id: '4:51:18', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:51:19', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:51:20', arabic: "سَبِيلًا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as to the) way", ur: "(as کو the) راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' }
      ],
    },
  },
  52: {
    text: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ لَعَنَهُمُ ٱللَّهُ ۖ وَمَن يَلْعَنِ ٱللَّهُ فَلَن تَجِدَ لَهُۥ نَصِيرًا",
    translation: {
      en: "",
      ur: "یہی لوگ ہیں جن پر خدا نے لعنت کی ہے اور جس پر خدا لعنت کرے تو تم اس کا کسی کو مددگار نہ پاؤ گے",
    },
    words: [
      { id: '4:52:1', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '4:52:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the ones", ur: "(are) the ones" } },
      { id: '4:52:3', arabic: "لَعَنَهُمُ", transliteration: "laʿanahumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(who have been) cursed", ur: "(جو have been) cursed" } },
      { id: '4:52:4', arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:52:5', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '4:52:6', arabic: "يَلْعَنِ", transliteration: "yalʿani", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) cursed", ur: "(is) cursed" } },
      { id: '4:52:7', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:52:8', arabic: "فَلَن", transliteration: "falan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then never", ur: "پھر never" } },
      { id: '4:52:9', arabic: "تَجِدَ", transliteration: "tajida", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will you find", ur: "will تم find" } },
      { id: '4:52:10', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '4:52:11', arabic: "نَصِيرًا", transliteration: "naṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(any) helper", ur: "(any) helper" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  53: {
    text: "أَمْ لَهُمْ نَصِيبٌۭ مِّنَ ٱلْمُلْكِ فَإِذًۭا لَّا يُؤْتُونَ ٱلنَّاسَ نَقِيرًا",
    translation: {
      en: "",
      ur: "کیا ان کے پاس بادشاہی کا کچھ حصہ ہے تو لوگوں کو تل برابر بھی نہ دیں گے",
    },
    words: [
      { id: '4:53:1', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '4:53:2', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:53:3', arabic: "نَصِيبٌۭ", transliteration: "naṣībun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) a share", ur: "(is) a share" } },
      { id: '4:53:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:53:5', arabic: "ٱلْمُلْكِ", transliteration: "l-mul'ki", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Kingdom", ur: "the Kingdom" } },
      { id: '4:53:6', arabic: "فَإِذًۭا", transliteration: "fa-idhan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '4:53:7', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not would", ur: "نہیں would" } },
      { id: '4:53:8', arabic: "يُؤْتُونَ", transliteration: "yu'tūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they give", ur: "وہ لوگ give" } },
      { id: '4:53:9', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '4:53:10', arabic: "نَقِيرًا", transliteration: "naqīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(even as much as the) speck on a date seed", ur: "(even as much as the) speck پر a date seed" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  54: {
    text: "أَمْ يَحْسُدُونَ ٱلنَّاسَ عَلَىٰ مَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضْلِهِۦ ۖ فَقَدْ ءَاتَيْنَآ ءَالَ إِبْرَٰهِيمَ ٱلْكِتَـٰبَ وَٱلْحِكْمَةَ وَءَاتَيْنَـٰهُم مُّلْكًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "یا جو خدا نے لوگوں کو اپنے فضل سے دے رکھا ہے اس کا حسد کرتے ہیں تو ہم نے خاندان ابراہیم ؑ کو کتاب اور دانائی عطا فرمائی تھی اور سلطنت عظیم بھی بخشی تھی",
    },
    words: [
      { id: '4:54:1', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '4:54:2', arabic: "يَحْسُدُونَ", transliteration: "yaḥsudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are they jealous", ur: "are وہ لوگ jealous" } },
      { id: '4:54:3', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the people", ur: "(of) the لوگ" } },
      { id: '4:54:4', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '4:54:5', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:54:6', arabic: "ءَاتَىٰهُمُ", transliteration: "ātāhumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gave them", ur: "gave them" } },
      { id: '4:54:7', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:54:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:54:9', arabic: "فَضْلِهِۦ ۖ", transliteration: "faḍlihi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "His Bounty", ur: "His Bounty" } },
      { id: '4:54:10', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But surely", ur: "لیکن یقیناً" } },
      { id: '4:54:11', arabic: "ءَاتَيْنَآ", transliteration: "ātaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave", ur: "ہم gave" } },
      { id: '4:54:12', arabic: "ءَالَ", transliteration: "āla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) family", ur: "(the) family" } },
      { id: '4:54:13', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Ibrahim", ur: "(of) Ibrahim" } },
      { id: '4:54:14', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:54:15', arabic: "وَٱلْحِكْمَةَ", transliteration: "wal-ḥik'mata", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [the] wisdom", ur: "اور [the] wisdom" } },
      { id: '4:54:16', arabic: "وَءَاتَيْنَـٰهُم", transliteration: "waātaynāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [We] gave them", ur: "اور [ہم] gave them" } },
      { id: '4:54:17', arabic: "مُّلْكًا", transliteration: "mul'kan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a kingdom", ur: "a kingdom" } },
      { id: '4:54:18', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'موصوف + صفت' }
      ],
    },
  },
  55: {
    text: "فَمِنْهُم مَّنْ ءَامَنَ بِهِۦ وَمِنْهُم مَّن صَدَّ عَنْهُ ۚ وَكَفَىٰ بِجَهَنَّمَ سَعِيرًا",
    translation: {
      en: "",
      ur: "پھر لوگوں میں سے کسی نے تو اس کتاب کو مانا اور کوئی اس سے رکا (اور ہٹا) رہا تو نہ ماننے والوں (کے جلانے) کو دوزخ کی جلتی ہوئی آگ کافی ہے",
    },
    words: [
      { id: '4:55:1', arabic: "فَمِنْهُم", transliteration: "famin'hum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then of them", ur: "پھر of them" } },
      { id: '4:55:2', arabic: "مَّنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are some) who", ur: "(are some) جو" } },
      { id: '4:55:3', arabic: "ءَامَنَ", transliteration: "āmana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '4:55:4', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in him", ur: "میں him" } },
      { id: '4:55:5', arabic: "وَمِنْهُم", transliteration: "wamin'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of them", ur: "اور of them" } },
      { id: '4:55:6', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are some) who", ur: "(are some) جو" } },
      { id: '4:55:7', arabic: "صَدَّ", transliteration: "ṣadda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "turned away", ur: "turned away" } },
      { id: '4:55:8', arabic: "عَنْهُ ۚ", transliteration: "ʿanhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from him", ur: "سے him" } },
      { id: '4:55:9', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and sufficient", ur: "اور sufficient" } },
      { id: '4:55:10', arabic: "بِجَهَنَّمَ", transliteration: "bijahannama", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) Hell", ur: "(is) جہنم" } },
      { id: '4:55:11', arabic: "سَعِيرًا", transliteration: "saʿīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as a) Blazing Fire", ur: "(as a) Blazing آگ" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  56: {
    text: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ بِـَٔايَـٰتِنَا سَوْفَ نُصْلِيهِمْ نَارًۭا كُلَّمَا نَضِجَتْ جُلُودُهُم بَدَّلْنَـٰهُمْ جُلُودًا غَيْرَهَا لِيَذُوقُوا۟ ٱلْعَذَابَ ۗ إِنَّ ٱللَّهَ كَانَ عَزِيزًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "جن لوگوں نے ہماری آیتوں سے کفر کیا ان کو ہم عنقریب آگ میں داخل کریں گے جب ان کی کھالیں گل (اور جل) جائیں گی تو ہم اور کھالیں بدل دیں گے تاکہ (ہمیشہ) عذاب (کا مزہ چکھتے) رہیں بےشک خدا غالب حکمت والا ہے",
    },
    words: [
      { id: '4:56:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:56:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:56:3', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '4:56:4', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Our Signs", ur: "میں Our نشانیاں" } },
      { id: '4:56:5', arabic: "سَوْفَ", transliteration: "sawfa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "soon", ur: "soon" } },
      { id: '4:56:6', arabic: "نُصْلِيهِمْ", transliteration: "nuṣ'līhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will burn them", ur: "ہم will burn them" } },
      { id: '4:56:7', arabic: "نَارًۭا", transliteration: "nāran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) a Fire", ur: "(میں) a آگ" } },
      { id: '4:56:8', arabic: "كُلَّمَا", transliteration: "kullamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Every time", ur: "ہر وقت" } },
      { id: '4:56:9', arabic: "نَضِجَتْ", transliteration: "naḍijat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are roasted", ur: "are roasted" } },
      { id: '4:56:10', arabic: "جُلُودُهُم", transliteration: "julūduhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their skins", ur: "their skins" } },
      { id: '4:56:11', arabic: "بَدَّلْنَـٰهُمْ", transliteration: "baddalnāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will change their", ur: "ہم will change their" } },
      { id: '4:56:12', arabic: "جُلُودًا", transliteration: "julūdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "skins", ur: "skins" } },
      { id: '4:56:13', arabic: "غَيْرَهَا", transliteration: "ghayrahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for other (than) that", ur: "for other (than) وہ" } },
      { id: '4:56:14', arabic: "لِيَذُوقُوا۟", transliteration: "liyadhūqū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that they may taste", ur: "so وہ وہ لوگ may taste" } },
      { id: '4:56:15', arabic: "ٱلْعَذَابَ ۗ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '4:56:16', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:56:17', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:56:18', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:56:19', arabic: "عَزِيزًا", transliteration: "ʿazīzan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Mighty", ur: "سب-Mighty" } },
      { id: '4:56:20', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ],
    },
  },
  57: {
    text: "وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ سَنُدْخِلُهُمْ جَنَّـٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ خَـٰلِدِينَ فِيهَآ أَبَدًۭا ۖ لَّهُمْ فِيهَآ أَزْوَٰجٌۭ مُّطَهَّرَةٌۭ ۖ وَنُدْخِلُهُمْ ظِلًّۭا ظَلِيلًا",
    translation: {
      en: "",
      ur: "اور جو ایمان لائے اور نیک عمل کرتے رہے ان کو ہم بہشتوں میں داخل کریں گے جن کے نیچے نہریں بہہ رہی ہیں وہ ان میں ہمیشہ ہمیشہ رہیں گے وہاں ان کے لئے پاک بیبیاں ہیں اور ان کو ہم گھنے سائے میں داخل کریں گے",
    },
    words: [
      { id: '4:57:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '4:57:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:57:3', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and did", ur: "اور did" } },
      { id: '4:57:4', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good deeds", ur: "the اچھا deeds" } },
      { id: '4:57:5', arabic: "سَنُدْخِلُهُمْ", transliteration: "sanud'khiluhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will admit them", ur: "ہم will admit them" } },
      { id: '4:57:6', arabic: "جَنَّـٰتٍۢ", transliteration: "jannātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) Gardens", ur: "(میں) باغات" } },
      { id: '4:57:7', arabic: "تَجْرِى", transliteration: "tajrī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "flows", ur: "flows" } },
      { id: '4:57:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:57:9', arabic: "تَحْتِهَا", transliteration: "taḥtihā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "underneath it", ur: "underneath it" } },
      { id: '4:57:10', arabic: "ٱلْأَنْهَـٰرُ", transliteration: "l-anhāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the rivers", ur: "the rivers" } },
      { id: '4:57:11', arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will abide", ur: "will abide" } },
      { id: '4:57:12', arabic: "فِيهَآ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:57:13', arabic: "أَبَدًۭا ۖ", transliteration: "abadan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "forever", ur: "forever" } },
      { id: '4:57:14', arabic: "لَّهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '4:57:15', arabic: "فِيهَآ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:57:16', arabic: "أَزْوَٰجٌۭ", transliteration: "azwājun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) spouses", ur: "(are) spouses" } },
      { id: '4:57:17', arabic: "مُّطَهَّرَةٌۭ ۖ", transliteration: "muṭahharatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "pure", ur: "pure" } },
      { id: '4:57:18', arabic: "وَنُدْخِلُهُمْ", transliteration: "wanud'khiluhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We will admit them", ur: "اور ہم will admit them" } },
      { id: '4:57:19', arabic: "ظِلًّۭا", transliteration: "ẓillan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in the) shade", ur: "(میں the) shade" } },
      { id: '4:57:20', arabic: "ظَلِيلًا", transliteration: "ẓalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "thick", ur: "thick" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  58: {
    text: "۞ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا۟ ٱلْأَمَـٰنَـٰتِ إِلَىٰٓ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ ٱلنَّاسِ أَن تَحْكُمُوا۟ بِٱلْعَدْلِ ۚ إِنَّ ٱللَّهَ نِعِمَّا يَعِظُكُم بِهِۦٓ ۗ إِنَّ ٱللَّهَ كَانَ سَمِيعًۢا بَصِيرًۭا",
    translation: {
      en: "",
      ur: "خدا تم کو حکم دیتا ہے کہ امانت والوں کی امانتیں ان کے حوالے کردیا کرو اور جب لوگوں میں فیصلہ کرنے لگو تو انصاف سے فیصلہ کیا کرو خدا تمہیں بہت خوب نصیحت کرتا ہے بےشک خدا سنتا اور دیکھتا ہے",
    },
    words: [
      { id: '4:58:1', arabic: "۞ إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:58:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:58:3', arabic: "يَأْمُرُكُمْ", transliteration: "yamurukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "orders you", ur: "orders تم" } },
      { id: '4:58:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:58:5', arabic: "تُؤَدُّوا۟", transliteration: "tu-addū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "render", ur: "render" } },
      { id: '4:58:6', arabic: "ٱلْأَمَـٰنَـٰتِ", transliteration: "l-amānāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the trusts", ur: "the trusts" } },
      { id: '4:58:7', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:58:8', arabic: "أَهْلِهَا", transliteration: "ahlihā", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "their owners", ur: "their owners" } },
      { id: '4:58:9', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and when", ur: "اور when" } },
      { id: '4:58:10', arabic: "حَكَمْتُم", transliteration: "ḥakamtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you judge", ur: "تم judge" } },
      { id: '4:58:11', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '4:58:12', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '4:58:13', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:58:14', arabic: "تَحْكُمُوا۟", transliteration: "taḥkumū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "judge", ur: "judge" } },
      { id: '4:58:15', arabic: "بِٱلْعَدْلِ ۚ", transliteration: "bil-ʿadli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with justice", ur: "ساتھ justice" } },
      { id: '4:58:16', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:58:17', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:58:18', arabic: "نِعِمَّا", transliteration: "niʿimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "excellently", ur: "excellently" } },
      { id: '4:58:19', arabic: "يَعِظُكُم", transliteration: "yaʿiẓukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "advises you", ur: "advises تم" } },
      { id: '4:58:20', arabic: "بِهِۦٓ ۗ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '4:58:21', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:58:22', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:58:23', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:58:24', arabic: "سَمِيعًۢا", transliteration: "samīʿan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Hearing", ur: "سب سننے والا" } },
      { id: '4:58:25', arabic: "بَصِيرًۭا", transliteration: "baṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Seeing", ur: "سب دیکھنے والا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  59: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَطِيعُوا۟ ٱللَّهَ وَأَطِيعُوا۟ ٱلرَّسُولَ وَأُو۟لِى ٱلْأَمْرِ مِنكُمْ ۖ فَإِن تَنَـٰزَعْتُمْ فِى شَىْءٍۢ فَرُدُّوهُ إِلَى ٱللَّهِ وَٱلرَّسُولِ إِن كُنتُمْ تُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ ۚ ذَٰلِكَ خَيْرٌۭ وَأَحْسَنُ تَأْوِيلًا",
    translation: {
      en: "",
      ur: "مومنو! خدا اور اس کے رسول کی فرمانبرداری کرو اور جو تم میں سے صاحب حکومت ہیں ان کی بھی اور اگر کسی بات میں تم میں اختلاف واقع ہو تو اگر خدا اور روز آخرت پر ایمان رکھتے ہو تو اس میں خدا اور اس کے رسول (کے حکم) کی طرف رجوع کرو یہ بہت اچھی بات ہے اور اس کا مآل بھی اچھا ہے",
    },
    words: [
      { id: '4:59:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:59:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:59:3', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:59:4', arabic: "أَطِيعُوا۟", transliteration: "aṭīʿū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Obey", ur: "Obey" } },
      { id: '4:59:5', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:59:6', arabic: "وَأَطِيعُوا۟", transliteration: "wa-aṭīʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey", ur: "اور obey" } },
      { id: '4:59:7', arabic: "ٱلرَّسُولَ", transliteration: "l-rasūla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '4:59:8', arabic: "وَأُو۟لِى", transliteration: "wa-ulī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those", ur: "اور those" } },
      { id: '4:59:9', arabic: "ٱلْأَمْرِ", transliteration: "l-amri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(having) authority", ur: "(having) authority" } },
      { id: '4:59:10', arabic: "مِنكُمْ ۖ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '4:59:11', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then if", ur: "پھر if" } },
      { id: '4:59:12', arabic: "تَنَـٰزَعْتُمْ", transliteration: "tanāzaʿtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you disagree", ur: "تم disagree" } },
      { id: '4:59:13', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:59:14', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '4:59:15', arabic: "فَرُدُّوهُ", transliteration: "faruddūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "refer it", ur: "refer it" } },
      { id: '4:59:16', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:59:17', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:59:18', arabic: "وَٱلرَّسُولِ", transliteration: "wal-rasūli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Messenger", ur: "اور the رسول" } },
      { id: '4:59:19', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:59:20', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '4:59:21', arabic: "تُؤْمِنُونَ", transliteration: "tu'minūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '4:59:22', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:59:23', arabic: "وَٱلْيَوْمِ", transliteration: "wal-yawmi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "and the Day", ur: "اور the دن" } },
      { id: '4:59:24', arabic: "ٱلْـَٔاخِرِ ۚ", transliteration: "l-ākhiri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Last", ur: "[the] Last" } },
      { id: '4:59:25', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '4:59:26', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) best", ur: "(is) best" } },
      { id: '4:59:27', arabic: "وَأَحْسَنُ", transliteration: "wa-aḥsanu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and more suitable", ur: "اور more suitable" } },
      { id: '4:59:28', arabic: "تَأْوِيلًا", transliteration: "tawīlan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(for final) determination", ur: "(for final) determination" } }
    ],
    structure: {
      relationships: [
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  60: {
    text: "أَلَمْ تَرَ إِلَى ٱلَّذِينَ يَزْعُمُونَ أَنَّهُمْ ءَامَنُوا۟ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ يُرِيدُونَ أَن يَتَحَاكَمُوٓا۟ إِلَى ٱلطَّـٰغُوتِ وَقَدْ أُمِرُوٓا۟ أَن يَكْفُرُوا۟ بِهِۦ وَيُرِيدُ ٱلشَّيْطَـٰنُ أَن يُضِلَّهُمْ ضَلَـٰلًۢا بَعِيدًۭا",
    translation: {
      en: "",
      ur: "کیا تم نے ان لوگوں کو نہیں دیکھا جو دعویٰ تو یہ کرتے ہیں کہ جو (کتاب) تم پر نازل ہوئی اور جو (کتابیں) تم سے پہلے نازل ہوئیں ان سب پر ایمان رکھتے ہیں اور چاہتے یہ ہیں کہ اپنا مقدمہ ایک سرکش کے پاس لے جا کر فیصلہ کرائیں حالانکہ ان کو حکم دیا گیا تھا کہ اس سے اعتقاد نہ رکھیں اور شیطان (تو یہ) چاہتا ہے کہ ان کو بہکا کر رستے سے دور ڈال دے",
    },
    words: [
      { id: '4:60:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '4:60:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '4:60:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[towards]", ur: "[towards]" } },
      { id: '4:60:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:60:5', arabic: "يَزْعُمُونَ", transliteration: "yazʿumūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "claim", ur: "claim" } },
      { id: '4:60:6', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '4:60:7', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '4:60:8', arabic: "بِمَآ", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in what", ur: "میں کیا" } },
      { id: '4:60:9', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) revealed", ur: "(is) revealed" } },
      { id: '4:60:10', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:60:11', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '4:60:12', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was revealed", ur: "was revealed" } },
      { id: '4:60:13', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:60:14', arabic: "قَبْلِكَ", transliteration: "qablika", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '4:60:15', arabic: "يُرِيدُونَ", transliteration: "yurīdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They wish", ur: "وہ لوگ wish" } },
      { id: '4:60:16', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:60:17', arabic: "يَتَحَاكَمُوٓا۟", transliteration: "yataḥākamū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "go for judgment", ur: "go for judgment" } },
      { id: '4:60:18', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:60:19', arabic: "ٱلطَّـٰغُوتِ", transliteration: "l-ṭāghūti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the false deities", ur: "the جھوٹ deities" } },
      { id: '4:60:20', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and surely", ur: "اور یقیناً" } },
      { id: '4:60:21', arabic: "أُمِرُوٓا۟", transliteration: "umirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were ordered", ur: "وہ لوگ were ordered" } },
      { id: '4:60:22', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:60:23', arabic: "يَكْفُرُوا۟", transliteration: "yakfurū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reject", ur: "reject" } },
      { id: '4:60:24', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with] it", ur: "[ساتھ] it" } },
      { id: '4:60:25', arabic: "وَيُرِيدُ", transliteration: "wayurīdu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And wishes", ur: "اور wishes" } },
      { id: '4:60:26', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '4:60:27', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:60:28', arabic: "يُضِلَّهُمْ", transliteration: "yuḍillahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "mislead them", ur: "mislead them" } },
      { id: '4:60:29', arabic: "ضَلَـٰلًۢا", transliteration: "ḍalālan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "astray ", ur: "astray " } },
      { id: '4:60:30', arabic: "بَعِيدًۭا", transliteration: "baʿīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far away", ur: "far away" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'فعل + فاعل' }
      ],
    },
  },
  61: {
    text: "وَإِذَا قِيلَ لَهُمْ تَعَالَوْا۟ إِلَىٰ مَآ أَنزَلَ ٱللَّهُ وَإِلَى ٱلرَّسُولِ رَأَيْتَ ٱلْمُنَـٰفِقِينَ يَصُدُّونَ عَنكَ صُدُودًۭا",
    translation: {
      en: "",
      ur: "اور جب ان سے کہا جاتا ہے کہ جو حکم خدا نے نازل فرمایا ہے اس کی طرف (رجوع کرو) اور پیغمبر کی طرف آؤ تو تم منافقوں کو دیکھتے ہو کہ تم سے اعراض کرتے اور رکے جاتے ہیں",
    },
    words: [
      { id: '4:61:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '4:61:2', arabic: "قِيلَ", transliteration: "qīla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "it is said", ur: "it is کہا" } },
      { id: '4:61:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '4:61:4', arabic: "تَعَالَوْا۟", transliteration: "taʿālaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Come", ur: "Come" } },
      { id: '4:61:5', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:61:6', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:61:7', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "(has) revealed", ur: "(has) revealed" } },
      { id: '4:61:8', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:61:9', arabic: "وَإِلَى", transliteration: "wa-ilā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to", ur: "اور کو" } },
      { id: '4:61:10', arabic: "ٱلرَّسُولِ", transliteration: "l-rasūli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '4:61:11', arabic: "رَأَيْتَ", transliteration: "ra-ayta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '4:61:12', arabic: "ٱلْمُنَـٰفِقِينَ", transliteration: "l-munāfiqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hypocrites", ur: "the hypocrites" } },
      { id: '4:61:13', arabic: "يَصُدُّونَ", transliteration: "yaṣuddūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turning away", ur: "turning away" } },
      { id: '4:61:14', arabic: "عَنكَ", transliteration: "ʿanka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '4:61:15', arabic: "صُدُودًۭا", transliteration: "ṣudūdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) aversion", ur: "(میں) aversion" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  62: {
    text: "فَكَيْفَ إِذَآ أَصَـٰبَتْهُم مُّصِيبَةٌۢ بِمَا قَدَّمَتْ أَيْدِيهِمْ ثُمَّ جَآءُوكَ يَحْلِفُونَ بِٱللَّهِ إِنْ أَرَدْنَآ إِلَّآ إِحْسَـٰنًۭا وَتَوْفِيقًا",
    translation: {
      en: "",
      ur: "تو کیسی (ندامت کی) بات ہے کہ جب ان کے اعمال (کی شامت سے) ان پر کوئی مصیبت واقع ہوتی ہے تو تمہارے پاس بھاگے آتے ہیں اور قسمیں کھاتے ہیں کہ والله ہمارا مقصود تو بھلائی اور موافقت تھا",
    },
    words: [
      { id: '4:62:1', arabic: "فَكَيْفَ", transliteration: "fakayfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So how", ur: "So how" } },
      { id: '4:62:2', arabic: "إِذَآ", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '4:62:3', arabic: "أَصَـٰبَتْهُم", transliteration: "aṣābathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "befalls them", ur: "befalls them" } },
      { id: '4:62:4', arabic: "مُّصِيبَةٌۢ", transliteration: "muṣībatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disaster", ur: "disaster" } },
      { id: '4:62:5', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '4:62:6', arabic: "قَدَّمَتْ", transliteration: "qaddamat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sent forth", ur: "sent forth" } },
      { id: '4:62:7', arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hands", ur: "their hands" } },
      { id: '4:62:8', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:62:9', arabic: "جَآءُوكَ", transliteration: "jāūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they come to you", ur: "وہ لوگ come کو تم" } },
      { id: '4:62:10', arabic: "يَحْلِفُونَ", transliteration: "yaḥlifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "swearing", ur: "swearing" } },
      { id: '4:62:11', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by Allah", ur: "by اللہ" } },
      { id: '4:62:12', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '4:62:13', arabic: "أَرَدْنَآ", transliteration: "aradnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we intended", ur: "ہم intended" } },
      { id: '4:62:14', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:62:15', arabic: "إِحْسَـٰنًۭا", transliteration: "iḥ'sānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '4:62:16', arabic: "وَتَوْفِيقًا", transliteration: "watawfīqan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and reconciliation", ur: "اور reconciliation" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  63: {
    text: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ يَعْلَمُ ٱللَّهُ مَا فِى قُلُوبِهِمْ فَأَعْرِضْ عَنْهُمْ وَعِظْهُمْ وَقُل لَّهُمْ فِىٓ أَنفُسِهِمْ قَوْلًۢا بَلِيغًۭا",
    translation: {
      en: "",
      ur: "ان لوگوں کے دلوں میں جو کچھ ہے خدا اس کو خوب جانتا ہے تم ان (کی باتوں) کو کچھ خیال نہ کرو اور انہیں نصیحت کرو اور ان سے ایسی باتیں کہو جو ان کے دلوں میں اثر کر جائیں",
    },
    words: [
      { id: '4:63:1', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '4:63:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the ones who ", ur: "(are) the ones جو " } },
      { id: '4:63:3', arabic: "يَعْلَمُ", transliteration: "yaʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "knows", ur: "knows" } },
      { id: '4:63:4', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:63:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:63:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:63:7', arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '4:63:8', arabic: "فَأَعْرِضْ", transliteration: "fa-aʿriḍ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so turn away", ur: "so turn away" } },
      { id: '4:63:9', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '4:63:10', arabic: "وَعِظْهُمْ", transliteration: "waʿiẓ'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and admonish them", ur: "اور admonish them" } },
      { id: '4:63:11', arabic: "وَقُل", transliteration: "waqul", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and say", ur: "اور کہو" } },
      { id: '4:63:12', arabic: "لَّهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '4:63:13', arabic: "فِىٓ", transliteration: "fī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '4:63:14', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "their souls", ur: "their souls" } },
      { id: '4:63:15', arabic: "قَوْلًۢا", transliteration: "qawlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a word", ur: "a word" } },
      { id: '4:63:16', arabic: "بَلِيغًۭا", transliteration: "balīghan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "penetrating", ur: "penetrating" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  64: {
    text: "وَمَآ أَرْسَلْنَا مِن رَّسُولٍ إِلَّا لِيُطَاعَ بِإِذْنِ ٱللَّهِ ۚ وَلَوْ أَنَّهُمْ إِذ ظَّلَمُوٓا۟ أَنفُسَهُمْ جَآءُوكَ فَٱسْتَغْفَرُوا۟ ٱللَّهَ وَٱسْتَغْفَرَ لَهُمُ ٱلرَّسُولُ لَوَجَدُوا۟ ٱللَّهَ تَوَّابًۭا رَّحِيمًۭا",
    translation: {
      en: "",
      ur: "اور ہم نے جو پیغمبر بھیجا ہے اس لئے بھیجا ہے کہ خدا کے فرمان کے مطابق اس کا حکم مانا جائے اور یہ لوگ جب اپنے حق میں ظلم کر بیٹھے تھے اگر تمہارے پاس آتے اور خدا سے بخشش مانگتے اور رسول (خدا) بھی ان کے لئے بخشش طلب کرتے تو خدا کو معاف کرنے والا (اور) مہربان پاتے",
    },
    words: [
      { id: '4:64:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '4:64:2', arabic: "أَرْسَلْنَا", transliteration: "arsalnā", pos: ['V'], posLabel: 'V', root: "ر س ل", meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '4:64:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '4:64:4', arabic: "رَّسُولٍ", transliteration: "rasūlin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messenger", ur: "رسول" } },
      { id: '4:64:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:64:6', arabic: "لِيُطَاعَ", transliteration: "liyuṭāʿa", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to be obeyed", ur: "کو be obeyed" } },
      { id: '4:64:7', arabic: "بِإِذْنِ", transliteration: "bi-idh'ni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by (the) permission", ur: "by (the) permission" } },
      { id: '4:64:8', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:64:9', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:64:10', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that] they", ur: "[وہ] وہ لوگ" } },
      { id: '4:64:11', arabic: "إِذ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '4:64:12', arabic: "ظَّلَمُوٓا۟", transliteration: "ẓalamū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they wronged", ur: "وہ لوگ wronged" } },
      { id: '4:64:13', arabic: "أَنفُسَهُمْ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '4:64:14', arabic: "جَآءُوكَ", transliteration: "jāūka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(had) come to you", ur: "(had) come کو تم" } },
      { id: '4:64:15', arabic: "فَٱسْتَغْفَرُوا۟", transliteration: "fa-is'taghfarū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and asked forgiveness", ur: "اور asked مغفرت" } },
      { id: '4:64:16', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:64:17', arabic: "وَٱسْتَغْفَرَ", transliteration: "wa-is'taghfara", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and asked forgiveness", ur: "اور asked مغفرت" } },
      { id: '4:64:18', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:64:19', arabic: "ٱلرَّسُولُ", transliteration: "l-rasūlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '4:64:20', arabic: "لَوَجَدُوا۟", transliteration: "lawajadū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely they would have found", ur: "یقیناً وہ لوگ would have found" } },
      { id: '4:64:21', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:64:22', arabic: "تَوَّابًۭا", transliteration: "tawwāban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:64:23', arabic: "رَّحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  65: {
    text: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا۟ فِىٓ أَنفُسِهِمْ حَرَجًۭا مِّمَّا قَضَيْتَ وَيُسَلِّمُوا۟ تَسْلِيمًۭا",
    translation: {
      en: "",
      ur: "تمہارے پروردگار کی قسم یہ لوگ جب تک اپنے تنازعات میں تمہیں منصف نہ بنائیں اور جو فیصلہ تم کردو اس سے اپنے دل میں تنگ نہ ہوں بلکہ اس کو خوشی سے مان لیں تب تک مومن نہیں ہوں گے",
    },
    words: [
      { id: '4:65:1', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But no", ur: "لیکن نہیں" } },
      { id: '4:65:2', arabic: "وَرَبِّكَ", transliteration: "warabbika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "by your Lord", ur: "by your رب" } },
      { id: '4:65:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:65:4', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "will they believe", ur: "will وہ لوگ ایمان لانا" } },
      { id: '4:65:5', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '4:65:6', arabic: "يُحَكِّمُوكَ", transliteration: "yuḥakkimūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they make you judge", ur: "وہ لوگ make تم judge" } },
      { id: '4:65:7', arabic: "فِيمَا", transliteration: "fīmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about what", ur: "about کیا" } },
      { id: '4:65:8', arabic: "شَجَرَ", transliteration: "shajara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "arises", ur: "arises" } },
      { id: '4:65:9', arabic: "بَيْنَهُمْ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '4:65:10', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:65:11', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:65:12', arabic: "يَجِدُوا۟", transliteration: "yajidū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they find", ur: "وہ لوگ find" } },
      { id: '4:65:13', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:65:14', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '4:65:15', arabic: "حَرَجًۭا", transliteration: "ḥarajan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any discomfort", ur: "any discomfort" } },
      { id: '4:65:16', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about what", ur: "about کیا" } },
      { id: '4:65:17', arabic: "قَضَيْتَ", transliteration: "qaḍayta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (have) decided", ur: "تم (have) decided" } },
      { id: '4:65:18', arabic: "وَيُسَلِّمُوا۟", transliteration: "wayusallimū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and submit", ur: "اور submit" } },
      { id: '4:65:19', arabic: "تَسْلِيمًۭا", transliteration: "taslīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in full) submission", ur: "(میں full) submission" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  66: {
    text: "وَلَوْ أَنَّا كَتَبْنَا عَلَيْهِمْ أَنِ ٱقْتُلُوٓا۟ أَنفُسَكُمْ أَوِ ٱخْرُجُوا۟ مِن دِيَـٰرِكُم مَّا فَعَلُوهُ إِلَّا قَلِيلٌۭ مِّنْهُمْ ۖ وَلَوْ أَنَّهُمْ فَعَلُوا۟ مَا يُوعَظُونَ بِهِۦ لَكَانَ خَيْرًۭا لَّهُمْ وَأَشَدَّ تَثْبِيتًۭا",
    translation: {
      en: "",
      ur: "اور اگر ہم انہیں حکم دیتے کہ اپنے آپ کو قتل کر ڈالو یا اپنے گھر چھوڑ کر نکل جاؤ تو ان میں سے تھوڑے ہی ایسا کرتے اور اگر یہ اس نصیحت پر کاربند ہوتے جو ان کو کی جاتی ہے تو ان کے حق میں بہتر اور (دین میں) زیادہ ثابت قدمی کا موجب ہوتا",
    },
    words: [
      { id: '4:66:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:66:2', arabic: "أَنَّا", transliteration: "annā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that] We", ur: "[وہ] ہم" } },
      { id: '4:66:3', arabic: "كَتَبْنَا", transliteration: "katabnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) decreed", ur: "(had) decreed" } },
      { id: '4:66:4', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on them", ur: "پر them" } },
      { id: '4:66:5', arabic: "أَنِ", transliteration: "ani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:66:6', arabic: "ٱقْتُلُوٓا۟", transliteration: "uq'tulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Kill", ur: "Kill" } },
      { id: '4:66:7', arabic: "أَنفُسَكُمْ", transliteration: "anfusakum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "yourselves", ur: "yourselves" } },
      { id: '4:66:8', arabic: "أَوِ", transliteration: "awi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:66:9', arabic: "ٱخْرُجُوا۟", transliteration: "ukh'rujū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Go forth", ur: "Go forth" } },
      { id: '4:66:10', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:66:11', arabic: "دِيَـٰرِكُم", transliteration: "diyārikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your homes", ur: "your homes" } },
      { id: '4:66:12', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:66:13', arabic: "فَعَلُوهُ", transliteration: "faʿalūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "they would have done it", ur: "وہ لوگ would have done it" } },
      { id: '4:66:14', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:66:15', arabic: "قَلِيلٌۭ", transliteration: "qalīlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a few", ur: "a few" } },
      { id: '4:66:16', arabic: "مِّنْهُمْ ۖ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '4:66:17', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:66:18', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that] they", ur: "[وہ] وہ لوگ" } },
      { id: '4:66:19', arabic: "فَعَلُوا۟", transliteration: "faʿalū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "had done", ur: "had done" } },
      { id: '4:66:20', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:66:21', arabic: "يُوعَظُونَ", transliteration: "yūʿaẓūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were advised", ur: "وہ لوگ were advised" } },
      { id: '4:66:22', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [it]", ur: "ساتھ [it]" } },
      { id: '4:66:23', arabic: "لَكَانَ", transliteration: "lakāna", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "surely (it) would have been", ur: "یقیناً (it) would have been" } },
      { id: '4:66:24', arabic: "خَيْرًۭا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "better", ur: "better" } },
      { id: '4:66:25', arabic: "لَّهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:66:26', arabic: "وَأَشَدَّ", transliteration: "wa-ashadda", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and stronger", ur: "اور stronger" } },
      { id: '4:66:27', arabic: "تَثْبِيتًۭا", transliteration: "tathbītan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "strengthen(ing)", ur: "strengthen(ing)" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'موصول + صلة' },
        { from: 23, to: 24, label: 'فعل + فاعل' }
      ],
    },
  },
  67: {
    text: "وَإِذًۭا لَّـَٔاتَيْنَـٰهُم مِّن لَّدُنَّآ أَجْرًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "اور ہم ان کو اپنے ہاں سے اجر عظیم بھی عطا فرماتے",
    },
    words: [
      { id: '4:67:1', arabic: "وَإِذًۭا", transliteration: "wa-idhan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And then", ur: "اور پھر" } },
      { id: '4:67:2', arabic: "لَّـَٔاتَيْنَـٰهُم", transliteration: "laātaynāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We would (have) given them", ur: "ہم would (have) given them" } },
      { id: '4:67:3', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:67:4', arabic: "لَّدُنَّآ", transliteration: "ladunnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ourselves", ur: "Ourselves" } },
      { id: '4:67:5', arabic: "أَجْرًا", transliteration: "ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reward", ur: "a ثواب" } },
      { id: '4:67:6', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  68: {
    text: "وَلَهَدَيْنَـٰهُمْ صِرَٰطًۭا مُّسْتَقِيمًۭا",
    translation: {
      en: "",
      ur: "اور سیدھا رستہ بھی دکھاتے",
    },
    words: [
      { id: '4:68:1', arabic: "وَلَهَدَيْنَـٰهُمْ", transliteration: "walahadaynāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We would have guided them", ur: "اور ہم would have guided them" } },
      { id: '4:68:2', arabic: "صِرَٰطًۭا", transliteration: "ṣirāṭan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to the) way", ur: "(کو the) راستہ" } },
      { id: '4:68:3', arabic: "مُّسْتَقِيمًۭا", transliteration: "mus'taqīman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) straight", ur: "(the) سیدھا" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  69: {
    text: "وَمَن يُطِعِ ٱللَّهَ وَٱلرَّسُولَ فَأُو۟لَـٰٓئِكَ مَعَ ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم مِّنَ ٱلنَّبِيِّـۧنَ وَٱلصِّدِّيقِينَ وَٱلشُّهَدَآءِ وَٱلصَّـٰلِحِينَ ۚ وَحَسُنَ أُو۟لَـٰٓئِكَ رَفِيقًۭا",
    translation: {
      en: "",
      ur: "اور جو لوگ خدا اور اس کے رسول کی اطاعت کرتے ہیں وہ (قیامت کے روز) ان لوگوں کے ساتھ ہوں گے جن پر خدا نے بڑا فضل کیا یعنی انبیاء اور صدیق اور شہید اور نیک لوگ اور ان لوگوں کی رفاقت بہت ہی خوب ہے",
    },
    words: [
      { id: '4:69:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:69:2', arabic: "يُطِعِ", transliteration: "yuṭiʿi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "obeys", ur: "obeys" } },
      { id: '4:69:3', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:69:4', arabic: "وَٱلرَّسُولَ", transliteration: "wal-rasūla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Messenger", ur: "اور the رسول" } },
      { id: '4:69:5', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then those", ur: "پھر those" } },
      { id: '4:69:6', arabic: "مَعَ", transliteration: "maʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) with", ur: "(will be) ساتھ" } },
      { id: '4:69:7', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those whom", ur: "those whom" } },
      { id: '4:69:8', arabic: "أَنْعَمَ", transliteration: "anʿama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has bestowed (His) Favor", ur: "has bestowed (His) Favor" } },
      { id: '4:69:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:69:10', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them ", ur: "پر them " } },
      { id: '4:69:11', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:69:12', arabic: "ٱلنَّبِيِّـۧنَ", transliteration: "l-nabiyīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Prophets", ur: "the Prophets" } },
      { id: '4:69:13', arabic: "وَٱلصِّدِّيقِينَ", transliteration: "wal-ṣidīqīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the truthful", ur: "اور the truthful" } },
      { id: '4:69:14', arabic: "وَٱلشُّهَدَآءِ", transliteration: "wal-shuhadāi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the martyrs", ur: "اور the martyrs" } },
      { id: '4:69:15', arabic: "وَٱلصَّـٰلِحِينَ ۚ", transliteration: "wal-ṣāliḥīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the righteous", ur: "اور the نیک" } },
      { id: '4:69:16', arabic: "وَحَسُنَ", transliteration: "waḥasuna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And excellent", ur: "اور excellent" } },
      { id: '4:69:17', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) those", ur: "(are) those" } },
      { id: '4:69:18', arabic: "رَفِيقًۭا", transliteration: "rafīqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "companion(s)", ur: "companion(s)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  70: {
    text: "ذَٰلِكَ ٱلْفَضْلُ مِنَ ٱللَّهِ ۚ وَكَفَىٰ بِٱللَّهِ عَلِيمًۭا",
    translation: {
      en: "",
      ur: "یہ خدا کا فضل ہے اور خدا جاننے والا کافی ہے",
    },
    words: [
      { id: '4:70:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '4:70:2', arabic: "ٱلْفَضْلُ", transliteration: "l-faḍlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Bounty", ur: "(is) the Bounty" } },
      { id: '4:70:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:70:4', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:70:5', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and sufficient", ur: "اور sufficient" } },
      { id: '4:70:6', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:70:7', arabic: "عَلِيمًۭا", transliteration: "ʿalīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(as) All-Knower", ur: "(as) سب-Knower" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  71: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ خُذُوا۟ حِذْرَكُمْ فَٱنفِرُوا۟ ثُبَاتٍ أَوِ ٱنفِرُوا۟ جَمِيعًۭا",
    translation: {
      en: "",
      ur: "مومنو! (جہاد کے لئے) ہتھیار لے لیا کرو پھر یا تو جماعت جماعت ہو کر نکلا کرو یا سب اکھٹے کوچ کیا کرو",
    },
    words: [
      { id: '4:71:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:71:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:71:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:71:4', arabic: "خُذُوا۟", transliteration: "khudhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Take", ur: "Take" } },
      { id: '4:71:5', arabic: "حِذْرَكُمْ", transliteration: "ḥidh'rakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your precautions", ur: "your precautions" } },
      { id: '4:71:6', arabic: "فَٱنفِرُوا۟", transliteration: "fa-infirū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and advance", ur: "اور advance" } },
      { id: '4:71:7', arabic: "ثُبَاتٍ", transliteration: "thubātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) groups", ur: "(میں) groups" } },
      { id: '4:71:8', arabic: "أَوِ", transliteration: "awi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:71:9', arabic: "ٱنفِرُوا۟", transliteration: "infirū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "advance", ur: "advance" } },
      { id: '4:71:10', arabic: "جَمِيعًۭا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all together", ur: "سب together" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  72: {
    text: "وَإِنَّ مِنكُمْ لَمَن لَّيُبَطِّئَنَّ فَإِنْ أَصَـٰبَتْكُم مُّصِيبَةٌۭ قَالَ قَدْ أَنْعَمَ ٱللَّهُ عَلَىَّ إِذْ لَمْ أَكُن مَّعَهُمْ شَهِيدًۭا",
    translation: {
      en: "",
      ur: "اور تم میں کوئی ایسا بھی ہے کہ (عمداً) دیر لگاتا ہے۔ پھر اگر تم پر کوئی مصیبت پڑ جائے تو کہتا ہے کہ خدا نے مجھ پر بڑی مہربانی کی کہ میں ان میں موجود نہ تھا",
    },
    words: [
      { id: '4:72:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '4:72:2', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '4:72:3', arabic: "لَمَن", transliteration: "laman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is he) who", ur: "(is وہ) جو" } },
      { id: '4:72:4', arabic: "لَّيُبَطِّئَنَّ", transliteration: "layubaṭṭi-anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lags behind", ur: "lags behind" } },
      { id: '4:72:5', arabic: "فَإِنْ", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then if", ur: "پھر if" } },
      { id: '4:72:6', arabic: "أَصَـٰبَتْكُم", transliteration: "aṣābatkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "befalls you", ur: "befalls تم" } },
      { id: '4:72:7', arabic: "مُّصِيبَةٌۭ", transliteration: "muṣībatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a disaster", ur: "a disaster" } },
      { id: '4:72:8', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '4:72:9', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '4:72:10', arabic: "أَنْعَمَ", transliteration: "anʿama", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(has) favored", ur: "(has) favored" } },
      { id: '4:72:11', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:72:12', arabic: "عَلَىَّ", transliteration: "ʿalayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[on] me", ur: "[پر] me" } },
      { id: '4:72:13', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[when]", ur: "[when]" } },
      { id: '4:72:14', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(that) not", ur: "(وہ) نہیں" } },
      { id: '4:72:15', arabic: "أَكُن", transliteration: "akun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I was", ur: "میں was" } },
      { id: '4:72:16', arabic: "مَّعَهُمْ", transliteration: "maʿahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '4:72:17', arabic: "شَهِيدًۭا", transliteration: "shahīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "present", ur: "present" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  73: {
    text: "وَلَئِنْ أَصَـٰبَكُمْ فَضْلٌۭ مِّنَ ٱللَّهِ لَيَقُولَنَّ كَأَن لَّمْ تَكُنۢ بَيْنَكُمْ وَبَيْنَهُۥ مَوَدَّةٌۭ يَـٰلَيْتَنِى كُنتُ مَعَهُمْ فَأَفُوزَ فَوْزًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "اور اگر خدا تم پر فضل کرے تو اس طرح سے کہ گویا تم میں اس میں دوستی تھی ہی نہیں (کہ افسوس کرتا اور) کہتا ہے کہ کاش میں بھی ان کے ساتھ ہوتا تو مقصد عظیم حاصل کرتا",
    },
    words: [
      { id: '4:73:1', arabic: "وَلَئِنْ", transliteration: "wala-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:73:2', arabic: "أَصَـٰبَكُمْ", transliteration: "aṣābakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "befalls you", ur: "befalls تم" } },
      { id: '4:73:3', arabic: "فَضْلٌۭ", transliteration: "faḍlun", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "bounty", ur: "bounty" } },
      { id: '4:73:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:73:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:73:6', arabic: "لَيَقُولَنَّ", transliteration: "layaqūlanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he would surely say", ur: "وہ would یقیناً کہو" } },
      { id: '4:73:7', arabic: "كَأَن", transliteration: "ka-an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as if", ur: "as if" } },
      { id: '4:73:8', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(had) not", ur: "(had) نہیں" } },
      { id: '4:73:9', arabic: "تَكُنۢ", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "there been", ur: "there been" } },
      { id: '4:73:10', arabic: "بَيْنَكُمْ", transliteration: "baynakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between you", ur: "درمیان تم" } },
      { id: '4:73:11', arabic: "وَبَيْنَهُۥ", transliteration: "wabaynahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and between him", ur: "اور درمیان him" } },
      { id: '4:73:12', arabic: "مَوَدَّةٌۭ", transliteration: "mawaddatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any affection", ur: "any affection" } },
      { id: '4:73:13', arabic: "يَـٰلَيْتَنِى", transliteration: "yālaytanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Oh! I wish", ur: "Oh! میں wish" } },
      { id: '4:73:14', arabic: "كُنتُ", transliteration: "kuntu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I had been", ur: "میں had been" } },
      { id: '4:73:15', arabic: "مَعَهُمْ", transliteration: "maʿahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '4:73:16', arabic: "فَأَفُوزَ", transliteration: "fa-afūza", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then I would have attained", ur: "پھر میں would have attained" } },
      { id: '4:73:17', arabic: "فَوْزًا", transliteration: "fawzan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "a success", ur: "a success" } },
      { id: '4:73:18', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  74: {
    text: "۞ فَلْيُقَـٰتِلْ فِى سَبِيلِ ٱللَّهِ ٱلَّذِينَ يَشْرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا بِٱلْـَٔاخِرَةِ ۚ وَمَن يُقَـٰتِلْ فِى سَبِيلِ ٱللَّهِ فَيُقْتَلْ أَوْ يَغْلِبْ فَسَوْفَ نُؤْتِيهِ أَجْرًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "تو جو لوگ آخرت (کو خریدتے اور اس) کے بدلے دنیا کی زندگی کو بیچنا چاہتے ہیں اُن کو چاہیئے کہ خدا کی راہ میں جنگ کریں اور جو شخص خدا کی راہ میں جنگ کرے اور شہید ہوجائے یا غلبہ پائے ہم عنقریب اس کو بڑا ثواب دیں گے",
    },
    words: [
      { id: '4:74:1', arabic: "۞ فَلْيُقَـٰتِلْ", transliteration: "falyuqātil", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "So let fight", ur: "So let fight" } },
      { id: '4:74:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:74:3', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:74:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:74:5', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:74:6', arabic: "يَشْرُونَ", transliteration: "yashrūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sell", ur: "sell" } },
      { id: '4:74:7', arabic: "ٱلْحَيَوٰةَ", transliteration: "l-ḥayata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '4:74:8', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '4:74:9', arabic: "بِٱلْـَٔاخِرَةِ ۚ", transliteration: "bil-ākhirati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the Hereafter", ur: "for the آخرت" } },
      { id: '4:74:10', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:74:11', arabic: "يُقَـٰتِلْ", transliteration: "yuqātil", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fights", ur: "fights" } },
      { id: '4:74:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:74:13', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:74:14', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:74:15', arabic: "فَيُقْتَلْ", transliteration: "fayuq'tal", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then he is killed", ur: "پھر وہ is killed" } },
      { id: '4:74:16', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:74:17', arabic: "يَغْلِبْ", transliteration: "yaghlib", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "achieves victory", ur: "achieves victory" } },
      { id: '4:74:18', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then soon", ur: "پھر soon" } },
      { id: '4:74:19', arabic: "نُؤْتِيهِ", transliteration: "nu'tīhi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will grant him", ur: "ہم will grant him" } },
      { id: '4:74:20', arabic: "أَجْرًا", transliteration: "ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reward", ur: "a ثواب" } },
      { id: '4:74:21', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "a great", ur: "a great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'موصوف + صفت' }
      ],
    },
  },
  75: {
    text: "وَمَا لَكُمْ لَا تُقَـٰتِلُونَ فِى سَبِيلِ ٱللَّهِ وَٱلْمُسْتَضْعَفِينَ مِنَ ٱلرِّجَالِ وَٱلنِّسَآءِ وَٱلْوِلْدَٰنِ ٱلَّذِينَ يَقُولُونَ رَبَّنَآ أَخْرِجْنَا مِنْ هَـٰذِهِ ٱلْقَرْيَةِ ٱلظَّالِمِ أَهْلُهَا وَٱجْعَل لَّنَا مِن لَّدُنكَ وَلِيًّۭا وَٱجْعَل لَّنَا مِن لَّدُنكَ نَصِيرًا",
    translation: {
      en: "",
      ur: "اور تم کو کیا ہوا ہے کہ خدا کی راہ میں اور اُن بےبس مردوں اور عورتوں اور بچوں کی خاطر نہیں لڑتے جو دعائیں کیا کرتے ہیں کہ اے پروردگار ہم کو اس شہر سے جس کے رہنے والے ظالم ہیں نکال کر کہیں اور لے جا۔ اور اپنی طرف سے کسی کو ہمارا حامی بنا۔ اور اپنی ہی طرف سے کسی کو ہمارا مددگار مقرر فرما",
    },
    words: [
      { id: '4:75:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And what", ur: "اور کیا" } },
      { id: '4:75:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:75:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(that) not", ur: "(وہ) نہیں" } },
      { id: '4:75:4', arabic: "تُقَـٰتِلُونَ", transliteration: "tuqātilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fight", ur: "تم fight" } },
      { id: '4:75:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:75:6', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:75:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:75:8', arabic: "وَٱلْمُسْتَضْعَفِينَ", transliteration: "wal-mus'taḍʿafīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (for) those who are weak", ur: "اور (for) جو لوگ are weak" } },
      { id: '4:75:9', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '4:75:10', arabic: "ٱلرِّجَالِ", transliteration: "l-rijāli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the men", ur: "the men" } },
      { id: '4:75:11', arabic: "وَٱلنِّسَآءِ", transliteration: "wal-nisāi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the women", ur: "اور the women" } },
      { id: '4:75:12', arabic: "وَٱلْوِلْدَٰنِ", transliteration: "wal-wil'dāni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the children", ur: "اور the اولاد" } },
      { id: '4:75:13', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:75:14', arabic: "يَقُولُونَ", transliteration: "yaqūlūna", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "say", ur: "کہو" } },
      { id: '4:75:15', arabic: "رَبَّنَآ", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '4:75:16', arabic: "أَخْرِجْنَا", transliteration: "akhrij'nā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "take us out", ur: "take us out" } },
      { id: '4:75:17', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:75:18', arabic: "هَـٰذِهِ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '4:75:19', arabic: "ٱلْقَرْيَةِ", transliteration: "l-qaryati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] town", ur: "[the] town" } },
      { id: '4:75:20', arabic: "ٱلظَّالِمِ", transliteration: "l-ẓālimi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] oppressor(s)", ur: "[the] oppressor(s)" } },
      { id: '4:75:21', arabic: "أَهْلُهَا", transliteration: "ahluhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) its people", ur: "(are) its لوگ" } },
      { id: '4:75:22', arabic: "وَٱجْعَل", transliteration: "wa-ij'ʿal", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and appoint", ur: "اور appoint" } },
      { id: '4:75:23', arabic: "لَّنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '4:75:24', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:75:25', arabic: "لَّدُنكَ", transliteration: "ladunka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Yourself", ur: "Yourself" } },
      { id: '4:75:26', arabic: "وَلِيًّۭا", transliteration: "waliyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a protector", ur: "a protector" } },
      { id: '4:75:27', arabic: "وَٱجْعَل", transliteration: "wa-ij'ʿal", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and appoint", ur: "اور appoint" } },
      { id: '4:75:28', arabic: "لَّنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '4:75:29', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:75:30', arabic: "لَّدُنكَ", transliteration: "ladunka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Yourself", ur: "Yourself" } },
      { id: '4:75:31', arabic: "نَصِيرًا", transliteration: "naṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a helper", ur: "a helper" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'جار + مجرور' },
        { from: 29, to: 30, label: 'جار + مجرور' }
      ],
    },
  },
  76: {
    text: "ٱلَّذِينَ ءَامَنُوا۟ يُقَـٰتِلُونَ فِى سَبِيلِ ٱللَّهِ ۖ وَٱلَّذِينَ كَفَرُوا۟ يُقَـٰتِلُونَ فِى سَبِيلِ ٱلطَّـٰغُوتِ فَقَـٰتِلُوٓا۟ أَوْلِيَآءَ ٱلشَّيْطَـٰنِ ۖ إِنَّ كَيْدَ ٱلشَّيْطَـٰنِ كَانَ ضَعِيفًا",
    translation: {
      en: "",
      ur: "جو مومن ہیں وہ تو خدا کے لئے لڑتے ہیں اور جو کافر ہیں وہ بتوں کے لئے لڑتے ہیں سو تم شیطان کے مددگاروں سے لڑو۔ (اور ڈرو مت) کیونکہ شیطان کا داؤ بودا ہوتا ہے",
    },
    words: [
      { id: '4:76:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '4:76:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '4:76:3', arabic: "يُقَـٰتِلُونَ", transliteration: "yuqātilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they fight", ur: "وہ لوگ fight" } },
      { id: '4:76:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:76:5', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:76:6', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:76:7', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those", ur: "اور those" } },
      { id: '4:76:8', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "who disbelieve", ur: "جو disbelieve" } },
      { id: '4:76:9', arabic: "يُقَـٰتِلُونَ", transliteration: "yuqātilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they fight", ur: "وہ لوگ fight" } },
      { id: '4:76:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:76:11', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:76:12', arabic: "ٱلطَّـٰغُوتِ", transliteration: "l-ṭāghūti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the false deities", ur: "(of) the جھوٹ deities" } },
      { id: '4:76:13', arabic: "فَقَـٰتِلُوٓا۟", transliteration: "faqātilū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fight (against)", ur: "So fight (against)" } },
      { id: '4:76:14', arabic: "أَوْلِيَآءَ", transliteration: "awliyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) friends", ur: "(the) friends" } },
      { id: '4:76:15', arabic: "ٱلشَّيْطَـٰنِ ۖ", transliteration: "l-shayṭāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Shaitaan", ur: "(of) the Shaitaan" } },
      { id: '4:76:16', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:76:17', arabic: "كَيْدَ", transliteration: "kayda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) strategy", ur: "(the) strategy" } },
      { id: '4:76:18', arabic: "ٱلشَّيْطَـٰنِ", transliteration: "l-shayṭāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Shaitaan", ur: "(of) the Shaitaan" } },
      { id: '4:76:19', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:76:20', arabic: "ضَعِيفًا", transliteration: "ḍaʿīfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "weak", ur: "weak" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  77: {
    text: "أَلَمْ تَرَ إِلَى ٱلَّذِينَ قِيلَ لَهُمْ كُفُّوٓا۟ أَيْدِيَكُمْ وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ فَلَمَّا كُتِبَ عَلَيْهِمُ ٱلْقِتَالُ إِذَا فَرِيقٌۭ مِّنْهُمْ يَخْشَوْنَ ٱلنَّاسَ كَخَشْيَةِ ٱللَّهِ أَوْ أَشَدَّ خَشْيَةًۭ ۚ وَقَالُوا۟ رَبَّنَا لِمَ كَتَبْتَ عَلَيْنَا ٱلْقِتَالَ لَوْلَآ أَخَّرْتَنَآ إِلَىٰٓ أَجَلٍۢ قَرِيبٍۢ ۗ قُلْ مَتَـٰعُ ٱلدُّنْيَا قَلِيلٌۭ وَٱلْـَٔاخِرَةُ خَيْرٌۭ لِّمَنِ ٱتَّقَىٰ وَلَا تُظْلَمُونَ فَتِيلًا",
    translation: {
      en: "",
      ur: "بھلا تم نے ان لوگوں کو نہیں دیکھا جن کو (پہلے یہ) حکم دیا گیا تھا کہ اپنے ہاتھوں کو (جنگ سے) روکے رہو اور نماز پڑھتے رہو اور زکوٰة دیتے رہو پھر جب ان پر جہاد فرض کردیا گیا تو بعض لوگ ان میں سے لوگوں سے یوں ڈرنے لگے جیسے خدا سے ڈرا کرتے ہیں بلکہ اس سے بھی زیادہ اور بڑبڑانے لگے کہ اے خدا تو نے ہم پر جہاد (جلد) کیوں فرض کردیا تھوڑی مدت اور ہمیں کیوں مہلت نہ دی (اے پیغمبر ان س)ے کہہ دو کہ دنیا کا فائدہ بہت تھوڑا ہے اور بہت اچھی چیز تو پرہیزگار کے لئے (نجات) آخرت ہے اور تم پر دھاگے برابر بھی ظلم نہیں کیا جائے گا",
    },
    words: [
      { id: '4:77:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Have not", ur: "Have نہیں" } },
      { id: '4:77:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you seen", ur: "تم seen" } },
      { id: '4:77:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[towards]", ur: "[towards]" } },
      { id: '4:77:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:77:5', arabic: "قِيلَ", transliteration: "qīla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "(when) it was said", ur: "(when) it was کہا" } },
      { id: '4:77:6', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '4:77:7', arabic: "كُفُّوٓا۟", transliteration: "kuffū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Restrain", ur: "Restrain" } },
      { id: '4:77:8', arabic: "أَيْدِيَكُمْ", transliteration: "aydiyakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your hands", ur: "your hands" } },
      { id: '4:77:9', arabic: "وَأَقِيمُوا۟", transliteration: "wa-aqīmū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and establish", ur: "اور establish" } },
      { id: '4:77:10', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '4:77:11', arabic: "وَءَاتُوا۟", transliteration: "waātū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and give", ur: "اور give" } },
      { id: '4:77:12', arabic: "ٱلزَّكَوٰةَ", transliteration: "l-zakata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the zakah", ur: "the zakah" } },
      { id: '4:77:13', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '4:77:14', arabic: "كُتِبَ", transliteration: "kutiba", pos: ['V'], posLabel: 'V', root: "ك ت ب", meaning: { en: "was ordained", ur: "was ordained" } },
      { id: '4:77:15', arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on them", ur: "پر them" } },
      { id: '4:77:16', arabic: "ٱلْقِتَالُ", transliteration: "l-qitālu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the fighting", ur: "the fighting" } },
      { id: '4:77:17', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:77:18', arabic: "فَرِيقٌۭ", transliteration: "farīqun", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "a group", ur: "a group" } },
      { id: '4:77:19', arabic: "مِّنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '4:77:20', arabic: "يَخْشَوْنَ", transliteration: "yakhshawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[they] fear", ur: "[وہ لوگ] ڈرنا" } },
      { id: '4:77:21', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '4:77:22', arabic: "كَخَشْيَةِ", transliteration: "kakhashyati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as (they) fear", ur: "as (وہ لوگ) ڈرنا" } },
      { id: '4:77:23', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:77:24', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:77:25', arabic: "أَشَدَّ", transliteration: "ashadda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "more intense", ur: "more intense" } },
      { id: '4:77:26', arabic: "خَشْيَةًۭ ۚ", transliteration: "khashyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fear", ur: "ڈرنا" } },
      { id: '4:77:27', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they said", ur: "اور وہ لوگ کہا" } },
      { id: '4:77:28', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '4:77:29', arabic: "لِمَ", transliteration: "lima", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "why", ur: "why" } },
      { id: '4:77:30', arabic: "كَتَبْتَ", transliteration: "katabta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have You ordained", ur: "have تم ordained" } },
      { id: '4:77:31', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon us", ur: "پر us" } },
      { id: '4:77:32', arabic: "ٱلْقِتَالَ", transliteration: "l-qitāla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[the] fighting", ur: "[the] fighting" } },
      { id: '4:77:33', arabic: "لَوْلَآ", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Why not", ur: "Why نہیں" } },
      { id: '4:77:34', arabic: "أَخَّرْتَنَآ", transliteration: "akhartanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You postpone (it for) us", ur: "تم postpone (it for) us" } },
      { id: '4:77:35', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:77:36', arabic: "أَجَلٍۢ", transliteration: "ajalin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a term", ur: "a term" } },
      { id: '4:77:37', arabic: "قَرِيبٍۢ ۗ", transliteration: "qarībin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near", ur: "near" } },
      { id: '4:77:38', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '4:77:39', arabic: "مَتَـٰعُ", transliteration: "matāʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Enjoyment", ur: "Enjoyment" } },
      { id: '4:77:40', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '4:77:41', arabic: "قَلِيلٌۭ", transliteration: "qalīlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) little", ur: "(is) little" } },
      { id: '4:77:42', arabic: "وَٱلْـَٔاخِرَةُ", transliteration: "wal-ākhiratu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Hereafter", ur: "اور the آخرت" } },
      { id: '4:77:43', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) better", ur: "(is) better" } },
      { id: '4:77:44', arabic: "لِّمَنِ", transliteration: "limani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for whoever", ur: "for whoever" } },
      { id: '4:77:45', arabic: "ٱتَّقَىٰ", transliteration: "ittaqā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fears (Allah)", ur: "fears (اللہ)" } },
      { id: '4:77:46', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:77:47', arabic: "تُظْلَمُونَ", transliteration: "tuẓ'lamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will be wronged", ur: "تم will be wronged" } },
      { id: '4:77:48', arabic: "فَتِيلًا", transliteration: "fatīlan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(even as much as) a hair on a date-seed", ur: "(even as much as) a hair پر a date-seed" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 30, to: 31, label: 'فعل + فاعل' },
        { from: 32, to: 33, label: 'فعل + فاعل' },
        { from: 34, to: 35, label: 'فعل + فاعل' },
        { from: 39, to: 40, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  78: {
    text: "أَيْنَمَا تَكُونُوا۟ يُدْرِككُّمُ ٱلْمَوْتُ وَلَوْ كُنتُمْ فِى بُرُوجٍۢ مُّشَيَّدَةٍۢ ۗ وَإِن تُصِبْهُمْ حَسَنَةٌۭ يَقُولُوا۟ هَـٰذِهِۦ مِنْ عِندِ ٱللَّهِ ۖ وَإِن تُصِبْهُمْ سَيِّئَةٌۭ يَقُولُوا۟ هَـٰذِهِۦ مِنْ عِندِكَ ۚ قُلْ كُلٌّۭ مِّنْ عِندِ ٱللَّهِ ۖ فَمَالِ هَـٰٓؤُلَآءِ ٱلْقَوْمِ لَا يَكَادُونَ يَفْقَهُونَ حَدِيثًۭا",
    translation: {
      en: "",
      ur: "(اے جہاد سے ڈرنے والو) تم کہیں رہو موت تو تمہیں آ کر رہے گی خواہ بڑے بڑے محلوں میں رہو اور ان لوگوں کو اگر کوئی فائدہ پہنچتا ہے تو کہتے ہیں یہ خدا کی طرف سے ہے اور اگر کوئی گزند پہنچتا ہے تو (اے محمدﷺ تم سے) کہتے ہیں کہ یہ گزند آپ کی وجہ سے (ہمیں پہنچا) ہے کہہ دو کہ (رنج وراحت) سب الله ہی کی طرف سے ہے ان لوگوں کو کیا ہوگیا ہے کہ بات بھی نہیں سمجھ سکتے",
    },
    words: [
      { id: '4:78:1', arabic: "أَيْنَمَا", transliteration: "aynamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Wherever", ur: "Wherever" } },
      { id: '4:78:2', arabic: "تَكُونُوا۟", transliteration: "takūnū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "you be", ur: "تم be" } },
      { id: '4:78:3', arabic: "يُدْرِككُّمُ", transliteration: "yud'rikkumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will overtake you", ur: "will overtake تم" } },
      { id: '4:78:4', arabic: "ٱلْمَوْتُ", transliteration: "l-mawtu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] death", ur: "[the] موت" } },
      { id: '4:78:5', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even if", ur: "even if" } },
      { id: '4:78:6', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '4:78:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:78:8', arabic: "بُرُوجٍۢ", transliteration: "burūjin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "towers", ur: "towers" } },
      { id: '4:78:9', arabic: "مُّشَيَّدَةٍۢ ۗ", transliteration: "mushayyadatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lofty", ur: "lofty" } },
      { id: '4:78:10', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:78:11', arabic: "تُصِبْهُمْ", transliteration: "tuṣib'hum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "befalls them", ur: "befalls them" } },
      { id: '4:78:12', arabic: "حَسَنَةٌۭ", transliteration: "ḥasanatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any good", ur: "any اچھا" } },
      { id: '4:78:13', arabic: "يَقُولُوا۟", transliteration: "yaqūlū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '4:78:14', arabic: "هَـٰذِهِۦ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '4:78:15', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is)", ur: "(is)" } },
      { id: '4:78:16', arabic: "عِندِ", transliteration: "ʿindi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:78:17', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:78:18', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:78:19', arabic: "تُصِبْهُمْ", transliteration: "tuṣib'hum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "befalls them", ur: "befalls them" } },
      { id: '4:78:20', arabic: "سَيِّئَةٌۭ", transliteration: "sayyi-atun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any evil", ur: "any برا" } },
      { id: '4:78:21', arabic: "يَقُولُوا۟", transliteration: "yaqūlū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '4:78:22', arabic: "هَـٰذِهِۦ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '4:78:23', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is)", ur: "(is)" } },
      { id: '4:78:24', arabic: "عِندِكَ ۚ", transliteration: "ʿindika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from) you", ur: "(سے) تم" } },
      { id: '4:78:25', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '4:78:26', arabic: "كُلٌّۭ", transliteration: "kullun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "All", ur: "سب" } },
      { id: '4:78:27', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is)", ur: "(is)" } },
      { id: '4:78:28', arabic: "عِندِ", transliteration: "ʿindi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:78:29', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:78:30', arabic: "فَمَالِ", transliteration: "famāli", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So what (is wrong)", ur: "So کیا (is wrong)" } },
      { id: '4:78:31', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) these", ur: "(ساتھ) these" } },
      { id: '4:78:32', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "[the] people", ur: "[the] لوگ" } },
      { id: '4:78:33', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:78:34', arabic: "يَكَادُونَ", transliteration: "yakādūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do they seem", ur: "do وہ لوگ seem" } },
      { id: '4:78:35', arabic: "يَفْقَهُونَ", transliteration: "yafqahūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) understand", ur: "(کو) understand" } },
      { id: '4:78:36', arabic: "حَدِيثًۭا", transliteration: "ḥadīthan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any statement", ur: "any statement" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'جار + مجرور' },
        { from: 33, to: 34, label: 'نفی + فعل' },
        { from: 35, to: 36, label: 'فعل + فاعل' }
      ],
    },
  },
  79: {
    text: "مَّآ أَصَابَكَ مِنْ حَسَنَةٍۢ فَمِنَ ٱللَّهِ ۖ وَمَآ أَصَابَكَ مِن سَيِّئَةٍۢ فَمِن نَّفْسِكَ ۚ وَأَرْسَلْنَـٰكَ لِلنَّاسِ رَسُولًۭا ۚ وَكَفَىٰ بِٱللَّهِ شَهِيدًۭا",
    translation: {
      en: "",
      ur: "اے (آدم زاد) تجھ کو جو فائدہ پہنچے وہ خدا کی طرف سے ہے اور جو نقصان پہنچے وہ تیری ہی (شامت اعمال) کی وجہ سے ہے اور (اے محمدﷺ) ہم نے تم کو لوگوں (کی ہدایت) کے لئے پیغمبر بنا کر بھیجا ہے اور (اس بات کا) خدا ہی گواہ کافی ہے",
    },
    words: [
      { id: '4:79:1', arabic: "مَّآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "What(ever)", ur: "کیا(ever)" } },
      { id: '4:79:2', arabic: "أَصَابَكَ", transliteration: "aṣābaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "befalls you", ur: "befalls تم" } },
      { id: '4:79:3', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:79:4', arabic: "حَسَنَةٍۢ", transliteration: "ḥasanatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) good", ur: "(the) اچھا" } },
      { id: '4:79:5', arabic: "فَمِنَ", transliteration: "famina", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(is) from", ur: "(is) سے" } },
      { id: '4:79:6', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:79:7', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '4:79:8', arabic: "أَصَابَكَ", transliteration: "aṣābaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "befalls you", ur: "befalls تم" } },
      { id: '4:79:9', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:79:10', arabic: "سَيِّئَةٍۢ", transliteration: "sayyi-atin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) evil", ur: "(the) برا" } },
      { id: '4:79:11', arabic: "فَمِن", transliteration: "famin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(is) from", ur: "(is) سے" } },
      { id: '4:79:12', arabic: "نَّفْسِكَ ۚ", transliteration: "nafsika", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "yourself", ur: "yourself" } },
      { id: '4:79:13', arabic: "وَأَرْسَلْنَـٰكَ", transliteration: "wa-arsalnāka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We have sent you", ur: "اور ہم have sent تم" } },
      { id: '4:79:14', arabic: "لِلنَّاسِ", transliteration: "lilnnāsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the people", ur: "for the لوگ" } },
      { id: '4:79:15', arabic: "رَسُولًۭا ۚ", transliteration: "rasūlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a Messenger", ur: "(as) a رسول" } },
      { id: '4:79:16', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and is sufficient", ur: "اور is sufficient" } },
      { id: '4:79:17', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:79:18', arabic: "شَهِيدًۭا", transliteration: "shahīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a Witness", ur: "(as) a Witness" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'جار + مجرور' }
      ],
    },
  },
  80: {
    text: "مَّن يُطِعِ ٱلرَّسُولَ فَقَدْ أَطَاعَ ٱللَّهَ ۖ وَمَن تَوَلَّىٰ فَمَآ أَرْسَلْنَـٰكَ عَلَيْهِمْ حَفِيظًۭا",
    translation: {
      en: "",
      ur: "جو شخص رسول کی فرمانبرداری کرے گا تو بےشک اس نے خدا کی فرمانبرداری کی اور جو نافرمانی کرے گا تو اے پیغمبر تمہیں ہم نے ان کا نگہبان بنا کر نہیں بھیجا",
    },
    words: [
      { id: '4:80:1', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(He) who", ur: "(وہ) جو" } },
      { id: '4:80:2', arabic: "يُطِعِ", transliteration: "yuṭiʿi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "obeys", ur: "obeys" } },
      { id: '4:80:3', arabic: "ٱلرَّسُولَ", transliteration: "l-rasūla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '4:80:4', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then surely", ur: "پھر یقیناً" } },
      { id: '4:80:5', arabic: "أَطَاعَ", transliteration: "aṭāʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he obeyed", ur: "وہ obeyed" } },
      { id: '4:80:6', arabic: "ٱللَّهَ ۖ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:80:7', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '4:80:8', arabic: "تَوَلَّىٰ", transliteration: "tawallā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turns away ", ur: "turns away " } },
      { id: '4:80:9', arabic: "فَمَآ", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '4:80:10', arabic: "أَرْسَلْنَـٰكَ", transliteration: "arsalnāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (have) sent you", ur: "ہم (have) sent تم" } },
      { id: '4:80:11', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '4:80:12', arabic: "حَفِيظًۭا", transliteration: "ḥafīẓan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a guardian", ur: "(as) a guardian" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  81: {
    text: "وَيَقُولُونَ طَاعَةٌۭ فَإِذَا بَرَزُوا۟ مِنْ عِندِكَ بَيَّتَ طَآئِفَةٌۭ مِّنْهُمْ غَيْرَ ٱلَّذِى تَقُولُ ۖ وَٱللَّهُ يَكْتُبُ مَا يُبَيِّتُونَ ۖ فَأَعْرِضْ عَنْهُمْ وَتَوَكَّلْ عَلَى ٱللَّهِ ۚ وَكَفَىٰ بِٱللَّهِ وَكِيلًا",
    translation: {
      en: "",
      ur: "اور یہ لوگ منہ سے تو کہتے ہیں کہ (آپ کی) فرمانبرداری (دل سے منظور ہے) لیکن جب تمہارے پاس سے چلے جاتے ہیں تو ان میں سے بعض لوگ رات کو تمہاری باتوں کے خلاف مشورے کرتے ہیں اور جو مشورے یہ کرتے ہیں خدا ان کو لکھ لیتا ہے تو ان کا کچھ خیال نہ کرو اور خدا پر بھروسہ رکھو اور خدا ہی کافی کارساز ہے",
    },
    words: [
      { id: '4:81:1', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '4:81:2', arabic: "طَاعَةٌۭ", transliteration: "ṭāʿatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(We pledge) obedience", ur: "(ہم pledge) obedience" } },
      { id: '4:81:3', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '4:81:4', arabic: "بَرَزُوا۟", transliteration: "barazū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they leave", ur: "وہ لوگ leave" } },
      { id: '4:81:5', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:81:6', arabic: "عِندِكَ", transliteration: "ʿindika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '4:81:7', arabic: "بَيَّتَ", transliteration: "bayyata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "plan by night", ur: "plan by رات" } },
      { id: '4:81:8', arabic: "طَآئِفَةٌۭ", transliteration: "ṭāifatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a group", ur: "a group" } },
      { id: '4:81:9', arabic: "مِّنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '4:81:10', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '4:81:11', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that which", ur: "وہ جو" } },
      { id: '4:81:12', arabic: "تَقُولُ ۖ", transliteration: "taqūlu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you say", ur: "تم کہو" } },
      { id: '4:81:13', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But Allah", ur: "لیکن اللہ" } },
      { id: '4:81:14', arabic: "يَكْتُبُ", transliteration: "yaktubu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "records", ur: "records" } },
      { id: '4:81:15', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:81:16', arabic: "يُبَيِّتُونَ ۖ", transliteration: "yubayyitūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they plan by night", ur: "وہ لوگ plan by رات" } },
      { id: '4:81:17', arabic: "فَأَعْرِضْ", transliteration: "fa-aʿriḍ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So turn (away)", ur: "So turn (away)" } },
      { id: '4:81:18', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '4:81:19', arabic: "وَتَوَكَّلْ", transliteration: "watawakkal", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and put (your) trust", ur: "اور put (your) trust" } },
      { id: '4:81:20', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:81:21', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:81:22', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And sufficient", ur: "اور sufficient" } },
      { id: '4:81:23', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "is Allah", ur: "is اللہ" } },
      { id: '4:81:24', arabic: "وَكِيلًا", transliteration: "wakīlan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(as) a Trustee", ur: "(as) a Trustee" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'موصول + صلة' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  82: {
    text: "أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ ۚ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ ٱللَّهِ لَوَجَدُوا۟ فِيهِ ٱخْتِلَـٰفًۭا كَثِيرًۭا",
    translation: {
      en: "",
      ur: "بھلا یہ قرآن میں غور کیوں نہیں کرتے؟ اگر یہ خدا کے سوا کسی اور کا (کلام) ہوتا تو اس میں (بہت سا) اختلاف پاتے",
    },
    words: [
      { id: '4:82:1', arabic: "أَفَلَا", transliteration: "afalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then (do) not", ur: "پھر (do) نہیں" } },
      { id: '4:82:2', arabic: "يَتَدَبَّرُونَ", transliteration: "yatadabbarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they ponder", ur: "وہ لوگ ponder" } },
      { id: '4:82:3', arabic: "ٱلْقُرْءَانَ ۚ", transliteration: "l-qur'āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(on) the Quran", ur: "(پر) the Quran" } },
      { id: '4:82:4', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:82:5', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "it had (been)", ur: "it had (been)" } },
      { id: '4:82:6', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(of)", ur: "(of)" } },
      { id: '4:82:7', arabic: "عِندِ", transliteration: "ʿindi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:82:8', arabic: "غَيْرِ", transliteration: "ghayri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '4:82:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:82:10', arabic: "لَوَجَدُوا۟", transliteration: "lawajadū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely they (would have) found", ur: "یقیناً وہ لوگ (would have) found" } },
      { id: '4:82:11', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:82:12', arabic: "ٱخْتِلَـٰفًۭا", transliteration: "ikh'tilāfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "contradiction", ur: "contradiction" } },
      { id: '4:82:13', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "much", ur: "much" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  83: {
    text: "وَإِذَا جَآءَهُمْ أَمْرٌۭ مِّنَ ٱلْأَمْنِ أَوِ ٱلْخَوْفِ أَذَاعُوا۟ بِهِۦ ۖ وَلَوْ رَدُّوهُ إِلَى ٱلرَّسُولِ وَإِلَىٰٓ أُو۟لِى ٱلْأَمْرِ مِنْهُمْ لَعَلِمَهُ ٱلَّذِينَ يَسْتَنۢبِطُونَهُۥ مِنْهُمْ ۗ وَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ لَٱتَّبَعْتُمُ ٱلشَّيْطَـٰنَ إِلَّا قَلِيلًۭا",
    translation: {
      en: "",
      ur: "اور جب ان کے پاس امن یا خوف کی کوئی خبر پہنچتی ہے تو اس کو مشہور کردیتے ہیں اور اگر اس کو پیغمبر اور اپنے سرداروں کے پاس پہنچاتے تو تحقیق کرنے والے اس کی تحقیق کر لیتے اور اگر تم پر خدا کا فضل اور اس کی مہربانی نہ ہوتی تو چند اشخاص کے سوا سب شیطان کے پیرو ہوجاتے",
    },
    words: [
      { id: '4:83:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '4:83:2', arabic: "جَآءَهُمْ", transliteration: "jāahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '4:83:3', arabic: "أَمْرٌۭ", transliteration: "amrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a matter", ur: "a matter" } },
      { id: '4:83:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:83:5', arabic: "ٱلْأَمْنِ", transliteration: "l-amni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the security", ur: "the security" } },
      { id: '4:83:6', arabic: "أَوِ", transliteration: "awi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:83:7', arabic: "ٱلْخَوْفِ", transliteration: "l-khawfi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] fear", ur: "[the] ڈرنا" } },
      { id: '4:83:8', arabic: "أَذَاعُوا۟", transliteration: "adhāʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they spread", ur: "وہ لوگ spread" } },
      { id: '4:83:9', arabic: "بِهِۦ ۖ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with] it", ur: "[ساتھ] it" } },
      { id: '4:83:10', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:83:11', arabic: "رَدُّوهُ", transliteration: "raddūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (had) referred it", ur: "وہ لوگ (had) referred it" } },
      { id: '4:83:12', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:83:13', arabic: "ٱلرَّسُولِ", transliteration: "l-rasūli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '4:83:14', arabic: "وَإِلَىٰٓ", transliteration: "wa-ilā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to", ur: "اور کو" } },
      { id: '4:83:15', arabic: "أُو۟لِى", transliteration: "ulī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '4:83:16', arabic: "ٱلْأَمْرِ", transliteration: "l-amri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(having) authority", ur: "(having) authority" } },
      { id: '4:83:17', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '4:83:18', arabic: "لَعَلِمَهُ", transliteration: "laʿalimahu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "surely would have known it", ur: "یقیناً would have known it" } },
      { id: '4:83:19', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:83:20', arabic: "يَسْتَنۢبِطُونَهُۥ", transliteration: "yastanbiṭūnahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "draw correct conclusion (from) it", ur: "draw correct conclusion (سے) it" } },
      { id: '4:83:21', arabic: "مِنْهُمْ ۗ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '4:83:22', arabic: "وَلَوْلَا", transliteration: "walawlā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if not", ur: "اور if نہیں" } },
      { id: '4:83:23', arabic: "فَضْلُ", transliteration: "faḍlu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(had been the) bounty", ur: "(had been the) bounty" } },
      { id: '4:83:24', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:83:25', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on you", ur: "پر تم" } },
      { id: '4:83:26', arabic: "وَرَحْمَتُهُۥ", transliteration: "waraḥmatuhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Mercy", ur: "اور His رحمت" } },
      { id: '4:83:27', arabic: "لَٱتَّبَعْتُمُ", transliteration: "la-ittabaʿtumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely you (would have) followed", ur: "یقیناً تم (would have) followed" } },
      { id: '4:83:28', arabic: "ٱلشَّيْطَـٰنَ", transliteration: "l-shayṭāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '4:83:29', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:83:30', arabic: "قَلِيلًۭا", transliteration: "qalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a few", ur: "a few" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'فعل + فاعل' }
      ],
    },
  },
  84: {
    text: "فَقَـٰتِلْ فِى سَبِيلِ ٱللَّهِ لَا تُكَلَّفُ إِلَّا نَفْسَكَ ۚ وَحَرِّضِ ٱلْمُؤْمِنِينَ ۖ عَسَى ٱللَّهُ أَن يَكُفَّ بَأْسَ ٱلَّذِينَ كَفَرُوا۟ ۚ وَٱللَّهُ أَشَدُّ بَأْسًۭا وَأَشَدُّ تَنكِيلًۭا",
    translation: {
      en: "",
      ur: "تو (اے محمدﷺ) تم خدا کی راہ میں لڑو تم اپنے سوا کسی کے ذمہ دار نہیں اور مومنوں کو بھی ترغیب دو قریب ہے کہ خدا کافروں کی لڑائی کو بند کردے اور خدا لڑائی کے اعتبار سے بہت سخت ہے اور سزا کے لحاظ سے بھی بہت سخت ہے",
    },
    words: [
      { id: '4:84:1', arabic: "فَقَـٰتِلْ", transliteration: "faqātil", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fight", ur: "So fight" } },
      { id: '4:84:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:84:3', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:84:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:84:5', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:84:6', arabic: "تُكَلَّفُ", transliteration: "tukallafu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are you responsible", ur: "are تم responsible" } },
      { id: '4:84:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:84:8', arabic: "نَفْسَكَ ۚ", transliteration: "nafsaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(for) yourself", ur: "(for) yourself" } },
      { id: '4:84:9', arabic: "وَحَرِّضِ", transliteration: "waḥarriḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And encourage", ur: "اور encourage" } },
      { id: '4:84:10', arabic: "ٱلْمُؤْمِنِينَ ۖ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:84:11', arabic: "عَسَى", transliteration: "ʿasā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "perhaps", ur: "perhaps" } },
      { id: '4:84:12', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:84:13', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "will", ur: "will" } },
      { id: '4:84:14', arabic: "يَكُفَّ", transliteration: "yakuffa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "restrain", ur: "restrain" } },
      { id: '4:84:15', arabic: "بَأْسَ", transliteration: "basa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) might", ur: "(the) might" } },
      { id: '4:84:16', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '4:84:17', arabic: "كَفَرُوا۟ ۚ", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '4:84:18', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '4:84:19', arabic: "أَشَدُّ", transliteration: "ashaddu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Stronger", ur: "(is) Stronger" } },
      { id: '4:84:20', arabic: "بَأْسًۭا", transliteration: "basan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) Might", ur: "(میں) Might" } },
      { id: '4:84:21', arabic: "وَأَشَدُّ", transliteration: "wa-ashaddu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Stronger", ur: "اور Stronger" } },
      { id: '4:84:22', arabic: "تَنكِيلًۭا", transliteration: "tankīlan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) punishment", ur: "(میں) عذاب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  85: {
    text: "مَّن يَشْفَعْ شَفَـٰعَةً حَسَنَةًۭ يَكُن لَّهُۥ نَصِيبٌۭ مِّنْهَا ۖ وَمَن يَشْفَعْ شَفَـٰعَةًۭ سَيِّئَةًۭ يَكُن لَّهُۥ كِفْلٌۭ مِّنْهَا ۗ وَكَانَ ٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ مُّقِيتًۭا",
    translation: {
      en: "",
      ur: "جو شخص نیک بات کی سفارش کرے تو اس کو اس (کے ثواب) میں سے حصہ ملے گا اور جو بری بات کی سفارش کرے اس کو اس (کے عذاب) میں سے حصہ ملے گا اور خدا ہر چیز پر قدرت رکھتا ہے",
    },
    words: [
      { id: '4:85:1', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '4:85:2', arabic: "يَشْفَعْ", transliteration: "yashfaʿ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "intercedes ", ur: "intercedes " } },
      { id: '4:85:3', arabic: "شَفَـٰعَةً", transliteration: "shafāʿatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an intercession", ur: "an intercession" } },
      { id: '4:85:4', arabic: "حَسَنَةًۭ", transliteration: "ḥasanatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '4:85:5', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will have", ur: "will have" } },
      { id: '4:85:6', arabic: "لَّهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '4:85:7', arabic: "نَصِيبٌۭ", transliteration: "naṣībun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a share", ur: "a share" } },
      { id: '4:85:8', arabic: "مِّنْهَا ۖ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '4:85:9', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '4:85:10', arabic: "يَشْفَعْ", transliteration: "yashfaʿ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "intercedes ", ur: "intercedes " } },
      { id: '4:85:11', arabic: "شَفَـٰعَةًۭ", transliteration: "shafāʿatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an intercession", ur: "an intercession" } },
      { id: '4:85:12', arabic: "سَيِّئَةًۭ", transliteration: "sayyi-atan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evil", ur: "برا" } },
      { id: '4:85:13', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will have", ur: "will have" } },
      { id: '4:85:14', arabic: "لَّهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '4:85:15', arabic: "كِفْلٌۭ", transliteration: "kif'lun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a portion", ur: "a portion" } },
      { id: '4:85:16', arabic: "مِّنْهَا ۗ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '4:85:17', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:85:18', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:85:19', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '4:85:20', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '4:85:21', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '4:85:22', arabic: "مُّقِيتًۭا", transliteration: "muqītan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Keeper", ur: "a Keeper" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  86: {
    text: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍۢ فَحَيُّوا۟ بِأَحْسَنَ مِنْهَآ أَوْ رُدُّوهَآ ۗ إِنَّ ٱللَّهَ كَانَ عَلَىٰ كُلِّ شَىْءٍ حَسِيبًا",
    translation: {
      en: "",
      ur: "اور جب تم کو کوئی دعا دے تو (جواب میں) تم اس سے بہتر (کلمے) سے (اسے) دعا دو یا انہیں لفظوں سے دعا دو بےشک خدا ہر چیز کا حساب لینے والا ہے",
    },
    words: [
      { id: '4:86:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '4:86:2', arabic: "حُيِّيتُم", transliteration: "ḥuyyītum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are greeted", ur: "تم are greeted" } },
      { id: '4:86:3', arabic: "بِتَحِيَّةٍۢ", transliteration: "bitaḥiyyatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a greeting", ur: "ساتھ a greeting" } },
      { id: '4:86:4', arabic: "فَحَيُّوا۟", transliteration: "faḥayyū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then greet", ur: "پھر greet" } },
      { id: '4:86:5', arabic: "بِأَحْسَنَ", transliteration: "bi-aḥsana", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with better", ur: "ساتھ better" } },
      { id: '4:86:6', arabic: "مِنْهَآ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than it", ur: "than it" } },
      { id: '4:86:7', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:86:8', arabic: "رُدُّوهَآ ۗ", transliteration: "ruddūhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "return it", ur: "return it" } },
      { id: '4:86:9', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:86:10', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:86:11', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:86:12', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:86:13', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '4:86:14', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '4:86:15', arabic: "حَسِيبًا", transliteration: "ḥasīban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an Accountant", ur: "an Accountant" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  87: {
    text: "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ۚ لَيَجْمَعَنَّكُمْ إِلَىٰ يَوْمِ ٱلْقِيَـٰمَةِ لَا رَيْبَ فِيهِ ۗ وَمَنْ أَصْدَقُ مِنَ ٱللَّهِ حَدِيثًۭا",
    translation: {
      en: "",
      ur: "خدا (وہ معبود برحق ہے کہ) اس کے سوا کوئی عبادت کے لائق نہیں وہ قیامت کے دن تم سب کو ضرور جمع کرے گا اور خدا سے بڑھ کر بات کا سچا کون ہے؟",
    },
    words: [
      { id: '4:87:1', arabic: "ٱللَّهُ", transliteration: "al-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah ", ur: "اللہ " } },
      { id: '4:87:2', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(there is) no", ur: "(there is) نہیں" } },
      { id: '4:87:3', arabic: "إِلَـٰهَ", transliteration: "ilāha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '4:87:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:87:5', arabic: "هُوَ ۚ", transliteration: "huwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Him", ur: "Him" } },
      { id: '4:87:6', arabic: "لَيَجْمَعَنَّكُمْ", transliteration: "layajmaʿannakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely He will gather you", ur: "یقیناً وہ will gather تم" } },
      { id: '4:87:7', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:87:8', arabic: "يَوْمِ", transliteration: "yawmi", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(the) Day", ur: "(the) دن" } },
      { id: '4:87:9', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Resurrection ", ur: "(of) Resurrection " } },
      { id: '4:87:10', arabic: "لَا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "no", ur: "نہیں" } },
      { id: '4:87:11', arabic: "رَيْبَ", transliteration: "rayba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "doubt", ur: "doubt" } },
      { id: '4:87:12', arabic: "فِيهِ ۗ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about it", ur: "about it" } },
      { id: '4:87:13', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And who", ur: "اور جو" } },
      { id: '4:87:14', arabic: "أَصْدَقُ", transliteration: "aṣdaqu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) more truthful", ur: "(is) more truthful" } },
      { id: '4:87:15', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than", ur: "than" } },
      { id: '4:87:16', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:87:17', arabic: "حَدِيثًۭا", transliteration: "ḥadīthan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) statement", ur: "(میں) statement" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  88: {
    text: "۞ فَمَا لَكُمْ فِى ٱلْمُنَـٰفِقِينَ فِئَتَيْنِ وَٱللَّهُ أَرْكَسَهُم بِمَا كَسَبُوٓا۟ ۚ أَتُرِيدُونَ أَن تَهْدُوا۟ مَنْ أَضَلَّ ٱللَّهُ ۖ وَمَن يُضْلِلِ ٱللَّهُ فَلَن تَجِدَ لَهُۥ سَبِيلًۭا",
    translation: {
      en: "",
      ur: "تو کیا سبب ہے کہ تم منافقوں کے بارے میں دو گروہ ہو رہے ہو حالانکہ خدا نے ان کو ان کے کرتوتوں کے سبب اوندھا کردیا ہے کیا تم چاہتے ہو کہ جس شخص کو خدا نے گمراہ کردیا ہے اس کو رستے پر لے آؤ اور جس شخص کو خدا گمراہ کردے تو اس کے لئے کبھی بھی رستہ نہیں پاؤ گے",
    },
    words: [
      { id: '4:88:1', arabic: "۞ فَمَا", transliteration: "famā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "So what", ur: "So کیا" } },
      { id: '4:88:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the matter) with you", ur: "(is the matter) ساتھ تم" } },
      { id: '4:88:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '4:88:4', arabic: "ٱلْمُنَـٰفِقِينَ", transliteration: "l-munāfiqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hypocrites (that)", ur: "the hypocrites (وہ)" } },
      { id: '4:88:5', arabic: "فِئَتَيْنِ", transliteration: "fi-atayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(you have become) two parties", ur: "(تم have become) two parties" } },
      { id: '4:88:6', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "While Allah", ur: "While اللہ" } },
      { id: '4:88:7', arabic: "أَرْكَسَهُم", transliteration: "arkasahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "cast them back", ur: "cast them back" } },
      { id: '4:88:8', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '4:88:9', arabic: "كَسَبُوٓا۟ ۚ", transliteration: "kasabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they earned", ur: "وہ لوگ earned" } },
      { id: '4:88:10', arabic: "أَتُرِيدُونَ", transliteration: "aturīdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you wish", ur: "Do تم wish" } },
      { id: '4:88:11', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:88:12', arabic: "تَهْدُوا۟", transliteration: "tahdū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you guide", ur: "تم guide" } },
      { id: '4:88:13', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '4:88:14', arabic: "أَضَلَّ", transliteration: "aḍalla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is let astray", ur: "is let astray" } },
      { id: '4:88:15', arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:88:16', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:88:17', arabic: "يُضْلِلِ", transliteration: "yuḍ'lili", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is let astray", ur: "is let astray" } },
      { id: '4:88:18', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:88:19', arabic: "فَلَن", transliteration: "falan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then never", ur: "پھر never" } },
      { id: '4:88:20', arabic: "تَجِدَ", transliteration: "tajida", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will you find", ur: "will تم find" } },
      { id: '4:88:21', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '4:88:22', arabic: "سَبِيلًۭا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a way", ur: "a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  89: {
    text: "وَدُّوا۟ لَوْ تَكْفُرُونَ كَمَا كَفَرُوا۟ فَتَكُونُونَ سَوَآءًۭ ۖ فَلَا تَتَّخِذُوا۟ مِنْهُمْ أَوْلِيَآءَ حَتَّىٰ يُهَاجِرُوا۟ فِى سَبِيلِ ٱللَّهِ ۚ فَإِن تَوَلَّوْا۟ فَخُذُوهُمْ وَٱقْتُلُوهُمْ حَيْثُ وَجَدتُّمُوهُمْ ۖ وَلَا تَتَّخِذُوا۟ مِنْهُمْ وَلِيًّۭا وَلَا نَصِيرًا",
    translation: {
      en: "",
      ur: "وہ تو یہی چاہتے ہیں کہ جس طرح وہ خود کافر ہیں (اسی طرح) تم بھی کافر ہو کر (سب) برابر ہوجاؤ تو جب تک وہ خدا کی راہ میں وطن نہ چھوڑ جائیں ان میں سے کسی کو دوست نہ بنانا اگر (ترک وطن کو) قبول نہ کریں تو ان کو پکڑ لو اور جہاں پاؤ قتل کردو اور ان میں سے کسی کو اپنا رفیق اور مددگار نہ بناؤ",
    },
    words: [
      { id: '4:89:1', arabic: "وَدُّوا۟", transliteration: "waddū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "They wish", ur: "وہ لوگ wish" } },
      { id: '4:89:2', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:89:3', arabic: "تَكْفُرُونَ", transliteration: "takfurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you disbelieve", ur: "تم disbelieve" } },
      { id: '4:89:4', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as", ur: "as" } },
      { id: '4:89:5', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "they disbelieved", ur: "وہ لوگ disbelieved" } },
      { id: '4:89:6', arabic: "فَتَكُونُونَ", transliteration: "fatakūnūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and you would be", ur: "اور تم would be" } },
      { id: '4:89:7', arabic: "سَوَآءًۭ ۖ", transliteration: "sawāan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "alike", ur: "alike" } },
      { id: '4:89:8', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So (do) not", ur: "So (do) نہیں" } },
      { id: '4:89:9', arabic: "تَتَّخِذُوا۟", transliteration: "tattakhidhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take", ur: "take" } },
      { id: '4:89:10', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '4:89:11', arabic: "أَوْلِيَآءَ", transliteration: "awliyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "allies", ur: "allies" } },
      { id: '4:89:12', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '4:89:13', arabic: "يُهَاجِرُوا۟", transliteration: "yuhājirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they emigrate", ur: "وہ لوگ emigrate" } },
      { id: '4:89:14', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:89:15', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:89:16', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:89:17', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:89:18', arabic: "تَوَلَّوْا۟", transliteration: "tawallaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they turn back", ur: "وہ لوگ turn back" } },
      { id: '4:89:19', arabic: "فَخُذُوهُمْ", transliteration: "fakhudhūhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "seize them", ur: "seize them" } },
      { id: '4:89:20', arabic: "وَٱقْتُلُوهُمْ", transliteration: "wa-uq'tulūhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and kill them", ur: "اور kill them" } },
      { id: '4:89:21', arabic: "حَيْثُ", transliteration: "ḥaythu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wherever", ur: "wherever" } },
      { id: '4:89:22', arabic: "وَجَدتُّمُوهُمْ ۖ", transliteration: "wajadttumūhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "you find them", ur: "تم find them" } },
      { id: '4:89:23', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:89:24', arabic: "تَتَّخِذُوا۟", transliteration: "tattakhidhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take", ur: "take" } },
      { id: '4:89:25', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '4:89:26', arabic: "وَلِيًّۭا", transliteration: "waliyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "any ally", ur: "any ally" } },
      { id: '4:89:27', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:89:28', arabic: "نَصِيرًا", transliteration: "naṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "any helper", ur: "any helper" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'فعل + فاعل' }
      ],
    },
  },
  90: {
    text: "إِلَّا ٱلَّذِينَ يَصِلُونَ إِلَىٰ قَوْمٍۭ بَيْنَكُمْ وَبَيْنَهُم مِّيثَـٰقٌ أَوْ جَآءُوكُمْ حَصِرَتْ صُدُورُهُمْ أَن يُقَـٰتِلُوكُمْ أَوْ يُقَـٰتِلُوا۟ قَوْمَهُمْ ۚ وَلَوْ شَآءَ ٱللَّهُ لَسَلَّطَهُمْ عَلَيْكُمْ فَلَقَـٰتَلُوكُمْ ۚ فَإِنِ ٱعْتَزَلُوكُمْ فَلَمْ يُقَـٰتِلُوكُمْ وَأَلْقَوْا۟ إِلَيْكُمُ ٱلسَّلَمَ فَمَا جَعَلَ ٱللَّهُ لَكُمْ عَلَيْهِمْ سَبِيلًۭا",
    translation: {
      en: "",
      ur: "مگر جو لوگ ایسے لوگوں سے جا ملے ہوں جن میں اور تم میں (صلح کا) عہد ہو یا اس حال میں کہ ان کے دل تمہارے ساتھ یا اپنی قوم کے ساتھ لڑنے سے رک گئے ہوں تمہارے پاس آجائیں (تو احتراز ضروری نہیں) اور اگر خدا چاہتا تو ان کو تم پر غالب کردیتا تو وہ تم سے ضرور لڑتے پھر اگر وہ تم سے (جنگ کرنے سے) کنارہ کشی کریں اور لڑیں نہیں اور تمہاری طرف صلح (کا پیغام) بھیجیں تو خدا نے تمہارے لئے ان پر (زبردستی کرنے کی) کوئی سبیل مقرر نہیں کی",
    },
    words: [
      { id: '4:90:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '4:90:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:90:3', arabic: "يَصِلُونَ", transliteration: "yaṣilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "join", ur: "join" } },
      { id: '4:90:4', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[to]", ur: "[کو]" } },
      { id: '4:90:5', arabic: "قَوْمٍۭ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a group", ur: "a group" } },
      { id: '4:90:6', arabic: "بَيْنَكُمْ", transliteration: "baynakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between you", ur: "درمیان تم" } },
      { id: '4:90:7', arabic: "وَبَيْنَهُم", transliteration: "wabaynahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and between them", ur: "اور درمیان them" } },
      { id: '4:90:8', arabic: "مِّيثَـٰقٌ", transliteration: "mīthāqun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a treaty", ur: "(is) a treaty" } },
      { id: '4:90:9', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:90:10', arabic: "جَآءُوكُمْ", transliteration: "jāūkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who come to you", ur: "جو لوگ come کو تم" } },
      { id: '4:90:11', arabic: "حَصِرَتْ", transliteration: "ḥaṣirat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "restraining", ur: "restraining" } },
      { id: '4:90:12', arabic: "صُدُورُهُمْ", transliteration: "ṣudūruhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '4:90:13', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:90:14', arabic: "يُقَـٰتِلُوكُمْ", transliteration: "yuqātilūkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they fight you", ur: "وہ لوگ fight تم" } },
      { id: '4:90:15', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:90:16', arabic: "يُقَـٰتِلُوا۟", transliteration: "yuqātilū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they fight", ur: "وہ لوگ fight" } },
      { id: '4:90:17', arabic: "قَوْمَهُمْ ۚ", transliteration: "qawmahum", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "their people", ur: "their لوگ" } },
      { id: '4:90:18', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:90:19', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(had) willed", ur: "(had) willed" } },
      { id: '4:90:20', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:90:21', arabic: "لَسَلَّطَهُمْ", transliteration: "lasallaṭahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely He (would have) given them power", ur: "یقیناً وہ (would have) given them power" } },
      { id: '4:90:22', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over you", ur: "اوپر تم" } },
      { id: '4:90:23', arabic: "فَلَقَـٰتَلُوكُمْ ۚ", transliteration: "falaqātalūkum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and surely they (would have) fought you", ur: "اور یقیناً وہ لوگ (would have) fought تم" } },
      { id: '4:90:24', arabic: "فَإِنِ", transliteration: "fa-ini", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So if", ur: "So if" } },
      { id: '4:90:25', arabic: "ٱعْتَزَلُوكُمْ", transliteration: "iʿ'tazalūkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they withdraw from you", ur: "وہ لوگ withdraw سے تم" } },
      { id: '4:90:26', arabic: "فَلَمْ", transliteration: "falam", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '4:90:27', arabic: "يُقَـٰتِلُوكُمْ", transliteration: "yuqātilūkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fight against you", ur: "fight against تم" } },
      { id: '4:90:28', arabic: "وَأَلْقَوْا۟", transliteration: "wa-alqaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and offer", ur: "اور offer" } },
      { id: '4:90:29', arabic: "إِلَيْكُمُ", transliteration: "ilaykumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:90:30', arabic: "ٱلسَّلَمَ", transliteration: "l-salama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] peace", ur: "[the] peace" } },
      { id: '4:90:31', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '4:90:32', arabic: "جَعَلَ", transliteration: "jaʿala", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "(has) made", ur: "(has) made" } },
      { id: '4:90:33', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:90:34', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:90:35', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against them", ur: "against them" } },
      { id: '4:90:36', arabic: "سَبِيلًۭا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a way", ur: "a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  91: {
    text: "سَتَجِدُونَ ءَاخَرِينَ يُرِيدُونَ أَن يَأْمَنُوكُمْ وَيَأْمَنُوا۟ قَوْمَهُمْ كُلَّ مَا رُدُّوٓا۟ إِلَى ٱلْفِتْنَةِ أُرْكِسُوا۟ فِيهَا ۚ فَإِن لَّمْ يَعْتَزِلُوكُمْ وَيُلْقُوٓا۟ إِلَيْكُمُ ٱلسَّلَمَ وَيَكُفُّوٓا۟ أَيْدِيَهُمْ فَخُذُوهُمْ وَٱقْتُلُوهُمْ حَيْثُ ثَقِفْتُمُوهُمْ ۚ وَأُو۟لَـٰٓئِكُمْ جَعَلْنَا لَكُمْ عَلَيْهِمْ سُلْطَـٰنًۭا مُّبِينًۭا",
    translation: {
      en: "",
      ur: "تم کچھ اور لوگ ایسے بھی پاؤ گے جو یہ چاہتے ہیں کہ تم سے بھی امن میں رہیں اور اپنی قوم سے بھی امن میں رہیں لیکن فتنہ انگیزی کو بلائے جائیں تو اس میں اوندھے منہ گر پڑیں تو ایسے لوگ اگر تم سے (لڑنے سے) کنارہ کشی نہ کریں اور نہ تمہاری طرف (پیغام) صلح بھیجیں اور نہ اپنے ہاتھوں کو روکیں تو ان کو پکڑ لو اور جہاں پاؤ قتل کردو ان لوگوں کے مقابلے میں ہم نے تمہارے لئے سند صریح مقرر کردی ہے",
    },
    words: [
      { id: '4:91:1', arabic: "سَتَجِدُونَ", transliteration: "satajidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You will find", ur: "تم will find" } },
      { id: '4:91:2', arabic: "ءَاخَرِينَ", transliteration: "ākharīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "others", ur: "others" } },
      { id: '4:91:3', arabic: "يُرِيدُونَ", transliteration: "yurīdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wishing", ur: "wishing" } },
      { id: '4:91:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:91:5', arabic: "يَأْمَنُوكُمْ", transliteration: "yamanūkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they be secure from you", ur: "وہ لوگ be secure سے تم" } },
      { id: '4:91:6', arabic: "وَيَأْمَنُوا۟", transliteration: "wayamanū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they be secure from", ur: "اور وہ لوگ be secure سے" } },
      { id: '4:91:7', arabic: "قَوْمَهُمْ", transliteration: "qawmahum", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "their people", ur: "their لوگ" } },
      { id: '4:91:8', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Everytime", ur: "Everytime" } },
      { id: '4:91:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:91:10', arabic: "رُدُّوٓا۟", transliteration: "ruddū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are returned", ur: "وہ لوگ are returned" } },
      { id: '4:91:11', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:91:12', arabic: "ٱلْفِتْنَةِ", transliteration: "l-fit'nati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the temptation", ur: "the temptation" } },
      { id: '4:91:13', arabic: "أُرْكِسُوا۟", transliteration: "ur'kisū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are plunged", ur: "وہ لوگ are plunged" } },
      { id: '4:91:14', arabic: "فِيهَا ۚ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "into it", ur: "into it" } },
      { id: '4:91:15', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So if", ur: "So if" } },
      { id: '4:91:16', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:91:17', arabic: "يَعْتَزِلُوكُمْ", transliteration: "yaʿtazilūkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they withdraw from you", ur: "وہ لوگ withdraw سے تم" } },
      { id: '4:91:18', arabic: "وَيُلْقُوٓا۟", transliteration: "wayul'qū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and offer", ur: "اور offer" } },
      { id: '4:91:19', arabic: "إِلَيْكُمُ", transliteration: "ilaykumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:91:20', arabic: "ٱلسَّلَمَ", transliteration: "l-salama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] peace", ur: "[the] peace" } },
      { id: '4:91:21', arabic: "وَيَكُفُّوٓا۟", transliteration: "wayakuffū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they restrain", ur: "اور وہ لوگ restrain" } },
      { id: '4:91:22', arabic: "أَيْدِيَهُمْ", transliteration: "aydiyahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hands", ur: "their hands" } },
      { id: '4:91:23', arabic: "فَخُذُوهُمْ", transliteration: "fakhudhūhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then seize them", ur: "پھر seize them" } },
      { id: '4:91:24', arabic: "وَٱقْتُلُوهُمْ", transliteration: "wa-uq'tulūhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and kill them", ur: "اور kill them" } },
      { id: '4:91:25', arabic: "حَيْثُ", transliteration: "ḥaythu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wherever", ur: "wherever" } },
      { id: '4:91:26', arabic: "ثَقِفْتُمُوهُمْ ۚ", transliteration: "thaqif'tumūhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you find them", ur: "تم find them" } },
      { id: '4:91:27', arabic: "وَأُو۟لَـٰٓئِكُمْ", transliteration: "wa-ulāikum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those ", ur: "اور those " } },
      { id: '4:91:28', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We made", ur: "ہم made" } },
      { id: '4:91:29', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:91:30', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against them", ur: "against them" } },
      { id: '4:91:31', arabic: "سُلْطَـٰنًۭا", transliteration: "sul'ṭānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an authority", ur: "an authority" } },
      { id: '4:91:32', arabic: "مُّبِينًۭا", transliteration: "mubīnan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'فعل + فاعل' },
        { from: 31, to: 32, label: 'موصوف + صفت' }
      ],
    },
  },
  92: {
    text: "وَمَا كَانَ لِمُؤْمِنٍ أَن يَقْتُلَ مُؤْمِنًا إِلَّا خَطَـًۭٔا ۚ وَمَن قَتَلَ مُؤْمِنًا خَطَـًۭٔا فَتَحْرِيرُ رَقَبَةٍۢ مُّؤْمِنَةٍۢ وَدِيَةٌۭ مُّسَلَّمَةٌ إِلَىٰٓ أَهْلِهِۦٓ إِلَّآ أَن يَصَّدَّقُوا۟ ۚ فَإِن كَانَ مِن قَوْمٍ عَدُوٍّۢ لَّكُمْ وَهُوَ مُؤْمِنٌۭ فَتَحْرِيرُ رَقَبَةٍۢ مُّؤْمِنَةٍۢ ۖ وَإِن كَانَ مِن قَوْمٍۭ بَيْنَكُمْ وَبَيْنَهُم مِّيثَـٰقٌۭ فَدِيَةٌۭ مُّسَلَّمَةٌ إِلَىٰٓ أَهْلِهِۦ وَتَحْرِيرُ رَقَبَةٍۢ مُّؤْمِنَةٍۢ ۖ فَمَن لَّمْ يَجِدْ فَصِيَامُ شَهْرَيْنِ مُتَتَابِعَيْنِ تَوْبَةًۭ مِّنَ ٱللَّهِ ۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "اور کسی مومن کو شایان نہیں کہ مومن کو مار ڈالے مگر بھول کر اور جو بھول کر بھی مومن کو مار ڈالے تو (ایک تو) ایک مسلمان غلام آزاد کردے اور (دوسرے) مقتول کے وارثوں کو خون بہا دے ہاں اگر وہ معاف کردیں (تو ان کو اختیار ہے) اگر مقتول تمہارے دشمنوں کی جماعت میں سے ہو اور وہ خود مومن ہو تو صرف ایک مسلمان غلام آزاد کرنا چاہیئے اور اگر مقتول ایسے لوگوں میں سے ہو جن میں اور تم میں صلح کا عہد ہو تو وارثان مقتول کو خون بہا دینا اور ایک مسلمان غلام آزاد کرنا چاہیئے اور جس کو یہ میسر نہ ہو وہ متواتر دو مہینے کے روزے رکھے یہ (کفارہ) خدا کی طرف سے (قبول) توبہ (کے لئے) ہے اور خدا (سب کچھ) جانتا اور بڑی حکمت والا ہے",
    },
    words: [
      { id: '4:92:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '4:92:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:92:3', arabic: "لِمُؤْمِنٍ", transliteration: "limu'minin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for a believer", ur: "for a believer" } },
      { id: '4:92:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:92:5', arabic: "يَقْتُلَ", transliteration: "yaqtula", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he kills", ur: "وہ kills" } },
      { id: '4:92:6', arabic: "مُؤْمِنًا", transliteration: "mu'minan", pos: ['N'], posLabel: 'N', root: "أ م ن", meaning: { en: "a believer", ur: "a believer" } },
      { id: '4:92:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:92:8', arabic: "خَطَـًۭٔا ۚ", transliteration: "khaṭa-an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) mistake", ur: "(by) mistake" } },
      { id: '4:92:9', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:92:10', arabic: "قَتَلَ", transliteration: "qatala", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "killed", ur: "killed" } },
      { id: '4:92:11', arabic: "مُؤْمِنًا", transliteration: "mu'minan", pos: ['N'], posLabel: 'N', root: "أ م ن", meaning: { en: "a believer", ur: "a believer" } },
      { id: '4:92:12', arabic: "خَطَـًۭٔا", transliteration: "khaṭa-an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) mistake", ur: "(by) mistake" } },
      { id: '4:92:13', arabic: "فَتَحْرِيرُ", transliteration: "fataḥrīru", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then freeing", ur: "پھر freeing" } },
      { id: '4:92:14', arabic: "رَقَبَةٍۢ", transliteration: "raqabatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) a slave", ur: "(of) a slave" } },
      { id: '4:92:15', arabic: "مُّؤْمِنَةٍۢ", transliteration: "mu'minatin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: " believing", ur: " believing" } },
      { id: '4:92:16', arabic: "وَدِيَةٌۭ", transliteration: "wadiyatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and blood money", ur: "اور blood money" } },
      { id: '4:92:17', arabic: "مُّسَلَّمَةٌ", transliteration: "musallamatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is to be) paid", ur: "(is کو be) paid" } },
      { id: '4:92:18', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:92:19', arabic: "أَهْلِهِۦٓ", transliteration: "ahlihi", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "his family", ur: "his family" } },
      { id: '4:92:20', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unless", ur: "unless" } },
      { id: '4:92:21', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:92:22', arabic: "يَصَّدَّقُوا۟ ۚ", transliteration: "yaṣṣaddaqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they remit (as) charity", ur: "وہ لوگ remit (as) charity" } },
      { id: '4:92:23', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:92:24', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(he) was", ur: "(وہ) was" } },
      { id: '4:92:25', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:92:26', arabic: "قَوْمٍ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '4:92:27', arabic: "عَدُوٍّۢ", transliteration: "ʿaduwwin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "hostile", ur: "hostile" } },
      { id: '4:92:28', arabic: "لَّكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:92:29', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he was", ur: "اور وہ was" } },
      { id: '4:92:30', arabic: "مُؤْمِنٌۭ", transliteration: "mu'minun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a believer", ur: "a believer" } },
      { id: '4:92:31', arabic: "فَتَحْرِيرُ", transliteration: "fataḥrīru", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then freeing", ur: "پھر freeing" } },
      { id: '4:92:32', arabic: "رَقَبَةٍۢ", transliteration: "raqabatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) a believing slave", ur: "(of) a believing slave" } },
      { id: '4:92:33', arabic: "مُّؤْمِنَةٍۢ ۖ", transliteration: "mu'minatin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: " believing", ur: " believing" } },
      { id: '4:92:34', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:92:35', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(he) was", ur: "(وہ) was" } },
      { id: '4:92:36', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:92:37', arabic: "قَوْمٍۭ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '4:92:38', arabic: "بَيْنَكُمْ", transliteration: "baynakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between you", ur: "درمیان تم" } },
      { id: '4:92:39', arabic: "وَبَيْنَهُم", transliteration: "wabaynahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and between them", ur: "اور درمیان them" } },
      { id: '4:92:40', arabic: "مِّيثَـٰقٌۭ", transliteration: "mīthāqun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a treaty", ur: "(is) a treaty" } },
      { id: '4:92:41', arabic: "فَدِيَةٌۭ", transliteration: "fadiyatun", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then blood money", ur: "پھر blood money" } },
      { id: '4:92:42', arabic: "مُّسَلَّمَةٌ", transliteration: "musallamatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is to be) paid", ur: "(is کو be) paid" } },
      { id: '4:92:43', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:92:44', arabic: "أَهْلِهِۦ", transliteration: "ahlihi", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "his family", ur: "his family" } },
      { id: '4:92:45', arabic: "وَتَحْرِيرُ", transliteration: "wataḥrīru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and freeing", ur: "اور freeing" } },
      { id: '4:92:46', arabic: "رَقَبَةٍۢ", transliteration: "raqabatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) a slave", ur: "(of) a slave" } },
      { id: '4:92:47', arabic: "مُّؤْمِنَةٍۢ ۖ", transliteration: "mu'minatin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: " believing", ur: " believing" } },
      { id: '4:92:48', arabic: "فَمَن", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:92:49', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '4:92:50', arabic: "يَجِدْ", transliteration: "yajid", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "find", ur: "find" } },
      { id: '4:92:51', arabic: "فَصِيَامُ", transliteration: "faṣiyāmu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then fasting", ur: "پھر fasting" } },
      { id: '4:92:52', arabic: "شَهْرَيْنِ", transliteration: "shahrayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) two months", ur: "(for) two months" } },
      { id: '4:92:53', arabic: "مُتَتَابِعَيْنِ", transliteration: "mutatābiʿayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "consecutively", ur: "consecutively" } },
      { id: '4:92:54', arabic: "تَوْبَةًۭ", transliteration: "tawbatan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(seeking) repentance", ur: "(seeking) repentance" } },
      { id: '4:92:55', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:92:56', arabic: "ٱللَّهِ ۗ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:92:57', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and is", ur: "اور is" } },
      { id: '4:92:58', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:92:59', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } },
      { id: '4:92:60', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'جار + مجرور' },
        { from: 36, to: 37, label: 'جار + مجرور' },
        { from: 54, to: 55, label: 'فعل + فاعل' }
      ],
    },
  },
  93: {
    text: "وَمَن يَقْتُلْ مُؤْمِنًۭا مُّتَعَمِّدًۭا فَجَزَآؤُهُۥ جَهَنَّمُ خَـٰلِدًۭا فِيهَا وَغَضِبَ ٱللَّهُ عَلَيْهِ وَلَعَنَهُۥ وَأَعَدَّ لَهُۥ عَذَابًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "اور جو شخص مسلمان کو قصداً مار ڈالے گا تو اس کی سزا دوزخ ہے جس میں وہ ہمیشہ (جلتا) رہے گا اور خدا اس پر غضبناک ہوگا اور اس پر لعنت کرے گا اور ایسے شخص کے لئے اس نے بڑا (سخت) عذاب تیار کر رکھا ہے",
    },
    words: [
      { id: '4:93:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:93:2', arabic: "يَقْتُلْ", transliteration: "yaqtul", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "kills", ur: "kills" } },
      { id: '4:93:3', arabic: "مُؤْمِنًۭا", transliteration: "mu'minan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a believer", ur: "a believer" } },
      { id: '4:93:4', arabic: "مُّتَعَمِّدًۭا", transliteration: "mutaʿammidan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "intentionally", ur: "intentionally" } },
      { id: '4:93:5', arabic: "فَجَزَآؤُهُۥ", transliteration: "fajazāuhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then his recompense", ur: "پھر his recompense" } },
      { id: '4:93:6', arabic: "جَهَنَّمُ", transliteration: "jahannamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Hell", ur: "(is) جہنم" } },
      { id: '4:93:7', arabic: "خَـٰلِدًۭا", transliteration: "khālidan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "abiding forever", ur: "abiding forever" } },
      { id: '4:93:8', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:93:9', arabic: "وَغَضِبَ", transliteration: "waghaḍiba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and will fall the wrath", ur: "اور will fall the wrath" } },
      { id: '4:93:10', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:93:11', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on him", ur: "پر him" } },
      { id: '4:93:12', arabic: "وَلَعَنَهُۥ", transliteration: "walaʿanahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He (will) curse him", ur: "اور وہ (will) curse him" } },
      { id: '4:93:13', arabic: "وَأَعَدَّ", transliteration: "wa-aʿadda", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He has prepared", ur: "اور وہ has prepared" } },
      { id: '4:93:14', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '4:93:15', arabic: "عَذَابًا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '4:93:16', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'موصوف + صفت' }
      ],
    },
  },
  94: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا ضَرَبْتُمْ فِى سَبِيلِ ٱللَّهِ فَتَبَيَّنُوا۟ وَلَا تَقُولُوا۟ لِمَنْ أَلْقَىٰٓ إِلَيْكُمُ ٱلسَّلَـٰمَ لَسْتَ مُؤْمِنًۭا تَبْتَغُونَ عَرَضَ ٱلْحَيَوٰةِ ٱلدُّنْيَا فَعِندَ ٱللَّهِ مَغَانِمُ كَثِيرَةٌۭ ۚ كَذَٰلِكَ كُنتُم مِّن قَبْلُ فَمَنَّ ٱللَّهُ عَلَيْكُمْ فَتَبَيَّنُوٓا۟ ۚ إِنَّ ٱللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًۭا",
    translation: {
      en: "",
      ur: "مومنو! جب تم خدا کی راہ میں باہر نکلو کرو تو تحقیق سے کام لیا کرو اور جو شخص تم سے سلام علیک کرے اس سے یہ نہ کہو کہ تم مومن نہیں اور اس سے تمہاری غرض یہ ہو کہ دنیا کی زندگی کا فائدہ حاصل کرو سو خدا کے نزدیک بہت سے غنیمتیں ہیں تم بھی تو پہلے ایسے ہی تھے پھر خدا نے تم پر احسان کیا تو (آئندہ) تحقیق کرلیا کرو اور جو عمل تم کرتے ہو خدا کو سب کی خبر ہے",
    },
    words: [
      { id: '4:94:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:94:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:94:3', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:94:4', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '4:94:5', arabic: "ضَرَبْتُمْ", transliteration: "ḍarabtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you go forth", ur: "تم go forth" } },
      { id: '4:94:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:94:7', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:94:8', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:94:9', arabic: "فَتَبَيَّنُوا۟", transliteration: "fatabayyanū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then investigate", ur: "پھر investigate" } },
      { id: '4:94:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '4:94:11', arabic: "تَقُولُوا۟", transliteration: "taqūlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "say", ur: "کہو" } },
      { id: '4:94:12', arabic: "لِمَنْ", transliteration: "liman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to (the one) who", ur: "کو (the one) جو" } },
      { id: '4:94:13', arabic: "أَلْقَىٰٓ", transliteration: "alqā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "offers", ur: "offers" } },
      { id: '4:94:14', arabic: "إِلَيْكُمُ", transliteration: "ilaykumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:94:15', arabic: "ٱلسَّلَـٰمَ", transliteration: "l-salāma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(a greeting of) peace", ur: "(a greeting of) peace" } },
      { id: '4:94:16', arabic: "لَسْتَ", transliteration: "lasta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You are not", ur: "تم are نہیں" } },
      { id: '4:94:17', arabic: "مُؤْمِنًۭا", transliteration: "mu'minan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a believer", ur: "a believer" } },
      { id: '4:94:18', arabic: "تَبْتَغُونَ", transliteration: "tabtaghūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seeking", ur: "seeking" } },
      { id: '4:94:19', arabic: "عَرَضَ", transliteration: "ʿaraḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "transitory gains", ur: "transitory gains" } },
      { id: '4:94:20', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the life", ur: "(of) the زندگی" } },
      { id: '4:94:21', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '4:94:22', arabic: "فَعِندَ", transliteration: "faʿinda", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "for with", ur: "for ساتھ" } },
      { id: '4:94:23', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:94:24', arabic: "مَغَانِمُ", transliteration: "maghānimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) booties", ur: "(are) booties" } },
      { id: '4:94:25', arabic: "كَثِيرَةٌۭ ۚ", transliteration: "kathīratun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "abundant", ur: "abundant" } },
      { id: '4:94:26', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Like that", ur: "Like وہ" } },
      { id: '4:94:27', arabic: "كُنتُم", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you were", ur: "تم were" } },
      { id: '4:94:28', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:94:29', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '4:94:30', arabic: "فَمَنَّ", transliteration: "famanna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then conferred favor", ur: "پھر conferred favor" } },
      { id: '4:94:31', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:94:32', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '4:94:33', arabic: "فَتَبَيَّنُوٓا۟ ۚ", transliteration: "fatabayyanū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so investigate", ur: "so investigate" } },
      { id: '4:94:34', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:94:35', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:94:36', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:94:37', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '4:94:38', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } },
      { id: '4:94:39', arabic: "خَبِيرًۭا", transliteration: "khabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Aware", ur: "سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' },
        { from: 27, to: 28, label: 'فعل + فاعل' },
        { from: 34, to: 35, label: 'فعل + فاعل' }
      ],
    },
  },
  95: {
    text: "لَّا يَسْتَوِى ٱلْقَـٰعِدُونَ مِنَ ٱلْمُؤْمِنِينَ غَيْرُ أُو۟لِى ٱلضَّرَرِ وَٱلْمُجَـٰهِدُونَ فِى سَبِيلِ ٱللَّهِ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ ۚ فَضَّلَ ٱللَّهُ ٱلْمُجَـٰهِدِينَ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ عَلَى ٱلْقَـٰعِدِينَ دَرَجَةًۭ ۚ وَكُلًّۭا وَعَدَ ٱللَّهُ ٱلْحُسْنَىٰ ۚ وَفَضَّلَ ٱللَّهُ ٱلْمُجَـٰهِدِينَ عَلَى ٱلْقَـٰعِدِينَ أَجْرًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "جو مسلمان (گھروں میں) بیٹھ رہتے (اور لڑنے سے جی چراتے) ہیں اور کوئی عذر نہیں رکھتے وہ اور جو خدا کی راہ میں اپنے مال اور جان سے لڑتے ہیں وہ دونوں برابر نہیں ہو سکتے خدا نے مال اور جان سے جہاد کرنے والوں کو بیٹھ رہنے والوں پر درجے میں فضیلت بخشی ہے اور (گو) نیک وعدہ سب سے ہے لیکن اجر عظیم کے لحاظ سے خدا نے جہاد کرنے والوں کو بیٹھ رہنے والوں پر کہیں فضیلت بخشی ہے",
    },
    words: [
      { id: '4:95:1', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '4:95:2', arabic: "يَسْتَوِى", transliteration: "yastawī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) equal", ur: "(are) equal" } },
      { id: '4:95:3', arabic: "ٱلْقَـٰعِدُونَ", transliteration: "l-qāʿidūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who sit", ur: "the ones جو sit" } },
      { id: '4:95:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '4:95:5', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:95:6', arabic: "غَيْرُ", transliteration: "ghayru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '4:95:7', arabic: "أُو۟لِى", transliteration: "ulī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones (who are)", ur: "the ones (جو are)" } },
      { id: '4:95:8', arabic: "ٱلضَّرَرِ", transliteration: "l-ḍarari", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[the] disabled", ur: "[the] disabled" } },
      { id: '4:95:9', arabic: "وَٱلْمُجَـٰهِدُونَ", transliteration: "wal-mujāhidūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the ones who strive", ur: "اور the ones جو strive" } },
      { id: '4:95:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:95:11', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:95:12', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:95:13', arabic: "بِأَمْوَٰلِهِمْ", transliteration: "bi-amwālihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with their wealth", ur: "ساتھ their wealth" } },
      { id: '4:95:14', arabic: "وَأَنفُسِهِمْ ۚ", transliteration: "wa-anfusihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ف س", meaning: { en: "and their lives", ur: "اور their lives" } },
      { id: '4:95:15', arabic: "فَضَّلَ", transliteration: "faḍḍala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Preferred", ur: "Preferred" } },
      { id: '4:95:16', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) Allah", ur: "(has) اللہ" } },
      { id: '4:95:17', arabic: "ٱلْمُجَـٰهِدِينَ", transliteration: "l-mujāhidīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the ones who strive", ur: "the ones جو strive" } },
      { id: '4:95:18', arabic: "بِأَمْوَٰلِهِمْ", transliteration: "bi-amwālihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with their wealth", ur: "ساتھ their wealth" } },
      { id: '4:95:19', arabic: "وَأَنفُسِهِمْ", transliteration: "wa-anfusihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ف س", meaning: { en: "and their lives", ur: "اور their lives" } },
      { id: '4:95:20', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:95:21', arabic: "ٱلْقَـٰعِدِينَ", transliteration: "l-qāʿidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who sit", ur: "the ones جو sit" } },
      { id: '4:95:22', arabic: "دَرَجَةًۭ ۚ", transliteration: "darajatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) rank", ur: "(میں) rank" } },
      { id: '4:95:23', arabic: "وَكُلًّۭا", transliteration: "wakullan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (to) all", ur: "اور (کو) سب" } },
      { id: '4:95:24', arabic: "وَعَدَ", transliteration: "waʿada", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "promised", ur: "promised" } },
      { id: '4:95:25', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) Allah", ur: "(has) اللہ" } },
      { id: '4:95:26', arabic: "ٱلْحُسْنَىٰ ۚ", transliteration: "l-ḥus'nā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the best", ur: "the best" } },
      { id: '4:95:27', arabic: "وَفَضَّلَ", transliteration: "wafaḍḍala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "preferred", ur: "preferred" } },
      { id: '4:95:28', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) Allah", ur: "(has) اللہ" } },
      { id: '4:95:29', arabic: "ٱلْمُجَـٰهِدِينَ", transliteration: "l-mujāhidīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the ones who strive", ur: "the ones جو strive" } },
      { id: '4:95:30', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '4:95:31', arabic: "ٱلْقَـٰعِدِينَ", transliteration: "l-qāʿidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who sit", ur: "the ones جو sit" } },
      { id: '4:95:32', arabic: "أَجْرًا", transliteration: "ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) a reward", ur: "(ساتھ) a ثواب" } },
      { id: '4:95:33', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'موصوف + صفت' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'مضاف + مضاف إليه' },
        { from: 28, to: 29, label: 'موصوف + صفت' },
        { from: 30, to: 31, label: 'جار + مجرور' },
        { from: 32, to: 33, label: 'موصوف + صفت' }
      ],
    },
  },
  96: {
    text: "دَرَجَـٰتٍۢ مِّنْهُ وَمَغْفِرَةًۭ وَرَحْمَةًۭ ۚ وَكَانَ ٱللَّهُ غَفُورًۭا رَّحِيمًا",
    translation: {
      en: "",
      ur: "(یعنی) خدا کی طرف سے درجات میں اور بخشش میں اور رحمت میں اور خدا بڑا بخشنے والا (اور) مہربان ہے",
    },
    words: [
      { id: '4:96:1', arabic: "دَرَجَـٰتٍۢ", transliteration: "darajātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ranks", ur: "Ranks" } },
      { id: '4:96:2', arabic: "مِّنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Him", ur: "سے Him" } },
      { id: '4:96:3', arabic: "وَمَغْفِرَةًۭ", transliteration: "wamaghfiratan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forgiveness", ur: "اور مغفرت" } },
      { id: '4:96:4', arabic: "وَرَحْمَةًۭ ۚ", transliteration: "waraḥmatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر ح م", meaning: { en: "and mercy", ur: "اور رحمت" } },
      { id: '4:96:5', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:96:6', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:96:7', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:96:8', arabic: "رَّحِيمًا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  97: {
    text: "إِنَّ ٱلَّذِينَ تَوَفَّىٰهُمُ ٱلْمَلَـٰٓئِكَةُ ظَالِمِىٓ أَنفُسِهِمْ قَالُوا۟ فِيمَ كُنتُمْ ۖ قَالُوا۟ كُنَّا مُسْتَضْعَفِينَ فِى ٱلْأَرْضِ ۚ قَالُوٓا۟ أَلَمْ تَكُنْ أَرْضُ ٱللَّهِ وَٰسِعَةًۭ فَتُهَاجِرُوا۟ فِيهَا ۚ فَأُو۟لَـٰٓئِكَ مَأْوَىٰهُمْ جَهَنَّمُ ۖ وَسَآءَتْ مَصِيرًا",
    translation: {
      en: "",
      ur: "اور جو لوگ اپنی جانوں پر ظلم کرتے ہیں جب فرشتے ان کی جان قبض کرنے لگتے ہیں تو ان سے پوچھتے ہیں کہ تم کس حال میں تھے وہ کہتے ہیں کہ ہم ملک میں عاجز وناتواں تھے فرشتے کہتے ہیں کیا خدا کا ملک فراخ نہیں تھا کہ تم اس میں ہجرت کر جاتے ایسے لوگوں کا ٹھکانہ دوزخ ہے اور وہ بری جگہ ہے",
    },
    words: [
      { id: '4:97:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:97:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those whom ", ur: "those whom " } },
      { id: '4:97:3', arabic: "تَوَفَّىٰهُمُ", transliteration: "tawaffāhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take them (in death)", ur: "take them (میں موت)" } },
      { id: '4:97:4', arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '4:97:5', arabic: "ظَالِمِىٓ", transliteration: "ẓālimī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(while) they (were) wronging", ur: "(while) وہ لوگ (were) wronging" } },
      { id: '4:97:6', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '4:97:7', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '4:97:8', arabic: "فِيمَ", transliteration: "fīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "In what (condition)", ur: "میں کیا (condition)" } },
      { id: '4:97:9', arabic: "كُنتُمْ ۖ", transliteration: "kuntum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were you", ur: "were تم" } },
      { id: '4:97:10', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '4:97:11', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We were", ur: "ہم were" } },
      { id: '4:97:12', arabic: "مُسْتَضْعَفِينَ", transliteration: "mus'taḍʿafīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "oppressed", ur: "oppressed" } },
      { id: '4:97:13', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:97:14', arabic: "ٱلْأَرْضِ ۚ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:97:15', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '4:97:16', arabic: "أَلَمْ", transliteration: "alam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '4:97:17', arabic: "تَكُنْ", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was", ur: "was" } },
      { id: '4:97:18', arabic: "أَرْضُ", transliteration: "arḍu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) earth", ur: "(the) زمین" } },
      { id: '4:97:19', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:97:20', arabic: "وَٰسِعَةًۭ", transliteration: "wāsiʿatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "spacious (enough)", ur: "spacious (enough)" } },
      { id: '4:97:21', arabic: "فَتُهَاجِرُوا۟", transliteration: "fatuhājirū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so that you (could) emigrate", ur: "so وہ تم (could) emigrate" } },
      { id: '4:97:22', arabic: "فِيهَا ۚ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:97:23', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then those", ur: "پھر those" } },
      { id: '4:97:24', arabic: "مَأْوَىٰهُمْ", transliteration: "mawāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will have) their abode", ur: "(will have) their abode" } },
      { id: '4:97:25', arabic: "جَهَنَّمُ ۖ", transliteration: "jahannamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) Hell ", ur: "(میں) جہنم " } },
      { id: '4:97:26', arabic: "وَسَآءَتْ", transliteration: "wasāat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and it is an evil", ur: "اور it is an برا" } },
      { id: '4:97:27', arabic: "مَصِيرًا", transliteration: "maṣīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "destination", ur: "destination" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'فعل + فاعل' }
      ],
    },
  },
  98: {
    text: "إِلَّا ٱلْمُسْتَضْعَفِينَ مِنَ ٱلرِّجَالِ وَٱلنِّسَآءِ وَٱلْوِلْدَٰنِ لَا يَسْتَطِيعُونَ حِيلَةًۭ وَلَا يَهْتَدُونَ سَبِيلًۭا",
    translation: {
      en: "",
      ur: "ہاں جو مرد اور عورتیں اور بچے بےبس ہیں کہ نہ تو کوئی چارہ کر سکتے ہیں اور نہ رستہ جانتے ہیں",
    },
    words: [
      { id: '4:98:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '4:98:2', arabic: "ٱلْمُسْتَضْعَفِينَ", transliteration: "l-mus'taḍʿafīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the oppressed", ur: "the oppressed" } },
      { id: '4:98:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '4:98:4', arabic: "ٱلرِّجَالِ", transliteration: "l-rijāli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the men", ur: "the men" } },
      { id: '4:98:5', arabic: "وَٱلنِّسَآءِ", transliteration: "wal-nisāi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the women", ur: "اور the women" } },
      { id: '4:98:6', arabic: "وَٱلْوِلْدَٰنِ", transliteration: "wal-wil'dāni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the children", ur: "اور the اولاد" } },
      { id: '4:98:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(who) not", ur: "(جو) نہیں" } },
      { id: '4:98:8', arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are able to", ur: "are able کو" } },
      { id: '4:98:9', arabic: "حِيلَةًۭ", transliteration: "ḥīlatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "plan", ur: "plan" } },
      { id: '4:98:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:98:11', arabic: "يَهْتَدُونَ", transliteration: "yahtadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are directed", ur: "وہ لوگ are directed" } },
      { id: '4:98:12', arabic: "سَبِيلًۭا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) a way", ur: "(کو) a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  99: {
    text: "فَأُو۟لَـٰٓئِكَ عَسَى ٱللَّهُ أَن يَعْفُوَ عَنْهُمْ ۚ وَكَانَ ٱللَّهُ عَفُوًّا غَفُورًۭا",
    translation: {
      en: "",
      ur: "قریب ہے کہ خدا ایسوں کو معاف کردے اور خدا معاف کرنے والا (اور) بخشنے والا ہے",
    },
    words: [
      { id: '4:99:1', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then those", ur: "پھر those" } },
      { id: '4:99:2', arabic: "عَسَى", transliteration: "ʿasā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "may be", ur: "may be" } },
      { id: '4:99:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:99:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "will", ur: "will" } },
      { id: '4:99:5', arabic: "يَعْفُوَ", transliteration: "yaʿfuwa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "pardon", ur: "pardon" } },
      { id: '4:99:6', arabic: "عَنْهُمْ ۚ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[on] them", ur: "[پر] them" } },
      { id: '4:99:7', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and is", ur: "اور is" } },
      { id: '4:99:8', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:99:9', arabic: "عَفُوًّا", transliteration: "ʿafuwwan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Pardoning", ur: "Oft-Pardoning" } },
      { id: '4:99:10', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  100: {
    text: "۞ وَمَن يُهَاجِرْ فِى سَبِيلِ ٱللَّهِ يَجِدْ فِى ٱلْأَرْضِ مُرَٰغَمًۭا كَثِيرًۭا وَسَعَةًۭ ۚ وَمَن يَخْرُجْ مِنۢ بَيْتِهِۦ مُهَاجِرًا إِلَى ٱللَّهِ وَرَسُولِهِۦ ثُمَّ يُدْرِكْهُ ٱلْمَوْتُ فَقَدْ وَقَعَ أَجْرُهُۥ عَلَى ٱللَّهِ ۗ وَكَانَ ٱللَّهُ غَفُورًۭا رَّحِيمًۭا",
    translation: {
      en: "",
      ur: "اور جو شخص خدا کی راہ میں گھر بار چھوڑ جائے وہ زمین میں بہت سی جگہ اور کشائش پائے گا اور جو شخص خدا اور رسول کی طرف ہجرت کرکے گھر سے نکل جائے پھر اس کو موت آپکڑے تو اس کا ثواب خدا کے ذمے ہوچکا اور خدا بخشنے والا اور مہربان ہے",
    },
    words: [
      { id: '4:100:1', arabic: "۞ وَمَن", transliteration: "waman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:100:2', arabic: "يُهَاجِرْ", transliteration: "yuhājir", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "emigrates", ur: "emigrates" } },
      { id: '4:100:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:100:4', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:100:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:100:6', arabic: "يَجِدْ", transliteration: "yajid", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will find", ur: "will find" } },
      { id: '4:100:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:100:8', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:100:9', arabic: "مُرَٰغَمًۭا", transliteration: "murāghaman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "place(s) of refuge ", ur: "place(s) of refuge " } },
      { id: '4:100:10', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } },
      { id: '4:100:11', arabic: "وَسَعَةًۭ ۚ", transliteration: "wasaʿatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and abundance", ur: "اور abundance" } },
      { id: '4:100:12', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:100:13', arabic: "يَخْرُجْ", transliteration: "yakhruj", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "leaves", ur: "leaves" } },
      { id: '4:100:14', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:100:15', arabic: "بَيْتِهِۦ", transliteration: "baytihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his home", ur: "his home" } },
      { id: '4:100:16', arabic: "مُهَاجِرًا", transliteration: "muhājiran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) an emigrant", ur: "(as) an emigrant" } },
      { id: '4:100:17', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:100:18', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:100:19', arabic: "وَرَسُولِهِۦ", transliteration: "warasūlihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messenger", ur: "اور His رسول" } },
      { id: '4:100:20', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:100:21', arabic: "يُدْرِكْهُ", transliteration: "yud'rik'hu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "overtakes him", ur: "overtakes him" } },
      { id: '4:100:22', arabic: "ٱلْمَوْتُ", transliteration: "l-mawtu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] death", ur: "[the] موت" } },
      { id: '4:100:23', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then certainly", ur: "پھر certainly" } },
      { id: '4:100:24', arabic: "وَقَعَ", transliteration: "waqaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(became) incumbent", ur: "(became) incumbent" } },
      { id: '4:100:25', arabic: "أَجْرُهُۥ", transliteration: "ajruhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his reward", ur: "his ثواب" } },
      { id: '4:100:26', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '4:100:27', arabic: "ٱللَّهِ ۗ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:100:28', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:100:29', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:100:30', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:100:31', arabic: "رَّحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'جار + مجرور' }
      ],
    },
  },
  101: {
    text: "وَإِذَا ضَرَبْتُمْ فِى ٱلْأَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَقْصُرُوا۟ مِنَ ٱلصَّلَوٰةِ إِنْ خِفْتُمْ أَن يَفْتِنَكُمُ ٱلَّذِينَ كَفَرُوٓا۟ ۚ إِنَّ ٱلْكَـٰفِرِينَ كَانُوا۟ لَكُمْ عَدُوًّۭا مُّبِينًۭا",
    translation: {
      en: "",
      ur: "اور جب تم سفر کو جاؤ تو تم پر کچھ گناہ نہیں کہ نماز کو کم کرکے پڑھو بشرطیکہ تم کو خوف ہو کہ کافر لوگ تم کو ایذا دیں گے بےشک کافر تمہارے کھلے دشمن ہیں",
    },
    words: [
      { id: '4:101:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '4:101:2', arabic: "ضَرَبْتُمْ", transliteration: "ḍarabtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you travel", ur: "تم travel" } },
      { id: '4:101:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:101:4', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:101:5', arabic: "فَلَيْسَ", transliteration: "falaysa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '4:101:6', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '4:101:7', arabic: "جُنَاحٌ", transliteration: "junāḥun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) any blame", ur: "(is) any blame" } },
      { id: '4:101:8', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:101:9', arabic: "تَقْصُرُوا۟", transliteration: "taqṣurū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you shorten", ur: "تم shorten" } },
      { id: '4:101:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '4:101:11', arabic: "ٱلصَّلَوٰةِ", transliteration: "l-ṣalati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '4:101:12', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:101:13', arabic: "خِفْتُمْ", transliteration: "khif'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear", ur: "تم ڈرنا" } },
      { id: '4:101:14', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:101:15', arabic: "يَفْتِنَكُمُ", transliteration: "yaftinakumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(may) harm you", ur: "(may) harm تم" } },
      { id: '4:101:16', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:101:17', arabic: "كَفَرُوٓا۟ ۚ", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '4:101:18', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:101:19', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbelievers", ur: "the کافر" } },
      { id: '4:101:20', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '4:101:21', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:101:22', arabic: "عَدُوًّۭا", transliteration: "ʿaduwwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an enemy", ur: "an enemy" } },
      { id: '4:101:23', arabic: "مُّبِينًۭا", transliteration: "mubīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "open", ur: "open" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  102: {
    text: "وَإِذَا كُنتَ فِيهِمْ فَأَقَمْتَ لَهُمُ ٱلصَّلَوٰةَ فَلْتَقُمْ طَآئِفَةٌۭ مِّنْهُم مَّعَكَ وَلْيَأْخُذُوٓا۟ أَسْلِحَتَهُمْ فَإِذَا سَجَدُوا۟ فَلْيَكُونُوا۟ مِن وَرَآئِكُمْ وَلْتَأْتِ طَآئِفَةٌ أُخْرَىٰ لَمْ يُصَلُّوا۟ فَلْيُصَلُّوا۟ مَعَكَ وَلْيَأْخُذُوا۟ حِذْرَهُمْ وَأَسْلِحَتَهُمْ ۗ وَدَّ ٱلَّذِينَ كَفَرُوا۟ لَوْ تَغْفُلُونَ عَنْ أَسْلِحَتِكُمْ وَأَمْتِعَتِكُمْ فَيَمِيلُونَ عَلَيْكُم مَّيْلَةًۭ وَٰحِدَةًۭ ۚ وَلَا جُنَاحَ عَلَيْكُمْ إِن كَانَ بِكُمْ أَذًۭى مِّن مَّطَرٍ أَوْ كُنتُم مَّرْضَىٰٓ أَن تَضَعُوٓا۟ أَسْلِحَتَكُمْ ۖ وَخُذُوا۟ حِذْرَكُمْ ۗ إِنَّ ٱللَّهَ أَعَدَّ لِلْكَـٰفِرِينَ عَذَابًۭا مُّهِينًۭا",
    translation: {
      en: "",
      ur: "اور (اے پیغمبر) جب تم ان (مجاہدین کے لشکر) میں ہو اور ان کو نماز پڑھانے لگو تو چاہیئے کہ ان کی ایک جماعت تمہارے ساتھ مسلح ہو کر کھڑی رہے جب وہ سجدہ کرچکیں تو پرے ہو جائیں پھر دوسری جماعت جس نے نماز نہیں پڑھی (ان کی جگہ) آئے اور ہوشیار اور مسلح ہو کر تمہارے ساتھ نماز ادا کرے کافر اس گھات میں ہیں کہ تم ذرا اپنے ہتھیاروں اور سامان سے غافل ہو جاؤ تو تم پر یکبارگی حملہ کردیں اگر تم بارش کے سبب تکلیف میں یا بیمار ہو تو تم پر کچھ گناہ نہیں کہ ہتھیار اتار رکھو مگر ہوشیار ضرور رہنا خدا نے کافروں کے لئے ذلت کا عذاب تیار کر رکھا ہے",
    },
    words: [
      { id: '4:102:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '4:102:2', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '4:102:3', arabic: "فِيهِمْ", transliteration: "fīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '4:102:4', arabic: "فَأَقَمْتَ", transliteration: "fa-aqamta", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and you lead", ur: "اور تم lead" } },
      { id: '4:102:5', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:102:6', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '4:102:7', arabic: "فَلْتَقُمْ", transliteration: "faltaqum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then let stand", ur: "پھر let stand" } },
      { id: '4:102:8', arabic: "طَآئِفَةٌۭ", transliteration: "ṭāifatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a group", ur: "a group" } },
      { id: '4:102:9', arabic: "مِّنْهُم", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '4:102:10', arabic: "مَّعَكَ", transliteration: "maʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '4:102:11', arabic: "وَلْيَأْخُذُوٓا۟", transliteration: "walyakhudhū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and let them take", ur: "اور let them take" } },
      { id: '4:102:12', arabic: "أَسْلِحَتَهُمْ", transliteration: "asliḥatahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their arms", ur: "their arms" } },
      { id: '4:102:13', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '4:102:14', arabic: "سَجَدُوا۟", transliteration: "sajadū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have prostrated", ur: "وہ لوگ have prostrated" } },
      { id: '4:102:15', arabic: "فَلْيَكُونُوا۟", transliteration: "falyakūnū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ك و ن", meaning: { en: "then let them be", ur: "پھر let them be" } },
      { id: '4:102:16', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:102:17', arabic: "وَرَآئِكُمْ", transliteration: "warāikum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "behind you", ur: "behind تم" } },
      { id: '4:102:18', arabic: "وَلْتَأْتِ", transliteration: "waltati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and let come (forward)", ur: "اور let come (forward)" } },
      { id: '4:102:19', arabic: "طَآئِفَةٌ", transliteration: "ṭāifatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a group ", ur: "a group " } },
      { id: '4:102:20', arabic: "أُخْرَىٰ", transliteration: "ukh'rā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other", ur: "other" } },
      { id: '4:102:21', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(which has) not", ur: "(جو has) نہیں" } },
      { id: '4:102:22', arabic: "يُصَلُّوا۟", transliteration: "yuṣallū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prayed", ur: "prayed" } },
      { id: '4:102:23', arabic: "فَلْيُصَلُّوا۟", transliteration: "falyuṣallū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and let them pray", ur: "اور let them دعا" } },
      { id: '4:102:24', arabic: "مَعَكَ", transliteration: "maʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '4:102:25', arabic: "وَلْيَأْخُذُوا۟", transliteration: "walyakhudhū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and let them take", ur: "اور let them take" } },
      { id: '4:102:26', arabic: "حِذْرَهُمْ", transliteration: "ḥidh'rahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their precautions", ur: "their precautions" } },
      { id: '4:102:27', arabic: "وَأَسْلِحَتَهُمْ ۗ", transliteration: "wa-asliḥatahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their arms", ur: "اور their arms" } },
      { id: '4:102:28', arabic: "وَدَّ", transliteration: "wadda", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Wished", ur: "Wished" } },
      { id: '4:102:29', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:102:30', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '4:102:31', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:102:32', arabic: "تَغْفُلُونَ", transliteration: "taghfulūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you neglect", ur: "تم neglect" } },
      { id: '4:102:33', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[about]", ur: "[about]" } },
      { id: '4:102:34', arabic: "أَسْلِحَتِكُمْ", transliteration: "asliḥatikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your arms", ur: "your arms" } },
      { id: '4:102:35', arabic: "وَأَمْتِعَتِكُمْ", transliteration: "wa-amtiʿatikum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your baggage", ur: "اور your baggage" } },
      { id: '4:102:36', arabic: "فَيَمِيلُونَ", transliteration: "fayamīlūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (that) they (can) assault", ur: "so (وہ) وہ لوگ (can) assault" } },
      { id: '4:102:37', arabic: "عَلَيْكُم", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[upon] you", ur: "[پر] تم" } },
      { id: '4:102:38', arabic: "مَّيْلَةًۭ", transliteration: "maylatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) an attack", ur: "(میں) an attack" } },
      { id: '4:102:39', arabic: "وَٰحِدَةًۭ ۚ", transliteration: "wāḥidatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "single", ur: "single" } },
      { id: '4:102:40', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But (there is) no", ur: "لیکن (there is) نہیں" } },
      { id: '4:102:41', arabic: "جُنَاحَ", transliteration: "junāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "blame", ur: "blame" } },
      { id: '4:102:42', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '4:102:43', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:102:44', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '4:102:45', arabic: "بِكُمْ", transliteration: "bikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '4:102:46', arabic: "أَذًۭى", transliteration: "adhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any trouble", ur: "any trouble" } },
      { id: '4:102:47', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(because) of", ur: "(because) of" } },
      { id: '4:102:48', arabic: "مَّطَرٍ", transliteration: "maṭarin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "rain", ur: "rain" } },
      { id: '4:102:49', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:102:50', arabic: "كُنتُم", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '4:102:51', arabic: "مَّرْضَىٰٓ", transliteration: "marḍā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sick", ur: "sick" } },
      { id: '4:102:52', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:102:53', arabic: "تَضَعُوٓا۟", transliteration: "taḍaʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you lay down", ur: "تم lay down" } },
      { id: '4:102:54', arabic: "أَسْلِحَتَكُمْ ۖ", transliteration: "asliḥatakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your arms", ur: "your arms" } },
      { id: '4:102:55', arabic: "وَخُذُوا۟", transliteration: "wakhudhū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but take", ur: "لیکن take" } },
      { id: '4:102:56', arabic: "حِذْرَكُمْ ۗ", transliteration: "ḥidh'rakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your precautions", ur: "your precautions" } },
      { id: '4:102:57', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:102:58', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:102:59', arabic: "أَعَدَّ", transliteration: "aʿadda", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has prepared", ur: "has prepared" } },
      { id: '4:102:60', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the disbelievers", ur: "for the کافر" } },
      { id: '4:102:61', arabic: "عَذَابًۭا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '4:102:62', arabic: "مُّهِينًۭا", transliteration: "muhīnan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humiliating", ur: "humiliating" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 21, to: 22, label: 'نفی + فعل' },
        { from: 30, to: 31, label: 'فعل + فاعل' },
        { from: 33, to: 34, label: 'جار + مجرور' },
        { from: 45, to: 46, label: 'جار + مجرور' },
        { from: 50, to: 51, label: 'فعل + فاعل' },
        { from: 53, to: 54, label: 'فعل + فاعل' },
        { from: 57, to: 58, label: 'فعل + فاعل' },
        { from: 60, to: 61, label: 'جار + مجرور' }
      ],
    },
  },
  103: {
    text: "فَإِذَا قَضَيْتُمُ ٱلصَّلَوٰةَ فَٱذْكُرُوا۟ ٱللَّهَ قِيَـٰمًۭا وَقُعُودًۭا وَعَلَىٰ جُنُوبِكُمْ ۚ فَإِذَا ٱطْمَأْنَنتُمْ فَأَقِيمُوا۟ ٱلصَّلَوٰةَ ۚ إِنَّ ٱلصَّلَوٰةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَـٰبًۭا مَّوْقُوتًۭا",
    translation: {
      en: "",
      ur: "پھر جب تم نماز تمام کرچکو تو کھڑے اور بیٹھے اور لیٹے (ہر حالت میں) خدا کو یاد کرو پھر جب خوف جاتا رہے تو (اس طرح سے) نماز پڑھو (جس طرح امن کی حالت میں پڑھتے ہو) بےشک نماز کا مومنوں پر اوقات (مقررہ) میں ادا کرنا فرض ہے",
    },
    words: [
      { id: '4:103:1', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '4:103:2', arabic: "قَضَيْتُمُ", transliteration: "qaḍaytumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (have) finished", ur: "تم (have) finished" } },
      { id: '4:103:3', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '4:103:4', arabic: "فَٱذْكُرُوا۟", transliteration: "fa-udh'kurū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then remember", ur: "پھر remember" } },
      { id: '4:103:5', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:103:6', arabic: "قِيَـٰمًۭا", transliteration: "qiyāman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "standing", ur: "standing" } },
      { id: '4:103:7', arabic: "وَقُعُودًۭا", transliteration: "waquʿūdan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and sitting", ur: "اور sitting" } },
      { id: '4:103:8', arabic: "وَعَلَىٰ", transliteration: "waʿalā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (lying) on", ur: "اور (lying) پر" } },
      { id: '4:103:9', arabic: "جُنُوبِكُمْ ۚ", transliteration: "junūbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your sides", ur: "your sides" } },
      { id: '4:103:10', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '4:103:11', arabic: "ٱطْمَأْنَنتُمْ", transliteration: "iṭ'manantum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are secure", ur: "تم are secure" } },
      { id: '4:103:12', arabic: "فَأَقِيمُوا۟", transliteration: "fa-aqīmū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then establish", ur: "پھر establish" } },
      { id: '4:103:13', arabic: "ٱلصَّلَوٰةَ ۚ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the (regular) prayer", ur: "the (regular) نماز" } },
      { id: '4:103:14', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:103:15', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '4:103:16', arabic: "كَانَتْ", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:103:17', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '4:103:18', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:103:19', arabic: "كِتَـٰبًۭا", transliteration: "kitāban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prescribed", ur: "prescribed" } },
      { id: '4:103:20', arabic: "مَّوْقُوتًۭا", transliteration: "mawqūtan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(at) fixed times", ur: "(at) fixed times" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  104: {
    text: "وَلَا تَهِنُوا۟ فِى ٱبْتِغَآءِ ٱلْقَوْمِ ۖ إِن تَكُونُوا۟ تَأْلَمُونَ فَإِنَّهُمْ يَأْلَمُونَ كَمَا تَأْلَمُونَ ۖ وَتَرْجُونَ مِنَ ٱللَّهِ مَا لَا يَرْجُونَ ۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًا",
    translation: {
      en: "",
      ur: "اور کفار کا پیچھا کرنے میں سستی نہ کرنا اگر تم بےآرام ہوتے ہو تو جس طرح تم بےآرام ہوتے ہو اسی طرح وہ بھی بےآرام ہوتے ہیں اور تم خدا سے ایسی ایسی امیدیں رکھتے ہو جو وہ نہیں رکھ سکتے اور خدا سب کچھ جانتا اور (بڑی) حکمت والا ہے",
    },
    words: [
      { id: '4:104:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:104:2', arabic: "تَهِنُوا۟", transliteration: "tahinū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be weak", ur: "be weak" } },
      { id: '4:104:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:104:4', arabic: "ٱبْتِغَآءِ", transliteration: "ib'tighāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "pursuit", ur: "pursuit" } },
      { id: '4:104:5', arabic: "ٱلْقَوْمِ ۖ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(of) the people", ur: "(of) the لوگ" } },
      { id: '4:104:6', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '4:104:7', arabic: "تَكُونُوا۟", transliteration: "takūnū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "you are", ur: "تم are" } },
      { id: '4:104:8', arabic: "تَأْلَمُونَ", transliteration: "talamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "suffering", ur: "suffering" } },
      { id: '4:104:9', arabic: "فَإِنَّهُمْ", transliteration: "fa-innahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed, they", ur: "پھر بیشک, وہ لوگ" } },
      { id: '4:104:10', arabic: "يَأْلَمُونَ", transliteration: "yalamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are (also) suffering", ur: "are (also) suffering" } },
      { id: '4:104:11', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like what", ur: "like کیا" } },
      { id: '4:104:12', arabic: "تَأْلَمُونَ ۖ", transliteration: "talamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are suffering", ur: "تم are suffering" } },
      { id: '4:104:13', arabic: "وَتَرْجُونَ", transliteration: "watarjūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while you (have) hope", ur: "while تم (have) hope" } },
      { id: '4:104:14', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:104:15', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:104:16', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:104:17', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:104:18', arabic: "يَرْجُونَ ۗ", transliteration: "yarjūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they hope", ur: "وہ لوگ hope" } },
      { id: '4:104:19', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:104:20', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:104:21', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } },
      { id: '4:104:22', arabic: "حَكِيمًا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'نفی + فعل' }
      ],
    },
  },
  105: {
    text: "إِنَّآ أَنزَلْنَآ إِلَيْكَ ٱلْكِتَـٰبَ بِٱلْحَقِّ لِتَحْكُمَ بَيْنَ ٱلنَّاسِ بِمَآ أَرَىٰكَ ٱللَّهُ ۚ وَلَا تَكُن لِّلْخَآئِنِينَ خَصِيمًۭا",
    translation: {
      en: "",
      ur: "(اے پیغمبر) ہم نے تم پر سچی کتاب نازل کی ہے تاکہ خدا کی ہدایت کے مطابق لوگوں کے مقدمات میں فیصلہ کرو اور (دیکھو) دغابازوں کی حمایت میں کبھی بحث نہ کرنا",
    },
    words: [
      { id: '4:105:1', arabic: "إِنَّآ", transliteration: "innā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:105:2', arabic: "أَنزَلْنَآ", transliteration: "anzalnā", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "We (have) sent down", ur: "ہم (have) sent down" } },
      { id: '4:105:3', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:105:4', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:105:5', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the truth", ur: "ساتھ the سچ" } },
      { id: '4:105:6', arabic: "لِتَحْكُمَ", transliteration: "litaḥkuma", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that you may judge", ur: "so وہ تم may judge" } },
      { id: '4:105:7', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '4:105:8', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '4:105:9', arabic: "بِمَآ", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with what", ur: "ساتھ کیا" } },
      { id: '4:105:10', arabic: "أَرَىٰكَ", transliteration: "arāka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has shown you", ur: "has shown تم" } },
      { id: '4:105:11', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:105:12', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:105:13', arabic: "تَكُن", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '4:105:14', arabic: "لِّلْخَآئِنِينَ", transliteration: "lil'khāinīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "for the deceitful", ur: "for the deceitful" } },
      { id: '4:105:15', arabic: "خَصِيمًۭا", transliteration: "khaṣīman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a pleader", ur: "a pleader" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  106: {
    text: "وَٱسْتَغْفِرِ ٱللَّهَ ۖ إِنَّ ٱللَّهَ كَانَ غَفُورًۭا رَّحِيمًۭا",
    translation: {
      en: "",
      ur: "اور خدا سے بخشش مانگنا بےشک خدا بخشنے والا مہربان ہے",
    },
    words: [
      { id: '4:106:1', arabic: "وَٱسْتَغْفِرِ", transliteration: "wa-is'taghfiri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And seek forgiveness", ur: "اور seek مغفرت" } },
      { id: '4:106:2', arabic: "ٱللَّهَ ۖ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:106:3', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:106:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:106:5', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:106:6', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:106:7', arabic: "رَّحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  107: {
    text: "وَلَا تُجَـٰدِلْ عَنِ ٱلَّذِينَ يَخْتَانُونَ أَنفُسَهُمْ ۚ إِنَّ ٱللَّهَ لَا يُحِبُّ مَن كَانَ خَوَّانًا أَثِيمًۭا",
    translation: {
      en: "",
      ur: "اور لوگ اپنے ہم جنسوں کی خیانت کرتے ہیں ان کی طرف سے بحث نہ کرنا کیونکہ خدا خائن اور مرتکب جرائم کو دوست نہیں رکھتا",
    },
    words: [
      { id: '4:107:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:107:2', arabic: "تُجَـٰدِلْ", transliteration: "tujādil", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "argue", ur: "argue" } },
      { id: '4:107:3', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '4:107:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:107:5', arabic: "يَخْتَانُونَ", transliteration: "yakhtānūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "deceive", ur: "deceive" } },
      { id: '4:107:6', arabic: "أَنفُسَهُمْ ۚ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '4:107:7', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:107:8', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:107:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '4:107:10', arabic: "يُحِبُّ", transliteration: "yuḥibbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "love", ur: "love" } },
      { id: '4:107:11', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(the one) who", ur: "(the one) جو" } },
      { id: '4:107:12', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:107:13', arabic: "خَوَّانًا", transliteration: "khawwānan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "treacherous", ur: "treacherous" } },
      { id: '4:107:14', arabic: "أَثِيمًۭا", transliteration: "athīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(and) sinful", ur: "(اور) sinful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  108: {
    text: "يَسْتَخْفُونَ مِنَ ٱلنَّاسِ وَلَا يَسْتَخْفُونَ مِنَ ٱللَّهِ وَهُوَ مَعَهُمْ إِذْ يُبَيِّتُونَ مَا لَا يَرْضَىٰ مِنَ ٱلْقَوْلِ ۚ وَكَانَ ٱللَّهُ بِمَا يَعْمَلُونَ مُحِيطًا",
    translation: {
      en: "",
      ur: "یہ لوگوں سے تو چھپتے ہیں اور خدا سے نہیں چھپتے حالانکہ جب وہ راتوں کو ایسی باتوں کے مشورے کیا کرتے ہیں جن کو وہ پسند نہیں کرتا ان کے ساتھ ہوا کرتا ہے اور خدا ان کے (تمام) کاموں پر احاطہ کئے ہوئے ہے",
    },
    words: [
      { id: '4:108:1', arabic: "يَسْتَخْفُونَ", transliteration: "yastakhfūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They seek to hide", ur: "وہ لوگ seek کو hide" } },
      { id: '4:108:2', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:108:3', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '4:108:4', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '4:108:5', arabic: "يَسْتَخْفُونَ", transliteration: "yastakhfūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(can) they hide", ur: "(can) وہ لوگ hide" } },
      { id: '4:108:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:108:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:108:8', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He", ur: "اور وہ" } },
      { id: '4:108:9', arabic: "مَعَهُمْ", transliteration: "maʿahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) with them", ur: "(is) ساتھ them" } },
      { id: '4:108:10', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '4:108:11', arabic: "يُبَيِّتُونَ", transliteration: "yubayyitūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they plot by night", ur: "وہ لوگ plot by رات" } },
      { id: '4:108:12', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:108:13', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:108:14', arabic: "يَرْضَىٰ", transliteration: "yarḍā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(does) he approve", ur: "(does) وہ approve" } },
      { id: '4:108:15', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:108:16', arabic: "ٱلْقَوْلِ ۚ", transliteration: "l-qawli", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "the word", ur: "the word" } },
      { id: '4:108:17', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:108:18', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:108:19', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '4:108:20', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "they do ", ur: "وہ لوگ do " } },
      { id: '4:108:21', arabic: "مُحِيطًا", transliteration: "muḥīṭan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Encompassing", ur: "سب-Encompassing" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  109: {
    text: "هَـٰٓأَنتُمْ هَـٰٓؤُلَآءِ جَـٰدَلْتُمْ عَنْهُمْ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا فَمَن يُجَـٰدِلُ ٱللَّهَ عَنْهُمْ يَوْمَ ٱلْقِيَـٰمَةِ أَم مَّن يَكُونُ عَلَيْهِمْ وَكِيلًۭا",
    translation: {
      en: "",
      ur: "بھلا تم لوگ دنیا کی زندگی میں تو ان کی طرف سے بحث کر لیتے ہو قیامت کو ان کی طرف سے خدا کے ساتھ کون جھگڑے گا اور کون ان کا وکیل بنے گا؟",
    },
    words: [
      { id: '4:109:1', arabic: "هَـٰٓأَنتُمْ", transliteration: "hāantum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Here you are ", ur: "Here تم are " } },
      { id: '4:109:2', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:109:3', arabic: "جَـٰدَلْتُمْ", transliteration: "jādaltum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[you] argue", ur: "[تم] argue" } },
      { id: '4:109:4', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:109:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:109:6', arabic: "ٱلْحَيَوٰةِ", transliteration: "l-ḥayati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '4:109:7', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '4:109:8', arabic: "فَمَن", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but who", ur: "لیکن جو" } },
      { id: '4:109:9', arabic: "يُجَـٰدِلُ", transliteration: "yujādilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will argue", ur: "will argue" } },
      { id: '4:109:10', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) Allah", ur: "(ساتھ) اللہ" } },
      { id: '4:109:11', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:109:12', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '4:109:13', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] Resurrection", ur: "(of) [the] Resurrection" } },
      { id: '4:109:14', arabic: "أَم", transliteration: "am", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:109:15', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:109:16', arabic: "يَكُونُ", transliteration: "yakūnu", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "will be", ur: "will be" } },
      { id: '4:109:17', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[over them]", ur: "[اوپر them]" } },
      { id: '4:109:18', arabic: "وَكِيلًۭا", transliteration: "wakīlan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(their) defender", ur: "(their) defender" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' }
      ],
    },
  },
  110: {
    text: "وَمَن يَعْمَلْ سُوٓءًا أَوْ يَظْلِمْ نَفْسَهُۥ ثُمَّ يَسْتَغْفِرِ ٱللَّهَ يَجِدِ ٱللَّهَ غَفُورًۭا رَّحِيمًۭا",
    translation: {
      en: "",
      ur: "اور جو شخص کوئی برا کام کر بیٹھے یا اپنے حق میں ظلم کرلے پھر خدا سے بخشش مانگے تو خدا کو بخشنے والا اور مہربان پائے گا",
    },
    words: [
      { id: '4:110:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:110:2', arabic: "يَعْمَلْ", transliteration: "yaʿmal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '4:110:3', arabic: "سُوٓءًا", transliteration: "sūan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evil", ur: "برا" } },
      { id: '4:110:4', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:110:5', arabic: "يَظْلِمْ", transliteration: "yaẓlim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wrongs", ur: "wrongs" } },
      { id: '4:110:6', arabic: "نَفْسَهُۥ", transliteration: "nafsahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "his soul", ur: "his روح" } },
      { id: '4:110:7', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:110:8', arabic: "يَسْتَغْفِرِ", transliteration: "yastaghfiri", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seeks forgiveness", ur: "seeks مغفرت" } },
      { id: '4:110:9', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:110:10', arabic: "يَجِدِ", transliteration: "yajidi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he will find", ur: "وہ will find" } },
      { id: '4:110:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:110:12', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:110:13', arabic: "رَّحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  111: {
    text: "وَمَن يَكْسِبْ إِثْمًۭا فَإِنَّمَا يَكْسِبُهُۥ عَلَىٰ نَفْسِهِۦ ۚ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "اور جو کوئی گناہ کرتا ہے تو اس کا وبال اسی پر ہے اور خدا جاننے والا (اور) حکمت والا ہے",
    },
    words: [
      { id: '4:111:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:111:2', arabic: "يَكْسِبْ", transliteration: "yaksib", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earns", ur: "earns" } },
      { id: '4:111:3', arabic: "إِثْمًۭا", transliteration: "ith'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sin", ur: "sin" } },
      { id: '4:111:4', arabic: "فَإِنَّمَا", transliteration: "fa-innamā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then only", ur: "پھر صرف" } },
      { id: '4:111:5', arabic: "يَكْسِبُهُۥ", transliteration: "yaksibuhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he earns it", ur: "وہ earns it" } },
      { id: '4:111:6', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '4:111:7', arabic: "نَفْسِهِۦ ۚ", transliteration: "nafsihi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "his soul", ur: "his روح" } },
      { id: '4:111:8', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:111:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:111:10', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } },
      { id: '4:111:11', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  112: {
    text: "وَمَن يَكْسِبْ خَطِيٓـَٔةً أَوْ إِثْمًۭا ثُمَّ يَرْمِ بِهِۦ بَرِيٓـًۭٔا فَقَدِ ٱحْتَمَلَ بُهْتَـٰنًۭا وَإِثْمًۭا مُّبِينًۭا",
    translation: {
      en: "",
      ur: "اور جو شخص کوئی قصور یا گناہ تو خود کرے لیکن اس سے کسی بےگناہ کو مہتم کردے تو اس نے بہتان اور صریح گناہ کا بوجھ اپنے سر پر رکھا",
    },
    words: [
      { id: '4:112:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:112:2', arabic: "يَكْسِبْ", transliteration: "yaksib", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earns", ur: "earns" } },
      { id: '4:112:3', arabic: "خَطِيٓـَٔةً", transliteration: "khaṭīatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a fault", ur: "a fault" } },
      { id: '4:112:4', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:112:5', arabic: "إِثْمًۭا", transliteration: "ith'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sin", ur: "a sin" } },
      { id: '4:112:6', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:112:7', arabic: "يَرْمِ", transliteration: "yarmi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "throws", ur: "throws" } },
      { id: '4:112:8', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '4:112:9', arabic: "بَرِيٓـًۭٔا", transliteration: "barīan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(on) an innocent", ur: "(پر) an innocent" } },
      { id: '4:112:10', arabic: "فَقَدِ", transliteration: "faqadi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then surely", ur: "پھر یقیناً" } },
      { id: '4:112:11', arabic: "ٱحْتَمَلَ", transliteration: "iḥ'tamala", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he (has) burdened (himself)", ur: "وہ (has) burdened (himself)" } },
      { id: '4:112:12', arabic: "بُهْتَـٰنًۭا", transliteration: "buh'tānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) a slander", ur: "(ساتھ) a slander" } },
      { id: '4:112:13', arabic: "وَإِثْمًۭا", transliteration: "wa-ith'man", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a sin", ur: "اور a sin" } },
      { id: '4:112:14', arabic: "مُّبِينًۭا", transliteration: "mubīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  113: {
    text: "وَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكَ وَرَحْمَتُهُۥ لَهَمَّت طَّآئِفَةٌۭ مِّنْهُمْ أَن يُضِلُّوكَ وَمَا يُضِلُّونَ إِلَّآ أَنفُسَهُمْ ۖ وَمَا يَضُرُّونَكَ مِن شَىْءٍۢ ۚ وَأَنزَلَ ٱللَّهُ عَلَيْكَ ٱلْكِتَـٰبَ وَٱلْحِكْمَةَ وَعَلَّمَكَ مَا لَمْ تَكُن تَعْلَمُ ۚ وَكَانَ فَضْلُ ٱللَّهِ عَلَيْكَ عَظِيمًۭا",
    translation: {
      en: "",
      ur: "اور اگر تم پر خدا کا فضل اور مہربانی نہ ہوتی تو ان میں سے ایک جماعت تم کو بہکانے کا قصد کر ہی چکی تھی اور یہ اپنے سوا (کسی کو) بہکا نہیں سکتے اور نہ تمہارا کچھ بگاڑ سکتے ہیں اور خدا نے تم پر کتاب اور دانائی نازل فرمائی ہے اور تمہیں وہ باتیں سکھائی ہیں جو تم جانتے نہیں تھے اور تم پر خدا کا بڑا فضل ہے",
    },
    words: [
      { id: '4:113:1', arabic: "وَلَوْلَا", transliteration: "walawlā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if not", ur: "اور if نہیں" } },
      { id: '4:113:2', arabic: "فَضْلُ", transliteration: "faḍlu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(for the) Grace", ur: "(for the) Grace" } },
      { id: '4:113:3', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:113:4', arabic: "عَلَيْكَ", transliteration: "ʿalayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '4:113:5', arabic: "وَرَحْمَتُهُۥ", transliteration: "waraḥmatuhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Mercy ", ur: "اور His رحمت " } },
      { id: '4:113:6', arabic: "لَهَمَّت", transliteration: "lahammat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely (had) resolved", ur: "یقیناً (had) resolved" } },
      { id: '4:113:7', arabic: "طَّآئِفَةٌۭ", transliteration: "ṭāifatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a group", ur: "a group" } },
      { id: '4:113:8', arabic: "مِّنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '4:113:9', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:113:10', arabic: "يُضِلُّوكَ", transliteration: "yuḍillūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "mislead you", ur: "mislead تم" } },
      { id: '4:113:11', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But not", ur: "لیکن نہیں" } },
      { id: '4:113:12', arabic: "يُضِلُّونَ", transliteration: "yuḍillūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they mislead", ur: "وہ لوگ mislead" } },
      { id: '4:113:13', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:113:14', arabic: "أَنفُسَهُمْ ۖ", transliteration: "anfusahum", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '4:113:15', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:113:16', arabic: "يَضُرُّونَكَ", transliteration: "yaḍurrūnaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will harm you", ur: "وہ لوگ will harm تم" } },
      { id: '4:113:17', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:113:18', arabic: "شَىْءٍۢ ۚ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '4:113:19', arabic: "وَأَنزَلَ", transliteration: "wa-anzala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ز ل", meaning: { en: "And has sent down", ur: "اور has sent down" } },
      { id: '4:113:20', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:113:21', arabic: "عَلَيْكَ", transliteration: "ʿalayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:113:22', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:113:23', arabic: "وَٱلْحِكْمَةَ", transliteration: "wal-ḥik'mata", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [the] Wisdom", ur: "اور [the] Wisdom" } },
      { id: '4:113:24', arabic: "وَعَلَّمَكَ", transliteration: "waʿallamaka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and taught you", ur: "اور taught تم" } },
      { id: '4:113:25', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:113:26', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:113:27', arabic: "تَكُن", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you did", ur: "تم did" } },
      { id: '4:113:28', arabic: "تَعْلَمُ ۚ", transliteration: "taʿlamu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "know", ur: "جاننا" } },
      { id: '4:113:29', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:113:30', arabic: "فَضْلُ", transliteration: "faḍlu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(the) Grace", ur: "(the) Grace" } },
      { id: '4:113:31', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:113:32', arabic: "عَلَيْكَ", transliteration: "ʿalayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '4:113:33', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'مضاف + مضاف إليه' },
        { from: 26, to: 27, label: 'نفی + فعل' },
        { from: 32, to: 33, label: 'موصوف + صفت' }
      ],
    },
  },
  114: {
    text: "۞ لَّا خَيْرَ فِى كَثِيرٍۢ مِّن نَّجْوَىٰهُمْ إِلَّا مَنْ أَمَرَ بِصَدَقَةٍ أَوْ مَعْرُوفٍ أَوْ إِصْلَـٰحٍۭ بَيْنَ ٱلنَّاسِ ۚ وَمَن يَفْعَلْ ذَٰلِكَ ٱبْتِغَآءَ مَرْضَاتِ ٱللَّهِ فَسَوْفَ نُؤْتِيهِ أَجْرًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "ان لوگوں کی بہت سی مشورتیں اچھی نہیں ہاں (اس شخص کی مشورت اچھی ہوسکتی ہے) جو خیرات یا نیک بات یا لوگوں میں صلح کرنے کو کہے اور جو ایسے کام خدا کی خوشنودی حاصل کرنے کے لئے کرے گا تو ہم اس کو بڑا ثواب دیں گے",
    },
    words: [
      { id: '4:114:1', arabic: "۞ لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(There is) no", ur: "(There is) نہیں" } },
      { id: '4:114:2', arabic: "خَيْرَ", transliteration: "khayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '4:114:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:114:4', arabic: "كَثِيرٍۢ", transliteration: "kathīrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "much", ur: "much" } },
      { id: '4:114:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:114:6', arabic: "نَّجْوَىٰهُمْ", transliteration: "najwāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their secret talk", ur: "their secret talk" } },
      { id: '4:114:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:114:8', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(he) who", ur: "(وہ) جو" } },
      { id: '4:114:9', arabic: "أَمَرَ", transliteration: "amara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "orders", ur: "orders" } },
      { id: '4:114:10', arabic: "بِصَدَقَةٍ", transliteration: "biṣadaqatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "charity", ur: "charity" } },
      { id: '4:114:11', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:114:12', arabic: "مَعْرُوفٍ", transliteration: "maʿrūfin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "kindness", ur: "kindness" } },
      { id: '4:114:13', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:114:14', arabic: "إِصْلَـٰحٍۭ", transliteration: "iṣ'lāḥin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "conciliation", ur: "conciliation" } },
      { id: '4:114:15', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '4:114:16', arabic: "ٱلنَّاسِ ۚ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '4:114:17', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And who", ur: "اور جو" } },
      { id: '4:114:18', arabic: "يَفْعَلْ", transliteration: "yafʿal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '4:114:19', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:114:20', arabic: "ٱبْتِغَآءَ", transliteration: "ib'tighāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seeking", ur: "seeking" } },
      { id: '4:114:21', arabic: "مَرْضَاتِ", transliteration: "marḍāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "pleasure", ur: "pleasure" } },
      { id: '4:114:22', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:114:23', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then soon", ur: "پھر soon" } },
      { id: '4:114:24', arabic: "نُؤْتِيهِ", transliteration: "nu'tīhi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will give him", ur: "ہم will give him" } },
      { id: '4:114:25', arabic: "أَجْرًا", transliteration: "ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reward", ur: "a ثواب" } },
      { id: '4:114:26', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'موصوف + صفت' }
      ],
    },
  },
  115: {
    text: "وَمَن يُشَاقِقِ ٱلرَّسُولَ مِنۢ بَعْدِ مَا تَبَيَّنَ لَهُ ٱلْهُدَىٰ وَيَتَّبِعْ غَيْرَ سَبِيلِ ٱلْمُؤْمِنِينَ نُوَلِّهِۦ مَا تَوَلَّىٰ وَنُصْلِهِۦ جَهَنَّمَ ۖ وَسَآءَتْ مَصِيرًا",
    translation: {
      en: "",
      ur: "اور جو شخص سیدھا رستہ معلوم ہونے کے بعد پیغمبر کی مخالف کرے اور مومنوں کے رستے کے سوا اور رستے پر چلے تو جدھر وہ چلتا ہے ہم اسے ادھر ہی چلنے دیں گے اور (قیامت کے دن) جہنم میں داخل کریں گے اور وہ بری جگہ ہے",
    },
    words: [
      { id: '4:115:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:115:2', arabic: "يُشَاقِقِ", transliteration: "yushāqiqi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "opposes", ur: "opposes" } },
      { id: '4:115:3', arabic: "ٱلرَّسُولَ", transliteration: "l-rasūla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '4:115:4', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:115:5', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '4:115:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:115:7', arabic: "تَبَيَّنَ", transliteration: "tabayyana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(has) become clear", ur: "(has) become clear" } },
      { id: '4:115:8', arabic: "لَهُ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '4:115:9', arabic: "ٱلْهُدَىٰ", transliteration: "l-hudā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the guidance", ur: "(of) the guidance" } },
      { id: '4:115:10', arabic: "وَيَتَّبِعْ", transliteration: "wayattabiʿ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he follows", ur: "اور وہ follows" } },
      { id: '4:115:11', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '4:115:12', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:115:13', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the believers", ur: "(of) the مومنین" } },
      { id: '4:115:14', arabic: "نُوَلِّهِۦ", transliteration: "nuwallihi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will turn him", ur: "ہم will turn him" } },
      { id: '4:115:15', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(to) what", ur: "(کو) کیا" } },
      { id: '4:115:16', arabic: "تَوَلَّىٰ", transliteration: "tawallā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he (has) turned", ur: "وہ (has) turned" } },
      { id: '4:115:17', arabic: "وَنُصْلِهِۦ", transliteration: "wanuṣ'lihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We will burn him", ur: "اور ہم will burn him" } },
      { id: '4:115:18', arabic: "جَهَنَّمَ ۖ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) Hell", ur: "(میں) جہنم" } },
      { id: '4:115:19', arabic: "وَسَآءَتْ", transliteration: "wasāat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and evil it is", ur: "اور برا it is" } },
      { id: '4:115:20', arabic: "مَصِيرًا", transliteration: "maṣīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a destination", ur: "(as) a destination" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'موصول + صلة' }
      ],
    },
  },
  116: {
    text: "إِنَّ ٱللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِۦ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَآءُ ۚ وَمَن يُشْرِكْ بِٱللَّهِ فَقَدْ ضَلَّ ضَلَـٰلًۢا بَعِيدًا",
    translation: {
      en: "",
      ur: "خدا اس کے گناہ کو نہیں بخشے گا کہ کسی کو اس کا شریک بنایا جائے اور اس کے سوا (اور گناہ) جس کو چاہیے گا بخش دے گا۔ اور جس نے خدا کے ساتھ شریک بنایا وہ رستے سے دور جا پڑا",
    },
    words: [
      { id: '4:116:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:116:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:116:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "does not", ur: "does نہیں" } },
      { id: '4:116:4', arabic: "يَغْفِرُ", transliteration: "yaghfiru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "forgive", ur: "forgive" } },
      { id: '4:116:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:116:6', arabic: "يُشْرَكَ", transliteration: "yush'raka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "partners be associated", ur: "partners be associated" } },
      { id: '4:116:7', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Him", ur: "ساتھ Him" } },
      { id: '4:116:8', arabic: "وَيَغْفِرُ", transliteration: "wayaghfiru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but He forgives", ur: "لیکن وہ forgives" } },
      { id: '4:116:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "[what]", ur: "[کیا]" } },
      { id: '4:116:10', arabic: "دُونَ", transliteration: "dūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '4:116:11', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:116:12', arabic: "لِمَن", transliteration: "liman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for whom", ur: "for whom" } },
      { id: '4:116:13', arabic: "يَشَآءُ ۚ", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '4:116:14', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:116:15', arabic: "يُشْرِكْ", transliteration: "yush'rik", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "associates partners", ur: "associates partners" } },
      { id: '4:116:16', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Allah", ur: "ساتھ اللہ" } },
      { id: '4:116:17', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then surely", ur: "پھر یقیناً" } },
      { id: '4:116:18', arabic: "ضَلَّ", transliteration: "ḍalla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he lost (the) way", ur: "وہ lost (the) راستہ" } },
      { id: '4:116:19', arabic: "ضَلَـٰلًۢا", transliteration: "ḍalālan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "straying", ur: "straying" } },
      { id: '4:116:20', arabic: "بَعِيدًا", transliteration: "baʿīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far away", ur: "far away" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  117: {
    text: "إِن يَدْعُونَ مِن دُونِهِۦٓ إِلَّآ إِنَـٰثًۭا وَإِن يَدْعُونَ إِلَّا شَيْطَـٰنًۭا مَّرِيدًۭا",
    translation: {
      en: "",
      ur: "یہ جو خدا کے سوا پرستش کرتے ہیں تو عورتوں کی اور پکارتے ہیں تو شیطان کی سرکش ہی کو",
    },
    words: [
      { id: '4:117:1', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '4:117:2', arabic: "يَدْعُونَ", transliteration: "yadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they invoke", ur: "وہ لوگ invoke" } },
      { id: '4:117:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:117:4', arabic: "دُونِهِۦٓ", transliteration: "dūnihi", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Him", ur: "besides Him" } },
      { id: '4:117:5', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '4:117:6', arabic: "إِنَـٰثًۭا", transliteration: "ināthan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "female (deities)", ur: "female (deities)" } },
      { id: '4:117:7', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:117:8', arabic: "يَدْعُونَ", transliteration: "yadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they invoke", ur: "وہ لوگ invoke" } },
      { id: '4:117:9', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:117:10', arabic: "شَيْطَـٰنًۭا", transliteration: "shayṭānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Shaitaan ", ur: "Shaitaan " } },
      { id: '4:117:11', arabic: "مَّرِيدًۭا", transliteration: "marīdan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "rebellious", ur: "rebellious" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  118: {
    text: "لَّعَنَهُ ٱللَّهُ ۘ وَقَالَ لَأَتَّخِذَنَّ مِنْ عِبَادِكَ نَصِيبًۭا مَّفْرُوضًۭا",
    translation: {
      en: "",
      ur: "جس پر خدا نے لعنت کی ہے (جو خدا سے) کہنے لگا میں تیرے بندوں سے (غیر خدا کی نذر دلوا کر مال کا) ایک مقرر حصہ لے لیا کروں گا۔",
    },
    words: [
      { id: '4:118:1', arabic: "لَّعَنَهُ", transliteration: "laʿanahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He was cursed", ur: "وہ was cursed" } },
      { id: '4:118:2', arabic: "ٱللَّهُ ۘ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "by Allah", ur: "by اللہ" } },
      { id: '4:118:3', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and he said", ur: "اور وہ کہا" } },
      { id: '4:118:4', arabic: "لَأَتَّخِذَنَّ", transliteration: "la-attakhidhanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will surely take", ur: "میں will یقیناً take" } },
      { id: '4:118:5', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:118:6', arabic: "عِبَادِكَ", transliteration: "ʿibādika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your slaves", ur: "your slaves" } },
      { id: '4:118:7', arabic: "نَصِيبًۭا", transliteration: "naṣīban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a portion", ur: "a portion" } },
      { id: '4:118:8', arabic: "مَّفْرُوضًۭا", transliteration: "mafrūḍan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "appointed", ur: "appointed" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  119: {
    text: "وَلَأُضِلَّنَّهُمْ وَلَأُمَنِّيَنَّهُمْ وَلَـَٔامُرَنَّهُمْ فَلَيُبَتِّكُنَّ ءَاذَانَ ٱلْأَنْعَـٰمِ وَلَـَٔامُرَنَّهُمْ فَلَيُغَيِّرُنَّ خَلْقَ ٱللَّهِ ۚ وَمَن يَتَّخِذِ ٱلشَّيْطَـٰنَ وَلِيًّۭا مِّن دُونِ ٱللَّهِ فَقَدْ خَسِرَ خُسْرَانًۭا مُّبِينًۭا",
    translation: {
      en: "",
      ur: "اور ان کو گمراہ کرتا اور امیدیں دلاتا ہروں گا اور یہ سکھاتا رہوں گا کہ جانوروں کے کان چیرتے رہیں اور (یہ بھی) کہتا رہوں گا کہ وہ خدا کی بنائی ہوئی صورتوں کو بدلتے رہیں اور جس شخص نے خدا کو چھوڑ کر شیطان کو دوست بنایا اور وہ صریح نقصان میں پڑ گیا",
    },
    words: [
      { id: '4:119:1', arabic: "وَلَأُضِلَّنَّهُمْ", transliteration: "wala-uḍillannahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And I will surely mislead them", ur: "اور میں will یقیناً mislead them" } },
      { id: '4:119:2', arabic: "وَلَأُمَنِّيَنَّهُمْ", transliteration: "wala-umanniyannahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and surely arouse desires in them", ur: "اور یقیناً arouse desires میں them" } },
      { id: '4:119:3', arabic: "وَلَـَٔامُرَنَّهُمْ", transliteration: "walaāmurannahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and surely I will order them", ur: "اور یقیناً میں will order them" } },
      { id: '4:119:4', arabic: "فَلَيُبَتِّكُنَّ", transliteration: "falayubattikunna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so they will surely cut off", ur: "so وہ لوگ will یقیناً cut off" } },
      { id: '4:119:5', arabic: "ءَاذَانَ", transliteration: "ādhāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) ears", ur: "(the) ears" } },
      { id: '4:119:6', arabic: "ٱلْأَنْعَـٰمِ", transliteration: "l-anʿāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the cattle", ur: "(of) the cattle" } },
      { id: '4:119:7', arabic: "وَلَـَٔامُرَنَّهُمْ", transliteration: "walaāmurannahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and surely I will order them", ur: "اور یقیناً میں will order them" } },
      { id: '4:119:8', arabic: "فَلَيُغَيِّرُنَّ", transliteration: "falayughayyirunna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so they will surely change", ur: "so وہ لوگ will یقیناً change" } },
      { id: '4:119:9', arabic: "خَلْقَ", transliteration: "khalqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) creation", ur: "(the) تخلیق" } },
      { id: '4:119:10', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:119:11', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:119:12', arabic: "يَتَّخِذِ", transliteration: "yattakhidhi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "takes", ur: "takes" } },
      { id: '4:119:13', arabic: "ٱلشَّيْطَـٰنَ", transliteration: "l-shayṭāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '4:119:14', arabic: "وَلِيًّۭا", transliteration: "waliyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(as) a friend", ur: "(as) a friend" } },
      { id: '4:119:15', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:119:16', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '4:119:17', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:119:18', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then surely", ur: "پھر یقیناً" } },
      { id: '4:119:19', arabic: "خَسِرَ", transliteration: "khasira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he (has) lost ", ur: "وہ (has) lost " } },
      { id: '4:119:20', arabic: "خُسْرَانًۭا", transliteration: "khus'rānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a loss", ur: "a loss" } },
      { id: '4:119:21', arabic: "مُّبِينًۭا", transliteration: "mubīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  120: {
    text: "يَعِدُهُمْ وَيُمَنِّيهِمْ ۖ وَمَا يَعِدُهُمُ ٱلشَّيْطَـٰنُ إِلَّا غُرُورًا",
    translation: {
      en: "",
      ur: "وہ ان کو وعدے دیتا رہا اور امیدیں دلاتا ہے اور جو کچھ شیطان انہیں وعدے دیتا ہے جو دھوکا ہی دھوکا ہے",
    },
    words: [
      { id: '4:120:1', arabic: "يَعِدُهُمْ", transliteration: "yaʿiduhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He promises them", ur: "وہ promises them" } },
      { id: '4:120:2', arabic: "وَيُمَنِّيهِمْ ۖ", transliteration: "wayumannīhim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and arouses desires in them", ur: "اور arouses desires میں them" } },
      { id: '4:120:3', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:120:4', arabic: "يَعِدُهُمُ", transliteration: "yaʿiduhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "promises them", ur: "promises them" } },
      { id: '4:120:5', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan ", ur: "the Shaitaan " } },
      { id: '4:120:6', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:120:7', arabic: "غُرُورًا", transliteration: "ghurūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "deception", ur: "deception" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  121: {
    text: "أُو۟لَـٰٓئِكَ مَأْوَىٰهُمْ جَهَنَّمُ وَلَا يَجِدُونَ عَنْهَا مَحِيصًۭا",
    translation: {
      en: "",
      ur: "ایسے لوگوں کا ٹھکانا جہنم ہے۔ اور وہ وہاں سے مخلصی نہیں پاسکیں گے",
    },
    words: [
      { id: '4:121:1', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those ", ur: "Those " } },
      { id: '4:121:2', arabic: "مَأْوَىٰهُمْ", transliteration: "mawāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their abode", ur: "their abode" } },
      { id: '4:121:3', arabic: "جَهَنَّمُ", transliteration: "jahannamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Hell", ur: "(is) جہنم" } },
      { id: '4:121:4', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:121:5', arabic: "يَجِدُونَ", transliteration: "yajidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will find", ur: "وہ لوگ will find" } },
      { id: '4:121:6', arabic: "عَنْهَا", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '4:121:7', arabic: "مَحِيصًۭا", transliteration: "maḥīṣan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any escape", ur: "any escape" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  122: {
    text: "وَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ سَنُدْخِلُهُمْ جَنَّـٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ خَـٰلِدِينَ فِيهَآ أَبَدًۭا ۖ وَعْدَ ٱللَّهِ حَقًّۭا ۚ وَمَنْ أَصْدَقُ مِنَ ٱللَّهِ قِيلًۭا",
    translation: {
      en: "",
      ur: "اور جو لوگ ایمان لائے اور نیک کام کرتے رہے ان کو ہم بہشتوں میں داخل کریں گے جن کے نیچے نہریں جاری ہیں۔ ابدالآباد ان میں رہیں گے۔ یہ خدا کا سچا وعدہ ہے۔ اور خدا سے زیادہ بات کا سچا کون ہوسکتا ہے",
    },
    words: [
      { id: '4:122:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '4:122:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:122:3', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and do", ur: "اور do" } },
      { id: '4:122:4', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] righteous deeds", ur: "[the] نیک deeds" } },
      { id: '4:122:5', arabic: "سَنُدْخِلُهُمْ", transliteration: "sanud'khiluhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will admit them", ur: "ہم will admit them" } },
      { id: '4:122:6', arabic: "جَنَّـٰتٍۢ", transliteration: "jannātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) Gardens", ur: "(میں) باغات" } },
      { id: '4:122:7', arabic: "تَجْرِى", transliteration: "tajrī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "flow", ur: "flow" } },
      { id: '4:122:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:122:9', arabic: "تَحْتِهَا", transliteration: "taḥtihā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "underneath it", ur: "underneath it" } },
      { id: '4:122:10', arabic: "ٱلْأَنْهَـٰرُ", transliteration: "l-anhāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the rivers", ur: "the rivers" } },
      { id: '4:122:11', arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will abide", ur: "will abide" } },
      { id: '4:122:12', arabic: "فِيهَآ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:122:13', arabic: "أَبَدًۭا ۖ", transliteration: "abadan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "forever", ur: "forever" } },
      { id: '4:122:14', arabic: "وَعْدَ", transliteration: "waʿda", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "A Promise", ur: "A Promise" } },
      { id: '4:122:15', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:122:16', arabic: "حَقًّۭا ۚ", transliteration: "ḥaqqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) truth", ur: "(میں) سچ" } },
      { id: '4:122:17', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and who", ur: "اور جو" } },
      { id: '4:122:18', arabic: "أَصْدَقُ", transliteration: "aṣdaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) truer", ur: "(is) truer" } },
      { id: '4:122:19', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than", ur: "than" } },
      { id: '4:122:20', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:122:21', arabic: "قِيلًۭا", transliteration: "qīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) statement", ur: "(میں) statement" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  123: {
    text: "لَّيْسَ بِأَمَانِيِّكُمْ وَلَآ أَمَانِىِّ أَهْلِ ٱلْكِتَـٰبِ ۗ مَن يَعْمَلْ سُوٓءًۭا يُجْزَ بِهِۦ وَلَا يَجِدْ لَهُۥ مِن دُونِ ٱللَّهِ وَلِيًّۭا وَلَا نَصِيرًۭا",
    translation: {
      en: "",
      ur: "(نجات) نہ تو تمہاری آرزوؤں پر ہے اور نہ اہل کتاب کی آرزوؤں پر۔ جو شخص برے عمل کرے گا اسے اسی (طرح) کا بدلا دیا جائے گا اور وہ خدا کے سوا نہ کسی کو حمایتی پائے گا اور نہ مددگار",
    },
    words: [
      { id: '4:123:1', arabic: "لَّيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '4:123:2', arabic: "بِأَمَانِيِّكُمْ", transliteration: "bi-amāniyyikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by your desire", ur: "by your desire" } },
      { id: '4:123:3', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:123:4', arabic: "أَمَانِىِّ", transliteration: "amāniyyi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by the) desire", ur: "(by the) desire" } },
      { id: '4:123:5', arabic: "أَهْلِ", transliteration: "ahli", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "(of the) People", ur: "(of the) لوگ" } },
      { id: '4:123:6', arabic: "ٱلْكِتَـٰبِ ۗ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Book", ur: "(of) the کتاب" } },
      { id: '4:123:7', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '4:123:8', arabic: "يَعْمَلْ", transliteration: "yaʿmal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '4:123:9', arabic: "سُوٓءًۭا", transliteration: "sūan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evil", ur: "برا" } },
      { id: '4:123:10', arabic: "يُجْزَ", transliteration: "yuj'za", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be recompensed", ur: "will be recompensed" } },
      { id: '4:123:11', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '4:123:12', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:123:13', arabic: "يَجِدْ", transliteration: "yajid", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he will find", ur: "وہ will find" } },
      { id: '4:123:14', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '4:123:15', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:123:16', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '4:123:17', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:123:18', arabic: "وَلِيًّۭا", transliteration: "waliyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "any protector", ur: "any protector" } },
      { id: '4:123:19', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:123:20', arabic: "نَصِيرًۭا", transliteration: "naṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "any helper", ur: "any helper" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  124: {
    text: "وَمَن يَعْمَلْ مِنَ ٱلصَّـٰلِحَـٰتِ مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌۭ فَأُو۟لَـٰٓئِكَ يَدْخُلُونَ ٱلْجَنَّةَ وَلَا يُظْلَمُونَ نَقِيرًۭا",
    translation: {
      en: "",
      ur: "اور جو نیک کام کرے گا مرد ہو یا عورت اور وہ صاحب ایمان بھی ہوگا تو ایسے لوگ بہشت میں داخل ہوں گے اور ان کی تل برابر بھی حق تلفی نہ کی جائے گی",
    },
    words: [
      { id: '4:124:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:124:2', arabic: "يَعْمَلْ", transliteration: "yaʿmal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '4:124:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '4:124:4', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] righteous deeds", ur: "[the] نیک deeds" } },
      { id: '4:124:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:124:6', arabic: "ذَكَرٍ", transliteration: "dhakarin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) male", ur: "(the) male" } },
      { id: '4:124:7', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:124:8', arabic: "أُنثَىٰ", transliteration: "unthā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "female", ur: "female" } },
      { id: '4:124:9', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he", ur: "اور وہ" } },
      { id: '4:124:10', arabic: "مُؤْمِنٌۭ", transliteration: "mu'minun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a believer", ur: "(is) a believer" } },
      { id: '4:124:11', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then those", ur: "پھر those" } },
      { id: '4:124:12', arabic: "يَدْخُلُونَ", transliteration: "yadkhulūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will enter", ur: "will enter" } },
      { id: '4:124:13', arabic: "ٱلْجَنَّةَ", transliteration: "l-janata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Paradise", ur: "جنت" } },
      { id: '4:124:14', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:124:15', arabic: "يُظْلَمُونَ", transliteration: "yuẓ'lamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be wronged", ur: "وہ لوگ will be wronged" } },
      { id: '4:124:16', arabic: "نَقِيرًۭا", transliteration: "naqīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(even as much as) the speck on a date-seed", ur: "(even as much as) the speck پر a date-seed" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  125: {
    text: "وَمَنْ أَحْسَنُ دِينًۭا مِّمَّنْ أَسْلَمَ وَجْهَهُۥ لِلَّهِ وَهُوَ مُحْسِنٌۭ وَٱتَّبَعَ مِلَّةَ إِبْرَٰهِيمَ حَنِيفًۭا ۗ وَٱتَّخَذَ ٱللَّهُ إِبْرَٰهِيمَ خَلِيلًۭا",
    translation: {
      en: "",
      ur: "اور اس شخص سے کس کا دین اچھا ہوسکتا ہے جس نے حکم خدا کو قبول کیا اور وہ نیکوکار بھی ہے۔ اور ابراہیم کے دین کا پیرو ہے جو یکسوں (مسلمان ) تھے اور خدا نے ابراہیم کو اپنا دوست بنایا تھا",
    },
    words: [
      { id: '4:125:1', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And who", ur: "اور جو" } },
      { id: '4:125:2', arabic: "أَحْسَنُ", transliteration: "aḥsanu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) better", ur: "(is) better" } },
      { id: '4:125:3', arabic: "دِينًۭا", transliteration: "dīnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) religion", ur: "(میں) religion" } },
      { id: '4:125:4', arabic: "مِّمَّنْ", transliteration: "mimman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than (one) who", ur: "than (one) جو" } },
      { id: '4:125:5', arabic: "أَسْلَمَ", transliteration: "aslama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "submits", ur: "submits" } },
      { id: '4:125:6', arabic: "وَجْهَهُۥ", transliteration: "wajhahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "his face", ur: "his face" } },
      { id: '4:125:7', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '4:125:8', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he", ur: "اور وہ" } },
      { id: '4:125:9', arabic: "مُحْسِنٌۭ", transliteration: "muḥ'sinun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a good-doer", ur: "(is) a اچھا-doer" } },
      { id: '4:125:10', arabic: "وَٱتَّبَعَ", transliteration: "wa-ittabaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and follows", ur: "اور follows" } },
      { id: '4:125:11', arabic: "مِلَّةَ", transliteration: "millata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) religion", ur: "(the) religion" } },
      { id: '4:125:12', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Ibrahim", ur: "(of) Ibrahim" } },
      { id: '4:125:13', arabic: "حَنِيفًۭا ۗ", transliteration: "ḥanīfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) upright", ur: "(the) upright" } },
      { id: '4:125:14', arabic: "وَٱتَّخَذَ", transliteration: "wa-ittakhadha", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And was taken", ur: "اور was taken" } },
      { id: '4:125:15', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:125:16', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } },
      { id: '4:125:17', arabic: "خَلِيلًۭا", transliteration: "khalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a friend", ur: "(as) a friend" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  126: {
    text: "وَلِلَّهِ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ وَكَانَ ٱللَّهُ بِكُلِّ شَىْءٍۢ مُّحِيطًۭا",
    translation: {
      en: "",
      ur: "اور آسمان وزمین میں جو کچھ ہے سب خدا ہی کا ہے۔ اور خدا ہر چیز پر احاطے کئے ہوئے ہے",
    },
    words: [
      { id: '4:126:1', arabic: "وَلِلَّهِ", transliteration: "walillahi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for Allah", ur: "اور for اللہ" } },
      { id: '4:126:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) what", ur: "(is) کیا" } },
      { id: '4:126:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:126:4', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '4:126:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '4:126:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:126:7', arabic: "ٱلْأَرْضِ ۚ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:126:8', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and is", ur: "اور is" } },
      { id: '4:126:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:126:10', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of every", ur: "of ہر" } },
      { id: '4:126:11', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '4:126:12', arabic: "مُّحِيطًۭا", transliteration: "muḥīṭan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Encompassing", ur: "سب-Encompassing" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  127: {
    text: "وَيَسْتَفْتُونَكَ فِى ٱلنِّسَآءِ ۖ قُلِ ٱللَّهُ يُفْتِيكُمْ فِيهِنَّ وَمَا يُتْلَىٰ عَلَيْكُمْ فِى ٱلْكِتَـٰبِ فِى يَتَـٰمَى ٱلنِّسَآءِ ٱلَّـٰتِى لَا تُؤْتُونَهُنَّ مَا كُتِبَ لَهُنَّ وَتَرْغَبُونَ أَن تَنكِحُوهُنَّ وَٱلْمُسْتَضْعَفِينَ مِنَ ٱلْوِلْدَٰنِ وَأَن تَقُومُوا۟ لِلْيَتَـٰمَىٰ بِٱلْقِسْطِ ۚ وَمَا تَفْعَلُوا۟ مِنْ خَيْرٍۢ فَإِنَّ ٱللَّهَ كَانَ بِهِۦ عَلِيمًۭا",
    translation: {
      en: "",
      ur: "(اے پیغمبر) لوگ تم سے (یتیم) عورتوں کے بارے میں فتویٰ طلب کرتے ہیں۔ کہہ دو کہ خدا تم کو ان کے (ساتھ نکاح کرنے کے) معاملے میں اجازت دیتا ہے اور جو حکم اس کتاب میں پہلے دیا گیا ہے وہ ان یتیم عورتوں کے بارے میں ہے جن کو تم ان کا حق تو دیتے نہیں اور خواہش رکھتے ہو کہ ان کے ساتھ نکاح کرلو اور (نیز) بیچارے بیکس بچوں کے بارے میں۔ اور یہ (بھی حکم دیتا ہے) کہ یتیموں کے بارے میں انصاف پر قائم رہو۔ اور جو بھلائی تم کرو گے خدا اس کو جانتا ہے",
    },
    words: [
      { id: '4:127:1', arabic: "وَيَسْتَفْتُونَكَ", transliteration: "wayastaftūnaka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they seek your ruling", ur: "اور وہ لوگ seek your ruling" } },
      { id: '4:127:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '4:127:3', arabic: "ٱلنِّسَآءِ ۖ", transliteration: "l-nisāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the women", ur: "the women" } },
      { id: '4:127:4', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '4:127:5', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:127:6', arabic: "يُفْتِيكُمْ", transliteration: "yuf'tīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "gives you the ruling", ur: "gives تم the ruling" } },
      { id: '4:127:7', arabic: "فِيهِنَّ", transliteration: "fīhinna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about them", ur: "about them" } },
      { id: '4:127:8', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '4:127:9', arabic: "يُتْلَىٰ", transliteration: "yut'lā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is recited", ur: "is recited" } },
      { id: '4:127:10', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:127:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:127:12', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:127:13', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '4:127:14', arabic: "يَتَـٰمَى", transliteration: "yatāmā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "orphans", ur: "orphans" } },
      { id: '4:127:15', arabic: "ٱلنِّسَآءِ", transliteration: "l-nisāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) girls", ur: "(of) girls" } },
      { id: '4:127:16', arabic: "ٱلَّـٰتِى", transliteration: "allātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) whom", ur: "(کو) whom" } },
      { id: '4:127:17', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:127:18', arabic: "تُؤْتُونَهُنَّ", transliteration: "tu'tūnahunna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) you give them", ur: "(do) تم give them" } },
      { id: '4:127:19', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '4:127:20', arabic: "كُتِبَ", transliteration: "kutiba", pos: ['V'], posLabel: 'V', root: "ك ت ب", meaning: { en: "is ordained", ur: "is ordained" } },
      { id: '4:127:21', arabic: "لَهُنَّ", transliteration: "lahunna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:127:22', arabic: "وَتَرْغَبُونَ", transliteration: "watarghabūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you desire", ur: "اور تم desire" } },
      { id: '4:127:23', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:127:24', arabic: "تَنكِحُوهُنَّ", transliteration: "tankiḥūhunna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "marry them", ur: "marry them" } },
      { id: '4:127:25', arabic: "وَٱلْمُسْتَضْعَفِينَ", transliteration: "wal-mus'taḍʿafīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the ones who are weak", ur: "اور the ones جو are weak" } },
      { id: '4:127:26', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:127:27', arabic: "ٱلْوِلْدَٰنِ", transliteration: "l-wil'dāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the children", ur: "the اولاد" } },
      { id: '4:127:28', arabic: "وَأَن", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to", ur: "اور کو" } },
      { id: '4:127:29', arabic: "تَقُومُوا۟", transliteration: "taqūmū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "stand", ur: "stand" } },
      { id: '4:127:30', arabic: "لِلْيَتَـٰمَىٰ", transliteration: "lil'yatāmā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for orphans", ur: "for orphans" } },
      { id: '4:127:31', arabic: "بِٱلْقِسْطِ ۚ", transliteration: "bil-qis'ṭi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with justice", ur: "ساتھ justice" } },
      { id: '4:127:32', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whatever", ur: "اور whatever" } },
      { id: '4:127:33', arabic: "تَفْعَلُوا۟", transliteration: "tafʿalū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } },
      { id: '4:127:34', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:127:35', arabic: "خَيْرٍۢ", transliteration: "khayrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '4:127:36', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '4:127:37', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:127:38', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:127:39', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about it", ur: "about it" } },
      { id: '4:127:40', arabic: "عَلِيمًۭا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'نفی + فعل' },
        { from: 19, to: 20, label: 'موصول + صلة' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'مضاف + مضاف إليه' },
        { from: 34, to: 35, label: 'جار + مجرور' }
      ],
    },
  },
  128: {
    text: "وَإِنِ ٱمْرَأَةٌ خَافَتْ مِنۢ بَعْلِهَا نُشُوزًا أَوْ إِعْرَاضًۭا فَلَا جُنَاحَ عَلَيْهِمَآ أَن يُصْلِحَا بَيْنَهُمَا صُلْحًۭا ۚ وَٱلصُّلْحُ خَيْرٌۭ ۗ وَأُحْضِرَتِ ٱلْأَنفُسُ ٱلشُّحَّ ۚ وَإِن تُحْسِنُوا۟ وَتَتَّقُوا۟ فَإِنَّ ٱللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًۭا",
    translation: {
      en: "",
      ur: "اور اگر کسی عورت کو اپنے خاوند کی طرف سے زیادتی یا بےرغبتی کا اندیشہ ہو تم میاں بیوی پر کچھ گناہ نہیں کہ آپس میں کسی قرارداد پر صلح کرلیں۔ اور صلح خوب (چیز) ہے اور طبیعتیں تو بخل کی طرف مائل ہوتی ہیں اور اگر تم نیکوکاری اور پرہیزگاری کرو گے تو خدا تمہارے سب کاموں سے واقف ہے",
    },
    words: [
      { id: '4:128:1', arabic: "وَإِنِ", transliteration: "wa-ini", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:128:2', arabic: "ٱمْرَأَةٌ", transliteration: "im'ra-atun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a woman", ur: "a woman" } },
      { id: '4:128:3', arabic: "خَافَتْ", transliteration: "khāfat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fears", ur: "fears" } },
      { id: '4:128:4', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:128:5', arabic: "بَعْلِهَا", transliteration: "baʿlihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "her husband", ur: "her husband" } },
      { id: '4:128:6', arabic: "نُشُوزًا", transliteration: "nushūzan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "ill-conduct", ur: "ill-conduct" } },
      { id: '4:128:7', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:128:8', arabic: "إِعْرَاضًۭا", transliteration: "iʿ'rāḍan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "desertion", ur: "desertion" } },
      { id: '4:128:9', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (there is) no", ur: "پھر (there is) نہیں" } },
      { id: '4:128:10', arabic: "جُنَاحَ", transliteration: "junāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sin", ur: "sin" } },
      { id: '4:128:11', arabic: "عَلَيْهِمَآ", transliteration: "ʿalayhimā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on both of them", ur: "پر both of them" } },
      { id: '4:128:12', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:128:13', arabic: "يُصْلِحَا", transliteration: "yuṣ'liḥā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they make terms of peace", ur: "وہ لوگ make terms of peace" } },
      { id: '4:128:14', arabic: "بَيْنَهُمَا", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between themselves ", ur: "درمیان themselves " } },
      { id: '4:128:15', arabic: "صُلْحًۭا ۚ", transliteration: "ṣul'ḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reconciliation", ur: "a reconciliation" } },
      { id: '4:128:16', arabic: "وَٱلصُّلْحُ", transliteration: "wal-ṣul'ḥu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [the] reconciliation", ur: "اور [the] reconciliation" } },
      { id: '4:128:17', arabic: "خَيْرٌۭ ۗ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) best", ur: "(is) best" } },
      { id: '4:128:18', arabic: "وَأُحْضِرَتِ", transliteration: "wa-uḥ'ḍirati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And are swayed", ur: "اور are swayed" } },
      { id: '4:128:19', arabic: "ٱلْأَنفُسُ", transliteration: "l-anfusu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the souls", ur: "the souls" } },
      { id: '4:128:20', arabic: "ٱلشُّحَّ ۚ", transliteration: "l-shuḥa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(by) greed", ur: "(by) greed" } },
      { id: '4:128:21', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:128:22', arabic: "تُحْسِنُوا۟", transliteration: "tuḥ'sinū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do good", ur: "تم do اچھا" } },
      { id: '4:128:23', arabic: "وَتَتَّقُوا۟", transliteration: "watattaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and fear (Allah)", ur: "اور ڈرنا (اللہ)" } },
      { id: '4:128:24', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '4:128:25', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:128:26', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:128:27', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '4:128:28', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } },
      { id: '4:128:29', arabic: "خَبِيرًۭا", transliteration: "khabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Aware", ur: "سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  129: {
    text: "وَلَن تَسْتَطِيعُوٓا۟ أَن تَعْدِلُوا۟ بَيْنَ ٱلنِّسَآءِ وَلَوْ حَرَصْتُمْ ۖ فَلَا تَمِيلُوا۟ كُلَّ ٱلْمَيْلِ فَتَذَرُوهَا كَٱلْمُعَلَّقَةِ ۚ وَإِن تُصْلِحُوا۟ وَتَتَّقُوا۟ فَإِنَّ ٱللَّهَ كَانَ غَفُورًۭا رَّحِيمًۭا",
    translation: {
      en: "",
      ur: "اور تم خوا کتنا ہی چاہو عورتوں میں ہرگز برابری نہیں کرسکو گے تو ایسا بھی نہ کرنا کہ ایک ہی کی طرف ڈھل جاؤ اور دوسری کو (ایسی حالت میں) چھوڑ دو کہ گویا ادھر ہوا میں لٹک رہی ہے اور اگر آپس میں موافقت کرلو اور پرہیزگاری کرو تو خدا بخشنے والا مہربان ہے",
    },
    words: [
      { id: '4:129:1', arabic: "وَلَن", transliteration: "walan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And never", ur: "اور never" } },
      { id: '4:129:2', arabic: "تَسْتَطِيعُوٓا۟", transliteration: "tastaṭīʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will you be able", ur: "will تم be able" } },
      { id: '4:129:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:129:4', arabic: "تَعْدِلُوا۟", transliteration: "taʿdilū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "deal justly", ur: "deal justly" } },
      { id: '4:129:5', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '4:129:6', arabic: "ٱلنِّسَآءِ", transliteration: "l-nisāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] women", ur: "[the] women" } },
      { id: '4:129:7', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even if", ur: "even if" } },
      { id: '4:129:8', arabic: "حَرَصْتُمْ ۖ", transliteration: "ḥaraṣtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you desired", ur: "تم desired" } },
      { id: '4:129:9', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but (do) not", ur: "لیکن (do) نہیں" } },
      { id: '4:129:10', arabic: "تَمِيلُوا۟", transliteration: "tamīlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "incline", ur: "incline" } },
      { id: '4:129:11', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) all", ur: "(ساتھ) سب" } },
      { id: '4:129:12', arabic: "ٱلْمَيْلِ", transliteration: "l-mayli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the inclination", ur: "the inclination" } },
      { id: '4:129:13', arabic: "فَتَذَرُوهَا", transliteration: "fatadharūhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and leave her (the other)", ur: "اور leave her (the other)" } },
      { id: '4:129:14', arabic: "كَٱلْمُعَلَّقَةِ ۚ", transliteration: "kal-muʿalaqati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like the suspended one", ur: "like the suspended one" } },
      { id: '4:129:15', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:129:16', arabic: "تُصْلِحُوا۟", transliteration: "tuṣ'liḥū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you reconcile", ur: "تم reconcile" } },
      { id: '4:129:17', arabic: "وَتَتَّقُوا۟", transliteration: "watattaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and fear (Allah)", ur: "اور ڈرنا (اللہ)" } },
      { id: '4:129:18', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '4:129:19', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:129:20', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:129:21', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:129:22', arabic: "رَّحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  130: {
    text: "وَإِن يَتَفَرَّقَا يُغْنِ ٱللَّهُ كُلًّۭا مِّن سَعَتِهِۦ ۚ وَكَانَ ٱللَّهُ وَٰسِعًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "اور اگر میاں بیوی (میں موافقت نہ ہوسکے اور) ایک دوسرے سے جدا ہوجائیں تو خدا ہر ایک کو اپنی دولت سے غنی کردے گا اور خدا بڑی کشائش والا اور حکمت والا ہے",
    },
    words: [
      { id: '4:130:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:130:2', arabic: "يَتَفَرَّقَا", transliteration: "yatafarraqā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they separate", ur: "وہ لوگ separate" } },
      { id: '4:130:3', arabic: "يُغْنِ", transliteration: "yugh'ni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be enriched", ur: "will be enriched" } },
      { id: '4:130:4', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:130:5', arabic: "كُلًّۭا", transliteration: "kullan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "each (of them)", ur: "ہر (of them)" } },
      { id: '4:130:6', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:130:7', arabic: "سَعَتِهِۦ ۚ", transliteration: "saʿatihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His abundance", ur: "His abundance" } },
      { id: '4:130:8', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and is", ur: "اور is" } },
      { id: '4:130:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:130:10', arabic: "وَٰسِعًا", transliteration: "wāsiʿan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "All-Encompassing", ur: "سب-Encompassing" } },
      { id: '4:130:11', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  131: {
    text: "وَلِلَّهِ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَلَقَدْ وَصَّيْنَا ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَـٰبَ مِن قَبْلِكُمْ وَإِيَّاكُمْ أَنِ ٱتَّقُوا۟ ٱللَّهَ ۚ وَإِن تَكْفُرُوا۟ فَإِنَّ لِلَّهِ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ وَكَانَ ٱللَّهُ غَنِيًّا حَمِيدًۭا",
    translation: {
      en: "",
      ur: "اور جو کچھ آسمانوں اور جو کچھ زمین میں ہے سب خدا ہی کا ہے۔ اور جن لوگوں کو تم سے پہلے کتاب دی گئی تھی ان کو بھی اور (اے محمدﷺ) تم کو بھی ہم نے حکم تاکیدی کیا ہے کہ خدا سے ڈرتے رہو اور اگر کفر کرو گے تو (سمجھ رکھو کہ) جو کچھ آسمانوں میں اور جو کچھ زمین میں ہے سب خدا ہی کا ہے۔ اور خدا بے پروا اور سزاوار حمدوثنا ہے",
    },
    words: [
      { id: '4:131:1', arabic: "وَلِلَّهِ", transliteration: "walillahi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for Allah", ur: "اور for اللہ" } },
      { id: '4:131:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) whatever", ur: "(is) whatever" } },
      { id: '4:131:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:131:4', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '4:131:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '4:131:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:131:7', arabic: "ٱلْأَرْضِ ۗ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:131:8', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And surely", ur: "اور یقیناً" } },
      { id: '4:131:9', arabic: "وَصَّيْنَا", transliteration: "waṣṣaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "We have instructed", ur: "ہم have instructed" } },
      { id: '4:131:10', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:131:11', arabic: "أُوتُوا۟", transliteration: "ūtū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were given", ur: "were given" } },
      { id: '4:131:12', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:131:13', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:131:14', arabic: "قَبْلِكُمْ", transliteration: "qablikum", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '4:131:15', arabic: "وَإِيَّاكُمْ", transliteration: "wa-iyyākum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and yourselves", ur: "اور yourselves" } },
      { id: '4:131:16', arabic: "أَنِ", transliteration: "ani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:131:17', arabic: "ٱتَّقُوا۟", transliteration: "ittaqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear", ur: "تم ڈرنا" } },
      { id: '4:131:18', arabic: "ٱللَّهَ ۚ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:131:19', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:131:20', arabic: "تَكْفُرُوا۟", transliteration: "takfurū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you disbelieve ", ur: "تم disbelieve " } },
      { id: '4:131:21', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '4:131:22', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Allah", ur: "for اللہ" } },
      { id: '4:131:23', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) whatever", ur: "(is) whatever" } },
      { id: '4:131:24', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:131:25', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '4:131:26', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '4:131:27', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:131:28', arabic: "ٱلْأَرْضِ ۚ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:131:29', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:131:30', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:131:31', arabic: "غَنِيًّا", transliteration: "ghaniyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Free of need", ur: "Free of need" } },
      { id: '4:131:32', arabic: "حَمِيدًۭا", transliteration: "ḥamīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Praiseworthy", ur: "Praiseworthy" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'جار + مجرور' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'فعل + فاعل' }
      ],
    },
  },
  132: {
    text: "وَلِلَّهِ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۚ وَكَفَىٰ بِٱللَّهِ وَكِيلًا",
    translation: {
      en: "",
      ur: "اور (پھر سن رکھو کہ) جو کچھ آسمانوں میں اور جو کچھ زمین میں ہے سب خدا ہی کا ہے اور خدا کارساز کافی ہے",
    },
    words: [
      { id: '4:132:1', arabic: "وَلِلَّهِ", transliteration: "walillahi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for Allah", ur: "اور for اللہ" } },
      { id: '4:132:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) whatever", ur: "(is) whatever" } },
      { id: '4:132:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:132:4', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '4:132:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '4:132:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:132:7', arabic: "ٱلْأَرْضِ ۚ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:132:8', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And is sufficient", ur: "اور is sufficient" } },
      { id: '4:132:9', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:132:10', arabic: "وَكِيلًا", transliteration: "wakīlan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(as) a Disposer of affairs", ur: "(as) a Disposer of affairs" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  133: {
    text: "إِن يَشَأْ يُذْهِبْكُمْ أَيُّهَا ٱلنَّاسُ وَيَأْتِ بِـَٔاخَرِينَ ۚ وَكَانَ ٱللَّهُ عَلَىٰ ذَٰلِكَ قَدِيرًۭا",
    translation: {
      en: "",
      ur: "لوگو! اگر وہ چاہے تو تم کو فنا کردے اور (تمہاری جگہ) اور لوگوں کو پیدا کردے۔اور خدا اس بات پر قادر ہے",
    },
    words: [
      { id: '4:133:1', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '4:133:2', arabic: "يَشَأْ", transliteration: "yasha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } },
      { id: '4:133:3', arabic: "يُذْهِبْكُمْ", transliteration: "yudh'hib'kum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He can take you away", ur: "وہ can take تم away" } },
      { id: '4:133:4', arabic: "أَيُّهَا", transliteration: "ayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '4:133:5', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "people", ur: "لوگ" } },
      { id: '4:133:6', arabic: "وَيَأْتِ", transliteration: "wayati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and bring", ur: "اور bring" } },
      { id: '4:133:7', arabic: "بِـَٔاخَرِينَ ۚ", transliteration: "biākharīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "others", ur: "others" } },
      { id: '4:133:8', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:133:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:133:10', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '4:133:11', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:133:12', arabic: "قَدِيرًۭا", transliteration: "qadīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Powerful", ur: "سب-Powerful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  134: {
    text: "مَّن كَانَ يُرِيدُ ثَوَابَ ٱلدُّنْيَا فَعِندَ ٱللَّهِ ثَوَابُ ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ ۚ وَكَانَ ٱللَّهُ سَمِيعًۢا بَصِيرًۭا",
    translation: {
      en: "",
      ur: "جو شخص دنیا (میں عملوں) کی جزا کا طالب ہو تو خدا کے پاس دنیا اور آخرت (دونوں) کے لئے اجر (موجود) ہیں۔ اور خدا سنتا دیکھتا ہے",
    },
    words: [
      { id: '4:134:1', arabic: "مَّن", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '4:134:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "[is]", ur: "[is]" } },
      { id: '4:134:3', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "desires", ur: "desires" } },
      { id: '4:134:4', arabic: "ثَوَابَ", transliteration: "thawāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "reward", ur: "ثواب" } },
      { id: '4:134:5', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world ", ur: "(of) the دنیا " } },
      { id: '4:134:6', arabic: "فَعِندَ", transliteration: "faʿinda", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then with", ur: "پھر ساتھ" } },
      { id: '4:134:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:134:8', arabic: "ثَوَابُ", transliteration: "thawābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) reward", ur: "(is the) ثواب" } },
      { id: '4:134:9', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '4:134:10', arabic: "وَٱلْـَٔاخِرَةِ ۚ", transliteration: "wal-ākhirati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Hereafter", ur: "اور the آخرت" } },
      { id: '4:134:11', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:134:12', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:134:13', arabic: "سَمِيعًۢا", transliteration: "samīʿan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Hearing", ur: "سب سننے والا" } },
      { id: '4:134:14', arabic: "بَصِيرًۭا", transliteration: "baṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Seeing", ur: "سب دیکھنے والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  135: {
    text: "۞ يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُونُوا۟ قَوَّٰمِينَ بِٱلْقِسْطِ شُهَدَآءَ لِلَّهِ وَلَوْ عَلَىٰٓ أَنفُسِكُمْ أَوِ ٱلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ ۚ إِن يَكُنْ غَنِيًّا أَوْ فَقِيرًۭا فَٱللَّهُ أَوْلَىٰ بِهِمَا ۖ فَلَا تَتَّبِعُوا۟ ٱلْهَوَىٰٓ أَن تَعْدِلُوا۟ ۚ وَإِن تَلْوُۥٓا۟ أَوْ تُعْرِضُوا۟ فَإِنَّ ٱللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًۭا",
    translation: {
      en: "",
      ur: "اے ایمان والو! انصاف پر قائم رہو اور خدا کے لئے سچی گواہی دو خواہ (اس میں) تمہارا یا تمہارےماں باپ اور رشتہ داروں کا نقصان ہی ہو۔ اگر کوئی امیر ہے یا فقیر تو خدا ان کا خیر خواہ ہے۔ تو تم خواہش نفس کے پیچھے چل کر عدل کو نہ چھوڑ دینا۔ اگر تم پیچیدا شہادت دو گے یا (شہادت سے) بچنا چاہو گے تو (جان رکھو) خدا تمہارے سب کاموں سے واقف ہے",
    },
    words: [
      { id: '4:135:1', arabic: "۞ يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:135:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:135:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:135:4', arabic: "كُونُوا۟", transliteration: "kūnū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Be", ur: "Be" } },
      { id: '4:135:5', arabic: "قَوَّٰمِينَ", transliteration: "qawwāmīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "custodians", ur: "custodians" } },
      { id: '4:135:6', arabic: "بِٱلْقِسْطِ", transliteration: "bil-qis'ṭi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of justice", ur: "of justice" } },
      { id: '4:135:7', arabic: "شُهَدَآءَ", transliteration: "shuhadāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) witnesses", ur: "(as) witnesses" } },
      { id: '4:135:8', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '4:135:9', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even if", ur: "even if" } },
      { id: '4:135:10', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(it is) against", ur: "(it is) against" } },
      { id: '4:135:11', arabic: "أَنفُسِكُمْ", transliteration: "anfusikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "yourselves", ur: "yourselves" } },
      { id: '4:135:12', arabic: "أَوِ", transliteration: "awi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:135:13', arabic: "ٱلْوَٰلِدَيْنِ", transliteration: "l-wālidayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the parents", ur: "the parents" } },
      { id: '4:135:14', arabic: "وَٱلْأَقْرَبِينَ ۚ", transliteration: "wal-aqrabīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the relatives", ur: "اور the relatives" } },
      { id: '4:135:15', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:135:16', arabic: "يَكُنْ", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "he be", ur: "وہ be" } },
      { id: '4:135:17', arabic: "غَنِيًّا", transliteration: "ghaniyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "rich", ur: "rich" } },
      { id: '4:135:18', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:135:19', arabic: "فَقِيرًۭا", transliteration: "faqīran", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "poor", ur: "poor" } },
      { id: '4:135:20', arabic: "فَٱللَّهُ", transliteration: "fal-lahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "for Allah", ur: "for اللہ" } },
      { id: '4:135:21', arabic: "أَوْلَىٰ", transliteration: "awlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) nearer", ur: "(is) nearer" } },
      { id: '4:135:22', arabic: "بِهِمَا ۖ", transliteration: "bihimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to both of them", ur: "کو both of them" } },
      { id: '4:135:23', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So (do) not", ur: "So (do) نہیں" } },
      { id: '4:135:24', arabic: "تَتَّبِعُوا۟", transliteration: "tattabiʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '4:135:25', arabic: "ٱلْهَوَىٰٓ", transliteration: "l-hawā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the desire", ur: "the desire" } },
      { id: '4:135:26', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lest", ur: "lest" } },
      { id: '4:135:27', arabic: "تَعْدِلُوا۟ ۚ", transliteration: "taʿdilū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you deviate", ur: "تم deviate" } },
      { id: '4:135:28', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '4:135:29', arabic: "تَلْوُۥٓا۟", transliteration: "talwū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you distort", ur: "تم distort" } },
      { id: '4:135:30', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:135:31', arabic: "تُعْرِضُوا۟", transliteration: "tuʿ'riḍū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "refrain", ur: "refrain" } },
      { id: '4:135:32', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '4:135:33', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:135:34', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:135:35', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '4:135:36', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } },
      { id: '4:135:37', arabic: "خَبِيرًۭا", transliteration: "khabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Aware", ur: "سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'فعل + فاعل' }
      ],
    },
  },
  136: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ ءَامِنُوا۟ بِٱللَّهِ وَرَسُولِهِۦ وَٱلْكِتَـٰبِ ٱلَّذِى نَزَّلَ عَلَىٰ رَسُولِهِۦ وَٱلْكِتَـٰبِ ٱلَّذِىٓ أَنزَلَ مِن قَبْلُ ۚ وَمَن يَكْفُرْ بِٱللَّهِ وَمَلَـٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ وَٱلْيَوْمِ ٱلْـَٔاخِرِ فَقَدْ ضَلَّ ضَلَـٰلًۢا بَعِيدًا",
    translation: {
      en: "",
      ur: "مومنو! خدا پر اور اس کے رسول پر اور جو کتاب اس نے اپنی پیغمبر (آخرالزماں) پر نازل کی ہے اور جو کتابیں اس سے پہلے نازل کی تھیں سب پر ایمان لاؤ۔ اور جو شخص خدا اور اس کے فرشتوں اور اس کی کتابوں اور اس کے پیغمبروں اور روزقیامت سے انکار کرے وہ رستے سے بھٹک کر دور جا پڑا",
    },
    words: [
      { id: '4:136:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:136:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:136:3', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:136:4', arabic: "ءَامِنُوا۟", transliteration: "āminū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Believe", ur: "ایمان لانا" } },
      { id: '4:136:5', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:136:6', arabic: "وَرَسُولِهِۦ", transliteration: "warasūlihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messenger", ur: "اور His رسول" } },
      { id: '4:136:7', arabic: "وَٱلْكِتَـٰبِ", transliteration: "wal-kitābi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Book", ur: "اور the کتاب" } },
      { id: '4:136:8', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '4:136:9', arabic: "نَزَّلَ", transliteration: "nazzala", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He revealed", ur: "وہ revealed" } },
      { id: '4:136:10', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '4:136:11', arabic: "رَسُولِهِۦ", transliteration: "rasūlihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His Messenger", ur: "His رسول" } },
      { id: '4:136:12', arabic: "وَٱلْكِتَـٰبِ", transliteration: "wal-kitābi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Book", ur: "اور the کتاب" } },
      { id: '4:136:13', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '4:136:14', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "He revealed", ur: "وہ revealed" } },
      { id: '4:136:15', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:136:16', arabic: "قَبْلُ ۚ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '4:136:17', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:136:18', arabic: "يَكْفُرْ", transliteration: "yakfur", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disbelieves", ur: "disbelieves" } },
      { id: '4:136:19', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:136:20', arabic: "وَمَلَـٰٓئِكَتِهِۦ", transliteration: "wamalāikatihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Angels", ur: "اور His Angels" } },
      { id: '4:136:21', arabic: "وَكُتُبِهِۦ", transliteration: "wakutubihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Books", ur: "اور His Books" } },
      { id: '4:136:22', arabic: "وَرُسُلِهِۦ", transliteration: "warusulihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messengers", ur: "اور His Messengers" } },
      { id: '4:136:23', arabic: "وَٱلْيَوْمِ", transliteration: "wal-yawmi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "and the Day", ur: "اور the دن" } },
      { id: '4:136:24', arabic: "ٱلْـَٔاخِرِ", transliteration: "l-ākhiri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Last", ur: "the Last" } },
      { id: '4:136:25', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then surely", ur: "پھر یقیناً" } },
      { id: '4:136:26', arabic: "ضَلَّ", transliteration: "ḍalla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he (has) lost (the) way", ur: "وہ (has) lost (the) راستہ" } },
      { id: '4:136:27', arabic: "ضَلَـٰلًۢا", transliteration: "ḍalālan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "straying", ur: "straying" } },
      { id: '4:136:28', arabic: "بَعِيدًا", transliteration: "baʿīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far away", ur: "far away" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 27, to: 28, label: 'فعل + فاعل' }
      ],
    },
  },
  137: {
    text: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ ثُمَّ كَفَرُوا۟ ثُمَّ ءَامَنُوا۟ ثُمَّ كَفَرُوا۟ ثُمَّ ٱزْدَادُوا۟ كُفْرًۭا لَّمْ يَكُنِ ٱللَّهُ لِيَغْفِرَ لَهُمْ وَلَا لِيَهْدِيَهُمْ سَبِيلًۢا",
    translation: {
      en: "",
      ur: "جو لوگ ایمان لائے پھر کافر ہوگئے پھر ایمان لائے پھر کافر ہوگئے پھر کفر میں بڑھتے گئے ان کو خدا نہ تو بخشے گا اور نہ سیدھا رستہ دکھائے گا",
    },
    words: [
      { id: '4:137:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:137:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:137:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '4:137:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:137:5', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '4:137:6', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:137:7', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(again) believed", ur: "(again) ایمان لائے" } },
      { id: '4:137:8', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:137:9', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '4:137:10', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:137:11', arabic: "ٱزْدَادُوا۟", transliteration: "iz'dādū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "increased", ur: "increased" } },
      { id: '4:137:12', arabic: "كُفْرًۭا", transliteration: "kuf'ran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) disbelief ", ur: "(میں) disbelief " } },
      { id: '4:137:13', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:137:14', arabic: "يَكُنِ", transliteration: "yakuni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will", ur: "will" } },
      { id: '4:137:15', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:137:16', arabic: "لِيَغْفِرَ", transliteration: "liyaghfira", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "forgive", ur: "forgive" } },
      { id: '4:137:17', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[for] them", ur: "[for] them" } },
      { id: '4:137:18', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:137:19', arabic: "لِيَهْدِيَهُمْ", transliteration: "liyahdiyahum", pos: ['P+N'], posLabel: 'P+N', root: "ه د ي", meaning: { en: "will guide them", ur: "will guide them" } },
      { id: '4:137:20', arabic: "سَبِيلًۢا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) a (right) way", ur: "(کو) a (right) راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  138: {
    text: "بَشِّرِ ٱلْمُنَـٰفِقِينَ بِأَنَّ لَهُمْ عَذَابًا أَلِيمًا",
    translation: {
      en: "",
      ur: "(اے پیغمبر) منافقوں (یعنی دو رخے لوگوں) کو بشارت سناد دو کہ ان کے لئے دکھ دینے والا عذاب (تیار) ہے",
    },
    words: [
      { id: '4:138:1', arabic: "بَشِّرِ", transliteration: "bashiri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Give tidings", ur: "Give tidings" } },
      { id: '4:138:2', arabic: "ٱلْمُنَـٰفِقِينَ", transliteration: "l-munāfiqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the hypocrites", ur: "(کو) the hypocrites" } },
      { id: '4:138:3', arabic: "بِأَنَّ", transliteration: "bi-anna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:138:4', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:138:5', arabic: "عَذَابًا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "(is) a punishment", ur: "(is) a عذاب" } },
      { id: '4:138:6', arabic: "أَلِيمًا", transliteration: "alīman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "painful ", ur: "painful " } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  139: {
    text: "ٱلَّذِينَ يَتَّخِذُونَ ٱلْكَـٰفِرِينَ أَوْلِيَآءَ مِن دُونِ ٱلْمُؤْمِنِينَ ۚ أَيَبْتَغُونَ عِندَهُمُ ٱلْعِزَّةَ فَإِنَّ ٱلْعِزَّةَ لِلَّهِ جَمِيعًۭا",
    translation: {
      en: "",
      ur: "جو مومنوں کو چھوڑ کر کافروں کو دوست بناتے ہیں۔ کیا یہ ان کے ہاں عزت حاصل کرنا چاہتے ہیں تو عزت تو سب خدا ہی کی ہے",
    },
    words: [
      { id: '4:139:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '4:139:2', arabic: "يَتَّخِذُونَ", transliteration: "yattakhidhūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take", ur: "take" } },
      { id: '4:139:3', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbelievers", ur: "the کافر" } },
      { id: '4:139:4', arabic: "أَوْلِيَآءَ", transliteration: "awliyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) allies", ur: "(as) allies" } },
      { id: '4:139:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(from)", ur: "(سے)" } },
      { id: '4:139:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "instead of", ur: "instead of" } },
      { id: '4:139:7', arabic: "ٱلْمُؤْمِنِينَ ۚ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:139:8', arabic: "أَيَبْتَغُونَ", transliteration: "ayabtaghūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do they seek", ur: "Do وہ لوگ seek" } },
      { id: '4:139:9', arabic: "عِندَهُمُ", transliteration: "ʿindahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '4:139:10', arabic: "ٱلْعِزَّةَ", transliteration: "l-ʿizata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the honor", ur: "the honor" } },
      { id: '4:139:11', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But indeed", ur: "لیکن بیشک" } },
      { id: '4:139:12', arabic: "ٱلْعِزَّةَ", transliteration: "l-ʿizata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the honor", ur: "the honor" } },
      { id: '4:139:13', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for Allah", ur: "(is) for اللہ" } },
      { id: '4:139:14', arabic: "جَمِيعًۭا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  140: {
    text: "وَقَدْ نَزَّلَ عَلَيْكُمْ فِى ٱلْكِتَـٰبِ أَنْ إِذَا سَمِعْتُمْ ءَايَـٰتِ ٱللَّهِ يُكْفَرُ بِهَا وَيُسْتَهْزَأُ بِهَا فَلَا تَقْعُدُوا۟ مَعَهُمْ حَتَّىٰ يَخُوضُوا۟ فِى حَدِيثٍ غَيْرِهِۦٓ ۚ إِنَّكُمْ إِذًۭا مِّثْلُهُمْ ۗ إِنَّ ٱللَّهَ جَامِعُ ٱلْمُنَـٰفِقِينَ وَٱلْكَـٰفِرِينَ فِى جَهَنَّمَ جَمِيعًا",
    translation: {
      en: "",
      ur: "اور خدا نے تم (مومنوں) پر اپنی کتاب میں (یہ حکم) نازل فرمایا ہے کہ جب تم (کہیں) سنو کہ خدا کی آیتوں سے انکار ہورہا ہے اور ان کی ہنسی اڑائی جاتی ہے تو جب تک وہ لوگ اور باتیں (نہ) کرنے لگیں۔ ان کے پاس مت بیٹھو۔ ورنہ تم بھی انہیں جیسے ہوجاؤ گے۔ کچھ شک نہیں کہ خدا منافقوں اور کافروں سب کو دوزخ میں اکھٹا کرنے والا ہے",
    },
    words: [
      { id: '4:140:1', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And surely", ur: "اور یقیناً" } },
      { id: '4:140:2', arabic: "نَزَّلَ", transliteration: "nazzala", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has revealed", ur: "وہ has revealed" } },
      { id: '4:140:3', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:140:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:140:5', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '4:140:6', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:140:7', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '4:140:8', arabic: "سَمِعْتُمْ", transliteration: "samiʿ'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you hear", ur: "تم سننا" } },
      { id: '4:140:9', arabic: "ءَايَـٰتِ", transliteration: "āyāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Verses", ur: "(the) Verses" } },
      { id: '4:140:10', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:140:11', arabic: "يُكْفَرُ", transliteration: "yuk'faru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "being rejected", ur: "being rejected" } },
      { id: '4:140:12', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[it]", ur: "[it]" } },
      { id: '4:140:13', arabic: "وَيُسْتَهْزَأُ", transliteration: "wayus'tahza-u", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and ridiculed", ur: "اور ridiculed" } },
      { id: '4:140:14', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "at [it]", ur: "at [it]" } },
      { id: '4:140:15', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then do not", ur: "پھر do نہیں" } },
      { id: '4:140:16', arabic: "تَقْعُدُوا۟", transliteration: "taqʿudū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sit", ur: "sit" } },
      { id: '4:140:17', arabic: "مَعَهُمْ", transliteration: "maʿahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '4:140:18', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '4:140:19', arabic: "يَخُوضُوا۟", transliteration: "yakhūḍū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they engage", ur: "وہ لوگ engage" } },
      { id: '4:140:20', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:140:21', arabic: "حَدِيثٍ", transliteration: "ḥadīthin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a conversation", ur: "a conversation" } },
      { id: '4:140:22', arabic: "غَيْرِهِۦٓ ۚ", transliteration: "ghayrihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than that", ur: "other than وہ" } },
      { id: '4:140:23', arabic: "إِنَّكُمْ", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '4:140:24', arabic: "إِذًۭا", transliteration: "idhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '4:140:25', arabic: "مِّثْلُهُمْ ۗ", transliteration: "mith'luhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(would be) like them", ur: "(would be) like them" } },
      { id: '4:140:26', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:140:27', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:140:28', arabic: "جَامِعُ", transliteration: "jāmiʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will gather", ur: "will gather" } },
      { id: '4:140:29', arabic: "ٱلْمُنَـٰفِقِينَ", transliteration: "l-munāfiqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hypocrites", ur: "the hypocrites" } },
      { id: '4:140:30', arabic: "وَٱلْكَـٰفِرِينَ", transliteration: "wal-kāfirīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the disbelievers", ur: "اور the کافر" } },
      { id: '4:140:31', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:140:32', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hell", ur: "جہنم" } },
      { id: '4:140:33', arabic: "جَمِيعًا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all together", ur: "سب together" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'فعل + فاعل' },
        { from: 31, to: 32, label: 'جار + مجرور' }
      ],
    },
  },
  141: {
    text: "ٱلَّذِينَ يَتَرَبَّصُونَ بِكُمْ فَإِن كَانَ لَكُمْ فَتْحٌۭ مِّنَ ٱللَّهِ قَالُوٓا۟ أَلَمْ نَكُن مَّعَكُمْ وَإِن كَانَ لِلْكَـٰفِرِينَ نَصِيبٌۭ قَالُوٓا۟ أَلَمْ نَسْتَحْوِذْ عَلَيْكُمْ وَنَمْنَعْكُم مِّنَ ٱلْمُؤْمِنِينَ ۚ فَٱللَّهُ يَحْكُمُ بَيْنَكُمْ يَوْمَ ٱلْقِيَـٰمَةِ ۗ وَلَن يَجْعَلَ ٱللَّهُ لِلْكَـٰفِرِينَ عَلَى ٱلْمُؤْمِنِينَ سَبِيلًا",
    translation: {
      en: "",
      ur: "جو تم کو دیکھتے رہتے ہیں اگر خدا کی طرف سے تم کو فتح ملے تو کہتے ہیں کیا ہم تمہارے ساتھ نہ تھے۔ اور اگر کافروں کو (فتح) نصیب ہو تو (ان سے) کہتے ہیں کیا ہم تم پر غالب نہیں تھے اور تم کو مسلمانوں (کے ہاتھ) سے بچایا نہیں۔ تو خدا تم میں قیامت کے دن فیصلہ کردے گا۔ اور خدا کافروں کو مومنوں پر ہرگز غلبہ نہیں دے گا",
    },
    words: [
      { id: '4:141:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '4:141:2', arabic: "يَتَرَبَّصُونَ", transliteration: "yatarabbaṣūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are waiting", ur: "are waiting" } },
      { id: '4:141:3', arabic: "بِكُمْ", transliteration: "bikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:141:4', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then if", ur: "پھر if" } },
      { id: '4:141:5', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '4:141:6', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:141:7', arabic: "فَتْحٌۭ", transliteration: "fatḥun", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "a victory", ur: "a victory" } },
      { id: '4:141:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:141:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:141:10', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '4:141:11', arabic: "أَلَمْ", transliteration: "alam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Were not", ur: "Were نہیں" } },
      { id: '4:141:12', arabic: "نَكُن", transliteration: "nakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we", ur: "ہم" } },
      { id: '4:141:13', arabic: "مَّعَكُمْ", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '4:141:14', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:141:15', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(there) was", ur: "(there) was" } },
      { id: '4:141:16', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the disbelievers", ur: "for the کافر" } },
      { id: '4:141:17', arabic: "نَصِيبٌۭ", transliteration: "naṣībun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a chance", ur: "a chance" } },
      { id: '4:141:18', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '4:141:19', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did not", ur: "Did نہیں" } },
      { id: '4:141:20', arabic: "نَسْتَحْوِذْ", transliteration: "nastaḥwidh", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have advantage", ur: "ہم have advantage" } },
      { id: '4:141:21', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over you", ur: "اوپر تم" } },
      { id: '4:141:22', arabic: "وَنَمْنَعْكُم", transliteration: "wanamnaʿkum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we protected you", ur: "اور ہم protected تم" } },
      { id: '4:141:23', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:141:24', arabic: "ٱلْمُؤْمِنِينَ ۚ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:141:25', arabic: "فَٱللَّهُ", transliteration: "fal-lahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '4:141:26', arabic: "يَحْكُمُ", transliteration: "yaḥkumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will judge", ur: "will judge" } },
      { id: '4:141:27', arabic: "بَيْنَكُمْ", transliteration: "baynakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between you", ur: "درمیان تم" } },
      { id: '4:141:28', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '4:141:29', arabic: "ٱلْقِيَـٰمَةِ ۗ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '4:141:30', arabic: "وَلَن", transliteration: "walan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and never", ur: "اور never" } },
      { id: '4:141:31', arabic: "يَجْعَلَ", transliteration: "yajʿala", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "will make", ur: "will make" } },
      { id: '4:141:32', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:141:33', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the disbelievers", ur: "for the کافر" } },
      { id: '4:141:34', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '4:141:35', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:141:36', arabic: "سَبِيلًا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a way", ur: "a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'مضاف + مضاف إليه' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 28, to: 29, label: 'فعل + فاعل' },
        { from: 31, to: 32, label: 'فعل + فاعل' },
        { from: 34, to: 35, label: 'جار + مجرور' }
      ],
    },
  },
  142: {
    text: "إِنَّ ٱلْمُنَـٰفِقِينَ يُخَـٰدِعُونَ ٱللَّهَ وَهُوَ خَـٰدِعُهُمْ وَإِذَا قَامُوٓا۟ إِلَى ٱلصَّلَوٰةِ قَامُوا۟ كُسَالَىٰ يُرَآءُونَ ٱلنَّاسَ وَلَا يَذْكُرُونَ ٱللَّهَ إِلَّا قَلِيلًۭا",
    translation: {
      en: "",
      ur: "منافق (ان چالوں سے اپنے نزدیک) خدا کو دھوکا دیتے ہیں (یہ اس کو کیا دھوکا دیں گے) وہ انہیں کو دھوکے میں ڈالنے والا ہے اور جب یہ نماز کو کھڑے ہوتے ہیں تو سست اور کاہل ہو کر (صرف) لوگوں کے دکھانے کو اور خدا کی یاد ہی نہیں کرتے مگر بہت کم",
    },
    words: [
      { id: '4:142:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:142:2', arabic: "ٱلْمُنَـٰفِقِينَ", transliteration: "l-munāfiqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hypocrites", ur: "the hypocrites" } },
      { id: '4:142:3', arabic: "يُخَـٰدِعُونَ", transliteration: "yukhādiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(seek to) deceive", ur: "(seek کو) deceive" } },
      { id: '4:142:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:142:5', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (it is) He", ur: "اور (it is) وہ" } },
      { id: '4:142:6', arabic: "خَـٰدِعُهُمْ", transliteration: "khādiʿuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who deceives them", ur: "جو deceives them" } },
      { id: '4:142:7', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '4:142:8', arabic: "قَامُوٓا۟", transliteration: "qāmū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they stand", ur: "وہ لوگ stand" } },
      { id: '4:142:9', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '4:142:10', arabic: "ٱلصَّلَوٰةِ", transliteration: "l-ṣalati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '4:142:11', arabic: "قَامُوا۟", transliteration: "qāmū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they stand", ur: "وہ لوگ stand" } },
      { id: '4:142:12', arabic: "كُسَالَىٰ", transliteration: "kusālā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lazily", ur: "lazily" } },
      { id: '4:142:13', arabic: "يُرَآءُونَ", transliteration: "yurāūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "showing off", ur: "showing off" } },
      { id: '4:142:14', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the people", ur: "(کو) the لوگ" } },
      { id: '4:142:15', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:142:16', arabic: "يَذْكُرُونَ", transliteration: "yadhkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they remember", ur: "وہ لوگ remember" } },
      { id: '4:142:17', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:142:18', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:142:19', arabic: "قَلِيلًۭا", transliteration: "qalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a little", ur: "a little" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' }
      ],
    },
  },
  143: {
    text: "مُّذَبْذَبِينَ بَيْنَ ذَٰلِكَ لَآ إِلَىٰ هَـٰٓؤُلَآءِ وَلَآ إِلَىٰ هَـٰٓؤُلَآءِ ۚ وَمَن يُضْلِلِ ٱللَّهُ فَلَن تَجِدَ لَهُۥ سَبِيلًۭا",
    translation: {
      en: "",
      ur: "بیچ میں پڑے لٹک رہے ہیں نہ ان کی طرف (ہوتے ہیں) نہ ان کی طرف اور جس کو خدا بھٹکائے تو اس کے لئے کبھی بھی رستہ نہ پاؤ گے",
    },
    words: [
      { id: '4:143:1', arabic: "مُّذَبْذَبِينَ", transliteration: "mudhabdhabīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Wavering", ur: "Wavering" } },
      { id: '4:143:2', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '4:143:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:143:4', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:143:5', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:143:6', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '4:143:7', arabic: "وَلَآ", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:143:8', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:143:9', arabic: "هَـٰٓؤُلَآءِ ۚ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '4:143:10', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:143:11', arabic: "يُضْلِلِ", transliteration: "yuḍ'lili", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been lead astray", ur: "has been lead astray" } },
      { id: '4:143:12', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah ", ur: "(by) اللہ " } },
      { id: '4:143:13', arabic: "فَلَن", transliteration: "falan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then never", ur: "پھر never" } },
      { id: '4:143:14', arabic: "تَجِدَ", transliteration: "tajida", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will find", ur: "تم will find" } },
      { id: '4:143:15', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '4:143:16', arabic: "سَبِيلًۭا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a way", ur: "a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  144: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَتَّخِذُوا۟ ٱلْكَـٰفِرِينَ أَوْلِيَآءَ مِن دُونِ ٱلْمُؤْمِنِينَ ۚ أَتُرِيدُونَ أَن تَجْعَلُوا۟ لِلَّهِ عَلَيْكُمْ سُلْطَـٰنًۭا مُّبِينًا",
    translation: {
      en: "",
      ur: "اے اہل ایمان! مومنوں کے سوا کافروں کو دوست نہ بناؤ کیا تم چاہتے ہو کہ اپنے اوپر خدا کا صریح الزام لو؟",
    },
    words: [
      { id: '4:144:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '4:144:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '4:144:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe[d]", ur: "ایمان لانا[d]" } },
      { id: '4:144:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '4:144:5', arabic: "تَتَّخِذُوا۟", transliteration: "tattakhidhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take", ur: "take" } },
      { id: '4:144:6', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbelievers", ur: "the کافر" } },
      { id: '4:144:7', arabic: "أَوْلِيَآءَ", transliteration: "awliyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) allies", ur: "(as) allies" } },
      { id: '4:144:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:144:9', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "instead of", ur: "instead of" } },
      { id: '4:144:10', arabic: "ٱلْمُؤْمِنِينَ ۚ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:144:11', arabic: "أَتُرِيدُونَ", transliteration: "aturīdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you wish", ur: "Do تم wish" } },
      { id: '4:144:12', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:144:13', arabic: "تَجْعَلُوا۟", transliteration: "tajʿalū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you make", ur: "تم make" } },
      { id: '4:144:14', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Allah", ur: "for اللہ" } },
      { id: '4:144:15', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against you", ur: "against تم" } },
      { id: '4:144:16', arabic: "سُلْطَـٰنًۭا", transliteration: "sul'ṭānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an evidence", ur: "an evidence" } },
      { id: '4:144:17', arabic: "مُّبِينًا", transliteration: "mubīnan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },
  145: {
    text: "إِنَّ ٱلْمُنَـٰفِقِينَ فِى ٱلدَّرْكِ ٱلْأَسْفَلِ مِنَ ٱلنَّارِ وَلَن تَجِدَ لَهُمْ نَصِيرًا",
    translation: {
      en: "",
      ur: "کچھ شک نہیں کہ منافق لوگ دوزخ کے سب سے نیچے کے درجے میں ہوں گے۔ اور تم ان کا کسی کو مددگار نہ پاؤ گے",
    },
    words: [
      { id: '4:145:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:145:2', arabic: "ٱلْمُنَـٰفِقِينَ", transliteration: "l-munāfiqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hypocrites", ur: "the hypocrites" } },
      { id: '4:145:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(will be) in", ur: "(will be) میں" } },
      { id: '4:145:4', arabic: "ٱلدَّرْكِ", transliteration: "l-darki", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the depths", ur: "the depths" } },
      { id: '4:145:5', arabic: "ٱلْأَسْفَلِ", transliteration: "l-asfali", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the lowest", ur: "the lowest" } },
      { id: '4:145:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:145:7', arabic: "ٱلنَّارِ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Fire", ur: "the آگ" } },
      { id: '4:145:8', arabic: "وَلَن", transliteration: "walan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and never", ur: "اور never" } },
      { id: '4:145:9', arabic: "تَجِدَ", transliteration: "tajida", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will find", ur: "تم will find" } },
      { id: '4:145:10', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:145:11', arabic: "نَصِيرًا", transliteration: "naṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "any helper", ur: "any helper" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  146: {
    text: "إِلَّا ٱلَّذِينَ تَابُوا۟ وَأَصْلَحُوا۟ وَٱعْتَصَمُوا۟ بِٱللَّهِ وَأَخْلَصُوا۟ دِينَهُمْ لِلَّهِ فَأُو۟لَـٰٓئِكَ مَعَ ٱلْمُؤْمِنِينَ ۖ وَسَوْفَ يُؤْتِ ٱللَّهُ ٱلْمُؤْمِنِينَ أَجْرًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "ہاں جنہوں نے توبہ کی اور اپنی حالت کو درست کیا اور خدا (کی رسی) کو مضبوط پکڑا اور خاص خدا کے فرمانبردار ہوگئے تو ایسے لوگ مومنوں کے زمرے میں ہوں گے اور خدا عنقریب مومنوں کو بڑا ثواب دے گا",
    },
    words: [
      { id: '4:146:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '4:146:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:146:3', arabic: "تَابُوا۟", transliteration: "tābū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "repent", ur: "repent" } },
      { id: '4:146:4', arabic: "وَأَصْلَحُوا۟", transliteration: "wa-aṣlaḥū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and correct (themselves)", ur: "اور correct (themselves)" } },
      { id: '4:146:5', arabic: "وَٱعْتَصَمُوا۟", transliteration: "wa-iʿ'taṣamū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hold fast", ur: "اور hold fast" } },
      { id: '4:146:6', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '4:146:7', arabic: "وَأَخْلَصُوا۟", transliteration: "wa-akhlaṣū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and are sincere", ur: "اور are sincere" } },
      { id: '4:146:8', arabic: "دِينَهُمْ", transliteration: "dīnahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) their religion", ur: "(میں) their religion" } },
      { id: '4:146:9', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Allah", ur: "for اللہ" } },
      { id: '4:146:10', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then those (will be)", ur: "پھر those (will be)" } },
      { id: '4:146:11', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '4:146:12', arabic: "ٱلْمُؤْمِنِينَ ۖ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:146:13', arabic: "وَسَوْفَ", transliteration: "wasawfa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And soon", ur: "اور soon" } },
      { id: '4:146:14', arabic: "يُؤْتِ", transliteration: "yu'ti", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be given", ur: "will be given" } },
      { id: '4:146:15', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:146:16', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '4:146:17', arabic: "أَجْرًا", transliteration: "ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reward", ur: "a ثواب" } },
      { id: '4:146:18', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'موصوف + صفت' }
      ],
    },
  },
  147: {
    text: "مَّا يَفْعَلُ ٱللَّهُ بِعَذَابِكُمْ إِن شَكَرْتُمْ وَءَامَنتُمْ ۚ وَكَانَ ٱللَّهُ شَاكِرًا عَلِيمًۭا",
    translation: {
      en: "",
      ur: "اگر تم (خدا کے شکرگزار رہو اور (اس پر) ایمان لے آؤ تو خدا تم کو عذاب دے کر کیا کرے گا۔ اور خدا تو قدرشناس اور دانا ہے",
    },
    words: [
      { id: '4:147:1', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "What", ur: "کیا" } },
      { id: '4:147:2', arabic: "يَفْعَلُ", transliteration: "yafʿalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "would do", ur: "would do" } },
      { id: '4:147:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:147:4', arabic: "بِعَذَابِكُمْ", transliteration: "biʿadhābikum", pos: ['P+N'], posLabel: 'P+N', root: "ع ذ ب", meaning: { en: "by punishing you", ur: "by punishing تم" } },
      { id: '4:147:5', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:147:6', arabic: "شَكَرْتُمْ", transliteration: "shakartum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are grateful", ur: "تم are grateful" } },
      { id: '4:147:7', arabic: "وَءَامَنتُمْ ۚ", transliteration: "waāmantum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you believe", ur: "اور تم ایمان لانا" } },
      { id: '4:147:8', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:147:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:147:10', arabic: "شَاكِرًا", transliteration: "shākiran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Appreciative", ur: "سب-Appreciative" } },
      { id: '4:147:11', arabic: "عَلِيمًۭا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  148: {
    text: "۞ لَّا يُحِبُّ ٱللَّهُ ٱلْجَهْرَ بِٱلسُّوٓءِ مِنَ ٱلْقَوْلِ إِلَّا مَن ظُلِمَ ۚ وَكَانَ ٱللَّهُ سَمِيعًا عَلِيمًا",
    translation: {
      en: "",
      ur: "خدا اس بات کو پسند نہیں کرتا کہ کوئی کسی کو علانیہ برا کہے مگر وہ جو مظلوم ہو۔ اور خدا (سب کچھ) سنتا (اور) جانتا ہے",
    },
    words: [
      { id: '4:148:1', arabic: "۞ لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(Does) not", ur: "(Does) نہیں" } },
      { id: '4:148:2', arabic: "يُحِبُّ", transliteration: "yuḥibbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "love", ur: "love" } },
      { id: '4:148:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:148:4', arabic: "ٱلْجَهْرَ", transliteration: "l-jahra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the public mention", ur: "the public mention" } },
      { id: '4:148:5', arabic: "بِٱلسُّوٓءِ", transliteration: "bil-sūi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of [the] evil", ur: "of [the] برا" } },
      { id: '4:148:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '4:148:7', arabic: "ٱلْقَوْلِ", transliteration: "l-qawli", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "[the] words", ur: "[the] words" } },
      { id: '4:148:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:148:9', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(by the one) who", ur: "(by the one) جو" } },
      { id: '4:148:10', arabic: "ظُلِمَ ۚ", transliteration: "ẓulima", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been wronged", ur: "has been wronged" } },
      { id: '4:148:11', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:148:12', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:148:13', arabic: "سَمِيعًا", transliteration: "samīʿan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Hearing", ur: "سب سننے والا" } },
      { id: '4:148:14', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصول + صلة' }
      ],
    },
  },
  149: {
    text: "إِن تُبْدُوا۟ خَيْرًا أَوْ تُخْفُوهُ أَوْ تَعْفُوا۟ عَن سُوٓءٍۢ فَإِنَّ ٱللَّهَ كَانَ عَفُوًّۭا قَدِيرًا",
    translation: {
      en: "",
      ur: "اگر تم لوگ بھلائی کھلم کھلا کرو گے یا چھپا کر یا برائی سے درگزر کرو گے تو خدا بھی معاف کرنے والا (اور) صاحب قدرت ہے",
    },
    words: [
      { id: '4:149:1', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '4:149:2', arabic: "تُبْدُوا۟", transliteration: "tub'dū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you disclose", ur: "تم disclose" } },
      { id: '4:149:3', arabic: "خَيْرًا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a good", ur: "a اچھا" } },
      { id: '4:149:4', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:149:5', arabic: "تُخْفُوهُ", transliteration: "tukh'fūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you conceal it", ur: "تم conceal it" } },
      { id: '4:149:6', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '4:149:7', arabic: "تَعْفُوا۟", transliteration: "taʿfū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "pardon", ur: "pardon" } },
      { id: '4:149:8', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '4:149:9', arabic: "سُوٓءٍۢ", transliteration: "sūin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an evil", ur: "an برا" } },
      { id: '4:149:10', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '4:149:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:149:12', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '4:149:13', arabic: "عَفُوًّۭا", transliteration: "ʿafuwwan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Pardoning", ur: "Oft-Pardoning" } },
      { id: '4:149:14', arabic: "قَدِيرًا", transliteration: "qadīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Powerful", ur: "سب-Powerful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  150: {
    text: "إِنَّ ٱلَّذِينَ يَكْفُرُونَ بِٱللَّهِ وَرُسُلِهِۦ وَيُرِيدُونَ أَن يُفَرِّقُوا۟ بَيْنَ ٱللَّهِ وَرُسُلِهِۦ وَيَقُولُونَ نُؤْمِنُ بِبَعْضٍۢ وَنَكْفُرُ بِبَعْضٍۢ وَيُرِيدُونَ أَن يَتَّخِذُوا۟ بَيْنَ ذَٰلِكَ سَبِيلًا",
    translation: {
      en: "",
      ur: "جو لوگ خدا سے اور اس کے پیغمبروں سے کفر کرتے ہیں اور خدا اور اس کے پیغمبروں میں فرق کرنا چاہتے ہیں اور کہتے ہیں کہ ہم بعض کو مانتے ہیں اور بعض کو نہیں مانتے اور ایمان اور کفر کے بیچ میں ایک راہ نکالنی چاہتے ہیں",
    },
    words: [
      { id: '4:150:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:150:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:150:3', arabic: "يَكْفُرُونَ", transliteration: "yakfurūna", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '4:150:4', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:150:5', arabic: "وَرُسُلِهِۦ", transliteration: "warusulihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messengers", ur: "اور His Messengers" } },
      { id: '4:150:6', arabic: "وَيُرِيدُونَ", transliteration: "wayurīdūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they wish", ur: "اور وہ لوگ wish" } },
      { id: '4:150:7', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:150:8', arabic: "يُفَرِّقُوا۟", transliteration: "yufarriqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they differentiate", ur: "وہ لوگ differentiate" } },
      { id: '4:150:9', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '4:150:10', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:150:11', arabic: "وَرُسُلِهِۦ", transliteration: "warusulihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messengers", ur: "اور His Messengers" } },
      { id: '4:150:12', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they say", ur: "اور وہ لوگ کہو" } },
      { id: '4:150:13', arabic: "نُؤْمِنُ", transliteration: "nu'minu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We believe", ur: "ہم ایمان لانا" } },
      { id: '4:150:14', arabic: "بِبَعْضٍۢ", transliteration: "bibaʿḍin", pos: ['P+N'], posLabel: 'P+N', root: "ب ع ض", meaning: { en: "in some", ur: "میں some" } },
      { id: '4:150:15', arabic: "وَنَكْفُرُ", transliteration: "wanakfuru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we disbelieve", ur: "اور ہم disbelieve" } },
      { id: '4:150:16', arabic: "بِبَعْضٍۢ", transliteration: "bibaʿḍin", pos: ['P+N'], posLabel: 'P+N', root: "ب ع ض", meaning: { en: "in others", ur: "میں others" } },
      { id: '4:150:17', arabic: "وَيُرِيدُونَ", transliteration: "wayurīdūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they wish", ur: "اور وہ لوگ wish" } },
      { id: '4:150:18', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:150:19', arabic: "يَتَّخِذُوا۟", transliteration: "yattakhidhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they take", ur: "وہ لوگ take" } },
      { id: '4:150:20', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '4:150:21', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:150:22', arabic: "سَبِيلًا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a way", ur: "a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  151: {
    text: "أُو۟لَـٰٓئِكَ هُمُ ٱلْكَـٰفِرُونَ حَقًّۭا ۚ وَأَعْتَدْنَا لِلْكَـٰفِرِينَ عَذَابًۭا مُّهِينًۭا",
    translation: {
      en: "",
      ur: "وہ بلا اشتباہ کافر ہیں اور کافروں کے لئے ہم نے ذلت کا عذاب تیار کر رکھا ہے",
    },
    words: [
      { id: '4:151:1', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those ", ur: "Those " } },
      { id: '4:151:2', arabic: "هُمُ", transliteration: "humu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '4:151:3', arabic: "ٱلْكَـٰفِرُونَ", transliteration: "l-kāfirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the disbelievers", ur: "(are) the کافر" } },
      { id: '4:151:4', arabic: "حَقًّۭا ۚ", transliteration: "ḥaqqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "truly", ur: "truly" } },
      { id: '4:151:5', arabic: "وَأَعْتَدْنَا", transliteration: "wa-aʿtadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We have prepared", ur: "اور ہم have prepared" } },
      { id: '4:151:6', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the disbelievers", ur: "for the کافر" } },
      { id: '4:151:7', arabic: "عَذَابًۭا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '4:151:8', arabic: "مُّهِينًۭا", transliteration: "muhīnan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humiliating", ur: "humiliating" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  152: {
    text: "وَٱلَّذِينَ ءَامَنُوا۟ بِٱللَّهِ وَرُسُلِهِۦ وَلَمْ يُفَرِّقُوا۟ بَيْنَ أَحَدٍۢ مِّنْهُمْ أُو۟لَـٰٓئِكَ سَوْفَ يُؤْتِيهِمْ أُجُورَهُمْ ۗ وَكَانَ ٱللَّهُ غَفُورًۭا رَّحِيمًۭا",
    translation: {
      en: "",
      ur: "اور جو لوگ خدا اور اس کے پیغمبروں پر ایمان لائے اور ان میں سے کسی میں فرق نہ کیا (یعنی سب کو مانا) ایسے لوگوں کو وہ عنقریب ان (کی نیکیوں) کے صلے عطا فرمائے گا اور خدا بخشنے والا مہربان ہے",
    },
    words: [
      { id: '4:152:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '4:152:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '4:152:3', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:152:4', arabic: "وَرُسُلِهِۦ", transliteration: "warusulihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messengers", ur: "اور His Messengers" } },
      { id: '4:152:5', arabic: "وَلَمْ", transliteration: "walam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:152:6', arabic: "يُفَرِّقُوا۟", transliteration: "yufarriqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they differentiate", ur: "وہ لوگ differentiate" } },
      { id: '4:152:7', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '4:152:8', arabic: "أَحَدٍۢ", transliteration: "aḥadin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(any) one", ur: "(any) one" } },
      { id: '4:152:9', arabic: "مِّنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '4:152:10', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those ", ur: "those " } },
      { id: '4:152:11', arabic: "سَوْفَ", transliteration: "sawfa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "soon", ur: "soon" } },
      { id: '4:152:12', arabic: "يُؤْتِيهِمْ", transliteration: "yu'tīhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will give them", ur: "وہ will give them" } },
      { id: '4:152:13', arabic: "أُجُورَهُمْ ۗ", transliteration: "ujūrahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their reward", ur: "their ثواب" } },
      { id: '4:152:14', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:152:15', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:152:16', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '4:152:17', arabic: "رَّحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  153: {
    text: "يَسْـَٔلُكَ أَهْلُ ٱلْكِتَـٰبِ أَن تُنَزِّلَ عَلَيْهِمْ كِتَـٰبًۭا مِّنَ ٱلسَّمَآءِ ۚ فَقَدْ سَأَلُوا۟ مُوسَىٰٓ أَكْبَرَ مِن ذَٰلِكَ فَقَالُوٓا۟ أَرِنَا ٱللَّهَ جَهْرَةًۭ فَأَخَذَتْهُمُ ٱلصَّـٰعِقَةُ بِظُلْمِهِمْ ۚ ثُمَّ ٱتَّخَذُوا۟ ٱلْعِجْلَ مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَـٰتُ فَعَفَوْنَا عَن ذَٰلِكَ ۚ وَءَاتَيْنَا مُوسَىٰ سُلْطَـٰنًۭا مُّبِينًۭا",
    translation: {
      en: "",
      ur: "(اے محمدﷺ) اہل کتاب تم سے درخواست کرتے ہیں کہ تم ان پر ایک (لکھی ہوئی) کتاب آسمان سے اتار لاؤ تو یہ موسیٰ سے اس سے بھی بڑی بڑی درخواستیں کرچکے ہیں (ان سے) کہتے تھے ہمیں خدا ظاہر (یعنی آنکھوں سے) دکھا دو سو ان کے گناہ کی وجہ سے ان کو بجلی نے آپکڑا۔ پھر کھلی نشانیاں آئے پیچھے بچھڑے کو (معبود) بنا بیٹھے تو اس سے بھی ہم نے درگزر کی۔ اور موسیٰ کو صریح غلبہ دیا",
    },
    words: [
      { id: '4:153:1', arabic: "يَسْـَٔلُكَ", transliteration: "yasaluka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Ask you", ur: "Ask تم" } },
      { id: '4:153:2', arabic: "أَهْلُ", transliteration: "ahlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) People", ur: "(the) لوگ" } },
      { id: '4:153:3', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Book", ur: "(of) the کتاب" } },
      { id: '4:153:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:153:5', arabic: "تُنَزِّلَ", transliteration: "tunazzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you bring down", ur: "تم bring down" } },
      { id: '4:153:6', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '4:153:7', arabic: "كِتَـٰبًۭا", transliteration: "kitāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a book", ur: "a کتاب" } },
      { id: '4:153:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:153:9', arabic: "ٱلسَّمَآءِ ۚ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heaven", ur: "the آسمان" } },
      { id: '4:153:10', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then indeed", ur: "پھر بیشک" } },
      { id: '4:153:11', arabic: "سَأَلُوا۟", transliteration: "sa-alū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (had) asked", ur: "وہ لوگ (had) asked" } },
      { id: '4:153:12', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '4:153:13', arabic: "أَكْبَرَ", transliteration: "akbara", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "greater", ur: "greater" } },
      { id: '4:153:14', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "than", ur: "than" } },
      { id: '4:153:15', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:153:16', arabic: "فَقَالُوٓا۟", transliteration: "faqālū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "for they said", ur: "for وہ لوگ کہا" } },
      { id: '4:153:17', arabic: "أَرِنَا", transliteration: "arinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Show us", ur: "Show us" } },
      { id: '4:153:18', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:153:19', arabic: "جَهْرَةًۭ", transliteration: "jahratan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifestly", ur: "manifestly" } },
      { id: '4:153:20', arabic: "فَأَخَذَتْهُمُ", transliteration: "fa-akhadhathumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so struck them", ur: "so struck them" } },
      { id: '4:153:21', arabic: "ٱلصَّـٰعِقَةُ", transliteration: "l-ṣāʿiqatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the thunderbolt", ur: "the thunderbolt" } },
      { id: '4:153:22', arabic: "بِظُلْمِهِمْ ۚ", transliteration: "biẓul'mihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their wrongdoing", ur: "for their wrongdoing" } },
      { id: '4:153:23', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '4:153:24', arabic: "ٱتَّخَذُوا۟", transliteration: "ittakhadhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they took", ur: "وہ لوگ took" } },
      { id: '4:153:25', arabic: "ٱلْعِجْلَ", transliteration: "l-ʿij'la", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the calf (for worship)", ur: "the calf (for عبادت)" } },
      { id: '4:153:26', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:153:27', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '4:153:28', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "[what]", ur: "[کیا]" } },
      { id: '4:153:29', arabic: "جَآءَتْهُمُ", transliteration: "jāathumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '4:153:30', arabic: "ٱلْبَيِّنَـٰتُ", transliteration: "l-bayinātu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the clear proofs", ur: "the clear proofs" } },
      { id: '4:153:31', arabic: "فَعَفَوْنَا", transliteration: "faʿafawnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then We forgave them", ur: "پھر ہم forgave them" } },
      { id: '4:153:32', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '4:153:33', arabic: "ذَٰلِكَ ۚ", transliteration: "dhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:153:34', arabic: "وَءَاتَيْنَا", transliteration: "waātaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We gave", ur: "اور ہم gave" } },
      { id: '4:153:35', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '4:153:36', arabic: "سُلْطَـٰنًۭا", transliteration: "sul'ṭānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an authority", ur: "an authority" } },
      { id: '4:153:37', arabic: "مُّبِينًۭا", transliteration: "mubīnan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'موصوف + صفت' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 29, to: 30, label: 'موصوف + صفت' },
        { from: 32, to: 33, label: 'جار + مجرور' },
        { from: 36, to: 37, label: 'موصوف + صفت' }
      ],
    },
  },
  154: {
    text: "وَرَفَعْنَا فَوْقَهُمُ ٱلطُّورَ بِمِيثَـٰقِهِمْ وَقُلْنَا لَهُمُ ٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًۭا وَقُلْنَا لَهُمْ لَا تَعْدُوا۟ فِى ٱلسَّبْتِ وَأَخَذْنَا مِنْهُم مِّيثَـٰقًا غَلِيظًۭا",
    translation: {
      en: "",
      ur: "اور ان سے عہد لینے کو ہم نے ان پر کوہ طور اٹھا کھڑا کیا اور انہیں حکم دیا کہ (شہر کے) دروازے میں (داخل ہونا تو) سجدہ کرتے ہوئے داخل ہونا اور یہ بھی حکم دیا کہ ہفتے کے دن (مچھلیاں پکڑنے) میں تجاویز (یعنی حکم کے خلاف) نہ کرنا۔ غرض ہم نے ان سے مضبوط عہد لیا",
    },
    words: [
      { id: '4:154:1', arabic: "وَرَفَعْنَا", transliteration: "warafaʿnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We raised", ur: "اور ہم raised" } },
      { id: '4:154:2', arabic: "فَوْقَهُمُ", transliteration: "fawqahumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '4:154:3', arabic: "ٱلطُّورَ", transliteration: "l-ṭūra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mount", ur: "the mount" } },
      { id: '4:154:4', arabic: "بِمِيثَـٰقِهِمْ", transliteration: "bimīthāqihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their covenant", ur: "for their covenant" } },
      { id: '4:154:5', arabic: "وَقُلْنَا", transliteration: "waqul'nā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and We said", ur: "اور ہم کہا" } },
      { id: '4:154:6', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '4:154:7', arabic: "ٱدْخُلُوا۟", transliteration: "ud'khulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Enter", ur: "Enter" } },
      { id: '4:154:8', arabic: "ٱلْبَابَ", transliteration: "l-bāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the gate", ur: "the gate" } },
      { id: '4:154:9', arabic: "سُجَّدًۭا", transliteration: "sujjadan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prostrating", ur: "prostrating" } },
      { id: '4:154:10', arabic: "وَقُلْنَا", transliteration: "waqul'nā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And We said", ur: "اور ہم کہا" } },
      { id: '4:154:11', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '4:154:12', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '4:154:13', arabic: "تَعْدُوا۟", transliteration: "taʿdū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "transgress", ur: "transgress" } },
      { id: '4:154:14', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:154:15', arabic: "ٱلسَّبْتِ", transliteration: "l-sabti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Sabbath", ur: "the Sabbath" } },
      { id: '4:154:16', arabic: "وَأَخَذْنَا", transliteration: "wa-akhadhnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We took", ur: "اور ہم took" } },
      { id: '4:154:17', arabic: "مِنْهُم", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '4:154:18', arabic: "مِّيثَـٰقًا", transliteration: "mīthāqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a covenant", ur: "a covenant" } },
      { id: '4:154:19', arabic: "غَلِيظًۭا", transliteration: "ghalīẓan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "solemn", ur: "solemn" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ],
    },
  },
  155: {
    text: "فَبِمَا نَقْضِهِم مِّيثَـٰقَهُمْ وَكُفْرِهِم بِـَٔايَـٰتِ ٱللَّهِ وَقَتْلِهِمُ ٱلْأَنۢبِيَآءَ بِغَيْرِ حَقٍّۢ وَقَوْلِهِمْ قُلُوبُنَا غُلْفٌۢ ۚ بَلْ طَبَعَ ٱللَّهُ عَلَيْهَا بِكُفْرِهِمْ فَلَا يُؤْمِنُونَ إِلَّا قَلِيلًۭا",
    translation: {
      en: "",
      ur: "(لیکن انہوں نے عہد کو توڑ ڈالا) تو ان کے عہد توڑ دینے اور خدا کی آیتوں سے کفر کرنے اور انبیاء کو ناحق مار ڈالنے اور یہ کہنے کے سبب کہ ہمارے دلوں پر پردے (پڑے ہوئے) ہیں۔ (خدا نے ان کو مردود کردیا اور ان کے دلوں پر پردے نہیں ہیں) بلکہ ان کے کفر کے سبب خدا نے ان پر مہر کردی ہے تو یہ کم ہی ایمان لاتے ہیں",
    },
    words: [
      { id: '4:155:1', arabic: "فَبِمَا", transliteration: "fabimā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then because of", ur: "پھر because of" } },
      { id: '4:155:2', arabic: "نَقْضِهِم", transliteration: "naqḍihim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their breaking", ur: "their breaking" } },
      { id: '4:155:3', arabic: "مِّيثَـٰقَهُمْ", transliteration: "mīthāqahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their covenant", ur: "(of) their covenant" } },
      { id: '4:155:4', arabic: "وَكُفْرِهِم", transliteration: "wakuf'rihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their disbelief", ur: "اور their disbelief" } },
      { id: '4:155:5', arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in (the) Signs", ur: "میں (the) نشانیاں" } },
      { id: '4:155:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:155:7', arabic: "وَقَتْلِهِمُ", transliteration: "waqatlihimu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their killing", ur: "اور their killing" } },
      { id: '4:155:8', arabic: "ٱلْأَنۢبِيَآءَ", transliteration: "l-anbiyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Prophets", ur: "(of) the Prophets" } },
      { id: '4:155:9', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '4:155:10', arabic: "حَقٍّۢ", transliteration: "ḥaqqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any right", ur: "any right" } },
      { id: '4:155:11', arabic: "وَقَوْلِهِمْ", transliteration: "waqawlihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and their saying", ur: "اور their saying" } },
      { id: '4:155:12', arabic: "قُلُوبُنَا", transliteration: "qulūbunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our hearts", ur: "Our hearts" } },
      { id: '4:155:13', arabic: "غُلْفٌۢ ۚ", transliteration: "ghul'fun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) wrapped", ur: "(are) wrapped" } },
      { id: '4:155:14', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '4:155:15', arabic: "طَبَعَ", transliteration: "ṭabaʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) set a seal", ur: "(has) set a seal" } },
      { id: '4:155:16', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:155:17', arabic: "عَلَيْهَا", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on their (hearts)", ur: "پر their (hearts)" } },
      { id: '4:155:18', arabic: "بِكُفْرِهِمْ", transliteration: "bikuf'rihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their disbelief", ur: "for their disbelief" } },
      { id: '4:155:19', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so not", ur: "so نہیں" } },
      { id: '4:155:20', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '4:155:21', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:155:22', arabic: "قَلِيلًۭا", transliteration: "qalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a few", ur: "a few" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'فعل + فاعل' }
      ],
    },
  },
  156: {
    text: "وَبِكُفْرِهِمْ وَقَوْلِهِمْ عَلَىٰ مَرْيَمَ بُهْتَـٰنًا عَظِيمًۭا",
    translation: {
      en: "",
      ur: "اور ان کے کفر کے سبب اور مریم پر ایک بہتان عظیم باندھنے کے سبب",
    },
    words: [
      { id: '4:156:1', arabic: "وَبِكُفْرِهِمْ", transliteration: "wabikuf'rihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for their disbelief", ur: "اور for their disbelief" } },
      { id: '4:156:2', arabic: "وَقَوْلِهِمْ", transliteration: "waqawlihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and their saying", ur: "اور their saying" } },
      { id: '4:156:3', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '4:156:4', arabic: "مَرْيَمَ", transliteration: "maryama", pos: ['N'], posLabel: 'N', root: "م ر ي م", meaning: { en: "Maryam", ur: "Maryam" } },
      { id: '4:156:5', arabic: "بُهْتَـٰنًا", transliteration: "buh'tānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a slander", ur: "a slander" } },
      { id: '4:156:6', arabic: "عَظِيمًۭا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  157: {
    text: "وَقَوْلِهِمْ إِنَّا قَتَلْنَا ٱلْمَسِيحَ عِيسَى ٱبْنَ مَرْيَمَ رَسُولَ ٱللَّهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَـٰكِن شُبِّهَ لَهُمْ ۚ وَإِنَّ ٱلَّذِينَ ٱخْتَلَفُوا۟ فِيهِ لَفِى شَكٍّۢ مِّنْهُ ۚ مَا لَهُم بِهِۦ مِنْ عِلْمٍ إِلَّا ٱتِّبَاعَ ٱلظَّنِّ ۚ وَمَا قَتَلُوهُ يَقِينًۢا",
    translation: {
      en: "",
      ur: "اور یہ کہنے کے سبب کہ ہم نے مریم کے بیٹے عیسیٰ مسیح کو جو خدا کے پیغمبر (کہلاتے) تھے قتل کردیا ہے (خدا نے ان کو معلون کردیا) اور انہوں نے عیسیٰ کو قتل نہیں کیا اور نہ انہیں سولی پر چڑھایا بلکہ ان کو ان کی سی صورت معلوم ہوئی اور جو لوگ ان کے بارے میں اختلاف کرتے ہیں وہ ان کے حال سے شک میں پڑے ہوئے ہیں اور پیروئی ظن کے سوا ان کو اس کا مطلق علم نہیں۔ اور انہوں نے عیسیٰ کو یقیناً قتل نہیں کیا",
    },
    words: [
      { id: '4:157:1', arabic: "وَقَوْلِهِمْ", transliteration: "waqawlihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And for their saying", ur: "اور for their saying" } },
      { id: '4:157:2', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '4:157:3', arabic: "قَتَلْنَا", transliteration: "qatalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "killed", ur: "killed" } },
      { id: '4:157:4', arabic: "ٱلْمَسِيحَ", transliteration: "l-masīḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messiah", ur: "the Messiah" } },
      { id: '4:157:5', arabic: "عِيسَى", transliteration: "ʿīsā", pos: ['N'], posLabel: 'N', root: "ع ي س", meaning: { en: "Isa", ur: "Isa" } },
      { id: '4:157:6', arabic: "ٱبْنَ", transliteration: "ib'na", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "son", ur: "بیٹا" } },
      { id: '4:157:7', arabic: "مَرْيَمَ", transliteration: "maryama", pos: ['N'], posLabel: 'N', root: "م ر ي م", meaning: { en: "(of) Maryam", ur: "(of) Maryam" } },
      { id: '4:157:8', arabic: "رَسُولَ", transliteration: "rasūla", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "(the) Messenger", ur: "(the) رسول" } },
      { id: '4:157:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:157:10', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '4:157:11', arabic: "قَتَلُوهُ", transliteration: "qatalūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they killed him", ur: "وہ لوگ killed him" } },
      { id: '4:157:12', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:157:13', arabic: "صَلَبُوهُ", transliteration: "ṣalabūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they crucified him", ur: "وہ لوگ crucified him" } },
      { id: '4:157:14', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '4:157:15', arabic: "شُبِّهَ", transliteration: "shubbiha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it was made to appear (so)", ur: "it was made کو appear (so)" } },
      { id: '4:157:16', arabic: "لَهُمْ ۚ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '4:157:17', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '4:157:18', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:157:19', arabic: "ٱخْتَلَفُوا۟", transliteration: "ikh'talafū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "differ", ur: "differ" } },
      { id: '4:157:20', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:157:21', arabic: "لَفِى", transliteration: "lafī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) surely in", ur: "(are) یقیناً میں" } },
      { id: '4:157:22', arabic: "شَكٍّۢ", transliteration: "shakkin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "doubt", ur: "doubt" } },
      { id: '4:157:23', arabic: "مِّنْهُ ۚ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about it", ur: "about it" } },
      { id: '4:157:24', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '4:157:25', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:157:26', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about it", ur: "about it" } },
      { id: '4:157:27', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '4:157:28', arabic: "عِلْمٍ", transliteration: "ʿil'min", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "(any) knowledge", ur: "(any) knowledge" } },
      { id: '4:157:29', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:157:30', arabic: "ٱتِّبَاعَ", transliteration: "ittibāʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) following", ur: "(the) following" } },
      { id: '4:157:31', arabic: "ٱلظَّنِّ ۚ", transliteration: "l-ẓani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) assumption", ur: "(of) assumption" } },
      { id: '4:157:32', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '4:157:33', arabic: "قَتَلُوهُ", transliteration: "qatalūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they killed him", ur: "وہ لوگ killed him" } },
      { id: '4:157:34', arabic: "يَقِينًۢا", transliteration: "yaqīnan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "certainly", ur: "certainly" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'جار + مجرور' },
        { from: 30, to: 31, label: 'فعل + فاعل' }
      ],
    },
  },
  158: {
    text: "بَل رَّفَعَهُ ٱللَّهُ إِلَيْهِ ۚ وَكَانَ ٱللَّهُ عَزِيزًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "بلکہ خدا نے ان کو اپنی طرف اٹھا لیا۔ اور خدا غالب اور حکمت والا ہے",
    },
    words: [
      { id: '4:158:1', arabic: "بَل", transliteration: "bal", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '4:158:2', arabic: "رَّفَعَهُ", transliteration: "rafaʿahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he was raised", ur: "وہ was raised" } },
      { id: '4:158:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '4:158:4', arabic: "إِلَيْهِ ۚ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "towards Him", ur: "towards Him" } },
      { id: '4:158:5', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:158:6', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:158:7', arabic: "عَزِيزًا", transliteration: "ʿazīzan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Mighty", ur: "سب-Mighty" } },
      { id: '4:158:8', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  159: {
    text: "وَإِن مِّنْ أَهْلِ ٱلْكِتَـٰبِ إِلَّا لَيُؤْمِنَنَّ بِهِۦ قَبْلَ مَوْتِهِۦ ۖ وَيَوْمَ ٱلْقِيَـٰمَةِ يَكُونُ عَلَيْهِمْ شَهِيدًۭا",
    translation: {
      en: "",
      ur: "اور کوئی اہل کتاب نہیں ہوگا مگر ان کی موت سے پہلے ان پر ایمان لے آئے گا۔ اور وہ قیامت کے دن ان پر گواہ ہوں گے",
    },
    words: [
      { id: '4:159:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (there is) not", ur: "اور (there is) نہیں" } },
      { id: '4:159:2', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:159:3', arabic: "أَهْلِ", transliteration: "ahli", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "(the) People", ur: "(the) لوگ" } },
      { id: '4:159:4', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Book", ur: "(of) the کتاب" } },
      { id: '4:159:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '4:159:6', arabic: "لَيُؤْمِنَنَّ", transliteration: "layu'minanna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely he believes", ur: "یقیناً وہ believes" } },
      { id: '4:159:7', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in him", ur: "میں him" } },
      { id: '4:159:8', arabic: "قَبْلَ", transliteration: "qabla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '4:159:9', arabic: "مَوْتِهِۦ ۖ", transliteration: "mawtihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his death", ur: "his موت" } },
      { id: '4:159:10', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (on the) Day", ur: "اور (پر the) دن" } },
      { id: '4:159:11', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '4:159:12', arabic: "يَكُونُ", transliteration: "yakūnu", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "he will be", ur: "وہ will be" } },
      { id: '4:159:13', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against them", ur: "against them" } },
      { id: '4:159:14', arabic: "شَهِيدًۭا", transliteration: "shahīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a witness", ur: "a witness" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  160: {
    text: "فَبِظُلْمٍۢ مِّنَ ٱلَّذِينَ هَادُوا۟ حَرَّمْنَا عَلَيْهِمْ طَيِّبَـٰتٍ أُحِلَّتْ لَهُمْ وَبِصَدِّهِمْ عَن سَبِيلِ ٱللَّهِ كَثِيرًۭا",
    translation: {
      en: "",
      ur: "تو ہم نے یہودیوں کے ظلموں کے سبب (بہت سی) پاکیزہ چیزیں جو ان کو حلال تھیں ان پر حرام کردیں اور اس سبب سے بھی کہ وہ اکثر خدا کے رستے سے (لوگوں کو) روکتے تھے",
    },
    words: [
      { id: '4:160:1', arabic: "فَبِظُلْمٍۢ", transliteration: "fabiẓul'min", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then for (the) wrongdoing", ur: "پھر for (the) wrongdoing" } },
      { id: '4:160:2', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '4:160:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:160:4', arabic: "هَادُوا۟", transliteration: "hādū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were Jews", ur: "were Jews" } },
      { id: '4:160:5', arabic: "حَرَّمْنَا", transliteration: "ḥarramnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We made unlawful", ur: "ہم made unlawful" } },
      { id: '4:160:6', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:160:7', arabic: "طَيِّبَـٰتٍ", transliteration: "ṭayyibātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good things", ur: "اچھا things" } },
      { id: '4:160:8', arabic: "أُحِلَّتْ", transliteration: "uḥillat", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "which had been lawful", ur: "جو had been lawful" } },
      { id: '4:160:9', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '4:160:10', arabic: "وَبِصَدِّهِمْ", transliteration: "wabiṣaddihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for their hindering", ur: "اور for their hindering" } },
      { id: '4:160:11', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:160:12', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:160:13', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah ", ur: "(of) اللہ " } },
      { id: '4:160:14', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  161: {
    text: "وَأَخْذِهِمُ ٱلرِّبَوٰا۟ وَقَدْ نُهُوا۟ عَنْهُ وَأَكْلِهِمْ أَمْوَٰلَ ٱلنَّاسِ بِٱلْبَـٰطِلِ ۚ وَأَعْتَدْنَا لِلْكَـٰفِرِينَ مِنْهُمْ عَذَابًا أَلِيمًۭا",
    translation: {
      en: "",
      ur: "اور اس سبب سے بھی کہ باوجود منع کئے جانے کے سود لیتے تھے اور اس سبب سے بھی کہ لوگوں کا مال ناحق کھاتے تھے۔ اور ان میں سے جو کافر ہیں ان کے لئے ہم نے درد دینے والا عذاب تیار کر رکھا ہے",
    },
    words: [
      { id: '4:161:1', arabic: "وَأَخْذِهِمُ", transliteration: "wa-akhdhihimu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for their taking", ur: "اور for their taking" } },
      { id: '4:161:2', arabic: "ٱلرِّبَوٰا۟", transliteration: "l-riba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] usury", ur: "(of) [the] usury" } },
      { id: '4:161:3', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while certainly", ur: "while certainly" } },
      { id: '4:161:4', arabic: "نُهُوا۟", transliteration: "nuhū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were forbidden", ur: "وہ لوگ were forbidden" } },
      { id: '4:161:5', arabic: "عَنْهُ", transliteration: "ʿanhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '4:161:6', arabic: "وَأَكْلِهِمْ", transliteration: "wa-aklihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (for) their consuming", ur: "اور (for) their consuming" } },
      { id: '4:161:7', arabic: "أَمْوَٰلَ", transliteration: "amwāla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wealth", ur: "wealth" } },
      { id: '4:161:8', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the people", ur: "(of) the لوگ" } },
      { id: '4:161:9', arabic: "بِٱلْبَـٰطِلِ ۚ", transliteration: "bil-bāṭili", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "wrongfully", ur: "wrongfully" } },
      { id: '4:161:10', arabic: "وَأَعْتَدْنَا", transliteration: "wa-aʿtadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We have prepared", ur: "اور ہم have prepared" } },
      { id: '4:161:11', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the disbelievers", ur: "for the کافر" } },
      { id: '4:161:12', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '4:161:13', arabic: "عَذَابًا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '4:161:14', arabic: "أَلِيمًۭا", transliteration: "alīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "painful", ur: "painful" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  162: {
    text: "لَّـٰكِنِ ٱلرَّٰسِخُونَ فِى ٱلْعِلْمِ مِنْهُمْ وَٱلْمُؤْمِنُونَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ ۚ وَٱلْمُقِيمِينَ ٱلصَّلَوٰةَ ۚ وَٱلْمُؤْتُونَ ٱلزَّكَوٰةَ وَٱلْمُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ أُو۟لَـٰٓئِكَ سَنُؤْتِيهِمْ أَجْرًا عَظِيمًا",
    translation: {
      en: "",
      ur: "مگر جو لوگ ان میں سے علم میں پکے ہیں اور جو مومن ہیں وہ اس (کتاب) پر جو تم پر نازل ہوئی اور جو (کتابیں) تم سے پہلے نازل ہوئیں (سب پر) ایمان رکھتے ہیں اور نماز پڑھتے ہیں اور زکوٰة دیتے ہیں اور خدا اور روز آخرت کو مانتے ہیں۔ ان کو ہم عنقریب اجر عظیم دیں گے",
    },
    words: [
      { id: '4:162:1', arabic: "لَّـٰكِنِ", transliteration: "lākini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '4:162:2', arabic: "ٱلرَّٰسِخُونَ", transliteration: "l-rāsikhūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who are firm", ur: "the ones جو are firm" } },
      { id: '4:162:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:162:4', arabic: "ٱلْعِلْمِ", transliteration: "l-ʿil'mi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the knowledge", ur: "the knowledge" } },
      { id: '4:162:5', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '4:162:6', arabic: "وَٱلْمُؤْمِنُونَ", transliteration: "wal-mu'minūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the believers", ur: "اور the مومنین" } },
      { id: '4:162:7', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '4:162:8', arabic: "بِمَآ", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in what", ur: "میں کیا" } },
      { id: '4:162:9', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) revealed", ur: "(is) revealed" } },
      { id: '4:162:10', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:162:11', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '4:162:12', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was revealed", ur: "was revealed" } },
      { id: '4:162:13', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:162:14', arabic: "قَبْلِكَ ۚ", transliteration: "qablika", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '4:162:15', arabic: "وَٱلْمُقِيمِينَ", transliteration: "wal-muqīmīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the ones who establish", ur: "اور the ones جو establish" } },
      { id: '4:162:16', arabic: "ٱلصَّلَوٰةَ ۚ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '4:162:17', arabic: "وَٱلْمُؤْتُونَ", transliteration: "wal-mu'tūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the ones who give", ur: "اور the ones جو give" } },
      { id: '4:162:18', arabic: "ٱلزَّكَوٰةَ", transliteration: "l-zakata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the zakah", ur: "the zakah" } },
      { id: '4:162:19', arabic: "وَٱلْمُؤْمِنُونَ", transliteration: "wal-mu'minūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the ones who believe", ur: "اور the ones جو ایمان لانا" } },
      { id: '4:162:20', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:162:21', arabic: "وَٱلْيَوْمِ", transliteration: "wal-yawmi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "and the Day", ur: "اور the دن" } },
      { id: '4:162:22', arabic: "ٱلْـَٔاخِرِ", transliteration: "l-ākhiri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Last ", ur: "the Last " } },
      { id: '4:162:23', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '4:162:24', arabic: "سَنُؤْتِيهِمْ", transliteration: "sanu'tīhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will give them", ur: "ہم will give them" } },
      { id: '4:162:25', arabic: "أَجْرًا", transliteration: "ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reward", ur: "a ثواب" } },
      { id: '4:162:26', arabic: "عَظِيمًا", transliteration: "ʿaẓīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'موصوف + صفت' }
      ],
    },
  },
  163: {
    text: "۞ إِنَّآ أَوْحَيْنَآ إِلَيْكَ كَمَآ أَوْحَيْنَآ إِلَىٰ نُوحٍۢ وَٱلنَّبِيِّـۧنَ مِنۢ بَعْدِهِۦ ۚ وَأَوْحَيْنَآ إِلَىٰٓ إِبْرَٰهِيمَ وَإِسْمَـٰعِيلَ وَإِسْحَـٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطِ وَعِيسَىٰ وَأَيُّوبَ وَيُونُسَ وَهَـٰرُونَ وَسُلَيْمَـٰنَ ۚ وَءَاتَيْنَا دَاوُۥدَ زَبُورًۭا",
    translation: {
      en: "",
      ur: "(اے محمدﷺ) ہم نے تمہاری طرف اسی طرح وحی بھیجی ہے جس طرح نوح اور ان سے پچھلے پیغمبروں کی طرف بھیجی تھی۔ اور ابراہیم اور اسمعیل اور اسحاق اور یعقوب اور اولاد یعقوب اور عیسیٰ اور ایوب اور یونس اور ہارون اور سلیمان کی طرف بھی ہم نے وحی بھیجی تھی اور داؤد کو ہم نے زبور بھی عنایت کی تھی",
    },
    words: [
      { id: '4:163:1', arabic: "۞ إِنَّآ", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, We", ur: "بیشک, ہم" } },
      { id: '4:163:2', arabic: "أَوْحَيْنَآ", transliteration: "awḥaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have revealed", ur: "have revealed" } },
      { id: '4:163:3', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:163:4', arabic: "كَمَآ", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "as", ur: "as" } },
      { id: '4:163:5', arabic: "أَوْحَيْنَآ", transliteration: "awḥaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We revealed", ur: "ہم revealed" } },
      { id: '4:163:6', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:163:7', arabic: "نُوحٍۢ", transliteration: "nūḥin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nuh", ur: "Nuh" } },
      { id: '4:163:8', arabic: "وَٱلنَّبِيِّـۧنَ", transliteration: "wal-nabiyīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Prophets", ur: "اور the Prophets" } },
      { id: '4:163:9', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:163:10', arabic: "بَعْدِهِۦ ۚ", transliteration: "baʿdihi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after him", ur: "بعد him" } },
      { id: '4:163:11', arabic: "وَأَوْحَيْنَآ", transliteration: "wa-awḥaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We revealed", ur: "اور ہم revealed" } },
      { id: '4:163:12', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:163:13', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } },
      { id: '4:163:14', arabic: "وَإِسْمَـٰعِيلَ", transliteration: "wa-is'māʿīla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Ishmael", ur: "اور Ishmael" } },
      { id: '4:163:15', arabic: "وَإِسْحَـٰقَ", transliteration: "wa-is'ḥāqa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Isaac", ur: "اور Isaac" } },
      { id: '4:163:16', arabic: "وَيَعْقُوبَ", transliteration: "wayaʿqūba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Yaqub", ur: "اور Yaqub" } },
      { id: '4:163:17', arabic: "وَٱلْأَسْبَاطِ", transliteration: "wal-asbāṭi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the tribes", ur: "اور the tribes" } },
      { id: '4:163:18', arabic: "وَعِيسَىٰ", transliteration: "waʿīsā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ي س", meaning: { en: "and Isa", ur: "اور Isa" } },
      { id: '4:163:19', arabic: "وَأَيُّوبَ", transliteration: "wa-ayyūba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Ayyub", ur: "اور Ayyub" } },
      { id: '4:163:20', arabic: "وَيُونُسَ", transliteration: "wayūnusa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Yunus", ur: "اور Yunus" } },
      { id: '4:163:21', arabic: "وَهَـٰرُونَ", transliteration: "wahārūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Harun", ur: "اور Harun" } },
      { id: '4:163:22', arabic: "وَسُلَيْمَـٰنَ ۚ", transliteration: "wasulaymāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Sulaiman", ur: "اور Sulaiman" } },
      { id: '4:163:23', arabic: "وَءَاتَيْنَا", transliteration: "waātaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We gave", ur: "اور ہم gave" } },
      { id: '4:163:24', arabic: "دَاوُۥدَ", transliteration: "dāwūda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Dawood", ur: "(کو) Dawood" } },
      { id: '4:163:25', arabic: "زَبُورًۭا", transliteration: "zabūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Zaboor", ur: "the Zaboor" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  164: {
    text: "وَرُسُلًۭا قَدْ قَصَصْنَـٰهُمْ عَلَيْكَ مِن قَبْلُ وَرُسُلًۭا لَّمْ نَقْصُصْهُمْ عَلَيْكَ ۚ وَكَلَّمَ ٱللَّهُ مُوسَىٰ تَكْلِيمًۭا",
    translation: {
      en: "",
      ur: "اور بہت سے پیغمبر ہیں جن کے حالات ہم تم سے پیشتر بیان کرچکے ہیں اور بہت سے پیغمبر ہیں جن کے حالات تم سے بیان نہیں کئے۔ اور موسیٰ سے تو خدا نے باتیں بھی کیں",
    },
    words: [
      { id: '4:164:1', arabic: "وَرُسُلًۭا", transliteration: "warusulan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Messengers", ur: "اور Messengers" } },
      { id: '4:164:2', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely", ur: "یقیناً" } },
      { id: '4:164:3', arabic: "قَصَصْنَـٰهُمْ", transliteration: "qaṣaṣnāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (have) mentioned them", ur: "ہم (have) mentioned them" } },
      { id: '4:164:4', arabic: "عَلَيْكَ", transliteration: "ʿalayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:164:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:164:6', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '4:164:7', arabic: "وَرُسُلًۭا", transliteration: "warusulan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Messengers", ur: "اور Messengers" } },
      { id: '4:164:8', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:164:9', arabic: "نَقْصُصْهُمْ", transliteration: "naqṣuṣ'hum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (have) mentioned them", ur: "ہم (have) mentioned them" } },
      { id: '4:164:10', arabic: "عَلَيْكَ ۚ", transliteration: "ʿalayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:164:11', arabic: "وَكَلَّمَ", transliteration: "wakallama", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And spoke", ur: "اور spoke" } },
      { id: '4:164:12', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:164:13', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "(to) Musa", ur: "(کو) Musa" } },
      { id: '4:164:14', arabic: "تَكْلِيمًۭا", transliteration: "taklīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in a) conversation", ur: "(میں a) conversation" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  165: {
    text: "رُّسُلًۭا مُّبَشِّرِينَ وَمُنذِرِينَ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى ٱللَّهِ حُجَّةٌۢ بَعْدَ ٱلرُّسُلِ ۚ وَكَانَ ٱللَّهُ عَزِيزًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "(سب) پیغمبروں کو (خدا نے) خوشخبری سنانے والے اور ڈرانے والے (بنا کر بھیجا تھا) تاکہ پیغمبروں کے آنے کے بعد لوگوں کو خدا پر الزام کا موقع نہ رہے اور خدا غالب حکمت والا ہے",
    },
    words: [
      { id: '4:165:1', arabic: "رُّسُلًۭا", transliteration: "rusulan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messengers", ur: "Messengers" } },
      { id: '4:165:2', arabic: "مُّبَشِّرِينَ", transliteration: "mubashirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "bearers of glad tidings", ur: "bearers of glad tidings" } },
      { id: '4:165:3', arabic: "وَمُنذِرِينَ", transliteration: "wamundhirīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and warners", ur: "اور warners" } },
      { id: '4:165:4', arabic: "لِئَلَّا", transliteration: "li-allā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that not", ur: "so وہ نہیں" } },
      { id: '4:165:5', arabic: "يَكُونَ", transliteration: "yakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "there is", ur: "there is" } },
      { id: '4:165:6', arabic: "لِلنَّاسِ", transliteration: "lilnnāsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for mankind", ur: "for mankind" } },
      { id: '4:165:7', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '4:165:8', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:165:9', arabic: "حُجَّةٌۢ", transliteration: "ḥujjatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any argument", ur: "any argument" } },
      { id: '4:165:10', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '4:165:11', arabic: "ٱلرُّسُلِ ۚ", transliteration: "l-rusuli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } },
      { id: '4:165:12', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:165:13', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:165:14', arabic: "عَزِيزًا", transliteration: "ʿazīzan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Mighty", ur: "سب-Mighty" } },
      { id: '4:165:15', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  166: {
    text: "لَّـٰكِنِ ٱللَّهُ يَشْهَدُ بِمَآ أَنزَلَ إِلَيْكَ ۖ أَنزَلَهُۥ بِعِلْمِهِۦ ۖ وَٱلْمَلَـٰٓئِكَةُ يَشْهَدُونَ ۚ وَكَفَىٰ بِٱللَّهِ شَهِيدًا",
    translation: {
      en: "",
      ur: "لیکن خدا نے جو (کتاب) تم پر نازل کی ہے اس کی نسبت خدا گواہی دیتا ہے کہ اس نے اپنے علم سے نازل کی ہے اور فرشتے بھی گواہی دیتے ہیں۔ اور گواہ تو خدا ہی کافی ہے",
    },
    words: [
      { id: '4:166:1', arabic: "لَّـٰكِنِ", transliteration: "lākini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '4:166:2', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:166:3', arabic: "يَشْهَدُ", transliteration: "yashhadu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "bears witness", ur: "bears witness" } },
      { id: '4:166:4', arabic: "بِمَآ", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to what", ur: "کو کیا" } },
      { id: '4:166:5', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "He (has) revealed", ur: "وہ (has) revealed" } },
      { id: '4:166:6', arabic: "إِلَيْكَ ۖ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:166:7', arabic: "أَنزَلَهُۥ", transliteration: "anzalahu", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "He has sent it down", ur: "وہ has sent it down" } },
      { id: '4:166:8', arabic: "بِعِلْمِهِۦ ۖ", transliteration: "biʿil'mihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with His Knowledge", ur: "ساتھ His Knowledge" } },
      { id: '4:166:9', arabic: "وَٱلْمَلَـٰٓئِكَةُ", transliteration: "wal-malāikatu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Angels", ur: "اور the Angels" } },
      { id: '4:166:10', arabic: "يَشْهَدُونَ ۚ", transliteration: "yashhadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "bear witness", ur: "bear witness" } },
      { id: '4:166:11', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And is sufficient", ur: "اور is sufficient" } },
      { id: '4:166:12', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:166:13', arabic: "شَهِيدًا", transliteration: "shahīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a Witness", ur: "(as) a Witness" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  167: {
    text: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ وَصَدُّوا۟ عَن سَبِيلِ ٱللَّهِ قَدْ ضَلُّوا۟ ضَلَـٰلًۢا بَعِيدًا",
    translation: {
      en: "",
      ur: "جن لوگوں نے کفر کیا اور (لوگوں کو) خدا کے رستے سے روکا وہ رستے سے بھٹک کر دور جا پڑے",
    },
    words: [
      { id: '4:167:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:167:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:167:3', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '4:167:4', arabic: "وَصَدُّوا۟", transliteration: "waṣaddū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hinder", ur: "اور hinder" } },
      { id: '4:167:5', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:167:6', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:167:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:167:8', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely", ur: "یقیناً" } },
      { id: '4:167:9', arabic: "ضَلُّوا۟", transliteration: "ḍallū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have strayed", ur: "وہ لوگ have strayed" } },
      { id: '4:167:10', arabic: "ضَلَـٰلًۢا", transliteration: "ḍalālan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "straying", ur: "straying" } },
      { id: '4:167:11', arabic: "بَعِيدًا", transliteration: "baʿīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far away", ur: "far away" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  168: {
    text: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ وَظَلَمُوا۟ لَمْ يَكُنِ ٱللَّهُ لِيَغْفِرَ لَهُمْ وَلَا لِيَهْدِيَهُمْ طَرِيقًا",
    translation: {
      en: "",
      ur: "جو لوگ کافر ہوئے اور ظلم کرتے رہے خدا ان کو بخشنے والا نہیں اور نہ انہیں رستہ ہی دکھائے گا",
    },
    words: [
      { id: '4:168:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '4:168:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:168:3', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '4:168:4', arabic: "وَظَلَمُوا۟", transliteration: "waẓalamū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ظ ل م", meaning: { en: "and did wrong", ur: "اور did wrong" } },
      { id: '4:168:5', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:168:6', arabic: "يَكُنِ", transliteration: "yakuni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will", ur: "will" } },
      { id: '4:168:7', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:168:8', arabic: "لِيَغْفِرَ", transliteration: "liyaghfira", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[to] forgive", ur: "[کو] forgive" } },
      { id: '4:168:9', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "them", ur: "them" } },
      { id: '4:168:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:168:11', arabic: "لِيَهْدِيَهُمْ", transliteration: "liyahdiyahum", pos: ['P+N'], posLabel: 'P+N', root: "ه د ي", meaning: { en: "He will guide them", ur: "وہ will guide them" } },
      { id: '4:168:12', arabic: "طَرِيقًا", transliteration: "ṭarīqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) a way", ur: "(کو) a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  169: {
    text: "إِلَّا طَرِيقَ جَهَنَّمَ خَـٰلِدِينَ فِيهَآ أَبَدًۭا ۚ وَكَانَ ذَٰلِكَ عَلَى ٱللَّهِ يَسِيرًۭا",
    translation: {
      en: "",
      ur: "ہاں دوزخ کا رستہ جس میں وہ ہمیشہ (جلتے) رہیں گے۔ اور یہ (بات) خدا کو آسان ہے",
    },
    words: [
      { id: '4:169:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '4:169:2', arabic: "طَرِيقَ", transliteration: "ṭarīqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '4:169:3', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Hell", ur: "(کو) جہنم" } },
      { id: '4:169:4', arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "abiding", ur: "abiding" } },
      { id: '4:169:5', arabic: "فِيهَآ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '4:169:6', arabic: "أَبَدًۭا ۚ", transliteration: "abadan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "forever", ur: "forever" } },
      { id: '4:169:7', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:169:8', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '4:169:9', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '4:169:10', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:169:11', arabic: "يَسِيرًۭا", transliteration: "yasīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "easy", ur: "easy" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  170: {
    text: "يَـٰٓأَيُّهَا ٱلنَّاسُ قَدْ جَآءَكُمُ ٱلرَّسُولُ بِٱلْحَقِّ مِن رَّبِّكُمْ فَـَٔامِنُوا۟ خَيْرًۭا لَّكُمْ ۚ وَإِن تَكْفُرُوا۟ فَإِنَّ لِلَّهِ مَا فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمًۭا",
    translation: {
      en: "",
      ur: "لوگو! خدا کے پیغمبر تمہارے پاس تمہارے پروردگار کی طرف سے حق بات لے کر آئے ہیں تو (ان پر) ایمان لاؤ (یہی) تمہارے حق میں بہتر ہے۔ اور اگر کفر کرو گے تو (جان رکھو کہ) جو کچھ آسمانوں اور زمین میں ہے سب خداہی کا ہے اور خدا سب کچھ جاننے والا (اور) حکمت والا ہے",
    },
    words: [
      { id: '4:170:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '4:170:2', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "mankind", ur: "mankind" } },
      { id: '4:170:3', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Surely", ur: "یقیناً" } },
      { id: '4:170:4', arabic: "جَآءَكُمُ", transliteration: "jāakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '4:170:5', arabic: "ٱلرَّسُولُ", transliteration: "l-rasūlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '4:170:6', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the truth", ur: "ساتھ the سچ" } },
      { id: '4:170:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:170:8', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '4:170:9', arabic: "فَـَٔامِنُوا۟", transliteration: "faāminū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so believe", ur: "so ایمان لانا" } },
      { id: '4:170:10', arabic: "خَيْرًۭا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(it is) better", ur: "(it is) better" } },
      { id: '4:170:11', arabic: "لَّكُمْ ۚ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:170:12', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:170:13', arabic: "تَكْفُرُوا۟", transliteration: "takfurū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you disbelieve", ur: "تم disbelieve" } },
      { id: '4:170:14', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '4:170:15', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah (belongs)", ur: "کو اللہ (belongs)" } },
      { id: '4:170:16', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '4:170:17', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:170:18', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '4:170:19', arabic: "وَٱلْأَرْضِ ۚ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '4:170:20', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '4:170:21', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:170:22', arabic: "عَلِيمًا", transliteration: "ʿalīman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "All-Knowing", ur: "سب جاننے والا" } },
      { id: '4:170:23', arabic: "حَكِيمًۭا", transliteration: "ḥakīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'جار + مجرور' }
      ],
    },
  },
  171: {
    text: "يَـٰٓأَهْلَ ٱلْكِتَـٰبِ لَا تَغْلُوا۟ فِى دِينِكُمْ وَلَا تَقُولُوا۟ عَلَى ٱللَّهِ إِلَّا ٱلْحَقَّ ۚ إِنَّمَا ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ رَسُولُ ٱللَّهِ وَكَلِمَتُهُۥٓ أَلْقَىٰهَآ إِلَىٰ مَرْيَمَ وَرُوحٌۭ مِّنْهُ ۖ فَـَٔامِنُوا۟ بِٱللَّهِ وَرُسُلِهِۦ ۖ وَلَا تَقُولُوا۟ ثَلَـٰثَةٌ ۚ ٱنتَهُوا۟ خَيْرًۭا لَّكُمْ ۚ إِنَّمَا ٱللَّهُ إِلَـٰهٌۭ وَٰحِدٌۭ ۖ سُبْحَـٰنَهُۥٓ أَن يَكُونَ لَهُۥ وَلَدٌۭ ۘ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَكَفَىٰ بِٱللَّهِ وَكِيلًۭا",
    translation: {
      en: "",
      ur: "اے اہل کتاب اپنے دین (کی بات) میں حد سے نہ بڑھو اور خدا کے بارے میں حق کے سوا کچھ نہ کہو۔ مسیح (یعنی) مریم کے بیٹے عیسیٰ (نہ خدا تھے نہ خدا کے بیٹے بلکہ) خدا کے رسول اور کا کلمہٴ (بشارت) تھے جو اس نے مریم کی طرف بھیجا تھا اور اس کی طرف سے ایک روح تھے تو خدا اوراس کے رسولوں پر ایمان لاؤ۔ اور (یہ) نہ کہو (کہ خدا) تین (ہیں۔ اس اعتقاد سے) باز آؤ کہ یہ تمہارے حق میں بہتر ہے۔ خدا ہی معبود واحد ہے اور اس سے پاک ہے کہ اس کے اولاد ہو۔ جو کچھ آسمانوں میں اور جو کچھ زمین میں ہے سب اسی کا ہے۔ اور خدا ہی کارساز کافی ہے",
    },
    words: [
      { id: '4:171:1', arabic: "يَـٰٓأَهْلَ", transliteration: "yāahla", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "O People", ur: "اے لوگ" } },
      { id: '4:171:2', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Book", ur: "(of) the کتاب" } },
      { id: '4:171:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '4:171:4', arabic: "تَغْلُوا۟", transliteration: "taghlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "commit excess", ur: "commit excess" } },
      { id: '4:171:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:171:6', arabic: "دِينِكُمْ", transliteration: "dīnikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your religion", ur: "your religion" } },
      { id: '4:171:7', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '4:171:8', arabic: "تَقُولُوا۟", transliteration: "taqūlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "say", ur: "کہو" } },
      { id: '4:171:9', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '4:171:10', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:171:11', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '4:171:12', arabic: "ٱلْحَقَّ ۚ", transliteration: "l-ḥaqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '4:171:13', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '4:171:14', arabic: "ٱلْمَسِيحُ", transliteration: "l-masīḥu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messiah", ur: "the Messiah" } },
      { id: '4:171:15', arabic: "عِيسَى", transliteration: "ʿīsā", pos: ['N'], posLabel: 'N', root: "ع ي س", meaning: { en: "Isa", ur: "Isa" } },
      { id: '4:171:16', arabic: "ٱبْنُ", transliteration: "ub'nu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "son", ur: "بیٹا" } },
      { id: '4:171:17', arabic: "مَرْيَمَ", transliteration: "maryama", pos: ['N'], posLabel: 'N', root: "م ر ي م", meaning: { en: "(of) Maryam", ur: "(of) Maryam" } },
      { id: '4:171:18', arabic: "رَسُولُ", transliteration: "rasūlu", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "(was) a Messenger", ur: "(was) a رسول" } },
      { id: '4:171:19', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '4:171:20', arabic: "وَكَلِمَتُهُۥٓ", transliteration: "wakalimatuhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His word", ur: "اور His word" } },
      { id: '4:171:21', arabic: "أَلْقَىٰهَآ", transliteration: "alqāhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "which He conveyed", ur: "جو وہ conveyed" } },
      { id: '4:171:22', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:171:23', arabic: "مَرْيَمَ", transliteration: "maryama", pos: ['N'], posLabel: 'N', root: "م ر ي م", meaning: { en: "Maryam", ur: "Maryam" } },
      { id: '4:171:24', arabic: "وَرُوحٌۭ", transliteration: "warūḥun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a spirit", ur: "اور a spirit" } },
      { id: '4:171:25', arabic: "مِّنْهُ ۖ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Him", ur: "سے Him" } },
      { id: '4:171:26', arabic: "فَـَٔامِنُوا۟", transliteration: "faāminū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So believe", ur: "So ایمان لانا" } },
      { id: '4:171:27', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:171:28', arabic: "وَرُسُلِهِۦ ۖ", transliteration: "warusulihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messengers", ur: "اور His Messengers" } },
      { id: '4:171:29', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '4:171:30', arabic: "تَقُولُوا۟", transliteration: "taqūlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "say", ur: "کہو" } },
      { id: '4:171:31', arabic: "ثَلَـٰثَةٌ ۚ", transliteration: "thalāthatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Three", ur: "Three" } },
      { id: '4:171:32', arabic: "ٱنتَهُوا۟", transliteration: "intahū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "desist", ur: "desist" } },
      { id: '4:171:33', arabic: "خَيْرًۭا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(it is) better", ur: "(it is) better" } },
      { id: '4:171:34', arabic: "لَّكُمْ ۚ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '4:171:35', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '4:171:36', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:171:37', arabic: "إِلَـٰهٌۭ", transliteration: "ilāhun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) God", ur: "(is) اللہ" } },
      { id: '4:171:38', arabic: "وَٰحِدٌۭ ۖ", transliteration: "wāḥidun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "One", ur: "One" } },
      { id: '4:171:39', arabic: "سُبْحَـٰنَهُۥٓ", transliteration: "sub'ḥānahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Glory be to Him", ur: "Glory be کو Him" } },
      { id: '4:171:40', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '4:171:41', arabic: "يَكُونَ", transliteration: "yakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (should) have", ur: "وہ (should) have" } },
      { id: '4:171:42', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Him", ur: "for Him" } },
      { id: '4:171:43', arabic: "وَلَدٌۭ ۘ", transliteration: "waladun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a son", ur: "a بیٹا" } },
      { id: '4:171:44', arabic: "لَّهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "To Him (belongs)", ur: "کو Him (belongs)" } },
      { id: '4:171:45', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '4:171:46', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:171:47', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '4:171:48', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '4:171:49', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '4:171:50', arabic: "ٱلْأَرْضِ ۗ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '4:171:51', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And is sufficient", ur: "اور is sufficient" } },
      { id: '4:171:52', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:171:53', arabic: "وَكِيلًۭا", transliteration: "wakīlan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(as) a Disposer of affairs", ur: "(as) a Disposer of affairs" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 30, to: 31, label: 'فعل + فاعل' },
        { from: 41, to: 42, label: 'فعل + فاعل' },
        { from: 46, to: 47, label: 'جار + مجرور' },
        { from: 49, to: 50, label: 'جار + مجرور' }
      ],
    },
  },
  172: {
    text: "لَّن يَسْتَنكِفَ ٱلْمَسِيحُ أَن يَكُونَ عَبْدًۭا لِّلَّهِ وَلَا ٱلْمَلَـٰٓئِكَةُ ٱلْمُقَرَّبُونَ ۚ وَمَن يَسْتَنكِفْ عَنْ عِبَادَتِهِۦ وَيَسْتَكْبِرْ فَسَيَحْشُرُهُمْ إِلَيْهِ جَمِيعًۭا",
    translation: {
      en: "",
      ur: "مسیح اس بات سے عار نہیں رکھتے کہ خدا کے بندے ہوں اور نہ مقرب فرشتے (عار رکھتے ہیں) اور جو شخص خدا کا بندہ ہونے کو موجب عار سمجھے اور سرکشی کرے تو خدا سب کو اپنے پاس جمع کرلے گا",
    },
    words: [
      { id: '4:172:1', arabic: "لَّن", transliteration: "lan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Never", ur: "Never" } },
      { id: '4:172:2', arabic: "يَسْتَنكِفَ", transliteration: "yastankifa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will disdain", ur: "will disdain" } },
      { id: '4:172:3', arabic: "ٱلْمَسِيحُ", transliteration: "l-masīḥu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messiah", ur: "the Messiah" } },
      { id: '4:172:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '4:172:5', arabic: "يَكُونَ", transliteration: "yakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '4:172:6', arabic: "عَبْدًۭا", transliteration: "ʿabdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a slave", ur: "a slave" } },
      { id: '4:172:7', arabic: "لِّلَّهِ", transliteration: "lillahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of Allah", ur: "of اللہ" } },
      { id: '4:172:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:172:9', arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '4:172:10', arabic: "ٱلْمُقَرَّبُونَ ۚ", transliteration: "l-muqarabūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who are near (to Allah)", ur: "the ones جو are near (کو اللہ)" } },
      { id: '4:172:11', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '4:172:12', arabic: "يَسْتَنكِفْ", transliteration: "yastankif", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disdains", ur: "disdains" } },
      { id: '4:172:13', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:172:14', arabic: "عِبَادَتِهِۦ", transliteration: "ʿibādatihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His worship", ur: "His عبادت" } },
      { id: '4:172:15', arabic: "وَيَسْتَكْبِرْ", transliteration: "wayastakbir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and is arrogant", ur: "اور is arrogant" } },
      { id: '4:172:16', arabic: "فَسَيَحْشُرُهُمْ", transliteration: "fasayaḥshuruhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then He will gather them", ur: "پھر وہ will gather them" } },
      { id: '4:172:17', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "towards Him", ur: "towards Him" } },
      { id: '4:172:18', arabic: "جَمِيعًۭا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all together", ur: "سب together" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  173: {
    text: "فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ فَيُوَفِّيهِمْ أُجُورَهُمْ وَيَزِيدُهُم مِّن فَضْلِهِۦ ۖ وَأَمَّا ٱلَّذِينَ ٱسْتَنكَفُوا۟ وَٱسْتَكْبَرُوا۟ فَيُعَذِّبُهُمْ عَذَابًا أَلِيمًۭا وَلَا يَجِدُونَ لَهُم مِّن دُونِ ٱللَّهِ وَلِيًّۭا وَلَا نَصِيرًۭا",
    translation: {
      en: "",
      ur: "تو جو لوگ ایمان لائے اور نیک کام کرتے رہے وہ ان کو ان کا پورا بدلا دے گا اور اپنے فضل سے کچھ زیادہ بھی عنایت کرے گا۔ اور جنہوں نے (بندوں ہونے سے) عاروانکار اور تکبر کیا ان کو تکلیف دینے والا عذاب دے گا۔ اور یہ لوگ خدا کے سوا اپنا حامی اور مددگار نہ پائیں گے",
    },
    words: [
      { id: '4:173:1', arabic: "فَأَمَّا", transliteration: "fa-ammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then as for", ur: "پھر as for" } },
      { id: '4:173:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:173:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '4:173:4', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and did", ur: "اور did" } },
      { id: '4:173:5', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the righteous deeds", ur: "the نیک deeds" } },
      { id: '4:173:6', arabic: "فَيُوَفِّيهِمْ", transliteration: "fayuwaffīhim", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then He will give them in full", ur: "پھر وہ will give them میں full" } },
      { id: '4:173:7', arabic: "أُجُورَهُمْ", transliteration: "ujūrahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their reward", ur: "their ثواب" } },
      { id: '4:173:8', arabic: "وَيَزِيدُهُم", transliteration: "wayazīduhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and give them more", ur: "اور give them more" } },
      { id: '4:173:9', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:173:10', arabic: "فَضْلِهِۦ ۖ", transliteration: "faḍlihi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "His Bounty", ur: "His Bounty" } },
      { id: '4:173:11', arabic: "وَأَمَّا", transliteration: "wa-ammā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And as for", ur: "اور as for" } },
      { id: '4:173:12', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:173:13', arabic: "ٱسْتَنكَفُوا۟", transliteration: "is'tankafū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disdained", ur: "disdained" } },
      { id: '4:173:14', arabic: "وَٱسْتَكْبَرُوا۟", transliteration: "wa-is'takbarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and were arrogant", ur: "اور were arrogant" } },
      { id: '4:173:15', arabic: "فَيُعَذِّبُهُمْ", transliteration: "fayuʿadhibuhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then He will punish them", ur: "پھر وہ will punish them" } },
      { id: '4:173:16', arabic: "عَذَابًا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "(with) a punishment", ur: "(ساتھ) a عذاب" } },
      { id: '4:173:17', arabic: "أَلِيمًۭا", transliteration: "alīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "painful", ur: "painful" } },
      { id: '4:173:18', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:173:19', arabic: "يَجِدُونَ", transliteration: "yajidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will they find", ur: "will وہ لوگ find" } },
      { id: '4:173:20', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for themselves", ur: "for themselves" } },
      { id: '4:173:21', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:173:22', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '4:173:23', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:173:24', arabic: "وَلِيًّۭا", transliteration: "waliyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "any protector", ur: "any protector" } },
      { id: '4:173:25', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '4:173:26', arabic: "نَصِيرًۭا", transliteration: "naṣīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "any helper", ur: "any helper" } }
    ],
    structure: {
      relationships: [
        { from: 16, to: 17, label: 'موصوف + صفت' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  174: {
    text: "يَـٰٓأَيُّهَا ٱلنَّاسُ قَدْ جَآءَكُم بُرْهَـٰنٌۭ مِّن رَّبِّكُمْ وَأَنزَلْنَآ إِلَيْكُمْ نُورًۭا مُّبِينًۭا",
    translation: {
      en: "",
      ur: "لوگو تمہارے پروردگار کی طرف سے تمہارے پاس دلیل (روشن) آچکی ہے اور ہم نے (کفر اور ضلالت کا اندھیرا دور کرنے کو) تمہاری طرف چمکتا ہوا نور بھیج دیا ہے",
    },
    words: [
      { id: '4:174:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '4:174:2', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "mankind", ur: "mankind" } },
      { id: '4:174:3', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Surely", ur: "یقیناً" } },
      { id: '4:174:4', arabic: "جَآءَكُم", transliteration: "jāakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '4:174:5', arabic: "بُرْهَـٰنٌۭ", transliteration: "bur'hānun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a convincing proof", ur: "a convincing proof" } },
      { id: '4:174:6', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '4:174:7', arabic: "رَّبِّكُمْ", transliteration: "rabbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '4:174:8', arabic: "وَأَنزَلْنَآ", transliteration: "wa-anzalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ز ل", meaning: { en: "and We (have) sent down", ur: "اور ہم (have) sent down" } },
      { id: '4:174:9', arabic: "إِلَيْكُمْ", transliteration: "ilaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:174:10', arabic: "نُورًۭا", transliteration: "nūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a light", ur: "a light" } },
      { id: '4:174:11', arabic: "مُّبِينًۭا", transliteration: "mubīnan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  175: {
    text: "فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ بِٱللَّهِ وَٱعْتَصَمُوا۟ بِهِۦ فَسَيُدْخِلُهُمْ فِى رَحْمَةٍۢ مِّنْهُ وَفَضْلٍۢ وَيَهْدِيهِمْ إِلَيْهِ صِرَٰطًۭا مُّسْتَقِيمًۭا",
    translation: {
      en: "",
      ur: "پس جو لوگ خدا پر ایمان لائے اور اس (کے دین کی رسی) کو مضبوط پکڑے رہے ان کو وہ اپنی رحمت اور فضل (کے بہشتوں) میں داخل کرے گا۔ اور اپنی طرف (پہچنے کا) سیدھا رستہ دکھائے گا",
    },
    words: [
      { id: '4:175:1', arabic: "فَأَمَّا", transliteration: "fa-ammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So as for", ur: "So as for" } },
      { id: '4:175:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '4:175:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '4:175:4', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '4:175:5', arabic: "وَٱعْتَصَمُوا۟", transliteration: "wa-iʿ'taṣamū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and held fast", ur: "اور held fast" } },
      { id: '4:175:6', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Him", ur: "کو Him" } },
      { id: '4:175:7', arabic: "فَسَيُدْخِلُهُمْ", transliteration: "fasayud'khiluhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then He will admit them", ur: "پھر وہ will admit them" } },
      { id: '4:175:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '4:175:9', arabic: "رَحْمَةٍۢ", transliteration: "raḥmatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Mercy", ur: "رحمت" } },
      { id: '4:175:10', arabic: "مِّنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Himself", ur: "سے Himself" } },
      { id: '4:175:11', arabic: "وَفَضْلٍۢ", transliteration: "wafaḍlin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Bounty", ur: "اور Bounty" } },
      { id: '4:175:12', arabic: "وَيَهْدِيهِمْ", transliteration: "wayahdīhim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ه د ي", meaning: { en: "and will guide them", ur: "اور will guide them" } },
      { id: '4:175:13', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Himself", ur: "کو Himself" } },
      { id: '4:175:14', arabic: "صِرَٰطًۭا", transliteration: "ṣirāṭan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(on) a way", ur: "(پر) a راستہ" } },
      { id: '4:175:15', arabic: "مُّسْتَقِيمًۭا", transliteration: "mus'taqīman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "straight", ur: "سیدھا" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  176: {
    text: "يَسْتَفْتُونَكَ قُلِ ٱللَّهُ يُفْتِيكُمْ فِى ٱلْكَلَـٰلَةِ ۚ إِنِ ٱمْرُؤٌا۟ هَلَكَ لَيْسَ لَهُۥ وَلَدٌۭ وَلَهُۥٓ أُخْتٌۭ فَلَهَا نِصْفُ مَا تَرَكَ ۚ وَهُوَ يَرِثُهَآ إِن لَّمْ يَكُن لَّهَا وَلَدٌۭ ۚ فَإِن كَانَتَا ٱثْنَتَيْنِ فَلَهُمَا ٱلثُّلُثَانِ مِمَّا تَرَكَ ۚ وَإِن كَانُوٓا۟ إِخْوَةًۭ رِّجَالًۭا وَنِسَآءًۭ فَلِلذَّكَرِ مِثْلُ حَظِّ ٱلْأُنثَيَيْنِ ۗ يُبَيِّنُ ٱللَّهُ لَكُمْ أَن تَضِلُّوا۟ ۗ وَٱللَّهُ بِكُلِّ شَىْءٍ عَلِيمٌۢ",
    translation: {
      en: "",
      ur: "(اے پیغمبر) لوگ تم سے (کلالہ کے بارے میں) حکم (خدا) دریافت کرتے ہیں کہہ دو کہ خدا کلالہ بارے میں یہ حکم دیتا ہے کہ اگر کوئی ایسا مرد مرجائے جس کے اولاد نہ ہو (اور نہ ماں باپ) اور اس کے بہن ہو تو اس کو بھائی کے ترکے میں سے آدھا حصہ ملے گا۔ اور اگر بہن مرجائے اور اس کے اولاد نہ ہو تو اس کے تمام مال کا وارث بھائی ہوگا اور اگر (مرنے والے بھائی کی) دو بہنیں ہوں تو دونوں کو بھائی کے ترکے میں سے دو تہائی۔ اور اگر بھائی اور بہن یعنی مرد اور عورتیں ملے جلے وارث ہوں تو مرد کا حصہ دو عورتوں کے برابر ہے۔ (یہ احکام) خدا تم سے اس لئے بیان فرماتا ہے کہ بھٹکتے نہ پھرو۔ اور خدا ہر چیز سے واقف ہے",
    },
    words: [
      { id: '4:176:1', arabic: "يَسْتَفْتُونَكَ", transliteration: "yastaftūnaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They seek your ruling", ur: "وہ لوگ seek your ruling" } },
      { id: '4:176:2', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '4:176:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:176:4', arabic: "يُفْتِيكُمْ", transliteration: "yuf'tīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "gives you a ruling", ur: "gives تم a ruling" } },
      { id: '4:176:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '4:176:6', arabic: "ٱلْكَلَـٰلَةِ ۚ", transliteration: "l-kalālati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Kalala", ur: "the Kalala" } },
      { id: '4:176:7', arabic: "إِنِ", transliteration: "ini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:176:8', arabic: "ٱمْرُؤٌا۟", transliteration: "im'ru-on", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a man", ur: "a man" } },
      { id: '4:176:9', arabic: "هَلَكَ", transliteration: "halaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "died", ur: "died" } },
      { id: '4:176:10', arabic: "لَيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(and) not", ur: "(اور) نہیں" } },
      { id: '4:176:11', arabic: "لَهُۥ", transliteration: "lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he has", ur: "وہ has" } },
      { id: '4:176:12', arabic: "وَلَدٌۭ", transliteration: "waladun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a child", ur: "a child" } },
      { id: '4:176:13', arabic: "وَلَهُۥٓ", transliteration: "walahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he has", ur: "اور وہ has" } },
      { id: '4:176:14', arabic: "أُخْتٌۭ", transliteration: "ukh'tun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sister", ur: "a sister" } },
      { id: '4:176:15', arabic: "فَلَهَا", transliteration: "falahā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then for her", ur: "پھر for her" } },
      { id: '4:176:16', arabic: "نِصْفُ", transliteration: "niṣ'fu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a half", ur: "(is) a half" } },
      { id: '4:176:17', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(of) what", ur: "(of) کیا" } },
      { id: '4:176:18', arabic: "تَرَكَ ۚ", transliteration: "taraka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he left", ur: "وہ left" } },
      { id: '4:176:19', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And he", ur: "اور وہ" } },
      { id: '4:176:20', arabic: "يَرِثُهَآ", transliteration: "yarithuhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will inherit from her", ur: "will inherit سے her" } },
      { id: '4:176:21', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '4:176:22', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '4:176:23', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is", ur: "is" } },
      { id: '4:176:24', arabic: "لَّهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for her", ur: "for her" } },
      { id: '4:176:25', arabic: "وَلَدٌۭ ۚ", transliteration: "waladun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a child", ur: "a child" } },
      { id: '4:176:26', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:176:27', arabic: "كَانَتَا", transliteration: "kānatā", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "there were", ur: "there were" } },
      { id: '4:176:28', arabic: "ٱثْنَتَيْنِ", transliteration: "ith'natayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two females", ur: "two females" } },
      { id: '4:176:29', arabic: "فَلَهُمَا", transliteration: "falahumā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then for them", ur: "پھر for them" } },
      { id: '4:176:30', arabic: "ٱلثُّلُثَانِ", transliteration: "l-thuluthāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two thirds", ur: "two thirds" } },
      { id: '4:176:31', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '4:176:32', arabic: "تَرَكَ ۚ", transliteration: "taraka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he left", ur: "وہ left" } },
      { id: '4:176:33', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '4:176:34', arabic: "كَانُوٓا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '4:176:35', arabic: "إِخْوَةًۭ", transliteration: "ikh'watan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "brothers and sisters", ur: "brothers اور sisters" } },
      { id: '4:176:36', arabic: "رِّجَالًۭا", transliteration: "rijālan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "men", ur: "men" } },
      { id: '4:176:37', arabic: "وَنِسَآءًۭ", transliteration: "wanisāan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and women", ur: "اور women" } },
      { id: '4:176:38', arabic: "فَلِلذَّكَرِ", transliteration: "falildhakari", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then the male will have", ur: "پھر the male will have" } },
      { id: '4:176:39', arabic: "مِثْلُ", transliteration: "mith'lu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like", ur: "like" } },
      { id: '4:176:40', arabic: "حَظِّ", transliteration: "ḥaẓẓi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "share", ur: "share" } },
      { id: '4:176:41', arabic: "ٱلْأُنثَيَيْنِ ۗ", transliteration: "l-unthayayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the two females", ur: "(of) the two females" } },
      { id: '4:176:42', arabic: "يُبَيِّنُ", transliteration: "yubayyinu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "makes clear", ur: "makes clear" } },
      { id: '4:176:43', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '4:176:44', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '4:176:45', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lest", ur: "lest" } },
      { id: '4:176:46', arabic: "تَضِلُّوا۟ ۗ", transliteration: "taḍillū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you go astray", ur: "تم go astray" } },
      { id: '4:176:47', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '4:176:48', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of every", ur: "of ہر" } },
      { id: '4:176:49', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '4:176:50', arabic: "عَلِيمٌۢ", transliteration: "ʿalīmun", pos: ['ADJ'], posLabel: 'ADJ', root: "ع ل م", meaning: { en: "(is) All-Knower", ur: "(is) سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'موصول + صلة' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 30, to: 31, label: 'مضاف + مضاف إليه' },
        { from: 34, to: 35, label: 'فعل + فاعل' },
        { from: 40, to: 41, label: 'مضاف + مضاف إليه' },
        { from: 42, to: 43, label: 'فعل + فاعل' }
      ],
    },
  },
};

export const TREEBANK_DATA = SURAH_4_TREEBANK;
export default SURAH_4_TREEBANK;
