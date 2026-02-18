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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};

export const TREEBANK_DATA = SURAH_4_TREEBANK;
export default SURAH_4_TREEBANK;
