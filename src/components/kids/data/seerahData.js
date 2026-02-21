/**
 * Seerah (Prophet's Life) Data for Kids Mode
 * Contains key events from the life of Prophet Muhammad ﷺ
 * Multilingual bedtime stories with audio support
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
        title: 'مکہ میں ولادتِ مبارکہ',
        parts: [
          "مکہ مکرمہ کے مقدس شہر میں، خانہ کعبہ کے قریب، قریش کے ایک معزز خاندان میں۔ یہ عام الفیل تھا - جس سال اللہ نے ابرہہ کی فوج سے کعبہ کی حفاظت فرمائی۔",
          "۱۲ ربیع الاول، پیر کے دن، ایک معجزاتی واقعہ ہوا۔ سیدہ آمنہ بنت وہب کو ایک فرزند کی نعمت ملی۔ آپ ﷺ سے ایک نور نکلا جس نے پورے مکہ کو روشن کر دیا!",
          "دادا عبدالمطلب، جو قریش کے سردار تھے، بہت خوش ہوئے! انہوں نے آپ ﷺ کو کعبہ لے گئے اور نام محمد ﷺ رکھا - جس کا مطلب ہے 'جن کی تعریف کی جائے' - یہ نام پہلے عرب میں کسی کا نہ تھا۔",
          "ثویبہ، ابولہب کی آزاد کردہ باندی، کو سب سے پہلے دودھ پلانے کا شرف ملا۔ پہلے لمحے سے ہی، سب نے محسوس کیا کہ محمد ﷺ کے گرد برکتیں ہیں۔",
          "یہ مبارک ہستی یتیم پیدا ہوئے - والد عبداللہ ولادت سے پہلے وفات پا چکے تھے۔ مگر اللہ کا ایک عظیم منصوبہ تھا۔ آپ ﷺ خاتم النبیین، رحمۃ للعالمین بنے۔"
        ],
        moral: "اللہ کے فیصلے ہمیشہ بہترین ہوتے ہیں۔ مشکل میں بھی حکمت ہے۔ نبی ﷺ یتیم پیدا ہوئے مگر تمام مخلوق میں سب سے معزز بنے۔",
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
        title: 'خوبصورت صحرا میں زندگی',
        parts: [
          "جب آپ ﷺ صرف چند دن کے تھے، حلیمہ نامی ایک مہربان خاتون آپ ﷺ کو اپنی دیکھ بھال میں لے گئیں۔ وہ اپنے خاندان کے ساتھ پرسکون صحرا میں رہتی تھیں۔",
          "حلیمہ حیران رہ گئیں! جیسے ہی انہوں نے آپ ﷺ کو گود میں لیا، حیرت انگیز چیزیں ہونے لگیں۔ ان کے جانور زیادہ دودھ دینے لگے اور پودے بہتر اگنے لگے۔",
          "آپ ﷺ صحرا سے بہت محبت کرتے تھے! وہ نیلے آسمان کے نیچے رہتے، اونٹوں کو دیکھتے اور پرندوں کی آوازیں سنتے۔ ان کی رضاعی بہن شیماء ان کا خیال رکھتی تھیں۔",
          "صحرا میں، آپ ﷺ نے سب سے خوبصورت عربی بولنا سیکھی۔ صاف ہوا میں آپ ﷺ مضبوط اور صحت مند ہو گئے۔",
          "شروع سے ہی، سب نے محسوس کیا کہ محمد ﷺ کتنے خاص ہیں۔ آپ ﷺ ہمیشہ مہربان تھے، کبھی بدتمیز نہیں، اور اپنی ہر چیز دوسروں کے ساتھ بانٹتے تھے۔"
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
        title: 'سب سے زیادہ ایماندار شخص',
        parts: [
          "جیسے جیسے محمد ﷺ بڑے ہوئے، مکہ میں سب نے آپ ﷺ میں کچھ خاص دیکھا۔ آپ ﷺ نے کبھی جھوٹ نہیں بولا - ایک بار بھی نہیں!",
          "جب لوگ آپ ﷺ کو چیزیں سنبھالنے کو دیتے، آپ ﷺ ہمیشہ سب کچھ بالکل واپس کرتے۔ لوگ آپ ﷺ کو 'الامین' کہتے تھے یعنی 'امانت دار'۔",
          "جب محمد ﷺ بولتے، لوگ غور سے سنتے کیونکہ وہ جانتے تھے کہ آپ ﷺ ہمیشہ سچ بولتے ہیں۔ آپ ﷺ کو 'الصادق' کہتے تھے یعنی 'سچے'۔",
          "تاجر محمد ﷺ پر اپنے سامان کے لیے بھروسہ کرتے تھے۔ آپ ﷺ تجارت کے لیے دور جاتے اور ہمیشہ بالکل صحیح رقم لے کر واپس آتے۔",
          "سب نے، یہاں تک کہ جو لوگ بعد میں آپ ﷺ سے اتفاق نہیں کرتے تھے، مانا کہ محمد ﷺ سب سے زیادہ ایماندار شخص تھے۔ آپ ﷺ کی بات سونے جیسی تھی!"
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
        title: 'ایک خوبصورت ساتھ',
        parts: [
          "مکہ میں خدیجہ نامی ایک شاندار خاتون رہتی تھیں۔ وہ ذہین، مہربان تھیں اور تجارت کا کامیاب کاروبار چلاتی تھیں۔",
          "خدیجہ نے ایماندار محمد ﷺ کے بارے میں سنا۔ انہوں نے آپ ﷺ سے کاروبار میں مدد کی درخواست کی، اور آپ ﷺ نے بہترین کام کیا!",
          "خدیجہ محمد ﷺ کی ایمانداری اور مہربانی سے بہت متاثر ہوئیں۔ وہ ان سے شادی کرنا چاہتی تھیں۔ انہوں نے اپنی سہیلی کو پیغام بھیجا۔",
          "محمد ﷺ خوشی سے راضی ہوئے اور ان کی شادی ہو گئی۔ خدیجہ 40 سال کی تھیں اور محمد ﷺ 25 سال کے۔ وہ ایک دوسرے سے بہت محبت کرتے تھے!",
          "جب محمد ﷺ نبی بنے، خدیجہ سب سے پہلے ایمان لانے والی تھیں۔ وہ ہمیشہ ان کی سب سے بڑی حامی اور بہترین دوست رہیں۔"
        ],
        moral: "اچھی شادی اعتماد، مہربانی اور ایک دوسرے کی مدد پر بنتی ہے۔ خدیجہ نے ہمیں دکھایا کہ محبت کرنے والا ساتھی کیسے ہونا چاہیے۔",
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
        title: 'وہ رات جب قرآن کا آغاز ہوا',
        parts: [
          "محمد ﷺ اللہ کے بارے میں سوچنا پسند کرتے تھے۔ وہ پہاڑ کی چوٹی پر غار حرا میں اکیلے سوچنے جاتے تھے۔",
          "رمضان کی ایک خاص رات، کچھ حیرت انگیز ہوا! غار میں روشنی پھیل گئی اور فرشتہ جبرائیل ظاہر ہوئے!",
          "فرشتے نے کہا، 'پڑھو!' محمد ﷺ نے کہا، 'میں پڑھنا نہیں جانتا۔' فرشتے نے انہیں گلے لگایا اور پھر کہا، 'پڑھو!' یہ تین بار ہوا۔",
          "پھر جبرائیل نے محمد ﷺ کو قرآن کے پہلے الفاظ سکھائے: 'پڑھو اپنے رب کے نام سے جس نے پیدا کیا...' یہ سب سے خوبصورت الفاظ تھے!",
          "محمد ﷺ کانپ رہے تھے جب گھر آئے۔ مہربان خدیجہ نے انہیں کمبل میں لپیٹا اور کہا، 'فکر نہ کرو! اللہ تمہارے ساتھ برا نہیں ہونے دے گا کیونکہ تم بہت اچھے ہو!'"
        ],
        moral: "اللہ نے محمد ﷺ کو قرآن لانے کے لیے چنا کیونکہ وہ سب سے ایماندار اور مہربان تھے۔ ہمیں قرآن محبت سے پڑھنا اور سیکھنا چاہیے۔",
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
        title: 'اسلام کے پہلے دوست',
        parts: [
          "جب محمد ﷺ نے اللہ کا پیغام سنانا شروع کیا، کچھ بہت خاص لوگوں نے فوراً ایمان لے آئے۔ آئیں ان سے ملیں!",
          "خدیجہ، ان کی محبت کرنے والی بیوی، پہلی شخص تھیں جنہوں نے کہا 'میں ایمان لاتی ہوں!' انہوں نے ایک لمحے کے لیے بھی شک نہیں کیا۔",
          "ابوبکر محمد ﷺ کے سب سے اچھے دوست تھے۔ جب انہوں نے اسلام کے بارے میں سنا، فوراً کہا 'ہاں!' وہ ایمان لا کر بہت خوش تھے!",
          "نوجوان علی محمد ﷺ کے لیے بیٹے کی طرح تھے۔ اگرچہ وہ ابھی بچے تھے، لیکن اتنے بہادر تھے کہ ایمان لے آئے۔",
          "زید ایک آزاد کردہ غلام تھے جو محمد ﷺ سے بہت محبت کرتے تھے۔ انہوں نے بھی فوراً ایمان لے لیا۔ یہ پہلے مسلمان ہمارے ہیرو ہیں!"
        ],
        moral: "صحیح بات پر یقین کرنے کے لیے ہمت چاہیے۔ پہلے مسلمان بہادر تھے اور ہمارے لیے بہترین مثال بنے۔",
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
        title: 'مشکل وقت میں مضبوط رہنا',
        parts: [
          "سب کو اسلام کا پیغام پسند نہیں تھا۔ مکہ کے کچھ امیر لوگ مسلمانوں کے ساتھ بہت برا کرتے تھے۔ لیکن ایمان والے مضبوط رہے!",
          "بلال ایک غلام تھے جو اللہ پر ایمان رکھتے تھے۔ ان کا ظالم مالک انہیں گرم ریت پر لٹاتا، لیکن بلال کہتے 'احد! احد!' یعنی 'ایک! ایک!' - اللہ ایک ہے!",
          "سمیہ اور ان کے خاندان کو اسلام پر ایمان لانے کی وجہ سے بہت تکلیف دی گئی۔ وہ اسلام کی پہلی شہید بنیں۔ ہم ان کی بہادری یاد رکھتے ہیں!",
          "مسلمانوں کا بائیکاٹ کیا گیا - کوئی انہیں کھانا نہیں بیچتا تھا۔ وہ تین سال ایک گھاٹی میں رہے، پتے کھا کر زندہ رہے۔",
          "اتنی تکلیف کے باوجود کسی مسلمان نے ایمان نہیں چھوڑا۔ وہ جانتے تھے اللہ ان کے ساتھ ہے۔ ان کا صبر ہمیں سکھاتا ہے کہ کبھی ہار نہ مانیں!"
        ],
        moral: "جب زندگی مشکل ہو، یاد رکھو اللہ ہمیشہ ایمان والوں کے ساتھ ہے۔ صبر کرو اور پہلے مسلمانوں کی طرح مضبوط رہو۔",
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
        title: 'جادوئی رات کا سفر',
        parts: [
          "ایک رات، جب محمد ﷺ سو رہے تھے، فرشتہ جبرائیل ایک خاص مخلوق براق لے کر آئے - سفید اور بجلی کی طرح چمکدار!",
          "محمد ﷺ براق پر سوار ہو کر رات کے آسمان میں اڑتے ہوئے یروشلم گئے۔ وہاں انہوں نے تمام پہلے کے نبیوں کے ساتھ نماز پڑھی - آدم، ابراہیم، موسیٰ، عیسیٰ!",
          "پھر محمد ﷺ سات آسمانوں سے گزرے! ہر آسمان پر مختلف نبیوں سے ملے۔ سب نے کہا 'خوش آمدید، بھائی!'",
          "آخر میں، محمد ﷺ وہاں گئے جہاں کوئی مخلوق نہیں گئی تھی - اللہ سے ملنے! اللہ نے انہیں خاص تحفہ دیا: مسلمانوں کے لیے پانچ نمازیں۔",
          "جب محمد ﷺ واپس آئے، ابھی وہی رات تھی! کچھ لوگوں نے یقین نہیں کیا، لیکن ابوبکر نے کہا 'اگر محمد کہتے ہیں، تو میں مانتا ہوں!' اسی لیے ابوبکر کو صدیق کہتے ہیں۔"
        ],
        moral: "اللہ نے محمد ﷺ کو حیرت انگیز سفر سے عزت بخشی۔ پانچ نمازیں اللہ کا تحفہ ہیں - ہمیں ان کی قدر کرنی چاہیے!",
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
        title: 'نئے گھر کا عظیم سفر',
        parts: [
          "مکہ والوں نے محمد ﷺ کو نقصان پہنچانے کا منصوبہ بنایا۔ اللہ نے کہا جانے کا وقت ہے۔ ان کے بہترین دوست ابوبکر ساتھ جانے کو بہت خوش تھے!",
          "وہ رات کو نکلے اور غار ثور میں چھپ گئے۔ برے لوگ انہیں ڈھونڈنے آئے، لیکن اللہ نے مکڑی بھیجی جس نے غار کے دروازے پر جالا بنا دیا!",
          "ایک پرندے نے بھی غار کے دروازے پر گھونسلا بنایا۔ جب برے لوگوں نے جالا اور گھونسلا دیکھا، سوچا 'یہاں کوئی نہیں!' اور چلے گئے۔ اللہ نے حفاظت کی!",
          "ابوبکر پریشان تھے، لیکن محمد ﷺ نے کہا، 'غم نہ کرو۔ اللہ ہمارے ساتھ ہے۔' وہ کئی دن صحرا میں سفر کرتے رہے یہاں تک کہ مدینہ پہنچ گئے۔",
          "مدینہ والے بہت خوش تھے! انہوں نے محمد ﷺ کی آمد پر گیت گائے۔ اس سفر کو ہجرت کہتے ہیں، اور ہمارا اسلامی کیلنڈر اسی دن سے شروع ہوتا ہے!"
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
        title: 'مل کر اللہ کا گھر بنانا',
        parts: [
          "جب محمد ﷺ مدینہ آئے، سب چاہتے تھے وہ ان کے گھر رہیں۔ لیکن انہوں نے اونٹنی کو چننے دیا! اونٹنی دو یتیم بچوں کی زمین پر رکی۔",
          "محمد ﷺ نے بچوں سے زمین خریدی (وہ ہمیشہ منصفانہ قیمت دیتے تھے!) اور کہا، 'ہم یہاں مسجد بنائیں گے - اللہ کی عبادت کا گھر!'",
          "سب نے مدد کی! محمد ﷺ نے خود بھاری اینٹیں اور مٹی اٹھائی۔ وہ سب کے ساتھ کام کرتے، بیٹھ کر نہیں دیکھتے تھے۔",
          "کام کرتے ہوئے گیت گاتے: 'اے اللہ، اصل زندگی آخرت کی زندگی ہے!' مل کر کام کرنے سے مزہ آتا تھا۔",
          "مسجد سادہ تھی - مٹی کی اینٹوں اور کھجور کے پتوں سے - لیکن یہ زمین کی سب سے بابرکت جگہ تھی۔ مسلمان آج بھی مسجد نبوی جاتے ہیں!"
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
        title: 'جب اللہ نے مدد بھیجی',
        parts: [
          "مکہ سے ایک بڑی فوج مسلمانوں سے لڑنے آئی۔ مسلمان صرف 313 تھے، اور مکہ والے 1000! مسلمان ڈرے ہوئے تھے لیکن اللہ پر بھروسہ رکھتے تھے۔",
          "محمد ﷺ نے ساری رات دعا کی۔ انہوں نے اتنے ہاتھ اٹھائے کہ ان کی چادر کندھوں سے گر گئی!",
          "اللہ نے جواب دیا! اللہ نے ہزاروں فرشتے مدد کے لیے بھیجے۔ فرشتے ایمان والوں کے ساتھ لڑے۔ یہ معجزہ تھا!",
          "اللہ کی مدد سے، چھوٹی مسلم فوج نے بڑی دشمن فوج کو شکست دی! سب حیران تھے کہ اللہ ایمان والوں کی کیسے حفاظت کرتا ہے۔",
          "اس جنگ نے سکھایا کہ تعداد اہم نہیں - اہم یہ ہے کہ اللہ آپ کے ساتھ ہو۔ جب ہم اللہ پر بھروسہ کریں، کچھ ہمیں شکست نہیں دے سکتا!"
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
        title: 'جب امن سب سے بڑی جیت ہو',
        parts: [
          "محمد ﷺ اور 1400 مسلمان مکہ جا کر کعبہ میں نماز پڑھنا چاہتے تھے۔ وہ امن سے آئے، لڑائی کے ہتھیاروں کے بغیر۔",
          "مکہ والوں نے اندر نہیں آنے دیا۔ کچھ مسلمان ناراض تھے اور لڑنا چاہتے تھے، لیکن محمد ﷺ نے امن کا راستہ چنا۔",
          "ایک معاہدہ ہوا۔ کچھ باتیں غیر منصفانہ لگتی تھیں، لیکن محمد ﷺ راضی ہوئے کیونکہ انہیں اللہ کے منصوبے پر بھروسہ تھا۔",
          "لیکن جانتے ہو؟ اللہ نے اس معاہدے کو 'واضح فتح' کہا! امن کے سالوں میں بہت سے لوگ مسلمان ہو گئے!",
          "جب لڑائی نہیں ہوتی، لوگ بات کر سکتے اور سیکھ سکتے ہیں۔ 2 سال کے امن میں 20 سال سے زیادہ لوگوں نے اسلام قبول کیا!"
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
        title: 'معافی کا دن',
        parts: [
          "8 سال بعد، محمد ﷺ 10,000 مسلمانوں کے ساتھ مکہ واپس آئے۔ لیکن وہ لڑنے نہیں آئے - وہ امن سے آئے!",
          "مکہ والے ڈرے ہوئے تھے۔ انہوں نے مسلمانوں کے ساتھ بہت برا کیا تھا۔ محمد ﷺ ان کے ساتھ کیا کریں گے؟",
          "محمد ﷺ عاجزی سے سر جھکائے مکہ میں داخل ہوئے، اللہ کا شکر ادا کرتے ہوئے۔ انہوں نے مغرور یا خوفناک نہیں بنے۔",
          "انہوں نے مکہ والوں سے پوچھا: 'تم سوچتے ہو میں تمہارے ساتھ کیا کروں گا؟' انہوں نے کہا، 'آپ مہربان بھائی ہیں۔' محمد ﷺ نے کہا، 'جاؤ، تم سب آزاد ہو! میں نے معاف کیا!'",
          "سب حیران تھے! سزا کی جگہ معافی تھی۔ اسی لیے یہ دن تاریخ میں رحم کی عظیم ترین مثالوں میں سے ایک ہے۔"
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
        title: 'آخری پیغام',
        parts: [
          "ہجرت کے دسویں سال، محمد ﷺ حج کے لیے گئے۔ ایک لاکھ سے زیادہ مسلمان ساتھ تھے! یہ اب تک کا سب سے بڑا اجتماع تھا۔",
          "عرفات کے پہاڑ پر، محمد ﷺ نے بہت اہم تقریر کی۔ سب غور سے سنتے رہے کیونکہ انہیں لگا شاید یہ آخری پیغام ہے۔",
          "انہوں نے کہا: 'سب لوگ برابر ہیں، جیسے کنگھی کے دانت۔ کوئی عربی غیر عربی سے بہتر نہیں۔ صرف وہ بہتر ہے جو اللہ سے ڈرے۔'",
          "انہوں نے کہا: 'ایک دوسرے سے اچھے رہو۔ عورتوں کا خیال رکھو۔ کسی کو تکلیف نہ دو۔ میں تمہارے لیے قرآن چھوڑ رہا ہوں - اسے پکڑو اور کبھی نہیں بھٹکو گے۔'",
          "آخر میں، انہوں نے آسمان کی طرف دیکھا اور پوچھا: 'اے اللہ، کیا میں نے پیغام پہنچا دیا؟' لوگوں نے کہا: 'ہاں!' محمد ﷺ نے کہا: 'اے اللہ، گواہ رہنا!'"
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
        title: 'بہترین مخلوق کو الوداع',
        parts: [
          "حجۃ الوداع سے واپسی کے بعد، محمد ﷺ بیمار ہو گئے۔ ان کی عمر 63 سال تھی، اور زمین پر ان کا مشن تقریباً مکمل ہو چکا تھا۔",
          "بیمار ہونے کے باوجود، محمد ﷺ اپنی امت کے بارے میں پوچھتے رہتے۔ وہ اپنی امت سے بہت محبت کرتے تھے! آخری سانس تک ہمارے لیے دعا کرتے رہے۔",
          "وہ سوموار کو وفات پا گئے، ان کا سر عائشہ کی گود میں تھا۔ ان کے آخری الفاظ میں شامل تھا: 'اے اللہ، اعلیٰ رفیق!'",
          "صحابہ دل شکستہ تھے۔ کچھ یقین نہیں کر پا رہے تھے۔ لیکن ابوبکر نے کہا: 'جو محمد کی عبادت کرتا تھا، محمد فوت ہو گئے۔ جو اللہ کی عبادت کرتا ہے، اللہ زندہ ہے اور کبھی نہیں مرتا۔'",
          "محمد ﷺ ہم سے گئے، لیکن ان کی تعلیمات ہمیشہ رہیں گی۔ قرآن اور سنت ہمارے رہنما ہیں۔ وہ ہمارے دلوں میں زندہ ہیں، ہم جنت میں ان سے ملیں گے، ان شاء اللہ!"
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
        title: 'ان کی خوبصورت مثال کی پیروی',
        parts: [
          "آج، دنیا بھر میں 1.8 ارب سے زیادہ لوگ نبی محمد ﷺ کی تعلیمات پر چلتے ہیں۔ ان کا پیغام زمین کے ہر کونے تک پہنچا!",
          "مسلمان ہر روز محبت سے ان کا نام لیتے ہیں: 'محمد ﷺ' - اور ہم ہمیشہ درود و سلام بھیجتے ہیں۔",
          "ہم ان کی سنت پر چلتے ہیں - جیسے وہ کھاتے، سوتے، نماز پڑھتے، اور دوسروں سے پیش آتے تھے۔ ان کی نقل سے ہم بہتر انسان بنتے ہیں۔",
          "دن میں پانچ بار، لاکھوں مسلمان نماز پڑھتے ہیں۔ ہر نماز وہ تحفہ ہے جو محمد ﷺ معراج کی رات اللہ سے لائے۔",
          "آپ ان کی امت کا حصہ ہیں! جب آپ مہربان، ایماندار ہوتے اور اللہ سے محبت کرتے ہیں، تو آپ ان کے نقش قدم پر چل رہے ہیں۔ ایک دن، ان شاء اللہ، آپ جنت میں ان سے ملیں گے!"
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
