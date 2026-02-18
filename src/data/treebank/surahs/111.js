/**
 * Surah Al-Masad / Al-Lahab (111) - Complete Treebank Data
 * The Palm Fiber / The Flame - 5 Ayahs, 23 Words
 *
 * Theme: Fate of those who oppose Allah's messenger
 * Revelation: Makki
 * Unique: One of the only surahs naming a specific person (Abu Lahab)
 * Prophecy: Abu Lahab died as a disbeliever, fulfilling this surah
 */

const SURAH_111_TREEBANK = {
  1: { // Ayah 1: تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ
    text: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ',
    translation: {
      en: 'May the hands of Abu Lahab be ruined, and ruined is he',
      ur: 'ابو لہب کے دونوں ہاتھ ٹوٹ جائیں اور وہ تباہ ہو جائے',
      hi: 'अबू लहब के दोनों हाथ टूट जाएँ और वह तबाह हो जाए',
      bn: 'আবু লাহাবের দুই হাত ধ্বংস হোক এবং সে ধ্বংস হয়েছে',
      tr: 'Ebu Leheb\'in elleri kurusun, o da helak olsun',
      id: 'Binasalah kedua tangan Abu Lahab dan ia telah binasa',
    },
    words: [
      {
        id: '111:1:1',
        position: 1,
        arabic: 'تَبَّتْ',
        transliteration: 'Tabbat',
        pos: ['V'],
        posLabel: 'V',
        root: 'ت ب ب',
        lemma: 'تَبَّ',
        meaning: { en: 'Perish/May be ruined', ur: 'ٹوٹ جائیں', hi: 'टूट जाएँ' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'feminine', number: 'dual' },
        grammarExplanations: {
          en: 'Perfect tense (for curse/prayer) - feminine to match يَدَا (two hands). Can be curse or statement of fact.',
          ur: 'ماضی (بد دعا/دعا کے لیے) - مؤنث یَدَا (دو ہاتھ) سے مطابقت۔ بد دعا یا واقعہ کا بیان ہو سکتا ہے۔',
        },
        advanced: {
          rootFamily: {
            root: 'ت ب ب',
            meaning: { en: 'to perish, be ruined, lose', ur: 'ہلاک ہونا، تباہ ہونا' },
            words: [
              { word: 'تَبَّ', meaning: { en: 'he perished', ur: 'وہ ہلاک ہوا' } },
              { word: 'تَبَاب', meaning: { en: 'perdition, ruin', ur: 'تباہی' } },
              { word: 'تَتْبِيب', meaning: { en: 'destruction', ur: 'بربادی' } },
            ],
          },
          balagha: {
            title: { en: 'Opening with Condemnation', ur: 'مذمت سے آغاز' },
            explanation: {
              en: 'Surah begins with a curse - unparalleled severity. Allah Himself condemns this enemy.',
              ur: 'سورہ بد دعا سے شروع - بے مثال شدت۔ اللہ خود اس دشمن کی مذمت کرتا ہے۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Dual Meaning', ur: 'دوہرا مفہوم' },
            explanation: {
              en: 'تَبَّتْ could be: (1) Curse: "May his hands perish!" or (2) Fact: "His hands HAVE perished." Both came true.',
              ur: 'تَبَّتْ ہو سکتا ہے: (1) بد دعا: "اس کے ہاتھ ٹوٹیں!" یا (2) حقیقت: "اس کے ہاتھ ٹوٹ گئے۔" دونوں سچ ہوئے۔',
            },
          },
        },
      },
      {
        id: '111:1:2',
        position: 2,
        arabic: 'يَدَا',
        transliteration: 'Yada',
        pos: ['N'],
        posLabel: 'N',
        root: 'ي د ي',
        lemma: 'يَد',
        meaning: { en: 'the two hands of', ur: 'دونوں ہاتھ', hi: 'दोनों हाथ' },
        grammarRole: 'fa\'il',
        case: 'marfoo',
        features: { number: 'dual', state: 'nominative', type: 'noun' },
        grammarExplanations: {
          en: 'Dual form of يَد (hand). "Hands" metaphorically = his power, actions, and self.',
          ur: 'یَد (ہاتھ) کا تثنیہ۔ "ہاتھ" استعاراتی طور پر = اس کی طاقت، اعمال، اور ذات۔',
        },
        advanced: {
          rootFamily: {
            root: 'ي د ي',
            meaning: { en: 'hand, power, possession', ur: 'ہاتھ، طاقت، قبضہ' },
            words: [
              { word: 'يَد', meaning: { en: 'hand', ur: 'ہاتھ' } },
              { word: 'يَدَان', meaning: { en: 'two hands', ur: 'دو ہاتھ' } },
              { word: 'أَيْدِي', meaning: { en: 'hands (plural)', ur: 'ہاتھ (جمع)' } },
            ],
          },
          balagha: {
            title: { en: 'Hands = Actions', ur: 'ہاتھ = اعمال' },
            explanation: {
              en: '"Hands" is metonymy for his efforts against Islam. His actions are cursed.',
              ur: '"ہاتھ" اسلام کے خلاف اس کی کوششوں کی کنایہ ہے۔ اس کے اعمال ملعون ہیں۔',
            },
          },
        },
      },
      {
        id: '111:1:3',
        position: 3,
        arabic: 'أَبِي',
        transliteration: 'Abi',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ب و',
        lemma: 'أَب',
        meaning: { en: 'father of', ur: 'باپ', hi: 'बाप' },
        grammarRole: 'mudaf',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun' },
        grammarExplanations: {
          en: 'Part of the kunya (nickname) "Abu Lahab" - Father of Flame.',
          ur: 'کنیت "ابو لہب" کا حصہ - شعلے کا باپ۔',
        },
      },
      {
        id: '111:1:4',
        position: 4,
        arabic: 'لَهَبٍ',
        transliteration: 'Lahab',
        pos: ['N'],
        posLabel: 'N',
        root: 'ل ه ب',
        lemma: 'لَهَب',
        meaning: { en: 'Lahab (Flame)', ur: 'لہب (شعلہ)', hi: 'लहब (शोला)' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', indefinite: true, type: 'noun' },
        grammarExplanations: {
          en: 'His nickname due to his fiery red complexion. Irony: he will burn in fire (لَهَب).',
          ur: 'اس کے سرخ چہرے کی وجہ سے لقب۔ ستم ظریفی: وہ آگ (لَهَب) میں جلے گا۔',
        },
        advanced: {
          rootFamily: {
            root: 'ل ه ب',
            meaning: { en: 'flame, blaze', ur: 'شعلہ، آگ' },
            words: [
              { word: 'لَهَب', meaning: { en: 'flame', ur: 'شعلہ' } },
              { word: 'لَهِيب', meaning: { en: 'blaze, intense fire', ur: 'بھڑکتی آگ' } },
              { word: 'اِلْتِهَاب', meaning: { en: 'inflammation', ur: 'سوزش' } },
            ],
          },
          linguisticMiracle: {
            title: { en: 'Name Foreshadows Fate', ur: 'نام تقدیر کی علامت' },
            explanation: {
              en: 'Abu Lahab (Father of Flame) → will enter نَارًا ذَاتَ لَهَبٍ (fire of flame). His name became his destiny.',
              ur: 'ابو لہب (شعلے کا باپ) → نَارًا ذَاتَ لَهَبٍ (شعلے والی آگ) میں داخل ہوگا۔ اس کا نام اس کی تقدیر بنا۔',
            },
          },
        },
      },
      {
        id: '111:1:5',
        position: 5,
        arabic: 'وَتَبَّ',
        transliteration: 'Wa-tabba',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ت ب ب',
        lemma: 'تَبَّ',
        meaning: { en: 'and ruined is he', ur: 'اور وہ تباہ ہو', hi: 'और वह तबाह हो' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: 'Masculine singular - now referring to Abu Lahab himself, not just his hands.',
          ur: 'مذکر مفرد - اب خود ابو لہب کی طرف اشارہ، صرف ہاتھوں کی طرف نہیں۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Total Ruin', ur: 'مکمل تباہی' },
            explanation: {
              en: 'First his HANDS (actions) perish, then HE perishes. Complete destruction - nothing is spared.',
              ur: 'پہلے اس کے ہاتھ (اعمال) تباہ، پھر وہ خود۔ مکمل بربادی - کچھ نہیں بچا۔',
            },
          },
        },
      },
    ],
    dependency: {
      root: 'تَبَّتْ',
      structure: [
        { word: 'تَبَّتْ', role: 'main-verb', subject: 'يَدَا' },
        { word: 'يَدَا', role: 'subject (dual)' },
        { word: 'أَبِي لَهَبٍ', role: 'mudaf-ilayh', dependsOn: 'يَدَا' },
        { word: 'وَتَبَّ', role: 'coordinated-verb', subject: 'هو (implied)' },
      ],
    },
  },

  2: { // Ayah 2: مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ
    text: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ',
    translation: {
      en: 'His wealth will not avail him or that which he gained',
      ur: 'اس کا مال اور جو کچھ اس نے کمایا اسے کچھ کام نہ آیا',
      hi: 'उसका माल और जो कुछ उसने कमाया उसे कुछ काम न आया',
      bn: 'তার সম্পদ ও তার উপার্জন তার কোন কাজে আসেনি',
      tr: 'Malı ve kazandıkları ona fayda vermedi',
      id: 'Hartanya dan apa yang diusahakannya tidak berguna baginya',
    },
    words: [
      {
        id: '111:2:1',
        position: 1,
        arabic: 'مَا',
        transliteration: 'Ma',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        lemma: 'مَا',
        meaning: { en: 'Not', ur: 'نہیں', hi: 'नहीं' },
        grammarRole: 'negation',
        features: { type: 'negative-particle' },
        grammarExplanations: {
          en: 'Negation particle - his wealth did NOT help him.',
          ur: 'حرف نفی - اس کے مال نے مدد نہیں کی۔',
        },
      },
      {
        id: '111:2:2',
        position: 2,
        arabic: 'أَغْنَىٰ',
        transliteration: 'Aghna',
        pos: ['V'],
        posLabel: 'V',
        root: 'غ ن ي',
        lemma: 'أَغْنَى',
        meaning: { en: 'avail/benefit', ur: 'کام آیا', hi: 'काम आया' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular', form: 'IV' },
        grammarExplanations: {
          en: 'Form IV - "to make independent/sufficient". His wealth couldn\'t make him independent of Allah\'s punishment.',
          ur: 'باب افعال - "بے نیاز کرنا"۔ اس کا مال اسے اللہ کی سزا سے بے نیاز نہ کر سکا۔',
        },
        advanced: {
          rootFamily: {
            root: 'غ ن ي',
            meaning: { en: 'to be rich, sufficient', ur: 'غنی ہونا، کافی ہونا' },
            words: [
              { word: 'غَنِيّ', meaning: { en: 'rich, self-sufficient', ur: 'غنی' } },
              { word: 'أَغْنَى', meaning: { en: 'he made independent', ur: 'اس نے بے نیاز کیا' } },
              { word: 'غِنَى', meaning: { en: 'wealth, independence', ur: 'دولت' } },
              { word: 'الغَنِيّ', meaning: { en: 'The Rich (Allah)', ur: 'الغنی (اللہ)' } },
            ],
          },
          balagha: {
            title: { en: 'Wealth is Useless', ur: 'دولت بے کار' },
            explanation: {
              en: 'Abu Lahab was wealthy. But مَا أَغْنَىٰ - it didn\'t help against Allah\'s decree.',
              ur: 'ابو لہب دولت مند تھا۔ لیکن مَا أَغْنَىٰ - اللہ کے فیصلے کے خلاف مدد نہ کر سکی۔',
            },
          },
        },
      },
      {
        id: '111:2:3',
        position: 3,
        arabic: 'عَنْهُ',
        transliteration: "'Anhu",
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        lemma: 'عَن',
        meaning: { en: 'for him', ur: 'اس سے', hi: 'उससे' },
        grammarRole: 'jarr-majrur',
        features: { type: 'preposition + pronoun' },
        grammarExplanations: {
          en: 'Preposition + pronoun - wealth couldn\'t protect HIM.',
          ur: 'حرف جر + ضمیر - دولت اسے نہ بچا سکی۔',
        },
      },
      {
        id: '111:2:4',
        position: 4,
        arabic: 'مَالُهُ',
        transliteration: 'Maluhu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'م و ل',
        lemma: 'مَال',
        meaning: { en: 'his wealth', ur: 'اس کا مال', hi: 'उसका माल' },
        grammarRole: 'fa\'il',
        case: 'marfoo',
        features: { state: 'nominative', type: 'noun', possessive: '3rd-masc-sing' },
        grammarExplanations: {
          en: 'Subject of أَغْنَى - "his wealth" is what failed to help.',
          ur: 'أَغْنَى کا فاعل - "اس کا مال" جو مدد میں ناکام رہا۔',
        },
        advanced: {
          rootFamily: {
            root: 'م و ل',
            meaning: { en: 'wealth, property', ur: 'مال، دولت' },
            words: [
              { word: 'مَال', meaning: { en: 'wealth', ur: 'مال' } },
              { word: 'أَمْوَال', meaning: { en: 'wealth (plural)', ur: 'اموال' } },
              { word: 'تَمْوِيل', meaning: { en: 'financing', ur: 'تمویل' } },
            ],
          },
        },
      },
      {
        id: '111:2:5',
        position: 5,
        arabic: 'وَمَا',
        transliteration: 'Wa-ma',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        lemma: 'مَا',
        meaning: { en: 'and what', ur: 'اور جو', hi: 'और जो' },
        grammarRole: 'conjunction + relative',
        features: { type: 'conjunction + relative-pronoun' },
        grammarExplanations: {
          en: 'Relative pronoun - "and what he earned".',
          ur: 'اسم موصول - "اور جو اس نے کمایا"۔',
        },
      },
      {
        id: '111:2:6',
        position: 6,
        arabic: 'كَسَبَ',
        transliteration: 'Kasaba',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك س ب',
        lemma: 'كَسَبَ',
        meaning: { en: 'he gained/earned', ur: 'اس نے کمایا', hi: 'उसने कमाया' },
        grammarRole: 'verb',
        features: { aspect: 'perfect', person: '3rd', gender: 'masculine', number: 'singular' },
        grammarExplanations: {
          en: '"What he earned" - could mean: (1) children, (2) status, (3) allies. All useless.',
          ur: '"جو اس نے کمایا" - ہو سکتا ہے: (1) بچے، (2) رتبہ، (3) حلیف۔ سب بے کار۔',
        },
        advanced: {
          rootFamily: {
            root: 'ك س ب',
            meaning: { en: 'to earn, gain, acquire', ur: 'کمانا، حاصل کرنا' },
            words: [
              { word: 'كَسَبَ', meaning: { en: 'he earned', ur: 'اس نے کمایا' } },
              { word: 'كَسْب', meaning: { en: 'earning', ur: 'کمائی' } },
              { word: 'مُكْتَسَب', meaning: { en: 'acquired', ur: 'حاصل کردہ' } },
              { word: 'اِكْتِسَاب', meaning: { en: 'acquisition', ur: 'حصول' } },
            ],
          },
          balagha: {
            title: { en: 'All Accomplishments Useless', ur: 'تمام کامیابیاں بے کار' },
            explanation: {
              en: 'مَا كَسَبَ could include his sons (like Utbah and Utaybah), status, or allies. None helped.',
              ur: 'مَا كَسَبَ میں اس کے بیٹے (جیسے عتبہ اور عتیبہ)، رتبہ، یا حلیف شامل۔ کسی نے مدد نہ کی۔',
            },
          },
        },
      },
    ],
    dependency: {
      root: 'أَغْنَىٰ',
      structure: [
        { word: 'مَا', role: 'negation', negates: 'أَغْنَىٰ' },
        { word: 'أَغْنَىٰ', role: 'main-verb', subject: 'مَالُهُ' },
        { word: 'عَنْهُ', role: 'prep-phrase', beneficiary: 'he' },
        { word: 'مَالُهُ', role: 'subject' },
        { word: 'وَمَا كَسَبَ', role: 'coordinated-subject' },
      ],
    },
  },

  3: { // Ayah 3: سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ
    text: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ',
    translation: {
      en: 'He will burn in a Fire of blazing flame',
      ur: 'عنقریب وہ بھڑکتی آگ میں داخل ہوگا',
      hi: 'अनक़रीब वह भड़कती आग में दाख़िल होगा',
      bn: 'শীঘ্রই সে প্রবেশ করবে লেলিহান অগ্নিতে',
      tr: 'Alevli bir ateşe girecektir',
      id: 'Kelak dia akan memasuki api yang bergejolak',
    },
    words: [
      {
        id: '111:3:1',
        position: 1,
        arabic: 'سَيَصْلَىٰ',
        transliteration: 'Sa-yasla',
        pos: ['V'],
        posLabel: 'V',
        root: 'ص ل ي',
        lemma: 'صَلِيَ',
        meaning: { en: 'He will burn', ur: 'وہ داخل ہوگا (آگ میں)', hi: 'वह दाख़िल होगा (आग में)' },
        grammarRole: 'verb',
        features: { aspect: 'imperfect', person: '3rd', gender: 'masculine', number: 'singular', prefix: 'س (will)' },
        grammarExplanations: {
          en: 'سَ (future particle) + imperfect verb. Definite future - he WILL enter fire.',
          ur: 'سَ (مستقبل) + فعل مضارع۔ یقینی مستقبل - وہ ضرور آگ میں داخل ہوگا۔',
        },
        advanced: {
          rootFamily: {
            root: 'ص ل ي',
            meaning: { en: 'to burn, roast, enter fire', ur: 'جلنا، بھننا، آگ میں داخل ہونا' },
            words: [
              { word: 'صَلِيَ', meaning: { en: 'he burned/entered fire', ur: 'وہ جلا/آگ میں داخل ہوا' } },
              { word: 'يَصْلَى', meaning: { en: 'he burns', ur: 'وہ جلتا ہے' } },
              { word: 'صَلَاة', meaning: { en: 'prayer (connection to fire of purification)', ur: 'نماز' } },
            ],
          },
          balagha: {
            title: { en: 'Certain Punishment', ur: 'یقینی سزا' },
            explanation: {
              en: 'سَيَصْلَىٰ is a prophecy - and it came true. Abu Lahab died in disease, his body left for days.',
              ur: 'سَيَصْلَىٰ پیشگوئی ہے - اور سچ ہوئی۔ ابو لہب بیماری سے مرا، لاش کئی دن پڑی رہی۔',
            },
          },
        },
      },
      {
        id: '111:3:2',
        position: 2,
        arabic: 'نَارًا',
        transliteration: 'Nara',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن و ر',
        lemma: 'نَار',
        meaning: { en: 'a Fire', ur: 'آگ', hi: 'आग' },
        grammarRole: 'maf\'ul-bih',
        case: 'mansoob',
        features: { state: 'accusative', indefinite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Direct object - he will enter "a fire" (indefinite for magnification).',
          ur: 'مفعول بہ - وہ "ایک آگ" میں داخل ہوگا (نکرہ تعظیم کے لیے)۔',
        },
        advanced: {
          rootFamily: {
            root: 'ن و ر',
            meaning: { en: 'fire; also light (different root shape)', ur: 'آگ؛ روشنی (مختلف شکل)' },
            words: [
              { word: 'نَار', meaning: { en: 'fire', ur: 'آگ' } },
              { word: 'نُور', meaning: { en: 'light', ur: 'نور' } },
            ],
          },
        },
      },
      {
        id: '111:3:3',
        position: 3,
        arabic: 'ذَاتَ',
        transliteration: 'Dhata',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ و',
        lemma: 'ذَات',
        meaning: { en: 'possessing/of', ur: 'والی', hi: 'वाली' },
        grammarRole: 'sifah',
        case: 'mansoob',
        features: { state: 'accusative', type: 'noun', gender: 'feminine' },
        grammarExplanations: {
          en: 'Adjective describing the fire - "a fire POSSESSING flame".',
          ur: 'آگ کی صفت - "شعلے والی آگ"۔',
        },
      },
      {
        id: '111:3:4',
        position: 4,
        arabic: 'لَهَبٍ',
        transliteration: 'Lahab',
        pos: ['N'],
        posLabel: 'N',
        root: 'ل ه ب',
        lemma: 'لَهَب',
        meaning: { en: 'blazing flame', ur: 'شعلہ', hi: 'शोला' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', indefinite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Same word as his nickname! Abu LAHAB will burn in fire of LAHAB.',
          ur: 'اس کے لقب جیسا لفظ! ابو لَہَب لَہَب کی آگ میں جلے گا۔',
        },
        advanced: {
          linguisticMiracle: {
            title: { en: 'Poetic Justice', ur: 'شاعرانہ انصاف' },
            explanation: {
              en: 'أَبِي لَهَبٍ (Father of Flame) → نَارًا ذَاتَ لَهَبٍ (Fire of Flame). His name seals his fate.',
              ur: 'أَبِي لَهَبٍ (شعلے کا باپ) → نَارًا ذَاتَ لَهَبٍ (شعلے والی آگ)۔ اس کے نام نے اس کی تقدیر طے کی۔',
            },
          },
          memoryHook: {
            en: 'Abu Lahab loved his nickname (fiery/bright face). Now "lahab" is his eternal address - Hell!',
            ur: 'ابو لہب کو اپنا لقب پسند تھا (آتشیں/روشن چہرہ)۔ اب "لہب" اس کا ابدی پتہ ہے - جہنم!',
          },
        },
      },
    ],
    dependency: {
      root: 'يَصْلَىٰ',
      structure: [
        { word: 'سَ', role: 'future-particle' },
        { word: 'يَصْلَىٰ', role: 'main-verb', subject: 'هو (implied)' },
        { word: 'نَارًا', role: 'direct-object' },
        { word: 'ذَاتَ لَهَبٍ', role: 'adjective-phrase', describes: 'نَارًا' },
      ],
    },
  },

  4: { // Ayah 4: وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ
    text: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ',
    translation: {
      en: 'And his wife, the carrier of firewood',
      ur: 'اور اس کی بیوی (بھی جہنم میں ہوگی) لکڑیاں ڈھونے والی',
      hi: 'और उसकी बीवी (भी जहन्नम में होगी) लकड़ियाँ ढोने वाली',
      bn: 'এবং তার স্ত্রী, জ্বালানি কাঠ বহনকারী',
      tr: 'Karısı da odun taşıyıcısı olarak',
      id: 'Dan isterinya, pembawa kayu bakar',
    },
    words: [
      {
        id: '111:4:1',
        position: 1,
        arabic: 'وَامْرَأَتُهُ',
        transliteration: "Wa-mra'atuhu",
        pos: ['CONJ', 'N', 'PRON'],
        posLabel: 'CONJ+N+PRON',
        root: 'م ر أ',
        lemma: 'اِمْرَأَة',
        meaning: { en: 'And his wife', ur: 'اور اس کی بیوی', hi: 'और उसकी बीवी' },
        grammarRole: 'mubtada',
        case: 'marfoo',
        features: { state: 'nominative', type: 'noun', possessive: '3rd-masc-sing' },
        grammarExplanations: {
          en: 'His wife (Umm Jamil/Arwa bint Harb) is also condemned. She actively harmed the Prophet ﷺ.',
          ur: 'اس کی بیوی (ام جمیل/اروی بنت حرب) بھی ملعون۔ اس نے فعال طور پر نبی ﷺ کو نقصان پہنچایا۔',
        },
        advanced: {
          balagha: {
            title: { en: 'Partnership in Evil', ur: 'برائی میں شراکت' },
            explanation: {
              en: 'وَامْرَأَتُهُ - "AND his wife" - she wasn\'t innocent; she was his partner in persecution.',
              ur: 'وَامْرَأَتُهُ - "اور اس کی بیوی" - وہ بے گناہ نہیں تھی؛ ظلم میں اس کی شریک تھی۔',
            },
          },
        },
      },
      {
        id: '111:4:2',
        position: 2,
        arabic: 'حَمَّالَةَ',
        transliteration: 'Hammalata',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح م ل',
        lemma: 'حَمَّالَة',
        meaning: { en: 'carrier of', ur: 'اٹھانے والی', hi: 'उठाने वाली' },
        grammarRole: 'badal or sifah',
        case: 'mansoob/marfoo',
        features: { type: 'noun', intensiveForm: true, gender: 'feminine' },
        grammarExplanations: {
          en: 'Intensive feminine form (فَعَّالَة) - she HABITUALLY carried firewood. Multiple meanings possible.',
          ur: 'مؤنث مبالغہ (فَعَّالَة) - وہ عادتاً لکڑیاں ڈھوتی۔ متعدد معانی ممکن۔',
        },
        advanced: {
          rootFamily: {
            root: 'ح م ل',
            meaning: { en: 'to carry, bear', ur: 'اٹھانا، برداشت کرنا' },
            words: [
              { word: 'حَمَلَ', meaning: { en: 'he carried', ur: 'اس نے اٹھایا' } },
              { word: 'حَمَّال', meaning: { en: 'porter', ur: 'قُلی' } },
              { word: 'حَمْل', meaning: { en: 'pregnancy, load', ur: 'حمل' } },
              { word: 'مَحْمُول', meaning: { en: 'carried, mobile', ur: 'محمول' } },
            ],
          },
          linguisticMiracle: {
            title: { en: 'Multiple Meanings', ur: 'متعدد معانی' },
            explanation: {
              en: 'حَمَّالَةَ الْحَطَبِ could mean: (1) She literally carried thorns to throw in Prophet\'s path, (2) She carried gossip/slander, (3) In Hell, she carries fuel.',
              ur: 'حَمَّالَةَ الْحَطَبِ کے معنی: (1) وہ واقعی کانٹے اٹھاتی نبی کے راستے میں ڈالنے، (2) غیبت/بہتان اٹھاتی، (3) جہنم میں ایندھن اٹھائے گی۔',
            },
          },
        },
      },
      {
        id: '111:4:3',
        position: 3,
        arabic: 'الْحَطَبِ',
        transliteration: 'al-Hatab',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ط ب',
        lemma: 'حَطَب',
        meaning: { en: 'firewood', ur: 'لکڑیاں', hi: 'लकड़ियाँ' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', definite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Firewood/fuel - both literal (thorns she threw) and metaphorical (fuel for Hell).',
          ur: 'لکڑیاں/ایندھن - حقیقی (کانٹے جو پھینکتی) اور استعاراتی (جہنم کا ایندھن) دونوں۔',
        },
        advanced: {
          rootFamily: {
            root: 'ح ط ب',
            meaning: { en: 'firewood, fuel', ur: 'ایندھن، لکڑی' },
            words: [
              { word: 'حَطَب', meaning: { en: 'firewood', ur: 'ایندھن' } },
              { word: 'حَطَّاب', meaning: { en: 'wood gatherer', ur: 'لکڑہارا' } },
              { word: 'اِحْتِطَاب', meaning: { en: 'gathering wood', ur: 'لکڑیاں جمع کرنا' } },
            ],
          },
          balagha: {
            title: { en: 'Humiliation', ur: 'ذلت' },
            explanation: {
              en: 'She was a noblewoman (Quraysh chief\'s sister). Being called "wood carrier" was severe humiliation.',
              ur: 'وہ شریف عورت تھی (قریش سردار کی بہن)۔ "لکڑیاں ڈھونے والی" کہلانا شدید ذلت۔',
            },
          },
        },
      },
    ],
    dependency: {
      root: 'امْرَأَتُهُ',
      structure: [
        { word: 'وَامْرَأَتُهُ', role: 'subject' },
        { word: 'حَمَّالَةَ الْحَطَبِ', role: 'badal/description', describes: 'امْرَأَتُهُ' },
      ],
    },
  },

  5: { // Ayah 5: فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ
    text: 'فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ',
    translation: {
      en: 'Around her neck is a rope of palm fiber',
      ur: 'اس کی گردن میں کھجور کی چھال کی رسی ہوگی',
      hi: 'उसकी गर्दन में खजूर की छाल की रस्सी होगी',
      bn: 'তার গলায় থাকবে খেজুর ছালের রশি',
      tr: 'Boynunda hurma lifinden bir ip olacak',
      id: 'di lehernya ada tali dari sabut',
    },
    words: [
      {
        id: '111:5:1',
        position: 1,
        arabic: 'فِي',
        transliteration: 'Fi',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        lemma: 'فِي',
        meaning: { en: 'Around/In', ur: 'میں', hi: 'में' },
        grammarRole: 'preposition',
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Preposition - "in/around her neck".',
          ur: 'حرف جر - "اس کی گردن میں/کے گرد"۔',
        },
      },
      {
        id: '111:5:2',
        position: 2,
        arabic: 'جِيدِهَا',
        transliteration: 'Jidiha',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ج ي د',
        lemma: 'جِيد',
        meaning: { en: 'her neck', ur: 'اس کی گردن', hi: 'उसकी गर्दन' },
        grammarRole: 'mudaf',
        case: 'majroor',
        features: { state: 'genitive', type: 'noun', possessive: '3rd-fem-sing' },
        grammarExplanations: {
          en: 'جِيد specifically means "neck adorned with jewelry". She wore expensive necklaces - now a coarse rope.',
          ur: 'جِيد خاص طور پر "زیورات والی گردن"۔ وہ مہنگے ہار پہنتی - اب موٹی رسی۔',
        },
        advanced: {
          rootFamily: {
            root: 'ج ي د',
            meaning: { en: 'neck, especially adorned neck', ur: 'گردن، خاص طور پر آراستہ' },
            words: [
              { word: 'جِيد', meaning: { en: 'neck (adorned)', ur: 'گردن (آراستہ)' } },
              { word: 'أَجْيَاد', meaning: { en: 'necks (plural)', ur: 'گردنیں' } },
            ],
          },
          balagha: {
            title: { en: 'From Luxury to Humiliation', ur: 'عیش سے ذلت تک' },
            explanation: {
              en: 'جِيد is used for necks adorned with jewelry. Her precious necklace is replaced with coarse rope - ultimate reversal.',
              ur: 'جِيد زیورات والی گردن کے لیے۔ اس کا قیمتی ہار موٹی رسی سے بدل گیا - حتمی الٹ۔',
            },
          },
        },
      },
      {
        id: '111:5:3',
        position: 3,
        arabic: 'حَبْلٌ',
        transliteration: 'Hablun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ب ل',
        lemma: 'حَبْل',
        meaning: { en: 'a rope', ur: 'رسی', hi: 'रस्सी' },
        grammarRole: 'mubtada-muakhkhar',
        case: 'marfoo',
        features: { state: 'nominative', indefinite: true, type: 'noun' },
        grammarExplanations: {
          en: 'The rope that binds her - could be physical (Hell) or metaphorical (her sins binding her).',
          ur: 'وہ رسی جو باندھے گی - جسمانی (جہنم) یا استعاراتی (اس کے گناہ باندھتے ہیں)۔',
        },
        advanced: {
          rootFamily: {
            root: 'ح ب ل',
            meaning: { en: 'rope, bond, connection', ur: 'رسی، بندھن' },
            words: [
              { word: 'حَبْل', meaning: { en: 'rope', ur: 'رسی' } },
              { word: 'حِبَال', meaning: { en: 'ropes', ur: 'رسیاں' } },
              { word: 'حَبْل الوَرِيد', meaning: { en: 'jugular vein (rope of vein)', ur: 'شہ رگ' } },
            ],
          },
        },
      },
      {
        id: '111:5:4',
        position: 4,
        arabic: 'مِّن',
        transliteration: 'Min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        lemma: 'مِن',
        meaning: { en: 'of', ur: 'سے', hi: 'से' },
        grammarRole: 'preposition',
        features: { type: 'preposition' },
        grammarExplanations: {
          en: 'Indicates the material - "made OF".',
          ur: 'مادہ بتاتا ہے - "سے بنی"۔',
        },
      },
      {
        id: '111:5:5',
        position: 5,
        arabic: 'مَّسَدٍ',
        transliteration: 'Masad',
        pos: ['N'],
        posLabel: 'N',
        root: 'م س د',
        lemma: 'مَسَد',
        meaning: { en: 'palm fiber', ur: 'کھجور کی چھال', hi: 'खजूर की छाल' },
        grammarRole: 'mudaf-ilayh',
        case: 'majroor',
        features: { state: 'genitive', indefinite: true, type: 'noun' },
        grammarExplanations: {
          en: 'Coarse palm fiber - used for cheap, rough ropes. Ultimate humiliation for a wealthy woman.',
          ur: 'موٹی کھجور کی چھال - سستی، کھردری رسیوں کے لیے۔ دولت مند عورت کی حتمی ذلت۔',
        },
        advanced: {
          rootFamily: {
            root: 'م س د',
            meaning: { en: 'palm fiber, twisted rope', ur: 'کھجور کی چھال، بٹی ہوئی رسی' },
            words: [
              { word: 'مَسَد', meaning: { en: 'palm fiber rope', ur: 'کھجور کی رسی' } },
            ],
          },
          balagha: {
            title: { en: 'Surah Named After This', ur: 'سورہ کا نام اسی سے' },
            explanation: {
              en: 'The surah is named "Al-Masad" (The Palm Fiber) - forever linking her to this humiliating rope.',
              ur: 'سورہ کا نام "المسد" (کھجور کی چھال) - ہمیشہ کے لیے اسے اس ذلت آمیز رسی سے جوڑا۔',
            },
          },
          linguisticMiracle: {
            title: { en: 'Prophecy Fulfilled', ur: 'پیشگوئی پوری ہوئی' },
            explanation: {
              en: 'Both Abu Lahab and his wife died as disbelievers. This surah was a test - they could have accepted Islam to disprove it. They never did.',
              ur: 'ابو لہب اور اس کی بیوی دونوں کافر مرے۔ یہ سورہ امتحان تھی - وہ اسلام قبول کر کے جھوٹی ثابت کر سکتے۔ انہوں نے کبھی نہیں کیا۔',
            },
          },
        },
      },
    ],
    dependency: {
      root: 'حَبْلٌ',
      structure: [
        { word: 'فِي جِيدِهَا', role: 'prep-phrase', location: true },
        { word: 'حَبْلٌ', role: 'subject (delayed)' },
        { word: 'مِّن مَّسَدٍ', role: 'adjective-phrase', material: true },
      ],
    },
  },
};

export default SURAH_111_TREEBANK;
