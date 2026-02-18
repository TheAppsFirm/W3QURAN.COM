/**
 * Surah Az-Zumar (39) - The Groups
 * Quranic Arabic Treebank Data
 * First 10 ayahs - Makki surah (75 total ayahs)
 * Theme: Sincerity in worship, Tawheed, warning against shirk
 */

export const TREEBANK_DATA = {
  surahId: 39,
  surahName: "Az-Zumar",
  surahNameArabic: "الزمر",
  totalAyahs: 75,

  1: {
    ayahNumber: 1,
    text: "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ",
    words: [
      {
        id: '39:1:1',
        arabic: 'تَنزِيلُ',
        transliteration: 'tanzīlu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ز ل',
        meaning: { en: 'The revelation', ur: 'نازل کرنا' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Subject (مبتدأ) - nominative verbal noun (مصدر) from Form II.', ur: 'مبتدأ - مرفوع مصدر باب تفعیل سے۔' }
      },
      {
        id: '39:1:2',
        arabic: 'الْكِتَابِ',
        transliteration: 'al-kitābi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: { en: 'of the Book', ur: 'کتاب کا' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive (مضاف إليه) - the Quran.', ur: 'مضاف إليه - قرآن۔' }
      },
      {
        id: '39:1:3',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition indicating source.', ur: 'حرف جر ماخذ کی طرف اشارہ۔' }
      },
      {
        id: '39:1:4',
        arabic: 'اللَّهِ',
        transliteration: 'Allāhi',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'Allah', ur: 'اللہ' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive proper noun governed by مِنَ.', ur: 'اسم مجرور مِنَ سے۔' }
      },
      {
        id: '39:1:5',
        arabic: 'الْعَزِيزِ',
        transliteration: 'al-ʿazīzi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ز ز',
        meaning: { en: 'the Mighty', ur: 'غالب' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Adjective for اللَّهِ - genitive.', ur: 'صفت اللَّهِ کی - مجرور۔' }
      },
      {
        id: '39:1:6',
        arabic: 'الْحَكِيمِ',
        transliteration: 'al-ḥakīmi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ح ك م',
        meaning: { en: 'the Wise', ur: 'حکمت والا' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Second adjective for اللَّهِ - genitive.', ur: 'دوسری صفت اللَّهِ کی - مجرور۔' }
      }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "إِنَّا أَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ فَاعْبُدِ اللَّهَ مُخْلِصًا لَّهُ الدِّينَ",
    words: [
      {
        id: '39:2:1',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: { en: 'Indeed, We', ur: 'بے شک ہم نے' },
        grammarRole: 'inna_ism',
        grammarExplanations: { en: 'Emphatic إِنَّ + attached pronoun نَا (We).', ur: 'حرف توکید إِنَّ + ضمیر متصل نَا۔' }
      },
      {
        id: '39:2:2',
        arabic: 'أَنزَلْنَا',
        transliteration: 'anzalnā',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        meaning: { en: 'We sent down', ur: 'اتارا' },
        grammarRole: 'khabar_inna',
        grammarExplanations: { en: 'Perfect verb Form IV - predicate of إِنَّ.', ur: 'فعل ماضی باب إفعال - خبر إن۔' }
      },
      {
        id: '39:2:3',
        arabic: 'إِلَيْكَ',
        transliteration: 'ilayka',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'to you', ur: 'تیری طرف' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun - to the Prophet.', ur: 'حرف جر + ضمیر - نبی کی طرف۔' }
      },
      {
        id: '39:2:4',
        arabic: 'الْكِتَابَ',
        transliteration: 'al-kitāba',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: { en: 'the Book', ur: 'کتاب' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative definite.', ur: 'مفعول بہ - منصوب معرفہ۔' }
      },
      {
        id: '39:2:5',
        arabic: 'بِالْحَقِّ',
        transliteration: 'bil-ḥaqqi',
        pos: ['PREP', 'N'],
        posLabel: 'PREP+N',
        root: 'ح ق ق',
        meaning: { en: 'in truth', ur: 'حق کے ساتھ' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition بِ + genitive noun - manner of revelation.', ur: 'حرف جر بِ + اسم مجرور - نزول کا انداز۔' }
      },
      {
        id: '39:2:6',
        arabic: 'فَاعْبُدِ',
        transliteration: 'fa-ʿbudi',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ع ب د',
        meaning: { en: 'so worship', ur: 'پس عبادت کر' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Conjunction فَ + imperative verb.', ur: 'حرف عطف فَ + فعل امر۔' }
      },
      {
        id: '39:2:7',
        arabic: 'اللَّهَ',
        transliteration: 'Allāha',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'Allah', ur: 'اللہ' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '39:2:8',
        arabic: 'مُخْلِصًا',
        transliteration: 'mukhliṣan',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ل ص',
        meaning: { en: 'being sincere', ur: 'خالص کرتے ہوئے' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'State (حال) - active participle Form IV, accusative.', ur: 'حال - اسم فاعل باب إفعال، منصوب۔' }
      },
      {
        id: '39:2:9',
        arabic: 'لَّهُ',
        transliteration: 'lahu',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'to Him', ur: 'اس کے لیے' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition لِ + pronoun - sincerity directed to Allah.', ur: 'حرف جر لِ + ضمیر - اللہ کے لیے خلوص۔' }
      },
      {
        id: '39:2:10',
        arabic: 'الدِّينَ',
        transliteration: 'ad-dīna',
        pos: ['N'],
        posLabel: 'N',
        root: 'د ي ن',
        meaning: { en: 'the religion', ur: 'دین' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Object of مُخْلِصًا - accusative.', ur: 'مفعول مُخْلِصًا کا - منصوب۔' }
      }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "أَلَا لِلَّهِ الدِّينُ الْخَالِصُ",
    words: [
      {
        id: '39:3:1',
        arabic: 'أَلَا',
        transliteration: 'a-lā',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: { en: 'Unquestionably', ur: 'خبردار' },
        grammarRole: 'harf_tanbih',
        grammarExplanations: { en: 'Attention particle (حرف تنبيه) - alerting to important statement.', ur: 'حرف تنبیہ - اہم بات کی طرف متوجہ کرنا۔' }
      },
      {
        id: '39:3:2',
        arabic: 'لِلَّهِ',
        transliteration: 'lillāhi',
        pos: ['PREP', 'PN'],
        posLabel: 'PREP+PN',
        root: 'أ ل ه',
        meaning: { en: 'to Allah', ur: 'اللہ کے لیے' },
        grammarRole: 'khabar_muqaddam',
        grammarExplanations: { en: 'Front-loaded predicate - preposition + Allah.', ur: 'خبر مقدم - حرف جر + اللہ۔' }
      },
      {
        id: '39:3:3',
        arabic: 'الدِّينُ',
        transliteration: 'ad-dīnu',
        pos: ['N'],
        posLabel: 'N',
        root: 'د ي ن',
        meaning: { en: 'the religion', ur: 'دین' },
        grammarRole: 'mubtada_muakhkhar',
        grammarExplanations: { en: 'Delayed subject - nominative.', ur: 'مبتدأ مؤخر - مرفوع۔' }
      },
      {
        id: '39:3:4',
        arabic: 'الْخَالِصُ',
        transliteration: 'al-khāliṣu',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'خ ل ص',
        meaning: { en: 'the pure/sincere', ur: 'خالص' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Adjective for الدِّينُ - nominative.', ur: 'صفت الدِّينُ کی - مرفوع۔' }
      }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "لَوْ أَرَادَ اللَّهُ أَن يَتَّخِذَ وَلَدًا لَّاصْطَفَىٰ مِمَّا يَخْلُقُ مَا يَشَاءُ",
    words: [
      {
        id: '39:4:1',
        arabic: 'لَوْ',
        transliteration: 'law',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: { en: 'If', ur: 'اگر' },
        grammarRole: 'harf_shart',
        grammarExplanations: { en: 'Conditional particle for impossible/unreal conditions.', ur: 'حرف شرط غیر ممکن شرط کے لیے۔' }
      },
      {
        id: '39:4:2',
        arabic: 'أَرَادَ',
        transliteration: 'arāda',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر و د',
        meaning: { en: 'had willed', ur: 'چاہتا' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb Form IV - protasis of condition.', ur: 'فعل ماضی باب إفعال - شرط۔' }
      },
      {
        id: '39:4:3',
        arabic: 'اللَّهُ',
        transliteration: 'Allāhu',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'Allah', ur: 'اللہ' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' }
      },
      {
        id: '39:4:4',
        arabic: 'أَن',
        transliteration: 'an',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: { en: 'to', ur: 'کہ' },
        grammarRole: 'harf_masdariyya',
        grammarExplanations: { en: 'Masdariyya particle forming infinitive clause.', ur: 'أَنْ مصدریہ مصدری جملہ بناتا ہے۔' }
      },
      {
        id: '39:4:5',
        arabic: 'يَتَّخِذَ',
        transliteration: 'yattakhidha',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ خ ذ',
        meaning: { en: 'to take', ur: 'لے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Subjunctive verb Form VIII due to أَن.', ur: 'فعل مضارع منصوب باب افتعال أَن کی وجہ سے۔' }
      },
      {
        id: '39:4:6',
        arabic: 'وَلَدًا',
        transliteration: 'waladan',
        pos: ['N'],
        posLabel: 'N',
        root: 'و ل د',
        meaning: { en: 'a son', ur: 'بیٹا' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative indefinite.', ur: 'مفعول بہ - منصوب نکرہ۔' }
      },
      {
        id: '39:4:7',
        arabic: 'لَّاصْطَفَىٰ',
        transliteration: 'la-ṣṭafā',
        pos: ['EMPH', 'V'],
        posLabel: 'EMPH+V',
        root: 'ص ف و',
        meaning: { en: 'He would have chosen', ur: 'ضرور چن لیتا' },
        grammarRole: 'jawab_shart',
        grammarExplanations: { en: 'Emphatic لَ + perfect verb Form VIII - apodosis.', ur: 'تاکیدی لَ + فعل ماضی باب افتعال - جواب شرط۔' }
      },
      {
        id: '39:4:8',
        arabic: 'مِمَّا',
        transliteration: 'mimmā',
        pos: ['PREP', 'REL'],
        posLabel: 'PREP+REL',
        root: null,
        meaning: { en: 'from what', ur: 'اس میں سے جو' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'مِنْ + مَا (relative) - from what.', ur: 'مِنْ + مَا (موصول) - اس میں سے۔' }
      },
      {
        id: '39:4:9',
        arabic: 'يَخْلُقُ',
        transliteration: 'yakhluqu',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ل ق',
        meaning: { en: 'He creates', ur: 'پیدا کرتا ہے' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Relative clause verb - imperfect.', ur: 'صلہ موصول - فعل مضارع۔' }
      },
      {
        id: '39:4:10',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'whatever', ur: 'جو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Relative pronoun as object of اصْطَفَىٰ.', ur: 'اسم موصول بطور مفعول اصْطَفَىٰ کا۔' }
      },
      {
        id: '39:4:11',
        arabic: 'يَشَاءُ',
        transliteration: 'yashā\'u',
        pos: ['V'],
        posLabel: 'V',
        root: 'ش ي أ',
        meaning: { en: 'He wills', ur: 'چاہے' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Relative clause verb.', ur: 'صلہ موصول۔' }
      }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ ۖ يُكَوِّرُ اللَّيْلَ عَلَى النَّهَارِ وَيُكَوِّرُ النَّهَارَ عَلَى اللَّيْلِ",
    words: [
      {
        id: '39:5:1',
        arabic: 'خَلَقَ',
        transliteration: 'khalaqa',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ل ق',
        meaning: { en: 'He created', ur: 'پیدا کیا' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb - 3rd masculine singular.', ur: 'فعل ماضی - غائب مذکر واحد۔' }
      },
      {
        id: '39:5:2',
        arabic: 'السَّمَاوَاتِ',
        transliteration: 'as-samāwāti',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: { en: 'the heavens', ur: 'آسمانوں کو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative definite plural.', ur: 'مفعول بہ - منصوب معرفہ جمع۔' }
      },
      {
        id: '39:5:3',
        arabic: 'وَالْأَرْضَ',
        transliteration: 'wal-arḍa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'أ ر ض',
        meaning: { en: 'and the earth', ur: 'اور زمین' },
        grammarRole: 'matoof',
        grammarExplanations: { en: 'Conjoined object - accusative.', ur: 'معطوف - منصوب۔' }
      },
      {
        id: '39:5:4',
        arabic: 'بِالْحَقِّ',
        transliteration: 'bil-ḥaqqi',
        pos: ['PREP', 'N'],
        posLabel: 'PREP+N',
        root: 'ح ق ق',
        meaning: { en: 'in truth', ur: 'حق کے ساتھ' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Manner - with purpose and truth.', ur: 'حالت - مقصد اور حق کے ساتھ۔' }
      },
      {
        id: '39:5:5',
        arabic: 'يُكَوِّرُ',
        transliteration: 'yukawwiru',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ر',
        meaning: { en: 'He wraps', ur: 'لپیٹتا ہے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Imperfect verb Form II - intensive action.', ur: 'فعل مضارع باب تفعیل - شدت عمل۔' }
      },
      {
        id: '39:5:6',
        arabic: 'اللَّيْلَ',
        transliteration: 'al-layla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ل ي ل',
        meaning: { en: 'the night', ur: 'رات کو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '39:5:7',
        arabic: 'عَلَى',
        transliteration: 'ʿalā',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'over', ur: 'پر' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition - wrapping over.', ur: 'حرف جر - اوپر لپیٹنا۔' }
      },
      {
        id: '39:5:8',
        arabic: 'النَّهَارِ',
        transliteration: 'an-nahāri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ه ر',
        meaning: { en: 'the day', ur: 'دن' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive noun.', ur: 'اسم مجرور۔' }
      },
      {
        id: '39:5:9',
        arabic: 'وَيُكَوِّرُ',
        transliteration: 'wa-yukawwiru',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ك و ر',
        meaning: { en: 'and He wraps', ur: 'اور لپیٹتا ہے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Conjunction + imperfect verb.', ur: 'حرف عطف + فعل مضارع۔' }
      },
      {
        id: '39:5:10',
        arabic: 'النَّهَارَ',
        transliteration: 'an-nahāra',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ه ر',
        meaning: { en: 'the day', ur: 'دن کو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '39:5:11',
        arabic: 'عَلَى',
        transliteration: 'ʿalā',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'over', ur: 'پر' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' }
      },
      {
        id: '39:5:12',
        arabic: 'اللَّيْلِ',
        transliteration: 'al-layli',
        pos: ['N'],
        posLabel: 'N',
        root: 'ل ي ل',
        meaning: { en: 'the night', ur: 'رات' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive noun.', ur: 'اسم مجرور۔' }
      }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ ثُمَّ جَعَلَ مِنْهَا زَوْجَهَا",
    words: [
      {
        id: '39:6:1',
        arabic: 'خَلَقَكُم',
        transliteration: 'khalaqakum',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'خ ل ق',
        meaning: { en: 'He created you', ur: 'پیدا کیا تمہیں' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb + object pronoun كُم (you all).', ur: 'فعل ماضی + ضمیر مفعول كُم۔' }
      },
      {
        id: '39:6:2',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition indicating origin.', ur: 'حرف جر ماخذ کی طرف اشارہ۔' }
      },
      {
        id: '39:6:3',
        arabic: 'نَّفْسٍ',
        transliteration: 'nafsin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ف س',
        meaning: { en: 'a soul', ur: 'ایک جان' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive indefinite - Adam.', ur: 'اسم مجرور نکرہ - آدم۔' }
      },
      {
        id: '39:6:4',
        arabic: 'وَاحِدَةٍ',
        transliteration: 'wāḥidatin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'و ح د',
        meaning: { en: 'single', ur: 'ایک' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Adjective for نَّفْسٍ - genitive feminine.', ur: 'صفت نَّفْسٍ کی - مجرور مؤنث۔' }
      },
      {
        id: '39:6:5',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: { en: 'then', ur: 'پھر' },
        grammarRole: 'harf_atf',
        grammarExplanations: { en: 'Sequential conjunction - then/afterwards.', ur: 'حرف عطف ترتیبی - پھر۔' }
      },
      {
        id: '39:6:6',
        arabic: 'جَعَلَ',
        transliteration: 'jaʿala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ع ل',
        meaning: { en: 'He made', ur: 'بنایا' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb - He made/created.', ur: 'فعل ماضی - بنایا۔' }
      },
      {
        id: '39:6:7',
        arabic: 'مِنْهَا',
        transliteration: 'minhā',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'from it', ur: 'اس سے' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun - from the soul.', ur: 'حرف جر + ضمیر - اس جان سے۔' }
      },
      {
        id: '39:6:8',
        arabic: 'زَوْجَهَا',
        transliteration: 'zawjahā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ز و ج',
        meaning: { en: 'its mate', ur: 'اس کا جوڑا' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object + possessive pronoun - Eve.', ur: 'مفعول بہ + ضمیر ملکیت - حوا۔' }
      }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "إِن تَكْفُرُوا فَإِنَّ اللَّهَ غَنِيٌّ عَنكُمْ",
    words: [
      {
        id: '39:7:1',
        arabic: 'إِن',
        transliteration: 'in',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: { en: 'If', ur: 'اگر' },
        grammarRole: 'harf_shart',
        grammarExplanations: { en: 'Conditional particle.', ur: 'حرف شرط۔' }
      },
      {
        id: '39:7:2',
        arabic: 'تَكْفُرُوا',
        transliteration: 'takfurū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ف ر',
        meaning: { en: 'you disbelieve', ur: 'تم کفر کرو' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Jussive verb - 2nd person masculine plural.', ur: 'فعل مضارع مجزوم - مخاطب مذکر جمع۔' }
      },
      {
        id: '39:7:3',
        arabic: 'فَإِنَّ',
        transliteration: 'fa-inna',
        pos: ['CONJ', 'EMPH'],
        posLabel: 'CONJ+EMPH',
        root: null,
        meaning: { en: 'then indeed', ur: 'تو بے شک' },
        grammarRole: 'jawab_shart',
        grammarExplanations: { en: 'Result clause فَ + emphatic particle.', ur: 'جواب شرط فَ + حرف توکید۔' }
      },
      {
        id: '39:7:4',
        arabic: 'اللَّهَ',
        transliteration: 'Allāha',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'Allah', ur: 'اللہ' },
        grammarRole: 'ism_inna',
        grammarExplanations: { en: 'Subject of إِنَّ - accusative.', ur: 'اسم إن - منصوب۔' }
      },
      {
        id: '39:7:5',
        arabic: 'غَنِيٌّ',
        transliteration: 'ghaniyyun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'غ ن ي',
        meaning: { en: 'Free of need', ur: 'بے نیاز' },
        grammarRole: 'khabar_inna',
        grammarExplanations: { en: 'Predicate of إِنَّ - nominative.', ur: 'خبر إن - مرفوع۔' }
      },
      {
        id: '39:7:6',
        arabic: 'عَنكُمْ',
        transliteration: 'ʿankum',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'of you', ur: 'تم سے' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun - free of need of you.', ur: 'حرف جر + ضمیر - تم سے بے نیاز۔' }
      }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "وَإِذَا مَسَّ الْإِنسَانَ ضُرٌّ دَعَا رَبَّهُ مُنِيبًا إِلَيْهِ",
    words: [
      {
        id: '39:8:1',
        arabic: 'وَإِذَا',
        transliteration: 'wa-idhā',
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        root: null,
        meaning: { en: 'And when', ur: 'اور جب' },
        grammarRole: 'zarf_shart',
        grammarExplanations: { en: 'Conjunction + temporal conditional particle.', ur: 'حرف عطف + ظرف شرط۔' }
      },
      {
        id: '39:8:2',
        arabic: 'مَسَّ',
        transliteration: 'massa',
        pos: ['V'],
        posLabel: 'V',
        root: 'م س س',
        meaning: { en: 'touches', ur: 'چھوئے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb - when affliction touches.', ur: 'فعل ماضی - جب تکلیف چھوئے۔' }
      },
      {
        id: '39:8:3',
        arabic: 'الْإِنسَانَ',
        transliteration: 'al-insāna',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ن س',
        meaning: { en: 'man', ur: 'انسان کو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '39:8:4',
        arabic: 'ضُرٌّ',
        transliteration: 'ḍurrun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ض ر ر',
        meaning: { en: 'adversity', ur: 'تکلیف' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject - nominative indefinite.', ur: 'فاعل - مرفوع نکرہ۔' }
      },
      {
        id: '39:8:5',
        arabic: 'دَعَا',
        transliteration: 'daʿā',
        pos: ['V'],
        posLabel: 'V',
        root: 'د ع و',
        meaning: { en: 'he calls', ur: 'وہ پکارتا ہے' },
        grammarRole: 'jawab_shart',
        grammarExplanations: { en: 'Answer to condition - perfect verb.', ur: 'جواب شرط - فعل ماضی۔' }
      },
      {
        id: '39:8:6',
        arabic: 'رَبَّهُ',
        transliteration: 'rabbahu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'his Lord', ur: 'اپنے رب کو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object + possessive pronoun.', ur: 'مفعول بہ + ضمیر ملکیت۔' }
      },
      {
        id: '39:8:7',
        arabic: 'مُنِيبًا',
        transliteration: 'munīban',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ب',
        meaning: { en: 'turning', ur: 'رجوع کرتے ہوئے' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'State (حال) - active participle Form IV.', ur: 'حال - اسم فاعل باب إفعال۔' }
      },
      {
        id: '39:8:8',
        arabic: 'إِلَيْهِ',
        transliteration: 'ilayhi',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'to Him', ur: 'اس کی طرف' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun - turning to Allah.', ur: 'حرف جر + ضمیر - اللہ کی طرف رجوع۔' }
      }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "أَمَّنْ هُوَ قَانِتٌ آنَاءَ اللَّيْلِ سَاجِدًا وَقَائِمًا يَحْذَرُ الْآخِرَةَ وَيَرْجُو رَحْمَةَ رَبِّهِ",
    words: [
      {
        id: '39:9:1',
        arabic: 'أَمَّنْ',
        transliteration: 'amman',
        pos: ['INTERROG', 'REL'],
        posLabel: 'INTERROG+REL',
        root: null,
        meaning: { en: 'Is one who', ur: 'کیا وہ جو' },
        grammarRole: 'istifham',
        grammarExplanations: { en: 'Interrogative أَ + مَنْ (who) - rhetorical comparison.', ur: 'استفہام أَ + مَنْ (جو) - بیانیہ موازنہ۔' }
      },
      {
        id: '39:9:2',
        arabic: 'هُوَ',
        transliteration: 'huwa',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: { en: 'he', ur: 'وہ' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Subject pronoun - 3rd masculine singular.', ur: 'مبتدأ ضمیر - غائب مذکر واحد۔' }
      },
      {
        id: '39:9:3',
        arabic: 'قَانِتٌ',
        transliteration: 'qānitun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ن ت',
        meaning: { en: 'devoutly obedient', ur: 'عبادت گزار' },
        grammarRole: 'khabar',
        grammarExplanations: { en: 'Predicate - active participle nominative.', ur: 'خبر - اسم فاعل مرفوع۔' }
      },
      {
        id: '39:9:4',
        arabic: 'آنَاءَ',
        transliteration: 'ānā\'a',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ن ي',
        meaning: { en: 'during periods', ur: 'گھڑیوں میں' },
        grammarRole: 'zarf_zaman',
        grammarExplanations: { en: 'Adverb of time - accusative.', ur: 'ظرف زمان - منصوب۔' }
      },
      {
        id: '39:9:5',
        arabic: 'اللَّيْلِ',
        transliteration: 'al-layli',
        pos: ['N'],
        posLabel: 'N',
        root: 'ل ي ل',
        meaning: { en: 'of the night', ur: 'رات کی' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in idafa.', ur: 'مضاف إليه۔' }
      },
      {
        id: '39:9:6',
        arabic: 'سَاجِدًا',
        transliteration: 'sājidan',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ج د',
        meaning: { en: 'prostrating', ur: 'سجدہ کرتے ہوئے' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'State (حال) - active participle accusative.', ur: 'حال - اسم فاعل منصوب۔' }
      },
      {
        id: '39:9:7',
        arabic: 'وَقَائِمًا',
        transliteration: 'wa-qā\'iman',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ق و م',
        meaning: { en: 'and standing', ur: 'اور کھڑے ہو کر' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'Conjoined state - active participle.', ur: 'حال معطوف - اسم فاعل۔' }
      },
      {
        id: '39:9:8',
        arabic: 'يَحْذَرُ',
        transliteration: 'yaḥdharu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ح ذ ر',
        meaning: { en: 'fearing', ur: 'ڈرتا ہے' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'Verbal clause as state.', ur: 'جملہ فعلیہ بطور حال۔' }
      },
      {
        id: '39:9:9',
        arabic: 'الْآخِرَةَ',
        transliteration: 'al-ākhirata',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ خ ر',
        meaning: { en: 'the Hereafter', ur: 'آخرت سے' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '39:9:10',
        arabic: 'وَيَرْجُو',
        transliteration: 'wa-yarjū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر ج و',
        meaning: { en: 'and hopes for', ur: 'اور امید رکھتا ہے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Conjunction + imperfect verb.', ur: 'حرف عطف + فعل مضارع۔' }
      },
      {
        id: '39:9:11',
        arabic: 'رَحْمَةَ',
        transliteration: 'raḥmata',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ح م',
        meaning: { en: 'mercy', ur: 'رحمت' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '39:9:12',
        arabic: 'رَبِّهِ',
        transliteration: 'rabbihi',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'of his Lord', ur: 'اپنے رب کی' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in idafa + possessive pronoun.', ur: 'مضاف إليه + ضمیر ملکیت۔' }
      }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "قُلْ يَا عِبَادِ الَّذِينَ آمَنُوا اتَّقُوا رَبَّكُمْ ۚ لِلَّذِينَ أَحْسَنُوا فِي هَٰذِهِ الدُّنْيَا حَسَنَةٌ",
    words: [
      {
        id: '39:10:1',
        arabic: 'قُلْ',
        transliteration: 'qul',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'Say', ur: 'کہو' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Imperative verb - command to Prophet.', ur: 'فعل امر - نبی کو حکم۔' }
      },
      {
        id: '39:10:2',
        arabic: 'يَا',
        transliteration: 'yā',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: { en: 'O', ur: 'اے' },
        grammarRole: 'harf_nida',
        grammarExplanations: { en: 'Vocative particle.', ur: 'حرف ندا۔' }
      },
      {
        id: '39:10:3',
        arabic: 'عِبَادِ',
        transliteration: 'ʿibādi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ب د',
        meaning: { en: 'My servants', ur: 'میرے بندو' },
        grammarRole: 'munada',
        grammarExplanations: { en: 'Vocative (منادی) - accusative in construct.', ur: 'منادی - منصوب مضاف۔' }
      },
      {
        id: '39:10:4',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'who', ur: 'جو' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Relative pronoun as adjective.', ur: 'اسم موصول بطور صفت۔' }
      },
      {
        id: '39:10:5',
        arabic: 'آمَنُوا',
        transliteration: 'āmanū',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ م ن',
        meaning: { en: 'believe', ur: 'ایمان لائے' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Perfect verb - relative clause.', ur: 'فعل ماضی - صلہ موصول۔' }
      },
      {
        id: '39:10:6',
        arabic: 'اتَّقُوا',
        transliteration: 'ittaqū',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ق ي',
        meaning: { en: 'fear', ur: 'ڈرو' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Imperative Form VIII - 2nd plural.', ur: 'فعل امر باب افتعال - مخاطب جمع۔' }
      },
      {
        id: '39:10:7',
        arabic: 'رَبَّكُمْ',
        transliteration: 'rabbakum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'your Lord', ur: 'اپنے رب سے' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object + possessive pronoun.', ur: 'مفعول بہ + ضمیر ملکیت۔' }
      },
      {
        id: '39:10:8',
        arabic: 'لِلَّذِينَ',
        transliteration: 'lilladhīna',
        pos: ['PREP', 'REL'],
        posLabel: 'PREP+REL',
        root: null,
        meaning: { en: 'For those who', ur: 'ان کے لیے جنہوں نے' },
        grammarRole: 'khabar_muqaddam',
        grammarExplanations: { en: 'Front-loaded predicate - preposition + relative.', ur: 'خبر مقدم - حرف جر + موصول۔' }
      },
      {
        id: '39:10:9',
        arabic: 'أَحْسَنُوا',
        transliteration: 'aḥsanū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ح س ن',
        meaning: { en: 'do good', ur: 'نیکی کی' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Perfect verb Form IV - relative clause.', ur: 'فعل ماضی باب إفعال - صلہ۔' }
      },
      {
        id: '39:10:10',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'in', ur: 'میں' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' }
      },
      {
        id: '39:10:11',
        arabic: 'هَٰذِهِ',
        transliteration: 'hādhihi',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: { en: 'this', ur: 'اس' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Demonstrative - feminine genitive.', ur: 'اسم اشارہ - مؤنث مجرور۔' }
      },
      {
        id: '39:10:12',
        arabic: 'الدُّنْيَا',
        transliteration: 'ad-dunyā',
        pos: ['N'],
        posLabel: 'N',
        root: 'د ن و',
        meaning: { en: 'world', ur: 'دنیا' },
        grammarRole: 'badal',
        grammarExplanations: { en: 'Substitute for هَٰذِهِ or apposition.', ur: 'بدل هَٰذِهِ کا یا عطف بیان۔' }
      },
      {
        id: '39:10:13',
        arabic: 'حَسَنَةٌ',
        transliteration: 'ḥasanatun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح س ن',
        meaning: { en: 'good', ur: 'بھلائی' },
        grammarRole: 'mubtada_muakhkhar',
        grammarExplanations: { en: 'Delayed subject - nominative indefinite.', ur: 'مبتدأ مؤخر - مرفوع نکرہ۔' }
      }
    ]
  }
};

export default TREEBANK_DATA;
