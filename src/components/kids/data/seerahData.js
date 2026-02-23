/**
 * Seerah (Prophet's Life) Data for Kids Mode
 * Contains key events from the life of Prophet Muhammad ﷺ
 * Multilingual bedtime stories with audio support
 *
 * IMPORTANT: All content is written with utmost respect and reverence
 * for Prophet Muhammad ﷺ (peace and blessings be upon him).
 *
 * AUTHENTIC SOURCES:
 * Each event includes references to authentic Islamic sources:
 * - Sahih Bukhari (صحيح البخاري)
 * - Sahih Muslim (صحيح مسلم)
 * - Ibn Hisham's As-Sirah an-Nabawiyyah (السيرة النبوية)
 * - Ibn Kathir's Al-Bidaya wan-Nihaya (البداية والنهاية)
 * - At-Tabari's Tarikh (تاريخ الطبري)
 * - Ibn Saad's At-Tabaqat al-Kubra (الطبقات الكبرى)
 * - Relevant Quranic verses
 *
 * Languages: English, Arabic (العربية), Urdu (اردو)
 */

// =============================================================================
// SEERAH EVENTS - Key life events of Prophet Muhammad ﷺ
// =============================================================================

export const SEERAH_EVENTS = [
  {
    id: 1,
    name: 'Birth of the Prophet ﷺ',
    nameAr: 'ولادة النبي ﷺ',
    nameUr: 'ولادتِ نبوی ﷺ',
    year: '12 Rabi al-Awwal, 570 CE',
    yearHijri: 'عام الفيل (Year of the Elephant)',
    emoji: '⭐',
    color: '#10B981',
    location: 'Mecca, House of Abu Talib',
    locationAr: 'مكة المكرمة، دار أبي طالب',
    locationUr: 'مکہ مکرمہ',
    icon: 'star',
    difficulty: 'easy',
    keyFigures: ['Aminah bint Wahb (Mother)', 'Abdullah ibn Abdul Muttalib (Father)', 'Abdul Muttalib (Grandfather)', 'Shifa bint Awf (Midwife)'],
    historicalNote: 'Born in the Year of the Elephant, when Abraha attacked Mecca with elephants but was defeated by Allah. Father Abdullah passed away before birth.',
    references: [
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Birth of the Prophet' },
      { source: 'Sahih Muslim', hadith: '2276', topic: 'Birth on Monday' },
      { source: 'Ibn Kathir', work: 'Al-Bidaya wan-Nihaya', volume: 2 },
    ],
    story: {
      en: {
        title: 'The Blessed Birth in Mecca',
        parts: [
          "In the blessed city of Mecca, near the Holy Kaaba, lived a noble family from the tribe of Quraysh. It was the Year of the Elephant - the same year Allah protected the Kaaba from Abraha's army.",
          "On the 12th of Rabi al-Awwal, a Monday, something miraculous happened. Lady Aminah bint Wahb was blessed with a son. A beautiful light shone from him that illuminated all of Mecca!",
          "The grandfather, Abdul Muttalib, the chief of Quraysh, was overjoyed! He took the blessed one to the Kaaba and named him Muhammad ﷺ, meaning 'the praised one' - a name never given before in Arabia.",
          "Thuwaybah, the freed servant of Abu Lahab, had the honor of being the first to nurse him. From the very first moment, everyone noticed the blessings that surrounded Muhammad ﷺ.",
          "This blessed soul was born an orphan - his father Abdullah had passed away before his birth. Yet Allah had a magnificent plan. He would grow to become the Seal of the Prophets, the mercy to all worlds."
        ],
        moral: "Allah's plans are always perfect. Even in difficulty, there is wisdom. Prophet Muhammad ﷺ was born an orphan yet became the most honored of all creation.",
      },
      ur: {
        title: 'مکہ مکرمہ میں ولادتِ مبارکہ',
        parts: [
          "رسول اللہ ﷺ کی ولادت مکہ مکرمہ میں بنی ہاشم کے معزز خاندان میں عام الفیل کے سال ہوئی، جب اللہ تعالیٰ نے ابرہہ کی فوج سے بیت اللہ کی حفاظت فرمائی (سورۃ الفیل؛ ابن ہشام، سیرۃ)۔",
          "مشہور روایت کے مطابق آپ ﷺ کی ولادت 12 ربیع الاول، پیر کے دن ہوئی، اگرچہ تاریخ کے بارے میں اہلِ سیر کے مابین اختلاف موجود ہے۔",
          "آپ ﷺ کے دادا عبدالمطلب نے آپ کا نام 'محمد' رکھا، جو اس زمانے میں غیر معمولی نام تھا اور اس کا معنی ہے 'بہت زیادہ تعریف کیا جانے والا'۔",
          "ابتدائی رضاعت ثویبہ کے ذریعے ہوئی، بعد ازاں حلیمہ سعدیہ رضی اللہ عنہا کو رضاعت کا شرف حاصل ہوا۔",
          "آپ ﷺ یتیم پیدا ہوئے؛ والد حضرت عبداللہ پہلے ہی وفات پا چکے تھے۔ اللہ تعالیٰ نے اسی یتیمی کے ذریعے آپ ﷺ کی خصوصی تربیت فرمائی (سورۃ الضحیٰ: 6)۔"
        ],
        moral: "اللہ کے منصوبے ہمیشہ بہترین ہوتے ہیں۔ مشکل میں بھی حکمت ہوتی ہے۔ نبی ﷺ یتیم پیدا ہوئے مگر تمام مخلوق میں سب سے معزز بنے۔",
      },
      ar: {
        title: 'الولادة المباركة في مكة',
        parts: [
          "في مكة المكرمة المباركة، قرب الكعبة المشرفة، عاشت عائلة نبيلة من قبيلة قريش. كان عام الفيل - العام الذي حمى الله فيه الكعبة من جيش أبرهة.",
          "في الثاني عشر من ربيع الأول، يوم الاثنين، حدث شيء معجز. رُزقت السيدة آمنة بنت وهب بمولود مبارك. أشرق نور منه أضاء مكة كلها!",
          "فرح الجد عبد المطلب، سيد قريش، فرحاً عظيماً! حمل المولود المبارك إلى الكعبة وسماه محمداً ﷺ - اسم لم يُسمَّ به أحد في العرب من قبل.",
          "ثويبة، مولاة أبي لهب، كان لها شرف إرضاعه أولاً. منذ اللحظة الأولى، لاحظ الجميع البركات التي تحيط بمحمد ﷺ.",
          "وُلد هذا المولود المبارك يتيماً - إذ توفي أبوه عبد الله قبل ولادته. لكن الله كان له خطة عظيمة. سيكبر ليصبح خاتم النبيين، رحمة للعالمين."
        ],
        moral: "خطط الله دائماً كاملة. حتى في الصعوبات حكمة. وُلد النبي ﷺ يتيماً لكنه أصبح أكرم الخلق.",
      },
    },
  },
  {
    id: 2,
    name: 'Life with Halima',
    nameAr: 'الحياة مع حليمة السعدية',
    nameUr: 'حلیمہ سعدیہ کی کفالت',
    year: '570-575 CE',
    yearHijri: 'السنوات الأولى',
    emoji: '🏕️',
    color: '#8B5CF6',
    location: 'Desert',
    locationAr: 'البادية',
    locationUr: 'صحرا',
    icon: 'tent',
    difficulty: 'easy',
    keyFigures: ['Halima Sadia (Foster Mother)', 'Harith (Foster Father)', 'Shayma (Foster Sister)'],
    references: [
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Nursing by Halima' },
      { source: 'Ibn Saad', work: 'At-Tabaqat al-Kubra', volume: 1 },
      { source: 'At-Tabari', work: 'Tarikh al-Rusul wal-Muluk' },
    ],
    story: {
      en: {
        title: 'Life in the Beautiful Desert',
        parts: [
          "When Muhammad ﷺ was just a few days old, a kind lady named Halima came to take care of him. She lived in the peaceful desert with her family.",
          "Halima was amazed! As soon as she held Muhammad ﷺ, wonderful things started happening. Her animals gave more milk, and her plants grew better.",
          "Muhammad ﷺ loved the desert! He enjoyed the bright blue sky, watched the camels, and listened to the birds singing. His foster sister Shayma took care of him.",
          "In the desert, Muhammad ﷺ learned to speak the most beautiful Arabic. He grew strong and healthy in the fresh air.",
          "From the very beginning, everyone noticed how special Muhammad ﷺ was. He was always kind, never mean, and shared everything he had with others."
        ],
        moral: "Being close to nature helps us grow strong. We should be grateful for the people who take care of us.",
      },
      ur: {
        title: 'صحرا کی پرورش اور تربیت',
        parts: [
          "عرب کا دستور تھا کہ بچوں کو فصاحتِ زبان اور مضبوط نشوونما کے لیے دیہات یا صحرا میں بھیجا جاتا تھا۔",
          "حلیمہ سعدیہ رضی اللہ عنہا کے گھر آپ ﷺ کی آمد کے بعد برکت کے آثار ظاہر ہوئے (ابن سعد، طبقات)۔",
          "صحرا میں قیام کے دوران آپ ﷺ نے خالص اور فصیح عربی سیکھی۔",
          "رضاعی بہن شیماء رضی اللہ عنہا آپ ﷺ سے خاص محبت رکھتی تھیں۔",
          "اس دور میں آپ ﷺ کی شخصیت میں سنجیدگی، وقار اور غیر معمولی شرافت نمایاں تھی۔"
        ],
        moral: "فطرت کے قریب رہنا ہمیں مضبوط بناتا ہے۔ ہمیں ان لوگوں کا شکر گزار ہونا چاہیے جو ہماری دیکھ بھال کرتے ہیں۔",
      },
      ar: {
        title: 'الحياة في بادية بني سعد',
        parts: [
          "عندما كان محمد ﷺ عمره أيام قليلة، جاءت سيدة طيبة تُدعى حليمة السعدية لترعاه. كانت تعيش في بادية بني سعد الهادئة مع عائلتها.",
          "اندهشت حليمة! بمجرد أن حملت محمداً ﷺ، بدأت البركات تحدث. أعطت حيواناتها حليباً أكثر، ونمت نباتاتها بشكل أفضل.",
          "أحب محمد ﷺ الصحراء! استمتع بالسماء الزرقاء الصافية، وراقب الجمال، واستمع إلى غناء الطيور. كانت أخته في الرضاعة الشيماء ترعاه.",
          "في البادية، تعلم محمد ﷺ أفصح العربية وأجملها. نما قوياً وصحياً في الهواء النقي.",
          "منذ البداية، لاحظ الجميع كم كان محمد ﷺ مميزاً. كان دائماً لطيفاً ورحيماً، ويشارك كل ما لديه مع الآخرين."
        ],
        moral: "القرب من الطبيعة يساعدنا على النمو بقوة. يجب أن نكون شاكرين للأشخاص الذين يعتنون بنا.",
      },
    },
  },
  {
    id: 3,
    name: 'The Truthful One',
    nameAr: 'الصادق الأمين',
    nameUr: 'صادق اور امین',
    year: '595 CE',
    yearHijri: 'قبل البعثة',
    emoji: '📿',
    color: '#3B82F6',
    location: 'Mecca',
    locationAr: 'مكة المكرمة',
    locationUr: 'مکہ مکرمہ',
    icon: 'handshake',
    difficulty: 'easy',
    keyFigures: ['People of Mecca', 'Merchants', 'Traders'],
    references: [
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Youth in Mecca' },
      { source: 'At-Tirmidhi', hadith: '3620', topic: 'Character of the Prophet' },
      { source: 'Ibn Kathir', work: 'Al-Bidaya wan-Nihaya', volume: 2 },
    ],
    story: {
      en: {
        title: 'The Most Honest Person',
        parts: [
          "As Muhammad ﷺ grew up, everyone in Mecca noticed something very special about him. He NEVER told a lie - not even once!",
          "When people gave him things to keep safe, he always returned everything perfectly. They called him 'Al-Amin' which means 'The Trustworthy.'",
          "When Muhammad ﷺ spoke, people listened carefully because they knew he always told the truth. They called him 'As-Sadiq' which means 'The Truthful.'",
          "Merchants trusted Muhammad ﷺ with their goods. He would travel far to trade, and always come back with exactly the right amount of money.",
          "Everyone, even people who didn't agree with him later, admitted that Muhammad ﷺ was the most honest person they had ever met. His word was like gold!"
        ],
        moral: "Always tell the truth, even when it's hard. Being honest makes people trust and love you.",
      },
      ur: {
        title: 'مکہ میں اخلاقی امتیاز',
        parts: [
          "جوانی تک پہنچتے پہنچتے آپ ﷺ کی راست گوئی اور دیانت مکہ میں مشہور ہو چکی تھی۔",
          "اہلِ مکہ اپنی امانتیں آپ ﷺ کے پاس رکھتے تھے۔",
          "آپ ﷺ کو 'الامین' اور 'الصادق' کے القابات سے پکارا جاتا تھا۔",
          "تجارت کے سفر میں آپ ﷺ کی دیانت نے حضرت خدیجہ رضی اللہ عنہا کو متاثر کیا۔",
          "بعثت کے بعد بھی دشمنوں نے آپ ﷺ کی امانت پر کبھی اعتراض نہ کیا (صحیح بخاری)۔"
        ],
        moral: "ہمیشہ سچ بولو، چاہے مشکل ہو۔ ایمانداری سے لوگ آپ پر بھروسہ کرتے اور آپ سے محبت کرتے ہیں۔",
      },
      ar: {
        title: 'الصادق الأمين',
        parts: [
          "عندما كبر محمد ﷺ، لاحظ الجميع في مكة شيئاً مميزاً فيه. لم يكذب أبداً - ولا مرة واحدة!",
          "عندما كان الناس يعطونه أشياء ليحفظها، كان يرجعها دائماً كما هي. سموه 'الأمين'.",
          "عندما كان محمد ﷺ يتحدث، كان الناس يستمعون بعناية لأنهم يعرفون أنه يقول الحقيقة دائماً. سموه 'الصادق'.",
          "كان التجار يثقون بمحمد ﷺ في بضائعهم. كان يسافر بعيداً للتجارة، ويعود دائماً بالمبلغ الصحيح تماماً.",
          "الجميع، حتى الذين لم يتفقوا معه لاحقاً، اعترفوا بأن محمداً ﷺ كان أصدق شخص قابلوه. كانت كلمته كالذهب!"
        ],
        moral: "قل الحقيقة دائماً، حتى عندما يكون صعباً. الصدق يجعل الناس يثقون بك ويحبونك.",
      },
    },
  },
  {
    id: 4,
    name: 'Marriage to Khadijah',
    nameAr: 'الزواج من خديجة',
    nameUr: 'خدیجہ سے شادی',
    year: '595 CE',
    yearHijri: 'قبل البعثة',
    emoji: '💍',
    color: '#EC4899',
    location: 'Mecca',
    locationAr: 'مكة المكرمة',
    locationUr: 'مکہ مکرمہ',
    icon: 'heart',
    difficulty: 'easy',
    keyFigures: ['Khadijah bint Khuwaylid', 'Abu Talib (Uncle)'],
    references: [
      { source: 'Sahih Bukhari', hadith: '3821', topic: 'Marriage to Khadijah' },
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Marriage' },
      { source: 'Ibn Saad', work: 'At-Tabaqat al-Kubra', volume: 1 },
    ],
    story: {
      en: {
        title: 'A Beautiful Partnership',
        parts: [
          "In Mecca, there lived a wonderful lady named Khadijah. She was smart, kind, and had a successful business trading goods.",
          "Khadijah heard about the honest Muhammad ﷺ. She asked him to help with her business, and he did such a great job!",
          "Khadijah was so impressed by Muhammad's ﷺ honesty and kindness that she wanted to marry him. She sent her friend to ask him.",
          "Muhammad ﷺ happily agreed, and they got married. Khadijah was 40 years old and Muhammad ﷺ was 25. They loved each other very much!",
          "Khadijah became the first person to believe in Muhammad ﷺ when he became a Prophet. She was always his biggest supporter and best friend."
        ],
        moral: "A good marriage is built on trust, kindness, and supporting each other. Khadijah showed us how to be a loving partner.",
      },
      ur: {
        title: 'ایک بابرکت ازدواجی زندگی',
        parts: [
          "حضرت خدیجہ رضی اللہ عنہا مکہ کی باوقار اور کامیاب تاجر خاتون تھیں۔",
          "انہوں نے آپ ﷺ کو اپنے تجارتی قافلے کے ساتھ شام بھیجا۔",
          "واپسی پر آپ ﷺ کی دیانت سے متاثر ہو کر نکاح کی خواہش ظاہر کی۔",
          "نکاح کے وقت آپ ﷺ کی عمر 25 سال اور حضرت خدیجہ رضی اللہ عنہا کی عمر تقریباً 40 سال تھی۔",
          "بعثت کے بعد سب سے پہلے ایمان لانے کا شرف حضرت خدیجہ رضی اللہ عنہا کو حاصل ہوا (مسند احمد)۔"
        ],
        moral: "اچھی شادی اعتماد، مہربانی اور ایک دوسرے کا ساتھ دینے سے بنتی ہے۔ حضرت خدیجہ نے ہمیں سکھایا کہ محبت کرنے والا ساتھی کیسا ہوتا ہے۔",
      },
      ar: {
        title: 'شراكة جميلة',
        parts: [
          "في مكة، عاشت سيدة رائعة تُدعى خديجة. كانت ذكية ولطيفة ولديها تجارة ناجحة.",
          "سمعت خديجة عن الأمين محمد ﷺ. طلبت منه المساعدة في تجارتها، فقام بعمل رائع!",
          "أُعجبت خديجة كثيراً بأمانة محمد ﷺ ولطفه وأرادت الزواج منه. أرسلت صديقتها لتسأله.",
          "وافق محمد ﷺ بسعادة وتزوجا. كانت خديجة في الأربعين من عمرها ومحمد ﷺ في الخامسة والعشرين. أحبا بعضهما كثيراً!",
          "أصبحت خديجة أول من آمن بمحمد ﷺ عندما أصبح نبياً. كانت دائماً أكبر داعمة له وأفضل صديقة."
        ],
        moral: "الزواج الجيد يُبنى على الثقة واللطف ودعم بعضنا البعض. أظهرت لنا خديجة كيف نكون شريكاً محباً.",
      },
    },
  },
  {
    id: 5,
    name: 'First Revelation',
    nameAr: 'نزول الوحي',
    nameUr: 'پہلی وحی',
    year: '610 CE',
    yearHijri: 'السنة الأولى',
    emoji: '📖',
    color: '#F59E0B',
    location: 'Cave Hira',
    locationAr: 'غار حراء',
    locationUr: 'غار حرا',
    icon: 'book-open',
    difficulty: 'medium',
    keyFigures: ['Angel Jibreel (Gabriel)', 'Khadijah'],
    surahRef: 96,
    references: [
      { source: 'Sahih Bukhari', hadith: '3', topic: 'Beginning of Revelation' },
      { source: 'Sahih Muslim', hadith: '160', topic: 'First Revelation' },
      { source: 'Quran', surah: 96, ayat: '1-5', name: 'Al-Alaq' },
    ],
    story: {
      en: {
        title: 'The Night the Quran Began',
        parts: [
          "Muhammad ﷺ loved to think about Allah. He would climb up to a cave called Hira on top of a mountain to be alone and think.",
          "One special night in the month of Ramadan, something amazing happened! A bright light filled the cave, and Angel Jibreel appeared!",
          "The angel said, 'Read!' Muhammad ﷺ said, 'I cannot read.' The angel hugged him tight and said again, 'Read!' This happened three times.",
          "Then Jibreel taught Muhammad ﷺ the first words of the Quran: 'Read in the name of your Lord who created...' These were the most beautiful words!",
          "Muhammad ﷺ was shaking when he came home. Kind Khadijah wrapped him in a blanket and said, 'Don't worry! Allah will never let anything bad happen to you because you are so good!'"
        ],
        moral: "Allah chose Muhammad ﷺ to bring us the Quran because he was the most honest and kind person. We should read and learn the Quran with love.",
      },
      ur: {
        title: 'بعثت اور نزولِ قرآن کا آغاز',
        parts: [
          "آپ ﷺ غارِ حرا میں غور و فکر اور عبادت کے لیے تشریف لے جاتے تھے۔",
          "40 سال کی عمر میں رمضان المبارک کی ایک رات جبرائیل علیہ السلام پہلی وحی لے کر آئے (صحیح بخاری)۔",
          "پہلی آیات سورۃ العلق کی ابتدائی آیات تھیں: 'اقرأ باسم ربك...'",
          "آپ ﷺ خوف زدہ ہو کر گھر تشریف لائے، حضرت خدیجہ رضی اللہ عنہا نے تسلی دی۔",
          "ورقہ بن نوفل نے اس واقعہ کو نبوت کی علامت قرار دیا۔"
        ],
        moral: "اللہ نے محمد ﷺ کو قرآن دینے کے لیے چنا کیونکہ وہ سب سے ایمانداور مہربان تھے۔ ہمیں قرآن محبت سے پڑھنا اور سیکھنا چاہیے۔",
      },
      ar: {
        title: 'الليلة التي بدأ فيها القرآن',
        parts: [
          "كان محمد ﷺ يحب التفكر في الله. كان يصعد إلى غار حراء على قمة الجبل ليكون وحده ويتفكر.",
          "في ليلة خاصة من شهر رمضان، حدث شيء مذهل! ملأ نور ساطع الغار، وظهر الملك جبريل!",
          "قال الملك: 'اقرأ!' قال محمد ﷺ: 'ما أنا بقارئ.' ضمه الملك بقوة وقال مرة أخرى: 'اقرأ!' حدث هذا ثلاث مرات.",
          "ثم علّم جبريل محمداً ﷺ أول كلمات القرآن: 'اقرأ باسم ربك الذي خلق...' كانت هذه أجمل الكلمات!",
          "كان محمد ﷺ يرتجف عندما عاد إلى البيت. لفّته خديجة الطيبة ببطانية وقالت: 'لا تقلق! لن يتركك الله أبداً لأنك طيب جداً!'"
        ],
        moral: "اختار الله محمداً ﷺ ليأتينا بالقرآن لأنه كان أصدق وألطف الناس. يجب أن نقرأ ونتعلم القرآن بحب.",
      },
    },
  },
  {
    id: 6,
    name: 'The Early Believers',
    nameAr: 'المؤمنون الأوائل',
    nameUr: 'ابتدائی ایمان لانے والے',
    year: '610-613 CE',
    yearHijri: 'السنوات الأولى',
    emoji: '🌙',
    color: '#6366F1',
    location: 'Mecca',
    locationAr: 'مكة المكرمة',
    locationUr: 'مکہ مکرمہ',
    icon: 'users',
    difficulty: 'easy',
    keyFigures: ['Abu Bakr', 'Ali', 'Zaid ibn Haritha', 'Khadijah'],
    references: [
      { source: 'Sahih Bukhari', hadith: '3661', topic: 'Merits of Abu Bakr' },
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Early Muslims' },
      { source: 'At-Tirmidhi', hadith: '3733', topic: 'First to Accept Islam' },
    ],
    story: {
      en: {
        title: 'The First Friends of Islam',
        parts: [
          "When Muhammad ﷺ started sharing Allah's message, some very special people believed in him right away. Let's meet them!",
          "Khadijah, his loving wife, was the first person to say 'I believe!' She never doubted him for even one second.",
          "Abu Bakr was Muhammad's ﷺ best friend. When he heard about Islam, he immediately said 'Yes!' He was so happy to believe!",
          "Young Ali was like a son to Muhammad ﷺ. Even though he was just a boy, he was brave enough to believe and follow Islam.",
          "Zaid was a freed slave who loved Muhammad ﷺ so much. He believed right away too. These first Muslims are our heroes!"
        ],
        moral: "It takes courage to believe in what's right. The first Muslims were brave and became the best examples for us.",
      },
      ur: {
        title: 'اولین مسلمان',
        parts: [
          "دعوت کا آغاز خفیہ طور پر ہوا۔",
          "سب سے پہلے ایمان لانے والوں میں حضرت خدیجہ، حضرت علی، حضرت زید بن حارثہ اور حضرت ابوبکر شامل تھے۔",
          "حضرت ابوبکر کے ذریعے کئی جلیل القدر صحابہ ایمان لائے۔",
          "ابتدائی مسلمان شدید آزمائشوں سے گزرے۔",
          "یہی جماعت بعد میں اسلام کی بنیاد بنی۔"
        ],
        moral: "سچ پر ایمان لانے کے لیے ہمت چاہیے۔ پہلے مسلمان بہادر تھے اور ہمارے لیے بہترین مثال بنے۔",
      },
      ar: {
        title: 'أصدقاء الإسلام الأوائل',
        parts: [
          "عندما بدأ محمد ﷺ ينشر رسالة الله، آمن به بعض الأشخاص المميزين فوراً. هيا نتعرف عليهم!",
          "خديجة، زوجته المحبة، كانت أول من قال 'أؤمن!' لم تشك فيه ولو للحظة واحدة.",
          "أبو بكر كان أعز صديق لمحمد ﷺ. عندما سمع عن الإسلام، قال فوراً 'نعم!' كان سعيداً جداً بالإيمان!",
          "علي الصغير كان مثل الابن لمحمد ﷺ. رغم أنه كان مجرد صبي، كان شجاعاً بما يكفي ليؤمن ويتبع الإسلام.",
          "زيد كان عبداً محرراً أحب محمداً ﷺ كثيراً. آمن فوراً أيضاً. هؤلاء المسلمون الأوائل هم أبطالنا!"
        ],
        moral: "يتطلب شجاعة أن تؤمن بما هو صحيح. كان المسلمون الأوائل شجعاناً وأصبحوا أفضل مثال لنا.",
      },
    },
  },
  {
    id: 7,
    name: 'Hardship in Mecca',
    nameAr: 'الابتلاء في مكة',
    nameUr: 'مکہ میں مشکلات',
    year: '613-619 CE',
    yearHijri: 'سنوات الدعوة',
    emoji: '🏔️',
    color: '#EF4444',
    location: 'Mecca',
    locationAr: 'مكة المكرمة',
    locationUr: 'مکہ مکرمہ',
    icon: 'shield',
    difficulty: 'medium',
    keyFigures: ['Bilal', 'Sumayyah', 'Yasir', 'Abu Talib'],
    references: [
      { source: 'Sahih Bukhari', hadith: '3835', topic: 'Persecution of Early Muslims' },
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Boycott of Banu Hashim' },
      { source: 'Ibn Kathir', work: 'Al-Bidaya wan-Nihaya', volume: 3 },
    ],
    story: {
      en: {
        title: 'Staying Strong When Times Are Hard',
        parts: [
          "Not everyone liked the new message of Islam. Some rich people in Mecca were very mean to the Muslims. But the believers stayed strong!",
          "Bilal was a slave who believed in Allah. His cruel owner would put him on hot sand, but Bilal would say 'Ahad! Ahad!' meaning 'One! One!' - Allah is One!",
          "Sumayyah and her family were hurt badly for believing in Islam. She became the first martyr - someone who gave their life for Islam. We remember her bravery!",
          "The Muslims were boycotted - no one would sell them food or talk to them. They lived in a valley for three years, eating leaves to survive.",
          "Even through all this pain, not one Muslim gave up their faith. They knew Allah was with them. Their patience teaches us to never give up!"
        ],
        moral: "When life gets hard, remember that Allah is always with those who believe. Be patient and stay strong like the early Muslims.",
      },
      ur: {
        title: 'صبر و استقامت کا دور',
        parts: [
          "قریش نے دعوتِ اسلام کی مخالفت شروع کی۔",
          "حضرت بلال رضی اللہ عنہ کو سخت اذیت دی گئی (ابن ہشام)۔",
          "حضرت سمیہ رضی اللہ عنہا پہلی شہیدہ بنیں۔",
          "شعبِ ابی طالب میں تین سالہ محاصرہ ہوا۔",
          "اس دور میں صبر اور توکل کی اعلیٰ مثال قائم ہوئی۔"
        ],
        moral: "جب زندگی مشکل ہو، یاد رکھو کہ اللہ ہمیشہ ایمان والوں کے ساتھ ہے۔ پہلے مسلمانوں کی طرح صبر کرو اور مضبوط رہو۔",
      },
      ar: {
        title: 'البقاء قوياً في الأوقات الصعبة',
        parts: [
          "لم يحب الجميع رسالة الإسلام الجديدة. كان بعض الأغنياء في مكة قساة جداً مع المسلمين. لكن المؤمنين بقوا أقوياء!",
          "بلال كان عبداً آمن بالله. كان سيده القاسي يضعه على الرمل الحار، لكن بلالاً كان يقول 'أحد! أحد!' - الله واحد!",
          "سمية وعائلتها تعرضوا للأذى الشديد بسبب إيمانهم بالإسلام. أصبحت أول شهيدة في الإسلام. نتذكر شجاعتها!",
          "تم مقاطعة المسلمين - لم يكن أحد يبيعهم طعاماً أو يكلمهم. عاشوا في واد لثلاث سنوات، يأكلون الأوراق للبقاء.",
          "رغم كل هذا الألم، لم يتخل أي مسلم عن إيمانه. عرفوا أن الله معهم. صبرهم يعلمنا ألا نستسلم أبداً!"
        ],
        moral: "عندما تصعب الحياة، تذكر أن الله دائماً مع المؤمنين. كن صبوراً وقوياً مثل المسلمين الأوائل.",
      },
    },
  },
  {
    id: 8,
    name: 'The Night Journey',
    nameAr: 'الإسراء والمعراج',
    nameUr: 'معراج کا سفر',
    year: '621 CE',
    yearHijri: 'السنة الحادية عشرة',
    emoji: '🌙',
    color: '#A855F7',
    location: 'Jerusalem & Heavens',
    locationAr: 'القدس والسماوات',
    locationUr: 'یروشلم اور آسمان',
    icon: 'moon',
    difficulty: 'medium',
    keyFigures: ['Angel Jibreel', 'Buraq', 'All Prophets'],
    surahRef: 17,
    references: [
      { source: 'Sahih Bukhari', hadith: '3887', topic: "Al-Isra' wal-Mi'raj" },
      { source: 'Sahih Muslim', hadith: '162', topic: 'Night Journey' },
      { source: 'Quran', surah: 17, ayat: 1, name: 'Al-Isra' },
    ],
    story: {
      en: {
        title: 'The Magical Night Journey',
        parts: [
          "One night, while Muhammad ﷺ was sleeping, Angel Jibreel came to him with a special creature called Buraq - white and shining like lightning!",
          "Muhammad ﷺ rode Buraq and flew through the night sky to Jerusalem, the holy city. There, he prayed with all the prophets who came before him - Adam, Ibrahim, Musa, Isa, and more!",
          "Then, Muhammad ﷺ went up through the seven heavens! At each heaven, he met different prophets. They all said 'Welcome, brother!'",
          "Finally, Muhammad ﷺ went beyond where any creation had ever gone - to meet Allah! Allah gave him a special gift: the five daily prayers for all Muslims.",
          "When Muhammad ﷺ came back, it was still the same night! Some people didn't believe him, but Abu Bakr said 'If Muhammad says it, I believe it!' That's why Abu Bakr is called As-Siddiq - the one who believes."
        ],
        moral: "Allah honored Muhammad ﷺ with an amazing journey. The five daily prayers are Allah's gift to us - we should treasure them!",
      },
      ur: {
        title: 'اسراء و معراج',
        parts: [
          "اللہ تعالیٰ نے آپ ﷺ کو مسجد الحرام سے مسجد الاقصیٰ تک سیر کرائی (سورۃ الاسراء: 1)۔",
          "وہاں آپ ﷺ نے انبیاء کی امامت فرمائی۔",
          "پھر آسمانوں کی طرف عروج ہوا۔",
          "اسی موقع پر پانچ وقت کی نماز فرض ہوئی (صحیح بخاری)۔",
          "یہ واقعہ نبوت کے مقامِ عظیم کی دلیل ہے۔"
        ],
        moral: "اللہ نے محمد ﷺ کو حیرت انگیز سفر سے نوازا۔ پانچ نمازیں اللہ کا تحفہ ہیں - ہمیں ان کی قدر کرنی چاہیے!",
      },
      ar: {
        title: 'رحلة الليلة السحرية',
        parts: [
          "ذات ليلة، بينما كان محمد ﷺ نائماً، جاءه الملك جبريل بمخلوق خاص يُدعى البراق - أبيض ولامع كالبرق!",
          "ركب محمد ﷺ البراق وطار عبر سماء الليل إلى القدس، المدينة المقدسة. هناك، صلّى مع جميع الأنبياء - آدم وإبراهيم وموسى وعيسى!",
          "ثم صعد محمد ﷺ عبر السماوات السبع! في كل سماء، قابل أنبياء مختلفين. جميعهم قالوا 'مرحباً أخي!'",
          "أخيراً، ذهب محمد ﷺ إلى ما وراء حيث وصل أي مخلوق - للقاء الله! أعطاه الله هدية خاصة: الصلوات الخمس لجميع المسلمين.",
          "عندما عاد محمد ﷺ، كانت لا تزال نفس الليلة! بعض الناس لم يصدقوه، لكن أبا بكر قال 'إذا قالها محمد، فأنا أصدقها!' لذلك سُمي أبو بكر الصديق."
        ],
        moral: "أكرم الله محمداً ﷺ برحلة مذهلة. الصلوات الخمس هدية الله لنا - يجب أن نعتز بها!",
      },
    },
  },
  {
    id: 9,
    name: 'Migration to Medina',
    nameAr: 'الهجرة إلى المدينة',
    nameUr: 'مدینہ کی طرف ہجرت',
    year: '622 CE',
    yearHijri: 'السنة الأولى للهجرة',
    emoji: '🐪',
    color: '#D97706',
    location: 'Medina',
    locationAr: 'المدينة المنورة',
    locationUr: 'مدینہ منورہ',
    icon: 'route',
    difficulty: 'medium',
    keyFigures: ['Abu Bakr', 'Asma bint Abu Bakr', 'Ali'],
    references: [
      { source: 'Sahih Bukhari', hadith: '3905', topic: 'The Hijra to Medina' },
      { source: 'Sahih Muslim', hadith: '2009', topic: 'Spider at Cave Thawr' },
      { source: 'Quran', surah: 9, ayat: 40, name: 'At-Tawbah' },
    ],
    story: {
      en: {
        title: 'The Great Journey to a New Home',
        parts: [
          "The people of Mecca planned to hurt Muhammad ﷺ. Allah told him it was time to leave. His best friend Abu Bakr was so excited to go with him!",
          "They left at night and hid in a cave called Thawr. Bad people came looking for them, but Allah sent a spider to make a web over the cave entrance!",
          "A bird also made a nest at the cave entrance. When the bad people saw the web and nest, they thought 'No one is in here!' and left. Allah protected them!",
          "Abu Bakr was worried, but Muhammad ﷺ said, 'Don't be sad. Allah is with us.' They traveled through the desert for many days until they reached Medina.",
          "The people of Medina were SO happy! They sang songs to welcome Muhammad ﷺ. This journey is called the Hijra, and our Islamic calendar starts from this day!"
        ],
        moral: "When we trust in Allah and do our best, Allah protects us in amazing ways. Never lose hope - help is always near!",
      },
      ur: {
        title: 'اسلامی ریاست کی بنیاد',
        parts: [
          "جب قریش نے آپ ﷺ کو قتل کرنے کا منصوبہ بنایا تو اللہ تعالیٰ نے ہجرت کی اجازت دی (صحیح بخاری: 3905)۔",
          "حضرت ابوبکر رضی اللہ عنہ سفرِ ہجرت کے ساتھی بنے۔",
          "غارِ ثور میں پناہ لی جہاں اللہ نے معجزانہ طور پر حفاظت فرمائی۔ آپ ﷺ نے فرمایا: 'لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا' (سورۃ التوبہ: 40)۔",
          "اہلِ مدینہ نے آپ ﷺ کا بے مثال استقبال کیا۔",
          "یہ ہجرت اسلامی تقویم کی بنیاد ہے اور اسلامی ریاست کا نقطۂ آغاز (ابن ہشام)۔"
        ],
        moral: "جب ہم اللہ پر بھروسہ کریں اور اپنی بہترین کوشش کریں، اللہ حیرت انگیز طریقوں سے حفاظت کرتا ہے۔ کبھی امید نہ ہارو!",
      },
      ar: {
        title: 'الرحلة العظيمة إلى بيت جديد',
        parts: [
          "خطط أهل مكة لإيذاء محمد ﷺ. أخبره الله أن وقت الرحيل قد حان. كان صديقه أبو بكر متحمساً جداً للذهاب معه!",
          "غادروا ليلاً واختبأوا في غار ثور. جاء الأشرار يبحثون عنهم، لكن الله أرسل عنكبوتاً نسجت شبكتها على مدخل الغار!",
          "طائر أيضاً بنى عشه عند مدخل الغار. عندما رأى الأشرار الشبكة والعش، ظنوا 'لا أحد هنا!' وغادروا. حماهم الله!",
          "كان أبو بكر قلقاً، لكن محمداً ﷺ قال: 'لا تحزن. إن الله معنا.' سافروا عبر الصحراء لأيام عديدة حتى وصلوا المدينة.",
          "كان أهل المدينة سعداء جداً! غنوا أغاني ترحيب بمحمد ﷺ. هذه الرحلة تُسمى الهجرة، وتقويمنا الإسلامي يبدأ من هذا اليوم!"
        ],
        moral: "عندما نتوكل على الله ونبذل قصارى جهدنا، يحمينا الله بطرق مذهلة. لا تفقد الأمل أبداً - المساعدة دائماً قريبة!",
      },
    },
  },
  {
    id: 10,
    name: 'Building the First Mosque',
    nameAr: 'بناء المسجد النبوي',
    nameUr: 'پہلی مسجد کی تعمیر',
    year: '622 CE',
    yearHijri: 'السنة الأولى للهجرة',
    emoji: '🕌',
    color: '#059669',
    location: 'Medina',
    locationAr: 'المدينة المنورة',
    locationUr: 'مدینہ منورہ',
    icon: 'mosque',
    difficulty: 'easy',
    keyFigures: ['The Companions', 'People of Medina'],
    references: [
      { source: 'Sahih Bukhari', hadith: '428', topic: 'Building the Masjid' },
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Building Masjid an-Nabawi' },
      { source: 'Sunan an-Nasai', hadith: '702', topic: 'Merits of the Mosque' },
    ],
    story: {
      en: {
        title: 'Building Allah\'s House Together',
        parts: [
          "When Muhammad ﷺ arrived in Medina, everyone wanted him to stay at their house. But he let his camel choose! The camel stopped at a place owned by two orphan boys.",
          "Muhammad ﷺ bought the land from the boys (he always paid fairly!) and said, 'We will build a mosque here - a house for praying to Allah!'",
          "Everyone helped! Muhammad ﷺ himself carried heavy bricks and mud. He worked alongside everyone else, not sitting and watching.",
          "They sang songs while they worked: 'O Allah, the real life is the life of the Hereafter!' The work became fun because they did it together.",
          "The mosque was simple - made of mud bricks and palm leaves - but it was the most blessed place on Earth. Muslims still visit Masjid an-Nabawi today!"
        ],
        moral: "Working together for Allah is beautiful. Even the Prophet ﷺ worked hard with his own hands. No job is too small when done for Allah!",
      },
      ur: {
        title: 'مسجدِ نبوی کی بنیاد',
        parts: [
          "مدینہ منورہ پہنچنے پر آپ ﷺ کی اونٹنی جہاں بیٹھی وہ زمین مسجد کے لیے منتخب ہوئی (صحیح بخاری: 428)۔",
          "آپ ﷺ نے خود صحابہ کرام کے ساتھ اینٹیں اٹھائیں اور تعمیر میں حصہ لیا۔",
          "مسجد نبوی علم، عبادت اور مشاورت کا مرکز بنی۔",
          "یہاں صفّہ کے اصحاب رہتے تھے جو علم اور ذکرِ الٰہی میں مصروف رہتے۔",
          "یہ مسجد آج بھی مسلمانوں کا قلب ہے (ابن ہشام)۔"
        ],
        moral: "اللہ کے لیے مل کر کام کرنا خوبصورت ہے۔ نبی ﷺ نے بھی اپنے ہاتھوں سے محنت کی۔ کوئی کام چھوٹا نہیں جب اللہ کے لیے ہو!",
      },
      ar: {
        title: 'بناء بيت الله معاً',
        parts: [
          "عندما وصل محمد ﷺ إلى المدينة، أراد الجميع أن يبقى في بيوتهم. لكنه ترك ناقته تختار! توقفت الناقة في مكان يملكه يتيمان.",
          "اشترى محمد ﷺ الأرض من الصبيين (كان يدفع بعدل دائماً!) وقال: 'سنبني هنا مسجداً - بيتاً للصلاة لله!'",
          "ساعد الجميع! حمل محمد ﷺ بنفسه الطوب الثقيل والطين. عمل مع الجميع، لم يجلس ويشاهد.",
          "غنوا أغاني أثناء العمل: 'اللهم إن العيش عيش الآخرة!' أصبح العمل ممتعاً لأنهم فعلوه معاً.",
          "كان المسجد بسيطاً - من الطوب اللبن وسعف النخيل - لكنه كان أبرك مكان على الأرض. المسلمون لا يزالون يزورون المسجد النبوي اليوم!"
        ],
        moral: "العمل معاً لله جميل. حتى النبي ﷺ عمل بجد بيديه. لا عمل صغير عندما يُفعل لله!",
      },
    },
  },
  {
    id: 11,
    name: 'The Battle of Badr',
    nameAr: 'غزوة بدر',
    nameUr: 'غزوہ بدر',
    year: '624 CE',
    yearHijri: 'السنة الثانية للهجرة',
    emoji: '🛡️',
    color: '#EF4444',
    location: 'Badr',
    locationAr: 'بدر',
    locationUr: 'بدر',
    icon: 'shield',
    difficulty: 'medium',
    keyFigures: ['313 Muslim Companions', 'Angels sent by Allah'],
    surahRef: 8,
    references: [
      { source: 'Sahih Bukhari', hadith: '3952', topic: 'Battle of Badr' },
      { source: 'Sahih Muslim', hadith: '1763', topic: 'Angels at Badr' },
      { source: 'Quran', surah: 8, ayat: '9-12', name: 'Al-Anfal' },
    ],
    story: {
      en: {
        title: 'When Allah Sent His Help',
        parts: [
          "A big army from Mecca came to fight the Muslims. The Muslims only had 313 people, and Mecca had 1000! The Muslims were scared but trusted Allah.",
          "Muhammad ﷺ prayed all night, asking Allah for help. He raised his hands so much that his cloak fell off his shoulders!",
          "Allah answered! He sent thousands of angels to help the Muslims. The angels fought alongside the believers. It was a miracle!",
          "With Allah's help, the small Muslim army won against the big enemy army! Everyone was amazed at how Allah protects those who believe in Him.",
          "This battle taught us that numbers don't matter - what matters is having Allah on your side. When we trust Allah, nothing can defeat us!"
        ],
        moral: "Allah helps those who believe in Him. When we face difficulties, we should pray and trust that Allah will help us.",
      },
      ur: {
        title: 'پہلی بڑی آزمائش',
        parts: [
          "17 رمضان 2 ہجری کو 313 صحابہ نے ایک ہزار کی فوج کا مقابلہ کیا (صحیح بخاری: 3952)۔",
          "آپ ﷺ نے رات بھر دعا فرمائی، اللہ تعالیٰ نے فرشتوں سے مدد بھیجی (سورۃ الانفال: 9-12)۔",
          "یہ حق و باطل کے درمیان فیصلہ کن معرکہ تھا (یومُ الفرقان)۔",
          "صحابہ کی قربانیاں تاریخِ اسلام کا سنہری باب ہیں۔",
          "اللہ کی نصرت سے تعداد کی کمی باعثِ شکست نہ بنی۔"
        ],
        moral: "اللہ ایمان والوں کی مدد کرتا ہے۔ جب ہمیں مشکلات آئیں، ہمیں دعا کرنی چاہیے اور بھروسہ رکھنا چاہیے کہ اللہ مدد کرے گا۔",
      },
      ar: {
        title: 'عندما أرسل الله نصره',
        parts: [
          "جاء جيش كبير من مكة لمحاربة المسلمين. كان المسلمون 313 فقط، ومكة 1000! خاف المسلمون لكنهم توكلوا على الله.",
          "صلّى محمد ﷺ طوال الليل، يسأل الله المساعدة. رفع يديه كثيراً حتى سقط رداؤه عن كتفيه!",
          "أجاب الله! أرسل آلاف الملائكة لمساعدة المسلمين. قاتلت الملائكة مع المؤمنين. كانت معجزة!",
          "بمساعدة الله، انتصر الجيش المسلم الصغير على جيش العدو الكبير! اندهش الجميع كيف يحمي الله المؤمنين.",
          "علمتنا هذه المعركة أن الأعداد لا تهم - المهم أن يكون الله معك. عندما نتوكل على الله، لا شيء يهزمنا!"
        ],
        moral: "الله يساعد المؤمنين. عندما نواجه صعوبات، يجب أن ندعو ونثق بأن الله سيساعدنا.",
      },
    },
  },
  {
    id: 12,
    name: 'Treaty of Hudaybiyyah',
    nameAr: 'صلح الحديبية',
    nameUr: 'صلح حدیبیہ',
    year: '628 CE',
    yearHijri: 'السنة السادسة للهجرة',
    emoji: '📜',
    color: '#22C55E',
    location: 'Hudaybiyyah',
    locationAr: 'الحديبية',
    locationUr: 'حدیبیہ',
    icon: 'scroll',
    difficulty: 'medium',
    keyFigures: ['Uthman ibn Affan', 'Leaders of Mecca'],
    surahRef: 48,
    references: [
      { source: 'Sahih Bukhari', hadith: '2731', topic: 'Treaty of Hudaybiyyah' },
      { source: 'Sahih Muslim', hadith: '1783', topic: 'The Treaty' },
      { source: 'Quran', surah: 48, ayat: 1, name: 'Al-Fath (The Victory)' },
    ],
    story: {
      en: {
        title: 'When Peace is the Biggest Victory',
        parts: [
          "Muhammad ﷺ and 1400 Muslims wanted to visit Mecca to pray at the Kaaba. They came in peace, with no weapons for fighting.",
          "The people of Mecca wouldn't let them in. Some Muslims were angry and wanted to fight, but Muhammad ﷺ chose peace.",
          "A treaty was signed. Some parts seemed unfair, but Muhammad ﷺ agreed because he trusted Allah's plan. Some companions were upset.",
          "But guess what? Allah called this treaty 'A Clear Victory!' In the years of peace that followed, so many people became Muslim!",
          "When there's no fighting, people can talk and learn. More people accepted Islam in 2 years of peace than in 20 years before!"
        ],
        moral: "Sometimes peace, even when it seems unfair, is better than fighting. Allah's plan is always the best, even if we don't understand it right away.",
      },
      ur: {
        title: 'فتح مبین',
        parts: [
          "6 ہجری میں آپ ﷺ 1400 صحابہ کے ساتھ عمرہ کی نیت سے روانہ ہوئے (صحیح بخاری: 2731)۔",
          "قریش نے روکا تو صلح کا معاہدہ ہوا جو بظاہر مسلمانوں کے خلاف لگتا تھا۔",
          "لیکن اللہ نے اسے 'فَتْحًا مُّبِينًا' قرار دیا (سورۃ الفتح: 1)۔",
          "اس امن کے دور میں اسلام تیزی سے پھیلا۔",
          "یہ حکمتِ نبوی ﷺ کی شاندار مثال ہے (صحیح مسلم: 1783)۔"
        ],
        moral: "کبھی کبھی امن، چاہے غیر منصفانہ لگے، لڑائی سے بہتر ہے۔ اللہ کا منصوبہ ہمیشہ بہترین ہے، چاہے فوراً سمجھ نہ آئے۔",
      },
      ar: {
        title: 'عندما يكون السلام أكبر انتصار',
        parts: [
          "أراد محمد ﷺ و1400 مسلم زيارة مكة للصلاة عند الكعبة. جاءوا بسلام، بدون أسلحة للقتال.",
          "لم يسمح لهم أهل مكة بالدخول. غضب بعض المسلمين وأرادوا القتال، لكن محمداً ﷺ اختار السلام.",
          "تم توقيع معاهدة. بدت بعض الأجزاء غير عادلة، لكن محمداً ﷺ وافق لأنه توكل على خطة الله. حزن بعض الصحابة.",
          "لكن تخيلوا! سمى الله هذه المعاهدة 'فتحاً مبيناً!' في سنوات السلام التالية، أسلم كثيرون!",
          "عندما لا يكون هناك قتال، يمكن للناس التحدث والتعلم. قبل الإسلام في سنتين من السلام أكثر من 20 سنة قبلها!"
        ],
        moral: "أحياناً السلام، حتى لو بدا غير عادل، أفضل من القتال. خطة الله دائماً الأفضل، حتى لو لم نفهمها فوراً.",
      },
    },
  },
  {
    id: 13,
    name: 'Conquest of Mecca',
    nameAr: 'فتح مكة',
    nameUr: 'فتح مکہ',
    year: '630 CE',
    yearHijri: 'السنة الثامنة للهجرة',
    emoji: '🏰',
    color: '#F59E0B',
    location: 'Mecca',
    locationAr: 'مكة المكرمة',
    locationUr: 'مکہ مکرمہ',
    icon: 'flag',
    difficulty: 'easy',
    keyFigures: ['10,000 Muslim Companions', 'Abu Sufyan'],
    references: [
      { source: 'Sahih Bukhari', hadith: '4280', topic: 'Conquest of Mecca' },
      { source: 'Sahih Muslim', hadith: '1780', topic: 'Entry into Mecca' },
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Fath Makkah' },
    ],
    story: {
      en: {
        title: 'The Day of Forgiveness',
        parts: [
          "After 8 years away, Muhammad ﷺ returned to Mecca with 10,000 Muslims. But they didn't come to fight - they came in peace!",
          "The people of Mecca were scared. They had been so mean to the Muslims. What would Muhammad ﷺ do to them?",
          "Muhammad ﷺ entered Mecca with his head bowed in humbleness, thanking Allah. He didn't act proud or scary.",
          "He asked the people of Mecca: 'What do you think I will do to you?' They said, 'You are a kind brother.' And Muhammad ﷺ said, 'Go, you are all FREE! I forgive you!'",
          "Everyone was amazed! Instead of punishment, there was forgiveness. This is why this day is remembered as one of the greatest examples of mercy in history."
        ],
        moral: "Forgiveness is stronger than revenge. When Muhammad ﷺ had power, he chose kindness. We should forgive those who hurt us.",
      },
      ur: {
        title: 'عفو و درگزر کی مثال',
        parts: [
          "رمضان 8 ہجری میں دس ہزار صحابہ کے ساتھ مکہ فتح ہوا (صحیح بخاری: 4280)۔",
          "آپ ﷺ نے عاجزی سے سر جھکائے مکہ میں داخلہ فرمایا۔",
          "جن لوگوں نے برسوں ظلم کیا، ان سے فرمایا: 'اذْهَبُوا فَأَنْتُمُ الطُّلَقَاء' (جاؤ، تم آزاد ہو)۔",
          "کعبہ سے بت صاف کیے گئے اور توحید کا اعلان ہوا۔",
          "یہ عفو تاریخِ انسانیت کا بے مثال واقعہ ہے (ابن ہشام)۔"
        ],
        moral: "معافی بدلے سے زیادہ طاقتور ہے۔ جب محمد ﷺ کے پاس طاقت تھی، انہوں نے مہربانی کا راستہ چنا۔ ہمیں ان کو معاف کرنا چاہیے جنہوں نے تکلیف دی۔",
      },
      ar: {
        title: 'يوم العفو',
        parts: [
          "بعد 8 سنوات بعيداً، عاد محمد ﷺ إلى مكة مع 10,000 مسلم. لكنهم لم يأتوا للقتال - جاءوا بسلام!",
          "خاف أهل مكة. كانوا قساة جداً مع المسلمين. ماذا سيفعل بهم محمد ﷺ؟",
          "دخل محمد ﷺ مكة ورأسه منحنٍ بتواضع، شاكراً الله. لم يتصرف بكبرياء أو تخويف.",
          "سأل أهل مكة: 'ما تظنون أني فاعل بكم؟' قالوا: 'أنت أخ كريم.' فقال محمد ﷺ: 'اذهبوا فأنتم الطلقاء! عفوت عنكم!'",
          "اندهش الجميع! بدلاً من العقاب، كان هناك عفو. لهذا يُذكر هذا اليوم كواحد من أعظم أمثلة الرحمة في التاريخ."
        ],
        moral: "العفو أقوى من الانتقام. عندما امتلك محمد ﷺ القوة، اختار اللطف. يجب أن نسامح من آذونا.",
      },
    },
  },
  {
    id: 14,
    name: 'Farewell Pilgrimage',
    nameAr: 'حجة الوداع',
    nameUr: 'حجۃ الوداع',
    year: '632 CE',
    yearHijri: 'السنة العاشرة للهجرة',
    emoji: '🕋',
    color: '#1F2937',
    location: 'Mecca & Arafat',
    locationAr: 'مكة وعرفة',
    locationUr: 'مکہ اور عرفات',
    icon: 'kaaba',
    difficulty: 'medium',
    keyFigures: ['Over 100,000 Companions'],
    surahRef: 5,
    references: [
      { source: 'Sahih Muslim', hadith: '1218', topic: 'Farewell Sermon' },
      { source: 'Sahih Bukhari', hadith: '1739', topic: 'Last Pilgrimage' },
      { source: 'Quran', surah: 5, ayat: 3, name: 'Al-Maidah - Completion of Religion' },
    ],
    story: {
      en: {
        title: 'The Last Message',
        parts: [
          "In the 10th year after Hijra, Muhammad ﷺ went for Hajj. More than 100,000 Muslims joined him! It was the biggest gathering ever.",
          "On the mountain of Arafat, Muhammad ﷺ gave a very important speech. Everyone listened carefully because they felt it might be his last message.",
          "He said: 'All people are equal, like the teeth of a comb. No Arab is better than a non-Arab. The only thing that makes someone better is how good they are to Allah.'",
          "He also said: 'Be kind to each other. Take care of women. Don't hurt anyone. I am leaving you the Quran - follow it and you will never go wrong.'",
          "At the end, he looked at the sky and asked: 'O Allah, have I delivered the message?' The people shouted: 'YES!' And Muhammad ﷺ said: 'O Allah, be my witness!'"
        ],
        moral: "All humans are equal in the eyes of Allah. Being kind, honest, and following the Quran is what makes us good. These were the Prophet's final lessons for us.",
      },
      ur: {
        title: 'عالمی انسانی منشور',
        parts: [
          "10 ہجری میں آپ ﷺ نے ایک لاکھ سے زائد صحابہ کے ساتھ حج ادا فرمایا (صحیح مسلم: 1218)۔",
          "عرفات کے میدان میں خطبہ حجۃ الوداع دیا جو انسانی حقوق کا عالمگیر منشور ہے۔",
          "آپ ﷺ نے فرمایا: 'کوئی عربی کو عجمی پر فضیلت نہیں سوائے تقویٰ کے' (صحیح بخاری: 1739)۔",
          "خواتین کے حقوق، جان و مال کی حرمت، اور ربا کی ممانعت کا اعلان ہوا۔",
          "آپ ﷺ نے اللہ کو گواہ بنایا کہ پیغام پہنچا دیا گیا، اور اسی موقع پر دین کی تکمیل کی آیت نازل ہوئی (سورۃ المائدہ: 3)۔"
        ],
        moral: "اللہ کی نظر میں سب انسان برابر ہیں۔ مہربان، ایماندار ہونا اور قرآن کی پیروی کرنا ہمیں اچھا بناتا ہے۔ یہ نبی ﷺ کے آخری سبق تھے۔",
      },
      ar: {
        title: 'الرسالة الأخيرة',
        parts: [
          "في السنة العاشرة بعد الهجرة، ذهب محمد ﷺ للحج. انضم إليه أكثر من 100,000 مسلم! كان أكبر تجمع على الإطلاق.",
          "على جبل عرفة، ألقى محمد ﷺ خطبة مهمة جداً. استمع الجميع بعناية لأنهم شعروا أنها قد تكون رسالته الأخيرة.",
          "قال: 'الناس سواسية كأسنان المشط. لا فضل لعربي على أعجمي. إنما يتفاضلون بتقوى الله.'",
          "قال أيضاً: 'أحسنوا لبعضكم. اعتنوا بالنساء. لا تؤذوا أحداً. تركت فيكم القرآن - تمسكوا به ولن تضلوا أبداً.'",
          "في النهاية، نظر إلى السماء وسأل: 'اللهم هل بلغت؟' صاح الناس: 'نعم!' فقال محمد ﷺ: 'اللهم اشهد!'"
        ],
        moral: "جميع البشر متساوون في عين الله. اللطف والصدق واتباع القرآن يجعلنا صالحين. هذه كانت دروس النبي ﷺ الأخيرة لنا.",
      },
    },
  },
  {
    id: 15,
    name: 'The Prophet Passes Away',
    nameAr: 'وفاة النبي',
    nameUr: 'نبی کریم ﷺ کا وصال',
    year: '632 CE',
    yearHijri: 'السنة الحادية عشرة للهجرة',
    emoji: '🌟',
    color: '#64748B',
    location: 'Medina',
    locationAr: 'المدينة المنورة',
    locationUr: 'مدینہ منورہ',
    icon: 'heart',
    difficulty: 'easy',
    keyFigures: ['Aisha', 'Abu Bakr', 'All Companions'],
    references: [
      { source: 'Sahih Bukhari', hadith: '4449', topic: 'Final Illness and Passing' },
      { source: 'Sahih Muslim', hadith: '2444', topic: "Prophet's Last Words" },
      { source: 'Ibn Hisham', work: 'As-Sirah an-Nabawiyyah', section: 'Wafat an-Nabi' },
    ],
    story: {
      en: {
        title: 'Saying Goodbye to the Best of Creation',
        parts: [
          "After returning from the Farewell Pilgrimage, Muhammad ﷺ became ill. He was 63 years old, and his mission on Earth was almost complete.",
          "Even when he was sick, Muhammad ﷺ kept asking about his people. He loved his Ummah so much! He prayed for us until his last breath.",
          "He passed away on a Monday, with his head resting in Aisha's lap. His last words included: 'O Allah, (please grant me) the highest companionship!'",
          "The companions were heartbroken. Some couldn't believe it. But Abu Bakr said: 'Whoever worshipped Muhammad, Muhammad has died. But whoever worships Allah, Allah is Alive and never dies.'",
          "Muhammad ﷺ left us, but his teachings remain forever. The Quran and his Sunnah are our guides. He is still alive in our hearts, and we will meet him in Jannah, insha'Allah!"
        ],
        moral: "Our beloved Prophet ﷺ passed away, but his message lives forever. We should follow his beautiful example and hope to be with him in Paradise.",
      },
      ur: {
        title: 'امت کے لیے آخری لمحے',
        parts: [
          "12 ربیع الاول 11 ہجری کو آپ ﷺ نے وصال فرمایا، عمر مبارک 63 برس تھی (صحیح بخاری: 4449)۔",
          "آخری لمحات میں بھی آپ ﷺ نے امت کی فکر میں 'الصلاۃ الصلاۃ' فرمایا۔",
          "آخری کلمات تھے: 'اللَّهُمَّ الرَّفِيقَ الأَعْلَى' (صحیح مسلم: 2444)۔",
          "حضرت ابوبکر رضی اللہ عنہ نے فرمایا: 'جو محمد ﷺ کی عبادت کرتا تھا، وہ جان لے کہ محمد ﷺ فوت ہو گئے، اور جو اللہ کی عبادت کرتا ہے، اللہ حی لا یموت ہے۔'",
          "آپ ﷺ کو مسجد نبوی میں سپرد خاک کیا گیا (ابن ہشام)۔"
        ],
        moral: "ہمارے پیارے نبی ﷺ گزر گئے، لیکن ان کا پیغام ہمیشہ زندہ ہے۔ ہمیں ان کی خوبصورت مثال پر چلنا چاہیے اور جنت میں ان کے ساتھ ہونے کی امید رکھنی چاہیے۔",
      },
      ar: {
        title: 'وداع خير الخلق',
        parts: [
          "بعد العودة من حجة الوداع، مرض محمد ﷺ. كان عمره 63 سنة، ومهمته على الأرض كانت على وشك الاكتمال.",
          "حتى وهو مريض، كان محمد ﷺ يسأل عن أمته. كان يحبنا كثيراً! دعا لنا حتى آخر نفس.",
          "توفي يوم الاثنين، ورأسه في حجر عائشة. كانت كلماته الأخيرة: 'اللهم الرفيق الأعلى!'",
          "انكسرت قلوب الصحابة. بعضهم لم يصدق. لكن أبا بكر قال: 'من كان يعبد محمداً، فإن محمداً قد مات. ومن كان يعبد الله، فإن الله حي لا يموت.'",
          "رحل محمد ﷺ، لكن تعاليمه باقية للأبد. القرآن وسنته هما دليلنا. هو حي في قلوبنا، وسنلقاه في الجنة إن شاء الله!"
        ],
        moral: "رحل نبينا الحبيب ﷺ، لكن رسالته باقية للأبد. يجب أن نتبع قدوته الحسنة ونأمل أن نكون معه في الجنة.",
      },
    },
  },
  {
    id: 16,
    name: 'His Legacy Lives On',
    nameAr: 'إرثه الخالد',
    nameUr: 'ان کی وراثت ہمیشہ زندہ',
    year: 'Forever',
    yearHijri: 'للأبد',
    emoji: '💚',
    color: '#10B981',
    location: 'The Whole World',
    locationAr: 'العالم كله',
    locationUr: 'پوری دنیا',
    icon: 'globe',
    difficulty: 'easy',
    keyFigures: ['All Muslims', 'You!'],
    references: [
      { source: 'Sahih Muslim', hadith: '2278', topic: 'Following the Sunnah' },
      { source: 'Quran', surah: 33, ayat: 21, name: 'Al-Ahzab - Beautiful Example' },
      { source: 'Quran', surah: 21, ayat: 107, name: 'Al-Anbiya - Mercy to Worlds' },
    ],
    story: {
      en: {
        title: 'Following His Beautiful Example',
        parts: [
          "Today, more than 1.8 billion people around the world follow the teachings of Prophet Muhammad ﷺ. His message reached every corner of the Earth!",
          "Muslims say his name with love every day: 'Muhammad ﷺ' - and we always add prayers of peace and blessings upon him.",
          "We follow his Sunnah - the way he ate, slept, prayed, and treated others. By copying his good actions, we become better people.",
          "Five times a day, millions of Muslims pray. Every prayer is a gift that Muhammad ﷺ brought us from Allah on the Night Journey.",
          "YOU are part of his Ummah! When you are kind, honest, and love Allah, you are following in his footsteps. And one day, insha'Allah, you will meet him in Paradise!"
        ],
        moral: "Prophet Muhammad ﷺ left us the most beautiful example of how to live. By following his Sunnah, we show our love for him and for Allah.",
      },
      ur: {
        title: 'سنت کی پیروی',
        parts: [
          "آپ ﷺ نے قرآن اور سنت کی صورت میں امت کے لیے مکمل ہدایت چھوڑی (صحیح مسلم: 2278)۔",
          "اللہ تعالیٰ نے آپ ﷺ کو عالمین کے لیے رحمت بنا کر بھیجا (سورۃ الانبیاء: 107)۔",
          "آپ ﷺ ہمارے لیے اسوۂ حسنہ ہیں (سورۃ الاحزاب: 21)۔",
          "آج دنیا بھر میں 1.8 ارب سے زیادہ مسلمان آپ ﷺ کی تعلیمات پر عمل پیرا ہیں۔",
          "ہماری ذمہ داری ہے کہ ہم اس امانت کو آنے والی نسلوں تک پہنچائیں۔"
        ],
        moral: "نبی محمد ﷺ نے ہمیں زندگی گزارنے کی سب سے خوبصورت مثال دی۔ ان کی سنت پر چل کر ہم ان سے اور اللہ سے اپنی محبت ظاہر کرتے ہیں۔",
      },
      ar: {
        title: 'اتباع قدوته الحسنة',
        parts: [
          "اليوم، أكثر من 1.8 مليار شخص حول العالم يتبعون تعاليم النبي محمد ﷺ. وصلت رسالته إلى كل ركن من أركان الأرض!",
          "يذكر المسلمون اسمه بحب كل يوم: 'محمد ﷺ' - ونصلي عليه دائماً بالسلام والبركات.",
          "نتبع سنته - طريقة أكله ونومه وصلاته ومعاملته للآخرين. بتقليد أفعاله الحسنة، نصبح أشخاصاً أفضل.",
          "خمس مرات في اليوم، يصلي ملايين المسلمين. كل صلاة هدية جلبها لنا محمد ﷺ من الله في ليلة الإسراء.",
          "أنت جزء من أمته! عندما تكون لطيفاً وصادقاً وتحب الله، فأنت تسير على خطاه. ويوماً ما إن شاء الله ستلقاه في الجنة!"
        ],
        moral: "ترك لنا النبي محمد ﷺ أجمل قدوة لكيفية الحياة. باتباع سنته، نُظهر حبنا له ولله.",
      },
    },
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get Seerah event by ID
 */
export const getSeerahEventById = (eventId) => {
  return SEERAH_EVENTS.find(e => e.id === eventId);
};

/**
 * Get events by difficulty
 */
export const getEventsByDifficulty = (difficulty) => {
  return SEERAH_EVENTS.filter(e => e.difficulty === difficulty);
};

/**
 * Get events with Quran references
 */
export const getEventsWithQuranRef = () => {
  return SEERAH_EVENTS.filter(e => e.surahRef);
};

/**
 * Get story in specific language
 */
export const getStoryInLanguage = (eventId, lang = 'en') => {
  const event = getSeerahEventById(eventId);
  if (!event || !event.story) return null;
  return event.story[lang] || event.story.en;
};

/**
 * Get event name in specific language
 */
export const getEventName = (event, lang = 'en') => {
  switch (lang) {
    case 'ar': return event.nameAr;
    case 'ur': return event.nameUr;
    default: return event.name;
  }
};

/**
 * Get location in specific language
 */
export const getLocation = (event, lang = 'en') => {
  switch (lang) {
    case 'ar': return event.locationAr;
    case 'ur': return event.locationUr;
    default: return event.location;
  }
};

/**
 * Get event colors for stations
 */
export const SEERAH_STATION_COLORS = {
  easy: {
    primary: '#10B981',
    secondary: '#059669',
    glow: 'rgba(16, 185, 129, 0.5)',
    bg: 'linear-gradient(135deg, #10B981, #047857)',
  },
  medium: {
    primary: '#F59E0B',
    secondary: '#D97706',
    glow: 'rgba(245, 158, 11, 0.5)',
    bg: 'linear-gradient(135deg, #F59E0B, #B45309)',
  },
};

/**
 * Supported languages
 */
export const SEERAH_LANGUAGES = [
  { id: 'en', name: 'English', nativeName: 'English', direction: 'ltr', voiceLang: 'en-US' },
  { id: 'ur', name: 'Urdu', nativeName: 'اردو', direction: 'rtl', voiceLang: 'ur-PK' },
  { id: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl', voiceLang: 'ar-SA' },
];

// Default export
export default {
  SEERAH_EVENTS,
  getSeerahEventById,
  getEventsByDifficulty,
  getEventsWithQuranRef,
  getStoryInLanguage,
  getEventName,
  getLocation,
  SEERAH_STATION_COLORS,
  SEERAH_LANGUAGES,
};
