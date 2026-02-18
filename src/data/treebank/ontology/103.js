/**
 * Surah Al-Asr (103) - Ontology of Quranic Concepts
 * The Summary of the Entire Quran in 3 Verses
 *
 * Theme: Time, human loss, and the four conditions for salvation
 * Imam Shafi'i: "If only this surah was revealed, it would suffice for mankind"
 */

const SURAH_103_ONTOLOGY = {
  surahId: 103,
  name: {
    en: 'Al-Asr - Time & The Formula for Success',
    ur: 'العصر - وقت اور کامیابی کا فارمولا',
    hi: 'अल-अस्र - वक़्त और कामयाबी का फ़ॉर्मूला',
    ar: 'العصر',
  },
  description: {
    en: 'The shortest summary of the entire Quran: All humans are losing... except those who fulfill four conditions. Imam Shafi\'i said if only this surah was revealed, it would be enough guidance for humanity.',
    ur: 'پورے قرآن کا مختصر ترین خلاصہ: تمام انسان خسارے میں ہیں... سوائے جو چار شرائط پوری کریں۔ امام شافعی نے فرمایا اگر صرف یہی سورہ نازل ہوتی، انسانیت کی رہنمائی کے لیے کافی تھی۔',
    hi: 'पूरे क़ुरआन का सबसे छोटा ख़ुलासा: सभी इंसान घाटे में हैं... सिवाय जो चार शर्तें पूरी करें। इमाम शाफ़ई ने फ़रमाया अगर सिर्फ़ यही सूरह नाज़िल होती, इंसानियत की रहनुमाई के लिए काफ़ी थी।',
  },

  categories: {
    timeOath: {
      id: 'time-oath',
      label: { en: 'The Oath by Time', ur: 'وقت کی قسم', hi: 'वक़्त की क़सम' },
      color: '#F59E0B',
      icon: 'Clock',
      description: {
        en: 'Allah swears by time, the most precious resource',
        ur: 'اللہ وقت کی قسم کھاتا ہے، سب سے قیمتی وسیلہ',
      },
      concepts: [
        {
          id: 'asr-time',
          arabic: 'الْعَصْرِ',
          transliteration: "Al-'Asr",
          meaning: { en: 'Time/Era/Afternoon', ur: 'وقت/زمانہ/عصر', hi: 'वक़्त/ज़माना/अस्र' },
          ayah: 1,
          details: {
            en: 'When Allah swears by something, He highlights its importance. Time is humanity\'s most valuable and irreplaceable resource.',
            ur: 'جب اللہ کسی چیز کی قسم کھائے، اس کی اہمیت ظاہر ہوتی ہے۔ وقت انسانیت کا سب سے قیمتی اور ناقابل تبدیل وسیلہ ہے۔',
          },
          characteristic: {
            en: 'عَصْر shares root with "squeeze" (عَصِير = juice). Time is constantly being squeezed out of our lives!',
            ur: 'عَصْر "نچوڑنا" (عَصِير = رس) سے ملتا ہے۔ وقت ہماری زندگیوں سے مسلسل نچوڑا جا رہا ہے!',
          },
        },
        {
          id: 'multiple-meanings',
          arabic: 'العَصْر',
          transliteration: "Al-'Asr",
          meaning: { en: 'Multiple Meanings', ur: 'متعدد معانی', hi: 'कई मायने' },
          details: {
            en: 'Al-Asr can mean: (1) Time in general, (2) Asr prayer time (late afternoon), (3) A historical era, (4) The lifetime of Prophet Muhammad ﷺ, (5) Human lifespan.',
            ur: 'العصر کے معنی: (1) عمومی وقت، (2) نماز عصر کا وقت، (3) تاریخی دور، (4) محمد ﷺ کا زمانہ، (5) انسانی عمر۔',
          },
        },
      ],
    },

    humanCondition: {
      id: 'human-condition',
      label: { en: 'The Human Condition', ur: 'انسانی حالت', hi: 'इंसानी हालत' },
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: {
        en: 'The default state of all humans',
        ur: 'تمام انسانوں کی بنیادی حالت',
      },
      concepts: [
        {
          id: 'universal-loss',
          arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
          transliteration: 'Inna al-Insana la-fi Khusr',
          meaning: { en: 'Indeed mankind is in loss', ur: 'بیشک انسان خسارے میں ہے', hi: 'बेशक इंसान घाटे में है' },
          ayah: 2,
          details: {
            en: 'Three emphatic particles (إِنَّ، لَ، فِي) stress certainty. ALL humans are in loss - this is the DEFAULT, not the exception.',
            ur: 'تین حروف تاکید (إِنَّ، لَ، فِي) یقین پر زور۔ تمام انسان خسارے میں - یہ بنیادی حالت ہے، استثناء نہیں۔',
          },
          characteristic: {
            en: 'خُسْر is a business term - "loss in trade". Life is a transaction where time is your capital.',
            ur: 'خُسْر کاروباری اصطلاح ہے - "تجارتی نقصان"۔ زندگی سودا ہے جہاں وقت تمہارا سرمایہ ہے۔',
          },
        },
        {
          id: 'types-of-loss',
          meaning: { en: 'What Is Being Lost?', ur: 'کیا کھو رہے ہیں؟', hi: 'क्या खो रहे हैं?' },
          details: {
            en: 'The indefinite خُسْرٍ encompasses ALL forms of loss: time, health, opportunities, afterlife rewards, Allah\'s pleasure, one\'s potential.',
            ur: 'نکرہ خُسْرٍ تمام قسم کے نقصان پر محیط: وقت، صحت، مواقع، آخرت کے اجر، اللہ کی رضا، اپنی صلاحیت۔',
          },
        },
      ],
    },

    fourConditions: {
      id: 'four-conditions',
      label: { en: 'The Four Conditions for Success', ur: 'کامیابی کی چار شرائط', hi: 'कामयाबी की चार शर्तें' },
      color: '#10B981',
      icon: 'CheckCircle',
      description: {
        en: 'The only way to escape loss - all four are required',
        ur: 'خسارے سے بچنے کا واحد راستہ - چاروں ضروری ہیں',
      },
      concepts: [
        {
          id: 'condition-1-faith',
          arabic: 'آمَنُوا',
          transliteration: 'Amanu',
          meaning: { en: '1. Faith/Belief', ur: '1. ایمان', hi: '1. ईमान' },
          ayah: 3,
          details: {
            en: 'CONDITION 1: Faith in Allah, His messengers, books, angels, Day of Judgment, and divine decree. The foundation of everything.',
            ur: 'شرط 1: اللہ، رسولوں، کتابوں، فرشتوں، قیامت، اور تقدیر پر ایمان۔ ہر چیز کی بنیاد۔',
          },
          characteristic: {
            en: 'INTERNAL: Faith is in the HEART. You can\'t see it, but everything else depends on it.',
            ur: 'اندرونی: ایمان دل میں ہے۔ دکھائی نہیں دیتا، مگر سب کچھ اسی پر منحصر۔',
          },
        },
        {
          id: 'condition-2-deeds',
          arabic: 'وَعَمِلُوا الصَّالِحَاتِ',
          transliteration: "Wa-'amilu as-Salihat",
          meaning: { en: '2. Righteous Deeds', ur: '2. نیک اعمال', hi: '2. नेक अमल' },
          ayah: 3,
          details: {
            en: 'CONDITION 2: Faith must produce action. Dead faith without works is insufficient. Deeds prove sincerity of belief.',
            ur: 'شرط 2: ایمان کو عمل پیدا کرنا چاہیے۔ بغیر اعمال کے مردہ ایمان ناکافی۔ اعمال یقین کی سچائی ثابت کرتے ہیں۔',
          },
          characteristic: {
            en: 'EXTERNAL: Deeds are visible ACTIONS. Salah, charity, helping others - what the body does.',
            ur: 'بیرونی: اعمال دکھائی دینے والے عمل ہیں۔ نماز، صدقہ، مدد - جسم کیا کرتا ہے۔',
          },
        },
        {
          id: 'condition-3-truth',
          arabic: 'وَتَوَاصَوْا بِالْحَقِّ',
          transliteration: "Wa-tawasau bil-Haqq",
          meaning: { en: '3. Advising to Truth', ur: '3. حق کی نصیحت', hi: '3. हक़ की नसीहत' },
          ayah: 3,
          details: {
            en: 'CONDITION 3: Not enough to be good alone - you must call others to truth. Islam is inherently social; no "solo spirituality".',
            ur: 'شرط 3: اکیلے اچھا ہونا کافی نہیں - دوسروں کو حق کی طرف بلانا ہوگا۔ اسلام فطرتاً سماجی ہے؛ "اکیلی روحانیت" نہیں۔',
          },
          characteristic: {
            en: 'SOCIAL: تَوَاصَوْا (Form VI) = MUTUAL action. Not one-way preaching, but community supporting each other.',
            ur: 'سماجی: تَوَاصَوْا (باب تفاعل) = دو طرفہ عمل۔ یکطرفہ تبلیغ نہیں، برادری ایک دوسرے کی مدد۔',
          },
        },
        {
          id: 'condition-4-patience',
          arabic: 'وَتَوَاصَوْا بِالصَّبْرِ',
          transliteration: "Wa-tawasau bis-Sabr",
          meaning: { en: '4. Advising to Patience', ur: '4. صبر کی نصیحت', hi: '4. सब्र की नसीहत' },
          ayah: 3,
          details: {
            en: 'CONDITION 4: Truth invites opposition. Without patience, the first three collapse. Patience is the glue holding everything together.',
            ur: 'شرط 4: حق مخالفت دعوت دیتا ہے۔ صبر کے بغیر پہلی تینوں ٹوٹ جائیں۔ صبر وہ گوند ہے جو سب کو جوڑے رکھتا ہے۔',
          },
          characteristic: {
            en: 'PROTECTIVE: Patience is the shield that preserves faith, deeds, and truth in times of hardship.',
            ur: 'تحفظ: صبر وہ ڈھال ہے جو مشکلات میں ایمان، عمل اور حق کو محفوظ رکھتا ہے۔',
          },
        },
      ],
    },

    whyAllFour: {
      id: 'why-all-four',
      label: { en: 'Why All Four Are Required', ur: 'چاروں کیوں ضروری ہیں', hi: 'चारों क्यों ज़रूरी हैं' },
      color: '#8B5CF6',
      icon: 'Link',
      description: {
        en: 'Each condition is essential - missing one leads to loss',
        ur: 'ہر شرط ضروری ہے - ایک بھی چھوٹی تو خسارہ',
      },
      concepts: [
        {
          id: 'without-faith',
          meaning: { en: 'Without Faith', ur: 'ایمان کے بغیر', hi: 'ईमान के बग़ैर' },
          details: {
            en: 'Good deeds without faith = no reward in afterlife. A kind atheist helps others but has no connection to Allah.',
            ur: 'ایمان کے بغیر نیک عمل = آخرت میں اجر نہیں۔ ایک نیک ملحد دوسروں کی مدد کرتا ہے مگر اللہ سے تعلق نہیں۔',
          },
        },
        {
          id: 'without-deeds',
          meaning: { en: 'Without Deeds', ur: 'عمل کے بغیر', hi: 'अमल के बग़ैर' },
          details: {
            en: 'Faith without action = dead faith. "I believe but don\'t practice" is self-deception.',
            ur: 'عمل کے بغیر ایمان = مردہ ایمان۔ "میں مانتا ہوں مگر عمل نہیں کرتا" خود فریبی ہے۔',
          },
        },
        {
          id: 'without-truth',
          meaning: { en: 'Without Calling to Truth', ur: 'حق کی دعوت کے بغیر', hi: 'हक़ की दावत के बग़ैर' },
          details: {
            en: 'Private religion only = abandoning community. Islam is collective responsibility (امر بالمعروف).',
            ur: 'صرف ذاتی دین = برادری کو چھوڑنا۔ اسلام اجتماعی ذمہ داری ہے (امر بالمعروف)۔',
          },
        },
        {
          id: 'without-patience',
          meaning: { en: 'Without Patience', ur: 'صبر کے بغیر', hi: 'सब्र के बग़ैर' },
          details: {
            en: 'Giving up when tested = losing everything. Patience is what keeps faith, deeds, and truth intact during trials.',
            ur: 'آزمائش میں ہار ماننا = سب کچھ کھونا۔ صبر وہ چیز ہے جو آزمائشوں میں ایمان، عمل اور حق کو برقرار رکھتا ہے۔',
          },
        },
      ],
    },
  },

  relationships: [
    {
      from: { en: 'Time (Asr)', ur: 'وقت (عصر)', ar: 'الْعَصْرِ' },
      to: { en: 'Loss (Khusr)', ur: 'خسارہ (خسر)', ar: 'خُسْرٍ' },
      type: 'cause-effect',
      explanation: {
        en: 'Time passing without the four conditions = continuous loss. Every second is either investment or waste.',
        ur: 'چار شرائط کے بغیر وقت گزرنا = مسلسل خسارہ۔ ہر سیکنڈ یا سرمایہ کاری ہے یا ضیاع۔',
      },
    },
    {
      from: { en: 'Faith (Iman)', ur: 'ایمان', ar: 'آمَنُوا' },
      to: { en: 'Deeds (Amal)', ur: 'عمل', ar: 'الصَّالِحَاتِ' },
      type: 'dependency',
      explanation: {
        en: 'Faith produces deeds. Without faith, good deeds have no eternal value. Faith is the root, deeds are the fruit.',
        ur: 'ایمان عمل پیدا کرتا ہے۔ ایمان کے بغیر نیک اعمال کی ابدی قدر نہیں۔ ایمان جڑ ہے، عمل پھل۔',
      },
    },
    {
      from: { en: 'Truth (Haqq)', ur: 'حق', ar: 'الْحَقِّ' },
      to: { en: 'Patience (Sabr)', ur: 'صبر', ar: 'الصَّبْرِ' },
      type: 'dependency',
      explanation: {
        en: 'Speaking truth brings opposition. Without patience, people abandon truth to avoid conflict.',
        ur: 'حق بولنے سے مخالفت ہوتی ہے۔ صبر کے بغیر لوگ تنازعہ سے بچنے کے لیے حق چھوڑ دیتے ہیں۔',
      },
    },
    {
      from: { en: 'Individual (Faith+Deeds)', ur: 'فرد (ایمان+عمل)', ar: 'آمَنُوا+عَمِلُوا' },
      to: { en: 'Community (Truth+Patience)', ur: 'برادری (حق+صبر)', ar: 'تَوَاصَوْا' },
      type: 'progression',
      explanation: {
        en: 'First two conditions are individual; last two are communal. Personal salvation is incomplete without community.',
        ur: 'پہلی دو شرائط فردی؛ آخری دو اجتماعی۔ برادری کے بغیر ذاتی نجات نامکمل ہے۔',
      },
    },
  ],

  thematicFlow: {
    title: {
      en: 'The Structure of Success',
      ur: 'کامیابی کا ڈھانچہ',
      hi: 'कामयाबी का ढाँचा',
    },
    stages: [
      {
        ayah: 1,
        stage: { en: 'The Witness', ur: 'گواہ' },
        description: {
          en: 'Allah swears by Time - our most precious and limited resource. Every moment passing is a warning.',
          ur: 'اللہ وقت کی قسم کھاتا ہے - ہمارا سب سے قیمتی اور محدود وسیلہ۔ ہر گزرتا لمحہ خبردار کرتا ہے۔',
        },
        color: '#F59E0B',
      },
      {
        ayah: 2,
        stage: { en: 'The Diagnosis', ur: 'تشخیص' },
        description: {
          en: 'All of humanity is in loss - this is the DEFAULT. Without intervention, loss is certain.',
          ur: 'ساری انسانیت خسارے میں ہے - یہ بنیادی حالت ہے۔ مداخلت کے بغیر نقصان یقینی ہے۔',
        },
        color: '#EF4444',
      },
      {
        ayah: 3,
        stage: { en: 'The Prescription', ur: 'نسخہ' },
        description: {
          en: 'Four conditions for success: Faith + Deeds + Truth + Patience. All four required, none optional.',
          ur: 'کامیابی کی چار شرائط: ایمان + عمل + حق + صبر۔ چاروں ضروری، کوئی اختیاری نہیں۔',
        },
        color: '#10B981',
      },
    ],
  },

  dimensions: {
    title: { en: 'Four Dimensions of Success', ur: 'کامیابی کے چار پہلو' },
    items: [
      {
        condition: { en: 'Faith (آمَنُوا)', ur: 'ایمان (آمَنُوا)' },
        domain: { en: 'Heart/Mind', ur: 'دل/ذہن' },
        nature: { en: 'Internal', ur: 'اندرونی' },
        scope: { en: 'Individual', ur: 'فردی' },
        color: '#3B82F6',
      },
      {
        condition: { en: 'Deeds (الصَّالِحَاتِ)', ur: 'عمل (الصَّالِحَاتِ)' },
        domain: { en: 'Body/Actions', ur: 'جسم/اعمال' },
        nature: { en: 'External', ur: 'بیرونی' },
        scope: { en: 'Individual', ur: 'فردی' },
        color: '#10B981',
      },
      {
        condition: { en: 'Truth (بِالْحَقِّ)', ur: 'حق (بِالْحَقِّ)' },
        domain: { en: 'Speech/Influence', ur: 'گفتگو/اثر' },
        nature: { en: 'External', ur: 'بیرونی' },
        scope: { en: 'Community', ur: 'اجتماعی' },
        color: '#8B5CF6',
      },
      {
        condition: { en: 'Patience (بِالصَّبْرِ)', ur: 'صبر (بِالصَّبْرِ)' },
        domain: { en: 'Will/Perseverance', ur: 'عزم/استقامت' },
        nature: { en: 'Internal', ur: 'اندرونی' },
        scope: { en: 'Community', ur: 'اجتماعی' },
        color: '#F59E0B',
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
        surah: 2,
        ayah: 45,
        name: { en: 'Al-Baqarah', ur: 'البقرہ' },
        arabic: 'وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ',
        connection: {
          en: '"Seek help through patience and prayer." Same elements - patience and worship together.',
          ur: '"صبر اور نماز سے مدد لو۔" وہی عناصر - صبر اور عبادت ایک ساتھ۔',
        },
      },
      {
        surah: 90,
        ayah: '17-18',
        name: { en: 'Al-Balad', ur: 'البلد' },
        arabic: 'وَتَوَاصَوْا بِالصَّبْرِ وَتَوَاصَوْا بِالْمَرْحَمَةِ',
        connection: {
          en: '"And advise each other to patience and mercy." Same تَوَاصَوْا pattern.',
          ur: '"اور ایک دوسرے کو صبر اور رحم کی نصیحت کی۔" وہی تَوَاصَوْا نمونہ۔',
        },
      },
      {
        surah: 95,
        ayah: '4-6',
        name: { en: 'At-Tin', ur: 'التین' },
        arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ',
        connection: {
          en: 'Same exception formula: "Except those who believe and do good deeds."',
          ur: 'وہی استثناء: "سوائے جو ایمان لائے اور نیک عمل کیے۔"',
        },
      },
      {
        surah: 18,
        ayah: 46,
        name: { en: 'Al-Kahf', ur: 'الکہف' },
        arabic: 'وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ',
        connection: {
          en: '"Righteous deeds are better with your Lord." Deeds outlast worldly achievements.',
          ur: '"نیک اعمال تمہارے رب کے نزدیک بہتر ہیں۔" اعمال دنیاوی کامیابیوں سے زیادہ پائیدار۔',
        },
      },
    ],
  },

  hadith: {
    virtue: {
      text: {
        ar: 'لَوْ تَدَبَّرَهَا النَّاسُ لَكَفَتْهُمْ',
        en: 'If only people reflected on this surah, it would suffice them.',
        ur: 'اگر لوگ اس سورۃ پر غور کریں، یہ ان کے لیے کافی ہے۔',
      },
      source: 'Attributed to Imam ash-Shafi\'i',
      narrator: 'Imam ash-Shafi\'i',
    },
    additional: [
      {
        text: {
          en: 'The Companions would not part from each other except after reciting Surah Al-Asr, then they would say salam.',
          ur: 'صحابہ کرام ایک دوسرے سے جدا نہ ہوتے سورۃ العصر پڑھے بغیر، پھر سلام کہتے۔',
        },
        source: 'Tabarani',
      },
    ],
  },

  practicalApplication: {
    title: { en: 'Daily Reflection Questions', ur: 'روزانہ غور کے سوالات' },
    questions: [
      {
        question: { en: 'How did I invest my time today?', ur: 'آج میں نے اپنا وقت کیسے خرچ کیا؟' },
        connection: { en: 'وَالْعَصْرِ - Time is passing', ur: 'وَالْعَصْرِ - وقت گزر رہا ہے' },
      },
      {
        question: { en: 'Did my actions reflect my faith?', ur: 'کیا میرے عمل میرے ایمان کی عکاسی کرتے ہیں؟' },
        connection: { en: 'آمَنُوا وَعَمِلُوا - Faith + Deeds', ur: 'آمَنُوا وَعَمِلُوا - ایمان + عمل' },
      },
      {
        question: { en: 'Did I advise someone to truth today?', ur: 'کیا آج میں نے کسی کو حق کی نصیحت کی؟' },
        connection: { en: 'تَوَاصَوْا بِالْحَقِّ - Mutual truth', ur: 'تَوَاصَوْا بِالْحَقِّ - باہمی حق' },
      },
      {
        question: { en: 'Did I remain patient during difficulty?', ur: 'کیا مشکل میں میں نے صبر کیا؟' },
        connection: { en: 'تَوَاصَوْا بِالصَّبْرِ - Mutual patience', ur: 'تَوَاصَوْا بِالصَّبْرِ - باہمی صبر' },
      },
    ],
  },

  uniqueInsight: {
    title: { en: 'The Quran in 3 Verses', ur: 'قرآن 3 آیات میں' },
    content: {
      en: 'Imam Shafi\'i\'s famous statement is no exaggeration. This tiny surah contains: (1) The value of time, (2) The human problem (loss), (3) The solution (four conditions), (4) Individual responsibility (faith+deeds), (5) Community responsibility (truth+patience). Every other verse in the Quran elaborates on one of these themes. Al-Asr is the executive summary.',
      ur: 'امام شافعی کی مشہور بات مبالغہ نہیں۔ اس چھوٹی سورۃ میں ہے: (1) وقت کی قدر، (2) انسانی مسئلہ (خسارہ)، (3) حل (چار شرائط)، (4) فردی ذمہ داری (ایمان+عمل)، (5) اجتماعی ذمہ داری (حق+صبر)۔ قرآن کی ہر دوسری آیت ان موضوعات میں سے کسی ایک کی تفصیل ہے۔ العصر ایگزیکٹیو سمری ہے۔',
    },
  },
};

export default SURAH_103_ONTOLOGY;
