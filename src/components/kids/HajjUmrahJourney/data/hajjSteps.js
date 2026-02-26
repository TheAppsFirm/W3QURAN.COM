/**
 * Hajj Steps Data
 * Complete guide to Hajj rituals with authentic sources
 * 14 steps over 5 days
 * Languages: English, Urdu, Arabic
 */

export const HAJJ_DAYS = [
  { day: 1, date: '8th Dhul Hijjah', nameAr: 'يوم التروية', nameUr: 'یوم الترویہ', nameEn: 'Day of Tarwiyah' },
  { day: 2, date: '9th Dhul Hijjah', nameAr: 'يوم عرفة', nameUr: 'یوم عرفہ', nameEn: 'Day of Arafah' },
  { day: 3, date: '10th Dhul Hijjah', nameAr: 'يوم النحر', nameUr: 'یوم النحر', nameEn: 'Day of Sacrifice (Eid)' },
  { day: 4, date: '11th Dhul Hijjah', nameAr: 'أيام التشريق', nameUr: 'ایام تشریق', nameEn: 'Days of Tashreeq' },
  { day: 5, date: '12th Dhul Hijjah', nameAr: 'أيام التشريق', nameUr: 'ایام تشریق', nameEn: 'Days of Tashreeq' },
];

export const HAJJ_STEPS = [
  // ==================== DAY 1: 8th Dhul Hijjah ====================
  {
    id: 1,
    day: 1,
    name: 'Ihram for Hajj',
    nameAr: 'الإحرام للحج',
    nameUr: 'حج کا احرام',

    location: 'Miqat or Makkah',
    locationAr: 'الميقات أو مكة',
    locationUr: 'میقات یا مکہ',

    emoji: '🧕',
    color: '#10B981',
    scene: 'miqat',

    avatarActions: ['enter_ihram', 'raising_hands', 'walk'],

    description: {
      en: 'On the 8th of Dhul Hijjah, pilgrims enter the state of Ihram for Hajj. Those already in Makkah enter Ihram from their accommodation. Make intention specifically for Hajj and begin reciting Talbiyah.',
      ur: '8 ذوالحجہ کو حجاج حج کے لیے احرام باندھتے ہیں۔ جو پہلے سے مکہ میں ہیں وہ اپنی قیام گاہ سے احرام باندھتے ہیں۔ خاص طور پر حج کی نیت کریں اور تلبیہ پڑھنا شروع کریں۔',
      ar: 'في اليوم الثامن من ذي الحجة، يدخل الحجاج في الإحرام للحج. من كان في مكة يحرم من مكان إقامته. ينوي الحج ويبدأ بالتلبية.',
    },

    actions: {
      en: [
        'Perform Ghusl (full bath)',
        'Wear Ihram garments',
        'Make intention for Hajj: "Labbayk Allahumma Hajjan"',
        'Begin reciting Talbiyah loudly',
        'Proceed to Mina',
      ],
      ur: [
        'غسل کریں',
        'احرام کے کپڑے پہنیں',
        'حج کی نیت کریں: "لبیک اللھم حجاً"',
        'بلند آواز سے تلبیہ پڑھنا شروع کریں',
        'منیٰ کی طرف روانہ ہوں',
      ],
      ar: [
        'الاغتسال',
        'لبس ثياب الإحرام',
        'النية للحج: "لبيك اللهم حجاً"',
        'البدء بالتلبية',
        'التوجه إلى منى',
      ],
    },

    duas: [
      {
        name: 'Intention for Hajj',
        nameAr: 'نية الحج',
        nameUr: 'حج کی نیت',
        arabic: 'لَبَّيْكَ اللَّهُمَّ حَجًّا',
        transliteration: 'Labbayk Allahumma Hajjan',
        translation: {
          en: 'Here I am, O Allah, for Hajj.',
          ur: 'میں حاضر ہوں اے اللہ حج کے لیے۔',
        },
        isMain: true,
      },
      {
        name: 'Talbiyah',
        nameAr: 'التلبية',
        nameUr: 'تلبیہ',
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
        transliteration: 'Labbayk Allahumma labbayk, labbayk la shareeka laka labbayk, innal-hamda wan-ni\'mata laka wal-mulk, la shareeka lak',
        translation: {
          en: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise and blessings are Yours, and all sovereignty. You have no partner.',
          ur: 'میں حاضر ہوں اے اللہ میں حاضر ہوں۔ تیرا کوئی شریک نہیں۔ بے شک تمام حمد و نعمت تیری ہے اور بادشاہی بھی۔',
        },
      },
    ],

    references: [
      { source: 'Sahih Muslim', number: '1218', text: 'Description of how the Prophet ﷺ performed Hajj' },
      { source: 'Sahih Bukhari', number: '1551', text: 'Entering Ihram for Hajj' },
    ],

    kidsTip: {
      en: '💡 Today is the first day of Hajj! Millions of Muslims from every country gather together. Everyone wears the same simple clothes - we are all equal before Allah!',
      ur: '💡 آج حج کا پہلا دن ہے! ہر ملک سے لاکھوں مسلمان جمع ہوتے ہیں۔ سب ایک جیسے سادہ کپڑے پہنتے ہیں - ہم سب اللہ کے سامنے برابر ہیں!',
      ar: '💡 اليوم أول أيام الحج! يجتمع ملايين المسلمين من كل بلد. الجميع يرتدون نفس الثياب البسيطة - كلنا متساوون أمام الله!',
    },
  },

  {
    id: 2,
    day: 1,
    name: 'Stay in Mina',
    nameAr: 'المبيت في منى',
    nameUr: 'منیٰ میں قیام',

    location: 'Mina',
    locationAr: 'منى',
    locationUr: 'منیٰ',

    emoji: '⛺',
    color: '#8B5CF6',
    scene: 'mina',

    avatarActions: ['walk', 'standing', 'sujood', 'sitting'],

    description: {
      en: 'Pilgrims travel to Mina and spend the day and night there. Mina is a tent city about 5 km from Makkah. Pray Dhuhr, Asr, Maghrib, Isha (shortened) and Fajr. Focus on worship, reciting Quran, and making dua.',
      ur: 'حجاج منیٰ جاتے ہیں اور وہاں دن اور رات گزارتے ہیں۔ منیٰ مکہ سے تقریباً 5 کلومیٹر دور ایک خیموں کا شہر ہے۔ ظہر، عصر، مغرب، عشاء (قصر) اور فجر پڑھیں۔ عبادت، قرآن پڑھنے اور دعا پر توجہ دیں۔',
      ar: 'يتوجه الحجاج إلى منى ويقضون اليوم والليلة هناك. منى مدينة خيام على بعد 5 كم من مكة. صلاة الظهر والعصر والمغرب والعشاء (قصراً) والفجر. التركيز على العبادة وقراءة القرآن والدعاء.',
    },

    actions: {
      en: [
        'Travel from Makkah to Mina',
        'Settle in your assigned tent',
        'Pray all 5 prayers (shortened)',
        'Recite Quran and make dhikr',
        'Rest for the big day tomorrow',
        'Continue reciting Talbiyah',
      ],
      ur: [
        'مکہ سے منیٰ کا سفر کریں',
        'اپنے مقررہ خیمے میں ٹھہریں',
        'پانچوں نمازیں پڑھیں (قصر)',
        'قرآن پڑھیں اور ذکر کریں',
        'کل کے بڑے دن کے لیے آرام کریں',
        'تلبیہ پڑھتے رہیں',
      ],
      ar: [
        'السفر من مكة إلى منى',
        'الاستقرار في الخيمة المخصصة',
        'صلاة الصلوات الخمس (قصراً)',
        'قراءة القرآن والذكر',
        'الراحة ليوم الغد العظيم',
        'الاستمرار في التلبية',
      ],
    },

    duas: [
      {
        name: 'Morning/Evening Adhkar',
        nameAr: 'أذكار الصباح والمساء',
        nameUr: 'صبح و شام کے اذکار',
        arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
        transliteration: 'Subhanallahi wa bihamdihi, Subhanallahil-Adheem',
        translation: {
          en: 'Glory be to Allah and His praise, Glory be to Allah the Almighty.',
          ur: 'اللہ پاک ہے اور اس کی حمد ہے، اللہ عظیم پاک ہے۔',
        },
        isMain: true,
      },
    ],

    references: [
      { source: 'Sahih Muslim', number: '1218', text: 'The Prophet ﷺ prayed shortened prayers in Mina' },
      { source: 'Sahih Bukhari', number: '1653', text: 'Staying in Mina on 8th Dhul Hijjah' },
    ],

    kidsTip: {
      en: '💡 Mina is like a massive camping trip with millions of Muslims! All the white tents look the same - it reminds us that on the Day of Judgment, our deeds matter, not our wealth.',
      ur: '💡 منیٰ لاکھوں مسلمانوں کے ساتھ ایک بڑے کیمپنگ کی طرح ہے! تمام سفید خیمے ایک جیسے لگتے ہیں - یہ یاد دلاتا ہے کہ قیامت کے دن ہمارے اعمال اہم ہیں، دولت نہیں۔',
      ar: '💡 منى مثل رحلة تخييم ضخمة مع ملايين المسلمين! جميع الخيام البيضاء متشابهة - يذكرنا أن يوم القيامة أعمالنا هي المهمة وليس ثروتنا.',
    },
  },

  // ==================== DAY 2: 9th Dhul Hijjah (Arafah) ====================
  {
    id: 3,
    day: 2,
    name: 'Wuquf at Arafat',
    nameAr: 'الوقوف بعرفة',
    nameUr: 'عرفات میں وقوف',

    location: 'Plain of Arafat',
    locationAr: 'صعيد عرفات',
    locationUr: 'میدان عرفات',

    emoji: '🏔️',
    color: '#F59E0B',
    scene: 'arafat',

    avatarActions: ['raising_hands', 'standing', 'walk'],

    description: {
      en: 'The Day of Arafah is THE most important day of Hajj. Standing at Arafat from Dhuhr until sunset is the pillar of Hajj - without it, Hajj is invalid. Spend the entire time making dua, crying to Allah, and seeking forgiveness. This is the day Allah frees the most people from Hellfire.',
      ur: 'یوم عرفہ حج کا سب سے اہم دن ہے۔ ظہر سے غروب آفتاب تک عرفات میں کھڑا ہونا حج کا رکن ہے - اس کے بغیر حج درست نہیں۔ پورا وقت دعا کرنے، اللہ کے سامنے رونے اور مغفرت مانگنے میں گزاریں۔ یہ وہ دن ہے جب اللہ سب سے زیادہ لوگوں کو جہنم سے آزاد کرتا ہے۔',
      ar: 'يوم عرفة هو أهم أيام الحج. الوقوف بعرفة من الظهر حتى الغروب ركن الحج - بدونه الحج باطل. اقضِ الوقت كله في الدعاء والبكاء إلى الله وطلب المغفرة. هذا اليوم الذي يعتق الله فيه أكثر الناس من النار.',
    },

    actions: {
      en: [
        'Travel to Arafat after Fajr in Mina',
        'Pray Dhuhr and Asr combined (shortened)',
        'Stand facing Qibla with hands raised',
        'Make dua continuously until sunset',
        'Cry and beg Allah for forgiveness',
        'Recite Talbiyah and Takbeer',
        'Leave for Muzdalifah after sunset',
      ],
      ur: [
        'منیٰ میں فجر کے بعد عرفات جائیں',
        'ظہر اور عصر جمع کرکے پڑھیں (قصر)',
        'قبلہ رخ ہاتھ اٹھا کر کھڑے ہوں',
        'غروب آفتاب تک مسلسل دعا کریں',
        'روئیں اور اللہ سے مغفرت مانگیں',
        'تلبیہ اور تکبیر پڑھیں',
        'غروب آفتاب کے بعد مزدلفہ روانہ ہوں',
      ],
      ar: [
        'التوجه إلى عرفة بعد فجر منى',
        'صلاة الظهر والعصر جمعاً وقصراً',
        'الوقوف مستقبل القبلة رافعاً اليدين',
        'الدعاء المستمر حتى الغروب',
        'البكاء والاستغفار',
        'التلبية والتكبير',
        'الانصراف إلى مزدلفة بعد الغروب',
      ],
    },

    duas: [
      {
        name: 'Best Dua of Arafah',
        nameAr: 'أفضل دعاء يوم عرفة',
        nameUr: 'عرفہ کے دن کی بہترین دعا',
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'La ilaha illallahu wahdahu la shareeka lahu, lahul-mulku wa lahul-hamdu wa huwa \'ala kulli shay\'in qadeer',
        translation: {
          en: 'There is no god but Allah alone, with no partner. To Him belongs dominion and praise, and He is over all things capable.',
          ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ بادشاہی اسی کی ہے اور حمد اسی کے لیے ہے اور وہ ہر چیز پر قادر ہے۔',
        },
        isMain: true,
        source: 'Tirmidhi 3585',
      },
      {
        name: 'Seeking Forgiveness',
        nameAr: 'الاستغفار',
        nameUr: 'استغفار',
        arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
        transliteration: 'Allahumma innaka \'Afuwwun tuhibbul-\'afwa fa\'fu \'anni',
        translation: {
          en: 'O Allah, You are Forgiving and love forgiveness, so forgive me.',
          ur: 'اے اللہ تو معاف کرنے والا ہے، معافی کو پسند کرتا ہے، پس مجھے معاف فرما دے۔',
        },
      },
    ],

    references: [
      { source: 'Sahih Muslim', number: '1218', text: 'Description of standing at Arafat' },
      { source: 'Tirmidhi', number: '889', text: 'Hajj is Arafah' },
      { source: 'Sahih Muslim', number: '1348', text: 'Best dua is on Day of Arafah' },
      { source: 'Sahih Muslim', number: '1348', text: 'Allah frees people from Hellfire on Arafah' },
    ],

    kidsTip: {
      en: '💡 This is the MOST important day! The Prophet ﷺ said "Hajj is Arafah." Allah looks at the pilgrims and forgives them. Ask Allah for EVERYTHING you want today!',
      ur: '💡 یہ سب سے اہم دن ہے! نبی ﷺ نے فرمایا "حج عرفہ ہے۔" اللہ حاجیوں کو دیکھتا ہے اور انہیں معاف کرتا ہے۔ آج اللہ سے جو چاہو مانگو!',
      ar: '💡 هذا أهم يوم! قال النبي ﷺ "الحج عرفة." الله ينظر إلى الحجاج ويغفر لهم. اطلب من الله كل ما تريد اليوم!',
    },
  },

  {
    id: 4,
    day: 2,
    name: 'Night in Muzdalifah',
    nameAr: 'المبيت بمزدلفة',
    nameUr: 'مزدلفہ میں رات',

    location: 'Muzdalifah',
    locationAr: 'مزدلفة',
    locationUr: 'مزدلفہ',

    emoji: '🌙',
    color: '#6366F1',
    scene: 'muzdalifah',

    avatarActions: ['walk', 'sujood', 'sitting', 'picking'],

    description: {
      en: 'After sunset at Arafat, pilgrims travel to Muzdalifah. Pray Maghrib and Isha combined. Sleep under the open sky. Collect 49 (or 70) pebbles for throwing at the Jamarat. Leave for Mina after Fajr.',
      ur: 'عرفات میں غروب آفتاب کے بعد حجاج مزدلفہ جاتے ہیں۔ مغرب اور عشاء جمع کرکے پڑھیں۔ کھلے آسمان تلے سوئیں۔ جمرات پر مارنے کے لیے 49 (یا 70) کنکریاں جمع کریں۔ فجر کے بعد منیٰ روانہ ہوں۔',
      ar: 'بعد الغروب في عرفة، يتوجه الحجاج إلى مزدلفة. صلاة المغرب والعشاء جمعاً. النوم تحت السماء المفتوحة. جمع 49 (أو 70) حصاة لرمي الجمرات. الانصراف إلى منى بعد الفجر.',
    },

    actions: {
      en: [
        'Travel from Arafat to Muzdalifah',
        'Pray Maghrib and Isha combined upon arrival',
        'Collect 49 pebbles (chickpea size)',
        'Sleep on the open ground',
        'Pray Fajr at earliest time',
        'Make dua at Mash\'ar al-Haram',
        'Leave for Mina before sunrise',
      ],
      ur: [
        'عرفات سے مزدلفہ کا سفر کریں',
        'پہنچ کر مغرب اور عشاء جمع کرکے پڑھیں',
        '49 کنکریاں جمع کریں (چنے کے برابر)',
        'کھلی زمین پر سوئیں',
        'فجر جلد سے جلد پڑھیں',
        'مشعر الحرام پر دعا کریں',
        'طلوع آفتاب سے پہلے منیٰ روانہ ہوں',
      ],
      ar: [
        'السفر من عرفة إلى مزدلفة',
        'صلاة المغرب والعشاء جمعاً عند الوصول',
        'جمع 49 حصاة (بحجم الحمص)',
        'النوم على الأرض المكشوفة',
        'صلاة الفجر في أول وقتها',
        'الدعاء عند المشعر الحرام',
        'الانصراف إلى منى قبل طلوع الشمس',
      ],
    },

    duas: [
      {
        name: 'At Mash\'ar al-Haram',
        nameAr: 'عند المشعر الحرام',
        nameUr: 'مشعر الحرام پر',
        arabic: 'اللَّهُمَّ كَمَا وَقَفْتَنَا فِيهِ وَأَرَيْتَنَا إِيَّاهُ فَوَفِّقْنَا لِذِكْرِكَ كَمَا هَدَيْتَنَا',
        transliteration: 'Allahumma kama waqaftana feehi wa araytana iyyahu fawaffiqna lidhikrika kama hadaytana',
        translation: {
          en: 'O Allah, as You have made us stand here and shown us this, grant us success in remembering You as You have guided us.',
          ur: 'اے اللہ جیسے تو نے ہمیں یہاں کھڑا کیا اور دکھایا، ہمیں اپنے ذکر کی توفیق دے جیسے تو نے ہماری رہنمائی کی۔',
        },
        isMain: true,
      },
    ],

    references: [
      { source: 'Sahih Muslim', number: '1218', text: 'Spending night at Muzdalifah' },
      { source: 'Sahih Bukhari', number: '1683', text: 'Collecting pebbles at Muzdalifah' },
      { source: 'Quran', number: '2:198', text: 'Remember Allah at Mash\'ar al-Haram' },
    ],

    kidsTip: {
      en: '💡 Sleeping under the stars with millions of Muslims! Collect small pebbles (like chickpeas) - you\'ll need them tomorrow to throw at the Jamarat.',
      ur: '💡 لاکھوں مسلمانوں کے ساتھ ستاروں تلے سونا! چھوٹی کنکریاں جمع کریں (چنے جتنی) - کل جمرات پر پھینکنے کے لیے چاہیں گی۔',
      ar: '💡 النوم تحت النجوم مع ملايين المسلمين! اجمع حصى صغيرة (بحجم الحمص) - ستحتاجها غداً لرمي الجمرات.',
    },
  },

  // ==================== DAY 3: 10th Dhul Hijjah (Eid) ====================
  {
    id: 5,
    day: 3,
    name: 'Rami - Jamrat al-Aqaba',
    nameAr: 'رمي جمرة العقبة',
    nameUr: 'جمرۃ العقبہ کی رمی',

    location: 'Jamarat Bridge, Mina',
    locationAr: 'جسر الجمرات، منى',
    locationUr: 'جمرات پل، منیٰ',

    emoji: '🎯',
    color: '#EF4444',
    scene: 'jamarat',

    avatarActions: ['throwing', 'walk'],

    description: {
      en: 'On the 10th of Dhul Hijjah (Eid day), throw 7 pebbles at the largest pillar (Jamrat al-Aqaba only). Each throw represents rejecting Shaytan. Say "Allahu Akbar" with each throw. This commemorates Ibrahim (AS) rejecting Shaytan\'s whispers.',
      ur: '10 ذوالحجہ (عید کے دن) سب سے بڑے ستون (صرف جمرۃ العقبہ) پر 7 کنکریاں ماریں۔ ہر پتھر شیطان کو رد کرنے کی علامت ہے۔ ہر پھینکنے پر "اللہ اکبر" کہیں۔ یہ حضرت ابراہیم علیہ السلام کا شیطان کی وسوسوں کو رد کرنا یاد کرتا ہے۔',
      ar: 'في اليوم العاشر من ذي الحجة (يوم العيد)، ارمِ 7 حصيات على الجمرة الكبرى (جمرة العقبة فقط). كل رمية ترمز لرفض الشيطان. قل "الله أكبر" مع كل رمية. إحياء لذكرى إبراهيم عليه السلام رفض وساوس الشيطان.',
    },

    actions: {
      en: [
        'Go to Jamarat after sunrise',
        'Approach Jamrat al-Aqaba (largest)',
        'Throw 7 pebbles, one at a time',
        'Say "Bismillah, Allahu Akbar" with each',
        'Stop reciting Talbiyah after first throw',
        'Leave immediately - no dua at this Jamrah',
      ],
      ur: [
        'طلوع آفتاب کے بعد جمرات جائیں',
        'جمرۃ العقبہ (بڑے ستون) کے پاس جائیں',
        'ایک ایک کرکے 7 کنکریاں ماریں',
        'ہر پھینکنے پر "بسم اللہ، اللہ اکبر" کہیں',
        'پہلی کنکری کے بعد تلبیہ بند کریں',
        'فوراً نکل جائیں - یہاں دعا نہیں',
      ],
      ar: [
        'التوجه للجمرات بعد الشروق',
        'الاقتراب من جمرة العقبة (الكبرى)',
        'رمي 7 حصيات، واحدة تلو الأخرى',
        'قول "بسم الله، الله أكبر" مع كل رمية',
        'التوقف عن التلبية بعد أول رمية',
        'المغادرة فوراً - لا دعاء عند هذه الجمرة',
      ],
    },

    duas: [
      {
        name: 'While throwing',
        nameAr: 'عند الرمي',
        nameUr: 'پھینکتے وقت',
        arabic: 'بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ',
        transliteration: 'Bismillah, Allahu Akbar',
        translation: {
          en: 'In the name of Allah, Allah is the Greatest.',
          ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے۔',
        },
        isMain: true,
      },
    ],

    references: [
      { source: 'Sahih Bukhari', number: '1746', text: 'Throwing at Jamrat al-Aqaba' },
      { source: 'Sahih Muslim', number: '1297', text: 'Number of pebbles and Takbeer' },
    ],

    kidsTip: {
      en: '💡 Prophet Ibrahim (AS) was tempted by Shaytan here. He threw stones to reject him! When you throw, imagine you are rejecting all the bad things Shaytan whispers to you.',
      ur: '💡 حضرت ابراہیم علیہ السلام کو یہاں شیطان نے بہکایا تھا۔ انہوں نے اسے رد کرنے کے لیے پتھر مارے! جب آپ ماریں، تصور کریں کہ آپ شیطان کے تمام بُرے وسوسوں کو رد کر رہے ہیں۔',
      ar: '💡 إبراهيم عليه السلام أغواه الشيطان هنا. رمى الحجارة رفضاً له! عندما ترمي، تخيل أنك ترفض كل وساوس الشيطان السيئة.',
    },
  },

  {
    id: 6,
    day: 3,
    name: 'Sacrifice (Hady)',
    nameAr: 'ذبح الهدي',
    nameUr: 'قربانی',

    location: 'Mina',
    locationAr: 'منى',
    locationUr: 'منیٰ',

    emoji: '🐑',
    color: '#10B981',
    scene: 'mina',

    avatarActions: ['standing', 'raising_hands'],

    description: {
      en: 'After Rami, offer the sacrifice (Hady). This commemorates Ibrahim (AS) sacrificing a ram instead of Ismail (AS). Today most pilgrims pay for sacrifice through authorized services. The meat is distributed to the poor.',
      ur: 'رمی کے بعد قربانی دیں (ہدی)۔ یہ حضرت ابراہیم علیہ السلام کا اسماعیل علیہ السلام کی جگہ مینڈھا ذبح کرنا یاد کرتا ہے۔ آج زیادہ تر حجاج مجاز خدمات کے ذریعے قربانی کی ادائیگی کرتے ہیں۔ گوشت غریبوں میں تقسیم ہوتا ہے۔',
      ar: 'بعد الرمي، اذبح الهدي. إحياء لذكرى إبراهيم عليه السلام ذبح كبشاً بدلاً من إسماعيل عليه السلام. اليوم معظم الحجاج يدفعون للذبح عبر الخدمات المعتمدة. يوزع اللحم على الفقراء.',
    },

    actions: {
      en: [
        'Arrange for sacrifice (sheep, goat, or share in cow/camel)',
        'Can be done through bank/authorized services',
        'Say "Bismillah, Allahu Akbar" if slaughtering yourself',
        'Meat is distributed to the needy worldwide',
        'This is obligatory for Hajj Tamattu and Qiran',
      ],
      ur: [
        'قربانی کا انتظام کریں (بھیڑ، بکری، یا گائے/اونٹ میں حصہ)',
        'بینک/مجاز خدمات کے ذریعے کی جا سکتی ہے',
        'اگر خود ذبح کریں تو "بسم اللہ، اللہ اکبر" کہیں',
        'گوشت دنیا بھر کے ضرورت مندوں میں تقسیم ہوتا ہے',
        'حج تمتع اور قران کے لیے واجب ہے',
      ],
      ar: [
        'ترتيب الذبح (شاة أو حصة في بقرة/جمل)',
        'يمكن عبر البنك/الخدمات المعتمدة',
        'قول "بسم الله، الله أكبر" إن ذبحت بنفسك',
        'يوزع اللحم على المحتاجين في العالم',
        'واجب لحج التمتع والقران',
      ],
    },

    duas: [
      {
        name: 'Before sacrifice',
        nameAr: 'قبل الذبح',
        nameUr: 'ذبح سے پہلے',
        arabic: 'بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ، اللَّهُمَّ تَقَبَّلْ مِنِّي',
        transliteration: 'Bismillah, Allahu Akbar, Allahumma taqabbal minni',
        translation: {
          en: 'In the name of Allah, Allah is the Greatest. O Allah, accept from me.',
          ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے۔ اے اللہ مجھ سے قبول فرما۔',
        },
        isMain: true,
      },
    ],

    references: [
      { source: 'Quran', number: '22:36', text: 'Sacrifice is among the symbols of Allah' },
      { source: 'Sahih Bukhari', number: '1718', text: 'Sacrificing on day of Eid' },
      { source: 'Quran', number: '37:107', text: 'Story of Ibrahim and the ram' },
    ],

    kidsTip: {
      en: '💡 Remember the story of Ibrahim (AS) and Ismail (AS)? Allah tested them, and when they were ready to obey, Allah sent a ram to sacrifice instead. This teaches us that Allah rewards obedience!',
      ur: '💡 حضرت ابراہیم اور اسماعیل علیہما السلام کی کہانی یاد ہے؟ اللہ نے انہیں آزمایا، اور جب وہ اطاعت کے لیے تیار تھے، اللہ نے ذبح کے لیے مینڈھا بھیجا۔ یہ سکھاتا ہے کہ اللہ اطاعت کا انعام دیتا ہے!',
      ar: '💡 تذكر قصة إبراهيم وإسماعيل عليهما السلام؟ اختبرهما الله، وعندما كانا مستعدين للطاعة، أرسل الله كبشاً للذبح بدلاً. هذا يعلمنا أن الله يكافئ الطاعة!',
    },
  },

  {
    id: 7,
    day: 3,
    name: 'Halq or Taqsir',
    nameAr: 'الحلق أو التقصير',
    nameUr: 'حلق یا تقصیر',

    location: 'Mina',
    locationAr: 'منى',
    locationUr: 'منیٰ',

    emoji: '✂️',
    color: '#EC4899',
    scene: 'mina',

    avatarActions: ['shaving'],

    description: {
      en: 'After sacrifice, shave the head (Halq - more reward for men) or trim hair from all sides (Taqsir). Women trim a fingertip length. After this, you enter partial Tahallul - most Ihram restrictions are lifted except intimacy with spouse.',
      ur: 'قربانی کے بعد سر منڈوائیں (حلق - مردوں کے لیے زیادہ ثواب) یا سب طرف سے بال کتروائیں (تقصیر)۔ خواتین انگلی کی نوک کی لمبائی کاٹیں۔ اس کے بعد جزوی تحلل ہوتا ہے - بیوی سے قربت کے علاوہ احرام کی زیادہ تر پابندیاں ختم ہوجاتی ہیں۔',
      ar: 'بعد الذبح، احلق الرأس (الحلق - أفضل للرجال) أو قصر الشعر من جميع الجوانب (التقصير). النساء يقصصن قدر أنملة. بعدها تدخل التحلل الأصغر - ترفع أكثر محظورات الإحرام عدا الجماع.',
    },

    actions: {
      en: [
        'Go to barber after sacrifice',
        'Men: Shave head completely (preferred) or trim',
        'Women: Trim fingertip length only',
        'Say "Bismillah" before cutting',
        'Now in partial Tahallul',
        'Can wear normal clothes, use perfume',
        'Intimacy still prohibited until Tawaf al-Ifadah',
      ],
      ur: [
        'قربانی کے بعد حجام کے پاس جائیں',
        'مرد: مکمل سر منڈوائیں (بہتر) یا کتروائیں',
        'خواتین: صرف انگلی کے پورے کی لمبائی کاٹیں',
        'کاٹنے سے پہلے "بسم اللہ" کہیں',
        'اب جزوی تحلل میں ہیں',
        'عام کپڑے پہن سکتے ہیں، خوشبو لگا سکتے ہیں',
        'طواف الافاضہ تک ازدواجی تعلقات ممنوع',
      ],
      ar: [
        'الذهاب للحلاق بعد الذبح',
        'الرجال: حلق الرأس كاملاً (أفضل) أو التقصير',
        'النساء: قص قدر أنملة فقط',
        'قول "بسم الله" قبل القص',
        'الآن في التحلل الأصغر',
        'يمكن لبس الثياب العادية واستعمال الطيب',
        'الجماع ممنوع حتى طواف الإفاضة',
      ],
    },

    duas: [
      {
        name: 'Before cutting',
        nameAr: 'قبل القص',
        nameUr: 'کاٹنے سے پہلے',
        arabic: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah',
        translation: {
          en: 'In the name of Allah.',
          ur: 'اللہ کے نام سے۔',
        },
        isMain: true,
      },
    ],

    references: [
      { source: 'Sahih Bukhari', number: '1726', text: 'Shaving the head' },
      { source: 'Sahih Muslim', number: '1301', text: 'Halq is better than Taqsir' },
    ],

    kidsTip: {
      en: '💡 Shaving the head is like a fresh start! The Prophet ﷺ made dua 3 times for those who shave and once for those who trim. Shaving shows complete submission to Allah.',
      ur: '💡 سر منڈوانا نئی شروعات کی طرح ہے! نبی ﷺ نے منڈوانے والوں کے لیے 3 بار اور کتروانے والوں کے لیے ایک بار دعا کی۔ منڈوانا اللہ کے سامنے مکمل سر تسلیم ظاہر کرتا ہے۔',
      ar: '💡 حلق الرأس كبداية جديدة! دعا النبي ﷺ ثلاثاً للمحلقين ومرة للمقصرين. الحلق يُظهر الاستسلام الكامل لله.',
    },
  },

  {
    id: 8,
    day: 3,
    name: 'Tawaf al-Ifadah',
    nameAr: 'طواف الإفاضة',
    nameUr: 'طواف الافاضہ',

    location: 'Masjid al-Haram',
    locationAr: 'المسجد الحرام',
    locationUr: 'مسجد الحرام',

    emoji: '🕋',
    color: '#8B5CF6',
    scene: 'kaaba',

    avatarActions: ['tawaf', 'touching', 'raising_hands', 'sujood'],

    description: {
      en: 'Tawaf al-Ifadah is a pillar of Hajj and must be done. Go to Makkah and perform 7 circuits around the Kaaba. Then pray 2 rakaat behind Maqam Ibrahim. After this, complete Tahallul - ALL Ihram restrictions are lifted.',
      ur: 'طواف الافاضہ حج کا رکن ہے اور ضروری ہے۔ مکہ جائیں اور کعبہ کے 7 چکر لگائیں۔ پھر مقام ابراہیم کے پیچھے 2 رکعت پڑھیں۔ اس کے بعد مکمل تحلل ہوتا ہے - احرام کی تمام پابندیاں ختم ہوجاتی ہیں۔',
      ar: 'طواف الإفاضة ركن من أركان الحج ولا بد منه. اذهب إلى مكة وطف 7 أشواط حول الكعبة. ثم صلِّ ركعتين خلف مقام إبراهيم. بعدها التحلل الأكبر - ترفع جميع محظورات الإحرام.',
    },

    actions: {
      en: [
        'Travel from Mina to Masjid al-Haram',
        'Enter and approach Kaaba',
        'Perform 7 circuits (Tawaf)',
        'Pray 2 rakaat behind Maqam Ibrahim',
        'Drink Zamzam water',
        'Now in complete Tahallul',
        'Can return to Mina or stay in Makkah',
      ],
      ur: [
        'منیٰ سے مسجد الحرام جائیں',
        'داخل ہوں اور کعبہ کے قریب جائیں',
        '7 چکر لگائیں (طواف)',
        'مقام ابراہیم کے پیچھے 2 رکعت پڑھیں',
        'زمزم کا پانی پئیں',
        'اب مکمل تحلل میں ہیں',
        'منیٰ واپس جا سکتے ہیں یا مکہ میں رہ سکتے ہیں',
      ],
      ar: [
        'السفر من منى إلى المسجد الحرام',
        'الدخول والاقتراب من الكعبة',
        'الطواف 7 أشواط',
        'صلاة ركعتين خلف مقام إبراهيم',
        'شرب ماء زمزم',
        'الآن في التحلل الأكبر',
        'يمكن العودة لمنى أو البقاء في مكة',
      ],
    },

    duas: [
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
        isMain: true,
      },
    ],

    references: [
      { source: 'Quran', number: '22:29', text: 'Let them complete their rites and perform Tawaf around the Ancient House' },
      { source: 'Sahih Bukhari', number: '1755', text: 'Tawaf al-Ifadah' },
      { source: 'Sahih Muslim', number: '1211', text: 'This Tawaf is a pillar of Hajj' },
    ],

    kidsTip: {
      en: '💡 This is the main Tawaf of Hajj! After this, you have completed the main pillars. You can now wear normal clothes and do everything normally again!',
      ur: '💡 یہ حج کا اہم طواف ہے! اس کے بعد آپ نے اہم ارکان مکمل کر لیے۔ اب آپ عام کپڑے پہن سکتے ہیں اور سب کچھ عام طریقے سے کر سکتے ہیں!',
      ar: '💡 هذا طواف الحج الرئيسي! بعده أكملت الأركان الرئيسية. يمكنك الآن لبس الثياب العادية وفعل كل شيء بشكل طبيعي!',
    },
  },

  // ==================== DAYS 4-5: 11th-12th Dhul Hijjah ====================
  {
    id: 9,
    day: 4,
    name: 'Return to Mina',
    nameAr: 'العودة إلى منى',
    nameUr: 'منیٰ واپسی',

    location: 'Mina',
    locationAr: 'منى',
    locationUr: 'منیٰ',

    emoji: '⛺',
    color: '#06B6D4',
    scene: 'mina',

    avatarActions: ['walk', 'sitting', 'sujood'],

    description: {
      en: 'Return to Mina to spend the nights of Tashreeq (11th and 12th, optionally 13th). These are days of eating, drinking, and remembering Allah. Pray all prayers and make Takbeer frequently.',
      ur: 'تشریق کی راتیں (11ویں اور 12ویں، اختیاری طور پر 13ویں) گزارنے کے لیے منیٰ واپس جائیں۔ یہ کھانے پینے اور اللہ کو یاد کرنے کے دن ہیں۔ تمام نمازیں پڑھیں اور کثرت سے تکبیر کہیں۔',
      ar: 'العودة إلى منى للمبيت ليالي التشريق (11 و12، واختيارياً 13). هذه أيام أكل وشرب وذكر الله. صلِّ جميع الصلوات وأكثر من التكبير.',
    },

    actions: {
      en: [
        'Return to your tent in Mina',
        'Spend the night there (obligatory)',
        'Pray all 5 prayers (shortened)',
        'Recite Takbeer after prayers',
        'Rest and prepare for Rami tomorrow',
        'Make dhikr and read Quran',
      ],
      ur: [
        'منیٰ میں اپنے خیمے میں واپس جائیں',
        'رات وہیں گزاریں (واجب)',
        'پانچوں نمازیں پڑھیں (قصر)',
        'نمازوں کے بعد تکبیر کہیں',
        'آرام کریں اور کل کی رمی کی تیاری کریں',
        'ذکر کریں اور قرآن پڑھیں',
      ],
      ar: [
        'العودة إلى خيمتك في منى',
        'المبيت هناك (واجب)',
        'صلاة الصلوات الخمس (قصراً)',
        'التكبير بعد الصلوات',
        'الراحة والاستعداد للرمي غداً',
        'الذكر وقراءة القرآن',
      ],
    },

    duas: [
      {
        name: 'Takbeer of Tashreeq',
        nameAr: 'تكبيرات التشريق',
        nameUr: 'تکبیرات تشریق',
        arabic: 'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ',
        transliteration: 'Allahu Akbar, Allahu Akbar, La ilaha illallah, Wallahu Akbar, Allahu Akbar, Wa lillahil-hamd',
        translation: {
          en: 'Allah is the Greatest, Allah is the Greatest. There is no god but Allah. Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise.',
          ur: 'اللہ سب سے بڑا ہے، اللہ سب سے بڑا ہے۔ اللہ کے سوا کوئی معبود نہیں۔ اللہ سب سے بڑا ہے، اللہ سب سے بڑا ہے، اور تمام حمد اللہ کے لیے ہے۔',
        },
        isMain: true,
      },
    ],

    references: [
      { source: 'Sahih Bukhari', number: '1742', text: 'Spending nights in Mina' },
      { source: 'Quran', number: '2:203', text: 'Remember Allah during the appointed days' },
    ],

    kidsTip: {
      en: '💡 The Days of Tashreeq are like a celebration! Eat well, rest, and keep remembering Allah. The Prophet ﷺ said these are days of eating, drinking, and dhikr.',
      ur: '💡 تشریق کے دن جشن کی طرح ہیں! اچھا کھائیں، آرام کریں، اور اللہ کو یاد کرتے رہیں۔ نبی ﷺ نے فرمایا یہ کھانے پینے اور ذکر کے دن ہیں۔',
      ar: '💡 أيام التشريق مثل الاحتفال! كل جيداً واسترح واستمر في ذكر الله. قال النبي ﷺ إنها أيام أكل وشرب وذكر.',
    },
  },

  {
    id: 10,
    day: 4,
    name: 'Rami - All 3 Jamarat (Day 1)',
    nameAr: 'رمي الجمرات الثلاث',
    nameUr: 'تینوں جمرات کی رمی (پہلا دن)',

    location: 'Jamarat Bridge, Mina',
    locationAr: 'جسر الجمرات، منى',
    locationUr: 'جمرات پل، منیٰ',

    emoji: '🎯',
    color: '#EF4444',
    scene: 'jamarat',

    avatarActions: ['throwing', 'walk', 'raising_hands'],

    description: {
      en: 'On 11th Dhul Hijjah, throw at ALL THREE Jamarat. Start with the smallest (Jamrat as-Sughra), then middle (Jamrat al-Wusta), then largest (Jamrat al-Aqaba). Throw 7 pebbles at each. Make dua after first two.',
      ur: '11 ذوالحجہ کو تینوں جمرات پر ماریں۔ سب سے چھوٹی (جمرۃ الصغریٰ) سے شروع کریں، پھر درمیانی (جمرۃ الوسطیٰ)، پھر سب سے بڑی (جمرۃ العقبہ)۔ ہر ایک پر 7 کنکریاں ماریں۔ پہلی دو کے بعد دعا کریں۔',
      ar: 'في 11 ذي الحجة، ارمِ الجمرات الثلاث. ابدأ بالصغرى، ثم الوسطى، ثم الكبرى (العقبة). ارمِ 7 حصيات على كل واحدة. ادعُ بعد الأولى والثانية.',
    },

    actions: {
      en: [
        'Go to Jamarat after Dhuhr (best time)',
        'Start with Small Jamrah - throw 7 pebbles',
        'Move aside and make long dua',
        'Middle Jamrah - throw 7 pebbles',
        'Move aside and make long dua',
        'Large Jamrah (Aqaba) - throw 7 pebbles',
        'Leave immediately - no dua here',
      ],
      ur: [
        'ظہر کے بعد جمرات جائیں (بہترین وقت)',
        'چھوٹی جمرہ سے شروع کریں - 7 کنکریاں ماریں',
        'ایک طرف ہو کر لمبی دعا کریں',
        'درمیانی جمرہ - 7 کنکریاں ماریں',
        'ایک طرف ہو کر لمبی دعا کریں',
        'بڑی جمرہ (عقبہ) - 7 کنکریاں ماریں',
        'فوراً نکل جائیں - یہاں دعا نہیں',
      ],
      ar: [
        'التوجه للجمرات بعد الظهر (أفضل وقت)',
        'البدء بالصغرى - رمي 7 حصيات',
        'التنحي جانباً والدعاء مطولاً',
        'الوسطى - رمي 7 حصيات',
        'التنحي جانباً والدعاء مطولاً',
        'الكبرى (العقبة) - رمي 7 حصيات',
        'المغادرة فوراً - لا دعاء هنا',
      ],
    },

    duas: [
      {
        name: 'While throwing',
        nameAr: 'عند الرمي',
        nameUr: 'پھینکتے وقت',
        arabic: 'بِسْمِ اللَّهِ، اللَّهُ أَكْبَرُ',
        transliteration: 'Bismillah, Allahu Akbar',
        translation: {
          en: 'In the name of Allah, Allah is the Greatest.',
          ur: 'اللہ کے نام سے، اللہ سب سے بڑا ہے۔',
        },
        isMain: true,
      },
    ],

    references: [
      { source: 'Sahih Muslim', number: '1297', text: 'Throwing at all three Jamarat' },
      { source: 'Sahih Bukhari', number: '1750', text: 'Making dua after first two Jamarat' },
    ],

    kidsTip: {
      en: '💡 Today you throw at ALL THREE pillars, not just one! Remember the order: Small → Medium → Large. Make dua after the first two, but leave quickly after the big one.',
      ur: '💡 آج آپ تینوں ستونوں پر ماریں گے، صرف ایک نہیں! ترتیب یاد رکھیں: چھوٹی ← درمیانی ← بڑی۔ پہلی دو کے بعد دعا کریں، لیکن بڑی کے بعد جلدی نکل جائیں۔',
      ar: '💡 اليوم ترمي الجمرات الثلاث، ليس واحدة فقط! تذكر الترتيب: الصغرى ← الوسطى ← الكبرى. ادعُ بعد الأوليين، لكن غادر بسرعة بعد الكبرى.',
    },
  },

  {
    id: 11,
    day: 5,
    name: 'Rami - All 3 Jamarat (Day 2)',
    nameAr: 'رمي الجمرات الثلاث',
    nameUr: 'تینوں جمرات کی رمی (دوسرا دن)',

    location: 'Jamarat Bridge, Mina',
    locationAr: 'جسر الجمرات، منى',
    locationUr: 'جمرات پل، منیٰ',

    emoji: '🎯',
    color: '#EF4444',
    scene: 'jamarat',

    avatarActions: ['throwing', 'walk', 'raising_hands'],

    description: {
      en: 'On 12th Dhul Hijjah, repeat the same process - throw at all three Jamarat. After completing, you can leave Mina before sunset (if in a hurry) or stay for the 13th (more reward).',
      ur: '12 ذوالحجہ کو وہی عمل دہرائیں - تینوں جمرات پر ماریں۔ مکمل کرنے کے بعد غروب آفتاب سے پہلے منیٰ چھوڑ سکتے ہیں (جلدی ہو تو) یا 13ویں تک رہیں (زیادہ ثواب)۔',
      ar: 'في 12 ذي الحجة، كرر نفس العملية - الرمي على الجمرات الثلاث. بعد الانتهاء، يمكنك مغادرة منى قبل الغروب (إن كنت مستعجلاً) أو البقاء لليوم 13 (أكثر أجراً).',
    },

    actions: {
      en: [
        'Same as Day 1: throw at all 3 Jamarat',
        'Small → Medium → Large',
        '7 pebbles each, with Takbeer',
        'Dua after first two only',
        'Option 1: Leave Mina before sunset',
        'Option 2: Stay for 13th (recommended)',
      ],
      ur: [
        'پہلے دن کی طرح: تینوں جمرات پر ماریں',
        'چھوٹی ← درمیانی ← بڑی',
        'ہر ایک پر 7 کنکریاں، تکبیر کے ساتھ',
        'صرف پہلی دو کے بعد دعا',
        'آپشن 1: غروب آفتاب سے پہلے منیٰ چھوڑ دیں',
        'آپشن 2: 13ویں تک رہیں (مستحب)',
      ],
      ar: [
        'كاليوم الأول: الرمي على الجمرات الثلاث',
        'الصغرى ← الوسطى ← الكبرى',
        '7 حصيات لكل واحدة مع التكبير',
        'الدعاء بعد الأولى والثانية فقط',
        'الخيار 1: مغادرة منى قبل الغروب',
        'الخيار 2: البقاء لليوم 13 (مستحب)',
      ],
    },

    duas: [
      {
        name: 'Quran verse about leaving',
        nameAr: 'آية قرآنية',
        nameUr: 'قرآنی آیت',
        arabic: 'فَمَن تَعَجَّلَ فِي يَوْمَيْنِ فَلَا إِثْمَ عَلَيْهِ وَمَن تَأَخَّرَ فَلَا إِثْمَ عَلَيْهِ',
        transliteration: 'Faman ta\'ajjala fi yawmayni fala ithma \'alayhi wa man ta\'akhkhara fala ithma \'alayh',
        translation: {
          en: 'Whoever hurries in two days, there is no sin on him. And whoever delays, there is no sin on him.',
          ur: 'جو دو دنوں میں جلدی کرے اس پر کوئی گناہ نہیں اور جو تاخیر کرے اس پر بھی کوئی گناہ نہیں۔',
        },
        quranRef: 'Quran 2:203',
        isMain: true,
      },
    ],

    references: [
      { source: 'Quran', number: '2:203', text: 'Permission to leave after 2 days or stay for 3' },
      { source: 'Sahih Muslim', number: '1297', text: 'Rami on days of Tashreeq' },
    ],

    kidsTip: {
      en: '💡 Allah gives us a choice! You can leave today if you need to, or stay one more day for extra reward. Both are completely fine - see how merciful Allah is!',
      ur: '💡 اللہ ہمیں انتخاب دیتا ہے! ضرورت ہو تو آج جا سکتے ہیں، یا اضافی ثواب کے لیے ایک دن اور رہیں۔ دونوں بالکل ٹھیک ہیں - دیکھو اللہ کتنا رحیم ہے!',
      ar: '💡 الله يعطينا الخيار! يمكنك المغادرة اليوم إن احتجت، أو البقاء يوماً إضافياً لمزيد من الأجر. كلاهما مقبول - انظر كم الله رحيم!',
    },
  },

  {
    id: 12,
    day: 5,
    name: 'Tawaf al-Wada (Farewell)',
    nameAr: 'طواف الوداع',
    nameUr: 'طواف الوداع',

    location: 'Masjid al-Haram',
    locationAr: 'المسجد الحرام',
    locationUr: 'مسجد الحرام',

    emoji: '🕋',
    color: '#8B5CF6',
    scene: 'kaaba',

    avatarActions: ['tawaf', 'raising_hands', 'walk'],

    description: {
      en: 'The Farewell Tawaf is the last thing you do before leaving Makkah. It is obligatory for those leaving the city. Perform 7 circuits around the Kaaba, pray 2 rakaat, then leave directly - do not linger in Makkah after.',
      ur: 'طواف الوداع مکہ چھوڑنے سے پہلے آخری چیز ہے جو آپ کرتے ہیں۔ شہر چھوڑنے والوں کے لیے واجب ہے۔ کعبہ کے 7 چکر لگائیں، 2 رکعت پڑھیں، پھر سیدھے نکل جائیں - بعد میں مکہ میں نہ رکیں۔',
      ar: 'طواف الوداع آخر ما تفعله قبل مغادرة مكة. واجب على من يغادر المدينة. طف 7 أشواط حول الكعبة، صلِّ ركعتين، ثم غادر مباشرة - لا تمكث في مكة بعده.',
    },

    actions: {
      en: [
        'This is your last act before leaving Makkah',
        'Perform 7 circuits around Kaaba',
        'Pray 2 rakaat behind Maqam Ibrahim',
        'Make heartfelt dua - you are saying goodbye',
        'Leave Masjid with humility and reverence',
        'Depart from Makkah directly',
        'Do not stay for shopping/other activities',
      ],
      ur: [
        'یہ مکہ چھوڑنے سے پہلے آپ کا آخری عمل ہے',
        'کعبہ کے 7 چکر لگائیں',
        'مقام ابراہیم کے پیچھے 2 رکعت پڑھیں',
        'دل سے دعا کریں - آپ الوداع کہہ رہے ہیں',
        'مسجد سے پیچھے چلتے ہوئے نکلیں (مستحب)',
        'مکہ سے براہ راست روانہ ہوں',
        'خریداری/دیگر کاموں کے لیے نہ رکیں',
      ],
      ar: [
        'هذا آخر عمل قبل مغادرة مكة',
        'الطواف 7 أشواط حول الكعبة',
        'صلاة ركعتين خلف مقام إبراهيم',
        'الدعاء بإخلاص - أنت تودع',
        'الخروج من المسجد متراجعاً (مستحب)',
        'المغادرة من مكة مباشرة',
        'عدم البقاء للتسوق أو غيره',
      ],
    },

    duas: [
      {
        name: 'Farewell Dua',
        nameAr: 'دعاء الوداع',
        nameUr: 'وداع کی دعا',
        arabic: 'اللَّهُمَّ إِنَّ الْبَيْتَ بَيْتُكَ وَالْعَبْدَ عَبْدُكَ وَابْنُ عَبْدِكَ، حَمَلْتَنِي عَلَى مَا سَخَّرْتَ لِي مِنْ خَلْقِكَ حَتَّى سَيَّرْتَنِي فِي بِلَادِكَ وَبَلَّغْتَنِي بِنِعْمَتِكَ حَتَّى أَعَنْتَنِي عَلَى قَضَاءِ مَنَاسِكِكَ',
        transliteration: 'Allahumma innal-bayta baytuka wal-\'abdu \'abduka wabnu \'abdik...',
        translation: {
          en: 'O Allah, this House is Your House, and this servant is Your servant and the child of Your servant. You carried me on what You have subjected to me of Your creation...',
          ur: 'اے اللہ یہ گھر تیرا گھر ہے اور یہ بندہ تیرا بندہ ہے اور تیرے بندے کا بیٹا ہے...',
        },
        isMain: true,
      },
    ],

    references: [
      { source: 'Sahih Bukhari', number: '1755', text: 'Last act should be Tawaf' },
      { source: 'Sahih Muslim', number: '1327', text: 'Farewell Tawaf is obligatory' },
      { source: 'Sahih Muslim', number: '1328', text: 'Exemption for menstruating women' },
    ],

    kidsTip: {
      en: '💡 This is goodbye to the Kaaba! Make dua with all your heart. Ask Allah to bring you back again. The Prophet ﷺ said the last thing should be Tawaf - so go directly after!',
      ur: '💡 یہ کعبہ کو الوداع ہے! پورے دل سے دعا کریں۔ اللہ سے دوبارہ آنے کی دعا مانگیں۔ نبی ﷺ نے فرمایا آخری چیز طواف ہونی چاہیے - تو سیدھے بعد میں نکل جائیں!',
      ar: '💡 هذا وداع للكعبة! ادعُ بكل قلبك. اسأل الله أن يعيدك مرة أخرى. قال النبي ﷺ آخر شيء يكون الطواف - فغادر مباشرة بعده!',
    },
  },
];

