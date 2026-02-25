/**
 * Surah Al-Hajj (The Pilgrimage) - Surah 22
 * Quranic Arabic Treebank Data
 * First 10 Ayahs - Complete word-by-word grammatical analysis
 *
 * Theme: Day of Judgment, pilgrimage, monotheism, resurrection
 * Revelation: Medinan (some verses Makkan)
 * Special: Contains two prostration verses (22:18 and 22:77)
 */

const SURAH_22_TREEBANK = {
  1: { // Ayah 1: يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ إِنَّ زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ
    text: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ إِنَّ زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ',
    translation: {
      en: 'O mankind, fear your Lord. Indeed, the earthquake of the Hour is a tremendous thing.',
      ur: 'اے لوگو! اپنے رب سے ڈرو بیشک قیامت کا زلزلہ بڑی بھاری چیز ہے',
    },
    words: [
      {
        id: '22:1:1',
        arabic: 'يَا',
        transliteration: 'yaa',
        pos: ['VOC'],
        posLabel: 'VOC',
        root: null,
        meaning: {
          en: 'O',
          ur: 'اے',
        },
        grammarRole: 'nida',
        grammarExplanations: {
          en: 'Vocative particle (حرف نداء) - calls attention, used for distant or important address.',
          ur: 'حرف نداء - توجہ دلانے کے لیے، بعید یا اہم خطاب میں۔',
        },
      },
      {
        id: '22:1:2',
        arabic: 'أَيُّهَا',
        transliteration: 'ayyuhaa',
        pos: ['VOC'],
        posLabel: 'VOC',
        root: null,
        meaning: {
          en: 'O (you)',
          ur: 'اے',
        },
        grammarRole: 'munada',
        grammarExplanations: {
          en: 'Vocative expression أَيُّ + ها التنبيه - used before definite nouns in address.',
          ur: 'منادی + ها تنبیہ - معرفہ اسم سے پہلے۔',
        },
      },
      {
        id: '22:1:3',
        arabic: 'النَّاسُ',
        transliteration: 'an-naasu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        meaning: {
          en: 'Mankind/People',
          ur: 'لوگو',
        },
        grammarRole: 'badal',
        grammarExplanations: {
          en: 'Substitute (بدل) for أَيُّ - nominative definite noun. Universal address to all humanity.',
          ur: 'بدل - مرفوع معرفہ۔ تمام انسانیت سے خطاب۔',
        },
      },
      {
        id: '22:1:4',
        arabic: 'اتَّقُوا',
        transliteration: 'ittaqoo',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ق ي',
        meaning: {
          en: 'Fear/Be conscious of',
          ur: 'ڈرو/تقویٰ اختیار کرو',
        },
        grammarRole: 'fil-amr',
        grammarExplanations: {
          en: 'Imperative verb Form VIII - second person masculine plural. Root means "to protect oneself".',
          ur: 'فعل امر باب افتعال - جمع مذکر مخاطب۔ اصل معنی بچاؤ۔',
        },
      },
      {
        id: '22:1:5',
        arabic: 'رَبَّكُمْ',
        transliteration: 'rabbakum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: {
          en: 'Your Lord',
          ur: 'اپنے رب سے',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object (مفعول به) - accusative with attached pronoun كُمْ (your, plural).',
          ur: 'مفعول بہ - منصوب + ضمیر جمع مخاطب۔',
        },
      },
      {
        id: '22:1:6',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['EMPH'],
        posLabel: 'EMPH',
        root: null,
        meaning: {
          en: 'Indeed',
          ur: 'بیشک',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'Emphatic particle (حرف توکید) - makes following noun accusative (اسم إن).',
          ur: 'حرف ناصبہ - اسم ان کو منصوب کرتا ہے۔',
        },
      },
      {
        id: '22:1:7',
        arabic: 'زَلْزَلَةَ',
        transliteration: 'zalzalata',
        pos: ['N'],
        posLabel: 'N',
        root: 'ز ل ز ل',
        meaning: {
          en: 'The earthquake',
          ur: 'زلزلہ',
        },
        grammarRole: 'ism-inna',
        grammarExplanations: {
          en: 'Subject of إِنَّ (اسم إن) - accusative, first part of construct. Reduplication (زلزل) emphasizes intensity.',
          ur: 'اسم ان - منصوب مضاف۔ تکرار (زلزل) شدت کی دلیل۔',
        },
      },
      {
        id: '22:1:8',
        arabic: 'السَّاعَةِ',
        transliteration: "as-saa'ati",
        pos: ['N'],
        posLabel: 'N',
        root: 'س و ع',
        meaning: {
          en: 'The Hour',
          ur: 'قیامت',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct (مضاف إليه) - definite article makes it "THE Hour" i.e., Day of Judgment.',
          ur: 'مضاف الیہ - مجرور معرفہ۔ یعنی قیامت کا دن۔',
        },
      },
      {
        id: '22:1:9',
        arabic: 'شَيْءٌ',
        transliteration: "shay'un",
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ي أ',
        meaning: {
          en: 'A thing',
          ur: 'چیز',
        },
        grammarRole: 'khabar-inna',
        grammarExplanations: {
          en: 'Predicate of إِنَّ (خبر إن) - nominative indefinite noun.',
          ur: 'خبر ان - مرفوع نکرہ۔',
        },
      },
      {
        id: '22:1:10',
        arabic: 'عَظِيمٌ',
        transliteration: "'azeemun",
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ظ م',
        meaning: {
          en: 'Tremendous/Great',
          ur: 'بڑی/عظیم',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for شَيْءٌ - nominative to match modified noun. Pattern فَعِيل for intensity.',
          ur: 'صفت - مرفوع موصوف کے تابع۔ وزن فَعِيل مبالغہ کے لیے۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        ],
    },
  },

  2: { // Ayah 2: يَوْمَ تَرَوْنَهَا تَذْهَلُ كُلُّ مُرْضِعَةٍ عَمَّا أَرْضَعَتْ
    text: 'يَوْمَ تَرَوْنَهَا تَذْهَلُ كُلُّ مُرْضِعَةٍ عَمَّا أَرْضَعَتْ وَتَضَعُ كُلُّ ذَاتِ حَمْلٍ حَمْلَهَا وَتَرَى النَّاسَ سُكَارَىٰ وَمَا هُم بِسُكَارَىٰ وَلَٰكِنَّ عَذَابَ اللَّهِ شَدِيدٌ',
    translation: {
      en: 'On the Day you see it every nursing mother will forget her nursling, and every pregnant woman will abort her burden, and you will see people intoxicated while they are not intoxicated; but the punishment of Allah is severe.',
      ur: 'جس دن تم اسے دیکھو گے ہر دودھ پلانے والی اپنے دودھ پیتے بچے کو بھول جائے گی اور ہر حاملہ اپنا حمل گرا دے گی اور تم لوگوں کو مدہوش دیکھو گے حالانکہ وہ نشے میں نہیں ہوں گے لیکن اللہ کا عذاب سخت ہے',
    },
    words: [
      {
        id: '22:2:1',
        arabic: 'يَوْمَ',
        transliteration: 'yawma',
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: 'The Day',
          ur: 'جس دن',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Adverb of time (ظرف زمان) - accusative, connected to previous verse.',
          ur: 'ظرف زمان - منصوب، پچھلی آیت سے متعلق۔',
        },
      },
      {
        id: '22:2:2',
        arabic: 'تَرَوْنَهَا',
        transliteration: 'tarawnahaa',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ر أ ي',
        meaning: {
          en: 'You see it',
          ur: 'تم اسے دیکھو گے',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Imperfect verb + object pronoun هَا referring to زَلْزَلَة or السَّاعَة. Second person masculine plural.',
          ur: 'فعل مضارع + ضمیر مؤنث - زلزلہ یا ساعت کی طرف۔',
        },
      },
      {
        id: '22:2:3',
        arabic: 'تَذْهَلُ',
        transliteration: 'tadhhalu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ذ ه ل',
        meaning: {
          en: 'Will forget/become distracted',
          ur: 'بھول جائے گی',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Imperfect verb - third person feminine singular. Root implies being stunned into forgetfulness.',
          ur: 'فعل مضارع - واحد مؤنث غائب۔ حیرت سے بھول جانا۔',
        },
      },
      {
        id: '22:2:4',
        arabic: 'كُلُّ',
        transliteration: 'kullu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل ل',
        meaning: {
          en: 'Every',
          ur: 'ہر',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject (فاعل) - nominative, first part of construct meaning "every one of".',
          ur: 'فاعل - مرفوع مضاف۔',
        },
      },
      {
        id: '22:2:5',
        arabic: 'مُرْضِعَةٍ',
        transliteration: "murdi'atin",
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ر ض ع',
        meaning: {
          en: 'Nursing mother',
          ur: 'دودھ پلانے والی',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) - active participle Form IV feminine. "One who is nursing".',
          ur: 'مضاف الیہ - اسم فاعل باب افعال مؤنث۔',
        },
      },
      {
        id: '22:2:6',
        arabic: 'عَمَّا',
        transliteration: "'ammaa",
        pos: ['P', 'REL'],
        posLabel: 'P+REL',
        root: null,
        meaning: {
          en: 'From what',
          ur: 'اس سے جو',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'عَنْ (from) + مَا (what/that which) - preposition + relative pronoun combined.',
          ur: 'عَنْ + مَا موصولہ - حرف جار + اسم موصول۔',
        },
      },
      {
        id: '22:2:7',
        arabic: 'أَرْضَعَتْ',
        transliteration: "arda'at",
        pos: ['V'],
        posLabel: 'V',
        root: 'ر ض ع',
        meaning: {
          en: 'She nursed',
          ur: 'اس نے دودھ پلایا',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause (صلة الموصول) - perfect verb Form IV feminine. Her nursling child.',
          ur: 'صلہ موصول - فعل ماضی باب افعال مؤنث۔',
        },
      },
      {
        id: '22:2:8',
        arabic: 'وَتَضَعُ',
        transliteration: "watada'u",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'و ض ع',
        meaning: {
          en: 'And will deliver/abort',
          ur: 'اور گرا دے گی',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Conjunction + imperfect verb - third person feminine singular. Premature delivery from terror.',
          ur: 'واو عاطفہ + فعل مضارع مؤنث۔ خوف سے وقت سے پہلے وضع حمل۔',
        },
      },
      {
        id: '22:2:9',
        arabic: 'كُلُّ',
        transliteration: 'kullu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل ل',
        meaning: {
          en: 'Every',
          ur: 'ہر',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject - nominative, construct state.',
          ur: 'فاعل - مرفوع مضاف۔',
        },
      },
      {
        id: '22:2:10',
        arabic: 'ذَاتِ',
        transliteration: 'dhaati',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ و',
        meaning: {
          en: 'Possessor of',
          ur: 'والی',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive feminine construct - "one who has/possesses".',
          ur: 'مضاف الیہ مؤنث - "جس کے پاس ہو"۔',
        },
      },
      {
        id: '22:2:11',
        arabic: 'حَمْلٍ',
        transliteration: 'hamlin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح م ل',
        meaning: {
          en: 'Pregnancy/Burden',
          ur: 'حمل',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Second genitive in construct - indefinite, meaning "any pregnancy".',
          ur: 'مضاف الیہ ثانی - نکرہ یعنی کوئی بھی حمل۔',
        },
      },
      {
        id: '22:2:12',
        arabic: 'حَمْلَهَا',
        transliteration: 'hamlahaa',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ح م ل',
        meaning: {
          en: 'Her burden',
          ur: 'اپنا حمل',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative with feminine possessive pronoun.',
          ur: 'مفعول بہ - منصوب + ضمیر مؤنث۔',
        },
      },
      {
        id: '22:2:13',
        arabic: 'وَتَرَى',
        transliteration: 'wataraa',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر أ ي',
        meaning: {
          en: 'And you will see',
          ur: 'اور تم دیکھو گے',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Conjunction + imperfect verb - second person masculine singular.',
          ur: 'واو + فعل مضارع واحد مذکر مخاطب۔',
        },
      },
      {
        id: '22:2:14',
        arabic: 'النَّاسَ',
        transliteration: 'an-naasa',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        meaning: {
          en: 'The people',
          ur: 'لوگوں کو',
        },
        grammarRole: 'mafool-awwal',
        grammarExplanations: {
          en: 'First object of رأى - accusative definite noun.',
          ur: 'مفعول اول - منصوب معرفہ۔',
        },
      },
      {
        id: '22:2:15',
        arabic: 'سُكَارَىٰ',
        transliteration: 'sukaaraa',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'س ك ر',
        meaning: {
          en: 'Intoxicated',
          ur: 'مدہوش',
        },
        grammarRole: 'mafool-thani',
        grammarExplanations: {
          en: 'Second object/state (حال) - plural pattern فُعَالَى for afflicted states.',
          ur: 'مفعول ثانی/حال - جمع فُعَالَى بیماری یا حالت کے لیے۔',
        },
      },
      {
        id: '22:2:16',
        arabic: 'وَمَا',
        transliteration: 'wamaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'But not',
          ur: 'حالانکہ نہیں',
        },
        grammarRole: 'nafi',
        grammarExplanations: {
          en: 'Conjunction وَ (while/but) + negation مَا.',
          ur: 'واو حالیہ + حرف نفی۔',
        },
      },
      {
        id: '22:2:17',
        arabic: 'هُم',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They are',
          ur: 'وہ ہیں',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Independent pronoun - subject of nominal sentence.',
          ur: 'ضمیر منفصل - مبتدأ۔',
        },
      },
      {
        id: '22:2:18',
        arabic: 'بِسُكَارَىٰ',
        transliteration: 'bisukaaraa',
        pos: ['P', 'ADJ'],
        posLabel: 'P+ADJ',
        root: 'س ك ر',
        meaning: {
          en: 'Intoxicated',
          ur: 'نشے میں',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate with extra بِ after negation for emphasis - "they are NOT intoxicated".',
          ur: 'خبر + باء زائدہ بعد نفی - تاکید نفی۔',
        },
      },
      {
        id: '22:2:19',
        arabic: 'وَلَٰكِنَّ',
        transliteration: 'walaakinna',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'But',
          ur: 'لیکن',
        },
        grammarRole: 'istidrak',
        grammarExplanations: {
          en: 'Exceptive conjunction (حرف استدراک) - introduces contrasting fact. Governs accusative.',
          ur: 'حرف استدراک - مقابل حقیقت بیان کرتا ہے۔ اسم کو منصوب کرتا ہے۔',
        },
      },
      {
        id: '22:2:20',
        arabic: 'عَذَابَ',
        transliteration: "'adhaaba",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ذ ب',
        meaning: {
          en: 'The punishment',
          ur: 'عذاب',
        },
        grammarRole: 'ism-lakinna',
        grammarExplanations: {
          en: 'Subject of لٰكِنَّ - accusative, construct state.',
          ur: 'اسم لٰكِنَّ - منصوب مضاف۔',
        },
      },
      {
        id: '22:2:21',
        arabic: 'اللَّهِ',
        transliteration: 'Allaahi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'Of Allah',
          ur: 'اللہ کا',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct - Divine Name.',
          ur: 'مضاف الیہ - لفظ جلالہ۔',
        },
      },
      {
        id: '22:2:22',
        arabic: 'شَدِيدٌ',
        transliteration: 'shadeedun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ش د د',
        meaning: {
          en: 'Severe',
          ur: 'سخت',
        },
        grammarRole: 'khabar-lakinna',
        grammarExplanations: {
          en: 'Predicate of لٰكِنَّ - nominative. Pattern فَعِيل for intensity.',
          ur: 'خبر لٰكِنَّ - مرفوع۔ وزن فَعِيل شدت کے لیے۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 2, to: 4, label: 'فعل + فاعل' },
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
          { from: 6, to: 7, label: 'موصول + صلة' },
          { from: 7, to: 9, label: 'فعل + فاعل' },
          { from: 8, to: 9, label: 'فعل + فاعل' },
          { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
          { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
          { from: 17, to: 18, label: 'مبتدأ + خبر' },
          { from: 20, to: 21, label: 'مضاف + مضاف إليه' },
        ],
    },
  },

  3: { // Ayah 3: وَمِنَ النَّاسِ مَن يُجَادِلُ فِي اللَّهِ بِغَيْرِ عِلْمٍ
    text: 'وَمِنَ النَّاسِ مَن يُجَادِلُ فِي اللَّهِ بِغَيْرِ عِلْمٍ وَيَتَّبِعُ كُلَّ شَيْطَانٍ مَّرِيدٍ',
    translation: {
      en: 'And among the people is he who disputes about Allah without knowledge and follows every rebellious devil.',
      ur: 'اور لوگوں میں سے کوئی ایسا ہے جو اللہ کے بارے میں بغیر علم کے جھگڑا کرتا ہے اور ہر سرکش شیطان کی پیروی کرتا ہے',
    },
    words: [
      {
        id: '22:3:1',
        arabic: 'وَمِنَ',
        transliteration: 'wamina',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And among',
          ur: 'اور میں سے',
        },
        grammarRole: 'khabar-muqaddam',
        grammarExplanations: {
          en: 'Conjunction + preposition - forms advanced predicate.',
          ur: 'واو + حرف جار - خبر مقدم۔',
        },
      },
      {
        id: '22:3:2',
        arabic: 'النَّاسِ',
        transliteration: 'an-naasi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        meaning: {
          en: 'The people',
          ur: 'لوگوں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive after preposition مِنَ.',
          ur: 'مجرور - حرف جار کے بعد۔',
        },
      },
      {
        id: '22:3:3',
        arabic: 'مَن',
        transliteration: 'man',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'Who/One who',
          ur: 'جو/کوئی',
        },
        grammarRole: 'mubtada-muakhkhar',
        grammarExplanations: {
          en: 'Relative pronoun as delayed subject (مبتدأ مؤخر).',
          ur: 'اسم موصول - مبتدأ مؤخر۔',
        },
      },
      {
        id: '22:3:4',
        arabic: 'يُجَادِلُ',
        transliteration: 'yujaadilu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج د ل',
        meaning: {
          en: 'Disputes/Argues',
          ur: 'جھگڑا کرتا ہے',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause verb (صلة) - Form III imperfect, implies mutual disputation.',
          ur: 'صلہ موصول - فعل مضارع باب مفاعلہ۔ باہمی جھگڑا۔',
        },
      },
      {
        id: '22:3:5',
        arabic: 'فِي',
        transliteration: 'fee',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'About/Concerning',
          ur: 'بارے میں',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition - here means "concerning/about".',
          ur: 'حرف جار - یہاں بمعنی "کے بارے میں"۔',
        },
      },
      {
        id: '22:3:6',
        arabic: 'اللَّهِ',
        transliteration: 'Allaahi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'Allah',
          ur: 'اللہ',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive after preposition.',
          ur: 'مجرور - حرف جار کے بعد۔',
        },
      },
      {
        id: '22:3:7',
        arabic: 'بِغَيْرِ',
        transliteration: 'bighayri',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'غ ي ر',
        meaning: {
          en: 'Without',
          ur: 'بغیر',
        },
        grammarRole: 'hal',
        grammarExplanations: {
          en: 'Circumstantial phrase - بِ + غَيْرِ (without), describes manner of disputation.',
          ur: 'حال - بِ + غَيْرِ (بغیر)۔ جھگڑے کی کیفیت۔',
        },
      },
      {
        id: '22:3:8',
        arabic: 'عِلْمٍ',
        transliteration: "'ilmin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ل م',
        meaning: {
          en: 'Knowledge',
          ur: 'علم',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct - indefinite, "any knowledge".',
          ur: 'مضاف الیہ - نکرہ یعنی کوئی بھی علم نہیں۔',
        },
      },
      {
        id: '22:3:9',
        arabic: 'وَيَتَّبِعُ',
        transliteration: 'wayattabi\'u',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ت ب ع',
        meaning: {
          en: 'And follows',
          ur: 'اور پیروی کرتا ہے',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + Form VIII imperfect verb. Emphasizes deliberate following.',
          ur: 'واو + فعل مضارع باب افتعال۔ جان بوجھ کر اتباع۔',
        },
      },
      {
        id: '22:3:10',
        arabic: 'كُلَّ',
        transliteration: 'kulla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل ل',
        meaning: {
          en: 'Every',
          ur: 'ہر',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative construct.',
          ur: 'مفعول بہ - منصوب مضاف۔',
        },
      },
      {
        id: '22:3:11',
        arabic: 'شَيْطَانٍ',
        transliteration: 'shaytaanin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ط ن',
        meaning: {
          en: 'Devil',
          ur: 'شیطان',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive - indefinite, encompasses any rebellious devil.',
          ur: 'مضاف الیہ - نکرہ یعنی کوئی بھی شیطان۔',
        },
      },
      {
        id: '22:3:12',
        arabic: 'مَّرِيدٍ',
        transliteration: 'mareedin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'م ر د',
        meaning: {
          en: 'Rebellious',
          ur: 'سرکش',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective - genitive to match شَيْطَانٍ. Pattern فَعِيل for persistent quality.',
          ur: 'صفت - مجرور۔ وزن فَعِيل مستقل صفت کے لیے۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'موصول + صلة' },
          { from: 4, to: 7, label: 'حال' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
          { from: 9, to: 10, label: 'عطف' },
          { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        ],
    },
  },

  4: { // Ayah 4: كُتِبَ عَلَيْهِ أَنَّهُ مَن تَوَلَّاهُ فَأَنَّهُ يُضِلُّهُ وَيَهْدِيهِ إِلَىٰ عَذَابِ السَّعِيرِ
    text: 'كُتِبَ عَلَيْهِ أَنَّهُ مَن تَوَلَّاهُ فَأَنَّهُ يُضِلُّهُ وَيَهْدِيهِ إِلَىٰ عَذَابِ السَّعِيرِ',
    translation: {
      en: 'It has been decreed for him that whoever takes him as an ally - he will misguide him and lead him to the punishment of the Blaze.',
      ur: 'اس (شیطان) پر لکھ دیا گیا ہے کہ جو اسے دوست بنائے گا وہ اسے گمراہ کرے گا اور دوزخ کے عذاب کی طرف لے جائے گا',
    },
    words: [
      {
        id: '22:4:1',
        arabic: 'كُتِبَ',
        transliteration: 'kutiba',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ت ب',
        meaning: {
          en: 'It has been decreed/written',
          ur: 'لکھ دیا گیا',
        },
        grammarRole: 'fil-madi-majhul',
        grammarExplanations: {
          en: 'Passive perfect verb - "it was written/decreed". Divine decree.',
          ur: 'فعل ماضی مجہول - مقدر ہو گیا۔ الٰہی فیصلہ۔',
        },
      },
      {
        id: '22:4:2',
        arabic: 'عَلَيْهِ',
        transliteration: "'alayhi",
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'Upon him',
          ur: 'اس پر',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun referring to the devil.',
          ur: 'حرف جار + ضمیر - شیطان کی طرف۔',
        },
      },
      {
        id: '22:4:3',
        arabic: 'أَنَّهُ',
        transliteration: 'annahu',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: {
          en: 'That he',
          ur: 'کہ وہ',
        },
        grammarRole: 'naib-fail',
        grammarExplanations: {
          en: 'أَنَّ + pronoun - the clause is deputy subject of passive verb.',
          ur: 'أَنَّ + ضمیر - جملہ نائب فاعل ہے۔',
        },
      },
      {
        id: '22:4:4',
        arabic: 'مَن',
        transliteration: 'man',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        meaning: {
          en: 'Whoever',
          ur: 'جو کوئی',
        },
        grammarRole: 'shart',
        grammarExplanations: {
          en: 'Conditional relative pronoun - "whoever".',
          ur: 'اسم شرط - جو بھی۔',
        },
      },
      {
        id: '22:4:5',
        arabic: 'تَوَلَّاهُ',
        transliteration: 'tawallaahu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'و ل ي',
        meaning: {
          en: 'Takes him as ally',
          ur: 'اسے دوست بنائے',
        },
        grammarRole: 'fil-shart',
        grammarExplanations: {
          en: 'Conditional verb Form V + object pronoun. تَوَلَّى means to take as protector/ally.',
          ur: 'فعل شرط باب تفعل + ضمیر۔ سرپرست بنانا۔',
        },
      },
      {
        id: '22:4:6',
        arabic: 'فَأَنَّهُ',
        transliteration: 'fa-annahu',
        pos: ['CONJ', 'EMPH', 'PRON'],
        posLabel: 'CONJ+EMPH+PRON',
        root: null,
        meaning: {
          en: 'Then indeed he',
          ur: 'تو بیشک وہ',
        },
        grammarRole: 'jawab-shart',
        grammarExplanations: {
          en: 'Result فَ + emphatic أَنَّ + pronoun. Introduces consequence.',
          ur: 'فاء جواب شرط + أَنَّ + ضمیر۔',
        },
      },
      {
        id: '22:4:7',
        arabic: 'يُضِلُّهُ',
        transliteration: 'yudilluhu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ض ل ل',
        meaning: {
          en: 'He will misguide him',
          ur: 'اسے گمراہ کرے گا',
        },
        grammarRole: 'khabar-anna',
        grammarExplanations: {
          en: 'Predicate of أَنَّ - Form IV imperfect + object pronoun. Causative: "cause to go astray".',
          ur: 'خبر أَنَّ - فعل مضارع باب افعال + ضمیر۔ گمراہ کرنا۔',
        },
      },
      {
        id: '22:4:8',
        arabic: 'وَيَهْدِيهِ',
        transliteration: 'wayahdeehi',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ه د ي',
        meaning: {
          en: 'And leads him',
          ur: 'اور لے جائے گا',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + imperfect verb + pronoun. Ironic use - "guides" to punishment.',
          ur: 'واو + فعل مضارع + ضمیر۔ طنزیہ استعمال - عذاب کی طرف "ہدایت"۔',
        },
      },
      {
        id: '22:4:9',
        arabic: 'إِلَىٰ',
        transliteration: 'ilaa',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'To',
          ur: 'کی طرف',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition of direction.',
          ur: 'حرف جار - سمت کے لیے۔',
        },
      },
      {
        id: '22:4:10',
        arabic: 'عَذَابِ',
        transliteration: "'adhaabi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ذ ب',
        meaning: {
          en: 'The punishment',
          ur: 'عذاب',
        },
        grammarRole: 'mudaf',
        grammarExplanations: {
          en: 'Genitive after preposition, construct state.',
          ur: 'مجرور مضاف۔',
        },
      },
      {
        id: '22:4:11',
        arabic: 'السَّعِيرِ',
        transliteration: "as-sa'eeri",
        pos: ['N'],
        posLabel: 'N',
        root: 'س ع ر',
        meaning: {
          en: 'The Blaze',
          ur: 'دوزخ',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct - definite noun for Hell. From root meaning "to kindle fire".',
          ur: 'مضاف الیہ - جہنم کا نام۔ آگ بھڑکانے سے ماخوذ۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 8, to: 9, label: 'عطف' },
          { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        ],
    },
  },

  5: { // Ayah 5: يَا أَيُّهَا النَّاسُ إِن كُنتُمْ فِي رَيْبٍ مِّنَ الْبَعْثِ
    text: 'يَا أَيُّهَا النَّاسُ إِن كُنتُمْ فِي رَيْبٍ مِّنَ الْبَعْثِ فَإِنَّا خَلَقْنَاكُم مِّن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ ثُمَّ مِنْ عَلَقَةٍ ثُمَّ مِن مُّضْغَةٍ مُّخَلَّقَةٍ وَغَيْرِ مُخَلَّقَةٍ',
    translation: {
      en: 'O mankind, if you are in doubt about the Resurrection, then [consider that] We created you from dust, then from a sperm-drop, then from a clinging clot, then from a lump of flesh, formed and unformed.',
      ur: 'اے لوگو! اگر تمہیں دوبارہ اٹھائے جانے میں شک ہے تو (سوچو کہ) ہم نے تمہیں مٹی سے پیدا کیا پھر نطفے سے پھر خون کے لوتھڑے سے پھر گوشت کی بوٹی سے جو شکل والی اور بے شکل ہوتی ہے',
    },
    words: [
      {
        id: '22:5:1',
        arabic: 'يَا',
        transliteration: 'yaa',
        pos: ['VOC'],
        posLabel: 'VOC',
        root: null,
        meaning: {
          en: 'O',
          ur: 'اے',
        },
        grammarRole: 'nida',
        grammarExplanations: {
          en: 'Vocative particle.',
          ur: 'حرف نداء۔',
        },
      },
      {
        id: '22:5:2',
        arabic: 'أَيُّهَا',
        transliteration: 'ayyuhaa',
        pos: ['VOC'],
        posLabel: 'VOC',
        root: null,
        meaning: {
          en: 'O (you)',
          ur: 'اے',
        },
        grammarRole: 'munada',
        grammarExplanations: {
          en: 'Vocative construction for addressing definite nouns.',
          ur: 'منادی - معرفہ کو پکارنے کے لیے۔',
        },
      },
      {
        id: '22:5:3',
        arabic: 'النَّاسُ',
        transliteration: 'an-naasu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        meaning: {
          en: 'Mankind',
          ur: 'لوگو',
        },
        grammarRole: 'badal',
        grammarExplanations: {
          en: 'Substitute - nominative. Second universal address in this surah.',
          ur: 'بدل - مرفوع۔ اس سورت میں دوسرا عالمی خطاب۔',
        },
      },
      {
        id: '22:5:4',
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
          en: 'Conditional particle - introduces hypothetical doubt about resurrection.',
          ur: 'حرف شرط - قیامت کے بارے میں فرضی شک۔',
        },
      },
      {
        id: '22:5:5',
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
          en: 'Conditional verb كان - second person masculine plural.',
          ur: 'فعل شرط کان - جمع مذکر مخاطب۔',
        },
      },
      {
        id: '22:5:6',
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
          en: 'Preposition indicating state.',
          ur: 'حرف جار - حالت کے لیے۔',
        },
      },
      {
        id: '22:5:7',
        arabic: 'رَيْبٍ',
        transliteration: 'raybin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ي ب',
        meaning: {
          en: 'Doubt',
          ur: 'شک',
        },
        grammarRole: 'khabar-kana',
        grammarExplanations: {
          en: 'Predicate of كان - genitive after فِي. Doubt causing unease.',
          ur: 'خبر کان - مجرور۔ بے چینی والا شک۔',
        },
      },
      {
        id: '22:5:8',
        arabic: 'مِّنَ',
        transliteration: 'mina',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'About',
          ur: 'کے بارے میں',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition - here means "concerning/about".',
          ur: 'حرف جار - بمعنی "کے متعلق"۔',
        },
      },
      {
        id: '22:5:9',
        arabic: 'الْبَعْثِ',
        transliteration: "al-ba'thi",
        pos: ['N'],
        posLabel: 'N',
        root: 'ب ع ث',
        meaning: {
          en: 'The Resurrection',
          ur: 'دوبارہ اٹھائے جانے',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - verbal noun meaning "raising up/resurrection".',
          ur: 'مجرور - مصدر بمعنی اٹھانا/قیامت۔',
        },
      },
      {
        id: '22:5:10',
        arabic: 'فَإِنَّا',
        transliteration: 'fa-innaa',
        pos: ['CONJ', 'EMPH', 'PRON'],
        posLabel: 'CONJ+EMPH+PRON',
        root: null,
        meaning: {
          en: 'Then indeed We',
          ur: 'تو بیشک ہم نے',
        },
        grammarRole: 'jawab-shart',
        grammarExplanations: {
          en: 'Result فَ + emphatic إِنَّ + pronoun نَا (We). Divine proof begins.',
          ur: 'فاء جواب + إِنَّ + ضمیر نَا (ہم)۔',
        },
      },
      {
        id: '22:5:11',
        arabic: 'خَلَقْنَاكُم',
        transliteration: 'khalaqnaakum',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'خ ل ق',
        meaning: {
          en: 'We created you',
          ur: 'ہم نے تمہیں پیدا کیا',
        },
        grammarRole: 'khabar-inna',
        grammarExplanations: {
          en: 'Predicate of إِنَّ - perfect verb + object pronoun.',
          ur: 'خبر إِنَّ - فعل ماضی + ضمیر مفعولی۔',
        },
      },
      {
        id: '22:5:12',
        arabic: 'مِّن',
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
          en: 'Preposition of origin - begins description of creation stages.',
          ur: 'حرف جار - تخلیق کے مراحل کا آغاز۔',
        },
      },
      {
        id: '22:5:13',
        arabic: 'تُرَابٍ',
        transliteration: 'turaabin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ت ر ب',
        meaning: {
          en: 'Dust/Earth',
          ur: 'مٹی',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - first stage: Adam from dust.',
          ur: 'مجرور - پہلا مرحلہ: آدم مٹی سے۔',
        },
      },
      {
        id: '22:5:14',
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
          en: 'Sequential conjunction - indicates ordered stages.',
          ur: 'حرف عطف - ترتیب وار مراحل۔',
        },
      },
      {
        id: '22:5:15',
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
          en: 'Preposition - second stage.',
          ur: 'حرف جار - دوسرا مرحلہ۔',
        },
      },
      {
        id: '22:5:16',
        arabic: 'نُّطْفَةٍ',
        transliteration: 'nutfatin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ط ف',
        meaning: {
          en: 'A sperm-drop',
          ur: 'نطفے',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - drop of fluid, male/female gametes.',
          ur: 'مجرور - قطرہ، مرد و عورت کے خلیے۔',
        },
      },
      {
        id: '22:5:17',
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
          en: 'Sequential conjunction.',
          ur: 'حرف عطف۔',
        },
      },
      {
        id: '22:5:18',
        arabic: 'مِنْ',
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
          en: 'Preposition - third stage.',
          ur: 'حرف جار - تیسرا مرحلہ۔',
        },
      },
      {
        id: '22:5:19',
        arabic: 'عَلَقَةٍ',
        transliteration: "'alaqatin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ل ق',
        meaning: {
          en: 'A clinging clot',
          ur: 'خون کے لوتھڑے',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - from root "to cling", embryo that attaches to uterus.',
          ur: 'مجرور - چمٹنے سے ماخوذ، رحم سے چپکنے والا جنین۔',
        },
      },
      {
        id: '22:5:20',
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
          en: 'Sequential conjunction.',
          ur: 'حرف عطف۔',
        },
      },
      {
        id: '22:5:21',
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
          en: 'Preposition - fourth stage.',
          ur: 'حرف جار - چوتھا مرحلہ۔',
        },
      },
      {
        id: '22:5:22',
        arabic: 'مُّضْغَةٍ',
        transliteration: 'mudghatin',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ض غ',
        meaning: {
          en: 'A lump of flesh',
          ur: 'گوشت کی بوٹی',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - "chewed lump" size piece of flesh.',
          ur: 'مجرور - چبائے ہوئے لقمہ جتنا گوشت۔',
        },
      },
      {
        id: '22:5:23',
        arabic: 'مُّخَلَّقَةٍ',
        transliteration: 'mukhallaqatin',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'خ ل ق',
        meaning: {
          en: 'Formed',
          ur: 'شکل والی',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective - passive participle Form II, "perfectly formed".',
          ur: 'صفت - اسم مفعول باب تفعیل، مکمل شکل۔',
        },
      },
      {
        id: '22:5:24',
        arabic: 'وَغَيْرِ',
        transliteration: 'waghayri',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'غ ي ر',
        meaning: {
          en: 'And not',
          ur: 'اور غیر',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + غَيْر (other than/not) - genitive.',
          ur: 'واو + غَيْر (نہیں) - مجرور۔',
        },
      },
      {
        id: '22:5:25',
        arabic: 'مُخَلَّقَةٍ',
        transliteration: 'mukhallaqatin',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'خ ل ق',
        meaning: {
          en: 'Formed',
          ur: 'شکل والی',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive - "unformed" i.e., miscarriages or early embryos.',
          ur: 'مضاف الیہ - بے شکل یعنی ناکام حمل یا ابتدائی جنین۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 12, to: 13, label: 'جار + مجرور' },
          { from: 14, to: 15, label: 'عطف' },
          { from: 15, to: 16, label: 'جار + مجرور' },
          { from: 17, to: 18, label: 'عطف' },
          { from: 18, to: 19, label: 'جار + مجرور' },
          { from: 20, to: 21, label: 'عطف' },
          { from: 21, to: 22, label: 'جار + مجرور' },
          { from: 24, to: 25, label: 'مضاف + مضاف إليه' },
          { from: 24, to: 25, label: 'عطف' },
        ],
    },
  },

  6: { // Ayah 6 (continuation of creation description + evidence)
    text: 'لِّنُبَيِّنَ لَكُمْ وَنُقِرُّ فِي الْأَرْحَامِ مَا نَشَاءُ إِلَىٰ أَجَلٍ مُّسَمًّى ثُمَّ نُخْرِجُكُمْ طِفْلًا ثُمَّ لِتَبْلُغُوا أَشُدَّكُمْ',
    translation: {
      en: 'That We may make clear to you; and We settle in the wombs whom We will for a specified term, then We bring you out as a child, and then that you may reach maturity.',
      ur: 'تاکہ ہم تمہیں واضح کریں اور ہم جسے چاہتے ہیں ایک مقررہ مدت تک رحموں میں ٹھہراتے ہیں پھر تمہیں بچہ بنا کر نکالتے ہیں پھر تاکہ تم اپنی جوانی کو پہنچو',
    },
    words: [
      {
        id: '22:6:1',
        arabic: 'لِّنُبَيِّنَ',
        transliteration: 'linubayyina',
        pos: ['P', 'V'],
        posLabel: 'P+V',
        root: 'ب ي ن',
        meaning: {
          en: 'That We may make clear',
          ur: 'تاکہ ہم واضح کریں',
        },
        grammarRole: 'talil',
        grammarExplanations: {
          en: 'Purpose لِ + Form II subjunctive verb. Purpose of describing creation stages.',
          ur: 'لام تعلیل + فعل مضارع منصوب باب تفعیل۔',
        },
      },
      {
        id: '22:6:2',
        arabic: 'لَكُمْ',
        transliteration: 'lakum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'To you',
          ur: 'تمہیں',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition + pronoun - indirect object.',
          ur: 'حرف جار + ضمیر - مفعول غیر صریح۔',
        },
      },
      {
        id: '22:6:3',
        arabic: 'وَنُقِرُّ',
        transliteration: 'wanuqirru',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق ر ر',
        meaning: {
          en: 'And We settle/establish',
          ur: 'اور ہم ٹھہراتے ہیں',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + Form IV imperfect - "We cause to settle/remain".',
          ur: 'واو + فعل مضارع باب افعال - ٹھہرانا۔',
        },
      },
      {
        id: '22:6:4',
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
          en: 'Preposition of location.',
          ur: 'حرف جار - مقام۔',
        },
      },
      {
        id: '22:6:5',
        arabic: 'الْأَرْحَامِ',
        transliteration: 'al-arhaami',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ح م',
        meaning: {
          en: 'The wombs',
          ur: 'رحموں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive plural - from same root as رَحْمَة (mercy). Womb is place of mercy.',
          ur: 'مجرور جمع - رَحْمَة سے ہم ریشہ۔ رحم رحمت کی جگہ ہے۔',
        },
      },
      {
        id: '22:6:6',
        arabic: 'مَا',
        transliteration: 'maa',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'What/Whom',
          ur: 'جو/جسے',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Relative pronoun as direct object - "what/whom".',
          ur: 'اسم موصول - مفعول بہ۔',
        },
      },
      {
        id: '22:6:7',
        arabic: 'نَشَاءُ',
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
          en: 'Relative clause - imperfect verb. Divine choice in creation.',
          ur: 'صلہ - فعل مضارع۔ تخلیق میں الٰہی انتخاب۔',
        },
      },
      {
        id: '22:6:8',
        arabic: 'إِلَىٰ',
        transliteration: 'ilaa',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'Until',
          ur: 'تک',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition indicating limit/end point.',
          ur: 'حرف جار - حد کے لیے۔',
        },
      },
      {
        id: '22:6:9',
        arabic: 'أَجَلٍ',
        transliteration: 'ajalin',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ج ل',
        meaning: {
          en: 'A term',
          ur: 'مدت',
        },
        grammarRole: 'mudaf',
        grammarExplanations: {
          en: 'Genitive - specified time period.',
          ur: 'مجرور مضاف - معین وقت۔',
        },
      },
      {
        id: '22:6:10',
        arabic: 'مُّسَمًّى',
        transliteration: 'musamman',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'س م و',
        meaning: {
          en: 'Specified/Named',
          ur: 'مقررہ',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective - passive participle Form II, "that which is named/specified".',
          ur: 'صفت - اسم مفعول باب تفعیل۔',
        },
      },
      {
        id: '22:6:11',
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
          en: 'Sequential conjunction.',
          ur: 'حرف عطف۔',
        },
      },
      {
        id: '22:6:12',
        arabic: 'نُخْرِجُكُمْ',
        transliteration: 'nukhrijukum',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'خ ر ج',
        meaning: {
          en: 'We bring you out',
          ur: 'ہم تمہیں نکالتے ہیں',
        },
        grammarRole: 'fil-mudari',
        grammarExplanations: {
          en: 'Form IV imperfect + object pronoun - "We cause to come out".',
          ur: 'فعل مضارع باب افعال + ضمیر۔',
        },
      },
      {
        id: '22:6:13',
        arabic: 'طِفْلًا',
        transliteration: 'tiflan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ط ف ل',
        meaning: {
          en: 'As a child',
          ur: 'بچہ',
        },
        grammarRole: 'hal',
        grammarExplanations: {
          en: 'Circumstantial accusative (حال) - "in the state of being a child".',
          ur: 'حال - بچے کی حالت میں۔',
        },
      },
      {
        id: '22:6:14',
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
          en: 'Sequential conjunction.',
          ur: 'حرف عطف۔',
        },
      },
      {
        id: '22:6:15',
        arabic: 'لِتَبْلُغُوا',
        transliteration: 'litablughoo',
        pos: ['P', 'V'],
        posLabel: 'P+V',
        root: 'ب ل غ',
        meaning: {
          en: 'That you may reach',
          ur: 'تاکہ تم پہنچو',
        },
        grammarRole: 'talil',
        grammarExplanations: {
          en: 'Purpose لِ + subjunctive verb - "so that you reach".',
          ur: 'لام تعلیل + فعل مضارع منصوب۔',
        },
      },
      {
        id: '22:6:16',
        arabic: 'أَشُدَّكُمْ',
        transliteration: 'ashuddakum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ش د د',
        meaning: {
          en: 'Your maturity/strength',
          ur: 'اپنی جوانی',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Direct object - accusative with pronoun. Peak of physical strength.',
          ur: 'مفعول بہ - منصوب + ضمیر۔ جسمانی قوت کی انتہا۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'عطف' },
          { from: 4, to: 5, label: 'جار + مجرور' },
          { from: 6, to: 7, label: 'موصول + صلة' },
          { from: 11, to: 12, label: 'عطف' },
          { from: 12, to: 13, label: 'حال' },
          { from: 14, to: 15, label: 'عطف' },
        ],
    },
  },

  7: { // Ayah 7: وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا
    text: 'وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ',
    translation: {
      en: 'And [that they may know] that Allah will resurrect those in the graves.',
      ur: 'اور یہ کہ اللہ قبروں والوں کو اٹھائے گا',
    },
    words: [
      {
        id: '22:7:1',
        arabic: 'وَأَنَّ',
        transliteration: 'wa-anna',
        pos: ['CONJ', 'EMPH'],
        posLabel: 'CONJ+EMPH',
        root: null,
        meaning: {
          en: 'And that',
          ur: 'اور یہ کہ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + emphatic أَنَّ - coordinated with previous purpose clause.',
          ur: 'واو عاطفہ + أَنَّ - پچھلے مقصد پر معطوف۔',
        },
      },
      {
        id: '22:7:2',
        arabic: 'اللَّهَ',
        transliteration: 'Allaaha',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'Allah',
          ur: 'اللہ',
        },
        grammarRole: 'ism-anna',
        grammarExplanations: {
          en: 'Subject of أَنَّ - accusative Divine Name.',
          ur: 'اسم أَنَّ - منصوب لفظ جلالہ۔',
        },
      },
      {
        id: '22:7:3',
        arabic: 'يَبْعَثُ',
        transliteration: "yab'athu",
        pos: ['V'],
        posLabel: 'V',
        root: 'ب ع ث',
        meaning: {
          en: 'Will resurrect',
          ur: 'اٹھائے گا',
        },
        grammarRole: 'khabar-anna',
        grammarExplanations: {
          en: 'Predicate of أَنَّ - imperfect verb. Resurrection is certain.',
          ur: 'خبر أَنَّ - فعل مضارع۔ قیامت یقینی ہے۔',
        },
      },
      {
        id: '22:7:4',
        arabic: 'مَن',
        transliteration: 'man',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'Those who',
          ur: 'جو',
        },
        grammarRole: 'mafool',
        grammarExplanations: {
          en: 'Relative pronoun as direct object - "those who are".',
          ur: 'اسم موصول - مفعول بہ۔',
        },
      },
      {
        id: '22:7:5',
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
          en: 'Preposition of location.',
          ur: 'حرف جار - مقام۔',
        },
      },
      {
        id: '22:7:6',
        arabic: 'الْقُبُورِ',
        transliteration: 'al-quboori',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ب ر',
        meaning: {
          en: 'The graves',
          ur: 'قبروں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive plural - all who died and are buried.',
          ur: 'مجرور جمع - تمام مردہ اور دفن شدہ۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'عطف' },
          { from: 5, to: 6, label: 'جار + مجرور' },
        ],
    },
  },

  8: { // Ayah 8: وَمِنَ النَّاسِ مَن يُجَادِلُ فِي اللَّهِ بِغَيْرِ عِلْمٍ وَلَا هُدًى وَلَا كِتَابٍ مُّنِيرٍ
    text: 'وَمِنَ النَّاسِ مَن يُجَادِلُ فِي اللَّهِ بِغَيْرِ عِلْمٍ وَلَا هُدًى وَلَا كِتَابٍ مُّنِيرٍ',
    translation: {
      en: 'And among the people is he who disputes about Allah without knowledge, guidance, or an enlightening book.',
      ur: 'اور لوگوں میں سے کوئی ایسا ہے جو اللہ کے بارے میں بغیر علم اور بغیر ہدایت اور بغیر روشن کتاب کے جھگڑا کرتا ہے',
    },
    words: [
      {
        id: '22:8:1',
        arabic: 'وَمِنَ',
        transliteration: 'wamina',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And among',
          ur: 'اور میں سے',
        },
        grammarRole: 'khabar-muqaddam',
        grammarExplanations: {
          en: 'Conjunction + preposition - advanced predicate.',
          ur: 'واو + حرف جار - خبر مقدم۔',
        },
      },
      {
        id: '22:8:2',
        arabic: 'النَّاسِ',
        transliteration: 'an-naasi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        meaning: {
          en: 'The people',
          ur: 'لوگوں',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive after preposition.',
          ur: 'مجرور۔',
        },
      },
      {
        id: '22:8:3',
        arabic: 'مَن',
        transliteration: 'man',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'One who',
          ur: 'جو',
        },
        grammarRole: 'mubtada-muakhkhar',
        grammarExplanations: {
          en: 'Relative pronoun - delayed subject.',
          ur: 'اسم موصول - مبتدأ مؤخر۔',
        },
      },
      {
        id: '22:8:4',
        arabic: 'يُجَادِلُ',
        transliteration: 'yujaadilu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج د ل',
        meaning: {
          en: 'Disputes',
          ur: 'جھگڑا کرتا ہے',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause - Form III imperfect.',
          ur: 'صلہ - فعل مضارع باب مفاعلہ۔',
        },
      },
      {
        id: '22:8:5',
        arabic: 'فِي',
        transliteration: 'fee',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'About',
          ur: 'بارے میں',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition - "concerning".',
          ur: 'حرف جار - متعلق۔',
        },
      },
      {
        id: '22:8:6',
        arabic: 'اللَّهِ',
        transliteration: 'Allaahi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'Allah',
          ur: 'اللہ',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive Divine Name.',
          ur: 'مجرور لفظ جلالہ۔',
        },
      },
      {
        id: '22:8:7',
        arabic: 'بِغَيْرِ',
        transliteration: 'bighayri',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'غ ي ر',
        meaning: {
          en: 'Without',
          ur: 'بغیر',
        },
        grammarRole: 'hal',
        grammarExplanations: {
          en: 'Circumstantial - state of being without.',
          ur: 'حال - بغیر ہونے کی حالت۔',
        },
      },
      {
        id: '22:8:8',
        arabic: 'عِلْمٍ',
        transliteration: "'ilmin",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ل م',
        meaning: {
          en: 'Knowledge',
          ur: 'علم',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive - first of three things lacking.',
          ur: 'مضاف الیہ - تین میں سے پہلی کمی۔',
        },
      },
      {
        id: '22:8:9',
        arabic: 'وَلَا',
        transliteration: 'walaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And no/nor',
          ur: 'اور نہ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + negation - adds second lacking element.',
          ur: 'واو + لا نافیہ - دوسری کمی۔',
        },
      },
      {
        id: '22:8:10',
        arabic: 'هُدًى',
        transliteration: 'hudan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ه د ي',
        meaning: {
          en: 'Guidance',
          ur: 'ہدایت',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated genitive - divine guidance.',
          ur: 'معطوف مجرور - الٰہی ہدایت۔',
        },
      },
      {
        id: '22:8:11',
        arabic: 'وَلَا',
        transliteration: 'walaa',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And no/nor',
          ur: 'اور نہ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Third coordination.',
          ur: 'تیسرا عطف۔',
        },
      },
      {
        id: '22:8:12',
        arabic: 'كِتَابٍ',
        transliteration: 'kitaabin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ت ب',
        meaning: {
          en: 'Book/Scripture',
          ur: 'کتاب',
        },
        grammarRole: 'matuf',
        grammarExplanations: {
          en: 'Coordinated genitive - revealed scripture.',
          ur: 'معطوف مجرور - نازل شدہ کتاب۔',
        },
      },
      {
        id: '22:8:13',
        arabic: 'مُّنِيرٍ',
        transliteration: 'muneerin',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ن و ر',
        meaning: {
          en: 'Enlightening',
          ur: 'روشن',
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective - active participle Form IV, "giving light".',
          ur: 'صفت - اسم فاعل باب افعال، روشنی دینے والی۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 3, to: 4, label: 'موصول + صلة' },
          { from: 4, to: 7, label: 'حال' },
          { from: 5, to: 6, label: 'جار + مجرور' },
          { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
          { from: 9, to: 10, label: 'عطف' },
          { from: 11, to: 12, label: 'عطف' },
        ],
    },
  },

  9: { // Ayah 9: ثَانِيَ عِطْفِهِ لِيُضِلَّ عَن سَبِيلِ اللَّهِ
    text: 'ثَانِيَ عِطْفِهِ لِيُضِلَّ عَن سَبِيلِ اللَّهِ لَهُ فِي الدُّنْيَا خِزْيٌ وَنُذِيقُهُ يَوْمَ الْقِيَامَةِ عَذَابَ الْحَرِيقِ',
    translation: {
      en: 'Twisting his neck [in arrogance] to mislead from the way of Allah. For him in this world is disgrace, and We will make him taste on the Day of Resurrection the punishment of the Burning Fire.',
      ur: 'اکڑ کر (اللہ کے راستے سے) گمراہ کرنے کے لیے اس کے لیے دنیا میں رسوائی ہے اور قیامت کے دن ہم اسے جلانے والے عذاب کا مزہ چکھائیں گے',
    },
    words: [
      {
        id: '22:9:1',
        arabic: 'ثَانِيَ',
        transliteration: 'thaaniya',
        pos: ['AP'],
        posLabel: 'AP',
        root: 'ث ن ي',
        meaning: {
          en: 'Twisting/Turning',
          ur: 'موڑنے والا',
        },
        grammarRole: 'hal',
        grammarExplanations: {
          en: 'Circumstantial accusative - active participle describing arrogant posture.',
          ur: 'حال - اسم فاعل، تکبر کی کیفیت۔',
        },
      },
      {
        id: '22:9:2',
        arabic: 'عِطْفِهِ',
        transliteration: "'itfihi",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ط ف',
        meaning: {
          en: 'His neck/side',
          ur: 'اپنی گردن',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct + pronoun. Turning neck away in pride.',
          ur: 'مضاف الیہ + ضمیر۔ تکبر سے گردن موڑنا۔',
        },
      },
      {
        id: '22:9:3',
        arabic: 'لِيُضِلَّ',
        transliteration: 'liyudilla',
        pos: ['P', 'V'],
        posLabel: 'P+V',
        root: 'ض ل ل',
        meaning: {
          en: 'To mislead',
          ur: 'گمراہ کرنے کے لیے',
        },
        grammarRole: 'talil',
        grammarExplanations: {
          en: 'Purpose لِ + Form IV subjunctive - "to cause to go astray".',
          ur: 'لام تعلیل + فعل منصوب باب افعال۔',
        },
      },
      {
        id: '22:9:4',
        arabic: 'عَن',
        transliteration: "'an",
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'From',
          ur: 'سے',
        },
        grammarRole: 'jarr',
        grammarExplanations: {
          en: 'Preposition - away from.',
          ur: 'حرف جار - دور۔',
        },
      },
      {
        id: '22:9:5',
        arabic: 'سَبِيلِ',
        transliteration: 'sabeeli',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ب ل',
        meaning: {
          en: 'The way',
          ur: 'راستے',
        },
        grammarRole: 'mudaf',
        grammarExplanations: {
          en: 'Genitive construct - path/way.',
          ur: 'مجرور مضاف۔',
        },
      },
      {
        id: '22:9:6',
        arabic: 'اللَّهِ',
        transliteration: 'Allaahi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'Of Allah',
          ur: 'اللہ کے',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive Divine Name.',
          ur: 'مضاف الیہ۔',
        },
      },
      {
        id: '22:9:7',
        arabic: 'لَهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'For him',
          ur: 'اس کے لیے',
        },
        grammarRole: 'khabar-muqaddam',
        grammarExplanations: {
          en: 'Advanced predicate - preposition + pronoun.',
          ur: 'خبر مقدم۔',
        },
      },
      {
        id: '22:9:8',
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
          en: 'Preposition of location/time.',
          ur: 'حرف جار۔',
        },
      },
      {
        id: '22:9:9',
        arabic: 'الدُّنْيَا',
        transliteration: 'ad-dunyaa',
        pos: ['N'],
        posLabel: 'N',
        root: 'د ن و',
        meaning: {
          en: 'This world',
          ur: 'دنیا',
        },
        grammarRole: 'majrur',
        grammarExplanations: {
          en: 'Genitive - from root "near", the nearer life.',
          ur: 'مجرور - قریب سے، یعنی فوری زندگی۔',
        },
      },
      {
        id: '22:9:10',
        arabic: 'خِزْيٌ',
        transliteration: 'khizyun',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ز ي',
        meaning: {
          en: 'Disgrace',
          ur: 'رسوائی',
        },
        grammarRole: 'mubtada-muakhkhar',
        grammarExplanations: {
          en: 'Delayed subject - nominative indefinite.',
          ur: 'مبتدأ مؤخر - مرفوع نکرہ۔',
        },
      },
      {
        id: '22:9:11',
        arabic: 'وَنُذِيقُهُ',
        transliteration: 'wanudheeqahu',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ذ و ق',
        meaning: {
          en: 'And We will make him taste',
          ur: 'اور ہم اسے چکھائیں گے',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + Form IV imperfect + pronoun. Causative: "cause to taste".',
          ur: 'واو + فعل مضارع باب افعال + ضمیر۔',
        },
      },
      {
        id: '22:9:12',
        arabic: 'يَوْمَ',
        transliteration: 'yawma',
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: 'On the Day',
          ur: 'دن',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Adverb of time - accusative.',
          ur: 'ظرف زمان - منصوب۔',
        },
      },
      {
        id: '22:9:13',
        arabic: 'الْقِيَامَةِ',
        transliteration: 'al-qiyaamati',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و م',
        meaning: {
          en: 'The Resurrection',
          ur: 'قیامت',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct - verbal noun from قام "to stand".',
          ur: 'مضاف الیہ - قام سے مصدر۔',
        },
      },
      {
        id: '22:9:14',
        arabic: 'عَذَابَ',
        transliteration: "'adhaaba",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ذ ب',
        meaning: {
          en: 'The punishment',
          ur: 'عذاب',
        },
        grammarRole: 'mafool-thani',
        grammarExplanations: {
          en: 'Second object of أذاق - "make taste punishment".',
          ur: 'مفعول ثانی - عذاب چکھانا۔',
        },
      },
      {
        id: '22:9:15',
        arabic: 'الْحَرِيقِ',
        transliteration: 'al-hareeqi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ر ق',
        meaning: {
          en: 'The Burning Fire',
          ur: 'جلانے والے',
        },
        grammarRole: 'mudaf-ilayhi',
        grammarExplanations: {
          en: 'Genitive in construct - intensive form for burning.',
          ur: 'مضاف الیہ - شدید جلانے کے لیے۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
          { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
          { from: 8, to: 9, label: 'جار + مجرور' },
          { from: 11, to: 12, label: 'عطف' },
          { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
          { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        ],
    },
  },

  10: { // Ayah 10: ذَٰلِكَ بِمَا قَدَّمَتْ يَدَاكَ وَأَنَّ اللَّهَ لَيْسَ بِظَلَّامٍ لِّلْعَبِيدِ
    text: 'ذَٰلِكَ بِمَا قَدَّمَتْ يَدَاكَ وَأَنَّ اللَّهَ لَيْسَ بِظَلَّامٍ لِّلْعَبِيدِ',
    translation: {
      en: 'That is for what your hands have sent forth and because Allah is not ever unjust to [His] servants.',
      ur: 'یہ اس کی وجہ سے ہے جو تیرے ہاتھوں نے آگے بھیجا اور اللہ اپنے بندوں پر ظلم کرنے والا نہیں',
    },
    words: [
      {
        id: '22:10:1',
        arabic: 'ذَٰلِكَ',
        transliteration: 'dhaalika',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'That',
          ur: 'یہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative pronoun - subject, referring to punishment mentioned.',
          ur: 'اسم اشارہ - مبتدأ، مذکورہ عذاب کی طرف۔',
        },
      },
      {
        id: '22:10:2',
        arabic: 'بِمَا',
        transliteration: 'bimaa',
        pos: ['P', 'REL'],
        posLabel: 'P+REL',
        root: null,
        meaning: {
          en: 'Because of what',
          ur: 'اس وجہ سے جو',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Preposition بِ + relative مَا - predicate, reason for punishment.',
          ur: 'باء سببیہ + ما موصولہ - خبر، عذاب کی وجہ۔',
        },
      },
      {
        id: '22:10:3',
        arabic: 'قَدَّمَتْ',
        transliteration: 'qaddamat',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق د م',
        meaning: {
          en: 'Sent forth',
          ur: 'آگے بھیجا',
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Relative clause verb - Form II perfect feminine. Past deeds sent ahead to Hereafter.',
          ur: 'صلہ - فعل ماضی باب تفعیل مؤنث۔ آخرت کو بھیجے ہوئے اعمال۔',
        },
      },
      {
        id: '22:10:4',
        arabic: 'يَدَاكَ',
        transliteration: 'yadaaka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ي د ي',
        meaning: {
          en: 'Your two hands',
          ur: 'تیرے دونوں ہاتھ',
        },
        grammarRole: 'fail',
        grammarExplanations: {
          en: 'Subject - dual form يَدَا + attached pronoun. Hands represent deeds.',
          ur: 'فاعل - تثنیہ + ضمیر۔ ہاتھ اعمال کی علامت۔',
        },
      },
      {
        id: '22:10:5',
        arabic: 'وَأَنَّ',
        transliteration: 'wa-anna',
        pos: ['CONJ', 'EMPH'],
        posLabel: 'CONJ+EMPH',
        root: null,
        meaning: {
          en: 'And that',
          ur: 'اور یہ کہ',
        },
        grammarRole: 'atf',
        grammarExplanations: {
          en: 'Conjunction + emphatic particle - second reason.',
          ur: 'واو + حرف توکید - دوسری وجہ۔',
        },
      },
      {
        id: '22:10:6',
        arabic: 'اللَّهَ',
        transliteration: 'Allaaha',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'Allah',
          ur: 'اللہ',
        },
        grammarRole: 'ism-anna',
        grammarExplanations: {
          en: 'Subject of أَنَّ - accusative Divine Name.',
          ur: 'اسم أَنَّ - منصوب۔',
        },
      },
      {
        id: '22:10:7',
        arabic: 'لَيْسَ',
        transliteration: 'laysa',
        pos: ['V'],
        posLabel: 'V',
        root: 'ل ي س',
        meaning: {
          en: 'Is not',
          ur: 'نہیں ہے',
        },
        grammarRole: 'fil-naqis',
        grammarExplanations: {
          en: 'Negative verb (فعل ناقص) - "is not". Part of predicate clause.',
          ur: 'فعل ناقص نافی - خبر جملے کا حصہ۔',
        },
      },
      {
        id: '22:10:8',
        arabic: 'بِظَلَّامٍ',
        transliteration: 'bidhallaam',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ظ ل م',
        meaning: {
          en: 'Ever unjust',
          ur: 'ظلم کرنے والا',
        },
        grammarRole: 'khabar-laysa',
        grammarExplanations: {
          en: 'Predicate of لَيْسَ with emphatic بِ. Pattern فَعَّال for intense/habitual.',
          ur: 'خبر لَيْسَ + باء زائدہ۔ وزن فَعَّال کثرت کے لیے۔',
        },
      },
      {
        id: '22:10:9',
        arabic: 'لِّلْعَبِيدِ',
        transliteration: 'lil-\'abeed',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ع ب د',
        meaning: {
          en: 'To the servants',
          ur: 'بندوں پر',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition لِ + plural noun - all servants of Allah.',
          ur: 'حرف جار + جمع - اللہ کے سب بندے۔',
        },
      },
    ],
    structure: {
        relationships: [
          { from: 1, to: 2, label: 'مبتدأ + خبر' },
          { from: 2, to: 3, label: 'موصول + صلة' },
          { from: 3, to: 4, label: 'فعل + فاعل' },
          { from: 5, to: 6, label: 'عطف' },
        ],
    },
  },

  11: {
    text: "وَمِنَ ٱلنَّاسِ مَن يَعْبُدُ ٱللَّهَ عَلَىٰ حَرْفٍۢ ۖ فَإِنْ أَصَابَهُۥ خَيْرٌ ٱطْمَأَنَّ بِهِۦ ۖ وَإِنْ أَصَابَتْهُ فِتْنَةٌ ٱنقَلَبَ عَلَىٰ وَجْهِهِۦ خَسِرَ ٱلدُّنْيَا وَٱلْـَٔاخِرَةَ ۚ ذَٰلِكَ هُوَ ٱلْخُسْرَانُ ٱلْمُبِينُ",
    translation: {
      en: "",
      ur: "اور لوگوں میں بعض ایسا بھی ہے جو کنارے پر (کھڑا ہو کر) خدا کی عبادت کرتا ہے۔ اگر اس کو کوئی (دنیاوی) فائدہ پہنچے تو اس کے سبب مطمئن ہوجائے اور اگر کوئی آفت پڑے تو منہ کے بل لوٹ جائے (یعنی پھر کافر ہوجائے) اس نے دنیا میں بھی نقصان اٹھایا اور آخرت میں بھی۔ یہی تو نقصان صریح ہے",
    },
    words: [
      { id: '22:11:1', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And among", ur: "اور among" } },
      { id: '22:11:2', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '22:11:3', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is he) who", ur: "(is وہ) جو" } },
      { id: '22:11:4', arabic: "يَعْبُدُ", transliteration: "yaʿbudu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "worships", ur: "worships" } },
      { id: '22:11:5', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:11:6', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '22:11:7', arabic: "حَرْفٍۢ ۖ", transliteration: "ḥarfin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an edge", ur: "an edge" } },
      { id: '22:11:8', arabic: "فَإِنْ", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '22:11:9', arabic: "أَصَابَهُۥ", transliteration: "aṣābahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "befalls him", ur: "befalls him" } },
      { id: '22:11:10', arabic: "خَيْرٌ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '22:11:11', arabic: "ٱطْمَأَنَّ", transliteration: "iṭ'ma-anna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he is content", ur: "وہ is content" } },
      { id: '22:11:12', arabic: "بِهِۦ ۖ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '22:11:13', arabic: "وَإِنْ", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and if", ur: "اور if" } },
      { id: '22:11:14', arabic: "أَصَابَتْهُ", transliteration: "aṣābathu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "befalls him", ur: "befalls him" } },
      { id: '22:11:15', arabic: "فِتْنَةٌ", transliteration: "fit'natun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a trial", ur: "a trial" } },
      { id: '22:11:16', arabic: "ٱنقَلَبَ", transliteration: "inqalaba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he turns", ur: "وہ turns" } },
      { id: '22:11:17', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '22:11:18', arabic: "وَجْهِهِۦ", transliteration: "wajhihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "his face", ur: "his face" } },
      { id: '22:11:19', arabic: "خَسِرَ", transliteration: "khasira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has lost", ur: "وہ has lost" } },
      { id: '22:11:20', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the world", ur: "the دنیا" } },
      { id: '22:11:21', arabic: "وَٱلْـَٔاخِرَةَ ۚ", transliteration: "wal-ākhirata", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Hereafter", ur: "اور the آخرت" } },
      { id: '22:11:22', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '22:11:23', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[it]", ur: "[it]" } },
      { id: '22:11:24', arabic: "ٱلْخُسْرَانُ", transliteration: "l-khus'rānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the loss", ur: "(is) the loss" } },
      { id: '22:11:25', arabic: "ٱلْمُبِينُ", transliteration: "l-mubīnu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'موصوف + صفت' }
      ],
    },
  },
  12: {
    text: "يَدْعُوا۟ مِن دُونِ ٱللَّهِ مَا لَا يَضُرُّهُۥ وَمَا لَا يَنفَعُهُۥ ۚ ذَٰلِكَ هُوَ ٱلضَّلَـٰلُ ٱلْبَعِيدُ",
    translation: {
      en: "",
      ur: "یہ خدا کے سوا ایسی چیز کو پکارتا ہے جو نہ اسے نقصان پہنچائے اور نہ فائدہ دے سکے۔ یہی تو پرلے درجے کی گمراہی ہے",
    },
    words: [
      { id: '22:12:1', arabic: "يَدْعُوا۟", transliteration: "yadʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He calls", ur: "وہ calls" } },
      { id: '22:12:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides", ur: "besides" } },
      { id: '22:12:3', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '22:12:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:12:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:12:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '22:12:7', arabic: "يَضُرُّهُۥ", transliteration: "yaḍurruhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "harms him", ur: "harms him" } },
      { id: '22:12:8', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '22:12:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '22:12:10', arabic: "يَنفَعُهُۥ ۚ", transliteration: "yanfaʿuhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "benefits him", ur: "benefits him" } },
      { id: '22:12:11', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '22:12:12', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[it]", ur: "[it]" } },
      { id: '22:12:13', arabic: "ٱلضَّلَـٰلُ", transliteration: "l-ḍalālu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) the straying", ur: "(is) the straying" } },
      { id: '22:12:14', arabic: "ٱلْبَعِيدُ", transliteration: "l-baʿīdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far away", ur: "far away" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  13: {
    text: "يَدْعُوا۟ لَمَن ضَرُّهُۥٓ أَقْرَبُ مِن نَّفْعِهِۦ ۚ لَبِئْسَ ٱلْمَوْلَىٰ وَلَبِئْسَ ٱلْعَشِيرُ",
    translation: {
      en: "",
      ur: "ایسے شخص کو پکارتا ہے جس کا نقصان فائدہ سے زیادہ قریب ہے۔ ایسا دوست برا بھی اور ایسا ہم صحبت بھی برا",
    },
    words: [
      { id: '22:13:1', arabic: "يَدْعُوا۟", transliteration: "yadʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He calls", ur: "وہ calls" } },
      { id: '22:13:2', arabic: "لَمَن", transliteration: "laman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(one) who ", ur: "(one) جو " } },
      { id: '22:13:3', arabic: "ضَرُّهُۥٓ", transliteration: "ḍarruhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his harm", ur: "his harm" } },
      { id: '22:13:4', arabic: "أَقْرَبُ", transliteration: "aqrabu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) closer", ur: "(is) closer" } },
      { id: '22:13:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "than", ur: "than" } },
      { id: '22:13:6', arabic: "نَّفْعِهِۦ ۚ", transliteration: "nafʿihi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "his benefit", ur: "his benefit" } },
      { id: '22:13:7', arabic: "لَبِئْسَ", transliteration: "labi'sa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Surely, an evil", ur: "یقیناً, an برا" } },
      { id: '22:13:8', arabic: "ٱلْمَوْلَىٰ", transliteration: "l-mawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "protector", ur: "protector" } },
      { id: '22:13:9', arabic: "وَلَبِئْسَ", transliteration: "walabi'sa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and surely an evil", ur: "اور یقیناً an برا" } },
      { id: '22:13:10', arabic: "ٱلْعَشِيرُ", transliteration: "l-ʿashīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "friend", ur: "friend" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  14: {
    text: "إِنَّ ٱللَّهَ يُدْخِلُ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ جَنَّـٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ ۚ إِنَّ ٱللَّهَ يَفْعَلُ مَا يُرِيدُ",
    translation: {
      en: "",
      ur: "جو لوگ ایمان لائے اور عمل نیک کرتے رہے خدا ان کو بہشتوں میں داخل کرے گا جن کے نیچے نہریں چل رہیں ہیں۔ کچھ شک نہیں کہ خدا جو چاہتا ہے کرتا ہے",
    },
    words: [
      { id: '22:14:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:14:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:14:3', arabic: "يُدْخِلُ", transliteration: "yud'khilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will admit", ur: "will admit" } },
      { id: '22:14:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '22:14:5', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '22:14:6', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and do", ur: "اور do" } },
      { id: '22:14:7', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the righteous deeds", ur: "the نیک deeds" } },
      { id: '22:14:8', arabic: "جَنَّـٰتٍۢ", transliteration: "jannātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Gardens", ur: "(کو) باغات" } },
      { id: '22:14:9', arabic: "تَجْرِى", transliteration: "tajrī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "flow", ur: "flow" } },
      { id: '22:14:10', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:14:11', arabic: "تَحْتِهَا", transliteration: "taḥtihā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "underneath it", ur: "underneath it" } },
      { id: '22:14:12', arabic: "ٱلْأَنْهَـٰرُ ۚ", transliteration: "l-anhāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the rivers", ur: "the rivers" } },
      { id: '22:14:13', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:14:14', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:14:15', arabic: "يَفْعَلُ", transliteration: "yafʿalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '22:14:16', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:14:17', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He intends", ur: "وہ intends" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'موصول + صلة' }
      ],
    },
  },
  15: {
    text: "مَن كَانَ يَظُنُّ أَن لَّن يَنصُرَهُ ٱللَّهُ فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ فَلْيَمْدُدْ بِسَبَبٍ إِلَى ٱلسَّمَآءِ ثُمَّ لْيَقْطَعْ فَلْيَنظُرْ هَلْ يُذْهِبَنَّ كَيْدُهُۥ مَا يَغِيظُ",
    translation: {
      en: "",
      ur: "جو شخص یہ گمان کرتا ہے کہ خدا اس کو دنیا اور آخرت میں مدد نہیں دے گا تو اس کو چاہیئے کہ اوپر کی طرف (یعنی اپنے گھر کی چھت میں) ایک رسی باندھے پھر (اس سے اپنا) گلا گھونٹ لے۔ پھر دیکھے کہ آیا یہ تدبیر اس کے غصے کو دور کردیتی ہے",
    },
    words: [
      { id: '22:15:1', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '22:15:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "[is]", ur: "[is]" } },
      { id: '22:15:3', arabic: "يَظُنُّ", transliteration: "yaẓunnu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thinks", ur: "thinks" } },
      { id: '22:15:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:15:5', arabic: "لَّن", transliteration: "lan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '22:15:6', arabic: "يَنصُرَهُ", transliteration: "yanṣurahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah will help him", ur: "اللہ will help him" } },
      { id: '22:15:7', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah will help him", ur: "اللہ will help him" } },
      { id: '22:15:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '22:15:9', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the world", ur: "the دنیا" } },
      { id: '22:15:10', arabic: "وَٱلْـَٔاخِرَةِ", transliteration: "wal-ākhirati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Hereafter", ur: "اور the آخرت" } },
      { id: '22:15:11', arabic: "فَلْيَمْدُدْ", transliteration: "falyamdud", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then let him extend", ur: "پھر let him extend" } },
      { id: '22:15:12', arabic: "بِسَبَبٍ", transliteration: "bisababin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a rope", ur: "a rope" } },
      { id: '22:15:13', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '22:15:14', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '22:15:15', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '22:15:16', arabic: "لْيَقْطَعْ", transliteration: "l'yaqṭaʿ", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "let him cut off", ur: "let him cut off" } },
      { id: '22:15:17', arabic: "فَلْيَنظُرْ", transliteration: "falyanẓur", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then let him see", ur: "پھر let him دیکھنا" } },
      { id: '22:15:18', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "whether", ur: "whether" } },
      { id: '22:15:19', arabic: "يُذْهِبَنَّ", transliteration: "yudh'hibanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will remove", ur: "will remove" } },
      { id: '22:15:20', arabic: "كَيْدُهُۥ", transliteration: "kayduhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his plan", ur: "his plan" } },
      { id: '22:15:21', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:15:22', arabic: "يَغِيظُ", transliteration: "yaghīẓu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "enrages", ur: "enrages" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'موصول + صلة' }
      ],
    },
  },
  16: {
    text: "وَكَذَٰلِكَ أَنزَلْنَـٰهُ ءَايَـٰتٍۭ بَيِّنَـٰتٍۢ وَأَنَّ ٱللَّهَ يَهْدِى مَن يُرِيدُ",
    translation: {
      en: "",
      ur: "اور اسی طرح ہم نے اس قرآن کو اُتارا ہے (جس کی تمام) باتیں کھلی ہوئی (ہیں) اور یہ (یاد رکھو) کہ خدا جس کو چاہتا ہے ہدایات دیتا ہے",
    },
    words: [
      { id: '22:16:1', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '22:16:2', arabic: "أَنزَلْنَـٰهُ", transliteration: "anzalnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We sent it down", ur: "ہم sent it down" } },
      { id: '22:16:3', arabic: "ءَايَـٰتٍۭ", transliteration: "āyātin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(as) clear Verses", ur: "(as) clear Verses" } },
      { id: '22:16:4', arabic: "بَيِّنَـٰتٍۢ", transliteration: "bayyinātin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(as) clear Verses", ur: "(as) clear Verses" } },
      { id: '22:16:5', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '22:16:6', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:16:7', arabic: "يَهْدِى", transliteration: "yahdī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guides", ur: "guides" } },
      { id: '22:16:8', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '22:16:9', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He intends", ur: "وہ intends" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'موصول + صلة' }
      ],
    },
  },
  17: {
    text: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَٱلَّذِينَ هَادُوا۟ وَٱلصَّـٰبِـِٔينَ وَٱلنَّصَـٰرَىٰ وَٱلْمَجُوسَ وَٱلَّذِينَ أَشْرَكُوٓا۟ إِنَّ ٱللَّهَ يَفْصِلُ بَيْنَهُمْ يَوْمَ ٱلْقِيَـٰمَةِ ۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ شَهِيدٌ",
    translation: {
      en: "",
      ur: "جو لوگ مومن (یعنی مسلمان) ہیں اور جو یہودی ہیں اور ستارہ پرست اور عیسائی اور مجوسی اور مشرک۔ خدا ان (سب) میں قیامت کے دن فیصلہ کردے گا۔ بےشک خدا ہر چیز سے باخبر ہے",
    },
    words: [
      { id: '22:17:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:17:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '22:17:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have believed", ur: "have ایمان لائے" } },
      { id: '22:17:4', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '22:17:5', arabic: "هَادُوا۟", transliteration: "hādū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "were Jews", ur: "were Jews" } },
      { id: '22:17:6', arabic: "وَٱلصَّـٰبِـِٔينَ", transliteration: "wal-ṣābiīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Sabians", ur: "اور the Sabians" } },
      { id: '22:17:7', arabic: "وَٱلنَّصَـٰرَىٰ", transliteration: "wal-naṣārā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Christians", ur: "اور the Christians" } },
      { id: '22:17:8', arabic: "وَٱلْمَجُوسَ", transliteration: "wal-majūsa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Magians", ur: "اور the Magians" } },
      { id: '22:17:9', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '22:17:10', arabic: "أَشْرَكُوٓا۟", transliteration: "ashrakū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) polytheists", ur: "(are) polytheists" } },
      { id: '22:17:11', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "indeed", ur: "بیشک" } },
      { id: '22:17:12', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:17:13', arabic: "يَفْصِلُ", transliteration: "yafṣilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will judge", ur: "will judge" } },
      { id: '22:17:14', arabic: "بَيْنَهُمْ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '22:17:15', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on) the Day", ur: "(پر) the دن" } },
      { id: '22:17:16', arabic: "ٱلْقِيَـٰمَةِ ۚ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '22:17:17', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:17:18', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:17:19', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '22:17:20', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '22:17:21', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '22:17:22', arabic: "شَهِيدٌ", transliteration: "shahīdun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a Witness", ur: "(is) a Witness" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  18: {
    text: "أَلَمْ تَرَ أَنَّ ٱللَّهَ يَسْجُدُ لَهُۥ مَن فِى ٱلسَّمَـٰوَٰتِ وَمَن فِى ٱلْأَرْضِ وَٱلشَّمْسُ وَٱلْقَمَرُ وَٱلنُّجُومُ وَٱلْجِبَالُ وَٱلشَّجَرُ وَٱلدَّوَآبُّ وَكَثِيرٌۭ مِّنَ ٱلنَّاسِ ۖ وَكَثِيرٌ حَقَّ عَلَيْهِ ٱلْعَذَابُ ۗ وَمَن يُهِنِ ٱللَّهُ فَمَا لَهُۥ مِن مُّكْرِمٍ ۚ إِنَّ ٱللَّهَ يَفْعَلُ مَا يَشَآءُ ۩",
    translation: {
      en: "",
      ur: "کیا تم نے نہیں دیکھا کہ جو (مخلوق) آسمانوں میں ہے اور جو زمین میں ہے اور سورج اور چاند ستارے اور پہاڑ اور درخت اور چار پائے اور بہت سے انسان خدا کو سجدہ کرتے ہیں۔ اور بہت سے ایسے ہیں جن پر عذاب ثابت ہوچکا ہے۔ اور جس شخص کو خدا ذلیل کرے اس کو عزت دینے والا نہیں۔ بےشک خدا جو چاہتا ہے کرتا ہے",
    },
    words: [
      { id: '22:18:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '22:18:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '22:18:3', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:18:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Allah", ur: "(کو) اللہ" } },
      { id: '22:18:5', arabic: "يَسْجُدُ", transliteration: "yasjudu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prostrates", ur: "prostrates" } },
      { id: '22:18:6', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Him", ur: "کو Him" } },
      { id: '22:18:7', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whoever", ur: "whoever" } },
      { id: '22:18:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '22:18:9', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '22:18:10', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '22:18:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '22:18:12', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '22:18:13', arabic: "وَٱلشَّمْسُ", transliteration: "wal-shamsu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sun", ur: "اور the sun" } },
      { id: '22:18:14', arabic: "وَٱلْقَمَرُ", transliteration: "wal-qamaru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the moon", ur: "اور the moon" } },
      { id: '22:18:15', arabic: "وَٱلنُّجُومُ", transliteration: "wal-nujūmu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the stars", ur: "اور the stars" } },
      { id: '22:18:16', arabic: "وَٱلْجِبَالُ", transliteration: "wal-jibālu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the mountains", ur: "اور the mountains" } },
      { id: '22:18:17', arabic: "وَٱلشَّجَرُ", transliteration: "wal-shajaru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the trees", ur: "اور the trees" } },
      { id: '22:18:18', arabic: "وَٱلدَّوَآبُّ", transliteration: "wal-dawābu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the moving creatures", ur: "اور the moving creatures" } },
      { id: '22:18:19', arabic: "وَكَثِيرٌۭ", transliteration: "wakathīrun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and many", ur: "اور many" } },
      { id: '22:18:20', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:18:21', arabic: "ٱلنَّاسِ ۖ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '22:18:22', arabic: "وَكَثِيرٌ", transliteration: "wakathīrun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But many ", ur: "لیکن many " } },
      { id: '22:18:23', arabic: "حَقَّ", transliteration: "ḥaqqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) justly due", ur: "(is) justly due" } },
      { id: '22:18:24', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on him", ur: "پر him" } },
      { id: '22:18:25', arabic: "ٱلْعَذَابُ ۗ", transliteration: "l-ʿadhābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '22:18:26', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '22:18:27', arabic: "يُهِنِ", transliteration: "yuhini", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah humiliates", ur: "اللہ humiliates" } },
      { id: '22:18:28', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah humiliates", ur: "اللہ humiliates" } },
      { id: '22:18:29', arabic: "فَمَا", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then not", ur: "پھر نہیں" } },
      { id: '22:18:30', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '22:18:31', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '22:18:32', arabic: "مُّكْرِمٍ ۚ", transliteration: "muk'rimin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "bestower of honor", ur: "bestower of honor" } },
      { id: '22:18:33', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:18:34', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:18:35', arabic: "يَفْعَلُ", transliteration: "yafʿalu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "does", ur: "does" } },
      { id: '22:18:36', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:18:37', arabic: "يَشَآءُ ۩", transliteration: "yashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He wills", ur: "وہ wills" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' },
        { from: 24, to: 25, label: 'مضاف + مضاف إليه' },
        { from: 27, to: 28, label: 'فعل + فاعل' },
        { from: 31, to: 32, label: 'جار + مجرور' },
        { from: 33, to: 34, label: 'فعل + فاعل' },
        { from: 36, to: 37, label: 'موصول + صلة' }
      ],
    },
  },
  19: {
    text: "۞ هَـٰذَانِ خَصْمَانِ ٱخْتَصَمُوا۟ فِى رَبِّهِمْ ۖ فَٱلَّذِينَ كَفَرُوا۟ قُطِّعَتْ لَهُمْ ثِيَابٌۭ مِّن نَّارٍۢ يُصَبُّ مِن فَوْقِ رُءُوسِهِمُ ٱلْحَمِيمُ",
    translation: {
      en: "",
      ur: "یہ دو (فریق) ایک دوسرے کے دشمن اپنے پروردگار (کے بارے) میں جھگڑتے ہیں۔ تو کافر ہیں ان کے لئے آگ کے کپڑے قطع کئے جائیں گے (اور) ان کے سروں پر جلتا ہوا پانی ڈالا جائے گا",
    },
    words: [
      { id: '22:19:1', arabic: "۞ هَـٰذَانِ", transliteration: "hādhāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "These two", ur: "These two" } },
      { id: '22:19:2', arabic: "خَصْمَانِ", transliteration: "khaṣmāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "opponents", ur: "opponents" } },
      { id: '22:19:3', arabic: "ٱخْتَصَمُوا۟", transliteration: "ikh'taṣamū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "dispute", ur: "dispute" } },
      { id: '22:19:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "concerning", ur: "concerning" } },
      { id: '22:19:5', arabic: "رَبِّهِمْ ۖ", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their Lord", ur: "their رب" } },
      { id: '22:19:6', arabic: "فَٱلَّذِينَ", transliteration: "fa-alladhīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But those who", ur: "لیکن جو لوگ" } },
      { id: '22:19:7', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '22:19:8', arabic: "قُطِّعَتْ", transliteration: "quṭṭiʿat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be cut out", ur: "will be cut out" } },
      { id: '22:19:9', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '22:19:10', arabic: "ثِيَابٌۭ", transliteration: "thiyābun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "garments", ur: "garments" } },
      { id: '22:19:11', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:19:12', arabic: "نَّارٍۢ", transliteration: "nārin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fire", ur: "آگ" } },
      { id: '22:19:13', arabic: "يُصَبُّ", transliteration: "yuṣabbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will be poured", ur: "Will be poured" } },
      { id: '22:19:14', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '22:19:15', arabic: "فَوْقِ", transliteration: "fawqi", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '22:19:16', arabic: "رُءُوسِهِمُ", transliteration: "ruūsihimu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their heads", ur: "their heads" } },
      { id: '22:19:17', arabic: "ٱلْحَمِيمُ", transliteration: "l-ḥamīmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] scalding water", ur: "[the] scalding پانی" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  20: {
    text: "يُصْهَرُ بِهِۦ مَا فِى بُطُونِهِمْ وَٱلْجُلُودُ",
    translation: {
      en: "",
      ur: "اس سے ان کے پیٹ کے اندر کی چیزیں اور کھالیں گل جائیں گی",
    },
    words: [
      { id: '22:20:1', arabic: "يُصْهَرُ", transliteration: "yuṣ'haru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will be melted", ur: "Will be melted" } },
      { id: '22:20:2', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '22:20:3', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:20:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '22:20:5', arabic: "بُطُونِهِمْ", transliteration: "buṭūnihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their bellies", ur: "their bellies" } },
      { id: '22:20:6', arabic: "وَٱلْجُلُودُ", transliteration: "wal-julūdu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the skins", ur: "اور the skins" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  21: {
    text: "وَلَهُم مَّقَـٰمِعُ مِنْ حَدِيدٍۢ",
    translation: {
      en: "",
      ur: "اور ان (کے مارنے ٹھوکنے) کے لئے لوہے کے ہتھوڑے ہوں گے",
    },
    words: [
      { id: '22:21:1', arabic: "وَلَهُم", transliteration: "walahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for them", ur: "اور for them" } },
      { id: '22:21:2', arabic: "مَّقَـٰمِعُ", transliteration: "maqāmiʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) hooked rods", ur: "(are) hooked rods" } },
      { id: '22:21:3', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:21:4', arabic: "حَدِيدٍۢ", transliteration: "ḥadīdin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "iron", ur: "iron" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  22: {
    text: "كُلَّمَآ أَرَادُوٓا۟ أَن يَخْرُجُوا۟ مِنْهَا مِنْ غَمٍّ أُعِيدُوا۟ فِيهَا وَذُوقُوا۟ عَذَابَ ٱلْحَرِيقِ",
    translation: {
      en: "",
      ur: "جب وہ چاہیں گے کہ اس رنج (وتکلیف) کی وجہ سے دوزخ سے نکل جائیں تو پھر اسی میں لوٹا دیئے جائیں گے۔ اور (کہا جائے گا کہ) جلنے کے عذاب کا مزہ چکھتے رہو",
    },
    words: [
      { id: '22:22:1', arabic: "كُلَّمَآ", transliteration: "kullamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Every time", ur: "ہر وقت" } },
      { id: '22:22:2', arabic: "أَرَادُوٓا۟", transliteration: "arādū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they want", ur: "وہ لوگ want" } },
      { id: '22:22:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '22:22:4', arabic: "يَخْرُجُوا۟", transliteration: "yakhrujū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "come out", ur: "come out" } },
      { id: '22:22:5', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '22:22:6', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:22:7', arabic: "غَمٍّ", transliteration: "ghammin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "anguish", ur: "anguish" } },
      { id: '22:22:8', arabic: "أُعِيدُوا۟", transliteration: "uʿīdū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be returned", ur: "وہ لوگ will be returned" } },
      { id: '22:22:9', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '22:22:10', arabic: "وَذُوقُوا۟", transliteration: "wadhūqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Taste", ur: "Taste" } },
      { id: '22:22:11', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '22:22:12', arabic: "ٱلْحَرِيقِ", transliteration: "l-ḥarīqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Burning Fire", ur: "(of) the Burning آگ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  23: {
    text: "إِنَّ ٱللَّهَ يُدْخِلُ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ جَنَّـٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍۢ وَلُؤْلُؤًۭا ۖ وَلِبَاسُهُمْ فِيهَا حَرِيرٌۭ",
    translation: {
      en: "",
      ur: "جو لوگ ایمان لائے اور عمل نیک کرتے رہے خدا ان کو بہشتوں میں داخل کرے گا جن کے تلے نہریں بہہ رہیں ہیں۔ وہاں ان کو سونے کے کنگن پہنائے جائیں گے اور موتی۔ اور وہاں ان کا لباس ریشمی ہوگا",
    },
    words: [
      { id: '22:23:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:23:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:23:3', arabic: "يُدْخِلُ", transliteration: "yud'khilu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will admit", ur: "will admit" } },
      { id: '22:23:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '22:23:5', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '22:23:6', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and do", ur: "اور do" } },
      { id: '22:23:7', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the righteous deeds", ur: "the نیک deeds" } },
      { id: '22:23:8', arabic: "جَنَّـٰتٍۢ", transliteration: "jannātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Gardens", ur: "(کو) باغات" } },
      { id: '22:23:9', arabic: "تَجْرِى", transliteration: "tajrī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "flow", ur: "flow" } },
      { id: '22:23:10', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:23:11', arabic: "تَحْتِهَا", transliteration: "taḥtihā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "underneath it", ur: "underneath it" } },
      { id: '22:23:12', arabic: "ٱلْأَنْهَـٰرُ", transliteration: "l-anhāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the rivers", ur: "the rivers" } },
      { id: '22:23:13', arabic: "يُحَلَّوْنَ", transliteration: "yuḥallawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They will be adorned", ur: "وہ لوگ will be adorned" } },
      { id: '22:23:14', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '22:23:15', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '22:23:16', arabic: "أَسَاوِرَ", transliteration: "asāwira", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "bracelets", ur: "bracelets" } },
      { id: '22:23:17', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:23:18', arabic: "ذَهَبٍۢ", transliteration: "dhahabin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gold", ur: "gold" } },
      { id: '22:23:19', arabic: "وَلُؤْلُؤًۭا ۖ", transliteration: "walu'lu-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and pearl", ur: "اور pearl" } },
      { id: '22:23:20', arabic: "وَلِبَاسُهُمْ", transliteration: "walibāsuhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their garments", ur: "اور their garments" } },
      { id: '22:23:21', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '22:23:22', arabic: "حَرِيرٌۭ", transliteration: "ḥarīrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be of) silk", ur: "(will be of) silk" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'جار + مجرور' }
      ],
    },
  },
  24: {
    text: "وَهُدُوٓا۟ إِلَى ٱلطَّيِّبِ مِنَ ٱلْقَوْلِ وَهُدُوٓا۟ إِلَىٰ صِرَٰطِ ٱلْحَمِيدِ",
    translation: {
      en: "",
      ur: "اور ان کو پاکیزہ کلام کی ہدایت کی گئی اور (خدائے) حمید کی راہ بتائی گئی",
    },
    words: [
      { id: '22:24:1', arabic: "وَهُدُوٓا۟", transliteration: "wahudū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they were guided", ur: "اور وہ لوگ were guided" } },
      { id: '22:24:2', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '22:24:3', arabic: "ٱلطَّيِّبِ", transliteration: "l-ṭayibi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good", ur: "the اچھا" } },
      { id: '22:24:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:24:5', arabic: "ٱلْقَوْلِ", transliteration: "l-qawli", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "the speech", ur: "the speech" } },
      { id: '22:24:6', arabic: "وَهُدُوٓا۟", transliteration: "wahudū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they were guided", ur: "اور وہ لوگ were guided" } },
      { id: '22:24:7', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '22:24:8', arabic: "صِرَٰطِ", transliteration: "ṣirāṭi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) path", ur: "(the) راستہ" } },
      { id: '22:24:9', arabic: "ٱلْحَمِيدِ", transliteration: "l-ḥamīdi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Praiseworthy", ur: "(of) the Praiseworthy" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  25: {
    text: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ وَيَصُدُّونَ عَن سَبِيلِ ٱللَّهِ وَٱلْمَسْجِدِ ٱلْحَرَامِ ٱلَّذِى جَعَلْنَـٰهُ لِلنَّاسِ سَوَآءً ٱلْعَـٰكِفُ فِيهِ وَٱلْبَادِ ۚ وَمَن يُرِدْ فِيهِ بِإِلْحَادٍۭ بِظُلْمٍۢ نُّذِقْهُ مِنْ عَذَابٍ أَلِيمٍۢ",
    translation: {
      en: "",
      ur: "جو لوگ کافر ہیں اور (لوگوں کو) خدا کے رستے سے اور مسجد محترم سے جسے ہم نے لوگوں کے لئے یکساں (عبادت گاہ) بنایا ہے روکتے ہیں۔ خواہ وہاں کے رہنے والے ہوں یا باہر سے آنے والے۔ اور جو اس میں شرارت سے کج روی (وکفر) کرنا چاہے اس کو ہم درد دینے والے عذاب کا مزہ چکھائیں گے۔",
    },
    words: [
      { id: '22:25:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:25:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '22:25:3', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '22:25:4', arabic: "وَيَصُدُّونَ", transliteration: "wayaṣuddūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hinder", ur: "اور hinder" } },
      { id: '22:25:5', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:25:6', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '22:25:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '22:25:8', arabic: "وَٱلْمَسْجِدِ", transliteration: "wal-masjidi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Al-Masjid Al-Haraam", ur: "اور Al-Masjid Al-Haraam" } },
      { id: '22:25:9', arabic: "ٱلْحَرَامِ", transliteration: "l-ḥarāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "and Al-Masjid Al-Haraam", ur: "اور Al-Masjid Al-Haraam" } },
      { id: '22:25:10', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '22:25:11', arabic: "جَعَلْنَـٰهُ", transliteration: "jaʿalnāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We made it", ur: "ہم made it" } },
      { id: '22:25:12', arabic: "لِلنَّاسِ", transliteration: "lilnnāsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the mankind", ur: "for the mankind" } },
      { id: '22:25:13', arabic: "سَوَآءً", transliteration: "sawāan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "equal", ur: "equal" } },
      { id: '22:25:14', arabic: "ٱلْعَـٰكِفُ", transliteration: "l-ʿākifu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the resident", ur: "(are) the resident" } },
      { id: '22:25:15', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '22:25:16', arabic: "وَٱلْبَادِ ۚ", transliteration: "wal-bādi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the visitor", ur: "اور the visitor" } },
      { id: '22:25:17', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '22:25:18', arabic: "يُرِدْ", transliteration: "yurid", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "intends", ur: "intends" } },
      { id: '22:25:19', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '22:25:20', arabic: "بِإِلْحَادٍۭ", transliteration: "bi-il'ḥādin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of deviation", ur: "of deviation" } },
      { id: '22:25:21', arabic: "بِظُلْمٍۢ", transliteration: "biẓul'min", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(or) wrongdoing", ur: "(یا) wrongdoing" } },
      { id: '22:25:22', arabic: "نُّذِقْهُ", transliteration: "nudhiq'hu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will make him taste", ur: "ہم will make him taste" } },
      { id: '22:25:23', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:25:24', arabic: "عَذَابٍ", transliteration: "ʿadhābin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '22:25:25', arabic: "أَلِيمٍۢ", transliteration: "alīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "painful", ur: "painful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'موصوف + صفت' }
      ],
    },
  },
  26: {
    text: "وَإِذْ بَوَّأْنَا لِإِبْرَٰهِيمَ مَكَانَ ٱلْبَيْتِ أَن لَّا تُشْرِكْ بِى شَيْـًۭٔا وَطَهِّرْ بَيْتِىَ لِلطَّآئِفِينَ وَٱلْقَآئِمِينَ وَٱلرُّكَّعِ ٱلسُّجُودِ",
    translation: {
      en: "",
      ur: "(اور ایک وقت تھا) جب ہم نے ابراہیم کے لئے خانہ کعبہ کو مقرر کیا (اور ارشاد فرمایا) کہ میرے ساتھ کسی چیز کو شریک نہ کیجیو اور طواف کرنے والوں اور قیام کرنے والوں اور رکوع کرنے والوں (اور) سجدہ کرنے والوں کے لئے میرے گھر کو صاف رکھا کرو",
    },
    words: [
      { id: '22:26:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '22:26:2', arabic: "بَوَّأْنَا", transliteration: "bawwanā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We assigned", ur: "ہم assigned" } },
      { id: '22:26:3', arabic: "لِإِبْرَٰهِيمَ", transliteration: "li-ib'rāhīma", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Ibrahim", ur: "کو Ibrahim" } },
      { id: '22:26:4', arabic: "مَكَانَ", transliteration: "makāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(the) site", ur: "(the) site" } },
      { id: '22:26:5', arabic: "ٱلْبَيْتِ", transliteration: "l-bayti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the House", ur: "(of) the House" } },
      { id: '22:26:6', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '22:26:7', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '22:26:8', arabic: "تُشْرِكْ", transliteration: "tush'rik", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "associate", ur: "associate" } },
      { id: '22:26:9', arabic: "بِى", transliteration: "bī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Me", ur: "ساتھ Me" } },
      { id: '22:26:10', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '22:26:11', arabic: "وَطَهِّرْ", transliteration: "waṭahhir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and purify", ur: "اور purify" } },
      { id: '22:26:12', arabic: "بَيْتِىَ", transliteration: "baytiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My House", ur: "My House" } },
      { id: '22:26:13', arabic: "لِلطَّآئِفِينَ", transliteration: "lilṭṭāifīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for those who circumambulate", ur: "for جو لوگ circumambulate" } },
      { id: '22:26:14', arabic: "وَٱلْقَآئِمِينَ", transliteration: "wal-qāimīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who stand", ur: "اور جو لوگ stand" } },
      { id: '22:26:15', arabic: "وَٱلرُّكَّعِ", transliteration: "wal-rukaʿi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who bow", ur: "اور جو لوگ bow" } },
      { id: '22:26:16', arabic: "ٱلسُّجُودِ", transliteration: "l-sujūdi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(and) those who prostrate", ur: "(اور) جو لوگ prostrate" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  27: {
    text: "وَأَذِّن فِى ٱلنَّاسِ بِٱلْحَجِّ يَأْتُوكَ رِجَالًۭا وَعَلَىٰ كُلِّ ضَامِرٍۢ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍۢ",
    translation: {
      en: "",
      ur: "اور لوگوں میں حج کے لئے ندا کر دو کہ تمہاری پیدل اور دبلے دبلے اونٹوں پر جو دور دراز رستوں سے چلے آتے ہو (سوار ہو کر) چلے آئیں",
    },
    words: [
      { id: '22:27:1', arabic: "وَأَذِّن", transliteration: "wa-adhin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And proclaim", ur: "اور proclaim" } },
      { id: '22:27:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '22:27:3', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] mankind", ur: "[the] mankind" } },
      { id: '22:27:4', arabic: "بِٱلْحَجِّ", transliteration: "bil-ḥaji", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "[of] the Pilgrimage", ur: "[of] the Pilgrimage" } },
      { id: '22:27:5', arabic: "يَأْتُوكَ", transliteration: "yatūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will come to you", ur: "وہ لوگ will come کو تم" } },
      { id: '22:27:6', arabic: "رِجَالًۭا", transliteration: "rijālan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(on) foot", ur: "(پر) foot" } },
      { id: '22:27:7', arabic: "وَعَلَىٰ", transliteration: "waʿalā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and on", ur: "اور پر" } },
      { id: '22:27:8', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '22:27:9', arabic: "ضَامِرٍۢ", transliteration: "ḍāmirin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lean camel", ur: "lean camel" } },
      { id: '22:27:10', arabic: "يَأْتِينَ", transliteration: "yatīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will come", ur: "وہ لوگ will come" } },
      { id: '22:27:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:27:12', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '22:27:13', arabic: "فَجٍّ", transliteration: "fajjin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "mountain highway", ur: "mountain highway" } },
      { id: '22:27:14', arabic: "عَمِيقٍۢ", transliteration: "ʿamīqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "distant", ur: "distant" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  28: {
    text: "لِّيَشْهَدُوا۟ مَنَـٰفِعَ لَهُمْ وَيَذْكُرُوا۟ ٱسْمَ ٱللَّهِ فِىٓ أَيَّامٍۢ مَّعْلُومَـٰتٍ عَلَىٰ مَا رَزَقَهُم مِّنۢ بَهِيمَةِ ٱلْأَنْعَـٰمِ ۖ فَكُلُوا۟ مِنْهَا وَأَطْعِمُوا۟ ٱلْبَآئِسَ ٱلْفَقِيرَ",
    translation: {
      en: "",
      ur: "تاکہ اپنے فائدے کے کاموں کے لئے حاضر ہوں۔ اور (قربانی کے) ایام معلوم میں چہار پایاں مویشی (کے ذبح کے وقت) جو خدا نے ان کو دیئے ہیں ان پر خدا کا نام لیں۔ اس میں سے تم خود بھی کھاؤ اور فقیر درماندہ کو بھی کھلاؤ",
    },
    words: [
      { id: '22:28:1', arabic: "لِّيَشْهَدُوا۟", transliteration: "liyashhadū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That they may witness", ur: "وہ وہ لوگ may witness" } },
      { id: '22:28:2', arabic: "مَنَـٰفِعَ", transliteration: "manāfiʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "benefits", ur: "benefits" } },
      { id: '22:28:3', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '22:28:4', arabic: "وَيَذْكُرُوا۟", transliteration: "wayadhkurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and mention", ur: "اور mention" } },
      { id: '22:28:5', arabic: "ٱسْمَ", transliteration: "is'ma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name", ur: "(the) name" } },
      { id: '22:28:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '22:28:7', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '22:28:8', arabic: "أَيَّامٍۢ", transliteration: "ayyāmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "days", ur: "days" } },
      { id: '22:28:9', arabic: "مَّعْلُومَـٰتٍ", transliteration: "maʿlūmātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "known", ur: "known" } },
      { id: '22:28:10', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '22:28:11', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:28:12', arabic: "رَزَقَهُم", transliteration: "razaqahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has provided them", ur: "وہ has provided them" } },
      { id: '22:28:13', arabic: "مِّنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:28:14', arabic: "بَهِيمَةِ", transliteration: "bahīmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) beast", ur: "(the) beast" } },
      { id: '22:28:15', arabic: "ٱلْأَنْعَـٰمِ ۖ", transliteration: "l-anʿāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) cattle", ur: "(of) cattle" } },
      { id: '22:28:16', arabic: "فَكُلُوا۟", transliteration: "fakulū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So eat", ur: "So eat" } },
      { id: '22:28:17', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of them", ur: "of them" } },
      { id: '22:28:18', arabic: "وَأَطْعِمُوا۟", transliteration: "wa-aṭʿimū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and feed", ur: "اور feed" } },
      { id: '22:28:19', arabic: "ٱلْبَآئِسَ", transliteration: "l-bāisa", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the miserable", ur: "the miserable" } },
      { id: '22:28:20', arabic: "ٱلْفَقِيرَ", transliteration: "l-faqīra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the poor", ur: "the poor" } }
    ],
    structure: {
      relationships: [
        { from: 11, to: 12, label: 'موصول + صلة' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  29: {
    text: "ثُمَّ لْيَقْضُوا۟ تَفَثَهُمْ وَلْيُوفُوا۟ نُذُورَهُمْ وَلْيَطَّوَّفُوا۟ بِٱلْبَيْتِ ٱلْعَتِيقِ",
    translation: {
      en: "",
      ur: "پھر چاہیئے کہ لوگ اپنا میل کچیل دور کریں اور نذریں پوری کریں اور خانہٴ قدیم (یعنی بیت الله) کا طواف کریں",
    },
    words: [
      { id: '22:29:1', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '22:29:2', arabic: "لْيَقْضُوا۟", transliteration: "l'yaqḍū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "let them end", ur: "let them end" } },
      { id: '22:29:3', arabic: "تَفَثَهُمْ", transliteration: "tafathahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their prescribed duties", ur: "their prescribed duties" } },
      { id: '22:29:4', arabic: "وَلْيُوفُوا۟", transliteration: "walyūfū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and fulfil", ur: "اور fulfil" } },
      { id: '22:29:5', arabic: "نُذُورَهُمْ", transliteration: "nudhūrahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their vows", ur: "their vows" } },
      { id: '22:29:6', arabic: "وَلْيَطَّوَّفُوا۟", transliteration: "walyaṭṭawwafū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and circumambulate", ur: "اور circumambulate" } },
      { id: '22:29:7', arabic: "بِٱلْبَيْتِ", transliteration: "bil-bayti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the House", ur: "the House" } },
      { id: '22:29:8', arabic: "ٱلْعَتِيقِ", transliteration: "l-ʿatīqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Ancient", ur: "[the] Ancient" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  30: {
    text: "ذَٰلِكَ وَمَن يُعَظِّمْ حُرُمَـٰتِ ٱللَّهِ فَهُوَ خَيْرٌۭ لَّهُۥ عِندَ رَبِّهِۦ ۗ وَأُحِلَّتْ لَكُمُ ٱلْأَنْعَـٰمُ إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ ۖ فَٱجْتَنِبُوا۟ ٱلرِّجْسَ مِنَ ٱلْأَوْثَـٰنِ وَٱجْتَنِبُوا۟ قَوْلَ ٱلزُّورِ",
    translation: {
      en: "",
      ur: "یہ (ہمارا حکم ہے) جو شخص ادب کی چیزوں کی جو خدا نے مقرر کی ہیں عظمت رکھے تو یہ پروردگار کے نزدیک اس کے حق میں بہتر ہے۔ اور تمہارے لئے مویشی حلال کردیئے گئے ہیں۔ سوا ان کے جو تمہیں پڑھ کر سنائے جاتے ہیں تو بتوں کی پلیدی سے بچو اور جھوٹی بات سے اجتناب کرو",
    },
    words: [
      { id: '22:30:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '22:30:2', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '22:30:3', arabic: "يُعَظِّمْ", transliteration: "yuʿaẓẓim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "honors", ur: "honors" } },
      { id: '22:30:4', arabic: "حُرُمَـٰتِ", transliteration: "ḥurumāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) sacred rites", ur: "(the) sacred rites" } },
      { id: '22:30:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '22:30:6', arabic: "فَهُوَ", transliteration: "fahuwa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then it", ur: "پھر it" } },
      { id: '22:30:7', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) best", ur: "(is) best" } },
      { id: '22:30:8', arabic: "لَّهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '22:30:9', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near", ur: "near" } },
      { id: '22:30:10', arabic: "رَبِّهِۦ ۗ", transliteration: "rabbihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his Lord", ur: "his رب" } },
      { id: '22:30:11', arabic: "وَأُحِلَّتْ", transliteration: "wa-uḥillat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And are made lawful", ur: "اور are made lawful" } },
      { id: '22:30:12', arabic: "لَكُمُ", transliteration: "lakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '22:30:13', arabic: "ٱلْأَنْعَـٰمُ", transliteration: "l-anʿāmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the cattle", ur: "the cattle" } },
      { id: '22:30:14', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '22:30:15', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:30:16', arabic: "يُتْلَىٰ", transliteration: "yut'lā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is recited", ur: "is recited" } },
      { id: '22:30:17', arabic: "عَلَيْكُمْ ۖ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '22:30:18', arabic: "فَٱجْتَنِبُوا۟", transliteration: "fa-ij'tanibū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So avoid", ur: "So avoid" } },
      { id: '22:30:19', arabic: "ٱلرِّجْسَ", transliteration: "l-rij'sa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the abomination", ur: "the abomination" } },
      { id: '22:30:20', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:30:21', arabic: "ٱلْأَوْثَـٰنِ", transliteration: "l-awthāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the idols", ur: "the idols" } },
      { id: '22:30:22', arabic: "وَٱجْتَنِبُوا۟", transliteration: "wa-ij'tanibū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and avoid", ur: "اور avoid" } },
      { id: '22:30:23', arabic: "قَوْلَ", transliteration: "qawla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) word", ur: "(the) word" } },
      { id: '22:30:24', arabic: "ٱلزُّورِ", transliteration: "l-zūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "false", ur: "جھوٹ" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'موصول + صلة' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  31: {
    text: "حُنَفَآءَ لِلَّهِ غَيْرَ مُشْرِكِينَ بِهِۦ ۚ وَمَن يُشْرِكْ بِٱللَّهِ فَكَأَنَّمَا خَرَّ مِنَ ٱلسَّمَآءِ فَتَخْطَفُهُ ٱلطَّيْرُ أَوْ تَهْوِى بِهِ ٱلرِّيحُ فِى مَكَانٍۢ سَحِيقٍۢ",
    translation: {
      en: "",
      ur: "صرف ایک خدا کے ہو کر اس کے ساتھ شریک نہ ٹھیرا کر۔ اور جو شخص (کسی کو) خدا کے ساتھ شریک مقرر کرے تو وہ گویا ایسا ہے جیسے آسمان سے گر پڑے پھر اس کو پرندے اُچک لے جائیں یا ہوا کسی دور جگہ اُڑا کر پھینک دے",
    },
    words: [
      { id: '22:31:1', arabic: "حُنَفَآءَ", transliteration: "ḥunafāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Being upright", ur: "Being upright" } },
      { id: '22:31:2', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '22:31:3', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '22:31:4', arabic: "مُشْرِكِينَ", transliteration: "mush'rikīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "associating partners", ur: "associating partners" } },
      { id: '22:31:5', arabic: "بِهِۦ ۚ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Him", ur: "ساتھ Him" } },
      { id: '22:31:6', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '22:31:7', arabic: "يُشْرِكْ", transliteration: "yush'rik", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "associates partners", ur: "associates partners" } },
      { id: '22:31:8', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with Allah", ur: "ساتھ اللہ" } },
      { id: '22:31:9', arabic: "فَكَأَنَّمَا", transliteration: "faka-annamā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (it is) as though", ur: "پھر (it is) as though" } },
      { id: '22:31:10', arabic: "خَرَّ", transliteration: "kharra", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he had fallen", ur: "وہ had fallen" } },
      { id: '22:31:11', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:31:12', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '22:31:13', arabic: "فَتَخْطَفُهُ", transliteration: "fatakhṭafuhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and (had) snatched him", ur: "اور (had) snatched him" } },
      { id: '22:31:14', arabic: "ٱلطَّيْرُ", transliteration: "l-ṭayru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the birds", ur: "the birds" } },
      { id: '22:31:15', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '22:31:16', arabic: "تَهْوِى", transliteration: "tahwī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "had blown", ur: "had blown" } },
      { id: '22:31:17', arabic: "بِهِ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "him", ur: "him" } },
      { id: '22:31:18', arabic: "ٱلرِّيحُ", transliteration: "l-rīḥu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wind", ur: "the wind" } },
      { id: '22:31:19', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '22:31:20', arabic: "مَكَانٍۢ", transliteration: "makānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a place", ur: "a place" } },
      { id: '22:31:21', arabic: "سَحِيقٍۢ", transliteration: "saḥīqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far off", ur: "far off" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  32: {
    text: "ذَٰلِكَ وَمَن يُعَظِّمْ شَعَـٰٓئِرَ ٱللَّهِ فَإِنَّهَا مِن تَقْوَى ٱلْقُلُوبِ",
    translation: {
      en: "",
      ur: "(یہ ہمارا حکم ہے) اور جو شخص ادب کی چیزوں کی جو خدا نے مقرر کی ہیں عظمت رکھے تو یہ (فعل) دلوں کی پرہیزگاری میں سے ہے",
    },
    words: [
      { id: '22:32:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '22:32:2', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '22:32:3', arabic: "يُعَظِّمْ", transliteration: "yuʿaẓẓim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "honors", ur: "honors" } },
      { id: '22:32:4', arabic: "شَعَـٰٓئِرَ", transliteration: "shaʿāira", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Symbols", ur: "(the) Symbols" } },
      { id: '22:32:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '22:32:6', arabic: "فَإِنَّهَا", transliteration: "fa-innahā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed, it", ur: "پھر بیشک, it" } },
      { id: '22:32:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) from", ur: "(is) سے" } },
      { id: '22:32:8', arabic: "تَقْوَى", transliteration: "taqwā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(the) piety", ur: "(the) piety" } },
      { id: '22:32:9', arabic: "ٱلْقُلُوبِ", transliteration: "l-qulūbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the hearts", ur: "(of) the hearts" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  33: {
    text: "لَكُمْ فِيهَا مَنَـٰفِعُ إِلَىٰٓ أَجَلٍۢ مُّسَمًّۭى ثُمَّ مَحِلُّهَآ إِلَى ٱلْبَيْتِ ٱلْعَتِيقِ",
    translation: {
      en: "",
      ur: "ان میں ایک وقت مقرر تک تمہارے لئے فائدے ہیں پھر ان کو خانہٴ قدیم (یعنی بیت الله) تک پہنچانا (اور ذبح ہونا) ہے",
    },
    words: [
      { id: '22:33:1', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For you", ur: "For تم" } },
      { id: '22:33:2', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '22:33:3', arabic: "مَنَـٰفِعُ", transliteration: "manāfiʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) benefits", ur: "(are) benefits" } },
      { id: '22:33:4', arabic: "إِلَىٰٓ", transliteration: "ilā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for", ur: "for" } },
      { id: '22:33:5', arabic: "أَجَلٍۢ", transliteration: "ajalin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a term", ur: "a term" } },
      { id: '22:33:6', arabic: "مُّسَمًّۭى", transliteration: "musamman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "appointed", ur: "appointed" } },
      { id: '22:33:7', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '22:33:8', arabic: "مَحِلُّهَآ", transliteration: "maḥilluhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their place of sacrifice", ur: "their place of sacrifice" } },
      { id: '22:33:9', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) at", ur: "(is) at" } },
      { id: '22:33:10', arabic: "ٱلْبَيْتِ", transliteration: "l-bayti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the House", ur: "the House" } },
      { id: '22:33:11', arabic: "ٱلْعَتِيقِ", transliteration: "l-ʿatīqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Ancient", ur: "the Ancient" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  34: {
    text: "وَلِكُلِّ أُمَّةٍۢ جَعَلْنَا مَنسَكًۭا لِّيَذْكُرُوا۟ ٱسْمَ ٱللَّهِ عَلَىٰ مَا رَزَقَهُم مِّنۢ بَهِيمَةِ ٱلْأَنْعَـٰمِ ۗ فَإِلَـٰهُكُمْ إِلَـٰهٌۭ وَٰحِدٌۭ فَلَهُۥٓ أَسْلِمُوا۟ ۗ وَبَشِّرِ ٱلْمُخْبِتِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے ہر اُمت کے لئے قربانی کا طریق مقرر کردیا ہے تاکہ جو مویشی چارپائے خدا نے ان کو دیئے ہیں (ان کے ذبح کرنے کے وقت) ان پر خدا کا نام لیں۔ سو تمہارا معبود ایک ہی ہے تو اسی کے فرمانبردار ہوجاؤ۔ اور عاجزی کرنے والوں کو خوشخبری سنادو",
    },
    words: [
      { id: '22:34:1', arabic: "وَلِكُلِّ", transliteration: "walikulli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for every", ur: "اور for ہر" } },
      { id: '22:34:2', arabic: "أُمَّةٍۢ", transliteration: "ummatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nation", ur: "nation" } },
      { id: '22:34:3', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We have appointed", ur: "ہم have appointed" } },
      { id: '22:34:4', arabic: "مَنسَكًۭا", transliteration: "mansakan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a rite", ur: "a rite" } },
      { id: '22:34:5', arabic: "لِّيَذْكُرُوا۟", transliteration: "liyadhkurū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that they may mention", ur: "وہ وہ لوگ may mention" } },
      { id: '22:34:6', arabic: "ٱسْمَ", transliteration: "is'ma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name", ur: "(the) name" } },
      { id: '22:34:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '22:34:8', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '22:34:9', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:34:10', arabic: "رَزَقَهُم", transliteration: "razaqahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (has) provided them", ur: "وہ (has) provided them" } },
      { id: '22:34:11', arabic: "مِّنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:34:12', arabic: "بَهِيمَةِ", transliteration: "bahīmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) beast", ur: "(the) beast" } },
      { id: '22:34:13', arabic: "ٱلْأَنْعَـٰمِ ۗ", transliteration: "l-anʿāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) cattle", ur: "(of) cattle" } },
      { id: '22:34:14', arabic: "فَإِلَـٰهُكُمْ", transliteration: "fa-ilāhukum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And your God", ur: "اور your اللہ" } },
      { id: '22:34:15', arabic: "إِلَـٰهٌۭ", transliteration: "ilāhun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) God", ur: "(is) اللہ" } },
      { id: '22:34:16', arabic: "وَٰحِدٌۭ", transliteration: "wāḥidun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "One", ur: "One" } },
      { id: '22:34:17', arabic: "فَلَهُۥٓ", transliteration: "falahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so to Him", ur: "so کو Him" } },
      { id: '22:34:18', arabic: "أَسْلِمُوا۟ ۗ", transliteration: "aslimū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "submit", ur: "submit" } },
      { id: '22:34:19', arabic: "وَبَشِّرِ", transliteration: "wabashiri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And give glad tidings", ur: "اور give glad tidings" } },
      { id: '22:34:20', arabic: "ٱلْمُخْبِتِينَ", transliteration: "l-mukh'bitīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the humble ones", ur: "(کو) the humble ones" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصول + صلة' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  35: {
    text: "ٱلَّذِينَ إِذَا ذُكِرَ ٱللَّهُ وَجِلَتْ قُلُوبُهُمْ وَٱلصَّـٰبِرِينَ عَلَىٰ مَآ أَصَابَهُمْ وَٱلْمُقِيمِى ٱلصَّلَوٰةِ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ",
    translation: {
      en: "",
      ur: "یہ وہ لوگ ہیں کہ جب خدا کا نام لیا جاتا ہے تو ان کے دل ڈر جاتے ہیں اور جب ان پر مصیبت پڑتی ہے تو صبر کرتے ہیں اور نماز آداب سے پڑھتے ہیں اور جو (مال) ہم نے ان کو عطا فرمایا ہے (اس میں سے) (نیک کاموں میں) خرچ کرتے ہیں",
    },
    words: [
      { id: '22:35:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those", ur: "Those" } },
      { id: '22:35:2', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '22:35:3', arabic: "ذُكِرَ", transliteration: "dhukira", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is mentioned", ur: "is mentioned" } },
      { id: '22:35:4', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah ", ur: "اللہ " } },
      { id: '22:35:5', arabic: "وَجِلَتْ", transliteration: "wajilat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "fear", ur: "ڈرنا" } },
      { id: '22:35:6', arabic: "قُلُوبُهُمْ", transliteration: "qulūbuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '22:35:7', arabic: "وَٱلصَّـٰبِرِينَ", transliteration: "wal-ṣābirīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who are patient", ur: "اور جو لوگ are patient" } },
      { id: '22:35:8', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '22:35:9', arabic: "مَآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '22:35:10', arabic: "أَصَابَهُمْ", transliteration: "aṣābahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has afflicted them", ur: "has afflicted them" } },
      { id: '22:35:11', arabic: "وَٱلْمُقِيمِى", transliteration: "wal-muqīmī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who establish", ur: "اور جو لوگ establish" } },
      { id: '22:35:12', arabic: "ٱلصَّلَوٰةِ", transliteration: "l-ṣalati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '22:35:13', arabic: "وَمِمَّا", transliteration: "wamimmā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and out of what", ur: "اور out of کیا" } },
      { id: '22:35:14', arabic: "رَزَقْنَـٰهُمْ", transliteration: "razaqnāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have provided them", ur: "ہم have provided them" } },
      { id: '22:35:15', arabic: "يُنفِقُونَ", transliteration: "yunfiqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they spend", ur: "وہ لوگ spend" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  36: {
    text: "وَٱلْبُدْنَ جَعَلْنَـٰهَا لَكُم مِّن شَعَـٰٓئِرِ ٱللَّهِ لَكُمْ فِيهَا خَيْرٌۭ ۖ فَٱذْكُرُوا۟ ٱسْمَ ٱللَّهِ عَلَيْهَا صَوَآفَّ ۖ فَإِذَا وَجَبَتْ جُنُوبُهَا فَكُلُوا۟ مِنْهَا وَأَطْعِمُوا۟ ٱلْقَانِعَ وَٱلْمُعْتَرَّ ۚ كَذَٰلِكَ سَخَّرْنَـٰهَا لَكُمْ لَعَلَّكُمْ تَشْكُرُونَ",
    translation: {
      en: "",
      ur: "اور قربانی کے اونٹوں کو بھی ہم نے تمہارے لئے شعائر خدا مقرر کیا ہے۔ ان میں تمہارے لئے فائدے ہیں۔ تو (قربانی کرنے کے وقت) قطار باندھ کر ان پر خدا کا نام لو۔ جب پہلو کے بل گر پڑیں تو ان میں سے کھاؤ اور قناعت سے بیٹھ رہنے والوں اور سوال کرنے والوں کو بھی کھلاؤ۔ اس طرح ہم نے ان کو تمہارے زیرفرمان کردیا ہے تاکہ تم شکر کرو",
    },
    words: [
      { id: '22:36:1', arabic: "وَٱلْبُدْنَ", transliteration: "wal-bud'na", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the camels and cattle ", ur: "اور the camels اور cattle " } },
      { id: '22:36:2', arabic: "جَعَلْنَـٰهَا", transliteration: "jaʿalnāhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have made them", ur: "ہم have made them" } },
      { id: '22:36:3', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '22:36:4', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among", ur: "among" } },
      { id: '22:36:5', arabic: "شَعَـٰٓئِرِ", transliteration: "shaʿāiri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Symbols", ur: "(the) Symbols" } },
      { id: '22:36:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '22:36:7', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '22:36:8', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "therein", ur: "اس میں" } },
      { id: '22:36:9', arabic: "خَيْرٌۭ ۖ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) good", ur: "(is) اچھا" } },
      { id: '22:36:10', arabic: "فَٱذْكُرُوا۟", transliteration: "fa-udh'kurū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So mention", ur: "So mention" } },
      { id: '22:36:11', arabic: "ٱسْمَ", transliteration: "is'ma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name", ur: "(the) name" } },
      { id: '22:36:12', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '22:36:13', arabic: "عَلَيْهَا", transliteration: "ʿalayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '22:36:14', arabic: "صَوَآفَّ ۖ", transliteration: "ṣawāffa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(when) lined up", ur: "(when) lined up" } },
      { id: '22:36:15', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and when", ur: "اور when" } },
      { id: '22:36:16', arabic: "وَجَبَتْ", transliteration: "wajabat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "are down", ur: "are down" } },
      { id: '22:36:17', arabic: "جُنُوبُهَا", transliteration: "junūbuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their sides", ur: "their sides" } },
      { id: '22:36:18', arabic: "فَكُلُوا۟", transliteration: "fakulū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then eat", ur: "پھر eat" } },
      { id: '22:36:19', arabic: "مِنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '22:36:20', arabic: "وَأَطْعِمُوا۟", transliteration: "wa-aṭʿimū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and feed", ur: "اور feed" } },
      { id: '22:36:21', arabic: "ٱلْقَانِعَ", transliteration: "l-qāniʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the needy who do not ask", ur: "the needy جو do نہیں ask" } },
      { id: '22:36:22', arabic: "وَٱلْمُعْتَرَّ ۚ", transliteration: "wal-muʿ'tara", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the needy who ask", ur: "اور the needy جو ask" } },
      { id: '22:36:23', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '22:36:24', arabic: "سَخَّرْنَـٰهَا", transliteration: "sakharnāhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have subjected them", ur: "ہم have subjected them" } },
      { id: '22:36:25', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '22:36:26', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '22:36:27', arabic: "تَشْكُرُونَ", transliteration: "tashkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be grateful", ur: "be grateful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'فعل + فاعل' }
      ],
    },
  },
  37: {
    text: "لَن يَنَالَ ٱللَّهَ لُحُومُهَا وَلَا دِمَآؤُهَا وَلَـٰكِن يَنَالُهُ ٱلتَّقْوَىٰ مِنكُمْ ۚ كَذَٰلِكَ سَخَّرَهَا لَكُمْ لِتُكَبِّرُوا۟ ٱللَّهَ عَلَىٰ مَا هَدَىٰكُمْ ۗ وَبَشِّرِ ٱلْمُحْسِنِينَ",
    translation: {
      en: "",
      ur: "خدا تک نہ اُن کا گوشت پہنچتا ہے اور نہ خون۔ بلکہ اس تک تمہاری پرہیزگاری پہنچتی ہے۔ اسی طرح خدا نے ان کو تمہارا مسخر کر دیا ہے تاکہ اس بات کے بدلے کہ اس نے تم کو ہدایت بخشی ہے اسے بزرگی سے یاد کرو۔ اور (اے پیغمبر) نیکوکاروں کو خوشخبری سنا دو",
    },
    words: [
      { id: '22:37:1', arabic: "لَن", transliteration: "lan", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Will not", ur: "Will نہیں" } },
      { id: '22:37:2', arabic: "يَنَالَ", transliteration: "yanāla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reach", ur: "reach" } },
      { id: '22:37:3', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:37:4', arabic: "لُحُومُهَا", transliteration: "luḥūmuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their meat", ur: "their meat" } },
      { id: '22:37:5', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '22:37:6', arabic: "دِمَآؤُهَا", transliteration: "dimāuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their blood", ur: "their blood" } },
      { id: '22:37:7', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '22:37:8', arabic: "يَنَالُهُ", transliteration: "yanāluhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reaches Him", ur: "reaches Him" } },
      { id: '22:37:9', arabic: "ٱلتَّقْوَىٰ", transliteration: "l-taqwā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the piety", ur: "the piety" } },
      { id: '22:37:10', arabic: "مِنكُمْ ۚ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '22:37:11', arabic: "كَذَٰلِكَ", transliteration: "kadhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thus", ur: "Thus" } },
      { id: '22:37:12', arabic: "سَخَّرَهَا", transliteration: "sakharahā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He subjected them", ur: "وہ subjected them" } },
      { id: '22:37:13', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '22:37:14', arabic: "لِتُكَبِّرُوا۟", transliteration: "litukabbirū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "so that you may magnify", ur: "so وہ تم may magnify" } },
      { id: '22:37:15', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:37:16', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '22:37:17', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:37:18', arabic: "هَدَىٰكُمْ ۗ", transliteration: "hadākum", pos: ['V'], posLabel: 'V', root: "ه د ي", meaning: { en: "He has guided you", ur: "وہ has guided تم" } },
      { id: '22:37:19', arabic: "وَبَشِّرِ", transliteration: "wabashiri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And give glad tidings", ur: "اور give glad tidings" } },
      { id: '22:37:20', arabic: "ٱلْمُحْسِنِينَ", transliteration: "l-muḥ'sinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the good-doers", ur: "(کو) the اچھا-doers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'موصول + صلة' }
      ],
    },
  },
  38: {
    text: "۞ إِنَّ ٱللَّهَ يُدَٰفِعُ عَنِ ٱلَّذِينَ ءَامَنُوٓا۟ ۗ إِنَّ ٱللَّهَ لَا يُحِبُّ كُلَّ خَوَّانٍۢ كَفُورٍ",
    translation: {
      en: "",
      ur: "خدا تو مومنوں سے ان کے دشمنوں کو ہٹاتا رہتا ہے۔ بےشک خدا کسی خیانت کرنے والے اور کفران نعمت کرنے والے کو دوست نہیں رکھتا۔",
    },
    words: [
      { id: '22:38:1', arabic: "۞ إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:38:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:38:3', arabic: "يُدَٰفِعُ", transliteration: "yudāfiʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "defends", ur: "defends" } },
      { id: '22:38:4', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "defends", ur: "defends" } },
      { id: '22:38:5', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '22:38:6', arabic: "ءَامَنُوٓا۟ ۗ", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '22:38:7', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:38:8', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:38:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '22:38:10', arabic: "يُحِبُّ", transliteration: "yuḥibbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "like", ur: "like" } },
      { id: '22:38:11', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '22:38:12', arabic: "خَوَّانٍۢ", transliteration: "khawwānin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "treacherous", ur: "treacherous" } },
      { id: '22:38:13', arabic: "كَفُورٍ", transliteration: "kafūrin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "ungrateful", ur: "ungrateful" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ],
    },
  },
  39: {
    text: "أُذِنَ لِلَّذِينَ يُقَـٰتَلُونَ بِأَنَّهُمْ ظُلِمُوا۟ ۚ وَإِنَّ ٱللَّهَ عَلَىٰ نَصْرِهِمْ لَقَدِيرٌ",
    translation: {
      en: "",
      ur: "جن مسلمانوں سے (خواہ مخواہ) لڑائی کی جاتی ہے ان کو اجازت ہے (کہ وہ بھی لڑیں) کیونکہ ان پر ظلم ہو رہا ہے۔ اور خدا (ان کی مدد کرے گا وہ) یقیناً ان کی مدد پر قادر ہے",
    },
    words: [
      { id: '22:39:1', arabic: "أُذِنَ", transliteration: "udhina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Permission is given", ur: "Permission is given" } },
      { id: '22:39:2', arabic: "لِلَّذِينَ", transliteration: "lilladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to those who", ur: "کو جو لوگ" } },
      { id: '22:39:3', arabic: "يُقَـٰتَلُونَ", transliteration: "yuqātalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are being fought", ur: "are being fought" } },
      { id: '22:39:4', arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because they", ur: "because وہ لوگ" } },
      { id: '22:39:5', arabic: "ظُلِمُوا۟ ۚ", transliteration: "ẓulimū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "were wronged", ur: "were wronged" } },
      { id: '22:39:6', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '22:39:7', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:39:8', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '22:39:9', arabic: "نَصْرِهِمْ", transliteration: "naṣrihim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "their victory", ur: "their victory" } },
      { id: '22:39:10', arabic: "لَقَدِيرٌ", transliteration: "laqadīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) surely Able", ur: "(is) یقیناً Able" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  40: {
    text: "ٱلَّذِينَ أُخْرِجُوا۟ مِن دِيَـٰرِهِم بِغَيْرِ حَقٍّ إِلَّآ أَن يَقُولُوا۟ رَبُّنَا ٱللَّهُ ۗ وَلَوْلَا دَفْعُ ٱللَّهِ ٱلنَّاسَ بَعْضَهُم بِبَعْضٍۢ لَّهُدِّمَتْ صَوَٰمِعُ وَبِيَعٌۭ وَصَلَوَٰتٌۭ وَمَسَـٰجِدُ يُذْكَرُ فِيهَا ٱسْمُ ٱللَّهِ كَثِيرًۭا ۗ وَلَيَنصُرَنَّ ٱللَّهُ مَن يَنصُرُهُۥٓ ۗ إِنَّ ٱللَّهَ لَقَوِىٌّ عَزِيزٌ",
    translation: {
      en: "",
      ur: "یہ وہ لوگ ہیں کہ اپنے گھروں سے ناحق نکال دیئے گئے (انہوں نے کچھ قصور نہیں کیا) ہاں یہ کہتے ہیں کہ ہمارا پروردگار خدا ہے۔ اور اگر خدا لوگوں کو ایک دوسرے سے نہ ہٹاتا رہتا تو (راہبوں کے) صومعے اور (عیسائیوں کے) گرجے اور (یہودیوں کے) عبادت خانے اور (مسلمانوں کی) مسجدیں جن میں خدا کا بہت سا ذکر کیا جاتا ہے ویران ہوچکی ہوتیں۔ اور جو شخص خدا کی مدد کرتا ہے خدا اس کی ضرور مدد کرتا ہے۔ بےشک خدا توانا اور غالب ہے",
    },
    words: [
      { id: '22:40:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '22:40:2', arabic: "أُخْرِجُوا۟", transliteration: "ukh'rijū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "have been evicted", ur: "have been evicted" } },
      { id: '22:40:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:40:4', arabic: "دِيَـٰرِهِم", transliteration: "diyārihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their homes", ur: "their homes" } },
      { id: '22:40:5', arabic: "بِغَيْرِ", transliteration: "bighayri", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '22:40:6', arabic: "حَقٍّ", transliteration: "ḥaqqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "right", ur: "right" } },
      { id: '22:40:7', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '22:40:8', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:40:9', arabic: "يَقُولُوا۟", transliteration: "yaqūlū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '22:40:10', arabic: "رَبُّنَا", transliteration: "rabbunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Lord", ur: "Our رب" } },
      { id: '22:40:11', arabic: "ٱللَّهُ ۗ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '22:40:12', arabic: "وَلَوْلَا", transliteration: "walawlā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if not", ur: "اور if نہیں" } },
      { id: '22:40:13', arabic: "دَفْعُ", transliteration: "dafʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah checks", ur: "اللہ checks" } },
      { id: '22:40:14', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah checks", ur: "اللہ checks" } },
      { id: '22:40:15', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '22:40:16', arabic: "بَعْضَهُم", transliteration: "baʿḍahum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of them", ur: "some of them" } },
      { id: '22:40:17', arabic: "بِبَعْضٍۢ", transliteration: "bibaʿḍin", pos: ['P+N'], posLabel: 'P+N', root: "ب ع ض", meaning: { en: "by others", ur: "by others" } },
      { id: '22:40:18', arabic: "لَّهُدِّمَتْ", transliteration: "lahuddimat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely (would) have been demolished", ur: "یقیناً (would) have been demolished" } },
      { id: '22:40:19', arabic: "صَوَٰمِعُ", transliteration: "ṣawāmiʿu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "monasteries", ur: "monasteries" } },
      { id: '22:40:20', arabic: "وَبِيَعٌۭ", transliteration: "wabiyaʿun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and churches", ur: "اور churches" } },
      { id: '22:40:21', arabic: "وَصَلَوَٰتٌۭ", transliteration: "waṣalawātun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and synagogues", ur: "اور synagogues" } },
      { id: '22:40:22', arabic: "وَمَسَـٰجِدُ", transliteration: "wamasājidu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and masajid ", ur: "اور masajid " } },
      { id: '22:40:23', arabic: "يُذْكَرُ", transliteration: "yudh'karu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is mentioned", ur: "is mentioned" } },
      { id: '22:40:24', arabic: "فِيهَا", transliteration: "fīhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '22:40:25', arabic: "ٱسْمُ", transliteration: "us'mu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name of Allah", ur: "(the) name of اللہ" } },
      { id: '22:40:26', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) name of Allah", ur: "(the) name of اللہ" } },
      { id: '22:40:27', arabic: "كَثِيرًۭا ۗ", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "much", ur: "much" } },
      { id: '22:40:28', arabic: "وَلَيَنصُرَنَّ", transliteration: "walayanṣuranna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And surely Allah will help", ur: "اور یقیناً اللہ will help" } },
      { id: '22:40:29', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "And surely Allah will help", ur: "اور یقیناً اللہ will help" } },
      { id: '22:40:30', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(those) who", ur: "(those) جو" } },
      { id: '22:40:31', arabic: "يَنصُرُهُۥٓ ۗ", transliteration: "yanṣuruhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "help Him", ur: "help Him" } },
      { id: '22:40:32', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:40:33', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:40:34', arabic: "لَقَوِىٌّ", transliteration: "laqawiyyun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) surely All-Strong", ur: "(is) یقیناً سب-Strong" } },
      { id: '22:40:35', arabic: "عَزِيزٌ", transliteration: "ʿazīzun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Mighty", ur: "سب-Mighty" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'مضاف + مضاف إليه' },
        { from: 25, to: 26, label: 'مضاف + مضاف إليه' },
        { from: 30, to: 31, label: 'موصول + صلة' },
        { from: 32, to: 33, label: 'فعل + فاعل' },
        { from: 33, to: 34, label: 'موصوف + صفت' }
      ],
    },
  },
  41: {
    text: "ٱلَّذِينَ إِن مَّكَّنَّـٰهُمْ فِى ٱلْأَرْضِ أَقَامُوا۟ ٱلصَّلَوٰةَ وَءَاتَوُا۟ ٱلزَّكَوٰةَ وَأَمَرُوا۟ بِٱلْمَعْرُوفِ وَنَهَوْا۟ عَنِ ٱلْمُنكَرِ ۗ وَلِلَّهِ عَـٰقِبَةُ ٱلْأُمُورِ",
    translation: {
      en: "",
      ur: "یہ وہ لوگ ہیں کہ اگر ہم ان کو ملک میں دسترس دیں تو نماز پڑھیں اور زکوٰة ادا کریں اور نیک کام کرنے کا حکم دیں اور برے کاموں سے منع کریں اور سب کاموں کا انجام خدا ہی کے اختیار میں ہے",
    },
    words: [
      { id: '22:41:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who", ur: "جو لوگ" } },
      { id: '22:41:2', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '22:41:3', arabic: "مَّكَّنَّـٰهُمْ", transliteration: "makkannāhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We establish them", ur: "ہم establish them" } },
      { id: '22:41:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '22:41:5', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the land", ur: "the land" } },
      { id: '22:41:6', arabic: "أَقَامُوا۟", transliteration: "aqāmū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they establish", ur: "وہ لوگ establish" } },
      { id: '22:41:7', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '22:41:8', arabic: "وَءَاتَوُا۟", transliteration: "waātawū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they give", ur: "اور وہ لوگ give" } },
      { id: '22:41:9', arabic: "ٱلزَّكَوٰةَ", transliteration: "l-zakata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "zakah", ur: "zakah" } },
      { id: '22:41:10', arabic: "وَأَمَرُوا۟", transliteration: "wa-amarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they enjoin", ur: "اور وہ لوگ enjoin" } },
      { id: '22:41:11', arabic: "بِٱلْمَعْرُوفِ", transliteration: "bil-maʿrūfi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the right", ur: "the right" } },
      { id: '22:41:12', arabic: "وَنَهَوْا۟", transliteration: "wanahaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forbid", ur: "اور forbid" } },
      { id: '22:41:13', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:41:14', arabic: "ٱلْمُنكَرِ ۗ", transliteration: "l-munkari", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrong", ur: "the wrong" } },
      { id: '22:41:15', arabic: "وَلِلَّهِ", transliteration: "walillahi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And for Allah", ur: "اور for اللہ" } },
      { id: '22:41:16', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) end", ur: "(is the) end" } },
      { id: '22:41:17', arabic: "ٱلْأُمُورِ", transliteration: "l-umūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the matters", ur: "(of) the matters" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  42: {
    text: "وَإِن يُكَذِّبُوكَ فَقَدْ كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍۢ وَعَادٌۭ وَثَمُودُ",
    translation: {
      en: "",
      ur: "اور اگر یہ لوگ تم کو جھٹلاتے ہیں ان سے پہلے نوح کی قوم اور عاد وثمود بھی (اپنے پیغمبروں کو) جھٹلا چکے ہیں",
    },
    words: [
      { id: '22:42:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '22:42:2', arabic: "يُكَذِّبُوكَ", transliteration: "yukadhibūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they deny you", ur: "وہ لوگ deny تم" } },
      { id: '22:42:3', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so verily", ur: "so بیشک" } },
      { id: '22:42:4', arabic: "كَذَّبَتْ", transliteration: "kadhabat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "denied", ur: "denied" } },
      { id: '22:42:5', arabic: "قَبْلَهُمْ", transliteration: "qablahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before them", ur: "پہلے them" } },
      { id: '22:42:6', arabic: "قَوْمُ", transliteration: "qawmu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '22:42:7', arabic: "نُوحٍۢ", transliteration: "nūḥin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Nuh", ur: "(of) Nuh" } },
      { id: '22:42:8', arabic: "وَعَادٌۭ", transliteration: "waʿādun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Aad", ur: "اور Aad" } },
      { id: '22:42:9', arabic: "وَثَمُودُ", transliteration: "wathamūdu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Thamud", ur: "اور Thamud" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  43: {
    text: "وَقَوْمُ إِبْرَٰهِيمَ وَقَوْمُ لُوطٍۢ",
    translation: {
      en: "",
      ur: "اور قوم ابراہیم اور قوم لوط بھی",
    },
    words: [
      { id: '22:43:1', arabic: "وَقَوْمُ", transliteration: "waqawmu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (the) people", ur: "اور (the) لوگ" } },
      { id: '22:43:2', arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Ibrahim", ur: "(of) Ibrahim" } },
      { id: '22:43:3', arabic: "وَقَوْمُ", transliteration: "waqawmu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (the) people", ur: "اور (the) لوگ" } },
      { id: '22:43:4', arabic: "لُوطٍۢ", transliteration: "lūṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Lut", ur: "(of) Lut" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  44: {
    text: "وَأَصْحَـٰبُ مَدْيَنَ ۖ وَكُذِّبَ مُوسَىٰ فَأَمْلَيْتُ لِلْكَـٰفِرِينَ ثُمَّ أَخَذْتُهُمْ ۖ فَكَيْفَ كَانَ نَكِيرِ",
    translation: {
      en: "",
      ur: "اور مدین کے رہنے والے بھی۔ اور موسیٰ بھی تو جھٹلائے جاچکے ہیں لیکن میں کافروں کو مہلت دیتا رہا پھر ان کو پکڑ لیا۔ تو (دیکھ لو) کہ میرا عذاب کیسا (سخت) تھا",
    },
    words: [
      { id: '22:44:1', arabic: "وَأَصْحَـٰبُ", transliteration: "wa-aṣḥābu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And the inhabitants", ur: "اور the inhabitants" } },
      { id: '22:44:2', arabic: "مَدْيَنَ ۖ", transliteration: "madyana", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Madyan", ur: "(of) Madyan" } },
      { id: '22:44:3', arabic: "وَكُذِّبَ", transliteration: "wakudhiba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Musa was denied", ur: "اور Musa was denied" } },
      { id: '22:44:4', arabic: "مُوسَىٰ", transliteration: "mūsā", pos: ['V'], posLabel: 'V', root: "م و س", meaning: { en: "And Musa was denied", ur: "اور Musa was denied" } },
      { id: '22:44:5', arabic: "فَأَمْلَيْتُ", transliteration: "fa-amlaytu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so I granted respite", ur: "so میں granted respite" } },
      { id: '22:44:6', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the disbelievers", ur: "کو the کافر" } },
      { id: '22:44:7', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '22:44:8', arabic: "أَخَذْتُهُمْ ۖ", transliteration: "akhadhtuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I seized them", ur: "میں seized them" } },
      { id: '22:44:9', arabic: "فَكَيْفَ", transliteration: "fakayfa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and how", ur: "اور how" } },
      { id: '22:44:10', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '22:44:11', arabic: "نَكِيرِ", transliteration: "nakīri", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "My punishment", ur: "My عذاب" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  45: {
    text: "فَكَأَيِّن مِّن قَرْيَةٍ أَهْلَكْنَـٰهَا وَهِىَ ظَالِمَةٌۭ فَهِىَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا وَبِئْرٍۢ مُّعَطَّلَةٍۢ وَقَصْرٍۢ مَّشِيدٍ",
    translation: {
      en: "",
      ur: "اور بہت سی بستیاں ہیں کہ ہم نے ان کو تباہ کر ڈالا کہ وہ نافرمان تھیں۔ سو وہ اپنی چھتوں پر گری پڑی ہیں۔ اور (بہت سے) کنوئیں بےکار اور (بہت سے) محل ویران پڑے ہیں",
    },
    words: [
      { id: '22:45:1', arabic: "فَكَأَيِّن", transliteration: "faka-ayyin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And how many", ur: "اور how many" } },
      { id: '22:45:2', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:45:3', arabic: "قَرْيَةٍ", transliteration: "qaryatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a township", ur: "a township" } },
      { id: '22:45:4', arabic: "أَهْلَكْنَـٰهَا", transliteration: "ahlaknāhā", pos: ['V'], posLabel: 'V', root: "أ ه ل", meaning: { en: "We have destroyed it", ur: "ہم have destroyed it" } },
      { id: '22:45:5', arabic: "وَهِىَ", transliteration: "wahiya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while it", ur: "while it" } },
      { id: '22:45:6', arabic: "ظَالِمَةٌۭ", transliteration: "ẓālimatun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was doing wrong", ur: "was doing wrong" } },
      { id: '22:45:7', arabic: "فَهِىَ", transliteration: "fahiya", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so it", ur: "so it" } },
      { id: '22:45:8', arabic: "خَاوِيَةٌ", transliteration: "khāwiyatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fell", ur: "fell" } },
      { id: '22:45:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '22:45:10', arabic: "عُرُوشِهَا", transliteration: "ʿurūshihā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its roofs", ur: "its roofs" } },
      { id: '22:45:11', arabic: "وَبِئْرٍۢ", transliteration: "wabi'rin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and well", ur: "اور well" } },
      { id: '22:45:12', arabic: "مُّعَطَّلَةٍۢ", transliteration: "muʿaṭṭalatin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "abandoned", ur: "abandoned" } },
      { id: '22:45:13', arabic: "وَقَصْرٍۢ", transliteration: "waqaṣrin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and castle", ur: "اور castle" } },
      { id: '22:45:14', arabic: "مَّشِيدٍ", transliteration: "mashīdin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lofty", ur: "lofty" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  46: {
    text: "أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌۭ يَعْقِلُونَ بِهَآ أَوْ ءَاذَانٌۭ يَسْمَعُونَ بِهَا ۖ فَإِنَّهَا لَا تَعْمَى ٱلْأَبْصَـٰرُ وَلَـٰكِن تَعْمَى ٱلْقُلُوبُ ٱلَّتِى فِى ٱلصُّدُورِ",
    translation: {
      en: "",
      ur: "کیا ان لوگوں نے ملک میں سیر نہیں کی تاکہ ان کے دل (ایسے) ہوتے کہ ان سے سمجھ سکتے۔ اور کان (ایسے) ہوتے کہ ان سے سن سکتے۔ بات یہ ہے کہ آنکھیں اندھی نہیں ہوتیں بلکہ دل جو سینوں میں ہیں (وہ) اندھے ہوتے ہیں",
    },
    words: [
      { id: '22:46:1', arabic: "أَفَلَمْ", transliteration: "afalam", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "So have not", ur: "So have نہیں" } },
      { id: '22:46:2', arabic: "يَسِيرُوا۟", transliteration: "yasīrū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they traveled", ur: "وہ لوگ traveled" } },
      { id: '22:46:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '22:46:4', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the land", ur: "the land" } },
      { id: '22:46:5', arabic: "فَتَكُونَ", transliteration: "fatakūna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and is", ur: "اور is" } },
      { id: '22:46:6', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '22:46:7', arabic: "قُلُوبٌۭ", transliteration: "qulūbun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "hearts", ur: "hearts" } },
      { id: '22:46:8', arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) reason", ur: "(کو) reason" } },
      { id: '22:46:9', arabic: "بِهَآ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '22:46:10', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '22:46:11', arabic: "ءَاذَانٌۭ", transliteration: "ādhānun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "ears", ur: "ears" } },
      { id: '22:46:12', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) hear", ur: "(کو) سننا" } },
      { id: '22:46:13', arabic: "بِهَا ۖ", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '22:46:14', arabic: "فَإِنَّهَا", transliteration: "fa-innahā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "For indeed, [it]", ur: "For بیشک, [it]" } },
      { id: '22:46:15', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '22:46:16', arabic: "تَعْمَى", transliteration: "taʿmā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) blinded", ur: "(are) blinded" } },
      { id: '22:46:17', arabic: "ٱلْأَبْصَـٰرُ", transliteration: "l-abṣāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the eyes", ur: "the eyes" } },
      { id: '22:46:18', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '22:46:19', arabic: "تَعْمَى", transliteration: "taʿmā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(are) blinded", ur: "(are) blinded" } },
      { id: '22:46:20', arabic: "ٱلْقُلُوبُ", transliteration: "l-qulūbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hearts", ur: "the hearts" } },
      { id: '22:46:21', arabic: "ٱلَّتِى", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '22:46:22', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) in", ur: "(are) میں" } },
      { id: '22:46:23', arabic: "ٱلصُّدُورِ", transliteration: "l-ṣudūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the breasts", ur: "the breasts" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'نفی + فعل' },
        { from: 16, to: 17, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'جار + مجرور' }
      ],
    },
  },
  47: {
    text: "وَيَسْتَعْجِلُونَكَ بِٱلْعَذَابِ وَلَن يُخْلِفَ ٱللَّهُ وَعْدَهُۥ ۚ وَإِنَّ يَوْمًا عِندَ رَبِّكَ كَأَلْفِ سَنَةٍۢ مِّمَّا تَعُدُّونَ",
    translation: {
      en: "",
      ur: "اور (یہ لوگ) تم سے عذاب کے لئے جلدی کر رہے ہیں اور خدا اپنا وعدہ ہرگز خلاف نہیں کرے گا۔ اور بےشک تمہارے پروردگار کے نزدیک ایک روز تمہارے حساب کے رو سے ہزار برس کے برابر ہے",
    },
    words: [
      { id: '22:47:1', arabic: "وَيَسْتَعْجِلُونَكَ", transliteration: "wayastaʿjilūnaka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they ask you to hasten", ur: "اور وہ لوگ ask تم کو hasten" } },
      { id: '22:47:2', arabic: "بِٱلْعَذَابِ", transliteration: "bil-ʿadhābi", pos: ['P+N'], posLabel: 'P+N', root: "ع ذ ب", meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '22:47:3', arabic: "وَلَن", transliteration: "walan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But never will", ur: "لیکن never will" } },
      { id: '22:47:4', arabic: "يُخْلِفَ", transliteration: "yukh'lifa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fail/violate", ur: "fail/violate" } },
      { id: '22:47:5', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:47:6', arabic: "وَعْدَهُۥ ۚ", transliteration: "waʿdahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(in) His Promise", ur: "(میں) His Promise" } },
      { id: '22:47:7', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '22:47:8', arabic: "يَوْمًا", transliteration: "yawman", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a day", ur: "a دن" } },
      { id: '22:47:9', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '22:47:10', arabic: "رَبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '22:47:11', arabic: "كَأَلْفِ", transliteration: "ka-alfi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) like a thousand", ur: "(is) like a thousand" } },
      { id: '22:47:12', arabic: "سَنَةٍۢ", transliteration: "sanatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "year(s)", ur: "year(s)" } },
      { id: '22:47:13', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '22:47:14', arabic: "تَعُدُّونَ", transliteration: "taʿuddūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you count", ur: "تم count" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  48: {
    text: "وَكَأَيِّن مِّن قَرْيَةٍ أَمْلَيْتُ لَهَا وَهِىَ ظَالِمَةٌۭ ثُمَّ أَخَذْتُهَا وَإِلَىَّ ٱلْمَصِيرُ",
    translation: {
      en: "",
      ur: "اور بہت سی بستیاں ہیں کہ میں ان کو مہلت دیتا رہا اور وہ نافرمان تھیں۔ پھر میں نے ان کو پکڑ لیا۔ اور میری طرف ہی لوٹ کر آنا ہے",
    },
    words: [
      { id: '22:48:1', arabic: "وَكَأَيِّن", transliteration: "waka-ayyin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And how many", ur: "اور how many" } },
      { id: '22:48:2', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '22:48:3', arabic: "قَرْيَةٍ", transliteration: "qaryatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a township", ur: "a township" } },
      { id: '22:48:4', arabic: "أَمْلَيْتُ", transliteration: "amlaytu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I gave respite", ur: "میں gave respite" } },
      { id: '22:48:5', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '22:48:6', arabic: "وَهِىَ", transliteration: "wahiya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while it", ur: "while it" } },
      { id: '22:48:7', arabic: "ظَالِمَةٌۭ", transliteration: "ẓālimatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) doing wrong", ur: "(was) doing wrong" } },
      { id: '22:48:8', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '22:48:9', arabic: "أَخَذْتُهَا", transliteration: "akhadhtuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I seized it", ur: "میں seized it" } },
      { id: '22:48:10', arabic: "وَإِلَىَّ", transliteration: "wa-ilayya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to Me", ur: "اور کو Me" } },
      { id: '22:48:11', arabic: "ٱلْمَصِيرُ", transliteration: "l-maṣīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the destination", ur: "(is) the destination" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  49: {
    text: "قُلْ يَـٰٓأَيُّهَا ٱلنَّاسُ إِنَّمَآ أَنَا۠ لَكُمْ نَذِيرٌۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "(اے پیغمبر) کہہ دو کہ لوگو! میں تم کو کھلم کھلا نصیحت کرنے والا ہوں",
    },
    words: [
      { id: '22:49:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '22:49:2', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '22:49:3', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '22:49:4', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '22:49:5', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am", ur: "میں am" } },
      { id: '22:49:6', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '22:49:7', arabic: "نَذِيرٌۭ", transliteration: "nadhīrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a warner", ur: "a warner" } },
      { id: '22:49:8', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  50: {
    text: "فَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ لَهُم مَّغْفِرَةٌۭ وَرِزْقٌۭ كَرِيمٌۭ",
    translation: {
      en: "",
      ur: "تو جو لوگ ایمان لائے اور نیک کام کئے ان کے لئے بخشش اور آبرو کی روزی ہے",
    },
    words: [
      { id: '22:50:1', arabic: "فَٱلَّذِينَ", transliteration: "fa-alladhīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So those who", ur: "So جو لوگ" } },
      { id: '22:50:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '22:50:3', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and do", ur: "اور do" } },
      { id: '22:50:4', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "righteous deeds ", ur: "نیک deeds " } },
      { id: '22:50:5', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '22:50:6', arabic: "مَّغْفِرَةٌۭ", transliteration: "maghfiratun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) forgiveness", ur: "(is) مغفرت" } },
      { id: '22:50:7', arabic: "وَرِزْقٌۭ", transliteration: "wariz'qun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a provision", ur: "اور a provision" } },
      { id: '22:50:8', arabic: "كَرِيمٌۭ", transliteration: "karīmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "noble", ur: "noble" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  51: {
    text: "وَٱلَّذِينَ سَعَوْا۟ فِىٓ ءَايَـٰتِنَا مُعَـٰجِزِينَ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلْجَحِيمِ",
    translation: {
      en: "",
      ur: "اور جن لوگوں نے ہماری آیتوں میں (اپنے زعم باطل میں) ہمیں عاجز کرنے کے لئے سعی کی، وہ اہل دوزخ ہیں",
    },
    words: [
      { id: '22:51:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '22:51:2', arabic: "سَعَوْا۟", transliteration: "saʿaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "strove", ur: "strove" } },
      { id: '22:51:3', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against", ur: "against" } },
      { id: '22:51:4', arabic: "ءَايَـٰتِنَا", transliteration: "āyātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '22:51:5', arabic: "مُعَـٰجِزِينَ", transliteration: "muʿājizīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) cause failure", ur: "(کو) cause failure" } },
      { id: '22:51:6', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those", ur: "those" } },
      { id: '22:51:7', arabic: "أَصْحَـٰبُ", transliteration: "aṣḥābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are the) companions", ur: "(are the) companions" } },
      { id: '22:51:8', arabic: "ٱلْجَحِيمِ", transliteration: "l-jaḥīmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Hellfire", ur: "(of) the جہنم" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  52: {
    text: "وَمَآ أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍۢ وَلَا نَبِىٍّ إِلَّآ إِذَا تَمَنَّىٰٓ أَلْقَى ٱلشَّيْطَـٰنُ فِىٓ أُمْنِيَّتِهِۦ فَيَنسَخُ ٱللَّهُ مَا يُلْقِى ٱلشَّيْطَـٰنُ ثُمَّ يُحْكِمُ ٱللَّهُ ءَايَـٰتِهِۦ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌۭ",
    translation: {
      en: "",
      ur: "اور ہم نے تم سے پہلے کوئی رسول اور نبی نہیں بھیجا مگر (اس کا یہ حال تھا کہ) جب وہ کوئی آرزو کرتا تھا تو شیطان اس کی آرزو میں (وسوسہ) ڈال دیتا تھا۔ تو جو (وسوسہ) شیطان ڈالتا ہے خدا اس کو دور کردیتا ہے۔ پھر خدا اپنی آیتوں کو مضبوط کردیتا ہے۔ اور خدا علم والا اور حکمت والا ہے",
    },
    words: [
      { id: '22:52:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '22:52:2', arabic: "أَرْسَلْنَا", transliteration: "arsalnā", pos: ['V'], posLabel: 'V', root: "ر س ل", meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '22:52:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '22:52:4', arabic: "قَبْلِكَ", transliteration: "qablika", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before you", ur: "پہلے تم" } },
      { id: '22:52:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '22:52:6', arabic: "رَّسُولٍۢ", transliteration: "rasūlin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messenger", ur: "رسول" } },
      { id: '22:52:7', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '22:52:8', arabic: "نَبِىٍّ", transliteration: "nabiyyin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a Prophet", ur: "a نبی" } },
      { id: '22:52:9', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '22:52:10', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '22:52:11', arabic: "تَمَنَّىٰٓ", transliteration: "tamannā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he recited", ur: "وہ recited" } },
      { id: '22:52:12', arabic: "أَلْقَى", transliteration: "alqā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "threw", ur: "threw" } },
      { id: '22:52:13', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '22:52:14', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '22:52:15', arabic: "أُمْنِيَّتِهِۦ", transliteration: "um'niyyatihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his recitation", ur: "his recitation" } },
      { id: '22:52:16', arabic: "فَيَنسَخُ", transliteration: "fayansakhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But Allah abolishes", ur: "لیکن اللہ abolishes" } },
      { id: '22:52:17', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "But Allah abolishes", ur: "لیکن اللہ abolishes" } },
      { id: '22:52:18', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:52:19', arabic: "يُلْقِى", transliteration: "yul'qī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "throws", ur: "throws" } },
      { id: '22:52:20', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '22:52:21', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '22:52:22', arabic: "يُحْكِمُ", transliteration: "yuḥ'kimu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah will establish", ur: "اللہ will establish" } },
      { id: '22:52:23', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah will establish", ur: "اللہ will establish" } },
      { id: '22:52:24', arabic: "ءَايَـٰتِهِۦ ۗ", transliteration: "āyātihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His Verses", ur: "His Verses" } },
      { id: '22:52:25', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '22:52:26', arabic: "عَلِيمٌ", transliteration: "ʿalīmun", pos: ['ADJ'], posLabel: 'ADJ', root: "ع ل م", meaning: { en: "(is) All-Knower", ur: "(is) سب-Knower" } },
      { id: '22:52:27', arabic: "حَكِيمٌۭ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'موصول + صلة' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'فعل + فاعل' }
      ],
    },
  },
  53: {
    text: "لِّيَجْعَلَ مَا يُلْقِى ٱلشَّيْطَـٰنُ فِتْنَةًۭ لِّلَّذِينَ فِى قُلُوبِهِم مَّرَضٌۭ وَٱلْقَاسِيَةِ قُلُوبُهُمْ ۗ وَإِنَّ ٱلظَّـٰلِمِينَ لَفِى شِقَاقٍۭ بَعِيدٍۢ",
    translation: {
      en: "",
      ur: "غرض (اس سے) یہ ہے کہ جو (وسوسہ) شیطان ڈالتا ہے اس کو ان لوگوں کے لئے جن کے دلوں میں بیماری ہے اور جن کے دل سخت ہیں ذریعہ آزمائش ٹھہرائے۔ بےشک ظالم پرلے درجے کی مخالفت میں ہیں",
    },
    words: [
      { id: '22:53:1', arabic: "لِّيَجْعَلَ", transliteration: "liyajʿala", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "That He may make", ur: "وہ وہ may make" } },
      { id: '22:53:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:53:3', arabic: "يُلْقِى", transliteration: "yul'qī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the Shaitaan throws", ur: "the Shaitaan throws" } },
      { id: '22:53:4', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan throws", ur: "the Shaitaan throws" } },
      { id: '22:53:5', arabic: "فِتْنَةًۭ", transliteration: "fit'natan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a trial", ur: "a trial" } },
      { id: '22:53:6', arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for those", ur: "for those" } },
      { id: '22:53:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '22:53:8', arabic: "قُلُوبِهِم", transliteration: "qulūbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '22:53:9', arabic: "مَّرَضٌۭ", transliteration: "maraḍun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a disease", ur: "(is) a disease" } },
      { id: '22:53:10', arabic: "وَٱلْقَاسِيَةِ", transliteration: "wal-qāsiyati", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (are) hardened", ur: "اور (are) hardened" } },
      { id: '22:53:11', arabic: "قُلُوبُهُمْ ۗ", transliteration: "qulūbuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '22:53:12', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '22:53:13', arabic: "ٱلظَّـٰلِمِينَ", transliteration: "l-ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the wrongdoers", ur: "the wrongdoers" } },
      { id: '22:53:14', arabic: "لَفِى", transliteration: "lafī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) surely, in", ur: "(are) یقیناً, میں" } },
      { id: '22:53:15', arabic: "شِقَاقٍۭ", transliteration: "shiqāqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "schism", ur: "schism" } },
      { id: '22:53:16', arabic: "بَعِيدٍۢ", transliteration: "baʿīdin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "far", ur: "far" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    text: "وَلِيَعْلَمَ ٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّكَ فَيُؤْمِنُوا۟ بِهِۦ فَتُخْبِتَ لَهُۥ قُلُوبُهُمْ ۗ وَإِنَّ ٱللَّهَ لَهَادِ ٱلَّذِينَ ءَامَنُوٓا۟ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
    translation: {
      en: "",
      ur: "اور یہ بھی غرض ہے کہ جن لوگوں کو علم عطا ہوا ہے وہ جان لیں کہ وہ (یعنی وحی) تمہارے پروردگار کی طرف سے حق ہے تو وہ اس پر ایمان لائیں اور ان کے دل خدا کے آگے عاجزی کریں۔ اور جو لوگ ایمان لائے ہیں خدا ان کو سیدھے رستے کی طرف ہدایت کرتا ہے",
    },
    words: [
      { id: '22:54:1', arabic: "وَلِيَعْلَمَ", transliteration: "waliyaʿlama", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that may know", ur: "اور وہ may جاننا" } },
      { id: '22:54:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '22:54:3', arabic: "أُوتُوا۟", transliteration: "ūtū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "have been given", ur: "have been given" } },
      { id: '22:54:4', arabic: "ٱلْعِلْمَ", transliteration: "l-ʿil'ma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the knowledge", ur: "the knowledge" } },
      { id: '22:54:5', arabic: "أَنَّهُ", transliteration: "annahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that it", ur: "وہ it" } },
      { id: '22:54:6', arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the truth", ur: "(is) the سچ" } },
      { id: '22:54:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:54:8', arabic: "رَّبِّكَ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '22:54:9', arabic: "فَيُؤْمِنُوا۟", transliteration: "fayu'minū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and they believe", ur: "اور وہ لوگ ایمان لانا" } },
      { id: '22:54:10', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '22:54:11', arabic: "فَتُخْبِتَ", transliteration: "fatukh'bita", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and may humbly submit", ur: "اور may humbly submit" } },
      { id: '22:54:12', arabic: "لَهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '22:54:13', arabic: "قُلُوبُهُمْ ۗ", transliteration: "qulūbuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '22:54:14', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '22:54:15', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:54:16', arabic: "لَهَادِ", transliteration: "lahādi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely (the) Guide", ur: "(is) یقیناً (the) Guide" } },
      { id: '22:54:17', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '22:54:18', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '22:54:19', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '22:54:20', arabic: "صِرَٰطٍۢ", transliteration: "ṣirāṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Path", ur: "a راستہ" } },
      { id: '22:54:21', arabic: "مُّسْتَقِيمٍۢ", transliteration: "mus'taqīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Straight", ur: "سیدھا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  55: {
    text: "وَلَا يَزَالُ ٱلَّذِينَ كَفَرُوا۟ فِى مِرْيَةٍۢ مِّنْهُ حَتَّىٰ تَأْتِيَهُمُ ٱلسَّاعَةُ بَغْتَةً أَوْ يَأْتِيَهُمْ عَذَابُ يَوْمٍ عَقِيمٍ",
    translation: {
      en: "",
      ur: "اور کافر لوگ ہمیشہ اس سے شک میں رہیں گے یہاں تک کہ قیامت ان پر ناگہاں آجائے یا ایک نامبارک دن کا عذاب ان پر واقع ہو",
    },
    words: [
      { id: '22:55:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '22:55:2', arabic: "يَزَالُ", transliteration: "yazālu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will cease", ur: "will cease" } },
      { id: '22:55:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '22:55:4', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '22:55:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(to be) in", ur: "(کو be) میں" } },
      { id: '22:55:6', arabic: "مِرْيَةٍۢ", transliteration: "mir'yatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "doubt", ur: "doubt" } },
      { id: '22:55:7', arabic: "مِّنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '22:55:8', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '22:55:9', arabic: "تَأْتِيَهُمُ", transliteration: "tatiyahumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '22:55:10', arabic: "ٱلسَّاعَةُ", transliteration: "l-sāʿatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hour", ur: "the Hour" } },
      { id: '22:55:11', arabic: "بَغْتَةً", transliteration: "baghtatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "suddenly", ur: "suddenly" } },
      { id: '22:55:12', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '22:55:13', arabic: "يَأْتِيَهُمْ", transliteration: "yatiyahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes to them", ur: "comes کو them" } },
      { id: '22:55:14', arabic: "عَذَابُ", transliteration: "ʿadhābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '22:55:15', arabic: "يَوْمٍ", transliteration: "yawmin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(of) a Day", ur: "(of) a دن" } },
      { id: '22:55:16', arabic: "عَقِيمٍ", transliteration: "ʿaqīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "barren", ur: "barren" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' }
      ],
    },
  },
  56: {
    text: "ٱلْمُلْكُ يَوْمَئِذٍۢ لِّلَّهِ يَحْكُمُ بَيْنَهُمْ ۚ فَٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ فِى جَنَّـٰتِ ٱلنَّعِيمِ",
    translation: {
      en: "",
      ur: "اس روز بادشاہی خدا ہی کی ہوگی۔ اور ان میں فیصلہ کردے گا تو جو لوگ ایمان لائے اور عمل نیک کرتے رہے وہ نعمت کے باغوں میں ہوں گے",
    },
    words: [
      { id: '22:56:1', arabic: "ٱلْمُلْكُ", transliteration: "al-mul'ku", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "The Sovereignty", ur: "The Sovereignty" } },
      { id: '22:56:2', arabic: "يَوْمَئِذٍۢ", transliteration: "yawma-idhin", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on) that Day", ur: "(پر) وہ دن" } },
      { id: '22:56:3', arabic: "لِّلَّهِ", transliteration: "lillahi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) for Allah", ur: "(will be) for اللہ" } },
      { id: '22:56:4', arabic: "يَحْكُمُ", transliteration: "yaḥkumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will judge", ur: "وہ will judge" } },
      { id: '22:56:5', arabic: "بَيْنَهُمْ ۚ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '22:56:6', arabic: "فَٱلَّذِينَ", transliteration: "fa-alladhīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So those who", ur: "So جو لوگ" } },
      { id: '22:56:7', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '22:56:8', arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع م ل", meaning: { en: "and did", ur: "اور did" } },
      { id: '22:56:9', arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "righteous deeds", ur: "نیک deeds" } },
      { id: '22:56:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(will be) in", ur: "(will be) میں" } },
      { id: '22:56:11', arabic: "جَنَّـٰتِ", transliteration: "jannāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Gardens", ur: "باغات" } },
      { id: '22:56:12', arabic: "ٱلنَّعِيمِ", transliteration: "l-naʿīmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Delight", ur: "(of) Delight" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  57: {
    text: "وَٱلَّذِينَ كَفَرُوا۟ وَكَذَّبُوا۟ بِـَٔايَـٰتِنَا فَأُو۟لَـٰٓئِكَ لَهُمْ عَذَابٌۭ مُّهِينٌۭ",
    translation: {
      en: "",
      ur: "اور جو کافر ہوئے اور ہماری آیتوں کو جھٹلاتے رہے ان کے لئے ذلیل کرنے والا عذاب ہوگا",
    },
    words: [
      { id: '22:57:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '22:57:2', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '22:57:3', arabic: "وَكَذَّبُوا۟", transliteration: "wakadhabū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and denied", ur: "اور denied" } },
      { id: '22:57:4', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '22:57:5', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then those", ur: "پھر those" } },
      { id: '22:57:6', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '22:57:7', arabic: "عَذَابٌۭ", transliteration: "ʿadhābun", pos: ['V'], posLabel: 'V', root: "ع ذ ب", meaning: { en: "(will be) a punishment", ur: "(will be) a عذاب" } },
      { id: '22:57:8', arabic: "مُّهِينٌۭ", transliteration: "muhīnun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humiliating", ur: "humiliating" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  58: {
    text: "وَٱلَّذِينَ هَاجَرُوا۟ فِى سَبِيلِ ٱللَّهِ ثُمَّ قُتِلُوٓا۟ أَوْ مَاتُوا۟ لَيَرْزُقَنَّهُمُ ٱللَّهُ رِزْقًا حَسَنًۭا ۚ وَإِنَّ ٱللَّهَ لَهُوَ خَيْرُ ٱلرَّٰزِقِينَ",
    translation: {
      en: "",
      ur: "اور جن لوگوں نے خدا کی راہ میں ہجرت کی پھر مارے گئے یا مر گئے۔ ان کو خدا اچھی روزی دے گا۔ اور بےشک خدا سب سے بہتر رزق دینے والا ہے",
    },
    words: [
      { id: '22:58:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '22:58:2', arabic: "هَاجَرُوا۟", transliteration: "hājarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "emigrated", ur: "emigrated" } },
      { id: '22:58:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '22:58:4', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '22:58:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '22:58:6', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '22:58:7', arabic: "قُتِلُوٓا۟", transliteration: "qutilū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "were killed", ur: "were killed" } },
      { id: '22:58:8', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '22:58:9', arabic: "مَاتُوا۟", transliteration: "mātū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "died", ur: "died" } },
      { id: '22:58:10', arabic: "لَيَرْزُقَنَّهُمُ", transliteration: "layarzuqannahumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, Allah will provide them", ur: "یقیناً, اللہ will provide them" } },
      { id: '22:58:11', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, Allah will provide them", ur: "یقیناً, اللہ will provide them" } },
      { id: '22:58:12', arabic: "رِزْقًا", transliteration: "riz'qan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a provision", ur: "a provision" } },
      { id: '22:58:13', arabic: "حَسَنًۭا ۚ", transliteration: "ḥasanan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '22:58:14', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '22:58:15', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:58:16', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, He", ur: "یقیناً, وہ" } },
      { id: '22:58:17', arabic: "خَيْرُ", transliteration: "khayru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) Best", ur: "(is the) Best" } },
      { id: '22:58:18', arabic: "ٱلرَّٰزِقِينَ", transliteration: "l-rāziqīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Providers", ur: "(of) the Providers" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  59: {
    text: "لَيُدْخِلَنَّهُم مُّدْخَلًۭا يَرْضَوْنَهُۥ ۗ وَإِنَّ ٱللَّهَ لَعَلِيمٌ حَلِيمٌۭ",
    translation: {
      en: "",
      ur: "وہ ان کو ایسے مقام میں داخل کرے گا جسے وہ پسند کریں گے۔ اور خدا تو جاننے والا (اور) بردبار ہے",
    },
    words: [
      { id: '22:59:1', arabic: "لَيُدْخِلَنَّهُم", transliteration: "layud'khilannahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Surely, He will admit them", ur: "یقیناً, وہ will admit them" } },
      { id: '22:59:2', arabic: "مُّدْخَلًۭا", transliteration: "mud'khalan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) an entrance", ur: "(کو) an entrance" } },
      { id: '22:59:3', arabic: "يَرْضَوْنَهُۥ ۗ", transliteration: "yarḍawnahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be pleased (with) it", ur: "وہ لوگ will be pleased (ساتھ) it" } },
      { id: '22:59:4', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '22:59:5', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:59:6', arabic: "لَعَلِيمٌ", transliteration: "laʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "surely, (is) All-Knowing", ur: "یقیناً, (is) سب جاننے والا" } },
      { id: '22:59:7', arabic: "حَلِيمٌۭ", transliteration: "ḥalīmun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Most Forbearing", ur: "Most Forbearing" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  60: {
    text: "۞ ذَٰلِكَ وَمَنْ عَاقَبَ بِمِثْلِ مَا عُوقِبَ بِهِۦ ثُمَّ بُغِىَ عَلَيْهِ لَيَنصُرَنَّهُ ٱللَّهُ ۗ إِنَّ ٱللَّهَ لَعَفُوٌّ غَفُورٌۭ",
    translation: {
      en: "",
      ur: "یہ (بات خدا کے ہاں ٹھہر چکی ہے) اور جو شخص (کسی کو) اتنی ہی ایذا دے جتنی ایذا اس کو دی گئی پھر اس شخص پر زیادتی کی جائے تو خدا اس کی مدد کرے گا۔ بےشک خدا معاف کرنے والا اور بخشنے والا ہے",
    },
    words: [
      { id: '22:60:1', arabic: "۞ ذَٰلِكَ", transliteration: "dhālika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '22:60:2', arabic: "وَمَنْ", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '22:60:3', arabic: "عَاقَبَ", transliteration: "ʿāqaba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has retaliated", ur: "has retaliated" } },
      { id: '22:60:4', arabic: "بِمِثْلِ", transliteration: "bimith'li", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the like", ur: "ساتھ the like" } },
      { id: '22:60:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(of) that", ur: "(of) وہ" } },
      { id: '22:60:6', arabic: "عُوقِبَ", transliteration: "ʿūqiba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he was made to suffer", ur: "وہ was made کو suffer" } },
      { id: '22:60:7', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by it", ur: "by it" } },
      { id: '22:60:8', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '22:60:9', arabic: "بُغِىَ", transliteration: "bughiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he was oppressed", ur: "وہ was oppressed" } },
      { id: '22:60:10', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[on him]", ur: "[پر him]" } },
      { id: '22:60:11', arabic: "لَيَنصُرَنَّهُ", transliteration: "layanṣurannahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah will surely help him", ur: "اللہ will یقیناً help him" } },
      { id: '22:60:12', arabic: "ٱللَّهُ ۗ", transliteration: "l-lahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Allah will surely help him", ur: "اللہ will یقیناً help him" } },
      { id: '22:60:13', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:60:14', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:60:15', arabic: "لَعَفُوٌّ", transliteration: "laʿafuwwun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) surely Oft-Pardoning", ur: "(is) یقیناً Oft-Pardoning" } },
      { id: '22:60:16', arabic: "غَفُورٌۭ", transliteration: "ghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  61: {
    text: "ذَٰلِكَ بِأَنَّ ٱللَّهَ يُولِجُ ٱلَّيْلَ فِى ٱلنَّهَارِ وَيُولِجُ ٱلنَّهَارَ فِى ٱلَّيْلِ وَأَنَّ ٱللَّهَ سَمِيعٌۢ بَصِيرٌۭ",
    translation: {
      en: "",
      ur: "یہ اس لئے کہ خدا رات کو دن میں داخل کردیتا ہے اور دن کو رات میں داخل کرتا ہے۔ اور خدا تو سننے والا دیکھنے والا ہے",
    },
    words: [
      { id: '22:61:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '22:61:2', arabic: "بِأَنَّ", transliteration: "bi-anna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) because", ur: "(is) because" } },
      { id: '22:61:3', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:61:4', arabic: "يُولِجُ", transliteration: "yūliju", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "causes to enter", ur: "causes کو enter" } },
      { id: '22:61:5', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '22:61:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in (to)", ur: "میں (کو)" } },
      { id: '22:61:7', arabic: "ٱلنَّهَارِ", transliteration: "l-nahāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the day", ur: "the دن" } },
      { id: '22:61:8', arabic: "وَيُولِجُ", transliteration: "wayūliju", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and causes to enter", ur: "اور causes کو enter" } },
      { id: '22:61:9', arabic: "ٱلنَّهَارَ", transliteration: "l-nahāra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the day", ur: "the دن" } },
      { id: '22:61:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in (to)", ur: "میں (کو)" } },
      { id: '22:61:11', arabic: "ٱلَّيْلِ", transliteration: "al-layli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '22:61:12', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '22:61:13', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:61:14', arabic: "سَمِيعٌۢ", transliteration: "samīʿun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Hearer", ur: "(is) سب-Hearer" } },
      { id: '22:61:15', arabic: "بَصِيرٌۭ", transliteration: "baṣīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Seer", ur: "سب-Seer" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'موصوف + صفت' }
      ],
    },
  },
  62: {
    text: "ذَٰلِكَ بِأَنَّ ٱللَّهَ هُوَ ٱلْحَقُّ وَأَنَّ مَا يَدْعُونَ مِن دُونِهِۦ هُوَ ٱلْبَـٰطِلُ وَأَنَّ ٱللَّهَ هُوَ ٱلْعَلِىُّ ٱلْكَبِيرُ",
    translation: {
      en: "",
      ur: "یہ اس لئے کہ خدا ہی برحق ہے اور جس چیز کو (کافر) خدا کے سوا پکارتے ہیں وہ باطل ہے اور اس لئے خدا رفیع الشان اور بڑا ہے",
    },
    words: [
      { id: '22:62:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That (is)", ur: "وہ (is)" } },
      { id: '22:62:2', arabic: "بِأَنَّ", transliteration: "bi-anna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '22:62:3', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:62:4', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '22:62:5', arabic: "ٱلْحَقُّ", transliteration: "l-ḥaqu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Truth", ur: "(is) the سچ" } },
      { id: '22:62:6', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '22:62:7', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:62:8', arabic: "يَدْعُونَ", transliteration: "yadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they invoke", ur: "وہ لوگ invoke" } },
      { id: '22:62:9', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Him", ur: "besides Him" } },
      { id: '22:62:10', arabic: "دُونِهِۦ", transliteration: "dūnihi", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Him", ur: "besides Him" } },
      { id: '22:62:11', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "it", ur: "it" } },
      { id: '22:62:12', arabic: "ٱلْبَـٰطِلُ", transliteration: "l-bāṭilu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the falsehood", ur: "(is) the falsehood" } },
      { id: '22:62:13', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that", ur: "اور وہ" } },
      { id: '22:62:14', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:62:15', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '22:62:16', arabic: "ٱلْعَلِىُّ", transliteration: "l-ʿaliyu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the Most High", ur: "(is) the Most High" } },
      { id: '22:62:17', arabic: "ٱلْكَبِيرُ", transliteration: "l-kabīru", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Great", ur: "the Most Great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  63: {
    text: "أَلَمْ تَرَ أَنَّ ٱللَّهَ أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَتُصْبِحُ ٱلْأَرْضُ مُخْضَرَّةً ۗ إِنَّ ٱللَّهَ لَطِيفٌ خَبِيرٌۭ",
    translation: {
      en: "",
      ur: "کیا تم نہیں دیکھتے کہ خدا آسمان سے مینہ برساتا ہے تو زمین سرسبز ہوجاتی ہے۔ بےشک خدا باریک بین اور خبردار ہے",
    },
    words: [
      { id: '22:63:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '22:63:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '22:63:3', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:63:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:63:5', arabic: "أَنزَلَ", transliteration: "anzala", pos: ['N'], posLabel: 'N', root: "ن ز ل", meaning: { en: "sends down", ur: "sends down" } },
      { id: '22:63:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:63:7', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '22:63:8', arabic: "مَآءًۭ", transliteration: "māan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "water", ur: "پانی" } },
      { id: '22:63:9', arabic: "فَتُصْبِحُ", transliteration: "fatuṣ'biḥu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then becomes", ur: "پھر becomes" } },
      { id: '22:63:10', arabic: "ٱلْأَرْضُ", transliteration: "l-arḍu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earth", ur: "زمین" } },
      { id: '22:63:11', arabic: "مُخْضَرَّةً ۗ", transliteration: "mukh'ḍarratan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "green", ur: "green" } },
      { id: '22:63:12', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:63:13', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:63:14', arabic: "لَطِيفٌ", transliteration: "laṭīfun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely Subtle", ur: "(is) یقیناً Subtle" } },
      { id: '22:63:15', arabic: "خَبِيرٌۭ", transliteration: "khabīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Aware", ur: "سب-Aware" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'موصوف + صفت' }
      ],
    },
  },
  64: {
    text: "لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَإِنَّ ٱللَّهَ لَهُوَ ٱلْغَنِىُّ ٱلْحَمِيدُ",
    translation: {
      en: "",
      ur: "جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے اسی کا ہے۔ اور بےشک خدا بےنیاز اور قابل ستائش ہے۔",
    },
    words: [
      { id: '22:64:1', arabic: "لَّهُۥ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For Him", ur: "For Him" } },
      { id: '22:64:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(is) whatever", ur: "(is) whatever" } },
      { id: '22:64:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '22:64:4', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '22:64:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whatever", ur: "اور whatever" } },
      { id: '22:64:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '22:64:7', arabic: "ٱلْأَرْضِ ۗ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '22:64:8', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '22:64:9', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:64:10', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, He", ur: "یقیناً, وہ" } },
      { id: '22:64:11', arabic: "ٱلْغَنِىُّ", transliteration: "l-ghaniyu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) Free of need", ur: "(is) Free of need" } },
      { id: '22:64:12', arabic: "ٱلْحَمِيدُ", transliteration: "l-ḥamīdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Praiseworthy", ur: "the Praiseworthy" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  65: {
    text: "أَلَمْ تَرَ أَنَّ ٱللَّهَ سَخَّرَ لَكُم مَّا فِى ٱلْأَرْضِ وَٱلْفُلْكَ تَجْرِى فِى ٱلْبَحْرِ بِأَمْرِهِۦ وَيُمْسِكُ ٱلسَّمَآءَ أَن تَقَعَ عَلَى ٱلْأَرْضِ إِلَّا بِإِذْنِهِۦٓ ۗ إِنَّ ٱللَّهَ بِٱلنَّاسِ لَرَءُوفٌۭ رَّحِيمٌۭ",
    translation: {
      en: "",
      ur: "کیا تم نہیں دیکھتے کہ جتنی چیزیں زمین میں ہیں (سب) خدا نے تمہارے زیرفرمان کر رکھی ہیں اور کشتیاں (بھی) جو اسی کے حکم سے دریا میں چلتی ہیں۔ اور وہ آسمان کو تھامے رہتا ہے کہ زمین پر (نہ) گڑ پڑے مگر اس کے حکم سے۔ بےشک خدا لوگوں پر نہایت شفقت کرنے والا مہربان ہے",
    },
    words: [
      { id: '22:65:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '22:65:2', arabic: "تَرَ", transliteration: "tara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '22:65:3', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:65:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:65:5', arabic: "سَخَّرَ", transliteration: "sakhara", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(has) subjected", ur: "(has) subjected" } },
      { id: '22:65:6', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '22:65:7', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:65:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '22:65:9', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '22:65:10', arabic: "وَٱلْفُلْكَ", transliteration: "wal-ful'ka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the ships", ur: "اور the ships" } },
      { id: '22:65:11', arabic: "تَجْرِى", transliteration: "tajrī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "that sail", ur: "وہ sail" } },
      { id: '22:65:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "through", ur: "through" } },
      { id: '22:65:13', arabic: "ٱلْبَحْرِ", transliteration: "l-baḥri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sea", ur: "the sea" } },
      { id: '22:65:14', arabic: "بِأَمْرِهِۦ", transliteration: "bi-amrihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by His Command", ur: "by His Command" } },
      { id: '22:65:15', arabic: "وَيُمْسِكُ", transliteration: "wayum'siku", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He withholds", ur: "اور وہ withholds" } },
      { id: '22:65:16', arabic: "ٱلسَّمَآءَ", transliteration: "l-samāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '22:65:17', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "lest", ur: "lest" } },
      { id: '22:65:18', arabic: "تَقَعَ", transliteration: "taqaʿa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it falls", ur: "it falls" } },
      { id: '22:65:19', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '22:65:20', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '22:65:21', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '22:65:22', arabic: "بِإِذْنِهِۦٓ ۗ", transliteration: "bi-idh'nihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by His permission", ur: "by His permission" } },
      { id: '22:65:23', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:65:24', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:65:25', arabic: "بِٱلنَّاسِ", transliteration: "bil-nāsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to mankind", ur: "کو mankind" } },
      { id: '22:65:26', arabic: "لَرَءُوفٌۭ", transliteration: "laraūfun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Full of Kindness", ur: "(is) Full of Kindness" } },
      { id: '22:65:27', arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 19, to: 20, label: 'جار + مجرور' },
        { from: 23, to: 24, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'جار + مجرور' },
        { from: 26, to: 27, label: 'موصوف + صفت' }
      ],
    },
  },
  66: {
    text: "وَهُوَ ٱلَّذِىٓ أَحْيَاكُمْ ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ ۗ إِنَّ ٱلْإِنسَـٰنَ لَكَفُورٌۭ",
    translation: {
      en: "",
      ur: "اور وہی تو ہے جس نے تم کو حیات بخشی۔ پھر تم کو مارتا ہے۔ پھر تمہیں زندہ بھی کرے گا۔ اور انسان تو بڑا ناشکر ہے",
    },
    words: [
      { id: '22:66:1', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He", ur: "اور وہ" } },
      { id: '22:66:2', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '22:66:3', arabic: "أَحْيَاكُمْ", transliteration: "aḥyākum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gave you life", ur: "gave تم زندگی" } },
      { id: '22:66:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '22:66:5', arabic: "يُمِيتُكُمْ", transliteration: "yumītukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will cause you to die", ur: "وہ will cause تم کو die" } },
      { id: '22:66:6', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '22:66:7', arabic: "يُحْيِيكُمْ ۗ", transliteration: "yuḥ'yīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will give you life (again)", ur: "وہ will give تم زندگی (again)" } },
      { id: '22:66:8', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:66:9', arabic: "ٱلْإِنسَـٰنَ", transliteration: "l-insāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "man", ur: "man" } },
      { id: '22:66:10', arabic: "لَكَفُورٌۭ", transliteration: "lakafūrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) surely ungrateful", ur: "(is) یقیناً ungrateful" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  67: {
    text: "لِّكُلِّ أُمَّةٍۢ جَعَلْنَا مَنسَكًا هُمْ نَاسِكُوهُ ۖ فَلَا يُنَـٰزِعُنَّكَ فِى ٱلْأَمْرِ ۚ وَٱدْعُ إِلَىٰ رَبِّكَ ۖ إِنَّكَ لَعَلَىٰ هُدًۭى مُّسْتَقِيمٍۢ",
    translation: {
      en: "",
      ur: "ہم نے ہر ایک اُمت کے لئے ایک شریعت مقرر کردی ہے جس پر وہ چلتے ہیں تو یہ لوگ تم سے اس امر میں جھگڑا نہ کریں اور تم (لوگوں کو) اپنے پروردگار کی طرف بلاتے رہو۔ بےشک تم سیدھے رستے پر ہو",
    },
    words: [
      { id: '22:67:1', arabic: "لِّكُلِّ", transliteration: "likulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For every", ur: "For ہر" } },
      { id: '22:67:2', arabic: "أُمَّةٍۢ", transliteration: "ummatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nation", ur: "nation" } },
      { id: '22:67:3', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "We have made", ur: "ہم have made" } },
      { id: '22:67:4', arabic: "مَنسَكًا", transliteration: "mansakan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "rite(s)", ur: "rite(s)" } },
      { id: '22:67:5', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '22:67:6', arabic: "نَاسِكُوهُ ۖ", transliteration: "nāsikūhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "perform it", ur: "perform it" } },
      { id: '22:67:7', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So let them not dispute with you", ur: "So let them نہیں dispute ساتھ تم" } },
      { id: '22:67:8', arabic: "يُنَـٰزِعُنَّكَ", transliteration: "yunāziʿunnaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "So let them not dispute with you", ur: "So let them نہیں dispute ساتھ تم" } },
      { id: '22:67:9', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '22:67:10', arabic: "ٱلْأَمْرِ ۚ", transliteration: "l-amri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the matter", ur: "the matter" } },
      { id: '22:67:11', arabic: "وَٱدْعُ", transliteration: "wa-ud'ʿu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but invite (them)", ur: "لیکن invite (them)" } },
      { id: '22:67:12', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '22:67:13', arabic: "رَبِّكَ ۖ", transliteration: "rabbika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '22:67:14', arabic: "إِنَّكَ", transliteration: "innaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '22:67:15', arabic: "لَعَلَىٰ", transliteration: "laʿalā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) surely on", ur: "(are) یقیناً پر" } },
      { id: '22:67:16', arabic: "هُدًۭى", transliteration: "hudan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "guidance", ur: "guidance" } },
      { id: '22:67:17', arabic: "مُّسْتَقِيمٍۢ", transliteration: "mus'taqīmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "straight", ur: "سیدھا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' }
      ],
    },
  },
  68: {
    text: "وَإِن جَـٰدَلُوكَ فَقُلِ ٱللَّهُ أَعْلَمُ بِمَا تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور اگر یہ تم سے جھگڑا کریں تو کہہ دو کہ جو عمل تم کرتے ہو خدا ان سے خوب واقف ہے",
    },
    words: [
      { id: '22:68:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '22:68:2', arabic: "جَـٰدَلُوكَ", transliteration: "jādalūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they argue (with) you", ur: "وہ لوگ argue (ساتھ) تم" } },
      { id: '22:68:3', arabic: "فَقُلِ", transliteration: "faquli", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then say", ur: "پھر کہو" } },
      { id: '22:68:4', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:68:5', arabic: "أَعْلَمُ", transliteration: "aʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "(is) most knowing", ur: "(is) most knowing" } },
      { id: '22:68:6', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '22:68:7', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  69: {
    text: "ٱللَّهُ يَحْكُمُ بَيْنَكُمْ يَوْمَ ٱلْقِيَـٰمَةِ فِيمَا كُنتُمْ فِيهِ تَخْتَلِفُونَ",
    translation: {
      en: "",
      ur: "جن باتوں میں تم اختلاف کرتے ہو خدا تم میں قیامت کے روز ان کا فیصلہ کردے گا",
    },
    words: [
      { id: '22:69:1', arabic: "ٱللَّهُ", transliteration: "al-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:69:2', arabic: "يَحْكُمُ", transliteration: "yaḥkumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will judge", ur: "will judge" } },
      { id: '22:69:3', arabic: "بَيْنَكُمْ", transliteration: "baynakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between you", ur: "درمیان تم" } },
      { id: '22:69:4', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) Day", ur: "(پر the) دن" } },
      { id: '22:69:5', arabic: "ٱلْقِيَـٰمَةِ", transliteration: "l-qiyāmati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Resurrection", ur: "(of) the Resurrection" } },
      { id: '22:69:6', arabic: "فِيمَا", transliteration: "fīmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "concerning what", ur: "concerning کیا" } },
      { id: '22:69:7', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used (to)", ur: "تم used (کو)" } },
      { id: '22:69:8', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '22:69:9', arabic: "تَخْتَلِفُونَ", transliteration: "takhtalifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "differ", ur: "differ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    text: "أَلَمْ تَعْلَمْ أَنَّ ٱللَّهَ يَعْلَمُ مَا فِى ٱلسَّمَآءِ وَٱلْأَرْضِ ۗ إِنَّ ذَٰلِكَ فِى كِتَـٰبٍ ۚ إِنَّ ذَٰلِكَ عَلَى ٱللَّهِ يَسِيرٌۭ",
    translation: {
      en: "",
      ur: "کیا تم نہیں جانتے کہ جو کچھ آسمان اور زمین میں ہے خدا اس کو جانتا ہے۔ یہ (سب کچھ) کتاب میں (لکھا ہوا) ہے۔ بےشک یہ سب خدا کو آسان ہے",
    },
    words: [
      { id: '22:70:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '22:70:2', arabic: "تَعْلَمْ", transliteration: "taʿlam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you know", ur: "تم جاننا" } },
      { id: '22:70:3', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:70:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:70:5', arabic: "يَعْلَمُ", transliteration: "yaʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "knows", ur: "knows" } },
      { id: '22:70:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:70:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '22:70:8', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heaven", ur: "the آسمان" } },
      { id: '22:70:9', arabic: "وَٱلْأَرْضِ ۗ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '22:70:10', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:70:11', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:70:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '22:70:13', arabic: "كِتَـٰبٍ ۚ", transliteration: "kitābin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Record", ur: "a Record" } },
      { id: '22:70:14', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "indeed", ur: "بیشک" } },
      { id: '22:70:15', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:70:16', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) for", ur: "(is) for" } },
      { id: '22:70:17', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:70:18', arabic: "يَسِيرٌۭ", transliteration: "yasīrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "easy", ur: "easy" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' }
      ],
    },
  },
  71: {
    text: "وَيَعْبُدُونَ مِن دُونِ ٱللَّهِ مَا لَمْ يُنَزِّلْ بِهِۦ سُلْطَـٰنًۭا وَمَا لَيْسَ لَهُم بِهِۦ عِلْمٌۭ ۗ وَمَا لِلظَّـٰلِمِينَ مِن نَّصِيرٍۢ",
    translation: {
      en: "",
      ur: "اور (یہ لوگ) خدا کے سوا ایسی چیزوں کی عبادت کرتے ہیں جن کی اس نے کوئی سند نازل نہیں فرمائی اور نہ ان کے پاس اس کی کوئی دلیل ہے۔ اور ظالموں کا کوئی بھی مددگار نہیں ہوگا",
    },
    words: [
      { id: '22:71:1', arabic: "وَيَعْبُدُونَ", transliteration: "wayaʿbudūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they worship", ur: "اور وہ لوگ عبادت" } },
      { id: '22:71:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '22:71:3', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '22:71:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '22:71:5', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:71:6', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '22:71:7', arabic: "يُنَزِّلْ", transliteration: "yunazzil", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He (has) sent down", ur: "وہ (has) sent down" } },
      { id: '22:71:8', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '22:71:9', arabic: "سُلْطَـٰنًۭا", transliteration: "sul'ṭānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any authority", ur: "any authority" } },
      { id: '22:71:10', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '22:71:11', arabic: "لَيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '22:71:12', arabic: "لَهُم", transliteration: "lahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have", ur: "وہ لوگ have" } },
      { id: '22:71:13', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '22:71:14', arabic: "عِلْمٌۭ ۗ", transliteration: "ʿil'mun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any knowledge", ur: "any knowledge" } },
      { id: '22:71:15', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '22:71:16', arabic: "لِلظَّـٰلِمِينَ", transliteration: "lilẓẓālimīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(will be) for the wrongdoers", ur: "(will be) for the wrongdoers" } },
      { id: '22:71:17', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '22:71:18', arabic: "نَّصِيرٍۢ", transliteration: "naṣīrin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "helper", ur: "helper" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  72: {
    text: "وَإِذَا تُتْلَىٰ عَلَيْهِمْ ءَايَـٰتُنَا بَيِّنَـٰتٍۢ تَعْرِفُ فِى وُجُوهِ ٱلَّذِينَ كَفَرُوا۟ ٱلْمُنكَرَ ۖ يَكَادُونَ يَسْطُونَ بِٱلَّذِينَ يَتْلُونَ عَلَيْهِمْ ءَايَـٰتِنَا ۗ قُلْ أَفَأُنَبِّئُكُم بِشَرٍّۢ مِّن ذَٰلِكُمُ ۗ ٱلنَّارُ وَعَدَهَا ٱللَّهُ ٱلَّذِينَ كَفَرُوا۟ ۖ وَبِئْسَ ٱلْمَصِيرُ",
    translation: {
      en: "",
      ur: "اور جب ان کو ہماری آیتیں پڑھ کر سنائی جاتی تو (ان کی شکل بگڑ جاتی ہے اور) تم ان کے چہروں میں صاف طور پر ناخوشی (کے آثار) دیکھتے ہو۔ قریب ہوتے ہیں کہ جو لوگ ان کو ہماری آیتیں پڑھ کر سناتے ہیں ان پر حملہ کردیں۔ کہہ دو کہ میں تم کو اس سے بھی بری چیز بتاؤں؟ وہ دوزخ کی آگ ہے۔ جس کا خدا نے کافروں سے وعدہ کیا ہے۔ اور وہ برا ٹھکانا ہے",
    },
    words: [
      { id: '22:72:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '22:72:2', arabic: "تُتْلَىٰ", transliteration: "tut'lā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are recited", ur: "are recited" } },
      { id: '22:72:3', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '22:72:4', arabic: "ءَايَـٰتُنَا", transliteration: "āyātunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '22:72:5', arabic: "بَيِّنَـٰتٍۢ", transliteration: "bayyinātin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } },
      { id: '22:72:6', arabic: "تَعْرِفُ", transliteration: "taʿrifu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will recognize", ur: "تم will recognize" } },
      { id: '22:72:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '22:72:8', arabic: "وُجُوهِ", transliteration: "wujūhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) faces", ur: "(the) faces" } },
      { id: '22:72:9', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '22:72:10', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '22:72:11', arabic: "ٱلْمُنكَرَ ۖ", transliteration: "l-munkara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the denial", ur: "the denial" } },
      { id: '22:72:12', arabic: "يَكَادُونَ", transliteration: "yakādūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They almost", ur: "وہ لوگ almost" } },
      { id: '22:72:13', arabic: "يَسْطُونَ", transliteration: "yasṭūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "attack", ur: "attack" } },
      { id: '22:72:14', arabic: "بِٱلَّذِينَ", transliteration: "bi-alladhīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '22:72:15', arabic: "يَتْلُونَ", transliteration: "yatlūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "recite", ur: "recite" } },
      { id: '22:72:16', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '22:72:17', arabic: "ءَايَـٰتِنَا ۗ", transliteration: "āyātinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '22:72:18', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '22:72:19', arabic: "أَفَأُنَبِّئُكُم", transliteration: "afa-unabbi-ukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then shall I inform you", ur: "پھر shall میں inform تم" } },
      { id: '22:72:20', arabic: "بِشَرٍّۢ", transliteration: "bisharrin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of worse", ur: "of worse" } },
      { id: '22:72:21', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than", ur: "than" } },
      { id: '22:72:22', arabic: "ذَٰلِكُمُ ۗ", transliteration: "dhālikumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '22:72:23', arabic: "ٱلنَّارُ", transliteration: "l-nāru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "The Fire", ur: "The آگ" } },
      { id: '22:72:24', arabic: "وَعَدَهَا", transliteration: "waʿadahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Allah (has) promised it", ur: "اللہ (has) promised it" } },
      { id: '22:72:25', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah (has) promised it", ur: "اللہ (has) promised it" } },
      { id: '22:72:26', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) those who", ur: "(for) جو لوگ" } },
      { id: '22:72:27', arabic: "كَفَرُوا۟ ۖ", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '22:72:28', arabic: "وَبِئْسَ", transliteration: "wabi'sa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and wretched", ur: "اور wretched" } },
      { id: '22:72:29', arabic: "ٱلْمَصِيرُ", transliteration: "l-maṣīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the destination", ur: "(is) the destination" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'جار + مجرور' }
      ],
    },
  },
  73: {
    text: "يَـٰٓأَيُّهَا ٱلنَّاسُ ضُرِبَ مَثَلٌۭ فَٱسْتَمِعُوا۟ لَهُۥٓ ۚ إِنَّ ٱلَّذِينَ تَدْعُونَ مِن دُونِ ٱللَّهِ لَن يَخْلُقُوا۟ ذُبَابًۭا وَلَوِ ٱجْتَمَعُوا۟ لَهُۥ ۖ وَإِن يَسْلُبْهُمُ ٱلذُّبَابُ شَيْـًۭٔا لَّا يَسْتَنقِذُوهُ مِنْهُ ۚ ضَعُفَ ٱلطَّالِبُ وَٱلْمَطْلُوبُ",
    translation: {
      en: "",
      ur: "لوگو! ایک مثال بیان کی جاتی ہے اسے غور سے سنو۔ کہ جن لوگوں کو تم خدا کے سوا پکارتے ہو وہ ایک مکھی بھی نہیں بنا سکتے اگرچہ اس کے لئے سب مجتمع ہوجائیں۔ اور اگر ان سے مکھی کوئی چیز لے جائے تو اسے اس سے چھڑا نہیں سکتے۔ طالب اور مطلوب (یعنی عابد اور معبود دونوں) گئے گزرے ہیں",
    },
    words: [
      { id: '22:73:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '22:73:2', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O mankind", ur: "اے mankind" } },
      { id: '22:73:3', arabic: "ضُرِبَ", transliteration: "ḍuriba", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is set forth", ur: "Is set forth" } },
      { id: '22:73:4', arabic: "مَثَلٌۭ", transliteration: "mathalun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an example", ur: "an example" } },
      { id: '22:73:5', arabic: "فَٱسْتَمِعُوا۟", transliteration: "fa-is'tamiʿū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so listen", ur: "so listen" } },
      { id: '22:73:6', arabic: "لَهُۥٓ ۚ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '22:73:7', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:73:8', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those whom", ur: "those whom" } },
      { id: '22:73:9', arabic: "تَدْعُونَ", transliteration: "tadʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you invoke", ur: "تم invoke" } },
      { id: '22:73:10', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '22:73:11', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '22:73:12', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "besides Allah", ur: "besides اللہ" } },
      { id: '22:73:13', arabic: "لَن", transliteration: "lan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will never", ur: "will never" } },
      { id: '22:73:14', arabic: "يَخْلُقُوا۟", transliteration: "yakhluqū", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "create", ur: "پیدا کرنا" } },
      { id: '22:73:15', arabic: "ذُبَابًۭا", transliteration: "dhubāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a fly", ur: "a fly" } },
      { id: '22:73:16', arabic: "وَلَوِ", transliteration: "walawi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even if", ur: "even if" } },
      { id: '22:73:17', arabic: "ٱجْتَمَعُوا۟", transliteration: "ij'tamaʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they gathered together", ur: "وہ لوگ gathered together" } },
      { id: '22:73:18', arabic: "لَهُۥ ۖ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '22:73:19', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '22:73:20', arabic: "يَسْلُبْهُمُ", transliteration: "yaslub'humu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "snatched away from them", ur: "snatched away سے them" } },
      { id: '22:73:21', arabic: "ٱلذُّبَابُ", transliteration: "l-dhubābu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the fly", ur: "the fly" } },
      { id: '22:73:22', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a thing", ur: "a thing" } },
      { id: '22:73:23', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '22:73:24', arabic: "يَسْتَنقِذُوهُ", transliteration: "yastanqidhūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (could) take it back", ur: "وہ لوگ (could) take it back" } },
      { id: '22:73:25', arabic: "مِنْهُ ۚ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from it", ur: "سے it" } },
      { id: '22:73:26', arabic: "ضَعُفَ", transliteration: "ḍaʿufa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "So weak", ur: "So weak" } },
      { id: '22:73:27', arabic: "ٱلطَّالِبُ", transliteration: "l-ṭālibu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the seeker", ur: "(are) the seeker" } },
      { id: '22:73:28', arabic: "وَٱلْمَطْلُوبُ", transliteration: "wal-maṭlūbu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the one who is sought", ur: "اور the one جو is sought" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  74: {
    text: "مَا قَدَرُوا۟ ٱللَّهَ حَقَّ قَدْرِهِۦٓ ۗ إِنَّ ٱللَّهَ لَقَوِىٌّ عَزِيزٌ",
    translation: {
      en: "",
      ur: "ان لوگوں نے خدا کی قدر جیسی کرنی چاہیئے تھی نہیں کی۔ کچھ شک نہیں کہ خدا زبردست اور غالب ہے",
    },
    words: [
      { id: '22:74:1', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '22:74:2', arabic: "قَدَرُوا۟", transliteration: "qadarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (have) estimated", ur: "وہ لوگ (have) estimated" } },
      { id: '22:74:3', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:74:4', arabic: "حَقَّ", transliteration: "ḥaqqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) due", ur: "(ساتھ) due" } },
      { id: '22:74:5', arabic: "قَدْرِهِۦٓ ۗ", transliteration: "qadrihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[His] estimation", ur: "[His] estimation" } },
      { id: '22:74:6', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:74:7', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:74:8', arabic: "لَقَوِىٌّ", transliteration: "laqawiyyun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) surely All-Strong", ur: "(is) یقیناً سب-Strong" } },
      { id: '22:74:9', arabic: "عَزِيزٌ", transliteration: "ʿazīzun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Mighty", ur: "سب-Mighty" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  75: {
    text: "ٱللَّهُ يَصْطَفِى مِنَ ٱلْمَلَـٰٓئِكَةِ رُسُلًۭا وَمِنَ ٱلنَّاسِ ۚ إِنَّ ٱللَّهَ سَمِيعٌۢ بَصِيرٌۭ",
    translation: {
      en: "",
      ur: "خدا فرشتوں میں سے پیغام پہنچانے والے منتخب کرلیتا ہے اور انسانوں میں سے بھی۔ بےشک خدا سننے والا (اور) دیکھنے والا ہے",
    },
    words: [
      { id: '22:75:1', arabic: "ٱللَّهُ", transliteration: "al-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:75:2', arabic: "يَصْطَفِى", transliteration: "yaṣṭafī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "chooses", ur: "chooses" } },
      { id: '22:75:3', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '22:75:4', arabic: "ٱلْمَلَـٰٓئِكَةِ", transliteration: "l-malāikati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '22:75:5', arabic: "رُسُلًۭا", transliteration: "rusulan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Messengers", ur: "Messengers" } },
      { id: '22:75:6', arabic: "وَمِنَ", transliteration: "wamina", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and from", ur: "اور سے" } },
      { id: '22:75:7', arabic: "ٱلنَّاسِ ۚ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '22:75:8', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '22:75:9', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:75:10', arabic: "سَمِيعٌۢ", transliteration: "samīʿun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Hearer", ur: "(is) سب-Hearer" } },
      { id: '22:75:11', arabic: "بَصِيرٌۭ", transliteration: "baṣīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Seer", ur: "سب-Seer" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  76: {
    text: "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۗ وَإِلَى ٱللَّهِ تُرْجَعُ ٱلْأُمُورُ",
    translation: {
      en: "",
      ur: "جو ان کے آگے ہے اور جن ان کے پیچھے ہے وہ اس سے واقف ہے۔ اور سب کاموں کا رجوع خدا ہی کی طرف ہے",
    },
    words: [
      { id: '22:76:1', arabic: "يَعْلَمُ", transliteration: "yaʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "He knows", ur: "وہ knows" } },
      { id: '22:76:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '22:76:3', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) before them", ur: "(is) پہلے them" } },
      { id: '22:76:4', arabic: "أَيْدِيهِمْ", transliteration: "aydīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) before them", ur: "(is) پہلے them" } },
      { id: '22:76:5', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '22:76:6', arabic: "خَلْفَهُمْ ۗ", transliteration: "khalfahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) after them", ur: "(is) بعد them" } },
      { id: '22:76:7', arabic: "وَإِلَى", transliteration: "wa-ilā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to", ur: "اور کو" } },
      { id: '22:76:8', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:76:9', arabic: "تُرْجَعُ", transliteration: "tur'jaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "return", ur: "return" } },
      { id: '22:76:10', arabic: "ٱلْأُمُورُ", transliteration: "l-umūru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all the matters", ur: "سب the matters" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  77: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱرْكَعُوا۟ وَٱسْجُدُوا۟ وَٱعْبُدُوا۟ رَبَّكُمْ وَٱفْعَلُوا۟ ٱلْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ ۩",
    translation: {
      en: "",
      ur: "مومنو! رکوع کرتے اور سجدے کرتے اور اپنے پروردگار کی عبادت کرتے رہو اور نیک کام کرو تاکہ فلاح پاؤ",
    },
    words: [
      { id: '22:77:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you who believe", ur: "اے تم جو ایمان لانا" } },
      { id: '22:77:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you who believe", ur: "اے تم جو ایمان لانا" } },
      { id: '22:77:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you who believe", ur: "اے تم جو ایمان لانا" } },
      { id: '22:77:4', arabic: "ٱرْكَعُوا۟", transliteration: "ir'kaʿū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Bow", ur: "Bow" } },
      { id: '22:77:5', arabic: "وَٱسْجُدُوا۟", transliteration: "wa-us'judū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and prostrate", ur: "اور prostrate" } },
      { id: '22:77:6', arabic: "وَٱعْبُدُوا۟", transliteration: "wa-uʿ'budū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and worship", ur: "اور عبادت" } },
      { id: '22:77:7', arabic: "رَبَّكُمْ", transliteration: "rabbakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '22:77:8', arabic: "وَٱفْعَلُوا۟", transliteration: "wa-if'ʿalū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and do", ur: "اور do" } },
      { id: '22:77:9', arabic: "ٱلْخَيْرَ", transliteration: "l-khayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] good", ur: "[the] اچھا" } },
      { id: '22:77:10', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '22:77:11', arabic: "تُفْلِحُونَ ۩", transliteration: "tuf'liḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be successful", ur: "be successful" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  78: {
    text: "وَجَـٰهِدُوا۟ فِى ٱللَّهِ حَقَّ جِهَادِهِۦ ۚ هُوَ ٱجْتَبَىٰكُمْ وَمَا جَعَلَ عَلَيْكُمْ فِى ٱلدِّينِ مِنْ حَرَجٍۢ ۚ مِّلَّةَ أَبِيكُمْ إِبْرَٰهِيمَ ۚ هُوَ سَمَّىٰكُمُ ٱلْمُسْلِمِينَ مِن قَبْلُ وَفِى هَـٰذَا لِيَكُونَ ٱلرَّسُولُ شَهِيدًا عَلَيْكُمْ وَتَكُونُوا۟ شُهَدَآءَ عَلَى ٱلنَّاسِ ۚ فَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ وَٱعْتَصِمُوا۟ بِٱللَّهِ هُوَ مَوْلَىٰكُمْ ۖ فَنِعْمَ ٱلْمَوْلَىٰ وَنِعْمَ ٱلنَّصِيرُ",
    translation: {
      en: "",
      ur: "اور خدا (کی راہ) میں جہاد کرو جیسا جہاد کرنے کا حق ہے۔ اس نے تم کو برگزیدہ کیا ہے اور تم پر دین کی (کسی بات) میں تنگی نہیں کی۔ (اور تمہارے لئے) تمہارے باپ ابراہیم کا دین (پسند کیا) اُسی نے پہلے (یعنی پہلی کتابوں میں) تمہارا نام مسلمان رکھا تھا اور اس کتاب میں بھی (وہی نام رکھا ہے تو جہاد کرو) تاکہ پیغمبر تمہارے بارے میں شاہد ہوں۔ اور تم لوگوں کے مقابلے میں شاہد اور نماز پڑھو اور زکوٰة دو اور خدا کے دین کی (رسی کو) پکڑے رہو۔ وہی تمہارا دوست ہے۔ اور خوب دوست اور خوب مددگار ہے",
    },
    words: [
      { id: '22:78:1', arabic: "وَجَـٰهِدُوا۟", transliteration: "wajāhidū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And strive", ur: "اور strive" } },
      { id: '22:78:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '22:78:3', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '22:78:4', arabic: "حَقَّ", transliteration: "ḥaqqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with the) striving due (to) Him", ur: "(ساتھ the) striving due (کو) Him" } },
      { id: '22:78:5', arabic: "جِهَادِهِۦ ۚ", transliteration: "jihādihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with the) striving due (to) Him", ur: "(ساتھ the) striving due (کو) Him" } },
      { id: '22:78:6', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '22:78:7', arabic: "ٱجْتَبَىٰكُمْ", transliteration: "ij'tabākum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) chosen you", ur: "(has) chosen تم" } },
      { id: '22:78:8', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '22:78:9', arabic: "جَعَلَ", transliteration: "jaʿala", pos: ['V'], posLabel: 'V', root: "ج ع ل", meaning: { en: "placed", ur: "placed" } },
      { id: '22:78:10', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '22:78:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '22:78:12', arabic: "ٱلدِّينِ", transliteration: "l-dīni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the religion", ur: "the religion" } },
      { id: '22:78:13', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any", ur: "any" } },
      { id: '22:78:14', arabic: "حَرَجٍۢ ۚ", transliteration: "ḥarajin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "difficulty", ur: "difficulty" } },
      { id: '22:78:15', arabic: "مِّلَّةَ", transliteration: "millata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(The) religion", ur: "(The) religion" } },
      { id: '22:78:16', arabic: "أَبِيكُمْ", transliteration: "abīkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) your father", ur: "(of) your باپ" } },
      { id: '22:78:17', arabic: "إِبْرَٰهِيمَ ۚ", transliteration: "ib'rāhīma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Ibrahim", ur: "Ibrahim" } },
      { id: '22:78:18', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '22:78:19', arabic: "سَمَّىٰكُمُ", transliteration: "sammākumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "named you", ur: "named تم" } },
      { id: '22:78:20', arabic: "ٱلْمُسْلِمِينَ", transliteration: "l-mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Muslims", ur: "Muslims" } },
      { id: '22:78:21', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '22:78:22', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '22:78:23', arabic: "وَفِى", transliteration: "wafī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and in", ur: "اور میں" } },
      { id: '22:78:24', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '22:78:25', arabic: "لِيَكُونَ", transliteration: "liyakūna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that may be", ur: "وہ may be" } },
      { id: '22:78:26', arabic: "ٱلرَّسُولُ", transliteration: "l-rasūlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Messenger", ur: "the رسول" } },
      { id: '22:78:27', arabic: "شَهِيدًا", transliteration: "shahīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a witness", ur: "a witness" } },
      { id: '22:78:28', arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over you", ur: "اوپر تم" } },
      { id: '22:78:29', arabic: "وَتَكُونُوا۟", transliteration: "watakūnū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and you may be", ur: "اور تم may be" } },
      { id: '22:78:30', arabic: "شُهَدَآءَ", transliteration: "shuhadāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "witnesses", ur: "witnesses" } },
      { id: '22:78:31', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '22:78:32', arabic: "ٱلنَّاسِ ۚ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '22:78:33', arabic: "فَأَقِيمُوا۟", transliteration: "fa-aqīmū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So establish", ur: "So establish" } },
      { id: '22:78:34', arabic: "ٱلصَّلَوٰةَ", transliteration: "l-ṣalata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the prayer", ur: "the نماز" } },
      { id: '22:78:35', arabic: "وَءَاتُوا۟", transliteration: "waātū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and give", ur: "اور give" } },
      { id: '22:78:36', arabic: "ٱلزَّكَوٰةَ", transliteration: "l-zakata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "zakah", ur: "zakah" } },
      { id: '22:78:37', arabic: "وَٱعْتَصِمُوا۟", transliteration: "wa-iʿ'taṣimū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hold fast", ur: "اور hold fast" } },
      { id: '22:78:38', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '22:78:39', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '22:78:40', arabic: "مَوْلَىٰكُمْ ۖ", transliteration: "mawlākum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) your Protector ", ur: "(is) your Protector " } },
      { id: '22:78:41', arabic: "فَنِعْمَ", transliteration: "faniʿ'ma", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so an Excellent", ur: "so an Excellent" } },
      { id: '22:78:42', arabic: "ٱلْمَوْلَىٰ", transliteration: "l-mawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Protector", ur: "[the] Protector" } },
      { id: '22:78:43', arabic: "وَنِعْمَ", transliteration: "waniʿ'ma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and an Excellent", ur: "اور an Excellent" } },
      { id: '22:78:44', arabic: "ٱلنَّصِيرُ", transliteration: "l-naṣīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Helper", ur: "[the] Helper" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'جار + مجرور' },
        { from: 31, to: 32, label: 'جار + مجرور' }
      ],
    },
  },
};

export default SURAH_22_TREEBANK;
