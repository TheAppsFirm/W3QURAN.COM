/**
 * Surah Al-Mu'minun (The Believers) - Surah 23
 * Quranic Arabic Treebank Data
 * First 10 Ayahs - Complete word-by-word grammatical analysis
 *
 * Theme: Qualities of successful believers, creation, resurrection
 * Revelation: Makkan
 * Special: Opens with characteristics of successful believers
 */

const SURAH_23_TREEBANK = {
  1: { // Ayah 1: قَدْ أَفْلَحَ الْمُؤْمِنُونَ
    text: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ',
    translation: {
      en: 'Certainly the believers have succeeded.',
      ur: 'یقیناً مومنین فلاح پا گئے',
    },
    words: [
      {
        id: '23:1:1',
        arabic: 'قَدْ',
        transliteration: 'qad',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: 'Certainly/Indeed',
          ur: 'یقیناً/بیشک',
        },
        grammarRole: 'tahqiq',
        grammarExplanations: {
          en: 'Particle of certainty (حرف تحقيق) - before perfect verb emphasizes completion and certainty.',
          ur: 'حرف تحقیق - فعل ماضی سے پہلے تاکید اور یقین کے لیے۔',
        },
      },
      {
        id: '23:1:2',
        arabic: 'أَفْلَحَ',
        transliteration: 'aflaha',
        pos: ['V'],
        posLabel: 'V',
        root: 'ف ل ح',
        meaning: {
          en: 'Has succeeded',
          ur: 'کامیاب ہوا/فلاح پائی',
        },
        grammarRole: 'fil-madi',
        grammarExplanations: {
          en: 'Perfect verb Form IV - implies attainment of ultimate success. Root means "to cleave/cultivate" hence achieve desired result.',
          ur: 'فعل ماضی باب افعال - حتمی کامیابی۔ اصل معنی چیرنا/کاشت کرنا لہذا مطلوبہ نتیجہ پانا۔',
        },
      },
      {
        id: '23:1:3',
        arabic: 'الْمُؤْمِنُونَ',
        transliteration: "al-mu'minoona",
        pos: ['AP'],
        posLabel: 'AP',
        root: 'أ م ن',
        meaning: {
          en: 'The believers',
          ur: 'مومنین',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject (فاعل) - active participle Form IV, masculine plural nominative. Those who have faith.',
          ur: 'فاعل - اسم فاعل باب افعال جمع مذکر مرفوع۔ ایمان والے۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },

  2: { // Ayah 2: الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ
    text: 'الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ',
    translation: {
      en: 'Those who are humble in their prayers.',
      ur: 'جو اپنی نمازوں میں خشوع کرنے والے ہیں',
    },
    words: [
      {
        id: '23:2:1',
        arabic: 'الَّذِينَ',
        transliteration: 'alladheena',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'Those who',
          ur: 'جو لوگ',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Relative pronoun - begins description/attribute of believers. First quality mentioned.',
          ur: 'اسم موصول - مومنین کی صفات کا آغاز۔ پہلی صفت۔',
        },
      },
      {
        id: '23:2:2',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Independent pronoun - subject of nominal sentence within relative clause.',
          ur: 'ضمیر منفصل - جملہ اسمیہ کا مبتدأ۔',
        },
      },
      {
        id: '23:2:3',
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
          en: 'Preposition of location - "during/in the state of".',
          ur: 'حرف جار - حالت یا وقت کے لیے۔',
        },
      },
      {
        id: '23:2:4',
        arabic: 'صَلَاتِهِمْ',
        transliteration: 'salaatihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ص ل و',
        meaning: {
          en: 'Their prayers',
          ur: 'اپنی نمازوں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive noun + possessive pronoun. Singular form صَلَاة can mean individual or collective prayers.',
          ur: 'مجرور + ضمیر ملکیتی۔ واحد صَلَاة فرداً یا مجموعی نماز۔',
        },
      },
      {
        id: '23:2:5',
        arabic: 'خَاشِعُونَ',
        transliteration: "khaashi'oona",
        pos: ['AP'],
        posLabel: 'AP',
        root: 'خ ش ع',
        meaning: {
          en: 'Humble/Devout',
          ur: 'خشوع کرنے والے',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate (خبر) - active participle, nominative masculine plural. خُشُوع is humility with concentration.',
          ur: 'خبر - اسم فاعل جمع مذکر مرفوع۔ خُشُوع عاجزی مع توجہ۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  3: { // Ayah 3: وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ
    text: 'وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ',
    translation: {
      en: 'And those who turn away from ill speech.',
      ur: 'اور جو لغو باتوں سے منہ پھیرنے والے ہیں',
    },
    words: [
      {
        id: '23:3:1',
        arabic: 'وَالَّذِينَ',
        transliteration: 'walladheena',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: {
          en: 'And those who',
          ur: 'اور جو لوگ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + relative pronoun - second quality of believers.',
          ur: 'واو عاطفہ + اسم موصول - مومنین کی دوسری صفت۔',
        },
      },
      {
        id: '23:3:2',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Independent pronoun - subject.',
          ur: 'ضمیر منفصل - مبتدأ۔',
        },
      },
      {
        id: '23:3:3',
        arabic: 'عَنِ',
        transliteration: "'ani",
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From',
          ur: 'سے',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition - indicates turning away FROM something.',
          ur: 'حرف جار - کسی چیز سے دور ہونا۔',
        },
      },
      {
        id: '23:3:4',
        arabic: 'اللَّغْوِ',
        transliteration: 'al-laghwi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ل غ و',
        meaning: {
          en: 'Ill speech/Vain talk',
          ur: 'لغو باتیں/بیہودہ',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - includes all speech without benefit: lies, backbiting, frivolity.',
          ur: 'مجرور - بے فائدہ گفتگو: جھوٹ، غیبت، فضول۔',
        },
      },
      {
        id: '23:3:5',
        arabic: 'مُعْرِضُونَ',
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
          en: 'Predicate - active participle Form IV, nominative plural. They actively avoid.',
          ur: 'خبر - اسم فاعل باب افعال مرفوع جمع۔ فعال طور پر پرہیز۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  4: { // Ayah 4: وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ
    text: 'وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ',
    translation: {
      en: 'And those who are active in paying zakah.',
      ur: 'اور جو زکوٰۃ ادا کرنے والے ہیں',
    },
    words: [
      {
        id: '23:4:1',
        arabic: 'وَالَّذِينَ',
        transliteration: 'walladheena',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: {
          en: 'And those who',
          ur: 'اور جو لوگ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + relative - third quality.',
          ur: 'واو + موصول - تیسری صفت۔',
        },
      },
      {
        id: '23:4:2',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Subject pronoun.',
          ur: 'ضمیر مبتدأ۔',
        },
      },
      {
        id: '23:4:3',
        arabic: 'لِلزَّكَاةِ',
        transliteration: 'liz-zakaati',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ز ك و',
        meaning: {
          en: 'Of zakah',
          ur: 'زکوٰۃ کے لیے',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'لِ + genitive noun. زَكَاة from "purification" - obligatory charity that purifies wealth.',
          ur: 'لام + مجرور۔ زَكَاة پاکیزگی سے - فرض صدقہ جو مال کو پاک کرے۔',
        },
      },
      {
        id: '23:4:4',
        arabic: 'فَاعِلُونَ',
        transliteration: "faa'iloona",
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ف ع ل',
        meaning: {
          en: 'Active doers',
          ur: 'کرنے والے',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate - active participle, nominative plural. Emphasizes active performance not just belief.',
          ur: 'خبر - اسم فاعل مرفوع جمع۔ صرف عقیدہ نہیں بلکہ عمل پر زور۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  5: { // Ayah 5: وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ
    text: 'وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ',
    translation: {
      en: 'And those who guard their private parts.',
      ur: 'اور جو اپنی شرمگاہوں کی حفاظت کرنے والے ہیں',
    },
    words: [
      {
        id: '23:5:1',
        arabic: 'وَالَّذِينَ',
        transliteration: 'walladheena',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: {
          en: 'And those who',
          ur: 'اور جو لوگ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + relative - fourth quality.',
          ur: 'واو + موصول - چوتھی صفت۔',
        },
      },
      {
        id: '23:5:2',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Subject pronoun.',
          ur: 'ضمیر مبتدأ۔',
        },
      },
      {
        id: '23:5:3',
        arabic: 'لِفُرُوجِهِمْ',
        transliteration: 'lifuroojihim',
        pos: ['P', 'N', 'PRON'],
        posLabel: 'P+N+PRON',
        root: 'ف ر ج',
        meaning: {
          en: 'Of their private parts',
          ur: 'اپنی شرمگاہوں کی',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + plural noun + pronoun. Euphemistic term for genitals.',
          ur: 'حرف جار + جمع + ضمیر۔ شرمگاہ کے لیے مہذب لفظ۔',
        },
      },
      {
        id: '23:5:4',
        arabic: 'حَافِظُونَ',
        transliteration: 'haafidhoona',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ح ف ظ',
        meaning: {
          en: 'Guarding/Protecting',
          ur: 'حفاظت کرنے والے',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate - active participle nominative plural. Implies constant vigilance.',
          ur: 'خبر - اسم فاعل جمع مرفوع۔ مستقل نگرانی۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  6: { // Ayah 6: إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ
    text: 'إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ',
    translation: {
      en: 'Except from their wives or those their right hands possess, for indeed, they are not to be blamed.',
      ur: 'سوائے اپنی بیویوں کے یا جو ان کی ملکیت میں ہوں ان پر کوئی ملامت نہیں',
    },
    words: [
      {
        id: '23:6:1',
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
          en: 'Exception particle - establishes lawful exception to guarding.',
          ur: 'اداة استثناء - حفاظت سے جائز استثناء۔',
        },
      },
      {
        id: '23:6:2',
        arabic: 'عَلَىٰ',
        transliteration: "'alaa",
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'With/Upon',
          ur: 'پر',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition - here means "with regard to".',
          ur: 'حرف جار - یہاں بمعنی "کے معاملے میں"۔',
        },
      },
      {
        id: '23:6:3',
        arabic: 'أَزْوَاجِهِمْ',
        transliteration: 'azwaajihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ز و ج',
        meaning: {
          en: 'Their wives/spouses',
          ur: 'ان کی بیویاں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive plural + pronoun. زَوْج means spouse (can be male or female).',
          ur: 'مجرور جمع + ضمیر۔ زَوْج یعنی ہمسر (مرد یا عورت)۔',
        },
      },
      {
        id: '23:6:4',
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
          en: 'Disjunctive conjunction - alternative category.',
          ur: 'حرف عطف تخییر - دوسرا زمرہ۔',
        },
      },
      {
        id: '23:6:5',
        arabic: 'مَا',
        transliteration: 'maa',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'What/Whom',
          ur: 'جو',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Relative pronoun - coordinated with أَزْوَاجِهِمْ.',
          ur: 'اسم موصول - أَزْوَاجِهِمْ پر معطوف۔',
        },
      },
      {
        id: '23:6:6',
        arabic: 'مَلَكَتْ',
        transliteration: 'malakat',
        pos: ['V'],
        posLabel: 'V',
        root: 'م ل ك',
        meaning: {
          en: 'Possessed/Owned',
          ur: 'مالک ہوں',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause verb - perfect feminine (أَيْمَان is grammatically feminine).',
          ur: 'صلہ - فعل ماضی مؤنث (أَيْمَان مؤنث ہے)۔',
        },
      },
      {
        id: '23:6:7',
        arabic: 'أَيْمَانُهُمْ',
        transliteration: 'aymaanuhum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ي م ن',
        meaning: {
          en: 'Their right hands',
          ur: 'ان کے دائیں ہاتھ',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject - plural of يَمِين (right hand). Idiomatic for "what one possesses".',
          ur: 'فاعل - يَمِين کی جمع۔ ملکیت کا محاورہ۔',
        },
      },
      {
        id: '23:6:8',
        arabic: 'فَإِنَّهُمْ',
        transliteration: 'fa-innahum',
        pos: ['CONJ', 'EMPH', 'PRON'],
        posLabel: 'CONJ+EMPH+PRON',
        root: null,
        meaning: {
          en: 'For indeed they',
          ur: 'پس بیشک وہ',
        },
        grammarRole: 'talil',
        grammarExplanations: {
          en: 'Explanatory فَ + emphatic إِنَّ + pronoun. Explains why exception is valid.',
          ur: 'فاء تعلیل + إِنَّ + ضمیر۔ استثناء کی وضاحت۔',
        },
      },
      {
        id: '23:6:9',
        arabic: 'غَيْرُ',
        transliteration: 'ghayru',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ ي ر',
        meaning: {
          en: 'Not/Other than',
          ur: 'نہیں',
        },
        grammarRole: 'khabar-inna',
        grammarExplanations: {
          en: 'Predicate of إِنَّ - nominative, negates blame.',
          ur: 'خبر إِنَّ - مرفوع، ملامت کی نفی۔',
        },
      },
      {
        id: '23:6:10',
        arabic: 'مَلُومِينَ',
        transliteration: 'maloomeena',
        pos: ['PP'],
        posLabel: 'PP',
        root: 'ل و م',
        meaning: {
          en: 'Blamed',
          ur: 'ملامت کیے گئے',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive passive participle - "those who are blamed".',
          ur: 'مضاف الیہ - اسم مفعول جمع۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'موصول + صلة' },
      { from: 6, to: 7, label: 'فعل + فاعل' },
      { from: 7, to: 9, label: 'مبتدأ + خبر' },
      { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  7: { // Ayah 7: فَمَنِ ابْتَغَىٰ وَرَاءَ ذَٰلِكَ فَأُولَٰئِكَ هُمُ الْعَادُونَ
    text: 'فَمَنِ ابْتَغَىٰ وَرَاءَ ذَٰلِكَ فَأُولَٰئِكَ هُمُ الْعَادُونَ',
    translation: {
      en: 'But whoever seeks beyond that, then those are the transgressors.',
      ur: 'پس جو اس سے آگے کچھ چاہے تو وہی لوگ حد سے گزرنے والے ہیں',
    },
    words: [
      {
        id: '23:7:1',
        arabic: 'فَمَنِ',
        transliteration: 'famani',
        pos: ['CONJ', 'COND'],
        posLabel: 'CONJ+COND',
        root: null,
        meaning: {
          en: 'But whoever',
          ur: 'پس جو',
        },
        grammarRole: 'shart',
        grammarExplanations: {
          en: 'Result فَ + conditional مَن - introduces warning about transgression.',
          ur: 'فاء + مَن شرطیہ - حد سے گزرنے کی تنبیہ۔',
        },
      },
      {
        id: '23:7:2',
        arabic: 'ابْتَغَىٰ',
        transliteration: 'ibtaghaa',
        pos: ['V'],
        posLabel: 'V',
        root: 'ب غ ي',
        meaning: {
          en: 'Seeks/Desires',
          ur: 'چاہے/تلاش کرے',
        },
        grammarRole: 'fil-shart',
        grammarExplanations: {
          en: 'Conditional verb Form VIII - implies seeking earnestly/deliberately.',
          ur: 'فعل شرط باب افتعال - جان بوجھ کر تلاش۔',
        },
      },
      {
        id: '23:7:3',
        arabic: 'وَرَاءَ',
        transliteration: "waraa'a",
        pos: ['N'],
        posLabel: 'N',
        root: 'و ر ي',
        meaning: {
          en: 'Beyond',
          ur: 'آگے/سوا',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Adverb of place - "behind/beyond" these lawful options.',
          ur: 'ظرف مکان - ان جائز اختیارات سے آگے۔',
        },
      },
      {
        id: '23:7:4',
        arabic: 'ذَٰلِكَ',
        transliteration: 'dhaalika',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'That',
          ur: 'اس',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Demonstrative - refers to lawful relations mentioned.',
          ur: 'اسم اشارہ - مذکورہ جائز تعلقات۔',
        },
      },
      {
        id: '23:7:5',
        arabic: 'فَأُولَٰئِكَ',
        transliteration: "fa-ulaa'ika",
        pos: ['CONJ', 'DEM'],
        posLabel: 'CONJ+DEM',
        root: null,
        meaning: {
          en: 'Then those',
          ur: 'تو وہی',
        },
        grammarRole: 'jawab-shart',
        grammarExplanations: {
          en: 'Result فَ + demonstrative plural - consequence of transgression.',
          ur: 'فاء جواب + اسم اشارہ جمع۔',
        },
      },
      {
        id: '23:7:6',
        arabic: 'هُمُ',
        transliteration: 'humu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہی',
        },
        grammarRole: 'damir-fasl',
        grammarExplanations: {
          en: 'Separating pronoun (ضمير الفصل) - emphasizes exclusivity.',
          ur: 'ضمیر فصل - تخصیص کے لیے۔',
        },
      },
      {
        id: '23:7:7',
        arabic: 'الْعَادُونَ',
        transliteration: "al-'aadoona",
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ع د و',
        meaning: {
          en: 'The transgressors',
          ur: 'حد سے گزرنے والے',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate - active participle, nominative plural. Those who transgress limits.',
          ur: 'خبر - اسم فاعل جمع مرفوع۔ حدود سے تجاوز۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'شرط + فعل' },
      { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  8: { // Ayah 8: وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ
    text: 'وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ',
    translation: {
      en: 'And those who are keepers of their trusts and their covenants.',
      ur: 'اور جو اپنی امانتوں اور عہد کی حفاظت کرنے والے ہیں',
    },
    words: [
      {
        id: '23:8:1',
        arabic: 'وَالَّذِينَ',
        transliteration: 'walladheena',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: {
          en: 'And those who',
          ur: 'اور جو لوگ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + relative - fifth quality of believers.',
          ur: 'واو + موصول - پانچویں صفت۔',
        },
      },
      {
        id: '23:8:2',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Subject pronoun.',
          ur: 'ضمیر مبتدأ۔',
        },
      },
      {
        id: '23:8:3',
        arabic: 'لِأَمَانَاتِهِمْ',
        transliteration: 'li-amanaatihim',
        pos: ['P', 'N', 'PRON'],
        posLabel: 'P+N+PRON',
        root: 'أ م ن',
        meaning: {
          en: 'Of their trusts',
          ur: 'اپنی امانتوں کی',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + plural noun + pronoun. أَمَانَة includes all entrusted matters.',
          ur: 'حرف جار + جمع + ضمیر۔ أَمَانَة ہر قسم کی امانت۔',
        },
      },
      {
        id: '23:8:4',
        arabic: 'وَعَهْدِهِمْ',
        transliteration: "wa'ahdihim",
        pos: ['CONJ', 'N', 'PRON'],
        posLabel: 'CONJ+N+PRON',
        root: 'ع ه د',
        meaning: {
          en: 'And their covenant',
          ur: 'اور اپنے عہد',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Conjunction + singular genitive + pronoun. عَهْد is any promise or covenant.',
          ur: 'واو + واحد مجرور + ضمیر۔ عَهْد ہر قول و قرار۔',
        },
      },
      {
        id: '23:8:5',
        arabic: 'رَاعُونَ',
        transliteration: "raa'oona",
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ر ع ي',
        meaning: {
          en: 'Keepers/Observers',
          ur: 'نگہبان/حفاظت کرنے والے',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate - active participle nominative plural from رَعَى (to shepherd/tend).',
          ur: 'خبر - اسم فاعل جمع مرفوع۔ رَعَى سے یعنی نگہبانی۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'مبتدأ + خبر' }
      ],
    },
  },

  9: { // Ayah 9: وَالَّذِينَ هُمْ عَلَىٰ صَلَوَاتِهِمْ يُحَافِظُونَ
    text: 'وَالَّذِينَ هُمْ عَلَىٰ صَلَوَاتِهِمْ يُحَافِظُونَ',
    translation: {
      en: 'And those who carefully maintain their prayers.',
      ur: 'اور جو اپنی نمازوں کی محافظت کرتے ہیں',
    },
    words: [
      {
        id: '23:9:1',
        arabic: 'وَالَّذِينَ',
        transliteration: 'walladheena',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: {
          en: 'And those who',
          ur: 'اور جو لوگ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + relative - sixth quality, bookends with prayer from ayah 2.',
          ur: 'واو + موصول - چھٹی صفت، آیت ۲ کی نماز سے دائرہ مکمل۔',
        },
      },
      {
        id: '23:9:2',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Subject pronoun.',
          ur: 'ضمیر مبتدأ۔',
        },
      },
      {
        id: '23:9:3',
        arabic: 'عَلَىٰ',
        transliteration: "'alaa",
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'Upon/Over',
          ur: 'پر',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition - indicates firm commitment to.',
          ur: 'حرف جار - پختہ وابستگی۔',
        },
      },
      {
        id: '23:9:4',
        arabic: 'صَلَوَاتِهِمْ',
        transliteration: 'salawaatihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ص ل و',
        meaning: {
          en: 'Their prayers',
          ur: 'اپنی نمازوں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive plural + pronoun. Plural صَلَوَات indicates all five daily prayers.',
          ur: 'مجرور جمع + ضمیر۔ جمع صَلَوَات پانچوں نمازیں۔',
        },
      },
      {
        id: '23:9:5',
        arabic: 'يُحَافِظُونَ',
        transliteration: 'yuhaafidhoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'ح ف ظ',
        meaning: {
          en: 'They carefully maintain',
          ur: 'محافظت کرتے ہیں',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate verb - Form III imperfect implies mutual/intensive action. More than just praying - protecting prayer times and quality.',
          ur: 'خبر جملہ فعلیہ - باب مفاعلہ۔ صرف پڑھنا نہیں بلکہ وقت اور کیفیت کی حفاظت۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 2, to: 5, label: 'مبتدأ + خبر' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },

  10: { // Ayah 10: أُولَٰئِكَ هُمُ الْوَارِثُونَ
    text: 'أُولَٰئِكَ هُمُ الْوَارِثُونَ',
    translation: {
      en: 'Those are the inheritors.',
      ur: 'یہی لوگ وارث ہیں',
    },
    words: [
      {
        id: '23:10:1',
        arabic: 'أُولَٰئِكَ',
        transliteration: "ulaa'ika",
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'Those',
          ur: 'یہی',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative pronoun - subject, refers to believers described in verses 1-9.',
          ur: 'اسم اشارہ - مبتدأ، آیات ۱-۹ میں بیان کردہ مومنین۔',
        },
      },
      {
        id: '23:10:2',
        arabic: 'هُمُ',
        transliteration: 'humu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They (are)',
          ur: 'وہی ہیں',
        },
        grammarRole: 'damir-fasl',
        grammarExplanations: {
          en: 'Separating pronoun - emphasizes that ONLY these people are inheritors.',
          ur: 'ضمیر فصل - صرف یہی لوگ وارث ہیں۔',
        },
      },
      {
        id: '23:10:3',
        arabic: 'الْوَارِثُونَ',
        transliteration: 'al-waarithoona',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'و ر ث',
        meaning: {
          en: 'The inheritors',
          ur: 'وارث',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate - active participle nominative plural. They inherit Paradise (explained in next verse).',
          ur: 'خبر - اسم فاعل جمع مرفوع۔ جنت کے وارث (اگلی آیت میں وضاحت)۔',
        },
      },
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'مبتدأ + خبر' }
      ],
    },
  },
  11: { // Ayah 11
    text: "ٱلَّذِينَ يَرِثُونَ ٱلْفِرْدَوْسَ هُمْ فِيهَا خَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "(یعنی) جو بہشت کی میراث حاصل کریں گے۔ اور اس میں ہمیشہ رہیں گے",
    },
    words: [
      {
        id: "23:11:1",
        arabic: "ٱلَّذِينَ",
        transliteration: "alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Who",
          ur: "جو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:11:2",
        arabic: "يَرِثُونَ",
        transliteration: "yarithūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "will inherit",
          ur: "گا/گے inherit",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:11:3",
        arabic: "ٱلْفِرْدَوْسَ",
        transliteration: "l-fir'dawsa",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the Paradise",
          ur: "the جنت",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:11:4",
        arabic: "هُمْ",
        transliteration: "hum",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "They",
          ur: "وہ لوگ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:11:5",
        arabic: "فِيهَا",
        transliteration: "fīhā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "therein",
          ur: "therein",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:11:6",
        arabic: "خَـٰلِدُونَ",
        transliteration: "khālidūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(will) abide forever",
          ur: "گا/گے abide forever",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'جار + مجرور' }
        ],
    },
  },
  12: { // Ayah 12
    text: "وَلَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ مِن سُلَـٰلَةٍۢ مِّن طِينٍۢ",
    translation: {
      en: "",
      ur: "اور ہم نے انسان کو مٹی کے خلاصے سے پیدا کیا ہے",
    },
    words: [
      {
        id: "23:12:1",
        arabic: "وَلَقَدْ",
        transliteration: "walaqad",
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: "And indeed",
          ur: "اور بے شک",
        },
        grammarRole: 'emphasis',
        grammarExplanations: {
          en: "PART - emphasis.",
          ur: "PART - emphasis۔",
        },
      },
      {
        id: "23:12:2",
        arabic: "خَلَقْنَا",
        transliteration: "khalaqnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We created",
          ur: "ہم پیدا کیا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:12:3",
        arabic: "ٱلْإِنسَـٰنَ",
        transliteration: "l-insāna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the humankind",
          ur: "the humankind",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:12:4",
        arabic: "مِن",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:12:5",
        arabic: "سُلَـٰلَةٍۢ",
        transliteration: "sulālatin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "an essence",
          ur: "an essence",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:12:6",
        arabic: "مِّن",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:12:7",
        arabic: "طِينٍۢ",
        transliteration: "ṭīnin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "clay",
          ur: "clay",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'جار + مجرور' }
        ],
    },
  },
  13: { // Ayah 13
    text: "ثُمَّ جَعَلْنَـٰهُ نُطْفَةًۭ فِى قَرَارٍۢ مَّكِينٍۢ",
    translation: {
      en: "",
      ur: "پھر اس کو ایک مضبوط (اور محفوظ) جگہ میں نطفہ بنا کر رکھا",
    },
    words: [
      {
        id: "23:13:1",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:13:2",
        arabic: "جَعَلْنَـٰهُ",
        transliteration: "jaʿalnāhu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We placed him",
          ur: "ہم placed اسے",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:13:3",
        arabic: "نُطْفَةًۭ",
        transliteration: "nuṭ'fatan",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(as) a semen-drop",
          ur: "as a semen-drop",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:13:4",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:13:5",
        arabic: "قَرَارٍۢ",
        transliteration: "qarārin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a resting place",
          ur: "a resting place",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:13:6",
        arabic: "مَّكِينٍۢ",
        transliteration: "makīnin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "firm",
          ur: "firm",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' }
        ],
    },
  },
  14: { // Ayah 14
    text: "ثُمَّ خَلَقْنَا ٱلنُّطْفَةَ عَلَقَةًۭ فَخَلَقْنَا ٱلْعَلَقَةَ مُضْغَةًۭ فَخَلَقْنَا ٱلْمُضْغَةَ عِظَـٰمًۭا فَكَسَوْنَا ٱلْعِظَـٰمَ لَحْمًۭا ثُمَّ أَنشَأْنَـٰهُ خَلْقًا ءَاخَرَ ۚ فَتَبَارَكَ ٱللَّهُ أَحْسَنُ ٱلْخَـٰلِقِينَ",
    translation: {
      en: "",
      ur: "پھر نطفے کا لوتھڑا بنایا۔ پھر لوتھڑے کی بوٹی بنائی پھر بوٹی کی ہڈیاں بنائیں پھر ہڈیوں پر گوشت (پوست) چڑھایا۔ پھر اس کو نئی صورت میں بنا دیا۔ تو خدا جو سب سے بہتر بنانے والا بڑا بابرکت ہے",
    },
    words: [
      {
        id: "23:14:1",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:2",
        arabic: "خَلَقْنَا",
        transliteration: "khalaqnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We created",
          ur: "ہم پیدا کیا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:14:3",
        arabic: "ٱلنُّطْفَةَ",
        transliteration: "l-nuṭ'fata",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the semen-drop",
          ur: "the semen-drop",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:4",
        arabic: "عَلَقَةًۭ",
        transliteration: "ʿalaqatan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(into) a clinging substance",
          ur: "into a clinging substance",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:5",
        arabic: "فَخَلَقْنَا",
        transliteration: "fakhalaqnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "then We created",
          ur: "پھر ہم پیدا کیا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:14:6",
        arabic: "ٱلْعَلَقَةَ",
        transliteration: "l-ʿalaqata",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the clinging substance",
          ur: "the clinging substance",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:7",
        arabic: "مُضْغَةًۭ",
        transliteration: "muḍ'ghatan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(into) an embryonic lump",
          ur: "into an embryonic lump",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:8",
        arabic: "فَخَلَقْنَا",
        transliteration: "fakhalaqnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "then We created",
          ur: "پھر ہم پیدا کیا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:14:9",
        arabic: "ٱلْمُضْغَةَ",
        transliteration: "l-muḍ'ghata",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the embryonic lump",
          ur: "the embryonic lump",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:10",
        arabic: "عِظَـٰمًۭا",
        transliteration: "ʿiẓāman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(into) bones",
          ur: "into bones",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:11",
        arabic: "فَكَسَوْنَا",
        transliteration: "fakasawnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "then We clothed",
          ur: "پھر ہم clothed",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:14:12",
        arabic: "ٱلْعِظَـٰمَ",
        transliteration: "l-ʿiẓāma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the bones",
          ur: "the bones",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:13",
        arabic: "لَحْمًۭا",
        transliteration: "laḥman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(with) flesh",
          ur: "کے ساتھ flesh",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:14",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:15",
        arabic: "أَنشَأْنَـٰهُ",
        transliteration: "anshanāhu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We produce it",
          ur: "ہم produce یہ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:14:16",
        arabic: "خَلْقًا",
        transliteration: "khalqan",
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ل ق',
        meaning: {
          en: "(as) a creation",
          ur: "as a creation",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:17",
        arabic: "ءَاخَرَ ۚ",
        transliteration: "ākhara",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "another",
          ur: "another",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:18",
        arabic: "فَتَبَارَكَ",
        transliteration: "fatabāraka",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "So blessed is",
          ur: "So blessed ہے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:19",
        arabic: "ٱللَّهُ",
        transliteration: "l-lahu",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: "Allah",
          ur: "اللہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:14:20",
        arabic: "أَحْسَنُ",
        transliteration: "aḥsanu",
        pos: ['V'],
        posLabel: 'V',
        root: 'ح س ن',
        meaning: {
          en: "(the) Best",
          ur: "the Best",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:14:21",
        arabic: "ٱلْخَـٰلِقِينَ",
        transliteration: "l-khāliqīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the Creators",
          ur: "of the Creators",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'فعل + فاعل' },
          { from: 15, to: 16, label: 'فعل + فاعل' },
          { from: 20, to: 21, label: 'فعل + فاعل' }
        ],
    },
  },
  15: { // Ayah 15
    text: "ثُمَّ إِنَّكُم بَعْدَ ذَٰلِكَ لَمَيِّتُونَ",
    translation: {
      en: "",
      ur: "پھر اس کے بعد تم مرجاتے ہو",
    },
    words: [
      {
        id: "23:15:1",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:15:2",
        arabic: "إِنَّكُم",
        transliteration: "innakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "indeed, you",
          ur: "indeed, تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:15:3",
        arabic: "بَعْدَ",
        transliteration: "baʿda",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "after",
          ur: "after",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:15:4",
        arabic: "ذَٰلِكَ",
        transliteration: "dhālika",
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: "that",
          ur: "کہ/وہ",
        },
        grammarRole: 'demonstrative',
        grammarExplanations: {
          en: "DEM - demonstrative.",
          ur: "DEM - demonstrative۔",
        },
      },
      {
        id: "23:15:5",
        arabic: "لَمَيِّتُونَ",
        transliteration: "lamayyitūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely (will) die",
          ur: "یقیناً گا/گے die",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  16: { // Ayah 16
    text: "ثُمَّ إِنَّكُمْ يَوْمَ ٱلْقِيَـٰمَةِ تُبْعَثُونَ",
    translation: {
      en: "",
      ur: "پھر قیامت کے روز اُٹھا کھڑے کئے جاؤ گے",
    },
    words: [
      {
        id: "23:16:1",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:16:2",
        arabic: "إِنَّكُمْ",
        transliteration: "innakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "indeed, you",
          ur: "indeed, تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:16:3",
        arabic: "يَوْمَ",
        transliteration: "yawma",
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: "(on the) Day",
          ur: "دن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:16:4",
        arabic: "ٱلْقِيَـٰمَةِ",
        transliteration: "l-qiyāmati",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the Resurrection",
          ur: "of the Resurrection",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:16:5",
        arabic: "تُبْعَثُونَ",
        transliteration: "tub'ʿathūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "will be resurrected",
          ur: "گا/گے be resurrected",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  17: { // Ayah 17
    text: "وَلَقَدْ خَلَقْنَا فَوْقَكُمْ سَبْعَ طَرَآئِقَ وَمَا كُنَّا عَنِ ٱلْخَلْقِ غَـٰفِلِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے تمہارے اوپر (کی جانب) سات آسمان پیدا کئے۔ اور ہم خلقت سے غافل نہیں ہیں",
    },
    words: [
      {
        id: "23:17:1",
        arabic: "وَلَقَدْ",
        transliteration: "walaqad",
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: "And indeed",
          ur: "اور بے شک",
        },
        grammarRole: 'emphasis',
        grammarExplanations: {
          en: "PART - emphasis.",
          ur: "PART - emphasis۔",
        },
      },
      {
        id: "23:17:2",
        arabic: "خَلَقْنَا",
        transliteration: "khalaqnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We (have) created",
          ur: "ہم have پیدا کیا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:17:3",
        arabic: "فَوْقَكُمْ",
        transliteration: "fawqakum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "above you",
          ur: "above تم",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:17:4",
        arabic: "سَبْعَ",
        transliteration: "sabʿa",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "seven",
          ur: "seven",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:17:5",
        arabic: "طَرَآئِقَ",
        transliteration: "ṭarāiqa",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "paths",
          ur: "paths",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:17:6",
        arabic: "وَمَا",
        transliteration: "wamā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and not",
          ur: "اور نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:17:7",
        arabic: "كُنَّا",
        transliteration: "kunnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We are",
          ur: "ہم ہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:17:8",
        arabic: "عَنِ",
        transliteration: "ʿani",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:17:9",
        arabic: "ٱلْخَلْقِ",
        transliteration: "l-khalqi",
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ل ق',
        meaning: {
          en: "the creation",
          ur: "the creation",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:17:10",
        arabic: "غَـٰفِلِينَ",
        transliteration: "ghāfilīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "unaware",
          ur: "unaware",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'جار + مجرور' }
        ],
    },
  },
  18: { // Ayah 18
    text: "وَأَنزَلْنَا مِنَ ٱلسَّمَآءِ مَآءًۢ بِقَدَرٍۢ فَأَسْكَنَّـٰهُ فِى ٱلْأَرْضِ ۖ وَإِنَّا عَلَىٰ ذَهَابٍۭ بِهِۦ لَقَـٰدِرُونَ",
    translation: {
      en: "",
      ur: "اور ہم ہی نے آسمان سے ایک اندازے کے ساتھ پانی نازل کیا۔ پھر اس کو زمین میں ٹھہرا دیا اور ہم اس کے نابود کردینے پر بھی قادر ہیں",
    },
    words: [
      {
        id: "23:18:1",
        arabic: "وَأَنزَلْنَا",
        transliteration: "wa-anzalnā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And We send down",
          ur: "اور ہم send down",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:18:2",
        arabic: "مِنَ",
        transliteration: "mina",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:18:3",
        arabic: "ٱلسَّمَآءِ",
        transliteration: "l-samāi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the sky",
          ur: "the sky",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:18:4",
        arabic: "مَآءًۢ",
        transliteration: "māan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "water",
          ur: "پانی",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:18:5",
        arabic: "بِقَدَرٍۢ",
        transliteration: "biqadarin",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in (due) measure",
          ur: "میں due measure",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:18:6",
        arabic: "فَأَسْكَنَّـٰهُ",
        transliteration: "fa-askannāhu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then We cause it to settle",
          ur: "پھر ہم cause یہ طرف settle",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:18:7",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:18:8",
        arabic: "ٱلْأَرْضِ ۖ",
        transliteration: "l-arḍi",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ر ض',
        meaning: {
          en: "the earth",
          ur: "زمین",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:18:9",
        arabic: "وَإِنَّا",
        transliteration: "wa-innā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And indeed, We",
          ur: "اور indeed, ہم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:18:10",
        arabic: "عَلَىٰ",
        transliteration: "ʿalā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "on",
          ur: "پر",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:18:11",
        arabic: "ذَهَابٍۭ",
        transliteration: "dhahābin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "taking it away",
          ur: "taking یہ away",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:18:12",
        arabic: "بِهِۦ",
        transliteration: "bihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "taking it away",
          ur: "taking یہ away",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:18:13",
        arabic: "لَقَـٰدِرُونَ",
        transliteration: "laqādirūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely (are) Able",
          ur: "یقیناً ہیں Able",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 10, to: 11, label: 'جار + مجرور' },
          { from: 12, to: 13, label: 'جار + مجرور' }
        ],
    },
  },
  19: { // Ayah 19
    text: "فَأَنشَأْنَا لَكُم بِهِۦ جَنَّـٰتٍۢ مِّن نَّخِيلٍۢ وَأَعْنَـٰبٍۢ لَّكُمْ فِيهَا فَوَٰكِهُ كَثِيرَةٌۭ وَمِنْهَا تَأْكُلُونَ",
    translation: {
      en: "",
      ur: "پھر ہم نے اس سے تمہارے لئے کھجوروں اور انگوروں کے باغ بنائے، ان میں تمہارے لئے بہت سے میوے پیدا ہوتے ہیں۔ اور ان میں سے تم کھاتے بھی ہو",
    },
    words: [
      {
        id: "23:19:1",
        arabic: "فَأَنشَأْنَا",
        transliteration: "fa-anshanā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Then We produced",
          ur: "پھر ہم produced",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:19:2",
        arabic: "لَكُم",
        transliteration: "lakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "for you",
          ur: "کے لیے تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:19:3",
        arabic: "بِهِۦ",
        transliteration: "bihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "by it",
          ur: "by یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:19:4",
        arabic: "جَنَّـٰتٍۢ",
        transliteration: "jannātin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ن ن',
        meaning: {
          en: "gardens",
          ur: "gardens",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:19:5",
        arabic: "مِّن",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "of date-palms",
          ur: "of date-palms",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:19:6",
        arabic: "نَّخِيلٍۢ",
        transliteration: "nakhīlin",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "of date-palms",
          ur: "of date-palms",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:19:7",
        arabic: "وَأَعْنَـٰبٍۢ",
        transliteration: "wa-aʿnābin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and grapevines",
          ur: "اور grapevines",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:19:8",
        arabic: "لَّكُمْ",
        transliteration: "lakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "for you",
          ur: "کے لیے تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:19:9",
        arabic: "فِيهَا",
        transliteration: "fīhā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in it",
          ur: "میں یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:19:10",
        arabic: "فَوَٰكِهُ",
        transliteration: "fawākihu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) fruits",
          ur: "پھل",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:19:11",
        arabic: "كَثِيرَةٌۭ",
        transliteration: "kathīratun",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "abundant",
          ur: "abundant",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:19:12",
        arabic: "وَمِنْهَا",
        transliteration: "wamin'hā",
        pos: ['CONJ+PREP'],
        posLabel: 'CONJ+PREP',
        root: null,
        meaning: {
          en: "and from them",
          ur: "اور سے انہیں",
        },
        grammarRole: 'conjunction+preposition',
        grammarExplanations: {
          en: "CONJ+PREP - conjunction+preposition.",
          ur: "CONJ+PREP - conjunction+preposition۔",
        },
      },
      {
        id: "23:19:13",
        arabic: "تَأْكُلُونَ",
        transliteration: "takulūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you eat",
          ur: "تم eat",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'جار + مجرور' }
        ],
    },
  },
  20: { // Ayah 20
    text: "وَشَجَرَةًۭ تَخْرُجُ مِن طُورِ سَيْنَآءَ تَنۢبُتُ بِٱلدُّهْنِ وَصِبْغٍۢ لِّلْـَٔاكِلِينَ",
    translation: {
      en: "",
      ur: "اور وہ درخت بھی (ہم ہی نے پیدا کیا) جو طور سینا میں پیدا ہوتا ہے (یعنی زیتون کا درخت کہ) کھانے کے لئے روغن اور سالن لئے ہوئے اُگتا ہے",
    },
    words: [
      {
        id: "23:20:1",
        arabic: "وَشَجَرَةًۭ",
        transliteration: "washajaratan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And a tree",
          ur: "اور a درخت",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:20:2",
        arabic: "تَخْرُجُ",
        transliteration: "takhruju",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(that) springs forth",
          ur: "کہ/وہ springs forth",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:20:3",
        arabic: "مِن",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:20:4",
        arabic: "طُورِ",
        transliteration: "ṭūri",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Mount Sinai",
          ur: "Mount Sinai",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:20:5",
        arabic: "سَيْنَآءَ",
        transliteration: "saynāa",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Mount Sinai",
          ur: "Mount Sinai",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:20:6",
        arabic: "تَنۢبُتُ",
        transliteration: "tanbutu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(which) produces",
          ur: "جو produces",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:20:7",
        arabic: "بِٱلدُّهْنِ",
        transliteration: "bil-duh'ni",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "oil",
          ur: "oil",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:20:8",
        arabic: "وَصِبْغٍۢ",
        transliteration: "waṣib'ghin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and a relish",
          ur: "اور a relish",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:20:9",
        arabic: "لِّلْـَٔاكِلِينَ",
        transliteration: "lil'ākilīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "for those who eat",
          ur: "کے لیے those جو eat",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'جار + مجرور' }
        ],
    },
  },
  21: { // Ayah 21
    text: "وَإِنَّ لَكُمْ فِى ٱلْأَنْعَـٰمِ لَعِبْرَةًۭ ۖ نُّسْقِيكُم مِّمَّا فِى بُطُونِهَا وَلَكُمْ فِيهَا مَنَـٰفِعُ كَثِيرَةٌۭ وَمِنْهَا تَأْكُلُونَ",
    translation: {
      en: "",
      ur: "اور تمہارے لئے چارپایوں میں بھی عبرت (اور نشانی) ہے کہ ان کے پیٹوں میں ہے اس سے ہم تمہیں (دودھ) پلاتے ہیں اور تمہارے لئے ان میں اور بھی بہت سے فائدے ہیں اور بعض کو تم کھاتے بھی ہو",
    },
    words: [
      {
        id: "23:21:1",
        arabic: "وَإِنَّ",
        transliteration: "wa-inna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And indeed",
          ur: "اور بے شک",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:21:2",
        arabic: "لَكُمْ",
        transliteration: "lakum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "for you",
          ur: "کے لیے تم",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:21:3",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:21:4",
        arabic: "ٱلْأَنْعَـٰمِ",
        transliteration: "l-anʿāmi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the cattle",
          ur: "the مویشی",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:21:5",
        arabic: "لَعِبْرَةًۭ ۖ",
        transliteration: "laʿib'ratan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely, (is) a lesson",
          ur: "surely, ہے a lesson",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:21:6",
        arabic: "نُّسْقِيكُم",
        transliteration: "nus'qīkum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We give you drink",
          ur: "ہم دو تم drink",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:21:7",
        arabic: "مِّمَّا",
        transliteration: "mimmā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "from what",
          ur: "سے کیا/جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:21:8",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(is) in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:21:9",
        arabic: "بُطُونِهَا",
        transliteration: "buṭūnihā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "their bellies",
          ur: "their bellies",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:21:10",
        arabic: "وَلَكُمْ",
        transliteration: "walakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and for you",
          ur: "اور کے لیے تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:21:11",
        arabic: "فِيهَا",
        transliteration: "fīhā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in them",
          ur: "میں انہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:21:12",
        arabic: "مَنَـٰفِعُ",
        transliteration: "manāfiʿu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) benefits",
          ur: "ہیں benefits",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:21:13",
        arabic: "كَثِيرَةٌۭ",
        transliteration: "kathīratun",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "many",
          ur: "many",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:21:14",
        arabic: "وَمِنْهَا",
        transliteration: "wamin'hā",
        pos: ['CONJ+PREP'],
        posLabel: 'CONJ+PREP',
        root: null,
        meaning: {
          en: "and of them",
          ur: "اور of انہیں",
        },
        grammarRole: 'conjunction+preposition',
        grammarExplanations: {
          en: "CONJ+PREP - conjunction+preposition.",
          ur: "CONJ+PREP - conjunction+preposition۔",
        },
      },
      {
        id: "23:21:15",
        arabic: "تَأْكُلُونَ",
        transliteration: "takulūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you eat",
          ur: "تم eat",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'جار + مجرور' }
        ],
    },
  },
  22: { // Ayah 22
    text: "وَعَلَيْهَا وَعَلَى ٱلْفُلْكِ تُحْمَلُونَ",
    translation: {
      en: "",
      ur: "اور ان پر اور کشتیوں پر تم سوار ہوتے ہو",
    },
    words: [
      {
        id: "23:22:1",
        arabic: "وَعَلَيْهَا",
        transliteration: "waʿalayhā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And on them",
          ur: "اور پر انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:22:2",
        arabic: "وَعَلَى",
        transliteration: "waʿalā",
        pos: ['CONJ+PREP'],
        posLabel: 'CONJ+PREP',
        root: null,
        meaning: {
          en: "and on",
          ur: "اور پر",
        },
        grammarRole: 'conjunction+preposition',
        grammarExplanations: {
          en: "CONJ+PREP - conjunction+preposition.",
          ur: "CONJ+PREP - conjunction+preposition۔",
        },
      },
      {
        id: "23:22:3",
        arabic: "ٱلْفُلْكِ",
        transliteration: "l-ful'ki",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "[the] ships",
          ur: "[the] ships",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:22:4",
        arabic: "تُحْمَلُونَ",
        transliteration: "tuḥ'malūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you are carried",
          ur: "تم ہیں carried",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  23: { // Ayah 23
    text: "وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِۦ فَقَالَ يَـٰقَوْمِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَـٰهٍ غَيْرُهُۥٓ ۖ أَفَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے نوح کو ان کی قوم کی طرف بھیجا تو انہوں نے ان سے کہا کہ اے قوم! خدا ہی کی عبادت کرو اس کے سوا تمہارا کوئی معبود نہیں، کیا تم ڈرتے نہیں",
    },
    words: [
      {
        id: "23:23:1",
        arabic: "وَلَقَدْ",
        transliteration: "walaqad",
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: "And verily",
          ur: "اور verily",
        },
        grammarRole: 'emphasis',
        grammarExplanations: {
          en: "PART - emphasis.",
          ur: "PART - emphasis۔",
        },
      },
      {
        id: "23:23:2",
        arabic: "أَرْسَلْنَا",
        transliteration: "arsalnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We sent",
          ur: "ہم بھیجا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:23:3",
        arabic: "نُوحًا",
        transliteration: "nūḥan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Nuh",
          ur: "Nuh",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:23:4",
        arabic: "إِلَىٰ",
        transliteration: "ilā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to",
          ur: "طرف",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:23:5",
        arabic: "قَوْمِهِۦ",
        transliteration: "qawmihi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "his people",
          ur: "his لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:23:6",
        arabic: "فَقَالَ",
        transliteration: "faqāla",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "and he said",
          ur: "اور وہ کہا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:23:7",
        arabic: "يَـٰقَوْمِ",
        transliteration: "yāqawmi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "O my people",
          ur: "اے my لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:23:8",
        arabic: "ٱعْبُدُوا۟",
        transliteration: "uʿ'budū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Worship",
          ur: "عبادت کرو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:23:9",
        arabic: "ٱللَّهَ",
        transliteration: "l-laha",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: "Allah",
          ur: "اللہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:23:10",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:23:11",
        arabic: "لَكُم",
        transliteration: "lakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "for you",
          ur: "کے لیے تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:23:12",
        arabic: "مِّنْ",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) any",
          ur: "ہے any",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:23:13",
        arabic: "إِلَـٰهٍ",
        transliteration: "ilāhin",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ل ه',
        meaning: {
          en: "god",
          ur: "god",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:23:14",
        arabic: "غَيْرُهُۥٓ ۖ",
        transliteration: "ghayruhu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "other than Him",
          ur: "other than اس",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:23:15",
        arabic: "أَفَلَا",
        transliteration: "afalā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Then will not",
          ur: "پھر گا/گے نہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:23:16",
        arabic: "تَتَّقُونَ",
        transliteration: "tattaqūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you fear",
          ur: "تم ڈرو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 13, to: 14, label: 'فعل + فاعل' }
        ],
    },
  },
  24: { // Ayah 24
    text: "فَقَالَ ٱلْمَلَؤُا۟ ٱلَّذِينَ كَفَرُوا۟ مِن قَوْمِهِۦ مَا هَـٰذَآ إِلَّا بَشَرٌۭ مِّثْلُكُمْ يُرِيدُ أَن يَتَفَضَّلَ عَلَيْكُمْ وَلَوْ شَآءَ ٱللَّهُ لَأَنزَلَ مَلَـٰٓئِكَةًۭ مَّا سَمِعْنَا بِهَـٰذَا فِىٓ ءَابَآئِنَا ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "تو ان کی قوم کے سردار جو کافر تھے کہنے لگے کہ یہ تو تم ہی جیسا آدمی ہے۔ تم پر بڑائی حاصل کرنی چاہتا ہے۔ اور اگر خدا چاہتا تو فرشتے اُتار دیتا۔ ہم نے اپنے اگلے باپ دادا میں تو یہ بات کبھی سنی نہیں تھی",
    },
    words: [
      {
        id: "23:24:1",
        arabic: "فَقَالَ",
        transliteration: "faqāla",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "But said",
          ur: "لیکن کہا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:2",
        arabic: "ٱلْمَلَؤُا۟",
        transliteration: "l-mala-u",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the chiefs",
          ur: "the chiefs",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:3",
        arabic: "ٱلَّذِينَ",
        transliteration: "alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(of) those who",
          ur: "جو لوگ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:24:4",
        arabic: "كَفَرُوا۟",
        transliteration: "kafarū",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "disbelieved",
          ur: "disbelieved",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:24:5",
        arabic: "مِن",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "among",
          ur: "among",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:24:6",
        arabic: "قَوْمِهِۦ",
        transliteration: "qawmihi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "his people",
          ur: "his لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:7",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "This is not",
          ur: "یہ ہے نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:24:8",
        arabic: "هَـٰذَآ",
        transliteration: "hādhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "This is not",
          ur: "یہ ہے نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:9",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but",
          ur: "لیکن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:10",
        arabic: "بَشَرٌۭ",
        transliteration: "basharun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a man",
          ur: "a انسان",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:11",
        arabic: "مِّثْلُكُمْ",
        transliteration: "mith'lukum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "like you",
          ur: "like تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:12",
        arabic: "يُرِيدُ",
        transliteration: "yurīdu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "he wishes",
          ur: "وہ wishes",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:24:13",
        arabic: "أَن",
        transliteration: "an",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "to",
          ur: "طرف",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:24:14",
        arabic: "يَتَفَضَّلَ",
        transliteration: "yatafaḍḍala",
        pos: ['V'],
        posLabel: 'V',
        root: 'ف ض ل',
        meaning: {
          en: "assert (his) superiority",
          ur: "assert his superiority",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:24:15",
        arabic: "عَلَيْكُمْ",
        transliteration: "ʿalaykum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "over you",
          ur: "over تم",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:24:16",
        arabic: "وَلَوْ",
        transliteration: "walaw",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and if",
          ur: "اور if",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:17",
        arabic: "شَآءَ",
        transliteration: "shāa",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Allah had willed",
          ur: "اللہ had willed",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:24:18",
        arabic: "ٱللَّهُ",
        transliteration: "l-lahu",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ل ه',
        meaning: {
          en: "Allah had willed",
          ur: "اللہ had willed",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:24:19",
        arabic: "لَأَنزَلَ",
        transliteration: "la-anzala",
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ز ل',
        meaning: {
          en: "surely He (would have) sent down",
          ur: "یقیناً وہ would have بھیجا down",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:20",
        arabic: "مَلَـٰٓئِكَةًۭ",
        transliteration: "malāikatan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Angels",
          ur: "Angels",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:21",
        arabic: "مَّا",
        transliteration: "mā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Not",
          ur: "نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:22",
        arabic: "سَمِعْنَا",
        transliteration: "samiʿ'nā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "we heard",
          ur: "ہم heard",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:24:23",
        arabic: "بِهَـٰذَا",
        transliteration: "bihādhā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of this",
          ur: "of یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:24:24",
        arabic: "فِىٓ",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:24:25",
        arabic: "ءَابَآئِنَا",
        transliteration: "ābāinā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "our forefathers",
          ur: "our forefathers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:24:26",
        arabic: "ٱلْأَوَّلِينَ",
        transliteration: "l-awalīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "our forefathers",
          ur: "our forefathers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 15, to: 16, label: 'جار + مجرور' },
          { from: 18, to: 19, label: 'فعل + فاعل' },
          { from: 24, to: 25, label: 'جار + مجرور' }
        ],
    },
  },
  25: { // Ayah 25
    text: "إِنْ هُوَ إِلَّا رَجُلٌۢ بِهِۦ جِنَّةٌۭ فَتَرَبَّصُوا۟ بِهِۦ حَتَّىٰ حِينٍۢ",
    translation: {
      en: "",
      ur: "اس آدمی کو تو دیوانگی (کا عارضہ) ہے تو اس کے بارے میں کچھ مدت انتظار کرو",
    },
    words: [
      {
        id: "23:25:1",
        arabic: "إِنْ",
        transliteration: "in",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Not",
          ur: "نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:25:2",
        arabic: "هُوَ",
        transliteration: "huwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "he",
          ur: "وہ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:25:3",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) but",
          ur: "لیکن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:25:4",
        arabic: "رَجُلٌۢ",
        transliteration: "rajulun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a man",
          ur: "a انسان",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:25:5",
        arabic: "بِهِۦ",
        transliteration: "bihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in him",
          ur: "میں اسے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:25:6",
        arabic: "جِنَّةٌۭ",
        transliteration: "jinnatun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) madness",
          ur: "ہے madness",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:25:7",
        arabic: "فَتَرَبَّصُوا۟",
        transliteration: "fatarabbaṣū",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "so wait",
          ur: "so wait",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:25:8",
        arabic: "بِهِۦ",
        transliteration: "bihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "concerning him",
          ur: "concerning اسے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:25:9",
        arabic: "حَتَّىٰ",
        transliteration: "ḥattā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "until",
          ur: "until",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:25:10",
        arabic: "حِينٍۢ",
        transliteration: "ḥīnin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a time",
          ur: "a time",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'جار + مجرور' }
        ],
    },
  },
  26: { // Ayah 26
    text: "قَالَ رَبِّ ٱنصُرْنِى بِمَا كَذَّبُونِ",
    translation: {
      en: "",
      ur: "نوح نے کہا کہ پروردگار انہوں نے مجھے جھٹلایا ہے تو میری مدد کر",
    },
    words: [
      {
        id: "23:26:1",
        arabic: "قَالَ",
        transliteration: "qāla",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "He said",
          ur: "وہ کہا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:26:2",
        arabic: "رَبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:26:3",
        arabic: "ٱنصُرْنِى",
        transliteration: "unṣur'nī",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Help me",
          ur: "Help me",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:26:4",
        arabic: "بِمَا",
        transliteration: "bimā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "because",
          ur: "because",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:26:5",
        arabic: "كَذَّبُونِ",
        transliteration: "kadhabūni",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "they deny me",
          ur: "وہ لوگ deny me",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' }
        ],
    },
  },
  27: { // Ayah 27
    text: "فَأَوْحَيْنَآ إِلَيْهِ أَنِ ٱصْنَعِ ٱلْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا فَإِذَا جَآءَ أَمْرُنَا وَفَارَ ٱلتَّنُّورُ ۙ فَٱسْلُكْ فِيهَا مِن كُلٍّۢ زَوْجَيْنِ ٱثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ ٱلْقَوْلُ مِنْهُمْ ۖ وَلَا تُخَـٰطِبْنِى فِى ٱلَّذِينَ ظَلَمُوٓا۟ ۖ إِنَّهُم مُّغْرَقُونَ",
    translation: {
      en: "",
      ur: "پس ہم نے ان کی طرف وحی بھیجی کہ ہمارے سامنے اور ہمارے حکم سے ایک کشتی بناؤ۔ پھر جب ہمارا حکم آ پہنچے اور تنور (پانی سے بھر کر) جوش مارنے لگے تو سب (قسم کے حیوانات) میں جوڑا جوڑا (یعنی نر اور مادہ) دو دو کشتی میں بٹھا دو اور اپنے گھر والوں کو بھی، سو ان کے جن کی نسبت ان میں سے (ہلاک ہونے کا) حکم پہلے صادر ہوچکا ہے۔ اور ظالموں کے بارے میں ہم سے کچھ نہ کہنا، وہ ضرور ڈبو دیئے جائیں گے",
    },
    words: [
      {
        id: "23:27:1",
        arabic: "فَأَوْحَيْنَآ",
        transliteration: "fa-awḥaynā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "So We inspired",
          ur: "So ہم inspired",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:27:2",
        arabic: "إِلَيْهِ",
        transliteration: "ilayhi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to him",
          ur: "طرف اسے",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:27:3",
        arabic: "أَنِ",
        transliteration: "ani",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "That",
          ur: "کہ/وہ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:27:4",
        arabic: "ٱصْنَعِ",
        transliteration: "iṣ'naʿi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "construct",
          ur: "construct",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:5",
        arabic: "ٱلْفُلْكَ",
        transliteration: "l-ful'ka",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the ship",
          ur: "the ship",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:6",
        arabic: "بِأَعْيُنِنَا",
        transliteration: "bi-aʿyuninā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "under Our eyes",
          ur: "under Our آنکھیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:27:7",
        arabic: "وَوَحْيِنَا",
        transliteration: "wawaḥyinā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and Our inspiration",
          ur: "اور Our inspiration",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:8",
        arabic: "فَإِذَا",
        transliteration: "fa-idhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then when",
          ur: "پھر when",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:9",
        arabic: "جَآءَ",
        transliteration: "jāa",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "comes",
          ur: "آتا ہے",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:27:10",
        arabic: "أَمْرُنَا",
        transliteration: "amrunā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Our Command",
          ur: "Our Command",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:27:11",
        arabic: "وَفَارَ",
        transliteration: "wafāra",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and gushes forth",
          ur: "اور gushes forth",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:12",
        arabic: "ٱلتَّنُّورُ ۙ",
        transliteration: "l-tanūru",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the oven",
          ur: "the oven",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:13",
        arabic: "فَٱسْلُكْ",
        transliteration: "fa-us'luk",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then put",
          ur: "پھر put",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:14",
        arabic: "فِيهَا",
        transliteration: "fīhā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "into it",
          ur: "into یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:27:15",
        arabic: "مِن",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:27:16",
        arabic: "كُلٍّۢ",
        transliteration: "kullin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "every (kind)",
          ur: "every kind",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:17",
        arabic: "زَوْجَيْنِ",
        transliteration: "zawjayni",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) mates",
          ur: "of mates",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:18",
        arabic: "ٱثْنَيْنِ",
        transliteration: "ith'nayni",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "two",
          ur: "two",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:19",
        arabic: "وَأَهْلَكَ",
        transliteration: "wa-ahlaka",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and your family",
          ur: "اور تمہارا family",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:27:20",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "except",
          ur: "سوائے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:21",
        arabic: "مَن",
        transliteration: "man",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "those",
          ur: "those",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:22",
        arabic: "سَبَقَ",
        transliteration: "sabaqa",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(has) preceded",
          ur: "has preceded",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:27:23",
        arabic: "عَلَيْهِ",
        transliteration: "ʿalayhi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "against whom",
          ur: "against whom",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:27:24",
        arabic: "ٱلْقَوْلُ",
        transliteration: "l-qawlu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the Word",
          ur: "the Word",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:25",
        arabic: "مِنْهُمْ ۖ",
        transliteration: "min'hum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "thereof",
          ur: "thereof",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:27:26",
        arabic: "وَلَا",
        transliteration: "walā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "And (do) not",
          ur: "اور کرتے ہو نہیں",
        },
        grammarRole: 'prohibition',
        grammarExplanations: {
          en: "NEG - prohibition.",
          ur: "NEG - prohibition۔",
        },
      },
      {
        id: "23:27:27",
        arabic: "تُخَـٰطِبْنِى",
        transliteration: "tukhāṭib'nī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "address Me",
          ur: "address Me",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:27:28",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "concerning",
          ur: "concerning",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:27:29",
        arabic: "ٱلَّذِينَ",
        transliteration: "alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "those who",
          ur: "جو لوگ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:27:30",
        arabic: "ظَلَمُوٓا۟ ۖ",
        transliteration: "ẓalamū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "wronged",
          ur: "wronged",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:27:31",
        arabic: "إِنَّهُم",
        transliteration: "innahum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "indeed, they",
          ur: "indeed, وہ لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:27:32",
        arabic: "مُّغْرَقُونَ",
        transliteration: "mugh'raqūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(are) the ones to be drowned",
          ur: "ہیں the ones طرف be drowned",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 10, to: 11, label: 'فعل + فاعل' },
          { from: 15, to: 16, label: 'جار + مجرور' },
          { from: 19, to: 20, label: 'فعل + فاعل' },
          { from: 23, to: 24, label: 'جار + مجرور' },
          { from: 26, to: 27, label: 'نفی + فعل' },
          { from: 30, to: 31, label: 'فعل + فاعل' }
        ],
    },
  },
  28: { // Ayah 28
    text: "فَإِذَا ٱسْتَوَيْتَ أَنتَ وَمَن مَّعَكَ عَلَى ٱلْفُلْكِ فَقُلِ ٱلْحَمْدُ لِلَّهِ ٱلَّذِى نَجَّىٰنَا مِنَ ٱلْقَوْمِ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "اور جب تم اور تمہارے ساتھی کشتی میں بیٹھ جاؤ تو (خدا کا شکر کرنا اور) کہنا کہ سب تعریف خدا ہی کو (سزاوار) ہے۔ جس نے ہم کو نجات بخشی ظالم لوگوں سے",
    },
    words: [
      {
        id: "23:28:1",
        arabic: "فَإِذَا",
        transliteration: "fa-idhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And when",
          ur: "اور when",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:28:2",
        arabic: "ٱسْتَوَيْتَ",
        transliteration: "is'tawayta",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you (have) boarded",
          ur: "تم have boarded",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:28:3",
        arabic: "أَنتَ",
        transliteration: "anta",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "you",
          ur: "تم",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:28:4",
        arabic: "وَمَن",
        transliteration: "waman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and whoever",
          ur: "اور whoever",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:28:5",
        arabic: "مَّعَكَ",
        transliteration: "maʿaka",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(is) with you",
          ur: "ہے کے ساتھ تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:28:6",
        arabic: "عَلَى",
        transliteration: "ʿalā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "[on]",
          ur: "[on]",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:28:7",
        arabic: "ٱلْفُلْكِ",
        transliteration: "l-ful'ki",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the ship",
          ur: "the ship",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:28:8",
        arabic: "فَقُلِ",
        transliteration: "faquli",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "then say",
          ur: "پھر کہو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:28:9",
        arabic: "ٱلْحَمْدُ",
        transliteration: "l-ḥamdu",
        pos: ['N'],
        posLabel: 'N',
        root: 'ح م د',
        meaning: {
          en: "Praise",
          ur: "Praise",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:28:10",
        arabic: "لِلَّهِ",
        transliteration: "lillahi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: 'أ ل ه',
        meaning: {
          en: "(be) to Allah",
          ur: "be طرف اللہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:28:11",
        arabic: "ٱلَّذِى",
        transliteration: "alladhī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Who",
          ur: "جو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:28:12",
        arabic: "نَجَّىٰنَا",
        transliteration: "najjānā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(has) saved us",
          ur: "has saved us",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:28:13",
        arabic: "مِنَ",
        transliteration: "mina",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:28:14",
        arabic: "ٱلْقَوْمِ",
        transliteration: "l-qawmi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "the people ",
          ur: "the لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:28:15",
        arabic: "ٱلظَّـٰلِمِينَ",
        transliteration: "l-ẓālimīna",
        pos: ['N'],
        posLabel: 'N',
        root: 'ظ ل م',
        meaning: {
          en: "the wrongdoers",
          ur: "the wrongdoers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 13, to: 14, label: 'جار + مجرور' }
        ],
    },
  },
  29: { // Ayah 29
    text: "وَقُل رَّبِّ أَنزِلْنِى مُنزَلًۭا مُّبَارَكًۭا وَأَنتَ خَيْرُ ٱلْمُنزِلِينَ",
    translation: {
      en: "",
      ur: "اور (یہ بھی) دعا کرنا کہ اے پروردگار ہم کو مبارک جگہ اُتاریو اور تو سب سے بہتر اُتارنے والا ہے",
    },
    words: [
      {
        id: "23:29:1",
        arabic: "وَقُل",
        transliteration: "waqul",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "And say",
          ur: "اور کہو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:29:2",
        arabic: "رَّبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:29:3",
        arabic: "أَنزِلْنِى",
        transliteration: "anzil'nī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "cause me to land",
          ur: "cause me طرف سرزمین",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:29:4",
        arabic: "مُنزَلًۭا",
        transliteration: "munzalan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(at) a landing place",
          ur: "at a landing place",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:29:5",
        arabic: "مُّبَارَكًۭا",
        transliteration: "mubārakan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "blessed",
          ur: "blessed",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:29:6",
        arabic: "وَأَنتَ",
        transliteration: "wa-anta",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and You",
          ur: "اور تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:29:7",
        arabic: "خَيْرُ",
        transliteration: "khayru",
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ي ر',
        meaning: {
          en: "(are) the Best",
          ur: "ہیں the Best",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:29:8",
        arabic: "ٱلْمُنزِلِينَ",
        transliteration: "l-munzilīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) those who cause to land.'",
          ur: "of those جو cause طرف land.'",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    },
  },
  30: { // Ayah 30
    text: "إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ وَإِن كُنَّا لَمُبْتَلِينَ",
    translation: {
      en: "",
      ur: "بےشک اس (قصے) میں نشانیاں ہیں اور ہمیں تو آزمائش کرنی تھی",
    },
    words: [
      {
        id: "23:30:1",
        arabic: "إِنَّ",
        transliteration: "inna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Indeed",
          ur: "بے شک",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:30:2",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:30:3",
        arabic: "ذَٰلِكَ",
        transliteration: "dhālika",
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: "that",
          ur: "کہ/وہ",
        },
        grammarRole: 'demonstrative',
        grammarExplanations: {
          en: "DEM - demonstrative.",
          ur: "DEM - demonstrative۔",
        },
      },
      {
        id: "23:30:4",
        arabic: "لَـَٔايَـٰتٍۢ",
        transliteration: "laāyātin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely (are) Signs",
          ur: "یقیناً ہیں نشانیاں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:30:5",
        arabic: "وَإِن",
        transliteration: "wa-in",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and indeed",
          ur: "اور بے شک",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:30:6",
        arabic: "كُنَّا",
        transliteration: "kunnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We are",
          ur: "ہم ہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:30:7",
        arabic: "لَمُبْتَلِينَ",
        transliteration: "lamub'talīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely testing",
          ur: "یقیناً testing",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    },
  },
  31: { // Ayah 31
    text: "ثُمَّ أَنشَأْنَا مِنۢ بَعْدِهِمْ قَرْنًا ءَاخَرِينَ",
    translation: {
      en: "",
      ur: "پھر ان کے بعد ہم نے ایک اور جماعت پیدا کی",
    },
    words: [
      {
        id: "23:31:1",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:31:2",
        arabic: "أَنشَأْنَا",
        transliteration: "anshanā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We produced",
          ur: "ہم produced",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:31:3",
        arabic: "مِنۢ",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "after them",
          ur: "after انہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:31:4",
        arabic: "بَعْدِهِمْ",
        transliteration: "baʿdihim",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "after them",
          ur: "after انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:31:5",
        arabic: "قَرْنًا",
        transliteration: "qarnan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a generation",
          ur: "a generation",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:31:6",
        arabic: "ءَاخَرِينَ",
        transliteration: "ākharīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "another",
          ur: "another",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' }
        ],
    },
  },
  32: { // Ayah 32
    text: "فَأَرْسَلْنَا فِيهِمْ رَسُولًۭا مِّنْهُمْ أَنِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَـٰهٍ غَيْرُهُۥٓ ۖ أَفَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "اور ان ہی میں سے ان میں ایک پیغمبر بھیجا (جس نے ان سے کہا) کہ خدا ہی کی عبادت کرو (کہ) اس کے سوا تمہارا کوئی معبود نہیں، تو کیا تم ڈرتے نہیں",
    },
    words: [
      {
        id: "23:32:1",
        arabic: "فَأَرْسَلْنَا",
        transliteration: "fa-arsalnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And We sent",
          ur: "اور ہم بھیجا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:32:2",
        arabic: "فِيهِمْ",
        transliteration: "fīhim",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "among them",
          ur: "among انہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:32:3",
        arabic: "رَسُولًۭا",
        transliteration: "rasūlan",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر س ل',
        meaning: {
          en: "a Messenger",
          ur: "a رسول",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:32:4",
        arabic: "مِّنْهُمْ",
        transliteration: "min'hum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "from themselves",
          ur: "سے themselves",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:32:5",
        arabic: "أَنِ",
        transliteration: "ani",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "[that]",
          ur: "[that]",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:32:6",
        arabic: "ٱعْبُدُوا۟",
        transliteration: "uʿ'budū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Worship",
          ur: "عبادت کرو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:32:7",
        arabic: "ٱللَّهَ",
        transliteration: "l-laha",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: "Allah",
          ur: "اللہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:32:8",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:32:9",
        arabic: "لَكُم",
        transliteration: "lakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "for you",
          ur: "کے لیے تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:32:10",
        arabic: "مِّنْ",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) any",
          ur: "ہے any",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:32:11",
        arabic: "إِلَـٰهٍ",
        transliteration: "ilāhin",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ل ه',
        meaning: {
          en: "god",
          ur: "god",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:32:12",
        arabic: "غَيْرُهُۥٓ ۖ",
        transliteration: "ghayruhu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "other than Him",
          ur: "other than اس",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:32:13",
        arabic: "أَفَلَا",
        transliteration: "afalā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Then will not",
          ur: "پھر گا/گے نہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:32:14",
        arabic: "تَتَّقُونَ",
        transliteration: "tattaqūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you fear",
          ur: "تم ڈرو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'فعل + فاعل' }
        ],
    },
  },
  33: { // Ayah 33
    text: "وَقَالَ ٱلْمَلَأُ مِن قَوْمِهِ ٱلَّذِينَ كَفَرُوا۟ وَكَذَّبُوا۟ بِلِقَآءِ ٱلْـَٔاخِرَةِ وَأَتْرَفْنَـٰهُمْ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا مَا هَـٰذَآ إِلَّا بَشَرٌۭ مِّثْلُكُمْ يَأْكُلُ مِمَّا تَأْكُلُونَ مِنْهُ وَيَشْرَبُ مِمَّا تَشْرَبُونَ",
    translation: {
      en: "",
      ur: "تو ان کی قوم کے سردار جو کافر تھے اور آخرت کے آنے کو جھوٹ سمجھتے تھے اور دنیا کی زندگی میں ہم نے ان کو آسودگی دے رکھی تھی۔ کہنے لگے کہ یہ تو تم ہی جیسا آدمی ہے، جس قسم کا کھانا تم کھاتے ہو، اسی طرح کا یہ بھی کھاتا ہے اور جو پانی تم پیتے ہو اسی قسم کا یہ بھی پیتا ہے",
    },
    words: [
      {
        id: "23:33:1",
        arabic: "وَقَالَ",
        transliteration: "waqāla",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "And said",
          ur: "اور کہا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:2",
        arabic: "ٱلْمَلَأُ",
        transliteration: "l-mala-u",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the chiefs",
          ur: "the chiefs",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:3",
        arabic: "مِن",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:33:4",
        arabic: "قَوْمِهِ",
        transliteration: "qawmihi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "his people",
          ur: "his لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:5",
        arabic: "ٱلَّذِينَ",
        transliteration: "alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "who",
          ur: "جو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:33:6",
        arabic: "كَفَرُوا۟",
        transliteration: "kafarū",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "disbelieved",
          ur: "disbelieved",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:33:7",
        arabic: "وَكَذَّبُوا۟",
        transliteration: "wakadhabū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and denied",
          ur: "اور denied",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:33:8",
        arabic: "بِلِقَآءِ",
        transliteration: "biliqāi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(the) meeting",
          ur: "the meeting",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:33:9",
        arabic: "ٱلْـَٔاخِرَةِ",
        transliteration: "l-ākhirati",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ خ ر',
        meaning: {
          en: "(of) the Hereafter",
          ur: "of the Hereafter",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:10",
        arabic: "وَأَتْرَفْنَـٰهُمْ",
        transliteration: "wa-atrafnāhum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "while We had given them luxury",
          ur: "while ہم had given انہیں luxury",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:11",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:33:12",
        arabic: "ٱلْحَيَوٰةِ",
        transliteration: "l-ḥayati",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the life",
          ur: "the life",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:13",
        arabic: "ٱلدُّنْيَا",
        transliteration: "l-dun'yā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the world",
          ur: "of the world",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:14",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "Not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:33:15",
        arabic: "هَـٰذَآ",
        transliteration: "hādhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) this",
          ur: "یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:16",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but",
          ur: "لیکن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:17",
        arabic: "بَشَرٌۭ",
        transliteration: "basharun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a man",
          ur: "a انسان",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:18",
        arabic: "مِّثْلُكُمْ",
        transliteration: "mith'lukum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "like you",
          ur: "like تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:19",
        arabic: "يَأْكُلُ",
        transliteration: "yakulu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "He eats",
          ur: "وہ eats",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:33:20",
        arabic: "مِمَّا",
        transliteration: "mimmā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "of what",
          ur: "of کیا/جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:21",
        arabic: "تَأْكُلُونَ",
        transliteration: "takulūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you eat",
          ur: "تم eat",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:33:22",
        arabic: "مِنْهُ",
        transliteration: "min'hu",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "[from it]",
          ur: "[from it]",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:33:23",
        arabic: "وَيَشْرَبُ",
        transliteration: "wayashrabu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and he drinks",
          ur: "اور وہ drinks",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:24",
        arabic: "مِمَّا",
        transliteration: "mimmā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "of what",
          ur: "of کیا/جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:33:25",
        arabic: "تَشْرَبُونَ",
        transliteration: "tashrabūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you drink",
          ur: "تم drink",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'جار + مجرور' },
          { from: 19, to: 20, label: 'فعل + فاعل' },
          { from: 22, to: 23, label: 'جار + مجرور' },
          { from: 23, to: 24, label: 'مضاف + مضاف إليه' }
        ],
    },
  },
  34: { // Ayah 34
    text: "وَلَئِنْ أَطَعْتُم بَشَرًۭا مِّثْلَكُمْ إِنَّكُمْ إِذًۭا لَّخَـٰسِرُونَ",
    translation: {
      en: "",
      ur: "اور اگر تم اپنے ہی جیسے آدمی کا کہا مان لیا تو گھاٹے میں پڑ گئے",
    },
    words: [
      {
        id: "23:34:1",
        arabic: "وَلَئِنْ",
        transliteration: "wala-in",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And surely if",
          ur: "اور یقیناً if",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:34:2",
        arabic: "أَطَعْتُم",
        transliteration: "aṭaʿtum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you obey",
          ur: "تم obey",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:34:3",
        arabic: "بَشَرًۭا",
        transliteration: "basharan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a man",
          ur: "a انسان",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:34:4",
        arabic: "مِّثْلَكُمْ",
        transliteration: "mith'lakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "like you",
          ur: "like تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:34:5",
        arabic: "إِنَّكُمْ",
        transliteration: "innakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "indeed, you",
          ur: "indeed, تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:34:6",
        arabic: "إِذًۭا",
        transliteration: "idhan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:34:7",
        arabic: "لَّخَـٰسِرُونَ",
        transliteration: "lakhāsirūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely (will be) losers",
          ur: "یقیناً گا/گے be losers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' }
        ],
    },
  },
  35: { // Ayah 35
    text: "أَيَعِدُكُمْ أَنَّكُمْ إِذَا مِتُّمْ وَكُنتُمْ تُرَابًۭا وَعِظَـٰمًا أَنَّكُم مُّخْرَجُونَ",
    translation: {
      en: "",
      ur: "کیا یہ تم سے یہ کہتا ہے کہ جب تم مر جاؤ گے اور مٹی ہو جاؤ گے اور استخوان (کے سوا کچھ نہ رہے گا) تو تم (زمین سے) نکالے جاؤ گے",
    },
    words: [
      {
        id: "23:35:1",
        arabic: "أَيَعِدُكُمْ",
        transliteration: "ayaʿidukum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Does he promise you ",
          ur: "کرتا ہے وہ promise تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:35:2",
        arabic: "أَنَّكُمْ",
        transliteration: "annakum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "that you",
          ur: "کہ/وہ تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:35:3",
        arabic: "إِذَا",
        transliteration: "idhā",
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: {
          en: "when",
          ur: "when",
        },
        grammarRole: 'conditional',
        grammarExplanations: {
          en: "COND - conditional.",
          ur: "COND - conditional۔",
        },
      },
      {
        id: "23:35:4",
        arabic: "مِتُّمْ",
        transliteration: "mittum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you are dead",
          ur: "تم ہیں dead",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:35:5",
        arabic: "وَكُنتُمْ",
        transliteration: "wakuntum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and you become",
          ur: "اور تم become",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:35:6",
        arabic: "تُرَابًۭا",
        transliteration: "turāban",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "dust",
          ur: "dust",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:35:7",
        arabic: "وَعِظَـٰمًا",
        transliteration: "waʿiẓāman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and bones",
          ur: "اور bones",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:35:8",
        arabic: "أَنَّكُم",
        transliteration: "annakum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "that you",
          ur: "کہ/وہ تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:35:9",
        arabic: "مُّخْرَجُونَ",
        transliteration: "mukh'rajūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(will be) brought forth",
          ur: "گا/گے be brought forth",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'فعل + فاعل' }
        ],
    },
  },
  36: { // Ayah 36
    text: "۞ هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُونَ",
    translation: {
      en: "",
      ur: "جس بات کا تم سے وعدہ کیا جاتا ہے (بہت) بعید اور (بہت) بعید ہے",
    },
    words: [
      {
        id: "23:36:1",
        arabic: "۞ هَيْهَاتَ",
        transliteration: "hayhāta",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Far-(fetched)",
          ur: "Far-(fetched)",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:36:2",
        arabic: "هَيْهَاتَ",
        transliteration: "hayhāta",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "far-(fetched)",
          ur: "far-(fetched)",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:36:3",
        arabic: "لِمَا",
        transliteration: "limā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "is what",
          ur: "ہے کیا/جو",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:36:4",
        arabic: "تُوعَدُونَ",
        transliteration: "tūʿadūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you are promised",
          ur: "تم ہیں promised",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  37: { // Ayah 37
    text: "إِنْ هِىَ إِلَّا حَيَاتُنَا ٱلدُّنْيَا نَمُوتُ وَنَحْيَا وَمَا نَحْنُ بِمَبْعُوثِينَ",
    translation: {
      en: "",
      ur: "زندگی تو یہی ہماری دنیا کی زندگی ہے کہ (اسی میں) ہم مرتے اور جیتے ہیں، اور ہم پھر نہیں اُٹھائے جائیں گے",
    },
    words: [
      {
        id: "23:37:1",
        arabic: "إِنْ",
        transliteration: "in",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Not",
          ur: "نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:37:2",
        arabic: "هِىَ",
        transliteration: "hiya",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "it",
          ur: "یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:37:3",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) but",
          ur: "لیکن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:37:4",
        arabic: "حَيَاتُنَا",
        transliteration: "ḥayātunā",
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ي ي',
        meaning: {
          en: "our life",
          ur: "our life",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:37:5",
        arabic: "ٱلدُّنْيَا",
        transliteration: "l-dun'yā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the world",
          ur: "of the world",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:37:6",
        arabic: "نَمُوتُ",
        transliteration: "namūtu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "we die",
          ur: "ہم die",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:37:7",
        arabic: "وَنَحْيَا",
        transliteration: "wanaḥyā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and we live",
          ur: "اور ہم live",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:37:8",
        arabic: "وَمَا",
        transliteration: "wamā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and not",
          ur: "اور نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:37:9",
        arabic: "نَحْنُ",
        transliteration: "naḥnu",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "we",
          ur: "ہم",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:37:10",
        arabic: "بِمَبْعُوثِينَ",
        transliteration: "bimabʿūthīna",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(will be) resurrected",
          ur: "گا/گے be resurrected",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    },
  },
  38: { // Ayah 38
    text: "إِنْ هُوَ إِلَّا رَجُلٌ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًۭا وَمَا نَحْنُ لَهُۥ بِمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "یہ تو ایک ایسا آدمی ہے جس نے خدا پر جھوٹ افتراء کیا ہے اور ہم اس کو ماننے والے نہیں",
    },
    words: [
      {
        id: "23:38:1",
        arabic: "إِنْ",
        transliteration: "in",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Not",
          ur: "نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:38:2",
        arabic: "هُوَ",
        transliteration: "huwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "(is) he",
          ur: "وہ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:38:3",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but",
          ur: "لیکن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:38:4",
        arabic: "رَجُلٌ",
        transliteration: "rajulun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a man",
          ur: "a انسان",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:38:5",
        arabic: "ٱفْتَرَىٰ",
        transliteration: "if'tarā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "who (has) invented",
          ur: "جو has invented",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:38:6",
        arabic: "عَلَى",
        transliteration: "ʿalā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "about",
          ur: "about",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:38:7",
        arabic: "ٱللَّهِ",
        transliteration: "l-lahi",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: "Allah",
          ur: "اللہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:38:8",
        arabic: "كَذِبًۭا",
        transliteration: "kadhiban",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "a lie",
          ur: "a lie",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:38:9",
        arabic: "وَمَا",
        transliteration: "wamā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and not",
          ur: "اور نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:38:10",
        arabic: "نَحْنُ",
        transliteration: "naḥnu",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "we",
          ur: "ہم",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:38:11",
        arabic: "لَهُۥ",
        transliteration: "lahu",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(in) him",
          ur: "اسے",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:38:12",
        arabic: "بِمُؤْمِنِينَ",
        transliteration: "bimu'minīna",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(are) believers",
          ur: "مومنوں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'جار + مجرور' }
        ],
    },
  },
  39: { // Ayah 39
    text: "قَالَ رَبِّ ٱنصُرْنِى بِمَا كَذَّبُونِ",
    translation: {
      en: "",
      ur: "پیغمبر نے کہا کہ اے پروردگار انہوں نے مجھے جھوٹا سمجھا ہے تو میری مدد کر",
    },
    words: [
      {
        id: "23:39:1",
        arabic: "قَالَ",
        transliteration: "qāla",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "He said",
          ur: "وہ کہا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:39:2",
        arabic: "رَبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:39:3",
        arabic: "ٱنصُرْنِى",
        transliteration: "unṣur'nī",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Help me",
          ur: "Help me",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:39:4",
        arabic: "بِمَا",
        transliteration: "bimā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "because",
          ur: "because",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:39:5",
        arabic: "كَذَّبُونِ",
        transliteration: "kadhabūni",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "they deny me",
          ur: "وہ لوگ deny me",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' }
        ],
    },
  },
  40: { // Ayah 40
    text: "قَالَ عَمَّا قَلِيلٍۢ لَّيُصْبِحُنَّ نَـٰدِمِينَ",
    translation: {
      en: "",
      ur: "فرمایا کہ یہ تھوڑے ہی عرصے میں پشیمان ہو کر رہ جائیں گے",
    },
    words: [
      {
        id: "23:40:1",
        arabic: "قَالَ",
        transliteration: "qāla",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "He said",
          ur: "وہ کہا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:40:2",
        arabic: "عَمَّا",
        transliteration: "ʿammā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "After a little while",
          ur: "After a little while",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:40:3",
        arabic: "قَلِيلٍۢ",
        transliteration: "qalīlin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "After a little while",
          ur: "After a little while",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:40:4",
        arabic: "لَّيُصْبِحُنَّ",
        transliteration: "layuṣ'biḥunna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely they will become",
          ur: "یقیناً وہ لوگ گا/گے become",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:40:5",
        arabic: "نَـٰدِمِينَ",
        transliteration: "nādimīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "regretful",
          ur: "regretful",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' }
        ],
    },
  },
  41: { // Ayah 41
    text: "فَأَخَذَتْهُمُ ٱلصَّيْحَةُ بِٱلْحَقِّ فَجَعَلْنَـٰهُمْ غُثَآءًۭ ۚ فَبُعْدًۭا لِّلْقَوْمِ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "تو ان کو (وعدہٴ برحق کے مطابق) زور کی آواز نے آپکڑا، تو ہم نے ان کو کوڑا کرڈالا۔ پس ظالم لوگوں پر لعنت ہے",
    },
    words: [
      {
        id: "23:41:1",
        arabic: "فَأَخَذَتْهُمُ",
        transliteration: "fa-akhadhathumu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "So seized them",
          ur: "So seized انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:41:2",
        arabic: "ٱلصَّيْحَةُ",
        transliteration: "l-ṣayḥatu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the awful cry",
          ur: "the awful cry",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:41:3",
        arabic: "بِٱلْحَقِّ",
        transliteration: "bil-ḥaqi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in truth",
          ur: "میں حق",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:41:4",
        arabic: "فَجَعَلْنَـٰهُمْ",
        transliteration: "fajaʿalnāhum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and We made them",
          ur: "اور ہم بنایا انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:41:5",
        arabic: "غُثَآءًۭ ۚ",
        transliteration: "ghuthāan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(as) rubbish of dead leaves",
          ur: "as rubbish of dead leaves",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:41:6",
        arabic: "فَبُعْدًۭا",
        transliteration: "fabuʿ'dan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "So away",
          ur: "So away",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:41:7",
        arabic: "لِّلْقَوْمِ",
        transliteration: "lil'qawmi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "with the people ",
          ur: "کے ساتھ the لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:41:8",
        arabic: "ٱلظَّـٰلِمِينَ",
        transliteration: "l-ẓālimīna",
        pos: ['N'],
        posLabel: 'N',
        root: 'ظ ل م',
        meaning: {
          en: "the wrongdoers",
          ur: "the wrongdoers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
        ],
    },
  },
  42: { // Ayah 42
    text: "ثُمَّ أَنشَأْنَا مِنۢ بَعْدِهِمْ قُرُونًا ءَاخَرِينَ",
    translation: {
      en: "",
      ur: "پھر ان کے بعد ہم نے اور جماعتیں پیدا کیں",
    },
    words: [
      {
        id: "23:42:1",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:42:2",
        arabic: "أَنشَأْنَا",
        transliteration: "anshanā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We produced",
          ur: "ہم produced",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:42:3",
        arabic: "مِنۢ",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "after them",
          ur: "after انہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:42:4",
        arabic: "بَعْدِهِمْ",
        transliteration: "baʿdihim",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "after them",
          ur: "after انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:42:5",
        arabic: "قُرُونًا",
        transliteration: "qurūnan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a generation",
          ur: "a generation",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:42:6",
        arabic: "ءَاخَرِينَ",
        transliteration: "ākharīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "another",
          ur: "another",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' }
        ],
    },
  },
  43: { // Ayah 43
    text: "مَا تَسْبِقُ مِنْ أُمَّةٍ أَجَلَهَا وَمَا يَسْتَـْٔخِرُونَ",
    translation: {
      en: "",
      ur: "کوئی جماعت اپنے وقت سے نہ آگے جاسکتی ہے نہ پیچھے رہ سکتی ہے",
    },
    words: [
      {
        id: "23:43:1",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "Not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:43:2",
        arabic: "تَسْبِقُ",
        transliteration: "tasbiqu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "can precede",
          ur: "can precede",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:43:3",
        arabic: "مِنْ",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "any",
          ur: "any",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:43:4",
        arabic: "أُمَّةٍ",
        transliteration: "ummatin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "nation",
          ur: "nation",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:43:5",
        arabic: "أَجَلَهَا",
        transliteration: "ajalahā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "its term",
          ur: "its term",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:43:6",
        arabic: "وَمَا",
        transliteration: "wamā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and not",
          ur: "اور نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:43:7",
        arabic: "يَسْتَـْٔخِرُونَ",
        transliteration: "yastakhirūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they (can) delay (it)",
          ur: "وہ لوگ can delay یہ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'فعل + فاعل' }
        ],
    },
  },
  44: { // Ayah 44
    text: "ثُمَّ أَرْسَلْنَا رُسُلَنَا تَتْرَا ۖ كُلَّ مَا جَآءَ أُمَّةًۭ رَّسُولُهَا كَذَّبُوهُ ۚ فَأَتْبَعْنَا بَعْضَهُم بَعْضًۭا وَجَعَلْنَـٰهُمْ أَحَادِيثَ ۚ فَبُعْدًۭا لِّقَوْمٍۢ لَّا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "پھر ہم نے پے درپے اپنے پیغمبر بھیجتے رہے۔ جب کسی اُمت کے پاس اس کا پیغمبر آتا تھا تو وہ اسے جھٹلاتے تھے تو ہم بھی بعض کو بعض کے پیچھے (ہلاک کرتے اور ان پر عذاب) لاتے رہے اور ان کے افسانے بناتے رہے۔ پس جو لوگ ایمان نہیں لاتے ان پر لعنت",
    },
    words: [
      {
        id: "23:44:1",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:2",
        arabic: "أَرْسَلْنَا",
        transliteration: "arsalnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We sent",
          ur: "ہم بھیجا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:44:3",
        arabic: "رُسُلَنَا",
        transliteration: "rusulanā",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر س ل',
        meaning: {
          en: "Our Messengers",
          ur: "Our رسول",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:4",
        arabic: "تَتْرَا ۖ",
        transliteration: "tatrā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(in) succession",
          ur: "میں succession",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:44:5",
        arabic: "كُلَّ",
        transliteration: "kulla",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Every time",
          ur: "Every time",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:6",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Every time",
          ur: "Every time",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:7",
        arabic: "جَآءَ",
        transliteration: "jāa",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "came",
          ur: "آیا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:44:8",
        arabic: "أُمَّةًۭ",
        transliteration: "ummatan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(to) a nation",
          ur: "طرف a nation",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:9",
        arabic: "رَّسُولُهَا",
        transliteration: "rasūluhā",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر س ل',
        meaning: {
          en: "its Messenger",
          ur: "its رسول",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:10",
        arabic: "كَذَّبُوهُ ۚ",
        transliteration: "kadhabūhu",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "they denied him",
          ur: "وہ لوگ denied اسے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:44:11",
        arabic: "فَأَتْبَعْنَا",
        transliteration: "fa-atbaʿnā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "so We made (them) follow ",
          ur: "so ہم بنایا انہیں follow",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:12",
        arabic: "بَعْضَهُم",
        transliteration: "baʿḍahum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "some of them",
          ur: "some of انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:13",
        arabic: "بَعْضًۭا",
        transliteration: "baʿḍan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "others",
          ur: "others",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:14",
        arabic: "وَجَعَلْنَـٰهُمْ",
        transliteration: "wajaʿalnāhum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and We made them",
          ur: "اور ہم بنایا انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:15",
        arabic: "أَحَادِيثَ ۚ",
        transliteration: "aḥādītha",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "narrations",
          ur: "narrations",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:44:16",
        arabic: "فَبُعْدًۭا",
        transliteration: "fabuʿ'dan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "So away",
          ur: "So away",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:17",
        arabic: "لِّقَوْمٍۢ",
        transliteration: "liqawmin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "with a people ",
          ur: "کے ساتھ a لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:18",
        arabic: "لَّا",
        transliteration: "lā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:44:19",
        arabic: "يُؤْمِنُونَ",
        transliteration: "yu'minūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they believe",
          ur: "وہ لوگ ایمان لاتے ہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
          { from: 10, to: 11, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
          { from: 15, to: 16, label: 'فعل + فاعل' }
        ],
    },
  },
  45: { // Ayah 45
    text: "ثُمَّ أَرْسَلْنَا مُوسَىٰ وَأَخَاهُ هَـٰرُونَ بِـَٔايَـٰتِنَا وَسُلْطَـٰنٍۢ مُّبِينٍ",
    translation: {
      en: "",
      ur: "پھر ہم نے موسیٰ اور ان کے بھائی ہارون کو اپنی نشانیاں اور دلیل ظاہر دے کر بھیجا",
    },
    words: [
      {
        id: "23:45:1",
        arabic: "ثُمَّ",
        transliteration: "thumma",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:45:2",
        arabic: "أَرْسَلْنَا",
        transliteration: "arsalnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We sent",
          ur: "ہم بھیجا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:45:3",
        arabic: "مُوسَىٰ",
        transliteration: "mūsā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Musa",
          ur: "Musa",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:45:4",
        arabic: "وَأَخَاهُ",
        transliteration: "wa-akhāhu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and his brother",
          ur: "اور his brother",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:45:5",
        arabic: "هَـٰرُونَ",
        transliteration: "hārūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Harun",
          ur: "Harun",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:45:6",
        arabic: "بِـَٔايَـٰتِنَا",
        transliteration: "biāyātinā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "with Our Signs",
          ur: "کے ساتھ Our نشانیاں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:45:7",
        arabic: "وَسُلْطَـٰنٍۢ",
        transliteration: "wasul'ṭānin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and an authority",
          ur: "اور an authority",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:45:8",
        arabic: "مُّبِينٍ",
        transliteration: "mubīnin",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: "clear",
          ur: "واضح",
        },
        grammarRole: 'adjective',
        grammarExplanations: {
          en: "ADJ - adjective.",
          ur: "ADJ - adjective۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'موصوف + صفت' }
        ],
    },
  },
  46: { // Ayah 46
    text: "إِلَىٰ فِرْعَوْنَ وَمَلَإِي۟هِۦ فَٱسْتَكْبَرُوا۟ وَكَانُوا۟ قَوْمًا عَالِينَ",
    translation: {
      en: "",
      ur: "(یعنی) فرعون اور اس کی جماعت کی طرف، تو انہوں نے تکبر کیا اور وہ سرکش لوگ تھے",
    },
    words: [
      {
        id: "23:46:1",
        arabic: "إِلَىٰ",
        transliteration: "ilā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "To",
          ur: "طرف",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:46:2",
        arabic: "فِرْعَوْنَ",
        transliteration: "fir'ʿawna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Firaun",
          ur: "Firaun",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:46:3",
        arabic: "وَمَلَإِي۟هِۦ",
        transliteration: "wamala-ihi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and his chiefs",
          ur: "اور his chiefs",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:46:4",
        arabic: "فَٱسْتَكْبَرُوا۟",
        transliteration: "fa-is'takbarū",
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ب ر',
        meaning: {
          en: "but they behaved arrogantly",
          ur: "لیکن وہ لوگ behaved arrogantly",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:46:5",
        arabic: "وَكَانُوا۟",
        transliteration: "wakānū",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and they were",
          ur: "اور وہ لوگ تھے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:46:6",
        arabic: "قَوْمًا",
        transliteration: "qawman",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "a people",
          ur: "a لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:46:7",
        arabic: "عَالِينَ",
        transliteration: "ʿālīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "haughty",
          ur: "haughty",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'جار + مجرور' },
          { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
        ],
    },
  },
  47: { // Ayah 47
    text: "فَقَالُوٓا۟ أَنُؤْمِنُ لِبَشَرَيْنِ مِثْلِنَا وَقَوْمُهُمَا لَنَا عَـٰبِدُونَ",
    translation: {
      en: "",
      ur: "کہنے لگے کہ کیا ہم ان اپنے جیسے دو آدمیوں پر ایمان لے آئیں اور اُن کو قوم کے لوگ ہمارے خدمت گار ہیں",
    },
    words: [
      {
        id: "23:47:1",
        arabic: "فَقَالُوٓا۟",
        transliteration: "faqālū",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "Then they said",
          ur: "پھر وہ لوگ کہا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:47:2",
        arabic: "أَنُؤْمِنُ",
        transliteration: "anu'minu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Shall we believe",
          ur: "Shall ہم ایمان لاتے ہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:47:3",
        arabic: "لِبَشَرَيْنِ",
        transliteration: "libasharayni",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(in) two men",
          ur: "میں two مرد",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:47:4",
        arabic: "مِثْلِنَا",
        transliteration: "mith'linā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "like ourselves",
          ur: "like ourselves",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:47:5",
        arabic: "وَقَوْمُهُمَا",
        transliteration: "waqawmuhumā",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "while their people",
          ur: "while their لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:47:6",
        arabic: "لَنَا",
        transliteration: "lanā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "for us",
          ur: "کے لیے us",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:47:7",
        arabic: "عَـٰبِدُونَ",
        transliteration: "ʿābidūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) slaves",
          ur: "ہیں slaves",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
          { from: 6, to: 7, label: 'جار + مجرور' }
        ],
    },
  },
  48: { // Ayah 48
    text: "فَكَذَّبُوهُمَا فَكَانُوا۟ مِنَ ٱلْمُهْلَكِينَ",
    translation: {
      en: "",
      ur: "تو اُن لوگوں نے اُن کی تکذیب کی سو (آخر) ہلاک کر دیئے گئے",
    },
    words: [
      {
        id: "23:48:1",
        arabic: "فَكَذَّبُوهُمَا",
        transliteration: "fakadhabūhumā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "So they denied them",
          ur: "So وہ لوگ denied انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:48:2",
        arabic: "فَكَانُوا۟",
        transliteration: "fakānū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and they became",
          ur: "اور وہ لوگ became",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:48:3",
        arabic: "مِنَ",
        transliteration: "mina",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:48:4",
        arabic: "ٱلْمُهْلَكِينَ",
        transliteration: "l-muh'lakīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "those who were destroyed",
          ur: "those جو تھے destroyed",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  49: { // Ayah 49
    text: "وَلَقَدْ ءَاتَيْنَا مُوسَى ٱلْكِتَـٰبَ لَعَلَّهُمْ يَهْتَدُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے موسیٰ کو کتاب دی تھی تاکہ وہ لوگ ہدایت پائیں",
    },
    words: [
      {
        id: "23:49:1",
        arabic: "وَلَقَدْ",
        transliteration: "walaqad",
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: "And verily",
          ur: "اور verily",
        },
        grammarRole: 'emphasis',
        grammarExplanations: {
          en: "PART - emphasis.",
          ur: "PART - emphasis۔",
        },
      },
      {
        id: "23:49:2",
        arabic: "ءَاتَيْنَا",
        transliteration: "ātaynā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We gave",
          ur: "ہم دیا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:49:3",
        arabic: "مُوسَى",
        transliteration: "mūsā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Musa",
          ur: "Musa",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:49:4",
        arabic: "ٱلْكِتَـٰبَ",
        transliteration: "l-kitāba",
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: {
          en: "the Scripture",
          ur: "the Scripture",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:49:5",
        arabic: "لَعَلَّهُمْ",
        transliteration: "laʿallahum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "so that they may",
          ur: "so کہ/وہ وہ لوگ may",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:49:6",
        arabic: "يَهْتَدُونَ",
        transliteration: "yahtadūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "be guided",
          ur: "be guided",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' }
        ],
    },
  },
  50: { // Ayah 50
    text: "وَجَعَلْنَا ٱبْنَ مَرْيَمَ وَأُمَّهُۥٓ ءَايَةًۭ وَءَاوَيْنَـٰهُمَآ إِلَىٰ رَبْوَةٍۢ ذَاتِ قَرَارٍۢ وَمَعِينٍۢ",
    translation: {
      en: "",
      ur: "اور ہم نے مریم کے بیٹے (عیسیٰ) اور ان کی ماں کو (اپنی) نشانی بنایا تھا اور ان کو ایک اونچی جگہ پر جو رہنے کے لائق تھی اور جہاں (نتھرا ہوا) پانی جاری تھا، پناہ دی تھی",
    },
    words: [
      {
        id: "23:50:1",
        arabic: "وَجَعَلْنَا",
        transliteration: "wajaʿalnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And We made",
          ur: "اور ہم بنایا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:50:2",
        arabic: "ٱبْنَ",
        transliteration: "ib'na",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(the) son",
          ur: "بیٹا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:50:3",
        arabic: "مَرْيَمَ",
        transliteration: "maryama",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) Maryam",
          ur: "of Maryam",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:50:4",
        arabic: "وَأُمَّهُۥٓ",
        transliteration: "wa-ummahu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and his mother",
          ur: "اور his mother",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:50:5",
        arabic: "ءَايَةًۭ",
        transliteration: "āyatan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a Sign",
          ur: "a نشانی",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:50:6",
        arabic: "وَءَاوَيْنَـٰهُمَآ",
        transliteration: "waāwaynāhumā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and We sheltered them",
          ur: "اور ہم sheltered انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:50:7",
        arabic: "إِلَىٰ",
        transliteration: "ilā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to",
          ur: "طرف",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:50:8",
        arabic: "رَبْوَةٍۢ",
        transliteration: "rabwatin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a high ground",
          ur: "a high ground",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:50:9",
        arabic: "ذَاتِ",
        transliteration: "dhāti",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "of tranquility",
          ur: "of tranquility",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:50:10",
        arabic: "قَرَارٍۢ",
        transliteration: "qarārin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "of tranquility",
          ur: "of tranquility",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:50:11",
        arabic: "وَمَعِينٍۢ",
        transliteration: "wamaʿīnin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and water springs",
          ur: "اور پانی springs",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
          { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
        ],
    },
  },
  51: { // Ayah 51
    text: "يَـٰٓأَيُّهَا ٱلرُّسُلُ كُلُوا۟ مِنَ ٱلطَّيِّبَـٰتِ وَٱعْمَلُوا۟ صَـٰلِحًا ۖ إِنِّى بِمَا تَعْمَلُونَ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "اے پیغمبرو! پاکیزہ چیزیں کھاؤ اور عمل نیک کرو۔ جو عمل تم کرتے ہو میں ان سے واقف ہوں",
    },
    words: [
      {
        id: "23:51:1",
        arabic: "يَـٰٓأَيُّهَا",
        transliteration: "yāayyuhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "O Messengers",
          ur: "اے رسول",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:51:2",
        arabic: "ٱلرُّسُلُ",
        transliteration: "l-rusulu",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر س ل',
        meaning: {
          en: "O Messengers",
          ur: "اے رسول",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:51:3",
        arabic: "كُلُوا۟",
        transliteration: "kulū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Eat",
          ur: "Eat",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:51:4",
        arabic: "مِنَ",
        transliteration: "mina",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:51:5",
        arabic: "ٱلطَّيِّبَـٰتِ",
        transliteration: "l-ṭayibāti",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the good things",
          ur: "the اچھا things",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:51:6",
        arabic: "وَٱعْمَلُوا۟",
        transliteration: "wa-iʿ'malū",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and do",
          ur: "اور کرتے ہو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:51:7",
        arabic: "صَـٰلِحًا ۖ",
        transliteration: "ṣāliḥan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "righteous (deeds)",
          ur: "righteous deeds",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:51:8",
        arabic: "إِنِّى",
        transliteration: "innī",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Indeed, I Am",
          ur: "Indeed, میں Am",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:51:9",
        arabic: "بِمَا",
        transliteration: "bimā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of what",
          ur: "of کیا/جو",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:51:10",
        arabic: "تَعْمَلُونَ",
        transliteration: "taʿmalūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you do",
          ur: "تم کرتے ہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:51:11",
        arabic: "عَلِيمٌۭ",
        transliteration: "ʿalīmun",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: "All-Knower",
          ur: "All-Knower",
        },
        grammarRole: 'adjective',
        grammarExplanations: {
          en: "ADJ - adjective.",
          ur: "ADJ - adjective۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' }
        ],
    },
  },
  52: { // Ayah 52
    text: "وَإِنَّ هَـٰذِهِۦٓ أُمَّتُكُمْ أُمَّةًۭ وَٰحِدَةًۭ وَأَنَا۠ رَبُّكُمْ فَٱتَّقُونِ",
    translation: {
      en: "",
      ur: "اور یہ تمہاری جماعت (حقیقت میں) ایک ہی جماعت ہے اور میں تمہارا پروردگار ہوں تو مجھ سے ڈرو",
    },
    words: [
      {
        id: "23:52:1",
        arabic: "وَإِنَّ",
        transliteration: "wa-inna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And indeed",
          ur: "اور بے شک",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:52:2",
        arabic: "هَـٰذِهِۦٓ",
        transliteration: "hādhihi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "this",
          ur: "یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:52:3",
        arabic: "أُمَّتُكُمْ",
        transliteration: "ummatukum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "your religion",
          ur: "تمہارا religion",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:52:4",
        arabic: "أُمَّةًۭ",
        transliteration: "ummatan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) religion",
          ur: "ہے religion",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:52:5",
        arabic: "وَٰحِدَةًۭ",
        transliteration: "wāḥidatan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "one",
          ur: "one",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:52:6",
        arabic: "وَأَنَا۠",
        transliteration: "wa-anā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And I Am",
          ur: "اور میں Am",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:52:7",
        arabic: "رَبُّكُمْ",
        transliteration: "rabbukum",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "your Lord",
          ur: "تمہارا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:52:8",
        arabic: "فَٱتَّقُونِ",
        transliteration: "fa-ittaqūni",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "so fear Me",
          ur: "so ڈرو Me",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
          { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
        ],
    },
  },
  53: { // Ayah 53
    text: "فَتَقَطَّعُوٓا۟ أَمْرَهُم بَيْنَهُمْ زُبُرًۭا ۖ كُلُّ حِزْبٍۭ بِمَا لَدَيْهِمْ فَرِحُونَ",
    translation: {
      en: "",
      ur: "تو پھر آپس میں اپنے کام کو متفرق کرکے جدا جدا کردیا۔ جو چیزیں جس فرقے کے پاس ہے وہ اس سے خوش ہو رہا ہے",
    },
    words: [
      {
        id: "23:53:1",
        arabic: "فَتَقَطَّعُوٓا۟",
        transliteration: "fataqaṭṭaʿū",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "But they cut off",
          ur: "لیکن وہ لوگ cut off",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:53:2",
        arabic: "أَمْرَهُم",
        transliteration: "amrahum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "their affair (of unity)",
          ur: "their affair of unity",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:53:3",
        arabic: "بَيْنَهُمْ",
        transliteration: "baynahum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "between them",
          ur: "between انہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:53:4",
        arabic: "زُبُرًۭا ۖ",
        transliteration: "zuburan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(into) sects",
          ur: "into sects",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:53:5",
        arabic: "كُلُّ",
        transliteration: "kullu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "each",
          ur: "each",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:53:6",
        arabic: "حِزْبٍۭ",
        transliteration: "ḥiz'bin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "faction",
          ur: "faction",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:53:7",
        arabic: "بِمَا",
        transliteration: "bimā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in what",
          ur: "میں کیا/جو",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:53:8",
        arabic: "لَدَيْهِمْ",
        transliteration: "ladayhim",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they have",
          ur: "وہ لوگ have",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:53:9",
        arabic: "فَرِحُونَ",
        transliteration: "fariḥūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "rejoicing",
          ur: "rejoicing",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'فعل + فاعل' }
        ],
    },
  },
  54: { // Ayah 54
    text: "فَذَرْهُمْ فِى غَمْرَتِهِمْ حَتَّىٰ حِينٍ",
    translation: {
      en: "",
      ur: "تو ان کو ایک مدت تک ان کی غفلت میں رہنے دو",
    },
    words: [
      {
        id: "23:54:1",
        arabic: "فَذَرْهُمْ",
        transliteration: "fadharhum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "So leave them",
          ur: "So leave انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:54:2",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:54:3",
        arabic: "غَمْرَتِهِمْ",
        transliteration: "ghamratihim",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "their confusion",
          ur: "their confusion",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:54:4",
        arabic: "حَتَّىٰ",
        transliteration: "ḥattā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "until",
          ur: "until",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:54:5",
        arabic: "حِينٍ",
        transliteration: "ḥīnin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a time",
          ur: "a time",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' }
        ],
    },
  },
  55: { // Ayah 55
    text: "أَيَحْسَبُونَ أَنَّمَا نُمِدُّهُم بِهِۦ مِن مَّالٍۢ وَبَنِينَ",
    translation: {
      en: "",
      ur: "کیا یہ لوگ خیال کرتے ہیں کہ ہم جو دنیا میں ان کو مال اور بیٹوں سے مدد دیتے ہیں",
    },
    words: [
      {
        id: "23:55:1",
        arabic: "أَيَحْسَبُونَ",
        transliteration: "ayaḥsabūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Do they think",
          ur: "کرتے ہو وہ لوگ think",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:55:2",
        arabic: "أَنَّمَا",
        transliteration: "annamā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "that what",
          ur: "کہ/وہ کیا/جو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:55:3",
        arabic: "نُمِدُّهُم",
        transliteration: "numidduhum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We extend to them",
          ur: "ہم extend طرف انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:55:4",
        arabic: "بِهِۦ",
        transliteration: "bihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "[with it]",
          ur: "[with it]",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:55:5",
        arabic: "مِن",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:55:6",
        arabic: "مَّالٍۢ",
        transliteration: "mālin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "wealth",
          ur: "مال",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:55:7",
        arabic: "وَبَنِينَ",
        transliteration: "wabanīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and children",
          ur: "اور بچے/اولاد",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'جار + مجرور' }
        ],
    },
  },
  56: { // Ayah 56
    text: "نُسَارِعُ لَهُمْ فِى ٱلْخَيْرَٰتِ ۚ بَل لَّا يَشْعُرُونَ",
    translation: {
      en: "",
      ur: "تو (اس سے) ان کی بھلائی میں جلدی کر رہے ہیں (نہیں) بلکہ یہ سمجھتے ہی نہیں",
    },
    words: [
      {
        id: "23:56:1",
        arabic: "نُسَارِعُ",
        transliteration: "nusāriʿu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We hasten",
          ur: "ہم hasten",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:56:2",
        arabic: "لَهُمْ",
        transliteration: "lahum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to them",
          ur: "طرف انہیں",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:56:3",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:56:4",
        arabic: "ٱلْخَيْرَٰتِ ۚ",
        transliteration: "l-khayrāti",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'خ ي ر',
        meaning: {
          en: "the good",
          ur: "the اچھا",
        },
        grammarRole: 'adjective',
        grammarExplanations: {
          en: "ADJ - adjective.",
          ur: "ADJ - adjective۔",
        },
      },
      {
        id: "23:56:5",
        arabic: "بَل",
        transliteration: "bal",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Nay",
          ur: "Nay",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:56:6",
        arabic: "لَّا",
        transliteration: "lā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:56:7",
        arabic: "يَشْعُرُونَ",
        transliteration: "yashʿurūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they perceive",
          ur: "وہ لوگ perceive",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  57: { // Ayah 57
    text: "إِنَّ ٱلَّذِينَ هُم مِّنْ خَشْيَةِ رَبِّهِم مُّشْفِقُونَ",
    translation: {
      en: "",
      ur: "جو اپنے پروردگار کے خوف سے ڈرتے ہیں",
    },
    words: [
      {
        id: "23:57:1",
        arabic: "إِنَّ",
        transliteration: "inna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Indeed",
          ur: "بے شک",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:57:2",
        arabic: "ٱلَّذِينَ",
        transliteration: "alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "those who",
          ur: "جو لوگ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:57:3",
        arabic: "هُم",
        transliteration: "hum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "[they]",
          ur: "[they]",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:57:4",
        arabic: "مِّنْ",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:57:5",
        arabic: "خَشْيَةِ",
        transliteration: "khashyati",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(the) fear",
          ur: "ڈرو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:57:6",
        arabic: "رَبِّهِم",
        transliteration: "rabbihim",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "(of) their Lord",
          ur: "ان کا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:57:7",
        arabic: "مُّشْفِقُونَ",
        transliteration: "mush'fiqūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) cautious",
          ur: "ہیں cautious",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
        ],
    },
  },
  58: { // Ayah 58
    text: "وَٱلَّذِينَ هُم بِـَٔايَـٰتِ رَبِّهِمْ يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "اور جو اپنے پروردگار کی آیتوں پر ایمان رکھتے ہیں",
    },
    words: [
      {
        id: "23:58:1",
        arabic: "وَٱلَّذِينَ",
        transliteration: "wa-alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And those",
          ur: "اور those",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:58:2",
        arabic: "هُم",
        transliteration: "hum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "[they]",
          ur: "[they]",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:58:3",
        arabic: "بِـَٔايَـٰتِ",
        transliteration: "biāyāti",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in (the) Signs",
          ur: "میں the نشانیاں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:58:4",
        arabic: "رَبِّهِمْ",
        transliteration: "rabbihim",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "(of) their Lord",
          ur: "ان کا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:58:5",
        arabic: "يُؤْمِنُونَ",
        transliteration: "yu'minūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "believe",
          ur: "ایمان لاتے ہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'جار + مجرور' }
        ],
    },
  },
  59: { // Ayah 59
    text: "وَٱلَّذِينَ هُم بِرَبِّهِمْ لَا يُشْرِكُونَ",
    translation: {
      en: "",
      ur: "اور جو اپنے پروردگار کے ساتھ شریک نہیں کرتے",
    },
    words: [
      {
        id: "23:59:1",
        arabic: "وَٱلَّذِينَ",
        transliteration: "wa-alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And those",
          ur: "اور those",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:59:2",
        arabic: "هُم",
        transliteration: "hum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "[they]",
          ur: "[they]",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:59:3",
        arabic: "بِرَبِّهِمْ",
        transliteration: "birabbihim",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "with their Lord",
          ur: "کے ساتھ their رب",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:59:4",
        arabic: "لَا",
        transliteration: "lā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "(do) not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:59:5",
        arabic: "يُشْرِكُونَ",
        transliteration: "yush'rikūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "associate partners",
          ur: "associate partners",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'نفی + فعل' }
        ],
    },
  },
  60: { // Ayah 60
    text: "وَٱلَّذِينَ يُؤْتُونَ مَآ ءَاتَوا۟ وَّقُلُوبُهُمْ وَجِلَةٌ أَنَّهُمْ إِلَىٰ رَبِّهِمْ رَٰجِعُونَ",
    translation: {
      en: "",
      ur: "اور جو دے سکتے ہیں دیتے ہیں اور ان کے دل اس بات سے ڈرتے رہتے ہیں کہ ان کو اپنے پروردگار کی لوٹ کر جانا ہے",
    },
    words: [
      {
        id: "23:60:1",
        arabic: "وَٱلَّذِينَ",
        transliteration: "wa-alladhīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And those who",
          ur: "اور those جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:60:2",
        arabic: "يُؤْتُونَ",
        transliteration: "yu'tūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "give",
          ur: "دو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:60:3",
        arabic: "مَآ",
        transliteration: "mā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "what",
          ur: "کیا/جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:60:4",
        arabic: "ءَاتَوا۟",
        transliteration: "ātaw",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they give",
          ur: "وہ لوگ دو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:60:5",
        arabic: "وَّقُلُوبُهُمْ",
        transliteration: "waqulūbuhum",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "while their hearts",
          ur: "while their دل",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:60:6",
        arabic: "وَجِلَةٌ",
        transliteration: "wajilatun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) fearful",
          ur: "ہیں fearful",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:60:7",
        arabic: "أَنَّهُمْ",
        transliteration: "annahum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "because they",
          ur: "because وہ لوگ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:60:8",
        arabic: "إِلَىٰ",
        transliteration: "ilā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to",
          ur: "طرف",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:60:9",
        arabic: "رَبِّهِمْ",
        transliteration: "rabbihim",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "their Lord",
          ur: "ان کا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:60:10",
        arabic: "رَٰجِعُونَ",
        transliteration: "rājiʿūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(will) return",
          ur: "لوٹنا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'جار + مجرور' }
        ],
    },
  },
  61: { // Ayah 61
    text: "أُو۟لَـٰٓئِكَ يُسَـٰرِعُونَ فِى ٱلْخَيْرَٰتِ وَهُمْ لَهَا سَـٰبِقُونَ",
    translation: {
      en: "",
      ur: "یہی لوگ نیکیوں میں جلدی کرے اور یہی اُن کے لئے آگے نکل جاتے ہیں",
    },
    words: [
      {
        id: "23:61:1",
        arabic: "أُو۟لَـٰٓئِكَ",
        transliteration: "ulāika",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(It is) those",
          ur: "یہ ہے those",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:61:2",
        arabic: "يُسَـٰرِعُونَ",
        transliteration: "yusāriʿūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "who hasten",
          ur: "جو hasten",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:61:3",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:61:4",
        arabic: "ٱلْخَيْرَٰتِ",
        transliteration: "l-khayrāti",
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ي ر',
        meaning: {
          en: "the good (deeds)",
          ur: "the اچھا deeds",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:61:5",
        arabic: "وَهُمْ",
        transliteration: "wahum",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "and they",
          ur: "اور وہ لوگ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:61:6",
        arabic: "لَهَا",
        transliteration: "lahā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "in them",
          ur: "میں انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:61:7",
        arabic: "سَـٰبِقُونَ",
        transliteration: "sābiqūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) foremost",
          ur: "ہیں foremost",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    },
  },
  62: { // Ayah 62
    text: "وَلَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَا ۖ وَلَدَيْنَا كِتَـٰبٌۭ يَنطِقُ بِٱلْحَقِّ ۚ وَهُمْ لَا يُظْلَمُونَ",
    translation: {
      en: "",
      ur: "اور ہم کسی شخص کو اس کی طاقت سے زیادہ تکلیف نہیں دیتے اور ہمارے پاس کتاب ہے جو سچ سچ کہہ دیتی ہے اور ان لوگوں پر ظلم نہیں کیا جائے گا",
    },
    words: [
      {
        id: "23:62:1",
        arabic: "وَلَا",
        transliteration: "walā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "And not",
          ur: "اور نہیں",
        },
        grammarRole: 'prohibition',
        grammarExplanations: {
          en: "NEG - prohibition.",
          ur: "NEG - prohibition۔",
        },
      },
      {
        id: "23:62:2",
        arabic: "نُكَلِّفُ",
        transliteration: "nukallifu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We burden",
          ur: "ہم burden",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:62:3",
        arabic: "نَفْسًا",
        transliteration: "nafsan",
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ف س',
        meaning: {
          en: "any soul",
          ur: "any جان",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:62:4",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "except",
          ur: "سوائے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:62:5",
        arabic: "وُسْعَهَا ۖ",
        transliteration: "wus'ʿahā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(to) its capacity",
          ur: "طرف its capacity",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:62:6",
        arabic: "وَلَدَيْنَا",
        transliteration: "waladaynā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and with Us",
          ur: "اور کے ساتھ Us",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:62:7",
        arabic: "كِتَـٰبٌۭ",
        transliteration: "kitābun",
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: {
          en: "(is) a Record",
          ur: "ہے a Record",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:62:8",
        arabic: "يَنطِقُ",
        transliteration: "yanṭiqu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(which) speaks",
          ur: "جو speaks",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:62:9",
        arabic: "بِٱلْحَقِّ ۚ",
        transliteration: "bil-ḥaqi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "with the truth",
          ur: "کے ساتھ the حق",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:62:10",
        arabic: "وَهُمْ",
        transliteration: "wahum",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "and they",
          ur: "اور وہ لوگ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:62:11",
        arabic: "لَا",
        transliteration: "lā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "(will) not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:62:12",
        arabic: "يُظْلَمُونَ",
        transliteration: "yuẓ'lamūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "be wronged",
          ur: "be wronged",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 11, to: 12, label: 'نفی + فعل' }
        ],
    },
  },
  63: { // Ayah 63
    text: "بَلْ قُلُوبُهُمْ فِى غَمْرَةٍۢ مِّنْ هَـٰذَا وَلَهُمْ أَعْمَـٰلٌۭ مِّن دُونِ ذَٰلِكَ هُمْ لَهَا عَـٰمِلُونَ",
    translation: {
      en: "",
      ur: "مگر ان کے دل ان (باتوں) کی طرف سے غفلت میں (پڑے ہوئے) ہیں، اور ان کے سوا اور اعمال بھی ہیں جو یہ کرتے رہتے ہیں",
    },
    words: [
      {
        id: "23:63:1",
        arabic: "بَلْ",
        transliteration: "bal",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "Nay",
          ur: "Nay",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:63:2",
        arabic: "قُلُوبُهُمْ",
        transliteration: "qulūbuhum",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "their hearts",
          ur: "their دل",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:63:3",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(are) in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:63:4",
        arabic: "غَمْرَةٍۢ",
        transliteration: "ghamratin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "confusion",
          ur: "confusion",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:63:5",
        arabic: "مِّنْ",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "over",
          ur: "over",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:63:6",
        arabic: "هَـٰذَا",
        transliteration: "hādhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "this",
          ur: "یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:63:7",
        arabic: "وَلَهُمْ",
        transliteration: "walahum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and for them",
          ur: "اور کے لیے انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:63:8",
        arabic: "أَعْمَـٰلٌۭ",
        transliteration: "aʿmālun",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(are) deeds",
          ur: "ہیں deeds",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:63:9",
        arabic: "مِّن",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "besides",
          ur: "besides",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:63:10",
        arabic: "دُونِ",
        transliteration: "dūni",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "besides",
          ur: "besides",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:63:11",
        arabic: "ذَٰلِكَ",
        transliteration: "dhālika",
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: "that",
          ur: "کہ/وہ",
        },
        grammarRole: 'demonstrative',
        grammarExplanations: {
          en: "DEM - demonstrative.",
          ur: "DEM - demonstrative۔",
        },
      },
      {
        id: "23:63:12",
        arabic: "هُمْ",
        transliteration: "hum",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "they",
          ur: "وہ لوگ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:63:13",
        arabic: "لَهَا",
        transliteration: "lahā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "for it",
          ur: "کے لیے یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:63:14",
        arabic: "عَـٰمِلُونَ",
        transliteration: "ʿāmilūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) doers",
          ur: "ہیں doers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 8, to: 9, label: 'فعل + فاعل' }
        ],
    },
  },
  64: { // Ayah 64
    text: "حَتَّىٰٓ إِذَآ أَخَذْنَا مُتْرَفِيهِم بِٱلْعَذَابِ إِذَا هُمْ يَجْـَٔرُونَ",
    translation: {
      en: "",
      ur: "یہاں تک کہ جب ہم نے ان میں سے آسودہ حال لوگوں کو پکڑ لیا تو وہ اس وقت چلاّئیں گے",
    },
    words: [
      {
        id: "23:64:1",
        arabic: "حَتَّىٰٓ",
        transliteration: "ḥattā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Until",
          ur: "Until",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:64:2",
        arabic: "إِذَآ",
        transliteration: "idhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "when",
          ur: "when",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:64:3",
        arabic: "أَخَذْنَا",
        transliteration: "akhadhnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We seize",
          ur: "ہم seize",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:64:4",
        arabic: "مُتْرَفِيهِم",
        transliteration: "mut'rafīhim",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "their affluent ones",
          ur: "their affluent ones",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:64:5",
        arabic: "بِٱلْعَذَابِ",
        transliteration: "bil-ʿadhābi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: 'ع ذ ب',
        meaning: {
          en: "with the punishment",
          ur: "کے ساتھ the عذاب",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:64:6",
        arabic: "إِذَا",
        transliteration: "idhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "behold",
          ur: "behold",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:64:7",
        arabic: "هُمْ",
        transliteration: "hum",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "They",
          ur: "وہ لوگ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:64:8",
        arabic: "يَجْـَٔرُونَ",
        transliteration: "yajarūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "cry for help",
          ur: "cry کے لیے help",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'جار + مجرور' }
        ],
    },
  },
  65: { // Ayah 65
    text: "لَا تَجْـَٔرُوا۟ ٱلْيَوْمَ ۖ إِنَّكُم مِّنَّا لَا تُنصَرُونَ",
    translation: {
      en: "",
      ur: "آج مت چلاّؤ! تم کو ہم سے کچھ مدد نہیں ملے گی",
    },
    words: [
      {
        id: "23:65:1",
        arabic: "لَا",
        transliteration: "lā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "(Do) not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:65:2",
        arabic: "تَجْـَٔرُوا۟",
        transliteration: "tajarū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "cry for help",
          ur: "cry کے لیے help",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:65:3",
        arabic: "ٱلْيَوْمَ ۖ",
        transliteration: "l-yawma",
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: "today",
          ur: "today",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:65:4",
        arabic: "إِنَّكُم",
        transliteration: "innakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Indeed, you",
          ur: "Indeed, تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:65:5",
        arabic: "مِّنَّا",
        transliteration: "minnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "from Us",
          ur: "سے Us",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:65:6",
        arabic: "لَا",
        transliteration: "lā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:65:7",
        arabic: "تُنصَرُونَ",
        transliteration: "tunṣarūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "will be helped",
          ur: "گا/گے be helped",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'نفی + فعل' },
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'نفی + فعل' }
        ],
    },
  },
  66: { // Ayah 66
    text: "قَدْ كَانَتْ ءَايَـٰتِى تُتْلَىٰ عَلَيْكُمْ فَكُنتُمْ عَلَىٰٓ أَعْقَـٰبِكُمْ تَنكِصُونَ",
    translation: {
      en: "",
      ur: "میری آیتیں تم کو پڑھ پڑھ کر سنائی جاتی تھیں اور تم الٹے پاؤں پھر پھر جاتے تھے",
    },
    words: [
      {
        id: "23:66:1",
        arabic: "قَدْ",
        transliteration: "qad",
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: "Verily",
          ur: "Verily",
        },
        grammarRole: 'emphasis',
        grammarExplanations: {
          en: "PART - emphasis.",
          ur: "PART - emphasis۔",
        },
      },
      {
        id: "23:66:2",
        arabic: "كَانَتْ",
        transliteration: "kānat",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "were",
          ur: "تھے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:66:3",
        arabic: "ءَايَـٰتِى",
        transliteration: "āyātī",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "My Verses",
          ur: "My آیات",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:66:4",
        arabic: "تُتْلَىٰ",
        transliteration: "tut'lā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "recited",
          ur: "recited",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:66:5",
        arabic: "عَلَيْكُمْ",
        transliteration: "ʿalaykum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to you",
          ur: "طرف تم",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:66:6",
        arabic: "فَكُنتُمْ",
        transliteration: "fakuntum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but you used",
          ur: "لیکن تم used",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:66:7",
        arabic: "عَلَىٰٓ",
        transliteration: "ʿalā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(to) on",
          ur: "پر",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:66:8",
        arabic: "أَعْقَـٰبِكُمْ",
        transliteration: "aʿqābikum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "your heels",
          ur: "تمہارا heels",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:66:9",
        arabic: "تَنكِصُونَ",
        transliteration: "tankiṣūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "turn back",
          ur: "turn back",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'جار + مجرور' }
        ],
    },
  },
  67: { // Ayah 67
    text: "مُسْتَكْبِرِينَ بِهِۦ سَـٰمِرًۭا تَهْجُرُونَ",
    translation: {
      en: "",
      ur: "ان سے سرکشی کرتے، کہانیوں میں مشغول ہوتے اور بیہودہ بکواس کرتے تھے",
    },
    words: [
      {
        id: "23:67:1",
        arabic: "مُسْتَكْبِرِينَ",
        transliteration: "mus'takbirīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(Being) arrogant",
          ur: "Being arrogant",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:67:2",
        arabic: "بِهِۦ",
        transliteration: "bihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "about it",
          ur: "about یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:67:3",
        arabic: "سَـٰمِرًۭا",
        transliteration: "sāmiran",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "conversing by night",
          ur: "conversing by رات",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:67:4",
        arabic: "تَهْجُرُونَ",
        transliteration: "tahjurūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "speaking evil",
          ur: "speaking برا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' }
        ],
    },
  },
  68: { // Ayah 68
    text: "أَفَلَمْ يَدَّبَّرُوا۟ ٱلْقَوْلَ أَمْ جَآءَهُم مَّا لَمْ يَأْتِ ءَابَآءَهُمُ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "کیا انہوں نے اس کلام میں غور نہیں کیا یا ان کے پاس کوئی ایسی چیز آئی ہے جو ان کے اگلے باپ دادا کے پاس نہیں تھی",
    },
    words: [
      {
        id: "23:68:1",
        arabic: "أَفَلَمْ",
        transliteration: "afalam",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Then, do not",
          ur: "Then, کرتے ہو نہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:68:2",
        arabic: "يَدَّبَّرُوا۟",
        transliteration: "yaddabbarū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they ponder",
          ur: "وہ لوگ ponder",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:68:3",
        arabic: "ٱلْقَوْلَ",
        transliteration: "l-qawla",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the Word",
          ur: "the Word",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:68:4",
        arabic: "أَمْ",
        transliteration: "am",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "or",
          ur: "یا",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:68:5",
        arabic: "جَآءَهُم",
        transliteration: "jāahum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "has come to them",
          ur: "has آؤ طرف انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:68:6",
        arabic: "مَّا",
        transliteration: "mā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "what",
          ur: "کیا/جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:68:7",
        arabic: "لَمْ",
        transliteration: "lam",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:68:8",
        arabic: "يَأْتِ",
        transliteration: "yati",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(had) come",
          ur: "آؤ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:68:9",
        arabic: "ءَابَآءَهُمُ",
        transliteration: "ābāahumu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(to) their forefathers",
          ur: "طرف their forefathers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:68:10",
        arabic: "ٱلْأَوَّلِينَ",
        transliteration: "l-awalīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(to) their forefathers",
          ur: "طرف their forefathers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'نفی + فعل' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
        ],
    },
  },
  69: { // Ayah 69
    text: "أَمْ لَمْ يَعْرِفُوا۟ رَسُولَهُمْ فَهُمْ لَهُۥ مُنكِرُونَ",
    translation: {
      en: "",
      ur: "یا یہ اپنے پیغمبر کو جانتے پہنچانتے نہیں، اس وجہ سے ان کو نہیں مانتے",
    },
    words: [
      {
        id: "23:69:1",
        arabic: "أَمْ",
        transliteration: "am",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "Or",
          ur: "یا",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:69:2",
        arabic: "لَمْ",
        transliteration: "lam",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "(do) not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:69:3",
        arabic: "يَعْرِفُوا۟",
        transliteration: "yaʿrifū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they recognize",
          ur: "وہ لوگ recognize",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:69:4",
        arabic: "رَسُولَهُمْ",
        transliteration: "rasūlahum",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر س ل',
        meaning: {
          en: "their Messenger",
          ur: "their رسول",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:69:5",
        arabic: "فَهُمْ",
        transliteration: "fahum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "so they",
          ur: "so وہ لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:69:6",
        arabic: "لَهُۥ",
        transliteration: "lahu",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(are) rejecting him",
          ur: "ہیں rejecting اسے",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:69:7",
        arabic: "مُنكِرُونَ",
        transliteration: "munkirūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) rejecting him",
          ur: "ہیں rejecting اسے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'نفی + فعل' },
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'جار + مجرور' }
        ],
    },
  },
  70: { // Ayah 70
    text: "أَمْ يَقُولُونَ بِهِۦ جِنَّةٌۢ ۚ بَلْ جَآءَهُم بِٱلْحَقِّ وَأَكْثَرُهُمْ لِلْحَقِّ كَـٰرِهُونَ",
    translation: {
      en: "",
      ur: "کیا یہ کہتے ہیں کہ اسے سودا ہے (نہیں) بلکہ وہ ان کے پاس حق کو لے کر آئے ہیں اور ان میں سے اکثر حق کو ناپسند کرتے ہیں",
    },
    words: [
      {
        id: "23:70:1",
        arabic: "أَمْ",
        transliteration: "am",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "Or",
          ur: "یا",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:70:2",
        arabic: "يَقُولُونَ",
        transliteration: "yaqūlūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they say",
          ur: "وہ لوگ کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:70:3",
        arabic: "بِهِۦ",
        transliteration: "bihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "In him",
          ur: "میں اسے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:70:4",
        arabic: "جِنَّةٌۢ ۚ",
        transliteration: "jinnatun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) madness",
          ur: "ہے madness",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:70:5",
        arabic: "بَلْ",
        transliteration: "bal",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "Nay",
          ur: "Nay",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:70:6",
        arabic: "جَآءَهُم",
        transliteration: "jāahum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "he brought them",
          ur: "وہ brought انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:70:7",
        arabic: "بِٱلْحَقِّ",
        transliteration: "bil-ḥaqi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "the truth",
          ur: "حق",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:70:8",
        arabic: "وَأَكْثَرُهُمْ",
        transliteration: "wa-aktharuhum",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: "but most of them",
          ur: "لیکن most of انہیں",
        },
        grammarRole: 'adjective',
        grammarExplanations: {
          en: "ADJ - adjective.",
          ur: "ADJ - adjective۔",
        },
      },
      {
        id: "23:70:9",
        arabic: "لِلْحَقِّ",
        transliteration: "lil'ḥaqqi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: 'ح ق ق',
        meaning: {
          en: "to the truth",
          ur: "طرف the حق",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:70:10",
        arabic: "كَـٰرِهُونَ",
        transliteration: "kārihūna",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(are) averse",
          ur: "ہیں averse",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' }
        ],
    },
  },
  71: { // Ayah 71
    text: "وَلَوِ ٱتَّبَعَ ٱلْحَقُّ أَهْوَآءَهُمْ لَفَسَدَتِ ٱلسَّمَـٰوَٰتُ وَٱلْأَرْضُ وَمَن فِيهِنَّ ۚ بَلْ أَتَيْنَـٰهُم بِذِكْرِهِمْ فَهُمْ عَن ذِكْرِهِم مُّعْرِضُونَ",
    translation: {
      en: "",
      ur: "اور خدائے (برحق) ان کی خواہشوں پر چلے تو آسمان اور زمین اور جو ان میں ہیں سب درہم برہم ہوجائیں۔ بلکہ ہم نے ان کے پاس ان کی نصیحت (کی کتاب) پہنچا دی ہے اور وہ اپنی (کتاب) نصیحت سے منہ پھیر رہے ہیں",
    },
    words: [
      {
        id: "23:71:1",
        arabic: "وَلَوِ",
        transliteration: "walawi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "But if",
          ur: "لیکن if",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:71:2",
        arabic: "ٱتَّبَعَ",
        transliteration: "ittabaʿa",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(had) followed",
          ur: "had followed",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:71:3",
        arabic: "ٱلْحَقُّ",
        transliteration: "l-ḥaqu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the truth",
          ur: "حق",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:71:4",
        arabic: "أَهْوَآءَهُمْ",
        transliteration: "ahwāahum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "their desires",
          ur: "their desires",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:71:5",
        arabic: "لَفَسَدَتِ",
        transliteration: "lafasadati",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely (would) have been corrupted",
          ur: "یقیناً would have been corrupted",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:71:6",
        arabic: "ٱلسَّمَـٰوَٰتُ",
        transliteration: "l-samāwātu",
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: {
          en: "the heavens",
          ur: "آسمانوں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:71:7",
        arabic: "وَٱلْأَرْضُ",
        transliteration: "wal-arḍu",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ر ض',
        meaning: {
          en: "and the earth",
          ur: "اور the زمین",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:71:8",
        arabic: "وَمَن",
        transliteration: "waman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and whoever",
          ur: "اور whoever",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:71:9",
        arabic: "فِيهِنَّ ۚ",
        transliteration: "fīhinna",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(is) therein",
          ur: "ہے therein",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:71:10",
        arabic: "بَلْ",
        transliteration: "bal",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "Nay",
          ur: "Nay",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:71:11",
        arabic: "أَتَيْنَـٰهُم",
        transliteration: "ataynāhum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We have brought them",
          ur: "ہم have brought انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:71:12",
        arabic: "بِذِكْرِهِمْ",
        transliteration: "bidhik'rihim",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "their reminder",
          ur: "their reminder",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:71:13",
        arabic: "فَهُمْ",
        transliteration: "fahum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but they",
          ur: "لیکن وہ لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:71:14",
        arabic: "عَن",
        transliteration: "ʿan",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:71:15",
        arabic: "ذِكْرِهِم",
        transliteration: "dhik'rihim",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "their reminder",
          ur: "their reminder",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:71:16",
        arabic: "مُّعْرِضُونَ",
        transliteration: "muʿ'riḍūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) turning away",
          ur: "ہیں turning away",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'جار + مجرور' }
        ],
    },
  },
  72: { // Ayah 72
    text: "أَمْ تَسْـَٔلُهُمْ خَرْجًۭا فَخَرَاجُ رَبِّكَ خَيْرٌۭ ۖ وَهُوَ خَيْرُ ٱلرَّٰزِقِينَ",
    translation: {
      en: "",
      ur: "کیا تم ان سے (تبلیغ کے صلے میں) کچھ مال مانگتے ہو، تو تمہارا پروردگار کا مال بہت اچھا ہے اور وہ سب سے بہتر رزق دینے والا ہے",
    },
    words: [
      {
        id: "23:72:1",
        arabic: "أَمْ",
        transliteration: "am",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "Or",
          ur: "یا",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:72:2",
        arabic: "تَسْـَٔلُهُمْ",
        transliteration: "tasaluhum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you ask them",
          ur: "تم ask انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:72:3",
        arabic: "خَرْجًۭا",
        transliteration: "kharjan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(for) a payment",
          ur: "کے لیے a payment",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:72:4",
        arabic: "فَخَرَاجُ",
        transliteration: "fakharāju",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "But the payment",
          ur: "لیکن the payment",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:72:5",
        arabic: "رَبِّكَ",
        transliteration: "rabbika",
        pos: ['V'],
        posLabel: 'V',
        root: 'ر ب ب',
        meaning: {
          en: "(of) your Lord",
          ur: "تمہارا رب",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:72:6",
        arabic: "خَيْرٌۭ ۖ",
        transliteration: "khayrun",
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ي ر',
        meaning: {
          en: "(is) best",
          ur: "ہے best",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:72:7",
        arabic: "وَهُوَ",
        transliteration: "wahuwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "and He",
          ur: "اور وہ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:72:8",
        arabic: "خَيْرُ",
        transliteration: "khayru",
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ي ر',
        meaning: {
          en: "(is) the Best",
          ur: "ہے the Best",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:72:9",
        arabic: "ٱلرَّٰزِقِينَ",
        transliteration: "l-rāziqīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the Providers",
          ur: "of the Providers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' }
        ],
    },
  },
  73: { // Ayah 73
    text: "وَإِنَّكَ لَتَدْعُوهُمْ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
    translation: {
      en: "",
      ur: "اور تم تو ان کو سیدھے راستے کی طرف بلاتے ہو",
    },
    words: [
      {
        id: "23:73:1",
        arabic: "وَإِنَّكَ",
        transliteration: "wa-innaka",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And indeed, you",
          ur: "اور indeed, تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:73:2",
        arabic: "لَتَدْعُوهُمْ",
        transliteration: "latadʿūhum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "certainly call them",
          ur: "یقیناً call انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:73:3",
        arabic: "إِلَىٰ",
        transliteration: "ilā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to",
          ur: "طرف",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:73:4",
        arabic: "صِرَٰطٍۢ",
        transliteration: "ṣirāṭin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ص ر ط',
        meaning: {
          en: "(the) Path",
          ur: "the راستہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:73:5",
        arabic: "مُّسْتَقِيمٍۢ",
        transliteration: "mus'taqīmin",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: "Straight",
          ur: "سیدھا",
        },
        grammarRole: 'adjective',
        grammarExplanations: {
          en: "ADJ - adjective.",
          ur: "ADJ - adjective۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 4, to: 5, label: 'موصوف + صفت' }
        ],
    },
  },
  74: { // Ayah 74
    text: "وَإِنَّ ٱلَّذِينَ لَا يُؤْمِنُونَ بِٱلْـَٔاخِرَةِ عَنِ ٱلصِّرَٰطِ لَنَـٰكِبُونَ",
    translation: {
      en: "",
      ur: "اور جو لوگ آخرت پر ایمان نہیں لاتے وہ رستے سے الگ ہو رہے ہیں",
    },
    words: [
      {
        id: "23:74:1",
        arabic: "وَإِنَّ",
        transliteration: "wa-inna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "And indeed",
          ur: "اور بے شک",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:74:2",
        arabic: "ٱلَّذِينَ",
        transliteration: "alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "those who",
          ur: "جو لوگ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:74:3",
        arabic: "لَا",
        transliteration: "lā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "(do) not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:74:4",
        arabic: "يُؤْمِنُونَ",
        transliteration: "yu'minūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "believe",
          ur: "ایمان لاتے ہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:74:5",
        arabic: "بِٱلْـَٔاخِرَةِ",
        transliteration: "bil-ākhirati",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: 'أ خ ر',
        meaning: {
          en: "in the Hereafter",
          ur: "میں the Hereafter",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:74:6",
        arabic: "عَنِ",
        transliteration: "ʿani",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:74:7",
        arabic: "ٱلصِّرَٰطِ",
        transliteration: "l-ṣirāṭi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ص ر ط',
        meaning: {
          en: "the path",
          ur: "the راستہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:74:8",
        arabic: "لَنَـٰكِبُونَ",
        transliteration: "lanākibūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely (are) deviating",
          ur: "یقیناً ہیں deviating",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'نفی + فعل' },
          { from: 6, to: 7, label: 'جار + مجرور' }
        ],
    },
  },
  75: { // Ayah 75
    text: "۞ وَلَوْ رَحِمْنَـٰهُمْ وَكَشَفْنَا مَا بِهِم مِّن ضُرٍّۢ لَّلَجُّوا۟ فِى طُغْيَـٰنِهِمْ يَعْمَهُونَ",
    translation: {
      en: "",
      ur: "اور اگر ہم ان پر رحم کریں اور جو تکلیفیں ان کو پہنچ رہی ہیں، وہ دور کردیں تو اپنی سرکشی پر اڑے رہیں (اور) بھٹکتے (پھریں)",
    },
    words: [
      {
        id: "23:75:1",
        arabic: "۞ وَلَوْ",
        transliteration: "walaw",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And if",
          ur: "اور if",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:75:2",
        arabic: "رَحِمْنَـٰهُمْ",
        transliteration: "raḥim'nāhum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We had mercy on them",
          ur: "ہم had رحمت پر انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:75:3",
        arabic: "وَكَشَفْنَا",
        transliteration: "wakashafnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and We removed",
          ur: "اور ہم removed",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:75:4",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: "what",
          ur: "کیا/جو",
        },
        grammarRole: 'relative',
        grammarExplanations: {
          en: "REL - relative.",
          ur: "REL - relative۔",
        },
      },
      {
        id: "23:75:5",
        arabic: "بِهِم",
        transliteration: "bihim",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(was) on them",
          ur: "تھا پر انہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:75:6",
        arabic: "مِّن",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:75:7",
        arabic: "ضُرٍّۢ",
        transliteration: "ḍurrin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(the) hardship",
          ur: "the hardship",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:75:8",
        arabic: "لَّلَجُّوا۟",
        transliteration: "lalajjū",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely they would persist",
          ur: "یقیناً وہ لوگ would persist",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:75:9",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:75:10",
        arabic: "طُغْيَـٰنِهِمْ",
        transliteration: "ṭugh'yānihim",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "their transgression",
          ur: "their transgression",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:75:11",
        arabic: "يَعْمَهُونَ",
        transliteration: "yaʿmahūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "wandering blindly",
          ur: "wandering blindly",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'جار + مجرور' }
        ],
    },
  },
  76: { // Ayah 76
    text: "وَلَقَدْ أَخَذْنَـٰهُم بِٱلْعَذَابِ فَمَا ٱسْتَكَانُوا۟ لِرَبِّهِمْ وَمَا يَتَضَرَّعُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان کو عذاب میں پکڑا تو بھی انہوں نے خدا کے آگے عاجزی نہ کی اور وہ عاجزی کرتے ہی نہیں",
    },
    words: [
      {
        id: "23:76:1",
        arabic: "وَلَقَدْ",
        transliteration: "walaqad",
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: "And verily",
          ur: "اور verily",
        },
        grammarRole: 'emphasis',
        grammarExplanations: {
          en: "PART - emphasis.",
          ur: "PART - emphasis۔",
        },
      },
      {
        id: "23:76:2",
        arabic: "أَخَذْنَـٰهُم",
        transliteration: "akhadhnāhum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We seized them",
          ur: "ہم seized انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:76:3",
        arabic: "بِٱلْعَذَابِ",
        transliteration: "bil-ʿadhābi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: 'ع ذ ب',
        meaning: {
          en: "with the punishment",
          ur: "کے ساتھ the عذاب",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:76:4",
        arabic: "فَمَا",
        transliteration: "famā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but not",
          ur: "لیکن نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:76:5",
        arabic: "ٱسْتَكَانُوا۟",
        transliteration: "is'takānū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they submit",
          ur: "وہ لوگ submit",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:76:6",
        arabic: "لِرَبِّهِمْ",
        transliteration: "lirabbihim",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to their Lord",
          ur: "طرف their رب",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:76:7",
        arabic: "وَمَا",
        transliteration: "wamā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and not",
          ur: "اور نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:76:8",
        arabic: "يَتَضَرَّعُونَ",
        transliteration: "yataḍarraʿūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they supplicate humbly",
          ur: "وہ لوگ supplicate humbly",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'جار + مجرور' }
        ],
    },
  },
  77: { // Ayah 77
    text: "حَتَّىٰٓ إِذَا فَتَحْنَا عَلَيْهِم بَابًۭا ذَا عَذَابٍۢ شَدِيدٍ إِذَا هُمْ فِيهِ مُبْلِسُونَ",
    translation: {
      en: "",
      ur: "یہاں تک کہ جب ہم نے پر عذاب شدید کا دروازہ کھول دیا تو اس وقت وہاں ناامید ہوگئے",
    },
    words: [
      {
        id: "23:77:1",
        arabic: "حَتَّىٰٓ",
        transliteration: "ḥattā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Until",
          ur: "Until",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:77:2",
        arabic: "إِذَا",
        transliteration: "idhā",
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: {
          en: "when",
          ur: "when",
        },
        grammarRole: 'conditional',
        grammarExplanations: {
          en: "COND - conditional.",
          ur: "COND - conditional۔",
        },
      },
      {
        id: "23:77:3",
        arabic: "فَتَحْنَا",
        transliteration: "fataḥnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We opened",
          ur: "ہم opened",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:77:4",
        arabic: "عَلَيْهِم",
        transliteration: "ʿalayhim",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "for them",
          ur: "کے لیے انہیں",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:77:5",
        arabic: "بَابًۭا",
        transliteration: "bāban",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a gate",
          ur: "a gate",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:77:6",
        arabic: "ذَا",
        transliteration: "dhā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "of a punishment",
          ur: "of a عذاب",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:77:7",
        arabic: "عَذَابٍۢ",
        transliteration: "ʿadhābin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ذ ب',
        meaning: {
          en: "of a punishment",
          ur: "of a عذاب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:77:8",
        arabic: "شَدِيدٍ",
        transliteration: "shadīdin",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: "severe",
          ur: "severe",
        },
        grammarRole: 'adjective',
        grammarExplanations: {
          en: "ADJ - adjective.",
          ur: "ADJ - adjective۔",
        },
      },
      {
        id: "23:77:9",
        arabic: "إِذَا",
        transliteration: "idhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "behold",
          ur: "behold",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:77:10",
        arabic: "هُمْ",
        transliteration: "hum",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "They",
          ur: "وہ لوگ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:77:11",
        arabic: "فِيهِ",
        transliteration: "fīhi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in it",
          ur: "میں یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:77:12",
        arabic: "مُبْلِسُونَ",
        transliteration: "mub'lisūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(will be in) despair",
          ur: "گا/گے be میں despair",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'موصوف + صفت' },
          { from: 11, to: 12, label: 'جار + مجرور' }
        ],
    },
  },
  78: { // Ayah 78
    text: "وَهُوَ ٱلَّذِىٓ أَنشَأَ لَكُمُ ٱلسَّمْعَ وَٱلْأَبْصَـٰرَ وَٱلْأَفْـِٔدَةَ ۚ قَلِيلًۭا مَّا تَشْكُرُونَ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے تمہارے کان اور آنکھیں اور دل بنائے۔ (لیکن) تم کم شکرگزاری کرتے ہو",
    },
    words: [
      {
        id: "23:78:1",
        arabic: "وَهُوَ",
        transliteration: "wahuwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "And He",
          ur: "اور وہ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:78:2",
        arabic: "ٱلَّذِىٓ",
        transliteration: "alladhī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(is) the One Who",
          ur: "ہے the One جو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:78:3",
        arabic: "أَنشَأَ",
        transliteration: "ansha-a",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "produced",
          ur: "produced",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:78:4",
        arabic: "لَكُمُ",
        transliteration: "lakumu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "for you",
          ur: "کے لیے تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:78:5",
        arabic: "ٱلسَّمْعَ",
        transliteration: "l-samʿa",
        pos: ['N'],
        posLabel: 'N',
        root: 'س م ع',
        meaning: {
          en: "the hearing",
          ur: "the hearing",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:78:6",
        arabic: "وَٱلْأَبْصَـٰرَ",
        transliteration: "wal-abṣāra",
        pos: ['N'],
        posLabel: 'N',
        root: 'ب ص ر',
        meaning: {
          en: "and the sight",
          ur: "اور the sight",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:78:7",
        arabic: "وَٱلْأَفْـِٔدَةَ ۚ",
        transliteration: "wal-afidata",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and the feeling",
          ur: "اور the feeling",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:78:8",
        arabic: "قَلِيلًۭا",
        transliteration: "qalīlan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "little",
          ur: "little",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:78:9",
        arabic: "مَّا",
        transliteration: "mā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) what",
          ur: "کیا/جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:78:10",
        arabic: "تَشْكُرُونَ",
        transliteration: "tashkurūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you give thanks",
          ur: "تم دو thanks",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' }
        ],
    },
  },
  79: { // Ayah 79
    text: "وَهُوَ ٱلَّذِى ذَرَأَكُمْ فِى ٱلْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے تم کو زمین میں پیدا کیا اور اسی کی طرف تم جمع ہو کر جاؤ گے",
    },
    words: [
      {
        id: "23:79:1",
        arabic: "وَهُوَ",
        transliteration: "wahuwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "And He",
          ur: "اور وہ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:79:2",
        arabic: "ٱلَّذِى",
        transliteration: "alladhī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(is) the One Who",
          ur: "ہے the One جو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:79:3",
        arabic: "ذَرَأَكُمْ",
        transliteration: "dhara-akum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "multiplied you",
          ur: "multiplied تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:79:4",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:79:5",
        arabic: "ٱلْأَرْضِ",
        transliteration: "l-arḍi",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ر ض',
        meaning: {
          en: "the earth",
          ur: "زمین",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:79:6",
        arabic: "وَإِلَيْهِ",
        transliteration: "wa-ilayhi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and to Him",
          ur: "اور طرف اس",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:79:7",
        arabic: "تُحْشَرُونَ",
        transliteration: "tuḥ'sharūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you will be gathered",
          ur: "تم گا/گے be gathered",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'جار + مجرور' }
        ],
    },
  },
  80: { // Ayah 80
    text: "وَهُوَ ٱلَّذِى يُحْىِۦ وَيُمِيتُ وَلَهُ ٱخْتِلَـٰفُ ٱلَّيْلِ وَٱلنَّهَارِ ۚ أَفَلَا تَعْقِلُونَ",
    translation: {
      en: "",
      ur: "اور وہی ہے جو زندگی بخشتا ہے اور موت دیتا ہے اور رات اور دن کا بدلتے رہنا اسی کا تصرف ہے، کیا تم سمجھتے نہیں",
    },
    words: [
      {
        id: "23:80:1",
        arabic: "وَهُوَ",
        transliteration: "wahuwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "And He",
          ur: "اور وہ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:80:2",
        arabic: "ٱلَّذِى",
        transliteration: "alladhī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(is) the One Who",
          ur: "ہے the One جو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:80:3",
        arabic: "يُحْىِۦ",
        transliteration: "yuḥ'yī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "gives life",
          ur: "دیتا ہے life",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:80:4",
        arabic: "وَيُمِيتُ",
        transliteration: "wayumītu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and causes death",
          ur: "اور causes death",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:80:5",
        arabic: "وَلَهُ",
        transliteration: "walahu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and for Him",
          ur: "اور کے لیے اس",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:80:6",
        arabic: "ٱخْتِلَـٰفُ",
        transliteration: "ikh'tilāfu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is the) alternation",
          ur: "ہے the alternation",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:80:7",
        arabic: "ٱلَّيْلِ",
        transliteration: "al-layli",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(of) the night",
          ur: "of the رات",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:80:8",
        arabic: "وَٱلنَّهَارِ ۚ",
        transliteration: "wal-nahāri",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and the day",
          ur: "اور the دن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:80:9",
        arabic: "أَفَلَا",
        transliteration: "afalā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Then will not",
          ur: "پھر گا/گے نہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:80:10",
        arabic: "تَعْقِلُونَ",
        transliteration: "taʿqilūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you reason",
          ur: "تم reason",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'فعل + فاعل' }
        ],
    },
  },
  81: { // Ayah 81
    text: "بَلْ قَالُوا۟ مِثْلَ مَا قَالَ ٱلْأَوَّلُونَ",
    translation: {
      en: "",
      ur: "بات یہ ہے کہ جو بات اگلے (کافر) کہتے تھے اسی طرح کی (بات یہ) کہتے ہیں",
    },
    words: [
      {
        id: "23:81:1",
        arabic: "بَلْ",
        transliteration: "bal",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "Nay",
          ur: "Nay",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:81:2",
        arabic: "قَالُوا۟",
        transliteration: "qālū",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "they say",
          ur: "وہ لوگ کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:81:3",
        arabic: "مِثْلَ",
        transliteration: "mith'la",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(the) like",
          ur: "the like",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:81:4",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: "(of) what",
          ur: "کیا/جو",
        },
        grammarRole: 'relative',
        grammarExplanations: {
          en: "REL - relative.",
          ur: "REL - relative۔",
        },
      },
      {
        id: "23:81:5",
        arabic: "قَالَ",
        transliteration: "qāla",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "said",
          ur: "کہا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:81:6",
        arabic: "ٱلْأَوَّلُونَ",
        transliteration: "l-awalūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the former (people)",
          ur: "the former لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' }
        ],
    },
  },
  82: { // Ayah 82
    text: "قَالُوٓا۟ أَءِذَا مِتْنَا وَكُنَّا تُرَابًۭا وَعِظَـٰمًا أَءِنَّا لَمَبْعُوثُونَ",
    translation: {
      en: "",
      ur: "کہتے ہیں کہ جب ہم مر جائیں گے اور مٹی ہو جائیں گے اور استخوان (بوسیدہ کے سوا کچھ) نہ رہے گا تو کیا ہم پھر اٹھائے جائیں گے؟",
    },
    words: [
      {
        id: "23:82:1",
        arabic: "قَالُوٓا۟",
        transliteration: "qālū",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "They said",
          ur: "وہ لوگ کہا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:82:2",
        arabic: "أَءِذَا",
        transliteration: "a-idhā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "What! When",
          ur: "What! When",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:82:3",
        arabic: "مِتْنَا",
        transliteration: "mit'nā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "we are dead",
          ur: "ہم ہیں dead",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:82:4",
        arabic: "وَكُنَّا",
        transliteration: "wakunnā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and become",
          ur: "اور become",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:82:5",
        arabic: "تُرَابًۭا",
        transliteration: "turāban",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "dust",
          ur: "dust",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:82:6",
        arabic: "وَعِظَـٰمًا",
        transliteration: "waʿiẓāman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and bones",
          ur: "اور bones",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:82:7",
        arabic: "أَءِنَّا",
        transliteration: "a-innā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "would we",
          ur: "would ہم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:82:8",
        arabic: "لَمَبْعُوثُونَ",
        transliteration: "lamabʿūthūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "surely be resurrected",
          ur: "یقیناً be resurrected",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' }
        ],
    },
  },
  83: { // Ayah 83
    text: "لَقَدْ وُعِدْنَا نَحْنُ وَءَابَآؤُنَا هَـٰذَا مِن قَبْلُ إِنْ هَـٰذَآ إِلَّآ أَسَـٰطِيرُ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "یہ وعدہ ہم سے اور ہم سے پہلے ہمارے باپ دادا سے بھی ہوتا چلا آیا ہے (اجی) یہ تو صرف اگلے لوگوں کی کہانیاں ہیں",
    },
    words: [
      {
        id: "23:83:1",
        arabic: "لَقَدْ",
        transliteration: "laqad",
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: "Verily",
          ur: "Verily",
        },
        grammarRole: 'emphasis',
        grammarExplanations: {
          en: "PART - emphasis.",
          ur: "PART - emphasis۔",
        },
      },
      {
        id: "23:83:2",
        arabic: "وُعِدْنَا",
        transliteration: "wuʿid'nā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "we have been promised",
          ur: "ہم have been promised",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:83:3",
        arabic: "نَحْنُ",
        transliteration: "naḥnu",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "[we]",
          ur: "[we]",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:83:4",
        arabic: "وَءَابَآؤُنَا",
        transliteration: "waābāunā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and our forefathers",
          ur: "اور our forefathers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:83:5",
        arabic: "هَـٰذَا",
        transliteration: "hādhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "this",
          ur: "یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:83:6",
        arabic: "مِن",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "before",
          ur: "before",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:83:7",
        arabic: "قَبْلُ",
        transliteration: "qablu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "before",
          ur: "before",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:83:8",
        arabic: "إِنْ",
        transliteration: "in",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:83:9",
        arabic: "هَـٰذَآ",
        transliteration: "hādhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) this",
          ur: "یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:83:10",
        arabic: "إِلَّآ",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but",
          ur: "لیکن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:83:11",
        arabic: "أَسَـٰطِيرُ",
        transliteration: "asāṭīru",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(the) tales",
          ur: "the tales",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:83:12",
        arabic: "ٱلْأَوَّلِينَ",
        transliteration: "l-awalīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the former (people)",
          ur: "of the former لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'فعل + فاعل' }
        ],
    },
  },
  84: { // Ayah 84
    text: "قُل لِّمَنِ ٱلْأَرْضُ وَمَن فِيهَآ إِن كُنتُمْ تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "کہو کہ اگر تم جانتے ہو تو بتاؤ کہ زمین اور جو کچھ زمین میں ہے سب کس کا مال ہے؟",
    },
    words: [
      {
        id: "23:84:1",
        arabic: "قُل",
        transliteration: "qul",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "Say",
          ur: "کہو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:84:2",
        arabic: "لِّمَنِ",
        transliteration: "limani",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "To whom (belongs)",
          ur: "طرف whom belongs",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:84:3",
        arabic: "ٱلْأَرْضُ",
        transliteration: "l-arḍu",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ر ض',
        meaning: {
          en: "the earth",
          ur: "زمین",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:84:4",
        arabic: "وَمَن",
        transliteration: "waman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and whoever",
          ur: "اور whoever",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:84:5",
        arabic: "فِيهَآ",
        transliteration: "fīhā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(is) in it",
          ur: "ہے میں یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:84:6",
        arabic: "إِن",
        transliteration: "in",
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: {
          en: "if",
          ur: "if",
        },
        grammarRole: 'conditional',
        grammarExplanations: {
          en: "COND - conditional.",
          ur: "COND - conditional۔",
        },
      },
      {
        id: "23:84:7",
        arabic: "كُنتُمْ",
        transliteration: "kuntum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "you",
          ur: "تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:84:8",
        arabic: "تَعْلَمُونَ",
        transliteration: "taʿlamūna",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        meaning: {
          en: "know",
          ur: "جانتے ہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' }
        ],
    },
  },
  85: { // Ayah 85
    text: "سَيَقُولُونَ لِلَّهِ ۚ قُلْ أَفَلَا تَذَكَّرُونَ",
    translation: {
      en: "",
      ur: "جھٹ بول اٹھیں گے کہ خدا کا۔ کہو کہ پھر تم سوچتے کیوں نہیں؟",
    },
    words: [
      {
        id: "23:85:1",
        arabic: "سَيَقُولُونَ",
        transliteration: "sayaqūlūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "They will say",
          ur: "وہ لوگ گا/گے کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:85:2",
        arabic: "لِلَّهِ ۚ",
        transliteration: "lillahi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "To Allah",
          ur: "طرف اللہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:85:3",
        arabic: "قُلْ",
        transliteration: "qul",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "Say",
          ur: "کہو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:85:4",
        arabic: "أَفَلَا",
        transliteration: "afalā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Then will not",
          ur: "پھر گا/گے نہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:85:5",
        arabic: "تَذَكَّرُونَ",
        transliteration: "tadhakkarūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you remember",
          ur: "تم remember",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  86: { // Ayah 86
    text: "قُلْ مَن رَّبُّ ٱلسَّمَـٰوَٰتِ ٱلسَّبْعِ وَرَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ",
    translation: {
      en: "",
      ur: "(ان سے) پوچھو کہ سات آسمانوں کا کون مالک ہے اور عرش عظیم کا (کون) مالک (ہے؟)",
    },
    words: [
      {
        id: "23:86:1",
        arabic: "قُلْ",
        transliteration: "qul",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "Say",
          ur: "کہو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:86:2",
        arabic: "مَن",
        transliteration: "man",
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: "Who",
          ur: "جو",
        },
        grammarRole: 'relative',
        grammarExplanations: {
          en: "REL - relative.",
          ur: "REL - relative۔",
        },
      },
      {
        id: "23:86:3",
        arabic: "رَّبُّ",
        transliteration: "rabbu",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "(is the) Lord",
          ur: "رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:86:4",
        arabic: "ٱلسَّمَـٰوَٰتِ",
        transliteration: "l-samāwāti",
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: {
          en: "(of) the seven heavens",
          ur: "of the seven آسمان",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:86:5",
        arabic: "ٱلسَّبْعِ",
        transliteration: "l-sabʿi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the seven heavens",
          ur: "of the seven آسمان",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:86:6",
        arabic: "وَرَبُّ",
        transliteration: "warabbu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and (the) Lord",
          ur: "اور the رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:86:7",
        arabic: "ٱلْعَرْشِ",
        transliteration: "l-ʿarshi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the Throne",
          ur: "of the Throne",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:86:8",
        arabic: "ٱلْعَظِيمِ",
        transliteration: "l-ʿaẓīmi",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ظ م',
        meaning: {
          en: "the Great",
          ur: "the عظیم",
        },
        grammarRole: 'adjective',
        grammarExplanations: {
          en: "ADJ - adjective.",
          ur: "ADJ - adjective۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 7, to: 8, label: 'موصوف + صفت' }
        ],
    },
  },
  87: { // Ayah 87
    text: "سَيَقُولُونَ لِلَّهِ ۚ قُلْ أَفَلَا تَتَّقُونَ",
    translation: {
      en: "",
      ur: "بےساختہ کہہ دیں گے کہ یہ (چیزیں) خدا ہی کی ہیں، کہو کہ پھر تم ڈرتے کیوں نہیں؟",
    },
    words: [
      {
        id: "23:87:1",
        arabic: "سَيَقُولُونَ",
        transliteration: "sayaqūlūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "They will say",
          ur: "وہ لوگ گا/گے کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:87:2",
        arabic: "لِلَّهِ ۚ",
        transliteration: "lillahi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "Allah",
          ur: "اللہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:87:3",
        arabic: "قُلْ",
        transliteration: "qul",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "Say",
          ur: "کہو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:87:4",
        arabic: "أَفَلَا",
        transliteration: "afalā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Then will not",
          ur: "پھر گا/گے نہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:87:5",
        arabic: "تَتَّقُونَ",
        transliteration: "tattaqūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you fear (Him)",
          ur: "تم ڈرو اس",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  88: { // Ayah 88
    text: "قُلْ مَنۢ بِيَدِهِۦ مَلَكُوتُ كُلِّ شَىْءٍۢ وَهُوَ يُجِيرُ وَلَا يُجَارُ عَلَيْهِ إِن كُنتُمْ تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "کہو کہ اگر تم جانتے ہو تو بتاؤ کہ وہ کون ہے جس کے ہاتھ میں ہر چیز کی بادشاہی ہے اور وہ پناہ دیتا ہے اور اس کے مقابل کوئی کسی کو پناہ نہیں دے سکتا",
    },
    words: [
      {
        id: "23:88:1",
        arabic: "قُلْ",
        transliteration: "qul",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "Say",
          ur: "کہو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:88:2",
        arabic: "مَنۢ",
        transliteration: "man",
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: "Who is (it)",
          ur: "جو ہے یہ",
        },
        grammarRole: 'relative',
        grammarExplanations: {
          en: "REL - relative.",
          ur: "REL - relative۔",
        },
      },
      {
        id: "23:88:3",
        arabic: "بِيَدِهِۦ",
        transliteration: "biyadihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in Whose Hand(s)",
          ur: "میں Whose ہاتھ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:88:4",
        arabic: "مَلَكُوتُ",
        transliteration: "malakūtu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is the) dominion",
          ur: "ہے the dominion",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:88:5",
        arabic: "كُلِّ",
        transliteration: "kulli",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) all",
          ur: "of all",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:88:6",
        arabic: "شَىْءٍۢ",
        transliteration: "shayin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "things",
          ur: "things",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:88:7",
        arabic: "وَهُوَ",
        transliteration: "wahuwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "and He",
          ur: "اور وہ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:88:8",
        arabic: "يُجِيرُ",
        transliteration: "yujīru",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "protects",
          ur: "protects",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:88:9",
        arabic: "وَلَا",
        transliteration: "walā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "and no (one)",
          ur: "اور no one",
        },
        grammarRole: 'prohibition',
        grammarExplanations: {
          en: "NEG - prohibition.",
          ur: "NEG - prohibition۔",
        },
      },
      {
        id: "23:88:10",
        arabic: "يُجَارُ",
        transliteration: "yujāru",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(can) be protected",
          ur: "can be protected",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:88:11",
        arabic: "عَلَيْهِ",
        transliteration: "ʿalayhi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "against Him",
          ur: "against اس",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:88:12",
        arabic: "إِن",
        transliteration: "in",
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: {
          en: "If",
          ur: "If",
        },
        grammarRole: 'conditional',
        grammarExplanations: {
          en: "COND - conditional.",
          ur: "COND - conditional۔",
        },
      },
      {
        id: "23:88:13",
        arabic: "كُنتُمْ",
        transliteration: "kuntum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "you",
          ur: "تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:88:14",
        arabic: "تَعْلَمُونَ",
        transliteration: "taʿlamūna",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        meaning: {
          en: "know",
          ur: "جانتے ہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'نفی + فعل' }
        ],
    },
  },
  89: { // Ayah 89
    text: "سَيَقُولُونَ لِلَّهِ ۚ قُلْ فَأَنَّىٰ تُسْحَرُونَ",
    translation: {
      en: "",
      ur: "فوراً کہہ دیں گے کہ (ایسی بادشاہی تو) خدا ہی کی ہے، تو کہو پھر تم پر جادو کہاں سے پڑ جاتا ہے؟",
    },
    words: [
      {
        id: "23:89:1",
        arabic: "سَيَقُولُونَ",
        transliteration: "sayaqūlūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "They will say",
          ur: "وہ لوگ گا/گے کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:89:2",
        arabic: "لِلَّهِ ۚ",
        transliteration: "lillahi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "Allah",
          ur: "اللہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:89:3",
        arabic: "قُلْ",
        transliteration: "qul",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "Say",
          ur: "کہو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:89:4",
        arabic: "فَأَنَّىٰ",
        transliteration: "fa-annā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then how",
          ur: "پھر how",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:89:5",
        arabic: "تُسْحَرُونَ",
        transliteration: "tus'ḥarūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "are you deluded",
          ur: "ہیں تم deluded",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' }
        ],
    },
  },
  90: { // Ayah 90
    text: "بَلْ أَتَيْنَـٰهُم بِٱلْحَقِّ وَإِنَّهُمْ لَكَـٰذِبُونَ",
    translation: {
      en: "",
      ur: "بات یہ ہے کہ ہم نے ان کے پاس حق پہنچا دیا ہے اور جو (بت پرستی کئے جاتے ہیں) بےشک جھوٹے ہیں",
    },
    words: [
      {
        id: "23:90:1",
        arabic: "بَلْ",
        transliteration: "bal",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "Nay",
          ur: "Nay",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:90:2",
        arabic: "أَتَيْنَـٰهُم",
        transliteration: "ataynāhum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We (have) brought them",
          ur: "ہم have brought انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:90:3",
        arabic: "بِٱلْحَقِّ",
        transliteration: "bil-ḥaqi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "the truth",
          ur: "حق",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:90:4",
        arabic: "وَإِنَّهُمْ",
        transliteration: "wa-innahum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but indeed, they",
          ur: "لیکن indeed, وہ لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:90:5",
        arabic: "لَكَـٰذِبُونَ",
        transliteration: "lakādhibūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely, (are) liars",
          ur: "surely, ہیں liars",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' }
        ],
    },
  },
  91: { // Ayah 91
    text: "مَا ٱتَّخَذَ ٱللَّهُ مِن وَلَدٍۢ وَمَا كَانَ مَعَهُۥ مِنْ إِلَـٰهٍ ۚ إِذًۭا لَّذَهَبَ كُلُّ إِلَـٰهٍۭ بِمَا خَلَقَ وَلَعَلَا بَعْضُهُمْ عَلَىٰ بَعْضٍۢ ۚ سُبْحَـٰنَ ٱللَّهِ عَمَّا يَصِفُونَ",
    translation: {
      en: "",
      ur: "خدا نے نہ تو (اپنا) کسی کو بیٹا بنایا ہے اور نہ اس کے ساتھ کوئی معبود ہے، ایسا ہوتا تو ہر معبود اپنی اپنی مخلوقات کو لے کر چل دیتا اور ایک دوسرے پر غالب آجاتا۔ یہ لوگ جو کچھ خدا کے بارے میں بیان کرتے ہیں خدا اس سے پاک ہے",
    },
    words: [
      {
        id: "23:91:1",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "Not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:91:2",
        arabic: "ٱتَّخَذَ",
        transliteration: "ittakhadha",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Allah has taken",
          ur: "اللہ has taken",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:3",
        arabic: "ٱللَّهُ",
        transliteration: "l-lahu",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: "Allah has taken",
          ur: "اللہ has taken",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:4",
        arabic: "مِن",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "any",
          ur: "any",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:91:5",
        arabic: "وَلَدٍۢ",
        transliteration: "waladin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "son",
          ur: "بیٹا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:6",
        arabic: "وَمَا",
        transliteration: "wamā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and not",
          ur: "اور نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:7",
        arabic: "كَانَ",
        transliteration: "kāna",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "is",
          ur: "ہے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:91:8",
        arabic: "مَعَهُۥ",
        transliteration: "maʿahu",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "with Him",
          ur: "کے ساتھ اس",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:91:9",
        arabic: "مِنْ",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "any",
          ur: "any",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:91:10",
        arabic: "إِلَـٰهٍ ۚ",
        transliteration: "ilāhin",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "god",
          ur: "god",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:91:11",
        arabic: "إِذًۭا",
        transliteration: "idhan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then",
          ur: "پھر",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:12",
        arabic: "لَّذَهَبَ",
        transliteration: "ladhahaba",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely (would have) taken away",
          ur: "یقیناً would have taken away",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:13",
        arabic: "كُلُّ",
        transliteration: "kullu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "each",
          ur: "each",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:14",
        arabic: "إِلَـٰهٍۭ",
        transliteration: "ilāhin",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ل ه',
        meaning: {
          en: "god",
          ur: "god",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:91:15",
        arabic: "بِمَا",
        transliteration: "bimā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "what",
          ur: "کیا/جو",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:91:16",
        arabic: "خَلَقَ",
        transliteration: "khalaqa",
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ل ق',
        meaning: {
          en: "he created",
          ur: "وہ پیدا کیا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:91:17",
        arabic: "وَلَعَلَا",
        transliteration: "walaʿalā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and surely would have overpowered",
          ur: "اور یقیناً would have overpowered",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:91:18",
        arabic: "بَعْضُهُمْ",
        transliteration: "baʿḍuhum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "some of them",
          ur: "some of انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:19",
        arabic: "عَلَىٰ",
        transliteration: "ʿalā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "[on]",
          ur: "[on]",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:91:20",
        arabic: "بَعْضٍۢ ۚ",
        transliteration: "baʿḍin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "others",
          ur: "others",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:21",
        arabic: "سُبْحَـٰنَ",
        transliteration: "sub'ḥāna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Glory be",
          ur: "Glory be",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:22",
        arabic: "ٱللَّهِ",
        transliteration: "l-lahi",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: "(to) Allah",
          ur: "اللہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:23",
        arabic: "عَمَّا",
        transliteration: "ʿammā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "above what",
          ur: "above کیا/جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:91:24",
        arabic: "يَصِفُونَ",
        transliteration: "yaṣifūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they attribute",
          ur: "وہ لوگ attribute",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 10, to: 11, label: 'فعل + فاعل' },
          { from: 17, to: 18, label: 'فعل + فاعل' },
          { from: 19, to: 20, label: 'جار + مجرور' }
        ],
    },
  },
  92: { // Ayah 92
    text: "عَـٰلِمِ ٱلْغَيْبِ وَٱلشَّهَـٰدَةِ فَتَعَـٰلَىٰ عَمَّا يُشْرِكُونَ",
    translation: {
      en: "",
      ur: "وہ پوشیدہ اور ظاہر کو جانتا ہے اور (مشرک) جو اس کے ساتھ شریک کرتے ہیں اس کی شان اس سے اونچی ہے",
    },
    words: [
      {
        id: "23:92:1",
        arabic: "عَـٰلِمِ",
        transliteration: "ʿālimi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Knower",
          ur: "Knower",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:92:2",
        arabic: "ٱلْغَيْبِ",
        transliteration: "l-ghaybi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the unseen",
          ur: "of the unseen",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:92:3",
        arabic: "وَٱلشَّهَـٰدَةِ",
        transliteration: "wal-shahādati",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and the witnessed",
          ur: "اور the witnessed",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:92:4",
        arabic: "فَتَعَـٰلَىٰ",
        transliteration: "fataʿālā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "exalted is He",
          ur: "exalted ہے وہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:92:5",
        arabic: "عَمَّا",
        transliteration: "ʿammā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "above what",
          ur: "above کیا/جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:92:6",
        arabic: "يُشْرِكُونَ",
        transliteration: "yush'rikūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they associate",
          ur: "وہ لوگ associate",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
        ],
    },
  },
  93: { // Ayah 93
    text: "قُل رَّبِّ إِمَّا تُرِيَنِّى مَا يُوعَدُونَ",
    translation: {
      en: "",
      ur: "(اے محمدﷺ) کہو کہ اے پروردگار جس عذاب کا ان (کفار) سے وعدہ ہو رہا ہے، اگر تو میری زندگی میں ان پر نازل کرکے مجھے بھی دکھادے",
    },
    words: [
      {
        id: "23:93:1",
        arabic: "قُل",
        transliteration: "qul",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "Say",
          ur: "کہو",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:93:2",
        arabic: "رَّبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:93:3",
        arabic: "إِمَّا",
        transliteration: "immā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "If",
          ur: "If",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:93:4",
        arabic: "تُرِيَنِّى",
        transliteration: "turiyannī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "You should show me",
          ur: "تم should show me",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:93:5",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: "what",
          ur: "کیا/جو",
        },
        grammarRole: 'relative',
        grammarExplanations: {
          en: "REL - relative.",
          ur: "REL - relative۔",
        },
      },
      {
        id: "23:93:6",
        arabic: "يُوعَدُونَ",
        transliteration: "yūʿadūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they are promised",
          ur: "وہ لوگ ہیں promised",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'موصول + صلة' }
        ],
    },
  },
  94: { // Ayah 94
    text: "رَبِّ فَلَا تَجْعَلْنِى فِى ٱلْقَوْمِ ٱلظَّـٰلِمِينَ",
    translation: {
      en: "",
      ur: "تو اے پروردگار مجھے (اس سے محفوظ رکھیئے اور) ان ظالموں میں شامل نہ کیجیئے",
    },
    words: [
      {
        id: "23:94:1",
        arabic: "رَبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:94:2",
        arabic: "فَلَا",
        transliteration: "falā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "then (do) not",
          ur: "پھر کرتے ہو نہیں",
        },
        grammarRole: 'prohibition',
        grammarExplanations: {
          en: "NEG - prohibition.",
          ur: "NEG - prohibition۔",
        },
      },
      {
        id: "23:94:3",
        arabic: "تَجْعَلْنِى",
        transliteration: "tajʿalnī",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "place me",
          ur: "place me",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:94:4",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "among",
          ur: "among",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:94:5",
        arabic: "ٱلْقَوْمِ",
        transliteration: "l-qawmi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "the people ",
          ur: "the لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:94:6",
        arabic: "ٱلظَّـٰلِمِينَ",
        transliteration: "l-ẓālimīna",
        pos: ['N'],
        posLabel: 'N',
        root: 'ظ ل م',
        meaning: {
          en: "the wrongdoers",
          ur: "the wrongdoers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'نفی + فعل' },
          { from: 4, to: 5, label: 'جار + مجرور' }
        ],
    },
  },
  95: { // Ayah 95
    text: "وَإِنَّا عَلَىٰٓ أَن نُّرِيَكَ مَا نَعِدُهُمْ لَقَـٰدِرُونَ",
    translation: {
      en: "",
      ur: "اور جو وعدہ ہم ان سے کر رہے ہیں ہم تم کو دکھا کر ان پر نازل کرنے پر قادر ہیں",
    },
    words: [
      {
        id: "23:95:1",
        arabic: "وَإِنَّا",
        transliteration: "wa-innā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And indeed We",
          ur: "اور بے شک ہم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:95:2",
        arabic: "عَلَىٰٓ",
        transliteration: "ʿalā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "on",
          ur: "پر",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:95:3",
        arabic: "أَن",
        transliteration: "an",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "that",
          ur: "کہ/وہ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:95:4",
        arabic: "نُّرِيَكَ",
        transliteration: "nuriyaka",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We show you",
          ur: "ہم show تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:95:5",
        arabic: "مَا",
        transliteration: "mā",
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: "what",
          ur: "کیا/جو",
        },
        grammarRole: 'relative',
        grammarExplanations: {
          en: "REL - relative.",
          ur: "REL - relative۔",
        },
      },
      {
        id: "23:95:6",
        arabic: "نَعِدُهُمْ",
        transliteration: "naʿiduhum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We have promised them",
          ur: "ہم have promised انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:95:7",
        arabic: "لَقَـٰدِرُونَ",
        transliteration: "laqādirūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "surely able",
          ur: "یقیناً able",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'موصول + صلة' },
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    },
  },
  96: { // Ayah 96
    text: "ٱدْفَعْ بِٱلَّتِى هِىَ أَحْسَنُ ٱلسَّيِّئَةَ ۚ نَحْنُ أَعْلَمُ بِمَا يَصِفُونَ",
    translation: {
      en: "",
      ur: "اور بری بات کے جواب میں ایسی بات کہو جو نہایت اچھی ہو۔ اور یہ جو کچھ بیان کرتے ہیں ہمیں خوب معلوم ہے",
    },
    words: [
      {
        id: "23:96:1",
        arabic: "ٱدْفَعْ",
        transliteration: "id'faʿ",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Repel",
          ur: "Repel",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:96:2",
        arabic: "بِٱلَّتِى",
        transliteration: "bi-allatī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "by that",
          ur: "by کہ/وہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:96:3",
        arabic: "هِىَ",
        transliteration: "hiya",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "which",
          ur: "جو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:96:4",
        arabic: "أَحْسَنُ",
        transliteration: "aḥsanu",
        pos: ['V'],
        posLabel: 'V',
        root: 'ح س ن',
        meaning: {
          en: "(is) best ",
          ur: "ہے best",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:96:5",
        arabic: "ٱلسَّيِّئَةَ ۚ",
        transliteration: "l-sayi-ata",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: "the evil",
          ur: "the برا",
        },
        grammarRole: 'adjective',
        grammarExplanations: {
          en: "ADJ - adjective.",
          ur: "ADJ - adjective۔",
        },
      },
      {
        id: "23:96:6",
        arabic: "نَحْنُ",
        transliteration: "naḥnu",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "We",
          ur: "ہم",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:96:7",
        arabic: "أَعْلَمُ",
        transliteration: "aʿlamu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "know best",
          ur: "جانتے ہو best",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:96:8",
        arabic: "بِمَا",
        transliteration: "bimā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "of what",
          ur: "of کیا/جو",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:96:9",
        arabic: "يَصِفُونَ",
        transliteration: "yaṣifūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they attribute",
          ur: "وہ لوگ attribute",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' }
        ],
    },
  },
  97: { // Ayah 97
    text: "وَقُل رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَٰتِ ٱلشَّيَـٰطِينِ",
    translation: {
      en: "",
      ur: "اور کہو کہ اے پروردگار! میں شیطانوں کے وسوسوں سے تیری پناہ مانگتا ہو",
    },
    words: [
      {
        id: "23:97:1",
        arabic: "وَقُل",
        transliteration: "waqul",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "And say",
          ur: "اور کہو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:97:2",
        arabic: "رَّبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:97:3",
        arabic: "أَعُوذُ",
        transliteration: "aʿūdhu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "I seek refuge",
          ur: "میں seek refuge",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:97:4",
        arabic: "بِكَ",
        transliteration: "bika",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in You",
          ur: "میں تم",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:97:5",
        arabic: "مِنْ",
        transliteration: "min",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from",
          ur: "سے",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:97:6",
        arabic: "هَمَزَٰتِ",
        transliteration: "hamazāti",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(the) suggestions",
          ur: "the suggestions",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:97:7",
        arabic: "ٱلشَّيَـٰطِينِ",
        transliteration: "l-shayāṭīni",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the evil ones",
          ur: "of the برا ones",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 5, to: 6, label: 'جار + مجرور' }
        ],
    },
  },
  98: { // Ayah 98
    text: "وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
    translation: {
      en: "",
      ur: "اور اے پروردگار! اس سے بھی تیری پناہ مانگتا ہوں کہ وہ میرے پاس آموجود ہوں",
    },
    words: [
      {
        id: "23:98:1",
        arabic: "وَأَعُوذُ",
        transliteration: "wa-aʿūdhu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And I seek refuge",
          ur: "اور میں seek refuge",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:98:2",
        arabic: "بِكَ",
        transliteration: "bika",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in You",
          ur: "میں تم",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:98:3",
        arabic: "رَبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:98:4",
        arabic: "أَن",
        transliteration: "an",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Lest",
          ur: "Lest",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:98:5",
        arabic: "يَحْضُرُونِ",
        transliteration: "yaḥḍurūni",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they be present with me",
          ur: "وہ لوگ be present کے ساتھ me",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' }
        ],
    },
  },
  99: { // Ayah 99
    text: "حَتَّىٰٓ إِذَا جَآءَ أَحَدَهُمُ ٱلْمَوْتُ قَالَ رَبِّ ٱرْجِعُونِ",
    translation: {
      en: "",
      ur: "(یہ لوگ اسی طرح غفلت میں رہیں گے) یہاں تک کہ جب ان میں سے کسی کے پاس موت آجائے گی تو کہے گا کہ اے پروردگار! مجھے پھر (دنیا میں) واپس بھیج دے",
    },
    words: [
      {
        id: "23:99:1",
        arabic: "حَتَّىٰٓ",
        transliteration: "ḥattā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Until",
          ur: "Until",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:99:2",
        arabic: "إِذَا",
        transliteration: "idhā",
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: {
          en: "when",
          ur: "when",
        },
        grammarRole: 'conditional',
        grammarExplanations: {
          en: "COND - conditional.",
          ur: "COND - conditional۔",
        },
      },
      {
        id: "23:99:3",
        arabic: "جَآءَ",
        transliteration: "jāa",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "comes",
          ur: "آتا ہے",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:99:4",
        arabic: "أَحَدَهُمُ",
        transliteration: "aḥadahumu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(to) one of them",
          ur: "طرف one of انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:99:5",
        arabic: "ٱلْمَوْتُ",
        transliteration: "l-mawtu",
        pos: ['N'],
        posLabel: 'N',
        root: 'م و ت',
        meaning: {
          en: "the death",
          ur: "the death",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:99:6",
        arabic: "قَالَ",
        transliteration: "qāla",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "he says",
          ur: "وہ کہتا ہے",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:99:7",
        arabic: "رَبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:99:8",
        arabic: "ٱرْجِعُونِ",
        transliteration: "ir'jiʿūni",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Send me back",
          ur: "Send me back",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    },
  },
  100: { // Ayah 100
    text: "لَعَلِّىٓ أَعْمَلُ صَـٰلِحًۭا فِيمَا تَرَكْتُ ۚ كَلَّآ ۚ إِنَّهَا كَلِمَةٌ هُوَ قَآئِلُهَا ۖ وَمِن وَرَآئِهِم بَرْزَخٌ إِلَىٰ يَوْمِ يُبْعَثُونَ",
    translation: {
      en: "",
      ur: "تاکہ میں اس میں جسے چھوڑ آیا ہوں نیک کام کیا کروں۔ ہرگز نہیں۔ یہ ایک ایسی بات ہے کہ وہ اسے زبان سے کہہ رہا ہوگا (اور اس کے ساتھ عمل نہیں ہوگا) اور اس کے پیچھے برزخ ہے (جہاں وہ) اس دن تک کہ (دوبارہ) اٹھائے جائیں گے، (رہیں گے)",
    },
    words: [
      {
        id: "23:100:1",
        arabic: "لَعَلِّىٓ",
        transliteration: "laʿallī",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "That I may",
          ur: "کہ/وہ میں may",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:100:2",
        arabic: "أَعْمَلُ",
        transliteration: "aʿmalu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "do",
          ur: "کرتے ہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:100:3",
        arabic: "صَـٰلِحًۭا",
        transliteration: "ṣāliḥan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "righteous (deeds)",
          ur: "righteous deeds",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:100:4",
        arabic: "فِيمَا",
        transliteration: "fīmā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in what",
          ur: "میں کیا/جو",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:100:5",
        arabic: "تَرَكْتُ ۚ",
        transliteration: "taraktu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "I left behind",
          ur: "میں left behind",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:100:6",
        arabic: "كَلَّآ ۚ",
        transliteration: "kallā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "No",
          ur: "نہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:100:7",
        arabic: "إِنَّهَا",
        transliteration: "innahā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Indeed, it",
          ur: "Indeed, یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:100:8",
        arabic: "كَلِمَةٌ",
        transliteration: "kalimatun",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(is) a word",
          ur: "ہے a word",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:100:9",
        arabic: "هُوَ",
        transliteration: "huwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "he",
          ur: "وہ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:100:10",
        arabic: "قَآئِلُهَا ۖ",
        transliteration: "qāiluhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "speaks it",
          ur: "speaks یہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:100:11",
        arabic: "وَمِن",
        transliteration: "wamin",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and before them",
          ur: "اور before انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:100:12",
        arabic: "وَرَآئِهِم",
        transliteration: "warāihim",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and before them",
          ur: "اور before انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:100:13",
        arabic: "بَرْزَخٌ",
        transliteration: "barzakhun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(is) a barrier",
          ur: "ہے a barrier",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:100:14",
        arabic: "إِلَىٰ",
        transliteration: "ilā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "till",
          ur: "till",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:100:15",
        arabic: "يَوْمِ",
        transliteration: "yawmi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: "(the) Day",
          ur: "دن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:100:16",
        arabic: "يُبْعَثُونَ",
        transliteration: "yub'ʿathūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they are resurrected",
          ur: "وہ لوگ ہیں resurrected",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'جار + مجرور' }
        ],
    },
  },
  101: { // Ayah 101
    text: "فَإِذَا نُفِخَ فِى ٱلصُّورِ فَلَآ أَنسَابَ بَيْنَهُمْ يَوْمَئِذٍۢ وَلَا يَتَسَآءَلُونَ",
    translation: {
      en: "",
      ur: "پھر جب صور پھونکا جائے گا تو نہ تو ان میں قرابتیں ہوں گی اور نہ ایک دوسرے کو پوچھیں گے",
    },
    words: [
      {
        id: "23:101:1",
        arabic: "فَإِذَا",
        transliteration: "fa-idhā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "So when",
          ur: "So when",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:101:2",
        arabic: "نُفِخَ",
        transliteration: "nufikha",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "is blown",
          ur: "ہے blown",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:101:3",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:101:4",
        arabic: "ٱلصُّورِ",
        transliteration: "l-ṣūri",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the trumpet",
          ur: "the trumpet",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:101:5",
        arabic: "فَلَآ",
        transliteration: "falā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then not",
          ur: "پھر نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:101:6",
        arabic: "أَنسَابَ",
        transliteration: "ansāba",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(there) will be relationship",
          ur: "there گا/گے be relationship",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:101:7",
        arabic: "بَيْنَهُمْ",
        transliteration: "baynahum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "among them",
          ur: "among انہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:101:8",
        arabic: "يَوْمَئِذٍۢ",
        transliteration: "yawma-idhin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: "that Day",
          ur: "کہ/وہ دن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:101:9",
        arabic: "وَلَا",
        transliteration: "walā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "and not",
          ur: "اور نہیں",
        },
        grammarRole: 'prohibition',
        grammarExplanations: {
          en: "NEG - prohibition.",
          ur: "NEG - prohibition۔",
        },
      },
      {
        id: "23:101:10",
        arabic: "يَتَسَآءَلُونَ",
        transliteration: "yatasāalūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "will they ask each other",
          ur: "گا/گے وہ لوگ ask each other",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'جار + مجرور' },
          { from: 9, to: 10, label: 'نفی + فعل' }
        ],
    },
  },
  102: { // Ayah 102
    text: "فَمَن ثَقُلَتْ مَوَٰزِينُهُۥ فَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
    translation: {
      en: "",
      ur: "تو جن کے (عملوں کے) بوجھ بھاری ہوں گے۔ وہ فلاح پانے والے ہیں",
    },
    words: [
      {
        id: "23:102:1",
        arabic: "فَمَن",
        transliteration: "faman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then (the one) whose",
          ur: "پھر the one whose",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:102:2",
        arabic: "ثَقُلَتْ",
        transliteration: "thaqulat",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "(are) heavy",
          ur: "ہیں heavy",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:102:3",
        arabic: "مَوَٰزِينُهُۥ",
        transliteration: "mawāzīnuhu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "his scales",
          ur: "his scales",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:102:4",
        arabic: "فَأُو۟لَـٰٓئِكَ",
        transliteration: "fa-ulāika",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then those ",
          ur: "پھر those",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:102:5",
        arabic: "هُمُ",
        transliteration: "humu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "they",
          ur: "وہ لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:102:6",
        arabic: "ٱلْمُفْلِحُونَ",
        transliteration: "l-muf'liḥūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) the successful",
          ur: "ہیں the successful",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
        ],
    },
  },
  103: { // Ayah 103
    text: "وَمَنْ خَفَّتْ مَوَٰزِينُهُۥ فَأُو۟لَـٰٓئِكَ ٱلَّذِينَ خَسِرُوٓا۟ أَنفُسَهُمْ فِى جَهَنَّمَ خَـٰلِدُونَ",
    translation: {
      en: "",
      ur: "اور جن کے بوجھ ہلکے ہوں گے وہ لوگ ہیں جنہوں نے اپنے تئیں خسارے میں ڈالا، ہمیشہ دوزخ میں رہیں گے",
    },
    words: [
      {
        id: "23:103:1",
        arabic: "وَمَنْ",
        transliteration: "waman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "But (the one) whose",
          ur: "لیکن the one whose",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:103:2",
        arabic: "خَفَّتْ",
        transliteration: "khaffat",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) light",
          ur: "ہیں light",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:103:3",
        arabic: "مَوَٰزِينُهُۥ",
        transliteration: "mawāzīnuhu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "his scales",
          ur: "his scales",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:103:4",
        arabic: "فَأُو۟لَـٰٓئِكَ",
        transliteration: "fa-ulāika",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "then those",
          ur: "پھر those",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:103:5",
        arabic: "ٱلَّذِينَ",
        transliteration: "alladhīna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they [who]",
          ur: "وہ لوگ [who]",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:103:6",
        arabic: "خَسِرُوٓا۟",
        transliteration: "khasirū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "have lost",
          ur: "have lost",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:103:7",
        arabic: "أَنفُسَهُمْ",
        transliteration: "anfusahum",
        pos: ['V'],
        posLabel: 'V',
        root: 'ن ف س',
        meaning: {
          en: "their souls",
          ur: "their جانیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:103:8",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:103:9",
        arabic: "جَهَنَّمَ",
        transliteration: "jahannama",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Hell",
          ur: "Hell",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:103:10",
        arabic: "خَـٰلِدُونَ",
        transliteration: "khālidūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they (will) abide forever",
          ur: "وہ لوگ گا/گے abide forever",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
          { from: 8, to: 9, label: 'جار + مجرور' }
        ],
    },
  },
  104: { // Ayah 104
    text: "تَلْفَحُ وُجُوهَهُمُ ٱلنَّارُ وَهُمْ فِيهَا كَـٰلِحُونَ",
    translation: {
      en: "",
      ur: "آگ ان کے مونہوں کو جھلس دے گی اور وہ اس میں تیوری چڑھائے ہوں گے",
    },
    words: [
      {
        id: "23:104:1",
        arabic: "تَلْفَحُ",
        transliteration: "talfaḥu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Will burn",
          ur: "گا/گے burn",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:104:2",
        arabic: "وُجُوهَهُمُ",
        transliteration: "wujūhahumu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "their faces",
          ur: "their faces",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:104:3",
        arabic: "ٱلنَّارُ",
        transliteration: "l-nāru",
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ر',
        meaning: {
          en: "the Fire",
          ur: "آگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:104:4",
        arabic: "وَهُمْ",
        transliteration: "wahum",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "and they",
          ur: "اور وہ لوگ",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:104:5",
        arabic: "فِيهَا",
        transliteration: "fīhā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in it",
          ur: "میں یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:104:6",
        arabic: "كَـٰلِحُونَ",
        transliteration: "kāliḥūna",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(will) grin with displaced lips",
          ur: "گا/گے grin کے ساتھ displaced lips",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' }
        ],
    },
  },
  105: { // Ayah 105
    text: "أَلَمْ تَكُنْ ءَايَـٰتِى تُتْلَىٰ عَلَيْكُمْ فَكُنتُم بِهَا تُكَذِّبُونَ",
    translation: {
      en: "",
      ur: "کیا تم کو میری آیتیں پڑھ کر نہیں سنائی جاتیں تھیں (نہیں) تم ان کو سنتے تھے (اور) جھٹلاتے تھے",
    },
    words: [
      {
        id: "23:105:1",
        arabic: "أَلَمْ",
        transliteration: "alam",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Were not",
          ur: "تھے نہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:105:2",
        arabic: "تَكُنْ",
        transliteration: "takun",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Were not",
          ur: "تھے نہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:105:3",
        arabic: "ءَايَـٰتِى",
        transliteration: "āyātī",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "My Verses",
          ur: "My آیات",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:105:4",
        arabic: "تُتْلَىٰ",
        transliteration: "tut'lā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "recited",
          ur: "recited",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:105:5",
        arabic: "عَلَيْكُمْ",
        transliteration: "ʿalaykum",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "to you",
          ur: "طرف تم",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:105:6",
        arabic: "فَكُنتُم",
        transliteration: "fakuntum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and you used (to)",
          ur: "اور تم used طرف",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:105:7",
        arabic: "بِهَا",
        transliteration: "bihā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "deny them",
          ur: "deny انہیں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:105:8",
        arabic: "تُكَذِّبُونَ",
        transliteration: "tukadhibūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "deny them",
          ur: "deny انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'جار + مجرور' }
        ],
    },
  },
  106: { // Ayah 106
    text: "قَالُوا۟ رَبَّنَا غَلَبَتْ عَلَيْنَا شِقْوَتُنَا وَكُنَّا قَوْمًۭا ضَآلِّينَ",
    translation: {
      en: "",
      ur: "اے ہمارے پروردگار! ہم پر ہماری کم بختی غالب ہوگئی اور ہم رستے سے بھٹک گئے",
    },
    words: [
      {
        id: "23:106:1",
        arabic: "قَالُوا۟",
        transliteration: "qālū",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "They (will) say",
          ur: "وہ لوگ گا/گے کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:106:2",
        arabic: "رَبَّنَا",
        transliteration: "rabbanā",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "Our Lord",
          ur: "ہمارا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:106:3",
        arabic: "غَلَبَتْ",
        transliteration: "ghalabat",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Overcame",
          ur: "Overcame",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:106:4",
        arabic: "عَلَيْنَا",
        transliteration: "ʿalaynā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "[on] us",
          ur: "[on] us",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:106:5",
        arabic: "شِقْوَتُنَا",
        transliteration: "shiq'watunā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "our wretchedness",
          ur: "our wretchedness",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:106:6",
        arabic: "وَكُنَّا",
        transliteration: "wakunnā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and we were",
          ur: "اور ہم تھے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:106:7",
        arabic: "قَوْمًۭا",
        transliteration: "qawman",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: "a people",
          ur: "a لوگ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:106:8",
        arabic: "ضَآلِّينَ",
        transliteration: "ḍāllīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "astray",
          ur: "astray",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'فعل + فاعل' }
        ],
    },
  },
  107: { // Ayah 107
    text: "رَبَّنَآ أَخْرِجْنَا مِنْهَا فَإِنْ عُدْنَا فَإِنَّا ظَـٰلِمُونَ",
    translation: {
      en: "",
      ur: "اے پروردگار! ہم کو اس میں سے نکال دے، اگر ہم پھر (ایسے کام) کریں تو ظالم ہوں گے",
    },
    words: [
      {
        id: "23:107:1",
        arabic: "رَبَّنَآ",
        transliteration: "rabbanā",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "Our Lord",
          ur: "ہمارا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:107:2",
        arabic: "أَخْرِجْنَا",
        transliteration: "akhrij'nā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Bring us out",
          ur: "Bring us out",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:107:3",
        arabic: "مِنْهَا",
        transliteration: "min'hā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "from it",
          ur: "سے یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:107:4",
        arabic: "فَإِنْ",
        transliteration: "fa-in",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then if",
          ur: "پھر if",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:107:5",
        arabic: "عُدْنَا",
        transliteration: "ʿud'nā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "we return",
          ur: "ہم لوٹنا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:107:6",
        arabic: "فَإِنَّا",
        transliteration: "fa-innā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "then indeed, we",
          ur: "پھر indeed, ہم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:107:7",
        arabic: "ظَـٰلِمُونَ",
        transliteration: "ẓālimūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(would be) wrongdoers",
          ur: "would be wrongdoers",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'فعل + فاعل' }
        ],
    },
  },
  108: { // Ayah 108
    text: "قَالَ ٱخْسَـُٔوا۟ فِيهَا وَلَا تُكَلِّمُونِ",
    translation: {
      en: "",
      ur: "(خدا) فرمائے گا کہ اسی میں ذلت کے ساتھ پڑے رہو اور مجھ سے بات نہ کرو",
    },
    words: [
      {
        id: "23:108:1",
        arabic: "قَالَ",
        transliteration: "qāla",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "He (will) say",
          ur: "وہ گا/گے کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:108:2",
        arabic: "ٱخْسَـُٔوا۟",
        transliteration: "ikh'saū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Remain despised",
          ur: "Remain despised",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:108:3",
        arabic: "فِيهَا",
        transliteration: "fīhā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in it",
          ur: "میں یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:108:4",
        arabic: "وَلَا",
        transliteration: "walā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "and (do) not",
          ur: "اور کرتے ہو نہیں",
        },
        grammarRole: 'prohibition',
        grammarExplanations: {
          en: "NEG - prohibition.",
          ur: "NEG - prohibition۔",
        },
      },
      {
        id: "23:108:5",
        arabic: "تُكَلِّمُونِ",
        transliteration: "tukallimūni",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "speak to Me",
          ur: "speak طرف Me",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'نفی + فعل' }
        ],
    },
  },
  109: { // Ayah 109
    text: "إِنَّهُۥ كَانَ فَرِيقٌۭ مِّنْ عِبَادِى يَقُولُونَ رَبَّنَآ ءَامَنَّا فَٱغْفِرْ لَنَا وَٱرْحَمْنَا وَأَنتَ خَيْرُ ٱلرَّٰحِمِينَ",
    translation: {
      en: "",
      ur: "میرے بندوں میں ایک گروہ تھا جو دعا کیا کرتا تھا کہ اے ہمارے پروردگار ہم ایمان لائے تو تُو ہم کو بخش دے اور ہم پر رحم کر اور تو سب سے بہتر رحم کرنے والا ہے",
    },
    words: [
      {
        id: "23:109:1",
        arabic: "إِنَّهُۥ",
        transliteration: "innahu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Indeed",
          ur: "بے شک",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:109:2",
        arabic: "كَانَ",
        transliteration: "kāna",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(there) was",
          ur: "تھا",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:109:3",
        arabic: "فَرِيقٌۭ",
        transliteration: "farīqun",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a party",
          ur: "a party",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:109:4",
        arabic: "مِّنْ",
        transliteration: "min",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "of",
          ur: "of",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:109:5",
        arabic: "عِبَادِى",
        transliteration: "ʿibādī",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ب د',
        meaning: {
          en: "My slaves",
          ur: "My slaves",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:109:6",
        arabic: "يَقُولُونَ",
        transliteration: "yaqūlūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "(who) said",
          ur: "کہا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:109:7",
        arabic: "رَبَّنَآ",
        transliteration: "rabbanā",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "Our Lord",
          ur: "ہمارا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:109:8",
        arabic: "ءَامَنَّا",
        transliteration: "āmannā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We believe",
          ur: "ہم ایمان لاتے ہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:109:9",
        arabic: "فَٱغْفِرْ",
        transliteration: "fa-igh'fir",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "so forgive",
          ur: "so معاف کرنا",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:109:10",
        arabic: "لَنَا",
        transliteration: "lanā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "us",
          ur: "us",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:109:11",
        arabic: "وَٱرْحَمْنَا",
        transliteration: "wa-ir'ḥamnā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and have mercy on us",
          ur: "اور have رحمت پر us",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:109:12",
        arabic: "وَأَنتَ",
        transliteration: "wa-anta",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and You",
          ur: "اور تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:109:13",
        arabic: "خَيْرُ",
        transliteration: "khayru",
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ي ر',
        meaning: {
          en: "(are) best",
          ur: "ہیں best",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:109:14",
        arabic: "ٱلرَّٰحِمِينَ",
        transliteration: "l-rāḥimīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) those who show mercy",
          ur: "of those جو show رحمت",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 12, to: 13, label: 'فعل + فاعل' }
        ],
    },
  },
  110: { // Ayah 110
    text: "فَٱتَّخَذْتُمُوهُمْ سِخْرِيًّا حَتَّىٰٓ أَنسَوْكُمْ ذِكْرِى وَكُنتُم مِّنْهُمْ تَضْحَكُونَ",
    translation: {
      en: "",
      ur: "تو تم ان سے تمسخر کرتے رہے یہاں تک کہ ان کے پیچھے میری یاد بھی بھول گئے اور تم (ہمیشہ) ان سے ہنسی کیا کرتے تھے",
    },
    words: [
      {
        id: "23:110:1",
        arabic: "فَٱتَّخَذْتُمُوهُمْ",
        transliteration: "fa-ittakhadhtumūhum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "But you took them",
          ur: "لیکن تم took انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:110:2",
        arabic: "سِخْرِيًّا",
        transliteration: "sikh'riyyan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(in) mockery",
          ur: "میں mockery",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:110:3",
        arabic: "حَتَّىٰٓ",
        transliteration: "ḥattā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "until",
          ur: "until",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:110:4",
        arabic: "أَنسَوْكُمْ",
        transliteration: "ansawkum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they made you forget",
          ur: "وہ لوگ بنایا تم forget",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:110:5",
        arabic: "ذِكْرِى",
        transliteration: "dhik'rī",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "My remembrance",
          ur: "My remembrance",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:110:6",
        arabic: "وَكُنتُم",
        transliteration: "wakuntum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and you used (to)",
          ur: "اور تم used طرف",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:110:7",
        arabic: "مِّنْهُمْ",
        transliteration: "min'hum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "at them",
          ur: "at انہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:110:8",
        arabic: "تَضْحَكُونَ",
        transliteration: "taḍḥakūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "laugh",
          ur: "laugh",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'فعل + فاعل' }
        ],
    },
  },
  111: { // Ayah 111
    text: "إِنِّى جَزَيْتُهُمُ ٱلْيَوْمَ بِمَا صَبَرُوٓا۟ أَنَّهُمْ هُمُ ٱلْفَآئِزُونَ",
    translation: {
      en: "",
      ur: "آج میں نے اُن کو اُن کے صبر کا بدلہ دیا، کہ وہ کامیاب ہوگئے",
    },
    words: [
      {
        id: "23:111:1",
        arabic: "إِنِّى",
        transliteration: "innī",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Indeed, I",
          ur: "Indeed, میں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:111:2",
        arabic: "جَزَيْتُهُمُ",
        transliteration: "jazaytuhumu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "have rewarded them",
          ur: "have rewarded انہیں",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:111:3",
        arabic: "ٱلْيَوْمَ",
        transliteration: "l-yawma",
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: "this Day",
          ur: "یہ دن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:111:4",
        arabic: "بِمَا",
        transliteration: "bimā",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "because",
          ur: "because",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:111:5",
        arabic: "صَبَرُوٓا۟",
        transliteration: "ṣabarū",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "they were patient",
          ur: "وہ لوگ تھے patient",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:111:6",
        arabic: "أَنَّهُمْ",
        transliteration: "annahum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "indeed, they",
          ur: "indeed, وہ لوگ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:111:7",
        arabic: "هُمُ",
        transliteration: "humu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "[they]",
          ur: "[they]",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:111:8",
        arabic: "ٱلْفَآئِزُونَ",
        transliteration: "l-fāizūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(are) the successful ones",
          ur: "ہیں the successful ones",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' },
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    },
  },
  112: { // Ayah 112
    text: "قَـٰلَ كَمْ لَبِثْتُمْ فِى ٱلْأَرْضِ عَدَدَ سِنِينَ",
    translation: {
      en: "",
      ur: "(خدا) پوچھے گا کہ تم زمین میں کتنے برس رہے؟",
    },
    words: [
      {
        id: "23:112:1",
        arabic: "قَـٰلَ",
        transliteration: "qāla",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "He will say",
          ur: "وہ گا/گے کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:112:2",
        arabic: "كَمْ",
        transliteration: "kam",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "How long",
          ur: "How long",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:112:3",
        arabic: "لَبِثْتُمْ",
        transliteration: "labith'tum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "did you remain",
          ur: "کیا تم remain",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:112:4",
        arabic: "فِى",
        transliteration: "fī",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in",
          ur: "میں",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:112:5",
        arabic: "ٱلْأَرْضِ",
        transliteration: "l-arḍi",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ر ض',
        meaning: {
          en: "the earth",
          ur: "زمین",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:112:6",
        arabic: "عَدَدَ",
        transliteration: "ʿadada",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(in) number",
          ur: "میں number",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:112:7",
        arabic: "سِنِينَ",
        transliteration: "sinīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) years",
          ur: "of years",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 4, to: 5, label: 'جار + مجرور' }
        ],
    },
  },
  113: { // Ayah 113
    text: "قَالُوا۟ لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍۢ فَسْـَٔلِ ٱلْعَآدِّينَ",
    translation: {
      en: "",
      ur: "وہ کہیں گے کہ ہم ایک روز یا ایک روز سے بھی کم رہے تھے، شمار کرنے والوں سے پوچھ لیجیئے",
    },
    words: [
      {
        id: "23:113:1",
        arabic: "قَالُوا۟",
        transliteration: "qālū",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "They will say",
          ur: "وہ لوگ گا/گے کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:113:2",
        arabic: "لَبِثْنَا",
        transliteration: "labith'nā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We remained",
          ur: "ہم remained",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:113:3",
        arabic: "يَوْمًا",
        transliteration: "yawman",
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: "a day",
          ur: "a دن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:113:4",
        arabic: "أَوْ",
        transliteration: "aw",
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: "or",
          ur: "یا",
        },
        grammarRole: 'conjunction',
        grammarExplanations: {
          en: "CONJ - conjunction.",
          ur: "CONJ - conjunction۔",
        },
      },
      {
        id: "23:113:5",
        arabic: "بَعْضَ",
        transliteration: "baʿḍa",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a part",
          ur: "a part",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:113:6",
        arabic: "يَوْمٍۢ",
        transliteration: "yawmin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: "(of) a day",
          ur: "of a دن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:113:7",
        arabic: "فَسْـَٔلِ",
        transliteration: "fasali",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but ask",
          ur: "لیکن ask",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:113:8",
        arabic: "ٱلْعَآدِّينَ",
        transliteration: "l-ʿādīna",
        pos: ['N'],
        posLabel: 'N',
        root: 'د ي ن',
        meaning: {
          en: "those who keep count",
          ur: "those جو keep count",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 2, to: 3, label: 'فعل + فاعل' }
        ],
    },
  },
  114: { // Ayah 114
    text: "قَـٰلَ إِن لَّبِثْتُمْ إِلَّا قَلِيلًۭا ۖ لَّوْ أَنَّكُمْ كُنتُمْ تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "(خدا) فرمائے گا کہ (وہاں) تم (بہت ہی) کم رہے۔ کاش تم جانتے ہوتے",
    },
    words: [
      {
        id: "23:114:1",
        arabic: "قَـٰلَ",
        transliteration: "qāla",
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: "He will say",
          ur: "وہ گا/گے کہو",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:114:2",
        arabic: "إِن",
        transliteration: "in",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Not",
          ur: "نہیں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:114:3",
        arabic: "لَّبِثْتُمْ",
        transliteration: "labith'tum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "you stayed",
          ur: "تم stayed",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:114:4",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "but",
          ur: "لیکن",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:114:5",
        arabic: "قَلِيلًۭا ۖ",
        transliteration: "qalīlan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "a little",
          ur: "a little",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:114:6",
        arabic: "لَّوْ",
        transliteration: "law",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "if",
          ur: "if",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:114:7",
        arabic: "أَنَّكُمْ",
        transliteration: "annakum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "only you",
          ur: "only تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:114:8",
        arabic: "كُنتُمْ",
        transliteration: "kuntum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "[you]",
          ur: "[you]",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:114:9",
        arabic: "تَعْلَمُونَ",
        transliteration: "taʿlamūna",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        meaning: {
          en: "knew",
          ur: "جانتا تھا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'فعل + فاعل' }
        ],
    },
  },
  115: { // Ayah 115
    text: "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَـٰكُمْ عَبَثًۭا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ",
    translation: {
      en: "",
      ur: "کیا تم یہ خیال کرتے ہو کہ ہم نے تم کو بےفائدہ پیدا کیا ہے اور یہ تم ہماری طرف لوٹ کر نہیں آؤ گے؟",
    },
    words: [
      {
        id: "23:115:1",
        arabic: "أَفَحَسِبْتُمْ",
        transliteration: "afaḥasib'tum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Then did you think",
          ur: "پھر کیا تم think",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:115:2",
        arabic: "أَنَّمَا",
        transliteration: "annamā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "that",
          ur: "کہ/وہ",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:115:3",
        arabic: "خَلَقْنَـٰكُمْ",
        transliteration: "khalaqnākum",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "We created you",
          ur: "ہم پیدا کیا تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:115:4",
        arabic: "عَبَثًۭا",
        transliteration: "ʿabathan",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "uselessly",
          ur: "uselessly",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:115:5",
        arabic: "وَأَنَّكُمْ",
        transliteration: "wa-annakum",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and that you",
          ur: "اور کہ/وہ تم",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:115:6",
        arabic: "إِلَيْنَا",
        transliteration: "ilaynā",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "to Us",
          ur: "طرف Us",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:115:7",
        arabic: "لَا",
        transliteration: "lā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:115:8",
        arabic: "تُرْجَعُونَ",
        transliteration: "tur'jaʿūna",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "will be returned",
          ur: "گا/گے be لوٹا",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 7, to: 8, label: 'نفی + فعل' }
        ],
    },
  },
  116: { // Ayah 116
    text: "فَتَعَـٰلَى ٱللَّهُ ٱلْمَلِكُ ٱلْحَقُّ ۖ لَآ إِلَـٰهَ إِلَّا هُوَ رَبُّ ٱلْعَرْشِ ٱلْكَرِيمِ",
    translation: {
      en: "",
      ur: "تو خدا جو سچا بادشاہ ہے (اس کی شان) اس سے اونچی ہے، اس کے سوا کوئی معبود نہیں، وہی عرش بزرگ کا مالک ہے",
    },
    words: [
      {
        id: "23:116:1",
        arabic: "فَتَعَـٰلَى",
        transliteration: "fataʿālā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "So exalted is",
          ur: "So exalted ہے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:116:2",
        arabic: "ٱللَّهُ",
        transliteration: "l-lahu",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: "Allah",
          ur: "اللہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:116:3",
        arabic: "ٱلْمَلِكُ",
        transliteration: "l-maliku",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the King",
          ur: "the بادشاہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:116:4",
        arabic: "ٱلْحَقُّ ۖ",
        transliteration: "l-ḥaqu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the Truth",
          ur: "حق",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:116:5",
        arabic: "لَآ",
        transliteration: "lā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(There is) no",
          ur: "There ہے no",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:116:6",
        arabic: "إِلَـٰهَ",
        transliteration: "ilāha",
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ل ه',
        meaning: {
          en: "god",
          ur: "god",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:116:7",
        arabic: "إِلَّا",
        transliteration: "illā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "except",
          ur: "سوائے",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:116:8",
        arabic: "هُوَ",
        transliteration: "huwa",
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: "Him",
          ur: "اس",
        },
        grammarRole: 'subject',
        grammarExplanations: {
          en: "PRON - subject.",
          ur: "PRON - subject۔",
        },
      },
      {
        id: "23:116:9",
        arabic: "رَبُّ",
        transliteration: "rabbu",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "(the) Lord",
          ur: "رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:116:10",
        arabic: "ٱلْعَرْشِ",
        transliteration: "l-ʿarshi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) the Throne",
          ur: "of the Throne",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:116:11",
        arabic: "ٱلْكَرِيمِ",
        transliteration: "l-karīmi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Honorable",
          ur: "Honorable",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 6, to: 7, label: 'فعل + فاعل' }
        ],
    },
  },
  117: { // Ayah 117
    text: "وَمَن يَدْعُ مَعَ ٱللَّهِ إِلَـٰهًا ءَاخَرَ لَا بُرْهَـٰنَ لَهُۥ بِهِۦ فَإِنَّمَا حِسَابُهُۥ عِندَ رَبِّهِۦٓ ۚ إِنَّهُۥ لَا يُفْلِحُ ٱلْكَـٰفِرُونَ",
    translation: {
      en: "",
      ur: "اور جو شخص خدا کے ساتھ اور معبود کو پکارتا ہے جس کی اس کے پاس کچھ بھی سند نہیں تو اس کا حساب خدا ہی کے ہاں ہوگا۔ کچھ شک نہیں کہ کافر رستگاری نہیں پائیں گے",
    },
    words: [
      {
        id: "23:117:1",
        arabic: "وَمَن",
        transliteration: "waman",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "And whoever",
          ur: "اور whoever",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:117:2",
        arabic: "يَدْعُ",
        transliteration: "yadʿu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "invokes",
          ur: "invokes",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:117:3",
        arabic: "مَعَ",
        transliteration: "maʿa",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "with",
          ur: "کے ساتھ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:117:4",
        arabic: "ٱللَّهِ",
        transliteration: "l-lahi",
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: "Allah",
          ur: "اللہ",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:117:5",
        arabic: "إِلَـٰهًا",
        transliteration: "ilāhan",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "god",
          ur: "god",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:117:6",
        arabic: "ءَاخَرَ",
        transliteration: "ākhara",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "other",
          ur: "other",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:117:7",
        arabic: "لَا",
        transliteration: "lā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "no",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:117:8",
        arabic: "بُرْهَـٰنَ",
        transliteration: "bur'hāna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "proof",
          ur: "proof",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:117:9",
        arabic: "لَهُۥ",
        transliteration: "lahu",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "for him",
          ur: "کے لیے اسے",
        },
        grammarRole: 'prepositional phrase',
        grammarExplanations: {
          en: "PREP - prepositional phrase.",
          ur: "PREP - prepositional phrase۔",
        },
      },
      {
        id: "23:117:10",
        arabic: "بِهِۦ",
        transliteration: "bihi",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "in it",
          ur: "میں یہ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:117:11",
        arabic: "فَإِنَّمَا",
        transliteration: "fa-innamā",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Then only",
          ur: "پھر only",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:117:12",
        arabic: "حِسَابُهُۥ",
        transliteration: "ḥisābuhu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "his account",
          ur: "his account",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:117:13",
        arabic: "عِندَ",
        transliteration: "ʿinda",
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: "(is) with",
          ur: "کے ساتھ",
        },
        grammarRole: 'preposition',
        grammarExplanations: {
          en: "PREP - preposition.",
          ur: "PREP - preposition۔",
        },
      },
      {
        id: "23:117:14",
        arabic: "رَبِّهِۦٓ ۚ",
        transliteration: "rabbihi",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "his Lord",
          ur: "اس کا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:117:15",
        arabic: "إِنَّهُۥ",
        transliteration: "innahu",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "Indeed, [he]",
          ur: "Indeed, [he]",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:117:16",
        arabic: "لَا",
        transliteration: "lā",
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: "not",
          ur: "نہیں",
        },
        grammarRole: 'negation',
        grammarExplanations: {
          en: "NEG - negation.",
          ur: "NEG - negation۔",
        },
      },
      {
        id: "23:117:17",
        arabic: "يُفْلِحُ",
        transliteration: "yuf'liḥu",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "will succeed",
          ur: "گا/گے succeed",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:117:18",
        arabic: "ٱلْكَـٰفِرُونَ",
        transliteration: "l-kāfirūna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "the disbelievers",
          ur: "the کافروں",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'جار + مجرور' },
          { from: 5, to: 6, label: 'فعل + فاعل' },
          { from: 10, to: 11, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
          { from: 13, to: 14, label: 'جار + مجرور' },
          { from: 16, to: 17, label: 'نفی + فعل' },
          { from: 17, to: 18, label: 'فعل + فاعل' }
        ],
    },
  },
  118: { // Ayah 118
    text: "وَقُل رَّبِّ ٱغْفِرْ وَٱرْحَمْ وَأَنتَ خَيْرُ ٱلرَّٰحِمِينَ",
    translation: {
      en: "",
      ur: "اور خدا سے دعا کرو کہ میرے پروردگار مجھے بخش دے اور (مجھ پر) رحم کر اور تو سب سے بہتر رحم کرنے والا ہے",
    },
    words: [
      {
        id: "23:118:1",
        arabic: "وَقُل",
        transliteration: "waqul",
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: "And say",
          ur: "اور کہو",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:118:2",
        arabic: "رَّبِّ",
        transliteration: "rabbi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: "My Lord",
          ur: "میرا رب",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:118:3",
        arabic: "ٱغْفِرْ",
        transliteration: "igh'fir",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "Forgive",
          ur: "معاف کرنا",
        },
        grammarRole: 'imperative',
        grammarExplanations: {
          en: "V - imperative.",
          ur: "V - imperative۔",
        },
      },
      {
        id: "23:118:4",
        arabic: "وَٱرْحَمْ",
        transliteration: "wa-ir'ḥam",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "and have mercy",
          ur: "اور have رحمت",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:118:5",
        arabic: "وَأَنتَ",
        transliteration: "wa-anta",
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: "and You",
          ur: "اور تم",
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: "V - verb.",
          ur: "V - verb۔",
        },
      },
      {
        id: "23:118:6",
        arabic: "خَيْرُ",
        transliteration: "khayru",
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ي ر',
        meaning: {
          en: "(are the) Best",
          ur: "ہیں the Best",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      },
      {
        id: "23:118:7",
        arabic: "ٱلرَّٰحِمِينَ",
        transliteration: "l-rāḥimīna",
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: "(of) those who show mercy",
          ur: "of those جو show رحمت",
        },
        grammarRole: 'noun',
        grammarExplanations: {
          en: "N - noun.",
          ur: "N - noun۔",
        },
      }
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'فعل + فاعل' }
        ],
    },
  },
};

export default SURAH_23_TREEBANK;
