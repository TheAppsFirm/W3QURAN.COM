/**
 * Surah Al-Anbiya (The Prophets) - Surah 21
 * Quranic Arabic Treebank Data
 * First 10 Ayahs - Complete word-by-word grammatical analysis
 *
 * Theme: Stories of prophets, Divine Unity, resurrection, judgment
 * Revelation: Makkan
 */

const SURAH_21_TREEBANK = {
  1: { // Ayah 1: اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ
    text: 'اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ',
    translation: {
      en: 'Draws near for mankind their reckoning, while they turn away in heedlessness.',
      ur: 'لوگوں کا حساب قریب آ گیا اور وہ غفلت میں منہ پھیرے ہوئے ہیں',
    },
    words: [
      {
        id: '21:1:1',
        arabic: 'اقْتَرَبَ',
        transliteration: 'iqtaraba',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق ر ب',
        meaning: {
          en: 'Has drawn near',
          ur: 'قریب آ گیا',
        },
        grammarRole: 'fil',
        grammarExplanations: {
          en: 'Verb (فعل ماض) - Form VIII perfect tense from root ق-ر-ب. The Form VIII pattern emphasizes reflexive approaching.',
          ur: 'فعل ماضی - باب افتعال سے ماخوذ۔ قریب ہونے کا عمل خود سے ہونے پر زور۔',
        },
      },
      {
        id: '21:1:2',
        arabic: 'لِلنَّاسِ',
        transliteration: 'lin-naasi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ن و س',
        meaning: {
          en: 'For mankind',
          ur: 'لوگوں کے لیے',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition لِ (for) + definite noun النَّاسِ in genitive case. The preposition indicates interest/benefit.',
          ur: 'حرف جار لِ + اسم معرفہ۔ لام ملکیت یا فائدہ کے لیے۔',
        },
      },
      {
        id: '21:1:3',
        arabic: 'حِسَابُهُمْ',
        transliteration: 'hisaabuhum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ح س ب',
        meaning: {
          en: 'Their reckoning/account',
          ur: 'ان کا حساب',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject (فاعل) - nominative, with attached possessive pronoun هُمْ (their). Subject of اقْتَرَبَ.',
          ur: 'فاعل - مرفوع۔ ضمیر متصل هُمْ (ان کا) لگا ہوا ہے۔',
        },
      },
      {
        id: '21:1:4',
        arabic: 'وَهُمْ',
        transliteration: 'wa-hum',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'While they',
          ur: 'اور وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Conjunction وَ (while/and) + independent pronoun هُمْ as subject of circumstantial clause (حال).',
          ur: 'واو حالیہ + ضمیر منفصل۔ جملہ حالیہ کا آغاز۔',
        },
      },
      {
        id: '21:1:5',
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
          en: 'Preposition indicating location/state - "in the state of".',
          ur: 'حرف جار - حالت یا مقام کے لیے۔',
        },
      },
      {
        id: '21:1:6',
        arabic: 'غَفْلَةٍ',
        transliteration: 'ghaflatin',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ ف ل',
        meaning: {
          en: 'Heedlessness',
          ur: 'غفلت',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive noun (مجرور) - indefinite, tanween indicates generality of their heedlessness.',
          ur: 'اسم مجرور - نکرہ تنوین کے ساتھ۔ عمومی غفلت کی طرف اشارہ۔',
        },
      },
      {
        id: '21:1:7',
        arabic: 'مُّعْرِضُونَ',
        transliteration: "mu'ridoona",
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ع ر ض',
        meaning: {
          en: 'Turning away',
          ur: 'منہ پھیرنے والے',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate (خبر) - Active participle from Form IV (أَعْرَضَ), nominative masculine plural. Describes their state.',
          ur: 'خبر - اسم فاعل باب افعال سے۔ جمع مذکر سالم مرفوع۔ ان کی حالت بیان کرتا ہے۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 7, label: 'مبتدأ + خبر' },
          { from: 5, to: 6, label: 'جار + مجرور' },
        ],
    },
  },

  2: { // Ayah 2: مَا يَأْتِيهِم مِّن ذِكْرٍ مِّن رَّبِّهِم مُّحْدَثٍ إِلَّا اسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ
    text: 'مَا يَأْتِيهِم مِّن ذِكْرٍ مِّن رَّبِّهِم مُّحْدَثٍ إِلَّا اسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ',
    translation: {
      en: 'No new reminder comes to them from their Lord except that they listen to it while they play.',
      ur: 'ان کے پاس جب بھی ان کے رب کی طرف سے کوئی نئی نصیحت آتی ہے تو وہ کھیلتے ہوئے سنتے ہیں',
    },
    words: [
      {
        id: '21:2:1',
        arabic: 'مَا',
        transliteration: 'maa',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Negation particle (حرف نفی) - negates the present tense verb that follows.',
          ur: 'حرف نفی - فعل مضارع کی نفی کے لیے۔',
        },
      },
      {
        id: '21:2:2',
        arabic: 'يَأْتِيهِم',
        transliteration: "ya'teehim",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'أ ت ي',
        meaning: {
          en: 'Comes to them',
          ur: 'ان کے پاس آتا ہے',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Imperfect verb (فعل مضارع) with attached object pronoun هِم. Indicates repeated/continuous action.',
          ur: 'فعل مضارع + ضمیر متصل مفعولی۔ تکرار یا استمرار کی دلیل۔',
        },
      },
      {
        id: '21:2:3',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From/Any',
          ur: 'سے/کوئی',
        },
        grammarRole: 'jarr-zaidah',
        grammarExplanations: {
          en: 'Preposition مِن - here used for emphasis (زائدة) after negation, meaning "any".',
          ur: 'حرف جار زائد - نفی کے بعد تاکید کے لیے۔',
        },
      },
      {
        id: '21:2:4',
        arabic: 'ذِكْرٍ',
        transliteration: 'dhikrin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        meaning: {
          en: 'Reminder/Remembrance',
          ur: 'نصیحت/یاد دہانی',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject (فاعل) - technically genitive due to زائدة مِن, but functionally nominative as subject.',
          ur: 'فاعل - مِن زائدہ کی وجہ سے لفظاً مجرور مگر محلاً مرفوع۔',
        },
      },
      {
        id: '21:2:5',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From',
          ur: 'کی طرف سے',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition indicating source/origin.',
          ur: 'حرف جار - ماخذ کی دلیل۔',
        },
      },
      {
        id: '21:2:6',
        arabic: 'رَّبِّهِم',
        transliteration: 'rabbihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: {
          en: 'Their Lord',
          ur: 'ان کے رب',
        },
        grammarRole: 'mudaf',
        grammarExplanations: {
          en: 'Genitive noun (مجرور) + possessive pronoun. Part of genitive construction with مِن.',
          ur: 'مضاف - مجرور + ضمیر متصل ملکیتی۔',
        },
      },
      {
        id: '21:2:7',
        arabic: 'مُّحْدَثٍ',
        transliteration: 'muhdathin',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ح د ث',
        meaning: {
          en: 'New/Recently revealed',
          ur: 'نیا/تازہ نازل شدہ',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for ذِكْرٍ - passive participle from Form IV, genitive to match modified noun.',
          ur: 'صفت - اسم مفعول باب افعال سے۔ موصوف کے تابع مجرور۔',
        },
      },
      {
        id: '21:2:8',
        arabic: 'إِلَّا',
        transliteration: 'illaa',
        pos: ['RES'],
        posLabel: 'RES',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے',
        },
        grammarRole: 'istithna',
        grammarExplanations: {
          en: 'Exception particle (أداة استثناء) - introduces what happens when reminder comes.',
          ur: 'اداة استثناء - جب نصیحت آئے تو کیا ہوتا ہے۔',
        },
      },
      {
        id: '21:2:9',
        arabic: 'اسْتَمَعُوهُ',
        transliteration: "istama'oohu",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'س م ع',
        meaning: {
          en: 'They listened to it',
          ur: 'انہوں نے اسے سنا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb Form VIII (اسْتَمَعَ) + object pronoun. Form VIII adds meaning of seeking/attentive listening.',
          ur: 'فعل ماضی باب استفعال + ضمیر مفعولی۔ توجہ سے سننا۔',
        },
      },
      {
        id: '21:2:10',
        arabic: 'وَهُمْ',
        transliteration: 'wa-hum',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'While they',
          ur: 'اور وہ',
        },
        grammarRole: 'hal',
        grammarExplanations: {
          en: 'Circumstantial clause (حال) - describes their state while listening.',
          ur: 'جملہ حالیہ - سننے کے وقت ان کی کیفیت۔',
        },
      },
      {
        id: '21:2:11',
        arabic: 'يَلْعَبُونَ',
        transliteration: "yal'aboona",
        pos: ['V'],
        posLabel: 'V',
        root: 'ل ع ب',
        meaning: {
          en: 'They play/jest',
          ur: 'کھیلتے ہیں',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate of حال clause - imperfect verb indicating ongoing action. Third person masculine plural.',
          ur: 'خبر جملہ حالیہ - فعل مضارع جمع مذکر غائب۔ جاری عمل کی دلیل۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 2, to: 4, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'حال' },
        ],
    },
  },

  3: { // Ayah 3: لَاهِيَةً قُلُوبُهُمْ وَأَسَرُّوا النَّجْوَى الَّذِينَ ظَلَمُوا
    text: 'لَاهِيَةً قُلُوبُهُمْ وَأَسَرُّوا النَّجْوَى الَّذِينَ ظَلَمُوا هَلْ هَٰذَا إِلَّا بَشَرٌ مِّثْلُكُمْ',
    translation: {
      en: 'Their hearts distracted. And those who do wrong conceal their private conversation, "Is this except a human being like you?"',
      ur: 'ان کے دل کھیل میں لگے ہیں اور ظالموں نے آپس میں سرگوشی کی کہ یہ تو تمہاری طرح کا ایک بشر ہے',
    },
    words: [
      {
        id: '21:3:1',
        arabic: 'لَاهِيَةً',
        transliteration: 'laahiyatan',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ل ه و',
        meaning: {
          en: 'Distracted/Heedless',
          ur: 'غافل/کھیل میں مشغول',
        },
        grammarRole: 'hal',
        grammarExplanations: {
          en: 'Circumstantial accusative (حال منصوب) - Active participle feminine singular describing قُلُوبُهُمْ.',
          ur: 'حال منصوب - اسم فاعل مؤنث۔ قلوب کی حالت بیان کرتا ہے۔',
        },
      },
      {
        id: '21:3:2',
        arabic: 'قُلُوبُهُمْ',
        transliteration: 'quloobuhum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ق ل ب',
        meaning: {
          en: 'Their hearts',
          ur: 'ان کے دل',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject (فاعل) - nominative plural noun with possessive pronoun. Heart is center of understanding in Quranic usage.',
          ur: 'فاعل - مرفوع جمع + ضمیر ملکیتی۔ قرآن میں دل فہم و ادراک کا مرکز ہے۔',
        },
      },
      {
        id: '21:3:3',
        arabic: 'وَأَسَرُّوا',
        transliteration: 'wa-asarroo',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'س ر ر',
        meaning: {
          en: 'And they concealed',
          ur: 'اور انہوں نے چھپایا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Conjunction وَ + Perfect verb Form IV (أَسَرَّ) - to conceal, keep secret. Third person masculine plural.',
          ur: 'واو عاطفہ + فعل ماضی باب افعال۔ چھپانا، پوشیدہ رکھنا۔',
        },
      },
      {
        id: '21:3:4',
        arabic: 'النَّجْوَى',
        transliteration: 'an-najwaa',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ج و',
        meaning: {
          en: 'The secret conversation',
          ur: 'سرگوشی',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object (مفعول به) - accusative. Refers to their secretive plotting.',
          ur: 'مفعول بہ - منصوب۔ ان کی خفیہ سازشوں کی طرف اشارہ۔',
        },
      },
      {
        id: '21:3:5',
        arabic: 'الَّذِينَ',
        transliteration: 'alladheena',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'Those who',
          ur: 'جو لوگ',
        },
        grammarRole: 'badal',
        grammarExplanations: {
          en: 'Relative pronoun - substitute (بدل) clarifying the subject of أَسَرُّوا.',
          ur: 'اسم موصول - بدل۔ أَسَرُّوا کے فاعل کی وضاحت۔',
        },
      },
      {
        id: '21:3:6',
        arabic: 'ظَلَمُوا',
        transliteration: 'zalamoo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ظ ل م',
        meaning: {
          en: 'They wronged/oppressed',
          ur: 'انہوں نے ظلم کیا',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause verb (صلة الموصول) - perfect tense. Describes the wrongdoers.',
          ur: 'صلہ موصول - فعل ماضی۔ ظالموں کی پہچان۔',
        },
      },
      {
        id: '21:3:7',
        arabic: 'هَلْ',
        transliteration: 'hal',
        pos: ['INTG'],
        posLabel: 'INTG',
        root: null,
        meaning: {
          en: 'Is?',
          ur: 'کیا؟',
        },
        grammarRole: 'istifham',
        grammarExplanations: {
          en: 'Interrogative particle - introduces their rhetorical question as quoted speech.',
          ur: 'حرف استفہام - ان کی مقولہ سوال کا آغاز۔',
        },
      },
      {
        id: '21:3:8',
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
          en: 'Demonstrative pronoun - subject of nominal sentence, referring to the Prophet ﷺ.',
          ur: 'اسم اشارہ - مبتدأ۔ نبی ﷺ کی طرف اشارہ۔',
        },
      },
      {
        id: '21:3:9',
        arabic: 'إِلَّا',
        transliteration: 'illaa',
        pos: ['RES'],
        posLabel: 'RES',
        root: null,
        meaning: {
          en: 'Except/Only',
          ur: 'سوائے/صرف',
        },
        grammarRole: 'hasr',
        grammarExplanations: {
          en: 'Restrictive particle - used here for limitation, meaning "nothing but".',
          ur: 'اداة حصر - صرف، کچھ نہیں سوائے۔',
        },
      },
      {
        id: '21:3:10',
        arabic: 'بَشَرٌ',
        transliteration: 'basharun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ب ش ر',
        meaning: {
          en: 'A human being',
          ur: 'ایک انسان',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate (خبر) - nominative indefinite noun. Their denial based on human nature of Prophet.',
          ur: 'خبر - مرفوع نکرہ۔ نبی کے بشر ہونے پر ان کا انکار۔',
        },
      },
      {
        id: '21:3:11',
        arabic: 'مِّثْلُكُمْ',
        transliteration: 'mithlukum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'م ث ل',
        meaning: {
          en: 'Like you',
          ur: 'تمہاری طرح',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for بَشَرٌ - nominative with attached pronoun. Emphasizes similarity.',
          ur: 'صفت - مرفوع + ضمیر۔ مماثلت پر زور۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'بدل' },
          { from: 5, to: 6, label: 'موصول + صلة' },
          { from: 7, to: 8, label: 'استفهام' },
          { from: 8, to: 10, label: 'مبتدأ + خبر' },
          { from: 9, to: 10, label: 'حصر' },
        ],
    },
  },

  4: { // Ayah 4: أَفَتَأْتُونَ السِّحْرَ وَأَنتُمْ تُبْصِرُونَ
    text: 'قَالَ رَبِّي يَعْلَمُ الْقَوْلَ فِي السَّمَاءِ وَالْأَرْضِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    translation: {
      en: 'He said, "My Lord knows [every] word in the heaven and earth, and He is the Hearing, the Knowing."',
      ur: 'کہہ دیجیے کہ میرا رب آسمان اور زمین کی ہر بات جانتا ہے اور وہ سب کچھ سننے والا، سب کچھ جاننے والا ہے',
    },
    words: [
      {
        id: '21:4:1',
        arabic: 'قَالَ',
        transliteration: 'qaala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: 'He said',
          ur: 'اس نے کہا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb - third person masculine singular. Introduces the Prophet\'s response.',
          ur: 'فعل ماضی - واحد مذکر غائب۔ نبی ﷺ کے جواب کا آغاز۔',
        },
      },
      {
        id: '21:4:2',
        arabic: 'رَبِّي',
        transliteration: 'rabbee',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: {
          en: 'My Lord',
          ur: 'میرا رب',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Subject of quoted speech - nominative noun with attached pronoun ي (my).',
          ur: 'مبتدأ مقول - مرفوع + یائے متکلم۔',
        },
      },
      {
        id: '21:4:3',
        arabic: 'يَعْلَمُ',
        transliteration: "ya'lamu",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        meaning: {
          en: 'Knows',
          ur: 'جانتا ہے',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate - imperfect verb indicating continuous knowledge. Third person masculine singular.',
          ur: 'خبر - فعل مضارع۔ جاری علم کی دلیل۔',
        },
      },
      {
        id: '21:4:4',
        arabic: 'الْقَوْلَ',
        transliteration: 'al-qawla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'The word/speech',
          ur: 'بات/کلام',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object (مفعول به) - accusative definite noun. All speech, public or secret.',
          ur: 'مفعول بہ - منصوب معرفہ۔ ہر بات چاہے ظاہر ہو یا مخفی۔',
        },
      },
      {
        id: '21:4:5',
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
          en: 'Preposition indicating location.',
          ur: 'حرف جار - مکان کے لیے۔',
        },
      },
      {
        id: '21:4:6',
        arabic: 'السَّمَاءِ',
        transliteration: "as-samaa'i",
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: {
          en: 'The heaven',
          ur: 'آسمان',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive noun after preposition فِي.',
          ur: 'اسم مجرور - حرف جار کے بعد۔',
        },
      },
      {
        id: '21:4:7',
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
          en: 'Conjunction وَ + genitive noun - coordinated with السَّمَاءِ.',
          ur: 'واو عاطفہ + معطوف مجرور۔',
        },
      },
      {
        id: '21:4:8',
        arabic: 'وَهُوَ',
        transliteration: 'wa-huwa',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'And He is',
          ur: 'اور وہ ہے',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Conjunction + independent pronoun as subject of new nominal sentence.',
          ur: 'واو عاطفہ + ضمیر منفصل مبتدأ۔',
        },
      },
      {
        id: '21:4:9',
        arabic: 'السَّمِيعُ',
        transliteration: "as-samee'u",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'س م ع',
        meaning: {
          en: 'The All-Hearing',
          ur: 'سننے والا',
        },
        grammarRole: 'khabar-awwal',
        grammarExplanations: {
          en: 'First predicate (خبر أول) - Divine Name, nominative. Pattern فَعِيل indicates intensity.',
          ur: 'خبر اول - اسم صفت اللہ۔ وزن فَعِيل مبالغہ کے لیے۔',
        },
      },
      {
        id: '21:4:10',
        arabic: 'الْعَلِيمُ',
        transliteration: "al-'aleem",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ل م',
        meaning: {
          en: 'The All-Knowing',
          ur: 'جاننے والا',
        },
        grammarRole: 'khabar-thani',
        grammarExplanations: {
          en: 'Second predicate (خبر ثاني) - Divine Name, nominative. Emphasizes complete knowledge.',
          ur: 'خبر ثانی - اسم صفت اللہ۔ مکمل علم پر زور۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'مبتدأ + خبر' },
          { from: 5, to: 6, label: 'جار + مجرور' },
        ],
    },
  },

  5: { // Ayah 5: بَلْ قَالُوا أَضْغَاثُ أَحْلَامٍ بَلِ افْتَرَاهُ بَلْ هُوَ شَاعِرٌ
    text: 'بَلْ قَالُوا أَضْغَاثُ أَحْلَامٍ بَلِ افْتَرَاهُ بَلْ هُوَ شَاعِرٌ فَلْيَأْتِنَا بِآيَةٍ كَمَا أُرْسِلَ الْأَوَّلُونَ',
    translation: {
      en: 'But they say, "It is confused dreams; rather, he has invented it; rather, he is a poet. Let him bring us a sign as the former messengers were sent."',
      ur: 'بلکہ وہ کہتے ہیں یہ پراگندہ خواب ہیں بلکہ اس نے خود گھڑ لیا ہے بلکہ یہ شاعر ہے پس یہ ہمارے پاس کوئی نشانی لائے جیسے پہلے رسول بھیجے گئے تھے',
    },
    words: [
      {
        id: '21:5:1',
        arabic: 'بَلْ',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Rather/Nay',
          ur: 'بلکہ',
        },
        grammarRole: 'idrab',
        grammarExplanations: {
          en: 'Particle of digression (حرف إضراب) - shifts to new claim, abandoning previous.',
          ur: 'حرف اضراب - پہلی بات چھوڑ کر نئی بات کی طرف۔',
        },
      },
      {
        id: '21:5:2',
        arabic: 'قَالُوا',
        transliteration: 'qaaloo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: 'They said',
          ur: 'انہوں نے کہا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb - third person masculine plural. Introduces disbelievers\' varied accusations.',
          ur: 'فعل ماضی - جمع مذکر غائب۔ کفار کے مختلف الزامات۔',
        },
      },
      {
        id: '21:5:3',
        arabic: 'أَضْغَاثُ',
        transliteration: 'adghaathu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ض غ ث',
        meaning: {
          en: 'Confused/Mixed-up',
          ur: 'پراگندہ/ملے جلے',
        },
        grammarRole: 'khabar-muqaddam',
        grammarExplanations: {
          en: 'Predicate (خبر) - nominative plural noun meaning "bundles" hence confused mixture.',
          ur: 'خبر مقدم - جمع مذکر۔ گٹھے یعنی خلط ملط۔',
        },
      },
      {
        id: '21:5:4',
        arabic: 'أَحْلَامٍ',
        transliteration: 'ahlaam',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ل م',
        meaning: {
          en: 'Dreams',
          ur: 'خواب',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct (مضاف إليه) - "confused dreams" as accusation against Quran.',
          ur: 'مضاف الیہ - مجرور۔ قرآن پر الزام کہ یہ پراگندہ خواب ہیں۔',
        },
      },
      {
        id: '21:5:5',
        arabic: 'بَلِ',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Rather',
          ur: 'بلکہ',
        },
        grammarRole: 'idrab',
        grammarExplanations: {
          en: 'Second digression - they shift to another accusation.',
          ur: 'دوسرا اضراب - دوسرے الزام کی طرف۔',
        },
      },
      {
        id: '21:5:6',
        arabic: 'افْتَرَاهُ',
        transliteration: 'iftaraahu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ف ر ي',
        meaning: {
          en: 'He invented it',
          ur: 'اس نے گھڑ لیا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb Form VIII + object pronoun. Form VIII implies deliberate fabrication.',
          ur: 'فعل ماضی باب افتعال + ضمیر مفعولی۔ جان بوجھ کر جھوٹ گھڑنا۔',
        },
      },
      {
        id: '21:5:7',
        arabic: 'بَلْ',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Rather',
          ur: 'بلکہ',
        },
        grammarRole: 'idrab',
        grammarExplanations: {
          en: 'Third digression - shows confusion of disbelievers, changing accusations.',
          ur: 'تیسرا اضراب - کفار کی تذبذب کی دلیل۔',
        },
      },
      {
        id: '21:5:8',
        arabic: 'هُوَ',
        transliteration: 'huwa',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'He is',
          ur: 'وہ ہے',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Independent pronoun - subject referring to the Prophet ﷺ.',
          ur: 'ضمیر منفصل - مبتدأ، نبی ﷺ کی طرف اشارہ۔',
        },
      },
      {
        id: '21:5:9',
        arabic: 'شَاعِرٌ',
        transliteration: "shaa'irun",
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ع ر',
        meaning: {
          en: 'A poet',
          ur: 'شاعر',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate (خبر) - nominative indefinite. Active participle pattern فَاعِل.',
          ur: 'خبر - مرفوع نکرہ۔ اسم فاعل وزن فَاعِل پر۔',
        },
      },
      {
        id: '21:5:10',
        arabic: 'فَلْيَأْتِنَا',
        transliteration: "falya'tinaa",
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'أ ت ي',
        meaning: {
          en: 'So let him bring us',
          ur: 'پس یہ ہمارے پاس لائے',
        },
        grammarRole: 'fil-amr',
        grammarExplanations: {
          en: 'فَ + لام الأمر + jussive verb + pronoun. Command form expressing their demand.',
          ur: 'فاء + لام امر + فعل مضارع مجزوم + ضمیر۔ ان کا مطالبہ۔',
        },
      },
      {
        id: '21:5:11',
        arabic: 'بِآيَةٍ',
        transliteration: "bi-aayatin",
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'أ ي ي',
        meaning: {
          en: 'With a sign',
          ur: 'کوئی نشانی',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition بِ + indefinite genitive noun. They demand miraculous sign.',
          ur: 'حرف جار + مجرور نکرہ۔ معجزہ کا مطالبہ۔',
        },
      },
      {
        id: '21:5:12',
        arabic: 'كَمَا',
        transliteration: 'kamaa',
        pos: ['P', 'REL'],
        posLabel: 'P+REL',
        root: null,
        meaning: {
          en: 'As/Like',
          ur: 'جیسے',
        },
        grammarRole: 'tashbih',
        grammarExplanations: {
          en: 'كَ (like) + مَا (that which) - comparative particle introducing comparison.',
          ur: 'کاف تشبیہ + ما موصولہ - تشبیہ کا آغاز۔',
        },
      },
      {
        id: '21:5:13',
        arabic: 'أُرْسِلَ',
        transliteration: 'ursila',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر س ل',
        meaning: {
          en: 'Were sent',
          ur: 'بھیجے گئے',
        },
        grammarRole: 'fil-madi-majhul',
        grammarExplanations: {
          en: 'Passive perfect verb Form IV - "were sent". Third person masculine singular.',
          ur: 'فعل ماضی مجہول باب افعال۔',
        },
      },
      {
        id: '21:5:14',
        arabic: 'الْأَوَّلُونَ',
        transliteration: 'al-awwaloona',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'أ و ل',
        meaning: {
          en: 'The former ones',
          ur: 'پہلے والے',
        },
        grammarRole: 'naib-fail',
        grammarExplanations: {
          en: 'Deputy subject (نائب الفاعل) - nominative masculine plural. Refers to previous messengers.',
          ur: 'نائب فاعل - جمع مذکر مرفوع۔ پہلے رسولوں کی طرف اشارہ۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
          { from: 8, to: 9, label: 'مبتدأ + خبر' },
          { from: 12, to: 13, label: 'موصول + صلة' },
        ],
    },
  },

  6: { // Ayah 6: مَا آمَنَتْ قَبْلَهُم مِّن قَرْيَةٍ أَهْلَكْنَاهَا أَفَهُمْ يُؤْمِنُونَ
    text: 'مَا آمَنَتْ قَبْلَهُم مِّن قَرْيَةٍ أَهْلَكْنَاهَا أَفَهُمْ يُؤْمِنُونَ',
    translation: {
      en: 'Not a [single] city which We destroyed believed before them; so will they believe?',
      ur: 'ان سے پہلے جو بستی بھی ہم نے ہلاک کی اس کے لوگ ایمان نہیں لائے تھے تو کیا یہ ایمان لائیں گے',
    },
    words: [
      {
        id: '21:6:1',
        arabic: 'مَا',
        transliteration: 'maa',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Negation particle - negates the past action.',
          ur: 'حرف نفی - ماضی کی نفی۔',
        },
      },
      {
        id: '21:6:2',
        arabic: 'آمَنَتْ',
        transliteration: 'aamanat',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ م ن',
        meaning: {
          en: 'Believed',
          ur: 'ایمان لائی',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb Form IV feminine - agrees with قَرْيَة (town, grammatically feminine).',
          ur: 'فعل ماضی باب افعال مؤنث - قَرْيَة سے مطابقت۔',
        },
      },
      {
        id: '21:6:3',
        arabic: 'قَبْلَهُم',
        transliteration: 'qablahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ق ب ل',
        meaning: {
          en: 'Before them',
          ur: 'ان سے پہلے',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Adverb of time (ظرف زمان) + possessive pronoun. Temporal reference.',
          ur: 'ظرف زمان + ضمیر ملکیتی۔',
        },
      },
      {
        id: '21:6:4',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From/Any',
          ur: 'کوئی',
        },
        grammarRole: 'jarr-zaidah',
        grammarExplanations: {
          en: 'Emphatic preposition after negation - "not a single".',
          ur: 'حرف جار زائد - تاکید کے لیے۔',
        },
      },
      {
        id: '21:6:5',
        arabic: 'قَرْيَةٍ',
        transliteration: 'qaryatin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ر ي',
        meaning: {
          en: 'Town/City',
          ur: 'بستی',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject (فاعل) - grammatically genitive due to مِن زائدة, but functionally nominative.',
          ur: 'فاعل - لفظاً مجرور محلاً مرفوع۔',
        },
      },
      {
        id: '21:6:6',
        arabic: 'أَهْلَكْنَاهَا',
        transliteration: 'ahlaknaahaa',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ه ل ك',
        meaning: {
          en: 'We destroyed it',
          ur: 'ہم نے ہلاک کیا',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Descriptive clause for قَرْيَةٍ - perfect verb Form IV + object pronoun. Divine plural "We".',
          ur: 'صفت جملہ - فعل ماضی باب افعال + ضمیر مفعولی۔ نون جمع متکلم۔',
        },
      },
      {
        id: '21:6:7',
        arabic: 'أَفَهُمْ',
        transliteration: 'afahum',
        pos: ['INTG', 'CONJ', 'PRON'],
        posLabel: 'INTG+CONJ+PRON',
        root: null,
        meaning: {
          en: 'So will they',
          ur: 'تو کیا یہ',
        },
        grammarRole: 'istifham-inkari',
        grammarExplanations: {
          en: 'Interrogative أَ + connective فَ + pronoun هُمْ. Rhetorical question implying negation.',
          ur: 'همزہ استفہام انکاری + فاء + ضمیر۔',
        },
      },
      {
        id: '21:6:8',
        arabic: 'يُؤْمِنُونَ',
        transliteration: "yu'minoona",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ م ن',
        meaning: {
          en: 'They believe',
          ur: 'ایمان لائیں گے',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Imperfect verb Form IV - third person masculine plural. Rhetorical - implies they won\'t believe.',
          ur: 'فعل مضارع باب افعال - جمع مذکر غائب۔ انکاری معنی میں۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 2, to: 5, label: 'فعل + فاعل' },
        ],
    },
  },

  7: { // Ayah 7: وَمَا أَرْسَلْنَا قَبْلَكَ إِلَّا رِجَالًا نُّوحِي إِلَيْهِمْ
    text: 'وَمَا أَرْسَلْنَا قَبْلَكَ إِلَّا رِجَالًا نُّوحِي إِلَيْهِمْ فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ',
    translation: {
      en: 'And We sent not before you except men to whom We revealed. So ask the people of the message if you do not know.',
      ur: 'اور ہم نے آپ سے پہلے بھی مردوں ہی کو رسول بنا کر بھیجا جن کی طرف ہم وحی بھیجتے تھے پس اہل ذکر سے پوچھ لو اگر تم نہیں جانتے',
    },
    words: [
      {
        id: '21:7:1',
        arabic: 'وَمَا',
        transliteration: 'wamaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Conjunction وَ + negation particle مَا.',
          ur: 'واو عاطفہ + حرف نفی۔',
        },
      },
      {
        id: '21:7:2',
        arabic: 'أَرْسَلْنَا',
        transliteration: 'arsalnaa',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر س ل',
        meaning: {
          en: 'We sent',
          ur: 'ہم نے بھیجا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb Form IV - first person plural (Divine "We").',
          ur: 'فعل ماضی باب افعال - نون جمع متکلم (عظمت)۔',
        },
      },
      {
        id: '21:7:3',
        arabic: 'قَبْلَكَ',
        transliteration: 'qablaka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ق ب ل',
        meaning: {
          en: 'Before you',
          ur: 'آپ سے پہلے',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Adverb of time + attached pronoun referring to Prophet ﷺ.',
          ur: 'ظرف زمان + ضمیر خطاب۔',
        },
      },
      {
        id: '21:7:4',
        arabic: 'إِلَّا',
        transliteration: 'illaa',
        pos: ['RES'],
        posLabel: 'RES',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے',
        },
        grammarRole: 'istithna',
        grammarExplanations: {
          en: 'Exception particle - limits what was sent to men only.',
          ur: 'اداة استثناء - صرف مردوں تک محدود۔',
        },
      },
      {
        id: '21:7:5',
        arabic: 'رِجَالًا',
        transliteration: 'rijaalan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ج ل',
        meaning: {
          en: 'Men',
          ur: 'مرد',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object (مفعول به) - accusative indefinite plural. All prophets were human males.',
          ur: 'مفعول بہ - منصوب جمع نکرہ۔ تمام انبیاء مرد تھے۔',
        },
      },
      {
        id: '21:7:6',
        arabic: 'نُّوحِي',
        transliteration: 'noohee',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ح ي',
        meaning: {
          en: 'We revealed',
          ur: 'ہم وحی کرتے تھے',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Descriptive clause - imperfect verb Form IV, first person plural.',
          ur: 'صفت جملہ - فعل مضارع باب افعال۔',
        },
      },
      {
        id: '21:7:7',
        arabic: 'إِلَيْهِمْ',
        transliteration: 'ilayhim',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'To them',
          ur: 'ان کی طرف',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition إِلَى (to) + attached pronoun هِمْ.',
          ur: 'حرف جار + ضمیر متصل۔',
        },
      },
      {
        id: '21:7:8',
        arabic: 'فَاسْأَلُوا',
        transliteration: "fas'aloo",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'س أ ل',
        meaning: {
          en: 'So ask',
          ur: 'پس پوچھو',
        },
        grammarRole: 'fil-amr',
        grammarExplanations: {
          en: 'Result clause فَ + imperative verb - command to inquire from knowledgeable people.',
          ur: 'فاء نتیجہ + فعل امر۔',
        },
      },
      {
        id: '21:7:9',
        arabic: 'أَهْلَ',
        transliteration: 'ahla',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ه ل',
        meaning: {
          en: 'The people of',
          ur: 'والوں سے',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative, first part of construct.',
          ur: 'مفعول بہ - منصوب مضاف۔',
        },
      },
      {
        id: '21:7:10',
        arabic: 'الذِّكْرِ',
        transliteration: 'adh-dhikri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        meaning: {
          en: 'The Reminder/Scripture',
          ur: 'ذکر/کتاب',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct - refers to people of previous scriptures.',
          ur: 'مضاف الیہ - اہل کتاب کی طرف اشارہ۔',
        },
      },
      {
        id: '21:7:11',
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
          en: 'Conditional particle - introduces condition of not knowing.',
          ur: 'حرف شرط۔',
        },
      },
      {
        id: '21:7:12',
        arabic: 'كُنتُمْ',
        transliteration: 'kuntum',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'You are',
          ur: 'تم ہو',
        },
        grammarRole: 'fil-shart',
        grammarExplanations: {
          en: 'Conditional verb - كان in second person masculine plural.',
          ur: 'فعل شرط - کان جمع مذکر مخاطب۔',
        },
      },
      {
        id: '21:7:13',
        arabic: 'لَا',
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
          en: 'Negation particle.',
          ur: 'حرف نفی۔',
        },
      },
      {
        id: '21:7:14',
        arabic: 'تَعْلَمُونَ',
        transliteration: "ta'lamoona",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        meaning: {
          en: 'You know',
          ur: 'تم جانتے ہو',
        },
        grammarRole: 'khabar-kana',
        grammarExplanations: {
          en: 'Predicate of كان - imperfect verb, second person masculine plural.',
          ur: 'خبر کان - فعل مضارع جمع مذکر مخاطب۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
          { from: 13, to: 14, label: 'نفی + فعل' },
        ],
    },
  },

  8: { // Ayah 8: وَمَا جَعَلْنَاهُمْ جَسَدًا لَّا يَأْكُلُونَ الطَّعَامَ وَمَا كَانُوا خَالِدِينَ
    text: 'وَمَا جَعَلْنَاهُمْ جَسَدًا لَّا يَأْكُلُونَ الطَّعَامَ وَمَا كَانُوا خَالِدِينَ',
    translation: {
      en: 'And We did not make them bodies not eating food, nor were they immortal.',
      ur: 'اور ہم نے ان کو ایسا جسم نہیں بنایا تھا کہ کھانا نہ کھائیں اور نہ وہ ہمیشہ رہنے والے تھے',
    },
    words: [
      {
        id: '21:8:1',
        arabic: 'وَمَا',
        transliteration: 'wamaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Conjunction + negation - continues response to claim prophets should be angels.',
          ur: 'واو + حرف نفی - جواب جاری ہے۔',
        },
      },
      {
        id: '21:8:2',
        arabic: 'جَعَلْنَاهُمْ',
        transliteration: "ja'alnaahum",
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ج ع ل',
        meaning: {
          en: 'We made them',
          ur: 'ہم نے انہیں بنایا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb + object pronoun. جَعَلَ with two objects means "to make something into something".',
          ur: 'فعل ماضی + ضمیر مفعولی۔ جَعَلَ دو مفعول کے ساتھ۔',
        },
      },
      {
        id: '21:8:3',
        arabic: 'جَسَدًا',
        transliteration: 'jasadan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج س د',
        meaning: {
          en: 'Bodies',
          ur: 'جسم',
        },
        grammarRole: 'mafool-thani',
        grammarExplanations: {
          en: 'Second object of جَعَلَ - accusative indefinite. Singular used for collective.',
          ur: 'مفعول ثانی - منصوب نکرہ۔ واحد بمعنی جمع۔',
        },
      },
      {
        id: '21:8:4',
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
          en: 'Negation in descriptive clause.',
          ur: 'حرف نفی - جملہ وصفیہ میں۔',
        },
      },
      {
        id: '21:8:5',
        arabic: 'يَأْكُلُونَ',
        transliteration: "ya'kuloona",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ك ل',
        meaning: {
          en: 'They eat',
          ur: 'وہ کھاتے ہیں',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Descriptive clause - imperfect verb. Prophets were human, needing food.',
          ur: 'صفت جملہ - فعل مضارع۔ انبیاء انسان تھے۔',
        },
      },
      {
        id: '21:8:6',
        arabic: 'الطَّعَامَ',
        transliteration: 'at-ta\'aama',
        pos: ['N'],
        posLabel: 'N',
        root: 'ط ع م',
        meaning: {
          en: 'The food',
          ur: 'کھانا',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative definite noun.',
          ur: 'مفعول بہ - منصوب معرفہ۔',
        },
      },
      {
        id: '21:8:7',
        arabic: 'وَمَا',
        transliteration: 'wamaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہ',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Conjunction + negation - second negated attribute.',
          ur: 'واو + حرف نفی - دوسری منفی صفت۔',
        },
      },
      {
        id: '21:8:8',
        arabic: 'كَانُوا',
        transliteration: 'kaanoo',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'They were',
          ur: 'وہ تھے',
        },
        grammarRole: 'fil-naqis',
        grammarExplanations: {
          en: 'Incomplete verb كان - third person masculine plural.',
          ur: 'فعل ناقص کان - جمع مذکر غائب۔',
        },
      },
      {
        id: '21:8:9',
        arabic: 'خَالِدِينَ',
        transliteration: 'khaalideena',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'خ ل د',
        meaning: {
          en: 'Immortal/Eternal',
          ur: 'ہمیشہ رہنے والے',
        },
        grammarRole: 'khabar-kana',
        grammarExplanations: {
          en: 'Predicate of كان - active participle, accusative masculine plural.',
          ur: 'خبر کان - اسم فاعل جمع مذکر منصوب۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 4, to: 5, label: 'نفی + فعل' },
          { from: 7, to: 8, label: 'نفی + فعل' },
        ],
    },
  },

  9: { // Ayah 9: ثُمَّ صَدَقْنَاهُمُ الْوَعْدَ فَأَنجَيْنَاهُمْ وَمَن نَّشَاءُ وَأَهْلَكْنَا الْمُسْرِفِينَ
    text: 'ثُمَّ صَدَقْنَاهُمُ الْوَعْدَ فَأَنجَيْنَاهُمْ وَمَن نَّشَاءُ وَأَهْلَكْنَا الْمُسْرِفِينَ',
    translation: {
      en: 'Then We fulfilled for them the promise, and We saved them and whom We willed, and destroyed the transgressors.',
      ur: 'پھر ہم نے ان سے وعدہ پورا کیا اور انہیں اور جنہیں ہم نے چاہا بچا لیا اور حد سے گزرنے والوں کو ہلاک کر دیا',
    },
    words: [
      {
        id: '21:9:1',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Then',
          ur: 'پھر',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Sequential conjunction - indicates order with time gap.',
          ur: 'حرف عطف - ترتیب مع تراخی۔',
        },
      },
      {
        id: '21:9:2',
        arabic: 'صَدَقْنَاهُمُ',
        transliteration: 'sadaqnaahum',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ص د ق',
        meaning: {
          en: 'We fulfilled for them',
          ur: 'ہم نے ان سے سچ کیا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb + indirect object pronoun. صَدَقَ with double object means "to fulfill a promise to someone".',
          ur: 'فعل ماضی + ضمیر۔ دو مفعول کے ساتھ وعدہ پورا کرنا۔',
        },
      },
      {
        id: '21:9:3',
        arabic: 'الْوَعْدَ',
        transliteration: "al-wa'da",
        pos: ['N'],
        posLabel: 'N',
        root: 'و ع د',
        meaning: {
          en: 'The promise',
          ur: 'وعدہ',
        },
        grammarRole: 'mafool-thani',
        grammarExplanations: {
          en: 'Second direct object - accusative definite. The promise of victory.',
          ur: 'مفعول ثانی - منصوب معرفہ۔ نصرت کا وعدہ۔',
        },
      },
      {
        id: '21:9:4',
        arabic: 'فَأَنجَيْنَاهُمْ',
        transliteration: 'fa-anjaynaahum',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ن ج و',
        meaning: {
          en: 'So We saved them',
          ur: 'پس ہم نے انہیں بچایا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Result فَ + perfect verb Form IV + object pronoun. Salvation of believers.',
          ur: 'فاء نتیجہ + فعل ماضی باب افعال + ضمیر مفعولی۔',
        },
      },
      {
        id: '21:9:5',
        arabic: 'وَمَن',
        transliteration: 'wa-man',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: {
          en: 'And whom',
          ur: 'اور جنہیں',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Conjunction + relative pronoun - adds another category of saved people.',
          ur: 'واو عاطفہ + اسم موصول۔',
        },
      },
      {
        id: '21:9:6',
        arabic: 'نَّشَاءُ',
        transliteration: "nashaa'u",
        pos: ['V'],
        posLabel: 'V',
        root: 'ش ي أ',
        meaning: {
          en: 'We will',
          ur: 'ہم چاہیں',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause verb - imperfect first person plural. Divine will in salvation.',
          ur: 'صلہ موصول - فعل مضارع۔ نجات میں مشیئت الٰہی۔',
        },
      },
      {
        id: '21:9:7',
        arabic: 'وَأَهْلَكْنَا',
        transliteration: 'wa-ahlaknaa',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ه ل ك',
        meaning: {
          en: 'And We destroyed',
          ur: 'اور ہم نے ہلاک کیا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Conjunction + perfect verb Form IV. Destruction of transgressors.',
          ur: 'واو عاطفہ + فعل ماضی باب افعال۔',
        },
      },
      {
        id: '21:9:8',
        arabic: 'الْمُسْرِفِينَ',
        transliteration: 'al-musrifeena',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'س ر ف',
        meaning: {
          en: 'The transgressors',
          ur: 'حد سے گزرنے والوں',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - active participle Form IV, accusative masculine plural. Those who exceeded bounds.',
          ur: 'مفعول بہ - اسم فاعل باب افعال جمع مذکر منصوب۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'عطف' },
          { from: 5, to: 6, label: 'موصول + صلة' },
        ],
    },
  },

  10: { // Ayah 10: لَقَدْ أَنزَلْنَا إِلَيْكُمْ كِتَابًا فِيهِ ذِكْرُكُمْ أَفَلَا تَعْقِلُونَ
    text: 'لَقَدْ أَنزَلْنَا إِلَيْكُمْ كِتَابًا فِيهِ ذِكْرُكُمْ أَفَلَا تَعْقِلُونَ',
    translation: {
      en: 'We have certainly sent down to you a Book in which is your mention. Then will you not reason?',
      ur: 'بیشک ہم نے تمہاری طرف ایک کتاب اتاری ہے جس میں تمہارا ذکر ہے کیا تم عقل نہیں رکھتے',
    },
    words: [
      {
        id: '21:10:1',
        arabic: 'لَقَدْ',
        transliteration: 'laqad',
        pos: ['EMPH', 'PART'],
        posLabel: 'EMPH+PART',
        root: null,
        meaning: {
          en: 'Certainly',
          ur: 'بیشک',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'Emphatic لَ + particle قَدْ - strong emphasis before perfect verb.',
          ur: 'لام تاکید + قَدْ تحقیق - فعل ماضی سے پہلے قوی تاکید۔',
        },
      },
      {
        id: '21:10:2',
        arabic: 'أَنزَلْنَا',
        transliteration: 'anzalnaa',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ز ل',
        meaning: {
          en: 'We sent down',
          ur: 'ہم نے اتارا',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb Form IV - divine revelation sent down all at once (unlike تَنْزِيل gradual).',
          ur: 'فعل ماضی باب افعال - یکبارگی نزول (تَنْزِيل بتدریج کے برعکس)۔',
        },
      },
      {
        id: '21:10:3',
        arabic: 'إِلَيْكُمْ',
        transliteration: 'ilaykum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'To you',
          ur: 'تمہاری طرف',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition إِلَى + attached pronoun. Addressed to Quraysh.',
          ur: 'حرف جار + ضمیر۔ قریش سے خطاب۔',
        },
      },
      {
        id: '21:10:4',
        arabic: 'كِتَابًا',
        transliteration: 'kitaaban',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: {
          en: 'A Book',
          ur: 'ایک کتاب',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative indefinite noun. Refers to the Quran.',
          ur: 'مفعول بہ - منصوب نکرہ۔ قرآن کی طرف اشارہ۔',
        },
      },
      {
        id: '21:10:5',
        arabic: 'فِيهِ',
        transliteration: 'feehi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'In it',
          ur: 'اس میں',
        },
        grammarRole: 'khabar-muqaddam',
        grammarExplanations: {
          en: 'Predicate (خبر مقدم) of the nominal sentence inside the description.',
          ur: 'خبر مقدم - جملہ اسمیہ وصفیہ میں۔',
        },
      },
      {
        id: '21:10:6',
        arabic: 'ذِكْرُكُمْ',
        transliteration: 'dhikrukum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ذ ك ر',
        meaning: {
          en: 'Your mention/reminder',
          ur: 'تمہارا ذکر',
        },
        grammarRole: 'mubtada-muakhkhar',
        grammarExplanations: {
          en: 'Delayed subject (مبتدأ مؤخر) - "your honor/mention is in it". Can mean reputation or reminder.',
          ur: 'مبتدأ مؤخر - تمہاری شان یا یاد دہانی۔',
        },
      },
      {
        id: '21:10:7',
        arabic: 'أَفَلَا',
        transliteration: 'afalaa',
        pos: ['INTG', 'CONJ', 'NEG'],
        posLabel: 'INTG+CONJ+NEG',
        root: null,
        meaning: {
          en: 'Then will you not',
          ur: 'کیا تم نہیں',
        },
        grammarRole: 'istifham-inkari',
        grammarExplanations: {
          en: 'Interrogative أَ + فَ + negation لَا. Rhetorical question urging reflection.',
          ur: 'همزہ استفہام + فاء + لا نافیہ۔ غور کرنے کی تحریک۔',
        },
      },
      {
        id: '21:10:8',
        arabic: 'تَعْقِلُونَ',
        transliteration: "ta'qiloona",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ق ل',
        meaning: {
          en: 'You use reason',
          ur: 'عقل رکھتے ہو',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Imperfect verb - second person masculine plural. Call to use intellect.',
          ur: 'فعل مضارع - جمع مذکر مخاطب۔ عقل استعمال کرنے کی دعوت۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 7, to: 8, label: 'نفی + فعل' },
        ],
    },
  },

  11: {
    text: "وَكَمْ قَصَمْنَا مِن قَرْيَةٍۢ كَانَتْ ظَالِمَةًۭ وَأَنشَأْنَا بَعْدَهَا قَوْمًا ءَاخَرِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے بہت سی بستیوں کو جو ستمگار تھیں ہلاک کر مارا اور ان کے بعد اور لوگ پیدا کردیئے",
    },
    words: [
      { id: '21:11:1', arabic: "وَكَمْ", transliteration: "wakam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And how many", ur: "اور how many" } },
      { id: '21:11:2', arabic: "قَصَمْنَا", transliteration: "qaṣamnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (have) shattered", ur: "ہم (have) shattered" } },
      { id: '21:11:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:11:4', arabic: "قَرْيَةٍۢ", transliteration: "qaryatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a town", ur: "a town" } },
      { id: '21:11:5', arabic: "كَانَتْ", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(that) was", ur: "(وہ) was" } },
      { id: '21:11:6', arabic: "ظَالِمَةًۭ", transliteration: "ẓālimatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unjust", ur: "unjust" } },
      { id: '21:11:7', arabic: "وَأَنشَأْنَا", transliteration: "wa-anshanā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We produced", ur: "اور ہم produced" } },
      { id: '21:11:8', arabic: "بَعْدَهَا", transliteration: "baʿdahā", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after them", ur: "بعد them" } },
      { id: '21:11:9', arabic: "قَوْمًا", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "another people", ur: "another لوگ" } },
      { id: '21:11:10', arabic: "ءَاخَرِينَ", transliteration: "ākharīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "another people", ur: "another لوگ" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  12: {
    text: "فَلَمَّآ أَحَسُّوا۟ بَأْسَنَآ إِذَا هُم مِّنْهَا يَرْكُضُونَ",
    translation: {
      en: "",
      ur: "جب انہوں نے ہمارے (مقدمہ) عذاب کو دیکھا تو لگے اس سے بھاگنے",
    },
    words: [
      { id: '21:12:1', arabic: "فَلَمَّآ", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '21:12:2', arabic: "أَحَسُّوا۟", transliteration: "aḥassū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they perceived", ur: "وہ لوگ perceived" } },
      { id: '21:12:3', arabic: "بَأْسَنَآ", transliteration: "basanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our torment", ur: "Our torment" } },
      { id: '21:12:4', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "behold", ur: "behold" } },
      { id: '21:12:5', arabic: "هُم", transliteration: "hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '21:12:6', arabic: "مِّنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '21:12:7', arabic: "يَرْكُضُونَ", transliteration: "yarkuḍūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "were fleeing", ur: "were fleeing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  13: {
    text: "لَا تَرْكُضُوا۟ وَٱرْجِعُوٓا۟ إِلَىٰ مَآ أُتْرِفْتُمْ فِيهِ وَمَسَـٰكِنِكُمْ لَعَلَّكُمْ تُسْـَٔلُونَ",
    translation: {
      en: "",
      ur: "مت بھاگو اور جن (نعمتوں) میں تم عیش وآسائش کرتے تھے ان کی اور اپنے گھروں کی طرف لوٹ جاؤ۔ شاید تم سے (اس بارے میں) دریافت کیا جائے",
    },
    words: [
      { id: '21:13:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Flee not", ur: "Flee نہیں" } },
      { id: '21:13:2', arabic: "تَرْكُضُوا۟", transliteration: "tarkuḍū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Flee not", ur: "Flee نہیں" } },
      { id: '21:13:3', arabic: "وَٱرْجِعُوٓا۟", transliteration: "wa-ir'jiʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but return", ur: "لیکن return" } },
      { id: '21:13:4', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '21:13:5', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:13:6', arabic: "أُتْرِفْتُمْ", transliteration: "ut'rif'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you were given luxury", ur: "تم were given luxury" } },
      { id: '21:13:7', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '21:13:8', arabic: "وَمَسَـٰكِنِكُمْ", transliteration: "wamasākinikum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to your homes", ur: "اور کو your homes" } },
      { id: '21:13:9', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '21:13:10', arabic: "تُسْـَٔلُونَ", transliteration: "tus'alūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be questioned", ur: "be questioned" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  14: {
    text: "قَالُوا۟ يَـٰوَيْلَنَآ إِنَّا كُنَّا ظَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "کہنے لگے ہائے شامت بےشک ہم ظالم تھے",
    },
    words: [
      { id: '21:14:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '21:14:2', arabic: "يَـٰوَيْلَنَآ", transliteration: "yāwaylanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O woe to us", ur: "اے woe کو us" } },
      { id: '21:14:3', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, [we]", ur: "بیشک, [ہم]" } },
      { id: '21:14:4', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we were", ur: "ہم were" } },
      { id: '21:14:5', arabic: "ظَـٰلِمِينَ", transliteration: "ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wrongdoers", ur: "wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  15: {
    text: "فَمَا زَالَت تِّلْكَ دَعْوَىٰهُمْ حَتَّىٰ جَعَلْنَـٰهُمْ حَصِيدًا خَـٰمِدِينَ",
    translation: {
      en: "",
      ur: "تو وہ ہمیشہ اسی طرح پکارتے رہے یہاں تک کہ ہم نے ان کو (کھیتی کی طرح) کاٹ کر (اور آگ کی طرح) بجھا کر ڈھیر کردیا",
    },
    words: [
      { id: '21:15:1', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then not", ur: "پھر نہیں" } },
      { id: '21:15:2', arabic: "زَالَت", transliteration: "zālat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "ceased", ur: "ceased" } },
      { id: '21:15:3', arabic: "تِّلْكَ", transliteration: "til'ka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[this]", ur: "[this]" } },
      { id: '21:15:4', arabic: "دَعْوَىٰهُمْ", transliteration: "daʿwāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their cry", ur: "their cry" } },
      { id: '21:15:5', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '21:15:6', arabic: "جَعَلْنَـٰهُمْ", transliteration: "jaʿalnāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We made them", ur: "ہم made them" } },
      { id: '21:15:7', arabic: "حَصِيدًا", transliteration: "ḥaṣīdan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reaped", ur: "reaped" } },
      { id: '21:15:8', arabic: "خَـٰمِدِينَ", transliteration: "khāmidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "extinct", ur: "extinct" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  16: {
    text: "وَمَا خَلَقْنَا ٱلسَّمَآءَ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا لَـٰعِبِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے آسمان اور زمین کو جو اور (مخلوقات) ان دونوں کے درمیان ہے اس کو لہوولعب کے لئے پیدا نہیں کیا",
    },
    words: [
      { id: '21:16:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '21:16:2', arabic: "خَلَقْنَا", transliteration: "khalaqnā", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "We created", ur: "ہم پیدا کیا" } },
      { id: '21:16:3', arabic: "ٱلسَّمَآءَ", transliteration: "l-samāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '21:16:4', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '21:16:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '21:16:6', arabic: "بَيْنَهُمَا", transliteration: "baynahumā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) between them", ur: "(is) درمیان them" } },
      { id: '21:16:7', arabic: "لَـٰعِبِينَ", transliteration: "lāʿibīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(for) playing", ur: "(for) playing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  17: {
    text: "لَوْ أَرَدْنَآ أَن نَّتَّخِذَ لَهْوًۭا لَّٱتَّخَذْنَـٰهُ مِن لَّدُنَّآ إِن كُنَّا فَـٰعِلِينَ",
    translation: {
      en: "",
      ur: "اگر ہم چاہتے کہ کھیل (کی چیزیں یعنی زن وفرزند) بنائیں تو اگر ہم کو کرنا ہوتا تو ہم اپنے پاس سے بنالیتے",
    },
    words: [
      { id: '21:17:1', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '21:17:2', arabic: "أَرَدْنَآ", transliteration: "aradnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We intended", ur: "ہم intended" } },
      { id: '21:17:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '21:17:4', arabic: "نَّتَّخِذَ", transliteration: "nattakhidha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We take", ur: "ہم take" } },
      { id: '21:17:5', arabic: "لَهْوًۭا", transliteration: "lahwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a pastime", ur: "a pastime" } },
      { id: '21:17:6', arabic: "لَّٱتَّخَذْنَـٰهُ", transliteration: "la-ittakhadhnāhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely We (could have) taken it", ur: "یقیناً ہم (could have) taken it" } },
      { id: '21:17:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:17:8', arabic: "لَّدُنَّآ", transliteration: "ladunnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Us", ur: "Us" } },
      { id: '21:17:9', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '21:17:10', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We were", ur: "ہم were" } },
      { id: '21:17:11', arabic: "فَـٰعِلِينَ", transliteration: "fāʿilīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "doers", ur: "doers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  18: {
    text: "بَلْ نَقْذِفُ بِٱلْحَقِّ عَلَى ٱلْبَـٰطِلِ فَيَدْمَغُهُۥ فَإِذَا هُوَ زَاهِقٌۭ ۚ وَلَكُمُ ٱلْوَيْلُ مِمَّا تَصِفُونَ",
    translation: {
      en: "",
      ur: "بلکہ ہم سچ کو جھوٹ پر کھینچ مارتے ہیں تو وہ اس کا سر توڑ دیتا ہے اور جھوٹ اسی وقت نابود ہوجاتا ہے۔ اور جو باتیں تم بناتے ہو ان سے تمہاری ہی خرابی ہے",
    },
    words: [
      { id: '21:18:1', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '21:18:2', arabic: "نَقْذِفُ", transliteration: "naqdhifu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We hurl", ur: "ہم hurl" } },
      { id: '21:18:3', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '21:18:4', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '21:18:5', arabic: "ٱلْبَـٰطِلِ", transliteration: "l-bāṭili", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] falsehood", ur: "[the] falsehood" } },
      { id: '21:18:6', arabic: "فَيَدْمَغُهُۥ", transliteration: "fayadmaghuhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and it breaks its head", ur: "اور it breaks its head" } },
      { id: '21:18:7', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "behold", ur: "behold" } },
      { id: '21:18:8', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "it (is)", ur: "it (is)" } },
      { id: '21:18:9', arabic: "زَاهِقٌۭ ۚ", transliteration: "zāhiqun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "vanishing", ur: "vanishing" } },
      { id: '21:18:10', arabic: "وَلَكُمُ", transliteration: "walakumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for you", ur: "اور for تم" } },
      { id: '21:18:11', arabic: "ٱلْوَيْلُ", transliteration: "l-waylu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) destruction", ur: "(is) destruction" } },
      { id: '21:18:12', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '21:18:13', arabic: "تَصِفُونَ", transliteration: "taṣifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you ascribe", ur: "تم ascribe" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  19: {
    text: "وَلَهُۥ مَن فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَمَنْ عِندَهُۥ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِۦ وَلَا يَسْتَحْسِرُونَ",
    translation: {
      en: "",
      ur: "اور جو لوگ آسمانوں میں اور جو زمین میں ہیں سب اسی کے (مملوک اور اُسی کا مال) ہیں۔ اور جو (فرشتے) اُس کے پاس ہیں وہ اس کی عبادت سے نہ کنیاتے ہیں اور نہ اکتاتے ہیں",
    },
    words: [
      { id: '21:19:1', arabic: "وَلَهُۥ", transliteration: "walahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to Him (belongs)", ur: "اور کو Him (belongs)" } },
      { id: '21:19:2', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whoever", ur: "whoever" } },
      { id: '21:19:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '21:19:4', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '21:19:5', arabic: "وَٱلْأَرْضِ ۚ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '21:19:6', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (those) who", ur: "اور (those) جو" } },
      { id: '21:19:7', arabic: "عِندَهُۥ", transliteration: "ʿindahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) near Him", ur: "(are) near Him" } },
      { id: '21:19:8', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '21:19:9', arabic: "يَسْتَكْبِرُونَ", transliteration: "yastakbirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are arrogant", ur: "وہ لوگ are arrogant" } },
      { id: '21:19:10', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '21:19:11', arabic: "عِبَادَتِهِۦ", transliteration: "ʿibādatihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "worship Him", ur: "عبادت Him" } },
      { id: '21:19:12', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '21:19:13', arabic: "يَسْتَحْسِرُونَ", transliteration: "yastaḥsirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they tire", ur: "وہ لوگ tire" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  20: {
    text: "يُسَبِّحُونَ ٱلَّيْلَ وَٱلنَّهَارَ لَا يَفْتُرُونَ",
    translation: {
      en: "",
      ur: "رات دن (اُس کی) تسبیح کرتے رہتے ہیں (نہ تھکتے ہیں) نہ اکتاتے ہیں",
    },
    words: [
      { id: '21:20:1', arabic: "يُسَبِّحُونَ", transliteration: "yusabbiḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They glorify (Him)", ur: "وہ لوگ glorify (Him)" } },
      { id: '21:20:2', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] night", ur: "[the] رات" } },
      { id: '21:20:3', arabic: "وَٱلنَّهَارَ", transliteration: "wal-nahāra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [the] day", ur: "اور [the] دن" } },
      { id: '21:20:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '21:20:5', arabic: "يَفْتُرُونَ", transliteration: "yafturūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they slacken", ur: "وہ لوگ slacken" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'نفی + فعل' }
      ],
    },
  },
  21: {
    text: "أَمِ ٱتَّخَذُوٓا۟ ءَالِهَةًۭ مِّنَ ٱلْأَرْضِ هُمْ يُنشِرُونَ",
    translation: {
      en: "",
      ur: "بھلا لوگوں نے جو زمین کی چیزوں سے (بعض کو) معبود بنا لیا ہے (تو کیا) وہ ان کو (مرنے کے بعد) اُٹھا کھڑا کریں گے؟",
    },
    words: [
      { id: '21:21:1', arabic: "أَمِ", transliteration: "ami", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '21:21:2', arabic: "ٱتَّخَذُوٓا۟", transliteration: "ittakhadhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(have) they taken", ur: "(have) وہ لوگ taken" } },
      { id: '21:21:3', arabic: "ءَالِهَةًۭ", transliteration: "ālihatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gods", ur: "gods" } },
      { id: '21:21:4', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:21:5', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '21:21:6', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '21:21:7', arabic: "يُنشِرُونَ", transliteration: "yunshirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "raise (the dead)", ur: "raise (the dead)" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  22: {
    text: "لَوْ كَانَ فِيهِمَآ ءَالِهَةٌ إِلَّا ٱللَّهُ لَفَسَدَتَا ۚ فَسُبْحَـٰنَ ٱللَّهِ رَبِّ ٱلْعَرْشِ عَمَّا يَصِفُونَ",
    translation: {
      en: "",
      ur: "اگر آسمان اور زمین میں خدا کے سوا اور معبود ہوتے تو زمین وآسمان درہم برہم ہوجاتے۔ جو باتیں یہ لوگ بتاتے ہیں خدائے مالک عرش ان سے پاک ہے",
    },
    words: [
      { id: '21:22:1', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '21:22:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(there) were", ur: "(there) were" } },
      { id: '21:22:3', arabic: "فِيهِمَآ", transliteration: "fīhimā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in both of them", ur: "میں both of them" } },
      { id: '21:22:4', arabic: "ءَالِهَةٌ", transliteration: "ālihatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gods", ur: "gods" } },
      { id: '21:22:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides", ur: "besides" } },
      { id: '21:22:6', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '21:22:7', arabic: "لَفَسَدَتَا ۚ", transliteration: "lafasadatā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely they (would) have been ruined", ur: "یقیناً وہ لوگ (would) have been ruined" } },
      { id: '21:22:8', arabic: "فَسُبْحَـٰنَ", transliteration: "fasub'ḥāna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So glorified", ur: "So glorified" } },
      { id: '21:22:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '21:22:10', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Lord", ur: "رب" } },
      { id: '21:22:11', arabic: "ٱلْعَرْشِ", transliteration: "l-ʿarshi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Throne", ur: "(of) the Throne" } },
      { id: '21:22:12', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(above) what", ur: "(above) کیا" } },
      { id: '21:22:13', arabic: "يَصِفُونَ", transliteration: "yaṣifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they attribute", ur: "وہ لوگ attribute" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  23: {
    text: "لَا يُسْـَٔلُ عَمَّا يَفْعَلُ وَهُمْ يُسْـَٔلُونَ",
    translation: {
      en: "",
      ur: "وہ جو کام کرتا ہے اس کی پرستش نہیں ہوگی اور (جو کام یہ لوگ کرتے ہیں اس کی) ان سے پرستش ہوگی",
    },
    words: [
      { id: '21:23:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '21:23:2', arabic: "يُسْـَٔلُ", transliteration: "yus'alu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (can) be questioned", ur: "وہ (can) be questioned" } },
      { id: '21:23:3', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about what", ur: "about کیا" } },
      { id: '21:23:4', arabic: "يَفْعَلُ", transliteration: "yafʿalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He does", ur: "وہ does" } },
      { id: '21:23:5', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but they", ur: "لیکن وہ لوگ" } },
      { id: '21:23:6', arabic: "يُسْـَٔلُونَ", transliteration: "yus'alūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be questioned", ur: "will be questioned" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  24: {
    text: "أَمِ ٱتَّخَذُوا۟ مِن دُونِهِۦٓ ءَالِهَةًۭ ۖ قُلْ هَاتُوا۟ بُرْهَـٰنَكُمْ ۖ هَـٰذَا ذِكْرُ مَن مَّعِىَ وَذِكْرُ مَن قَبْلِى ۗ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ ٱلْحَقَّ ۖ فَهُم مُّعْرِضُونَ",
    translation: {
      en: "",
      ur: "کیا لوگوں نے خدا کو چھوڑ کر اور معبود بنالئے ہیں۔ کہہ دو کہ (اس بات پر) اپنی دلیل پیش کرو۔ یہ (میری اور) میرے ساتھ والوں کی کتاب بھی ہے اور جو مجھ سے پہلے (پیغمبر) ہوئے ہیں۔ ان کی کتابیں بھی ہیں۔ بلکہ (بات یہ ہے کہ) ان اکثر حق بات کو نہیں جانتے اور اس لئے اس سے منہ پھیر لیتے ہیں",
    },
    words: [
      { id: '21:24:1', arabic: "أَمِ", transliteration: "ami", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '21:24:2', arabic: "ٱتَّخَذُوا۟", transliteration: "ittakhadhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(have) they taken", ur: "(have) وہ لوگ taken" } },
      { id: '21:24:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Him", ur: "besides Him" } },
      { id: '21:24:4', arabic: "دُونِهِۦٓ", transliteration: "dūnihi", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Him", ur: "besides Him" } },
      { id: '21:24:5', arabic: "ءَالِهَةًۭ ۖ", transliteration: "ālihatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gods", ur: "gods" } },
      { id: '21:24:6', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '21:24:7', arabic: "هَاتُوا۟", transliteration: "hātū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Bring", ur: "Bring" } },
      { id: '21:24:8', arabic: "بُرْهَـٰنَكُمْ ۖ", transliteration: "bur'hānakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your proof", ur: "your proof" } },
      { id: '21:24:9', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '21:24:10', arabic: "ذِكْرُ", transliteration: "dhik'ru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a Reminder", ur: "(is) a Reminder" } },
      { id: '21:24:11', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(for those) who", ur: "(for those) جو" } },
      { id: '21:24:12', arabic: "مَّعِىَ", transliteration: "maʿiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) with me", ur: "(are) ساتھ me" } },
      { id: '21:24:13', arabic: "وَذِكْرُ", transliteration: "wadhik'ru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a Reminder", ur: "اور a Reminder" } },
      { id: '21:24:14', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(for those) who", ur: "(for those) جو" } },
      { id: '21:24:15', arabic: "قَبْلِى ۗ", transliteration: "qablī", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "(were) before me", ur: "(were) پہلے me" } },
      { id: '21:24:16', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '21:24:17', arabic: "أَكْثَرُهُمْ", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '21:24:18', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '21:24:19', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } },
      { id: '21:24:20', arabic: "ٱلْحَقَّ ۖ", transliteration: "l-ḥaqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '21:24:21', arabic: "فَهُم", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so they", ur: "so وہ لوگ" } },
      { id: '21:24:22', arabic: "مُّعْرِضُونَ", transliteration: "muʿ'riḍūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) averse", ur: "(are) averse" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'نفی + فعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  25: {
    text: "وَمَآ أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِىٓ إِلَيْهِ أَنَّهُۥ لَآ إِلَـٰهَ إِلَّآ أَنَا۠ فَٱعْبُدُونِ",
    translation: {
      en: "",
      ur: "اور جو پیغمبر ہم نےتم سے پہلے بھیجے ان کی طرف یہی وحی بھیجی کہ میرے سوا کوئی معبود نہیں تو میری ہی عبادت کرو",
    },
    words: [
      { id: '21:25:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '21:25:2', arabic: "أَرْسَلْنَا", transliteration: "arsalnā", pos: ['V'], posLabel: 'V', root: "ر س ل", meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '21:25:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '21:25:4', arabic: "قَبْلِكَ", transliteration: "qablika", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '21:25:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '21:25:6', arabic: "رَّسُولٍ", transliteration: "rasūlin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messenger", ur: "رسول" } },
      { id: '21:25:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '21:25:8', arabic: "نُوحِىٓ", transliteration: "nūḥī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We reveal(ed)", ur: "ہم reveal(ed)" } },
      { id: '21:25:9', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '21:25:10', arabic: "أَنَّهُۥ", transliteration: "annahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that [He]", ur: "وہ [وہ]" } },
      { id: '21:25:11', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(There is) no", ur: "(There is) نہیں" } },
      { id: '21:25:12', arabic: "إِلَـٰهَ", transliteration: "ilāha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '21:25:13', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '21:25:14', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Me", ur: "Me" } },
      { id: '21:25:15', arabic: "فَٱعْبُدُونِ", transliteration: "fa-uʿ'budūni", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "د و ن", meaning: { en: "so worship Me", ur: "so عبادت Me" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  26: {
    text: "وَقَالُوا۟ ٱتَّخَذَ ٱلرَّحْمَـٰنُ وَلَدًۭا ۗ سُبْحَـٰنَهُۥ ۚ بَلْ عِبَادٌۭ مُّكْرَمُونَ",
    translation: {
      en: "",
      ur: "اور کہتے ہیں کہ خدا بیٹا رکھتا ہے۔ وہ پاک ہے (اس کے نہ بیٹا ہے نہ بیٹی) بلکہ (جن کو یہ لوگ اس کے بیٹے بیٹیاں سمجھتے ہیں) وہ اس کے عزت والے بندے ہیں",
    },
    words: [
      { id: '21:26:1', arabic: "وَقَالُوا۟", transliteration: "waqālū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '21:26:2', arabic: "ٱتَّخَذَ", transliteration: "ittakhadha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Has taken", ur: "Has taken" } },
      { id: '21:26:3', arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '21:26:4', arabic: "وَلَدًۭا ۗ", transliteration: "waladan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a son", ur: "a بیٹا" } },
      { id: '21:26:5', arabic: "سُبْحَـٰنَهُۥ ۚ", transliteration: "sub'ḥānahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Glorified is He", ur: "Glorified is وہ" } },
      { id: '21:26:6', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '21:26:7', arabic: "عِبَادٌۭ", transliteration: "ʿibādun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(they are) slaves", ur: "(وہ لوگ are) slaves" } },
      { id: '21:26:8', arabic: "مُّكْرَمُونَ", transliteration: "muk'ramūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "honored", ur: "honored" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
  },
  27: {
    text: "لَا يَسْبِقُونَهُۥ بِٱلْقَوْلِ وَهُم بِأَمْرِهِۦ يَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اس کے آگے بڑھ کر بول نہیں سکتے۔ اور اس کے حکم پر عمل کرتے ہیں",
    },
    words: [
      { id: '21:27:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '21:27:2', arabic: "يَسْبِقُونَهُۥ", transliteration: "yasbiqūnahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (can) precede Him", ur: "وہ لوگ (can) precede Him" } },
      { id: '21:27:3', arabic: "بِٱلْقَوْلِ", transliteration: "bil-qawli", pos: ['P+N'], posLabel: 'P+N', root: "ق و ل", meaning: { en: "in word", ur: "میں word" } },
      { id: '21:27:4', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '21:27:5', arabic: "بِأَمْرِهِۦ", transliteration: "bi-amrihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by His command", ur: "by His command" } },
      { id: '21:27:6', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "act", ur: "act" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' }
      ],
    },
  },
  28: {
    text: "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يَشْفَعُونَ إِلَّا لِمَنِ ٱرْتَضَىٰ وَهُم مِّنْ خَشْيَتِهِۦ مُشْفِقُونَ",
    translation: {
      en: "",
      ur: "جو کچھ ان کے آگے ہوچکا ہے اور پیچھے ہوگا وہ سب سے واقف ہے اور وہ (اس کے پاس کسی کی) سفارش نہیں کرسکتے مگر اس شخص کی جس سے خدا خوش ہو اور وہ اس کی ہیبت سے ڈرتے رہتے ہیں",
    },
    words: [
      { id: '21:28:1', arabic: "يَعْلَمُ", transliteration: "yaʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "He knows", ur: "وہ knows" } },
      { id: '21:28:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:28:3', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) before them", ur: "(is) پہلے them" } },
      { id: '21:28:4', arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) before them", ur: "(is) پہلے them" } },
      { id: '21:28:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '21:28:6', arabic: "خَلْفَهُمْ", transliteration: "khalfahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) behind them", ur: "(is) behind them" } },
      { id: '21:28:7', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '21:28:8', arabic: "يَشْفَعُونَ", transliteration: "yashfaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (can) intercede", ur: "وہ لوگ (can) intercede" } },
      { id: '21:28:9', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '21:28:10', arabic: "لِمَنِ", transliteration: "limani", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for whom", ur: "for whom" } },
      { id: '21:28:11', arabic: "ٱرْتَضَىٰ", transliteration: "ir'taḍā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He approves", ur: "وہ approves" } },
      { id: '21:28:12', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they", ur: "اور وہ لوگ" } },
      { id: '21:28:13', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:28:14', arabic: "خَشْيَتِهِۦ", transliteration: "khashyatihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fear of Him", ur: "ڈرنا of Him" } },
      { id: '21:28:15', arabic: "مُشْفِقُونَ", transliteration: "mush'fiqūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "stand in awe", ur: "stand میں awe" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  29: {
    text: "۞ وَمَن يَقُلْ مِنْهُمْ إِنِّىٓ إِلَـٰهٌۭ مِّن دُونِهِۦ فَذَٰلِكَ نَجْزِيهِ جَهَنَّمَ ۚ كَذَٰلِكَ نَجْزِى ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور جو شخص ان میں سے یہ کہے کہ خدا کے سوا میں معبود ہوں تو اسے ہم دوزخ کی سزا دیں گے اور ظالموں کو ہم ایسی ہی سزا دیا کرتے ہیں",
    },
    words: [
      { id: '21:29:1', arabic: "۞ وَمَن", transliteration: "waman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '21:29:2', arabic: "يَقُلْ", transliteration: "yaqul", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "says", ur: "کہتا ہے" } },
      { id: '21:29:3', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '21:29:4', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '21:29:5', arabic: "إِلَـٰهٌۭ", transliteration: "ilāhun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a god", ur: "a اللہ" } },
      { id: '21:29:6', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Him", ur: "besides Him" } },
      { id: '21:29:7', arabic: "دُونِهِۦ", transliteration: "dūnihi", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Him", ur: "besides Him" } },
      { id: '21:29:8', arabic: "فَذَٰلِكَ", transliteration: "fadhālika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then that", ur: "پھر وہ" } },
      { id: '21:29:9', arabic: "نَجْزِيهِ", transliteration: "najzīhi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will recompense", ur: "ہم will recompense" } },
      { id: '21:29:10', arabic: "جَهَنَّمَ ۚ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) Hell", ur: "(ساتھ) جہنم" } },
      { id: '21:29:11', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '21:29:12', arabic: "نَجْزِى", transliteration: "najzī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We recompense", ur: "ہم recompense" } },
      { id: '21:29:13', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  30: {
    text: "أَوَلَمْ يَرَ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ كَانَتَا رَتْقًۭا فَفَتَقْنَـٰهُمَا ۖ وَجَعَلْنَا مِنَ ٱلْمَآءِ كُلَّ شَىْءٍ حَىٍّ ۖ أَفَلَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "کیا کافروں نے نہیں دیکھا کہ آسمان اور زمین دونوں ملے ہوئے تھے تو ہم نے جدا جدا کردیا۔ اور تمام جاندار چیزیں ہم نے پانی سے بنائیں۔ پھر یہ لوگ ایمان کیوں نہیں لاتے؟",
    },
    words: [
      { id: '21:30:1', arabic: "أَوَلَمْ", transliteration: "awalam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '21:30:2', arabic: "يَرَ", transliteration: "yara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "see", ur: "دیکھنا" } },
      { id: '21:30:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '21:30:4', arabic: "كَفَرُوٓا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '21:30:5', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '21:30:6', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '21:30:7', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '21:30:8', arabic: "كَانَتَا", transliteration: "kānatā", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '21:30:9', arabic: "رَتْقًۭا", transliteration: "ratqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a joined entity", ur: "a joined entity" } },
      { id: '21:30:10', arabic: "فَفَتَقْنَـٰهُمَا ۖ", transliteration: "fafataqnāhumā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then We parted them", ur: "پھر ہم parted them" } },
      { id: '21:30:11', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and We made", ur: "اور ہم made" } },
      { id: '21:30:12', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:30:13', arabic: "ٱلْمَآءِ", transliteration: "l-māi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] water", ur: "[the] پانی" } },
      { id: '21:30:14', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '21:30:15', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "living thing", ur: "living thing" } },
      { id: '21:30:16', arabic: "حَىٍّ ۖ", transliteration: "ḥayyin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "living thing", ur: "living thing" } },
      { id: '21:30:17', arabic: "أَفَلَا", transliteration: "afalā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then will not", ur: "پھر will نہیں" } },
      { id: '21:30:18', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "they believe", ur: "وہ لوگ ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  31: {
    text: "وَجَعَلْنَا فِى ٱلْأَرْضِ رَوَٰسِىَ أَن تَمِيدَ بِهِمْ وَجَعَلْنَا فِيهَا فِجَاجًۭا سُبُلًۭا لَّعَلَّهُمْ يَهْتَدُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے زمین میں پہاڑ بنائے تاکہ لوگوں (کے بوجھ) سے ہلنے (اور جھکنے) نہ لگے اور اس میں کشادہ راستے بنائے تاکہ لوگ ان پر چلیں",
    },
    words: [
      { id: '21:31:1', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "And We (have) placed", ur: "اور ہم (have) placed" } },
      { id: '21:31:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:31:3', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '21:31:4', arabic: "رَوَٰسِىَ", transliteration: "rawāsiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "firmly set mountains", ur: "firmly set mountains" } },
      { id: '21:31:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lest", ur: "lest" } },
      { id: '21:31:6', arabic: "تَمِيدَ", transliteration: "tamīda", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it (should) shake", ur: "it (should) shake" } },
      { id: '21:31:7', arabic: "بِهِمْ", transliteration: "bihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '21:31:8', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and We made", ur: "اور ہم made" } },
      { id: '21:31:9', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '21:31:10', arabic: "فِجَاجًۭا", transliteration: "fijājan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "broad passes", ur: "broad passes" } },
      { id: '21:31:11', arabic: "سُبُلًۭا", transliteration: "subulan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) ways", ur: "(as) ways" } },
      { id: '21:31:12', arabic: "لَّعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '21:31:13', arabic: "يَهْتَدُونَ", transliteration: "yahtadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(be) guided", ur: "(be) guided" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  32: {
    text: "وَجَعَلْنَا ٱلسَّمَآءَ سَقْفًۭا مَّحْفُوظًۭا ۖ وَهُمْ عَنْ ءَايَـٰتِهَا مُعْرِضُونَ",
    translation: {
      en: "",
      ur: "اور آسمان کو محفوظ چھت بنایا۔ اس پر بھی وہ ہماری نشانیوں سے منہ پھیر رہے ہیں",
    },
    words: [
      { id: '21:32:1', arabic: "وَجَعَلْنَا", transliteration: "wajaʿalnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "And We made", ur: "اور ہم made" } },
      { id: '21:32:2', arabic: "ٱلسَّمَآءَ", transliteration: "l-samāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '21:32:3', arabic: "سَقْفًۭا", transliteration: "saqfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a roof", ur: "a roof" } },
      { id: '21:32:4', arabic: "مَّحْفُوظًۭا ۖ", transliteration: "maḥfūẓan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "protected", ur: "protected" } },
      { id: '21:32:5', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But they", ur: "لیکن وہ لوگ" } },
      { id: '21:32:6', arabic: "عَنْ", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:32:7', arabic: "ءَايَـٰتِهَا", transliteration: "āyātihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its Signs", ur: "its نشانیاں" } },
      { id: '21:32:8', arabic: "مُعْرِضُونَ", transliteration: "muʿ'riḍūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "turn away", ur: "turn away" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  33: {
    text: "وَهُوَ ٱلَّذِى خَلَقَ ٱلَّيْلَ وَٱلنَّهَارَ وَٱلشَّمْسَ وَٱلْقَمَرَ ۖ كُلٌّۭ فِى فَلَكٍۢ يَسْبَحُونَ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے رات اور دن اور سورج اور چاند کو بنایا۔ (یہ) سب (یعنی سورج اور چاند اور ستارے) آسمان میں (اس طرح چلتے ہیں گویا) تیر رہے ہیں",
    },
    words: [
      { id: '21:33:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '21:33:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '21:33:3', arabic: "خَلَقَ", transliteration: "khalaqa", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "created", ur: "پیدا کیا" } },
      { id: '21:33:4', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '21:33:5', arabic: "وَٱلنَّهَارَ", transliteration: "wal-nahāra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the day", ur: "اور the دن" } },
      { id: '21:33:6', arabic: "وَٱلشَّمْسَ", transliteration: "wal-shamsa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sun", ur: "اور the sun" } },
      { id: '21:33:7', arabic: "وَٱلْقَمَرَ ۖ", transliteration: "wal-qamara", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the moon", ur: "اور the moon" } },
      { id: '21:33:8', arabic: "كُلٌّۭ", transliteration: "kullun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "each", ur: "ہر" } },
      { id: '21:33:9', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:33:10', arabic: "فَلَكٍۢ", transliteration: "falakin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "an orbit", ur: "an orbit" } },
      { id: '21:33:11', arabic: "يَسْبَحُونَ", transliteration: "yasbaḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "floating", ur: "floating" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  34: {
    text: "وَمَا جَعَلْنَا لِبَشَرٍۢ مِّن قَبْلِكَ ٱلْخُلْدَ ۖ أَفَإِي۟ن مِّتَّ فَهُمُ ٱلْخَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "اور (اے پیغمبر) ہم نے تم سے پہلے کسی آدمی کو بقائے دوام نہیں بخشا۔ بھلا اگر تم مرجاؤ تو کیا یہ لوگ ہمیشہ رہیں گے",
    },
    words: [
      { id: '21:34:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '21:34:2', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We made", ur: "ہم made" } },
      { id: '21:34:3', arabic: "لِبَشَرٍۢ", transliteration: "libasharin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for any man", ur: "for any man" } },
      { id: '21:34:4', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '21:34:5', arabic: "قَبْلِكَ", transliteration: "qablika", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '21:34:6', arabic: "ٱلْخُلْدَ ۖ", transliteration: "l-khul'da", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] immortality", ur: "[the] immortality" } },
      { id: '21:34:7', arabic: "أَفَإِي۟ن", transliteration: "afa-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so if", ur: "so if" } },
      { id: '21:34:8', arabic: "مِّتَّ", transliteration: "mitta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you die", ur: "تم die" } },
      { id: '21:34:9', arabic: "فَهُمُ", transliteration: "fahumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (would) they", ur: "پھر (would) وہ لوگ" } },
      { id: '21:34:10', arabic: "ٱلْخَـٰلِدُونَ", transliteration: "l-khālidūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "live forever", ur: "live forever" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  35: {
    text: "كُلُّ نَفْسٍۢ ذَآئِقَةُ ٱلْمَوْتِ ۗ وَنَبْلُوكُم بِٱلشَّرِّ وَٱلْخَيْرِ فِتْنَةًۭ ۖ وَإِلَيْنَا تُرْجَعُونَ",
    translation: {
      en: "",
      ur: "ہر متنفس کو موت کا مزا چکھنا ہے۔ اور ہم تو لوگوں کو سختی اور آسودگی میں آزمائش کے طور پر مبتلا کرتے ہیں۔ اور تم ہماری طرف ہی لوٹ کر آؤ گے",
    },
    words: [
      { id: '21:35:1', arabic: "كُلُّ", transliteration: "kullu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Every", ur: "ہر" } },
      { id: '21:35:2', arabic: "نَفْسٍۢ", transliteration: "nafsin", pos: ['V'], posLabel: 'V', root: "ن ف س", meaning: { en: "soul", ur: "روح" } },
      { id: '21:35:3', arabic: "ذَآئِقَةُ", transliteration: "dhāiqatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) taste", ur: "(will) taste" } },
      { id: '21:35:4', arabic: "ٱلْمَوْتِ ۗ", transliteration: "l-mawti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] death", ur: "[the] موت" } },
      { id: '21:35:5', arabic: "وَنَبْلُوكُم", transliteration: "wanablūkum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We test you", ur: "اور ہم test تم" } },
      { id: '21:35:6', arabic: "بِٱلشَّرِّ", transliteration: "bil-shari", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with [the] bad", ur: "ساتھ [the] bad" } },
      { id: '21:35:7', arabic: "وَٱلْخَيْرِ", transliteration: "wal-khayri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and [the] good", ur: "اور [the] اچھا" } },
      { id: '21:35:8', arabic: "فِتْنَةًۭ ۖ", transliteration: "fit'natan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a trial", ur: "(as) a trial" } },
      { id: '21:35:9', arabic: "وَإِلَيْنَا", transliteration: "wa-ilaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to Us", ur: "اور کو Us" } },
      { id: '21:35:10', arabic: "تُرْجَعُونَ", transliteration: "tur'jaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will be returned", ur: "تم will be returned" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  36: {
    text: "وَإِذَا رَءَاكَ ٱلَّذِينَ كَفَرُوٓا۟ إِن يَتَّخِذُونَكَ إِلَّا هُزُوًا أَهَـٰذَا ٱلَّذِى يَذْكُرُ ءَالِهَتَكُمْ وَهُم بِذِكْرِ ٱلرَّحْمَـٰنِ هُمْ كَـٰفِرُونَ",
    translation: {
      en: "",
      ur: "اور جب کافر تم کو دیکھتے ہیں تو تم سے استہزاء کرتے ہیں کہ کیا یہی شخص ہے جو تمہارے معبودوں کا ذکر (برائی سے) کیا کرتا ہے حالانکہ وہ خود رحمٰن کے نام سے منکر ہیں",
    },
    words: [
      { id: '21:36:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '21:36:2', arabic: "رَءَاكَ", transliteration: "raāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see you", ur: "وہ لوگ دیکھنا تم" } },
      { id: '21:36:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '21:36:4', arabic: "كَفَرُوٓا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '21:36:5', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '21:36:6', arabic: "يَتَّخِذُونَكَ", transliteration: "yattakhidhūnaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they take you", ur: "وہ لوگ take تم" } },
      { id: '21:36:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '21:36:8', arabic: "هُزُوًا", transliteration: "huzuwan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) ridicule", ur: "(میں) ridicule" } },
      { id: '21:36:9', arabic: "أَهَـٰذَا", transliteration: "ahādhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is this", ur: "Is this" } },
      { id: '21:36:10', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the one who", ur: "the one جو" } },
      { id: '21:36:11', arabic: "يَذْكُرُ", transliteration: "yadhkuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "mentions", ur: "mentions" } },
      { id: '21:36:12', arabic: "ءَالِهَتَكُمْ", transliteration: "ālihatakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your gods", ur: "your gods" } },
      { id: '21:36:13', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they", ur: "اور وہ لوگ" } },
      { id: '21:36:14', arabic: "بِذِكْرِ", transliteration: "bidhik'ri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "at (the) mention", ur: "at (the) mention" } },
      { id: '21:36:15', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(of) the Most Gracious", ur: "(of) the بڑا مہربان" } },
      { id: '21:36:16', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[they]", ur: "[وہ لوگ]" } },
      { id: '21:36:17', arabic: "كَـٰفِرُونَ", transliteration: "kāfirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) disbelievers", ur: "(are) کافر" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  37: {
    text: "خُلِقَ ٱلْإِنسَـٰنُ مِنْ عَجَلٍۢ ۚ سَأُو۟رِيكُمْ ءَايَـٰتِى فَلَا تَسْتَعْجِلُونِ",
    translation: {
      en: "",
      ur: "انسان (کچھ ایسا جلد باز ہے کہ گویا) جلد بازی ہی سے بنایا گیا ہے۔ میں تم لوگوں کو عنقریب اپنی نشانیاں دکھاؤں گا تو تم جلدی نہ کرو",
    },
    words: [
      { id: '21:37:1', arabic: "خُلِقَ", transliteration: "khuliqa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is created", ur: "Is پیدا کیا" } },
      { id: '21:37:2', arabic: "ٱلْإِنسَـٰنُ", transliteration: "l-insānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the man", ur: "the man" } },
      { id: '21:37:3', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:37:4', arabic: "عَجَلٍۢ ۚ", transliteration: "ʿajalin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "haste", ur: "haste" } },
      { id: '21:37:5', arabic: "سَأُو۟رِيكُمْ", transliteration: "sa-urīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will show you", ur: "میں will show تم" } },
      { id: '21:37:6', arabic: "ءَايَـٰتِى", transliteration: "āyātī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Signs", ur: "My نشانیاں" } },
      { id: '21:37:7', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so (do) not", ur: "so (do) نہیں" } },
      { id: '21:37:8', arabic: "تَسْتَعْجِلُونِ", transliteration: "tastaʿjilūni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "ask Me to hasten", ur: "ask Me کو hasten" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  38: {
    text: "وَيَقُولُونَ مَتَىٰ هَـٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَـٰدِقِينَ",
    translation: {
      en: "",
      ur: "اور کہتے ہیں کہ اگر تم سچے ہو تو (جس عذاب کا) یہ وعید (ہے وہ) کب (آئے گا)؟",
    },
    words: [
      { id: '21:38:1', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '21:38:2', arabic: "مَتَىٰ", transliteration: "matā", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "When (will be fulfilled)", ur: "When (will be fulfilled)" } },
      { id: '21:38:3', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '21:38:4', arabic: "ٱلْوَعْدُ", transliteration: "l-waʿdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "promise", ur: "promise" } },
      { id: '21:38:5', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '21:38:6', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '21:38:7', arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "truthful", ur: "truthful" } }
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
  39: {
    text: "لَوْ يَعْلَمُ ٱلَّذِينَ كَفَرُوا۟ حِينَ لَا يَكُفُّونَ عَن وُجُوهِهِمُ ٱلنَّارَ وَلَا عَن ظُهُورِهِمْ وَلَا هُمْ يُنصَرُونَ",
    translation: {
      en: "",
      ur: "اے کاش کافر اس وقت کو جانیں جب وہ اپنے مونہوں پر سے (دوزخ کی) آگ کو روک نہ سکیں گے اور نہ اپنی پیٹھوں پر سے اور نہ ان کا کوئی مددگار ہوگا",
    },
    words: [
      { id: '21:39:1', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '21:39:2', arabic: "يَعْلَمُ", transliteration: "yaʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "knew", ur: "knew" } },
      { id: '21:39:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '21:39:4', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '21:39:5', arabic: "حِينَ", transliteration: "ḥīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) time", ur: "(the) وقت" } },
      { id: '21:39:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(when) not", ur: "(when) نہیں" } },
      { id: '21:39:7', arabic: "يَكُفُّونَ", transliteration: "yakuffūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will avert", ur: "وہ لوگ will avert" } },
      { id: '21:39:8', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:39:9', arabic: "وُجُوهِهِمُ", transliteration: "wujūhihimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their faces", ur: "their faces" } },
      { id: '21:39:10', arabic: "ٱلنَّارَ", transliteration: "l-nāra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Fire", ur: "the آگ" } },
      { id: '21:39:11', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '21:39:12', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:39:13', arabic: "ظُهُورِهِمْ", transliteration: "ẓuhūrihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their backs", ur: "their backs" } },
      { id: '21:39:14', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '21:39:15', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '21:39:16', arabic: "يُنصَرُونَ", transliteration: "yunṣarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be helped", ur: "will be helped" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  40: {
    text: "بَلْ تَأْتِيهِم بَغْتَةًۭ فَتَبْهَتُهُمْ فَلَا يَسْتَطِيعُونَ رَدَّهَا وَلَا هُمْ يُنظَرُونَ",
    translation: {
      en: "",
      ur: "بلکہ قیامت ان پر ناگہاں آ واقع ہوگی۔ اور ان کے ہوش کھو دے گی۔ پھر نہ تو وہ اس کو ہٹا سکیں گے اور نہ ان کو مہلت دی جائے گی",
    },
    words: [
      { id: '21:40:1', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '21:40:2', arabic: "تَأْتِيهِم", transliteration: "tatīhim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it will come to them", ur: "it will come کو them" } },
      { id: '21:40:3', arabic: "بَغْتَةًۭ", transliteration: "baghtatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "unexpectedly", ur: "unexpectedly" } },
      { id: '21:40:4', arabic: "فَتَبْهَتُهُمْ", transliteration: "fatabhatuhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and bewilder them", ur: "اور bewilder them" } },
      { id: '21:40:5', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '21:40:6', arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be able", ur: "وہ لوگ will be able" } },
      { id: '21:40:7', arabic: "رَدَّهَا", transliteration: "raddahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to repel it", ur: "کو repel it" } },
      { id: '21:40:8', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '21:40:9', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '21:40:10', arabic: "يُنظَرُونَ", transliteration: "yunẓarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be given respite", ur: "will be given respite" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  41: {
    text: "وَلَقَدِ ٱسْتُهْزِئَ بِرُسُلٍۢ مِّن قَبْلِكَ فَحَاقَ بِٱلَّذِينَ سَخِرُوا۟ مِنْهُم مَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ",
    translation: {
      en: "",
      ur: "اور تم سے پہلے بھی پیغمبروں کے ساتھ استہزاء ہوتا رہا ہے تو جو لوگ ان میں سے تمسخر کیا کرتے تھے ان کو اسی (عذاب) نے جس کی ہنسی اُڑاتے تھے آگھیرا",
    },
    words: [
      { id: '21:41:1', arabic: "وَلَقَدِ", transliteration: "walaqadi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '21:41:2', arabic: "ٱسْتُهْزِئَ", transliteration: "us'tuh'zi-a", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "were mocked", ur: "were mocked" } },
      { id: '21:41:3', arabic: "بِرُسُلٍۢ", transliteration: "birusulin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Messengers", ur: "Messengers" } },
      { id: '21:41:4', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '21:41:5', arabic: "قَبْلِكَ", transliteration: "qablika", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '21:41:6', arabic: "فَحَاقَ", transliteration: "faḥāqa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then surrounded", ur: "پھر surrounded" } },
      { id: '21:41:7', arabic: "بِٱلَّذِينَ", transliteration: "bi-alladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '21:41:8', arabic: "سَخِرُوا۟", transliteration: "sakhirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "mocked", ur: "mocked" } },
      { id: '21:41:9', arabic: "مِنْهُم", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '21:41:10', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:41:11', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they used", ur: "وہ لوگ used" } },
      { id: '21:41:12', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "at it", ur: "at it" } },
      { id: '21:41:13', arabic: "يَسْتَهْزِءُونَ", transliteration: "yastahziūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) mock", ur: "(کو) mock" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  42: {
    text: "قُلْ مَن يَكْلَؤُكُم بِٱلَّيْلِ وَٱلنَّهَارِ مِنَ ٱلرَّحْمَـٰنِ ۗ بَلْ هُمْ عَن ذِكْرِ رَبِّهِم مُّعْرِضُونَ",
    translation: {
      en: "",
      ur: "کہو کہ رات اور دن میں خدا سے تمہاری کون حفاظت کرسکتا ہے؟ بات یہ ہے کہ اپنے پروردگار کی یاد سے منہ پھیرے ہوئے ہیں",
    },
    words: [
      { id: '21:42:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '21:42:2', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Who", ur: "جو" } },
      { id: '21:42:3', arabic: "يَكْلَؤُكُم", transliteration: "yakla-ukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(can) protect you", ur: "(can) protect تم" } },
      { id: '21:42:4', arabic: "بِٱلَّيْلِ", transliteration: "bi-al-layli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in the night", ur: "میں the رات" } },
      { id: '21:42:5', arabic: "وَٱلنَّهَارِ", transliteration: "wal-nahāri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the day", ur: "اور the دن" } },
      { id: '21:42:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:42:7', arabic: "ٱلرَّحْمَـٰنِ ۗ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '21:42:8', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Yet", ur: "Yet" } },
      { id: '21:42:9', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '21:42:10', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:42:11', arabic: "ذِكْرِ", transliteration: "dhik'ri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) remembrance", ur: "(the) remembrance" } },
      { id: '21:42:12', arabic: "رَبِّهِم", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their Lord", ur: "(of) their رب" } },
      { id: '21:42:13', arabic: "مُّعْرِضُونَ", transliteration: "muʿ'riḍūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "turn away", ur: "turn away" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  43: {
    text: "أَمْ لَهُمْ ءَالِهَةٌۭ تَمْنَعُهُم مِّن دُونِنَا ۚ لَا يَسْتَطِيعُونَ نَصْرَ أَنفُسِهِمْ وَلَا هُم مِّنَّا يُصْحَبُونَ",
    translation: {
      en: "",
      ur: "کیا ہمارے سوا ان کے اور معبود ہیں کہ ان کو (مصائب سے) بچاسکیں۔ وہ آپ اپنی مدد تو کر ہی نہیں سکتے اور نہ ہم سے پناہ ہی دیئے جائیں گے",
    },
    words: [
      { id: '21:43:1', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Or", ur: "یا" } },
      { id: '21:43:2', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "have they", ur: "have وہ لوگ" } },
      { id: '21:43:3', arabic: "ءَالِهَةٌۭ", transliteration: "ālihatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gods", ur: "gods" } },
      { id: '21:43:4', arabic: "تَمْنَعُهُم", transliteration: "tamnaʿuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) defend them", ur: "(کو) defend them" } },
      { id: '21:43:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:43:6', arabic: "دُونِنَا ۚ", transliteration: "dūninā", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "Us", ur: "Us" } },
      { id: '21:43:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '21:43:8', arabic: "يَسْتَطِيعُونَ", transliteration: "yastaṭīʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are able", ur: "وہ لوگ are able" } },
      { id: '21:43:9', arabic: "نَصْرَ", transliteration: "naṣra", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) help", ur: "(کو) help" } },
      { id: '21:43:10', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '21:43:11', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '21:43:12', arabic: "هُم", transliteration: "hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '21:43:13', arabic: "مِّنَّا", transliteration: "minnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Us", ur: "سے Us" } },
      { id: '21:43:14', arabic: "يُصْحَبُونَ", transliteration: "yuṣ'ḥabūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "can be protected", ur: "can be protected" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  44: {
    text: "بَلْ مَتَّعْنَا هَـٰٓؤُلَآءِ وَءَابَآءَهُمْ حَتَّىٰ طَالَ عَلَيْهِمُ ٱلْعُمُرُ ۗ أَفَلَا يَرَوْنَ أَنَّا نَأْتِى ٱلْأَرْضَ نَنقُصُهَا مِنْ أَطْرَافِهَآ ۚ أَفَهُمُ ٱلْغَـٰلِبُونَ",
    translation: {
      en: "",
      ur: "بلکہ ہم ان لوگوں کو اور ان کے باپ دادا کو متمتع کرتے رہے یہاں تک کہ (اسی حالت میں) ان کی عمریں بسر ہوگئیں۔ کیا یہ نہیں دیکھتے کہ ہم زمین کو اس کے کناروں سے گھٹاتے چلے آتے ہیں۔ تو کیا یہ لوگ غلبہ پانے والے ہیں؟",
    },
    words: [
      { id: '21:44:1', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '21:44:2', arabic: "مَتَّعْنَا", transliteration: "mattaʿnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave provision", ur: "ہم gave provision" } },
      { id: '21:44:3', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) these", ur: "(کو) these" } },
      { id: '21:44:4', arabic: "وَءَابَآءَهُمْ", transliteration: "waābāahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their fathers", ur: "اور their fathers" } },
      { id: '21:44:5', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '21:44:6', arabic: "طَالَ", transliteration: "ṭāla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "grew long", ur: "grew long" } },
      { id: '21:44:7', arabic: "عَلَيْهِمُ", transliteration: "ʿalayhimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '21:44:8', arabic: "ٱلْعُمُرُ ۗ", transliteration: "l-ʿumuru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the life", ur: "the زندگی" } },
      { id: '21:44:9', arabic: "أَفَلَا", transliteration: "afalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then do not", ur: "پھر do نہیں" } },
      { id: '21:44:10', arabic: "يَرَوْنَ", transliteration: "yarawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '21:44:11', arabic: "أَنَّا", transliteration: "annā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that We", ur: "وہ ہم" } },
      { id: '21:44:12', arabic: "نَأْتِى", transliteration: "natī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We come", ur: "ہم come" } },
      { id: '21:44:13', arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the land", ur: "(کو) the land" } },
      { id: '21:44:14', arabic: "نَنقُصُهَا", transliteration: "nanquṣuhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We reduce it", ur: "ہم reduce it" } },
      { id: '21:44:15', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:44:16', arabic: "أَطْرَافِهَآ ۚ", transliteration: "aṭrāfihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its borders", ur: "its borders" } },
      { id: '21:44:17', arabic: "أَفَهُمُ", transliteration: "afahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "So is (it) they", ur: "So is (it) وہ لوگ" } },
      { id: '21:44:18', arabic: "ٱلْغَـٰلِبُونَ", transliteration: "l-ghālibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(who will be) overcoming", ur: "(جو will be) overcoming" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' }
      ],
    },
  },
  45: {
    text: "قُلْ إِنَّمَآ أُنذِرُكُم بِٱلْوَحْىِ ۚ وَلَا يَسْمَعُ ٱلصُّمُّ ٱلدُّعَآءَ إِذَا مَا يُنذَرُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ میں تم کو حکم خدا کے مطابق نصیحت کرتا ہوں۔ اور بہروں کوجب نصیحت کی جائے تو وہ پکار کر سنتے ہی نہیں",
    },
    words: [
      { id: '21:45:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '21:45:2', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '21:45:3', arabic: "أُنذِرُكُم", transliteration: "undhirukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I warn you", ur: "میں warn تم" } },
      { id: '21:45:4', arabic: "بِٱلْوَحْىِ ۚ", transliteration: "bil-waḥyi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by the revelation", ur: "by the revelation" } },
      { id: '21:45:5', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But not", ur: "لیکن نہیں" } },
      { id: '21:45:6', arabic: "يَسْمَعُ", transliteration: "yasmaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hear", ur: "سننا" } },
      { id: '21:45:7', arabic: "ٱلصُّمُّ", transliteration: "l-ṣumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the deaf", ur: "the deaf" } },
      { id: '21:45:8', arabic: "ٱلدُّعَآءَ", transliteration: "l-duʿāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the call", ur: "the call" } },
      { id: '21:45:9', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:45:10', arabic: "مَا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:45:11', arabic: "يُنذَرُونَ", transliteration: "yundharūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are warned", ur: "وہ لوگ are warned" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  46: {
    text: "وَلَئِن مَّسَّتْهُمْ نَفْحَةٌۭ مِّنْ عَذَابِ رَبِّكَ لَيَقُولُنَّ يَـٰوَيْلَنَآ إِنَّا كُنَّا ظَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور اگر ان کو تمہارے پروردگار کا تھوڑا سا عذاب بھی پہنچے تو کہنے لگیں کہ ہائے کم بختی ہم بےشک ستمگار تھے",
    },
    words: [
      { id: '21:46:1', arabic: "وَلَئِن", transliteration: "wala-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '21:46:2', arabic: "مَّسَّتْهُمْ", transliteration: "massathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "touches them", ur: "touches them" } },
      { id: '21:46:3', arabic: "نَفْحَةٌۭ", transliteration: "nafḥatun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a whiff", ur: "a whiff" } },
      { id: '21:46:4', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:46:5', arabic: "عَذَابِ", transliteration: "ʿadhābi", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '21:46:6', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your Lord", ur: "(of) your رب" } },
      { id: '21:46:7', arabic: "لَيَقُولُنَّ", transliteration: "layaqūlunna", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "surely they will say", ur: "یقیناً وہ لوگ will کہو" } },
      { id: '21:46:8', arabic: "يَـٰوَيْلَنَآ", transliteration: "yāwaylanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O woe to us", ur: "اے woe کو us" } },
      { id: '21:46:9', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, we", ur: "بیشک, ہم" } },
      { id: '21:46:10', arabic: "كُنَّا", transliteration: "kunnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[we] were", ur: "[ہم] were" } },
      { id: '21:46:11', arabic: "ظَـٰلِمِينَ", transliteration: "ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wrongdoers", ur: "wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  47: {
    text: "وَنَضَعُ ٱلْمَوَٰزِينَ ٱلْقِسْطَ لِيَوْمِ ٱلْقِيَـٰمَةِ فَلَا تُظْلَمُ نَفْسٌۭ شَيْـًۭٔا ۖ وَإِن كَانَ مِثْقَالَ حَبَّةٍۢ مِّنْ خَرْدَلٍ أَتَيْنَا بِهَا ۗ وَكَفَىٰ بِنَا حَـٰسِبِينَ",
    translation: {
      en: "",
      ur: "اور ہم قیامت کے دن انصاف کی ترازو کھڑی کریں گے تو کسی شخص کی ذرا بھی حق تلفی نہ کی جائے گی۔ اور اگر رائی کے دانے کے برابر بھی (کسی کا عمل) ہوگا تو ہم اس کو لاحاضر کریں گے۔ اور ہم حساب کرنے کو کافی ہیں",
    },
    words: [
      { id: '21:47:1', arabic: "وَنَضَعُ", transliteration: "wanaḍaʿu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We set", ur: "اور ہم set" } },
      { id: '21:47:2', arabic: "ٱلْمَوَٰزِينَ", transliteration: "l-mawāzīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the scales", ur: "the scales" } },
      { id: '21:47:3', arabic: "ٱلْقِسْطَ", transliteration: "l-qis'ṭa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the justice", ur: "(of) the justice" } },
      { id: '21:47:4', arabic: "لِيَوْمِ", transliteration: "liyawmi", pos: ['P+N'], posLabel: 'P+N', root: "ي و م", meaning: { en: "for (the) Day", ur: "for (the) دن" } },
      { id: '21:47:5', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '21:47:6', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so not", ur: "so نہیں" } },
      { id: '21:47:7', arabic: "تُظْلَمُ", transliteration: "tuẓ'lamu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be wronged", ur: "will be wronged" } },
      { id: '21:47:8', arabic: "نَفْسٌۭ", transliteration: "nafsun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "any soul", ur: "any روح" } },
      { id: '21:47:9', arabic: "شَيْـًۭٔا ۖ", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) anything", ur: "(میں) anything" } },
      { id: '21:47:10', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '21:47:11', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(there) be", ur: "(there) be" } },
      { id: '21:47:12', arabic: "مِثْقَالَ", transliteration: "mith'qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "weight", ur: "weight" } },
      { id: '21:47:13', arabic: "حَبَّةٍۢ", transliteration: "ḥabbatin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of) a seed", ur: "(of) a seed" } },
      { id: '21:47:14', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:47:15', arabic: "خَرْدَلٍ", transliteration: "khardalin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a mustard", ur: "a mustard" } },
      { id: '21:47:16', arabic: "أَتَيْنَا", transliteration: "ataynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will bring", ur: "ہم will bring" } },
      { id: '21:47:17', arabic: "بِهَا ۗ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[with] it", ur: "[ساتھ] it" } },
      { id: '21:47:18', arabic: "وَكَفَىٰ", transliteration: "wakafā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And sufficient", ur: "اور sufficient" } },
      { id: '21:47:19', arabic: "بِنَا", transliteration: "binā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(are) We", ur: "(are) ہم" } },
      { id: '21:47:20', arabic: "حَـٰسِبِينَ", transliteration: "ḥāsibīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) Reckoners", ur: "(as) Reckoners" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  48: {
    text: "وَلَقَدْ ءَاتَيْنَا مُوسَىٰ وَهَـٰرُونَ ٱلْفُرْقَانَ وَضِيَآءًۭ وَذِكْرًۭا لِّلْمُتَّقِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے موسیٰ اور ہارون کو (ہدایت اور گمراہی میں) فرق کر دینے والی اور (سرتاپا) روشنی اور نصیحت (کی کتاب) عطا کی (یعنی) پرہیز گاروں کے لئے",
    },
    words: [
      { id: '21:48:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '21:48:2', arabic: "ءَاتَيْنَا", transliteration: "ātaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave", ur: "ہم gave" } },
      { id: '21:48:3', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['N'], posLabel: 'N', root: "م و س", meaning: { en: "Musa", ur: "Musa" } },
      { id: '21:48:4', arabic: "وَهَـٰرُونَ", transliteration: "wahārūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Harun", ur: "اور Harun" } },
      { id: '21:48:5', arabic: "ٱلْفُرْقَانَ", transliteration: "l-fur'qāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Criterion", ur: "the Criterion" } },
      { id: '21:48:6', arabic: "وَضِيَآءًۭ", transliteration: "waḍiyāan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a light", ur: "اور a light" } },
      { id: '21:48:7', arabic: "وَذِكْرًۭا", transliteration: "wadhik'ran", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a Reminder", ur: "اور a Reminder" } },
      { id: '21:48:8', arabic: "لِّلْمُتَّقِينَ", transliteration: "lil'muttaqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "for the righteous", ur: "for the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  49: {
    text: "ٱلَّذِينَ يَخْشَوْنَ رَبَّهُم بِٱلْغَيْبِ وَهُم مِّنَ ٱلسَّاعَةِ مُشْفِقُونَ",
    translation: {
      en: "",
      ur: "جو بن دیکھے اپنے پروردگار سے ڈرتے ہیں اور قیامت کا بھی خوف رکھتے ہیں",
    },
    words: [
      { id: '21:49:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '21:49:2', arabic: "يَخْشَوْنَ", transliteration: "yakhshawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fear", ur: "ڈرنا" } },
      { id: '21:49:3', arabic: "رَبَّهُم", transliteration: "rabbahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Lord", ur: "their رب" } },
      { id: '21:49:4', arabic: "بِٱلْغَيْبِ", transliteration: "bil-ghaybi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in the unseen", ur: "میں the unseen" } },
      { id: '21:49:5', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '21:49:6', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:49:7', arabic: "ٱلسَّاعَةِ", transliteration: "l-sāʿati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hour", ur: "the Hour" } },
      { id: '21:49:8', arabic: "مُشْفِقُونَ", transliteration: "mush'fiqūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) afraid", ur: "(are) afraid" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  50: {
    text: "وَهَـٰذَا ذِكْرٌۭ مُّبَارَكٌ أَنزَلْنَـٰهُ ۚ أَفَأَنتُمْ لَهُۥ مُنكِرُونَ",
    translation: {
      en: "",
      ur: "یہ مبارک نصیحت ہے جسے ہم نے نازل فرمایا ہے تو کیا تم اس سے انکار کرتے ہو؟",
    },
    words: [
      { id: '21:50:1', arabic: "وَهَـٰذَا", transliteration: "wahādhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And this", ur: "اور this" } },
      { id: '21:50:2', arabic: "ذِكْرٌۭ", transliteration: "dhik'run", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a Reminder", ur: "(is) a Reminder" } },
      { id: '21:50:3', arabic: "مُّبَارَكٌ", transliteration: "mubārakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "blessed", ur: "blessed" } },
      { id: '21:50:4', arabic: "أَنزَلْنَـٰهُ ۚ", transliteration: "anzalnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "which We (have) revealed", ur: "جو ہم (have) revealed" } },
      { id: '21:50:5', arabic: "أَفَأَنتُمْ", transliteration: "afa-antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then are you", ur: "پھر are تم" } },
      { id: '21:50:6', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '21:50:7', arabic: "مُنكِرُونَ", transliteration: "munkirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "rejecters", ur: "rejecters" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  51: {
    text: "۞ وَلَقَدْ ءَاتَيْنَآ إِبْرَٰهِيمَ رُشْدَهُۥ مِن قَبْلُ وَكُنَّا بِهِۦ عَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے ابراہیمؑ کو پہلے ہی سے ہدایت دی تھی اور ہم ان کے حال سے واقف تھے",
    },
    words: [
      { id: '21:51:1', arabic: "۞ وَلَقَدْ", transliteration: "walaqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '21:51:2', arabic: "ءَاتَيْنَآ", transliteration: "ātaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave", ur: "ہم gave" } },
      { id: '21:51:3', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } },
      { id: '21:51:4', arabic: "رُشْدَهُۥ", transliteration: "rush'dahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his guidance", ur: "his guidance" } },
      { id: '21:51:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '21:51:6', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '21:51:7', arabic: "وَكُنَّا", transliteration: "wakunnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We were", ur: "اور ہم were" } },
      { id: '21:51:8', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "about him", ur: "about him" } },
      { id: '21:51:9', arabic: "عَـٰلِمِينَ", transliteration: "ʿālimīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Well-Knowing", ur: "Well-Knowing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    text: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِۦ مَا هَـٰذِهِ ٱلتَّمَاثِيلُ ٱلَّتِىٓ أَنتُمْ لَهَا عَـٰكِفُونَ",
    translation: {
      en: "",
      ur: "جب انہوں نے اپنے باپ اور اپنی قوم کے لوگوں سے کہا یہ کیا مورتیں ہیں جن (کی پرستش) پر تم معتکف (وقائم) ہو؟",
    },
    words: [
      { id: '21:52:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '21:52:2', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '21:52:3', arabic: "لِأَبِيهِ", transliteration: "li-abīhi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to his father", ur: "کو his باپ" } },
      { id: '21:52:4', arabic: "وَقَوْمِهِۦ", transliteration: "waqawmihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "and his people", ur: "اور his لوگ" } },
      { id: '21:52:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "What", ur: "کیا" } },
      { id: '21:52:6', arabic: "هَـٰذِهِ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) these", ur: "(are) these" } },
      { id: '21:52:7', arabic: "ٱلتَّمَاثِيلُ", transliteration: "l-tamāthīlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] statues", ur: "[the] statues" } },
      { id: '21:52:8', arabic: "ٱلَّتِىٓ", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '21:52:9', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '21:52:10', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '21:52:11', arabic: "عَـٰكِفُونَ", transliteration: "ʿākifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) devoted", ur: "(are) devoted" } }
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
        { from: 10, to: 11, label: 'تعلق' }
      ],
    },
  },
  53: {
    text: "قَالُوا۟ وَجَدْنَآ ءَابَآءَنَا لَهَا عَـٰبِدِينَ",
    translation: {
      en: "",
      ur: "وہ کہنے لگے کہ ہم نے اپنے باپ دادا کو ان کی پرستش کرتے دیکھا ہے",
    },
    words: [
      { id: '21:53:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '21:53:2', arabic: "وَجَدْنَآ", transliteration: "wajadnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "We found", ur: "ہم found" } },
      { id: '21:53:3', arabic: "ءَابَآءَنَا", transliteration: "ābāanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "our forefathers", ur: "our forefathers" } },
      { id: '21:53:4', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '21:53:5', arabic: "عَـٰبِدِينَ", transliteration: "ʿābidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "worshippers", ur: "worshippers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  54: {
    text: "قَالَ لَقَدْ كُنتُمْ أَنتُمْ وَءَابَآؤُكُمْ فِى ضَلَـٰلٍۢ مُّبِينٍۢ",
    translation: {
      en: "",
      ur: "(ابراہیم نے) کہا کہ تم بھی (گمراہ ہو) اور تمہارے باپ دادا بھی صریح گمراہی میں پڑے رہے",
    },
    words: [
      { id: '21:54:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '21:54:2', arabic: "لَقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '21:54:3', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '21:54:4', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[you]", ur: "[تم]" } },
      { id: '21:54:5', arabic: "وَءَابَآؤُكُمْ", transliteration: "waābāukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your forefathers", ur: "اور your forefathers" } },
      { id: '21:54:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(were) in", ur: "(were) میں" } },
      { id: '21:54:7', arabic: "ضَلَـٰلٍۢ", transliteration: "ḍalālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an error", ur: "an error" } },
      { id: '21:54:8', arabic: "مُّبِينٍۢ", transliteration: "mubīnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  55: {
    text: "قَالُوٓا۟ أَجِئْتَنَا بِٱلْحَقِّ أَمْ أَنتَ مِنَ ٱللَّـٰعِبِينَ",
    translation: {
      en: "",
      ur: "وہ بولے کیا تم ہمارے پاس (واقعی) حق لائے ہو یا (ہم سے) کھیل (کی باتیں) کرتے ہو؟",
    },
    words: [
      { id: '21:55:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '21:55:2', arabic: "أَجِئْتَنَا", transliteration: "aji'tanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Have you come to us", ur: "Have تم come کو us" } },
      { id: '21:55:3', arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the truth", ur: "ساتھ the سچ" } },
      { id: '21:55:4', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '21:55:5', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '21:55:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of", ur: "(are) of" } },
      { id: '21:55:7', arabic: "ٱللَّـٰعِبِينَ", transliteration: "l-lāʿibīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who play", ur: "جو لوگ play" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  56: {
    text: "قَالَ بَل رَّبُّكُمْ رَبُّ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ٱلَّذِى فَطَرَهُنَّ وَأَنَا۠ عَلَىٰ ذَٰلِكُم مِّنَ ٱلشَّـٰهِدِينَ",
    translation: {
      en: "",
      ur: "(ابراہیم نے) کہا (نہیں) بلکہ تمہارا پروردگار آسمانوں اور زمین کا پروردگار ہے جس نے ان کو پیدا کیا ہے۔ اور میں اس (بات) کا گواہ (اور اسی کا قائل) ہوں",
    },
    words: [
      { id: '21:56:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '21:56:2', arabic: "بَل", transliteration: "bal", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '21:56:3', arabic: "رَّبُّكُمْ", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '21:56:4', arabic: "رَبُّ", transliteration: "rabbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) Lord", ur: "(is the) رب" } },
      { id: '21:56:5', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the heavens", ur: "(of) the آسمان" } },
      { id: '21:56:6', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '21:56:7', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '21:56:8', arabic: "فَطَرَهُنَّ", transliteration: "faṭarahunna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "created them", ur: "پیدا کیا them" } },
      { id: '21:56:9', arabic: "وَأَنَا۠", transliteration: "wa-anā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I am", ur: "اور میں am" } },
      { id: '21:56:10', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '21:56:11', arabic: "ذَٰلِكُم", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '21:56:12', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:56:13', arabic: "ٱلشَّـٰهِدِينَ", transliteration: "l-shāhidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the witnesses", ur: "the witnesses" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  57: {
    text: "وَتَٱللَّهِ لَأَكِيدَنَّ أَصْنَـٰمَكُم بَعْدَ أَن تُوَلُّوا۟ مُدْبِرِينَ",
    translation: {
      en: "",
      ur: "اور خدا کی قسم جب تم پیٹھ پھیر کر چلے جاؤ گے تو میں تمہارے بتوں سے ایک چال چلوں گا",
    },
    words: [
      { id: '21:57:1', arabic: "وَتَٱللَّهِ", transliteration: "watal-lahi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And by Allah", ur: "اور by اللہ" } },
      { id: '21:57:2', arabic: "لَأَكِيدَنَّ", transliteration: "la-akīdanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, I will plan", ur: "یقیناً, میں will plan" } },
      { id: '21:57:3', arabic: "أَصْنَـٰمَكُم", transliteration: "aṣnāmakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(against) your idols", ur: "(against) your idols" } },
      { id: '21:57:4', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '21:57:5', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '21:57:6', arabic: "تُوَلُّوا۟", transliteration: "tuwallū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you go away", ur: "تم go away" } },
      { id: '21:57:7', arabic: "مُدْبِرِينَ", transliteration: "mud'birīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "turning (your) backs", ur: "turning (your) backs" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  58: {
    text: "فَجَعَلَهُمْ جُذَٰذًا إِلَّا كَبِيرًۭا لَّهُمْ لَعَلَّهُمْ إِلَيْهِ يَرْجِعُونَ",
    translation: {
      en: "",
      ur: "پھر ان کو توڑ کر ریزہ ریزہ کردیا مگر ایک بڑے (بت) کو (نہ توڑا) تاکہ وہ اس کی طرف رجوع کریں",
    },
    words: [
      { id: '21:58:1', arabic: "فَجَعَلَهُمْ", transliteration: "fajaʿalahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ج ع ل", meaning: { en: "So he made them", ur: "So وہ made them" } },
      { id: '21:58:2', arabic: "جُذَٰذًا", transliteration: "judhādhan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(into) pieces", ur: "(into) pieces" } },
      { id: '21:58:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '21:58:4', arabic: "كَبِيرًۭا", transliteration: "kabīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a large (one)", ur: "a large (one)" } },
      { id: '21:58:5', arabic: "لَّهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '21:58:6', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '21:58:7', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '21:58:8', arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "return", ur: "return" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  59: {
    text: "قَالُوا۟ مَن فَعَلَ هَـٰذَا بِـَٔالِهَتِنَآ إِنَّهُۥ لَمِنَ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "کہنے لگے کہ ہمارے معبودوں کے ساتھ یہ معاملہ کس نے کیا؟ وہ تو کوئی ظالم ہے",
    },
    words: [
      { id: '21:59:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '21:59:2', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Who", ur: "جو" } },
      { id: '21:59:3', arabic: "فَعَلَ", transliteration: "faʿala", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(has) done", ur: "(has) done" } },
      { id: '21:59:4', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '21:59:5', arabic: "بِـَٔالِهَتِنَآ", transliteration: "biālihatinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to our gods", ur: "کو our gods" } },
      { id: '21:59:6', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '21:59:7', arabic: "لَمِنَ", transliteration: "lamina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) of", ur: "(is) of" } },
      { id: '21:59:8', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  60: {
    text: "قَالُوا۟ سَمِعْنَا فَتًۭى يَذْكُرُهُمْ يُقَالُ لَهُۥٓ إِبْرَٰهِيمُ",
    translation: {
      en: "",
      ur: "لوگوں نے کہا کہ ہم نے ایک جوان کو ان کا ذکر کرتے ہوئے سنا ہے اس کو ابراہیم کہتے ہیں",
    },
    words: [
      { id: '21:60:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '21:60:2', arabic: "سَمِعْنَا", transliteration: "samiʿ'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We heard", ur: "ہم heard" } },
      { id: '21:60:3', arabic: "فَتًۭى", transliteration: "fatan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "a youth", ur: "a youth" } },
      { id: '21:60:4', arabic: "يَذْكُرُهُمْ", transliteration: "yadhkuruhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "mention them", ur: "mention them" } },
      { id: '21:60:5', arabic: "يُقَالُ", transliteration: "yuqālu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he is called", ur: "وہ is called" } },
      { id: '21:60:6', arabic: "لَهُۥٓ", transliteration: "lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he is called", ur: "وہ is called" } },
      { id: '21:60:7', arabic: "إِبْرَٰهِيمُ", transliteration: "ib'rāhīmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  61: {
    text: "قَالُوا۟ فَأْتُوا۟ بِهِۦ عَلَىٰٓ أَعْيُنِ ٱلنَّاسِ لَعَلَّهُمْ يَشْهَدُونَ",
    translation: {
      en: "",
      ur: "وہ بولے کہ اسے لوگوں کے سامنے لاؤ تاکہ گواہ رہیں",
    },
    words: [
      { id: '21:61:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '21:61:2', arabic: "فَأْتُوا۟", transliteration: "fatū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then bring", ur: "پھر bring" } },
      { id: '21:61:3', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "him", ur: "him" } },
      { id: '21:61:4', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '21:61:5', arabic: "أَعْيُنِ", transliteration: "aʿyuni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) eyes", ur: "(the) eyes" } },
      { id: '21:61:6', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the people", ur: "(of) the لوگ" } },
      { id: '21:61:7', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '21:61:8', arabic: "يَشْهَدُونَ", transliteration: "yashhadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "bear witness", ur: "bear witness" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  62: {
    text: "قَالُوٓا۟ ءَأَنتَ فَعَلْتَ هَـٰذَا بِـَٔالِهَتِنَا يَـٰٓإِبْرَٰهِيمُ",
    translation: {
      en: "",
      ur: "(جب ابراہیم آئے تو) بت پرستوں نے کہا کہ ابراہیم بھلا یہ کام ہمارے معبودوں کے ساتھ تم نے کیا ہے؟",
    },
    words: [
      { id: '21:62:1', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '21:62:2', arabic: "ءَأَنتَ", transliteration: "a-anta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Have you", ur: "Have تم" } },
      { id: '21:62:3', arabic: "فَعَلْتَ", transliteration: "faʿalta", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "done", ur: "done" } },
      { id: '21:62:4', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '21:62:5', arabic: "بِـَٔالِهَتِنَا", transliteration: "biālihatinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to our gods", ur: "کو our gods" } },
      { id: '21:62:6', arabic: "يَـٰٓإِبْرَٰهِيمُ", transliteration: "yāib'rāhīmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Ibrahim", ur: "اے Ibrahim" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  63: {
    text: "قَالَ بَلْ فَعَلَهُۥ كَبِيرُهُمْ هَـٰذَا فَسْـَٔلُوهُمْ إِن كَانُوا۟ يَنطِقُونَ",
    translation: {
      en: "",
      ur: "(ابراہیم نے) کہا (نہیں) بلکہ یہ ان کے اس بڑے (بت) نے کیا (ہوگا)۔ اگر یہ بولتے ہیں تو ان سے پوچھ لو",
    },
    words: [
      { id: '21:63:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '21:63:2', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '21:63:3', arabic: "فَعَلَهُۥ", transliteration: "faʿalahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(some doer) did it", ur: "(some doer) did it" } },
      { id: '21:63:4', arabic: "كَبِيرُهُمْ", transliteration: "kabīruhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Their chief", ur: "Their chief" } },
      { id: '21:63:5', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) this", ur: "(is) this" } },
      { id: '21:63:6', arabic: "فَسْـَٔلُوهُمْ", transliteration: "fasalūhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So ask them", ur: "So ask them" } },
      { id: '21:63:7', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '21:63:8', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "they (can)", ur: "وہ لوگ (can)" } },
      { id: '21:63:9', arabic: "يَنطِقُونَ", transliteration: "yanṭiqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "speak", ur: "speak" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 3, label: 'عطف' },
        { from: 3, to: 6, label: 'عطف' }
      ],
    },
  },
  64: {
    text: "فَرَجَعُوٓا۟ إِلَىٰٓ أَنفُسِهِمْ فَقَالُوٓا۟ إِنَّكُمْ أَنتُمُ ٱلظَّـٰلِمُونَ",
    translation: {
      en: "",
      ur: "انہوں نے اپنے دل غور کیا تو آپس میں کہنے لگے بےشک تم ہی بےانصاف ہو",
    },
    words: [
      { id: '21:64:1', arabic: "فَرَجَعُوٓا۟", transliteration: "farajaʿū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So they returned", ur: "So وہ لوگ returned" } },
      { id: '21:64:2', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '21:64:3', arabic: "أَنفُسِهِمْ", transliteration: "anfusihim", pos: ['N'], posLabel: 'N', root: "ن ف س", meaning: { en: "themselves", ur: "themselves" } },
      { id: '21:64:4', arabic: "فَقَالُوٓا۟", transliteration: "faqālū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and said", ur: "اور کہا" } },
      { id: '21:64:5', arabic: "إِنَّكُمْ", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '21:64:6', arabic: "أَنتُمُ", transliteration: "antumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[you]", ur: "[تم]" } },
      { id: '21:64:7', arabic: "ٱلظَّـٰلِمُونَ", transliteration: "l-ẓālimūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the wrongdoers", ur: "(are) the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  65: {
    text: "ثُمَّ نُكِسُوا۟ عَلَىٰ رُءُوسِهِمْ لَقَدْ عَلِمْتَ مَا هَـٰٓؤُلَآءِ يَنطِقُونَ",
    translation: {
      en: "",
      ur: "پھر (شرمندہ ہو کر) سر نیچا کرلیا (اس پر بھی ابراہیم سے کہنے لگے کہ) تم جانتے ہو یہ بولتے نہیں",
    },
    words: [
      { id: '21:65:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '21:65:2', arabic: "نُكِسُوا۟", transliteration: "nukisū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were turned", ur: "وہ لوگ were turned" } },
      { id: '21:65:3', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '21:65:4', arabic: "رُءُوسِهِمْ", transliteration: "ruūsihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their heads", ur: "their heads" } },
      { id: '21:65:5', arabic: "لَقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '21:65:6', arabic: "عَلِمْتَ", transliteration: "ʿalim'ta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you know", ur: "تم جاننا" } },
      { id: '21:65:7', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '21:65:8', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '21:65:9', arabic: "يَنطِقُونَ", transliteration: "yanṭiqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(can) speak", ur: "(can) speak" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  66: {
    text: "قَالَ أَفَتَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَا يَنفَعُكُمْ شَيْـًۭٔا وَلَا يَضُرُّكُمْ",
    translation: {
      en: "",
      ur: "(ابراہیم نے) کہا پھر تم خدا کو چھوڑ کر کیوں ایسی چیزوں کو پوجتے ہو جو نہ تمہیں کچھ فائدہ دے سکیں اور نقصان پہنچا سکیں؟",
    },
    words: [
      { id: '21:66:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '21:66:2', arabic: "أَفَتَعْبُدُونَ", transliteration: "afataʿbudūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then do you worship", ur: "پھر do تم عبادت" } },
      { id: '21:66:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides", ur: "besides" } },
      { id: '21:66:4', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '21:66:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '21:66:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:66:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '21:66:8', arabic: "يَنفَعُكُمْ", transliteration: "yanfaʿukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "benefit you", ur: "benefit تم" } },
      { id: '21:66:9', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) anything", ur: "(میں) anything" } },
      { id: '21:66:10', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '21:66:11', arabic: "يَضُرُّكُمْ", transliteration: "yaḍurrukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "harms you", ur: "harms تم" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ],
    },
  },
  67: {
    text: "أُفٍّۢ لَّكُمْ وَلِمَا تَعْبُدُونَ مِن دُونِ ٱللَّهِ ۖ أَفَلَا تَعْقِلُونَ",
    translation: {
      en: "",
      ur: "تف ہے تم پر اور جن کو تم خدا کے سوا پوجتے ہو ان پر بھی کیا تم عقل نہیں رکھتے؟",
    },
    words: [
      { id: '21:67:1', arabic: "أُفٍّۢ", transliteration: "uffin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Uff", ur: "Uff" } },
      { id: '21:67:2', arabic: "لَّكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '21:67:3', arabic: "وَلِمَا", transliteration: "walimā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to what", ur: "اور کو کیا" } },
      { id: '21:67:4', arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you worship", ur: "تم عبادت" } },
      { id: '21:67:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides", ur: "besides" } },
      { id: '21:67:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '21:67:7', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '21:67:8', arabic: "أَفَلَا", transliteration: "afalā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Then will not", ur: "پھر will نہیں" } },
      { id: '21:67:9', arabic: "تَعْقِلُونَ", transliteration: "taʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you use reason", ur: "تم use reason" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  68: {
    text: "قَالُوا۟ حَرِّقُوهُ وَٱنصُرُوٓا۟ ءَالِهَتَكُمْ إِن كُنتُمْ فَـٰعِلِينَ",
    translation: {
      en: "",
      ur: "(تب وہ) کہنے لگے کہ اگر تمہیں (اس سے اپنے معبود کا انتقام لینا اور) کچھ کرنا ہے تو اس کو جلا دو اور اپنے معبودوں کی مدد کرو",
    },
    words: [
      { id: '21:68:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '21:68:2', arabic: "حَرِّقُوهُ", transliteration: "ḥarriqūhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Burn him", ur: "Burn him" } },
      { id: '21:68:3', arabic: "وَٱنصُرُوٓا۟", transliteration: "wa-unṣurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and support", ur: "اور support" } },
      { id: '21:68:4', arabic: "ءَالِهَتَكُمْ", transliteration: "ālihatakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your gods", ur: "your gods" } },
      { id: '21:68:5', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '21:68:6', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '21:68:7', arabic: "فَـٰعِلِينَ", transliteration: "fāʿilīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "doers", ur: "doers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  69: {
    text: "قُلْنَا يَـٰنَارُ كُونِى بَرْدًۭا وَسَلَـٰمًا عَلَىٰٓ إِبْرَٰهِيمَ",
    translation: {
      en: "",
      ur: "ہم نے حکم دیا اے آگ سرد ہوجا اور ابراہیم پر (موجب) سلامتی (بن جا)",
    },
    words: [
      { id: '21:69:1', arabic: "قُلْنَا", transliteration: "qul'nā", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "We said", ur: "ہم کہا" } },
      { id: '21:69:2', arabic: "يَـٰنَارُ", transliteration: "yānāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O fire", ur: "اے آگ" } },
      { id: '21:69:3', arabic: "كُونِى", transliteration: "kūnī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Be", ur: "Be" } },
      { id: '21:69:4', arabic: "بَرْدًۭا", transliteration: "bardan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "cool[ness]", ur: "cool[ness]" } },
      { id: '21:69:5', arabic: "وَسَلَـٰمًا", transliteration: "wasalāman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and safe[ty]", ur: "اور safe[ty]" } },
      { id: '21:69:6', arabic: "عَلَىٰٓ", transliteration: "ʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for", ur: "for" } },
      { id: '21:69:7', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    text: "وَأَرَادُوا۟ بِهِۦ كَيْدًۭا فَجَعَلْنَـٰهُمُ ٱلْأَخْسَرِينَ",
    translation: {
      en: "",
      ur: "اور ان لوگوں نے برا تو ان کا چاہا تھا مگر ہم نے ان ہی کو نقصان میں ڈال دیا",
    },
    words: [
      { id: '21:70:1', arabic: "وَأَرَادُوا۟", transliteration: "wa-arādū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they intended", ur: "اور وہ لوگ intended" } },
      { id: '21:70:2', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '21:70:3', arabic: "كَيْدًۭا", transliteration: "kaydan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a plan", ur: "a plan" } },
      { id: '21:70:4', arabic: "فَجَعَلْنَـٰهُمُ", transliteration: "fajaʿalnāhumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "but We made them", ur: "لیکن ہم made them" } },
      { id: '21:70:5', arabic: "ٱلْأَخْسَرِينَ", transliteration: "l-akhsarīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the greatest losers", ur: "the greatest losers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  71: {
    text: "وَنَجَّيْنَـٰهُ وَلُوطًا إِلَى ٱلْأَرْضِ ٱلَّتِى بَـٰرَكْنَا فِيهَا لِلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور ابراہیم اور لوط کو اس سرزمین کی طرف بچا نکالا جس میں ہم نے اہل عالم کے لئے برکت رکھی تھی",
    },
    words: [
      { id: '21:71:1', arabic: "وَنَجَّيْنَـٰهُ", transliteration: "wanajjaynāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We delivered him", ur: "اور ہم delivered him" } },
      { id: '21:71:2', arabic: "وَلُوطًا", transliteration: "walūṭan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Lut", ur: "اور Lut" } },
      { id: '21:71:3', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '21:71:4', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the land", ur: "the land" } },
      { id: '21:71:5', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '21:71:6', arabic: "بَـٰرَكْنَا", transliteration: "bāraknā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We (had) blessed", ur: "ہم (had) blessed" } },
      { id: '21:71:7', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[in it]", ur: "[میں it]" } },
      { id: '21:71:8', arabic: "لِلْعَـٰلَمِينَ", transliteration: "lil'ʿālamīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the worlds", ur: "for the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  72: {
    text: "وَوَهَبْنَا لَهُۥٓ إِسْحَـٰقَ وَيَعْقُوبَ نَافِلَةًۭ ۖ وَكُلًّۭا جَعَلْنَا صَـٰلِحِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے ابراہیم کو اسحق عطا کئے۔ اور مستزاد برآں یعقوب۔ اور سب کو نیک بخت کیا",
    },
    words: [
      { id: '21:72:1', arabic: "وَوَهَبْنَا", transliteration: "wawahabnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We bestowed", ur: "اور ہم bestowed" } },
      { id: '21:72:2', arabic: "لَهُۥٓ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on him", ur: "پر him" } },
      { id: '21:72:3', arabic: "إِسْحَـٰقَ", transliteration: "is'ḥāqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Isaac", ur: "Isaac" } },
      { id: '21:72:4', arabic: "وَيَعْقُوبَ", transliteration: "wayaʿqūba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Yaqub", ur: "اور Yaqub" } },
      { id: '21:72:5', arabic: "نَافِلَةًۭ ۖ", transliteration: "nāfilatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) addition", ur: "(میں) addition" } },
      { id: '21:72:6', arabic: "وَكُلًّۭا", transliteration: "wakullan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and all", ur: "اور سب" } },
      { id: '21:72:7', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We made", ur: "ہم made" } },
      { id: '21:72:8', arabic: "صَـٰلِحِينَ", transliteration: "ṣāliḥīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "righteous", ur: "نیک" } }
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
  73: {
    text: "وَجَعَلْنَـٰهُمْ أَئِمَّةًۭ يَهْدُونَ بِأَمْرِنَا وَأَوْحَيْنَآ إِلَيْهِمْ فِعْلَ ٱلْخَيْرَٰتِ وَإِقَامَ ٱلصَّلَوٰةِ وَإِيتَآءَ ٱلزَّكَوٰةِ ۖ وَكَانُوا۟ لَنَا عَـٰبِدِينَ",
    translation: {
      en: "",
      ur: "اور ان کو پیشوا بنایا کہ ہمارے حکم سے ہدایت کرتے تھے اور ان کو نیک کام کرنے اور نماز پڑھنے اور زکوٰة دینے کا حکم بھیجا۔ اور وہ ہماری عبادت کیا کرتے تھے",
    },
    words: [
      { id: '21:73:1', arabic: "وَجَعَلْنَـٰهُمْ", transliteration: "wajaʿalnāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We made them", ur: "اور ہم made them" } },
      { id: '21:73:2', arabic: "أَئِمَّةًۭ", transliteration: "a-immatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "leaders", ur: "leaders" } },
      { id: '21:73:3', arabic: "يَهْدُونَ", transliteration: "yahdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they guide", ur: "وہ لوگ guide" } },
      { id: '21:73:4', arabic: "بِأَمْرِنَا", transliteration: "bi-amrinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by Our Command", ur: "by Our Command" } },
      { id: '21:73:5', arabic: "وَأَوْحَيْنَآ", transliteration: "wa-awḥaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We inspired", ur: "اور ہم inspired" } },
      { id: '21:73:6', arabic: "إِلَيْهِمْ", transliteration: "ilayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '21:73:7', arabic: "فِعْلَ", transliteration: "fiʿ'la", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) doing", ur: "(the) doing" } },
      { id: '21:73:8', arabic: "ٱلْخَيْرَٰتِ", transliteration: "l-khayrāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) good deeds", ur: "(of) اچھا deeds" } },
      { id: '21:73:9', arabic: "وَإِقَامَ", transliteration: "wa-iqāma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and establishment", ur: "اور establishment" } },
      { id: '21:73:10', arabic: "ٱلصَّلَوٰةِ", transliteration: "l-ṣalati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the prayer", ur: "(of) the نماز" } },
      { id: '21:73:11', arabic: "وَإِيتَآءَ", transliteration: "waītāa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and giving", ur: "اور giving" } },
      { id: '21:73:12', arabic: "ٱلزَّكَوٰةِ ۖ", transliteration: "l-zakati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) zakah", ur: "(of) zakah" } },
      { id: '21:73:13', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and they were", ur: "اور وہ لوگ were" } },
      { id: '21:73:14', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of Us", ur: "of Us" } },
      { id: '21:73:15', arabic: "عَـٰبِدِينَ", transliteration: "ʿābidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "worshippers", ur: "worshippers" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  74: {
    text: "وَلُوطًا ءَاتَيْنَـٰهُ حُكْمًۭا وَعِلْمًۭا وَنَجَّيْنَـٰهُ مِنَ ٱلْقَرْيَةِ ٱلَّتِى كَانَت تَّعْمَلُ ٱلْخَبَـٰٓئِثَ ۗ إِنَّهُمْ كَانُوا۟ قَوْمَ سَوْءٍۢ فَـٰسِقِينَ",
    translation: {
      en: "",
      ur: "اور لوط (کا قصہ یاد کرو) جب ان کو ہم نے حکم (یعنی حکمت ونبوت) اور علم بخشا اور اس بستی سے جہاں کے لوگ گندے کام کیا کرتے تھے۔ بچا نکالا۔ بےشک وہ برے اور بدکردار لوگ تھے",
    },
    words: [
      { id: '21:74:1', arabic: "وَلُوطًا", transliteration: "walūṭan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (to) Lut", ur: "اور (کو) Lut" } },
      { id: '21:74:2', arabic: "ءَاتَيْنَـٰهُ", transliteration: "ātaynāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave him", ur: "ہم gave him" } },
      { id: '21:74:3', arabic: "حُكْمًۭا", transliteration: "ḥuk'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "judgment", ur: "judgment" } },
      { id: '21:74:4', arabic: "وَعِلْمًۭا", transliteration: "waʿil'man", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and knowledge", ur: "اور knowledge" } },
      { id: '21:74:5', arabic: "وَنَجَّيْنَـٰهُ", transliteration: "wanajjaynāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We saved him", ur: "اور ہم saved him" } },
      { id: '21:74:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:74:7', arabic: "ٱلْقَرْيَةِ", transliteration: "l-qaryati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the town", ur: "the town" } },
      { id: '21:74:8', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '21:74:9', arabic: "كَانَت", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '21:74:10', arabic: "تَّعْمَلُ", transliteration: "taʿmalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "doing", ur: "doing" } },
      { id: '21:74:11', arabic: "ٱلْخَبَـٰٓئِثَ ۗ", transliteration: "l-khabāitha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wicked deeds", ur: "wicked deeds" } },
      { id: '21:74:12', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '21:74:13', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '21:74:14', arabic: "قَوْمَ", transliteration: "qawma", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "a people", ur: "a لوگ" } },
      { id: '21:74:15', arabic: "سَوْءٍۢ", transliteration: "sawin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evil", ur: "برا" } },
      { id: '21:74:16', arabic: "فَـٰسِقِينَ", transliteration: "fāsiqīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "defiantly disobedient", ur: "defiantly disobedient" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  75: {
    text: "وَأَدْخَلْنَـٰهُ فِى رَحْمَتِنَآ ۖ إِنَّهُۥ مِنَ ٱلصَّـٰلِحِينَ",
    translation: {
      en: "",
      ur: "اور انہیں اپنی رحمت کے (محل میں) داخل کیا۔ کچھ شک نہیں کہ وہ نیک بختوں میں تھے",
    },
    words: [
      { id: '21:75:1', arabic: "وَأَدْخَلْنَـٰهُ", transliteration: "wa-adkhalnāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We admitted him", ur: "اور ہم admitted him" } },
      { id: '21:75:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "into", ur: "into" } },
      { id: '21:75:3', arabic: "رَحْمَتِنَآ ۖ", transliteration: "raḥmatinā", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "Our Mercy", ur: "Our رحمت" } },
      { id: '21:75:4', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, he", ur: "بیشک, وہ" } },
      { id: '21:75:5', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) of", ur: "(was) of" } },
      { id: '21:75:6', arabic: "ٱلصَّـٰلِحِينَ", transliteration: "l-ṣāliḥīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the righteous", ur: "the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  76: {
    text: "وَنُوحًا إِذْ نَادَىٰ مِن قَبْلُ فَٱسْتَجَبْنَا لَهُۥ فَنَجَّيْنَـٰهُ وَأَهْلَهُۥ مِنَ ٱلْكَرْبِ ٱلْعَظِيمِ",
    translation: {
      en: "",
      ur: "اور نوح (کا قصہ بھی یاد کرو) جب (اس سے) پیشتر انہوں نے ہم کو پکارا تو ہم نے ان کی دعا قبول فرمائی اور ان کو اور ان کے ساتھیوں کو بڑی گھبراہٹ سے نجات دی",
    },
    words: [
      { id: '21:76:1', arabic: "وَنُوحًا", transliteration: "wanūḥan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Nuh", ur: "اور Nuh" } },
      { id: '21:76:2', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:76:3', arabic: "نَادَىٰ", transliteration: "nādā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he called", ur: "وہ called" } },
      { id: '21:76:4', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '21:76:5', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '21:76:6', arabic: "فَٱسْتَجَبْنَا", transliteration: "fa-is'tajabnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so We responded", ur: "so ہم responded" } },
      { id: '21:76:7', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '21:76:8', arabic: "فَنَجَّيْنَـٰهُ", transliteration: "fanajjaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and We saved him", ur: "اور ہم saved him" } },
      { id: '21:76:9', arabic: "وَأَهْلَهُۥ", transliteration: "wa-ahlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ه ل", meaning: { en: "and his family", ur: "اور his family" } },
      { id: '21:76:10', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:76:11', arabic: "ٱلْكَرْبِ", transliteration: "l-karbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the affliction", ur: "the affliction" } },
      { id: '21:76:12', arabic: "ٱلْعَظِيمِ", transliteration: "l-ʿaẓīmi", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "[the] great", ur: "[the] great" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ],
    },
  },
  77: {
    text: "وَنَصَرْنَـٰهُ مِنَ ٱلْقَوْمِ ٱلَّذِينَ كَذَّبُوا۟ بِـَٔايَـٰتِنَآ ۚ إِنَّهُمْ كَانُوا۟ قَوْمَ سَوْءٍۢ فَأَغْرَقْنَـٰهُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "اور جو لوگ ہماری آیتوں کی تکذیب کرتے تھے ان پر نصرت بخشی۔ وہ بےشک برے لوگ تھے سو ہم نے ان سب کو غرق کردیا",
    },
    words: [
      { id: '21:77:1', arabic: "وَنَصَرْنَـٰهُ", transliteration: "wanaṣarnāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We helped him", ur: "اور ہم helped him" } },
      { id: '21:77:2', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:77:3', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "the people", ur: "the لوگ" } },
      { id: '21:77:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '21:77:5', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '21:77:6', arabic: "بِـَٔايَـٰتِنَآ ۚ", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '21:77:7', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '21:77:8', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '21:77:9', arabic: "قَوْمَ", transliteration: "qawma", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "a people", ur: "a لوگ" } },
      { id: '21:77:10', arabic: "سَوْءٍۢ", transliteration: "sawin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evil", ur: "برا" } },
      { id: '21:77:11', arabic: "فَأَغْرَقْنَـٰهُمْ", transliteration: "fa-aghraqnāhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so We drowned them", ur: "so ہم drowned them" } },
      { id: '21:77:12', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  78: {
    text: "وَدَاوُۥدَ وَسُلَيْمَـٰنَ إِذْ يَحْكُمَانِ فِى ٱلْحَرْثِ إِذْ نَفَشَتْ فِيهِ غَنَمُ ٱلْقَوْمِ وَكُنَّا لِحُكْمِهِمْ شَـٰهِدِينَ",
    translation: {
      en: "",
      ur: "اور داؤد اور سلیمان (کا حال بھی سن لو کہ) جب وہ ایک کھیتی کا مقدمہ فیصلہ کرنے لگے جس میں کچھ لوگوں کی بکریاں رات کو چر گئی (اور اسے روند گئی) تھیں اور ہم ان کے فیصلے کے وقت موجود تھے",
    },
    words: [
      { id: '21:78:1', arabic: "وَدَاوُۥدَ", transliteration: "wadāwūda", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Dawud", ur: "اور Dawud" } },
      { id: '21:78:2', arabic: "وَسُلَيْمَـٰنَ", transliteration: "wasulaymāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Sulaiman", ur: "اور Sulaiman" } },
      { id: '21:78:3', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:78:4', arabic: "يَحْكُمَانِ", transliteration: "yaḥkumāni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they judged", ur: "وہ لوگ judged" } },
      { id: '21:78:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '21:78:6', arabic: "ٱلْحَرْثِ", transliteration: "l-ḥarthi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the field", ur: "the field" } },
      { id: '21:78:7', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:78:8', arabic: "نَفَشَتْ", transliteration: "nafashat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "pastured", ur: "pastured" } },
      { id: '21:78:9', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '21:78:10', arabic: "غَنَمُ", transliteration: "ghanamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sheep", ur: "sheep" } },
      { id: '21:78:11', arabic: "ٱلْقَوْمِ", transliteration: "l-qawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(of) a people", ur: "(of) a لوگ" } },
      { id: '21:78:12', arabic: "وَكُنَّا", transliteration: "wakunnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We were", ur: "اور ہم were" } },
      { id: '21:78:13', arabic: "لِحُكْمِهِمْ", transliteration: "liḥuk'mihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to their judgment", ur: "کو their judgment" } },
      { id: '21:78:14', arabic: "شَـٰهِدِينَ", transliteration: "shāhidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "witness", ur: "witness" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  79: {
    text: "فَفَهَّمْنَـٰهَا سُلَيْمَـٰنَ ۚ وَكُلًّا ءَاتَيْنَا حُكْمًۭا وَعِلْمًۭا ۚ وَسَخَّرْنَا مَعَ دَاوُۥدَ ٱلْجِبَالَ يُسَبِّحْنَ وَٱلطَّيْرَ ۚ وَكُنَّا فَـٰعِلِينَ",
    translation: {
      en: "",
      ur: "تو ہم نے فیصلہ (کرنے کا طریق) سلیمان کو سمجھا دیا۔ اور ہم نے دونوں کو حکم (یعنی حکمت ونبوت) اور علم بخشا تھا۔ اور ہم نے پہاڑوں کو داؤد کا مسخر کردیا تھا کہ ان کے ساتھ تسبیح کرتے تھے اور جانوروں کو بھی (مسخر کردیا تھا اور ہم ہی ایسا) کرنے والے تھے",
    },
    words: [
      { id: '21:79:1', arabic: "فَفَهَّمْنَـٰهَا", transliteration: "fafahhamnāhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And We gave understanding of it", ur: "اور ہم gave understanding of it" } },
      { id: '21:79:2', arabic: "سُلَيْمَـٰنَ ۚ", transliteration: "sulaymāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Sulaiman", ur: "(کو) Sulaiman" } },
      { id: '21:79:3', arabic: "وَكُلًّا", transliteration: "wakullan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (to) each", ur: "اور (کو) ہر" } },
      { id: '21:79:4', arabic: "ءَاتَيْنَا", transliteration: "ātaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave", ur: "ہم gave" } },
      { id: '21:79:5', arabic: "حُكْمًۭا", transliteration: "ḥuk'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "judgment", ur: "judgment" } },
      { id: '21:79:6', arabic: "وَعِلْمًۭا ۚ", transliteration: "waʿil'man", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and knowledge", ur: "اور knowledge" } },
      { id: '21:79:7', arabic: "وَسَخَّرْنَا", transliteration: "wasakharnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We subjected", ur: "اور ہم subjected" } },
      { id: '21:79:8', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '21:79:9', arabic: "دَاوُۥدَ", transliteration: "dāwūda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Dawud", ur: "Dawud" } },
      { id: '21:79:10', arabic: "ٱلْجِبَالَ", transliteration: "l-jibāla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mountains", ur: "the mountains" } },
      { id: '21:79:11', arabic: "يُسَبِّحْنَ", transliteration: "yusabbiḥ'na", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) glorify Our praises", ur: "(کو) glorify Our praises" } },
      { id: '21:79:12', arabic: "وَٱلطَّيْرَ ۚ", transliteration: "wal-ṭayra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the birds", ur: "اور the birds" } },
      { id: '21:79:13', arabic: "وَكُنَّا", transliteration: "wakunnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We were", ur: "اور ہم were" } },
      { id: '21:79:14', arabic: "فَـٰعِلِينَ", transliteration: "fāʿilīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "the Doers", ur: "the Doers" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  80: {
    text: "وَعَلَّمْنَـٰهُ صَنْعَةَ لَبُوسٍۢ لَّكُمْ لِتُحْصِنَكُم مِّنۢ بَأْسِكُمْ ۖ فَهَلْ أَنتُمْ شَـٰكِرُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے تمہارے لئے ان کو ایک (طرح) کا لباس بنانا بھی سکھا دیا تاکہ تم کو لڑائی (کے ضرر) سے بچائے۔ پس تم کو شکرگزار ہونا چاہیئے",
    },
    words: [
      { id: '21:80:1', arabic: "وَعَلَّمْنَـٰهُ", transliteration: "waʿallamnāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We taught him", ur: "اور ہم taught him" } },
      { id: '21:80:2', arabic: "صَنْعَةَ", transliteration: "ṣanʿata", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) making", ur: "(the) making" } },
      { id: '21:80:3', arabic: "لَبُوسٍۢ", transliteration: "labūsin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) coats of armor", ur: "(of) coats of armor" } },
      { id: '21:80:4', arabic: "لَّكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '21:80:5', arabic: "لِتُحْصِنَكُم", transliteration: "lituḥ'ṣinakum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to protect you", ur: "کو protect تم" } },
      { id: '21:80:6', arabic: "مِّنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:80:7', arabic: "بَأْسِكُمْ ۖ", transliteration: "basikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your battle", ur: "your battle" } },
      { id: '21:80:8', arabic: "فَهَلْ", transliteration: "fahal", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then will", ur: "پھر will" } },
      { id: '21:80:9', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '21:80:10', arabic: "شَـٰكِرُونَ", transliteration: "shākirūna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(be) grateful", ur: "(be) grateful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  81: {
    text: "وَلِسُلَيْمَـٰنَ ٱلرِّيحَ عَاصِفَةًۭ تَجْرِى بِأَمْرِهِۦٓ إِلَى ٱلْأَرْضِ ٱلَّتِى بَـٰرَكْنَا فِيهَا ۚ وَكُنَّا بِكُلِّ شَىْءٍ عَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے تیز ہوا سلیمان کے تابع (فرمان) کردی تھی جو ان کے حکم سے اس ملک میں چلتی تھی جس میں ہم نے برکت دی تھی (یعنی شام) اور ہم ہر چیز سے خبردار ہیں",
    },
    words: [
      { id: '21:81:1', arabic: "وَلِسُلَيْمَـٰنَ", transliteration: "walisulaymāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to Sulaiman", ur: "اور کو Sulaiman" } },
      { id: '21:81:2', arabic: "ٱلرِّيحَ", transliteration: "l-rīḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wind", ur: "the wind" } },
      { id: '21:81:3', arabic: "عَاصِفَةًۭ", transliteration: "ʿāṣifatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "forcefully", ur: "forcefully" } },
      { id: '21:81:4', arabic: "تَجْرِى", transliteration: "tajrī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "blowing", ur: "blowing" } },
      { id: '21:81:5', arabic: "بِأَمْرِهِۦٓ", transliteration: "bi-amrihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by his command", ur: "by his command" } },
      { id: '21:81:6', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '21:81:7', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the land", ur: "the land" } },
      { id: '21:81:8', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '21:81:9', arabic: "بَـٰرَكْنَا", transliteration: "bāraknā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We blessed", ur: "ہم blessed" } },
      { id: '21:81:10', arabic: "فِيهَا ۚ", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[in it]", ur: "[میں it]" } },
      { id: '21:81:11', arabic: "وَكُنَّا", transliteration: "wakunnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We are", ur: "اور ہم are" } },
      { id: '21:81:12', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of every", ur: "of ہر" } },
      { id: '21:81:13', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '21:81:14', arabic: "عَـٰلِمِينَ", transliteration: "ʿālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Knowers", ur: "Knowers" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  82: {
    text: "وَمِنَ ٱلشَّيَـٰطِينِ مَن يَغُوصُونَ لَهُۥ وَيَعْمَلُونَ عَمَلًۭا دُونَ ذَٰلِكَ ۖ وَكُنَّا لَهُمْ حَـٰفِظِينَ",
    translation: {
      en: "",
      ur: "اور دیوؤں (کی جماعت کو بھی ان کے تابع کردیا تھا کہ ان) میں سے بعض ان کے لئے غوطے مارتے تھے اور اس کے سوا اور کام بھی کرتے تھے اور ہم ان کے نگہبان تھے",
    },
    words: [
      { id: '21:82:1', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And of", ur: "اور of" } },
      { id: '21:82:2', arabic: "ٱلشَّيَـٰطِينِ", transliteration: "l-shayāṭīni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the devils", ur: "the devils" } },
      { id: '21:82:3', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(were some) who", ur: "(were some) جو" } },
      { id: '21:82:4', arabic: "يَغُوصُونَ", transliteration: "yaghūṣūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "would dive", ur: "would dive" } },
      { id: '21:82:5', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '21:82:6', arabic: "وَيَعْمَلُونَ", transliteration: "wayaʿmalūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and would do", ur: "اور would do" } },
      { id: '21:82:7', arabic: "عَمَلًۭا", transliteration: "ʿamalan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "work", ur: "work" } },
      { id: '21:82:8', arabic: "دُونَ", transliteration: "dūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "other than", ur: "other than" } },
      { id: '21:82:9', arabic: "ذَٰلِكَ ۖ", transliteration: "dhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '21:82:10', arabic: "وَكُنَّا", transliteration: "wakunnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We were", ur: "اور ہم were" } },
      { id: '21:82:11', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '21:82:12', arabic: "حَـٰفِظِينَ", transliteration: "ḥāfiẓīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Guardians", ur: "Guardians" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  83: {
    text: "۞ وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُۥٓ أَنِّى مَسَّنِىَ ٱلضُّرُّ وَأَنتَ أَرْحَمُ ٱلرَّٰحِمِينَ",
    translation: {
      en: "",
      ur: "اور ایوب کو (یاد کرو) جب انہوں نے اپنے پروردگار سے دعا کی کہ مجھے ایذا ہو رہی ہے اور تو سب سے بڑھ کر رحم کرنے والا ہے",
    },
    words: [
      { id: '21:83:1', arabic: "۞ وَأَيُّوبَ", transliteration: "wa-ayyūba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And Ayub", ur: "اور Ayub" } },
      { id: '21:83:2', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:83:3', arabic: "نَادَىٰ", transliteration: "nādā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he called", ur: "وہ called" } },
      { id: '21:83:4', arabic: "رَبَّهُۥٓ", transliteration: "rabbahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) his Lord", ur: "(کو) his رب" } },
      { id: '21:83:5', arabic: "أَنِّى", transliteration: "annī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, [I]", ur: "بیشک, [میں]" } },
      { id: '21:83:6', arabic: "مَسَّنِىَ", transliteration: "massaniya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has touched me", ur: "has touched me" } },
      { id: '21:83:7', arabic: "ٱلضُّرُّ", transliteration: "l-ḍuru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the adversity", ur: "the adversity" } },
      { id: '21:83:8', arabic: "وَأَنتَ", transliteration: "wa-anta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and You", ur: "اور تم" } },
      { id: '21:83:9', arabic: "أَرْحَمُ", transliteration: "arḥamu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(are) Most Merciful", ur: "(are) بہت مہربان" } },
      { id: '21:83:10', arabic: "ٱلرَّٰحِمِينَ", transliteration: "l-rāḥimīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(of) the Merciful", ur: "(of) the Merciful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  84: {
    text: "فَٱسْتَجَبْنَا لَهُۥ فَكَشَفْنَا مَا بِهِۦ مِن ضُرٍّۢ ۖ وَءَاتَيْنَـٰهُ أَهْلَهُۥ وَمِثْلَهُم مَّعَهُمْ رَحْمَةًۭ مِّنْ عِندِنَا وَذِكْرَىٰ لِلْعَـٰبِدِينَ",
    translation: {
      en: "",
      ur: "تو ہم نے ان کی دعا قبول کرلی اور جو ان کو تکلیف تھی وہ دور کردی اور ان کو بال بچے بھی عطا فرمائے اور اپنی مہربانی کے ساتھ اتنے ہی اور (بخشے) اور عبادت کرنے والوں کے لئے (یہ) نصیحت ہے",
    },
    words: [
      { id: '21:84:1', arabic: "فَٱسْتَجَبْنَا", transliteration: "fa-is'tajabnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We responded", ur: "So ہم responded" } },
      { id: '21:84:2', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '21:84:3', arabic: "فَكَشَفْنَا", transliteration: "fakashafnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and We removed", ur: "اور ہم removed" } },
      { id: '21:84:4', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:84:5', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(was) on him", ur: "(was) پر him" } },
      { id: '21:84:6', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:84:7', arabic: "ضُرٍّۢ ۖ", transliteration: "ḍurrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) adversity", ur: "(the) adversity" } },
      { id: '21:84:8', arabic: "وَءَاتَيْنَـٰهُ", transliteration: "waātaynāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We gave him", ur: "اور ہم gave him" } },
      { id: '21:84:9', arabic: "أَهْلَهُۥ", transliteration: "ahlahu", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "his family", ur: "his family" } },
      { id: '21:84:10', arabic: "وَمِثْلَهُم", transliteration: "wamith'lahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (the) like thereof", ur: "اور (the) like اس سے" } },
      { id: '21:84:11', arabic: "مَّعَهُمْ", transliteration: "maʿahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '21:84:12', arabic: "رَحْمَةًۭ", transliteration: "raḥmatan", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "(as) Mercy", ur: "(as) رحمت" } },
      { id: '21:84:13', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Ourselves", ur: "سے Ourselves" } },
      { id: '21:84:14', arabic: "عِندِنَا", transliteration: "ʿindinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Ourselves", ur: "سے Ourselves" } },
      { id: '21:84:15', arabic: "وَذِكْرَىٰ", transliteration: "wadhik'rā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a reminder", ur: "اور a reminder" } },
      { id: '21:84:16', arabic: "لِلْعَـٰبِدِينَ", transliteration: "lil'ʿābidīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the worshippers", ur: "for the worshippers" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  85: {
    text: "وَإِسْمَـٰعِيلَ وَإِدْرِيسَ وَذَا ٱلْكِفْلِ ۖ كُلٌّۭ مِّنَ ٱلصَّـٰبِرِينَ",
    translation: {
      en: "",
      ur: "اور اسمٰعیل اور ادریس اور ذوالکفل (کو بھی یاد کرو) یہ سب صبر کرنے والے تھے",
    },
    words: [
      { id: '21:85:1', arabic: "وَإِسْمَـٰعِيلَ", transliteration: "wa-is'māʿīla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Ishmael", ur: "اور Ishmael" } },
      { id: '21:85:2', arabic: "وَإِدْرِيسَ", transliteration: "wa-id'rīsa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Idris", ur: "اور Idris" } },
      { id: '21:85:3', arabic: "وَذَا", transliteration: "wadhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Dhul-Kifl", ur: "اور Dhul-Kifl" } },
      { id: '21:85:4', arabic: "ٱلْكِفْلِ ۖ", transliteration: "l-kif'li", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "and Dhul-Kifl", ur: "اور Dhul-Kifl" } },
      { id: '21:85:5', arabic: "كُلٌّۭ", transliteration: "kullun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '21:85:6', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) of", ur: "(were) of" } },
      { id: '21:85:7', arabic: "ٱلصَّـٰبِرِينَ", transliteration: "l-ṣābirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the patient ones", ur: "the patient ones" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  86: {
    text: "وَأَدْخَلْنَـٰهُمْ فِى رَحْمَتِنَآ ۖ إِنَّهُم مِّنَ ٱلصَّـٰلِحِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان کو اپنی رحمت میں داخل کیا۔ بلاشبہ وہ نیکوکار تھے",
    },
    words: [
      { id: '21:86:1', arabic: "وَأَدْخَلْنَـٰهُمْ", transliteration: "wa-adkhalnāhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We admitted them", ur: "اور ہم admitted them" } },
      { id: '21:86:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:86:3', arabic: "رَحْمَتِنَآ ۖ", transliteration: "raḥmatinā", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "Our Mercy", ur: "Our رحمت" } },
      { id: '21:86:4', arabic: "إِنَّهُم", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '21:86:5', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) of", ur: "(were) of" } },
      { id: '21:86:6', arabic: "ٱلصَّـٰلِحِينَ", transliteration: "l-ṣāliḥīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the righteous", ur: "the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  87: {
    text: "وَذَا ٱلنُّونِ إِذ ذَّهَبَ مُغَـٰضِبًۭا فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ فَنَادَىٰ فِى ٱلظُّلُمَـٰتِ أَن لَّآ إِلَـٰهَ إِلَّآ أَنتَ سُبْحَـٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور ذوالنون (کو یاد کرو) جب وہ (اپنی قوم سے ناراض ہو کر) غصے کی حالت میں چل دیئے اور خیال کیا کہ ہم ان پر قابو نہیں پاسکیں گے۔ آخر اندھیرے میں (خدا کو) پکارنے لگے کہ تیرے سوا کوئی معبود نہیں۔ تو پاک ہے (اور) بےشک میں قصوروار ہوں",
    },
    words: [
      { id: '21:87:1', arabic: "وَذَا", transliteration: "wadhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Dhun-Nun", ur: "اور Dhun-Nun" } },
      { id: '21:87:2', arabic: "ٱلنُّونِ", transliteration: "l-nūni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And Dhun-Nun", ur: "اور Dhun-Nun" } },
      { id: '21:87:3', arabic: "إِذ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:87:4', arabic: "ذَّهَبَ", transliteration: "dhahaba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he went", ur: "وہ went" } },
      { id: '21:87:5', arabic: "مُغَـٰضِبًۭا", transliteration: "mughāḍiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(while) angry", ur: "(while) angry" } },
      { id: '21:87:6', arabic: "فَظَنَّ", transliteration: "faẓanna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and thought", ur: "اور thought" } },
      { id: '21:87:7', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '21:87:8', arabic: "لَّن", transliteration: "lan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "never", ur: "never" } },
      { id: '21:87:9', arabic: "نَّقْدِرَ", transliteration: "naqdira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We would decree", ur: "ہم would decree" } },
      { id: '21:87:10', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon him", ur: "پر him" } },
      { id: '21:87:11', arabic: "فَنَادَىٰ", transliteration: "fanādā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then he called", ur: "پھر وہ called" } },
      { id: '21:87:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:87:13', arabic: "ٱلظُّلُمَـٰتِ", transliteration: "l-ẓulumāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the darkness(es)", ur: "the darkness(es)" } },
      { id: '21:87:14', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '21:87:15', arabic: "لَّآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(There is) no", ur: "(There is) نہیں" } },
      { id: '21:87:16', arabic: "إِلَـٰهَ", transliteration: "ilāha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '21:87:17', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '21:87:18', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "You", ur: "تم" } },
      { id: '21:87:19', arabic: "سُبْحَـٰنَكَ", transliteration: "sub'ḥānaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Glory be to You", ur: "Glory be کو تم" } },
      { id: '21:87:20', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, [I]", ur: "بیشک, [میں]" } },
      { id: '21:87:21', arabic: "كُنتُ", transliteration: "kuntu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am", ur: "میں am" } },
      { id: '21:87:22', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:87:23', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  88: {
    text: "فَٱسْتَجَبْنَا لَهُۥ وَنَجَّيْنَـٰهُ مِنَ ٱلْغَمِّ ۚ وَكَذَٰلِكَ نُـۨجِى ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "تو ہم نے ان کی دعا قبول کرلی اور ان کو غم سے نجات بخشی۔ اور ایمان والوں کو ہم اسی طرح نجات دیا کرتے ہیں",
    },
    words: [
      { id: '21:88:1', arabic: "فَٱسْتَجَبْنَا", transliteration: "fa-is'tajabnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We responded", ur: "So ہم responded" } },
      { id: '21:88:2', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '21:88:3', arabic: "وَنَجَّيْنَـٰهُ", transliteration: "wanajjaynāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We saved him", ur: "اور ہم saved him" } },
      { id: '21:88:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:88:5', arabic: "ٱلْغَمِّ ۚ", transliteration: "l-ghami", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the distress", ur: "the distress" } },
      { id: '21:88:6', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '21:88:7', arabic: "نُـۨجِى", transliteration: "nunjī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We save", ur: "ہم save" } },
      { id: '21:88:8', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  89: {
    text: "وَزَكَرِيَّآ إِذْ نَادَىٰ رَبَّهُۥ رَبِّ لَا تَذَرْنِى فَرْدًۭا وَأَنتَ خَيْرُ ٱلْوَٰرِثِينَ",
    translation: {
      en: "",
      ur: "اور زکریا (کو یاد کرو) جب انہوں نے اپنے پروردگار کو پکارا کہ پروردگار مجھے اکیلا نہ چھوڑ اور تو سب سے بہتر وارث ہے",
    },
    words: [
      { id: '21:89:1', arabic: "وَزَكَرِيَّآ", transliteration: "wazakariyyā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Zakariya", ur: "اور Zakariya" } },
      { id: '21:89:2', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:89:3', arabic: "نَادَىٰ", transliteration: "nādā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he called", ur: "وہ called" } },
      { id: '21:89:4', arabic: "رَبَّهُۥ", transliteration: "rabbahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) his Lord", ur: "(کو) his رب" } },
      { id: '21:89:5', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '21:89:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '21:89:7', arabic: "تَذَرْنِى", transliteration: "tadharnī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "leave me", ur: "leave me" } },
      { id: '21:89:8', arabic: "فَرْدًۭا", transliteration: "fardan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "alone", ur: "alone" } },
      { id: '21:89:9', arabic: "وَأَنتَ", transliteration: "wa-anta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while You", ur: "while تم" } },
      { id: '21:89:10', arabic: "خَيْرُ", transliteration: "khayru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) [the] Best", ur: "(are) [the] Best" } },
      { id: '21:89:11', arabic: "ٱلْوَٰرِثِينَ", transliteration: "l-wārithīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the inheritors", ur: "(of) the inheritors" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  90: {
    text: "فَٱسْتَجَبْنَا لَهُۥ وَوَهَبْنَا لَهُۥ يَحْيَىٰ وَأَصْلَحْنَا لَهُۥ زَوْجَهُۥٓ ۚ إِنَّهُمْ كَانُوا۟ يُسَـٰرِعُونَ فِى ٱلْخَيْرَٰتِ وَيَدْعُونَنَا رَغَبًۭا وَرَهَبًۭا ۖ وَكَانُوا۟ لَنَا خَـٰشِعِينَ",
    translation: {
      en: "",
      ur: "تو ہم نے ان کی پکار سن لی۔ اور ان کو یحییٰ بخشے اور ان کی بیوی کو اُن کے (حسن معاشرت کے) قابل بنادیا۔ یہ لوگ لپک لپک کر نیکیاں کرتے اور ہمیں امید سے پکارتے اور ہمارے آگے عاجزی کیا کرتے تھے",
    },
    words: [
      { id: '21:90:1', arabic: "فَٱسْتَجَبْنَا", transliteration: "fa-is'tajabnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We responded", ur: "So ہم responded" } },
      { id: '21:90:2', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to him", ur: "کو him" } },
      { id: '21:90:3', arabic: "وَوَهَبْنَا", transliteration: "wawahabnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We bestowed", ur: "اور ہم bestowed" } },
      { id: '21:90:4', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on him", ur: "پر him" } },
      { id: '21:90:5', arabic: "يَحْيَىٰ", transliteration: "yaḥyā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Yahya", ur: "Yahya" } },
      { id: '21:90:6', arabic: "وَأَصْلَحْنَا", transliteration: "wa-aṣlaḥnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We cured", ur: "اور ہم cured" } },
      { id: '21:90:7', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '21:90:8', arabic: "زَوْجَهُۥٓ ۚ", transliteration: "zawjahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his wife", ur: "his wife" } },
      { id: '21:90:9', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '21:90:10', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "used (to)", ur: "used (کو)" } },
      { id: '21:90:11', arabic: "يُسَـٰرِعُونَ", transliteration: "yusāriʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hasten", ur: "hasten" } },
      { id: '21:90:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:90:13', arabic: "ٱلْخَيْرَٰتِ", transliteration: "l-khayrāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good deeds", ur: "اچھا deeds" } },
      { id: '21:90:14', arabic: "وَيَدْعُونَنَا", transliteration: "wayadʿūnanā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they supplicate to Us", ur: "اور وہ لوگ supplicate کو Us" } },
      { id: '21:90:15', arabic: "رَغَبًۭا", transliteration: "raghaban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) hope", ur: "(میں) hope" } },
      { id: '21:90:16', arabic: "وَرَهَبًۭا ۖ", transliteration: "warahaban", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and fear", ur: "اور ڈرنا" } },
      { id: '21:90:17', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and they were", ur: "اور وہ لوگ were" } },
      { id: '21:90:18', arabic: "لَنَا", transliteration: "lanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Us", ur: "کو Us" } },
      { id: '21:90:19', arabic: "خَـٰشِعِينَ", transliteration: "khāshiʿīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "humbly submissive", ur: "humbly submissive" } }
    ],
    structure: {
      relationships: [
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ],
    },
  },
  91: {
    text: "وَٱلَّتِىٓ أَحْصَنَتْ فَرْجَهَا فَنَفَخْنَا فِيهَا مِن رُّوحِنَا وَجَعَلْنَـٰهَا وَٱبْنَهَآ ءَايَةًۭ لِّلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور ان (مریم) کو (بھی یاد کرو) جنہوں نے اپنی عفّت کو محفوظ رکھا۔ تو ہم نے ان میں اپنی روح پھونک دی اور ان کے بیٹے کو اہل عالم کے لئے نشانی بنا دیا",
    },
    words: [
      { id: '21:91:1', arabic: "وَٱلَّتِىٓ", transliteration: "wa-allatī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And she who", ur: "اور she جو" } },
      { id: '21:91:2', arabic: "أَحْصَنَتْ", transliteration: "aḥṣanat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guarded", ur: "guarded" } },
      { id: '21:91:3', arabic: "فَرْجَهَا", transliteration: "farjahā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "her chastity", ur: "her chastity" } },
      { id: '21:91:4', arabic: "فَنَفَخْنَا", transliteration: "fanafakhnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so We breathed", ur: "so ہم breathed" } },
      { id: '21:91:5', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "into her", ur: "into her" } },
      { id: '21:91:6', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:91:7', arabic: "رُّوحِنَا", transliteration: "rūḥinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Spirit", ur: "Our Spirit" } },
      { id: '21:91:8', arabic: "وَجَعَلْنَـٰهَا", transliteration: "wajaʿalnāhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We made her", ur: "اور ہم made her" } },
      { id: '21:91:9', arabic: "وَٱبْنَهَآ", transliteration: "wa-ib'nahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and her son", ur: "اور her بیٹا" } },
      { id: '21:91:10', arabic: "ءَايَةًۭ", transliteration: "āyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a sign", ur: "a نشانی" } },
      { id: '21:91:11', arabic: "لِّلْعَـٰلَمِينَ", transliteration: "lil'ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for the worlds", ur: "for the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  92: {
    text: "إِنَّ هَـٰذِهِۦٓ أُمَّتُكُمْ أُمَّةًۭ وَٰحِدَةًۭ وَأَنَا۠ رَبُّكُمْ فَٱعْبُدُونِ",
    translation: {
      en: "",
      ur: "یہ تمہاری جماعت ایک ہی جماعت ہے اور میں تمہارا پروردگار ہوں تو میری ہی عبادت کیا کرو",
    },
    words: [
      { id: '21:92:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '21:92:2', arabic: "هَـٰذِهِۦٓ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '21:92:3', arabic: "أُمَّتُكُمْ", transliteration: "ummatukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) your religion ", ur: "(is) your religion " } },
      { id: '21:92:4', arabic: "أُمَّةًۭ", transliteration: "ummatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "religion", ur: "religion" } },
      { id: '21:92:5', arabic: "وَٰحِدَةًۭ", transliteration: "wāḥidatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "one", ur: "one" } },
      { id: '21:92:6', arabic: "وَأَنَا۠", transliteration: "wa-anā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I Am", ur: "اور میں Am" } },
      { id: '21:92:7', arabic: "رَبُّكُمْ", transliteration: "rabbukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '21:92:8', arabic: "فَٱعْبُدُونِ", transliteration: "fa-uʿ'budūni", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "د و ن", meaning: { en: "so worship Me", ur: "so عبادت Me" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  93: {
    text: "وَتَقَطَّعُوٓا۟ أَمْرَهُم بَيْنَهُمْ ۖ كُلٌّ إِلَيْنَا رَٰجِعُونَ",
    translation: {
      en: "",
      ur: "اور یہ لوگ اپنے معاملے میں باہم متفرق ہوگئے۔ (مگر) سب ہماری طرف رجوع کرنے والے ہیں",
    },
    words: [
      { id: '21:93:1', arabic: "وَتَقَطَّعُوٓا۟", transliteration: "wataqaṭṭaʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But they cut off", ur: "لیکن وہ لوگ cut off" } },
      { id: '21:93:2', arabic: "أَمْرَهُم", transliteration: "amrahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their affair", ur: "their affair" } },
      { id: '21:93:3', arabic: "بَيْنَهُمْ ۖ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among themselves", ur: "among themselves" } },
      { id: '21:93:4', arabic: "كُلٌّ", transliteration: "kullun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '21:93:5', arabic: "إِلَيْنَا", transliteration: "ilaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Us", ur: "کو Us" } },
      { id: '21:93:6', arabic: "رَٰجِعُونَ", transliteration: "rājiʿūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) return", ur: "(will) return" } }
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
  94: {
    text: "فَمَن يَعْمَلْ مِنَ ٱلصَّـٰلِحَـٰتِ وَهُوَ مُؤْمِنٌۭ فَلَا كُفْرَانَ لِسَعْيِهِۦ وَإِنَّا لَهُۥ كَـٰتِبُونَ",
    translation: {
      en: "",
      ur: "جو نیک کام کرے گا اور مومن بھی ہوگا تو اس کی کوشش رائیگاں نہ جائے گی۔ اور ہم اس کے لئے (ثواب اعمال) لکھ رہے ہیں",
    },
    words: [
      { id: '21:94:1', arabic: "فَمَن", transliteration: "faman", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then whoever", ur: "پھر whoever" } },
      { id: '21:94:2', arabic: "يَعْمَلْ", transliteration: "yaʿmal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '21:94:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '21:94:4', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] righteous deeds", ur: "[the] نیک deeds" } },
      { id: '21:94:5', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while he", ur: "while وہ" } },
      { id: '21:94:6', arabic: "مُؤْمِنٌۭ", transliteration: "mu'minun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a believer", ur: "(is) a believer" } },
      { id: '21:94:7', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '21:94:8', arabic: "كُفْرَانَ", transliteration: "kuf'rāna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) rejected", ur: "(will be) rejected" } },
      { id: '21:94:9', arabic: "لِسَعْيِهِۦ", transliteration: "lisaʿyihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[of] his effort", ur: "[of] his effort" } },
      { id: '21:94:10', arabic: "وَإِنَّا", transliteration: "wa-innā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, We", ur: "اور بیشک, ہم" } },
      { id: '21:94:11', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '21:94:12', arabic: "كَـٰتِبُونَ", transliteration: "kātibūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) Recorders", ur: "(are) Recorders" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  95: {
    text: "وَحَرَٰمٌ عَلَىٰ قَرْيَةٍ أَهْلَكْنَـٰهَآ أَنَّهُمْ لَا يَرْجِعُونَ",
    translation: {
      en: "",
      ur: "اور جس بستی (والوں) کو ہم نے ہلاک کردیا محال ہے کہ (وہ دنیا کی طرف رجوع کریں) وہ رجوع نہیں کریں گے",
    },
    words: [
      { id: '21:95:1', arabic: "وَحَرَٰمٌ", transliteration: "waḥarāmun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (there is) prohibition", ur: "اور (there is) prohibition" } },
      { id: '21:95:2', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '21:95:3', arabic: "قَرْيَةٍ", transliteration: "qaryatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a city", ur: "a city" } },
      { id: '21:95:4', arabic: "أَهْلَكْنَـٰهَآ", transliteration: "ahlaknāhā", pos: ['V'], posLabel: 'V', root: "أ ه ل", meaning: { en: "which We have destroyed", ur: "جو ہم have destroyed" } },
      { id: '21:95:5', arabic: "أَنَّهُمْ", transliteration: "annahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they", ur: "وہ وہ لوگ" } },
      { id: '21:95:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '21:95:7', arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will return", ur: "will return" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'نفی + فعل' }
      ],
    },
  },
  96: {
    text: "حَتَّىٰٓ إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ وَهُم مِّن كُلِّ حَدَبٍۢ يَنسِلُونَ",
    translation: {
      en: "",
      ur: "یہاں تک کہ یاجوج ماجوج کھول دیئے جائیں اور وہ ہر بلندی سے دوڑ رہے ہوں",
    },
    words: [
      { id: '21:96:1', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Until", ur: "Until" } },
      { id: '21:96:2', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '21:96:3', arabic: "فُتِحَتْ", transliteration: "futiḥat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has been opened", ur: "has been opened" } },
      { id: '21:96:4', arabic: "يَأْجُوجُ", transliteration: "yajūju", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(for) the Yajuj", ur: "(for) the Yajuj" } },
      { id: '21:96:5', arabic: "وَمَأْجُوجُ", transliteration: "wamajūju", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Majuj", ur: "اور Majuj" } },
      { id: '21:96:6', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '21:96:7', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '21:96:8', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '21:96:9', arabic: "حَدَبٍۢ", transliteration: "ḥadabin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "elevation", ur: "elevation" } },
      { id: '21:96:10', arabic: "يَنسِلُونَ", transliteration: "yansilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "descend", ur: "descend" } }
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
        { from: 9, to: 10, label: 'تعلق' }
      ],
    },
  },
  97: {
    text: "وَٱقْتَرَبَ ٱلْوَعْدُ ٱلْحَقُّ فَإِذَا هِىَ شَـٰخِصَةٌ أَبْصَـٰرُ ٱلَّذِينَ كَفَرُوا۟ يَـٰوَيْلَنَا قَدْ كُنَّا فِى غَفْلَةٍۢ مِّنْ هَـٰذَا بَلْ كُنَّا ظَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور (قیامت کا) سچا وعدہ قریب آجائے تو ناگاہ کافروں کی آنکھیں کھلی کی کھلی رہ جائیں (اور کہنے لگیں کہ) ہائے شامت ہم اس (حال) سے غفلت میں رہے بلکہ (اپنے حق میں) ظالم تھے",
    },
    words: [
      { id: '21:97:1', arabic: "وَٱقْتَرَبَ", transliteration: "wa-iq'taraba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And has approached", ur: "اور has approached" } },
      { id: '21:97:2', arabic: "ٱلْوَعْدُ", transliteration: "l-waʿdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the promise", ur: "the promise" } },
      { id: '21:97:3', arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] true", ur: "[the] true" } },
      { id: '21:97:4', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then behold", ur: "پھر behold" } },
      { id: '21:97:5', arabic: "هِىَ", transliteration: "hiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[it]", ur: "[it]" } },
      { id: '21:97:6', arabic: "شَـٰخِصَةٌ", transliteration: "shākhiṣatun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) staring", ur: "(are) staring" } },
      { id: '21:97:7', arabic: "أَبْصَـٰرُ", transliteration: "abṣāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) eyes", ur: "(the) eyes" } },
      { id: '21:97:8', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '21:97:9', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '21:97:10', arabic: "يَـٰوَيْلَنَا", transliteration: "yāwaylanā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O woe to us", ur: "اے woe کو us" } },
      { id: '21:97:11', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '21:97:12', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we had been", ur: "ہم had been" } },
      { id: '21:97:13', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:97:14', arabic: "غَفْلَةٍۢ", transliteration: "ghaflatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "heedlessness", ur: "heedlessness" } },
      { id: '21:97:15', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '21:97:16', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '21:97:17', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "nay", ur: "nay" } },
      { id: '21:97:18', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we were", ur: "ہم were" } },
      { id: '21:97:19', arabic: "ظَـٰلِمِينَ", transliteration: "ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wrongdoers", ur: "wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  98: {
    text: "إِنَّكُمْ وَمَا تَعْبُدُونَ مِن دُونِ ٱللَّهِ حَصَبُ جَهَنَّمَ أَنتُمْ لَهَا وَٰرِدُونَ",
    translation: {
      en: "",
      ur: "(کافرو اس روز) تم اور جن کی تم خدا کے سوا عبادت کرتے ہو دوزخ کا ایندھن ہوں گے۔ اور تم سب اس میں داخل ہو کر رہو گے",
    },
    words: [
      { id: '21:98:1', arabic: "إِنَّكُمْ", transliteration: "innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '21:98:2', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '21:98:3', arabic: "تَعْبُدُونَ", transliteration: "taʿbudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you worship", ur: "تم عبادت" } },
      { id: '21:98:4', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '21:98:5', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '21:98:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '21:98:7', arabic: "حَصَبُ", transliteration: "ḥaṣabu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) firewood", ur: "(are) firewood" } },
      { id: '21:98:8', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Hell", ur: "(of) جہنم" } },
      { id: '21:98:9', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "You", ur: "تم" } },
      { id: '21:98:10', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '21:98:11', arabic: "وَٰرِدُونَ", transliteration: "wāridūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "will come", ur: "will come" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  99: {
    text: "لَوْ كَانَ هَـٰٓؤُلَآءِ ءَالِهَةًۭ مَّا وَرَدُوهَا ۖ وَكُلٌّۭ فِيهَا خَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "اگر یہ لوگ (درحقیقت) معبود ہوتے تو اس میں داخل نہ ہوتے۔ سب اس میں ہمیشہ (جلتے) رہیں گے",
    },
    words: [
      { id: '21:99:1', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '21:99:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '21:99:3', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these", ur: "these" } },
      { id: '21:99:4', arabic: "ءَالِهَةًۭ", transliteration: "ālihatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gods", ur: "gods" } },
      { id: '21:99:5', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '21:99:6', arabic: "وَرَدُوهَا ۖ", transliteration: "waradūhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "they (would) have come to it", ur: "وہ لوگ (would) have come کو it" } },
      { id: '21:99:7', arabic: "وَكُلٌّۭ", transliteration: "wakullun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And all", ur: "اور سب" } },
      { id: '21:99:8', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '21:99:9', arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will abide forever", ur: "will abide forever" } }
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
        { from: 8, to: 9, label: 'تعلق' }
      ],
    },
  },
  100: {
    text: "لَهُمْ فِيهَا زَفِيرٌۭ وَهُمْ فِيهَا لَا يَسْمَعُونَ",
    translation: {
      en: "",
      ur: "وہاں ان کو چلاّنا ہوگا اور اس میں (کچھ) نہ سن سکیں گے",
    },
    words: [
      { id: '21:100:1', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '21:100:2', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '21:100:3', arabic: "زَفِيرٌۭ", transliteration: "zafīrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) sighing", ur: "(is) sighing" } },
      { id: '21:100:4', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '21:100:5', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '21:100:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '21:100:7', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will hear", ur: "will سننا" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'نفی + فعل' }
      ],
    },
  },
  101: {
    text: "إِنَّ ٱلَّذِينَ سَبَقَتْ لَهُم مِّنَّا ٱلْحُسْنَىٰٓ أُو۟لَـٰٓئِكَ عَنْهَا مُبْعَدُونَ",
    translation: {
      en: "",
      ur: "جن لوگوں کے لئے ہماری طرف سے پہلے بھلائی مقرر ہوچکی ہے۔ وہ اس سے دور رکھے جائیں گے",
    },
    words: [
      { id: '21:101:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '21:101:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '21:101:3', arabic: "سَبَقَتْ", transliteration: "sabaqat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has gone forth", ur: "has gone forth" } },
      { id: '21:101:4', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '21:101:5', arabic: "مِّنَّا", transliteration: "minnā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Us", ur: "سے Us" } },
      { id: '21:101:6', arabic: "ٱلْحُسْنَىٰٓ", transliteration: "l-ḥus'nā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good", ur: "the اچھا" } },
      { id: '21:101:7', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '21:101:8', arabic: "عَنْهَا", transliteration: "ʿanhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '21:101:9', arabic: "مُبْعَدُونَ", transliteration: "mub'ʿadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) removed far", ur: "(will be) removed far" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  102: {
    text: "لَا يَسْمَعُونَ حَسِيسَهَا ۖ وَهُمْ فِى مَا ٱشْتَهَتْ أَنفُسُهُمْ خَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "(یہاں تک کہ) اس کی آواز بھی تو نہیں سنیں گے۔ اور جو کچھ ان کا جی چاہے گا اس میں (یعنی) ہر طرح کے عیش اور لطف میں ہمیشہ رہیں گے",
    },
    words: [
      { id: '21:102:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '21:102:2', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will hear", ur: "وہ لوگ will سننا" } },
      { id: '21:102:3', arabic: "حَسِيسَهَا ۖ", transliteration: "ḥasīsahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) slightest sound of it", ur: "(the) slightest sound of it" } },
      { id: '21:102:4', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '21:102:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:102:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:102:7', arabic: "ٱشْتَهَتْ", transliteration: "ish'tahat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "desire", ur: "desire" } },
      { id: '21:102:8', arabic: "أَنفُسُهُمْ", transliteration: "anfusuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their souls", ur: "their souls" } },
      { id: '21:102:9', arabic: "خَـٰلِدُونَ", transliteration: "khālidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will abide forever", ur: "will abide forever" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  103: {
    text: "لَا يَحْزُنُهُمُ ٱلْفَزَعُ ٱلْأَكْبَرُ وَتَتَلَقَّىٰهُمُ ٱلْمَلَـٰٓئِكَةُ هَـٰذَا يَوْمُكُمُ ٱلَّذِى كُنتُمْ تُوعَدُونَ",
    translation: {
      en: "",
      ur: "ان کو (اس دن کا) بڑا بھاری خوف غمگین نہیں کرے گا۔ اور فرشتے ان کو لینے آئیں گے (اور کہیں گے کہ) یہی وہ دن ہے جس کا تم سے وعدہ کیا جاتا ہے",
    },
    words: [
      { id: '21:103:1', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '21:103:2', arabic: "يَحْزُنُهُمُ", transliteration: "yaḥzunuhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will grieve them", ur: "will grieve them" } },
      { id: '21:103:3', arabic: "ٱلْفَزَعُ", transliteration: "l-fazaʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the terror", ur: "the terror" } },
      { id: '21:103:4', arabic: "ٱلْأَكْبَرُ", transliteration: "l-akbaru", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "[the] greatest", ur: "[the] greatest" } },
      { id: '21:103:5', arabic: "وَتَتَلَقَّىٰهُمُ", transliteration: "watatalaqqāhumu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and will meet them", ur: "اور will meet them" } },
      { id: '21:103:6', arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '21:103:7', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '21:103:8', arabic: "يَوْمُكُمُ", transliteration: "yawmukumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) your Day", ur: "(is) your دن" } },
      { id: '21:103:9', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '21:103:10', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you were", ur: "تم were" } },
      { id: '21:103:11', arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "promised", ur: "promised" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  104: {
    text: "يَوْمَ نَطْوِى ٱلسَّمَآءَ كَطَىِّ ٱلسِّجِلِّ لِلْكُتُبِ ۚ كَمَا بَدَأْنَآ أَوَّلَ خَلْقٍۢ نُّعِيدُهُۥ ۚ وَعْدًا عَلَيْنَآ ۚ إِنَّا كُنَّا فَـٰعِلِينَ",
    translation: {
      en: "",
      ur: "جس دن ہم آسمان کو اس طرح لپیٹ لیں گے جیسے خطوں کا طومار لپیٹ لیتے ہیں۔ جس طرح ہم نے (کائنات کو) پہلے پیدا کیا اسی طرح دوبارہ پیدا کردیں گے۔ (یہ) وعدہ (جس کا پورا کرنا لازم) ہے۔ ہم (ایسا) ضرور کرنے والے ہیں",
    },
    words: [
      { id: '21:104:1', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(The) Day", ur: "(The) دن" } },
      { id: '21:104:2', arabic: "نَطْوِى", transliteration: "naṭwī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will fold", ur: "ہم will fold" } },
      { id: '21:104:3', arabic: "ٱلسَّمَآءَ", transliteration: "l-samāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heaven", ur: "the آسمان" } },
      { id: '21:104:4', arabic: "كَطَىِّ", transliteration: "kaṭayyi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "like (the) folding", ur: "like (the) folding" } },
      { id: '21:104:5', arabic: "ٱلسِّجِلِّ", transliteration: "l-sijili", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) a scroll", ur: "(of) a scroll" } },
      { id: '21:104:6', arabic: "لِلْكُتُبِ ۚ", transliteration: "lil'kutubi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for records", ur: "for records" } },
      { id: '21:104:7', arabic: "كَمَا", transliteration: "kamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "As", ur: "As" } },
      { id: '21:104:8', arabic: "بَدَأْنَآ", transliteration: "badanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We began", ur: "ہم began" } },
      { id: '21:104:9', arabic: "أَوَّلَ", transliteration: "awwala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) first", ur: "(the) first" } },
      { id: '21:104:10', arabic: "خَلْقٍۢ", transliteration: "khalqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "creation", ur: "تخلیق" } },
      { id: '21:104:11', arabic: "نُّعِيدُهُۥ ۚ", transliteration: "nuʿīduhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will repeat it", ur: "ہم will repeat it" } },
      { id: '21:104:12', arabic: "وَعْدًا", transliteration: "waʿdan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a promise", ur: "a promise" } },
      { id: '21:104:13', arabic: "عَلَيْنَآ ۚ", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon Us", ur: "پر Us" } },
      { id: '21:104:14', arabic: "إِنَّا", transliteration: "innā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, We ", ur: "بیشک, ہم " } },
      { id: '21:104:15', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We are", ur: "ہم are" } },
      { id: '21:104:16', arabic: "فَـٰعِلِينَ", transliteration: "fāʿilīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(the) Doers", ur: "(the) Doers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  105: {
    text: "وَلَقَدْ كَتَبْنَا فِى ٱلزَّبُورِ مِنۢ بَعْدِ ٱلذِّكْرِ أَنَّ ٱلْأَرْضَ يَرِثُهَا عِبَادِىَ ٱلصَّـٰلِحُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے نصیحت (کی کتاب یعنی تورات) کے بعد زبور میں لکھ دیا تھا کہ میرے نیکوکار بندے ملک کے وارث ہوں گے",
    },
    words: [
      { id: '21:105:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '21:105:2', arabic: "كَتَبْنَا", transliteration: "katabnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have written", ur: "ہم have written" } },
      { id: '21:105:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:105:4', arabic: "ٱلزَّبُورِ", transliteration: "l-zabūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Scripture", ur: "the Scripture" } },
      { id: '21:105:5', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "after", ur: "بعد" } },
      { id: '21:105:6', arabic: "بَعْدِ", transliteration: "baʿdi", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '21:105:7', arabic: "ٱلذِّكْرِ", transliteration: "l-dhik'ri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mention", ur: "the mention" } },
      { id: '21:105:8', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '21:105:9', arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earth ", ur: "زمین " } },
      { id: '21:105:10', arabic: "يَرِثُهَا", transliteration: "yarithuhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will inherit it", ur: "will inherit it" } },
      { id: '21:105:11', arabic: "عِبَادِىَ", transliteration: "ʿibādiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My slaves", ur: "My slaves" } },
      { id: '21:105:12', arabic: "ٱلصَّـٰلِحُونَ", transliteration: "l-ṣāliḥūna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the righteous", ur: "the نیک" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ],
    },
  },
  106: {
    text: "إِنَّ فِى هَـٰذَا لَبَلَـٰغًۭا لِّقَوْمٍ عَـٰبِدِينَ",
    translation: {
      en: "",
      ur: "عبادت کرنے والے لوگوں کے لئے اس میں (خدا کے حکموں کی) تبلیغ ہے",
    },
    words: [
      { id: '21:106:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '21:106:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '21:106:3', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '21:106:4', arabic: "لَبَلَـٰغًۭا", transliteration: "labalāghan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely is a Message", ur: "یقیناً is a Message" } },
      { id: '21:106:5', arabic: "لِّقَوْمٍ", transliteration: "liqawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '21:106:6', arabic: "عَـٰبِدِينَ", transliteration: "ʿābidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "worshippers", ur: "worshippers" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  107: {
    text: "وَمَآ أَرْسَلْنَـٰكَ إِلَّا رَحْمَةًۭ لِّلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "اور (اے محمدﷺ) ہم نے تم کو تمام جہان کے لئے رحمت (بنا کر) بھیجا ہے",
    },
    words: [
      { id: '21:107:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '21:107:2', arabic: "أَرْسَلْنَـٰكَ", transliteration: "arsalnāka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have sent you", ur: "ہم have sent تم" } },
      { id: '21:107:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '21:107:4', arabic: "رَحْمَةًۭ", transliteration: "raḥmatan", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "(as) a mercy", ur: "(as) a رحمت" } },
      { id: '21:107:5', arabic: "لِّلْعَـٰلَمِينَ", transliteration: "lil'ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for the worlds", ur: "for the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  108: {
    text: "قُلْ إِنَّمَا يُوحَىٰٓ إِلَىَّ أَنَّمَآ إِلَـٰهُكُمْ إِلَـٰهٌۭ وَٰحِدٌۭ ۖ فَهَلْ أَنتُم مُّسْلِمُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ مجھ پر (خدا کی طرح سے) یہ وحی آتی ہے کہ تم سب کا معبود خدائے واحد ہے۔ تو تم کو چاہیئے کہ فرمانبردار بن جاؤ",
    },
    words: [
      { id: '21:108:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '21:108:2', arabic: "إِنَّمَا", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '21:108:3', arabic: "يُوحَىٰٓ", transliteration: "yūḥā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it is revealed", ur: "it is revealed" } },
      { id: '21:108:4', arabic: "إِلَىَّ", transliteration: "ilayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to me", ur: "کو me" } },
      { id: '21:108:5', arabic: "أَنَّمَآ", transliteration: "annamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '21:108:6', arabic: "إِلَـٰهُكُمْ", transliteration: "ilāhukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your god", ur: "your اللہ" } },
      { id: '21:108:7', arabic: "إِلَـٰهٌۭ", transliteration: "ilāhun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) God", ur: "(is) اللہ" } },
      { id: '21:108:8', arabic: "وَٰحِدٌۭ ۖ", transliteration: "wāḥidun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "One", ur: "One" } },
      { id: '21:108:9', arabic: "فَهَلْ", transliteration: "fahal", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so will", ur: "so will" } },
      { id: '21:108:10', arabic: "أَنتُم", transliteration: "antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '21:108:11', arabic: "مُّسْلِمُونَ", transliteration: "mus'limūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "submit (to Him)", ur: "submit (کو Him)" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  109: {
    text: "فَإِن تَوَلَّوْا۟ فَقُلْ ءَاذَنتُكُمْ عَلَىٰ سَوَآءٍۢ ۖ وَإِنْ أَدْرِىٓ أَقَرِيبٌ أَم بَعِيدٌۭ مَّا تُوعَدُونَ",
    translation: {
      en: "",
      ur: "اگر یہ لوگ منہ پھیریں تو کہہ دو کہ میں نے تم کو سب کو یکساں (احکام الہیٰ سے) آگاہ کردیا ہے۔ اور مجھ کو معلوم نہیں کہ جس چیز کا تم سے وعدہ کیا جاتا ہے وہ (عن) قریب (آنے والی) ہے یا (اس کا وقت) دور ہے",
    },
    words: [
      { id: '21:109:1', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '21:109:2', arabic: "تَوَلَّوْا۟", transliteration: "tawallaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they turn away", ur: "وہ لوگ turn away" } },
      { id: '21:109:3', arabic: "فَقُلْ", transliteration: "faqul", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "then say", ur: "پھر کہو" } },
      { id: '21:109:4', arabic: "ءَاذَنتُكُمْ", transliteration: "ādhantukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I (have) announced to you", ur: "میں (have) announced کو تم" } },
      { id: '21:109:5', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "equally", ur: "equally" } },
      { id: '21:109:6', arabic: "سَوَآءٍۢ ۖ", transliteration: "sawāin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "equally", ur: "equally" } },
      { id: '21:109:7', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '21:109:8', arabic: "أَدْرِىٓ", transliteration: "adrī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I know", ur: "میں جاننا" } },
      { id: '21:109:9', arabic: "أَقَرِيبٌ", transliteration: "aqarībun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whether is near", ur: "whether is near" } },
      { id: '21:109:10', arabic: "أَم", transliteration: "am", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '21:109:11', arabic: "بَعِيدٌۭ", transliteration: "baʿīdun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far", ur: "far" } },
      { id: '21:109:12', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:109:13', arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are promised", ur: "تم are promised" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  110: {
    text: "إِنَّهُۥ يَعْلَمُ ٱلْجَهْرَ مِنَ ٱلْقَوْلِ وَيَعْلَمُ مَا تَكْتُمُونَ",
    translation: {
      en: "",
      ur: "اور جو بات پکار کی جائے وہ اسے بھی جانتا ہے اور جو تم پوشیدہ کرتے ہو اس سے بھی واقف ہے",
    },
    words: [
      { id: '21:110:1', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '21:110:2', arabic: "يَعْلَمُ", transliteration: "yaʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "knows", ur: "knows" } },
      { id: '21:110:3', arabic: "ٱلْجَهْرَ", transliteration: "l-jahra", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the declared", ur: "the declared" } },
      { id: '21:110:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '21:110:5', arabic: "ٱلْقَوْلِ", transliteration: "l-qawli", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "[the] speech", ur: "[the] speech" } },
      { id: '21:110:6', arabic: "وَيَعْلَمُ", transliteration: "wayaʿlamu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ل م", meaning: { en: "and He knows", ur: "اور وہ knows" } },
      { id: '21:110:7', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:110:8', arabic: "تَكْتُمُونَ", transliteration: "taktumūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you conceal", ur: "تم conceal" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصول + صلة' }
      ],
    },
  },
  111: {
    text: "وَإِنْ أَدْرِى لَعَلَّهُۥ فِتْنَةٌۭ لَّكُمْ وَمَتَـٰعٌ إِلَىٰ حِينٍۢ",
    translation: {
      en: "",
      ur: "اور میں نہیں جانتا شاید وہ تمہارے لئے آزمائش ہو اور ایک مدت تک (تم اس سے) فائدہ (اٹھاتے رہو)",
    },
    words: [
      { id: '21:111:1', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '21:111:2', arabic: "أَدْرِى", transliteration: "adrī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I know", ur: "میں جاننا" } },
      { id: '21:111:3', arabic: "لَعَلَّهُۥ", transliteration: "laʿallahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "perhaps it may be", ur: "perhaps it may be" } },
      { id: '21:111:4', arabic: "فِتْنَةٌۭ", transliteration: "fit'natun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a trial", ur: "a trial" } },
      { id: '21:111:5', arabic: "لَّكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '21:111:6', arabic: "وَمَتَـٰعٌ", transliteration: "wamatāʿun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and an enjoyment", ur: "اور an enjoyment" } },
      { id: '21:111:7', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '21:111:8', arabic: "حِينٍۢ", transliteration: "ḥīnin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a time", ur: "a وقت" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  112: {
    text: "قَـٰلَ رَبِّ ٱحْكُم بِٱلْحَقِّ ۗ وَرَبُّنَا ٱلرَّحْمَـٰنُ ٱلْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ",
    translation: {
      en: "",
      ur: "پیغمبر نے کہا کہ اے میرے پروردگار حق کے ساتھ فیصلہ کردے۔ اور ہمارا پروردگار بڑا مہربان ہے اسی سے ان باتوں میں جو تم بیان کرتے ہو مدد مانگی جاتی ہے",
    },
    words: [
      { id: '21:112:1', arabic: "قَـٰلَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '21:112:2', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '21:112:3', arabic: "ٱحْكُم", transliteration: "uḥ'kum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "judge", ur: "judge" } },
      { id: '21:112:4', arabic: "بِٱلْحَقِّ ۗ", transliteration: "bil-ḥaqi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in truth", ur: "میں سچ" } },
      { id: '21:112:5', arabic: "وَرَبُّنَا", transliteration: "warabbunā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And our Lord", ur: "اور our رب" } },
      { id: '21:112:6', arabic: "ٱلرَّحْمَـٰنُ", transliteration: "l-raḥmānu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the Most Gracious", ur: "(is) the بڑا مہربان" } },
      { id: '21:112:7', arabic: "ٱلْمُسْتَعَانُ", transliteration: "l-mus'taʿānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Whose help is sought", ur: "the One Whose help is sought" } },
      { id: '21:112:8', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '21:112:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '21:112:10', arabic: "تَصِفُونَ", transliteration: "taṣifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you attribute", ur: "تم attribute" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصول + صلة' }
      ],
    },
  },
};

export default SURAH_21_TREEBANK;