// Hajj completion info
export const HAJJ_COMPLETION = {
  title: {
    en: 'Hajj Complete! Hajj Mabroor!',
    ur: 'حج مکمل! حج مبرور!',
    ar: 'تم الحج! حج مبرور!',
  },
  message: {
    en: 'Masha Allah! You have learned all the steps of Hajj. May Allah accept your worship and grant you the opportunity to perform Hajj. A accepted Hajj has no reward except Paradise!',
    ur: 'ماشاءاللہ! آپ نے حج کے تمام مراحل سیکھ لیے۔ اللہ آپ کی عبادت قبول فرمائے اور آپ کو حج کی سعادت نصیب فرمائے۔ مقبول حج کا بدلہ صرف جنت ہے!',
    ar: 'ما شاء الله! لقد تعلمت جميع خطوات الحج. تقبل الله عبادتك ورزقك أداء الحج. الحج المبرور ليس له جزاء إلا الجنة!',
  },
  hadith: {
    arabic: 'الْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ',
    transliteration: 'Al-Hajjul-mabrooru laysa lahu jaza\'un illal-Jannah',
    translation: {
      en: '"An accepted Hajj has no reward except Paradise."',
      ur: '"مقبول حج کا بدلہ صرف جنت ہے۔"',
    },
    source: 'Sahih Bukhari 1773, Sahih Muslim 1349',
  },
};

export default HAJJ_STEPS;
