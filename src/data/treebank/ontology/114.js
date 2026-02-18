/**
 * Surah An-Nas (114) - Ontology of Quranic Concepts
 * The Surah of Seeking Refuge from Internal Evils
 *
 * Theme: Protection from internal whispers - the waswas of Shaytan
 * Part of: Al-Mu'awwidhatayn (The Two Protections) with Al-Falaq
 */

const SURAH_114_ONTOLOGY = {
  surahId: 114,
  name: {
    en: 'An-Nas - Seeking Refuge from Internal Evils',
    ur: 'الناس - اندرونی برائیوں سے پناہ',
    hi: 'अन-नास - अंदरूनी बुराइयों से पनाह',
    ar: 'الناس',
  },
  description: {
    en: 'Protection from evils INSIDE ourselves - the whispers that attack our hearts. Together with Al-Falaq, these are the "Mu\'awwidhatayn" (Two Protections).',
    ur: 'اپنے اندر کی برائیوں سے حفاظت - وہ وسوسے جو ہمارے دلوں پر حملہ کرتے ہیں۔ سورۃ الفلق کے ساتھ یہ "معوذتین" (دو پناہیں) ہیں۔',
    hi: 'अपने अंदर की बुराइयों से हिफ़ाज़त - वो वसवसे जो हमारे दिलों पर हमला करते हैं। सूरह अल-फ़लक़ के साथ यह "मुअव्विज़तैन" हैं।',
  },

  categories: {
    divineProtector: {
      id: 'divine-protector',
      label: { en: 'The Divine Protector', ur: 'الہی محافظ', hi: 'इलाही हिफ़ाज़त करने वाला' },
      color: '#8B5CF6',
      icon: 'Shield',
      description: {
        en: 'Three attributes of Allah showing complete authority over mankind',
        ur: 'اللہ کی تین صفات جو انسانوں پر مکمل اختیار دکھاتی ہیں',
      },
      concepts: [
        {
          id: 'rabb-an-nas',
          arabic: 'رَبِّ النَّاسِ',
          transliteration: 'Rabb an-Nas',
          meaning: { en: 'Lord of Mankind', ur: 'انسانوں کا رب', hi: 'इंसानों का रब' },
          ayah: 1,
          details: {
            en: 'The One who nurtures, sustains, and cares for all humanity. رَبّ implies continuous care and development.',
            ur: 'وہ جو تمام انسانوں کی پرورش، پالن اور دیکھ بھال کرتا ہے۔ رَبّ مسلسل دیکھ بھال اور نشوونما کا مطلب ہے۔',
          },
          characteristic: {
            en: 'First attribute: CARE - He nurtures us',
            ur: 'پہلی صفت: دیکھ بھال - وہ ہماری پرورش کرتا ہے',
          },
        },
        {
          id: 'malik-an-nas',
          arabic: 'مَلِكِ النَّاسِ',
          transliteration: 'Malik an-Nas',
          meaning: { en: 'King of Mankind', ur: 'انسانوں کا بادشاہ', hi: 'इंसानों का बादशाह' },
          ayah: 2,
          details: {
            en: 'The sovereign ruler with absolute authority. مَلِك means He has power to command, forbid, and protect.',
            ur: 'مطلق اختیار والا حاکم اعلیٰ۔ مَلِك کا مطلب اس کے پاس حکم دینے، منع کرنے اور حفاظت کرنے کی طاقت ہے۔',
          },
          characteristic: {
            en: 'Second attribute: AUTHORITY - He rules us',
            ur: 'دوسری صفت: اختیار - وہ ہم پر حکمرانی کرتا ہے',
          },
        },
        {
          id: 'ilah-an-nas',
          arabic: 'إِلَٰهِ النَّاسِ',
          transliteration: 'Ilah an-Nas',
          meaning: { en: 'God of Mankind', ur: 'انسانوں کا معبود', hi: 'इंसानों का माबूद' },
          ayah: 3,
          details: {
            en: 'The One worthy of worship. إِلٰه means only He deserves our devotion, prayer, and seeking of refuge.',
            ur: 'وہ جو عبادت کا مستحق ہے۔ إِلٰه کا مطلب صرف وہ ہماری عقیدت، نماز اور پناہ مانگنے کا مستحق ہے۔',
          },
          characteristic: {
            en: 'Third attribute: WORSHIP - He alone deserves our devotion',
            ur: 'تیسری صفت: عبادت - صرف وہ ہماری عقیدت کا مستحق',
          },
        },
      ],
    },

    internalEvil: {
      id: 'internal-evil',
      label: { en: 'The Internal Evil', ur: 'اندرونی برائی', hi: 'अंदरूनी बुराई' },
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: {
        en: 'The waswas - evil that attacks from within our own thoughts',
        ur: 'وسواس - برائی جو ہمارے اپنے خیالات کے اندر سے حملہ کرتی ہے',
      },
      concepts: [
        {
          id: 'waswas',
          arabic: 'الْوَسْوَاسِ',
          transliteration: 'Al-Waswas',
          meaning: { en: 'The Whisperer', ur: 'وسوسہ ڈالنے والا', hi: 'वसवसा डालने वाला' },
          ayah: 4,
          details: {
            en: 'Shaytan who whispers evil thoughts, doubts, and temptations directly into the heart. The whispers are subtle, persistent, and deceptive.',
            ur: 'شیطان جو براہ راست دل میں برے خیالات، شکوک اور آزمائشیں پھونکتا ہے۔ وسوسے لطیف، مستقل اور دھوکے باز ہیں۔',
          },
          characteristic: {
            en: '🔊 The word itself sounds like a whisper - onomatopoeia in Arabic!',
            ur: '🔊 لفظ خود سرگوشی جیسی آواز ہے - عربی میں حکایت صوت!',
          },
        },
        {
          id: 'khannas',
          arabic: 'الْخَنَّاسِ',
          transliteration: 'Al-Khannas',
          meaning: { en: 'The Retreating One', ur: 'پیچھے ہٹنے والا', hi: 'पीछे हटने वाला' },
          ayah: 4,
          details: {
            en: 'Shaytan who RETREATS when Allah is remembered. This reveals his weakness - dhikr (remembrance) defeats him.',
            ur: 'شیطان جو اللہ کی یاد پر پیچھے ہٹ جاتا ہے۔ یہ اس کی کمزوری ظاہر کرتا ہے - ذکر اسے شکست دیتا ہے۔',
          },
          characteristic: {
            en: '🛡️ SOLUTION: Say "A\'udhu billah" and he retreats!',
            ur: '🛡️ حل: "أعوذ بالله" کہو اور وہ پیچھے ہٹ جائے گا!',
          },
        },
        {
          id: 'whisper-location',
          arabic: 'فِي صُدُورِ النَّاسِ',
          transliteration: 'Fi Sudoor an-Nas',
          meaning: { en: 'In the hearts of mankind', ur: 'انسانوں کے سینوں میں', hi: 'इंसानों के सीनों में' },
          ayah: 5,
          details: {
            en: 'The battlefield is INTERNAL - in our chests (hearts). This is where intentions form and decisions are made.',
            ur: 'میدان جنگ اندرونی ہے - ہمارے سینوں (دلوں) میں۔ یہیں نیتیں بنتی ہیں اور فیصلے ہوتے ہیں۔',
          },
        },
      ],
    },

    sourcesOfEvil: {
      id: 'sources-of-evil',
      label: { en: 'Sources of Evil', ur: 'برائی کے ذرائع', hi: 'बुराई के ज़रिए' },
      color: '#F59E0B',
      icon: 'Users',
      description: {
        en: 'Two categories of whisperers - seen and unseen',
        ur: 'وسوسہ ڈالنے والوں کی دو قسمیں - دکھائی دینے والے اور نہ دینے والے',
      },
      concepts: [
        {
          id: 'jinn-devils',
          arabic: 'الْجِنَّةِ',
          transliteration: 'Al-Jinnati',
          meaning: { en: 'Jinn (unseen devils)', ur: 'جن (غیر مرئی شیطان)', hi: 'जिन्न (अदृश्य शैतान)' },
          ayah: 6,
          details: {
            en: 'Evil jinn including Iblis (Shaytan) who whisper from the unseen. They enter through forgotten dhikr, empty hearts, and moments of heedlessness.',
            ur: 'برے جن بشمول ابلیس (شیطان) جو غیب سے سرگوشی کرتے ہیں۔ وہ بھولے ہوئے ذکر، خالی دلوں اور غفلت کے لمحوں سے داخل ہوتے ہیں۔',
          },
          characteristic: {
            en: '👁️ INVISIBLE - Cannot see them, but can feel their effect (doubt, anxiety, evil thoughts)',
            ur: '👁️ غیر مرئی - دکھائی نہیں دیتے، لیکن ان کا اثر محسوس ہوتا ہے (شک، بے چینی، برے خیالات)',
          },
        },
        {
          id: 'human-devils',
          arabic: 'النَّاسِ',
          transliteration: 'An-Nas',
          meaning: { en: 'Humans (seen devils)', ur: 'انسان (مرئی شیطان)', hi: 'इंसान (दिखाई देने वाले शैतान)' },
          ayah: 6,
          details: {
            en: 'Human "shayateen" - bad friends, misleading advisors, negative influences who lead us astray through their words.',
            ur: 'انسانی "شیاطین" - برے دوست، گمراہ کرنے والے مشیر، منفی اثرات جو اپنے الفاظ سے گمراہ کرتے ہیں۔',
          },
          characteristic: {
            en: '⚠️ VISIBLE - Can see them, but often don\'t recognize the danger until too late',
            ur: '⚠️ مرئی - دکھائی دیتے ہیں، لیکن اکثر خطرے کو بہت دیر سے پہچانتے ہیں',
          },
        },
      ],
    },

    protection: {
      id: 'protection',
      label: { en: 'Protection & Cure', ur: 'حفاظت اور علاج', hi: 'हिफ़ाज़त और इलाज' },
      color: '#10B981',
      icon: 'Heart',
      description: {
        en: 'How to defend against the Whisperer',
        ur: 'وسوسے والے سے کیسے بچیں',
      },
      concepts: [
        {
          id: 'isti-adhah',
          arabic: 'أَعُوذُ بِاللَّهِ',
          transliteration: "A'udhu Billah",
          meaning: { en: 'I seek refuge in Allah', ur: 'میں اللہ کی پناہ مانگتا ہوں', hi: 'मैं अल्लाह की पनाह माँगता हूँ' },
          details: {
            en: 'The core action - actively seeking Allah\'s protection. Not passive hope, but active supplication.',
            ur: 'بنیادی عمل - فعال طور پر اللہ کی حفاظت مانگنا۔ غیر فعال امید نہیں، بلکہ فعال دعا۔',
          },
          characteristic: {
            en: 'The Whisperer retreats the moment you turn to Allah',
            ur: 'جس لمحے آپ اللہ کی طرف متوجہ ہوں وسوسہ کار پیچھے ہٹ جاتا ہے',
          },
        },
        {
          id: 'dhikr',
          arabic: 'ذِكْرُ اللَّهِ',
          transliteration: 'Dhikr Allah',
          meaning: { en: 'Remembrance of Allah', ur: 'اللہ کی یاد', hi: 'अल्लाह की याद' },
          details: {
            en: 'Continuous remembrance keeps Shaytan away. When the heart is filled with Allah, there is no room for waswas.',
            ur: 'مسلسل یاد شیطان کو دور رکھتی ہے۔ جب دل اللہ سے بھرا ہو، وسواس کی جگہ نہیں۔',
          },
        },
        {
          id: 'good-company',
          arabic: 'الصُّحْبَةُ الصَّالِحَةُ',
          transliteration: 'As-Suhbah as-Salihah',
          meaning: { en: 'Good Company', ur: 'نیک صحبت', hi: 'नेक सोहबत' },
          details: {
            en: 'Since humans can be whisperers (ayah 6), choose friends wisely. Good company protects from human shayateen.',
            ur: 'چونکہ انسان بھی وسوسہ کار ہو سکتے ہیں (آیت 6)، دوست سوچ سمجھ کر چنیں۔ نیک صحبت انسانی شیاطین سے بچاتی ہے۔',
          },
        },
      ],
    },
  },

  relationships: [
    {
      from: { en: 'Rabb (Lord)', ur: 'رب (پالنہار)', ar: 'رَبّ' },
      to: { en: 'Malik (King)', ur: 'ملک (بادشاہ)', ar: 'مَلِك' },
      type: 'progression',
      explanation: {
        en: 'From nurturing (Rabb) to authority (Malik) - He cares for us AND rules over us',
        ur: 'پرورش (رب) سے اختیار (ملک) تک - وہ ہماری دیکھ بھال کرتا ہے اور ہم پر حکمرانی بھی',
      },
    },
    {
      from: { en: 'Malik (King)', ur: 'ملک (بادشاہ)', ar: 'مَلِك' },
      to: { en: 'Ilah (God)', ur: 'الہ (معبود)', ar: 'إِلٰه' },
      type: 'progression',
      explanation: {
        en: 'From authority (Malik) to worship (Ilah) - His rule demands our worship',
        ur: 'اختیار (ملک) سے عبادت (الہ) تک - اس کی حکمرانی ہماری عبادت کا تقاضا کرتی ہے',
      },
    },
    {
      from: { en: 'Waswas (Whisperer)', ur: 'وسواس (سرگوشی کرنے والا)', ar: 'الْوَسْوَاسِ' },
      to: { en: 'Khannas (Retreater)', ur: 'خناس (پیچھے ہٹنے والا)', ar: 'الْخَنَّاسِ' },
      type: 'opposition',
      explanation: {
        en: 'The enemy has two states: attacking (waswas) and retreating (khannas) - he retreats when we remember Allah',
        ur: 'دشمن کی دو حالتیں ہیں: حملہ (وسواس) اور پسپائی (خناس) - جب ہم اللہ کو یاد کریں وہ پیچھے ہٹتا ہے',
      },
    },
    {
      from: { en: 'Jinn Devils', ur: 'جنی شیاطین', ar: 'الْجِنَّةِ' },
      to: { en: 'Human Devils', ur: 'انسانی شیاطین', ar: 'النَّاسِ' },
      type: 'parallel',
      explanation: {
        en: 'Both jinn and humans can whisper evil - we need protection from BOTH types',
        ur: 'جن اور انسان دونوں برائی کی سرگوشی کر سکتے ہیں - ہمیں دونوں سے حفاظت چاہیے',
      },
    },
  ],

  thematicFlow: {
    title: {
      en: 'The Complete Protection from Internal Evil',
      ur: 'اندرونی برائی سے مکمل حفاظت',
      hi: 'अंदरूनी बुराई से मुकम्मल हिफ़ाज़त',
    },
    stages: [
      {
        ayah: 1,
        stage: { en: 'Establish the Caregiver', ur: 'دیکھ بھال کرنے والے کو قائم کرنا' },
        description: {
          en: 'Allah as Rabb - the One who nurtures and protects. First, know WHO you are seeking refuge in.',
          ur: 'اللہ بطور رب - جو پرورش اور حفاظت کرتا ہے۔ پہلے جانو کس کی پناہ مانگ رہے ہو۔',
        },
        color: '#8B5CF6',
      },
      {
        ayah: 2,
        stage: { en: 'Acknowledge the Authority', ur: 'اختیار کو تسلیم کرنا' },
        description: {
          en: 'Allah as Malik - the Sovereign King. He has POWER to protect you.',
          ur: 'اللہ بطور ملک - حاکم اعلیٰ۔ اس کے پاس تمہاری حفاظت کی طاقت ہے۔',
        },
        color: '#6366F1',
      },
      {
        ayah: 3,
        stage: { en: 'Surrender in Worship', ur: 'عبادت میں سرتسلیم' },
        description: {
          en: 'Allah as Ilah - the only One worthy of worship. This surrender IS your protection.',
          ur: 'اللہ بطور الہ - عبادت کا واحد مستحق۔ یہ سرتسلیم ہی تمہاری حفاظت ہے۔',
        },
        color: '#3B82F6',
      },
      {
        ayah: 4,
        stage: { en: 'Identify the Enemy', ur: 'دشمن کی پہچان' },
        description: {
          en: 'The Waswas (Whisperer) who is also Khannas (Retreater). Know your enemy and his weakness.',
          ur: 'وسواس (سرگوشی کرنے والا) جو خناس (پیچھے ہٹنے والا) بھی ہے۔ اپنے دشمن اور اس کی کمزوری کو جانو۔',
        },
        color: '#EF4444',
      },
      {
        ayah: 5,
        stage: { en: 'Locate the Battlefield', ur: 'میدان جنگ کا تعین' },
        description: {
          en: 'The battle is in your HEART (sudoor). Be vigilant about what enters your chest.',
          ur: 'جنگ تمہارے دل (صدور) میں ہے۔ جو تمہارے سینے میں داخل ہو اس سے ہوشیار رہو۔',
        },
        color: '#F59E0B',
      },
      {
        ayah: 6,
        stage: { en: 'Recognize All Threats', ur: 'تمام خطرات کی پہچان' },
        description: {
          en: 'Both jinn AND humans can whisper evil. Protect yourself from both visible and invisible enemies.',
          ur: 'جن اور انسان دونوں برائی کی سرگوشی کر سکتے ہیں۔ نظر آنے والے اور غیر مرئی دونوں دشمنوں سے بچو۔',
        },
        color: '#10B981',
      },
    ],
  },

  crossReferences: {
    title: {
      en: 'Related Verses in Other Surahs',
      ur: 'دیگر سورتوں میں متعلقہ آیات',
    },
    references: [
      {
        surah: 113,
        name: { en: 'Al-Falaq', ur: 'الفلق' },
        connection: {
          en: 'Sister surah - Al-Falaq protects from EXTERNAL evils, An-Nas from INTERNAL evils. Together: complete protection.',
          ur: 'بہن سورہ - الفلق بیرونی برائیوں سے بچاتی ہے، الناس اندرونی سے۔ ملا کر: مکمل حفاظت۔',
        },
        verses: ['113:1-5'],
      },
      {
        surah: 7,
        ayah: 200,
        name: { en: 'Al-Araf', ur: 'الاعراف' },
        arabic: 'وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ',
        connection: {
          en: '"If a suggestion from Shaytan assails you, seek refuge with Allah"',
          ur: '"اگر شیطان کی طرف سے کوئی اکساہٹ آئے تو اللہ کی پناہ مانگو"',
        },
      },
      {
        surah: 23,
        ayah: 97,
        name: { en: 'Al-Muminun', ur: 'المومنون' },
        arabic: 'وَقُل رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ',
        connection: {
          en: '"Say: My Lord, I seek refuge in You from the incitements of the devils"',
          ur: '"کہو: میرے رب، میں شیاطین کے اکسانے سے تیری پناہ مانگتا ہوں"',
        },
      },
      {
        surah: 41,
        ayah: 36,
        name: { en: 'Fussilat', ur: 'فصلت' },
        arabic: 'وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ',
        connection: {
          en: 'Same command - seek refuge from Shaytan\'s incitement',
          ur: 'وہی حکم - شیطان کے اکسانے سے پناہ مانگو',
        },
      },
      {
        surah: 50,
        ayah: 16,
        name: { en: 'Qaf', ur: 'ق' },
        arabic: 'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
        connection: {
          en: '"We are closer to him than his jugular vein" - Allah is closer than any whisperer',
          ur: '"ہم اس کی شہ رگ سے بھی زیادہ قریب ہیں" - اللہ کسی بھی وسوسے والے سے زیادہ قریب ہے',
        },
      },
    ],
  },

  comparisonWithFalaq: {
    title: {
      en: 'Al-Falaq vs An-Nas: The Two Protections',
      ur: 'الفلق بمقابلہ الناس: دو پناہیں',
    },
    comparison: [
      {
        aspect: { en: 'Type of Evil', ur: 'برائی کی قسم' },
        alFalaq: { en: 'External evils', ur: 'بیرونی برائیاں' },
        anNas: { en: 'Internal evils', ur: 'اندرونی برائیاں' },
      },
      {
        aspect: { en: 'Enemy', ur: 'دشمن' },
        alFalaq: { en: 'Creation (darkness, magic, envy)', ur: 'مخلوقات (اندھیرا، جادو، حسد)' },
        anNas: { en: 'Shaytan and human whisperers', ur: 'شیطان اور انسانی وسوسے کار' },
      },
      {
        aspect: { en: 'Location', ur: 'مقام' },
        alFalaq: { en: 'Outside us', ur: 'ہمارے باہر' },
        anNas: { en: 'Inside our hearts', ur: 'ہمارے دلوں کے اندر' },
      },
      {
        aspect: { en: 'Divine Attribute', ur: 'الہی صفت' },
        alFalaq: { en: 'Rabb al-Falaq (Lord of Daybreak)', ur: 'رب الفلق (صبح کا رب)' },
        anNas: { en: 'Rabb, Malik, Ilah (Lord, King, God)', ur: 'رب، ملک، الہ' },
      },
      {
        aspect: { en: 'Method of Harm', ur: 'نقصان کا طریقہ' },
        alFalaq: { en: 'Physical/magical harm', ur: 'جسمانی/جادوئی نقصان' },
        anNas: { en: 'Psychological/spiritual harm', ur: 'نفسیاتی/روحانی نقصان' },
      },
    ],
  },

  practicalApplication: {
    title: {
      en: 'When to Recite',
      ur: 'کب پڑھیں',
    },
    situations: [
      {
        situation: { en: 'Evil thoughts entering mind', ur: 'برے خیالات ذہن میں آنا' },
        benefit: { en: 'Immediately drives away waswas', ur: 'فوری طور پر وسواس کو دور کرتا ہے' },
      },
      {
        situation: { en: 'Doubt in faith (iman)', ur: 'ایمان میں شک' },
        benefit: { en: 'Strengthens heart against doubt', ur: 'شک کے خلاف دل کو مضبوط کرتا ہے' },
      },
      {
        situation: { en: 'Bad company influence', ur: 'بری صحبت کا اثر' },
        benefit: { en: 'Protection from human shayateen', ur: 'انسانی شیاطین سے حفاظت' },
      },
      {
        situation: { en: 'Before sleep', ur: 'سونے سے پہلے' },
        benefit: { en: 'Protection during vulnerable state', ur: 'کمزور حالت میں حفاظت' },
      },
      {
        situation: { en: 'After Fajr and Maghrib', ur: 'فجر اور مغرب کے بعد' },
        benefit: { en: '3 times each - Sunnah protection', ur: '3 مرتبہ ہر ایک - سنت مطابق حفاظت' },
      },
    ],
  },

  hadith: {
    virtue: {
      text: {
        ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ وَالْمُعَوِّذَتَيْنِ حِينَ تُمْسِي وَحِينَ تُصْبِحُ ثَلَاثَ مَرَّاتٍ تَكْفِيكَ مِنْ كُلِّ شَيْءٍ',
        en: 'Recite Surah Al-Ikhlas and Al-Mu\'awwidhatayn three times in the morning and evening, and they will suffice you against everything.',
        ur: 'سورۃ الاخلاص اور معوذتین صبح اور شام تین تین بار پڑھو، یہ تمہیں ہر چیز سے کافی ہوں گی۔',
      },
      source: 'Sunan Abu Dawud, Jami at-Tirmidhi',
      narrator: 'Abdullah ibn Khubayb',
    },
    additional: [
      {
        text: {
          ar: 'مَا تَعَوَّذَ الْمُتَعَوِّذُونَ بِمِثْلِهِمَا',
          en: 'No one seeks refuge with anything like these two surahs.',
          ur: 'ان دونوں سورتوں جیسی کسی چیز سے کسی نے پناہ نہیں مانگی۔',
        },
        source: 'Sunan an-Nasai',
      },
    ],
  },

  uniqueInsight: {
    title: { en: 'The Ultimate Insight', ur: 'حتمی بصیرت' },
    content: {
      en: 'Surah An-Nas reveals the most dangerous enemy is not outside but INSIDE. While Al-Falaq protects from external evils (darkness, magic, envy), An-Nas protects from the enemy within - our own corrupted thoughts planted by the Whisperer. The solution? Three divine attributes (Rabb, Malik, Ilah) against one enemy. Allah\'s care, authority, and right to worship overwhelm any whisper.',
      ur: 'سورۃ الناس ظاہر کرتی ہے کہ سب سے خطرناک دشمن باہر نہیں بلکہ اندر ہے۔ جبکہ الفلق بیرونی برائیوں (اندھیرا، جادو، حسد) سے بچاتی ہے، الناس اندرونی دشمن سے بچاتی ہے - ہمارے اپنے خراب خیالات جو وسوسہ کار نے بوئے۔ حل؟ ایک دشمن کے خلاف تین الہی صفات (رب، ملک، الہ)۔ اللہ کی دیکھ بھال، اختیار، اور عبادت کا حق کسی بھی وسوسے پر غالب آتے ہیں۔',
    },
  },
};

export default SURAH_114_ONTOLOGY;
