/**
 * Surah Al-Asr (103) - Complete Treebank Data
 * The Time / The Declining Day - 3 Ayahs, 14 Words
 *
 * Theme: Time, human loss, and the four conditions for success
 * Revelation: Makki
 * Imam Shafi'i said: "If only this surah was revealed, it would be sufficient for mankind"
 */

const SURAH_103_TREEBANK = {
  1: { // Ayah 1: وَالْعَصْرِ
    text: 'وَالْعَصْرِ',
    translation: {
      en: 'By time',
      ur: 'قسم ہے زمانے کی',
      hi: 'क़सम है ज़माने की',
      bn: 'সময়ের শপথ',
      tr: "Asra (zamana) yemin olsun ki",
      id: 'Demi masa',
    structure: {
      relationships: [],
    },
    },
    words: [
      {
        id: '103:1:1',
        position: 1,
        arabic: 'وَالْعَصْرِ',
        transliteration: "Wal-'Asr",
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ع ص ر',
        lemma: 'عَصْر',
        meaning: { en: 'By time', ur: 'زمانے کی قسم', hi: 'ज़माने की क़सम' },
        grammarRole: 'qasam',
        case: 'majroor',
        features: { type: 'oath-particle', state: 'genitive', definite: true },
        grammarExplanations: {
          en: 'وَ of oath (قَسَم) + definite noun. Allah swears by time - showing its immense importance.',
          ur: 'قسم کا وَ + معرفہ اسم۔ اللہ زمانے کی قسم کھاتا ہے - اس کی بڑی اہمیت ظاہر کرتے ہوئے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ع ص ر',
            meaning: { en: 'time, era, to squeeze/press', ur: 'زمانہ، عصر، نچوڑنا' },
            words: [
              { word: 'عَصْر', meaning: { en: 'time, era, afternoon', ur: 'وقت، زمانہ، دوپہر' } },
              { word: 'عَصِير', meaning: { en: 'juice (squeezed)', ur: 'رس' } },
              { word: 'مِعْصَرَة', meaning: { en: 'press (for olives/grapes)', ur: 'کولہو' } },
              { word: 'عَصْرِي', meaning: { en: 'modern, contemporary', ur: 'جدید، عصری' } },
            ],
          },
          balagha: {
            title: { en: 'Divine Oath', ur: 'الہی قسم' },
            explanation: {
              en: 'When Allah swears by something, it highlights its significance. Time is THE most valuable resource - once gone, never returns.',
              ur: 'جب اللہ کسی چیز کی قسم کھاتا ہے، اس کی اہمیت ظاہر ہوتی ہے۔ وقت سب سے قیمتی وسیلہ ہے - جو گیا وہ کبھی نہیں لوٹتا۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Multiple Meanings of Asr', ur: 'عصر کے متعدد معانی' },
            explanation: {
              en: 'عَصْر can mean: (1) Time in general, (2) Asr prayer time, (3) Era/age, (4) Human lifetime - all are "squeezed" away.',
              ur: 'عَصْر کے معنی: (1) وقت عمومی، (2) عصر کی نماز، (3) دور/زمانہ، (4) انسانی زندگی - سب "نچڑ" جاتے ہیں۔',
            },
          },
          memoryHook: {
            en: 'عَصْر (Asr) shares root with عَصِير (juice) - time is being "squeezed" out of our lives every moment!',
            ur: 'عَصْر (عصر) کا مادہ عَصِير (رس) جیسا - ہر لمحے زندگی سے وقت "نچوڑا" جا رہا ہے!',
          },
          tajweedTips: {
            rules: [{ rule: { en: 'Idgham Shamsiyyah', ur: 'ادغام شمسی' }, description: { en: 'The ل of ال merges into ع', ur: 'ال کا ل، ع میں مدغم' } }],
          },
        },
      },
    ],
    dependency: {
      root: 'الْعَصْرِ',
      structure: [
        { word: 'وَ', role: 'oath-particle', governs: 'الْعَصْرِ' },
        { word: 'الْعَصْرِ', role: 'muqsam-bih', object_of_oath: true },
      ],
    },
  },

  2: { // Ayah 2: إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
    text: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
    translation: {
      en: 'Indeed, mankind is in loss',
      ur: 'بیشک انسان خسارے میں ہے',
      hi: 'बेशक इंसान घाटे में है',
      bn: 'নিশ্চয়ই মানুষ ক্ষতিগ্রস্ত',
      tr: 'İnsan muhakkak hüsrandadır',
      id: 'Sungguh, manusia berada dalam kerugian',
    },
    words: [
      {
        id: '103:2:1',
        position: 1,
        arabic: 'إِنَّ',
        transliteration: 'Inna',
        pos: ['EMPH'],
        posLabel: 'EMPH',
        root: null,
        lemma: 'إِنَّ',
        meaning: { en: 'Indeed', ur: 'بیشک', hi: 'बेशक' },
        grammarRole: 'emphasis',
        features: { type: 'emphatic-particle' },
        grammarExplanations: {
          en: 'Emphatic particle - this is a CERTAIN truth, not speculation.',
          ur: 'حرف تاکید - یہ یقینی سچائی ہے، قیاس نہیں۔',
        },
      },
      {
        id: '103:2:2',
        position: 2,
        arabic: 'الْإِنسَانَ',
        transliteration: 'al-Insan',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ن س',
        lemma: 'إِنْسَان',
        meaning: { en: 'mankind', ur: 'انسان', hi: 'इंसान' },
        grammarRole: 'ism-inna',
        case: 'mansoob',
        features: { state: 'accusative', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Subject of إِنَّ - "al-Insan" with definite article means ALL humans without exception.',
          ur: 'اسم إِنَّ - "الإنسان" معرفہ یعنی تمام انسان بلا استثناء۔',
        },
        advanced: {
          rootFamily: {
            root: 'أ ن س',
            meaning: { en: 'to be friendly, sociable, human', ur: 'انسیت، ملنساری' },
            words: [
              { word: 'إِنْسَان', meaning: { en: 'human being', ur: 'انسان' } },
              { word: 'أُنْس', meaning: { en: 'intimacy, friendliness', ur: 'انسیت' } },
              { word: 'نَاس', meaning: { en: 'people', ur: 'لوگ' } },
              { word: 'إِنْسِي', meaning: { en: 'human (adj)', ur: 'انسانی' } },
            ],
          },
          balagha: {
            title: { en: 'Universal Indictment', ur: 'عالمگیر فرد جرم' },
            explanation: {
              en: 'الإِنسَان (THE human) - not "some humans" but ALL humans by default are in loss. The exception comes later.',
              ur: 'الإِنسَان (انسان) - "کچھ انسان" نہیں بلکہ تمام انسان بنیادی طور پر خسارے میں۔ استثناء بعد میں آتا ہے۔',
            },
          },
        },
      },
      {
        id: '103:2:3',
        position: 3,
        arabic: 'لَفِي',
        transliteration: 'la-fi',
        pos: ['EMPH', 'P'],
        posLabel: 'EMPH+P',
        root: null,
        lemma: 'فِي',
        meaning: { en: 'certainly in', ur: 'یقیناً میں', hi: 'यक़ीनन में' },
        grammarRole: 'preposition',
        features: { type: 'emphatic-lam + preposition' },
        grammarExplanations: {
          en: 'لَ (emphatic lam) + فِي (in). Double emphasis - not just "in loss" but CERTAINLY, DEFINITELY in loss.',
          ur: 'لَ (تاکیدی لام) + فِي (میں)۔ دوہرا تاکید - صرف "خسارے میں" نہیں بلکہ یقیناً، قطعی خسارے میں۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Intensified Certainty', ur: 'تاکید کی شدت' },
            explanation: {
              en: 'Three emphatic tools: إِنَّ + لَ + فِي (immersed in). Like saying: "Most assuredly, humans are DROWNING in loss."',
              ur: 'تین تاکیدی آلات: إِنَّ + لَ + فِي (ڈوبا ہوا)۔ جیسے کہنا: "یقیناً انسان خسارے میں ڈوبا ہوا ہے۔"',
            },
          },
        },
      },
      {
        id: '103:2:4',
        position: 4,
        arabic: 'خُسْرٍ',
        transliteration: 'Khusr',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ س ر',
        lemma: 'خُسْر',
        meaning: { en: 'loss', ur: 'خسارہ', hi: 'घाटा' },
        grammarRole: 'khabar-inna',
        case: 'majroor',
        features: { state: 'genitive', indefinite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Indefinite خُسْر intensifies meaning - not a specific loss, but ABSOLUTE loss - total, complete ruin.',
          ur: 'نکرہ خُسْر معنی کی شدت - کوئی خاص نقصان نہیں، بلکہ مطلق خسارہ - کلی، مکمل تباہی۔',
        },
        advanced: {
          rootFamily: {
            root: 'خ س ر',
            meaning: { en: 'to lose, suffer loss, perish', ur: 'کھونا، نقصان، ہلاکت' },
            words: [
              { word: 'خُسْر', meaning: { en: 'loss', ur: 'خسارہ' } },
              { word: 'خَسِرَ', meaning: { en: 'he lost', ur: 'وہ ہارا' } },
              { word: 'خَاسِر', meaning: { en: 'loser', ur: 'ہارنے والا' } },
              { word: 'خُسْرَان', meaning: { en: 'total loss', ur: 'مکمل خسارہ' } },
            ],
          },
          balagha: {
            title: { en: 'Life as Business', ur: 'زندگی بطور کاروبار' },
            explanation: {
              en: 'خُسْر is a business term - loss in trade. Life is a transaction where time is capital. Waste time = lose investment.',
              ur: 'خُسْر کاروباری اصطلاح ہے - تجارت میں نقصان۔ زندگی ایک سودا ہے جہاں وقت سرمایہ ہے۔ وقت ضائع = سرمایہ ضائع۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'What is Lost?', ur: 'کیا کھو گیا؟' },
            explanation: {
              en: 'Indefinite خُسْرٍ leaves the loss undefined - it includes: time, health, opportunities, afterlife, Allah\'s pleasure - EVERYTHING.',
              ur: 'نکرہ خُسْرٍ نقصان کو غیر معین رکھتا ہے - شامل ہے: وقت، صحت، مواقع، آخرت، اللہ کی رضا - سب کچھ۔',
            },
          },
        },
      },
    ],
    dependency: {
      root: 'الْإِنسَانَ',
      structure: [
        { word: 'إِنَّ', role: 'emphatic-particle', governs: 'الْإِنسَانَ' },
        { word: 'الْإِنسَانَ', role: 'ism-inna', subject: true },
        { word: 'لَفِي', role: 'emphatic-preposition' },
        { word: 'خُسْرٍ', role: 'khabar-inna', predicate: true },
      ],
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 2, to: 4, label: 'مبتدأ + خبر' }
      ],
    },
  },

  3: { // Ayah 3: إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ
    text: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
    translation: {
      en: 'Except those who believe and do righteous deeds, and advise each other to truth and advise each other to patience',
      ur: 'سوائے ان لوگوں کے جو ایمان لائے اور نیک عمل کیے اور ایک دوسرے کو حق کی نصیحت کی اور صبر کی نصیحت کی',
      hi: 'सिवाय उन लोगों के जो ईमान लाए और नेक अमल किए और एक दूसरे को हक़ की नसीहत की और सब्र की नसीहत की',
      bn: 'তবে তারা ছাড়া যারা ঈমান এনেছে ও সৎকর্ম করেছে এবং একে অপরকে সত্যের উপদেশ দিয়েছে ও ধৈর্যের উপদেশ দিয়েছে',
      tr: 'Ancak iman edip salih amel işleyenler, birbirlerine hakkı ve sabrı tavsiye edenler müstesna',
      id: 'kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran',
    },
    words: [
      {
        id: '103:3:1',
        position: 1,
        arabic: 'إِلَّا',
        transliteration: 'Illa',
        pos: ['EXCEPT'],
        posLabel: 'EXCEPT',
        root: null,
        lemma: 'إِلَّا',
        meaning: { en: 'Except', ur: 'سوائے', hi: 'सिवाय' },
        grammarRole: 'exception',
        features: { type: 'exception-particle' },
        grammarExplanations: {
          en: 'Exception particle - after stating ALL humans are in loss, now comes the escape clause.',
          ur: 'حرف استثناء - تمام انسانوں کے خسارے میں ہونے کے بعد، اب نجات کا راستہ۔',
        },
        advanced: {
          balagha: {
            title: { en: 'The Exit Door', ur: 'باہر نکلنے کا دروازہ' },
            explanation: {
              en: 'إِلَّا is hope after despair. All humans are in loss... EXCEPT. There IS a way out!',
              ur: 'إِلَّا مایوسی کے بعد امید ہے۔ تمام انسان خسارے میں... سوائے۔ باہر نکلنے کا راستہ ہے!',
            },
          },
        },
      },
      {
        id: '103:3:2',
        position: 2,
        arabic: 'الَّذِينَ',
        transliteration: 'Alladhina',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        lemma: 'الَّذِي',
        meaning: { en: 'Those who', ur: 'جو لوگ', hi: 'जो लोग' },
        grammarRole: 'relative-pronoun',
        case: 'mansoob',
        features: { type: 'relative-pronoun', number: 'plural', gender: 'masculine' },
        grammarExplanations: {
          en: 'Relative pronoun introducing the excepted group - "those who" meet four conditions.',
          ur: 'اسم موصول مستثنیٰ گروہ متعارف کراتا ہے - "جو لوگ" چار شرائط پوری کریں۔',
        },
      },
      {
        id: '103:3:3',
        position: 3,
        arabic: 'آمَنُوا',
        transliteration: 'Amanu',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ م ن',
        lemma: 'آمَنَ',
        meaning: { en: 'believe', ur: 'ایمان لائے', hi: 'ईमान लाए' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', number: 'plural', gender: 'masculine' },
        grammarExplanations: {
          en: 'Perfect tense (Form IV) - CONDITION 1: Belief/faith. Must have firm conviction in Allah, His messengers, books, etc.',
          ur: 'فعل ماضی (باب افعال) - شرط 1: ایمان۔ اللہ، اس کے رسولوں، کتابوں پر پختہ یقین ہونا چاہیے۔',
        },
        advanced: {
          rootFamily: {
            root: 'أ م ن',
            meaning: { en: 'to believe, to be safe, to trust', ur: 'ایمان لانا، محفوظ ہونا، بھروسہ' },
            words: [
              { word: 'آمَنَ', meaning: { en: 'he believed', ur: 'وہ ایمان لایا' } },
              { word: 'إِيمَان', meaning: { en: 'faith, belief', ur: 'ایمان' } },
              { word: 'مُؤْمِن', meaning: { en: 'believer', ur: 'مومن' } },
              { word: 'أَمْن', meaning: { en: 'security, safety', ur: 'امن' } },
              { word: 'أَمِين', meaning: { en: 'trustworthy', ur: 'امین' } },
            ],
          },
          balagha: {
            title: { en: 'Foundation of Success', ur: 'کامیابی کی بنیاد' },
            explanation: {
              en: 'آمَنُوا comes FIRST - without faith, nothing else matters. It\'s the root from which all else grows.',
              ur: 'آمَنُوا پہلے آیا - ایمان کے بغیر کچھ نہیں۔ یہ جڑ ہے جس سے سب کچھ اگتا ہے۔',
            },
          },
        },
      },
      {
        id: '103:3:4',
        position: 4,
        arabic: 'وَعَمِلُوا',
        transliteration: "Wa-'amilu",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ع م ل',
        lemma: 'عَمِلَ',
        meaning: { en: 'and do', ur: 'اور عمل کیے', hi: 'और अमल किए' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', number: 'plural', gender: 'masculine' },
        grammarExplanations: {
          en: 'CONDITION 2: Action. Faith must manifest in deeds. Belief without action is dead.',
          ur: 'شرط 2: عمل۔ ایمان عمل میں ظاہر ہونا چاہیے۔ بغیر عمل کے ایمان مردہ ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ع م ل',
            meaning: { en: 'to do, to work, to act', ur: 'کرنا، کام کرنا، عمل' },
            words: [
              { word: 'عَمِلَ', meaning: { en: 'he did/worked', ur: 'اس نے کیا' } },
              { word: 'عَمَل', meaning: { en: 'deed, work', ur: 'عمل' } },
              { word: 'عَامِل', meaning: { en: 'worker, doer', ur: 'کام کرنے والا' } },
            ],
          },
        },
      },
      {
        id: '103:3:5',
        position: 5,
        arabic: 'الصَّالِحَاتِ',
        transliteration: 'as-Salihat',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ص ل ح',
        lemma: 'صَالِح',
        meaning: { en: 'righteous deeds', ur: 'نیک اعمال', hi: 'नेक अमल' },
        grammarRole: 'maf\'ul-bih',
        case: 'mansoob',
        features: { state: 'accusative', definite: true, type: 'adjective-noun', gender: 'feminine-plural' },
        grammarExplanations: {
          en: 'Direct object - "the righteous things". Definite article means ALL good deeds, not selective.',
          ur: 'مفعول بہ - "نیک چیزیں"۔ الف لام کا مطلب تمام نیک اعمال، منتخب نہیں۔',
        },
        advanced: {
          rootFamily: {
            root: 'ص ل ح',
            meaning: { en: 'to be good, righteous, proper', ur: 'نیک ہونا، درست' },
            words: [
              { word: 'صَالِح', meaning: { en: 'righteous', ur: 'نیک' } },
              { word: 'صَلَاح', meaning: { en: 'righteousness', ur: 'نیکی' } },
              { word: 'إِصْلَاح', meaning: { en: 'reform, correction', ur: 'اصلاح' } },
              { word: 'مُصْلِح', meaning: { en: 'reformer', ur: 'مصلح' } },
            ],
          },
          balagha: {
            title: { en: 'Faith + Works', ur: 'ایمان + عمل' },
            explanation: {
              en: 'الصَّالِحَاتِ always paired with آمَنُوا in Quran - faith and deeds are inseparable.',
              ur: 'الصَّالِحَاتِ قرآن میں ہمیشہ آمَنُوا کے ساتھ - ایمان اور عمل جدا نہیں ہو سکتے۔',
            },
          },
        },
      },
      {
        id: '103:3:6',
        position: 6,
        arabic: 'وَتَوَاصَوْا',
        transliteration: 'Wa-tawasau',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'و ص ي',
        lemma: 'تَوَاصَى',
        meaning: { en: 'and advise each other', ur: 'اور ایک دوسرے کو نصیحت کی', hi: 'और एक दूसरे को नसीहत की' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', number: 'plural', form: 'VI (mutual)' },
        grammarExplanations: {
          en: 'CONDITION 3: Mutual advising. Form VI (تَفَاعَل) = reciprocal action - EACH advising the OTHER.',
          ur: 'شرط 3: باہمی نصیحت۔ باب تفاعل = دو طرفہ عمل - ہر ایک دوسرے کو نصیحت۔',
        },
        advanced: {
          rootFamily: {
            root: 'و ص ي',
            meaning: { en: 'to advise, recommend, bequeath', ur: 'نصیحت کرنا، وصیت' },
            words: [
              { word: 'وَصَّى', meaning: { en: 'he advised', ur: 'اس نے نصیحت کی' } },
              { word: 'وَصِيَّة', meaning: { en: 'advice, will', ur: 'نصیحت، وصیت' } },
              { word: 'تَوَاصَى', meaning: { en: 'they advised each other', ur: 'ایک دوسرے کو نصیحت کی' } },
            ],
          },
          verbConjugation: {
            root: 'و ص ي',
            form: 'VI (تَفَاعَل)',
            meaning: { en: 'to mutually advise', ur: 'باہم نصیحت کرنا' },
            table: {
              past: { they: 'تَوَاصَوْا', we: 'تَوَاصَيْنَا' },
              present: { they: 'يَتَوَاصَوْنَ', we: 'نَتَوَاصَى' },
            },
          },
          balagha: {
            title: { en: 'Community Responsibility', ur: 'اجتماعی ذمہ داری' },
            explanation: {
              en: 'تَوَاصَوْا (Form VI) means MUTUAL - not just scholars advising masses, but everyone advising everyone.',
              ur: 'تَوَاصَوْا (باب تفاعل) کا مطلب باہمی - صرف عالم عوام کو نہیں، بلکہ سب ایک دوسرے کو نصیحت۔',
            },
          },
        },
      },
      {
        id: '103:3:7',
        position: 7,
        arabic: 'بِالْحَقِّ',
        transliteration: 'bil-Haqq',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ح ق ق',
        lemma: 'حَقّ',
        meaning: { en: 'to truth', ur: 'حق کی (نصیحت)', hi: 'हक़ की (नसीहत)' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'CONDITION 3 continued: Advising to TRUTH (الحق) - objective reality, correct beliefs, right actions.',
          ur: 'شرط 3 جاری: حق (الحق) کی نصیحت - معروضی حقیقت، صحیح عقائد، درست اعمال۔',
        },
        advanced: {
          rootFamily: {
            root: 'ح ق ق',
            meaning: { en: 'truth, right, due', ur: 'حق، سچائی، حقدار' },
            words: [
              { word: 'حَقّ', meaning: { en: 'truth, right', ur: 'حق' } },
              { word: 'حَقِيقَة', meaning: { en: 'reality', ur: 'حقیقت' } },
              { word: 'تَحْقِيق', meaning: { en: 'verification', ur: 'تحقیق' } },
              { word: 'الحَقّ', meaning: { en: 'The Truth (Allah\'s name)', ur: 'الحق (اللہ کا نام)' } },
            ],
          },
          balagha: {
            title: { en: 'What is Haqq?', ur: 'حق کیا ہے؟' },
            explanation: {
              en: 'الحَقّ includes: (1) Allah Himself (He IS Truth), (2) Islam, (3) Quran, (4) Justice, (5) Reality vs falsehood.',
              ur: 'الحَقّ میں شامل: (1) اللہ خود (وہ حق ہے)، (2) اسلام، (3) قرآن، (4) انصاف، (5) حقیقت بمقابلہ باطل۔',
            },
          },
        },
      },
      {
        id: '103:3:8',
        position: 8,
        arabic: 'وَتَوَاصَوْا',
        transliteration: 'Wa-tawasau',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'و ص ي',
        lemma: 'تَوَاصَى',
        meaning: { en: 'and advise each other', ur: 'اور ایک دوسرے کو نصیحت کی', hi: 'और एक दूसرे को نसीहत की' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', number: 'plural', form: 'VI (mutual)' },
        grammarExplanations: {
          en: 'CONDITION 4: Second mutual advising - same verb repeated, different object.',
          ur: 'شرط 4: دوسری باہمی نصیحت - ایک ہی فعل دہرایا، مختلف مفعول۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Why Repeat?', ur: 'تکرار کیوں؟' },
            explanation: {
              en: 'تَوَاصَوْا repeated twice - because truth requires patience, and patience requires encouragement. Two different needs.',
              ur: 'تَوَاصَوْا دو بار دہرایا - کیونکہ حق کے لیے صبر چاہیے، اور صبر کے لیے حوصلہ افزائی۔ دو مختلف ضرورتیں۔',
            },
          },
        },
      },
      {
        id: '103:3:9',
        position: 9,
        arabic: 'بِالصَّبْرِ',
        transliteration: 'bis-Sabr',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ص ب ر',
        lemma: 'صَبْر',
        meaning: { en: 'to patience', ur: 'صبر کی (نصیحت)', hi: 'सब्र की (नसीहत)' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'CONDITION 4: Advising to PATIENCE (الصبر) - perseverance in truth despite hardship.',
          ur: 'شرط 4: صبر (الصبر) کی نصیحت - مشکلات کے باوجود حق پر استقامت۔',
        },
        advanced: {
          rootFamily: {
            root: 'ص ب ر',
            meaning: { en: 'to be patient, endure', ur: 'صبر کرنا، برداشت' },
            words: [
              { word: 'صَبَرَ', meaning: { en: 'he was patient', ur: 'اس نے صبر کیا' } },
              { word: 'صَبْر', meaning: { en: 'patience', ur: 'صبر' } },
              { word: 'صَابِر', meaning: { en: 'patient one', ur: 'صابر' } },
              { word: 'اصْطَبَرَ', meaning: { en: 'he endured', ur: 'اس نے برداشت کیا' } },
            ],
          },
          balagha: {
            title: { en: 'Why Patience Last?', ur: 'صبر آخر میں کیوں؟' },
            explanation: {
              en: 'الصَّبْر comes last because: (1) Faith is tested, (2) Good deeds face obstacles, (3) Speaking truth brings opposition.',
              ur: 'الصَّبْر آخر میں کیونکہ: (1) ایمان آزمایا جاتا ہے، (2) نیک اعمال میں رکاوٹیں، (3) حق بولنے سے مخالفت۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'The Final Shield', ur: 'آخری ڈھال' },
            explanation: {
              en: 'Without patience, the first three conditions collapse. Patience is the glue that holds faith, deeds, and truth together.',
              ur: 'صبر کے بغیر پہلی تین شرائط منہدم۔ صبر وہ گوند ہے جو ایمان، عمل، اور حق کو جوڑے رکھتا ہے۔',
            },
          },
          memoryHook: {
            en: '4 conditions to escape loss: (1) Faith (heart), (2) Deeds (body), (3) Truth (tongue), (4) Patience (will). All four required!',
            ur: 'خسارے سے بچنے کی 4 شرائط: (1) ایمان (دل)، (2) عمل (جسم)، (3) حق (زبان)، (4) صبر (عزم)۔ چاروں ضروری!',
          },
        },
      },
    ],
    dependency: {
      root: 'الَّذِينَ',
      structure: [
        { word: 'إِلَّا', role: 'exception-particle' },
        { word: 'الَّذِينَ', role: 'relative-pronoun', introduces: 'excepted-group' },
        { word: 'آمَنُوا', role: 'verb-1', condition: '1-faith' },
        { word: 'وَعَمِلُوا الصَّالِحَاتِ', role: 'verb-2', condition: '2-deeds' },
        { word: 'وَتَوَاصَوْا بِالْحَقِّ', role: 'verb-3', condition: '3-truth' },
        { word: 'وَتَوَاصَوْا بِالصَّبْرِ', role: 'verb-4', condition: '4-patience' },
      ],
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'عطف' },
        { from: 4, to: 6, label: 'عطف' },
        { from: 6, to: 8, label: 'عطف' }
      ],
    },
  },
};

export default SURAH_103_TREEBANK;
