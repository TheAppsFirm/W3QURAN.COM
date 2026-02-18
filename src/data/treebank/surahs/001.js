/**
 * Surah Al-Fatiha (1) - Complete Treebank Data
 * The Opening - 7 Ayahs, 29 Words
 *
 * Theme: The essence of the Quran - praise, worship, and guidance
 * Revelation: Makki
 * Virtue: The greatest surah in the Quran, recited in every unit of prayer
 */

const SURAH_1_TREEBANK = {
  1: { // Ayah 1: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    translation: {
      en: 'In the name of Allah, the Most Gracious, the Most Merciful',
      ur: 'اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے',
      hi: 'अल्लाह के नाम से जो बड़ा मेहरबान निहायत रहम वाला है',
      bn: 'আল্লাহর নামে শুরু যিনি পরম করুণাময় অতি দয়ালু',
      tr: 'Rahman ve Rahim olan Allah\'ın adıyla',
      id: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang',
    },
    words: [
      {
        id: '1:1:1',
        position: 1,
        arabic: 'بِسْمِ',
        transliteration: 'Bismi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'س م و',
        lemma: 'اِسْم',
        pattern: 'فِعْل',
        meaning: {
          en: 'In the name of',
          ur: 'نام سے',
          hi: 'नाम से',
          bn: 'নামে',
          tr: 'adıyla',
          id: 'Dengan nama',
        },
        grammarRole: 'jarr-majroor',
        case: 'majroor',
        features: {
          type: 'preposition + noun',
          case: 'genitive',
          state: 'construct',
        },
        grammarExplanations: {
          en: 'Preposition بِ (with/in) + noun اِسْم (name) in construct state (مضاف). The noun is genitive (مجرور) due to the preposition.',
          ur: 'حرف جار بِ (سے) + اسم اِسْم (نام) حالت اضافت میں (مضاف)۔ اسم مجرور ہے حرف جار کی وجہ سے۔',
          hi: 'हर्फ़-ए-जर बِ (से) + इस्म (नाम) हालत-ए-इज़ाफ़त में। मजरूर है।',
        },
        advanced: {
          rootFamily: {
            root: 'س م و',
            meaning: { en: 'to be high, to name', ur: 'بلند ہونا، نام رکھنا', hi: 'ऊंचा होना, नाम रखना' },
            words: [
              { arabic: 'اِسْم', count: 1, meaning: { en: 'name', ur: 'نام' } },
              { arabic: 'سَمَاء', count: 1, meaning: { en: 'sky, heaven', ur: 'آسمان' } },
              { arabic: 'سَمِيّ', count: 1, meaning: { en: 'namesake', ur: 'ہم نام' } },
            ],
          },
          balagha: {
            title: { en: 'Beginning with Allah\'s Name', ur: 'اللہ کے نام سے شروع' },
            explanation: {
              en: 'Every action should begin with Allah\'s name, seeking His blessing and acknowledging dependence on Him.',
              ur: 'ہر کام اللہ کے نام سے شروع ہونا چاہیے، اس کی برکت مانگتے ہوئے اور اس پر انحصار کا اقرار کرتے ہوئے۔',
            },
          },
          memoryHook: {
            tips: [
              {
                en: 'Bismillah is the key that opens every good deed',
                ur: 'بسم اللہ ہر نیک کام کھولنے کی چابی ہے',
              },
            ],
          },
        },
      },
      {
        id: '1:1:2',
        position: 2,
        arabic: 'اللَّهِ',
        transliteration: 'Allahi',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        lemma: 'اللّٰه',
        meaning: {
          en: 'Allah',
          ur: 'اللہ کے',
          hi: 'अल्लाह के',
          bn: 'আল্লাহর',
          tr: 'Allah\'ın',
          id: 'Allah',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        features: {
          type: 'proper noun',
          definiteness: 'definite',
          case: 'genitive',
        },
        grammarExplanations: {
          en: 'Genitive (مجرور) because it is مضاف إليه (second part of construct chain) after "اِسْم".',
          ur: 'مجرور کیونکہ یہ مضاف الیہ ہے "اِسْم" کے بعد۔',
          hi: 'मजरूर क्योंकि यह मुज़ाफ़ इलैह है "इस्म" के बाद।',
        },
        advanced: {
          rootFamily: {
            root: 'أ ل ه',
            meaning: { en: 'god, deity, to worship', ur: 'معبود، عبادت کرنا', hi: 'देवता, पूजा करना' },
            words: [
              { arabic: 'إِلٰه', count: 1, meaning: { en: 'god/deity', ur: 'معبود' } },
              { arabic: 'اللّٰه', count: 1, meaning: { en: 'Allah (The God)', ur: 'اللہ (معبود حقیقی)' } },
            ],
          },
          frequency: {
            word: 'اللّٰه',
            total: 2699,
            spikedSurahs: [2, 3, 4, 5, 9],
            note: {
              en: 'Most frequent word in Quran - central to every message',
              ur: 'قرآن کا سب سے زیادہ استعمال شدہ لفظ',
            },
          },
        },
      },
      {
        id: '1:1:3',
        position: 3,
        arabic: 'الرَّحْمَٰنِ',
        transliteration: 'Ar-Rahmani',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ر ح م',
        lemma: 'رَحْمٰن',
        pattern: 'فَعْلَان',
        meaning: {
          en: 'The Most Gracious',
          ur: 'بڑا مہربان',
          hi: 'बड़ा मेहरबान',
          bn: 'পরম করুণাময়',
          tr: 'Rahman',
          id: 'Yang Maha Pengasih',
        },
        grammarRole: 'sifat',
        case: 'majroor',
        features: {
          type: 'adjective/name',
          case: 'genitive',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Adjective (صفت) describing Allah, in genitive case following the noun it describes.',
          ur: 'صفت جو اللہ کی وضاحت کرتی ہے، مجرور موصوف کی تبعیت میں۔',
          hi: 'सिफ़त जो अल्लाह की वज़ाहत करती है, मजरूर।',
        },
        advanced: {
          rootFamily: {
            root: 'ر ح م',
            meaning: { en: 'mercy, womb, compassion', ur: 'رحم، رحمت', hi: 'रहम, रहमत' },
            words: [
              { arabic: 'رَحْمَة', count: 1, meaning: { en: 'mercy', ur: 'رحمت' } },
              { arabic: 'رَحِيم', count: 1, meaning: { en: 'merciful', ur: 'رحم کرنے والا' } },
              { arabic: 'رَحِم', count: 1, meaning: { en: 'womb', ur: 'رحم' } },
              { arabic: 'أَرْحَم', count: 1, meaning: { en: 'most merciful', ur: 'سب سے زیادہ رحم والا' } },
            ],
          },
          balagha: {
            title: { en: 'Ar-Rahman vs Ar-Raheem', ur: 'الرحمٰن بمقابلہ الرحیم' },
            explanation: {
              en: 'الرَّحْمٰن (Rahman) indicates intense, overwhelming mercy that encompasses all creation. It is a more intensive form.',
              ur: 'الرَّحْمٰن شدید، ہمہ گیر رحمت کی نشاندہی کرتا ہے جو تمام مخلوق کو شامل ہے۔ یہ زیادہ مبالغہ کا صیغہ ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Exclusive Name', ur: 'منفرد نام' },
            points: [
              {
                en: 'الرَّحْمٰن is exclusive to Allah - no one else can be called by this name',
                ur: 'الرَّحْمٰن اللہ کے لیے خاص ہے - کسی اور کو اس نام سے نہیں پکارا جا سکتا',
              },
            ],
          },
        },
      },
      {
        id: '1:1:4',
        position: 4,
        arabic: 'الرَّحِيمِ',
        transliteration: 'Ar-Raheemi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ر ح م',
        lemma: 'رَحِيم',
        pattern: 'فَعِيل',
        meaning: {
          en: 'The Most Merciful',
          ur: 'نہایت رحم والا',
          hi: 'निहायत रहम वाला',
          bn: 'অতি দয়ালু',
          tr: 'Rahim',
          id: 'Maha Penyayang',
        },
        grammarRole: 'sifat',
        case: 'majroor',
        features: {
          type: 'adjective/name',
          case: 'genitive',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Second adjective describing Allah, also in genitive case.',
          ur: 'دوسری صفت جو اللہ کی وضاحت کرتی ہے، یہ بھی مجرور۔',
          hi: 'दूसरी सिफ़त जो अल्लाह की वज़ाहत करती है, मजरूर।',
        },
        advanced: {
          balagha: {
            title: { en: 'Ar-Raheem: Specific Mercy', ur: 'الرحیم: خاص رحمت' },
            explanation: {
              en: 'الرَّحِيم (Raheem) indicates perpetual, specific mercy - especially for believers. Pattern فَعِيل indicates continuous quality.',
              ur: 'الرَّحِيم دائمی، خاص رحمت کی نشاندہی کرتا ہے - خاص طور پر مومنین کے لیے۔ فَعِيل کا وزن مستقل صفت بتاتا ہے۔',
            },
          },
          memoryHook: {
            tips: [
              {
                en: 'Rahman = general mercy for all creation. Raheem = special mercy for believers.',
                ur: 'رحمٰن = تمام مخلوق کے لیے عام رحمت۔ رحیم = مومنین کے لیے خاص رحمت۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'nominal-phrase',
      components: [
        { type: 'jarr-majroor', word: 'بِسْمِ', role: 'prepositional phrase (mudaf)' },
        { type: 'mudaf-ilayhi', word: 'اللَّهِ', role: 'possessor' },
        { type: 'sifat', word: 'الرَّحْمَٰنِ', role: 'first attribute' },
        { type: 'sifat', word: 'الرَّحِيمِ', role: 'second attribute' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 2, to: 4, label: 'موصوف + صفت' },
      ],
      explanation: {
        en: 'Basmala: Prepositional phrase with construct chain and two attributes describing Allah',
        ur: 'بسملہ: جار مجرور مع اضافت اور دو صفات جو اللہ کی وضاحت کرتی ہیں',
      },
    },
  },

  2: { // Ayah 2: الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
    text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translation: {
      en: 'All praise is due to Allah, Lord of the worlds',
      ur: 'سب تعریف اللہ کے لیے ہے جو تمام جہانوں کا پالنے والا ہے',
      hi: 'सब तारीफ़ अल्लाह के लिए है जो तमाम जहानों का पालने वाला है',
      bn: 'সমস্ত প্রশংসা আল্লাহর জন্য যিনি সকল সৃষ্টির প্রতিপালক',
      tr: 'Hamd, alemlerin Rabbi olan Allah\'a mahsustur',
      id: 'Segala puji bagi Allah, Tuhan seluruh alam',
    },
    words: [
      {
        id: '1:2:1',
        position: 1,
        arabic: 'الْحَمْدُ',
        transliteration: 'Al-Hamdu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح م د',
        lemma: 'حَمْد',
        pattern: 'فَعْل',
        meaning: {
          en: 'All praise',
          ur: 'سب تعریف',
          hi: 'सब तारीफ़',
          bn: 'সমস্ত প্রশংসা',
          tr: 'Hamd',
          id: 'Segala puji',
        },
        grammarRole: 'mubtada',
        case: 'marfoo',
        features: {
          type: 'noun',
          case: 'nominative',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Subject (مبتدأ) of a nominal sentence. Nominative case (مرفوع) with dammah.',
          ur: 'جملہ اسمیہ کا مبتدأ۔ مرفوع ہے ضمہ کے ساتھ۔',
          hi: 'जुमला इस्मिया का मुब्तदा। मरफू है।',
        },
        advanced: {
          rootFamily: {
            root: 'ح م د',
            meaning: { en: 'to praise, thank', ur: 'تعریف کرنا، شکر کرنا', hi: 'तारीफ़ करना, शुक्र करना' },
            words: [
              { arabic: 'حَمْد', count: 1, meaning: { en: 'praise', ur: 'تعریف' } },
              { arabic: 'مُحَمَّد', count: 1, meaning: { en: 'Muhammad (praised one)', ur: 'محمد (قابل تعریف)' } },
              { arabic: 'أَحْمَد', count: 1, meaning: { en: 'Ahmad (most praiseworthy)', ur: 'احمد (سب سے زیادہ قابل تعریف)' } },
              { arabic: 'حَامِد', count: 1, meaning: { en: 'one who praises', ur: 'تعریف کرنے والا' } },
              { arabic: 'حَمِيد', count: 1, meaning: { en: 'praiseworthy', ur: 'قابل تعریف' } },
            ],
          },
          balagha: {
            title: { en: 'The Definite Article', ur: 'الف لام' },
            explanation: {
              en: 'The ال in الحمد indicates ALL praise - every type of praise belongs to Allah exclusively.',
              ur: 'الحمد میں الف لام تمام تعریف کی نشاندہی کرتا ہے - ہر قسم کی تعریف صرف اللہ کے لیے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Hamd vs Shukr', ur: 'حمد بمقابلہ شکر' },
            points: [
              {
                en: 'Hamd is praise for inherent qualities, even without receiving benefit. Shukr is thanks for favors received.',
                ur: 'حمد ذاتی صفات کی تعریف ہے، چاہے فائدہ نہ ملے۔ شکر ملنے والے احسانات کا اظہار ہے۔',
              },
            ],
          },
        },
      },
      {
        id: '1:2:2',
        position: 2,
        arabic: 'لِلَّهِ',
        transliteration: 'Lillahi',
        pos: ['P', 'PN'],
        posLabel: 'P+PN',
        root: 'أ ل ه',
        lemma: 'اللّٰه',
        meaning: {
          en: 'to Allah / for Allah',
          ur: 'اللہ کے لیے',
          hi: 'अल्लाह के लिए',
          bn: 'আল্লাহর জন্য',
          tr: 'Allah\'a',
          id: 'bagi Allah',
        },
        grammarRole: 'khabar',
        case: 'majroor',
        features: {
          type: 'preposition + proper noun',
          case: 'genitive',
        },
        grammarExplanations: {
          en: 'Predicate (خبر) of the nominal sentence. Preposition لِ (for) + proper noun Allah in genitive.',
          ur: 'جملہ اسمیہ کا خبر۔ حرف جار لِ (کے لیے) + اسم معرفہ اللہ مجرور۔',
          hi: 'जुमला इस्मिया का खबर। हर्फ़-ए-जर + अल्लाह मजरूर।',
        },
        advanced: {
          balagha: {
            title: { en: 'Ownership of Praise', ur: 'تعریف کی ملکیت' },
            explanation: {
              en: 'The لِ indicates exclusive ownership - praise inherently and permanently belongs to Allah.',
              ur: 'لِ خاص ملکیت کی نشاندہی کرتا ہے - تعریف ذاتی طور پر اور ہمیشہ کے لیے اللہ کی ہے۔',
            },
          },
        },
      },
      {
        id: '1:2:3',
        position: 3,
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        lemma: 'رَبّ',
        pattern: 'فَعْل',
        meaning: {
          en: 'Lord of',
          ur: 'پالنے والا',
          hi: 'पालने वाला',
          bn: 'প্রতিপালক',
          tr: 'Rabbi',
          id: 'Tuhan',
        },
        grammarRole: 'badal',
        case: 'majroor',
        features: {
          type: 'noun',
          case: 'genitive',
          state: 'construct',
        },
        grammarExplanations: {
          en: 'Substitute (بدل) or additional description of Allah, in genitive case. Also مضاف to العالمين.',
          ur: 'اللہ کا بدل یا اضافی وصف، مجرور۔ نیز العالمین کا مضاف۔',
          hi: 'अल्लाह का बदल या अतिरिक्त वस्फ़, मजरूर। साथ ही العالمین का मुज़ाफ़।',
        },
        advanced: {
          rootFamily: {
            root: 'ر ب ب',
            meaning: { en: 'lord, master, to nurture', ur: 'رب، مالک، پرورش کرنا', hi: 'रब, मालिक, परवरिश करना' },
            words: [
              { arabic: 'رَبّ', count: 1, meaning: { en: 'Lord', ur: 'رب' } },
              { arabic: 'رُبُوبِيَّة', count: 1, meaning: { en: 'lordship', ur: 'ربوبیت' } },
              { arabic: 'مُرَبِّي', count: 1, meaning: { en: 'educator, nurturer', ur: 'تربیت کرنے والا' } },
              { arabic: 'تَرْبِيَة', count: 1, meaning: { en: 'upbringing, education', ur: 'تربیت' } },
            ],
          },
          balagha: {
            title: { en: 'Rabb: More than Lord', ur: 'رب: رب سے زیادہ' },
            explanation: {
              en: 'رب encompasses: Owner, Master, Sustainer, Nurturer, Educator - one who takes care of every need.',
              ur: 'رب میں شامل ہے: مالک، آقا، رازق، پرورش کرنے والا، تربیت کرنے والا - جو ہر ضرورت کا خیال رکھے۔',
            },
          },
        },
      },
      {
        id: '1:2:4',
        position: 4,
        arabic: 'الْعَالَمِينَ',
        transliteration: 'Al-\'Aalameen',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ل م',
        lemma: 'عَالَم',
        pattern: 'فَاعَل',
        meaning: {
          en: 'the worlds / all creation',
          ur: 'تمام جہانوں',
          hi: 'तमाम जहानों',
          bn: 'সকল সৃষ্টির',
          tr: 'alemlerin',
          id: 'seluruh alam',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        features: {
          type: 'noun',
          number: 'plural',
          case: 'genitive',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'مضاف إليه (possessor) of رب. Genitive plural - ي + ن instead of و + ن because of genitive case.',
          ur: 'رب کا مضاف إليه۔ جمع مجرور - حالت جر میں "ین" لگتا ہے "ون" کی بجائے۔',
          hi: 'रब का मुज़ाफ़ इलैह। जम्अ मजरूर - हालत-ए-जर में "ین" लगता है।',
        },
        advanced: {
          rootFamily: {
            root: 'ع ل م',
            meaning: { en: 'to know, world, sign', ur: 'جاننا، عالم، نشانی', hi: 'जानना, आलम, निशानी' },
            words: [
              { arabic: 'عَالَم', count: 1, meaning: { en: 'world', ur: 'عالم، جہان' } },
              { arabic: 'عِلْم', count: 1, meaning: { en: 'knowledge', ur: 'علم' } },
              { arabic: 'عَالِم', count: 1, meaning: { en: 'scholar, knower', ur: 'عالم، جاننے والا' } },
              { arabic: 'عَلَم', count: 1, meaning: { en: 'flag, sign', ur: 'جھنڈا، نشان' } },
            ],
          },
          balagha: {
            title: { en: 'Why العالمين Plural?', ur: 'العالمین جمع کیوں؟' },
            explanation: {
              en: 'العالمين includes ALL worlds: human world, jinn world, animal world, plant world, angelic realm, all galaxies.',
              ur: 'العالمین میں تمام جہان شامل ہیں: انسانوں کا، جنات کا، جانوروں کا، پودوں کا، فرشتوں کا، تمام کہکشائیں۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'nominal-sentence',
      components: [
        { type: 'mubtada', word: 'الْحَمْدُ', role: 'subject' },
        { type: 'khabar', word: 'لِلَّهِ', role: 'predicate' },
        { type: 'badal/sifat', word: 'رَبِّ', role: 'substitute/description (mudaf)' },
        { type: 'mudaf-ilayhi', word: 'الْعَالَمِينَ', role: 'possessor' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'بدل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
      ],
      explanation: {
        en: 'Nominal sentence: All praise (subject) belongs to Allah (predicate), Lord of all worlds (description)',
        ur: 'جملہ اسمیہ: تمام تعریف (مبتدأ) اللہ کے لیے (خبر)، تمام جہانوں کے رب (وصف)',
      },
    },
  },

  3: { // Ayah 3: الرَّحْمَٰنِ الرَّحِيمِ
    text: 'الرَّحْمَٰنِ الرَّحِيمِ',
    translation: {
      en: 'The Most Gracious, the Most Merciful',
      ur: 'بڑا مہربان نہایت رحم والا',
      hi: 'बड़ा मेहरबान निहायत रहम वाला',
      bn: 'পরম করুণাময় অতি দয়ালু',
      tr: 'Rahman, Rahim',
      id: 'Yang Maha Pengasih, Maha Penyayang',
    },
    words: [
      {
        id: '1:3:1',
        position: 1,
        arabic: 'الرَّحْمَٰنِ',
        transliteration: 'Ar-Rahmani',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ر ح م',
        lemma: 'رَحْمٰن',
        pattern: 'فَعْلَان',
        meaning: {
          en: 'The Most Gracious',
          ur: 'بڑا مہربان',
          hi: 'बड़ा मेहरबान',
          bn: 'পরম করুণাময়',
          tr: 'Rahman',
          id: 'Yang Maha Pengasih',
        },
        grammarRole: 'sifat',
        case: 'majroor',
        features: {
          type: 'adjective/name',
          case: 'genitive',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Continuation of description of Allah from previous verse. Genitive case following رب العالمين.',
          ur: 'پچھلی آیت سے اللہ کی صفت کا تسلسل۔ رب العالمین کی تبعیت میں مجرور۔',
          hi: 'पिछली आयत से अल्लाह की सिफ़त का सिलसिला। मजरूर।',
        },
        advanced: {
          balagha: {
            title: { en: 'Repetition of Mercy Names', ur: 'رحمت کے ناموں کی تکرار' },
            explanation: {
              en: 'Mercy attributes repeated from verse 1 - emphasizing that Allah\'s primary relationship with creation is mercy.',
              ur: 'رحمت کی صفات آیت 1 سے دہرائی گئیں - اس بات پر زور کہ مخلوق سے اللہ کا بنیادی تعلق رحمت ہے۔',
            },
          },
        },
      },
      {
        id: '1:3:2',
        position: 2,
        arabic: 'الرَّحِيمِ',
        transliteration: 'Ar-Raheemi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ر ح م',
        lemma: 'رَحِيم',
        pattern: 'فَعِيل',
        meaning: {
          en: 'The Most Merciful',
          ur: 'نہایت رحم والا',
          hi: 'निहायत रहम वाला',
          bn: 'অতি দয়ালু',
          tr: 'Rahim',
          id: 'Maha Penyayang',
        },
        grammarRole: 'sifat',
        case: 'majroor',
        features: {
          type: 'adjective/name',
          case: 'genitive',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Second attribute continuing from previous verse, also in genitive case.',
          ur: 'پچھلی آیت سے جاری دوسری صفت، یہ بھی مجرور۔',
          hi: 'पिछली आयत से जारी दूसरी सिफ़त, यह भी मजरूर।',
        },
        advanced: {
          linguisticMiracle: {
            title: { en: 'Why Repeat from Basmala?', ur: 'بسملہ سے کیوں دہرایا؟' },
            points: [
              {
                en: 'First mention (1:1) is seeking blessing. Second mention (1:3) is praising Allah for these qualities.',
                ur: 'پہلا ذکر (1:1) برکت حاصل کرنے کے لیے۔ دوسرا ذکر (1:3) ان صفات پر اللہ کی تعریف۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'continuation',
      components: [
        { type: 'sifat', word: 'الرَّحْمَٰنِ', role: 'first attribute' },
        { type: 'sifat', word: 'الرَّحِيمِ', role: 'second attribute' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'صفت + صفت' },
      ],
      explanation: {
        en: 'Continuation of description from verse 2 - two mercy attributes describing Allah (رب العالمين)',
        ur: 'آیت 2 سے وصف کا تسلسل - دو رحمت کی صفات جو اللہ (رب العالمین) کی وضاحت کرتی ہیں',
      },
    },
  },

  4: { // Ayah 4: مَالِكِ يَوْمِ الدِّينِ
    text: 'مَالِكِ يَوْمِ الدِّينِ',
    translation: {
      en: 'Master of the Day of Judgment',
      ur: 'روز جزا کا مالک ہے',
      hi: 'रोज़-ए-जज़ा का मालिक है',
      bn: 'বিচার দিনের মালিক',
      tr: 'Din gününün sahibi',
      id: 'Pemilik hari pembalasan',
    },
    words: [
      {
        id: '1:4:1',
        position: 1,
        arabic: 'مَالِكِ',
        transliteration: 'Maliki',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل ك',
        lemma: 'مَالِك',
        pattern: 'فَاعِل',
        meaning: {
          en: 'Master / Owner / King of',
          ur: 'مالک',
          hi: 'मालिक',
          bn: 'মালিক',
          tr: 'Sahibi',
          id: 'Pemilik',
        },
        grammarRole: 'sifat',
        case: 'majroor',
        features: {
          type: 'noun',
          case: 'genitive',
          state: 'construct',
        },
        grammarExplanations: {
          en: 'Another attribute of Allah, continuing from previous verses. Also مضاف to يوم.',
          ur: 'اللہ کی ایک اور صفت، پچھلی آیات سے جاری۔ نیز یوم کا مضاف۔',
          hi: 'अल्लाह की एक और सिफ़त, पिछली आयतों से जारी। साथ ही يوم का मुज़ाफ़।',
        },
        advanced: {
          rootFamily: {
            root: 'م ل ك',
            meaning: { en: 'to own, possess, rule', ur: 'مالک ہونا، حکومت کرنا', hi: 'मालिक होना, हुकूमत करना' },
            words: [
              { arabic: 'مَلِك', count: 1, meaning: { en: 'king', ur: 'بادشاہ' } },
              { arabic: 'مَالِك', count: 1, meaning: { en: 'owner, master', ur: 'مالک' } },
              { arabic: 'مُلْك', count: 1, meaning: { en: 'kingdom, dominion', ur: 'بادشاہت' } },
              { arabic: 'مَلَكُوت', count: 1, meaning: { en: 'sovereignty', ur: 'ملکوت' } },
              { arabic: 'مَلَك', count: 1, meaning: { en: 'angel', ur: 'فرشتہ' } },
            ],
          },
          balagha: {
            title: { en: 'مَالِك vs مَلِك', ur: 'مالک بمقابلہ ملک' },
            explanation: {
              en: 'مَالِك (owner) implies complete ownership and authority. Some recitations use مَلِك (king) - both are valid, indicating total sovereignty.',
              ur: 'مَالِک (مالک) مکمل ملکیت اور اختیار کی نشاندہی کرتا ہے۔ بعض قراءات میں مَلِك (بادشاہ) ہے - دونوں صحیح ہیں۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Why Judgment Day?', ur: 'یوم الدین کیوں؟' },
            points: [
              {
                en: 'On that Day, all claim to ownership ends - only Allah will be recognized as the true Owner.',
                ur: 'اس دن تمام ملکیت کے دعوے ختم - صرف اللہ حقیقی مالک تسلیم ہوگا۔',
              },
            ],
          },
        },
      },
      {
        id: '1:4:2',
        position: 2,
        arabic: 'يَوْمِ',
        transliteration: 'Yawmi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        lemma: 'يَوْم',
        pattern: 'فَعْل',
        meaning: {
          en: 'Day of',
          ur: 'دن کا',
          hi: 'दिन का',
          bn: 'দিনের',
          tr: 'gününün',
          id: 'hari',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        features: {
          type: 'noun',
          case: 'genitive',
          state: 'construct',
        },
        grammarExplanations: {
          en: 'مضاف إليه of مالك, and مضاف to الدين. Double construct state.',
          ur: 'مالک کا مضاف إليه، اور الدین کا مضاف۔ دوہری اضافت۔',
          hi: 'मालिक का मुज़ाफ़ इलैह, और الدین का मुज़ाफ़। दोहरी इज़ाफ़त।',
        },
        advanced: {
          rootFamily: {
            root: 'ي و م',
            meaning: { en: 'day', ur: 'دن', hi: 'दिन' },
            words: [
              { arabic: 'يَوْم', count: 1, meaning: { en: 'day', ur: 'دن' } },
              { arabic: 'يَوْمَئِذٍ', count: 1, meaning: { en: 'on that day', ur: 'اس دن' } },
              { arabic: 'الْيَوْم', count: 1, meaning: { en: 'today', ur: 'آج' } },
            ],
          },
        },
      },
      {
        id: '1:4:3',
        position: 3,
        arabic: 'الدِّينِ',
        transliteration: 'Ad-Deeni',
        pos: ['N'],
        posLabel: 'N',
        root: 'د ي ن',
        lemma: 'دِين',
        pattern: 'فِعْل',
        meaning: {
          en: 'the Judgment / the Recompense',
          ur: 'جزا / بدلے',
          hi: 'जज़ा / बदले',
          bn: 'বিচারের',
          tr: 'din',
          id: 'pembalasan',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        features: {
          type: 'noun',
          case: 'genitive',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'مضاف إليه of يوم. Genitive case with kasrah.',
          ur: 'یوم کا مضاف إليه۔ کسرہ کے ساتھ مجرور۔',
          hi: 'यوم का मुज़ाफ़ इलैह। कस्रह के साथ मजरूर।',
        },
        advanced: {
          rootFamily: {
            root: 'د ي ن',
            meaning: { en: 'religion, judgment, debt', ur: 'دین، جزا، قرض', hi: 'दीन, जज़ा, क़र्ज़' },
            words: [
              { arabic: 'دِين', count: 1, meaning: { en: 'religion / judgment', ur: 'دین / جزا' } },
              { arabic: 'دَيْن', count: 1, meaning: { en: 'debt', ur: 'قرض' } },
              { arabic: 'مَدِين', count: 1, meaning: { en: 'debtor, judged', ur: 'مقروض، محکوم' } },
              { arabic: 'دَيَّان', count: 1, meaning: { en: 'judge (divine)', ur: 'حاکم' } },
            ],
          },
          balagha: {
            title: { en: 'دِين: Multiple Meanings', ur: 'دین: متعدد معانی' },
            explanation: {
              en: 'الدين here means "recompense/judgment" - the day when everyone is repaid for their deeds. Also connects to "religion" - the day when true religion is manifest.',
              ur: 'یہاں الدین کا مطلب "جزا" ہے - جب سب کو ان کے اعمال کا بدلہ ملے گا۔ "دین" سے بھی تعلق - جب حقیقی دین ظاہر ہوگا۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'construct-chain',
      components: [
        { type: 'sifat/mudaf', word: 'مَالِكِ', role: 'attribute/first element' },
        { type: 'mudaf-ilayhi/mudaf', word: 'يَوْمِ', role: 'second element' },
        { type: 'mudaf-ilayhi', word: 'الدِّينِ', role: 'third element' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
      ],
      explanation: {
        en: 'Triple construct chain: Master-of Day-of Judgment (مالك يوم الدين)',
        ur: 'تین درجوں کی اضافت: مالک یوم الدین',
      },
    },
  },

  5: { // Ayah 5: إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
    text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    translation: {
      en: 'You alone we worship, and You alone we ask for help',
      ur: 'ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں',
      hi: 'हम तेरी ही इबादत करते हैं और तुझी से मदद मांगते हैं',
      bn: 'আমরা কেবল তোমারই ইবাদত করি এবং কেবল তোমারই সাহায্য প্রার্থনা করি',
      tr: 'Yalnız sana ibadet eder, yalnız senden yardım dileriz',
      id: 'Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan',
    },
    words: [
      {
        id: '1:5:1',
        position: 1,
        arabic: 'إِيَّاكَ',
        transliteration: 'Iyyaka',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        lemma: 'إِيَّا',
        meaning: {
          en: 'You alone',
          ur: 'صرف تجھے',
          hi: 'सिर्फ़ तुझे',
          bn: 'কেবল তোমাকে',
          tr: 'Yalnız sana',
          id: 'Hanya kepada-Mu',
        },
        grammarRole: 'mafool-muqaddam',
        case: 'mansoob',
        features: {
          type: 'pronoun',
          person: '2nd',
          number: 'singular',
          case: 'accusative',
        },
        grammarExplanations: {
          en: 'Object (مفعول به) placed before verb for emphasis/restriction (حصر). "You ALONE" - exclusive worship.',
          ur: 'مفعول بہ فعل سے پہلے لایا گیا تاکید اور حصر کے لیے۔ "صرف تجھے" - خالص عبادت۔',
          hi: 'मफ़ऊल बिह क्रिया से पहले लाया गया ताकीद और हस्र के लिए। "सिर्फ़ तुझे"।',
        },
        advanced: {
          balagha: {
            title: { en: 'Object Before Verb', ur: 'مفعول فعل سے پہلے' },
            explanation: {
              en: 'Normal order: نعبدك (we worship You). Reversed: إياك نعبد (YOU we worship) - creates exclusivity. Nothing else is worshipped.',
              ur: 'عام ترتیب: نعبدك (ہم تیری عبادت کرتے ہیں)۔ الٹ: إياك نعبد (تجھے ہی ہم عبادت کرتے ہیں) - حصر پیدا کرتا ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'The Pivot Point', ur: 'اہم موڑ' },
            points: [
              {
                en: 'First half of Fatiha is praise (3rd person: He). Now shifts to direct address (2nd person: You) - dialogue with Allah!',
                ur: 'فاتحہ کا پہلا حصہ تعریف (غائب: وہ)۔ اب براہ راست خطاب (حاضر: تو) - اللہ سے مکالمہ!',
              },
            ],
          },
        },
      },
      {
        id: '1:5:2',
        position: 2,
        arabic: 'نَعْبُدُ',
        transliteration: 'Na\'budu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ب د',
        lemma: 'عَبَدَ',
        pattern: 'نَفْعُلُ',
        meaning: {
          en: 'we worship',
          ur: 'ہم عبادت کرتے ہیں',
          hi: 'हम इबादत करते हैं',
          bn: 'আমরা ইবাদত করি',
          tr: 'ibadet ederiz',
          id: 'kami menyembah',
        },
        grammarRole: 'verb',
        case: null,
        features: {
          aspect: 'imperfect',
          mood: 'indicative',
          person: '1st',
          number: 'plural',
          voice: 'active',
        },
        grammarExplanations: {
          en: 'First person plural imperfect verb (فعل مضارع). Present/ongoing worship - "we are worshipping and will continue."',
          ur: 'فعل مضارع متکلم جمع۔ حال اور مستقبل کی عبادت - "ہم عبادت کرتے ہیں اور کرتے رہیں گے۔"',
          hi: 'फ़ेअल मुज़ारअ मुतकल्लिम जमा। हाल और मुस्तक़बिल की इबादत।',
        },
        advanced: {
          rootFamily: {
            root: 'ع ب د',
            meaning: { en: 'to worship, serve, enslave', ur: 'عبادت کرنا، خدمت کرنا', hi: 'इबादत करना, ख़िदमत करना' },
            words: [
              { arabic: 'عَبَدَ', count: 1, meaning: { en: 'he worshipped', ur: 'اس نے عبادت کی' } },
              { arabic: 'عَبْد', count: 1, meaning: { en: 'slave, servant', ur: 'بندہ، غلام' } },
              { arabic: 'عِبَادَة', count: 1, meaning: { en: 'worship', ur: 'عبادت' } },
              { arabic: 'عَابِد', count: 1, meaning: { en: 'worshipper', ur: 'عبادت کرنے والا' } },
              { arabic: 'مَعْبُود', count: 1, meaning: { en: 'one worshipped', ur: 'معبود' } },
            ],
          },
          verbConjugation: {
            root: 'ع ب د',
            form: 'I',
            meaning: { en: 'to worship', ur: 'عبادت کرنا' },
            table: {
              past: { he: 'عَبَدَ', she: 'عَبَدَتْ', they_m: 'عَبَدُوا', I: 'عَبَدْتُ', we: 'عَبَدْنَا' },
              present: { he: 'يَعْبُدُ', she: 'تَعْبُدُ', they_m: 'يَعْبُدُونَ', I: 'أَعْبُدُ', we: 'نَعْبُدُ' },
            },
          },
        },
      },
      {
        id: '1:5:3',
        position: 3,
        arabic: 'وَإِيَّاكَ',
        transliteration: 'Wa-iyyaka',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'and You alone',
          ur: 'اور صرف تجھے',
          hi: 'और सिर्फ़ तुझे',
          bn: 'এবং কেবল তোমাকে',
          tr: 've yalnız senden',
          id: 'dan hanya kepada-Mu',
        },
        grammarRole: 'mafool-muqaddam',
        grammarExplanations: {
          en: 'Conjunction وَ (and) + emphatic pronoun إِيَّاكَ (You alone). Object before verb again.',
          ur: 'حرف عطف وَ (اور) + ضمیر تاکیدی إِيَّاكَ (صرف تجھے)۔ پھر مفعول فعل سے پہلے۔',
          hi: 'हर्फ़-ए-अत्फ़ وَ (और) + ज़मीर-ए-ताकीदी (सिर्फ़ तुझे)।',
        },
        advanced: {
          balagha: {
            title: { en: 'Repetition of إياك', ur: 'إياك کی تکرار' },
            explanation: {
              en: 'إِيَّاكَ repeated - could have said إِيَّاكَ نَعْبُدُ وَنَسْتَعِينُ. Repetition emphasizes that even help is sought exclusively from Allah.',
              ur: 'إِيَّاكَ دہرایا - کہہ سکتے تھے إِيَّاكَ نَعْبُدُ وَنَسْتَعِينُ۔ تکرار اس بات پر زور دیتی ہے کہ مدد بھی صرف اللہ سے۔',
            },
          },
        },
      },
      {
        id: '1:5:4',
        position: 4,
        arabic: 'نَسْتَعِينُ',
        transliteration: 'Nasta\'een',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع و ن',
        lemma: 'اِسْتَعَانَ',
        pattern: 'نَسْتَفْعِلُ',
        meaning: {
          en: 'we ask for help',
          ur: 'ہم مدد مانگتے ہیں',
          hi: 'हम मदद मांगते हैं',
          bn: 'আমরা সাহায্য প্রার্থনা করি',
          tr: 'yardım dileriz',
          id: 'kami memohon pertolongan',
        },
        grammarRole: 'verb',
        case: null,
        features: {
          aspect: 'imperfect',
          mood: 'indicative',
          person: '1st',
          number: 'plural',
          voice: 'active',
          form: 'X (استفعال)',
        },
        grammarExplanations: {
          en: 'Form X verb (استفعال) - seeking/requesting action. "We seek help" - not just receive, but actively request.',
          ur: 'باب استفعال - طلب کا صیغہ۔ "ہم مدد مانگتے ہیں" - نہ صرف لینا بلکہ فعال طور پر طلب کرنا۔',
          hi: 'बाब इस्तिफ़आल - तलब का सीग़ा। "हम मदद मांगते हैं" - सक्रिय रूप से तलब करना।',
        },
        advanced: {
          rootFamily: {
            root: 'ع و ن',
            meaning: { en: 'to help, aid, assist', ur: 'مدد کرنا', hi: 'मदद करना' },
            words: [
              { arabic: 'عَوْن', count: 1, meaning: { en: 'help, aid', ur: 'مدد' } },
              { arabic: 'مُعِين', count: 1, meaning: { en: 'helper', ur: 'مددگار' } },
              { arabic: 'اِسْتَعَانَ', count: 1, meaning: { en: 'to seek help', ur: 'مدد مانگنا' } },
              { arabic: 'تَعَاوُن', count: 1, meaning: { en: 'cooperation', ur: 'تعاون' } },
            ],
          },
          balagha: {
            title: { en: 'Why نستعين After نعبد?', ur: 'نعبد کے بعد نستعين کیوں؟' },
            explanation: {
              en: 'First worship (pure act for Allah), then seek help (acknowledgment of need). Worship is the means to receive help.',
              ur: 'پہلے عبادت (اللہ کے لیے خالص عمل)، پھر مدد مانگنا (ضرورت کا اعتراف)۔ عبادت مدد پانے کا ذریعہ ہے۔',
            },
          },
          verbConjugation: {
            root: 'ع و ن',
            form: 'X',
            meaning: { en: 'to seek help', ur: 'مدد مانگنا' },
            table: {
              past: { he: 'اِسْتَعَانَ', she: 'اِسْتَعَانَتْ', we: 'اِسْتَعَنَّا' },
              present: { he: 'يَسْتَعِينُ', she: 'تَسْتَعِينُ', I: 'أَسْتَعِينُ', we: 'نَسْتَعِينُ' },
            },
          },
        },
      },
    ],
    structure: {
      type: 'compound-sentence',
      components: [
        { type: 'mafool-muqaddam', word: 'إِيَّاكَ', role: 'fronted object (emphasis)' },
        { type: 'verb', word: 'نَعْبُدُ', role: 'first verb' },
        { type: 'conjunction', word: 'وَ', role: 'connector' },
        { type: 'mafool-muqaddam', word: 'إِيَّاكَ', role: 'fronted object (emphasis)' },
        { type: 'verb', word: 'نَسْتَعِينُ', role: 'second verb' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مفعول + فعل (حصر)' },
        { from: 2, to: 4, label: 'عطف' },
        { from: 3, to: 4, label: 'مفعول + فعل (حصر)' },
      ],
      explanation: {
        en: 'Two parallel clauses with fronted objects: "You alone we worship" AND "You alone we seek help from"',
        ur: 'دو متوازی جملے مع مقدم مفعول: "صرف تیری عبادت" اور "صرف تجھ سے مدد"',
      },
    },
  },

  6: { // Ayah 6: اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
    text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
    translation: {
      en: 'Guide us to the straight path',
      ur: 'ہمیں سیدھے راستے کی ہدایت دے',
      hi: 'हमें सीधे रास्ते की हिदायत दे',
      bn: 'আমাদের সরল পথ দেখাও',
      tr: 'Bizi doğru yola ilet',
      id: 'Tunjukilah kami jalan yang lurus',
    },
    words: [
      {
        id: '1:6:1',
        position: 1,
        arabic: 'اهْدِنَا',
        transliteration: 'Ihdina',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ه د ي',
        lemma: 'هَدَى',
        pattern: 'اِفْعِلْنَا',
        meaning: {
          en: 'Guide us',
          ur: 'ہمیں ہدایت دے',
          hi: 'हमें हिदायत दे',
          bn: 'আমাদের পথ দেখাও',
          tr: 'Bizi ilet',
          id: 'Tunjukilah kami',
        },
        grammarRole: 'verb',
        case: null,
        features: {
          aspect: 'imperative',
          person: '2nd',
          gender: 'masculine',
          number: 'singular',
          voice: 'active',
        },
        grammarExplanations: {
          en: 'Imperative verb (فعل أمر) + attached pronoun نَا (us). Command/request to Allah for guidance.',
          ur: 'فعل امر + ضمیر متصل نَا (ہمیں)۔ اللہ سے ہدایت کی درخواست۔',
          hi: 'फ़ेअल अम्र + ज़मीर मुत्तसिल نَا (हमें)। अल्लाह से हिदायत की दरख़्वास्त।',
        },
        advanced: {
          rootFamily: {
            root: 'ه د ي',
            meaning: { en: 'to guide, lead', ur: 'ہدایت کرنا، راہنمائی کرنا', hi: 'हिदायत करना, राहनुमाई करना' },
            words: [
              { arabic: 'هَدَى', count: 1, meaning: { en: 'he guided', ur: 'اس نے ہدایت دی' } },
              { arabic: 'هُدًى', count: 1, meaning: { en: 'guidance', ur: 'ہدایت' } },
              { arabic: 'هَادِي', count: 1, meaning: { en: 'guide', ur: 'ہادی' } },
              { arabic: 'مَهْدِي', count: 1, meaning: { en: 'guided one', ur: 'مہدی' } },
              { arabic: 'هِدَايَة', count: 1, meaning: { en: 'guidance', ur: 'ہدایت' } },
            ],
          },
          balagha: {
            title: { en: 'The Greatest Dua', ur: 'سب سے بڑی دعا' },
            explanation: {
              en: 'This is the essence of all dua - asking for guidance. Everything else follows from being on the right path.',
              ur: 'یہ تمام دعاؤں کا خلاصہ ہے - ہدایت مانگنا۔ سیدھے راستے پر ہونے سے باقی سب کچھ ملتا ہے۔',
            },
          },
          verbConjugation: {
            root: 'ه د ي',
            form: 'I',
            meaning: { en: 'to guide', ur: 'ہدایت کرنا' },
            table: {
              past: { he: 'هَدَى', she: 'هَدَتْ', we: 'هَدَيْنَا' },
              present: { he: 'يَهْدِي', she: 'تَهْدِي', I: 'أَهْدِي', we: 'نَهْدِي' },
              imperative: { you_m_s: 'اِهْدِ' },
            },
          },
        },
      },
      {
        id: '1:6:2',
        position: 2,
        arabic: 'الصِّرَاطَ',
        transliteration: 'As-Sirata',
        pos: ['N'],
        posLabel: 'N',
        root: 'ص ر ط',
        lemma: 'صِرَاط',
        pattern: 'فِعَال',
        meaning: {
          en: 'the path',
          ur: 'راستہ',
          hi: 'रास्ता',
          bn: 'পথ',
          tr: 'yol',
          id: 'jalan',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        features: {
          type: 'noun',
          case: 'accusative',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Second object (مفعول به ثاني) of the verb اهدنا. Accusative case with fathah.',
          ur: 'فعل اهدنا کا دوسرا مفعول بہ۔ منصوب ہے فتحہ کے ساتھ۔',
          hi: 'फ़ेअल اهدنا का दूसरा मफ़ऊल बिह। मन्सूब है।',
        },
        advanced: {
          rootFamily: {
            root: 'ص ر ط',
            meaning: { en: 'path, road', ur: 'راستہ، سڑک', hi: 'रास्ता, सड़क' },
            words: [
              { arabic: 'صِرَاط', count: 1, meaning: { en: 'path', ur: 'راستہ' } },
            ],
          },
          balagha: {
            title: { en: 'الصراط: The One Path', ur: 'الصراط: ایک راستہ' },
            explanation: {
              en: 'ال indicates THE one specific path - not any path. There is only one straight path to Allah.',
              ur: 'ال ایک مخصوص راستے کی نشاندہی کرتا ہے - کوئی بھی راستہ نہیں۔ اللہ تک صرف ایک سیدھا راستہ ہے۔',
            },
          },
        },
      },
      {
        id: '1:6:3',
        position: 3,
        arabic: 'الْمُسْتَقِيمَ',
        transliteration: 'Al-Mustaqeem',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ق و م',
        lemma: 'مُسْتَقِيم',
        pattern: 'مُسْتَفْعِل',
        meaning: {
          en: 'the straight',
          ur: 'سیدھا',
          hi: 'सीधा',
          bn: 'সরল',
          tr: 'doğru',
          id: 'yang lurus',
        },
        grammarRole: 'sifat',
        case: 'mansoob',
        features: {
          type: 'adjective',
          case: 'accusative',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Adjective (صفت) of الصراط. Accusative case following the noun it describes.',
          ur: 'الصراط کی صفت۔ موصوف کی تبعیت میں منصوب۔',
          hi: 'الصراط की सिफ़त। मौसूफ़ की तबईयत में मन्सूब।',
        },
        advanced: {
          rootFamily: {
            root: 'ق و م',
            meaning: { en: 'to stand, rise, establish', ur: 'کھڑا ہونا، قائم کرنا', hi: 'खड़ा होना, क़ायम करना' },
            words: [
              { arabic: 'قَامَ', count: 1, meaning: { en: 'he stood', ur: 'وہ کھڑا ہوا' } },
              { arabic: 'قَوْم', count: 1, meaning: { en: 'people, nation', ur: 'قوم' } },
              { arabic: 'مُسْتَقِيم', count: 1, meaning: { en: 'straight, upright', ur: 'سیدھا' } },
              { arabic: 'قِيَامَة', count: 1, meaning: { en: 'resurrection', ur: 'قیامت' } },
              { arabic: 'إِقَامَة', count: 1, meaning: { en: 'establishment', ur: 'قیام' } },
            ],
          },
          balagha: {
            title: { en: 'مُسْتَقِيم: Perfect Straightness', ur: 'مستقیم: کامل سیدھا' },
            explanation: {
              en: 'Form X (استفعال) pattern indicates seeking/achieving straightness. The path that maintains perfect straightness to the destination.',
              ur: 'باب استفعال کا وزن سیدھا پن حاصل کرنے کی نشاندہی کرتا ہے۔ وہ راستہ جو منزل تک بالکل سیدھا رہتا ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Why Not سَوِيّ?', ur: 'سوی کیوں نہیں؟' },
            points: [
              {
                en: 'مُسْتَقِيم (from قام - to stand) implies a path that stands firm, never bends or deviates.',
                ur: 'مُسْتَقِيم (قام سے - کھڑا ہونا) ایسے راستے کی نشاندہی کرتا ہے جو قائم ہے، کبھی جھکتا یا بھٹکتا نہیں۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'verbal-sentence',
      components: [
        { type: 'verb', word: 'اهْدِنَا', role: 'imperative verb + object pronoun' },
        { type: 'mafool-bihi', word: 'الصِّرَاطَ', role: 'second object' },
        { type: 'sifat', word: 'الْمُسْتَقِيمَ', role: 'adjective' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'موصوف + صفت' },
      ],
      explanation: {
        en: 'Request: Guide us (verb) to the path (object) that is straight (adjective)',
        ur: 'درخواست: ہمیں ہدایت دے (فعل) راستے کی (مفعول) جو سیدھا ہے (صفت)',
      },
    },
  },

  7: { // Ayah 7: صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
    text: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    translation: {
      en: 'The path of those upon whom You have bestowed favor, not of those who have earned anger nor of those who are astray',
      ur: 'ان لوگوں کا راستہ جن پر تو نے انعام کیا نہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا',
      hi: 'उन लोगों का रास्ता जिन पर तूने इनआम किया न उनका जिन पर ग़ज़ब हुआ और न गुमराहों का',
      bn: 'তাদের পথ যাদেরকে তুমি অনুগ্রহ করেছ, তাদের পথ নয় যাদের উপর গজব নাজিল হয়েছে এবং তাদেরও নয় যারা পথভ্রষ্ট',
      tr: 'Kendilerine nimet verdiklerinin yoluna; gazaba uğramışların ve sapıtmışların yoluna değil',
      id: 'Jalan orang-orang yang telah Engkau beri nikmat, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat',
    },
    words: [
      {
        id: '1:7:1',
        position: 1,
        arabic: 'صِرَاطَ',
        transliteration: 'Sirata',
        pos: ['N'],
        posLabel: 'N',
        root: 'ص ر ط',
        lemma: 'صِرَاط',
        meaning: {
          en: 'The path of',
          ur: 'راستہ',
          hi: 'रास्ता',
          bn: 'পথ',
          tr: 'yolu',
          id: 'Jalan',
        },
        grammarRole: 'badal',
        case: 'mansoob',
        features: {
          type: 'noun',
          case: 'accusative',
          state: 'construct',
        },
        grammarExplanations: {
          en: 'Substitute (بدل) for الصراط المستقيم in verse 6. Accusative case, also مضاف.',
          ur: 'آیت 6 میں الصراط المستقيم کا بدل۔ منصوب، نیز مضاف۔',
          hi: 'आयत 6 में الصراط المستقيم का बदल। मन्सूब, साथ ही मुज़ाफ़।',
        },
        advanced: {
          balagha: {
            title: { en: 'Defining the Path', ur: 'راستے کی تعریف' },
            explanation: {
              en: 'The straight path is now defined: It is the path of those blessed by Allah - not just any "good" path.',
              ur: 'سیدھے راستے کی تعریف: یہ ان لوگوں کا راستہ ہے جن پر اللہ نے انعام کیا - کوئی بھی "اچھا" راستہ نہیں۔',
            },
          },
        },
      },
      {
        id: '1:7:2',
        position: 2,
        arabic: 'الَّذِينَ',
        transliteration: 'Alladhina',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        lemma: 'الَّذِي',
        meaning: {
          en: 'those who',
          ur: 'جو لوگ',
          hi: 'जो लोग',
          bn: 'যারা',
          tr: 'kendilerine',
          id: 'orang-orang yang',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        features: {
          type: 'relative pronoun',
          number: 'plural',
          gender: 'masculine',
        },
        grammarExplanations: {
          en: 'Relative pronoun (اسم موصول) - "those who". Functions as مضاف إليه.',
          ur: 'اسم موصول - "جو لوگ"۔ مضاف إليه کا کام کرتا ہے۔',
          hi: 'इस्म मौसूल - "जो लोग"। मुज़ाफ़ इलैह का काम करता है।',
        },
      },
      {
        id: '1:7:3',
        position: 3,
        arabic: 'أَنْعَمْتَ',
        transliteration: 'An\'amta',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ع م',
        lemma: 'أَنْعَمَ',
        pattern: 'أَفْعَلْتَ',
        meaning: {
          en: 'You have bestowed favor',
          ur: 'تو نے انعام کیا',
          hi: 'तूने इनआम किया',
          bn: 'তুমি অনুগ্রহ করেছ',
          tr: 'nimet verdiğin',
          id: 'Engkau beri nikmat',
        },
        grammarRole: 'silat-mawsool',
        case: null,
        features: {
          aspect: 'perfect',
          person: '2nd',
          gender: 'masculine',
          number: 'singular',
          voice: 'active',
          form: 'IV (إفعال)',
        },
        grammarExplanations: {
          en: 'Form IV perfect verb (فعل ماضٍ) - "You have blessed/favored". صلة الموصول (clause defining الذين).',
          ur: 'باب افعال فعل ماضی - "تو نے انعام کیا"۔ صلۃ الموصول (الذین کی وضاحت)۔',
          hi: 'बाब इफ़आल फ़ेअल माज़ी - "तूने इनआम किया"। सिलत-उल-मौसूल।',
        },
        advanced: {
          rootFamily: {
            root: 'ن ع م',
            meaning: { en: 'blessing, favor, comfort', ur: 'نعمت، انعام، آرام', hi: 'नेमत, इनआम, आराम' },
            words: [
              { arabic: 'نِعْمَة', count: 1, meaning: { en: 'blessing, favor', ur: 'نعمت' } },
              { arabic: 'أَنْعَمَ', count: 1, meaning: { en: 'to bestow favor', ur: 'انعام کرنا' } },
              { arabic: 'نَعِيم', count: 1, meaning: { en: 'bliss, comfort', ur: 'نعیم، آرام' } },
              { arabic: 'مُنْعِم', count: 1, meaning: { en: 'bestower', ur: 'انعام کرنے والا' } },
              { arabic: 'نِعَم', count: 1, meaning: { en: 'blessings (plural)', ur: 'نعمتیں' } },
            ],
          },
          balagha: {
            title: { en: 'Active Blessing', ur: 'فعال انعام' },
            explanation: {
              en: 'أَنْعَمْتَ (You blessed) - active verb with Allah as subject. But later المغضوب (those angered upon) - passive. Allah takes credit for blessings, but anger is attributed passively.',
              ur: 'أَنْعَمْتَ (تو نے انعام کیا) - معلوم فعل اللہ فاعل۔ لیکن بعد میں المغضوب (غضب کیے گئے) - مجہول۔ اللہ نعمت کا کریڈٹ لیتا ہے، لیکن غضب مجہول سے۔',
            },
          },
        },
      },
      {
        id: '1:7:4',
        position: 4,
        arabic: 'عَلَيْهِمْ',
        transliteration: '\'Alayhim',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'upon them',
          ur: 'ان پر',
          hi: 'उन पर',
          bn: 'তাদের উপর',
          tr: 'onlara',
          id: 'kepada mereka',
        },
        grammarRole: 'jarr-majroor',
        grammarExplanations: {
          en: 'Preposition عَلَى (upon) + attached pronoun هِمْ (them). Indicates recipients of blessing.',
          ur: 'حرف جار عَلَى (پر) + ضمیر متصل هِمْ (ان)۔ انعام پانے والوں کی نشاندہی۔',
          hi: 'हर्फ़-ए-जर عَلَى (पर) + ज़मीर मुत्तसिल هِمْ (उन)।',
        },
      },
      {
        id: '1:7:5',
        position: 5,
        arabic: 'غَيْرِ',
        transliteration: 'Ghayri',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ ي ر',
        lemma: 'غَيْر',
        meaning: {
          en: 'not / other than',
          ur: 'نہ / سوائے',
          hi: 'न / सिवाय',
          bn: 'নয়',
          tr: 'değil',
          id: 'bukan',
        },
        grammarRole: 'badal',
        case: 'majroor',
        features: {
          type: 'noun',
          case: 'genitive',
          state: 'construct',
        },
        grammarExplanations: {
          en: 'Substitute (بدل) or attribute describing excluded group. Genitive, also مضاف.',
          ur: 'بدل یا صفت جو مستثنیٰ گروہ کی وضاحت کرتی ہے۔ مجرور، نیز مضاف۔',
          hi: 'बदल या सिफ़त जो मुस्तस्ना ग्रुप की वज़ाहत करती है। मजरूर, साथ ही मुज़ाफ़।',
        },
        advanced: {
          balagha: {
            title: { en: 'Exclusion with غير', ur: 'غیر سے استثناء' },
            explanation: {
              en: 'غير clearly excludes two groups from the blessed path - showing Islam is distinct from deviant paths.',
              ur: 'غیر واضح طور پر دو گروہوں کو انعام یافتہ راستے سے خارج کرتا ہے - اسلام منحرف راستوں سے الگ ہے۔',
            },
          },
        },
      },
      {
        id: '1:7:6',
        position: 6,
        arabic: 'الْمَغْضُوبِ',
        transliteration: 'Al-Maghdoobi',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ ض ب',
        lemma: 'مَغْضُوب',
        pattern: 'مَفْعُول',
        meaning: {
          en: 'those who earned anger',
          ur: 'جن پر غضب ہوا',
          hi: 'जिन पर ग़ज़ब हुआ',
          bn: 'যাদের উপর গজব',
          tr: 'gazaba uğramış',
          id: 'yang dimurkai',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        features: {
          type: 'passive participle',
          case: 'genitive',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Passive participle (اسم مفعول) - "those angered upon". مضاف إليه of غير.',
          ur: 'اسم مفعول - "جن پر غضب کیا گیا"۔ غیر کا مضاف إليه۔',
          hi: 'इस्म मफ़ऊल - "जिन पर ग़ज़ब किया गया"। غیر का मुज़ाफ़ इलैह।',
        },
        advanced: {
          rootFamily: {
            root: 'غ ض ب',
            meaning: { en: 'anger, wrath', ur: 'غصہ، غضب', hi: 'ग़ुस्सा, ग़ज़ब' },
            words: [
              { arabic: 'غَضَبَ', count: 1, meaning: { en: 'he became angry', ur: 'وہ غضب ناک ہوا' } },
              { arabic: 'غَضَب', count: 1, meaning: { en: 'anger', ur: 'غصہ' } },
              { arabic: 'غَضْبَان', count: 1, meaning: { en: 'angry', ur: 'غصے والا' } },
              { arabic: 'مَغْضُوب', count: 1, meaning: { en: 'one angered upon', ur: 'جس پر غضب ہوا' } },
            ],
          },
          balagha: {
            title: { en: 'Passive Voice', ur: 'مجہول' },
            explanation: {
              en: 'المغضوب is passive - "those angered upon" without saying "by Allah." Adab (respect) - blessings attributed to Allah, anger stated passively.',
              ur: 'المغضوب مجہول ہے - "جن پر غضب ہوا" بغیر "اللہ کا" کہے۔ ادب - نعمتیں اللہ سے منسوب، غضب مجہول سے۔',
            },
          },
        },
      },
      {
        id: '1:7:7',
        position: 7,
        arabic: 'عَلَيْهِمْ',
        transliteration: '\'Alayhim',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'upon them',
          ur: 'ان پر',
          hi: 'उन पर',
          bn: 'তাদের উপর',
          tr: 'onların',
          id: 'atas mereka',
        },
        grammarRole: 'jarr-majroor',
        grammarExplanations: {
          en: 'Preposition + pronoun - completing the passive participle المغضوب.',
          ur: 'حرف جار + ضمیر - اسم مفعول المغضوب کی تکمیل۔',
          hi: 'हर्फ़-ए-जर + ज़मीर - इस्म मफ़ऊल की तकमील।',
        },
      },
      {
        id: '1:7:8',
        position: 8,
        arabic: 'وَلَا',
        transliteration: 'Wa-la',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'and not / nor',
          ur: 'اور نہ',
          hi: 'और न',
          bn: 'এবং নয়',
          tr: 've değil',
          id: 'dan bukan pula',
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: 'Conjunction وَ (and) + negative particle لا (not). Introduces second excluded group.',
          ur: 'حرف عطف وَ (اور) + حرف نفی لا (نہیں)۔ دوسرے مستثنیٰ گروہ کا تعارف۔',
          hi: 'हर्फ़-ए-अत्फ़ + हर्फ़-ए-नफ़ी। दूसरे मुस्तस्ना ग्रुप का तआरुफ़।',
        },
      },
      {
        id: '1:7:9',
        position: 9,
        arabic: 'الضَّالِّينَ',
        transliteration: 'Ad-Daaalleen',
        pos: ['N'],
        posLabel: 'N',
        root: 'ض ل ل',
        lemma: 'ضَالّ',
        pattern: 'فَاعِل',
        meaning: {
          en: 'those who are astray',
          ur: 'گمراہوں',
          hi: 'गुमराहों',
          bn: 'পথভ্রষ্টদের',
          tr: 'sapıtmışların',
          id: 'yang sesat',
        },
        grammarRole: 'matoof',
        case: 'majroor',
        features: {
          type: 'active participle',
          number: 'plural',
          case: 'genitive',
          definiteness: 'definite',
        },
        grammarExplanations: {
          en: 'Active participle plural (اسم فاعل جمع) - "those who went astray". Genitive following ولا.',
          ur: 'اسم فاعل جمع - "گمراہ ہونے والے"۔ ولا کے بعد مجرور۔',
          hi: 'इस्म फ़ाइल जमा - "गुमराह होने वाले"। ولا के बाद मजरूर।',
        },
        advanced: {
          rootFamily: {
            root: 'ض ل ل',
            meaning: { en: 'to stray, err, be lost', ur: 'گمراہ ہونا، کھو جانا', hi: 'गुमराह होना, खो जाना' },
            words: [
              { arabic: 'ضَلَّ', count: 1, meaning: { en: 'he strayed', ur: 'وہ گمراہ ہوا' } },
              { arabic: 'ضَلَال', count: 1, meaning: { en: 'misguidance', ur: 'گمراہی' } },
              { arabic: 'ضَالّ', count: 1, meaning: { en: 'one astray', ur: 'گمراہ' } },
              { arabic: 'مُضِلّ', count: 1, meaning: { en: 'one who misguides', ur: 'گمراہ کرنے والا' } },
            ],
          },
          balagha: {
            title: { en: 'Two Types of Error', ur: 'غلطی کی دو قسمیں' },
            explanation: {
              en: 'المغضوب عليهم - those who knew truth but rejected it (earned anger). الضالين - those who strayed through ignorance (lost).',
              ur: 'المغضوب علیہم - جنہوں نے حق جان کر رد کیا (غضب کمایا)۔ الضالین - جو جہالت سے بھٹکے (کھوئے)۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'شَدَّة (Doubling) in الضَّالِّين', ur: 'الضالین میں تشدید' },
            points: [
              {
                en: 'The double ل (shaddah) extends pronunciation - emphasizing the prolonged state of being lost.',
                ur: 'دوہرا ل (شد) تلفظ کو طویل کرتا ہے - گمراہی کی طویل حالت پر زور۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'complex-phrase',
      components: [
        { type: 'badal', word: 'صِرَاطَ', role: 'substitute for الصراط المستقيم' },
        { type: 'mudaf-ilayhi', word: 'الَّذِينَ', role: 'relative pronoun' },
        { type: 'silat-mawsool', word: 'أَنْعَمْتَ عَلَيْهِمْ', role: 'relative clause' },
        { type: 'badal', word: 'غَيْرِ', role: 'exclusion (first group)' },
        { type: 'mudaf-ilayhi', word: 'الْمَغْضُوبِ عَلَيْهِمْ', role: 'excluded group 1' },
        { type: 'matoof', word: 'وَلَا الضَّالِّينَ', role: 'excluded group 2' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 1, to: 4, label: 'بدل/استثناء' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'عطف' },
      ],
      explanation: {
        en: 'Definition of the straight path: Path of the blessed, excluding the angered-upon and the astray',
        ur: 'سیدھے راستے کی تعریف: انعام یافتہ کا راستہ، مستثنیٰ ہیں جن پر غضب ہوا اور گمراہ',
      },
    },
  },
};

// Export the data
export default SURAH_1_TREEBANK;
export { SURAH_1_TREEBANK as TREEBANK_DATA };
