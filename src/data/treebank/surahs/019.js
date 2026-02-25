/**
 * Surah Maryam (19) - Treebank Data (Ayahs 1-10)
 * Mary - 98 Ayahs Total
 *
 * Theme: Stories of prophets, miraculous births, mercy of Allah
 * Revelation: Makki
 */

const SURAH_19_TREEBANK = {
  1: {
    text: 'كهيعص',
    translation: {
      en: 'Kaf, Ha, Ya, Ain, Sad.',
      ur: 'کاف، ہا، یا، عین، صاد۔',
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        id: '19:1:1',
        position: 1,
        arabic: 'كهيعص',
        transliteration: 'Kaf-Ha-Ya-Ain-Sad',
        pos: ['INIT'],
        posLabel: 'INIT',
        root: null,
        meaning: { en: 'Kaf Ha Ya Ain Sad', ur: 'کاف ہا یا عین صاد' },
        grammarRole: 'huruf-muqattaat',
        grammarExplanations: {
          en: 'Disconnected letters (حروف مقطعات) - their meaning known only to Allah. Unique 5-letter combination.',
          ur: 'حروف مقطعات - ان کا مطلب صرف اللہ جانتا ہے۔ منفرد 5 حرفی ترکیب۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Mysterious Opening', ur: 'پراسرار آغاز' },
            explanation: {
              en: 'This is the longest combination of disconnected letters (5). Creates anticipation for divine revelation.',
              ur: 'یہ سب سے لمبی حروف مقطعات کی ترکیب ہے (5)۔ الٰہی وحی کے لیے تجسس پیدا کرتی ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Unique Combination', ur: 'منفرد ترکیب' },
            points: [
              {
                en: 'Only surah beginning with these 5 letters - emphasizing uniqueness of stories within.',
                ur: 'صرف یہ سورہ ان 5 حروف سے شروع ہوتی ہے - اندر کی کہانیوں کی انفرادیت پر زور۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'huruf-muqattaat',
      explanation: {
        en: 'Opening with 5 disconnected letters - longest combination in Quran',
        ur: 'قرآن کی سب سے لمبی حروف مقطعات کی ترکیب سے آغاز',
      },
    },
  },

  2: {
    text: 'ذِكْرُ رَحْمَتِ رَبِّكَ عَبْدَهُ زَكَرِيَّا',
    translation: {
      en: '[This is] a mention of the mercy of your Lord to His servant Zechariah.',
      ur: 'یہ تیرے رب کی رحمت کا ذکر ہے اپنے بندے زکریا پر۔',
    },
    words: [
      {
        id: '19:2:1',
        position: 1,
        arabic: 'ذِكْرُ',
        transliteration: 'dhikru',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        lemma: 'ذِكْر',
        meaning: { en: 'A mention/remembrance', ur: 'ذکر' },
        grammarRole: 'khabar-muqaddam',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Predicate (خبر) placed first for emphasis. Subject omitted: "This is a mention..."',
          ur: 'خبر مقدم - تاکید کے لیے۔ مبتدأ محذوف: "یہ ذکر ہے..."',
        },
      },
      {
        id: '19:2:2',
        position: 2,
        arabic: 'رَحْمَتِ',
        transliteration: 'rahmati',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ح م',
        lemma: 'رَحْمَة',
        meaning: { en: 'of the mercy', ur: 'رحمت کا' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
      },
      {
        id: '19:2:3',
        position: 3,
        arabic: 'رَبِّكَ',
        transliteration: 'Rabbika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'of your Lord', ur: 'تیرے رب کی' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
      },
      {
        id: '19:2:4',
        position: 4,
        arabic: 'عَبْدَهُ',
        transliteration: 'abdahu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ب د',
        lemma: 'عَبْد',
        meaning: { en: 'His servant', ur: 'اپنے بندے' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '19:2:5',
        position: 5,
        arabic: 'زَكَرِيَّا',
        transliteration: 'Zakariyya',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        lemma: 'زَكَرِيَّا',
        meaning: { en: 'Zechariah', ur: 'زکریا' },
        grammarRole: 'badal',
        grammarExplanations: {
          en: 'Substitute (بدل) for عَبْدَهُ - identifying the servant as Prophet Zechariah.',
          ur: 'بدل - عَبْدَهُ کا، نبی زکریا کی تعیین۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Introduction of Story', ur: 'کہانی کا تعارف' },
            explanation: {
              en: 'The story of Zechariah begins - an elderly prophet who desperately wanted a child.',
              ur: 'زکریا کی کہانی شروع - ایک بزرگ نبی جو شدت سے بچے کے خواہشمند تھے۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'nominal-idafa',
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'بدل' },
      ],
      explanation: {
        en: 'Introduction to the story of Allah\'s mercy on Zechariah',
        ur: 'زکریا پر اللہ کی رحمت کی کہانی کا تعارف',
      },
    },
  },

  3: {
    text: 'إِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا',
    translation: {
      en: 'When he called to his Lord a private supplication.',
      ur: 'جب اس نے اپنے رب کو آہستہ سے پکارا۔',
    },
    words: [
      {
        id: '19:3:1',
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
        id: '19:3:2',
        position: 2,
        arabic: 'نَادَىٰ',
        transliteration: 'nada',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن د و',
        lemma: 'نَادَى',
        meaning: { en: 'he called', ur: 'اس نے پکارا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular', form: 'III' },
      },
      {
        id: '19:3:3',
        position: 3,
        arabic: 'رَبَّهُ',
        transliteration: 'Rabbahu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'his Lord', ur: 'اپنے رب کو' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '19:3:4',
        position: 4,
        arabic: 'نِدَاءً',
        transliteration: 'nidaan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن د و',
        lemma: 'نِدَاء',
        meaning: { en: 'a call/supplication', ur: 'پکار' },
        grammarRole: 'mafool-mutlaq',
        case: 'mansoob',
      },
      {
        id: '19:3:5',
        position: 5,
        arabic: 'خَفِيًّا',
        transliteration: 'khafiyyan',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'خ ف ي',
        lemma: 'خَفِيّ',
        meaning: { en: 'private/secret', ur: 'آہستہ/چھپی ہوئی' },
        grammarRole: 'sifa',
        case: 'mansoob',
        advanced: {
          balagha: {
            title: { en: 'Secret Supplication', ur: 'خفیہ دعا' },
            explanation: {
              en: 'Zechariah called secretly - showing humility, sincerity, and desperation in his prayer.',
              ur: 'زکریا نے خفیہ پکارا - عاجزی، اخلاص، اور دعا میں بے قراری کا اظہار۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'temporal-verb',
      explanation: {
        en: 'Temporal clause describing Zechariah\'s secret call to Allah',
        ur: 'زمانی جملہ زکریا کی اللہ سے خفیہ پکار کا بیان',
      },
    
       relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
  },

  4: {
    text: 'قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُن بِدُعَائِكَ رَبِّ شَقِيًّا',
    translation: {
      en: 'He said, "My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy."',
      ur: 'کہا: اے میرے رب! میری ہڈیاں کمزور ہو گئیں اور سر بڑھاپے سے سفید ہو گیا اور میں تجھ سے دعا کر کے کبھی محروم نہیں رہا۔',
    },
    words: [
      {
        id: '19:4:1',
        position: 1,
        arabic: 'قَالَ',
        transliteration: 'qala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'He said', ur: 'کہا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
      },
      {
        id: '19:4:2',
        position: 2,
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: { en: 'My Lord', ur: 'اے میرے رب' },
        grammarRole: 'munada',
        grammarExplanations: {
          en: 'Vocative - calling upon Allah with intimacy (ياء المتكلم omitted).',
          ur: 'منادی - اللہ کو قربت سے پکارنا (ياء متکلم محذوف)۔',
        },
      },
      {
        id: '19:4:3',
        position: 3,
        arabic: 'إِنِّي',
        transliteration: 'inni',
        pos: ['ACC', 'PRON'],
        posLabel: 'ACC+PRON',
        root: null,
        meaning: { en: 'Indeed I', ur: 'بیشک میں' },
        grammarRole: 'tawkid',
      },
      {
        id: '19:4:4',
        position: 4,
        arabic: 'وَهَنَ',
        transliteration: 'wahana',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ه ن',
        lemma: 'وَهَنَ',
        meaning: { en: 'has weakened', ur: 'کمزور ہو گئی' },
        grammarRole: 'khabar-inna',
        features: { aspect: 'perfect', person: '3rd' },
      },
      {
        id: '19:4:5',
        position: 5,
        arabic: 'الْعَظْمُ',
        transliteration: 'al-azmu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ظ م',
        lemma: 'عَظْم',
        meaning: { en: 'the bone', ur: 'ہڈی' },
        grammarRole: 'fail',
        case: 'marfoo',
        advanced: {
          balagha: {
            title: { en: 'Bones Weakening', ur: 'ہڈیوں کی کمزوری' },
            explanation: {
              en: 'Bones are the strongest part - if bones weaken, entire body is weak. Deep expression of old age.',
              ur: 'ہڈیاں سب سے مضبوط حصہ ہیں - اگر وہ کمزور ہوں تو پورا جسم کمزور۔ بڑھاپے کا گہرا اظہار۔',
            },
          },
        },
      },
      {
        id: '19:4:6',
        position: 6,
        arabic: 'مِنِّي',
        transliteration: 'minni',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'from me', ur: 'مجھ سے' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '19:4:7',
        position: 7,
        arabic: 'وَاشْتَعَلَ',
        transliteration: 'washtaala',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ش ع ل',
        lemma: 'اِشْتَعَلَ',
        meaning: { en: 'and has filled/ignited', ur: 'اور بھڑک اٹھا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', form: 'VIII' },
      },
      {
        id: '19:4:8',
        position: 8,
        arabic: 'الرَّأْسُ',
        transliteration: 'ar-rasu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر أ س',
        lemma: 'رَأْس',
        meaning: { en: 'the head', ur: 'سر' },
        grammarRole: 'fail',
        case: 'marfoo',
      },
      {
        id: '19:4:9',
        position: 9,
        arabic: 'شَيْبًا',
        transliteration: 'shayban',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ي ب',
        lemma: 'شَيْب',
        meaning: { en: 'with white hair', ur: 'سفیدی سے' },
        grammarRole: 'tamyiz',
        case: 'mansoob',
        advanced: {
          balagha: {
            title: { en: 'Fire of Grey Hair', ur: 'سفیدی کی آگ' },
            explanation: {
              en: 'اشْتَعَلَ (ignited) - grey hair spreading like fire across the head. Vivid imagery.',
              ur: 'اشْتَعَلَ (بھڑکنا) - سفید بال آگ کی طرح سر پر پھیلتے ہوئے۔ واضح تصویر کشی۔',
            },
          },
        },
      },
      {
        id: '19:4:10',
        position: 10,
        arabic: 'وَلَمْ',
        transliteration: 'wa-lam',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: { en: 'and never', ur: 'اور نہیں' },
        grammarRole: 'nafi',
      },
      {
        id: '19:4:11',
        position: 11,
        arabic: 'أَكُن',
        transliteration: 'akun',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: { en: 'have I been', ur: 'میں رہا' },
        grammarRole: 'verb',
        case: 'majzoom',
      },
      {
        id: '19:4:12',
        position: 12,
        arabic: 'بِدُعَائِكَ',
        transliteration: 'bi-duaika',
        pos: ['P', 'N', 'PRON'],
        posLabel: 'P+N+PRON',
        root: 'د ع و',
        meaning: { en: 'in my supplication to You', ur: 'تجھ سے دعا کر کے' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '19:4:13',
        position: 13,
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: { en: 'my Lord', ur: 'اے رب' },
        grammarRole: 'munada',
      },
      {
        id: '19:4:14',
        position: 14,
        arabic: 'شَقِيًّا',
        transliteration: 'shaqiyyan',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ش ق ي',
        lemma: 'شَقِيّ',
        meaning: { en: 'unhappy/unsuccessful', ur: 'محروم/ناکام' },
        grammarRole: 'khabar-kan',
        case: 'mansoob',
      },
    ],
    structure: {
      type: 'prayer-explanation',
      relationships: [
        { from: 1, to: 5, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'تمییز' },
        { from: 10, to: 11, label: 'نفی + فعل' },
      ],
      explanation: {
        en: 'Zechariah explains his condition: old age + confidence in Allah\'s response',
        ur: 'زکریا اپنی حالت بیان کرتے ہیں: بڑھاپا + اللہ کے جواب پر اعتماد',
      },
    },
  },

  5: {
    text: 'وَإِنِّي خِفْتُ الْمَوَالِيَ مِن وَرَائِي وَكَانَتِ امْرَأَتِي عَاقِرًا فَهَبْ لِي مِن لَّدُنكَ وَلِيًّا',
    translation: {
      en: 'And indeed, I fear the successors after me, and my wife has been barren, so give me from Yourself an heir.',
      ur: 'اور مجھے اپنے بعد رشتہ داروں سے ڈر ہے اور میری بیوی بانجھ ہے، پس مجھے اپنے پاس سے ایک وارث عطا فرما۔',
    },
    words: [
      {
        id: '19:5:1',
        position: 1,
        arabic: 'وَإِنِّي',
        transliteration: 'wa-inni',
        pos: ['CONJ', 'ACC', 'PRON'],
        posLabel: 'CONJ+ACC+PRON',
        root: null,
        meaning: { en: 'And indeed I', ur: 'اور بیشک میں' },
        grammarRole: 'tawkid',
      },
      {
        id: '19:5:2',
        position: 2,
        arabic: 'خِفْتُ',
        transliteration: 'khiftu',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ و ف',
        lemma: 'خَافَ',
        meaning: { en: 'I fear', ur: 'مجھے ڈر ہے' },
        grammarRole: 'khabar-inna',
        features: { aspect: 'perfect', person: '1st', number: 'singular' },
      },
      {
        id: '19:5:3',
        position: 3,
        arabic: 'الْمَوَالِيَ',
        transliteration: 'al-mawaliya',
        pos: ['N'],
        posLabel: 'N',
        root: 'و ل ي',
        lemma: 'مَوْلَى',
        meaning: { en: 'the successors/relatives', ur: 'رشتہ دار' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '19:5:4',
        position: 4,
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'from/after', ur: 'سے' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '19:5:5',
        position: 5,
        arabic: 'وَرَائِي',
        transliteration: 'warai',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'و ر ي',
        meaning: { en: 'after me', ur: 'میرے بعد' },
        grammarRole: 'majroor',
      },
      {
        id: '19:5:6',
        position: 6,
        arabic: 'وَكَانَتِ',
        transliteration: 'wa-kanatit',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ك و ن',
        meaning: { en: 'and has been', ur: 'اور ہے' },
        grammarRole: 'verb',
      },
      {
        id: '19:5:7',
        position: 7,
        arabic: 'امْرَأَتِي',
        transliteration: 'imraati',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'م ر أ',
        lemma: 'اِمْرَأَة',
        meaning: { en: 'my wife', ur: 'میری بیوی' },
        grammarRole: 'ism-kan',
        case: 'marfoo',
      },
      {
        id: '19:5:8',
        position: 8,
        arabic: 'عَاقِرًا',
        transliteration: 'aqiran',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ق ر',
        lemma: 'عَاقِر',
        meaning: { en: 'barren', ur: 'بانجھ' },
        grammarRole: 'khabar-kan',
        case: 'mansoob',
      },
      {
        id: '19:5:9',
        position: 9,
        arabic: 'فَهَبْ',
        transliteration: 'fa-hab',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'و ه ب',
        lemma: 'وَهَبَ',
        meaning: { en: 'so give/grant', ur: 'پس عطا فرما' },
        grammarRole: 'verb',
        features: { aspect: 'imperative' },
        advanced: {
          rootFamily: {
            root: 'و ه ب',
            meaning: { en: 'to give, grant, bestow', ur: 'دینا، عطا کرنا' },
            words: [
              { arabic: 'وَهَبَ', count: 25, meaning: { en: 'gave', ur: 'دیا' } },
              { arabic: 'هِبَة', count: 2, meaning: { en: 'gift', ur: 'تحفہ' } },
              { arabic: 'وَهَّاب', count: 3, meaning: { en: 'Bestower', ur: 'عطا کرنے والا' } },
            ],
          },
        },
      },
      {
        id: '19:5:10',
        position: 10,
        arabic: 'لِي',
        transliteration: 'li',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'to me', ur: 'مجھے' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '19:5:11',
        position: 11,
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '19:5:12',
        position: 12,
        arabic: 'لَّدُنكَ',
        transliteration: 'ladunka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ل د ن',
        meaning: { en: 'Yourself', ur: 'اپنے پاس' },
        grammarRole: 'majroor',
      },
      {
        id: '19:5:13',
        position: 13,
        arabic: 'وَلِيًّا',
        transliteration: 'waliyyan',
        pos: ['N'],
        posLabel: 'N',
        root: 'و ل ي',
        lemma: 'وَلِيّ',
        meaning: { en: 'an heir/successor', ur: 'وارث' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
    ],
    structure: {
      type: 'request-reason',
      explanation: {
        en: 'Zechariah explains his concern and makes his request for an heir',
        ur: 'زکریا اپنی فکر بیان کرتے ہیں اور وارث کی درخواست کرتے ہیں',
      },
    
       relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 2, to: 6, label: 'عطف' },
        { from: 6, to: 9, label: 'عطف' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },

  6: {
    text: 'يَرِثُنِي وَيَرِثُ مِنْ آلِ يَعْقُوبَ ۖ وَاجْعَلْهُ رَبِّ رَضِيًّا',
    translation: {
      en: 'Who will inherit me and inherit from the family of Jacob. And make him, my Lord, pleasing [to You].',
      ur: 'جو میرا وارث ہو اور یعقوب کی آل کا وارث ہو۔ اور اے میرے رب اسے پسندیدہ بنا۔',
    },
    words: [
      {
        id: '19:6:1',
        position: 1,
        arabic: 'يَرِثُنِي',
        transliteration: 'yarithuni',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'و ر ث',
        lemma: 'وَرِثَ',
        meaning: { en: 'who will inherit me', ur: 'جو میرا وارث ہو' },
        grammarRole: 'sifa',
        features: { aspect: 'imperfect', person: '3rd', gender: 'masculine', number: 'singular' },
      },
      {
        id: '19:6:2',
        position: 2,
        arabic: 'وَيَرِثُ',
        transliteration: 'wa-yarithu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'و ر ث',
        meaning: { en: 'and will inherit', ur: 'اور وارث ہو' },
        grammarRole: 'verb',
      },
      {
        id: '19:6:3',
        position: 3,
        arabic: 'مِنْ',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '19:6:4',
        position: 4,
        arabic: 'آلِ',
        transliteration: 'ali',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ و ل',
        lemma: 'آل',
        meaning: { en: 'the family of', ur: 'آل' },
        grammarRole: 'majroor',
      },
      {
        id: '19:6:5',
        position: 5,
        arabic: 'يَعْقُوبَ',
        transliteration: 'Yaquba',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        lemma: 'يَعْقُوب',
        meaning: { en: 'Jacob', ur: 'یعقوب' },
        grammarRole: 'mudaf-ilayh',
        grammarExplanations: {
          en: 'Prophet Jacob (Israel) - ancestor of Bani Israel and Zechariah.',
          ur: 'نبی یعقوب (اسرائیل) - بنی اسرائیل اور زکریا کے جد امجد۔',
        },
      },
      {
        id: '19:6:6',
        position: 6,
        arabic: 'وَاجْعَلْهُ',
        transliteration: 'wajaalhu',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ج ع ل',
        meaning: { en: 'and make him', ur: 'اور اسے بنا' },
        grammarRole: 'verb',
        features: { aspect: 'imperative' },
      },
      {
        id: '19:6:7',
        position: 7,
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: { en: 'my Lord', ur: 'اے رب' },
        grammarRole: 'munada',
      },
      {
        id: '19:6:8',
        position: 8,
        arabic: 'رَضِيًّا',
        transliteration: 'radiyyan',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ر ض ي',
        lemma: 'رَضِيّ',
        meaning: { en: 'pleasing/accepted', ur: 'پسندیدہ' },
        grammarRole: 'mafool-thani',
        case: 'mansoob',
      },
    ],
    structure: {
      type: 'continuation-request',
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
      ],
      explanation: {
        en: 'Details of the heir request: inheriting prophethood + being pleasing to Allah',
        ur: 'وارث کی درخواست کی تفصیل: نبوت کی وراثت + اللہ کی رضا',
      },
    },
  },

  7: {
    text: 'يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَىٰ لَمْ نَجْعَل لَّهُ مِن قَبْلُ سَمِيًّا',
    translation: {
      en: '[He was told], "O Zechariah, indeed We give you good tidings of a boy whose name will be John. We have not assigned to any before [this] name."',
      ur: 'اے زکریا! ہم تمہیں ایک لڑکے کی خوشخبری دیتے ہیں جس کا نام یحییٰ ہوگا، ہم نے پہلے کسی کا یہ نام نہیں رکھا۔',
    },
    words: [
      {
        id: '19:7:1',
        position: 1,
        arabic: 'يَا',
        transliteration: 'ya',
        pos: ['VOC'],
        posLabel: 'VOC',
        root: null,
        meaning: { en: 'O', ur: 'اے' },
        grammarRole: 'harf-nida',
      },
      {
        id: '19:7:2',
        position: 2,
        arabic: 'زَكَرِيَّا',
        transliteration: 'Zakariyya',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        meaning: { en: 'Zechariah', ur: 'زکریا' },
        grammarRole: 'munada',
      },
      {
        id: '19:7:3',
        position: 3,
        arabic: 'إِنَّا',
        transliteration: 'inna',
        pos: ['ACC', 'PRON'],
        posLabel: 'ACC+PRON',
        root: null,
        meaning: { en: 'Indeed We', ur: 'بیشک ہم' },
        grammarRole: 'tawkid',
      },
      {
        id: '19:7:4',
        position: 4,
        arabic: 'نُبَشِّرُكَ',
        transliteration: 'nubashshiruka',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ب ش ر',
        lemma: 'بَشَّرَ',
        meaning: { en: 'We give you good tidings', ur: 'ہم تمہیں خوشخبری دیتے ہیں' },
        grammarRole: 'khabar-inna',
        features: { aspect: 'imperfect', form: 'II' },
      },
      {
        id: '19:7:5',
        position: 5,
        arabic: 'بِغُلَامٍ',
        transliteration: 'bi-ghulamin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'غ ل م',
        lemma: 'غُلَام',
        meaning: { en: 'of a boy', ur: 'ایک لڑکے کی' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '19:7:6',
        position: 6,
        arabic: 'اسْمُهُ',
        transliteration: 'ismuhu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'س م و',
        lemma: 'اسم',
        meaning: { en: 'his name', ur: 'اس کا نام' },
        grammarRole: 'mubtada',
        case: 'marfoo',
      },
      {
        id: '19:7:7',
        position: 7,
        arabic: 'يَحْيَىٰ',
        transliteration: 'Yahya',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'ح ي ي',
        lemma: 'يَحْيَى',
        meaning: { en: 'John (Yahya)', ur: 'یحییٰ' },
        grammarRole: 'khabar',
        advanced: {
          balagha: {
            title: { en: 'Meaningful Name', ur: 'بامعنی نام' },
            explanation: {
              en: 'يَحْيَى from root ح ي ي (to live) - "He shall live" or "gives life". Unique name never given before.',
              ur: 'يَحْيَى جڑ ح ي ي سے (زندہ رہنا) - "وہ زندہ رہے گا" یا "زندگی دینے والا"۔ منفرد نام پہلے نہیں دیا گیا۔',
            },
          },
        },
      },
      {
        id: '19:7:8',
        position: 8,
        arabic: 'لَمْ',
        transliteration: 'lam',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: { en: 'not', ur: 'نہیں' },
        grammarRole: 'nafi',
      },
      {
        id: '19:7:9',
        position: 9,
        arabic: 'نَجْعَل',
        transliteration: 'najal',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ع ل',
        meaning: { en: 'We have assigned', ur: 'ہم نے رکھا' },
        grammarRole: 'verb',
        case: 'majzoom',
      },
      {
        id: '19:7:10',
        position: 10,
        arabic: 'لَّهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'to him', ur: 'اس کا' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '19:7:11',
        position: 11,
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '19:7:12',
        position: 12,
        arabic: 'قَبْلُ',
        transliteration: 'qablu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ب ل',
        meaning: { en: 'before', ur: 'پہلے' },
        grammarRole: 'majroor',
      },
      {
        id: '19:7:13',
        position: 13,
        arabic: 'سَمِيًّا',
        transliteration: 'samiyyan',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        lemma: 'سَمِيّ',
        meaning: { en: 'a namesake', ur: 'ہم نام' },
        grammarRole: 'mafool-thani',
        case: 'mansoob',
      },
    ],
    structure: {
      type: 'divine-response',
      relationships: [
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 8, to: 9, label: 'نفی + فعل' },
      ],
      explanation: {
        en: 'Allah\'s glad tidings: a son named Yahya - a unique name',
        ur: 'اللہ کی خوشخبری: یحییٰ نام کا بیٹا - ایک منفرد نام',
      },
    },
  },

  8: {
    text: 'قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَكَانَتِ امْرَأَتِي عَاقِرًا وَقَدْ بَلَغْتُ مِنَ الْكِبَرِ عِتِيًّا',
    translation: {
      en: 'He said, "My Lord, how will I have a boy when my wife has been barren and I have reached extreme old age?"',
      ur: 'کہا: اے میرے رب! میرے ہاں لڑکا کیسے ہوگا جبکہ میری بیوی بانجھ ہے اور میں بڑھاپے کی انتہا کو پہنچ چکا ہوں۔',
    },
    words: [
      {
        id: '19:8:1',
        position: 1,
        arabic: 'قَالَ',
        transliteration: 'qala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'He said', ur: 'کہا' },
        grammarRole: 'verb',
      },
      {
        id: '19:8:2',
        position: 2,
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: { en: 'My Lord', ur: 'اے میرے رب' },
        grammarRole: 'munada',
      },
      {
        id: '19:8:3',
        position: 3,
        arabic: 'أَنَّىٰ',
        transliteration: 'anna',
        pos: ['INT'],
        posLabel: 'INT',
        root: null,
        meaning: { en: 'how', ur: 'کیسے' },
        grammarRole: 'istifham',
        grammarExplanations: {
          en: 'Interrogative of wonder, not doubt - amazement at Allah\'s power.',
          ur: 'تعجب کا سوال، شک نہیں - اللہ کی قدرت پر حیرت۔',
        },
      },
      {
        id: '19:8:4',
        position: 4,
        arabic: 'يَكُونُ',
        transliteration: 'yakunu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: { en: 'will be', ur: 'ہوگا' },
        grammarRole: 'verb',
      },
      {
        id: '19:8:5',
        position: 5,
        arabic: 'لِي',
        transliteration: 'li',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'for me', ur: 'میرے' },
        grammarRole: 'khabar-muqaddam',
      },
      {
        id: '19:8:6',
        position: 6,
        arabic: 'غُلَامٌ',
        transliteration: 'ghulamun',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ ل م',
        meaning: { en: 'a boy', ur: 'لڑکا' },
        grammarRole: 'ism-kan',
        case: 'marfoo',
      },
      {
        id: '19:8:7',
        position: 7,
        arabic: 'وَكَانَتِ',
        transliteration: 'wa-kanat',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ك و ن',
        meaning: { en: 'and has been', ur: 'جبکہ ہے' },
        grammarRole: 'hal',
      },
      {
        id: '19:8:8',
        position: 8,
        arabic: 'امْرَأَتِي',
        transliteration: 'imraati',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'م ر أ',
        meaning: { en: 'my wife', ur: 'میری بیوی' },
        grammarRole: 'ism-kan',
      },
      {
        id: '19:8:9',
        position: 9,
        arabic: 'عَاقِرًا',
        transliteration: 'aqiran',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ق ر',
        meaning: { en: 'barren', ur: 'بانجھ' },
        grammarRole: 'khabar-kan',
      },
      {
        id: '19:8:10',
        position: 10,
        arabic: 'وَقَدْ',
        transliteration: 'wa-qad',
        pos: ['CONJ', 'CERT'],
        posLabel: 'CONJ+CERT',
        root: null,
        meaning: { en: 'and indeed', ur: 'اور یقیناً' },
        grammarRole: 'tahqiq',
      },
      {
        id: '19:8:11',
        position: 11,
        arabic: 'بَلَغْتُ',
        transliteration: 'balaghtu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ب ل غ',
        lemma: 'بَلَغَ',
        meaning: { en: 'I have reached', ur: 'میں پہنچ گیا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '1st', number: 'singular' },
      },
      {
        id: '19:8:12',
        position: 12,
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'of', ur: 'کی' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '19:8:13',
        position: 13,
        arabic: 'الْكِبَرِ',
        transliteration: 'al-kibari',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ب ر',
        lemma: 'كِبَر',
        meaning: { en: 'old age', ur: 'بڑھاپے' },
        grammarRole: 'majroor',
      },
      {
        id: '19:8:14',
        position: 14,
        arabic: 'عِتِيًّا',
        transliteration: 'itiyyan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ت و',
        lemma: 'عِتِيّ',
        meaning: { en: 'extreme/decrepit stage', ur: 'انتہا' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
        advanced: {
          balagha: {
            title: { en: 'Extreme Old Age', ur: 'بڑھاپے کی انتہا' },
            explanation: {
              en: 'عِتِيّ - beyond normal old age, extremely advanced age where bones become dry.',
              ur: 'عِتِيّ - عام بڑھاپے سے آگے، انتہائی بڑھاپا جہاں ہڈیاں خشک ہو جائیں۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'wonder-question',
      relationships: [
        { from: 3, to: 4, label: 'استفهام + فعل' },
        { from: 4, to: 7, label: 'حال' },
      ],
      explanation: {
        en: 'Zechariah expresses wonder at the miracle - wife barren, he extremely old',
        ur: 'زکریا معجزے پر حیرت کا اظہار - بیوی بانجھ، وہ انتہائی بوڑھے',
      },
    },
  },

  9: {
    text: 'قَالَ كَذَٰلِكَ قَالَ رَبُّكَ هُوَ عَلَيَّ هَيِّنٌ وَقَدْ خَلَقْتُكَ مِن قَبْلُ وَلَمْ تَكُ شَيْئًا',
    translation: {
      en: 'He said, "Thus [it will be]; your Lord says, \'It is easy for Me, for I created you before, while you were nothing.\'"',
      ur: 'فرمایا: ایسے ہی ہوگا، تیرے رب نے فرمایا کہ یہ مجھ پر آسان ہے اور میں نے تجھے پہلے پیدا کیا جب تو کچھ نہیں تھا۔',
    },
    words: [
      {
        id: '19:9:1',
        position: 1,
        arabic: 'قَالَ',
        transliteration: 'qala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'He said', ur: 'فرمایا' },
        grammarRole: 'verb',
      },
      {
        id: '19:9:2',
        position: 2,
        arabic: 'كَذَٰلِكَ',
        transliteration: 'kadhalika',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: { en: 'Thus/Like that', ur: 'ایسے ہی' },
        grammarRole: 'khabar',
      },
      {
        id: '19:9:3',
        position: 3,
        arabic: 'قَالَ',
        transliteration: 'qala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'says', ur: 'فرمایا' },
        grammarRole: 'verb',
      },
      {
        id: '19:9:4',
        position: 4,
        arabic: 'رَبُّكَ',
        transliteration: 'Rabbuka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: { en: 'your Lord', ur: 'تیرا رب' },
        grammarRole: 'fail',
        case: 'marfoo',
      },
      {
        id: '19:9:5',
        position: 5,
        arabic: 'هُوَ',
        transliteration: 'huwa',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: { en: 'it', ur: 'یہ' },
        grammarRole: 'mubtada',
      },
      {
        id: '19:9:6',
        position: 6,
        arabic: 'عَلَيَّ',
        transliteration: 'alayya',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'for Me', ur: 'مجھ پر' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '19:9:7',
        position: 7,
        arabic: 'هَيِّنٌ',
        transliteration: 'hayyinun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ه و ن',
        lemma: 'هَيِّن',
        meaning: { en: 'easy', ur: 'آسان' },
        grammarRole: 'khabar',
        case: 'marfoo',
        advanced: {
          balagha: {
            title: { en: 'Nothing is Difficult for Allah', ur: 'اللہ پر کچھ مشکل نہیں' },
            explanation: {
              en: 'What seems impossible to humans is هَيِّن (easy) for Allah. His power has no limits.',
              ur: 'جو انسانوں کو ناممکن لگتا ہے وہ اللہ کے لیے آسان ہے۔ اس کی قدرت لامحدود ہے۔',
            },
          },
        },
      },
      {
        id: '19:9:8',
        position: 8,
        arabic: 'وَقَدْ',
        transliteration: 'wa-qad',
        pos: ['CONJ', 'CERT'],
        posLabel: 'CONJ+CERT',
        root: null,
        meaning: { en: 'and indeed', ur: 'اور بیشک' },
        grammarRole: 'tahqiq',
      },
      {
        id: '19:9:9',
        position: 9,
        arabic: 'خَلَقْتُكَ',
        transliteration: 'khalaqtuka',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'خ ل ق',
        lemma: 'خَلَقَ',
        meaning: { en: 'I created you', ur: 'میں نے تجھے پیدا کیا' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '1st', number: 'singular' },
      },
      {
        id: '19:9:10',
        position: 10,
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: { en: 'from', ur: 'سے' },
        grammarRole: 'harf-jarr',
      },
      {
        id: '19:9:11',
        position: 11,
        arabic: 'قَبْلُ',
        transliteration: 'qablu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ب ل',
        meaning: { en: 'before', ur: 'پہلے' },
        grammarRole: 'majroor',
      },
      {
        id: '19:9:12',
        position: 12,
        arabic: 'وَلَمْ',
        transliteration: 'wa-lam',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: { en: 'and not', ur: 'اور نہیں' },
        grammarRole: 'nafi',
      },
      {
        id: '19:9:13',
        position: 13,
        arabic: 'تَكُ',
        transliteration: 'taku',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: { en: 'you were', ur: 'تو تھا' },
        grammarRole: 'verb',
        case: 'majzoom',
        grammarExplanations: {
          en: 'Shortened form of تَكُن - the noon dropped for lightness.',
          ur: 'تَکُن کی مختصر شکل - نون خفت کے لیے گر گیا۔',
        },
      },
      {
        id: '19:9:14',
        position: 14,
        arabic: 'شَيْئًا',
        transliteration: 'shayan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ي أ',
        lemma: 'شَيْء',
        meaning: { en: 'anything', ur: 'کچھ' },
        grammarRole: 'khabar-kan',
        case: 'mansoob',
      },
    ],
    structure: {
      type: 'divine-reassurance',
      relationships: [
        { from: 1, to: 4, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 7, label: 'مبتدأ + خبر' },
        { from: 12, to: 13, label: 'نفی + فعل' },
      ],
      explanation: {
        en: 'Allah\'s response: it is easy - He created Zechariah from nothing before',
        ur: 'اللہ کا جواب: یہ آسان ہے - اس نے زکریا کو پہلے عدم سے پیدا کیا',
      },
    },
  },

  10: {
    text: 'قَالَ رَبِّ اجْعَل لِّي آيَةً ۚ قَالَ آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَ لَيَالٍ سَوِيًّا',
    translation: {
      en: 'He said, "My Lord, make for me a sign." He said, "Your sign is that you will not speak to the people for three nights, [being] sound."',
      ur: 'کہا: اے میرے رب! میرے لیے کوئی نشانی مقرر کر۔ فرمایا: تیری نشانی یہ ہے کہ تو تین راتیں لوگوں سے بات نہیں کر سکے گا حالانکہ تو تندرست ہوگا۔',
    },
    words: [
      {
        id: '19:10:1',
        position: 1,
        arabic: 'قَالَ',
        transliteration: 'qala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'He said', ur: 'کہا' },
        grammarRole: 'verb',
      },
      {
        id: '19:10:2',
        position: 2,
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: { en: 'My Lord', ur: 'اے میرے رب' },
        grammarRole: 'munada',
      },
      {
        id: '19:10:3',
        position: 3,
        arabic: 'اجْعَل',
        transliteration: 'ijal',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ع ل',
        meaning: { en: 'make', ur: 'بنا دے' },
        grammarRole: 'verb',
        features: { aspect: 'imperative' },
      },
      {
        id: '19:10:4',
        position: 4,
        arabic: 'لِّي',
        transliteration: 'li',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: { en: 'for me', ur: 'میرے لیے' },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '19:10:5',
        position: 5,
        arabic: 'آيَةً',
        transliteration: 'ayatan',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ي ي',
        lemma: 'آيَة',
        meaning: { en: 'a sign', ur: 'نشانی' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '19:10:6',
        position: 6,
        arabic: 'قَالَ',
        transliteration: 'qala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: { en: 'He said', ur: 'فرمایا' },
        grammarRole: 'verb',
      },
      {
        id: '19:10:7',
        position: 7,
        arabic: 'آيَتُكَ',
        transliteration: 'ayatuka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'أ ي ي',
        meaning: { en: 'Your sign', ur: 'تیری نشانی' },
        grammarRole: 'mubtada',
        case: 'marfoo',
      },
      {
        id: '19:10:8',
        position: 8,
        arabic: 'أَلَّا',
        transliteration: 'alla',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: { en: 'that not', ur: 'کہ نہیں' },
        grammarRole: 'masdariyya',
      },
      {
        id: '19:10:9',
        position: 9,
        arabic: 'تُكَلِّمَ',
        transliteration: 'tukallima',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ل م',
        lemma: 'كَلَّمَ',
        meaning: { en: 'you speak to', ur: 'تو بات کرے' },
        grammarRole: 'khabar',
        features: { aspect: 'imperfect', mood: 'subjunctive', form: 'II' },
      },
      {
        id: '19:10:10',
        position: 10,
        arabic: 'النَّاسَ',
        transliteration: 'an-nasa',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        lemma: 'نَاس',
        meaning: { en: 'the people', ur: 'لوگوں سے' },
        grammarRole: 'mafool-bih',
        case: 'mansoob',
      },
      {
        id: '19:10:11',
        position: 11,
        arabic: 'ثَلَاثَ',
        transliteration: 'thalatha',
        pos: ['NUM'],
        posLabel: 'NUM',
        root: 'ث ل ث',
        meaning: { en: 'three', ur: 'تین' },
        grammarRole: 'zarf',
        case: 'mansoob',
      },
      {
        id: '19:10:12',
        position: 12,
        arabic: 'لَيَالٍ',
        transliteration: 'layalin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ل ي ل',
        lemma: 'لَيْلَة',
        meaning: { en: 'nights', ur: 'راتیں' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
      },
      {
        id: '19:10:13',
        position: 13,
        arabic: 'سَوِيًّا',
        transliteration: 'sawiyyan',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'س و ي',
        lemma: 'سَوِيّ',
        meaning: { en: 'sound/healthy', ur: 'تندرست' },
        grammarRole: 'hal',
        case: 'mansoob',
        advanced: {
          balagha: {
            title: { en: 'Miraculous Sign', ur: 'معجزاتی نشانی' },
            explanation: {
              en: 'Unable to speak despite being healthy - not due to illness but divine sign.',
              ur: 'تندرست ہونے کے باوجود بولنے سے قاصر - بیماری نہیں بلکہ الٰہی نشانی۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'request-response',
      relationships: [
        { from: 7, to: 9, label: 'مبتدأ + خبر' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 9, to: 13, label: 'حال' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
      ],
      explanation: {
        en: 'Zechariah asks for a sign - given inability to speak for three nights while healthy',
        ur: 'زکریا نشانی مانگتے ہیں - تندرست ہوتے ہوئے تین راتیں بولنے سے قاصر',
      },
    },
  },

  11: {
    text: 'فَخَرَجَ عَلَىٰ قَوْمِهِ مِنَ الْمِحْرَابِ فَأَوْحَىٰ إِلَيْهِمْ أَن سَبِّحُوا بُكْرَةً وَعَشِيًّا',
    translation: {
      en: 'So he came out to his people from the prayer chamber and signaled them to exalt [Allah] in the morning and afternoon.',
      ur: 'پھر وہ محراب سے اپنی قوم کے سامنے آیا اور اشارے سے کہا کہ صبح و شام تسبیح کرو۔',
    },
    words: [
      { id: '19:11:1', position: 1, arabic: 'فَخَرَجَ', transliteration: 'fakharaja', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'خ ر ج', meaning: { en: 'So he came out', ur: 'پھر وہ نکلا' }, grammarRole: 'verb', case: null },
      { id: '19:11:2', position: 2, arabic: 'عَلَىٰ', transliteration: 'alaa', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'پر' }, grammarRole: 'harf-jarr' },
      { id: '19:11:3', position: 3, arabic: 'قَوْمِهِ', transliteration: 'qawmihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق و م', meaning: { en: 'his people', ur: 'اپنی قوم' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:11:4', position: 4, arabic: 'مِنَ', transliteration: 'mina', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf-jarr' },
      { id: '19:11:5', position: 5, arabic: 'الْمِحْرَابِ', transliteration: 'al-mihraabi', pos: ['N'], posLabel: 'N', root: 'ح ر ب', meaning: { en: 'the prayer chamber', ur: 'محراب' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:11:6', position: 6, arabic: 'فَأَوْحَىٰ', transliteration: 'fa-awhaa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'و ح ي', meaning: { en: 'and he signaled', ur: 'پھر اشارہ کیا' }, grammarRole: 'verb' },
      { id: '19:11:7', position: 7, arabic: 'إِلَيْهِمْ', transliteration: 'ilayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to them', ur: 'ان کی طرف' }, grammarRole: 'jarr-majroor' },
      { id: '19:11:8', position: 8, arabic: 'أَن', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'that', ur: 'کہ' }, grammarRole: 'harf-masdariyya' },
      { id: '19:11:9', position: 9, arabic: 'سَبِّحُوا', transliteration: 'sabbihu', pos: ['V'], posLabel: 'V', root: 'س ب ح', meaning: { en: 'exalt [Allah]', ur: 'تسبیح کرو' }, grammarRole: 'verb' },
      { id: '19:11:10', position: 10, arabic: 'بُكْرَةً', transliteration: 'bukratan', pos: ['N'], posLabel: 'N', root: 'ب ك ر', meaning: { en: 'in the morning', ur: 'صبح' }, grammarRole: 'zarf', case: 'mansoob' },
      { id: '19:11:11', position: 11, arabic: 'وَعَشِيًّا', transliteration: 'wa-ashiyyan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ع ش و', meaning: { en: 'and afternoon', ur: 'اور شام' }, grammarRole: 'matoof', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'فعل + جار ومجرور' },
        { from: 10, to: 11, label: 'عطف' },
      ],
    },
  },

  12: {
    text: 'يَا يَحْيَىٰ خُذِ الْكِتَابَ بِقُوَّةٍ وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا',
    translation: {
      en: '[Allah said], "O Yahya, take the Scripture with determination." And We gave him judgement [while yet] a boy.',
      ur: 'اے یحییٰ! کتاب کو مضبوطی سے پکڑو۔ اور ہم نے اسے بچپن ہی میں حکمت دے دی۔',
    },
    words: [
      { id: '19:12:1', position: 1, arabic: 'يَا', transliteration: 'yaa', pos: ['VOC'], posLabel: 'VOC', root: null, meaning: { en: 'O', ur: 'اے' }, grammarRole: 'harf-nidaa' },
      { id: '19:12:2', position: 2, arabic: 'يَحْيَىٰ', transliteration: 'Yahyaa', pos: ['PN'], posLabel: 'PN', root: null, meaning: { en: 'Yahya (John)', ur: 'یحییٰ' }, grammarRole: 'munada' },
      { id: '19:12:3', position: 3, arabic: 'خُذِ', transliteration: 'khudhi', pos: ['V'], posLabel: 'V', root: 'أ خ ذ', meaning: { en: 'take', ur: 'پکڑو' }, grammarRole: 'verb' },
      { id: '19:12:4', position: 4, arabic: 'الْكِتَابَ', transliteration: 'al-kitaaba', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Scripture', ur: 'کتاب کو' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:12:5', position: 5, arabic: 'بِقُوَّةٍ', transliteration: 'bi-quwwatin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ق و ي', meaning: { en: 'with determination', ur: 'مضبوطی سے' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:12:6', position: 6, arabic: 'وَآتَيْنَاهُ', transliteration: 'wa-aataynaahu', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'أ ت ي', meaning: { en: 'And We gave him', ur: 'اور ہم نے اسے دی' }, grammarRole: 'verb' },
      { id: '19:12:7', position: 7, arabic: 'الْحُكْمَ', transliteration: 'al-hukma', pos: ['N'], posLabel: 'N', root: 'ح ك م', meaning: { en: 'judgement/wisdom', ur: 'حکمت' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:12:8', position: 8, arabic: 'صَبِيًّا', transliteration: 'sabiyyan', pos: ['N'], posLabel: 'N', root: 'ص ب و', meaning: { en: 'while a boy', ur: 'بچپن میں' }, grammarRole: 'hal', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نداء' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
      ],
    },
  },

  13: {
    text: 'وَحَنَانًا مِّن لَّدُنَّا وَزَكَاةً وَكَانَ تَقِيًّا',
    translation: {
      en: 'And affection from Us and purity, and he was fearing of Allah.',
      ur: 'اور ہماری طرف سے محبت اور پاکیزگی، اور وہ پرہیزگار تھا۔',
    },
    words: [
      { id: '19:13:1', position: 1, arabic: 'وَحَنَانًا', transliteration: 'wa-hanaanan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ح ن ن', meaning: { en: 'And affection', ur: 'اور شفقت' }, grammarRole: 'matoof', case: 'mansoob' },
      { id: '19:13:2', position: 2, arabic: 'مِّن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf-jarr' },
      { id: '19:13:3', position: 3, arabic: 'لَّدُنَّا', transliteration: 'ladunnaa', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: null, meaning: { en: 'Us (Ourselves)', ur: 'ہماری طرف سے' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:13:4', position: 4, arabic: 'وَزَكَاةً', transliteration: 'wa-zakaatan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ز ك و', meaning: { en: 'and purity', ur: 'اور پاکیزگی' }, grammarRole: 'matoof', case: 'mansoob' },
      { id: '19:13:5', position: 5, arabic: 'وَكَانَ', transliteration: 'wa-kaana', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'and he was', ur: 'اور وہ تھا' }, grammarRole: 'verb' },
      { id: '19:13:6', position: 6, arabic: 'تَقِيًّا', transliteration: 'taqiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'و ق ي', meaning: { en: 'God-fearing', ur: 'پرہیزگار' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 4, label: 'عطف' },
        { from: 5, to: 6, label: 'كان + خبر' },
      ],
    },
  },

  14: {
    text: 'وَبَرًّا بِوَالِدَيْهِ وَلَمْ يَكُن جَبَّارًا عَصِيًّا',
    translation: {
      en: 'And dutiful to his parents, and he was not a disobedient tyrant.',
      ur: 'اور اپنے والدین سے نیک سلوک کرنے والا تھا، اور وہ سرکش نافرمان نہیں تھا۔',
    },
    words: [
      { id: '19:14:1', position: 1, arabic: 'وَبَرًّا', transliteration: 'wa-barran', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ب ر ر', meaning: { en: 'And dutiful', ur: 'اور فرمانبردار' }, grammarRole: 'matoof', case: 'mansoob' },
      { id: '19:14:2', position: 2, arabic: 'بِوَالِدَيْهِ', transliteration: 'bi-waalidayhi', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'و ل د', meaning: { en: 'to his parents', ur: 'اپنے والدین سے' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:14:3', position: 3, arabic: 'وَلَمْ', transliteration: 'wa-lam', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' }, grammarRole: 'harf-jazm' },
      { id: '19:14:4', position: 4, arabic: 'يَكُن', transliteration: 'yakun', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'was he', ur: 'تھا وہ' }, grammarRole: 'verb' },
      { id: '19:14:5', position: 5, arabic: 'جَبَّارًا', transliteration: 'jabbaaran', pos: ['N'], posLabel: 'N', root: 'ج ب ر', meaning: { en: 'a tyrant', ur: 'سرکش' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
      { id: '19:14:6', position: 6, arabic: 'عَصِيًّا', transliteration: 'asiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ص ي', meaning: { en: 'disobedient', ur: 'نافرمان' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'كان + خبر' },
        { from: 5, to: 6, label: 'موصوف + صفة' },
      ],
    },
  },

  15: {
    text: 'وَسَلَامٌ عَلَيْهِ يَوْمَ وُلِدَ وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيًّا',
    translation: {
      en: 'And peace be upon him the day he was born and the day he dies and the day he is raised alive.',
      ur: 'اور اس پر سلام ہو جس دن وہ پیدا ہوا اور جس دن مرے گا اور جس دن زندہ اٹھایا جائے گا۔',
    },
    words: [
      { id: '19:15:1', position: 1, arabic: 'وَسَلَامٌ', transliteration: 'wa-salaamun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'س ل م', meaning: { en: 'And peace', ur: 'اور سلام' }, grammarRole: 'mubtada', case: 'marfoo' },
      { id: '19:15:2', position: 2, arabic: 'عَلَيْهِ', transliteration: 'alayhi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon him', ur: 'اس پر' }, grammarRole: 'khabar' },
      { id: '19:15:3', position: 3, arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'the day', ur: 'جس دن' }, grammarRole: 'zarf', case: 'mansoob' },
      { id: '19:15:4', position: 4, arabic: 'وُلِدَ', transliteration: 'wulida', pos: ['V'], posLabel: 'V', root: 'و ل د', meaning: { en: 'he was born', ur: 'وہ پیدا ہوا' }, grammarRole: 'verb' },
      { id: '19:15:5', position: 5, arabic: 'وَيَوْمَ', transliteration: 'wa-yawma', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ي و م', meaning: { en: 'and the day', ur: 'اور جس دن' }, grammarRole: 'matoof' },
      { id: '19:15:6', position: 6, arabic: 'يَمُوتُ', transliteration: 'yamuutu', pos: ['V'], posLabel: 'V', root: 'م و ت', meaning: { en: 'he dies', ur: 'وہ مرے گا' }, grammarRole: 'verb' },
      { id: '19:15:7', position: 7, arabic: 'وَيَوْمَ', transliteration: 'wa-yawma', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ي و م', meaning: { en: 'and the day', ur: 'اور جس دن' }, grammarRole: 'matoof' },
      { id: '19:15:8', position: 8, arabic: 'يُبْعَثُ', transliteration: 'yub\'athu', pos: ['V'], posLabel: 'V', root: 'ب ع ث', meaning: { en: 'he is raised', ur: 'اٹھایا جائے گا' }, grammarRole: 'verb' },
      { id: '19:15:9', position: 9, arabic: 'حَيًّا', transliteration: 'hayyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ي ي', meaning: { en: 'alive', ur: 'زندہ' }, grammarRole: 'hal', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 5, label: 'عطف' },
        { from: 5, to: 7, label: 'عطف' },
      ],
    },
  },

  16: {
    text: 'وَاذْكُرْ فِي الْكِتَابِ مَرْيَمَ إِذِ انتَبَذَتْ مِنْ أَهْلِهَا مَكَانًا شَرْقِيًّا',
    translation: {
      en: 'And mention in the Book [the story of] Mary, when she withdrew from her family to a place facing east.',
      ur: 'اور کتاب میں مریم کا ذکر کرو، جب وہ اپنے گھر والوں سے الگ ہو کر مشرقی جگہ چلی گئی۔',
    },
    words: [
      { id: '19:16:1', position: 1, arabic: 'وَاذْكُرْ', transliteration: 'wa-udhkur', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ذ ك ر', meaning: { en: 'And mention', ur: 'اور ذکر کرو' }, grammarRole: 'verb' },
      { id: '19:16:2', position: 2, arabic: 'فِي', transliteration: 'fii', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' }, grammarRole: 'harf-jarr' },
      { id: '19:16:3', position: 3, arabic: 'الْكِتَابِ', transliteration: 'al-kitaabi', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Book', ur: 'کتاب' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:16:4', position: 4, arabic: 'مَرْيَمَ', transliteration: 'Maryama', pos: ['PN'], posLabel: 'PN', root: null, meaning: { en: 'Mary', ur: 'مریم' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:16:5', position: 5, arabic: 'إِذِ', transliteration: 'idhi', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' }, grammarRole: 'zarf' },
      { id: '19:16:6', position: 6, arabic: 'انتَبَذَتْ', transliteration: 'intabadhat', pos: ['V'], posLabel: 'V', root: 'ن ب ذ', meaning: { en: 'she withdrew', ur: 'وہ الگ ہوئی' }, grammarRole: 'verb' },
      { id: '19:16:7', position: 7, arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf-jarr' },
      { id: '19:16:8', position: 8, arabic: 'أَهْلِهَا', transliteration: 'ahlihaa', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ه ل', meaning: { en: 'her family', ur: 'اپنے گھر والوں' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:16:9', position: 9, arabic: 'مَكَانًا', transliteration: 'makaanan', pos: ['N'], posLabel: 'N', root: 'م ك ن', meaning: { en: 'a place', ur: 'ایک جگہ' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:16:10', position: 10, arabic: 'شَرْقِيًّا', transliteration: 'sharqiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ش ر ق', meaning: { en: 'eastern', ur: 'مشرقی' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 4, label: 'فعل + مفعول به' },
        { from: 6, to: 9, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'موصوف + صفة' },
      ],
    },
  },

  17: {
    text: 'فَاتَّخَذَتْ مِن دُونِهِمْ حِجَابًا فَأَرْسَلْنَا إِلَيْهَا رُوحَنَا فَتَمَثَّلَ لَهَا بَشَرًا سَوِيًّا',
    translation: {
      en: 'And she took a screen apart from them. Then We sent to her Our Angel, and he represented himself to her as a well-proportioned man.',
      ur: 'پھر اس نے ان سے پردہ کر لیا۔ پھر ہم نے اپنا فرشتہ بھیجا، وہ ایک مکمل انسان کی شکل میں ظاہر ہوا۔',
    },
    words: [
      { id: '19:17:1', position: 1, arabic: 'فَاتَّخَذَتْ', transliteration: 'fa-ittakhadhat', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'أ خ ذ', meaning: { en: 'Then she took', ur: 'پھر اس نے لگایا' }, grammarRole: 'verb' },
      { id: '19:17:2', position: 2, arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf-jarr' },
      { id: '19:17:3', position: 3, arabic: 'دُونِهِمْ', transliteration: 'duunihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'د و ن', meaning: { en: 'apart from them', ur: 'ان کے علاوہ' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:17:4', position: 4, arabic: 'حِجَابًا', transliteration: 'hijaaban', pos: ['N'], posLabel: 'N', root: 'ح ج ب', meaning: { en: 'a screen', ur: 'پردہ' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:17:5', position: 5, arabic: 'فَأَرْسَلْنَا', transliteration: 'fa-arsalnaa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ر س ل', meaning: { en: 'Then We sent', ur: 'پھر ہم نے بھیجا' }, grammarRole: 'verb' },
      { id: '19:17:6', position: 6, arabic: 'إِلَيْهَا', transliteration: 'ilayhaa', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to her', ur: 'اس کی طرف' }, grammarRole: 'jarr-majroor' },
      { id: '19:17:7', position: 7, arabic: 'رُوحَنَا', transliteration: 'ruuhanaa', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر و ح', meaning: { en: 'Our Angel (Jibreel)', ur: 'اپنا فرشتہ' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:17:8', position: 8, arabic: 'فَتَمَثَّلَ', transliteration: 'fa-tamaththala', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'م ث ل', meaning: { en: 'and he represented himself', ur: 'پھر ظاہر ہوا' }, grammarRole: 'verb' },
      { id: '19:17:9', position: 9, arabic: 'لَهَا', transliteration: 'lahaa', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to her', ur: 'اس کے سامنے' }, grammarRole: 'jarr-majroor' },
      { id: '19:17:10', position: 10, arabic: 'بَشَرًا', transliteration: 'basharan', pos: ['N'], posLabel: 'N', root: 'ب ش ر', meaning: { en: 'as a man', ur: 'انسان' }, grammarRole: 'hal', case: 'mansoob' },
      { id: '19:17:11', position: 11, arabic: 'سَوِيًّا', transliteration: 'sawiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'س و ي', meaning: { en: 'well-proportioned', ur: 'مکمل' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 7, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'موصوف + صفة' },
      ],
    },
  },

  18: {
    text: 'قَالَتْ إِنِّي أَعُوذُ بِالرَّحْمَٰنِ مِنكَ إِن كُنتَ تَقِيًّا',
    translation: {
      en: 'She said, "Indeed I seek refuge in the Most Merciful from you, if you should be fearing of Allah."',
      ur: 'اس نے کہا میں تجھ سے رحمان کی پناہ مانگتی ہوں اگر تو اللہ سے ڈرنے والا ہے۔',
    },
    words: [
      { id: '19:18:1', position: 1, arabic: 'قَالَتْ', transliteration: 'qaalat', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'She said', ur: 'اس نے کہا' }, grammarRole: 'verb' },
      { id: '19:18:2', position: 2, arabic: 'إِنِّي', transliteration: 'innii', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I', ur: 'بے شک میں' }, grammarRole: 'inna-ism' },
      { id: '19:18:3', position: 3, arabic: 'أَعُوذُ', transliteration: 'a\'uudhu', pos: ['V'], posLabel: 'V', root: 'ع و ذ', meaning: { en: 'seek refuge', ur: 'پناہ مانگتی ہوں' }, grammarRole: 'khabar-inna' },
      { id: '19:18:4', position: 4, arabic: 'بِالرَّحْمَٰنِ', transliteration: 'bi-al-Rahmaani', pos: ['P', 'N'], posLabel: 'P+N', root: 'ر ح م', meaning: { en: 'in the Most Merciful', ur: 'رحمان کی' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:18:5', position: 5, arabic: 'مِنكَ', transliteration: 'minka', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from you', ur: 'تجھ سے' }, grammarRole: 'jarr-majroor' },
      { id: '19:18:6', position: 6, arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' }, grammarRole: 'harf-shart' },
      { id: '19:18:7', position: 7, arabic: 'كُنتَ', transliteration: 'kunta', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'you are', ur: 'تو ہے' }, grammarRole: 'verb' },
      { id: '19:18:8', position: 8, arabic: 'تَقِيًّا', transliteration: 'taqiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'و ق ي', meaning: { en: 'fearing of Allah', ur: 'پرہیزگار' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'إنّ + خبر' },
        { from: 7, to: 8, label: 'كان + خبر' },
      ],
    },
  },

  19: {
    text: 'قَالَ إِنَّمَا أَنَا رَسُولُ رَبِّكِ لِأَهَبَ لَكِ غُلَامًا زَكِيًّا',
    translation: {
      en: 'He said, "I am only the messenger of your Lord to give you [news of] a pure boy."',
      ur: 'اس نے کہا میں تو تیرے رب کا بھیجا ہوا ہوں تاکہ تجھے ایک پاکیزہ لڑکا دوں۔',
    },
    words: [
      { id: '19:19:1', position: 1, arabic: 'قَالَ', transliteration: 'qaala', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'He said', ur: 'اس نے کہا' }, grammarRole: 'verb' },
      { id: '19:19:2', position: 2, arabic: 'إِنَّمَا', transliteration: 'innamaa', pos: ['RES'], posLabel: 'RES', root: null, meaning: { en: 'Only/Indeed', ur: 'بس' }, grammarRole: 'hasr' },
      { id: '19:19:3', position: 3, arabic: 'أَنَا', transliteration: 'anaa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'I am', ur: 'میں ہوں' }, grammarRole: 'mubtada' },
      { id: '19:19:4', position: 4, arabic: 'رَسُولُ', transliteration: 'rasuulu', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'the messenger', ur: 'بھیجا ہوا' }, grammarRole: 'khabar', case: 'marfoo' },
      { id: '19:19:5', position: 5, arabic: 'رَبِّكِ', transliteration: 'Rabbiki', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'of your Lord', ur: 'تیرے رب کا' }, grammarRole: 'mudaf-ilayh', case: 'majroor' },
      { id: '19:19:6', position: 6, arabic: 'لِأَهَبَ', transliteration: 'li-ahaba', pos: ['P', 'V'], posLabel: 'P+V', root: 'و ه ب', meaning: { en: 'to give', ur: 'تاکہ دوں' }, grammarRole: 'verb' },
      { id: '19:19:7', position: 7, arabic: 'لَكِ', transliteration: 'laki', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to you', ur: 'تجھے' }, grammarRole: 'jarr-majroor' },
      { id: '19:19:8', position: 8, arabic: 'غُلَامًا', transliteration: 'ghulaaman', pos: ['N'], posLabel: 'N', root: 'غ ل م', meaning: { en: 'a boy', ur: 'لڑکا' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:19:9', position: 9, arabic: 'زَكِيًّا', transliteration: 'zakiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ز ك و', meaning: { en: 'pure', ur: 'پاکیزہ' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 8, label: 'فعل + مفعول به' },
        { from: 8, to: 9, label: 'موصوف + صفة' },
      ],
    },
  },

  20: {
    text: 'قَالَتْ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَلَمْ يَمْسَسْنِي بَشَرٌ وَلَمْ أَكُ بَغِيًّا',
    translation: {
      en: 'She said, "How can I have a boy while no man has touched me and I have not been unchaste?"',
      ur: 'اس نے کہا میرے لڑکا کیسے ہوگا جبکہ مجھے کسی بشر نے نہیں چھوا اور نہ میں بدکار ہوں۔',
    },
    words: [
      { id: '19:20:1', position: 1, arabic: 'قَالَتْ', transliteration: 'qaalat', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'She said', ur: 'اس نے کہا' }, grammarRole: 'verb' },
      { id: '19:20:2', position: 2, arabic: 'أَنَّىٰ', transliteration: 'annaa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'How', ur: 'کیسے' }, grammarRole: 'istifhaam' },
      { id: '19:20:3', position: 3, arabic: 'يَكُونُ', transliteration: 'yakuunu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'can there be', ur: 'ہوگا' }, grammarRole: 'verb' },
      { id: '19:20:4', position: 4, arabic: 'لِي', transliteration: 'lii', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for me', ur: 'میرے لیے' }, grammarRole: 'jarr-majroor' },
      { id: '19:20:5', position: 5, arabic: 'غُلَامٌ', transliteration: 'ghulaamun', pos: ['N'], posLabel: 'N', root: 'غ ل م', meaning: { en: 'a boy', ur: 'لڑکا' }, grammarRole: 'ism-kaana', case: 'marfoo' },
      { id: '19:20:6', position: 6, arabic: 'وَلَمْ', transliteration: 'wa-lam', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'while not', ur: 'اور نہیں' }, grammarRole: 'harf-jazm' },
      { id: '19:20:7', position: 7, arabic: 'يَمْسَسْنِي', transliteration: 'yamsasnii', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'م س س', meaning: { en: 'has touched me', ur: 'مجھے چھوا' }, grammarRole: 'verb' },
      { id: '19:20:8', position: 8, arabic: 'بَشَرٌ', transliteration: 'basharun', pos: ['N'], posLabel: 'N', root: 'ب ش ر', meaning: { en: 'a man', ur: 'کسی آدمی نے' }, grammarRole: 'faa\'il', case: 'marfoo' },
      { id: '19:20:9', position: 9, arabic: 'وَلَمْ', transliteration: 'wa-lam', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہ' }, grammarRole: 'harf-jazm' },
      { id: '19:20:10', position: 10, arabic: 'أَكُ', transliteration: 'aku', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'have I been', ur: 'میں تھی' }, grammarRole: 'verb' },
      { id: '19:20:11', position: 11, arabic: 'بَغِيًّا', transliteration: 'baghiyyan', pos: ['N'], posLabel: 'N', root: 'ب غ ي', meaning: { en: 'unchaste', ur: 'بدکار' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'كان + خبر' },
      ],
    },
  },

  21: {
    text: 'قَالَ كَذَٰلِكِ قَالَ رَبُّكِ هُوَ عَلَيَّ هَيِّنٌ وَلِنَجْعَلَهُ آيَةً لِّلنَّاسِ وَرَحْمَةً مِّنَّا وَكَانَ أَمْرًا مَّقْضِيًّا',
    translation: {
      en: 'He said, "Thus [it will be]; your Lord says, \'It is easy for Me, and We will make him a sign to the people and a mercy from Us. And it is a matter [already] decreed.\'"',
      ur: 'کہا ایسے ہی ہوگا، تیرے رب نے فرمایا یہ مجھ پر آسان ہے اور ہم اسے لوگوں کے لیے نشانی اور اپنی رحمت بنائیں گے۔ اور یہ فیصلہ شدہ بات ہے۔',
    },
    words: [
      { id: '19:21:1', position: 1, arabic: 'قَالَ', transliteration: 'qaala', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'He said', ur: 'کہا' }, grammarRole: 'verb' },
      { id: '19:21:2', position: 2, arabic: 'كَذَٰلِكِ', transliteration: 'kadhaaliki', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'Thus', ur: 'ایسے ہی' }, grammarRole: 'khabar' },
      { id: '19:21:3', position: 3, arabic: 'قَالَ', transliteration: 'qaala', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'said', ur: 'فرمایا' }, grammarRole: 'verb' },
      { id: '19:21:4', position: 4, arabic: 'رَبُّكِ', transliteration: 'Rabbuki', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'تیرا رب' }, grammarRole: 'faa\'il', case: 'marfoo' },
      { id: '19:21:5', position: 5, arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'It', ur: 'یہ' }, grammarRole: 'mubtada' },
      { id: '19:21:6', position: 6, arabic: 'عَلَيَّ', transliteration: 'alayya', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for Me', ur: 'مجھ پر' }, grammarRole: 'jarr-majroor' },
      { id: '19:21:7', position: 7, arabic: 'هَيِّنٌ', transliteration: 'hayyinun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ه و ن', meaning: { en: 'easy', ur: 'آسان' }, grammarRole: 'khabar', case: 'marfoo' },
      { id: '19:21:8', position: 8, arabic: 'وَلِنَجْعَلَهُ', transliteration: 'wa-linaj\'alahu', pos: ['CONJ', 'P', 'V', 'PRON'], posLabel: 'CONJ+P+V+PRON', root: 'ج ع ل', meaning: { en: 'and to make him', ur: 'اور تاکہ بنائیں اسے' }, grammarRole: 'verb' },
      { id: '19:21:9', position: 9, arabic: 'آيَةً', transliteration: 'aayatan', pos: ['N'], posLabel: 'N', root: 'أ ي ي', meaning: { en: 'a sign', ur: 'نشانی' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:21:10', position: 10, arabic: 'لِّلنَّاسِ', transliteration: 'lin-naasi', pos: ['P', 'N'], posLabel: 'P+N', root: 'ن و س', meaning: { en: 'to the people', ur: 'لوگوں کے لیے' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:21:11', position: 11, arabic: 'وَرَحْمَةً', transliteration: 'wa-rahmatan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ر ح م', meaning: { en: 'and a mercy', ur: 'اور رحمت' }, grammarRole: 'matoof', case: 'mansoob' },
      { id: '19:21:12', position: 12, arabic: 'مِّنَّا', transliteration: 'minnaa', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'from Us', ur: 'ہماری طرف سے' }, grammarRole: 'jarr-majroor' },
      { id: '19:21:13', position: 13, arabic: 'وَكَانَ', transliteration: 'wa-kaana', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'And it is', ur: 'اور یہ ہے' }, grammarRole: 'verb' },
      { id: '19:21:14', position: 14, arabic: 'أَمْرًا', transliteration: 'amran', pos: ['N'], posLabel: 'N', root: 'أ م ر', meaning: { en: 'a matter', ur: 'بات' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
      { id: '19:21:15', position: 15, arabic: 'مَّقْضِيًّا', transliteration: 'maqdiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق ض ي', meaning: { en: 'decreed', ur: 'فیصلہ شدہ' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 7, label: 'مبتدأ + خبر' },
        { from: 8, to: 9, label: 'فعل + مفعول به' },
        { from: 13, to: 14, label: 'كان + خبر' },
        { from: 14, to: 15, label: 'موصوف + صفة' },
      ],
    },
  },

  22: {
    text: 'فَحَمَلَتْهُ فَانتَبَذَتْ بِهِ مَكَانًا قَصِيًّا',
    translation: {
      en: 'So she conceived him, and she withdrew with him to a remote place.',
      ur: 'پھر اس نے حمل اٹھایا اور اس کو لے کر ایک دور جگہ چلی گئی۔',
    },
    words: [
      { id: '19:22:1', position: 1, arabic: 'فَحَمَلَتْهُ', transliteration: 'fa-hamalathu', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ح م ل', meaning: { en: 'So she conceived him', ur: 'پھر اس نے حمل اٹھایا' }, grammarRole: 'verb' },
      { id: '19:22:2', position: 2, arabic: 'فَانتَبَذَتْ', transliteration: 'fa-intabadhat', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ن ب ذ', meaning: { en: 'and she withdrew', ur: 'پھر وہ الگ ہوگئی' }, grammarRole: 'verb' },
      { id: '19:22:3', position: 3, arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'with him', ur: 'اس کو لے کر' }, grammarRole: 'jarr-majroor' },
      { id: '19:22:4', position: 4, arabic: 'مَكَانًا', transliteration: 'makaanan', pos: ['N'], posLabel: 'N', root: 'م ك ن', meaning: { en: 'a place', ur: 'جگہ' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:22:5', position: 5, arabic: 'قَصِيًّا', transliteration: 'qasiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق ص و', meaning: { en: 'remote', ur: 'دور' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 2, to: 4, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصوف + صفة' },
      ],
    },
  },

  23: {
    text: 'فَأَجَاءَهَا الْمَخَاضُ إِلَىٰ جِذْعِ النَّخْلَةِ قَالَتْ يَا لَيْتَنِي مِتُّ قَبْلَ هَٰذَا وَكُنتُ نَسْيًا مَّنسِيًّا',
    translation: {
      en: 'And the pains of childbirth drove her to the trunk of a palm tree. She said, "Oh, I wish I had died before this and was in oblivion, forgotten."',
      ur: 'پھر دردِ زہ اسے کھجور کے تنے تک لے آیا۔ اس نے کہا کاش میں اس سے پہلے مر گئی ہوتی اور بھولی بسری ہوتی۔',
    },
    words: [
      { id: '19:23:1', position: 1, arabic: 'فَأَجَاءَهَا', transliteration: 'fa-ajaa\'ahaa', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ج ي أ', meaning: { en: 'Then drove her', ur: 'پھر لے آیا اسے' }, grammarRole: 'verb' },
      { id: '19:23:2', position: 2, arabic: 'الْمَخَاضُ', transliteration: 'al-makhaadu', pos: ['N'], posLabel: 'N', root: 'م خ ض', meaning: { en: 'the labor pains', ur: 'دردِ زہ' }, grammarRole: 'faa\'il', case: 'marfoo' },
      { id: '19:23:3', position: 3, arabic: 'إِلَىٰ', transliteration: 'ilaa', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کی طرف' }, grammarRole: 'harf-jarr' },
      { id: '19:23:4', position: 4, arabic: 'جِذْعِ', transliteration: 'jidh\'i', pos: ['N'], posLabel: 'N', root: 'ج ذ ع', meaning: { en: 'the trunk', ur: 'تنے' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:23:5', position: 5, arabic: 'النَّخْلَةِ', transliteration: 'al-nakhlati', pos: ['N'], posLabel: 'N', root: 'ن خ ل', meaning: { en: 'of a palm tree', ur: 'کھجور کے' }, grammarRole: 'mudaf-ilayh', case: 'majroor' },
      { id: '19:23:6', position: 6, arabic: 'قَالَتْ', transliteration: 'qaalat', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'She said', ur: 'اس نے کہا' }, grammarRole: 'verb' },
      { id: '19:23:7', position: 7, arabic: 'يَا', transliteration: 'yaa', pos: ['VOC'], posLabel: 'VOC', root: null, meaning: { en: 'Oh', ur: 'اے کاش' }, grammarRole: 'harf-nidaa' },
      { id: '19:23:8', position: 8, arabic: 'لَيْتَنِي', transliteration: 'laytanii', pos: ['WISH', 'PRON'], posLabel: 'WISH+PRON', root: null, meaning: { en: 'I wish', ur: 'کاش میں' }, grammarRole: 'tamannii' },
      { id: '19:23:9', position: 9, arabic: 'مِتُّ', transliteration: 'mittu', pos: ['V'], posLabel: 'V', root: 'م و ت', meaning: { en: 'I had died', ur: 'مر گئی ہوتی' }, grammarRole: 'verb' },
      { id: '19:23:10', position: 10, arabic: 'قَبْلَ', transliteration: 'qabla', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'before', ur: 'پہلے' }, grammarRole: 'zarf', case: 'mansoob' },
      { id: '19:23:11', position: 11, arabic: 'هَٰذَا', transliteration: 'hadhaa', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'this', ur: 'اس سے' }, grammarRole: 'mudaf-ilayh' },
      { id: '19:23:12', position: 12, arabic: 'وَكُنتُ', transliteration: 'wa-kuntu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'and I was', ur: 'اور ہوتی' }, grammarRole: 'verb' },
      { id: '19:23:13', position: 13, arabic: 'نَسْيًا', transliteration: 'nasyan', pos: ['N'], posLabel: 'N', root: 'ن س ي', meaning: { en: 'a thing forgotten', ur: 'بھولی بسری' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
      { id: '19:23:14', position: 14, arabic: 'مَّنسِيًّا', transliteration: 'mansiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ن س ي', meaning: { en: 'completely forgotten', ur: 'بالکل فراموش' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'كان + خبر' },
        { from: 13, to: 14, label: 'موصوف + صفة' },
      ],
    },
  },

  24: {
    text: 'فَنَادَاهَا مِن تَحْتِهَا أَلَّا تَحْزَنِي قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّا',
    translation: {
      en: 'But he called her from below her, "Do not grieve; your Lord has provided beneath you a stream."',
      ur: 'پھر اسے نیچے سے آواز آئی کہ غم نہ کر، تیرے رب نے تیرے نیچے ایک نہر جاری کی ہے۔',
    },
    words: [
      { id: '19:24:1', position: 1, arabic: 'فَنَادَاهَا', transliteration: 'fa-naadaahaa', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ن د و', meaning: { en: 'But he called her', ur: 'پھر اسے پکارا' }, grammarRole: 'verb' },
      { id: '19:24:2', position: 2, arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' }, grammarRole: 'harf-jarr' },
      { id: '19:24:3', position: 3, arabic: 'تَحْتِهَا', transliteration: 'tahtihaa', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ت ح ت', meaning: { en: 'below her', ur: 'نیچے سے' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:24:4', position: 4, arabic: 'أَلَّا', transliteration: 'allaa', pos: ['SUB', 'NEG'], posLabel: 'SUB+NEG', root: null, meaning: { en: 'Do not', ur: 'مت' }, grammarRole: 'harf-nahy' },
      { id: '19:24:5', position: 5, arabic: 'تَحْزَنِي', transliteration: 'tahzanii', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ح ز ن', meaning: { en: 'grieve', ur: 'غم کرو' }, grammarRole: 'verb' },
      { id: '19:24:6', position: 6, arabic: 'قَدْ', transliteration: 'qad', pos: ['CERT'], posLabel: 'CERT', root: null, meaning: { en: 'certainly', ur: 'یقیناً' }, grammarRole: 'harf-tahqeeq' },
      { id: '19:24:7', position: 7, arabic: 'جَعَلَ', transliteration: 'ja\'ala', pos: ['V'], posLabel: 'V', root: 'ج ع ل', meaning: { en: 'has provided', ur: 'بنایا ہے' }, grammarRole: 'verb' },
      { id: '19:24:8', position: 8, arabic: 'رَبُّكِ', transliteration: 'Rabbuki', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'تیرے رب نے' }, grammarRole: 'faa\'il', case: 'marfoo' },
      { id: '19:24:9', position: 9, arabic: 'تَحْتَكِ', transliteration: 'tahtaki', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ت ح ت', meaning: { en: 'beneath you', ur: 'تیرے نیچے' }, grammarRole: 'zarf', case: 'mansoob' },
      { id: '19:24:10', position: 10, arabic: 'سَرِيًّا', transliteration: 'sariyyan', pos: ['N'], posLabel: 'N', root: 'س ر ي', meaning: { en: 'a stream', ur: 'ایک نہر' }, grammarRole: 'mafool-bih', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نهی + فعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 7, to: 10, label: 'فعل + مفعول به' },
      ],
    },
  },

  25: {
    text: 'وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا',
    translation: {
      en: 'And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates.',
      ur: 'اور کھجور کے تنے کو اپنی طرف ہلاؤ، تم پر تازہ پکی کھجوریں گریں گی۔',
    },
    words: [
      { id: '19:25:1', position: 1, arabic: 'وَهُزِّي', transliteration: 'wa-huzzii', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ه ز ز', meaning: { en: 'And shake', ur: 'اور ہلاؤ' }, grammarRole: 'verb' },
      { id: '19:25:2', position: 2, arabic: 'إِلَيْكِ', transliteration: 'ilayki', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'toward you', ur: 'اپنی طرف' }, grammarRole: 'jarr-majroor' },
      { id: '19:25:3', position: 3, arabic: 'بِجِذْعِ', transliteration: 'bi-jidh\'i', pos: ['P', 'N'], posLabel: 'P+N', root: 'ج ذ ع', meaning: { en: 'the trunk', ur: 'تنے کو' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:25:4', position: 4, arabic: 'النَّخْلَةِ', transliteration: 'al-nakhlati', pos: ['N'], posLabel: 'N', root: 'ن خ ل', meaning: { en: 'of the palm tree', ur: 'کھجور کے' }, grammarRole: 'mudaf-ilayh', case: 'majroor' },
      { id: '19:25:5', position: 5, arabic: 'تُسَاقِطْ', transliteration: 'tusaaqit', pos: ['V'], posLabel: 'V', root: 'س ق ط', meaning: { en: 'it will drop', ur: 'گریں گی' }, grammarRole: 'verb' },
      { id: '19:25:6', position: 6, arabic: 'عَلَيْكِ', transliteration: 'alayki', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon you', ur: 'تم پر' }, grammarRole: 'jarr-majroor' },
      { id: '19:25:7', position: 7, arabic: 'رُطَبًا', transliteration: 'rutaban', pos: ['N'], posLabel: 'N', root: 'ر ط ب', meaning: { en: 'ripe dates', ur: 'تازہ کھجوریں' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:25:8', position: 8, arabic: 'جَنِيًّا', transliteration: 'janiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ج ن ي', meaning: { en: 'fresh', ur: 'تازہ توڑی ہوئی' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 7, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'موصوف + صفة' },
      ],
    },
  },

  26: {
    text: 'فَكُلِي وَاشْرَبِي وَقَرِّي عَيْنًا فَإِمَّا تَرَيِنَّ مِنَ الْبَشَرِ أَحَدًا فَقُولِي إِنِّي نَذَرْتُ لِلرَّحْمَٰنِ صَوْمًا فَلَنْ أُكَلِّمَ الْيَوْمَ إِنسِيًّا',
    translation: {
      en: 'So eat and drink and be contented. And if you see any human, say, "Indeed I have vowed a fast to the Most Merciful so I will not speak today to anyone."',
      ur: 'کھاؤ پیو اور آنکھیں ٹھنڈی کرو۔ اگر کوئی انسان نظر آئے تو کہو میں نے رحمان کے لیے روزے کی نذر مانی ہے آج کسی سے بات نہیں کروں گی۔',
    },
    words: [
      { id: '19:26:1', position: 1, arabic: 'فَكُلِي', transliteration: 'fa-kulii', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'أ ك ل', meaning: { en: 'So eat', ur: 'پس کھاؤ' }, grammarRole: 'verb' },
      { id: '19:26:2', position: 2, arabic: 'وَاشْرَبِي', transliteration: 'wa-ishrabii', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ش ر ب', meaning: { en: 'and drink', ur: 'اور پیو' }, grammarRole: 'verb' },
      { id: '19:26:3', position: 3, arabic: 'وَقَرِّي', transliteration: 'wa-qarriy', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق ر ر', meaning: { en: 'and be contented', ur: 'اور ٹھنڈی کرو' }, grammarRole: 'verb' },
      { id: '19:26:4', position: 4, arabic: 'عَيْنًا', transliteration: 'aynan', pos: ['N'], posLabel: 'N', root: 'ع ي ن', meaning: { en: 'eye/in eye', ur: 'آنکھ' }, grammarRole: 'tamyeez', case: 'mansoob' },
      { id: '19:26:5', position: 5, arabic: 'فَإِمَّا', transliteration: 'fa-immaa', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'پھر اگر' }, grammarRole: 'harf-shart' },
      { id: '19:26:6', position: 6, arabic: 'تَرَيِنَّ', transliteration: 'tarayinna', pos: ['V'], posLabel: 'V', root: 'ر أ ي', meaning: { en: 'you see', ur: 'تم دیکھو' }, grammarRole: 'verb' },
      { id: '19:26:7', position: 7, arabic: 'مِنَ', transliteration: 'mina', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'میں سے' }, grammarRole: 'harf-jarr' },
      { id: '19:26:8', position: 8, arabic: 'الْبَشَرِ', transliteration: 'al-bashari', pos: ['N'], posLabel: 'N', root: 'ب ش ر', meaning: { en: 'mankind', ur: 'بشر' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:26:9', position: 9, arabic: 'أَحَدًا', transliteration: 'ahadan', pos: ['N'], posLabel: 'N', root: 'أ ح د', meaning: { en: 'anyone', ur: 'کسی کو' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:26:10', position: 10, arabic: 'فَقُولِي', transliteration: 'fa-quulii', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و ل', meaning: { en: 'then say', ur: 'تو کہو' }, grammarRole: 'verb' },
      { id: '19:26:11', position: 11, arabic: 'إِنِّي', transliteration: 'innii', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I', ur: 'بے شک میں نے' }, grammarRole: 'inna-ism' },
      { id: '19:26:12', position: 12, arabic: 'نَذَرْتُ', transliteration: 'nadhartu', pos: ['V'], posLabel: 'V', root: 'ن ذ ر', meaning: { en: 'have vowed', ur: 'نذر مانی ہے' }, grammarRole: 'khabar-inna' },
      { id: '19:26:13', position: 13, arabic: 'لِلرَّحْمَٰنِ', transliteration: 'lir-Rahmaani', pos: ['P', 'N'], posLabel: 'P+N', root: 'ر ح م', meaning: { en: 'to the Most Merciful', ur: 'رحمان کے لیے' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:26:14', position: 14, arabic: 'صَوْمًا', transliteration: 'sawman', pos: ['N'], posLabel: 'N', root: 'ص و م', meaning: { en: 'a fast (of silence)', ur: 'روزہ' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:26:15', position: 15, arabic: 'فَلَنْ', transliteration: 'fa-lan', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'so I will not', ur: 'تو ہرگز نہیں' }, grammarRole: 'harf-nasb' },
      { id: '19:26:16', position: 16, arabic: 'أُكَلِّمَ', transliteration: 'ukallima', pos: ['V'], posLabel: 'V', root: 'ك ل م', meaning: { en: 'speak to', ur: 'بات کروں گی' }, grammarRole: 'verb' },
      { id: '19:26:17', position: 17, arabic: 'الْيَوْمَ', transliteration: 'al-yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'today', ur: 'آج' }, grammarRole: 'zarf', case: 'mansoob' },
      { id: '19:26:18', position: 18, arabic: 'إِنسِيًّا', transliteration: 'insiyyan', pos: ['N'], posLabel: 'N', root: 'أ ن س', meaning: { en: 'any man', ur: 'کسی انسان سے' }, grammarRole: 'mafool-bih', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'عطف' },
        { from: 5, to: 10, label: 'شرط + جواب' },
        { from: 11, to: 12, label: 'إنّ + خبر' },
        { from: 15, to: 16, label: 'نفی + فعل' },
      ],
    },
  },

  27: {
    text: 'فَأَتَتْ بِهِ قَوْمَهَا تَحْمِلُهُ قَالُوا يَا مَرْيَمُ لَقَدْ جِئْتِ شَيْئًا فَرِيًّا',
    translation: {
      en: 'Then she brought him to her people, carrying him. They said, "O Mary, you have certainly done a thing unprecedented."',
      ur: 'پھر وہ اسے اٹھائے اپنی قوم کے پاس آئی۔ انہوں نے کہا اے مریم تو نے بڑا عجیب کام کیا۔',
    },
    words: [
      { id: '19:27:1', position: 1, arabic: 'فَأَتَتْ', transliteration: 'fa-atat', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'أ ت ي', meaning: { en: 'Then she brought', ur: 'پھر وہ آئی' }, grammarRole: 'verb' },
      { id: '19:27:2', position: 2, arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'him', ur: 'اسے لے کر' }, grammarRole: 'jarr-majroor' },
      { id: '19:27:3', position: 3, arabic: 'قَوْمَهَا', transliteration: 'qawmahaa', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق و م', meaning: { en: 'her people', ur: 'اپنی قوم کے پاس' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:27:4', position: 4, arabic: 'تَحْمِلُهُ', transliteration: 'tahmiluhuu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ح م ل', meaning: { en: 'carrying him', ur: 'اسے اٹھائے' }, grammarRole: 'hal' },
      { id: '19:27:5', position: 5, arabic: 'قَالُوا', transliteration: 'qaaluu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'They said', ur: 'انہوں نے کہا' }, grammarRole: 'verb' },
      { id: '19:27:6', position: 6, arabic: 'يَا', transliteration: 'yaa', pos: ['VOC'], posLabel: 'VOC', root: null, meaning: { en: 'O', ur: 'اے' }, grammarRole: 'harf-nidaa' },
      { id: '19:27:7', position: 7, arabic: 'مَرْيَمُ', transliteration: 'Maryamu', pos: ['PN'], posLabel: 'PN', root: null, meaning: { en: 'Mary', ur: 'مریم' }, grammarRole: 'munada', case: 'marfoo' },
      { id: '19:27:8', position: 8, arabic: 'لَقَدْ', transliteration: 'laqad', pos: ['EMPH', 'CERT'], posLabel: 'EMPH+CERT', root: null, meaning: { en: 'certainly', ur: 'یقیناً' }, grammarRole: 'tawkeed' },
      { id: '19:27:9', position: 9, arabic: 'جِئْتِ', transliteration: 'ji\'ti', pos: ['V'], posLabel: 'V', root: 'ج ي أ', meaning: { en: 'you have done', ur: 'تو نے کیا' }, grammarRole: 'verb' },
      { id: '19:27:10', position: 10, arabic: 'شَيْئًا', transliteration: 'shay\'an', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'a thing', ur: 'بات' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:27:11', position: 11, arabic: 'فَرِيًّا', transliteration: 'fariyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ف ر ي', meaning: { en: 'unprecedented', ur: 'عجیب' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'نداء' },
        { from: 9, to: 10, label: 'فعل + مفعول به' },
        { from: 10, to: 11, label: 'موصوف + صفة' },
      ],
    },
  },

  28: {
    text: 'يَا أُخْتَ هَارُونَ مَا كَانَ أَبُوكِ امْرَأَ سَوْءٍ وَمَا كَانَتْ أُمُّكِ بَغِيًّا',
    translation: {
      en: 'O sister of Aaron, your father was not a man of evil, nor was your mother unchaste.',
      ur: 'اے ہارون کی بہن! تیرا باپ برا آدمی نہیں تھا اور نہ تیری ماں بدکار تھی۔',
    },
    words: [
      { id: '19:28:1', position: 1, arabic: 'يَا', transliteration: 'yaa', pos: ['VOC'], posLabel: 'VOC', root: null, meaning: { en: 'O', ur: 'اے' }, grammarRole: 'harf-nidaa' },
      { id: '19:28:2', position: 2, arabic: 'أُخْتَ', transliteration: 'ukhta', pos: ['N'], posLabel: 'N', root: 'أ خ و', meaning: { en: 'sister', ur: 'بہن' }, grammarRole: 'munada', case: 'mansoob' },
      { id: '19:28:3', position: 3, arabic: 'هَارُونَ', transliteration: 'Haaruuna', pos: ['PN'], posLabel: 'PN', root: null, meaning: { en: 'of Aaron', ur: 'ہارون کی' }, grammarRole: 'mudaf-ilayh', case: 'majroor' },
      { id: '19:28:4', position: 4, arabic: 'مَا', transliteration: 'maa', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' }, grammarRole: 'harf-nafiy' },
      { id: '19:28:5', position: 5, arabic: 'كَانَ', transliteration: 'kaana', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'was', ur: 'تھا' }, grammarRole: 'verb' },
      { id: '19:28:6', position: 6, arabic: 'أَبُوكِ', transliteration: 'abuuki', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ب و', meaning: { en: 'your father', ur: 'تیرا باپ' }, grammarRole: 'ism-kaana', case: 'marfoo' },
      { id: '19:28:7', position: 7, arabic: 'امْرَأَ', transliteration: 'imra-a', pos: ['N'], posLabel: 'N', root: 'م ر أ', meaning: { en: 'a man of', ur: 'برا آدمی' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
      { id: '19:28:8', position: 8, arabic: 'سَوْءٍ', transliteration: 'saw\'in', pos: ['N'], posLabel: 'N', root: 'س و أ', meaning: { en: 'evil', ur: 'بدی' }, grammarRole: 'mudaf-ilayh', case: 'majroor' },
      { id: '19:28:9', position: 9, arabic: 'وَمَا', transliteration: 'wa-maa', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہ' }, grammarRole: 'harf-nafiy' },
      { id: '19:28:10', position: 10, arabic: 'كَانَتْ', transliteration: 'kaanat', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'was', ur: 'تھی' }, grammarRole: 'verb' },
      { id: '19:28:11', position: 11, arabic: 'أُمُّكِ', transliteration: 'ummuki', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ م م', meaning: { en: 'your mother', ur: 'تیری ماں' }, grammarRole: 'ism-kaana', case: 'marfoo' },
      { id: '19:28:12', position: 12, arabic: 'بَغِيًّا', transliteration: 'baghiyyan', pos: ['N'], posLabel: 'N', root: 'ب غ ي', meaning: { en: 'unchaste', ur: 'بدکار' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نداء' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'كان + اسم' },
        { from: 5, to: 7, label: 'كان + خبر' },
        { from: 10, to: 11, label: 'كان + اسم' },
        { from: 10, to: 12, label: 'كان + خبر' },
      ],
    },
  },

  29: {
    text: 'فَأَشَارَتْ إِلَيْهِ قَالُوا كَيْفَ نُكَلِّمُ مَن كَانَ فِي الْمَهْدِ صَبِيًّا',
    translation: {
      en: 'So she pointed to him. They said, "How can we speak to one who is a child in the cradle?"',
      ur: 'پھر اس نے اس (بچے) کی طرف اشارہ کیا۔ انہوں نے کہا ہم اس سے کیسے بات کریں جو گود میں بچہ ہے۔',
    },
    words: [
      { id: '19:29:1', position: 1, arabic: 'فَأَشَارَتْ', transliteration: 'fa-ashaarat', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ش و ر', meaning: { en: 'So she pointed', ur: 'پھر اشارہ کیا' }, grammarRole: 'verb' },
      { id: '19:29:2', position: 2, arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to him', ur: 'اس کی طرف' }, grammarRole: 'jarr-majroor' },
      { id: '19:29:3', position: 3, arabic: 'قَالُوا', transliteration: 'qaaluu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'They said', ur: 'انہوں نے کہا' }, grammarRole: 'verb' },
      { id: '19:29:4', position: 4, arabic: 'كَيْفَ', transliteration: 'kayfa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'How', ur: 'کیسے' }, grammarRole: 'istifhaam' },
      { id: '19:29:5', position: 5, arabic: 'نُكَلِّمُ', transliteration: 'nukallimu', pos: ['V'], posLabel: 'V', root: 'ك ل م', meaning: { en: 'can we speak to', ur: 'ہم بات کریں' }, grammarRole: 'verb' },
      { id: '19:29:6', position: 6, arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'one who', ur: 'جو' }, grammarRole: 'mafool-bih' },
      { id: '19:29:7', position: 7, arabic: 'كَانَ', transliteration: 'kaana', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'is', ur: 'ہے' }, grammarRole: 'verb' },
      { id: '19:29:8', position: 8, arabic: 'فِي', transliteration: 'fii', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' }, grammarRole: 'harf-jarr' },
      { id: '19:29:9', position: 9, arabic: 'الْمَهْدِ', transliteration: 'al-mahdi', pos: ['N'], posLabel: 'N', root: 'م ه د', meaning: { en: 'the cradle', ur: 'گہوارے' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:29:10', position: 10, arabic: 'صَبِيًّا', transliteration: 'sabiyyan', pos: ['N'], posLabel: 'N', root: 'ص ب و', meaning: { en: 'a child', ur: 'بچہ' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 10, label: 'كان + خبر' },
      ],
    },
  },

  30: {
    text: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
    translation: {
      en: '[Jesus] said, "Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet."',
      ur: 'اس (عیسیٰ) نے کہا میں اللہ کا بندہ ہوں۔ اس نے مجھے کتاب دی ہے اور نبی بنایا ہے۔',
    },
    words: [
      { id: '19:30:1', position: 1, arabic: 'قَالَ', transliteration: 'qaala', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'He said', ur: 'اس نے کہا' }, grammarRole: 'verb' },
      { id: '19:30:2', position: 2, arabic: 'إِنِّي', transliteration: 'innii', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I am', ur: 'بے شک میں' }, grammarRole: 'inna-ism' },
      { id: '19:30:3', position: 3, arabic: 'عَبْدُ', transliteration: 'abdu', pos: ['N'], posLabel: 'N', root: 'ع ب د', meaning: { en: 'the servant', ur: 'بندہ' }, grammarRole: 'khabar-inna', case: 'marfoo' },
      { id: '19:30:4', position: 4, arabic: 'اللَّهِ', transliteration: 'Allaahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'of Allah', ur: 'اللہ کا' }, grammarRole: 'mudaf-ilayh', case: 'majroor' },
      { id: '19:30:5', position: 5, arabic: 'آتَانِيَ', transliteration: 'aataaniya', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'أ ت ي', meaning: { en: 'He has given me', ur: 'مجھے دی ہے' }, grammarRole: 'verb' },
      { id: '19:30:6', position: 6, arabic: 'الْكِتَابَ', transliteration: 'al-kitaaba', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Scripture', ur: 'کتاب' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:30:7', position: 7, arabic: 'وَجَعَلَنِي', transliteration: 'wa-ja\'alanii', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ج ع ل', meaning: { en: 'and made me', ur: 'اور بنایا مجھے' }, grammarRole: 'verb' },
      { id: '19:30:8', position: 8, arabic: 'نَبِيًّا', transliteration: 'nabiyyan', pos: ['N'], posLabel: 'N', root: 'ن ب أ', meaning: { en: 'a prophet', ur: 'نبی' }, grammarRole: 'mafool-bih', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'إنّ + خبر' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
      ],
    },
  },

  31: {
    text: 'وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنتُ وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا',
    translation: {
      en: 'And He has made me blessed wherever I am and has enjoined upon me prayer and zakah as long as I remain alive.',
      ur: 'اور مجھے مبارک بنایا ہے جہاں بھی رہوں اور مجھے نماز اور زکوٰۃ کا حکم دیا ہے جب تک زندہ رہوں۔',
    },
    words: [
      { id: '19:31:1', position: 1, arabic: 'وَجَعَلَنِي', transliteration: 'wa-ja\'alanii', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ج ع ل', meaning: { en: 'And He made me', ur: 'اور بنایا مجھے' }, grammarRole: 'verb' },
      { id: '19:31:2', position: 2, arabic: 'مُبَارَكًا', transliteration: 'mubaarakan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ب ر ك', meaning: { en: 'blessed', ur: 'مبارک' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:31:3', position: 3, arabic: 'أَيْنَ', transliteration: 'ayna', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'wherever', ur: 'جہاں بھی' }, grammarRole: 'zarf' },
      { id: '19:31:4', position: 4, arabic: 'مَا', transliteration: 'maa', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'بھی' }, grammarRole: 'harf-zaa\'id' },
      { id: '19:31:5', position: 5, arabic: 'كُنتُ', transliteration: 'kuntu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'I am', ur: 'میں ہوں' }, grammarRole: 'verb' },
      { id: '19:31:6', position: 6, arabic: 'وَأَوْصَانِي', transliteration: 'wa-awsaanii', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'و ص ي', meaning: { en: 'and He enjoined on me', ur: 'اور حکم دیا مجھے' }, grammarRole: 'verb' },
      { id: '19:31:7', position: 7, arabic: 'بِالصَّلَاةِ', transliteration: 'bis-salaati', pos: ['P', 'N'], posLabel: 'P+N', root: 'ص ل و', meaning: { en: 'prayer', ur: 'نماز کا' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:31:8', position: 8, arabic: 'وَالزَّكَاةِ', transliteration: 'waz-zakaati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ز ك و', meaning: { en: 'and zakah', ur: 'اور زکوٰۃ کا' }, grammarRole: 'matoof', case: 'majroor' },
      { id: '19:31:9', position: 9, arabic: 'مَا', transliteration: 'maa', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'as long as', ur: 'جب تک' }, grammarRole: 'zarf' },
      { id: '19:31:10', position: 10, arabic: 'دُمْتُ', transliteration: 'dumtu', pos: ['V'], posLabel: 'V', root: 'د و م', meaning: { en: 'I remain', ur: 'میں رہوں' }, grammarRole: 'verb' },
      { id: '19:31:11', position: 11, arabic: 'حَيًّا', transliteration: 'hayyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ي ي', meaning: { en: 'alive', ur: 'زندہ' }, grammarRole: 'khabar-kaana', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 7, to: 8, label: 'عطف' },
        { from: 10, to: 11, label: 'كان + خبر' },
      ],
    },
  },

  32: {
    text: 'وَبَرًّا بِوَالِدَتِي وَلَمْ يَجْعَلْنِي جَبَّارًا شَقِيًّا',
    translation: {
      en: 'And [made me] dutiful to my mother, and He has not made me a wretched tyrant.',
      ur: 'اور مجھے اپنی ماں کا فرمانبردار بنایا، اور سرکش بدبخت نہیں بنایا۔',
    },
    words: [
      { id: '19:32:1', position: 1, arabic: 'وَبَرًّا', transliteration: 'wa-barran', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ب ر ر', meaning: { en: 'And dutiful', ur: 'اور فرمانبردار' }, grammarRole: 'matoof', case: 'mansoob' },
      { id: '19:32:2', position: 2, arabic: 'بِوَالِدَتِي', transliteration: 'bi-waalidatii', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'و ل د', meaning: { en: 'to my mother', ur: 'اپنی ماں کا' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:32:3', position: 3, arabic: 'وَلَمْ', transliteration: 'wa-lam', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' }, grammarRole: 'harf-jazm' },
      { id: '19:32:4', position: 4, arabic: 'يَجْعَلْنِي', transliteration: 'yaj\'alnii', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ع ل', meaning: { en: 'has He made me', ur: 'بنایا مجھے' }, grammarRole: 'verb' },
      { id: '19:32:5', position: 5, arabic: 'جَبَّارًا', transliteration: 'jabbaaran', pos: ['N'], posLabel: 'N', root: 'ج ب ر', meaning: { en: 'a tyrant', ur: 'سرکش' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:32:6', position: 6, arabic: 'شَقِيًّا', transliteration: 'shaqiyyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ش ق و', meaning: { en: 'wretched', ur: 'بدبخت' }, grammarRole: 'sifa', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصوف + صفة' },
      ],
    },
  },

  33: {
    text: 'وَالسَّلَامُ عَلَيَّ يَوْمَ وُلِدتُّ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا',
    translation: {
      en: 'And peace is on me the day I was born and the day I will die and the day I am raised alive.',
      ur: 'اور مجھ پر سلام ہے جس دن میں پیدا ہوا اور جس دن مروں گا اور جس دن زندہ اٹھایا جاؤں گا۔',
    },
    words: [
      { id: '19:33:1', position: 1, arabic: 'وَالسَّلَامُ', transliteration: 'was-salaamu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'س ل م', meaning: { en: 'And peace', ur: 'اور سلام' }, grammarRole: 'mubtada', case: 'marfoo' },
      { id: '19:33:2', position: 2, arabic: 'عَلَيَّ', transliteration: 'alayya', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'upon me', ur: 'مجھ پر' }, grammarRole: 'khabar' },
      { id: '19:33:3', position: 3, arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'the day', ur: 'جس دن' }, grammarRole: 'zarf', case: 'mansoob' },
      { id: '19:33:4', position: 4, arabic: 'وُلِدتُّ', transliteration: 'wulidtu', pos: ['V'], posLabel: 'V', root: 'و ل د', meaning: { en: 'I was born', ur: 'میں پیدا ہوا' }, grammarRole: 'verb' },
      { id: '19:33:5', position: 5, arabic: 'وَيَوْمَ', transliteration: 'wa-yawma', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ي و م', meaning: { en: 'and the day', ur: 'اور جس دن' }, grammarRole: 'matoof' },
      { id: '19:33:6', position: 6, arabic: 'أَمُوتُ', transliteration: 'amuutu', pos: ['V'], posLabel: 'V', root: 'م و ت', meaning: { en: 'I die', ur: 'مروں گا' }, grammarRole: 'verb' },
      { id: '19:33:7', position: 7, arabic: 'وَيَوْمَ', transliteration: 'wa-yawma', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ي و م', meaning: { en: 'and the day', ur: 'اور جس دن' }, grammarRole: 'matoof' },
      { id: '19:33:8', position: 8, arabic: 'أُبْعَثُ', transliteration: 'ub\'athu', pos: ['V'], posLabel: 'V', root: 'ب ع ث', meaning: { en: 'I am raised', ur: 'اٹھایا جاؤں گا' }, grammarRole: 'verb' },
      { id: '19:33:9', position: 9, arabic: 'حَيًّا', transliteration: 'hayyan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ي ي', meaning: { en: 'alive', ur: 'زندہ' }, grammarRole: 'hal', case: 'mansoob' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 5, label: 'عطف' },
        { from: 5, to: 7, label: 'عطف' },
      ],
    },
  },

  34: {
    text: 'ذَٰلِكَ عِيسَى ابْنُ مَرْيَمَ قَوْلَ الْحَقِّ الَّذِي فِيهِ يَمْتَرُونَ',
    translation: {
      en: 'That is Jesus, the son of Mary - the word of truth about which they are in dispute.',
      ur: 'یہ ہے عیسیٰ بن مریم، سچی بات جس میں یہ لوگ شک کرتے ہیں۔',
    },
    words: [
      { id: '19:34:1', position: 1, arabic: 'ذَٰلِكَ', transliteration: 'dhaalika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That is', ur: 'یہ ہے' }, grammarRole: 'mubtada' },
      { id: '19:34:2', position: 2, arabic: 'عِيسَى', transliteration: '\'Iisaa', pos: ['PN'], posLabel: 'PN', root: null, meaning: { en: 'Jesus', ur: 'عیسیٰ' }, grammarRole: 'khabar', case: 'marfoo' },
      { id: '19:34:3', position: 3, arabic: 'ابْنُ', transliteration: 'ibnu', pos: ['N'], posLabel: 'N', root: 'ب ن ي', meaning: { en: 'son of', ur: 'بیٹا' }, grammarRole: 'badal', case: 'marfoo' },
      { id: '19:34:4', position: 4, arabic: 'مَرْيَمَ', transliteration: 'Maryama', pos: ['PN'], posLabel: 'PN', root: null, meaning: { en: 'Mary', ur: 'مریم کا' }, grammarRole: 'mudaf-ilayh', case: 'majroor' },
      { id: '19:34:5', position: 5, arabic: 'قَوْلَ', transliteration: 'qawla', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'the word of', ur: 'سچی بات' }, grammarRole: 'badal', case: 'mansoob' },
      { id: '19:34:6', position: 6, arabic: 'الْحَقِّ', transliteration: 'al-haqqi', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'truth', ur: 'حق' }, grammarRole: 'mudaf-ilayh', case: 'majroor' },
      { id: '19:34:7', position: 7, arabic: 'الَّذِي', transliteration: 'alladhii', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'about which', ur: 'جس میں' }, grammarRole: 'sifa' },
      { id: '19:34:8', position: 8, arabic: 'فِيهِ', transliteration: 'fiihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'about it', ur: 'اس میں' }, grammarRole: 'jarr-majroor' },
      { id: '19:34:9', position: 9, arabic: 'يَمْتَرُونَ', transliteration: 'yamtaruuna', pos: ['V'], posLabel: 'V', root: 'م ر ي', meaning: { en: 'they dispute', ur: 'شک کرتے ہیں' }, grammarRole: 'sila' },
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
      ],
    },
  },

  35: {
    text: 'مَا كَانَ لِلَّهِ أَن يَتَّخِذَ مِن وَلَدٍ سُبْحَانَهُ إِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ',
    translation: {
      en: 'It is not for Allah to take a son; exalted is He! When He decrees a matter, He only says to it, "Be," and it is.',
      ur: 'اللہ کی شان نہیں کہ وہ اولاد رکھے، پاک ہے وہ! جب کوئی بات ٹھہرا لے تو کہتا ہے ہوجا، بس ہوجاتی ہے۔',
    },
    words: [
      { id: '19:35:1', position: 1, arabic: 'مَا', transliteration: 'maa', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'Not', ur: 'نہیں' }, grammarRole: 'harf-nafiy' },
      { id: '19:35:2', position: 2, arabic: 'كَانَ', transliteration: 'kaana', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'is it', ur: 'ہے' }, grammarRole: 'verb' },
      { id: '19:35:3', position: 3, arabic: 'لِلَّهِ', transliteration: 'lillaahi', pos: ['P', 'PN'], posLabel: 'P+PN', root: 'أ ل ه', meaning: { en: 'for Allah', ur: 'اللہ کے لیے' }, grammarRole: 'jarr-majroor', case: 'majroor' },
      { id: '19:35:4', position: 4, arabic: 'أَن', transliteration: 'an', pos: ['SUB'], posLabel: 'SUB', root: null, meaning: { en: 'to', ur: 'کہ' }, grammarRole: 'harf-masdariyya' },
      { id: '19:35:5', position: 5, arabic: 'يَتَّخِذَ', transliteration: 'yattakhidha', pos: ['V'], posLabel: 'V', root: 'أ خ ذ', meaning: { en: 'take', ur: 'اختیار کرے' }, grammarRole: 'verb' },
      { id: '19:35:6', position: 6, arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'any', ur: 'کوئی' }, grammarRole: 'harf-jarr' },
      { id: '19:35:7', position: 7, arabic: 'وَلَدٍ', transliteration: 'waladin', pos: ['N'], posLabel: 'N', root: 'و ل د', meaning: { en: 'son', ur: 'اولاد' }, grammarRole: 'majroor', case: 'majroor' },
      { id: '19:35:8', position: 8, arabic: 'سُبْحَانَهُ', transliteration: 'subhaanahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'س ب ح', meaning: { en: 'Exalted is He!', ur: 'پاک ہے وہ' }, grammarRole: 'mafool-mutlaq', case: 'mansoob' },
      { id: '19:35:9', position: 9, arabic: 'إِذَا', transliteration: 'idhaa', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'When', ur: 'جب' }, grammarRole: 'zarf' },
      { id: '19:35:10', position: 10, arabic: 'قَضَىٰ', transliteration: 'qadaa', pos: ['V'], posLabel: 'V', root: 'ق ض ي', meaning: { en: 'He decrees', ur: 'فیصلہ کرے' }, grammarRole: 'verb' },
      { id: '19:35:11', position: 11, arabic: 'أَمْرًا', transliteration: 'amran', pos: ['N'], posLabel: 'N', root: 'أ م ر', meaning: { en: 'a matter', ur: 'کوئی بات' }, grammarRole: 'mafool-bih', case: 'mansoob' },
      { id: '19:35:12', position: 12, arabic: 'فَإِنَّمَا', transliteration: 'fa-innamaa', pos: ['CONJ', 'RES'], posLabel: 'CONJ+RES', root: null, meaning: { en: 'then He only', ur: 'تو بس' }, grammarRole: 'hasr' },
      { id: '19:35:13', position: 13, arabic: 'يَقُولُ', transliteration: 'yaquulu', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'says', ur: 'کہتا ہے' }, grammarRole: 'verb' },
      { id: '19:35:14', position: 14, arabic: 'لَهُ', transliteration: 'lahu', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to it', ur: 'اسے' }, grammarRole: 'jarr-majroor' },
      { id: '19:35:15', position: 15, arabic: 'كُن', transliteration: 'kun', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'Be', ur: 'ہوجا' }, grammarRole: 'verb' },
      { id: '19:35:16', position: 16, arabic: 'فَيَكُونُ', transliteration: 'fa-yakuunu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ك و ن', meaning: { en: 'and it is', ur: 'بس ہو جاتا ہے' }, grammarRole: 'verb' },
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'فعل + مفعول به' },
        { from: 15, to: 16, label: 'أمر + جواب' },
      ],
    },
  },

  36: {
    text: "وَإِنَّ ٱللَّهَ رَبِّى وَرَبُّكُمْ فَٱعْبُدُوهُ ۚ هَـٰذَا صِرَٰطٌۭ مُّسْتَقِيمٌۭ",
    translation: {
      en: "",
      ur: "اور بےشک خدا ہی میرا اور تمہارا پروردگار ہے تو اسی کی عبادت کرو۔ یہی سیدھا رستہ ہے",
    },
    words: [
      { id: '19:36:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '19:36:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '19:36:3', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) my Lord", ur: "(is) my رب" } },
      { id: '19:36:4', arabic: "وَرَبُّكُمْ", transliteration: "warabbukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your Lord", ur: "اور your رب" } },
      { id: '19:36:5', arabic: "فَٱعْبُدُوهُ ۚ", transliteration: "fa-uʿ'budūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so worship Him", ur: "so عبادت Him" } },
      { id: '19:36:6', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '19:36:7', arabic: "صِرَٰطٌۭ", transliteration: "ṣirāṭun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a path", ur: "(is) a راستہ" } },
      { id: '19:36:8', arabic: "مُّسْتَقِيمٌۭ", transliteration: "mus'taqīmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "straight", ur: "سیدھا" } }
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
  37: {
    text: "فَٱخْتَلَفَ ٱلْأَحْزَابُ مِنۢ بَيْنِهِمْ ۖ فَوَيْلٌۭ لِّلَّذِينَ كَفَرُوا۟ مِن مَّشْهَدِ يَوْمٍ عَظِيمٍ",
    translation: {
      en: "",
      ur: "پھر (اہل کتاب کے) فرقوں نے باہم اختلاف کیا۔ سو جو لوگ کافر ہوئے ہیں ان کو بڑے دن (یعنی قیامت کے روز) حاضر ہونے سے خرابی ہے",
    },
    words: [
      { id: '19:37:1', arabic: "فَٱخْتَلَفَ", transliteration: "fa-ikh'talafa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But differed", ur: "لیکن differed" } },
      { id: '19:37:2', arabic: "ٱلْأَحْزَابُ", transliteration: "l-aḥzābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sects", ur: "the sects" } },
      { id: '19:37:3', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from among them", ur: "سے among them" } },
      { id: '19:37:4', arabic: "بَيْنِهِمْ ۖ", transliteration: "baynihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from among them", ur: "سے among them" } },
      { id: '19:37:5', arabic: "فَوَيْلٌۭ", transliteration: "fawaylun", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so woe", ur: "so woe" } },
      { id: '19:37:6', arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to those who", ur: "کو جو لوگ" } },
      { id: '19:37:7', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '19:37:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '19:37:9', arabic: "مَّشْهَدِ", transliteration: "mashhadi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) witnessing", ur: "(the) witnessing" } },
      { id: '19:37:10', arabic: "يَوْمٍ", transliteration: "yawmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of) a Day", ur: "(of) a دن" } },
      { id: '19:37:11', arabic: "عَظِيمٍ", transliteration: "ʿaẓīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 5, label: 'عطف' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  38: {
    text: "أَسْمِعْ بِهِمْ وَأَبْصِرْ يَوْمَ يَأْتُونَنَا ۖ لَـٰكِنِ ٱلظَّـٰلِمُونَ ٱلْيَوْمَ فِى ضَلَـٰلٍۢ مُّبِينٍۢ",
    translation: {
      en: "",
      ur: "وہ جس دن ہمارے سامنے آئیں گے۔ کیسے سننے والے اور کیسے دیکھنے والے ہوں گے مگر ظالم آج صریح گمراہی میں ہیں",
    },
    words: [
      { id: '19:38:1', arabic: "أَسْمِعْ", transliteration: "asmiʿ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "How they will hear", ur: "How وہ لوگ will سننا" } },
      { id: '19:38:2', arabic: "بِهِمْ", transliteration: "bihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "How they will hear", ur: "How وہ لوگ will سننا" } },
      { id: '19:38:3', arabic: "وَأَبْصِرْ", transliteration: "wa-abṣir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and how (they will) see", ur: "اور how (وہ لوگ will) دیکھنا" } },
      { id: '19:38:4', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(the) Day", ur: "(the) دن" } },
      { id: '19:38:5', arabic: "يَأْتُونَنَا ۖ", transliteration: "yatūnanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will come to Us", ur: "وہ لوگ will come کو Us" } },
      { id: '19:38:6', arabic: "لَـٰكِنِ", transliteration: "lākini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '19:38:7', arabic: "ٱلظَّـٰلِمُونَ", transliteration: "l-ẓālimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } },
      { id: '19:38:8', arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", pos: ['N'], posLabel: 'N', root: "ي و م", meaning: { en: "today", ur: "today" } },
      { id: '19:38:9', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) in", ur: "(are) میں" } },
      { id: '19:38:10', arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "error", ur: "error" } },
      { id: '19:38:11', arabic: "مُّبِينٍۢ", transliteration: "mubīnin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  39: {
    text: "وَأَنذِرْهُمْ يَوْمَ ٱلْحَسْرَةِ إِذْ قُضِىَ ٱلْأَمْرُ وَهُمْ فِى غَفْلَةٍۢ وَهُمْ لَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اور ان کو حسرت (وافسوس) کے دن سے ڈراؤ جب بات فیصل کردی جائے گی۔ اور (ہیہات) وہ غفلت میں (پڑے ہوئے ہیں) اور ایمان نہیں لاتے",
    },
    words: [
      { id: '19:39:1', arabic: "وَأَنذِرْهُمْ", transliteration: "wa-andhir'hum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And warn them", ur: "اور warn them" } },
      { id: '19:39:2', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(of the) Day", ur: "(of the) دن" } },
      { id: '19:39:3', arabic: "ٱلْحَسْرَةِ", transliteration: "l-ḥasrati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Regret", ur: "(of) the Regret" } },
      { id: '19:39:4', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '19:39:5', arabic: "قُضِىَ", transliteration: "quḍiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been decided", ur: "has been decided" } },
      { id: '19:39:6', arabic: "ٱلْأَمْرُ", transliteration: "l-amru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the matter", ur: "the matter" } },
      { id: '19:39:7', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they", ur: "اور وہ لوگ" } },
      { id: '19:39:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) in", ur: "(are) میں" } },
      { id: '19:39:9', arabic: "غَفْلَةٍۢ", transliteration: "ghaflatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "heedlessness", ur: "heedlessness" } },
      { id: '19:39:10', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '19:39:11', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '19:39:12', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    },
  },
  40: {
    text: "إِنَّا نَحْنُ نَرِثُ ٱلْأَرْضَ وَمَنْ عَلَيْهَا وَإِلَيْنَا يُرْجَعُونَ",
    translation: {
      en: "",
      ur: "ہم ہی زمین کے اور جو لوگ اس پر (بستے) ہیں ان کے وارث ہیں۔ اور ہماری ہی طرف ان کو لوٹنا ہوگا",
    },
    words: [
      { id: '19:40:1', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, We", ur: "بیشک, ہم" } },
      { id: '19:40:2', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[We]", ur: "[ہم]" } },
      { id: '19:40:3', arabic: "نَرِثُ", transliteration: "narithu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[We] will inherit", ur: "[ہم] will inherit" } },
      { id: '19:40:4', arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earth", ur: "زمین" } },
      { id: '19:40:5', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '19:40:6', arabic: "عَلَيْهَا", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) on it", ur: "(is) پر it" } },
      { id: '19:40:7', arabic: "وَإِلَيْنَا", transliteration: "wa-ilaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to Us", ur: "اور کو Us" } },
      { id: '19:40:8', arabic: "يُرْجَعُونَ", transliteration: "yur'jaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be returned", ur: "وہ لوگ will be returned" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  41: {
    text: "وَٱذْكُرْ فِى ٱلْكِتَـٰبِ إِبْرَٰهِيمَ ۚ إِنَّهُۥ كَانَ صِدِّيقًۭا نَّبِيًّا",
    translation: {
      en: "",
      ur: "اور کتاب میں ابراہیم کو یاد کرو۔ بےشک وہ نہایت سچے پیغمبر تھے",
    },
    words: [
      { id: '19:41:1', arabic: "وَٱذْكُرْ", transliteration: "wa-udh'kur", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And mention", ur: "اور mention" } },
      { id: '19:41:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '19:41:3', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '19:41:4', arabic: "إِبْرَٰهِيمَ ۚ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } },
      { id: '19:41:5', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '19:41:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '19:41:7', arabic: "صِدِّيقًۭا", transliteration: "ṣiddīqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a man of truth", ur: "a man of سچ" } },
      { id: '19:41:8', arabic: "نَّبِيًّا", transliteration: "nabiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a Prophet", ur: "a نبی" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  42: {
    text: "إِذْ قَالَ لِأَبِيهِ يَـٰٓأَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ وَلَا يُبْصِرُ وَلَا يُغْنِى عَنكَ شَيْـًۭٔا",
    translation: {
      en: "",
      ur: "جب انہوں نے اپنے باپ سے کہا کہ ابّا آپ ایسی چیزوں کو کیوں پوجتے ہیں جو نہ سنیں اور نہ دیکھیں اور نہ آپ کے کچھ کام آسکیں",
    },
    words: [
      { id: '19:42:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '19:42:2', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '19:42:3', arabic: "لِأَبِيهِ", transliteration: "li-abīhi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to his father", ur: "کو his باپ" } },
      { id: '19:42:4', arabic: "يَـٰٓأَبَتِ", transliteration: "yāabati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my father", ur: "اے my باپ" } },
      { id: '19:42:5', arabic: "لِمَ", transliteration: "lima", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Why", ur: "Why" } },
      { id: '19:42:6', arabic: "تَعْبُدُ", transliteration: "taʿbudu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) you worship", ur: "(do) تم عبادت" } },
      { id: '19:42:7', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "that which", ur: "وہ جو" } },
      { id: '19:42:8', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '19:42:9', arabic: "يَسْمَعُ", transliteration: "yasmaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hears", ur: "hears" } },
      { id: '19:42:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '19:42:11', arabic: "يُبْصِرُ", transliteration: "yub'ṣiru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sees", ur: "sees" } },
      { id: '19:42:12', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '19:42:13', arabic: "يُغْنِى", transliteration: "yugh'nī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "benefits", ur: "benefits" } },
      { id: '19:42:14', arabic: "عَنكَ", transliteration: "ʿanka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] you", ur: "[کو] تم" } },
      { id: '19:42:15', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) anything", ur: "(میں) anything" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  43: {
    text: "يَـٰٓأَبَتِ إِنِّى قَدْ جَآءَنِى مِنَ ٱلْعِلْمِ مَا لَمْ يَأْتِكَ فَٱتَّبِعْنِىٓ أَهْدِكَ صِرَٰطًۭا سَوِيًّۭا",
    translation: {
      en: "",
      ur: "ابّا مجھے ایسا علم ملا ہے جو آپ کو نہیں ملا ہے تو میرے ساتھ ہوجیئے میں آپ کو سیدھی راہ پر چلا دوں گا",
    },
    words: [
      { id: '19:43:1', arabic: "يَـٰٓأَبَتِ", transliteration: "yāabati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my father", ur: "اے my باپ" } },
      { id: '19:43:2', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, [I]", ur: "بیشک, [میں]" } },
      { id: '19:43:3', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "verily", ur: "بیشک" } },
      { id: '19:43:4', arabic: "جَآءَنِى", transliteration: "jāanī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) come to me", ur: "(has) come کو me" } },
      { id: '19:43:5', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '19:43:6', arabic: "ٱلْعِلْمِ", transliteration: "l-ʿil'mi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the knowledge", ur: "the knowledge" } },
      { id: '19:43:7', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '19:43:8', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '19:43:9', arabic: "يَأْتِكَ", transliteration: "yatika", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "came to you", ur: "came کو تم" } },
      { id: '19:43:10', arabic: "فَٱتَّبِعْنِىٓ", transliteration: "fa-ittabiʿ'nī", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so follow me", ur: "so follow me" } },
      { id: '19:43:11', arabic: "أَهْدِكَ", transliteration: "ahdika", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will guide you", ur: "میں will guide تم" } },
      { id: '19:43:12', arabic: "صِرَٰطًۭا", transliteration: "ṣirāṭan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the path", ur: "(کو) the راستہ" } },
      { id: '19:43:13', arabic: "سَوِيًّۭا", transliteration: "sawiyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "even", ur: "even" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  44: {
    text: "يَـٰٓأَبَتِ لَا تَعْبُدِ ٱلشَّيْطَـٰنَ ۖ إِنَّ ٱلشَّيْطَـٰنَ كَانَ لِلرَّحْمَـٰنِ عَصِيًّۭا",
    translation: {
      en: "",
      ur: "ابّا شیطان کی پرستش نہ کیجیئے۔ بےشک شیطان خدا کا نافرمان ہے",
    },
    words: [
      { id: '19:44:1', arabic: "يَـٰٓأَبَتِ", transliteration: "yāabati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my father", ur: "اے my باپ" } },
      { id: '19:44:2', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '19:44:3', arabic: "تَعْبُدِ", transliteration: "taʿbudi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "worship", ur: "عبادت" } },
      { id: '19:44:4', arabic: "ٱلشَّيْطَـٰنَ ۖ", transliteration: "l-shayṭāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '19:44:5', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '19:44:6', arabic: "ٱلشَّيْطَـٰنَ", transliteration: "l-shayṭāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '19:44:7', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '19:44:8', arabic: "لِلرَّحْمَـٰنِ", transliteration: "lilrraḥmāni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the Most Gracious", ur: "کو the بڑا مہربان" } },
      { id: '19:44:9', arabic: "عَصِيًّۭا", transliteration: "ʿaṣiyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disobedient", ur: "disobedient" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  45: {
    text: "يَـٰٓأَبَتِ إِنِّىٓ أَخَافُ أَن يَمَسَّكَ عَذَابٌۭ مِّنَ ٱلرَّحْمَـٰنِ فَتَكُونَ لِلشَّيْطَـٰنِ وَلِيًّۭا",
    translation: {
      en: "",
      ur: "ابّا مجھے ڈر لگتا ہے کہ آپ کو خدا کا عذاب آپکڑے تو آپ شیطان کے ساتھی ہوجائیں",
    },
    words: [
      { id: '19:45:1', arabic: "يَـٰٓأَبَتِ", transliteration: "yāabati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O my father", ur: "اے my باپ" } },
      { id: '19:45:2', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '19:45:3', arabic: "أَخَافُ", transliteration: "akhāfu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[I] fear", ur: "[میں] ڈرنا" } },
      { id: '19:45:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '19:45:5', arabic: "يَمَسَّكَ", transliteration: "yamassaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will touch you", ur: "will touch تم" } },
      { id: '19:45:6', arabic: "عَذَابٌۭ", transliteration: "ʿadhābun", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '19:45:7', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '19:45:8', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:45:9', arabic: "فَتَكُونَ", transliteration: "fatakūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so you would be", ur: "so تم would be" } },
      { id: '19:45:10', arabic: "لِلشَّيْطَـٰنِ", transliteration: "lilshayṭāni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the Shaitaan", ur: "کو the Shaitaan" } },
      { id: '19:45:11', arabic: "وَلِيًّۭا", transliteration: "waliyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a friend", ur: "a friend" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  46: {
    text: "قَالَ أَرَاغِبٌ أَنتَ عَنْ ءَالِهَتِى يَـٰٓإِبْرَٰهِيمُ ۖ لَئِن لَّمْ تَنتَهِ لَأَرْجُمَنَّكَ ۖ وَٱهْجُرْنِى مَلِيًّۭا",
    translation: {
      en: "",
      ur: "اس نے کہا ابراہیم کیا تو میرے معبودوں سے برگشتہ ہے؟ اگر تو باز نہ آئے گا تو میں تجھے سنگسار کردوں گا اور تو ہمیشہ کے لئے مجھ سے دور ہوجا",
    },
    words: [
      { id: '19:46:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '19:46:2', arabic: "أَرَاغِبٌ", transliteration: "arāghibun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you hate", ur: "Do تم hate" } },
      { id: '19:46:3', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "Do you hate", ur: "Do تم hate" } },
      { id: '19:46:4', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(from)", ur: "(سے)" } },
      { id: '19:46:5', arabic: "ءَالِهَتِى", transliteration: "ālihatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my gods", ur: "my gods" } },
      { id: '19:46:6', arabic: "يَـٰٓإِبْرَٰهِيمُ ۖ", transliteration: "yāib'rāhīmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Ibrahim", ur: "اے Ibrahim" } },
      { id: '19:46:7', arabic: "لَئِن", transliteration: "la-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Surely, if", ur: "یقیناً, if" } },
      { id: '19:46:8', arabic: "لَّمْ", transliteration: "lam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '19:46:9', arabic: "تَنتَهِ", transliteration: "tantahi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you desist", ur: "تم desist" } },
      { id: '19:46:10', arabic: "لَأَرْجُمَنَّكَ ۖ", transliteration: "la-arjumannaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, I will stone you", ur: "یقیناً, میں will stone تم" } },
      { id: '19:46:11', arabic: "وَٱهْجُرْنِى", transliteration: "wa-uh'jur'nī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "so leave me", ur: "so leave me" } },
      { id: '19:46:12', arabic: "مَلِيًّۭا", transliteration: "maliyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) a prolonged time", ur: "(for) a prolonged وقت" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  47: {
    text: "قَالَ سَلَـٰمٌ عَلَيْكَ ۖ سَأَسْتَغْفِرُ لَكَ رَبِّىٓ ۖ إِنَّهُۥ كَانَ بِى حَفِيًّۭا",
    translation: {
      en: "",
      ur: "ابراہیم نے سلام علیک کہا (اور کہا کہ) میں آپ کے لئے اپنے پروردگار سے بخشش مانگوں گا۔ بےشک وہ مجھ پر نہایت مہربان ہے",
    },
    words: [
      { id: '19:47:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '19:47:2', arabic: "سَلَـٰمٌ", transliteration: "salāmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Peace (be)", ur: "Peace (be)" } },
      { id: '19:47:3', arabic: "عَلَيْكَ ۖ", transliteration: "ʿalayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on you", ur: "پر تم" } },
      { id: '19:47:4', arabic: "سَأَسْتَغْفِرُ", transliteration: "sa-astaghfiru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will ask forgiveness", ur: "میں will ask مغفرت" } },
      { id: '19:47:5', arabic: "لَكَ", transliteration: "laka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '19:47:6', arabic: "رَبِّىٓ ۖ", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(from) my Lord", ur: "(سے) my رب" } },
      { id: '19:47:7', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '19:47:8', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '19:47:9', arabic: "بِى", transliteration: "bī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to me", ur: "کو me" } },
      { id: '19:47:10', arabic: "حَفِيًّۭا", transliteration: "ḥafiyyan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Ever Gracious", ur: "Ever Gracious" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  48: {
    text: "وَأَعْتَزِلُكُمْ وَمَا تَدْعُونَ مِن دُونِ ٱللَّهِ وَأَدْعُوا۟ رَبِّى عَسَىٰٓ أَلَّآ أَكُونَ بِدُعَآءِ رَبِّى شَقِيًّۭا",
    translation: {
      en: "",
      ur: "اور میں آپ لوگوں سے اور جن کو آپ خدا کے سوا پکارا کرتے ہیں ان سے کنارہ کرتا ہوں اور اپنے پروردگار ہی کو پکاروں گا۔ امید ہے کہ میں اپنے پروردگار کو پکار کر محروم نہیں رہوں گا",
    },
    words: [
      { id: '19:48:1', arabic: "وَأَعْتَزِلُكُمْ", transliteration: "wa-aʿtazilukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And I will leave you", ur: "اور میں will leave تم" } },
      { id: '19:48:2', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '19:48:3', arabic: "تَدْعُونَ", transliteration: "tadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you invoke", ur: "تم invoke" } },
      { id: '19:48:4', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides", ur: "besides" } },
      { id: '19:48:5', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '19:48:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '19:48:7', arabic: "وَأَدْعُوا۟", transliteration: "wa-adʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I will invoke", ur: "اور میں will invoke" } },
      { id: '19:48:8', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '19:48:9', arabic: "عَسَىٰٓ", transliteration: "ʿasā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "May be", ur: "May be" } },
      { id: '19:48:10', arabic: "أَلَّآ", transliteration: "allā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that not", ur: "وہ نہیں" } },
      { id: '19:48:11', arabic: "أَكُونَ", transliteration: "akūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will be", ur: "میں will be" } },
      { id: '19:48:12', arabic: "بِدُعَآءِ", transliteration: "biduʿāi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in invocation", ur: "میں invocation" } },
      { id: '19:48:13', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) my Lord", ur: "(کو) my رب" } },
      { id: '19:48:14', arabic: "شَقِيًّۭا", transliteration: "shaqiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "unblessed", ur: "unblessed" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  49: {
    text: "فَلَمَّا ٱعْتَزَلَهُمْ وَمَا يَعْبُدُونَ مِن دُونِ ٱللَّهِ وَهَبْنَا لَهُۥٓ إِسْحَـٰقَ وَيَعْقُوبَ ۖ وَكُلًّۭا جَعَلْنَا نَبِيًّۭا",
    translation: {
      en: "",
      ur: "اور جب ابراہیم ان لوگوں سے اور جن کی وہ خدا کے سوا پرستش کرتے تھے اُن سے الگ ہوگئے تو ہم نے ان کو اسحاق اور (اسحاق کو) یعقوب بخشے۔ اور سب کو پیغمبر بنایا",
    },
    words: [
      { id: '19:49:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '19:49:2', arabic: "ٱعْتَزَلَهُمْ", transliteration: "iʿ'tazalahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he left them", ur: "وہ left them" } },
      { id: '19:49:3', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '19:49:4', arabic: "يَعْبُدُونَ", transliteration: "yaʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they worshipped", ur: "وہ لوگ worshipped" } },
      { id: '19:49:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '19:49:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '19:49:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '19:49:8', arabic: "وَهَبْنَا", transliteration: "wahabnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "[and] We bestowed", ur: "[اور] ہم bestowed" } },
      { id: '19:49:9', arabic: "لَهُۥٓ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] him", ur: "[کو] him" } },
      { id: '19:49:10', arabic: "إِسْحَـٰقَ", transliteration: "is'ḥāqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Isaac", ur: "Isaac" } },
      { id: '19:49:11', arabic: "وَيَعْقُوبَ ۖ", transliteration: "wayaʿqūba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Yaqub", ur: "اور Yaqub" } },
      { id: '19:49:12', arabic: "وَكُلًّۭا", transliteration: "wakullan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and each (of them)", ur: "اور ہر (of them)" } },
      { id: '19:49:13', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We made", ur: "ہم made" } },
      { id: '19:49:14', arabic: "نَبِيًّۭا", transliteration: "nabiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a Prophet", ur: "a نبی" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  50: {
    text: "وَوَهَبْنَا لَهُم مِّن رَّحْمَتِنَا وَجَعَلْنَا لَهُمْ لِسَانَ صِدْقٍ عَلِيًّۭا",
    translation: {
      en: "",
      ur: "اور ان کو اپنی رحمت سے (بہت سی چیزیں) عنایت کیں۔ اور ان کا ذکر جمیل بلند کیا",
    },
    words: [
      { id: '19:50:1', arabic: "وَوَهَبْنَا", transliteration: "wawahabnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We bestowed", ur: "اور ہم bestowed" } },
      { id: '19:50:2', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '19:50:3', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '19:50:4', arabic: "رَّحْمَتِنَا", transliteration: "raḥmatinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Mercy", ur: "Our رحمت" } },
      { id: '19:50:5', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and We made", ur: "اور ہم made" } },
      { id: '19:50:6', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '19:50:7', arabic: "لِسَانَ", transliteration: "lisāna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a truthful mention", ur: "a truthful mention" } },
      { id: '19:50:8', arabic: "صِدْقٍ", transliteration: "ṣid'qin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a truthful mention", ur: "a truthful mention" } },
      { id: '19:50:9', arabic: "عَلِيًّۭا", transliteration: "ʿaliyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "high", ur: "high" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  51: {
    text: "وَٱذْكُرْ فِى ٱلْكِتَـٰبِ مُوسَىٰٓ ۚ إِنَّهُۥ كَانَ مُخْلَصًۭا وَكَانَ رَسُولًۭا نَّبِيًّۭا",
    translation: {
      en: "",
      ur: "اور کتاب میں موسیٰ کا بھی ذکر کرو۔ بےشک وہ (ہمارے) برگزیدہ اور پیغمبر مُرسل تھے",
    },
    words: [
      { id: '19:51:1', arabic: "وَٱذْكُرْ", transliteration: "wa-udh'kur", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And mention", ur: "اور mention" } },
      { id: '19:51:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '19:51:3', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '19:51:4', arabic: "مُوسَىٰٓ ۚ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '19:51:5', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '19:51:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '19:51:7', arabic: "مُخْلَصًۭا", transliteration: "mukh'laṣan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "chosen", ur: "chosen" } },
      { id: '19:51:8', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and was", ur: "اور was" } },
      { id: '19:51:9', arabic: "رَسُولًۭا", transliteration: "rasūlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger", ur: "a رسول" } },
      { id: '19:51:10', arabic: "نَّبِيًّۭا", transliteration: "nabiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a Prophet", ur: "a نبی" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    text: "وَنَـٰدَيْنَـٰهُ مِن جَانِبِ ٱلطُّورِ ٱلْأَيْمَنِ وَقَرَّبْنَـٰهُ نَجِيًّۭا",
    translation: {
      en: "",
      ur: "اور ہم نے ان کو طور کی داہنی جانب پکارا اور باتیں کرنے کے لئے نزدیک بلایا",
    },
    words: [
      { id: '19:52:1', arabic: "وَنَـٰدَيْنَـٰهُ", transliteration: "wanādaynāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We called him", ur: "اور ہم called him" } },
      { id: '19:52:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '19:52:3', arabic: "جَانِبِ", transliteration: "jānibi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) side", ur: "(the) side" } },
      { id: '19:52:4', arabic: "ٱلطُّورِ", transliteration: "l-ṭūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Mount", ur: "(of) the Mount" } },
      { id: '19:52:5', arabic: "ٱلْأَيْمَنِ", transliteration: "l-aymani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the right", ur: "the right" } },
      { id: '19:52:6', arabic: "وَقَرَّبْنَـٰهُ", transliteration: "waqarrabnāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and brought him near", ur: "اور brought him near" } },
      { id: '19:52:7', arabic: "نَجِيًّۭا", transliteration: "najiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(for) conversation", ur: "(for) conversation" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  53: {
    text: "وَوَهَبْنَا لَهُۥ مِن رَّحْمَتِنَآ أَخَاهُ هَـٰرُونَ نَبِيًّۭا",
    translation: {
      en: "",
      ur: "اور اپنی مہربانی سے اُن کو اُن کا بھائی ہارون پیغمبر عطا کیا",
    },
    words: [
      { id: '19:53:1', arabic: "وَوَهَبْنَا", transliteration: "wawahabnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We bestowed", ur: "اور ہم bestowed" } },
      { id: '19:53:2', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] him", ur: "[کو] him" } },
      { id: '19:53:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '19:53:4', arabic: "رَّحْمَتِنَآ", transliteration: "raḥmatinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Mercy", ur: "Our رحمت" } },
      { id: '19:53:5', arabic: "أَخَاهُ", transliteration: "akhāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his brother", ur: "his brother" } },
      { id: '19:53:6', arabic: "هَـٰرُونَ", transliteration: "hārūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Harun", ur: "Harun" } },
      { id: '19:53:7', arabic: "نَبِيًّۭا", transliteration: "nabiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a Prophet", ur: "a نبی" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    text: "وَٱذْكُرْ فِى ٱلْكِتَـٰبِ إِسْمَـٰعِيلَ ۚ إِنَّهُۥ كَانَ صَادِقَ ٱلْوَعْدِ وَكَانَ رَسُولًۭا نَّبِيًّۭا",
    translation: {
      en: "",
      ur: "اور کتاب میں اسمٰعیل کا بھی ذکر کرو وہ وعدے کے سچے اور ہمارے بھیجے ہوئے نبی تھے",
    },
    words: [
      { id: '19:54:1', arabic: "وَٱذْكُرْ", transliteration: "wa-udh'kur", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And mention", ur: "اور mention" } },
      { id: '19:54:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '19:54:3', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '19:54:4', arabic: "إِسْمَـٰعِيلَ ۚ", transliteration: "is'māʿīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ishmael", ur: "Ishmael" } },
      { id: '19:54:5', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '19:54:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '19:54:7', arabic: "صَادِقَ", transliteration: "ṣādiqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "true", ur: "true" } },
      { id: '19:54:8', arabic: "ٱلْوَعْدِ", transliteration: "l-waʿdi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to his) promise", ur: "(کو his) promise" } },
      { id: '19:54:9', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and was", ur: "اور was" } },
      { id: '19:54:10', arabic: "رَسُولًۭا", transliteration: "rasūlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Messenger ", ur: "a رسول " } },
      { id: '19:54:11', arabic: "نَّبِيًّۭا", transliteration: "nabiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a Prophet", ur: "a نبی" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  55: {
    text: "وَكَانَ يَأْمُرُ أَهْلَهُۥ بِٱلصَّلَوٰةِ وَٱلزَّكَوٰةِ وَكَانَ عِندَ رَبِّهِۦ مَرْضِيًّۭا",
    translation: {
      en: "",
      ur: "اور اپنے گھر والوں کو نماز اور زکوٰة کا حکم کرتے تھے اور اپنے پروردگار کے ہاں پسندیدہ (وبرگزیدہ) تھے",
    },
    words: [
      { id: '19:55:1', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And he used", ur: "اور وہ used" } },
      { id: '19:55:2', arabic: "يَأْمُرُ", transliteration: "yamuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) enjoin", ur: "(کو) enjoin" } },
      { id: '19:55:3', arabic: "أَهْلَهُۥ", transliteration: "ahlahu", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "(on) his people", ur: "(پر) his لوگ" } },
      { id: '19:55:4', arabic: "بِٱلصَّلَوٰةِ", transliteration: "bil-ṣalati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '19:55:5', arabic: "وَٱلزَّكَوٰةِ", transliteration: "wal-zakati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and zakah", ur: "اور zakah" } },
      { id: '19:55:6', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and was", ur: "اور was" } },
      { id: '19:55:7', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near", ur: "near" } },
      { id: '19:55:8', arabic: "رَبِّهِۦ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his Lord", ur: "his رب" } },
      { id: '19:55:9', arabic: "مَرْضِيًّۭا", transliteration: "marḍiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "pleasing", ur: "pleasing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  56: {
    text: "وَٱذْكُرْ فِى ٱلْكِتَـٰبِ إِدْرِيسَ ۚ إِنَّهُۥ كَانَ صِدِّيقًۭا نَّبِيًّۭا",
    translation: {
      en: "",
      ur: "اور کتاب میں ادریس کا بھی ذکر کرو۔ وہ بھی نہایت سچے نبی تھے",
    },
    words: [
      { id: '19:56:1', arabic: "وَٱذْكُرْ", transliteration: "wa-udh'kur", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And mention", ur: "اور mention" } },
      { id: '19:56:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '19:56:3', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Book", ur: "the کتاب" } },
      { id: '19:56:4', arabic: "إِدْرِيسَ ۚ", transliteration: "id'rīsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Idris", ur: "Idris" } },
      { id: '19:56:5', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '19:56:6', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '19:56:7', arabic: "صِدِّيقًۭا", transliteration: "ṣiddīqan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "truthful", ur: "truthful" } },
      { id: '19:56:8', arabic: "نَّبِيًّۭا", transliteration: "nabiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a Prophet", ur: "a نبی" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  57: {
    text: "وَرَفَعْنَـٰهُ مَكَانًا عَلِيًّا",
    translation: {
      en: "",
      ur: "اور ہم نے ان کو اونچی جگہ اُٹھا لیا تھا",
    },
    words: [
      { id: '19:57:1', arabic: "وَرَفَعْنَـٰهُ", transliteration: "warafaʿnāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We raised him", ur: "اور ہم raised him" } },
      { id: '19:57:2', arabic: "مَكَانًا", transliteration: "makānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) a position", ur: "(کو) a position" } },
      { id: '19:57:3', arabic: "عَلِيًّا", transliteration: "ʿaliyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "high", ur: "high" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' }
      ],
    },
  },
  58: {
    text: "أُو۟لَـٰٓئِكَ ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم مِّنَ ٱلنَّبِيِّـۧنَ مِن ذُرِّيَّةِ ءَادَمَ وَمِمَّنْ حَمَلْنَا مَعَ نُوحٍۢ وَمِن ذُرِّيَّةِ إِبْرَٰهِيمَ وَإِسْرَٰٓءِيلَ وَمِمَّنْ هَدَيْنَا وَٱجْتَبَيْنَآ ۚ إِذَا تُتْلَىٰ عَلَيْهِمْ ءَايَـٰتُ ٱلرَّحْمَـٰنِ خَرُّوا۟ سُجَّدًۭا وَبُكِيًّۭا ۩",
    translation: {
      en: "",
      ur: "یہ وہ لوگ ہیں جن پر خدا نے اپنے پیغمبروں میں سے فضل کیا۔ (یعنی) اولاد آدم میں سے اور ان لوگوں میں سے جن کو نوح کے ساتھ (کشتی میں) سوار کیا اور ابراہیم اور یعقوب کی اولاد میں سے اور ان لوگوں میں سے جن کو ہم نے ہدایت دی اور برگزیدہ کیا۔ جب ان کے سامنے ہماری آیتیں پڑھی جاتی تھیں تو سجدے میں گر پڑتے اور روتے رہتے تھے",
    },
    words: [
      { id: '19:58:1', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '19:58:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) the ones whom", ur: "(were) the ones whom" } },
      { id: '19:58:3', arabic: "أَنْعَمَ", transliteration: "anʿama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah bestowed favor", ur: "اللہ bestowed favor" } },
      { id: '19:58:4', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah bestowed favor", ur: "اللہ bestowed favor" } },
      { id: '19:58:5', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '19:58:6', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from (among)", ur: "سے (among)" } },
      { id: '19:58:7', arabic: "ٱلنَّبِيِّـۧنَ", transliteration: "l-nabiyīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Prophets", ur: "the Prophets" } },
      { id: '19:58:8', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '19:58:9', arabic: "ذُرِّيَّةِ", transliteration: "dhurriyyati", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) offspring", ur: "(the) offspring" } },
      { id: '19:58:10', arabic: "ءَادَمَ", transliteration: "ādama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Adam", ur: "(of) Adam" } },
      { id: '19:58:11', arabic: "وَمِمَّنْ", transliteration: "wamimman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of those", ur: "اور of those" } },
      { id: '19:58:12', arabic: "حَمَلْنَا", transliteration: "ḥamalnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We carried", ur: "ہم carried" } },
      { id: '19:58:13', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '19:58:14', arabic: "نُوحٍۢ", transliteration: "nūḥin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nuh", ur: "Nuh" } },
      { id: '19:58:15', arabic: "وَمِن", transliteration: "wamin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of", ur: "اور of" } },
      { id: '19:58:16', arabic: "ذُرِّيَّةِ", transliteration: "dhurriyyati", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) offspring", ur: "(the) offspring" } },
      { id: '19:58:17', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Ibrahim", ur: "(of) Ibrahim" } },
      { id: '19:58:18', arabic: "وَإِسْرَٰٓءِيلَ", transliteration: "wa-is'rāīla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Israel", ur: "اور Israel" } },
      { id: '19:58:19', arabic: "وَمِمَّنْ", transliteration: "wamimman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of (those) whom", ur: "اور of (those) whom" } },
      { id: '19:58:20', arabic: "هَدَيْنَا", transliteration: "hadaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We guided", ur: "ہم guided" } },
      { id: '19:58:21', arabic: "وَٱجْتَبَيْنَآ ۚ", transliteration: "wa-ij'tabaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We chose", ur: "اور ہم chose" } },
      { id: '19:58:22', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '19:58:23', arabic: "تُتْلَىٰ", transliteration: "tut'lā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "were recited", ur: "were recited" } },
      { id: '19:58:24', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '19:58:25', arabic: "ءَايَـٰتُ", transliteration: "āyātu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Verses", ur: "(the) Verses" } },
      { id: '19:58:26', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(of) the Most Gracious", ur: "(of) the بڑا مہربان" } },
      { id: '19:58:27', arabic: "خَرُّوا۟", transliteration: "kharrū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they fell", ur: "وہ لوگ fell" } },
      { id: '19:58:28', arabic: "سُجَّدًۭا", transliteration: "sujjadan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prostrating", ur: "prostrating" } },
      { id: '19:58:29', arabic: "وَبُكِيًّۭا ۩", transliteration: "wabukiyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and weeping", ur: "اور weeping" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'موصوف + صفت' }
      ],
    },
  },
  59: {
    text: "۞ فَخَلَفَ مِنۢ بَعْدِهِمْ خَلْفٌ أَضَاعُوا۟ ٱلصَّلَوٰةَ وَٱتَّبَعُوا۟ ٱلشَّهَوَٰتِ ۖ فَسَوْفَ يَلْقَوْنَ غَيًّا",
    translation: {
      en: "",
      ur: "پھر ان کے بعد چند ناخلف ان کے جانشیں ہوئے جنہوں نے نماز کو (چھوڑ دیا گویا اسے) کھو دیا۔ اور خواہشات نفسانی کے پیچھے لگ گئے۔ سو عنقریب ان کو گمراہی (کی سزا) ملے گی",
    },
    words: [
      { id: '19:59:1', arabic: "۞ فَخَلَفَ", transliteration: "fakhalafa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then succeeded", ur: "پھر succeeded" } },
      { id: '19:59:2', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "after them", ur: "بعد them" } },
      { id: '19:59:3', arabic: "بَعْدِهِمْ", transliteration: "baʿdihim", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after them", ur: "بعد them" } },
      { id: '19:59:4', arabic: "خَلْفٌ", transliteration: "khalfun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "successors", ur: "successors" } },
      { id: '19:59:5', arabic: "أَضَاعُوا۟", transliteration: "aḍāʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who neglected", ur: "جو neglected" } },
      { id: '19:59:6', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '19:59:7', arabic: "وَٱتَّبَعُوا۟", transliteration: "wa-ittabaʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they followed", ur: "اور وہ لوگ followed" } },
      { id: '19:59:8', arabic: "ٱلشَّهَوَٰتِ ۖ", transliteration: "l-shahawāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the lusts", ur: "the lusts" } },
      { id: '19:59:9', arabic: "فَسَوْفَ", transliteration: "fasawfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so soon", ur: "so soon" } },
      { id: '19:59:10', arabic: "يَلْقَوْنَ", transliteration: "yalqawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will meet", ur: "وہ لوگ will meet" } },
      { id: '19:59:11', arabic: "غَيًّا", transliteration: "ghayyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evil", ur: "برا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  60: {
    text: "إِلَّا مَن تَابَ وَءَامَنَ وَعَمِلَ صَـٰلِحًۭا فَأُو۟لَـٰٓئِكَ يَدْخُلُونَ ٱلْجَنَّةَ وَلَا يُظْلَمُونَ شَيْـًۭٔا",
    translation: {
      en: "",
      ur: "ہاں جس نے توبہ کی اور ایمان لایا اور عمل نیک کئے تو اسے لوگ بہشت میں داخل ہوں گے اور ان کا ذرا نقصان نہ کیا جائے گا",
    },
    words: [
      { id: '19:60:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '19:60:2', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(one) who", ur: "(one) جو" } },
      { id: '19:60:3', arabic: "تَابَ", transliteration: "tāba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "repented", ur: "repented" } },
      { id: '19:60:4', arabic: "وَءَامَنَ", transliteration: "waāmana", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and believed", ur: "اور ایمان لائے" } },
      { id: '19:60:5', arabic: "وَعَمِلَ", transliteration: "waʿamila", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and did", ur: "اور did" } },
      { id: '19:60:6', arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good (deeds)", ur: "اچھا (deeds)" } },
      { id: '19:60:7', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then those", ur: "پھر those" } },
      { id: '19:60:8', arabic: "يَدْخُلُونَ", transliteration: "yadkhulūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will enter", ur: "will enter" } },
      { id: '19:60:9', arabic: "ٱلْجَنَّةَ", transliteration: "l-janata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Paradise", ur: "جنت" } },
      { id: '19:60:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '19:60:11', arabic: "يُظْلَمُونَ", transliteration: "yuẓ'lamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be wronged", ur: "وہ لوگ will be wronged" } },
      { id: '19:60:12', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) anything", ur: "(میں) anything" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  61: {
    text: "جَنَّـٰتِ عَدْنٍ ٱلَّتِى وَعَدَ ٱلرَّحْمَـٰنُ عِبَادَهُۥ بِٱلْغَيْبِ ۚ إِنَّهُۥ كَانَ وَعْدُهُۥ مَأْتِيًّۭا",
    translation: {
      en: "",
      ur: "(یعنی) بہشت جاودانی (میں) جس کا خدا نے اپنے بندوں سے وعدہ کیا ہے (اور جو ان کی آنکھوں سے) پوشیدہ (ہے)۔ بےشک اس کا وعدہ (نیکوکاروں کے سامنے) آنے والا ہے",
    },
    words: [
      { id: '19:61:1', arabic: "جَنَّـٰتِ", transliteration: "jannāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Gardens", ur: "باغات" } },
      { id: '19:61:2', arabic: "عَدْنٍ", transliteration: "ʿadnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Eden", ur: "(of) Eden" } },
      { id: '19:61:3', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '19:61:4', arabic: "وَعَدَ", transliteration: "waʿada", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "promised", ur: "promised" } },
      { id: '19:61:5', arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:61:6', arabic: "عِبَادَهُۥ", transliteration: "ʿibādahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) His slaves", ur: "(کو) His slaves" } },
      { id: '19:61:7', arabic: "بِٱلْغَيْبِ ۚ", transliteration: "bil-ghaybi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in the unseen", ur: "میں the unseen" } },
      { id: '19:61:8', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, [it]", ur: "بیشک, [it]" } },
      { id: '19:61:9', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '19:61:10', arabic: "وَعْدُهُۥ", transliteration: "waʿduhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "His promise", ur: "His promise" } },
      { id: '19:61:11', arabic: "مَأْتِيًّۭا", transliteration: "matiyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sure to come", ur: "sure کو come" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  62: {
    text: "لَّا يَسْمَعُونَ فِيهَا لَغْوًا إِلَّا سَلَـٰمًۭا ۖ وَلَهُمْ رِزْقُهُمْ فِيهَا بُكْرَةًۭ وَعَشِيًّۭا",
    translation: {
      en: "",
      ur: "وہ اس میں سلام کے سوا کوئی بیہودہ کلام نہ سنیں گے، اور ان کے لئے صبح وشام کا کھانا تیار ہوگا",
    },
    words: [
      { id: '19:62:1', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '19:62:2', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will hear", ur: "وہ لوگ will سننا" } },
      { id: '19:62:3', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '19:62:4', arabic: "لَغْوًا", transliteration: "laghwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "vain talk", ur: "vain talk" } },
      { id: '19:62:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '19:62:6', arabic: "سَلَـٰمًۭا ۖ", transliteration: "salāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "peace", ur: "peace" } },
      { id: '19:62:7', arabic: "وَلَهُمْ", transliteration: "walahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for them", ur: "اور for them" } },
      { id: '19:62:8', arabic: "رِزْقُهُمْ", transliteration: "riz'quhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) their provision", ur: "(is) their provision" } },
      { id: '19:62:9', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '19:62:10', arabic: "بُكْرَةًۭ", transliteration: "buk'ratan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "morning", ur: "morning" } },
      { id: '19:62:11', arabic: "وَعَشِيًّۭا", transliteration: "waʿashiyyan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and evening", ur: "اور evening" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  63: {
    text: "تِلْكَ ٱلْجَنَّةُ ٱلَّتِى نُورِثُ مِنْ عِبَادِنَا مَن كَانَ تَقِيًّۭا",
    translation: {
      en: "",
      ur: "یہی وہ جنت ہے جس کا ہم اپنے بندوں میں سے ایسے شخص کو وارث بنائیں گے جو پرہیزگار ہوگا",
    },
    words: [
      { id: '19:63:1', arabic: "تِلْكَ", transliteration: "til'ka", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "This", ur: "This" } },
      { id: '19:63:2', arabic: "ٱلْجَنَّةُ", transliteration: "l-janatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Paradise", ur: "(is) جنت" } },
      { id: '19:63:3', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '19:63:4', arabic: "نُورِثُ", transliteration: "nūrithu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We give (as) inheritance", ur: "ہم give (as) inheritance" } },
      { id: '19:63:5', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[of] (to)", ur: "[of] (کو)" } },
      { id: '19:63:6', arabic: "عِبَادِنَا", transliteration: "ʿibādinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our slaves", ur: "Our slaves" } },
      { id: '19:63:7', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(the one) who", ur: "(the one) جو" } },
      { id: '19:63:8', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '19:63:9', arabic: "تَقِيًّۭا", transliteration: "taqiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "righteous", ur: "نیک" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  64: {
    text: "وَمَا نَتَنَزَّلُ إِلَّا بِأَمْرِ رَبِّكَ ۖ لَهُۥ مَا بَيْنَ أَيْدِينَا وَمَا خَلْفَنَا وَمَا بَيْنَ ذَٰلِكَ ۚ وَمَا كَانَ رَبُّكَ نَسِيًّۭا",
    translation: {
      en: "",
      ur: "اور (فرشتوں نے پیغمبر کو جواب دیا کہ) ہم تمہارے پروردگار کے حکم سوا اُتر نہیں سکتے۔ جو کچھ ہمارے آگے ہے اور پیچھے ہے اور جو ان کے درمیان ہے سب اسی کا ہے اور تمہارا پروردگار بھولنے والا نہیں",
    },
    words: [
      { id: '19:64:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '19:64:2', arabic: "نَتَنَزَّلُ", transliteration: "natanazzalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we descend", ur: "ہم descend" } },
      { id: '19:64:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '19:64:4', arabic: "بِأَمْرِ", transliteration: "bi-amri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by (the) Command", ur: "by (the) Command" } },
      { id: '19:64:5', arabic: "رَبِّكَ ۖ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '19:64:6', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "To Him (belongs)", ur: "کو Him (belongs)" } },
      { id: '19:64:7', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '19:64:8', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) before us", ur: "(is) پہلے us" } },
      { id: '19:64:9', arabic: "أَيْدِينَا", transliteration: "aydīnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) before us", ur: "(is) پہلے us" } },
      { id: '19:64:10', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '19:64:11', arabic: "خَلْفَنَا", transliteration: "khalfanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) behind us", ur: "(is) behind us" } },
      { id: '19:64:12', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '19:64:13', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) between", ur: "(is) درمیان" } },
      { id: '19:64:14', arabic: "ذَٰلِكَ ۚ", transliteration: "dhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '19:64:15', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '19:64:16', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '19:64:17', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '19:64:18', arabic: "نَسِيًّۭا", transliteration: "nasiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "forgetful", ur: "forgetful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  65: {
    text: "رَّبُّ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَمَا بَيْنَهُمَا فَٱعْبُدْهُ وَٱصْطَبِرْ لِعِبَـٰدَتِهِۦ ۚ هَلْ تَعْلَمُ لَهُۥ سَمِيًّۭا",
    translation: {
      en: "",
      ur: "(یعنی) آسمان اور زمین کا اور جو ان دونوں کے درمیان ہے سب کا پروردگار ہے۔ تو اسی کی عبادت کرو اور اسی کی عبادت پر ثابت قدم رہو۔ بھلا تم کوئی اس کا ہم نام جانتے ہو",
    },
    words: [
      { id: '19:65:1', arabic: "رَّبُّ", transliteration: "rabbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lord", ur: "رب" } },
      { id: '19:65:2', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heavens", ur: "(of) the آسمان" } },
      { id: '19:65:3', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '19:65:4', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '19:65:5', arabic: "بَيْنَهُمَا", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) between both of them", ur: "(is) درمیان both of them" } },
      { id: '19:65:6', arabic: "فَٱعْبُدْهُ", transliteration: "fa-uʿ'bud'hu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so worship Him", ur: "so عبادت Him" } },
      { id: '19:65:7', arabic: "وَٱصْطَبِرْ", transliteration: "wa-iṣ'ṭabir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and be constant", ur: "اور be constant" } },
      { id: '19:65:8', arabic: "لِعِبَـٰدَتِهِۦ ۚ", transliteration: "liʿibādatihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in His worship", ur: "میں His عبادت" } },
      { id: '19:65:9', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Do", ur: "Do" } },
      { id: '19:65:10', arabic: "تَعْلَمُ", transliteration: "taʿlamu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you know", ur: "تم جاننا" } },
      { id: '19:65:11', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for Him", ur: "for Him" } },
      { id: '19:65:12', arabic: "سَمِيًّۭا", transliteration: "samiyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any similarity", ur: "any similarity" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  66: {
    text: "وَيَقُولُ ٱلْإِنسَـٰنُ أَءِذَا مَا مِتُّ لَسَوْفَ أُخْرَجُ حَيًّا",
    translation: {
      en: "",
      ur: "اور (کافر) انسان کہتا ہے کہ جب میں مر جاؤ گا تو کیا زندہ کرکے نکالا جاؤں گا؟",
    },
    words: [
      { id: '19:66:1', arabic: "وَيَقُولُ", transliteration: "wayaqūlu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And says", ur: "اور کہتا ہے" } },
      { id: '19:66:2', arabic: "ٱلْإِنسَـٰنُ", transliteration: "l-insānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] man", ur: "[the] man" } },
      { id: '19:66:3', arabic: "أَءِذَا", transliteration: "a-idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "What! When", ur: "کیا! When" } },
      { id: '19:66:4', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "What! When", ur: "کیا! When" } },
      { id: '19:66:5', arabic: "مِتُّ", transliteration: "mittu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am dead", ur: "میں am dead" } },
      { id: '19:66:6', arabic: "لَسَوْفَ", transliteration: "lasawfa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely will", ur: "یقیناً will" } },
      { id: '19:66:7', arabic: "أُخْرَجُ", transliteration: "ukh'raju", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I be brought forth", ur: "میں be brought forth" } },
      { id: '19:66:8', arabic: "حَيًّا", transliteration: "ḥayyan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "alive", ur: "alive" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  67: {
    text: "أَوَلَا يَذْكُرُ ٱلْإِنسَـٰنُ أَنَّا خَلَقْنَـٰهُ مِن قَبْلُ وَلَمْ يَكُ شَيْـًۭٔا",
    translation: {
      en: "",
      ur: "کیا (ایسا) انسان یاد نہیں کرتا کہ ہم نے اس کو پہلے بھی پیدا کیا تھا اور وہ کچھ بھی چیز نہ تھا",
    },
    words: [
      { id: '19:67:1', arabic: "أَوَلَا", transliteration: "awalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Does not", ur: "Does نہیں" } },
      { id: '19:67:2', arabic: "يَذْكُرُ", transliteration: "yadhkuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "remember", ur: "remember" } },
      { id: '19:67:3', arabic: "ٱلْإِنسَـٰنُ", transliteration: "l-insānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] man", ur: "[the] man" } },
      { id: '19:67:4', arabic: "أَنَّا", transliteration: "annā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that We", ur: "وہ ہم" } },
      { id: '19:67:5', arabic: "خَلَقْنَـٰهُ", transliteration: "khalaqnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We created him", ur: "ہم پیدا کیا him" } },
      { id: '19:67:6', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '19:67:7', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '19:67:8', arabic: "وَلَمْ", transliteration: "walam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while not", ur: "while نہیں" } },
      { id: '19:67:9', arabic: "يَكُ", transliteration: "yaku", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he was", ur: "وہ was" } },
      { id: '19:67:10', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  68: {
    text: "فَوَرَبِّكَ لَنَحْشُرَنَّهُمْ وَٱلشَّيَـٰطِينَ ثُمَّ لَنُحْضِرَنَّهُمْ حَوْلَ جَهَنَّمَ جِثِيًّۭا",
    translation: {
      en: "",
      ur: "تمہارے پروردگار کی قسم! ہم ان کو جمع کریں گے اور شیطانوں کو بھی۔ پھر ان سب کو جہنم کے گرد حاضر کریں گے (اور وہ) گھٹنوں پر گرے ہوئے (ہوں گے)",
    },
    words: [
      { id: '19:68:1', arabic: "فَوَرَبِّكَ", transliteration: "fawarabbika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So by your Lord", ur: "So by your رب" } },
      { id: '19:68:2', arabic: "لَنَحْشُرَنَّهُمْ", transliteration: "lanaḥshurannahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, We will gather them", ur: "یقیناً, ہم will gather them" } },
      { id: '19:68:3', arabic: "وَٱلشَّيَـٰطِينَ", transliteration: "wal-shayāṭīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the devils", ur: "اور the devils" } },
      { id: '19:68:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '19:68:5', arabic: "لَنُحْضِرَنَّهُمْ", transliteration: "lanuḥ'ḍirannahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, We will bring them", ur: "یقیناً, ہم will bring them" } },
      { id: '19:68:6', arabic: "حَوْلَ", transliteration: "ḥawla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "around", ur: "around" } },
      { id: '19:68:7', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hell", ur: "جہنم" } },
      { id: '19:68:8', arabic: "جِثِيًّۭا", transliteration: "jithiyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "bent (on) knees", ur: "bent (پر) knees" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  69: {
    text: "ثُمَّ لَنَنزِعَنَّ مِن كُلِّ شِيعَةٍ أَيُّهُمْ أَشَدُّ عَلَى ٱلرَّحْمَـٰنِ عِتِيًّۭا",
    translation: {
      en: "",
      ur: "پھر ہر جماعت میں سے ہم ایسے لوگوں کو کھینچ نکالیں گے جو خدا سے سخت سرکشی کرتے تھے",
    },
    words: [
      { id: '19:69:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '19:69:2', arabic: "لَنَنزِعَنَّ", transliteration: "lananziʿanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, We will drag out", ur: "یقیناً, ہم will drag out" } },
      { id: '19:69:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '19:69:4', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '19:69:5', arabic: "شِيعَةٍ", transliteration: "shīʿatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sect", ur: "sect" } },
      { id: '19:69:6', arabic: "أَيُّهُمْ", transliteration: "ayyuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those of them", ur: "those of them" } },
      { id: '19:69:7', arabic: "أَشَدُّ", transliteration: "ashaddu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who were) worst", ur: "(جو were) worst" } },
      { id: '19:69:8', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '19:69:9', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:69:10', arabic: "عِتِيًّۭا", transliteration: "ʿitiyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) rebellion", ur: "(میں) rebellion" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  70: {
    text: "ثُمَّ لَنَحْنُ أَعْلَمُ بِٱلَّذِينَ هُمْ أَوْلَىٰ بِهَا صِلِيًّۭا",
    translation: {
      en: "",
      ur: "اور ہم ان لوگوں سے خوب واقف ہیں جو ان میں داخل ہونے کے زیادہ لائق ہیں",
    },
    words: [
      { id: '19:70:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '19:70:2', arabic: "لَنَحْنُ", transliteration: "lanaḥnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, We", ur: "یقیناً, ہم" } },
      { id: '19:70:3', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "know best", ur: "جاننا best" } },
      { id: '19:70:4', arabic: "بِٱلَّذِينَ", transliteration: "bi-alladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[of] those who", ur: "[of] جو لوگ" } },
      { id: '19:70:5', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[they]", ur: "[وہ لوگ]" } },
      { id: '19:70:6', arabic: "أَوْلَىٰ", transliteration: "awlā", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(are) most worthy", ur: "(are) most worthy" } },
      { id: '19:70:7', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '19:70:8', arabic: "صِلِيًّۭا", transliteration: "ṣiliyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) being burnt", ur: "(of) being burnt" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  71: {
    text: "وَإِن مِّنكُمْ إِلَّا وَارِدُهَا ۚ كَانَ عَلَىٰ رَبِّكَ حَتْمًۭا مَّقْضِيًّۭا",
    translation: {
      en: "",
      ur: "اور تم میں کوئی (شخص) نہیں مگر اسے اس پر گزرنا ہوگا۔ یہ تمہارے پروردگار پر لازم اور مقرر ہے",
    },
    words: [
      { id: '19:71:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (there is) not", ur: "اور (there is) نہیں" } },
      { id: '19:71:2', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(any) of you", ur: "(any) of تم" } },
      { id: '19:71:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '19:71:4', arabic: "وَارِدُهَا ۚ", transliteration: "wāriduhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(will be) passing over it", ur: "(will be) passing اوپر it" } },
      { id: '19:71:5', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(This) is", ur: "(This) is" } },
      { id: '19:71:6', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '19:71:7', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '19:71:8', arabic: "حَتْمًۭا", transliteration: "ḥatman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an inevitability", ur: "an inevitability" } },
      { id: '19:71:9', arabic: "مَّقْضِيًّۭا", transliteration: "maqḍiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "decreed", ur: "decreed" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  72: {
    text: "ثُمَّ نُنَجِّى ٱلَّذِينَ ٱتَّقَوا۟ وَّنَذَرُ ٱلظَّـٰلِمِينَ فِيهَا جِثِيًّۭا",
    translation: {
      en: "",
      ur: "پھر ہم پرہیزگاروں کو نجات دیں گے۔ اور ظالموں کو اس میں گھٹنوں کے بل پڑا ہوا چھوڑ دیں گے",
    },
    words: [
      { id: '19:72:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '19:72:2', arabic: "نُنَجِّى", transliteration: "nunajjī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will deliver", ur: "ہم will deliver" } },
      { id: '19:72:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '19:72:4', arabic: "ٱتَّقَوا۟", transliteration: "ittaqaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "feared (Allah)", ur: "feared (اللہ)" } },
      { id: '19:72:5', arabic: "وَّنَذَرُ", transliteration: "wanadharu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "and We will leave", ur: "اور ہم will leave" } },
      { id: '19:72:6', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } },
      { id: '19:72:7', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '19:72:8', arabic: "جِثِيًّۭا", transliteration: "jithiyyan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "bent (on) knees", ur: "bent (پر) knees" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  73: {
    text: "وَإِذَا تُتْلَىٰ عَلَيْهِمْ ءَايَـٰتُنَا بَيِّنَـٰتٍۢ قَالَ ٱلَّذِينَ كَفَرُوا۟ لِلَّذِينَ ءَامَنُوٓا۟ أَىُّ ٱلْفَرِيقَيْنِ خَيْرٌۭ مَّقَامًۭا وَأَحْسَنُ نَدِيًّۭا",
    translation: {
      en: "",
      ur: "اور جب ان لوگوں کے سامنے ہماری آیتیں پڑھی جاتی ہیں تو جو کافر ہیں وہ مومنوں سے کہتے ہیں کہ دونوں فریق میں سے مکان کس کے اچھے اور مجلسیں کس کی بہتر ہیں",
    },
    words: [
      { id: '19:73:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '19:73:2', arabic: "تُتْلَىٰ", transliteration: "tut'lā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are recited", ur: "are recited" } },
      { id: '19:73:3', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '19:73:4', arabic: "ءَايَـٰتُنَا", transliteration: "āyātunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '19:73:5', arabic: "بَيِّنَـٰتٍۢ", transliteration: "bayyinātin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } },
      { id: '19:73:6', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "say", ur: "کہو" } },
      { id: '19:73:7', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '19:73:8', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '19:73:9', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to those who", ur: "کو جو لوگ" } },
      { id: '19:73:10', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '19:73:11', arabic: "أَىُّ", transliteration: "ayyu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Which", ur: "جو" } },
      { id: '19:73:12', arabic: "ٱلْفَرِيقَيْنِ", transliteration: "l-farīqayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the two groups", ur: "(of) the two groups" } },
      { id: '19:73:13', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) better", ur: "(is) better" } },
      { id: '19:73:14', arabic: "مَّقَامًۭا", transliteration: "maqāman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) position", ur: "(میں) position" } },
      { id: '19:73:15', arabic: "وَأَحْسَنُ", transliteration: "wa-aḥsanu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and best", ur: "اور best" } },
      { id: '19:73:16', arabic: "نَدِيًّۭا", transliteration: "nadiyyan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) assembly", ur: "(میں) assembly" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  74: {
    text: "وَكَمْ أَهْلَكْنَا قَبْلَهُم مِّن قَرْنٍ هُمْ أَحْسَنُ أَثَـٰثًۭا وَرِءْيًۭا",
    translation: {
      en: "",
      ur: "اور ہم نے ان سے پہلے بہت سی اُمتیں ہلاک کردیں۔ وہ لوگ (ان سے) ٹھاٹھ اور نمود میں کہیں اچھے تھے",
    },
    words: [
      { id: '19:74:1', arabic: "وَكَمْ", transliteration: "wakam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And how many", ur: "اور how many" } },
      { id: '19:74:2', arabic: "أَهْلَكْنَا", transliteration: "ahlaknā", pos: ['V'], posLabel: 'V', root: "أ ه ل", meaning: { en: "We destroyed", ur: "ہم destroyed" } },
      { id: '19:74:3', arabic: "قَبْلَهُم", transliteration: "qablahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before them", ur: "پہلے them" } },
      { id: '19:74:4', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '19:74:5', arabic: "قَرْنٍ", transliteration: "qarnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a generation ", ur: "a generation " } },
      { id: '19:74:6', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '19:74:7', arabic: "أَحْسَنُ", transliteration: "aḥsanu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) better", ur: "(were) better" } },
      { id: '19:74:8', arabic: "أَثَـٰثًۭا", transliteration: "athāthan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) possessions", ur: "(میں) possessions" } },
      { id: '19:74:9', arabic: "وَرِءْيًۭا", transliteration: "wari'yan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and appearance", ur: "اور appearance" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  75: {
    text: "قُلْ مَن كَانَ فِى ٱلضَّلَـٰلَةِ فَلْيَمْدُدْ لَهُ ٱلرَّحْمَـٰنُ مَدًّا ۚ حَتَّىٰٓ إِذَا رَأَوْا۟ مَا يُوعَدُونَ إِمَّا ٱلْعَذَابَ وَإِمَّا ٱلسَّاعَةَ فَسَيَعْلَمُونَ مَنْ هُوَ شَرٌّۭ مَّكَانًۭا وَأَضْعَفُ جُندًۭا",
    translation: {
      en: "",
      ur: "کہہ دو کہ جو شخص گمراہی میں پڑا ہوا ہے خدا اس کو آہستہ آہستہ مہلت دیئے جاتا ہے۔ یہاں تک کہ جب اس چیز کو دیکھ لیں گے جس کا ان سے وعدہ کیا جاتا ہے خواہ عذاب اور خواہ قیامت۔ تو (اس وقت) جان لیں گے کہ مکان کس کا برا ہے اور لشکر کس کا کمزور ہے",
    },
    words: [
      { id: '19:75:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '19:75:2', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '19:75:3', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '19:75:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '19:75:5', arabic: "ٱلضَّلَـٰلَةِ", transliteration: "l-ḍalālati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] error", ur: "[the] error" } },
      { id: '19:75:6', arabic: "فَلْيَمْدُدْ", transliteration: "falyamdud", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then surely will extend", ur: "پھر یقیناً will extend" } },
      { id: '19:75:7', arabic: "لَهُ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '19:75:8', arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:75:9', arabic: "مَدًّا ۚ", transliteration: "maddan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an extension", ur: "an extension" } },
      { id: '19:75:10', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '19:75:11', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '19:75:12', arabic: "رَأَوْا۟", transliteration: "ra-aw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '19:75:13', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '19:75:14', arabic: "يُوعَدُونَ", transliteration: "yūʿadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were promised", ur: "وہ لوگ were promised" } },
      { id: '19:75:15', arabic: "إِمَّا", transliteration: "immā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "either", ur: "either" } },
      { id: '19:75:16', arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '19:75:17', arabic: "وَإِمَّا", transliteration: "wa-immā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '19:75:18', arabic: "ٱلسَّاعَةَ", transliteration: "l-sāʿata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hour", ur: "the Hour" } },
      { id: '19:75:19', arabic: "فَسَيَعْلَمُونَ", transliteration: "fasayaʿlamūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ع ل م", meaning: { en: "then they will know", ur: "پھر وہ لوگ will جاننا" } },
      { id: '19:75:20', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '19:75:21', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[he]", ur: "[وہ]" } },
      { id: '19:75:22', arabic: "شَرٌّۭ", transliteration: "sharrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) worst", ur: "(is) worst" } },
      { id: '19:75:23', arabic: "مَّكَانًۭا", transliteration: "makānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) position", ur: "(میں) position" } },
      { id: '19:75:24', arabic: "وَأَضْعَفُ", transliteration: "wa-aḍʿafu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and weaker", ur: "اور weaker" } },
      { id: '19:75:25', arabic: "جُندًۭا", transliteration: "jundan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) forces", ur: "(میں) forces" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'موصوف + صفت' },
        { from: 13, to: 14, label: 'موصول + صلة' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  76: {
    text: "وَيَزِيدُ ٱللَّهُ ٱلَّذِينَ ٱهْتَدَوْا۟ هُدًۭى ۗ وَٱلْبَـٰقِيَـٰتُ ٱلصَّـٰلِحَـٰتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًۭا وَخَيْرٌۭ مَّرَدًّا",
    translation: {
      en: "",
      ur: "اور جو لوگ ہدایت یاب ہیں خدا ان کو زیادہ ہدایت دیتا ہے۔ اور نیکیاں جو باقی رہنے والی ہیں وہ تمہارے پروردگار کے صلے کے لحاظ سے خوب اور انجام کے اعتبار سے بہتر ہیں",
    },
    words: [
      { id: '19:76:1', arabic: "وَيَزِيدُ", transliteration: "wayazīdu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah increases", ur: "اور اللہ increases" } },
      { id: '19:76:2', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And Allah increases", ur: "اور اللہ increases" } },
      { id: '19:76:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '19:76:4', arabic: "ٱهْتَدَوْا۟", transliteration: "ih'tadaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "accept guidance", ur: "accept guidance" } },
      { id: '19:76:5', arabic: "هُدًۭى ۗ", transliteration: "hudan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) guidance", ur: "(میں) guidance" } },
      { id: '19:76:6', arabic: "وَٱلْبَـٰقِيَـٰتُ", transliteration: "wal-bāqiyātu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the everlasting", ur: "اور the everlasting" } },
      { id: '19:76:7', arabic: "ٱلصَّـٰلِحَـٰتُ", transliteration: "l-ṣāliḥātu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good deeds", ur: "اچھا deeds" } },
      { id: '19:76:8', arabic: "خَيْرٌ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) better", ur: "(are) better" } },
      { id: '19:76:9', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near", ur: "near" } },
      { id: '19:76:10', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '19:76:11', arabic: "ثَوَابًۭا", transliteration: "thawāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) reward", ur: "(for) ثواب" } },
      { id: '19:76:12', arabic: "وَخَيْرٌۭ", transliteration: "wakhayrun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and better", ur: "اور better" } },
      { id: '19:76:13', arabic: "مَّرَدًّا", transliteration: "maraddan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) return", ur: "(for) return" } }
    ],
    structure: {
      relationships: [
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
      ],
    },
  },
  77: {
    text: "أَفَرَءَيْتَ ٱلَّذِى كَفَرَ بِـَٔايَـٰتِنَا وَقَالَ لَأُوتَيَنَّ مَالًۭا وَوَلَدًا",
    translation: {
      en: "",
      ur: "بھلا تم نے اس شخص کو دیکھا جس نے ہماری آیتوں سے کفر کیا اور کہنے لگا کہ (اگر میں ازسرنو زندہ ہوا بھی تو یہی) مال اور اولاد مجھے (وہاں) ملے گا",
    },
    words: [
      { id: '19:77:1', arabic: "أَفَرَءَيْتَ", transliteration: "afara-ayta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then, have you seen", ur: "پھر, have تم seen" } },
      { id: '19:77:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he who", ur: "وہ جو" } },
      { id: '19:77:3', arabic: "كَفَرَ", transliteration: "kafara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '19:77:4', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Our Verses", ur: "میں Our Verses" } },
      { id: '19:77:5', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and said", ur: "اور کہا" } },
      { id: '19:77:6', arabic: "لَأُوتَيَنَّ", transliteration: "laūtayanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Surely, I will be given", ur: "یقیناً, میں will be given" } },
      { id: '19:77:7', arabic: "مَالًۭا", transliteration: "mālan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wealth", ur: "wealth" } },
      { id: '19:77:8', arabic: "وَوَلَدًا", transliteration: "wawaladan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and children", ur: "اور اولاد" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  78: {
    text: "أَطَّلَعَ ٱلْغَيْبَ أَمِ ٱتَّخَذَ عِندَ ٱلرَّحْمَـٰنِ عَهْدًۭا",
    translation: {
      en: "",
      ur: "کیا اس نے غیب کی خبر پالی ہے یا خدا کے یہاں (سے) عہد لے لیا ہے؟",
    },
    words: [
      { id: '19:78:1', arabic: "أَطَّلَعَ", transliteration: "aṭṭalaʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Has he looked", ur: "Has وہ looked" } },
      { id: '19:78:2', arabic: "ٱلْغَيْبَ", transliteration: "l-ghayba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(into) the unseen", ur: "(into) the unseen" } },
      { id: '19:78:3', arabic: "أَمِ", transliteration: "ami", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '19:78:4', arabic: "ٱتَّخَذَ", transliteration: "ittakhadha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has he taken", ur: "has وہ taken" } },
      { id: '19:78:5', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '19:78:6', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:78:7', arabic: "عَهْدًۭا", transliteration: "ʿahdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a promise", ur: "a promise" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  79: {
    text: "كَلَّا ۚ سَنَكْتُبُ مَا يَقُولُ وَنَمُدُّ لَهُۥ مِنَ ٱلْعَذَابِ مَدًّۭا",
    translation: {
      en: "",
      ur: "ہرگز نہیں۔ یہ جو کچھ کہتا ہے ہم اس کو لکھتے جاتے اور اس کے لئے آہستہ آہستہ عذاب بڑھاتے جاتے ہیں",
    },
    words: [
      { id: '19:79:1', arabic: "كَلَّا ۚ", transliteration: "kallā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '19:79:2', arabic: "سَنَكْتُبُ", transliteration: "sanaktubu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will record", ur: "ہم will record" } },
      { id: '19:79:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '19:79:4', arabic: "يَقُولُ", transliteration: "yaqūlu", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he says", ur: "وہ کہتا ہے" } },
      { id: '19:79:5', arabic: "وَنَمُدُّ", transliteration: "wanamuddu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We will extend", ur: "اور ہم will extend" } },
      { id: '19:79:6', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '19:79:7', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '19:79:8', arabic: "ٱلْعَذَابِ", transliteration: "l-ʿadhābi", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '19:79:9', arabic: "مَدًّۭا", transliteration: "maddan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "extensively", ur: "extensively" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  80: {
    text: "وَنَرِثُهُۥ مَا يَقُولُ وَيَأْتِينَا فَرْدًۭا",
    translation: {
      en: "",
      ur: "اور جو چیزیں یہ بتاتا ہے ان کے ہم وارث ہوں گے اور یہ اکیلا ہمارے سامنے آئے گا",
    },
    words: [
      { id: '19:80:1', arabic: "وَنَرِثُهُۥ", transliteration: "wanarithuhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We will inherit (from) him", ur: "اور ہم will inherit (سے) him" } },
      { id: '19:80:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '19:80:3', arabic: "يَقُولُ", transliteration: "yaqūlu", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he says", ur: "وہ کہتا ہے" } },
      { id: '19:80:4', arabic: "وَيَأْتِينَا", transliteration: "wayatīnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and he will come to Us", ur: "اور وہ will come کو Us" } },
      { id: '19:80:5', arabic: "فَرْدًۭا", transliteration: "fardan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "alone", ur: "alone" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' }
      ],
    },
  },
  81: {
    text: "وَٱتَّخَذُوا۟ مِن دُونِ ٱللَّهِ ءَالِهَةًۭ لِّيَكُونُوا۟ لَهُمْ عِزًّۭا",
    translation: {
      en: "",
      ur: "اور ان لوگوں نے خدا کے سوا اور معبود بنالئے ہیں تاکہ وہ ان کے لئے (موجب عزت و) مدد ہوں",
    },
    words: [
      { id: '19:81:1', arabic: "وَٱتَّخَذُوا۟", transliteration: "wa-ittakhadhū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they have taken", ur: "اور وہ لوگ have taken" } },
      { id: '19:81:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '19:81:3', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '19:81:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '19:81:5', arabic: "ءَالِهَةًۭ", transliteration: "ālihatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gods", ur: "gods" } },
      { id: '19:81:6', arabic: "لِّيَكُونُوا۟", transliteration: "liyakūnū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "that they may be", ur: "وہ وہ لوگ may be" } },
      { id: '19:81:7', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '19:81:8', arabic: "عِزًّۭا", transliteration: "ʿizzan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an honor", ur: "an honor" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  82: {
    text: "كَلَّا ۚ سَيَكْفُرُونَ بِعِبَادَتِهِمْ وَيَكُونُونَ عَلَيْهِمْ ضِدًّا",
    translation: {
      en: "",
      ur: "ہرگز نہیں وہ (معبودان باطل) ان کی پرستش سے انکار کریں گے اور ان کے دشمن (ومخالف) ہوں گے",
    },
    words: [
      { id: '19:82:1', arabic: "كَلَّا ۚ", transliteration: "kallā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '19:82:2', arabic: "سَيَكْفُرُونَ", transliteration: "sayakfurūna", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "they will deny", ur: "وہ لوگ will deny" } },
      { id: '19:82:3', arabic: "بِعِبَادَتِهِمْ", transliteration: "biʿibādatihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "their worship (of them)", ur: "their عبادت (of them)" } },
      { id: '19:82:4', arabic: "وَيَكُونُونَ", transliteration: "wayakūnūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and they will be", ur: "اور وہ لوگ will be" } },
      { id: '19:82:5', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against them", ur: "against them" } },
      { id: '19:82:6', arabic: "ضِدًّا", transliteration: "ḍiddan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "opponents", ur: "opponents" } }
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
  83: {
    text: "أَلَمْ تَرَ أَنَّآ أَرْسَلْنَا ٱلشَّيَـٰطِينَ عَلَى ٱلْكَـٰفِرِينَ تَؤُزُّهُمْ أَزًّۭا",
    translation: {
      en: "",
      ur: "کیا تم نے نہیں دیکھا کہ ہم نے شیطانوں کو کافروں پر چھوڑ رکھا ہے کہ ان کو برانگیختہ کرتے رہتے ہیں",
    },
    words: [
      { id: '19:83:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '19:83:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '19:83:3', arabic: "أَنَّآ", transliteration: "annā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that We", ur: "وہ ہم" } },
      { id: '19:83:4', arabic: "أَرْسَلْنَا", transliteration: "arsalnā", pos: ['N'], posLabel: 'N', root: "ر س ل", meaning: { en: "[We] have sent", ur: "[ہم] have sent" } },
      { id: '19:83:5', arabic: "ٱلشَّيَـٰطِينَ", transliteration: "l-shayāṭīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the devils", ur: "the devils" } },
      { id: '19:83:6', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '19:83:7', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the disbelievers", ur: "the کافر" } },
      { id: '19:83:8', arabic: "تَؤُزُّهُمْ", transliteration: "ta-uzzuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "inciting them", ur: "inciting them" } },
      { id: '19:83:9', arabic: "أَزًّۭا", transliteration: "azzan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) incitement", ur: "(ساتھ) incitement" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  84: {
    text: "فَلَا تَعْجَلْ عَلَيْهِمْ ۖ إِنَّمَا نَعُدُّ لَهُمْ عَدًّۭا",
    translation: {
      en: "",
      ur: "تو تم ان پر (عذاب کے لئے) جلدی نہ کرو۔ اور ہم تو ان کے لئے (دن) شمار کر رہے ہیں",
    },
    words: [
      { id: '19:84:1', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So (do) not", ur: "So (do) نہیں" } },
      { id: '19:84:2', arabic: "تَعْجَلْ", transliteration: "taʿjal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "make haste", ur: "make haste" } },
      { id: '19:84:3', arabic: "عَلَيْهِمْ ۖ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against them", ur: "against them" } },
      { id: '19:84:4', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '19:84:5', arabic: "نَعُدُّ", transliteration: "naʿuddu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We count", ur: "ہم count" } },
      { id: '19:84:6', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '19:84:7', arabic: "عَدًّۭا", transliteration: "ʿaddan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a number", ur: "a number" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  85: {
    text: "يَوْمَ نَحْشُرُ ٱلْمُتَّقِينَ إِلَى ٱلرَّحْمَـٰنِ وَفْدًۭا",
    translation: {
      en: "",
      ur: "جس روز ہم پرہیزگاروں کو خدا کے سامنے (بطور) مہمان جمع کریں گے",
    },
    words: [
      { id: '19:85:1', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(The) Day", ur: "(The) دن" } },
      { id: '19:85:2', arabic: "نَحْشُرُ", transliteration: "naḥshuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will gather", ur: "ہم will gather" } },
      { id: '19:85:3', arabic: "ٱلْمُتَّقِينَ", transliteration: "l-mutaqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the righteous", ur: "the نیک" } },
      { id: '19:85:4', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '19:85:5', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:85:6', arabic: "وَفْدًۭا", transliteration: "wafdan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(as) a delegation", ur: "(as) a delegation" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  86: {
    text: "وَنَسُوقُ ٱلْمُجْرِمِينَ إِلَىٰ جَهَنَّمَ وِرْدًۭا",
    translation: {
      en: "",
      ur: "اور گنہگاروں کو دوزخ کی طرف پیاسے ہانک لے جائیں گے",
    },
    words: [
      { id: '19:86:1', arabic: "وَنَسُوقُ", transliteration: "wanasūqu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We will drive", ur: "اور ہم will drive" } },
      { id: '19:86:2', arabic: "ٱلْمُجْرِمِينَ", transliteration: "l-muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the criminals", ur: "the criminals" } },
      { id: '19:86:3', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '19:86:4', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hell", ur: "جہنم" } },
      { id: '19:86:5', arabic: "وِرْدًۭا", transliteration: "wir'dan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "thirsty", ur: "thirsty" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  87: {
    text: "لَّا يَمْلِكُونَ ٱلشَّفَـٰعَةَ إِلَّا مَنِ ٱتَّخَذَ عِندَ ٱلرَّحْمَـٰنِ عَهْدًۭا",
    translation: {
      en: "",
      ur: "(تو لوگ) کسی کی سفارش کا اختیار نہ رکھیں گے مگر جس نے خدا سے اقرار لیا ہو",
    },
    words: [
      { id: '19:87:1', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '19:87:2', arabic: "يَمْلِكُونَ", transliteration: "yamlikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will have the power", ur: "وہ لوگ will have the power" } },
      { id: '19:87:3', arabic: "ٱلشَّفَـٰعَةَ", transliteration: "l-shafāʿata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the intercession", ur: "(of) the intercession" } },
      { id: '19:87:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '19:87:5', arabic: "مَنِ", transliteration: "mani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(he) who", ur: "(وہ) جو" } },
      { id: '19:87:6', arabic: "ٱتَّخَذَ", transliteration: "ittakhadha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has taken", ur: "has taken" } },
      { id: '19:87:7', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '19:87:8', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:87:9', arabic: "عَهْدًۭا", transliteration: "ʿahdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a covenant", ur: "a covenant" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  88: {
    text: "وَقَالُوا۟ ٱتَّخَذَ ٱلرَّحْمَـٰنُ وَلَدًۭا",
    translation: {
      en: "",
      ur: "اور کہتے ہیں کہ خدا بیٹا رکھتا ہے",
    },
    words: [
      { id: '19:88:1', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '19:88:2', arabic: "ٱتَّخَذَ", transliteration: "ittakhadha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Has taken", ur: "Has taken" } },
      { id: '19:88:3', arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:88:4', arabic: "وَلَدًۭا", transliteration: "waladan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a son", ur: "a بیٹا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },
  89: {
    text: "لَّقَدْ جِئْتُمْ شَيْـًٔا إِدًّۭا",
    translation: {
      en: "",
      ur: "(ایسا کہنے والو یہ تو) تم بری بات (زبان پر) لائے ہو",
    },
    words: [
      { id: '19:89:1', arabic: "لَّقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '19:89:2', arabic: "جِئْتُمْ", transliteration: "ji'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have put forth", ur: "تم have put forth" } },
      { id: '19:89:3', arabic: "شَيْـًٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a thing", ur: "a thing" } },
      { id: '19:89:4', arabic: "إِدًّۭا", transliteration: "iddan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "atrocious", ur: "atrocious" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  90: {
    text: "تَكَادُ ٱلسَّمَـٰوَٰتُ يَتَفَطَّرْنَ مِنْهُ وَتَنشَقُّ ٱلْأَرْضُ وَتَخِرُّ ٱلْجِبَالُ هَدًّا",
    translation: {
      en: "",
      ur: "قریب ہے کہ اس (افتراء) سے آسمان پھٹ پڑیں اور زمین شق ہوجائے اور پہاڑ پارہ پارہ ہو کر گر پڑیں",
    },
    words: [
      { id: '19:90:1', arabic: "تَكَادُ", transliteration: "takādu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Almost", ur: "Almost" } },
      { id: '19:90:2', arabic: "ٱلسَّمَـٰوَٰتُ", transliteration: "l-samāwātu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '19:90:3', arabic: "يَتَفَطَّرْنَ", transliteration: "yatafaṭṭarna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "get torn", ur: "get torn" } },
      { id: '19:90:4', arabic: "مِنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therefrom", ur: "therefrom" } },
      { id: '19:90:5', arabic: "وَتَنشَقُّ", transliteration: "watanshaqqu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and splits asunder", ur: "اور splits asunder" } },
      { id: '19:90:6', arabic: "ٱلْأَرْضُ", transliteration: "l-arḍu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earth", ur: "زمین" } },
      { id: '19:90:7', arabic: "وَتَخِرُّ", transliteration: "watakhirru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and collapse", ur: "اور collapse" } },
      { id: '19:90:8', arabic: "ٱلْجِبَالُ", transliteration: "l-jibālu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mountain", ur: "the mountain" } },
      { id: '19:90:9', arabic: "هَدًّا", transliteration: "haddan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) devastation", ur: "(میں) devastation" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  91: {
    text: "أَن دَعَوْا۟ لِلرَّحْمَـٰنِ وَلَدًۭا",
    translation: {
      en: "",
      ur: "کہ انہوں نے خدا کے لئے بیٹا تجویز کیا",
    },
    words: [
      { id: '19:91:1', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '19:91:2', arabic: "دَعَوْا۟", transliteration: "daʿaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they invoke", ur: "وہ لوگ invoke" } },
      { id: '19:91:3', arabic: "لِلرَّحْمَـٰنِ", transliteration: "lilrraḥmāni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the Most Gracious", ur: "کو the بڑا مہربان" } },
      { id: '19:91:4', arabic: "وَلَدًۭا", transliteration: "waladan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a son", ur: "a بیٹا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  92: {
    text: "وَمَا يَنۢبَغِى لِلرَّحْمَـٰنِ أَن يَتَّخِذَ وَلَدًا",
    translation: {
      en: "",
      ur: "اور خدا کو شایاں نہیں کہ کسی کو بیٹا بنائے",
    },
    words: [
      { id: '19:92:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '19:92:2', arabic: "يَنۢبَغِى", transliteration: "yanbaghī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is appropriate", ur: "is appropriate" } },
      { id: '19:92:3', arabic: "لِلرَّحْمَـٰنِ", transliteration: "lilrraḥmāni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the Most Gracious", ur: "for the بڑا مہربان" } },
      { id: '19:92:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '19:92:5', arabic: "يَتَّخِذَ", transliteration: "yattakhidha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He should take", ur: "وہ should take" } },
      { id: '19:92:6', arabic: "وَلَدًا", transliteration: "waladan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a son", ur: "a بیٹا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  93: {
    text: "إِن كُلُّ مَن فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ إِلَّآ ءَاتِى ٱلرَّحْمَـٰنِ عَبْدًۭا",
    translation: {
      en: "",
      ur: "تمام شخص جو آسمانوں اور زمین میں ہیں سب خدا کے روبرو بندے ہو کر آئیں گے",
    },
    words: [
      { id: '19:93:1', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '19:93:2', arabic: "كُلُّ", transliteration: "kullu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '19:93:3', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '19:93:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) in", ur: "(are) میں" } },
      { id: '19:93:5', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '19:93:6', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '19:93:7', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '19:93:8', arabic: "ءَاتِى", transliteration: "ātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) come", ur: "(will) come" } },
      { id: '19:93:9', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(to) the Most Gracious", ur: "(کو) the بڑا مہربان" } },
      { id: '19:93:10', arabic: "عَبْدًۭا", transliteration: "ʿabdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a slave", ur: "(as) a slave" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'موصوف + صفت' }
      ],
    },
  },
  94: {
    text: "لَّقَدْ أَحْصَىٰهُمْ وَعَدَّهُمْ عَدًّۭا",
    translation: {
      en: "",
      ur: "اُس نے ان (سب) کو (اپنے علم سے) گھیر رکھا اور (ایک ایک کو) شمار کر رکھا ہے",
    },
    words: [
      { id: '19:94:1', arabic: "لَّقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '19:94:2', arabic: "أَحْصَىٰهُمْ", transliteration: "aḥṣāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has enumerated them", ur: "وہ has enumerated them" } },
      { id: '19:94:3', arabic: "وَعَدَّهُمْ", transliteration: "waʿaddahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and counted them", ur: "اور counted them" } },
      { id: '19:94:4', arabic: "عَدًّۭا", transliteration: "ʿaddan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a counting", ur: "a counting" } }
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
    text: "وَكُلُّهُمْ ءَاتِيهِ يَوْمَ ٱلْقِيَـٰمَةِ فَرْدًا",
    translation: {
      en: "",
      ur: "اور سب قیامت کے دن اس کے سامنے اکیلے اکیلے حاضر ہوں گے",
    },
    words: [
      { id: '19:95:1', arabic: "وَكُلُّهُمْ", transliteration: "wakulluhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And all of them", ur: "اور سب of them" } },
      { id: '19:95:2', arabic: "ءَاتِيهِ", transliteration: "ātīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) come (to) Him", ur: "(will) come (کو) Him" } },
      { id: '19:95:3', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '19:95:4', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '19:95:5', arabic: "فَرْدًا", transliteration: "fardan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "alone", ur: "alone" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  96: {
    text: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ سَيَجْعَلُ لَهُمُ ٱلرَّحْمَـٰنُ وُدًّۭا",
    translation: {
      en: "",
      ur: "اور جو لوگ ایمان لائے اور عمل نیک کئے خدا ان کی محبت (مخلوقات کے دل میں) پیدا کردے گا",
    },
    words: [
      { id: '19:96:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '19:96:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '19:96:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '19:96:4', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and did", ur: "اور did" } },
      { id: '19:96:5', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good deeds", ur: "اچھا deeds" } },
      { id: '19:96:6', arabic: "سَيَجْعَلُ", transliteration: "sayajʿalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will bestow", ur: "will bestow" } },
      { id: '19:96:7', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '19:96:8', arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '19:96:9', arabic: "وُدًّۭا", transliteration: "wuddan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "affection", ur: "affection" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  97: {
    text: "فَإِنَّمَا يَسَّرْنَـٰهُ بِلِسَانِكَ لِتُبَشِّرَ بِهِ ٱلْمُتَّقِينَ وَتُنذِرَ بِهِۦ قَوْمًۭا لُّدًّۭا",
    translation: {
      en: "",
      ur: "(اے پیغمبر) ہم نے یہ (قرآن) تمہاری زبان میں آسان (نازل) کیا ہے تاکہ تم اس سے پرہیزگاروں کو خوشخبری پہنچا دو اور جھگڑالوؤں کو ڈر سنا دو",
    },
    words: [
      { id: '19:97:1', arabic: "فَإِنَّمَا", transliteration: "fa-innamā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So, only", ur: "So, صرف" } },
      { id: '19:97:2', arabic: "يَسَّرْنَـٰهُ", transliteration: "yassarnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (have) made it easy", ur: "ہم (have) made it easy" } },
      { id: '19:97:3', arabic: "بِلِسَانِكَ", transliteration: "bilisānika", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in your tongue", ur: "میں your tongue" } },
      { id: '19:97:4', arabic: "لِتُبَشِّرَ", transliteration: "litubashira", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that you may give glad tidings", ur: "وہ تم may give glad tidings" } },
      { id: '19:97:5', arabic: "بِهِ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '19:97:6', arabic: "ٱلْمُتَّقِينَ", transliteration: "l-mutaqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(to) the righteous", ur: "(کو) the نیک" } },
      { id: '19:97:7', arabic: "وَتُنذِرَ", transliteration: "watundhira", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and warn", ur: "اور warn" } },
      { id: '19:97:8', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '19:97:9', arabic: "قَوْمًۭا", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '19:97:10', arabic: "لُّدًّۭا", transliteration: "luddan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "hostile", ur: "hostile" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  98: {
    text: "وَكَمْ أَهْلَكْنَا قَبْلَهُم مِّن قَرْنٍ هَلْ تُحِسُّ مِنْهُم مِّنْ أَحَدٍ أَوْ تَسْمَعُ لَهُمْ رِكْزًۢا",
    translation: {
      en: "",
      ur: "اور ہم نے اس سے پہلے بہت سے گروہوں کو ہلاک کردیا ہے۔ بھلا تم ان میں سے کسی کو دیکھتے ہو یا (کہیں) ان کی بھنک سنتے ہو",
    },
    words: [
      { id: '19:98:1', arabic: "وَكَمْ", transliteration: "wakam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And how many", ur: "اور how many" } },
      { id: '19:98:2', arabic: "أَهْلَكْنَا", transliteration: "ahlaknā", pos: ['V'], posLabel: 'V', root: "أ ه ل", meaning: { en: "We (have) destroyed", ur: "ہم (have) destroyed" } },
      { id: '19:98:3', arabic: "قَبْلَهُم", transliteration: "qablahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before them", ur: "پہلے them" } },
      { id: '19:98:4', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '19:98:5', arabic: "قَرْنٍ", transliteration: "qarnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a generation", ur: "a generation" } },
      { id: '19:98:6', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Can", ur: "Can" } },
      { id: '19:98:7', arabic: "تُحِسُّ", transliteration: "tuḥissu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you perceive", ur: "تم perceive" } },
      { id: '19:98:8', arabic: "مِنْهُم", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '19:98:9', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any", ur: "any" } },
      { id: '19:98:10', arabic: "أَحَدٍ", transliteration: "aḥadin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one", ur: "one" } },
      { id: '19:98:11', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '19:98:12', arabic: "تَسْمَعُ", transliteration: "tasmaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hear", ur: "سننا" } },
      { id: '19:98:13', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '19:98:14', arabic: "رِكْزًۢا", transliteration: "rik'zan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sound", ur: "a sound" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
};

export default SURAH_19_TREEBANK;
export { SURAH_19_TREEBANK as TREEBANK_DATA };
