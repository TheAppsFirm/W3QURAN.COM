/**
 * Surah Al-Furqan (The Criterion) - Surah 25
 * Quranic Arabic Treebank Data
 * First 10 Ayahs - Complete word-by-word grammatical analysis
 *
 * Theme: Quran as criterion between truth and falsehood, rejection of false gods
 * Revelation: Makkan
 * Special: Named after the Quran's role as الفُرقان - the distinguisher
 */

const SURAH_25_TREEBANK = {
  1: { // Ayah 1: تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ عَلَىٰ عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا
    text: 'تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ عَلَىٰ عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا',
    translation: {
      en: 'Blessed is He who sent down the Criterion upon His servant that he may be to the worlds a warner.',
      ur: 'بابرکت ہے وہ ذات جس نے اپنے بندے پر فرقان اتارا تاکہ وہ تمام جہانوں کے لیے ڈرانے والا ہو',
    },
    words: [
      {
        id: '25:1:1',
        arabic: 'تَبَارَكَ',
        transliteration: 'tabaaraka',
        pos: ['V'],
        posLabel: 'V',
        root: 'ب ر ك',
        meaning: {
          en: 'Blessed is',
          ur: 'بابرکت ہے',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb Form VI - only used for Allah. Indicates perpetual blessing and exaltation.',
          ur: 'فعل ماضی باب تفاعل - صرف اللہ کے لیے مستعمل۔ دائمی برکت اور بلندی۔',
        },
      },
      {
        id: '25:1:2',
        arabic: 'الَّذِي',
        transliteration: 'alladhee',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'He who',
          ur: 'وہ جس نے',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Relative pronoun as subject of تَبَارَكَ. Refers to Allah.',
          ur: 'اسم موصول - فاعل۔ اللہ کی طرف اشارہ۔',
        },
      },
      {
        id: '25:1:3',
        arabic: 'نَزَّلَ',
        transliteration: 'nazzala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        meaning: {
          en: 'Sent down',
          ur: 'نازل کیا',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause verb - Form II perfect. نَزَّلَ implies gradual sending down (vs أَنْزَلَ at once).',
          ur: 'صلہ - فعل ماضی باب تفعیل۔ نَزَّلَ بتدریج نزول (أَنْزَلَ یکبارگی کے برعکس)۔',
        },
      },
      {
        id: '25:1:4',
        arabic: 'الْفُرْقَانَ',
        transliteration: 'al-furqaana',
        pos: ['N'],
        posLabel: 'N',
        root: 'ف ر ق',
        meaning: {
          en: 'The Criterion',
          ur: 'فرقان',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative. Name of Quran meaning "that which distinguishes truth from falsehood".',
          ur: 'مفعول بہ - منصوب۔ قرآن کا نام یعنی حق و باطل میں فرق کرنے والا۔',
        },
      },
      {
        id: '25:1:5',
        arabic: 'عَلَىٰ',
        transliteration: "'alaa",
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'Upon',
          ur: 'پر',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition of direction/destination.',
          ur: 'حرف جار - سمت/مقصد۔',
        },
      },
      {
        id: '25:1:6',
        arabic: 'عَبْدِهِ',
        transliteration: "'abdihi",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ب د',
        meaning: {
          en: 'His servant',
          ur: 'اپنے بندے',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive + possessive pronoun. عَبْد is honorific title for Prophet Muhammad ﷺ.',
          ur: 'مجرور + ضمیر ملکیتی۔ عَبْد نبی ﷺ کا اعزازی لقب۔',
        },
      },
      {
        id: '25:1:7',
        arabic: 'لِيَكُونَ',
        transliteration: 'liyakoona',
        pos: ['P', 'V'],
        posLabel: 'P+V',
        root: 'ك و ن',
        meaning: {
          en: 'That he may be',
          ur: 'تاکہ وہ ہو',
        },
        grammarRole: 'talil',
        grammarExplanations: {
          en: 'Purpose لِ + subjunctive كان. Purpose of revelation.',
          ur: 'لام تعلیل + فعل مضارع منصوب۔ نزول کا مقصد۔',
        },
      },
      {
        id: '25:1:8',
        arabic: 'لِلْعَالَمِينَ',
        transliteration: "lil-'aalameena",
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ع ل م',
        meaning: {
          en: 'To the worlds',
          ur: 'تمام جہانوں کے لیے',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + genitive plural. Universal message to all creation.',
          ur: 'حرف جار + مجرور جمع۔ تمام مخلوقات کے لیے عالمگیر پیغام۔',
        },
      },
      {
        id: '25:1:9',
        arabic: 'نَذِيرًا',
        transliteration: 'nadheera',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ذ ر',
        meaning: {
          en: 'A warner',
          ur: 'ڈرانے والا',
        },
        grammarRole: 'khabar-yakun',
        grammarExplanations: {
          en: 'Predicate of يَكُونَ - accusative. Pattern فَعِيل for active meaning.',
          ur: 'خبر يَكُونَ - منصوب۔ وزن فَعِيل فاعل کے معنی میں۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 2, to: 3, label: 'موصول + صلة' },
          { from: 5, to: 6, label: 'جار + مجرور' },
        ],
    },
  },

  2: { // Ayah 2: الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَلَمْ يَتَّخِذْ وَلَدًا
    text: 'الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَلَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُن لَّهُ شَرِيكٌ فِي الْمُلْكِ وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا',
    translation: {
      en: 'He to whom belongs the dominion of the heavens and the earth, who has not taken a son and has no partner in dominion, and has created each thing and determined it with precision.',
      ur: 'جس کی بادشاہی آسمانوں اور زمین پر ہے اور اس نے کوئی بیٹا نہیں بنایا اور بادشاہی میں اس کا کوئی شریک نہیں اور اس نے ہر چیز کو پیدا کیا اور اسے ایک اندازے پر ٹھہرایا',
    },
    words: [
      {
        id: '25:2:1',
        arabic: 'الَّذِي',
        transliteration: 'alladhee',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'He to whom',
          ur: 'جس کی',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Relative pronoun - describes Allah mentioned in previous verse.',
          ur: 'اسم موصول - پچھلی آیت میں مذکور اللہ کی صفت۔',
        },
      },
      {
        id: '25:2:2',
        arabic: 'لَهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'To Him belongs',
          ur: 'اسی کی ہے',
        },
        grammarRole: 'khabar-muqaddam',
        grammarExplanations: {
          en: 'Advanced predicate - possession expressed with لِ.',
          ur: 'خبر مقدم - لام ملکیت۔',
        },
      },
      {
        id: '25:2:3',
        arabic: 'مُلْكُ',
        transliteration: 'mulku',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل ك',
        meaning: {
          en: 'The dominion',
          ur: 'بادشاہی',
        },
        grammarRole: 'mubtada-muakhkhar',
        grammarExplanations: {
          en: 'Delayed subject - nominative construct.',
          ur: 'مبتدأ مؤخر - مرفوع مضاف۔',
        },
      },
      {
        id: '25:2:4',
        arabic: 'السَّمَاوَاتِ',
        transliteration: 'as-samaawaati',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: {
          en: 'Of the heavens',
          ur: 'آسمانوں کی',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive plural in construct.',
          ur: 'مضاف الیہ جمع۔',
        },
      },
      {
        id: '25:2:5',
        arabic: 'وَالْأَرْضِ',
        transliteration: "wal-ardi",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'أ ر ض',
        meaning: {
          en: 'And the earth',
          ur: 'اور زمین',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated genitive.',
          ur: 'معطوف مجرور۔',
        },
      },
      {
        id: '25:2:6',
        arabic: 'وَلَمْ',
        transliteration: 'walam',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And has not',
          ur: 'اور نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Conjunction + negative particle for past.',
          ur: 'واو + حرف نفی ماضی۔',
        },
      },
      {
        id: '25:2:7',
        arabic: 'يَتَّخِذْ',
        transliteration: 'yattakhidh',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ خ ذ',
        meaning: {
          en: 'Taken',
          ur: 'بنایا',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Jussive verb Form VIII - "to take/adopt".',
          ur: 'فعل مضارع مجزوم باب افتعال - اختیار کرنا۔',
        },
      },
      {
        id: '25:2:8',
        arabic: 'وَلَدًا',
        transliteration: 'waladan',
        pos: ['N'],
        posLabel: 'N',
        root: 'و ل د',
        meaning: {
          en: 'A son/child',
          ur: 'بیٹا/اولاد',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative indefinite. Refutes Christian and pagan claims.',
          ur: 'مفعول بہ - منصوب نکرہ۔ نصاریٰ اور مشرکین کے دعوے کی تردید۔',
        },
      },
      {
        id: '25:2:9',
        arabic: 'وَلَمْ',
        transliteration: 'walam',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہ',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Negation for second attribute.',
          ur: 'دوسری صفت کی نفی۔',
        },
      },
      {
        id: '25:2:10',
        arabic: 'يَكُن',
        transliteration: 'yakun',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'There be',
          ur: 'ہو',
        },
        grammarRole: 'fil-naqis',
        grammarExplanations: {
          en: 'Jussive كان.',
          ur: 'کان مجزوم۔',
        },
      },
      {
        id: '25:2:11',
        arabic: 'لَّهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'For Him',
          ur: 'اس کا',
        },
        grammarRole: 'khabar-kana',
        grammarExplanations: {
          en: 'Predicate of كان.',
          ur: 'خبر کان۔',
        },
      },
      {
        id: '25:2:12',
        arabic: 'شَرِيكٌ',
        transliteration: 'shareekun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ر ك',
        meaning: {
          en: 'A partner',
          ur: 'شریک',
        },
        grammarRole: 'ism-kana',
        grammarExplanations: {
          en: 'Subject of كان - nominative.',
          ur: 'اسم کان - مرفوع۔',
        },
      },
      {
        id: '25:2:13',
        arabic: 'فِي',
        transliteration: 'fee',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'In',
          ur: 'میں',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition.',
          ur: 'حرف جار۔',
        },
      },
      {
        id: '25:2:14',
        arabic: 'الْمُلْكِ',
        transliteration: 'al-mulki',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل ك',
        meaning: {
          en: 'The dominion',
          ur: 'بادشاہی',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - no partner in sovereignty.',
          ur: 'مجرور - حکومت میں کوئی شریک نہیں۔',
        },
      },
      {
        id: '25:2:15',
        arabic: 'وَخَلَقَ',
        transliteration: 'wakhalaqa',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'خ ل ق',
        meaning: {
          en: 'And He created',
          ur: 'اور اس نے پیدا کیا',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + perfect verb.',
          ur: 'واو + فعل ماضی۔',
        },
      },
      {
        id: '25:2:16',
        arabic: 'كُلَّ',
        transliteration: 'kulla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل ل',
        meaning: {
          en: 'Each/Every',
          ur: 'ہر',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative construct.',
          ur: 'مفعول بہ - منصوب مضاف۔',
        },
      },
      {
        id: '25:2:17',
        arabic: 'شَيْءٍ',
        transliteration: "shay'in",
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ي أ',
        meaning: {
          en: 'Thing',
          ur: 'چیز',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive - everything without exception.',
          ur: 'مضاف الیہ - بلا استثناء ہر چیز۔',
        },
      },
      {
        id: '25:2:18',
        arabic: 'فَقَدَّرَهُ',
        transliteration: 'faqaddarahu',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ق د ر',
        meaning: {
          en: 'And determined it',
          ur: 'اور اسے مقرر کیا',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Result فَ + Form II perfect + pronoun. قَدَّرَ is precise measurement/decree.',
          ur: 'فاء + فعل ماضی باب تفعیل + ضمیر۔ قَدَّرَ درست اندازہ/تقدیر۔',
        },
      },
      {
        id: '25:2:19',
        arabic: 'تَقْدِيرًا',
        transliteration: 'taqdeera',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق د ر',
        meaning: {
          en: 'With precise determination',
          ur: 'اندازے کے ساتھ',
        },
        grammarRole: 'mafool-mutlaq',
        grammarExplanations: {
          en: 'Absolute object (مفعول مطلق) - emphasizes perfection of decree.',
          ur: 'مفعول مطلق - تقدیر کی کاملیت پر زور۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
          { from: 6, to: 7, label: 'نفی + فعل' },
          { from: 9, to: 10, label: 'نفی + فعل' },
          { from: 13, to: 14, label: 'جار + مجرور' },
          { from: 15, to: 16, label: 'عطف' },
          { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
          { from: 18, to: 19, label: 'عطف' },
        ],
    },
  },

  3: { // Ayah 3: وَاتَّخَذُوا مِن دُونِهِ آلِهَةً لَّا يَخْلُقُونَ شَيْئًا وَهُمْ يُخْلَقُونَ
    text: 'وَاتَّخَذُوا مِن دُونِهِ آلِهَةً لَّا يَخْلُقُونَ شَيْئًا وَهُمْ يُخْلَقُونَ وَلَا يَمْلِكُونَ لِأَنفُسِهِمْ ضَرًّا وَلَا نَفْعًا وَلَا يَمْلِكُونَ مَوْتًا وَلَا حَيَاةً وَلَا نُشُورًا',
    translation: {
      en: 'But they have taken besides Him gods which create nothing and are themselves created, and possess not for themselves any harm or benefit, and possess not death or life or resurrection.',
      ur: 'اور انہوں نے اس کے سوا معبود بنا لیے جو کچھ پیدا نہیں کرتے بلکہ خود پیدا کیے گئے ہیں اور اپنے لیے نقصان اور فائدے کے مالک نہیں اور نہ موت کے مالک ہیں نہ زندگی کے اور نہ دوبارہ اٹھانے کے',
    },
    words: [
      {
        id: '25:3:1',
        arabic: 'وَاتَّخَذُوا',
        transliteration: 'wattakhadhoo',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'أ خ ذ',
        meaning: {
          en: 'And they have taken',
          ur: 'اور انہوں نے بنا لیے',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Conjunction + Form VIII perfect - "they adopted/took".',
          ur: 'واو + فعل ماضی باب افتعال۔',
        },
      },
      {
        id: '25:3:2',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From',
          ur: 'سے',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition.',
          ur: 'حرف جار۔',
        },
      },
      {
        id: '25:3:3',
        arabic: 'دُونِهِ',
        transliteration: 'doonihi',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'د و ن',
        meaning: {
          en: 'Besides Him',
          ur: 'اس کے سوا',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - "from other than Him/besides Him".',
          ur: 'مجرور - اس کے علاوہ۔',
        },
      },
      {
        id: '25:3:4',
        arabic: 'آلِهَةً',
        transliteration: 'aalihatan',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'Gods',
          ur: 'معبود',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative plural of إِلٰه (god).',
          ur: 'مفعول بہ - إِلٰه کی جمع منصوب۔',
        },
      },
      {
        id: '25:3:5',
        arabic: 'لَّا',
        transliteration: 'laa',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Negation.',
          ur: 'نفی۔',
        },
      },
      {
        id: '25:3:6',
        arabic: 'يَخْلُقُونَ',
        transliteration: 'yakhluqoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ل ق',
        meaning: {
          en: 'They create',
          ur: 'وہ پیدا کرتے ہیں',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Descriptive clause verb - these "gods" cannot create.',
          ur: 'صفت جملہ - یہ "معبود" پیدا نہیں کر سکتے۔',
        },
      },
      {
        id: '25:3:7',
        arabic: 'شَيْئًا',
        transliteration: "shay'an",
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ي أ',
        meaning: {
          en: 'Anything',
          ur: 'کچھ بھی',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative indefinite with negation = nothing at all.',
          ur: 'مفعول بہ - نفی کے ساتھ نکرہ = کچھ بھی نہیں۔',
        },
      },
      {
        id: '25:3:8',
        arabic: 'وَهُمْ',
        transliteration: 'wahum',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'While they',
          ur: 'اور وہ',
        },
        grammarRole: 'hal',
        grammarExplanations: {
          en: 'Circumstantial clause - while they themselves...',
          ur: 'جملہ حالیہ - جبکہ وہ خود...',
        },
      },
      {
        id: '25:3:9',
        arabic: 'يُخْلَقُونَ',
        transliteration: 'yukhlaqoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ل ق',
        meaning: {
          en: 'Are created',
          ur: 'پیدا کیے جاتے ہیں',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Passive imperfect - irony: "gods" who are themselves created.',
          ur: 'فعل مجہول - طنز: خود "معبود" بھی مخلوق ہیں۔',
        },
      },
      {
        id: '25:3:10',
        arabic: 'وَلَا',
        transliteration: 'walaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہ',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Conjunction + negation - next deficiency.',
          ur: 'واو + نفی - اگلی کمی۔',
        },
      },
      {
        id: '25:3:11',
        arabic: 'يَمْلِكُونَ',
        transliteration: 'yamlikoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'م ل ك',
        meaning: {
          en: 'They possess/control',
          ur: 'مالک ہیں',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Imperfect verb - no control/ownership.',
          ur: 'فعل مضارع - کوئی ملکیت/اختیار نہیں۔',
        },
      },
      {
        id: '25:3:12',
        arabic: 'لِأَنفُسِهِمْ',
        transliteration: 'li-anfusihim',
        pos: ['P', 'N', 'PRON'],
        posLabel: 'P+N+PRON',
        root: 'ن ف س',
        meaning: {
          en: 'For themselves',
          ur: 'اپنے لیے',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + plural reflexive + pronoun.',
          ur: 'حرف جار + جمع نفس + ضمیر۔',
        },
      },
      {
        id: '25:3:13',
        arabic: 'ضَرًّا',
        transliteration: 'darran',
        pos: ['N'],
        posLabel: 'N',
        root: 'ض ر ر',
        meaning: {
          en: 'Harm',
          ur: 'نقصان',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative.',
          ur: 'مفعول بہ - منصوب۔',
        },
      },
      {
        id: '25:3:14',
        arabic: 'وَلَا',
        transliteration: 'walaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'Nor',
          ur: 'اور نہ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Coordination.',
          ur: 'عطف۔',
        },
      },
      {
        id: '25:3:15',
        arabic: 'نَفْعًا',
        transliteration: "naf'an",
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ف ع',
        meaning: {
          en: 'Benefit',
          ur: 'فائدہ',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated object.',
          ur: 'معطوف مفعول۔',
        },
      },
      {
        id: '25:3:16',
        arabic: 'وَلَا',
        transliteration: 'walaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہ',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Further negation.',
          ur: 'مزید نفی۔',
        },
      },
      {
        id: '25:3:17',
        arabic: 'يَمْلِكُونَ',
        transliteration: 'yamlikoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'م ل ك',
        meaning: {
          en: 'They possess',
          ur: 'مالک ہیں',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Repeated for emphasis - no control over fundamental matters.',
          ur: 'تاکید کے لیے دہرایا - بنیادی امور پر کوئی اختیار نہیں۔',
        },
      },
      {
        id: '25:3:18',
        arabic: 'مَوْتًا',
        transliteration: 'mawtan',
        pos: ['N'],
        posLabel: 'N',
        root: 'م و ت',
        meaning: {
          en: 'Death',
          ur: 'موت',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - no power over death.',
          ur: 'مفعول بہ - موت پر کوئی اختیار نہیں۔',
        },
      },
      {
        id: '25:3:19',
        arabic: 'وَلَا',
        transliteration: 'walaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'Nor',
          ur: 'اور نہ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Coordination.',
          ur: 'عطف۔',
        },
      },
      {
        id: '25:3:20',
        arabic: 'حَيَاةً',
        transliteration: 'hayaatan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ي ي',
        meaning: {
          en: 'Life',
          ur: 'زندگی',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated object - no power over life.',
          ur: 'معطوف - زندگی پر کوئی اختیار نہیں۔',
        },
      },
      {
        id: '25:3:21',
        arabic: 'وَلَا',
        transliteration: 'walaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'Nor',
          ur: 'اور نہ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Coordination.',
          ur: 'عطف۔',
        },
      },
      {
        id: '25:3:22',
        arabic: 'نُشُورًا',
        transliteration: 'nushoora',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ش ر',
        meaning: {
          en: 'Resurrection',
          ur: 'دوبارہ اٹھانا',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated object - no power over resurrection. Only Allah has these powers.',
          ur: 'معطوف - قیامت پر کوئی اختیار نہیں۔ صرف اللہ کے پاس یہ طاقتیں ہیں۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'نفی + فعل' },
          { from: 6, to: 8, label: 'حال' },
          { from: 10, to: 11, label: 'نفی + فعل' },
          { from: 14, to: 15, label: 'عطف' },
          { from: 16, to: 17, label: 'نفی + فعل' },
          { from: 19, to: 20, label: 'عطف' },
          { from: 21, to: 22, label: 'عطف' },
        ],
    },
  },

  4: { // Ayah 4: وَقَالَ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا إِفْكٌ افْتَرَاهُ
    text: 'وَقَالَ الَّذِينَ كَفَرُوا إِنْ هَٰذَا إِلَّا إِفْكٌ افْتَرَاهُ وَأَعَانَهُ عَلَيْهِ قَوْمٌ آخَرُونَ فَقَدْ جَاءُوا ظُلْمًا وَزُورًا',
    translation: {
      en: 'And those who disbelieve say, "This is nothing but a lie he invented, and other people assisted him in it." But they have committed injustice and falsehood.',
      ur: 'اور کافروں نے کہا یہ تو جھوٹ ہے جو اس نے گھڑ لیا ہے اور اس میں دوسرے لوگوں نے اس کی مدد کی ہے پس وہ ظلم اور جھوٹ لائے ہیں',
    },
    words: [
      {
        id: '25:4:1',
        arabic: 'وَقَالَ',
        transliteration: 'waqaala',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: {
          en: 'And said',
          ur: 'اور کہا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Conjunction + perfect verb - introduces disbelievers\' claim.',
          ur: 'واو + فعل ماضی - کفار کے دعوے کا آغاز۔',
        },
      },
      {
        id: '25:4:2',
        arabic: 'الَّذِينَ',
        transliteration: 'alladheena',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'Those who',
          ur: 'جو لوگ',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject - relative pronoun.',
          ur: 'فاعل - اسم موصول۔',
        },
      },
      {
        id: '25:4:3',
        arabic: 'كَفَرُوا',
        transliteration: 'kafaroo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ف ر',
        meaning: {
          en: 'Disbelieved',
          ur: 'کفر کیا',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause verb - perfect.',
          ur: 'صلہ - فعل ماضی۔',
        },
      },
      {
        id: '25:4:4',
        arabic: 'إِنْ',
        transliteration: 'in',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not/Nothing but',
          ur: 'نہیں/صرف',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Negation particle (إِنْ النافية) - used with إِلَّا for restriction.',
          ur: 'حرف نفی - إِلَّا کے ساتھ حصر کے لیے۔',
        },
      },
      {
        id: '25:4:5',
        arabic: 'هَٰذَا',
        transliteration: 'haathaa',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'This',
          ur: 'یہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative pronoun as subject - refers to Quran.',
          ur: 'اسم اشارہ مبتدأ - قرآن کی طرف۔',
        },
      },
      {
        id: '25:4:6',
        arabic: 'إِلَّا',
        transliteration: 'illaa',
        pos: ['RES'],
        posLabel: 'RES',
        root: null,
        meaning: {
          en: 'Except/But',
          ur: 'سوائے/مگر',
        },
        grammarRole: 'hasr',
        grammarExplanations: {
          en: 'Restriction - with إِنْ forms "nothing but".',
          ur: 'حصر - إِنْ کے ساتھ "صرف"۔',
        },
      },
      {
        id: '25:4:7',
        arabic: 'إِفْكٌ',
        transliteration: 'ifkun',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ف ك',
        meaning: {
          en: 'A lie/Falsehood',
          ur: 'جھوٹ/بہتان',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate - nominative. إِفْك is lie turned from truth.',
          ur: 'خبر - مرفوع۔ إِفْك حق سے پھرا ہوا جھوٹ۔',
        },
      },
      {
        id: '25:4:8',
        arabic: 'افْتَرَاهُ',
        transliteration: 'iftaraahu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ف ر ي',
        meaning: {
          en: 'He invented it',
          ur: 'اس نے گھڑ لیا',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Descriptive clause - Form VIII perfect + pronoun. Deliberate fabrication.',
          ur: 'صفت جملہ - باب افتعال + ضمیر۔ جان بوجھ کر گھڑنا۔',
        },
      },
      {
        id: '25:4:9',
        arabic: 'وَأَعَانَهُ',
        transliteration: "wa-a'aanahu",
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ع و ن',
        meaning: {
          en: 'And helped him',
          ur: 'اور اس کی مدد کی',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + Form IV perfect + pronoun.',
          ur: 'واو + فعل ماضی باب افعال + ضمیر۔',
        },
      },
      {
        id: '25:4:10',
        arabic: 'عَلَيْهِ',
        transliteration: "'alayhi",
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'In it',
          ur: 'اس میں',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun.',
          ur: 'حرف جار + ضمیر۔',
        },
      },
      {
        id: '25:4:11',
        arabic: 'قَوْمٌ',
        transliteration: 'qawmun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: 'A people',
          ur: 'لوگ',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject of أَعَانَ - nominative.',
          ur: 'فاعل - مرفوع۔',
        },
      },
      {
        id: '25:4:12',
        arabic: 'آخَرُونَ',
        transliteration: 'aakharoona',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'أ خ ر',
        meaning: {
          en: 'Others',
          ur: 'دوسرے',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective - nominative plural.',
          ur: 'صفت - جمع مرفوع۔',
        },
      },
      {
        id: '25:4:13',
        arabic: 'فَقَدْ',
        transliteration: 'faqad',
        pos: ['CONJ', 'PART'],
        posLabel: 'CONJ+PART',
        root: null,
        meaning: {
          en: 'Then certainly',
          ur: 'پس بیشک',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'Result فَ + emphasis قَدْ - Allah\'s response to their claim.',
          ur: 'فاء + قَدْ تحقیق - ان کے دعوے پر اللہ کا جواب۔',
        },
      },
      {
        id: '25:4:14',
        arabic: 'جَاءُوا',
        transliteration: "jaa'oo",
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ي أ',
        meaning: {
          en: 'They have committed/brought',
          ur: 'وہ لائے',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb - they have brought forth.',
          ur: 'فعل ماضی - وہ لے کر آئے۔',
        },
      },
      {
        id: '25:4:15',
        arabic: 'ظُلْمًا',
        transliteration: 'zulman',
        pos: ['N'],
        posLabel: 'N',
        root: 'ظ ل م',
        meaning: {
          en: 'Injustice',
          ur: 'ظلم',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative.',
          ur: 'مفعول بہ - منصوب۔',
        },
      },
      {
        id: '25:4:16',
        arabic: 'وَزُورًا',
        transliteration: 'wazoora',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ز و ر',
        meaning: {
          en: 'And falsehood',
          ur: 'اور جھوٹ',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated object - زُور is deliberate lie.',
          ur: 'معطوف - زُور جان بوجھ کر جھوٹ۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 2, to: 3, label: 'موصول + صلة' },
          { from: 5, to: 7, label: 'مبتدأ + خبر' },
          { from: 6, to: 7, label: 'حصر' },
          { from: 8, to: 11, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'عطف' },
          { from: 9, to: 11, label: 'فعل + فاعل' },
        ],
    },
  },

  5: { // Ayah 5: وَقَالُوا أَسَاطِيرُ الْأَوَّلِينَ اكْتَتَبَهَا
    text: 'وَقَالُوا أَسَاطِيرُ الْأَوَّلِينَ اكْتَتَبَهَا فَهِيَ تُمْلَىٰ عَلَيْهِ بُكْرَةً وَأَصِيلًا',
    translation: {
      en: 'And they say, "Legends of the former peoples which he has written down, and they are dictated to him morning and evening."',
      ur: 'اور کہتے ہیں یہ پہلے لوگوں کی کہانیاں ہیں جو اس نے لکھوا لی ہیں جو اسے صبح و شام لکھوائی جاتی ہیں',
    },
    words: [
      {
        id: '25:5:1',
        arabic: 'وَقَالُوا',
        transliteration: 'waqaaloo',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: {
          en: 'And they said',
          ur: 'اور انہوں نے کہا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Conjunction + perfect verb - another false claim.',
          ur: 'واو + فعل ماضی - اور ایک جھوٹا دعویٰ۔',
        },
      },
      {
        id: '25:5:2',
        arabic: 'أَسَاطِيرُ',
        transliteration: 'asaateeru',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ط ر',
        meaning: {
          en: 'Legends/Tales',
          ur: 'کہانیاں',
        },
        grammarRole: 'khabar-muqaddam',
        grammarExplanations: {
          en: 'Advanced predicate - nominative plural. أُسْطُورَة means myth/legend.',
          ur: 'خبر مقدم - جمع مرفوع۔ أُسْطُورَة قصہ/افسانہ۔',
        },
      },
      {
        id: '25:5:3',
        arabic: 'الْأَوَّلِينَ',
        transliteration: 'al-awwaleena',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'أ و ل',
        meaning: {
          en: 'Of the former peoples',
          ur: 'پہلے لوگوں کی',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive plural - ancient stories.',
          ur: 'مضاف الیہ جمع - پرانی کہانیاں۔',
        },
      },
      {
        id: '25:5:4',
        arabic: 'اكْتَتَبَهَا',
        transliteration: 'iktatabahaa',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ك ت ب',
        meaning: {
          en: 'He has had them written',
          ur: 'اس نے لکھوا لیں',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Descriptive clause - Form VIII perfect + pronoun. Having someone write for him.',
          ur: 'صفت جملہ - باب افتعال + ضمیر۔ کسی سے لکھوانا۔',
        },
      },
      {
        id: '25:5:5',
        arabic: 'فَهِيَ',
        transliteration: 'fahiya',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'So they',
          ur: 'پس وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Result فَ + feminine pronoun referring to أَسَاطِير.',
          ur: 'فاء + ضمیر مؤنث أَسَاطِير کی طرف۔',
        },
      },
      {
        id: '25:5:6',
        arabic: 'تُمْلَىٰ',
        transliteration: 'tumlaa',
        pos: ['V'],
        posLabel: 'V',
        root: 'م ل و',
        meaning: {
          en: 'Are dictated',
          ur: 'لکھوائی جاتی ہیں',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Passive imperfect - dictated to him.',
          ur: 'فعل مجہول مضارع - اسے لکھوائی جاتی ہیں۔',
        },
      },
      {
        id: '25:5:7',
        arabic: 'عَلَيْهِ',
        transliteration: "'alayhi",
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'To him',
          ur: 'اسے',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun - to the Prophet.',
          ur: 'حرف جار + ضمیر - نبی کو۔',
        },
      },
      {
        id: '25:5:8',
        arabic: 'بُكْرَةً',
        transliteration: 'bukratan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ب ك ر',
        meaning: {
          en: 'Morning',
          ur: 'صبح',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Adverb of time - accusative.',
          ur: 'ظرف زمان - منصوب۔',
        },
      },
      {
        id: '25:5:9',
        arabic: 'وَأَصِيلًا',
        transliteration: 'wa-aseelan',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'أ ص ل',
        meaning: {
          en: 'And evening',
          ur: 'اور شام',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated adverb - meaning constantly.',
          ur: 'معطوف - مطلب مسلسل۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
          { from: 5, to: 6, label: 'مبتدأ + خبر' },
        ],
    },
  },

  6: { // Ayah 6: قُلْ أَنزَلَهُ الَّذِي يَعْلَمُ السِّرَّ فِي السَّمَاوَاتِ وَالْأَرْضِ
    text: 'قُلْ أَنزَلَهُ الَّذِي يَعْلَمُ السِّرَّ فِي السَّمَاوَاتِ وَالْأَرْضِ إِنَّهُ كَانَ غَفُورًا رَّحِيمًا',
    translation: {
      en: 'Say, "It has been sent down by He who knows the secret in the heavens and the earth. Indeed, He is ever Forgiving and Merciful."',
      ur: 'کہہ دیجیے اسے اس نے نازل کیا ہے جو آسمانوں اور زمین کے بھید جانتا ہے بیشک وہ بخشنے والا مہربان ہے',
    },
    words: [
      {
        id: '25:6:1',
        arabic: 'قُلْ',
        transliteration: 'qul',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: 'Say',
          ur: 'کہہ دیجیے',
        },
        grammarRole: 'fil-amr',
        grammarExplanations: {
          en: 'Imperative - command to Prophet to respond.',
          ur: 'فعل امر - نبی کو جواب دینے کا حکم۔',
        },
      },
      {
        id: '25:6:2',
        arabic: 'أَنزَلَهُ',
        transliteration: 'anzalahu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ن ز ل',
        meaning: {
          en: 'Sent it down',
          ur: 'اسے نازل کیا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Form IV perfect + pronoun referring to Quran.',
          ur: 'فعل ماضی باب افعال + ضمیر قرآن کی طرف۔',
        },
      },
      {
        id: '25:6:3',
        arabic: 'الَّذِي',
        transliteration: 'alladhee',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'He who',
          ur: 'وہ جو',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject - relative pronoun referring to Allah.',
          ur: 'فاعل - اسم موصول اللہ کی طرف۔',
        },
      },
      {
        id: '25:6:4',
        arabic: 'يَعْلَمُ',
        transliteration: "ya'lamu",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        meaning: {
          en: 'Knows',
          ur: 'جانتا ہے',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause verb - imperfect, continuous knowledge.',
          ur: 'صلہ - فعل مضارع، جاری علم۔',
        },
      },
      {
        id: '25:6:5',
        arabic: 'السِّرَّ',
        transliteration: 'as-sirra',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ر ر',
        meaning: {
          en: 'The secret',
          ur: 'بھید',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative. Every hidden thing.',
          ur: 'مفعول بہ - منصوب۔ ہر چھپی ہوئی چیز۔',
        },
      },
      {
        id: '25:6:6',
        arabic: 'فِي',
        transliteration: 'fee',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'In',
          ur: 'میں',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition.',
          ur: 'حرف جار۔',
        },
      },
      {
        id: '25:6:7',
        arabic: 'السَّمَاوَاتِ',
        transliteration: 'as-samaawaati',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: {
          en: 'The heavens',
          ur: 'آسمانوں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive plural.',
          ur: 'مجرور جمع۔',
        },
      },
      {
        id: '25:6:8',
        arabic: 'وَالْأَرْضِ',
        transliteration: "wal-ardi",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'أ ر ض',
        meaning: {
          en: 'And the earth',
          ur: 'اور زمین',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated genitive.',
          ur: 'معطوف مجرور۔',
        },
      },
      {
        id: '25:6:9',
        arabic: 'إِنَّهُ',
        transliteration: 'innahu',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: {
          en: 'Indeed He',
          ur: 'بیشک وہ',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'Emphatic particle + pronoun.',
          ur: 'حرف توکید + ضمیر۔',
        },
      },
      {
        id: '25:6:10',
        arabic: 'كَانَ',
        transliteration: 'kaana',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'Is ever',
          ur: 'ہے',
        },
        grammarRole: 'fil-naqis',
        grammarExplanations: {
          en: 'Incomplete verb - eternal attributes.',
          ur: 'فعل ناقص - ابدی صفات۔',
        },
      },
      {
        id: '25:6:11',
        arabic: 'غَفُورًا',
        transliteration: 'ghafooran',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'غ ف ر',
        meaning: {
          en: 'Forgiving',
          ur: 'بخشنے والا',
        },
        grammarRole: 'khabar-kana-awwal',
        grammarExplanations: {
          en: 'First predicate of كان - accusative.',
          ur: 'خبر کان اول - منصوب۔',
        },
      },
      {
        id: '25:6:12',
        arabic: 'رَّحِيمًا',
        transliteration: 'raheeman',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ر ح م',
        meaning: {
          en: 'Merciful',
          ur: 'مہربان',
        },
        grammarRole: 'khabar-kana-thani',
        grammarExplanations: {
          en: 'Second predicate of كان.',
          ur: 'خبر کان ثانی۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 3, label: 'فعل + فاعل' },
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'موصول + صلة' },
          { from: 6, to: 7, label: 'جار + مجرور' },
        ],
    },
  },

  7: { // Ayah 7: وَقَالُوا مَالِ هَٰذَا الرَّسُولِ يَأْكُلُ الطَّعَامَ وَيَمْشِي فِي الْأَسْوَاقِ
    text: 'وَقَالُوا مَالِ هَٰذَا الرَّسُولِ يَأْكُلُ الطَّعَامَ وَيَمْشِي فِي الْأَسْوَاقِ لَوْلَا أُنزِلَ إِلَيْهِ مَلَكٌ فَيَكُونَ مَعَهُ نَذِيرًا',
    translation: {
      en: 'And they say, "What is this messenger that eats food and walks in the markets? Why was not an angel sent down to him to be with him a warner?"',
      ur: 'اور کہتے ہیں اس رسول کو کیا ہوا ہے کہ کھانا کھاتا ہے اور بازاروں میں چلتا ہے اس کے پاس کوئی فرشتہ کیوں نہیں اتارا گیا جو اس کے ساتھ ڈرانے والا ہوتا',
    },
    words: [
      {
        id: '25:7:1',
        arabic: 'وَقَالُوا',
        transliteration: 'waqaaloo',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: {
          en: 'And they said',
          ur: 'اور انہوں نے کہا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Conjunction + perfect verb - another objection.',
          ur: 'واو + فعل ماضی - اور ایک اعتراض۔',
        },
      },
      {
        id: '25:7:2',
        arabic: 'مَالِ',
        transliteration: 'maali',
        pos: ['INTG', 'P'],
        posLabel: 'INTG+P',
        root: null,
        meaning: {
          en: 'What is with',
          ur: 'کیا ہوا',
        },
        grammarRole: 'istifham',
        grammarExplanations: {
          en: 'Interrogative مَا + preposition لِ - rhetorical "what is with?"',
          ur: 'ما استفہامیہ + لام - کیا بات ہے؟',
        },
      },
      {
        id: '25:7:3',
        arabic: 'هَٰذَا',
        transliteration: 'haathaa',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'This',
          ur: 'اس',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative pronoun.',
          ur: 'اسم اشارہ۔',
        },
      },
      {
        id: '25:7:4',
        arabic: 'الرَّسُولِ',
        transliteration: 'ar-rasooli',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر س ل',
        meaning: {
          en: 'The messenger',
          ur: 'رسول',
        },
        grammarRole: 'badal',
        grammarExplanations: {
          en: 'Substitute - genitive due to preposition in مَالِ.',
          ur: 'بدل - مجرور۔',
        },
      },
      {
        id: '25:7:5',
        arabic: 'يَأْكُلُ',
        transliteration: "ya'kulu",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ك ل',
        meaning: {
          en: 'He eats',
          ur: 'کھاتا ہے',
        },
        grammarRole: 'hal',
        grammarExplanations: {
          en: 'Circumstantial clause - state of the messenger.',
          ur: 'حال - رسول کی کیفیت۔',
        },
      },
      {
        id: '25:7:6',
        arabic: 'الطَّعَامَ',
        transliteration: 'at-ta\'aama',
        pos: ['N'],
        posLabel: 'N',
        root: 'ط ع م',
        meaning: {
          en: 'Food',
          ur: 'کھانا',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative.',
          ur: 'مفعول بہ - منصوب۔',
        },
      },
      {
        id: '25:7:7',
        arabic: 'وَيَمْشِي',
        transliteration: 'wayamshee',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'م ش ي',
        meaning: {
          en: 'And walks',
          ur: 'اور چلتا ہے',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Coordinated verb.',
          ur: 'معطوف فعل۔',
        },
      },
      {
        id: '25:7:8',
        arabic: 'فِي',
        transliteration: 'fee',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'In',
          ur: 'میں',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition.',
          ur: 'حرف جار۔',
        },
      },
      {
        id: '25:7:9',
        arabic: 'الْأَسْوَاقِ',
        transliteration: 'al-aswaaq',
        pos: ['N'],
        posLabel: 'N',
        root: 'س و ق',
        meaning: {
          en: 'The markets',
          ur: 'بازاروں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive plural - public marketplaces.',
          ur: 'مجرور جمع - عوامی بازار۔',
        },
      },
      {
        id: '25:7:10',
        arabic: 'لَوْلَا',
        transliteration: 'lawlaa',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: {
          en: 'Why not',
          ur: 'کیوں نہیں',
        },
        grammarRole: 'tahdhid',
        grammarExplanations: {
          en: 'Incitement particle - "why wasn\'t".',
          ur: 'حرف تحضیض - کیوں نہیں۔',
        },
      },
      {
        id: '25:7:11',
        arabic: 'أُنزِلَ',
        transliteration: 'unzila',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        meaning: {
          en: 'Was sent down',
          ur: 'اتارا گیا',
        },
        grammarRole: 'fil-madi-majhul',
        grammarExplanations: {
          en: 'Passive perfect Form IV.',
          ur: 'فعل ماضی مجہول باب افعال۔',
        },
      },
      {
        id: '25:7:12',
        arabic: 'إِلَيْهِ',
        transliteration: 'ilayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'To him',
          ur: 'اس کی طرف',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun.',
          ur: 'حرف جار + ضمیر۔',
        },
      },
      {
        id: '25:7:13',
        arabic: 'مَلَكٌ',
        transliteration: 'malakun',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل ك',
        meaning: {
          en: 'An angel',
          ur: 'فرشتہ',
        },
        grammarRole: 'naib-fail',
        grammarExplanations: {
          en: 'Deputy subject of passive verb.',
          ur: 'نائب فاعل۔',
        },
      },
      {
        id: '25:7:14',
        arabic: 'فَيَكُونَ',
        transliteration: 'fayakoona',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ك و ن',
        meaning: {
          en: 'To be',
          ur: 'تاکہ ہو',
        },
        grammarRole: 'natija',
        grammarExplanations: {
          en: 'Result فَ + subjunctive كان - intended result.',
          ur: 'فاء سببیہ + فعل منصوب۔',
        },
      },
      {
        id: '25:7:15',
        arabic: 'مَعَهُ',
        transliteration: "ma'ahu",
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'With him',
          ur: 'اس کے ساتھ',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Adverb of place + pronoun.',
          ur: 'ظرف مکان + ضمیر۔',
        },
      },
      {
        id: '25:7:16',
        arabic: 'نَذِيرًا',
        transliteration: 'nadheera',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ذ ر',
        meaning: {
          en: 'A warner',
          ur: 'ڈرانے والا',
        },
        grammarRole: 'khabar-yakun',
        grammarExplanations: {
          en: 'Predicate of يَكُونَ - accusative.',
          ur: 'خبر يَكُونَ - منصوب۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 5, label: 'حال' },
          { from: 2, to: 3, label: 'استفهام' },
          { from: 7, to: 8, label: 'عطف' },
          { from: 8, to: 9, label: 'جار + مجرور' },
        ],
    },
  },

  8: { // Ayah 8: أَوْ يُلْقَىٰ إِلَيْهِ كَنزٌ أَوْ تَكُونُ لَهُ جَنَّةٌ يَأْكُلُ مِنْهَا
    text: 'أَوْ يُلْقَىٰ إِلَيْهِ كَنزٌ أَوْ تَكُونُ لَهُ جَنَّةٌ يَأْكُلُ مِنْهَا وَقَالَ الظَّالِمُونَ إِن تَتَّبِعُونَ إِلَّا رَجُلًا مَّسْحُورًا',
    translation: {
      en: 'Or there is thrown to him a treasure or he has a garden from which he eats. And the wrongdoers say, "You follow not but a man affected by magic."',
      ur: 'یا اسے کوئی خزانہ ملتا یا اس کا کوئی باغ ہوتا جس سے کھاتا اور ظالموں نے کہا تم تو ایک جادو زدہ آدمی کی پیروی کر رہے ہو',
    },
    words: [
      {
        id: '25:8:1',
        arabic: 'أَوْ',
        transliteration: 'aw',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Or',
          ur: 'یا',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Disjunctive - alternative demand.',
          ur: 'حرف عطف تخییر - متبادل مطالبہ۔',
        },
      },
      {
        id: '25:8:2',
        arabic: 'يُلْقَىٰ',
        transliteration: 'yulqaa',
        pos: ['V'],
        posLabel: 'V',
        root: 'ل ق ي',
        meaning: {
          en: 'Is thrown',
          ur: 'دیا جائے',
        },
        grammarRole: 'fil-mudari-majhul',
        grammarExplanations: {
          en: 'Passive imperfect - treasure given to him.',
          ur: 'فعل مضارع مجہول - خزانہ ملے۔',
        },
      },
      {
        id: '25:8:3',
        arabic: 'إِلَيْهِ',
        transliteration: 'ilayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'To him',
          ur: 'اسے',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun.',
          ur: 'حرف جار + ضمیر۔',
        },
      },
      {
        id: '25:8:4',
        arabic: 'كَنزٌ',
        transliteration: 'kanzun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ن ز',
        meaning: {
          en: 'A treasure',
          ur: 'خزانہ',
        },
        grammarRole: 'naib-fail',
        grammarExplanations: {
          en: 'Deputy subject - nominative.',
          ur: 'نائب فاعل - مرفوع۔',
        },
      },
      {
        id: '25:8:5',
        arabic: 'أَوْ',
        transliteration: 'aw',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Or',
          ur: 'یا',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Another alternative.',
          ur: 'اور متبادل۔',
        },
      },
      {
        id: '25:8:6',
        arabic: 'تَكُونُ',
        transliteration: 'takoonu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'He has',
          ur: 'ہو',
        },
        grammarRole: 'fil-naqis',
        grammarExplanations: {
          en: 'Incomplete verb.',
          ur: 'فعل ناقص۔',
        },
      },
      {
        id: '25:8:7',
        arabic: 'لَهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'For him',
          ur: 'اس کا',
        },
        grammarRole: 'khabar-kana',
        grammarExplanations: {
          en: 'Predicate.',
          ur: 'خبر۔',
        },
      },
      {
        id: '25:8:8',
        arabic: 'جَنَّةٌ',
        transliteration: 'jannatun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ن ن',
        meaning: {
          en: 'A garden',
          ur: 'باغ',
        },
        grammarRole: 'ism-kana',
        grammarExplanations: {
          en: 'Subject of كان - nominative.',
          ur: 'اسم کان - مرفوع۔',
        },
      },
      {
        id: '25:8:9',
        arabic: 'يَأْكُلُ',
        transliteration: "ya'kulu",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ك ل',
        meaning: {
          en: 'He eats',
          ur: 'کھائے',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Descriptive clause.',
          ur: 'صفت جملہ۔',
        },
      },
      {
        id: '25:8:10',
        arabic: 'مِنْهَا',
        transliteration: 'minhaa',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'From it',
          ur: 'اس سے',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + feminine pronoun (garden).',
          ur: 'حرف جار + ضمیر مؤنث (باغ)۔',
        },
      },
      {
        id: '25:8:11',
        arabic: 'وَقَالَ',
        transliteration: 'waqaala',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: {
          en: 'And said',
          ur: 'اور کہا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Conjunction + perfect verb.',
          ur: 'واو + فعل ماضی۔',
        },
      },
      {
        id: '25:8:12',
        arabic: 'الظَّالِمُونَ',
        transliteration: 'adh-dhaalimoona',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ظ ل م',
        meaning: {
          en: 'The wrongdoers',
          ur: 'ظالموں نے',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject - active participle nominative plural.',
          ur: 'فاعل - اسم فاعل جمع مرفوع۔',
        },
      },
      {
        id: '25:8:13',
        arabic: 'إِن',
        transliteration: 'in',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Negation for restriction.',
          ur: 'نفی حصر کے لیے۔',
        },
      },
      {
        id: '25:8:14',
        arabic: 'تَتَّبِعُونَ',
        transliteration: "tattabi'oona",
        pos: ['V'],
        posLabel: 'V',
        root: 'ت ب ع',
        meaning: {
          en: 'You follow',
          ur: 'تم پیروی کرتے ہو',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Form VIII imperfect - deliberately following.',
          ur: 'فعل مضارع باب افتعال۔',
        },
      },
      {
        id: '25:8:15',
        arabic: 'إِلَّا',
        transliteration: 'illaa',
        pos: ['RES'],
        posLabel: 'RES',
        root: null,
        meaning: {
          en: 'Except/But',
          ur: 'مگر',
        },
        grammarRole: 'hasr',
        grammarExplanations: {
          en: 'Restriction - "nothing but".',
          ur: 'حصر - صرف۔',
        },
      },
      {
        id: '25:8:16',
        arabic: 'رَجُلًا',
        transliteration: 'rajulan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ج ل',
        meaning: {
          en: 'A man',
          ur: 'ایک آدمی',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative.',
          ur: 'مفعول بہ - منصوب۔',
        },
      },
      {
        id: '25:8:17',
        arabic: 'مَّسْحُورًا',
        transliteration: 'mashooran',
        pos: ['PP'],
        posLabel: 'PP',
        root: 'س ح ر',
        meaning: {
          en: 'Affected by magic',
          ur: 'جادو زدہ',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective - passive participle accusative. Bewitched/enchanted.',
          ur: 'صفت - اسم مفعول منصوب۔ جادو کیا ہوا۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'عطف' },
          { from: 5, to: 6, label: 'عطف' },
          { from: 9, to: 12, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'فعل + فاعل' },
          { from: 13, to: 14, label: 'نفی + فعل' },
          { from: 15, to: 16, label: 'حصر' },
        ],
    },
  },

  9: { // Ayah 9: انظُرْ كَيْفَ ضَرَبُوا لَكَ الْأَمْثَالَ فَضَلُّوا
    text: 'انظُرْ كَيْفَ ضَرَبُوا لَكَ الْأَمْثَالَ فَضَلُّوا فَلَا يَسْتَطِيعُونَ سَبِيلًا',
    translation: {
      en: 'Look how they strike for you comparisons; but they have strayed, so they cannot find a way.',
      ur: 'دیکھو انہوں نے تمہارے لیے کیسی مثالیں بیان کیں پس وہ گمراہ ہو گئے اور کوئی راستہ نہیں پا سکتے',
    },
    words: [
      {
        id: '25:9:1',
        arabic: 'انظُرْ',
        transliteration: 'undhur',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ظ ر',
        meaning: {
          en: 'Look/See',
          ur: 'دیکھو',
        },
        grammarRole: 'fil-amr',
        grammarExplanations: {
          en: 'Imperative - command to Prophet to observe.',
          ur: 'فعل امر - نبی کو مشاہدہ کا حکم۔',
        },
      },
      {
        id: '25:9:2',
        arabic: 'كَيْفَ',
        transliteration: 'kayfa',
        pos: ['INTG'],
        posLabel: 'INTG',
        root: null,
        meaning: {
          en: 'How',
          ur: 'کیسے',
        },
        grammarRole: 'istifham',
        grammarExplanations: {
          en: 'Interrogative - manner of action.',
          ur: 'استفہام - طریقہ کار۔',
        },
      },
      {
        id: '25:9:3',
        arabic: 'ضَرَبُوا',
        transliteration: 'daraboo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ض ر ب',
        meaning: {
          en: 'They struck/cited',
          ur: 'انہوں نے بیان کیں',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb - ضَرَبَ مَثَلاً means to cite/make comparison.',
          ur: 'فعل ماضی - ضَرَبَ مَثَلاً مثال دینا۔',
        },
      },
      {
        id: '25:9:4',
        arabic: 'لَكَ',
        transliteration: 'laka',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'For you',
          ur: 'تمہارے لیے',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun - for the Prophet.',
          ur: 'حرف جار + ضمیر - نبی کے لیے۔',
        },
      },
      {
        id: '25:9:5',
        arabic: 'الْأَمْثَالَ',
        transliteration: 'al-amthaala',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ث ل',
        meaning: {
          en: 'The comparisons',
          ur: 'مثالیں',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative plural of مَثَل.',
          ur: 'مفعول بہ - جمع مَثَل۔',
        },
      },
      {
        id: '25:9:6',
        arabic: 'فَضَلُّوا',
        transliteration: 'fadalloo',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ض ل ل',
        meaning: {
          en: 'So they strayed',
          ur: 'پس وہ گمراہ ہوئے',
        },
        grammarRole: 'natija',
        grammarExplanations: {
          en: 'Result فَ + perfect verb - consequence of false comparisons.',
          ur: 'فاء نتیجہ + فعل ماضی - جھوٹی مثالوں کا نتیجہ۔',
        },
      },
      {
        id: '25:9:7',
        arabic: 'فَلَا',
        transliteration: 'falaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'So not',
          ur: 'پس نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Result + negation.',
          ur: 'نتیجہ + نفی۔',
        },
      },
      {
        id: '25:9:8',
        arabic: 'يَسْتَطِيعُونَ',
        transliteration: 'yastatee\'oona',
        pos: ['V'],
        posLabel: 'V',
        root: 'ط و ع',
        meaning: {
          en: 'They are able',
          ur: 'وہ سکتے ہیں',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Form X imperfect - cannot find ability.',
          ur: 'فعل مضارع باب استفعال - قدرت نہیں پاتے۔',
        },
      },
      {
        id: '25:9:9',
        arabic: 'سَبِيلًا',
        transliteration: 'sabeelan',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ب ل',
        meaning: {
          en: 'A way',
          ur: 'راستہ',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - no path to truth.',
          ur: 'مفعول بہ - حق کی طرف راستہ نہیں۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'استفهام + فعل' },
          { from: 7, to: 8, label: 'نفی + فعل' },
        ],
    },
  },

  10: { // Ayah 10: تَبَارَكَ الَّذِي إِن شَاءَ جَعَلَ لَكَ خَيْرًا مِّن ذَٰلِكَ
    text: 'تَبَارَكَ الَّذِي إِن شَاءَ جَعَلَ لَكَ خَيْرًا مِّن ذَٰلِكَ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ وَيَجْعَل لَّكَ قُصُورًا',
    translation: {
      en: 'Blessed is He who, if He willed, could have made for you better than that - gardens beneath which rivers flow - and could make for you palaces.',
      ur: 'بابرکت ہے وہ جو اگر چاہے تو تمہیں اس سے بہتر دے دے باغات جن کے نیچے نہریں بہتی ہوں اور تمہیں محل عطا فرمائے',
    },
    words: [
      {
        id: '25:10:1',
        arabic: 'تَبَارَكَ',
        transliteration: 'tabaaraka',
        pos: ['V'],
        posLabel: 'V',
        root: 'ب ر ك',
        meaning: {
          en: 'Blessed is',
          ur: 'بابرکت ہے',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Form VI perfect - repetition from verse 1 frames the passage.',
          ur: 'فعل ماضی باب تفاعل - آیت ۱ سے تکرار جو بحث کو گھیرتی ہے۔',
        },
      },
      {
        id: '25:10:2',
        arabic: 'الَّذِي',
        transliteration: 'alladhee',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'He who',
          ur: 'وہ جو',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject - relative pronoun.',
          ur: 'فاعل - اسم موصول۔',
        },
      },
      {
        id: '25:10:3',
        arabic: 'إِن',
        transliteration: 'in',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: {
          en: 'If',
          ur: 'اگر',
        },
        grammarRole: 'shart',
        grammarExplanations: {
          en: 'Conditional particle.',
          ur: 'حرف شرط۔',
        },
      },
      {
        id: '25:10:4',
        arabic: 'شَاءَ',
        transliteration: "shaa'a",
        pos: ['V'],
        posLabel: 'V',
        root: 'ش ي أ',
        meaning: {
          en: 'He willed',
          ur: 'چاہے',
        },
        grammarRole: 'fil-shart',
        grammarExplanations: {
          en: 'Conditional verb - Divine will.',
          ur: 'فعل شرط - مشیئت الٰہی۔',
        },
      },
      {
        id: '25:10:5',
        arabic: 'جَعَلَ',
        transliteration: "ja'ala",
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ع ل',
        meaning: {
          en: 'Made',
          ur: 'دے دے',
        },
        grammarRole: 'jawab-shart',
        grammarExplanations: {
          en: 'Apodosis of condition.',
          ur: 'جواب شرط۔',
        },
      },
      {
        id: '25:10:6',
        arabic: 'لَكَ',
        transliteration: 'laka',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'For you',
          ur: 'تمہیں',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun.',
          ur: 'حرف جار + ضمیر۔',
        },
      },
      {
        id: '25:10:7',
        arabic: 'خَيْرًا',
        transliteration: 'khayran',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ي ر',
        meaning: {
          en: 'Better',
          ur: 'بہتر',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative comparative.',
          ur: 'مفعول بہ - منصوب تفضیل۔',
        },
      },
      {
        id: '25:10:8',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'Than',
          ur: 'سے',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Comparative preposition.',
          ur: 'حرف جار تفضیل۔',
        },
      },
      {
        id: '25:10:9',
        arabic: 'ذَٰلِكَ',
        transliteration: 'dhaalika',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'That',
          ur: 'اس',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive demonstrative - what they demanded.',
          ur: 'مجرور اسم اشارہ - جو انہوں نے مانگا۔',
        },
      },
      {
        id: '25:10:10',
        arabic: 'جَنَّاتٍ',
        transliteration: 'jannaatin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ن ن',
        meaning: {
          en: 'Gardens',
          ur: 'باغات',
        },
        grammarRole: 'badal',
        grammarExplanations: {
          en: 'Substitute for خَيْرًا - accusative plural.',
          ur: 'بدل - منصوب جمع۔',
        },
      },
      {
        id: '25:10:11',
        arabic: 'تَجْرِي',
        transliteration: 'tajree',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ر ي',
        meaning: {
          en: 'Flow',
          ur: 'بہتی ہیں',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Descriptive clause - imperfect verb.',
          ur: 'صفت جملہ - فعل مضارع۔',
        },
      },
      {
        id: '25:10:12',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From',
          ur: 'سے',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition.',
          ur: 'حرف جار۔',
        },
      },
      {
        id: '25:10:13',
        arabic: 'تَحْتِهَا',
        transliteration: 'tahtihaa',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ت ح ت',
        meaning: {
          en: 'Beneath them',
          ur: 'ان کے نیچے',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive + pronoun.',
          ur: 'مجرور + ضمیر۔',
        },
      },
      {
        id: '25:10:14',
        arabic: 'الْأَنْهَارُ',
        transliteration: 'al-anhaaru',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ه ر',
        meaning: {
          en: 'The rivers',
          ur: 'نہریں',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject of تَجْرِي - nominative plural.',
          ur: 'فاعل - جمع مرفوع۔',
        },
      },
      {
        id: '25:10:15',
        arabic: 'وَيَجْعَل',
        transliteration: "wayaj'al",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ج ع ل',
        meaning: {
          en: 'And make',
          ur: 'اور عطا فرمائے',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + jussive verb (coordinated with جَعَلَ).',
          ur: 'واو + فعل مجزوم (جَعَلَ پر معطوف)۔',
        },
      },
      {
        id: '25:10:16',
        arabic: 'لَّكَ',
        transliteration: 'laka',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'For you',
          ur: 'تمہیں',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun.',
          ur: 'حرف جار + ضمیر۔',
        },
      },
      {
        id: '25:10:17',
        arabic: 'قُصُورًا',
        transliteration: 'qusooran',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ص ر',
        meaning: {
          en: 'Palaces',
          ur: 'محل',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative plural of قَصْر (palace).',
          ur: 'مفعول بہ - قَصْر کی جمع منصوب۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 2, to: 4, label: 'موصول + صلة' },
          { from: 7, to: 10, label: 'بدل' },
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 11, to: 14, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 15, to: 16, label: 'عطف' },
        ],
    },
  },

  11: {
    text: "بَلْ كَذَّبُوا۟ بِٱلسَّاعَةِ ۖ وَأَعْتَدْنَا لِمَن كَذَّبَ بِٱلسَّاعَةِ سَعِيرًا",
    translation: {
      en: "",
      ur: "بلکہ یہ تو قیامت ہی کو جھٹلاتے ہیں اور ہم نے قیامت کے جھٹلانے والوں کے لئے دوزخ تیار کر رکھی ہے",
    },
    words: [
      { id: '25:11:1', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '25:11:2', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they deny", ur: "وہ لوگ deny" } },
      { id: '25:11:3', arabic: "بِٱلسَّاعَةِ ۖ", transliteration: "bil-sāʿati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the Hour", ur: "the Hour" } },
      { id: '25:11:4', arabic: "وَأَعْتَدْنَا", transliteration: "wa-aʿtadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We have prepared", ur: "اور ہم have prepared" } },
      { id: '25:11:5', arabic: "لِمَن", transliteration: "liman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for (those) who", ur: "for (those) جو" } },
      { id: '25:11:6', arabic: "كَذَّبَ", transliteration: "kadhaba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "deny", ur: "deny" } },
      { id: '25:11:7', arabic: "بِٱلسَّاعَةِ", transliteration: "bil-sāʿati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the Hour", ur: "the Hour" } },
      { id: '25:11:8', arabic: "سَعِيرًا", transliteration: "saʿīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Blazing Fire", ur: "a Blazing آگ" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  12: {
    text: "إِذَا رَأَتْهُم مِّن مَّكَانٍۭ بَعِيدٍۢ سَمِعُوا۟ لَهَا تَغَيُّظًۭا وَزَفِيرًۭا",
    translation: {
      en: "",
      ur: "جس وقت وہ ان کو دور سے دیکھے گی (تو غضبناک ہو رہی ہوگی اور یہ) اس کے جوش (غضب) اور چیخنے چلانے کو سنیں گے",
    },
    words: [
      { id: '25:12:1', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '25:12:2', arabic: "رَأَتْهُم", transliteration: "ra-athum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it sees them", ur: "it sees them" } },
      { id: '25:12:3', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '25:12:4', arabic: "مَّكَانٍۭ", transliteration: "makānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a place", ur: "a place" } },
      { id: '25:12:5', arabic: "بَعِيدٍۢ", transliteration: "baʿīdin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far", ur: "far" } },
      { id: '25:12:6', arabic: "سَمِعُوا۟", transliteration: "samiʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will hear", ur: "وہ لوگ will سننا" } },
      { id: '25:12:7', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its", ur: "its" } },
      { id: '25:12:8', arabic: "تَغَيُّظًۭا", transliteration: "taghayyuẓan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "raging", ur: "raging" } },
      { id: '25:12:9', arabic: "وَزَفِيرًۭا", transliteration: "wazafīran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and roaring", ur: "اور roaring" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  13: {
    text: "وَإِذَآ أُلْقُوا۟ مِنْهَا مَكَانًۭا ضَيِّقًۭا مُّقَرَّنِينَ دَعَوْا۟ هُنَالِكَ ثُبُورًۭا",
    translation: {
      en: "",
      ur: "اور جب یہ دوزخ کی کسی تنگ جگہ میں (زنجیروں میں) جکڑ کر ڈالے جائیں گے تو وہاں موت کو پکاریں گے",
    },
    words: [
      { id: '25:13:1', arabic: "وَإِذَآ", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '25:13:2', arabic: "أُلْقُوا۟", transliteration: "ul'qū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are thrown", ur: "وہ لوگ are thrown" } },
      { id: '25:13:3', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "thereof", ur: "اس سے" } },
      { id: '25:13:4', arabic: "مَكَانًۭا", transliteration: "makānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) a place", ur: "(میں) a place" } },
      { id: '25:13:5', arabic: "ضَيِّقًۭا", transliteration: "ḍayyiqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "narrow", ur: "narrow" } },
      { id: '25:13:6', arabic: "مُّقَرَّنِينَ", transliteration: "muqarranīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "bound in chains", ur: "bound میں chains" } },
      { id: '25:13:7', arabic: "دَعَوْا۟", transliteration: "daʿaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will call", ur: "وہ لوگ will call" } },
      { id: '25:13:8', arabic: "هُنَالِكَ", transliteration: "hunālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "there", ur: "there" } },
      { id: '25:13:9', arabic: "ثُبُورًۭا", transliteration: "thubūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) destruction", ur: "(for) destruction" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  14: {
    text: "لَّا تَدْعُوا۟ ٱلْيَوْمَ ثُبُورًۭا وَٰحِدًۭا وَٱدْعُوا۟ ثُبُورًۭا كَثِيرًۭا",
    translation: {
      en: "",
      ur: "آج ایک ہی موت کو نہ پکارو بہت سی موتوں کو پکارو",
    },
    words: [
      { id: '25:14:1', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '25:14:2', arabic: "تَدْعُوا۟", transliteration: "tadʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "call", ur: "call" } },
      { id: '25:14:3', arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", pos: ['N'], posLabel: 'N', root: "ي و م", meaning: { en: "this day", ur: "this دن" } },
      { id: '25:14:4', arabic: "ثُبُورًۭا", transliteration: "thubūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) destruction", ur: "(for) destruction" } },
      { id: '25:14:5', arabic: "وَٰحِدًۭا", transliteration: "wāḥidan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "one", ur: "one" } },
      { id: '25:14:6', arabic: "وَٱدْعُوا۟", transliteration: "wa-id'ʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but call", ur: "لیکن call" } },
      { id: '25:14:7', arabic: "ثُبُورًۭا", transliteration: "thubūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) destructions", ur: "(for) destructions" } },
      { id: '25:14:8', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  15: {
    text: "قُلْ أَذَٰلِكَ خَيْرٌ أَمْ جَنَّةُ ٱلْخُلْدِ ٱلَّتِى وُعِدَ ٱلْمُتَّقُونَ ۚ كَانَتْ لَهُمْ جَزَآءًۭ وَمَصِيرًۭا",
    translation: {
      en: "",
      ur: "پوچھو کہ یہ بہتر ہے یا بہشت جاودانی جس کا پرہیزگاروں سے وعدہ ہے۔ یہ ان (کے عملوں) کا بدلہ اور رہنے کا ٹھکانہ ہوگا",
    },
    words: [
      { id: '25:15:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '25:15:2', arabic: "أَذَٰلِكَ", transliteration: "adhālika", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is that", ur: "Is وہ" } },
      { id: '25:15:3', arabic: "خَيْرٌ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "better", ur: "better" } },
      { id: '25:15:4', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '25:15:5', arabic: "جَنَّةُ", transliteration: "jannatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Garden", ur: "Garden" } },
      { id: '25:15:6', arabic: "ٱلْخُلْدِ", transliteration: "l-khul'di", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Eternity", ur: "(of) Eternity" } },
      { id: '25:15:7', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '25:15:8', arabic: "وُعِدَ", transliteration: "wuʿida", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is promised", ur: "is promised" } },
      { id: '25:15:9', arabic: "ٱلْمُتَّقُونَ ۚ", transliteration: "l-mutaqūna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(to) the righteous", ur: "(کو) the نیک" } },
      { id: '25:15:10', arabic: "كَانَتْ", transliteration: "kānat", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "It will be", ur: "It will be" } },
      { id: '25:15:11', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '25:15:12', arabic: "جَزَآءًۭ", transliteration: "jazāan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reward", ur: "a ثواب" } },
      { id: '25:15:13', arabic: "وَمَصِيرًۭا", transliteration: "wamaṣīran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and destination", ur: "اور destination" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  16: {
    text: "لَّهُمْ فِيهَا مَا يَشَآءُونَ خَـٰلِدِينَ ۚ كَانَ عَلَىٰ رَبِّكَ وَعْدًۭا مَّسْـُٔولًۭا",
    translation: {
      en: "",
      ur: "وہاں جو چاہیں گے ان کے لئے میسر ہوگا ہمیشہ اس میں رہیں گے۔ یہ وعدہ خدا کو (پورا کرنا) لازم ہے اور اس لائق ہے کہ مانگ لیا جائے",
    },
    words: [
      { id: '25:16:1', arabic: "لَّهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '25:16:2', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '25:16:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) whatever", ur: "(is) whatever" } },
      { id: '25:16:4', arabic: "يَشَآءُونَ", transliteration: "yashāūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they wish", ur: "وہ لوگ wish" } },
      { id: '25:16:5', arabic: "خَـٰلِدِينَ ۚ", transliteration: "khālidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will abide forever", ur: "وہ لوگ will abide forever" } },
      { id: '25:16:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "It is", ur: "It is" } },
      { id: '25:16:7', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '25:16:8', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '25:16:9', arabic: "وَعْدًۭا", transliteration: "waʿdan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a promise", ur: "a promise" } },
      { id: '25:16:10', arabic: "مَّسْـُٔولًۭا", transliteration: "masūlan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "requested", ur: "requested" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  17: {
    text: "وَيَوْمَ يَحْشُرُهُمْ وَمَا يَعْبُدُونَ مِن دُونِ ٱللَّهِ فَيَقُولُ ءَأَنتُمْ أَضْلَلْتُمْ عِبَادِى هَـٰٓؤُلَآءِ أَمْ هُمْ ضَلُّوا۟ ٱلسَّبِيلَ",
    translation: {
      en: "",
      ur: "اور جس دن (خدا) ان کو اور اُن کو جنہیں یہ خدا کے سوا پوجتے ہیں جمع کرے گا تو فرمائے گا کیا تم نے میرے ان بندوں کو گمراہ کیا تھا یا یہ خود گمراہ ہوگئے تھے",
    },
    words: [
      { id: '25:17:1', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (the) Day", ur: "اور (the) دن" } },
      { id: '25:17:2', arabic: "يَحْشُرُهُمْ", transliteration: "yaḥshuruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will gather them", ur: "وہ will gather them" } },
      { id: '25:17:3', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '25:17:4', arabic: "يَعْبُدُونَ", transliteration: "yaʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they worship", ur: "وہ لوگ عبادت" } },
      { id: '25:17:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '25:17:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '25:17:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '25:17:8', arabic: "فَيَقُولُ", transliteration: "fayaqūlu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "and He will say", ur: "اور وہ will کہو" } },
      { id: '25:17:9', arabic: "ءَأَنتُمْ", transliteration: "a-antum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did you", ur: "Did تم" } },
      { id: '25:17:10', arabic: "أَضْلَلْتُمْ", transliteration: "aḍlaltum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[you] mislead", ur: "[تم] mislead" } },
      { id: '25:17:11', arabic: "عِبَادِى", transliteration: "ʿibādī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My slaves", ur: "My slaves" } },
      { id: '25:17:12', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '25:17:13', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '25:17:14', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '25:17:15', arabic: "ضَلُّوا۟", transliteration: "ḍallū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "went astray", ur: "went astray" } },
      { id: '25:17:16', arabic: "ٱلسَّبِيلَ", transliteration: "l-sabīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from) the way", ur: "(سے) the راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  18: {
    text: "قَالُوا۟ سُبْحَـٰنَكَ مَا كَانَ يَنۢبَغِى لَنَآ أَن نَّتَّخِذَ مِن دُونِكَ مِنْ أَوْلِيَآءَ وَلَـٰكِن مَّتَّعْتَهُمْ وَءَابَآءَهُمْ حَتَّىٰ نَسُوا۟ ٱلذِّكْرَ وَكَانُوا۟ قَوْمًۢا بُورًۭا",
    translation: {
      en: "",
      ur: "وہ کہیں گے تو پاک ہے ہمیں یہ بات شایان نہ تھی کہ تیرے سوا اوروں کو دوست بناتے۔ لیکن تو نے ہی ان کو اور ان کے باپ دادا کو برتنے کو نعمتیں دیں یہاں تک کہ وہ تیری یاد کو بھول گئے۔ اور یہ ہلاک ہونے والے لوگ تھے",
    },
    words: [
      { id: '25:18:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They say", ur: "وہ لوگ کہو" } },
      { id: '25:18:2', arabic: "سُبْحَـٰنَكَ", transliteration: "sub'ḥānaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Glory be to You", ur: "Glory be کو تم" } },
      { id: '25:18:3', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '25:18:4', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "it was proper", ur: "it was proper" } },
      { id: '25:18:5', arabic: "يَنۢبَغِى", transliteration: "yanbaghī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it was proper", ur: "it was proper" } },
      { id: '25:18:6', arabic: "لَنَآ", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '25:18:7', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '25:18:8', arabic: "نَّتَّخِذَ", transliteration: "nattakhidha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we take", ur: "ہم take" } },
      { id: '25:18:9', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides You", ur: "besides تم" } },
      { id: '25:18:10', arabic: "دُونِكَ", transliteration: "dūnika", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides You", ur: "besides تم" } },
      { id: '25:18:11', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '25:18:12', arabic: "أَوْلِيَآءَ", transliteration: "awliyāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "protectors", ur: "protectors" } },
      { id: '25:18:13', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '25:18:14', arabic: "مَّتَّعْتَهُمْ", transliteration: "mattaʿtahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You gave them comforts", ur: "تم gave them comforts" } },
      { id: '25:18:15', arabic: "وَءَابَآءَهُمْ", transliteration: "waābāahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their forefathers", ur: "اور their forefathers" } },
      { id: '25:18:16', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '25:18:17', arabic: "نَسُوا۟", transliteration: "nasū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they forgot", ur: "وہ لوگ forgot" } },
      { id: '25:18:18', arabic: "ٱلذِّكْرَ", transliteration: "l-dhik'ra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Message", ur: "the Message" } },
      { id: '25:18:19', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and became", ur: "اور became" } },
      { id: '25:18:20', arabic: "قَوْمًۢا", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '25:18:21', arabic: "بُورًۭا", transliteration: "būran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "ruined", ur: "ruined" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  19: {
    text: "فَقَدْ كَذَّبُوكُم بِمَا تَقُولُونَ فَمَا تَسْتَطِيعُونَ صَرْفًۭا وَلَا نَصْرًۭا ۚ وَمَن يَظْلِم مِّنكُمْ نُذِقْهُ عَذَابًۭا كَبِيرًۭا",
    translation: {
      en: "",
      ur: "تو (کافرو) انہوں نے تو تم کو تمہاری بات میں جھٹلا دیا۔ پس (اب) تم (عذاب کو) نہ پھیر سکتے ہو۔ نہ (کسی سے) مدد لے سکتے ہو۔ اور جو شخص تم میں سے ظلم کرے گا ہم اس کو بڑے عذاب کا مزا چکھائیں گے",
    },
    words: [
      { id: '25:19:1', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So verily", ur: "So بیشک" } },
      { id: '25:19:2', arabic: "كَذَّبُوكُم", transliteration: "kadhabūkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they deny you", ur: "وہ لوگ deny تم" } },
      { id: '25:19:3', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in what", ur: "میں کیا" } },
      { id: '25:19:4', arabic: "تَقُولُونَ", transliteration: "taqūlūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you say", ur: "تم کہو" } },
      { id: '25:19:5', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so not", ur: "so نہیں" } },
      { id: '25:19:6', arabic: "تَسْتَطِيعُونَ", transliteration: "tastaṭīʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are able", ur: "تم are able" } },
      { id: '25:19:7', arabic: "صَرْفًۭا", transliteration: "ṣarfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) avert", ur: "(کو) avert" } },
      { id: '25:19:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '25:19:9', arabic: "نَصْرًۭا ۚ", transliteration: "naṣran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) help", ur: "(کو) help" } },
      { id: '25:19:10', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '25:19:11', arabic: "يَظْلِم", transliteration: "yaẓlim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does wrong", ur: "does wrong" } },
      { id: '25:19:12', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '25:19:13', arabic: "نُذِقْهُ", transliteration: "nudhiq'hu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will make him taste", ur: "ہم will make him taste" } },
      { id: '25:19:14', arabic: "عَذَابًۭا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '25:19:15', arabic: "كَبِيرًۭا", transliteration: "kabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ],
    },
  },
  20: {
    text: "وَمَآ أَرْسَلْنَا قَبْلَكَ مِنَ ٱلْمُرْسَلِينَ إِلَّآ إِنَّهُمْ لَيَأْكُلُونَ ٱلطَّعَامَ وَيَمْشُونَ فِى ٱلْأَسْوَاقِ ۗ وَجَعَلْنَا بَعْضَكُمْ لِبَعْضٍۢ فِتْنَةً أَتَصْبِرُونَ ۗ وَكَانَ رَبُّكَ بَصِيرًۭا",
    translation: {
      en: "",
      ur: "اور ہم نے تم سے پہلے جتنے پیغمبر بھیجے ہیں سب کھانا کھاتے تھے اور بازاروں میں چلتے پھرتے تھے۔ اور ہم نے تمہیں ایک دوسرے کے لئے آزمائش بنایا ہے۔ کیا تم صبر کرو گے۔ اور تمہارا پروردگار تو دیکھنے والا ہے",
    },
    words: [
      { id: '25:20:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '25:20:2', arabic: "أَرْسَلْنَا", transliteration: "arsalnā", pos: ['V'], posLabel: 'V', root: "ر س ل", meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '25:20:3', arabic: "قَبْلَكَ", transliteration: "qablaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '25:20:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '25:20:5', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messengers", ur: "Messengers" } },
      { id: '25:20:6', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '25:20:7', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '25:20:8', arabic: "لَيَأْكُلُونَ", transliteration: "layakulūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[surely] ate", ur: "[یقیناً] ate" } },
      { id: '25:20:9', arabic: "ٱلطَّعَامَ", transliteration: "l-ṭaʿāma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "food", ur: "food" } },
      { id: '25:20:10', arabic: "وَيَمْشُونَ", transliteration: "wayamshūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and walked", ur: "اور walked" } },
      { id: '25:20:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '25:20:12', arabic: "ٱلْأَسْوَاقِ ۗ", transliteration: "l-aswāqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the markets", ur: "the markets" } },
      { id: '25:20:13', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "And We have made", ur: "اور ہم have made" } },
      { id: '25:20:14', arabic: "بَعْضَكُمْ", transliteration: "baʿḍakum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of you", ur: "some of تم" } },
      { id: '25:20:15', arabic: "لِبَعْضٍۢ", transliteration: "libaʿḍin", pos: ['P+N'], posLabel: 'P+N', root: "ب ع ض", meaning: { en: "for others", ur: "for others" } },
      { id: '25:20:16', arabic: "فِتْنَةً", transliteration: "fit'natan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a trial", ur: "a trial" } },
      { id: '25:20:17', arabic: "أَتَصْبِرُونَ ۗ", transliteration: "ataṣbirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will you have patience", ur: "will تم have patience" } },
      { id: '25:20:18', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '25:20:19', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '25:20:20', arabic: "بَصِيرًۭا", transliteration: "baṣīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Seer", ur: "سب-Seer" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'موصوف + صفت' }
      ],
    },
  },
  21: {
    text: "۞ وَقَالَ ٱلَّذِينَ لَا يَرْجُونَ لِقَآءَنَا لَوْلَآ أُنزِلَ عَلَيْنَا ٱلْمَلَـٰٓئِكَةُ أَوْ نَرَىٰ رَبَّنَا ۗ لَقَدِ ٱسْتَكْبَرُوا۟ فِىٓ أَنفُسِهِمْ وَعَتَوْ عُتُوًّۭا كَبِيرًۭا",
    translation: {
      en: "",
      ur: "اور جو لوگ ہم سے ملنے کی امید نہیں رکھتے۔ کہتے ہیں کہ ہم پر فرشتے کیوں نہ نازل کئے گئے۔ یا ہم اپنی آنکھ سے اپنے پروردگار کو دیکھ لیں۔ یہ اپنے خیال میں بڑائی رکھتے ہیں اور (اسی بنا پر) بڑے سرکش ہو رہے ہی",
    },
    words: [
      { id: '25:21:1', arabic: "۞ وَقَالَ", transliteration: "waqāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "And said", ur: "اور کہا" } },
      { id: '25:21:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '25:21:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '25:21:4', arabic: "يَرْجُونَ", transliteration: "yarjūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "expect", ur: "expect" } },
      { id: '25:21:5', arabic: "لِقَآءَنَا", transliteration: "liqāanā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(the) meeting with Us", ur: "(the) meeting ساتھ Us" } },
      { id: '25:21:6', arabic: "لَوْلَآ", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Why not", ur: "Why نہیں" } },
      { id: '25:21:7', arabic: "أُنزِلَ", transliteration: "unzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are sent down", ur: "are sent down" } },
      { id: '25:21:8', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to us", ur: "کو us" } },
      { id: '25:21:9', arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '25:21:10', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '25:21:11', arabic: "نَرَىٰ", transliteration: "narā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we see", ur: "ہم دیکھنا" } },
      { id: '25:21:12', arabic: "رَبَّنَا ۗ", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our Lord", ur: "our رب" } },
      { id: '25:21:13', arabic: "لَقَدِ", transliteration: "laqadi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '25:21:14', arabic: "ٱسْتَكْبَرُوا۟", transliteration: "is'takbarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have become arrogant", ur: "وہ لوگ have become arrogant" } },
      { id: '25:21:15', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "within", ur: "within" } },
      { id: '25:21:16', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '25:21:17', arabic: "وَعَتَوْ", transliteration: "waʿataw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (become) insolent", ur: "اور (become) insolent" } },
      { id: '25:21:18', arabic: "عُتُوًّۭا", transliteration: "ʿutuwwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) insolence", ur: "(ساتھ) insolence" } },
      { id: '25:21:19', arabic: "كَبِيرًۭا", transliteration: "kabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ],
    },
  },
  22: {
    text: "يَوْمَ يَرَوْنَ ٱلْمَلَـٰٓئِكَةَ لَا بُشْرَىٰ يَوْمَئِذٍۢ لِّلْمُجْرِمِينَ وَيَقُولُونَ حِجْرًۭا مَّحْجُورًۭا",
    translation: {
      en: "",
      ur: "جس دن یہ فرشتوں کو دیکھیں گے اس دن گنہگاروں کے لئے خوشی کی بات نہیں ہوگی اور کہیں گے (خدا کرے تم) روک لئے (اور بند کردیئے) جاؤ",
    },
    words: [
      { id: '25:22:1', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(The) Day", ur: "(The) دن" } },
      { id: '25:22:2', arabic: "يَرَوْنَ", transliteration: "yarawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '25:22:3', arabic: "ٱلْمَلَـٰٓئِكَةَ", transliteration: "l-malāikata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '25:22:4', arabic: "لَا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "no", ur: "نہیں" } },
      { id: '25:22:5', arabic: "بُشْرَىٰ", transliteration: "bush'rā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "glad tidings", ur: "glad tidings" } },
      { id: '25:22:6', arabic: "يَوْمَئِذٍۢ", transliteration: "yawma-idhin", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(will be) that Day", ur: "(will be) وہ دن" } },
      { id: '25:22:7', arabic: "لِّلْمُجْرِمِينَ", transliteration: "lil'muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for the criminals", ur: "for the criminals" } },
      { id: '25:22:8', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they will say", ur: "اور وہ لوگ will کہو" } },
      { id: '25:22:9', arabic: "حِجْرًۭا", transliteration: "ḥij'ran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "A partition", ur: "A partition" } },
      { id: '25:22:10', arabic: "مَّحْجُورًۭا", transliteration: "maḥjūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "forbidden", ur: "forbidden" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  23: {
    text: "وَقَدِمْنَآ إِلَىٰ مَا عَمِلُوا۟ مِنْ عَمَلٍۢ فَجَعَلْنَـٰهُ هَبَآءًۭ مَّنثُورًا",
    translation: {
      en: "",
      ur: "اور جو انہوں نے عمل کئے ہوں گے ہم ان کی طرف متوجہ ہوں گے تو ان کو اُڑتی خاک کردیں گے",
    },
    words: [
      { id: '25:23:1', arabic: "وَقَدِمْنَآ", transliteration: "waqadim'nā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We will proceed", ur: "اور ہم will proceed" } },
      { id: '25:23:2', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '25:23:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '25:23:4', arabic: "عَمِلُوا۟", transliteration: "ʿamilū", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "they did", ur: "وہ لوگ did" } },
      { id: '25:23:5', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '25:23:6', arabic: "عَمَلٍۢ", transliteration: "ʿamalin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) deed(s)", ur: "(the) deed(s)" } },
      { id: '25:23:7', arabic: "فَجَعَلْنَـٰهُ", transliteration: "fajaʿalnāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and We will make them", ur: "اور ہم will make them" } },
      { id: '25:23:8', arabic: "هَبَآءًۭ", transliteration: "habāan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) dust", ur: "(as) dust" } },
      { id: '25:23:9', arabic: "مَّنثُورًا", transliteration: "manthūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "dispersed", ur: "dispersed" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  24: {
    text: "أَصْحَـٰبُ ٱلْجَنَّةِ يَوْمَئِذٍ خَيْرٌۭ مُّسْتَقَرًّۭا وَأَحْسَنُ مَقِيلًۭا",
    translation: {
      en: "",
      ur: "اس دن اہل جنت کا ٹھکانا بھی بہتر ہوگا اور مقام استراحت بھی ہوگا",
    },
    words: [
      { id: '25:24:1', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(The) companions", ur: "(The) companions" } },
      { id: '25:24:2', arabic: "ٱلْجَنَّةِ", transliteration: "l-janati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Paradise", ur: "(of) جنت" } },
      { id: '25:24:3', arabic: "يَوْمَئِذٍ", transliteration: "yawma-idhin", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "that Day", ur: "وہ دن" } },
      { id: '25:24:4', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be in) a better", ur: "(will be میں) a better" } },
      { id: '25:24:5', arabic: "مُّسْتَقَرًّۭا", transliteration: "mus'taqarran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "abode", ur: "abode" } },
      { id: '25:24:6', arabic: "وَأَحْسَنُ", transliteration: "wa-aḥsanu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a better", ur: "اور a better" } },
      { id: '25:24:7', arabic: "مَقِيلًۭا", transliteration: "maqīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "resting-place", ur: "resting-place" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  25: {
    text: "وَيَوْمَ تَشَقَّقُ ٱلسَّمَآءُ بِٱلْغَمَـٰمِ وَنُزِّلَ ٱلْمَلَـٰٓئِكَةُ تَنزِيلًا",
    translation: {
      en: "",
      ur: "اور جس دن آسمان ابر کے ساتھ پھٹ جائے گا اور فرشتے نازل کئے جائیں گے",
    },
    words: [
      { id: '25:25:1', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (the) Day", ur: "اور (the) دن" } },
      { id: '25:25:2', arabic: "تَشَقَّقُ", transliteration: "tashaqqaqu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will split open", ur: "will split open" } },
      { id: '25:25:3', arabic: "ٱلسَّمَآءُ", transliteration: "l-samāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '25:25:4', arabic: "بِٱلْغَمَـٰمِ", transliteration: "bil-ghamāmi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the clouds", ur: "ساتھ the clouds" } },
      { id: '25:25:5', arabic: "وَنُزِّلَ", transliteration: "wanuzzila", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (will be) sent down", ur: "اور (will be) sent down" } },
      { id: '25:25:6', arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '25:25:7', arabic: "تَنزِيلًا", transliteration: "tanzīlan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "descending", ur: "descending" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  26: {
    text: "ٱلْمُلْكُ يَوْمَئِذٍ ٱلْحَقُّ لِلرَّحْمَـٰنِ ۚ وَكَانَ يَوْمًا عَلَى ٱلْكَـٰفِرِينَ عَسِيرًۭا",
    translation: {
      en: "",
      ur: "اس دن سچی بادشاہی خدا ہی کی ہوگی۔ اور وہ دن کافروں پر (سخت) مشکل ہوگا",
    },
    words: [
      { id: '25:26:1', arabic: "ٱلْمُلْكُ", transliteration: "al-mul'ku", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "The Sovereignty", ur: "The Sovereignty" } },
      { id: '25:26:2', arabic: "يَوْمَئِذٍ", transliteration: "yawma-idhin", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "that Day", ur: "وہ دن" } },
      { id: '25:26:3', arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) truly", ur: "(will be) truly" } },
      { id: '25:26:4', arabic: "لِلرَّحْمَـٰنِ ۚ", transliteration: "lilrraḥmāni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the Most Gracious", ur: "for the بڑا مہربان" } },
      { id: '25:26:5', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And (it will) be", ur: "اور (it will) be" } },
      { id: '25:26:6', arabic: "يَوْمًا", transliteration: "yawman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a Day", ur: "a دن" } },
      { id: '25:26:7', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '25:26:8', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbelievers", ur: "the کافر" } },
      { id: '25:26:9', arabic: "عَسِيرًۭا", transliteration: "ʿasīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "difficult", ur: "difficult" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  27: {
    text: "وَيَوْمَ يَعَضُّ ٱلظَّالِمُ عَلَىٰ يَدَيْهِ يَقُولُ يَـٰلَيْتَنِى ٱتَّخَذْتُ مَعَ ٱلرَّسُولِ سَبِيلًۭا",
    translation: {
      en: "",
      ur: "اور جس دن (ناعاقبت اندیش) ظالم اپنے ہاتھ کاٹ کاٹ کر کھائے گا (اور کہے گا) کہ اے کاش میں نے پیغمبر کے ساتھ رشتہ اختیار کیا ہوتا",
    },
    words: [
      { id: '25:27:1', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (the) Day", ur: "اور (the) دن" } },
      { id: '25:27:2', arabic: "يَعَضُّ", transliteration: "yaʿaḍḍu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will bite", ur: "will bite" } },
      { id: '25:27:3', arabic: "ٱلظَّالِمُ", transliteration: "l-ẓālimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoer", ur: "the wrongdoer" } },
      { id: '25:27:4', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[on]", ur: "[پر]" } },
      { id: '25:27:5', arabic: "يَدَيْهِ", transliteration: "yadayhi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "his hands", ur: "his hands" } },
      { id: '25:27:6', arabic: "يَقُولُ", transliteration: "yaqūlu", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he will say", ur: "وہ will کہو" } },
      { id: '25:27:7', arabic: "يَـٰلَيْتَنِى", transliteration: "yālaytanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O I wish", ur: "اے میں wish" } },
      { id: '25:27:8', arabic: "ٱتَّخَذْتُ", transliteration: "ittakhadhtu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I had taken", ur: "میں had taken" } },
      { id: '25:27:9', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '25:27:10', arabic: "ٱلرَّسُولِ", transliteration: "l-rasūli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '25:27:11', arabic: "سَبِيلًۭا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a way", ur: "a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  28: {
    text: "يَـٰوَيْلَتَىٰ لَيْتَنِى لَمْ أَتَّخِذْ فُلَانًا خَلِيلًۭا",
    translation: {
      en: "",
      ur: "ہائے شامت کاش میں نے فلاں شخص کو دوست نہ بنایا ہوتا",
    },
    words: [
      { id: '25:28:1', arabic: "يَـٰوَيْلَتَىٰ", transliteration: "yāwaylatā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O woe to me", ur: "اے woe کو me" } },
      { id: '25:28:2', arabic: "لَيْتَنِى", transliteration: "laytanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I wish", ur: "میں wish" } },
      { id: '25:28:3', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '25:28:4', arabic: "أَتَّخِذْ", transliteration: "attakhidh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I had taken", ur: "میں had taken" } },
      { id: '25:28:5', arabic: "فُلَانًا", transliteration: "fulānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that one", ur: "وہ one" } },
      { id: '25:28:6', arabic: "خَلِيلًۭا", transliteration: "khalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a friend", ur: "(as) a friend" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' }
      ],
    },
  },
  29: {
    text: "لَّقَدْ أَضَلَّنِى عَنِ ٱلذِّكْرِ بَعْدَ إِذْ جَآءَنِى ۗ وَكَانَ ٱلشَّيْطَـٰنُ لِلْإِنسَـٰنِ خَذُولًۭا",
    translation: {
      en: "",
      ur: "اس نے مجھ کو (کتاب) نصیحت کے میرے پاس آنے کے بعد بہکا دیا۔ اور شیطان انسان کو وقت پر دغا دینے والا ہے",
    },
    words: [
      { id: '25:29:1', arabic: "لَّقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '25:29:2', arabic: "أَضَلَّنِى", transliteration: "aḍallanī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he led me astray", ur: "وہ led me astray" } },
      { id: '25:29:3', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '25:29:4', arabic: "ٱلذِّكْرِ", transliteration: "l-dhik'ri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Reminder", ur: "the Reminder" } },
      { id: '25:29:5', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '25:29:6', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[when]", ur: "[when]" } },
      { id: '25:29:7', arabic: "جَآءَنِى ۗ", transliteration: "jāanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it (had) come to me", ur: "it (had) come کو me" } },
      { id: '25:29:8', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '25:29:9', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '25:29:10', arabic: "لِلْإِنسَـٰنِ", transliteration: "lil'insāni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the man", ur: "کو the man" } },
      { id: '25:29:11', arabic: "خَذُولًۭا", transliteration: "khadhūlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a deserter", ur: "a deserter" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  30: {
    text: "وَقَالَ ٱلرَّسُولُ يَـٰرَبِّ إِنَّ قَوْمِى ٱتَّخَذُوا۟ هَـٰذَا ٱلْقُرْءَانَ مَهْجُورًۭا",
    translation: {
      en: "",
      ur: "اور پیغمبر کہیں گے کہ اے پروردگار میری قوم نے اس قرآن کو چھوڑ رکھا تھا",
    },
    words: [
      { id: '25:30:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And said", ur: "اور کہا" } },
      { id: '25:30:2', arabic: "ٱلرَّسُولُ", transliteration: "l-rasūlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '25:30:3', arabic: "يَـٰرَبِّ", transliteration: "yārabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my Lord", ur: "اے my رب" } },
      { id: '25:30:4', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '25:30:5', arabic: "قَوْمِى", transliteration: "qawmī", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "my people", ur: "my لوگ" } },
      { id: '25:30:6', arabic: "ٱتَّخَذُوا۟", transliteration: "ittakhadhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "took", ur: "took" } },
      { id: '25:30:7', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '25:30:8', arabic: "ٱلْقُرْءَانَ", transliteration: "l-qur'āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Quran", ur: "the Quran" } },
      { id: '25:30:9', arabic: "مَهْجُورًۭا", transliteration: "mahjūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(as) a forsaken thing", ur: "(as) a forsaken thing" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  31: {
    text: "وَكَذَٰلِكَ جَعَلْنَا لِكُلِّ نَبِىٍّ عَدُوًّۭا مِّنَ ٱلْمُجْرِمِينَ ۗ وَكَفَىٰ بِرَبِّكَ هَادِيًۭا وَنَصِيرًۭا",
    translation: {
      en: "",
      ur: "اور اسی طرح ہم نے گنہگاروں میں سے ہر پیغمبر کا دشمن بنا دیا۔ اور تمہارا پروردگار ہدایت دینے اور مدد کرنے کو کافی ہے",
    },
    words: [
      { id: '25:31:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '25:31:2', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We have made", ur: "ہم have made" } },
      { id: '25:31:3', arabic: "لِكُلِّ", transliteration: "likulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for every", ur: "for ہر" } },
      { id: '25:31:4', arabic: "نَبِىٍّ", transliteration: "nabiyyin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Prophet", ur: "نبی" } },
      { id: '25:31:5', arabic: "عَدُوًّۭا", transliteration: "ʿaduwwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an enemy", ur: "an enemy" } },
      { id: '25:31:6', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '25:31:7', arabic: "ٱلْمُجْرِمِينَ ۗ", transliteration: "l-muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the criminals", ur: "the criminals" } },
      { id: '25:31:8', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But sufficient is", ur: "لیکن sufficient is" } },
      { id: '25:31:9', arabic: "بِرَبِّكَ", transliteration: "birabbika", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '25:31:10', arabic: "هَادِيًۭا", transliteration: "hādiyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a Guide", ur: "(as) a Guide" } },
      { id: '25:31:11', arabic: "وَنَصِيرًۭا", transliteration: "wanaṣīran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a Helper", ur: "اور a Helper" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  32: {
    text: "وَقَالَ ٱلَّذِينَ كَفَرُوا۟ لَوْلَا نُزِّلَ عَلَيْهِ ٱلْقُرْءَانُ جُمْلَةًۭ وَٰحِدَةًۭ ۚ كَذَٰلِكَ لِنُثَبِّتَ بِهِۦ فُؤَادَكَ ۖ وَرَتَّلْنَـٰهُ تَرْتِيلًۭا",
    translation: {
      en: "",
      ur: "اور کافر کہتے ہیں کہ اس پر قرآن ایک ہی دفعہ کیوں نہیں اُتارا گیا۔ اس طرح (آہستہ آہستہ) اس لئے اُتارا گیا کہ اس سے تمہارے دل کو قائم رکھیں۔ اور اسی واسطے ہم اس کو ٹھہر ٹھہر کر پڑھتے رہے ہیں",
    },
    words: [
      { id: '25:32:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And said", ur: "اور کہا" } },
      { id: '25:32:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '25:32:3', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '25:32:4', arabic: "لَوْلَا", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Why not", ur: "Why نہیں" } },
      { id: '25:32:5', arabic: "نُزِّلَ", transliteration: "nuzzila", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was revealed", ur: "was revealed" } },
      { id: '25:32:6', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '25:32:7', arabic: "ٱلْقُرْءَانُ", transliteration: "l-qur'ānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Quran", ur: "the Quran" } },
      { id: '25:32:8', arabic: "جُمْلَةًۭ", transliteration: "jum'latan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all at once", ur: "سب at once" } },
      { id: '25:32:9', arabic: "وَٰحِدَةًۭ ۚ", transliteration: "wāḥidatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "all at once", ur: "سب at once" } },
      { id: '25:32:10', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '25:32:11', arabic: "لِنُثَبِّتَ", transliteration: "linuthabbita", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that We may strengthen", ur: "وہ ہم may strengthen" } },
      { id: '25:32:12', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "thereby", ur: "thereby" } },
      { id: '25:32:13', arabic: "فُؤَادَكَ ۖ", transliteration: "fuādaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your heart", ur: "your دل" } },
      { id: '25:32:14', arabic: "وَرَتَّلْنَـٰهُ", transliteration: "warattalnāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We have recited it", ur: "اور ہم have recited it" } },
      { id: '25:32:15', arabic: "تَرْتِيلًۭا", transliteration: "tartīlan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(with distinct) recitation", ur: "(ساتھ distinct) recitation" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  33: {
    text: "وَلَا يَأْتُونَكَ بِمَثَلٍ إِلَّا جِئْنَـٰكَ بِٱلْحَقِّ وَأَحْسَنَ تَفْسِيرًا",
    translation: {
      en: "",
      ur: "اور یہ لوگ تمہارے پاس جو (اعتراض کی) بات لاتے ہیں ہم تمہارے پاس اس کا معقول اور خوب مشرح جواب بھیج دیتے ہیں",
    },
    words: [
      { id: '25:33:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '25:33:2', arabic: "يَأْتُونَكَ", transliteration: "yatūnaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they come to you", ur: "وہ لوگ come کو تم" } },
      { id: '25:33:3', arabic: "بِمَثَلٍ", transliteration: "bimathalin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with an example", ur: "ساتھ an example" } },
      { id: '25:33:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '25:33:5', arabic: "جِئْنَـٰكَ", transliteration: "ji'nāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We bring you", ur: "ہم bring تم" } },
      { id: '25:33:6', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '25:33:7', arabic: "وَأَحْسَنَ", transliteration: "wa-aḥsana", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (the) best", ur: "اور (the) best" } },
      { id: '25:33:8', arabic: "تَفْسِيرًا", transliteration: "tafsīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "explanation", ur: "explanation" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  34: {
    text: "ٱلَّذِينَ يُحْشَرُونَ عَلَىٰ وُجُوهِهِمْ إِلَىٰ جَهَنَّمَ أُو۟لَـٰٓئِكَ شَرٌّۭ مَّكَانًۭا وَأَضَلُّ سَبِيلًۭا",
    translation: {
      en: "",
      ur: "جو لوگ اپنے مونہوں کے بل دوزخ کی طرف جمع کئے جائیں گے ان کا ٹھکانا بھی برا ہے اور وہ رستے سے بھی بہکے ہوئے ہیں",
    },
    words: [
      { id: '25:34:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '25:34:2', arabic: "يُحْشَرُونَ", transliteration: "yuḥ'sharūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be gathered", ur: "will be gathered" } },
      { id: '25:34:3', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '25:34:4', arabic: "وُجُوهِهِمْ", transliteration: "wujūhihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their faces", ur: "their faces" } },
      { id: '25:34:5', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '25:34:6', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hell", ur: "جہنم" } },
      { id: '25:34:7', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '25:34:8', arabic: "شَرٌّۭ", transliteration: "sharrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are the) worst", ur: "(are the) worst" } },
      { id: '25:34:9', arabic: "مَّكَانًۭا", transliteration: "makānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) position", ur: "(میں) position" } },
      { id: '25:34:10', arabic: "وَأَضَلُّ", transliteration: "wa-aḍallu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and most astray", ur: "اور most astray" } },
      { id: '25:34:11', arabic: "سَبِيلًۭا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from the) way", ur: "(سے the) راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  35: {
    text: "وَلَقَدْ ءَاتَيْنَا مُوسَى ٱلْكِتَـٰبَ وَجَعَلْنَا مَعَهُۥٓ أَخَاهُ هَـٰرُونَ وَزِيرًۭا",
    translation: {
      en: "",
      ur: "اور ہم نے موسیٰ کو کتاب دی اور ان کے بھائی ہارون کو مددگار بنا کر ان کے ساتھ کیا",
    },
    words: [
      { id: '25:35:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '25:35:2', arabic: "ءَاتَيْنَا", transliteration: "ātaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave", ur: "ہم gave" } },
      { id: '25:35:3', arabic: "مُوسَى", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '25:35:4', arabic: "ٱلْكِتَـٰبَ", transliteration: "l-kitāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Scripture", ur: "the Scripture" } },
      { id: '25:35:5', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and We appointed", ur: "اور ہم appointed" } },
      { id: '25:35:6', arabic: "مَعَهُۥٓ", transliteration: "maʿahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with him", ur: "ساتھ him" } },
      { id: '25:35:7', arabic: "أَخَاهُ", transliteration: "akhāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his brother", ur: "his brother" } },
      { id: '25:35:8', arabic: "هَـٰرُونَ", transliteration: "hārūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Harun", ur: "Harun" } },
      { id: '25:35:9', arabic: "وَزِيرًۭا", transliteration: "wazīran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(as) an assistant", ur: "(as) an assistant" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  36: {
    text: "فَقُلْنَا ٱذْهَبَآ إِلَى ٱلْقَوْمِ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَا فَدَمَّرْنَـٰهُمْ تَدْمِيرًۭا",
    translation: {
      en: "",
      ur: "اور کہا کہ دونوں ان لوگوں کے پاس جاؤ جن لوگوں نے ہماری آیتوں کی تکذیب کی۔ (جب تکذیب پر اڑے رہے) تو ہم نے ان کو ہلاک کر ڈالا",
    },
    words: [
      { id: '25:36:1', arabic: "فَقُلْنَا", transliteration: "faqul'nā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "Then We said", ur: "پھر ہم کہا" } },
      { id: '25:36:2', arabic: "ٱذْهَبَآ", transliteration: "idh'habā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Go both of you", ur: "Go both of تم" } },
      { id: '25:36:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '25:36:4', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '25:36:5', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '25:36:6', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have denied", ur: "have denied" } },
      { id: '25:36:7', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '25:36:8', arabic: "فَدَمَّرْنَـٰهُمْ", transliteration: "fadammarnāhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then We destroyed them", ur: "پھر ہم destroyed them" } },
      { id: '25:36:9', arabic: "تَدْمِيرًۭا", transliteration: "tadmīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(with) destruction", ur: "(ساتھ) destruction" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  37: {
    text: "وَقَوْمَ نُوحٍۢ لَّمَّا كَذَّبُوا۟ ٱلرُّسُلَ أَغْرَقْنَـٰهُمْ وَجَعَلْنَـٰهُمْ لِلنَّاسِ ءَايَةًۭ ۖ وَأَعْتَدْنَا لِلظَّـٰلِمِينَ عَذَابًا أَلِيمًۭا",
    translation: {
      en: "",
      ur: "اور نوح کی قوم نے بھی جب پیغمبروں کو جھٹلایا تو ہم نے انہیں غرق کر ڈالا اور لوگوں کے لئے نشانی بنا دیا۔ اور ظالموں کے لئے ہم نے دکھ دینے والا عذاب تیار کر رکھا ہے",
    },
    words: [
      { id: '25:37:1', arabic: "وَقَوْمَ", transliteration: "waqawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "And (the) people", ur: "اور (the) لوگ" } },
      { id: '25:37:2', arabic: "نُوحٍۢ", transliteration: "nūḥin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Nuh", ur: "(of) Nuh" } },
      { id: '25:37:3', arabic: "لَّمَّا", transliteration: "lammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '25:37:4', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they denied", ur: "وہ لوگ denied" } },
      { id: '25:37:5', arabic: "ٱلرُّسُلَ", transliteration: "l-rusula", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } },
      { id: '25:37:6', arabic: "أَغْرَقْنَـٰهُمْ", transliteration: "aghraqnāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We drowned them", ur: "ہم drowned them" } },
      { id: '25:37:7', arabic: "وَجَعَلْنَـٰهُمْ", transliteration: "wajaʿalnāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We made them", ur: "اور ہم made them" } },
      { id: '25:37:8', arabic: "لِلنَّاسِ", transliteration: "lilnnāsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for mankind", ur: "for mankind" } },
      { id: '25:37:9', arabic: "ءَايَةًۭ ۖ", transliteration: "āyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sign", ur: "a نشانی" } },
      { id: '25:37:10', arabic: "وَأَعْتَدْنَا", transliteration: "wa-aʿtadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We have prepared", ur: "اور ہم have prepared" } },
      { id: '25:37:11', arabic: "لِلظَّـٰلِمِينَ", transliteration: "lilẓẓālimīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the wrongdoers", ur: "for the wrongdoers" } },
      { id: '25:37:12', arabic: "عَذَابًا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '25:37:13', arabic: "أَلِيمًۭا", transliteration: "alīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "painful", ur: "painful" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  38: {
    text: "وَعَادًۭا وَثَمُودَا۟ وَأَصْحَـٰبَ ٱلرَّسِّ وَقُرُونًۢا بَيْنَ ذَٰلِكَ كَثِيرًۭا",
    translation: {
      en: "",
      ur: "اور عاد اور ثمود اور کنوئیں والوں اور ان کے درمیان اور بہت سی جماعتوں کو بھی (ہلاک کر ڈالا)",
    },
    words: [
      { id: '25:38:1', arabic: "وَعَادًۭا", transliteration: "waʿādan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Ad", ur: "اور Ad" } },
      { id: '25:38:2', arabic: "وَثَمُودَا۟", transliteration: "wathamūdā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Thamud", ur: "اور Thamud" } },
      { id: '25:38:3', arabic: "وَأَصْحَـٰبَ", transliteration: "wa-aṣḥāba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (the) dwellers", ur: "اور (the) dwellers" } },
      { id: '25:38:4', arabic: "ٱلرَّسِّ", transliteration: "l-rasi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Ar-rass", ur: "(of) Ar-rass" } },
      { id: '25:38:5', arabic: "وَقُرُونًۢا", transliteration: "waqurūnan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and generations", ur: "اور generations" } },
      { id: '25:38:6', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '25:38:7', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '25:38:8', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ],
    },
  },
  39: {
    text: "وَكُلًّۭا ضَرَبْنَا لَهُ ٱلْأَمْثَـٰلَ ۖ وَكُلًّۭا تَبَّرْنَا تَتْبِيرًۭا",
    translation: {
      en: "",
      ur: "اور سب کے (سمجھانے کے لئے) ہم نے مثالیں بیان کیں اور (نہ ماننے پر) سب کا تہس نہس کردیا",
    },
    words: [
      { id: '25:39:1', arabic: "وَكُلًّۭا", transliteration: "wakullan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And each", ur: "اور ہر" } },
      { id: '25:39:2', arabic: "ضَرَبْنَا", transliteration: "ḍarabnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have set forth", ur: "ہم have set forth" } },
      { id: '25:39:3', arabic: "لَهُ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '25:39:4', arabic: "ٱلْأَمْثَـٰلَ ۖ", transliteration: "l-amthāla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the examples", ur: "the examples" } },
      { id: '25:39:5', arabic: "وَكُلًّۭا", transliteration: "wakullan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and each", ur: "اور ہر" } },
      { id: '25:39:6', arabic: "تَبَّرْنَا", transliteration: "tabbarnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We destroyed", ur: "ہم destroyed" } },
      { id: '25:39:7', arabic: "تَتْبِيرًۭا", transliteration: "tatbīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(with) destruction", ur: "(ساتھ) destruction" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  40: {
    text: "وَلَقَدْ أَتَوْا۟ عَلَى ٱلْقَرْيَةِ ٱلَّتِىٓ أُمْطِرَتْ مَطَرَ ٱلسَّوْءِ ۚ أَفَلَمْ يَكُونُوا۟ يَرَوْنَهَا ۚ بَلْ كَانُوا۟ لَا يَرْجُونَ نُشُورًۭا",
    translation: {
      en: "",
      ur: "اور یہ کافر اس بستی پر بھی گزر چکے ہیں جس پر بری طرح کا مینہ برسایا گیا تھا۔ کیا وہ اس کو دیکھتے نہ ہوں گے۔ بلکہ ان کو (مرنے کے بعد) جی اُٹھنے کی امید ہی نہیں تھی۔",
    },
    words: [
      { id: '25:40:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '25:40:2', arabic: "أَتَوْا۟", transliteration: "ataw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have come", ur: "وہ لوگ have come" } },
      { id: '25:40:3', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '25:40:4', arabic: "ٱلْقَرْيَةِ", transliteration: "l-qaryati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the town", ur: "the town" } },
      { id: '25:40:5', arabic: "ٱلَّتِىٓ", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '25:40:6', arabic: "أُمْطِرَتْ", transliteration: "um'ṭirat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was showered", ur: "was showered" } },
      { id: '25:40:7', arabic: "مَطَرَ", transliteration: "maṭara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) a rain", ur: "(ساتھ) a rain" } },
      { id: '25:40:8', arabic: "ٱلسَّوْءِ ۚ", transliteration: "l-sawi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) evil", ur: "(of) برا" } },
      { id: '25:40:9', arabic: "أَفَلَمْ", transliteration: "afalam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then do not", ur: "پھر do نہیں" } },
      { id: '25:40:10', arabic: "يَكُونُوا۟", transliteration: "yakūnū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they [were]", ur: "وہ لوگ [were]" } },
      { id: '25:40:11', arabic: "يَرَوْنَهَا ۚ", transliteration: "yarawnahā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "see it", ur: "دیکھنا it" } },
      { id: '25:40:12', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '25:40:13', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they are", ur: "وہ لوگ are" } },
      { id: '25:40:14', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '25:40:15', arabic: "يَرْجُونَ", transliteration: "yarjūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "expecting", ur: "expecting" } },
      { id: '25:40:16', arabic: "نُشُورًۭا", transliteration: "nushūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Resurrection", ur: "Resurrection" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'نفی + فعل' }
      ],
    },
  },
  41: {
    text: "وَإِذَا رَأَوْكَ إِن يَتَّخِذُونَكَ إِلَّا هُزُوًا أَهَـٰذَا ٱلَّذِى بَعَثَ ٱللَّهُ رَسُولًا",
    translation: {
      en: "",
      ur: "اور یہ لوگ جب تم کو دیکھتے ہیں تو تمہاری ہنسی اُڑاتے ہیں۔ کہ کیا یہی شخص ہے جس کو خدا نے پیغمبر بنا کر بھیجا ہے",
    },
    words: [
      { id: '25:41:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '25:41:2', arabic: "رَأَوْكَ", transliteration: "ra-awka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see you", ur: "وہ لوگ دیکھنا تم" } },
      { id: '25:41:3', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '25:41:4', arabic: "يَتَّخِذُونَكَ", transliteration: "yattakhidhūnaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they take you", ur: "وہ لوگ take تم" } },
      { id: '25:41:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '25:41:6', arabic: "هُزُوًا", transliteration: "huzuwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) mockery", ur: "(میں) mockery" } },
      { id: '25:41:7', arabic: "أَهَـٰذَا", transliteration: "ahādhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is this", ur: "Is this" } },
      { id: '25:41:8', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the one whom", ur: "the one whom" } },
      { id: '25:41:9', arabic: "بَعَثَ", transliteration: "baʿatha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah has sent", ur: "اللہ has sent" } },
      { id: '25:41:10', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah has sent", ur: "اللہ has sent" } },
      { id: '25:41:11', arabic: "رَسُولًا", transliteration: "rasūlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a Messenger", ur: "(as) a رسول" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  42: {
    text: "إِن كَادَ لَيُضِلُّنَا عَنْ ءَالِهَتِنَا لَوْلَآ أَن صَبَرْنَا عَلَيْهَا ۚ وَسَوْفَ يَعْلَمُونَ حِينَ يَرَوْنَ ٱلْعَذَابَ مَنْ أَضَلُّ سَبِيلًا",
    translation: {
      en: "",
      ur: "اگر ہم نے اپنے معبودوں کے بارے میں ثابت قدم نہ رہتے تو یہ ضرور ہم کو بہکا دیتا۔ (اور ان سے پھیر دیتا) اور یہ عنقریب معلوم کرلیں گے جب عذاب دیکھیں گے کہ سیدھے رستے سے کون بھٹکا ہوا ہے",
    },
    words: [
      { id: '25:42:1', arabic: "إِن", transliteration: "in", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He would have almost", ur: "وہ would have almost" } },
      { id: '25:42:2', arabic: "كَادَ", transliteration: "kāda", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He would have almost", ur: "وہ would have almost" } },
      { id: '25:42:3', arabic: "لَيُضِلُّنَا", transliteration: "layuḍillunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[surely] misled us", ur: "[یقیناً] misled us" } },
      { id: '25:42:4', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '25:42:5', arabic: "ءَالِهَتِنَا", transliteration: "ālihatinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our gods", ur: "our gods" } },
      { id: '25:42:6', arabic: "لَوْلَآ", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if not", ur: "if نہیں" } },
      { id: '25:42:7', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '25:42:8', arabic: "صَبَرْنَا", transliteration: "ṣabarnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we had been steadfast", ur: "ہم had been steadfast" } },
      { id: '25:42:9', arabic: "عَلَيْهَا ۚ", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '25:42:10', arabic: "وَسَوْفَ", transliteration: "wasawfa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And soon", ur: "اور soon" } },
      { id: '25:42:11', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "will know", ur: "will جاننا" } },
      { id: '25:42:12', arabic: "حِينَ", transliteration: "ḥīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '25:42:13', arabic: "يَرَوْنَ", transliteration: "yarawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will see", ur: "وہ لوگ will دیکھنا" } },
      { id: '25:42:14', arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '25:42:15', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '25:42:16', arabic: "أَضَلُّ", transliteration: "aḍallu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) more astray", ur: "(is) more astray" } },
      { id: '25:42:17', arabic: "سَبِيلًا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from the) way", ur: "(سے the) راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  43: {
    text: "أَرَءَيْتَ مَنِ ٱتَّخَذَ إِلَـٰهَهُۥ هَوَىٰهُ أَفَأَنتَ تَكُونُ عَلَيْهِ وَكِيلًا",
    translation: {
      en: "",
      ur: "کیا تم نے اس شخص کو دیکھا جس نے خواہش نفس کو معبود بنا رکھا ہے تو کیا تم اس پر نگہبان ہوسکتے ہو",
    },
    words: [
      { id: '25:43:1', arabic: "أَرَءَيْتَ", transliteration: "ara-ayta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Have you seen", ur: "Have تم seen" } },
      { id: '25:43:2', arabic: "مَنِ", transliteration: "mani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(one) who", ur: "(one) جو" } },
      { id: '25:43:3', arabic: "ٱتَّخَذَ", transliteration: "ittakhadha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "takes", ur: "takes" } },
      { id: '25:43:4', arabic: "إِلَـٰهَهُۥ", transliteration: "ilāhahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) his god", ur: "(as) his اللہ" } },
      { id: '25:43:5', arabic: "هَوَىٰهُ", transliteration: "hawāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his own desire", ur: "his own desire" } },
      { id: '25:43:6', arabic: "أَفَأَنتَ", transliteration: "afa-anta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then would you", ur: "پھر would تم" } },
      { id: '25:43:7', arabic: "تَكُونُ", transliteration: "takūnu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '25:43:8', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over him", ur: "اوپر him" } },
      { id: '25:43:9', arabic: "وَكِيلًا", transliteration: "wakīlan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a guardian", ur: "a guardian" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  44: {
    text: "أَمْ تَحْسَبُ أَنَّ أَكْثَرَهُمْ يَسْمَعُونَ أَوْ يَعْقِلُونَ ۚ إِنْ هُمْ إِلَّا كَٱلْأَنْعَـٰمِ ۖ بَلْ هُمْ أَضَلُّ سَبِيلًا",
    translation: {
      en: "",
      ur: "یا تم یہ خیال کرتے ہو کہ ان میں اکثر سنتے یا سمجھتے ہیں (نہیں) یہ تو چوپایوں کی طرح ہیں بلکہ ان سے بھی زیادہ گمراہ ہیں",
    },
    words: [
      { id: '25:44:1', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '25:44:2', arabic: "تَحْسَبُ", transliteration: "taḥsabu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do you think", ur: "do تم think" } },
      { id: '25:44:3', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '25:44:4', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '25:44:5', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hear", ur: "سننا" } },
      { id: '25:44:6', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '25:44:7', arabic: "يَعْقِلُونَ ۚ", transliteration: "yaʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "understand", ur: "understand" } },
      { id: '25:44:8', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '25:44:9', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '25:44:10', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) except", ur: "(are) سوائے" } },
      { id: '25:44:11', arabic: "كَٱلْأَنْعَـٰمِ ۖ", transliteration: "kal-anʿāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like cattle", ur: "like cattle" } },
      { id: '25:44:12', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '25:44:13', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '25:44:14', arabic: "أَضَلُّ", transliteration: "aḍallu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) more astray", ur: "(are) more astray" } },
      { id: '25:44:15', arabic: "سَبِيلًا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from the) way", ur: "(سے the) راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  45: {
    text: "أَلَمْ تَرَ إِلَىٰ رَبِّكَ كَيْفَ مَدَّ ٱلظِّلَّ وَلَوْ شَآءَ لَجَعَلَهُۥ سَاكِنًۭا ثُمَّ جَعَلْنَا ٱلشَّمْسَ عَلَيْهِ دَلِيلًۭا",
    translation: {
      en: "",
      ur: "بلکہ تم نے اپنے پروردگار (کی قدرت) کو نہیں دیکھا کہ وہ سائے کو کس طرح دراز کر (کے پھیلا) دیتا ہے۔ اور اگر وہ چاہتا تو اس کو (بےحرکت) ٹھیرا رکھتا پھر سورج کو اس کا رہنما بنا دیتا ہے",
    },
    words: [
      { id: '25:45:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you not", ur: "Do تم نہیں" } },
      { id: '25:45:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "see", ur: "دیکھنا" } },
      { id: '25:45:3', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[to]", ur: "[کو]" } },
      { id: '25:45:4', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '25:45:5', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '25:45:6', arabic: "مَدَّ", transliteration: "madda", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He extends", ur: "وہ extends" } },
      { id: '25:45:7', arabic: "ٱلظِّلَّ", transliteration: "l-ẓila", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the shadow", ur: "the shadow" } },
      { id: '25:45:8', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '25:45:9', arabic: "شَآءَ", transliteration: "shāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He willed", ur: "وہ willed" } },
      { id: '25:45:10', arabic: "لَجَعَلَهُۥ", transliteration: "lajaʿalahu", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "surely He (could) have made it", ur: "یقیناً وہ (could) have made it" } },
      { id: '25:45:11', arabic: "سَاكِنًۭا", transliteration: "sākinan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "stationary", ur: "stationary" } },
      { id: '25:45:12', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '25:45:13', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We made", ur: "ہم made" } },
      { id: '25:45:14', arabic: "ٱلشَّمْسَ", transliteration: "l-shamsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sun", ur: "the sun" } },
      { id: '25:45:15', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '25:45:16', arabic: "دَلِيلًۭا", transliteration: "dalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an indication", ur: "an indication" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  46: {
    text: "ثُمَّ قَبَضْنَـٰهُ إِلَيْنَا قَبْضًۭا يَسِيرًۭا",
    translation: {
      en: "",
      ur: "پھر اس کو ہم آہستہ آہستہ اپنی طرف سمیٹ لیتے ہیں",
    },
    words: [
      { id: '25:46:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '25:46:2', arabic: "قَبَضْنَـٰهُ", transliteration: "qabaḍnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We withdraw it", ur: "ہم withdraw it" } },
      { id: '25:46:3', arabic: "إِلَيْنَا", transliteration: "ilaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Us", ur: "کو Us" } },
      { id: '25:46:4', arabic: "قَبْضًۭا", transliteration: "qabḍan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a withdrawal", ur: "a withdrawal" } },
      { id: '25:46:5', arabic: "يَسِيرًۭا", transliteration: "yasīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "gradual", ur: "gradual" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  47: {
    text: "وَهُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلَّيْلَ لِبَاسًۭا وَٱلنَّوْمَ سُبَاتًۭا وَجَعَلَ ٱلنَّهَارَ نُشُورًۭا",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے رات کو تمہارے لئے پردہ اور نیند کو آرام بنایا اور دن کو اُٹھ کھڑے ہونے کا وقت ٹھہرایا",
    },
    words: [
      { id: '25:47:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '25:47:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '25:47:3', arabic: "جَعَلَ", transliteration: "jaʿala", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "made", ur: "made" } },
      { id: '25:47:4', arabic: "لَكُمُ", transliteration: "lakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '25:47:5', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '25:47:6', arabic: "لِبَاسًۭا", transliteration: "libāsan", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(as) a covering", ur: "(as) a covering" } },
      { id: '25:47:7', arabic: "وَٱلنَّوْمَ", transliteration: "wal-nawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sleep", ur: "اور the sleep" } },
      { id: '25:47:8', arabic: "سُبَاتًۭا", transliteration: "subātan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a rest", ur: "a rest" } },
      { id: '25:47:9', arabic: "وَجَعَلَ", transliteration: "wajaʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and made", ur: "اور made" } },
      { id: '25:47:10', arabic: "ٱلنَّهَارَ", transliteration: "l-nahāra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the day", ur: "the دن" } },
      { id: '25:47:11', arabic: "نُشُورًۭا", transliteration: "nushūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a resurrection", ur: "a resurrection" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  48: {
    text: "وَهُوَ ٱلَّذِىٓ أَرْسَلَ ٱلرِّيَـٰحَ بُشْرًۢا بَيْنَ يَدَىْ رَحْمَتِهِۦ ۚ وَأَنزَلْنَا مِنَ ٱلسَّمَآءِ مَآءًۭ طَهُورًۭا",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جو اپنی رحمت کے مینھہ کے آگے ہواؤں کو خوش خبری بنا کر بھیجتا ہے۔ اور ہم آسمان سے پاک (اور نتھرا ہوا) پانی برساتے ہیں",
    },
    words: [
      { id: '25:48:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '25:48:2', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '25:48:3', arabic: "أَرْسَلَ", transliteration: "arsala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sends", ur: "sends" } },
      { id: '25:48:4', arabic: "ٱلرِّيَـٰحَ", transliteration: "l-riyāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the winds", ur: "the winds" } },
      { id: '25:48:5', arabic: "بُشْرًۢا", transliteration: "bush'ran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) glad tidings", ur: "(as) glad tidings" } },
      { id: '25:48:6', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '25:48:7', arabic: "يَدَىْ", transliteration: "yaday", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '25:48:8', arabic: "رَحْمَتِهِۦ ۚ", transliteration: "raḥmatihi", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "His Mercy", ur: "His رحمت" } },
      { id: '25:48:9', arabic: "وَأَنزَلْنَا", transliteration: "wa-anzalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ز ل", meaning: { en: "and We send down", ur: "اور ہم send down" } },
      { id: '25:48:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '25:48:11', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '25:48:12', arabic: "مَآءًۭ", transliteration: "māan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "water", ur: "پانی" } },
      { id: '25:48:13', arabic: "طَهُورًۭا", transliteration: "ṭahūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "pure", ur: "pure" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  49: {
    text: "لِّنُحْـِۧىَ بِهِۦ بَلْدَةًۭ مَّيْتًۭا وَنُسْقِيَهُۥ مِمَّا خَلَقْنَآ أَنْعَـٰمًۭا وَأَنَاسِىَّ كَثِيرًۭا",
    translation: {
      en: "",
      ur: "تاکہ اس سے شہر مردہ (یعنی زمین افتادہ) کو زندہ کردیں اور پھر اسے بہت سے چوپایوں اور آدمیوں کو جو ہم نے پیدا کئے ہیں پلاتے ہیں",
    },
    words: [
      { id: '25:49:1', arabic: "لِّنُحْـِۧىَ", transliteration: "linuḥ'yiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That We may give life", ur: "وہ ہم may give زندگی" } },
      { id: '25:49:2', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "thereby", ur: "thereby" } },
      { id: '25:49:3', arabic: "بَلْدَةًۭ", transliteration: "baldatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) a land", ur: "(کو) a land" } },
      { id: '25:49:4', arabic: "مَّيْتًۭا", transliteration: "maytan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "dead", ur: "dead" } },
      { id: '25:49:5', arabic: "وَنُسْقِيَهُۥ", transliteration: "wanus'qiyahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We give drink", ur: "اور ہم give drink" } },
      { id: '25:49:6', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "thereof", ur: "اس سے" } },
      { id: '25:49:7', arabic: "خَلَقْنَآ", transliteration: "khalaqnā", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "(to those) We created", ur: "(کو those) ہم پیدا کیا" } },
      { id: '25:49:8', arabic: "أَنْعَـٰمًۭا", transliteration: "anʿāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "cattle", ur: "cattle" } },
      { id: '25:49:9', arabic: "وَأَنَاسِىَّ", transliteration: "wa-anāsiyya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and men", ur: "اور men" } },
      { id: '25:49:10', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    text: "وَلَقَدْ صَرَّفْنَـٰهُ بَيْنَهُمْ لِيَذَّكَّرُوا۟ فَأَبَىٰٓ أَكْثَرُ ٱلنَّاسِ إِلَّا كُفُورًۭا",
    translation: {
      en: "",
      ur: "اور ہم نے اس (قرآن کی آیتوں) کو طرح طرح سے لوگوں میں بیان کیا تاکہ نصیحت پکڑیں مگر بہت سے لوگوں نے انکار کے سوا قبول نہ کیا",
    },
    words: [
      { id: '25:50:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '25:50:2', arabic: "صَرَّفْنَـٰهُ", transliteration: "ṣarrafnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have distributed it", ur: "ہم have distributed it" } },
      { id: '25:50:3', arabic: "بَيْنَهُمْ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '25:50:4', arabic: "لِيَذَّكَّرُوا۟", transliteration: "liyadhakkarū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that they may remember", ur: "وہ وہ لوگ may remember" } },
      { id: '25:50:5', arabic: "فَأَبَىٰٓ", transliteration: "fa-abā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but refuse", ur: "لیکن refuse" } },
      { id: '25:50:6', arabic: "أَكْثَرُ", transliteration: "aktharu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "most", ur: "most" } },
      { id: '25:50:7', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the people", ur: "(of) the لوگ" } },
      { id: '25:50:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '25:50:9', arabic: "كُفُورًۭا", transliteration: "kufūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disbelief", ur: "disbelief" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  51: {
    text: "وَلَوْ شِئْنَا لَبَعَثْنَا فِى كُلِّ قَرْيَةٍۢ نَّذِيرًۭا",
    translation: {
      en: "",
      ur: "اور اگر ہم چاہتے تو ہر بستی میں ڈرانے والا بھیج دیتے",
    },
    words: [
      { id: '25:51:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '25:51:2', arabic: "شِئْنَا", transliteration: "shi'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We willed", ur: "ہم willed" } },
      { id: '25:51:3', arabic: "لَبَعَثْنَا", transliteration: "labaʿathnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, We (would) have raised", ur: "یقیناً, ہم (would) have raised" } },
      { id: '25:51:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '25:51:5', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '25:51:6', arabic: "قَرْيَةٍۢ", transliteration: "qaryatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "town", ur: "town" } },
      { id: '25:51:7', arabic: "نَّذِيرًۭا", transliteration: "nadhīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a warner", ur: "a warner" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    text: "فَلَا تُطِعِ ٱلْكَـٰفِرِينَ وَجَـٰهِدْهُم بِهِۦ جِهَادًۭا كَبِيرًۭا",
    translation: {
      en: "",
      ur: "تو تم کافروں کا کہا نہ مانو اور ان سے اس قرآن کے حکم کے مطابق بڑے شدومد سے لڑو",
    },
    words: [
      { id: '25:52:1', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So (do) not", ur: "So (do) نہیں" } },
      { id: '25:52:2', arabic: "تُطِعِ", transliteration: "tuṭiʿi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "obey", ur: "obey" } },
      { id: '25:52:3', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbelievers", ur: "the کافر" } },
      { id: '25:52:4', arabic: "وَجَـٰهِدْهُم", transliteration: "wajāhid'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and strive (against) them", ur: "اور strive (against) them" } },
      { id: '25:52:5', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '25:52:6', arabic: "جِهَادًۭا", transliteration: "jihādan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a striving", ur: "a striving" } },
      { id: '25:52:7', arabic: "كَبِيرًۭا", transliteration: "kabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  53: {
    text: "۞ وَهُوَ ٱلَّذِى مَرَجَ ٱلْبَحْرَيْنِ هَـٰذَا عَذْبٌۭ فُرَاتٌۭ وَهَـٰذَا مِلْحٌ أُجَاجٌۭ وَجَعَلَ بَيْنَهُمَا بَرْزَخًۭا وَحِجْرًۭا مَّحْجُورًۭا",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے دو دریاؤں کو ملا دیا ایک کا پانی شیریں ہے پیاس بجھانے والا اور دوسرے کا کھاری چھاتی جلانے والا۔ اور دونوں کے درمیان ایک آڑ اور مضبوط اوٹ بنادی",
    },
    words: [
      { id: '25:53:1', arabic: "۞ وَهُوَ", transliteration: "wahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '25:53:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '25:53:3', arabic: "مَرَجَ", transliteration: "maraja", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(has) released", ur: "(has) released" } },
      { id: '25:53:4', arabic: "ٱلْبَحْرَيْنِ", transliteration: "l-baḥrayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the two seas", ur: "the two seas" } },
      { id: '25:53:5', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[this] (one)", ur: "[this] (one)" } },
      { id: '25:53:6', arabic: "عَذْبٌۭ", transliteration: "ʿadhbun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "palatable", ur: "palatable" } },
      { id: '25:53:7', arabic: "فُرَاتٌۭ", transliteration: "furātun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "and sweet", ur: "اور sweet" } },
      { id: '25:53:8', arabic: "وَهَـٰذَا", transliteration: "wahādhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [this] (one)", ur: "اور [this] (one)" } },
      { id: '25:53:9', arabic: "مِلْحٌ", transliteration: "mil'ḥun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "salty", ur: "salty" } },
      { id: '25:53:10', arabic: "أُجَاجٌۭ", transliteration: "ujājun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(and) bitter", ur: "(اور) bitter" } },
      { id: '25:53:11', arabic: "وَجَعَلَ", transliteration: "wajaʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and He has made", ur: "اور وہ has made" } },
      { id: '25:53:12', arabic: "بَيْنَهُمَا", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '25:53:13', arabic: "بَرْزَخًۭا", transliteration: "barzakhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a barrier", ur: "a barrier" } },
      { id: '25:53:14', arabic: "وَحِجْرًۭا", transliteration: "waḥij'ran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a partition", ur: "اور a partition" } },
      { id: '25:53:15', arabic: "مَّحْجُورًۭا", transliteration: "maḥjūran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "forbidden", ur: "forbidden" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  54: {
    text: "وَهُوَ ٱلَّذِى خَلَقَ مِنَ ٱلْمَآءِ بَشَرًۭا فَجَعَلَهُۥ نَسَبًۭا وَصِهْرًۭا ۗ وَكَانَ رَبُّكَ قَدِيرًۭا",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے پانی سے آدمی پیدا کیا۔ پھر اس کو صاحب نسب اور صاحب قرابت دامادی بنایا۔ اور تمہارا پروردگار (ہر طرح کی) قدرت رکھتا ہے",
    },
    words: [
      { id: '25:54:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '25:54:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '25:54:3', arabic: "خَلَقَ", transliteration: "khalaqa", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "has created", ur: "has پیدا کیا" } },
      { id: '25:54:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '25:54:5', arabic: "ٱلْمَآءِ", transliteration: "l-māi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the water", ur: "the پانی" } },
      { id: '25:54:6', arabic: "بَشَرًۭا", transliteration: "basharan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "human being", ur: "human being" } },
      { id: '25:54:7', arabic: "فَجَعَلَهُۥ", transliteration: "fajaʿalahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ج ع ل", meaning: { en: "and has made (for) him", ur: "اور has made (for) him" } },
      { id: '25:54:8', arabic: "نَسَبًۭا", transliteration: "nasaban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "blood relationship", ur: "blood relationship" } },
      { id: '25:54:9', arabic: "وَصِهْرًۭا ۗ", transliteration: "waṣih'ran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and marriage relationship", ur: "اور marriage relationship" } },
      { id: '25:54:10', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '25:54:11', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '25:54:12', arabic: "قَدِيرًۭا", transliteration: "qadīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Powerful", ur: "سب-Powerful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ],
    },
  },
  55: {
    text: "وَيَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُهُمْ وَلَا يَضُرُّهُمْ ۗ وَكَانَ ٱلْكَافِرُ عَلَىٰ رَبِّهِۦ ظَهِيرًۭا",
    translation: {
      en: "",
      ur: "اور یہ لوگ خدا کو چھوڑ کر ایسی چیز کی پرستش کر تے ہیں جو نہ ان کو فائدہ پہنچا سکے اور نہ ضرر۔ اور کافر اپنے پروردگار کی مخالفت میں بڑا زور مارتا ہے",
    },
    words: [
      { id: '25:55:1', arabic: "وَيَعْبُدُونَ", transliteration: "wayaʿbudūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But they worship", ur: "لیکن وہ لوگ عبادت" } },
      { id: '25:55:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '25:55:3', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '25:55:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '25:55:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '25:55:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not profits them", ur: "نہیں profits them" } },
      { id: '25:55:7', arabic: "يَنفَعُهُمْ", transliteration: "yanfaʿuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "not profits them", ur: "نہیں profits them" } },
      { id: '25:55:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '25:55:9', arabic: "يَضُرُّهُمْ ۗ", transliteration: "yaḍurruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "harms them", ur: "harms them" } },
      { id: '25:55:10', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and is", ur: "اور is" } },
      { id: '25:55:11', arabic: "ٱلْكَافِرُ", transliteration: "l-kāfiru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbeliever", ur: "the disbeliever" } },
      { id: '25:55:12', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '25:55:13', arabic: "رَبِّهِۦ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his Lord", ur: "his رب" } },
      { id: '25:55:14', arabic: "ظَهِيرًۭا", transliteration: "ẓahīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a helper", ur: "a helper" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  56: {
    text: "وَمَآ أَرْسَلْنَـٰكَ إِلَّا مُبَشِّرًۭا وَنَذِيرًۭا",
    translation: {
      en: "",
      ur: "اور ہم نے (اے محمدﷺ) تم کو صرف خوشی اور عذاب کی خبر سنانے کو بھیجا ہے",
    },
    words: [
      { id: '25:56:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '25:56:2', arabic: "أَرْسَلْنَـٰكَ", transliteration: "arsalnāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We sent you", ur: "ہم sent تم" } },
      { id: '25:56:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '25:56:4', arabic: "مُبَشِّرًۭا", transliteration: "mubashiran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a bearer of glad tidings", ur: "(as) a bearer of glad tidings" } },
      { id: '25:56:5', arabic: "وَنَذِيرًۭا", transliteration: "wanadhīran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a warner", ur: "اور a warner" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  57: {
    text: "قُلْ مَآ أَسْـَٔلُكُمْ عَلَيْهِ مِنْ أَجْرٍ إِلَّا مَن شَآءَ أَن يَتَّخِذَ إِلَىٰ رَبِّهِۦ سَبِيلًۭا",
    translation: {
      en: "",
      ur: "کہہ دو کہ میں تم سے اس (کام) کی اجرت نہیں مانگتا، ہاں جو شخص چاہے اپنے پروردگار کی طرف جانے کا رستہ اختیار کرے",
    },
    words: [
      { id: '25:57:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '25:57:2', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '25:57:3', arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I ask (of) you", ur: "میں ask (of) تم" } },
      { id: '25:57:4', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '25:57:5', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '25:57:6', arabic: "أَجْرٍ", transliteration: "ajrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "payment", ur: "payment" } },
      { id: '25:57:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '25:57:8', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(that) whoever wills", ur: "(وہ) whoever wills" } },
      { id: '25:57:9', arabic: "شَآءَ", transliteration: "shāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(that) whoever wills", ur: "(وہ) whoever wills" } },
      { id: '25:57:10', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '25:57:11', arabic: "يَتَّخِذَ", transliteration: "yattakhidha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take", ur: "take" } },
      { id: '25:57:12', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '25:57:13', arabic: "رَبِّهِۦ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his Lord", ur: "his رب" } },
      { id: '25:57:14', arabic: "سَبِيلًۭا", transliteration: "sabīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a way", ur: "a راستہ" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  58: {
    text: "وَتَوَكَّلْ عَلَى ٱلْحَىِّ ٱلَّذِى لَا يَمُوتُ وَسَبِّحْ بِحَمْدِهِۦ ۚ وَكَفَىٰ بِهِۦ بِذُنُوبِ عِبَادِهِۦ خَبِيرًا",
    translation: {
      en: "",
      ur: "اور اس (خدائے) زندہ پر بھروسہ رکھو جو (کبھی) نہیں مرے گا اور اس کی تعریف کے ساتھ تسبیح کرتے رہو۔ اور وہ اپنے بندوں کے گناہوں سے خبر رکھنے کو کافی ہے",
    },
    words: [
      { id: '25:58:1', arabic: "وَتَوَكَّلْ", transliteration: "watawakkal", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And put your trust", ur: "اور put your trust" } },
      { id: '25:58:2', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '25:58:3', arabic: "ٱلْحَىِّ", transliteration: "l-ḥayi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the Ever-Living", ur: "the Ever-Living" } },
      { id: '25:58:4', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '25:58:5', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "does not die", ur: "does نہیں die" } },
      { id: '25:58:6', arabic: "يَمُوتُ", transliteration: "yamūtu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does not die", ur: "does نہیں die" } },
      { id: '25:58:7', arabic: "وَسَبِّحْ", transliteration: "wasabbiḥ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and glorify", ur: "اور glorify" } },
      { id: '25:58:8', arabic: "بِحَمْدِهِۦ ۚ", transliteration: "biḥamdihi", pos: ['P+N'], posLabel: 'P+N', root: "ح م د", meaning: { en: "with His Praise", ur: "ساتھ His Praise" } },
      { id: '25:58:9', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And sufficient is", ur: "اور sufficient is" } },
      { id: '25:58:10', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '25:58:11', arabic: "بِذُنُوبِ", transliteration: "bidhunūbi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "regarding the sins", ur: "regarding the sins" } },
      { id: '25:58:12', arabic: "عِبَادِهِۦ", transliteration: "ʿibādihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) His slaves", ur: "(of) His slaves" } },
      { id: '25:58:13', arabic: "خَبِيرًا", transliteration: "khabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Aware", ur: "سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  59: {
    text: "ٱلَّذِى خَلَقَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا فِى سِتَّةِ أَيَّامٍۢ ثُمَّ ٱسْتَوَىٰ عَلَى ٱلْعَرْشِ ۚ ٱلرَّحْمَـٰنُ فَسْـَٔلْ بِهِۦ خَبِيرًۭا",
    translation: {
      en: "",
      ur: "جس نے آسمانوں اور زمین کو اور جو کچھ ان دونوں کے درمیان ہے چھ دن میں پیدا کیا پھر عرش پر جا ٹھہرا وہ (جس کا نام) رحمٰن (یعنی بڑا مہربان ہے) تو اس کا حال کسی باخبر سے دریافت کرلو",
    },
    words: [
      { id: '25:59:1', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "The One Who", ur: "The One جو" } },
      { id: '25:59:2', arabic: "خَلَقَ", transliteration: "khalaqa", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا" } },
      { id: '25:59:3', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '25:59:4', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '25:59:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '25:59:6', arabic: "بَيْنَهُمَا", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) between them", ur: "(is) درمیان them" } },
      { id: '25:59:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '25:59:8', arabic: "سِتَّةِ", transliteration: "sittati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "six", ur: "six" } },
      { id: '25:59:9', arabic: "أَيَّامٍۢ", transliteration: "ayyāmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "periods", ur: "periods" } },
      { id: '25:59:10', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '25:59:11', arabic: "ٱسْتَوَىٰ", transliteration: "is'tawā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He established Himself", ur: "وہ established Himself" } },
      { id: '25:59:12', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '25:59:13', arabic: "ٱلْعَرْشِ ۚ", transliteration: "l-ʿarshi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Throne ", ur: "the Throne " } },
      { id: '25:59:14', arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '25:59:15', arabic: "فَسْـَٔلْ", transliteration: "fasal", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so ask", ur: "so ask" } },
      { id: '25:59:16', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Him", ur: "Him" } },
      { id: '25:59:17', arabic: "خَبِيرًۭا", transliteration: "khabīran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(as He is) All-Aware", ur: "(as وہ is) سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  60: {
    text: "وَإِذَا قِيلَ لَهُمُ ٱسْجُدُوا۟ لِلرَّحْمَـٰنِ قَالُوا۟ وَمَا ٱلرَّحْمَـٰنُ أَنَسْجُدُ لِمَا تَأْمُرُنَا وَزَادَهُمْ نُفُورًۭا ۩",
    translation: {
      en: "",
      ur: "اور جب ان (کفار) سے کہا جاتا ہے کہ رحمٰن کو سجدہ کرو تو کہتے ہیں رحمٰن کیا؟ کیا جس کے لئے تم ہم سے کہتے ہو ہم اس کے آگے سجدہ کریں اور اس سے بدکتے ہیں",
    },
    words: [
      { id: '25:60:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '25:60:2', arabic: "قِيلَ", transliteration: "qīla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "it is said", ur: "it is کہا" } },
      { id: '25:60:3', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '25:60:4', arabic: "ٱسْجُدُوا۟", transliteration: "us'judū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Prostrate", ur: "Prostrate" } },
      { id: '25:60:5', arabic: "لِلرَّحْمَـٰنِ", transliteration: "lilrraḥmāni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the Most Gracious", ur: "کو the بڑا مہربان" } },
      { id: '25:60:6', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They say", ur: "وہ لوگ کہو" } },
      { id: '25:60:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And what", ur: "اور کیا" } },
      { id: '25:60:8', arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the Most Gracious", ur: "(is) the بڑا مہربان" } },
      { id: '25:60:9', arabic: "أَنَسْجُدُ", transliteration: "anasjudu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Should we prostrate", ur: "Should ہم prostrate" } },
      { id: '25:60:10', arabic: "لِمَا", transliteration: "limā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to what", ur: "کو کیا" } },
      { id: '25:60:11', arabic: "تَأْمُرُنَا", transliteration: "tamurunā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you order us", ur: "تم order us" } },
      { id: '25:60:12', arabic: "وَزَادَهُمْ", transliteration: "wazādahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And it increases them", ur: "اور it increases them" } },
      { id: '25:60:13', arabic: "نُفُورًۭا ۩", transliteration: "nufūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) aversion", ur: "(میں) aversion" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  61: {
    text: "تَبَارَكَ ٱلَّذِى جَعَلَ فِى ٱلسَّمَآءِ بُرُوجًۭا وَجَعَلَ فِيهَا سِرَٰجًۭا وَقَمَرًۭا مُّنِيرًۭا",
    translation: {
      en: "",
      ur: "اور (خدا) بڑی برکت والا ہے جس نے آسمانوں میں برج بنائے اور ان میں (آفتاب کا نہایت روشن) چراغ اور چمکتا ہوا چاند بھی بنایا",
    },
    words: [
      { id: '25:61:1', arabic: "تَبَارَكَ", transliteration: "tabāraka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Blessed is He", ur: "Blessed is وہ" } },
      { id: '25:61:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Who", ur: "جو" } },
      { id: '25:61:3', arabic: "جَعَلَ", transliteration: "jaʿala", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "has placed", ur: "has placed" } },
      { id: '25:61:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '25:61:5', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the skies", ur: "the skies" } },
      { id: '25:61:6', arabic: "بُرُوجًۭا", transliteration: "burūjan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "constellations", ur: "constellations" } },
      { id: '25:61:7', arabic: "وَجَعَلَ", transliteration: "wajaʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and has placed", ur: "اور has placed" } },
      { id: '25:61:8', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '25:61:9', arabic: "سِرَٰجًۭا", transliteration: "sirājan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a lamp", ur: "a lamp" } },
      { id: '25:61:10', arabic: "وَقَمَرًۭا", transliteration: "waqamaran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a moon", ur: "اور a moon" } },
      { id: '25:61:11', arabic: "مُّنِيرًۭا", transliteration: "munīran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "shining", ur: "shining" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  62: {
    text: "وَهُوَ ٱلَّذِى جَعَلَ ٱلَّيْلَ وَٱلنَّهَارَ خِلْفَةًۭ لِّمَنْ أَرَادَ أَن يَذَّكَّرَ أَوْ أَرَادَ شُكُورًۭا",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے رات اور دن کو ایک دوسرے کے پیچھے آنے جانے والا بنایا۔ (یہ باتیں) اس شخص کے لئے جو غور کرنا چاہے یا شکرگزاری کا ارادہ کرے (سوچنے اور سمجھنے کی ہیں)",
    },
    words: [
      { id: '25:62:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '25:62:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '25:62:3', arabic: "جَعَلَ", transliteration: "jaʿala", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "made", ur: "made" } },
      { id: '25:62:4', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '25:62:5', arabic: "وَٱلنَّهَارَ", transliteration: "wal-nahāra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the day", ur: "اور the دن" } },
      { id: '25:62:6', arabic: "خِلْفَةًۭ", transliteration: "khil'fatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) succession", ur: "(میں) succession" } },
      { id: '25:62:7', arabic: "لِّمَنْ", transliteration: "liman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for whoever", ur: "for whoever" } },
      { id: '25:62:8', arabic: "أَرَادَ", transliteration: "arāda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "desires", ur: "desires" } },
      { id: '25:62:9', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '25:62:10', arabic: "يَذَّكَّرَ", transliteration: "yadhakkara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "remember", ur: "remember" } },
      { id: '25:62:11', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '25:62:12', arabic: "أَرَادَ", transliteration: "arāda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "desires", ur: "desires" } },
      { id: '25:62:13', arabic: "شُكُورًۭا", transliteration: "shukūran", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "to be thankful", ur: "کو be thankful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  63: {
    text: "وَعِبَادُ ٱلرَّحْمَـٰنِ ٱلَّذِينَ يَمْشُونَ عَلَى ٱلْأَرْضِ هَوْنًۭا وَإِذَا خَاطَبَهُمُ ٱلْجَـٰهِلُونَ قَالُوا۟ سَلَـٰمًۭا",
    translation: {
      en: "",
      ur: "اور خدا کے بندے تو وہ ہیں جو زمین پر آہستگی سے چلتے ہیں اور جب جاہل لوگ ان سے (جاہلانہ) گفتگو کرتے ہیں تو سلام کہتے ہیں",
    },
    words: [
      { id: '25:63:1', arabic: "وَعِبَادُ", transliteration: "waʿibādu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (the) slaves", ur: "اور (the) slaves" } },
      { id: '25:63:2', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(of) the Most Gracious", ur: "(of) the بڑا مہربان" } },
      { id: '25:63:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) those who", ur: "(are) جو لوگ" } },
      { id: '25:63:4', arabic: "يَمْشُونَ", transliteration: "yamshūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "walk", ur: "walk" } },
      { id: '25:63:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '25:63:6', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '25:63:7', arabic: "هَوْنًۭا", transliteration: "hawnan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) humbleness", ur: "(میں) humbleness" } },
      { id: '25:63:8', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and when", ur: "اور when" } },
      { id: '25:63:9', arabic: "خَاطَبَهُمُ", transliteration: "khāṭabahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "address them", ur: "address them" } },
      { id: '25:63:10', arabic: "ٱلْجَـٰهِلُونَ", transliteration: "l-jāhilūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ignorant ones", ur: "the ignorant ones" } },
      { id: '25:63:11', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '25:63:12', arabic: "سَلَـٰمًۭا", transliteration: "salāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Peace", ur: "Peace" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  64: {
    text: "وَٱلَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًۭا وَقِيَـٰمًۭا",
    translation: {
      en: "",
      ur: "اور جو وہ اپنے پروردگار کے آگے سجدے کرکے اور (عجز وادب سے) کھڑے رہ کر راتیں بسر کرتے ہیں",
    },
    words: [
      { id: '25:64:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '25:64:2', arabic: "يَبِيتُونَ", transliteration: "yabītūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "spend (the) night", ur: "spend (the) رات" } },
      { id: '25:64:3', arabic: "لِرَبِّهِمْ", transliteration: "lirabbihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "before their Lord", ur: "پہلے their رب" } },
      { id: '25:64:4', arabic: "سُجَّدًۭا", transliteration: "sujjadan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prostrating", ur: "prostrating" } },
      { id: '25:64:5', arabic: "وَقِيَـٰمًۭا", transliteration: "waqiyāman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and standing", ur: "اور standing" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ],
    },
  },
  65: {
    text: "وَٱلَّذِينَ يَقُولُونَ رَبَّنَا ٱصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ ۖ إِنَّ عَذَابَهَا كَانَ غَرَامًا",
    translation: {
      en: "",
      ur: "اور جو دعا مانگتے رہتے ہیں کہ اے پروردگار دوزخ کے عذاب کو ہم سے دور رکھیو کہ اس کا عذاب بڑی تکلیف کی چیز ہے",
    },
    words: [
      { id: '25:65:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '25:65:2', arabic: "يَقُولُونَ", transliteration: "yaqūlūna", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "say", ur: "کہو" } },
      { id: '25:65:3', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '25:65:4', arabic: "ٱصْرِفْ", transliteration: "iṣ'rif", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Avert", ur: "Avert" } },
      { id: '25:65:5', arabic: "عَنَّا", transliteration: "ʿannā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from us", ur: "سے us" } },
      { id: '25:65:6', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '25:65:7', arabic: "جَهَنَّمَ ۖ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Hell", ur: "(of) جہنم" } },
      { id: '25:65:8', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '25:65:9', arabic: "عَذَابَهَا", transliteration: "ʿadhābahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its punishment", ur: "its عذاب" } },
      { id: '25:65:10', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '25:65:11', arabic: "غَرَامًا", transliteration: "gharāman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "inseparable", ur: "inseparable" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  66: {
    text: "إِنَّهَا سَآءَتْ مُسْتَقَرًّۭا وَمُقَامًۭا",
    translation: {
      en: "",
      ur: "اور دوزخ ٹھیرنے اور رہنے کی بہت بری جگہ ہے",
    },
    words: [
      { id: '25:66:1', arabic: "إِنَّهَا", transliteration: "innahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, it", ur: "بیشک, it" } },
      { id: '25:66:2', arabic: "سَآءَتْ", transliteration: "sāat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) an evil", ur: "(is) an برا" } },
      { id: '25:66:3', arabic: "مُسْتَقَرًّۭا", transliteration: "mus'taqarran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "abode", ur: "abode" } },
      { id: '25:66:4', arabic: "وَمُقَامًۭا", transliteration: "wamuqāman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and resting place", ur: "اور resting place" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  67: {
    text: "وَٱلَّذِينَ إِذَآ أَنفَقُوا۟ لَمْ يُسْرِفُوا۟ وَلَمْ يَقْتُرُوا۟ وَكَانَ بَيْنَ ذَٰلِكَ قَوَامًۭا",
    translation: {
      en: "",
      ur: "اور وہ جب خرچ کرتے ہیں تو نہ بےجا اُڑاتے ہیں اور نہ تنگی کو کام میں لاتے ہیں بلکہ اعتدال کے ساتھ۔ نہ ضرورت سے زیادہ نہ کم",
    },
    words: [
      { id: '25:67:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '25:67:2', arabic: "إِذَآ", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '25:67:3', arabic: "أَنفَقُوا۟", transliteration: "anfaqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they spend", ur: "وہ لوگ spend" } },
      { id: '25:67:4', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(are) not extravagant", ur: "(are) نہیں extravagant" } },
      { id: '25:67:5', arabic: "يُسْرِفُوا۟", transliteration: "yus'rifū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) not extravagant", ur: "(are) نہیں extravagant" } },
      { id: '25:67:6', arabic: "وَلَمْ", transliteration: "walam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and are not stingy", ur: "اور are نہیں stingy" } },
      { id: '25:67:7', arabic: "يَقْتُرُوا۟", transliteration: "yaqturū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "and are not stingy", ur: "اور are نہیں stingy" } },
      { id: '25:67:8', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "but are", ur: "لیکن are" } },
      { id: '25:67:9', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '25:67:10', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that ", ur: "وہ " } },
      { id: '25:67:11', arabic: "قَوَامًۭا", transliteration: "qawāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "moderate", ur: "moderate" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' }
      ],
    },
  },
  68: {
    text: "وَٱلَّذِينَ لَا يَدْعُونَ مَعَ ٱللَّهِ إِلَـٰهًا ءَاخَرَ وَلَا يَقْتُلُونَ ٱلنَّفْسَ ٱلَّتِى حَرَّمَ ٱللَّهُ إِلَّا بِٱلْحَقِّ وَلَا يَزْنُونَ ۚ وَمَن يَفْعَلْ ذَٰلِكَ يَلْقَ أَثَامًۭا",
    translation: {
      en: "",
      ur: "اور وہ جو خدا کے ساتھ کسی اور معبود کو نہیں پکارتے اور جن جاندار کو مار ڈالنا خدا نے حرام کیا ہے اس کو قتل نہیں کرتے مگر جائز طریق پر (یعنی شریعت کے مطابق) اور بدکاری نہیں کرتے۔ اور جو یہ کام کرے گا سخت گناہ میں مبتلا ہوگا",
    },
    words: [
      { id: '25:68:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '25:68:2', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '25:68:3', arabic: "يَدْعُونَ", transliteration: "yadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invoke", ur: "invoke" } },
      { id: '25:68:4', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '25:68:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '25:68:6', arabic: "إِلَـٰهًا", transliteration: "ilāhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '25:68:7', arabic: "ءَاخَرَ", transliteration: "ākhara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "another", ur: "another" } },
      { id: '25:68:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '25:68:9', arabic: "يَقْتُلُونَ", transliteration: "yaqtulūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[they] kill", ur: "[وہ لوگ] kill" } },
      { id: '25:68:10', arabic: "ٱلنَّفْسَ", transliteration: "l-nafsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the soul", ur: "the روح" } },
      { id: '25:68:11', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '25:68:12', arabic: "حَرَّمَ", transliteration: "ḥarrama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah has forbidden", ur: "اللہ has forbidden" } },
      { id: '25:68:13', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah has forbidden", ur: "اللہ has forbidden" } },
      { id: '25:68:14', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '25:68:15', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by right", ur: "by right" } },
      { id: '25:68:16', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '25:68:17', arabic: "يَزْنُونَ ۚ", transliteration: "yaznūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "commit unlawful sexual intercourse", ur: "commit unlawful sexual intercourse" } },
      { id: '25:68:18', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '25:68:19', arabic: "يَفْعَلْ", transliteration: "yafʿal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '25:68:20', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '25:68:21', arabic: "يَلْقَ", transliteration: "yalqa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will meet", ur: "will meet" } },
      { id: '25:68:22', arabic: "أَثَامًۭا", transliteration: "athāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a penalty", ur: "a penalty" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  69: {
    text: "يُضَـٰعَفْ لَهُ ٱلْعَذَابُ يَوْمَ ٱلْقِيَـٰمَةِ وَيَخْلُدْ فِيهِۦ مُهَانًا",
    translation: {
      en: "",
      ur: "قیامت کے دن اس کو دونا عذاب ہوگا اور ذلت وخواری سے ہمیشہ اس میں رہے گا",
    },
    words: [
      { id: '25:69:1', arabic: "يُضَـٰعَفْ", transliteration: "yuḍāʿaf", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will be doubled", ur: "Will be doubled" } },
      { id: '25:69:2', arabic: "لَهُ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '25:69:3', arabic: "ٱلْعَذَابُ", transliteration: "l-ʿadhābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '25:69:4', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '25:69:5', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Resurrection", ur: "(of) Resurrection" } },
      { id: '25:69:6', arabic: "وَيَخْلُدْ", transliteration: "wayakhlud", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he will abide forever", ur: "اور وہ will abide forever" } },
      { id: '25:69:7', arabic: "فِيهِۦ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '25:69:8', arabic: "مُهَانًا", transliteration: "muhānan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humiliated", ur: "humiliated" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    text: "إِلَّا مَن تَابَ وَءَامَنَ وَعَمِلَ عَمَلًۭا صَـٰلِحًۭا فَأُو۟لَـٰٓئِكَ يُبَدِّلُ ٱللَّهُ سَيِّـَٔاتِهِمْ حَسَنَـٰتٍۢ ۗ وَكَانَ ٱللَّهُ غَفُورًۭا رَّحِيمًۭا",
    translation: {
      en: "",
      ur: "مگر جس نے توبہ کی اور ایمان لایا اور اچھے کام کئے تو ایسے لوگوں کے گناہوں کو خدا نیکیوں سے بدل دے گا۔ اور خدا تو بخشنے والا مہربان ہے",
    },
    words: [
      { id: '25:70:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '25:70:2', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(he) who", ur: "(وہ) جو" } },
      { id: '25:70:3', arabic: "تَابَ", transliteration: "tāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "repents", ur: "repents" } },
      { id: '25:70:4', arabic: "وَءَامَنَ", transliteration: "waāmana", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and believes", ur: "اور believes" } },
      { id: '25:70:5', arabic: "وَعَمِلَ", transliteration: "waʿamila", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and does", ur: "اور does" } },
      { id: '25:70:6', arabic: "عَمَلًۭا", transliteration: "ʿamalan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "righteous deeds", ur: "نیک deeds" } },
      { id: '25:70:7', arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "righteous deeds", ur: "نیک deeds" } },
      { id: '25:70:8', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (for) those", ur: "پھر (for) those" } },
      { id: '25:70:9', arabic: "يُبَدِّلُ", transliteration: "yubaddilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah will replace", ur: "اللہ will replace" } },
      { id: '25:70:10', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah will replace", ur: "اللہ will replace" } },
      { id: '25:70:11', arabic: "سَيِّـَٔاتِهِمْ", transliteration: "sayyiātihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their evil deeds", ur: "their برا deeds" } },
      { id: '25:70:12', arabic: "حَسَنَـٰتٍۢ ۗ", transliteration: "ḥasanātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) good ones", ur: "(ساتھ) اچھا ones" } },
      { id: '25:70:13', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And is", ur: "اور is" } },
      { id: '25:70:14', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '25:70:15', arabic: "غَفُورًۭا", transliteration: "ghafūran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '25:70:16', arabic: "رَّحِيمًۭا", transliteration: "raḥīman", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  71: {
    text: "وَمَن تَابَ وَعَمِلَ صَـٰلِحًۭا فَإِنَّهُۥ يَتُوبُ إِلَى ٱللَّهِ مَتَابًۭا",
    translation: {
      en: "",
      ur: "اور جو توبہ کرتا اور عمل نیک کرتا ہے تو بےشک وہ خدا کی طرف رجوع کرتا ہے",
    },
    words: [
      { id: '25:71:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '25:71:2', arabic: "تَابَ", transliteration: "tāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "repents", ur: "repents" } },
      { id: '25:71:3', arabic: "وَعَمِلَ", transliteration: "waʿamila", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and does", ur: "اور does" } },
      { id: '25:71:4', arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "righteous (deeds)", ur: "نیک (deeds)" } },
      { id: '25:71:5', arabic: "فَإِنَّهُۥ", transliteration: "fa-innahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed, he", ur: "پھر بیشک, وہ" } },
      { id: '25:71:6', arabic: "يَتُوبُ", transliteration: "yatūbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turns", ur: "turns" } },
      { id: '25:71:7', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '25:71:8', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '25:71:9', arabic: "مَتَابًۭا", transliteration: "matāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) repentance", ur: "(ساتھ) repentance" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  72: {
    text: "وَٱلَّذِينَ لَا يَشْهَدُونَ ٱلزُّورَ وَإِذَا مَرُّوا۟ بِٱللَّغْوِ مَرُّوا۟ كِرَامًۭا",
    translation: {
      en: "",
      ur: "اور وہ جو جھوٹی گواہی نہیں دیتے اور جب ان کو بیہودہ چیزوں کے پاس سے گزرنے کا اتفاق ہو تو بزرگانہ انداز سے گزرتے ہیں",
    },
    words: [
      { id: '25:72:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '25:72:2', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '25:72:3', arabic: "يَشْهَدُونَ", transliteration: "yashhadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "bear witness", ur: "bear witness" } },
      { id: '25:72:4', arabic: "ٱلزُّورَ", transliteration: "l-zūra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the falsehood", ur: "(کو) the falsehood" } },
      { id: '25:72:5', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and when", ur: "اور when" } },
      { id: '25:72:6', arabic: "مَرُّوا۟", transliteration: "marrū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they pass", ur: "وہ لوگ pass" } },
      { id: '25:72:7', arabic: "بِٱللَّغْوِ", transliteration: "bil-laghwi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by futility", ur: "by futility" } },
      { id: '25:72:8', arabic: "مَرُّوا۟", transliteration: "marrū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they pass", ur: "وہ لوگ pass" } },
      { id: '25:72:9', arabic: "كِرَامًۭا", transliteration: "kirāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) dignified ones", ur: "(as) dignified ones" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  73: {
    text: "وَٱلَّذِينَ إِذَا ذُكِّرُوا۟ بِـَٔايَـٰتِ رَبِّهِمْ لَمْ يَخِرُّوا۟ عَلَيْهَا صُمًّۭا وَعُمْيَانًۭا",
    translation: {
      en: "",
      ur: "اور وہ کہ جب ان کو پروردگار کی باتیں سمجھائی جاتی ہیں تو اُن پر اندھے اور بہرے ہو کر نہیں گرتے (بلکہ غور سے سنتے ہیں)",
    },
    words: [
      { id: '25:73:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '25:73:2', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '25:73:3', arabic: "ذُكِّرُوا۟", transliteration: "dhukkirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are reminded", ur: "وہ لوگ are reminded" } },
      { id: '25:73:4', arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of (the) Verses", ur: "of (the) Verses" } },
      { id: '25:73:5', arabic: "رَبِّهِمْ", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their Lord", ur: "(of) their رب" } },
      { id: '25:73:6', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '25:73:7', arabic: "يَخِرُّوا۟", transliteration: "yakhirrū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fall", ur: "fall" } },
      { id: '25:73:8', arabic: "عَلَيْهَا", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '25:73:9', arabic: "صُمًّۭا", transliteration: "ṣumman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "deaf", ur: "deaf" } },
      { id: '25:73:10', arabic: "وَعُمْيَانًۭا", transliteration: "waʿum'yānan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and blind", ur: "اور blind" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  74: {
    text: "وَٱلَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَٰجِنَا وَذُرِّيَّـٰتِنَا قُرَّةَ أَعْيُنٍۢ وَٱجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    translation: {
      en: "",
      ur: "اور وہ جو (خدا سے) دعا مانگتے ہیں کہ اے پروردگار ہم کو ہماری بیویوں کی طرف سے (دل کا چین) اور اولاد کی طرف سے آنکھ کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا امام بنا",
    },
    words: [
      { id: '25:74:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '25:74:2', arabic: "يَقُولُونَ", transliteration: "yaqūlūna", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "say", ur: "کہو" } },
      { id: '25:74:3', arabic: "رَبَّنَا", transliteration: "rabbanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '25:74:4', arabic: "هَبْ", transliteration: "hab", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Grant", ur: "Grant" } },
      { id: '25:74:5', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to us", ur: "کو us" } },
      { id: '25:74:6', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '25:74:7', arabic: "أَزْوَٰجِنَا", transliteration: "azwājinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our spouses", ur: "our spouses" } },
      { id: '25:74:8', arabic: "وَذُرِّيَّـٰتِنَا", transliteration: "wadhurriyyātinā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and our offspring", ur: "اور our offspring" } },
      { id: '25:74:9', arabic: "قُرَّةَ", transliteration: "qurrata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comfort", ur: "comfort" } },
      { id: '25:74:10', arabic: "أَعْيُنٍۢ", transliteration: "aʿyunin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) our eyes", ur: "(کو) our eyes" } },
      { id: '25:74:11', arabic: "وَٱجْعَلْنَا", transliteration: "wa-ij'ʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and make us", ur: "اور make us" } },
      { id: '25:74:12', arabic: "لِلْمُتَّقِينَ", transliteration: "lil'muttaqīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the righteous", ur: "for the نیک" } },
      { id: '25:74:13', arabic: "إِمَامًا", transliteration: "imāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a leader", ur: "a leader" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  75: {
    text: "أُو۟لَـٰٓئِكَ يُجْزَوْنَ ٱلْغُرْفَةَ بِمَا صَبَرُوا۟ وَيُلَقَّوْنَ فِيهَا تَحِيَّةًۭ وَسَلَـٰمًا",
    translation: {
      en: "",
      ur: "ان (صفات کے) لوگوں کو ان کے صبر کے بدلے اونچے اونچے محل دیئے جائیں گے۔ اور وہاں فرشتے ان سے دعا وسلام کے ساتھ ملاقات کریں گے",
    },
    words: [
      { id: '25:75:1', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '25:75:2', arabic: "يُجْزَوْنَ", transliteration: "yuj'zawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be awarded", ur: "will be awarded" } },
      { id: '25:75:3', arabic: "ٱلْغُرْفَةَ", transliteration: "l-ghur'fata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Chamber", ur: "the Chamber" } },
      { id: '25:75:4', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '25:75:5', arabic: "صَبَرُوا۟", transliteration: "ṣabarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were patient", ur: "وہ لوگ were patient" } },
      { id: '25:75:6', arabic: "وَيُلَقَّوْنَ", transliteration: "wayulaqqawna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they will be met", ur: "اور وہ لوگ will be met" } },
      { id: '25:75:7', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '25:75:8', arabic: "تَحِيَّةًۭ", transliteration: "taḥiyyatan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(with) greetings", ur: "(ساتھ) greetings" } },
      { id: '25:75:9', arabic: "وَسَلَـٰمًا", transliteration: "wasalāman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and peace", ur: "اور peace" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  76: {
    text: "خَـٰلِدِينَ فِيهَا ۚ حَسُنَتْ مُسْتَقَرًّۭا وَمُقَامًۭا",
    translation: {
      en: "",
      ur: "اس میں وہ ہمیشہ رہیں گے۔ اور وہ ٹھیرنے اور رہنے کی بہت ہی عمدہ جگہ ہے",
    },
    words: [
      { id: '25:76:1', arabic: "خَـٰلِدِينَ", transliteration: "khālidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will abide forever", ur: "Will abide forever" } },
      { id: '25:76:2', arabic: "فِيهَا ۚ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '25:76:3', arabic: "حَسُنَتْ", transliteration: "ḥasunat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Good", ur: "اچھا" } },
      { id: '25:76:4', arabic: "مُسْتَقَرًّۭا", transliteration: "mus'taqarran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the settlement", ur: "(is) the settlement" } },
      { id: '25:76:5', arabic: "وَمُقَامًۭا", transliteration: "wamuqāman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a resting place", ur: "اور a resting place" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  77: {
    text: "قُلْ مَا يَعْبَؤُا۟ بِكُمْ رَبِّى لَوْلَا دُعَآؤُكُمْ ۖ فَقَدْ كَذَّبْتُمْ فَسَوْفَ يَكُونُ لِزَامًۢا",
    translation: {
      en: "",
      ur: "کہہ دو کہ اگر تم (خدا کو) نہیں پکارتے تو میرا پروردگار بھی تمہاری کچھ پروا نہیں کرتا۔ تم نے تکذیب کی ہے سو اس کی سزا (تمہارے لئے) لازم ہوگی",
    },
    words: [
      { id: '25:77:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '25:77:2', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '25:77:3', arabic: "يَعْبَؤُا۟", transliteration: "yaʿba-u", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will care", ur: "will care" } },
      { id: '25:77:4', arabic: "بِكُمْ", transliteration: "bikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '25:77:5', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '25:77:6', arabic: "لَوْلَا", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if not", ur: "if نہیں" } },
      { id: '25:77:7', arabic: "دُعَآؤُكُمْ ۖ", transliteration: "duʿāukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your prayer (is to Him)", ur: "your نماز (is کو Him)" } },
      { id: '25:77:8', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But verily", ur: "لیکن بیشک" } },
      { id: '25:77:9', arabic: "كَذَّبْتُمْ", transliteration: "kadhabtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have denied", ur: "تم have denied" } },
      { id: '25:77:10', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so soon", ur: "so soon" } },
      { id: '25:77:11', arabic: "يَكُونُ", transliteration: "yakūnu", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "will be", ur: "will be" } },
      { id: '25:77:12', arabic: "لِزَامًۢا", transliteration: "lizāman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the inevitable (punishment)", ur: "the inevitable (عذاب)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
};

export default SURAH_25_TREEBANK;
