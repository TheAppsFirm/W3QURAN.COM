/**
 * Surah Ta-Ha (20) - Treebank Data (Ayahs 1-10)
 * Ta-Ha - 135 Ayahs Total
 *
 * Theme: Story of Moses, comfort to Prophet Muhammad, guidance
 * Revelation: Makki
 */

const SURAH_20_TREEBANK = {
  1: {
    text: 'طه',
    translation: {
      en: 'Ta, Ha.',
      ur: 'طا ہا۔',
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        id: '20:1:1',
        position: 1,
        arabic: 'طه',
        transliteration: 'Ta-Ha',
        pos: ['INIT'],
        posLabel: 'INIT',
        root: null,
        meaning: { en: 'Ta Ha', ur: 'طا ہا' },
        grammarRole: 'huruf-muqattaat',
        grammarExplanations: {
          en: 'Disconnected letters (حروف مقطعات). Some scholars say it means "O man" addressing Prophet ﷺ.',
          ur: 'حروف مقطعات۔ بعض علماء کہتے ہیں اس کا مطلب "اے انسان" ہے جو نبی ﷺ کو خطاب ہے۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Opening Mystery', ur: 'آغاز کا راز' },
            explanation: {
              en: 'The surah is named after these letters. They create anticipation for the divine message that follows.',
              ur: 'سورہ کا نام ان حروف پر ہے۔ یہ آنے والے الٰہی پیغام کے لیے تجسس پیدا کرتے ہیں۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Possible Meaning', ur: 'ممکنہ معنی' },
            points: [
              {
                en: 'Some say طه is a Nabataean word meaning "O man" - a gentle address to the Prophet.',
                ur: 'بعض کہتے ہیں طه نبطی زبان میں "اے انسان" ہے - نبی کو نرم خطاب۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'huruf-muqattaat',
      explanation: {
        en: 'Opening with two disconnected letters - surah named after them',
        ur: 'دو حروف مقطعات سے آغاز - سورہ کا نام انہی پر',
      },
    },
  },

  2: {
    text: 'مَا أَنزَلْنَا عَلَيْكَ الْقُرْآنَ لِتَشْقَىٰ',
    translation: {
      en: 'We have not sent down to you the Quran that you be distressed.',
      ur: 'ہم نے تم پر قرآن اس لیے نازل نہیں کیا کہ تم مشقت میں پڑو۔',
    },
    words: [
      {
        id: '20:2:1',
        position: 1,
        arabic: 'مَا',
        transliteration: 'ma',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: { en: 'Not', ur: 'نہیں' },
        grammarRole: 'nafi',
      },
      {
        id: '20:2:2',
        position: 2,
        arabic: 'أَنزَلْنَا',
        transliteration: 'anzalna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        lemma: 'أَنْزَلَ',
        meaning: { en: 'We sent down', ur: 'ہم نے نازل کیا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '1st', number: 'plural', form: 'IV' },
      },
      {
        id: '20:2:3',
        position: 3,
        arabic: 'عَلَيْكَ',
        transliteration: 'alayka',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'upon you', ur: 'تم پر' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '20:2:4',
        position: 4,
        arabic: 'الْقُرْآنَ',
        transliteration: 'al-Qurana',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ر أ',
        lemma: 'قُرْآن',
        meaning: { en: 'the Quran', ur: 'قرآن' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '20:2:5',
        position: 5,
        arabic: 'لِتَشْقَىٰ',
        transliteration: 'li-tashqa',
        pos: ['P', 'V'],
        posLabel: 'P+V',
        root: 'ش ق ي',
        lemma: 'شَقِيَ',
        meaning: { en: 'that you be distressed', ur: 'تاکہ تم مشقت میں پڑو' },
        grammarRole: 'lam-talil',
        features: { aspect: 'imperfect', mood: 'subjunctive' },
        advanced: {
          balagha: {
            title: { en: 'Comfort to the Prophet', ur: 'نبی کو تسلی' },
            explanation: {
              en: 'The Prophet ﷺ was standing so long in night prayer that his feet swelled. Allah comforts him.',
              ur: 'نبی ﷺ اتنی دیر رات کی نماز میں کھڑے رہتے کہ پاؤں سوج جاتے۔ اللہ تسلی دیتا ہے۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'negation-purpose',
      explanation: {
        en: 'Negation of distress as purpose - Quran is mercy, not burden',
        ur: 'مشقت کے مقصد کی نفی - قرآن رحمت ہے، بوجھ نہیں',
      },
    
       relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 4, label: 'فعل + مفعول به' }
      ],
    },
  },

  3: {
    text: 'إِلَّا تَذْكِرَةً لِّمَن يَخْشَىٰ',
    translation: {
      en: 'But only as a reminder for those who fear [Allah].',
      ur: 'بلکہ اس شخص کی نصیحت کے لیے جو ڈرتا ہے۔',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' }
      ],
    },
    },
    words: [
      {
        id: '20:3:1',
        position: 1,
        arabic: 'إِلَّا',
        transliteration: 'illa',
        pos: ['RES'],
        posLabel: 'RES',
        root: null,
        meaning: { en: 'But only/Except', ur: 'مگر/بلکہ' },
        grammarRole: 'istithna',
      },
      {
        id: '20:3:2',
        position: 2,
        arabic: 'تَذْكِرَةً',
        transliteration: 'tadhkiratan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        lemma: 'تَذْكِرَة',
        meaning: { en: 'a reminder', ur: 'نصیحت' },
        grammarRole: 'mustathna',
        case: 'mansoob',
        advanced: {
          rootFamily: {
            root: 'ذ ك ر',
            meaning: { en: 'to remember, mention, remind', ur: 'یاد کرنا، ذکر کرنا' },
            words: [
              { arabic: 'ذِكْر', count: 76, meaning: { en: 'remembrance', ur: 'ذکر' } },
              { arabic: 'تَذْكِرَة', count: 9, meaning: { en: 'reminder', ur: 'نصیحت' } },
              { arabic: 'ذَاكِر', count: 2, meaning: { en: 'one who remembers', ur: 'ذکر کرنے والا' } },
            ],
          },
        },
      },
      {
        id: '20:3:3',
        position: 3,
        arabic: 'لِّمَن',
        transliteration: 'li-man',
        pos: ['P', 'REL'],
        posLabel: 'P+REL',
        root: null,
        meaning: { en: 'for those who', ur: 'اس کے لیے جو' },
        grammarRole: 'jarr-mawsool',
      },
      {
        id: '20:3:4',
        position: 4,
        arabic: 'يَخْشَىٰ',
        transliteration: 'yakhsha',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ش ي',
        lemma: 'خَشِيَ',
        meaning: { en: 'fears (Allah)', ur: 'ڈرتا ہے' },
        grammarRole: 'sila',
        features: { aspect: 'imperfect', person: '3rd', gender: 'masculine', number: 'singular' },
        advanced: {
          balagha: {
            title: { en: 'Beneficial Reminder', ur: 'فائدہ مند نصیحت' },
            explanation: {
              en: 'The Quran benefits those with خَشْيَة (reverential fear) - open hearts receive guidance.',
              ur: 'قرآن ان کو فائدہ دیتا ہے جن میں خشیت (خوف الٰہی) ہو - کھلے دل ہدایت پاتے ہیں۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'exception-clause',
      explanation: {
        en: 'Exception - Quran is only a reminder for the God-fearing',
        ur: 'استثناء - قرآن صرف خدا ترس لوگوں کے لیے نصیحت ہے',
      },
    },
  },

  4: {
    text: 'تَنزِيلًا مِّمَّنْ خَلَقَ الْأَرْضَ وَالسَّمَاوَاتِ الْعُلَى',
    translation: {
      en: 'A revelation from He who created the earth and highest heavens.',
      ur: 'اس کی طرف سے نازل کیا ہوا جس نے زمین اور اونچے آسمانوں کو پیدا کیا۔',
    },
    words: [
      {
        id: '20:4:1',
        position: 1,
        arabic: 'تَنزِيلًا',
        transliteration: 'tanzilan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ز ل',
        lemma: 'تَنْزِيل',
        meaning: { en: 'A revelation/sending down', ur: 'نازل کردہ' },
        grammarRole: 'hal',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Verbal noun (مصدر) in accusative - emphasizing the act of revelation.',
          ur: 'مصدر منصوب - نزول کے عمل پر زور۔',
        },
      },
      {
        id: '20:4:2',
        position: 2,
        arabic: 'مِّمَّنْ',
        transliteration: 'mimman',
        pos: ['P', 'REL'],
        posLabel: 'P+REL',
        root: null,
        meaning: { en: 'from He who', ur: 'اس کی طرف سے جس نے' },
        grammarRole: 'jarr-mawsool',
      },
      {
        id: '20:4:3',
        position: 3,
        arabic: 'خَلَقَ',
        transliteration: 'khalaqa',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ل ق',
        lemma: 'خَلَقَ',
        meaning: { en: 'created', ur: 'پیدا کیا' },
        grammarRole: 'sila',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
      },
      {
        id: '20:4:4',
        position: 4,
        arabic: 'الْأَرْضَ',
        transliteration: 'al-arda',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ر ض',
        meaning: { en: 'the earth', ur: 'زمین' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '20:4:5',
        position: 5,
        arabic: 'وَالسَّمَاوَاتِ',
        transliteration: 'was-samawati',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'س م و',
        lemma: 'سَمَاء',
        meaning: { en: 'and the heavens', ur: 'اور آسمانوں' },
        grammarRole: 'matoof',
        case: 'mansoob',
      },
      {
        id: '20:4:6',
        position: 6,
        arabic: 'الْعُلَى',
        transliteration: 'al-ula',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ل و',
        lemma: 'أَعْلَى',
        meaning: { en: 'the highest', ur: 'اونچے' },
        grammarRole: 'sifa',
        case: 'majroor',
        advanced: {
          balagha: {
            title: { en: 'Majesty of Creator', ur: 'خالق کی عظمت' },
            explanation: {
              en: 'Describing Allah as Creator of earth and highest heavens establishes His authority.',
              ur: 'اللہ کو زمین اور بلند آسمانوں کا خالق بتانا اس کے اختیار کو ثابت کرتا ہے۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'description-source',
      explanation: {
        en: 'Describing the Quran\'s source - the Creator of everything',
        ur: 'قرآن کے ماخذ کا بیان - ہر چیز کا خالق',
      },
    
       relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 6, label: 'عطف' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },

  5: {
    text: 'الرَّحْمَـٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ',
    translation: {
      en: 'The Most Merciful [who is] above the Throne established.',
      ur: 'وہ رحمٰن جو عرش پر مستوی ہے۔',
    },
    words: [
      {
        id: '20:5:1',
        position: 1,
        arabic: 'الرَّحْمَـٰنُ',
        transliteration: 'Ar-Rahmanu',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'ر ح م',
        lemma: 'رَحْمٰن',
        meaning: { en: 'The Most Merciful', ur: 'رحمٰن' },
        grammarRole: 'mubtada',
        case: 'marfoo',
        advanced: {
          rootFamily: {
            root: 'ر ح م',
            meaning: { en: 'mercy, compassion', ur: 'رحم، مہربانی' },
            words: [
              { arabic: 'رَحْمٰن', count: 57, meaning: { en: 'Most Merciful (intense)', ur: 'بہت مہربان' } },
              { arabic: 'رَحِيم', count: 114, meaning: { en: 'Merciful (continuous)', ur: 'رحم کرنے والا' } },
              { arabic: 'رَحْمَة', count: 79, meaning: { en: 'mercy', ur: 'رحمت' } },
            ],
          },
        },
      },
      {
        id: '20:5:2',
        position: 2,
        arabic: 'عَلَى',
        transliteration: 'ala',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'above/upon', ur: 'پر' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '20:5:3',
        position: 3,
        arabic: 'الْعَرْشِ',
        transliteration: 'al-arshi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ر ش',
        lemma: 'عَرْش',
        meaning: { en: 'the Throne', ur: 'عرش' },
        grammarRole: 'majroor',
        case: 'majroor',
        grammarExplanations: {
          en: 'The Throne (العرش) - greatest of Allah\'s creations, above all creation.',
          ur: 'عرش - اللہ کی سب سے بڑی مخلوق، تمام مخلوقات سے اوپر۔',
        },
      },
      {
        id: '20:5:4',
        position: 4,
        arabic: 'اسْتَوَىٰ',
        transliteration: 'istawa',
        pos: ['V'],
        posLabel: 'V',
        root: 'س و ي',
        lemma: 'اِسْتَوَى',
        meaning: { en: 'established (Himself)', ur: 'مستوی ہوا' },
        grammarRole: 'khabar',
        features: { aspect: 'perfect', person: '3rd', form: 'VIII' },
        advanced: {
          balagha: {
            title: { en: 'Divine Attribute', ur: 'صفت الٰہی' },
            explanation: {
              en: 'استواء على العرش - a divine attribute we affirm without asking "how" (بلا كيف).',
              ur: 'استواء على العرش - الٰہی صفت جسے ہم "کیسے" پوچھے بغیر مانتے ہیں (بلا کیف)۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'nominal-attribute',
      explanation: {
        en: 'Statement of Allah\'s attribute - established upon the Throne',
        ur: 'اللہ کی صفت کا بیان - عرش پر مستوی',
      },
    
       relationships: [
        { from: 1, to: 4, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },

  6: {
    text: 'لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَمَا بَيْنَهُمَا وَمَا تَحْتَ الثَّرَىٰ',
    translation: {
      en: 'To Him belongs what is in the heavens and what is on the earth and what is between them and what is under the soil.',
      ur: 'اس کا ہے جو کچھ آسمانوں میں ہے اور جو زمین میں ہے اور جو ان کے درمیان ہے اور جو مٹی کے نیچے ہے۔',
    },
    words: [
      {
        id: '20:6:1',
        position: 1,
        arabic: 'لَهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'To Him belongs', ur: 'اس کا ہے' },
        grammarRole: 'khabar-muqaddam',
      },
      {
        id: '20:6:2',
        position: 2,
        arabic: 'مَا',
        transliteration: 'ma',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: { en: 'what', ur: 'جو کچھ' },
        grammarRole: 'mubtada-muakhkhar',
      },
      {
        id: '20:6:3',
        position: 3,
        arabic: 'فِي',
        transliteration: 'fi',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'in', ur: 'میں' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '20:6:4',
        position: 4,
        arabic: 'السَّمَاوَاتِ',
        transliteration: 'as-samawati',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: { en: 'the heavens', ur: 'آسمانوں' },
        grammarRole: 'majroor',
      },
      {
        id: '20:6:5',
        position: 5,
        arabic: 'وَمَا',
        transliteration: 'wa-ma',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: { en: 'and what', ur: 'اور جو' },
        grammarRole: 'atf',
      },
      {
        id: '20:6:6',
        position: 6,
        arabic: 'فِي',
        transliteration: 'fi',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'in/on', ur: 'میں' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '20:6:7',
        position: 7,
        arabic: 'الْأَرْضِ',
        transliteration: 'al-ardi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ر ض',
        meaning: { en: 'the earth', ur: 'زمین' },
        grammarRole: 'majroor',
      },
      {
        id: '20:6:8',
        position: 8,
        arabic: 'وَمَا',
        transliteration: 'wa-ma',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: { en: 'and what', ur: 'اور جو' },
        grammarRole: 'atf',
      },
      {
        id: '20:6:9',
        position: 9,
        arabic: 'بَيْنَهُمَا',
        transliteration: 'baynahuma',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ب ي ن',
        meaning: { en: 'between them', ur: 'ان کے درمیان' },
        grammarRole: 'zarf',
      },
      {
        id: '20:6:10',
        position: 10,
        arabic: 'وَمَا',
        transliteration: 'wa-ma',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: { en: 'and what', ur: 'اور جو' },
        grammarRole: 'atf',
      },
      {
        id: '20:6:11',
        position: 11,
        arabic: 'تَحْتَ',
        transliteration: 'tahta',
        pos: ['N'],
        posLabel: 'N',
        root: 'ت ح ت',
        meaning: { en: 'under', ur: 'نیچے' },
        grammarRole: 'zarf',
      },
      {
        id: '20:6:12',
        position: 12,
        arabic: 'الثَّرَىٰ',
        transliteration: 'ath-thara',
        pos: ['N'],
        posLabel: 'N',
        root: 'ث ر ي',
        lemma: 'ثَرَى',
        meaning: { en: 'the soil/ground', ur: 'مٹی' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        advanced: {
          balagha: {
            title: { en: 'Complete Sovereignty', ur: 'مکمل حاکمیت' },
            explanation: {
              en: 'Four realms mentioned: heavens, earth, between them, under soil - Allah owns everything.',
              ur: 'چار دائرے: آسمان، زمین، ان کے درمیان، مٹی کے نیچے - سب کچھ اللہ کا ہے۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'possession-declaration',
      explanation: {
        en: 'Declaration of Allah\'s complete ownership of all creation',
        ur: 'تمام مخلوقات پر اللہ کی مکمل ملکیت کا اعلان',
      },
    
       relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  7: {
    text: 'وَإِن تَجْهَرْ بِالْقَوْلِ فَإِنَّهُ يَعْلَمُ السِّرَّ وَأَخْفَى',
    translation: {
      en: 'And if you speak aloud - then indeed, He knows the secret and what is [even] more hidden.',
      ur: 'اور اگر تم زور سے بولو تو وہ تو چھپی باتوں کو بلکہ اس سے بھی زیادہ پوشیدہ کو جانتا ہے۔',
    },
    words: [
      {
        id: '20:7:1',
        position: 1,
        arabic: 'وَإِن',
        transliteration: 'wa-in',
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        root: null,
        meaning: { en: 'And if', ur: 'اور اگر' },
        grammarRole: 'shart',
      },
      {
        id: '20:7:2',
        position: 2,
        arabic: 'تَجْهَرْ',
        transliteration: 'tajhar',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ه ر',
        lemma: 'جَهَرَ',
        meaning: { en: 'you speak aloud', ur: 'تم زور سے بولو' },
        grammarRole: 'fil-shart',
        case: 'majzoom',
        features: { aspect: 'imperfect', mood: 'jussive', person: '2nd' },
      },
      {
        id: '20:7:3',
        position: 3,
        arabic: 'بِالْقَوْلِ',
        transliteration: 'bil-qawli',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ق و ل',
        meaning: { en: 'with speech', ur: 'بات کے ساتھ' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '20:7:4',
        position: 4,
        arabic: 'فَإِنَّهُ',
        transliteration: 'fa-innahu',
        pos: ['CONJ', 'ACC', 'PRON'],
        posLabel: 'CONJ+ACC+PRON',
        root: null,
        meaning: { en: 'then indeed He', ur: 'تو بیشک وہ' },
        grammarRole: 'jawab-shart',
      },
      {
        id: '20:7:5',
        position: 5,
        arabic: 'يَعْلَمُ',
        transliteration: 'yalamu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        lemma: 'عَلِمَ',
        meaning: { en: 'He knows', ur: 'جانتا ہے' },
        grammarRole: 'khabar-inna',
        features: { aspect: 'imperfect', person: '3rd' },
      },
      {
        id: '20:7:6',
        position: 6,
        arabic: 'السِّرَّ',
        transliteration: 'as-sirra',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ر ر',
        lemma: 'سِرّ',
        meaning: { en: 'the secret', ur: 'چھپی بات' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '20:7:7',
        position: 7,
        arabic: 'وَأَخْفَى',
        transliteration: 'wa-akhfa',
        pos: ['CONJ', 'ADJ'],
        posLabel: 'CONJ+ADJ',
        root: 'خ ف ي',
        lemma: 'أَخْفَى',
        meaning: { en: 'and what is more hidden', ur: 'اور زیادہ پوشیدہ' },
        grammarRole: 'matoof',
        features: { type: 'ism-tafdil' },
        advanced: {
          balagha: {
            title: { en: 'Beyond Secrets', ur: 'رازوں سے آگے' },
            explanation: {
              en: 'أَخْفَى - even more hidden than secrets: innermost thoughts, subconscious, future intentions.',
              ur: 'أَخْفَى - رازوں سے بھی زیادہ پوشیدہ: دل کے خیالات، لاشعور، آئندہ ارادے۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'conditional-knowledge',
      explanation: {
        en: 'Conditional + statement of Allah\'s infinite knowledge',
        ur: 'شرطی جملہ + اللہ کے لامحدود علم کا بیان',
      },
    
       relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },

  8: {
    text: 'اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ',
    translation: {
      en: 'Allah - there is no deity except Him. To Him belong the best names.',
      ur: 'اللہ وہ ہے جس کے سوا کوئی معبود نہیں۔ اس کے لیے سب اچھے نام ہیں۔',
    },
    words: [
      {
        id: '20:8:1',
        position: 1,
        arabic: 'اللَّهُ',
        transliteration: 'Allahu',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        meaning: { en: 'Allah', ur: 'اللہ' },
        grammarRole: 'mubtada',
        case: 'marfoo',
      },
      {
        id: '20:8:2',
        position: 2,
        arabic: 'لَا',
        transliteration: 'la',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: { en: 'no', ur: 'نہیں' },
        grammarRole: 'nafi-jins',
      },
      {
        id: '20:8:3',
        position: 3,
        arabic: 'إِلَـٰهَ',
        transliteration: 'ilaha',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        lemma: 'إِلٰه',
        meaning: { en: 'deity/god', ur: 'معبود' },
        grammarRole: 'ism-la',
        case: 'mansoob',
      },
      {
        id: '20:8:4',
        position: 4,
        arabic: 'إِلَّا',
        transliteration: 'illa',
        pos: ['RES'],
        posLabel: 'RES',
        root: null,
        meaning: { en: 'except', ur: 'سوائے' },
        grammarRole: 'istithna',
      },
      {
        id: '20:8:5',
        position: 5,
        arabic: 'هُوَ',
        transliteration: 'huwa',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: { en: 'Him', ur: 'اس کے' },
        grammarRole: 'badal',
        case: 'marfoo',
      },
      {
        id: '20:8:6',
        position: 6,
        arabic: 'لَهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'To Him belong', ur: 'اس کے لیے' },
        grammarRole: 'khabar-muqaddam',
      },
      {
        id: '20:8:7',
        position: 7,
        arabic: 'الْأَسْمَاءُ',
        transliteration: 'al-asmau',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        lemma: 'اسم',
        meaning: { en: 'the names', ur: 'نام' },
        grammarRole: 'mubtada-muakhkhar',
        case: 'marfoo',
      },
      {
        id: '20:8:8',
        position: 8,
        arabic: 'الْحُسْنَىٰ',
        transliteration: 'al-husna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ح س ن',
        lemma: 'حُسْنَى',
        meaning: { en: 'the most beautiful/best', ur: 'سب سے اچھے' },
        grammarRole: 'sifa',
        case: 'marfoo',
        advanced: {
          balagha: {
            title: { en: 'Beautiful Names', ur: 'اسماء الحسنیٰ' },
            explanation: {
              en: 'الأسماء الحسنى - the 99 beautiful names of Allah, each describing His perfect attributes.',
              ur: 'الأسماء الحسنیٰ - اللہ کے 99 خوبصورت نام، ہر ایک اس کی کامل صفات بیان کرتا ہے۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'tawheed-names',
      explanation: {
        en: 'Declaration of Tawheed + Allah\'s beautiful names',
        ur: 'توحید کا اعلان + اللہ کے اسماء الحسنیٰ',
      },
    
       relationships: [
        { from: 1, to: 6, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'بدل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },

  9: {
    text: 'وَهَلْ أَتَاكَ حَدِيثُ مُوسَىٰ',
    translation: {
      en: 'And has the story of Moses reached you?',
      ur: 'اور کیا تمہیں موسیٰ کی خبر پہنچی؟',
    },
    words: [
      {
        id: '20:9:1',
        position: 1,
        arabic: 'وَهَلْ',
        transliteration: 'wa-hal',
        pos: ['CONJ', 'INT'],
        posLabel: 'CONJ+INT',
        root: null,
        meaning: { en: 'And has', ur: 'اور کیا' },
        grammarRole: 'istifham',
        grammarExplanations: {
          en: 'Rhetorical question (استفهام تشويقي) - to create anticipation for the story.',
          ur: 'سوال تشویقی - کہانی کے لیے تجسس پیدا کرنے کو۔',
        },
      },
      {
        id: '20:9:2',
        position: 2,
        arabic: 'أَتَاكَ',
        transliteration: 'ataka',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'أ ت ي',
        lemma: 'أَتَى',
        meaning: { en: 'reached you', ur: 'تمہیں پہنچی' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
      },
      {
        id: '20:9:3',
        position: 3,
        arabic: 'حَدِيثُ',
        transliteration: 'hadithu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح د ث',
        lemma: 'حَدِيث',
        meaning: { en: 'the story/news', ur: 'خبر/کہانی' },
        grammarRole: 'fail',
        case: 'marfoo',
      },
      {
        id: '20:9:4',
        position: 4,
        arabic: 'مُوسَىٰ',
        transliteration: 'Musa',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        lemma: 'مُوسَى',
        meaning: { en: 'Moses', ur: 'موسیٰ' },
        grammarRole: 'mudaf-ilayh',
        advanced: {
          balagha: {
            title: { en: 'Story Introduction', ur: 'کہانی کا تعارف' },
            explanation: {
              en: 'Beginning the detailed story of Moses - comfort for Prophet Muhammad ﷺ facing similar challenges.',
              ur: 'موسیٰ کی تفصیلی کہانی کا آغاز - نبی ﷺ کے لیے تسلی جو ملتی جلتی مشکلات کا سامنا کر رہے تھے۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'rhetorical-introduction',
      explanation: {
        en: 'Rhetorical question introducing the story of Moses',
        ur: 'بلاغی سوال جو موسیٰ کی کہانی کا تعارف کراتا ہے',
      },
    
       relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  10: {
    text: 'إِذْ رَأَىٰ نَارًا فَقَالَ لِأَهْلِهِ امْكُثُوا إِنِّي آنَسْتُ نَارًا لَّعَلِّي آتِيكُم مِّنْهَا بِقَبَسٍ أَوْ أَجِدُ عَلَى النَّارِ هُدًى',
    translation: {
      en: 'When he saw a fire and said to his family, "Stay here; indeed, I have perceived a fire; perhaps I can bring you a torch or find at the fire some guidance."',
      ur: 'جب اس نے آگ دیکھی تو اپنے گھر والوں سے کہا: ٹھہرو، میں نے آگ دیکھی ہے، شاید میں تمہارے لیے کوئی انگارہ لاؤں یا آگ کے پاس کوئی راستہ معلوم کروں۔',
    },
    words: [
      {
        id: '20:10:1',
        position: 1,
        arabic: 'إِذْ',
        transliteration: 'idh',
        pos: ['T'],
        posLabel: 'T',
        root: null,
        meaning: { en: 'When', ur: 'جب' },
        grammarRole: 'zarf',
      },
      {
        id: '20:10:2',
        position: 2,
        arabic: 'رَأَىٰ',
        transliteration: 'raa',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر أ ي',
        lemma: 'رَأَى',
        meaning: { en: 'he saw', ur: 'اس نے دیکھا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
      },
      {
        id: '20:10:3',
        position: 3,
        arabic: 'نَارًا',
        transliteration: 'naran',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ر',
        lemma: 'نَار',
        meaning: { en: 'a fire', ur: 'آگ' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
        advanced: {
          balagha: {
            title: { en: 'The Divine Fire', ur: 'الٰہی آگ' },
            explanation: {
              en: 'Moses saw what appeared to be fire - but it was divine light at the burning bush.',
              ur: 'موسیٰ نے جو آگ دیکھی - وہ جلتی جھاڑی میں الٰہی نور تھا۔',
            },
          },
        },
      },
      {
        id: '20:10:4',
        position: 4,
        arabic: 'فَقَالَ',
        transliteration: 'fa-qala',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: { en: 'so he said', ur: 'تو کہا' },
        grammarRole: 'verb',
      },
      {
        id: '20:10:5',
        position: 5,
        arabic: 'لِأَهْلِهِ',
        transliteration: 'li-ahlihi',
        pos: ['P', 'N', 'PRON'],
        posLabel: 'P+N+PRON',
        root: 'أ ه ل',
        meaning: { en: 'to his family', ur: 'اپنے گھر والوں سے' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '20:10:6',
        position: 6,
        arabic: 'امْكُثُوا',
        transliteration: 'umkuthu',
        pos: ['V'],
        posLabel: 'V',
        root: 'م ك ث',
        lemma: 'مَكَثَ',
        meaning: { en: 'Stay (here)', ur: 'ٹھہرو' },
        grammarRole: 'verb',
        features: { aspect: 'imperative', person: '2nd', number: 'plural' },
      },
      {
        id: '20:10:7',
        position: 7,
        arabic: 'إِنِّي',
        transliteration: 'inni',
        pos: ['ACC', 'PRON'],
        posLabel: 'ACC+PRON',
        root: null,
        meaning: { en: 'Indeed I', ur: 'بیشک میں نے' },
        grammarRole: 'tawkid',
      },
      {
        id: '20:10:8',
        position: 8,
        arabic: 'آنَسْتُ',
        transliteration: 'anastu',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ن س',
        lemma: 'آنَسَ',
        meaning: { en: 'I have perceived', ur: 'میں نے دیکھا' },
        grammarRole: 'khabar-inna',
        features: { aspect: 'perfect', person: '1st', number: 'singular', form: 'IV' },
        grammarExplanations: {
          en: 'آنَسَ (Form IV) - to perceive with comfort/familiarity, not fear.',
          ur: 'آنَسَ (باب افعال) - راحت/انسیت کے ساتھ محسوس کرنا، خوف نہیں۔',
        },
      },
      {
        id: '20:10:9',
        position: 9,
        arabic: 'نَارًا',
        transliteration: 'naran',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ر',
        meaning: { en: 'a fire', ur: 'آگ' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '20:10:10',
        position: 10,
        arabic: 'لَّعَلِّي',
        transliteration: 'laalli',
        pos: ['ACC', 'PRON'],
        posLabel: 'ACC+PRON',
        root: null,
        meaning: { en: 'perhaps I', ur: 'شاید میں' },
        grammarRole: 'taraji',
      },
      {
        id: '20:10:11',
        position: 11,
        arabic: 'آتِيكُم',
        transliteration: 'atikum',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'أ ت ي',
        lemma: 'آتَى',
        meaning: { en: 'I bring you', ur: 'تمہیں لاؤں' },
        grammarRole: 'khabar-laalla',
      },
      {
        id: '20:10:12',
        position: 12,
        arabic: 'مِّنْهَا',
        transliteration: 'minha',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'from it', ur: 'اس سے' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '20:10:13',
        position: 13,
        arabic: 'بِقَبَسٍ',
        transliteration: 'bi-qabasin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ق ب س',
        lemma: 'قَبَس',
        meaning: { en: 'a torch/burning brand', ur: 'انگارہ' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '20:10:14',
        position: 14,
        arabic: 'أَوْ',
        transliteration: 'aw',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: { en: 'or', ur: 'یا' },
        grammarRole: 'atf',
      },
      {
        id: '20:10:15',
        position: 15,
        arabic: 'أَجِدُ',
        transliteration: 'ajidu',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ج د',
        lemma: 'وَجَدَ',
        meaning: { en: 'I find', ur: 'میں پاؤں' },
        grammarRole: 'verb',
        features: { aspect: 'imperfect', person: '1st' },
      },
      {
        id: '20:10:16',
        position: 16,
        arabic: 'عَلَى',
        transliteration: 'ala',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'at', ur: 'پر' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '20:10:17',
        position: 17,
        arabic: 'النَّارِ',
        transliteration: 'an-nari',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ر',
        meaning: { en: 'the fire', ur: 'آگ' },
        grammarRole: 'majroor',
      },
      {
        id: '20:10:18',
        position: 18,
        arabic: 'هُدًى',
        transliteration: 'hudan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ه د ي',
        lemma: 'هُدَى',
        meaning: { en: 'guidance', ur: 'ہدایت' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
        advanced: {
          balagha: {
            title: { en: 'Seeking Guidance', ur: 'ہدایت کی تلاش' },
            explanation: {
              en: 'Moses sought physical guidance (direction) but found divine guidance (prophethood).',
              ur: 'موسیٰ نے جسمانی رہنمائی (راستہ) ڈھونڈی لیکن الٰہی ہدایت (نبوت) پائی۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'narrative-dialogue',
      explanation: {
        en: 'Beginning of Moses\' encounter - seeing fire, instructing family, seeking warmth/guidance',
        ur: 'موسیٰ کی ملاقات کا آغاز - آگ دیکھنا، گھر والوں کو ہدایت، گرمی/رہنمائی کی تلاش',
      },
    
       relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 2, to: 4, label: 'عطف' },
        { from: 6, to: 9, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'فعل + مفعول به' },
        { from: 15, to: 18, label: 'فعل + مفعول به' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },

  11: {
    text: 'فَلَمَّآ أَتَىٰهَا نُودِىَ يَٰمُوسَىٰٓ',
    translation: {
      en: 'And when he came to it, he was called, "O Moses,',
      ur: 'جب وہاں پہنچے تو آواز آئی کہ موسیٰ'
    },
    words: [
      { id: '20:11:1', arabic: 'فَلَمَّآ', transliteration: 'falammā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then when', ur: 'پھر جب' } },
      { id: '20:11:2', arabic: 'أَتَىٰهَا', transliteration: 'atāhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he came to it', ur: 'وہ آیا کو/تک it' } },
      { id: '20:11:3', arabic: 'نُودِىَ', transliteration: 'nūdiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he was called', ur: 'وہ تھا پکارا' } },
      { id: '20:11:4', arabic: 'يَـٰمُوسَىٰٓ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ] }
  },
  12: {
    text: 'إِنِّىٓ أَنَا۠ رَبُّكَ فَٱخْلَعْ نَعْلَيْكَ ۖ إِنَّكَ بِٱلْوَادِ ٱلْمُقَدَّسِ طُوًۭى',
    translation: {
      en: 'Indeed, I am your Lord, so remove your sandals. Indeed, you are in the sacred valley of Tuwa.',
      ur: 'میں تو تمہارا پروردگار ہوں تو اپنی جوتیاں اتار دو۔ تم (یہاں) پاک میدان (یعنی) طویٰ میں ہو'
    },
    words: [
      { id: '20:12:1', arabic: 'إِنِّىٓ', transliteration: 'innī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, [I]', ur: 'بےشک, [میں]' } },
      { id: '20:12:2', arabic: 'أَنَا۠', transliteration: 'anā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'I Am', ur: 'میں Am' } },
      { id: '20:12:3', arabic: 'رَبُّكَ', transliteration: 'rabbuka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your Lord', ur: 'تمہارا رب' } },
      { id: '20:12:4', arabic: 'فَٱخْلَعْ', transliteration: 'fa-ikh\'laʿ', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so remove', ur: 'پس remove' } },
      { id: '20:12:5', arabic: 'نَعْلَيْكَ ۖ', transliteration: 'naʿlayka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your shoes', ur: 'تمہارا shoes' } },
      { id: '20:12:6', arabic: 'إِنَّكَ', transliteration: 'innaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, you', ur: 'بےشک, تم' } },
      { id: '20:12:7', arabic: 'بِٱلْوَادِ', transliteration: 'bil-wādi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '(are) in the valley', ur: '(ہیں) میں  valley' } },
      { id: '20:12:8', arabic: 'ٱلْمُقَدَّسِ', transliteration: 'l-muqadasi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the sacred', ur: ' sacred' } },
      { id: '20:12:9', arabic: 'طُوًۭى', transliteration: 'ṭuwan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Tuwa', ur: '(کا) Tuwa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' }
      ] }
  },
  13: {
    text: 'وَأَنَا ٱخْتَرْتُكَ فَٱسْتَمِعْ لِمَا يُوحَىٰٓ',
    translation: {
      en: 'And I have chosen you, so listen to what is revealed [to you].',
      ur: 'اور میں نے تم کو انتخاب کرلیا ہے تو جو حکم دیا جائے اسے سنو'
    },
    words: [
      { id: '20:13:1', arabic: 'وَأَنَا', transliteration: 'wa-anā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And I', ur: 'اور میں' } },
      { id: '20:13:2', arabic: 'ٱخْتَرْتُكَ', transliteration: 'ikh\'tartuka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(have) chosen you', ur: '(رکھتے ہو) chosen تم' } },
      { id: '20:13:3', arabic: 'فَٱسْتَمِعْ', transliteration: 'fa-is\'tamiʿ', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so listen', ur: 'پس listen' } },
      { id: '20:13:4', arabic: 'لِمَا', transliteration: 'limā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to what', ur: 'کو/تک کیا/جو' } },
      { id: '20:13:5', arabic: 'يُوحَىٰٓ', transliteration: 'yūḥā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'is revealed', ur: 'ہے نازل کیا' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  14: {
    text: 'إِنَّنِىٓ أَنَا ٱللَّهُ لَآ إِلَٰهَ إِلَّآ أَنَا۠ فَٱعْبُدْنِى وَأَقِمِ ٱلصَّلَوٰةَ لِذِكْرِىٓ',
    translation: {
      en: 'Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.',
      ur: 'بےشک میں ہی خدا ہوں۔ میرے سوا کوئی معبود نہیں تو میری عبادت کرو اور میری یاد کے لئے نماز پڑھا کرو'
    },
    words: [
      { id: '20:14:1', arabic: 'إِنَّنِىٓ', transliteration: 'innanī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, [I]', ur: 'بےشک, [میں]' } },
      { id: '20:14:2', arabic: 'أَنَا', transliteration: 'anā', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'I Am', ur: 'میں Am' } },
      { id: '20:14:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '20:14:4', arabic: 'لَآ', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(There is) no', ur: '(وہاں ہے) نہیں' } },
      { id: '20:14:5', arabic: 'إِلَـٰهَ', transliteration: 'ilāha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'god', ur: 'اللہ' } },
      { id: '20:14:6', arabic: 'إِلَّآ', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'but', ur: 'لیکن' } },
      { id: '20:14:7', arabic: 'أَنَا۠', transliteration: 'anā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'I', ur: 'میں' } },
      { id: '20:14:8', arabic: 'فَٱعْبُدْنِى', transliteration: 'fa-uʿ\'bud\'nī', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so worship Me', ur: 'پس عبادت کرنا Me' } },
      { id: '20:14:9', arabic: 'وَأَقِمِ', transliteration: 'wa-aqimi', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and establish', ur: 'اور قائم کرنا' } },
      { id: '20:14:10', arabic: 'ٱلصَّلَوٰةَ', transliteration: 'l-ṣalata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the prayer', ur: 'نماز' } },
      { id: '20:14:11', arabic: 'لِذِكْرِىٓ', transliteration: 'lidhik\'rī', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for My remembrance', ur: 'کے لیے My remembrance' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' }
      ] }
  },
  15: {
    text: 'إِنَّ ٱلسَّاعَةَ ءَاتِيَةٌ أَكَادُ أُخْفِيهَا لِتُجْزَىٰ كُلُّ نَفْسٍۭ بِمَا تَسْعَىٰ',
    translation: {
      en: 'Indeed, the Hour is coming - I almost conceal it - so that every soul may be recompensed according to that for which it strives.',
      ur: 'قیامت یقیناً آنے والی ہے۔ میں چاہتا ہوں کہ اس (کے وقت) کو پوشیدہ رکھوں تاکہ ہر شخص جو کوشش کرے اس کا بدلا پائے'
    },
    words: [
      { id: '20:15:1', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '20:15:2', arabic: 'ٱلسَّاعَةَ', transliteration: 'l-sāʿata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Hour', ur: ' Hour' } },
      { id: '20:15:3', arabic: 'ءَاتِيَةٌ', transliteration: 'ātiyatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(will be) coming', ur: '(ہوگا) coming' } },
      { id: '20:15:4', arabic: 'أَكَادُ', transliteration: 'akādu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'I almost', ur: 'میں almost' } },
      { id: '20:15:5', arabic: 'أُخْفِيهَا', transliteration: 'ukh\'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[I] hide it', ur: '[میں] hide it' } },
      { id: '20:15:6', arabic: 'لِتُجْزَىٰ', transliteration: 'lituj\'zā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that may be recompensed', ur: 'کہ may be recompensed' } },
      { id: '20:15:7', arabic: 'كُلُّ', transliteration: 'kullu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'every', ur: 'ہر' } },
      { id: '20:15:8', arabic: 'نَفْسٍۭ', transliteration: 'nafsin', pos: ['N'], posLabel: 'N', root: 'ن ف س', meaning: { en: 'soul', ur: 'روح/جان' } },
      { id: '20:15:9', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for what', ur: 'کے لیے کیا/جو' } },
      { id: '20:15:10', arabic: 'تَسْعَىٰ', transliteration: 'tasʿā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it strives', ur: 'it strives' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' }
      ] }
  },
  16: {
    text: 'فَلَا يَصُدَّنَّكَ عَنْهَا مَن لَّا يُؤْمِنُ بِهَا وَٱتَّبَعَ هَوَىٰهُ فَتَرْدَىٰ',
    translation: {
      en: 'So do not let one avert you from it who does not believe in it and follows his desire, for you [then] would perish.',
      ur: 'تو جو شخص اس پر ایمان نہیں رکھتا اور اپنی خواہش کے پیچھے چلتا ہے (کہیں) تم کو اس (کے یقین) سے روک نہ دے تو (اس صورت میں) تم ہلاک ہوجاؤ'
    },
    words: [
      { id: '20:16:1', arabic: 'فَلَا', transliteration: 'falā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So (do) not', ur: 'پس (کرنا) نہیں' } },
      { id: '20:16:2', arabic: 'يَصُدَّنَّكَ', transliteration: 'yaṣuddannaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(let) avert you', ur: '(let) avert تم' } },
      { id: '20:16:3', arabic: 'عَنْهَا', transliteration: 'ʿanhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from it', ur: 'سے it' } },
      { id: '20:16:4', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(one) who', ur: '(one) جو' } },
      { id: '20:16:5', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(does) not', ur: '(does) نہیں' } },
      { id: '20:16:6', arabic: 'يُؤْمِنُ', transliteration: 'yu\'minu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '20:16:7', arabic: 'بِهَا', transliteration: 'bihā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:16:8', arabic: 'وَٱتَّبَعَ', transliteration: 'wa-ittabaʿa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and follows', ur: 'اور follows' } },
      { id: '20:16:9', arabic: 'هَوَىٰهُ', transliteration: 'hawāhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his desires', ur: 'اس کا desires' } },
      { id: '20:16:10', arabic: 'فَتَرْدَىٰ', transliteration: 'fatardā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'lest you perish', ur: 'lest تم perish' } }
    ],
    structure: { relationships: [
        { from: 6, to: 10, label: 'عطف' }
      ] }
  },
  17: {
    text: 'وَمَا تِلْكَ بِيَمِينِكَ يَٰمُوسَىٰ',
    translation: {
      en: 'And what is that in your right hand, O Moses?"',
      ur: 'اور موسی یہ تمہارے داہنے ہاتھ میں کیا ہے'
    },
    words: [
      { id: '20:17:1', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And what', ur: 'اور کیا/جو' } },
      { id: '20:17:2', arabic: 'تِلْكَ', transliteration: 'til\'ka', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: '(is) that', ur: '(ہے) کہ' } },
      { id: '20:17:3', arabic: 'بِيَمِينِكَ', transliteration: 'biyamīnika', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in your right hand', ur: 'میں تمہارا حق ہاتھ' } },
      { id: '20:17:4', arabic: 'يَـٰمُوسَىٰ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ] }
  },
  18: {
    text: 'قَالَ هِىَ عَصَاىَ أَتَوَكَّؤُا۟ عَلَيْهَا وَأَهُشُّ بِهَا عَلَىٰ غَنَمِى وَلِىَ فِيهَا مَـَٔارِبُ أُخْرَىٰ',
    translation: {
      en: 'He said, "It is my staff; I lean upon it, and I bring down leaves for my sheep and I have therein other uses."',
      ur: 'انہوں نے کہا یہ میری لاٹھی ہے۔ اس پر میں سہارا لگاتا ہوں اور اس سے اپنی بکریوں کے لئے پتے جھاڑتا ہوں اور اس میں میرے لئے اور بھی کئی فائدے ہیں'
    },
    words: [
      { id: '20:18:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:18:2', arabic: 'هِىَ', transliteration: 'hiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'It', ur: 'It' } },
      { id: '20:18:3', arabic: 'عَصَاىَ', transliteration: 'ʿaṣāya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) my staff', ur: '(ہے) my staff' } },
      { id: '20:18:4', arabic: 'أَتَوَكَّؤُا۟', transliteration: 'atawakka-u', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'I lean', ur: 'میں lean' } },
      { id: '20:18:5', arabic: 'عَلَيْهَا', transliteration: 'ʿalayhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'upon it', ur: 'پر it' } },
      { id: '20:18:6', arabic: 'وَأَهُشُّ', transliteration: 'wa-ahushu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and I bring down leaves', ur: 'اور میں bring down leaves' } },
      { id: '20:18:7', arabic: 'بِهَا', transliteration: 'bihā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with it', ur: 'ساتھ it' } },
      { id: '20:18:8', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'for', ur: 'کے لیے' } },
      { id: '20:18:9', arabic: 'غَنَمِى', transliteration: 'ghanamī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my sheep', ur: 'my sheep' } },
      { id: '20:18:10', arabic: 'وَلِىَ', transliteration: 'waliya', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and for me', ur: 'اور کے لیے me' } },
      { id: '20:18:11', arabic: 'فِيهَا', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:18:12', arabic: 'مَـَٔارِبُ', transliteration: 'maāribu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) uses', ur: '(ہیں) uses' } },
      { id: '20:18:13', arabic: 'أُخْرَىٰ', transliteration: 'ukh\'rā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'other', ur: 'other' } }
    ],
    structure: { relationships: [{ from: 8, to: 9, label: 'جار + مجرور' }] }
  },
  19: {
    text: 'قَالَ أَلْقِهَا يَٰمُوسَىٰ',
    translation: {
      en: '[Allah] said, "Throw it down, O Moses."',
      ur: 'فرمایا کہ موسیٰ اسے ڈال دو'
    },
    words: [
      { id: '20:19:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:19:2', arabic: 'أَلْقِهَا', transliteration: 'alqihā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Throw it down', ur: 'Throw it down' } },
      { id: '20:19:3', arabic: 'يَـٰمُوسَىٰ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ] }
  },
  20: {
    text: 'فَأَلْقَىٰهَا فَإِذَا هِىَ حَيَّةٌۭ تَسْعَىٰ',
    translation: {
      en: 'So he threw it down, and thereupon it was a snake, moving swiftly.',
      ur: 'تو انہوں نے اس کو ڈال دیا اور وہ ناگہاں سانپ بن کر دوڑنے لگا'
    },
    words: [
      { id: '20:20:1', arabic: 'فَأَلْقَىٰهَا', transliteration: 'fa-alqāhā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So he threw it down', ur: 'پس وہ threw it down' } },
      { id: '20:20:2', arabic: 'فَإِذَا', transliteration: 'fa-idhā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and behold', ur: 'اور behold' } },
      { id: '20:20:3', arabic: 'هِىَ', transliteration: 'hiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'It', ur: 'It' } },
      { id: '20:20:4', arabic: 'حَيَّةٌۭ', transliteration: 'ḥayyatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(was) a snake', ur: '(تھا) ایک snake' } },
      { id: '20:20:5', arabic: 'تَسْعَىٰ', transliteration: 'tasʿā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'moving swiftly', ur: 'moving swiftly' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  21: {
    text: 'قَالَ خُذْهَا وَلَا تَخَفْ ۖ سَنُعِيدُهَا سِيرَتَهَا ٱلْأُولَىٰ',
    translation: {
      en: '[Allah] said, "Seize it and fear not; We will return it to its former condition.',
      ur: 'خدا نے فرمایا کہ اسے پکڑ لو اور ڈرنا مت۔ ہم اس کو ابھی اس کی پہلی حالت پر لوٹا دیں گے'
    },
    words: [
      { id: '20:21:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:21:2', arabic: 'خُذْهَا', transliteration: 'khudh\'hā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Seize it', ur: 'Seize it' } },
      { id: '20:21:3', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and (do) not', ur: 'اور (کرنا) نہیں' } },
      { id: '20:21:4', arabic: 'تَخَفْ ۖ', transliteration: 'takhaf', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'fear', ur: 'ڈرنا' } },
      { id: '20:21:5', arabic: 'سَنُعِيدُهَا', transliteration: 'sanuʿīduhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We will return it', ur: 'ہم  واپس آنا it' } },
      { id: '20:21:6', arabic: 'سِيرَتَهَا', transliteration: 'sīratahā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) its state', ur: '(کو/تک) its state' } },
      { id: '20:21:7', arabic: 'ٱلْأُولَىٰ', transliteration: 'l-ūlā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the former', ur: ' former' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ] }
  },
  22: {
    text: 'وَٱضْمُمْ يَدَكَ إِلَىٰ جَنَاحِكَ تَخْرُجْ بَيْضَآءَ مِنْ غَيْرِ سُوٓءٍ ءَايَةً أُخْرَىٰ',
    translation: {
      en: 'And draw in your hand to your side; it will come out white without disease - another sign,',
      ur: 'اور اپنا ہاتھ اپنی بغل سے لگالو وہ کسی عیب (وبیماری) کے بغیر سفید (چمکتا دمکتا) نکلے گا۔ (یہ) دوسری نشانی (ہے)'
    },
    words: [
      { id: '20:22:1', arabic: 'وَٱضْمُمْ', transliteration: 'wa-uḍ\'mum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And draw near', ur: 'اور draw قریب' } },
      { id: '20:22:2', arabic: 'يَدَكَ', transliteration: 'yadaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your hand', ur: 'تمہارا ہاتھ' } },
      { id: '20:22:3', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '20:22:4', arabic: 'جَنَاحِكَ', transliteration: 'janāḥika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your side', ur: 'تمہارا side' } },
      { id: '20:22:5', arabic: 'تَخْرُجْ', transliteration: 'takhruj', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'it will come out', ur: 'it  آنا out' } },
      { id: '20:22:6', arabic: 'بَيْضَآءَ', transliteration: 'bayḍāa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'white', ur: 'white' } },
      { id: '20:22:7', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'without any', ur: 'without any' } },
      { id: '20:22:8', arabic: 'غَيْرِ', transliteration: 'ghayri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'without any', ur: 'without any' } },
      { id: '20:22:9', arabic: 'سُوٓءٍ', transliteration: 'sūin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'disease', ur: 'disease' } },
      { id: '20:22:10', arabic: 'ءَايَةً', transliteration: 'āyatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) a sign', ur: '(as) ایک نشانی' } },
      { id: '20:22:11', arabic: 'أُخْرَىٰ', transliteration: 'ukh\'rā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'another', ur: 'another' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 7, to: 8, label: 'جار + مجرور' }] }
  },
  23: {
    text: 'لِنُرِيَكَ مِنْ ءَايَٰتِنَا ٱلْكُبْرَى',
    translation: {
      en: 'That We may show you [some] of Our greater signs.',
      ur: 'تاکہ ہم تمہیں اپنے نشانات عظیم دکھائیں'
    },
    words: [
      { id: '20:23:1', arabic: 'لِنُرِيَكَ', transliteration: 'linuriyaka', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'That We may show you', ur: 'کہ ہم may show تم' } },
      { id: '20:23:2', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:23:3', arabic: 'ءَايَـٰتِنَا', transliteration: 'āyātinā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Our Signs', ur: 'ہمارا نشانیاں' } },
      { id: '20:23:4', arabic: 'ٱلْكُبْرَى', transliteration: 'l-kub\'rā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Greatest', ur: ' Greatest' } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }] }
  },
  24: {
    text: 'ٱذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُۥ طَغَىٰ',
    translation: {
      en: 'Go to Pharaoh. Indeed, he has transgressed."',
      ur: 'تم فرعون کے پاس جاؤ (کہ) وہ سرکش ہو رہا ہے'
    },
    words: [
      { id: '20:24:1', arabic: 'ٱذْهَبْ', transliteration: 'idh\'hab', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Go', ur: 'جانا' } },
      { id: '20:24:2', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '20:24:3', arabic: 'فِرْعَوْنَ', transliteration: 'fir\'ʿawna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Firaun', ur: 'Firaun' } },
      { id: '20:24:4', arabic: 'إِنَّهُۥ', transliteration: 'innahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, he', ur: 'بےشک, وہ' } },
      { id: '20:24:5', arabic: 'طَغَىٰ', transliteration: 'ṭaghā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(has) transgressed', ur: '(رکھتا ہے) transgressed' } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }] }
  },
  25: {
    text: 'قَالَ رَبِّ ٱشْرَحْ لِى صَدْرِى',
    translation: {
      en: '[Moses] said, "My Lord, expand for me my breast [with assurance]',
      ur: 'کہا میرے پروردگار (اس کام کے لئے) میرا سینہ کھول دے'
    },
    words: [
      { id: '20:25:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:25:2', arabic: 'رَبِّ', transliteration: 'rabbi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My Lord', ur: 'My رب' } },
      { id: '20:25:3', arabic: 'ٱشْرَحْ', transliteration: 'ish\'raḥ', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Expand', ur: 'Expand' } },
      { id: '20:25:4', arabic: 'لِى', transliteration: 'lī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for me', ur: 'کے لیے me' } },
      { id: '20:25:5', arabic: 'صَدْرِى', transliteration: 'ṣadrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my breast', ur: 'my breast' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  26: {
    text: 'وَيَسِّرْ لِىٓ أَمْرِى',
    translation: {
      en: 'And ease for me my task',
      ur: 'اور میرا کام آسان کردے'
    },
    words: [
      { id: '20:26:1', arabic: 'وَيَسِّرْ', transliteration: 'wayassir', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And ease', ur: 'اور ease' } },
      { id: '20:26:2', arabic: 'لِىٓ', transliteration: 'lī', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for me', ur: 'کے لیے me' } },
      { id: '20:26:3', arabic: 'أَمْرِى', transliteration: 'amrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my task', ur: 'my task' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ] }
  },
  27: {
    text: 'وَٱحْلُلْ عُقْدَةًۭ مِّن لِّسَانِى',
    translation: {
      en: 'And untie the knot from my tongue',
      ur: 'اور میری زبان کی گرہ کھول دے'
    },
    words: [
      { id: '20:27:1', arabic: 'وَٱحْلُلْ', transliteration: 'wa-uḥ\'lul', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And untie', ur: 'اور untie' } },
      { id: '20:27:2', arabic: 'عُقْدَةًۭ', transliteration: 'ʿuq\'datan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) knot', ur: '() knot' } },
      { id: '20:27:3', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:27:4', arabic: 'لِّسَانِى', transliteration: 'lisānī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my tongue', ur: 'my tongue' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ] }
  },
  28: {
    text: 'يَفْقَهُوا۟ قَوْلِى',
    translation: {
      en: 'That they may understand my speech.',
      ur: 'تاکہ وہ بات سمجھ لیں'
    },
    words: [
      { id: '20:28:1', arabic: 'يَفْقَهُوا۟', transliteration: 'yafqahū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'That they may understand', ur: 'کہ وہ may understand' } },
      { id: '20:28:2', arabic: 'قَوْلِى', transliteration: 'qawlī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my speech', ur: 'my speech' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ] }
  },
  29: {
    text: 'وَٱجْعَل لِّى وَزِيرًۭا مِّنْ أَهْلِى',
    translation: {
      en: 'And appoint for me a minister from my family -',
      ur: 'اور میرے گھر والوں میں سے (ایک کو) میرا وزیر (یعنی مددگار) مقرر فرما'
    },
    words: [
      { id: '20:29:1', arabic: 'وَٱجْعَل', transliteration: 'wa-ij\'ʿal', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And appoint', ur: 'اور appoint' } },
      { id: '20:29:2', arabic: 'لِّى', transliteration: 'lī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for me', ur: 'کے لیے me' } },
      { id: '20:29:3', arabic: 'وَزِيرًۭا', transliteration: 'wazīran', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'a minister', ur: 'ایک minister' } },
      { id: '20:29:4', arabic: 'مِّنْ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:29:5', arabic: 'أَهْلِى', transliteration: 'ahlī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my family', ur: 'my family' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  30: {
    text: 'هَٰرُونَ أَخِى',
    translation: {
      en: 'Aaron, my brother.',
      ur: '(یعنی) میرے بھائی ہارون کو'
    },
    words: [
      { id: '20:30:1', arabic: 'هَـٰرُونَ', transliteration: 'hārūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Harun', ur: 'Harun' } },
      { id: '20:30:2', arabic: 'أَخِى', transliteration: 'akhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my brother', ur: 'my brother' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ] }
  },
  31: {
    text: 'ٱشْدُدْ بِهِۦٓ أَزْرِى',
    translation: {
      en: 'Increase through him my strength',
      ur: 'اس سے میری قوت کو مضبوط فرما'
    },
    words: [
      { id: '20:31:1', arabic: 'ٱشْدُدْ', transliteration: 'ush\'dud', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Reinforce', ur: 'Reinforce' } },
      { id: '20:31:2', arabic: 'بِهِۦٓ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'through him', ur: 'through him' } },
      { id: '20:31:3', arabic: 'أَزْرِى', transliteration: 'azrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my strength', ur: 'my strength' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ] }
  },
  32: {
    text: 'وَأَشْرِكْهُ فِىٓ أَمْرِى',
    translation: {
      en: 'And let him share my task',
      ur: 'اور اسے میرے کام میں شریک کر'
    },
    words: [
      { id: '20:32:1', arabic: 'وَأَشْرِكْهُ', transliteration: 'wa-ashrik\'hu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And make him share', ur: 'اور بنانا him share' } },
      { id: '20:32:2', arabic: 'فِىٓ', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[in]', ur: '[میں]' } },
      { id: '20:32:3', arabic: 'أَمْرِى', transliteration: 'amrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my task', ur: 'my task' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ] }
  },
  33: {
    text: 'كَىْ نُسَبِّحَكَ كَثِيرًۭا',
    translation: {
      en: 'That we may exalt You much',
      ur: 'تاکہ ہم تیری بہت سی تسبیح کریں'
    },
    words: [
      { id: '20:33:1', arabic: 'كَىْ', transliteration: 'kay', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '20:33:2', arabic: 'نُسَبِّحَكَ', transliteration: 'nusabbiḥaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we may glorify You', ur: 'ہم may glorify تم' } },
      { id: '20:33:3', arabic: 'كَثِيرًۭا', transliteration: 'kathīran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'much', ur: 'much' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ] }
  },
  34: {
    text: 'وَنَذْكُرَكَ كَثِيرًا',
    translation: {
      en: 'And remember You much.',
      ur: 'اور تجھے کثرت سے یاد کریں'
    },
    words: [
      { id: '20:34:1', arabic: 'وَنَذْكُرَكَ', transliteration: 'wanadhkuraka', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And [we] remember You', ur: 'اور [ہم] یاد کرنا تم' } },
      { id: '20:34:2', arabic: 'كَثِيرًا', transliteration: 'kathīran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'much', ur: 'much' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ] }
  },
  35: {
    text: 'إِنَّكَ كُنتَ بِنَا بَصِيرًۭا',
    translation: {
      en: 'Indeed, You are of us ever Seeing."',
      ur: 'تو ہم کو (ہر حال میں) دیکھ رہا ہے'
    },
    words: [
      { id: '20:35:1', arabic: 'إِنَّكَ', transliteration: 'innaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, [You]', ur: 'بےشک, [تم]' } },
      { id: '20:35:2', arabic: 'كُنتَ', transliteration: 'kunta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'You are', ur: 'تم ہیں' } },
      { id: '20:35:3', arabic: 'بِنَا', transliteration: 'binā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of us', ur: 'کا us' } },
      { id: '20:35:4', arabic: 'بَصِيرًۭا', transliteration: 'baṣīran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'All-Seer', ur: 'سب-Seer' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ] }
  },
  36: {
    text: 'قَالَ قَدْ أُوتِيتَ سُؤْلَكَ يَٰمُوسَىٰ',
    translation: {
      en: '[Allah] said, "You have been granted your request, O Moses.',
      ur: 'فرمایا موسیٰ تمہاری دعا قبول کی گئی'
    },
    words: [
      { id: '20:36:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:36:2', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Verily', ur: 'Verily' } },
      { id: '20:36:3', arabic: 'أُوتِيتَ', transliteration: 'ūtīta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you are granted', ur: 'تم ہیں granted' } },
      { id: '20:36:4', arabic: 'سُؤْلَكَ', transliteration: 'su\'laka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your request', ur: 'تمہارا request' } },
      { id: '20:36:5', arabic: 'يَـٰمُوسَىٰ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  37: {
    text: 'وَلَقَدْ مَنَنَّا عَلَيْكَ مَرَّةً أُخْرَىٰٓ',
    translation: {
      en: 'And We had already conferred favor upon you another time,',
      ur: 'اور ہم نے تم پر ایک بار اور بھی احسان کیا تھا'
    },
    words: [
      { id: '20:37:1', arabic: 'وَلَقَدْ', transliteration: 'walaqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And indeed', ur: 'اور بےشک' } },
      { id: '20:37:2', arabic: 'مَنَنَّا', transliteration: 'manannā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We conferred a favor', ur: 'ہم conferred ایک favor' } },
      { id: '20:37:3', arabic: 'عَلَيْكَ', transliteration: 'ʿalayka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'on you', ur: 'پر تم' } },
      { id: '20:37:4', arabic: 'مَرَّةً', transliteration: 'marratan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'another time', ur: 'another time' } },
      { id: '20:37:5', arabic: 'أُخْرَىٰٓ', transliteration: 'ukh\'rā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'another time', ur: 'another time' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  38: {
    text: 'إِذْ أَوْحَيْنَآ إِلَىٰٓ أُمِّكَ مَا يُوحَىٰٓ',
    translation: {
      en: 'When We inspired to your mother what We inspired,',
      ur: 'جب ہم نے تمہاری والدہ کو الہام کیا تھا جو تمہیں بتایا جاتا ہے'
    },
    words: [
      { id: '20:38:1', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'When', ur: 'جب' } },
      { id: '20:38:2', arabic: 'أَوْحَيْنَآ', transliteration: 'awḥaynā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We inspired', ur: 'ہم inspired' } },
      { id: '20:38:3', arabic: 'إِلَىٰٓ', transliteration: 'ilā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '20:38:4', arabic: 'أُمِّكَ', transliteration: 'ummika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your mother', ur: 'تمہارا mother' } },
      { id: '20:38:5', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:38:6', arabic: 'يُوحَىٰٓ', transliteration: 'yūḥā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'is inspired', ur: 'ہے inspired' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' }
      ] }
  },
  39: {
    text: 'أَنِ ٱقْذِفِيهِ فِى ٱلتَّابُوتِ فَٱقْذِفِيهِ فِى ٱلْيَمِّ فَلْيُلْقِهِ ٱلْيَمُّ بِٱلسَّاحِلِ يَأْخُذْهُ عَدُوٌّۭ لِّى وَعَدُوٌّۭ لَّهُۥ ۚ وَأَلْقَيْتُ عَلَيْكَ مَحَبَّةًۭ مِّنِّى وَلِتُصْنَعَ عَلَىٰ عَيْنِىٓ',
    translation: {
      en: '[Saying], \'Cast him into the chest and cast it into the river, and the river will throw it onto the bank; there will take him an enemy to Me and an enemy to him.\' And I bestowed upon you love from Me that you would be brought up under My eye.',
      ur: '(وہ یہ تھا) کہ اسے (یعنی موسیٰ کو) صندوق میں رکھو پھر اس (صندوق) کو دریا میں ڈال دو تو دریا اسے کنارے پر ڈال دے گا (اور) میرا اور اس کا دشمن اسے اٹھا لے گا۔ اور (موسیٰ) میں نے تم پر اپنی طرف سے محبت ڈال دی ہے (اس لئے کہ تم پر مہربانی کی جائے) اور اس لئے کہ تم میرے سامنے پرورش پاؤ'
    },
    words: [
      { id: '20:39:1', arabic: 'أَنِ', transliteration: 'ani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '20:39:2', arabic: 'ٱقْذِفِيهِ', transliteration: 'iq\'dhifīhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'cast him', ur: 'cast him' } },
      { id: '20:39:3', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:39:4', arabic: 'ٱلتَّابُوتِ', transliteration: 'l-tābūti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the chest', ur: ' chest' } },
      { id: '20:39:5', arabic: 'فَٱقْذِفِيهِ', transliteration: 'fa-iq\'dhifīhi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then cast it', ur: 'پھر cast it' } },
      { id: '20:39:6', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:39:7', arabic: 'ٱلْيَمِّ', transliteration: 'l-yami', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the river', ur: ' river' } },
      { id: '20:39:8', arabic: 'فَلْيُلْقِهِ', transliteration: 'falyul\'qihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then let cast it', ur: 'پھر let cast it' } },
      { id: '20:39:9', arabic: 'ٱلْيَمُّ', transliteration: 'l-yamu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the river', ur: ' river' } },
      { id: '20:39:10', arabic: 'بِٱلسَّاحِلِ', transliteration: 'bil-sāḥili', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'on the bank', ur: 'پر  bank' } },
      { id: '20:39:11', arabic: 'يَأْخُذْهُ', transliteration: 'yakhudh\'hu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'will take him', ur: ' لینا him' } },
      { id: '20:39:12', arabic: 'عَدُوٌّۭ', transliteration: 'ʿaduwwun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'an enemy', ur: 'ایک دشمن' } },
      { id: '20:39:13', arabic: 'لِّى', transliteration: 'lī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to Me', ur: 'کو/تک Me' } },
      { id: '20:39:14', arabic: 'وَعَدُوٌّۭ', transliteration: 'waʿaduwwun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and an enemy', ur: 'اور ایک دشمن' } },
      { id: '20:39:15', arabic: 'لَّهُۥ ۚ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to him', ur: 'کو/تک him' } },
      { id: '20:39:16', arabic: 'وَأَلْقَيْتُ', transliteration: 'wa-alqaytu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And I cast', ur: 'اور میں cast' } },
      { id: '20:39:17', arabic: 'عَلَيْكَ', transliteration: 'ʿalayka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'over you', ur: 'اوپر تم' } },
      { id: '20:39:18', arabic: 'مَحَبَّةًۭ', transliteration: 'maḥabbatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'love', ur: 'محبت' } },
      { id: '20:39:19', arabic: 'مِّنِّى', transliteration: 'minnī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from Me', ur: 'سے Me' } },
      { id: '20:39:20', arabic: 'وَلِتُصْنَعَ', transliteration: 'walituṣ\'naʿa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and that you may be brought up', ur: 'اور کہ تم may be brought up' } },
      { id: '20:39:21', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'under', ur: 'نیچے' } },
      { id: '20:39:22', arabic: 'عَيْنِىٓ', transliteration: 'ʿaynī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My eye', ur: 'My آنکھ' } }
    ],
    structure: { relationships: [{ from: 11, to: 16, label: 'عطف' }, { from: 21, to: 22, label: 'جار + مجرور' }] }
  },
  40: {
    text: 'إِذْ تَمْشِىٓ أُخْتُكَ فَتَقُولُ هَلْ أَدُلُّكُمْ عَلَىٰ مَن يَكْفُلُهُۥ ۖ فَرَجَعْنَٰكَ إِلَىٰٓ أُمِّكَ كَىْ تَقَرَّ عَيْنُهَا وَلَا تَحْزَنَ ۚ وَقَتَلْتَ نَفْسًۭا فَنَجَّيْنَٰكَ مِنَ ٱلْغَمِّ وَفَتَنَّٰكَ فُتُونًۭا ۚ فَلَبِثْتَ سِنِينَ فِىٓ أَهْلِ مَدْيَنَ ثُمَّ جِئْتَ عَلَىٰ قَدَرٍۢ يَٰمُوسَىٰ',
    translation: {
      en: '[And We favored you] when your sister went and said, \'Shall I direct you to someone who will be responsible for him?\' So We restored you to your mother that she might be content and not grieve. And you killed someone, but We saved you from retaliation and tried you with a [severe] trial. And you remained [some] years among the people of Madyan. Then you came [here] at the decreed time, O Moses.',
      ur: 'جب تمہاری بہن (فرعون کے ہاں) گئی اور کہنے لگی کہ میں تمہیں ایسا شخص بتاؤں جو اس کو پالے۔ تو (اس طریق سے) ہم نے تم کو تمہاری ماں کے پاس پہنچا دیا تاکہ ان کی آنکھیں ٹھنڈی ہوں اور وہ رنج نہ کریں۔ اور تم نے ایک شخص کو مار ڈالا تو ہم نے تم کو غم سے مخلصی دی اور ہم نے تمہاری (کئی بار) آزمائش کی۔ پھر تم کئی سال اہل مدین میں ٹھہرے رہے۔ پھر اے موسیٰ تم (قابلیت رسالت کے) اندازے پر آ پہنچے'
    },
    words: [
      { id: '20:40:1', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'When', ur: 'جب' } },
      { id: '20:40:2', arabic: 'تَمْشِىٓ', transliteration: 'tamshī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'was going', ur: 'تھا going' } },
      { id: '20:40:3', arabic: 'أُخْتُكَ', transliteration: 'ukh\'tuka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your sister', ur: 'تمہارا sister' } },
      { id: '20:40:4', arabic: 'فَتَقُولُ', transliteration: 'fataqūlu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and she said', ur: 'اور وہ کہا' } },
      { id: '20:40:5', arabic: 'هَلْ', transliteration: 'hal', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Shall', ur: '' } },
      { id: '20:40:6', arabic: 'أَدُلُّكُمْ', transliteration: 'adullukum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'I show you', ur: 'میں show تم' } },
      { id: '20:40:7', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '[to]', ur: '[کو/تک]' } },
      { id: '20:40:8', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(one) who', ur: '(one) جو' } },
      { id: '20:40:9', arabic: 'يَكْفُلُهُۥ ۖ', transliteration: 'yakfuluhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will nurse and rear him', ur: ' nurse اور rear him' } },
      { id: '20:40:10', arabic: 'فَرَجَعْنَـٰكَ', transliteration: 'farajaʿnāka', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So We returned you', ur: 'پس ہم واپس آیا تم' } },
      { id: '20:40:11', arabic: 'إِلَىٰٓ', transliteration: 'ilā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '20:40:12', arabic: 'أُمِّكَ', transliteration: 'ummika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your mother', ur: 'تمہارا mother' } },
      { id: '20:40:13', arabic: 'كَىْ', transliteration: 'kay', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:40:14', arabic: 'تَقَرَّ', transliteration: 'taqarra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'may be cooled', ur: 'may be cooled' } },
      { id: '20:40:15', arabic: 'عَيْنُهَا', transliteration: 'ʿaynuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'her eyes', ur: 'اس کا آنکھیں' } },
      { id: '20:40:16', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:40:17', arabic: 'تَحْزَنَ ۚ', transliteration: 'taḥzana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'she grieves', ur: 'وہ grieves' } },
      { id: '20:40:18', arabic: 'وَقَتَلْتَ', transliteration: 'waqatalta', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And you killed', ur: 'اور تم قتل کیا' } },
      { id: '20:40:19', arabic: 'نَفْسًۭا', transliteration: 'nafsan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a man', ur: 'ایک man' } },
      { id: '20:40:20', arabic: 'فَنَجَّيْنَـٰكَ', transliteration: 'fanajjaynāka', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'but We saved you', ur: 'لیکن ہم saved تم' } },
      { id: '20:40:21', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:40:22', arabic: 'ٱلْغَمِّ', transliteration: 'l-ghami', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the distress', ur: ' distress' } },
      { id: '20:40:23', arabic: 'وَفَتَنَّـٰكَ', transliteration: 'wafatannāka', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and We tried you', ur: 'اور ہم tried تم' } },
      { id: '20:40:24', arabic: 'فُتُونًۭا ۚ', transliteration: 'futūnan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(with) a trial', ur: '(ساتھ) ایک trial' } },
      { id: '20:40:25', arabic: 'فَلَبِثْتَ', transliteration: 'falabith\'ta', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then you remained', ur: 'پھر تم remained' } },
      { id: '20:40:26', arabic: 'سِنِينَ', transliteration: 'sinīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(some) years', ur: '(کچھ) years' } },
      { id: '20:40:27', arabic: 'فِىٓ', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '20:40:28', arabic: 'أَهْلِ', transliteration: 'ahli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) people', ur: '() لوگ' } },
      { id: '20:40:29', arabic: 'مَدْيَنَ', transliteration: 'madyana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Madyan', ur: '(کا) Madyan' } },
      { id: '20:40:30', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '20:40:31', arabic: 'جِئْتَ', transliteration: 'ji\'ta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you came', ur: 'تم آیا' } },
      { id: '20:40:32', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'at', ur: 'at' } },
      { id: '20:40:33', arabic: 'قَدَرٍۢ', transliteration: 'qadarin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the decreed (time)', ur: ' decreed (time)' } },
      { id: '20:40:34', arabic: 'يَـٰمُوسَىٰ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } }
    ],
    structure: { relationships: [{ from: 6, to: 20, label: 'عطف' }, { from: 32, to: 33, label: 'جار + مجرور' }] }
  },
  41: {
    text: 'وَٱصْطَنَعْتُكَ لِنَفْسِى',
    translation: {
      en: 'And I produced you for Myself.',
      ur: 'اور میں نے تم کو اپنے (کام کے) لئے بنایا ہے'
    },
    words: [
      { id: '20:41:1', arabic: 'وَٱصْطَنَعْتُكَ', transliteration: 'wa-iṣ\'ṭanaʿtuka', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And I (have) chosen you', ur: 'اور میں (رکھتے ہو) chosen تم' } },
      { id: '20:41:2', arabic: 'لِنَفْسِى', transliteration: 'linafsī', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for Myself', ur: 'کے لیے Myself' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' }
      ] }
  },
  42: {
    text: 'ٱذْهَبْ أَنتَ وَأَخُوكَ بِـَٔايَٰتِى وَلَا تَنِيَا فِى ذِكْرِى',
    translation: {
      en: 'Go, you and your brother, with My signs and do not slacken in My remembrance.',
      ur: 'تو تم اور تمہارا بھائی دونوں ہماری نشانیاں لے کر جاؤ اور میری یاد میں سستی نہ کرنا'
    },
    words: [
      { id: '20:42:1', arabic: 'ٱذْهَبْ', transliteration: 'idh\'hab', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Go', ur: 'جانا' } },
      { id: '20:42:2', arabic: 'أَنتَ', transliteration: 'anta', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '20:42:3', arabic: 'وَأَخُوكَ', transliteration: 'wa-akhūka', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and your brother', ur: 'اور تمہارا brother' } },
      { id: '20:42:4', arabic: 'بِـَٔايَـٰتِى', transliteration: 'biāyātī', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with My Signs', ur: 'ساتھ My نشانیاں' } },
      { id: '20:42:5', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and (do) not', ur: 'اور (کرنا) نہیں' } },
      { id: '20:42:6', arabic: 'تَنِيَا', transliteration: 'taniyā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'slacken', ur: 'slacken' } },
      { id: '20:42:7', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:42:8', arabic: 'ذِكْرِى', transliteration: 'dhik\'rī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My remembrance', ur: 'My remembrance' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ] }
  },
  43: {
    text: 'ٱذْهَبَآ إِلَىٰ فِرْعَوْنَ إِنَّهُۥ طَغَىٰ',
    translation: {
      en: 'Go, both of you, to Pharaoh. Indeed, he has transgressed.',
      ur: 'دونوں فرعون کے پاس جاؤ وہ سرکش ہو رہا ہے'
    },
    words: [
      { id: '20:43:1', arabic: 'ٱذْهَبَآ', transliteration: 'idh\'habā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Go, both of you', ur: 'جانا, both کا تم' } },
      { id: '20:43:2', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '20:43:3', arabic: 'فِرْعَوْنَ', transliteration: 'fir\'ʿawna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Firaun', ur: 'Firaun' } },
      { id: '20:43:4', arabic: 'إِنَّهُۥ', transliteration: 'innahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, he', ur: 'بےشک, وہ' } },
      { id: '20:43:5', arabic: 'طَغَىٰ', transliteration: 'ṭaghā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(has) transgressed', ur: '(رکھتا ہے) transgressed' } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }] }
  },
  44: {
    text: 'فَقُولَا لَهُۥ قَوْلًۭا لَّيِّنًۭا لَّعَلَّهُۥ يَتَذَكَّرُ أَوْ يَخْشَىٰ',
    translation: {
      en: 'And speak to him with gentle speech that perhaps he may be reminded or fear [Allah]."',
      ur: 'اور اس سے نرمی سے بات کرنا شاید وہ غور کرے یا ڈر جائے'
    },
    words: [
      { id: '20:44:1', arabic: 'فَقُولَا', transliteration: 'faqūlā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And speak', ur: 'اور speak' } },
      { id: '20:44:2', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to him', ur: 'کو/تک him' } },
      { id: '20:44:3', arabic: 'قَوْلًۭا', transliteration: 'qawlan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a word', ur: 'ایک word' } },
      { id: '20:44:4', arabic: 'لَّيِّنًۭا', transliteration: 'layyinan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'gentle', ur: 'gentle' } },
      { id: '20:44:5', arabic: 'لَّعَلَّهُۥ', transliteration: 'laʿallahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'perhaps he', ur: 'perhaps وہ' } },
      { id: '20:44:6', arabic: 'يَتَذَكَّرُ', transliteration: 'yatadhakkaru', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'may take heed', ur: 'may لینا heed' } },
      { id: '20:44:7', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '20:44:8', arabic: 'يَخْشَىٰ', transliteration: 'yakhshā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'fear', ur: 'ڈرنا' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ] }
  },
  45: {
    text: 'قَالَا رَبَّنَآ إِنَّنَا نَخَافُ أَن يَفْرُطَ عَلَيْنَآ أَوْ أَن يَطْغَىٰ',
    translation: {
      en: 'They said, "Our Lord, indeed we are afraid that he will hasten [punishment] against us or that he will transgress."',
      ur: 'دونوں کہنے لگے کہ ہمارے پروردگار ہمیں خوف ہے کہ ہم پر تعدی کرنے لگے یا زیادہ سرکش ہوجائے'
    },
    words: [
      { id: '20:45:1', arabic: 'قَالَا', transliteration: 'qālā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They said', ur: 'وہ کہا' } },
      { id: '20:45:2', arabic: 'رَبَّنَآ', transliteration: 'rabbanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Our Lord', ur: 'ہمارا رب' } },
      { id: '20:45:3', arabic: 'إِنَّنَا', transliteration: 'innanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, we', ur: 'بےشک, ہم' } },
      { id: '20:45:4', arabic: 'نَخَافُ', transliteration: 'nakhāfu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'fear', ur: 'ڈرنا' } },
      { id: '20:45:5', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:45:6', arabic: 'يَفْرُطَ', transliteration: 'yafruṭa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he will hasten', ur: 'وہ  hasten' } },
      { id: '20:45:7', arabic: 'عَلَيْنَآ', transliteration: 'ʿalaynā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'against us', ur: 'خلاف us' } },
      { id: '20:45:8', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '20:45:9', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:45:10', arabic: 'يَطْغَىٰ', transliteration: 'yaṭghā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he will transgress', ur: 'وہ  transgress' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' }
      ] }
  },
  46: {
    text: 'قَالَ لَا تَخَافَآ ۖ إِنَّنِى مَعَكُمَآ أَسْمَعُ وَأَرَىٰ',
    translation: {
      en: '[Allah] said, "Fear not. Indeed, I am with you both; I hear and I see.',
      ur: 'خدا نے فرمایا کہ ڈرو مت میں تمہارے ساتھ ہوں (اور) سنتا اور دیکھتا ہوں'
    },
    words: [
      { id: '20:46:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:46:2', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '20:46:3', arabic: 'تَخَافَآ ۖ', transliteration: 'takhāfā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'fear', ur: 'ڈرنا' } },
      { id: '20:46:4', arabic: 'إِنَّنِى', transliteration: 'innanī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, I Am', ur: 'بےشک, میں Am' } },
      { id: '20:46:5', arabic: 'مَعَكُمَآ', transliteration: 'maʿakumā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with you both', ur: 'ساتھ تم both' } },
      { id: '20:46:6', arabic: 'أَسْمَعُ', transliteration: 'asmaʿu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'I hear', ur: 'میں سننا' } },
      { id: '20:46:7', arabic: 'وَأَرَىٰ', transliteration: 'wa-arā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and I see', ur: 'اور میں دیکھنا' } }
    ],
    structure: { relationships: [
        { from: 6, to: 7, label: 'عطف' }
      ] }
  },
  47: {
    text: 'فَأْتِيَاهُ فَقُولَآ إِنَّا رَسُولَا رَبِّكَ فَأَرْسِلْ مَعَنَا بَنِىٓ إِسْرَٰٓءِيلَ وَلَا تُعَذِّبْهُمْ ۖ قَدْ جِئْنَٰكَ بِـَٔايَةٍۢ مِّن رَّبِّكَ ۖ وَٱلسَّلَٰمُ عَلَىٰ مَنِ ٱتَّبَعَ ٱلْهُدَىٰٓ',
    translation: {
      en: 'So go to him and say, \'Indeed, we are messengers of your Lord, so send with us the Children of Israel and do not torment them. We have come to you with a sign from your Lord. And peace will be upon he who follows the guidance.',
      ur: '(اچھا) تو اس کے پاس جاؤ اور کہو کہ ہم آپ کے پروردگار کے بھیجے ہوئے ہیں تو بنی اسرائیل کو ہمارے ساتھ جانے کی اجازت دیجیئے۔ اور انہیں عذاب نہ کیجیئے۔ ہم آپ کے پاس آپ کے پروردگار کی طرف سے نشانی لے کر آئے ہیں۔ اور جو ہدایت کی بات مانے اس کو سلامتی ہو'
    },
    words: [
      { id: '20:47:1', arabic: 'فَأْتِيَاهُ', transliteration: 'fatiyāhu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So go to him', ur: 'پس جانا کو/تک him' } },
      { id: '20:47:2', arabic: 'فَقُولَآ', transliteration: 'faqūlā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and say', ur: 'اور کہو' } },
      { id: '20:47:3', arabic: 'إِنَّا', transliteration: 'innā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, we', ur: 'بےشک, ہم' } },
      { id: '20:47:4', arabic: 'رَسُولَا', transliteration: 'rasūlā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'both (are) Messengers', ur: 'both (ہیں) Messengers' } },
      { id: '20:47:5', arabic: 'رَبِّكَ', transliteration: 'rabbika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) your Lord', ur: '(کا) تمہارا رب' } },
      { id: '20:47:6', arabic: 'فَأَرْسِلْ', transliteration: 'fa-arsil', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'so send', ur: 'پس بھیجنا' } },
      { id: '20:47:7', arabic: 'مَعَنَا', transliteration: 'maʿanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with us', ur: 'ساتھ us' } },
      { id: '20:47:8', arabic: 'بَنِىٓ', transliteration: 'banī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Children of Israel', ur: '() اولاد کا Israel' } },
      { id: '20:47:9', arabic: 'إِسْرَٰٓءِيلَ', transliteration: 'is\'rāīla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Children of Israel', ur: '() اولاد کا Israel' } },
      { id: '20:47:10', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and (do) not', ur: 'اور (کرنا) نہیں' } },
      { id: '20:47:11', arabic: 'تُعَذِّبْهُمْ ۖ', transliteration: 'tuʿadhib\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'torment them', ur: 'torment ان کو' } },
      { id: '20:47:12', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Verily', ur: 'Verily' } },
      { id: '20:47:13', arabic: 'جِئْنَـٰكَ', transliteration: 'ji\'nāka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we came to you', ur: 'ہم آیا کو/تک تم' } },
      { id: '20:47:14', arabic: 'بِـَٔايَةٍۢ', transliteration: 'biāyatin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with a Sign', ur: 'ساتھ ایک نشانی' } },
      { id: '20:47:15', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:47:16', arabic: 'رَّبِّكَ ۖ', transliteration: 'rabbika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your Lord', ur: 'تمہارا رب' } },
      { id: '20:47:17', arabic: 'وَٱلسَّلَـٰمُ', transliteration: 'wal-salāmu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And peace', ur: 'اور peace' } },
      { id: '20:47:18', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '20:47:19', arabic: 'مَنِ', transliteration: 'mani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(one) who', ur: '(one) جو' } },
      { id: '20:47:20', arabic: 'ٱتَّبَعَ', transliteration: 'ittabaʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'follows', ur: 'follows' } },
      { id: '20:47:21', arabic: 'ٱلْهُدَىٰٓ', transliteration: 'l-hudā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Guidance', ur: ' Guidance' } }
    ],
    structure: { relationships: [{ from: 1, to: 6, label: 'عطف' }, { from: 18, to: 19, label: 'جار + مجرور' }] }
  },
  48: {
    text: 'إِنَّا قَدْ أُوحِىَ إِلَيْنَآ أَنَّ ٱلْعَذَابَ عَلَىٰ مَن كَذَّبَ وَتَوَلَّىٰ',
    translation: {
      en: 'Indeed, it has been revealed to us that the punishment will be upon whoever denies and turns away.\' "',
      ur: 'ہماری طرف یہ وحی آئی ہے کہ جو جھٹلائے اور منہ پھیرے اس کے لئے عذاب (تیار) ہے'
    },
    words: [
      { id: '20:48:1', arabic: 'إِنَّا', transliteration: 'innā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, we', ur: 'بےشک, ہم' } },
      { id: '20:48:2', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'verily', ur: 'verily' } },
      { id: '20:48:3', arabic: 'أُوحِىَ', transliteration: 'ūḥiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it has been revealed', ur: 'it رکھتا ہے been نازل کیا' } },
      { id: '20:48:4', arabic: 'إِلَيْنَآ', transliteration: 'ilaynā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to us', ur: 'کو/تک us' } },
      { id: '20:48:5', arabic: 'أَنَّ', transliteration: 'anna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:48:6', arabic: 'ٱلْعَذَابَ', transliteration: 'l-ʿadhāba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the punishment', ur: ' عذاب' } },
      { id: '20:48:7', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '(will be) on', ur: '(ہوگا) پر' } },
      { id: '20:48:8', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(one) who', ur: '(one) جو' } },
      { id: '20:48:9', arabic: 'كَذَّبَ', transliteration: 'kadhaba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'denies', ur: 'denies' } },
      { id: '20:48:10', arabic: 'وَتَوَلَّىٰ', transliteration: 'watawallā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and turns away', ur: 'اور turns away' } }
    ],
    structure: { relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ] }
  },
  49: {
    text: 'قَالَ فَمَن رَّبُّكُمَا يَٰمُوسَىٰ',
    translation: {
      en: '[Pharaoh] said, "So who is the Lord of you two, O Moses?"',
      ur: '(غرض موسیٰ اور ہارون فرعون کے پاس گئے) اس نے کہا کہ موسیٰ تمہارا پروردگار کون ہے؟'
    },
    words: [
      { id: '20:49:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:49:2', arabic: 'فَمَن', transliteration: 'faman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then who', ur: 'پھر جو' } },
      { id: '20:49:3', arabic: 'رَّبُّكُمَا', transliteration: 'rabbukumā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) your Lord', ur: '(ہے) تمہارا رب' } },
      { id: '20:49:4', arabic: 'يَـٰمُوسَىٰ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ] }
  },
  50: {
    text: 'قَالَ رَبُّنَا ٱلَّذِىٓ أَعْطَىٰ كُلَّ شَىْءٍ خَلْقَهُۥ ثُمَّ هَدَىٰ',
    translation: {
      en: 'He said, "Our Lord is He who gave each thing its form and then guided [it]."',
      ur: 'کہا کہ ہمارا پروردگار وہ ہے جس نے ہر چیز کو اس کی شکل وصورت بخشی پھر راہ دکھائی'
    },
    words: [
      { id: '20:50:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:50:2', arabic: 'رَبُّنَا', transliteration: 'rabbunā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Our Lord', ur: 'ہمارا رب' } },
      { id: '20:50:3', arabic: 'ٱلَّذِىٓ', transliteration: 'alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the One Who', ur: '(ہے)  One جو' } },
      { id: '20:50:4', arabic: 'أَعْطَىٰ', transliteration: 'aʿṭā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'gave', ur: 'دیا' } },
      { id: '20:50:5', arabic: 'كُلَّ', transliteration: 'kulla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) every', ur: '(کو/تک) ہر' } },
      { id: '20:50:6', arabic: 'شَىْءٍ', transliteration: 'shayin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'thing', ur: 'thing' } },
      { id: '20:50:7', arabic: 'خَلْقَهُۥ', transliteration: 'khalqahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'its form', ur: 'its form' } },
      { id: '20:50:8', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '20:50:9', arabic: 'هَدَىٰ', transliteration: 'hadā', pos: ['N'], posLabel: 'N', root: 'ه د ي', meaning: { en: 'He guided (it)', ur: 'وہ ہدایت دی (it)' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' }
      ] }
  },
  51: {
    text: 'قَالَ فَمَا بَالُ ٱلْقُرُونِ ٱلْأُولَىٰ',
    translation: {
      en: '[Pharaoh] said, "Then what is the case of the former generations?"',
      ur: 'کہا تو پہلی جماعتوں کا کیا حال؟'
    },
    words: [
      { id: '20:51:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:51:2', arabic: 'فَمَا', transliteration: 'famā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then what', ur: 'پھر کیا/جو' } },
      { id: '20:51:3', arabic: 'بَالُ', transliteration: 'bālu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is the) case', ur: '(ہے ) case' } },
      { id: '20:51:4', arabic: 'ٱلْقُرُونِ', transliteration: 'l-qurūni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the generations', ur: '(کا)  generations' } },
      { id: '20:51:5', arabic: 'ٱلْأُولَىٰ', transliteration: 'l-ūlā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the former', ur: '(کا)  former' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  52: {
    text: 'قَالَ عِلْمُهَا عِندَ رَبِّى فِى كِتَٰبٍۢ ۖ لَّا يَضِلُّ رَبِّى وَلَا يَنسَى',
    translation: {
      en: '[Moses] said, "The knowledge thereof is with my Lord in a record. My Lord neither errs nor forgets."',
      ur: 'کہا کہ ان کا علم میرے پروردگار کو ہے (جو) کتاب میں (لکھا ہوا ہے) ۔ میرا پروردگار نہ چوکتا ہے نہ بھولتا ہے'
    },
    words: [
      { id: '20:52:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:52:2', arabic: 'عِلْمُهَا', transliteration: 'ʿil\'muhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Its knowledge', ur: 'Its علم' } },
      { id: '20:52:3', arabic: 'عِندَ', transliteration: 'ʿinda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) with', ur: '(ہے) ساتھ' } },
      { id: '20:52:4', arabic: 'رَبِّى', transliteration: 'rabbī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my Lord', ur: 'my رب' } },
      { id: '20:52:5', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:52:6', arabic: 'كِتَـٰبٍۢ ۖ', transliteration: 'kitābin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a Record', ur: 'ایک Record' } },
      { id: '20:52:7', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '20:52:8', arabic: 'يَضِلُّ', transliteration: 'yaḍillu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'errs', ur: 'errs' } },
      { id: '20:52:9', arabic: 'رَبِّى', transliteration: 'rabbī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my Lord', ur: 'my رب' } },
      { id: '20:52:10', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:52:11', arabic: 'يَنسَى', transliteration: 'yansā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'forgets', ur: 'forgets' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' }
      ] }
  },
  53: {
    text: 'ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ مَهْدًۭا وَسَلَكَ لَكُمْ فِيهَا سُبُلًۭا وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَخْرَجْنَا بِهِۦٓ أَزْوَٰجًۭا مِّن نَّبَاتٍۢ شَتَّىٰ',
    translation: {
      en: '[It is He] who has made for you the earth as a bed [spread out] and inserted therein for you roadways and sent down from the sky, rain and produced thereby categories of various plants.',
      ur: 'وہ (وہی تو ہے) جس نے تم لوگوں کے لئے زمین کو فرش بنایا اور اس میں تمہارے لئے رستے جاری کئے اور آسمان سے پانی برسایا۔ پھر اس سے انواع واقسام کی مختلف روئیدگیاں پیدا کیں'
    },
    words: [
      { id: '20:53:1', arabic: 'ٱلَّذِى', transliteration: 'alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'The One Who', ur: ' One جو' } },
      { id: '20:53:2', arabic: 'جَعَلَ', transliteration: 'jaʿala', pos: ['N'], posLabel: 'N', root: 'ج ع ل', meaning: { en: 'made', ur: 'بنایا' } },
      { id: '20:53:3', arabic: 'لَكُمُ', transliteration: 'lakumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '20:53:4', arabic: 'ٱلْأَرْضَ', transliteration: 'l-arḍa', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '20:53:5', arabic: 'مَهْدًۭا', transliteration: 'mahdan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) a bed', ur: '(as) ایک bed' } },
      { id: '20:53:6', arabic: 'وَسَلَكَ', transliteration: 'wasalaka', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and inserted', ur: 'اور inserted' } },
      { id: '20:53:7', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '20:53:8', arabic: 'فِيهَا', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'therein', ur: 'therein' } },
      { id: '20:53:9', arabic: 'سُبُلًۭا', transliteration: 'subulan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ways', ur: 'ways' } },
      { id: '20:53:10', arabic: 'وَأَنزَلَ', transliteration: 'wa-anzala', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and sent down', ur: 'اور بھیجا down' } },
      { id: '20:53:11', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:53:12', arabic: 'ٱلسَّمَآءِ', transliteration: 'l-samāi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the sky', ur: ' sky' } },
      { id: '20:53:13', arabic: 'مَآءًۭ', transliteration: 'māan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'water', ur: 'پانی' } },
      { id: '20:53:14', arabic: 'فَأَخْرَجْنَا', transliteration: 'fa-akhrajnā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'then We (have) brought forth', ur: 'پھر ہم (رکھتے ہو) brought forth' } },
      { id: '20:53:15', arabic: 'بِهِۦٓ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with it', ur: 'ساتھ it' } },
      { id: '20:53:16', arabic: 'أَزْوَٰجًۭا', transliteration: 'azwājan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'pairs', ur: 'pairs' } },
      { id: '20:53:17', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:53:18', arabic: 'نَّبَاتٍۢ', transliteration: 'nabātin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'plants', ur: 'plants' } },
      { id: '20:53:19', arabic: 'شَتَّىٰ', transliteration: 'shattā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'diverse', ur: 'diverse' } }
    ],
    structure: { relationships: [{ from: 10, to: 14, label: 'عطف' }] }
  },
  54: {
    text: 'كُلُوا۟ وَٱرْعَوْا۟ أَنْعَٰمَكُمْ ۗ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ لِّأُو۟لِى ٱلنُّهَىٰ',
    translation: {
      en: 'Eat [therefrom] and pasture your livestock. Indeed, in that are signs for those of intelligence.',
      ur: 'کہ (خود بھی) کھاؤ اور اپنے چارپایوں کو بھی چراؤ۔ بےشک ان (باتوں) میں عقل والوں کے لئے (بہت سی) نشانیاں ہیں'
    },
    words: [
      { id: '20:54:1', arabic: 'كُلُوا۟', transliteration: 'kulū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Eat', ur: 'کھانا' } },
      { id: '20:54:2', arabic: 'وَٱرْعَوْا۟', transliteration: 'wa-ir\'ʿaw', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and pasture', ur: 'اور pasture' } },
      { id: '20:54:3', arabic: 'أَنْعَـٰمَكُمْ ۗ', transliteration: 'anʿāmakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your cattle', ur: 'تمہارا cattle' } },
      { id: '20:54:4', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '20:54:5', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:54:6', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:54:7', arabic: 'لَـَٔايَـٰتٍۢ', transliteration: 'laāyātin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely (are) Signs', ur: 'بےشک (ہیں) نشانیاں' } },
      { id: '20:54:8', arabic: 'لِّأُو۟لِى', transliteration: 'li-ulī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for possessors', ur: 'کے لیے possessors' } },
      { id: '20:54:9', arabic: 'ٱلنُّهَىٰ', transliteration: 'l-nuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) intelligence', ur: '(کا) intelligence' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' }
      ] }
  },
  55: {
    text: '۞ مِنْهَا خَلَقْنَٰكُمْ وَفِيهَا نُعِيدُكُمْ وَمِنْهَا نُخْرِجُكُمْ تَارَةً أُخْرَىٰ',
    translation: {
      en: 'From the earth We created you, and into it We will return you, and from it We will extract you another time.',
      ur: 'اسی (زمین) سے ہم تم کو پیدا کیا اور اسی میں تمہیں لوٹائیں گے اور اسی سے دوسری دفعہ نکالیں گے'
    },
    words: [
      { id: '20:55:1', arabic: '۞ مِنْهَا', transliteration: 'min\'hā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'From it', ur: 'سے it' } },
      { id: '20:55:2', arabic: 'خَلَقْنَـٰكُمْ', transliteration: 'khalaqnākum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We created you', ur: 'ہم پیدا کیا تم' } },
      { id: '20:55:3', arabic: 'وَفِيهَا', transliteration: 'wafīhā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and in it', ur: 'اور میں it' } },
      { id: '20:55:4', arabic: 'نُعِيدُكُمْ', transliteration: 'nuʿīdukum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We will return you', ur: 'ہم  واپس آنا تم' } },
      { id: '20:55:5', arabic: 'وَمِنْهَا', transliteration: 'wamin\'hā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and from it', ur: 'اور سے it' } },
      { id: '20:55:6', arabic: 'نُخْرِجُكُمْ', transliteration: 'nukh\'rijukum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We will bring you out', ur: 'ہم  bring تم out' } },
      { id: '20:55:7', arabic: 'تَارَةً', transliteration: 'tāratan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'time', ur: 'time' } },
      { id: '20:55:8', arabic: 'أُخْرَىٰ', transliteration: 'ukh\'rā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'another', ur: 'another' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ] }
  },
  56: {
    text: 'وَلَقَدْ أَرَيْنَٰهُ ءَايَٰتِنَا كُلَّهَا فَكَذَّبَ وَأَبَىٰ',
    translation: {
      en: 'And We certainly showed Pharaoh Our signs - all of them - but he denied and refused.',
      ur: 'اور ہم نے فرعون کو اپنی سب نشانیاں دکھائیں مگر وہ تکذیب وانکار ہی کرتا رہا'
    },
    words: [
      { id: '20:56:1', arabic: 'وَلَقَدْ', transliteration: 'walaqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And verily', ur: 'اور verily' } },
      { id: '20:56:2', arabic: 'أَرَيْنَـٰهُ', transliteration: 'araynāhu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We showed him', ur: 'ہم showed him' } },
      { id: '20:56:3', arabic: 'ءَايَـٰتِنَا', transliteration: 'āyātinā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Our Signs', ur: 'ہمارا نشانیاں' } },
      { id: '20:56:4', arabic: 'كُلَّهَا', transliteration: 'kullahā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'all of them', ur: 'سب کا ان کو' } },
      { id: '20:56:5', arabic: 'فَكَذَّبَ', transliteration: 'fakadhaba', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'but he denied', ur: 'لیکن وہ انکار کیا' } },
      { id: '20:56:6', arabic: 'وَأَبَىٰ', transliteration: 'wa-abā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and refused', ur: 'اور refused' } }
    ],
    structure: { relationships: [
        { from: 2, to: 6, label: 'عطف' }
      ] }
  },
  57: {
    text: 'قَالَ أَجِئْتَنَا لِتُخْرِجَنَا مِنْ أَرْضِنَا بِسِحْرِكَ يَٰمُوسَىٰ',
    translation: {
      en: 'He said, "Have you come to us to drive us out of our land with your magic, O Moses?',
      ur: 'کہنے لگا کہ موسیٰ تم ہمارے پاس اس لئے آئے ہو کہ اپنے جادو (کے زور) سے ہمیں ہمارے ملک سے نکال دو'
    },
    words: [
      { id: '20:57:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:57:2', arabic: 'أَجِئْتَنَا', transliteration: 'aji\'tanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Have you come to us', ur: 'رکھتے ہو تم آنا کو/تک us' } },
      { id: '20:57:3', arabic: 'لِتُخْرِجَنَا', transliteration: 'litukh\'rijanā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to drive us out', ur: 'کو/تک drive us out' } },
      { id: '20:57:4', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:57:5', arabic: 'أَرْضِنَا', transliteration: 'arḍinā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'our land', ur: 'ہمارا land' } },
      { id: '20:57:6', arabic: 'بِسِحْرِكَ', transliteration: 'bisiḥ\'rika', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with your magic', ur: 'ساتھ تمہارا magic' } },
      { id: '20:57:7', arabic: 'يَـٰمُوسَىٰ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }] }
  },
  58: {
    text: 'فَلَنَأْتِيَنَّكَ بِسِحْرٍۢ مِّثْلِهِۦ فَٱجْعَلْ بَيْنَنَا وَبَيْنَكَ مَوْعِدًۭا لَّا نُخْلِفُهُۥ نَحْنُ وَلَآ أَنتَ مَكَانًۭا سُوًۭى',
    translation: {
      en: 'Then we will surely bring you magic like it, so make between us and you an appointment, which we will not fail to keep and neither will you, in a place assigned."',
      ur: 'تو ہم بھی تمہارے مقابل ایسا ہی جادو لائیں گے تو ہمارے اور اپنے درمیان ایک وقت مقرر کر لو کہ نہ تو ہم اس کے خلاف کریں اور نہ تم (اور یہ مقابلہ) ایک ہموار میدان میں (ہوگا)'
    },
    words: [
      { id: '20:58:1', arabic: 'فَلَنَأْتِيَنَّكَ', transliteration: 'falanatiyannaka', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then we will surely produce for you', ur: 'پھر ہم  بےشک produce کے لیے تم' } },
      { id: '20:58:2', arabic: 'بِسِحْرٍۢ', transliteration: 'bisiḥ\'rin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'magic', ur: 'magic' } },
      { id: '20:58:3', arabic: 'مِّثْلِهِۦ', transliteration: 'mith\'lihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'like it', ur: 'like it' } },
      { id: '20:58:4', arabic: 'فَٱجْعَلْ', transliteration: 'fa-ij\'ʿal', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So make', ur: 'پس بنانا' } },
      { id: '20:58:5', arabic: 'بَيْنَنَا', transliteration: 'baynanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'between us', ur: 'درمیان us' } },
      { id: '20:58:6', arabic: 'وَبَيْنَكَ', transliteration: 'wabaynaka', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and between you', ur: 'اور درمیان تم' } },
      { id: '20:58:7', arabic: 'مَوْعِدًۭا', transliteration: 'mawʿidan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'an appointment', ur: 'ایک appointment' } },
      { id: '20:58:8', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '20:58:9', arabic: 'نُخْلِفُهُۥ', transliteration: 'nukh\'lifuhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we will fail it', ur: 'ہم  fail it' } },
      { id: '20:58:10', arabic: 'نَحْنُ', transliteration: 'naḥnu', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: '[we]', ur: '[ہم]' } },
      { id: '20:58:11', arabic: 'وَلَآ', transliteration: 'walā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:58:12', arabic: 'أَنتَ', transliteration: 'anta', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '20:58:13', arabic: 'مَكَانًۭا', transliteration: 'makānan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) a place', ur: '(میں) ایک place' } },
      { id: '20:58:14', arabic: 'سُوًۭى', transliteration: 'suwan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'even', ur: 'even' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' }
      ] }
  },
  59: {
    text: 'قَالَ مَوْعِدُكُمْ يَوْمُ ٱلزِّينَةِ وَأَن يُحْشَرَ ٱلنَّاسُ ضُحًۭى',
    translation: {
      en: '[Moses] said, "Your appointment is on the day of the festival when the people assemble at mid-morning."',
      ur: 'موسیٰ نے کہا آپ کے لئے (مقابلے کا) دن نو روز (مقرر کیا جاتا ہے) اور یہ کہ لوگ اس دن چاشت کے وقت اکھٹے ہوجائیں'
    },
    words: [
      { id: '20:59:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:59:2', arabic: 'مَوْعِدُكُمْ', transliteration: 'mawʿidukum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Your appointment', ur: 'تمہارا appointment' } },
      { id: '20:59:3', arabic: 'يَوْمُ', transliteration: 'yawmu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(is on the) day', ur: '(ہے پر ) دن' } },
      { id: '20:59:4', arabic: 'ٱلزِّينَةِ', transliteration: 'l-zīnati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the festival', ur: '(کا)  festival' } },
      { id: '20:59:5', arabic: 'وَأَن', transliteration: 'wa-an', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and that', ur: 'اور کہ' } },
      { id: '20:59:6', arabic: 'يُحْشَرَ', transliteration: 'yuḥ\'shara', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will be assembled', ur: 'ہوگا assembled' } },
      { id: '20:59:7', arabic: 'ٱلنَّاسُ', transliteration: 'l-nāsu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the people', ur: 'لوگ' } },
      { id: '20:59:8', arabic: 'ضُحًۭى', transliteration: 'ḍuḥan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(at) forenoon', ur: '(at) forenoon' } }
    ],
    structure: { relationships: [{ from: 3, to: 5, label: 'عطف' }] }
  },
  60: {
    text: 'فَتَوَلَّىٰ فِرْعَوْنُ فَجَمَعَ كَيْدَهُۥ ثُمَّ أَتَىٰ',
    translation: {
      en: 'So Pharaoh went away, put together his plan, and then came [to Moses].',
      ur: 'تو فرعون لوٹ گیا اور اپنے سامان جمع کرکے پھر آیا'
    },
    words: [
      { id: '20:60:1', arabic: 'فَتَوَلَّىٰ', transliteration: 'fatawallā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'Then went away', ur: 'پھر گیا away' } },
      { id: '20:60:2', arabic: 'فِرْعَوْنُ', transliteration: 'fir\'ʿawnu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Firaun', ur: 'Firaun' } },
      { id: '20:60:3', arabic: 'فَجَمَعَ', transliteration: 'fajamaʿa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and put together', ur: 'اور put together' } },
      { id: '20:60:4', arabic: 'كَيْدَهُۥ', transliteration: 'kaydahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his plan', ur: 'اس کا plan' } },
      { id: '20:60:5', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '20:60:6', arabic: 'أَتَىٰ', transliteration: 'atā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'came', ur: 'آیا' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' }
      ] }
  },
  61: {
    text: 'قَالَ لَهُم مُّوسَىٰ وَيْلَكُمْ لَا تَفْتَرُوا۟ عَلَى ٱللَّهِ كَذِبًۭا فَيُسْحِتَكُم بِعَذَابٍۢ ۖ وَقَدْ خَابَ مَنِ ٱفْتَرَىٰ',
    translation: {
      en: 'Moses said to the magicians summoned by Pharaoh, "Woe to you! Do not invent a lie against Allah or He will exterminate you with a punishment; and he has failed who invents [such falsehood]."',
      ur: 'موسیٰ نے ان (جادوگروں) سے کہا کہ ہائے تمہاری کمبختی۔ خدا پر جھوٹ افتراء نہ کرو کہ وہ تمہیں عذاب سے فنا کردے گا اور جس نے افتراء کیا وہ نامراد رہا'
    },
    words: [
      { id: '20:61:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'Said', ur: 'کہا' } },
      { id: '20:61:2', arabic: 'لَهُم', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '20:61:3', arabic: 'مُّوسَىٰ', transliteration: 'mūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Musa', ur: 'Musa' } },
      { id: '20:61:4', arabic: 'وَيْلَكُمْ', transliteration: 'waylakum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'Woe to you', ur: 'Woe کو/تک تم' } },
      { id: '20:61:5', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '20:61:6', arabic: 'تَفْتَرُوا۟', transliteration: 'taftarū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'invent', ur: 'invent' } },
      { id: '20:61:7', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'against', ur: 'خلاف' } },
      { id: '20:61:8', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '20:61:9', arabic: 'كَذِبًۭا', transliteration: 'kadhiban', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a lie', ur: 'ایک lie' } },
      { id: '20:61:10', arabic: 'فَيُسْحِتَكُم', transliteration: 'fayus\'ḥitakum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'lest He will destroy you', ur: 'lest وہ  destroy تم' } },
      { id: '20:61:11', arabic: 'بِعَذَابٍۢ ۖ', transliteration: 'biʿadhābin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with a punishment', ur: 'ساتھ ایک عذاب' } },
      { id: '20:61:12', arabic: 'وَقَدْ', transliteration: 'waqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And verily', ur: 'اور verily' } },
      { id: '20:61:13', arabic: 'خَابَ', transliteration: 'khāba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he failed', ur: 'وہ failed' } },
      { id: '20:61:14', arabic: 'مَنِ', transliteration: 'mani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'who', ur: 'جو' } },
      { id: '20:61:15', arabic: 'ٱفْتَرَىٰ', transliteration: 'if\'tarā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'invented', ur: 'invented' } }
    ],
    structure: { relationships: [{ from: 7, to: 8, label: 'جار + مجرور' }, { from: 4, to: 10, label: 'عطف' }] }
  },
  62: {
    text: 'فَتَنَٰزَعُوٓا۟ أَمْرَهُم بَيْنَهُمْ وَأَسَرُّوا۟ ٱلنَّجْوَىٰ',
    translation: {
      en: 'So they disputed over their affair among themselves and concealed their private conversation.',
      ur: 'تو وہ باہم اپنے معاملے میں جھگڑانے اور چپکے چپکے سرگوشی کرنے لگے'
    },
    words: [
      { id: '20:62:1', arabic: 'فَتَنَـٰزَعُوٓا۟', transliteration: 'fatanāzaʿū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'Then they disputed', ur: 'پھر وہ disputed' } },
      { id: '20:62:2', arabic: 'أَمْرَهُم', transliteration: 'amrahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) their affair', ur: '(میں) ان کا affair' } },
      { id: '20:62:3', arabic: 'بَيْنَهُمْ', transliteration: 'baynahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among them', ur: 'میں سے ان کو' } },
      { id: '20:62:4', arabic: 'وَأَسَرُّوا۟', transliteration: 'wa-asarrū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and they kept secret', ur: 'اور وہ kept secret' } },
      { id: '20:62:5', arabic: 'ٱلنَّجْوَىٰ', transliteration: 'l-najwā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the private conversation', ur: ' private conversation' } }
    ],
    structure: { relationships: [{ from: 1, to: 4, label: 'عطف' }] }
  },
  63: {
    text: 'قَالُوٓا۟ إِنْ هَٰذَٰنِ لَسَٰحِرَٰنِ يُرِيدَانِ أَن يُخْرِجَاكُم مِّنْ أَرْضِكُم بِسِحْرِهِمَا وَيَذْهَبَا بِطَرِيقَتِكُمُ ٱلْمُثْلَىٰ',
    translation: {
      en: 'They said, "Indeed, these are two magicians who want to drive you out of your land with their magic and do away with your most exemplary way.',
      ur: 'کہنے لگے یہ دونوں جادوگر ہیں چاہتے ہیں کہ اپنے جادو (کے زور) سے تم کو تمہارے ملک سے نکل دیں اور تمہارے شائستہ مذہب کو نابود کردیں'
    },
    words: [
      { id: '20:63:1', arabic: 'قَالُوٓا۟', transliteration: 'qālū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They said', ur: 'وہ کہا' } },
      { id: '20:63:2', arabic: 'إِنْ', transliteration: 'in', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '20:63:3', arabic: 'هَـٰذَٰنِ', transliteration: 'hādhāni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'these two', ur: 'these two' } },
      { id: '20:63:4', arabic: 'لَسَـٰحِرَٰنِ', transliteration: 'lasāḥirāni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[two] magicians', ur: '[two] magicians' } },
      { id: '20:63:5', arabic: 'يُرِيدَانِ', transliteration: 'yurīdāni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they intend', ur: 'وہ intend' } },
      { id: '20:63:6', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:63:7', arabic: 'يُخْرِجَاكُم', transliteration: 'yukh\'rijākum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they drive you out', ur: 'وہ drive تم out' } },
      { id: '20:63:8', arabic: 'مِّنْ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:63:9', arabic: 'أَرْضِكُم', transliteration: 'arḍikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your land', ur: 'تمہارا land' } },
      { id: '20:63:10', arabic: 'بِسِحْرِهِمَا', transliteration: 'bisiḥ\'rihimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with their magic', ur: 'ساتھ ان کا magic' } },
      { id: '20:63:11', arabic: 'وَيَذْهَبَا', transliteration: 'wayadhhabā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and do away', ur: 'اور کرنا away' } },
      { id: '20:63:12', arabic: 'بِطَرِيقَتِكُمُ', transliteration: 'biṭarīqatikumu', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with your way', ur: 'ساتھ تمہارا راستہ' } },
      { id: '20:63:13', arabic: 'ٱلْمُثْلَىٰ', transliteration: 'l-muth\'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the exemplary', ur: ' exemplary' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' }
      ] }
  },
  64: {
    text: 'فَأَجْمِعُوا۟ كَيْدَكُمْ ثُمَّ ٱئْتُوا۟ صَفًّۭا ۚ وَقَدْ أَفْلَحَ ٱلْيَوْمَ مَنِ ٱسْتَعْلَىٰ',
    translation: {
      en: 'So resolve upon your plan and then come [forward] in line. And he has succeeded today who overcomes."',
      ur: 'تو تم (جادو کا) سامان اکھٹا کرلو اور پھر قطار باندھ کر آؤ۔ آج جو غالب رہا وہی کامیاب ہوا'
    },
    words: [
      { id: '20:64:1', arabic: 'فَأَجْمِعُوا۟', transliteration: 'fa-ajmiʿū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So put together', ur: 'پس put together' } },
      { id: '20:64:2', arabic: 'كَيْدَكُمْ', transliteration: 'kaydakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your plan', ur: 'تمہارا plan' } },
      { id: '20:64:3', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '20:64:4', arabic: 'ٱئْتُوا۟', transliteration: 'i\'tū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'come', ur: 'آنا' } },
      { id: '20:64:5', arabic: 'صَفًّۭا ۚ', transliteration: 'ṣaffan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) a line', ur: '(میں) ایک line' } },
      { id: '20:64:6', arabic: 'وَقَدْ', transliteration: 'waqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And verily', ur: 'اور verily' } },
      { id: '20:64:7', arabic: 'أَفْلَحَ', transliteration: 'aflaḥa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(will be) successful', ur: '(ہوگا) successful' } },
      { id: '20:64:8', arabic: 'ٱلْيَوْمَ', transliteration: 'l-yawma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'today', ur: 'today' } },
      { id: '20:64:9', arabic: 'مَنِ', transliteration: 'mani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'who', ur: 'جو' } },
      { id: '20:64:10', arabic: 'ٱسْتَعْلَىٰ', transliteration: 'is\'taʿlā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'overcomes', ur: 'overcomes' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' }
      ] }
  },
  65: {
    text: 'قَالُوا۟ يَٰمُوسَىٰٓ إِمَّآ أَن تُلْقِىَ وَإِمَّآ أَن نَّكُونَ أَوَّلَ مَنْ أَلْقَىٰ',
    translation: {
      en: 'They said, "O Moses, either you throw or we will be the first to throw."',
      ur: 'بولے کہ موسیٰ یا تم (اپنی چیز) ڈالو یا ہم (اپنی چیزیں) پہلے ڈالتے ہیں'
    },
    words: [
      { id: '20:65:1', arabic: 'قَالُوا۟', transliteration: 'qālū', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'They said', ur: 'وہ کہا' } },
      { id: '20:65:2', arabic: 'يَـٰمُوسَىٰٓ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } },
      { id: '20:65:3', arabic: 'إِمَّآ', transliteration: 'immā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Either', ur: 'Either' } },
      { id: '20:65:4', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[that]', ur: '[کہ]' } },
      { id: '20:65:5', arabic: 'تُلْقِىَ', transliteration: 'tul\'qiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you throw', ur: 'تم throw' } },
      { id: '20:65:6', arabic: 'وَإِمَّآ', transliteration: 'wa-immā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '20:65:7', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[that]', ur: '[کہ]' } },
      { id: '20:65:8', arabic: 'نَّكُونَ', transliteration: 'nakūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'we will be', ur: 'ہم ہوگا' } },
      { id: '20:65:9', arabic: 'أَوَّلَ', transliteration: 'awwala', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the first', ur: ' first' } },
      { id: '20:65:10', arabic: 'مَنْ', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جو' } },
      { id: '20:65:11', arabic: 'أَلْقَىٰ', transliteration: 'alqā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'throws', ur: 'throws' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' }
      ] }
  },
  66: {
    text: 'قَالَ بَلْ أَلْقُوا۟ ۖ فَإِذَا حِبَالُهُمْ وَعِصِيُّهُمْ يُخَيَّلُ إِلَيْهِ مِن سِحْرِهِمْ أَنَّهَا تَسْعَىٰ',
    translation: {
      en: 'He said, "Rather, you throw." And suddenly their ropes and staffs seemed to him from their magic that they were moving [like snakes].',
      ur: 'موسیٰ نے کہا نہیں تم ہی ڈالو۔ (جب انہوں نے چیزیں ڈالیں) تو ناگہاں ان کی رسیاں اور لاٹھیاں موسی کے خیال میں ایسی آنے لگیں کہ وہ (میدان) میں ادھر اُدھر دوڑ رہی ہیں'
    },
    words: [
      { id: '20:66:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:66:2', arabic: 'بَلْ', transliteration: 'bal', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Nay', ur: 'Nay' } },
      { id: '20:66:3', arabic: 'أَلْقُوا۟ ۖ', transliteration: 'alqū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you throw', ur: 'تم throw' } },
      { id: '20:66:4', arabic: 'فَإِذَا', transliteration: 'fa-idhā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then behold', ur: 'پھر behold' } },
      { id: '20:66:5', arabic: 'حِبَالُهُمْ', transliteration: 'ḥibāluhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Their ropes', ur: 'ان کا ropes' } },
      { id: '20:66:6', arabic: 'وَعِصِيُّهُمْ', transliteration: 'waʿiṣiyyuhum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and their staffs', ur: 'اور ان کا staffs' } },
      { id: '20:66:7', arabic: 'يُخَيَّلُ', transliteration: 'yukhayyalu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'seemed', ur: 'seemed' } },
      { id: '20:66:8', arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to him', ur: 'کو/تک him' } },
      { id: '20:66:9', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'by', ur: 'کے ذریعے' } },
      { id: '20:66:10', arabic: 'سِحْرِهِمْ', transliteration: 'siḥ\'rihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their magic', ur: 'ان کا magic' } },
      { id: '20:66:11', arabic: 'أَنَّهَا', transliteration: 'annahā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that they', ur: 'کہ وہ' } },
      { id: '20:66:12', arabic: 'تَسْعَىٰ', transliteration: 'tasʿā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(were) moving', ur: '(تھے) moving' } }
    ],
    structure: { relationships: [{ from: 9, to: 10, label: 'جار + مجرور' }] }
  },
  67: {
    text: 'فَأَوْجَسَ فِى نَفْسِهِۦ خِيفَةًۭ مُّوسَىٰ',
    translation: {
      en: 'And he sensed within himself apprehension, did Moses.',
      ur: '(اُس وقت) موسیٰ نے اپنے دل میں خوف معلوم کیا'
    },
    words: [
      { id: '20:67:1', arabic: 'فَأَوْجَسَ', transliteration: 'fa-awjasa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So sensed', ur: 'پس sensed' } },
      { id: '20:67:2', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:67:3', arabic: 'نَفْسِهِۦ', transliteration: 'nafsihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'himself', ur: 'himself' } },
      { id: '20:67:4', arabic: 'خِيفَةًۭ', transliteration: 'khīfatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a fear', ur: 'ایک ڈرنا' } },
      { id: '20:67:5', arabic: 'مُّوسَىٰ', transliteration: 'mūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Musa', ur: 'Musa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  68: {
    text: 'قُلْنَا لَا تَخَفْ إِنَّكَ أَنتَ ٱلْأَعْلَىٰ',
    translation: {
      en: 'Allah said, "Fear not. Indeed, it is you who are superior.',
      ur: 'ہم نے کہا خوف نہ کرو بلاشبہ تم ہی غالب ہو'
    },
    words: [
      { id: '20:68:1', arabic: 'قُلْنَا', transliteration: 'qul\'nā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We said', ur: 'ہم کہا' } },
      { id: '20:68:2', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '20:68:3', arabic: 'تَخَفْ', transliteration: 'takhaf', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'fear', ur: 'ڈرنا' } },
      { id: '20:68:4', arabic: 'إِنَّكَ', transliteration: 'innaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, you', ur: 'بےشک, تم' } },
      { id: '20:68:5', arabic: 'أَنتَ', transliteration: 'anta', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '20:68:6', arabic: 'ٱلْأَعْلَىٰ', transliteration: 'l-aʿlā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(will be) superior', ur: '(ہوگا) superior' } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'نفی + فعل' }] }
  },
  69: {
    text: 'وَأَلْقِ مَا فِى يَمِينِكَ تَلْقَفْ مَا صَنَعُوٓا۟ ۖ إِنَّمَا صَنَعُوا۟ كَيْدُ سَٰحِرٍۢ ۖ وَلَا يُفْلِحُ ٱلسَّاحِرُ حَيْثُ أَتَىٰ',
    translation: {
      en: 'And throw what is in your right hand; it will swallow up what they have crafted. What they have crafted is but the trick of a magician, and the magician will not succeed wherever he is."',
      ur: 'اور جو چیز (یعنی لاٹھی) تمہارے داہنے ہاتھ میں ہے اسے ڈال دو کہ جو کچھ انہوں نے بنایا ہے اس کو نگل جائے گی۔ جو کچھ انہوں نے بنایا ہے (یہ تو) جادوگروں کے ہتھکنڈے ہیں اور جادوگر جہاں جائے فلاح نہیں پائے گا'
    },
    words: [
      { id: '20:69:1', arabic: 'وَأَلْقِ', transliteration: 'wa-alqi', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And throw', ur: 'اور throw' } },
      { id: '20:69:2', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:69:3', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) in', ur: '(ہے) میں' } },
      { id: '20:69:4', arabic: 'يَمِينِكَ', transliteration: 'yamīnika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your right hand', ur: 'تمہارا حق ہاتھ' } },
      { id: '20:69:5', arabic: 'تَلْقَفْ', transliteration: 'talqaf', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'it will swallow up', ur: 'it  swallow up' } },
      { id: '20:69:6', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:69:7', arabic: 'صَنَعُوٓا۟ ۖ', transliteration: 'ṣanaʿū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they have made', ur: 'وہ رکھتے ہو بنایا' } },
      { id: '20:69:8', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '20:69:9', arabic: 'صَنَعُوا۟', transliteration: 'ṣanaʿū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they (have) made', ur: 'وہ (رکھتے ہو) بنایا' } },
      { id: '20:69:10', arabic: 'كَيْدُ', transliteration: 'kaydu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a trick', ur: 'ایک trick' } },
      { id: '20:69:11', arabic: 'سَـٰحِرٍۢ ۖ', transliteration: 'sāḥirin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) a magician', ur: '(کا) ایک magician' } },
      { id: '20:69:12', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:69:13', arabic: 'يُفْلِحُ', transliteration: 'yuf\'liḥu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'will be successful', ur: 'ہوگا successful' } },
      { id: '20:69:14', arabic: 'ٱلسَّاحِرُ', transliteration: 'l-sāḥiru', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the magician', ur: ' magician' } },
      { id: '20:69:15', arabic: 'حَيْثُ', transliteration: 'ḥaythu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'wherever', ur: 'wherever' } },
      { id: '20:69:16', arabic: 'أَتَىٰ', transliteration: 'atā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he comes', ur: 'وہ comes' } }
    ],
    structure: { relationships: [
        { from: 12, to: 13, label: 'نفی + فعل' }
      ] }
  },
  70: {
    text: 'فَأُلْقِىَ ٱلسَّحَرَةُ سُجَّدًۭا قَالُوٓا۟ ءَامَنَّا بِرَبِّ هَٰرُونَ وَمُوسَىٰ',
    translation: {
      en: 'So the magicians fell down in prostration. They said, "We have believed in the Lord of Aaron and Moses."',
      ur: '(القصہ یوں ہی ہوا) تو جادوگر سجدے میں گر پڑے (اور) کہنے لگے کہ ہم موسیٰ اور ہارون کے پروردگار پر ایمان لائے'
    },
    words: [
      { id: '20:70:1', arabic: 'فَأُلْقِىَ', transliteration: 'fa-ul\'qiya', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So were thrown down', ur: 'پس تھے thrown down' } },
      { id: '20:70:2', arabic: 'ٱلسَّحَرَةُ', transliteration: 'l-saḥaratu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the magicians', ur: ' magicians' } },
      { id: '20:70:3', arabic: 'سُجَّدًۭا', transliteration: 'sujjadan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'prostrating', ur: 'prostrating' } },
      { id: '20:70:4', arabic: 'قَالُوٓا۟', transliteration: 'qālū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They said', ur: 'وہ کہا' } },
      { id: '20:70:5', arabic: 'ءَامَنَّا', transliteration: 'āmannā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We believe', ur: 'ہم ایمان لانا' } },
      { id: '20:70:6', arabic: 'بِرَبِّ', transliteration: 'birabbi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in (the) Lord', ur: 'میں () رب' } },
      { id: '20:70:7', arabic: 'هَـٰرُونَ', transliteration: 'hārūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Harun', ur: '(کا) Harun' } },
      { id: '20:70:8', arabic: 'وَمُوسَىٰ', transliteration: 'wamūsā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Musa', ur: 'اور Musa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ] }
  },
  71: {
    text: 'قَالَ ءَامَنتُمْ لَهُۥ قَبْلَ أَنْ ءَاذَنَ لَكُمْ ۖ إِنَّهُۥ لَكَبِيرُكُمُ ٱلَّذِى عَلَّمَكُمُ ٱلسِّحْرَ ۖ فَلَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَٰفٍۢ وَلَأُصَلِّبَنَّكُمْ فِى جُذُوعِ ٱلنَّخْلِ وَلَتَعْلَمُنَّ أَيُّنَآ أَشَدُّ عَذَابًۭا وَأَبْقَىٰ',
    translation: {
      en: '[Pharaoh] said, "You believed him before I gave you permission. Indeed, he is your leader who has taught you magic. So I will surely cut off your hands and your feet on opposite sides, and I will crucify you on the trunks of palm trees, and you will surely know which of us is more severe in [giving] punishment and more enduring."',
      ur: '(فرعون) بولا کہ پیشتر اس کے میں تمہیں اجازت دوں تم اس پر ایمان لے آئے۔ بےشک وہ تمہارا بڑا (یعنی استاد) ہے جس نے تم کو جادو سکھایا ہے۔ سو میں تمہارے ہاتھ اور پاؤں (جانب) خلاف سے کٹوا دوں گا اور کھجور کے تنوں پر سولی چڑھوا دوں گا (اس وقت) تم کو معلوم ہوگا کہ ہم میں سے کس کا عذاب زیادہ سخت اور دیر تک رہنے والا ہے'
    },
    words: [
      { id: '20:71:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:71:2', arabic: 'ءَامَنتُمْ', transliteration: 'āmantum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'You believe', ur: 'تم ایمان لانا' } },
      { id: '20:71:3', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[to] him', ur: '[کو/تک] him' } },
      { id: '20:71:4', arabic: 'قَبْلَ', transliteration: 'qabla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:71:5', arabic: 'أَنْ', transliteration: 'an', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '[that]', ur: '[کہ]' } },
      { id: '20:71:6', arabic: 'ءَاذَنَ', transliteration: 'ādhana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'I gave permission', ur: 'میں دیا permission' } },
      { id: '20:71:7', arabic: 'لَكُمْ ۖ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '20:71:8', arabic: 'إِنَّهُۥ', transliteration: 'innahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, he', ur: 'بےشک, وہ' } },
      { id: '20:71:9', arabic: 'لَكَبِيرُكُمُ', transliteration: 'lakabīrukumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) your chief', ur: '(ہے) تمہارا chief' } },
      { id: '20:71:10', arabic: 'ٱلَّذِى', transliteration: 'alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the one who', ur: ' one جو' } },
      { id: '20:71:11', arabic: 'عَلَّمَكُمُ', transliteration: 'ʿallamakumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'taught you', ur: 'taught تم' } },
      { id: '20:71:12', arabic: 'ٱلسِّحْرَ ۖ', transliteration: 'l-siḥ\'ra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the magic', ur: ' magic' } },
      { id: '20:71:13', arabic: 'فَلَأُقَطِّعَنَّ', transliteration: 'fala-uqaṭṭiʿanna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So surely I will cut off', ur: 'پس بےشک میں  cut off' } },
      { id: '20:71:14', arabic: 'أَيْدِيَكُمْ', transliteration: 'aydiyakum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'your hands', ur: 'تمہارے ہاتھ' } },
      { id: '20:71:15', arabic: 'وَأَرْجُلَكُم', transliteration: 'wa-arjulakum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and your feet', ur: 'اور تمہارا feet' } },
      { id: '20:71:16', arabic: 'مِّنْ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:71:17', arabic: 'خِلَـٰفٍۢ', transliteration: 'khilāfin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'opposite sides', ur: 'opposite sides' } },
      { id: '20:71:18', arabic: 'وَلَأُصَلِّبَنَّكُمْ', transliteration: 'wala-uṣallibannakum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and surely I will crucify you', ur: 'اور بےشک میں  crucify تم' } },
      { id: '20:71:19', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '20:71:20', arabic: 'جُذُوعِ', transliteration: 'judhūʿi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) trunks', ur: '() trunks' } },
      { id: '20:71:21', arabic: 'ٱلنَّخْلِ', transliteration: 'l-nakhli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) date-palms', ur: '(کا) date-palms' } },
      { id: '20:71:22', arabic: 'وَلَتَعْلَمُنَّ', transliteration: 'walataʿlamunna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and surely you will know', ur: 'اور بےشک تم  جاننا' } },
      { id: '20:71:23', arabic: 'أَيُّنَآ', transliteration: 'ayyunā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'which of us', ur: 'جو کا us' } },
      { id: '20:71:24', arabic: 'أَشَدُّ', transliteration: 'ashaddu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(is) more severe', ur: '(ہے) more سخت' } },
      { id: '20:71:25', arabic: 'عَذَابًۭا', transliteration: 'ʿadhāban', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: '(in) punishment', ur: '(میں) عذاب' } },
      { id: '20:71:26', arabic: 'وَأَبْقَىٰ', transliteration: 'wa-abqā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and more lasting', ur: 'اور more lasting' } }
    ],
    structure: { relationships: [{ from: 14, to: 15, label: 'عطف' }] }
  },
  72: {
    text: 'قَالُوا۟ لَن نُّؤْثِرَكَ عَلَىٰ مَا جَآءَنَا مِنَ ٱلْبَيِّنَٰتِ وَٱلَّذِى فَطَرَنَا ۖ فَٱقْضِ مَآ أَنتَ قَاضٍ ۖ إِنَّمَا تَقْضِى هَٰذِهِ ٱلْحَيَوٰةَ ٱلدُّنْيَآ',
    translation: {
      en: 'They said, "Never will we prefer you over what has come to us of clear proofs and [over] He who created us. So decree whatever you are to decree. You can only decree for this worldly life.',
      ur: 'انہوں نے کہا جو دلائل ہمارے پاس آگئے ہیں ان پر اور جس نے ہم کو پیدا ہے اس پر ہم آپ کو ہرگز ترجیح نہیں دیں گے تو آپ کو جو حکم دینا ہو دے دیجیئے۔ اور آپ (جو) حکم دے سکتے ہیں وہ صرف اسی دنیا کی زندگی میں (دے سکتے ہیں)'
    },
    words: [
      { id: '20:72:1', arabic: 'قَالُوا۟', transliteration: 'qālū', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'They said', ur: 'وہ کہا' } },
      { id: '20:72:2', arabic: 'لَن', transliteration: 'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Never', ur: 'Never' } },
      { id: '20:72:3', arabic: 'نُّؤْثِرَكَ', transliteration: 'nu\'thiraka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we will prefer you', ur: 'ہم  prefer تم' } },
      { id: '20:72:4', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'over', ur: 'اوپر' } },
      { id: '20:72:5', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:72:6', arabic: 'جَآءَنَا', transliteration: 'jāanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'has come to us', ur: 'رکھتا ہے آنا کو/تک us' } },
      { id: '20:72:7', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:72:8', arabic: 'ٱلْبَيِّنَـٰتِ', transliteration: 'l-bayināti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the clear proofs', ur: ' واضح proofs' } },
      { id: '20:72:9', arabic: 'وَٱلَّذِى', transliteration: 'wa-alladhī', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the One Who', ur: 'اور  One جو' } },
      { id: '20:72:10', arabic: 'فَطَرَنَا ۖ', transliteration: 'faṭaranā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'created us', ur: 'پیدا کیا us' } },
      { id: '20:72:11', arabic: 'فَٱقْضِ', transliteration: 'fa-iq\'ḍi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So decree', ur: 'پس decree' } },
      { id: '20:72:12', arabic: 'مَآ', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'whatever', ur: 'whatever' } },
      { id: '20:72:13', arabic: 'أَنتَ', transliteration: 'anta', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '20:72:14', arabic: 'قَاضٍ ۖ', transliteration: 'qāḍin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) decreeing', ur: '(ہیں) decreeing' } },
      { id: '20:72:15', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '20:72:16', arabic: 'تَقْضِى', transliteration: 'taqḍī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you can decree', ur: 'تم can decree' } },
      { id: '20:72:17', arabic: 'هَـٰذِهِ', transliteration: 'hādhihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(for) this', ur: '(کے لیے) یہ' } },
      { id: '20:72:18', arabic: 'ٱلْحَيَوٰةَ', transliteration: 'l-ḥayata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'life', ur: 'زندگی' } },
      { id: '20:72:19', arabic: 'ٱلدُّنْيَآ', transliteration: 'l-dun\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the world', ur: '(کا)  world' } }
    ],
    structure: { relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ] }
  },
  73: {
    text: 'إِنَّآ ءَامَنَّا بِرَبِّنَا لِيَغْفِرَ لَنَا خَطَٰيَٰنَا وَمَآ أَكْرَهْتَنَا عَلَيْهِ مِنَ ٱلسِّحْرِ ۗ وَٱللَّهُ خَيْرٌۭ وَأَبْقَىٰٓ',
    translation: {
      en: 'Indeed, we have believed in our Lord that He may forgive us our sins and what you compelled us [to do] of magic. And Allah is better and more enduring."',
      ur: 'ہم اپنے پروردگار پر ایمان لے آئے تاکہ وہ ہمارے گناہوں کو معاف کرے اور (اسے بھی) جو آپ نے ہم سے زبردستی جادو کرایا۔ اور خدا بہتر اور باقی رہنے والا ہے'
    },
    words: [
      { id: '20:73:1', arabic: 'إِنَّآ', transliteration: 'innā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, [we]', ur: 'بےشک, [ہم]' } },
      { id: '20:73:2', arabic: 'ءَامَنَّا', transliteration: 'āmannā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we believe', ur: 'ہم ایمان لانا' } },
      { id: '20:73:3', arabic: 'بِرَبِّنَا', transliteration: 'birabbinā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in our Lord', ur: 'میں ہمارا رب' } },
      { id: '20:73:4', arabic: 'لِيَغْفِرَ', transliteration: 'liyaghfira', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that He may forgive', ur: 'کہ وہ may معاف کرنا' } },
      { id: '20:73:5', arabic: 'لَنَا', transliteration: 'lanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for us', ur: 'کے لیے us' } },
      { id: '20:73:6', arabic: 'خَطَـٰيَـٰنَا', transliteration: 'khaṭāyānā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'our sins', ur: 'ہمارا sins' } },
      { id: '20:73:7', arabic: 'وَمَآ', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and what', ur: 'اور کیا/جو' } },
      { id: '20:73:8', arabic: 'أَكْرَهْتَنَا', transliteration: 'akrahtanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you compelled us', ur: 'تم compelled us' } },
      { id: '20:73:9', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'on it', ur: 'پر it' } },
      { id: '20:73:10', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:73:11', arabic: 'ٱلسِّحْرِ ۗ', transliteration: 'l-siḥ\'ri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the magic', ur: ' magic' } },
      { id: '20:73:12', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '20:73:13', arabic: 'خَيْرٌۭ', transliteration: 'khayrun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Best', ur: '(ہے) Best' } },
      { id: '20:73:14', arabic: 'وَأَبْقَىٰٓ', transliteration: 'wa-abqā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and Ever Lasting', ur: 'اور Ever Lasting' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' }
      ] }
  },
  74: {
    text: 'إِنَّهُۥ مَن يَأْتِ رَبَّهُۥ مُجْرِمًۭا فَإِنَّ لَهُۥ جَهَنَّمَ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ',
    translation: {
      en: 'Indeed, whoever comes to his Lord as a criminal - indeed, for him is Hell; he will neither die therein nor live.',
      ur: 'جو شخص اپنے پروردگار کے پاس گنہگار ہو کر آئے گا تو اس کے لئے جہنم ہے۔ جس میں نہ مرے گا نہ جیئے گا'
    },
    words: [
      { id: '20:74:1', arabic: 'إِنَّهُۥ', transliteration: 'innahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, he', ur: 'بےشک, وہ' } },
      { id: '20:74:2', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جو' } },
      { id: '20:74:3', arabic: 'يَأْتِ', transliteration: 'yati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'comes', ur: 'comes' } },
      { id: '20:74:4', arabic: 'رَبَّهُۥ', transliteration: 'rabbahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) his Lord', ur: '(کو/تک) اس کا رب' } },
      { id: '20:74:5', arabic: 'مُجْرِمًۭا', transliteration: 'muj\'riman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) a criminal', ur: '(as) ایک criminal' } },
      { id: '20:74:6', arabic: 'فَإِنَّ', transliteration: 'fa-inna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then indeed', ur: 'پھر بےشک' } },
      { id: '20:74:7', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for him', ur: 'کے لیے him' } },
      { id: '20:74:8', arabic: 'جَهَنَّمَ', transliteration: 'jahannama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Hell', ur: '(ہے) Hell' } },
      { id: '20:74:9', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '20:74:10', arabic: 'يَمُوتُ', transliteration: 'yamūtu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'he will die', ur: 'وہ  مرنا' } },
      { id: '20:74:11', arabic: 'فِيهَا', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:74:12', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:74:13', arabic: 'يَحْيَىٰ', transliteration: 'yaḥyā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'live', ur: 'live' } }
    ],
    structure: { relationships: [{ from: 9, to: 10, label: 'نفی + فعل' }] }
  },
  75: {
    text: 'وَمَن يَأْتِهِۦ مُؤْمِنًۭا قَدْ عَمِلَ ٱلصَّٰلِحَٰتِ فَأُو۟لَٰٓئِكَ لَهُمُ ٱلدَّرَجَٰتُ ٱلْعُلَىٰ',
    translation: {
      en: 'But whoever comes to Him as a believer having done righteous deeds - for those will be the highest degrees [in position]:',
      ur: 'اور جو اس کے روبرو ایماندار ہو کر آئے گا اور عمل بھی نیک کئے ہوں گے تو ایسے لوگوں کے لئے اونچے اونچے درجے ہیں'
    },
    words: [
      { id: '20:75:1', arabic: 'وَمَن', transliteration: 'waman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But whoever', ur: 'لیکن whoever' } },
      { id: '20:75:2', arabic: 'يَأْتِهِۦ', transliteration: 'yatihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'comes to Him', ur: 'comes کو/تک Him' } },
      { id: '20:75:3', arabic: 'مُؤْمِنًۭا', transliteration: 'mu\'minan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) a believer', ur: '(as) ایک believer' } },
      { id: '20:75:4', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'verily', ur: 'verily' } },
      { id: '20:75:5', arabic: 'عَمِلَ', transliteration: 'ʿamila', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he has done', ur: 'وہ رکھتا ہے done' } },
      { id: '20:75:6', arabic: 'ٱلصَّـٰلِحَـٰتِ', transliteration: 'l-ṣāliḥāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the righteous deeds', ur: ' نیک اعمال' } },
      { id: '20:75:7', arabic: 'فَأُو۟لَـٰٓئِكَ', transliteration: 'fa-ulāika', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'then those', ur: 'پھر وہ لوگ' } },
      { id: '20:75:8', arabic: 'لَهُمُ', transliteration: 'lahumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '20:75:9', arabic: 'ٱلدَّرَجَـٰتُ', transliteration: 'l-darajātu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(will be) the ranks', ur: '(ہوگا)  ranks' } },
      { id: '20:75:10', arabic: 'ٱلْعُلَىٰ', transliteration: 'l-ʿulā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[the] high', ur: '[] high' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' }
      ] }
  },
  76: {
    text: 'جَنَّٰتُ عَدْنٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا ۚ وَذَٰلِكَ جَزَآءُ مَن تَزَكَّىٰ',
    translation: {
      en: 'Gardens of perpetual residence beneath which rivers flow, wherein they abide eternally. And that is the reward of one who purifies himself.',
      ur: '(یعنی) ہمیشہ رہنے کے باغ جن کے نیچے نہریں بہہ رہی ہیں۔ ہمیشہ ان میں رہیں گے۔ اور یہ اس شخص کا بدلہ ہے جو پاک ہوا'
    },
    words: [
      { id: '20:76:1', arabic: 'جَنَّـٰتُ', transliteration: 'jannātu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Gardens', ur: 'باغات' } },
      { id: '20:76:2', arabic: 'عَدْنٍۢ', transliteration: 'ʿadnin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Eden', ur: '(کا) Eden' } },
      { id: '20:76:3', arabic: 'تَجْرِى', transliteration: 'tajrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'flows', ur: 'flows' } },
      { id: '20:76:4', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:76:5', arabic: 'تَحْتِهَا', transliteration: 'taḥtihā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'underneath them', ur: 'underneath ان کو' } },
      { id: '20:76:6', arabic: 'ٱلْأَنْهَـٰرُ', transliteration: 'l-anhāru', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the rivers', ur: ' rivers' } },
      { id: '20:76:7', arabic: 'خَـٰلِدِينَ', transliteration: 'khālidīna', pos: ['N'], posLabel: 'N', root: 'خ ل د', meaning: { en: 'abiding forever', ur: 'abiding forever' } },
      { id: '20:76:8', arabic: 'فِيهَا ۚ', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:76:9', arabic: 'وَذَٰلِكَ', transliteration: 'wadhālika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And that', ur: 'اور کہ' } },
      { id: '20:76:10', arabic: 'جَزَآءُ', transliteration: 'jazāu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the reward', ur: '(ہے)  اجر/ثواب' } },
      { id: '20:76:11', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(for him) who', ur: '(کے لیے him) جو' } },
      { id: '20:76:12', arabic: 'تَزَكَّىٰ', transliteration: 'tazakkā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'purifies himself', ur: 'purifies himself' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }] }
  },
  77: {
    text: 'وَلَقَدْ أَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنْ أَسْرِ بِعِبَادِى فَٱضْرِبْ لَهُمْ طَرِيقًۭا فِى ٱلْبَحْرِ يَبَسًۭا لَّا تَخَٰفُ دَرَكًۭا وَلَا تَخْشَىٰ',
    translation: {
      en: 'And We had inspired to Moses, "Travel by night with My servants and strike for them a dry path through the sea; you will not fear being overtaken [by Pharaoh] nor be afraid [of drowning]."',
      ur: 'اور ہم نے موسیٰ کی طرف وحی بھیجی کہ ہمارے بندوں کو راتوں رات نکال لے جاؤ پھر ان کے لئے دریا میں (لاٹھی مار کر) خشک رستہ بنا دو پھر تم کو نہ تو (فرعون کے) آپکڑنے کا خوف ہوگا اور نہ (غرق ہونے کا) ڈر'
    },
    words: [
      { id: '20:77:1', arabic: 'وَلَقَدْ', transliteration: 'walaqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And verily', ur: 'اور verily' } },
      { id: '20:77:2', arabic: 'أَوْحَيْنَآ', transliteration: 'awḥaynā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We inspired', ur: 'ہم inspired' } },
      { id: '20:77:3', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '20:77:4', arabic: 'مُوسَىٰٓ', transliteration: 'mūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Musa', ur: 'Musa' } },
      { id: '20:77:5', arabic: 'أَنْ', transliteration: 'an', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:77:6', arabic: 'أَسْرِ', transliteration: 'asri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Travel by night', ur: 'Travel کے ذریعے night' } },
      { id: '20:77:7', arabic: 'بِعِبَادِى', transliteration: 'biʿibādī', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with My slaves', ur: 'ساتھ My slaves' } },
      { id: '20:77:8', arabic: 'فَٱضْرِبْ', transliteration: 'fa-iḍ\'rib', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and strike', ur: 'اور strike' } },
      { id: '20:77:9', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '20:77:10', arabic: 'طَرِيقًۭا', transliteration: 'ṭarīqan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a path', ur: 'ایک راستہ' } },
      { id: '20:77:11', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:77:12', arabic: 'ٱلْبَحْرِ', transliteration: 'l-baḥri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the sea', ur: ' sea' } },
      { id: '20:77:13', arabic: 'يَبَسًۭا', transliteration: 'yabasan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'dry', ur: 'dry' } },
      { id: '20:77:14', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '20:77:15', arabic: 'تَخَـٰفُ', transliteration: 'takhāfu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'fearing', ur: 'fearing' } },
      { id: '20:77:16', arabic: 'دَرَكًۭا', transliteration: 'darakan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to be overtaken', ur: 'کو/تک be overtaken' } },
      { id: '20:77:17', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:77:18', arabic: 'تَخْشَىٰ', transliteration: 'takhshā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'being afraid', ur: 'being afraid' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }] }
  },
  78: {
    text: 'فَأَتْبَعَهُمْ فِرْعَوْنُ بِجُنُودِهِۦ فَغَشِيَهُم مِّنَ ٱلْيَمِّ مَا غَشِيَهُمْ',
    translation: {
      en: 'So Pharaoh pursued them with his soldiers, and there covered them from the sea that which covered them,',
      ur: 'پھر فرعون نے اپنے لشکر کے ساتھ ان کا تعاقب کیا تو دریا (کی موجوں) نے ان پر چڑھ کر انہیں ڈھانک لیا (یعنی ڈبو دیا)'
    },
    words: [
      { id: '20:78:1', arabic: 'فَأَتْبَعَهُمْ', transliteration: 'fa-atbaʿahum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'Then followed them', ur: 'پھر پیروی کی ان کو' } },
      { id: '20:78:2', arabic: 'فِرْعَوْنُ', transliteration: 'fir\'ʿawnu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Firaun', ur: 'Firaun' } },
      { id: '20:78:3', arabic: 'بِجُنُودِهِۦ', transliteration: 'bijunūdihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with his forces', ur: 'ساتھ اس کا forces' } },
      { id: '20:78:4', arabic: 'فَغَشِيَهُم', transliteration: 'faghashiyahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'but covered them', ur: 'لیکن covered ان کو' } },
      { id: '20:78:5', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:78:6', arabic: 'ٱلْيَمِّ', transliteration: 'l-yami', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the sea', ur: ' sea' } },
      { id: '20:78:7', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:78:8', arabic: 'غَشِيَهُمْ', transliteration: 'ghashiyahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'covered them', ur: 'covered ان کو' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ] }
  },
  79: {
    text: 'وَأَضَلَّ فِرْعَوْنُ قَوْمَهُۥ وَمَا هَدَىٰ',
    translation: {
      en: 'And Pharaoh led his people astray and did not guide [them].',
      ur: 'اور فرعون نے اپنی قوم کو گمراہ کردیا اور سیدھے رستے پر نہ ڈالا'
    },
    words: [
      { id: '20:79:1', arabic: 'وَأَضَلَّ', transliteration: 'wa-aḍalla', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And led astray', ur: 'اور led astray' } },
      { id: '20:79:2', arabic: 'فِرْعَوْنُ', transliteration: 'fir\'ʿawnu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Firaun', ur: 'Firaun' } },
      { id: '20:79:3', arabic: 'قَوْمَهُۥ', transliteration: 'qawmahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his people', ur: 'اس کا لوگ' } },
      { id: '20:79:4', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (did) not', ur: 'اور (کیا) نہیں' } },
      { id: '20:79:5', arabic: 'هَدَىٰ', transliteration: 'hadā', pos: ['N'], posLabel: 'N', root: 'ه د ي', meaning: { en: 'guide them', ur: 'ہدایت دینا ان کو' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' }
      ] }
  },
  80: {
    text: 'يَٰبَنِىٓ إِسْرَٰٓءِيلَ قَدْ أَنجَيْنَٰكُم مِّنْ عَدُوِّكُمْ وَوَٰعَدْنَٰكُمْ جَانِبَ ٱلطُّورِ ٱلْأَيْمَنَ وَنَزَّلْنَا عَلَيْكُمُ ٱلْمَنَّ وَٱلسَّلْوَىٰ',
    translation: {
      en: 'O Children of Israel, We delivered you from your enemy, and We made an appointment with you at the right side of the mount, and We sent down to you manna and quails,',
      ur: 'اے آل یعقوب ہم نے تم کو تمہارے دشمن سے نجات دی اور تورات دینے کے لئے تم سے کوہ طور کی داہنی طرف مقرر کی اور تم پر من اور سلویٰ نازل کیا'
    },
    words: [
      { id: '20:80:1', arabic: 'يَـٰبَنِىٓ', transliteration: 'yābanī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Children of Israel', ur: 'اے اولاد کا Israel' } },
      { id: '20:80:2', arabic: 'إِسْرَٰٓءِيلَ', transliteration: 'is\'rāīla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Children of Israel', ur: 'اے اولاد کا Israel' } },
      { id: '20:80:3', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Verily', ur: 'Verily' } },
      { id: '20:80:4', arabic: 'أَنجَيْنَـٰكُم', transliteration: 'anjaynākum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We delivered you', ur: 'ہم delivered تم' } },
      { id: '20:80:5', arabic: 'مِّنْ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:80:6', arabic: 'عَدُوِّكُمْ', transliteration: 'ʿaduwwikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your enemy', ur: 'تمہارا دشمن' } },
      { id: '20:80:7', arabic: 'وَوَٰعَدْنَـٰكُمْ', transliteration: 'wawāʿadnākum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and We made a covenant with you', ur: 'اور ہم بنایا ایک عہد ساتھ تم' } },
      { id: '20:80:8', arabic: 'جَانِبَ', transliteration: 'jāniba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'on (the) side', ur: 'پر () side' } },
      { id: '20:80:9', arabic: 'ٱلطُّورِ', transliteration: 'l-ṭūri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Mount', ur: '(کا)  Mount' } },
      { id: '20:80:10', arabic: 'ٱلْأَيْمَنَ', transliteration: 'l-aymana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the right', ur: ' حق' } },
      { id: '20:80:11', arabic: 'وَنَزَّلْنَا', transliteration: 'wanazzalnā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and We sent down', ur: 'اور ہم بھیجا down' } },
      { id: '20:80:12', arabic: 'عَلَيْكُمُ', transliteration: 'ʿalaykumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '20:80:13', arabic: 'ٱلْمَنَّ', transliteration: 'l-mana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Manna', ur: ' Manna' } },
      { id: '20:80:14', arabic: 'وَٱلسَّلْوَىٰ', transliteration: 'wal-salwā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the quails', ur: 'اور  quails' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' }
      ] }
  },
  81: {
    text: 'كُلُوا۟ مِن طَيِّبَٰتِ مَا رَزَقْنَٰكُمْ وَلَا تَطْغَوْا۟ فِيهِ فَيَحِلَّ عَلَيْكُمْ غَضَبِى ۖ وَمَن يَحْلِلْ عَلَيْهِ غَضَبِى فَقَدْ هَوَىٰ',
    translation: {
      en: '[Saying], "Eat from the good things with which We have provided you and do not transgress [or oppress others] therein, lest My anger should descend upon you. And he upon whom My anger descends has certainly fallen."',
      ur: '(اور حکم دیا کہ) جو پاکیزہ چیزیں ہم نے تم کو دی ہیں ان کو کھاؤ۔ اور اس میں حد سے نہ نکلنا۔ ورنہ تم پر میرا غضب نازل ہوگا۔ اور جس پر میرا غضب نازل ہوا وہ ہلاک ہوگیا'
    },
    words: [
      { id: '20:81:1', arabic: 'كُلُوا۟', transliteration: 'kulū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Eat', ur: 'کھانا' } },
      { id: '20:81:2', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:81:3', arabic: 'طَيِّبَـٰتِ', transliteration: 'ṭayyibāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) good things', ur: '() نیکی things' } },
      { id: '20:81:4', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'which', ur: 'جو' } },
      { id: '20:81:5', arabic: 'رَزَقْنَـٰكُمْ', transliteration: 'razaqnākum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We have provided you', ur: 'ہم رکھتے ہو provided تم' } },
      { id: '20:81:6', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and (do) not', ur: 'اور (کرنا) نہیں' } },
      { id: '20:81:7', arabic: 'تَطْغَوْا۟', transliteration: 'taṭghaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'transgress', ur: 'transgress' } },
      { id: '20:81:8', arabic: 'فِيهِ', transliteration: 'fīhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'therein', ur: 'therein' } },
      { id: '20:81:9', arabic: 'فَيَحِلَّ', transliteration: 'fayaḥilla', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'lest should descend', ur: 'lest should descend' } },
      { id: '20:81:10', arabic: 'عَلَيْكُمْ', transliteration: 'ʿalaykum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'upon you', ur: 'پر تم' } },
      { id: '20:81:11', arabic: 'غَضَبِى ۖ', transliteration: 'ghaḍabī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My Anger', ur: 'My Anger' } },
      { id: '20:81:12', arabic: 'وَمَن', transliteration: 'waman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And whoever', ur: 'اور whoever' } },
      { id: '20:81:13', arabic: 'يَحْلِلْ', transliteration: 'yaḥlil', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'on whom descends', ur: 'پر whom descends' } },
      { id: '20:81:14', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'on whom descends', ur: 'پر whom descends' } },
      { id: '20:81:15', arabic: 'غَضَبِى', transliteration: 'ghaḍabī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My Anger', ur: 'My Anger' } },
      { id: '20:81:16', arabic: 'فَقَدْ', transliteration: 'faqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'indeed', ur: 'بےشک' } },
      { id: '20:81:17', arabic: 'هَوَىٰ', transliteration: 'hawā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he (has) perished', ur: 'وہ (رکھتا ہے) perished' } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }] }
  },
  82: {
    text: 'وَإِنِّى لَغَفَّارٌۭ لِّمَن تَابَ وَءَامَنَ وَعَمِلَ صَٰلِحًۭا ثُمَّ ٱهْتَدَىٰ',
    translation: {
      en: 'But indeed, I am the Perpetual Forgiver of whoever repents and believes and does righteousness and then continues in guidance.',
      ur: 'اور جو توبہ کرے اور ایمان لائے اور عمل نیک کرے پھر سیدھے رستے چلے اس کو میں بخش دینے والا ہوں'
    },
    words: [
      { id: '20:82:1', arabic: 'وَإِنِّى', transliteration: 'wa-innī', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But indeed, I Am', ur: 'لیکن بےشک, میں Am' } },
      { id: '20:82:2', arabic: 'لَغَفَّارٌۭ', transliteration: 'laghaffārun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Perpetual Forgiver', ur: ' Perpetual Forgiver' } },
      { id: '20:82:3', arabic: 'لِّمَن', transliteration: 'liman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of whoever', ur: 'کا whoever' } },
      { id: '20:82:4', arabic: 'تَابَ', transliteration: 'tāba', pos: ['N'], posLabel: 'N', root: 'ت و ب', meaning: { en: 'repents', ur: 'repents' } },
      { id: '20:82:5', arabic: 'وَءَامَنَ', transliteration: 'waāmana', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and believes', ur: 'اور believes' } },
      { id: '20:82:6', arabic: 'وَعَمِلَ', transliteration: 'waʿamila', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and does', ur: 'اور does' } },
      { id: '20:82:7', arabic: 'صَـٰلِحًۭا', transliteration: 'ṣāliḥan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'righteous (deeds)', ur: 'نیک (اعمال)' } },
      { id: '20:82:8', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '20:82:9', arabic: 'ٱهْتَدَىٰ', transliteration: 'ih\'tadā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'remains guided', ur: 'remains ہدایت دی' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' }
      ] }
  },
  83: {
    text: '۞ وَمَآ أَعْجَلَكَ عَن قَوْمِكَ يَٰمُوسَىٰ',
    translation: {
      en: '[Allah] said, "And what made you hasten from your people, O Moses?"',
      ur: 'اور اے موسیٰ تم نے اپنی قوم سے (آگے چلے آنے میں) کیوں جلدی کی'
    },
    words: [
      { id: '20:83:1', arabic: '۞ وَمَآ', transliteration: 'wamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And what', ur: 'اور کیا/جو' } },
      { id: '20:83:2', arabic: 'أَعْجَلَكَ', transliteration: 'aʿjalaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'made you hasten', ur: 'بنایا تم hasten' } },
      { id: '20:83:3', arabic: 'عَن', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:83:4', arabic: 'قَوْمِكَ', transliteration: 'qawmika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your people', ur: 'تمہارا لوگ' } },
      { id: '20:83:5', arabic: 'يَـٰمُوسَىٰ', transliteration: 'yāmūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Musa', ur: 'اے Musa' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }] }
  },
  84: {
    text: 'قَالَ هُمْ أُو۟لَآءِ عَلَىٰٓ أَثَرِى وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ',
    translation: {
      en: 'He said, "They are close upon my tracks, and I hastened to You, my Lord, that You be pleased."',
      ur: 'کہا وہ میرے پیچھے (آ رہے) ہیں اور اے پروردگار میں نے تیری طرف (آنے کی) جلدی اس لئے کی کہ تو خوش ہو'
    },
    words: [
      { id: '20:84:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:84:2', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'They', ur: 'وہ' } },
      { id: '20:84:3', arabic: 'أُو۟لَآءِ', transliteration: 'ulāi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) close', ur: '(ہیں) close' } },
      { id: '20:84:4', arabic: 'عَلَىٰٓ', transliteration: 'ʿalā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'upon', ur: 'پر' } },
      { id: '20:84:5', arabic: 'أَثَرِى', transliteration: 'atharī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my tracks', ur: 'my tracks' } },
      { id: '20:84:6', arabic: 'وَعَجِلْتُ', transliteration: 'waʿajil\'tu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and I hastened', ur: 'اور میں hastened' } },
      { id: '20:84:7', arabic: 'إِلَيْكَ', transliteration: 'ilayka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '20:84:8', arabic: 'رَبِّ', transliteration: 'rabbi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my Lord', ur: 'my رب' } },
      { id: '20:84:9', arabic: 'لِتَرْضَىٰ', transliteration: 'litarḍā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that You be pleased', ur: 'کہ تم be pleased' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' }
      ] }
  },
  85: {
    text: 'قَالَ فَإِنَّا قَدْ فَتَنَّا قَوْمَكَ مِنۢ بَعْدِكَ وَأَضَلَّهُمُ ٱلسَّامِرِىُّ',
    translation: {
      en: '[Allah] said, "But indeed, We have tried your people after you [departed], and the Samiri has led them astray."',
      ur: 'فرمایا کہ ہم نے تمہاری قوم کو تمہارے بعد آزمائش میں ڈال دیا ہے اور سامری نے ان کو بہکا دیا ہے'
    },
    words: [
      { id: '20:85:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:85:2', arabic: 'فَإِنَّا', transliteration: 'fa-innā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But indeed, We', ur: 'لیکن بےشک, ہم' } },
      { id: '20:85:3', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[verily]', ur: '[verily]' } },
      { id: '20:85:4', arabic: 'فَتَنَّا', transliteration: 'fatannā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'We (have) tried', ur: 'ہم (رکھتے ہو) tried' } },
      { id: '20:85:5', arabic: 'قَوْمَكَ', transliteration: 'qawmaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your people', ur: 'تمہارا لوگ' } },
      { id: '20:85:6', arabic: 'مِنۢ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after you', ur: 'بعد تم' } },
      { id: '20:85:7', arabic: 'بَعْدِكَ', transliteration: 'baʿdika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after you', ur: 'بعد تم' } },
      { id: '20:85:8', arabic: 'وَأَضَلَّهُمُ', transliteration: 'wa-aḍallahumu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and has led them astray', ur: 'اور رکھتا ہے led ان کو astray' } },
      { id: '20:85:9', arabic: 'ٱلسَّامِرِىُّ', transliteration: 'l-sāmiriyu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Samiri', ur: ' Samiri' } }
    ],
    structure: { relationships: [{ from: 4, to: 8, label: 'عطف' }] }
  },
  86: {
    text: 'فَرَجَعَ مُوسَىٰٓ إِلَىٰ قَوْمِهِۦ غَضْبَٰنَ أَسِفًۭا ۚ قَالَ يَٰقَوْمِ أَلَمْ يَعِدْكُمْ رَبُّكُمْ وَعْدًا حَسَنًا ۚ أَفَطَالَ عَلَيْكُمُ ٱلْعَهْدُ أَمْ أَرَدتُّمْ أَن يَحِلَّ عَلَيْكُمْ غَضَبٌۭ مِّن رَّبِّكُمْ فَأَخْلَفْتُم مَّوْعِدِى',
    translation: {
      en: 'So Moses returned to his people, angry and grieved. He said, "O my people, did your Lord not make you a good promise? Then, was the time [of its fulfillment] too long for you, or did you wish that wrath from your Lord descend upon you, so you broke your promise [of obedience] to me?"',
      ur: 'اور موسیٰ غصّے اور غم کی حالت میں اپنی قوم کے پاس واپس آئے (اور) کہنے لگے کہ اے قوم کیا تمہارے پروردگار نے تم سے ایک اچھا وعدہ نہیں کیا تھا؟ کیا (میری جدائی کی) مدت تمہیں دراز (معلوم) ہوئی یا تم نے چاہا کہ تم پر تمہارے پروردگار کی طرف سے غضب نازل ہو۔ اور (اس لئے) تم نے مجھ سے جو وعدہ کیا تھا (اس کے) خلاف کیا'
    },
    words: [
      { id: '20:86:1', arabic: 'فَرَجَعَ', transliteration: 'farajaʿa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then Musa returned', ur: 'پھر Musa واپس آیا' } },
      { id: '20:86:2', arabic: 'مُوسَىٰٓ', transliteration: 'mūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then Musa returned', ur: 'پھر Musa واپس آیا' } },
      { id: '20:86:3', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '20:86:4', arabic: 'قَوْمِهِۦ', transliteration: 'qawmihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his people', ur: 'اس کا لوگ' } },
      { id: '20:86:5', arabic: 'غَضْبَـٰنَ', transliteration: 'ghaḍbāna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'angry', ur: 'angry' } },
      { id: '20:86:6', arabic: 'أَسِفًۭا ۚ', transliteration: 'asifan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(and) sorrowful', ur: '(اور) sorrowful' } },
      { id: '20:86:7', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:86:8', arabic: 'يَـٰقَوْمِ', transliteration: 'yāqawmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O my people', ur: 'اے my لوگ' } },
      { id: '20:86:9', arabic: 'أَلَمْ', transliteration: 'alam', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Did not', ur: 'کیا نہیں' } },
      { id: '20:86:10', arabic: 'يَعِدْكُمْ', transliteration: 'yaʿid\'kum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'promise you', ur: 'وعدہ تم' } },
      { id: '20:86:11', arabic: 'رَبُّكُمْ', transliteration: 'rabbukum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your Lord', ur: 'تمہارا رب' } },
      { id: '20:86:12', arabic: 'وَعْدًا', transliteration: 'waʿdan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'a promise', ur: 'ایک وعدہ' } },
      { id: '20:86:13', arabic: 'حَسَنًا ۚ', transliteration: 'ḥasanan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'good', ur: 'نیکی' } },
      { id: '20:86:14', arabic: 'أَفَطَالَ', transliteration: 'afaṭāla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then, did seem long', ur: 'پھر, کیا seem long' } },
      { id: '20:86:15', arabic: 'عَلَيْكُمُ', transliteration: 'ʿalaykumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '20:86:16', arabic: 'ٱلْعَهْدُ', transliteration: 'l-ʿahdu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the promise', ur: ' وعدہ' } },
      { id: '20:86:17', arabic: 'أَمْ', transliteration: 'am', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '20:86:18', arabic: 'أَرَدتُّمْ', transliteration: 'aradttum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'did you desire', ur: 'کیا تم desire' } },
      { id: '20:86:19', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:86:20', arabic: 'يَحِلَّ', transliteration: 'yaḥilla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'descend', ur: 'descend' } },
      { id: '20:86:21', arabic: 'عَلَيْكُمْ', transliteration: 'ʿalaykum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'upon you', ur: 'پر تم' } },
      { id: '20:86:22', arabic: 'غَضَبٌۭ', transliteration: 'ghaḍabun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Anger', ur: '() Anger' } },
      { id: '20:86:23', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:86:24', arabic: 'رَّبِّكُمْ', transliteration: 'rabbikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your Lord', ur: 'تمہارا رب' } },
      { id: '20:86:25', arabic: 'فَأَخْلَفْتُم', transliteration: 'fa-akhlaftum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'so you broke', ur: 'پس تم broke' } },
      { id: '20:86:26', arabic: 'مَّوْعِدِى', transliteration: 'mawʿidī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) promise to me', ur: '() وعدہ کو/تک me' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 18, to: 25, label: 'عطف' }] }
  },
  87: {
    text: 'قَالُوا۟ مَآ أَخْلَفْنَا مَوْعِدَكَ بِمَلْكِنَا وَلَٰكِنَّا حُمِّلْنَآ أَوْزَارًۭا مِّن زِينَةِ ٱلْقَوْمِ فَقَذَفْنَٰهَا فَكَذَٰلِكَ أَلْقَى ٱلسَّامِرِىُّ',
    translation: {
      en: 'They said, "We did not break our promise to you by our will, but we were made to carry burdens from the ornaments of the people [of Pharaoh], so we threw them [into the fire], and thus did the Samiri throw."',
      ur: 'وہ کہنے لگے کہ ہم نے اپنے اختیار سے تم سے وعدہ خلاف نہیں کیا۔ بلکہ ہم لوگوں کے زیوروں کا بوجھ اٹھائے ہوئے تھے۔ پھر ہم نے اس کو (آگ میں) ڈال دیا اور اسی طرح سامری نے ڈال دیا'
    },
    words: [
      { id: '20:87:1', arabic: 'قَالُوا۟', transliteration: 'qālū', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'They said', ur: 'وہ کہا' } },
      { id: '20:87:2', arabic: 'مَآ', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '20:87:3', arabic: 'أَخْلَفْنَا', transliteration: 'akhlafnā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'we broke', ur: 'ہم broke' } },
      { id: '20:87:4', arabic: 'مَوْعِدَكَ', transliteration: 'mawʿidaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'promise to you', ur: 'وعدہ کو/تک تم' } },
      { id: '20:87:5', arabic: 'بِمَلْكِنَا', transliteration: 'bimalkinā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by our will', ur: 'کے ذریعے ہمارا ' } },
      { id: '20:87:6', arabic: 'وَلَـٰكِنَّا', transliteration: 'walākinnā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'but we', ur: 'لیکن ہم' } },
      { id: '20:87:7', arabic: 'حُمِّلْنَآ', transliteration: 'ḥummil\'nā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[we] were made to carry', ur: '[ہم] تھے بنایا کو/تک carry' } },
      { id: '20:87:8', arabic: 'أَوْزَارًۭا', transliteration: 'awzāran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'burdens', ur: 'burdens' } },
      { id: '20:87:9', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:87:10', arabic: 'زِينَةِ', transliteration: 'zīnati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ornaments', ur: 'ornaments' } },
      { id: '20:87:11', arabic: 'ٱلْقَوْمِ', transliteration: 'l-qawmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the people', ur: '(کا) لوگ' } },
      { id: '20:87:12', arabic: 'فَقَذَفْنَـٰهَا', transliteration: 'faqadhafnāhā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so we threw them', ur: 'پس ہم threw ان کو' } },
      { id: '20:87:13', arabic: 'فَكَذَٰلِكَ', transliteration: 'fakadhālika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and thus', ur: 'اور thus' } },
      { id: '20:87:14', arabic: 'أَلْقَى', transliteration: 'alqā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'threw', ur: 'threw' } },
      { id: '20:87:15', arabic: 'ٱلسَّامِرِىُّ', transliteration: 'l-sāmiriyu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Samiri', ur: ' Samiri' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' },
        { from: 14, to: 15, label: 'تعلق' }
      ] }
  },
  88: {
    text: 'فَأَخْرَجَ لَهُمْ عِجْلًۭا جَسَدًۭا لَّهُۥ خُوَارٌۭ فَقَالُوا۟ هَٰذَآ إِلَٰهُكُمْ وَإِلَٰهُ مُوسَىٰ فَنَسِىَ',
    translation: {
      en: 'And he extracted for them [the statue of] a calf which had a lowing sound, and they said, "This is your god and the god of Moses, but he forgot."',
      ur: 'تو اس نے ان کے لئے ایک بچھڑا بنا دیا (یعنی اس کا) قالب جس کی آواز گائے کی سی تھی۔ تو لوگ کہنے لگے کہ یہی تمہارا معبود ہے اور موسیٰ کا بھی معبود ہے۔ مگر وہ بھول گئے ہیں'
    },
    words: [
      { id: '20:88:1', arabic: 'فَأَخْرَجَ', transliteration: 'fa-akhraja', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'Then he brought forth', ur: 'پھر وہ brought forth' } },
      { id: '20:88:2', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '20:88:3', arabic: 'عِجْلًۭا', transliteration: 'ʿij\'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a calf\'s', ur: 'a calf\'s' } },
      { id: '20:88:4', arabic: 'جَسَدًۭا', transliteration: 'jasadan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'body', ur: 'body' } },
      { id: '20:88:5', arabic: 'لَّهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it had', ur: 'it رکھتا تھا' } },
      { id: '20:88:6', arabic: 'خُوَارٌۭ', transliteration: 'khuwārun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a lowing sound', ur: 'ایک lowing sound' } },
      { id: '20:88:7', arabic: 'فَقَالُوا۟', transliteration: 'faqālū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they said', ur: 'اور وہ کہا' } },
      { id: '20:88:8', arabic: 'هَـٰذَآ', transliteration: 'hādhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'This', ur: 'یہ' } },
      { id: '20:88:9', arabic: 'إِلَـٰهُكُمْ', transliteration: 'ilāhukum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) your god', ur: '(ہے) تمہارا اللہ' } },
      { id: '20:88:10', arabic: 'وَإِلَـٰهُ', transliteration: 'wa-ilāhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the god', ur: 'اور  اللہ' } },
      { id: '20:88:11', arabic: 'مُوسَىٰ', transliteration: 'mūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Musa', ur: '(کا) Musa' } },
      { id: '20:88:12', arabic: 'فَنَسِىَ', transliteration: 'fanasiya', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'but he forgot', ur: 'لیکن وہ forgot' } }
    ],
    structure: { relationships: [
        { from: 1, to: 12, label: 'عطف' }
      ] }
  },
  89: {
    text: 'أَفَلَا يَرَوْنَ أَلَّا يَرْجِعُ إِلَيْهِمْ قَوْلًۭا وَلَا يَمْلِكُ لَهُمْ ضَرًّۭا وَلَا نَفْعًۭا',
    translation: {
      en: 'Did they not see that it could not return to them any speech and that it did not possess for them any harm or benefit?',
      ur: 'کیا یہ لوگ نہیں دیکھتے کہ وہ ان کی کسی بات کا جواب نہیں دیتا۔ اور نہ ان کے نقصان اور نفع کا کچھ اختیار رکھتا ہے'
    },
    words: [
      { id: '20:89:1', arabic: 'أَفَلَا', transliteration: 'afalā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then, did not', ur: 'پھر, کیا نہیں' } },
      { id: '20:89:2', arabic: 'يَرَوْنَ', transliteration: 'yarawna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they see', ur: 'وہ دیکھنا' } },
      { id: '20:89:3', arabic: 'أَلَّا', transliteration: 'allā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that not', ur: 'کہ نہیں' } },
      { id: '20:89:4', arabic: 'يَرْجِعُ', transliteration: 'yarjiʿu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'it (could) return', ur: 'it (could) واپس آنا' } },
      { id: '20:89:5', arabic: 'إِلَيْهِمْ', transliteration: 'ilayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '20:89:6', arabic: 'قَوْلًۭا', transliteration: 'qawlan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a word', ur: 'ایک word' } },
      { id: '20:89:7', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:89:8', arabic: 'يَمْلِكُ', transliteration: 'yamliku', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'possess', ur: 'possess' } },
      { id: '20:89:9', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '20:89:10', arabic: 'ضَرًّۭا', transliteration: 'ḍarran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any harm', ur: 'any harm' } },
      { id: '20:89:11', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:89:12', arabic: 'نَفْعًۭا', transliteration: 'nafʿan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any benefit', ur: 'any benefit' } }
    ],
    structure: { relationships: [
        { from: 7, to: 8, label: 'نفی + فعل' }
      ] }
  },
  90: {
    text: 'وَلَقَدْ قَالَ لَهُمْ هَٰرُونُ مِن قَبْلُ يَٰقَوْمِ إِنَّمَا فُتِنتُم بِهِۦ ۖ وَإِنَّ رَبَّكُمُ ٱلرَّحْمَٰنُ فَٱتَّبِعُونِى وَأَطِيعُوٓا۟ أَمْرِى',
    translation: {
      en: 'And Aaron had already told them before [the return of Moses], "O my people, you are only being tested by it, and indeed, your Lord is the Most Merciful, so follow me and obey my order."',
      ur: 'اور ہارون نے ان سے پہلے ہی کہہ دیا تھا کہ لوگو اس سے صرف تمہاری آزمائش کی گئی ہے۔ اور تمہارا پروردگار تو خدا ہے تو میری پیروی کرو اور میرا کہا مانو'
    },
    words: [
      { id: '20:90:1', arabic: 'وَلَقَدْ', transliteration: 'walaqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And verily', ur: 'اور verily' } },
      { id: '20:90:2', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: '(had) said', ur: '(رکھتا تھا) کہا' } },
      { id: '20:90:3', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '20:90:4', arabic: 'هَـٰرُونُ', transliteration: 'hārūnu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Harun', ur: 'Harun' } },
      { id: '20:90:5', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:90:6', arabic: 'قَبْلُ', transliteration: 'qablu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:90:7', arabic: 'يَـٰقَوْمِ', transliteration: 'yāqawmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O my people', ur: 'اے my لوگ' } },
      { id: '20:90:8', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '20:90:9', arabic: 'فُتِنتُم', transliteration: 'futintum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you are being tested', ur: 'تم ہیں being tested' } },
      { id: '20:90:10', arabic: 'بِهِۦ ۖ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by it', ur: 'کے ذریعے it' } },
      { id: '20:90:11', arabic: 'وَإِنَّ', transliteration: 'wa-inna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and indeed', ur: 'اور بےشک' } },
      { id: '20:90:12', arabic: 'رَبَّكُمُ', transliteration: 'rabbakumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your Lord', ur: 'تمہارا رب' } },
      { id: '20:90:13', arabic: 'ٱلرَّحْمَـٰنُ', transliteration: 'l-raḥmānu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the Most Gracious', ur: '(ہے)  بہت رحم والا' } },
      { id: '20:90:14', arabic: 'فَٱتَّبِعُونِى', transliteration: 'fa-ittabiʿūnī', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so follow me', ur: 'پس پیروی کرنا me' } },
      { id: '20:90:15', arabic: 'وَأَطِيعُوٓا۟', transliteration: 'wa-aṭīʿū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and obey', ur: 'اور اطاعت کرنا' } },
      { id: '20:90:16', arabic: 'أَمْرِى', transliteration: 'amrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my order', ur: 'my order' } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }] }
  },
  91: {
    text: 'قَالُوا۟ لَن نَّبْرَحَ عَلَيْهِ عَٰكِفِينَ حَتَّىٰ يَرْجِعَ إِلَيْنَا مُوسَىٰ',
    translation: {
      en: 'They said, "We will never cease being devoted to the calf until Moses returns to us."',
      ur: 'وہ کہنے لگے کہ جب تک موسیٰ ہمارے پاس واپس نہ آئیں ہم تو اس کی پوجا پر قائم رہیں گے'
    },
    words: [
      { id: '20:91:1', arabic: 'قَالُوا۟', transliteration: 'qālū', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'They said', ur: 'وہ کہا' } },
      { id: '20:91:2', arabic: 'لَن', transliteration: 'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Never', ur: 'Never' } },
      { id: '20:91:3', arabic: 'نَّبْرَحَ', transliteration: 'nabraḥa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we will cease', ur: 'ہم  cease' } },
      { id: '20:91:4', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'being devoted to it', ur: 'being devoted کو/تک it' } },
      { id: '20:91:5', arabic: 'عَـٰكِفِينَ', transliteration: 'ʿākifīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'being devoted to it', ur: 'being devoted کو/تک it' } },
      { id: '20:91:6', arabic: 'حَتَّىٰ', transliteration: 'ḥattā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'until', ur: 'until' } },
      { id: '20:91:7', arabic: 'يَرْجِعَ', transliteration: 'yarjiʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'returns', ur: 'returns' } },
      { id: '20:91:8', arabic: 'إِلَيْنَا', transliteration: 'ilaynā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'to us', ur: 'کو/تک us' } },
      { id: '20:91:9', arabic: 'مُوسَىٰ', transliteration: 'mūsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Musa', ur: 'Musa' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' }
      ] }
  },
  92: {
    text: 'قَالَ يَٰهَٰرُونُ مَا مَنَعَكَ إِذْ رَأَيْتَهُمْ ضَلُّوٓا۟',
    translation: {
      en: '[Moses] said, "O Aaron, what prevented you, when you saw them going astray,',
      ur: '(پھر موسیٰ نے ہارون سے) کہا کہ ہارون جب تم نے ان کو دیکھا تھا کہ گمراہ ہو رہے ہیں تو تم کو کس چیز نے روکا'
    },
    words: [
      { id: '20:92:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:92:2', arabic: 'يَـٰهَـٰرُونُ', transliteration: 'yāhārūnu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'O Harun', ur: 'اے Harun' } },
      { id: '20:92:3', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'What', ur: 'کیا/جو' } },
      { id: '20:92:4', arabic: 'مَنَعَكَ', transliteration: 'manaʿaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'prevented you', ur: 'prevented تم' } },
      { id: '20:92:5', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '20:92:6', arabic: 'رَأَيْتَهُمْ', transliteration: 'ra-aytahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you saw them', ur: 'تم دیکھا ان کو' } },
      { id: '20:92:7', arabic: 'ضَلُّوٓا۟', transliteration: 'ḍallū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'going astray', ur: 'going astray' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ] }
  },
  93: {
    text: 'أَلَّا تَتَّبِعَنِ ۖ أَفَعَصَيْتَ أَمْرِى',
    translation: {
      en: 'From following me? Then have you disobeyed my order?"',
      ur: '(یعنی) اس بات سے کہ تم میرے پیچھے چلے آؤ۔ بھلا تم نے میرے حکم کے خلاف (کیوں) کیا؟'
    },
    words: [
      { id: '20:93:1', arabic: 'أَلَّا', transliteration: 'allā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'That not', ur: 'کہ نہیں' } },
      { id: '20:93:2', arabic: 'تَتَّبِعَنِ ۖ', transliteration: 'tattabiʿani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you follow me', ur: 'تم پیروی کرنا me' } },
      { id: '20:93:3', arabic: 'أَفَعَصَيْتَ', transliteration: 'afaʿaṣayta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then, have you disobeyed', ur: 'پھر, رکھتے ہو تم disobeyed' } },
      { id: '20:93:4', arabic: 'أَمْرِى', transliteration: 'amrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my order', ur: 'my order' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ] }
  },
  94: {
    text: 'قَالَ يَبْنَؤُمَّ لَا تَأْخُذْ بِلِحْيَتِى وَلَا بِرَأْسِىٓ ۖ إِنِّى خَشِيتُ أَن تَقُولَ فَرَّقْتَ بَيْنَ بَنِىٓ إِسْرَٰٓءِيلَ وَلَمْ تَرْقُبْ قَوْلِى',
    translation: {
      en: '[Aaron] said, "O son of my mother, do not seize [me] by my beard or by my head. Indeed, I feared that you would say, \'You caused division among the Children of Israel, and you did not observe [or await] my word.\' "',
      ur: 'کہنے لگے کہ بھائی میری ڈاڑھی اور سر (کے بالوں) کو نہ پکڑیئے۔ میں تو اس سے ڈرا کہ آپ یہ نہ کہیں کہ تم نے بنی اسرائیل میں تفرقہ ڈال دیا اور میری بات کو ملحوظ نہ رکھا'
    },
    words: [
      { id: '20:94:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:94:2', arabic: 'يَبْنَؤُمَّ', transliteration: 'yabna-umma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O son of my mother', ur: 'اے son کا my mother' } },
      { id: '20:94:3', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '20:94:4', arabic: 'تَأْخُذْ', transliteration: 'takhudh', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'seize (me)', ur: 'seize (me)' } },
      { id: '20:94:5', arabic: 'بِلِحْيَتِى', transliteration: 'biliḥ\'yatī', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by my beard', ur: 'کے ذریعے my beard' } },
      { id: '20:94:6', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:94:7', arabic: 'بِرَأْسِىٓ ۖ', transliteration: 'birasī', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by my head', ur: 'کے ذریعے my head' } },
      { id: '20:94:8', arabic: 'إِنِّى', transliteration: 'innī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, I', ur: 'بےشک, میں' } },
      { id: '20:94:9', arabic: 'خَشِيتُ', transliteration: 'khashītu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[I] feared', ur: '[میں] ڈرا' } },
      { id: '20:94:10', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:94:11', arabic: 'تَقُولَ', transliteration: 'taqūla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you would say', ur: 'تم  کہو' } },
      { id: '20:94:12', arabic: 'فَرَّقْتَ', transliteration: 'farraqta', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'You caused division', ur: 'تم caused division' } },
      { id: '20:94:13', arabic: 'بَيْنَ', transliteration: 'bayna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'between', ur: 'درمیان' } },
      { id: '20:94:14', arabic: 'بَنِىٓ', transliteration: 'banī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Children of Israel', ur: '() اولاد کا Israel' } },
      { id: '20:94:15', arabic: 'إِسْرَٰٓءِيلَ', transliteration: 'is\'rāīla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Children of Israel', ur: '() اولاد کا Israel' } },
      { id: '20:94:16', arabic: 'وَلَمْ', transliteration: 'walam', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:94:17', arabic: 'تَرْقُبْ', transliteration: 'tarqub', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you respect', ur: 'تم respect' } },
      { id: '20:94:18', arabic: 'قَوْلِى', transliteration: 'qawlī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my word', ur: 'my word' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'نفی + فعل' }] }
  },
  95: {
    text: 'قَالَ فَمَا خَطْبُكَ يَٰسَٰمِرِىُّ',
    translation: {
      en: '[Moses] said, "And what is your case, O Samiri?"',
      ur: 'پھر (سامری سے) کہنے لگے کہ سامری تیرا کیا حال ہے؟'
    },
    words: [
      { id: '20:95:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:95:2', arabic: 'فَمَا', transliteration: 'famā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then what', ur: 'پھر کیا/جو' } },
      { id: '20:95:3', arabic: 'خَطْبُكَ', transliteration: 'khaṭbuka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) your case', ur: '(ہے) تمہارا case' } },
      { id: '20:95:4', arabic: 'يَـٰسَـٰمِرِىُّ', transliteration: 'yāsāmiriyyu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'O Samiri', ur: 'اے Samiri' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ] }
  },
  96: {
    text: 'قَالَ بَصُرْتُ بِمَا لَمْ يَبْصُرُوا۟ بِهِۦ فَقَبَضْتُ قَبْضَةًۭ مِّنْ أَثَرِ ٱلرَّسُولِ فَنَبَذْتُهَا وَكَذَٰلِكَ سَوَّلَتْ لِى نَفْسِى',
    translation: {
      en: 'He said, "I saw what they did not see, so I took a handful [of dust] from the track of the messenger and threw it, and thus did my soul entice me."',
      ur: 'اس نے کہا کہ میں نے ایسی چیز دیکھی جو اوروں نے نہیں دیکھی تو میں نے فرشتے کے نقش پا سے (مٹی کی) ایک مٹھی بھر لی۔ پھر اس کو (بچھڑے کے قالب میں) ڈال دیا اور مجھے میرے جی نے (اس کام کو) اچھا بتایا'
    },
    words: [
      { id: '20:96:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:96:2', arabic: 'بَصُرْتُ', transliteration: 'baṣur\'tu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'I perceived', ur: 'میں perceived' } },
      { id: '20:96:3', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:96:4', arabic: 'لَمْ', transliteration: 'lam', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '20:96:5', arabic: 'يَبْصُرُوا۟', transliteration: 'yabṣurū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they perceive', ur: 'وہ perceive' } },
      { id: '20:96:6', arabic: 'بِهِۦ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:96:7', arabic: 'فَقَبَضْتُ', transliteration: 'faqabaḍtu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so I took', ur: 'پس میں لیا' } },
      { id: '20:96:8', arabic: 'قَبْضَةًۭ', transliteration: 'qabḍatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a handful', ur: 'ایک handful' } },
      { id: '20:96:9', arabic: 'مِّنْ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:96:10', arabic: 'أَثَرِ', transliteration: 'athari', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) track', ur: '() track' } },
      { id: '20:96:11', arabic: 'ٱلرَّسُولِ', transliteration: 'l-rasūli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Messenger', ur: '(کا) رسول' } },
      { id: '20:96:12', arabic: 'فَنَبَذْتُهَا', transliteration: 'fanabadhtuhā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'then threw it', ur: 'پھر threw it' } },
      { id: '20:96:13', arabic: 'وَكَذَٰلِكَ', transliteration: 'wakadhālika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and thus', ur: 'اور thus' } },
      { id: '20:96:14', arabic: 'سَوَّلَتْ', transliteration: 'sawwalat', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'suggested', ur: 'suggested' } },
      { id: '20:96:15', arabic: 'لِى', transliteration: 'lī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to me', ur: 'کو/تک me' } },
      { id: '20:96:16', arabic: 'نَفْسِى', transliteration: 'nafsī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my soul', ur: 'my روح/جان' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' },
        { from: 14, to: 15, label: 'تعلق' },
        { from: 15, to: 16, label: 'تعلق' }
      ] }
  },
  97: {
    text: 'قَالَ فَٱذْهَبْ فَإِنَّ لَكَ فِى ٱلْحَيَوٰةِ أَن تَقُولَ لَا مِسَاسَ ۖ وَإِنَّ لَكَ مَوْعِدًۭا لَّن تُخْلَفَهُۥ ۖ وَٱنظُرْ إِلَىٰٓ إِلَٰهِكَ ٱلَّذِى ظَلْتَ عَلَيْهِ عَاكِفًۭا ۖ لَّنُحَرِّقَنَّهُۥ ثُمَّ لَنَنسِفَنَّهُۥ فِى ٱلْيَمِّ نَسْفًا',
    translation: {
      en: '[Moses] said, "Then go. And indeed, it is [decreed] for you in [this] life to say, \'No contact.\' And indeed, you have an appointment [in the Hereafter] you will not fail to keep. And look at your \'god\' to which you remained devoted. We will surely burn it and blow it into the sea with a blast.',
      ur: '(موسیٰ نے) کہا جا تجھ کو دنیا کی زندگی میں یہ (سزا) ہے کہ کہتا رہے کہ مجھ کو ہاتھ نہ لگانا اور تیرے لئے ایک اور وعدہ ہے (یعنی عذاب کا) جو تجھ سے ٹل نہ سکے گا اور جس معبود (کی پوجا) پر تو (قائم و) معتکف تھا اس کو دیکھ۔ ہم اسے جلادیں گے پھر اس (کی راکھ) کو اُڑا کر دریا میں بکھیر دیں گے'
    },
    words: [
      { id: '20:97:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:97:2', arabic: 'فَٱذْهَبْ', transliteration: 'fa-idh\'hab', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then go', ur: 'پھر جانا' } },
      { id: '20:97:3', arabic: 'فَإِنَّ', transliteration: 'fa-inna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And indeed', ur: 'اور بےشک' } },
      { id: '20:97:4', arabic: 'لَكَ', transliteration: 'laka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '20:97:5', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:97:6', arabic: 'ٱلْحَيَوٰةِ', transliteration: 'l-ḥayati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the life', ur: ' زندگی' } },
      { id: '20:97:7', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:97:8', arabic: 'تَقُولَ', transliteration: 'taqūla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you will say', ur: 'تم  کہو' } },
      { id: '20:97:9', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '20:97:10', arabic: 'مِسَاسَ ۖ', transliteration: 'misāsa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'touch', ur: 'touch' } },
      { id: '20:97:11', arabic: 'وَإِنَّ', transliteration: 'wa-inna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And indeed', ur: 'اور بےشک' } },
      { id: '20:97:12', arabic: 'لَكَ', transliteration: 'laka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '20:97:13', arabic: 'مَوْعِدًۭا', transliteration: 'mawʿidan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) an appointment', ur: '(ہے) ایک appointment' } },
      { id: '20:97:14', arabic: 'لَّن', transliteration: 'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'never', ur: 'never' } },
      { id: '20:97:15', arabic: 'تُخْلَفَهُۥ ۖ', transliteration: 'tukh\'lafahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you will fail to (keep) it', ur: 'تم  fail کو/تک (keep) it' } },
      { id: '20:97:16', arabic: 'وَٱنظُرْ', transliteration: 'wa-unẓur', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And look', ur: 'اور look' } },
      { id: '20:97:17', arabic: 'إِلَىٰٓ', transliteration: 'ilā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'at', ur: 'at' } },
      { id: '20:97:18', arabic: 'إِلَـٰهِكَ', transliteration: 'ilāhika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your god', ur: 'تمہارا اللہ' } },
      { id: '20:97:19', arabic: 'ٱلَّذِى', transliteration: 'alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that which', ur: 'کہ جو' } },
      { id: '20:97:20', arabic: 'ظَلْتَ', transliteration: 'ẓalta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you have remained', ur: 'تم رکھتے ہو remained' } },
      { id: '20:97:21', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to it', ur: 'کو/تک it' } },
      { id: '20:97:22', arabic: 'عَاكِفًۭا ۖ', transliteration: 'ʿākifan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'devoted', ur: 'devoted' } },
      { id: '20:97:23', arabic: 'لَّنُحَرِّقَنَّهُۥ', transliteration: 'lanuḥarriqannahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Surely we will burn it', ur: 'بےشک ہم  burn it' } },
      { id: '20:97:24', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '20:97:25', arabic: 'لَنَنسِفَنَّهُۥ', transliteration: 'lanansifannahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'certainly we will scatter it', ur: 'یقیناً ہم  scatter it' } },
      { id: '20:97:26', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:97:27', arabic: 'ٱلْيَمِّ', transliteration: 'l-yami', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the sea', ur: ' sea' } },
      { id: '20:97:28', arabic: 'نَسْفًا', transliteration: 'nasfan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) particles', ur: '(میں) particles' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' },
        { from: 14, to: 15, label: 'تعلق' },
        { from: 15, to: 16, label: 'تعلق' },
        { from: 16, to: 17, label: 'تعلق' },
        { from: 17, to: 18, label: 'تعلق' },
        { from: 18, to: 19, label: 'تعلق' },
        { from: 19, to: 20, label: 'تعلق' },
        { from: 20, to: 21, label: 'تعلق' },
        { from: 21, to: 22, label: 'تعلق' },
        { from: 22, to: 23, label: 'تعلق' },
        { from: 23, to: 24, label: 'تعلق' },
        { from: 24, to: 25, label: 'تعلق' },
        { from: 25, to: 26, label: 'تعلق' },
        { from: 26, to: 27, label: 'تعلق' },
        { from: 27, to: 28, label: 'تعلق' }
      ] }
  },
  98: {
    text: 'إِنَّمَآ إِلَٰهُكُمُ ٱللَّهُ ٱلَّذِى لَآ إِلَٰهَ إِلَّا هُوَ ۚ وَسِعَ كُلَّ شَىْءٍ عِلْمًۭا',
    translation: {
      en: 'Your god is only Allah, except for whom there is no deity. He has encompassed all things in knowledge."',
      ur: 'تمہارا معبود خدا ہی ہے جس کے سوا کوئی معبود نہیں۔ اس کا علم ہر چیز پر محیط ہے'
    },
    words: [
      { id: '20:98:1', arabic: 'إِنَّمَآ', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '20:98:2', arabic: 'إِلَـٰهُكُمُ', transliteration: 'ilāhukumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your God', ur: 'تمہارا اللہ' } },
      { id: '20:98:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Allah', ur: '(ہے) اللہ' } },
      { id: '20:98:4', arabic: 'ٱلَّذِى', transliteration: 'alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the One', ur: ' One' } },
      { id: '20:98:5', arabic: 'لَآ', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(there is) no', ur: '(وہاں ہے) نہیں' } },
      { id: '20:98:6', arabic: 'إِلَـٰهَ', transliteration: 'ilāha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'god', ur: 'اللہ' } },
      { id: '20:98:7', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'but', ur: 'لیکن' } },
      { id: '20:98:8', arabic: 'هُوَ ۚ', transliteration: 'huwa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He', ur: 'وہ' } },
      { id: '20:98:9', arabic: 'وَسِعَ', transliteration: 'wasiʿa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'He has encompassed', ur: 'وہ رکھتا ہے encompassed' } },
      { id: '20:98:10', arabic: 'كُلَّ', transliteration: 'kulla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'all', ur: 'سب' } },
      { id: '20:98:11', arabic: 'شَىْءٍ', transliteration: 'shayin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'things', ur: 'things' } },
      { id: '20:98:12', arabic: 'عِلْمًۭا', transliteration: 'ʿil\'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) knowledge', ur: '(میں) علم' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' }
      ] }
  },
  99: {
    text: 'كَذَٰلِكَ نَقُصُّ عَلَيْكَ مِنْ أَنۢبَآءِ مَا قَدْ سَبَقَ ۚ وَقَدْ ءَاتَيْنَٰكَ مِن لَّدُنَّا ذِكْرًۭا',
    translation: {
      en: 'Thus, [O Muhammad], We relate to you from the news of what has preceded. And We have certainly given you from Us the Qur\'an.',
      ur: 'اس طرح پر ہم تم سے وہ حالات بیان کرتے ہیں جو گذر چکے ہیں۔ اور ہم نے تمہیں اپنے پاس سے نصیحت (کی کتاب) عطا فرمائی ہے'
    },
    words: [
      { id: '20:99:1', arabic: 'كَذَٰلِكَ', transliteration: 'kadhālika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Thus', ur: 'Thus' } },
      { id: '20:99:2', arabic: 'نَقُصُّ', transliteration: 'naquṣṣu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We relate', ur: 'ہم relate' } },
      { id: '20:99:3', arabic: 'عَلَيْكَ', transliteration: 'ʿalayka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '20:99:4', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:99:5', arabic: 'أَنۢبَآءِ', transliteration: 'anbāi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) news', ur: '() news' } },
      { id: '20:99:6', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(of) what', ur: '(کا) کیا/جو' } },
      { id: '20:99:7', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'has preceded', ur: 'رکھتا ہے preceded' } },
      { id: '20:99:8', arabic: 'سَبَقَ ۚ', transliteration: 'sabaqa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'has preceded', ur: 'رکھتا ہے preceded' } },
      { id: '20:99:9', arabic: 'وَقَدْ', transliteration: 'waqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And certainly', ur: 'اور یقیناً' } },
      { id: '20:99:10', arabic: 'ءَاتَيْنَـٰكَ', transliteration: 'ātaynāka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We have given you', ur: 'ہم رکھتے ہو given تم' } },
      { id: '20:99:11', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:99:12', arabic: 'لَّدُنَّا', transliteration: 'ladunnā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Us', ur: 'Us' } },
      { id: '20:99:13', arabic: 'ذِكْرًۭا', transliteration: 'dhik\'ran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a Reminder', ur: 'ایک Reminder' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }, { from: 11, to: 12, label: 'جار + مجرور' }] }
  },
  100: {
    text: 'مَّنْ أَعْرَضَ عَنْهُ فَإِنَّهُۥ يَحْمِلُ يَوْمَ ٱلْقِيَٰمَةِ وِزْرًا',
    translation: {
      en: 'Whoever turns away from it - then indeed, he will bear on the Day of Resurrection a burden,',
      ur: 'جو شخص اس سے منہ پھیرے گا وہ قیامت کے دن (گناہ کا) بوجھ اُٹھائے گا'
    },
    words: [
      { id: '20:100:1', arabic: 'مَّنْ', transliteration: 'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Whoever', ur: 'Whoever' } },
      { id: '20:100:2', arabic: 'أَعْرَضَ', transliteration: 'aʿraḍa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'turns away', ur: 'turns away' } },
      { id: '20:100:3', arabic: 'عَنْهُ', transliteration: 'ʿanhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from it', ur: 'سے it' } },
      { id: '20:100:4', arabic: 'فَإِنَّهُۥ', transliteration: 'fa-innahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then indeed, he', ur: 'پھر بےشک, وہ' } },
      { id: '20:100:5', arabic: 'يَحْمِلُ', transliteration: 'yaḥmilu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'will bear', ur: ' bear' } },
      { id: '20:100:6', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: '(on the) Day', ur: '(پر ) دن' } },
      { id: '20:100:7', arabic: 'ٱلْقِيَـٰمَةِ', transliteration: 'l-qiyāmati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Resurrection', ur: '(کا) Resurrection' } },
      { id: '20:100:8', arabic: 'وِزْرًا', transliteration: 'wiz\'ran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a burden', ur: 'ایک burden' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ] }
  },
  101: {
    text: 'خَٰلِدِينَ فِيهِ ۖ وَسَآءَ لَهُمْ يَوْمَ ٱلْقِيَٰمَةِ حِمْلًۭا',
    translation: {
      en: '[Abiding] eternally therein, and evil it is for them on the Day of Resurrection as a load -',
      ur: '(ایسے لوگ) ہمیشہ اس (عذاب) میں (مبتلا) رہیں گے اور یہ بوجھ قیامت کے روز ان کے لئے برا ہے'
    },
    words: [
      { id: '20:101:1', arabic: 'خَـٰلِدِينَ', transliteration: 'khālidīna', pos: ['N'], posLabel: 'N', root: 'خ ل د', meaning: { en: 'Abiding forever', ur: 'Abiding forever' } },
      { id: '20:101:2', arabic: 'فِيهِ ۖ', transliteration: 'fīhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:101:3', arabic: 'وَسَآءَ', transliteration: 'wasāa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and evil', ur: 'اور برائی' } },
      { id: '20:101:4', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '20:101:5', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: '(on the) Day', ur: '(پر ) دن' } },
      { id: '20:101:6', arabic: 'ٱلْقِيَـٰمَةِ', transliteration: 'l-qiyāmati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Resurrection', ur: '(کا)  Resurrection' } },
      { id: '20:101:7', arabic: 'حِمْلًۭا', transliteration: 'ḥim\'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) a load', ur: '(as) ایک load' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ] }
  },
  102: {
    text: 'يَوْمَ يُنفَخُ فِى ٱلصُّورِ ۚ وَنَحْشُرُ ٱلْمُجْرِمِينَ يَوْمَئِذٍۢ زُرْقًۭا',
    translation: {
      en: 'The Day the Horn will be blown. And We will gather the criminals, that Day, blue-eyed.',
      ur: 'جس روز صور پھونکا جائے گا اور ہم گنہگاروں کو اکھٹا کریں گے اور ان کی آنکھیں نیلی نیلی ہوں گی'
    },
    words: [
      { id: '20:102:1', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: '(The) Day', ur: '() دن' } },
      { id: '20:102:2', arabic: 'يُنفَخُ', transliteration: 'yunfakhu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'will be blown', ur: 'ہوگا blown' } },
      { id: '20:102:3', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:102:4', arabic: 'ٱلصُّورِ ۚ', transliteration: 'l-ṣūri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Trumpet', ur: ' Trumpet' } },
      { id: '20:102:5', arabic: 'وَنَحْشُرُ', transliteration: 'wanaḥshuru', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and We will gather', ur: 'اور ہم  gather' } },
      { id: '20:102:6', arabic: 'ٱلْمُجْرِمِينَ', transliteration: 'l-muj\'rimīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the criminals', ur: ' criminals' } },
      { id: '20:102:7', arabic: 'يَوْمَئِذٍۢ', transliteration: 'yawma-idhin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that Day', ur: 'کہ دن' } },
      { id: '20:102:8', arabic: 'زُرْقًۭا', transliteration: 'zur\'qan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'blue-eyed', ur: 'blue-eyed' } }
    ],
    structure: { relationships: [{ from: 2, to: 5, label: 'عطف' }] }
  },
  103: {
    text: 'يَتَخَٰفَتُونَ بَيْنَهُمْ إِن لَّبِثْتُمْ إِلَّا عَشْرًۭا',
    translation: {
      en: 'They will murmur among themselves, "You remained not but ten [days in the world]."',
      ur: '(تو) وہ آپس میں آہستہ آہستہ کہیں گے کہ تم (دنیا میں) صرف دس ہی دن رہے ہو'
    },
    words: [
      { id: '20:103:1', arabic: 'يَتَخَـٰفَتُونَ', transliteration: 'yatakhāfatūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They are murmuring', ur: 'وہ ہیں murmuring' } },
      { id: '20:103:2', arabic: 'بَيْنَهُمْ', transliteration: 'baynahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among themselves', ur: 'میں سے themselves' } },
      { id: '20:103:3', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '20:103:4', arabic: 'لَّبِثْتُمْ', transliteration: 'labith\'tum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you remained', ur: 'تم remained' } },
      { id: '20:103:5', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except (for)', ur: 'سوائے (کے لیے)' } },
      { id: '20:103:6', arabic: 'عَشْرًۭا', transliteration: 'ʿashran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ten', ur: 'ten' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'شرط + فعل' }] }
  },
  104: {
    text: 'نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ إِذْ يَقُولُ أَمْثَلُهُمْ طَرِيقَةً إِن لَّبِثْتُمْ إِلَّا يَوْمًۭا',
    translation: {
      en: 'We are most knowing of what they say when the best of them in manner will say, "You remained not but one day."',
      ur: 'جو باتیں یہ کریں گے ہم خوب جانتے ہیں۔ اس وقت ان میں سب سے اچھی راہ والا (یعنی عاقل وہوشمند) کہے گا کہ (نہیں بلکہ) صرف ایک ہی روز ٹھہرے ہو'
    },
    words: [
      { id: '20:104:1', arabic: 'نَّحْنُ', transliteration: 'naḥnu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We', ur: 'ہم' } },
      { id: '20:104:2', arabic: 'أَعْلَمُ', transliteration: 'aʿlamu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'know best', ur: 'جاننا best' } },
      { id: '20:104:3', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:104:4', arabic: 'يَقُولُونَ', transliteration: 'yaqūlūna', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'they will say', ur: 'وہ  کہو' } },
      { id: '20:104:5', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '20:104:6', arabic: 'يَقُولُ', transliteration: 'yaqūlu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'will say', ur: ' کہو' } },
      { id: '20:104:7', arabic: 'أَمْثَلُهُمْ', transliteration: 'amthaluhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(the) best of them', ur: '() best کا ان کو' } },
      { id: '20:104:8', arabic: 'طَرِيقَةً', transliteration: 'ṭarīqatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) conduct', ur: '(میں) conduct' } },
      { id: '20:104:9', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '20:104:10', arabic: 'لَّبِثْتُمْ', transliteration: 'labith\'tum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you remained', ur: 'تم remained' } },
      { id: '20:104:11', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except (for)', ur: 'سوائے (کے لیے)' } },
      { id: '20:104:12', arabic: 'يَوْمًۭا', transliteration: 'yawman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a day', ur: 'ایک دن' } }
    ],
    structure: { relationships: [{ from: 9, to: 10, label: 'شرط + فعل' }] }
  },
  105: {
    text: 'وَيَسْـَٔلُونَكَ عَنِ ٱلْجِبَالِ فَقُلْ يَنسِفُهَا رَبِّى نَسْفًۭا',
    translation: {
      en: 'And they ask you about the mountains, so say, "My Lord will blow them away with a blast.',
      ur: 'اور تم سے پہاڑوں کے بارے میں دریافت کرتے ہیں۔ کہہ دو کہ خدا ان کو اُڑا کر بکھیر دے گا'
    },
    words: [
      { id: '20:105:1', arabic: 'وَيَسْـَٔلُونَكَ', transliteration: 'wayasalūnaka', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And they ask you', ur: 'اور وہ پوچھنا/مانگنا تم' } },
      { id: '20:105:2', arabic: 'عَنِ', transliteration: 'ʿani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'about', ur: 'بارے میں' } },
      { id: '20:105:3', arabic: 'ٱلْجِبَالِ', transliteration: 'l-jibāli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the mountains', ur: ' mountains' } },
      { id: '20:105:4', arabic: 'فَقُلْ', transliteration: 'faqul', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so say', ur: 'پس کہو' } },
      { id: '20:105:5', arabic: 'يَنسِفُهَا', transliteration: 'yansifuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Will blast them', ur: ' blast ان کو' } },
      { id: '20:105:6', arabic: 'رَبِّى', transliteration: 'rabbī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'my Lord', ur: 'my رب' } },
      { id: '20:105:7', arabic: 'نَسْفًۭا', transliteration: 'nasfan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(into) particles', ur: '(into) particles' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ] }
  },
  106: {
    text: 'فَيَذَرُهَا قَاعًۭا صَفْصَفًۭا',
    translation: {
      en: 'And He will leave the earth a level plain;',
      ur: 'اور زمین کو ہموار میدان کر چھوڑے گا'
    },
    words: [
      { id: '20:106:1', arabic: 'فَيَذَرُهَا', transliteration: 'fayadharuhā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'Then He will leave it', ur: 'پھر وہ  leave it' } },
      { id: '20:106:2', arabic: 'قَاعًۭا', transliteration: 'qāʿan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a level', ur: 'ایک level' } },
      { id: '20:106:3', arabic: 'صَفْصَفًۭا', transliteration: 'ṣafṣafan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'plain', ur: 'plain' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ] }
  },
  107: {
    text: 'لَّا تَرَىٰ فِيهَا عِوَجًۭا وَلَآ أَمْتًۭا',
    translation: {
      en: 'You will not see therein a depression or an elevation."',
      ur: 'جس میں نہ تم کجی (اور پستی) دیکھو گے نہ ٹیلا (اور بلندی)'
    },
    words: [
      { id: '20:107:1', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '20:107:2', arabic: 'تَرَىٰ', transliteration: 'tarā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you will see', ur: 'تم  دیکھنا' } },
      { id: '20:107:3', arabic: 'فِيهَا', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:107:4', arabic: 'عِوَجًۭا', transliteration: 'ʿiwajan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any crookedness', ur: 'any crookedness' } },
      { id: '20:107:5', arabic: 'وَلَآ', transliteration: 'walā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:107:6', arabic: 'أَمْتًۭا', transliteration: 'amtan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any curve', ur: 'any curve' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' }
      ] }
  },
  108: {
    text: 'يَوْمَئِذٍۢ يَتَّبِعُونَ ٱلدَّاعِىَ لَا عِوَجَ لَهُۥ ۖ وَخَشَعَتِ ٱلْأَصْوَاتُ لِلرَّحْمَٰنِ فَلَا تَسْمَعُ إِلَّا هَمْسًۭا',
    translation: {
      en: 'That Day, everyone will follow [the call of] the Caller [with] no deviation therefrom, and [all] voices will be stilled before the Most Merciful, so you will not hear except a whisper [of footsteps].',
      ur: 'اس روز لوگ ایک پکارنے والے کے پیچھے چلیں گے اور اس کی پیروی سے انحراف نہ کرسکیں گے اور خدا کے سامنے آوازیں پست ہوجائیں گی تو تم آواز خفی کے سوا کوئی آواز نہ سنو گے'
    },
    words: [
      { id: '20:108:1', arabic: 'يَوْمَئِذٍۢ', transliteration: 'yawma-idhin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'On that Day', ur: 'پر کہ دن' } },
      { id: '20:108:2', arabic: 'يَتَّبِعُونَ', transliteration: 'yattabiʿūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they will follow', ur: 'وہ  پیروی کرنا' } },
      { id: '20:108:3', arabic: 'ٱلدَّاعِىَ', transliteration: 'l-dāʿiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the caller', ur: ' caller' } },
      { id: '20:108:4', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'no', ur: 'نہیں' } },
      { id: '20:108:5', arabic: 'عِوَجَ', transliteration: 'ʿiwaja', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'deviation', ur: 'deviation' } },
      { id: '20:108:6', arabic: 'لَهُۥ ۖ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from it', ur: 'سے it' } },
      { id: '20:108:7', arabic: 'وَخَشَعَتِ', transliteration: 'wakhashaʿati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And (will be) humbled', ur: 'اور (ہوگا) humbled' } },
      { id: '20:108:8', arabic: 'ٱلْأَصْوَاتُ', transliteration: 'l-aṣwātu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the voices', ur: ' voices' } },
      { id: '20:108:9', arabic: 'لِلرَّحْمَـٰنِ', transliteration: 'lilrraḥmāni', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for the Most Gracious', ur: 'کے لیے  بہت رحم والا' } },
      { id: '20:108:10', arabic: 'فَلَا', transliteration: 'falā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so not', ur: 'پس نہیں' } },
      { id: '20:108:11', arabic: 'تَسْمَعُ', transliteration: 'tasmaʿu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you will hear', ur: 'تم  سننا' } },
      { id: '20:108:12', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '20:108:13', arabic: 'هَمْسًۭا', transliteration: 'hamsan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a faint sound', ur: 'ایک faint sound' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' }
      ] }
  },
  109: {
    text: 'يَوْمَئِذٍۢ لَّا تَنفَعُ ٱلشَّفَٰعَةُ إِلَّا مَنْ أَذِنَ لَهُ ٱلرَّحْمَٰنُ وَرَضِىَ لَهُۥ قَوْلًۭا',
    translation: {
      en: 'That Day, no intercession will benefit except [that of] one to whom the Most Merciful has given permission and has accepted his word.',
      ur: 'اس روز (کسی کی) سفارش کچھ فائدہ نہ دے گی مگر اس شخص کی جسے خدا اجازت دے اور اس کی بات کو پسند فرمائے'
    },
    words: [
      { id: '20:109:1', arabic: 'يَوْمَئِذٍۢ', transliteration: 'yawma-idhin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(On) that Day', ur: '(پر) کہ دن' } },
      { id: '20:109:2', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '20:109:3', arabic: 'تَنفَعُ', transliteration: 'tanfaʿu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'will benefit', ur: ' benefit' } },
      { id: '20:109:4', arabic: 'ٱلشَّفَـٰعَةُ', transliteration: 'l-shafāʿatu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the intercession', ur: ' intercession' } },
      { id: '20:109:5', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '20:109:6', arabic: 'مَنْ', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(to) whom', ur: '(کو/تک) whom' } },
      { id: '20:109:7', arabic: 'أَذِنَ', transliteration: 'adhina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'has given permission', ur: 'رکھتا ہے given permission' } },
      { id: '20:109:8', arabic: 'لَهُ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[to him]', ur: '[کو/تک him]' } },
      { id: '20:109:9', arabic: 'ٱلرَّحْمَـٰنُ', transliteration: 'l-raḥmānu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Most Gracious', ur: ' بہت رحم والا' } },
      { id: '20:109:10', arabic: 'وَرَضِىَ', transliteration: 'waraḍiya', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and He has accepted', ur: 'اور وہ رکھتا ہے accepted' } },
      { id: '20:109:11', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for him', ur: 'کے لیے him' } },
      { id: '20:109:12', arabic: 'قَوْلًۭا', transliteration: 'qawlan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a word', ur: 'ایک word' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' }
      ] }
  },
  110: {
    text: 'يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِهِۦ عِلْمًۭا',
    translation: {
      en: 'Allah knows what is [presently] before them and what will be after them, but they do not encompass it in knowledge.',
      ur: 'جو کچھ ان کے آگے ہے اور کچھ ان کے پیچھے ہے وہ اس کو جانتا ہے اور وہ (اپنے) علم سے خدا (کے علم) پر احاطہ نہیں کرسکتے'
    },
    words: [
      { id: '20:110:1', arabic: 'يَعْلَمُ', transliteration: 'yaʿlamu', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'He knows', ur: 'وہ knows' } },
      { id: '20:110:2', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:110:3', arabic: 'بَيْنَ', transliteration: 'bayna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) before them', ur: '(ہے) پہلے ان کو' } },
      { id: '20:110:4', arabic: 'أَيْدِيهِمْ', transliteration: 'aydīhim', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(is) before them', ur: '(ہے) پہلے ان کو' } },
      { id: '20:110:5', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and what', ur: 'اور کیا/جو' } },
      { id: '20:110:6', arabic: 'خَلْفَهُمْ', transliteration: 'khalfahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) behind them', ur: '(ہے) پیچھے ان کو' } },
      { id: '20:110:7', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'while not', ur: 'جبکہ نہیں' } },
      { id: '20:110:8', arabic: 'يُحِيطُونَ', transliteration: 'yuḥīṭūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they encompass', ur: 'وہ encompass' } },
      { id: '20:110:9', arabic: 'بِهِۦ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'it', ur: 'it' } },
      { id: '20:110:10', arabic: 'عِلْمًۭا', transliteration: 'ʿil\'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) knowledge', ur: '(میں) علم' } }
    ],
    structure: { relationships: [
        { from: 7, to: 8, label: 'نفی + فعل' }
      ] }
  },
  111: {
    text: '۞ وَعَنَتِ ٱلْوُجُوهُ لِلْحَىِّ ٱلْقَيُّومِ ۖ وَقَدْ خَابَ مَنْ حَمَلَ ظُلْمًۭا',
    translation: {
      en: 'And [all] faces will be humbled before the Ever-Living, the Sustainer of existence. And he will have failed who carries injustice.',
      ur: 'اور اس زندہ و قائم کے رو برو منہ نیچے ہوجائیں گے۔ اور جس نے ظلم کا بوجھ اٹھایا وہ نامراد رہا'
    },
    words: [
      { id: '20:111:1', arabic: '۞ وَعَنَتِ', transliteration: 'waʿanati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And (will be) humbled', ur: 'اور (ہوگا) humbled' } },
      { id: '20:111:2', arabic: 'ٱلْوُجُوهُ', transliteration: 'l-wujūhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the faces', ur: ' faces' } },
      { id: '20:111:3', arabic: 'لِلْحَىِّ', transliteration: 'lil\'ḥayyi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'before the Ever-Living', ur: 'پہلے  Ever-Living' } },
      { id: '20:111:4', arabic: 'ٱلْقَيُّومِ ۖ', transliteration: 'l-qayūmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Self-Subsisting', ur: ' Self-Subsisting' } },
      { id: '20:111:5', arabic: 'وَقَدْ', transliteration: 'waqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And verily', ur: 'اور verily' } },
      { id: '20:111:6', arabic: 'خَابَ', transliteration: 'khāba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will have failed', ur: ' رکھتے ہو failed' } },
      { id: '20:111:7', arabic: 'مَنْ', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(he) who', ur: '(وہ) جو' } },
      { id: '20:111:8', arabic: 'حَمَلَ', transliteration: 'ḥamala', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'carried', ur: 'carried' } },
      { id: '20:111:9', arabic: 'ظُلْمًۭا', transliteration: 'ẓul\'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'wrongdoing', ur: 'wrongdoing' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' }
      ] }
  },
  112: {
    text: 'وَمَن يَعْمَلْ مِنَ ٱلصَّٰلِحَٰتِ وَهُوَ مُؤْمِنٌۭ فَلَا يَخَافُ ظُلْمًۭا وَلَا هَضْمًۭا',
    translation: {
      en: 'But he who does of righteous deeds while he is a believer - he will neither fear injustice nor deprivation.',
      ur: 'اور جو نیک کام کرے گا اور مومن بھی ہوگا تو اس کو نہ ظلم کا خوف ہوگا اور نہ نقصان کا'
    },
    words: [
      { id: '20:112:1', arabic: 'وَمَن', transliteration: 'waman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But (he) who', ur: 'لیکن (وہ) جو' } },
      { id: '20:112:2', arabic: 'يَعْمَلْ', transliteration: 'yaʿmal', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'does', ur: 'does' } },
      { id: '20:112:3', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:112:4', arabic: 'ٱلصَّـٰلِحَـٰتِ', transliteration: 'l-ṣāliḥāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the righteous deeds', ur: ' نیک اعمال' } },
      { id: '20:112:5', arabic: 'وَهُوَ', transliteration: 'wahuwa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while he', ur: 'جبکہ وہ' } },
      { id: '20:112:6', arabic: 'مُؤْمِنٌۭ', transliteration: 'mu\'minun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) a believer', ur: '(ہے) ایک believer' } },
      { id: '20:112:7', arabic: 'فَلَا', transliteration: 'falā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then not', ur: 'پھر نہیں' } },
      { id: '20:112:8', arabic: 'يَخَافُ', transliteration: 'yakhāfu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'he will fear', ur: 'وہ  ڈرنا' } },
      { id: '20:112:9', arabic: 'ظُلْمًۭا', transliteration: 'ẓul\'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'injustice', ur: 'injustice' } },
      { id: '20:112:10', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:112:11', arabic: 'هَضْمًۭا', transliteration: 'haḍman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'deprivation', ur: 'deprivation' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' }
      ] }
  },
  113: {
    text: 'وَكَذَٰلِكَ أَنزَلْنَٰهُ قُرْءَانًا عَرَبِيًّۭا وَصَرَّفْنَا فِيهِ مِنَ ٱلْوَعِيدِ لَعَلَّهُمْ يَتَّقُونَ أَوْ يُحْدِثُ لَهُمْ ذِكْرًۭا',
    translation: {
      en: 'And thus We have sent it down as an Arabic Qur\'an and have diversified therein the warnings that perhaps they will avoid [sin] or it would cause them remembrance.',
      ur: 'اور ہم نے اس کو اسی طرح کا قرآن عربی نازل کیا ہے اور اس میں طرح طرح کے ڈراوے بیان کردیئے ہیں تاکہ لوگ پرہیزگار بنیں یا خدا ان کے لئے نصیحت پیدا کردے'
    },
    words: [
      { id: '20:113:1', arabic: 'وَكَذَٰلِكَ', transliteration: 'wakadhālika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And thus', ur: 'اور thus' } },
      { id: '20:113:2', arabic: 'أَنزَلْنَـٰهُ', transliteration: 'anzalnāhu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We have sent it down', ur: 'ہم رکھتے ہو بھیجا it down' } },
      { id: '20:113:3', arabic: 'قُرْءَانًا', transliteration: 'qur\'ānan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Quran', ur: '() Quran' } },
      { id: '20:113:4', arabic: 'عَرَبِيًّۭا', transliteration: 'ʿarabiyyan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) Arabic', ur: '(میں) Arabic' } },
      { id: '20:113:5', arabic: 'وَصَرَّفْنَا', transliteration: 'waṣarrafnā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and We have explained', ur: 'اور ہم رکھتے ہو explained' } },
      { id: '20:113:6', arabic: 'فِيهِ', transliteration: 'fīhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:113:7', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:113:8', arabic: 'ٱلْوَعِيدِ', transliteration: 'l-waʿīdi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the warnings', ur: ' warnings' } },
      { id: '20:113:9', arabic: 'لَعَلَّهُمْ', transliteration: 'laʿallahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that they may', ur: 'کہ وہ may' } },
      { id: '20:113:10', arabic: 'يَتَّقُونَ', transliteration: 'yattaqūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'fear', ur: 'ڈرنا' } },
      { id: '20:113:11', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '20:113:12', arabic: 'يُحْدِثُ', transliteration: 'yuḥ\'dithu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'it may cause', ur: 'it may راہ' } },
      { id: '20:113:13', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[for] them', ur: '[کے لیے] ان کو' } },
      { id: '20:113:14', arabic: 'ذِكْرًۭا', transliteration: 'dhik\'ran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'remembrance', ur: 'remembrance' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' }
      ] }
  },
  114: {
    text: 'فَتَعَٰلَى ٱللَّهُ ٱلْمَلِكُ ٱلْحَقُّ ۗ وَلَا تَعْجَلْ بِٱلْقُرْءَانِ مِن قَبْلِ أَن يُقْضَىٰٓ إِلَيْكَ وَحْيُهُۥ ۖ وَقُل رَّبِّ زِدْنِى عِلْمًۭا',
    translation: {
      en: 'So high [above all] is Allah, the Sovereign, the Truth. And, [O Muhammad], do not hasten with [recitation of] the Qur\'an before its revelation is completed to you, and say, "My Lord, increase me in knowledge."',
      ur: 'تو خدا جو سچا بادشاہ ہے عالی قدر ہے۔ اور قرآن کی وحی جو تمہاری طرف بھیجی جاتی ہے اس کے پورا ہونے سے پہلے قرآن کے (پڑھنے کے) لئے جلدی نہ کیا کرو اور دعا کرو کہ میرے پروردگار مجھے اور زیادہ علم دے'
    },
    words: [
      { id: '20:114:1', arabic: 'فَتَعَـٰلَى', transliteration: 'fataʿālā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So high (above all)', ur: 'پس high (above سب)' } },
      { id: '20:114:2', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Allah', ur: '(ہے) اللہ' } },
      { id: '20:114:3', arabic: 'ٱلْمَلِكُ', transliteration: 'l-maliku', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the King', ur: ' بادشاہ' } },
      { id: '20:114:4', arabic: 'ٱلْحَقُّ ۗ', transliteration: 'l-ḥaqu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the True', ur: ' True' } },
      { id: '20:114:5', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And (do) not', ur: 'اور (کرنا) نہیں' } },
      { id: '20:114:6', arabic: 'تَعْجَلْ', transliteration: 'taʿjal', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'hasten', ur: 'hasten' } },
      { id: '20:114:7', arabic: 'بِٱلْقُرْءَانِ', transliteration: 'bil-qur\'āni', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with the Quran', ur: 'ساتھ  Quran' } },
      { id: '20:114:8', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:114:9', arabic: 'قَبْلِ', transliteration: 'qabli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:114:10', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[that]', ur: '[کہ]' } },
      { id: '20:114:11', arabic: 'يُقْضَىٰٓ', transliteration: 'yuq\'ḍā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'is completed', ur: 'ہے completed' } },
      { id: '20:114:12', arabic: 'إِلَيْكَ', transliteration: 'ilayka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '20:114:13', arabic: 'وَحْيُهُۥ ۖ', transliteration: 'waḥyuhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'its revelation', ur: 'its revelation' } },
      { id: '20:114:14', arabic: 'وَقُل', transliteration: 'waqul', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and say', ur: 'اور کہو' } },
      { id: '20:114:15', arabic: 'رَّبِّ', transliteration: 'rabbi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My Lord', ur: 'My رب' } },
      { id: '20:114:16', arabic: 'زِدْنِى', transliteration: 'zid\'nī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Increase me', ur: 'Increase me' } },
      { id: '20:114:17', arabic: 'عِلْمًۭا', transliteration: 'ʿil\'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) knowledge', ur: '(میں) علم' } }
    ],
    structure: { relationships: [{ from: 8, to: 9, label: 'جار + مجرور' }] }
  },
  115: {
    text: 'وَلَقَدْ عَهِدْنَآ إِلَىٰٓ ءَادَمَ مِن قَبْلُ فَنَسِىَ وَلَمْ نَجِدْ لَهُۥ عَزْمًۭا',
    translation: {
      en: 'And We had already taken a promise from Adam before, but he forgot; and We found not in him determination.',
      ur: 'اور ہم نے پہلے آدم سے عہد لیا تھا مگر وہ (اسے) بھول گئے اور ہم نے ان میں صبر وثبات نہ دیکھا'
    },
    words: [
      { id: '20:115:1', arabic: 'وَلَقَدْ', transliteration: 'walaqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And verily', ur: 'اور verily' } },
      { id: '20:115:2', arabic: 'عَهِدْنَآ', transliteration: 'ʿahid\'nā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We made a covenant', ur: 'ہم بنایا ایک عہد' } },
      { id: '20:115:3', arabic: 'إِلَىٰٓ', transliteration: 'ilā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '20:115:4', arabic: 'ءَادَمَ', transliteration: 'ādama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Adam', ur: 'Adam' } },
      { id: '20:115:5', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:115:6', arabic: 'قَبْلُ', transliteration: 'qablu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:115:7', arabic: 'فَنَسِىَ', transliteration: 'fanasiya', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'but he forgot', ur: 'لیکن وہ forgot' } },
      { id: '20:115:8', arabic: 'وَلَمْ', transliteration: 'walam', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:115:9', arabic: 'نَجِدْ', transliteration: 'najid', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We found', ur: 'ہم found' } },
      { id: '20:115:10', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in him', ur: 'میں him' } },
      { id: '20:115:11', arabic: 'عَزْمًۭا', transliteration: 'ʿazman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'determination', ur: 'determination' } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }] }
  },
  116: {
    text: 'وَإِذْ قُلْنَا لِلْمَلَٰٓئِكَةِ ٱسْجُدُوا۟ لِءَادَمَ فَسَجَدُوٓا۟ إِلَّآ إِبْلِيسَ أَبَىٰ',
    translation: {
      en: 'And [mention] when We said to the angels, "Prostrate to Adam," and they prostrated, except Iblees; he refused.',
      ur: 'اور جب ہم نے فرشتوں سے کہا کہ آدم کے آگے سجدہ کرو تو سب سجدے میں گر پڑے مگر ابلیس نے انکار کیا'
    },
    words: [
      { id: '20:116:1', arabic: 'وَإِذْ', transliteration: 'wa-idh', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And when', ur: 'اور جب' } },
      { id: '20:116:2', arabic: 'قُلْنَا', transliteration: 'qul\'nā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We said', ur: 'ہم کہا' } },
      { id: '20:116:3', arabic: 'لِلْمَلَـٰٓئِكَةِ', transliteration: 'lil\'malāikati', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to the Angels', ur: 'کو/تک  فرشتے' } },
      { id: '20:116:4', arabic: 'ٱسْجُدُوا۟', transliteration: 'us\'judū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Prostrate', ur: 'Prostrate' } },
      { id: '20:116:5', arabic: 'لِـَٔادَمَ', transliteration: 'liādama', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to Adam', ur: 'کو/تک Adam' } },
      { id: '20:116:6', arabic: 'فَسَجَدُوٓا۟', transliteration: 'fasajadū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then they prostrated', ur: 'پھر وہ prostrated' } },
      { id: '20:116:7', arabic: 'إِلَّآ', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '20:116:8', arabic: 'إِبْلِيسَ', transliteration: 'ib\'līsa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Iblis', ur: 'Iblis' } },
      { id: '20:116:9', arabic: 'أَبَىٰ', transliteration: 'abā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he refused', ur: 'وہ refused' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' }
      ] }
  },
  117: {
    text: 'فَقُلْنَا يَٰٓـَٔادَمُ إِنَّ هَٰذَا عَدُوٌّۭ لَّكَ وَلِزَوْجِكَ فَلَا يُخْرِجَنَّكُمَا مِنَ ٱلْجَنَّةِ فَتَشْقَىٰٓ',
    translation: {
      en: 'So We said, "O Adam, indeed this is an enemy to you and to your wife. Then let him not remove you from Paradise so you would suffer.',
      ur: 'ہم نے فرمایا کہ آدم یہ تمہارا اور تمہاری بیوی کا دشمن ہے تو یہ کہیں تم دونوں کو بہشت سے نکلوا نہ دے۔ پھر تم تکلیف میں پڑجاؤ'
    },
    words: [
      { id: '20:117:1', arabic: 'فَقُلْنَا', transliteration: 'faqul\'nā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then We said', ur: 'پھر ہم کہا' } },
      { id: '20:117:2', arabic: 'يَـٰٓـَٔادَمُ', transliteration: 'yāādamu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'O Adam', ur: 'اے Adam' } },
      { id: '20:117:3', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '20:117:4', arabic: 'هَـٰذَا', transliteration: 'hādhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'this', ur: 'یہ' } },
      { id: '20:117:5', arabic: 'عَدُوٌّۭ', transliteration: 'ʿaduwwun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) an enemy', ur: '(ہے) ایک دشمن' } },
      { id: '20:117:6', arabic: 'لَّكَ', transliteration: 'laka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '20:117:7', arabic: 'وَلِزَوْجِكَ', transliteration: 'walizawjika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and to your wife', ur: 'اور کو/تک تمہارا wife' } },
      { id: '20:117:8', arabic: 'فَلَا', transliteration: 'falā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So not', ur: 'پس نہیں' } },
      { id: '20:117:9', arabic: 'يُخْرِجَنَّكُمَا', transliteration: 'yukh\'rijannakumā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(let) him drive you both', ur: '(let) him drive تم both' } },
      { id: '20:117:10', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:117:11', arabic: 'ٱلْجَنَّةِ', transliteration: 'l-janati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Paradise', ur: 'جنت' } },
      { id: '20:117:12', arabic: 'فَتَشْقَىٰٓ', transliteration: 'fatashqā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'so (that) you would suffer', ur: 'پس (کہ) تم  suffer' } }
    ],
    structure: { relationships: [
        { from: 2, to: 12, label: 'عطف' }
      ] }
  },
  118: {
    text: 'إِنَّ لَكَ أَلَّا تَجُوعَ فِيهَا وَلَا تَعْرَىٰ',
    translation: {
      en: 'Indeed, it is [promised] for you not to be hungry therein or be unclothed.',
      ur: 'یہاں تم کو یہ (آسائش) ہوگی کہ نہ بھوکے رہو نہ ننگے'
    },
    words: [
      { id: '20:118:1', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '20:118:2', arabic: 'لَكَ', transliteration: 'laka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '20:118:3', arabic: 'أَلَّا', transliteration: 'allā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that not', ur: 'کہ نہیں' } },
      { id: '20:118:4', arabic: 'تَجُوعَ', transliteration: 'tajūʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you will be hungry', ur: 'تم ہوگا hungry' } },
      { id: '20:118:5', arabic: 'فِيهَا', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'therein', ur: 'therein' } },
      { id: '20:118:6', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:118:7', arabic: 'تَعْرَىٰ', transliteration: 'taʿrā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you will be unclothed', ur: 'تم ہوگا unclothed' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' }
      ] }
  },
  119: {
    text: 'وَأَنَّكَ لَا تَظْمَؤُا۟ فِيهَا وَلَا تَضْحَىٰ',
    translation: {
      en: 'And indeed, you will not be thirsty therein or be hot from the sun."',
      ur: 'اور یہ کہ نہ پیاسے رہو اور نہ دھوپ کھاؤ'
    },
    words: [
      { id: '20:119:1', arabic: 'وَأَنَّكَ', transliteration: 'wa-annaka', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And that you', ur: 'اور کہ تم' } },
      { id: '20:119:2', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '20:119:3', arabic: 'تَظْمَؤُا۟', transliteration: 'taẓma-u', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will suffer from thirst', ur: ' suffer سے thirst' } },
      { id: '20:119:4', arabic: 'فِيهَا', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'therein', ur: 'therein' } },
      { id: '20:119:5', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:119:6', arabic: 'تَضْحَىٰ', transliteration: 'taḍḥā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'exposed to the sun\'s heat', ur: 'exposed to the sun\'s heat' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' }
      ] }
  },
  120: {
    text: 'فَوَسْوَسَ إِلَيْهِ ٱلشَّيْطَٰنُ قَالَ يَٰٓـَٔادَمُ هَلْ أَدُلُّكَ عَلَىٰ شَجَرَةِ ٱلْخُلْدِ وَمُلْكٍۢ لَّا يَبْلَىٰ',
    translation: {
      en: 'Then Satan whispered to him; he said, "O Adam, shall I direct you to the tree of eternity and possession that will not deteriorate?"',
      ur: 'تو شیطان نے ان کے دل میں وسوسہ ڈالا۔ (اور) کہا کہ آدم بھلا میں تم کو (ایسا) درخت بتاؤں (جو) ہمیشہ کی زندگی کا (ثمرہ دے) اور (ایسی) بادشاہت کہ کبھی زائل نہ ہو'
    },
    words: [
      { id: '20:120:1', arabic: 'فَوَسْوَسَ', transliteration: 'fawaswasa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then whispered', ur: 'پھر whispered' } },
      { id: '20:120:2', arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to him', ur: 'کو/تک him' } },
      { id: '20:120:3', arabic: 'ٱلشَّيْطَـٰنُ', transliteration: 'l-shayṭānu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Shaitaan', ur: 'Shaitaan' } },
      { id: '20:120:4', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'he said', ur: 'وہ کہا' } },
      { id: '20:120:5', arabic: 'يَـٰٓـَٔادَمُ', transliteration: 'yāādamu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'O Adam', ur: 'اے Adam' } },
      { id: '20:120:6', arabic: 'هَلْ', transliteration: 'hal', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Shall', ur: '' } },
      { id: '20:120:7', arabic: 'أَدُلُّكَ', transliteration: 'adulluka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'I direct you', ur: 'میں direct تم' } },
      { id: '20:120:8', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '20:120:9', arabic: 'شَجَرَةِ', transliteration: 'shajarati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) tree', ur: '() tree' } },
      { id: '20:120:10', arabic: 'ٱلْخُلْدِ', transliteration: 'l-khul\'di', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Eternity', ur: '(کا)  Eternity' } },
      { id: '20:120:11', arabic: 'وَمُلْكٍۢ', transliteration: 'wamul\'kin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and a kingdom', ur: 'اور ایک kingdom' } },
      { id: '20:120:12', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '20:120:13', arabic: 'يَبْلَىٰ', transliteration: 'yablā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(that will) deteriorate', ur: '(کہ ) deteriorate' } }
    ],
    structure: { relationships: [{ from: 8, to: 9, label: 'جار + مجرور' }] }
  },
  121: {
    text: 'فَأَكَلَا مِنْهَا فَبَدَتْ لَهُمَا سَوْءَٰتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ ٱلْجَنَّةِ ۚ وَعَصَىٰٓ ءَادَمُ رَبَّهُۥ فَغَوَىٰ',
    translation: {
      en: 'And Adam and his wife ate of it, and their private parts became apparent to them, and they began to fasten over themselves from the leaves of Paradise. And Adam disobeyed his Lord and erred.',
      ur: 'تو دونوں نے اس درخت کا پھل کھا لیا تو ان پر ان کی شرمگاہیں ظاہر ہوگئیں اور وہ اپنے (بدنوں) پر بہشت کے پتّے چپکانے لگے۔ اور آدم نے اپنے پروردگار کے حکم خلاف کیا تو (وہ اپنے مطلوب سے) بےراہ ہو گئے'
    },
    words: [
      { id: '20:121:1', arabic: 'فَأَكَلَا', transliteration: 'fa-akalā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'Then they both ate', ur: 'پھر وہ both ate' } },
      { id: '20:121:2', arabic: 'مِنْهَا', transliteration: 'min\'hā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from it', ur: 'سے it' } },
      { id: '20:121:3', arabic: 'فَبَدَتْ', transliteration: 'fabadat', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so became apparent', ur: 'پس became apparent' } },
      { id: '20:121:4', arabic: 'لَهُمَا', transliteration: 'lahumā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '20:121:5', arabic: 'سَوْءَٰتُهُمَا', transliteration: 'sawātuhumā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their shame', ur: 'ان کا shame' } },
      { id: '20:121:6', arabic: 'وَطَفِقَا', transliteration: 'waṭafiqā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they began', ur: 'اور وہ began' } },
      { id: '20:121:7', arabic: 'يَخْصِفَانِ', transliteration: 'yakhṣifāni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) fasten', ur: '(کو/تک) fasten' } },
      { id: '20:121:8', arabic: 'عَلَيْهِمَا', transliteration: 'ʿalayhimā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'on themselves', ur: 'پر themselves' } },
      { id: '20:121:9', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:121:10', arabic: 'وَرَقِ', transliteration: 'waraqi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '(the) leaves', ur: '() leaves' } },
      { id: '20:121:11', arabic: 'ٱلْجَنَّةِ ۚ', transliteration: 'l-janati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Paradise', ur: '(کا) جنت' } },
      { id: '20:121:12', arabic: 'وَعَصَىٰٓ', transliteration: 'waʿaṣā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Adam disobeyed', ur: 'اور Adam disobeyed' } },
      { id: '20:121:13', arabic: 'ءَادَمُ', transliteration: 'ādamu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And Adam disobeyed', ur: 'اور Adam disobeyed' } },
      { id: '20:121:14', arabic: 'رَبَّهُۥ', transliteration: 'rabbahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his Lord', ur: 'اس کا رب' } },
      { id: '20:121:15', arabic: 'فَغَوَىٰ', transliteration: 'faghawā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and erred', ur: 'اور erred' } }
    ],
    structure: { relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' }
      ] }
  },
  122: {
    text: 'ثُمَّ ٱجْتَبَٰهُ رَبُّهُۥ فَتَابَ عَلَيْهِ وَهَدَىٰ',
    translation: {
      en: 'Then his Lord chose him and turned to him in forgiveness and guided [him].',
      ur: 'پھر ان کے پروردگار نے ان کو نوازا تو ان پر مہربانی سے توجہ فرمائی اور سیدھی راہ بتائی'
    },
    words: [
      { id: '20:122:1', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '20:122:2', arabic: 'ٱجْتَبَـٰهُ', transliteration: 'ij\'tabāhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'chose him', ur: 'chose him' } },
      { id: '20:122:3', arabic: 'رَبُّهُۥ', transliteration: 'rabbuhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his Lord', ur: 'اس کا رب' } },
      { id: '20:122:4', arabic: 'فَتَابَ', transliteration: 'fatāba', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and turned', ur: 'اور پھیرا' } },
      { id: '20:122:5', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to him', ur: 'کو/تک him' } },
      { id: '20:122:6', arabic: 'وَهَدَىٰ', transliteration: 'wahadā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and guided (him)', ur: 'اور ہدایت دی (him)' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' }
      ] }
  },
  123: {
    text: 'قَالَ ٱهْبِطَا مِنْهَا جَمِيعًۢا ۖ بَعْضُكُمْ لِبَعْضٍ عَدُوٌّۭ ۖ فَإِمَّا يَأْتِيَنَّكُم مِّنِّى هُدًۭى فَمَنِ ٱتَّبَعَ هُدَاىَ فَلَا يَضِلُّ وَلَا يَشْقَىٰ',
    translation: {
      en: '[Allah] said, "Descend from Paradise - all, [your descendants] being enemies to one another. And if there should come to you guidance from Me - then whoever follows My guidance will neither go astray [in the world] nor suffer [in the Hereafter].',
      ur: 'فرمایا کہ تم دونوں یہاں سے نیچے اتر جاؤ۔ تم میں بعض بعض کے دشمن (ہوں گے) پھر اگر میری طرف سے تمہارے پاس ہدایت آئے تو جو شخص میری ہدایت کی پیروی کرے گا وہ نہ گمراہ ہوگا اور نہ تکلیف میں پڑے گا'
    },
    words: [
      { id: '20:123:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He said', ur: 'وہ کہا' } },
      { id: '20:123:2', arabic: 'ٱهْبِطَا', transliteration: 'ih\'biṭā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Go down', ur: 'جانا down' } },
      { id: '20:123:3', arabic: 'مِنْهَا', transliteration: 'min\'hā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from it', ur: 'سے it' } },
      { id: '20:123:4', arabic: 'جَمِيعًۢا ۖ', transliteration: 'jamīʿan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'all', ur: 'سب' } },
      { id: '20:123:5', arabic: 'بَعْضُكُمْ', transliteration: 'baʿḍukum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'some of you', ur: 'کچھ کا تم' } },
      { id: '20:123:6', arabic: 'لِبَعْضٍ', transliteration: 'libaʿḍin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to others', ur: 'کو/تک others' } },
      { id: '20:123:7', arabic: 'عَدُوٌّۭ ۖ', transliteration: 'ʿaduwwun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) enemy', ur: '(as) دشمن' } },
      { id: '20:123:8', arabic: 'فَإِمَّا', transliteration: 'fa-immā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then if', ur: 'پھر اگر' } },
      { id: '20:123:9', arabic: 'يَأْتِيَنَّكُم', transliteration: 'yatiyannakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'comes to you', ur: 'comes کو/تک تم' } },
      { id: '20:123:10', arabic: 'مِّنِّى', transliteration: 'minnī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from Me', ur: 'سے Me' } },
      { id: '20:123:11', arabic: 'هُدًۭى', transliteration: 'hudan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'guidance', ur: 'guidance' } },
      { id: '20:123:12', arabic: 'فَمَنِ', transliteration: 'famani', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then whoever', ur: 'پھر whoever' } },
      { id: '20:123:13', arabic: 'ٱتَّبَعَ', transliteration: 'ittabaʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'follows', ur: 'follows' } },
      { id: '20:123:14', arabic: 'هُدَاىَ', transliteration: 'hudāya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My guidance', ur: 'My guidance' } },
      { id: '20:123:15', arabic: 'فَلَا', transliteration: 'falā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then not', ur: 'پھر نہیں' } },
      { id: '20:123:16', arabic: 'يَضِلُّ', transliteration: 'yaḍillu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'he will go astray', ur: 'وہ  جانا astray' } },
      { id: '20:123:17', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:123:18', arabic: 'يَشْقَىٰ', transliteration: 'yashqā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'suffer', ur: 'suffer' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' },
        { from: 14, to: 15, label: 'تعلق' },
        { from: 15, to: 16, label: 'تعلق' },
        { from: 16, to: 17, label: 'تعلق' },
        { from: 17, to: 18, label: 'تعلق' }
      ] }
  },
  124: {
    text: 'وَمَنْ أَعْرَضَ عَن ذِكْرِى فَإِنَّ لَهُۥ مَعِيشَةًۭ ضَنكًۭا وَنَحْشُرُهُۥ يَوْمَ ٱلْقِيَٰمَةِ أَعْمَىٰ',
    translation: {
      en: 'And whoever turns away from My remembrance - indeed, he will have a depressed life, and We will gather him on the Day of Resurrection blind."',
      ur: 'اور جو میری نصیحت سے منہ پھیرے گا اس کی زندگی تنگ ہوجائے گی اور قیامت کو ہم اسے اندھا کرکے اٹھائیں گے'
    },
    words: [
      { id: '20:124:1', arabic: 'وَمَنْ', transliteration: 'waman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And whoever', ur: 'اور whoever' } },
      { id: '20:124:2', arabic: 'أَعْرَضَ', transliteration: 'aʿraḍa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'turns away', ur: 'turns away' } },
      { id: '20:124:3', arabic: 'عَن', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:124:4', arabic: 'ذِكْرِى', transliteration: 'dhik\'rī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My remembrance', ur: 'My remembrance' } },
      { id: '20:124:5', arabic: 'فَإِنَّ', transliteration: 'fa-inna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then indeed', ur: 'پھر بےشک' } },
      { id: '20:124:6', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for him', ur: 'کے لیے him' } },
      { id: '20:124:7', arabic: 'مَعِيشَةًۭ', transliteration: 'maʿīshatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) a life', ur: '(ہے) ایک زندگی' } },
      { id: '20:124:8', arabic: 'ضَنكًۭا', transliteration: 'ḍankan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'straitened', ur: 'straitened' } },
      { id: '20:124:9', arabic: 'وَنَحْشُرُهُۥ', transliteration: 'wanaḥshuruhu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and We will gather him', ur: 'اور ہم  gather him' } },
      { id: '20:124:10', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: '(on the) Day', ur: '(پر ) دن' } },
      { id: '20:124:11', arabic: 'ٱلْقِيَـٰمَةِ', transliteration: 'l-qiyāmati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Resurrection', ur: '(کا)  Resurrection' } },
      { id: '20:124:12', arabic: 'أَعْمَىٰ', transliteration: 'aʿmā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'blind', ur: 'blind' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }] }
  },
  125: {
    text: 'قَالَ رَبِّ لِمَ حَشَرْتَنِىٓ أَعْمَىٰ وَقَدْ كُنتُ بَصِيرًۭا',
    translation: {
      en: 'He will say, "My Lord, why have you raised me blind while I was [once] seeing?"',
      ur: 'وہ کہے گا میرے پروردگار تو نے مجھے اندھا کرکے کیوں اٹھایا میں تو دیکھتا بھالتا تھا'
    },
    words: [
      { id: '20:125:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He will say', ur: 'وہ  کہو' } },
      { id: '20:125:2', arabic: 'رَبِّ', transliteration: 'rabbi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'My Lord', ur: 'My رب' } },
      { id: '20:125:3', arabic: 'لِمَ', transliteration: 'lima', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'Why', ur: 'کیوں' } },
      { id: '20:125:4', arabic: 'حَشَرْتَنِىٓ', transliteration: 'ḥashartanī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'You raised me', ur: 'تم raised me' } },
      { id: '20:125:5', arabic: 'أَعْمَىٰ', transliteration: 'aʿmā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'blind', ur: 'blind' } },
      { id: '20:125:6', arabic: 'وَقَدْ', transliteration: 'waqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while [verily]', ur: 'جبکہ [verily]' } },
      { id: '20:125:7', arabic: 'كُنتُ', transliteration: 'kuntu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'I had', ur: 'میں رکھتا تھا' } },
      { id: '20:125:8', arabic: 'بَصِيرًۭا', transliteration: 'baṣīran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'sight', ur: 'sight' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ] }
  },
  126: {
    text: 'قَالَ كَذَٰلِكَ أَتَتْكَ ءَايَٰتُنَا فَنَسِيتَهَا ۖ وَكَذَٰلِكَ ٱلْيَوْمَ تُنسَىٰ',
    translation: {
      en: '[Allah] will say, "Thus did Our signs come to you, and you forgot them; and thus will you this Day be forgotten."',
      ur: 'خدا فرمائے گا کہ ایسا ہی (چاہیئے تھا) تیرے پاس میری آیتیں آئیں تو تونے ان کو بھلا دیا۔ اسی طرح آج ہم تجھ کو بھلا دیں گے'
    },
    words: [
      { id: '20:126:1', arabic: 'قَالَ', transliteration: 'qāla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'He will say', ur: 'وہ  کہو' } },
      { id: '20:126:2', arabic: 'كَذَٰلِكَ', transliteration: 'kadhālika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Thus', ur: 'Thus' } },
      { id: '20:126:3', arabic: 'أَتَتْكَ', transliteration: 'atatka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'came to you', ur: 'آیا کو/تک تم' } },
      { id: '20:126:4', arabic: 'ءَايَـٰتُنَا', transliteration: 'āyātunā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Our Signs', ur: 'ہمارا نشانیاں' } },
      { id: '20:126:5', arabic: 'فَنَسِيتَهَا ۖ', transliteration: 'fanasītahā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'but you forgot them', ur: 'لیکن تم forgot ان کو' } },
      { id: '20:126:6', arabic: 'وَكَذَٰلِكَ', transliteration: 'wakadhālika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and thus', ur: 'اور thus' } },
      { id: '20:126:7', arabic: 'ٱلْيَوْمَ', transliteration: 'l-yawma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'today', ur: 'today' } },
      { id: '20:126:8', arabic: 'تُنسَىٰ', transliteration: 'tunsā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you will be forgotten', ur: 'تم ہوگا forgotten' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' }
      ] }
  },
  127: {
    text: 'وَكَذَٰلِكَ نَجْزِى مَنْ أَسْرَفَ وَلَمْ يُؤْمِنۢ بِـَٔايَٰتِ رَبِّهِۦ ۚ وَلَعَذَابُ ٱلْءَاخِرَةِ أَشَدُّ وَأَبْقَىٰٓ',
    translation: {
      en: 'And thus do We recompense he who transgressed and did not believe in the signs of his Lord. And the punishment of the Hereafter is more severe and more enduring.',
      ur: 'اور جو شخص حد سے نکل جائے اور اپنے پروردگار کی آیتوں پر ایمان نہ لائے ہم اس کو ایسا ہی بدلہ دیتے ہیں۔ اور آخرت کا عذاب بہت سخت اور بہت دیر رہنے والا ہے'
    },
    words: [
      { id: '20:127:1', arabic: 'وَكَذَٰلِكَ', transliteration: 'wakadhālika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And thus', ur: 'اور thus' } },
      { id: '20:127:2', arabic: 'نَجْزِى', transliteration: 'najzī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We recompense', ur: 'ہم recompense' } },
      { id: '20:127:3', arabic: 'مَنْ', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(he) who', ur: '(وہ) جو' } },
      { id: '20:127:4', arabic: 'أَسْرَفَ', transliteration: 'asrafa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'transgresses', ur: 'transgresses' } },
      { id: '20:127:5', arabic: 'وَلَمْ', transliteration: 'walam', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '20:127:6', arabic: 'يُؤْمِنۢ', transliteration: 'yu\'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'believes', ur: 'believes' } },
      { id: '20:127:7', arabic: 'بِـَٔايَـٰتِ', transliteration: 'biāyāti', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in (the) Signs', ur: 'میں () نشانیاں' } },
      { id: '20:127:8', arabic: 'رَبِّهِۦ ۚ', transliteration: 'rabbihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) his Lord', ur: '(کا) اس کا رب' } },
      { id: '20:127:9', arabic: 'وَلَعَذَابُ', transliteration: 'walaʿadhābu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And surely (the) punishment', ur: 'اور بےشک () عذاب' } },
      { id: '20:127:10', arabic: 'ٱلْـَٔاخِرَةِ', transliteration: 'l-ākhirati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Hereafter', ur: '(کا)  Hereafter' } },
      { id: '20:127:11', arabic: 'أَشَدُّ', transliteration: 'ashaddu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(is) more severe', ur: '(ہے) more سخت' } },
      { id: '20:127:12', arabic: 'وَأَبْقَىٰٓ', transliteration: 'wa-abqā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and more lasting', ur: 'اور more lasting' } }
    ],
    structure: { relationships: [
        { from: 11, to: 12, label: 'عطف' }
      ] }
  },
  128: {
    text: 'أَفَلَمْ يَهْدِ لَهُمْ كَمْ أَهْلَكْنَا قَبْلَهُم مِّنَ ٱلْقُرُونِ يَمْشُونَ فِى مَسَٰكِنِهِمْ ۗ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ لِّأُو۟لِى ٱلنُّهَىٰ',
    translation: {
      en: 'Then, has it not become clear to them how many generations We destroyed before them as they walk among their dwellings? Indeed in that are signs for those of intelligence.',
      ur: 'کیا یہ بات ان لوگوں کے لئے موجب ہدایت نہ ہوئی کہ ہم ان سے پہلے بہت سے لوگوں کو ہلاک کرچکے ہیں جن کے رہنے کے مقامات میں یہ چلتے پھرتے ہیں۔ عقل والوں کے لئے اس میں (بہت سی) نشانیاں ہیں'
    },
    words: [
      { id: '20:128:1', arabic: 'أَفَلَمْ', transliteration: 'afalam', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Then has not', ur: 'پھر رکھتا ہے نہیں' } },
      { id: '20:128:2', arabic: 'يَهْدِ', transliteration: 'yahdi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it guided', ur: 'it ہدایت دی' } },
      { id: '20:128:3', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[for] them', ur: '[کے لیے] ان کو' } },
      { id: '20:128:4', arabic: 'كَمْ', transliteration: 'kam', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'how many', ur: 'کیسے بہت سے' } },
      { id: '20:128:5', arabic: 'أَهْلَكْنَا', transliteration: 'ahlaknā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We (have) destroyed', ur: 'ہم (رکھتے ہو) destroyed' } },
      { id: '20:128:6', arabic: 'قَبْلَهُم', transliteration: 'qablahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before them', ur: 'پہلے ان کو' } },
      { id: '20:128:7', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '20:128:8', arabic: 'ٱلْقُرُونِ', transliteration: 'l-qurūni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the generations', ur: ' generations' } },
      { id: '20:128:9', arabic: 'يَمْشُونَ', transliteration: 'yamshūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(as) they walk', ur: '(as) وہ walk' } },
      { id: '20:128:10', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:128:11', arabic: 'مَسَـٰكِنِهِمْ ۗ', transliteration: 'masākinihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their dwellings', ur: 'ان کا dwellings' } },
      { id: '20:128:12', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '20:128:13', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '20:128:14', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '20:128:15', arabic: 'لَـَٔايَـٰتٍۢ', transliteration: 'laāyātin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely (are) Signs', ur: 'بےشک (ہیں) نشانیاں' } },
      { id: '20:128:16', arabic: 'لِّأُو۟لِى', transliteration: 'li-ulī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for possessors', ur: 'کے لیے possessors' } },
      { id: '20:128:17', arabic: 'ٱلنُّهَىٰ', transliteration: 'l-nuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) intelligence', ur: '(کا) intelligence' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' },
        { from: 13, to: 14, label: 'تعلق' },
        { from: 14, to: 15, label: 'تعلق' },
        { from: 15, to: 16, label: 'تعلق' },
        { from: 16, to: 17, label: 'تعلق' }
      ] }
  },
  129: {
    text: 'وَلَوْلَا كَلِمَةٌۭ سَبَقَتْ مِن رَّبِّكَ لَكَانَ لِزَامًۭا وَأَجَلٌۭ مُّسَمًّۭى',
    translation: {
      en: 'And if not for a word that preceded from your Lord, punishment would have been an obligation [due immediately], and [if not for] a specified term [decreed].',
      ur: 'اور اگر ایک بات تمہارے پروردگار کی طرف سے پہلے صادر اور (جزائے اعمال کے لئے) ایک میعاد مقرر نہ ہوچکی ہوتی تو (نزول) عذاب لازم ہوجاتا'
    },
    words: [
      { id: '20:129:1', arabic: 'وَلَوْلَا', transliteration: 'walawlā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And if not', ur: 'اور اگر نہیں' } },
      { id: '20:129:2', arabic: 'كَلِمَةٌۭ', transliteration: 'kalimatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(for) a Word', ur: '(کے لیے) ایک Word' } },
      { id: '20:129:3', arabic: 'سَبَقَتْ', transliteration: 'sabaqat', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(that) preceded', ur: '(کہ) preceded' } },
      { id: '20:129:4', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:129:5', arabic: 'رَّبِّكَ', transliteration: 'rabbika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your Lord', ur: 'تمہارا رب' } },
      { id: '20:129:6', arabic: 'لَكَانَ', transliteration: 'lakāna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely (would) have been', ur: 'بےشک () رکھتے ہو been' } },
      { id: '20:129:7', arabic: 'لِزَامًۭا', transliteration: 'lizāman', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'an obligation', ur: 'ایک obligation' } },
      { id: '20:129:8', arabic: 'وَأَجَلٌۭ', transliteration: 'wa-ajalun', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and a term', ur: 'اور ایک term' } },
      { id: '20:129:9', arabic: 'مُّسَمًّۭى', transliteration: 'musamman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'determined', ur: 'determined' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }] }
  },
  130: {
    text: 'فَٱصْبِرْ عَلَىٰ مَا يَقُولُونَ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ ٱلشَّمْسِ وَقَبْلَ غُرُوبِهَا ۖ وَمِنْ ءَانَآئِ ٱلَّيْلِ فَسَبِّحْ وَأَطْرَافَ ٱلنَّهَارِ لَعَلَّكَ تَرْضَىٰ',
    translation: {
      en: 'So be patient over what they say and exalt [Allah] with praise of your Lord before the rising of the sun and before its setting; and during periods of the night [exalt Him] and at the ends of the day, that you may be satisfied.',
      ur: 'پس جو کچھ یہ بکواس کرتے ہیں اس پر صبر کرو۔ اور سورج کے نکلنے سے پہلے اور اس کے غروب ہونے سے پہلے اپنے پروردگار کی تسبیح وتحمید کیا کرو۔ اور رات کی ساعات (اولین) میں بھی اس کی تسبیح کیا کرو اور دن کی اطراف (یعنی دوپہر کے قریب ظہر کے وقت بھی) تاکہ تم خوش ہوجاؤ'
    },
    words: [
      { id: '20:130:1', arabic: 'فَٱصْبِرْ', transliteration: 'fa-iṣ\'bir', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So be patient', ur: 'پس be patient' } },
      { id: '20:130:2', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'over', ur: 'اوپر' } },
      { id: '20:130:3', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:130:4', arabic: 'يَقُولُونَ', transliteration: 'yaqūlūna', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'they say', ur: 'وہ کہو' } },
      { id: '20:130:5', arabic: 'وَسَبِّحْ', transliteration: 'wasabbiḥ', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and glorify', ur: 'اور glorify' } },
      { id: '20:130:6', arabic: 'بِحَمْدِ', transliteration: 'biḥamdi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with praise', ur: 'ساتھ praise' } },
      { id: '20:130:7', arabic: 'رَبِّكَ', transliteration: 'rabbika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) your Lord', ur: '(کا) تمہارا رب' } },
      { id: '20:130:8', arabic: 'قَبْلَ', transliteration: 'qabla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:130:9', arabic: 'طُلُوعِ', transliteration: 'ṭulūʿi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) rising', ur: '() rising' } },
      { id: '20:130:10', arabic: 'ٱلشَّمْسِ', transliteration: 'l-shamsi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the sun', ur: '(کا)  sun' } },
      { id: '20:130:11', arabic: 'وَقَبْلَ', transliteration: 'waqabla', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and before', ur: 'اور پہلے' } },
      { id: '20:130:12', arabic: 'غُرُوبِهَا ۖ', transliteration: 'ghurūbihā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'its setting', ur: 'its setting' } },
      { id: '20:130:13', arabic: 'وَمِنْ', transliteration: 'wamin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and from', ur: 'اور سے' } },
      { id: '20:130:14', arabic: 'ءَانَآئِ', transliteration: 'ānāi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) hours', ur: '() hours' } },
      { id: '20:130:15', arabic: 'ٱلَّيْلِ', transliteration: 'al-layli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the night', ur: '(کا)  night' } },
      { id: '20:130:16', arabic: 'فَسَبِّحْ', transliteration: 'fasabbiḥ', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and glorify', ur: 'اور glorify' } },
      { id: '20:130:17', arabic: 'وَأَطْرَافَ', transliteration: 'wa-aṭrāfa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: '(at the) ends', ur: '(at ) ends' } },
      { id: '20:130:18', arabic: 'ٱلنَّهَارِ', transliteration: 'l-nahāri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the day', ur: '(کا) قیامت کا دن' } },
      { id: '20:130:19', arabic: 'لَعَلَّكَ', transliteration: 'laʿallaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'so that you may', ur: 'تاکہ تم may' } },
      { id: '20:130:20', arabic: 'تَرْضَىٰ', transliteration: 'tarḍā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'be satisfied', ur: 'be satisfied' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'موصول + صلة' }, { from: 4, to: 17, label: 'عطف' }] }
  },
  131: {
    text: 'وَلَا تَمُدَّنَّ عَيْنَيْكَ إِلَىٰ مَا مَتَّعْنَا بِهِۦٓ أَزْوَٰجًۭا مِّنْهُمْ زَهْرَةَ ٱلْحَيَوٰةِ ٱلدُّنْيَا لِنَفْتِنَهُمْ فِيهِ ۚ وَرِزْقُ رَبِّكَ خَيْرٌۭ وَأَبْقَىٰ',
    translation: {
      en: 'And do not extend your eyes toward that by which We have given enjoyment to [some] categories of them, [its being but] the splendor of worldly life by which We test them. And the provision of your Lord is better and more enduring.',
      ur: 'اور کئی طرح کے لوگوں کو جو ہم نے دنیا کی زندگی میں آرائش کی چیزوں سے بہرہ مند کیا ہے تاکہ ان کی آزمائش کریں ان پر نگاہ نہ کرنا۔ اور تمہاری پروردگار کی (عطا فرمائی ہوئی) روزی بہت بہتر اور باقی رہنے والی ہے'
    },
    words: [
      { id: '20:131:1', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And (do) not', ur: 'اور (کرنا) نہیں' } },
      { id: '20:131:2', arabic: 'تَمُدَّنَّ', transliteration: 'tamuddanna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'extend', ur: 'extend' } },
      { id: '20:131:3', arabic: 'عَيْنَيْكَ', transliteration: 'ʿaynayka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your eyes', ur: 'تمہارا آنکھیں' } },
      { id: '20:131:4', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'towards', ur: 'towards' } },
      { id: '20:131:5', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '20:131:6', arabic: 'مَتَّعْنَا', transliteration: 'mattaʿnā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We have given for enjoyment', ur: 'ہم رکھتے ہو given کے لیے enjoyment' } },
      { id: '20:131:7', arabic: 'بِهِۦٓ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '[with it]', ur: '[ساتھ it]' } },
      { id: '20:131:8', arabic: 'أَزْوَٰجًۭا', transliteration: 'azwājan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'pairs', ur: 'pairs' } },
      { id: '20:131:9', arabic: 'مِّنْهُمْ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of them', ur: 'کا ان کو' } },
      { id: '20:131:10', arabic: 'زَهْرَةَ', transliteration: 'zahrata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) splendor', ur: '() splendor' } },
      { id: '20:131:11', arabic: 'ٱلْحَيَوٰةِ', transliteration: 'l-ḥayati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the life', ur: '(کا)  زندگی' } },
      { id: '20:131:12', arabic: 'ٱلدُّنْيَا', transliteration: 'l-dun\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the world', ur: '(کا)  world' } },
      { id: '20:131:13', arabic: 'لِنَفْتِنَهُمْ', transliteration: 'linaftinahum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that We may test them', ur: 'کہ ہم may test ان کو' } },
      { id: '20:131:14', arabic: 'فِيهِ ۚ', transliteration: 'fīhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '20:131:15', arabic: 'وَرِزْقُ', transliteration: 'wariz\'qu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And (the) provision', ur: 'اور () provision' } },
      { id: '20:131:16', arabic: 'رَبِّكَ', transliteration: 'rabbika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) your Lord', ur: '(کا) تمہارا رب' } },
      { id: '20:131:17', arabic: 'خَيْرٌۭ', transliteration: 'khayrun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) better', ur: '(ہے) better' } },
      { id: '20:131:18', arabic: 'وَأَبْقَىٰ', transliteration: 'wa-abqā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and more lasting', ur: 'اور more lasting' } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'موصول + صلة' }] }
  },
  132: {
    text: 'وَأْمُرْ أَهْلَكَ بِٱلصَّلَوٰةِ وَٱصْطَبِرْ عَلَيْهَا ۖ لَا نَسْـَٔلُكَ رِزْقًۭا ۖ نَّحْنُ نَرْزُقُكَ ۗ وَٱلْعَٰقِبَةُ لِلتَّقْوَىٰ',
    translation: {
      en: 'And enjoin prayer upon your family [and people] and be steadfast therein. We ask you not for provision; We provide for you, and the [best] outcome is for [those of] righteousness.',
      ur: 'اور اپنے گھر والوں کو نماز کا حکم کرو اور اس پر قائم رہو۔ ہم تم سے روزی کے خواستگار نہیں۔ بلکہ تمہیں ہم روزی دیتے ہیں اور (نیک) انجام (اہل) تقویٰ کا ہے'
    },
    words: [
      { id: '20:132:1', arabic: 'وَأْمُرْ', transliteration: 'wamur', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And enjoin', ur: 'اور enjoin' } },
      { id: '20:132:2', arabic: 'أَهْلَكَ', transliteration: 'ahlaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(on) your family', ur: '(پر) تمہارا family' } },
      { id: '20:132:3', arabic: 'بِٱلصَّلَوٰةِ', transliteration: 'bil-ṣalati', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'the prayer', ur: 'نماز' } },
      { id: '20:132:4', arabic: 'وَٱصْطَبِرْ', transliteration: 'wa-iṣ\'ṭabir', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and be steadfast', ur: 'اور be steadfast' } },
      { id: '20:132:5', arabic: 'عَلَيْهَا ۖ', transliteration: 'ʿalayhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'therein', ur: 'therein' } },
      { id: '20:132:6', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '20:132:7', arabic: 'نَسْـَٔلُكَ', transliteration: 'nasaluka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We ask you', ur: 'ہم پوچھنا/مانگنا تم' } },
      { id: '20:132:8', arabic: 'رِزْقًۭا ۖ', transliteration: 'riz\'qan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(for) provision', ur: '(کے لیے) provision' } },
      { id: '20:132:9', arabic: 'نَّحْنُ', transliteration: 'naḥnu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We', ur: 'ہم' } },
      { id: '20:132:10', arabic: 'نَرْزُقُكَ ۗ', transliteration: 'narzuquka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'provide (for) you', ur: 'provide (کے لیے) تم' } },
      { id: '20:132:11', arabic: 'وَٱلْعَـٰقِبَةُ', transliteration: 'wal-ʿāqibatu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the outcome', ur: 'اور  outcome' } },
      { id: '20:132:12', arabic: 'لِلتَّقْوَىٰ', transliteration: 'lilttaqwā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '(is) for the righteous[ness]', ur: '(ہے) کے لیے  نیک[ness]' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' }
      ] }
  },
  133: {
    text: 'وَقَالُوا۟ لَوْلَا يَأْتِينَا بِـَٔايَةٍۢ مِّن رَّبِّهِۦٓ ۚ أَوَلَمْ تَأْتِهِم بَيِّنَةُ مَا فِى ٱلصُّحُفِ ٱلْأُولَىٰ',
    translation: {
      en: 'And they say, "Why does he not bring us a sign from his Lord?" Has there not come to them evidence of what was in the former scriptures?',
      ur: 'اور کہتے ہیں کہ یہ (پیغمبر) اپنے پروردگار کی طرف سے ہمارے پاس کوئی نشانی کیوں نہیں لاتے۔ کیا ان کے پاس پہلی کتابوں کی نشانی نہیں آئی؟'
    },
    words: [
      { id: '20:133:1', arabic: 'وَقَالُوا۟', transliteration: 'waqālū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And they say', ur: 'اور وہ کہو' } },
      { id: '20:133:2', arabic: 'لَوْلَا', transliteration: 'lawlā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'Why not', ur: 'کیوں نہیں' } },
      { id: '20:133:3', arabic: 'يَأْتِينَا', transliteration: 'yatīnā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he brings us', ur: 'وہ brings us' } },
      { id: '20:133:4', arabic: 'بِـَٔايَةٍۢ', transliteration: 'biāyatin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'a sign', ur: 'ایک نشانی' } },
      { id: '20:133:5', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '20:133:6', arabic: 'رَّبِّهِۦٓ ۚ', transliteration: 'rabbihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his Lord', ur: 'اس کا رب' } },
      { id: '20:133:7', arabic: 'أَوَلَمْ', transliteration: 'awalam', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Has not', ur: 'رکھتا ہے نہیں' } },
      { id: '20:133:8', arabic: 'تَأْتِهِم', transliteration: 'tatihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'come to them', ur: 'آنا کو/تک ان کو' } },
      { id: '20:133:9', arabic: 'بَيِّنَةُ', transliteration: 'bayyinatu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'evidence', ur: 'evidence' } },
      { id: '20:133:10', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(of) what', ur: '(کا) کیا/جو' } },
      { id: '20:133:11', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(was) in', ur: '(تھا) میں' } },
      { id: '20:133:12', arabic: 'ٱلصُّحُفِ', transliteration: 'l-ṣuḥufi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Scriptures', ur: ' Scriptures' } },
      { id: '20:133:13', arabic: 'ٱلْأُولَىٰ', transliteration: 'l-ūlā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the former', ur: ' former' } }
    ],
    structure: { relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' },
        { from: 4, to: 5, label: 'تعلق' },
        { from: 5, to: 6, label: 'تعلق' },
        { from: 6, to: 7, label: 'تعلق' },
        { from: 7, to: 8, label: 'تعلق' },
        { from: 8, to: 9, label: 'تعلق' },
        { from: 9, to: 10, label: 'تعلق' },
        { from: 10, to: 11, label: 'تعلق' },
        { from: 11, to: 12, label: 'تعلق' },
        { from: 12, to: 13, label: 'تعلق' }
      ] }
  },
  134: {
    text: 'وَلَوْ أَنَّآ أَهْلَكْنَٰهُم بِعَذَابٍۢ مِّن قَبْلِهِۦ لَقَالُوا۟ رَبَّنَا لَوْلَآ أَرْسَلْتَ إِلَيْنَا رَسُولًۭا فَنَتَّبِعَ ءَايَٰتِكَ مِن قَبْلِ أَن نَّذِلَّ وَنَخْزَىٰ',
    translation: {
      en: 'And if We had destroyed them with a punishment before him, they would have said, "Our Lord, why did You not send to us a messenger so we could have followed Your verses before we were humiliated and disgraced?"',
      ur: 'اور اگر ہم ان کو پیغمبر (کے بھیجنے) سے پیشتر کسی عذاب سے ہلاک کردیتے تو وہ کہتے کہ اے ہمارے پروردگار تو نے ہماری طرف کوئی پیغمبر کیوں نہ بھیجا کہ ہم ذلیل اور رسوا ہونے سے پہلے تیرے کلام (واحکام) کی پیروی کرتے'
    },
    words: [
      { id: '20:134:1', arabic: 'وَلَوْ', transliteration: 'walaw', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '20:134:2', arabic: 'أَنَّآ', transliteration: 'annā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We', ur: 'ہم' } },
      { id: '20:134:3', arabic: 'أَهْلَكْنَـٰهُم', transliteration: 'ahlaknāhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(had) destroyed them', ur: '(رکھتا تھا) destroyed ان کو' } },
      { id: '20:134:4', arabic: 'بِعَذَابٍۢ', transliteration: 'biʿadhābin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with a punishment', ur: 'ساتھ ایک عذاب' } },
      { id: '20:134:5', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before him', ur: 'پہلے him' } },
      { id: '20:134:6', arabic: 'قَبْلِهِۦ', transliteration: 'qablihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before him', ur: 'پہلے him' } },
      { id: '20:134:7', arabic: 'لَقَالُوا۟', transliteration: 'laqālū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely they (would) have said', ur: 'بےشک وہ () رکھتے ہو کہا' } },
      { id: '20:134:8', arabic: 'رَبَّنَا', transliteration: 'rabbanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Our Lord', ur: 'ہمارا رب' } },
      { id: '20:134:9', arabic: 'لَوْلَآ', transliteration: 'lawlā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'why not', ur: 'کیوں نہیں' } },
      { id: '20:134:10', arabic: 'أَرْسَلْتَ', transliteration: 'arsalta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'You sent', ur: 'تم بھیجا' } },
      { id: '20:134:11', arabic: 'إِلَيْنَا', transliteration: 'ilaynā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'to us', ur: 'کو/تک us' } },
      { id: '20:134:12', arabic: 'رَسُولًۭا', transliteration: 'rasūlan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a Messenger', ur: 'ایک رسول' } },
      { id: '20:134:13', arabic: 'فَنَتَّبِعَ', transliteration: 'fanattabiʿa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'so we (could) have followed', ur: 'پس ہم (could) رکھتے ہو پیروی کی' } },
      { id: '20:134:14', arabic: 'ءَايَـٰتِكَ', transliteration: 'āyātika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Your signs', ur: 'تمہارا نشانیاں' } },
      { id: '20:134:15', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:134:16', arabic: 'قَبْلِ', transliteration: 'qabli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '20:134:17', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[that]', ur: '[کہ]' } },
      { id: '20:134:18', arabic: 'نَّذِلَّ', transliteration: 'nadhilla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we were humiliated', ur: 'ہم تھے humiliated' } },
      { id: '20:134:19', arabic: 'وَنَخْزَىٰ', transliteration: 'wanakhzā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and disgraced', ur: 'اور disgraced' } }
    ],
    structure: { relationships: [{ from: 11, to: 13, label: 'عطف' }, { from: 15, to: 16, label: 'جار + مجرور' }] }
  },
  135: {
    text: 'قُلْ كُلٌّۭ مُّتَرَبِّصٌۭ فَتَرَبَّصُوا۟ ۖ فَسَتَعْلَمُونَ مَنْ أَصْحَٰبُ ٱلصِّرَٰطِ ٱلسَّوِىِّ وَمَنِ ٱهْتَدَىٰ',
    translation: {
      en: 'Say, "Each [of us] is waiting; so wait. For you will know who are the companions of the sound path and who is guided."',
      ur: 'کہہ دو کہ سب (نتائج اعمال) کے منتظر ہیں سو تم بھی منتظر رہو۔ عنقریب تم کو معلوم ہوجائے گا کہ (دین کے) سیدھے رستے پر چلنے والے کون ہیں اور (جنت کی طرف) راہ پانے والے کون ہیں (ہم یا تم)'
    },
    words: [
      { id: '20:135:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '20:135:2', arabic: 'كُلٌّۭ', transliteration: 'kullun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Each', ur: 'Each' } },
      { id: '20:135:3', arabic: 'مُّتَرَبِّصٌۭ', transliteration: 'mutarabbiṣun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) waiting', ur: '(ہے) waiting' } },
      { id: '20:135:4', arabic: 'فَتَرَبَّصُوا۟ ۖ', transliteration: 'fatarabbaṣū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'so await', ur: 'پس await' } },
      { id: '20:135:5', arabic: 'فَسَتَعْلَمُونَ', transliteration: 'fasataʿlamūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then you will know', ur: 'پھر تم  جاننا' } },
      { id: '20:135:6', arabic: 'مَنْ', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جو' } },
      { id: '20:135:7', arabic: 'أَصْحَـٰبُ', transliteration: 'aṣḥābu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(are the) companions', ur: '(ہیں ) companions' } },
      { id: '20:135:8', arabic: 'ٱلصِّرَٰطِ', transliteration: 'l-ṣirāṭi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the way', ur: '(کا)  راستہ' } },
      { id: '20:135:9', arabic: 'ٱلسَّوِىِّ', transliteration: 'l-sawiyi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[the] even', ur: '[] even' } },
      { id: '20:135:10', arabic: 'وَمَنِ', transliteration: 'wamani', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and who', ur: 'اور جو' } },
      { id: '20:135:11', arabic: 'ٱهْتَدَىٰ', transliteration: 'ih\'tadā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'is guided', ur: 'ہے ہدایت دی' } }
    ],
    structure: { relationships: [{ from: 6, to: 7, label: 'موصول + صلة' }] }
  }
};

export default SURAH_20_TREEBANK;
export { SURAH_20_TREEBANK as TREEBANK_DATA };
