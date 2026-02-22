/**
 * Quran FAQ Data - Top Questions Muslims Want Answered
 * Multi-language support: English (en), Urdu (ur), Arabic (ar)
 * Organized by categories with Quranic references
 */

// FAQ Categories
export const FAQ_CATEGORIES = [
  { id: 'faith', name: 'Faith & Beliefs', nameUr: 'ایمان اور عقائد', nameAr: 'الإيمان والعقيدة', icon: 'Star', color: '#8B5CF6' },
  { id: 'prayer', name: 'Prayer (Salah)', nameUr: 'نماز', nameAr: 'الصلاة', icon: 'Clock', color: '#10B981' },
  { id: 'quran', name: 'About the Quran', nameUr: 'قرآن کے بارے میں', nameAr: 'عن القرآن', icon: 'BookOpen', color: '#3B82F6' },
  { id: 'prophets', name: 'Prophets & Stories', nameUr: 'انبیاء اور قصے', nameAr: 'الأنبياء والقصص', icon: 'Users', color: '#F59E0B' },
  { id: 'afterlife', name: 'Death & Afterlife', nameUr: 'موت اور آخرت', nameAr: 'الموت والآخرة', icon: 'Sunrise', color: '#6366F1' },
  { id: 'family', name: 'Family & Marriage', nameUr: 'خاندان اور شادی', nameAr: 'الأسرة والزواج', icon: 'Heart', color: '#EC4899' },
  { id: 'ethics', name: 'Ethics & Character', nameUr: 'اخلاق اور کردار', nameAr: 'الأخلاق والسلوك', icon: 'Award', color: '#14B8A6' },
  { id: 'worship', name: 'Worship & Ibadah', nameUr: 'عبادت', nameAr: 'العبادة', icon: 'Moon', color: '#A855F7' },
  { id: 'daily', name: 'Daily Life', nameUr: 'روزمرہ زندگی', nameAr: 'الحياة اليومية', icon: 'Sun', color: '#F97316' },
  { id: 'women', name: 'Women in Islam', nameUr: 'اسلام میں خواتین', nameAr: 'المرأة في الإسلام', icon: 'User', color: '#D946EF' },
  { id: 'science', name: 'Science & Quran', nameUr: 'سائنس اور قرآن', nameAr: 'العلم والقرآن', icon: 'Zap', color: '#0EA5E9' },
  { id: 'misc', name: 'Miscellaneous', nameUr: 'متفرق', nameAr: 'متنوعة', icon: 'HelpCircle', color: '#64748B' },
];

