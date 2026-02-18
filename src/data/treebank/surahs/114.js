/**
 * Surah An-Nas (114) - Complete Treebank Data
 * Mankind / The People - 6 Ayahs, 20 Words
 *
 * Theme: Seeking refuge from internal evils (waswas/whispers)
 * Revelation: Makki (or Madani according to some)
 * Part of: Al-Mu'awwidhatayn (The Two Protections)
 */

const SURAH_114_TREEBANK = {
  1: { // Ayah 1: قُلْ أَعُوذُ بِرَبِّ النَّاسِ
    text: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    translation: {
      en: 'Say, "I seek refuge in the Lord of mankind',
      ur: 'کہو میں پناہ مانگتا ہوں انسانوں کے رب کی',
      hi: 'कहो मैं पनाह माँगता हूँ इंसानों के रब की',
      bn: 'বলুন, আমি আশ্রয় প্রার্থনা করি মানবজাতির রবের',
      tr: 'De ki: Sığınırım insanların Rabbine',
      id: 'Katakanlah, "Aku berlindung kepada Tuhan manusia',
    },
    words: [
      {
        id: '114:1:1',
        position: 1,
        arabic: 'قُلْ',
        transliteration: 'Qul',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        lemma: 'قَالَ',
        pattern: 'فُعْ',
        meaning: { en: 'Say', ur: 'کہو', hi: 'कहो' },
        grammarRole: 'verb',
        case: 'majzoom',
        features: { aspect: 'imperative', person: '2nd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'Imperative verb - divine command to proclaim seeking refuge from the Whisperer.',
          ur: 'فعل امر - وسوسے والے سے پناہ مانگنے کا الہی حکم۔',
        },
        advanced: {
          rootFamily: {
            root: 'ق و ل',
            meaning: { en: 'to say, speak, tell', ur: 'کہنا، بولنا' },
            words: [
              { arabic: 'قَالَ', meaning: { en: 'he said', ur: 'اس نے کہا' }, count: 529 },
              { arabic: 'قُلْ', meaning: { en: 'say!', ur: 'کہو!' }, count: 332 },
              { arabic: 'قَوْل', meaning: { en: 'saying, word', ur: 'قول، بات' }, count: 51 },
              { arabic: 'يَقُولُ', meaning: { en: 'he says', ur: 'وہ کہتا ہے' }, count: 228 },
            ],
          },
          frequency: { word: 'قُلْ', total: 332, note: { en: 'Most frequent command in Quran - Allah orders His Messenger to proclaim', ur: 'قرآن میں سب سے زیادہ آنے والا حکم - اللہ اپنے رسول کو اعلان کا حکم دیتا ہے' } },
          irabReason: {
            case: 'مجزوم',
            reason: {
              en: '"قُلْ" is in jussive mood (مجزوم) because it is an imperative verb. The sukun on ل shows it is majzoom.',
              ur: '"قُلْ" مجزوم ہے کیونکہ یہ فعل امر ہے۔ ل پر سکون اس کی علامت ہے۔',
            },
            rule: { en: 'Imperative verb = Jussive (Majzoom)', ur: 'فعل امر = مجزوم' },
          },
          tajweedTips: {
            rules: [{ rule: { en: 'Qalqalah', ur: 'قلقلہ' }, description: { en: 'Bounce on ل with sukun', ur: 'ل پر سکون میں ہلکی گونج' } }],
          },
          memoryHook: {
            tips: [
              { en: '"Qul" = "Call out!" - Allah commands His messenger to announce', ur: '"قُلْ" = "پکارو!" - اللہ اپنے رسول کو اعلان کا حکم دیتا ہے' },
            ],
            mnemonic: { en: 'Q-U-L = Question Unbelievers with Light', ur: 'قُلْ = قرآن کی لائٹ سے' },
          },
          scholarTranslations: [
            { scholar: 'Pickthall', translation: 'Say' },
            { scholar: 'Yusuf Ali', translation: 'Say' },
            { scholar: 'Sahih Intl', translation: 'Say' },
            { scholar: 'جالندھری', translation: 'کہو' },
            { scholar: 'مودودی', translation: 'کہو' },
          ],
          similarPatterns: [
            { surah: 112, ayah: 1, text: 'قُلْ هُوَ اللَّهُ أَحَدٌ', note: { en: 'Al-Ikhlas also starts with قُلْ', ur: 'سورۃ الاخلاص بھی قُلْ سے شروع' } },
            { surah: 113, ayah: 1, text: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', note: { en: 'Al-Falaq - sister surah', ur: 'الفلق - بہن سورہ' } },
          ],
        },
      },
      {
        id: '114:1:2',
        position: 2,
        arabic: 'أَعُوذُ',
        transliteration: "A'udhu",
        pos: ['V'],
        posLabel: 'V',
        root: 'ع و ذ',
        lemma: 'عَاذَ',
        pattern: 'أَفْعُلُ',
        meaning: { en: 'I seek refuge', ur: 'میں پناہ مانگتا ہوں', hi: 'मैं पनाह माँगता हूँ' },
        grammarRole: 'verb',
        case: null,
        features: { aspect: 'imperfect', person: '1st', number: 'singular', mood: 'indicative' },
        grammarExplanations: {
          en: 'First person imperfect verb - personal, continuous seeking of protection.',
          ur: 'فعل مضارع متکلم وحدہ - ذاتی، مسلسل حفاظت کی طلب۔',
        },
        advanced: {
          rootFamily: {
            root: 'ع و ذ',
            meaning: { en: 'to seek refuge, protection', ur: 'پناہ مانگنا، حفاظت' },
            words: [
              { arabic: 'عَاذَ', meaning: { en: 'he sought refuge', ur: 'اس نے پناہ مانگی' }, count: 3 },
              { arabic: 'أَعُوذُ', meaning: { en: 'I seek refuge', ur: 'میں پناہ مانگتا ہوں' }, count: 6 },
              { arabic: 'مَعَاذ', meaning: { en: 'refuge, protection', ur: 'پناہ گاہ' }, count: 2 },
              { arabic: 'تَعَوُّذ', meaning: { en: 'seeking refuge (act)', ur: 'پناہ مانگنے کا عمل' }, count: 1 },
            ],
          },
          frequency: { word: 'أَعُوذُ', total: 6, note: { en: 'Appears in both Mu\'awwidhatayn - 3 times in Al-Falaq, 3 in An-Nas', ur: 'دونوں معوذتین میں آیا - الفلق میں 3 بار، الناس میں 3 بار' } },
          irabReason: {
            case: 'مرفوع',
            reason: {
              en: '"أَعُوذُ" is in indicative mood (مرفوع) because it is a normal imperfect verb not affected by any particle. The damma on ذ shows it is marfoo.',
              ur: '"أَعُوذُ" مرفوع ہے کیونکہ یہ عام فعل مضارع ہے جس پر کوئی حرف عامل نہیں۔ ذ پر پیش اس کی علامت ہے۔',
            },
            rule: { en: 'Default imperfect = Indicative (Marfoo)', ur: 'عام فعل مضارع = مرفوع' },
          },
          balagha: {
            title: { en: 'Parallel to Al-Falaq', ur: 'الفلق کے متوازی' },
            explanation: {
              en: 'Same "أَعُوذُ" as Al-Falaq - but here from INTERNAL evil (waswas), there from EXTERNAL.',
              ur: 'الفلق جیسا "أَعُوذُ" - لیکن یہاں اندرونی برائی (وسوسہ) سے، وہاں بیرونی سے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'First Person - Personal Supplication', ur: 'متکلم - ذاتی دعا' },
            points: [
              { en: 'Using "I seek refuge" (not "we") makes it personal and intimate - each person makes this plea individually.', ur: '"میں پناہ مانگتا ہوں" (نہ کہ "ہم") اسے ذاتی اور قریبی بناتا ہے - ہر شخص انفرادی طور پر یہ التجا کرتا ہے۔' },
            ],
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
          memoryHook: {
            tips: [
              { en: '"A\'udhu" sounds like "I owe you" - I owe my safety to Allah!', ur: '"أَعُوذُ" - میں اپنی حفاظت اللہ کا مقروض ہوں!' },
            ],
          },
          scholarTranslations: [
            { scholar: 'Pickthall', translation: 'I seek refuge' },
            { scholar: 'Yusuf Ali', translation: 'I seek refuge' },
            { scholar: 'Sahih Intl', translation: 'I seek refuge' },
            { scholar: 'جالندھری', translation: 'پناہ مانگتا ہوں' },
          ],
          similarPatterns: [
            { surah: 113, ayah: 1, text: 'أَعُوذُ بِرَبِّ الْفَلَقِ', note: { en: 'Same structure in Al-Falaq', ur: 'الفلق میں وہی ڈھانچہ' } },
            { surah: 7, ayah: 200, text: 'فَاسْتَعِذْ بِاللَّهِ', note: { en: 'Command to seek refuge', ur: 'پناہ مانگنے کا حکم' } },
          ],
        },
      },
      {
        id: '114:1:3',
        position: 3,
        arabic: 'بِرَبِّ',
        transliteration: 'bi-Rabbi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: 'ر ب ب',
        lemma: 'رَبّ',
        pattern: null,
        meaning: { en: 'in the Lord of', ur: 'رب کی (پناہ)', hi: 'रब की (पनाह)' },
        grammarRole: 'jarr-majrur',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun', definiteness: 'construct' },
        grammarExplanations: {
          en: 'Preposition + majroor noun - "in the Lord" indicates the source of refuge.',
          ur: 'حرف جر + اسم مجرور - "رب میں" پناہ کا ذریعہ بتاتا ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ر ب ب',
            meaning: { en: 'lord, master, nurturer', ur: 'رب، مالک، پالنہار' },
            words: [
              { arabic: 'رَبّ', meaning: { en: 'Lord, Master', ur: 'رب، مالک' }, count: 980 },
              { arabic: 'رَبَّانِي', meaning: { en: 'divine, godly', ur: 'ربانی' }, count: 3 },
              { arabic: 'تَرْبِيَة', meaning: { en: 'upbringing, nurturing', ur: 'تربیت' }, count: 2 },
              { arabic: 'رُبُوبِيَّة', meaning: { en: 'lordship', ur: 'ربوبیت' }, count: 0 },
            ],
          },
          frequency: { word: 'رَبِّ', total: 980, note: { en: 'Most common name of Allah in Quran after "Allah"', ur: '"اللہ" کے بعد قرآن میں سب سے زیادہ آنے والا نام' } },
          irabReason: {
            case: 'مجرور',
            reason: {
              en: '"رَبِّ" is in genitive case (مجرور) because it follows the preposition "بِ". The kasra under ب shows the genitive.',
              ur: '"رَبِّ" مجرور ہے کیونکہ یہ حرف جار "بِ" کے بعد آیا ہے۔ ب کے نیچے زیر مجرور کی علامت ہے۔',
            },
            rule: { en: 'After preposition = Genitive (Majroor)', ur: 'حرف جار کے بعد = مجرور' },
          },
          balagha: {
            title: { en: 'رَبّ - The Comprehensive Name', ur: 'رَبّ - جامع نام' },
            explanation: {
              en: 'رَبّ implies nurturing, sustaining, and gradual development. Allah is not just Creator but also continuously caring for mankind.',
              ur: 'رَبّ پرورش، پالن اور بتدریج ترقی کو ظاہر کرتا ہے۔ اللہ صرف خالق نہیں بلکہ مسلسل انسانوں کی دیکھ بھال کرنے والا ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Three Divine Attributes', ur: 'تین الہی صفات' },
            points: [
              { en: 'Rabb (Lord), Malik (King), Ilah (God) - three comprehensive attributes covering nurturing, authority, and worship.', ur: 'رب (پالنہار)، ملک (بادشاہ)، الہ (معبود) - تین جامع صفات: پرورش، اختیار، عبادت۔' },
              { en: 'These 3 attributes are specifically for an-Nas (humans) - showing Allah\'s special relationship with mankind.', ur: 'یہ 3 صفات خاص طور پر الناس (انسانوں) کے لیے ہیں - اللہ کا انسانوں سے خاص تعلق دکھاتی ہیں۔' },
            ],
          },
          tajweedTips: {
            rules: [
              { rule: { en: 'Shaddah on ب', ur: 'ب پر شدّہ' }, description: { en: 'The ب in رَبِّ is doubled - pronounce with emphasis', ur: 'رَبِّ میں ب دوگنا ہے - زور سے پڑھیں' } },
            ],
          },
          memoryHook: {
            tips: [
              { en: 'رَبّ = "Rabbi" (teacher in Hebrew) - both mean one who nurtures/teaches', ur: 'رَبّ = "ربی" (عبرانی میں استاد) - دونوں کا مطلب پالنے والا/سکھانے والا' },
            ],
          },
          scholarTranslations: [
            { scholar: 'Pickthall', translation: 'in the Lord of' },
            { scholar: 'Yusuf Ali', translation: 'with the Lord of' },
            { scholar: 'Sahih Intl', translation: 'in the Lord of' },
            { scholar: 'جالندھری', translation: 'رب کی' },
          ],
          similarPatterns: [
            { surah: 113, ayah: 1, text: 'بِرَبِّ الْفَلَقِ', note: { en: 'Same pattern in Al-Falaq', ur: 'الفلق میں وہی نمونہ' } },
            { surah: 1, ayah: 2, text: 'رَبِّ الْعَالَمِينَ', note: { en: 'Lord of the Worlds in Al-Fatiha', ur: 'الفاتحہ میں تمام جہانوں کا رب' } },
          ],
        },
      },
      {
        id: '114:1:4',
        position: 4,
        arabic: 'النَّاسِ',
        transliteration: 'an-Nas',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        lemma: 'نَاس',
        pattern: null,
        meaning: { en: 'mankind', ur: 'انسانوں کے', hi: 'इंसानों के' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun', number: 'collective' },
        grammarExplanations: {
          en: 'Mudaf ilayh (possessive) - "of mankind". Allah is specifically the Lord of humans.',
          ur: 'مضاف الیہ - "انسانوں کے"۔ اللہ خاص طور پر انسانوں کا رب ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ن و س',
            meaning: { en: 'mankind, people, humans', ur: 'انسان، لوگ' },
            words: [
              { arabic: 'نَاس', meaning: { en: 'mankind, people', ur: 'انسان، لوگ' }, count: 241 },
              { arabic: 'إِنْس', meaning: { en: 'humans (vs jinn)', ur: 'انسان (بمقابلہ جن)' }, count: 18 },
              { arabic: 'إِنْسَان', meaning: { en: 'human being', ur: 'انسان' }, count: 65 },
              { arabic: 'أُنَاس', meaning: { en: 'people, folk', ur: 'لوگ' }, count: 5 },
            ],
          },
          frequency: { word: 'النَّاسِ', total: 241, note: { en: 'Appears 6 times in this surah alone - emphasizing human focus', ur: 'صرف اس سورہ میں 6 بار آیا - انسانی توجہ پر زور' } },
          irabReason: {
            case: 'مجرور',
            reason: {
              en: '"النَّاسِ" is genitive (مجرور) because it is مضاف إليه (possessor) of رَبِّ. The kasra shows genitive case.',
              ur: '"النَّاسِ" مجرور ہے کیونکہ یہ رَبِّ کا مضاف الیہ ہے۔ زیر مجرور کی علامت ہے۔',
            },
            rule: { en: 'Mudaf Ilayh = Always Genitive', ur: 'مضاف الیہ = ہمیشہ مجرور' },
          },
          balagha: {
            title: { en: 'Emphasis on Human Audience', ur: 'انسانی سامعین پر زور' },
            explanation: {
              en: '"An-Nas" repeated 6 times in 6 ayahs - because the evil (waswas) targets the human heart specifically.',
              ur: '"النَّاسِ" 6 آیات میں 6 بار - کیونکہ برائی (وسوسہ) خاص طور پر انسانی دل کو نشانہ بناتی ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Why "an-Nas" not "al-Ins"?', ur: '"الناس" کیوں، "الانس" کیوں نہیں؟' },
            points: [
              { en: '"Nas" emphasizes sociability and interaction - humans whisper to each other. "Ins" emphasizes being visible (vs jinn).', ur: '"ناس" میل جول اور تعامل پر زور دیتا ہے - انسان ایک دوسرے کو سرگوشی کرتے ہیں۔ "انس" نظر آنے پر (بمقابلہ جن)۔' },
            ],
          },
          tajweedTips: {
            rules: [
              { rule: { en: 'Lam Shamsiyyah', ur: 'لام شمسی' }, description: { en: 'The ل in ال merges into ن - say "an-Nas" not "al-Nas"', ur: 'ال میں ل، ن میں مدغم - "انّاس" کہیں نہ کہ "الناس"' } },
              { rule: { en: 'Shaddah on ن', ur: 'ن پر شدّہ' }, description: { en: 'Double the ن sound due to merging', ur: 'ادغام کی وجہ سے ن کی آواز دوگنی کریں' } },
            ],
          },
          memoryHook: {
            tips: [
              { en: '"An-Nas" (الناس) appears 6 times in 6 verses - the whole surah is about protecting HUMANS', ur: '"الناس" 6 آیات میں 6 بار - پوری سورہ انسانوں کی حفاظت کے بارے میں ہے' },
            ],
            mnemonic: { en: 'N-A-S = Need Allah\'s Shield', ur: 'ناس = نجات، اللہ، سلامتی' },
          },
          scholarTranslations: [
            { scholar: 'Pickthall', translation: 'mankind' },
            { scholar: 'Yusuf Ali', translation: 'Mankind' },
            { scholar: 'Sahih Intl', translation: 'mankind' },
            { scholar: 'جالندھری', translation: 'انسانوں' },
          ],
          similarPatterns: [
            { surah: 2, ayah: 21, text: 'يَا أَيُّهَا النَّاسُ', note: { en: 'O mankind! - Address to all humans', ur: 'اے لوگو! - تمام انسانوں کو خطاب' } },
            { surah: 4, ayah: 1, text: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ', note: { en: 'O mankind, fear your Lord', ur: 'اے لوگو! اپنے رب سے ڈرو' } },
          ],
        },
      },
    ],
    dependency: {
      root: 'أَعُوذُ',
      structure: [
        { word: 'قُلْ', role: 'command', governs: 'أَعُوذُ' },
        { word: 'أَعُوذُ', role: 'main-verb', governs: 'بِرَبِّ' },
        { word: 'بِرَبِّ', role: 'prep-phrase', dependsOn: 'أَعُوذُ' },
        { word: 'النَّاسِ', role: 'mudaf-ilayh', dependsOn: 'رَبِّ' },
      ],
    },
  },

  2: { // Ayah 2: مَلِكِ النَّاسِ
    text: 'مَلِكِ النَّاسِ',
    translation: {
      en: 'The King of mankind',
      ur: 'جو انسانوں کا بادشاہ ہے',
      hi: 'जो इंसानों का बादशाह है',
      bn: 'মানবজাতির অধিপতি',
      tr: 'İnsanların Melikine (hükümdarına)',
      id: 'Raja manusia',
    },
    words: [
      {
        id: '114:2:1',
        position: 1,
        arabic: 'مَلِكِ',
        transliteration: 'Maliki',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل ك',
        lemma: 'مَلِك',
        pattern: 'فَعِل',
        meaning: { en: 'The King of', ur: 'بادشاہ', hi: 'बादशाह' },
        grammarRole: 'badal',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun', definiteness: 'construct' },
        grammarExplanations: {
          en: 'Badal (apposition) or adjective to رَبِّ - "King" is the second of three divine attributes.',
          ur: 'بدل یا صفت برائے رَبِّ - "بادشاہ" تین الہی صفات میں سے دوسری۔',
        },
        advanced: {
          rootFamily: {
            root: 'م ل ك',
            meaning: { en: 'to own, possess, rule', ur: 'مالک ہونا، حکومت کرنا' },
            words: [
              { arabic: 'مَلِك', meaning: { en: 'king, sovereign', ur: 'بادشاہ' }, count: 5 },
              { arabic: 'مَالِك', meaning: { en: 'owner, master', ur: 'مالک' }, count: 2 },
              { arabic: 'مُلْك', meaning: { en: 'kingdom, dominion', ur: 'بادشاہی' }, count: 40 },
              { arabic: 'مَمْلَكَة', meaning: { en: 'kingdom, realm', ur: 'سلطنت' }, count: 0 },
              { arabic: 'مَلَكُوت', meaning: { en: 'sovereignty, dominion', ur: 'ملکوت' }, count: 4 },
            ],
          },
          frequency: { word: 'مَلِك', total: 5, note: { en: 'Allah is called Malik (King) 5 times in Quran', ur: 'اللہ کو قرآن میں 5 بار ملک (بادشاہ) کہا گیا ہے' } },
          irabReason: {
            case: 'مجرور',
            reason: {
              en: '"مَلِكِ" is genitive (مجرور) because it is بدل (substitute/apposition) for رَبِّ which is also genitive.',
              ur: '"مَلِكِ" مجرور ہے کیونکہ یہ رَبِّ کا بدل ہے جو خود مجرور ہے۔',
            },
            rule: { en: 'Badal follows Mubdal minhu in case', ur: 'بدل مبدل منہ کے اعراب کے تابع' },
          },
          balagha: {
            title: { en: 'Authority Attribute', ur: 'صفت اختیار' },
            explanation: {
              en: 'مَلِك emphasizes sovereign authority - the power to protect and command obedience.',
              ur: 'مَلِك مطلق اختیار پر زور - حفاظت کرنے اور اطاعت کا حکم دینے کی طاقت۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Malik vs Maalik', ur: 'ملک بمقابلہ مالک' },
            points: [
              { en: 'مَلِك (King) focuses on ruling power; مَالِك (Owner) on possession. Here sovereignty over all mankind is emphasized.', ur: 'مَلِك (بادشاہ) حکمرانی پر؛ مَالِك (مالک) ملکیت پر۔ یہاں تمام انسانوں پر حکمرانی پر زور۔' },
              { en: 'In Al-Fatiha we say "Malik" of Day of Judgement - here "Malik" of mankind shows His kingship over us NOW.', ur: 'الفاتحہ میں ہم کہتے ہیں یوم الدین کا "مالک" - یہاں انسانوں کا "ملک" ہم پر ابھی اس کی بادشاہی دکھاتا ہے۔' },
            ],
          },
          tajweedTips: {
            rules: [{ rule: { en: 'Kasra prolongation', ur: 'زیر کا مد' }, description: { en: 'The kasra under ك connects to النَّاسِ smoothly', ur: 'ک کے نیچے زیر النَّاسِ سے ہموار جڑتی ہے' } }],
          },
          memoryHook: {
            tips: [
              { en: 'Malik = King. Allah is the King of all humans - He rules over our hearts.', ur: 'ملک = بادشاہ۔ اللہ تمام انسانوں کا بادشاہ ہے - وہ ہمارے دلوں پر حکمرانی کرتا ہے۔' },
            ],
          },
          scholarTranslations: [
            { scholar: 'Pickthall', translation: 'The King of' },
            { scholar: 'Yusuf Ali', translation: 'The King of' },
            { scholar: 'Sahih Intl', translation: 'The Sovereign of' },
            { scholar: 'جالندھری', translation: 'بادشاہ' },
          ],
          similarPatterns: [
            { surah: 1, ayah: 4, text: 'مَالِكِ يَوْمِ الدِّينِ', note: { en: 'Master of Day of Judgement in Al-Fatiha', ur: 'الفاتحہ میں یوم الدین کا مالک' } },
            { surah: 59, ayah: 23, text: 'الْمَلِكُ الْقُدُّوسُ', note: { en: 'The King, the Pure', ur: 'بادشاہ، پاک' } },
          ],
        },
      },
      {
        id: '114:2:2',
        position: 2,
        arabic: 'النَّاسِ',
        transliteration: 'an-Nas',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        lemma: 'نَاس',
        pattern: null,
        meaning: { en: 'of mankind', ur: 'انسانوں کے', hi: 'इंसानों के' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun', number: 'collective' },
        grammarExplanations: {
          en: 'Second occurrence - "of mankind". Repetition emphasizes the human focus of this surah.',
          ur: 'دوسری تکرار - "انسانوں کے"۔ تکرار اس سورہ کی انسانی توجہ پر زور دیتی ہے۔',
        },
        advanced: {
          frequency: { word: 'النَّاسِ', total: 241, note: { en: '2nd of 6 occurrences in this surah', ur: 'اس سورہ میں 6 میں سے دوسری تکرار' } },
          irabReason: {
            case: 'مجرور',
            reason: {
              en: '"النَّاسِ" is genitive (مجرور) as مضاف إليه of مَلِكِ.',
              ur: '"النَّاسِ" مجرور ہے کیونکہ یہ مَلِكِ کا مضاف الیہ ہے۔',
            },
            rule: { en: 'Mudaf Ilayh = Always Genitive', ur: 'مضاف الیہ = ہمیشہ مجرور' },
          },
          memoryHook: {
            tips: [
              { en: '"An-Nas" appears in EVERY ayah of this surah - the focus is entirely on protecting humans from human threats.', ur: '"النَّاسِ" اس سورہ کی ہر آیت میں ہے - توجہ مکمل طور پر انسانوں کو انسانی خطرات سے بچانے پر۔' },
            ],
          },
        },
      },
    ],
    dependency: {
      root: 'مَلِكِ',
      structure: [
        { word: 'مَلِكِ', role: 'badal/attribute', dependsOn: 'رَبِّ (1:3)' },
        { word: 'النَّاسِ', role: 'mudaf-ilayh', dependsOn: 'مَلِكِ' },
      ],
    },
  },

  3: { // Ayah 3: إِلَٰهِ النَّاسِ
    text: 'إِلَٰهِ النَّاسِ',
    translation: {
      en: 'The God of mankind',
      ur: 'جو انسانوں کا معبود ہے',
      hi: 'जो इंसानों का माबूद है',
      bn: 'মানবজাতির ইলাহ (উপাস্য)',
      tr: 'İnsanların İlahına (mabuduna)',
      id: 'Sembahan manusia',
    },
    words: [
      {
        id: '114:3:1',
        position: 1,
        arabic: 'إِلَٰهِ',
        transliteration: 'Ilahi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        lemma: 'إِلٰه',
        meaning: { en: 'The God of', ur: 'معبود', hi: 'माबूद' },
        grammarRole: 'badal',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun' },
        grammarExplanations: {
          en: 'Third badal (apposition) - "God" completes the trilogy: Rabb (nurturer), Malik (ruler), Ilah (worshipped).',
          ur: 'تیسرا بدل - "معبود" تین صفات مکمل کرتا ہے: رب (پالنہار)، ملک (حکمران)، الہ (معبود)۔',
        },
        advanced: {
          rootFamily: {
            root: 'أ ل ه',
            meaning: { en: 'god, deity, to worship', ur: 'معبود، عبادت کرنا' },
            words: [
              { arabic: 'إِلٰه', meaning: { en: 'god, deity', ur: 'معبود' }, count: 147 },
              { arabic: 'اللّٰه', meaning: { en: 'Allah, The God', ur: 'اللہ' }, count: 2699 },
              { arabic: 'أُلُوهِيَّة', meaning: { en: 'divinity', ur: 'الوہیت' }, count: 0 },
              { arabic: 'تَأَلُّه', meaning: { en: 'worship, deification', ur: 'عبادت کرنا' }, count: 0 },
            ],
          },
          balagha: {
            title: { en: 'Worship Attribute', ur: 'صفت عبادت' },
            explanation: {
              en: 'إِلٰه establishes the right to be worshipped - only He deserves our seeking of refuge.',
              ur: 'إِلٰه عبادت کا حق قائم کرتا ہے - صرف وہی ہماری پناہ کا مستحق۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'The Divine Trilogy', ur: 'الہی ثلاثی' },
            explanation: {
              en: 'Rabb (care), Malik (authority), Ilah (worship) - comprehensive relationship: He nurtures us, rules us, and deserves worship.',
              ur: 'رب (دیکھ بھال)، ملک (اختیار)، الہ (عبادت) - جامع تعلق: وہ ہماری پرورش کرتا، حکم چلاتا، عبادت کا مستحق۔',
            },
          },
        },
      },
      {
        id: '114:3:2',
        position: 2,
        arabic: 'النَّاسِ',
        transliteration: 'an-Nas',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        lemma: 'نَاس',
        meaning: { en: 'of mankind', ur: 'انسانوں کے', hi: 'इंसानों के' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Third occurrence - establishes Allah as the God specifically of humanity.',
          ur: 'تیسری تکرار - اللہ کو خاص طور پر انسانوں کا معبود قائم کرتی ہے۔',
        },
      },
    ],
    dependency: {
      root: 'إِلَٰهِ',
      structure: [
        { word: 'إِلَٰهِ', role: 'badal/attribute', dependsOn: 'رَبِّ (1:3)' },
        { word: 'النَّاسِ', role: 'mudaf-ilayh', dependsOn: 'إِلَٰهِ' },
      ],
    },
  },

  4: { // Ayah 4: مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
    text: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
    translation: {
      en: 'From the evil of the retreating whisperer',
      ur: 'وسوسہ ڈالنے والے پیچھے ہٹ جانے والے کے شر سے',
      hi: 'वसवसा डालने वाले पीछे हटने वाले की बुराई से',
      bn: 'কুমন্ত্রণাদানকারী পলায়নপরের অনিষ্ট হতে',
      tr: "Sinsi vesvesecinin şerrinden",
      id: 'Dari kejahatan bisikan yang bersembunyi',
    },
    words: [
      {
        id: '114:4:1',
        position: 1,
        arabic: 'مِن',
        transliteration: 'Min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        lemma: 'مِن',
        meaning: { en: 'From', ur: 'سے', hi: 'से' },
        grammarRole: 'preposition',
        case: null,
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition indicating the source of evil being sought refuge from.',
          ur: 'حرف جر جو بتاتا ہے کہ کس برائی سے پناہ مانگی جا رہی ہے۔',
        },
      },
      {
        id: '114:4:2',
        position: 2,
        arabic: 'شَرِّ',
        transliteration: 'Sharri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ر ر',
        lemma: 'شَرّ',
        meaning: { en: 'the evil of', ur: 'شر', hi: 'बुराई' },
        grammarRole: 'mudaf',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun' },
        grammarExplanations: {
          en: 'Majroor noun in idafa construction - "evil OF the whisperer".',
          ur: 'اسم مجرور اضافت میں - "وسوسے والے کا شر"۔',
        },
        advanced: {
          rootFamily: {
            root: 'ش ر ر',
            meaning: { en: 'evil, harm, wickedness', ur: 'برائی، نقصان، شرارت' },
            words: [
              { arabic: 'شَرّ', meaning: { en: 'evil', ur: 'شر' }, count: 30 },
              { arabic: 'شَرِير', meaning: { en: 'evil person', ur: 'شریر' }, count: 0 },
              { arabic: 'أَشَرّ', meaning: { en: 'most evil', ur: 'سب سے بدتر' }, count: 1 },
            ],
          },
        },
      },
      {
        id: '114:4:3',
        position: 3,
        arabic: 'الْوَسْوَاسِ',
        transliteration: 'al-Waswas',
        pos: ['N'],
        posLabel: 'N',
        root: 'و س و س',
        lemma: 'وَسْوَاس',
        meaning: { en: 'the whisperer', ur: 'وسوسہ ڈالنے والا', hi: 'वसवसा डालने वाला' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'The Whisperer - refers to Shaytan and evil jinn/humans who whisper evil thoughts.',
          ur: 'وسوسہ ڈالنے والا - شیطان اور برے جن/انسان جو برے خیالات پھونکتے ہیں۔',
        },
        advanced: {
          rootFamily: {
            root: 'و س و س',
            meaning: { en: 'to whisper, to tempt', ur: 'وسوسہ ڈالنا، بہکانا' },
            words: [
              { arabic: 'وَسْوَسَ', meaning: { en: 'he whispered', ur: 'اس نے وسوسہ ڈالا' }, count: 2 },
              { arabic: 'وَسْوَاس', meaning: { en: 'whisperer/whisper', ur: 'وسوسہ/وسوسہ ڈالنے والا' }, count: 1 },
              { arabic: 'وَسْوَسَة', meaning: { en: 'whisper, evil thought', ur: 'وسوسہ' }, count: 0 },
              { arabic: 'يُوَسْوِسُ', meaning: { en: 'he whispers', ur: 'وہ وسوسہ ڈالتا ہے' }, count: 2 },
            ],
          },
          balagha: {
            title: { en: 'Onomatopoeia', ur: 'حکایت صوت' },
            explanation: {
              en: 'وَسْوَاس sounds like whisper itself - the repetition of "س" mimics a hissing whisper.',
              ur: 'وَسْوَاس خود سرگوشی جیسی آواز - "س" کی تکرار سرگوشی کی نقل۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'The Most Dangerous Enemy', ur: 'سب سے خطرناک دشمن' },
            explanation: {
              en: 'Unlike Al-Falaq (external evils), this enemy attacks from WITHIN through thoughts - harder to detect and fight.',
              ur: 'الفلق (بیرونی برائیوں) کے برعکس، یہ دشمن اندر سے خیالات سے حملہ کرتا ہے - پہچاننا اور لڑنا مشکل۔',
            },
          },
          tajweedTips: {
            rules: [
              { rule: { en: 'Lam Shamsiyyah', ur: 'لام شمسی' }, description: { en: 'The ل in ال is merged into و', ur: 'ال میں ل، و میں مدغم' } },
              { rule: { en: 'Stretched س sounds', ur: 'س کی کھنچی آوازیں' }, description: { en: 'Multiple س creates whisper effect', ur: 'متعدد س سرگوشی کا اثر پیدا کرتے ہیں' } },
            ],
          },
        },
      },
      {
        id: '114:4:4',
        position: 4,
        arabic: 'الْخَنَّاسِ',
        transliteration: 'al-Khannas',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'خ ن س',
        lemma: 'خَنَّاس',
        meaning: { en: 'the retreating one', ur: 'پیچھے ہٹنے والا', hi: 'पीछे हटने वाला' },
        grammarRole: 'sifah',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'adjective', intensiveForm: true },
        grammarExplanations: {
          en: 'Intensive adjective (فَعَّال pattern) - "the constantly retreating one". Shaytan retreats when Allah is remembered.',
          ur: 'مبالغہ صفت (فَعَّال وزن) - "ہمیشہ پیچھے ہٹنے والا"۔ شیطان اللہ کی یاد پر پیچھے ہٹ جاتا ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'خ ن س',
            meaning: { en: 'to retreat, withdraw, shrink back', ur: 'پیچھے ہٹنا، سکڑنا' },
            words: [
              { arabic: 'خَنَسَ', meaning: { en: 'he retreated', ur: 'وہ پیچھے ہٹا' }, count: 0 },
              { arabic: 'خَنَّاس', meaning: { en: 'constantly retreating', ur: 'بار بار پیچھے ہٹنے والا' }, count: 1 },
              { arabic: 'خُنُوس', meaning: { en: 'withdrawal, retreat', ur: 'پیچھے ہٹنا' }, count: 0 },
            ],
          },
          balagha: {
            title: { en: "Shaytan's Weakness", ur: 'شیطان کی کمزوری' },
            explanation: {
              en: 'الخَنَّاس reveals his weakness - he MUST retreat when we remember Allah. Dhikr is our weapon.',
              ur: 'الخَنَّاس اس کی کمزوری ظاہر کرتا ہے - جب ہم اللہ کو یاد کریں وہ پیچھے ہٹنا ہی ہے۔ ذکر ہمارا ہتھیار۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Retreat-Attack Pattern', ur: 'پیچھے ہٹنے-حملے کا نمونہ' },
            explanation: {
              en: 'Waswas whispers → you remember Allah → Khannas retreats → you forget → Waswas returns. The pattern repeats.',
              ur: 'وسواس سرگوشی کرتا ہے → آپ اللہ یاد کرتے ہیں → خناس پیچھے ہٹتا ہے → آپ بھول جاتے ہیں → وسواس واپس۔',
            },
          },
          memoryHook: {
            en: 'خَنَّاس (Khannas) = retreats when you say Allah\'s name. Remember: Dhikr defeats Shaytan!',
            ur: 'خَنَّاس = اللہ کا نام لینے پر پیچھے ہٹتا ہے۔ یاد رکھیں: ذکر شیطان کو شکست دیتا ہے!',
          },
        },
      },
    ],
    dependency: {
      root: 'شَرِّ',
      structure: [
        { word: 'مِن', role: 'preposition', governs: 'شَرِّ' },
        { word: 'شَرِّ', role: 'mudaf', dependsOn: 'أَعُوذُ (1:2)' },
        { word: 'الْوَسْوَاسِ', role: 'mudaf-ilayh', dependsOn: 'شَرِّ' },
        { word: 'الْخَنَّاسِ', role: 'sifah', dependsOn: 'الْوَسْوَاسِ' },
      ],
    },
  },

  5: { // Ayah 5: الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
    text: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
    translation: {
      en: 'Who whispers in the breasts of mankind',
      ur: 'جو انسانوں کے سینوں میں وسوسہ ڈالتا ہے',
      hi: 'जो इंसानों के सीनों में वसवसा डालता है',
      bn: 'যে মানুষের অন্তরে কুমন্ত্রণা দেয়',
      tr: 'İnsanların göğüslerine (kötü düşünceler) fısıldayan',
      id: 'Yang membisikkan (kejahatan) ke dalam dada manusia',
    },
    words: [
      {
        id: '114:5:1',
        position: 1,
        arabic: 'الَّذِي',
        transliteration: 'Alladhi',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        lemma: 'الَّذِي',
        meaning: { en: 'Who', ur: 'جو', hi: 'जो' },
        grammarRole: 'relative-pronoun',
        case: null,
        features: { type: 'relative-pronoun', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'Relative pronoun connecting the description of the Whisperer to his action.',
          ur: 'اسم موصول جو وسوسے والے کی صفت کو اس کے عمل سے جوڑتا ہے۔',
        },
      },
      {
        id: '114:5:2',
        position: 2,
        arabic: 'يُوَسْوِسُ',
        transliteration: 'Yuwaswisu',
        pos: ['V'],
        posLabel: 'V',
        root: 'و س و س',
        lemma: 'وَسْوَسَ',
        meaning: { en: 'whispers', ur: 'وسوسہ ڈالتا ہے', hi: 'वसवसा डालता है' },
        grammarRole: 'verb',
        case: null,
        features: { aspect: 'imperfect', person: '3rd', gender: 'masculine', number: 'singular', voice: 'active' },
        grammarExplanations: {
          en: 'Imperfect verb - continuous action. Shaytan\'s whispering is ongoing, persistent.',
          ur: 'فعل مضارع - جاری عمل۔ شیطان کا وسوسہ مسلسل، لگاتار ہے۔',
        },
        advanced: {
          verbConjugation: {
            root: 'و س و س',
            form: 'I (quadriliteral)',
            meaning: { en: 'to whisper repeatedly', ur: 'بار بار سرگوشی کرنا' },
            table: {
              past: { he: 'وَسْوَسَ', I: 'وَسْوَسْتُ' },
              present: { he: 'يُوَسْوِسُ', I: 'أُوَسْوِسُ', they: 'يُوَسْوِسُونَ' },
            },
          },
          balagha: {
            title: { en: 'Continuous Threat', ur: 'مسلسل خطرہ' },
            explanation: {
              en: 'يُوَسْوِسُ is present tense - the whispering never stops, it is a constant battle.',
              ur: 'يُوَسْوِسُ حال ہے - سرگوشی کبھی نہیں رکتی، یہ مسلسل جنگ ہے۔',
            },
          },
        },
      },
      {
        id: '114:5:3',
        position: 3,
        arabic: 'فِي',
        transliteration: 'Fi',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        lemma: 'فِي',
        meaning: { en: 'in', ur: 'میں', hi: 'में' },
        grammarRole: 'preposition',
        case: null,
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition indicating location - the whispers happen INSIDE the heart/chest.',
          ur: 'حرف جر مکان بتانے کے لیے - وسوسے دل/سینے کے اندر ہوتے ہیں۔',
        },
      },
      {
        id: '114:5:4',
        position: 4,
        arabic: 'صُدُورِ',
        transliteration: 'Suduri',
        pos: ['N'],
        posLabel: 'N',
        root: 'ص د ر',
        lemma: 'صَدْر',
        meaning: { en: 'breasts/hearts of', ur: 'سینوں میں', hi: 'सीनों में' },
        grammarRole: 'mudaf',
        case: 'majroor',
        features: { state: 'genitive', number: 'plural', type: 'noun' },
        grammarExplanations: {
          en: 'Plural of صَدْر (chest) - metaphor for the heart/soul where thoughts and emotions reside.',
          ur: 'صَدْر کی جمع (سینہ) - دل/روح کا استعارہ جہاں خیالات اور جذبات رہتے ہیں۔',
        },
        advanced: {
          rootFamily: {
            root: 'ص د ر',
            meaning: { en: 'chest, breast, front, to issue from', ur: 'سینہ، آگے، نکلنا' },
            words: [
              { arabic: 'صَدْر', meaning: { en: 'chest, breast', ur: 'سینہ' }, count: 21 },
              { arabic: 'صُدُور', meaning: { en: 'chests (plural)', ur: 'سینے' }, count: 23 },
              { arabic: 'صَدَرَ', meaning: { en: 'to issue, emanate', ur: 'نکلنا' }, count: 5 },
              { arabic: 'مَصْدَر', meaning: { en: 'source, infinitive', ur: 'ذریعہ، مصدر' }, count: 0 },
            ],
          },
          balagha: {
            title: { en: 'Location of the Battle', ur: 'جنگ کا مقام' },
            explanation: {
              en: 'صُدُور (chests/hearts) shows the battlefield is internal - where decisions and intentions form.',
              ur: 'صُدُور (سینے/دل) میدان جنگ اندرونی دکھاتا ہے - جہاں فیصلے اور نیتیں بنتی ہیں۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Heart vs Chest', ur: 'دل بمقابلہ سینہ' },
            explanation: {
              en: 'Arabic uses صَدْر (chest) not قَلْب (heart) - because evil thoughts enter from outside, through the chest to the heart.',
              ur: 'عربی میں صَدْر (سینہ) نہ کہ قَلْب (دل) - کیونکہ برے خیالات باہر سے آتے ہیں، سینے سے دل تک۔',
            },
          },
        },
      },
      {
        id: '114:5:5',
        position: 5,
        arabic: 'النَّاسِ',
        transliteration: 'an-Nas',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        lemma: 'نَاس',
        meaning: { en: 'of mankind', ur: 'انسانوں کے', hi: 'इंसانों के' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Fourth occurrence - emphasis on human vulnerability to whispers.',
          ur: 'چوتھی تکرار - وسوسوں کے لیے انسانی کمزوری پر زور۔',
        },
      },
    ],
    dependency: {
      root: 'يُوَسْوِسُ',
      structure: [
        { word: 'الَّذِي', role: 'relative-pronoun', dependsOn: 'الْوَسْوَاسِ (4:3)' },
        { word: 'يُوَسْوِسُ', role: 'verb', governs: 'فِي صُدُورِ' },
        { word: 'فِي', role: 'preposition', dependsOn: 'يُوَسْوِسُ' },
        { word: 'صُدُورِ', role: 'mudaf', dependsOn: 'فِي' },
        { word: 'النَّاسِ', role: 'mudaf-ilayh', dependsOn: 'صُدُورِ' },
      ],
    },
  },

  6: { // Ayah 6: مِنَ الْجِنَّةِ وَالنَّاسِ
    text: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
    translation: {
      en: 'From among the jinn and mankind',
      ur: 'جنوں میں سے (بھی) اور انسانوں میں سے (بھی)',
      hi: 'जिन्नों में से (भी) और इंसानों में से (भी)',
      bn: 'জিন ও মানুষের মধ্য থেকে',
      tr: 'Gerek cinlerden gerek insanlardan',
      id: 'Dari golongan jin dan manusia',
    },
    words: [
      {
        id: '114:6:1',
        position: 1,
        arabic: 'مِنَ',
        transliteration: 'Mina',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        lemma: 'مِن',
        meaning: { en: 'From', ur: 'میں سے', hi: 'में से' },
        grammarRole: 'preposition',
        case: null,
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition indicating source/origin - the whisperers come FROM both groups.',
          ur: 'حرف جر ذریعہ/اصل بتانے کے لیے - وسوسہ کرنے والے دونوں گروہوں سے آتے ہیں۔',
        },
      },
      {
        id: '114:6:2',
        position: 2,
        arabic: 'الْجِنَّةِ',
        transliteration: 'al-Jinnati',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ن ن',
        lemma: 'جِنَّة',
        meaning: { en: 'the jinn', ur: 'جن', hi: 'जिन्न' },
        grammarRole: 'noun',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun', number: 'collective' },
        grammarExplanations: {
          en: 'Collective noun for jinn - includes Shaytan and evil jinn who whisper.',
          ur: 'جن کا اسم جمع - شیطان اور برے جن جو وسوسہ ڈالتے ہیں۔',
        },
        advanced: {
          rootFamily: {
            root: 'ج ن ن',
            meaning: { en: 'to hide, conceal, cover', ur: 'چھپانا، ڈھانپنا' },
            words: [
              { arabic: 'جِنّ', meaning: { en: 'jinn (unseen beings)', ur: 'جن' }, count: 22 },
              { arabic: 'جِنَّة', meaning: { en: 'jinn-kind', ur: 'جنات' }, count: 7 },
              { arabic: 'جُنُون', meaning: { en: 'madness, possession', ur: 'پاگل پن' }, count: 0 },
              { arabic: 'جَنَّة', meaning: { en: 'garden, paradise', ur: 'جنت' }, count: 66 },
              { arabic: 'جَنِين', meaning: { en: 'fetus (hidden)', ur: 'جنین' }, count: 1 },
            ],
          },
          balagha: {
            title: { en: 'The Hidden Whisperers', ur: 'چھپے ہوئے وسوسہ کار' },
            explanation: {
              en: 'الجِنَّة from root "hidden" - these whispers come from beings we cannot see.',
              ur: 'الجِنَّة "چھپنے" کے مادے سے - یہ وسوسے ایسی مخلوق سے آتے ہیں جو نظر نہیں آتی۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Same Root: Jinn and Jannah', ur: 'ایک ہی مادہ: جن اور جنت' },
            explanation: {
              en: 'ج ن ن means "hidden" - jinn are hidden beings, jannah (paradise) is hidden from us, janin (fetus) is hidden in the womb.',
              ur: 'ج ن ن کا مطلب "چھپا ہوا" - جن چھپی ہوئی مخلوق، جنت ہم سے چھپی، جنین رحم میں چھپا۔',
            },
          },
        },
      },
      {
        id: '114:6:3',
        position: 3,
        arabic: 'وَ',
        transliteration: 'Wa',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        lemma: 'وَ',
        meaning: { en: 'and', ur: 'اور', hi: 'और' },
        grammarRole: 'conjunction',
        case: null,
        features: { type: 'conjunction' },
        grammarExplanations: {
          en: 'Conjunction connecting the two sources of whispering.',
          ur: 'حرف عطف جو وسوسوں کے دو ذرائع کو جوڑتا ہے۔',
        },
      },
      {
        id: '114:6:4',
        position: 4,
        arabic: 'النَّاسِ',
        transliteration: 'an-Nas',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و س',
        lemma: 'نَاس',
        meaning: { en: 'mankind', ur: 'انسان', hi: 'इंसान' },
        grammarRole: 'noun',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Fifth & sixth occurrence - humans can also be "shayateen" (whisperers of evil).',
          ur: 'پانچویں اور چھٹی تکرار - انسان بھی "شیاطین" (برائی کے وسوسہ کار) ہو سکتے ہیں۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Human Devils', ur: 'انسانی شیطان' },
            explanation: {
              en: 'SHOCKING: النَّاسِ here means some HUMANS are also whisperers of evil - bad company, misleading friends, corrupt advisors.',
              ur: 'حیران کن: النَّاسِ یہاں مطلب کچھ انسان بھی برائی کے وسوسہ کار ہیں - بری صحبت، گمراہ دوست، بدعنوان مشیر۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Full Circle', ur: 'مکمل دائرہ' },
            explanation: {
              en: 'Surah begins with النَّاسِ (humans needing protection) and ends with النَّاسِ (humans being threats). We need protection from our own kind!',
              ur: 'سورہ النَّاسِ سے شروع (انسانوں کو حفاظت چاہیے) اور النَّاسِ پر ختم (انسان خطرہ ہیں)۔ ہمیں اپنوں سے بھی حفاظت چاہیے!',
            },
          },
          memoryHook: {
            en: 'النَّاس appears 6 times in 6 ayahs! This surah is all about protecting HUMANS from threats to HUMANS.',
            ur: 'النَّاس 6 آیات میں 6 بار! یہ سورہ انسانوں کو انسانوں کے خطرات سے بچانے کے بارے میں ہے۔',
          },
        },
      },
    ],
    dependency: {
      root: 'الْجِنَّةِ',
      structure: [
        { word: 'مِنَ', role: 'preposition', dependsOn: 'الْوَسْوَاسِ (4:3) OR يُوَسْوِسُ (5:2)' },
        { word: 'الْجِنَّةِ', role: 'noun', dependsOn: 'مِنَ' },
        { word: 'وَ', role: 'conjunction', connects: ['الْجِنَّةِ', 'النَّاسِ'] },
        { word: 'النَّاسِ', role: 'noun', dependsOn: 'مِنَ' },
      ],
    },
  },
};

export default SURAH_114_TREEBANK;
