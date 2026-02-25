/**
 * Surah Ash-Shu'ara (26) - Treebank Data (First 10 Ayahs)
 * The Poets - 227 Ayahs, Makkan
 *
 * Theme: Stories of prophets and their struggles with disbelieving nations
 * Special: Named after poets mentioned in verses 224-227
 * Contains: Stories of Musa, Ibrahim, Nuh, Hud, Salih, Lut, Shu'ayb
 */

const SURAH_26_TREEBANK = {
  1: { // Ayah 1: طسم
    text: 'طسم',
    translation: {
      en: 'Ta, Seen, Meem.',
      ur: 'طا، سین، میم',
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        id: '26:1:1',
        position: 1,
        arabic: 'طسم',
        transliteration: 'Ta-Seen-Meem',
        pos: ['INL'],
        posLabel: 'INL',
        root: null,
        lemma: null,
        meaning: {
          en: 'Ta Seen Meem (mysterious letters)',
          ur: 'طا سین میم (حروف مقطعات)',
        },
        grammarRole: 'muqattaat',
        case: null,
        grammarExplanations: {
          en: 'Huruf Muqatta\'at - disjoined letters whose meaning is known only to Allah. These particular letters appear in surahs 26, 27, and 28.',
          ur: 'حروف مقطعات - جدا جدا حروف جن کا مطلب صرف اللہ کو معلوم ہے۔ یہ حروف سورہ ۲۶، ۲۷، اور ۲۸ میں آتے ہیں۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Attention Grabber', ur: 'توجہ مبذول کرانے والے' },
            explanation: {
              en: 'These letters challenge the Arabs - the Quran uses their own alphabet yet they cannot produce anything like it.',
              ur: 'یہ حروف عربوں کو چیلنج کرتے ہیں - قرآن انہی کے حروف استعمال کرتا ہے مگر وہ ایسا کچھ نہیں بنا سکتے۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'isolated-letters',
      components: [
        { type: 'huruf-muqattaat', word: 'طسم', role: 'opening mystery' },
      ],
      explanation: {
        en: 'Mysterious letters - Allah alone knows their full meaning',
        ur: 'حروف مقطعات - ان کا مکمل مطلب صرف اللہ جانتا ہے',
      },
    },
  },

  2: { // Ayah 2: تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ
    text: 'تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ',
    translation: {
      en: 'These are the verses of the clear Book.',
      ur: 'یہ واضح کتاب کی آیتیں ہیں',
    },
    words: [
      {
        id: '26:2:1',
        position: 1,
        arabic: 'تِلْكَ',
        transliteration: 'tilka',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'These / Those',
          ur: 'یہ / وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative pronoun for far (اسم إشارة للبعيد) - used for emphasis and reverence.',
          ur: 'اسم اشارہ للبعید - تعظیم اور زور کے لیے استعمال۔',
        },
      },
      {
        id: '26:2:2',
        position: 2,
        arabic: 'آيَاتُ',
        transliteration: 'aayaatu',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ي ي',
        lemma: 'آية',
        meaning: {
          en: 'Verses / Signs',
          ur: 'آیتیں / نشانیاں',
        },
        grammarRole: 'khabar',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Predicate (خبر) - nominative. Also مضاف (first part of construct).',
          ur: 'خبر - مرفوع۔ مضاف بھی ہے۔',
        },
      },
      {
        id: '26:2:3',
        position: 3,
        arabic: 'الْكِتَابِ',
        transliteration: 'al-kitaabi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        lemma: 'كِتَاب',
        meaning: {
          en: 'The Book (Quran)',
          ur: 'کتاب (قرآن)',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) - possessive: "verses OF the Book".',
          ur: 'مضاف الیہ - مجرور: "کتاب کی آیتیں"۔',
        },
      },
      {
        id: '26:2:4',
        position: 4,
        arabic: 'الْمُبِينِ',
        transliteration: 'al-mubeeni',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ب ي ن',
        lemma: 'مُبِين',
        pattern: 'مُفْعِل',
        meaning: {
          en: 'The clear / manifest',
          ur: 'واضح / روشن',
        },
        grammarRole: 'sifa',
        case: 'majroor',
        grammarExplanations: {
          en: 'Adjective (صفة) - describing الكتاب, genitive to match.',
          ur: 'صفت - الکتاب کی صفت، مجرور موصوف کے مطابق۔',
        },
        advanced: {
          rootFamily: {
            root: 'ب ي ن',
            meaning: { en: 'to be clear, manifest, evident', ur: 'واضح ہونا، ظاہر ہونا' },
            words: [
              { word: 'بَيَّنَ', meaning: { en: 'he made clear', ur: 'اس نے واضح کیا' } },
              { word: 'بَيِّنَة', meaning: { en: 'clear proof', ur: 'واضح دلیل' } },
              { word: 'مُبِين', meaning: { en: 'clear, manifest', ur: 'واضح، روشن' } },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'nominal-sentence',
      components: [
        { type: 'mubtada', word: 'تِلْكَ', role: 'subject (demonstrative)' },
        { type: 'khabar', word: 'آيَاتُ الْكِتَابِ الْمُبِينِ', role: 'predicate' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      ],
      explanation: {
        en: 'These (subject) are verses of the clear Book (predicate)',
        ur: 'یہ (مبتدأ) واضح کتاب کی آیتیں ہیں (خبر)',
      },
    },
  },

  3: { // Ayah 3: لَعَلَّكَ بَاخِعٌ نَّفْسَكَ أَلَّا يَكُونُوا مُؤْمِنِينَ
    text: 'لَعَلَّكَ بَاخِعٌ نَّفْسَكَ أَلَّا يَكُونُوا مُؤْمِنِينَ',
    translation: {
      en: 'Perhaps you would kill yourself with grief that they will not be believers.',
      ur: 'شاید تم اپنے آپ کو ہلاک کر لو اس غم سے کہ وہ ایمان نہیں لاتے',
    },
    words: [
      {
        id: '26:3:1',
        position: 1,
        arabic: 'لَعَلَّكَ',
        transliteration: 'la\'allaka',
        pos: ['PART', 'PRON'],
        posLabel: 'PART+PRON',
        root: null,
        meaning: {
          en: 'Perhaps you',
          ur: 'شاید تم',
        },
        grammarRole: 'tawaqqu',
        grammarExplanations: {
          en: 'لَعَلَّ (expectation particle) + ك (2nd person pronoun). Expresses concern and compassion.',
          ur: 'لَعَلَّ (حرف توقع) + ک (ضمیر مخاطب)۔ فکر اور شفقت کا اظہار۔',
        },
      },
      {
        id: '26:3:2',
        position: 2,
        arabic: 'بَاخِعٌ',
        transliteration: 'baakhi\'un',
        pos: ['N'],
        posLabel: 'N',
        root: 'ب خ ع',
        lemma: 'بَاخِع',
        pattern: 'فَاعِل',
        meaning: {
          en: 'Destroying / killing',
          ur: 'ہلاک کرنے والا',
        },
        grammarRole: 'khabar-la\'alla',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Active participle (اسم فاعل) - predicate of لَعَلَّ, nominative.',
          ur: 'اسم فاعل - لعل کی خبر، مرفوع۔',
        },
        advanced: {
          rootFamily: {
            root: 'ب خ ع',
            meaning: { en: 'to kill, destroy oneself', ur: 'اپنے آپ کو ہلاک کرنا' },
            words: [
              { word: 'بَخَعَ', meaning: { en: 'he destroyed', ur: 'اس نے ہلاک کیا' } },
              { word: 'بَاخِع', meaning: { en: 'one who destroys', ur: 'ہلاک کرنے والا' } },
            ],
          },
        },
      },
      {
        id: '26:3:3',
        position: 3,
        arabic: 'نَّفْسَكَ',
        transliteration: 'nafsaka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ن ف س',
        lemma: 'نَفْس',
        meaning: {
          en: 'Yourself',
          ur: 'اپنے آپ کو',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative. نفس + attached pronoun ك.',
          ur: 'مفعول بہ - منصوب۔ نفس + ضمیر متصل ک۔',
        },
      },
      {
        id: '26:3:4',
        position: 4,
        arabic: 'أَلَّا',
        transliteration: 'allaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'That not',
          ur: 'کہ نہیں',
        },
        grammarRole: 'masdariyyah',
        grammarExplanations: {
          en: 'أَنْ (that) + لَا (not) - introduces subordinate clause with subjunctive verb.',
          ur: 'أَنْ (کہ) + لَا (نہیں) - فعل مضارع منصوب کا جملہ۔',
        },
      },
      {
        id: '26:3:5',
        position: 5,
        arabic: 'يَكُونُوا',
        transliteration: 'yakoonoo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        lemma: 'كَانَ',
        meaning: {
          en: 'They would be',
          ur: 'وہ ہوں',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperfect',
          mood: 'subjunctive',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Imperfect verb, subjunctive (منصوب) because of أَنْ. Nun dropped due to ن الوقاية.',
          ur: 'فعل مضارع منصوب أَنْ کی وجہ سے۔ نون حذف ہو گیا۔',
        },
      },
      {
        id: '26:3:6',
        position: 6,
        arabic: 'مُؤْمِنِينَ',
        transliteration: 'mu\'mineena',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ م ن',
        lemma: 'مُؤْمِن',
        pattern: 'مُفْعِل',
        meaning: {
          en: 'Believers',
          ur: 'ایمان والے',
        },
        grammarRole: 'khabar-kana',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Predicate of كَانَ (خبر كان) - accusative masculine plural.',
          ur: 'خبر کان - منصوب جمع مذکر۔',
        },
      },
    ],
    structure: {
      type: 'complex-sentence',
      components: [
        { type: 'taraji', word: 'لَعَلَّكَ بَاخِعٌ نَّفْسَكَ', role: 'main clause with hope/fear' },
        { type: 'sabab', word: 'أَلَّا يَكُونُوا مُؤْمِنِينَ', role: 'causal clause' },
      ],
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
      ],
      explanation: {
        en: 'Perhaps you destroy yourself (main) because they do not believe (cause)',
        ur: 'شاید تم اپنے آپ کو ہلاک کر لو (اصل) کیونکہ وہ ایمان نہیں لاتے (سبب)',
      },
    },
  },

  4: { // Ayah 4: إِن نَّشَأْ نُنَزِّلْ عَلَيْهِم مِّنَ السَّمَاءِ آيَةً فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ
    text: 'إِن نَّشَأْ نُنَزِّلْ عَلَيْهِم مِّنَ السَّمَاءِ آيَةً فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ',
    translation: {
      en: 'If We willed, We could send down to them from the sky a sign so their necks would remain bowed to it in humility.',
      ur: 'اگر ہم چاہیں تو ان پر آسمان سے ایک نشانی اتار دیں جس سے ان کی گردنیں جھکی رہیں',
    },
    words: [
      {
        id: '26:4:1',
        position: 1,
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
          en: 'Conditional particle (أداة شرط) - introduces condition with jussive verbs.',
          ur: 'اداۃ شرط - جزم والے افعال کے ساتھ شرط بیان کرتی ہے۔',
        },
      },
      {
        id: '26:4:2',
        position: 2,
        arabic: 'نَّشَأْ',
        transliteration: 'nasha\'',
        pos: ['V'],
        posLabel: 'V',
        root: 'ش ي أ',
        lemma: 'شَاءَ',
        meaning: {
          en: 'We will/wish',
          ur: 'ہم چاہیں',
        },
        grammarRole: 'fil-shart',
        features: {
          aspect: 'imperfect',
          mood: 'jussive',
          person: '1st',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Verb of condition (فعل الشرط) - jussive mood because of إِنْ.',
          ur: 'فعل شرط - إِنْ کی وجہ سے مجزوم۔',
        },
      },
      {
        id: '26:4:3',
        position: 3,
        arabic: 'نُنَزِّلْ',
        transliteration: 'nunazzil',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        lemma: 'نَزَّلَ',
        pattern: 'فَعَّلَ',
        meaning: {
          en: 'We send down',
          ur: 'ہم نازل کریں',
        },
        grammarRole: 'jawab-shart',
        features: {
          aspect: 'imperfect',
          mood: 'jussive',
          person: '1st',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Answer of condition (جواب الشرط) - jussive. Form II verb emphasizing gradual sending.',
          ur: 'جواب شرط - مجزوم۔ باب تفعیل کا فعل بتدریج نازل کرنے پر زور۔',
        },
      },
      {
        id: '26:4:4',
        position: 4,
        arabic: 'عَلَيْهِم',
        transliteration: '\'alayhim',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'Upon them',
          ur: 'ان پر',
        },
        grammarRole: 'jarr-majroor',
        grammarExplanations: {
          en: 'Preposition عَلَى (upon) + attached pronoun هِم (them).',
          ur: 'حرف جار عَلَى (پر) + ضمیر متصل هِم (ان)۔',
        },
      },
      {
        id: '26:4:5',
        position: 5,
        arabic: 'مِّنَ',
        transliteration: 'mina',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From',
          ur: 'سے',
        },
        grammarRole: 'jarr',
      },
      {
        id: '26:4:6',
        position: 6,
        arabic: 'السَّمَاءِ',
        transliteration: 'as-samaa\'i',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        lemma: 'سَمَاء',
        meaning: {
          en: 'The sky/heaven',
          ur: 'آسمان',
        },
        grammarRole: 'majroor',
        case: 'majroor',
        grammarExplanations: {
          en: 'Genitive (مجرور) because of preposition مِن.',
          ur: 'حرف جار مِن کی وجہ سے مجرور۔',
        },
      },
      {
        id: '26:4:7',
        position: 7,
        arabic: 'آيَةً',
        transliteration: 'aayatan',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ي ي',
        lemma: 'آية',
        meaning: {
          en: 'A sign',
          ur: 'ایک نشانی',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative. Indefinite singular.',
          ur: 'مفعول بہ - منصوب۔ نکرہ مفرد۔',
        },
      },
      {
        id: '26:4:8',
        position: 8,
        arabic: 'فَظَلَّتْ',
        transliteration: 'fa-zallat',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ظ ل ل',
        lemma: 'ظَلَّ',
        meaning: {
          en: 'So would remain',
          ur: 'پس رہیں',
        },
        grammarRole: 'atf',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'feminine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'فَ (result) + ظَلَّ (remain/continue) - indicates continuous state.',
          ur: 'فَ (نتیجہ) + ظَلَّ (رہنا) - مسلسل حالت بیان کرتا ہے۔',
        },
      },
      {
        id: '26:4:9',
        position: 9,
        arabic: 'أَعْنَاقُهُمْ',
        transliteration: 'a\'naaquhum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ن ق',
        lemma: 'عُنُق',
        meaning: {
          en: 'Their necks',
          ur: 'ان کی گردنیں',
        },
        grammarRole: 'ism-zalla',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Subject of ظَلَّ (اسم ظل) - nominative. Plural of عُنُق + pronoun هُم.',
          ur: 'اسم ظل - مرفوع۔ عُنُق کی جمع + ضمیر هُم۔',
        },
      },
      {
        id: '26:4:10',
        position: 10,
        arabic: 'لَهَا',
        transliteration: 'lahaa',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'To it',
          ur: 'اس کے لیے',
        },
        grammarRole: 'jarr-majroor',
        grammarExplanations: {
          en: 'Preposition لَ (to/for) + attached pronoun هَا (it) - refers to the sign.',
          ur: 'حرف جار لَ (کے لیے) + ضمیر متصل هَا (اس) - نشانی کی طرف راجع۔',
        },
      },
      {
        id: '26:4:11',
        position: 11,
        arabic: 'خَاضِعِينَ',
        transliteration: 'khaadi\'eena',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'خ ض ع',
        lemma: 'خَاضِع',
        pattern: 'فَاعِل',
        meaning: {
          en: 'Humbled/bowed',
          ur: 'جھکے ہوئے',
        },
        grammarRole: 'khabar-zalla',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Predicate of ظَلَّ (خبر ظل) - accusative masculine plural. Active participle.',
          ur: 'خبر ظل - منصوب جمع مذکر۔ اسم فاعل۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Grammatical Shift', ur: 'نحوی تبدیلی' },
            explanation: {
              en: 'خَاضِعِينَ is masculine plural though أَعْنَاقُهُمْ (necks) is feminine - referring to the owners of necks (people), emphasizing human submission.',
              ur: 'خَاضِعِينَ مذکر جمع ہے حالانکہ أَعْنَاقُهُمْ (گردنیں) مؤنث ہے - گردنوں کے مالکوں (لوگوں) کی طرف اشارہ، انسانی عاجزی پر زور۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'conditional-sentence',
      components: [
        { type: 'shart', word: 'إِن نَّشَأْ', role: 'condition' },
        { type: 'jawab', word: 'نُنَزِّلْ عَلَيْهِم مِّنَ السَّمَاءِ آيَةً', role: 'answer to condition' },
        { type: 'natija', word: 'فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ', role: 'consequence' },
      ],
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'عطف' },
      ],
      explanation: {
        en: 'If We will (condition), We send down a sign (answer), their necks remain humbled (result)',
        ur: 'اگر ہم چاہیں (شرط)، نشانی نازل کریں (جواب)، گردنیں جھکی رہیں (نتیجہ)',
      },
    },
  },

  5: { // Ayah 5: وَمَا يَأْتِيهِم مِّن ذِكْرٍ مِّنَ الرَّحْمَٰنِ مُحْدَثٍ إِلَّا كَانُوا عَنْهُ مُعْرِضِينَ
    text: 'وَمَا يَأْتِيهِم مِّن ذِكْرٍ مِّنَ الرَّحْمَٰنِ مُحْدَثٍ إِلَّا كَانُوا عَنْهُ مُعْرِضِينَ',
    translation: {
      en: 'And no mention (revelation) comes to them anew from the Most Merciful except that they turn away from it.',
      ur: 'اور ان کے پاس رحمٰن کی طرف سے کوئی نئی نصیحت نہیں آتی مگر وہ اس سے منہ پھیر لیتے ہیں',
    },
    words: [
      {
        id: '26:5:1',
        position: 1,
        arabic: 'وَمَا',
        transliteration: 'wa-maa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'وَ (conjunction) + مَا (negation) - negates the entire following clause.',
          ur: 'وَ (حرف عطف) + مَا (نفی) - پورے جملے کی نفی۔',
        },
      },
      {
        id: '26:5:2',
        position: 2,
        arabic: 'يَأْتِيهِم',
        transliteration: 'ya\'teehim',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'أ ت ي',
        lemma: 'أَتَى',
        meaning: {
          en: 'Comes to them',
          ur: 'ان کے پاس آتا ہے',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Imperfect verb + attached object pronoun هِم (them).',
          ur: 'فعل مضارع + ضمیر مفعول متصل هِم (ان کو)۔',
        },
      },
      {
        id: '26:5:3',
        position: 3,
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'Any/from',
          ur: 'کوئی/سے',
        },
        grammarRole: 'zaidah',
        grammarExplanations: {
          en: 'مِن زائدة - extra preposition for emphasis after negation.',
          ur: 'مِن زائدہ - نفی کے بعد تاکید کے لیے۔',
        },
      },
      {
        id: '26:5:4',
        position: 4,
        arabic: 'ذِكْرٍ',
        transliteration: 'dhikrin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        lemma: 'ذِكْر',
        meaning: {
          en: 'Reminder/mention (revelation)',
          ur: 'ذکر/نصیحت (وحی)',
        },
        grammarRole: 'fail',
        case: 'majroor',
        grammarExplanations: {
          en: 'Subject (فاعل) in meaning - genitive in form because of مِن زائدة.',
          ur: 'معنی میں فاعل - لفظاً مجرور مِن زائدہ کی وجہ سے۔',
        },
      },
      {
        id: '26:5:5',
        position: 5,
        arabic: 'مِّنَ',
        transliteration: 'mina',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From',
          ur: 'کی طرف سے',
        },
        grammarRole: 'jarr',
      },
      {
        id: '26:5:6',
        position: 6,
        arabic: 'الرَّحْمَٰنِ',
        transliteration: 'ar-Rahmaani',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ح م',
        lemma: 'رَحْمٰن',
        meaning: {
          en: 'The Most Merciful',
          ur: 'رحمٰن',
        },
        grammarRole: 'majroor',
        case: 'majroor',
        grammarExplanations: {
          en: 'Genitive (مجرور) because of preposition مِن.',
          ur: 'حرف جار مِن کی وجہ سے مجرور۔',
        },
      },
      {
        id: '26:5:7',
        position: 7,
        arabic: 'مُحْدَثٍ',
        transliteration: 'muhdathin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ح د ث',
        lemma: 'مُحْدَث',
        pattern: 'مُفْعَل',
        meaning: {
          en: 'New/recent',
          ur: 'نیا',
        },
        grammarRole: 'sifa',
        case: 'majroor',
        grammarExplanations: {
          en: 'Adjective (صفة) for ذِكْر - genitive to match. Passive participle (اسم مفعول).',
          ur: 'صفت ذِکر کی - موصوف کے مطابق مجرور۔ اسم مفعول۔',
        },
      },
      {
        id: '26:5:8',
        position: 8,
        arabic: 'إِلَّا',
        transliteration: 'illaa',
        pos: ['RES'],
        posLabel: 'RES',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'مگر',
        },
        grammarRole: 'istithnaa',
        grammarExplanations: {
          en: 'Exception particle (أداة استثناء) - introduces the exception to the negation.',
          ur: 'اداۃ استثناء - نفی سے استثناء بیان کرتی ہے۔',
        },
      },
      {
        id: '26:5:9',
        position: 9,
        arabic: 'كَانُوا',
        transliteration: 'kaanoo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        lemma: 'كَانَ',
        meaning: {
          en: 'They were/are',
          ur: 'وہ ہوتے ہیں',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'كَانَ - incomplete verb, its predicate follows.',
          ur: 'کان - فعل ناقص، اس کی خبر آگے ہے۔',
        },
      },
      {
        id: '26:5:10',
        position: 10,
        arabic: 'عَنْهُ',
        transliteration: '\'anhu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'From it',
          ur: 'اس سے',
        },
        grammarRole: 'jarr-majroor',
        grammarExplanations: {
          en: 'Preposition عَنْ (from/away) + pronoun ه (it) - refers to ذِكْر.',
          ur: 'حرف جار عَنْ (سے) + ضمیر ه (اس) - ذِکر کی طرف راجع۔',
        },
      },
      {
        id: '26:5:11',
        position: 11,
        arabic: 'مُعْرِضِينَ',
        transliteration: 'mu\'rideena',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ر ض',
        lemma: 'مُعْرِض',
        pattern: 'مُفْعِل',
        meaning: {
          en: 'Turning away',
          ur: 'منہ پھیرنے والے',
        },
        grammarRole: 'khabar-kana',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Predicate of كَانَ (خبر كان) - accusative masculine plural. Active participle Form IV.',
          ur: 'خبر کان - منصوب جمع مذکر۔ باب افعال کا اسم فاعل۔',
        },
        advanced: {
          rootFamily: {
            root: 'ع ر ض',
            meaning: { en: 'to present, turn aside, avoid', ur: 'پیش کرنا، منہ پھیرنا' },
            words: [
              { word: 'عَرَضَ', meaning: { en: 'he presented', ur: 'اس نے پیش کیا' } },
              { word: 'أَعْرَضَ', meaning: { en: 'he turned away', ur: 'اس نے منہ پھیرا' } },
              { word: 'مُعْرِض', meaning: { en: 'one who turns away', ur: 'منہ پھیرنے والا' } },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'exceptive-sentence',
      components: [
        { type: 'nafi', word: 'وَمَا يَأْتِيهِم مِّن ذِكْرٍ مِّنَ الرَّحْمَٰنِ مُحْدَثٍ', role: 'negated clause' },
        { type: 'istithnaa', word: 'إِلَّا كَانُوا عَنْهُ مُعْرِضِينَ', role: 'exception' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
      ],
      explanation: {
        en: 'No reminder comes (negation) except they turn away (exception)',
        ur: 'کوئی نصیحت نہیں آتی (نفی) مگر وہ منہ پھیر لیتے ہیں (استثناء)',
      },
    },
  },

  6: { // Ayah 6: فَقَدْ كَذَّبُوا فَسَيَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ
    text: 'فَقَدْ كَذَّبُوا فَسَيَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ',
    translation: {
      en: 'For they have already denied, so there will come to them the news of what they used to ridicule.',
      ur: 'پس انہوں نے جھٹلا دیا، تو عنقریب ان کو خبریں پہنچیں گی جس کا وہ مذاق اڑاتے تھے',
    },
    words: [
      {
        id: '26:6:1',
        position: 1,
        arabic: 'فَقَدْ',
        transliteration: 'fa-qad',
        pos: ['CONJ', 'CERT'],
        posLabel: 'CONJ+CERT',
        root: null,
        meaning: {
          en: 'So indeed/already',
          ur: 'پس بیشک/یقیناً',
        },
        grammarRole: 'tahqiq',
        grammarExplanations: {
          en: 'فَ (result) + قَدْ (certainty with perfect verb) - emphasizes completed action.',
          ur: 'فَ (نتیجہ) + قَدْ (فعل ماضی کے ساتھ تحقیق) - مکمل فعل پر زور۔',
        },
      },
      {
        id: '26:6:2',
        position: 2,
        arabic: 'كَذَّبُوا',
        transliteration: 'kadhdhaboo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ذ ب',
        lemma: 'كَذَّبَ',
        pattern: 'فَعَّلَ',
        meaning: {
          en: 'They denied',
          ur: 'انہوں نے جھٹلایا',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form II perfect verb - intensifies the meaning of lying/denying.',
          ur: 'باب تفعیل کا فعل ماضی - جھٹلانے کے معنی میں شدت۔',
        },
      },
      {
        id: '26:6:3',
        position: 3,
        arabic: 'فَسَيَأْتِيهِمْ',
        transliteration: 'fa-sa-ya\'teehim',
        pos: ['CONJ', 'FUT', 'V', 'PRON'],
        posLabel: 'CONJ+FUT+V+PRON',
        root: 'أ ت ي',
        lemma: 'أَتَى',
        meaning: {
          en: 'So will come to them',
          ur: 'تو عنقریب آئیں گی ان کو',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'فَ (result) + سَ (near future) + imperfect verb + object pronoun. Threatens consequence.',
          ur: 'فَ (نتیجہ) + سَ (قریب مستقبل) + فعل مضارع + ضمیر مفعول۔ نتیجے کی دھمکی۔',
        },
      },
      {
        id: '26:6:4',
        position: 4,
        arabic: 'أَنبَاءُ',
        transliteration: 'anbaa\'u',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ب أ',
        lemma: 'نَبَأ',
        meaning: {
          en: 'News/tidings',
          ur: 'خبریں',
        },
        grammarRole: 'fail',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Subject (فاعل) - nominative. Plural of نَبَأ.',
          ur: 'فاعل - مرفوع۔ نَبَأ کی جمع۔',
        },
      },
      {
        id: '26:6:5',
        position: 5,
        arabic: 'مَا',
        transliteration: 'maa',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'What',
          ur: 'جو',
        },
        grammarRole: 'mawsul',
        grammarExplanations: {
          en: 'Relative pronoun (اسم موصول) - "that which".',
          ur: 'اسم موصول - "جو کچھ"۔',
        },
      },
      {
        id: '26:6:6',
        position: 6,
        arabic: 'كَانُوا',
        transliteration: 'kaanoo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        lemma: 'كَانَ',
        meaning: {
          en: 'They were',
          ur: 'وہ تھے',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
      },
      {
        id: '26:6:7',
        position: 7,
        arabic: 'بِهِ',
        transliteration: 'bihi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'At it',
          ur: 'اس کا',
        },
        grammarRole: 'jarr-majroor',
        grammarExplanations: {
          en: 'Preposition بِ + pronoun ه - refers to what they mocked.',
          ur: 'حرف جار بِ + ضمیر ه - جس کا مذاق اڑاتے تھے اس کی طرف راجع۔',
        },
      },
      {
        id: '26:6:8',
        position: 8,
        arabic: 'يَسْتَهْزِئُونَ',
        transliteration: 'yastahzi\'oona',
        pos: ['V'],
        posLabel: 'V',
        root: 'ه ز أ',
        lemma: 'اِسْتَهْزَأَ',
        pattern: 'اِسْتَفْعَلَ',
        meaning: {
          en: 'They mock/ridicule',
          ur: 'وہ مذاق اڑاتے ہیں',
        },
        grammarRole: 'khabar-kana',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form X verb - to seek mockery, intensive ridicule. Predicate of كَانَ (جملة فعلية خبر).',
          ur: 'باب استفعال کا فعل - مذاق تلاش کرنا، شدید تمسخر۔ کان کی خبر (جملہ فعلیہ)۔',
        },
      },
    ],
    structure: {
      type: 'compound-sentence',
      components: [
        { type: 'tahqiq', word: 'فَقَدْ كَذَّبُوا', role: 'confirmed past action' },
        { type: 'promise', word: 'فَسَيَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ', role: 'future consequence' },
      ],
      relationships: [
        { from: 2, to: 4, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصول + صلة' },
      ],
      explanation: {
        en: 'They have denied (confirmed) so news of what they mocked will come (promise)',
        ur: 'انہوں نے جھٹلایا (تحقیق) تو جس کا مذاق اڑاتے تھے اس کی خبریں آئیں گی (وعید)',
      },
    },
  },

  7: { // Ayah 7: أَوَلَمْ يَرَوْا إِلَى الْأَرْضِ كَمْ أَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ
    text: 'أَوَلَمْ يَرَوْا إِلَى الْأَرْضِ كَمْ أَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ',
    translation: {
      en: 'Do they not look at the earth - how many of every noble kind We have grown therein?',
      ur: 'کیا انہوں نے زمین کو نہیں دیکھا کہ ہم نے اس میں ہر قسم کی عمدہ چیزیں اگائی ہیں',
    },
    words: [
      {
        id: '26:7:1',
        position: 1,
        arabic: 'أَوَلَمْ',
        transliteration: 'a-wa-lam',
        pos: ['INT', 'CONJ', 'NEG'],
        posLabel: 'INT+CONJ+NEG',
        root: null,
        meaning: {
          en: 'Do not/Have they not',
          ur: 'کیا نہیں',
        },
        grammarRole: 'istifham-inkari',
        grammarExplanations: {
          en: 'أَ (interrogative) + وَ (conjunction) + لَمْ (negation with jussive) - rhetorical question implying blame.',
          ur: 'أَ (استفہام) + وَ (عطف) + لَمْ (نفی مع جزم) - استفہام انکاری جو ملامت کا فائدہ دیتا ہے۔',
        },
      },
      {
        id: '26:7:2',
        position: 2,
        arabic: 'يَرَوْا',
        transliteration: 'yaraw',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر أ ي',
        lemma: 'رَأَى',
        meaning: {
          en: 'They see',
          ur: 'وہ دیکھیں',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperfect',
          mood: 'jussive',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Jussive (مجزوم) because of لَمْ. Original form يَرْأَيُوا simplified.',
          ur: 'لَمْ کی وجہ سے مجزوم۔ اصل صورت يَرْأَيُوا سے مختصر۔',
        },
      },
      {
        id: '26:7:3',
        position: 3,
        arabic: 'إِلَى',
        transliteration: 'ilaa',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'At/to',
          ur: 'کی طرف',
        },
        grammarRole: 'jarr',
      },
      {
        id: '26:7:4',
        position: 4,
        arabic: 'الْأَرْضِ',
        transliteration: 'al-ardi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ر ض',
        lemma: 'أَرْض',
        meaning: {
          en: 'The earth',
          ur: 'زمین',
        },
        grammarRole: 'majroor',
        case: 'majroor',
        grammarExplanations: {
          en: 'Genitive (مجرور) because of preposition إِلَى.',
          ur: 'حرف جار إِلَى کی وجہ سے مجرور۔',
        },
      },
      {
        id: '26:7:5',
        position: 5,
        arabic: 'كَمْ',
        transliteration: 'kam',
        pos: ['INT'],
        posLabel: 'INT',
        root: null,
        meaning: {
          en: 'How many',
          ur: 'کتنی',
        },
        grammarRole: 'istifham',
        grammarExplanations: {
          en: 'Interrogative of quantity (كم الاستفهامية) - "how many" emphasizing abundance.',
          ur: 'کم استفہامیہ - "کتنی" کثرت پر زور۔',
        },
      },
      {
        id: '26:7:6',
        position: 6,
        arabic: 'أَنبَتْنَا',
        transliteration: 'anbatnaa',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ن ب ت',
        lemma: 'أَنْبَتَ',
        pattern: 'أَفْعَلَ',
        meaning: {
          en: 'We caused to grow',
          ur: 'ہم نے اگایا',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'perfect',
          person: '1st',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form IV perfect verb + attached pronoun نَا (We). Causative meaning.',
          ur: 'باب افعال کا فعل ماضی + ضمیر متصل نَا (ہم)۔ متعدی معنی۔',
        },
      },
      {
        id: '26:7:7',
        position: 7,
        arabic: 'فِيهَا',
        transliteration: 'feehaa',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'In it (the earth)',
          ur: 'اس میں (زمین میں)',
        },
        grammarRole: 'jarr-majroor',
        grammarExplanations: {
          en: 'Preposition فِي (in) + attached pronoun هَا (it) - refers to الأرض.',
          ur: 'حرف جار فِي (میں) + ضمیر متصل هَا (اس) - الأرض کی طرف راجع۔',
        },
      },
      {
        id: '26:7:8',
        position: 8,
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'Of/from',
          ur: 'سے',
        },
        grammarRole: 'jarr',
      },
      {
        id: '26:7:9',
        position: 9,
        arabic: 'كُلِّ',
        transliteration: 'kulli',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل ل',
        lemma: 'كُلّ',
        meaning: {
          en: 'Every',
          ur: 'ہر',
        },
        grammarRole: 'majroor',
        case: 'majroor',
        grammarExplanations: {
          en: 'Genitive because of مِن. Also مضاف.',
          ur: 'مِن کی وجہ سے مجرور۔ مضاف بھی ہے۔',
        },
      },
      {
        id: '26:7:10',
        position: 10,
        arabic: 'زَوْجٍ',
        transliteration: 'zawjin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ز و ج',
        lemma: 'زَوْج',
        meaning: {
          en: 'Kind/pair/type',
          ur: 'قسم/جوڑا',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        grammarExplanations: {
          en: 'مضاف إليه - genitive. Refers to different species/types of plants.',
          ur: 'مضاف الیہ - مجرور۔ پودوں کی مختلف اقسام۔',
        },
      },
      {
        id: '26:7:11',
        position: 11,
        arabic: 'كَرِيمٍ',
        transliteration: 'kareemin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ك ر م',
        lemma: 'كَرِيم',
        meaning: {
          en: 'Noble/excellent',
          ur: 'عمدہ/بہترین',
        },
        grammarRole: 'sifa',
        case: 'majroor',
        grammarExplanations: {
          en: 'Adjective (صفة) for زَوْج - genitive to match. Describes the quality of plants.',
          ur: 'صفت زَوْج کی - موصوف کے مطابق مجرور۔ پودوں کی عمدگی بیان کرتی ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ك ر م',
            meaning: { en: 'to be noble, generous', ur: 'عزت والا ہونا، سخی ہونا' },
            words: [
              { word: 'كَرِيم', meaning: { en: 'noble, generous', ur: 'عزت والا، سخی' } },
              { word: 'أَكْرَمَ', meaning: { en: 'he honored', ur: 'اس نے عزت دی' } },
              { word: 'كَرَامَة', meaning: { en: 'honor, dignity', ur: 'عزت، وقار' } },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'rhetorical-question',
      components: [
        { type: 'istifham', word: 'أَوَلَمْ يَرَوْا إِلَى الْأَرْضِ', role: 'question about observation' },
        { type: 'bayaan', word: 'كَمْ أَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ', role: 'explanation of divine power' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'استفهام + فعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
      ],
      explanation: {
        en: 'Do they not see the earth (question) how We grew noble plants therein (proof)',
        ur: 'کیا انہوں نے زمین نہیں دیکھی (سوال) ہم نے عمدہ چیزیں اگائیں (دلیل)',
      },
    },
  },

  8: { // Ayah 8: إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ
    text: 'إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ',
    translation: {
      en: 'Indeed in that is a sign, but most of them were not believers.',
      ur: 'بیشک اس میں نشانی ہے، مگر ان میں سے اکثر ایمان نہیں لائے',
    },
    words: [
      {
        id: '26:8:1',
        position: 1,
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['EMPH'],
        posLabel: 'EMPH',
        root: null,
        meaning: {
          en: 'Indeed/verily',
          ur: 'بیشک',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'Emphatic particle (حرف توكيد ونصب) - its noun will be accusative.',
          ur: 'حرف توکید ونصب - اس کا اسم منصوب ہوگا۔',
        },
      },
      {
        id: '26:8:2',
        position: 2,
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
      },
      {
        id: '26:8:3',
        position: 3,
        arabic: 'ذَٰلِكَ',
        transliteration: 'dhaalika',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'That',
          ur: 'اس',
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Demonstrative pronoun (اسم إشارة للبعيد) - refers to the plants mentioned.',
          ur: 'اسم اشارہ للبعید - پودوں کی طرف اشارہ۔',
        },
      },
      {
        id: '26:8:4',
        position: 4,
        arabic: 'لَآيَةً',
        transliteration: 'la-aayatan',
        pos: ['EMPH', 'N'],
        posLabel: 'EMPH+N',
        root: 'أ ي ي',
        lemma: 'آية',
        meaning: {
          en: 'Surely a sign',
          ur: 'یقیناً ایک نشانی',
        },
        grammarRole: 'ism-inna',
        case: 'mansoob',
        grammarExplanations: {
          en: 'لَ (emphasis لام التوكيد) + اسم إنّ - accusative. Subject of إِنَّ is delayed (muakhkhar).',
          ur: 'لَ (لام توکید) + اسم إنّ - منصوب۔ اسم إنّ مؤخر ہے۔',
        },
      },
      {
        id: '26:8:5',
        position: 5,
        arabic: 'وَمَا',
        transliteration: 'wa-maa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'But not',
          ur: 'مگر نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'وَ (conjunction) + مَا (negation) - introduces contrast.',
          ur: 'وَ (حرف عطف) + مَا (نفی) - تضاد بیان کرتی ہے۔',
        },
      },
      {
        id: '26:8:6',
        position: 6,
        arabic: 'كَانَ',
        transliteration: 'kaana',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        lemma: 'كَانَ',
        meaning: {
          en: 'Were',
          ur: 'تھے',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
      },
      {
        id: '26:8:7',
        position: 7,
        arabic: 'أَكْثَرُهُم',
        transliteration: 'aktharuhum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ك ث ر',
        lemma: 'أَكْثَر',
        pattern: 'أَفْعَل',
        meaning: {
          en: 'Most of them',
          ur: 'ان میں سے اکثر',
        },
        grammarRole: 'ism-kana',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Subject of كَانَ (اسم كان) - nominative. Superlative (اسم تفضيل) + pronoun.',
          ur: 'اسم کان - مرفوع۔ اسم تفضیل + ضمیر۔',
        },
      },
      {
        id: '26:8:8',
        position: 8,
        arabic: 'مُّؤْمِنِينَ',
        transliteration: 'mu\'mineena',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ م ن',
        lemma: 'مُؤْمِن',
        pattern: 'مُفْعِل',
        meaning: {
          en: 'Believers',
          ur: 'ایمان والے',
        },
        grammarRole: 'khabar-kana',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Predicate of كَانَ (خبر كان) - accusative masculine plural.',
          ur: 'خبر کان - منصوب جمع مذکر۔',
        },
      },
    ],
    structure: {
      type: 'compound-sentence',
      components: [
        { type: 'tawkid', word: 'إِنَّ فِي ذَٰلِكَ لَآيَةً', role: 'emphatic statement about sign' },
        { type: 'istidrak', word: 'وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ', role: 'contrast showing disbelief' },
      ],
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'نفی + فعل' },
      ],
      explanation: {
        en: 'Indeed there is a sign (emphasis) but most did not believe (contrast)',
        ur: 'بیشک نشانی ہے (توکید) مگر اکثر ایمان نہیں لائے (استدراک)',
      },
    },
  },

  9: { // Ayah 9: وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ
    text: 'وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ',
    translation: {
      en: 'And indeed, your Lord - He is the Exalted in Might, the Merciful.',
      ur: 'اور بیشک تیرا رب یقیناً غالب اور رحم والا ہے',
    },
    words: [
      {
        id: '26:9:1',
        position: 1,
        arabic: 'وَإِنَّ',
        transliteration: 'wa-inna',
        pos: ['CONJ', 'EMPH'],
        posLabel: 'CONJ+EMPH',
        root: null,
        meaning: {
          en: 'And indeed',
          ur: 'اور بیشک',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'وَ (conjunction) + إِنَّ (emphasis) - introduces new emphatic statement.',
          ur: 'وَ (حرف عطف) + إِنَّ (توکید) - نیا زور دار بیان۔',
        },
      },
      {
        id: '26:9:2',
        position: 2,
        arabic: 'رَبَّكَ',
        transliteration: 'Rabbaka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        lemma: 'رَبّ',
        meaning: {
          en: 'Your Lord',
          ur: 'تیرا رب',
        },
        grammarRole: 'ism-inna',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Subject of إِنَّ (اسم إنّ) - accusative. رَبّ + attached pronoun ك.',
          ur: 'اسم إنّ - منصوب۔ رَبّ + ضمیر متصل ک۔',
        },
      },
      {
        id: '26:9:3',
        position: 3,
        arabic: 'لَهُوَ',
        transliteration: 'la-huwa',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: {
          en: 'Surely He',
          ur: 'یقیناً وہ',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'لَ (emphasis لام المزحلقة) + هُوَ (pronoun of separation ضمير فصل) - double emphasis.',
          ur: 'لَ (لام مزحلقہ) + هُوَ (ضمیر فصل) - دوہری توکید۔',
        },
      },
      {
        id: '26:9:4',
        position: 4,
        arabic: 'الْعَزِيزُ',
        transliteration: 'al-\'Azeezu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ز ز',
        lemma: 'عَزِيز',
        meaning: {
          en: 'The Exalted in Might',
          ur: 'غالب',
        },
        grammarRole: 'khabar-inna',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Predicate of إِنَّ (خبر إنّ) - nominative. Divine Name.',
          ur: 'خبر إنّ - مرفوع۔ اسم الٰہی۔',
        },
        advanced: {
          rootFamily: {
            root: 'ع ز ز',
            meaning: { en: 'to be mighty, powerful', ur: 'غالب ہونا، طاقتور ہونا' },
            words: [
              { word: 'عَزِيز', meaning: { en: 'mighty, powerful', ur: 'غالب، طاقتور' } },
              { word: 'عِزَّة', meaning: { en: 'might, honor', ur: 'غلبہ، عزت' } },
              { word: 'أَعَزَّ', meaning: { en: 'he honored', ur: 'اس نے عزت دی' } },
            ],
          },
        },
      },
      {
        id: '26:9:5',
        position: 5,
        arabic: 'الرَّحِيمُ',
        transliteration: 'ar-Raheemu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ح م',
        lemma: 'رَحِيم',
        meaning: {
          en: 'The Merciful',
          ur: 'رحم والا',
        },
        grammarRole: 'khabar-thani',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Second predicate (خبر ثان) - nominative. Balances power with mercy.',
          ur: 'خبر ثانی - مرفوع۔ طاقت کو رحمت سے متوازن کرتا ہے۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Balance of Divine Attributes', ur: 'صفات الٰہیہ کا توازن' },
            explanation: {
              en: 'العَزِيز (Mighty) paired with الرَّحِيم (Merciful) - Allah is powerful yet compassionate. This pairing appears 13 times in Quran.',
              ur: 'العَزِيز (غالب) الرَّحِيم (رحیم) کے ساتھ - اللہ طاقتور ہونے کے باوجود مہربان ہے۔ یہ جوڑا قرآن میں ۱۳ بار آیا۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'nominal-sentence',
      components: [
        { type: 'ism-inna', word: 'رَبَّكَ', role: 'subject (your Lord)' },
        { type: 'tawkid', word: 'لَهُوَ', role: 'emphasis (surely He)' },
        { type: 'khabar', word: 'الْعَزِيزُ الرَّحِيمُ', role: 'predicates (Mighty, Merciful)' },
      ],
      explanation: {
        en: 'Your Lord (subject) is surely the Mighty, the Merciful (predicates)',
        ur: 'تیرا رب (مبتدأ) یقیناً غالب رحیم ہے (خبر)',
      },
    
       relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  10: { // Ayah 10: وَإِذْ نَادَىٰ رَبُّكَ مُوسَىٰ أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ
    text: 'وَإِذْ نَادَىٰ رَبُّكَ مُوسَىٰ أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ',
    translation: {
      en: 'And [mention] when your Lord called Moses, [saying], "Go to the wrongdoing people."',
      ur: 'اور جب تیرے رب نے موسیٰ کو پکارا کہ ظالم قوم کے پاس جاؤ',
    },
    words: [
      {
        id: '26:10:1',
        position: 1,
        arabic: 'وَإِذْ',
        transliteration: 'wa-idh',
        pos: ['CONJ', 'T'],
        posLabel: 'CONJ+T',
        root: null,
        meaning: {
          en: 'And when',
          ur: 'اور جب',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'وَ (conjunction) + إِذْ (time particle) - introduces a narrative about the past.',
          ur: 'وَ (حرف عطف) + إِذْ (ظرف زمان) - ماضی کا واقعہ بیان کرتا ہے۔',
        },
      },
      {
        id: '26:10:2',
        position: 2,
        arabic: 'نَادَىٰ',
        transliteration: 'naadaa',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن د و',
        lemma: 'نَادَى',
        pattern: 'فَاعَلَ',
        meaning: {
          en: 'Called',
          ur: 'پکارا',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Form III perfect verb - implies mutual action or intensity of calling.',
          ur: 'باب مفاعلہ کا فعل ماضی - باہمی عمل یا پکارنے کی شدت۔',
        },
      },
      {
        id: '26:10:3',
        position: 3,
        arabic: 'رَبُّكَ',
        transliteration: 'Rabbuka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        lemma: 'رَبّ',
        meaning: {
          en: 'Your Lord',
          ur: 'تیرا رب',
        },
        grammarRole: 'fail',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Subject (فاعل) - nominative. رَبّ + attached pronoun ك.',
          ur: 'فاعل - مرفوع۔ رَبّ + ضمیر متصل ک۔',
        },
      },
      {
        id: '26:10:4',
        position: 4,
        arabic: 'مُوسَىٰ',
        transliteration: 'Moosaa',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        meaning: {
          en: 'Moses',
          ur: 'موسیٰ',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative. Foreign name, indeclinable (ممنوع من الصرف).',
          ur: 'مفعول بہ - منصوب۔ عجمی نام، غیر منصرف۔',
        },
      },
      {
        id: '26:10:5',
        position: 5,
        arabic: 'أَنِ',
        transliteration: 'ani',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: 'That (saying)',
          ur: 'کہ',
        },
        grammarRole: 'tafsiiriyyah',
        grammarExplanations: {
          en: 'Explanatory أَنْ (أن التفسيرية) - introduces direct speech/command.',
          ur: 'أن تفسیریہ - براہ راست کلام/حکم بیان کرتی ہے۔',
        },
      },
      {
        id: '26:10:6',
        position: 6,
        arabic: 'ائْتِ',
        transliteration: 'i\'ti',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ت ي',
        lemma: 'أَتَى',
        meaning: {
          en: 'Go/come',
          ur: 'جاؤ',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperative',
          person: '2nd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Imperative verb (فعل أمر) - command to Moses to go.',
          ur: 'فعل امر - موسیٰ کو جانے کا حکم۔',
        },
      },
      {
        id: '26:10:7',
        position: 7,
        arabic: 'الْقَوْمَ',
        transliteration: 'al-qawma',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        lemma: 'قَوْم',
        meaning: {
          en: 'The people',
          ur: 'قوم',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative. Refers to the people of Pharaoh.',
          ur: 'مفعول بہ - منصوب۔ فرعون کی قوم مراد ہے۔',
        },
      },
      {
        id: '26:10:8',
        position: 8,
        arabic: 'الظَّالِمِينَ',
        transliteration: 'adh-dhaali-meena',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ظ ل م',
        lemma: 'ظَالِم',
        pattern: 'فَاعِل',
        meaning: {
          en: 'The wrongdoing/oppressing',
          ur: 'ظالموں',
        },
        grammarRole: 'sifa',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Adjective (صفة) for القَوْم - accusative masculine plural. Active participle.',
          ur: 'صفت القَوْم کی - منصوب جمع مذکر۔ اسم فاعل۔',
        },
        advanced: {
          rootFamily: {
            root: 'ظ ل م',
            meaning: { en: 'to wrong, oppress, be unjust', ur: 'ظلم کرنا، ستم کرنا' },
            words: [
              { word: 'ظَلَمَ', meaning: { en: 'he wronged', ur: 'اس نے ظلم کیا' } },
              { word: 'ظُلْم', meaning: { en: 'injustice', ur: 'ظلم' } },
              { word: 'ظَالِم', meaning: { en: 'wrongdoer', ur: 'ظالم' } },
              { word: 'مَظْلُوم', meaning: { en: 'oppressed', ur: 'مظلوم' } },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'narrative-sentence',
      components: [
        { type: 'zarf', word: 'وَإِذْ', role: 'time marker' },
        { type: 'fil-fail', word: 'نَادَىٰ رَبُّكَ', role: 'verb and subject' },
        { type: 'mafool', word: 'مُوسَىٰ', role: 'object (Moses)' },
        { type: 'maqul', word: 'أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ', role: 'quoted command' },
      ],
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
      ],
      explanation: {
        en: 'When (time) your Lord called (action) Moses (object), "Go to the wrongdoing people" (command)',
        ur: 'جب (وقت) تیرے رب نے پکارا (فعل) موسیٰ کو (مفعول)، "ظالم قوم کے پاس جاؤ" (حکم)',
      },
    },
  },

  11: {
    text: "قَوْمَ فِرْعَوْنَ ۚ أَلَا يَتَّقُونَ",
    translation: {
      en: "",
      ur: "(یعنی) قوم فرعون کے پاس، کیا یہ ڈرتے نہیں",
    },
    words: [
      { id: '26:11:1', arabic: "قَوْمَ", transliteration: "qawma", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(The) people", ur: "(The) لوگ" } },
      { id: '26:11:2', arabic: "فِرْعَوْنَ ۚ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '26:11:3', arabic: "أَلَا", transliteration: "alā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will not", ur: "Will نہیں" } },
      { id: '26:11:4', arabic: "يَتَّقُونَ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they fear", ur: "وہ لوگ ڈرنا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  12: {
    text: "قَالَ رَبِّ إِنِّىٓ أَخَافُ أَن يُكَذِّبُونِ",
    translation: {
      en: "",
      ur: "انہوں نے کہا کہ میرے پروردگار میں ڈرتا ہوں کہ یہ مجھے جھوٹا سمجھیں",
    },
    words: [
      { id: '26:12:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:12:2', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '26:12:3', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '26:12:4', arabic: "أَخَافُ", transliteration: "akhāfu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[I] fear", ur: "[میں] ڈرنا" } },
      { id: '26:12:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:12:6', arabic: "يُكَذِّبُونِ", transliteration: "yukadhibūni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will deny me", ur: "وہ لوگ will deny me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  13: {
    text: "وَيَضِيقُ صَدْرِى وَلَا يَنطَلِقُ لِسَانِى فَأَرْسِلْ إِلَىٰ هَـٰرُونَ",
    translation: {
      en: "",
      ur: "اور میرا دل تنگ ہوتا ہے اور میری زبان رکتی ہے تو ہارون کو حکم بھیج کہ میرے ساتھ چلیں",
    },
    words: [
      { id: '26:13:1', arabic: "وَيَضِيقُ", transliteration: "wayaḍīqu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And straitens", ur: "اور straitens" } },
      { id: '26:13:2', arabic: "صَدْرِى", transliteration: "ṣadrī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my breast", ur: "my breast" } },
      { id: '26:13:3', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '26:13:4', arabic: "يَنطَلِقُ", transliteration: "yanṭaliqu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "expresses well", ur: "expresses well" } },
      { id: '26:13:5', arabic: "لِسَانِى", transliteration: "lisānī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "my tongue", ur: "my tongue" } },
      { id: '26:13:6', arabic: "فَأَرْسِلْ", transliteration: "fa-arsil", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so send", ur: "so send" } },
      { id: '26:13:7', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '26:13:8', arabic: "هَـٰرُونَ", transliteration: "hārūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Harun", ur: "Harun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  14: {
    text: "وَلَهُمْ عَلَىَّ ذَنۢبٌۭ فَأَخَافُ أَن يَقْتُلُونِ",
    translation: {
      en: "",
      ur: "اور ان لوگوں کا مجھ پر ایک گناہ (یعنی قبطی کے خون کا دعویٰ) بھی ہے سو مجھے یہ بھی خوف ہے کہ مجھ کو مار ہی ڈالیں",
    },
    words: [
      { id: '26:14:1', arabic: "وَلَهُمْ", transliteration: "walahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they have", ur: "اور وہ لوگ have" } },
      { id: '26:14:2', arabic: "عَلَىَّ", transliteration: "ʿalayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against me", ur: "against me" } },
      { id: '26:14:3', arabic: "ذَنۢبٌۭ", transliteration: "dhanbun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a crime", ur: "a crime" } },
      { id: '26:14:4', arabic: "فَأَخَافُ", transliteration: "fa-akhāfu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so I fear", ur: "so میں ڈرنا" } },
      { id: '26:14:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:14:6', arabic: "يَقْتُلُونِ", transliteration: "yaqtulūni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will kill me", ur: "وہ لوگ will kill me" } }
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
  15: {
    text: "قَالَ كَلَّا ۖ فَٱذْهَبَا بِـَٔايَـٰتِنَآ ۖ إِنَّا مَعَكُم مُّسْتَمِعُونَ",
    translation: {
      en: "",
      ur: "فرمایا ہرگز نہیں۔ تم دونوں ہماری نشانیاں لے کر جاؤ ہم تمہارے ساتھ سننے والے ہیں",
    },
    words: [
      { id: '26:15:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:15:2', arabic: "كَلَّا ۖ", transliteration: "kallā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '26:15:3', arabic: "فَٱذْهَبَا", transliteration: "fa-idh'habā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "go both of you", ur: "go both of تم" } },
      { id: '26:15:4', arabic: "بِـَٔايَـٰتِنَآ ۖ", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Our Signs", ur: "ساتھ Our نشانیاں" } },
      { id: '26:15:5', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, We", ur: "بیشک, ہم" } },
      { id: '26:15:6', arabic: "مَعَكُم", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) with you", ur: "(are) ساتھ تم" } },
      { id: '26:15:7', arabic: "مُّسْتَمِعُونَ", transliteration: "mus'tamiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "listening", ur: "listening" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  16: {
    text: "فَأْتِيَا فِرْعَوْنَ فَقُولَآ إِنَّا رَسُولُ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "تو دونوں فرعون کے پاس جاؤ اور کہو کہ ہم تمام جہان کے مالک کے بھیجے ہوئے ہیں",
    },
    words: [
      { id: '26:16:1', arabic: "فَأْتِيَا", transliteration: "fatiyā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So go both of you", ur: "So go both of تم" } },
      { id: '26:16:2', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Firaun", ur: "(کو) Firaun" } },
      { id: '26:16:3', arabic: "فَقُولَآ", transliteration: "faqūlā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and say", ur: "اور کہو" } },
      { id: '26:16:4', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "'Indeed, we", ur: "'بیشک, ہم" } },
      { id: '26:16:5', arabic: "رَسُولُ", transliteration: "rasūlu", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "(are the) Messenger", ur: "(are the) رسول" } },
      { id: '26:16:6', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of the) Lord", ur: "(of the) رب" } },
      { id: '26:16:7', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  17: {
    text: "أَنْ أَرْسِلْ مَعَنَا بَنِىٓ إِسْرَٰٓءِيلَ",
    translation: {
      en: "",
      ur: "(اور اس لئے آئے ہیں) کہ آپ بنی اسرائیل کو ہمارے ساتھ جانے کی اجازت دیں",
    },
    words: [
      { id: '26:17:1', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[That]", ur: "[وہ]" } },
      { id: '26:17:2', arabic: "أَرْسِلْ", transliteration: "arsil", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "send", ur: "send" } },
      { id: '26:17:3', arabic: "مَعَنَا", transliteration: "maʿanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with us", ur: "ساتھ us" } },
      { id: '26:17:4', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children of Israel.'", ur: "(the) اولاد of Israel.'" } },
      { id: '26:17:5', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children of Israel.'", ur: "(the) اولاد of Israel.'" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  18: {
    text: "قَالَ أَلَمْ نُرَبِّكَ فِينَا وَلِيدًۭا وَلَبِثْتَ فِينَا مِنْ عُمُرِكَ سِنِينَ",
    translation: {
      en: "",
      ur: "(فرعون نے موسیٰ سے کہا) کیا ہم نے تم کو کہ ابھی بچّے تھے پرورش نہیں کیا اور تم نے برسوں ہمارے ہاں عمر بسر (نہیں) کی",
    },
    words: [
      { id: '26:18:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:18:2', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did not", ur: "Did نہیں" } },
      { id: '26:18:3', arabic: "نُرَبِّكَ", transliteration: "nurabbika", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we bring you up", ur: "ہم bring تم up" } },
      { id: '26:18:4', arabic: "فِينَا", transliteration: "fīnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among us", ur: "among us" } },
      { id: '26:18:5', arabic: "وَلِيدًۭا", transliteration: "walīdan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(as) a child", ur: "(as) a child" } },
      { id: '26:18:6', arabic: "وَلَبِثْتَ", transliteration: "walabith'ta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you remained", ur: "اور تم remained" } },
      { id: '26:18:7', arabic: "فِينَا", transliteration: "fīnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among us", ur: "among us" } },
      { id: '26:18:8', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:18:9', arabic: "عُمُرِكَ", transliteration: "ʿumurika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your life", ur: "your زندگی" } },
      { id: '26:18:10', arabic: "سِنِينَ", transliteration: "sinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "years", ur: "years" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  19: {
    text: "وَفَعَلْتَ فَعْلَتَكَ ٱلَّتِى فَعَلْتَ وَأَنتَ مِنَ ٱلْكَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "اور تم نے وہ کام کیا تھا جو کیا اور تم ناشکرے معلوم ہوتے ہو",
    },
    words: [
      { id: '26:19:1', arabic: "وَفَعَلْتَ", transliteration: "wafaʿalta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And you did", ur: "اور تم did" } },
      { id: '26:19:2', arabic: "فَعْلَتَكَ", transliteration: "faʿlataka", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "your deed", ur: "your deed" } },
      { id: '26:19:3', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '26:19:4', arabic: "فَعَلْتَ", transliteration: "faʿalta", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "you did", ur: "تم did" } },
      { id: '26:19:5', arabic: "وَأَنتَ", transliteration: "wa-anta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you", ur: "اور تم" } },
      { id: '26:19:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) of", ur: "(were) of" } },
      { id: '26:19:7', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the ungrateful", ur: "the ungrateful" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  20: {
    text: "قَالَ فَعَلْتُهَآ إِذًۭا وَأَنَا۠ مِنَ ٱلضَّآلِّينَ",
    translation: {
      en: "",
      ur: "(موسیٰ نے) کہاں (ہاں) وہ حرکت مجھ سے ناگہاں سرزد ہوئی تھی اور میں خطا کاروں میں تھا",
    },
    words: [
      { id: '26:20:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:20:2', arabic: "فَعَلْتُهَآ", transliteration: "faʿaltuhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "I did it", ur: "میں did it" } },
      { id: '26:20:3', arabic: "إِذًۭا", transliteration: "idhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '26:20:4', arabic: "وَأَنَا۠", transliteration: "wa-anā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "I", ur: "میں" } },
      { id: '26:20:5', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) of", ur: "(was) of" } },
      { id: '26:20:6', arabic: "ٱلضَّآلِّينَ", transliteration: "l-ḍālīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who are astray", ur: "جو لوگ are astray" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' }
      ],
    },
  },
  21: {
    text: "فَفَرَرْتُ مِنكُمْ لَمَّا خِفْتُكُمْ فَوَهَبَ لِى رَبِّى حُكْمًۭا وَجَعَلَنِى مِنَ ٱلْمُرْسَلِينَ",
    translation: {
      en: "",
      ur: "تو جب مجھے تم سے ڈر لگا تو تم میں سے بھاگ گیا۔ پھر خدا نے مجھ کو نبوت وعلم بخشا اور مجھے پیغمبروں میں سے کیا",
    },
    words: [
      { id: '26:21:1', arabic: "فَفَرَرْتُ", transliteration: "fafarartu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So I fled", ur: "So میں fled" } },
      { id: '26:21:2', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '26:21:3', arabic: "لَمَّا", transliteration: "lammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '26:21:4', arabic: "خِفْتُكُمْ", transliteration: "khif'tukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I feared you", ur: "میں feared تم" } },
      { id: '26:21:5', arabic: "فَوَهَبَ", transliteration: "fawahaba", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But granted", ur: "لیکن granted" } },
      { id: '26:21:6', arabic: "لِى", transliteration: "lī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to me", ur: "کو me" } },
      { id: '26:21:7', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '26:21:8', arabic: "حُكْمًۭا", transliteration: "ḥuk'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "judgment", ur: "judgment" } },
      { id: '26:21:9', arabic: "وَجَعَلَنِى", transliteration: "wajaʿalanī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and made me", ur: "اور made me" } },
      { id: '26:21:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:21:11', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  22: {
    text: "وَتِلْكَ نِعْمَةٌۭ تَمُنُّهَا عَلَىَّ أَنْ عَبَّدتَّ بَنِىٓ إِسْرَٰٓءِيلَ",
    translation: {
      en: "",
      ur: "اور (کیا) یہی احسان ہے جو آپ مجھ پر رکھتے ہیں کہ آپ نے بنی اسرائیل کو غلام بنا رکھا ہے",
    },
    words: [
      { id: '26:22:1', arabic: "وَتِلْكَ", transliteration: "watil'ka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And this", ur: "اور this" } },
      { id: '26:22:2', arabic: "نِعْمَةٌۭ", transliteration: "niʿ'matun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) favor", ur: "(is the) favor" } },
      { id: '26:22:3', arabic: "تَمُنُّهَا", transliteration: "tamunnuhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "with which you reproach", ur: "ساتھ جو تم reproach" } },
      { id: '26:22:4', arabic: "عَلَىَّ", transliteration: "ʿalayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[on] me", ur: "[پر] me" } },
      { id: '26:22:5', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:22:6', arabic: "عَبَّدتَّ", transliteration: "ʿabbadtta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have enslaved", ur: "تم have enslaved" } },
      { id: '26:22:7', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children of Israel", ur: "(the) اولاد of Israel" } },
      { id: '26:22:8', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children of Israel", ur: "(the) اولاد of Israel" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  23: {
    text: "قَالَ فِرْعَوْنُ وَمَا رَبُّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "فرعون نے کہا کہ تمام جہان مالک کیا",
    },
    words: [
      { id: '26:23:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Firaun said", ur: "Firaun کہا" } },
      { id: '26:23:2', arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun said", ur: "Firaun کہا" } },
      { id: '26:23:3', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And what", ur: "اور کیا" } },
      { id: '26:23:4', arabic: "رَبُّ", transliteration: "rabbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) Lord", ur: "(is the) رب" } },
      { id: '26:23:5', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  24: {
    text: "قَالَ رَبُّ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَمَا بَيْنَهُمَآ ۖ إِن كُنتُم مُّوقِنِينَ",
    translation: {
      en: "",
      ur: "کہا کہ آسمانوں اور زمین اور جو کچھ ان دونوں میں ہے سب کا مالک۔ بشرطیکہ تم لوگوں کو یقین ہو",
    },
    words: [
      { id: '26:24:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:24:2', arabic: "رَبُّ", transliteration: "rabbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lord", ur: "رب" } },
      { id: '26:24:3', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heavens", ur: "(of) the آسمان" } },
      { id: '26:24:4', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '26:24:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '26:24:6', arabic: "بَيْنَهُمَآ ۖ", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) between them", ur: "(is) درمیان them" } },
      { id: '26:24:7', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:24:8', arabic: "كُنتُم", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (should) be", ur: "تم (should) be" } },
      { id: '26:24:9', arabic: "مُّوقِنِينَ", transliteration: "mūqinīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "convinced", ur: "convinced" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  25: {
    text: "قَالَ لِمَنْ حَوْلَهُۥٓ أَلَا تَسْتَمِعُونَ",
    translation: {
      en: "",
      ur: "فرعون نے اپنے اہالی موالی سے کہا کہ کیا تم سنتے نہیں",
    },
    words: [
      { id: '26:25:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:25:2', arabic: "لِمَنْ", transliteration: "liman", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to those", ur: "کو those" } },
      { id: '26:25:3', arabic: "حَوْلَهُۥٓ", transliteration: "ḥawlahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "around him", ur: "around him" } },
      { id: '26:25:4', arabic: "أَلَا", transliteration: "alā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '26:25:5', arabic: "تَسْتَمِعُونَ", transliteration: "tastamiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you hear", ur: "تم سننا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  26: {
    text: "قَالَ رَبُّكُمْ وَرَبُّ ءَابَآئِكُمُ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "(موسیٰ نے) کہا کہ تمہارا اور تمہارے پہلے باپ دادا کا مالک",
    },
    words: [
      { id: '26:26:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:26:2', arabic: "رَبُّكُمْ", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Your Lord", ur: "Your رب" } },
      { id: '26:26:3', arabic: "وَرَبُّ", transliteration: "warabbu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (the) Lord", ur: "اور (the) رب" } },
      { id: '26:26:4', arabic: "ءَابَآئِكُمُ", transliteration: "ābāikumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your forefathers", ur: "(of) your forefathers" } },
      { id: '26:26:5', arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your forefathers", ur: "(of) your forefathers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  27: {
    text: "قَالَ إِنَّ رَسُولَكُمُ ٱلَّذِىٓ أُرْسِلَ إِلَيْكُمْ لَمَجْنُونٌۭ",
    translation: {
      en: "",
      ur: "(فرعون نے) کہا کہ (یہ) پیغمبر جو تمہاری طرف بھیجا گیا ہے باؤلا ہے",
    },
    words: [
      { id: '26:27:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:27:2', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:27:3', arabic: "رَسُولَكُمُ", transliteration: "rasūlakumu", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "your Messenger", ur: "your رسول" } },
      { id: '26:27:4', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '26:27:5', arabic: "أُرْسِلَ", transliteration: "ur'sila", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has been sent", ur: "has been sent" } },
      { id: '26:27:6', arabic: "إِلَيْكُمْ", transliteration: "ilaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '26:27:7', arabic: "لَمَجْنُونٌۭ", transliteration: "lamajnūnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely mad", ur: "(is) یقیناً mad" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  28: {
    text: "قَالَ رَبُّ ٱلْمَشْرِقِ وَٱلْمَغْرِبِ وَمَا بَيْنَهُمَآ ۖ إِن كُنتُمْ تَعْقِلُونَ",
    translation: {
      en: "",
      ur: "موسیٰ نے کہا کہ مشرق اور مغرب اور جو کچھ ان دونوں میں ہے سب کا مالک، بشرطیکہ تم کو سمجھ ہو",
    },
    words: [
      { id: '26:28:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:28:2', arabic: "رَبُّ", transliteration: "rabbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lord", ur: "رب" } },
      { id: '26:28:3', arabic: "ٱلْمَشْرِقِ", transliteration: "l-mashriqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the east", ur: "(of) the east" } },
      { id: '26:28:4', arabic: "وَٱلْمَغْرِبِ", transliteration: "wal-maghribi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the west", ur: "اور the west" } },
      { id: '26:28:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '26:28:6', arabic: "بَيْنَهُمَآ ۖ", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) between them", ur: "(is) درمیان them" } },
      { id: '26:28:7', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:28:8', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you were", ur: "تم were" } },
      { id: '26:28:9', arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) reason", ur: "(کو) reason" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  29: {
    text: "قَالَ لَئِنِ ٱتَّخَذْتَ إِلَـٰهًا غَيْرِى لَأَجْعَلَنَّكَ مِنَ ٱلْمَسْجُونِينَ",
    translation: {
      en: "",
      ur: "(فرعون نے) کہا کہ اگر تم نے میرے سوا کسی اور کو معبود بنایا تو میں تمہیں قید کردوں گا",
    },
    words: [
      { id: '26:29:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:29:2', arabic: "لَئِنِ", transliteration: "la-ini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '26:29:3', arabic: "ٱتَّخَذْتَ", transliteration: "ittakhadhta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you take", ur: "تم take" } },
      { id: '26:29:4', arabic: "إِلَـٰهًا", transliteration: "ilāhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a god", ur: "a اللہ" } },
      { id: '26:29:5', arabic: "غَيْرِى", transliteration: "ghayrī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than me", ur: "other than me" } },
      { id: '26:29:6', arabic: "لَأَجْعَلَنَّكَ", transliteration: "la-ajʿalannaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will surely make you", ur: "میں will یقیناً make تم" } },
      { id: '26:29:7', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '26:29:8', arabic: "ٱلْمَسْجُونِينَ", transliteration: "l-masjūnīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those imprisoned", ur: "those imprisoned" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  30: {
    text: "قَالَ أَوَلَوْ جِئْتُكَ بِشَىْءٍۢ مُّبِينٍۢ",
    translation: {
      en: "",
      ur: "(موسیٰ نے) کہا خواہ میں آپ کے پاس روشن چیز لاؤں (یعنی معجزہ)",
    },
    words: [
      { id: '26:30:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:30:2', arabic: "أَوَلَوْ", transliteration: "awalaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Even if", ur: "Even if" } },
      { id: '26:30:3', arabic: "جِئْتُكَ", transliteration: "ji'tuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I bring you", ur: "میں bring تم" } },
      { id: '26:30:4', arabic: "بِشَىْءٍۢ", transliteration: "bishayin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "something", ur: "something" } },
      { id: '26:30:5', arabic: "مُّبِينٍۢ", transliteration: "mubīnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  31: {
    text: "قَالَ فَأْتِ بِهِۦٓ إِن كُنتَ مِنَ ٱلصَّـٰدِقِينَ",
    translation: {
      en: "",
      ur: "فرعون نے کہا اگر سچے ہو تو اسے لاؤ (دکھاؤ)",
    },
    words: [
      { id: '26:31:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:31:2', arabic: "فَأْتِ", transliteration: "fati", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then bring", ur: "پھر bring" } },
      { id: '26:31:3', arabic: "بِهِۦٓ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '26:31:4', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:31:5', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '26:31:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:31:7', arabic: "ٱلصَّـٰدِقِينَ", transliteration: "l-ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the truthful", ur: "the truthful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  32: {
    text: "فَأَلْقَىٰ عَصَاهُ فَإِذَا هِىَ ثُعْبَانٌۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "پس انہوں نے اپنی لاٹھی ڈالی تو وہ اسی وقت صریح اژدہا بن گئی",
    },
    words: [
      { id: '26:32:1', arabic: "فَأَلْقَىٰ", transliteration: "fa-alqā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So he threw", ur: "So وہ threw" } },
      { id: '26:32:2', arabic: "عَصَاهُ", transliteration: "ʿaṣāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his staff", ur: "his staff" } },
      { id: '26:32:3', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and behold", ur: "اور behold" } },
      { id: '26:32:4', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "It", ur: "It" } },
      { id: '26:32:5', arabic: "ثُعْبَانٌۭ", transliteration: "thuʿ'bānun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) a serpent", ur: "(was) a serpent" } },
      { id: '26:32:6', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'عطف' }
      ],
    },
  },
  33: {
    text: "وَنَزَعَ يَدَهُۥ فَإِذَا هِىَ بَيْضَآءُ لِلنَّـٰظِرِينَ",
    translation: {
      en: "",
      ur: "اور اپنا ہاتھ نکالا تو اسی دم دیکھنے والوں کے لئے سفید (براق نظر آنے لگا)",
    },
    words: [
      { id: '26:33:1', arabic: "وَنَزَعَ", transliteration: "wanazaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And he drew out", ur: "اور وہ drew out" } },
      { id: '26:33:2', arabic: "يَدَهُۥ", transliteration: "yadahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "his hand", ur: "his hand" } },
      { id: '26:33:3', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and behold", ur: "اور behold" } },
      { id: '26:33:4', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "It", ur: "It" } },
      { id: '26:33:5', arabic: "بَيْضَآءُ", transliteration: "bayḍāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) white", ur: "(was) white" } },
      { id: '26:33:6', arabic: "لِلنَّـٰظِرِينَ", transliteration: "lilnnāẓirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the observers", ur: "for the observers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'عطف' }
      ],
    },
  },
  34: {
    text: "قَالَ لِلْمَلَإِ حَوْلَهُۥٓ إِنَّ هَـٰذَا لَسَـٰحِرٌ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "فرعون نے اپنے گرد کے سرداروں سے کہا کہ یہ تو کامل فن جادوگر ہے",
    },
    words: [
      { id: '26:34:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:34:2', arabic: "لِلْمَلَإِ", transliteration: "lil'mala-i", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the chiefs", ur: "کو the chiefs" } },
      { id: '26:34:3', arabic: "حَوْلَهُۥٓ", transliteration: "ḥawlahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "around him", ur: "around him" } },
      { id: '26:34:4', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:34:5', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '26:34:6', arabic: "لَسَـٰحِرٌ", transliteration: "lasāḥirun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely a magician", ur: "(is) یقیناً a magician" } },
      { id: '26:34:7', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "learned", ur: "learned" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  35: {
    text: "يُرِيدُ أَن يُخْرِجَكُم مِّنْ أَرْضِكُم بِسِحْرِهِۦ فَمَاذَا تَأْمُرُونَ",
    translation: {
      en: "",
      ur: "چاہتا ہے کہ تم کو اپنے جادو (کے زور) سے تمہارے ملک سے نکال دے تو تمہاری کیا رائے ہے؟",
    },
    words: [
      { id: '26:35:1', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wants", ur: "وہ wants" } },
      { id: '26:35:2', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '26:35:3', arabic: "يُخْرِجَكُم", transliteration: "yukh'rijakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "drive you out", ur: "drive تم out" } },
      { id: '26:35:4', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '26:35:5', arabic: "أَرْضِكُم", transliteration: "arḍikum", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "your land", ur: "your land" } },
      { id: '26:35:6', arabic: "بِسِحْرِهِۦ", transliteration: "bisiḥ'rihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by his magic", ur: "by his magic" } },
      { id: '26:35:7', arabic: "فَمَاذَا", transliteration: "famādhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so what", ur: "so کیا" } },
      { id: '26:35:8', arabic: "تَأْمُرُونَ", transliteration: "tamurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) you advise", ur: "(do) تم advise" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  36: {
    text: "قَالُوٓا۟ أَرْجِهْ وَأَخَاهُ وَٱبْعَثْ فِى ٱلْمَدَآئِنِ حَـٰشِرِينَ",
    translation: {
      en: "",
      ur: "انہوں نے کہا کہ اسے اور اس کے بھائی (کے بارے) میں کچھ توقف کیجیئے اور شہروں میں ہرکارے بھیج دیجیئے",
    },
    words: [
      { id: '26:36:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:36:2', arabic: "أَرْجِهْ", transliteration: "arjih", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Postpone him", ur: "Postpone him" } },
      { id: '26:36:3', arabic: "وَأَخَاهُ", transliteration: "wa-akhāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his brother", ur: "اور his brother" } },
      { id: '26:36:4', arabic: "وَٱبْعَثْ", transliteration: "wa-ib'ʿath", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and send", ur: "اور send" } },
      { id: '26:36:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:36:6', arabic: "ٱلْمَدَآئِنِ", transliteration: "l-madāini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the cities", ur: "the cities" } },
      { id: '26:36:7', arabic: "حَـٰشِرِينَ", transliteration: "ḥāshirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gatherers ", ur: "gatherers " } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  37: {
    text: "يَأْتُوكَ بِكُلِّ سَحَّارٍ عَلِيمٍۢ",
    translation: {
      en: "",
      ur: "کہ سب ماہر جادوگروں کو (جمع کرکے) آپ کے پاس لے آئیں",
    },
    words: [
      { id: '26:37:1', arabic: "يَأْتُوكَ", transliteration: "yatūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They (will) bring to you", ur: "وہ لوگ (will) bring کو تم" } },
      { id: '26:37:2', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '26:37:3', arabic: "سَحَّارٍ", transliteration: "saḥḥārin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "magician", ur: "magician" } },
      { id: '26:37:4', arabic: "عَلِيمٍۢ", transliteration: "ʿalīmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "learned", ur: "learned" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  38: {
    text: "فَجُمِعَ ٱلسَّحَرَةُ لِمِيقَـٰتِ يَوْمٍۢ مَّعْلُومٍۢ",
    translation: {
      en: "",
      ur: "تو جادوگر ایک مقررہ دن کی میعاد پر جمع ہوگئے",
    },
    words: [
      { id: '26:38:1', arabic: "فَجُمِعَ", transliteration: "fajumiʿa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So were assembled", ur: "So were assembled" } },
      { id: '26:38:2', arabic: "ٱلسَّحَرَةُ", transliteration: "l-saḥaratu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magicians", ur: "the magicians" } },
      { id: '26:38:3', arabic: "لِمِيقَـٰتِ", transliteration: "limīqāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for (the) appointment", ur: "for (the) appointment" } },
      { id: '26:38:4', arabic: "يَوْمٍۢ", transliteration: "yawmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(on) a day", ur: "(پر) a دن" } },
      { id: '26:38:5', arabic: "مَّعْلُومٍۢ", transliteration: "maʿlūmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "well-known", ur: "well-known" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  39: {
    text: "وَقِيلَ لِلنَّاسِ هَلْ أَنتُم مُّجْتَمِعُونَ",
    translation: {
      en: "",
      ur: "اور لوگوں سے کہہ دیا گیا کہ تم (سب) کو اکھٹے ہو کر جانا چاہیئے",
    },
    words: [
      { id: '26:39:1', arabic: "وَقِيلَ", transliteration: "waqīla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And it was said", ur: "اور it was کہا" } },
      { id: '26:39:2', arabic: "لِلنَّاسِ", transliteration: "lilnnāsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the people", ur: "کو the لوگ" } },
      { id: '26:39:3', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Will", ur: "Will" } },
      { id: '26:39:4', arabic: "أَنتُم", transliteration: "antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '26:39:5', arabic: "مُّجْتَمِعُونَ", transliteration: "muj'tamiʿūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "assemble", ur: "assemble" } }
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
  40: {
    text: "لَعَلَّنَا نَتَّبِعُ ٱلسَّحَرَةَ إِن كَانُوا۟ هُمُ ٱلْغَـٰلِبِينَ",
    translation: {
      en: "",
      ur: "تاکہ اگر جادوگر غالب رہیں تو ہم ان کے پیرو ہوجائیں",
    },
    words: [
      { id: '26:40:1', arabic: "لَعَلَّنَا", transliteration: "laʿallanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That we may", ur: "وہ ہم may" } },
      { id: '26:40:2', arabic: "نَتَّبِعُ", transliteration: "nattabiʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow", ur: "follow" } },
      { id: '26:40:3', arabic: "ٱلسَّحَرَةَ", transliteration: "l-saḥarata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magicians", ur: "the magicians" } },
      { id: '26:40:4', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:40:5', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they are", ur: "وہ لوگ are" } },
      { id: '26:40:6', arabic: "هُمُ", transliteration: "humu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are", ur: "وہ لوگ are" } },
      { id: '26:40:7', arabic: "ٱلْغَـٰلِبِينَ", transliteration: "l-ghālibīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the victorious", ur: "the victorious" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  41: {
    text: "فَلَمَّا جَآءَ ٱلسَّحَرَةُ قَالُوا۟ لِفِرْعَوْنَ أَئِنَّ لَنَا لَأَجْرًا إِن كُنَّا نَحْنُ ٱلْغَـٰلِبِينَ",
    translation: {
      en: "",
      ur: "جب جادوگر آگئے تو فرعون سے کہنے لگے اگر ہم غالب رہے تو ہمیں صلہ بھی عطا ہوگا؟",
    },
    words: [
      { id: '26:41:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '26:41:2', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '26:41:3', arabic: "ٱلسَّحَرَةُ", transliteration: "l-saḥaratu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magicians", ur: "the magicians" } },
      { id: '26:41:4', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '26:41:5', arabic: "لِفِرْعَوْنَ", transliteration: "lifir'ʿawna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Firaun", ur: "کو Firaun" } },
      { id: '26:41:6', arabic: "أَئِنَّ", transliteration: "a-inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is there", ur: "Is there" } },
      { id: '26:41:7', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for us", ur: "for us" } },
      { id: '26:41:8', arabic: "لَأَجْرًا", transliteration: "la-ajran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a reward", ur: "a ثواب" } },
      { id: '26:41:9', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:41:10', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we are", ur: "ہم are" } },
      { id: '26:41:11', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "we are", ur: "ہم are" } },
      { id: '26:41:12', arabic: "ٱلْغَـٰلِبِينَ", transliteration: "l-ghālibīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the victorious", ur: "the victorious" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  42: {
    text: "قَالَ نَعَمْ وَإِنَّكُمْ إِذًۭا لَّمِنَ ٱلْمُقَرَّبِينَ",
    translation: {
      en: "",
      ur: "فرعون نے کہا ہاں اور تم مقربوں میں بھی داخل کرلئے جاؤ گے",
    },
    words: [
      { id: '26:42:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:42:2', arabic: "نَعَمْ", transliteration: "naʿam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Yes", ur: "Yes" } },
      { id: '26:42:3', arabic: "وَإِنَّكُمْ", transliteration: "wa-innakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed you", ur: "اور بیشک تم" } },
      { id: '26:42:4', arabic: "إِذًۭا", transliteration: "idhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '26:42:5', arabic: "لَّمِنَ", transliteration: "lamina", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely (will be) of", ur: "یقیناً (will be) of" } },
      { id: '26:42:6', arabic: "ٱلْمُقَرَّبِينَ", transliteration: "l-muqarabīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who are brought near", ur: "the ones جو are brought near" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  43: {
    text: "قَالَ لَهُم مُّوسَىٰٓ أَلْقُوا۟ مَآ أَنتُم مُّلْقُونَ",
    translation: {
      en: "",
      ur: "موسیٰ نے ان سے کہا کہ جو چیز ڈالنی چاہتے ہو، ڈالو",
    },
    words: [
      { id: '26:43:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '26:43:2', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:43:3', arabic: "مُّوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Musa", ur: "Musa" } },
      { id: '26:43:4', arabic: "أَلْقُوا۟", transliteration: "alqū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Throw", ur: "Throw" } },
      { id: '26:43:5', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '26:43:6', arabic: "أَنتُم", transliteration: "antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '26:43:7', arabic: "مُّلْقُونَ", transliteration: "mul'qūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) going to throw", ur: "(are) going کو throw" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ],
    },
  },
  44: {
    text: "فَأَلْقَوْا۟ حِبَالَهُمْ وَعِصِيَّهُمْ وَقَالُوا۟ بِعِزَّةِ فِرْعَوْنَ إِنَّا لَنَحْنُ ٱلْغَـٰلِبُونَ",
    translation: {
      en: "",
      ur: "تو انہوں نے اپنی رسیاں اور لاٹھیاں ڈالیں اور کہنے لگے کہ فرعون کے اقبال کی قسم ہم ضرور غالب رہیں گے",
    },
    words: [
      { id: '26:44:1', arabic: "فَأَلْقَوْا۟", transliteration: "fa-alqaw", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So they threw", ur: "So وہ لوگ threw" } },
      { id: '26:44:2', arabic: "حِبَالَهُمْ", transliteration: "ḥibālahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their ropes", ur: "their ropes" } },
      { id: '26:44:3', arabic: "وَعِصِيَّهُمْ", transliteration: "waʿiṣiyyahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their staffs", ur: "اور their staffs" } },
      { id: '26:44:4', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and said", ur: "اور کہا" } },
      { id: '26:44:5', arabic: "بِعِزَّةِ", transliteration: "biʿizzati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "By the might", ur: "By the might" } },
      { id: '26:44:6', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '26:44:7', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, we", ur: "بیشک, ہم" } },
      { id: '26:44:8', arabic: "لَنَحْنُ", transliteration: "lanaḥnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, we", ur: "یقیناً, ہم" } },
      { id: '26:44:9', arabic: "ٱلْغَـٰلِبُونَ", transliteration: "l-ghālibūna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(are) the victorious", ur: "(are) the victorious" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  45: {
    text: "فَأَلْقَىٰ مُوسَىٰ عَصَاهُ فَإِذَا هِىَ تَلْقَفُ مَا يَأْفِكُونَ",
    translation: {
      en: "",
      ur: "پھر موسیٰ نے اپنی لاٹھی ڈالی تو وہ ان چیزوں کو جو جادوگروں نے بنائی تھیں یکایک نگلنے لگی",
    },
    words: [
      { id: '26:45:1', arabic: "فَأَلْقَىٰ", transliteration: "fa-alqā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then threw", ur: "پھر threw" } },
      { id: '26:45:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '26:45:3', arabic: "عَصَاهُ", transliteration: "ʿaṣāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his staff", ur: "his staff" } },
      { id: '26:45:4', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and behold", ur: "اور behold" } },
      { id: '26:45:5', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "It", ur: "It" } },
      { id: '26:45:6', arabic: "تَلْقَفُ", transliteration: "talqafu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "swallowed", ur: "swallowed" } },
      { id: '26:45:7', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '26:45:8', arabic: "يَأْفِكُونَ", transliteration: "yafikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they falsified", ur: "وہ لوگ falsified" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'موصول + صلة' }
      ],
    },
  },
  46: {
    text: "فَأُلْقِىَ ٱلسَّحَرَةُ سَـٰجِدِينَ",
    translation: {
      en: "",
      ur: "تب جادوگر سجدے میں گر پڑے",
    },
    words: [
      { id: '26:46:1', arabic: "فَأُلْقِىَ", transliteration: "fa-ul'qiya", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then fell down", ur: "پھر fell down" } },
      { id: '26:46:2', arabic: "ٱلسَّحَرَةُ", transliteration: "l-saḥaratu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magicians", ur: "the magicians" } },
      { id: '26:46:3', arabic: "سَـٰجِدِينَ", transliteration: "sājidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "prostrate", ur: "prostrate" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  47: {
    text: "قَالُوٓا۟ ءَامَنَّا بِرَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "(اور) کہنے لگے کہ ہم تمام جہان کے مالک پر ایمان لے آئے",
    },
    words: [
      { id: '26:47:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:47:2', arabic: "ءَامَنَّا", transliteration: "āmannā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We believe", ur: "ہم ایمان لانا" } },
      { id: '26:47:3', arabic: "بِرَبِّ", transliteration: "birabbi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in (the) Lord", ur: "میں (the) رب" } },
      { id: '26:47:4', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  48: {
    text: "رَبِّ مُوسَىٰ وَهَـٰرُونَ",
    translation: {
      en: "",
      ur: "جو موسیٰ اور ہارون کا مالک ہے",
    },
    words: [
      { id: '26:48:1', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lord", ur: "رب" } },
      { id: '26:48:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "(of) Musa", ur: "(of) Musa" } },
      { id: '26:48:3', arabic: "وَهَـٰرُونَ", transliteration: "wahārūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Harun", ur: "اور Harun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  49: {
    text: "قَالَ ءَامَنتُمْ لَهُۥ قَبْلَ أَنْ ءَاذَنَ لَكُمْ ۖ إِنَّهُۥ لَكَبِيرُكُمُ ٱلَّذِى عَلَّمَكُمُ ٱلسِّحْرَ فَلَسَوْفَ تَعْلَمُونَ ۚ لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَـٰفٍۢ وَلَأُصَلِّبَنَّكُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "فرعون نے کہا کیا اس سے پہلے کہ میں تم کو اجازت دوں تم اس پر ایمان لے آئے، بےشک یہ تمہارا بڑا ہے جس نے تم کو جادو سکھایا ہے۔ سو عنقریب تم (اس کا انجام) معلوم کرلو گے کہ میں تمہارے ہاتھ اور پاؤں اطراف مخالف سے کٹوا دوں گا اور تم سب کو سولی پر چڑھوا دوں گا",
    },
    words: [
      { id: '26:49:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:49:2', arabic: "ءَامَنتُمْ", transliteration: "āmantum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You believed", ur: "تم ایمان لائے" } },
      { id: '26:49:3', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in him", ur: "میں him" } },
      { id: '26:49:4', arabic: "قَبْلَ", transliteration: "qabla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '26:49:5', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '26:49:6', arabic: "ءَاذَنَ", transliteration: "ādhana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I gave permission", ur: "میں gave permission" } },
      { id: '26:49:7', arabic: "لَكُمْ ۖ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '26:49:8', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '26:49:9', arabic: "لَكَبِيرُكُمُ", transliteration: "lakabīrukumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely your chief", ur: "(is) یقیناً your chief" } },
      { id: '26:49:10', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '26:49:11', arabic: "عَلَّمَكُمُ", transliteration: "ʿallamakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has taught you", ur: "has taught تم" } },
      { id: '26:49:12', arabic: "ٱلسِّحْرَ", transliteration: "l-siḥ'ra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the magic", ur: "the magic" } },
      { id: '26:49:13', arabic: "فَلَسَوْفَ", transliteration: "falasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so surely soon", ur: "so یقیناً soon" } },
      { id: '26:49:14', arabic: "تَعْلَمُونَ ۚ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you will know", ur: "تم will جاننا" } },
      { id: '26:49:15', arabic: "لَأُقَطِّعَنَّ", transliteration: "la-uqaṭṭiʿanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will surely cut off", ur: "میں will یقیناً cut off" } },
      { id: '26:49:16', arabic: "أَيْدِيَكُمْ", transliteration: "aydiyakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your hands", ur: "your hands" } },
      { id: '26:49:17', arabic: "وَأَرْجُلَكُم", transliteration: "wa-arjulakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your feet", ur: "اور your feet" } },
      { id: '26:49:18', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:49:19', arabic: "خِلَـٰفٍۢ", transliteration: "khilāfin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "opposite sides", ur: "opposite sides" } },
      { id: '26:49:20', arabic: "وَلَأُصَلِّبَنَّكُمْ", transliteration: "wala-uṣallibannakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I will surely crucify you", ur: "اور میں will یقیناً crucify تم" } },
      { id: '26:49:21', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    text: "قَالُوا۟ لَا ضَيْرَ ۖ إِنَّآ إِلَىٰ رَبِّنَا مُنقَلِبُونَ",
    translation: {
      en: "",
      ur: "انہوں نے کہا کہ کچھ نقصان (کی بات) نہیں ہم اپنے پروردگار کی طرف لوٹ جانے والے ہیں",
    },
    words: [
      { id: '26:50:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:50:2', arabic: "لَا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No", ur: "نہیں" } },
      { id: '26:50:3', arabic: "ضَيْرَ ۖ", transliteration: "ḍayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "harm", ur: "harm" } },
      { id: '26:50:4', arabic: "إِنَّآ", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '26:50:5', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '26:50:6', arabic: "رَبِّنَا", transliteration: "rabbinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our Lord", ur: "our رب" } },
      { id: '26:50:7', arabic: "مُنقَلِبُونَ", transliteration: "munqalibūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) return", ur: "(will) return" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  51: {
    text: "إِنَّا نَطْمَعُ أَن يَغْفِرَ لَنَا رَبُّنَا خَطَـٰيَـٰنَآ أَن كُنَّآ أَوَّلَ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "ہمیں امید ہے کہ ہمارا پروردگار ہمارے گناہ بخش دے گا۔ اس لئے کہ ہم اول ایمان لانے والوں میں ہیں",
    },
    words: [
      { id: '26:51:1', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '26:51:2', arabic: "نَطْمَعُ", transliteration: "naṭmaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hope", ur: "hope" } },
      { id: '26:51:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:51:4', arabic: "يَغْفِرَ", transliteration: "yaghfira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will forgive", ur: "will forgive" } },
      { id: '26:51:5', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "us", ur: "us" } },
      { id: '26:51:6', arabic: "رَبُّنَا", transliteration: "rabbunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our Lord", ur: "our رب" } },
      { id: '26:51:7', arabic: "خَطَـٰيَـٰنَآ", transliteration: "khaṭāyānā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our sins", ur: "our sins" } },
      { id: '26:51:8', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '26:51:9', arabic: "كُنَّآ", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we are", ur: "ہم are" } },
      { id: '26:51:10', arabic: "أَوَّلَ", transliteration: "awwala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) first", ur: "(the) first" } },
      { id: '26:51:11', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the believers", ur: "(of) the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  52: {
    text: "۞ وَأَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنْ أَسْرِ بِعِبَادِىٓ إِنَّكُم مُّتَّبَعُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے موسیٰ کی طرف وحی بھیجی کہ ہمارے بندوں کو رات کو لے نکلو کہ (فرعونیوں کی طرف سے) تمہارا تعاقب کیا جائے گا",
    },
    words: [
      { id: '26:52:1', arabic: "۞ وَأَوْحَيْنَآ", transliteration: "wa-awḥaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "And We inspired", ur: "اور ہم inspired" } },
      { id: '26:52:2', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '26:52:3', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '26:52:4', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '26:52:5', arabic: "أَسْرِ", transliteration: "asri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Travel by night", ur: "Travel by رات" } },
      { id: '26:52:6', arabic: "بِعِبَادِىٓ", transliteration: "biʿibādī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with My slaves", ur: "ساتھ My slaves" } },
      { id: '26:52:7', arabic: "إِنَّكُم", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, you", ur: "بیشک, تم" } },
      { id: '26:52:8', arabic: "مُّتَّبَعُونَ", transliteration: "muttabaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) followed", ur: "(will be) followed" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  53: {
    text: "فَأَرْسَلَ فِرْعَوْنُ فِى ٱلْمَدَآئِنِ حَـٰشِرِينَ",
    translation: {
      en: "",
      ur: "تو فرعون نے شہروں میں نقیب راونہ کئے",
    },
    words: [
      { id: '26:53:1', arabic: "فَأَرْسَلَ", transliteration: "fa-arsala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then sent", ur: "پھر sent" } },
      { id: '26:53:2', arabic: "فِرْعَوْنُ", transliteration: "fir'ʿawnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '26:53:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:53:4', arabic: "ٱلْمَدَآئِنِ", transliteration: "l-madāini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the cities", ur: "the cities" } },
      { id: '26:53:5', arabic: "حَـٰشِرِينَ", transliteration: "ḥāshirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gatherers", ur: "gatherers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    text: "إِنَّ هَـٰٓؤُلَآءِ لَشِرْذِمَةٌۭ قَلِيلُونَ",
    translation: {
      en: "",
      ur: "(اور کہا) کہ یہ لوگ تھوڑی سی جماعت ہے",
    },
    words: [
      { id: '26:54:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:54:2', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '26:54:3', arabic: "لَشِرْذِمَةٌۭ", transliteration: "lashir'dhimatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) certainly a band", ur: "(are) certainly a band" } },
      { id: '26:54:4', arabic: "قَلِيلُونَ", transliteration: "qalīlūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "small", ur: "small" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  55: {
    text: "وَإِنَّهُمْ لَنَا لَغَآئِظُونَ",
    translation: {
      en: "",
      ur: "اور یہ ہمیں غصہ دلا رہے ہیں",
    },
    words: [
      { id: '26:55:1', arabic: "وَإِنَّهُمْ", transliteration: "wa-innahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, they", ur: "اور بیشک, وہ لوگ" } },
      { id: '26:55:2', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] us", ur: "[کو] us" } },
      { id: '26:55:3', arabic: "لَغَآئِظُونَ", transliteration: "laghāiẓūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) surely enraging", ur: "(are) یقیناً enraging" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  56: {
    text: "وَإِنَّا لَجَمِيعٌ حَـٰذِرُونَ",
    translation: {
      en: "",
      ur: "اور ہم سب باسازو سامان ہیں",
    },
    words: [
      { id: '26:56:1', arabic: "وَإِنَّا", transliteration: "wa-innā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, we", ur: "اور بیشک, ہم" } },
      { id: '26:56:2', arabic: "لَجَمِيعٌ", transliteration: "lajamīʿun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) surely a multitude", ur: "(are) یقیناً a multitude" } },
      { id: '26:56:3', arabic: "حَـٰذِرُونَ", transliteration: "ḥādhirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "forewarned", ur: "forewarned" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  57: {
    text: "فَأَخْرَجْنَـٰهُم مِّن جَنَّـٰتٍۢ وَعُيُونٍۢ",
    translation: {
      en: "",
      ur: "تو ہم نے ان کو باغوں اور چشموں سے نکال دیا",
    },
    words: [
      { id: '26:57:1', arabic: "فَأَخْرَجْنَـٰهُم", transliteration: "fa-akhrajnāhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We expelled them", ur: "So ہم expelled them" } },
      { id: '26:57:2', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '26:57:3', arabic: "جَنَّـٰتٍۢ", transliteration: "jannātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gardens", ur: "باغات" } },
      { id: '26:57:4', arabic: "وَعُيُونٍۢ", transliteration: "waʿuyūnin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and springs", ur: "اور springs" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  58: {
    text: "وَكُنُوزٍۢ وَمَقَامٍۢ كَرِيمٍۢ",
    translation: {
      en: "",
      ur: "اور خزانوں اور نفیس مکانات سے",
    },
    words: [
      { id: '26:58:1', arabic: "وَكُنُوزٍۢ", transliteration: "wakunūzin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And treasures", ur: "اور treasures" } },
      { id: '26:58:2', arabic: "وَمَقَامٍۢ", transliteration: "wamaqāmin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a place", ur: "اور a place" } },
      { id: '26:58:3', arabic: "كَرِيمٍۢ", transliteration: "karīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "honorable", ur: "honorable" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },
  59: {
    text: "كَذَٰلِكَ وَأَوْرَثْنَـٰهَا بَنِىٓ إِسْرَٰٓءِيلَ",
    translation: {
      en: "",
      ur: "(ان کے ساتھ ہم نے) اس طرح (کیا) اور ان چیزوں کا وارث بنی اسرائیل کو کر دیا",
    },
    words: [
      { id: '26:59:1', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '26:59:2', arabic: "وَأَوْرَثْنَـٰهَا", transliteration: "wa-awrathnāhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We caused to inherit them", ur: "اور ہم caused کو inherit them" } },
      { id: '26:59:3', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children of Israel", ur: "(the) اولاد of Israel" } },
      { id: '26:59:4', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children of Israel", ur: "(the) اولاد of Israel" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  60: {
    text: "فَأَتْبَعُوهُم مُّشْرِقِينَ",
    translation: {
      en: "",
      ur: "تو انہوں نے سورج نکلتے (یعنی صبح کو) ان کا تعاقب کیا",
    },
    words: [
      { id: '26:60:1', arabic: "فَأَتْبَعُوهُم", transliteration: "fa-atbaʿūhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So they followed them", ur: "So وہ لوگ followed them" } },
      { id: '26:60:2', arabic: "مُّشْرِقِينَ", transliteration: "mush'riqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(at) sunrise", ur: "(at) sunrise" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ],
    },
  },
  61: {
    text: "فَلَمَّا تَرَٰٓءَا ٱلْجَمْعَانِ قَالَ أَصْحَـٰبُ مُوسَىٰٓ إِنَّا لَمُدْرَكُونَ",
    translation: {
      en: "",
      ur: "جب دونوں جماعتیں آمنے سامنے ہوئیں تو موسیٰ کے ساتھی کہنے لگے کہ ہم تو پکڑ لئے گئے",
    },
    words: [
      { id: '26:61:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '26:61:2', arabic: "تَرَٰٓءَا", transliteration: "tarāā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "saw each other", ur: "saw ہر other" } },
      { id: '26:61:3', arabic: "ٱلْجَمْعَانِ", transliteration: "l-jamʿāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the two hosts", ur: "the two hosts" } },
      { id: '26:61:4', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '26:61:5', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) companions", ur: "(the) companions" } },
      { id: '26:61:6', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "(of) Musa", ur: "(of) Musa" } },
      { id: '26:61:7', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '26:61:8', arabic: "لَمُدْرَكُونَ", transliteration: "lamud'rakūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) surely to be overtaken", ur: "(are) یقیناً کو be overtaken" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  62: {
    text: "قَالَ كَلَّآ ۖ إِنَّ مَعِىَ رَبِّى سَيَهْدِينِ",
    translation: {
      en: "",
      ur: "موسیٰ نے کہا ہرگز نہیں میرا پروردگار میرے ساتھ ہے وہ مجھے رستہ بتائے گا",
    },
    words: [
      { id: '26:62:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:62:2', arabic: "كَلَّآ ۖ", transliteration: "kallā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '26:62:3', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "indeed", ur: "بیشک" } },
      { id: '26:62:4', arabic: "مَعِىَ", transliteration: "maʿiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with me", ur: "ساتھ me" } },
      { id: '26:62:5', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my Lord", ur: "(is) my رب" } },
      { id: '26:62:6', arabic: "سَيَهْدِينِ", transliteration: "sayahdīni", pos: ['V'], posLabel: 'V', root: "ه د ي", meaning: { en: "He will guide me", ur: "وہ will guide me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  63: {
    text: "فَأَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنِ ٱضْرِب بِّعَصَاكَ ٱلْبَحْرَ ۖ فَٱنفَلَقَ فَكَانَ كُلُّ فِرْقٍۢ كَٱلطَّوْدِ ٱلْعَظِيمِ",
    translation: {
      en: "",
      ur: "اس وقت ہم نے موسیٰ کی طرف وحی بھیجی کہ اپنی لاٹھی دریا پر مارو۔ تو دریا پھٹ گیا۔ اور ہر ایک ٹکڑا (یوں) ہوگیا (کہ) گویا بڑا پہاڑ (ہے)",
    },
    words: [
      { id: '26:63:1', arabic: "فَأَوْحَيْنَآ", transliteration: "fa-awḥaynā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then We inspired", ur: "پھر ہم inspired" } },
      { id: '26:63:2', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '26:63:3', arabic: "مُوسَىٰٓ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '26:63:4', arabic: "أَنِ", transliteration: "ani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '26:63:5', arabic: "ٱضْرِب", transliteration: "iḍ'rib", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Strike", ur: "Strike" } },
      { id: '26:63:6', arabic: "بِّعَصَاكَ", transliteration: "biʿaṣāka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with your staff", ur: "ساتھ your staff" } },
      { id: '26:63:7', arabic: "ٱلْبَحْرَ ۖ", transliteration: "l-baḥra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sea", ur: "the sea" } },
      { id: '26:63:8', arabic: "فَٱنفَلَقَ", transliteration: "fa-infalaqa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So it parted", ur: "So it parted" } },
      { id: '26:63:9', arabic: "فَكَانَ", transliteration: "fakāna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ك و ن", meaning: { en: "and became", ur: "اور became" } },
      { id: '26:63:10', arabic: "كُلُّ", transliteration: "kullu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "each", ur: "ہر" } },
      { id: '26:63:11', arabic: "فِرْقٍۢ", transliteration: "fir'qin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "part", ur: "part" } },
      { id: '26:63:12', arabic: "كَٱلطَّوْدِ", transliteration: "kal-ṭawdi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like the mountain", ur: "like the mountain" } },
      { id: '26:63:13', arabic: "ٱلْعَظِيمِ", transliteration: "l-ʿaẓīmi", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "[the] great", ur: "[the] great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'موصوف + صفت' }
      ],
    },
  },
  64: {
    text: "وَأَزْلَفْنَا ثَمَّ ٱلْـَٔاخَرِينَ",
    translation: {
      en: "",
      ur: "اور دوسروں کو وہاں ہم نے قریب کردیا",
    },
    words: [
      { id: '26:64:1', arabic: "وَأَزْلَفْنَا", transliteration: "wa-azlafnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We brought near", ur: "اور ہم brought near" } },
      { id: '26:64:2', arabic: "ثَمَّ", transliteration: "thamma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "there", ur: "there" } },
      { id: '26:64:3', arabic: "ٱلْـَٔاخَرِينَ", transliteration: "l-ākharīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the others", ur: "the others" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  65: {
    text: "وَأَنجَيْنَا مُوسَىٰ وَمَن مَّعَهُۥٓ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "اور موسیٰ اور ان کے ساتھ والوں کو تو بچا لیا",
    },
    words: [
      { id: '26:65:1', arabic: "وَأَنجَيْنَا", transliteration: "wa-anjaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We saved", ur: "اور ہم saved" } },
      { id: '26:65:2', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '26:65:3', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and who", ur: "اور جو" } },
      { id: '26:65:4', arabic: "مَّعَهُۥٓ", transliteration: "maʿahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) with him", ur: "(were) ساتھ him" } },
      { id: '26:65:5', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
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
  66: {
    text: "ثُمَّ أَغْرَقْنَا ٱلْـَٔاخَرِينَ",
    translation: {
      en: "",
      ur: "پھر دوسروں کو ڈبو دیا",
    },
    words: [
      { id: '26:66:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '26:66:2', arabic: "أَغْرَقْنَا", transliteration: "aghraqnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We drowned", ur: "ہم drowned" } },
      { id: '26:66:3', arabic: "ٱلْـَٔاخَرِينَ", transliteration: "l-ākharīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the others", ur: "the others" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  67: {
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
    translation: {
      en: "",
      ur: "بےشک اس (قصے) میں نشانی ہے۔ لیکن یہ اکثر ایمان لانے والے نہیں",
    },
    words: [
      { id: '26:67:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:67:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:67:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:67:4', arabic: "لَـَٔايَةًۭ ۖ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely (is) a Sign", ur: "یقیناً (is) a نشانی" } },
      { id: '26:67:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '26:67:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '26:67:7', arabic: "أَكْثَرُهُم", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '26:67:8', arabic: "مُّؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  68: {
    text: "وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار تو غالب (اور) مہربان ہے",
    },
    words: [
      { id: '26:68:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '26:68:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '26:68:3', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely He", ur: "یقیناً وہ" } },
      { id: '26:68:4', arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" } },
      { id: '26:68:5', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },
  69: {
    text: "وَٱتْلُ عَلَيْهِمْ نَبَأَ إِبْرَٰهِيمَ",
    translation: {
      en: "",
      ur: "اور ان کو ابراہیم کا حال پڑھ کر سنا دو",
    },
    words: [
      { id: '26:69:1', arabic: "وَٱتْلُ", transliteration: "wa-ut'lu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And recite", ur: "اور recite" } },
      { id: '26:69:2', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:69:3', arabic: "نَبَأَ", transliteration: "naba-a", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) news", ur: "(the) news" } },
      { id: '26:69:4', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Ibrahim", ur: "(of) Ibrahim" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    text: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِۦ مَا تَعْبُدُونَ",
    translation: {
      en: "",
      ur: "جب انہوں نے اپنے باپ اور اپنی قوم کے لوگوں سے کہا کہ تم کس چیز کو پوجتے ہو",
    },
    words: [
      { id: '26:70:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '26:70:2', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '26:70:3', arabic: "لِأَبِيهِ", transliteration: "li-abīhi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to his father", ur: "کو his باپ" } },
      { id: '26:70:4', arabic: "وَقَوْمِهِۦ", transliteration: "waqawmihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "and his people", ur: "اور his لوگ" } },
      { id: '26:70:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "What", ur: "کیا" } },
      { id: '26:70:6', arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) you worship", ur: "(do) تم عبادت" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصول + صلة' }
      ],
    },
  },
  71: {
    text: "قَالُوا۟ نَعْبُدُ أَصْنَامًۭا فَنَظَلُّ لَهَا عَـٰكِفِينَ",
    translation: {
      en: "",
      ur: "وہ کہنے لگے کہ ہم بتوں کو پوجتے ہیں اور ان کی پوجا پر قائم ہیں",
    },
    words: [
      { id: '26:71:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:71:2', arabic: "نَعْبُدُ", transliteration: "naʿbudu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We worship", ur: "ہم عبادت" } },
      { id: '26:71:3', arabic: "أَصْنَامًۭا", transliteration: "aṣnāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "idols", ur: "idols" } },
      { id: '26:71:4', arabic: "فَنَظَلُّ", transliteration: "fanaẓallu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so we will remain", ur: "so ہم will remain" } },
      { id: '26:71:5', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:71:6', arabic: "عَـٰكِفِينَ", transliteration: "ʿākifīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "devoted", ur: "devoted" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  72: {
    text: "قَالَ هَلْ يَسْمَعُونَكُمْ إِذْ تَدْعُونَ",
    translation: {
      en: "",
      ur: "ابراہیم نے کہا کہ جب تم ان کو پکارتے ہو تو کیا وہ تمہاری آواز کو سنتے ہیں؟",
    },
    words: [
      { id: '26:72:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:72:2', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Do", ur: "Do" } },
      { id: '26:72:3', arabic: "يَسْمَعُونَكُمْ", transliteration: "yasmaʿūnakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they hear you", ur: "وہ لوگ سننا تم" } },
      { id: '26:72:4', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '26:72:5', arabic: "تَدْعُونَ", transliteration: "tadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you call", ur: "تم call" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  73: {
    text: "أَوْ يَنفَعُونَكُمْ أَوْ يَضُرُّونَ",
    translation: {
      en: "",
      ur: "یا تمہیں کچھ فائدے دے سکتے یا نقصان پہنچا سکتے ہیں؟",
    },
    words: [
      { id: '26:73:1', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '26:73:2', arabic: "يَنفَعُونَكُمْ", transliteration: "yanfaʿūnakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) they benefit you", ur: "(do) وہ لوگ benefit تم" } },
      { id: '26:73:3', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '26:73:4', arabic: "يَضُرُّونَ", transliteration: "yaḍurrūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they harm (you)", ur: "وہ لوگ harm (تم)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  74: {
    text: "قَالُوا۟ بَلْ وَجَدْنَآ ءَابَآءَنَا كَذَٰلِكَ يَفْعَلُونَ",
    translation: {
      en: "",
      ur: "انہوں نے کہا (نہیں) بلکہ ہم نے اپنے باپ دادا کو اسی طرح کرتے دیکھا ہے",
    },
    words: [
      { id: '26:74:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:74:2', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '26:74:3', arabic: "وَجَدْنَآ", transliteration: "wajadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but we found", ur: "لیکن ہم found" } },
      { id: '26:74:4', arabic: "ءَابَآءَنَا", transliteration: "ābāanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our forefathers", ur: "our forefathers" } },
      { id: '26:74:5', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like that ", ur: "like وہ " } },
      { id: '26:74:6', arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "doing", ur: "doing" } }
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
  75: {
    text: "قَالَ أَفَرَءَيْتُم مَّا كُنتُمْ تَعْبُدُونَ",
    translation: {
      en: "",
      ur: "ابراہیم نے کہا کیا تم نے دیکھا کہ جن کو تم پوجتے رہے ہو",
    },
    words: [
      { id: '26:75:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:75:2', arabic: "أَفَرَءَيْتُم", transliteration: "afara-aytum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you see", ur: "Do تم دیکھنا" } },
      { id: '26:75:3', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '26:75:4', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have been", ur: "تم have been" } },
      { id: '26:75:5', arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "worshipping", ur: "worshipping" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  76: {
    text: "أَنتُمْ وَءَابَآؤُكُمُ ٱلْأَقْدَمُونَ",
    translation: {
      en: "",
      ur: "تم بھی اور تمہارے اگلے باپ دادا بھی",
    },
    words: [
      { id: '26:76:1', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "You", ur: "تم" } },
      { id: '26:76:2', arabic: "وَءَابَآؤُكُمُ", transliteration: "waābāukumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your forefathers", ur: "اور your forefathers" } },
      { id: '26:76:3', arabic: "ٱلْأَقْدَمُونَ", transliteration: "l-aqdamūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "and your forefathers", ur: "اور your forefathers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  77: {
    text: "فَإِنَّهُمْ عَدُوٌّۭ لِّىٓ إِلَّا رَبَّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "وہ میرے دشمن ہیں۔ مگر خدائے رب العالمین (میرا دوست ہے)",
    },
    words: [
      { id: '26:77:1', arabic: "فَإِنَّهُمْ", transliteration: "fa-innahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '26:77:2', arabic: "عَدُوٌّۭ", transliteration: "ʿaduwwun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) enemies", ur: "(are) enemies" } },
      { id: '26:77:3', arabic: "لِّىٓ", transliteration: "lī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to me", ur: "کو me" } },
      { id: '26:77:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '26:77:5', arabic: "رَبَّ", transliteration: "rabba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '26:77:6', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  78: {
    text: "ٱلَّذِى خَلَقَنِى فَهُوَ يَهْدِينِ",
    translation: {
      en: "",
      ur: "جس نے مجھے پیدا کیا ہے اور وہی مجھے رستہ دکھاتا ہے",
    },
    words: [
      { id: '26:78:1', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "The One Who", ur: "The One جو" } },
      { id: '26:78:2', arabic: "خَلَقَنِى", transliteration: "khalaqanī", pos: ['N'], posLabel: 'N', root: "خ ل ق", meaning: { en: "created me", ur: "پیدا کیا me" } },
      { id: '26:78:3', arabic: "فَهُوَ", transliteration: "fahuwa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and He", ur: "اور وہ" } },
      { id: '26:78:4', arabic: "يَهْدِينِ", transliteration: "yahdīni", pos: ['V'], posLabel: 'V', root: "ه د ي", meaning: { en: "guides me", ur: "guides me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  79: {
    text: "وَٱلَّذِى هُوَ يُطْعِمُنِى وَيَسْقِينِ",
    translation: {
      en: "",
      ur: "اور وہ جو مجھے کھلاتا اور پلاتا ہے",
    },
    words: [
      { id: '26:79:1', arabic: "وَٱلَّذِى", transliteration: "wa-alladhī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the One Who", ur: "اور the One جو" } },
      { id: '26:79:2', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[He]", ur: "[وہ]" } },
      { id: '26:79:3', arabic: "يُطْعِمُنِى", transliteration: "yuṭ'ʿimunī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "gives me food", ur: "gives me food" } },
      { id: '26:79:4', arabic: "وَيَسْقِينِ", transliteration: "wayasqīni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and gives me drink", ur: "اور gives me drink" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  80: {
    text: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
    translation: {
      en: "",
      ur: "اور جب میں بیمار پڑتا ہوں تو مجھے شفا بخشتا ہے",
    },
    words: [
      { id: '26:80:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '26:80:2', arabic: "مَرِضْتُ", transliteration: "mariḍ'tu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am ill", ur: "میں am ill" } },
      { id: '26:80:3', arabic: "فَهُوَ", transliteration: "fahuwa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then He", ur: "پھر وہ" } },
      { id: '26:80:4', arabic: "يَشْفِينِ", transliteration: "yashfīni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "cures me", ur: "cures me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  81: {
    text: "وَٱلَّذِى يُمِيتُنِى ثُمَّ يُحْيِينِ",
    translation: {
      en: "",
      ur: "اور جو مجھے مارے گا اور پھر زندہ کرے گا",
    },
    words: [
      { id: '26:81:1', arabic: "وَٱلَّذِى", transliteration: "wa-alladhī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the One Who", ur: "اور the One جو" } },
      { id: '26:81:2', arabic: "يُمِيتُنِى", transliteration: "yumītunī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will cause me to die", ur: "will cause me کو die" } },
      { id: '26:81:3', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '26:81:4', arabic: "يُحْيِينِ", transliteration: "yuḥ'yīni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he will give me life", ur: "وہ will give me زندگی" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  82: {
    text: "وَٱلَّذِىٓ أَطْمَعُ أَن يَغْفِرَ لِى خَطِيٓـَٔتِى يَوْمَ ٱلدِّينِ",
    translation: {
      en: "",
      ur: "اور وہ جس سے میں امید رکھتا ہوں کہ قیامت کے دن میرے گناہ بخشے گا",
    },
    words: [
      { id: '26:82:1', arabic: "وَٱلَّذِىٓ", transliteration: "wa-alladhī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the One Who ", ur: "اور the One جو " } },
      { id: '26:82:2', arabic: "أَطْمَعُ", transliteration: "aṭmaʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I hope", ur: "میں hope" } },
      { id: '26:82:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:82:4', arabic: "يَغْفِرَ", transliteration: "yaghfira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will forgive", ur: "وہ will forgive" } },
      { id: '26:82:5', arabic: "لِى", transliteration: "lī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for me", ur: "for me" } },
      { id: '26:82:6', arabic: "خَطِيٓـَٔتِى", transliteration: "khaṭīatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my faults", ur: "my faults" } },
      { id: '26:82:7', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '26:82:8', arabic: "ٱلدِّينِ", transliteration: "l-dīni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Judgment", ur: "(of) the Judgment" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  83: {
    text: "رَبِّ هَبْ لِى حُكْمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ",
    translation: {
      en: "",
      ur: "اے پروردگار مجھے علم ودانش عطا فرما اور نیکوکاروں میں شامل کر",
    },
    words: [
      { id: '26:83:1', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '26:83:2', arabic: "هَبْ", transliteration: "hab", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Grant", ur: "Grant" } },
      { id: '26:83:3', arabic: "لِى", transliteration: "lī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[for] me", ur: "[for] me" } },
      { id: '26:83:4', arabic: "حُكْمًۭا", transliteration: "ḥuk'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wisdom", ur: "wisdom" } },
      { id: '26:83:5', arabic: "وَأَلْحِقْنِى", transliteration: "wa-alḥiq'nī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and join me", ur: "اور join me" } },
      { id: '26:83:6', arabic: "بِٱلصَّـٰلِحِينَ", transliteration: "bil-ṣāliḥīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the righteous", ur: "ساتھ the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  84: {
    text: "وَٱجْعَل لِّى لِسَانَ صِدْقٍۢ فِى ٱلْـَٔاخِرِينَ",
    translation: {
      en: "",
      ur: "اور پچھلے لوگوں میں میرا ذکر نیک (جاری) کر",
    },
    words: [
      { id: '26:84:1', arabic: "وَٱجْعَل", transliteration: "wa-ij'ʿal", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And grant", ur: "اور grant" } },
      { id: '26:84:2', arabic: "لِّى", transliteration: "lī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[for] me", ur: "[for] me" } },
      { id: '26:84:3', arabic: "لِسَانَ", transliteration: "lisāna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a mention", ur: "a mention" } },
      { id: '26:84:4', arabic: "صِدْقٍۢ", transliteration: "ṣid'qin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) honor", ur: "(of) honor" } },
      { id: '26:84:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "among", ur: "among" } },
      { id: '26:84:6', arabic: "ٱلْـَٔاخِرِينَ", transliteration: "l-ākhirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the later (generations)", ur: "the later (generations)" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  85: {
    text: "وَٱجْعَلْنِى مِن وَرَثَةِ جَنَّةِ ٱلنَّعِيمِ",
    translation: {
      en: "",
      ur: "اور مجھے نعمت کی بہشت کے وارثوں میں کر",
    },
    words: [
      { id: '26:85:1', arabic: "وَٱجْعَلْنِى", transliteration: "wa-ij'ʿalnī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And make me", ur: "اور make me" } },
      { id: '26:85:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:85:3', arabic: "وَرَثَةِ", transliteration: "warathati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(the) inheritors", ur: "(the) inheritors" } },
      { id: '26:85:4', arabic: "جَنَّةِ", transliteration: "jannati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Garden(s)", ur: "(of) Garden(s)" } },
      { id: '26:85:5', arabic: "ٱلنَّعِيمِ", transliteration: "l-naʿīmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Delight", ur: "(of) Delight" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  86: {
    text: "وَٱغْفِرْ لِأَبِىٓ إِنَّهُۥ كَانَ مِنَ ٱلضَّآلِّينَ",
    translation: {
      en: "",
      ur: "اور میرے باپ کو بخش دے کہ وہ گمراہوں میں سے ہے",
    },
    words: [
      { id: '26:86:1', arabic: "وَٱغْفِرْ", transliteration: "wa-igh'fir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And forgive", ur: "اور forgive" } },
      { id: '26:86:2', arabic: "لِأَبِىٓ", transliteration: "li-abī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "my father", ur: "my باپ" } },
      { id: '26:86:3', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '26:86:4', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '26:86:5', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:86:6', arabic: "ٱلضَّآلِّينَ", transliteration: "l-ḍālīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those astray", ur: "those astray" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  87: {
    text: "وَلَا تُخْزِنِى يَوْمَ يُبْعَثُونَ",
    translation: {
      en: "",
      ur: "اور جس دن لوگ اٹھا کھڑے کئے جائیں گے مجھے رسوا نہ کیجیو",
    },
    words: [
      { id: '26:87:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '26:87:2', arabic: "تُخْزِنِى", transliteration: "tukh'zinī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disgrace me", ur: "disgrace me" } },
      { id: '26:87:3', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '26:87:4', arabic: "يُبْعَثُونَ", transliteration: "yub'ʿathūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are resurrected", ur: "وہ لوگ are resurrected" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  88: {
    text: "يَوْمَ لَا يَنفَعُ مَالٌۭ وَلَا بَنُونَ",
    translation: {
      en: "",
      ur: "جس دن نہ مال ہی کچھ فائدہ دے سکا گا اور نہ بیٹے",
    },
    words: [
      { id: '26:88:1', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(The) Day", ur: "(The) دن" } },
      { id: '26:88:2', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '26:88:3', arabic: "يَنفَعُ", transliteration: "yanfaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will benefit", ur: "will benefit" } },
      { id: '26:88:4', arabic: "مَالٌۭ", transliteration: "mālun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wealth", ur: "wealth" } },
      { id: '26:88:5', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '26:88:6', arabic: "بَنُونَ", transliteration: "banūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sons", ur: "sons" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  89: {
    text: "إِلَّا مَنْ أَتَى ٱللَّهَ بِقَلْبٍۢ سَلِيمٍۢ",
    translation: {
      en: "",
      ur: "ہاں جو شخص خدا کے پاس پاک دل لے کر آیا (وہ بچ جائے گا)",
    },
    words: [
      { id: '26:89:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '26:89:2', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(he) who", ur: "(وہ) جو" } },
      { id: '26:89:3', arabic: "أَتَى", transliteration: "atā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '26:89:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Allah", ur: "(کو) اللہ" } },
      { id: '26:89:5', arabic: "بِقَلْبٍۢ", transliteration: "biqalbin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a heart", ur: "ساتھ a دل" } },
      { id: '26:89:6', arabic: "سَلِيمٍۢ", transliteration: "salīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sound", ur: "sound" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  90: {
    text: "وَأُزْلِفَتِ ٱلْجَنَّةُ لِلْمُتَّقِينَ",
    translation: {
      en: "",
      ur: "اور بہشت پرہیزگاروں کے قریب کردی جائے گی",
    },
    words: [
      { id: '26:90:1', arabic: "وَأُزْلِفَتِ", transliteration: "wa-uz'lifati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (will be) brought near", ur: "اور (will be) brought near" } },
      { id: '26:90:2', arabic: "ٱلْجَنَّةُ", transliteration: "l-janatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Paradise", ur: "the جنت" } },
      { id: '26:90:3', arabic: "لِلْمُتَّقِينَ", transliteration: "lil'muttaqīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the righteous", ur: "for the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  91: {
    text: "وَبُرِّزَتِ ٱلْجَحِيمُ لِلْغَاوِينَ",
    translation: {
      en: "",
      ur: "اور دوزخ گمراہوں کے سامنے لائی جائے گی",
    },
    words: [
      { id: '26:91:1', arabic: "وَبُرِّزَتِ", transliteration: "waburrizati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (will be) made manifest", ur: "اور (will be) made manifest" } },
      { id: '26:91:2', arabic: "ٱلْجَحِيمُ", transliteration: "l-jaḥīmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hellfire", ur: "the جہنم" } },
      { id: '26:91:3', arabic: "لِلْغَاوِينَ", transliteration: "lil'ghāwīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the deviators", ur: "کو the deviators" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  92: {
    text: "وَقِيلَ لَهُمْ أَيْنَ مَا كُنتُمْ تَعْبُدُونَ",
    translation: {
      en: "",
      ur: "اور ان سے کہا جائے گا کہ جن کو تم پوجتے تھے وہ کہاں ہیں؟",
    },
    words: [
      { id: '26:92:1', arabic: "وَقِيلَ", transliteration: "waqīla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And it will be said", ur: "اور it will be کہا" } },
      { id: '26:92:2', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:92:3', arabic: "أَيْنَ", transliteration: "ayna", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Where", ur: "Where" } },
      { id: '26:92:4', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) that", ur: "(is) وہ" } },
      { id: '26:92:5', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used", ur: "تم used" } },
      { id: '26:92:6', arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) worship", ur: "(کو) عبادت" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' }
      ],
    },
  },
  93: {
    text: "مِن دُونِ ٱللَّهِ هَلْ يَنصُرُونَكُمْ أَوْ يَنتَصِرُونَ",
    translation: {
      en: "",
      ur: "یعنی جن کو خدا کے سوا (پوجتے تھے) کیا وہ تمہاری مدد کرسکتے ہیں یا خود بدلہ لے سکتے ہیں",
    },
    words: [
      { id: '26:93:1', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "Besides Allah", ur: "Besides اللہ" } },
      { id: '26:93:2', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "Besides Allah", ur: "Besides اللہ" } },
      { id: '26:93:3', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Besides Allah", ur: "Besides اللہ" } },
      { id: '26:93:4', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Can", ur: "Can" } },
      { id: '26:93:5', arabic: "يَنصُرُونَكُمْ", transliteration: "yanṣurūnakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they help you", ur: "وہ لوگ help تم" } },
      { id: '26:93:6', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '26:93:7', arabic: "يَنتَصِرُونَ", transliteration: "yantaṣirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "help themselves", ur: "help themselves" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
  },
  94: {
    text: "فَكُبْكِبُوا۟ فِيهَا هُمْ وَٱلْغَاوُۥنَ",
    translation: {
      en: "",
      ur: "تو وہ اور گمراہ (یعنی بت اور بت پرست) اوندھے منہ دوزخ میں ڈال دیئے جائیں گے",
    },
    words: [
      { id: '26:94:1', arabic: "فَكُبْكِبُوا۟", transliteration: "fakub'kibū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then they will be overturned", ur: "پھر وہ لوگ will be overturned" } },
      { id: '26:94:2', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "into it", ur: "into it" } },
      { id: '26:94:3', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '26:94:4', arabic: "وَٱلْغَاوُۥنَ", transliteration: "wal-ghāwūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the deviators", ur: "اور the deviators" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  95: {
    text: "وَجُنُودُ إِبْلِيسَ أَجْمَعُونَ",
    translation: {
      en: "",
      ur: "اور شیطان کے لشکر سب کے سب (داخل جہنم ہوں گے)",
    },
    words: [
      { id: '26:95:1', arabic: "وَجُنُودُ", transliteration: "wajunūdu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (the) hosts", ur: "اور (the) hosts" } },
      { id: '26:95:2', arabic: "إِبْلِيسَ", transliteration: "ib'līsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Iblis", ur: "(of) Iblis" } },
      { id: '26:95:3', arabic: "أَجْمَعُونَ", transliteration: "ajmaʿūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all together", ur: "سب together" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  96: {
    text: "قَالُوا۟ وَهُمْ فِيهَا يَخْتَصِمُونَ",
    translation: {
      en: "",
      ur: "وہ آپس میں جھگڑیں گے اور کہیں گے",
    },
    words: [
      { id: '26:96:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They (will) say", ur: "وہ لوگ (will) کہو" } },
      { id: '26:96:2', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '26:96:3', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '26:96:4', arabic: "يَخْتَصِمُونَ", transliteration: "yakhtaṣimūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) disputing", ur: "(are) disputing" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  97: {
    text: "تَٱللَّهِ إِن كُنَّا لَفِى ضَلَـٰلٍۢ مُّبِينٍ",
    translation: {
      en: "",
      ur: "کہ خدا کی قسم ہم تو صریح گمراہی میں تھے",
    },
    words: [
      { id: '26:97:1', arabic: "تَٱللَّهِ", transliteration: "tal-lahi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "By Allah", ur: "By اللہ" } },
      { id: '26:97:2', arabic: "إِن", transliteration: "in", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "indeed", ur: "بیشک" } },
      { id: '26:97:3', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we were", ur: "ہم were" } },
      { id: '26:97:4', arabic: "لَفِى", transliteration: "lafī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely in", ur: "یقیناً میں" } },
      { id: '26:97:5', arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "error", ur: "error" } },
      { id: '26:97:6', arabic: "مُّبِينٍ", transliteration: "mubīnin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  98: {
    text: "إِذْ نُسَوِّيكُم بِرَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "جب کہ تمہیں (خدائے) رب العالمین کے برابر ٹھہراتے تھے",
    },
    words: [
      { id: '26:98:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '26:98:2', arabic: "نُسَوِّيكُم", transliteration: "nusawwīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we equated you", ur: "ہم equated تم" } },
      { id: '26:98:3', arabic: "بِرَبِّ", transliteration: "birabbi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with (the) Lord", ur: "ساتھ (the) رب" } },
      { id: '26:98:4', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  99: {
    text: "وَمَآ أَضَلَّنَآ إِلَّا ٱلْمُجْرِمُونَ",
    translation: {
      en: "",
      ur: "اور ہم کو ان گنہگاروں ہی نے گمراہ کیا تھا",
    },
    words: [
      { id: '26:99:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:99:2', arabic: "أَضَلَّنَآ", transliteration: "aḍallanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "misguided us", ur: "misguided us" } },
      { id: '26:99:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '26:99:4', arabic: "ٱلْمُجْرِمُونَ", transliteration: "l-muj'rimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the criminals", ur: "the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  100: {
    text: "فَمَا لَنَا مِن شَـٰفِعِينَ",
    translation: {
      en: "",
      ur: "تو (آج) نہ کوئی ہمارا سفارش کرنے والا ہے",
    },
    words: [
      { id: '26:100:1', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So (now) not", ur: "So (now) نہیں" } },
      { id: '26:100:2', arabic: "لَنَا", transliteration: "lanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have", ur: "ہم have" } },
      { id: '26:100:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '26:100:4', arabic: "شَـٰفِعِينَ", transliteration: "shāfiʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "intercessors", ur: "intercessors" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  101: {
    text: "وَلَا صَدِيقٍ حَمِيمٍۢ",
    translation: {
      en: "",
      ur: "اور نہ گرم جوش دوست",
    },
    words: [
      { id: '26:101:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:101:2', arabic: "صَدِيقٍ", transliteration: "ṣadīqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a friend", ur: "a friend" } },
      { id: '26:101:3', arabic: "حَمِيمٍۢ", transliteration: "ḥamīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "close", ur: "close" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  102: {
    text: "فَلَوْ أَنَّ لَنَا كَرَّةًۭ فَنَكُونَ مِنَ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "کاش ہمیں (دنیا میں) پھر جانا ہو تم ہم مومنوں میں ہوجائیں",
    },
    words: [
      { id: '26:102:1', arabic: "فَلَوْ", transliteration: "falaw", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then if", ur: "پھر if" } },
      { id: '26:102:2', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:102:3', arabic: "لَنَا", transliteration: "lanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we had", ur: "ہم had" } },
      { id: '26:102:4', arabic: "كَرَّةًۭ", transliteration: "karratan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a return", ur: "a return" } },
      { id: '26:102:5', arabic: "فَنَكُونَ", transliteration: "fanakūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then we could be", ur: "پھر ہم could be" } },
      { id: '26:102:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:102:7', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  103: {
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
    translation: {
      en: "",
      ur: "بےشک اس میں نشانی ہے اور ان میں اکثر ایمان لانے والے نہیں",
    },
    words: [
      { id: '26:103:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:103:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:103:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:103:4', arabic: "لَـَٔايَةًۭ ۖ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely is a Sign", ur: "یقیناً is a نشانی" } },
      { id: '26:103:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '26:103:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '26:103:7', arabic: "أَكْثَرُهُم", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '26:103:8', arabic: "مُّؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  104: {
    text: "وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار تو غالب اور مہربان ہے",
    },
    words: [
      { id: '26:104:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '26:104:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '26:104:3', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely He", ur: "یقیناً وہ" } },
      { id: '26:104:4', arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" } },
      { id: '26:104:5', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },
  105: {
    text: "كَذَّبَتْ قَوْمُ نُوحٍ ٱلْمُرْسَلِينَ",
    translation: {
      en: "",
      ur: "قوم نوح نے بھی پیغمبروں کو جھٹلایا",
    },
    words: [
      { id: '26:105:1', arabic: "كَذَّبَتْ", transliteration: "kadhabat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Denied", ur: "Denied" } },
      { id: '26:105:2', arabic: "قَوْمُ", transliteration: "qawmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '26:105:3', arabic: "نُوحٍ", transliteration: "nūḥin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Nuh", ur: "(of) Nuh" } },
      { id: '26:105:4', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  106: {
    text: "إِذْ قَالَ لَهُمْ أَخُوهُمْ نُوحٌ أَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "جب ان سے ان کے بھائی نوح نے کہا کہ تم ڈرتے کیوں نہیں",
    },
    words: [
      { id: '26:106:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '26:106:2', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '26:106:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:106:4', arabic: "أَخُوهُمْ", transliteration: "akhūhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their brother", ur: "their brother" } },
      { id: '26:106:5', arabic: "نُوحٌ", transliteration: "nūḥun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nuh", ur: "Nuh" } },
      { id: '26:106:6', arabic: "أَلَا", transliteration: "alā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will not", ur: "Will نہیں" } },
      { id: '26:106:7', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear (Allah)", ur: "تم ڈرنا (اللہ)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ],
    },
  },
  107: {
    text: "إِنِّى لَكُمْ رَسُولٌ أَمِينٌۭ",
    translation: {
      en: "",
      ur: "میں تو تمہارا امانت دار ہوں",
    },
    words: [
      { id: '26:107:1', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '26:107:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '26:107:3', arabic: "رَسُولٌ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '26:107:4', arabic: "أَمِينٌۭ", transliteration: "amīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "trustworthy", ur: "trustworthy" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  108: {
    text: "فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    translation: {
      en: "",
      ur: "تو خدا سے ڈرو اور میرا کہا مانو",
    },
    words: [
      { id: '26:108:1', arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fear", ur: "So ڈرنا" } },
      { id: '26:108:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:108:3', arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey me", ur: "اور obey me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  109: {
    text: "وَمَآ أَسْـَٔلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِىَ إِلَّا عَلَىٰ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور اس کام کا تم سے کچھ صلہ نہیں مانگتا۔ میرا صلہ تو خدائے رب العالمین ہی پر ہے",
    },
    words: [
      { id: '26:109:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:109:2', arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I ask (of) you", ur: "میں ask (of) تم" } },
      { id: '26:109:3', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '26:109:4', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '26:109:5', arabic: "أَجْرٍ ۖ", transliteration: "ajrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "payment", ur: "payment" } },
      { id: '26:109:6', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:109:7', arabic: "أَجْرِىَ", transliteration: "ajriya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my payment", ur: "(is) my payment" } },
      { id: '26:109:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '26:109:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '26:109:10', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '26:109:11', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  110: {
    text: "فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    translation: {
      en: "",
      ur: "تو خدا سے ڈرو اور میرے کہنے پر چلو",
    },
    words: [
      { id: '26:110:1', arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fear", ur: "So ڈرنا" } },
      { id: '26:110:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:110:3', arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey me", ur: "اور obey me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  111: {
    text: "۞ قَالُوٓا۟ أَنُؤْمِنُ لَكَ وَٱتَّبَعَكَ ٱلْأَرْذَلُونَ",
    translation: {
      en: "",
      ur: "وہ بولے کہ کیا ہم تم کو مان لیں اور تمہارے پیرو تو رذیل لوگ ہوتے ہیں",
    },
    words: [
      { id: '26:111:1', arabic: "۞ قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:111:2', arabic: "أَنُؤْمِنُ", transliteration: "anu'minu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Should we believe", ur: "Should ہم ایمان لانا" } },
      { id: '26:111:3', arabic: "لَكَ", transliteration: "laka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in you", ur: "میں تم" } },
      { id: '26:111:4', arabic: "وَٱتَّبَعَكَ", transliteration: "wa-ittabaʿaka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while followed you", ur: "while followed تم" } },
      { id: '26:111:5', arabic: "ٱلْأَرْذَلُونَ", transliteration: "l-ardhalūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the lowest", ur: "the lowest" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  112: {
    text: "قَالَ وَمَا عِلْمِى بِمَا كَانُوا۟ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "نوح نے کہا کہ مجھے کیا معلوم کہ وہ کیا کرتے ہیں",
    },
    words: [
      { id: '26:112:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:112:2', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And what", ur: "اور کیا" } },
      { id: '26:112:3', arabic: "عِلْمِى", transliteration: "ʿil'mī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(do) I know", ur: "(do) میں جاننا" } },
      { id: '26:112:4', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '26:112:5', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used", ur: "وہ لوگ used" } },
      { id: '26:112:6', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "(to) do", ur: "(کو) do" } }
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
  113: {
    text: "إِنْ حِسَابُهُمْ إِلَّا عَلَىٰ رَبِّى ۖ لَوْ تَشْعُرُونَ",
    translation: {
      en: "",
      ur: "ان کا حساب (اعمال) میرے پروردگار کے ذمے ہے کاش تم سمجھو",
    },
    words: [
      { id: '26:113:1', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '26:113:2', arabic: "حِسَابُهُمْ", transliteration: "ḥisābuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their account", ur: "their account" } },
      { id: '26:113:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) but", ur: "(is) لیکن" } },
      { id: '26:113:4', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '26:113:5', arabic: "رَبِّى ۖ", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '26:113:6', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:113:7', arabic: "تَشْعُرُونَ", transliteration: "tashʿurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you perceive", ur: "تم perceive" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  114: {
    text: "وَمَآ أَنَا۠ بِطَارِدِ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور میں مومنوں کو نکال دینے والا نہیں ہوں",
    },
    words: [
      { id: '26:114:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:114:2', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am", ur: "میں am" } },
      { id: '26:114:3', arabic: "بِطَارِدِ", transliteration: "biṭāridi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the one to drive away", ur: "the one کو drive away" } },
      { id: '26:114:4', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  115: {
    text: "إِنْ أَنَا۠ إِلَّا نَذِيرٌۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "میں تو صرف کھول کھول کر نصیحت کرنے والا ہوں",
    },
    words: [
      { id: '26:115:1', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:115:2', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am", ur: "میں am" } },
      { id: '26:115:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '26:115:4', arabic: "نَذِيرٌۭ", transliteration: "nadhīrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a warner", ur: "a warner" } },
      { id: '26:115:5', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
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
  116: {
    text: "قَالُوا۟ لَئِن لَّمْ تَنتَهِ يَـٰنُوحُ لَتَكُونَنَّ مِنَ ٱلْمَرْجُومِينَ",
    translation: {
      en: "",
      ur: "انہوں نے کہا کہ نوح اگر تم باز نہ آؤ گے تو سنگسار کردیئے جاؤ گے",
    },
    words: [
      { id: '26:116:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:116:2', arabic: "لَئِن", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '26:116:3', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '26:116:4', arabic: "تَنتَهِ", transliteration: "tantahi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you desist", ur: "تم desist" } },
      { id: '26:116:5', arabic: "يَـٰنُوحُ", transliteration: "yānūḥu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Nuh", ur: "اے Nuh" } },
      { id: '26:116:6', arabic: "لَتَكُونَنَّ", transliteration: "latakūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Surely you will be", ur: "یقیناً تم will be" } },
      { id: '26:116:7', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:116:8', arabic: "ٱلْمَرْجُومِينَ", transliteration: "l-marjūmīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those who are stoned", ur: "جو لوگ are stoned" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  117: {
    text: "قَالَ رَبِّ إِنَّ قَوْمِى كَذَّبُونِ",
    translation: {
      en: "",
      ur: "نوح نے کہا کہ پروردگار میری قوم نے تو مجھے جھٹلا دیا",
    },
    words: [
      { id: '26:117:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:117:2', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '26:117:3', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:117:4', arabic: "قَوْمِى", transliteration: "qawmī", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "my people", ur: "my لوگ" } },
      { id: '26:117:5', arabic: "كَذَّبُونِ", transliteration: "kadhabūni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "have denied me", ur: "have denied me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  118: {
    text: "فَٱفْتَحْ بَيْنِى وَبَيْنَهُمْ فَتْحًۭا وَنَجِّنِى وَمَن مَّعِىَ مِنَ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "سو تو میرے اور ان کے درمیان ایک کھلا فیصلہ کردے اور مجھے اور جو میرے ساتھ ہیں ان کو بچا لے",
    },
    words: [
      { id: '26:118:1', arabic: "فَٱفْتَحْ", transliteration: "fa-if'taḥ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So judge", ur: "So judge" } },
      { id: '26:118:2', arabic: "بَيْنِى", transliteration: "baynī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between me", ur: "درمیان me" } },
      { id: '26:118:3', arabic: "وَبَيْنَهُمْ", transliteration: "wabaynahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and between them", ur: "اور درمیان them" } },
      { id: '26:118:4', arabic: "فَتْحًۭا", transliteration: "fatḥan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(with decisive) judgment", ur: "(ساتھ decisive) judgment" } },
      { id: '26:118:5', arabic: "وَنَجِّنِى", transliteration: "wanajjinī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and save me", ur: "اور save me" } },
      { id: '26:118:6', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and who", ur: "اور جو" } },
      { id: '26:118:7', arabic: "مَّعِىَ", transliteration: "maʿiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) with me", ur: "(are) ساتھ me" } },
      { id: '26:118:8', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:118:9', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  119: {
    text: "فَأَنجَيْنَـٰهُ وَمَن مَّعَهُۥ فِى ٱلْفُلْكِ ٱلْمَشْحُونِ",
    translation: {
      en: "",
      ur: "پس ہم نے ان کو اور جو ان کے ساتھ کشتی میں سوار تھے، ان کو بچا لیا",
    },
    words: [
      { id: '26:119:1', arabic: "فَأَنجَيْنَـٰهُ", transliteration: "fa-anjaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We saved him", ur: "So ہم saved him" } },
      { id: '26:119:2', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and who", ur: "اور جو" } },
      { id: '26:119:3', arabic: "مَّعَهُۥ", transliteration: "maʿahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) with him", ur: "(were) ساتھ him" } },
      { id: '26:119:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:119:5', arabic: "ٱلْفُلْكِ", transliteration: "l-ful'ki", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ship", ur: "the ship" } },
      { id: '26:119:6', arabic: "ٱلْمَشْحُونِ", transliteration: "l-mashḥūni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "laden", ur: "laden" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  120: {
    text: "ثُمَّ أَغْرَقْنَا بَعْدُ ٱلْبَاقِينَ",
    translation: {
      en: "",
      ur: "پھر اس کے بعد باقی لوگوں کو ڈبو دیا",
    },
    words: [
      { id: '26:120:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '26:120:2', arabic: "أَغْرَقْنَا", transliteration: "aghraqnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We drowned", ur: "ہم drowned" } },
      { id: '26:120:3', arabic: "بَعْدُ", transliteration: "baʿdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "thereafter", ur: "thereafter" } },
      { id: '26:120:4', arabic: "ٱلْبَاقِينَ", transliteration: "l-bāqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the remaining ones", ur: "the remaining ones" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  121: {
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
    translation: {
      en: "",
      ur: "بےشک اس میں نشانی ہے اور ان میں اکثر ایمان لانے والے نہیں تھے",
    },
    words: [
      { id: '26:121:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:121:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:121:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:121:4', arabic: "لَـَٔايَةًۭ ۖ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, (is) a sign", ur: "یقیناً, (is) a نشانی" } },
      { id: '26:121:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '26:121:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '26:121:7', arabic: "أَكْثَرُهُم", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '26:121:8', arabic: "مُّؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  122: {
    text: "وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار تو غالب (اور) مہربان ہے",
    },
    words: [
      { id: '26:122:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '26:122:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '26:122:3', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, He", ur: "یقیناً, وہ" } },
      { id: '26:122:4', arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" } },
      { id: '26:122:5', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },
  123: {
    text: "كَذَّبَتْ عَادٌ ٱلْمُرْسَلِينَ",
    translation: {
      en: "",
      ur: "عاد نے بھی پیغمبروں کو جھٹلایا",
    },
    words: [
      { id: '26:123:1', arabic: "كَذَّبَتْ", transliteration: "kadhabat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Denied", ur: "Denied" } },
      { id: '26:123:2', arabic: "عَادٌ", transliteration: "ʿādun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the people) of Aad", ur: "(the لوگ) of Aad" } },
      { id: '26:123:3', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  124: {
    text: "إِذْ قَالَ لَهُمْ أَخُوهُمْ هُودٌ أَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "جب ان سے ان کے بھائی ہود نے کہا کیا تم ڈرتے نہیں",
    },
    words: [
      { id: '26:124:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '26:124:2', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '26:124:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:124:4', arabic: "أَخُوهُمْ", transliteration: "akhūhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their brother", ur: "their brother" } },
      { id: '26:124:5', arabic: "هُودٌ", transliteration: "hūdun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hud", ur: "Hud" } },
      { id: '26:124:6', arabic: "أَلَا", transliteration: "alā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will not", ur: "Will نہیں" } },
      { id: '26:124:7', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear (Allah)", ur: "تم ڈرنا (اللہ)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ],
    },
  },
  125: {
    text: "إِنِّى لَكُمْ رَسُولٌ أَمِينٌۭ",
    translation: {
      en: "",
      ur: "میں تو تمہارا امانت دار پیغمبر ہوں",
    },
    words: [
      { id: '26:125:1', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '26:125:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '26:125:3', arabic: "رَسُولٌ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '26:125:4', arabic: "أَمِينٌۭ", transliteration: "amīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "trustworthy", ur: "trustworthy" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  126: {
    text: "فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    translation: {
      en: "",
      ur: "تو خدا سے ڈرو اور میرا کہا مانو",
    },
    words: [
      { id: '26:126:1', arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fear", ur: "So ڈرنا" } },
      { id: '26:126:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:126:3', arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey me", ur: "اور obey me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  127: {
    text: "وَمَآ أَسْـَٔلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِىَ إِلَّا عَلَىٰ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور میں اس کا تم سے کچھ بدلہ نہیں مانگتا۔ میرا بدلہ (خدائے) رب العالمین کے ذمے ہے",
    },
    words: [
      { id: '26:127:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:127:2', arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I ask you", ur: "میں ask تم" } },
      { id: '26:127:3', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '26:127:4', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '26:127:5', arabic: "أَجْرٍ ۖ", transliteration: "ajrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "payment", ur: "payment" } },
      { id: '26:127:6', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:127:7', arabic: "أَجْرِىَ", transliteration: "ajriya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my payment", ur: "(is) my payment" } },
      { id: '26:127:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '26:127:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '26:127:10', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '26:127:11', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  128: {
    text: "أَتَبْنُونَ بِكُلِّ رِيعٍ ءَايَةًۭ تَعْبَثُونَ",
    translation: {
      en: "",
      ur: "بھلا تم ہر اونچی جگہ پر نشان تعمیر کرتے ہو",
    },
    words: [
      { id: '26:128:1', arabic: "أَتَبْنُونَ", transliteration: "atabnūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you construct", ur: "Do تم construct" } },
      { id: '26:128:2', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "on every", ur: "پر ہر" } },
      { id: '26:128:3', arabic: "رِيعٍ", transliteration: "rīʿin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "elevation", ur: "elevation" } },
      { id: '26:128:4', arabic: "ءَايَةًۭ", transliteration: "āyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sign", ur: "a نشانی" } },
      { id: '26:128:5', arabic: "تَعْبَثُونَ", transliteration: "taʿbathūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "amusing yourselves", ur: "amusing yourselves" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  129: {
    text: "وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ",
    translation: {
      en: "",
      ur: "اور محل بناتے ہو شاید تم ہمیشہ رہو گے",
    },
    words: [
      { id: '26:129:1', arabic: "وَتَتَّخِذُونَ", transliteration: "watattakhidhūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And take for yourselves", ur: "اور take for yourselves" } },
      { id: '26:129:2', arabic: "مَصَانِعَ", transliteration: "maṣāniʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "strongholds", ur: "strongholds" } },
      { id: '26:129:3', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that you may", ur: "وہ تم may" } },
      { id: '26:129:4', arabic: "تَخْلُدُونَ", transliteration: "takhludūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "live forever", ur: "live forever" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  130: {
    text: "وَإِذَا بَطَشْتُم بَطَشْتُمْ جَبَّارِينَ",
    translation: {
      en: "",
      ur: "اور جب (کسی کو) پکڑتے ہو تو ظالمانہ پکڑتے ہو",
    },
    words: [
      { id: '26:130:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '26:130:2', arabic: "بَطَشْتُم", transliteration: "baṭashtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you seize", ur: "تم seize" } },
      { id: '26:130:3', arabic: "بَطَشْتُمْ", transliteration: "baṭashtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you seize", ur: "تم seize" } },
      { id: '26:130:4', arabic: "جَبَّارِينَ", transliteration: "jabbārīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) tyrants", ur: "(as) tyrants" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  131: {
    text: "فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    translation: {
      en: "",
      ur: "تو خدا سے ڈرو اور میری اطاعت کرو",
    },
    words: [
      { id: '26:131:1', arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fear", ur: "So ڈرنا" } },
      { id: '26:131:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:131:3', arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey me", ur: "اور obey me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  132: {
    text: "وَٱتَّقُوا۟ ٱلَّذِىٓ أَمَدَّكُم بِمَا تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "اور اس سے جس نے تم کو ان چیزوں سے مدد دی جن کو تم جانتے ہو۔ ڈرو",
    },
    words: [
      { id: '26:132:1', arabic: "وَٱتَّقُوا۟", transliteration: "wa-ittaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And fear", ur: "اور ڈرنا" } },
      { id: '26:132:2', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '26:132:3', arabic: "أَمَدَّكُم", transliteration: "amaddakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has aided you", ur: "has aided تم" } },
      { id: '26:132:4', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with what", ur: "ساتھ کیا" } },
      { id: '26:132:5', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "you know", ur: "تم جاننا" } }
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
  133: {
    text: "أَمَدَّكُم بِأَنْعَـٰمٍۢ وَبَنِينَ",
    translation: {
      en: "",
      ur: "اس نے تمہیں چارپایوں اور بیٹوں سے مدد دی",
    },
    words: [
      { id: '26:133:1', arabic: "أَمَدَّكُم", transliteration: "amaddakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has aided you", ur: "وہ has aided تم" } },
      { id: '26:133:2', arabic: "بِأَنْعَـٰمٍۢ", transliteration: "bi-anʿāmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with cattle", ur: "ساتھ cattle" } },
      { id: '26:133:3', arabic: "وَبَنِينَ", transliteration: "wabanīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and children", ur: "اور اولاد" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  134: {
    text: "وَجَنَّـٰتٍۢ وَعُيُونٍ",
    translation: {
      en: "",
      ur: "اور باغوں اور چشموں سے",
    },
    words: [
      { id: '26:134:1', arabic: "وَجَنَّـٰتٍۢ", transliteration: "wajannātin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And gardens", ur: "اور باغات" } },
      { id: '26:134:2', arabic: "وَعُيُونٍ", transliteration: "waʿuyūnin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and springs", ur: "اور springs" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ],
    },
  },
  135: {
    text: "إِنِّىٓ أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍۢ",
    translation: {
      en: "",
      ur: "مجھ کو تمہارے بارے میں بڑے (سخت) دن کے عذاب کا خوف ہے",
    },
    words: [
      { id: '26:135:1', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '26:135:2', arabic: "أَخَافُ", transliteration: "akhāfu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[I] fear", ur: "[میں] ڈرنا" } },
      { id: '26:135:3', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '26:135:4', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '26:135:5', arabic: "يَوْمٍ", transliteration: "yawmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of) a Day", ur: "(of) a دن" } },
      { id: '26:135:6', arabic: "عَظِيمٍۢ", transliteration: "ʿaẓīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Great", ur: "Great" } }
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
  136: {
    text: "قَالُوا۟ سَوَآءٌ عَلَيْنَآ أَوَعَظْتَ أَمْ لَمْ تَكُن مِّنَ ٱلْوَٰعِظِينَ",
    translation: {
      en: "",
      ur: "وہ کہنے لگے کہ ہمیں خواہ نصیحت کرو یا نہ کرو ہمارے لئے یکساں ہے",
    },
    words: [
      { id: '26:136:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:136:2', arabic: "سَوَآءٌ", transliteration: "sawāon", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(It is) same", ur: "(It is) same" } },
      { id: '26:136:3', arabic: "عَلَيْنَآ", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to us", ur: "کو us" } },
      { id: '26:136:4', arabic: "أَوَعَظْتَ", transliteration: "awaʿaẓta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whether you advise", ur: "whether تم advise" } },
      { id: '26:136:5', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '26:136:6', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '26:136:7', arabic: "تَكُن", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '26:136:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:136:9', arabic: "ٱلْوَٰعِظِينَ", transliteration: "l-wāʿiẓīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the advisors", ur: "the advisors" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  137: {
    text: "إِنْ هَـٰذَآ إِلَّا خُلُقُ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "یہ تو اگلوں ہی کے طریق ہیں",
    },
    words: [
      { id: '26:137:1', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:137:2', arabic: "هَـٰذَآ", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) this", ur: "(is) this" } },
      { id: '26:137:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '26:137:4', arabic: "خُلُقُ", transliteration: "khuluqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) custom", ur: "(the) custom" } },
      { id: '26:137:5', arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the former (people)", ur: "(of) the former (لوگ)" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  138: {
    text: "وَمَا نَحْنُ بِمُعَذَّبِينَ",
    translation: {
      en: "",
      ur: "اور ہم پر کوئی عذاب نہیں آئے گا",
    },
    words: [
      { id: '26:138:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:138:2', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "we", ur: "ہم" } },
      { id: '26:138:3', arabic: "بِمُعَذَّبِينَ", transliteration: "bimuʿadhabīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(are) the ones to be punished", ur: "(are) the ones کو be punished" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  139: {
    text: "فَكَذَّبُوهُ فَأَهْلَكْنَـٰهُمْ ۗ إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
    translation: {
      en: "",
      ur: "تو انہوں نے ہود کو جھٹلایا تو ہم نے ان کو ہلاک کر ڈالا۔ بےشک اس میں نشانی ہے۔ اور ان میں اکثر ایمان لانے والے نہیں تھے",
    },
    words: [
      { id: '26:139:1', arabic: "فَكَذَّبُوهُ", transliteration: "fakadhabūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So they denied him", ur: "So وہ لوگ denied him" } },
      { id: '26:139:2', arabic: "فَأَهْلَكْنَـٰهُمْ ۗ", transliteration: "fa-ahlaknāhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "أ ه ل", meaning: { en: "then We destroyed them", ur: "پھر ہم destroyed them" } },
      { id: '26:139:3', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:139:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:139:5', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:139:6', arabic: "لَـَٔايَةًۭ ۖ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, is a sign", ur: "یقیناً, is a نشانی" } },
      { id: '26:139:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '26:139:8', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '26:139:9', arabic: "أَكْثَرُهُم", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '26:139:10', arabic: "مُّؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  140: {
    text: "وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار تو غالب اور مہربان ہے",
    },
    words: [
      { id: '26:140:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '26:140:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '26:140:3', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, He", ur: "یقیناً, وہ" } },
      { id: '26:140:4', arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" } },
      { id: '26:140:5', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },
  141: {
    text: "كَذَّبَتْ ثَمُودُ ٱلْمُرْسَلِينَ",
    translation: {
      en: "",
      ur: "(اور) قوم ثمود نے بھی پیغمبروں کو جھٹلا دیا",
    },
    words: [
      { id: '26:141:1', arabic: "كَذَّبَتْ", transliteration: "kadhabat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Denied", ur: "Denied" } },
      { id: '26:141:2', arabic: "ثَمُودُ", transliteration: "thamūdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thamud", ur: "Thamud" } },
      { id: '26:141:3', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  142: {
    text: "إِذْ قَالَ لَهُمْ أَخُوهُمْ صَـٰلِحٌ أَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "جب ان سے ان کے بھائی صالح نے کہا کہ تم ڈرتے کیوں نہیں؟",
    },
    words: [
      { id: '26:142:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '26:142:2', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '26:142:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:142:4', arabic: "أَخُوهُمْ", transliteration: "akhūhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their brother", ur: "their brother" } },
      { id: '26:142:5', arabic: "صَـٰلِحٌ", transliteration: "ṣāliḥun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Salih", ur: "Salih" } },
      { id: '26:142:6', arabic: "أَلَا", transliteration: "alā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will not", ur: "Will نہیں" } },
      { id: '26:142:7', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear (Allah)", ur: "تم ڈرنا (اللہ)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ],
    },
  },
  143: {
    text: "إِنِّى لَكُمْ رَسُولٌ أَمِينٌۭ",
    translation: {
      en: "",
      ur: "میں تو تمہارا امانت دار ہوں",
    },
    words: [
      { id: '26:143:1', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '26:143:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '26:143:3', arabic: "رَسُولٌ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '26:143:4', arabic: "أَمِينٌۭ", transliteration: "amīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "trustworthy", ur: "trustworthy" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  144: {
    text: "فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    translation: {
      en: "",
      ur: "تو خدا سے ڈرو اور میرا کہا مانو",
    },
    words: [
      { id: '26:144:1', arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fear", ur: "So ڈرنا" } },
      { id: '26:144:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:144:3', arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey me", ur: "اور obey me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  145: {
    text: "وَمَآ أَسْـَٔلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِىَ إِلَّا عَلَىٰ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور میں اس کا تم سے بدلہ نہیں مانگتا۔ میرا بدلہ (خدا) رب العالمین کے ذمے ہے",
    },
    words: [
      { id: '26:145:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:145:2', arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I ask you", ur: "میں ask تم" } },
      { id: '26:145:3', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '26:145:4', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '26:145:5', arabic: "أَجْرٍ ۖ", transliteration: "ajrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "payment", ur: "payment" } },
      { id: '26:145:6', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:145:7', arabic: "أَجْرِىَ", transliteration: "ajriya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my payment", ur: "(is) my payment" } },
      { id: '26:145:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '26:145:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '26:145:10', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '26:145:11', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  146: {
    text: "أَتُتْرَكُونَ فِى مَا هَـٰهُنَآ ءَامِنِينَ",
    translation: {
      en: "",
      ur: "کیا وہ چیزیں (تمہیں یہاں میسر) ہیں ان میں تم بےخوف چھوڑ دیئے جاؤ گے",
    },
    words: [
      { id: '26:146:1', arabic: "أَتُتْرَكُونَ", transliteration: "atut'rakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will you be left", ur: "Will تم be left" } },
      { id: '26:146:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:146:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '26:146:4', arabic: "هَـٰهُنَآ", transliteration: "hāhunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) here", ur: "(is) here" } },
      { id: '26:146:5', arabic: "ءَامِنِينَ", transliteration: "āminīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "secure", ur: "secure" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  147: {
    text: "فِى جَنَّـٰتٍۢ وَعُيُونٍۢ",
    translation: {
      en: "",
      ur: "(یعنی) باغ اور چشمے",
    },
    words: [
      { id: '26:147:1', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "In", ur: "میں" } },
      { id: '26:147:2', arabic: "جَنَّـٰتٍۢ", transliteration: "jannātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gardens", ur: "باغات" } },
      { id: '26:147:3', arabic: "وَعُيُونٍۢ", transliteration: "waʿuyūnin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and springs", ur: "اور springs" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
  },
  148: {
    text: "وَزُرُوعٍۢ وَنَخْلٍۢ طَلْعُهَا هَضِيمٌۭ",
    translation: {
      en: "",
      ur: "اور کھیتیاں اور کھجوریں جن کے خوشے لطیف ونازک ہوتے ہیں",
    },
    words: [
      { id: '26:148:1', arabic: "وَزُرُوعٍۢ", transliteration: "wazurūʿin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And cornfields", ur: "اور cornfields" } },
      { id: '26:148:2', arabic: "وَنَخْلٍۢ", transliteration: "wanakhlin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and date-palms", ur: "اور date-palms" } },
      { id: '26:148:3', arabic: "طَلْعُهَا", transliteration: "ṭalʿuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its spadix", ur: "its spadix" } },
      { id: '26:148:4', arabic: "هَضِيمٌۭ", transliteration: "haḍīmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "soft", ur: "soft" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  149: {
    text: "وَتَنْحِتُونَ مِنَ ٱلْجِبَالِ بُيُوتًۭا فَـٰرِهِينَ",
    translation: {
      en: "",
      ur: "اور تکلف سے پہاڑوں میں تراش خراش کر گھر بناتے ہو",
    },
    words: [
      { id: '26:149:1', arabic: "وَتَنْحِتُونَ", transliteration: "watanḥitūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And you carve", ur: "اور تم carve" } },
      { id: '26:149:2', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:149:3', arabic: "ٱلْجِبَالِ", transliteration: "l-jibāli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mountains", ur: "the mountains" } },
      { id: '26:149:4', arabic: "بُيُوتًۭا", transliteration: "buyūtan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "houses", ur: "houses" } },
      { id: '26:149:5', arabic: "فَـٰرِهِينَ", transliteration: "fārihīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "skillfully", ur: "skillfully" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  150: {
    text: "فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    translation: {
      en: "",
      ur: "تو خدا سے ڈرو اور میرے کہنے پر چلو",
    },
    words: [
      { id: '26:150:1', arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fear", ur: "So ڈرنا" } },
      { id: '26:150:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:150:3', arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey me", ur: "اور obey me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  151: {
    text: "وَلَا تُطِيعُوٓا۟ أَمْرَ ٱلْمُسْرِفِينَ",
    translation: {
      en: "",
      ur: "اور حد سے تجاوز کرنے والوں کی بات نہ مانو",
    },
    words: [
      { id: '26:151:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '26:151:2', arabic: "تُطِيعُوٓا۟", transliteration: "tuṭīʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "obey", ur: "obey" } },
      { id: '26:151:3', arabic: "أَمْرَ", transliteration: "amra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) command", ur: "(the) command" } },
      { id: '26:151:4', arabic: "ٱلْمُسْرِفِينَ", transliteration: "l-mus'rifīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the transgressors", ur: "(of) the transgressors" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  152: {
    text: "ٱلَّذِينَ يُفْسِدُونَ فِى ٱلْأَرْضِ وَلَا يُصْلِحُونَ",
    translation: {
      en: "",
      ur: "جو ملک میں فساد کرتے ہیں اور اصلاح نہیں کرتے",
    },
    words: [
      { id: '26:152:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '26:152:2', arabic: "يُفْسِدُونَ", transliteration: "yuf'sidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "spread corruption", ur: "spread corruption" } },
      { id: '26:152:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:152:4', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '26:152:5', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '26:152:6', arabic: "يُصْلِحُونَ", transliteration: "yuṣ'liḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reform", ur: "reform" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  153: {
    text: "قَالُوٓا۟ إِنَّمَآ أَنتَ مِنَ ٱلْمُسَحَّرِينَ",
    translation: {
      en: "",
      ur: "وہ کہنے لگے کہ تم تو جادو زدہ ہو",
    },
    words: [
      { id: '26:153:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:153:2', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '26:153:3', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '26:153:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of", ur: "(are) of" } },
      { id: '26:153:5', arabic: "ٱلْمُسَحَّرِينَ", transliteration: "l-musaḥarīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those bewitched", ur: "those bewitched" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  154: {
    text: "مَآ أَنتَ إِلَّا بَشَرٌۭ مِّثْلُنَا فَأْتِ بِـَٔايَةٍ إِن كُنتَ مِنَ ٱلصَّـٰدِقِينَ",
    translation: {
      en: "",
      ur: "تم اور کچھ نہیں ہماری طرح آدمی ہو۔ اگر سچے ہو تو کوئی نشانی پیش کرو",
    },
    words: [
      { id: '26:154:1', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:154:2', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '26:154:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) except", ur: "(are) سوائے" } },
      { id: '26:154:4', arabic: "بَشَرٌۭ", transliteration: "basharun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a man", ur: "a man" } },
      { id: '26:154:5', arabic: "مِّثْلُنَا", transliteration: "mith'lunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like us", ur: "like us" } },
      { id: '26:154:6', arabic: "فَأْتِ", transliteration: "fati", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so bring", ur: "so bring" } },
      { id: '26:154:7', arabic: "بِـَٔايَةٍ", transliteration: "biāyatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a sign", ur: "a نشانی" } },
      { id: '26:154:8', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:154:9', arabic: "كُنتَ", transliteration: "kunta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '26:154:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of", ur: "(are) of" } },
      { id: '26:154:11', arabic: "ٱلصَّـٰدِقِينَ", transliteration: "l-ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the truthful", ur: "the truthful" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  155: {
    text: "قَالَ هَـٰذِهِۦ نَاقَةٌۭ لَّهَا شِرْبٌۭ وَلَكُمْ شِرْبُ يَوْمٍۢ مَّعْلُومٍۢ",
    translation: {
      en: "",
      ur: "صالح نے کہا (دیکھو) یہ اونٹنی ہے (ایک دن) اس کی پانی پینے کی باری ہے اور ایک معین روز تمہاری باری",
    },
    words: [
      { id: '26:155:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:155:2', arabic: "هَـٰذِهِۦ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '26:155:3', arabic: "نَاقَةٌۭ", transliteration: "nāqatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a she-camel", ur: "(is) a she-camel" } },
      { id: '26:155:4', arabic: "لَّهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For her", ur: "For her" } },
      { id: '26:155:5', arabic: "شِرْبٌۭ", transliteration: "shir'bun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is a share of) drink", ur: "(is a share of) drink" } },
      { id: '26:155:6', arabic: "وَلَكُمْ", transliteration: "walakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for you", ur: "اور for تم" } },
      { id: '26:155:7', arabic: "شِرْبُ", transliteration: "shir'bu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is a share of) drink", ur: "(is a share of) drink" } },
      { id: '26:155:8', arabic: "يَوْمٍۢ", transliteration: "yawmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(on) a day", ur: "(پر) a دن" } },
      { id: '26:155:9', arabic: "مَّعْلُومٍۢ", transliteration: "maʿlūmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "known", ur: "known" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  156: {
    text: "وَلَا تَمَسُّوهَا بِسُوٓءٍۢ فَيَأْخُذَكُمْ عَذَابُ يَوْمٍ عَظِيمٍۢ",
    translation: {
      en: "",
      ur: "اور اس کو کوئی تکلیف نہ دینا (نہیں تو) تم کو سخت عذاب آ پکڑے گا",
    },
    words: [
      { id: '26:156:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '26:156:2', arabic: "تَمَسُّوهَا", transliteration: "tamassūhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "touch her", ur: "touch her" } },
      { id: '26:156:3', arabic: "بِسُوٓءٍۢ", transliteration: "bisūin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with harm", ur: "ساتھ harm" } },
      { id: '26:156:4', arabic: "فَيَأْخُذَكُمْ", transliteration: "fayakhudhakum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "lest seize you", ur: "lest seize تم" } },
      { id: '26:156:5', arabic: "عَذَابُ", transliteration: "ʿadhābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '26:156:6', arabic: "يَوْمٍ", transliteration: "yawmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of) a Day", ur: "(of) a دن" } },
      { id: '26:156:7', arabic: "عَظِيمٍۢ", transliteration: "ʿaẓīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Great", ur: "Great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'عطف' }
      ],
    },
  },
  157: {
    text: "فَعَقَرُوهَا فَأَصْبَحُوا۟ نَـٰدِمِينَ",
    translation: {
      en: "",
      ur: "تو انہوں نے اس کی کونچیں کاٹ ڈالیں پھر نادم ہوئے",
    },
    words: [
      { id: '26:157:1', arabic: "فَعَقَرُوهَا", transliteration: "faʿaqarūhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But they hamstrung her", ur: "لیکن وہ لوگ hamstrung her" } },
      { id: '26:157:2', arabic: "فَأَصْبَحُوا۟", transliteration: "fa-aṣbaḥū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then they became", ur: "پھر وہ لوگ became" } },
      { id: '26:157:3', arabic: "نَـٰدِمِينَ", transliteration: "nādimīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "regretful", ur: "regretful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' }
      ],
    },
  },
  158: {
    text: "فَأَخَذَهُمُ ٱلْعَذَابُ ۗ إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
    translation: {
      en: "",
      ur: "سو ان کو عذاب نے آن پکڑا۔ بےشک اس میں نشانی ہے۔ اور ان میں اکثر ایمان لانے والے نہیں تھے",
    },
    words: [
      { id: '26:158:1', arabic: "فَأَخَذَهُمُ", transliteration: "fa-akhadhahumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So seized them", ur: "So seized them" } },
      { id: '26:158:2', arabic: "ٱلْعَذَابُ ۗ", transliteration: "l-ʿadhābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '26:158:3', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:158:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:158:5', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:158:6', arabic: "لَـَٔايَةًۭ ۖ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely is a sign", ur: "یقیناً is a نشانی" } },
      { id: '26:158:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '26:158:8', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '26:158:9', arabic: "أَكْثَرُهُم", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '26:158:10', arabic: "مُّؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  159: {
    text: "وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار تو غالب (اور) مہربان ہے",
    },
    words: [
      { id: '26:159:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '26:159:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '26:159:3', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely He", ur: "یقیناً وہ" } },
      { id: '26:159:4', arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" } },
      { id: '26:159:5', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },
  160: {
    text: "كَذَّبَتْ قَوْمُ لُوطٍ ٱلْمُرْسَلِينَ",
    translation: {
      en: "",
      ur: "(اور قوم) لوط نے بھی پیغمبروں کو جھٹلایا",
    },
    words: [
      { id: '26:160:1', arabic: "كَذَّبَتْ", transliteration: "kadhabat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Denied", ur: "Denied" } },
      { id: '26:160:2', arabic: "قَوْمُ", transliteration: "qawmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '26:160:3', arabic: "لُوطٍ", transliteration: "lūṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Lut", ur: "(of) Lut" } },
      { id: '26:160:4', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  161: {
    text: "إِذْ قَالَ لَهُمْ أَخُوهُمْ لُوطٌ أَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "جب ان سے ان کے بھائی لوط نے کہا کہ تم کیوں نہیں ڈرتے؟",
    },
    words: [
      { id: '26:161:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '26:161:2', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '26:161:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:161:4', arabic: "أَخُوهُمْ", transliteration: "akhūhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their brother", ur: "their brother" } },
      { id: '26:161:5', arabic: "لُوطٌ", transliteration: "lūṭun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lut", ur: "Lut" } },
      { id: '26:161:6', arabic: "أَلَا", transliteration: "alā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will not", ur: "Will نہیں" } },
      { id: '26:161:7', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear (Allah)", ur: "تم ڈرنا (اللہ)" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ],
    },
  },
  162: {
    text: "إِنِّى لَكُمْ رَسُولٌ أَمِينٌۭ",
    translation: {
      en: "",
      ur: "میں تو تمہارا امانت دار پیغمبر ہوں",
    },
    words: [
      { id: '26:162:1', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '26:162:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '26:162:3', arabic: "رَسُولٌ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '26:162:4', arabic: "أَمِينٌۭ", transliteration: "amīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "trustworthy", ur: "trustworthy" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  163: {
    text: "فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    translation: {
      en: "",
      ur: "تو خدا سے ڈرو اور میرا کہا مانو",
    },
    words: [
      { id: '26:163:1', arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fear", ur: "So ڈرنا" } },
      { id: '26:163:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:163:3', arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey me", ur: "اور obey me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  164: {
    text: "وَمَآ أَسْـَٔلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِىَ إِلَّا عَلَىٰ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور میں تم سے اس (کام) کا بدلہ نہیں مانگتا۔ میرا بدلہ (خدائے) رب العالمین کے ذمے ہے",
    },
    words: [
      { id: '26:164:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:164:2', arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I ask you", ur: "میں ask تم" } },
      { id: '26:164:3', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '26:164:4', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '26:164:5', arabic: "أَجْرٍ ۖ", transliteration: "ajrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "payment", ur: "payment" } },
      { id: '26:164:6', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:164:7', arabic: "أَجْرِىَ", transliteration: "ajriya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my payment", ur: "(is) my payment" } },
      { id: '26:164:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '26:164:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '26:164:10', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '26:164:11', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  165: {
    text: "أَتَأْتُونَ ٱلذُّكْرَانَ مِنَ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "کیا تم اہل عالم میں سے لڑکوں پر مائل ہوتے ہو",
    },
    words: [
      { id: '26:165:1', arabic: "أَتَأْتُونَ", transliteration: "atatūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you approach", ur: "Do تم approach" } },
      { id: '26:165:2', arabic: "ٱلذُّكْرَانَ", transliteration: "l-dhuk'rāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the males", ur: "the males" } },
      { id: '26:165:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '26:165:4', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the worlds", ur: "the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  166: {
    text: "وَتَذَرُونَ مَا خَلَقَ لَكُمْ رَبُّكُم مِّنْ أَزْوَٰجِكُم ۚ بَلْ أَنتُمْ قَوْمٌ عَادُونَ",
    translation: {
      en: "",
      ur: "اور تمہارے پروردگار نے جو تمہارے لئے تمہاری بیویاں پیدا کی ہیں ان کو چھوڑ دیتے ہو۔ حقیقت یہ ہے کہ تم حد سے نکل جانے والے ہو",
    },
    words: [
      { id: '26:166:1', arabic: "وَتَذَرُونَ", transliteration: "watadharūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And you leave", ur: "اور تم leave" } },
      { id: '26:166:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '26:166:3', arabic: "خَلَقَ", transliteration: "khalaqa", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا" } },
      { id: '26:166:4', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '26:166:5', arabic: "رَبُّكُم", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '26:166:6', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:166:7', arabic: "أَزْوَٰجِكُم ۚ", transliteration: "azwājikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your mates", ur: "your mates" } },
      { id: '26:166:8', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '26:166:9', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '26:166:10', arabic: "قَوْمٌ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '26:166:11', arabic: "عَادُونَ", transliteration: "ʿādūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "transgressing", ur: "transgressing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  167: {
    text: "قَالُوا۟ لَئِن لَّمْ تَنتَهِ يَـٰلُوطُ لَتَكُونَنَّ مِنَ ٱلْمُخْرَجِينَ",
    translation: {
      en: "",
      ur: "وہ کہنے لگے کہ لوط اگر تم باز نہ آؤ گے تو شہر بدر کردیئے جاؤ گے",
    },
    words: [
      { id: '26:167:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:167:2', arabic: "لَئِن", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '26:167:3', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '26:167:4', arabic: "تَنتَهِ", transliteration: "tantahi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you desist", ur: "تم desist" } },
      { id: '26:167:5', arabic: "يَـٰلُوطُ", transliteration: "yālūṭu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Lut", ur: "اے Lut" } },
      { id: '26:167:6', arabic: "لَتَكُونَنَّ", transliteration: "latakūnanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Surely, you will be", ur: "یقیناً, تم will be" } },
      { id: '26:167:7', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:167:8', arabic: "ٱلْمُخْرَجِينَ", transliteration: "l-mukh'rajīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones driven out", ur: "the ones driven out" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  168: {
    text: "قَالَ إِنِّى لِعَمَلِكُم مِّنَ ٱلْقَالِينَ",
    translation: {
      en: "",
      ur: "لوط نے کہا کہ میں تمہارے کام کا سخت دشمن ہوں",
    },
    words: [
      { id: '26:168:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:168:2', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '26:168:3', arabic: "لِعَمَلِكُم", transliteration: "liʿamalikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(of) your deed", ur: "(of) your deed" } },
      { id: '26:168:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:168:5', arabic: "ٱلْقَالِينَ", transliteration: "l-qālīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who detest", ur: "جو لوگ detest" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  169: {
    text: "رَبِّ نَجِّنِى وَأَهْلِى مِمَّا يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اے میرے پروردگار مجھ کو اور میرے گھر والوں کو ان کے کاموں (کے وبال) سے نجات دے",
    },
    words: [
      { id: '26:169:1', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '26:169:2', arabic: "نَجِّنِى", transliteration: "najjinī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Save me", ur: "Save me" } },
      { id: '26:169:3', arabic: "وَأَهْلِى", transliteration: "wa-ahlī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ه ل", meaning: { en: "and my family", ur: "اور my family" } },
      { id: '26:169:4', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from what", ur: "سے کیا" } },
      { id: '26:169:5', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "they do", ur: "وہ لوگ do" } }
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
  170: {
    text: "فَنَجَّيْنَـٰهُ وَأَهْلَهُۥٓ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "سو ہم نے ان کو اور ان کے گھر والوں کو سب کو نجات دی",
    },
    words: [
      { id: '26:170:1', arabic: "فَنَجَّيْنَـٰهُ", transliteration: "fanajjaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We saved him", ur: "So ہم saved him" } },
      { id: '26:170:2', arabic: "وَأَهْلَهُۥٓ", transliteration: "wa-ahlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ه ل", meaning: { en: "and his family", ur: "اور his family" } },
      { id: '26:170:3', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  171: {
    text: "إِلَّا عَجُوزًۭا فِى ٱلْغَـٰبِرِينَ",
    translation: {
      en: "",
      ur: "مگر ایک بڑھیا کہ پیچھے رہ گئی",
    },
    words: [
      { id: '26:171:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '26:171:2', arabic: "عَجُوزًۭا", transliteration: "ʿajūzan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an old woman", ur: "an old woman" } },
      { id: '26:171:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(was) among", ur: "(was) among" } },
      { id: '26:171:4', arabic: "ٱلْغَـٰبِرِينَ", transliteration: "l-ghābirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who remained behind", ur: "جو لوگ remained behind" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  172: {
    text: "ثُمَّ دَمَّرْنَا ٱلْـَٔاخَرِينَ",
    translation: {
      en: "",
      ur: "پھر ہم نے اوروں کو ہلاک کردیا",
    },
    words: [
      { id: '26:172:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '26:172:2', arabic: "دَمَّرْنَا", transliteration: "dammarnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We destroyed", ur: "ہم destroyed" } },
      { id: '26:172:3', arabic: "ٱلْـَٔاخَرِينَ", transliteration: "l-ākharīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the others", ur: "the others" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  173: {
    text: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًۭا ۖ فَسَآءَ مَطَرُ ٱلْمُنذَرِينَ",
    translation: {
      en: "",
      ur: "اور ان پر مینھہ برسایا۔ سو جو مینھہ ان (لوگوں) پر (برسا) جو ڈرائے گئے برا تھا",
    },
    words: [
      { id: '26:173:1', arabic: "وَأَمْطَرْنَا", transliteration: "wa-amṭarnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We rained", ur: "اور ہم rained" } },
      { id: '26:173:2', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '26:173:3', arabic: "مَّطَرًۭا ۖ", transliteration: "maṭaran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a rain", ur: "a rain" } },
      { id: '26:173:4', arabic: "فَسَآءَ", transliteration: "fasāa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and evil was", ur: "اور برا was" } },
      { id: '26:173:5', arabic: "مَطَرُ", transliteration: "maṭaru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) the rain", ur: "(was) the rain" } },
      { id: '26:173:6', arabic: "ٱلْمُنذَرِينَ", transliteration: "l-mundharīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(on) those who were warned", ur: "(پر) جو لوگ were warned" } }
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
  174: {
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
    translation: {
      en: "",
      ur: "بےشک اس میں نشانی ہے۔ اور ان میں اکثر ایمان لانے والے نہیں تھے",
    },
    words: [
      { id: '26:174:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:174:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:174:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:174:4', arabic: "لَـَٔايَةًۭ ۖ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely is a sign", ur: "یقیناً is a نشانی" } },
      { id: '26:174:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '26:174:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '26:174:7', arabic: "أَكْثَرُهُم", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '26:174:8', arabic: "مُّؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  175: {
    text: "وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار تو غالب (اور) مہربان ہے۔",
    },
    words: [
      { id: '26:175:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '26:175:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '26:175:3', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, He", ur: "یقیناً, وہ" } },
      { id: '26:175:4', arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" } },
      { id: '26:175:5', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },
  176: {
    text: "كَذَّبَ أَصْحَـٰبُ لْـَٔيْكَةِ ٱلْمُرْسَلِينَ",
    translation: {
      en: "",
      ur: "اور بن کے رہنے والوں نے بھی پیغمبروں کو جھٹلایا",
    },
    words: [
      { id: '26:176:1', arabic: "كَذَّبَ", transliteration: "kadhaba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Denied", ur: "Denied" } },
      { id: '26:176:2', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) companions", ur: "(the) companions" } },
      { id: '26:176:3', arabic: "لْـَٔيْكَةِ", transliteration: "al'aykati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of the) Wood", ur: "(of the) Wood" } },
      { id: '26:176:4', arabic: "ٱلْمُرْسَلِينَ", transliteration: "l-mur'salīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messengers", ur: "the Messengers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  177: {
    text: "إِذْ قَالَ لَهُمْ شُعَيْبٌ أَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "جب ان سے شعیب نے کہا کہ تم ڈرتے کیوں نہیں؟",
    },
    words: [
      { id: '26:177:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '26:177:2', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '26:177:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:177:4', arabic: "شُعَيْبٌ", transliteration: "shuʿaybun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Shuaib", ur: "Shuaib" } },
      { id: '26:177:5', arabic: "أَلَا", transliteration: "alā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will not", ur: "Will نہیں" } },
      { id: '26:177:6', arabic: "تَتَّقُونَ", transliteration: "tattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear (Allah)", ur: "تم ڈرنا (اللہ)" } }
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
  178: {
    text: "إِنِّى لَكُمْ رَسُولٌ أَمِينٌۭ",
    translation: {
      en: "",
      ur: "میں تو تمہارا امانت دار پیغمبر ہوں",
    },
    words: [
      { id: '26:178:1', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '26:178:2', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '26:178:3', arabic: "رَسُولٌ", transliteration: "rasūlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '26:178:4', arabic: "أَمِينٌۭ", transliteration: "amīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "trustworthy", ur: "trustworthy" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  179: {
    text: "فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ",
    translation: {
      en: "",
      ur: "تو خدا سے ڈرو اور میرا کہا مانو",
    },
    words: [
      { id: '26:179:1', arabic: "فَٱتَّقُوا۟", transliteration: "fa-ittaqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So fear", ur: "So ڈرنا" } },
      { id: '26:179:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:179:3', arabic: "وَأَطِيعُونِ", transliteration: "wa-aṭīʿūni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and obey me", ur: "اور obey me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  180: {
    text: "وَمَآ أَسْـَٔلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِىَ إِلَّا عَلَىٰ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور میں اس کام کا تم سے کچھ بدلہ نہیں مانگتا میرا بدلہ تو خدائے رب العالمین کے ذمے ہے",
    },
    words: [
      { id: '26:180:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:180:2', arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I ask (of) you", ur: "میں ask (of) تم" } },
      { id: '26:180:3', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '26:180:4', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '26:180:5', arabic: "أَجْرٍ ۖ", transliteration: "ajrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "payment", ur: "payment" } },
      { id: '26:180:6', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:180:7', arabic: "أَجْرِىَ", transliteration: "ajriya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my payment", ur: "(is) my payment" } },
      { id: '26:180:8', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '26:180:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '26:180:10', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '26:180:11', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  181: {
    text: "۞ أَوْفُوا۟ ٱلْكَيْلَ وَلَا تَكُونُوا۟ مِنَ ٱلْمُخْسِرِينَ",
    translation: {
      en: "",
      ur: "(دیکھو) پیمانہ پورا بھرا کرو اور نقصان نہ کیا کرو",
    },
    words: [
      { id: '26:181:1', arabic: "۞ أَوْفُوا۟", transliteration: "awfū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Give full", ur: "Give full" } },
      { id: '26:181:2', arabic: "ٱلْكَيْلَ", transliteration: "l-kayla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "measure", ur: "measure" } },
      { id: '26:181:3', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '26:181:4', arabic: "تَكُونُوا۟", transliteration: "takūnū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "be", ur: "be" } },
      { id: '26:181:5', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:181:6', arabic: "ٱلْمُخْسِرِينَ", transliteration: "l-mukh'sirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who cause loss", ur: "جو لوگ cause loss" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  182: {
    text: "وَزِنُوا۟ بِٱلْقِسْطَاسِ ٱلْمُسْتَقِيمِ",
    translation: {
      en: "",
      ur: "اور ترازو سیدھی رکھ کر تولا کرو",
    },
    words: [
      { id: '26:182:1', arabic: "وَزِنُوا۟", transliteration: "wazinū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And weigh", ur: "اور weigh" } },
      { id: '26:182:2', arabic: "بِٱلْقِسْطَاسِ", transliteration: "bil-qis'ṭāsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with a balance", ur: "ساتھ a balance" } },
      { id: '26:182:3', arabic: "ٱلْمُسْتَقِيمِ", transliteration: "l-mus'taqīmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] even", ur: "[the] even" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  183: {
    text: "وَلَا تَبْخَسُوا۟ ٱلنَّاسَ أَشْيَآءَهُمْ وَلَا تَعْثَوْا۟ فِى ٱلْأَرْضِ مُفْسِدِينَ",
    translation: {
      en: "",
      ur: "اور لوگوں کو ان کی چیزیں کم نہ دیا کرو اور ملک میں فساد نہ کرتے پھرو",
    },
    words: [
      { id: '26:183:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '26:183:2', arabic: "تَبْخَسُوا۟", transliteration: "tabkhasū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "deprive", ur: "deprive" } },
      { id: '26:183:3', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "people", ur: "لوگ" } },
      { id: '26:183:4', arabic: "أَشْيَآءَهُمْ", transliteration: "ashyāahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their things", ur: "(of) their things" } },
      { id: '26:183:5', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '26:183:6', arabic: "تَعْثَوْا۟", transliteration: "taʿthaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "commit evil", ur: "commit برا" } },
      { id: '26:183:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:183:8', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '26:183:9', arabic: "مُفْسِدِينَ", transliteration: "muf'sidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "spreading corruption", ur: "spreading corruption" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  184: {
    text: "وَٱتَّقُوا۟ ٱلَّذِى خَلَقَكُمْ وَٱلْجِبِلَّةَ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "اور اس سے ڈرو جس نے تم کو اور پہلی خلقت کو پیدا کیا",
    },
    words: [
      { id: '26:184:1', arabic: "وَٱتَّقُوا۟", transliteration: "wa-ittaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And fear", ur: "اور ڈرنا" } },
      { id: '26:184:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '26:184:3', arabic: "خَلَقَكُمْ", transliteration: "khalaqakum", pos: ['N'], posLabel: 'N', root: "خ ل ق", meaning: { en: "created you", ur: "پیدا کیا تم" } },
      { id: '26:184:4', arabic: "وَٱلْجِبِلَّةَ", transliteration: "wal-jibilata", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the generations", ur: "اور the generations" } },
      { id: '26:184:5', arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the former", ur: "the former" } }
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
  185: {
    text: "قَالُوٓا۟ إِنَّمَآ أَنتَ مِنَ ٱلْمُسَحَّرِينَ",
    translation: {
      en: "",
      ur: "وہ کہنے لگے کہ تم جادو زدہ ہو",
    },
    words: [
      { id: '26:185:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '26:185:2', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '26:185:3', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '26:185:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of", ur: "(are) of" } },
      { id: '26:185:5', arabic: "ٱلْمُسَحَّرِينَ", transliteration: "l-musaḥarīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those bewitched", ur: "those bewitched" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  186: {
    text: "وَمَآ أَنتَ إِلَّا بَشَرٌۭ مِّثْلُنَا وَإِن نَّظُنُّكَ لَمِنَ ٱلْكَـٰذِبِينَ",
    translation: {
      en: "",
      ur: "اور تم اور کچھ نہیں ہم ہی جیسے آدمی ہو۔ اور ہمارا خیال ہے کہ تم جھوٹے ہو",
    },
    words: [
      { id: '26:186:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:186:2', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '26:186:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) except", ur: "(are) سوائے" } },
      { id: '26:186:4', arabic: "بَشَرٌۭ", transliteration: "basharun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a man", ur: "a man" } },
      { id: '26:186:5', arabic: "مِّثْلُنَا", transliteration: "mith'lunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like us", ur: "like us" } },
      { id: '26:186:6', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed", ur: "اور بیشک" } },
      { id: '26:186:7', arabic: "نَّظُنُّكَ", transliteration: "naẓunnuka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we think you", ur: "ہم think تم" } },
      { id: '26:186:8', arabic: "لَمِنَ", transliteration: "lamina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely (are) of", ur: "یقیناً (are) of" } },
      { id: '26:186:9', arabic: "ٱلْكَـٰذِبِينَ", transliteration: "l-kādhibīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the liars", ur: "the liars" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  187: {
    text: "فَأَسْقِطْ عَلَيْنَا كِسَفًۭا مِّنَ ٱلسَّمَآءِ إِن كُنتَ مِنَ ٱلصَّـٰدِقِينَ",
    translation: {
      en: "",
      ur: "اور اگر سچے ہو تو ہم پر آسمان سے ایک ٹکڑا لا کر گراؤ",
    },
    words: [
      { id: '26:187:1', arabic: "فَأَسْقِطْ", transliteration: "fa-asqiṭ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then cause to fall", ur: "پھر cause کو fall" } },
      { id: '26:187:2', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon us", ur: "پر us" } },
      { id: '26:187:3', arabic: "كِسَفًۭا", transliteration: "kisafan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fragments", ur: "fragments" } },
      { id: '26:187:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:187:5', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '26:187:6', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:187:7', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '26:187:8', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:187:9', arabic: "ٱلصَّـٰدِقِينَ", transliteration: "l-ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the truthful", ur: "the truthful" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  188: {
    text: "قَالَ رَبِّىٓ أَعْلَمُ بِمَا تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "شعیب نے کہا کہ جو کام تم کرتے ہو میرا پروردگار اس سے خوب واقف ہے",
    },
    words: [
      { id: '26:188:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '26:188:2', arabic: "رَبِّىٓ", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '26:188:3', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "knows best", ur: "knows best" } },
      { id: '26:188:4', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '26:188:5', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  189: {
    text: "فَكَذَّبُوهُ فَأَخَذَهُمْ عَذَابُ يَوْمِ ٱلظُّلَّةِ ۚ إِنَّهُۥ كَانَ عَذَابَ يَوْمٍ عَظِيمٍ",
    translation: {
      en: "",
      ur: "تو ان لوگوں نے ان کو جھٹلایا، پس سائبان کے عذاب نے ان کو آ پکڑا۔ بےشک وہ بڑے (سخت) دن کا عذاب تھا",
    },
    words: [
      { id: '26:189:1', arabic: "فَكَذَّبُوهُ", transliteration: "fakadhabūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But they denied him", ur: "لیکن وہ لوگ denied him" } },
      { id: '26:189:2', arabic: "فَأَخَذَهُمْ", transliteration: "fa-akhadhahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so seized them", ur: "so seized them" } },
      { id: '26:189:3', arabic: "عَذَابُ", transliteration: "ʿadhābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '26:189:4', arabic: "يَوْمِ", transliteration: "yawmi", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(of the) day", ur: "(of the) دن" } },
      { id: '26:189:5', arabic: "ٱلظُّلَّةِ ۚ", transliteration: "l-ẓulati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the shadow", ur: "(of) the shadow" } },
      { id: '26:189:6', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, it", ur: "بیشک, it" } },
      { id: '26:189:7', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '26:189:8', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '26:189:9', arabic: "يَوْمٍ", transliteration: "yawmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of) a Day", ur: "(of) a دن" } },
      { id: '26:189:10', arabic: "عَظِيمٍ", transliteration: "ʿaẓīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Great", ur: "Great" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  190: {
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اس میں یقیناً نشانی ہے۔ اور ان میں اکثر ایمان لانے والے نہیں تھے",
    },
    words: [
      { id: '26:190:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '26:190:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:190:3', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:190:4', arabic: "لَـَٔايَةًۭ ۖ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, is a sign", ur: "یقیناً, is a نشانی" } },
      { id: '26:190:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but not", ur: "لیکن نہیں" } },
      { id: '26:190:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '26:190:7', arabic: "أَكْثَرُهُم", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '26:190:8', arabic: "مُّؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believers", ur: "مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  191: {
    text: "وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار تو غالب (اور) مہربان ہے",
    },
    words: [
      { id: '26:191:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '26:191:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '26:191:3', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, He", ur: "یقیناً, وہ" } },
      { id: '26:191:4', arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" } },
      { id: '26:191:5', arabic: "ٱلرَّحِيمُ", transliteration: "l-raḥīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
  },
  192: {
    text: "وَإِنَّهُۥ لَتَنزِيلُ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور یہ قرآن (خدائے) پروردگار عالم کا اُتارا ہوا ہے",
    },
    words: [
      { id: '26:192:1', arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, it", ur: "اور بیشک, it" } },
      { id: '26:192:2', arabic: "لَتَنزِيلُ", transliteration: "latanzīlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, is a Revelation", ur: "یقیناً, is a Revelation" } },
      { id: '26:192:3', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of the) Lord", ur: "(of the) رب" } },
      { id: '26:192:4', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  193: {
    text: "نَزَلَ بِهِ ٱلرُّوحُ ٱلْأَمِينُ",
    translation: {
      en: "",
      ur: "اس کو امانت دار فرشتہ لے کر اُترا ہے",
    },
    words: [
      { id: '26:193:1', arabic: "نَزَلَ", transliteration: "nazala", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Has brought it down", ur: "Has brought it down" } },
      { id: '26:193:2', arabic: "بِهِ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Has brought it down", ur: "Has brought it down" } },
      { id: '26:193:3', arabic: "ٱلرُّوحُ", transliteration: "l-rūḥu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Spirit", ur: "the Spirit" } },
      { id: '26:193:4', arabic: "ٱلْأَمِينُ", transliteration: "l-amīnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Trustworthy", ur: "[the] Trustworthy" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  194: {
    text: "عَلَىٰ قَلْبِكَ لِتَكُونَ مِنَ ٱلْمُنذِرِينَ",
    translation: {
      en: "",
      ur: "(یعنی اس نے) تمہارے دل پر (القا) کیا ہے تاکہ (لوگوں کو) نصیحت کرتے رہو",
    },
    words: [
      { id: '26:194:1', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "Upon", ur: "پر" } },
      { id: '26:194:2', arabic: "قَلْبِكَ", transliteration: "qalbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your heart", ur: "your دل" } },
      { id: '26:194:3', arabic: "لِتَكُونَ", transliteration: "litakūna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that you may be", ur: "وہ تم may be" } },
      { id: '26:194:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:194:5', arabic: "ٱلْمُنذِرِينَ", transliteration: "l-mundhirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the warners", ur: "the warners" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  195: {
    text: "بِلِسَانٍ عَرَبِىٍّۢ مُّبِينٍۢ",
    translation: {
      en: "",
      ur: "اور (القا بھی) فصیح عربی زبان میں (کیا ہے)",
    },
    words: [
      { id: '26:195:1', arabic: "بِلِسَانٍ", transliteration: "bilisānin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "In language", ur: "میں language" } },
      { id: '26:195:2', arabic: "عَرَبِىٍّۢ", transliteration: "ʿarabiyyin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Arabic", ur: "Arabic" } },
      { id: '26:195:3', arabic: "مُّبِينٍۢ", transliteration: "mubīnin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },
  196: {
    text: "وَإِنَّهُۥ لَفِى زُبُرِ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "اور اس کی خبر پہلے پیغمبروں کی کتابوں میں (لکھی ہوئی) ہے",
    },
    words: [
      { id: '26:196:1', arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, it", ur: "اور بیشک, it" } },
      { id: '26:196:2', arabic: "لَفِى", transliteration: "lafī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, (is) in", ur: "یقیناً, (is) میں" } },
      { id: '26:196:3', arabic: "زُبُرِ", transliteration: "zuburi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Scriptures", ur: "(the) Scriptures" } },
      { id: '26:196:4', arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the former (people)", ur: "(of) the former (لوگ)" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  197: {
    text: "أَوَلَمْ يَكُن لَّهُمْ ءَايَةً أَن يَعْلَمَهُۥ عُلَمَـٰٓؤُا۟ بَنِىٓ إِسْرَٰٓءِيلَ",
    translation: {
      en: "",
      ur: "کیا ان کے لئے یہ سند نہیں ہے کہ علمائے بنی اسرائیل اس (بات) کو جانتے ہیں",
    },
    words: [
      { id: '26:197:1', arabic: "أَوَلَمْ", transliteration: "awalam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is it not", ur: "Is it نہیں" } },
      { id: '26:197:2', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is it not", ur: "Is it نہیں" } },
      { id: '26:197:3', arabic: "لَّهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:197:4', arabic: "ءَايَةً", transliteration: "āyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sign", ur: "a نشانی" } },
      { id: '26:197:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '26:197:6', arabic: "يَعْلَمَهُۥ", transliteration: "yaʿlamahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "know it", ur: "جاننا it" } },
      { id: '26:197:7', arabic: "عُلَمَـٰٓؤُا۟", transliteration: "ʿulamāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) scholars", ur: "(the) scholars" } },
      { id: '26:197:8', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of the) Children", ur: "(of the) اولاد" } },
      { id: '26:197:9', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Israel", ur: "(of) Israel" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  198: {
    text: "وَلَوْ نَزَّلْنَـٰهُ عَلَىٰ بَعْضِ ٱلْأَعْجَمِينَ",
    translation: {
      en: "",
      ur: "اور اگر ہم اس کو کسی غیر اہل زبان پر اُتارتے",
    },
    words: [
      { id: '26:198:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '26:198:2', arabic: "نَزَّلْنَـٰهُ", transliteration: "nazzalnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (had) revealed it", ur: "ہم (had) revealed it" } },
      { id: '26:198:3', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '26:198:4', arabic: "بَعْضِ", transliteration: "baʿḍi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '26:198:5', arabic: "ٱلْأَعْجَمِينَ", transliteration: "l-aʿjamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the non-Arabs", ur: "(of) the non-Arabs" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  199: {
    text: "فَقَرَأَهُۥ عَلَيْهِم مَّا كَانُوا۟ بِهِۦ مُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور وہ اسے ان (لوگوں کو) پڑھ کر سناتا تو یہ اسے (کبھی) نہ مانتے",
    },
    words: [
      { id: '26:199:1', arabic: "فَقَرَأَهُۥ", transliteration: "faqara-ahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And he (had) recited it", ur: "اور وہ (had) recited it" } },
      { id: '26:199:2', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '26:199:3', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '26:199:4', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they would", ur: "وہ لوگ would" } },
      { id: '26:199:5', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '26:199:6', arabic: "مُؤْمِنِينَ", transliteration: "mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(be) believers", ur: "(be) مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  200: {
    text: "كَذَٰلِكَ سَلَكْنَـٰهُ فِى قُلُوبِ ٱلْمُجْرِمِينَ",
    translation: {
      en: "",
      ur: "اسی طرح ہم نے انکار کو گنہگاروں کے دلوں میں داخل کردیا",
    },
    words: [
      { id: '26:200:1', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '26:200:2', arabic: "سَلَكْنَـٰهُ", transliteration: "salaknāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have inserted it", ur: "ہم have inserted it" } },
      { id: '26:200:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "into", ur: "into" } },
      { id: '26:200:4', arabic: "قُلُوبِ", transliteration: "qulūbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) hearts", ur: "(the) hearts" } },
      { id: '26:200:5', arabic: "ٱلْمُجْرِمِينَ", transliteration: "l-muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the criminals", ur: "(of) the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  201: {
    text: "لَا يُؤْمِنُونَ بِهِۦ حَتَّىٰ يَرَوُا۟ ٱلْعَذَابَ ٱلْأَلِيمَ",
    translation: {
      en: "",
      ur: "وہ جب تک درد دینے والا عذاب نہ دیکھ لیں گے، اس کو نہیں مانیں گے",
    },
    words: [
      { id: '26:201:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:201:2', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they will believe", ur: "وہ لوگ will ایمان لانا" } },
      { id: '26:201:3', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '26:201:4', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '26:201:5', arabic: "يَرَوُا۟", transliteration: "yarawū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '26:201:6', arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '26:201:7', arabic: "ٱلْأَلِيمَ", transliteration: "l-alīma", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "[the] painful", ur: "[the] painful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  202: {
    text: "فَيَأْتِيَهُم بَغْتَةًۭ وَهُمْ لَا يَشْعُرُونَ",
    translation: {
      en: "",
      ur: "وہ ان پر ناگہاں آ واقع ہوگا اور انہیں خبر بھی نہ ہوگی",
    },
    words: [
      { id: '26:202:1', arabic: "فَيَأْتِيَهُم", transliteration: "fayatiyahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And it will come to them", ur: "اور it will come کو them" } },
      { id: '26:202:2', arabic: "بَغْتَةًۭ", transliteration: "baghtatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "suddenly", ur: "suddenly" } },
      { id: '26:202:3', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '26:202:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '26:202:5', arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "perceive", ur: "perceive" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' }
      ],
    },
  },
  203: {
    text: "فَيَقُولُوا۟ هَلْ نَحْنُ مُنظَرُونَ",
    translation: {
      en: "",
      ur: "اس وقت کہیں گے کیا ہمیں ملہت ملے گی؟",
    },
    words: [
      { id: '26:203:1', arabic: "فَيَقُولُوا۟", transliteration: "fayaqūlū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "Then they will say", ur: "پھر وہ لوگ will کہو" } },
      { id: '26:203:2', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Are", ur: "Are" } },
      { id: '26:203:3', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "we", ur: "ہم" } },
      { id: '26:203:4', arabic: "مُنظَرُونَ", transliteration: "munẓarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to be) reprieved", ur: "(کو be) reprieved" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  204: {
    text: "أَفَبِعَذَابِنَا يَسْتَعْجِلُونَ",
    translation: {
      en: "",
      ur: "تو کیا یہ ہمارے عذاب کو جلدی طلب کر رہے ہیں",
    },
    words: [
      { id: '26:204:1', arabic: "أَفَبِعَذَابِنَا", transliteration: "afabiʿadhābinā", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "So is it for Our punishment", ur: "So is it for Our عذاب" } },
      { id: '26:204:2', arabic: "يَسْتَعْجِلُونَ", transliteration: "yastaʿjilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they wish to hasten", ur: "وہ لوگ wish کو hasten" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ],
    },
  },
  205: {
    text: "أَفَرَءَيْتَ إِن مَّتَّعْنَـٰهُمْ سِنِينَ",
    translation: {
      en: "",
      ur: "بھلا دیکھو تو اگر ہم ان کو برسوں فائدے دیتے رہے",
    },
    words: [
      { id: '26:205:1', arabic: "أَفَرَءَيْتَ", transliteration: "afara-ayta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then have you seen", ur: "پھر have تم seen" } },
      { id: '26:205:2', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '26:205:3', arabic: "مَّتَّعْنَـٰهُمْ", transliteration: "mattaʿnāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We let them enjoy", ur: "ہم let them enjoy" } },
      { id: '26:205:4', arabic: "سِنِينَ", transliteration: "sinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) years", ur: "(for) years" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  206: {
    text: "ثُمَّ جَآءَهُم مَّا كَانُوا۟ يُوعَدُونَ",
    translation: {
      en: "",
      ur: "پھر ان پر وہ (عذاب) آ واقع ہو جس کا تم سے وعدہ کیا جاتا ہے",
    },
    words: [
      { id: '26:206:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '26:206:2', arabic: "جَآءَهُم", transliteration: "jāahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '26:206:3', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '26:206:4', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they were", ur: "وہ لوگ were" } },
      { id: '26:206:5', arabic: "يُوعَدُونَ", transliteration: "yūʿadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "promised", ur: "promised" } }
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
  207: {
    text: "مَآ أَغْنَىٰ عَنْهُم مَّا كَانُوا۟ يُمَتَّعُونَ",
    translation: {
      en: "",
      ur: "تو جو فائدے یہ اٹھاتے رہے ان کے کس کام آئیں گے",
    },
    words: [
      { id: '26:207:1', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '26:207:2', arabic: "أَغْنَىٰ", transliteration: "aghnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) avail", ur: "(will) avail" } },
      { id: '26:207:3', arabic: "عَنْهُم", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "them", ur: "them" } },
      { id: '26:207:4', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '26:207:5', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "enjoyment they were given", ur: "enjoyment وہ لوگ were given" } },
      { id: '26:207:6', arabic: "يُمَتَّعُونَ", transliteration: "yumattaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "enjoyment they were given", ur: "enjoyment وہ لوگ were given" } }
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
  208: {
    text: "وَمَآ أَهْلَكْنَا مِن قَرْيَةٍ إِلَّا لَهَا مُنذِرُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے کوئی بستی ہلاک نہیں کی مگر اس کے لئے نصیحت کرنے والے (پہلے بھیج دیتے) تھے",
    },
    words: [
      { id: '26:208:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:208:2', arabic: "أَهْلَكْنَا", transliteration: "ahlaknā", pos: ['V'], posLabel: 'V', root: "أ ه ل", meaning: { en: "We destroyed", ur: "ہم destroyed" } },
      { id: '26:208:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '26:208:4', arabic: "قَرْيَةٍ", transliteration: "qaryatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "town", ur: "town" } },
      { id: '26:208:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '26:208:6', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it had", ur: "it had" } },
      { id: '26:208:7', arabic: "مُنذِرُونَ", transliteration: "mundhirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "warners", ur: "warners" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  209: {
    text: "ذِكْرَىٰ وَمَا كُنَّا ظَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "نصیحت کردیں اور ہم ظالم نہیں ہیں",
    },
    words: [
      { id: '26:209:1', arabic: "ذِكْرَىٰ", transliteration: "dhik'rā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(To) remind", ur: "(کو) remind" } },
      { id: '26:209:2', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '26:209:3', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We are", ur: "ہم are" } },
      { id: '26:209:4', arabic: "ظَـٰلِمِينَ", transliteration: "ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unjust", ur: "unjust" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  210: {
    text: "وَمَا تَنَزَّلَتْ بِهِ ٱلشَّيَـٰطِينُ",
    translation: {
      en: "",
      ur: "اور اس (قرآن) کو شیطان لے کر نازل نہیں ہوئے",
    },
    words: [
      { id: '26:210:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:210:2', arabic: "تَنَزَّلَتْ", transliteration: "tanazzalat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have brought it down", ur: "have brought it down" } },
      { id: '26:210:3', arabic: "بِهِ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "have brought it down", ur: "have brought it down" } },
      { id: '26:210:4', arabic: "ٱلشَّيَـٰطِينُ", transliteration: "l-shayāṭīnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the devils", ur: "the devils" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  211: {
    text: "وَمَا يَنۢبَغِى لَهُمْ وَمَا يَسْتَطِيعُونَ",
    translation: {
      en: "",
      ur: "یہ کام نہ تو ان کو سزاوار ہے اور نہ وہ اس کی طاقت رکھتے ہیں",
    },
    words: [
      { id: '26:211:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '26:211:2', arabic: "يَنۢبَغِى", transliteration: "yanbaghī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(it) suits", ur: "(it) suits" } },
      { id: '26:211:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[for] them", ur: "[for] them" } },
      { id: '26:211:4', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '26:211:5', arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are able", ur: "وہ لوگ are able" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  212: {
    text: "إِنَّهُمْ عَنِ ٱلسَّمْعِ لَمَعْزُولُونَ",
    translation: {
      en: "",
      ur: "وہ (آسمانی باتوں) کے سننے (کے مقامات) سے الگ کر دیئے گئے ہیں",
    },
    words: [
      { id: '26:212:1', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '26:212:2', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '26:212:3', arabic: "ٱلسَّمْعِ", transliteration: "l-samʿi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the hearing", ur: "the hearing" } },
      { id: '26:212:4', arabic: "لَمَعْزُولُونَ", transliteration: "lamaʿzūlūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) surely banished", ur: "(are) یقیناً banished" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  213: {
    text: "فَلَا تَدْعُ مَعَ ٱللَّهِ إِلَـٰهًا ءَاخَرَ فَتَكُونَ مِنَ ٱلْمُعَذَّبِينَ",
    translation: {
      en: "",
      ur: "تو خدا کے سوا کسی اور معبود کو مت پکارنا، ورنہ تم کو عذاب دیا جائے گا",
    },
    words: [
      { id: '26:213:1', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So (do) not", ur: "So (do) نہیں" } },
      { id: '26:213:2', arabic: "تَدْعُ", transliteration: "tadʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "invoke", ur: "invoke" } },
      { id: '26:213:3', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '26:213:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:213:5', arabic: "إِلَـٰهًا", transliteration: "ilāhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '26:213:6', arabic: "ءَاخَرَ", transliteration: "ākhara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "another", ur: "another" } },
      { id: '26:213:7', arabic: "فَتَكُونَ", transliteration: "fatakūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "lest you be", ur: "lest تم be" } },
      { id: '26:213:8', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:213:9', arabic: "ٱلْمُعَذَّبِينَ", transliteration: "l-muʿadhabīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "those punished", ur: "those punished" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  214: {
    text: "وَأَنذِرْ عَشِيرَتَكَ ٱلْأَقْرَبِينَ",
    translation: {
      en: "",
      ur: "اور اپنے قریب کے رشتہ داروں کو ڈر سنا دو",
    },
    words: [
      { id: '26:214:1', arabic: "وَأَنذِرْ", transliteration: "wa-andhir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And warn", ur: "اور warn" } },
      { id: '26:214:2', arabic: "عَشِيرَتَكَ", transliteration: "ʿashīrataka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "your kindred", ur: "your kindred" } },
      { id: '26:214:3', arabic: "ٱلْأَقْرَبِينَ", transliteration: "l-aqrabīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] closest", ur: "[the] closest" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  215: {
    text: "وَٱخْفِضْ جَنَاحَكَ لِمَنِ ٱتَّبَعَكَ مِنَ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور جو مومن تمہارے پیرو ہوگئے ہیں ان سے متواضع پیش آؤ",
    },
    words: [
      { id: '26:215:1', arabic: "وَٱخْفِضْ", transliteration: "wa-ikh'fiḍ", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And lower", ur: "اور lower" } },
      { id: '26:215:2', arabic: "جَنَاحَكَ", transliteration: "janāḥaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "your wing", ur: "your wing" } },
      { id: '26:215:3', arabic: "لِمَنِ", transliteration: "limani", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to (those) who", ur: "کو (those) جو" } },
      { id: '26:215:4', arabic: "ٱتَّبَعَكَ", transliteration: "ittabaʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "follow you", ur: "follow تم" } },
      { id: '26:215:5', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '26:215:6', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  216: {
    text: "فَإِنْ عَصَوْكَ فَقُلْ إِنِّى بَرِىٓءٌۭ مِّمَّا تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "پھر اگر لوگ تمہاری نافرمانی کریں تو کہہ دو کہ میں تمہارے اعمال سے بےتعلق ہوں",
    },
    words: [
      { id: '26:216:1', arabic: "فَإِنْ", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then if", ur: "پھر if" } },
      { id: '26:216:2', arabic: "عَصَوْكَ", transliteration: "ʿaṣawka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they disobey you", ur: "وہ لوگ disobey تم" } },
      { id: '26:216:3', arabic: "فَقُلْ", transliteration: "faqul", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "then say", ur: "پھر کہو" } },
      { id: '26:216:4', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '26:216:5', arabic: "بَرِىٓءٌۭ", transliteration: "barīon", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "innocent", ur: "innocent" } },
      { id: '26:216:6', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '26:216:7', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  217: {
    text: "وَتَوَكَّلْ عَلَى ٱلْعَزِيزِ ٱلرَّحِيمِ",
    translation: {
      en: "",
      ur: "اور (خدائے) غالب اور مہربان پر بھروسا رکھو",
    },
    words: [
      { id: '26:217:1', arabic: "وَتَوَكَّلْ", transliteration: "watawakkal", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And put (your) trust", ur: "اور put (your) trust" } },
      { id: '26:217:2', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:217:3', arabic: "ٱلْعَزِيزِ", transliteration: "l-ʿazīzi", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Mighty", ur: "the سب-Mighty" } },
      { id: '26:217:4', arabic: "ٱلرَّحِيمِ", transliteration: "l-raḥīmi", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  218: {
    text: "ٱلَّذِى يَرَىٰكَ حِينَ تَقُومُ",
    translation: {
      en: "",
      ur: "جو تم کو جب تم (تہجد) کے وقت اُٹھتے ہو دیکھتا ہے",
    },
    words: [
      { id: '26:218:1', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "The One Who", ur: "The One جو" } },
      { id: '26:218:2', arabic: "يَرَىٰكَ", transliteration: "yarāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sees you", ur: "sees تم" } },
      { id: '26:218:3', arabic: "حِينَ", transliteration: "ḥīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '26:218:4', arabic: "تَقُومُ", transliteration: "taqūmu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you stand up", ur: "تم stand up" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  219: {
    text: "وَتَقَلُّبَكَ فِى ٱلسَّـٰجِدِينَ",
    translation: {
      en: "",
      ur: "اور نمازیوں میں تمہارے پھرنے کو بھی",
    },
    words: [
      { id: '26:219:1', arabic: "وَتَقَلُّبَكَ", transliteration: "wataqallubaka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And your movements", ur: "اور your movements" } },
      { id: '26:219:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "among", ur: "among" } },
      { id: '26:219:3', arabic: "ٱلسَّـٰجِدِينَ", transliteration: "l-sājidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who prostrate", ur: "جو لوگ prostrate" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  220: {
    text: "إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ",
    translation: {
      en: "",
      ur: "بےشک وہ سننے اور جاننے والا ہے",
    },
    words: [
      { id: '26:220:1', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '26:220:2', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[He]", ur: "[وہ]" } },
      { id: '26:220:3', arabic: "ٱلسَّمِيعُ", transliteration: "l-samīʿu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Hearer", ur: "(is) the سب-Hearer" } },
      { id: '26:220:4', arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Knower", ur: "the سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  221: {
    text: "هَلْ أُنَبِّئُكُمْ عَلَىٰ مَن تَنَزَّلُ ٱلشَّيَـٰطِينُ",
    translation: {
      en: "",
      ur: "(اچھا) میں تمیں بتاؤں کہ شیطان کس پر اُترتے ہیں",
    },
    words: [
      { id: '26:221:1', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Shall", ur: "Shall" } },
      { id: '26:221:2', arabic: "أُنَبِّئُكُمْ", transliteration: "unabbi-ukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I inform you", ur: "میں inform تم" } },
      { id: '26:221:3', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '26:221:4', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '26:221:5', arabic: "تَنَزَّلُ", transliteration: "tanazzalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "descend", ur: "descend" } },
      { id: '26:221:6', arabic: "ٱلشَّيَـٰطِينُ", transliteration: "l-shayāṭīnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the devils", ur: "the devils" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  222: {
    text: "تَنَزَّلُ عَلَىٰ كُلِّ أَفَّاكٍ أَثِيمٍۢ",
    translation: {
      en: "",
      ur: "ہر جھوٹے گنہگار پر اُترتے ہیں",
    },
    words: [
      { id: '26:222:1', arabic: "تَنَزَّلُ", transliteration: "tanazzalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They descend", ur: "وہ لوگ descend" } },
      { id: '26:222:2', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '26:222:3', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '26:222:4', arabic: "أَفَّاكٍ", transliteration: "affākin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "liar", ur: "liar" } },
      { id: '26:222:5', arabic: "أَثِيمٍۢ", transliteration: "athīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "sinful", ur: "sinful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },
  223: {
    text: "يُلْقُونَ ٱلسَّمْعَ وَأَكْثَرُهُمْ كَـٰذِبُونَ",
    translation: {
      en: "",
      ur: "جو سنی ہوئی بات (اس کے کام میں) لا ڈالتے ہیں اور وہ اکثر جھوٹے ہیں",
    },
    words: [
      { id: '26:223:1', arabic: "يُلْقُونَ", transliteration: "yul'qūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They pass on", ur: "وہ لوگ pass پر" } },
      { id: '26:223:2', arabic: "ٱلسَّمْعَ", transliteration: "l-samʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(what is) heard", ur: "(کیا is) heard" } },
      { id: '26:223:3', arabic: "وَأَكْثَرُهُمْ", transliteration: "wa-aktharuhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and most of them", ur: "اور most of them" } },
      { id: '26:223:4', arabic: "كَـٰذِبُونَ", transliteration: "kādhibūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) liars", ur: "(are) liars" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  224: {
    text: "وَٱلشُّعَرَآءُ يَتَّبِعُهُمُ ٱلْغَاوُۥنَ",
    translation: {
      en: "",
      ur: "اور شاعروں کی پیروی گمراہ لوگ کیا کرتے ہیں",
    },
    words: [
      { id: '26:224:1', arabic: "وَٱلشُّعَرَآءُ", transliteration: "wal-shuʿarāu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the poets ", ur: "اور the poets " } },
      { id: '26:224:2', arabic: "يَتَّبِعُهُمُ", transliteration: "yattabiʿuhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "follow them", ur: "follow them" } },
      { id: '26:224:3', arabic: "ٱلْغَاوُۥنَ", transliteration: "l-ghāwūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the deviators", ur: "the deviators" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  225: {
    text: "أَلَمْ تَرَ أَنَّهُمْ فِى كُلِّ وَادٍۢ يَهِيمُونَ",
    translation: {
      en: "",
      ur: "کیا تم نے نہیں دیکھا کہ وہ ہر وادی میں سر مارتے پھرتے ہیں",
    },
    words: [
      { id: '26:225:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '26:225:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '26:225:3', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '26:225:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '26:225:5', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '26:225:6', arabic: "وَادٍۢ", transliteration: "wādin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "valley", ur: "valley" } },
      { id: '26:225:7', arabic: "يَهِيمُونَ", transliteration: "yahīmūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[they] roam", ur: "[وہ لوگ] roam" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  226: {
    text: "وَأَنَّهُمْ يَقُولُونَ مَا لَا يَفْعَلُونَ",
    translation: {
      en: "",
      ur: "اور کہتے وہ ہیں جو کرتے نہیں",
    },
    words: [
      { id: '26:226:1', arabic: "وَأَنَّهُمْ", transliteration: "wa-annahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that they", ur: "اور وہ وہ لوگ" } },
      { id: '26:226:2', arabic: "يَقُولُونَ", transliteration: "yaqūlūna", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "say", ur: "کہو" } },
      { id: '26:226:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '26:226:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '26:226:5', arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they do", ur: "وہ لوگ do" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' }
      ],
    },
  },
  227: {
    text: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَذَكَرُوا۟ ٱللَّهَ كَثِيرًۭا وَٱنتَصَرُوا۟ مِنۢ بَعْدِ مَا ظُلِمُوا۟ ۗ وَسَيَعْلَمُ ٱلَّذِينَ ظَلَمُوٓا۟ أَىَّ مُنقَلَبٍۢ يَنقَلِبُونَ",
    translation: {
      en: "",
      ur: "مگر جو لوگ ایمان لائے اور نیک کام کئے اور خدا کو بہت یاد کرتے رہے اور اپنے اوپر ظلم ہونے کے بعد انتقام لیا اور ظالم عنقریب جان لیں گے کہ کون سی جگہ لوٹ کر جاتے ہیں",
    },
    words: [
      { id: '26:227:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '26:227:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '26:227:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '26:227:4', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and do", ur: "اور do" } },
      { id: '26:227:5', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "righteous deeds", ur: "نیک deeds" } },
      { id: '26:227:6', arabic: "وَذَكَرُوا۟", transliteration: "wadhakarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and remember", ur: "اور remember" } },
      { id: '26:227:7', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '26:227:8', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "much", ur: "much" } },
      { id: '26:227:9', arabic: "وَٱنتَصَرُوا۟", transliteration: "wa-intaṣarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and defend themselves", ur: "اور defend themselves" } },
      { id: '26:227:10', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "after", ur: "بعد" } },
      { id: '26:227:11', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '26:227:12', arabic: "مَا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "after", ur: "بعد" } },
      { id: '26:227:13', arabic: "ظُلِمُوا۟ ۗ", transliteration: "ẓulimū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were wronged", ur: "وہ لوگ were wronged" } },
      { id: '26:227:14', arabic: "وَسَيَعْلَمُ", transliteration: "wasayaʿlamu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ل م", meaning: { en: "And will come to know", ur: "اور will come کو جاننا" } },
      { id: '26:227:15', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '26:227:16', arabic: "ظَلَمُوٓا۟", transliteration: "ẓalamū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have wronged", ur: "have wronged" } },
      { id: '26:227:17', arabic: "أَىَّ", transliteration: "ayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) what", ur: "(کو) کیا" } },
      { id: '26:227:18', arabic: "مُنقَلَبٍۢ", transliteration: "munqalabin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "return", ur: "return" } },
      { id: '26:227:19', arabic: "يَنقَلِبُونَ", transliteration: "yanqalibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will return", ur: "وہ لوگ will return" } }
    ],
    structure: {
      relationships: [
        { from: 16, to: 17, label: 'فعل + فاعل' }
      ],
    },
  },
};

export default SURAH_26_TREEBANK;
