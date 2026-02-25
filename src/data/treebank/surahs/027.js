/**
 * Surah An-Naml (27) - Treebank Data (First 10 Ayahs)
 * The Ant - 93 Ayahs, Makkan
 *
 * Theme: Stories of prophets - Solomon, Moses, Salih, Lot
 * Special: Named after the ant that warned its colony of Solomon's army
 * Contains: Famous story of Solomon and the Queen of Sheba (Bilqis)
 */

const SURAH_27_TREEBANK = {
  1: { // Ayah 1: طس تِلْكَ آيَاتُ الْقُرْآنِ وَكِتَابٍ مُّبِينٍ
    text: 'طس تِلْكَ آيَاتُ الْقُرْآنِ وَكِتَابٍ مُّبِينٍ',
    translation: {
      en: 'Ta, Seen. These are the verses of the Quran and a clear Book.',
      ur: 'طا، سین۔ یہ قرآن اور واضح کتاب کی آیتیں ہیں',
    },
    words: [
      {
        id: '27:1:1',
        position: 1,
        arabic: 'طس',
        transliteration: 'Ta-Seen',
        pos: ['INL'],
        posLabel: 'INL',
        root: null,
        lemma: null,
        meaning: {
          en: 'Ta Seen (mysterious letters)',
          ur: 'طا سین (حروف مقطعات)',
        },
        grammarRole: 'muqattaat',
        case: null,
        grammarExplanations: {
          en: 'Huruf Muqatta\'at - disjoined letters whose meaning is known only to Allah.',
          ur: 'حروف مقطعات - جدا جدا حروف جن کا مطلب صرف اللہ کو معلوم ہے۔',
        },
      },
      {
        id: '27:1:2',
        position: 2,
        arabic: 'تِلْكَ',
        transliteration: 'tilka',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'These/Those',
          ur: 'یہ/وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative pronoun (اسم إشارة) - subject of the sentence.',
          ur: 'اسم اشارہ - جملے کا مبتدأ۔',
        },
      },
      {
        id: '27:1:3',
        position: 3,
        arabic: 'آيَاتُ',
        transliteration: 'aayaatu',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ي ي',
        lemma: 'آية',
        meaning: {
          en: 'Verses/Signs',
          ur: 'آیتیں/نشانیاں',
        },
        grammarRole: 'khabar',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Predicate (خبر) - nominative. Also مضاف (first part of construct).',
          ur: 'خبر - مرفوع۔ مضاف بھی ہے۔',
        },
      },
      {
        id: '27:1:4',
        position: 4,
        arabic: 'الْقُرْآنِ',
        transliteration: 'al-Qur\'aani',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ر أ',
        lemma: 'قُرْآن',
        meaning: {
          en: 'The Quran',
          ur: 'قرآن',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) - "verses OF the Quran".',
          ur: 'مضاف الیہ - مجرور: "قرآن کی آیتیں"۔',
        },
        advanced: {
          rootFamily: {
            root: 'ق ر أ',
            meaning: { en: 'to read, recite', ur: 'پڑھنا، تلاوت کرنا' },
            words: [
              { word: 'قَرَأَ', meaning: { en: 'he read', ur: 'اس نے پڑھا' } },
              { word: 'قُرْآن', meaning: { en: 'Quran (the Recitation)', ur: 'قرآن (تلاوت)' } },
              { word: 'قِرَاءَة', meaning: { en: 'recitation', ur: 'قراءت' } },
            ],
          },
        },
      },
      {
        id: '27:1:5',
        position: 5,
        arabic: 'وَكِتَابٍ',
        transliteration: 'wa-kitaabin',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ك ت ب',
        lemma: 'كِتَاب',
        meaning: {
          en: 'And a Book',
          ur: 'اور کتاب',
        },
        grammarRole: 'matoof',
        case: 'majroor',
        grammarExplanations: {
          en: 'Conjoined (معطوف) to القرآن - genitive. Another description of the same Book.',
          ur: 'معطوف علی القرآن - مجرور۔ اسی کتاب کی دوسری صفت۔',
        },
      },
      {
        id: '27:1:6',
        position: 6,
        arabic: 'مُّبِينٍ',
        transliteration: 'mubeenin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ب ي ن',
        lemma: 'مُبِين',
        pattern: 'مُفْعِل',
        meaning: {
          en: 'Clear/manifest',
          ur: 'واضح/روشن',
        },
        grammarRole: 'sifa',
        case: 'majroor',
        grammarExplanations: {
          en: 'Adjective (صفة) for كِتَاب - genitive to match.',
          ur: 'صفت کِتَاب کی - موصوف کے مطابق مجرور۔',
        },
      },
    ],
    structure: {
      type: 'nominal-sentence',
      components: [
        { type: 'huruf', word: 'طس', role: 'mysterious letters' },
        { type: 'mubtada', word: 'تِلْكَ', role: 'subject' },
        { type: 'khabar', word: 'آيَاتُ الْقُرْآنِ وَكِتَابٍ مُّبِينٍ', role: 'predicate' },
      ],
      relationships: [
        { from: 2, to: 3, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'عطف' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
      ],
      explanation: {
        en: 'These (subject) are verses of the Quran and a clear Book (predicate)',
        ur: 'یہ (مبتدأ) قرآن اور واضح کتاب کی آیتیں ہیں (خبر)',
      },
    },
  },

  2: { // Ayah 2: هُدًى وَبُشْرَىٰ لِلْمُؤْمِنِينَ
    text: 'هُدًى وَبُشْرَىٰ لِلْمُؤْمِنِينَ',
    translation: {
      en: 'A guidance and good tidings for the believers.',
      ur: 'ہدایت اور خوشخبری ہے ایمان والوں کے لیے',
    },
    words: [
      {
        id: '27:2:1',
        position: 1,
        arabic: 'هُدًى',
        transliteration: 'hudan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ه د ي',
        lemma: 'هُدًى',
        meaning: {
          en: 'Guidance',
          ur: 'ہدایت',
        },
        grammarRole: 'hal',
        case: 'mansoob',
        grammarExplanations: {
          en: 'State (حال) describing the Quran - accusative. Or badal from آيات.',
          ur: 'حال قرآن کی صفت بیان کرتا ہے - منصوب۔ یا آیات سے بدل۔',
        },
        advanced: {
          rootFamily: {
            root: 'ه د ي',
            meaning: { en: 'to guide, show the way', ur: 'راہ دکھانا، ہدایت دینا' },
            words: [
              { word: 'هَدَى', meaning: { en: 'he guided', ur: 'اس نے راہ دکھائی' } },
              { word: 'هُدًى', meaning: { en: 'guidance', ur: 'ہدایت' } },
              { word: 'هَادٍ', meaning: { en: 'guide', ur: 'ہادی' } },
              { word: 'مَهْدِيّ', meaning: { en: 'guided one', ur: 'مہدی' } },
            ],
          },
        },
      },
      {
        id: '27:2:2',
        position: 2,
        arabic: 'وَبُشْرَىٰ',
        transliteration: 'wa-bushraa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ب ش ر',
        lemma: 'بُشْرَى',
        meaning: {
          en: 'And good tidings',
          ur: 'اور خوشخبری',
        },
        grammarRole: 'matoof',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Conjoined (معطوف) to هُدًى - accusative.',
          ur: 'معطوف علی هُدًى - منصوب۔',
        },
        advanced: {
          rootFamily: {
            root: 'ب ش ر',
            meaning: { en: 'to give good news', ur: 'خوشخبری دینا' },
            words: [
              { word: 'بَشَّرَ', meaning: { en: 'he gave good news', ur: 'اس نے خوشخبری دی' } },
              { word: 'بُشْرَى', meaning: { en: 'good news', ur: 'خوشخبری' } },
              { word: 'بَشِير', meaning: { en: 'bearer of good news', ur: 'بشارت دینے والا' } },
            ],
          },
        },
      },
      {
        id: '27:2:3',
        position: 3,
        arabic: 'لِلْمُؤْمِنِينَ',
        transliteration: 'lil-mu\'mineena',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'أ م ن',
        lemma: 'مُؤْمِن',
        meaning: {
          en: 'For the believers',
          ur: 'ایمان والوں کے لیے',
        },
        grammarRole: 'jarr-majroor',
        case: 'majroor',
        grammarExplanations: {
          en: 'Preposition لِ (for) + مُؤْمِنِينَ (believers) - genitive masculine plural.',
          ur: 'حرف جار لِ (کے لیے) + مُؤْمِنِينَ (ایمان والے) - مجرور جمع مذکر۔',
        },
      },
    ],
    structure: {
      type: 'nominal-fragment',
      components: [
        { type: 'hal', word: 'هُدًى وَبُشْرَىٰ', role: 'description of Quran' },
        { type: 'mutaalliq', word: 'لِلْمُؤْمِنِينَ', role: 'beneficiaries' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'عطف' },
      ],
      explanation: {
        en: 'Guidance and good tidings (nature) for the believers (recipients)',
        ur: 'ہدایت اور خوشخبری (صفت) ایمان والوں کے لیے (مستفیدین)',
      },
    },
  },

  3: { // Ayah 3: الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ يُوقِنُونَ
    text: 'الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ وَهُم بِالْآخِرَةِ هُمْ يُوقِنُونَ',
    translation: {
      en: 'Those who establish prayer and give zakah, and of the Hereafter they are certain.',
      ur: 'جو نماز قائم کرتے ہیں اور زکوٰۃ دیتے ہیں اور وہ آخرت پر یقین رکھتے ہیں',
    },
    words: [
      {
        id: '27:3:1',
        position: 1,
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
          en: 'Relative pronoun (اسم موصول) - describes المؤمنين from previous verse.',
          ur: 'اسم موصول - پچھلی آیت کے المؤمنین کی صفت۔',
        },
      },
      {
        id: '27:3:2',
        position: 2,
        arabic: 'يُقِيمُونَ',
        transliteration: 'yuqeemoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و م',
        lemma: 'أَقَامَ',
        pattern: 'أَفْعَلَ',
        meaning: {
          en: 'They establish',
          ur: 'وہ قائم کرتے ہیں',
        },
        grammarRole: 'sila',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form IV verb - to establish/perform properly. Part of صلة الموصول.',
          ur: 'باب افعال کا فعل - ٹھیک طرح ادا کرنا۔ صلۃ الموصول کا حصہ۔',
        },
      },
      {
        id: '27:3:3',
        position: 3,
        arabic: 'الصَّلَاةَ',
        transliteration: 'as-salaata',
        pos: ['N'],
        posLabel: 'N',
        root: 'ص ل و',
        lemma: 'صَلَاة',
        meaning: {
          en: 'The prayer',
          ur: 'نماز',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative.',
          ur: 'مفعول بہ - منصوب۔',
        },
      },
      {
        id: '27:3:4',
        position: 4,
        arabic: 'وَيُؤْتُونَ',
        transliteration: 'wa-yu\'toona',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'أ ت ي',
        lemma: 'آتَى',
        pattern: 'أَفْعَلَ',
        meaning: {
          en: 'And they give',
          ur: 'اور وہ دیتے ہیں',
        },
        grammarRole: 'atf',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form IV verb - to give. Conjoined to يُقِيمُونَ.',
          ur: 'باب افعال کا فعل - دینا۔ يُقِيمُونَ پر معطوف۔',
        },
      },
      {
        id: '27:3:5',
        position: 5,
        arabic: 'الزَّكَاةَ',
        transliteration: 'az-zakaata',
        pos: ['N'],
        posLabel: 'N',
        root: 'ز ك و',
        lemma: 'زَكَاة',
        meaning: {
          en: 'The zakah (purifying alms)',
          ur: 'زکوٰۃ',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative.',
          ur: 'مفعول بہ - منصوب۔',
        },
        advanced: {
          rootFamily: {
            root: 'ز ك و',
            meaning: { en: 'to purify, grow', ur: 'پاک کرنا، بڑھنا' },
            words: [
              { word: 'زَكَاة', meaning: { en: 'purifying alms', ur: 'زکوٰۃ' } },
              { word: 'زَكَّى', meaning: { en: 'he purified', ur: 'اس نے پاک کیا' } },
              { word: 'تَزْكِيَة', meaning: { en: 'purification', ur: 'تزکیہ' } },
            ],
          },
        },
      },
      {
        id: '27:3:6',
        position: 6,
        arabic: 'وَهُم',
        transliteration: 'wa-hum',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'And they',
          ur: 'اور وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'وَ (conjunction) + هُم (3rd person plural pronoun) - subject of new clause.',
          ur: 'وَ (عطف) + هُم (ضمیر جمع غائب) - نئے جملے کا مبتدأ۔',
        },
      },
      {
        id: '27:3:7',
        position: 7,
        arabic: 'بِالْآخِرَةِ',
        transliteration: 'bil-aakhirati',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'أ خ ر',
        lemma: 'آخِرَة',
        meaning: {
          en: 'In the Hereafter',
          ur: 'آخرت پر',
        },
        grammarRole: 'jarr-majroor',
        case: 'majroor',
        grammarExplanations: {
          en: 'Preposition بِ + الآخِرَة - fronted for emphasis.',
          ur: 'حرف جار بِ + الآخِرَة - تقدیم برائے تاکید۔',
        },
      },
      {
        id: '27:3:8',
        position: 8,
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہ',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'Emphatic pronoun (ضمير تأكيد) - emphasizes the subject.',
          ur: 'ضمیر تاکید - فاعل پر زور۔',
        },
      },
      {
        id: '27:3:9',
        position: 9,
        arabic: 'يُوقِنُونَ',
        transliteration: 'yooqinoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'ي ق ن',
        lemma: 'أَيْقَنَ',
        pattern: 'أَفْعَلَ',
        meaning: {
          en: 'They are certain',
          ur: 'وہ یقین رکھتے ہیں',
        },
        grammarRole: 'khabar',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form IV verb - to have certainty. Predicate (خبر) of هُم.',
          ur: 'باب افعال کا فعل - یقین رکھنا۔ هُم کی خبر۔',
        },
        advanced: {
          rootFamily: {
            root: 'ي ق ن',
            meaning: { en: 'to be certain, have conviction', ur: 'یقین کرنا' },
            words: [
              { word: 'يَقِين', meaning: { en: 'certainty', ur: 'یقین' } },
              { word: 'أَيْقَنَ', meaning: { en: 'he was certain', ur: 'اس نے یقین کیا' } },
              { word: 'مُوقِن', meaning: { en: 'one who is certain', ur: 'یقین رکھنے والا' } },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'compound-relative',
      components: [
        { type: 'mawsul', word: 'الَّذِينَ', role: 'relative pronoun' },
        { type: 'sila-1', word: 'يُقِيمُونَ الصَّلَاةَ', role: 'first characteristic' },
        { type: 'sila-2', word: 'وَيُؤْتُونَ الزَّكَاةَ', role: 'second characteristic' },
        { type: 'sila-3', word: 'وَهُم بِالْآخِرَةِ هُمْ يُوقِنُونَ', role: 'third characteristic' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 2, to: 4, label: 'عطف' },
        { from: 4, to: 5, label: 'فعل + مفعول به' },
        { from: 6, to: 9, label: 'مبتدأ + خبر' },
      ],
      explanation: {
        en: 'Those who (relative) establish prayer, give zakah, and are certain of Hereafter',
        ur: 'جو لوگ (موصول) نماز قائم کریں، زکوٰۃ دیں، اور آخرت پر یقین رکھیں',
      },
    },
  },

  4: { // Ayah 4: إِنَّ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ زَيَّنَّا لَهُمْ أَعْمَالَهُمْ فَهُمْ يَعْمَهُونَ
    text: 'إِنَّ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ زَيَّنَّا لَهُمْ أَعْمَالَهُمْ فَهُمْ يَعْمَهُونَ',
    translation: {
      en: 'Indeed, those who do not believe in the Hereafter - We have made pleasing to them their deeds, so they wander blindly.',
      ur: 'بیشک جو لوگ آخرت پر ایمان نہیں رکھتے، ہم نے ان کے اعمال ان کی نظروں میں خوشنما بنا دیے ہیں، پس وہ بھٹکتے پھرتے ہیں',
    },
    words: [
      {
        id: '27:4:1',
        position: 1,
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
          en: 'Emphatic particle (حرف توكيد) - its noun is accusative.',
          ur: 'حرف توکید - اس کا اسم منصوب ہوتا ہے۔',
        },
      },
      {
        id: '27:4:2',
        position: 2,
        arabic: 'الَّذِينَ',
        transliteration: 'alladheena',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'Those who',
          ur: 'جو لوگ',
        },
        grammarRole: 'ism-inna',
        grammarExplanations: {
          en: 'Subject of إِنَّ (اسم إنّ) - indeclinable relative pronoun.',
          ur: 'اسم إنّ - اسم موصول مبنی۔',
        },
      },
      {
        id: '27:4:3',
        position: 3,
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
          en: 'Negation particle (لا النافية) - negates the following verb.',
          ur: 'لا نافیہ - آگے والے فعل کی نفی۔',
        },
      },
      {
        id: '27:4:4',
        position: 4,
        arabic: 'يُؤْمِنُونَ',
        transliteration: 'yu\'minoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ م ن',
        lemma: 'آمَنَ',
        pattern: 'أَفْعَلَ',
        meaning: {
          en: 'They believe',
          ur: 'وہ ایمان لاتے ہیں',
        },
        grammarRole: 'sila',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form IV verb - to believe. Part of صلة الموصول.',
          ur: 'باب افعال کا فعل - ایمان لانا۔ صلۃ الموصول کا حصہ۔',
        },
      },
      {
        id: '27:4:5',
        position: 5,
        arabic: 'بِالْآخِرَةِ',
        transliteration: 'bil-aakhirati',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'أ خ ر',
        lemma: 'آخِرَة',
        meaning: {
          en: 'In the Hereafter',
          ur: 'آخرت پر',
        },
        grammarRole: 'jarr-majroor',
        case: 'majroor',
      },
      {
        id: '27:4:6',
        position: 6,
        arabic: 'زَيَّنَّا',
        transliteration: 'zayyannaa',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ز ي ن',
        lemma: 'زَيَّنَ',
        pattern: 'فَعَّلَ',
        meaning: {
          en: 'We have made pleasing/adorned',
          ur: 'ہم نے خوشنما بنایا',
        },
        grammarRole: 'khabar-inna',
        features: {
          aspect: 'perfect',
          person: '1st',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form II verb (intensification) + نَا (We). Predicate of إِنَّ as verbal sentence.',
          ur: 'باب تفعیل کا فعل (تکثیر) + نَا (ہم)۔ إنّ کی خبر جملہ فعلیہ۔',
        },
        advanced: {
          rootFamily: {
            root: 'ز ي ن',
            meaning: { en: 'to adorn, beautify', ur: 'سجانا، خوبصورت بنانا' },
            words: [
              { word: 'زَيَّنَ', meaning: { en: 'he adorned', ur: 'اس نے سجایا' } },
              { word: 'زِينَة', meaning: { en: 'adornment', ur: 'زینت' } },
              { word: 'مُزَيَّن', meaning: { en: 'adorned', ur: 'آراستہ' } },
            ],
          },
        },
      },
      {
        id: '27:4:7',
        position: 7,
        arabic: 'لَهُمْ',
        transliteration: 'lahum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'For them',
          ur: 'ان کے لیے',
        },
        grammarRole: 'jarr-majroor',
      },
      {
        id: '27:4:8',
        position: 8,
        arabic: 'أَعْمَالَهُمْ',
        transliteration: 'a\'maalahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع م ل',
        lemma: 'عَمَل',
        meaning: {
          en: 'Their deeds',
          ur: 'ان کے اعمال',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative. Plural of عَمَل + pronoun.',
          ur: 'مفعول بہ - منصوب۔ عَمَل کی جمع + ضمیر۔',
        },
      },
      {
        id: '27:4:9',
        position: 9,
        arabic: 'فَهُمْ',
        transliteration: 'fa-hum',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'So they',
          ur: 'پس وہ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'فَ (result) + هُم (pronoun) - subject of result clause.',
          ur: 'فَ (نتیجہ) + هُم (ضمیر) - نتیجے کے جملے کا مبتدأ۔',
        },
      },
      {
        id: '27:4:10',
        position: 10,
        arabic: 'يَعْمَهُونَ',
        transliteration: 'ya\'mahoona',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع م ه',
        lemma: 'عَمِهَ',
        meaning: {
          en: 'They wander blindly',
          ur: 'وہ بھٹکتے ہیں',
        },
        grammarRole: 'khabar',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Imperfect verb - to wander in confusion. Predicate of فَهُم.',
          ur: 'فعل مضارع - حیرت میں بھٹکنا۔ فَهُم کی خبر۔',
        },
        advanced: {
          rootFamily: {
            root: 'ع م ه',
            meaning: { en: 'to wander blindly, be confused', ur: 'اندھا دھند بھٹکنا' },
            words: [
              { word: 'عَمِهَ', meaning: { en: 'he wandered blindly', ur: 'وہ بھٹکا' } },
              { word: 'عَمَه', meaning: { en: 'blindness, confusion', ur: 'گمراہی' } },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'inna-sentence',
      components: [
        { type: 'ism-inna', word: 'الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ', role: 'subject' },
        { type: 'khabar-inna', word: 'زَيَّنَّا لَهُمْ أَعْمَالَهُمْ', role: 'predicate' },
        { type: 'natija', word: 'فَهُمْ يَعْمَهُونَ', role: 'consequence' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 2, to: 6, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 6, to: 8, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'مبتدأ + خبر' },
      ],
      explanation: {
        en: 'Those who disbelieve (subject), We adorned their deeds (predicate), so they wander (result)',
        ur: 'جو ایمان نہیں لاتے (مبتدأ)، ہم نے اعمال سجائے (خبر)، پس بھٹکتے ہیں (نتیجہ)',
      },
    },
  },

  5: { // Ayah 5: أُولَٰئِكَ الَّذِينَ لَهُمْ سُوءُ الْعَذَابِ وَهُمْ فِي الْآخِرَةِ هُمُ الْأَخْسَرُونَ
    text: 'أُولَٰئِكَ الَّذِينَ لَهُمْ سُوءُ الْعَذَابِ وَهُمْ فِي الْآخِرَةِ هُمُ الْأَخْسَرُونَ',
    translation: {
      en: 'Those are the ones for whom there will be the worst of punishment, and in the Hereafter they are the greatest losers.',
      ur: 'یہی لوگ ہیں جن کے لیے برا عذاب ہے اور آخرت میں وہی سب سے زیادہ خسارے میں ہیں',
    },
    words: [
      {
        id: '27:5:1',
        position: 1,
        arabic: 'أُولَٰئِكَ',
        transliteration: 'ulaa\'ika',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'Those',
          ur: 'یہی لوگ',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative pronoun for far (اسم إشارة للبعيد) - subject.',
          ur: 'اسم اشارہ للبعید - مبتدأ۔',
        },
      },
      {
        id: '27:5:2',
        position: 2,
        arabic: 'الَّذِينَ',
        transliteration: 'alladheena',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'The ones who',
          ur: 'جو لوگ',
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Relative pronoun (اسم موصول) - predicate of أُولَٰئِكَ.',
          ur: 'اسم موصول - أُولَٰئِكَ کی خبر۔',
        },
      },
      {
        id: '27:5:3',
        position: 3,
        arabic: 'لَهُمْ',
        transliteration: 'lahum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'For them',
          ur: 'ان کے لیے',
        },
        grammarRole: 'khabar-muqaddam',
        grammarExplanations: {
          en: 'Prepositional phrase - fronted predicate in صلة الموصول.',
          ur: 'جار مجرور - صلۃ الموصول میں خبر مقدم۔',
        },
      },
      {
        id: '27:5:4',
        position: 4,
        arabic: 'سُوءُ',
        transliteration: 'soo\'u',
        pos: ['N'],
        posLabel: 'N',
        root: 'س و أ',
        lemma: 'سُوء',
        meaning: {
          en: 'Worst/evil',
          ur: 'برائی',
        },
        grammarRole: 'mubtada-muakhkhar',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Delayed subject (مبتدأ مؤخر) - nominative. Also مضاف.',
          ur: 'مبتدأ مؤخر - مرفوع۔ مضاف بھی ہے۔',
        },
      },
      {
        id: '27:5:5',
        position: 5,
        arabic: 'الْعَذَابِ',
        transliteration: 'al-\'adhaabi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ذ ب',
        lemma: 'عَذَاب',
        meaning: {
          en: 'The punishment',
          ur: 'عذاب',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) - "worst OF the punishment".',
          ur: 'مضاف الیہ - مجرور: "عذاب کی برائی"۔',
        },
      },
      {
        id: '27:5:6',
        position: 6,
        arabic: 'وَهُمْ',
        transliteration: 'wa-hum',
        pos: ['CONJ', 'PRON'],
        posLabel: 'CONJ+PRON',
        root: null,
        meaning: {
          en: 'And they',
          ur: 'اور وہ',
        },
        grammarRole: 'mubtada',
      },
      {
        id: '27:5:7',
        position: 7,
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
        id: '27:5:8',
        position: 8,
        arabic: 'الْآخِرَةِ',
        transliteration: 'al-aakhirati',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ خ ر',
        lemma: 'آخِرَة',
        meaning: {
          en: 'The Hereafter',
          ur: 'آخرت',
        },
        grammarRole: 'majroor',
        case: 'majroor',
      },
      {
        id: '27:5:9',
        position: 9,
        arabic: 'هُمُ',
        transliteration: 'humu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہی',
        },
        grammarRole: 'tawkid',
        grammarExplanations: {
          en: 'Emphatic pronoun (ضمير فصل) - for emphasis.',
          ur: 'ضمیر فصل - تاکید کے لیے۔',
        },
      },
      {
        id: '27:5:10',
        position: 10,
        arabic: 'الْأَخْسَرُونَ',
        transliteration: 'al-akhsaroona',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ س ر',
        lemma: 'أَخْسَر',
        pattern: 'أَفْعَل',
        meaning: {
          en: 'The greatest losers',
          ur: 'سب سے زیادہ خسارے میں',
        },
        grammarRole: 'khabar',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Predicate (خبر) - nominative. Superlative (اسم تفضيل) plural.',
          ur: 'خبر - مرفوع۔ اسم تفضیل جمع۔',
        },
        advanced: {
          rootFamily: {
            root: 'خ س ر',
            meaning: { en: 'to lose, suffer loss', ur: 'خسارہ اٹھانا' },
            words: [
              { word: 'خَسِرَ', meaning: { en: 'he lost', ur: 'وہ خسارے میں رہا' } },
              { word: 'خُسْر', meaning: { en: 'loss', ur: 'خسارہ' } },
              { word: 'خَاسِر', meaning: { en: 'loser', ur: 'خسارہ اٹھانے والا' } },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'compound-nominal',
      components: [
        { type: 'jumla-1', word: 'أُولَٰئِكَ الَّذِينَ لَهُمْ سُوءُ الْعَذَابِ', role: 'first statement' },
        { type: 'jumla-2', word: 'وَهُمْ فِي الْآخِرَةِ هُمُ الْأَخْسَرُونَ', role: 'second statement' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 4, to: 3, label: 'مبتدأ + خبر' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 6, to: 10, label: 'مبتدأ + خبر' },
      ],
      explanation: {
        en: 'Those are the ones with worst punishment (1), and they are greatest losers (2)',
        ur: 'یہ لوگ برے عذاب والے ہیں (۱)، اور سب سے زیادہ خسارے میں ہیں (۲)',
      },
    },
  },

  6: { // Ayah 6: وَإِنَّكَ لَتُلَقَّى الْقُرْآنَ مِن لَّدُنْ حَكِيمٍ عَلِيمٍ
    text: 'وَإِنَّكَ لَتُلَقَّى الْقُرْآنَ مِن لَّدُنْ حَكِيمٍ عَلِيمٍ',
    translation: {
      en: 'And indeed, you receive the Quran from One Wise and Knowing.',
      ur: 'اور بیشک تم قرآن حکیم و علیم کی طرف سے عطا کیے جاتے ہو',
    },
    words: [
      {
        id: '27:6:1',
        position: 1,
        arabic: 'وَإِنَّكَ',
        transliteration: 'wa-innaka',
        pos: ['CONJ', 'EMPH', 'PRON'],
        posLabel: 'CONJ+EMPH+PRON',
        root: null,
        meaning: {
          en: 'And indeed you',
          ur: 'اور بیشک تم',
        },
        grammarRole: 'ism-inna',
        grammarExplanations: {
          en: 'وَ + إِنَّ + ك (2nd person pronoun) - subject of إِنَّ.',
          ur: 'وَ + إِنَّ + ک (ضمیر مخاطب) - اسم إنّ۔',
        },
      },
      {
        id: '27:6:2',
        position: 2,
        arabic: 'لَتُلَقَّى',
        transliteration: 'la-tulaqqaa',
        pos: ['EMPH', 'V'],
        posLabel: 'EMPH+V',
        root: 'ل ق ي',
        lemma: 'تَلَقَّى',
        pattern: 'تَفَعَّلَ',
        meaning: {
          en: 'Surely you receive',
          ur: 'یقیناً تم پاتے ہو',
        },
        grammarRole: 'khabar-inna',
        features: {
          aspect: 'imperfect',
          voice: 'passive',
          person: '2nd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'لَ (emphasis) + Form V passive verb - "you are made to receive".',
          ur: 'لَ (لام توکید) + باب تفعل کا مجہول - "تمہیں دیا جاتا ہے"۔',
        },
      },
      {
        id: '27:6:3',
        position: 3,
        arabic: 'الْقُرْآنَ',
        transliteration: 'al-Qur\'aana',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ر أ',
        lemma: 'قُرْآن',
        meaning: {
          en: 'The Quran',
          ur: 'قرآن',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative. What is being received.',
          ur: 'مفعول بہ - منصوب۔ جو کچھ ملتا ہے۔',
        },
      },
      {
        id: '27:6:4',
        position: 4,
        arabic: 'مِن',
        transliteration: 'min',
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
        id: '27:6:5',
        position: 5,
        arabic: 'لَّدُنْ',
        transliteration: 'ladun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ل د ن',
        lemma: 'لَدُن',
        meaning: {
          en: 'The presence of / from',
          ur: 'پاس سے',
        },
        grammarRole: 'mudaf',
        case: 'majroor',
        grammarExplanations: {
          en: 'ظرف مكان (locative) - means "from the presence of". مضاف.',
          ur: 'ظرف مکان - معنی "کے پاس سے"۔ مضاف۔',
        },
      },
      {
        id: '27:6:6',
        position: 6,
        arabic: 'حَكِيمٍ',
        transliteration: 'Hakeemin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ك م',
        lemma: 'حَكِيم',
        meaning: {
          en: 'Wise',
          ur: 'حکمت والا',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        grammarExplanations: {
          en: 'مضاف إليه - genitive. Divine attribute.',
          ur: 'مضاف الیہ - مجرور۔ صفت الٰہی۔',
        },
      },
      {
        id: '27:6:7',
        position: 7,
        arabic: 'عَلِيمٍ',
        transliteration: '\'Aleemin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ل م',
        lemma: 'عَلِيم',
        meaning: {
          en: 'Knowing',
          ur: 'علم والا',
        },
        grammarRole: 'sifa',
        case: 'majroor',
        grammarExplanations: {
          en: 'Adjective (صفة) for حَكِيم - genitive to match. Second divine attribute.',
          ur: 'صفت حَکِیم کی - موصوف کے مطابق مجرور۔ دوسری صفت الٰہی۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Paired Divine Names', ur: 'جوڑے والے اسماء الٰہی' },
            explanation: {
              en: 'حَكِيم عَلِيم - Wise AND Knowing. His commands are based on perfect wisdom and complete knowledge.',
              ur: 'حَکِیم عَلِیم - حکمت والا اور علم والا۔ اس کے احکام کامل حکمت اور مکمل علم پر مبنی ہیں۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'inna-sentence',
      components: [
        { type: 'ism-inna', word: 'ك', role: 'subject (you)' },
        { type: 'khabar-inna', word: 'لَتُلَقَّى الْقُرْآنَ مِن لَّدُنْ حَكِيمٍ عَلِيمٍ', role: 'predicate' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'موصوف + صفت' },
      ],
      explanation: {
        en: 'You (subject) receive Quran from One Wise, Knowing (predicate)',
        ur: 'تم (مبتدأ) قرآن حکیم علیم سے پاتے ہو (خبر)',
      },
    },
  },

  7: { // Ayah 7: إِذْ قَالَ مُوسَىٰ لِأَهْلِهِ إِنِّي آنَسْتُ نَارًا سَآتِيكُم مِّنْهَا بِخَبَرٍ أَوْ آتِيكُم بِشِهَابٍ قَبَسٍ لَّعَلَّكُمْ تَصْطَلُونَ
    text: 'إِذْ قَالَ مُوسَىٰ لِأَهْلِهِ إِنِّي آنَسْتُ نَارًا سَآتِيكُم مِّنْهَا بِخَبَرٍ أَوْ آتِيكُم بِشِهَابٍ قَبَسٍ لَّعَلَّكُمْ تَصْطَلُونَ',
    translation: {
      en: '[Mention] when Moses said to his family, "Indeed, I have perceived a fire. I will bring you from there information or bring you a burning torch that you may warm yourselves."',
      ur: 'جب موسیٰ نے اپنے گھر والوں سے کہا: میں نے آگ دیکھی ہے، میں تمہیں وہاں سے کچھ خبر لاؤں گا یا کوئی جلتا ہوا انگارہ لاؤں گا تاکہ تم تاپ سکو',
    },
    words: [
      {
        id: '27:7:1',
        position: 1,
        arabic: 'إِذْ',
        transliteration: 'idh',
        pos: ['T'],
        posLabel: 'T',
        root: null,
        meaning: {
          en: 'When',
          ur: 'جب',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Time particle (ظرف زمان) - introduces narrative.',
          ur: 'ظرف زمان - واقعہ بیان کرتا ہے۔',
        },
      },
      {
        id: '27:7:2',
        position: 2,
        arabic: 'قَالَ',
        transliteration: 'qaala',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        lemma: 'قَالَ',
        meaning: {
          en: 'Said',
          ur: 'کہا',
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
        id: '27:7:3',
        position: 3,
        arabic: 'مُوسَىٰ',
        transliteration: 'Moosaa',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        meaning: {
          en: 'Moses',
          ur: 'موسیٰ',
        },
        grammarRole: 'fail',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Subject (فاعل) - nominative. Foreign name, indeclinable.',
          ur: 'فاعل - مرفوع۔ عجمی نام، غیر منصرف۔',
        },
      },
      {
        id: '27:7:4',
        position: 4,
        arabic: 'لِأَهْلِهِ',
        transliteration: 'li-ahlihi',
        pos: ['P', 'N', 'PRON'],
        posLabel: 'P+N+PRON',
        root: 'أ ه ل',
        lemma: 'أَهْل',
        meaning: {
          en: 'To his family',
          ur: 'اپنے گھر والوں سے',
        },
        grammarRole: 'jarr-majroor',
        case: 'majroor',
        grammarExplanations: {
          en: 'لِ (to) + أَهْل (family) + ه (his). Addressees of speech.',
          ur: 'لِ (کو) + أَهْل (گھر والے) + ه (اس کے)۔ مخاطبین۔',
        },
      },
      {
        id: '27:7:5',
        position: 5,
        arabic: 'إِنِّي',
        transliteration: 'innee',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: {
          en: 'Indeed I',
          ur: 'بیشک میں',
        },
        grammarRole: 'ism-inna',
        grammarExplanations: {
          en: 'إِنَّ + ي (1st person pronoun) - beginning of quoted speech.',
          ur: 'إِنَّ + ی (ضمیر متکلم) - مقولہ قول کا آغاز۔',
        },
      },
      {
        id: '27:7:6',
        position: 6,
        arabic: 'آنَسْتُ',
        transliteration: 'aanastu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'أ ن س',
        lemma: 'آنَسَ',
        pattern: 'أَفْعَلَ',
        meaning: {
          en: 'I perceived/saw',
          ur: 'میں نے دیکھی',
        },
        grammarRole: 'khabar-inna',
        features: {
          aspect: 'perfect',
          person: '1st',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Form IV verb - to perceive, see from distance. Predicate of إِنِّي.',
          ur: 'باب افعال کا فعل - دور سے دیکھنا۔ إِنِّي کی خبر۔',
        },
      },
      {
        id: '27:7:7',
        position: 7,
        arabic: 'نَارًا',
        transliteration: 'naaran',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ر',
        lemma: 'نَار',
        meaning: {
          en: 'A fire',
          ur: 'آگ',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative. Indefinite.',
          ur: 'مفعول بہ - منصوب۔ نکرہ۔',
        },
      },
      {
        id: '27:7:8',
        position: 8,
        arabic: 'سَآتِيكُم',
        transliteration: 'sa-aateekum',
        pos: ['FUT', 'V', 'PRON'],
        posLabel: 'FUT+V+PRON',
        root: 'أ ت ي',
        lemma: 'أَتَى',
        meaning: {
          en: 'I will bring you',
          ur: 'میں تمہیں لاؤں گا',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperfect',
          person: '1st',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'سَ (future) + imperfect verb + كُم (you all) - promise.',
          ur: 'سَ (مستقبل) + فعل مضارع + کُم (تم سب) - وعدہ۔',
        },
      },
      {
        id: '27:7:9',
        position: 9,
        arabic: 'مِّنْهَا',
        transliteration: 'minhaa',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'From there/it',
          ur: 'وہاں سے',
        },
        grammarRole: 'jarr-majroor',
      },
      {
        id: '27:7:10',
        position: 10,
        arabic: 'بِخَبَرٍ',
        transliteration: 'bi-khabarin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'خ ب ر',
        lemma: 'خَبَر',
        meaning: {
          en: 'With news/information',
          ur: 'خبر',
        },
        grammarRole: 'jarr-majroor',
        case: 'majroor',
      },
      {
        id: '27:7:11',
        position: 11,
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
      },
      {
        id: '27:7:12',
        position: 12,
        arabic: 'آتِيكُم',
        transliteration: 'aateekum',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'أ ت ي',
        lemma: 'أَتَى',
        meaning: {
          en: 'I bring you',
          ur: 'میں لاتا ہوں تمہیں',
        },
        grammarRole: 'atf',
        features: {
          aspect: 'imperfect',
          person: '1st',
          number: 'singular',
        },
      },
      {
        id: '27:7:13',
        position: 13,
        arabic: 'بِشِهَابٍ',
        transliteration: 'bi-shihabin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ش ه ب',
        lemma: 'شِهَاب',
        meaning: {
          en: 'With a burning torch',
          ur: 'جلتے انگارے سے',
        },
        grammarRole: 'jarr-majroor',
        case: 'majroor',
      },
      {
        id: '27:7:14',
        position: 14,
        arabic: 'قَبَسٍ',
        transliteration: 'qabasin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ب س',
        lemma: 'قَبَس',
        meaning: {
          en: 'A firebrand/ember',
          ur: 'انگارہ',
        },
        grammarRole: 'badal',
        case: 'majroor',
        grammarExplanations: {
          en: 'Substitution (بدل) or adjective for شِهَاب - genitive.',
          ur: 'بدل یا شِهَاب کی صفت - مجرور۔',
        },
      },
      {
        id: '27:7:15',
        position: 15,
        arabic: 'لَّعَلَّكُمْ',
        transliteration: 'la\'allakum',
        pos: ['PART', 'PRON'],
        posLabel: 'PART+PRON',
        root: null,
        meaning: {
          en: 'That you may',
          ur: 'تاکہ تم',
        },
        grammarRole: 'taraji',
        grammarExplanations: {
          en: 'لَعَلَّ (hope/expectation) + كُم - introduces purpose.',
          ur: 'لَعَلَّ (توقع) + کُم - غرض بیان کرتی ہے۔',
        },
      },
      {
        id: '27:7:16',
        position: 16,
        arabic: 'تَصْطَلُونَ',
        transliteration: 'tastalloona',
        pos: ['V'],
        posLabel: 'V',
        root: 'ص ل ي',
        lemma: 'اِصْطَلَى',
        pattern: 'اِفْتَعَلَ',
        meaning: {
          en: 'You may warm yourselves',
          ur: 'تم تاپ سکو',
        },
        grammarRole: 'khabar-la\'alla',
        features: {
          aspect: 'imperfect',
          person: '2nd',
          gender: 'masculine',
          number: 'plural',
        },
        grammarExplanations: {
          en: 'Form VIII verb - to warm oneself by fire. Predicate of لَعَلَّ.',
          ur: 'باب افتعال کا فعل - آگ سے تاپنا۔ لَعَلَّ کی خبر۔',
        },
      },
    ],
    structure: {
      type: 'narrative-dialogue',
      components: [
        { type: 'zarf', word: 'إِذْ', role: 'time marker' },
        { type: 'qaala', word: 'قَالَ مُوسَىٰ لِأَهْلِهِ', role: 'speaker introduction' },
        { type: 'maqul', word: 'إِنِّي آنَسْتُ نَارًا...', role: 'speech content' },
      ],
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مبتدأ + خبر' },
        { from: 6, to: 7, label: 'فعل + مفعول به' },
        { from: 8, to: 12, label: 'عطف' },
        { from: 13, to: 14, label: 'بدل' },
      ],
      explanation: {
        en: 'When Moses said to family: I saw fire, will bring news or torch for warmth',
        ur: 'جب موسیٰ نے گھر والوں سے کہا: آگ دیکھی، خبر یا انگارہ لاؤں گا تاپنے کو',
      },
    },
  },

  8: { // Ayah 8: فَلَمَّا جَاءَهَا نُودِيَ أَن بُورِكَ مَن فِي النَّارِ وَمَنْ حَوْلَهَا وَسُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ
    text: 'فَلَمَّا جَاءَهَا نُودِيَ أَن بُورِكَ مَن فِي النَّارِ وَمَنْ حَوْلَهَا وَسُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ',
    translation: {
      en: 'But when he came to it, he was called, "Blessed is whoever is at the fire and whoever is around it. And exalted is Allah, Lord of the worlds."',
      ur: 'پھر جب وہ اس کے پاس آیا تو آواز آئی کہ بابرکت ہے جو آگ میں ہے اور جو اس کے ارد گرد ہے، اور پاک ہے اللہ جو رب العالمین ہے',
    },
    words: [
      {
        id: '27:8:1',
        position: 1,
        arabic: 'فَلَمَّا',
        transliteration: 'fa-lammaa',
        pos: ['CONJ', 'T'],
        posLabel: 'CONJ+T',
        root: null,
        meaning: {
          en: 'But when',
          ur: 'پھر جب',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'فَ (then) + لَمَّا (when) - temporal conjunction for completed action.',
          ur: 'فَ (پھر) + لَمَّا (جب) - مکمل فعل کے لیے ظرف زمان۔',
        },
      },
      {
        id: '27:8:2',
        position: 2,
        arabic: 'جَاءَهَا',
        transliteration: 'jaa\'ahaa',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ج ي أ',
        lemma: 'جَاءَ',
        meaning: {
          en: 'He came to it',
          ur: 'وہ اس کے پاس آیا',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Perfect verb + هَا (it - the fire). Condition of لَمَّا.',
          ur: 'فعل ماضی + هَا (آگ)۔ لَمَّا کا شرط۔',
        },
      },
      {
        id: '27:8:3',
        position: 3,
        arabic: 'نُودِيَ',
        transliteration: 'noodiya',
        pos: ['V'],
        posLabel: 'V',
        root: 'ن د و',
        lemma: 'نَادَى',
        meaning: {
          en: 'He was called',
          ur: 'پکارا گیا',
        },
        grammarRole: 'jawab-lamma',
        features: {
          aspect: 'perfect',
          voice: 'passive',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Passive voice Form III - "he was called". Answer of لَمَّا.',
          ur: 'باب مفاعلہ کا مجہول - "پکارا گیا"۔ لَمَّا کا جواب۔',
        },
      },
      {
        id: '27:8:4',
        position: 4,
        arabic: 'أَن',
        transliteration: 'an',
        pos: ['PART'],
        posLabel: 'PART',
        root: null,
        meaning: {
          en: 'That',
          ur: 'کہ',
        },
        grammarRole: 'tafsiiriyyah',
        grammarExplanations: {
          en: 'أن التفسيرية - introduces the content of the call.',
          ur: 'أن تفسیریہ - پکار کا مضمون بیان کرتی ہے۔',
        },
      },
      {
        id: '27:8:5',
        position: 5,
        arabic: 'بُورِكَ',
        transliteration: 'boorika',
        pos: ['V'],
        posLabel: 'V',
        root: 'ب ر ك',
        lemma: 'بَارَكَ',
        pattern: 'فَاعَلَ',
        meaning: {
          en: 'Blessed is',
          ur: 'بابرکت ہے',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'perfect',
          voice: 'passive',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Passive Form III - "is blessed". Divine blessing.',
          ur: 'باب مفاعلہ کا مجہول - "برکت دی گئی"۔ الٰہی برکت۔',
        },
        advanced: {
          rootFamily: {
            root: 'ب ر ك',
            meaning: { en: 'to bless, be blessed', ur: 'برکت دینا' },
            words: [
              { word: 'بَارَكَ', meaning: { en: 'he blessed', ur: 'اس نے برکت دی' } },
              { word: 'بَرَكَة', meaning: { en: 'blessing', ur: 'برکت' } },
              { word: 'مُبَارَك', meaning: { en: 'blessed', ur: 'مبارک' } },
            ],
          },
        },
      },
      {
        id: '27:8:6',
        position: 6,
        arabic: 'مَن',
        transliteration: 'man',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'Whoever',
          ur: 'جو',
        },
        grammarRole: 'naib-fail',
        grammarExplanations: {
          en: 'Relative pronoun (اسم موصول) - deputy subject of passive verb.',
          ur: 'اسم موصول - مجہول فعل کا نائب فاعل۔',
        },
      },
      {
        id: '27:8:7',
        position: 7,
        arabic: 'فِي',
        transliteration: 'fee',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'In/at',
          ur: 'میں',
        },
        grammarRole: 'jarr',
      },
      {
        id: '27:8:8',
        position: 8,
        arabic: 'النَّارِ',
        transliteration: 'an-naari',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ر',
        lemma: 'نَار',
        meaning: {
          en: 'The fire',
          ur: 'آگ',
        },
        grammarRole: 'majroor',
        case: 'majroor',
      },
      {
        id: '27:8:9',
        position: 9,
        arabic: 'وَمَنْ',
        transliteration: 'wa-man',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: {
          en: 'And whoever',
          ur: 'اور جو',
        },
        grammarRole: 'atf',
      },
      {
        id: '27:8:10',
        position: 10,
        arabic: 'حَوْلَهَا',
        transliteration: 'hawlahaa',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ح و ل',
        lemma: 'حَوْل',
        meaning: {
          en: 'Around it',
          ur: 'اس کے ارد گرد',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Adverb of place (ظرف مكان) + pronoun. Refers to angels around the fire.',
          ur: 'ظرف مکان + ضمیر۔ آگ کے گرد فرشتوں کی طرف اشارہ۔',
        },
      },
      {
        id: '27:8:11',
        position: 11,
        arabic: 'وَسُبْحَانَ',
        transliteration: 'wa-subhaana',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'س ب ح',
        lemma: 'سُبْحَان',
        meaning: {
          en: 'And glory be to',
          ur: 'اور پاک ہے',
        },
        grammarRole: 'mafool-mutlaq',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Accusative - absolute object (مفعول مطلق). مضاف also.',
          ur: 'منصوب - مفعول مطلق۔ مضاف بھی۔',
        },
      },
      {
        id: '27:8:12',
        position: 12,
        arabic: 'اللَّهِ',
        transliteration: 'Allaahi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        lemma: 'الله',
        meaning: {
          en: 'Allah',
          ur: 'اللہ',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
      },
      {
        id: '27:8:13',
        position: 13,
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        lemma: 'رَبّ',
        meaning: {
          en: 'Lord',
          ur: 'رب',
        },
        grammarRole: 'badal',
        case: 'majroor',
        grammarExplanations: {
          en: 'Substitution (بدل) or apposition for الله - genitive. Also مضاف.',
          ur: 'بدل یا عطف بیان الله سے - مجرور۔ مضاف بھی۔',
        },
      },
      {
        id: '27:8:14',
        position: 14,
        arabic: 'الْعَالَمِينَ',
        transliteration: 'al-\'aalameena',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ل م',
        lemma: 'عَالَم',
        meaning: {
          en: 'The worlds',
          ur: 'جہانوں کا',
        },
        grammarRole: 'mudaf-ilayhi',
        case: 'majroor',
        grammarExplanations: {
          en: 'مضاف إليه - genitive masculine plural.',
          ur: 'مضاف الیہ - مجرور جمع مذکر۔',
        },
      },
    ],
    structure: {
      type: 'narrative-with-speech',
      components: [
        { type: 'shart', word: 'فَلَمَّا جَاءَهَا', role: 'when he arrived' },
        { type: 'jawab', word: 'نُودِيَ', role: 'he was called' },
        { type: 'maqul', word: 'أَن بُورِكَ مَن...وَسُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ', role: 'content of call' },
      ],
      relationships: [
        { from: 2, to: 3, label: 'شرط + جواب' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'بدل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
      ],
      explanation: {
        en: 'When he came (condition), he was called (result): blessed is whoever there, glory to Allah',
        ur: 'جب آیا (شرط)، پکارا گیا (جواب): مبارک ہے جو وہاں ہے، اللہ پاک ہے',
      },
    },
  },

  9: { // Ayah 9: يَا مُوسَىٰ إِنَّهُ أَنَا اللَّهُ الْعَزِيزُ الْحَكِيمُ
    text: 'يَا مُوسَىٰ إِنَّهُ أَنَا اللَّهُ الْعَزِيزُ الْحَكِيمُ',
    translation: {
      en: 'O Moses, indeed it is I - Allah, the Exalted in Might, the Wise.',
      ur: 'اے موسیٰ! بیشک میں ہی اللہ ہوں، غالب، حکمت والا',
    },
    words: [
      {
        id: '27:9:1',
        position: 1,
        arabic: 'يَا',
        transliteration: 'yaa',
        pos: ['VOC'],
        posLabel: 'VOC',
        root: null,
        meaning: {
          en: 'O',
          ur: 'اے',
        },
        grammarRole: 'nidaa',
        grammarExplanations: {
          en: 'Vocative particle (حرف نداء) - for calling someone.',
          ur: 'حرف ندا - کسی کو پکارنے کے لیے۔',
        },
      },
      {
        id: '27:9:2',
        position: 2,
        arabic: 'مُوسَىٰ',
        transliteration: 'Moosaa',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        meaning: {
          en: 'Moses',
          ur: 'موسیٰ',
        },
        grammarRole: 'munada',
        grammarExplanations: {
          en: 'Called one (منادى) - indeclinable proper noun.',
          ur: 'منادیٰ - علم غیر منصرف۔',
        },
      },
      {
        id: '27:9:3',
        position: 3,
        arabic: 'إِنَّهُ',
        transliteration: 'innahu',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: {
          en: 'Indeed it is',
          ur: 'بیشک یہ',
        },
        grammarRole: 'ism-inna',
        grammarExplanations: {
          en: 'إِنَّ + ه (pronoun of affair ضمير الشأن) - emphasizes what follows.',
          ur: 'إِنَّ + ه (ضمیر شان) - آگے والے پر زور۔',
        },
      },
      {
        id: '27:9:4',
        position: 4,
        arabic: 'أَنَا',
        transliteration: 'ana',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'I',
          ur: 'میں',
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'First person singular pronoun - subject in khabar of إِنَّ.',
          ur: 'ضمیر متکلم واحد - خبر إِنَّ میں مبتدأ۔',
        },
      },
      {
        id: '27:9:5',
        position: 5,
        arabic: 'اللَّهُ',
        transliteration: 'Allaahu',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        lemma: 'الله',
        meaning: {
          en: 'Allah',
          ur: 'اللہ',
        },
        grammarRole: 'khabar',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Predicate (خبر) of أَنَا - nominative. The supreme divine name.',
          ur: 'خبر أَنَا - مرفوع۔ اسم اعظم۔',
        },
      },
      {
        id: '27:9:6',
        position: 6,
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
        grammarRole: 'sifa',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Adjective (صفة) for الله - nominative. Divine attribute.',
          ur: 'صفت الله کی - مرفوع۔ صفت الٰہی۔',
        },
      },
      {
        id: '27:9:7',
        position: 7,
        arabic: 'الْحَكِيمُ',
        transliteration: 'al-Hakeemu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ك م',
        lemma: 'حَكِيم',
        meaning: {
          en: 'The Wise',
          ur: 'حکمت والا',
        },
        grammarRole: 'sifa',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Second adjective for الله - nominative. Perfect wisdom.',
          ur: 'دوسری صفت الله کی - مرفوع۔ کامل حکمت۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Divine Self-Introduction', ur: 'الٰہی تعارف' },
            explanation: {
              en: 'Allah introduces Himself with العَزِيز (power) and الحَكِيم (wisdom) - combining strength with wisdom for Moses\' mission ahead.',
              ur: 'اللہ اپنا تعارف العَزِیز (طاقت) اور الحَکِیم (حکمت) سے کراتا ہے - موسیٰ کے مشن کے لیے طاقت اور حکمت کا امتزاج۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'vocative-declaration',
      components: [
        { type: 'nidaa', word: 'يَا مُوسَىٰ', role: 'calling Moses' },
        { type: 'tawkid', word: 'إِنَّهُ', role: 'emphasis' },
        { type: 'tasrih', word: 'أَنَا اللَّهُ الْعَزِيزُ الْحَكِيمُ', role: 'divine declaration' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'نداء' },
        { from: 4, to: 5, label: 'مبتدأ + خبر' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 5, to: 7, label: 'موصوف + صفت' },
      ],
      explanation: {
        en: 'O Moses (call), indeed I am Allah, Mighty, Wise (declaration)',
        ur: 'اے موسیٰ (ندا)، بیشک میں اللہ ہوں غالب حکیم (اعلان)',
      },
    },
  },

  10: { // Ayah 10: وَأَلْقِ عَصَاكَ فَلَمَّا رَآهَا تَهْتَزُّ كَأَنَّهَا جَانٌّ وَلَّىٰ مُدْبِرًا وَلَمْ يُعَقِّبْ يَا مُوسَىٰ لَا تَخَفْ إِنِّي لَا يَخَافُ لَدَيَّ الْمُرْسَلُونَ
    text: 'وَأَلْقِ عَصَاكَ فَلَمَّا رَآهَا تَهْتَزُّ كَأَنَّهَا جَانٌّ وَلَّىٰ مُدْبِرًا وَلَمْ يُعَقِّبْ يَا مُوسَىٰ لَا تَخَفْ إِنِّي لَا يَخَافُ لَدَيَّ الْمُرْسَلُونَ',
    translation: {
      en: 'And throw down your staff." But when he saw it writhing as if it were a snake, he turned in flight and did not return. "O Moses, fear not. Indeed, in My presence the messengers do not fear."',
      ur: 'اور اپنا عصا پھینک دو۔ پھر جب اسے دیکھا کہ سانپ کی طرح لہرا رہا ہے تو پیٹھ پھیر کر بھاگا اور پلٹ کر نہ دیکھا۔ اے موسیٰ! خوف نہ کرو، میرے پاس رسول خوف نہیں کرتے',
    },
    words: [
      {
        id: '27:10:1',
        position: 1,
        arabic: 'وَأَلْقِ',
        transliteration: 'wa-alqi',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ل ق ي',
        lemma: 'أَلْقَى',
        pattern: 'أَفْعَلَ',
        meaning: {
          en: 'And throw',
          ur: 'اور پھینک دو',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperative',
          person: '2nd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Form IV imperative - to throw/cast. Command to Moses.',
          ur: 'باب افعال کا فعل امر - پھینکنا۔ موسیٰ کو حکم۔',
        },
      },
      {
        id: '27:10:2',
        position: 2,
        arabic: 'عَصَاكَ',
        transliteration: '\'asaaka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ص و',
        lemma: 'عَصَا',
        meaning: {
          en: 'Your staff',
          ur: 'تمہارا عصا',
        },
        grammarRole: 'mafool-bihi',
        case: 'mansoob',
        grammarExplanations: {
          en: 'Object (مفعول به) - accusative. عَصَا + ك (your).',
          ur: 'مفعول بہ - منصوب۔ عَصَا + ک (تمہارا)۔',
        },
      },
      {
        id: '27:10:3',
        position: 3,
        arabic: 'فَلَمَّا',
        transliteration: 'fa-lammaa',
        pos: ['CONJ', 'T'],
        posLabel: 'CONJ+T',
        root: null,
        meaning: {
          en: 'But when',
          ur: 'پھر جب',
        },
        grammarRole: 'zarf',
      },
      {
        id: '27:10:4',
        position: 4,
        arabic: 'رَآهَا',
        transliteration: 'ra\'aahaa',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ر أ ي',
        lemma: 'رَأَى',
        meaning: {
          en: 'He saw it',
          ur: 'اس نے اسے دیکھا',
        },
        grammarRole: 'shart-lamma',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Perfect verb + هَا (it - the staff). Condition of لَمَّا.',
          ur: 'فعل ماضی + هَا (عصا)۔ لَمَّا کا شرط۔',
        },
      },
      {
        id: '27:10:5',
        position: 5,
        arabic: 'تَهْتَزُّ',
        transliteration: 'tahtazzu',
        pos: ['V'],
        posLabel: 'V',
        root: 'ه ز ز',
        lemma: 'اِهْتَزَّ',
        pattern: 'اِفْتَعَلَ',
        meaning: {
          en: 'It was moving/writhing',
          ur: 'لہرا رہا تھا',
        },
        grammarRole: 'hal',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'feminine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Form VIII verb - to shake, move. State (حال) describing the staff.',
          ur: 'باب افتعال کا فعل - ہلنا۔ حال عصا کی کیفیت بیان کرتا ہے۔',
        },
      },
      {
        id: '27:10:6',
        position: 6,
        arabic: 'كَأَنَّهَا',
        transliteration: 'ka-annahaa',
        pos: ['PART', 'PRON'],
        posLabel: 'PART+PRON',
        root: null,
        meaning: {
          en: 'As if it were',
          ur: 'گویا یہ',
        },
        grammarRole: 'tashbih',
        grammarExplanations: {
          en: 'كَأَنَّ (as if) + هَا (it) - simile particle with attached pronoun.',
          ur: 'کَأَنَّ (گویا) + هَا (یہ) - حرف تشبیہ مع ضمیر۔',
        },
      },
      {
        id: '27:10:7',
        position: 7,
        arabic: 'جَانٌّ',
        transliteration: 'jaann',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ن ن',
        lemma: 'جَانّ',
        meaning: {
          en: 'A snake (small, fast-moving)',
          ur: 'سانپ',
        },
        grammarRole: 'khabar-kaanna',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Predicate of كَأَنَّ - nominative. Refers to a quick, agile snake.',
          ur: 'خبر کَأَنَّ - مرفوع۔ تیز رفتار سانپ مراد ہے۔',
        },
      },
      {
        id: '27:10:8',
        position: 8,
        arabic: 'وَلَّىٰ',
        transliteration: 'wallaa',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ل ي',
        lemma: 'وَلَّى',
        pattern: 'فَعَّلَ',
        meaning: {
          en: 'He turned away',
          ur: 'وہ پھر گیا',
        },
        grammarRole: 'jawab-lamma',
        features: {
          aspect: 'perfect',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Form II verb - to turn away, flee. Answer of لَمَّا.',
          ur: 'باب تفعیل کا فعل - پھرنا، بھاگنا۔ لَمَّا کا جواب۔',
        },
      },
      {
        id: '27:10:9',
        position: 9,
        arabic: 'مُدْبِرًا',
        transliteration: 'mudbiran',
        pos: ['N'],
        posLabel: 'N',
        root: 'د ب ر',
        lemma: 'مُدْبِر',
        pattern: 'مُفْعِل',
        meaning: {
          en: 'In flight/retreating',
          ur: 'پیٹھ پھیر کر',
        },
        grammarRole: 'hal',
        case: 'mansoob',
        grammarExplanations: {
          en: 'State (حال) - accusative. Active participle Form IV.',
          ur: 'حال - منصوب۔ باب افعال کا اسم فاعل۔',
        },
      },
      {
        id: '27:10:10',
        position: 10,
        arabic: 'وَلَمْ',
        transliteration: 'wa-lam',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And did not',
          ur: 'اور نہیں',
        },
        grammarRole: 'nafi',
      },
      {
        id: '27:10:11',
        position: 11,
        arabic: 'يُعَقِّبْ',
        transliteration: 'yu\'aqqib',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ق ب',
        lemma: 'عَقَّبَ',
        pattern: 'فَعَّلَ',
        meaning: {
          en: 'He returned/looked back',
          ur: 'پلٹ کر دیکھا',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperfect',
          mood: 'jussive',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Form II verb - to follow up, return. Jussive because of لَمْ.',
          ur: 'باب تفعیل کا فعل - پلٹنا۔ لَمْ کی وجہ سے مجزوم۔',
        },
      },
      {
        id: '27:10:12',
        position: 12,
        arabic: 'يَا',
        transliteration: 'yaa',
        pos: ['VOC'],
        posLabel: 'VOC',
        root: null,
        meaning: {
          en: 'O',
          ur: 'اے',
        },
        grammarRole: 'nidaa',
      },
      {
        id: '27:10:13',
        position: 13,
        arabic: 'مُوسَىٰ',
        transliteration: 'Moosaa',
        pos: ['PN'],
        posLabel: 'PN',
        root: null,
        meaning: {
          en: 'Moses',
          ur: 'موسیٰ',
        },
        grammarRole: 'munada',
      },
      {
        id: '27:10:14',
        position: 14,
        arabic: 'لَا',
        transliteration: 'laa',
        pos: ['PROH'],
        posLabel: 'PROH',
        root: null,
        meaning: {
          en: 'Do not',
          ur: 'مت',
        },
        grammarRole: 'nahi',
        grammarExplanations: {
          en: 'Prohibitive لَا (لا الناهية) - with jussive verb.',
          ur: 'لا ناہیہ - فعل مضارع مجزوم کے ساتھ۔',
        },
      },
      {
        id: '27:10:15',
        position: 15,
        arabic: 'تَخَفْ',
        transliteration: 'takhaf',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ و ف',
        lemma: 'خَافَ',
        meaning: {
          en: 'Fear',
          ur: 'ڈرو',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperfect',
          mood: 'jussive',
          person: '2nd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Imperfect verb, jussive because of لَا الناهية.',
          ur: 'فعل مضارع مجزوم لَا ناہیہ کی وجہ سے۔',
        },
      },
      {
        id: '27:10:16',
        position: 16,
        arabic: 'إِنِّي',
        transliteration: 'innee',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: {
          en: 'Indeed I',
          ur: 'بیشک میں',
        },
        grammarRole: 'ism-inna',
      },
      {
        id: '27:10:17',
        position: 17,
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
      },
      {
        id: '27:10:18',
        position: 18,
        arabic: 'يَخَافُ',
        transliteration: 'yakhafu',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ و ف',
        lemma: 'خَافَ',
        meaning: {
          en: 'Fear',
          ur: 'خوف کرتے ہیں',
        },
        grammarRole: 'verb',
        features: {
          aspect: 'imperfect',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
      },
      {
        id: '27:10:19',
        position: 19,
        arabic: 'لَدَيَّ',
        transliteration: 'ladayya',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ل د ي',
        lemma: 'لَدَى',
        meaning: {
          en: 'In My presence',
          ur: 'میرے پاس',
        },
        grammarRole: 'zarf',
        grammarExplanations: {
          en: 'Locative (ظرف مكان) + يَ (My) - "in My presence".',
          ur: 'ظرف مکان + یَ (میرے) - "میرے پاس"۔',
        },
      },
      {
        id: '27:10:20',
        position: 20,
        arabic: 'الْمُرْسَلُونَ',
        transliteration: 'al-mursaloona',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر س ل',
        lemma: 'مُرْسَل',
        pattern: 'مُفْعَل',
        meaning: {
          en: 'The messengers',
          ur: 'رسول',
        },
        grammarRole: 'fail',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Subject (فاعل) - nominative masculine plural. Passive participle.',
          ur: 'فاعل - مرفوع جمع مذکر۔ اسم مفعول۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Divine Reassurance', ur: 'الٰہی اطمینان' },
            explanation: {
              en: 'Allah reassures Moses that messengers (رسل) do not fear in His presence - a promise of divine protection.',
              ur: 'اللہ موسیٰ کو اطمینان دلاتا ہے کہ رسول اس کے پاس خوف نہیں کرتے - الٰہی حفاظت کا وعدہ۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'narrative-with-dialogue',
      components: [
        { type: 'amr', word: 'وَأَلْقِ عَصَاكَ', role: 'command to throw staff' },
        { type: 'shart', word: 'فَلَمَّا رَآهَا تَهْتَزُّ كَأَنَّهَا جَانٌّ', role: 'when he saw it' },
        { type: 'jawab', word: 'وَلَّىٰ مُدْبِرًا وَلَمْ يُعَقِّبْ', role: 'he fled' },
        { type: 'nidaa', word: 'يَا مُوسَىٰ لَا تَخَفْ', role: 'divine call' },
        { type: 'talil', word: 'إِنِّي لَا يَخَافُ لَدَيَّ الْمُرْسَلُونَ', role: 'reason' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 8, label: 'شرط + جواب' },
        { from: 4, to: 5, label: 'حال' },
        { from: 8, to: 9, label: 'حال' },
        { from: 10, to: 11, label: 'نفی + فعل' },
        { from: 12, to: 13, label: 'نداء' },
        { from: 14, to: 15, label: 'نفی + فعل' },
        { from: 17, to: 18, label: 'نفی + فعل' },
        { from: 18, to: 20, label: 'فعل + فاعل' },
      ],
      explanation: {
        en: 'Throw staff (command), when saw snake fled (narrative), do not fear - messengers safe (reassurance)',
        ur: 'عصا پھینکو (حکم)، سانپ دیکھ کر بھاگا (واقعہ)، خوف نہ کرو - رسول محفوظ ہیں (اطمینان)',
      },
    },
  },

  11: {
    text: "إِلَّا مَن ظَلَمَ ثُمَّ بَدَّلَ حُسْنًۢا بَعْدَ سُوٓءٍۢ فَإِنِّى غَفُورٌۭ رَّحِيمٌۭ",
    translation: {
      en: "",
      ur: "ہاں جس نے ظلم کیا پھر برائی کے بعد اسے نیکی سے بدل دیا تو میں بخشنے والا مہربان ہوں",
    },
    words: [
      { id: '27:11:1', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Except", ur: "سوائے" } },
      { id: '27:11:2', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '27:11:3', arabic: "ظَلَمَ", transliteration: "ẓalama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wrongs", ur: "wrongs" } },
      { id: '27:11:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '27:11:5', arabic: "بَدَّلَ", transliteration: "baddala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "substitutes", ur: "substitutes" } },
      { id: '27:11:6', arabic: "حُسْنًۢا", transliteration: "ḥus'nan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '27:11:7', arabic: "بَعْدَ", transliteration: "baʿda", pos: ['N'], posLabel: 'N', root: "ب ع د", meaning: { en: "after", ur: "بعد" } },
      { id: '27:11:8', arabic: "سُوٓءٍۢ", transliteration: "sūin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evil", ur: "برا" } },
      { id: '27:11:9', arabic: "فَإِنِّى", transliteration: "fa-innī", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed, I Am", ur: "پھر بیشک, میں Am" } },
      { id: '27:11:10', arabic: "غَفُورٌۭ", transliteration: "ghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Oft-Forgiving", ur: "Oft-Forgiving" } },
      { id: '27:11:11', arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
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
  12: {
    text: "وَأَدْخِلْ يَدَكَ فِى جَيْبِكَ تَخْرُجْ بَيْضَآءَ مِنْ غَيْرِ سُوٓءٍۢ ۖ فِى تِسْعِ ءَايَـٰتٍ إِلَىٰ فِرْعَوْنَ وَقَوْمِهِۦٓ ۚ إِنَّهُمْ كَانُوا۟ قَوْمًۭا فَـٰسِقِينَ",
    translation: {
      en: "",
      ur: "اور اپنا ہاتھ اپنے گریبان میں ڈالو سفید نکلے گا۔ (ان دو معجزوں کے ساتھ جو) نو معجزوں میں (داخل ہیں) فرعون اور اس کی قوم کے پاس جاؤ کہ وہ بےحکم لوگ ہیں",
    },
    words: [
      { id: '27:12:1', arabic: "وَأَدْخِلْ", transliteration: "wa-adkhil", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And enter", ur: "اور enter" } },
      { id: '27:12:2', arabic: "يَدَكَ", transliteration: "yadaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "your hand", ur: "your hand" } },
      { id: '27:12:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "into", ur: "into" } },
      { id: '27:12:4', arabic: "جَيْبِكَ", transliteration: "jaybika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your bosom", ur: "your bosom" } },
      { id: '27:12:5', arabic: "تَخْرُجْ", transliteration: "takhruj", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it will come forth", ur: "it will come forth" } },
      { id: '27:12:6', arabic: "بَيْضَآءَ", transliteration: "bayḍāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "white", ur: "white" } },
      { id: '27:12:7', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "without", ur: "without" } },
      { id: '27:12:8', arabic: "غَيْرِ", transliteration: "ghayri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "without", ur: "without" } },
      { id: '27:12:9', arabic: "سُوٓءٍۢ ۖ", transliteration: "sūin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "harm", ur: "harm" } },
      { id: '27:12:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(These are) among", ur: "(These are) among" } },
      { id: '27:12:11', arabic: "تِسْعِ", transliteration: "tis'ʿi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nine", ur: "nine" } },
      { id: '27:12:12', arabic: "ءَايَـٰتٍ", transliteration: "āyātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "signs", ur: "نشانیاں" } },
      { id: '27:12:13', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '27:12:14', arabic: "فِرْعَوْنَ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Firaun", ur: "Firaun" } },
      { id: '27:12:15', arabic: "وَقَوْمِهِۦٓ ۚ", transliteration: "waqawmihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "and his people", ur: "اور his لوگ" } },
      { id: '27:12:16', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '27:12:17', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "are", ur: "are" } },
      { id: '27:12:18', arabic: "قَوْمًۭا", transliteration: "qawman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '27:12:19', arabic: "فَـٰسِقِينَ", transliteration: "fāsiqīna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "defiantly disobedient", ur: "defiantly disobedient" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'جار + مجرور' }
      ],
    },
  },
  13: {
    text: "فَلَمَّا جَآءَتْهُمْ ءَايَـٰتُنَا مُبْصِرَةًۭ قَالُوا۟ هَـٰذَا سِحْرٌۭ مُّبِينٌۭ",
    translation: {
      en: "",
      ur: "جب ان کے پاس ہماری روشن نشانیاں پہنچیں، کہنے لگے یہ صریح جادو ہے",
    },
    words: [
      { id: '27:13:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '27:13:2', arabic: "جَآءَتْهُمْ", transliteration: "jāathum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came to them", ur: "came کو them" } },
      { id: '27:13:3', arabic: "ءَايَـٰتُنَا", transliteration: "āyātunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '27:13:4', arabic: "مُبْصِرَةًۭ", transliteration: "mub'ṣiratan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "visible", ur: "visible" } },
      { id: '27:13:5', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '27:13:6', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '27:13:7', arabic: "سِحْرٌۭ", transliteration: "siḥ'run", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a magic", ur: "(is) a magic" } },
      { id: '27:13:8', arabic: "مُّبِينٌۭ", transliteration: "mubīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  14: {
    text: "وَجَحَدُوا۟ بِهَا وَٱسْتَيْقَنَتْهَآ أَنفُسُهُمْ ظُلْمًۭا وَعُلُوًّۭا ۚ فَٱنظُرْ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُفْسِدِينَ",
    translation: {
      en: "",
      ur: "اور بےانصافی اور غرور سے ان سے انکار کیا لیکن ان کے دل ان کو مان چکے تھے۔ سو دیکھ لو فساد کرنے والوں کا انجام کیسا ہوا",
    },
    words: [
      { id: '27:14:1', arabic: "وَجَحَدُوا۟", transliteration: "wajaḥadū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they rejected", ur: "اور وہ لوگ rejected" } },
      { id: '27:14:2', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "them", ur: "them" } },
      { id: '27:14:3', arabic: "وَٱسْتَيْقَنَتْهَآ", transliteration: "wa-is'tayqanathā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "though were convinced with them (signs)", ur: "though were convinced ساتھ them (نشانیاں)" } },
      { id: '27:14:4', arabic: "أَنفُسُهُمْ", transliteration: "anfusuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "themselves", ur: "themselves" } },
      { id: '27:14:5', arabic: "ظُلْمًۭا", transliteration: "ẓul'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(out of) injustice", ur: "(out of) injustice" } },
      { id: '27:14:6', arabic: "وَعُلُوًّۭا ۚ", transliteration: "waʿuluwwan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and haughtiness", ur: "اور haughtiness" } },
      { id: '27:14:7', arabic: "فَٱنظُرْ", transliteration: "fa-unẓur", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So see", ur: "So دیکھنا" } },
      { id: '27:14:8', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '27:14:9', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '27:14:10', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) end", ur: "(the) end" } },
      { id: '27:14:11', arabic: "ٱلْمُفْسِدِينَ", transliteration: "l-muf'sidīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the corrupters", ur: "(of) the corrupters" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  15: {
    text: "وَلَقَدْ ءَاتَيْنَا دَاوُۥدَ وَسُلَيْمَـٰنَ عِلْمًۭا ۖ وَقَالَا ٱلْحَمْدُ لِلَّهِ ٱلَّذِى فَضَّلَنَا عَلَىٰ كَثِيرٍۢ مِّنْ عِبَادِهِ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے داؤد اور سلیمان کو علم بخشا اور انہوں نے کہا کہ خدا کا شکر ہے جس نے ہمیں بہت سے مومن بندوں پر فضلیت دی",
    },
    words: [
      { id: '27:15:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And verily", ur: "اور بیشک" } },
      { id: '27:15:2', arabic: "ءَاتَيْنَا", transliteration: "ātaynā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We gave", ur: "ہم gave" } },
      { id: '27:15:3', arabic: "دَاوُۥدَ", transliteration: "dāwūda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Dawood", ur: "Dawood" } },
      { id: '27:15:4', arabic: "وَسُلَيْمَـٰنَ", transliteration: "wasulaymāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Sulaiman", ur: "اور Sulaiman" } },
      { id: '27:15:5', arabic: "عِلْمًۭا ۖ", transliteration: "ʿil'man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "knowledge", ur: "knowledge" } },
      { id: '27:15:6', arabic: "وَقَالَا", transliteration: "waqālā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and they said", ur: "اور وہ لوگ کہا" } },
      { id: '27:15:7', arabic: "ٱلْحَمْدُ", transliteration: "l-ḥamdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Praise be", ur: "Praise be" } },
      { id: '27:15:8', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '27:15:9', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '27:15:10', arabic: "فَضَّلَنَا", transliteration: "faḍḍalanā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "has favored us", ur: "has favored us" } },
      { id: '27:15:11', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "over", ur: "اوپر" } },
      { id: '27:15:12', arabic: "كَثِيرٍۢ", transliteration: "kathīrin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "many", ur: "many" } },
      { id: '27:15:13', arabic: "مِّنْ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:15:14', arabic: "عِبَادِهِ", transliteration: "ʿibādihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His servants", ur: "His بندے" } },
      { id: '27:15:15', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  16: {
    text: "وَوَرِثَ سُلَيْمَـٰنُ دَاوُۥدَ ۖ وَقَالَ يَـٰٓأَيُّهَا ٱلنَّاسُ عُلِّمْنَا مَنطِقَ ٱلطَّيْرِ وَأُوتِينَا مِن كُلِّ شَىْءٍ ۖ إِنَّ هَـٰذَا لَهُوَ ٱلْفَضْلُ ٱلْمُبِينُ",
    translation: {
      en: "",
      ur: "اور سلیمان اور داؤد کے قائم مقام ہوئے۔ اور کہنے لگے کہ لوگو! ہمیں (خدا کی طرف سے) جانوروں کی بولی سکھائی گئی ہے اور ہر چیز عنایت فرمائی گئی ہے۔ بےشک یہ (اُس کا) صریح فضل ہے",
    },
    words: [
      { id: '27:16:1', arabic: "وَوَرِثَ", transliteration: "wawaritha", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And inherited", ur: "اور inherited" } },
      { id: '27:16:2', arabic: "سُلَيْمَـٰنُ", transliteration: "sulaymānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Sulaiman", ur: "Sulaiman" } },
      { id: '27:16:3', arabic: "دَاوُۥدَ ۖ", transliteration: "dāwūda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Dawood", ur: "Dawood" } },
      { id: '27:16:4', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And he said", ur: "اور وہ کہا" } },
      { id: '27:16:5', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '27:16:6', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "people", ur: "لوگ" } },
      { id: '27:16:7', arabic: "عُلِّمْنَا", transliteration: "ʿullim'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We have been taught", ur: "ہم have been taught" } },
      { id: '27:16:8', arabic: "مَنطِقَ", transliteration: "manṭiqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) language", ur: "(the) language" } },
      { id: '27:16:9', arabic: "ٱلطَّيْرِ", transliteration: "l-ṭayri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the birds", ur: "(of) the birds" } },
      { id: '27:16:10', arabic: "وَأُوتِينَا", transliteration: "waūtīnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we have been given", ur: "اور ہم have been given" } },
      { id: '27:16:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:16:12', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '27:16:13', arabic: "شَىْءٍ ۖ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '27:16:14', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '27:16:15', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '27:16:16', arabic: "لَهُوَ", transliteration: "lahuwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, it", ur: "یقیناً, it" } },
      { id: '27:16:17', arabic: "ٱلْفَضْلُ", transliteration: "l-faḍlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the favor", ur: "(is) the favor" } },
      { id: '27:16:18', arabic: "ٱلْمُبِينُ", transliteration: "l-mubīnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evident", ur: "evident" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  17: {
    text: "وَحُشِرَ لِسُلَيْمَـٰنَ جُنُودُهُۥ مِنَ ٱلْجِنِّ وَٱلْإِنسِ وَٱلطَّيْرِ فَهُمْ يُوزَعُونَ",
    translation: {
      en: "",
      ur: "اور سلیمان کے لئے جنوں اور انسانوں اور پرندوں کے لشکر جمع کئے گئے اور قسم وار کئے جاتے تھے",
    },
    words: [
      { id: '27:17:1', arabic: "وَحُشِرَ", transliteration: "waḥushira", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And were gathered", ur: "اور were gathered" } },
      { id: '27:17:2', arabic: "لِسُلَيْمَـٰنَ", transliteration: "lisulaymāna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Sulaiman", ur: "for Sulaiman" } },
      { id: '27:17:3', arabic: "جُنُودُهُۥ", transliteration: "junūduhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his hosts", ur: "his hosts" } },
      { id: '27:17:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:17:5', arabic: "ٱلْجِنِّ", transliteration: "l-jini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "jinn", ur: "jinn" } },
      { id: '27:17:6', arabic: "وَٱلْإِنسِ", transliteration: "wal-insi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the men", ur: "اور the men" } },
      { id: '27:17:7', arabic: "وَٱلطَّيْرِ", transliteration: "wal-ṭayri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the birds", ur: "اور the birds" } },
      { id: '27:17:8', arabic: "فَهُمْ", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '27:17:9', arabic: "يُوزَعُونَ", transliteration: "yūzaʿūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) set in rows", ur: "(were) set میں rows" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  18: {
    text: "حَتَّىٰٓ إِذَآ أَتَوْا۟ عَلَىٰ وَادِ ٱلنَّمْلِ قَالَتْ نَمْلَةٌۭ يَـٰٓأَيُّهَا ٱلنَّمْلُ ٱدْخُلُوا۟ مَسَـٰكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَـٰنُ وَجُنُودُهُۥ وَهُمْ لَا يَشْعُرُونَ",
    translation: {
      en: "",
      ur: "یہاں تک کہ جب چیونٹیوں کے میدان میں پہنچے تو ایک چیونٹی نے کہا کہ چیونٹیوں اپنے اپنے بلوں میں داخل ہو جاؤ ایسا نہ ہو کہ سلیمان اور اس کے لشکر تم کو کچل ڈالیں اور ان کو خبر بھی نہ ہو",
    },
    words: [
      { id: '27:18:1', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Until", ur: "Until" } },
      { id: '27:18:2', arabic: "إِذَآ", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '27:18:3', arabic: "أَتَوْا۟", transliteration: "ataw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they came", ur: "وہ لوگ came" } },
      { id: '27:18:4', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '27:18:5', arabic: "وَادِ", transliteration: "wādi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(the) valley", ur: "(the) valley" } },
      { id: '27:18:6', arabic: "ٱلنَّمْلِ", transliteration: "l-namli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the ants", ur: "(of) the ants" } },
      { id: '27:18:7', arabic: "قَالَتْ", transliteration: "qālat", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '27:18:8', arabic: "نَمْلَةٌۭ", transliteration: "namlatun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "an ant", ur: "an ant" } },
      { id: '27:18:9', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '27:18:10', arabic: "ٱلنَّمْلُ", transliteration: "l-namlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "ants", ur: "ants" } },
      { id: '27:18:11', arabic: "ٱدْخُلُوا۟", transliteration: "ud'khulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Enter", ur: "Enter" } },
      { id: '27:18:12', arabic: "مَسَـٰكِنَكُمْ", transliteration: "masākinakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your dwellings", ur: "your dwellings" } },
      { id: '27:18:13', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "lest not crush you", ur: "lest نہیں crush تم" } },
      { id: '27:18:14', arabic: "يَحْطِمَنَّكُمْ", transliteration: "yaḥṭimannakum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "lest not crush you", ur: "lest نہیں crush تم" } },
      { id: '27:18:15', arabic: "سُلَيْمَـٰنُ", transliteration: "sulaymānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Sulaiman", ur: "Sulaiman" } },
      { id: '27:18:16', arabic: "وَجُنُودُهُۥ", transliteration: "wajunūduhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his hosts", ur: "اور his hosts" } },
      { id: '27:18:17', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '27:18:18', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not perceive", ur: "(do) نہیں perceive" } },
      { id: '27:18:19', arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) not perceive", ur: "(do) نہیں perceive" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'نفی + فعل' }
      ],
    },
  },
  19: {
    text: "فَتَبَسَّمَ ضَاحِكًۭا مِّن قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِىٓ أَنْ أَشْكُرَ نِعْمَتَكَ ٱلَّتِىٓ أَنْعَمْتَ عَلَىَّ وَعَلَىٰ وَٰلِدَىَّ وَأَنْ أَعْمَلَ صَـٰلِحًۭا تَرْضَىٰهُ وَأَدْخِلْنِى بِرَحْمَتِكَ فِى عِبَادِكَ ٱلصَّـٰلِحِينَ",
    translation: {
      en: "",
      ur: "تو وہ اس کی بات سن کر ہنس پڑے اور کہنے لگے کہ اے پروردگار! مجھے توفیق عطا فرما کہ جو احسان تونے مجھ پر اور میرے ماں باپ پر کئے ہیں ان کا شکر کروں اور ایسے نیک کام کروں کہ تو ان سے خوش ہوجائے اور مجھے اپنی رحمت سے اپنے نیک بندوں میں داخل فرما",
    },
    words: [
      { id: '27:19:1', arabic: "فَتَبَسَّمَ", transliteration: "fatabassama", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So he smiled ", ur: "So وہ smiled " } },
      { id: '27:19:2', arabic: "ضَاحِكًۭا", transliteration: "ḍāḥikan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "laughing", ur: "laughing" } },
      { id: '27:19:3', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "at", ur: "at" } },
      { id: '27:19:4', arabic: "قَوْلِهَا", transliteration: "qawlihā", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "her speech", ur: "her speech" } },
      { id: '27:19:5', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and said", ur: "اور کہا" } },
      { id: '27:19:6', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '27:19:7', arabic: "أَوْزِعْنِىٓ", transliteration: "awziʿ'nī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Grant me (the) power", ur: "Grant me (the) power" } },
      { id: '27:19:8', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:19:9', arabic: "أَشْكُرَ", transliteration: "ashkura", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I may thank You", ur: "میں may thank تم" } },
      { id: '27:19:10', arabic: "نِعْمَتَكَ", transliteration: "niʿ'mataka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) Your Favor", ur: "(for) Your Favor" } },
      { id: '27:19:11', arabic: "ٱلَّتِىٓ", transliteration: "allatī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "which", ur: "جو" } },
      { id: '27:19:12', arabic: "أَنْعَمْتَ", transliteration: "anʿamta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You have bestowed", ur: "تم have bestowed" } },
      { id: '27:19:13', arabic: "عَلَىَّ", transliteration: "ʿalayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on me", ur: "پر me" } },
      { id: '27:19:14', arabic: "وَعَلَىٰ", transliteration: "waʿalā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and on", ur: "اور پر" } },
      { id: '27:19:15', arabic: "وَٰلِدَىَّ", transliteration: "wālidayya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "my parents", ur: "my parents" } },
      { id: '27:19:16', arabic: "وَأَنْ", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '27:19:17', arabic: "أَعْمَلَ", transliteration: "aʿmala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I may do", ur: "میں may do" } },
      { id: '27:19:18', arabic: "صَـٰلِحًۭا", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "righteous (deeds)", ur: "نیک (deeds)" } },
      { id: '27:19:19', arabic: "تَرْضَىٰهُ", transliteration: "tarḍāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "that will please You", ur: "وہ will please تم" } },
      { id: '27:19:20', arabic: "وَأَدْخِلْنِى", transliteration: "wa-adkhil'nī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And admit me", ur: "اور admit me" } },
      { id: '27:19:21', arabic: "بِرَحْمَتِكَ", transliteration: "biraḥmatika", pos: ['P+N'], posLabel: 'P+N', root: "ر ح م", meaning: { en: "by Your Mercy", ur: "by Your رحمت" } },
      { id: '27:19:22', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "among", ur: "among" } },
      { id: '27:19:23', arabic: "عِبَادِكَ", transliteration: "ʿibādika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Your slaves", ur: "Your slaves" } },
      { id: '27:19:24', arabic: "ٱلصَّـٰلِحِينَ", transliteration: "l-ṣāliḥīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "righteous", ur: "نیک" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 23, to: 24, label: 'موصوف + صفت' }
      ],
    },
  },
  20: {
    text: "وَتَفَقَّدَ ٱلطَّيْرَ فَقَالَ مَا لِىَ لَآ أَرَى ٱلْهُدْهُدَ أَمْ كَانَ مِنَ ٱلْغَآئِبِينَ",
    translation: {
      en: "",
      ur: "انہوں نے جانوروں کا جائزہ لیا تو کہنے لگے کیا سبب ہے کہ ہُدہُد نظر نہیں آتا۔ کیا کہیں غائب ہوگیا ہے؟",
    },
    words: [
      { id: '27:20:1', arabic: "وَتَفَقَّدَ", transliteration: "watafaqqada", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And he inspected", ur: "اور وہ inspected" } },
      { id: '27:20:2', arabic: "ٱلطَّيْرَ", transliteration: "l-ṭayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the birds", ur: "the birds" } },
      { id: '27:20:3', arabic: "فَقَالَ", transliteration: "faqāla", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "and said", ur: "اور کہا" } },
      { id: '27:20:4', arabic: "مَا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Why", ur: "Why" } },
      { id: '27:20:5', arabic: "لِىَ", transliteration: "liya", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Why", ur: "Why" } },
      { id: '27:20:6', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '27:20:7', arabic: "أَرَى", transliteration: "arā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I see", ur: "میں دیکھنا" } },
      { id: '27:20:8', arabic: "ٱلْهُدْهُدَ", transliteration: "l-hud'huda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hoopoe", ur: "the hoopoe" } },
      { id: '27:20:9', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '27:20:10', arabic: "كَانَ", transliteration: "kāna", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "is he", ur: "is وہ" } },
      { id: '27:20:11', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:20:12', arabic: "ٱلْغَآئِبِينَ", transliteration: "l-ghāibīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the absent", ur: "the absent" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  21: {
    text: "لَأُعَذِّبَنَّهُۥ عَذَابًۭا شَدِيدًا أَوْ لَأَا۟ذْبَحَنَّهُۥٓ أَوْ لَيَأْتِيَنِّى بِسُلْطَـٰنٍۢ مُّبِينٍۢ",
    translation: {
      en: "",
      ur: "میں اسے سخت سزا دوں گا یا ذبح کر ڈالوں گا یا میرے سامنے (اپنی بےقصوری کی) دلیل صریح پیش کرے",
    },
    words: [
      { id: '27:21:1', arabic: "لَأُعَذِّبَنَّهُۥ", transliteration: "la-uʿadhibannahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will surely punish him", ur: "میں will یقیناً punish him" } },
      { id: '27:21:2', arabic: "عَذَابًۭا", transliteration: "ʿadhāban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) a punishment", ur: "(ساتھ) a عذاب" } },
      { id: '27:21:3', arabic: "شَدِيدًا", transliteration: "shadīdan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "severe", ur: "severe" } },
      { id: '27:21:4', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '27:21:5', arabic: "لَأَا۟ذْبَحَنَّهُۥٓ", transliteration: "laādh'baḥannahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will surely slaughter him", ur: "میں will یقیناً slaughter him" } },
      { id: '27:21:6', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "unless", ur: "unless" } },
      { id: '27:21:7', arabic: "لَيَأْتِيَنِّى", transliteration: "layatiyannī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he brings me", ur: "وہ brings me" } },
      { id: '27:21:8', arabic: "بِسُلْطَـٰنٍۢ", transliteration: "bisul'ṭānin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a reason", ur: "a reason" } },
      { id: '27:21:9', arabic: "مُّبِينٍۢ", transliteration: "mubīnin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  22: {
    text: "فَمَكَثَ غَيْرَ بَعِيدٍۢ فَقَالَ أَحَطتُ بِمَا لَمْ تُحِطْ بِهِۦ وَجِئْتُكَ مِن سَبَإٍۭ بِنَبَإٍۢ يَقِينٍ",
    translation: {
      en: "",
      ur: "ابھی تھوڑی ہی دیر ہوئی تھی کہ ہُدہُد آ موجود ہوا اور کہنے لگا کہ مجھے ایک ایسی چیز معلوم ہوئی ہے جس کی آپ کو خبر نہیں اور میں آپ کے پاس (شہر) سبا سے ایک سچی خبر لے کر آیا ہوں",
    },
    words: [
      { id: '27:22:1', arabic: "فَمَكَثَ", transliteration: "famakatha", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So he stayed", ur: "So وہ stayed" } },
      { id: '27:22:2', arabic: "غَيْرَ", transliteration: "ghayra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '27:22:3', arabic: "بَعِيدٍۢ", transliteration: "baʿīdin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "long", ur: "long" } },
      { id: '27:22:4', arabic: "فَقَالَ", transliteration: "faqāla", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "and he said", ur: "اور وہ کہا" } },
      { id: '27:22:5', arabic: "أَحَطتُ", transliteration: "aḥaṭtu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I have encompassed", ur: "میں have encompassed" } },
      { id: '27:22:6', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that which", ur: "وہ جو" } },
      { id: '27:22:7', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '27:22:8', arabic: "تُحِطْ", transliteration: "tuḥiṭ", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you have encompassed", ur: "تم have encompassed" } },
      { id: '27:22:9', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '27:22:10', arabic: "وَجِئْتُكَ", transliteration: "waji'tuka", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I have come to you", ur: "اور میں have come کو تم" } },
      { id: '27:22:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:22:12', arabic: "سَبَإٍۭ", transliteration: "saba-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Saba", ur: "Saba" } },
      { id: '27:22:13', arabic: "بِنَبَإٍۢ", transliteration: "binaba-in", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with news", ur: "ساتھ news" } },
      { id: '27:22:14', arabic: "يَقِينٍ", transliteration: "yaqīnin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "certain", ur: "certain" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  23: {
    text: "إِنِّى وَجَدتُّ ٱمْرَأَةًۭ تَمْلِكُهُمْ وَأُوتِيَتْ مِن كُلِّ شَىْءٍۢ وَلَهَا عَرْشٌ عَظِيمٌۭ",
    translation: {
      en: "",
      ur: "میں نے ایک عورت دیکھی کہ ان لوگوں پر بادشاہت کرتی ہے اور ہر چیز اسے میسر ہے اور اس کا ایک بڑا تخت ہے",
    },
    words: [
      { id: '27:23:1', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '27:23:2', arabic: "وَجَدتُّ", transliteration: "wajadttu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "found", ur: "found" } },
      { id: '27:23:3', arabic: "ٱمْرَأَةًۭ", transliteration: "im'ra-atan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a woman", ur: "a woman" } },
      { id: '27:23:4', arabic: "تَمْلِكُهُمْ", transliteration: "tamlikuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "ruling them", ur: "ruling them" } },
      { id: '27:23:5', arabic: "وَأُوتِيَتْ", transliteration: "waūtiyat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and she has been given", ur: "اور she has been given" } },
      { id: '27:23:6', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:23:7', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '27:23:8', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '27:23:9', arabic: "وَلَهَا", transliteration: "walahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for her", ur: "اور for her" } },
      { id: '27:23:10', arabic: "عَرْشٌ", transliteration: "ʿarshun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a throne", ur: "(is) a throne" } },
      { id: '27:23:11', arabic: "عَظِيمٌۭ", transliteration: "ʿaẓīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  24: {
    text: "وَجَدتُّهَا وَقَوْمَهَا يَسْجُدُونَ لِلشَّمْسِ مِن دُونِ ٱللَّهِ وَزَيَّنَ لَهُمُ ٱلشَّيْطَـٰنُ أَعْمَـٰلَهُمْ فَصَدَّهُمْ عَنِ ٱلسَّبِيلِ فَهُمْ لَا يَهْتَدُونَ",
    translation: {
      en: "",
      ur: "میں نے دیکھا کہ وہ اور اس کی قوم خدا کو چھوڑ کر آفتاب کو سجدہ کرتے ہیں اور شیطان نے ان کے اعمال انہیں آراستہ کر دکھائے ہیں اور ان کو رستے سے روک رکھا ہے پس وہ رستے پر نہیں آئے",
    },
    words: [
      { id: '27:24:1', arabic: "وَجَدتُّهَا", transliteration: "wajadttuhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And I found her", ur: "اور میں found her" } },
      { id: '27:24:2', arabic: "وَقَوْمَهَا", transliteration: "waqawmahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "and her people", ur: "اور her لوگ" } },
      { id: '27:24:3', arabic: "يَسْجُدُونَ", transliteration: "yasjudūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "prostrating", ur: "prostrating" } },
      { id: '27:24:4', arabic: "لِلشَّمْسِ", transliteration: "lilshamsi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to the sun", ur: "کو the sun" } },
      { id: '27:24:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "instead of Allah", ur: "instead of اللہ" } },
      { id: '27:24:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "instead of Allah", ur: "instead of اللہ" } },
      { id: '27:24:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "instead of Allah", ur: "instead of اللہ" } },
      { id: '27:24:8', arabic: "وَزَيَّنَ", transliteration: "wazayyana", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and has made fair-seeming", ur: "اور has made fair-seeming" } },
      { id: '27:24:9', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '27:24:10', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '27:24:11', arabic: "أَعْمَـٰلَهُمْ", transliteration: "aʿmālahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their deeds", ur: "their deeds" } },
      { id: '27:24:12', arabic: "فَصَدَّهُمْ", transliteration: "faṣaddahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and averted them", ur: "اور averted them" } },
      { id: '27:24:13', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:24:14', arabic: "ٱلسَّبِيلِ", transliteration: "l-sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Way", ur: "the راستہ" } },
      { id: '27:24:15', arabic: "فَهُمْ", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so they", ur: "so وہ لوگ" } },
      { id: '27:24:16', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(are) not", ur: "(are) نہیں" } },
      { id: '27:24:17', arabic: "يَهْتَدُونَ", transliteration: "yahtadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "guided", ur: "guided" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'نفی + فعل' }
      ],
    },
  },
  25: {
    text: "أَلَّا يَسْجُدُوا۟ لِلَّهِ ٱلَّذِى يُخْرِجُ ٱلْخَبْءَ فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَيَعْلَمُ مَا تُخْفُونَ وَمَا تُعْلِنُونَ",
    translation: {
      en: "",
      ur: "(اور نہیں سمجھتے) کہ خدا کو آسمانوں اور زمین میں چھپی چیزوں کو ظاہر کردیتا اور تمہارے پوشیدہ اور ظاہر اعمال کو جانتا ہے کیوں سجدہ نہ کریں",
    },
    words: [
      { id: '27:25:1', arabic: "أَلَّا", transliteration: "allā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That not", ur: "وہ نہیں" } },
      { id: '27:25:2', arabic: "يَسْجُدُوا۟", transliteration: "yasjudū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they prostrate", ur: "وہ لوگ prostrate" } },
      { id: '27:25:3', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '27:25:4', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '27:25:5', arabic: "يُخْرِجُ", transliteration: "yukh'riju", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "brings forth", ur: "brings forth" } },
      { id: '27:25:6', arabic: "ٱلْخَبْءَ", transliteration: "l-khaba-a", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hidden", ur: "the hidden" } },
      { id: '27:25:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:25:8', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '27:25:9', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '27:25:10', arabic: "وَيَعْلَمُ", transliteration: "wayaʿlamu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ل م", meaning: { en: "and knows", ur: "اور knows" } },
      { id: '27:25:11', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '27:25:12', arabic: "تُخْفُونَ", transliteration: "tukh'fūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you conceal", ur: "تم conceal" } },
      { id: '27:25:13', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '27:25:14', arabic: "تُعْلِنُونَ", transliteration: "tuʿ'linūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you declare", ur: "تم declare" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'موصول + صلة' }
      ],
    },
  },
  26: {
    text: "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ ۩‏",
    translation: {
      en: "",
      ur: "خدا کے سوا کوئی عبادت کے لائق نہیں وہی عرش عظیم کا مالک ہے",
    },
    words: [
      { id: '27:26:1', arabic: "ٱللَّهُ", transliteration: "al-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:26:2', arabic: "لَآ", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(there is) no", ur: "(there is) نہیں" } },
      { id: '27:26:3', arabic: "إِلَـٰهَ", transliteration: "ilāha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "god", ur: "اللہ" } },
      { id: '27:26:4', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '27:26:5', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '27:26:6', arabic: "رَبُّ", transliteration: "rabbu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '27:26:7', arabic: "ٱلْعَرْشِ", transliteration: "l-ʿarshi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Throne", ur: "(of) the Throne" } },
      { id: '27:26:8', arabic: "ٱلْعَظِيمِ ۩‏", transliteration: "l-ʿaẓīmi", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Great", ur: "the Great" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
  },
  27: {
    text: "۞ قَالَ سَنَنظُرُ أَصَدَقْتَ أَمْ كُنتَ مِنَ ٱلْكَـٰذِبِينَ",
    translation: {
      en: "",
      ur: "سلیمان نے کہا (اچھا) ہم دیکھیں گے، تونے سچ کہا ہے یا تو جھوٹا ہے",
    },
    words: [
      { id: '27:27:1', arabic: "۞ قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '27:27:2', arabic: "سَنَنظُرُ", transliteration: "sananẓuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will see", ur: "ہم will دیکھنا" } },
      { id: '27:27:3', arabic: "أَصَدَقْتَ", transliteration: "aṣadaqta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whether you speak (the) truth", ur: "whether تم speak (the) سچ" } },
      { id: '27:27:4', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '27:27:5', arabic: "كُنتَ", transliteration: "kunta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '27:27:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:27:7', arabic: "ٱلْكَـٰذِبِينَ", transliteration: "l-kādhibīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the liars", ur: "the liars" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  28: {
    text: "ٱذْهَب بِّكِتَـٰبِى هَـٰذَا فَأَلْقِهْ إِلَيْهِمْ ثُمَّ تَوَلَّ عَنْهُمْ فَٱنظُرْ مَاذَا يَرْجِعُونَ",
    translation: {
      en: "",
      ur: "یہ میرا خط لے جا اور اسے ان کی طرف ڈال دے پھر ان کے پاس سے پھر آ اور دیکھ کہ وہ کیا جواب دیتے ہیں",
    },
    words: [
      { id: '27:28:1', arabic: "ٱذْهَب", transliteration: "idh'hab", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Go", ur: "Go" } },
      { id: '27:28:2', arabic: "بِّكِتَـٰبِى", transliteration: "bikitābī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with my letter", ur: "ساتھ my letter" } },
      { id: '27:28:3', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '27:28:4', arabic: "فَأَلْقِهْ", transliteration: "fa-alqih", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and deliver it", ur: "اور deliver it" } },
      { id: '27:28:5', arabic: "إِلَيْهِمْ", transliteration: "ilayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '27:28:6', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '27:28:7', arabic: "تَوَلَّ", transliteration: "tawalla", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turn away", ur: "turn away" } },
      { id: '27:28:8', arabic: "عَنْهُمْ", transliteration: "ʿanhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '27:28:9', arabic: "فَٱنظُرْ", transliteration: "fa-unẓur", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and see", ur: "اور دیکھنا" } },
      { id: '27:28:10', arabic: "مَاذَا", transliteration: "mādhā", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '27:28:11', arabic: "يَرْجِعُونَ", transliteration: "yarjiʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they return", ur: "وہ لوگ return" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  29: {
    text: "قَالَتْ يَـٰٓأَيُّهَا ٱلْمَلَؤُا۟ إِنِّىٓ أُلْقِىَ إِلَىَّ كِتَـٰبٌۭ كَرِيمٌ",
    translation: {
      en: "",
      ur: "ملکہ نے کہا کہ دربار والو! میری طرف ایک نامہ گرامی ڈالا گیا ہے",
    },
    words: [
      { id: '27:29:1', arabic: "قَالَتْ", transliteration: "qālat", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "She said", ur: "She کہا" } },
      { id: '27:29:2', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '27:29:3', arabic: "ٱلْمَلَؤُا۟", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "chiefs", ur: "chiefs" } },
      { id: '27:29:4', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed [I]", ur: "بیشک [میں]" } },
      { id: '27:29:5', arabic: "أُلْقِىَ", transliteration: "ul'qiya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is delivered", ur: "is delivered" } },
      { id: '27:29:6', arabic: "إِلَىَّ", transliteration: "ilayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to me", ur: "کو me" } },
      { id: '27:29:7', arabic: "كِتَـٰبٌۭ", transliteration: "kitābun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a letter", ur: "a letter" } },
      { id: '27:29:8', arabic: "كَرِيمٌ", transliteration: "karīmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "noble", ur: "noble" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  30: {
    text: "إِنَّهُۥ مِن سُلَيْمَـٰنَ وَإِنَّهُۥ بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    translation: {
      en: "",
      ur: "وہ سلیمان کی طرف سے ہے اور مضمون یہ ہے کہ شروع خدا کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے",
    },
    words: [
      { id: '27:30:1', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, it", ur: "بیشک, it" } },
      { id: '27:30:2', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) from", ur: "(is) سے" } },
      { id: '27:30:3', arabic: "سُلَيْمَـٰنَ", transliteration: "sulaymāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Sulaiman", ur: "Sulaiman" } },
      { id: '27:30:4', arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed it (is)", ur: "اور بیشک it (is)" } },
      { id: '27:30:5', arabic: "بِسْمِ", transliteration: "bis'mi", pos: ['P+N'], posLabel: 'P+N', root: "س م و", meaning: { en: "In the name", ur: "میں the name" } },
      { id: '27:30:6', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '27:30:7', arabic: "ٱلرَّحْمَـٰنِ", transliteration: "l-raḥmāni", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Gracious", ur: "the بڑا مہربان" } },
      { id: '27:30:8', arabic: "ٱلرَّحِيمِ", transliteration: "l-raḥīmi", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Most Merciful", ur: "the بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  31: {
    text: "أَلَّا تَعْلُوا۟ عَلَىَّ وَأْتُونِى مُسْلِمِينَ",
    translation: {
      en: "",
      ur: "(بعد اس کے یہ) کہ مجھے سرکشی نہ کرو اور مطیع ومنقاد ہو کر میرے پاس چلے آؤ",
    },
    words: [
      { id: '27:31:1', arabic: "أَلَّا", transliteration: "allā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That not", ur: "وہ نہیں" } },
      { id: '27:31:2', arabic: "تَعْلُوا۟", transliteration: "taʿlū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "exalt yourselves", ur: "exalt yourselves" } },
      { id: '27:31:3', arabic: "عَلَىَّ", transliteration: "ʿalayya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against me", ur: "against me" } },
      { id: '27:31:4', arabic: "وَأْتُونِى", transliteration: "watūnī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but come to me", ur: "لیکن come کو me" } },
      { id: '27:31:5', arabic: "مُسْلِمِينَ", transliteration: "mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) submission", ur: "(میں) submission" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  32: {
    text: "قَالَتْ يَـٰٓأَيُّهَا ٱلْمَلَؤُا۟ أَفْتُونِى فِىٓ أَمْرِى مَا كُنتُ قَاطِعَةً أَمْرًا حَتَّىٰ تَشْهَدُونِ",
    translation: {
      en: "",
      ur: "(خط سنا کر) وہ کہنے لگی کہ اے اہل دربار میرے اس معاملے میں مجھے مشورہ دو، جب تک تم حاضر نہ ہو (اور صلاح نہ دو) میں کسی کام کو فیصل کرنے والی نہیں",
    },
    words: [
      { id: '27:32:1', arabic: "قَالَتْ", transliteration: "qālat", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "She said", ur: "She کہا" } },
      { id: '27:32:2', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '27:32:3', arabic: "ٱلْمَلَؤُا۟", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "chiefs", ur: "chiefs" } },
      { id: '27:32:4', arabic: "أَفْتُونِى", transliteration: "aftūnī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Advise me", ur: "Advise me" } },
      { id: '27:32:5', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:32:6', arabic: "أَمْرِى", transliteration: "amrī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my affair", ur: "my affair" } },
      { id: '27:32:7', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '27:32:8', arabic: "كُنتُ", transliteration: "kuntu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I would be", ur: "میں would be" } },
      { id: '27:32:9', arabic: "قَاطِعَةً", transliteration: "qāṭiʿatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the one to decide", ur: "the one کو decide" } },
      { id: '27:32:10', arabic: "أَمْرًا", transliteration: "amran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any matter", ur: "any matter" } },
      { id: '27:32:11', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '27:32:12', arabic: "تَشْهَدُونِ", transliteration: "tashhadūni", pos: ['V'], posLabel: 'V', root: "د و ن", meaning: { en: "you are present with me", ur: "تم are present ساتھ me" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'نفی + فعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  33: {
    text: "قَالُوا۟ نَحْنُ أُو۟لُوا۟ قُوَّةٍۢ وَأُو۟لُوا۟ بَأْسٍۢ شَدِيدٍۢ وَٱلْأَمْرُ إِلَيْكِ فَٱنظُرِى مَاذَا تَأْمُرِينَ",
    translation: {
      en: "",
      ur: "وہ بولے کہ ہم بڑے زورآور اور سخت جنگجو ہیں اور حکم آپ کے اختیار ہے تو جو حکم دیجیئے گا (اس کے مآل پر) نظر کرلیجیئے گا",
    },
    words: [
      { id: '27:33:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '27:33:2', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "We", ur: "ہم" } },
      { id: '27:33:3', arabic: "أُو۟لُوا۟", transliteration: "ulū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) possessors", ur: "(are) possessors" } },
      { id: '27:33:4', arabic: "قُوَّةٍۢ", transliteration: "quwwatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) strength", ur: "(of) strength" } },
      { id: '27:33:5', arabic: "وَأُو۟لُوا۟", transliteration: "wa-ulū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and possessors", ur: "اور possessors" } },
      { id: '27:33:6', arabic: "بَأْسٍۢ", transliteration: "basin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) might", ur: "(of) might" } },
      { id: '27:33:7', arabic: "شَدِيدٍۢ", transliteration: "shadīdin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } },
      { id: '27:33:8', arabic: "وَٱلْأَمْرُ", transliteration: "wal-amru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the command", ur: "اور the command" } },
      { id: '27:33:9', arabic: "إِلَيْكِ", transliteration: "ilayki", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) up to you", ur: "(is) up کو تم" } },
      { id: '27:33:10', arabic: "فَٱنظُرِى", transliteration: "fa-unẓurī", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so look", ur: "so look" } },
      { id: '27:33:11', arabic: "مَاذَا", transliteration: "mādhā", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '27:33:12', arabic: "تَأْمُرِينَ", transliteration: "tamurīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will command", ur: "تم will command" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
  },
  34: {
    text: "قَالَتْ إِنَّ ٱلْمُلُوكَ إِذَا دَخَلُوا۟ قَرْيَةً أَفْسَدُوهَا وَجَعَلُوٓا۟ أَعِزَّةَ أَهْلِهَآ أَذِلَّةًۭ ۖ وَكَذَٰلِكَ يَفْعَلُونَ",
    translation: {
      en: "",
      ur: "اس نے کہا کہ بادشاہ جب کسی شہر میں داخل ہوتے ہیں تو اس کو تباہ کر دیتے ہیں اور وہاں کے عزت والوں کو ذلیل کر دیا کرتے ہیں اور اسی طرح یہ بھی کریں گے",
    },
    words: [
      { id: '27:34:1', arabic: "قَالَتْ", transliteration: "qālat", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "She said", ur: "She کہا" } },
      { id: '27:34:2', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '27:34:3', arabic: "ٱلْمُلُوكَ", transliteration: "l-mulūka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the kings", ur: "the kings" } },
      { id: '27:34:4', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '27:34:5', arabic: "دَخَلُوا۟", transliteration: "dakhalū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they enter", ur: "وہ لوگ enter" } },
      { id: '27:34:6', arabic: "قَرْيَةً", transliteration: "qaryatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a town", ur: "a town" } },
      { id: '27:34:7', arabic: "أَفْسَدُوهَا", transliteration: "afsadūhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they ruin it", ur: "وہ لوگ ruin it" } },
      { id: '27:34:8', arabic: "وَجَعَلُوٓا۟", transliteration: "wajaʿalū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and make", ur: "اور make" } },
      { id: '27:34:9', arabic: "أَعِزَّةَ", transliteration: "aʿizzata", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(the) most honorable", ur: "(the) most honorable" } },
      { id: '27:34:10', arabic: "أَهْلِهَآ", transliteration: "ahlihā", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "(of) its people", ur: "(of) its لوگ" } },
      { id: '27:34:11', arabic: "أَذِلَّةًۭ ۖ", transliteration: "adhillatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) lowest", ur: "(the) lowest" } },
      { id: '27:34:12', arabic: "وَكَذَٰلِكَ", transliteration: "wakadhālika", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And thus", ur: "اور thus" } },
      { id: '27:34:13', arabic: "يَفْعَلُونَ", transliteration: "yafʿalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they do", ur: "وہ لوگ do" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  35: {
    text: "وَإِنِّى مُرْسِلَةٌ إِلَيْهِم بِهَدِيَّةٍۢ فَنَاظِرَةٌۢ بِمَ يَرْجِعُ ٱلْمُرْسَلُونَ",
    translation: {
      en: "",
      ur: "اور میں ان کی طرف کچھ تحفہ بھیجتی ہوں اور دیکھتی ہوں کہ قاصد کیا جواب لاتے ہیں",
    },
    words: [
      { id: '27:35:1', arabic: "وَإِنِّى", transliteration: "wa-innī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But indeed, I am", ur: "لیکن بیشک, میں am" } },
      { id: '27:35:2', arabic: "مُرْسِلَةٌ", transliteration: "mur'silatun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "going to send", ur: "going کو send" } },
      { id: '27:35:3', arabic: "إِلَيْهِم", transliteration: "ilayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '27:35:4', arabic: "بِهَدِيَّةٍۢ", transliteration: "bihadiyyatin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a gift", ur: "a gift" } },
      { id: '27:35:5', arabic: "فَنَاظِرَةٌۢ", transliteration: "fanāẓiratun", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and see", ur: "اور دیکھنا" } },
      { id: '27:35:6', arabic: "بِمَ", transliteration: "bima", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with what", ur: "ساتھ کیا" } },
      { id: '27:35:7', arabic: "يَرْجِعُ", transliteration: "yarjiʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "return", ur: "return" } },
      { id: '27:35:8', arabic: "ٱلْمُرْسَلُونَ", transliteration: "l-mur'salūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the messengers", ur: "the messengers" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  36: {
    text: "فَلَمَّا جَآءَ سُلَيْمَـٰنَ قَالَ أَتُمِدُّونَنِ بِمَالٍۢ فَمَآ ءَاتَىٰنِۦَ ٱللَّهُ خَيْرٌۭ مِّمَّآ ءَاتَىٰكُم بَلْ أَنتُم بِهَدِيَّتِكُمْ تَفْرَحُونَ",
    translation: {
      en: "",
      ur: "جب (قاصد) سلیمان کے پاس پہنچا تو سلیمان نے کہا کیا تم مجھے مال سے مدد دینا چاہتے ہو، جو کچھ خدا نے مجھے عطا فرمایا ہے وہ اس سے بہتر ہے جو تمہیں دیا ہے حقیقت یہ ہے کہ تم ہی اپنے تحفے سے خوش ہوتے ہوگے",
    },
    words: [
      { id: '27:36:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '27:36:2', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came", ur: "came" } },
      { id: '27:36:3', arabic: "سُلَيْمَـٰنَ", transliteration: "sulaymāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) Sulaiman", ur: "(کو) Sulaiman" } },
      { id: '27:36:4', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '27:36:5', arabic: "أَتُمِدُّونَنِ", transliteration: "atumiddūnani", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Will you provide me", ur: "Will تم provide me" } },
      { id: '27:36:6', arabic: "بِمَالٍۢ", transliteration: "bimālin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with wealth", ur: "ساتھ wealth" } },
      { id: '27:36:7', arabic: "فَمَآ", transliteration: "famā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But what", ur: "لیکن کیا" } },
      { id: '27:36:8', arabic: "ءَاتَىٰنِۦَ", transliteration: "ātāniya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah has given me", ur: "اللہ has given me" } },
      { id: '27:36:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah has given me", ur: "اللہ has given me" } },
      { id: '27:36:10', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) better", ur: "(is) better" } },
      { id: '27:36:11', arabic: "مِّمَّآ", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than what", ur: "than کیا" } },
      { id: '27:36:12', arabic: "ءَاتَىٰكُم", transliteration: "ātākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has given you", ur: "وہ has given تم" } },
      { id: '27:36:13', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '27:36:14', arabic: "أَنتُم", transliteration: "antum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '27:36:15', arabic: "بِهَدِيَّتِكُمْ", transliteration: "bihadiyyatikum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in your gift", ur: "میں your gift" } },
      { id: '27:36:16', arabic: "تَفْرَحُونَ", transliteration: "tafraḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "rejoice", ur: "rejoice" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 7, label: 'عطف' }
      ],
    },
  },
  37: {
    text: "ٱرْجِعْ إِلَيْهِمْ فَلَنَأْتِيَنَّهُم بِجُنُودٍۢ لَّا قِبَلَ لَهُم بِهَا وَلَنُخْرِجَنَّهُم مِّنْهَآ أَذِلَّةًۭ وَهُمْ صَـٰغِرُونَ",
    translation: {
      en: "",
      ur: "ان کے پاس واپس جاؤ ہم ان پر ایسے لشکر سے حملہ کریں گے جس کے مقابلے کی ان میں طاقت نہ ہوگی اور ان کو وہاں سے بےعزت کرکے نکال دیں گے اور وہ ذلیل ہوں گے",
    },
    words: [
      { id: '27:37:1', arabic: "ٱرْجِعْ", transliteration: "ir'jiʿ", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Return", ur: "Return" } },
      { id: '27:37:2', arabic: "إِلَيْهِمْ", transliteration: "ilayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '27:37:3', arabic: "فَلَنَأْتِيَنَّهُم", transliteration: "falanatiyannahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "surely, we will come to them", ur: "یقیناً, ہم will come کو them" } },
      { id: '27:37:4', arabic: "بِجُنُودٍۢ", transliteration: "bijunūdin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with hosts", ur: "ساتھ hosts" } },
      { id: '27:37:5', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '27:37:6', arabic: "قِبَلَ", transliteration: "qibala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) resistance", ur: "(is) resistance" } },
      { id: '27:37:7', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '27:37:8', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of it", ur: "of it" } },
      { id: '27:37:9', arabic: "وَلَنُخْرِجَنَّهُم", transliteration: "walanukh'rijannahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and surely, we will drive them out", ur: "اور یقیناً, ہم will drive them out" } },
      { id: '27:37:10', arabic: "مِّنْهَآ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from there", ur: "سے there" } },
      { id: '27:37:11', arabic: "أَذِلَّةًۭ", transliteration: "adhillatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) humiliation", ur: "(میں) humiliation" } },
      { id: '27:37:12', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '27:37:13', arabic: "صَـٰغِرُونَ", transliteration: "ṣāghirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) abased", ur: "(will be) abased" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  38: {
    text: "قَالَ يَـٰٓأَيُّهَا ٱلْمَلَؤُا۟ أَيُّكُمْ يَأْتِينِى بِعَرْشِهَا قَبْلَ أَن يَأْتُونِى مُسْلِمِينَ",
    translation: {
      en: "",
      ur: "سلیمان نے کہا کہ اے دربار والو! کوئی تم میں ایسا ہے کہ قبل اس کے کہ وہ لوگ فرمانبردار ہو کر ہمارے پاس آئیں ملکہ کا تخت میرے پاس لے آئے",
    },
    words: [
      { id: '27:38:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '27:38:2', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '27:38:3', arabic: "ٱلْمَلَؤُا۟", transliteration: "l-mala-u", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "chiefs", ur: "chiefs" } },
      { id: '27:38:4', arabic: "أَيُّكُمْ", transliteration: "ayyukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Which of you", ur: "جو of تم" } },
      { id: '27:38:5', arabic: "يَأْتِينِى", transliteration: "yatīnī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will bring me", ur: "will bring me" } },
      { id: '27:38:6', arabic: "بِعَرْشِهَا", transliteration: "biʿarshihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "her throne", ur: "her throne" } },
      { id: '27:38:7', arabic: "قَبْلَ", transliteration: "qabla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '27:38:8', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:38:9', arabic: "يَأْتُونِى", transliteration: "yatūnī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they come to me", ur: "وہ لوگ come کو me" } },
      { id: '27:38:10', arabic: "مُسْلِمِينَ", transliteration: "mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) submission", ur: "(میں) submission" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  39: {
    text: "قَالَ عِفْرِيتٌۭ مِّنَ ٱلْجِنِّ أَنَا۠ ءَاتِيكَ بِهِۦ قَبْلَ أَن تَقُومَ مِن مَّقَامِكَ ۖ وَإِنِّى عَلَيْهِ لَقَوِىٌّ أَمِينٌۭ",
    translation: {
      en: "",
      ur: "جنات میں سے ایک قوی ہیکل جن نے کہا کہ قبل اس کے کہ آپ اپنی جگہ سے اٹھیں میں اس کو آپ کے پاس لاحاضر کرتا ہوں اور میں اس (کے اٹھانے کی) طاقت رکھتا ہوں (اور) امانت دار ہوں",
    },
    words: [
      { id: '27:39:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '27:39:2', arabic: "عِفْرِيتٌۭ", transliteration: "ʿif'rītun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a strong one", ur: "a strong one" } },
      { id: '27:39:3', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:39:4', arabic: "ٱلْجِنِّ", transliteration: "l-jini", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the jinn", ur: "the jinn" } },
      { id: '27:39:5', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I", ur: "میں" } },
      { id: '27:39:6', arabic: "ءَاتِيكَ", transliteration: "ātīka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will bring it to you", ur: "will bring it کو تم" } },
      { id: '27:39:7', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "will bring it to you", ur: "will bring it کو تم" } },
      { id: '27:39:8', arabic: "قَبْلَ", transliteration: "qabla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '27:39:9', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '27:39:10', arabic: "تَقُومَ", transliteration: "taqūma", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you rise", ur: "تم rise" } },
      { id: '27:39:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:39:12', arabic: "مَّقَامِكَ ۖ", transliteration: "maqāmika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your place", ur: "your place" } },
      { id: '27:39:13', arabic: "وَإِنِّى", transliteration: "wa-innī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, I am", ur: "اور بیشک, میں am" } },
      { id: '27:39:14', arabic: "عَلَيْهِ", transliteration: "ʿalayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '27:39:15', arabic: "لَقَوِىٌّ", transliteration: "laqawiyyun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, strong", ur: "یقیناً, strong" } },
      { id: '27:39:16', arabic: "أَمِينٌۭ", transliteration: "amīnun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "trustworthy", ur: "trustworthy" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  40: {
    text: "قَالَ ٱلَّذِى عِندَهُۥ عِلْمٌۭ مِّنَ ٱلْكِتَـٰبِ أَنَا۠ ءَاتِيكَ بِهِۦ قَبْلَ أَن يَرْتَدَّ إِلَيْكَ طَرْفُكَ ۚ فَلَمَّا رَءَاهُ مُسْتَقِرًّا عِندَهُۥ قَالَ هَـٰذَا مِن فَضْلِ رَبِّى لِيَبْلُوَنِىٓ ءَأَشْكُرُ أَمْ أَكْفُرُ ۖ وَمَن شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِۦ ۖ وَمَن كَفَرَ فَإِنَّ رَبِّى غَنِىٌّۭ كَرِيمٌۭ",
    translation: {
      en: "",
      ur: "ایک شخص جس کو کتاب الہیٰ کا علم تھا کہنے لگا کہ میں آپ کی آنکھ کے جھپکنے سے پہلے پہلے اسے آپ کے پاس حاضر کئے دیتا ہوں۔ جب سلیمان نے تخت کو اپنے پاس رکھا ہوا دیکھا تو کہا کہ یہ میرے پروردگار کا فضل ہے تاکہ مجھے آزمائے کہ میں شکر کرتا ہوں یا کفران نعمت کرتا ہوں اور جو شکر کرتا ہے تو اپنے ہی فائدے کے لئے شکر کرتا ہے اور جو ناشکری کرتا ہے تو میرا پروردگار بےپروا (اور) کرم کرنے والا ہے",
    },
    words: [
      { id: '27:40:1', arabic: "قَالَ", transliteration: "qāla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Said", ur: "کہا" } },
      { id: '27:40:2', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one who", ur: "one جو" } },
      { id: '27:40:3', arabic: "عِندَهُۥ", transliteration: "ʿindahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with him", ur: "ساتھ him" } },
      { id: '27:40:4', arabic: "عِلْمٌۭ", transliteration: "ʿil'mun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) knowledge", ur: "(was) knowledge" } },
      { id: '27:40:5', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:40:6', arabic: "ٱلْكِتَـٰبِ", transliteration: "l-kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Scripture", ur: "the Scripture" } },
      { id: '27:40:7', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I", ur: "میں" } },
      { id: '27:40:8', arabic: "ءَاتِيكَ", transliteration: "ātīka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will bring it to you", ur: "will bring it کو تم" } },
      { id: '27:40:9', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "will bring it to you", ur: "will bring it کو تم" } },
      { id: '27:40:10', arabic: "قَبْلَ", transliteration: "qabla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '27:40:11', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[that]", ur: "[وہ]" } },
      { id: '27:40:12', arabic: "يَرْتَدَّ", transliteration: "yartadda", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "returns", ur: "returns" } },
      { id: '27:40:13', arabic: "إِلَيْكَ", transliteration: "ilayka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '27:40:14', arabic: "طَرْفُكَ ۚ", transliteration: "ṭarfuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your glance", ur: "your glance" } },
      { id: '27:40:15', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '27:40:16', arabic: "رَءَاهُ", transliteration: "raāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he saw it", ur: "وہ saw it" } },
      { id: '27:40:17', arabic: "مُسْتَقِرًّا", transliteration: "mus'taqirran", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "placed", ur: "placed" } },
      { id: '27:40:18', arabic: "عِندَهُۥ", transliteration: "ʿindahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before him", ur: "پہلے him" } },
      { id: '27:40:19', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '27:40:20', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "This", ur: "This" } },
      { id: '27:40:21', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) from", ur: "(is) سے" } },
      { id: '27:40:22', arabic: "فَضْلِ", transliteration: "faḍli", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(the) Favor", ur: "(the) Favor" } },
      { id: '27:40:23', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) my Lord", ur: "(of) my رب" } },
      { id: '27:40:24', arabic: "لِيَبْلُوَنِىٓ", transliteration: "liyabluwanī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to test me", ur: "کو test me" } },
      { id: '27:40:25', arabic: "ءَأَشْكُرُ", transliteration: "a-ashkuru", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "whether I am grateful", ur: "whether میں am grateful" } },
      { id: '27:40:26', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '27:40:27', arabic: "أَكْفُرُ ۖ", transliteration: "akfuru", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "I am ungrateful", ur: "میں am ungrateful" } },
      { id: '27:40:28', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '27:40:29', arabic: "شَكَرَ", transliteration: "shakara", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) grateful", ur: "(is) grateful" } },
      { id: '27:40:30', arabic: "فَإِنَّمَا", transliteration: "fa-innamā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then only", ur: "پھر صرف" } },
      { id: '27:40:31', arabic: "يَشْكُرُ", transliteration: "yashkuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he is grateful", ur: "وہ is grateful" } },
      { id: '27:40:32', arabic: "لِنَفْسِهِۦ ۖ", transliteration: "linafsihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for his own soul", ur: "for his own روح" } },
      { id: '27:40:33', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '27:40:34', arabic: "كَفَرَ", transliteration: "kafara", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) ungrateful", ur: "(is) ungrateful" } },
      { id: '27:40:35', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '27:40:36', arabic: "رَبِّى", transliteration: "rabbī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "my Lord", ur: "my رب" } },
      { id: '27:40:37', arabic: "غَنِىٌّۭ", transliteration: "ghaniyyun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Self-sufficient", ur: "(is) Self-sufficient" } },
      { id: '27:40:38', arabic: "كَرِيمٌۭ", transliteration: "karīmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Noble", ur: "Noble" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' }
      ],
    },
  },
  41: {
    text: "قَالَ نَكِّرُوا۟ لَهَا عَرْشَهَا نَنظُرْ أَتَهْتَدِىٓ أَمْ تَكُونُ مِنَ ٱلَّذِينَ لَا يَهْتَدُونَ",
    translation: {
      en: "",
      ur: "سلیمان نے کہا کہ ملکہ کے (امتحان عقل کے) لئے اس کے تخت کی صورت بدل دو۔ دیکھیں کہ وہ سوجھ رکھتی ہے یا ان لوگوں میں ہے جو سوجھ نہیں رکھتے",
    },
    words: [
      { id: '27:41:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '27:41:2', arabic: "نَكِّرُوا۟", transliteration: "nakkirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Disguise", ur: "Disguise" } },
      { id: '27:41:3', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for her", ur: "for her" } },
      { id: '27:41:4', arabic: "عَرْشَهَا", transliteration: "ʿarshahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "her throne", ur: "her throne" } },
      { id: '27:41:5', arabic: "نَنظُرْ", transliteration: "nanẓur", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we will see", ur: "ہم will دیکھنا" } },
      { id: '27:41:6', arabic: "أَتَهْتَدِىٓ", transliteration: "atahtadī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "whether she will be guided", ur: "whether she will be guided" } },
      { id: '27:41:7', arabic: "أَمْ", transliteration: "am", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '27:41:8', arabic: "تَكُونُ", transliteration: "takūnu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be", ur: "will be" } },
      { id: '27:41:9', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:41:10', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '27:41:11', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "are not guided", ur: "are نہیں guided" } },
      { id: '27:41:12', arabic: "يَهْتَدُونَ", transliteration: "yahtadūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are not guided", ur: "are نہیں guided" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    },
  },
  42: {
    text: "فَلَمَّا جَآءَتْ قِيلَ أَهَـٰكَذَا عَرْشُكِ ۖ قَالَتْ كَأَنَّهُۥ هُوَ ۚ وَأُوتِينَا ٱلْعِلْمَ مِن قَبْلِهَا وَكُنَّا مُسْلِمِينَ",
    translation: {
      en: "",
      ur: "جب وہ آ پہنچی تو پوچھا گیا کہ کیا آپ کا تخت بھی اسی طرح کا ہے؟ اس نے کہا کہ یہ تو گویا ہو بہو وہی ہے اور ہم کو اس سے پہلے ہی (سلیمان کی عظمت شان) کا علم ہوگیا تھا اور ہم فرمانبردار ہیں",
    },
    words: [
      { id: '27:42:1', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So when", ur: "So when" } },
      { id: '27:42:2', arabic: "جَآءَتْ", transliteration: "jāat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "she came", ur: "she came" } },
      { id: '27:42:3', arabic: "قِيلَ", transliteration: "qīla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "it was said", ur: "it was کہا" } },
      { id: '27:42:4', arabic: "أَهَـٰكَذَا", transliteration: "ahākadhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is like this", ur: "Is like this" } },
      { id: '27:42:5', arabic: "عَرْشُكِ ۖ", transliteration: "ʿarshuki", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your throne", ur: "your throne" } },
      { id: '27:42:6', arabic: "قَالَتْ", transliteration: "qālat", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "She said", ur: "She کہا" } },
      { id: '27:42:7', arabic: "كَأَنَّهُۥ", transliteration: "ka-annahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "It is like", ur: "It is like" } },
      { id: '27:42:8', arabic: "هُوَ ۚ", transliteration: "huwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "it", ur: "it" } },
      { id: '27:42:9', arabic: "وَأُوتِينَا", transliteration: "waūtīnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And we were given", ur: "اور ہم were given" } },
      { id: '27:42:10', arabic: "ٱلْعِلْمَ", transliteration: "l-ʿil'ma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the knowledge", ur: "the knowledge" } },
      { id: '27:42:11', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before her", ur: "پہلے her" } },
      { id: '27:42:12', arabic: "قَبْلِهَا", transliteration: "qablihā", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before her", ur: "پہلے her" } },
      { id: '27:42:13', arabic: "وَكُنَّا", transliteration: "wakunnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and we have been", ur: "اور ہم have been" } },
      { id: '27:42:14', arabic: "مُسْلِمِينَ", transliteration: "mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Muslims", ur: "Muslims" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  43: {
    text: "وَصَدَّهَا مَا كَانَت تَّعْبُدُ مِن دُونِ ٱللَّهِ ۖ إِنَّهَا كَانَتْ مِن قَوْمٍۢ كَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "اور وہ جو خدا کے سوا (اور کی) پرستش کرتی تھی، سلیمان نے اس کو اس سے منع کیا (اس سے پہلے تو) وہ کافروں میں سے تھی",
    },
    words: [
      { id: '27:43:1', arabic: "وَصَدَّهَا", transliteration: "waṣaddahā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And has averted her", ur: "اور has averted her" } },
      { id: '27:43:2', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '27:43:3', arabic: "كَانَت", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "she used (to)", ur: "she used (کو)" } },
      { id: '27:43:4', arabic: "تَّعْبُدُ", transliteration: "taʿbudu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "worship", ur: "عبادت" } },
      { id: '27:43:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "besides", ur: "besides" } },
      { id: '27:43:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides", ur: "besides" } },
      { id: '27:43:7', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:43:8', arabic: "إِنَّهَا", transliteration: "innahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, she", ur: "بیشک, she" } },
      { id: '27:43:9', arabic: "كَانَتْ", transliteration: "kānat", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '27:43:10', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:43:11', arabic: "قَوْمٍۢ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '27:43:12', arabic: "كَـٰفِرِينَ", transliteration: "kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who disbelieve", ur: "جو disbelieve" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  44: {
    text: "قِيلَ لَهَا ٱدْخُلِى ٱلصَّرْحَ ۖ فَلَمَّا رَأَتْهُ حَسِبَتْهُ لُجَّةًۭ وَكَشَفَتْ عَن سَاقَيْهَا ۚ قَالَ إِنَّهُۥ صَرْحٌۭ مُّمَرَّدٌۭ مِّن قَوَارِيرَ ۗ قَالَتْ رَبِّ إِنِّى ظَلَمْتُ نَفْسِى وَأَسْلَمْتُ مَعَ سُلَيْمَـٰنَ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    translation: {
      en: "",
      ur: "(پھر) اس سے کہا گیا کہ محل میں چلیے، جب اس نے اس (کے فرش) کو دیکھا تو اسے پانی کا حوض سمجھا اور (کپڑا اٹھا کر) اپنی پنڈلیاں کھول دیں۔ سلیمان نے کہا یہ ایسا محل ہے جس میں (نیچے بھی) شیشے جڑے ہوئے ہیں۔ وہ بول اٹھی کہ پروردگار میں اپنے آپ پر ظلم کرتی رہی تھی اور (اب) میں سلیمان کے ہاتھ پر خدائے رب العالمین پر ایمان لاتی ہوں",
    },
    words: [
      { id: '27:44:1', arabic: "قِيلَ", transliteration: "qīla", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "It was said", ur: "It was کہا" } },
      { id: '27:44:2', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to her", ur: "کو her" } },
      { id: '27:44:3', arabic: "ٱدْخُلِى", transliteration: "ud'khulī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Enter", ur: "Enter" } },
      { id: '27:44:4', arabic: "ٱلصَّرْحَ ۖ", transliteration: "l-ṣarḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the palace", ur: "the palace" } },
      { id: '27:44:5', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then when", ur: "پھر when" } },
      { id: '27:44:6', arabic: "رَأَتْهُ", transliteration: "ra-athu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "she saw it", ur: "she saw it" } },
      { id: '27:44:7', arabic: "حَسِبَتْهُ", transliteration: "ḥasibathu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "she thought it", ur: "she thought it" } },
      { id: '27:44:8', arabic: "لُجَّةًۭ", transliteration: "lujjatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) a pool", ur: "(was) a pool" } },
      { id: '27:44:9', arabic: "وَكَشَفَتْ", transliteration: "wakashafat", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and she uncovered", ur: "اور she uncovered" } },
      { id: '27:44:10', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[on]", ur: "[پر]" } },
      { id: '27:44:11', arabic: "سَاقَيْهَا ۚ", transliteration: "sāqayhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "her shins", ur: "her shins" } },
      { id: '27:44:12', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '27:44:13', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, it", ur: "بیشک, it" } },
      { id: '27:44:14', arabic: "صَرْحٌۭ", transliteration: "ṣarḥun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a palace", ur: "(is) a palace" } },
      { id: '27:44:15', arabic: "مُّمَرَّدٌۭ", transliteration: "mumarradun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "made smooth", ur: "made smooth" } },
      { id: '27:44:16', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:44:17', arabic: "قَوَارِيرَ ۗ", transliteration: "qawārīra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "glass", ur: "glass" } },
      { id: '27:44:18', arabic: "قَالَتْ", transliteration: "qālat", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "She said", ur: "She کہا" } },
      { id: '27:44:19', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "My Lord", ur: "My رب" } },
      { id: '27:44:20', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, I", ur: "بیشک, میں" } },
      { id: '27:44:21', arabic: "ظَلَمْتُ", transliteration: "ẓalamtu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "[I] have wronged", ur: "[میں] have wronged" } },
      { id: '27:44:22', arabic: "نَفْسِى", transliteration: "nafsī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "myself", ur: "myself" } },
      { id: '27:44:23', arabic: "وَأَسْلَمْتُ", transliteration: "wa-aslamtu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and I submit", ur: "اور میں submit" } },
      { id: '27:44:24', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '27:44:25', arabic: "سُلَيْمَـٰنَ", transliteration: "sulaymāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Sulaiman", ur: "Sulaiman" } },
      { id: '27:44:26', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '27:44:27', arabic: "رَبِّ", transliteration: "rabbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '27:44:28', arabic: "ٱلْعَـٰلَمِينَ", transliteration: "l-ʿālamīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the worlds", ur: "(of) the worlds" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'جار + مجرور' },
        { from: 27, to: 28, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  45: {
    text: "وَلَقَدْ أَرْسَلْنَآ إِلَىٰ ثَمُودَ أَخَاهُمْ صَـٰلِحًا أَنِ ٱعْبُدُوا۟ ٱللَّهَ فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ",
    translation: {
      en: "",
      ur: "اور ہم نے ثمود کی طرف اس کے بھائی صالح کو بھیجا کہ خدا کی عبادت کرو تو وہ دو فریق ہو کر آپس میں جھگڑنے لگے",
    },
    words: [
      { id: '27:45:1', arabic: "وَلَقَدْ", transliteration: "walaqad", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And certainly", ur: "اور certainly" } },
      { id: '27:45:2', arabic: "أَرْسَلْنَآ", transliteration: "arsalnā", pos: ['V'], posLabel: 'V', root: "ر س ل", meaning: { en: "We sent", ur: "ہم sent" } },
      { id: '27:45:3', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '27:45:4', arabic: "ثَمُودَ", transliteration: "thamūda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Thamud", ur: "Thamud" } },
      { id: '27:45:5', arabic: "أَخَاهُمْ", transliteration: "akhāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their brother", ur: "their brother" } },
      { id: '27:45:6', arabic: "صَـٰلِحًا", transliteration: "ṣāliḥan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Salih", ur: "Salih" } },
      { id: '27:45:7', arabic: "أَنِ", transliteration: "ani", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:45:8', arabic: "ٱعْبُدُوا۟", transliteration: "uʿ'budū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Worship", ur: "عبادت" } },
      { id: '27:45:9', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:45:10', arabic: "فَإِذَا", transliteration: "fa-idhā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then behold", ur: "پھر behold" } },
      { id: '27:45:11', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "They", ur: "وہ لوگ" } },
      { id: '27:45:12', arabic: "فَرِيقَانِ", transliteration: "farīqāni", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(became) two parties", ur: "(became) two parties" } },
      { id: '27:45:13', arabic: "يَخْتَصِمُونَ", transliteration: "yakhtaṣimūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "quarreling", ur: "quarreling" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  46: {
    text: "قَالَ يَـٰقَوْمِ لِمَ تَسْتَعْجِلُونَ بِٱلسَّيِّئَةِ قَبْلَ ٱلْحَسَنَةِ ۖ لَوْلَا تَسْتَغْفِرُونَ ٱللَّهَ لَعَلَّكُمْ تُرْحَمُونَ",
    translation: {
      en: "",
      ur: "صالح نے کہا کہ بھائیو تم بھلائی سے پہلے برائی کے لئے کیوں جلدی کرتے ہو (اور) خدا سے بخشش کیوں نہیں مانگتے تاکہ تم پر رحم کیا جائے",
    },
    words: [
      { id: '27:46:1', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '27:46:2', arabic: "يَـٰقَوْمِ", transliteration: "yāqawmi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "O my people", ur: "اے my لوگ" } },
      { id: '27:46:3', arabic: "لِمَ", transliteration: "lima", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Why", ur: "Why" } },
      { id: '27:46:4', arabic: "تَسْتَعْجِلُونَ", transliteration: "tastaʿjilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(do) you seek to hasten", ur: "(do) تم seek کو hasten" } },
      { id: '27:46:5', arabic: "بِٱلسَّيِّئَةِ", transliteration: "bil-sayi-ati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "the evil", ur: "the برا" } },
      { id: '27:46:6', arabic: "قَبْلَ", transliteration: "qabla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '27:46:7', arabic: "ٱلْحَسَنَةِ ۖ", transliteration: "l-ḥasanati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good", ur: "the اچھا" } },
      { id: '27:46:8', arabic: "لَوْلَا", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Why not", ur: "Why نہیں" } },
      { id: '27:46:9', arabic: "تَسْتَغْفِرُونَ", transliteration: "tastaghfirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you ask forgiveness", ur: "تم ask مغفرت" } },
      { id: '27:46:10', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '27:46:11', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '27:46:12', arabic: "تُرْحَمُونَ", transliteration: "tur'ḥamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "receive mercy", ur: "receive رحمت" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  47: {
    text: "قَالُوا۟ ٱطَّيَّرْنَا بِكَ وَبِمَن مَّعَكَ ۚ قَالَ طَـٰٓئِرُكُمْ عِندَ ٱللَّهِ ۖ بَلْ أَنتُمْ قَوْمٌۭ تُفْتَنُونَ",
    translation: {
      en: "",
      ur: "وہ کہنے لگے کہ تم اور تمہارے ساتھی ہمارے لئے شگون بد ہے۔ صالح نے کہا کہ تمہاری بدشگونی خدا کی طرف سے ہے بلکہ تم ایسے لوگ ہو جن کی آزمائش کی جاتی ہے",
    },
    words: [
      { id: '27:47:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '27:47:2', arabic: "ٱطَّيَّرْنَا", transliteration: "iṭṭayyarnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We consider you a bad omen", ur: "ہم consider تم a bad omen" } },
      { id: '27:47:3', arabic: "بِكَ", transliteration: "bika", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "We consider you a bad omen", ur: "ہم consider تم a bad omen" } },
      { id: '27:47:4', arabic: "وَبِمَن", transliteration: "wabiman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those", ur: "اور those" } },
      { id: '27:47:5', arabic: "مَّعَكَ ۚ", transliteration: "maʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '27:47:6', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He said", ur: "وہ کہا" } },
      { id: '27:47:7', arabic: "طَـٰٓئِرُكُمْ", transliteration: "ṭāirukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Your bad omen", ur: "Your bad omen" } },
      { id: '27:47:8', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) with", ur: "(is) ساتھ" } },
      { id: '27:47:9', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:47:10', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '27:47:11', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '27:47:12', arabic: "قَوْمٌۭ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '27:47:13', arabic: "تُفْتَنُونَ", transliteration: "tuf'tanūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "being tested", ur: "being tested" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  48: {
    text: "وَكَانَ فِى ٱلْمَدِينَةِ تِسْعَةُ رَهْطٍۢ يُفْسِدُونَ فِى ٱلْأَرْضِ وَلَا يُصْلِحُونَ",
    translation: {
      en: "",
      ur: "اور شہر میں نو شخص تھے جو ملک میں فساد کیا کرتے تھے اور اصلاح سے کام نہیں لیتے تھے",
    },
    words: [
      { id: '27:48:1', arabic: "وَكَانَ", transliteration: "wakāna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "And were", ur: "اور were" } },
      { id: '27:48:2', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:48:3', arabic: "ٱلْمَدِينَةِ", transliteration: "l-madīnati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the city", ur: "the city" } },
      { id: '27:48:4', arabic: "تِسْعَةُ", transliteration: "tis'ʿatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nine", ur: "nine" } },
      { id: '27:48:5', arabic: "رَهْطٍۢ", transliteration: "rahṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "family heads", ur: "family heads" } },
      { id: '27:48:6', arabic: "يُفْسِدُونَ", transliteration: "yuf'sidūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they were spreading corruption", ur: "وہ لوگ were spreading corruption" } },
      { id: '27:48:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:48:8', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the land", ur: "the land" } },
      { id: '27:48:9', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '27:48:10', arabic: "يُصْلِحُونَ", transliteration: "yuṣ'liḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "reforming", ur: "reforming" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  49: {
    text: "قَالُوا۟ تَقَاسَمُوا۟ بِٱللَّهِ لَنُبَيِّتَنَّهُۥ وَأَهْلَهُۥ ثُمَّ لَنَقُولَنَّ لِوَلِيِّهِۦ مَا شَهِدْنَا مَهْلِكَ أَهْلِهِۦ وَإِنَّا لَصَـٰدِقُونَ",
    translation: {
      en: "",
      ur: "کہنے لگے کہ خدا کی قسم کھاؤ کہ ہم رات کو اس پر اور اس کے گھر والوں پر شب خون ماریں گے پھر اس کے وارث سے کہہ دیں گے کہ ہم تو صالح کے گھر والوں کے موقع ہلاکت پر گئے ہی نہیں اور ہم سچ کہتے ہیں",
    },
    words: [
      { id: '27:49:1', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "They said", ur: "وہ لوگ کہا" } },
      { id: '27:49:2', arabic: "تَقَاسَمُوا۟", transliteration: "taqāsamū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Swear to each other", ur: "Swear کو ہر other" } },
      { id: '27:49:3', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by Allah", ur: "by اللہ" } },
      { id: '27:49:4', arabic: "لَنُبَيِّتَنَّهُۥ", transliteration: "lanubayyitannahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely, we will attack him by night", ur: "یقیناً, ہم will attack him by رات" } },
      { id: '27:49:5', arabic: "وَأَهْلَهُۥ", transliteration: "wa-ahlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ه ل", meaning: { en: "and his family", ur: "اور his family" } },
      { id: '27:49:6', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Then", ur: "پھر" } },
      { id: '27:49:7', arabic: "لَنَقُولَنَّ", transliteration: "lanaqūlanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we will surely say", ur: "ہم will یقیناً کہو" } },
      { id: '27:49:8', arabic: "لِوَلِيِّهِۦ", transliteration: "liwaliyyihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to his heir", ur: "کو his heir" } },
      { id: '27:49:9', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '27:49:10', arabic: "شَهِدْنَا", transliteration: "shahid'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we witnessed", ur: "ہم witnessed" } },
      { id: '27:49:11', arabic: "مَهْلِكَ", transliteration: "mahlika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) destruction", ur: "(the) destruction" } },
      { id: '27:49:12', arabic: "أَهْلِهِۦ", transliteration: "ahlihi", pos: ['N'], posLabel: 'N', root: "أ ه ل", meaning: { en: "(of) his family", ur: "(of) his family" } },
      { id: '27:49:13', arabic: "وَإِنَّا", transliteration: "wa-innā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, we", ur: "اور بیشک, ہم" } },
      { id: '27:49:14', arabic: "لَصَـٰدِقُونَ", transliteration: "laṣādiqūna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(are) surely truthful", ur: "(are) یقیناً truthful" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'نفی + فعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  50: {
    text: "وَمَكَرُوا۟ مَكْرًۭا وَمَكَرْنَا مَكْرًۭا وَهُمْ لَا يَشْعُرُونَ",
    translation: {
      en: "",
      ur: "اور وہ ایک چال چلے اور ان کو کچھ خبر نہ ہوئی",
    },
    words: [
      { id: '27:50:1', arabic: "وَمَكَرُوا۟", transliteration: "wamakarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "So they plotted", ur: "So وہ لوگ plotted" } },
      { id: '27:50:2', arabic: "مَكْرًۭا", transliteration: "makran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a plot", ur: "a plot" } },
      { id: '27:50:3', arabic: "وَمَكَرْنَا", transliteration: "wamakarnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We planned", ur: "اور ہم planned" } },
      { id: '27:50:4', arabic: "مَكْرًۭا", transliteration: "makran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a plan", ur: "a plan" } },
      { id: '27:50:5', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '27:50:6', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(did) not", ur: "(did) نہیں" } },
      { id: '27:50:7', arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "perceive", ur: "perceive" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'نفی + فعل' }
      ],
    },
  },
  51: {
    text: "فَٱنظُرْ كَيْفَ كَانَ عَـٰقِبَةُ مَكْرِهِمْ أَنَّا دَمَّرْنَـٰهُمْ وَقَوْمَهُمْ أَجْمَعِينَ",
    translation: {
      en: "",
      ur: "تو دیکھ لو ان کی چال کا کیسا انجام ہوا۔ ہم نے ان کو اور ان کی قوم سب کو ہلاک کر ڈالا",
    },
    words: [
      { id: '27:51:1', arabic: "فَٱنظُرْ", transliteration: "fa-unẓur", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "Then see", ur: "پھر دیکھنا" } },
      { id: '27:51:2', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '27:51:3', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '27:51:4', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) end", ur: "(the) end" } },
      { id: '27:51:5', arabic: "مَكْرِهِمْ", transliteration: "makrihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their plot", ur: "(of) their plot" } },
      { id: '27:51:6', arabic: "أَنَّا", transliteration: "annā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that We", ur: "وہ ہم" } },
      { id: '27:51:7', arabic: "دَمَّرْنَـٰهُمْ", transliteration: "dammarnāhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "destroyed them", ur: "destroyed them" } },
      { id: '27:51:8', arabic: "وَقَوْمَهُمْ", transliteration: "waqawmahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و م", meaning: { en: "and their people", ur: "اور their لوگ" } },
      { id: '27:51:9', arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } }
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
  52: {
    text: "فَتِلْكَ بُيُوتُهُمْ خَاوِيَةًۢ بِمَا ظَلَمُوٓا۟ ۗ إِنَّ فِى ذَٰلِكَ لَـَٔايَةًۭ لِّقَوْمٍۢ يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "اب یہ ان کے گھر ان کے ظلم کے سبب خالی پڑے ہیں۔ جو لوگ دانش رکھتے ہیں، ان کے لئے اس میں نشانی ہے",
    },
    words: [
      { id: '27:52:1', arabic: "فَتِلْكَ", transliteration: "fatil'ka", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So, these", ur: "So, these" } },
      { id: '27:52:2', arabic: "بُيُوتُهُمْ", transliteration: "buyūtuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) their houses", ur: "(are) their houses" } },
      { id: '27:52:3', arabic: "خَاوِيَةًۢ", transliteration: "khāwiyatan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "ruined", ur: "ruined" } },
      { id: '27:52:4', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '27:52:5', arabic: "ظَلَمُوٓا۟ ۗ", transliteration: "ẓalamū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they wronged", ur: "وہ لوگ wronged" } },
      { id: '27:52:6', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '27:52:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:52:8', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:52:9', arabic: "لَـَٔايَةًۭ", transliteration: "laāyatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, is a sign", ur: "یقیناً, is a نشانی" } },
      { id: '27:52:10', arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '27:52:11', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "who know", ur: "جو جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  53: {
    text: "وَأَنجَيْنَا ٱلَّذِينَ ءَامَنُوا۟ وَكَانُوا۟ يَتَّقُونَ",
    translation: {
      en: "",
      ur: "اور جو لوگ ایمان لائے اور ڈرتے تھے ان کو ہم نے نجات دی",
    },
    words: [
      { id: '27:53:1', arabic: "وَأَنجَيْنَا", transliteration: "wa-anjaynā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We saved", ur: "اور ہم saved" } },
      { id: '27:53:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '27:53:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '27:53:4', arabic: "وَكَانُوا۟", transliteration: "wakānū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ك و ن", meaning: { en: "and used (to)", ur: "اور used (کو)" } },
      { id: '27:53:5', arabic: "يَتَّقُونَ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fear (Allah)", ur: "ڈرنا (اللہ)" } }
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
  54: {
    text: "وَلُوطًا إِذْ قَالَ لِقَوْمِهِۦٓ أَتَأْتُونَ ٱلْفَـٰحِشَةَ وَأَنتُمْ تُبْصِرُونَ",
    translation: {
      en: "",
      ur: "اور لوط کو (یاد کرو) جب انہوں نے اپنی قوم سے کہا کہ تم بےحیائی (کے کام) کیوں کرتے ہو اور تم دیکھتے ہو",
    },
    words: [
      { id: '27:54:1', arabic: "وَلُوطًا", transliteration: "walūṭan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Lut", ur: "اور Lut" } },
      { id: '27:54:2', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '27:54:3', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "he said", ur: "وہ کہا" } },
      { id: '27:54:4', arabic: "لِقَوْمِهِۦٓ", transliteration: "liqawmihi", pos: ['P+N'], posLabel: 'P+N', root: "ق و م", meaning: { en: "to his people", ur: "کو his لوگ" } },
      { id: '27:54:5', arabic: "أَتَأْتُونَ", transliteration: "atatūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do you commit", ur: "Do تم commit" } },
      { id: '27:54:6', arabic: "ٱلْفَـٰحِشَةَ", transliteration: "l-fāḥishata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] immorality", ur: "[the] immorality" } },
      { id: '27:54:7', arabic: "وَأَنتُمْ", transliteration: "wa-antum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while you", ur: "while تم" } },
      { id: '27:54:8', arabic: "تُبْصِرُونَ", transliteration: "tub'ṣirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "see", ur: "دیکھنا" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  55: {
    text: "أَئِنَّكُمْ لَتَأْتُونَ ٱلرِّجَالَ شَهْوَةًۭ مِّن دُونِ ٱلنِّسَآءِ ۚ بَلْ أَنتُمْ قَوْمٌۭ تَجْهَلُونَ",
    translation: {
      en: "",
      ur: "کیا تم عورتوں کو چھوڑ کر (لذت حاصل کرنے) کے لئے مردوں کی طرف مائل ہوتے ہو۔ حقیقت یہ ہے کہ تم احمق لوگ ہو",
    },
    words: [
      { id: '27:55:1', arabic: "أَئِنَّكُمْ", transliteration: "a-innakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Why do you", ur: "Why do تم" } },
      { id: '27:55:2', arabic: "لَتَأْتُونَ", transliteration: "latatūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "approach", ur: "approach" } },
      { id: '27:55:3', arabic: "ٱلرِّجَالَ", transliteration: "l-rijāla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the men", ur: "the men" } },
      { id: '27:55:4', arabic: "شَهْوَةًۭ", transliteration: "shahwatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) lust", ur: "(ساتھ) lust" } },
      { id: '27:55:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "instead of", ur: "instead of" } },
      { id: '27:55:6', arabic: "دُونِ", transliteration: "dūni", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "instead of", ur: "instead of" } },
      { id: '27:55:7', arabic: "ٱلنِّسَآءِ ۚ", transliteration: "l-nisāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the women", ur: "the women" } },
      { id: '27:55:8', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '27:55:9', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '27:55:10', arabic: "قَوْمٌۭ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '27:55:11', arabic: "تَجْهَلُونَ", transliteration: "tajhalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "ignorant", ur: "ignorant" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  56: {
    text: "۞ فَمَا كَانَ جَوَابَ قَوْمِهِۦٓ إِلَّآ أَن قَالُوٓا۟ أَخْرِجُوٓا۟ ءَالَ لُوطٍۢ مِّن قَرْيَتِكُمْ ۖ إِنَّهُمْ أُنَاسٌۭ يَتَطَهَّرُونَ",
    translation: {
      en: "",
      ur: "تو ان کی قوم کے لوگ (بولے تو) یہ بولے اور اس کے سوا ان کا کچھ جواب نہ تھا کہ لوط کے گھر والوں کو اپنے شہر سے نکال دو۔ یہ لوگ پاک رہنا چاہتے ہیں",
    },
    words: [
      { id: '27:56:1', arabic: "۞ فَمَا", transliteration: "famā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "But not", ur: "لیکن نہیں" } },
      { id: '27:56:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '27:56:3', arabic: "جَوَابَ", transliteration: "jawāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) answer", ur: "(the) answer" } },
      { id: '27:56:4', arabic: "قَوْمِهِۦٓ", transliteration: "qawmihi", pos: ['N'], posLabel: 'N', root: "ق و م", meaning: { en: "(of) his people", ur: "(of) his لوگ" } },
      { id: '27:56:5', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '27:56:6', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:56:7', arabic: "قَالُوٓا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '27:56:8', arabic: "أَخْرِجُوٓا۟", transliteration: "akhrijū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Drive out", ur: "Drive out" } },
      { id: '27:56:9', arabic: "ءَالَ", transliteration: "āla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) family", ur: "(the) family" } },
      { id: '27:56:10', arabic: "لُوطٍۢ", transliteration: "lūṭin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Lut", ur: "(of) Lut" } },
      { id: '27:56:11', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:56:12', arabic: "قَرْيَتِكُمْ ۖ", transliteration: "qaryatikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your town", ur: "your town" } },
      { id: '27:56:13', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '27:56:14', arabic: "أُنَاسٌۭ", transliteration: "unāsun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) people", ur: "(are) لوگ" } },
      { id: '27:56:15', arabic: "يَتَطَهَّرُونَ", transliteration: "yataṭahharūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who keep clean and pure", ur: "جو keep clean اور pure" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  57: {
    text: "فَأَنجَيْنَـٰهُ وَأَهْلَهُۥٓ إِلَّا ٱمْرَأَتَهُۥ قَدَّرْنَـٰهَا مِنَ ٱلْغَـٰبِرِينَ",
    translation: {
      en: "",
      ur: "تو ہم نے ان کو اور ان کے گھر والوں کو نجات دی۔ مگر ان کی بیوی کہ اس کی نسبت ہم نے مقرر کر رکھا ہے (کہ وہ پیچھے رہنے والوں میں ہوگی)",
    },
    words: [
      { id: '27:57:1', arabic: "فَأَنجَيْنَـٰهُ", transliteration: "fa-anjaynāhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So We saved him", ur: "So ہم saved him" } },
      { id: '27:57:2', arabic: "وَأَهْلَهُۥٓ", transliteration: "wa-ahlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ه ل", meaning: { en: "and his family", ur: "اور his family" } },
      { id: '27:57:3', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '27:57:4', arabic: "ٱمْرَأَتَهُۥ", transliteration: "im'ra-atahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his wife", ur: "his wife" } },
      { id: '27:57:5', arabic: "قَدَّرْنَـٰهَا", transliteration: "qaddarnāhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We destined her", ur: "ہم destined her" } },
      { id: '27:57:6', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to be) of", ur: "(کو be) of" } },
      { id: '27:57:7', arabic: "ٱلْغَـٰبِرِينَ", transliteration: "l-ghābirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who remained behind", ur: "جو لوگ remained behind" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  58: {
    text: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًۭا ۖ فَسَآءَ مَطَرُ ٱلْمُنذَرِينَ",
    translation: {
      en: "",
      ur: "اور ہم نے ان پر مینھہ برسایا سو (جو) مینھہ ان لوگوں پر برسا جن کو متنبہ کردیا گیا تھا، برا تھا",
    },
    words: [
      { id: '27:58:1', arabic: "وَأَمْطَرْنَا", transliteration: "wa-amṭarnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And We rained", ur: "اور ہم rained" } },
      { id: '27:58:2', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon them", ur: "پر them" } },
      { id: '27:58:3', arabic: "مَّطَرًۭا ۖ", transliteration: "maṭaran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a rain", ur: "a rain" } },
      { id: '27:58:4', arabic: "فَسَآءَ", transliteration: "fasāa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and was evil", ur: "اور was برا" } },
      { id: '27:58:5', arabic: "مَطَرُ", transliteration: "maṭaru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) rain", ur: "(the) rain" } },
      { id: '27:58:6', arabic: "ٱلْمُنذَرِينَ", transliteration: "l-mundharīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(on) those who were warned", ur: "(پر) جو لوگ were warned" } }
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
  59: {
    text: "قُلِ ٱلْحَمْدُ لِلَّهِ وَسَلَـٰمٌ عَلَىٰ عِبَادِهِ ٱلَّذِينَ ٱصْطَفَىٰٓ ۗ ءَآللَّهُ خَيْرٌ أَمَّا يُشْرِكُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ سب تعریف خدا ہی کو سزاوار ہے اور اس کے بندوں پر سلام ہے جن کو اس نے منتخب فرمایا۔ بھلا خدا بہتر ہے یا وہ جن کو یہ (اس کا شریک) ٹھہراتے ہیں",
    },
    words: [
      { id: '27:59:1', arabic: "قُلِ", transliteration: "quli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '27:59:2', arabic: "ٱلْحَمْدُ", transliteration: "l-ḥamdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "All praise (be)", ur: "سب praise (be)" } },
      { id: '27:59:3', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '27:59:4', arabic: "وَسَلَـٰمٌ", transliteration: "wasalāmun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and peace (be)", ur: "اور peace (be)" } },
      { id: '27:59:5', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "upon", ur: "پر" } },
      { id: '27:59:6', arabic: "عِبَادِهِ", transliteration: "ʿibādihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His slaves", ur: "His slaves" } },
      { id: '27:59:7', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those whom", ur: "those whom" } },
      { id: '27:59:8', arabic: "ٱصْطَفَىٰٓ ۗ", transliteration: "iṣ'ṭafā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He has chosen", ur: "وہ has chosen" } },
      { id: '27:59:9', arabic: "ءَآللَّهُ", transliteration: "āllahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is Allah", ur: "Is اللہ" } },
      { id: '27:59:10', arabic: "خَيْرٌ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "better", ur: "better" } },
      { id: '27:59:11', arabic: "أَمَّا", transliteration: "ammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or what", ur: "یا کیا" } },
      { id: '27:59:12', arabic: "يُشْرِكُونَ", transliteration: "yush'rikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they associate (with Him)", ur: "وہ لوگ associate (ساتھ Him)" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  60: {
    text: "أَمَّنْ خَلَقَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ وَأَنزَلَ لَكُم مِّنَ ٱلسَّمَآءِ مَآءًۭ فَأَنۢبَتْنَا بِهِۦ حَدَآئِقَ ذَاتَ بَهْجَةٍۢ مَّا كَانَ لَكُمْ أَن تُنۢبِتُوا۟ شَجَرَهَآ ۗ أَءِلَـٰهٌۭ مَّعَ ٱللَّهِ ۚ بَلْ هُمْ قَوْمٌۭ يَعْدِلُونَ",
    translation: {
      en: "",
      ur: "بھلا کس نے آسمانوں اور زمین کو پیدا کیا اور (کس نے) تمہارے لئے آسمان سے پانی برسایا۔ (ہم نے) پھر ہم ہی نے اس سے سرسبز باغ اُگائے۔ تمہارا کام تو نہ تھا کہ تم اُن کے درختوں کو اگاتے۔ تو کیا خدا کے ساتھ کوئی اور بھی معبود ہے؟ (ہرگز نہیں) بلکہ یہ لوگ رستے سے الگ ہو رہے ہیں",
    },
    words: [
      { id: '27:60:1', arabic: "أَمَّنْ", transliteration: "amman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or Who", ur: "یا جو" } },
      { id: '27:60:2', arabic: "خَلَقَ", transliteration: "khalaqa", pos: ['V'], posLabel: 'V', root: "خ ل ق", meaning: { en: "has created", ur: "has پیدا کیا" } },
      { id: '27:60:3', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '27:60:4', arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '27:60:5', arabic: "وَأَنزَلَ", transliteration: "wa-anzala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ز ل", meaning: { en: "and sent down", ur: "اور sent down" } },
      { id: '27:60:6', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '27:60:7', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:60:8', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '27:60:9', arabic: "مَآءًۭ", transliteration: "māan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "water", ur: "پانی" } },
      { id: '27:60:10', arabic: "فَأَنۢبَتْنَا", transliteration: "fa-anbatnā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And We caused to grow", ur: "اور ہم caused کو grow" } },
      { id: '27:60:11', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "thereby", ur: "thereby" } },
      { id: '27:60:12', arabic: "حَدَآئِقَ", transliteration: "ḥadāiqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gardens", ur: "باغات" } },
      { id: '27:60:13', arabic: "ذَاتَ", transliteration: "dhāta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of beauty (and delight)", ur: "of beauty (اور delight)" } },
      { id: '27:60:14', arabic: "بَهْجَةٍۢ", transliteration: "bahjatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of beauty (and delight)", ur: "of beauty (اور delight)" } },
      { id: '27:60:15', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '27:60:16', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "it is", ur: "it is" } },
      { id: '27:60:17', arabic: "لَكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '27:60:18', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:60:19', arabic: "تُنۢبِتُوا۟", transliteration: "tunbitū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you cause to grow", ur: "تم cause کو grow" } },
      { id: '27:60:20', arabic: "شَجَرَهَآ ۗ", transliteration: "shajarahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their trees", ur: "their trees" } },
      { id: '27:60:21', arabic: "أَءِلَـٰهٌۭ", transliteration: "a-ilāhun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is there any god", ur: "Is there any اللہ" } },
      { id: '27:60:22', arabic: "مَّعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '27:60:23', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:60:24', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '27:60:25', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '27:60:26', arabic: "قَوْمٌۭ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '27:60:27', arabic: "يَعْدِلُونَ", transliteration: "yaʿdilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "who ascribe equals", ur: "جو ascribe equals" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'فعل + فاعل' }
      ],
    },
  },
  61: {
    text: "أَمَّن جَعَلَ ٱلْأَرْضَ قَرَارًۭا وَجَعَلَ خِلَـٰلَهَآ أَنْهَـٰرًۭا وَجَعَلَ لَهَا رَوَٰسِىَ وَجَعَلَ بَيْنَ ٱلْبَحْرَيْنِ حَاجِزًا ۗ أَءِلَـٰهٌۭ مَّعَ ٱللَّهِ ۚ بَلْ أَكْثَرُهُمْ لَا يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "بھلا کس نے زمین کو قرار گاہ بنایا اور اس کے بیچ نہریں بنائیں اور اس کے لئے پہاڑ بنائے اور (کس نے) دو دریاؤں کے بیچ اوٹ بنائی (یہ سب کچھ خدا نے بنایا) تو کیا خدا کے ساتھ کوئی اور معبود بھی ہے؟ (ہرگز نہیں) بلکہ ان میں اکثر دانش نہیں رکھتے",
    },
    words: [
      { id: '27:61:1', arabic: "أَمَّن", transliteration: "amman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or Who", ur: "یا جو" } },
      { id: '27:61:2', arabic: "جَعَلَ", transliteration: "jaʿala", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "made", ur: "made" } },
      { id: '27:61:3', arabic: "ٱلْأَرْضَ", transliteration: "l-arḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the earth", ur: "زمین" } },
      { id: '27:61:4', arabic: "قَرَارًۭا", transliteration: "qarāran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a firm abode", ur: "a firm abode" } },
      { id: '27:61:5', arabic: "وَجَعَلَ", transliteration: "wajaʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and made", ur: "اور made" } },
      { id: '27:61:6', arabic: "خِلَـٰلَهَآ", transliteration: "khilālahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) its midst", ur: "(میں) its midst" } },
      { id: '27:61:7', arabic: "أَنْهَـٰرًۭا", transliteration: "anhāran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "rivers", ur: "rivers" } },
      { id: '27:61:8', arabic: "وَجَعَلَ", transliteration: "wajaʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and made", ur: "اور made" } },
      { id: '27:61:9', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for it", ur: "for it" } },
      { id: '27:61:10', arabic: "رَوَٰسِىَ", transliteration: "rawāsiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "firm mountains", ur: "firm mountains" } },
      { id: '27:61:11', arabic: "وَجَعَلَ", transliteration: "wajaʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and made", ur: "اور made" } },
      { id: '27:61:12', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '27:61:13', arabic: "ٱلْبَحْرَيْنِ", transliteration: "l-baḥrayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the two seas", ur: "the two seas" } },
      { id: '27:61:14', arabic: "حَاجِزًا ۗ", transliteration: "ḥājizan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a barrier", ur: "a barrier" } },
      { id: '27:61:15', arabic: "أَءِلَـٰهٌۭ", transliteration: "a-ilāhun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is there any god", ur: "Is there any اللہ" } },
      { id: '27:61:16', arabic: "مَّعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '27:61:17', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:61:18', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '27:61:19', arabic: "أَكْثَرُهُمْ", transliteration: "aktharuhum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '27:61:20', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '27:61:21', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'نفی + فعل' }
      ],
    },
  },
  62: {
    text: "أَمَّن يُجِيبُ ٱلْمُضْطَرَّ إِذَا دَعَاهُ وَيَكْشِفُ ٱلسُّوٓءَ وَيَجْعَلُكُمْ خُلَفَآءَ ٱلْأَرْضِ ۗ أَءِلَـٰهٌۭ مَّعَ ٱللَّهِ ۚ قَلِيلًۭا مَّا تَذَكَّرُونَ",
    translation: {
      en: "",
      ur: "بھلا کون بیقرار کی التجا قبول کرتا ہے۔ جب وہ اس سے دعا کرتا ہے اور (کون اس کی) تکلیف کو دور کرتا ہے اور (کون) تم کو زمین میں (اگلوں کا) جانشین بناتا ہے (یہ سب کچھ خدا کرتا ہے) تو کیا خدا کے ساتھ کوئی اور معبود بھی ہے (ہرگز نہیں مگر) تم بہت کم غور کرتے ہو",
    },
    words: [
      { id: '27:62:1', arabic: "أَمَّن", transliteration: "amman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or Who", ur: "یا جو" } },
      { id: '27:62:2', arabic: "يُجِيبُ", transliteration: "yujību", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "responds", ur: "responds" } },
      { id: '27:62:3', arabic: "ٱلْمُضْطَرَّ", transliteration: "l-muḍ'ṭara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the distressed one", ur: "(کو) the distressed one" } },
      { id: '27:62:4', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '27:62:5', arabic: "دَعَاهُ", transliteration: "daʿāhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he calls Him", ur: "وہ calls Him" } },
      { id: '27:62:6', arabic: "وَيَكْشِفُ", transliteration: "wayakshifu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He removes", ur: "اور وہ removes" } },
      { id: '27:62:7', arabic: "ٱلسُّوٓءَ", transliteration: "l-sūa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the evil", ur: "the برا" } },
      { id: '27:62:8', arabic: "وَيَجْعَلُكُمْ", transliteration: "wayajʿalukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and makes you", ur: "اور makes تم" } },
      { id: '27:62:9', arabic: "خُلَفَآءَ", transliteration: "khulafāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "inheritors", ur: "inheritors" } },
      { id: '27:62:10', arabic: "ٱلْأَرْضِ ۗ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "(of) the earth", ur: "(of) زمین" } },
      { id: '27:62:11', arabic: "أَءِلَـٰهٌۭ", transliteration: "a-ilāhun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is there any god", ur: "Is there any اللہ" } },
      { id: '27:62:12', arabic: "مَّعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '27:62:13', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:62:14', arabic: "قَلِيلًۭا", transliteration: "qalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Little", ur: "Little" } },
      { id: '27:62:15', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) what", ur: "(is) کیا" } },
      { id: '27:62:16', arabic: "تَذَكَّرُونَ", transliteration: "tadhakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you remember", ur: "تم remember" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  63: {
    text: "أَمَّن يَهْدِيكُمْ فِى ظُلُمَـٰتِ ٱلْبَرِّ وَٱلْبَحْرِ وَمَن يُرْسِلُ ٱلرِّيَـٰحَ بُشْرًۢا بَيْنَ يَدَىْ رَحْمَتِهِۦٓ ۗ أَءِلَـٰهٌۭ مَّعَ ٱللَّهِ ۚ تَعَـٰلَى ٱللَّهُ عَمَّا يُشْرِكُونَ",
    translation: {
      en: "",
      ur: "بھلا کون تم کو جنگل اور دریا کے اندھیروں میں رستہ بناتا ہے اور (کون) ہواؤں کو اپنی رحمت کے آگے خوشخبری بناکر بھیجتا ہے (یہ سب کچھ خدا کرتا ہے) تو کیا خدا کے ساتھ کوئی اور معبود بھی ہے؟ (ہرگز نہیں)۔ یہ لوگ جو شرک کرتے ہیں خدا (کی شان) اس سے بلند ہے",
    },
    words: [
      { id: '27:63:1', arabic: "أَمَّن", transliteration: "amman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or Who", ur: "یا جو" } },
      { id: '27:63:2', arabic: "يَهْدِيكُمْ", transliteration: "yahdīkum", pos: ['V'], posLabel: 'V', root: "ه د ي", meaning: { en: "guides you", ur: "guides تم" } },
      { id: '27:63:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:63:4', arabic: "ظُلُمَـٰتِ", transliteration: "ẓulumāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) darkness[es]", ur: "(the) darkness[es]" } },
      { id: '27:63:5', arabic: "ٱلْبَرِّ", transliteration: "l-bari", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the land", ur: "(of) the land" } },
      { id: '27:63:6', arabic: "وَٱلْبَحْرِ", transliteration: "wal-baḥri", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the sea", ur: "اور the sea" } },
      { id: '27:63:7', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Who", ur: "اور جو" } },
      { id: '27:63:8', arabic: "يُرْسِلُ", transliteration: "yur'silu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "sends", ur: "sends" } },
      { id: '27:63:9', arabic: "ٱلرِّيَـٰحَ", transliteration: "l-riyāḥa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the winds", ur: "the winds" } },
      { id: '27:63:10', arabic: "بُشْرًۢا", transliteration: "bush'ran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) glad tidings", ur: "(as) glad tidings" } },
      { id: '27:63:11', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '27:63:12', arabic: "يَدَىْ", transliteration: "yaday", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '27:63:13', arabic: "رَحْمَتِهِۦٓ ۗ", transliteration: "raḥmatihi", pos: ['N'], posLabel: 'N', root: "ر ح م", meaning: { en: "His Mercy", ur: "His رحمت" } },
      { id: '27:63:14', arabic: "أَءِلَـٰهٌۭ", transliteration: "a-ilāhun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is there any god", ur: "Is there any اللہ" } },
      { id: '27:63:15', arabic: "مَّعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '27:63:16', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:63:17', arabic: "تَعَـٰلَى", transliteration: "taʿālā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "High is", ur: "High is" } },
      { id: '27:63:18', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:63:19', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "above what", ur: "above کیا" } },
      { id: '27:63:20', arabic: "يُشْرِكُونَ", transliteration: "yush'rikūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they associate (with Him)", ur: "وہ لوگ associate (ساتھ Him)" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' }
      ],
    },
  },
  64: {
    text: "أَمَّن يَبْدَؤُا۟ ٱلْخَلْقَ ثُمَّ يُعِيدُهُۥ وَمَن يَرْزُقُكُم مِّنَ ٱلسَّمَآءِ وَٱلْأَرْضِ ۗ أَءِلَـٰهٌۭ مَّعَ ٱللَّهِ ۚ قُلْ هَاتُوا۟ بُرْهَـٰنَكُمْ إِن كُنتُمْ صَـٰدِقِينَ",
    translation: {
      en: "",
      ur: "بھلا کون خلقت کو پہلی بار پیدا کرتا۔ پھر اس کو بار بار پیدا کرتا رہتا ہے اور (کون) تم کو آسمان اور زمین سے رزق دیتا ہے (یہ سب کچھ خدا کرتا ہے) تو کیا خدا کے ساتھ کوئی اور معبود بھی ہے (ہرگز نہیں) کہہ دو کہ (مشرکو) اگر تم سچے ہو تو دلیل پیش کرو",
    },
    words: [
      { id: '27:64:1', arabic: "أَمَّن", transliteration: "amman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Or Who", ur: "یا جو" } },
      { id: '27:64:2', arabic: "يَبْدَؤُا۟", transliteration: "yabda-u", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "originates", ur: "originates" } },
      { id: '27:64:3', arabic: "ٱلْخَلْقَ", transliteration: "l-khalqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the creation", ur: "the تخلیق" } },
      { id: '27:64:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '27:64:5', arabic: "يُعِيدُهُۥ", transliteration: "yuʿīduhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "repeats it", ur: "repeats it" } },
      { id: '27:64:6', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Who", ur: "اور جو" } },
      { id: '27:64:7', arabic: "يَرْزُقُكُم", transliteration: "yarzuqukum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "provides you", ur: "provides تم" } },
      { id: '27:64:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:64:9', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '27:64:10', arabic: "وَٱلْأَرْضِ ۗ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '27:64:11', arabic: "أَءِلَـٰهٌۭ", transliteration: "a-ilāhun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Is there any god", ur: "Is there any اللہ" } },
      { id: '27:64:12', arabic: "مَّعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with", ur: "ساتھ" } },
      { id: '27:64:13', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:64:14', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '27:64:15', arabic: "هَاتُوا۟", transliteration: "hātū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Bring forth", ur: "Bring forth" } },
      { id: '27:64:16', arabic: "بُرْهَـٰنَكُمْ", transliteration: "bur'hānakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your proof", ur: "your proof" } },
      { id: '27:64:17', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '27:64:18', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '27:64:19', arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "truthful", ur: "truthful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'فعل + فاعل' }
      ],
    },
  },
  65: {
    text: "قُل لَّا يَعْلَمُ مَن فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ٱلْغَيْبَ إِلَّا ٱللَّهُ ۚ وَمَا يَشْعُرُونَ أَيَّانَ يُبْعَثُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ جو لوگ آسمانوں اور زمین میں ہیں خدا کے سوا غیب کی باتیں نہیں جانتے۔ اور نہ یہ جانتے ہیں کہ کب (زندہ کرکے) اٹھائے جائیں گے",
    },
    words: [
      { id: '27:65:1', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '27:65:2', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "No (one)", ur: "نہیں (one)" } },
      { id: '27:65:3', arabic: "يَعْلَمُ", transliteration: "yaʿlamu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "knows", ur: "knows" } },
      { id: '27:65:4', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whoever", ur: "whoever" } },
      { id: '27:65:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '27:65:6', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '27:65:7', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '27:65:8', arabic: "ٱلْغَيْبَ", transliteration: "l-ghayba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the unseen", ur: "(of) the unseen" } },
      { id: '27:65:9', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '27:65:10', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:65:11', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '27:65:12', arabic: "يَشْعُرُونَ", transliteration: "yashʿurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they perceive", ur: "وہ لوگ perceive" } },
      { id: '27:65:13', arabic: "أَيَّانَ", transliteration: "ayyāna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '27:65:14', arabic: "يُبْعَثُونَ", transliteration: "yub'ʿathūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be resurrected", ur: "وہ لوگ will be resurrected" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  66: {
    text: "بَلِ ٱدَّٰرَكَ عِلْمُهُمْ فِى ٱلْـَٔاخِرَةِ ۚ بَلْ هُمْ فِى شَكٍّۢ مِّنْهَا ۖ بَلْ هُم مِّنْهَا عَمُونَ",
    translation: {
      en: "",
      ur: "بلکہ آخرت (کے بارے) میں ان کا علم منتہی ہوچکا ہے بلکہ وہ اس سے شک میں ہیں۔ بلکہ اس سے اندھے ہو رہے ہیں",
    },
    words: [
      { id: '27:66:1', arabic: "بَلِ", transliteration: "bali", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '27:66:2', arabic: "ٱدَّٰرَكَ", transliteration: "iddāraka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is arrested", ur: "is arrested" } },
      { id: '27:66:3', arabic: "عِلْمُهُمْ", transliteration: "ʿil'muhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their knowledge", ur: "their knowledge" } },
      { id: '27:66:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:66:5', arabic: "ٱلْـَٔاخِرَةِ ۚ", transliteration: "l-ākhirati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Hereafter", ur: "the آخرت" } },
      { id: '27:66:6', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '27:66:7', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '27:66:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) in", ur: "(are) میں" } },
      { id: '27:66:9', arabic: "شَكٍّۢ", transliteration: "shakkin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "doubt", ur: "doubt" } },
      { id: '27:66:10', arabic: "مِّنْهَا ۖ", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about it", ur: "about it" } },
      { id: '27:66:11', arabic: "بَلْ", transliteration: "bal", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "Nay", ur: "Nay" } },
      { id: '27:66:12', arabic: "هُم", transliteration: "hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '27:66:13', arabic: "مِّنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "about it", ur: "about it" } },
      { id: '27:66:14', arabic: "عَمُونَ", transliteration: "ʿamūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) blind", ur: "(are) blind" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  67: {
    text: "وَقَالَ ٱلَّذِينَ كَفَرُوٓا۟ أَءِذَا كُنَّا تُرَٰبًۭا وَءَابَآؤُنَآ أَئِنَّا لَمُخْرَجُونَ",
    translation: {
      en: "",
      ur: "اور جو لوگ کافر ہیں کہتے ہیں جب ہم اور ہمارے باپ دادا مٹی ہو جائیں گے تو کیا ہم پھر (قبروں سے) نکالے جائیں گے",
    },
    words: [
      { id: '27:67:1', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And say", ur: "اور کہو" } },
      { id: '27:67:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '27:67:3', arabic: "كَفَرُوٓا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '27:67:4', arabic: "أَءِذَا", transliteration: "a-idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "What, when", ur: "کیا, when" } },
      { id: '27:67:5', arabic: "كُنَّا", transliteration: "kunnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have become", ur: "ہم have become" } },
      { id: '27:67:6', arabic: "تُرَٰبًۭا", transliteration: "turāban", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "dust", ur: "dust" } },
      { id: '27:67:7', arabic: "وَءَابَآؤُنَآ", transliteration: "waābāunā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and our forefathers", ur: "اور our forefathers" } },
      { id: '27:67:8', arabic: "أَئِنَّا", transliteration: "a-innā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will we", ur: "will ہم" } },
      { id: '27:67:9', arabic: "لَمُخْرَجُونَ", transliteration: "lamukh'rajūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely be brought out", ur: "یقیناً be brought out" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  68: {
    text: "لَقَدْ وُعِدْنَا هَـٰذَا نَحْنُ وَءَابَآؤُنَا مِن قَبْلُ إِنْ هَـٰذَآ إِلَّآ أَسَـٰطِيرُ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "یہ وعدہ ہم سے اور ہمارے باپ دادا سے پہلے سے ہوتا چلا آیا ہے (کہاں کا اُٹھنا اور کیسی قیامت) یہ تو صرف پہلے لوگوں کی کہانیاں ہیں",
    },
    words: [
      { id: '27:68:1', arabic: "لَقَدْ", transliteration: "laqad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Certainly", ur: "Certainly" } },
      { id: '27:68:2', arabic: "وُعِدْنَا", transliteration: "wuʿid'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have been promised", ur: "ہم have been promised" } },
      { id: '27:68:3', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '27:68:4', arabic: "نَحْنُ", transliteration: "naḥnu", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "we", ur: "ہم" } },
      { id: '27:68:5', arabic: "وَءَابَآؤُنَا", transliteration: "waābāunā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and our forefathers", ur: "اور our forefathers" } },
      { id: '27:68:6', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '27:68:7', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '27:68:8', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '27:68:9', arabic: "هَـٰذَآ", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) this", ur: "(is) this" } },
      { id: '27:68:10', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '27:68:11', arabic: "أَسَـٰطِيرُ", transliteration: "asāṭīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "tales", ur: "tales" } },
      { id: '27:68:12', arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the former (people)", ur: "(of) the former (لوگ)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  69: {
    text: "قُلْ سِيرُوا۟ فِى ٱلْأَرْضِ فَٱنظُرُوا۟ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُجْرِمِينَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ ملک میں چلو پھرو پھر دیکھو کہ گنہگاروں کا انجام کیا ہوا ہے",
    },
    words: [
      { id: '27:69:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '27:69:2', arabic: "سِيرُوا۟", transliteration: "sīrū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Travel", ur: "Travel" } },
      { id: '27:69:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:69:4', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the land", ur: "the land" } },
      { id: '27:69:5', arabic: "فَٱنظُرُوا۟", transliteration: "fa-unẓurū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and see", ur: "اور دیکھنا" } },
      { id: '27:69:6', arabic: "كَيْفَ", transliteration: "kayfa", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "how", ur: "how" } },
      { id: '27:69:7', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '27:69:8', arabic: "عَـٰقِبَةُ", transliteration: "ʿāqibatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) end", ur: "(the) end" } },
      { id: '27:69:9', arabic: "ٱلْمُجْرِمِينَ", transliteration: "l-muj'rimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the criminals", ur: "(of) the criminals" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  70: {
    text: "وَلَا تَحْزَنْ عَلَيْهِمْ وَلَا تَكُن فِى ضَيْقٍۢ مِّمَّا يَمْكُرُونَ",
    translation: {
      en: "",
      ur: "اور ان (کے حال) پر غم نہ کرنا اور نہ اُن چالوں سے جو یہ کر رہے ہیں تنگ دل ہونا",
    },
    words: [
      { id: '27:70:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '27:70:2', arabic: "تَحْزَنْ", transliteration: "taḥzan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "grieve", ur: "grieve" } },
      { id: '27:70:3', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '27:70:4', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '27:70:5', arabic: "تَكُن", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be", ur: "be" } },
      { id: '27:70:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:70:7', arabic: "ضَيْقٍۢ", transliteration: "ḍayqin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "distress", ur: "distress" } },
      { id: '27:70:8', arabic: "مِّمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from what", ur: "سے کیا" } },
      { id: '27:70:9', arabic: "يَمْكُرُونَ", transliteration: "yamkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they plot", ur: "وہ لوگ plot" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  71: {
    text: "وَيَقُولُونَ مَتَىٰ هَـٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَـٰدِقِينَ",
    translation: {
      en: "",
      ur: "اور کہتے ہیں کہ اگر تم سچے ہو تو یہ وعدہ کب پورا ہوگا؟",
    },
    words: [
      { id: '27:71:1', arabic: "وَيَقُولُونَ", transliteration: "wayaqūlūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" } },
      { id: '27:71:2', arabic: "مَتَىٰ", transliteration: "matā", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "When", ur: "When" } },
      { id: '27:71:3', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) this", ur: "(will) this" } },
      { id: '27:71:4', arabic: "ٱلْوَعْدُ", transliteration: "l-waʿdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "promise (be fulfilled)", ur: "promise (be fulfilled)" } },
      { id: '27:71:5', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '27:71:6', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you are", ur: "تم are" } },
      { id: '27:71:7', arabic: "صَـٰدِقِينَ", transliteration: "ṣādiqīna", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "truthful", ur: "truthful" } }
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
  72: {
    text: "قُلْ عَسَىٰٓ أَن يَكُونَ رَدِفَ لَكُم بَعْضُ ٱلَّذِى تَسْتَعْجِلُونَ",
    translation: {
      en: "",
      ur: "کہہ دو کہ جس (عذاب) کے لئے تم جلدی کر رہے ہو شاید اس میں سے کچھ تمہارے نزدیک آپہنچا ہو",
    },
    words: [
      { id: '27:72:1', arabic: "قُلْ", transliteration: "qul", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "Say", ur: "کہو" } },
      { id: '27:72:2', arabic: "عَسَىٰٓ", transliteration: "ʿasā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Perhaps", ur: "Perhaps" } },
      { id: '27:72:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:72:4', arabic: "يَكُونَ", transliteration: "yakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is", ur: "is" } },
      { id: '27:72:5', arabic: "رَدِفَ", transliteration: "radifa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "close behind", ur: "close behind" } },
      { id: '27:72:6', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '27:72:7', arabic: "بَعْضُ", transliteration: "baʿḍu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "some", ur: "some" } },
      { id: '27:72:8', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) that which", ur: "(of) وہ جو" } },
      { id: '27:72:9', arabic: "تَسْتَعْجِلُونَ", transliteration: "tastaʿjilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you seek to hasten", ur: "تم seek کو hasten" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  73: {
    text: "وَإِنَّ رَبَّكَ لَذُو فَضْلٍ عَلَى ٱلنَّاسِ وَلَـٰكِنَّ أَكْثَرَهُمْ لَا يَشْكُرُونَ",
    translation: {
      en: "",
      ur: "اور تمہارا پروردگار تو لوگوں پر فضل کرنے والا ہے لیکن ان میں سے اکثر شکر نہیں کرتے",
    },
    words: [
      { id: '27:73:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '27:73:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '27:73:3', arabic: "لَذُو", transliteration: "ladhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) full of Bounty", ur: "(is) full of Bounty" } },
      { id: '27:73:4', arabic: "فَضْلٍ", transliteration: "faḍlin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(is) full of Bounty", ur: "(is) full of Bounty" } },
      { id: '27:73:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "for", ur: "for" } },
      { id: '27:73:6', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mankind", ur: "the mankind" } },
      { id: '27:73:7', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '27:73:8', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '27:73:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(are) not", ur: "(are) نہیں" } },
      { id: '27:73:10', arabic: "يَشْكُرُونَ", transliteration: "yashkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "grateful", ur: "grateful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'نفی + فعل' }
      ],
    },
  },
  74: {
    text: "وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ وَمَا يُعْلِنُونَ",
    translation: {
      en: "",
      ur: "اور جو باتیں ان کے سینوں میں پوشیدہ ہوتی ہیں اور جو کام وہ ظاہر کرتے ہیں تمہارا پروردگار ان (سب) کو جانتا ہے",
    },
    words: [
      { id: '27:74:1', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '27:74:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '27:74:3', arabic: "لَيَعْلَمُ", transliteration: "layaʿlamu", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "surely knows", ur: "یقیناً knows" } },
      { id: '27:74:4', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '27:74:5', arabic: "تُكِنُّ", transliteration: "tukinnu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "conceals", ur: "conceals" } },
      { id: '27:74:6', arabic: "صُدُورُهُمْ", transliteration: "ṣudūruhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their breasts", ur: "their breasts" } },
      { id: '27:74:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and what", ur: "اور کیا" } },
      { id: '27:74:8', arabic: "يُعْلِنُونَ", transliteration: "yuʿ'linūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they declare", ur: "وہ لوگ declare" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  75: {
    text: "وَمَا مِنْ غَآئِبَةٍۢ فِى ٱلسَّمَآءِ وَٱلْأَرْضِ إِلَّا فِى كِتَـٰبٍۢ مُّبِينٍ",
    translation: {
      en: "",
      ur: "اور آسمانوں اور زمین میں کوئی پوشیدہ چیز نہیں ہے مگر (وہ) کتاب روشن میں (لکھی ہوئی) ہے",
    },
    words: [
      { id: '27:75:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not (is)", ur: "اور نہیں (is)" } },
      { id: '27:75:2', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "any (thing)", ur: "any (thing)" } },
      { id: '27:75:3', arabic: "غَآئِبَةٍۢ", transliteration: "ghāibatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "hidden", ur: "hidden" } },
      { id: '27:75:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:75:5', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '27:75:6', arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "أ ر ض", meaning: { en: "and the earth", ur: "اور زمین" } },
      { id: '27:75:7', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '27:75:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '27:75:9', arabic: "كِتَـٰبٍۢ", transliteration: "kitābin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a Record", ur: "a Record" } },
      { id: '27:75:10', arabic: "مُّبِينٍ", transliteration: "mubīnin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "clear", ur: "clear" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  76: {
    text: "إِنَّ هَـٰذَا ٱلْقُرْءَانَ يَقُصُّ عَلَىٰ بَنِىٓ إِسْرَٰٓءِيلَ أَكْثَرَ ٱلَّذِى هُمْ فِيهِ يَخْتَلِفُونَ",
    translation: {
      en: "",
      ur: "بےشک یہ قرآن بنی اسرائیل کے سامنے اکثر باتیں جن میں وہ اختلاف کرتے ہیں، بیان کر دیتا ہے",
    },
    words: [
      { id: '27:76:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '27:76:2', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '27:76:3', arabic: "ٱلْقُرْءَانَ", transliteration: "l-qur'āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] Quran", ur: "[the] Quran" } },
      { id: '27:76:4', arabic: "يَقُصُّ", transliteration: "yaquṣṣu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "relates", ur: "relates" } },
      { id: '27:76:5', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '27:76:6', arabic: "بَنِىٓ", transliteration: "banī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Children", ur: "(the) اولاد" } },
      { id: '27:76:7', arabic: "إِسْرَٰٓءِيلَ", transliteration: "is'rāīla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Israel", ur: "(of) Israel" } },
      { id: '27:76:8', arabic: "أَكْثَرَ", transliteration: "akthara", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "most", ur: "most" } },
      { id: '27:76:9', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) that", ur: "(of) وہ" } },
      { id: '27:76:10', arabic: "هُمْ", transliteration: "hum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '27:76:11', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '27:76:12', arabic: "يَخْتَلِفُونَ", transliteration: "yakhtalifūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "differ", ur: "differ" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  77: {
    text: "وَإِنَّهُۥ لَهُدًۭى وَرَحْمَةٌۭ لِّلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور بےشک یہ مومنوں کے لئے ہدایات اور رحمت ہے",
    },
    words: [
      { id: '27:77:1', arabic: "وَإِنَّهُۥ", transliteration: "wa-innahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed, it", ur: "اور بیشک, it" } },
      { id: '27:77:2', arabic: "لَهُدًۭى", transliteration: "lahudan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) surely a guidance", ur: "(is) یقیناً a guidance" } },
      { id: '27:77:3', arabic: "وَرَحْمَةٌۭ", transliteration: "waraḥmatun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a mercy", ur: "اور a رحمت" } },
      { id: '27:77:4', arabic: "لِّلْمُؤْمِنِينَ", transliteration: "lil'mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for the believers", ur: "for the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'تعلق' },
        { from: 2, to: 3, label: 'تعلق' },
        { from: 3, to: 4, label: 'تعلق' }
      ],
    },
  },
  78: {
    text: "إِنَّ رَبَّكَ يَقْضِى بَيْنَهُم بِحُكْمِهِۦ ۚ وَهُوَ ٱلْعَزِيزُ ٱلْعَلِيمُ",
    translation: {
      en: "",
      ur: "تمہارا پروردگار (قیامت کے روز) اُن میں اپنے حکم سے فیصلہ کر دے گا اور وہ غالب (اور) علم والا ہے",
    },
    words: [
      { id: '27:78:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '27:78:2', arabic: "رَبَّكَ", transliteration: "rabbaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '27:78:3', arabic: "يَقْضِى", transliteration: "yaqḍī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will judge", ur: "will judge" } },
      { id: '27:78:4', arabic: "بَيْنَهُم", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '27:78:5', arabic: "بِحُكْمِهِۦ ۚ", transliteration: "biḥuk'mihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by His Judgment", ur: "by His Judgment" } },
      { id: '27:78:6', arabic: "وَهُوَ", transliteration: "wahuwa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He", ur: "اور وہ" } },
      { id: '27:78:7', arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) the All-Mighty", ur: "(is) the سب-Mighty" } },
      { id: '27:78:8', arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the All-Knower", ur: "the سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  79: {
    text: "فَتَوَكَّلْ عَلَى ٱللَّهِ ۖ إِنَّكَ عَلَى ٱلْحَقِّ ٱلْمُبِينِ",
    translation: {
      en: "",
      ur: "تو خدا پر بھروسہ رکھو تم تو حق صریح پر ہو",
    },
    words: [
      { id: '27:79:1', arabic: "فَتَوَكَّلْ", transliteration: "fatawakkal", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So put your trust", ur: "So put your trust" } },
      { id: '27:79:2', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:79:3', arabic: "ٱللَّهِ ۖ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '27:79:4', arabic: "إِنَّكَ", transliteration: "innaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, you", ur: "بیشک, تم" } },
      { id: '27:79:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(are) on", ur: "(are) پر" } },
      { id: '27:79:6', arabic: "ٱلْحَقِّ", transliteration: "l-ḥaqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '27:79:7', arabic: "ٱلْمُبِينِ", transliteration: "l-mubīni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "manifest", ur: "manifest" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  80: {
    text: "إِنَّكَ لَا تُسْمِعُ ٱلْمَوْتَىٰ وَلَا تُسْمِعُ ٱلصُّمَّ ٱلدُّعَآءَ إِذَا وَلَّوْا۟ مُدْبِرِينَ",
    translation: {
      en: "",
      ur: "کچھ شک نہیں کہ تم مردوں کو (بات) نہیں سنا سکتے اور نہ بہروں کو جب کہ وہ پیٹھ پھیر کر پھر جائیں آواز سنا سکتے ہو",
    },
    words: [
      { id: '27:80:1', arabic: "إِنَّكَ", transliteration: "innaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, you", ur: "بیشک, تم" } },
      { id: '27:80:2', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(can) not", ur: "(can) نہیں" } },
      { id: '27:80:3', arabic: "تُسْمِعُ", transliteration: "tus'miʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "cause to hear", ur: "cause کو سننا" } },
      { id: '27:80:4', arabic: "ٱلْمَوْتَىٰ", transliteration: "l-mawtā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the dead", ur: "the dead" } },
      { id: '27:80:5', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '27:80:6', arabic: "تُسْمِعُ", transliteration: "tus'miʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "can you cause to hear", ur: "can تم cause کو سننا" } },
      { id: '27:80:7', arabic: "ٱلصُّمَّ", transliteration: "l-ṣuma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the deaf", ur: "the deaf" } },
      { id: '27:80:8', arabic: "ٱلدُّعَآءَ", transliteration: "l-duʿāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the call", ur: "the call" } },
      { id: '27:80:9', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '27:80:10', arabic: "وَلَّوْا۟", transliteration: "wallaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "they turn back", ur: "وہ لوگ turn back" } },
      { id: '27:80:11', arabic: "مُدْبِرِينَ", transliteration: "mud'birīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "retreating", ur: "retreating" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  81: {
    text: "وَمَآ أَنتَ بِهَـٰدِى ٱلْعُمْىِ عَن ضَلَـٰلَتِهِمْ ۖ إِن تُسْمِعُ إِلَّا مَن يُؤْمِنُ بِـَٔايَـٰتِنَا فَهُم مُّسْلِمُونَ",
    translation: {
      en: "",
      ur: "اور نہ اندھوں کو گمراہی سے (نکال کر) رستہ دیکھا سکتے ہو۔ تم ان ہی کو سنا سکتے ہو جو ہماری آیتوں پر ایمان لاتے ہیں اور وہ فرمانبردار ہو جاتے ہیں",
    },
    words: [
      { id: '27:81:1', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '27:81:2', arabic: "أَنتَ", transliteration: "anta", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "(can) you", ur: "(can) تم" } },
      { id: '27:81:3', arabic: "بِهَـٰدِى", transliteration: "bihādī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "guide", ur: "guide" } },
      { id: '27:81:4', arabic: "ٱلْعُمْىِ", transliteration: "l-ʿum'yi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the blind", ur: "the blind" } },
      { id: '27:81:5', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:81:6', arabic: "ضَلَـٰلَتِهِمْ ۖ", transliteration: "ḍalālatihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their error", ur: "their error" } },
      { id: '27:81:7', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '27:81:8', arabic: "تُسْمِعُ", transliteration: "tus'miʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you can cause to hear", ur: "تم can cause کو سننا" } },
      { id: '27:81:9', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '27:81:10', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(those) who", ur: "(those) جو" } },
      { id: '27:81:11', arabic: "يُؤْمِنُ", transliteration: "yu'minu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '27:81:12', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Our Signs", ur: "میں Our نشانیاں" } },
      { id: '27:81:13', arabic: "فَهُم", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so they", ur: "so وہ لوگ" } },
      { id: '27:81:14', arabic: "مُّسْلِمُونَ", transliteration: "mus'limūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) Muslims", ur: "(are) Muslims" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'موصول + صلة' }
      ],
    },
  },
  82: {
    text: "۞ وَإِذَا وَقَعَ ٱلْقَوْلُ عَلَيْهِمْ أَخْرَجْنَا لَهُمْ دَآبَّةًۭ مِّنَ ٱلْأَرْضِ تُكَلِّمُهُمْ أَنَّ ٱلنَّاسَ كَانُوا۟ بِـَٔايَـٰتِنَا لَا يُوقِنُونَ",
    translation: {
      en: "",
      ur: "اور جب اُن کے بارے میں (عذاب) کا وعدہ پورا ہوگا تو ہم اُن کے لئے زمین میں سے ایک جانور نکالیں گے جو ان سے بیان کر دے گا۔ اس لئے کہ لوگ ہماری آیتوں پر ایمان نہیں لاتے تھے",
    },
    words: [
      { id: '27:82:1', arabic: "۞ وَإِذَا", transliteration: "wa-idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '27:82:2', arabic: "وَقَعَ", transliteration: "waqaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "(is) fulfilled", ur: "(is) fulfilled" } },
      { id: '27:82:3', arabic: "ٱلْقَوْلُ", transliteration: "l-qawlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the word", ur: "the word" } },
      { id: '27:82:4', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against them", ur: "against them" } },
      { id: '27:82:5', arabic: "أَخْرَجْنَا", transliteration: "akhrajnā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will bring forth", ur: "ہم will bring forth" } },
      { id: '27:82:6', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '27:82:7', arabic: "دَآبَّةًۭ", transliteration: "dābbatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a creature", ur: "a creature" } },
      { id: '27:82:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:82:9', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '27:82:10', arabic: "تُكَلِّمُهُمْ", transliteration: "tukallimuhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "speaking to them", ur: "speaking کو them" } },
      { id: '27:82:11', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:82:12', arabic: "ٱلنَّاسَ", transliteration: "l-nāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '27:82:13', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '27:82:14', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of Our Signs", ur: "of Our نشانیاں" } },
      { id: '27:82:15', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '27:82:16', arabic: "يُوقِنُونَ", transliteration: "yūqinūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "certain", ur: "certain" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  83: {
    text: "وَيَوْمَ نَحْشُرُ مِن كُلِّ أُمَّةٍۢ فَوْجًۭا مِّمَّن يُكَذِّبُ بِـَٔايَـٰتِنَا فَهُمْ يُوزَعُونَ",
    translation: {
      en: "",
      ur: "اور جس روز ہم ہر اُمت میں سے اس گروہ کو جمع کریں گے جو ہماری آیتوں کی تکذیب کرتے تھے تو اُن کی جماعت بندی کی جائے گی",
    },
    words: [
      { id: '27:83:1', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (the) Day", ur: "اور (the) دن" } },
      { id: '27:83:2', arabic: "نَحْشُرُ", transliteration: "naḥshuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will gather", ur: "ہم will gather" } },
      { id: '27:83:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:83:4', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '27:83:5', arabic: "أُمَّةٍۢ", transliteration: "ummatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "nation", ur: "nation" } },
      { id: '27:83:6', arabic: "فَوْجًۭا", transliteration: "fawjan", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "a troop", ur: "a troop" } },
      { id: '27:83:7', arabic: "مِّمَّن", transliteration: "mimman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of (those) who", ur: "of (those) جو" } },
      { id: '27:83:8', arabic: "يُكَذِّبُ", transliteration: "yukadhibu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "deny", ur: "deny" } },
      { id: '27:83:9', arabic: "بِـَٔايَـٰتِنَا", transliteration: "biāyātinā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "Our Signs", ur: "Our نشانیاں" } },
      { id: '27:83:10', arabic: "فَهُمْ", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '27:83:11', arabic: "يُوزَعُونَ", transliteration: "yūzaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be set in rows", ur: "will be set میں rows" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  84: {
    text: "حَتَّىٰٓ إِذَا جَآءُو قَالَ أَكَذَّبْتُم بِـَٔايَـٰتِى وَلَمْ تُحِيطُوا۟ بِهَا عِلْمًا أَمَّاذَا كُنتُمْ تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "یہاں تک کہ جب (سب) آجائیں گے تو (خدا) فرمائے گا کہ کیا تم نے میری آیتوں کو جھٹلا دیا تھا اور تم نے (اپنے) علم سے ان پر احاطہ تو کیا ہی نہ تھا۔ بھلا تم کیا کرتے تھے",
    },
    words: [
      { id: '27:84:1', arabic: "حَتَّىٰٓ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Until", ur: "Until" } },
      { id: '27:84:2', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '27:84:3', arabic: "جَآءُو", transliteration: "jāū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they come", ur: "وہ لوگ come" } },
      { id: '27:84:4', arabic: "قَالَ", transliteration: "qāla", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "He will say", ur: "وہ will کہو" } },
      { id: '27:84:5', arabic: "أَكَذَّبْتُم", transliteration: "akadhabtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Did you deny", ur: "Did تم deny" } },
      { id: '27:84:6', arabic: "بِـَٔايَـٰتِى", transliteration: "biāyātī", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "My Signs", ur: "My نشانیاں" } },
      { id: '27:84:7', arabic: "وَلَمْ", transliteration: "walam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while not", ur: "while نہیں" } },
      { id: '27:84:8', arabic: "تُحِيطُوا۟", transliteration: "tuḥīṭū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you encompassed", ur: "تم encompassed" } },
      { id: '27:84:9', arabic: "بِهَا", transliteration: "bihā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "them", ur: "them" } },
      { id: '27:84:10', arabic: "عِلْمًا", transliteration: "ʿil'man", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "(in) knowledge", ur: "(میں) knowledge" } },
      { id: '27:84:11', arabic: "أَمَّاذَا", transliteration: "ammādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or what", ur: "یا کیا" } },
      { id: '27:84:12', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used (to)", ur: "تم used (کو)" } },
      { id: '27:84:13', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  85: {
    text: "وَوَقَعَ ٱلْقَوْلُ عَلَيْهِم بِمَا ظَلَمُوا۟ فَهُمْ لَا يَنطِقُونَ",
    translation: {
      en: "",
      ur: "اور اُن کے ظلم کے سبب اُن کے حق میں وعدہ (عذاب) پورا ہوکر رہے گا تو وہ بول بھی نہ سکیں گے",
    },
    words: [
      { id: '27:85:1', arabic: "وَوَقَعَ", transliteration: "wawaqaʿa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (will be) fulfilled", ur: "اور (will be) fulfilled" } },
      { id: '27:85:2', arabic: "ٱلْقَوْلُ", transliteration: "l-qawlu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the word", ur: "the word" } },
      { id: '27:85:3', arabic: "عَلَيْهِم", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "against them", ur: "against them" } },
      { id: '27:85:4', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '27:85:5', arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "they wronged", ur: "وہ لوگ wronged" } },
      { id: '27:85:6', arabic: "فَهُمْ", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '27:85:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '27:85:8', arabic: "يَنطِقُونَ", transliteration: "yanṭiqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "speak", ur: "speak" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'نفی + فعل' }
      ],
    },
  },
  86: {
    text: "أَلَمْ يَرَوْا۟ أَنَّا جَعَلْنَا ٱلَّيْلَ لِيَسْكُنُوا۟ فِيهِ وَٱلنَّهَارَ مُبْصِرًا ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "کیا اُنہوں نے نہیں دیکھا کہ ہم نے رات کو (اس لئے) بنایا ہے کہ اس میں آرام کریں اور دن کو روشن (بنایا ہے کہ اس میں کام کریں) بےشک اس میں مومن لوگوں کے لئے نشانیاں ہیں",
    },
    words: [
      { id: '27:86:1', arabic: "أَلَمْ", transliteration: "alam", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Do not", ur: "Do نہیں" } },
      { id: '27:86:2', arabic: "يَرَوْا۟", transliteration: "yaraw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they see", ur: "وہ لوگ دیکھنا" } },
      { id: '27:86:3', arabic: "أَنَّا", transliteration: "annā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that We", ur: "وہ ہم" } },
      { id: '27:86:4', arabic: "جَعَلْنَا", transliteration: "jaʿalnā", pos: ['N'], posLabel: 'N', root: "ج ع ل", meaning: { en: "[We] have made", ur: "[ہم] have made" } },
      { id: '27:86:5', arabic: "ٱلَّيْلَ", transliteration: "al-layla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the night", ur: "the رات" } },
      { id: '27:86:6', arabic: "لِيَسْكُنُوا۟", transliteration: "liyaskunū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that they may rest", ur: "وہ وہ لوگ may rest" } },
      { id: '27:86:7', arabic: "فِيهِ", transliteration: "fīhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in it", ur: "میں it" } },
      { id: '27:86:8', arabic: "وَٱلنَّهَارَ", transliteration: "wal-nahāra", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the day", ur: "اور the دن" } },
      { id: '27:86:9', arabic: "مُبْصِرًا ۚ", transliteration: "mub'ṣiran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "giving visibility", ur: "giving visibility" } },
      { id: '27:86:10', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '27:86:11', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:86:12', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:86:13', arabic: "لَـَٔايَـٰتٍۢ", transliteration: "laāyātin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely (are) Signs", ur: "یقیناً (are) نشانیاں" } },
      { id: '27:86:14', arabic: "لِّقَوْمٍۢ", transliteration: "liqawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for a people", ur: "for a لوگ" } },
      { id: '27:86:15', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "who believe", ur: "جو ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  87: {
    text: "وَيَوْمَ يُنفَخُ فِى ٱلصُّورِ فَفَزِعَ مَن فِى ٱلسَّمَـٰوَٰتِ وَمَن فِى ٱلْأَرْضِ إِلَّا مَن شَآءَ ٱللَّهُ ۚ وَكُلٌّ أَتَوْهُ دَٰخِرِينَ",
    translation: {
      en: "",
      ur: "اور جس روز صور پھونکا جائے گا تو جو لوگ آسمانوں اور زمین میں ہیں سب گھبرا اُٹھیں گے مگر وہ جسے خدا چاہے اور سب اس کے پاس عاجز ہو کر چلے آئیں گے",
    },
    words: [
      { id: '27:87:1', arabic: "وَيَوْمَ", transliteration: "wayawma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ي و م", meaning: { en: "And (the) Day", ur: "اور (the) دن" } },
      { id: '27:87:2', arabic: "يُنفَخُ", transliteration: "yunfakhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be blown", ur: "will be blown" } },
      { id: '27:87:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[in]", ur: "[میں]" } },
      { id: '27:87:4', arabic: "ٱلصُّورِ", transliteration: "l-ṣūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the trumpet", ur: "the trumpet" } },
      { id: '27:87:5', arabic: "فَفَزِعَ", transliteration: "fafaziʿa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and will be terrified", ur: "اور will be terrified" } },
      { id: '27:87:6', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whoever", ur: "whoever" } },
      { id: '27:87:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '27:87:8', arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the heavens", ur: "the آسمان" } },
      { id: '27:87:9', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '27:87:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '27:87:11', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '27:87:12', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '27:87:13', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whom", ur: "whom" } },
      { id: '27:87:14', arabic: "شَآءَ", transliteration: "shāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah wills", ur: "اللہ wills" } },
      { id: '27:87:15', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah wills", ur: "اللہ wills" } },
      { id: '27:87:16', arabic: "وَكُلٌّ", transliteration: "wakullun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And all", ur: "اور سب" } },
      { id: '27:87:17', arabic: "أَتَوْهُ", transliteration: "atawhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(will) come to Him", ur: "(will) come کو Him" } },
      { id: '27:87:18', arabic: "دَٰخِرِينَ", transliteration: "dākhirīna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "humbled", ur: "humbled" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  88: {
    text: "وَتَرَى ٱلْجِبَالَ تَحْسَبُهَا جَامِدَةًۭ وَهِىَ تَمُرُّ مَرَّ ٱلسَّحَابِ ۚ صُنْعَ ٱللَّهِ ٱلَّذِىٓ أَتْقَنَ كُلَّ شَىْءٍ ۚ إِنَّهُۥ خَبِيرٌۢ بِمَا تَفْعَلُونَ",
    translation: {
      en: "",
      ur: "اور تم پہاڑوں کو دیکھتے ہو تو خیال کرتے ہو کہ (اپنی جگہ پر) کھڑے ہیں مگر وہ (اس روز) اس طرح اُڑے پھریں گے جیسے بادل۔ (یہ) خدا کی کاریگری ہے جس نے ہر چیز کو مضبوط بنایا۔ بےشک وہ تمہارے سب افعال سے باخبر ہے",
    },
    words: [
      { id: '27:88:1', arabic: "وَتَرَى", transliteration: "watarā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And you see", ur: "اور تم دیکھنا" } },
      { id: '27:88:2', arabic: "ٱلْجِبَالَ", transliteration: "l-jibāla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the mountains", ur: "the mountains" } },
      { id: '27:88:3', arabic: "تَحْسَبُهَا", transliteration: "taḥsabuhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thinking them", ur: "thinking them" } },
      { id: '27:88:4', arabic: "جَامِدَةًۭ", transliteration: "jāmidatan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "firmly fixed", ur: "firmly fixed" } },
      { id: '27:88:5', arabic: "وَهِىَ", transliteration: "wahiya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '27:88:6', arabic: "تَمُرُّ", transliteration: "tamurru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will pass", ur: "will pass" } },
      { id: '27:88:7', arabic: "مَرَّ", transliteration: "marra", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(as the) passing", ur: "(as the) passing" } },
      { id: '27:88:8', arabic: "ٱلسَّحَابِ ۚ", transliteration: "l-saḥābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the clouds", ur: "(of) the clouds" } },
      { id: '27:88:9', arabic: "صُنْعَ", transliteration: "ṣun'ʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(The) Work", ur: "(The) Work" } },
      { id: '27:88:10', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '27:88:11', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Who", ur: "جو" } },
      { id: '27:88:12', arabic: "أَتْقَنَ", transliteration: "atqana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "perfected", ur: "perfected" } },
      { id: '27:88:13', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '27:88:14', arabic: "شَىْءٍ ۚ", transliteration: "shayin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "things", ur: "things" } },
      { id: '27:88:15', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '27:88:16', arabic: "خَبِيرٌۢ", transliteration: "khabīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Aware", ur: "(is) سب-Aware" } },
      { id: '27:88:17', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '27:88:18', arabic: "تَفْعَلُونَ", transliteration: "tafʿalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'موصوف + صفت' }
      ],
    },
  },
  89: {
    text: "مَن جَآءَ بِٱلْحَسَنَةِ فَلَهُۥ خَيْرٌۭ مِّنْهَا وَهُم مِّن فَزَعٍۢ يَوْمَئِذٍ ءَامِنُونَ",
    translation: {
      en: "",
      ur: "جو شخص نیکی لےکر آئے گا تو اس کے لئے اس سے بہتر (بدلہ تیار) ہے اور ایسے لوگ (اُس روز) گھبراہٹ سے بےخوف ہوں گے",
    },
    words: [
      { id: '27:89:1', arabic: "مَن", transliteration: "man", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "Whoever", ur: "Whoever" } },
      { id: '27:89:2', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '27:89:3', arabic: "بِٱلْحَسَنَةِ", transliteration: "bil-ḥasanati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the good", ur: "ساتھ the اچھا" } },
      { id: '27:89:4', arabic: "فَلَهُۥ", transliteration: "falahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then for him", ur: "پھر for him" } },
      { id: '27:89:5', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) better", ur: "(will be) better" } },
      { id: '27:89:6', arabic: "مِّنْهَا", transliteration: "min'hā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than it", ur: "than it" } },
      { id: '27:89:7', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '27:89:8', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '27:89:9', arabic: "فَزَعٍۢ", transliteration: "fazaʿin", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "(the) terror", ur: "(the) terror" } },
      { id: '27:89:10', arabic: "يَوْمَئِذٍ", transliteration: "yawma-idhin", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(of) that Day", ur: "(of) وہ دن" } },
      { id: '27:89:11', arabic: "ءَامِنُونَ", transliteration: "āminūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(will be) safe", ur: "(will be) safe" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  90: {
    text: "وَمَن جَآءَ بِٱلسَّيِّئَةِ فَكُبَّتْ وُجُوهُهُمْ فِى ٱلنَّارِ هَلْ تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور جو برائی لے کر آئے گا تو ایسے لوگ اوندھے منہ دوزخ میں ڈال دیئے جائیں گے۔ تم کو تو اُن ہی اعمال کا بدلہ ملے گا جو تم کرتے رہے ہو",
    },
    words: [
      { id: '27:90:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '27:90:2', arabic: "جَآءَ", transliteration: "jāa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '27:90:3', arabic: "بِٱلسَّيِّئَةِ", transliteration: "bil-sayi-ati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with the evil", ur: "ساتھ the برا" } },
      { id: '27:90:4', arabic: "فَكُبَّتْ", transliteration: "fakubbat", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "will be cast down", ur: "will be cast down" } },
      { id: '27:90:5', arabic: "وُجُوهُهُمْ", transliteration: "wujūhuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their faces", ur: "their faces" } },
      { id: '27:90:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '27:90:7', arabic: "ٱلنَّارِ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Fire", ur: "the آگ" } },
      { id: '27:90:8', arabic: "هَلْ", transliteration: "hal", pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: "Are", ur: "Are" } },
      { id: '27:90:9', arabic: "تُجْزَوْنَ", transliteration: "tuj'zawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you recompensed", ur: "تم recompensed" } },
      { id: '27:90:10', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '27:90:11', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "(for) what", ur: "(for) کیا" } },
      { id: '27:90:12', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used (to)", ur: "تم used (کو)" } },
      { id: '27:90:13', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "do", ur: "do" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'موصول + صلة' }
      ],
    },
  },
  91: {
    text: "إِنَّمَآ أُمِرْتُ أَنْ أَعْبُدَ رَبَّ هَـٰذِهِ ٱلْبَلْدَةِ ٱلَّذِى حَرَّمَهَا وَلَهُۥ كُلُّ شَىْءٍۢ ۖ وَأُمِرْتُ أَنْ أَكُونَ مِنَ ٱلْمُسْلِمِينَ",
    translation: {
      en: "",
      ur: "(کہہ دو) کہ مجھ کو یہی ارشاد ہوا ہے کہ اس شہر (مکہ) کے مالک کی عبادت کروں جس نے اس کو محترم (اور مقام ادب) بنایا ہے اور سب چیز اُسی کی ہے اور یہ بھی حکم ہوا ہے کہ اس کا حکم بردار رہوں",
    },
    words: [
      { id: '27:91:1', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '27:91:2', arabic: "أُمِرْتُ", transliteration: "umir'tu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I am commanded", ur: "میں am commanded" } },
      { id: '27:91:3', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:91:4', arabic: "أَعْبُدَ", transliteration: "aʿbuda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I worship", ur: "میں عبادت" } },
      { id: '27:91:5', arabic: "رَبَّ", transliteration: "rabba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Lord", ur: "(the) رب" } },
      { id: '27:91:6', arabic: "هَـٰذِهِ", transliteration: "hādhihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) this", ur: "(of) this" } },
      { id: '27:91:7', arabic: "ٱلْبَلْدَةِ", transliteration: "l-baldati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "city", ur: "city" } },
      { id: '27:91:8', arabic: "ٱلَّذِى", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who", ur: "the One جو" } },
      { id: '27:91:9', arabic: "حَرَّمَهَا", transliteration: "ḥarramahā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "made it sacred", ur: "made it sacred" } },
      { id: '27:91:10', arabic: "وَلَهُۥ", transliteration: "walahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and to Him (belongs)", ur: "اور کو Him (belongs)" } },
      { id: '27:91:11', arabic: "كُلُّ", transliteration: "kullu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '27:91:12', arabic: "شَىْءٍۢ ۖ", transliteration: "shayin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "things", ur: "things" } },
      { id: '27:91:13', arabic: "وَأُمِرْتُ", transliteration: "wa-umir'tu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And I am commanded", ur: "اور میں am commanded" } },
      { id: '27:91:14', arabic: "أَنْ", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '27:91:15', arabic: "أَكُونَ", transliteration: "akūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I be", ur: "میں be" } },
      { id: '27:91:16', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:91:17', arabic: "ٱلْمُسْلِمِينَ", transliteration: "l-mus'limīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Muslims", ur: "the Muslims" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  92: {
    text: "وَأَنْ أَتْلُوَا۟ ٱلْقُرْءَانَ ۖ فَمَنِ ٱهْتَدَىٰ فَإِنَّمَا يَهْتَدِى لِنَفْسِهِۦ ۖ وَمَن ضَلَّ فَقُلْ إِنَّمَآ أَنَا۠ مِنَ ٱلْمُنذِرِينَ",
    translation: {
      en: "",
      ur: "اور یہ بھی کہ قرآن پڑھا کروں۔ تو جو شخص راہ راست اختیار کرتا ہے تو اپنے ہی فائدے کے لئے اختیار کرتا ہے۔ اور جو گمراہ رہتا ہے تو کہہ دو کہ میں تو صرف نصیحت کرنے والا ہوں",
    },
    words: [
      { id: '27:92:1', arabic: "وَأَنْ", transliteration: "wa-an", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that", ur: "اور وہ" } },
      { id: '27:92:2', arabic: "أَتْلُوَا۟", transliteration: "atluwā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I recite", ur: "میں recite" } },
      { id: '27:92:3', arabic: "ٱلْقُرْءَانَ ۖ", transliteration: "l-qur'āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Quran", ur: "the Quran" } },
      { id: '27:92:4', arabic: "فَمَنِ", transliteration: "famani", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '27:92:5', arabic: "ٱهْتَدَىٰ", transliteration: "ih'tadā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "accepts guidance", ur: "accepts guidance" } },
      { id: '27:92:6', arabic: "فَإِنَّمَا", transliteration: "fa-innamā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then only", ur: "پھر صرف" } },
      { id: '27:92:7', arabic: "يَهْتَدِى", transliteration: "yahtadī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he accepts guidance", ur: "وہ accepts guidance" } },
      { id: '27:92:8', arabic: "لِنَفْسِهِۦ ۖ", transliteration: "linafsihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for himself", ur: "for himself" } },
      { id: '27:92:9', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '27:92:10', arabic: "ضَلَّ", transliteration: "ḍalla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "goes astray", ur: "goes astray" } },
      { id: '27:92:11', arabic: "فَقُلْ", transliteration: "faqul", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ق و ل", meaning: { en: "then say", ur: "پھر کہو" } },
      { id: '27:92:12', arabic: "إِنَّمَآ", transliteration: "innamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Only", ur: "صرف" } },
      { id: '27:92:13', arabic: "أَنَا۠", transliteration: "anā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am", ur: "میں am" } },
      { id: '27:92:14', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '27:92:15', arabic: "ٱلْمُنذِرِينَ", transliteration: "l-mundhirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the warners", ur: "the warners" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  93: {
    text: "وَقُلِ ٱلْحَمْدُ لِلَّهِ سَيُرِيكُمْ ءَايَـٰتِهِۦ فَتَعْرِفُونَهَا ۚ وَمَا رَبُّكَ بِغَـٰفِلٍ عَمَّا تَعْمَلُونَ",
    translation: {
      en: "",
      ur: "اور کہو کہ خدا کا شکر ہے۔ وہ تم کو عنقریب اپنی نشانیاں دکھائے گا تو تم اُن کو پہچان لو گے۔ اور جو کام تم کرتے ہو تمہارا پروردگار اُن سے بےخبر نہیں ہے",
    },
    words: [
      { id: '27:93:1', arabic: "وَقُلِ", transliteration: "waquli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And say", ur: "اور کہو" } },
      { id: '27:93:2', arabic: "ٱلْحَمْدُ", transliteration: "l-ḥamdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "All praise (be)", ur: "سب praise (be)" } },
      { id: '27:93:3', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '27:93:4', arabic: "سَيُرِيكُمْ", transliteration: "sayurīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will show you", ur: "وہ will show تم" } },
      { id: '27:93:5', arabic: "ءَايَـٰتِهِۦ", transliteration: "āyātihi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "His Signs", ur: "His نشانیاں" } },
      { id: '27:93:6', arabic: "فَتَعْرِفُونَهَا ۚ", transliteration: "fataʿrifūnahā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and you will recognize them", ur: "اور تم will recognize them" } },
      { id: '27:93:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And your Lord is not", ur: "اور your رب is نہیں" } },
      { id: '27:93:8', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And your Lord is not", ur: "اور your رب is نہیں" } },
      { id: '27:93:9', arabic: "بِغَـٰفِلٍ", transliteration: "bighāfilin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "unaware", ur: "unaware" } },
      { id: '27:93:10', arabic: "عَمَّا", transliteration: "ʿammā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '27:93:11', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
};

export default SURAH_27_TREEBANK;
