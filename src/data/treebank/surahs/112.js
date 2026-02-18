/**
 * Surah Al-Ikhlas (112) - Complete Treebank Data
 * The Purity / Sincerity - 4 Ayahs, 15 Words
 *
 * Theme: Pure monotheism (Tawheed) - Allah's absolute oneness
 * Revelation: Makki
 * Virtue: Equal to 1/3 of the Quran
 */

const SURAH_112_TREEBANK = {
  1: { // Ayah 1: قُلْ هُوَ اللَّهُ أَحَدٌ
    text: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
    translation: {
      en: 'Say, "He is Allah, [who is] One,"',
      ur: 'کہو وہ اللہ ایک ہے',
      hi: 'कहो वह अल्लाह एक है',
      bn: 'বলুন, তিনি আল্লাহ, এক',
      tr: 'De ki: O, Allah\'tır, bir tektir',
      id: 'Katakanlah, "Dialah Allah, Yang Maha Esa"',
    },
    words: [
      {
        id: '112:1:1',
        position: 1,
        arabic: 'قُلْ',
        transliteration: 'Qul',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        lemma: 'قَالَ',
        pattern: 'فُعْ',
        meaning: {
          en: 'Say',
          ur: 'کہو',
          hi: 'कहो',
          bn: 'বলুন',
          tr: 'De',
          id: 'Katakanlah',
        },
        grammarRole: 'verb',
        case: null,
        features: {
          aspect: 'imperative',
          person: '2nd',
          gender: 'masculine',
          number: 'singular',
          voice: 'active',
        },
        grammarExplanations: {
          en: 'Imperative verb (فعل أمر) - command form addressing Prophet Muhammad ﷺ and by extension all believers.',
          ur: 'فعل امر - حکم کا صیغہ، نبی ﷺ کو خطاب اور ان کے ذریعے تمام مومنین کو۔',
          hi: 'आदेशात्मक क्रिया - नबी ﷺ को संबोधन और उनके माध्यम से सभी मोमिनों को।',
        },
        advanced: {
          rootFamily: {
            root: 'ق و ل',
            meaning: { en: 'to say, speak, tell', ur: 'کہنا، بولنا، بتانا', hi: 'कहना, बोलना, बताना' },
            words: [
              { word: 'قَالَ', meaning: { en: 'he said', ur: 'اس نے کہا' } },
              { word: 'قَوْل', meaning: { en: 'speech, saying', ur: 'بات، قول' } },
              { word: 'قُلْ', meaning: { en: 'say!', ur: 'کہو' } },
              { word: 'يَقُولُ', meaning: { en: 'he says', ur: 'وہ کہتا ہے' } },
            ],
          },
          frequency: {
            word: 'قُلْ',
            total: 332,
            spikedSurahs: [2, 3, 4, 6, 7],
            note: {
              en: 'Most common imperative in Quran - Allah\'s direct instruction to proclaim',
              ur: 'قرآن میں سب سے زیادہ استعمال ہونے والا فعل امر - اللہ کی براہ راست ہدایت',
            },
          },
          irabReason: {
            case: 'فعل أمر',
            reason: {
              en: 'Imperative verb is built on sukun (جزم)',
              ur: 'فعل امر سکون پر مبنی ہوتا ہے',
            },
            rule: {
              en: 'Commands in Arabic use the jussive stem with sukun on final letter',
              ur: 'عربی میں امر کے لیے مجزوم صیغہ استعمال ہوتا ہے',
            },
          },
          balagha: {
            title: { en: 'Direct Command', ur: 'براہ راست حکم' },
            explanation: {
              en: 'Allah commands "Say!" rather than "Tell them" - creating urgency and establishing this as a proclamation of core belief.',
              ur: '"کہو" کا حکم "انہیں بتاؤ" کی بجائے - فوری اہمیت اور بنیادی عقیدے کا اعلان۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Universal Address', ur: 'عالمگیر خطاب' },
            points: [
              {
                en: 'Though addressed to Prophet ﷺ, "قُلْ" makes every reciter a proclaimer of Tawheed',
                ur: 'اگرچہ نبی ﷺ کو خطاب ہے، "قُلْ" ہر پڑھنے والے کو توحید کا داعی بنا دیتا ہے',
              },
            ],
          },
          tajweedTips: {
            rules: [
              {
                rule: { en: 'Qalqalah', ur: 'قلقلہ' },
                description: {
                  en: 'The ل has sukun, creating a slight bounce/echo sound',
                  ur: 'ل پر سکون ہے جس سے ہلکی سی گونج پیدا ہوتی ہے',
                },
              },
            ],
          },
          memoryHook: {
            tips: [
              {
                en: '"Qul" appears 332 times - Allah wants us to SPEAK our faith',
                ur: '"قل" 332 بار آیا - اللہ چاہتا ہے کہ ہم اپنے ایمان کا اظہار کریں',
              },
            ],
          },
          verbConjugation: {
            root: 'ق و ل',
            form: 'I',
            meaning: { en: 'to say', ur: 'کہنا' },
            table: {
              past: { he: 'قَالَ', she: 'قَالَتْ', they_m: 'قَالُوا', they_f: 'قُلْنَ', you_m: 'قُلْتَ', I: 'قُلْتُ', we: 'قُلْنَا' },
              present: { he: 'يَقُولُ', she: 'تَقُولُ', they_m: 'يَقُولُونَ', you_m: 'تَقُولُ', I: 'أَقُولُ', we: 'نَقُولُ' },
              imperative: { you_m_s: 'قُلْ', you_f_s: 'قُولِي', you_m_p: 'قُولُوا', you_f_p: 'قُلْنَ' },
            },
          },
          morphemes: {
            prefix: '',
            root: 'قُلْ',
            suffix: '',
          },
        },
      },
      {
        id: '112:1:2',
        position: 2,
        arabic: 'هُوَ',
        transliteration: 'Huwa',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        lemma: 'هُوَ',
        meaning: {
          en: 'He',
          ur: 'وہ',
          hi: 'वह',
          bn: 'তিনি',
          tr: 'O',
          id: 'Dia',
        },
        grammarRole: 'subj',
        case: null,
        features: {
          type: 'personal',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
        },
        grammarExplanations: {
          en: 'Third person masculine singular pronoun (ضمير منفصل). Subject of the nominal sentence.',
          ur: 'ضمیر منفصل غائب مذکر واحد۔ جملہ اسمیہ کا مبتدأ۔',
          hi: 'तीसरे व्यक्ति का एकवचन पुल्लिंग सर्वनाम। वाक्य का कर्ता।',
        },
        advanced: {
          balagha: {
            title: { en: 'The Mysterious "He"', ur: 'پراسرار "ہو"' },
            explanation: {
              en: 'Starts with "He" before mentioning "Allah" - creating anticipation. Who is this "He"? Then revealed: Allah!',
              ur: '"اللہ" سے پہلے "ہو" - تجسس پیدا کرتا ہے۔ یہ "وہ" کون ہے؟ پھر انکشاف: اللہ!',
            },
          },
          linguisticMiracle: {
            title: { en: 'Emphasis Structure', ur: 'تاکیدی ساخت' },
            points: [
              {
                en: 'Using "هُوَ" before "اللَّهُ" creates emphasis (تقديم المبتدأ)',
                ur: '"اللَّهُ" سے پہلے "هُوَ" کا استعمال تاکید پیدا کرتا ہے',
              },
            ],
          },
        },
      },
      {
        id: '112:1:3',
        position: 3,
        arabic: 'اللَّهُ',
        transliteration: 'Allahu',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        lemma: 'اللّٰه',
        meaning: {
          en: 'Allah',
          ur: 'اللہ',
          hi: 'अल्लाह',
          bn: 'আল্লাহ',
          tr: 'Allah',
          id: 'Allah',
        },
        grammarRole: 'pred',
        case: 'marfoo',
        features: {
          type: 'proper noun',
          definiteness: 'definite',
          gender: 'masculine',
        },
        grammarExplanations: {
          en: 'Predicate (خبر) of "هُوَ". Nominative case (مرفوع) because it\'s the predicate.',
          ur: '"هُوَ" کا خبر۔ مرفوع کیونکہ یہ خبر ہے۔',
          hi: '"हुव" का खबर। मरफू क्योंकि यह खबर है।',
        },
        advanced: {
          rootFamily: {
            root: 'أ ل ه',
            meaning: { en: 'god, deity, to worship', ur: 'معبود، عبادت کرنا', hi: 'देवता, पूजा करना' },
            words: [
              { word: 'إِلٰه', meaning: { en: 'god/deity', ur: 'معبود' } },
              { word: 'اللّٰه', meaning: { en: 'Allah (The God)', ur: 'اللہ (معبود حقیقی)' } },
              { word: 'أَلَّهَ', meaning: { en: 'to worship', ur: 'عبادت کرنا' } },
            ],
          },
          frequency: {
            word: 'اللّٰه',
            total: 2699,
            spikedSurahs: [2, 3, 4, 5, 9],
            note: {
              en: 'Most frequent word in Quran - central to every message',
              ur: 'قرآن کا سب سے زیادہ استعمال شدہ لفظ',
            },
          },
          balagha: {
            title: { en: 'The Unique Name', ur: 'منفرد نام' },
            explanation: {
              en: '"Allah" is not derived from anything - it\'s THE unique name for the one true God, not shared by any creation.',
              ur: '"اللہ" کسی سے ماخوذ نہیں - یہ واحد سچے خدا کا منفرد نام ہے۔',
            },
          },
        },
      },
      {
        id: '112:1:4',
        position: 4,
        arabic: 'أَحَدٌ',
        transliteration: 'Ahadun',
        pos: ['N'],
        posLabel: 'N',
        root: 'و ح د',
        lemma: 'أَحَد',
        meaning: {
          en: 'One (Absolutely Unique)',
          ur: 'ایک (بالکل منفرد)',
          hi: 'एक (बिल्कुल अनूठा)',
          bn: 'এক (সম্পূর্ণ অনন্য)',
          tr: 'Bir (Mutlak Tek)',
          id: 'Satu (Mutlak Unik)',
        },
        grammarRole: 'badal',
        case: 'marfoo',
        features: {
          type: 'noun/adjective',
          number: 'singular',
          definiteness: 'indefinite',
          state: 'nominative',
        },
        grammarExplanations: {
          en: 'Substitute (بدل) or second predicate for "اللّٰه". Nominative indefinite (tanween) emphasizing absolute uniqueness.',
          ur: '"اللّٰه" کا بدل یا دوسرا خبر۔ تنوین سے مرفوع - مطلق یکتائی پر زور۔',
          hi: '"अल्लाह" का बदल या दूसरा खबर। तनवीन से मरफू - पूर्ण एकता पर जोर।',
        },
        advanced: {
          rootFamily: {
            root: 'و ح د',
            meaning: { en: 'to be one, unite, alone', ur: 'ایک ہونا، اکیلا', hi: 'एक होना, अकेला' },
            words: [
              { word: 'وَاحِد', meaning: { en: 'one (of many)', ur: 'ایک (بہت میں سے)' } },
              { word: 'أَحَد', meaning: { en: 'one (unique, none like)', ur: 'ایک (منفرد، کوئی مثل نہیں)' } },
              { word: 'وَحِيد', meaning: { en: 'alone, solitary', ur: 'تنہا' } },
              { word: 'تَوْحِيد', meaning: { en: 'monotheism', ur: 'توحید' } },
            ],
          },
          balagha: {
            title: { en: 'أَحَد vs وَاحِد', ur: 'أَحَد بمقابلہ وَاحِد' },
            explanation: {
              en: '"أَحَد" (not وَاحِد) is used - meaning ONE with no equal, no partner, incomparable. وَاحِد means "one" in counting (one of many).',
              ur: '"أَحَد" (نہ کہ وَاحِد) استعمال ہوا - یعنی ایک جس کا کوئی ہمسر نہیں۔ وَاحِد گنتی میں "ایک" ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'The Indefinite Tanween', ur: 'نکرہ تنوین' },
            points: [
              {
                en: '"أَحَدٌ" is indefinite (with tanween) - His Oneness is so absolute it cannot be defined or limited',
                ur: '"أَحَدٌ" نکرہ ہے (تنوین کے ساتھ) - اس کی یکتائی اتنی مطلق ہے کہ اسے محدود نہیں کیا جا سکتا',
              },
            ],
          },
          memoryHook: {
            tips: [
              {
                en: 'أَحَد = Absolutely One (no comparison). وَاحِد = One in counting.',
                ur: 'أَحَد = بالکل ایک (کوئی موازنہ نہیں)۔ وَاحِد = گنتی میں ایک۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'nominal-sentence',
      components: [
        { type: 'verb', word: 'قُلْ', role: 'command' },
        { type: 'mubtada', word: 'هُوَ', role: 'subject' },
        { type: 'khabar', word: 'اللَّهُ', role: 'predicate1' },
        { type: 'badal/khabar2', word: 'أَحَدٌ', role: 'predicate2/substitute' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول' },
        { from: 2, to: 3, label: 'مبتدأ + خبر' },
        { from: 3, to: 4, label: 'خبر + بدل' },
      ],
      explanation: {
        en: 'Command (قُلْ) + Nominal sentence: He (هُوَ) is Allah (اللّٰه), One (أَحَد)',
        ur: 'فعل امر (قُلْ) + جملہ اسمیہ: وہ (هُوَ) اللہ (اللّٰه) ہے، ایک (أَحَد)',
      },
    },
  },

  2: { // Ayah 2: اللَّهُ الصَّمَدُ
    text: 'اللَّهُ الصَّمَدُ',
    translation: {
      en: 'Allah, the Eternal Refuge.',
      ur: 'اللہ بے نیاز ہے',
      hi: 'अल्लाह बेनियाज़ है',
      bn: 'আল্লাহ অমুখাপেক্ষী',
      tr: 'Allah Samed\'dir',
      id: 'Allah tempat meminta segala sesuatu',
    },
    words: [
      {
        id: '112:2:1',
        position: 1,
        arabic: 'اللَّهُ',
        transliteration: 'Allahu',
        pos: ['PN'],
        posLabel: 'PN',
        root: 'أ ل ه',
        lemma: 'اللّٰه',
        meaning: {
          en: 'Allah',
          ur: 'اللہ',
          hi: 'अल्लाह',
        },
        grammarRole: 'mubtada',
        case: 'marfoo',
        grammarExplanations: {
          en: 'Subject (مبتدأ) of a nominal sentence. Nominative case.',
          ur: 'جملہ اسمیہ کا مبتدأ۔ مرفوع۔',
        },
      },
      {
        id: '112:2:2',
        position: 2,
        arabic: 'الصَّمَدُ',
        transliteration: 'As-Samadu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ص م د',
        lemma: 'صَمَد',
        meaning: {
          en: 'The Eternal Refuge / Self-Sufficient',
          ur: 'بے نیاز / جس کی طرف رجوع کیا جائے',
          hi: 'बेनियाज़ / जिसकी तरफ रुजू किया जाए',
        },
        grammarRole: 'pred',
        case: 'marfoo',
        features: {
          type: 'noun',
          definiteness: 'definite',
          state: 'nominative',
        },
        grammarExplanations: {
          en: 'Predicate (خبر) of "اللّٰه". Nominative because it\'s the predicate.',
          ur: '"اللّٰه" کا خبر۔ مرفوع کیونکہ یہ خبر ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ص م د',
            meaning: { en: 'to intend, resort to, eternal', ur: 'قصد کرنا، رجوع کرنا، ہمیشہ' },
            words: [
              { word: 'صَمَدَ', meaning: { en: 'to intend, head towards', ur: 'قصد کرنا' } },
              { word: 'الصَّمَد', meaning: { en: 'The Eternal, Self-Sufficient', ur: 'بے نیاز، جس کی طرف رجوع کیا جائے' } },
            ],
          },
          frequency: {
            word: 'الصَّمَد',
            total: 1,
            spikedSurahs: [112],
            note: {
              en: 'Appears ONLY once in entire Quran - unique attribute mentioned only here',
              ur: 'پورے قرآن میں صرف ایک بار - منفرد صفت صرف یہاں',
            },
          },
          balagha: {
            title: { en: 'The Unique Attribute', ur: 'منفرد صفت' },
            explanation: {
              en: 'الصَّمَد has multiple layers: (1) He needs nothing, (2) Everything needs Him, (3) All turn to Him in need, (4) Solid, no hollow - eternal.',
              ur: 'الصَّمَد کے کئی معانی: (1) اسے کسی کی ضرورت نہیں، (2) سب کو اس کی ضرورت ہے، (3) سب اس کی طرف رجوع کرتے ہیں، (4) ٹھوس، ہمیشہ رہنے والا۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Hapax Legomenon', ur: 'ایک بار آنے والا لفظ' },
            points: [
              {
                en: 'This divine name appears only ONCE in the Quran - emphasizing its unique significance for Tawheed',
                ur: 'یہ الٰہی نام قرآن میں صرف ایک بار آیا - توحید کے لیے اس کی منفرد اہمیت',
              },
            ],
          },
          scholarTranslations: [
            { scholar: 'Sahih International', translation: 'Allah, the Eternal Refuge' },
            { scholar: 'Pickthall', translation: 'Allah, the eternally Besought of all' },
            { scholar: 'Yusuf Ali', translation: 'Allah, the Eternal, Absolute' },
            { scholar: 'Dr. Mustafa Khattab', translation: 'Allah—the Sustainer ˹needed by all˺' },
            { scholar: 'Abdul Haleem', translation: 'God, the Eternal' },
          ],
          memoryHook: {
            tips: [
              {
                en: 'الصَّمَد = Everyone needs Allah, Allah needs no one. Like a King everyone goes to.',
                ur: 'الصَّمَد = سب کو اللہ چاہیے، اللہ کو کوئی نہیں چاہیے۔ جیسے بادشاہ جس کے پاس سب جاتے ہیں۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'nominal-sentence',
      components: [
        { type: 'mubtada', word: 'اللَّهُ', role: 'subject' },
        { type: 'khabar', word: 'الصَّمَدُ', role: 'predicate' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
      ],
      explanation: {
        en: 'Simple nominal sentence: Allah (subject) is As-Samad (predicate)',
        ur: 'سادہ جملہ اسمیہ: اللہ (مبتدأ) الصمد (خبر) ہے',
      },
    },
  },

  3: { // Ayah 3: لَمْ يَلِدْ وَلَمْ يُولَدْ
    text: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
    translation: {
      en: 'He neither begets nor is born,',
      ur: 'نہ اس نے کسی کو جنا اور نہ وہ جنا گیا',
      hi: 'न उसने किसी को जना और न वह जना गया',
      bn: 'তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি',
      tr: 'O doğurmamıştır ve doğurulmamıştır',
      id: 'Dia tidak beranak dan tidak pula diperanakkan',
    },
    words: [
      {
        id: '112:3:1',
        position: 1,
        arabic: 'لَمْ',
        transliteration: 'Lam',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        lemma: 'لَمْ',
        meaning: {
          en: 'Not (did not)',
          ur: 'نہیں',
          hi: 'नहीं',
        },
        grammarRole: 'jarr',
        case: null,
        features: {
          type: 'negative particle',
          effect: 'jazm (jussive)',
        },
        grammarExplanations: {
          en: 'Negative particle (حرف نفي وجزم) that negates past tense and causes jussive mood on the verb.',
          ur: 'حرف نفی و جزم - ماضی کی نفی کرتا ہے اور فعل کو مجزوم کرتا ہے۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Complete Negation', ur: 'مکمل نفی' },
            explanation: {
              en: 'لَمْ negates from the beginning of time until now - He NEVER begot.',
              ur: 'لَمْ ابتدائے وقت سے اب تک کی نفی کرتا ہے - اس نے کبھی نہیں جنا۔',
            },
          },
        },
      },
      {
        id: '112:3:2',
        position: 2,
        arabic: 'يَلِدْ',
        transliteration: 'yalid',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ل د',
        lemma: 'وَلَدَ',
        meaning: {
          en: 'He begets',
          ur: 'وہ جنے',
          hi: 'वह जने',
        },
        grammarRole: 'verb',
        case: 'majzoom',
        features: {
          aspect: 'imperfect',
          mood: 'jussive',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
          voice: 'active',
        },
        grammarExplanations: {
          en: 'Jussive verb (فعل مضارع مجزوم) - jussive because of لَمْ. "He does not beget/father."',
          ur: 'فعل مضارع مجزوم - لَمْ کی وجہ سے مجزوم۔ "وہ نہیں جنتا۔"',
        },
        advanced: {
          rootFamily: {
            root: 'و ل د',
            meaning: { en: 'to give birth, beget, child', ur: 'جننا، پیدا کرنا، بچہ' },
            words: [
              { word: 'وَلَدَ', meaning: { en: 'he fathered', ur: 'اس نے جنا' } },
              { word: 'وَلَد', meaning: { en: 'child', ur: 'بچہ' } },
              { word: 'وَالِد', meaning: { en: 'father', ur: 'والد' } },
              { word: 'وَالِدَة', meaning: { en: 'mother', ur: 'والدہ' } },
              { word: 'مَوْلُود', meaning: { en: 'newborn', ur: 'نومولود' } },
            ],
          },
          balagha: {
            title: { en: 'Refuting False Beliefs', ur: 'باطل عقائد کی تردید' },
            explanation: {
              en: 'Direct refutation of Christians claiming Jesus is "son of God" and Arabs claiming angels are "daughters of Allah".',
              ur: 'عیسائیوں کے عقیدہ "عیسیٰ خدا کا بیٹا" اور عربوں کے عقیدہ "فرشتے اللہ کی بیٹیاں" کی براہ راست تردید۔',
            },
          },
          verbConjugation: {
            root: 'و ل د',
            form: 'I',
            meaning: { en: 'to beget, give birth', ur: 'جننا' },
            table: {
              past: { he: 'وَلَدَ', she: 'وَلَدَتْ' },
              present: { he: 'يَلِدُ', she: 'تَلِدُ' },
              jussive: { he: 'يَلِدْ', she: 'تَلِدْ' },
            },
          },
        },
      },
      {
        id: '112:3:3',
        position: 3,
        arabic: 'وَلَمْ',
        transliteration: 'wa-lam',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہیں',
          hi: 'और नहीं',
        },
        grammarExplanations: {
          en: 'Conjunction وَ (and) + negative particle لَمْ (not)',
          ur: 'حرف عطف وَ (اور) + حرف نفی لَمْ (نہیں)',
        },
      },
      {
        id: '112:3:4',
        position: 4,
        arabic: 'يُولَدْ',
        transliteration: 'yulad',
        pos: ['V'],
        posLabel: 'V',
        root: 'و ل د',
        lemma: 'وُلِدَ',
        meaning: {
          en: 'He is born',
          ur: 'وہ جنا جائے',
          hi: 'वह जना जाए',
        },
        grammarRole: 'verb',
        case: 'majzoom',
        features: {
          aspect: 'imperfect',
          mood: 'jussive',
          person: '3rd',
          gender: 'masculine',
          number: 'singular',
          voice: 'passive',
        },
        grammarExplanations: {
          en: 'Passive jussive verb - "He was not born." Passive form shows He has no origin.',
          ur: 'فعل مجہول مجزوم - "وہ پیدا نہیں کیا گیا۔" مجہول بتاتا ہے کہ اس کی کوئی ابتدا نہیں۔',
        },
        advanced: {
          balagha: {
            title: { en: 'No Beginning', ur: 'کوئی شروعات نہیں' },
            explanation: {
              en: '"Not born" - He has no origin, no beginning, was never created. The Eternal (الصَّمَد) has no source.',
              ur: '"پیدا نہیں ہوا" - اس کی کوئی ابتدا نہیں، کبھی پیدا نہیں کیا گیا۔ الصَّمَد کا کوئی سرچشمہ نہیں۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Active + Passive Pair', ur: 'فاعل + مفعول کا جوڑا' },
            points: [
              {
                en: 'يَلِدْ (active) + يُولَدْ (passive) - covers both directions: He neither produces offspring nor was He produced.',
                ur: 'يَلِدْ (معلوم) + يُولَدْ (مجہول) - دونوں جانب: نہ اس نے کسی کو پیدا کیا نہ وہ پیدا کیا گیا۔',
              },
            ],
          },
        },
      },
    ],
    structure: {
      type: 'compound-negation',
      components: [
        { type: 'negation', word: 'لَمْ', role: 'negative particle' },
        { type: 'verb-active', word: 'يَلِدْ', role: 'negated verb (active)' },
        { type: 'conjunction', word: 'وَ', role: 'connector' },
        { type: 'negation', word: 'لَمْ', role: 'negative particle' },
        { type: 'verb-passive', word: 'يُولَدْ', role: 'negated verb (passive)' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'حرف نفی + فعل مجزوم' },
        { from: 2, to: 4, label: 'عطف' },
        { from: 3, to: 4, label: 'حرف نفی + فعل مجزوم' },
      ],
      explanation: {
        en: 'Two negated verbs joined: "Not begets" AND "Not begotten" - complete negation both ways',
        ur: 'دو منفی افعال: "نہ جنا" اور "نہ جنا گیا" - دونوں طرف مکمل نفی',
      },
    },
  },

  4: { // Ayah 4: وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
    text: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
    translation: {
      en: 'Nor is there to Him any equivalent.',
      ur: 'اور نہ اس کا کوئی ہمسر ہے',
      hi: 'और न उसका कोई हमसर है',
      bn: 'এবং তাঁর সমকক্ষ কেউ নেই',
      tr: 'Ve O\'nun hiçbir dengi yoktur',
      id: 'Dan tidak ada sesuatu pun yang setara dengan Dia',
    },
    words: [
      {
        id: '112:4:1',
        position: 1,
        arabic: 'وَلَمْ',
        transliteration: 'wa-lam',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہیں',
          hi: 'और نहीं',
        },
        grammarExplanations: {
          en: 'Conjunction + negative particle causing jussive mood',
          ur: 'حرف عطف + حرف نفی جو فعل کو مجزوم کرتا ہے',
        },
      },
      {
        id: '112:4:2',
        position: 2,
        arabic: 'يَكُن',
        transliteration: 'yakun',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        lemma: 'كَانَ',
        meaning: {
          en: 'there is/was',
          ur: 'ہو',
          hi: 'हो',
        },
        grammarRole: 'verb',
        case: 'majzoom',
        features: {
          aspect: 'imperfect',
          mood: 'jussive',
          type: 'كان الناقصة',
        },
        grammarExplanations: {
          en: 'كان الناقصة (deficient كان) in jussive mood. Links subject to predicate.',
          ur: 'کان ناقصہ مجزوم۔ اسم اور خبر کو جوڑتا ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ك و ن',
            meaning: { en: 'to be, exist, happen', ur: 'ہونا، موجود ہونا' },
            words: [
              { word: 'كَانَ', meaning: { en: 'he was', ur: 'وہ تھا' } },
              { word: 'يَكُونُ', meaning: { en: 'he is/will be', ur: 'وہ ہے/ہوگا' } },
              { word: 'كُنْ', meaning: { en: 'Be!', ur: 'ہو جا!' } },
              { word: 'كَوْن', meaning: { en: 'universe, being', ur: 'کائنات' } },
            ],
          },
          balagha: {
            title: { en: 'Timeless Negation', ur: 'ہمیشہ کی نفی' },
            explanation: {
              en: 'Using يَكُن (jussive) with لَمْ - negates any equivalent at any time, past or future.',
              ur: 'يَكُن (مجزوم) + لَمْ - ہر وقت کسی ہمسر کی نفی، ماضی ہو یا مستقبل۔',
            },
          },
        },
      },
      {
        id: '112:4:3',
        position: 3,
        arabic: 'لَّهُ',
        transliteration: 'lahu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'for Him / to Him',
          ur: 'اس کے لیے',
          hi: 'उसके लिए',
        },
        grammarRole: 'jarr-majrur',
        grammarExplanations: {
          en: 'Preposition لِ (for) + attached pronoun هُ (Him). Indicates possession/relation.',
          ur: 'حرف جار لِ (کے لیے) + ضمیر متصل هُ (اس)۔',
        },
      },
      {
        id: '112:4:4',
        position: 4,
        arabic: 'كُفُوًا',
        transliteration: 'kufuwan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ف أ',
        lemma: 'كُفُو',
        meaning: {
          en: 'equivalent / equal / comparable',
          ur: 'ہمسر / برابر / مثل',
          hi: 'हमसर / बराबर / मिस्ल',
        },
        grammarRole: 'pred',
        case: 'mansoob',
        features: {
          type: 'noun',
          case: 'accusative',
          state: 'indefinite',
        },
        grammarExplanations: {
          en: 'Predicate (خبر) of كان - accusative case (منصوب). "No one is equal to Him."',
          ur: 'کان کا خبر - منصوب۔ "کوئی اس کا ہمسر نہیں۔"',
        },
        advanced: {
          rootFamily: {
            root: 'ك ف أ',
            meaning: { en: 'to equal, match, be equivalent', ur: 'برابر ہونا، مثل ہونا' },
            words: [
              { word: 'كُفُو', meaning: { en: 'equal, match', ur: 'ہمسر، برابر' } },
              { word: 'كَفَاءَة', meaning: { en: 'equality, competence', ur: 'مساوات، اہلیت' } },
              { word: 'مُكَافِئ', meaning: { en: 'equivalent', ur: 'مساوی' } },
            ],
          },
          balagha: {
            title: { en: 'Absolute Uniqueness', ur: 'مطلق انفرادیت' },
            explanation: {
              en: 'كُفُوًا (accusative + tanween) emphasizes NOTHING can be compared to Allah - not in essence, attributes, or actions.',
              ur: 'كُفُوًا (منصوب + تنوین) اس بات پر زور دیتا ہے کہ کوئی چیز اللہ کی مثل نہیں - نہ ذات میں، نہ صفات میں، نہ افعال میں۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Word Order', ur: 'ترتیب الفاظ' },
            points: [
              {
                en: 'كُفُوًا comes before أَحَدٌ - emphasizing "equivalent" before "anyone" - no type of equal exists.',
                ur: 'كُفُوًا پہلے آیا أَحَدٌ سے - "ہمسر" پر زور پہلے "کوئی" سے - کوئی قسم کا ہمسر نہیں۔',
              },
            ],
          },
        },
      },
      {
        id: '112:4:5',
        position: 5,
        arabic: 'أَحَدٌ',
        transliteration: 'ahadun',
        pos: ['N'],
        posLabel: 'N',
        root: 'و ح د',
        lemma: 'أَحَد',
        meaning: {
          en: 'anyone / one',
          ur: 'کوئی',
          hi: 'कोई',
        },
        grammarRole: 'subj',
        case: 'marfoo',
        features: {
          type: 'noun',
          case: 'nominative',
          state: 'indefinite',
        },
        grammarExplanations: {
          en: 'Subject (اسم كان) - nominative. "No ONE is equal to Him."',
          ur: 'اسم کان - مرفوع۔ "کوئی بھی اس کا ہمسر نہیں۔"',
        },
        advanced: {
          balagha: {
            title: { en: 'Circle Complete', ur: 'دائرہ مکمل' },
            explanation: {
              en: 'Surah begins with أَحَدٌ (Allah is One) and ends with أَحَدٌ (no one equals Him). Perfect ring composition.',
              ur: 'سورہ أَحَدٌ سے شروع ہوئی (اللہ ایک ہے) اور أَحَدٌ پر ختم (کوئی اس کا ہمسر نہیں)۔ مکمل دائرہ۔',
            },
          },
        },
      },
    ],
    structure: {
      type: 'كان-sentence',
      components: [
        { type: 'negation', word: 'وَلَمْ', role: 'negative + conjunction' },
        { type: 'verb', word: 'يَكُن', role: 'كان الناقصة' },
        { type: 'jarr-majrur', word: 'لَّهُ', role: 'prepositional phrase' },
        { type: 'khabar', word: 'كُفُوًا', role: 'predicate (accusative)' },
        { type: 'ism', word: 'أَحَدٌ', role: 'subject (nominative)' },
      ],
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 5, label: 'كان + اسم' },
        { from: 2, to: 4, label: 'كان + خبر' },
        { from: 3, to: 2, label: 'متعلق' },
      ],
      explanation: {
        en: 'كان sentence with negation: Not is (يَكُن) for Him (لَّهُ) equivalent (كُفُوًا) anyone (أَحَدٌ)',
        ur: 'کان کا جملہ مع نفی: نہیں ہے (يَكُن) اس کے لیے (لَّهُ) ہمسر (كُفُوًا) کوئی (أَحَدٌ)',
      },
    },
  },
};

// Export the data
export default SURAH_112_TREEBANK;
export { SURAH_112_TREEBANK as TREEBANK_DATA };
