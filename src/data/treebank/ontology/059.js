/**
 * Surah Al-Hashr (The Gathering) - Surah 59
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 59,
  surahName: "Al-Hashr",
  surahNameArabic: "الحشر",
  totalAyahs: 24,
  revelationType: "Medinan",
  mainTheme: { en: "Expulsion of Banu Nadir, Distribution of Fai', and Divine Names", ur: "بنو نضیر کی جلاوطنی، فَے کی تقسیم، اور اسمائے الٰہی" },

  categories: {
    divineAction: {
      name: "Divine Action Against Enemies",
      nameUr: "دشمنوں کے خلاف الٰہی اقدام",
      nameAr: "الفعل الإلهي ضد الأعداء",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "Expulsion from Homes", arabic: "الإخراج من الديار", meaning: { en: "Allah expelled the disbelieving People of the Book", ur: "اللہ نے اہلِ کتاب کے کافروں کو نکال دیا" }, ayahs: [2] },
        { term: "First Gathering", arabic: "أول الحشر", meaning: { en: "First exile of Jews from Madinah", ur: "مدینہ سے یہودیوں کی پہلی جلاوطنی" }, ayahs: [2] },
        { term: "Terror in Hearts", arabic: "الرعب في القلوب", meaning: { en: "Allah cast terror into their hearts", ur: "اللہ نے ان کے دلوں میں رعب ڈال دیا" }, ayahs: [2] },
        { term: "Destroying Their Homes", arabic: "يخربون بيوتهم", meaning: { en: "They demolished their own houses", ur: "انہوں نے اپنے ہاتھوں اپنے گھر تباہ کیے" }, ayahs: [2] }
      ]
    },
    faiDistribution: {
      name: "Distribution of Fai' (War Gains)",
      nameUr: "فَے (مالِ غنیمت) کی تقسیم",
      nameAr: "توزيع الفيء",
      color: '#3B82F6',
      icon: 'Scale',
      concepts: [
        { term: "Fai' without Battle", arabic: "الفيء بلا قتال", meaning: { en: "Gains acquired without fighting", ur: "بغیر لڑائی کے حاصل ہونے والا مال" }, ayahs: [6, 7] },
        { term: "Allah's Distribution", arabic: "توزيع الله", meaning: { en: "Allah decides distribution", ur: "تقسیم کا فیصلہ اللہ کرتا ہے" }, ayahs: [7] },
        { term: "Five Categories", arabic: "خمس فئات", meaning: { en: "Allah, Messenger, relatives, orphans, needy, travelers", ur: "اللہ، رسول، رشتہ دار، یتیم، مسکین، مسافر" }, ayahs: [7] },
        { term: "Preventing Wealth Circulation Among Rich", arabic: "دولة بين الأغنياء", meaning: { en: "Wealth should not circulate only among wealthy", ur: "دولت صرف مالداروں کے درمیان نہیں گھومنی چاہیے" }, ayahs: [7] }
      ]
    },
    muhajirin: {
      name: "The Emigrants (Muhajirin)",
      nameUr: "مہاجرین",
      nameAr: "المهاجرون",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Poor Emigrants", arabic: "الفقراء المهاجرين", meaning: { en: "Expelled from homes and properties", ur: "گھروں اور جائیدادوں سے نکالے گئے" }, ayahs: [8] },
        { term: "Seeking Allah's Bounty", arabic: "ابتغاء فضل الله", meaning: { en: "They seek Allah's grace and pleasure", ur: "وہ اللہ کے فضل اور رضا کی تلاش میں ہیں" }, ayahs: [8] },
        { term: "Helping Allah's Cause", arabic: "نصرة الله ورسوله", meaning: { en: "They support Allah and His Messenger", ur: "وہ اللہ اور اس کے رسول کی مدد کرتے ہیں" }, ayahs: [8] },
        { term: "The Truthful Ones", arabic: "الصادقون", meaning: { en: "They are the truly sincere", ur: "وہ سچے مخلص لوگ ہیں" }, ayahs: [8] }
      ]
    },
    ansar: {
      name: "The Helpers (Ansar)",
      nameUr: "انصار",
      nameAr: "الأنصار",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Settled in Madinah", arabic: "تبوؤوا الدار", meaning: { en: "Established home before emigrants came", ur: "مہاجرین کی آمد سے پہلے مدینے میں مقیم تھے" }, ayahs: [9] },
        { term: "Love for Emigrants", arabic: "محبة المهاجرين", meaning: { en: "They love those who emigrated to them", ur: "وہ ان سے محبت کرتے ہیں جو ہجرت کر کے آئے" }, ayahs: [9] },
        { term: "No Envy", arabic: "عدم الحاجة", meaning: { en: "No jealousy for what emigrants received", ur: "مہاجرین کو جو ملا اس پر کوئی حسد نہیں" }, ayahs: [9] },
        { term: "Ithar - Preferring Others", arabic: "الإيثار", meaning: { en: "Giving preference over themselves despite poverty", ur: "غریب ہونے کے باوجود دوسروں کو اپنے اوپر ترجیح دینا" }, ayahs: [9] }
      ]
    },
    laterGenerations: {
      name: "Later Generations",
      nameUr: "بعد کی نسلیں",
      nameAr: "الأجيال اللاحقة",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Seeking Forgiveness", arabic: "طلب المغفرة", meaning: { en: "Praying for themselves and predecessors", ur: "اپنے لیے اور پہلے لوگوں کے لیے دعائے مغفرت" }, ayahs: [10] },
        { term: "No Resentment", arabic: "عدم الغل", meaning: { en: "No rancor toward believers", ur: "مومنوں کے خلاف دل میں کوئی کینہ نہیں" }, ayahs: [10] },
        { term: "Brotherhood Across Time", arabic: "الأخوة عبر الزمن", meaning: { en: "Spiritual connection with predecessors", ur: "پہلے لوگوں کے ساتھ روحانی رشتہ" }, ayahs: [10] }
      ]
    },
    hypocritesAlliance: {
      name: "Hypocrites' False Alliance",
      nameUr: "منافقین کا جھوٹا اتحاد",
      nameAr: "تحالف المنافقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "False Promises", arabic: "الوعود الكاذبة", meaning: { en: "Promising to fight alongside Jews", ur: "یہودیوں کے ساتھ مل کر لڑنے کا وعدہ" }, ayahs: [11] },
        { term: "Broken Promises", arabic: "نقض العهود", meaning: { en: "They would not actually help", ur: "وہ دراصل مدد نہیں کرتے" }, ayahs: [12] },
        { term: "Fleeing Battle", arabic: "الفرار من القتال", meaning: { en: "They would turn backs if they fought", ur: "اگر وہ لڑیں تو پیٹھ دکھا کر بھاگ جائیں" }, ayahs: [12] },
        { term: "Fear of Believers", arabic: "الخوف من المؤمنين", meaning: { en: "More afraid of believers than Allah", ur: "اللہ سے زیادہ مومنوں سے ڈرتے ہیں" }, ayahs: [13] }
      ]
    },
    satansDeception: {
      name: "Satan's Deception",
      nameUr: "شیطان کا دھوکا",
      nameAr: "خداع الشيطان",
      color: '#EF4444',
      icon: 'Flame',
      concepts: [
        { term: "Command to Disbelieve", arabic: "الأمر بالكفر", meaning: { en: "Satan tells man to disbelieve", ur: "شیطان انسان سے کفر کرنے کو کہتا ہے" }, ayahs: [16] },
        { term: "Abandonment", arabic: "التبرؤ", meaning: { en: "Satan disowns after leading astray", ur: "گمراہ کرنے کے بعد شیطان بیزاری کا اظہار کرتا ہے" }, ayahs: [16] },
        { term: "Claiming to Fear Allah", arabic: "ادعاء الخوف", meaning: { en: "Satan's false claim of fearing Allah", ur: "شیطان کا اللہ سے ڈرنے کا جھوٹا دعویٰ" }, ayahs: [16] },
        { term: "Both in Fire", arabic: "كلاهما في النار", meaning: { en: "Satan and follower together in Hell", ur: "شیطان اور اس کا پیروکار دونوں جہنم میں" }, ayahs: [17] }
      ]
    },
    divineNames: {
      name: "The Beautiful Names of Allah",
      nameUr: "اللہ کے حسین نام",
      nameAr: "أسماء الله الحسنى",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Knower of Unseen", arabic: "عالم الغيب والشهادة", meaning: { en: "Knows hidden and manifest", ur: "غیب اور ظاہر کا جاننے والا" }, ayahs: [22] },
        { term: "Al-Rahman Al-Rahim", arabic: "الرحمن الرحيم", meaning: { en: "Most Merciful, Especially Merciful", ur: "بے حد مہربان، نہایت رحم والا" }, ayahs: [22] },
        { term: "Al-Malik", arabic: "الملك", meaning: { en: "The Sovereign King", ur: "بادشاہ، حقیقی مالک" }, ayahs: [23] },
        { term: "Al-Quddus", arabic: "القدوس", meaning: { en: "The Holy, Pure", ur: "پاک اور مقدس" }, ayahs: [23] },
        { term: "Al-Salam", arabic: "السلام", meaning: { en: "The Source of Peace", ur: "سلامتی کا سرچشمہ" }, ayahs: [23] },
        { term: "Al-Mumin", arabic: "المؤمن", meaning: { en: "The Granter of Security", ur: "امن عطا کرنے والا" }, ayahs: [23] },
        { term: "Al-Muhaymin", arabic: "المهيمن", meaning: { en: "The Controller, Guardian", ur: "نگران، محافظ" }, ayahs: [23] },
        { term: "Al-Aziz", arabic: "العزيز", meaning: { en: "The Almighty", ur: "غالب، زبردست" }, ayahs: [23, 24] },
        { term: "Al-Jabbar", arabic: "الجبار", meaning: { en: "The Compeller", ur: "زبردست، جبر والا" }, ayahs: [23] },
        { term: "Al-Mutakabbir", arabic: "المتكبر", meaning: { en: "The Supreme", ur: "بڑائی والا، عظمت والا" }, ayahs: [23] },
        { term: "Al-Khaliq", arabic: "الخالق", meaning: { en: "The Creator", ur: "پیدا کرنے والا" }, ayahs: [24] },
        { term: "Al-Bari", arabic: "البارئ", meaning: { en: "The Originator", ur: "بنانے والا، ایجاد کرنے والا" }, ayahs: [24] },
        { term: "Al-Musawwir", arabic: "المصور", meaning: { en: "The Fashioner", ur: "صورت بنانے والا" }, ayahs: [24] },
        { term: "Al-Hakim", arabic: "الحكيم", meaning: { en: "The All-Wise", ur: "حکمت والا" }, ayahs: [24] }
      ]
    }
  },

  relationships: [
    { from: "Opposition to Allah", to: "Expulsion", type: "consequence", description: { en: "Those who opposed Allah and Messenger were expelled", ur: "جنہوں نے اللہ اور رسول کی مخالفت کی وہ نکالے گئے" } },
    { from: "Self-Destruction", to: "Divine Plan", type: "irony", description: { en: "They destroyed their own homes thinking it would deny Muslims", ur: "انہوں نے اپنے گھر خود تباہ کیے یہ سوچ کر کہ مسلمان فائدہ نہیں اٹھائیں گے" } },
    { from: "Fai'", to: "Social Justice", type: "purpose", description: { en: "Wealth distributed to prevent concentration among rich", ur: "دولت کی تقسیم تاکہ امیروں میں ارتکاز نہ ہو" } },
    { from: "Muhajirin", to: "Truthfulness", type: "title", description: { en: "Emigrants declared 'the truthful' for their sacrifice", ur: "مہاجرین کو ان کی قربانی کی وجہ سے 'صادقون' قرار دیا گیا" } },
    { from: "Ansar", to: "Ithar", type: "virtue", description: { en: "Helpers exemplified selfless preference for others", ur: "انصار نے بے لوث ایثار کی بہترین مثال قائم کی" } },
    { from: "Later Muslims", to: "Predecessors", type: "prayer", description: { en: "Seek forgiveness for themselves and predecessors", ur: "اپنے اور پہلے لوگوں کے لیے مغفرت کی دعا" } },
    { from: "Hypocrites", to: "Jews", type: "false_alliance", description: { en: "Promised but never delivered support", ur: "مدد کا وعدہ کیا لیکن کبھی پورا نہ کیا" } },
    { from: "Satan", to: "Followers", type: "abandonment", description: { en: "Leads astray then disclaims responsibility", ur: "گمراہ کرتا ہے پھر ذمہ داری سے انکار کر دیتا ہے" } },
    { from: "Quran", to: "Mountain", type: "hypothetical", description: { en: "Would humble and shatter a mountain", ur: "پہاڑ کو جھکا دیتا اور ریزہ ریزہ کر دیتا" } },
    { from: "Divine Names", to: "Creation", type: "glorification", description: { en: "All creation glorifies Allah's names", ur: "تمام مخلوقات اللہ کے ناموں کی تسبیح کرتی ہیں" } }
  ],

  thematicFlow: {
    title: { en: "From Divine Judgment to Divine Names", ur: "الٰہی فیصلے سے اسمائے الٰہی تک" },
    stages: [
      { name: "Universal Glorification", ayahs: [1], description: { en: "All heavens and earth glorify Allah", ur: "آسمانوں اور زمین کی ہر چیز اللہ کی تسبیح کرتی ہے" } },
      { name: "Expulsion of Enemies", ayahs: [2, 3, 4, 5], description: { en: "Banu Nadir expelled; their unexpected defeat", ur: "بنو نضیر کی جلاوطنی؛ ان کی غیر متوقع شکست" } },
      { name: "Fai' Distribution", ayahs: [6, 7], description: { en: "Rules for wealth gained without battle", ur: "بغیر جنگ حاصل مال کی تقسیم کے اصول" } },
      { name: "Muhajirin's Honor", ayahs: [8], description: { en: "Description and praise of emigrants", ur: "مہاجرین کی تعریف اور ان کے اوصاف" } },
      { name: "Ansar's Excellence", ayahs: [9], description: { en: "Helpers' love and selflessness (Ithar)", ur: "انصار کی محبت اور بے لوثی (ایثار)" } },
      { name: "Later Muslims' Prayer", ayahs: [10], description: { en: "Supplication for all believers across time", ur: "تمام ادوار کے مومنوں کے لیے دعا" } },
      { name: "Hypocrites Exposed", ayahs: [11, 12, 13, 14, 15], description: { en: "Their false promises to Jews", ur: "یہودیوں سے ان کے جھوٹے وعدے" } },
      { name: "Satan's Pattern", ayahs: [16, 17], description: { en: "How Satan leads then abandons", ur: "شیطان کیسے گمراہ کرتا ہے پھر چھوڑ دیتا ہے" } },
      { name: "Self-Accountability", ayahs: [18, 19, 20], description: { en: "Prepare for tomorrow; don't forget Allah", ur: "کل کے لیے تیاری کرو؛ اللہ کو مت بھولو" } },
      { name: "Quran's Weight", ayahs: [21], description: { en: "Mountain would shatter from its weight", ur: "پہاڑ اس کے وزن سے ریزہ ریزہ ہو جاتا" } },
      { name: "Divine Names Climax", ayahs: [22, 23, 24], description: { en: "13+ names of Allah in finale", ur: "اختتام میں اللہ کے 13 سے زائد اسماء" } }
    ]
  },

  practicalApplication: {
    title: { en: "Living the Lessons of Al-Hashr", ur: "سورۃ الحشر کے اسباق پر عمل" },
    applications: [
      {
        context: { en: "Wealth Distribution", ur: "دولت کی تقسیم" },
        teaching: { en: "Share resources so wealth circulates beyond the wealthy", ur: "وسائل بانٹو تاکہ دولت صرف مالداروں میں محدود نہ رہے" },
        ayah: 7
      },
      {
        context: { en: "Brotherhood", ur: "اخوت" },
        teaching: { en: "Love fellow believers; rejoice in their good fortune without envy", ur: "ساتھی مومنوں سے محبت رکھو؛ ان کی خوشی پر بغیر حسد کے خوش ہو" },
        ayah: 9
      },
      {
        context: { en: "Ithar (Selflessness)", ur: "ایثار (بے لوثی)" },
        teaching: { en: "Give preference to others' needs even when you yourself are in need", ur: "دوسروں کی ضرورتوں کو ترجیح دو خواہ تم خود محتاج ہو" },
        ayah: 9
      },
      {
        context: { en: "Unity Across Generations", ur: "نسلوں میں اتحاد" },
        teaching: { en: "Make dua for predecessors and don't hold grudges against believers", ur: "پہلے لوگوں کے لیے دعا کرو اور مومنوں کے خلاف کینہ نہ رکھو" },
        ayah: 10
      },
      {
        context: { en: "Self-Reflection", ur: "خود احتسابی" },
        teaching: { en: "Look at what you've sent forward for tomorrow (Hereafter)", ur: "دیکھو کہ تم نے کل (آخرت) کے لیے کیا آگے بھیجا ہے" },
        ayah: 18
      },
      {
        context: { en: "Remembering Allah", ur: "اللہ کو یاد رکھنا" },
        teaching: { en: "Don't forget Allah or He'll make you forget yourself", ur: "اللہ کو مت بھولو ورنہ وہ تمہیں خود اپنے آپ سے غافل کر دے گا" },
        ayah: 19
      },
      {
        context: { en: "Dhikr with Names", ur: "اسمائے الٰہی سے ذکر" },
        teaching: { en: "Contemplate and invoke Allah by His beautiful names", ur: "اللہ کے حسین ناموں سے غور و فکر اور پکار" },
        ayah: 24
      }
    ]
  },

  uniqueInsight: {
    title: { en: "Ithar: Preferring Others Over Oneself (وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ)", ur: "ایثار: اپنے اوپر دوسروں کو ترجیح دینا (وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ)" },
    insight: {
      en: "Verse 9 introduces one of Islam's most noble concepts: 'Ithar' (الإيثار) - giving preference to others over oneself even when personally in need. The Ansar (Helpers) of Madinah are praised for loving the emigrants, feeling no jealousy over what they received, and preferring others 'even though they themselves were in need' (وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ). This goes beyond generosity (giving from surplus) to selflessness (giving from what you need). The famous story of an Ansari giving his only food to a guest while his family went hungry exemplifies this. The verse concludes that whoever is protected from the stinginess of their own soul—those are the successful ones. This teaching elevated charity from mere obligation to spiritual excellence.",
      ur: "آیت 9 اسلام کے سب سے عظیم تصورات میں سے ایک 'ایثار' (الإيثار) متعارف کراتی ہے—اپنی ذاتی ضرورت کے باوجود دوسروں کو ترجیح دینا۔ مدینے کے انصار کی تعریف کی گئی کہ وہ مہاجرین سے محبت رکھتے تھے، انہیں جو ملا اس پر کوئی حسد نہیں تھا، اور 'خود محتاج ہونے کے باوجود' (وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ) دوسروں کو ترجیح دیتے تھے۔ یہ سخاوت (زیادتی سے دینا) سے آگے بے لوثی (اپنی ضرورت سے دینا) ہے۔ ایک انصاری کا مشہور واقعہ جنہوں نے مہمان کو اپنا واحد کھانا دے دیا جبکہ ان کا خاندان بھوکا رہا، اس کی بہترین مثال ہے۔ آیت کا اختتام اس بات پر ہوتا ہے کہ جو اپنے نفس کے بخل سے بچا لیا گیا—وہی کامیاب ہیں۔ اس تعلیم نے صدقے کو محض فریضے سے روحانی بلندی تک پہنچا دیا۔"
    },
    arabicTerm: "وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ",
    rootMeaning: { en: "أ-ث-ر (to prefer, give precedence) - choosing others' welfare over your own", ur: "أ-ث-ر (ترجیح دینا، مقدم رکھنا) - اپنی بھلائی پر دوسروں کی بھلائی کا انتخاب" },
    keyAyah: 9
  },

  historicalContext: {
    revelationPeriod: { en: "4 AH, after Battle of Uhud", ur: "4 ہجری، غزوۂ اُحد کے بعد" },
    occasion: { en: "The Jewish tribe Banu Nadir broke their treaty with Muslims by attempting to assassinate Prophet Muhammad. When confronted, they were given the choice to leave with their belongings. They initially refused, trusting the hypocrites' promises of support, but when no help came, they surrendered and were expelled.", ur: "یہودی قبیلے بنو نضیر نے نبی محمد ﷺ کو قتل کرنے کی کوشش کر کے مسلمانوں سے معاہدہ توڑا۔ جب مقابلہ ہوا تو انہیں اپنا سامان لے کر جانے کا اختیار دیا گیا۔ انہوں نے پہلے انکار کیا، منافقین کی مدد کے وعدوں پر بھروسہ کرتے ہوئے، لیکن جب کوئی مدد نہیں آئی تو انہوں نے ہتھیار ڈال دیے اور جلاوطن ہو گئے۔" },
    note: { en: "The surah addresses the aftermath of this expulsion—particularly how to distribute the 'fai'' (property acquired without battle). Unlike 'ghanimah' (war booty) which follows specific rules, fai' belongs entirely to the Prophet to distribute for community welfare. This became a foundational principle of Islamic economics: preventing wealth from circulating only among the rich.", ur: "سورت اس جلاوطنی کے نتائج بیان کرتی ہے—خاص طور پر 'فَے' (بغیر جنگ حاصل مال) کی تقسیم۔ 'غنیمت' (مالِ جنگ) کے برعکس جس کے مخصوص اصول ہیں، فَے مکمل طور پر نبی ﷺ کے پاس ہوتا تھا تاکہ وہ معاشرے کی بھلائی کے لیے تقسیم کریں۔ یہ اسلامی معاشیات کا بنیادی اصول بنا: دولت کو صرف امیروں میں محدود ہونے سے روکنا۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Musabbih Series", description: { en: "Opens with سَبَّحَ (past tense glorification)", ur: "سَبَّحَ (ماضی کے صیغے میں تسبیح) سے آغاز" }, pattern: { en: "Part of seven surahs beginning with tasbih", ur: "تسبیح سے شروع ہونے والی سات سورتوں میں سے ایک" }, ayah: 1 },
      { name: "Architectural Irony", description: { en: "يُخْرِبُونَ بُيُوتَهُم - destroying their own homes", ur: "يُخْرِبُونَ بُيُوتَهُم - اپنے ہاتھوں اپنے گھر تباہ کرنا" }, example: { en: "They demolished what they built to spite Muslims", ur: "مسلمانوں کو نقصان پہنچانے کے لیے اپنی تعمیرات خود ڈھا دیں" }, ayah: 2 },
      { name: "Contrast Formula", description: { en: "لَا يَسْتَوِي - 'Not equal'", ur: "لَا يَسْتَوِي - 'برابر نہیں'" }, example: { en: "Companions of Fire vs Paradise", ur: "جہنمی بمقابلہ جنتی" }, ayah: 20 },
      { name: "Name Cascade", description: { en: "13+ Divine Names in final verses", ur: "آخری آیات میں 13 سے زائد اسمائے الٰہی" }, pattern: { en: "Rapid succession of attributes", ur: "صفات کا تیز رفتار سلسلہ" }, ayahs: [22, 23, 24] },
      { name: "Hypothetical Image", description: { en: "If Quran sent upon a mountain", ur: "اگر قرآن پہاڑ پر اتارا جاتا" }, example: { en: "لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ", ur: "لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ" }, ayah: 21 }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: { en: "Economic Theory", ur: "معاشی نظریہ" },
        observation: { en: "Verse 7's principle 'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ' (so it doesn't circulate only among the rich) anticipates modern economic concerns about wealth concentration", ur: "آیت 7 کا اصول 'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ' (تاکہ صرف مالداروں میں نہ گھومے) دولت کے ارتکاز کے بارے میں جدید معاشی خدشات سے پہلے آیا" },
        ayah: 7
      },
      {
        topic: { en: "Psychological Projection", ur: "نفسیاتی عکاسی" },
        observation: { en: "Verse 19 describes how forgetting Allah leads to forgetting oneself—a profound insight into self-awareness requiring God-consciousness", ur: "آیت 19 بیان کرتی ہے کہ اللہ کو بھولنا خود کو بھولنے کا سبب بنتا ہے—خود آگاہی کے لیے خدا شناسی کی ضرورت پر گہری بصیرت" },
        ayah: 19
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 8, name: "Al-Anfal", relationship: { en: "Both address distribution of gains; Anfal focuses on ghanimah, Hashr on fai'", ur: "دونوں مالِ جنگ کی تقسیم بیان کرتی ہیں؛ انفال غنیمت پر، حشر فَے پر مرکوز" }, type: "thematic_complement" },
      { surah: 33, name: "Al-Ahzab", relationship: { en: "Both address siege situations and hypocrites' behavior", ur: "دونوں محاصرے کے حالات اور منافقین کے رویے کو بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 63, name: "Al-Munafiqun", relationship: { en: "Both expose hypocrites' true nature", ur: "دونوں منافقین کی اصل حقیقت بے نقاب کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 57, name: "Al-Hadid", relationship: { en: "Both part of Musabbihaat glorification surahs", ur: "دونوں مسبّحات تسبیحی سورتوں کا حصہ ہیں" }, type: "thematic_series" },
      { surah: 112, name: "Al-Ikhlas", relationship: { en: "Both focus on divine names and attributes", ur: "دونوں اسمائے الٰہی اور صفات پر مرکوز ہیں" }, type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
