/**
 * Surah Al-Hijr (15) - Treebank Data (First 10 Ayahs)
 * The Rocky Tract - 99 Ayahs Total
 *
 * Theme: Divine preservation of the Quran, stories of past nations
 * Revelation: Makki
 */

const SURAH_015_TREEBANK = {
  1: {
    text: 'الر ۚ تِلْكَ آيَاتُ الْكِتَابِ وَقُرْآنٍ مُّبِينٍ',
    translation: {
      en: 'Alif, Lam, Ra. These are the verses of the Book and a clear Quran.',
      ur: 'الر۔ یہ کتاب اور روشن قرآن کی آیات ہیں',
    },
    words: [
      {
        id: '15:1:1',
        position: 1,
        arabic: 'الر',
        transliteration: 'Alif-Lam-Ra',
        pos: ['INIT'],
        posLabel: 'INIT',
        root: null,
        meaning: { en: 'Alif Lam Ra', ur: 'الف لام را' },
        grammarRole: 'muqattaat',
        features: { type: 'disconnected-letters' },
        grammarExplanations: {
          en: 'Mysterious letters (حروف مقطعات) - their meaning known only to Allah.',
          ur: 'حروف مقطعات - ان کا مطلب صرف اللہ کو معلوم ہے۔',
        },
      },
      {
        id: '15:1:2',
        position: 2,
        arabic: 'تِلْكَ',
        transliteration: 'tilka',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: { en: 'These/Those', ur: 'یہ' },
        grammarRole: 'mubtada',
        case: 'marfoo',
        features: { type: 'demonstrative', gender: 'feminine', distance: 'far' },
        grammarExplanations: {
          en: 'Far demonstrative pronoun (اسم اشارہ للبعید) - subject of nominal sentence.',
          ur: 'اسم اشارہ للبعید - جملہ اسمیہ کا مبتدأ۔',
        },
      },
      {
        id: '15:1:3',
        position: 3,
        arabic: 'آيَاتُ',
        transliteration: 'ayatu',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ي ي',
        meaning: { en: 'verses/signs', ur: 'آیات/نشانیاں' },
        grammarRole: 'pred',
        case: 'marfoo',
        features: { type: 'noun', gender: 'feminine', number: 'plural', state: 'construct' },
        grammarExplanations: {
          en: 'Predicate (خبر) in construct state (مضاف), nominative case.',
          ur: 'خبر مضاف کی حالت میں، مرفوع۔',
        },
      },
      {
        id: '15:1:4',
        position: 4,
        arabic: 'الْكِتَابِ',
        transliteration: 'al-kitabi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: { en: 'the Book', ur: 'کتاب' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { type: 'noun', definiteness: 'definite', state: 'genitive' },
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) - possessed noun in construct chain.',
          ur: 'مضاف الیہ - مجرور۔',
        },
      },
      {
        id: '15:1:5',
        position: 5,
        arabic: 'وَقُرْآنٍ',
        transliteration: 'wa-qur\'anin',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ق ر أ',
        meaning: { en: 'and a Quran', ur: 'اور قرآن' },
        grammarRole: 'matoof',
        case: 'majroor',
        features: { type: 'noun', definiteness: 'indefinite', state: 'genitive' },
        grammarExplanations: {
          en: 'Conjunction + noun conjoined to الْكِتَابِ, genitive case.',
          ur: 'حرف عطف + معطوف، مجرور۔',
        },
      },
      {
        id: '15:1:6',
        position: 6,
        arabic: 'مُّبِينٍ',
        transliteration: 'mubin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ب ي ن',
        meaning: { en: 'clear/manifest', ur: 'واضح/روشن' },
        grammarRole: 'sifah',
        case: 'majroor',
        features: { type: 'adjective', pattern: 'مُفْعِل', definiteness: 'indefinite' },
        grammarExplanations: {
          en: 'Adjective (صفة) modifying قُرْآنٍ, genitive to match.',
          ur: 'صفت قُرْآنٍ کی، مجرور۔',
        },
      },
    ],
    structure: {
      type: 'nominal-sentence',
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
      ],
      explanation: {
        en: 'These (تِلْكَ) are verses of the Book and clear Quran',
        ur: 'یہ (تِلْكَ) کتاب اور روشن قرآن کی آیات ہیں',
      },
    },
  },

  2: {
    text: 'رُّبَمَا يَوَدُّ الَّذِينَ كَفَرُوا لَوْ كَانُوا مُسْلِمِينَ',
    translation: {
      en: 'Perhaps those who disbelieve will wish that they had been Muslims.',
      ur: 'کافر بہت جلد آرزو کریں گے کہ کاش وہ مسلمان ہوتے',
    },
    words: [
      {
        id: '15:2:1',
        position: 1,
        arabic: 'رُّبَمَا',
        transliteration: 'rubama',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: { en: 'Perhaps/Often', ur: 'شاید/اکثر' },
        grammarRole: 'particle',
        features: { type: 'particle-of-hope' },
        grammarExplanations: {
          en: 'Particle indicating possibility or frequency (حرف ترجي).',
          ur: 'حرف ترجی - امکان یا کثرت کے لیے۔',
        },
      },
      {
        id: '15:2:2',
        position: 2,
        arabic: 'يَوَدُّ',
        transliteration: 'yawaddu',
        pos: ['V'],
        posLabel: 'V',
        root: 'و د د',
        meaning: { en: 'wishes/desires', ur: 'آرزو کرتا ہے' },
        grammarRole: 'verb',
        case: 'marfoo',
        features: { aspect: 'imperfect', person: '3rd', gender: 'masculine', number: 'singular', voice: 'active' },
        grammarExplanations: {
          en: 'Imperfect verb (فعل مضارع مرفوع) - "he wishes".',
          ur: 'فعل مضارع مرفوع - "وہ آرزو کرتا ہے"۔',
        },
      },
      {
        id: '15:2:3',
        position: 3,
        arabic: 'الَّذِينَ',
        transliteration: 'alladhina',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'those who', ur: 'وہ جو' },
        grammarRole: 'subj',
        features: { type: 'relative-pronoun', gender: 'masculine', number: 'plural' },
        grammarExplanations: {
          en: 'Relative pronoun (اسم موصول) - subject of يَوَدُّ.',
          ur: 'اسم موصول - يَوَدُّ کا فاعل۔',
        },
      },
      {
        id: '15:2:4',
        position: 4,
        arabic: 'كَفَرُوا',
        transliteration: 'kafaru',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ف ر',
        meaning: { en: 'disbelieved', ur: 'کفر کیا' },
        grammarRole: 'silah',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'plural', voice: 'active' },
        grammarExplanations: {
          en: 'Perfect verb - relative clause (صلة الموصول).',
          ur: 'فعل ماضی - صلہ موصول۔',
        },
      },
      {
        id: '15:2:5',
        position: 5,
        arabic: 'لَوْ',
        transliteration: 'law',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: { en: 'if only/that', ur: 'کاش/اگر' },
        grammarRole: 'masdariyyah',
        features: { type: 'conditional-particle' },
        grammarExplanations: {
          en: 'Particle (لَوْ المصدرية) introducing wish clause.',
          ur: 'لَوْ مصدریہ - تمنا کا جملہ شروع کرتا ہے۔',
        },
      },
      {
        id: '15:2:6',
        position: 6,
        arabic: 'كَانُوا',
        transliteration: 'kanu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: { en: 'they were', ur: 'وہ تھے' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'plural', type: 'كان الناقصة' },
        grammarExplanations: {
          en: 'كان الناقصة - deficient verb linking subject to predicate.',
          ur: 'کان ناقصہ - اسم اور خبر کو جوڑتا ہے۔',
        },
      },
      {
        id: '15:2:7',
        position: 7,
        arabic: 'مُسْلِمِينَ',
        transliteration: 'muslimin',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ل م',
        meaning: { en: 'Muslims', ur: 'مسلمان' },
        grammarRole: 'khabar-kana',
        case: 'mansoob',
        features: { type: 'noun', pattern: 'مُفْعِل', number: 'plural', state: 'accusative' },
        grammarExplanations: {
          en: 'Predicate of كان (خبر كان) - accusative case.',
          ur: 'خبر کان - منصوب۔',
        },
      },
    ],
    structure: {
      type: 'verbal-sentence',
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'موصول + صلة' },
      ],
      explanation: {
        en: 'Perhaps the disbelievers will wish they had been Muslims',
        ur: 'شاید کافر آرزو کریں کہ کاش وہ مسلمان ہوتے',
      },
    },
  },

  3: {
    text: 'ذَرْهُمْ يَأْكُلُوا وَيَتَمَتَّعُوا وَيُلْهِهِمُ الْأَمَلُ ۖ فَسَوْفَ يَعْلَمُونَ',
    translation: {
      en: 'Let them eat and enjoy themselves and be diverted by hope, for they will come to know.',
      ur: 'انہیں چھوڑ دو کہ کھائیں پئیں اور فائدہ اٹھائیں اور امید انہیں غافل رکھے، عنقریب جان لیں گے',
    },
    words: [
      {
        id: '15:3:1',
        position: 1,
        arabic: 'ذَرْهُمْ',
        transliteration: 'dharhum',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'و ذ ر',
        meaning: { en: 'Leave them', ur: 'انہیں چھوڑ دو' },
        grammarRole: 'verb+obj',
        features: { aspect: 'imperative', person: '2nd', voice: 'active' },
        grammarExplanations: {
          en: 'Imperative verb + attached pronoun (فعل أمر + ضمير متصل).',
          ur: 'فعل امر + ضمیر متصل۔',
        },
      },
      {
        id: '15:3:2',
        position: 2,
        arabic: 'يَأْكُلُوا',
        transliteration: "ya'kulu",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ك ل',
        meaning: { en: 'they eat', ur: 'وہ کھائیں' },
        grammarRole: 'verb',
        case: 'majzoom',
        features: { aspect: 'imperfect', mood: 'jussive', person: '3rd', number: 'plural' },
        grammarExplanations: {
          en: 'Jussive verb (فعل مضارع مجزوم) - in response to command.',
          ur: 'فعل مضارع مجزوم - جواب امر۔',
        },
      },
      {
        id: '15:3:3',
        position: 3,
        arabic: 'وَيَتَمَتَّعُوا',
        transliteration: 'wa-yatamatta\'u',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'م ت ع',
        meaning: { en: 'and enjoy', ur: 'اور فائدہ اٹھائیں' },
        grammarRole: 'verb',
        case: 'majzoom',
        features: { aspect: 'imperfect', mood: 'jussive', form: 'V' },
        grammarExplanations: {
          en: 'Conjoined jussive verb (معطوف مجزوم).',
          ur: 'معطوف مجزوم۔',
        },
      },
      {
        id: '15:3:4',
        position: 4,
        arabic: 'وَيُلْهِهِمُ',
        transliteration: 'wa-yulhihim',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ل هـ و',
        meaning: { en: 'and diverts them', ur: 'اور انہیں غافل کرے' },
        grammarRole: 'verb+obj',
        case: 'majzoom',
        features: { aspect: 'imperfect', mood: 'jussive', form: 'IV' },
        grammarExplanations: {
          en: 'Form IV verb (أَفْعَلَ) meaning "to divert/distract".',
          ur: 'باب افعال کا فعل - "غافل کرنا"۔',
        },
      },
      {
        id: '15:3:5',
        position: 5,
        arabic: 'الْأَمَلُ',
        transliteration: 'al-amalu',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ م ل',
        meaning: { en: 'the hope', ur: 'امید' },
        grammarRole: 'subj',
        case: 'marfoo',
        features: { type: 'noun', definiteness: 'definite' },
        grammarExplanations: {
          en: 'Subject (فاعل) of يُلْهِهِمُ - nominative.',
          ur: 'يُلْهِهِمُ کا فاعل - مرفوع۔',
        },
      },
      {
        id: '15:3:6',
        position: 6,
        arabic: 'فَسَوْفَ',
        transliteration: 'fa-sawfa',
        pos: ['CONJ', 'FUT'],
        posLabel: 'CONJ+FUT',
        root: null,
        meaning: { en: 'for soon/then will', ur: 'پس عنقریب' },
        grammarRole: 'particle',
        features: { type: 'future-particle' },
        grammarExplanations: {
          en: 'Conjunction فَ + future particle سَوْفَ (distant future).',
          ur: 'حرف عطف فَ + حرف استقبال سَوْفَ۔',
        },
      },
      {
        id: '15:3:7',
        position: 7,
        arabic: 'يَعْلَمُونَ',
        transliteration: 'ya\'lamun',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        meaning: { en: 'they will know', ur: 'وہ جان لیں گے' },
        grammarRole: 'verb',
        case: 'marfoo',
        features: { aspect: 'imperfect', person: '3rd', number: 'plural' },
        grammarExplanations: {
          en: 'Imperfect verb (فعل مضارع) - with سَوْفَ indicates future.',
          ur: 'فعل مضارع - سَوْفَ کے ساتھ مستقبل کی دلالت۔',
        },
      },
    ],
    structure: {
      type: 'compound',
      relationships: [
        { from: 1, to: 5, label: 'فعل + فاعل' },
        { from: 2, to: 5, label: 'فعل + فاعل' },
        { from: 3, to: 5, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
      ],
      explanation: {
        en: 'Command to leave them, then warning of future consequences',
        ur: 'انہیں چھوڑنے کا حکم، پھر مستقبل کے نتائج کی تنبیہ',
      },
    },
  },

  4: {
    text: 'وَمَا أَهْلَكْنَا مِن قَرْيَةٍ إِلَّا وَلَهَا كِتَابٌ مَّعْلُومٌ',
    translation: {
      en: 'And We did not destroy any city but that for it was a known decree.',
      ur: 'اور ہم نے کوئی بستی ہلاک نہیں کی مگر اس کے لیے ایک معلوم نوشتہ تھا',
    },
    words: [
      {
        id: '15:4:1',
        position: 1,
        arabic: 'وَمَا',
        transliteration: 'wa-ma',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: { en: 'And not', ur: 'اور نہیں' },
        grammarRole: 'particle',
        features: { type: 'negative-particle' },
        grammarExplanations: {
          en: 'Conjunction + negative particle (مَا النافية).',
          ur: 'حرف عطف + حرف نفی۔',
        },
      },
      {
        id: '15:4:2',
        position: 2,
        arabic: 'أَهْلَكْنَا',
        transliteration: 'ahlakna',
        pos: ['V'],
        posLabel: 'V',
        root: 'هـ ل ك',
        meaning: { en: 'We destroyed', ur: 'ہم نے ہلاک کیا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '1st', number: 'plural', form: 'IV' },
        grammarExplanations: {
          en: 'Form IV perfect verb (أَفْعَلَ) - "We caused to perish".',
          ur: 'باب افعال کا فعل ماضی - "ہم نے ہلاک کیا"۔',
        },
      },
      {
        id: '15:4:3',
        position: 3,
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'of/from', ur: 'سے/کوئی' },
        grammarRole: 'harf-jarr',
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition (حرف جر) - here for emphasis (زائدة).',
          ur: 'حرف جر - یہاں تاکید کے لیے (زائدہ)۔',
        },
      },
      {
        id: '15:4:4',
        position: 4,
        arabic: 'قَرْيَةٍ',
        transliteration: 'qaryatin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ر ي',
        meaning: { en: 'a city/town', ur: 'بستی' },
        grammarRole: 'obj',
        case: 'majroor',
        features: { type: 'noun', gender: 'feminine', definiteness: 'indefinite' },
        grammarExplanations: {
          en: 'Object of أَهْلَكْنَا - genitive due to مِن.',
          ur: 'أَهْلَكْنَا کا مفعول - مِن کی وجہ سے مجرور۔',
        },
      },
      {
        id: '15:4:5',
        position: 5,
        arabic: 'إِلَّا',
        transliteration: 'illa',
        pos: ['EXCEPT'],
        posLabel: 'EXCEPT',
        root: null,
        meaning: { en: 'except/but', ur: 'مگر/سوائے' },
        grammarRole: 'particle',
        features: { type: 'exception-particle' },
        grammarExplanations: {
          en: 'Exception particle (أداة استثناء).',
          ur: 'اداة استثناء۔',
        },
      },
      {
        id: '15:4:6',
        position: 6,
        arabic: 'وَلَهَا',
        transliteration: 'wa-laha',
        pos: ['CONJ', 'P', 'PRON'],
        posLabel: 'CONJ+P+PRON',
        root: null,
        meaning: { en: 'and for it', ur: 'اور اس کے لیے' },
        grammarRole: 'jarr-majrur',
        features: { type: 'preposition+pronoun' },
        grammarExplanations: {
          en: 'Conjunction + preposition لِ + pronoun هَا.',
          ur: 'حرف عطف + حرف جر لِ + ضمیر هَا۔',
        },
      },
      {
        id: '15:4:7',
        position: 7,
        arabic: 'كِتَابٌ',
        transliteration: 'kitabun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: { en: 'a decree/book', ur: 'نوشتہ/کتاب' },
        grammarRole: 'mubtada-muakhkhar',
        case: 'marfoo',
        features: { type: 'noun', definiteness: 'indefinite' },
        grammarExplanations: {
          en: 'Delayed subject (مبتدأ مؤخر) - nominative.',
          ur: 'مبتدأ مؤخر - مرفوع۔',
        },
      },
      {
        id: '15:4:8',
        position: 8,
        arabic: 'مَّعْلُومٌ',
        transliteration: "ma'lumun",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ل م',
        meaning: { en: 'known/decreed', ur: 'معلوم/مقرر' },
        grammarRole: 'sifah',
        case: 'marfoo',
        features: { type: 'adjective', pattern: 'مَفْعُول' },
        grammarExplanations: {
          en: 'Adjective (صفة) modifying كِتَابٌ - nominative.',
          ur: 'صفت كِتَابٌ کی - مرفوع۔',
        },
      },
    ],
    structure: {
      type: 'exception-sentence',
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'موصوف + صفت' },
      ],
      explanation: {
        en: 'No city destroyed except with a predetermined decree',
        ur: 'کوئی بستی ہلاک نہیں ہوئی مگر اس کے لیے مقررہ نوشتہ تھا',
      },
    },
  },

  5: {
    text: 'مَّا تَسْبِقُ مِنْ أُمَّةٍ أَجَلَهَا وَمَا يَسْتَأْخِرُونَ',
    translation: {
      en: 'No nation can advance its term, nor delay it.',
      ur: 'کوئی امت اپنی میعاد سے پہلے نہیں جا سکتی اور نہ پیچھے رہ سکتی ہے',
    },
    words: [
      {
        id: '15:5:1',
        position: 1,
        arabic: 'مَّا',
        transliteration: 'ma',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: { en: 'Not', ur: 'نہیں' },
        grammarRole: 'particle',
        features: { type: 'negative-particle' },
        grammarExplanations: {
          en: 'Negative particle (مَا النافية).',
          ur: 'حرف نفی۔',
        },
      },
      {
        id: '15:5:2',
        position: 2,
        arabic: 'تَسْبِقُ',
        transliteration: 'tasbiqu',
        pos: ['V'],
        posLabel: 'V',
        root: 'س ب ق',
        meaning: { en: 'precedes/advances', ur: 'آگے بڑھتی ہے' },
        grammarRole: 'verb',
        case: 'marfoo',
        features: { aspect: 'imperfect', person: '3rd', gender: 'feminine', number: 'singular' },
        grammarExplanations: {
          en: 'Imperfect verb (فعل مضارع) - feminine for أُمَّةٍ.',
          ur: 'فعل مضارع - أُمَّةٍ کے لیے مؤنث۔',
        },
      },
      {
        id: '15:5:3',
        position: 3,
        arabic: 'مِنْ',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'of', ur: 'سے' },
        grammarRole: 'harf-jarr',
        features: { type: 'preposition', usage: 'emphatic' },
        grammarExplanations: {
          en: 'Emphatic preposition (حرف جر زائد).',
          ur: 'حرف جر زائدہ (تاکید کے لیے)۔',
        },
      },
      {
        id: '15:5:4',
        position: 4,
        arabic: 'أُمَّةٍ',
        transliteration: 'ummatin',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ م م',
        meaning: { en: 'a nation', ur: 'امت' },
        grammarRole: 'subj',
        case: 'majroor',
        features: { type: 'noun', gender: 'feminine', definiteness: 'indefinite' },
        grammarExplanations: {
          en: 'Subject (فاعل) - genitive due to مِنْ but functionally nominative.',
          ur: 'فاعل - مِنْ کی وجہ سے لفظاً مجرور، معناً مرفوع۔',
        },
      },
      {
        id: '15:5:5',
        position: 5,
        arabic: 'أَجَلَهَا',
        transliteration: 'ajalaha',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'أ ج ل',
        meaning: { en: 'its term/appointed time', ur: 'اپنی میعاد' },
        grammarRole: 'obj',
        case: 'mansoob',
        features: { type: 'noun', state: 'construct' },
        grammarExplanations: {
          en: 'Object (مفعول به) + possessive pronoun - accusative.',
          ur: 'مفعول بہ + ضمیر - منصوب۔',
        },
      },
      {
        id: '15:5:6',
        position: 6,
        arabic: 'وَمَا',
        transliteration: 'wa-ma',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: { en: 'and not', ur: 'اور نہیں' },
        grammarRole: 'particle',
        features: { type: 'conjunction+negative' },
        grammarExplanations: {
          en: 'Conjunction + negative particle.',
          ur: 'حرف عطف + حرف نفی۔',
        },
      },
      {
        id: '15:5:7',
        position: 7,
        arabic: 'يَسْتَأْخِرُونَ',
        transliteration: "yasta'khirun",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ خ ر',
        meaning: { en: 'they delay/remain behind', ur: 'وہ پیچھے رہتے ہیں' },
        grammarRole: 'verb',
        case: 'marfoo',
        features: { aspect: 'imperfect', person: '3rd', number: 'plural', form: 'X' },
        grammarExplanations: {
          en: 'Form X verb (اِسْتَفْعَلَ) - "to seek to delay/be late".',
          ur: 'باب استفعال کا فعل - "پیچھے رہنا/تاخیر کرنا"۔',
        },
      },
    ],
    structure: {
      type: 'compound-negation',
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 4, label: 'فعل + فاعل' },
        { from: 2, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'نفی + فعل' },
      ],
      explanation: {
        en: 'Double negation: cannot advance nor delay their term',
        ur: 'دوہری نفی: نہ آگے بڑھ سکتے ہیں نہ پیچھے رہ سکتے ہیں',
      },
    },
  },

  6: {
    text: 'وَقَالُوا يَا أَيُّهَا الَّذِي نُزِّلَ عَلَيْهِ الذِّكْرُ إِنَّكَ لَمَجْنُونٌ',
    translation: {
      en: 'And they said, "O you upon whom the message has been sent down, indeed you are mad."',
      ur: 'اور انہوں نے کہا اے وہ جس پر ذکر اتارا گیا، تو تو دیوانہ ہے',
    },
    words: [
      {
        id: '15:6:1',
        position: 1,
        arabic: 'وَقَالُوا',
        transliteration: 'wa-qalu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: { en: 'And they said', ur: 'اور انہوں نے کہا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', number: 'plural' },
        grammarExplanations: {
          en: 'Conjunction + perfect verb.',
          ur: 'حرف عطف + فعل ماضی۔',
        },
      },
      {
        id: '15:6:2',
        position: 2,
        arabic: 'يَا',
        transliteration: 'ya',
        pos: ['VOC'],
        posLabel: 'VOC',
        root: null,
        meaning: { en: 'O!', ur: 'اے!' },
        grammarRole: 'particle',
        features: { type: 'vocative-particle' },
        grammarExplanations: {
          en: 'Vocative particle (حرف نداء).',
          ur: 'حرف ندا۔',
        },
      },
      {
        id: '15:6:3',
        position: 3,
        arabic: 'أَيُّهَا',
        transliteration: 'ayyuha',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: { en: 'O you', ur: 'اے تو' },
        grammarRole: 'munada',
        features: { type: 'vocative-noun' },
        grammarExplanations: {
          en: 'Vocative noun (منادى) - addressing the Prophet.',
          ur: 'منادی - نبی ﷺ کو خطاب۔',
        },
      },
      {
        id: '15:6:4',
        position: 4,
        arabic: 'الَّذِي',
        transliteration: 'alladhi',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'the one who', ur: 'وہ جس' },
        grammarRole: 'sifah',
        features: { type: 'relative-pronoun', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'Relative pronoun (اسم موصول) as adjective to منادى.',
          ur: 'اسم موصول بطور صفت منادی کی۔',
        },
      },
      {
        id: '15:6:5',
        position: 5,
        arabic: 'نُزِّلَ',
        transliteration: 'nuzzila',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        meaning: { en: 'was sent down', ur: 'اتارا گیا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', voice: 'passive', form: 'II' },
        grammarExplanations: {
          en: 'Form II passive verb (فُعِّلَ) - "was sent down repeatedly".',
          ur: 'باب تفعیل کا فعل مجہول - "بار بار اتارا گیا"۔',
        },
      },
      {
        id: '15:6:6',
        position: 6,
        arabic: 'عَلَيْهِ',
        transliteration: 'alayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'upon him', ur: 'اس پر' },
        grammarRole: 'jarr-majrur',
        features: { type: 'preposition+pronoun' },
        grammarExplanations: {
          en: 'Preposition + attached pronoun.',
          ur: 'حرف جر + ضمیر متصل۔',
        },
      },
      {
        id: '15:6:7',
        position: 7,
        arabic: 'الذِّكْرُ',
        transliteration: 'adh-dhikru',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        meaning: { en: 'the Reminder/Message', ur: 'ذکر/قرآن' },
        grammarRole: 'naib-fail',
        case: 'marfoo',
        features: { type: 'noun', definiteness: 'definite' },
        grammarExplanations: {
          en: 'Deputy subject (نائب فاعل) of passive verb - nominative.',
          ur: 'نائب فاعل فعل مجہول کا - مرفوع۔',
        },
      },
      {
        id: '15:6:8',
        position: 8,
        arabic: 'إِنَّكَ',
        transliteration: 'innaka',
        pos: ['PART', 'PRON'],
        posLabel: 'PART+PRON',
        root: null,
        meaning: { en: 'indeed you', ur: 'بے شک تو' },
        grammarRole: 'inna+ism',
        features: { type: 'emphatic-particle+pronoun' },
        grammarExplanations: {
          en: 'إِنَّ + attached pronoun (اسم إنّ) - accusative.',
          ur: 'إِنَّ + ضمیر متصل (اسم إنّ) - منصوب۔',
        },
      },
      {
        id: '15:6:9',
        position: 9,
        arabic: 'لَمَجْنُونٌ',
        transliteration: 'la-majnunun',
        pos: ['EMPH', 'ADJ'],
        posLabel: 'EMPH+ADJ',
        root: 'ج ن ن',
        meaning: { en: 'surely mad', ur: 'یقیناً دیوانہ' },
        grammarRole: 'khabar-inna',
        case: 'marfoo',
        features: { type: 'adjective', pattern: 'مَفْعُول' },
        grammarExplanations: {
          en: 'لام التوكيد + predicate of إِنَّ (خبر إنّ) - nominative.',
          ur: 'لام توکید + خبر إنّ - مرفوع۔',
        },
      },
    ],
    structure: {
      type: 'quoted-speech',
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
      ],
      explanation: {
        en: 'Disbelievers mocking the Prophet as mad',
        ur: 'کفار کا نبی ﷺ کا مذاق اڑانا',
      },
    },
  },

  7: {
    text: 'لَّوْ مَا تَأْتِينَا بِالْمَلَائِكَةِ إِن كُنتَ مِنَ الصَّادِقِينَ',
    translation: {
      en: 'Why do you not bring us the angels, if you are of the truthful?',
      ur: 'تو ہمارے پاس فرشتے کیوں نہیں لاتا اگر تو سچوں میں سے ہے',
    },
    words: [
      {
        id: '15:7:1',
        position: 1,
        arabic: 'لَّوْ',
        transliteration: 'law',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: { en: 'Why not', ur: 'کیوں نہیں' },
        grammarRole: 'particle',
        features: { type: 'interrogative-particle' },
        grammarExplanations: {
          en: 'Particle of incitement/interrogation (لَوْلَا/لَوْ مَا).',
          ur: 'حرف تحضیض/استفہام۔',
        },
      },
      {
        id: '15:7:2',
        position: 2,
        arabic: 'مَا',
        transliteration: 'ma',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: { en: 'not', ur: 'نہیں' },
        grammarRole: 'particle',
        features: { type: 'negative/expletive' },
        grammarExplanations: {
          en: 'Combined with لَوْ for emphasis/interrogation.',
          ur: 'لَوْ کے ساتھ مل کر تاکید/استفہام۔',
        },
      },
      {
        id: '15:7:3',
        position: 3,
        arabic: 'تَأْتِينَا',
        transliteration: "ta'tina",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'أ ت ي',
        meaning: { en: 'you bring us', ur: 'تو ہمارے پاس لاتا ہے' },
        grammarRole: 'verb+obj',
        case: 'marfoo',
        features: { aspect: 'imperfect', person: '2nd', number: 'singular' },
        grammarExplanations: {
          en: 'Imperfect verb + attached pronoun (نَا = us).',
          ur: 'فعل مضارع + ضمیر متصل (نَا = ہمیں)۔',
        },
      },
      {
        id: '15:7:4',
        position: 4,
        arabic: 'بِالْمَلَائِكَةِ',
        transliteration: 'bil-mala\'ikati',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'م ل ك',
        meaning: { en: 'with the angels', ur: 'فرشتوں کو' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        features: { type: 'preposition+noun', number: 'plural' },
        grammarExplanations: {
          en: 'Preposition بِ + noun - genitive.',
          ur: 'حرف جر بِ + اسم - مجرور۔',
        },
      },
      {
        id: '15:7:5',
        position: 5,
        arabic: 'إِن',
        transliteration: 'in',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: { en: 'if', ur: 'اگر' },
        grammarRole: 'particle',
        features: { type: 'conditional-particle' },
        grammarExplanations: {
          en: 'Conditional particle (حرف شرط).',
          ur: 'حرف شرط۔',
        },
      },
      {
        id: '15:7:6',
        position: 6,
        arabic: 'كُنتَ',
        transliteration: 'kunta',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: { en: 'you are', ur: 'تو ہے' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '2nd', number: 'singular', type: 'كان الناقصة' },
        grammarExplanations: {
          en: 'كان الناقصة - condition verb.',
          ur: 'کان ناقصہ - فعل شرط۔',
        },
      },
      {
        id: '15:7:7',
        position: 7,
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'of/from', ur: 'سے' },
        grammarRole: 'harf-jarr',
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition indicating partitive.',
          ur: 'حرف جر تبعیض کے لیے۔',
        },
      },
      {
        id: '15:7:8',
        position: 8,
        arabic: 'الصَّادِقِينَ',
        transliteration: 'as-sadiqin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ص د ق',
        meaning: { en: 'the truthful', ur: 'سچوں' },
        grammarRole: 'khabar-kana',
        case: 'majroor',
        features: { type: 'noun', pattern: 'فَاعِل', number: 'plural' },
        grammarExplanations: {
          en: 'Predicate of كان in jarr-majrur phrase - genitive.',
          ur: 'خبر کان جار مجرور میں - مجرور۔',
        },
      },
    ],
    structure: {
      type: 'conditional',
      explanation: {
        en: 'Disbelievers demanding angels as proof',
        ur: 'کفار کا فرشتوں کو ثبوت کے طور پر مانگنا',
      },
    
       relationships: [
        { from: 5, to: 6, label: 'شرط + فعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },

  8: {
    text: 'مَا نُنَزِّلُ الْمَلَائِكَةَ إِلَّا بِالْحَقِّ وَمَا كَانُوا إِذًا مُّنظَرِينَ',
    translation: {
      en: 'We do not send down the angels except with truth, and then they would not be reprieved.',
      ur: 'ہم فرشتے نہیں اتارتے مگر حق کے ساتھ اور تب انہیں مہلت نہ ملے گی',
    },
    words: [
      {
        id: '15:8:1',
        position: 1,
        arabic: 'مَا',
        transliteration: 'ma',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: { en: 'Not', ur: 'نہیں' },
        grammarRole: 'particle',
        features: { type: 'negative-particle' },
        grammarExplanations: {
          en: 'Negative particle (مَا النافية).',
          ur: 'حرف نفی۔',
        },
      },
      {
        id: '15:8:2',
        position: 2,
        arabic: 'نُنَزِّلُ',
        transliteration: 'nunazzilu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        meaning: { en: 'We send down', ur: 'ہم اتارتے ہیں' },
        grammarRole: 'verb',
        case: 'marfoo',
        features: { aspect: 'imperfect', person: '1st', number: 'plural', form: 'II' },
        grammarExplanations: {
          en: 'Form II verb (فَعَّلَ) - intensive/causative "We send down".',
          ur: 'باب تفعیل کا فعل - "ہم اتارتے ہیں"۔',
        },
      },
      {
        id: '15:8:3',
        position: 3,
        arabic: 'الْمَلَائِكَةَ',
        transliteration: 'al-mala\'ikata',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل ك',
        meaning: { en: 'the angels', ur: 'فرشتے' },
        grammarRole: 'obj',
        case: 'mansoob',
        features: { type: 'noun', number: 'plural', definiteness: 'definite' },
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative.',
          ur: 'مفعول بہ - منصوب۔',
        },
      },
      {
        id: '15:8:4',
        position: 4,
        arabic: 'إِلَّا',
        transliteration: 'illa',
        pos: ['EXCEPT'],
        posLabel: 'EXCEPT',
        root: null,
        meaning: { en: 'except', ur: 'مگر' },
        grammarRole: 'particle',
        features: { type: 'exception-particle' },
        grammarExplanations: {
          en: 'Exception particle (أداة استثناء).',
          ur: 'اداة استثناء۔',
        },
      },
      {
        id: '15:8:5',
        position: 5,
        arabic: 'بِالْحَقِّ',
        transliteration: 'bil-haqqi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ح ق ق',
        meaning: { en: 'with the truth', ur: 'حق کے ساتھ' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        features: { type: 'preposition+noun' },
        grammarExplanations: {
          en: 'Preposition بِ + noun - genitive.',
          ur: 'حرف جر بِ + اسم - مجرور۔',
        },
      },
      {
        id: '15:8:6',
        position: 6,
        arabic: 'وَمَا',
        transliteration: 'wa-ma',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: { en: 'and not', ur: 'اور نہیں' },
        grammarRole: 'particle',
        features: { type: 'conjunction+negative' },
        grammarExplanations: {
          en: 'Conjunction + negative particle.',
          ur: 'حرف عطف + حرف نفی۔',
        },
      },
      {
        id: '15:8:7',
        position: 7,
        arabic: 'كَانُوا',
        transliteration: 'kanu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: { en: 'they would be', ur: 'وہ ہوتے' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', number: 'plural', type: 'كان الناقصة' },
        grammarExplanations: {
          en: 'كان الناقصة - deficient verb.',
          ur: 'کان ناقصہ۔',
        },
      },
      {
        id: '15:8:8',
        position: 8,
        arabic: 'إِذًا',
        transliteration: 'idhan',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: { en: 'then/in that case', ur: 'تب/اس صورت میں' },
        grammarRole: 'particle',
        features: { type: 'resultative-particle' },
        grammarExplanations: {
          en: 'Resultative particle (حرف جواب وجزاء).',
          ur: 'حرف جواب و جزاء۔',
        },
      },
      {
        id: '15:8:9',
        position: 9,
        arabic: 'مُّنظَرِينَ',
        transliteration: 'mundharin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ظ ر',
        meaning: { en: 'reprieved/given respite', ur: 'مہلت دیے گئے' },
        grammarRole: 'khabar-kana',
        case: 'mansoob',
        features: { type: 'participle', voice: 'passive', pattern: 'مُفْعَل' },
        grammarExplanations: {
          en: 'Predicate of كان (خبر كان) - passive participle, accusative.',
          ur: 'خبر کان - اسم مفعول، منصوب۔',
        },
      },
    ],
    structure: {
      type: 'exception-sentence',
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'نفی + فعل' },
      ],
      explanation: {
        en: 'Angels only come with truth (judgment), then no respite',
        ur: 'فرشتے صرف حق (عذاب) کے ساتھ آتے ہیں، پھر مہلت نہیں',
      },
    },
  },

  9: {
    text: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
    translation: {
      en: 'Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian.',
      ur: 'بے شک ہم نے ہی ذکر اتارا ہے اور بے شک ہم ہی اس کے محافظ ہیں',
    },
    words: [
      {
        id: '15:9:1',
        position: 1,
        arabic: 'إِنَّا',
        transliteration: 'inna',
        pos: ['PART', 'PRON'],
        posLabel: 'PART+PRON',
        root: null,
        meaning: { en: 'Indeed We', ur: 'بے شک ہم' },
        grammarRole: 'inna+ism',
        features: { type: 'emphatic-particle+pronoun' },
        grammarExplanations: {
          en: 'إِنَّ + attached pronoun نَا (We) - اسم إنّ.',
          ur: 'إِنَّ + ضمیر متصل نَا (ہم) - اسم إنّ۔',
        },
      },
      {
        id: '15:9:2',
        position: 2,
        arabic: 'نَحْنُ',
        transliteration: 'nahnu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: { en: 'We (ourselves)', ur: 'ہم (خود)' },
        grammarRole: 'tawkid',
        features: { type: 'personal-pronoun', person: '1st', number: 'plural' },
        grammarExplanations: {
          en: 'Detached pronoun for emphasis (ضمير منفصل للتوكيد).',
          ur: 'ضمیر منفصل تاکید کے لیے۔',
        },
      },
      {
        id: '15:9:3',
        position: 3,
        arabic: 'نَزَّلْنَا',
        transliteration: 'nazzalna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        meaning: { en: 'We sent down', ur: 'ہم نے اتارا' },
        grammarRole: 'khabar-inna',
        features: { aspect: 'perfect', person: '1st', number: 'plural', form: 'II' },
        grammarExplanations: {
          en: 'Form II perfect verb - predicate of إِنَّ (خبر إنّ).',
          ur: 'باب تفعیل کا فعل ماضی - خبر إنّ۔',
        },
      },
      {
        id: '15:9:4',
        position: 4,
        arabic: 'الذِّكْرَ',
        transliteration: 'adh-dhikra',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        meaning: { en: 'the Reminder (Quran)', ur: 'ذکر (قرآن)' },
        grammarRole: 'obj',
        case: 'mansoob',
        features: { type: 'noun', definiteness: 'definite' },
        grammarExplanations: {
          en: 'Object (مفعول به) of نَزَّلْنَا - accusative.',
          ur: 'نَزَّلْنَا کا مفعول بہ - منصوب۔',
        },
      },
      {
        id: '15:9:5',
        position: 5,
        arabic: 'وَإِنَّا',
        transliteration: 'wa-inna',
        pos: ['CONJ', 'PART', 'PRON'],
        posLabel: 'CONJ+PART+PRON',
        root: null,
        meaning: { en: 'and indeed We', ur: 'اور بے شک ہم' },
        grammarRole: 'inna+ism',
        features: { type: 'conjunction+emphatic+pronoun' },
        grammarExplanations: {
          en: 'Conjunction + إِنَّ + pronoun.',
          ur: 'حرف عطف + إِنَّ + ضمیر۔',
        },
      },
      {
        id: '15:9:6',
        position: 6,
        arabic: 'لَهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'for it/of it', ur: 'اس کے' },
        grammarRole: 'jarr-majrur',
        features: { type: 'preposition+pronoun' },
        grammarExplanations: {
          en: 'Preposition لِ + pronoun - refers to الذِّكْر.',
          ur: 'حرف جر لِ + ضمیر - الذِّكْر کی طرف راجع۔',
        },
      },
      {
        id: '15:9:7',
        position: 7,
        arabic: 'لَحَافِظُونَ',
        transliteration: 'la-hafizun',
        pos: ['EMPH', 'N'],
        posLabel: 'EMPH+N',
        root: 'ح ف ظ',
        meaning: { en: 'surely guardians/preservers', ur: 'یقیناً محافظ' },
        grammarRole: 'khabar-inna',
        case: 'marfoo',
        features: { type: 'active-participle', pattern: 'فَاعِل', number: 'plural' },
        grammarExplanations: {
          en: 'لام التوكيد + predicate of إِنَّ (خبر إنّ) - nominative.',
          ur: 'لام توکید + خبر إنّ - مرفوع۔',
        },
      },
    ],
    structure: {
      type: 'compound-emphasis',
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
      ],
      explanation: {
        en: 'Divine promise of Quran preservation with triple emphasis',
        ur: 'قرآن کی حفاظت کا الٰہی وعدہ تین تاکیدوں کے ساتھ',
      },
    },
  },

  10: {
    text: 'وَلَقَدْ أَرْسَلْنَا مِن قَبْلِكَ فِي شِيَعِ الْأَوَّلِينَ',
    translation: {
      en: 'And We had certainly sent [messengers] before you among the sects of the former peoples.',
      ur: 'اور ہم نے تم سے پہلے پچھلی امتوں میں رسول بھیجے',
    },
    words: [
      {
        id: '15:10:1',
        position: 1,
        arabic: 'وَلَقَدْ',
        transliteration: 'wa-laqad',
        pos: ['CONJ', 'EMPH', 'PART'],
        posLabel: 'CONJ+EMPH+PART',
        root: null,
        meaning: { en: 'And certainly', ur: 'اور یقیناً' },
        grammarRole: 'particle',
        features: { type: 'emphatic-particles' },
        grammarExplanations: {
          en: 'Conjunction وَ + لام القسم + قَدْ للتحقيق (oath + certainty).',
          ur: 'حرف عطف وَ + لام قسم + قَدْ تحقیق کے لیے۔',
        },
      },
      {
        id: '15:10:2',
        position: 2,
        arabic: 'أَرْسَلْنَا',
        transliteration: 'arsalna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر س ل',
        meaning: { en: 'We sent', ur: 'ہم نے بھیجا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '1st', number: 'plural', form: 'IV' },
        grammarExplanations: {
          en: 'Form IV perfect verb (أَفْعَلَ) - "We sent".',
          ur: 'باب افعال کا فعل ماضی - "ہم نے بھیجا"۔',
        },
      },
      {
        id: '15:10:3',
        position: 3,
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'from/before', ur: 'سے/پہلے' },
        grammarRole: 'harf-jarr',
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition (حرف جر).',
          ur: 'حرف جر۔',
        },
      },
      {
        id: '15:10:4',
        position: 4,
        arabic: 'قَبْلِكَ',
        transliteration: 'qablika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ق ب ل',
        meaning: { en: 'before you', ur: 'تم سے پہلے' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        features: { type: 'noun+pronoun', state: 'construct' },
        grammarExplanations: {
          en: 'Adverb of time + attached pronoun - genitive.',
          ur: 'ظرف زمان + ضمیر متصل - مجرور۔',
        },
      },
      {
        id: '15:10:5',
        position: 5,
        arabic: 'فِي',
        transliteration: 'fi',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'among/in', ur: 'میں' },
        grammarRole: 'harf-jarr',
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition (حرف جر) indicating location.',
          ur: 'حرف جر مکان کے لیے۔',
        },
      },
      {
        id: '15:10:6',
        position: 6,
        arabic: 'شِيَعِ',
        transliteration: "shiya'i",
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ي ع',
        meaning: { en: 'sects/groups', ur: 'گروہوں/فرقوں' },
        grammarRole: 'mudaf',
        case: 'majroor',
        features: { type: 'noun', number: 'plural', state: 'construct' },
        grammarExplanations: {
          en: 'Noun in construct state (مضاف) - genitive due to فِي.',
          ur: 'مضاف - فِي کی وجہ سے مجرور۔',
        },
      },
      {
        id: '15:10:7',
        position: 7,
        arabic: 'الْأَوَّلِينَ',
        transliteration: 'al-awwalin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'أ و ل',
        meaning: { en: 'the former/earlier', ur: 'پہلوں/اگلوں' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { type: 'adjective', number: 'plural', definiteness: 'definite' },
        grammarExplanations: {
          en: 'مضاف إليه - genitive.',
          ur: 'مضاف الیہ - مجرور۔',
        },
      },
    ],
    structure: {
      type: 'verbal-sentence',
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
      ],
      explanation: {
        en: 'Allah sent messengers to previous nations',
        ur: 'اللہ نے پچھلی امتوں میں رسول بھیجے',
      },
    },
  },

  11: {
    text: "وَمَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ",
    translation: {
      en: "",
      ur: "اور اُن کے پاس کوئی پیغمبر نہیں آتا تھا مگر وہ اُس کے ساتھ استہزاء کرتے تھے",
    },
    words: [
      { id: '15:11:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '15:11:2', arabic: "يَأْتِيهِم", transliteration: "yatīhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '15:11:3', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '15:11:4', arabic: "رَّسُولٍ", transliteration: "rasūlin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messenger", ur: "رسول" } },
      { id: '15:11:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '15:11:6', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they did", ur: "وہ لوگ did" } },
      { id: '15:11:7', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "at him", ur: "at him" } },
      { id: '15:11:8', arabic: "يَسْتَهْزِءُونَ", transliteration: "yastahziūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "mock", ur: "mock" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  12: {
    text: "كَذَٰلِكَ نَسْلُكُهُۥ فِى قُلُوبِ ٱلْمُجْرِمِينَ",
    translation: {
      en: "",
      ur: "اسی طرح ہم اس (تکذیب وضلال) کو گنہگاروں کے دلوں میں داخل کر دیتے ہیں",
    },
    words: [
      { id: '15:12:1', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '15:12:2', arabic: "نَسْلُكُهُۥ", transliteration: "naslukuhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We let it enter", ur: "ہم let it enter" } },
      { id: '15:12:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '15:12:4', arabic: "قُلُوبِ", transliteration: "qulūbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) hearts", ur: "(the) hearts" } },
      { id: '15:12:5', arabic: "ٱلْمُجْرِمِينَ", transliteration: "l-muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the criminals", ur: "(of) the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  13: {
    text: "لَا يُؤْمِنُونَ بِهِۦ ۖ وَقَدْ خَلَتْ سُنَّةُ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "سو وہ اس پر ایمان نہیں لاتے اور پہلوں کی روش بھی یہی رہی ہے",
    },
    words: [
      { id: '15:13:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '15:13:2', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } },
      { id: '15:13:3', arabic: "بِهِۦ ۖ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '15:13:4', arabic: "وَقَدْ", transliteration: "waqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and verily", ur: "اور بیشک" } },
      { id: '15:13:5', arabic: "خَلَتْ", transliteration: "khalat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have passed", ur: "have passed" } },
      { id: '15:13:6', arabic: "سُنَّةُ", transliteration: "sunnatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the way(s)", ur: "the راستہ(s)" } },
      { id: '15:13:7', arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the former (people)", ur: "(of) the former (لوگ)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  14: {
    text: "وَلَوْ فَتَحْنَا عَلَيْهِم بَابًۭا مِّنَ ٱلسَّمَآءِ فَظَلُّوا۟ فِيهِ يَعْرُجُونَ",
    translation: {
      en: "",
      ur: "اوراگر ہم آسمان کا کوئی دروازہ اُن پر کھول دیں اور وہ اس میں چڑھنے بھی لگیں",
    },
    words: [
      { id: '15:14:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (even) if", ur: "اور (even) if" } },
      { id: '15:14:2', arabic: "فَتَحْنَا", transliteration: "fataḥnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "We opened", ur: "ہم opened" } },
      { id: '15:14:3', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '15:14:4', arabic: "بَابًۭا", transliteration: "bāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a gate", ur: "a gate" } },
      { id: '15:14:5', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:14:6', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heaven", ur: "the آسمان" } },
      { id: '15:14:7', arabic: "فَظَلُّوا۟", transliteration: "faẓallū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and they were to continue", ur: "اور وہ لوگ were کو continue" } },
      { id: '15:14:8', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '15:14:9', arabic: "يَعْرُجُونَ", transliteration: "yaʿrujūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) ascend", ur: "(کو) ascend" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  15: {
    text: "لَقَالُوٓا۟ إِنَّمَا سُكِّرَتْ أَبْصَـٰرُنَا بَلْ نَحْنُ قَوْمٌۭ مَّسْحُورُونَ",
    translation: {
      en: "",
      ur: "تو بھی یہی کہیں کہ ہماری آنکھیں مخمور ہوگئی ہیں بلکہ ہم پر جادو کر دیا گیا ہے",
    },
    words: [
      { id: '15:15:1', arabic: "لَقَالُوٓا۟", transliteration: "laqālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They would surely say", ur: "وہ لوگ would یقیناً کہو" } },
      { id: '15:15:2', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '15:15:3', arabic: "سُكِّرَتْ", transliteration: "sukkirat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have been dazzled", ur: "have been dazzled" } },
      { id: '15:15:4', arabic: "أَبْصَـٰرُنَا", transliteration: "abṣārunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our eyes", ur: "our eyes" } },
      { id: '15:15:5', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '15:15:6', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "we", ur: "ہم" } },
      { id: '15:15:7', arabic: "قَوْمٌۭ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '15:15:8', arabic: "مَّسْحُورُونَ", transliteration: "masḥūrūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "bewitched", ur: "bewitched" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  16: {
    text: "وَلَقَدْ جَعَلْنَا فِى ٱلسَّمَآءِ بُرُوجًۭا وَزَيَّنَّـٰهَا لِلنَّـٰظِرِينَ",
    translation: {
      en: "",
      ur: "اور ہم ہی نے آسمان میں برج بنائے اور دیکھنے والوں کے لیے اُس کو سجا دیا",
    },
    words: [
      { id: '15:16:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '15:16:2', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We have placed", ur: "ہم have placed" } },
      { id: '15:16:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '15:16:4', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '15:16:5', arabic: "بُرُوجًۭا", transliteration: "burūjan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "constellations", ur: "constellations" } },
      { id: '15:16:6', arabic: "وَزَيَّنَّـٰهَا", transliteration: "wazayyannāhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We have beautified it", ur: "اور ہم have beautified it" } },
      { id: '15:16:7', arabic: "لِلنَّـٰظِرِينَ", transliteration: "lilnnāẓirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the observers", ur: "for the observers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  17: {
    text: "وَحَفِظْنَـٰهَا مِن كُلِّ شَيْطَـٰنٍۢ رَّجِيمٍ",
    translation: {
      en: "",
      ur: "اور ہر شیطان راندہٴ درگاہ سے اُسے محفوظ کر دیا",
    },
    words: [
      { id: '15:17:1', arabic: "وَحَفِظْنَـٰهَا", transliteration: "waḥafiẓ'nāhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We have protected it", ur: "اور ہم have protected it" } },
      { id: '15:17:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:17:3', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '15:17:4', arabic: "شَيْطَـٰنٍۢ", transliteration: "shayṭānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "devil", ur: "devil" } },
      { id: '15:17:5', arabic: "رَّجِيمٍ", transliteration: "rajīmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "accursed", ur: "accursed" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  18: {
    text: "إِلَّا مَنِ ٱسْتَرَقَ ٱلسَّمْعَ فَأَتْبَعَهُۥ شِهَابٌۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "ہاں اگر کوئی چوری سے سننا چاہے تو چمکتا ہوا انگارہ اس کے پیچھے لپکتا ہے",
    },
    words: [
      { id: '15:18:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '15:18:2', arabic: "مَنِ", transliteration: "mani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(one) who", ur: "(one) جو" } },
      { id: '15:18:3', arabic: "ٱسْتَرَقَ", transliteration: "is'taraqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "steals", ur: "steals" } },
      { id: '15:18:4', arabic: "ٱلسَّمْعَ", transliteration: "l-samʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the hearing", ur: "the hearing" } },
      { id: '15:18:5', arabic: "فَأَتْبَعَهُۥ", transliteration: "fa-atbaʿahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then follows him", ur: "پھر follows him" } },
      { id: '15:18:6', arabic: "شِهَابٌۭ", transliteration: "shihābun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a burning flame", ur: "a burning flame" } },
      { id: '15:18:7', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  19: {
    text: "وَٱلْأَرْضَ مَدَدْنَـٰهَا وَأَلْقَيْنَا فِيهَا رَوَٰسِىَ وَأَنۢبَتْنَا فِيهَا مِن كُلِّ شَىْءٍۢ مَّوْزُونٍۢ",
    translation: {
      en: "",
      ur: "اور زمین کو بھی ہم ہی نے پھیلایا اور اس پر پہاڑ (بنا کر) رکھ دیئے اور اس میں ہر ایک سنجیدہ چیز اُگائی",
    },
    words: [
      { id: '15:19:1', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the earth", ur: "اور زمین" } },
      { id: '15:19:2', arabic: "مَدَدْنَـٰهَا", transliteration: "madadnāhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have spread it", ur: "ہم have spread it" } },
      { id: '15:19:3', arabic: "وَأَلْقَيْنَا", transliteration: "wa-alqaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [We] cast", ur: "اور [ہم] cast" } },
      { id: '15:19:4', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '15:19:5', arabic: "رَوَٰسِىَ", transliteration: "rawāsiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "firm mountains", ur: "firm mountains" } },
      { id: '15:19:6', arabic: "وَأَنۢبَتْنَا", transliteration: "wa-anbatnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [We] caused to grow", ur: "اور [ہم] caused کو grow" } },
      { id: '15:19:7', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '15:19:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:19:9', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '15:19:10', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '15:19:11', arabic: "مَّوْزُونٍۢ", transliteration: "mawzūnin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "well-balanced", ur: "well-balanced" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  20: {
    text: "وَجَعَلْنَا لَكُمْ فِيهَا مَعَـٰيِشَ وَمَن لَّسْتُمْ لَهُۥ بِرَٰزِقِينَ",
    translation: {
      en: "",
      ur: "اور ہم ہی نے تمہارے لیے اور ان لوگوں کے لیے جن کو تم روزی نہیں دیتے اس میں معاش کے سامان پیدا کئے",
    },
    words: [
      { id: '15:20:1', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "And We have made", ur: "اور ہم have made" } },
      { id: '15:20:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '15:20:3', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '15:20:4', arabic: "مَعَـٰيِشَ", transliteration: "maʿāyisha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "means of living", ur: "means of living" } },
      { id: '15:20:5', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whom", ur: "اور whom" } },
      { id: '15:20:6', arabic: "لَّسْتُمْ", transliteration: "lastum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are not", ur: "تم are نہیں" } },
      { id: '15:20:7', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '15:20:8', arabic: "بِرَٰزِقِينَ", transliteration: "birāziqīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "providers", ur: "providers" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  21: {
    text: "وَإِن مِّن شَىْءٍ إِلَّا عِندَنَا خَزَآئِنُهُۥ وَمَا نُنَزِّلُهُۥٓ إِلَّا بِقَدَرٍۢ مَّعْلُومٍۢ",
    translation: {
      en: "",
      ur: "اور ہمارے ہاں ہر چیز کے خزانے ہیں اور ہم ان کو بمقدار مناسب اُتارتے رہتے ہیں",
    },
    words: [
      { id: '15:21:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '15:21:2', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) any", ur: "(is) any" } },
      { id: '15:21:3', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '15:21:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '15:21:5', arabic: "عِندَنَا", transliteration: "ʿindanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with Us", ur: "ساتھ Us" } },
      { id: '15:21:6', arabic: "خَزَآئِنُهُۥ", transliteration: "khazāinuhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) its treasures", ur: "(are) its treasures" } },
      { id: '15:21:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '15:21:8', arabic: "نُنَزِّلُهُۥٓ", transliteration: "nunazziluhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We send it down", ur: "ہم send it down" } },
      { id: '15:21:9', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '15:21:10', arabic: "بِقَدَرٍۢ", transliteration: "biqadarin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in a measure", ur: "میں a measure" } },
      { id: '15:21:11', arabic: "مَّعْلُومٍۢ", transliteration: "maʿlūmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "known", ur: "known" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  22: {
    text: "وَأَرْسَلْنَا ٱلرِّيَـٰحَ لَوَٰقِحَ فَأَنزَلْنَا مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَسْقَيْنَـٰكُمُوهُ وَمَآ أَنتُمْ لَهُۥ بِخَـٰزِنِينَ",
    translation: {
      en: "",
      ur: "اور ہم ہی ہوائیں چلاتے ہیں (جو بادلوں کے پانی سے) بھری ہوئی ہوتی ہیں اور ہم ہی آسمان سے مینہ برساتے ہیں اور ہم ہی تم کو اس کا پانی پلاتے ہیں اور تم تو اس کا خرانہ نہیں رکھتے",
    },
    words: [
      { id: '15:22:1', arabic: "وَأَرْسَلْنَا", transliteration: "wa-arsalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر س ل", meaning: { en: "And We have sent", ur: "اور ہم have sent" } },
      { id: '15:22:2', arabic: "ٱلرِّيَـٰحَ", transliteration: "l-riyāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the winds", ur: "the winds" } },
      { id: '15:22:3', arabic: "لَوَٰقِحَ", transliteration: "lawāqiḥa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fertilizing", ur: "fertilizing" } },
      { id: '15:22:4', arabic: "فَأَنزَلْنَا", transliteration: "fa-anzalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ن ز ل", meaning: { en: "and We sent down", ur: "اور ہم sent down" } },
      { id: '15:22:5', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:22:6', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '15:22:7', arabic: "مَآءًۭ", transliteration: "māan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "water", ur: "پانی" } },
      { id: '15:22:8', arabic: "فَأَسْقَيْنَـٰكُمُوهُ", transliteration: "fa-asqaynākumūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and We gave it to you to drink", ur: "اور ہم gave it کو تم کو drink" } },
      { id: '15:22:9', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '15:22:10', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '15:22:11', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '15:22:12', arabic: "بِخَـٰزِنِينَ", transliteration: "bikhāzinīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(are) retainers", ur: "(are) retainers" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  23: {
    text: "وَإِنَّا لَنَحْنُ نُحْىِۦ وَنُمِيتُ وَنَحْنُ ٱلْوَٰرِثُونَ",
    translation: {
      en: "",
      ur: "اور ہم ہی حیات بخشتے اور ہم ہی موت دیتے ہیں۔ اور ہم سب کے وارث (مالک) ہیں",
    },
    words: [
      { id: '15:23:1', arabic: "وَإِنَّا", transliteration: "wa-innā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, We", ur: "اور بیشک, ہم" } },
      { id: '15:23:2', arabic: "لَنَحْنُ", transliteration: "lanaḥnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely [We]", ur: "یقیناً [ہم]" } },
      { id: '15:23:3', arabic: "نُحْىِۦ", transliteration: "nuḥ'yī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We give life", ur: "ہم give زندگی" } },
      { id: '15:23:4', arabic: "وَنُمِيتُ", transliteration: "wanumītu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We cause death", ur: "اور ہم cause موت" } },
      { id: '15:23:5', arabic: "وَنَحْنُ", transliteration: "wanaḥnu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We", ur: "اور ہم" } },
      { id: '15:23:6', arabic: "ٱلْوَٰرِثُونَ", transliteration: "l-wārithūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the Inheritors", ur: "(are) the Inheritors" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  24: {
    text: "وَلَقَدْ عَلِمْنَا ٱلْمُسْتَقْدِمِينَ مِنكُمْ وَلَقَدْ عَلِمْنَا ٱلْمُسْتَـْٔخِرِينَ",
    translation: {
      en: "",
      ur: "اور جو لوگ تم میں پہلے گزر چکے ہیں ہم کو معلوم ہیں اور جو پیچھے آنے والے ہیں وہ بھی ہم کو معلوم ہیں",
    },
    words: [
      { id: '15:24:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '15:24:2', arabic: "عَلِمْنَا", transliteration: "ʿalim'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We know", ur: "ہم جاننا" } },
      { id: '15:24:3', arabic: "ٱلْمُسْتَقْدِمِينَ", transliteration: "l-mus'taqdimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the preceding ones", ur: "the preceding ones" } },
      { id: '15:24:4', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '15:24:5', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and verily", ur: "اور بیشک" } },
      { id: '15:24:6', arabic: "عَلِمْنَا", transliteration: "ʿalim'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We know", ur: "ہم جاننا" } },
      { id: '15:24:7', arabic: "ٱلْمُسْتَـْٔخِرِينَ", transliteration: "l-mus'takhirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the later ones", ur: "the later ones" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  25: {
    text: "وَإِنَّ رَبَّكَ هُوَ يَحْشُرُهُمْ ۚ إِنَّهُۥ حَكِيمٌ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار (قیامت کے دن) ان سب کو جمع کرے گا وہ بڑا دانا (اور) خبردار ہے",
    },
    words: [
      { id: '15:25:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '15:25:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '15:25:3', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '15:25:4', arabic: "يَحْشُرُهُمْ ۚ", transliteration: "yaḥshuruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will gather them", ur: "will gather them" } },
      { id: '15:25:5', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '15:25:6', arabic: "حَكِيمٌ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Wise", ur: "(is) حکمت والا" } },
      { id: '15:25:7', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  26: {
    text: "وَلَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ مِن صَلْصَـٰلٍۢ مِّنْ حَمَإٍۢ مَّسْنُونٍۢ",
    translation: {
      en: "",
      ur: "اور ہم نے انسان کو کھنکھناتے سڑے ہوئے گارے سے پیدا کیا ہے",
    },
    words: [
      { id: '15:26:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '15:26:2', arabic: "خَلَقْنَا", transliteration: "khalaqnā", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "We created", ur: "ہم پیدا کیا" } },
      { id: '15:26:3', arabic: "ٱلْإِنسَـٰنَ", transliteration: "l-insāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "humankind", ur: "humankind" } },
      { id: '15:26:4', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(out) of", ur: "(out) of" } },
      { id: '15:26:5', arabic: "صَلْصَـٰلٍۢ", transliteration: "ṣalṣālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sounding clay", ur: "sounding clay" } },
      { id: '15:26:6', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:26:7', arabic: "حَمَإٍۢ", transliteration: "ḥama-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "black mud", ur: "black mud" } },
      { id: '15:26:8', arabic: "مَّسْنُونٍۢ", transliteration: "masnūnin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "altered", ur: "altered" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  27: {
    text: "وَٱلْجَآنَّ خَلَقْنَـٰهُ مِن قَبْلُ مِن نَّارِ ٱلسَّمُومِ",
    translation: {
      en: "",
      ur: "اور جنوں کو اس سے بھی پہلے بےدھوئیں کی آگ سے پیدا کیا تھا",
    },
    words: [
      { id: '15:27:1', arabic: "وَٱلْجَآنَّ", transliteration: "wal-jāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the jinn", ur: "اور the jinn" } },
      { id: '15:27:2', arabic: "خَلَقْنَـٰهُ", transliteration: "khalaqnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We created it", ur: "ہم پیدا کیا it" } },
      { id: '15:27:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '15:27:4', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '15:27:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:27:6', arabic: "نَّارِ", transliteration: "nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fire", ur: "آگ" } },
      { id: '15:27:7', arabic: "ٱلسَّمُومِ", transliteration: "l-samūmi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "scorching", ur: "scorching" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  28: {
    text: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَـٰٓئِكَةِ إِنِّى خَـٰلِقٌۢ بَشَرًۭا مِّن صَلْصَـٰلٍۢ مِّنْ حَمَإٍۢ مَّسْنُونٍۢ",
    translation: {
      en: "",
      ur: "اور جب تمہارے پروردگار نے فرشتوں سے فرمایا کہ میں کھنکھناتے سڑے ہوئے گارے سے ایک بشر بنانے والا ہوں",
    },
    words: [
      { id: '15:28:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '15:28:2', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "your Lord said", ur: "your رب کہا" } },
      { id: '15:28:3', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord said", ur: "your رب کہا" } },
      { id: '15:28:4', arabic: "لِلْمَلَـٰٓئِكَةِ", transliteration: "lil'malāikati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the Angels", ur: "کو the Angels" } },
      { id: '15:28:5', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '15:28:6', arabic: "خَـٰلِقٌۢ", transliteration: "khāliqun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) create", ur: "(will) پیدا کرنا" } },
      { id: '15:28:7', arabic: "بَشَرًۭا", transliteration: "basharan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a human being", ur: "a human being" } },
      { id: '15:28:8', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(out) of", ur: "(out) of" } },
      { id: '15:28:9', arabic: "صَلْصَـٰلٍۢ", transliteration: "ṣalṣālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "clay", ur: "clay" } },
      { id: '15:28:10', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:28:11', arabic: "حَمَإٍۢ", transliteration: "ḥama-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "black mud", ur: "black mud" } },
      { id: '15:28:12', arabic: "مَّسْنُونٍۢ", transliteration: "masnūnin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "altered", ur: "altered" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  29: {
    text: "فَإِذَا سَوَّيْتُهُۥ وَنَفَخْتُ فِيهِ مِن رُّوحِى فَقَعُوا۟ لَهُۥ سَـٰجِدِينَ",
    translation: {
      en: "",
      ur: "جب اس کو (صورت انسانیہ میں) درست کر لوں اور اس میں اپنی (بےبہا چیز یعنی) روح پھونک دوں تو اس کے آگے سجدے میں گر پڑنا",
    },
    words: [
      { id: '15:29:1', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So, when", ur: "So, when" } },
      { id: '15:29:2', arabic: "سَوَّيْتُهُۥ", transliteration: "sawwaytuhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I have fashioned him", ur: "میں have fashioned him" } },
      { id: '15:29:3', arabic: "وَنَفَخْتُ", transliteration: "wanafakhtu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [I] breathed", ur: "اور [میں] breathed" } },
      { id: '15:29:4', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "into him", ur: "into him" } },
      { id: '15:29:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:29:6', arabic: "رُّوحِى", transliteration: "rūḥī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My spirit", ur: "My spirit" } },
      { id: '15:29:7', arabic: "فَقَعُوا۟", transliteration: "faqaʿū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then fall down", ur: "پھر fall down" } },
      { id: '15:29:8', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '15:29:9', arabic: "سَـٰجِدِينَ", transliteration: "sājidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prostrating", ur: "prostrating" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  30: {
    text: "فَسَجَدَ ٱلْمَلَـٰٓئِكَةُ كُلُّهُمْ أَجْمَعُونَ",
    translation: {
      en: "",
      ur: "تو فرشتے تو سب کے سب سجدے میں گر پڑے",
    },
    words: [
      { id: '15:30:1', arabic: "فَسَجَدَ", transliteration: "fasajada", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So prostrated", ur: "So prostrated" } },
      { id: '15:30:2', arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '15:30:3', arabic: "كُلُّهُمْ", transliteration: "kulluhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all of them", ur: "سب of them" } },
      { id: '15:30:4', arabic: "أَجْمَعُونَ", transliteration: "ajmaʿūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "together", ur: "together" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  31: {
    text: "إِلَّآ إِبْلِيسَ أَبَىٰٓ أَن يَكُونَ مَعَ ٱلسَّـٰجِدِينَ",
    translation: {
      en: "",
      ur: "مگر شیطان کہ اس نے سجدہ کرنے والوں کے ساتھ ہونے سے انکار کر دیا",
    },
    words: [
      { id: '15:31:1', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '15:31:2', arabic: "إِبْلِيسَ", transliteration: "ib'līsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Iblis", ur: "Iblis" } },
      { id: '15:31:3', arabic: "أَبَىٰٓ", transliteration: "abā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He refused", ur: "وہ refused" } },
      { id: '15:31:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '15:31:5', arabic: "يَكُونَ", transliteration: "yakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '15:31:6', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '15:31:7', arabic: "ٱلسَّـٰجِدِينَ", transliteration: "l-sājidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those who prostrated", ur: "جو لوگ prostrated" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  32: {
    text: "قَالَ يَـٰٓإِبْلِيسُ مَا لَكَ أَلَّا تَكُونَ مَعَ ٱلسَّـٰجِدِينَ",
    translation: {
      en: "",
      ur: "(خدا نے فرمایا) کہ ابلیس! تجھے کیا ہوا کہ تو سجدہ کرنے والوں میں شامل نہ ہوا",
    },
    words: [
      { id: '15:32:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:32:2', arabic: "يَـٰٓإِبْلِيسُ", transliteration: "yāib'līsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Iblis", ur: "اے Iblis" } },
      { id: '15:32:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "What", ur: "کیا" } },
      { id: '15:32:4', arabic: "لَكَ", transliteration: "laka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) for you", ur: "(is) for تم" } },
      { id: '15:32:5', arabic: "أَلَّا", transliteration: "allā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that not", ur: "وہ نہیں" } },
      { id: '15:32:6', arabic: "تَكُونَ", transliteration: "takūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '15:32:7', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '15:32:8', arabic: "ٱلسَّـٰجِدِينَ", transliteration: "l-sājidīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those who prostrated", ur: "جو لوگ prostrated" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  33: {
    text: "قَالَ لَمْ أَكُن لِّأَسْجُدَ لِبَشَرٍ خَلَقْتَهُۥ مِن صَلْصَـٰلٍۢ مِّنْ حَمَإٍۢ مَّسْنُونٍۢ",
    translation: {
      en: "",
      ur: "(اس نے) کہا کہ میں ایسا نہیں ہوں کہ انسان کو جس کو تو نے کھنکھناتے سڑے ہوئے گارے سے بنایا ہے سجدہ کروں",
    },
    words: [
      { id: '15:33:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:33:2', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "I am not", ur: "میں am نہیں" } },
      { id: '15:33:3', arabic: "أَكُن", transliteration: "akun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am not", ur: "میں am نہیں" } },
      { id: '15:33:4', arabic: "لِّأَسْجُدَ", transliteration: "li-asjuda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(one) to prostrate", ur: "(one) کو prostrate" } },
      { id: '15:33:5', arabic: "لِبَشَرٍ", transliteration: "libasharin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to a human", ur: "کو a human" } },
      { id: '15:33:6', arabic: "خَلَقْتَهُۥ", transliteration: "khalaqtahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "whom You created", ur: "whom تم پیدا کیا" } },
      { id: '15:33:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(out) of", ur: "(out) of" } },
      { id: '15:33:8', arabic: "صَلْصَـٰلٍۢ", transliteration: "ṣalṣālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "clay", ur: "clay" } },
      { id: '15:33:9', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:33:10', arabic: "حَمَإٍۢ", transliteration: "ḥama-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "black mud", ur: "black mud" } },
      { id: '15:33:11', arabic: "مَّسْنُونٍۢ", transliteration: "masnūnin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "altered", ur: "altered" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  34: {
    text: "قَالَ فَٱخْرُجْ مِنْهَا فَإِنَّكَ رَجِيمٌۭ",
    translation: {
      en: "",
      ur: "(خدا نے) فرمایا یہاں سے نکل جا۔ تو مردود ہے",
    },
    words: [
      { id: '15:34:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:34:2', arabic: "فَٱخْرُجْ", transliteration: "fa-ukh'ruj", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then get out", ur: "پھر get out" } },
      { id: '15:34:3', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '15:34:4', arabic: "فَإِنَّكَ", transliteration: "fa-innaka", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "for indeed, you", ur: "for بیشک, تم" } },
      { id: '15:34:5', arabic: "رَجِيمٌۭ", transliteration: "rajīmun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) expelled", ur: "(are) expelled" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  35: {
    text: "وَإِنَّ عَلَيْكَ ٱللَّعْنَةَ إِلَىٰ يَوْمِ ٱلدِّينِ",
    translation: {
      en: "",
      ur: "اور تجھ پر قیامت کے دن تک لعنت (برسے گی)",
    },
    words: [
      { id: '15:35:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '15:35:2', arabic: "عَلَيْكَ", transliteration: "ʿalayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '15:35:3', arabic: "ٱللَّعْنَةَ", transliteration: "l-laʿnata", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) the curse", ur: "(will be) the curse" } },
      { id: '15:35:4', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "till", ur: "till" } },
      { id: '15:35:5', arabic: "يَوْمِ", transliteration: "yawmi", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(the) Day", ur: "(the) دن" } },
      { id: '15:35:6', arabic: "ٱلدِّينِ", transliteration: "l-dīni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) [the] Judgment", ur: "(of) [the] Judgment" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  36: {
    text: "قَالَ رَبِّ فَأَنظِرْنِىٓ إِلَىٰ يَوْمِ يُبْعَثُونَ",
    translation: {
      en: "",
      ur: "(اس نے) کہا کہ پروردگار مجھے اس دن تک مہلت دے جب لوگ (مرنے کے بعد) زندہ کئے جائیں گے",
    },
    words: [
      { id: '15:36:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:36:2', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my Lord", ur: "اے my رب" } },
      { id: '15:36:3', arabic: "فَأَنظِرْنِىٓ", transliteration: "fa-anẓir'nī", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then give me respite", ur: "پھر give me respite" } },
      { id: '15:36:4', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "till", ur: "till" } },
      { id: '15:36:5', arabic: "يَوْمِ", transliteration: "yawmi", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(the) Day", ur: "(the) دن" } },
      { id: '15:36:6', arabic: "يُبْعَثُونَ", transliteration: "yub'ʿathūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are raised", ur: "وہ لوگ are raised" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  37: {
    text: "قَالَ فَإِنَّكَ مِنَ ٱلْمُنظَرِينَ",
    translation: {
      en: "",
      ur: "فرمایا کہ تجھے مہلت دی جاتی ہے",
    },
    words: [
      { id: '15:37:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:37:2', arabic: "فَإِنَّكَ", transliteration: "fa-innaka", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then indeed you", ur: "پھر بیشک تم" } },
      { id: '15:37:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of", ur: "(are) of" } },
      { id: '15:37:4', arabic: "ٱلْمُنظَرِينَ", transliteration: "l-munẓarīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones given respite", ur: "the ones given respite" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  38: {
    text: "إِلَىٰ يَوْمِ ٱلْوَقْتِ ٱلْمَعْلُومِ",
    translation: {
      en: "",
      ur: "وقت مقرر (یعنی قیامت) کے دن تک",
    },
    words: [
      { id: '15:38:1', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "Till", ur: "Till" } },
      { id: '15:38:2', arabic: "يَوْمِ", transliteration: "yawmi", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "the Day", ur: "the دن" } },
      { id: '15:38:3', arabic: "ٱلْوَقْتِ", transliteration: "l-waqti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the time", ur: "(of) the وقت" } },
      { id: '15:38:4', arabic: "ٱلْمَعْلُومِ", transliteration: "l-maʿlūmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "well-known", ur: "well-known" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  39: {
    text: "قَالَ رَبِّ بِمَآ أَغْوَيْتَنِى لَأُزَيِّنَنَّ لَهُمْ فِى ٱلْأَرْضِ وَلَأُغْوِيَنَّهُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "(اس نے) کہا کہ پروردگار جیسا تونے مجھے رستے سے الگ کیا ہے میں بھی زمین میں لوگوں کے لیے (گناہوں) کو آراستہ کر دکھاؤں گا اور سب کو بہکاؤں گا",
    },
    words: [
      { id: '15:39:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:39:2', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '15:39:3', arabic: "بِمَآ", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Because", ur: "Because" } },
      { id: '15:39:4', arabic: "أَغْوَيْتَنِى", transliteration: "aghwaytanī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You misled me", ur: "تم misled me" } },
      { id: '15:39:5', arabic: "لَأُزَيِّنَنَّ", transliteration: "la-uzayyinanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, I will make (evil) fair-seeming", ur: "یقیناً, میں will make (برا) fair-seeming" } },
      { id: '15:39:6', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '15:39:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '15:39:8', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '15:39:9', arabic: "وَلَأُغْوِيَنَّهُمْ", transliteration: "wala-ugh'wiyannahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I will mislead them", ur: "اور میں will mislead them" } },
      { id: '15:39:10', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  40: {
    text: "إِلَّا عِبَادَكَ مِنْهُمُ ٱلْمُخْلَصِينَ",
    translation: {
      en: "",
      ur: "ہاں ان میں جو تیرے مخلص بندے ہیں (ان پر قابو چلنا مشکل ہے)",
    },
    words: [
      { id: '15:40:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '15:40:2', arabic: "عِبَادَكَ", transliteration: "ʿibādaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Your slaves", ur: "Your slaves" } },
      { id: '15:40:3', arabic: "مِنْهُمُ", transliteration: "min'humu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '15:40:4', arabic: "ٱلْمُخْلَصِينَ", transliteration: "l-mukh'laṣīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who are sincere", ur: "the ones جو are sincere" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  41: {
    text: "قَالَ هَـٰذَا صِرَٰطٌ عَلَىَّ مُسْتَقِيمٌ",
    translation: {
      en: "",
      ur: "(خدا نے) فرمایا کہ مجھ تک (پہنچنے کا) یہی سیدھا رستہ ہے",
    },
    words: [
      { id: '15:41:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:41:2', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '15:41:3', arabic: "صِرَٰطٌ", transliteration: "ṣirāṭun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the way", ur: "(is) the راستہ" } },
      { id: '15:41:4', arabic: "عَلَىَّ", transliteration: "ʿalayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Me", ur: "کو Me" } },
      { id: '15:41:5', arabic: "مُسْتَقِيمٌ", transliteration: "mus'taqīmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "straight", ur: "سیدھا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  42: {
    text: "إِنَّ عِبَادِى لَيْسَ لَكَ عَلَيْهِمْ سُلْطَـٰنٌ إِلَّا مَنِ ٱتَّبَعَكَ مِنَ ٱلْغَاوِينَ",
    translation: {
      en: "",
      ur: "جو میرے (مخلص) بندے ہیں ان پر تجھے کچھ قدرت نہیں (کہ ان کو گناہ میں ڈال سکے) ہاں بد راہوں میں سے جو تیرے پیچھے چل پڑے",
    },
    words: [
      { id: '15:42:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '15:42:2', arabic: "عِبَادِى", transliteration: "ʿibādī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My slaves", ur: "My slaves" } },
      { id: '15:42:3', arabic: "لَيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '15:42:4', arabic: "لَكَ", transliteration: "laka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have", ur: "تم have" } },
      { id: '15:42:5', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '15:42:6', arabic: "سُلْطَـٰنٌ", transliteration: "sul'ṭānun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any authority", ur: "any authority" } },
      { id: '15:42:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '15:42:8', arabic: "مَنِ", transliteration: "mani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '15:42:9', arabic: "ٱتَّبَعَكَ", transliteration: "ittabaʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "follow you", ur: "follow تم" } },
      { id: '15:42:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:42:11', arabic: "ٱلْغَاوِينَ", transliteration: "l-ghāwīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who go astray", ur: "the ones جو go astray" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  43: {
    text: "وَإِنَّ جَهَنَّمَ لَمَوْعِدُهُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "اور ان سب کے وعدے کی جگہ جہنم ہے",
    },
    words: [
      { id: '15:43:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '15:43:2', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hell", ur: "جہنم" } },
      { id: '15:43:3', arabic: "لَمَوْعِدُهُمْ", transliteration: "lamawʿiduhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely the promised place for them", ur: "(is) یقیناً the promised place for them" } },
      { id: '15:43:4', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  44: {
    text: "لَهَا سَبْعَةُ أَبْوَٰبٍۢ لِّكُلِّ بَابٍۢ مِّنْهُمْ جُزْءٌۭ مَّقْسُومٌ",
    translation: {
      en: "",
      ur: "اس کے سات دروازے ہیں۔ ہر ایک دروازے کے لیے ان میں سے جماعتیں تقسیم کردی گئی ہیں",
    },
    words: [
      { id: '15:44:1', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For it", ur: "For it" } },
      { id: '15:44:2', arabic: "سَبْعَةُ", transliteration: "sabʿatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) seven", ur: "(are) seven" } },
      { id: '15:44:3', arabic: "أَبْوَٰبٍۢ", transliteration: "abwābin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gates", ur: "gates" } },
      { id: '15:44:4', arabic: "لِّكُلِّ", transliteration: "likulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for each", ur: "for ہر" } },
      { id: '15:44:5', arabic: "بَابٍۢ", transliteration: "bābin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gate", ur: "gate" } },
      { id: '15:44:6', arabic: "مِّنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among them", ur: "among them" } },
      { id: '15:44:7', arabic: "جُزْءٌۭ", transliteration: "juz'on", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a portion", ur: "(is) a portion" } },
      { id: '15:44:8', arabic: "مَّقْسُومٌ", transliteration: "maqsūmun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "assigned", ur: "assigned" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  45: {
    text: "إِنَّ ٱلْمُتَّقِينَ فِى جَنَّـٰتٍۢ وَعُيُونٍ",
    translation: {
      en: "",
      ur: "جو متقی ہیں وہ باغوں اور چشموں میں ہوں گے",
    },
    words: [
      { id: '15:45:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '15:45:2', arabic: "ٱلْمُتَّقِينَ", transliteration: "l-mutaqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the righteous", ur: "the نیک" } },
      { id: '15:45:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(will be) in", ur: "(will be) میں" } },
      { id: '15:45:4', arabic: "جَنَّـٰتٍۢ", transliteration: "jannātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Gardens", ur: "باغات" } },
      { id: '15:45:5', arabic: "وَعُيُونٍ", transliteration: "waʿuyūnin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and water springs", ur: "اور پانی springs" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  46: {
    text: "ٱدْخُلُوهَا بِسَلَـٰمٍ ءَامِنِينَ",
    translation: {
      en: "",
      ur: "(ان سے کہا جائے گا کہ) ان میں سلامتی (اور خاطر جمع سے) داخل ہوجاؤ",
    },
    words: [
      { id: '15:46:1', arabic: "ٱدْخُلُوهَا", transliteration: "ud'khulūhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Enter it", ur: "Enter it" } },
      { id: '15:46:2', arabic: "بِسَلَـٰمٍ", transliteration: "bisalāmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in peace", ur: "میں peace" } },
      { id: '15:46:3', arabic: "ءَامِنِينَ", transliteration: "āminīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "secure", ur: "secure" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  47: {
    text: "وَنَزَعْنَا مَا فِى صُدُورِهِم مِّنْ غِلٍّ إِخْوَٰنًا عَلَىٰ سُرُرٍۢ مُّتَقَـٰبِلِينَ",
    translation: {
      en: "",
      ur: "اور ان کے دلوں میں جو کدورت ہوگی ان کو ہم نکال کر (صاف کر) دیں گے (گویا) بھائی بھائی تختوں پر ایک دوسرے کے سامنے بیٹھے ہوئے ہیں",
    },
    words: [
      { id: '15:47:1', arabic: "وَنَزَعْنَا", transliteration: "wanazaʿnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We (will) remove", ur: "اور ہم (will) remove" } },
      { id: '15:47:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '15:47:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '15:47:4', arabic: "صُدُورِهِم", transliteration: "ṣudūrihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their breasts", ur: "their breasts" } },
      { id: '15:47:5', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:47:6', arabic: "غِلٍّ", transliteration: "ghillin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "rancor", ur: "rancor" } },
      { id: '15:47:7', arabic: "إِخْوَٰنًا", transliteration: "ikh'wānan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(they will be) brothers", ur: "(وہ لوگ will be) brothers" } },
      { id: '15:47:8', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '15:47:9', arabic: "سُرُرٍۢ", transliteration: "sururin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "thrones", ur: "thrones" } },
      { id: '15:47:10', arabic: "مُّتَقَـٰبِلِينَ", transliteration: "mutaqābilīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "facing each other", ur: "facing ہر other" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  48: {
    text: "لَا يَمَسُّهُمْ فِيهَا نَصَبٌۭ وَمَا هُم مِّنْهَا بِمُخْرَجِينَ",
    translation: {
      en: "",
      ur: "نہ ان کو وہاں کوئی تکلیف پہنچے گی اور نہ وہاں سے نکالے جائیں گے",
    },
    words: [
      { id: '15:48:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '15:48:2', arabic: "يَمَسُّهُمْ", transliteration: "yamassuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will touch them", ur: "will touch them" } },
      { id: '15:48:3', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '15:48:4', arabic: "نَصَبٌۭ", transliteration: "naṣabun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fatigue", ur: "fatigue" } },
      { id: '15:48:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '15:48:6', arabic: "هُم", transliteration: "hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '15:48:7', arabic: "مِّنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '15:48:8', arabic: "بِمُخْرَجِينَ", transliteration: "bimukh'rajīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "will be removed", ur: "will be removed" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  49: {
    text: "۞ نَبِّئْ عِبَادِىٓ أَنِّىٓ أَنَا ٱلْغَفُورُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "(اے پیغمبر) میرے بندوں کو بتادو کہ میں بڑا بخشنے والا (اور) مہربان ہوں",
    },
    words: [
      { id: '15:49:1', arabic: "۞ نَبِّئْ", transliteration: "nabbi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Inform", ur: "Inform" } },
      { id: '15:49:2', arabic: "عِبَادِىٓ", transliteration: "ʿibādī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My slaves", ur: "My slaves" } },
      { id: '15:49:3', arabic: "أَنِّىٓ", transliteration: "annī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that I", ur: "وہ میں" } },
      { id: '15:49:4', arabic: "أَنَا", transliteration: "anā", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "I am", ur: "میں am" } },
      { id: '15:49:5', arabic: "ٱلْغَفُورُ", transliteration: "l-ghafūru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the Oft-Forgiving", ur: "the Oft-Forgiving" } },
      { id: '15:49:6', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    text: "وَأَنَّ عَذَابِى هُوَ ٱلْعَذَابُ ٱلْأَلِيمُ",
    translation: {
      en: "",
      ur: "اور یہ کہ میرا عذاب بھی درد دینے والا عذاب ہے",
    },
    words: [
      { id: '15:50:1', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that", ur: "اور وہ" } },
      { id: '15:50:2', arabic: "عَذَابِى", transliteration: "ʿadhābī", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "My punishment", ur: "My عذاب" } },
      { id: '15:50:3', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "it", ur: "it" } },
      { id: '15:50:4', arabic: "ٱلْعَذَابُ", transliteration: "l-ʿadhābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the punishment", ur: "(is) the عذاب" } },
      { id: '15:50:5', arabic: "ٱلْأَلِيمُ", transliteration: "l-alīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the most painful", ur: "the most painful" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },
  51: {
    text: "وَنَبِّئْهُمْ عَن ضَيْفِ إِبْرَٰهِيمَ",
    translation: {
      en: "",
      ur: "اور ان کو ابراہیم کے مہمانوں کا احوال سنادو",
    },
    words: [
      { id: '15:51:1', arabic: "وَنَبِّئْهُمْ", transliteration: "wanabbi'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And inform them", ur: "اور inform them" } },
      { id: '15:51:2', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "about", ur: "about" } },
      { id: '15:51:3', arabic: "ضَيْفِ", transliteration: "ḍayfi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) guests", ur: "(the) guests" } },
      { id: '15:51:4', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Ibrahim", ur: "(of) Ibrahim" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    text: "إِذْ دَخَلُوا۟ عَلَيْهِ فَقَالُوا۟ سَلَـٰمًۭا قَالَ إِنَّا مِنكُمْ وَجِلُونَ",
    translation: {
      en: "",
      ur: "جب وہ ابراہیم کے پاس آئے تو سلام کہا۔ (انہوں نے) کہا کہ ہمیں تو تم سے ڈر لگتا ہے",
    },
    words: [
      { id: '15:52:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '15:52:2', arabic: "دَخَلُوا۟", transliteration: "dakhalū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they entered", ur: "وہ لوگ entered" } },
      { id: '15:52:3', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon him", ur: "پر him" } },
      { id: '15:52:4', arabic: "فَقَالُوا۟", transliteration: "faqālū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "and said", ur: "اور کہا" } },
      { id: '15:52:5', arabic: "سَلَـٰمًۭا", transliteration: "salāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Peace", ur: "Peace" } },
      { id: '15:52:6', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:52:7', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '15:52:8', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of you", ur: "(are) of تم" } },
      { id: '15:52:9', arabic: "وَجِلُونَ", transliteration: "wajilūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "afraid", ur: "afraid" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  53: {
    text: "قَالُوا۟ لَا تَوْجَلْ إِنَّا نُبَشِّرُكَ بِغُلَـٰمٍ عَلِيمٍۢ",
    translation: {
      en: "",
      ur: "(مہمانوں نے) کہا کہ ڈریئے نہیں ہم آپ کو ایک دانشمند لڑکے کی خوشخبری دیتے ہیں",
    },
    words: [
      { id: '15:53:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '15:53:2', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '15:53:3', arabic: "تَوْجَلْ", transliteration: "tawjal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be afraid", ur: "be afraid" } },
      { id: '15:53:4', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, we", ur: "بیشک, ہم" } },
      { id: '15:53:5', arabic: "نُبَشِّرُكَ", transliteration: "nubashiruka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[we] bring glad tidings to you", ur: "[ہم] bring glad tidings کو تم" } },
      { id: '15:53:6', arabic: "بِغُلَـٰمٍ", transliteration: "bighulāmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of a boy", ur: "of a boy" } },
      { id: '15:53:7', arabic: "عَلِيمٍۢ", transliteration: "ʿalīmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "learned", ur: "learned" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  54: {
    text: "قَالَ أَبَشَّرْتُمُونِى عَلَىٰٓ أَن مَّسَّنِىَ ٱلْكِبَرُ فَبِمَ تُبَشِّرُونَ",
    translation: {
      en: "",
      ur: "بولے کہ جب مجھے بڑھاپے نے آ پکڑا تو تم خوشخبری دینے لگے۔ اب کاہے کی خوشخبری دیتے ہو",
    },
    words: [
      { id: '15:54:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:54:2', arabic: "أَبَشَّرْتُمُونِى", transliteration: "abashartumūnī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you give me glad tidings", ur: "Do تم give me glad tidings" } },
      { id: '15:54:3', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you give me glad tidings", ur: "Do تم give me glad tidings" } },
      { id: '15:54:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "although", ur: "although" } },
      { id: '15:54:5', arabic: "مَّسَّنِىَ", transliteration: "massaniya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has overtaken me", ur: "has overtaken me" } },
      { id: '15:54:6', arabic: "ٱلْكِبَرُ", transliteration: "l-kibaru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "old age", ur: "old age" } },
      { id: '15:54:7', arabic: "فَبِمَ", transliteration: "fabima", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then about what", ur: "پھر about کیا" } },
      { id: '15:54:8', arabic: "تُبَشِّرُونَ", transliteration: "tubashirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you give glad tidings", ur: "تم give glad tidings" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  55: {
    text: "قَالُوا۟ بَشَّرْنَـٰكَ بِٱلْحَقِّ فَلَا تَكُن مِّنَ ٱلْقَـٰنِطِينَ",
    translation: {
      en: "",
      ur: "(انہوں نے) کہا ہم آپ کو سچی خوشخبری دیتے ہیں آپ مایوس نہ ہوئیے",
    },
    words: [
      { id: '15:55:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '15:55:2', arabic: "بَشَّرْنَـٰكَ", transliteration: "basharnāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We give you glad tidings", ur: "ہم give تم glad tidings" } },
      { id: '15:55:3', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in truth", ur: "میں سچ" } },
      { id: '15:55:4', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (do) not", ur: "so (do) نہیں" } },
      { id: '15:55:5', arabic: "تَكُن", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '15:55:6', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:55:7', arabic: "ٱلْقَـٰنِطِينَ", transliteration: "l-qāniṭīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the despairing", ur: "the despairing" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  56: {
    text: "قَالَ وَمَن يَقْنَطُ مِن رَّحْمَةِ رَبِّهِۦٓ إِلَّا ٱلضَّآلُّونَ",
    translation: {
      en: "",
      ur: "(ابراہیم نے) کہا کہ خدا کی رحمت سے (میں مایوس کیوں ہونے لگا اس سے) مایوس ہونا گمراہوں کا کام ہے",
    },
    words: [
      { id: '15:56:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:56:2', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And who", ur: "اور جو" } },
      { id: '15:56:3', arabic: "يَقْنَطُ", transliteration: "yaqnaṭu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "despairs", ur: "despairs" } },
      { id: '15:56:4', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:56:5', arabic: "رَّحْمَةِ", transliteration: "raḥmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Mercy", ur: "(the) رحمت" } },
      { id: '15:56:6', arabic: "رَبِّهِۦٓ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) his Lord", ur: "(of) his رب" } },
      { id: '15:56:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '15:56:8', arabic: "ٱلضَّآلُّونَ", transliteration: "l-ḍālūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who are astray", ur: "جو لوگ are astray" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  57: {
    text: "قَالَ فَمَا خَطْبُكُمْ أَيُّهَا ٱلْمُرْسَلُونَ",
    translation: {
      en: "",
      ur: "پھر کہنے لگے کہ فرشتو! تمہیں (اور) کیا کام ہے",
    },
    words: [
      { id: '15:57:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:57:2', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then what", ur: "پھر کیا" } },
      { id: '15:57:3', arabic: "خَطْبُكُمْ", transliteration: "khaṭbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) your business", ur: "(is) your business" } },
      { id: '15:57:4', arabic: "أَيُّهَا", transliteration: "ayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O messengers", ur: "اے messengers" } },
      { id: '15:57:5', arabic: "ٱلْمُرْسَلُونَ", transliteration: "l-mur'salūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O messengers", ur: "اے messengers" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  58: {
    text: "قَالُوٓا۟ إِنَّآ أُرْسِلْنَآ إِلَىٰ قَوْمٍۢ مُّجْرِمِينَ",
    translation: {
      en: "",
      ur: "(انہوں نے) کہا کہ ہم ایک گنہگار قوم کی طرف بھیجے گئے ہیں (کہ اس کو عذاب کریں)",
    },
    words: [
      { id: '15:58:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '15:58:2', arabic: "إِنَّآ", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '15:58:3', arabic: "أُرْسِلْنَآ", transliteration: "ur'sil'nā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[we] have been sent", ur: "[ہم] have been sent" } },
      { id: '15:58:4', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '15:58:5', arabic: "قَوْمٍۢ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people ", ur: "a لوگ " } },
      { id: '15:58:6', arabic: "مُّجْرِمِينَ", transliteration: "muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "criminals", ur: "criminals" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  59: {
    text: "إِلَّآ ءَالَ لُوطٍ إِنَّا لَمُنَجُّوهُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "مگر لوط کے گھر والے کہ ان سب کو ہم بچالیں گے",
    },
    words: [
      { id: '15:59:1', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '15:59:2', arabic: "ءَالَ", transliteration: "āla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the family", ur: "the family" } },
      { id: '15:59:3', arabic: "لُوطٍ", transliteration: "lūṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of Lut", ur: "of Lut" } },
      { id: '15:59:4', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, we", ur: "بیشک, ہم" } },
      { id: '15:59:5', arabic: "لَمُنَجُّوهُمْ", transliteration: "lamunajjūhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely will save them", ur: "یقیناً will save them" } },
      { id: '15:59:6', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  60: {
    text: "إِلَّا ٱمْرَأَتَهُۥ قَدَّرْنَآ ۙ إِنَّهَا لَمِنَ ٱلْغَـٰبِرِينَ",
    translation: {
      en: "",
      ur: "البتہ ان کی عورت (کہ) اس کے لیے ہم نے ٹھہرا دیا ہے کہ وہ پیچھے رہ جائے گی",
    },
    words: [
      { id: '15:60:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '15:60:2', arabic: "ٱمْرَأَتَهُۥ", transliteration: "im'ra-atahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his wife", ur: "his wife" } },
      { id: '15:60:3', arabic: "قَدَّرْنَآ ۙ", transliteration: "qaddarnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have decreed", ur: "ہم have decreed" } },
      { id: '15:60:4', arabic: "إِنَّهَا", transliteration: "innahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that she", ur: "وہ she" } },
      { id: '15:60:5', arabic: "لَمِنَ", transliteration: "lamina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely of", ur: "(is) یقیناً of" } },
      { id: '15:60:6', arabic: "ٱلْغَـٰبِرِينَ", transliteration: "l-ghābirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who remain behind", ur: "جو لوگ remain behind" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  61: {
    text: "فَلَمَّا جَآءَ ءَالَ لُوطٍ ٱلْمُرْسَلُونَ",
    translation: {
      en: "",
      ur: "پھر جب فرشتے لوط کے گھر گئے",
    },
    words: [
      { id: '15:61:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '15:61:2', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '15:61:3', arabic: "ءَالَ", transliteration: "āla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to the) family", ur: "(کو the) family" } },
      { id: '15:61:4', arabic: "لُوطٍ", transliteration: "lūṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Lut", ur: "(of) Lut" } },
      { id: '15:61:5', arabic: "ٱلْمُرْسَلُونَ", transliteration: "l-mur'salūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the messengers", ur: "the messengers" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  62: {
    text: "قَالَ إِنَّكُمْ قَوْمٌۭ مُّنكَرُونَ",
    translation: {
      en: "",
      ur: "تو لوط نے کہا تم تو ناآشنا سے لوگ ہو",
    },
    words: [
      { id: '15:62:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:62:2', arabic: "إِنَّكُمْ", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '15:62:3', arabic: "قَوْمٌۭ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '15:62:4', arabic: "مُّنكَرُونَ", transliteration: "munkarūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unknown", ur: "unknown" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  63: {
    text: "قَالُوا۟ بَلْ جِئْنَـٰكَ بِمَا كَانُوا۟ فِيهِ يَمْتَرُونَ",
    translation: {
      en: "",
      ur: "وہ بولے کہ نہیں بلکہ ہم آپ کے پاس وہ چیز لے کر آئے ہیں جس میں لوگ شک کرتے تھے",
    },
    words: [
      { id: '15:63:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '15:63:2', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '15:63:3', arabic: "جِئْنَـٰكَ", transliteration: "ji'nāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have come to you", ur: "ہم have come کو تم" } },
      { id: '15:63:4', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with what", ur: "ساتھ کیا" } },
      { id: '15:63:5', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '15:63:6', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '15:63:7', arabic: "يَمْتَرُونَ", transliteration: "yamtarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disputing", ur: "disputing" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  64: {
    text: "وَأَتَيْنَـٰكَ بِٱلْحَقِّ وَإِنَّا لَصَـٰدِقُونَ",
    translation: {
      en: "",
      ur: "اور ہم آپ کے پاس یقینی بات لے کر آئے ہیں اور ہم سچ کہتے ہیں",
    },
    words: [
      { id: '15:64:1', arabic: "وَأَتَيْنَـٰكَ", transliteration: "wa-ataynāka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And we have come to you", ur: "اور ہم have come کو تم" } },
      { id: '15:64:2', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the truth", ur: "ساتھ the سچ" } },
      { id: '15:64:3', arabic: "وَإِنَّا", transliteration: "wa-innā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, we", ur: "اور بیشک, ہم" } },
      { id: '15:64:4', arabic: "لَصَـٰدِقُونَ", transliteration: "laṣādiqūna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "surely (are) truthful", ur: "یقیناً (are) truthful" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  65: {
    text: "فَأَسْرِ بِأَهْلِكَ بِقِطْعٍۢ مِّنَ ٱلَّيْلِ وَٱتَّبِعْ أَدْبَـٰرَهُمْ وَلَا يَلْتَفِتْ مِنكُمْ أَحَدٌۭ وَٱمْضُوا۟ حَيْثُ تُؤْمَرُونَ",
    translation: {
      en: "",
      ur: "تو آپ کچھ رات رہے سے اپنے گھر والوں کو لے نکلیں اور خود ان کے پیچھے چلیں اور اور آپ میں سے کوئی شخص مڑ کر نہ دیکھے۔ اور جہاں آپ کو حکم ہو وہاں چلے جایئے",
    },
    words: [
      { id: '15:65:1', arabic: "فَأَسْرِ", transliteration: "fa-asri", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So travel", ur: "So travel" } },
      { id: '15:65:2', arabic: "بِأَهْلِكَ", transliteration: "bi-ahlika", pos: ['P+N'], posLabel: 'P+N', root: "أ ه ل", meaning: { en: "with your family", ur: "ساتھ your family" } },
      { id: '15:65:3', arabic: "بِقِطْعٍۢ", transliteration: "biqiṭ'ʿin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in a portion", ur: "میں a portion" } },
      { id: '15:65:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:65:5', arabic: "ٱلَّيْلِ", transliteration: "al-layli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '15:65:6', arabic: "وَٱتَّبِعْ", transliteration: "wa-ittabiʿ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and follow", ur: "اور follow" } },
      { id: '15:65:7', arabic: "أَدْبَـٰرَهُمْ", transliteration: "adbārahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their backs", ur: "their backs" } },
      { id: '15:65:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '15:65:9', arabic: "يَلْتَفِتْ", transliteration: "yaltafit", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "let look back", ur: "let look back" } },
      { id: '15:65:10', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '15:65:11', arabic: "أَحَدٌۭ", transliteration: "aḥadun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "anyone", ur: "anyone" } },
      { id: '15:65:12', arabic: "وَٱمْضُوا۟", transliteration: "wa-im'ḍū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and go on", ur: "اور go پر" } },
      { id: '15:65:13', arabic: "حَيْثُ", transliteration: "ḥaythu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "where", ur: "where" } },
      { id: '15:65:14', arabic: "تُؤْمَرُونَ", transliteration: "tu'marūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are ordered", ur: "تم are ordered" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  66: {
    text: "وَقَضَيْنَآ إِلَيْهِ ذَٰلِكَ ٱلْأَمْرَ أَنَّ دَابِرَ هَـٰٓؤُلَآءِ مَقْطُوعٌۭ مُّصْبِحِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے لوط کی طرف وحی بھیجی کہ ان لوگوں کی جڑ صبح ہوتے ہوتے کاٹ دی جائے گی",
    },
    words: [
      { id: '15:66:1', arabic: "وَقَضَيْنَآ", transliteration: "waqaḍaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We conveyed", ur: "اور ہم conveyed" } },
      { id: '15:66:2', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '15:66:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '15:66:4', arabic: "ٱلْأَمْرَ", transliteration: "l-amra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the matter", ur: "the matter" } },
      { id: '15:66:5', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '15:66:6', arabic: "دَابِرَ", transliteration: "dābira", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) root", ur: "(the) root" } },
      { id: '15:66:7', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) these", ur: "(of) these" } },
      { id: '15:66:8', arabic: "مَقْطُوعٌۭ", transliteration: "maqṭūʿun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "would be cut off", ur: "would be cut off" } },
      { id: '15:66:9', arabic: "مُّصْبِحِينَ", transliteration: "muṣ'biḥīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(by) early morning", ur: "(by) early morning" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  67: {
    text: "وَجَآءَ أَهْلُ ٱلْمَدِينَةِ يَسْتَبْشِرُونَ",
    translation: {
      en: "",
      ur: "اور اہل شہر (لوط کے پاس) خوش خوش (دوڑے) آئے",
    },
    words: [
      { id: '15:67:1', arabic: "وَجَآءَ", transliteration: "wajāa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And came", ur: "اور came" } },
      { id: '15:67:2', arabic: "أَهْلُ", transliteration: "ahlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '15:67:3', arabic: "ٱلْمَدِينَةِ", transliteration: "l-madīnati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the city", ur: "(of) the city" } },
      { id: '15:67:4', arabic: "يَسْتَبْشِرُونَ", transliteration: "yastabshirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "rejoicing", ur: "rejoicing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  68: {
    text: "قَالَ إِنَّ هَـٰٓؤُلَآءِ ضَيْفِى فَلَا تَفْضَحُونِ",
    translation: {
      en: "",
      ur: "(لوط نے) کہا کہ یہ میرے مہمان ہیں (کہیں ان کے بارے میں) مجھے رسوا نہ کرنا",
    },
    words: [
      { id: '15:68:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:68:2', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '15:68:3', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '15:68:4', arabic: "ضَيْفِى", transliteration: "ḍayfī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) my guests", ur: "(are) my guests" } },
      { id: '15:68:5', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (do) not", ur: "so (do) نہیں" } },
      { id: '15:68:6', arabic: "تَفْضَحُونِ", transliteration: "tafḍaḥūni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "shame me", ur: "shame me" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  69: {
    text: "وَٱتَّقُوا۟ ٱللَّهَ وَلَا تُخْزُونِ",
    translation: {
      en: "",
      ur: "اور خدا سے ڈرو۔ اور میری بےآبروئی نہ کیجو",
    },
    words: [
      { id: '15:69:1', arabic: "وَٱتَّقُوا۟", transliteration: "wa-ittaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And fear", ur: "اور ڈرنا" } },
      { id: '15:69:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '15:69:3', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '15:69:4', arabic: "تُخْزُونِ", transliteration: "tukh'zūni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disgrace me", ur: "disgrace me" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  70: {
    text: "قَالُوٓا۟ أَوَلَمْ نَنْهَكَ عَنِ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "وہ بولے کیا ہم نے تم کو سارے جہان (کی حمایت وطرفداری) سے منع نہیں کیا",
    },
    words: [
      { id: '15:70:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '15:70:2', arabic: "أَوَلَمْ", transliteration: "awalam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did not", ur: "Did نہیں" } },
      { id: '15:70:3', arabic: "نَنْهَكَ", transliteration: "nanhaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we forbid you", ur: "ہم forbid تم" } },
      { id: '15:70:4', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:70:5', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the world", ur: "the دنیا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  71: {
    text: "قَالَ هَـٰٓؤُلَآءِ بَنَاتِىٓ إِن كُنتُمْ فَـٰعِلِينَ",
    translation: {
      en: "",
      ur: "(انہوں نے) کہا کہ اگر تمہیں کرنا ہی ہے تو یہ میری (قوم کی) لڑکیاں ہیں (ان سے شادی کرلو)",
    },
    words: [
      { id: '15:71:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '15:71:2', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "These", ur: "These" } },
      { id: '15:71:3', arabic: "بَنَاتِىٓ", transliteration: "banātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) my daughters", ur: "(are) my daughters" } },
      { id: '15:71:4', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '15:71:5', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you would be", ur: "تم would be" } },
      { id: '15:71:6', arabic: "فَـٰعِلِينَ", transliteration: "fāʿilīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "doers", ur: "doers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  72: {
    text: "لَعَمْرُكَ إِنَّهُمْ لَفِى سَكْرَتِهِمْ يَعْمَهُونَ",
    translation: {
      en: "",
      ur: "(اے محمد) تمہاری جان کی قسم وہ اپنی مستی میں مدہوش (ہو رہے) تھے",
    },
    words: [
      { id: '15:72:1', arabic: "لَعَمْرُكَ", transliteration: "laʿamruka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "By your life", ur: "By your زندگی" } },
      { id: '15:72:2', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '15:72:3', arabic: "لَفِى", transliteration: "lafī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were in", ur: "were میں" } },
      { id: '15:72:4', arabic: "سَكْرَتِهِمْ", transliteration: "sakratihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their intoxication", ur: "their intoxication" } },
      { id: '15:72:5', arabic: "يَعْمَهُونَ", transliteration: "yaʿmahūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "wandering blindly", ur: "wandering blindly" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  73: {
    text: "فَأَخَذَتْهُمُ ٱلصَّيْحَةُ مُشْرِقِينَ",
    translation: {
      en: "",
      ur: "سو ان کو سورج نکلتے نکلتے چنگھاڑ نے آپکڑا",
    },
    words: [
      { id: '15:73:1', arabic: "فَأَخَذَتْهُمُ", transliteration: "fa-akhadhathumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So, seized them", ur: "So, seized them" } },
      { id: '15:73:2', arabic: "ٱلصَّيْحَةُ", transliteration: "l-ṣayḥatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the awful cry", ur: "the awful cry" } },
      { id: '15:73:3', arabic: "مُشْرِقِينَ", transliteration: "mush'riqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "at sunrise", ur: "at sunrise" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  74: {
    text: "فَجَعَلْنَا عَـٰلِيَهَا سَافِلَهَا وَأَمْطَرْنَا عَلَيْهِمْ حِجَارَةًۭ مِّن سِجِّيلٍ",
    translation: {
      en: "",
      ur: "اور ہم نے اس شہر کو (الٹ کر) نیچے اوپر کردیا۔ اور ان پر کھنگر کی پتھریاں برسائیں",
    },
    words: [
      { id: '15:74:1', arabic: "فَجَعَلْنَا", transliteration: "fajaʿalnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ج ع ل", meaning: { en: "And We made", ur: "اور ہم made" } },
      { id: '15:74:2', arabic: "عَـٰلِيَهَا", transliteration: "ʿāliyahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its highest (part)", ur: "its highest (part)" } },
      { id: '15:74:3', arabic: "سَافِلَهَا", transliteration: "sāfilahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its lowest", ur: "its lowest" } },
      { id: '15:74:4', arabic: "وَأَمْطَرْنَا", transliteration: "wa-amṭarnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We rained", ur: "اور ہم rained" } },
      { id: '15:74:5', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '15:74:6', arabic: "حِجَارَةًۭ", transliteration: "ḥijāratan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "stones", ur: "stones" } },
      { id: '15:74:7', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:74:8', arabic: "سِجِّيلٍ", transliteration: "sijjīlin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "baked clay", ur: "baked clay" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  75: {
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّلْمُتَوَسِّمِينَ",
    translation: {
      en: "",
      ur: "بےشک اس (قصے) میں اہل فراست کے لیے نشانی ہے",
    },
    words: [
      { id: '15:75:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '15:75:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '15:75:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '15:75:4', arabic: "لَـَٔايَـٰتٍۢ", transliteration: "laāyātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the Signs", ur: "(are) the نشانیاں" } },
      { id: '15:75:5', arabic: "لِّلْمُتَوَسِّمِينَ", transliteration: "lil'mutawassimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for those who discern", ur: "for جو لوگ discern" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  76: {
    text: "وَإِنَّهَا لَبِسَبِيلٍۢ مُّقِيمٍ",
    translation: {
      en: "",
      ur: "اور وہ (شہر) اب تک سیدھے رستے پر (موجود) ہے",
    },
    words: [
      { id: '15:76:1', arabic: "وَإِنَّهَا", transliteration: "wa-innahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, it", ur: "اور بیشک, it" } },
      { id: '15:76:2', arabic: "لَبِسَبِيلٍۢ", transliteration: "labisabīlin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) on a road", ur: "(is) پر a road" } },
      { id: '15:76:3', arabic: "مُّقِيمٍ", transliteration: "muqīmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "established", ur: "established" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  77: {
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ لِّلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "بےشک اس میں ایمان لانے والوں کے لیے نشانی ہے",
    },
    words: [
      { id: '15:77:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '15:77:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '15:77:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '15:77:4', arabic: "لَـَٔايَةًۭ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely (is) a Sign", ur: "یقیناً (is) a نشانی" } },
      { id: '15:77:5', arabic: "لِّلْمُؤْمِنِينَ", transliteration: "lil'mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for the believers", ur: "for the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  78: {
    text: "وَإِن كَانَ أَصْحَـٰبُ ٱلْأَيْكَةِ لَظَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور بَن کے رہنے والے (یعنی قوم شعیب کے لوگ) بھی گنہگار تھے",
    },
    words: [
      { id: '15:78:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And were", ur: "اور were" } },
      { id: '15:78:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "And were", ur: "اور were" } },
      { id: '15:78:3', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) companions", ur: "(the) companions" } },
      { id: '15:78:4', arabic: "ٱلْأَيْكَةِ", transliteration: "l-aykati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the wood", ur: "(of) the wood" } },
      { id: '15:78:5', arabic: "لَظَـٰلِمِينَ", transliteration: "laẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely wrongdoers", ur: "یقیناً wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  79: {
    text: "فَٱنتَقَمْنَا مِنْهُمْ وَإِنَّهُمَا لَبِإِمَامٍۢ مُّبِينٍۢ",
    translation: {
      en: "",
      ur: "تو ہم نے ان سے بھی بدلہ لیا۔ اور یہ دونوں شہر کھلے رستے پر (موجود) ہیں",
    },
    words: [
      { id: '15:79:1', arabic: "فَٱنتَقَمْنَا", transliteration: "fa-intaqamnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We took retribution", ur: "So ہم took retribution" } },
      { id: '15:79:2', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '15:79:3', arabic: "وَإِنَّهُمَا", transliteration: "wa-innahumā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, they both", ur: "اور بیشک, وہ لوگ both" } },
      { id: '15:79:4', arabic: "لَبِإِمَامٍۢ", transliteration: "labi-imāmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) on a highway", ur: "(were) پر a highway" } },
      { id: '15:79:5', arabic: "مُّبِينٍۢ", transliteration: "mubīnin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },
  80: {
    text: "وَلَقَدْ كَذَّبَ أَصْحَـٰبُ ٱلْحِجْرِ ٱلْمُرْسَلِينَ",
    translation: {
      en: "",
      ur: "اور (وادی) حجر کے رہنے والوں نے بھی پیغمبروں کی تکذیب کی",
    },
    words: [
      { id: '15:80:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '15:80:2', arabic: "كَذَّبَ", transliteration: "kadhaba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '15:80:3', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) companions", ur: "(the) companions" } },
      { id: '15:80:4', arabic: "ٱلْحِجْرِ", transliteration: "l-ḥij'ri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Rocky Tract", ur: "(of) the Rocky Tract" } },
      { id: '15:80:5', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  81: {
    text: "وَءَاتَيْنَـٰهُمْ ءَايَـٰتِنَا فَكَانُوا۟ عَنْهَا مُعْرِضِينَ",
    translation: {
      en: "",
      ur: "ہم نے ان کو اپنی نشانیاں دیں اور وہ ان سے منہ پھرتے رہے",
    },
    words: [
      { id: '15:81:1', arabic: "وَءَاتَيْنَـٰهُمْ", transliteration: "waātaynāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We gave them", ur: "اور ہم gave them" } },
      { id: '15:81:2', arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '15:81:3', arabic: "فَكَانُوا۟", transliteration: "fakānū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ك و ن", meaning: { en: "but they were", ur: "لیکن وہ لوگ were" } },
      { id: '15:81:4', arabic: "عَنْهَا", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '15:81:5', arabic: "مُعْرِضِينَ", transliteration: "muʿ'riḍīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "turning away", ur: "turning away" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  82: {
    text: "وَكَانُوا۟ يَنْحِتُونَ مِنَ ٱلْجِبَالِ بُيُوتًا ءَامِنِينَ",
    translation: {
      en: "",
      ur: "اور وہ پہاڑوں کو تراش تراش کر گھر بناتے تھے (کہ) امن (واطمینان) سے رہیں گے",
    },
    words: [
      { id: '15:82:1', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And they used (to)", ur: "اور وہ لوگ used (کو)" } },
      { id: '15:82:2', arabic: "يَنْحِتُونَ", transliteration: "yanḥitūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "carve", ur: "carve" } },
      { id: '15:82:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:82:4', arabic: "ٱلْجِبَالِ", transliteration: "l-jibāli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mountains", ur: "the mountains" } },
      { id: '15:82:5', arabic: "بُيُوتًا", transliteration: "buyūtan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "houses", ur: "houses" } },
      { id: '15:82:6', arabic: "ءَامِنِينَ", transliteration: "āminīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "secure", ur: "secure" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  83: {
    text: "فَأَخَذَتْهُمُ ٱلصَّيْحَةُ مُصْبِحِينَ",
    translation: {
      en: "",
      ur: "تو چیخ نے ان کو صبح ہوتے ہوتے آپکڑا",
    },
    words: [
      { id: '15:83:1', arabic: "فَأَخَذَتْهُمُ", transliteration: "fa-akhadhathumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But seized them", ur: "لیکن seized them" } },
      { id: '15:83:2', arabic: "ٱلصَّيْحَةُ", transliteration: "l-ṣayḥatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the awful cry", ur: "the awful cry" } },
      { id: '15:83:3', arabic: "مُصْبِحِينَ", transliteration: "muṣ'biḥīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(at) early morning", ur: "(at) early morning" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  84: {
    text: "فَمَآ أَغْنَىٰ عَنْهُم مَّا كَانُوا۟ يَكْسِبُونَ",
    translation: {
      en: "",
      ur: "اور جو کام وہ کرتے تھے وہ ان کے کچھ بھی کام نہ آئے",
    },
    words: [
      { id: '15:84:1', arabic: "فَمَآ", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '15:84:2', arabic: "أَغْنَىٰ", transliteration: "aghnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "availed", ur: "availed" } },
      { id: '15:84:3', arabic: "عَنْهُم", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "them", ur: "them" } },
      { id: '15:84:4', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '15:84:5', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used (to)", ur: "وہ لوگ used (کو)" } },
      { id: '15:84:6', arabic: "يَكْسِبُونَ", transliteration: "yaksibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "earn", ur: "earn" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  85: {
    text: "وَمَا خَلَقْنَا ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ وَمَا بَيْنَهُمَآ إِلَّا بِٱلْحَقِّ ۗ وَإِنَّ ٱلسَّاعَةَ لَـَٔاتِيَةٌۭ ۖ فَٱصْفَحِ ٱلصَّفْحَ ٱلْجَمِيلَ",
    translation: {
      en: "",
      ur: "اور ہم نے آسمانوں اور زمین کو اور جو (مخلوقات) ان میں ہے اس کو تدبیر کے ساتھ پیدا کیا ہے۔ اور قیامت تو ضرور آکر رہے گی تو تم (ان لوگوں سے) اچھی طرح سے درگزر کرو",
    },
    words: [
      { id: '15:85:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '15:85:2', arabic: "خَلَقْنَا", transliteration: "khalaqnā", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "We created", ur: "ہم پیدا کیا" } },
      { id: '15:85:3', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '15:85:4', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '15:85:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '15:85:6', arabic: "بَيْنَهُمَآ", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) between them", ur: "(is) درمیان them" } },
      { id: '15:85:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '15:85:8', arabic: "بِٱلْحَقِّ ۗ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in truth", ur: "میں سچ" } },
      { id: '15:85:9', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '15:85:10', arabic: "ٱلسَّاعَةَ", transliteration: "l-sāʿata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hour", ur: "the Hour" } },
      { id: '15:85:11', arabic: "لَـَٔاتِيَةٌۭ ۖ", transliteration: "laātiyatun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) surely coming", ur: "(is) یقیناً coming" } },
      { id: '15:85:12', arabic: "فَٱصْفَحِ", transliteration: "fa-iṣ'faḥi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So overlook", ur: "So overlook" } },
      { id: '15:85:13', arabic: "ٱلصَّفْحَ", transliteration: "l-ṣafḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) forgiveness", ur: "(ساتھ) مغفرت" } },
      { id: '15:85:14', arabic: "ٱلْجَمِيلَ", transliteration: "l-jamīla", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "gracious", ur: "gracious" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  86: {
    text: "إِنَّ رَبَّكَ هُوَ ٱلْخَلَّـٰقُ ٱلْعَلِيمُ",
    translation: {
      en: "",
      ur: "کچھ شک نہیں کہ تمہارا پروردگار (سب کچھ) پیدا کرنے والا (اور) جاننے والا ہے",
    },
    words: [
      { id: '15:86:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '15:86:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '15:86:3', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '15:86:4', arabic: "ٱلْخَلَّـٰقُ", transliteration: "l-khalāqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Creator", ur: "(is) the Creator" } },
      { id: '15:86:5', arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Knower", ur: "the سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },
  87: {
    text: "وَلَقَدْ ءَاتَيْنَـٰكَ سَبْعًۭا مِّنَ ٱلْمَثَانِى وَٱلْقُرْءَانَ ٱلْعَظِيمَ",
    translation: {
      en: "",
      ur: "اور ہم نے تم کو سات (آیتیں) جو (نماز میں) دہرا کر پڑھی جاتی ہیں (یعنی سورہٴ الحمد) اور عظمت والا قرآن عطا فرمایا ہے",
    },
    words: [
      { id: '15:87:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '15:87:2', arabic: "ءَاتَيْنَـٰكَ", transliteration: "ātaynāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have given you", ur: "ہم have given تم" } },
      { id: '15:87:3', arabic: "سَبْعًۭا", transliteration: "sabʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "seven", ur: "seven" } },
      { id: '15:87:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:87:5', arabic: "ٱلْمَثَانِى", transliteration: "l-mathānī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the oft-repeated", ur: "the oft-repeated" } },
      { id: '15:87:6', arabic: "وَٱلْقُرْءَانَ", transliteration: "wal-qur'āna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Quran", ur: "اور the Quran" } },
      { id: '15:87:7', arabic: "ٱلْعَظِيمَ", transliteration: "l-ʿaẓīma", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Great", ur: "Great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  88: {
    text: "لَا تَمُدَّنَّ عَيْنَيْكَ إِلَىٰ مَا مَتَّعْنَا بِهِۦٓ أَزْوَٰجًۭا مِّنْهُمْ وَلَا تَحْزَنْ عَلَيْهِمْ وَٱخْفِضْ جَنَاحَكَ لِلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے کفار کی کئی جماعتوں کو جو (فوائد دنیاوی سے) متمتع کیا ہے تم ان کی طرف (رغبت سے) آنکھ اٹھا کر نہ دیکھنا اور نہ ان کے حال پر تاسف کرنا اور مومنوں سے خاطر اور تواضع سے پیش آنا",
    },
    words: [
      { id: '15:88:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '15:88:2', arabic: "تَمُدَّنَّ", transliteration: "tamuddanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "extend", ur: "extend" } },
      { id: '15:88:3', arabic: "عَيْنَيْكَ", transliteration: "ʿaynayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your eyes", ur: "your eyes" } },
      { id: '15:88:4', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "towards", ur: "towards" } },
      { id: '15:88:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '15:88:6', arabic: "مَتَّعْنَا", transliteration: "mattaʿnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have bestowed", ur: "ہم have bestowed" } },
      { id: '15:88:7', arabic: "بِهِۦٓ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '15:88:8', arabic: "أَزْوَٰجًۭا", transliteration: "azwājan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) categories", ur: "(کو) categories" } },
      { id: '15:88:9', arabic: "مِّنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '15:88:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '15:88:11', arabic: "تَحْزَنْ", transliteration: "taḥzan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "grieve", ur: "grieve" } },
      { id: '15:88:12', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '15:88:13', arabic: "وَٱخْفِضْ", transliteration: "wa-ikh'fiḍ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And lower", ur: "اور lower" } },
      { id: '15:88:14', arabic: "جَنَاحَكَ", transliteration: "janāḥaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "your wing", ur: "your wing" } },
      { id: '15:88:15', arabic: "لِلْمُؤْمِنِينَ", transliteration: "lil'mu'minīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the believers", ur: "کو the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  89: {
    text: "وَقُلْ إِنِّىٓ أَنَا ٱلنَّذِيرُ ٱلْمُبِينُ",
    translation: {
      en: "",
      ur: "اور کہہ دو کہ میں تو علانیہ ڈر سنانے والا ہوں",
    },
    words: [
      { id: '15:89:1', arabic: "وَقُلْ", transliteration: "waqul", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And say", ur: "اور کہو" } },
      { id: '15:89:2', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '15:89:3', arabic: "أَنَا", transliteration: "anā", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[I] am", ur: "[میں] am" } },
      { id: '15:89:4', arabic: "ٱلنَّذِيرُ", transliteration: "l-nadhīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a warner", ur: "a warner" } },
      { id: '15:89:5', arabic: "ٱلْمُبِينُ", transliteration: "l-mubīnu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },
  90: {
    text: "كَمَآ أَنزَلْنَا عَلَى ٱلْمُقْتَسِمِينَ",
    translation: {
      en: "",
      ur: "(اور ہم ان کفار پر اسی طرح عذاب نازل کریں گے) جس طرح ان لوگوں پر نازل کیا جنہوں نے تقسیم کردیا",
    },
    words: [
      { id: '15:90:1', arabic: "كَمَآ", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "As", ur: "As" } },
      { id: '15:90:2', arabic: "أَنزَلْنَا", transliteration: "anzalnā", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "We sent down", ur: "ہم sent down" } },
      { id: '15:90:3', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '15:90:4', arabic: "ٱلْمُقْتَسِمِينَ", transliteration: "l-muq'tasimīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those who divided", ur: "جو لوگ divided" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  91: {
    text: "ٱلَّذِينَ جَعَلُوا۟ ٱلْقُرْءَانَ عِضِينَ",
    translation: {
      en: "",
      ur: "یعنی قرآن کو (کچھ ماننے اور کچھ نہ ماننے سے) ٹکڑے ٹکڑے کر ڈالا",
    },
    words: [
      { id: '15:91:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '15:91:2', arabic: "جَعَلُوا۟", transliteration: "jaʿalū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "have made", ur: "have made" } },
      { id: '15:91:3', arabic: "ٱلْقُرْءَانَ", transliteration: "l-qur'āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Quran", ur: "the Quran" } },
      { id: '15:91:4', arabic: "عِضِينَ", transliteration: "ʿiḍīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) parts", ur: "(میں) parts" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  92: {
    text: "فَوَرَبِّكَ لَنَسْـَٔلَنَّهُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "تمہارے پروردگار کی قسم ہم ان سے ضرور پرسش کریں گے",
    },
    words: [
      { id: '15:92:1', arabic: "فَوَرَبِّكَ", transliteration: "fawarabbika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So by your Lord", ur: "So by your رب" } },
      { id: '15:92:2', arabic: "لَنَسْـَٔلَنَّهُمْ", transliteration: "lanasalannahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely We will question them", ur: "یقیناً ہم will question them" } },
      { id: '15:92:3', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  93: {
    text: "عَمَّا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "ان کاموں کی جو وہ کرتے رہے",
    },
    words: [
      { id: '15:93:1', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "About what", ur: "About کیا" } },
      { id: '15:93:2', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used (to)", ur: "وہ لوگ used (کو)" } },
      { id: '15:93:3', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  94: {
    text: "فَٱصْدَعْ بِمَا تُؤْمَرُ وَأَعْرِضْ عَنِ ٱلْمُشْرِكِينَ",
    translation: {
      en: "",
      ur: "پس جو حکم تم کو (خدا کی طرف سے) ملا ہے وہ (لوگوں کو) سنا دو اور مشرکوں کا (ذرا) خیال نہ کرو",
    },
    words: [
      { id: '15:94:1', arabic: "فَٱصْدَعْ", transliteration: "fa-iṣ'daʿ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So proclaim", ur: "So proclaim" } },
      { id: '15:94:2', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '15:94:3', arabic: "تُؤْمَرُ", transliteration: "tu'maru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are ordered", ur: "تم are ordered" } },
      { id: '15:94:4', arabic: "وَأَعْرِضْ", transliteration: "wa-aʿriḍ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and turn away", ur: "اور turn away" } },
      { id: '15:94:5', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '15:94:6', arabic: "ٱلْمُشْرِكِينَ", transliteration: "l-mush'rikīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the polytheists", ur: "the polytheists" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  95: {
    text: "إِنَّا كَفَيْنَـٰكَ ٱلْمُسْتَهْزِءِينَ",
    translation: {
      en: "",
      ur: "ہم تمہیں ان لوگوں (کے شر) سے بچانے کے لیے جو تم سے استہزاء کرتے ہیں کافی ہیں",
    },
    words: [
      { id: '15:95:1', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, We", ur: "بیشک, ہم" } },
      { id: '15:95:2', arabic: "كَفَيْنَـٰكَ", transliteration: "kafaynāka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[We] are sufficient for you", ur: "[ہم] are sufficient for تم" } },
      { id: '15:95:3', arabic: "ٱلْمُسْتَهْزِءِينَ", transliteration: "l-mus'tahziīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(against) the mockers", ur: "(against) the mockers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  96: {
    text: "ٱلَّذِينَ يَجْعَلُونَ مَعَ ٱللَّهِ إِلَـٰهًا ءَاخَرَ ۚ فَسَوْفَ يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "جو خدا کے ساتھ معبود قرار دیتے ہیں۔ سو عنقریب ان کو (ان باتوں کا انجام) معلوم ہوجائے گا",
    },
    words: [
      { id: '15:96:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '15:96:2', arabic: "يَجْعَلُونَ", transliteration: "yajʿalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "set up", ur: "set up" } },
      { id: '15:96:3', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '15:96:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '15:96:5', arabic: "إِلَـٰهًا", transliteration: "ilāhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '15:96:6', arabic: "ءَاخَرَ ۚ", transliteration: "ākhara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "another", ur: "another" } },
      { id: '15:96:7', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But soon", ur: "لیکن soon" } },
      { id: '15:96:8', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "they will come to know", ur: "وہ لوگ will come کو جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  97: {
    text: "وَلَقَدْ نَعْلَمُ أَنَّكَ يَضِيقُ صَدْرُكَ بِمَا يَقُولُونَ",
    translation: {
      en: "",
      ur: "اور ہم جانتے ہیں کہ ان باتوں سے تمہارا دل تنگ ہوتا ہے",
    },
    words: [
      { id: '15:97:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '15:97:2', arabic: "نَعْلَمُ", transliteration: "naʿlamu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We know", ur: "ہم جاننا" } },
      { id: '15:97:3', arabic: "أَنَّكَ", transliteration: "annaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that [you]", ur: "وہ [تم]" } },
      { id: '15:97:4', arabic: "يَضِيقُ", transliteration: "yaḍīqu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) straitened", ur: "(is) straitened" } },
      { id: '15:97:5', arabic: "صَدْرُكَ", transliteration: "ṣadruka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your breast", ur: "your breast" } },
      { id: '15:97:6', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by what", ur: "by کیا" } },
      { id: '15:97:7', arabic: "يَقُولُونَ", transliteration: "yaqūlūna", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  98: {
    text: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَكُن مِّنَ ٱلسَّـٰجِدِينَ",
    translation: {
      en: "",
      ur: "تو تم اپنے پروردگار کی تسبیح کہتے اور (اس کی) خوبیاں بیان کرتے رہو اور سجدہ کرنے والوں میں داخل رہو",
    },
    words: [
      { id: '15:98:1', arabic: "فَسَبِّحْ", transliteration: "fasabbiḥ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So glorify", ur: "So glorify" } },
      { id: '15:98:2', arabic: "بِحَمْدِ", transliteration: "biḥamdi", pos: ['P+N'], posLabel: 'P+N', root: "ح م د", meaning: { en: "with the praise", ur: "ساتھ the praise" } },
      { id: '15:98:3', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '15:98:4', arabic: "وَكُن", transliteration: "wakun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and be", ur: "اور be" } },
      { id: '15:98:5', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '15:98:6', arabic: "ٱلسَّـٰجِدِينَ", transliteration: "l-sājidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who prostrate", ur: "جو لوگ prostrate" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  99: {
    text: "وَٱعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ ٱلْيَقِينُ",
    translation: {
      en: "",
      ur: "اور اپنے پروردگار کی عبادت کئے جاؤ یہاں تک کہ تمہاری موت (کا وقت) آجائے",
    },
    words: [
      { id: '15:99:1', arabic: "وَٱعْبُدْ", transliteration: "wa-uʿ'bud", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And worship", ur: "اور عبادت" } },
      { id: '15:99:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '15:99:3', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '15:99:4', arabic: "يَأْتِيَكَ", transliteration: "yatiyaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes to you", ur: "comes کو تم" } },
      { id: '15:99:5', arabic: "ٱلْيَقِينُ", transliteration: "l-yaqīnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the certainty", ur: "the certainty" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
};

export default SURAH_015_TREEBANK;
export { SURAH_015_TREEBANK as TREEBANK_DATA };
