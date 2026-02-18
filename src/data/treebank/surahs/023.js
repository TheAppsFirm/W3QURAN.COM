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
  },
};

export default SURAH_23_TREEBANK;
