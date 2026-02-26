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
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 2, to: 6, label: 'عطف' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 6, to: 8, label: 'حال' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 10, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'موصول + صلة' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 4, label: 'عطف' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 5, to: 9, label: 'عطف' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 6, to: 8, label: 'فعل + مفعول به' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 3, to: 4, label: 'توکید' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 5, to: 7, label: 'حال' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + مفعول به' },
        { from: 8, to: 11, label: 'فعل + مفعول به' },
        { from: 8, to: 10, label: 'عطف' },
        { from: 10, to: 11, label: 'فعل + مفعول به' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
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
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نداء' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 7, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'بدل' }
      ],
    },
        posLabel: 'N',
        root: 'ح س ن',
        meaning: { en: 'good', ur: 'بھلائی' },
        grammarRole: 'mubtada_muakhkhar',
        grammarExplanations: { en: 'Delayed subject - nominative indefinite.', ur: 'مبتدأ مؤخر - مرفوع نکرہ۔' }
      }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "قُلْ إِنِّي أُمِرْتُ أَنْ أَعْبُدَ اللَّهَ مُخْلِصًا لَّهُ الدِّينَ",
    words: [
      {
        id: '39:11:1',
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
        id: '39:11:2',
        arabic: 'إِنِّي',
        transliteration: 'innī',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: { en: 'Indeed, I', ur: 'بے شک میں' },
        grammarRole: 'inna_ism',
        grammarExplanations: { en: 'Emphatic particle + 1st person pronoun.', ur: 'حرف توکید + ضمیر متکلم۔' }
      },
      {
        id: '39:11:3',
        arabic: 'أُمِرْتُ',
        transliteration: 'umirtu',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ م ر',
        meaning: { en: 'I have been commanded', ur: 'مجھے حکم دیا گیا' },
        grammarRole: 'khabar_inna',
        grammarExplanations: { en: 'Passive perfect verb - predicate of إن.', ur: 'فعل ماضی مجہول - خبر إن۔' }
      },
      {
        id: '39:11:4',
        arabic: 'أَنْ',
        transliteration: 'an',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: { en: 'to', ur: 'کہ' },
        grammarRole: 'harf_masdariyya',
        grammarExplanations: { en: 'Masdariyya particle forming infinitive clause.', ur: 'أَنْ مصدریہ۔' }
      },
      {
        id: '39:11:5',
        arabic: 'أَعْبُدَ',
        transliteration: 'aʿbuda',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ب د',
        meaning: { en: 'I worship', ur: 'عبادت کروں' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Subjunctive verb due to أَنْ.', ur: 'فعل مضارع منصوب أَنْ کی وجہ سے۔' }
      },
      {
        id: '39:11:6',
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
        id: '39:11:7',
        arabic: 'مُخْلِصًا',
        transliteration: 'mukhliṣan',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ل ص',
        meaning: { en: 'being sincere', ur: 'خالص کرتے ہوئے' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'State (حال) - active participle Form IV.', ur: 'حال - اسم فاعل باب إفعال۔' }
      },
      {
        id: '39:11:8',
        arabic: 'لَّهُ',
        transliteration: 'lahu',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'to Him', ur: 'اس کے لیے' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' }
      },
      {
        id: '39:11:9',
        arabic: 'الدِّينَ',
        transliteration: 'ad-dīna',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'إن + خبر' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 5, to: 7, label: 'حال' }
      ],
    },
        posLabel: 'N',
        root: 'د ي ن',
        meaning: { en: 'the religion', ur: 'دین' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Object of مُخْلِصًا - accusative.', ur: 'مفعول مُخْلِصًا کا - منصوب۔' }
      }
    ]
  },

  12: {
    ayahNumber: 12,
    text: "وَأُمِرْتُ لِأَنْ أَكُونَ أَوَّلَ الْمُسْلِمِينَ",
    words: [
      {
        id: '39:12:1',
        arabic: 'وَأُمِرْتُ',
        transliteration: 'wa-umirtu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'أ م ر',
        meaning: { en: 'And I have been commanded', ur: 'اور مجھے حکم دیا گیا' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Conjunction + passive perfect verb.', ur: 'حرف عطف + فعل ماضی مجہول۔' }
      },
      {
        id: '39:12:2',
        arabic: 'لِأَنْ',
        transliteration: 'li-an',
        pos: ['PREP', 'CONJ'],
        posLabel: 'PREP+CONJ',
        root: null,
        meaning: { en: 'that', ur: 'کہ' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Purpose لِ + أَنْ masdariyya.', ur: 'لام تعلیل + أَنْ مصدریہ۔' }
      },
      {
        id: '39:12:3',
        arabic: 'أَكُونَ',
        transliteration: 'akūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: { en: 'I be', ur: 'ہوں' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Subjunctive of كان - to be.', ur: 'فعل مضارع منصوب کان۔' }
      },
      {
        id: '39:12:4',
        arabic: 'أَوَّلَ',
        transliteration: 'awwala',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ و ل',
        meaning: { en: 'the first', ur: 'پہلا' },
        grammarRole: 'khabar_kana',
        grammarExplanations: { en: 'Predicate of أَكُونَ - accusative.', ur: 'خبر أَكُونَ - منصوب۔' }
      },
      {
        id: '39:12:5',
        arabic: 'الْمُسْلِمِينَ',
        transliteration: 'al-muslimīna',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'كان + خبر' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'س ل م',
        meaning: { en: 'of the Muslims', ur: 'مسلمانوں کا' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in construct - those who submit.', ur: 'مضاف إليه - فرمانبردار لوگ۔' }
      }
    ]
  },

  13: {
    ayahNumber: 13,
    text: "قُلْ إِنِّي أَخَافُ إِنْ عَصَيْتُ رَبِّي عَذَابَ يَوْمٍ عَظِيمٍ",
    words: [
      {
        id: '39:13:1',
        arabic: 'قُلْ',
        transliteration: 'qul',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'Say', ur: 'کہو' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Imperative verb.', ur: 'فعل امر۔' }
      },
      {
        id: '39:13:2',
        arabic: 'إِنِّي',
        transliteration: 'innī',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: { en: 'Indeed, I', ur: 'بے شک میں' },
        grammarRole: 'inna_ism',
        grammarExplanations: { en: 'Emphatic + 1st person pronoun.', ur: 'حرف توکید + ضمیر متکلم۔' }
      },
      {
        id: '39:13:3',
        arabic: 'أَخَافُ',
        transliteration: 'akhāfu',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ و ف',
        meaning: { en: 'I fear', ur: 'ڈرتا ہوں' },
        grammarRole: 'khabar_inna',
        grammarExplanations: { en: 'Predicate of إن - imperfect verb.', ur: 'خبر إن - فعل مضارع۔' }
      },
      {
        id: '39:13:4',
        arabic: 'إِنْ',
        transliteration: 'in',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: { en: 'if', ur: 'اگر' },
        grammarRole: 'harf_shart',
        grammarExplanations: { en: 'Conditional particle.', ur: 'حرف شرط۔' }
      },
      {
        id: '39:13:5',
        arabic: 'عَصَيْتُ',
        transliteration: 'ʿaṣaytu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ص ي',
        meaning: { en: 'I disobeyed', ur: 'نافرمانی کی' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Perfect verb - protasis of condition.', ur: 'فعل ماضی - شرط۔' }
      },
      {
        id: '39:13:6',
        arabic: 'رَبِّي',
        transliteration: 'rabbī',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'my Lord', ur: 'اپنے رب کی' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object + possessive pronoun.', ur: 'مفعول بہ + ضمیر ملکیت۔' }
      },
      {
        id: '39:13:7',
        arabic: 'عَذَابَ',
        transliteration: 'ʿadhāba',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ذ ب',
        meaning: { en: 'the punishment', ur: 'عذاب' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object of أَخَافُ - accusative.', ur: 'مفعول بہ أَخَافُ کا - منصوب۔' }
      },
      {
        id: '39:13:8',
        arabic: 'يَوْمٍ',
        transliteration: 'yawmin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: { en: 'of a Day', ur: 'دن کے' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in construct.', ur: 'مضاف إليه۔' }
      },
      {
        id: '39:13:9',
        arabic: 'عَظِيمٍ',
        transliteration: 'ʿaẓīmin',
        pos: ['ADJ'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'إن + خبر' },
        { from: 4, to: 5, label: 'شرط + فعل' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
        posLabel: 'ADJ',
        root: 'ع ظ م',
        meaning: { en: 'great', ur: 'بڑے' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Adjective for يَوْمٍ - genitive.', ur: 'صفت يَوْمٍ کی - مجرور۔' }
      }
    ]
  },

  14: {
    ayahNumber: 14,
    text: "قُلِ اللَّهَ أَعْبُدُ مُخْلِصًا لَّهُ دِينِي",
    words: [
      {
        id: '39:14:1',
        arabic: 'قُلِ',
        transliteration: 'quli',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'Say', ur: 'کہو' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Imperative verb.', ur: 'فعل امر۔' }
      },
      {
        id: '39:14:2',
        arabic: 'اللَّهَ',
        transliteration: 'Allāha',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'Allah', ur: 'اللہ' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object fronted for emphasis - accusative.', ur: 'مفعول بہ مقدم برائے تاکید - منصوب۔' }
      },
      {
        id: '39:14:3',
        arabic: 'أَعْبُدُ',
        transliteration: 'aʿbudu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ب د',
        meaning: { en: 'I worship', ur: 'عبادت کرتا ہوں' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Imperfect verb - 1st person singular.', ur: 'فعل مضارع - متکلم واحد۔' }
      },
      {
        id: '39:14:4',
        arabic: 'مُخْلِصًا',
        transliteration: 'mukhliṣan',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ل ص',
        meaning: { en: 'being sincere', ur: 'خالص کرتے ہوئے' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'State (حال) - active participle Form IV.', ur: 'حال - اسم فاعل باب إفعال۔' }
      },
      {
        id: '39:14:5',
        arabic: 'لَّهُ',
        transliteration: 'lahu',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'to Him', ur: 'اس کے لیے' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' }
      },
      {
        id: '39:14:6',
        arabic: 'دِينِي',
        transliteration: 'dīnī',
        pos: ['N', 'PRON'],
    structure: {
      relationships: [
        { from: 3, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'حال' }
      ],
    },
        posLabel: 'N+PRON',
        root: 'د ي ن',
        meaning: { en: 'my religion', ur: 'میرا دین' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Object of مُخْلِصًا + possessive pronoun.', ur: 'مفعول مُخْلِصًا کا + ضمیر ملکیت۔' }
      }
    ]
  },

  15: {
    ayahNumber: 15,
    text: "فَاعْبُدُوا مَا شِئْتُم مِّن دُونِهِ",
    words: [
      {
        id: '39:15:1',
        arabic: 'فَاعْبُدُوا',
        transliteration: 'fa-ʿbudū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ع ب د',
        meaning: { en: 'So worship', ur: 'پس عبادت کرو' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Conjunction + imperative - sarcastic/threatening command.', ur: 'فا + فعل امر - تہدیدی حکم۔' }
      },
      {
        id: '39:15:2',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'whatever', ur: 'جو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Relative pronoun as object.', ur: 'اسم موصول بطور مفعول بہ۔' }
      },
      {
        id: '39:15:3',
        arabic: 'شِئْتُم',
        transliteration: 'shi\'tum',
        pos: ['V'],
        posLabel: 'V',
        root: 'ش ي أ',
        meaning: { en: 'you wish', ur: 'تم چاہو' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Relative clause verb - perfect.', ur: 'صلہ موصول - فعل ماضی۔' }
      },
      {
        id: '39:15:4',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition indicating exclusion.', ur: 'حرف جر استثنائی۔' }
      },
      {
        id: '39:15:5',
        arabic: 'دُونِهِ',
        transliteration: 'dūnihi',
        pos: ['N', 'PRON'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'N+PRON',
        root: 'د و ن',
        meaning: { en: 'other than Him', ur: 'اس کے سوا' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive + pronoun - besides Allah.', ur: 'مجرور + ضمیر - اللہ کے سوا۔' }
      }
    ]
  },

  16: {
    ayahNumber: 16,
    text: "قُلْ إِنَّ الْخَاسِرِينَ الَّذِينَ خَسِرُوا أَنفُسَهُمْ وَأَهْلِيهِمْ يَوْمَ الْقِيَامَةِ",
    words: [
      {
        id: '39:16:1',
        arabic: 'قُلْ',
        transliteration: 'qul',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'Say', ur: 'کہو' },
        grammarRole: 'verb_amr',
        grammarExplanations: { en: 'Imperative verb.', ur: 'فعل امر۔' }
      },
      {
        id: '39:16:2',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['EMPH'],
        posLabel: 'EMPH',
        root: null,
        meaning: { en: 'Indeed', ur: 'بے شک' },
        grammarRole: 'harf_tawkid',
        grammarExplanations: { en: 'Emphatic particle.', ur: 'حرف توکید۔' }
      },
      {
        id: '39:16:3',
        arabic: 'الْخَاسِرِينَ',
        transliteration: 'al-khāsirīna',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ س ر',
        meaning: { en: 'the losers', ur: 'نقصان اٹھانے والے' },
        grammarRole: 'ism_inna',
        grammarExplanations: { en: 'Subject of إِنَّ - accusative plural.', ur: 'اسم إن - منصوب جمع۔' }
      },
      {
        id: '39:16:4',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'those who', ur: 'وہ جنہوں نے' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Relative pronoun as adjective.', ur: 'اسم موصول بطور صفت۔' }
      },
      {
        id: '39:16:5',
        arabic: 'خَسِرُوا',
        transliteration: 'khasirū',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ س ر',
        meaning: { en: 'lost', ur: 'نقصان اٹھایا' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Relative clause verb - perfect.', ur: 'صلہ - فعل ماضی۔' }
      },
      {
        id: '39:16:6',
        arabic: 'أَنفُسَهُمْ',
        transliteration: 'anfusahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ن ف س',
        meaning: { en: 'themselves', ur: 'اپنے آپ کو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object + possessive pronoun.', ur: 'مفعول بہ + ضمیر ملکیت۔' }
      },
      {
        id: '39:16:7',
        arabic: 'وَأَهْلِيهِمْ',
        transliteration: 'wa-ahlīhim',
        pos: ['CONJ', 'N', 'PRON'],
        posLabel: 'CONJ+N+PRON',
        root: 'أ ه ل',
        meaning: { en: 'and their families', ur: 'اور اپنے گھر والوں کو' },
        grammarRole: 'matoof',
        grammarExplanations: { en: 'Conjoined object.', ur: 'معطوف۔' }
      },
      {
        id: '39:16:8',
        arabic: 'يَوْمَ',
        transliteration: 'yawma',
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: { en: 'on the Day', ur: 'دن' },
        grammarRole: 'zarf_zaman',
        grammarExplanations: { en: 'Adverb of time - accusative.', ur: 'ظرف زمان - منصوب۔' }
      },
      {
        id: '39:16:9',
        arabic: 'الْقِيَامَةِ',
        transliteration: 'al-qiyāmati',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'ق و م',
        meaning: { en: 'of Resurrection', ur: 'قیامت کے' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in construct.', ur: 'مضاف إليه۔' }
      }
    ]
  },

  17: {
    ayahNumber: 17,
    text: "لَهُم مِّن فَوْقِهِمْ ظُلَلٌ مِّنَ النَّارِ وَمِن تَحْتِهِمْ ظُلَلٌ",
    words: [
      {
        id: '39:17:1',
        arabic: 'لَهُم',
        transliteration: 'lahum',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'For them', ur: 'ان کے لیے' },
        grammarRole: 'khabar_muqaddam',
        grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' }
      },
      {
        id: '39:17:2',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition of location.', ur: 'حرف جر مکانی۔' }
      },
      {
        id: '39:17:3',
        arabic: 'فَوْقِهِمْ',
        transliteration: 'fawqihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ف و ق',
        meaning: { en: 'above them', ur: 'ان کے اوپر' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive + possessive pronoun.', ur: 'مجرور + ضمیر ملکیت۔' }
      },
      {
        id: '39:17:4',
        arabic: 'ظُلَلٌ',
        transliteration: 'ẓulalun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ظ ل ل',
        meaning: { en: 'canopies/layers', ur: 'سائبان' },
        grammarRole: 'mubtada_muakhkhar',
        grammarExplanations: { en: 'Delayed subject - nominative.', ur: 'مبتدأ مؤخر - مرفوع۔' }
      },
      {
        id: '39:17:5',
        arabic: 'مِّنَ',
        transliteration: 'mina',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'of', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition indicating material.', ur: 'حرف جر بیانی۔' }
      },
      {
        id: '39:17:6',
        arabic: 'النَّارِ',
        transliteration: 'an-nāri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ر',
        meaning: { en: 'the Fire', ur: 'آگ' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive - Hellfire.', ur: 'مجرور - جہنم کی آگ۔' }
      },
      {
        id: '39:17:7',
        arabic: 'وَمِن',
        transliteration: 'wa-min',
        pos: ['CONJ', 'PREP'],
        posLabel: 'CONJ+PREP',
        root: null,
        meaning: { en: 'and from', ur: 'اور سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Conjunction + preposition.', ur: 'حرف عطف + حرف جر۔' }
      },
      {
        id: '39:17:8',
        arabic: 'تَحْتِهِمْ',
        transliteration: 'taḥtihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ت ح ت',
        meaning: { en: 'beneath them', ur: 'ان کے نیچے' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive + possessive pronoun.', ur: 'مجرور + ضمیر ملکیت۔' }
      },
      {
        id: '39:17:9',
        arabic: 'ظُلَلٌ',
        transliteration: 'ẓulalun',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'N',
        root: 'ظ ل ل',
        meaning: { en: 'canopies', ur: 'سائبان' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Subject - nominative.', ur: 'مبتدأ - مرفوع۔' }
      }
    ]
  },

  18: {
    ayahNumber: 18,
    text: "الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ",
    words: [
      {
        id: '39:18:1',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'Those who', ur: 'وہ جو' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Relative pronoun as subject.', ur: 'اسم موصول بطور مبتدأ۔' }
      },
      {
        id: '39:18:2',
        arabic: 'يَسْتَمِعُونَ',
        transliteration: 'yastamiʿūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'س م ع',
        meaning: { en: 'listen to', ur: 'سنتے ہیں' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Relative clause - Form X imperfect, attentive listening.', ur: 'صلہ - فعل مضارع باب استفعال، توجہ سے سننا۔' }
      },
      {
        id: '39:18:3',
        arabic: 'الْقَوْلَ',
        transliteration: 'al-qawla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: { en: 'the speech', ur: 'بات کو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' }
      },
      {
        id: '39:18:4',
        arabic: 'فَيَتَّبِعُونَ',
        transliteration: 'fa-yattabiʿūna',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ت ب ع',
        meaning: { en: 'and follow', ur: 'پھر پیروی کرتے ہیں' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Conjunction + Form VIII imperfect.', ur: 'حرف عطف + فعل مضارع باب افتعال۔' }
      },
      {
        id: '39:18:5',
        arabic: 'أَحْسَنَهُ',
        transliteration: 'aḥsanahu',
        pos: ['N', 'PRON'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'فعل + مفعول به' }
      ],
    },
        posLabel: 'N+PRON',
        root: 'ح س ن',
        meaning: { en: 'the best of it', ur: 'اس کی بہترین' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Object - superlative + pronoun.', ur: 'مفعول بہ - اسم تفضیل + ضمیر۔' }
      }
    ]
  },

  19: {
    ayahNumber: 19,
    text: "أَفَمَنْ حَقَّ عَلَيْهِ كَلِمَةُ الْعَذَابِ أَفَأَنتَ تُنقِذُ مَن فِي النَّارِ",
    words: [
      {
        id: '39:19:1',
        arabic: 'أَفَمَنْ',
        transliteration: 'a-fa-man',
        pos: ['INTERROG', 'CONJ', 'REL'],
        posLabel: 'INTERROG+CONJ+REL',
        root: null,
        meaning: { en: 'Then is one who', ur: 'کیا جس پر' },
        grammarRole: 'istifham',
        grammarExplanations: { en: 'Interrogative + conjunction + relative pronoun.', ur: 'استفہام + فا + اسم موصول۔' }
      },
      {
        id: '39:19:2',
        arabic: 'حَقَّ',
        transliteration: 'ḥaqqa',
        pos: ['V'],
        posLabel: 'V',
        root: 'ح ق ق',
        meaning: { en: 'has been justified', ur: 'ثابت ہو چکا ہے' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Relative clause verb - perfect.', ur: 'صلہ - فعل ماضی۔' }
      },
      {
        id: '39:19:3',
        arabic: 'عَلَيْهِ',
        transliteration: 'ʿalayhi',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'upon him', ur: 'اس پر' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' }
      },
      {
        id: '39:19:4',
        arabic: 'كَلِمَةُ',
        transliteration: 'kalimatu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل م',
        meaning: { en: 'the word/decree', ur: 'بات' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' }
      },
      {
        id: '39:19:5',
        arabic: 'الْعَذَابِ',
        transliteration: 'al-ʿadhābi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ذ ب',
        meaning: { en: 'of punishment', ur: 'عذاب کی' },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: { en: 'Genitive in construct.', ur: 'مضاف إليه۔' }
      },
      {
        id: '39:19:6',
        arabic: 'أَفَأَنتَ',
        transliteration: 'a-fa-anta',
        pos: ['INTERROG', 'CONJ', 'PRON'],
        posLabel: 'INTERROG+CONJ+PRON',
        root: null,
        meaning: { en: 'then can you', ur: 'تو کیا تم' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Interrogative + conjunction + subject pronoun.', ur: 'استفہام + فا + مبتدأ ضمیر۔' }
      },
      {
        id: '39:19:7',
        arabic: 'تُنقِذُ',
        transliteration: 'tunqidhu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ق ذ',
        meaning: { en: 'save/rescue', ur: 'بچاؤ' },
        grammarRole: 'khabar',
        grammarExplanations: { en: 'Predicate - Form IV imperfect.', ur: 'خبر - فعل مضارع باب إفعال۔' }
      },
      {
        id: '39:19:8',
        arabic: 'مَن',
        transliteration: 'man',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'those who are', ur: 'جو' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Relative pronoun as object.', ur: 'اسم موصول بطور مفعول بہ۔' }
      },
      {
        id: '39:19:9',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'in', ur: 'میں' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition of location.', ur: 'حرف جر مکانی۔' }
      },
      {
        id: '39:19:10',
        arabic: 'النَّارِ',
        transliteration: 'an-nāri',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'N',
        root: 'ن و ر',
        meaning: { en: 'the Fire', ur: 'آگ' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive - Hellfire.', ur: 'مجرور - جہنم۔' }
      }
    ]
  },

  20: {
    ayahNumber: 20,
    text: "لَٰكِنِ الَّذِينَ اتَّقَوْا رَبَّهُمْ لَهُمْ غُرَفٌ مِّن فَوْقِهَا غُرَفٌ مَّبْنِيَّةٌ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
    words: [
      {
        id: '39:20:1',
        arabic: 'لَٰكِنِ',
        transliteration: 'lākini',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: { en: 'But', ur: 'لیکن' },
        grammarRole: 'istidrak',
        grammarExplanations: { en: 'Adversative particle - contrasting with previous.', ur: 'حرف استدراک - سابق سے تضاد۔' }
      },
      {
        id: '39:20:2',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'those who', ur: 'وہ جنہوں نے' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Subject - relative pronoun.', ur: 'مبتدأ - اسم موصول۔' }
      },
      {
        id: '39:20:3',
        arabic: 'اتَّقَوْا',
        transliteration: 'ittaqaw',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ق ي',
        meaning: { en: 'feared', ur: 'تقویٰ اختیار کیا' },
        grammarRole: 'sila',
        grammarExplanations: { en: 'Relative clause - Form VIII perfect.', ur: 'صلہ - فعل ماضی باب افتعال۔' }
      },
      {
        id: '39:20:4',
        arabic: 'رَبَّهُمْ',
        transliteration: 'rabbahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'their Lord', ur: 'اپنے رب سے' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object + possessive pronoun.', ur: 'مفعول بہ + ضمیر ملکیت۔' }
      },
      {
        id: '39:20:5',
        arabic: 'لَهُمْ',
        transliteration: 'lahum',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'for them', ur: 'ان کے لیے' },
        grammarRole: 'khabar_muqaddam',
        grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' }
      },
      {
        id: '39:20:6',
        arabic: 'غُرَفٌ',
        transliteration: 'ghurafun',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ ر ف',
        meaning: { en: 'lofty chambers', ur: 'بالاخانے' },
        grammarRole: 'mubtada_muakhkhar',
        grammarExplanations: { en: 'Delayed subject - nominative.', ur: 'مبتدأ مؤخر - مرفوع۔' }
      },
      {
        id: '39:20:7',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' }
      },
      {
        id: '39:20:8',
        arabic: 'فَوْقِهَا',
        transliteration: 'fawqihā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ف و ق',
        meaning: { en: 'above them', ur: 'اوپر' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' }
      },
      {
        id: '39:20:9',
        arabic: 'غُرَفٌ',
        transliteration: 'ghurafun',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ ر ف',
        meaning: { en: 'chambers', ur: 'بالاخانے' },
        grammarRole: 'mubtada',
        grammarExplanations: { en: 'Subject - nominative.', ur: 'مبتدأ - مرفوع۔' }
      },
      {
        id: '39:20:10',
        arabic: 'مَّبْنِيَّةٌ',
        transliteration: 'mabniyyatun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ب ن ي',
        meaning: { en: 'built', ur: 'بنے ہوئے' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Adjective - passive participle.', ur: 'صفت - اسم مفعول۔' }
      },
      {
        id: '39:20:11',
        arabic: 'تَجْرِي',
        transliteration: 'tajrī',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ر ي',
        meaning: { en: 'flow', ur: 'بہتی ہیں' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Imperfect verb - 3rd feminine singular.', ur: 'فعل مضارع - غائب مؤنث۔' }
      },
      {
        id: '39:20:12',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' }
      },
      {
        id: '39:20:13',
        arabic: 'تَحْتِهَا',
        transliteration: 'taḥtihā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ت ح ت',
        meaning: { en: 'beneath them', ur: 'ان کے نیچے' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' }
      },
      {
        id: '39:20:14',
        arabic: 'الْأَنْهَارُ',
        transliteration: 'al-anhāru',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'N',
        root: 'ن ه ر',
        meaning: { en: 'the rivers', ur: 'نہریں' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject of تَجْرِي - nominative.', ur: 'فاعل تَجْرِي کا - مرفوع۔' }
      }
    ]
  },

  21: {
    ayahNumber: 21,
    text: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنزَلَ مِنَ السَّمَاءِ مَاءً فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ",
    words: [
      {
        id: '39:21:1',
        arabic: 'أَلَمْ',
        transliteration: 'a-lam',
        pos: ['INTERROG', 'NEG'],
        posLabel: 'INTERROG+NEG',
        root: null,
        meaning: { en: 'Do you not', ur: 'کیا نہیں' },
        grammarRole: 'istifham',
        grammarExplanations: { en: 'Rhetorical question + negation.', ur: 'استفہام تقریری + نفی۔' }
      },
      {
        id: '39:21:2',
        arabic: 'تَرَ',
        transliteration: 'tara',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر أ ي',
        meaning: { en: 'see', ur: 'دیکھتے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Jussive verb - 2nd person.', ur: 'فعل مضارع مجزوم - مخاطب۔' }
      },
      {
        id: '39:21:3',
        arabic: 'أَنَّ',
        transliteration: 'anna',
        pos: ['EMPH'],
        posLabel: 'EMPH',
        root: null,
        meaning: { en: 'that', ur: 'کہ' },
        grammarRole: 'harf_tawkid',
        grammarExplanations: { en: 'Emphatic particle.', ur: 'حرف توکید۔' }
      },
      {
        id: '39:21:4',
        arabic: 'اللَّهَ',
        transliteration: 'Allāha',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'Allah', ur: 'اللہ' },
        grammarRole: 'ism_inna',
        grammarExplanations: { en: 'Subject of أَنَّ - accusative.', ur: 'اسم أَنَّ - منصوب۔' }
      },
      {
        id: '39:21:5',
        arabic: 'أَنزَلَ',
        transliteration: 'anzala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        meaning: { en: 'sent down', ur: 'اتارا' },
        grammarRole: 'khabar_inna',
        grammarExplanations: { en: 'Predicate of أَنَّ - Form IV perfect.', ur: 'خبر أَنَّ - فعل ماضی باب إفعال۔' }
      },
      {
        id: '39:21:6',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition of origin.', ur: 'حرف جر ماخذ۔' }
      },
      {
        id: '39:21:7',
        arabic: 'السَّمَاءِ',
        transliteration: 'as-samā\'i',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: { en: 'the sky', ur: 'آسمان' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive noun.', ur: 'اسم مجرور۔' }
      },
      {
        id: '39:21:8',
        arabic: 'مَاءً',
        transliteration: 'mā\'an',
        pos: ['N'],
        posLabel: 'N',
        root: 'م و ه',
        meaning: { en: 'water', ur: 'پانی' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative indefinite.', ur: 'مفعول بہ - منصوب نکرہ۔' }
      },
      {
        id: '39:21:9',
        arabic: 'فَسَلَكَهُ',
        transliteration: 'fa-salakahu',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'س ل ك',
        meaning: { en: 'then He directed it', ur: 'پھر اسے چلایا' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Conjunction + perfect verb + pronoun.', ur: 'فا + فعل ماضی + ضمیر۔' }
      },
      {
        id: '39:21:10',
        arabic: 'يَنَابِيعَ',
        transliteration: 'yanābīʿa',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ب ع',
        meaning: { en: 'as springs', ur: 'چشمے' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'State or second object - accusative.', ur: 'حال یا مفعول ثانی - منصوب۔' }
      },
      {
        id: '39:21:11',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: { en: 'in', ur: 'میں' },
        grammarRole: 'harf_jarr',
        grammarExplanations: { en: 'Preposition of location.', ur: 'حرف جر مکانی۔' }
      },
      {
        id: '39:21:12',
        arabic: 'الْأَرْضِ',
        transliteration: 'al-arḍi',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'إن + اسم' },
        { from: 5, to: 8, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'N',
        root: 'أ ر ض',
        meaning: { en: 'the earth', ur: 'زمین' },
        grammarRole: 'majroor',
        grammarExplanations: { en: 'Genitive noun.', ur: 'اسم مجرور۔' }
      }
    ]
  },

  22: {
    ayahNumber: 22,
    text: "ثُمَّ يُخْرِجُ بِهِ زَرْعًا مُّخْتَلِفًا أَلْوَانُهُ ثُمَّ يَهِيجُ فَتَرَاهُ مُصْفَرًّا ثُمَّ يَجْعَلُهُ حُطَامًا",
    words: [
      {
        id: '39:22:1',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: { en: 'Then', ur: 'پھر' },
        grammarRole: 'harf_atf',
        grammarExplanations: { en: 'Sequential conjunction.', ur: 'حرف عطف ترتیبی۔' }
      },
      {
        id: '39:22:2',
        arabic: 'يُخْرِجُ',
        transliteration: 'yukhriju',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ر ج',
        meaning: { en: 'He produces', ur: 'نکالتا ہے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Form IV imperfect.', ur: 'فعل مضارع باب إفعال۔' }
      },
      {
        id: '39:22:3',
        arabic: 'بِهِ',
        transliteration: 'bihi',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: { en: 'by it', ur: 'اس سے' },
        grammarRole: 'jarr_majroor',
        grammarExplanations: { en: 'Preposition + pronoun - by means of water.', ur: 'حرف جر + ضمیر - پانی کے ذریعے۔' }
      },
      {
        id: '39:22:4',
        arabic: 'زَرْعًا',
        transliteration: 'zarʿan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ز ر ع',
        meaning: { en: 'crops', ur: 'کھیتی' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Direct object - accusative indefinite.', ur: 'مفعول بہ - منصوب نکرہ۔' }
      },
      {
        id: '39:22:5',
        arabic: 'مُّخْتَلِفًا',
        transliteration: 'mukhtalifan',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'خ ل ف',
        meaning: { en: 'varying', ur: 'مختلف' },
        grammarRole: 'sifa',
        grammarExplanations: { en: 'Adjective - Form VIII active participle.', ur: 'صفت - اسم فاعل باب افتعال۔' }
      },
      {
        id: '39:22:6',
        arabic: 'أَلْوَانُهُ',
        transliteration: 'alwānuhu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ل و ن',
        meaning: { en: 'its colors', ur: 'اس کے رنگ' },
        grammarRole: 'faa\'il',
        grammarExplanations: { en: 'Subject of مُّخْتَلِفًا - nominative.', ur: 'فاعل مُّخْتَلِفًا کا - مرفوع۔' }
      },
      {
        id: '39:22:7',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: { en: 'then', ur: 'پھر' },
        grammarRole: 'harf_atf',
        grammarExplanations: { en: 'Sequential conjunction.', ur: 'حرف عطف۔' }
      },
      {
        id: '39:22:8',
        arabic: 'يَهِيجُ',
        transliteration: 'yahīju',
        pos: ['V'],
        posLabel: 'V',
        root: 'ه ي ج',
        meaning: { en: 'it dries up', ur: 'خشک ہو جاتا ہے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Imperfect verb - withers.', ur: 'فعل مضارع - مرجھانا۔' }
      },
      {
        id: '39:22:9',
        arabic: 'فَتَرَاهُ',
        transliteration: 'fa-tarāhu',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ر أ ي',
        meaning: { en: 'and you see it', ur: 'تو تم دیکھتے ہو' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Conjunction + imperfect verb + pronoun.', ur: 'فا + فعل مضارع + ضمیر۔' }
      },
      {
        id: '39:22:10',
        arabic: 'مُصْفَرًّا',
        transliteration: 'muṣfarran',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ص ف ر',
        meaning: { en: 'yellowed', ur: 'زرد' },
        grammarRole: 'haal',
        grammarExplanations: { en: 'State - turned yellow.', ur: 'حال - زرد ہوا۔' }
      },
      {
        id: '39:22:11',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: { en: 'then', ur: 'پھر' },
        grammarRole: 'harf_atf',
        grammarExplanations: { en: 'Sequential conjunction.', ur: 'حرف عطف۔' }
      },
      {
        id: '39:22:12',
        arabic: 'يَجْعَلُهُ',
        transliteration: 'yajʿaluhu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ج ع ل',
        meaning: { en: 'He makes it', ur: 'بنا دیتا ہے' },
        grammarRole: 'verb',
        grammarExplanations: { en: 'Imperfect verb + pronoun.', ur: 'فعل مضارع + ضمیر۔' }
      },
      {
        id: '39:22:13',
        arabic: 'حُطَامًا',
        transliteration: 'ḥuṭāman',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 9, to: 10, label: 'حال' },
        { from: 12, to: 13, label: 'فعل + مفعول به' }
      ],
    },
        posLabel: 'N',
        root: 'ح ط م',
        meaning: { en: 'debris/dry fragments', ur: 'چورا چورا' },
        grammarRole: 'mafool_bihi',
        grammarExplanations: { en: 'Second object of يَجْعَلُ - accusative.', ur: 'مفعول ثانی يَجْعَلُ کا - منصوب۔' }
      }
    ]
  },

  23: {
    ayahNumber: 23,
    text: "اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُّتَشَابِهًا مَّثَانِيَ",
    words: [
      { id: '39:23:1', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject - nominative.', ur: 'مبتدأ - مرفوع۔' } },
      { id: '39:23:2', arabic: 'نَزَّلَ', transliteration: 'nazzala', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'has sent down', ur: 'اتارا' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate - Form II perfect, gradual revelation.', ur: 'خبر - فعل ماضی باب تفعیل، بتدریج نزول۔' } },
      { id: '39:23:3', arabic: 'أَحْسَنَ', transliteration: 'aḥsana', pos: ['N'], posLabel: 'N', root: 'ح س ن', meaning: { en: 'the best', ur: 'بہترین' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object - superlative, accusative.', ur: 'مفعول بہ - اسم تفضیل، منصوب۔' } },
      { id: '39:23:4', arabic: 'الْحَدِيثِ', transliteration: 'al-ḥadīthi', pos: ['N'], posLabel: 'N', root: 'ح د ث', meaning: { en: 'of speech', ur: 'بات' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive in construct.', ur: 'مضاف إليه۔' } },
      { id: '39:23:5', arabic: 'كِتَابًا', transliteration: 'kitāban', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'a Book', ur: 'کتاب' }, grammarRole: 'badal', grammarExplanations: { en: 'Apposition for أَحْسَنَ - accusative.', ur: 'بدل أَحْسَنَ کا - منصوب۔' } },
      { id: '39:23:6', arabic: 'مُّتَشَابِهًا', transliteration: 'mutashābihan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ش ب ه', meaning: { en: 'consistent/resembling', ur: 'ایک جیسی' }, grammarRole: 'sifa', grammarExplanations: { en: 'Adjective - Form VI active participle.', ur: 'صفت - اسم فاعل باب تفاعل۔' } },
      { id: '39:23:7', arabic: 'مَّثَانِيَ', transliteration: 'mathāniya', pos: ['N'], posLabel: 'N', root: 'ث ن ي', meaning: { en: 'oft-repeated', ur: 'بار بار دہرائی جانے والی' }, grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
        grammarExplanations: { en: 'Second adjective - plural of مَثْنَى.', ur: 'صفت ثانی - مَثْنَى کی جمع۔' } }
    ]
  },

  24: {
    ayahNumber: 24,
    text: "تَقْشَعِرُّ مِنْهُ جُلُودُ الَّذِينَ يَخْشَوْنَ رَبَّهُمْ ثُمَّ تَلِينُ جُلُودُهُمْ وَقُلُوبُهُمْ إِلَىٰ ذِكْرِ اللَّهِ",
    words: [
      { id: '39:24:1', arabic: 'تَقْشَعِرُّ', transliteration: 'taqshaʿirru', pos: ['V'], posLabel: 'V', root: 'ق ش ع ر', meaning: { en: 'shiver/tremble', ur: 'کانپ اٹھتے ہیں' }, grammarRole: 'verb', grammarExplanations: { en: 'Imperfect verb - quadrilateral root.', ur: 'فعل مضارع - رباعی۔' } },
      { id: '39:24:2', arabic: 'مِنْهُ', transliteration: 'minhu', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'from it', ur: 'اس سے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun - from the Quran.', ur: 'حرف جر + ضمیر - قرآن سے۔' } },
      { id: '39:24:3', arabic: 'جُلُودُ', transliteration: 'julūdu', pos: ['N'], posLabel: 'N', root: 'ج ل د', meaning: { en: 'the skins', ur: 'کھالیں' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' } },
      { id: '39:24:4', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'of those who', ur: 'جو' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive - relative pronoun.', ur: 'مضاف إليه۔' } },
      { id: '39:24:5', arabic: 'يَخْشَوْنَ', transliteration: 'yakhshawna', pos: ['V'], posLabel: 'V', root: 'خ ش ي', meaning: { en: 'fear', ur: 'ڈرتے ہیں' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause verb.', ur: 'صلہ۔' } },
      { id: '39:24:6', arabic: 'رَبَّهُمْ', transliteration: 'rabbahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'اپنے رب سے' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object + pronoun.', ur: 'مفعول بہ + ضمیر۔' } },
      { id: '39:24:7', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' }, grammarRole: 'harf_atf', grammarExplanations: { en: 'Sequential conjunction.', ur: 'حرف عطف۔' } },
      { id: '39:24:8', arabic: 'تَلِينُ', transliteration: 'talīnu', pos: ['V'], posLabel: 'V', root: 'ل ي ن', meaning: { en: 'soften', ur: 'نرم ہو جاتی ہیں' }, grammarRole: 'verb', grammarExplanations: { en: 'Imperfect verb.', ur: 'فعل مضارع۔' } },
      { id: '39:24:9', arabic: 'جُلُودُهُمْ', transliteration: 'julūduhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ج ل د', meaning: { en: 'their skins', ur: 'ان کی کھالیں' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' } },
      { id: '39:24:10', arabic: 'وَقُلُوبُهُمْ', transliteration: 'wa-qulūbuhum', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ق ل ب', meaning: { en: 'and their hearts', ur: 'اور ان کے دل' }, grammarRole: 'matoof', grammarExplanations: { en: 'Conjoined subject.', ur: 'معطوف۔' } },
      { id: '39:24:11', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'to', ur: 'کی طرف' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition of direction.', ur: 'حرف جر۔' } },
      { id: '39:24:12', arabic: 'ذِكْرِ', transliteration: 'dhikri', pos: ['N'], posLabel: 'N', root: 'ذ ك ر', meaning: { en: 'the remembrance', ur: 'یاد' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive noun.', ur: 'مجرور۔' } },
      { id: '39:24:13', arabic: 'اللَّهِ', transliteration: 'Allāhi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'of Allah', ur: 'اللہ کی' }, grammarRole: 'mudaf_ilayh',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Genitive in construct.', ur: 'مضاف إليه۔' } }
    ]
  },

  25: {
    ayahNumber: 25,
    text: "كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ فَأَتَاهُمُ الْعَذَابُ مِنْ حَيْثُ لَا يَشْعُرُونَ",
    words: [
      { id: '39:25:1', arabic: 'كَذَّبَ', transliteration: 'kadhdhaba', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'Denied', ur: 'جھٹلایا' }, grammarRole: 'verb', grammarExplanations: { en: 'Form II perfect - intensive denial.', ur: 'فعل ماضی باب تفعیل - شدید تکذیب۔' } },
      { id: '39:25:2', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جنہوں نے' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - relative pronoun.', ur: 'فاعل - اسم موصول۔' } },
      { id: '39:25:3', arabic: 'مِن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:25:4', arabic: 'قَبْلِهِمْ', transliteration: 'qablihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ب ل', meaning: { en: 'before them', ur: 'ان سے پہلے' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' } },
      { id: '39:25:5', arabic: 'فَأَتَاهُمُ', transliteration: 'fa-atāhumu', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'أ ت ي', meaning: { en: 'so came to them', ur: 'تو ان پر آیا' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + perfect verb + pronoun.', ur: 'فا + فعل ماضی + ضمیر۔' } },
      { id: '39:25:6', arabic: 'الْعَذَابُ', transliteration: 'al-ʿadhābu', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'the punishment', ur: 'عذاب' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' } },
      { id: '39:25:7', arabic: 'مِنْ', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition of origin.', ur: 'حرف جر۔' } },
      { id: '39:25:8', arabic: 'حَيْثُ', transliteration: 'ḥaythu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'where', ur: 'جہاں' }, grammarRole: 'majroor', grammarExplanations: { en: 'Adverb of place.', ur: 'ظرف مکان۔' } },
      { id: '39:25:9', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' }, grammarRole: 'harf_nafi', grammarExplanations: { en: 'Negation particle.', ur: 'حرف نفی۔' } },
      { id: '39:25:10', arabic: 'يَشْعُرُونَ', transliteration: 'yashʿurūna', pos: ['V'], posLabel: 'V', root: 'ش ع ر', meaning: { en: 'they perceive', ur: 'وہ سمجھتے' }, grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
        grammarExplanations: { en: 'Imperfect verb - 3rd masculine plural.', ur: 'فعل مضارع - غائب مذکر جمع۔' } }
    ]
  },

  26: {
    ayahNumber: 26,
    text: "فَأَذَاقَهُمُ اللَّهُ الْخِزْيَ فِي الْحَيَاةِ الدُّنْيَا ۖ وَلَعَذَابُ الْآخِرَةِ أَكْبَرُ",
    words: [
      { id: '39:26:1', arabic: 'فَأَذَاقَهُمُ', transliteration: 'fa-adhāqahumu', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ذ و ق', meaning: { en: 'So Allah made them taste', ur: 'تو چکھایا ان کو' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + Form IV perfect + pronoun.', ur: 'فا + فعل ماضی باب إفعال + ضمیر۔' } },
      { id: '39:26:2', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ نے' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' } },
      { id: '39:26:3', arabic: 'الْخِزْيَ', transliteration: 'al-khizya', pos: ['N'], posLabel: 'N', root: 'خ ز ي', meaning: { en: 'disgrace', ur: 'رسوائی' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Second object - accusative.', ur: 'مفعول ثانی - منصوب۔' } },
      { id: '39:26:4', arabic: 'فِي', transliteration: 'fī', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'in', ur: 'میں' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:26:5', arabic: 'الْحَيَاةِ', transliteration: 'al-ḥayāti', pos: ['N'], posLabel: 'N', root: 'ح ي ي', meaning: { en: 'the life', ur: 'زندگی' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive noun.', ur: 'مجرور۔' } },
      { id: '39:26:6', arabic: 'الدُّنْيَا', transliteration: 'ad-dunyā', pos: ['N'], posLabel: 'N', root: 'د ن و', meaning: { en: 'of this world', ur: 'دنیا کی' }, grammarRole: 'sifa', grammarExplanations: { en: 'Adjective for الْحَيَاةِ.', ur: 'صفت الْحَيَاةِ کی۔' } },
      { id: '39:26:7', arabic: 'وَلَعَذَابُ', transliteration: 'wa-la-ʿadhābu', pos: ['CONJ', 'EMPH', 'N'], posLabel: 'CONJ+EMPH+N', root: 'ع ذ ب', meaning: { en: 'and the punishment', ur: 'اور عذاب' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Emphatic لَ + subject.', ur: 'لام تاکید + مبتدأ۔' } },
      { id: '39:26:8', arabic: 'الْآخِرَةِ', transliteration: 'al-ākhirati', pos: ['N'], posLabel: 'N', root: 'أ خ ر', meaning: { en: 'of the Hereafter', ur: 'آخرت کا' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive in construct.', ur: 'مضاف إليه۔' } },
      { id: '39:26:9', arabic: 'أَكْبَرُ', transliteration: 'akbaru', pos: ['ADJ'], posLabel: 'ADJ', root: 'ك ب ر', meaning: { en: 'is greater', ur: 'بڑا ہے' }, grammarRole: 'khabar',
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 9, label: 'مبتدأ + خبر' }
      ],
    },
        grammarExplanations: { en: 'Predicate - comparative.', ur: 'خبر - اسم تفضیل۔' } }
    ]
  },

  27: {
    ayahNumber: 27,
    text: "وَلَقَدْ ضَرَبْنَا لِلنَّاسِ فِي هَٰذَا الْقُرْآنِ مِن كُلِّ مَثَلٍ لَّعَلَّهُمْ يَتَذَكَّرُونَ",
    words: [
      { id: '39:27:1', arabic: 'وَلَقَدْ', transliteration: 'wa-laqad', pos: ['CONJ', 'EMPH', 'PART'], posLabel: 'CONJ+EMPH+PART', root: null, meaning: { en: 'And certainly', ur: 'اور بے شک' }, grammarRole: 'harf_tawkid', grammarExplanations: { en: 'Emphasis particles.', ur: 'حروف توکید۔' } },
      { id: '39:27:2', arabic: 'ضَرَبْنَا', transliteration: 'ḍarabnā', pos: ['V'], posLabel: 'V', root: 'ض ر ب', meaning: { en: 'We have presented', ur: 'ہم نے بیان کیے' }, grammarRole: 'verb', grammarExplanations: { en: 'Perfect verb - 1st plural.', ur: 'فعل ماضی - متکلم جمع۔' } },
      { id: '39:27:3', arabic: 'لِلنَّاسِ', transliteration: 'lin-nāsi', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ن و س', meaning: { en: 'for the people', ur: 'لوگوں کے لیے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + genitive.', ur: 'حرف جر + مجرور۔' } },
      { id: '39:27:4', arabic: 'فِي', transliteration: 'fī', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'in', ur: 'میں' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:27:5', arabic: 'هَٰذَا', transliteration: 'hādhā', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'اس' }, grammarRole: 'majroor', grammarExplanations: { en: 'Demonstrative.', ur: 'اسم اشارہ۔' } },
      { id: '39:27:6', arabic: 'الْقُرْآنِ', transliteration: 'al-qur\'āni', pos: ['N'], posLabel: 'N', root: 'ق ر أ', meaning: { en: 'the Quran', ur: 'قرآن' }, grammarRole: 'badal', grammarExplanations: { en: 'Apposition - genitive.', ur: 'بدل - مجرور۔' } },
      { id: '39:27:7', arabic: 'مِن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'of', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition - partitive.', ur: 'حرف جر تبعیضی۔' } },
      { id: '39:27:8', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'every', ur: 'ہر' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive noun.', ur: 'مجرور۔' } },
      { id: '39:27:9', arabic: 'مَثَلٍ', transliteration: 'mathalin', pos: ['N'], posLabel: 'N', root: 'م ث ل', meaning: { en: 'example', ur: 'مثال' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive in construct.', ur: 'مضاف إليه۔' } },
      { id: '39:27:10', arabic: 'لَّعَلَّهُمْ', transliteration: 'laʿallahum', pos: ['PART', 'PRON'], posLabel: 'PART+PRON', root: null, meaning: { en: 'so that they may', ur: 'تاکہ وہ' }, grammarRole: 'harf_taraji', grammarExplanations: { en: 'Hope particle + pronoun.', ur: 'حرف ترجی + ضمیر۔' } },
      { id: '39:27:11', arabic: 'يَتَذَكَّرُونَ', transliteration: 'yatadhakkarūna', pos: ['V'], posLabel: 'V', root: 'ذ ك ر', meaning: { en: 'take heed', ur: 'نصیحت حاصل کریں' }, grammarRole: 'khabar',
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Form V imperfect - predicate of لَعَلَّ.', ur: 'فعل مضارع باب تفعل - خبر لَعَلَّ۔' } }
    ]
  },

  28: {
    ayahNumber: 28,
    text: "قُرْآنًا عَرَبِيًّا غَيْرَ ذِي عِوَجٍ لَّعَلَّهُمْ يَتَّقُونَ",
    words: [
      { id: '39:28:1', arabic: 'قُرْآنًا', transliteration: 'qur\'ānan', pos: ['N'], posLabel: 'N', root: 'ق ر أ', meaning: { en: 'A Quran', ur: 'قرآن' }, grammarRole: 'haal', grammarExplanations: { en: 'State - accusative indefinite.', ur: 'حال - منصوب نکرہ۔' } },
      { id: '39:28:2', arabic: 'عَرَبِيًّا', transliteration: 'ʿarabiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ر ب', meaning: { en: 'in Arabic', ur: 'عربی' }, grammarRole: 'sifa', grammarExplanations: { en: 'Adjective - accusative.', ur: 'صفت - منصوب۔' } },
      { id: '39:28:3', arabic: 'غَيْرَ', transliteration: 'ghayra', pos: ['N'], posLabel: 'N', root: 'غ ي ر', meaning: { en: 'without', ur: 'بغیر' }, grammarRole: 'sifa', grammarExplanations: { en: 'Second adjective - accusative.', ur: 'صفت ثانی - منصوب۔' } },
      { id: '39:28:4', arabic: 'ذِي', transliteration: 'dhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any', ur: 'کسی' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive - one of the five nouns.', ur: 'مضاف إليه - اسماء خمسہ سے۔' } },
      { id: '39:28:5', arabic: 'عِوَجٍ', transliteration: 'ʿiwajin', pos: ['N'], posLabel: 'N', root: 'ع و ج', meaning: { en: 'crookedness', ur: 'کجی' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive in construct.', ur: 'مضاف إليه۔' } },
      { id: '39:28:6', arabic: 'لَّعَلَّهُمْ', transliteration: 'laʿallahum', pos: ['PART', 'PRON'], posLabel: 'PART+PRON', root: null, meaning: { en: 'so that they may', ur: 'تاکہ وہ' }, grammarRole: 'harf_taraji', grammarExplanations: { en: 'Hope particle + pronoun.', ur: 'حرف ترجی + ضمیر۔' } },
      { id: '39:28:7', arabic: 'يَتَّقُونَ', transliteration: 'yattaqūna', pos: ['V'], posLabel: 'V', root: 'و ق ي', meaning: { en: 'become righteous', ur: 'پرہیزگار ہوں' }, grammarRole: 'khabar',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Form VIII imperfect - predicate of لَعَلَّ.', ur: 'فعل مضارع باب افتعال - خبر لَعَلَّ۔' } }
    ]
  },

  29: {
    ayahNumber: 29,
    text: "ضَرَبَ اللَّهُ مَثَلًا رَّجُلًا فِيهِ شُرَكَاءُ مُتَشَاكِسُونَ وَرَجُلًا سَلَمًا لِّرَجُلٍ",
    words: [
      { id: '39:29:1', arabic: 'ضَرَبَ', transliteration: 'ḍaraba', pos: ['V'], posLabel: 'V', root: 'ض ر ب', meaning: { en: 'presents', ur: 'بیان کرتا ہے' }, grammarRole: 'verb', grammarExplanations: { en: 'Perfect verb - to strike/present a parable.', ur: 'فعل ماضی - مثال بیان کرنا۔' } },
      { id: '39:29:2', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' } },
      { id: '39:29:3', arabic: 'مَثَلًا', transliteration: 'mathalan', pos: ['N'], posLabel: 'N', root: 'م ث ل', meaning: { en: 'an example', ur: 'مثال' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' } },
      { id: '39:29:4', arabic: 'رَّجُلًا', transliteration: 'rajulan', pos: ['N'], posLabel: 'N', root: 'ر ج ل', meaning: { en: 'a man', ur: 'ایک آدمی' }, grammarRole: 'badal', grammarExplanations: { en: 'Apposition explaining the parable.', ur: 'بدل مثال کی وضاحت۔' } },
      { id: '39:29:5', arabic: 'فِيهِ', transliteration: 'fīhi', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'in him', ur: 'اس میں' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:29:6', arabic: 'شُرَكَاءُ', transliteration: 'shurakā\'u', pos: ['N'], posLabel: 'N', root: 'ش ر ك', meaning: { en: 'partners', ur: 'شریک' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject - nominative.', ur: 'مبتدأ - مرفوع۔' } },
      { id: '39:29:7', arabic: 'مُتَشَاكِسُونَ', transliteration: 'mutashākisūna', pos: ['ADJ'], posLabel: 'ADJ', root: 'ش ك س', meaning: { en: 'quarreling', ur: 'جھگڑالو' }, grammarRole: 'sifa', grammarExplanations: { en: 'Adjective - Form VI active participle.', ur: 'صفت - اسم فاعل باب تفاعل۔' } },
      { id: '39:29:8', arabic: 'وَرَجُلًا', transliteration: 'wa-rajulan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ر ج ل', meaning: { en: 'and a man', ur: 'اور ایک آدمی' }, grammarRole: 'matoof', grammarExplanations: { en: 'Conjoined noun.', ur: 'معطوف۔' } },
      { id: '39:29:9', arabic: 'سَلَمًا', transliteration: 'salaman', pos: ['N'], posLabel: 'N', root: 'س ل م', meaning: { en: 'exclusively', ur: 'خالص' }, grammarRole: 'haal', grammarExplanations: { en: 'State - accusative.', ur: 'حال - منصوب۔' } },
      { id: '39:29:10', arabic: 'لِّرَجُلٍ', transliteration: 'li-rajulin', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ر ج ل', meaning: { en: 'for one man', ur: 'ایک آدمی کے لیے' }, grammarRole: 'jarr_majroor',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
        grammarExplanations: { en: 'Preposition + genitive.', ur: 'حرف جر + مجرور۔' } }
    ]
  },

  30: {
    ayahNumber: 30,
    text: "إِنَّكَ مَيِّتٌ وَإِنَّهُم مَّيِّتُونَ",
    words: [
      { id: '39:30:1', arabic: 'إِنَّكَ', transliteration: 'innaka', pos: ['EMPH', 'PRON'], posLabel: 'EMPH+PRON', root: null, meaning: { en: 'Indeed, you', ur: 'بے شک تم' }, grammarRole: 'inna_ism', grammarExplanations: { en: 'Emphatic + 2nd person pronoun - addressed to Prophet.', ur: 'حرف توکید + ضمیر مخاطب - نبی سے خطاب۔' } },
      { id: '39:30:2', arabic: 'مَيِّتٌ', transliteration: 'mayyitun', pos: ['N'], posLabel: 'N', root: 'م و ت', meaning: { en: 'will die', ur: 'مرنے والے ہو' }, grammarRole: 'khabar_inna', grammarExplanations: { en: 'Predicate of إِنَّ - nominative.', ur: 'خبر إن - مرفوع۔' } },
      { id: '39:30:3', arabic: 'وَإِنَّهُم', transliteration: 'wa-innahum', pos: ['CONJ', 'EMPH', 'PRON'], posLabel: 'CONJ+EMPH+PRON', root: null, meaning: { en: 'and indeed, they', ur: 'اور بے شک وہ' }, grammarRole: 'inna_ism', grammarExplanations: { en: 'Conjunction + emphatic + pronoun.', ur: 'واو + حرف توکید + ضمیر۔' } },
      { id: '39:30:4', arabic: 'مَّيِّتُونَ', transliteration: 'mayyitūna', pos: ['N'], posLabel: 'N', root: 'م و ت', meaning: { en: 'will die', ur: 'مرنے والے ہیں' }, grammarRole: 'khabar_inna',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'إن + خبر' },
        { from: 3, to: 4, label: 'إن + خبر' }
      ],
    },
        grammarExplanations: { en: 'Predicate - nominative plural.', ur: 'خبر - مرفوع جمع۔' } }
    ]
  },

  31: {
    ayahNumber: 31,
    text: "ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ عِندَ رَبِّكُمْ تَخْتَصِمُونَ",
    words: [
      { id: '39:31:1', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Then', ur: 'پھر' }, grammarRole: 'harf_atf', grammarExplanations: { en: 'Sequential conjunction.', ur: 'حرف عطف۔' } },
      { id: '39:31:2', arabic: 'إِنَّكُمْ', transliteration: 'innakum', pos: ['EMPH', 'PRON'], posLabel: 'EMPH+PRON', root: null, meaning: { en: 'indeed, you', ur: 'بے شک تم' }, grammarRole: 'inna_ism', grammarExplanations: { en: 'Emphatic + 2nd plural pronoun.', ur: 'حرف توکید + ضمیر مخاطب جمع۔' } },
      { id: '39:31:3', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'on the Day', ur: 'دن' }, grammarRole: 'zarf_zaman', grammarExplanations: { en: 'Adverb of time.', ur: 'ظرف زمان۔' } },
      { id: '39:31:4', arabic: 'الْقِيَامَةِ', transliteration: 'al-qiyāmati', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'of Resurrection', ur: 'قیامت' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:31:5', arabic: 'عِندَ', transliteration: 'ʿinda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'کے سامنے' }, grammarRole: 'zarf_makan', grammarExplanations: { en: 'Adverb of place.', ur: 'ظرف مکان۔' } },
      { id: '39:31:6', arabic: 'رَبِّكُمْ', transliteration: 'rabbikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'اپنے رب' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مضاف إليه + ضمیر۔' } },
      { id: '39:31:7', arabic: 'تَخْتَصِمُونَ', transliteration: 'takhtaṣimūna', pos: ['V'], posLabel: 'V', root: 'خ ص م', meaning: { en: 'will dispute', ur: 'جھگڑا کرو گے' }, grammarRole: 'khabar_inna',
    structure: {
      relationships: [
        { from: 2, to: 7, label: 'إن + خبر' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Form VIII imperfect - predicate of إِنَّ.', ur: 'فعل مضارع باب افتعال - خبر إِنَّ۔' } }
    ]
  },

  32: {
    ayahNumber: 32,
    text: "فَمَنْ أَظْلَمُ مِمَّن كَذَبَ عَلَى اللَّهِ وَكَذَّبَ بِالصِّدْقِ إِذْ جَاءَهُ",
    words: [
      { id: '39:32:1', arabic: 'فَمَنْ', transliteration: 'fa-man', pos: ['CONJ', 'INTERROG'], posLabel: 'CONJ+INTERROG', root: null, meaning: { en: 'Then who', ur: 'تو کون' }, grammarRole: 'istifham', grammarExplanations: { en: 'Rhetorical question.', ur: 'استفہام انکاری۔' } },
      { id: '39:32:2', arabic: 'أَظْلَمُ', transliteration: 'aẓlamu', pos: ['ADJ'], posLabel: 'ADJ', root: 'ظ ل م', meaning: { en: 'more unjust', ur: 'بڑا ظالم' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate - comparative.', ur: 'خبر - اسم تفضیل۔' } },
      { id: '39:32:3', arabic: 'مِمَّن', transliteration: 'mimman', pos: ['PREP', 'REL'], posLabel: 'PREP+REL', root: null, meaning: { en: 'than one who', ur: 'اس سے جس نے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + relative.', ur: 'حرف جر + موصول۔' } },
      { id: '39:32:4', arabic: 'كَذَبَ', transliteration: 'kadhaba', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'lied', ur: 'جھوٹ بولا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause verb.', ur: 'صلہ۔' } },
      { id: '39:32:5', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'about', ur: 'پر' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:32:6', arabic: 'اللَّهِ', transliteration: 'Allāhi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:32:7', arabic: 'وَكَذَّبَ', transliteration: 'wa-kadhdhaba', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك ذ ب', meaning: { en: 'and denied', ur: 'اور جھٹلایا' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + Form II perfect.', ur: 'واو + فعل ماضی باب تفعیل۔' } },
      { id: '39:32:8', arabic: 'بِالصِّدْقِ', transliteration: 'biṣ-ṣidqi', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ص د ق', meaning: { en: 'the truth', ur: 'سچ کو' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + genitive.', ur: 'حرف جر + مجرور۔' } },
      { id: '39:32:9', arabic: 'إِذْ', transliteration: 'idh', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'when', ur: 'جب' }, grammarRole: 'zarf_zaman', grammarExplanations: { en: 'Temporal adverb.', ur: 'ظرف زمان۔' } },
      { id: '39:32:10', arabic: 'جَاءَهُ', transliteration: 'jā\'ahu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'it came to him', ur: 'آیا اس کے پاس' }, grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
        grammarExplanations: { en: 'Perfect verb + pronoun.', ur: 'فعل ماضی + ضمیر۔' } }
    ]
  },

  33: {
    ayahNumber: 33,
    text: "وَالَّذِي جَاءَ بِالصِّدْقِ وَصَدَّقَ بِهِ ۙ أُولَٰئِكَ هُمُ الْمُتَّقُونَ",
    words: [
      { id: '39:33:1', arabic: 'وَالَّذِي', transliteration: 'walladhī', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'And the one who', ur: 'اور جو' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Conjunction + relative pronoun as subject.', ur: 'واو + اسم موصول بطور مبتدأ۔' } },
      { id: '39:33:2', arabic: 'جَاءَ', transliteration: 'jā\'a', pos: ['V'], posLabel: 'V', root: 'ج ي أ', meaning: { en: 'came', ur: 'لایا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause verb.', ur: 'صلہ۔' } },
      { id: '39:33:3', arabic: 'بِالصِّدْقِ', transliteration: 'biṣ-ṣidqi', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ص د ق', meaning: { en: 'with the truth', ur: 'سچ لے کر' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + genitive.', ur: 'حرف جر + مجرور۔' } },
      { id: '39:33:4', arabic: 'وَصَدَّقَ', transliteration: 'wa-ṣaddaqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ص د ق', meaning: { en: 'and confirmed', ur: 'اور تصدیق کی' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + Form II perfect.', ur: 'واو + فعل ماضی باب تفعیل۔' } },
      { id: '39:33:5', arabic: 'بِهِ', transliteration: 'bihi', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'in it', ur: 'اس کی' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:33:6', arabic: 'أُولَٰئِكَ', transliteration: 'ulā\'ika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'those', ur: 'یہی لوگ' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Demonstrative pronoun - subject.', ur: 'اسم اشارہ - مبتدأ۔' } },
      { id: '39:33:7', arabic: 'هُمُ', transliteration: 'humu', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they are', ur: 'وہی' }, grammarRole: 'damir_fasl', grammarExplanations: { en: 'Pronoun of separation.', ur: 'ضمیر فصل۔' } },
      { id: '39:33:8', arabic: 'الْمُتَّقُونَ', transliteration: 'al-muttaqūna', pos: ['N'], posLabel: 'N', root: 'و ق ي', meaning: { en: 'the righteous', ur: 'پرہیزگار' }, grammarRole: 'khabar',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 6, to: 8, label: 'مبتدأ + خبر' }
      ],
    },
        grammarExplanations: { en: 'Predicate - Form VIII active participle.', ur: 'خبر - اسم فاعل باب افتعال۔' } }
    ]
  },

  34: {
    ayahNumber: 34,
    text: "لَهُم مَّا يَشَاءُونَ عِندَ رَبِّهِمْ ۚ ذَٰلِكَ جَزَاءُ الْمُحْسِنِينَ",
    words: [
      { id: '39:34:1', arabic: 'لَهُم', transliteration: 'lahum', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'For them', ur: 'ان کے لیے' }, grammarRole: 'khabar_muqaddam', grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' } },
      { id: '39:34:2', arabic: 'مَّا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whatever', ur: 'جو' }, grammarRole: 'mubtada_muakhkhar', grammarExplanations: { en: 'Delayed subject.', ur: 'مبتدأ مؤخر۔' } },
      { id: '39:34:3', arabic: 'يَشَاءُونَ', transliteration: 'yashā\'ūna', pos: ['V'], posLabel: 'V', root: 'ش ي أ', meaning: { en: 'they wish', ur: 'چاہیں' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause verb.', ur: 'صلہ۔' } },
      { id: '39:34:4', arabic: 'عِندَ', transliteration: 'ʿinda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'پاس' }, grammarRole: 'zarf_makan', grammarExplanations: { en: 'Adverb of place.', ur: 'ظرف مکان۔' } },
      { id: '39:34:5', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'اپنے رب کے' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مضاف إليه + ضمیر۔' } },
      { id: '39:34:6', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'یہ' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Demonstrative - subject.', ur: 'اسم اشارہ - مبتدأ۔' } },
      { id: '39:34:7', arabic: 'جَزَاءُ', transliteration: 'jazā\'u', pos: ['N'], posLabel: 'N', root: 'ج ز ي', meaning: { en: 'the reward', ur: 'بدلہ' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate - nominative.', ur: 'خبر - مرفوع۔' } },
      { id: '39:34:8', arabic: 'الْمُحْسِنِينَ', transliteration: 'al-muḥsinīna', pos: ['N'], posLabel: 'N', root: 'ح س ن', meaning: { en: 'of the doers of good', ur: 'نیکوکاروں کا' }, grammarRole: 'mudaf_ilayh',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Genitive - Form IV active participle.', ur: 'مضاف إليه - اسم فاعل باب إفعال۔' } }
    ]
  },

  35: {
    ayahNumber: 35,
    text: "لِيُكَفِّرَ اللَّهُ عَنْهُمْ أَسْوَأَ الَّذِي عَمِلُوا وَيَجْزِيَهُمْ أَجْرَهُم بِأَحْسَنِ الَّذِي كَانُوا يَعْمَلُونَ",
    words: [
      { id: '39:35:1', arabic: 'لِيُكَفِّرَ', transliteration: 'li-yukaffira', pos: ['PREP', 'V'], posLabel: 'PREP+V', root: 'ك ف ر', meaning: { en: 'That He may remove', ur: 'تاکہ دور کرے' }, grammarRole: 'verb', grammarExplanations: { en: 'Purpose لِ + Form II subjunctive.', ur: 'لام تعلیل + فعل مضارع منصوب باب تفعیل۔' } },
      { id: '39:35:2', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' } },
      { id: '39:35:3', arabic: 'عَنْهُمْ', transliteration: 'ʿanhum', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'from them', ur: 'ان سے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:35:4', arabic: 'أَسْوَأَ', transliteration: 'aswa\'a', pos: ['N'], posLabel: 'N', root: 'س و أ', meaning: { en: 'the worst', ur: 'بدترین' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object - superlative.', ur: 'مفعول بہ - اسم تفضیل۔' } },
      { id: '39:35:5', arabic: 'الَّذِي', transliteration: 'alladhī', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'of what', ur: 'جو' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Relative pronoun.', ur: 'اسم موصول۔' } },
      { id: '39:35:6', arabic: 'عَمِلُوا', transliteration: 'ʿamilū', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'they did', ur: 'انہوں نے کیا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause verb.', ur: 'صلہ۔' } },
      { id: '39:35:7', arabic: 'وَيَجْزِيَهُمْ', transliteration: 'wa-yajziyahum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ج ز ي', meaning: { en: 'and reward them', ur: 'اور جزا دے' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + subjunctive + pronoun.', ur: 'واو + فعل مضارع منصوب + ضمیر۔' } },
      { id: '39:35:8', arabic: 'أَجْرَهُم', transliteration: 'ajrahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ج ر', meaning: { en: 'their reward', ur: 'ان کا اجر' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object + pronoun.', ur: 'مفعول بہ + ضمیر۔' } },
      { id: '39:35:9', arabic: 'بِأَحْسَنِ', transliteration: 'bi-aḥsani', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ح س ن', meaning: { en: 'for the best', ur: 'بہترین کے مطابق' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + superlative.', ur: 'حرف جر + اسم تفضیل۔' } },
      { id: '39:35:10', arabic: 'الَّذِي', transliteration: 'alladhī', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'of what', ur: 'جو' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Relative pronoun.', ur: 'اسم موصول۔' } },
      { id: '39:35:11', arabic: 'كَانُوا', transliteration: 'kānū', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ' }, grammarRole: 'sila', grammarExplanations: { en: 'Auxiliary perfect verb.', ur: 'فعل ناقص۔' } },
      { id: '39:35:12', arabic: 'يَعْمَلُونَ', transliteration: 'yaʿmalūna', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'do', ur: 'کرتے تھے' }, grammarRole: 'khabar_kana',
    structure: {
      relationships: [
        { from: 1, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'موصول + صلة' }
      ],
    },
        grammarExplanations: { en: 'Predicate of كَانُوا - imperfect.', ur: 'خبر کان - فعل مضارع۔' } }
    ]
  },

  36: {
    ayahNumber: 36,
    text: "أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ",
    words: [
      { id: '39:36:1', arabic: 'أَلَيْسَ', transliteration: 'a-laysa', pos: ['INTERROG', 'V'], posLabel: 'INTERROG+V', root: 'ل ي س', meaning: { en: 'Is not', ur: 'کیا نہیں ہے' }, grammarRole: 'istifham', grammarExplanations: { en: 'Rhetorical question + negative verb.', ur: 'استفہام تقریری + فعل نفی۔' } },
      { id: '39:36:2', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'ism_laysa', grammarExplanations: { en: 'Subject of لَيْسَ - nominative.', ur: 'اسم لَيْسَ - مرفوع۔' } },
      { id: '39:36:3', arabic: 'بِكَافٍ', transliteration: 'bi-kāfin', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ك ف ي', meaning: { en: 'sufficient', ur: 'کافی' }, grammarRole: 'khabar_laysa', grammarExplanations: { en: 'Predicate of لَيْسَ with emphatic بِ.', ur: 'خبر لَيْسَ + باء زائدہ۔' } },
      { id: '39:36:4', arabic: 'عَبْدَهُ', transliteration: 'ʿabdahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ب د', meaning: { en: 'His servant', ur: 'اپنے بندے کے لیے' }, grammarRole: 'mafool_bihi',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + مفعول به' }
      ],
    },
        grammarExplanations: { en: 'Direct object + pronoun.', ur: 'مفعول بہ + ضمیر۔' } }
    ]
  },

  37: {
    ayahNumber: 37,
    text: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِنْ هَادٍ",
    words: [
      { id: '39:37:1', arabic: 'وَمَن', transliteration: 'wa-man', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'And whoever', ur: 'اور جسے' }, grammarRole: 'shart', grammarExplanations: { en: 'Conjunction + conditional relative.', ur: 'واو + اسم شرط۔' } },
      { id: '39:37:2', arabic: 'يُضْلِلِ', transliteration: 'yuḍlili', pos: ['V'], posLabel: 'V', root: 'ض ل ل', meaning: { en: 'allows to stray', ur: 'گمراہ کرے' }, grammarRole: 'verb', grammarExplanations: { en: 'Form IV jussive - causes misguidance.', ur: 'فعل مضارع مجزوم باب إفعال۔' } },
      { id: '39:37:3', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:37:4', arabic: 'فَمَا', transliteration: 'fa-mā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'then not', ur: 'تو نہیں' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Result + negation.', ur: 'جواب شرط + نفی۔' } },
      { id: '39:37:5', arabic: 'لَهُ', transliteration: 'lahu', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'for him', ur: 'اس کے لیے' }, grammarRole: 'khabar_muqaddam', grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' } },
      { id: '39:37:6', arabic: 'مِنْ', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'any', ur: 'کوئی' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Extra preposition for emphasis.', ur: 'حرف جر زائد برائے تاکید۔' } },
      { id: '39:37:7', arabic: 'هَادٍ', transliteration: 'hādin', pos: ['N'], posLabel: 'N', root: 'ه د ي', meaning: { en: 'guide', ur: 'ہدایت دینے والا' }, grammarRole: 'mubtada_muakhkhar',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
        grammarExplanations: { en: 'Delayed subject - active participle.', ur: 'مبتدأ مؤخر - اسم فاعل۔' } }
    ]
  },

  38: {
    ayahNumber: 38,
    text: "وَمَن يَهْدِ اللَّهُ فَمَا لَهُ مِن مُّضِلٍّ ۗ أَلَيْسَ اللَّهُ بِعَزِيزٍ ذِي انتِقَامٍ",
    words: [
      { id: '39:38:1', arabic: 'وَمَن', transliteration: 'wa-man', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'And whoever', ur: 'اور جسے' }, grammarRole: 'shart', grammarExplanations: { en: 'Conditional relative.', ur: 'اسم شرط۔' } },
      { id: '39:38:2', arabic: 'يَهْدِ', transliteration: 'yahdi', pos: ['V'], posLabel: 'V', root: 'ه د ي', meaning: { en: 'guides', ur: 'ہدایت دے' }, grammarRole: 'verb', grammarExplanations: { en: 'Jussive verb.', ur: 'فعل مضارع مجزوم۔' } },
      { id: '39:38:3', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:38:4', arabic: 'فَمَا', transliteration: 'fa-mā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'then not', ur: 'تو نہیں' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Result + negation.', ur: 'جواب شرط + نفی۔' } },
      { id: '39:38:5', arabic: 'لَهُ', transliteration: 'lahu', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'for him', ur: 'اس کے لیے' }, grammarRole: 'khabar_muqaddam', grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' } },
      { id: '39:38:6', arabic: 'مِن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'any', ur: 'کوئی' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Extra preposition.', ur: 'حرف جر زائد۔' } },
      { id: '39:38:7', arabic: 'مُّضِلٍّ', transliteration: 'muḍillin', pos: ['N'], posLabel: 'N', root: 'ض ل ل', meaning: { en: 'misleader', ur: 'گمراہ کرنے والا' }, grammarRole: 'mubtada_muakhkhar', grammarExplanations: { en: 'Delayed subject - Form IV active participle.', ur: 'مبتدأ مؤخر - اسم فاعل باب إفعال۔' } },
      { id: '39:38:8', arabic: 'أَلَيْسَ', transliteration: 'a-laysa', pos: ['INTERROG', 'V'], posLabel: 'INTERROG+V', root: 'ل ي س', meaning: { en: 'Is not', ur: 'کیا نہیں' }, grammarRole: 'istifham', grammarExplanations: { en: 'Rhetorical question.', ur: 'استفہام تقریری۔' } },
      { id: '39:38:9', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'ism_laysa', grammarExplanations: { en: 'Subject of لَيْسَ.', ur: 'اسم لَيْسَ۔' } },
      { id: '39:38:10', arabic: 'بِعَزِيزٍ', transliteration: 'bi-ʿazīzin', pos: ['PREP', 'ADJ'], posLabel: 'PREP+ADJ', root: 'ع ز ز', meaning: { en: 'Exalted in Might', ur: 'غالب' }, grammarRole: 'khabar_laysa', grammarExplanations: { en: 'Predicate with emphatic بِ.', ur: 'خبر لَيْسَ + باء زائدہ۔' } },
      { id: '39:38:11', arabic: 'ذِي', transliteration: 'dhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Owner of', ur: 'والا' }, grammarRole: 'sifa', grammarExplanations: { en: 'Adjective - one of five nouns.', ur: 'صفت - اسماء خمسہ۔' } },
      { id: '39:38:12', arabic: 'انتِقَامٍ', transliteration: 'intiqāmin', pos: ['N'], posLabel: 'N', root: 'ن ق م', meaning: { en: 'retribution', ur: 'بدلہ' }, grammarRole: 'mudaf_ilayh',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Genitive - Form VIII verbal noun.', ur: 'مضاف إليه - مصدر باب افتعال۔' } }
    ]
  },

  39: {
    ayahNumber: 39,
    text: "قُلْ يَا قَوْمِ اعْمَلُوا عَلَىٰ مَكَانَتِكُمْ إِنِّي عَامِلٌ ۖ فَسَوْفَ تَعْلَمُونَ",
    words: [
      { id: '39:39:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Imperative.', ur: 'فعل امر۔' } },
      { id: '39:39:2', arabic: 'يَا', transliteration: 'yā', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'O', ur: 'اے' }, grammarRole: 'harf_nida', grammarExplanations: { en: 'Vocative particle.', ur: 'حرف ندا۔' } },
      { id: '39:39:3', arabic: 'قَوْمِ', transliteration: 'qawmi', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'my people', ur: 'میری قوم' }, grammarRole: 'munada', grammarExplanations: { en: 'Vocative - construct state.', ur: 'منادی - مضاف۔' } },
      { id: '39:39:4', arabic: 'اعْمَلُوا', transliteration: 'iʿmalū', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'work/act', ur: 'عمل کرو' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Imperative - 2nd plural.', ur: 'فعل امر - مخاطب جمع۔' } },
      { id: '39:39:5', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'in', ur: 'پر' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:39:6', arabic: 'مَكَانَتِكُمْ', transliteration: 'makānatikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'م ك ن', meaning: { en: 'your position', ur: 'اپنی جگہ' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' } },
      { id: '39:39:7', arabic: 'إِنِّي', transliteration: 'innī', pos: ['EMPH', 'PRON'], posLabel: 'EMPH+PRON', root: null, meaning: { en: 'indeed, I', ur: 'بے شک میں' }, grammarRole: 'inna_ism', grammarExplanations: { en: 'Emphatic + 1st person pronoun.', ur: 'إن + ضمیر متکلم۔' } },
      { id: '39:39:8', arabic: 'عَامِلٌ', transliteration: 'ʿāmilun', pos: ['N'], posLabel: 'N', root: 'ع م ل', meaning: { en: 'working/acting', ur: 'عمل کرنے والا ہوں' }, grammarRole: 'khabar_inna', grammarExplanations: { en: 'Predicate - active participle.', ur: 'خبر إن - اسم فاعل۔' } },
      { id: '39:39:9', arabic: 'فَسَوْفَ', transliteration: 'fa-sawfa', pos: ['CONJ', 'PART'], posLabel: 'CONJ+PART', root: null, meaning: { en: 'so soon', ur: 'تو عنقریب' }, grammarRole: 'istiqbal', grammarExplanations: { en: 'Result + future particle.', ur: 'فا + حرف استقبال۔' } },
      { id: '39:39:10', arabic: 'تَعْلَمُونَ', transliteration: 'taʿlamūna', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'you will know', ur: 'تم جان لو گے' }, grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نداء' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'إن + خبر' }
      ],
    },
        grammarExplanations: { en: 'Imperfect verb - threat.', ur: 'فعل مضارع - دھمکی۔' } }
    ]
  },

  40: {
    ayahNumber: 40,
    text: "مَن يَأْتِيهِ عَذَابٌ يُخْزِيهِ وَيَحِلُّ عَلَيْهِ عَذَابٌ مُّقِيمٌ",
    words: [
      { id: '39:40:1', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جسے' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Relative pronoun as object of تَعْلَمُونَ.', ur: 'اسم موصول بطور مفعول۔' } },
      { id: '39:40:2', arabic: 'يَأْتِيهِ', transliteration: 'ya\'tīhi', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'comes to him', ur: 'آئے گا اسے' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause verb.', ur: 'صلہ۔' } },
      { id: '39:40:3', arabic: 'عَذَابٌ', transliteration: 'ʿadhābun', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'a punishment', ur: 'عذاب' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' } },
      { id: '39:40:4', arabic: 'يُخْزِيهِ', transliteration: 'yukhzīhi', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'خ ز ي', meaning: { en: 'disgraces him', ur: 'رسوا کرے' }, grammarRole: 'sifa', grammarExplanations: { en: 'Adjective clause for عَذَابٌ.', ur: 'جملہ صفت عَذَابٌ کا۔' } },
      { id: '39:40:5', arabic: 'وَيَحِلُّ', transliteration: 'wa-yaḥillu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ح ل ل', meaning: { en: 'and descends', ur: 'اور اترتا ہے' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + imperfect.', ur: 'واو + فعل مضارع۔' } },
      { id: '39:40:6', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'upon him', ur: 'اس پر' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:40:7', arabic: 'عَذَابٌ', transliteration: 'ʿadhābun', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'a punishment', ur: 'عذاب' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:40:8', arabic: 'مُّقِيمٌ', transliteration: 'muqīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق و م', meaning: { en: 'lasting', ur: 'مستقل' }, grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
        grammarExplanations: { en: 'Adjective - Form IV active participle.', ur: 'صفت - اسم فاعل باب إفعال۔' } }
    ]
  },

  41: {
    ayahNumber: 41,
    text: "إِنَّا أَنزَلْنَا عَلَيْكَ الْكِتَابَ لِلنَّاسِ بِالْحَقِّ",
    words: [
      { id: '39:41:1', arabic: 'إِنَّا', transliteration: 'innā', pos: ['EMPH', 'PRON'], posLabel: 'EMPH+PRON', root: null, meaning: { en: 'Indeed, We', ur: 'بے شک ہم نے' }, grammarRole: 'inna_ism', grammarExplanations: { en: 'Emphatic + pronoun.', ur: 'إن + ضمیر۔' } },
      { id: '39:41:2', arabic: 'أَنزَلْنَا', transliteration: 'anzalnā', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'sent down', ur: 'اتارا' }, grammarRole: 'khabar_inna', grammarExplanations: { en: 'Predicate - Form IV perfect.', ur: 'خبر - فعل ماضی باب إفعال۔' } },
      { id: '39:41:3', arabic: 'عَلَيْكَ', transliteration: 'ʿalayka', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'upon you', ur: 'تم پر' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:41:4', arabic: 'الْكِتَابَ', transliteration: 'al-kitāba', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Book', ur: 'کتاب' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:41:5', arabic: 'لِلنَّاسِ', transliteration: 'lin-nāsi', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ن و س', meaning: { en: 'for the people', ur: 'لوگوں کے لیے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + genitive.', ur: 'حرف جر + مجرور۔' } },
      { id: '39:41:6', arabic: 'بِالْحَقِّ', transliteration: 'bil-ḥaqqi', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ح ق ق', meaning: { en: 'in truth', ur: 'حق کے ساتھ' }, grammarRole: 'jarr_majroor',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'إن + خبر' },
        { from: 2, to: 4, label: 'فعل + مفعول به' }
      ],
    },
        grammarExplanations: { en: 'Manner.', ur: 'حال۔' } }
    ]
  },

  42: {
    ayahNumber: 42,
    text: "اللَّهُ يَتَوَفَّى الْأَنفُسَ حِينَ مَوْتِهَا وَالَّتِي لَمْ تَمُتْ فِي مَنَامِهَا",
    words: [
      { id: '39:42:1', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject.', ur: 'مبتدأ۔' } },
      { id: '39:42:2', arabic: 'يَتَوَفَّى', transliteration: 'yatawaffā', pos: ['V'], posLabel: 'V', root: 'و ف ي', meaning: { en: 'takes', ur: 'قبض کرتا ہے' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate - Form V imperfect.', ur: 'خبر - فعل مضارع باب تفعل۔' } },
      { id: '39:42:3', arabic: 'الْأَنفُسَ', transliteration: 'al-anfusa', pos: ['N'], posLabel: 'N', root: 'ن ف س', meaning: { en: 'the souls', ur: 'جانوں کو' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object - accusative.', ur: 'مفعول بہ - منصوب۔' } },
      { id: '39:42:4', arabic: 'حِينَ', transliteration: 'ḥīna', pos: ['N'], posLabel: 'N', root: 'ح ي ن', meaning: { en: 'at the time of', ur: 'وقت' }, grammarRole: 'zarf_zaman', grammarExplanations: { en: 'Adverb of time.', ur: 'ظرف زمان۔' } },
      { id: '39:42:5', arabic: 'مَوْتِهَا', transliteration: 'mawtihā', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'م و ت', meaning: { en: 'their death', ur: 'ان کی موت' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مضاف إليه + ضمیر۔' } },
      { id: '39:42:6', arabic: 'وَالَّتِي', transliteration: 'wallatī', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'and the one which', ur: 'اور جو' }, grammarRole: 'matoof', grammarExplanations: { en: 'Conjunction + relative - feminine.', ur: 'واو + اسم موصول مؤنث۔' } },
      { id: '39:42:7', arabic: 'لَمْ', transliteration: 'lam', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'did not', ur: 'نہیں' }, grammarRole: 'harf_nafi', grammarExplanations: { en: 'Negation particle for jussive.', ur: 'حرف نفی جزم۔' } },
      { id: '39:42:8', arabic: 'تَمُتْ', transliteration: 'tamut', pos: ['V'], posLabel: 'V', root: 'م و ت', meaning: { en: 'die', ur: 'مرے' }, grammarRole: 'sila', grammarExplanations: { en: 'Jussive verb - relative clause.', ur: 'فعل مضارع مجزوم - صلہ۔' } },
      { id: '39:42:9', arabic: 'فِي', transliteration: 'fī', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'during', ur: 'میں' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:42:10', arabic: 'مَنَامِهَا', transliteration: 'manāmihā', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن و م', meaning: { en: 'its sleep', ur: 'اس کی نیند' }, grammarRole: 'majroor',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
        grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' } }
    ]
  },

  43: {
    ayahNumber: 43,
    text: "أَمِ اتَّخَذُوا مِن دُونِ اللَّهِ شُفَعَاءَ",
    words: [
      { id: '39:43:1', arabic: 'أَمِ', transliteration: 'ami', pos: ['INTERROG'], posLabel: 'INTERROG', root: null, meaning: { en: 'Or have', ur: 'کیا' }, grammarRole: 'istifham', grammarExplanations: { en: 'Disjunctive interrogative.', ur: 'استفہام منقطع۔' } },
      { id: '39:43:2', arabic: 'اتَّخَذُوا', transliteration: 'ittakhadhū', pos: ['V'], posLabel: 'V', root: 'أ خ ذ', meaning: { en: 'they have taken', ur: 'انہوں نے بنائے' }, grammarRole: 'verb', grammarExplanations: { en: 'Form VIII perfect.', ur: 'فعل ماضی باب افتعال۔' } },
      { id: '39:43:3', arabic: 'مِن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:43:4', arabic: 'دُونِ', transliteration: 'dūni', pos: ['N'], posLabel: 'N', root: 'د و ن', meaning: { en: 'other than', ur: 'سوا' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:43:5', arabic: 'اللَّهِ', transliteration: 'Allāhi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:43:6', arabic: 'شُفَعَاءَ', transliteration: 'shufaʿā\'a', pos: ['N'], posLabel: 'N', root: 'ش ف ع', meaning: { en: 'intercessors', ur: 'سفارشی' }, grammarRole: 'mafool_bihi',
    structure: {
      relationships: [
        { from: 2, to: 6, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Direct object - accusative plural.', ur: 'مفعول بہ - منصوب جمع۔' } }
    ]
  },

  44: {
    ayahNumber: 44,
    text: "قُل لِّلَّهِ الشَّفَاعَةُ جَمِيعًا ۖ لَّهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ",
    words: [
      { id: '39:44:1', arabic: 'قُل', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Imperative.', ur: 'فعل امر۔' } },
      { id: '39:44:2', arabic: 'لِّلَّهِ', transliteration: 'lillāhi', pos: ['PREP', 'PN'], posLabel: 'PREP+PN', root: 'أ ل ه', meaning: { en: 'To Allah belongs', ur: 'اللہ کے لیے ہے' }, grammarRole: 'khabar_muqaddam', grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' } },
      { id: '39:44:3', arabic: 'الشَّفَاعَةُ', transliteration: 'ash-shafāʿatu', pos: ['N'], posLabel: 'N', root: 'ش ف ع', meaning: { en: 'intercession', ur: 'سفارش' }, grammarRole: 'mubtada_muakhkhar', grammarExplanations: { en: 'Delayed subject.', ur: 'مبتدأ مؤخر۔' } },
      { id: '39:44:4', arabic: 'جَمِيعًا', transliteration: 'jamīʿan', pos: ['N'], posLabel: 'N', root: 'ج م ع', meaning: { en: 'entirely', ur: 'پوری' }, grammarRole: 'haal', grammarExplanations: { en: 'State - all intercession.', ur: 'حال۔' } },
      { id: '39:44:5', arabic: 'لَّهُ', transliteration: 'lahu', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'To Him belongs', ur: 'اسی کی ہے' }, grammarRole: 'khabar_muqaddam', grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' } },
      { id: '39:44:6', arabic: 'مُلْكُ', transliteration: 'mulku', pos: ['N'], posLabel: 'N', root: 'م ل ك', meaning: { en: 'the dominion', ur: 'بادشاہی' }, grammarRole: 'mubtada_muakhkhar', grammarExplanations: { en: 'Delayed subject.', ur: 'مبتدأ مؤخر۔' } },
      { id: '39:44:7', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samāwāti', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'of the heavens', ur: 'آسمانوں' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:44:8', arabic: 'وَالْأَرْضِ', transliteration: 'wal-arḍi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین' }, grammarRole: 'matoof',
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Conjoined genitive.', ur: 'معطوف مجرور۔' } }
    ]
  },

  45: {
    ayahNumber: 45,
    text: "وَإِذَا ذُكِرَ اللَّهُ وَحْدَهُ اشْمَأَزَّتْ قُلُوبُ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ",
    words: [
      { id: '39:45:1', arabic: 'وَإِذَا', transliteration: 'wa-idhā', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And when', ur: 'اور جب' }, grammarRole: 'zarf_shart', grammarExplanations: { en: 'Temporal conditional.', ur: 'ظرف شرط۔' } },
      { id: '39:45:2', arabic: 'ذُكِرَ', transliteration: 'dhukira', pos: ['V'], posLabel: 'V', root: 'ذ ك ر', meaning: { en: 'is mentioned', ur: 'ذکر کیا جائے' }, grammarRole: 'verb', grammarExplanations: { en: 'Passive perfect.', ur: 'فعل ماضی مجہول۔' } },
      { id: '39:45:3', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'naib_faa\'il', grammarExplanations: { en: 'Deputy subject.', ur: 'نائب فاعل۔' } },
      { id: '39:45:4', arabic: 'وَحْدَهُ', transliteration: 'waḥdahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'و ح د', meaning: { en: 'alone', ur: 'اکیلا' }, grammarRole: 'haal', grammarExplanations: { en: 'State - alone.', ur: 'حال۔' } },
      { id: '39:45:5', arabic: 'اشْمَأَزَّتْ', transliteration: 'ishma\'azzat', pos: ['V'], posLabel: 'V', root: 'ش م أ ز', meaning: { en: 'shrink with aversion', ur: 'کراہت سے بھر جاتے ہیں' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Answer to condition - Form XII.', ur: 'جواب شرط - باب افعلال۔' } },
      { id: '39:45:6', arabic: 'قُلُوبُ', transliteration: 'qulūbu', pos: ['N'], posLabel: 'N', root: 'ق ل ب', meaning: { en: 'the hearts', ur: 'دل' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:45:7', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'of those who', ur: 'جو' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:45:8', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'نہیں' }, grammarRole: 'harf_nafi', grammarExplanations: { en: 'Negation.', ur: 'حرف نفی۔' } },
      { id: '39:45:9', arabic: 'يُؤْمِنُونَ', transliteration: 'yu\'minūna', pos: ['V'], posLabel: 'V', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لاتے' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause - Form IV.', ur: 'صلہ - باب إفعال۔' } },
      { id: '39:45:10', arabic: 'بِالْآخِرَةِ', transliteration: 'bil-ākhirati', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'أ خ ر', meaning: { en: 'in the Hereafter', ur: 'آخرت پر' }, grammarRole: 'jarr_majroor',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 9, label: 'موصول + صلة' }
      ],
    },
        grammarExplanations: { en: 'Preposition + genitive.', ur: 'حرف جر + مجرور۔' } }
    ]
  },

  46: {
    ayahNumber: 46,
    text: "قُلِ اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ أَنتَ تَحْكُمُ بَيْنَ عِبَادِكَ",
    words: [
      { id: '39:46:1', arabic: 'قُلِ', transliteration: 'quli', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Imperative.', ur: 'فعل امر۔' } },
      { id: '39:46:2', arabic: 'اللَّهُمَّ', transliteration: 'Allāhumma', pos: ['PN', 'PART'], posLabel: 'PN+PART', root: 'أ ل ه', meaning: { en: 'O Allah', ur: 'اے اللہ' }, grammarRole: 'munada', grammarExplanations: { en: 'Vocative - special form with ـمَّ instead of يَا.', ur: 'منادی - خاص صورت ـمَّ بجائے يَا۔' } },
      { id: '39:46:3', arabic: 'فَاطِرَ', transliteration: 'fāṭira', pos: ['N'], posLabel: 'N', root: 'ف ط ر', meaning: { en: 'Creator of', ur: 'بنانے والے' }, grammarRole: 'sifa', grammarExplanations: { en: 'Attribute - active participle, accusative.', ur: 'صفت - اسم فاعل، منصوب۔' } },
      { id: '39:46:4', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samāwāti', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the heavens', ur: 'آسمانوں' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:46:5', arabic: 'وَالْأَرْضِ', transliteration: 'wal-arḍi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین' }, grammarRole: 'matoof', grammarExplanations: { en: 'Conjoined genitive.', ur: 'معطوف۔' } },
      { id: '39:46:6', arabic: 'عَالِمَ', transliteration: 'ʿālima', pos: ['N'], posLabel: 'N', root: 'ع ل م', meaning: { en: 'Knower of', ur: 'جاننے والے' }, grammarRole: 'sifa', grammarExplanations: { en: 'Second attribute.', ur: 'صفت ثانی۔' } },
      { id: '39:46:7', arabic: 'الْغَيْبِ', transliteration: 'al-ghaybi', pos: ['N'], posLabel: 'N', root: 'غ ي ب', meaning: { en: 'the unseen', ur: 'غیب' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:46:8', arabic: 'وَالشَّهَادَةِ', transliteration: 'wash-shahādati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ش ه د', meaning: { en: 'and the witnessed', ur: 'اور حاضر' }, grammarRole: 'matoof', grammarExplanations: { en: 'Conjoined genitive.', ur: 'معطوف۔' } },
      { id: '39:46:9', arabic: 'أَنتَ', transliteration: 'anta', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'You', ur: 'تو' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject pronoun.', ur: 'مبتدأ ضمیر۔' } },
      { id: '39:46:10', arabic: 'تَحْكُمُ', transliteration: 'taḥkumu', pos: ['V'], posLabel: 'V', root: 'ح ك م', meaning: { en: 'will judge', ur: 'فیصلہ کرے گا' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate - imperfect.', ur: 'خبر - فعل مضارع۔' } },
      { id: '39:46:11', arabic: 'بَيْنَ', transliteration: 'bayna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'between', ur: 'درمیان' }, grammarRole: 'zarf_makan', grammarExplanations: { en: 'Adverb of place.', ur: 'ظرف مکان۔' } },
      { id: '39:46:12', arabic: 'عِبَادِكَ', transliteration: 'ʿibādika', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ب د', meaning: { en: 'Your servants', ur: 'اپنے بندوں' }, grammarRole: 'mudaf_ilayh',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مبتدأ + خبر' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مضاف إليه + ضمیر۔' } }
    ]
  },

  47: {
    ayahNumber: 47,
    text: "وَلَوْ أَنَّ لِلَّذِينَ ظَلَمُوا مَا فِي الْأَرْضِ جَمِيعًا وَمِثْلَهُ مَعَهُ لَافْتَدَوْا بِهِ مِن سُوءِ الْعَذَابِ يَوْمَ الْقِيَامَةِ",
    words: [
      { id: '39:47:1', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' }, grammarRole: 'harf_shart', grammarExplanations: { en: 'Conjunction + hypothetical conditional.', ur: 'واو + حرف شرط غیر ممکن۔' } },
      { id: '39:47:2', arabic: 'أَنَّ', transliteration: 'anna', pos: ['EMPH'], posLabel: 'EMPH', root: null, meaning: { en: 'that', ur: 'کہ' }, grammarRole: 'harf_tawkid', grammarExplanations: { en: 'Emphatic particle.', ur: 'حرف توکید۔' } },
      { id: '39:47:3', arabic: 'لِلَّذِينَ', transliteration: 'lilladhīna', pos: ['PREP', 'REL'], posLabel: 'PREP+REL', root: null, meaning: { en: 'for those who', ur: 'ان کے لیے جنہوں نے' }, grammarRole: 'khabar_muqaddam', grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' } },
      { id: '39:47:4', arabic: 'ظَلَمُوا', transliteration: 'ẓalamū', pos: ['V'], posLabel: 'V', root: 'ظ ل م', meaning: { en: 'wronged', ur: 'ظلم کیا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:47:5', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whatever is', ur: 'جو کچھ' }, grammarRole: 'ism_anna', grammarExplanations: { en: 'Subject of أَنَّ.', ur: 'اسم أَنَّ۔' } },
      { id: '39:47:6', arabic: 'فِي', transliteration: 'fī', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'in', ur: 'میں' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:47:7', arabic: 'الْأَرْضِ', transliteration: 'al-arḍi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:47:8', arabic: 'جَمِيعًا', transliteration: 'jamīʿan', pos: ['N'], posLabel: 'N', root: 'ج م ع', meaning: { en: 'all together', ur: 'سب' }, grammarRole: 'haal', grammarExplanations: { en: 'State.', ur: 'حال۔' } },
      { id: '39:47:9', arabic: 'وَمِثْلَهُ', transliteration: 'wa-mithlahu', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'م ث ل', meaning: { en: 'and the like of it', ur: 'اور اتنا ہی اور' }, grammarRole: 'matoof', grammarExplanations: { en: 'Conjoined.', ur: 'معطوف۔' } },
      { id: '39:47:10', arabic: 'مَعَهُ', transliteration: 'maʿahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: null, meaning: { en: 'with it', ur: 'اس کے ساتھ' }, grammarRole: 'zarf_makan', grammarExplanations: { en: 'Adverb.', ur: 'ظرف۔' } },
      { id: '39:47:11', arabic: 'لَافْتَدَوْا', transliteration: 'la-iftadaw', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ف د ي', meaning: { en: 'they would ransom', ur: 'ضرور فدیہ دیتے' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Answer - emphatic + Form VIII perfect.', ur: 'جواب شرط - لام تاکید + فعل ماضی باب افتعال۔' } },
      { id: '39:47:12', arabic: 'بِهِ', transliteration: 'bihi', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'with it', ur: 'اس سے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:47:13', arabic: 'مِن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:47:14', arabic: 'سُوءِ', transliteration: 'sū\'i', pos: ['N'], posLabel: 'N', root: 'س و أ', meaning: { en: 'the evil', ur: 'برائی' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:47:15', arabic: 'الْعَذَابِ', transliteration: 'al-ʿadhābi', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'of punishment', ur: 'عذاب کی' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:47:16', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'on the Day', ur: 'دن' }, grammarRole: 'zarf_zaman', grammarExplanations: { en: 'Adverb of time.', ur: 'ظرف زمان۔' } },
      { id: '39:47:17', arabic: 'الْقِيَامَةِ', transliteration: 'al-qiyāmati', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'of Resurrection', ur: 'قیامت' }, grammarRole: 'mudaf_ilayh',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } }
    ]
  },

  48: {
    ayahNumber: 48,
    text: "وَبَدَا لَهُم مِّنَ اللَّهِ مَا لَمْ يَكُونُوا يَحْتَسِبُونَ",
    words: [
      { id: '39:48:1', arabic: 'وَبَدَا', transliteration: 'wa-badā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ب د و', meaning: { en: 'And there appeared', ur: 'اور ظاہر ہوا' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + perfect verb.', ur: 'واو + فعل ماضی۔' } },
      { id: '39:48:2', arabic: 'لَهُم', transliteration: 'lahum', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'to them', ur: 'ان کے لیے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:48:3', arabic: 'مِّنَ', transliteration: 'mina', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition of source.', ur: 'حرف جر۔' } },
      { id: '39:48:4', arabic: 'اللَّهِ', transliteration: 'Allāhi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:48:5', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject of بَدَا - relative pronoun.', ur: 'فاعل بَدَا - اسم موصول۔' } },
      { id: '39:48:6', arabic: 'لَمْ', transliteration: 'lam', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' }, grammarRole: 'harf_nafi', grammarExplanations: { en: 'Negation + jussive.', ur: 'حرف نفی + جزم۔' } },
      { id: '39:48:7', arabic: 'يَكُونُوا', transliteration: 'yakūnū', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they were', ur: 'وہ تھے' }, grammarRole: 'sila', grammarExplanations: { en: 'Jussive auxiliary.', ur: 'فعل ناقص مجزوم۔' } },
      { id: '39:48:8', arabic: 'يَحْتَسِبُونَ', transliteration: 'yaḥtasibūna', pos: ['V'], posLabel: 'V', root: 'ح س ب', meaning: { en: 'expecting', ur: 'گمان کرتے' }, grammarRole: 'khabar_kana',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 7, label: 'موصول + صلة' }
      ],
    },
        grammarExplanations: { en: 'Predicate - Form VIII imperfect.', ur: 'خبر کان - فعل مضارع باب افتعال۔' } }
    ]
  },

  49: {
    ayahNumber: 49,
    text: "وَبَدَا لَهُمْ سَيِّئَاتُ مَا كَسَبُوا وَحَاقَ بِهِم مَّا كَانُوا بِهِ يَسْتَهْزِئُونَ",
    words: [
      { id: '39:49:1', arabic: 'وَبَدَا', transliteration: 'wa-badā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ب د و', meaning: { en: 'And there appeared', ur: 'اور ظاہر ہوئیں' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + perfect.', ur: 'واو + فعل ماضی۔' } },
      { id: '39:49:2', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'to them', ur: 'ان کو' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:49:3', arabic: 'سَيِّئَاتُ', transliteration: 'sayyi\'ātu', pos: ['N'], posLabel: 'N', root: 'س و أ', meaning: { en: 'the evil consequences', ur: 'برائیاں' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject - nominative.', ur: 'فاعل - مرفوع۔' } },
      { id: '39:49:4', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'of what', ur: 'جو' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:49:5', arabic: 'كَسَبُوا', transliteration: 'kasabū', pos: ['V'], posLabel: 'V', root: 'ك س ب', meaning: { en: 'they earned', ur: 'انہوں نے کمایا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:49:6', arabic: 'وَحَاقَ', transliteration: 'wa-ḥāqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ح ي ق', meaning: { en: 'and surrounded', ur: 'اور گھیر لیا' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + perfect.', ur: 'واو + فعل ماضی۔' } },
      { id: '39:49:7', arabic: 'بِهِم', transliteration: 'bihim', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'them', ur: 'انہیں' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:49:8', arabic: 'مَّا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject of حَاقَ.', ur: 'فاعل حَاقَ۔' } },
      { id: '39:49:9', arabic: 'كَانُوا', transliteration: 'kānū', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ' }, grammarRole: 'sila', grammarExplanations: { en: 'Auxiliary.', ur: 'فعل ناقص۔' } },
      { id: '39:49:10', arabic: 'بِهِ', transliteration: 'bihi', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'at it', ur: 'اس کا' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:49:11', arabic: 'يَسْتَهْزِئُونَ', transliteration: 'yastahzi\'ūna', pos: ['V'], posLabel: 'V', root: 'ه ز أ', meaning: { en: 'ridiculing', ur: 'مذاق اڑاتے تھے' }, grammarRole: 'khabar_kana',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'موصول + صلة' }
      ],
    },
        grammarExplanations: { en: 'Predicate - Form X imperfect.', ur: 'خبر - فعل مضارع باب استفعال۔' } }
    ]
  },

  50: {
    ayahNumber: 50,
    text: "فَإِذَا مَسَّ الْإِنسَانَ ضُرٌّ دَعَانَا ثُمَّ إِذَا خَوَّلْنَاهُ نِعْمَةً مِّنَّا قَالَ إِنَّمَا أُوتِيتُهُ عَلَىٰ عِلْمٍ",
    words: [
      { id: '39:50:1', arabic: 'فَإِذَا', transliteration: 'fa-idhā', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And when', ur: 'پس جب' }, grammarRole: 'zarf_shart', grammarExplanations: { en: 'Result + temporal conditional.', ur: 'فا + ظرف شرط۔' } },
      { id: '39:50:2', arabic: 'مَسَّ', transliteration: 'massa', pos: ['V'], posLabel: 'V', root: 'م س س', meaning: { en: 'touches', ur: 'چھوئے' }, grammarRole: 'verb', grammarExplanations: { en: 'Perfect verb.', ur: 'فعل ماضی۔' } },
      { id: '39:50:3', arabic: 'الْإِنسَانَ', transliteration: 'al-insāna', pos: ['N'], posLabel: 'N', root: 'أ ن س', meaning: { en: 'man', ur: 'انسان' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:50:4', arabic: 'ضُرٌّ', transliteration: 'ḍurrun', pos: ['N'], posLabel: 'N', root: 'ض ر ر', meaning: { en: 'adversity', ur: 'تکلیف' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:50:5', arabic: 'دَعَانَا', transliteration: 'daʿānā', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'د ع و', meaning: { en: 'he calls upon Us', ur: 'وہ ہمیں پکارتا ہے' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Answer to condition.', ur: 'جواب شرط۔' } },
      { id: '39:50:6', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' }, grammarRole: 'harf_atf', grammarExplanations: { en: 'Sequential conjunction.', ur: 'حرف عطف۔' } },
      { id: '39:50:7', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'when', ur: 'جب' }, grammarRole: 'zarf_shart', grammarExplanations: { en: 'Temporal conditional.', ur: 'ظرف شرط۔' } },
      { id: '39:50:8', arabic: 'خَوَّلْنَاهُ', transliteration: 'khawwalnāhu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'خ و ل', meaning: { en: 'We grant him', ur: 'ہم دیں اسے' }, grammarRole: 'verb', grammarExplanations: { en: 'Form II perfect + pronoun.', ur: 'فعل ماضی باب تفعیل + ضمیر۔' } },
      { id: '39:50:9', arabic: 'نِعْمَةً', transliteration: 'niʿmatan', pos: ['N'], posLabel: 'N', root: 'ن ع م', meaning: { en: 'a blessing', ur: 'نعمت' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:50:10', arabic: 'مِّنَّا', transliteration: 'minnā', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'from Us', ur: 'ہماری طرف سے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:50:11', arabic: 'قَالَ', transliteration: 'qāla', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'he says', ur: 'کہتا ہے' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Answer to second condition.', ur: 'جواب شرط ثانی۔' } },
      { id: '39:50:12', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'only', ur: 'بس' }, grammarRole: 'harf_hasr', grammarExplanations: { en: 'Restriction particle.', ur: 'حرف حصر۔' } },
      { id: '39:50:13', arabic: 'أُوتِيتُهُ', transliteration: 'ūtītuhu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'I was given it', ur: 'مجھے دیا گیا' }, grammarRole: 'verb', grammarExplanations: { en: 'Passive perfect + pronoun.', ur: 'فعل ماضی مجہول + ضمیر۔' } },
      { id: '39:50:14', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'because of', ur: 'کی بنا پر' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:50:15', arabic: 'عِلْمٍ', transliteration: 'ʿilmin', pos: ['N'], posLabel: 'N', root: 'ع ل م', meaning: { en: 'knowledge', ur: 'علم' }, grammarRole: 'majroor',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ],
    },
        grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } }
    ]
  },

  51: {
    ayahNumber: 51,
    text: "فَأَصَابَهُمْ سَيِّئَاتُ مَا كَسَبُوا ۚ وَالَّذِينَ ظَلَمُوا مِنْ هَٰؤُلَاءِ سَيُصِيبُهُمْ سَيِّئَاتُ مَا كَسَبُوا",
    words: [
      { id: '39:51:1', arabic: 'فَأَصَابَهُمْ', transliteration: 'fa-aṣābahum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ص و ب', meaning: { en: 'So struck them', ur: 'تو پہنچیں انہیں' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + Form IV perfect + pronoun.', ur: 'فا + فعل ماضی باب إفعال + ضمیر۔' } },
      { id: '39:51:2', arabic: 'سَيِّئَاتُ', transliteration: 'sayyi\'ātu', pos: ['N'], posLabel: 'N', root: 'س و أ', meaning: { en: 'the evil consequences', ur: 'برائیاں' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:51:3', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'of what', ur: 'جو' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:51:4', arabic: 'كَسَبُوا', transliteration: 'kasabū', pos: ['V'], posLabel: 'V', root: 'ك س ب', meaning: { en: 'they earned', ur: 'کمایا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:51:5', arabic: 'وَالَّذِينَ', transliteration: 'walladhīna', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'And those who', ur: 'اور جنہوں نے' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject.', ur: 'مبتدأ۔' } },
      { id: '39:51:6', arabic: 'ظَلَمُوا', transliteration: 'ẓalamū', pos: ['V'], posLabel: 'V', root: 'ظ ل م', meaning: { en: 'wronged', ur: 'ظلم کیا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:51:7', arabic: 'مِنْ', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'among', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition - partitive.', ur: 'حرف جر تبعیضی۔' } },
      { id: '39:51:8', arabic: 'هَٰؤُلَاءِ', transliteration: 'hā\'ulā\'i', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'these (people)', ur: 'ان لوگوں' }, grammarRole: 'majroor', grammarExplanations: { en: 'Demonstrative pronoun.', ur: 'اسم اشارہ۔' } },
      { id: '39:51:9', arabic: 'سَيُصِيبُهُمْ', transliteration: 'sa-yuṣībuhum', pos: ['PART', 'V', 'PRON'], posLabel: 'PART+V+PRON', root: 'ص و ب', meaning: { en: 'will strike them', ur: 'عنقریب پہنچے گی انہیں' }, grammarRole: 'khabar', grammarExplanations: { en: 'Future + Form IV imperfect + pronoun.', ur: 'سین استقبال + فعل مضارع باب إفعال + ضمیر۔' } },
      { id: '39:51:10', arabic: 'سَيِّئَاتُ', transliteration: 'sayyi\'ātu', pos: ['N'], posLabel: 'N', root: 'س و أ', meaning: { en: 'the evil consequences', ur: 'برائیاں' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:51:11', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'of what', ur: 'جو' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:51:12', arabic: 'كَسَبُوا', transliteration: 'kasabū', pos: ['V'], posLabel: 'V', root: 'ك س ب', meaning: { en: 'they earned', ur: 'کمایا' }, grammarRole: 'sila',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 9, label: 'مبتدأ + خبر' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
        grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } }
    ]
  },

  52: {
    ayahNumber: 52,
    text: "أَوَلَمْ يَعْلَمُوا أَنَّ اللَّهَ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ",
    words: [
      { id: '39:52:1', arabic: 'أَوَلَمْ', transliteration: 'a-wa-lam', pos: ['INTERROG', 'CONJ', 'NEG'], posLabel: 'INTERROG+CONJ+NEG', root: null, meaning: { en: 'Do they not', ur: 'کیا نہیں' }, grammarRole: 'istifham', grammarExplanations: { en: 'Rhetorical question.', ur: 'استفہام تقریری۔' } },
      { id: '39:52:2', arabic: 'يَعْلَمُوا', transliteration: 'yaʿlamū', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'know', ur: 'جانتے' }, grammarRole: 'verb', grammarExplanations: { en: 'Jussive verb.', ur: 'فعل مضارع مجزوم۔' } },
      { id: '39:52:3', arabic: 'أَنَّ', transliteration: 'anna', pos: ['EMPH'], posLabel: 'EMPH', root: null, meaning: { en: 'that', ur: 'کہ' }, grammarRole: 'harf_tawkid', grammarExplanations: { en: 'Emphatic.', ur: 'حرف توکید۔' } },
      { id: '39:52:4', arabic: 'اللَّهَ', transliteration: 'Allāha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'ism_inna', grammarExplanations: { en: 'Subject of أَنَّ.', ur: 'اسم أَنَّ۔' } },
      { id: '39:52:5', arabic: 'يَبْسُطُ', transliteration: 'yabsuṭu', pos: ['V'], posLabel: 'V', root: 'ب س ط', meaning: { en: 'extends', ur: 'کشادہ کرتا ہے' }, grammarRole: 'khabar_inna', grammarExplanations: { en: 'Predicate of أَنَّ.', ur: 'خبر أَنَّ۔' } },
      { id: '39:52:6', arabic: 'الرِّزْقَ', transliteration: 'ar-rizqa', pos: ['N'], posLabel: 'N', root: 'ر ز ق', meaning: { en: 'provision', ur: 'رزق' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:52:7', arabic: 'لِمَن', transliteration: 'li-man', pos: ['PREP', 'REL'], posLabel: 'PREP+REL', root: null, meaning: { en: 'for whom', ur: 'جس کے لیے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + relative.', ur: 'حرف جر + موصول۔' } },
      { id: '39:52:8', arabic: 'يَشَاءُ', transliteration: 'yashā\'u', pos: ['V'], posLabel: 'V', root: 'ش ي أ', meaning: { en: 'He wills', ur: 'چاہے' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:52:9', arabic: 'وَيَقْدِرُ', transliteration: 'wa-yaqdiru', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق د ر', meaning: { en: 'and restricts', ur: 'اور تنگ کرتا ہے' }, grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'إن + اسم' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'موصول + صلة' }
      ],
    },
        grammarExplanations: { en: 'Conjunction + imperfect.', ur: 'واو + فعل مضارع۔' } }
    ]
  },

  53: {
    ayahNumber: 53,
    text: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
    words: [
      { id: '39:53:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Imperative.', ur: 'فعل امر۔' } },
      { id: '39:53:2', arabic: 'يَا', transliteration: 'yā', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'O', ur: 'اے' }, grammarRole: 'harf_nida', grammarExplanations: { en: 'Vocative.', ur: 'حرف ندا۔' } },
      { id: '39:53:3', arabic: 'عِبَادِيَ', transliteration: 'ʿibādiya', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ب د', meaning: { en: 'My servants', ur: 'میرے بندو' }, grammarRole: 'munada', grammarExplanations: { en: 'Vocative.', ur: 'منادی۔' } },
      { id: '39:53:4', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جنہوں نے' }, grammarRole: 'sifa', grammarExplanations: { en: 'Relative pronoun as adjective.', ur: 'اسم موصول بطور صفت۔' } },
      { id: '39:53:5', arabic: 'أَسْرَفُوا', transliteration: 'asrafū', pos: ['V'], posLabel: 'V', root: 'س ر ف', meaning: { en: 'have transgressed', ur: 'حد سے گزرے' }, grammarRole: 'sila', grammarExplanations: { en: 'Form IV perfect - relative clause.', ur: 'فعل ماضی باب إفعال - صلہ۔' } },
      { id: '39:53:6', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'against', ur: 'پر' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:53:7', arabic: 'أَنفُسِهِمْ', transliteration: 'anfusihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ن ف س', meaning: { en: 'themselves', ur: 'اپنے آپ' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' } },
      { id: '39:53:8', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'do not', ur: 'مت' }, grammarRole: 'harf_nahi', grammarExplanations: { en: 'Prohibition.', ur: 'حرف نہی۔' } },
      { id: '39:53:9', arabic: 'تَقْنَطُوا', transliteration: 'taqnaṭū', pos: ['V'], posLabel: 'V', root: 'ق ن ط', meaning: { en: 'despair', ur: 'مایوس ہو' }, grammarRole: 'verb', grammarExplanations: { en: 'Jussive verb - prohibition.', ur: 'فعل مضارع مجزوم - نہی۔' } },
      { id: '39:53:10', arabic: 'مِن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'of', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:53:11', arabic: 'رَّحْمَةِ', transliteration: 'raḥmati', pos: ['N'], posLabel: 'N', root: 'ر ح م', meaning: { en: 'the mercy', ur: 'رحمت' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:53:12', arabic: 'اللَّهِ', transliteration: 'Allāhi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'of Allah', ur: 'اللہ کی' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:53:13', arabic: 'إِنَّ', transliteration: 'inna', pos: ['EMPH'], posLabel: 'EMPH', root: null, meaning: { en: 'Indeed', ur: 'بے شک' }, grammarRole: 'harf_tawkid', grammarExplanations: { en: 'Emphatic.', ur: 'حرف توکید۔' } },
      { id: '39:53:14', arabic: 'اللَّهَ', transliteration: 'Allāha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'ism_inna', grammarExplanations: { en: 'Subject of إن.', ur: 'اسم إن۔' } },
      { id: '39:53:15', arabic: 'يَغْفِرُ', transliteration: 'yaghfiru', pos: ['V'], posLabel: 'V', root: 'غ ف ر', meaning: { en: 'forgives', ur: 'بخش دیتا ہے' }, grammarRole: 'khabar_inna', grammarExplanations: { en: 'Predicate of إن.', ur: 'خبر إن۔' } },
      { id: '39:53:16', arabic: 'الذُّنُوبَ', transliteration: 'adh-dhunūba', pos: ['N'], posLabel: 'N', root: 'ذ ن ب', meaning: { en: 'the sins', ur: 'گناہوں کو' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:53:17', arabic: 'جَمِيعًا', transliteration: 'jamīʿan', pos: ['N'], posLabel: 'N', root: 'ج م ع', meaning: { en: 'all/entirely', ur: 'سب' }, grammarRole: 'haal',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نداء' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'إن + اسم' },
        { from: 15, to: 16, label: 'فعل + مفعول به' }
      ],
    },
        grammarExplanations: { en: 'State - all sins, comprehensive.', ur: 'حال - تمام گناہ، جامع۔' } }
    ]
  },

  54: {
    ayahNumber: 54,
    text: "وَأَنِيبُوا إِلَىٰ رَبِّكُمْ وَأَسْلِمُوا لَهُ مِن قَبْلِ أَن يَأْتِيَكُمُ الْعَذَابُ ثُمَّ لَا تُنصَرُونَ",
    words: [
      { id: '39:54:1', arabic: 'وَأَنِيبُوا', transliteration: 'wa-anībū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ن و ب', meaning: { en: 'And return', ur: 'اور رجوع کرو' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Conjunction + Form IV imperative.', ur: 'واو + فعل امر باب إفعال۔' } },
      { id: '39:54:2', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'to', ur: 'کی طرف' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:54:3', arabic: 'رَبِّكُمْ', transliteration: 'rabbikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'اپنے رب' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' } },
      { id: '39:54:4', arabic: 'وَأَسْلِمُوا', transliteration: 'wa-aslimū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'س ل م', meaning: { en: 'and submit', ur: 'اور فرمانبردار ہو جاؤ' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Conjunction + Form IV imperative.', ur: 'واو + فعل امر باب إفعال۔' } },
      { id: '39:54:5', arabic: 'لَهُ', transliteration: 'lahu', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'to Him', ur: 'اس کے لیے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:54:6', arabic: 'مِن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'before', ur: 'سے پہلے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:54:7', arabic: 'قَبْلِ', transliteration: 'qabli', pos: ['N'], posLabel: 'N', root: 'ق ب ل', meaning: { en: 'before', ur: 'پہلے' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:54:8', arabic: 'أَن', transliteration: 'an', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'that', ur: 'کہ' }, grammarRole: 'harf_masdariyya', grammarExplanations: { en: 'Masdariyya.', ur: 'أَنْ مصدریہ۔' } },
      { id: '39:54:9', arabic: 'يَأْتِيَكُمُ', transliteration: 'ya\'tiyakumu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'comes to you', ur: 'آئے تمہارے پاس' }, grammarRole: 'verb', grammarExplanations: { en: 'Subjunctive + pronoun.', ur: 'فعل مضارع منصوب + ضمیر۔' } },
      { id: '39:54:10', arabic: 'الْعَذَابُ', transliteration: 'al-ʿadhābu', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'the punishment', ur: 'عذاب' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:54:11', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' }, grammarRole: 'harf_atf', grammarExplanations: { en: 'Conjunction.', ur: 'حرف عطف۔' } },
      { id: '39:54:12', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' }, grammarRole: 'harf_nafi', grammarExplanations: { en: 'Negation.', ur: 'حرف نفی۔' } },
      { id: '39:54:13', arabic: 'تُنصَرُونَ', transliteration: 'tunṣarūna', pos: ['V'], posLabel: 'V', root: 'ن ص ر', meaning: { en: 'you will be helped', ur: 'مدد کیے جاؤ گے' }, grammarRole: 'verb',
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 9, to: 10, label: 'فعل + فاعل' }] },
        grammarExplanations: { en: 'Passive imperfect.', ur: 'فعل مضارع مجہول۔' } }
    ]
  },

  55: { ayahNumber: 55, text: "وَاتَّبِعُوا أَحْسَنَ مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُم",
    words: [
      { id: '39:55:1', arabic: 'وَاتَّبِعُوا', transliteration: 'wattabiʿū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ت ب ع', meaning: { en: 'And follow', ur: 'اور پیروی کرو' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Form VIII imperative.', ur: 'فعل امر باب افتعال۔' } },
      { id: '39:55:2', arabic: 'أَحْسَنَ', transliteration: 'aḥsana', pos: ['N'], posLabel: 'N', root: 'ح س ن', meaning: { en: 'the best of', ur: 'بہترین' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object - superlative.', ur: 'مفعول بہ - اسم تفضیل۔' } },
      { id: '39:55:3', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:55:4', arabic: 'أُنزِلَ', transliteration: 'unzila', pos: ['V'], posLabel: 'V', root: 'ن ز ل', meaning: { en: 'was revealed', ur: 'نازل کیا گیا' }, grammarRole: 'sila', grammarExplanations: { en: 'Passive - relative clause.', ur: 'فعل ماضی مجہول - صلہ۔' } },
      { id: '39:55:5', arabic: 'إِلَيْكُم', transliteration: 'ilaykum', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'to you', ur: 'تمہاری طرف' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:55:6', arabic: 'مِّن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:55:7', arabic: 'رَّبِّكُم', transliteration: 'rabbikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'تمہارے رب' }, grammarRole: 'majroor',
    structure: { relationships: [{ from: 2, to: 3, label: 'مضاف + مضاف إليه' }, { from: 6, to: 7, label: 'جار + مجرور' }] },
        grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' } }
    ]
  },

  56: { ayahNumber: 56, text: "أَن تَقُولَ نَفْسٌ يَا حَسْرَتَا عَلَىٰ مَا فَرَّطتُ فِي جَنبِ اللَّهِ",
    words: [
      { id: '39:56:1', arabic: 'أَن', transliteration: 'an', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Lest', ur: 'کہ' }, grammarRole: 'harf_masdariyya', grammarExplanations: { en: 'Masdariyya.', ur: 'أَنْ مصدریہ۔' } },
      { id: '39:56:2', arabic: 'تَقُولَ', transliteration: 'taqūla', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'a soul should say', ur: 'کوئی جان کہے' }, grammarRole: 'verb', grammarExplanations: { en: 'Subjunctive.', ur: 'فعل مضارع منصوب۔' } },
      { id: '39:56:3', arabic: 'نَفْسٌ', transliteration: 'nafsun', pos: ['N'], posLabel: 'N', root: 'ن ف س', meaning: { en: 'a soul', ur: 'کوئی جان' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:56:4', arabic: 'يَا', transliteration: 'yā', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'Oh', ur: 'اے' }, grammarRole: 'harf_nida', grammarExplanations: { en: 'Vocative of lamentation.', ur: 'حرف ندا تحسر۔' } },
      { id: '39:56:5', arabic: 'حَسْرَتَا', transliteration: 'ḥasratā', pos: ['N'], posLabel: 'N', root: 'ح س ر', meaning: { en: 'my regret', ur: 'میری حسرت' }, grammarRole: 'munada', grammarExplanations: { en: 'Vocative - expression of grief.', ur: 'منادی - حسرت کا اظہار۔' } },
      { id: '39:56:6', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'over', ur: 'پر' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:56:7', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' }, grammarRole: 'majroor', grammarExplanations: { en: 'Relative pronoun.', ur: 'اسم موصول۔' } },
      { id: '39:56:8', arabic: 'فَرَّطتُ', transliteration: 'farraṭtu', pos: ['V'], posLabel: 'V', root: 'ف ر ط', meaning: { en: 'I neglected', ur: 'میں نے کوتاہی کی' }, grammarRole: 'sila', grammarExplanations: { en: 'Form II perfect - relative clause.', ur: 'فعل ماضی باب تفعیل - صلہ۔' } },
      { id: '39:56:9', arabic: 'فِي', transliteration: 'fī', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'regarding', ur: 'میں' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:56:10', arabic: 'جَنبِ', transliteration: 'janbi', pos: ['N'], posLabel: 'N', root: 'ج ن ب', meaning: { en: 'the side/regard of', ur: 'بارے' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:56:11', arabic: 'اللَّهِ', transliteration: 'Allāhi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'mudaf_ilayh',
    structure: { relationships: [{ from: 2, to: 3, label: 'فعل + فاعل' }, { from: 10, to: 11, label: 'مضاف + مضاف إليه' }] },
        grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } }
    ]
  },

  57: { ayahNumber: 57, text: "أَوْ تَقُولَ لَوْ أَنَّ اللَّهَ هَدَانِي لَكُنتُ مِنَ الْمُتَّقِينَ",
    words: [
      { id: '39:57:1', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Or', ur: 'یا' }, grammarRole: 'harf_atf', grammarExplanations: { en: 'Disjunctive.', ur: 'حرف عطف۔' } },
      { id: '39:57:2', arabic: 'تَقُولَ', transliteration: 'taqūla', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'it should say', ur: 'کہے' }, grammarRole: 'verb', grammarExplanations: { en: 'Subjunctive.', ur: 'فعل مضارع منصوب۔' } },
      { id: '39:57:3', arabic: 'لَوْ', transliteration: 'law', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If only', ur: 'اگر' }, grammarRole: 'harf_shart', grammarExplanations: { en: 'Hypothetical conditional.', ur: 'حرف شرط۔' } },
      { id: '39:57:4', arabic: 'أَنَّ', transliteration: 'anna', pos: ['EMPH'], posLabel: 'EMPH', root: null, meaning: { en: 'that', ur: 'کہ' }, grammarRole: 'harf_tawkid', grammarExplanations: { en: 'Emphatic.', ur: 'حرف توکید۔' } },
      { id: '39:57:5', arabic: 'اللَّهَ', transliteration: 'Allāha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'ism_inna', grammarExplanations: { en: 'Subject of أَنَّ.', ur: 'اسم أَنَّ۔' } },
      { id: '39:57:6', arabic: 'هَدَانِي', transliteration: 'hadānī', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ه د ي', meaning: { en: 'had guided me', ur: 'مجھے ہدایت دی ہوتی' }, grammarRole: 'khabar_inna', grammarExplanations: { en: 'Predicate.', ur: 'خبر۔' } },
      { id: '39:57:7', arabic: 'لَكُنتُ', transliteration: 'la-kuntu', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ك و ن', meaning: { en: 'I would have been', ur: 'میں ہوتا' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Answer to condition.', ur: 'جواب شرط۔' } },
      { id: '39:57:8', arabic: 'مِنَ', transliteration: 'mina', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'among', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:57:9', arabic: 'الْمُتَّقِينَ', transliteration: 'al-muttaqīna', pos: ['N'], posLabel: 'N', root: 'و ق ي', meaning: { en: 'the righteous', ur: 'پرہیزگاروں' }, grammarRole: 'majroor',
    structure: { relationships: [{ from: 4, to: 5, label: 'إن + اسم' }, { from: 8, to: 9, label: 'جار + مجرور' }] },
        grammarExplanations: { en: 'Genitive - Form VIII active participle.', ur: 'مجرور - اسم فاعل باب افتعال۔' } }
    ]
  },

  58: { ayahNumber: 58, text: "أَوْ تَقُولَ حِينَ تَرَى الْعَذَابَ لَوْ أَنَّ لِي كَرَّةً فَأَكُونَ مِنَ الْمُحْسِنِينَ",
    words: [
      { id: '39:58:1', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Or', ur: 'یا' }, grammarRole: 'harf_atf', grammarExplanations: { en: 'Disjunctive.', ur: 'حرف عطف۔' } },
      { id: '39:58:2', arabic: 'تَقُولَ', transliteration: 'taqūla', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'it should say', ur: 'کہے' }, grammarRole: 'verb', grammarExplanations: { en: 'Subjunctive.', ur: 'فعل مضارع منصوب۔' } },
      { id: '39:58:3', arabic: 'حِينَ', transliteration: 'ḥīna', pos: ['N'], posLabel: 'N', root: 'ح ي ن', meaning: { en: 'when', ur: 'جب' }, grammarRole: 'zarf_zaman', grammarExplanations: { en: 'Adverb of time.', ur: 'ظرف زمان۔' } },
      { id: '39:58:4', arabic: 'تَرَى', transliteration: 'tarā', pos: ['V'], posLabel: 'V', root: 'ر أ ي', meaning: { en: 'it sees', ur: 'دیکھے' }, grammarRole: 'verb', grammarExplanations: { en: 'Imperfect.', ur: 'فعل مضارع۔' } },
      { id: '39:58:5', arabic: 'الْعَذَابَ', transliteration: 'al-ʿadhāba', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'the punishment', ur: 'عذاب' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:58:6', arabic: 'لَوْ', transliteration: 'law', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if only', ur: 'کاش' }, grammarRole: 'harf_tamanni', grammarExplanations: { en: 'Wishing particle.', ur: 'حرف تمنی۔' } },
      { id: '39:58:7', arabic: 'أَنَّ', transliteration: 'anna', pos: ['EMPH'], posLabel: 'EMPH', root: null, meaning: { en: 'that', ur: 'کہ' }, grammarRole: 'harf_tawkid', grammarExplanations: { en: 'Emphatic.', ur: 'حرف توکید۔' } },
      { id: '39:58:8', arabic: 'لِي', transliteration: 'lī', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'for me', ur: 'میرے لیے' }, grammarRole: 'khabar_muqaddam', grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' } },
      { id: '39:58:9', arabic: 'كَرَّةً', transliteration: 'karratan', pos: ['N'], posLabel: 'N', root: 'ك ر ر', meaning: { en: 'a return', ur: 'واپسی' }, grammarRole: 'ism_anna', grammarExplanations: { en: 'Subject of أَنَّ.', ur: 'اسم أَنَّ۔' } },
      { id: '39:58:10', arabic: 'فَأَكُونَ', transliteration: 'fa-akūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'so I would be', ur: 'تو ہوں' }, grammarRole: 'verb', grammarExplanations: { en: 'Result + subjunctive.', ur: 'فا + فعل مضارع منصوب۔' } },
      { id: '39:58:11', arabic: 'مِنَ', transliteration: 'mina', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'among', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:58:12', arabic: 'الْمُحْسِنِينَ', transliteration: 'al-muḥsinīna', pos: ['N'], posLabel: 'N', root: 'ح س ن', meaning: { en: 'the doers of good', ur: 'نیکوکاروں' }, grammarRole: 'majroor',
    structure: { relationships: [{ from: 4, to: 5, label: 'فعل + مفعول به' }, { from: 11, to: 12, label: 'جار + مجرور' }] },
        grammarExplanations: { en: 'Genitive - Form IV active participle.', ur: 'مجرور - اسم فاعل باب إفعال۔' } }
    ]
  },

  59: { ayahNumber: 59, text: "بَلَىٰ قَدْ جَاءَتْكَ آيَاتِي فَكَذَّبْتَ بِهَا وَاسْتَكْبَرْتَ وَكُنتَ مِنَ الْكَافِرِينَ",
    words: [
      { id: '39:59:1', arabic: 'بَلَىٰ', transliteration: 'balā', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'Yes indeed', ur: 'ہاں' }, grammarRole: 'harf_jawab', grammarExplanations: { en: 'Affirmative response particle.', ur: 'حرف جواب اثبات۔' } },
      { id: '39:59:2', arabic: 'قَدْ', transliteration: 'qad', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'certainly', ur: 'یقیناً' }, grammarRole: 'harf_tahqiq', grammarExplanations: { en: 'Certainty particle.', ur: 'حرف تحقیق۔' } },
      { id: '39:59:3', arabic: 'جَاءَتْكَ', transliteration: 'jā\'atka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'came to you', ur: 'آئیں تمہارے پاس' }, grammarRole: 'verb', grammarExplanations: { en: 'Perfect + pronoun.', ur: 'فعل ماضی + ضمیر۔' } },
      { id: '39:59:4', arabic: 'آيَاتِي', transliteration: 'āyātī', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ي ي', meaning: { en: 'My verses', ur: 'میری آیات' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject + possessive pronoun.', ur: 'فاعل + ضمیر ملکیت۔' } },
      { id: '39:59:5', arabic: 'فَكَذَّبْتَ', transliteration: 'fa-kadhdhabta', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك ذ ب', meaning: { en: 'but you denied', ur: 'تو تم نے جھٹلایا' }, grammarRole: 'verb', grammarExplanations: { en: 'Form II perfect.', ur: 'فعل ماضی باب تفعیل۔' } },
      { id: '39:59:6', arabic: 'بِهَا', transliteration: 'bihā', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'them', ur: 'ان کو' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:59:7', arabic: 'وَاسْتَكْبَرْتَ', transliteration: 'wastakbarta', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك ب ر', meaning: { en: 'and were arrogant', ur: 'اور تکبر کیا' }, grammarRole: 'verb', grammarExplanations: { en: 'Form X perfect.', ur: 'فعل ماضی باب استفعال۔' } },
      { id: '39:59:8', arabic: 'وَكُنتَ', transliteration: 'wa-kunta', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'and you were', ur: 'اور تھے' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + كان.', ur: 'واو + کان۔' } },
      { id: '39:59:9', arabic: 'مِنَ', transliteration: 'mina', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'among', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:59:10', arabic: 'الْكَافِرِينَ', transliteration: 'al-kāfirīna', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'the disbelievers', ur: 'کافروں' }, grammarRole: 'majroor',
    structure: { relationships: [{ from: 3, to: 4, label: 'فعل + فاعل' }, { from: 9, to: 10, label: 'جار + مجرور' }] },
        grammarExplanations: { en: 'Genitive - active participle.', ur: 'مجرور - اسم فاعل۔' } }
    ]
  },

  60: { ayahNumber: 60, text: "وَيَوْمَ الْقِيَامَةِ تَرَى الَّذِينَ كَذَبُوا عَلَى اللَّهِ وُجُوهُهُم مُّسْوَدَّةٌ",
    words: [
      { id: '39:60:1', arabic: 'وَيَوْمَ', transliteration: 'wa-yawma', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ي و م', meaning: { en: 'And on the Day', ur: 'اور دن' }, grammarRole: 'zarf_zaman', grammarExplanations: { en: 'Adverb of time.', ur: 'ظرف زمان۔' } },
      { id: '39:60:2', arabic: 'الْقِيَامَةِ', transliteration: 'al-qiyāmati', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'of Resurrection', ur: 'قیامت' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:60:3', arabic: 'تَرَى', transliteration: 'tarā', pos: ['V'], posLabel: 'V', root: 'ر أ ي', meaning: { en: 'you will see', ur: 'تم دیکھو گے' }, grammarRole: 'verb', grammarExplanations: { en: 'Imperfect.', ur: 'فعل مضارع۔' } },
      { id: '39:60:4', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جنہوں نے' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:60:5', arabic: 'كَذَبُوا', transliteration: 'kadhabū', pos: ['V'], posLabel: 'V', root: 'ك ذ ب', meaning: { en: 'lied', ur: 'جھوٹ بولا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:60:6', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'about', ur: 'پر' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:60:7', arabic: 'اللَّهِ', transliteration: 'Allāhi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:60:8', arabic: 'وُجُوهُهُم', transliteration: 'wujūhuhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'و ج ه', meaning: { en: 'their faces', ur: 'ان کے چہرے' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject.', ur: 'مبتدأ۔' } },
      { id: '39:60:9', arabic: 'مُّسْوَدَّةٌ', transliteration: 'muswaddatun', pos: ['ADJ'], posLabel: 'ADJ', root: 'س و د', meaning: { en: 'blackened', ur: 'سیاہ' }, grammarRole: 'khabar',
    structure: { relationships: [{ from: 1, to: 2, label: 'مضاف + مضاف إليه' }, { from: 3, to: 4, label: 'فعل + مفعول به' }, { from: 8, to: 9, label: 'مبتدأ + خبر' }] },
        grammarExplanations: { en: 'Predicate - Form IX passive participle.', ur: 'خبر - اسم مفعول باب افعلال۔' } }
    ]
  },

  61: { ayahNumber: 61, text: "وَيُنَجِّي اللَّهُ الَّذِينَ اتَّقَوْا بِمَفَازَتِهِمْ لَا يَمَسُّهُمُ السُّوءُ وَلَا هُمْ يَحْزَنُونَ",
    words: [
      { id: '39:61:1', arabic: 'وَيُنَجِّي', transliteration: 'wa-yunajjī', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ن ج و', meaning: { en: 'And Allah will save', ur: 'اور نجات دے گا' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + Form II imperfect.', ur: 'واو + فعل مضارع باب تفعیل۔' } },
      { id: '39:61:2', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:61:3', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:61:4', arabic: 'اتَّقَوْا', transliteration: 'ittaqaw', pos: ['V'], posLabel: 'V', root: 'و ق ي', meaning: { en: 'feared Allah', ur: 'تقویٰ اختیار کیا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:61:5', arabic: 'بِمَفَازَتِهِمْ', transliteration: 'bi-mafāzatihim', pos: ['PREP', 'N', 'PRON'], posLabel: 'PREP+N+PRON', root: 'ف و ز', meaning: { en: 'to their place of salvation', ur: 'ان کی کامیابی سے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + genitive + pronoun.', ur: 'حرف جر + مجرور + ضمیر۔' } },
      { id: '39:61:6', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' }, grammarRole: 'harf_nafi', grammarExplanations: { en: 'Negation.', ur: 'حرف نفی۔' } },
      { id: '39:61:7', arabic: 'يَمَسُّهُمُ', transliteration: 'yamassuhumu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'م س س', meaning: { en: 'will touch them', ur: 'چھوئے گا انہیں' }, grammarRole: 'verb', grammarExplanations: { en: 'Imperfect + pronoun.', ur: 'فعل مضارع + ضمیر۔' } },
      { id: '39:61:8', arabic: 'السُّوءُ', transliteration: 'as-sū\'u', pos: ['N'], posLabel: 'N', root: 'س و أ', meaning: { en: 'evil', ur: 'برائی' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:61:9', arabic: 'وَلَا', transliteration: 'wa-lā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'nor', ur: 'اور نہ' }, grammarRole: 'harf_nafi', grammarExplanations: { en: 'Negation.', ur: 'حرف نفی۔' } },
      { id: '39:61:10', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject pronoun.', ur: 'مبتدأ۔' } },
      { id: '39:61:11', arabic: 'يَحْزَنُونَ', transliteration: 'yaḥzanūna', pos: ['V'], posLabel: 'V', root: 'ح ز ن', meaning: { en: 'grieve', ur: 'غمگین ہوں گے' }, grammarRole: 'khabar',
    structure: { relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 7, to: 8, label: 'فعل + فاعل' }, { from: 10, to: 11, label: 'مبتدأ + خبر' }] },
        grammarExplanations: { en: 'Predicate - imperfect.', ur: 'خبر - فعل مضارع۔' } }
    ]
  },

  62: { ayahNumber: 62, text: "اللَّهُ خَالِقُ كُلِّ شَيْءٍ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ وَكِيلٌ",
    words: [
      { id: '39:62:1', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject.', ur: 'مبتدأ۔' } },
      { id: '39:62:2', arabic: 'خَالِقُ', transliteration: 'khāliqu', pos: ['N'], posLabel: 'N', root: 'خ ل ق', meaning: { en: 'is the Creator', ur: 'پیدا کرنے والا' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate - active participle.', ur: 'خبر - اسم فاعل۔' } },
      { id: '39:62:3', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'of all', ur: 'ہر' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:62:4', arabic: 'شَيْءٍ', transliteration: 'shay\'in', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'thing', ur: 'چیز' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:62:5', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'and He', ur: 'اور وہ' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject.', ur: 'مبتدأ۔' } },
      { id: '39:62:6', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'over', ur: 'پر' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:62:7', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'all', ur: 'ہر' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:62:8', arabic: 'شَيْءٍ', transliteration: 'shay\'in', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'thing', ur: 'چیز' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:62:9', arabic: 'وَكِيلٌ', transliteration: 'wakīlun', pos: ['N'], posLabel: 'N', root: 'و ك ل', meaning: { en: 'a Trustee/Guardian', ur: 'کارساز' }, grammarRole: 'khabar',
    structure: { relationships: [{ from: 1, to: 2, label: 'مبتدأ + خبر' }, { from: 3, to: 4, label: 'مضاف + مضاف إليه' }, { from: 5, to: 9, label: 'مبتدأ + خبر' }] },
        grammarExplanations: { en: 'Predicate.', ur: 'خبر۔' } }
    ]
  },

  63: { ayahNumber: 63, text: "لَّهُ مَقَالِيدُ السَّمَاوَاتِ وَالْأَرْضِ",
    words: [
      { id: '39:63:1', arabic: 'لَّهُ', transliteration: 'lahu', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'To Him belong', ur: 'اسی کی ہیں' }, grammarRole: 'khabar_muqaddam', grammarExplanations: { en: 'Fronted predicate.', ur: 'خبر مقدم۔' } },
      { id: '39:63:2', arabic: 'مَقَالِيدُ', transliteration: 'maqālīdu', pos: ['N'], posLabel: 'N', root: 'ق ل د', meaning: { en: 'the keys', ur: 'کنجیاں' }, grammarRole: 'mubtada_muakhkhar', grammarExplanations: { en: 'Delayed subject.', ur: 'مبتدأ مؤخر۔' } },
      { id: '39:63:3', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samāwāti', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'of the heavens', ur: 'آسمانوں' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:63:4', arabic: 'وَالْأَرْضِ', transliteration: 'wal-arḍi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین' }, grammarRole: 'matoof',
    structure: { relationships: [{ from: 2, to: 3, label: 'مضاف + مضاف إليه' }] },
        grammarExplanations: { en: 'Conjoined genitive.', ur: 'معطوف۔' } }
    ]
  },

  64: { ayahNumber: 64, text: "قُلْ أَفَغَيْرَ اللَّهِ تَأْمُرُونِّي أَعْبُدُ أَيُّهَا الْجَاهِلُونَ",
    words: [
      { id: '39:64:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Imperative.', ur: 'فعل امر۔' } },
      { id: '39:64:2', arabic: 'أَفَغَيْرَ', transliteration: 'a-fa-ghayra', pos: ['INTERROG', 'CONJ', 'N'], posLabel: 'INTERROG+CONJ+N', root: 'غ ي ر', meaning: { en: 'Is it other than', ur: 'کیا غیر' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Fronted object for emphasis.', ur: 'مفعول بہ مقدم برائے تاکید۔' } },
      { id: '39:64:3', arabic: 'اللَّهِ', transliteration: 'Allāhi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:64:4', arabic: 'تَأْمُرُونِّي', transliteration: 'ta\'murūnnī', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ م ر', meaning: { en: 'you order me', ur: 'تم حکم دیتے ہو مجھے' }, grammarRole: 'verb', grammarExplanations: { en: 'Imperfect + pronoun.', ur: 'فعل مضارع + ضمیر۔' } },
      { id: '39:64:5', arabic: 'أَعْبُدُ', transliteration: 'aʿbudu', pos: ['V'], posLabel: 'V', root: 'ع ب د', meaning: { en: 'to worship', ur: 'عبادت کروں' }, grammarRole: 'verb', grammarExplanations: { en: 'Imperfect - explanatory.', ur: 'فعل مضارع - بیانی۔' } },
      { id: '39:64:6', arabic: 'أَيُّهَا', transliteration: 'ayyuhā', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'O', ur: 'اے' }, grammarRole: 'munada', grammarExplanations: { en: 'Vocative.', ur: 'منادی۔' } },
      { id: '39:64:7', arabic: 'الْجَاهِلُونَ', transliteration: 'al-jāhilūna', pos: ['N'], posLabel: 'N', root: 'ج ه ل', meaning: { en: 'the ignorant', ur: 'جاہلو' }, grammarRole: 'badal',
    structure: { relationships: [{ from: 2, to: 3, label: 'مضاف + مضاف إليه' }] },
        grammarExplanations: { en: 'Apposition - active participle.', ur: 'بدل - اسم فاعل۔' } }
    ]
  },

  65: { ayahNumber: 65, text: "وَلَقَدْ أُوحِيَ إِلَيْكَ وَإِلَى الَّذِينَ مِن قَبْلِكَ لَئِنْ أَشْرَكْتَ لَيَحْبَطَنَّ عَمَلُكَ",
    words: [
      { id: '39:65:1', arabic: 'وَلَقَدْ', transliteration: 'wa-laqad', pos: ['CONJ', 'EMPH', 'PART'], posLabel: 'CONJ+EMPH+PART', root: null, meaning: { en: 'And indeed', ur: 'اور بے شک' }, grammarRole: 'harf_tawkid', grammarExplanations: { en: 'Emphasis particles.', ur: 'حروف توکید۔' } },
      { id: '39:65:2', arabic: 'أُوحِيَ', transliteration: 'ūḥiya', pos: ['V'], posLabel: 'V', root: 'و ح ي', meaning: { en: 'it has been revealed', ur: 'وحی کی گئی' }, grammarRole: 'verb', grammarExplanations: { en: 'Form IV passive.', ur: 'فعل ماضی مجہول باب إفعال۔' } },
      { id: '39:65:3', arabic: 'إِلَيْكَ', transliteration: 'ilayka', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'to you', ur: 'تمہاری طرف' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:65:4', arabic: 'وَإِلَى', transliteration: 'wa-ilā', pos: ['CONJ', 'PREP'], posLabel: 'CONJ+PREP', root: null, meaning: { en: 'and to', ur: 'اور طرف' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Conjunction + preposition.', ur: 'واو + حرف جر۔' } },
      { id: '39:65:5', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those', ur: 'جو' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive - relative.', ur: 'مجرور - اسم موصول۔' } },
      { id: '39:65:6', arabic: 'مِن', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'before', ur: 'سے پہلے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:65:7', arabic: 'قَبْلِكَ', transliteration: 'qablika', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ب ل', meaning: { en: 'you', ur: 'تم' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مجرور + ضمیر۔' } },
      { id: '39:65:8', arabic: 'لَئِنْ', transliteration: 'la-in', pos: ['EMPH', 'COND'], posLabel: 'EMPH+COND', root: null, meaning: { en: 'If indeed', ur: 'اگر ضرور' }, grammarRole: 'harf_shart', grammarExplanations: { en: 'Emphatic + conditional.', ur: 'لام موطئہ + شرط۔' } },
      { id: '39:65:9', arabic: 'أَشْرَكْتَ', transliteration: 'ashrakta', pos: ['V'], posLabel: 'V', root: 'ش ر ك', meaning: { en: 'you associate partners', ur: 'شرک کیا' }, grammarRole: 'verb', grammarExplanations: { en: 'Form IV perfect.', ur: 'فعل ماضی باب إفعال۔' } },
      { id: '39:65:10', arabic: 'لَيَحْبَطَنَّ', transliteration: 'la-yaḥbaṭanna', pos: ['EMPH', 'V'], posLabel: 'EMPH+V', root: 'ح ب ط', meaning: { en: 'will surely be nullified', ur: 'ضرور ضائع ہو جائے گا' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Emphatic لَ + energetic noun imperfect.', ur: 'لام جواب + فعل مضارع مؤکد بالنون۔' } },
      { id: '39:65:11', arabic: 'عَمَلُكَ', transliteration: 'ʿamaluka', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع م ل', meaning: { en: 'your deeds', ur: 'تمہارا عمل' }, grammarRole: 'faa\'il',
    structure: { relationships: [{ from: 6, to: 7, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'شرط + فعل' }, { from: 10, to: 11, label: 'فعل + فاعل' }] },
        grammarExplanations: { en: 'Subject + pronoun.', ur: 'فاعل + ضمیر۔' } }
    ]
  },

  66: { ayahNumber: 66, text: "بَلِ اللَّهَ فَاعْبُدْ وَكُن مِّنَ الشَّاكِرِينَ",
    words: [
      { id: '39:66:1', arabic: 'بَلِ', transliteration: 'bali', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'Rather', ur: 'بلکہ' }, grammarRole: 'harf_idrab', grammarExplanations: { en: 'Correction/redirection particle.', ur: 'حرف اضراب۔' } },
      { id: '39:66:2', arabic: 'اللَّهَ', transliteration: 'Allāha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Fronted object for emphasis.', ur: 'مفعول بہ مقدم۔' } },
      { id: '39:66:3', arabic: 'فَاعْبُدْ', transliteration: 'fa-ʿbud', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ع ب د', meaning: { en: 'so worship', ur: 'پس عبادت کر' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Conjunction + imperative.', ur: 'فا + فعل امر۔' } },
      { id: '39:66:4', arabic: 'وَكُن', transliteration: 'wa-kun', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'and be', ur: 'اور ہو جا' }, grammarRole: 'verb_amr', grammarExplanations: { en: 'Imperative of كان.', ur: 'فعل امر کان سے۔' } },
      { id: '39:66:5', arabic: 'مِّنَ', transliteration: 'mina', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'among', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:66:6', arabic: 'الشَّاكِرِينَ', transliteration: 'ash-shākirīna', pos: ['N'], posLabel: 'N', root: 'ش ك ر', meaning: { en: 'the grateful', ur: 'شکر گزاروں' }, grammarRole: 'majroor',
    structure: { relationships: [{ from: 3, to: 2, label: 'فعل + مفعول به' }, { from: 5, to: 6, label: 'جار + مجرور' }] },
        grammarExplanations: { en: 'Genitive - active participle.', ur: 'مجرور - اسم فاعل۔' } }
    ]
  },

  67: { ayahNumber: 67, text: "وَمَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ وَالْأَرْضُ جَمِيعًا قَبْضَتُهُ يَوْمَ الْقِيَامَةِ",
    words: [
      { id: '39:67:1', arabic: 'وَمَا', transliteration: 'wa-mā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' }, grammarRole: 'harf_nafi', grammarExplanations: { en: 'Negation.', ur: 'حرف نفی۔' } },
      { id: '39:67:2', arabic: 'قَدَرُوا', transliteration: 'qadarū', pos: ['V'], posLabel: 'V', root: 'ق د ر', meaning: { en: 'they estimated', ur: 'قدر کی' }, grammarRole: 'verb', grammarExplanations: { en: 'Perfect verb.', ur: 'فعل ماضی۔' } },
      { id: '39:67:3', arabic: 'اللَّهَ', transliteration: 'Allāha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:67:4', arabic: 'حَقَّ', transliteration: 'ḥaqqa', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'the true', ur: 'حق' }, grammarRole: 'mafool_mutlaq', grammarExplanations: { en: 'Absolute object - cognate accusative.', ur: 'مفعول مطلق۔' } },
      { id: '39:67:5', arabic: 'قَدْرِهِ', transliteration: 'qadrihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق د ر', meaning: { en: 'His estimation', ur: 'اس کی قدر' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مضاف إليه + ضمیر۔' } },
      { id: '39:67:6', arabic: 'وَالْأَرْضُ', transliteration: 'wal-arḍu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ر ض', meaning: { en: 'and the earth', ur: 'اور زمین' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject.', ur: 'مبتدأ۔' } },
      { id: '39:67:7', arabic: 'جَمِيعًا', transliteration: 'jamīʿan', pos: ['N'], posLabel: 'N', root: 'ج م ع', meaning: { en: 'entirely', ur: 'پوری' }, grammarRole: 'haal', grammarExplanations: { en: 'State.', ur: 'حال۔' } },
      { id: '39:67:8', arabic: 'قَبْضَتُهُ', transliteration: 'qabḍatuhu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ب ض', meaning: { en: 'in His grip', ur: 'اس کی مٹھی میں' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate + pronoun.', ur: 'خبر + ضمیر۔' } },
      { id: '39:67:9', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'on the Day', ur: 'دن' }, grammarRole: 'zarf_zaman', grammarExplanations: { en: 'Adverb of time.', ur: 'ظرف زمان۔' } },
      { id: '39:67:10', arabic: 'الْقِيَامَةِ', transliteration: 'al-qiyāmati', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'of Resurrection', ur: 'قیامت' }, grammarRole: 'mudaf_ilayh',
    structure: { relationships: [{ from: 4, to: 5, label: 'مضاف + مضاف إليه' }, { from: 6, to: 8, label: 'مبتدأ + خبر' }, { from: 9, to: 10, label: 'مضاف + مضاف إليه' }] },
        grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } }
    ]
  },

  68: { ayahNumber: 68, text: "وَنُفِخَ فِي الصُّورِ فَصَعِقَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ إِلَّا مَن شَاءَ اللَّهُ",
    words: [
      { id: '39:68:1', arabic: 'وَنُفِخَ', transliteration: 'wa-nufikha', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ن ف خ', meaning: { en: 'And the Trumpet is blown', ur: 'اور صور پھونکا جائے گا' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + passive perfect.', ur: 'واو + فعل ماضی مجہول۔' } },
      { id: '39:68:2', arabic: 'فِي', transliteration: 'fī', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'in', ur: 'میں' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:68:3', arabic: 'الصُّورِ', transliteration: 'aṣ-ṣūri', pos: ['N'], posLabel: 'N', root: 'ص و ر', meaning: { en: 'the Trumpet', ur: 'صور' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:68:4', arabic: 'فَصَعِقَ', transliteration: 'fa-ṣaʿiqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ص ع ق', meaning: { en: 'and fell dead', ur: 'تو بے ہوش ہو گئے' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + perfect.', ur: 'فا + فعل ماضی۔' } },
      { id: '39:68:5', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whoever is', ur: 'جو' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:68:6', arabic: 'فِي', transliteration: 'fī', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'in', ur: 'میں' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:68:7', arabic: 'السَّمَاوَاتِ', transliteration: 'as-samāwāti', pos: ['N'], posLabel: 'N', root: 'س م و', meaning: { en: 'the heavens', ur: 'آسمانوں' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:68:8', arabic: 'وَمَن', transliteration: 'wa-man', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'and whoever is', ur: 'اور جو' }, grammarRole: 'matoof', grammarExplanations: { en: 'Conjoined.', ur: 'معطوف۔' } },
      { id: '39:68:9', arabic: 'فِي', transliteration: 'fī', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'in', ur: 'میں' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:68:10', arabic: 'الْأَرْضِ', transliteration: 'al-arḍi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:68:11', arabic: 'إِلَّا', transliteration: 'illā', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'except', ur: 'سوائے' }, grammarRole: 'istithnaa', grammarExplanations: { en: 'Exception particle.', ur: 'حرف استثناء۔' } },
      { id: '39:68:12', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whom', ur: 'جسے' }, grammarRole: 'mustathnaa', grammarExplanations: { en: 'Excepted - relative pronoun.', ur: 'مستثنی - اسم موصول۔' } },
      { id: '39:68:13', arabic: 'شَاءَ', transliteration: 'shā\'a', pos: ['V'], posLabel: 'V', root: 'ش ي أ', meaning: { en: 'wills', ur: 'چاہے' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:68:14', arabic: 'اللَّهُ', transliteration: 'Allāhu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' }, grammarRole: 'faa\'il',
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 6, to: 7, label: 'جار + مجرور' }, { from: 13, to: 14, label: 'فعل + فاعل' }] },
        grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } }
    ]
  },

  69: { ayahNumber: 69, text: "وَأَشْرَقَتِ الْأَرْضُ بِنُورِ رَبِّهَا وَوُضِعَ الْكِتَابُ",
    words: [
      { id: '39:69:1', arabic: 'وَأَشْرَقَتِ', transliteration: 'wa-ashraqati', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ش ر ق', meaning: { en: 'And the earth will shine', ur: 'اور چمک اٹھے گی' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + Form IV perfect.', ur: 'واو + فعل ماضی باب إفعال۔' } },
      { id: '39:69:2', arabic: 'الْأَرْضُ', transliteration: 'al-arḍu', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:69:3', arabic: 'بِنُورِ', transliteration: 'bi-nūri', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ن و ر', meaning: { en: 'with the light', ur: 'نور سے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + genitive.', ur: 'حرف جر + مجرور۔' } },
      { id: '39:69:4', arabic: 'رَبِّهَا', transliteration: 'rabbihā', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'of its Lord', ur: 'اپنے رب کے' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مضاف إليه + ضمیر۔' } },
      { id: '39:69:5', arabic: 'وَوُضِعَ', transliteration: 'wa-wuḍiʿa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'و ض ع', meaning: { en: 'and will be placed', ur: 'اور رکھی جائے گی' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + passive perfect.', ur: 'واو + فعل ماضی مجہول۔' } },
      { id: '39:69:6', arabic: 'الْكِتَابُ', transliteration: 'al-kitābu', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Record', ur: 'کتاب' }, grammarRole: 'naib_faa\'il',
    structure: { relationships: [{ from: 1, to: 2, label: 'فعل + فاعل' }, { from: 3, to: 4, label: 'مضاف + مضاف إليه' }] },
        grammarExplanations: { en: 'Deputy subject.', ur: 'نائب فاعل۔' } }
    ]
  },

  70: { ayahNumber: 70, text: "وَوُفِّيَتْ كُلُّ نَفْسٍ مَّا عَمِلَتْ وَهُوَ أَعْلَمُ بِمَا يَفْعَلُونَ",
    words: [
      { id: '39:70:1', arabic: 'وَوُفِّيَتْ', transliteration: 'wa-wuffiyat', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'و ف ي', meaning: { en: 'And every soul will be fully paid', ur: 'اور پورا پورا دیا جائے گا' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + Form II passive.', ur: 'واو + فعل ماضی مجہول باب تفعیل۔' } },
      { id: '39:70:2', arabic: 'كُلُّ', transliteration: 'kullu', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'every', ur: 'ہر' }, grammarRole: 'naib_faa\'il', grammarExplanations: { en: 'Deputy subject.', ur: 'نائب فاعل۔' } },
      { id: '39:70:3', arabic: 'نَفْسٍ', transliteration: 'nafsin', pos: ['N'], posLabel: 'N', root: 'ن ف س', meaning: { en: 'soul', ur: 'جان' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:70:4', arabic: 'مَّا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Object.', ur: 'مفعول بہ۔' } },
      { id: '39:70:5', arabic: 'عَمِلَتْ', transliteration: 'ʿamilat', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'it did', ur: 'اس نے کیا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:70:6', arabic: 'وَهُوَ', transliteration: 'wa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'and He', ur: 'اور وہ' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject.', ur: 'مبتدأ۔' } },
      { id: '39:70:7', arabic: 'أَعْلَمُ', transliteration: 'aʿlamu', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: 'most knowing', ur: 'خوب جاننے والا' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate - superlative.', ur: 'خبر - اسم تفضیل۔' } },
      { id: '39:70:8', arabic: 'بِمَا', transliteration: 'bi-mā', pos: ['PREP', 'REL'], posLabel: 'PREP+REL', root: null, meaning: { en: 'of what', ur: 'جو' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + relative.', ur: 'حرف جر + موصول۔' } },
      { id: '39:70:9', arabic: 'يَفْعَلُونَ', transliteration: 'yafʿalūna', pos: ['V'], posLabel: 'V', root: 'ف ع ل', meaning: { en: 'they do', ur: 'کرتے ہیں' }, grammarRole: 'sila',
    structure: { relationships: [{ from: 2, to: 3, label: 'مضاف + مضاف إليه' }, { from: 4, to: 5, label: 'موصول + صلة' }, { from: 6, to: 7, label: 'مبتدأ + خبر' }] },
        grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } }
    ]
  },

  71: { ayahNumber: 71, text: "وَسِيقَ الَّذِينَ كَفَرُوا إِلَىٰ جَهَنَّمَ زُمَرًا",
    words: [
      { id: '39:71:1', arabic: 'وَسِيقَ', transliteration: 'wa-sīqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'س و ق', meaning: { en: 'And those who disbelieved will be driven', ur: 'اور ہانکے جائیں گے' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + passive perfect.', ur: 'واو + فعل ماضی مجہول۔' } },
      { id: '39:71:2', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جنہوں نے' }, grammarRole: 'naib_faa\'il', grammarExplanations: { en: 'Deputy subject.', ur: 'نائب فاعل۔' } },
      { id: '39:71:3', arabic: 'كَفَرُوا', transliteration: 'kafarū', pos: ['V'], posLabel: 'V', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:71:4', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'to', ur: 'کی طرف' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:71:5', arabic: 'جَهَنَّمَ', transliteration: 'jahannama', pos: ['PN'], posLabel: 'PN', root: null, meaning: { en: 'Hell', ur: 'جہنم' }, grammarRole: 'majroor', grammarExplanations: { en: 'Proper noun - genitive, non-declinable.', ur: 'اسم علم - مجرور غیر منصرف۔' } },
      { id: '39:71:6', arabic: 'زُمَرًا', transliteration: 'zumaran', pos: ['N'], posLabel: 'N', root: 'ز م ر', meaning: { en: 'in groups', ur: 'گروہ گروہ' }, grammarRole: 'haal',
    structure: { relationships: [{ from: 2, to: 3, label: 'موصول + صلة' }, { from: 4, to: 5, label: 'جار + مجرور' }] },
        grammarExplanations: { en: 'State - in groups.', ur: 'حال - گروہوں میں۔' } }
    ]
  },

  72: { ayahNumber: 72, text: "حَتَّىٰ إِذَا جَاءُوهَا فُتِحَتْ أَبْوَابُهَا وَقَالَ لَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ رُسُلٌ مِّنكُمْ",
    words: [
      { id: '39:72:1', arabic: 'حَتَّىٰ', transliteration: 'ḥattā', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'Until', ur: 'یہاں تک' }, grammarRole: 'harf_ghaya', grammarExplanations: { en: 'Goal particle.', ur: 'حرف غایت۔' } },
      { id: '39:72:2', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'when', ur: 'جب' }, grammarRole: 'zarf_shart', grammarExplanations: { en: 'Temporal conditional.', ur: 'ظرف شرط۔' } },
      { id: '39:72:3', arabic: 'جَاءُوهَا', transliteration: 'jā\'ūhā', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ي أ', meaning: { en: 'they reach it', ur: 'پہنچیں اس کے پاس' }, grammarRole: 'verb', grammarExplanations: { en: 'Perfect + pronoun.', ur: 'فعل ماضی + ضمیر۔' } },
      { id: '39:72:4', arabic: 'فُتِحَتْ', transliteration: 'futiḥat', pos: ['V'], posLabel: 'V', root: 'ف ت ح', meaning: { en: 'will be opened', ur: 'کھول دیے جائیں گے' }, grammarRole: 'jawab_shart', grammarExplanations: { en: 'Passive - answer to condition.', ur: 'فعل ماضی مجہول - جواب شرط۔' } },
      { id: '39:72:5', arabic: 'أَبْوَابُهَا', transliteration: 'abwābuhā', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب و ب', meaning: { en: 'its gates', ur: 'اس کے دروازے' }, grammarRole: 'naib_faa\'il', grammarExplanations: { en: 'Deputy subject + pronoun.', ur: 'نائب فاعل + ضمیر۔' } },
      { id: '39:72:6', arabic: 'وَقَالَ', transliteration: 'wa-qāla', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و ل', meaning: { en: 'and say', ur: 'اور کہیں گے' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + perfect.', ur: 'واو + فعل ماضی۔' } },
      { id: '39:72:7', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'to them', ur: 'ان سے' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } },
      { id: '39:72:8', arabic: 'خَزَنَتُهَا', transliteration: 'khazanatuhā', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'خ ز ن', meaning: { en: 'its keepers', ur: 'اس کے داروغے' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject + pronoun.', ur: 'فاعل + ضمیر۔' } },
      { id: '39:72:9', arabic: 'أَلَمْ', transliteration: 'a-lam', pos: ['INTERROG', 'NEG'], posLabel: 'INTERROG+NEG', root: null, meaning: { en: 'Did not', ur: 'کیا نہیں' }, grammarRole: 'istifham', grammarExplanations: { en: 'Rhetorical question.', ur: 'استفہام۔' } },
      { id: '39:72:10', arabic: 'يَأْتِكُمْ', transliteration: 'ya\'tikum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'come to you', ur: 'آئے تمہارے پاس' }, grammarRole: 'verb', grammarExplanations: { en: 'Jussive + pronoun.', ur: 'فعل مجزوم + ضمیر۔' } },
      { id: '39:72:11', arabic: 'رُسُلٌ', transliteration: 'rusulun', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'messengers', ur: 'رسول' }, grammarRole: 'faa\'il', grammarExplanations: { en: 'Subject.', ur: 'فاعل۔' } },
      { id: '39:72:12', arabic: 'مِّنكُمْ', transliteration: 'minkum', pos: ['PREP', 'PRON'], posLabel: 'PREP+PRON', root: null, meaning: { en: 'from among you', ur: 'تم میں سے' }, grammarRole: 'jarr_majroor',
    structure: { relationships: [{ from: 2, to: 3, label: 'شرط + فعل' }, { from: 6, to: 8, label: 'فعل + فاعل' }, { from: 10, to: 11, label: 'فعل + فاعل' }] },
        grammarExplanations: { en: 'Preposition + pronoun.', ur: 'حرف جر + ضمیر۔' } }
    ]
  },

  73: { ayahNumber: 73, text: "وَسِيقَ الَّذِينَ اتَّقَوْا رَبَّهُمْ إِلَى الْجَنَّةِ زُمَرًا",
    words: [
      { id: '39:73:1', arabic: 'وَسِيقَ', transliteration: 'wa-sīqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'س و ق', meaning: { en: 'And those who feared will be led', ur: 'اور لے جائے جائیں گے' }, grammarRole: 'verb', grammarExplanations: { en: 'Passive.', ur: 'فعل ماضی مجہول۔' } },
      { id: '39:73:2', arabic: 'الَّذِينَ', transliteration: 'alladhīna', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جنہوں نے' }, grammarRole: 'naib_faa\'il', grammarExplanations: { en: 'Deputy subject.', ur: 'نائب فاعل۔' } },
      { id: '39:73:3', arabic: 'اتَّقَوْا', transliteration: 'ittaqaw', pos: ['V'], posLabel: 'V', root: 'و ق ي', meaning: { en: 'feared', ur: 'تقویٰ اختیار کیا' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:73:4', arabic: 'رَبَّهُمْ', transliteration: 'rabbahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'اپنے رب' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:73:5', arabic: 'إِلَى', transliteration: 'ilā', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'to', ur: 'کی طرف' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:73:6', arabic: 'الْجَنَّةِ', transliteration: 'al-jannati', pos: ['N'], posLabel: 'N', root: 'ج ن ن', meaning: { en: 'Paradise', ur: 'جنت' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:73:7', arabic: 'زُمَرًا', transliteration: 'zumaran', pos: ['N'], posLabel: 'N', root: 'ز م ر', meaning: { en: 'in groups', ur: 'گروہ گروہ' }, grammarRole: 'haal',
    structure: { relationships: [{ from: 2, to: 3, label: 'موصول + صلة' }, { from: 3, to: 4, label: 'فعل + مفعول به' }, { from: 5, to: 6, label: 'جار + مجرور' }] },
        grammarExplanations: { en: 'State - in groups.', ur: 'حال۔' } }
    ]
  },

  74: { ayahNumber: 74, text: "وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي صَدَقَنَا وَعْدَهُ وَأَوْرَثَنَا الْأَرْضَ",
    words: [
      { id: '39:74:1', arabic: 'وَقَالُوا', transliteration: 'wa-qālū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و ل', meaning: { en: 'And they will say', ur: 'اور کہیں گے' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + perfect.', ur: 'واو + فعل ماضی۔' } },
      { id: '39:74:2', arabic: 'الْحَمْدُ', transliteration: 'al-ḥamdu', pos: ['N'], posLabel: 'N', root: 'ح م د', meaning: { en: 'Praise', ur: 'تعریف' }, grammarRole: 'mubtada', grammarExplanations: { en: 'Subject.', ur: 'مبتدأ۔' } },
      { id: '39:74:3', arabic: 'لِلَّهِ', transliteration: 'lillāhi', pos: ['PREP', 'PN'], posLabel: 'PREP+PN', root: 'أ ل ه', meaning: { en: 'is for Allah', ur: 'اللہ کے لیے ہے' }, grammarRole: 'khabar', grammarExplanations: { en: 'Predicate.', ur: 'خبر۔' } },
      { id: '39:74:4', arabic: 'الَّذِي', transliteration: 'alladhī', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جس نے' }, grammarRole: 'sifa', grammarExplanations: { en: 'Relative as adjective.', ur: 'اسم موصول بطور صفت۔' } },
      { id: '39:74:5', arabic: 'صَدَقَنَا', transliteration: 'ṣadaqanā', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ص د ق', meaning: { en: 'fulfilled for us', ur: 'سچا کیا ہمارے ساتھ' }, grammarRole: 'sila', grammarExplanations: { en: 'Relative clause.', ur: 'صلہ۔' } },
      { id: '39:74:6', arabic: 'وَعْدَهُ', transliteration: 'waʿdahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'و ع د', meaning: { en: 'His promise', ur: 'اپنا وعدہ' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:74:7', arabic: 'وَأَوْرَثَنَا', transliteration: 'wa-awrathanā', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'و ر ث', meaning: { en: 'and granted us inheritance', ur: 'اور وارث بنایا ہمیں' }, grammarRole: 'verb', grammarExplanations: { en: 'Form IV perfect + pronoun.', ur: 'فعل ماضی باب إفعال + ضمیر۔' } },
      { id: '39:74:8', arabic: 'الْأَرْضَ', transliteration: 'al-arḍa', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the land (of Paradise)', ur: 'زمین' }, grammarRole: 'mafool_bihi',
    structure: { relationships: [{ from: 2, to: 3, label: 'مبتدأ + خبر' }, { from: 4, to: 5, label: 'موصول + صلة' }, { from: 5, to: 6, label: 'فعل + مفعول به' }] },
        grammarExplanations: { en: 'Direct object of inheritance.', ur: 'مفعول بہ وراثت کا۔' } }
    ]
  },

  75: { ayahNumber: 75, text: "وَتَرَى الْمَلَائِكَةَ حَافِّينَ مِنْ حَوْلِ الْعَرْشِ يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ",
    words: [
      { id: '39:75:1', arabic: 'وَتَرَى', transliteration: 'wa-tarā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ر أ ي', meaning: { en: 'And you will see', ur: 'اور تم دیکھو گے' }, grammarRole: 'verb', grammarExplanations: { en: 'Conjunction + imperfect.', ur: 'واو + فعل مضارع۔' } },
      { id: '39:75:2', arabic: 'الْمَلَائِكَةَ', transliteration: 'al-malā\'ikata', pos: ['N'], posLabel: 'N', root: 'م ل ك', meaning: { en: 'the angels', ur: 'فرشتوں کو' }, grammarRole: 'mafool_bihi', grammarExplanations: { en: 'Direct object.', ur: 'مفعول بہ۔' } },
      { id: '39:75:3', arabic: 'حَافِّينَ', transliteration: 'ḥāffīna', pos: ['N'], posLabel: 'N', root: 'ح ف ف', meaning: { en: 'surrounding', ur: 'گھیرے ہوئے' }, grammarRole: 'haal', grammarExplanations: { en: 'State - active participle plural.', ur: 'حال - اسم فاعل جمع۔' } },
      { id: '39:75:4', arabic: 'مِنْ', transliteration: 'min', pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf_jarr', grammarExplanations: { en: 'Preposition.', ur: 'حرف جر۔' } },
      { id: '39:75:5', arabic: 'حَوْلِ', transliteration: 'ḥawli', pos: ['N'], posLabel: 'N', root: 'ح و ل', meaning: { en: 'around', ur: 'ارد گرد' }, grammarRole: 'majroor', grammarExplanations: { en: 'Genitive.', ur: 'مجرور۔' } },
      { id: '39:75:6', arabic: 'الْعَرْشِ', transliteration: 'al-ʿarshi', pos: ['N'], posLabel: 'N', root: 'ع ر ش', meaning: { en: 'the Throne', ur: 'عرش' }, grammarRole: 'mudaf_ilayh', grammarExplanations: { en: 'Genitive.', ur: 'مضاف إليه۔' } },
      { id: '39:75:7', arabic: 'يُسَبِّحُونَ', transliteration: 'yusabbiḥūna', pos: ['V'], posLabel: 'V', root: 'س ب ح', meaning: { en: 'glorifying', ur: 'تسبیح کرتے ہوئے' }, grammarRole: 'haal', grammarExplanations: { en: 'State clause - Form II imperfect.', ur: 'جملہ حالیہ - فعل مضارع باب تفعیل۔' } },
      { id: '39:75:8', arabic: 'بِحَمْدِ', transliteration: 'bi-ḥamdi', pos: ['PREP', 'N'], posLabel: 'PREP+N', root: 'ح م د', meaning: { en: 'with praise', ur: 'حمد کے ساتھ' }, grammarRole: 'jarr_majroor', grammarExplanations: { en: 'Preposition + genitive.', ur: 'حرف جر + مجرور۔' } },
      { id: '39:75:9', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'of their Lord', ur: 'اپنے رب کی' }, grammarRole: 'mudaf_ilayh',
    structure: { relationships: [{ from: 1, to: 2, label: 'فعل + مفعول به' }, { from: 5, to: 6, label: 'مضاف + مضاف إليه' }, { from: 8, to: 9, label: 'مضاف + مضاف إليه' }] },
        grammarExplanations: { en: 'Genitive + pronoun.', ur: 'مضاف إليه + ضمیر۔' } }
    ]
  }
};

export default TREEBANK_DATA;
