/**
 * Surah An-Nasr (110) - Complete Treebank Data
 * The Divine Support / The Help - 3 Ayahs, 19 Words
 *
 * Theme: Victory, conquest of Mecca, and seeking forgiveness
 * Revelation: Madani (one of the last surahs revealed)
 * Context: Revealed after the conquest of Mecca, signaling the Prophet's approaching death
 */

const SURAH_110_TREEBANK = {
  1: { // Ayah 1: إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ
    text: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
    translation: {
      en: 'When the victory of Allah has come and the conquest',
      ur: 'جب اللہ کی مدد آ جائے اور فتح ہو جائے',
      hi: 'जब अल्लाह की मदद आ जाए और फ़तह हो जाए',
      bn: 'যখন আল্লাহর সাহায্য ও বিজয় আসবে',
      tr: "Allah'ın yardımı ve fetih geldiği zaman",
      id: 'Apabila pertolongan Allah telah datang dan kemenangan',
    },
    words: [
      {
        id: '110:1:1',
        position: 1,
        arabic: 'إِذَا',
        transliteration: 'Idha',
        pos: ['COND'],
        posLabel: 'COND',
        root: null,
        lemma: 'إِذَا',
        meaning: { en: 'When', ur: 'جب', hi: 'जब' },
        grammarRole: 'conditional',
        features: { type: 'conditional-particle', time: 'future-certain' },
        grammarExplanations: {
          en: 'Conditional particle for certain future events. إِذَا (when) implies certainty - not "if" but "WHEN".',
          ur: 'یقینی مستقبل کے لیے شرطیہ حرف۔ إِذَا (جب) یقین ظاہر کرتا ہے - "اگر" نہیں بلکہ "جب"۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Certainty of Victory', ur: 'فتح کی یقینیت' },
            explanation: {
              en: 'إِذَا (when) not إِنْ (if). The conquest is CERTAIN, not hypothetical. Allah promises it.',
              ur: 'إِذَا (جب) نہ کہ إِنْ (اگر)۔ فتح یقینی ہے، فرضی نہیں۔ اللہ کا وعدہ ہے۔',
            },
          },
        },
      },
      {
        id: '110:1:2',
        position: 2,
        arabic: 'جَاءَ',
        transliteration: "Ja'a",
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ي أ',
        lemma: 'جَاءَ',
        meaning: { en: 'comes', ur: 'آئے', hi: 'आए' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'Perfect tense used for future - so certain it\'s described as already happened.',
          ur: 'ماضی کا صیغہ مستقبل کے لیے - اتنا یقینی کہ ہو چکا بیان کیا۔',
        },
        advanced: {
          rootFamily: {
            root: 'ج ي أ',
            meaning: { en: 'to come', ur: 'آنا' },
            words: [
              { word: 'جَاءَ', meaning: { en: 'he came', ur: 'وہ آیا' } },
              { word: 'مَجِيء', meaning: { en: 'coming, arrival', ur: 'آمد' } },
              { word: 'جَائِي', meaning: { en: 'coming (one)', ur: 'آنے والا' } },
            ],
          },
        },
      },
      {
        id: '110:1:3',
        position: 3,
        arabic: 'نَصْرُ',
        transliteration: 'Nasru',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ص ر',
        lemma: 'نَصْر',
        meaning: { en: 'victory/help of', ur: 'مدد', hi: 'मदद' },
        grammarRole: 'mudaf',
        case: 'marfoo',
        features: { state: 'nominative', type: 'noun' },
        grammarExplanations: {
          en: 'Subject of جَاءَ - "the help" comes. نَصْر means divine aid that leads to victory.',
          ur: 'جَاءَ کا فاعل - "مدد" آتی ہے۔ نَصْر کا مطلب وہ الہی مدد جو فتح کا سبب بنے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ن ص ر',
            meaning: { en: 'to help, give victory', ur: 'مدد کرنا، نصرت دینا' },
            words: [
              { word: 'نَصَرَ', meaning: { en: 'he helped', ur: 'اس نے مدد کی' } },
              { word: 'نَصْر', meaning: { en: 'help, victory', ur: 'مدد، نصرت' } },
              { word: 'نَاصِر', meaning: { en: 'helper', ur: 'مددگار' } },
              { word: 'أَنْصَار', meaning: { en: 'helpers (Madinah)', ur: 'انصار' } },
              { word: 'مَنْصُور', meaning: { en: 'victorious', ur: 'منصور' } },
            ],
          },
          balagha: {
            title: { en: 'Source of Victory', ur: 'فتح کا ذریعہ' },
            explanation: {
              en: 'نَصْرُ اللَّهِ - Victory is FROM Allah, not from strategy or numbers. Acknowledges the true source.',
              ur: 'نَصْرُ اللَّهِ - فتح اللہ کی طرف سے ہے، حکمت عملی یا تعداد سے نہیں۔ حقیقی ذریعے کا اعتراف۔',
            },
          },
        },
      },
      {
        id: '110:1:4',
        position: 4,
        arabic: 'اللَّهِ',
        transliteration: 'Allahi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        lemma: 'اللّٰه',
        meaning: { en: 'of Allah', ur: 'اللہ کی', hi: 'अल्लाह की' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', proper: true, type: 'noun' },
        grammarExplanations: {
          en: 'Possessive - "Allah\'s help". The victory belongs to Him, we are instruments.',
          ur: 'اضافت - "اللہ کی مدد"۔ فتح اس کی ہے، ہم ذریعہ ہیں۔',
        },
      },
      {
        id: '110:1:5',
        position: 5,
        arabic: 'وَالْفَتْحُ',
        transliteration: 'Wal-Fath',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ف ت ح',
        lemma: 'فَتْح',
        meaning: { en: 'and the conquest', ur: 'اور فتح', hi: 'और फ़तह' },
        grammarRole: 'noun',
        case: 'marfoo',
        features: { state: 'nominative', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Conjunction + definite noun. الفَتْح refers specifically to the Conquest of Mecca (Fath Makkah).',
          ur: 'حرف عطف + معرفہ اسم۔ الفَتْح خاص طور پر فتح مکہ کی طرف اشارہ۔',
        },
        advanced: {
          rootFamily: {
            root: 'ف ت ح',
            meaning: { en: 'to open, conquer, begin', ur: 'کھولنا، فتح کرنا، شروع کرنا' },
            words: [
              { word: 'فَتَحَ', meaning: { en: 'he opened/conquered', ur: 'اس نے کھولا/فتح کیا' } },
              { word: 'فَتْح', meaning: { en: 'opening, conquest', ur: 'فتح' } },
              { word: 'فَاتِح', meaning: { en: 'conqueror, opener', ur: 'فاتح' } },
              { word: 'مِفْتَاح', meaning: { en: 'key', ur: 'چابی' } },
              { word: 'فَتَّاح', meaning: { en: 'The Opener (Allah)', ur: 'الفتاح (اللہ)' } },
            ],
          },
          linguisticMiracle: {
            title: { en: 'Double Meaning of Fath', ur: 'فتح کے دو معنی' },
            explanation: {
              en: 'فَتْح means both "conquest" and "opening" - the conquest opened Arabia to Islam, and hearts to guidance.',
              ur: 'فَتْح کے معنی "فتح" اور "کھولنا" - فتح نے عرب کو اسلام کے لیے کھولا، اور دلوں کو ہدایت کے لیے۔',
            },
          },
          memoryHook: {
            en: 'فَتْح (Fath) = opening. The Conquest of Mecca OPENED the door for all of Arabia to accept Islam.',
            ur: 'فَتْح = کھولنا۔ فتح مکہ نے پورے عرب کے لیے اسلام قبول کرنے کا دروازہ کھولا۔',
          },
        },
      },
    ],
    dependency: {
      root: 'جَاءَ',
      structure: [
        { word: 'إِذَا', role: 'conditional', governs: 'جَاءَ' },
        { word: 'جَاءَ', role: 'main-verb', subject: 'نَصْرُ' },
        { word: 'نَصْرُ', role: 'subject', mudaf: true },
        { word: 'اللَّهِ', role: 'mudaf-ilayh', dependsOn: 'نَصْرُ' },
        { word: 'وَالْفَتْحُ', role: 'coordinated-subject', joined_to: 'نَصْرُ' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'شرط + فعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  2: { // Ayah 2: وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا
    text: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
    translation: {
      en: 'And you see the people entering into the religion of Allah in multitudes',
      ur: 'اور تم لوگوں کو دیکھو کہ اللہ کے دین میں فوج در فوج داخل ہو رہے ہیں',
      hi: 'और तुम लोगों को देखो कि अल्लाह के दीन में फ़ौज दर फ़ौज दाख़िल हो रहे हैं',
      bn: 'এবং আপনি দেখছেন মানুষ দলে দলে আল্লাহর দীনে প্রবেশ করছে',
      tr: 'Ve insanların bölük bölük Allah\'ın dinine girdiklerini gördüğünde',
      id: 'dan kamu melihat manusia masuk agama Allah dengan berbondong-bondong',
    },
    words: [
      {
        id: '110:2:1',
        position: 1,
        arabic: 'وَرَأَيْتَ',
        transliteration: "Wa-ra'ayta",
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر أ ي',
        lemma: 'رَأَى',
        meaning: { en: 'And you see', ur: 'اور تم دیکھو', hi: 'और तुम देखो' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '2nd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'Perfect tense addressing Prophet ﷺ directly - "and you have seen/will see".',
          ur: 'نبی ﷺ کو براہ راست مخاطب کرتے ہوئے ماضی - "اور تم نے دیکھا/دیکھو گے"۔',
        },
        advanced: {
          rootFamily: {
            root: 'ر أ ي',
            meaning: { en: 'to see, view, think', ur: 'دیکھنا، سوچنا' },
            words: [
              { word: 'رَأَى', meaning: { en: 'he saw', ur: 'اس نے دیکھا' } },
              { word: 'رُؤْيَة', meaning: { en: 'seeing, vision', ur: 'رویت' } },
              { word: 'رَأْي', meaning: { en: 'opinion', ur: 'رائے' } },
              { word: 'رُؤْيَا', meaning: { en: 'dream', ur: 'خواب' } },
            ],
          },
        },
      },
      {
        id: '110:2:2',
        position: 2,
        arabic: 'النَّاسَ',
        transliteration: 'an-Nasa',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        lemma: 'نَاس',
        meaning: { en: 'the people', ur: 'لوگوں کو', hi: 'लोगों को' },
        grammarRole: 'maf\'ul-bih',
        case: 'mansoob',
        features: { state: 'accusative', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Direct object - what is being seen. "The people" - all of Arabia coming to Islam.',
          ur: 'مفعول بہ - جو دیکھا جا رہا ہے۔ "لوگ" - پورا عرب اسلام کی طرف آتا ہوا۔',
        },
      },
      {
        id: '110:2:3',
        position: 3,
        arabic: 'يَدْخُلُونَ',
        transliteration: 'Yadkhulun',
        pos: ['V'],
        posLabel: 'V',
        root: 'د خ ل',
        lemma: 'دَخَلَ',
        meaning: { en: 'entering', ur: 'داخل ہو رہے ہیں', hi: 'दाख़िल हो रहे हैं' },
        grammarRole: 'hal',
        features: { aspect: 'imperfect', person: '3rd', gender: 'masculine', number: 'plural' },
        grammarExplanations: {
          en: 'Imperfect verb as حال (circumstantial) - describing HOW people are seen: "in the state of entering".',
          ur: 'فعل مضارع بطور حال - بیان کرتا ہے کیسے لوگ دکھائی دیتے ہیں: "داخل ہوتے ہوئے"۔',
        },
        advanced: {
          rootFamily: {
            root: 'د خ ل',
            meaning: { en: 'to enter', ur: 'داخل ہونا' },
            words: [
              { word: 'دَخَلَ', meaning: { en: 'he entered', ur: 'وہ داخل ہوا' } },
              { word: 'دُخُول', meaning: { en: 'entering', ur: 'داخلہ' } },
              { word: 'مَدْخَل', meaning: { en: 'entrance', ur: 'داخلی راستہ' } },
              { word: 'دَاخِل', meaning: { en: 'inside', ur: 'اندر' } },
            ],
          },
          balagha: {
            title: { en: 'Continuous Action', ur: 'جاری عمل' },
            explanation: {
              en: 'يَدْخُلُونَ (imperfect) shows continuous entering - wave after wave of people, not one-time event.',
              ur: 'يَدْخُلُونَ (مضارع) مسلسل داخلہ دکھاتا ہے - لہر در لہر لوگ، ایک بار کا واقعہ نہیں۔',
            },
          },
        },
      },
      {
        id: '110:2:4',
        position: 4,
        arabic: 'فِي',
        transliteration: 'Fi',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        lemma: 'فِي',
        meaning: { en: 'in/into', ur: 'میں', hi: 'में' },
        grammarRole: 'preposition',
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition - entering INTO the religion, not just near or around it.',
          ur: 'حرف جر - دین کے اندر داخل ہونا، قریب یا ارد گرد نہیں۔',
        },
      },
      {
        id: '110:2:5',
        position: 5,
        arabic: 'دِينِ',
        transliteration: 'Dini',
        pos: ['N'],
        posLabel: 'N',
        root: 'د ي ن',
        lemma: 'دِين',
        meaning: { en: 'the religion of', ur: 'دین', hi: 'दीन' },
        grammarRole: 'mudaf',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun' },
        grammarExplanations: {
          en: 'Object of preposition, in idafa with Allah - "the religion OF Allah" = Islam.',
          ur: 'حرف جر کا مفعول، اللہ کے ساتھ اضافت - "اللہ کا دین" = اسلام۔',
        },
        advanced: {
          rootFamily: {
            root: 'د ي ن',
            meaning: { en: 'religion, judgment, debt', ur: 'دین، فیصلہ، قرض' },
            words: [
              { word: 'دِين', meaning: { en: 'religion', ur: 'دین' } },
              { word: 'دَيَّان', meaning: { en: 'Judge (Allah)', ur: 'دیان (اللہ)' } },
              { word: 'يَوْم الدِّين', meaning: { en: 'Day of Judgment', ur: 'یوم الدین' } },
              { word: 'دَيْن', meaning: { en: 'debt', ur: 'قرض' } },
            ],
          },
        },
      },
      {
        id: '110:2:6',
        position: 6,
        arabic: 'اللَّهِ',
        transliteration: 'Allahi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        lemma: 'اللّٰه',
        meaning: { en: 'of Allah', ur: 'اللہ کے', hi: 'अल्लाह के' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', proper: true, type: 'noun' },
        grammarExplanations: {
          en: 'Possessive - "Allah\'s religion" emphasizes it\'s not man-made but divine.',
          ur: 'اضافت - "اللہ کا دین" زور دیتا ہے یہ انسان کا بنایا نہیں بلکہ الہی ہے۔',
        },
      },
      {
        id: '110:2:7',
        position: 7,
        arabic: 'أَفْوَاجًا',
        transliteration: 'Afwaja',
        pos: ['N'],
        posLabel: 'N',
        root: 'ف و ج',
        lemma: 'فَوْج',
        meaning: { en: 'in multitudes', ur: 'فوج در فوج', hi: 'फ़ौज दर फ़ौज' },
        grammarRole: 'hal',
        case: 'mansoob',
        features: { state: 'accusative', number: 'plural', type: 'noun' },
        grammarExplanations: {
          en: 'Adverbial accusative (حال) - describing the manner of entering: in groups, waves, armies.',
          ur: 'حال منصوب - داخلے کا انداز: گروہوں، لہروں، فوجوں میں۔',
        },
        advanced: {
          rootFamily: {
            root: 'ف و ج',
            meaning: { en: 'group, troop, crowd', ur: 'گروہ، فوج، ہجوم' },
            words: [
              { word: 'فَوْج', meaning: { en: 'group, army', ur: 'فوج، گروہ' } },
              { word: 'أَفْوَاج', meaning: { en: 'groups, multitudes', ur: 'فوجیں، گروہ' } },
            ],
          },
          balagha: {
            title: { en: 'The Mass Conversion', ur: 'اجتماعی قبول اسلام' },
            explanation: {
              en: 'أَفْوَاجًا (in groups/waves) - not one by one, but entire tribes accepting Islam together after Fath Makkah.',
              ur: 'أَفْوَاجًا (گروہوں میں) - ایک ایک نہیں، بلکہ پورے قبائل فتح مکہ کے بعد اسلام قبول کرتے ہوئے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Historical Accuracy', ur: 'تاریخی درستگی' },
            explanation: {
              en: 'Before Fath Makkah: individuals accepted Islam. After: entire tribes came in crowds. أَفْوَاجًا perfectly describes this.',
              ur: 'فتح مکہ سے پہلے: افراد اسلام قبول کرتے۔ بعد میں: پورے قبائل آتے۔ أَفْوَاجًا اس کا کامل بیان۔',
            },
          },
        },
      },
    ],
    dependency: {
      root: 'رَأَيْتَ',
      structure: [
        { word: 'وَ', role: 'conjunction', continues_from: 'ayah-1' },
        { word: 'رَأَيْتَ', role: 'main-verb', object: 'النَّاسَ' },
        { word: 'النَّاسَ', role: 'direct-object' },
        { word: 'يَدْخُلُونَ', role: 'hal-clause', describes: 'النَّاسَ' },
        { word: 'فِي دِينِ اللَّهِ', role: 'prep-phrase', dependsOn: 'يَدْخُلُونَ' },
        { word: 'أَفْوَاجًا', role: 'hal-manner', describes: 'يَدْخُلُونَ' },
      ],
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },

  3: { // Ayah 3: فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا
    text: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
    translation: {
      en: 'Then exalt with praise of your Lord and seek His forgiveness. Indeed, He is ever Accepting of repentance.',
      ur: 'تو اپنے رب کی حمد کے ساتھ تسبیح کرو اور اس سے مغفرت مانگو۔ بیشک وہ بہت توبہ قبول کرنے والا ہے',
      hi: 'तो अपने रब की हम्द के साथ तस्बीह करो और उससे मग़फ़िरत माँगो। बेशक वह बहुत तौबा क़बूल करने वाला है',
      bn: 'তখন আপনার রবের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করুন এবং তাঁর কাছে ক্ষমা প্রার্থনা করুন। নিশ্চয়ই তিনি তওবা গ্রহণকারী',
      tr: 'Rabbini hamd ile tesbih et ve O\'ndan mağfiret dile. Şüphesiz O, tövbeleri çok kabul edendir',
      id: 'maka bertasbihlah dengan memuji Tuhanmu dan mohonlah ampunan kepada-Nya. Sesungguhnya Dia adalah Maha Penerima tobat',
    },
    words: [
      {
        id: '110:3:1',
        position: 1,
        arabic: 'فَسَبِّحْ',
        transliteration: 'Fa-sabbih',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'س ب ح',
        lemma: 'سَبَّحَ',
        meaning: { en: 'Then glorify/exalt', ur: 'پس تسبیح کرو', hi: 'तो तस्बीह करो' },
        grammarRole: 'verb',
        features: { aspect: 'imperative', person: '2nd', gender: 'masculine', number: 'singular', form: 'II' },
        grammarExplanations: {
          en: 'فَ (then/so) + imperative. RESPONSE to victory: glorify Allah, don\'t become arrogant.',
          ur: 'فَ (پس) + فعل امر۔ فتح کا جواب: اللہ کی تسبیح کرو، مغرور نہ ہو۔',
        },
        advanced: {
          rootFamily: {
            root: 'س ب ح',
            meaning: { en: 'to glorify, swim, float', ur: 'تسبیح کرنا، تیرنا' },
            words: [
              { word: 'سَبَّحَ', meaning: { en: 'he glorified', ur: 'اس نے تسبیح کی' } },
              { word: 'تَسْبِيح', meaning: { en: 'glorification', ur: 'تسبیح' } },
              { word: 'سُبْحَان', meaning: { en: 'glory be to', ur: 'پاک ہے' } },
              { word: 'مُسَبِّح', meaning: { en: 'one who glorifies', ur: 'تسبیح کرنے والا' } },
            ],
          },
          balagha: {
            title: { en: 'Humility in Victory', ur: 'فتح میں عاجزی' },
            explanation: {
              en: 'فَسَبِّحْ immediately after victory - the proper response to success is not pride, but turning to Allah.',
              ur: 'فَسَبِّحْ فتح کے فوراً بعد - کامیابی کا مناسب جواب غرور نہیں، بلکہ اللہ کی طرف رجوع۔',
            },
          },
        },
      },
      {
        id: '110:3:2',
        position: 2,
        arabic: 'بِحَمْدِ',
        transliteration: 'bi-Hamdi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ح م د',
        lemma: 'حَمْد',
        meaning: { en: 'with praise of', ur: 'حمد کے ساتھ', hi: 'हम्द के साथ' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun' },
        grammarExplanations: {
          en: 'Preposition + noun - glorify WITH praise. Combine tasbih (declaring perfection) + hamd (thanking).',
          ur: 'حرف جر + اسم - حمد کے ساتھ تسبیح۔ تسبیح (کمال کا اعلان) + حمد (شکر) ملاؤ۔',
        },
        advanced: {
          rootFamily: {
            root: 'ح م د',
            meaning: { en: 'to praise, thank', ur: 'حمد کرنا، شکر' },
            words: [
              { word: 'حَمِدَ', meaning: { en: 'he praised', ur: 'اس نے حمد کی' } },
              { word: 'حَمْد', meaning: { en: 'praise', ur: 'حمد' } },
              { word: 'مَحْمُود', meaning: { en: 'praised one', ur: 'محمود' } },
              { word: 'أَحْمَد', meaning: { en: 'most praiseworthy', ur: 'احمد' } },
              { word: 'مُحَمَّد', meaning: { en: 'praised one', ur: 'محمد' } },
            ],
          },
        },
      },
      {
        id: '110:3:3',
        position: 3,
        arabic: 'رَبِّكَ',
        transliteration: 'Rabbika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        lemma: 'رَبّ',
        meaning: { en: 'your Lord', ur: 'اپنے رب کی', hi: 'अपने रब की' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun', possessive: '2nd-sing' },
        grammarExplanations: {
          en: 'Possessive - "YOUR Lord". Personal relationship emphasized even in moment of triumph.',
          ur: 'اضافت - "اپنے رب"۔ فتح کے لمحے میں بھی ذاتی تعلق پر زور۔',
        },
      },
      {
        id: '110:3:4',
        position: 4,
        arabic: 'وَاسْتَغْفِرْهُ',
        transliteration: 'Wa-staghfirhu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'غ ف ر',
        lemma: 'اِسْتَغْفَرَ',
        meaning: { en: 'and seek His forgiveness', ur: 'اور اس سے مغفرت مانگو', hi: 'और उससे मग़फ़िरत माँगो' },
        grammarRole: 'verb',
        features: { aspect: 'imperative', person: '2nd', gender: 'masculine', number: 'singular', form: 'X' },
        grammarExplanations: {
          en: 'Form X imperative - actively SEEK forgiveness. Even the Prophet ﷺ commanded to seek forgiveness!',
          ur: 'باب استفعال امر - فعال طور پر مغفرت مانگو۔ نبی ﷺ کو بھی مغفرت مانگنے کا حکم!',
        },
        advanced: {
          rootFamily: {
            root: 'غ ف ر',
            meaning: { en: 'to forgive, cover', ur: 'معاف کرنا، ڈھانپنا' },
            words: [
              { word: 'غَفَرَ', meaning: { en: 'he forgave', ur: 'اس نے معاف کیا' } },
              { word: 'مَغْفِرَة', meaning: { en: 'forgiveness', ur: 'مغفرت' } },
              { word: 'غَفُور', meaning: { en: 'Most Forgiving', ur: 'غفور' } },
              { word: 'غَفَّار', meaning: { en: 'Oft-Forgiving', ur: 'غفار' } },
              { word: 'اِسْتِغْفَار', meaning: { en: 'seeking forgiveness', ur: 'استغفار' } },
            ],
          },
          balagha: {
            title: { en: 'Why Seek Forgiveness After Victory?', ur: 'فتح کے بعد مغفرت کیوں؟' },
            explanation: {
              en: 'Even at success, recognize shortcomings. Prophet ﷺ never forgot his humanity despite divine support.',
              ur: 'کامیابی میں بھی کمیوں کا احساس۔ نبی ﷺ نے الہی مدد کے باوجود اپنی انسانیت نہیں بھولی۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Sign of Approaching Death', ur: 'قریبی وفات کی علامت' },
            explanation: {
              en: 'Scholars say استغفره signals preparation for meeting Allah. This surah announced the Prophet\'s mission complete.',
              ur: 'علماء کہتے ہیں استغفره اللہ سے ملاقات کی تیاری ہے۔ اس سورۃ نے نبی کے مشن کی تکمیل کا اعلان کیا۔',
            },
          },
        },
      },
      {
        id: '110:3:5',
        position: 5,
        arabic: 'إِنَّهُ',
        transliteration: 'Innahu',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        lemma: 'إِنَّ',
        meaning: { en: 'Indeed He', ur: 'بیشک وہ', hi: 'बेशक वह' },
        grammarRole: 'emphasis',
        features: { type: 'emphatic-particle', pronoun: '3rd-masc-sing' },
        grammarExplanations: {
          en: 'Emphatic particle + pronoun. Introducing the reason to seek forgiveness with confidence.',
          ur: 'حرف تاکید + ضمیر۔ اعتماد کے ساتھ مغفرت مانگنے کی وجہ بتاتا ہے۔',
        },
      },
      {
        id: '110:3:6',
        position: 6,
        arabic: 'كَانَ',
        transliteration: 'Kana',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        lemma: 'كَانَ',
        meaning: { en: 'is/was', ur: 'ہے', hi: 'है' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', type: 'auxiliary' },
        grammarExplanations: {
          en: 'كَانَ here means "is always" - Allah\'s attribute of accepting repentance is eternal.',
          ur: 'کَانَ یہاں "ہمیشہ ہے" کے معنی میں - اللہ کی توبہ قبول کرنے کی صفت ابدی ہے۔',
        },
      },
      {
        id: '110:3:7',
        position: 7,
        arabic: 'تَوَّابًا',
        transliteration: 'Tawwaba',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ت و ب',
        lemma: 'تَوَّاب',
        meaning: { en: 'Acceptor of repentance', ur: 'بہت توبہ قبول کرنے والا', hi: 'बहुत तौबा क़बूल करने वाला' },
        grammarRole: 'khabar-kana',
        case: 'mansoob',
        features: { state: 'accusative', type: 'adjective', intensiveForm: true },
        grammarExplanations: {
          en: 'Intensive form (فَعَّال) - not just "accepts" but REPEATEDLY, ABUNDANTLY accepts repentance.',
          ur: 'صیغہ مبالغہ (فَعَّال) - صرف "قبول کرتا" نہیں بلکہ بار بار، کثرت سے توبہ قبول کرتا ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ت و ب',
            meaning: { en: 'to repent, return', ur: 'توبہ کرنا، لوٹنا' },
            words: [
              { word: 'تَابَ', meaning: { en: 'he repented', ur: 'اس نے توبہ کی' } },
              { word: 'تَوْبَة', meaning: { en: 'repentance', ur: 'توبہ' } },
              { word: 'تَوَّاب', meaning: { en: 'oft-returning (to forgiveness)', ur: 'بار بار معاف کرنے والا' } },
              { word: 'تَائِب', meaning: { en: 'repentant', ur: 'توبہ کرنے والا' } },
            ],
          },
          balagha: {
            title: { en: 'Encouragement to Repent', ur: 'توبہ کی ترغیب' },
            explanation: {
              en: 'تَوَّاب (intensive) = no matter how much you sin, He accepts repentance AGAIN and AGAIN. Never give up.',
              ur: 'تَوَّاب (مبالغہ) = کتنے بھی گناہ کرو، وہ بار بار توبہ قبول کرتا ہے۔ کبھی ہمت نہ ہارو۔',
            },
          },
          memoryHook: {
            en: 'تَوَّاب (Tawwab) = from توبہ (turning back). Allah is the one who KEEPS TURNING back to you with forgiveness!',
            ur: 'تَوَّاب = توبہ (لوٹنا) سے۔ اللہ وہ ہے جو بار بار معافی کے ساتھ تمہاری طرف لوٹتا رہتا ہے!',
          },
        },
      },
    ],
    dependency: {
      root: 'سَبِّحْ',
      structure: [
        { word: 'فَ', role: 'result-conjunction', consequence_of: 'إِذَا (ayah 1)' },
        { word: 'سَبِّحْ', role: 'command-1', manner: 'بِحَمْدِ رَبِّكَ' },
        { word: 'بِحَمْدِ رَبِّكَ', role: 'prep-phrase', dependsOn: 'سَبِّحْ' },
        { word: 'وَاسْتَغْفِرْهُ', role: 'command-2', coordinated: 'سَبِّحْ' },
        { word: 'إِنَّهُ كَانَ تَوَّابًا', role: 'reason-clause', justifies: 'اسْتَغْفِرْهُ' },
      ],
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 1, to: 4, label: 'عطف' }
      ],
    },
  },
};

export default SURAH_110_TREEBANK;
