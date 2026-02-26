/**
 * Seerah Timeline Data - Revelation chronology & historical events
 * Trilingual cinematic narratives (English, Urdu, Arabic)
 * All events verified against: Ibn Hisham's Sirah, Ibn Kathir's Al-Bidaya,
 * Sahih Bukhari/Muslim, Ar-Raheeq Al-Makhtum (The Sealed Nectar)
 */

import { SURAHS } from './surahs';

// ============================================================================
// INTRO TEXT — Shown on the opening screen
// ============================================================================

export const INTRO_TEXT = {
  en: {
    title: 'The Revelation Journey',
    subtitle: 'Experience the 23-year story of how the Quran was revealed — from Cave Hira to the Farewell Pilgrimage.',
    purpose: 'When you know WHY each surah was revealed and the story behind every verse, your reading transforms from recitation into understanding.',
    start: 'Begin Journey',
  },
  ur: {
    title: 'سفرِ وحی',
    subtitle: 'قرآن کے نزول کی ۲۳ سالہ داستان — غارِ حرا سے حجۃ الوداع تک۔',
    purpose: 'جب آپ کو معلوم ہو کہ ہر سورت کیوں نازل ہوئی اور ہر آیت کے پیچھے کیا واقعہ ہے، تو تلاوت فہم میں بدل جاتی ہے۔',
    start: 'سفر شروع کریں',
  },
  ar: {
    title: 'رحلة الوحي',
    subtitle: 'عِش رحلة ٢٣ عامًا من نزول القرآن — من غار حراء إلى حجة الوداع.',
    purpose: 'عندما تعرف لماذا نزلت كل سورة والقصة وراء كل آية، تتحوّل تلاوتك من قراءة إلى فهم عميق.',
    start: 'ابدأ الرحلة',
  },
};

// ============================================================================
// REVELATION PERIODS - 6 distinct eras (trilingual)
// ============================================================================

export const REVELATION_PERIODS = {
  earlyMakki: {
    id: 'earlyMakki',
    name: 'Early Makkan',
    nameAr: 'المرحلة المكية المبكرة',
    nameUr: 'ابتدائی مکّی دور',
    yearRange: [610, 613],
    hijriRange: [-13, -10],
    chronOrderRange: [1, 20],
    color: '#F59E0B',
    colorLight: '#FEF3C7',
    location: 'makkah',
    description: 'Secret dawah, first Muslims. Focus on tawhid, akhirah, and short powerful surahs.',
    descriptionUr: 'خفیہ دعوت، پہلے مسلمان۔ توحید، آخرت اور مختصر طاقتور سورتوں پر توجہ۔',
    descriptionAr: 'الدعوة السرية، أوائل المسلمين. التركيز على التوحيد والآخرة والسور القصيرة القوية.',
    themes: ['Tawhid', 'Day of Judgment', 'Stories of past nations'],
  },
  middleMakki: {
    id: 'middleMakki',
    name: 'Middle Makkan',
    nameAr: 'المرحلة المكية الوسطى',
    nameUr: 'درمیانی مکّی دور',
    yearRange: [614, 618],
    hijriRange: [-9, -5],
    chronOrderRange: [21, 55],
    color: '#EF4444',
    colorLight: '#FEE2E2',
    location: 'makkah',
    description: 'Open dawah, persecution intensifies. Migration to Abyssinia. Detailed prophet stories.',
    descriptionUr: 'اعلانیہ دعوت، ظلم و ستم میں اضافہ۔ حبشہ کی طرف ہجرت۔ انبیاء کے تفصیلی قصے۔',
    descriptionAr: 'الجهر بالدعوة، اشتداد الاضطهاد. الهجرة إلى الحبشة. قصص الأنبياء المفصّلة.',
    themes: ['Prophet stories', 'Persecution response', 'Patience'],
  },
  lateMakki: {
    id: 'lateMakki',
    name: 'Late Makkan',
    nameAr: 'المرحلة المكية المتأخرة',
    nameUr: 'آخری مکّی دور',
    yearRange: [619, 622],
    hijriRange: [-4, 0],
    chronOrderRange: [56, 86],
    color: '#8B5CF6',
    colorLight: '#EDE9FE',
    location: 'makkah',
    description: 'Year of Sorrow, Isra & Mi\'raj, Pledges of Aqaba. Hope amid hardship.',
    descriptionUr: 'عام الحزن، اسراء و معراج، بیعتِ عقبہ۔ مشکلات میں امید کی کرن۔',
    descriptionAr: 'عام الحزن، الإسراء والمعراج، بيعتا العقبة. الأمل وسط المحن.',
    themes: ['Hope', 'Night Journey', 'Covenant'],
  },
  earlyMadani: {
    id: 'earlyMadani',
    name: 'Early Madinan',
    nameAr: 'المرحلة المدنية المبكرة',
    nameUr: 'ابتدائی مدنی دور',
    yearRange: [622, 625],
    hijriRange: [1, 3],
    chronOrderRange: [87, 95],
    color: '#10B981',
    colorLight: '#D1FAE5',
    location: 'madinah',
    description: 'Hijra, building the ummah, Badr, Uhud. Laws of community and warfare.',
    descriptionUr: 'ہجرت، امّت کی تعمیر، بدر، اُحد۔ معاشرے اور جنگ کے قوانین۔',
    descriptionAr: 'الهجرة، بناء الأمة، بدر، أحد. أحكام المجتمع والقتال.',
    themes: ['Community building', 'Laws', 'Battles'],
  },
  middleMadani: {
    id: 'middleMadani',
    name: 'Middle Madinan',
    nameAr: 'المرحلة المدنية الوسطى',
    nameUr: 'درمیانی مدنی دور',
    yearRange: [625, 628],
    hijriRange: [4, 6],
    chronOrderRange: [96, 105],
    color: '#06B6D4',
    colorLight: '#CFFAFE',
    location: 'madinah',
    description: 'Battle of Khandaq, Treaty of Hudaybiyah. Social laws, family matters, diplomacy.',
    descriptionUr: 'غزوۂ خندق، صلح حدیبیہ۔ معاشرتی قوانین، خاندانی معاملات، سفارت کاری۔',
    descriptionAr: 'غزوة الخندق، صلح الحديبية. الأحكام الاجتماعية، شؤون الأسرة، الدبلوماسية.',
    themes: ['Social laws', 'Diplomacy', 'Family'],
  },
  lateMadani: {
    id: 'lateMadani',
    name: 'Late Madinan',
    nameAr: 'المرحلة المدنية المتأخرة',
    nameUr: 'آخری مدنی دور',
    yearRange: [629, 632],
    hijriRange: [7, 10],
    chronOrderRange: [106, 114],
    color: '#3B82F6',
    colorLight: '#DBEAFE',
    location: 'madinah',
    description: 'Conquest of Makkah, delegations arrive, Farewell Hajj. Completion of the religion.',
    descriptionUr: 'فتح مکّہ، وفود کی آمد، حجّۃ الوداع۔ دین کی تکمیل۔',
    descriptionAr: 'فتح مكة، قدوم الوفود، حجة الوداع. إكمال الدين.',
    themes: ['Victory', 'Completion', 'Farewell'],
  },
};

// ============================================================================
// SEERAH EVENTS - 15 scenes with cinematic trilingual narratives
// All narratives based on: Sahih Bukhari, Sahih Muslim, Ibn Hisham,
// Ibn Kathir, Ar-Raheeq Al-Makhtum (The Sealed Nectar)
// ============================================================================

