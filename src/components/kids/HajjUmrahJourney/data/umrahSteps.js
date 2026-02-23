/**
 * Umrah Steps Data
 * Complete guide to Umrah rituals with authentic sources
 * Languages: English, Urdu, Arabic
 */

export const UMRAH_STEPS = [
  {
    id: 1,
    name: 'Ihram',
    nameAr: 'الإحرام',
    nameUr: 'احرام',

    location: 'Miqat',
    locationAr: 'الميقات',
    locationUr: 'میقات',

    emoji: '🧕',
    color: '#10B981',
    scene: 'miqat',

    // Avatar actions
    avatarActions: ['enter_ihram', 'raising_hands', 'walk'],

    // Description
    description: {
      en: 'Ihram is the sacred state a Muslim enters to perform Umrah. At the Miqat (boundary point), pilgrims make their intention, perform ghusl (full ablution), wear the Ihram garments, and begin reciting the Talbiyah.',
      ur: 'احرام وہ مقدس حالت ہے جس میں مسلمان عمرہ ادا کرنے کے لیے داخل ہوتا ہے۔ میقات (حد کے مقام) پر حاجی نیت کرتے ہیں، غسل کرتے ہیں، احرام کے کپڑے پہنتے ہیں، اور تلبیہ پڑھنا شروع کرتے ہیں۔',
      ar: 'الإحرام هو الحالة المقدسة التي يدخلها المسلم لأداء العمرة. عند الميقات، ينوي الحاج ويغتسل ويلبس ثياب الإحرام ويبدأ بالتلبية.',
    },

    // Steps to perform
    actions: {
      en: [
        'Make intention (Niyyah) for Umrah',
        'Perform Ghusl (full bath) if possible',
        'Men wear two white unstitched cloths',
        'Women wear normal modest clothing',
        'Pray 2 rakaat Sunnah',
        'Begin reciting Talbiyah loudly',
      ],
      ur: [
        'عمرہ کی نیت کریں',
        'اگر ممکن ہو تو غسل کریں',
        'مرد دو سفید بغیر سلی چادریں پہنیں',
        'خواتین عام شرعی لباس پہنیں',
        'دو رکعت سنت پڑھیں',
        'بلند آواز سے تلبیہ پڑھنا شروع کریں',
      ],
      ar: [
        'النية للعمرة',
        'الاغتسال إن أمكن',
        'يلبس الرجال إزاراً ورداءً أبيضين',
        'تلبس النساء ثيابهن العادية المحتشمة',
        'صلاة ركعتين سنة',
        'البدء بالتلبية بصوت مرتفع',
      ],
    },

    // Duas
    duas: [
      {
        name: 'Niyyah (Intention)',
        nameAr: 'النية',
        nameUr: 'نیت',
        arabic: 'اللَّهُمَّ إِنِّي أُرِيدُ الْعُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي',
        transliteration: 'Allahumma inni uridu al-\'umrata fa yassirha li wa taqabbalha minni',
        translation: {
          en: 'O Allah, I intend to perform Umrah, so make it easy for me and accept it from me.',
          ur: 'اے اللہ میں عمرہ کا ارادہ رکھتا ہوں، اسے میرے لیے آسان فرما اور مجھ سے قبول فرما۔',
        },
      },
      {
        name: 'Talbiyah',
        nameAr: 'التلبية',
        nameUr: 'تلبیہ',
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
        transliteration: 'Labbayk Allahumma labbayk, labbayk la shareeka laka labbayk, innal-hamda wan-ni\'mata laka wal-mulk, la shareeka lak',
        translation: {
          en: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise and blessings are Yours, and all sovereignty. You have no partner.',
          ur: 'میں حاضر ہوں اے اللہ میں حاضر ہوں، میں حاضر ہوں تیرا کوئی شریک نہیں میں حاضر ہوں۔ بے شک تمام حمد و نعمت تیری ہے اور بادشاہی بھی، تیرا کوئی شریک نہیں۔',
        },
        isMain: true,
      },
    ],

    // Authentic references
    references: [
      { source: 'Sahih Bukhari', number: '1524', text: 'The Prophet ﷺ entered Ihram at Dhul-Hulayfah' },
      { source: 'Sahih Muslim', number: '1181', text: 'Description of Ihram garments' },
      { source: 'Sahih Bukhari', number: '1549', text: 'Talbiyah of the Prophet ﷺ' },
    ],

    // Restrictions in Ihram
    rules: {
      en: [
        'No cutting hair or nails',
        'No wearing perfume',
        'No hunting animals',
        'No marriage contracts',
        'Men: No covering head, no stitched clothes',
        'Women: No covering face or hands',
      ],
      ur: [
        'بال یا ناخن نہ کاٹیں',
        'خوشبو نہ لگائیں',
        'شکار نہ کریں',
        'نکاح نہ کریں',
        'مرد: سر نہ ڈھانپیں، سلے کپڑے نہ پہنیں',
        'خواتین: چہرہ اور ہاتھ نہ ڈھانپیں',
      ],
      ar: [
        'لا قص للشعر أو الأظافر',
        'لا استعمال للطيب',
        'لا صيد',
        'لا عقد نكاح',
        'الرجال: لا تغطية للرأس ولا ثياب مخيطة',
        'النساء: لا تغطية للوجه واليدين',
      ],
    },

    // Tips
    kidsTip: {
      en: '💡 Ihram clothes are like a uniform - everyone looks the same, whether rich or poor! This shows we are all equal before Allah.',
      ur: '💡 احرام کے کپڑے یونیفارم کی طرح ہیں - سب ایک جیسے لگتے ہیں، امیر ہو یا غریب! یہ ظاہر کرتا ہے کہ ہم سب اللہ کے سامنے برابر ہیں۔',
      ar: '💡 ثياب الإحرام كالزي الموحد - الجميع يبدون متشابهين، غنياً كان أو فقيراً! هذا يُظهر أننا جميعاً متساوون أمام الله.',
    },
  },

  {
    id: 2,
    name: 'Tawaf',
    nameAr: 'الطواف',
    nameUr: 'طواف',

    location: 'Masjid al-Haram',
    locationAr: 'المسجد الحرام',
    locationUr: 'مسجد الحرام',

    emoji: '🕋',
    color: '#8B5CF6',
    scene: 'kaaba',

    avatarActions: ['tawaf', 'touching', 'raising_hands'],

    description: {
      en: 'Tawaf is the ritual of walking around the Kaaba seven times in an anti-clockwise direction. Each circuit begins and ends at the Black Stone (Hajar al-Aswad). This is one of the main pillars of Umrah.',
      ur: 'طواف کعبہ کے گرد سات مرتبہ گھڑی کی مخالف سمت میں چلنے کی رسم ہے۔ ہر چکر حجر اسود سے شروع اور ختم ہوتا ہے۔ یہ عمرہ کے اہم ارکان میں سے ہے۔',
      ar: 'الطواف هو الدوران حول الكعبة سبع مرات عكس اتجاه عقارب الساعة. كل شوط يبدأ وينتهي عند الحجر الأسود. وهو من أركان العمرة الرئيسية.',
    },

    actions: {
      en: [
        'Enter Masjid al-Haram with right foot',
        'Make dua upon seeing the Kaaba',
        'Start at Black Stone - kiss, touch, or point to it',
        'Walk anti-clockwise around Kaaba',
        'Men do Raml (brisk walk) in first 3 rounds',
        'Complete 7 full circuits',
        'Make dua throughout',
      ],
      ur: [
        'دائیں پاؤں سے مسجد الحرام میں داخل ہوں',
        'کعبہ دیکھ کر دعا کریں',
        'حجر اسود سے شروع کریں - بوسہ دیں، چھوئیں یا اشارہ کریں',
        'کعبہ کے گرد گھڑی کی مخالف سمت چلیں',
        'مرد پہلے 3 چکروں میں رمل کریں (تیز چال)',
        '7 مکمل چکر لگائیں',
        'پورے وقت دعا کرتے رہیں',
      ],
      ar: [
        'الدخول بالقدم اليمنى',
        'الدعاء عند رؤية الكعبة',
        'البدء من الحجر الأسود - تقبيله أو لمسه أو الإشارة إليه',
        'الطواف عكس عقارب الساعة',
        'الرمل للرجال في الأشواط الثلاثة الأولى',
        'إتمام سبعة أشواط كاملة',
        'الدعاء طوال الطواف',
      ],
    },

    duas: [
      {
        name: 'Upon seeing Kaaba',
        nameAr: 'عند رؤية الكعبة',
        nameUr: 'کعبہ دیکھ کر',
        arabic: 'اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً',
        transliteration: 'Allahumma zid hadhal-bayta tashrifan wa ta\'zeeman wa takreeman wa mahabah',
        translation: {
          en: 'O Allah, increase this House in honor, reverence, nobility, and awe.',
          ur: 'اے اللہ اس گھر کو شرف، عظمت، تکریم اور ہیبت میں اضافہ فرما۔',
        },
      },
      {
        name: 'At Black Stone',
        nameAr: 'عند الحجر الأسود',
        nameUr: 'حجر اسود کے پاس',
        arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
        transliteration: 'Bismillahi wallahu Akbar',
        translation: {
          en: 'In the name of Allah, Allah is the Greatest.',
          ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے۔',
        },
        isMain: true,
      },
      {
        name: 'Between Rukn Yamani and Black Stone',
        nameAr: 'بين الركن اليماني والحجر الأسود',
        nameUr: 'رکن یمانی اور حجر اسود کے درمیان',
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar',
        translation: {
          en: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the torment of the Fire.',
          ur: 'اے ہمارے رب ہمیں دنیا میں بھلائی دے اور آخرت میں بھلائی دے اور ہمیں آگ کے عذاب سے بچا۔',
        },
        quranRef: 'Quran 2:201',
      },
    ],

    references: [
      { source: 'Sahih Bukhari', number: '1614', text: 'The Prophet ﷺ performed Tawaf around the Kaaba' },
      { source: 'Sahih Muslim', number: '1235', text: 'Description of Tawaf' },
      { source: 'Sahih Muslim', number: '1263', text: 'Raml in the first three circuits' },
    ],

    rules: {
      en: [
        'Must have Wudu (ablution)',
        'Must complete all 7 rounds',
        'Kaaba must be on your left side',
        'Start and end at Black Stone line',
      ],
      ur: [
        'وضو ضروری ہے',
        'تمام 7 چکر مکمل کرنے ہیں',
        'کعبہ بائیں جانب ہونی چاہیے',
        'حجر اسود کی لائن سے شروع اور ختم کریں',
      ],
      ar: [
        'يجب أن تكون على وضوء',
        'إكمال جميع الأشواط السبعة',
        'الكعبة على يسارك',
        'البدء والانتهاء عند خط الحجر الأسود',
      ],
    },

    kidsTip: {
      en: '💡 Imagine millions of Muslims throughout history, all walking around the same Kaaba! You are joining them in this beautiful tradition.',
      ur: '💡 سوچیں کہ تاریخ میں لاکھوں مسلمان ایک ہی کعبہ کے گرد چلے! آپ اس خوبصورت روایت میں ان کے ساتھ شامل ہو رہے ہیں۔',
      ar: '💡 تخيل ملايين المسلمين عبر التاريخ، جميعهم يطوفون حول نفس الكعبة! أنت تنضم إليهم في هذه التقليد الجميل.',
    },
  },

  {
    id: 3,
    name: 'Prayer at Maqam Ibrahim',
    nameAr: 'صلاة ركعتين',
    nameUr: 'مقام ابراہیم پر نماز',

    location: 'Maqam Ibrahim',
    locationAr: 'مقام إبراهيم',
    locationUr: 'مقام ابراہیم',

    emoji: '🤲',
    color: '#3B82F6',
    scene: 'kaaba',

    avatarActions: ['standing', 'ruku', 'sujood', 'sitting'],

    description: {
      en: 'After completing Tawaf, pray two rakaat behind Maqam Ibrahim (the Station of Ibrahim). This is where Prophet Ibrahim (AS) stood while building the Kaaba. If the area is crowded, pray anywhere in the mosque.',
      ur: 'طواف مکمل کرنے کے بعد مقام ابراہیم کے پیچھے دو رکعت نماز پڑھیں۔ یہ وہ جگہ ہے جہاں حضرت ابراہیم علیہ السلام کعبہ تعمیر کرتے وقت کھڑے تھے۔ اگر جگہ بھری ہو تو مسجد میں کہیں بھی پڑھ سکتے ہیں۔',
      ar: 'بعد إتمام الطواف، صلِّ ركعتين خلف مقام إبراهيم. هذا المكان الذي وقف فيه إبراهيم عليه السلام أثناء بناء الكعبة. إذا كان المكان مزدحماً، صلِّ في أي مكان في المسجد.',
    },

    actions: {
      en: [
        'Go to Maqam Ibrahim area',
        'Recite: "And take the Maqam of Ibrahim as a place of prayer"',
        'Pray 2 rakaat Sunnah',
        'First rakaat: Surah Al-Kafirun after Fatiha',
        'Second rakaat: Surah Al-Ikhlas after Fatiha',
        'Make dua after prayer',
      ],
      ur: [
        'مقام ابراہیم کی طرف جائیں',
        'پڑھیں: "اور مقام ابراہیم کو جائے نماز بناؤ"',
        'دو رکعت سنت پڑھیں',
        'پہلی رکعت: فاتحہ کے بعد سورۃ الکافرون',
        'دوسری رکعت: فاتحہ کے بعد سورۃ الاخلاص',
        'نماز کے بعد دعا کریں',
      ],
      ar: [
        'التوجه إلى منطقة مقام إبراهيم',
        'قراءة: "واتخذوا من مقام إبراهيم مصلى"',
        'صلاة ركعتين سنة',
        'الركعة الأولى: سورة الكافرون بعد الفاتحة',
        'الركعة الثانية: سورة الإخلاص بعد الفاتحة',
        'الدعاء بعد الصلاة',
      ],
    },

    duas: [
      {
        name: 'Quran verse to recite',
        nameAr: 'آية قرآنية',
        nameUr: 'قرآنی آیت',
        arabic: 'وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى',
        transliteration: 'Wattakhidhu min maqami Ibrahima musalla',
        translation: {
          en: 'And take the Station of Ibrahim as a place of prayer.',
          ur: 'اور مقام ابراہیم کو جائے نماز بناؤ۔',
        },
        quranRef: 'Quran 2:125',
        isMain: true,
      },
    ],

    references: [
      { source: 'Quran', number: '2:125', text: 'Take the Maqam of Ibrahim as a place of prayer' },
      { source: 'Sahih Muslim', number: '1218', text: 'The Prophet ﷺ prayed two rakaat at Maqam Ibrahim' },
    ],

    rules: {
      en: [
        'Pray behind Maqam if possible',
        'If crowded, pray anywhere in the mosque',
        'Two rakaat are Sunnah Muakkadah (emphasized)',
      ],
      ur: [
        'اگر ممکن ہو مقام کے پیچھے پڑھیں',
        'اگر جگہ بھری ہو مسجد میں کہیں بھی پڑھ سکتے ہیں',
        'دو رکعت سنت مؤکدہ ہیں',
      ],
      ar: [
        'الصلاة خلف المقام إن أمكن',
        'إذا كان مزدحماً صلِّ في أي مكان',
        'الركعتان سنة مؤكدة',
      ],
    },

    kidsTip: {
      en: '💡 Maqam Ibrahim has the actual footprints of Prophet Ibrahim (AS)! He stood on this stone while building the Kaaba thousands of years ago.',
      ur: '💡 مقام ابراہیم پر حضرت ابراہیم علیہ السلام کے اصل قدموں کے نشان ہیں! انہوں نے ہزاروں سال پہلے کعبہ بناتے ہوئے اس پتھر پر کھڑے ہوکر کام کیا۔',
      ar: '💡 في مقام إبراهيم آثار قدمي إبراهيم عليه السلام! وقف على هذا الحجر أثناء بناء الكعبة منذ آلاف السنين.',
    },
  },

  {
    id: 4,
    name: "Sa'i",
    nameAr: 'السعي',
    nameUr: 'سعی',

    location: 'Safa & Marwah',
    locationAr: 'الصفا والمروة',
    locationUr: 'صفا اور مروہ',

    emoji: '🏃',
    color: '#F59E0B',
    scene: 'safa_marwah',

    avatarActions: ['walk', 'walk_fast', 'raising_hands'],

    description: {
      en: "Sa'i is walking seven times between the hills of Safa and Marwah. This commemorates Hajar's (RA) search for water for her son Ismail (AS). Start at Safa, walk to Marwah (1 lap), return to Safa (2nd lap), and so on until 7 laps.",
      ur: 'سعی صفا اور مروہ کی پہاڑیوں کے درمیان سات مرتبہ چلنا ہے۔ یہ حضرت ہاجرہ رضی اللہ عنہا کی اپنے بیٹے اسماعیل علیہ السلام کے لیے پانی کی تلاش کی یاد ہے۔ صفا سے شروع کریں، مروہ تک جائیں (1 چکر)، صفا واپس آئیں (2 چکر)، اور اسی طرح 7 چکر مکمل کریں۔',
      ar: 'السعي هو المشي سبع مرات بين الصفا والمروة. وهو إحياء لذكرى سعي هاجر رضي الله عنها بحثاً عن الماء لابنها إسماعيل عليه السلام. ابدأ من الصفا إلى المروة (شوط)، ثم ارجع إلى الصفا (شوطان)، وهكذا حتى سبعة أشواط.',
    },

    actions: {
      en: [
        'Drink Zamzam water first',
        'Go to Safa hill',
        'Face Kaaba and make dua',
        'Walk to Marwah (this is lap 1)',
        'Men jog between green lights',
        'At Marwah, face Kaaba and make dua',
        'Return to Safa (lap 2)',
        'Complete 7 laps, ending at Marwah',
      ],
      ur: [
        'پہلے زمزم کا پانی پئیں',
        'صفا پہاڑی پر جائیں',
        'کعبہ کی طرف منہ کریں اور دعا کریں',
        'مروہ تک چلیں (یہ چکر 1 ہے)',
        'مرد سبز بتیوں کے درمیان دوڑیں',
        'مروہ پر کعبہ کی طرف منہ کرکے دعا کریں',
        'صفا واپس آئیں (چکر 2)',
        '7 چکر مکمل کریں، مروہ پر ختم ہوں',
      ],
      ar: [
        'شرب ماء زمزم أولاً',
        'التوجه إلى الصفا',
        'استقبال الكعبة والدعاء',
        'المشي إلى المروة (الشوط الأول)',
        'الهرولة للرجال بين العلامات الخضراء',
        'عند المروة استقبال الكعبة والدعاء',
        'العودة إلى الصفا (الشوط الثاني)',
        'إتمام سبعة أشواط، والانتهاء عند المروة',
      ],
    },

    duas: [
      {
        name: 'At Safa (Quran verse)',
        nameAr: 'عند الصفا',
        nameUr: 'صفا پر',
        arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
        transliteration: 'Innas-Safa wal-Marwata min sha\'a\'irillah',
        translation: {
          en: 'Indeed, Safa and Marwah are among the symbols of Allah.',
          ur: 'بے شک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔',
        },
        quranRef: 'Quran 2:158',
        isMain: true,
      },
      {
        name: 'Dua at Safa/Marwah',
        nameAr: 'الدعاء عند الصفا والمروة',
        nameUr: 'صفا/مروہ پر دعا',
        arabic: 'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
        transliteration: 'Allahu Akbar, Allahu Akbar, Allahu Akbar, La ilaha illallahu wahdahu la shareeka lah',
        translation: {
          en: 'Allah is the Greatest (3x). There is no god but Allah alone, with no partner.',
          ur: 'اللہ سب سے بڑا ہے (3 مرتبہ)۔ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔',
        },
      },
    ],

    references: [
      { source: 'Quran', number: '2:158', text: 'Safa and Marwah are among the symbols of Allah' },
      { source: 'Sahih Bukhari', number: '1643', text: "Description of Sa'i" },
      { source: 'Sahih Muslim', number: '1277', text: "Running between the green markers in Sa'i" },
    ],

    rules: {
      en: [
        'Must start at Safa',
        'Must end at Marwah (7th lap)',
        'Each direction counts as one lap',
        'Men should jog between green lights',
        'Women walk normally throughout',
      ],
      ur: [
        'صفا سے شروع کرنا ضروری ہے',
        'مروہ پر ختم ہونا ضروری ہے (7واں چکر)',
        'ہر سمت ایک چکر شمار ہوتا ہے',
        'مرد سبز بتیوں کے درمیان دوڑیں',
        'خواتین پورے راستے عام چال چلیں',
      ],
      ar: [
        'البدء من الصفا واجب',
        'الانتهاء عند المروة (الشوط السابع)',
        'كل اتجاه يحسب شوطاً',
        'الهرولة للرجال بين العلامات الخضراء',
        'النساء يمشين طوال السعي',
      ],
    },

    kidsTip: {
      en: "💡 Hajar (RA) ran between these hills looking for water for baby Ismail. Allah rewarded her effort by creating Zamzam water that still flows today! Never give up - Allah sees your effort.",
      ur: '💡 حضرت ہاجرہ رضی اللہ عنہا بچے اسماعیل کے لیے پانی ڈھونڈتے ہوئے ان پہاڑیوں کے درمیان دوڑیں۔ اللہ نے ان کی محنت کا انعام زمزم کا پانی عطا کیا جو آج بھی بہہ رہا ہے! کبھی ہمت نہ ہاریں - اللہ آپ کی کوشش دیکھتا ہے۔',
      ar: '💡 ركضت هاجر رضي الله عنها بين هذين الجبلين بحثاً عن الماء لطفلها إسماعيل. كافأها الله بخلق ماء زمزم الذي لا يزال يتدفق حتى اليوم! لا تستسلم أبداً - الله يرى جهدك.',
    },
  },

  {
    id: 5,
    name: 'Halq or Taqsir',
    nameAr: 'الحلق أو التقصير',
    nameUr: 'حلق یا تقصیر',

    location: 'Anywhere in Haram area',
    locationAr: 'في أي مكان في منطقة الحرم',
    locationUr: 'حرم کے علاقے میں کہیں بھی',

    emoji: '✂️',
    color: '#EC4899',
    scene: 'completion',

    avatarActions: ['shaving', 'exit_ihram'],

    description: {
      en: 'The final step of Umrah is cutting the hair. Men should shave their heads completely (Halq - more reward) or trim hair equally from all sides (Taqsir). Women cut a fingertip length from their hair. After this, you exit the state of Ihram.',
      ur: 'عمرہ کا آخری مرحلہ بال کاٹنا ہے۔ مردوں کو سر منڈوانا چاہیے (حلق - زیادہ ثواب) یا سب اطراف سے برابر بال کتروانا چاہیے (تقصیر)۔ خواتین اپنے بالوں سے انگلی کے پورے کی لمبائی کاٹیں۔ اس کے بعد آپ احرام کی حالت سے باہر نکل جاتے ہیں۔',
      ar: 'الخطوة الأخيرة في العمرة هي قص الشعر. يجب على الرجال حلق رؤوسهم (الحلق - أكثر أجراً) أو تقصير الشعر من جميع الجوانب (التقصير). النساء يقصصن قدر أنملة من شعرهن. بعد ذلك تخرج من الإحرام.',
    },

    actions: {
      en: [
        'Go to a barber shop in Makkah',
        'Men: Shave head (Halq) OR trim all around (Taqsir)',
        'Women: Cut fingertip length from hair ends',
        'Say "Bismillah" before cutting',
        'You are now out of Ihram!',
        'All Ihram restrictions are now lifted',
        'Wear normal clothes',
      ],
      ur: [
        'مکہ میں حجام کی دکان جائیں',
        'مرد: سر منڈوائیں (حلق) یا چاروں طرف سے بال کتروائیں (تقصیر)',
        'خواتین: بالوں کے سروں سے انگلی کے پورے کی لمبائی کاٹیں',
        'کاٹنے سے پہلے بسم اللہ کہیں',
        'اب آپ احرام سے باہر ہیں!',
        'احرام کی تمام پابندیاں اب ختم ہیں',
        'عام کپڑے پہن لیں',
      ],
      ar: [
        'الذهاب إلى حلاق في مكة',
        'الرجال: الحلق أو التقصير',
        'النساء: قص قدر أنملة من أطراف الشعر',
        'قول "بسم الله" قبل القص',
        'الآن خرجت من الإحرام!',
        'رفعت جميع محظورات الإحرام',
        'ارتداء الثياب العادية',
      ],
    },

    duas: [
      {
        name: 'Before cutting hair',
        nameAr: 'قبل قص الشعر',
        nameUr: 'بال کاٹنے سے پہلے',
        arabic: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah',
        translation: {
          en: 'In the name of Allah.',
          ur: 'اللہ کے نام سے۔',
        },
        isMain: true,
      },
      {
        name: 'After completing Umrah',
        nameAr: 'بعد إتمام العمرة',
        nameUr: 'عمرہ مکمل کرنے کے بعد',
        arabic: 'اللَّهُمَّ تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
        transliteration: "Allahumma taqabbal minna innaka antas-Samee'ul-'Aleem",
        translation: {
          en: 'O Allah, accept from us. Indeed, You are the All-Hearing, All-Knowing.',
          ur: 'اے اللہ ہم سے قبول فرما۔ بے شک تو سننے والا جاننے والا ہے۔',
        },
      },
    ],

    references: [
      { source: 'Sahih Bukhari', number: '1726', text: 'The Prophet ﷺ shaved his head' },
      { source: 'Sahih Muslim', number: '1301', text: 'Description of Halq and Taqsir' },
      { source: 'Sahih Muslim', number: '1303', text: 'Shaving is better than trimming' },
    ],

    rules: {
      en: [
        'Halq (shaving) has more reward for men',
        'Taqsir must be from all sides of head',
        'Women only trim, never shave',
        'Must be done after Sa\'i',
      ],
      ur: [
        'مردوں کے لیے حلق (منڈوانا) زیادہ ثواب رکھتا ہے',
        'تقصیر سر کی تمام اطراف سے ہونی چاہیے',
        'خواتین صرف کتروائیں، کبھی نہ منڈوائیں',
        'سعی کے بعد کرنا ضروری ہے',
      ],
      ar: [
        'الحلق أفضل للرجال',
        'التقصير يجب أن يكون من جميع جوانب الرأس',
        'النساء يقصرن فقط ولا يحلقن',
        'يجب أن يكون بعد السعي',
      ],
    },

    kidsTip: {
      en: '💡 Congratulations! You completed Umrah! 🎉 The Prophet ﷺ said: "Umrah to Umrah is expiation for sins between them." Keep doing good deeds!',
      ur: '💡 مبارک ہو! آپ نے عمرہ مکمل کر لیا! 🎉 نبی ﷺ نے فرمایا: "عمرہ سے عمرہ کے درمیان کے گناہوں کا کفارہ ہے۔" نیک کام کرتے رہیں!',
      ar: '💡 مبروك! أتممت العمرة! 🎉 قال النبي ﷺ: "العمرة إلى العمرة كفارة لما بينهما." استمر في الأعمال الصالحة!',
    },
  },
];

// Umrah completion info
export const UMRAH_COMPLETION = {
  title: {
    en: 'Umrah Complete!',
    ur: 'عمرہ مکمل!',
    ar: 'تمت العمرة!',
  },
  message: {
    en: 'Masha Allah! You have learned all the steps of Umrah. May Allah accept your worship and grant you the opportunity to perform Umrah.',
    ur: 'ماشاءاللہ! آپ نے عمرہ کے تمام مراحل سیکھ لیے۔ اللہ آپ کی عبادت قبول فرمائے اور آپ کو عمرہ کی سعادت نصیب فرمائے۔',
    ar: 'ما شاء الله! لقد تعلمت جميع خطوات العمرة. تقبل الله عبادتك ورزقك أداء العمرة.',
  },
  hadith: {
    arabic: 'الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا',
    transliteration: "Al-'Umratu ilal-'Umrati kaffaratun lima baynahuma",
    translation: {
      en: '"Umrah to Umrah is expiation for sins between them."',
      ur: '"عمرہ سے عمرہ کے درمیان کے گناہوں کا کفارہ ہے۔"',
    },
    source: 'Sahih Bukhari 1773, Sahih Muslim 1349',
  },
};

export default UMRAH_STEPS;
