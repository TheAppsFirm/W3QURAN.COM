/**
 * Surah Al-Kawthar (108) - Complete Treebank Data
 * The Abundance / A River in Paradise - 3 Ayahs, 10 Words
 *
 * Theme: Divine abundance and victory over enemies
 * Revelation: Makki
 * Context: Revealed when enemies mocked the Prophet for being "abtar" (without male offspring)
 * The SHORTEST surah in the Quran
 */

const SURAH_108_TREEBANK = {
  1: { // Ayah 1: إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ
    text: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
    translation: {
      en: 'Indeed, We have granted you Al-Kawthar',
      ur: 'بیشک ہم نے تمہیں کوثر عطا کی',
      hi: 'बेशक हमने तुम्हें कौसर अता की',
      bn: 'নিশ্চয়ই আমি আপনাকে কাউসার দান করেছি',
      tr: 'Şüphesiz biz sana Kevseri verdik',
      id: 'Sesungguhnya Kami telah memberikan kepadamu Al-Kautsar',
    },
    words: [
      {
        id: '108:1:1',
        position: 1,
        arabic: 'إِنَّا',
        transliteration: 'Inna',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        lemma: 'إِنَّ',
        meaning: { en: 'Indeed, We', ur: 'بیشک ہم نے', hi: 'बेशक हमने' },
        grammarRole: 'emphasis',
        features: { type: 'emphatic-particle', pronoun: '1st-plural-majestic' },
        grammarExplanations: {
          en: 'Emphatic particle إِنَّ + attached pronoun نَا (We). The royal "We" (pluralis majestatis) emphasizes the divine gift.',
          ur: 'حرف تاکید إِنَّ + متصل ضمیر نَا (ہم)۔ شاہی "ہم" الہی تحفے پر زور دیتا ہے۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Divine Emphasis', ur: 'الہی تاکید' },
            explanation: {
              en: 'إِنَّا uses the majestic "We" - Allah Himself emphasizes this gift, not through an angel.',
              ur: 'إِنَّا شاہانہ "ہم" استعمال کرتا ہے - اللہ خود اس تحفے پر زور دیتا ہے، فرشتے کے ذریعے نہیں۔',
            },
          },
          tajweedTips: {
            rules: [{ rule: { en: 'Ghunnah', ur: 'غنہ' }, description: { en: 'Nasalization on the نّ with shaddah', ur: 'نّ پر شدہ میں ناک کی آواز' } }],
          },
        },
      },
      {
        id: '108:1:2',
        position: 2,
        arabic: 'أَعْطَيْنَاكَ',
        transliteration: "A'taynak",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ط و',
        lemma: 'أَعْطَى',
        meaning: { en: 'We have granted you', ur: 'ہم نے تمہیں دیا', hi: 'हमने तुम्हें दिया' },
        grammarRole: 'verb',
        case: null,
        features: { aspect: 'perfect', person: '1st', number: 'plural', voice: 'active', object: '2nd-sing' },
        grammarExplanations: {
          en: 'Perfect tense verb (Form IV) with attached pronoun. The giving is COMPLETE - not "will give" but "have given".',
          ur: 'فعل ماضی (باب افعال) متصل ضمیر کے ساتھ۔ دینا مکمل ہے - "دیں گے" نہیں بلکہ "دے دیا"۔',
        },
        advanced: {
          rootFamily: {
            root: 'ع ط و',
            meaning: { en: 'to give, grant, bestow', ur: 'دینا، عطا کرنا' },
            words: [
              { word: 'أَعْطَى', meaning: { en: 'he gave', ur: 'اس نے دیا' } },
              { word: 'عَطَاء', meaning: { en: 'gift, grant', ur: 'عطیہ' } },
              { word: 'مُعْطِي', meaning: { en: 'giver', ur: 'دینے والا' } },
            ],
          },
          verbConjugation: {
            root: 'ع ط و',
            form: 'IV (أَفْعَلَ)',
            meaning: { en: 'to give, grant', ur: 'دینا، عطا کرنا' },
            table: {
              past: { he: 'أَعْطَى', we: 'أَعْطَيْنَا', they: 'أَعْطَوْا' },
              present: { he: 'يُعْطِي', we: 'نُعْطِي' },
              imperative: { you_m: 'أَعْطِ' },
            },
          },
          balagha: {
            title: { en: 'Certainty of Gift', ur: 'تحفے کی یقینیت' },
            explanation: {
              en: 'Past tense أَعْطَيْنَاكَ indicates certainty - this blessing is guaranteed, not promised.',
              ur: 'ماضی کا صیغہ أَعْطَيْنَاكَ یقین ظاہر کرتا ہے - یہ نعمت یقینی ہے، وعدہ نہیں۔',
            },
          },
        },
      },
      {
        id: '108:1:3',
        position: 3,
        arabic: 'الْكَوْثَرَ',
        transliteration: 'al-Kawthar',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ث ر',
        lemma: 'كَوْثَر',
        meaning: { en: 'Al-Kawthar (Abundance)', ur: 'کوثر (کثرت/نہر)', hi: 'कौसर (बहुतायत)' },
        grammarRole: 'maf\'ul-bih',
        case: 'mansoob',
        features: { state: 'accusative', definite: true, type: 'noun', pattern: 'فَوْعَل' },
        grammarExplanations: {
          en: 'Direct object - what was given. Kawthar means "abundant good" - includes a river in Paradise, the Prophet\'s pool, intercession, followers, etc.',
          ur: 'مفعول بہ - جو دیا گیا۔ کوثر کا مطلب "کثیر خیر" - جنت کی نہر، حوض، شفاعت، پیروکار وغیرہ شامل ہیں۔',
        },
        advanced: {
          rootFamily: {
            root: 'ك ث ر',
            meaning: { en: 'to be many, abundant, numerous', ur: 'زیادہ ہونا، کثرت' },
            words: [
              { word: 'كَثِير', meaning: { en: 'many, much', ur: 'بہت، کثیر' } },
              { word: 'كَوْثَر', meaning: { en: 'abundance (intensive)', ur: 'انتہائی کثرت' } },
              { word: 'أَكْثَر', meaning: { en: 'more, most', ur: 'زیادہ' } },
              { word: 'تَكَاثُر', meaning: { en: 'rivalry in accumulation', ur: 'زیادتی کی دوڑ' } },
            ],
          },
          balagha: {
            title: { en: 'Intensive Pattern', ur: 'مبالغہ کا وزن' },
            explanation: {
              en: 'فَوْعَل pattern (كَوْثَر) indicates extreme abundance - not just "much" but "unlimited abundance".',
              ur: 'فَوْعَل وزن (کَوْثَر) انتہائی کثرت ظاہر کرتا ہے - صرف "بہت" نہیں بلکہ "لامحدود کثرت"۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Multiple Meanings', ur: 'متعدد معانی' },
            explanation: {
              en: 'الكَوْثَر encompasses: (1) River in Paradise, (2) Prophet\'s pool, (3) Prophethood, (4) Quran, (5) Intercession, (6) Billions of followers.',
              ur: 'الکَوْثَر میں شامل: (1) جنت کی نہر، (2) حوض نبوی، (3) نبوت، (4) قرآن، (5) شفاعت، (6) کروڑوں پیروکار۔',
            },
          },
          memoryHook: {
            en: 'Kawthar (كَوْثَر) = from كَثِير (many). Allah gave Prophet Muhammad ﷺ MORE than anyone - more followers, more legacy, more honor.',
            ur: 'کوثر (كَوْثَر) = کَثِير (بہت) سے۔ اللہ نے محمد ﷺ کو سب سے زیادہ دیا - زیادہ پیروکار، زیادہ میراث، زیادہ عزت۔',
          },
        },
      },
    ],
    dependency: {
      root: 'أَعْطَيْنَاكَ',
      structure: [
        { word: 'إِنَّا', role: 'emphasis+subject', governs: 'أَعْطَيْنَاكَ' },
        { word: 'أَعْطَيْنَاكَ', role: 'main-verb', governs: 'الْكَوْثَرَ' },
        { word: 'الْكَوْثَرَ', role: 'direct-object', dependsOn: 'أَعْطَيْنَاكَ' },
      ],
    },
  },

  2: { // Ayah 2: فَصَلِّ لِرَبِّكَ وَانْحَرْ
    text: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
    translation: {
      en: 'So pray to your Lord and sacrifice',
      ur: 'پس اپنے رب کے لیے نماز پڑھو اور قربانی کرو',
      hi: 'तो अपने रब के लिए नमाज़ पढ़ो और क़ुर्बानी करो',
      bn: 'অতএব আপনার রবের জন্য সালাত আদায় করুন এবং কুরবানী করুন',
      tr: 'O halde Rabbin için namaz kıl ve kurban kes',
      id: 'Maka dirikanlah salat karena Tuhanmu dan berkurbanlah',
    },
    words: [
      {
        id: '108:2:1',
        position: 1,
        arabic: 'فَصَلِّ',
        transliteration: 'Fa-salli',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ص ل و',
        lemma: 'صَلَّى',
        meaning: { en: 'So pray', ur: 'پس نماز پڑھو', hi: 'तो नमाज़ पढ़ो' },
        grammarRole: 'verb',
        features: { aspect: 'imperative', person: '2nd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'فَ (so/then) + imperative verb. The فَ connects to the gift - BECAUSE of Kawthar, pray in gratitude.',
          ur: 'فَ (پس) + فعل امر۔ فَ تحفے سے جوڑتا ہے - کوثر کی وجہ سے شکریے میں نماز پڑھو۔',
        },
        advanced: {
          rootFamily: {
            root: 'ص ل و',
            meaning: { en: 'to pray, connect, follow closely', ur: 'نماز پڑھنا، جوڑنا' },
            words: [
              { word: 'صَلَاة', meaning: { en: 'prayer', ur: 'نماز' } },
              { word: 'صَلَّى', meaning: { en: 'he prayed', ur: 'اس نے نماز پڑھی' } },
              { word: 'مُصَلَّى', meaning: { en: 'prayer place', ur: 'نماز کی جگہ' } },
            ],
          },
          balagha: {
            title: { en: 'Response to Blessing', ur: 'نعمت کا جواب' },
            explanation: {
              en: 'فَ indicates consequence - the proper response to Allah\'s gift is worship, not pride.',
              ur: 'فَ نتیجہ ظاہر کرتا ہے - اللہ کے تحفے کا مناسب جواب عبادت ہے، غرور نہیں۔',
            },
          },
        },
      },
      {
        id: '108:2:2',
        position: 2,
        arabic: 'لِرَبِّكَ',
        transliteration: 'li-Rabbika',
        pos: ['P', 'N', 'PRON'],
        posLabel: 'P+N+PRON',
        root: 'ر ب ب',
        lemma: 'رَبّ',
        meaning: { en: 'to your Lord', ur: 'اپنے رب کے لیے', hi: 'अपने रब के लिए' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun', possessive: '2nd-sing' },
        grammarExplanations: {
          en: 'Prepositional phrase - pray exclusively FOR your Lord. Not for show, not for people.',
          ur: 'جار مجرور - صرف اپنے رب کے لیے نماز پڑھو۔ دکھاوے کے لیے نہیں، لوگوں کے لیے نہیں۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Exclusive Dedication', ur: 'خالص وقف' },
            explanation: {
              en: 'لِرَبِّكَ (for YOUR Lord) - personal relationship emphasized. He gave YOU Kawthar, so worship HIM.',
              ur: 'لِرَبِّكَ (اپنے رب کے لیے) - ذاتی تعلق پر زور۔ اس نے تمہیں کوثر دی، تو اسی کی عبادت کرو۔',
            },
          },
        },
      },
      {
        id: '108:2:3',
        position: 3,
        arabic: 'وَانْحَرْ',
        transliteration: 'Wa-nhar',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ن ح ر',
        lemma: 'نَحَرَ',
        meaning: { en: 'and sacrifice', ur: 'اور قربانی کرو', hi: 'और क़ुर्बानी करो' },
        grammarRole: 'verb',
        case: null,
        features: { aspect: 'imperative', person: '2nd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'وَ (and) + imperative. Two acts of worship: Salah (spiritual) + Sacrifice (physical/material).',
          ur: 'وَ (اور) + فعل امر۔ دو عبادات: صلاۃ (روحانی) + قربانی (جسمانی/مادی)۔',
        },
        advanced: {
          rootFamily: {
            root: 'ن ح ر',
            meaning: { en: 'to slaughter, sacrifice at the throat', ur: 'نحر کرنا، گلے سے ذبح' },
            words: [
              { word: 'نَحَرَ', meaning: { en: 'he sacrificed', ur: 'اس نے قربانی کی' } },
              { word: 'نَحْر', meaning: { en: 'throat, slaughter', ur: 'گلا، نحر' } },
              { word: 'مَنْحَر', meaning: { en: 'place of sacrifice', ur: 'قربان گاہ' } },
            ],
          },
          balagha: {
            title: { en: 'Complete Worship', ur: 'مکمل عبادت' },
            explanation: {
              en: 'صَلِّ (pray) + انْحَرْ (sacrifice) = body worship + wealth worship. Islam demands BOTH.',
              ur: 'صَلِّ (نماز) + انْحَرْ (قربانی) = جسمانی عبادت + مالی عبادت۔ اسلام دونوں مانگتا ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Counter to Enemies', ur: 'دشمنوں کا جواب' },
            explanation: {
              en: 'Enemies mocked Prophet ﷺ. Allah says: Ignore them! Focus on ME - pray and sacrifice. Your legacy is with ME.',
              ur: 'دشمنوں نے نبی ﷺ کا مذاق اڑایا۔ اللہ کہتا ہے: ان کو نظر انداز کرو! مجھ پر توجہ دو - نماز پڑھو اور قربانی کرو۔',
            },
          },
          memoryHook: {
            en: 'نَحَرَ (nahr) = throat sacrifice. On Eid ul-Adha, we do "nahr" - remembering this very command!',
            ur: 'نَحَرَ (نحر) = گلے سے ذبح۔ عید الاضحیٰ پر ہم "نحر" کرتے ہیں - اسی حکم کو یاد کرتے ہوئے!',
          },
        },
      },
    ],
    dependency: {
      root: 'فَصَلِّ',
      structure: [
        { word: 'فَصَلِّ', role: 'main-verb-1', governs: 'لِرَبِّكَ' },
        { word: 'لِرَبِّكَ', role: 'prep-phrase', dependsOn: 'صَلِّ' },
        { word: 'وَانْحَرْ', role: 'main-verb-2', coordinated: 'صَلِّ' },
      ],
    },
  },

  3: { // Ayah 3: إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ
    text: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
    translation: {
      en: 'Indeed, your enemy is the one cut off',
      ur: 'بیشک تمہارا دشمن ہی بے نسل ہے',
      hi: 'बेशक तुम्हारा दुश्मन ही बेऔलाद है',
      bn: 'নিশ্চয়ই আপনার শত্রুই নির্বংশ',
      tr: 'Doğrusu sana kin besleyenin soyu kesiktir',
      id: 'Sungguh, orang-orang yang membencimu, dialah yang terputus',
    },
    words: [
      {
        id: '108:3:1',
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
          en: 'Emphatic particle - emphasizing the truth that will silence the mockers.',
          ur: 'حرف تاکید - اس سچائی پر زور جو ٹھٹھہ کرنے والوں کو خاموش کر دے گی۔',
        },
      },
      {
        id: '108:3:2',
        position: 2,
        arabic: 'شَانِئَكَ',
        transliteration: "Shani'aka",
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ش ن أ',
        lemma: 'شَانِئ',
        meaning: { en: 'your hater/enemy', ur: 'تمہارا دشمن', hi: 'तुम्हारा दुश्मन' },
        grammarRole: 'ism-inna',
        case: 'mansoob',
        features: { state: 'accusative', type: 'active-participle', possessive: '2nd-sing' },
        grammarExplanations: {
          en: 'Active participle (شَانِئ) + attached pronoun. The one who HATES you - not just opposes, but despises.',
          ur: 'اسم فاعل (شَانِئ) + متصل ضمیر۔ جو تم سے نفرت کرتا ہے - صرف مخالف نہیں، بلکہ حقیر سمجھتا ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ش ن أ',
            meaning: { en: 'to hate, detest', ur: 'نفرت کرنا، گھن کرنا' },
            words: [
              { word: 'شَنَأَ', meaning: { en: 'he hated', ur: 'اس نے نفرت کی' } },
              { word: 'شَانِئ', meaning: { en: 'hater', ur: 'نفرت کرنے والا' } },
              { word: 'شَنَآن', meaning: { en: 'hatred', ur: 'نفرت' } },
            ],
          },
          balagha: {
            title: { en: 'The Real Enemy Named', ur: 'اصل دشمن کا نام' },
            explanation: {
              en: 'شَانِئَكَ refers to al-As ibn Wa\'il who called Prophet ﷺ "abtar". Now HE is declared abtar.',
              ur: 'شَانِئَكَ عاص بن وائل کی طرف اشارہ ہے جس نے نبی ﷺ کو "ابتر" کہا۔ اب وہ خود ابتر قرار پایا۔',
            },
          },
        },
      },
      {
        id: '108:3:3',
        position: 3,
        arabic: 'هُوَ',
        transliteration: 'Huwa',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        lemma: 'هُوَ',
        meaning: { en: 'he [is]', ur: 'وہ (ہے)', hi: 'वह (है)' },
        grammarRole: 'pronoun-separation',
        case: null,
        features: { type: 'personal-pronoun', person: '3rd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'Separating pronoun (ضَمِير الفَصْل) - creates emphasis: "HE is the one who is cut off, not you!"',
          ur: 'ضمیر فصل - تاکید پیدا کرتا ہے: "وہی کٹا ہوا ہے، تم نہیں!"',
        },
        advanced: {
          balagha: {
            title: { en: 'Emphasis Through Pronoun', ur: 'ضمیر سے تاکید' },
            explanation: {
              en: 'هُوَ acts as exclusion - the tables are turned. The mocker becomes the mocked.',
              ur: 'هُوَ حصر کرتا ہے - پانسے پلٹ گئے۔ ٹھٹھہ کرنے والا خود مذاق بن گیا۔',
            },
          },
        },
      },
      {
        id: '108:3:4',
        position: 4,
        arabic: 'الْأَبْتَرُ',
        transliteration: 'al-Abtar',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ب ت ر',
        lemma: 'أَبْتَر',
        meaning: { en: 'the one cut off', ur: 'جڑ سے کٹا ہوا', hi: 'जड़ से कटा हुआ' },
        grammarRole: 'khabar-inna',
        case: 'marfoo',
        features: { state: 'nominative', definite: true, type: 'adjective', pattern: 'أَفْعَل' },
        grammarExplanations: {
          en: 'Predicate of إِنَّ - the final verdict. Abtar means cut off from legacy, descendants, and good.',
          ur: 'خبر إِنَّ - آخری فیصلہ۔ ابتر یعنی میراث، اولاد اور خیر سے کٹا ہوا۔',
        },
        advanced: {
          rootFamily: {
            root: 'ب ت ر',
            meaning: { en: 'to cut off, sever, amputate', ur: 'کاٹنا، الگ کرنا' },
            words: [
              { word: 'بَتَرَ', meaning: { en: 'he cut', ur: 'اس نے کاٹا' } },
              { word: 'أَبْتَر', meaning: { en: 'cut off (one)', ur: 'کٹا ہوا' } },
              { word: 'بَتْر', meaning: { en: 'amputation', ur: 'کاٹنا' } },
            ],
          },
          balagha: {
            title: { en: 'Complete Reversal', ur: 'مکمل الٹ' },
            explanation: {
              en: 'They called him "abtar" (without legacy). Allah declares: YOUR hater is abtar. Today, billions follow Muhammad ﷺ, but who remembers al-As ibn Wa\'il?',
              ur: 'انہوں نے اسے "ابتر" (بے میراث) کہا۔ اللہ نے فرمایا: تیرا دشمن ابتر ہے۔ آج اربوں محمد ﷺ کی پیروی کرتے ہیں، مگر عاص بن وائل کو کون جانتا ہے؟',
            },
          },
          linguisticMiracle: {
            title: { en: 'Prophecy Fulfilled', ur: 'پیشگوئی پوری ہوئی' },
            explanation: {
              en: 'This surah was a prophecy: "Your enemy will be forgotten, you will be remembered forever." 1400+ years later: Prophet Muhammad ﷺ is the most influential human in history.',
              ur: 'یہ سورہ پیشگوئی تھی: "تمہارا دشمن بھلا دیا جائے گا، تم ہمیشہ یاد رہو گے۔" 1400+ سال بعد: محمد ﷺ تاریخ کے سب سے بااثر انسان ہیں۔',
            },
          },
          memoryHook: {
            en: 'أَبْتَر (abtar) = cut-off tail. The enemy wanted to cut off Prophet\'s legacy - but his own legacy is what got cut!',
            ur: 'أَبْتَر (ابتر) = کٹی دم۔ دشمن نبی کی میراث کاٹنا چاہتا تھا - مگر اس کی اپنی میراث کٹ گئی!',
          },
        },
      },
    ],
    dependency: {
      root: 'شَانِئَكَ',
      structure: [
        { word: 'إِنَّ', role: 'emphatic-particle', governs: 'شَانِئَكَ' },
        { word: 'شَانِئَكَ', role: 'ism-inna', subject: true },
        { word: 'هُوَ', role: 'separation-pronoun', emphasizes: 'الْأَبْتَرُ' },
        { word: 'الْأَبْتَرُ', role: 'khabar-inna', predicate: true },
      ],
    },
  },
};

export default SURAH_108_TREEBANK;