export const SEERAH_EVENTS = [
  {
    id: 'first-revelation',
    name: 'First Revelation',
    nameAr: 'بداية الوحي',
    nameUr: 'پہلی وحی',
    year: 610,
    hijriYear: -13,
    chronOrderApprox: 1,
    location: 'makkah',
    landmark: 'Cave Hira',
    coords: [21.4575, 39.8583],
    mapZoom: 16,
    color: '#8B5CF6',
    icon: 'BookOpen',
    description: 'Angel Jibreel revealed the first verses of Surah Al-Alaq to Prophet Muhammad ﷺ in Cave Hira.',
    relatedSurahs: [96, 68, 73, 74],
    category: 'revelation',
    mood: 'mystical',
    bgGradient: ['#1a0533', '#0f172a', '#1e1b4b'],
    narrative: {
      en: 'In the silent darkness of Cave Hira, high above Makkah, the angel Jibreel appeared to Muhammad ﷺ and commanded: "Read!" Three times he was embraced with overwhelming force, and the first words of the Quran descended upon humanity — words that would change the world forever.',
      ur: 'مکّہ کی بلندیوں پر غارِ حرا کی خاموشی میں، فرشتہ جبرائیل علیہ السلام محمد ﷺ کے سامنے نمودار ہوئے اور فرمایا: "پڑھو!" تین بار انہیں زور سے سینے سے لگایا گیا، اور قرآن کے پہلے الفاظ انسانیت پر نازل ہوئے — وہ الفاظ جنہوں نے دنیا ہمیشہ کے لیے بدل دی۔',
      ar: 'في سكون غار حراء المظلم، فوق مكة المكرمة، ظهر الملك جبريل للنبي محمد ﷺ وأمره: "اقرأ!" ثلاث مرات ضمّه ضمًّا شديدًا، ونزلت أول كلمات القرآن على البشرية — كلمات غيّرت العالم إلى الأبد.',
    },
    verse: {
      arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
      ref: '96:1',
      translation: {
        en: 'Read in the name of your Lord who created',
        ur: 'پڑھو اپنے رب کے نام سے جس نے پیدا کیا',
        ar: 'اقرأ باسم ربك الذي خلق',
      },
    },
  },
  {
    id: 'secret-dawah',
    name: 'Secret Dawah',
    nameAr: 'الدعوة السرية',
    nameUr: 'خفیہ دعوت',
    year: 610,
    hijriYear: -13,
    chronOrderApprox: 5,
    location: 'makkah',
    landmark: 'Dar al-Arqam',
    coords: [21.4225, 39.8262],
    mapZoom: 17,
    color: '#F59E0B',
    icon: 'Users',
    description: 'Three years of secret preaching. Early converts: Khadijah, Abu Bakr, Ali, Zayd ibn Harithah.',
    relatedSurahs: [96, 68, 73, 74, 1],
    category: 'dawah',
    mood: 'warm',
    bgGradient: ['#451a03', '#78350f', '#1c1917'],
    narrative: {
      en: 'For three years, the message of Islam was whispered in secret. In the house of Al-Arqam near Mount Safa, the first believers gathered — Khadijah, the beloved wife who never doubted; Abu Bakr, the loyal friend; young Ali; and Zayd, the freed slave. One by one, hearts opened to the truth.',
      ur: 'تین سال تک اسلام کا پیغام خفیہ طور پر پھیلایا گیا۔ کوہِ صفا کے قریب ارقم کے گھر میں پہلے ایمان لانے والے جمع ہوئے — خدیجہ رضی اللہ عنہا، وفادار بیوی جنہوں نے کبھی شک نہیں کیا؛ ابوبکر رضی اللہ عنہ، وفادار دوست؛ نوجوان علی رضی اللہ عنہ؛ اور زید رضی اللہ عنہ۔ ایک ایک کر کے دل سچائی کے لیے کھلتے گئے۔',
      ar: 'لثلاث سنوات، همس رسالة الإسلام سرًّا. في دار الأرقم قرب جبل الصفا، اجتمع أوائل المؤمنين — خديجة الزوجة الوفية التي لم تشكّ قط، وأبو بكر الصديق المخلص، وعلي الشاب، وزيد بن حارثة. واحدًا تلو الآخر، انفتحت القلوب للحق.',
    },
    verse: {
      arabic: 'يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ',
      ref: '74:1-2',
      translation: {
        en: 'O you who covers himself, arise and warn!',
        ur: 'اے کپڑے میں لپٹنے والے! اٹھو اور خبردار کرو',
        ar: 'يا أيها المدثر، قم فأنذر',
      },
    },
  },
  {
    id: 'open-dawah',
    name: 'Open Dawah',
    nameAr: 'الجهر بالدعوة',
    nameUr: 'اعلانیہ دعوت',
    year: 613,
    hijriYear: -10,
    chronOrderApprox: 20,
    location: 'makkah',
    landmark: 'Mount Safa',
    coords: [21.4231, 39.8263],
    mapZoom: 17,
    color: '#EF4444',
    icon: 'Megaphone',
    description: 'Prophet proclaimed Islam openly from Mount Safa. Abu Lahab cursed him — Surah Al-Masad revealed.',
    relatedSurahs: [111, 26],
    category: 'dawah',
    mood: 'fiery',
    bgGradient: ['#450a0a', '#7f1d1d', '#1c1917'],
    narrative: {
      en: 'The Prophet ﷺ climbed Mount Safa and called out to every clan of Quraysh by name. When they gathered, he asked: "If I told you an army was behind this mountain, would you believe me?" They said yes. Then he proclaimed the message of One God. His own uncle, Abu Lahab, cursed him — and Allah responded with verses that will be recited until the end of time.',
      ur: 'نبی کریم ﷺ کوہِ صفا پر چڑھے اور قریش کے ہر قبیلے کو نام لے کر پکارا۔ جب سب جمع ہوئے تو فرمایا: "اگر میں کہوں کہ اس پہاڑ کے پیچھے لشکر ہے، تو کیا مانو گے؟" سب نے ہاں کہا۔ پھر آپ ﷺ نے ایکـ خدا کا پیغام سنایا۔ آپ کے اپنے چچا ابولہب نے بد دعا دی — اور اللہ نے ایسی آیات نازل فرمائیں جو قیامت تک تلاوت ہوں گی۔',
      ar: 'صعد النبي ﷺ جبل الصفا ونادى كل بطن من قريش بأسمائهم. فلما اجتمعوا سألهم: "لو أخبرتكم أن جيشًا وراء هذا الجبل، أكنتم مصدّقيّ؟" قالوا نعم. فأعلن رسالة التوحيد. فلعنه عمّه أبو لهب — فأنزل الله آيات تُتلى إلى يوم القيامة.',
    },
    verse: {
      arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ',
      ref: '111:1',
      translation: {
        en: 'May the hands of Abu Lahab be ruined, and ruined is he',
        ur: 'ابولہب کے دونوں ہاتھ ٹوٹ جائیں اور وہ تباہ ہو جائے',
        ar: 'تبت يدا أبي لهب وتب',
      },
    },
  },
  {
    id: 'persecution',
    name: 'Persecution Begins',
    nameAr: 'اضطهاد المسلمين',
    nameUr: 'ظلم و ستم کا آغاز',
    year: 614,
    hijriYear: -9,
    chronOrderApprox: 25,
    location: 'makkah',
    coords: [21.4225, 39.8262],
    mapZoom: 16,
    color: '#DC2626',
    icon: 'AlertTriangle',
    description: 'Bilal, Ammar, and Sumayyah (first martyr in Islam) tortured. Severe persecution of vulnerable early Muslims without tribal protection.',
    relatedSurahs: [85, 16, 29],
    category: 'trial',
    mood: 'somber',
    bgGradient: ['#1c1917', '#292524', '#451a03'],
    narrative: {
      en: 'The Quraysh unleashed their fury upon the vulnerable. Bilal was dragged across burning desert sand with a boulder on his chest, yet he whispered: "Ahad, Ahad" — One, One. Sumayyah became the first martyr of Islam, killed by Abu Jahl\'s spear. Ammar was tortured alongside his parents. Yet not one of them renounced their faith.',
      ur: 'قریش نے کمزور مسلمانوں پر ظلم کی انتہا کر دی۔ بلال رضی اللہ عنہ کو جلتی ریت پر گھسیٹا جاتا، سینے پر پتھر رکھا جاتا، مگر وہ پکارتے رہے: "احد، احد" — ایک، ایک۔ سمیّہ رضی اللہ عنہا اسلام کی پہلی شہید بنیں، ابوجہل کے نیزے سے۔ عمّار رضی اللہ عنہ کو ان کے والدین کے ساتھ اذیت دی گئی۔ مگر کسی نے ایمان نہیں چھوڑا۔',
      ar: 'أطلقت قريش غضبها على المستضعفين. بلال يُسحب على رمال الصحراء الحارقة والصخرة على صدره، وهو يهمس: "أحدٌ، أحدٌ". سميّة أول شهيدة في الإسلام، قتلها أبو جهل بحربته. وعُذّب عمار مع والديه. ومع ذلك لم يرتدّ أحد منهم عن إيمانه.',
    },
    verse: {
      arabic: 'قُتِلَ أَصْحَابُ الْأُخْدُودِ ۝ النَّارِ ذَاتِ الْوَقُودِ',
      ref: '85:4-5',
      translation: {
        en: 'Destroyed were the people of the trench — the fire full of fuel',
        ur: 'مارے گئے خندق والے — بھڑکتی ہوئی آگ والے',
        ar: 'قتل أصحاب الأخدود، النار ذات الوقود',
      },
    },
  },
  {
    id: 'abyssinia-migration',
    name: 'Migration to Abyssinia',
    nameAr: 'الهجرة إلى الحبشة',
    nameUr: 'حبشہ کی طرف ہجرت',
    year: 615,
    hijriYear: -8,
    chronOrderApprox: 30,
    location: 'abyssinia',
    coords: [14.1210, 38.7469],
    mapZoom: 12,
    color: '#06B6D4',
    icon: 'Navigation',
    description: 'First migration of Muslims to the Christian kingdom of Negus (Najashi) for protection.',
    relatedSurahs: [19, 18],
    category: 'migration',
    mood: 'oceanic',
    bgGradient: ['#042f2e', '#134e4a', '#0c4a6e'],
    narrative: {
      en: 'When Makkah became unbearable, the Prophet ﷺ told his companions: "Go to Abyssinia, for there is a king who wrongs no one." They crossed the sea to the court of Najashi. When questioned, Ja\'far ibn Abi Talib recited Surah Maryam — and the Christian king wept, declaring he would never hand them over.',
      ur: 'جب مکّہ میں رہنا ناممکن ہو گیا، نبی کریم ﷺ نے صحابہ سے فرمایا: "حبشہ چلے جاؤ، وہاں ایک بادشاہ ہے جو کسی پر ظلم نہیں کرتا۔" وہ سمندر پار کر کے نجاشی کے دربار میں پہنچے۔ جب سوال ہوا تو جعفر بن ابی طالب رضی اللہ عنہ نے سورۃ مریم تلاوت کی — اور عیسائی بادشاہ رو پڑا، اور اعلان کیا کہ وہ انہیں کبھی واپس نہیں کرے گا۔',
      ar: 'لمّا ضاقت مكة على المسلمين، قال لهم النبي ﷺ: "اذهبوا إلى الحبشة، فإن فيها ملكًا لا يُظلم عنده أحد." فعبروا البحر إلى بلاط النجاشي. فلمّا سُئلوا، تلا جعفر بن أبي طالب سورة مريم — فبكى الملك المسيحي وأعلن أنه لن يسلّمهم أبدًا.',
    },
    verse: {
      arabic: 'إِنِّي أَنَا عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
      ref: '19:30',
      translation: {
        en: 'Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet',
        ur: 'بے شک میں اللہ کا بندہ ہوں، اس نے مجھے کتاب دی اور نبی بنایا',
        ar: 'إني عبد الله آتاني الكتاب وجعلني نبيًّا',
      },
    },
  },
  {
    id: 'year-of-sorrow',
    name: 'Year of Sorrow',
    nameAr: 'عام الحزن',
    nameUr: 'غم کا سال',
    year: 619,
    hijriYear: -4,
    chronOrderApprox: 58,
    location: 'makkah',
    coords: [21.4225, 39.8262],
    mapZoom: 16,
    color: '#4B5563',
    icon: 'Heart',
    description: 'Death of Khadijah (beloved wife) and Abu Talib (protector uncle) in the same year.',
    relatedSurahs: [93, 94],
    category: 'trial',
    mood: 'mournful',
    bgGradient: ['#111827', '#1f2937', '#374151'],
    narrative: {
      en: 'In a single devastating year, the Prophet ﷺ lost the two people who had supported him most — Khadijah, his beloved wife of 25 years who was the first to believe, and Abu Talib, his uncle whose protection had kept him safe. Alone and grieving, with enemies emboldened, Allah sent down words of the deepest comfort.',
      ur: 'ایک ہی تباہ کن سال میں، نبی کریم ﷺ نے ان دو ہستیوں کو کھو دیا جنہوں نے سب سے زیادہ ساتھ دیا — خدیجہ رضی اللہ عنہا، ۲۵ سال کی وفادار بیوی جو سب سے پہلے ایمان لائیں، اور ابوطالب، چچا جن کی حفاظت نے آپ ﷺ کو محفوظ رکھا۔ تنہا اور غمزدہ، دشمنوں کی جرأت بڑھی ہوئی — اللہ نے سکون کے گہرے ترین الفاظ نازل فرمائے۔',
      ar: 'في عام واحد مؤلم، فقد النبي ﷺ أعزّ شخصين إليه — خديجة زوجته الحبيبة لخمس وعشرين سنة وأول من آمن به، وأبا طالب عمّه الذي حماه طوال سنوات. وحيدًا حزينًا والأعداء قد تجرّأوا، أنزل الله كلمات العزاء العميق.',
    },
    verse: {
      arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ',
      ref: '93:3',
      translation: {
        en: 'Your Lord has not forsaken you, nor has He become displeased',
        ur: 'آپ کے رب نے آپ کو نہیں چھوڑا اور نہ ہی ناراض ہوا',
        ar: 'ما ودّعك ربك وما قلى',
      },
    },
  },
  {
    id: 'isra-miraj',
    name: "Isra' & Mi'raj",
    nameAr: 'الإسراء والمعراج',
    nameUr: 'اسراء و معراج',
    year: 621,
    hijriYear: -2,
    chronOrderApprox: 60,
    location: 'jerusalem',
    landmark: 'Masjid al-Aqsa',
    coords: [31.7761, 35.2358],
    mapZoom: 17,
    color: '#A855F7',
    icon: 'Star',
    description: 'Night Journey to Jerusalem and ascension through seven heavens. Five daily prayers ordained.',
    relatedSurahs: [17, 53],
    category: 'miracle',
    mood: 'cosmic',
    bgGradient: ['#0f0326', '#1e1b4b', '#312e81'],
    narrative: {
      en: 'On a single miraculous night, the Prophet ﷺ was carried from Makkah to Jerusalem, where he led all the prophets in prayer. Then he ascended through the seven heavens, meeting Adam, Isa, Musa, and Ibrahim, until he reached a station where even Jibreel could not follow. There, the gift of five daily prayers was given to the ummah.',
      ur: 'ایک ہی معجزانہ رات میں، نبی کریم ﷺ کو مکّہ سے بیت المقدس لے جایا گیا، جہاں آپ نے تمام انبیاء کی امامت کی۔ پھر سات آسمانوں سے گزرتے ہوئے آدم، عیسیٰ، موسیٰ اور ابراہیم علیہم السلام سے ملاقات ہوئی، یہاں تک کہ اس مقام پر پہنچے جہاں جبرائیل بھی نہیں جا سکتے تھے۔ وہاں امّت کو پانچ نمازوں کا تحفہ دیا گیا۔',
      ar: 'في ليلة واحدة معجزة، أُسري بالنبي ﷺ من مكة إلى بيت المقدس حيث أمّ جميع الأنبياء في الصلاة. ثم عُرج به عبر السماوات السبع، فلقي آدم وعيسى وموسى وإبراهيم، حتى بلغ مقامًا لم يصله حتى جبريل. هناك أُهديت لأمته الصلوات الخمس.',
    },
    verse: {
      arabic: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى',
      ref: '17:1',
      translation: {
        en: 'Exalted is He who took His servant by night from the Sacred Mosque to the Farthest Mosque',
        ur: 'پاک ہے وہ ذات جو اپنے بندے کو رات میں مسجدِ حرام سے مسجدِ اقصیٰ لے گئی',
        ar: 'سبحان الذي أسرى بعبده ليلًا من المسجد الحرام إلى المسجد الأقصى',
      },
    },
  },
  {
    id: 'pledges-aqaba',
    name: 'Pledges of Aqaba',
    nameAr: 'بيعتا العقبة',
    nameUr: 'بیعتِ عقبہ',
    year: 622,
    hijriYear: -1,
    chronOrderApprox: 85,
    location: 'mina',
    coords: [21.4133, 39.8933],
    mapZoom: 16,
    color: '#10B981',
    icon: 'Handshake',
    description: 'People of Yathrib (Madinah) pledged allegiance to the Prophet, paving the way for the Hijra.',
    relatedSurahs: [],
    category: 'covenant',
    mood: 'hopeful',
    bgGradient: ['#022c22', '#064e3b', '#14532d'],
    narrative: {
      en: 'Under the cover of night in the mountain pass of Aqaba near Mina, seventy-three men and two women from Yathrib pledged their lives to protect the Prophet ﷺ as they would protect their own families. This secret covenant under the stars opened the door to a new homeland — and changed the course of history.',
      ur: 'منیٰ کے قریب عقبہ کے پہاڑی درّے میں رات کی تاریکی میں، یثرب کے تہتّر مردوں اور دو عورتوں نے نبی کریم ﷺ کی حفاظت کا عہد کیا جیسے وہ اپنے گھر والوں کی حفاظت کرتے۔ ستاروں تلے اس خفیہ عہد نے ایک نئے وطن کا دروازہ کھول دیا — اور تاریخ کا رخ بدل دیا۔',
      ar: 'تحت جنح الليل في شعب العقبة قرب منى، بايع ثلاثة وسبعون رجلًا وامرأتان من يثرب النبيَّ ﷺ على حمايته كما يحمون أهلهم. هذا العهد السري تحت النجوم فتح باب وطن جديد — وغيّر مجرى التاريخ.',
    },
    verse: {
      arabic: 'وَأَنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُؤْمِنِينَ',
      ref: '3:171',
      translation: {
        en: 'And that Allah does not let the reward of the believers be lost',
        ur: 'اور یہ کہ اللہ مومنوں کا اجر ضائع نہیں کرتا',
        ar: 'وأنّ الله لا يضيع أجر المؤمنين',
      },
    },
  },
  {
    id: 'hijra',
    name: 'The Hijra',
    nameAr: 'الهجرة النبوية',
    nameUr: 'ہجرتِ نبوی',
    year: 622,
    hijriYear: 1,
    chronOrderApprox: 87,
    location: 'madinah',
    landmark: 'Cave Thawr → Madinah',
    coords: [24.4672, 39.6111],
    mapZoom: 14,
    color: '#10B981',
    icon: 'Route',
    description: 'The great migration from Makkah to Madinah. Start of Islamic calendar. Abu Bakr as companion.',
    relatedSurahs: [9, 8],
    category: 'migration',
    isMajorDivider: true,
    mood: 'dawn',
    bgGradient: ['#022c22', '#065f46', '#134e4a'],
    narrative: {
      en: 'With assassins surrounding his home, the Prophet ﷺ slipped away into the night with Abu Bakr. They hid in Cave Thawr for three days while search parties passed within feet of them. A spider spun its web across the entrance, and a dove nested at its mouth. "Do not grieve," the Prophet whispered, "indeed Allah is with us." This migration began a new era — the Islamic calendar itself starts from this moment.',
      ur: 'جب قاتل آپ ﷺ کے گھر کو گھیرے ہوئے تھے، آپ ﷺ ابوبکر رضی اللہ عنہ کے ساتھ رات کی تاریکی میں نکل پڑے۔ غارِ ثور میں تین دن چھپے رہے جبکہ تلاش کرنے والے قدموں کے فاصلے سے گزرتے رہے۔ ایک مکڑی نے غار کے دہانے پر جالا تن دیا، اور ایک فاختہ نے گھونسلا بنا لیا۔ "غم نہ کرو،" نبی ﷺ نے فرمایا، "بے شک اللہ ہمارے ساتھ ہے۔" اس ہجرت نے ایک نیا دور شروع کیا — اسلامی کیلنڈر اسی لمحے سے شروع ہوتا ہے۔',
      ar: 'والقتلة تحاصر بيته، انسلّ النبي ﷺ في جنح الليل مع أبي بكر. اختبآ في غار ثور ثلاثة أيام والمطاردون يمرّون على بُعد أقدام منهما. نسجت عنكبوت خيوطها على مدخل الغار، وعششت حمامة عند بابه. "لا تحزن إن الله معنا"، همس النبي ﷺ. هذه الهجرة بدأت حقبة جديدة — التقويم الإسلامي نفسه يبدأ من هذه اللحظة.',
    },
    verse: {
      arabic: 'لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
      ref: '9:40',
      translation: {
        en: 'Do not grieve, indeed Allah is with us',
        ur: 'غم نہ کرو، بے شک اللہ ہمارے ساتھ ہے',
        ar: 'لا تحزن إن الله معنا',
      },
    },
  },
  {
    id: 'battle-badr',
    name: 'Battle of Badr',
    nameAr: 'غزوة بدر',
    nameUr: 'غزوۂ بدر',
    year: 624,
    hijriYear: 2,
    chronOrderApprox: 89,
    location: 'badr',
    coords: [23.7833, 38.7833],
    mapZoom: 15,
    color: '#DC2626',
    icon: 'Zap',
    description: '313 Muslims vs 1000 Quraysh. Decisive Muslim victory with angelic support. "Day of Criterion."',
    relatedSurahs: [8, 3],
    category: 'battle',
    mood: 'intense',
    bgGradient: ['#450a0a', '#7f1d1d', '#1c1917'],
    narrative: {
      en: 'Three hundred and thirteen believers — ill-equipped, outnumbered three to one — stood their ground at the wells of Badr against the might of Quraysh. The Prophet ﷺ raised his hands in prayer until his cloak fell from his shoulders. Allah sent a thousand angels in ranks. By sunset, the impossible had happened — the truth had prevailed. The Quran calls it "Yawm al-Furqan" — the Day of Criterion.',
      ur: 'تین سو تیرہ مومنین — کم سازوسامان، تعداد میں ایک تہائی — بدر کے کنوؤں پر قریش کی طاقت کے سامنے ڈٹ گئے۔ نبی کریم ﷺ نے ہاتھ اٹھا کر دعا کی یہاں تک کہ چادر کندھوں سے گر گئی۔ اللہ نے ایک ہزار فرشتے صف بہ صف بھیجے۔ غروبِ آفتاب تک ناممکن ہو چکا تھا — حق غالب آ گیا۔ قرآن اسے "یوم الفرقان" کہتا ہے — فیصلے کا دن۔',
      ar: 'ثلاثمئة وثلاثة عشر مؤمنًا — قليلو العتاد، يفوقهم العدد ثلاثة أضعاف — ثبتوا عند آبار بدر أمام جبروت قريش. رفع النبي ﷺ يديه يدعو حتى سقط رداؤه عن كتفيه. فأنزل الله ألف ملك مردفين. وعند الغروب، تحقّق المستحيل — انتصر الحق. سمّاه القرآن "يوم الفرقان".',
    },
    verse: {
      arabic: 'فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ',
      ref: '8:17',
      translation: {
        en: 'You did not kill them, but it was Allah who killed them',
        ur: 'تم نے انہیں قتل نہیں کیا بلکہ اللہ نے انہیں قتل کیا',
        ar: 'فلم تقتلوهم ولكنّ الله قتلهم',
      },
    },
  },
  {
    id: 'battle-uhud',
    name: 'Battle of Uhud',
    nameAr: 'غزوة أحد',
    nameUr: 'غزوۂ اُحد',
    year: 625,
    hijriYear: 3,
    chronOrderApprox: 91,
    location: 'uhud',
    coords: [24.5008, 39.6142],
    mapZoom: 16,
    color: '#F97316',
    icon: 'Mountain',
    description: '700 vs 3000. Initial victory lost when archers left posts. Hamza martyred. Lesson in obedience.',
    relatedSurahs: [3],
    category: 'battle',
    mood: 'warning',
    bgGradient: ['#431407', '#7c2d12', '#1c1917'],
    narrative: {
      en: 'Victory was in their hands — until the archers abandoned their posts on the mountain, lured by the spoils of war. The tide turned in an instant. Hamza, the Lion of Allah, fell as a martyr. The Prophet ﷺ himself was wounded, his helmet shattered, blood running down his face. Yet even in defeat, Allah revealed lessons that would guide the ummah forever: obedience and trust in divine wisdom.',
      ur: 'فتح ان کے ہاتھ میں تھی — یہاں تک کہ تیر اندازوں نے مالِ غنیمت کی لالچ میں پہاڑ پر اپنی جگہ چھوڑ دی۔ پلک جھپکتے میں پانسہ پلٹ گیا۔ حمزہ رضی اللہ عنہ، اللہ کے شیر، شہید ہو گئے۔ خود نبی کریم ﷺ زخمی ہوئے، خود ٹوٹ گیا، چہرے سے خون بہنے لگا۔ مگر شکست میں بھی اللہ نے ایسے سبق نازل فرمائے جو ہمیشہ کے لیے امّت کی رہنمائی کریں گے: اطاعت اور اللہ کی حکمت پر بھروسہ۔',
      ar: 'كان النصر في أيديهم — حتى ترك الرماة مواقعهم على الجبل طمعًا في الغنائم. انقلبت الموازين في لحظة. استُشهد حمزة أسد الله. وجُرح النبي ﷺ نفسه، تحطّمت خوذته، والدم يسيل على وجهه. ومع ذلك، حتى في الهزيمة، أنزل الله دروسًا تهدي الأمة إلى الأبد: الطاعة والثقة بالحكمة الإلهية.',
    },
    verse: {
      arabic: 'وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',
      ref: '3:140',
      translation: {
        en: 'And these days of varying fortunes, We alternate among the people',
        ur: 'اور یہ دن ہیں جو ہم لوگوں کے درمیان بدلتے رہتے ہیں',
        ar: 'وتلك الأيام نداولها بين الناس',
      },
    },
  },
  {
    id: 'battle-khandaq',
    name: 'Battle of the Trench',
    nameAr: 'غزوة الخندق',
    nameUr: 'غزوۂ خندق',
    year: 627,
    hijriYear: 5,
    chronOrderApprox: 97,
    location: 'madinah',
    coords: [24.4672, 39.6111],
    mapZoom: 16,
    color: '#7C3AED',
    icon: 'Shield',
    description: '10,000 confederates besieged Madinah. Trench strategy by Salman al-Farsi. Won without major battle.',
    relatedSurahs: [33],
    category: 'battle',
    mood: 'siege',
    bgGradient: ['#1e1b4b', '#312e81', '#0f172a'],
    narrative: {
      en: 'Ten thousand soldiers from every hostile tribe marched on Madinah — the largest army Arabia had ever assembled. Salman al-Farsi, the Persian companion, proposed an idea never before seen in Arabia: dig a trench. For weeks, the believers dug in freezing cold, starving, as enemies waited on the other side. Then Allah sent a fierce wind that scattered their camps. They retreated. Not a single sword was raised — yet the siege was broken by faith and strategy.',
      ur: 'ہر دشمن قبیلے کے دس ہزار سپاہی مدینہ پر چڑھ آئے — عرب کی تاریخ کا سب سے بڑا لشکر۔ فارسی صحابی سلمان فارسی رضی اللہ عنہ نے ایسی تجویز دی جو عرب میں پہلے کبھی نہیں دیکھی گئی: خندق کھودو۔ ہفتوں تک مومنین نے سخت سردی میں بھوکے پیاسے خندق کھودی، جبکہ دشمن دوسری طرف منتظر تھے۔ پھر اللہ نے ایسی تیز آندھی بھیجی جس نے ان کے خیمے اکھاڑ دیے۔ وہ پیچھے ہٹ گئے۔ ایک تلوار نہیں اٹھائی گئی — مگر ایمان اور حکمتِ عملی نے محاصرہ توڑ دیا۔',
      ar: 'عشرة آلاف مقاتل من كل قبيلة معادية زحفوا على المدينة — أكبر جيش حشدته الجزيرة العربية. سلمان الفارسي، الصحابي الفارسي، اقترح فكرة لم تُعرف في جزيرة العرب: حفر خندق. لأسابيع، حفر المؤمنون في البرد القارس جائعين، والأعداء ينتظرون. ثم أرسل الله ريحًا عاصفة بعثرت معسكراتهم. فانسحبوا. لم تُرفع سيف واحد — لكن الإيمان والتدبير كسرا الحصار.',
    },
    verse: {
      arabic: 'إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ',
      ref: '33:10',
      translation: {
        en: 'When they came at you from above and below, and when eyes shifted and hearts reached throats',
        ur: 'جب وہ تم پر اوپر سے اور نیچے سے آئے اور جب آنکھیں پتھرا گئیں اور کلیجے منہ کو آ گئے',
        ar: 'إذ جاءوكم من فوقكم ومن أسفل منكم وإذ زاغت الأبصار وبلغت القلوب الحناجر',
      },
    },
  },
  {
    id: 'hudaybiyah',
    name: 'Treaty of Hudaybiyah',
    nameAr: 'صلح الحديبية',
    nameUr: 'صلح حدیبیہ',
    year: 628,
    hijriYear: 6,
    chronOrderApprox: 103,
    location: 'hudaybiyah',
    coords: [21.4411, 39.6089],
    mapZoom: 15,
    color: '#06B6D4',
    icon: 'Handshake',
    description: 'Peace treaty the Quran called a "manifest victory." Islam spread rapidly during the peace.',
    relatedSurahs: [48],
    category: 'treaty',
    mood: 'diplomatic',
    bgGradient: ['#042f2e', '#155e75', '#0c4a6e'],
    narrative: {
      en: 'The companions were shocked — the treaty terms seemed unfair, even humiliating. They had come to perform Umrah but were turned away. Yet on the journey home, Allah revealed something unexpected: "Indeed, We have given you a clear victory." The peace that followed allowed Islam to spread faster than any battle could achieve. Within two years, the number of Muslims multiplied tenfold.',
      ur: 'صحابہ حیران تھے — معاہدے کی شرائط ناانصاف، حتیٰ کہ ذلت آمیز لگ رہی تھیں۔ وہ عمرہ کرنے آئے تھے مگر واپس کر دیے گئے۔ لیکن واپسی کے سفر میں اللہ نے ایک غیرمتوقع بات نازل فرمائی: "بے شک ہم نے تمہیں کھلی فتح عطا کر دی۔" اس کے بعد آنے والے امن نے اسلام کو اتنی تیزی سے پھیلایا جتنا کوئی جنگ نہیں کر سکتی تھی۔ دو سال کے اندر مسلمانوں کی تعداد دس گنا ہو گئی۔',
      ar: 'صُدم الصحابة — بدت شروط المعاهدة مجحفة بل مذلّة. جاءوا للعمرة فصُدّوا. لكن في طريق العودة، أنزل الله ما لم يتوقعوه: "إنا فتحنا لك فتحًا مبينًا." السلام الذي تلا المعاهدة نشر الإسلام أسرع مما تحققه أي معركة. خلال سنتين، تضاعف عدد المسلمين عشرة أضعاف.',
    },
    verse: {
      arabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا',
      ref: '48:1',
      translation: {
        en: 'Indeed, We have given you a clear victory',
        ur: 'بے شک ہم نے آپ کو کھلی فتح عطا کر دی',
        ar: 'إنا فتحنا لك فتحًا مبينًا',
      },
    },
  },
  {
    id: 'conquest-makkah',
    name: 'Conquest of Makkah',
    nameAr: 'فتح مكة',
    nameUr: 'فتحِ مکّہ',
    year: 630,
    hijriYear: 8,
    chronOrderApprox: 110,
    location: 'makkah',
    landmark: 'Kaaba',
    coords: [21.4225, 39.8262],
    mapZoom: 17,
    color: '#F59E0B',
    icon: 'Trophy',
    description: '10,000 Muslims entered Makkah peacefully. Idols destroyed. General amnesty declared.',
    relatedSurahs: [110, 48],
    category: 'victory',
    mood: 'triumphant',
    bgGradient: ['#451a03', '#78350f', '#92400e'],
    narrative: {
      en: 'Eight years after being driven out as a refugee, the Prophet ﷺ returned to Makkah at the head of ten thousand believers. He entered with his head bowed so low it nearly touched his camel. There was no revenge, no bloodshed. He declared general amnesty: "Go, you are free." One by one, 360 idols around the Kaaba were destroyed as he recited: "Truth has come, and falsehood has vanished."',
      ur: 'آٹھ سال پہلے مہاجر بنا کر نکالے جانے کے بعد، نبی کریم ﷺ دس ہزار مومنین کی سربراہی میں مکّہ واپس آئے۔ آپ ﷺ کا سر اتنا جھکا ہوا تھا کہ اونٹنی کی گردن سے مس ہو رہا تھا۔ نہ انتقام تھا، نہ خونریزی۔ آپ نے عام معافی کا اعلان کیا: "جاؤ، تم سب آزاد ہو۔" ایک ایک کر کے کعبہ کے ارد گرد ۳۶۰ بت توڑے گئے جبکہ آپ تلاوت فرما رہے تھے: "حق آ گیا اور باطل مٹ گیا۔"',
      ar: 'بعد ثمان سنوات من خروجه مهاجرًا، عاد النبي ﷺ إلى مكة على رأس عشرة آلاف مؤمن. دخلها مطأطئ الرأس حتى كاد يمسّ عنق ناقته. لا انتقام، لا سفك دماء. أعلن العفو العام: "اذهبوا فأنتم الطلقاء." وحُطّمت ٣٦٠ صنمًا حول الكعبة واحدًا تلو الآخر وهو يتلو: "جاء الحق وزهق الباطل."',
    },
    verse: {
      arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
      ref: '110:1',
      translation: {
        en: 'When the victory of Allah has come and the conquest',
        ur: 'جب اللہ کی مدد آ جائے اور فتح ہو جائے',
        ar: 'إذا جاء نصر الله والفتح',
      },
    },
  },
  {
    id: 'farewell-pilgrimage',
    name: 'Farewell Pilgrimage',
    nameAr: 'حجة الوداع',
    nameUr: 'حجّۃ الوداع',
    year: 632,
    hijriYear: 10,
    chronOrderApprox: 114,
    location: 'arafat',
    landmark: 'Mount Arafat',
    coords: [21.3549, 39.9842],
    mapZoom: 16,
    color: '#EC4899',
    icon: 'Compass',
    description: '"Today I have perfected your religion for you." The final public address of the Prophet ﷺ.',
    relatedSurahs: [5, 110],
    category: 'pilgrimage',
    mood: 'farewell',
    bgGradient: ['#500724', '#831843', '#4a044e'],
    narrative: {
      en: 'On the plain of Arafat, over one hundred thousand pilgrims stood in white. The Prophet ﷺ delivered his final sermon: "O people, your Lord is One and your father is one. No Arab has superiority over a non-Arab." Then came the most momentous verse: "Today I have perfected your religion for you, completed My favor upon you, and chosen Islam as your way of life." The revelation journey — 23 years of divine guidance — was complete.',
      ur: 'عرفات کے میدان میں ایک لاکھ سے زائد حاجی سفید لباس میں کھڑے تھے۔ نبی کریم ﷺ نے اپنا آخری خطبہ دیا: "لوگو! تمہارا رب ایک ہے اور تمہارا باپ ایک ہے۔ کسی عربی کو عجمی پر کوئی فضیلت نہیں۔" پھر سب سے اہم آیت نازل ہوئی: "آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا، تم پر اپنی نعمت پوری کر دی، اور تمہارے لیے اسلام کو دین کے طور پر پسند کر لیا۔" وحی کا سفر — ۲۳ سال کی الٰہی رہنمائی — مکمل ہو گیا۔',
      ar: 'في سهل عرفات، وقف أكثر من مئة ألف حاجّ في ثياب بيضاء. ألقى النبي ﷺ خطبته الأخيرة: "أيها الناس، إن ربكم واحد وإن أباكم واحد. لا فضل لعربي على أعجمي." ثم نزلت أعظم آية: "اليوم أكملتُ لكم دينكم وأتممتُ عليكم نعمتي ورضيتُ لكم الإسلام دينًا." رحلة الوحي — ثلاث وعشرون سنة من الهداية الإلهية — اكتملت.',
    },
    verse: {
      arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
      ref: '5:3',
      translation: {
        en: 'Today I have perfected your religion for you, completed My favor upon you, and chosen Islam as your way of life',
        ur: 'آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا اور تم پر اپنی نعمت پوری کر دی اور تمہارے لیے اسلام کو دین پسند کر لیا',
        ar: 'اليوم أكملتُ لكم دينكم وأتممتُ عليكم نعمتي ورضيتُ لكم الإسلام دينًا',
      },
    },
  },

  // ==========================================================================
  // POST-REVELATION: COMPILATION OF THE QURAN INTO BOOK FORM
  // ==========================================================================

  {
    id: 'abu-bakr-compilation',
    name: 'The First Compilation',
    nameAr: 'جمع القرآن في عهد أبي بكر',
    nameUr: 'حضرت ابوبکرؓ کا جمعِ قرآن',
    year: 632,
    hijriYear: 11,
    chronOrderApprox: 115,
    location: 'madinah',
    landmark: 'Masjid al-Nabawi',
    coords: [24.4672, 39.6111],
    mapZoom: 17,
    color: '#22D3EE',
    icon: 'BookOpen',
    description: 'After the Battle of Yamama, Abu Bakr RA ordered the first complete written compilation of the Quran.',
    relatedSurahs: [15, 75],
    category: 'compilation',
    mood: 'solemn',
    bgGradient: ['#0c1a2e', '#1e3a5f', '#0a2540'],
    sources: {
      en: 'Sahih al-Bukhari 4986 — Narrated by Zaid ibn Thabit: "Abu Bakr sent for me after the casualties of Yamama... Umar was with him. Abu Bakr said: Umar has come to me and said, the casualties among Huffaz on the day of Yamama were heavy. I fear more may fall. I suggest you order the collection of the Quran."',
      ur: 'صحیح البخاری ۴۹۸۶ — زید بن ثابتؓ سے روایت: "جنگِ یمامہ کے بعد ابوبکرؓ نے مجھے بلایا... عمرؓ ان کے ساتھ تھے۔ ابوبکرؓ نے فرمایا: عمر میرے پاس آئے اور کہا کہ یمامہ میں حفاظ کی شہادت بہت زیادہ ہے، مجھے خدشہ ہے مزید شہید ہوں گے۔ میرا مشورہ ہے کہ قرآن جمع کرنے کا حکم دیں۔"',
      ar: 'صحيح البخاري ٤٩٨٦ — عن زيد بن ثابت قال: "أرسل إليّ أبو بكر بعد مقتلة أهل اليمامة... وعنده عمر. قال أبو بكر: إن عمر أتاني فقال: إن القتل قد استحرّ بيوم اليمامة بالقرّاء، وإني أخشى أن يستحرّ القتل بالقرّاء بالمواطن، فيذهب كثير من القرآن. وإني أرى أن تأمر بجمع القرآن."',
    },
    narrative: {
      en: 'The Prophet ﷺ had passed away, and the Quran lived in the hearts of the Huffaz and on scattered materials — palm stalks, flat stones, leather, shoulder bones. Then came the Battle of Yamama (632 CE), where scores of Quran memorizers were martyred in a single day. Umar ibn al-Khattab, shaken, rushed to Caliph Abu Bakr: "I fear the Quran may be lost if more reciters fall in battle." Abu Bakr hesitated — "How can I do what the Prophet ﷺ did not?" — but Allah opened his heart to the task. He appointed Zaid ibn Thabit, the Prophet\'s own scribe, to lead the most important literary project in human history. Zaid set a rigorous standard: every verse required two independent sources — a written record AND a living memorizer. He gathered from every companion who possessed written fragments. The result was the first complete written Mushaf — the "Suhuf" — kept with Abu Bakr, then Umar, then entrusted to Hafsa bint Umar.',
      ur: 'نبی کریم ﷺ کا وصال ہو چکا تھا، اور قرآن حافظوں کے سینوں اور بکھری ہوئی چیزوں — کھجور کی شاخوں، چپٹے پتھروں، چمڑے، اور شانے کی ہڈیوں پر محفوظ تھا۔ پھر جنگِ یمامہ (۶۳۲ عیسوی) ہوئی، جہاں ایک ہی دن میں بے شمار حُفّاظ شہید ہو گئے۔ حضرت عمرؓ گھبرا کر خلیفہ ابوبکرؓ کے پاس آئے: "مجھے خدشہ ہے کہ اگر مزید قُرّاء جنگ میں شہید ہوئے تو قرآن ضائع ہو جائے گا۔" ابوبکرؓ نے تردّد کیا — "میں وہ کام کیسے کروں جو نبی ﷺ نے نہیں کیا؟" — لیکن اللہ نے ان کا سینہ اس کام کے لیے کھول دیا۔ انہوں نے زید بن ثابتؓ کو مقرر کیا، جو نبی ﷺ کے ذاتی کاتبِ وحی تھے، تاکہ وہ انسانی تاریخ کے سب سے اہم تحریری منصوبے کی سربراہی کریں۔ زیدؓ نے سخت معیار مقرر کیا: ہر آیت کے لیے دو آزاد ذرائع درکار تھے — ایک تحریری ریکارڈ اور ایک زندہ حافظ۔ انہوں نے ہر صحابی سے جمع کیا جن کے پاس تحریری ٹکڑے تھے۔ نتیجہ پہلا مکمل تحریری مُصحف تھا — "صُحُف" — جو ابوبکرؓ کے پاس رہا، پھر عمرؓ کے پاس، اور پھر حفصہ بنت عمرؓ کی امانت میں دیا گیا۔',
      ar: 'انتقل النبي ﷺ إلى الرفيق الأعلى، وكان القرآن محفوظًا في صدور الحُفّاظ وعلى مواد متفرقة — جريد النخل، والرقاع، والأكتاف، واللخاف. ثم جاءت معركة اليمامة (٦٣٢م)، حيث استُشهد عدد كبير من حُفّاظ القرآن في يوم واحد. هُرع عمر بن الخطاب مذعورًا إلى الخليفة أبي بكر: "إني أخشى أن يستحرّ القتل بالقرّاء فيذهب كثير من القرآن." تردّد أبو بكر — "كيف أفعل ما لم يفعله رسول الله ﷺ؟" — لكن الله شرح صدره لذلك. فكلّف زيد بن ثابت، كاتب الوحي، بقيادة أعظم مشروع توثيقي في تاريخ البشرية. وضع زيد معيارًا صارمًا: كل آية تحتاج مصدرين مستقلين — سجل مكتوب وحافظ حيّ. جمع من كل صحابي يملك شيئًا مكتوبًا. فكانت النتيجة أول مصحف مكتوب كامل — "الصُّحُف" — حُفظت عند أبي بكر، ثم عمر، ثم أُودعت أمانةً عند حفصة بنت عمر.',
    },
    verse: {
      arabic: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
      ref: '15:9',
      translation: {
        en: 'Indeed, it is We who sent down the Reminder, and indeed, We will be its Guardian',
        ur: 'بے شک ہم نے ہی اس ذکر (قرآن) کو اتارا ہے اور ہم ہی اس کے محافظ ہیں',
        ar: 'إنّا نحن نزّلنا الذكر وإنّا له لحافظون',
      },
    },
  },
  {
    id: 'uthman-standardization',
    name: 'The Uthmani Mushaf',
    nameAr: 'المصحف العثماني',
    nameUr: 'مصحفِ عثمانی',
    year: 650,
    hijriYear: 30,
    chronOrderApprox: 116,
    location: 'madinah',
    landmark: 'Masjid al-Nabawi',
    coords: [24.4672, 39.6111],
    mapZoom: 17,
    color: '#F59E0B',
    icon: 'Star',
    description: 'Caliph Uthman standardized the Quran into one official Mushaf and sent copies to every major city.',
    relatedSurahs: [54, 87],
    category: 'compilation',
    mood: 'golden',
    bgGradient: ['#1a1005', '#3d2b08', '#1a150a'],
    sources: {
      en: 'Sahih al-Bukhari 4987 — Narrated by Anas ibn Malik: "Hudhayfah ibn al-Yaman came to Uthman while the people of Sham and Iraq were waging war to conquer Armenia and Azerbaijan. Hudhayfah was afraid of their differences in recitation. He said to Uthman: O Commander of the Faithful! Save this Ummah before they differ about the Book."',
      ur: 'صحیح البخاری ۴۹۸۷ — انس بن مالکؓ سے روایت: "حذیفہ بن الیمان عثمانؓ کے پاس آئے جبکہ شام اور عراق کے لوگ آرمینیا اور آذربائیجان فتح کرنے میں مصروف تھے۔ حذیفہ ان کے تلاوت کے اختلاف سے خوفزدہ تھے۔ انہوں نے عثمانؓ سے کہا: اے امیر المومنین! اس اُمّت کو بچائیں اس سے پہلے کہ یہ کتاب میں اختلاف کریں۔"',
      ar: 'صحيح البخاري ٤٩٨٧ — عن أنس بن مالك: "أن حذيفة بن اليمان قدم على عثمان وكان يُغازي أهل الشام في فتح أرمينية وأذربيجان مع أهل العراق. فأفزع حذيفة اختلافهم في القراءة. فقال حذيفة لعثمان: يا أمير المؤمنين أدرك هذه الأمة قبل أن يختلفوا في الكتاب."',
    },
    narrative: {
      en: 'As Islam spread across vast lands — from Persia to North Africa — a crisis emerged. Hudhayfah ibn al-Yaman returned from the frontlines of Armenia and Azerbaijan, alarmed: "O Commander of the Faithful! Save this Ummah before they differ about their Book like the Jews and Christians!" Muslims from different regions were reciting in different dialects, and arguments had erupted. Caliph Uthman ibn Affan acted decisively. He formed a committee of four master scholars led again by Zaid ibn Thabit, alongside Abdullah ibn al-Zubayr, Sa\'id ibn al-\'As, and Abdul-Rahman ibn Harith. They retrieved Hafsa\'s Suhuf — the original compilation — and produced multiple identical copies in the Qurayshi dialect, the dialect in which the Quran was revealed. Official copies were sent to Makkah, Madinah, Kufa, Basra, and Damascus. Every other personal manuscript was ordered burned to prevent future confusion. This was the Mushaf al-Uthmani — the exact same text that 1.8 billion Muslims read today, letter for letter, unchanged in over 1,370 years.',
      ur: 'جیسے جیسے اسلام وسیع علاقوں میں پھیلا — فارس سے شمالی افریقہ تک — ایک بحران پیدا ہوا۔ حذیفہ بن الیمانؓ آرمینیا اور آذربائیجان کے محاذ سے گھبرائے ہوئے لوٹے: "اے امیر المومنین! اس اُمّت کو بچائیں اس سے پہلے کہ یہ اپنی کتاب میں ایسے اختلاف کریں جیسے یہود و نصاریٰ نے کیا!" مختلف علاقوں کے مسلمان مختلف لہجوں میں تلاوت کر رہے تھے اور بحث و مباحثہ شروع ہو چکا تھا۔ خلیفہ عثمان بن عفانؓ نے فیصلہ کُن اقدام کیا۔ انہوں نے چار ماہر علماء کی کمیٹی بنائی جس کی سربراہی دوبارہ زید بن ثابتؓ نے کی، ساتھ عبداللہ بن زبیرؓ، سعید بن العاصؓ، اور عبدالرحمٰن بن حارثؓ تھے۔ انہوں نے حفصہؓ کے صحف — اصل تدوین — حاصل کیے اور قریشی لہجے میں متعدد ایک جیسی نقلیں تیار کیں، وہی لہجہ جس میں قرآن نازل ہوا تھا۔ سرکاری نقلیں مکّہ، مدینہ، کوفہ، بصرہ، اور دمشق بھیجی گئیں۔ ہر دوسرے ذاتی مخطوطے کو جلانے کا حکم دیا گیا تاکہ مستقبل کے اختلاف سے بچا جا سکے۔ یہ تھا مصحفِ عثمانی — بالکل وہی متن جو آج ۱.۸ ارب مسلمان پڑھتے ہیں، حرف بہ حرف، ۱,۳۷۰ سال سے زائد عرصے میں کوئی تبدیلی نہیں۔',
      ar: 'مع انتشار الإسلام في أرجاء شاسعة — من فارس إلى شمال أفريقيا — برزت أزمة. عاد حذيفة بن اليمان من جبهات أرمينيا وأذربيجان مذعورًا: "يا أمير المؤمنين! أدرك هذه الأمة قبل أن يختلفوا في كتابهم اختلاف اليهود والنصارى!" كان مسلمون من مناطق مختلفة يقرأون بلهجات متباينة، واشتعلت الخلافات. تصرّف الخليفة عثمان بن عفان بحزم. شكّل لجنة من أربعة علماء بقيادة زيد بن ثابت مجددًا، ومعه عبد الله بن الزبير وسعيد بن العاص وعبد الرحمن بن الحارث. استرجعوا صُحُف حفصة — التدوين الأصلي — وأنتجوا نسخًا متطابقة بلهجة قريش، اللهجة التي نزل بها القرآن. أُرسلت النسخ الرسمية إلى مكة والمدينة والكوفة والبصرة ودمشق. وأُمر بإحراق كل مخطوط شخصي آخر لمنع أي خلاف مستقبلي. هذا هو المصحف العثماني — النص ذاته الذي يقرأه ١.٨ مليار مسلم اليوم، حرفًا بحرف، دون تغيير منذ أكثر من ١٣٧٠ عامًا.',
    },
    verse: {
      arabic: 'وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ',
      ref: '54:17',
      translation: {
        en: 'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',
        ur: 'اور ہم نے قرآن کو نصیحت کے لیے آسان کر دیا ہے، تو کیا کوئی ہے نصیحت حاصل کرنے والا؟',
        ar: 'ولقد يسّرنا القرآن للذكر فهل من مُدّكر',
      },
    },
  },
  {
    id: 'quran-final-form',
    name: 'The Eternal Book',
    nameAr: 'الكتاب الخالد',
    nameUr: 'لازوال کتاب',
    year: 650,
    hijriYear: 30,
    chronOrderApprox: 117,
    location: 'madinah',
    landmark: 'Masjid al-Nabawi',
    coords: [24.4672, 39.6111],
    mapZoom: 17,
    color: '#34D399',
    icon: 'Award',
    description: '114 Surahs, 30 Juzz, 6,236 Ayaat — the structure of the Mushaf as we know it today.',
    relatedSurahs: [85, 56],
    category: 'compilation',
    mood: 'eternal',
    bgGradient: ['#022c22', '#064e3b', '#0a3d2e'],
    sources: {
      en: 'Sahih al-Bukhari 4998 — Narrated by Aisha RA: "Jibreel used to review the Quran with the Prophet ﷺ once every Ramadan, and in the year he passed away, he reviewed it twice." | Al-Itqan fi Ulum al-Quran by Imam al-Suyuti: The 30 Juzz division, 7 Manzils, and Kufi verse counting tradition.',
      ur: 'صحیح البخاری ۴۹۹۸ — عائشہؓ سے روایت: "جبرائیل ہر رمضان میں نبی ﷺ کے ساتھ قرآن کا دور کرتے تھے، اور جس سال آپ ﷺ کا وصال ہوا اس سال دو بار دور کیا۔" | الاتقان فی علوم القرآن از امام سیوطی: ۳۰ پاروں کی تقسیم، ۷ منزلیں، اور کوفی شمارِ آیات کی روایت۔',
      ar: 'صحيح البخاري ٤٩٩٨ — عن عائشة رضي الله عنها: "كان جبريل يعارض النبي ﷺ بالقرآن كل رمضان مرة، وإنه عارضه في العام الذي قُبض فيه مرتين." | الإتقان في علوم القرآن للإمام السيوطي: تقسيم الأجزاء الثلاثين والمنازل السبعة وتقليد العدّ الكوفي.',
    },
    narrative: {
      en: 'And so the Quran took its final form — the same form you hold in your hands today. The order of the 114 Surahs was not random. The Prophet ﷺ himself arranged them under Jibreel\'s guidance — every Ramadan, Jibreel would review the entire Quran with the Prophet, and in the final Ramadan before his passing, they reviewed it twice (Al-Arda al-Akhira), confirming the exact order from Al-Fatiha to An-Nas. The Sahaba divided the Mushaf into 30 equal parts — the Juzz (plural: Ajza\') — so a Muslim could complete the entire Quran in one month, reciting one Juzz each day, especially in Ramadan. They also divided it into 7 Manzils for those who wished to complete it weekly. The verse numbering follows the Kufi tradition of counting, traced back to Ali ibn Abi Talib, giving us exactly 6,236 Ayaat. Every dot, every mark was meticulously preserved. From scattered palm leaves to the most published, most memorized, and most recited book in human history — over 10 million living Huffaz carry it word for word in their hearts. This is the promise of Allah fulfilled: "Indeed, We sent down the Reminder, and indeed, We will be its Guardian."',
      ur: 'اور اس طرح قرآن نے اپنی حتمی شکل اختیار کی — وہی شکل جو آج آپ کے ہاتھوں میں ہے۔ ۱۱۴ سورتوں کی ترتیب بے ترتیب نہیں تھی۔ نبی کریم ﷺ نے خود جبرائیل علیہ السلام کی رہنمائی میں انہیں مرتب کیا — ہر رمضان میں جبرائیل نبی ﷺ کے ساتھ پورے قرآن کا دور کرتے تھے، اور وصال سے پہلے آخری رمضان میں دو بار دور کیا (العرضۃ الاخیرہ)، الفاتحہ سے الناس تک ترتیب کی تصدیق کرتے ہوئے۔ صحابہؓ نے مصحف کو ۳۰ برابر حصوں — جُز (جمع: اَجزاء) — میں تقسیم کیا تاکہ مسلمان ایک ماہ میں پورا قرآن مکمل کر سکے، ہر دن ایک جُز کی تلاوت کرتے ہوئے، خاص طور پر رمضان میں۔ انہوں نے اسے ۷ منزلوں میں بھی تقسیم کیا ان کے لیے جو ہفتہ وار ختم کرنا چاہیں۔ آیات کی نمبرنگ کوفی روایتِ شمار پر ہے جو حضرت علیؓ سے منسوب ہے، جس سے ہمیں بالکل ۶,۲۳۶ آیات ملتی ہیں۔ ہر نقطہ، ہر نشان محتاط طریقے سے محفوظ کیا گیا۔ بکھری ہوئی کھجور کی چھال سے لے کر انسانی تاریخ کی سب سے زیادہ شائع، سب سے زیادہ حفظ، اور سب سے زیادہ تلاوت کی جانے والی کتاب تک — ایک کروڑ سے زائد زندہ حُفّاظ اسے لفظ بہ لفظ اپنے سینوں میں محفوظ رکھتے ہیں۔ یہ اللہ کا وعدہ پورا ہوا: "بے شک ہم نے ہی اس ذکر کو اتارا ہے اور ہم ہی اس کے محافظ ہیں۔"',
      ar: 'وهكذا اتخذ القرآن شكله النهائي — الشكل ذاته الذي بين يديك اليوم. ترتيب السور الـ ١١٤ لم تكن عشوائية. رتّبها النبي ﷺ بنفسه بتوجيه جبريل — في كل رمضان كان جبريل يراجع القرآن كاملًا مع النبي، وفي آخر رمضان قبل وفاته راجعاه مرتين (العرضة الأخيرة)، مؤكدَين الترتيب الدقيق من الفاتحة إلى الناس. قسّم الصحابة المصحف إلى ٣٠ جزءًا متساويًا — الأجزاء — ليتمكن المسلم من ختم القرآن في شهر واحد، بتلاوة جزء كل يوم، خاصة في رمضان. كما قسّموه إلى ٧ منازل لمن أراد الختم أسبوعيًا. ترقيم الآيات يتبع العدّ الكوفي المنسوب إلى عليّ بن أبي طالب، ليعطينا بالضبط ٦٬٢٣٦ آية. كل نقطة، كل علامة حُفظت بدقة متناهية. من سعف النخيل المتناثر إلى أكثر كتاب نُشر وحُفظ وتُلي في تاريخ البشرية — أكثر من ١٠ ملايين حافظ حيّ يحملونه كلمة بكلمة في صدورهم. هذا وعد الله المتحقق: "إنّا نحن نزّلنا الذكر وإنّا له لحافظون."',
    },
    verse: {
      arabic: 'بَلْ هُوَ قُرْآنٌ مَّجِيدٌ ۝ فِي لَوْحٍ مَّحْفُوظٍ',
      ref: '85:21-22',
      translation: {
        en: 'Indeed, it is a Glorious Quran, in a Preserved Tablet',
        ur: 'بلکہ یہ بزرگی والا قرآن ہے، لوحِ محفوظ میں (لکھا ہوا)',
        ar: 'بل هو قرآن مجيد في لوح محفوظ',
      },
    },
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const periodsArray = Object.values(REVELATION_PERIODS);

export const getPeriodForChronOrder = (chronOrder) => {
  return periodsArray.find(
    (p) => chronOrder >= p.chronOrderRange[0] && chronOrder <= p.chronOrderRange[1]
  ) || periodsArray[0];
};

export const getApproxYear = (chronOrder) => {
  const period = getPeriodForChronOrder(chronOrder);
  const [minOrder, maxOrder] = period.chronOrderRange;
  const [minYear, maxYear] = period.yearRange;
  const range = maxOrder - minOrder || 1;
  const t = (chronOrder - minOrder) / range;
  return Math.round(minYear + t * (maxYear - minYear));
};

export const getEventsBySurah = (surahId) => {
  return SEERAH_EVENTS.filter((e) => e.relatedSurahs.includes(surahId));
};

export const getSurahsForPeriod = (periodId) => {
  const period = REVELATION_PERIODS[periodId];
  if (!period) return [];
  const [min, max] = period.chronOrderRange;
  return SURAHS.filter((s) => s.chronOrder >= min && s.chronOrder <= max)
    .sort((a, b) => a.chronOrder - b.chronOrder);
};

export const getNearestEvent = (chronOrder) => {
  let nearest = SEERAH_EVENTS[0];
  let minDist = Infinity;
  for (const event of SEERAH_EVENTS) {
    const dist = Math.abs(event.chronOrderApprox - chronOrder);
    if (dist < minDist) {
      minDist = dist;
      nearest = event;
    }
  }
  return nearest;
};

export const getChronologicalSurahs = () => {
  return SURAHS
    .map((s) => ({
      ...s,
      approxYear: getApproxYear(s.chronOrder),
      period: getPeriodForChronOrder(s.chronOrder),
    }))
    .sort((a, b) => a.chronOrder - b.chronOrder);
};