// Main FAQ Data
export const QURAN_FAQS = [
  // ============ FAITH & BELIEFS ============
  {
    id: 1,
    category: 'faith',
    question: {
      en: 'Who is Allah?',
      ur: 'اللہ کون ہے؟',
      ar: 'من هو الله؟'
    },
    answer: {
      en: 'Allah is the Arabic word for God - the One and Only Creator of the universe, the All-Powerful, All-Knowing, and Most Merciful. He has no partners, no children, and nothing is like Him. Allah says in the Quran: "Say, He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent." (112:1-4). Muslims believe in His 99 beautiful names that describe His attributes.',
      ur: 'اللہ خدا کا عربی نام ہے - کائنات کا واحد خالق، قادر مطلق، علیم اور رحیم۔ اس کا کوئی شریک نہیں، کوئی اولاد نہیں، اور کوئی اس جیسا نہیں۔ قرآن میں فرمایا: "کہو وہ اللہ ایک ہے۔ اللہ بے نیاز ہے۔ نہ اس سے کوئی پیدا ہوا نہ وہ پیدا ہوا۔ اور نہ کوئی اس کا ہمسر ہے۔" (112:1-4)',
      ar: 'الله هو الإله الواحد الأحد، خالق الكون، القادر على كل شيء، العليم الرحيم. لا شريك له ولا ولد، وليس كمثله شيء. قال تعالى: "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ" (112:1-4)'
    },
    verses: [{ surah: 112, ayah: 1 }, { surah: 2, ayah: 255 }],
    tags: ['allah', 'god', 'creator', 'tawhid', 'oneness']
  },
  {
    id: 2,
    category: 'faith',
    question: {
      en: 'What are the Five Pillars of Islam?',
      ur: 'اسلام کے پانچ ارکان کیا ہیں؟',
      ar: 'ما هي أركان الإسلام الخمسة؟'
    },
    answer: {
      en: '1) Shahada - Declaration of faith (There is no god but Allah, Muhammad is His messenger). 2) Salah - Five daily prayers. 3) Zakat - Giving 2.5% of savings to charity. 4) Sawm - Fasting during Ramadan. 5) Hajj - Pilgrimage to Makkah once in lifetime if able. These are the foundation of a Muslim\'s life and practice.',
      ur: '1) شہادت - ایمان کا اقرار (اللہ کے سوا کوئی معبود نہیں، محمدﷺ اس کے رسول ہیں)۔ 2) نماز - پانچ وقت کی نماز۔ 3) زکوٰۃ - بچت کا 2.5% صدقہ۔ 4) روزہ - رمضان میں روزے۔ 5) حج - زندگی میں ایک بار مکہ کا سفر اگر استطاعت ہو۔ یہ مسلمان کی زندگی کی بنیاد ہیں۔',
      ar: '1) الشهادة - شهادة أن لا إله إلا الله وأن محمداً رسول الله. 2) الصلاة - الصلوات الخمس. 3) الزكاة - إخراج 2.5% من المدخرات. 4) الصوم - صيام رمضان. 5) الحج - حج بيت الله مرة في العمر لمن استطاع.'
    },
    verses: [{ surah: 2, ayah: 177 }],
    tags: ['pillars', 'shahada', 'salah', 'zakat', 'sawm', 'hajj', 'basics']
  },
  {
    id: 3,
    category: 'faith',
    question: {
      en: 'What are the Six Articles of Faith (Iman)?',
      ur: 'ایمان کے چھ ارکان کیا ہیں؟',
      ar: 'ما هي أركان الإيمان الستة؟'
    },
    answer: {
      en: 'Muslims must believe in: 1) Allah - The One God. 2) Angels - Created beings of light who obey Allah. 3) Holy Books - Including Torah, Psalms, Gospel, and Quran. 4) Prophets - From Adam to Muhammad (peace be upon them all). 5) Day of Judgment - When all will be held accountable. 6) Divine Decree (Qadr) - That Allah knows and has decreed all things.',
      ur: 'مسلمانوں کو یقین رکھنا چاہیے: 1) اللہ - ایک خدا۔ 2) فرشتے - نور سے بنی مخلوق جو اللہ کی اطاعت کرتے ہیں۔ 3) آسمانی کتابیں - تورات، زبور، انجیل اور قرآن۔ 4) انبیاء - آدم سے محمدﷺ تک۔ 5) یوم القیامہ - جب سب کا حساب ہوگا۔ 6) تقدیر - کہ اللہ سب کچھ جانتا اور مقرر کرتا ہے۔',
      ar: 'يجب على المسلم الإيمان بـ: 1) الله - الإله الواحد. 2) الملائكة - مخلوقات من نور يطيعون الله. 3) الكتب السماوية - التوراة والزبور والإنجيل والقرآن. 4) الرسل - من آدم إلى محمد عليهم السلام. 5) اليوم الآخر - يوم الحساب. 6) القدر - أن الله يعلم كل شيء وقدره.'
    },
    verses: [{ surah: 2, ayah: 285 }, { surah: 4, ayah: 136 }],
    tags: ['iman', 'faith', 'belief', 'angels', 'prophets', 'books', 'qadr']
  },
  {
    id: 4,
    category: 'faith',
    question: {
      en: 'Why did Allah create humans?',
      ur: 'اللہ نے انسانوں کو کیوں پیدا کیا؟',
      ar: 'لماذا خلق الله الإنسان؟'
    },
    answer: {
      en: 'Allah created humans to worship Him alone. The Quran states: "I did not create the jinn and mankind except to worship Me" (51:56). Worship (Ibadah) includes prayer, good deeds, following Allah\'s guidance, and living a righteous life. Humans are given free will to choose between right and wrong, and will be accountable for their choices.',
      ur: 'اللہ نے انسانوں کو اپنی عبادت کے لیے پیدا کیا۔ قرآن میں ہے: "میں نے جن اور انسان کو صرف اپنی عبادت کے لیے پیدا کیا" (51:56)۔ عبادت میں نماز، نیک اعمال، اللہ کی ہدایت پر چلنا اور پاکیزہ زندگی شامل ہے۔ انسانوں کو اختیار دیا گیا ہے کہ وہ صحیح اور غلط میں سے چنیں۔',
      ar: 'خلق الله الإنسان ليعبده وحده. قال تعالى: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ" (51:56). العبادة تشمل الصلاة والأعمال الصالحة واتباع هداية الله. أعطي الإنسان حرية الاختيار بين الخير والشر.'
    },
    verses: [{ surah: 51, ayah: 56 }, { surah: 67, ayah: 2 }],
    tags: ['creation', 'purpose', 'worship', 'ibadah', 'life']
  },
  {
    id: 5,
    category: 'faith',
    question: {
      en: 'What is Shirk and why is it the greatest sin?',
      ur: 'شرک کیا ہے اور یہ سب سے بڑا گناہ کیوں ہے؟',
      ar: 'ما هو الشرك ولماذا هو أعظم الذنوب؟'
    },
    answer: {
      en: 'Shirk means associating partners with Allah - worshipping anything or anyone besides Him. It is the only sin Allah will not forgive if one dies upon it. "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills" (4:48). This includes idol worship, believing others share Allah\'s powers, or making anything equal to Allah in love or obedience.',
      ur: 'شرک کا مطلب اللہ کے ساتھ کسی کو شریک ٹھہرانا ہے۔ یہ واحد گناہ ہے جو اللہ معاف نہیں کرتا اگر کوئی اس پر مرے۔ "بیشک اللہ اپنے ساتھ شرک کو نہیں بخشتا اور اس کے سوا جسے چاہے بخش دیتا ہے" (4:48)۔ اس میں بت پرستی، کسی اور کو اللہ کی طاقتوں میں شریک سمجھنا شامل ہے۔',
      ar: 'الشرك هو عبادة غير الله أو الإشراك به. هو الذنب الوحيد الذي لا يغفره الله إذا مات عليه. قال تعالى: "إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ" (4:48).'
    },
    verses: [{ surah: 4, ayah: 48 }, { surah: 4, ayah: 116 }, { surah: 31, ayah: 13 }],
    tags: ['shirk', 'tawhid', 'sin', 'idolatry', 'forgiveness']
  },
  {
    id: 6,
    category: 'faith',
    question: {
      en: 'What happens after death in Islam?',
      ur: 'اسلام میں موت کے بعد کیا ہوتا ہے؟',
      ar: 'ماذا يحدث بعد الموت في الإسلام؟'
    },
    answer: {
      en: 'After death, the soul enters Barzakh (intermediate realm) until the Day of Judgment. Angels Munkar and Nakir question the deceased about their faith. The righteous experience peace while wrongdoers face punishment. On Judgment Day, all will be resurrected, judged by their deeds, and sent to either Paradise (Jannah) or Hell (Jahannam).',
      ur: 'موت کے بعد روح برزخ میں جاتی ہے قیامت تک۔ فرشتے منکر و نکیر سوال کرتے ہیں ایمان کے بارے میں۔ نیک لوگوں کو آرام ملتا ہے جبکہ بدکاروں کو عذاب۔ قیامت کے دن سب اٹھائے جائیں گے، اعمال کا حساب ہوگا، اور جنت یا جہنم میں بھیجے جائیں گے۔',
      ar: 'بعد الموت تدخل الروح البرزخ حتى يوم القيامة. يسأل الملكان منكر ونكير عن الإيمان. ينعم الصالحون ويعذب المذنبون. يوم القيامة يُبعث الجميع ويحاسبون ويدخلون الجنة أو النار.'
    },
    verses: [{ surah: 23, ayah: 99 }, { surah: 39, ayah: 42 }, { surah: 56, ayah: 1 }],
    tags: ['death', 'afterlife', 'barzakh', 'judgment', 'jannah', 'jahannam']
  },
  {
    id: 7,
    category: 'faith',
    question: {
      en: 'What is Tawbah (repentance) and how to repent?',
      ur: 'توبہ کیا ہے اور کیسے کریں؟',
      ar: 'ما هي التوبة وكيف نتوب؟'
    },
    answer: {
      en: 'Tawbah means returning to Allah with sincere regret. It requires: 1) Stopping the sin immediately. 2) Feeling genuine remorse. 3) Firm intention not to repeat it. 4) If it involves others\' rights, making amends. Allah says: "Say, O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins" (39:53).',
      ur: 'توبہ کا مطلب اللہ کی طرف سچے دل سے لوٹنا ہے۔ اس کے لیے: 1) فوراً گناہ چھوڑنا۔ 2) سچا پچھتاوا۔ 3) دوبارہ نہ کرنے کا پکا ارادہ۔ 4) اگر کسی کا حق ہو تو ادا کرنا۔ اللہ فرماتا ہے: "کہہ دو میرے بندو جنہوں نے اپنی جانوں پر ظلم کیا، اللہ کی رحمت سے مایوس نہ ہو۔ بیشک اللہ سب گناہ معاف کر دیتا ہے" (39:53)۔',
      ar: 'التوبة هي الرجوع إلى الله بندم صادق. تتطلب: 1) التوقف عن الذنب فوراً. 2) الندم الحقيقي. 3) العزم على عدم العودة. 4) رد الحقوق إن وجدت. قال تعالى: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا" (39:53).'
    },
    verses: [{ surah: 39, ayah: 53 }, { surah: 66, ayah: 8 }, { surah: 25, ayah: 70 }],
    tags: ['tawbah', 'repentance', 'forgiveness', 'mercy', 'sin']
  },

  // ============ PRAYER (SALAH) ============
  {
    id: 8,
    category: 'prayer',
    question: {
      en: 'Why do Muslims pray five times a day?',
      ur: 'مسلمان دن میں پانچ بار نماز کیوں پڑھتے ہیں؟',
      ar: 'لماذا يصلي المسلمون خمس مرات في اليوم؟'
    },
    answer: {
      en: 'The five daily prayers were prescribed during the Prophet\'s Night Journey (Isra and Mi\'raj). They help Muslims maintain constant connection with Allah throughout the day: Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), and Isha (night). Prayer is the second pillar of Islam and the first thing we\'ll be questioned about on Judgment Day.',
      ur: 'پانچ نمازیں نبیﷺ کی معراج کی رات فرض ہوئیں۔ یہ مسلمانوں کو دن بھر اللہ سے جوڑے رکھتی ہیں: فجر، ظہر، عصر، مغرب، عشاء۔ نماز اسلام کا دوسرا رکن ہے اور قیامت میں سب سے پہلے نماز کا حساب ہوگا۔',
      ar: 'فُرضت الصلوات الخمس في ليلة الإسراء والمعراج. تحافظ على صلة المسلم بربه طوال اليوم: الفجر والظهر والعصر والمغرب والعشاء. الصلاة الركن الثاني وأول ما يُحاسب عليه العبد.'
    },
    verses: [{ surah: 17, ayah: 78 }, { surah: 11, ayah: 114 }, { surah: 2, ayah: 238 }],
    tags: ['salah', 'prayer', 'five', 'fajr', 'dhuhr', 'asr', 'maghrib', 'isha']
  },
  {
    id: 9,
    category: 'prayer',
    question: {
      en: 'What breaks the prayer (Salah)?',
      ur: 'نماز کیا چیزیں توڑ دیتی ہیں؟',
      ar: 'ما هي مبطلات الصلاة؟'
    },
    answer: {
      en: 'Prayer is invalidated by: Speaking intentionally, eating or drinking, laughing loudly, excessive movement, breaking wudu (ablution), turning away from Qibla, intentionally skipping a required part. Minor coughs, sneezes, or brief distractions do not break the prayer if unintentional.',
      ur: 'نماز ٹوٹ جاتی ہے: جان بوجھ کر بولنے، کھانے پینے، زور سے ہنسنے، بہت زیادہ حرکت، وضو ٹوٹنے، قبلے سے پھرنے، جان بوجھ کر کوئی ضروری حصہ چھوڑنے سے۔ چھوٹی کھانسی، چھینک غیر ارادی ہو تو نماز نہیں ٹوٹتی۔',
      ar: 'تبطل الصلاة بـ: الكلام عمداً، الأكل والشرب، القهقهة، الحركة الكثيرة، انتقاض الوضوء، الانصراف عن القبلة، ترك ركن عمداً. السعال والعطاس غير المقصود لا يبطلها.'
    },
    verses: [{ surah: 23, ayah: 2 }],
    tags: ['salah', 'invalidate', 'wudu', 'rules', 'prayer']
  },
  {
    id: 10,
    category: 'prayer',
    question: {
      en: 'Can I pray in any language or only Arabic?',
      ur: 'کیا میں کسی بھی زبان میں نماز پڑھ سکتا ہوں یا صرف عربی میں؟',
      ar: 'هل يمكنني الصلاة بأي لغة أم بالعربية فقط؟'
    },
    answer: {
      en: 'The formal prayers (Salah) must be performed in Arabic as the Prophet taught. However, personal supplications (dua) after prayer can be made in any language. For new Muslims learning, there is flexibility initially, but one should strive to learn the Arabic recitations. The Arabic preserves the exact words of revelation.',
      ur: 'فرض نمازیں عربی میں پڑھنی ہیں جیسے نبیﷺ نے سکھایا۔ لیکن نماز کے بعد ذاتی دعائیں کسی بھی زبان میں کر سکتے ہیں۔ نئے مسلمانوں کے لیے شروع میں رعایت ہے، لیکن عربی سیکھنی چاہیے۔ عربی وحی کے اصل الفاظ محفوظ رکھتی ہے۔',
      ar: 'يجب أداء الصلاة بالعربية كما علمنا النبي ﷺ. لكن الدعاء بعد الصلاة يمكن بأي لغة. للمسلمين الجدد مرونة في البداية لكن يجب تعلم العربية. العربية تحفظ كلمات الوحي.'
    },
    verses: [{ surah: 12, ayah: 2 }],
    tags: ['arabic', 'language', 'prayer', 'dua', 'learning']
  },

  // ============ ABOUT THE QURAN ============
  {
    id: 11,
    category: 'quran',
    question: {
      en: 'What is the Quran?',
      ur: 'قرآن کیا ہے؟',
      ar: 'ما هو القرآن؟'
    },
    answer: {
      en: 'The Quran is the final revelation from Allah to humanity, revealed to Prophet Muhammad (PBUH) over 23 years through Angel Jibreel. It contains 114 chapters (surahs) and over 6,000 verses. It is guidance for all aspects of life, preserved in its original Arabic, and is considered the literal word of Allah, unchanged since revelation.',
      ur: 'قرآن اللہ کی طرف سے انسانیت کے لیے آخری وحی ہے، جو نبیﷺ پر 23 سال میں جبریل فرشتے کے ذریعے نازل ہوئی۔ اس میں 114 سورتیں اور 6000 سے زیادہ آیات ہیں۔ یہ زندگی کے ہر پہلو کی رہنمائی ہے، اصل عربی میں محفوظ، اور نزول سے اب تک بغیر کسی تبدیلی کے۔',
      ar: 'القرآن هو الوحي الأخير من الله للبشرية، أُنزل على النبي محمد ﷺ في 23 عاماً عبر جبريل. يحتوي على 114 سورة وأكثر من 6000 آية. هو هداية للحياة، محفوظ بالعربية، كلام الله حرفياً لم يتغير منذ نزوله.'
    },
    verses: [{ surah: 2, ayah: 2 }, { surah: 15, ayah: 9 }, { surah: 17, ayah: 9 }],
    tags: ['quran', 'revelation', 'scripture', 'guidance', 'book']
  },
  {
    id: 12,
    category: 'quran',
    question: {
      en: 'How was the Quran preserved?',
      ur: 'قرآن کیسے محفوظ ہوا؟',
      ar: 'كيف تم حفظ القرآن؟'
    },
    answer: {
      en: 'The Quran was preserved through: 1) Memorization - Many companions memorized it completely. 2) Written records - Scribes wrote revelations on various materials. 3) Compilation - Abu Bakr compiled it into one book, Uthman standardized copies. 4) Allah\'s promise: "Indeed, it is We who sent down the Quran and indeed, We will be its guardian" (15:9). Today, millions have memorized it worldwide.',
      ur: 'قرآن محفوظ ہوا: 1) حفظ - بہت سے صحابہ نے پورا یاد کیا۔ 2) تحریر - کاتبوں نے لکھا۔ 3) جمع - ابوبکرؓ نے ایک کتاب میں جمع کیا، عثمانؓ نے معیاری نسخے بنائے۔ 4) اللہ کا وعدہ: "بیشک ہم نے اس ذکر کو اتارا ہے اور ہم ہی اس کی حفاظت کرنے والے ہیں" (15:9)۔ آج لاکھوں حافظ ہیں۔',
      ar: 'حُفظ القرآن بـ: 1) الحفظ - حفظه كثير من الصحابة. 2) الكتابة - كتبه الكتّاب. 3) الجمع - جمعه أبو بكر وأعد عثمان النسخ الموحدة. 4) وعد الله: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ" (15:9). اليوم الملايين يحفظونه.'
    },
    verses: [{ surah: 15, ayah: 9 }, { surah: 54, ayah: 17 }],
    tags: ['preservation', 'quran', 'memorization', 'hifz', 'compilation']
  },
  {
    id: 13,
    category: 'quran',
    question: {
      en: 'What is the reward for reading the Quran?',
      ur: 'قرآن پڑھنے کا ثواب کیا ہے؟',
      ar: 'ما هو أجر قراءة القرآن؟'
    },
    answer: {
      en: 'The Prophet (PBUH) said: "Whoever reads a letter from the Book of Allah will receive a hasanah (good deed), and the hasanah is multiplied by ten." Reading, memorizing, and acting upon the Quran brings immense blessings. The Quran will intercede for its readers on Judgment Day. Even struggling while reading brings double reward.',
      ur: 'نبیﷺ نے فرمایا: "جو قرآن کا ایک حرف پڑھے اسے ایک نیکی ملتی ہے، اور ہر نیکی دس گنا ہے۔" قرآن پڑھنا، حفظ کرنا اور اس پر عمل کرنا بے شمار برکات لاتا ہے۔ قرآن قیامت میں پڑھنے والوں کی سفارش کرے گا۔ مشکل سے پڑھنے والے کو دوگنا اجر ہے۔',
      ar: 'قال النبي ﷺ: "من قرأ حرفاً من كتاب الله فله به حسنة، والحسنة بعشر أمثالها." القراءة والحفظ والعمل بالقرآن يجلب البركات. القرآن يشفع لقارئه يوم القيامة. المتعثر له أجران.'
    },
    verses: [{ surah: 35, ayah: 29 }],
    tags: ['reward', 'reading', 'hasanah', 'blessings', 'quran']
  },

  // ============ PROPHETS & STORIES ============
  {
    id: 14,
    category: 'prophets',
    question: {
      en: 'How many prophets are mentioned in the Quran?',
      ur: 'قرآن میں کتنے انبیاء کا ذکر ہے؟',
      ar: 'كم نبياً ذُكر في القرآن؟'
    },
    answer: {
      en: '25 prophets are mentioned by name in the Quran: Adam, Idris, Nuh, Hud, Salih, Ibrahim, Lut, Ismail, Ishaq, Yaqub, Yusuf, Ayyub, Shuayb, Musa, Harun, Dhul-Kifl, Dawud, Sulayman, Ilyas, Al-Yasa, Yunus, Zakariya, Yahya, Isa, and Muhammad (peace be upon them all). However, Allah sent prophets to every nation.',
      ur: 'قرآن میں 25 انبیاء کے نام ہیں: آدم، ادریس، نوح، ہود، صالح، ابراہیم، لوط، اسماعیل، اسحاق، یعقوب، یوسف، ایوب، شعیب، موسیٰ، ہارون، ذوالکفل، داؤد، سلیمان، الیاس، الیسع، یونس، زکریا، یحییٰ، عیسیٰ، اور محمدﷺ۔ لیکن اللہ نے ہر قوم میں نبی بھیجے۔',
      ar: 'ذُكر 25 نبياً بالاسم: آدم، إدريس، نوح، هود، صالح، إبراهيم، لوط، إسماعيل، إسحاق، يعقوب، يوسف، أيوب، شعيب، موسى، هارون، ذو الكفل، داود، سليمان، إلياس، اليسع، يونس، زكريا، يحيى، عيسى، ومحمد ﷺ. لكن الله أرسل رسلاً لكل أمة.'
    },
    verses: [{ surah: 4, ayah: 164 }, { surah: 40, ayah: 78 }],
    tags: ['prophets', 'names', 'messengers', 'stories']
  },
  {
    id: 15,
    category: 'prophets',
    question: {
      en: 'Who was Prophet Muhammad (PBUH)?',
      ur: 'نبی محمدﷺ کون تھے؟',
      ar: 'من هو النبي محمد ﷺ؟'
    },
    answer: {
      en: 'Prophet Muhammad (PBUH) was the final messenger of Allah, born in Makkah around 570 CE. He received the first revelation at age 40 and preached Islam for 23 years. He is described in the Quran as a mercy to all worlds (21:107) and the best example to follow (33:21). He established the Muslim community, taught the complete way of life, and his character was the Quran in practice.',
      ur: 'نبی محمدﷺ اللہ کے آخری رسول تھے، مکہ میں 570 عیسوی میں پیدا ہوئے۔ 40 سال کی عمر میں پہلی وحی ملی اور 23 سال اسلام کی تبلیغ کی۔ قرآن میں آپ کو تمام جہانوں کے لیے رحمت (21:107) اور بہترین نمونہ (33:21) کہا گیا۔ آپ نے مسلم امت قائم کی اور مکمل طریقہ زندگی سکھایا۔',
      ar: 'النبي محمد ﷺ هو خاتم الرسل، ولد في مكة حوالي 570م. نزل عليه الوحي في الأربعين ودعا للإسلام 23 عاماً. وصفه القرآن بأنه رحمة للعالمين (21:107) وأسوة حسنة (33:21). أسس الأمة الإسلامية وعلم منهج الحياة الكامل.'
    },
    verses: [{ surah: 21, ayah: 107 }, { surah: 33, ayah: 21 }, { surah: 33, ayah: 40 }],
    tags: ['muhammad', 'prophet', 'messenger', 'seerah', 'biography']
  },
  {
    id: 16,
    category: 'prophets',
    question: {
      en: 'What does Islam say about Jesus (Isa)?',
      ur: 'اسلام حضرت عیسیٰ کے بارے میں کیا کہتا ہے؟',
      ar: 'ماذا يقول الإسلام عن عيسى عليه السلام؟'
    },
    answer: {
      en: 'Muslims believe Jesus (Isa) was a mighty prophet, born miraculously to Virgin Mary (Maryam), performed miracles by Allah\'s permission, and was not crucified but raised to heaven alive. He is not divine or son of God. He will return before the Day of Judgment. The Quran mentions him and his mother with great honor in many verses.',
      ur: 'مسلمان مانتے ہیں کہ عیسیٰ علیہ السلام عظیم نبی تھے، معجزانہ طور پر کنواری مریم سے پیدا ہوئے، اللہ کے حکم سے معجزے دکھائے، صلیب پر نہیں چڑھائے گئے بلکہ زندہ آسمان پر اٹھائے گئے۔ وہ خدا یا خدا کے بیٹے نہیں۔ وہ قیامت سے پہلے واپس آئیں گے۔',
      ar: 'يؤمن المسلمون أن عيسى نبي عظيم، ولد معجزة من العذراء مريم، صنع المعجزات بإذن الله، لم يُصلب بل رُفع إلى السماء حياً. ليس إلهاً ولا ابن الله. سيعود قبل يوم القيامة. ذكره القرآن وأمه بتكريم عظيم.'
    },
    verses: [{ surah: 3, ayah: 45 }, { surah: 4, ayah: 157 }, { surah: 19, ayah: 30 }],
    tags: ['jesus', 'isa', 'prophet', 'mary', 'maryam', 'christianity']
  },

  // ============ DEATH & AFTERLIFE ============
  {
    id: 17,
    category: 'afterlife',
    question: {
      en: 'What is Jannah (Paradise) like?',
      ur: 'جنت کیسی ہے؟',
      ar: 'كيف الجنة؟'
    },
    answer: {
      en: 'Jannah is the eternal abode of bliss for believers. It has gardens beneath which rivers flow, palaces, pure spouses, delicious food and drink without intoxication, and peace. The greatest reward is seeing Allah. "No soul knows what has been hidden for them of comfort as reward for what they used to do" (32:17). There are different levels, with Firdaus being the highest.',
      ur: 'جنت ایمان والوں کی ابدی نعمتوں کا گھر ہے۔ اس میں باغات ہیں جن کے نیچے نہریں بہتی ہیں، محل، پاک ساتھی، لذیذ کھانے پینے بغیر نشے کے، اور امن۔ سب سے بڑا انعام اللہ کا دیدار ہے۔ "کوئی نہیں جانتا ان کے لیے آنکھوں کی ٹھنڈک چھپا کر رکھی گئی ہے" (32:17)۔ مختلف درجے ہیں، فردوس سب سے اعلیٰ۔',
      ar: 'الجنة دار النعيم الأبدي للمؤمنين. فيها جنات تجري من تحتها الأنهار، قصور، أزواج مطهرة، طعام وشراب بلا سُكر، وسلام. أعظم نعمة رؤية الله. "فَلَا تَعْلَمُ نَفْسٌ مَّا أُخْفِيَ لَهُم مِّن قُرَّةِ أَعْيُنٍ" (32:17). لها درجات وأعلاها الفردوس.'
    },
    verses: [{ surah: 32, ayah: 17 }, { surah: 55, ayah: 46 }, { surah: 56, ayah: 15 }],
    tags: ['jannah', 'paradise', 'heaven', 'afterlife', 'reward']
  },
  {
    id: 18,
    category: 'afterlife',
    question: {
      en: 'What is Jahannam (Hell) like?',
      ur: 'جہنم کیسی ہے؟',
      ar: 'كيف جهنم؟'
    },
    answer: {
      en: 'Jahannam is the place of punishment for disbelievers and sinners. It has intense fire, boiling water, chains, and torment. "The Fire, whose fuel is people and stones" (2:24). It has different levels, with the hypocrites in the lowest. However, Muslims who sinned may eventually be removed after punishment, while disbelievers remain eternally.',
      ur: 'جہنم کافروں اور گناہگاروں کی سزا کی جگہ ہے۔ اس میں شدید آگ، کھولتا پانی، زنجیریں اور عذاب ہے۔ "وہ آگ جس کا ایندھن انسان اور پتھر ہیں" (2:24)۔ مختلف درجے ہیں، منافقین سب سے نیچے۔ لیکن گناہگار مسلمان سزا کے بعد نکالے جا سکتے ہیں، کافر ہمیشہ رہیں گے۔',
      ar: 'جهنم موضع عذاب الكفار والمذنبين. فيها نار شديدة، ماء حميم، سلاسل وعذاب. "النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ" (2:24). لها دركات، المنافقون في الأسفل. المسلمون المذنبون قد يخرجون بعد العذاب، الكفار خالدون.'
    },
    verses: [{ surah: 2, ayah: 24 }, { surah: 4, ayah: 145 }, { surah: 74, ayah: 26 }],
    tags: ['jahannam', 'hell', 'fire', 'punishment', 'afterlife']
  },
  {
    id: 19,
    category: 'afterlife',
    question: {
      en: 'What are the signs of the Day of Judgment?',
      ur: 'قیامت کی نشانیاں کیا ہیں؟',
      ar: 'ما علامات يوم القيامة؟'
    },
    answer: {
      en: 'Minor signs include: spread of ignorance, increase in earthquakes, time passing quickly, widespread corruption, competing in building tall structures. Major signs include: appearance of Dajjal (Antichrist), return of Jesus, emergence of Gog and Magog, sun rising from the West, the Beast, and more. Only Allah knows the exact timing.',
      ur: 'چھوٹی نشانیاں: علم کا اٹھنا، زلزلوں میں اضافہ، وقت تیزی سے گزرنا، فساد، اونچی عمارتوں میں مقابلہ۔ بڑی نشانیاں: دجال کا ظہور، عیسیٰ کی واپسی، یاجوج ماجوج، مغرب سے سورج نکلنا، دابۃ الارض۔ صرف اللہ وقت جانتا ہے۔',
      ar: 'العلامات الصغرى: انتشار الجهل، كثرة الزلازل، تقارب الزمان، انتشار الفساد، التطاول في البنيان. العلامات الكبرى: ظهور الدجال، نزول عيسى، يأجوج ومأجوج، طلوع الشمس من المغرب، الدابة. الله وحده يعلم الوقت.'
    },
    verses: [{ surah: 21, ayah: 96 }, { surah: 27, ayah: 82 }, { surah: 75, ayah: 6 }],
    tags: ['signs', 'judgment', 'qiyamah', 'dajjal', 'jesus', 'end times']
  },

  // ============ FAMILY & MARRIAGE ============
  {
    id: 20,
    category: 'family',
    question: {
      en: 'What are the rights of parents in Islam?',
      ur: 'اسلام میں والدین کے حقوق کیا ہیں؟',
      ar: 'ما هي حقوق الوالدين في الإسلام؟'
    },
    answer: {
      en: 'Parents hold the highest status after Allah and His Messenger. "And your Lord has decreed that you worship none but Him, and be good to parents" (17:23). We must: show kindness and respect, speak gently, pray for them, care for them in old age, not say "uff" to them, and obey them in all except sin. Paradise lies at the feet of mothers.',
      ur: 'والدین کا درجہ اللہ اور رسول کے بعد سب سے اعلیٰ ہے۔ "تمہارے رب نے حکم دیا کہ اس کے سوا کسی کی عبادت نہ کرو اور والدین کے ساتھ احسان کرو" (17:23)۔ ہمیں: عزت کرنی چاہیے، نرمی سے بولنا، دعا کرنا، بڑھاپے میں خدمت کرنا، اُف نہیں کہنا، گناہ کے علاوہ اطاعت کرنا۔ جنت ماں کے قدموں میں ہے۔',
      ar: 'الوالدان أعلى مرتبة بعد الله ورسوله. "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا" (17:23). يجب: الإحسان والاحترام، اللين في القول، الدعاء لهما، رعايتهما في الكبر، عدم قول أف، طاعتهما إلا في المعصية. الجنة تحت أقدام الأمهات.'
    },
    verses: [{ surah: 17, ayah: 23 }, { surah: 31, ayah: 14 }, { surah: 46, ayah: 15 }],
    tags: ['parents', 'mother', 'father', 'family', 'respect', 'rights']
  },
  {
    id: 21,
    category: 'family',
    question: {
      en: 'What is the Islamic view on marriage?',
      ur: 'شادی کے بارے میں اسلامی نقطہ نظر کیا ہے؟',
      ar: 'ما هو منظور الإسلام للزواج؟'
    },
    answer: {
      en: 'Marriage is highly encouraged in Islam - it completes half of one\'s faith. It provides: companionship, lawful intimacy, procreation, and peace. "And among His Signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them" (30:21). Marriage requires: consent, mahr (dowry to wife), witnesses, and guardian for the bride.',
      ur: 'اسلام میں شادی کی بہت ترغیب ہے - یہ آدھا ایمان مکمل کرتی ہے۔ یہ فراہم کرتی ہے: رفاقت، جائز تعلق، اولاد، اور سکون۔ "اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تمہاری جنس سے جوڑے بنائے تاکہ تم ان کے پاس سکون پاؤ" (30:21)۔ شادی کے لیے: رضامندی، مہر، گواہ، اور عورت کا ولی ضروری ہے۔',
      ar: 'الزواج مستحب جداً في الإسلام - يكمل نصف الدين. يوفر: الرفقة، العلاقة الحلال، الإنجاب، والسكينة. "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا" (30:21). يتطلب: الموافقة، المهر، الشهود، والولي للعروس.'
    },
    verses: [{ surah: 30, ayah: 21 }, { surah: 4, ayah: 3 }, { surah: 24, ayah: 32 }],
    tags: ['marriage', 'nikah', 'spouse', 'wedding', 'family']
  },

  // ============ ETHICS & CHARACTER ============
  {
    id: 22,
    category: 'ethics',
    question: {
      en: 'What does Islam say about lying?',
      ur: 'جھوٹ کے بارے میں اسلام کیا کہتا ہے؟',
      ar: 'ماذا يقول الإسلام عن الكذب؟'
    },
    answer: {
      en: 'Lying is strictly forbidden and is a sign of hypocrisy. The Prophet said: "Truthfulness leads to righteousness, and righteousness leads to Paradise." Even small lies are prohibited. Lying is only permitted in three cases: to reconcile people, in war strategy, and between spouses for harmony. "Cursed are those who lie" (51:10).',
      ur: 'جھوٹ سختی سے منع ہے اور منافقت کی علامت ہے۔ نبیﷺ نے فرمایا: "سچائی نیکی کی طرف لے جاتی ہے اور نیکی جنت کی طرف۔" چھوٹے جھوٹ بھی منع ہیں۔ جھوٹ صرف تین صورتوں میں جائز ہے: صلح کرانے، جنگی حکمت عملی، اور میاں بیوی میں ہم آہنگی کے لیے۔',
      ar: 'الكذب محرم بشدة وعلامة نفاق. قال النبي ﷺ: "الصدق يهدي إلى البر، والبر يهدي إلى الجنة." الكذب الصغير محرم أيضاً. يباح فقط في: الإصلاح بين الناس، الحرب، وبين الزوجين للمودة. "قُتِلَ الْخَرَّاصُونَ" (51:10).'
    },
    verses: [{ surah: 51, ayah: 10 }, { surah: 9, ayah: 119 }],
    tags: ['lying', 'truth', 'honesty', 'character', 'hypocrisy']
  },
  {
    id: 23,
    category: 'ethics',
    question: {
      en: 'What is the importance of patience (Sabr)?',
      ur: 'صبر کی اہمیت کیا ہے؟',
      ar: 'ما أهمية الصبر؟'
    },
    answer: {
      en: 'Patience is central to Islamic character. It means steadfastness in: obeying Allah, avoiding sin, and facing hardships. "Indeed, Allah is with the patient" (2:153). The reward for patience is immense - Paradise. "Only those who are patient shall receive their reward in full without reckoning" (39:10). Prophets exemplified patience through their trials.',
      ur: 'صبر اسلامی کردار کا مرکز ہے۔ اس کا مطلب ہے ثابت قدمی: اللہ کی اطاعت میں، گناہ سے بچنے میں، اور مشکلات میں۔ "بیشک اللہ صبر کرنے والوں کے ساتھ ہے" (2:153)۔ صبر کا اجر بے حساب ہے - جنت۔ "صبر کرنے والوں کو ان کا اجر بے حساب ملے گا" (39:10)۔ انبیاء نے آزمائشوں میں صبر کی مثال دی۔',
      ar: 'الصبر أساس الشخصية الإسلامية. يعني الثبات في: طاعة الله، اجتناب المعصية، ومواجهة المصائب. "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ" (2:153). أجر الصبر عظيم - الجنة. "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ" (39:10). الأنبياء مثلوا الصبر في ابتلاءاتهم.'
    },
    verses: [{ surah: 2, ayah: 153 }, { surah: 39, ayah: 10 }, { surah: 3, ayah: 200 }],
    tags: ['patience', 'sabr', 'steadfastness', 'trials', 'character']
  },

  // ============ WORSHIP & IBADAH ============
  {
    id: 24,
    category: 'worship',
    question: {
      en: 'What is the significance of Ramadan?',
      ur: 'رمضان کی اہمیت کیا ہے؟',
      ar: 'ما أهمية رمضان؟'
    },
    answer: {
      en: 'Ramadan is the holiest month when the Quran was revealed. Muslims fast from dawn to sunset, abstaining from food, drink, and intimacy. Benefits include: spiritual purification, self-discipline, empathy for the poor, forgiveness of sins. "The month of Ramadan in which was revealed the Quran, guidance for mankind" (2:185). Laylatul Qadr (Night of Power) is in its last ten nights.',
      ur: 'رمضان سب سے مقدس مہینہ ہے جب قرآن نازل ہوا۔ مسلمان فجر سے مغرب تک روزہ رکھتے ہیں، کھانے پینے اور ازدواجی تعلقات سے پرہیز۔ فوائد: روحانی تزکیہ، ضبط نفس، غریبوں سے ہمدردی، گناہوں کی معافی۔ "رمضان کا مہینہ جس میں قرآن نازل ہوا، انسانیت کی رہنمائی" (2:185)۔ شب قدر آخری دس راتوں میں ہے۔',
      ar: 'رمضان أقدس شهر نزل فيه القرآن. يصوم المسلمون من الفجر إلى المغرب، يمتنعون عن الطعام والشراب والعلاقة الزوجية. فوائده: التزكية الروحية، ضبط النفس، التعاطف مع الفقراء، مغفرة الذنوب. "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ" (2:185). ليلة القدر في العشر الأواخر.'
    },
    verses: [{ surah: 2, ayah: 185 }, { surah: 97, ayah: 1 }],
    tags: ['ramadan', 'fasting', 'sawm', 'laylatul qadr', 'worship']
  },
  {
    id: 25,
    category: 'worship',
    question: {
      en: 'What is Hajj and who must perform it?',
      ur: 'حج کیا ہے اور کس پر فرض ہے؟',
      ar: 'ما هو الحج ومن يجب عليه؟'
    },
    answer: {
      en: 'Hajj is the pilgrimage to Makkah, the fifth pillar of Islam. It is obligatory once in a lifetime for every Muslim who is: physically able, financially capable, and the journey is safe. It involves: Ihram (sacred state), Tawaf (circling Ka\'bah), Sa\'i (walking between Safa and Marwa), standing at Arafat, and other rituals commemorating Prophet Ibrahim.',
      ur: 'حج مکہ کا سفر ہے، اسلام کا پانچواں رکن۔ یہ زندگی میں ایک بار فرض ہے ہر اس مسلمان پر جو: جسمانی طور پر قادر، مالی طور پر صاحب استطاعت، اور سفر محفوظ ہو۔ اس میں شامل ہے: احرام، طواف، سعی، وقوف عرفات، اور دیگر ارکان جو ابراہیم علیہ السلام کی یاد میں ہیں۔',
      ar: 'الحج هو السفر إلى مكة، الركن الخامس للإسلام. واجب مرة في العمر على كل مسلم: قادر جسدياً، مستطيع مالياً، والسفر آمن. يشمل: الإحرام، الطواف، السعي، الوقوف بعرفة، ومناسك أخرى إحياء لذكرى النبي إبراهيم.'
    },
    verses: [{ surah: 3, ayah: 97 }, { surah: 22, ayah: 27 }],
    tags: ['hajj', 'pilgrimage', 'makkah', 'kabah', 'ibrahim']
  },

  // ============ DAILY LIFE ============
  {
    id: 26,
    category: 'daily',
    question: {
      en: 'What foods are Halal and Haram?',
      ur: 'کون سی غذائیں حلال اور حرام ہیں؟',
      ar: 'ما هي الأطعمة الحلال والحرام؟'
    },
    answer: {
      en: 'Halal (permitted): Meat slaughtered in Allah\'s name, fish, vegetables, fruits, grains. Haram (forbidden): Pork, blood, carrion (dead animals), meat not slaughtered properly, alcohol, intoxicants. "He has only forbidden you dead meat, blood, the flesh of swine, and that over which any name other than Allah\'s has been invoked" (2:173).',
      ur: 'حلال: اللہ کے نام پر ذبح شدہ گوشت، مچھلی، سبزیاں، پھل، اناج۔ حرام: سور کا گوشت، خون، مردار، غلط طریقے سے ذبح، شراب، نشہ۔ "اس نے تم پر حرام کیا مردار، خون، سور کا گوشت، اور وہ جس پر اللہ کے سوا کسی کا نام پکارا گیا" (2:173)۔',
      ar: 'الحلال: اللحم المذبوح باسم الله، السمك، الخضروات، الفواكه، الحبوب. الحرام: لحم الخنزير، الدم، الميتة، اللحم غير المذبوح صحيحاً، الخمر، المسكرات. "إِنَّمَا حَرَّمَ عَلَيْكُمُ الْمَيْتَةَ وَالدَّمَ وَلَحْمَ الْخِنزِيرِ وَمَا أُهِلَّ بِهِ لِغَيْرِ اللَّهِ" (2:173).'
    },
    verses: [{ surah: 2, ayah: 173 }, { surah: 5, ayah: 3 }, { surah: 5, ayah: 90 }],
    tags: ['halal', 'haram', 'food', 'pork', 'alcohol', 'diet']
  },
  {
    id: 27,
    category: 'daily',
    question: {
      en: 'Is music Halal or Haram in Islam?',
      ur: 'کیا موسیقی حلال ہے یا حرام؟',
      ar: 'هل الموسيقى حلال أم حرام؟'
    },
    answer: {
      en: 'This is a debated topic among scholars. Some prohibit musical instruments based on hadiths, while others permit certain forms. Most agree that: lyrics must be clean, it should not distract from worship or lead to sin, nasheeds (Islamic songs without instruments) are generally permitted. The Quran warns against "idle talk" that diverts from Allah\'s path (31:6).',
      ur: 'یہ علماء میں بحث کا موضوع ہے۔ کچھ احادیث کی بنا پر آلات موسیقی منع کرتے ہیں، کچھ بعض صورتوں میں اجازت دیتے ہیں۔ اکثر متفق ہیں کہ: بول پاکیزہ ہوں، عبادت سے نہ ہٹائے یا گناہ کی طرف نہ لے جائے، نشید (بغیر آلات کے اسلامی گانے) عموماً جائز ہیں۔',
      ar: 'هذا موضوع خلافي بين العلماء. بعضهم يحرم الآلات الموسيقية استناداً للأحاديث، وبعضهم يبيح أشكالاً معينة. معظمهم يتفق أن: الكلمات يجب أن تكون نظيفة، لا تصرف عن العبادة أو تقود للمعصية، الأناشيد الإسلامية بدون آلات مباحة عموماً.'
    },
    verses: [{ surah: 31, ayah: 6 }],
    tags: ['music', 'nasheed', 'halal', 'haram', 'entertainment']
  },

  // ============ WOMEN IN ISLAM ============
  {
    id: 28,
    category: 'women',
    question: {
      en: 'What is the status of women in Islam?',
      ur: 'اسلام میں عورت کا مقام کیا ہے؟',
      ar: 'ما مكانة المرأة في الإسلام؟'
    },
    answer: {
      en: 'Islam elevated women\'s status 1400 years ago, granting rights to: education, property ownership, inheritance, choosing spouse, and divorce. Spiritually, men and women are equal before Allah. "Whoever does righteousness, whether male or female, while being a believer - those will enter Paradise" (4:124). Mothers have three times more right to kindness than fathers.',
      ur: 'اسلام نے 1400 سال پہلے عورت کا مقام بلند کیا، حقوق دیے: تعلیم، جائیداد، وراثت، شوہر کے انتخاب، اور طلاق۔ روحانی طور پر مرد اور عورت اللہ کے سامنے برابر ہیں۔ "جو نیک عمل کرے، مرد ہو یا عورت، مومن ہوتے ہوئے، وہ جنت میں جائیں گے" (4:124)۔ ماؤں کو باپ سے تین گنا زیادہ محبت کا حق ہے۔',
      ar: 'رفع الإسلام مكانة المرأة منذ 1400 سنة، ومنحها حقوقاً في: التعليم، ملكية العقار، الميراث، اختيار الزوج، والطلاق. روحياً، الرجل والمرأة متساويان أمام الله. "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ" (4:124). للأمهات ثلاثة أضعاف حق البر.'
    },
    verses: [{ surah: 4, ayah: 124 }, { surah: 33, ayah: 35 }, { surah: 9, ayah: 71 }],
    tags: ['women', 'rights', 'equality', 'status', 'islam']
  },
  {
    id: 29,
    category: 'women',
    question: {
      en: 'Why do Muslim women wear Hijab?',
      ur: 'مسلمان عورتیں حجاب کیوں پہنتی ہیں؟',
      ar: 'لماذا ترتدي المسلمات الحجاب؟'
    },
    answer: {
      en: 'Hijab (modest covering) is commanded by Allah as a means of dignity, protection, and identity. "Tell the believing women to lower their gaze and guard their modesty, and not display their adornments except what appears thereof, and to draw their headcovers over their chests" (24:31). It is an act of obedience to Allah, not oppression.',
      ur: 'حجاب اللہ کا حکم ہے عزت، تحفظ، اور شناخت کے لیے۔ "ایمان والی عورتوں سے کہو کہ اپنی نظریں نیچی رکھیں اور اپنی عفت کی حفاظت کریں، اور اپنی زینت ظاہر نہ کریں سوائے جو خود ظاہر ہو، اور اپنے سینوں پر اپنی اوڑھنیاں ڈالے رکھیں" (24:31)۔ یہ اللہ کی اطاعت ہے، ظلم نہیں۔',
      ar: 'الحجاب أمر من الله للكرامة والحماية والهوية. "وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا مَا ظَهَرَ مِنْهَا وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ" (24:31). هو طاعة لله وليس اضطهاداً.'
    },
    verses: [{ surah: 24, ayah: 31 }, { surah: 33, ayah: 59 }],
    tags: ['hijab', 'modesty', 'women', 'clothing', 'covering']
  },

  // ============ SCIENCE & QURAN ============
  {
    id: 30,
    category: 'science',
    question: {
      en: 'What scientific facts are mentioned in the Quran?',
      ur: 'قرآن میں کون سے سائنسی حقائق ہیں؟',
      ar: 'ما هي الحقائق العلمية المذكورة في القرآن؟'
    },
    answer: {
      en: 'The Quran mentions many scientific facts 1400 years before discovery: embryonic development stages (23:12-14), expansion of universe (51:47), water cycle (39:21), mountains as stabilizers (78:7), unique fingerprints (75:4), barrier between seas (55:19-20), iron sent down (57:25). These are signs for those who reflect.',
      ur: 'قرآن نے 1400 سال پہلے بہت سے سائنسی حقائق بیان کیے: جنین کے مراحل (23:12-14)، کائنات کا پھیلاؤ (51:47)، پانی کا چکر (39:21)، پہاڑ میخوں کی طرح (78:7)، انگلیوں کے منفرد نشان (75:4)، سمندروں کی رکاوٹ (55:19-20)، لوہا اتارا گیا (57:25)۔',
      ar: 'ذكر القرآن حقائق علمية قبل اكتشافها بـ1400 سنة: مراحل الجنين (23:12-14)، توسع الكون (51:47)، دورة الماء (39:21)، الجبال كأوتاد (78:7)، بصمات الأصابع الفريدة (75:4)، البرزخ بين البحرين (55:19-20)، إنزال الحديد (57:25). آيات للمتفكرين.'
    },
    verses: [{ surah: 23, ayah: 12 }, { surah: 51, ayah: 47 }, { surah: 55, ayah: 19 }],
    tags: ['science', 'miracles', 'embryology', 'universe', 'creation']
  },

  // ============ MISCELLANEOUS ============
  {
    id: 31,
    category: 'misc',
    question: {
      en: 'What is the difference between Sunni and Shia Muslims?',
      ur: 'سنی اور شیعہ مسلمانوں میں کیا فرق ہے؟',
      ar: 'ما الفرق بين المسلمين السنة والشيعة؟'
    },
    answer: {
      en: 'Both are Muslims who believe in Allah, the Quran, and Prophet Muhammad. The split originated from disagreement over succession after the Prophet. Sunnis follow the four caliphs\' sequence, while Shia believe leadership should have stayed in the Prophet\'s family through Ali. Despite differences in practices and jurisprudence, both share fundamental Islamic beliefs.',
      ur: 'دونوں مسلمان ہیں جو اللہ، قرآن، اور نبیﷺ پر ایمان رکھتے ہیں۔ تقسیم نبی کے بعد خلافت پر اختلاف سے ہوئی۔ سنی چاروں خلفاء کی ترتیب مانتے ہیں، جبکہ شیعہ مانتے ہیں کہ قیادت نبی کے خاندان میں علیؓ کے ذریعے رہنی چاہیے تھی۔ عملی اختلافات کے باوجود دونوں بنیادی اسلامی عقائد میں شریک ہیں۔',
      ar: 'كلاهما مسلمون يؤمنون بالله والقرآن والنبي محمد. نشأ الانقسام من الخلاف حول الخلافة بعد النبي. أهل السنة يتبعون تسلسل الخلفاء الأربعة، بينما يعتقد الشيعة أن القيادة كان يجب أن تبقى في آل البيت عبر علي. رغم الاختلافات في الممارسات، يشتركان في العقائد الإسلامية الأساسية.'
    },
    verses: [{ surah: 3, ayah: 103 }],
    tags: ['sunni', 'shia', 'unity', 'history', 'sects']
  },
  {
    id: 32,
    category: 'misc',
    question: {
      en: 'Is interest (Riba) really Haram?',
      ur: 'کیا سود واقعی حرام ہے؟',
      ar: 'هل الربا حرام حقاً؟'
    },
    answer: {
      en: 'Yes, interest (Riba) is strictly forbidden. "Allah has permitted trade and forbidden interest" (2:275). Taking or giving interest is a major sin - the Quran declares it as war against Allah and His Messenger. It exploits the needy and creates economic injustice. Islamic finance alternatives exist that are fair and profitable without interest.',
      ur: 'جی ہاں، سود سختی سے حرام ہے۔ "اللہ نے تجارت حلال کی اور سود حرام کیا" (2:275)۔ سود لینا یا دینا بڑا گناہ ہے - قرآن اسے اللہ اور رسول سے جنگ قرار دیتا ہے۔ یہ ضرورت مندوں کا استحصال کرتا ہے اور معاشی ناانصافی پیدا کرتا ہے۔ اسلامی مالیات کے متبادل موجود ہیں۔',
      ar: 'نعم، الربا حرام بشدة. "أَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا" (2:275). أخذ الربا أو إعطاؤه كبيرة من الكبائر - القرآن يعتبره حرباً على الله ورسوله. يستغل المحتاجين ويخلق ظلماً اقتصادياً. توجد بدائل التمويل الإسلامي العادلة والمربحة بدون ربا.'
    },
    verses: [{ surah: 2, ayah: 275 }, { surah: 2, ayah: 278 }, { surah: 3, ayah: 130 }],
    tags: ['riba', 'interest', 'banking', 'finance', 'haram']
  },
  {
    id: 33,
    category: 'misc',
    question: {
      en: 'Can Muslims have non-Muslim friends?',
      ur: 'کیا مسلمان غیر مسلموں سے دوستی کر سکتے ہیں؟',
      ar: 'هل يمكن للمسلمين أن يكونوا أصدقاء لغير المسلمين؟'
    },
    answer: {
      en: 'Yes, Islam encourages good relations with all people. "Allah does not forbid you from dealing kindly and justly with those who do not fight you because of religion" (60:8). The Prophet had non-Muslim neighbors he treated kindly. What is discouraged is taking them as allies against Muslims or in matters that compromise faith.',
      ur: 'جی ہاں، اسلام سب لوگوں سے اچھے تعلقات کی ترغیب دیتا ہے۔ "اللہ تمہیں ان لوگوں کے ساتھ نیکی اور انصاف کرنے سے نہیں روکتا جو دین کی وجہ سے تم سے نہیں لڑتے" (60:8)۔ نبیﷺ کے غیر مسلم پڑوسی تھے جن سے اچھا سلوک کرتے۔ جو منع ہے وہ مسلمانوں کے خلاف انہیں حلیف بنانا یا ایمان سے سمجھوتہ۔',
      ar: 'نعم، الإسلام يشجع العلاقات الحسنة مع الجميع. "لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ" (60:8). كان للنبي ﷺ جيران غير مسلمين يحسن إليهم. المنهي عنه اتخاذهم أولياء ضد المسلمين أو ما يضر بالدين.'
    },
    verses: [{ surah: 60, ayah: 8 }, { surah: 49, ayah: 13 }],
    tags: ['friendship', 'non-muslims', 'relations', 'kindness', 'tolerance']
  },
  {
    id: 34,
    category: 'faith',
    question: {
      en: 'What is the meaning of "La ilaha illallah"?',
      ur: '"لا الہ الا اللہ" کا مطلب کیا ہے؟',
      ar: 'ما معنى "لا إله إلا الله"؟'
    },
    answer: {
      en: '"La ilaha illallah" means "There is no god worthy of worship except Allah." This is the foundation of Islam (Tawhid). It negates all false gods and affirms that only Allah deserves worship. Combined with "Muhammad Rasulullah" (Muhammad is the Messenger of Allah), it forms the Shahada - the declaration of faith.',
      ur: '"لا الہ الا اللہ" کا مطلب ہے "اللہ کے سوا کوئی عبادت کے لائق نہیں۔" یہ اسلام کی بنیاد (توحید) ہے۔ یہ تمام جھوٹے معبودوں کی نفی کرتا ہے اور تصدیق کرتا ہے کہ صرف اللہ عبادت کا مستحق ہے۔ "محمد رسول اللہ" کے ساتھ مل کر یہ شہادت بنتا ہے - ایمان کا اقرار۔',
      ar: '"لا إله إلا الله" تعني أنه لا معبود بحق إلا الله. هذا أساس الإسلام (التوحيد). ينفي جميع الآلهة الباطلة ويثبت أن الله وحده يستحق العبادة. مع "محمد رسول الله" تشكل الشهادة - إعلان الإيمان.'
    },
    verses: [{ surah: 47, ayah: 19 }, { surah: 37, ayah: 35 }],
    tags: ['shahada', 'tawhid', 'kalima', 'faith', 'declaration']
  },
  {
    id: 35,
    category: 'quran',
    question: {
      en: 'What is the best Surah in the Quran?',
      ur: 'قرآن کی بہترین سورۃ کون سی ہے؟',
      ar: 'ما أفضل سورة في القرآن؟'
    },
    answer: {
      en: 'The Prophet (PBUH) said Al-Fatiha is the greatest Surah in the Quran. Ayatul Kursi (2:255) is the greatest single verse. Surah Al-Ikhlas (112) equals one-third of the Quran in reward. Surah Ya-Sin is called the heart of the Quran. Surah Al-Mulk protects from grave punishment. Each surah has unique virtues and blessings.',
      ur: 'نبیﷺ نے فرمایا الفاتحہ قرآن کی سب سے عظیم سورۃ ہے۔ آیت الکرسی (2:255) سب سے عظیم آیت ہے۔ سورۃ الاخلاص (112) قرآن کے ایک تہائی کے برابر ثواب رکھتی ہے۔ یٰسین قرآن کا دل ہے۔ سورۃ الملک قبر کے عذاب سے بچاتی ہے۔ ہر سورۃ کی منفرد فضیلت ہے۔',
      ar: 'قال النبي ﷺ الفاتحة أعظم سورة. آية الكرسي (2:255) أعظم آية. سورة الإخلاص (112) تعدل ثلث القرآن. يس قلب القرآن. الملك تنجي من عذاب القبر. لكل سورة فضائل فريدة.'
    },
    verses: [{ surah: 1, ayah: 1 }, { surah: 2, ayah: 255 }, { surah: 112, ayah: 1 }],
    tags: ['fatiha', 'ayatul kursi', 'ikhlas', 'yasin', 'best', 'virtues']
  },
  // More FAQs continue...
];

// Helper function to get FAQ by ID
export const getFAQById = (id) => QURAN_FAQS.find(faq => faq.id === id);

// Helper function to get FAQs by category
export const getFAQsByCategory = (categoryId) => QURAN_FAQS.filter(faq => faq.category === categoryId);

// Helper function to search FAQs
export const searchFAQs = (query, lang = 'en') => {
  const lowerQuery = query.toLowerCase();
  return QURAN_FAQS.filter(faq => {
    const question = faq.question[lang]?.toLowerCase() || faq.question.en.toLowerCase();
    const answer = faq.answer[lang]?.toLowerCase() || faq.answer.en.toLowerCase();
    const tags = faq.tags.join(' ').toLowerCase();
    return question.includes(lowerQuery) || answer.includes(lowerQuery) || tags.includes(lowerQuery);
  });
};

// Get category info
export const getCategoryById = (categoryId) => FAQ_CATEGORIES.find(cat => cat.id === categoryId);

// Get total FAQ count
export const getTotalFAQCount = () => QURAN_FAQS.length;
