/**
 * Surah Al-Falaq (113) - Complete Treebank Data
 * The Daybreak / The Dawn - 5 Ayahs, 23 Words
 *
 * Theme: Seeking refuge in Allah from external evils
 * Revelation: Makki (or Madani according to some)
 * Part of: Al-Mu'awwidhatayn (The Two Protections)
 */

const SURAH_113_TREEBANK = {
  1: { // Ayah 1: قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
    text: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
    translation: {
      en: 'Say, "I seek refuge in the Lord of daybreak',
      ur: 'کہو میں پناہ مانگتا ہوں صبح کے رب کی',
      hi: 'कहो मैं पनाह माँगता हूँ सुबह के रब की',
      bn: 'বলুন, আমি আশ্রয় প্রার্থনা করি ভোরের রবের',
      tr: 'De ki: Sığınırım sabahın Rabbine',
      id: 'Katakanlah, "Aku berlindung kepada Tuhan yang menguasai subuh',
    },
    words: [
      {
        id: '113:1:1',
        position: 1,
        arabic: 'قُلْ',
        transliteration: 'Qul',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        lemma: 'قَالَ',
        meaning: { en: 'Say', ur: 'کہو', hi: 'कहो' },
        grammarRole: 'verb',
        features: { aspect: 'imperative', person: '2nd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'Imperative verb - command to proclaim seeking refuge.',
          ur: 'فعل امر - پناہ مانگنے کا اعلان کرنے کا حکم۔',
        },
        advanced: {
          frequency: { word: 'قُلْ', total: 332 },
          tajweedTips: {
            rules: [{ rule: { en: 'Qalqalah', ur: 'قلقلہ' }, description: { en: 'Bounce on ل with sukun', ur: 'ل پر سکون میں ہلکی گونج' } }],
          },
        },
      },
      {
        id: '113:1:2',
        position: 2,
        arabic: 'أَعُوذُ',
        transliteration: "A'udhu",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع و ذ',
        lemma: 'عَاذَ',
        meaning: { en: 'I seek refuge', ur: 'میں پناہ مانگتا ہوں', hi: 'मैं पनाह माँगता हूँ' },
        grammarRole: 'verb',
        case: null,
        features: { aspect: 'imperfect', person: '1st', number: 'singular', mood: 'indicative' },
        grammarExplanations: {
          en: 'First person imperfect verb - "I seek refuge" - ongoing action of seeking protection.',
          ur: 'فعل مضارع متکلم وحدہ - "میں پناہ مانگتا ہوں" - حفاظت مانگنے کا جاری عمل۔',
        },
        advanced: {
          rootFamily: {
            root: 'ع و ذ',
            meaning: { en: 'to seek refuge, protection', ur: 'پناہ مانگنا، حفاظت' },
            words: [
              { word: 'عَاذَ', meaning: { en: 'he sought refuge', ur: 'اس نے پناہ مانگی' } },
              { word: 'أَعُوذُ', meaning: { en: 'I seek refuge', ur: 'میں پناہ مانگتا ہوں' } },
              { word: 'مَعَاذ', meaning: { en: 'refuge, protection', ur: 'پناہ گاہ' } },
              { word: 'اِسْتِعَاذَة', meaning: { en: 'seeking refuge', ur: 'پناہ مانگنا' } },
            ],
          },
          balagha: {
            title: { en: 'Personal Declaration', ur: 'ذاتی اعلان' },
            explanation: {
              en: 'First person "أَعُوذُ" makes it personal - each reciter personally seeks refuge.',
              ur: 'متکلم "أَعُوذُ" اسے ذاتی بناتا ہے - ہر پڑھنے والا خود پناہ مانگتا ہے۔',
            },
          },
          verbConjugation: {
            root: 'ع و ذ',
            form: 'I',
            meaning: { en: 'to seek refuge', ur: 'پناہ مانگنا' },
            table: {
              past: { he: 'عَاذَ', I: 'عُذْتُ', we: 'عُذْنَا' },
              present: { he: 'يَعُوذُ', I: 'أَعُوذُ', we: 'نَعُوذُ' },
              imperative: { you_m: 'عُذْ' },
            },
          },
        },
      },
      {
        id: '113:1:3',
        position: 3,
        arabic: 'بِرَبِّ',
        transliteration: 'bi-Rabbi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ر ب ب',
        lemma: 'رَبّ',
        meaning: { en: 'in the Lord of', ur: 'رب کی (پناہ)', hi: 'रब की (पनाह)' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        grammarExplanations: {
          en: 'Preposition بِ (in/with) + noun رَبّ (Lord) in genitive. Seeking refuge IN the Lord.',
          ur: 'حرف جار بِ (میں) + اسم رَبّ (رب) مجرور۔ رب کی پناہ میں۔',
        },
        advanced: {
          rootFamily: {
            root: 'ر ب ب',
            meaning: { en: 'lord, master, nourisher', ur: 'رب، مالک، پالنے والا' },
            words: [
              { word: 'رَبّ', meaning: { en: 'Lord', ur: 'رب' } },
              { word: 'رُبُوبِيَّة', meaning: { en: 'Lordship', ur: 'ربوبیت' } },
              { word: 'رَبَّانِي', meaning: { en: 'godly, divine', ur: 'ربانی' } },
            ],
          },
          balagha: {
            title: { en: 'Why "Lord" not "Allah"?', ur: '"رب" کیوں نہ کہ "اللہ"؟' },
            explanation: {
              en: '"Rabb" emphasizes care, protection, nurturing - perfect for seeking refuge. He who nurtures will protect.',
              ur: '"رب" دیکھ بھال، حفاظت، پرورش پر زور دیتا ہے - پناہ کے لیے موزوں۔ جو پالے وہ بچائے۔',
            },
          },
        },
      },
      {
        id: '113:1:4',
        position: 4,
        arabic: 'الْفَلَقِ',
        transliteration: 'al-Falaq',
        pos: ['N'],
        posLabel: 'N',
        root: 'ف ل ق',
        lemma: 'فَلَق',
        meaning: { en: 'the daybreak / dawn', ur: 'صبح / پھٹنا', hi: 'सुबह / फटना' },
        grammarRole: 'mudhafIlayh',
        case: 'majroor',
        features: { definiteness: 'definite', gender: 'masculine' },
        grammarExplanations: {
          en: 'Genitive (مجرور) because it\'s مضاف إليه to "رَبّ". "Lord OF the daybreak."',
          ur: 'مجرور کیونکہ "رَبّ" کا مضاف الیہ ہے۔ "صبح کا رب"۔',
        },
        advanced: {
          rootFamily: {
            root: 'ف ل ق',
            meaning: { en: 'to split, cleave, break', ur: 'پھاڑنا، چیرنا، توڑنا' },
            words: [
              { word: 'فَلَقَ', meaning: { en: 'he split', ur: 'اس نے پھاڑا' } },
              { word: 'فَلَق', meaning: { en: 'daybreak (splitting darkness)', ur: 'صبح (اندھیرا چیرنا)' } },
              { word: 'فَالِق', meaning: { en: 'the one who splits', ur: 'پھاڑنے والا' } },
            ],
          },
          balagha: {
            title: { en: 'Why Daybreak?', ur: 'صبح کیوں؟' },
            explanation: {
              en: 'Falaq = splitting darkness. Just as Allah splits darkness with light, He protects from evil with His refuge.',
              ur: 'فلق = اندھیرا چیرنا۔ جیسے اللہ اندھیرے کو روشنی سے چیرتا ہے، ویسے اپنی پناہ سے برائی سے بچاتا ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Creation from Splitting', ur: 'پھٹنے سے تخلیق' },
            points: [
              {
                en: 'فَلَق relates to فَالِق الْحَبِّ وَالنَّوَى (6:95) - He who splits grain and seed. All creation involves "splitting".',
                ur: 'فَلَق کا تعلق فَالِق الْحَبِّ وَالنَّوَى (6:95) سے - جو دانے اور گٹھلی کو پھاڑتا ہے۔ تمام تخلیق میں "پھاڑنا" شامل۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'command-statement',
      explanation: {
        en: 'Command (قُلْ) + Declaration of seeking refuge (أَعُوذُ) with the Lord of Daybreak',
        ur: 'حکم (قُلْ) + پناہ مانگنے کا اعلان (أَعُوذُ) صبح کے رب کی',
      },
    },
  },

  2: { // Ayah 2: مِن شَرِّ مَا خَلَقَ
    text: 'مِن شَرِّ مَا خَلَقَ',
    translation: {
      en: 'From the evil of that which He created',
      ur: 'اس کی بنائی ہوئی چیزوں کے شر سے',
      hi: 'उसकी बनाई हुई चीज़ों के शर से',
    },
    words: [
      {
        id: '113:2:1',
        position: 1,
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: 'from', ur: 'سے', hi: 'से' },
        grammarRole: 'jarr',
        grammarExplanations: { en: 'Preposition indicating source of what we seek refuge from.', ur: 'حرف جار جو بتاتا ہے کس چیز سے پناہ مانگ رہے ہیں۔' },
      },
      {
        id: '113:2:2',
        position: 2,
        arabic: 'شَرِّ',
        transliteration: 'sharri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ر ر',
        lemma: 'شَرّ',
        meaning: { en: 'evil', ur: 'شر / برائی', hi: 'शर / बुराई' },
        grammarRole: 'mudhaf',
        case: 'majroor',
        grammarExplanations: { en: 'Genitive because of مِن. "Evil" is what we seek protection from.', ur: 'مِن کی وجہ سے مجرور۔ "شر" وہ ہے جس سے پناہ مانگتے ہیں۔' },
        advanced: {
          rootFamily: {
            root: 'ش ر ر',
            meaning: { en: 'evil, bad, harmful', ur: 'برا، نقصان دہ' },
            words: [
              { word: 'شَرّ', meaning: { en: 'evil', ur: 'شر' } },
              { word: 'شَرِير', meaning: { en: 'evil person', ur: 'شریر' } },
              { word: 'أَشْرَار', meaning: { en: 'evil people', ur: 'اشرار' } },
            ],
          },
        },
      },
      {
        id: '113:2:3',
        position: 3,
        arabic: 'مَا',
        transliteration: 'ma',
        pos: ['REL'],
        posLabel: 'REL',
        meaning: { en: 'that which / what', ur: 'جو / جو کچھ', hi: 'जो / जो कुछ' },
        grammarRole: 'mudhafIlayh',
        grammarExplanations: { en: 'Relative pronoun referring to all creation.', ur: 'اسم موصول جو تمام مخلوقات کی طرف اشارہ۔' },
      },
      {
        id: '113:2:4',
        position: 4,
        arabic: 'خَلَقَ',
        transliteration: 'khalaqa',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ل ق',
        lemma: 'خَلَقَ',
        meaning: { en: 'He created', ur: 'اس نے پیدا کیا', hi: 'उसने पैदा किया' },
        grammarRole: 'silah',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
        grammarExplanations: { en: 'Perfect verb - "He created". صلة الموصول for مَا.', ur: 'فعل ماضی - "اس نے پیدا کیا"۔ مَا کی صلہ موصول۔' },
        advanced: {
          rootFamily: {
            root: 'خ ل ق',
            meaning: { en: 'to create', ur: 'پیدا کرنا' },
            words: [
              { word: 'خَلَقَ', meaning: { en: 'he created', ur: 'اس نے پیدا کیا' } },
              { word: 'خَلْق', meaning: { en: 'creation', ur: 'تخلیق' } },
              { word: 'خَالِق', meaning: { en: 'creator', ur: 'خالق' } },
              { word: 'مَخْلُوق', meaning: { en: 'creature', ur: 'مخلوق' } },
            ],
          },
          balagha: {
            title: { en: 'All Creation Included', ur: 'تمام مخلوقات شامل' },
            explanation: {
              en: '"مَا خَلَقَ" (what He created) is comprehensive - includes jinn, humans, animals, seen and unseen evils.',
              ur: '"مَا خَلَقَ" (جو اس نے پیدا کیا) جامع ہے - جنات، انسان، جانور، دکھائی دینے والی اور نہ دکھائی دینے والی برائیاں۔',
            },
          },
        },
      },
    ],
    structure: {
      explanation: {
        en: 'First evil: General - all harmful things in creation',
        ur: 'پہلا شر: عمومی - تخلیق میں تمام نقصان دہ چیزیں',
      },
    },
  },

  3: { // Ayah 3: وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
    text: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
    translation: {
      en: 'And from the evil of darkness when it settles',
      ur: 'اور اندھیری رات کے شر سے جب وہ چھا جائے',
      hi: 'और अँधेरी रात के शर से जब वह छा जाए',
    },
    words: [
      {
        id: '113:3:1',
        position: 1,
        arabic: 'وَمِن',
        transliteration: 'wa-min',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        meaning: { en: 'and from', ur: 'اور سے' },
      },
      {
        id: '113:3:2',
        position: 2,
        arabic: 'شَرِّ',
        transliteration: 'sharri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ر ر',
        meaning: { en: 'evil', ur: 'شر' },
        case: 'majroor',
      },
      {
        id: '113:3:3',
        position: 3,
        arabic: 'غَاسِقٍ',
        transliteration: 'ghasiqin',
        pos: ['N'],
        posLabel: 'N',
        root: 'غ س ق',
        lemma: 'غَاسِق',
        meaning: { en: 'darkness / night', ur: 'اندھیرا / رات', hi: 'अँधेरा / रात' },
        grammarRole: 'mudhafIlayh',
        case: 'majroor',
        features: { definiteness: 'indefinite', state: 'nominative' },
        grammarExplanations: { en: 'Noun meaning "darkness/night" - genitive case.', ur: 'اسم بمعنی "اندھیرا/رات" - مجرور۔' },
        advanced: {
          rootFamily: {
            root: 'غ س ق',
            meaning: { en: 'to become dark, darkness', ur: 'اندھیرا ہونا' },
            words: [
              { word: 'غَسَقَ', meaning: { en: 'it became dark', ur: 'اندھیرا ہو گیا' } },
              { word: 'غَاسِق', meaning: { en: 'darkness/dark night', ur: 'اندھیرا/اندھیری رات' } },
              { word: 'غَسَق', meaning: { en: 'intense darkness', ur: 'گہرا اندھیرا' } },
            ],
          },
          balagha: {
            title: { en: 'Why Darkness?', ur: 'اندھیرا کیوں؟' },
            explanation: {
              en: 'Evil often operates in darkness - physical and metaphorical. Sins, crimes, magic are done in dark.',
              ur: 'شر اکثر اندھیرے میں کام کرتا ہے - جسمانی اور استعاراتی۔ گناہ، جرائم، جادو اندھیرے میں ہوتے ہیں۔',
            },
          },
        },
      },
      {
        id: '113:3:4',
        position: 4,
        arabic: 'إِذَا',
        transliteration: 'idha',
        pos: ['PART'],
        posLabel: 'PART',
        meaning: { en: 'when', ur: 'جب', hi: 'जब' },
        grammarExplanations: { en: 'Conditional particle - "when" the darkness settles.', ur: 'حرف شرط - "جب" اندھیرا چھا جائے۔' },
      },
      {
        id: '113:3:5',
        position: 5,
        arabic: 'وَقَبَ',
        transliteration: 'waqaba',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ق ب',
        lemma: 'وَقَبَ',
        meaning: { en: 'it settles / spreads / intensifies', ur: 'چھا جائے / پھیل جائے', hi: 'छा जाए / फैल जाए' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
        grammarExplanations: { en: 'Perfect verb - "when it (darkness) settles/intensifies".', ur: 'فعل ماضی - "جب وہ (اندھیرا) چھا جائے"۔' },
        advanced: {
          rootFamily: {
            root: 'و ق ب',
            meaning: { en: 'to enter, penetrate, settle', ur: 'داخل ہونا، گھسنا، چھانا' },
            words: [
              { word: 'وَقَبَ', meaning: { en: 'it entered/settled', ur: 'داخل ہوا/چھا گیا' } },
            ],
          },
          balagha: {
            title: { en: 'Peak of Darkness', ur: 'اندھیرے کی انتہا' },
            explanation: {
              en: 'وَقَبَ means darkness at its peak - most dangerous time when evil creatures are active.',
              ur: 'وَقَبَ یعنی اندھیرے کی انتہا - سب سے خطرناک وقت جب شریر مخلوقات سرگرم۔',
            },
          },
        },
      },
    ],
    structure: {
      explanation: {
        en: 'Second evil: Darkness when it intensifies - time of evil activity',
        ur: 'دوسرا شر: اندھیرا جب چھا جائے - شریر سرگرمیوں کا وقت',
      },
    },
  },

  4: { // Ayah 4: وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
    text: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
    translation: {
      en: 'And from the evil of those who blow on knots',
      ur: 'اور گرہوں میں پھونکنے والیوں کے شر سے',
      hi: 'और गाँठों में फूँकने वालियों के शर से',
    },
    words: [
      {
        id: '113:4:1',
        position: 1,
        arabic: 'وَمِن',
        transliteration: 'wa-min',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        meaning: { en: 'and from', ur: 'اور سے' },
      },
      {
        id: '113:4:2',
        position: 2,
        arabic: 'شَرِّ',
        transliteration: 'sharri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ر ر',
        meaning: { en: 'evil', ur: 'شر' },
        case: 'majroor',
      },
      {
        id: '113:4:3',
        position: 3,
        arabic: 'النَّفَّاثَاتِ',
        transliteration: 'an-naffathat',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ف ث',
        lemma: 'نَفَّاثَة',
        meaning: { en: 'those (females) who blow', ur: 'پھونکنے والیاں', hi: 'फूँकने वालियाँ' },
        grammarRole: 'mudhafIlayh',
        case: 'majroor',
        features: { gender: 'feminine', number: 'plural', definiteness: 'definite' },
        grammarExplanations: { en: 'Feminine plural - "female blowers" - those who practice magic by blowing.', ur: 'جمع مؤنث - "پھونکنے والیاں" - جو پھونک کر جادو کرتی ہیں۔' },
        advanced: {
          rootFamily: {
            root: 'ن ف ث',
            meaning: { en: 'to blow, spit lightly', ur: 'پھونکنا، ہلکا تھوکنا' },
            words: [
              { word: 'نَفَثَ', meaning: { en: 'he blew', ur: 'اس نے پھونکا' } },
              { word: 'نَفْث', meaning: { en: 'blowing', ur: 'پھونکنا' } },
              { word: 'نَفَّاثَة', meaning: { en: 'female blower', ur: 'پھونکنے والی' } },
            ],
          },
          balagha: {
            title: { en: 'Why Feminine?', ur: 'مؤنث کیوں؟' },
            explanation: {
              en: 'Historically women were more associated with magic/sorcery. Also refers to "souls" (نُفُوس) which is feminine.',
              ur: 'تاریخی طور پر عورتیں جادو سے زیادہ وابستہ تھیں۔ "نفوس" (روحیں) کی طرف بھی اشارہ جو مؤنث ہے۔',
            },
          },
        },
      },
      {
        id: '113:4:4',
        position: 4,
        arabic: 'فِي',
        transliteration: 'fi',
        pos: ['P'],
        posLabel: 'P',
        meaning: { en: 'in / on', ur: 'میں', hi: 'में' },
      },
      {
        id: '113:4:5',
        position: 5,
        arabic: 'الْعُقَدِ',
        transliteration: "al-'uqad",
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ق د',
        lemma: 'عُقْدَة',
        meaning: { en: 'the knots', ur: 'گرہیں', hi: 'गाँठें' },
        grammarRole: 'majrur',
        case: 'majroor',
        features: { gender: 'feminine', number: 'plural', definiteness: 'definite' },
        grammarExplanations: { en: 'Plural of عُقْدَة (knot) - used in black magic rituals.', ur: 'عُقْدَة (گرہ) کی جمع - کالے جادو کی رسومات میں استعمال۔' },
        advanced: {
          rootFamily: {
            root: 'ع ق د',
            meaning: { en: 'to tie, knot, contract', ur: 'باندھنا، گرہ، عقد' },
            words: [
              { word: 'عَقَدَ', meaning: { en: 'he tied', ur: 'اس نے باندھا' } },
              { word: 'عُقْدَة', meaning: { en: 'knot', ur: 'گرہ' } },
              { word: 'عَقْد', meaning: { en: 'contract', ur: 'عقد' } },
              { word: 'مُعَقَّد', meaning: { en: 'complicated', ur: 'پیچیدہ' } },
            ],
          },
          balagha: {
            title: { en: 'Magic Practices', ur: 'جادو کے طریقے' },
            explanation: {
              en: 'Reference to actual magic practice - tying knots while blowing/reciting evil incantations.',
              ur: 'حقیقی جادو کے طریقے کا حوالہ - گرہیں باندھتے ہوئے برے منتر پڑھنا۔',
            },
          },
        },
      },
    ],
    structure: {
      explanation: {
        en: 'Third evil: Magic/sorcery - those who practice black magic with knots',
        ur: 'تیسرا شر: جادو - وہ لوگ جو گرہوں کے ساتھ کالا جادو کرتے ہیں',
      },
    },
  },

  5: { // Ayah 5: وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
    text: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
    translation: {
      en: 'And from the evil of an envier when he envies',
      ur: 'اور حسد کرنے والے کے شر سے جب وہ حسد کرے',
      hi: 'और हसद करने वाले के शर से जब वह हसद करे',
    },
    words: [
      {
        id: '113:5:1',
        position: 1,
        arabic: 'وَمِن',
        transliteration: 'wa-min',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        meaning: { en: 'and from', ur: 'اور سے' },
      },
      {
        id: '113:5:2',
        position: 2,
        arabic: 'شَرِّ',
        transliteration: 'sharri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ر ر',
        meaning: { en: 'evil', ur: 'شر' },
        case: 'majroor',
      },
      {
        id: '113:5:3',
        position: 3,
        arabic: 'حَاسِدٍ',
        transliteration: 'hasidin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح س د',
        lemma: 'حَاسِد',
        meaning: { en: 'an envier', ur: 'حسد کرنے والا', hi: 'हसद करने वाला' },
        grammarRole: 'mudhafIlayh',
        case: 'majroor',
        features: { definiteness: 'indefinite', gender: 'masculine', pattern: 'فَاعِل' },
        grammarExplanations: { en: 'Active participle (اسم فاعل) - one who envies.', ur: 'اسم فاعل - جو حسد کرے۔' },
        advanced: {
          rootFamily: {
            root: 'ح س د',
            meaning: { en: 'to envy, be jealous', ur: 'حسد کرنا، جلنا' },
            words: [
              { word: 'حَسَدَ', meaning: { en: 'he envied', ur: 'اس نے حسد کیا' } },
              { word: 'حَسَد', meaning: { en: 'envy', ur: 'حسد' } },
              { word: 'حَاسِد', meaning: { en: 'envier', ur: 'حسد کرنے والا' } },
              { word: 'مَحْسُود', meaning: { en: 'envied one', ur: 'جس سے حسد کیا جائے' } },
            ],
          },
          balagha: {
            title: { en: 'The Evil Eye', ur: 'نظر بد' },
            explanation: {
              en: 'Hasad includes the evil eye (العين). The Prophet ﷺ said: "The evil eye is real."',
              ur: 'حسد میں نظر بد شامل ہے۔ نبی ﷺ نے فرمایا: "نظر بد حق ہے۔"',
            },
          },
        },
      },
      {
        id: '113:5:4',
        position: 4,
        arabic: 'إِذَا',
        transliteration: 'idha',
        pos: ['PART'],
        posLabel: 'PART',
        meaning: { en: 'when', ur: 'جب', hi: 'जब' },
      },
      {
        id: '113:5:5',
        position: 5,
        arabic: 'حَسَدَ',
        transliteration: 'hasada',
        pos: ['V'],
        posLabel: 'V',
        root: 'ح س د',
        lemma: 'حَسَدَ',
        meaning: { en: 'he envies', ur: 'وہ حسد کرے', hi: 'वह हसद करे' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
        grammarExplanations: { en: 'Perfect verb - "when he (actually) envies" - not just feeling but acting.', ur: 'فعل ماضی - "جب وہ (واقعی) حسد کرے" - صرف احساس نہیں بلکہ عمل۔' },
        advanced: {
          balagha: {
            title: { en: 'Active Envy', ur: 'عملی حسد' },
            explanation: {
              en: '"إِذَا حَسَدَ" - when envy moves from feeling to action (evil eye, harm, plotting).',
              ur: '"إِذَا حَسَدَ" - جب حسد احساس سے عمل کی طرف جائے (نظر بد، نقصان، سازش)۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Root Repetition', ur: 'مادے کی تکرار' },
            points: [
              {
                en: 'حَاسِدٍ and حَسَدَ from same root - emphasizes the active evil of envy.',
                ur: 'حَاسِدٍ اور حَسَدَ ایک ہی مادے سے - حسد کی فعال برائی پر زور۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      explanation: {
        en: 'Fourth evil: Envy - the dangerous emotion that harms both envier and envied',
        ur: 'چوتھا شر: حسد - خطرناک جذبہ جو حسد کرنے والے اور جس سے حسد ہو دونوں کو نقصان پہنچاتا ہے',
      },
    },
  },
};

export default SURAH_113_TREEBANK;
export { SURAH_113_TREEBANK as TREEBANK_DATA };
