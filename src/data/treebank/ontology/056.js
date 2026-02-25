/**
 * Surah Al-Waqi'ah (The Inevitable Event) - Surah 56
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 56,
  surahName: "Al-Waqi'ah",
  surahNameArabic: "الواقعة",
  totalAyahs: 96,
  revelationType: "Makkan",
  mainTheme: { en: "The Three Groups on Judgment Day and Proofs of Resurrection", ur: "قیامت کے دن تین گروہ اور قیامت کے دلائل" },

  categories: {
    threeGroups: {
      name: "Three Groups of Humanity",
      nameAr: "أصناف البشر الثلاثة",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Ashab al-Maymanah", arabic: "أصحاب الميمنة", meaning: { en: "Companions of the Right", ur: "دائیں ہاتھ والے" }, explanation: { en: "Those who receive their record in the right hand", ur: "جنہیں ان کا اعمال نامہ دائیں ہاتھ میں ملے گا" }, ayahs: [8, 27, 38, 90, 91] },
        { term: "Ashab al-Mash'amah", arabic: "أصحاب المشأمة", meaning: { en: "Companions of the Left", ur: "بائیں ہاتھ والے" }, explanation: { en: "Those who receive their record in the left hand", ur: "جنہیں ان کا اعمال نامہ بائیں ہاتھ میں ملے گا" }, ayahs: [9, 41] },
        { term: "Al-Sabiqun", arabic: "السابقون", meaning: { en: "The Foremost, brought near", ur: "سبقت لے جانے والے، مقرب" }, explanation: { en: "The highest rank - those brought nearest to Allah", ur: "سب سے اعلیٰ درجہ - اللہ کے سب سے قریب کیے جانے والے" }, ayahs: [10, 11, 12] }
      ]
    },
    sabiqunRewards: {
      name: "Rewards of the Foremost",
      nameAr: "جزاء السابقين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "Gardens of Pleasure", arabic: "جنات النعيم", meaning: { en: "Gardens of bliss", ur: "نعمت کے باغات" }, explanation: { en: "Paradise of eternal enjoyment", ur: "ابدی لطف کی جنت" }, ayahs: [12] },
        { term: "Jeweled Thrones", arabic: "سرر موضونة", meaning: { en: "Woven couches with jewels", ur: "جواہرات جڑے تخت" }, explanation: { en: "Luxurious seating in Paradise", ur: "جنت میں شاندار بیٹھکیں" }, ayahs: [15] },
        { term: "Eternal Youth", arabic: "ولدان مخلدون", meaning: { en: "Immortal youth serving", ur: "ہمیشہ جوان خادم" }, explanation: { en: "Young attendants who never age", ur: "نوجوان خدمت گار جو کبھی بوڑھے نہیں ہوتے" }, ayahs: [17] },
        { term: "Pure Wine", arabic: "كأس من معين", meaning: { en: "Cups from flowing spring", ur: "بہتے چشمے سے پیالے" }, explanation: { en: "Wine of Paradise that doesn't intoxicate harmfully", ur: "جنت کی شراب جو نقصان دہ نشہ نہیں دیتی" }, ayahs: [18] },
        { term: "Hur Ein", arabic: "حور عين", meaning: { en: "Fair ones with large eyes", ur: "بڑی بڑی آنکھوں والی حوریں" }, explanation: { en: "Beautiful companions of Paradise", ur: "جنت کی خوبصورت ساتھی" }, ayahs: [22] },
        { term: "No Vain Talk", arabic: "لا لغو ولا تأثيم", meaning: { en: "No idle or sinful speech", ur: "نہ فضول بات نہ گناہ کی بات" }, explanation: { en: "Pure environment free from negativity", ur: "منفی باتوں سے پاک ماحول" }, ayahs: [25] }
      ]
    },
    rightHandRewards: {
      name: "Rewards of the Right",
      nameAr: "جزاء أصحاب اليمين",
      color: '#10B981',
      icon: 'Gift',
      concepts: [
        { term: "Thornless Lote Trees", arabic: "سدر مخضود", meaning: { en: "Lote trees without thorns", ur: "بے کانٹے بیری کے درخت" }, explanation: { en: "Trees bearing fruit easily accessible", ur: "آسانی سے پھلوں تک رسائی والے درخت" }, ayahs: [28] },
        { term: "Layered Banana Trees", arabic: "طلح منضود", meaning: { en: "Clustered plantains", ur: "تہہ بہ تہہ کیلے" }, explanation: { en: "Abundant tropical fruits in layers", ur: "تہوں میں وافر اشنکٹبندیی پھل" }, ayahs: [29] },
        { term: "Extended Shade", arabic: "ظل ممدود", meaning: { en: "Long-extended shade", ur: "دور تک پھیلا ہوا سایہ" }, explanation: { en: "Comfortable shaded areas", ur: "آرام دہ سائے دار جگہیں" }, ayahs: [30] },
        { term: "Flowing Water", arabic: "ماء مسكوب", meaning: { en: "Outpoured water", ur: "بہتا ہوا پانی" }, explanation: { en: "Constantly flowing fresh water", ur: "مسلسل بہتا تازہ پانی" }, ayahs: [31] },
        { term: "Abundant Fruit", arabic: "فاكهة كثيرة", meaning: { en: "Much fruit", ur: "بہت سے پھل" }, explanation: { en: "Unlimited fruit supply", ur: "لامحدود پھلوں کی فراہمی" }, ayahs: [32] },
        { term: "Raised Beds", arabic: "فرش مرفوعة", meaning: { en: "Elevated couches", ur: "بلند بستر" }, explanation: { en: "Dignified resting places", ur: "باوقار آرام گاہیں" }, ayahs: [34] }
      ]
    },
    leftHandPunishment: {
      name: "Punishment of the Left",
      nameAr: "عذاب أصحاب الشمال",
      color: '#EF4444',
      icon: 'Flame',
      concepts: [
        { term: "Scorching Wind", arabic: "سموم", meaning: { en: "Burning hot wind", ur: "جھلسا دینے والی گرم ہوا" }, explanation: { en: "Unbearable scorching heat", ur: "ناقابلِ برداشت جلتی گرمی" }, ayahs: [42] },
        { term: "Boiling Water", arabic: "حميم", meaning: { en: "Scalding water", ur: "کھولتا پانی" }, explanation: { en: "Extremely hot water for drinking", ur: "پینے کے لیے انتہائی گرم پانی" }, ayahs: [42] },
        { term: "Black Smoke Shadow", arabic: "ظل من يحموم", meaning: { en: "Shadow of black smoke", ur: "کالے دھویں کا سایہ" }, explanation: { en: "Instead of pleasant shade, they get black smoke", ur: "خوشگوار سائے کی بجائے کالا دھواں" }, ayahs: [43] },
        { term: "Neither Cool Nor Noble", arabic: "لا بارد ولا كريم", meaning: { en: "Not refreshing or pleasant", ur: "نہ ٹھنڈا نہ عمدہ" }, explanation: { en: "Completely devoid of comfort", ur: "آرام سے بالکل محروم" }, ayahs: [44] },
        { term: "Affluent Before", arabic: "مترفين", meaning: { en: "They lived in luxury", ur: "وہ عیش و عشرت میں تھے" }, explanation: { en: "Their worldly luxury led to heedlessness", ur: "ان کی دنیاوی عیاشی نے غفلت پیدا کی" }, ayahs: [45] },
        { term: "Tree of Zaqqum", arabic: "شجرة الزقوم", meaning: { en: "Bitter tree filling bellies", ur: "زقوم کا درخت جو پیٹ بھرتا ہے" }, explanation: { en: "Hellish food that torments", ur: "جہنمی خوراک جو عذاب دیتی ہے" }, ayahs: [52] }
      ]
    },
    proofsOfResurrection: {
      name: "Proofs of Resurrection",
      nameAr: "براهين البعث",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "First Creation", arabic: "الخلق الأول", meaning: { en: "Allah created you first time", ur: "اللہ نے تمہیں پہلی بار پیدا کیا" }, explanation: { en: "If He created once, He can create again", ur: "اگر ایک بار بنایا تو دوبارہ بنا سکتا ہے" }, ayahs: [57, 62] },
        { term: "Sperm Drop", arabic: "النطفة", meaning: { en: "What you emit - semen", ur: "جو تم خارج کرتے ہو - نطفہ" }, explanation: { en: "Human creation from a tiny drop proves divine power", ur: "ایک چھوٹی بوند سے انسانی تخلیق الٰہی طاقت کا ثبوت" }, ayahs: [58] },
        { term: "Crops You Sow", arabic: "ما تحرثون", meaning: { en: "Seeds you plant", ur: "جو تم بوتے ہو" }, explanation: { en: "You sow but Allah makes it grow", ur: "تم بوتے ہو لیکن اللہ اُگاتا ہے" }, ayahs: [63, 64] },
        { term: "Water You Drink", arabic: "الماء المنزل", meaning: { en: "Water from clouds", ur: "بادلوں سے پانی" }, explanation: { en: "Allah sends down rain, not you", ur: "اللہ بارش برساتا ہے، تم نہیں" }, ayahs: [68, 69] },
        { term: "Fire You Kindle", arabic: "النار الموقدة", meaning: { en: "Fire from trees", ur: "درختوں سے آگ" }, explanation: { en: "Allah created the tree from which fire comes", ur: "اللہ نے وہ درخت بنایا جس سے آگ نکلتی ہے" }, ayahs: [71, 72] }
      ]
    },
    quranGlory: {
      name: "Glory of the Quran",
      nameAr: "عظمة القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Quran Oath", arabic: "بمواقع النجوم", meaning: { en: "By positions of stars", ur: "ستاروں کے مقامات کی قسم" }, explanation: { en: "Great oath by star positions", ur: "ستاروں کے مقامات کی عظیم قسم" }, ayahs: [75, 76] },
        { term: "Noble Quran", arabic: "قرآن كريم", meaning: { en: "Honorable Quran", ur: "عزت والا قرآن" }, explanation: { en: "The Quran is noble and honored", ur: "قرآن عظیم اور معزز ہے" }, ayahs: [77] },
        { term: "Hidden Book", arabic: "كتاب مكنون", meaning: { en: "In a protected record", ur: "محفوظ کتاب میں" }, explanation: { en: "Preserved in the Lawh al-Mahfuz", ur: "لوحِ محفوظ میں محفوظ" }, ayahs: [78] },
        { term: "Only Pure Touch It", arabic: "لا يمسه إلا المطهرون", meaning: { en: "None touch it except purified", ur: "اسے صرف پاک لوگ ہی چھوتے ہیں" }, explanation: { en: "Angels who are pure carry the original", ur: "پاک فرشتے اصل نسخے کے حامل ہیں" }, ayahs: [79] },
        { term: "From Lord of Worlds", arabic: "تنزيل من رب العالمين", meaning: { en: "Revelation from Lord of worlds", ur: "رب العالمین کی طرف سے نازل شدہ" }, explanation: { en: "Divine origin of the Quran confirmed", ur: "قرآن کی الٰہی اصل کی تصدیق" }, ayahs: [80] }
      ]
    },
    deathMoment: {
      name: "The Moment of Death",
      nameAr: "لحظة الموت",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Soul at Throat", arabic: "الروح عند الحلقوم", meaning: { en: "When soul reaches throat", ur: "جب روح حلق تک پہنچ جائے" }, explanation: { en: "The moment of death when soul is departing", ur: "موت کا وہ لمحہ جب روح نکل رہی ہو" }, ayahs: [83] },
        { term: "You Watch", arabic: "وأنتم تنظرون", meaning: { en: "While you watch helplessly", ur: "اور تم بے بسی سے دیکھتے ہو" }, explanation: { en: "Family watches unable to prevent death", ur: "خاندان موت روکنے سے عاجز دیکھتا رہتا ہے" }, ayahs: [84] },
        { term: "We Are Nearer", arabic: "نحن أقرب", meaning: { en: "Allah is closer than you", ur: "ہم تم سے زیادہ قریب ہیں" }, explanation: { en: "Allah's angels are present though invisible", ur: "اللہ کے فرشتے موجود ہیں حالانکہ نظر نہیں آتے" }, ayahs: [85] },
        { term: "Cannot Return Soul", arabic: "ترجعونها", meaning: { en: "You cannot return it", ur: "تم اسے واپس نہیں لا سکتے" }, explanation: { en: "No human power can reverse death", ur: "کوئی انسانی طاقت موت کو پلٹ نہیں سکتی" }, ayahs: [87] }
      ]
    }
  },

  relationships: [
    { from: "Three Groups", to: "Final Abode", type: "consequence", description: { en: "Classification determines eternal destination", ur: "درجہ بندی ابدی ٹھکانا طے کرتی ہے" } },
    { from: "Al-Sabiqun", to: "Highest Paradise", type: "reward", description: { en: "Foremost receive greatest rewards", ur: "سبقت لے جانے والوں کو سب سے بڑا اجر ملتا ہے" } },
    { from: "First Creation", to: "Resurrection", type: "proof", description: { en: "If created once, can be recreated", ur: "اگر ایک بار پیدا کیا تو دوبارہ بنایا جا سکتا ہے" } },
    { from: "Crops/Water/Fire", to: "Divine Power", type: "evidence", description: { en: "Daily miracles prove resurrection", ur: "روزمرہ معجزات قیامت کا ثبوت ہیں" } },
    { from: "Quran", to: "Pure Ones", type: "requirement", description: { en: "Only purified touch the original", ur: "صرف پاک لوگ اصل نسخے کو چھوتے ہیں" } },
    { from: "Death Moment", to: "Human Helplessness", type: "demonstration", description: { en: "Cannot stop or reverse death", ur: "موت کو روکنا یا پلٹنا ممکن نہیں" } },
    { from: "Luxury Before", to: "Punishment After", type: "reversal", description: { en: "Worldly ease becomes eternal torment", ur: "دنیاوی آرام ابدی عذاب بن جاتا ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Cosmic Event to Individual Reckoning", ur: "کائناتی واقعے سے انفرادی حساب تک" },
    stages: [
      { name: "The Event", ayahs: [1, 2, 3, 4, 5, 6], description: { en: "When Al-Waqi'ah occurs", ur: "جب واقعہ (قیامت) واقع ہو گی" } },
      { name: "Three Groups Named", ayahs: [7, 8, 9, 10, 11], description: { en: "Right, Left, Foremost", ur: "دائیں والے، بائیں والے، سبقت لے جانے والے" } },
      { name: "Sabiqun's Rewards", ayahs: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], description: { en: "Foremost in gardens", ur: "سبقت لے جانے والے باغات میں" } },
      { name: "Right Hand Rewards", ayahs: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], description: { en: "Companions of Right blessed", ur: "دائیں ہاتھ والوں کو نعمتیں" } },
      { name: "Left Hand Punishment", ayahs: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56], description: { en: "Scorching wind and zaqqum", ur: "جھلسانے والی ہوا اور زقوم" } },
      { name: "Proof: Creation", ayahs: [57, 58, 59, 60, 61, 62], description: { en: "You were created from sperm", ur: "تم نطفے سے پیدا کیے گئے" } },
      { name: "Proof: Agriculture", ayahs: [63, 64, 65, 66, 67], description: { en: "You don't make crops grow", ur: "تم فصلیں نہیں اُگاتے" } },
      { name: "Proof: Water", ayahs: [68, 69, 70], description: { en: "You don't bring down rain", ur: "تم بارش نہیں برساتے" } },
      { name: "Proof: Fire", ayahs: [71, 72, 73, 74], description: { en: "You don't create fire's tree", ur: "تم آگ کا درخت نہیں بناتے" } },
      { name: "Quran's Honor", ayahs: [75, 76, 77, 78, 79, 80, 81, 82], description: { en: "Noble Quran from Allah", ur: "اللہ کی طرف سے عزت والا قرآن" } },
      { name: "Death Scene", ayahs: [83, 84, 85, 86, 87], description: { en: "Soul at throat, you watch", ur: "روح حلق تک پہنچے، تم دیکھتے ہو" } },
      { name: "Final Three Groups", ayahs: [88, 89, 90, 91, 92, 93, 94, 95, 96], description: { en: "Each group's fate summarized", ur: "ہر گروہ کے انجام کا خلاصہ" } }
    ]
  },

  uniqueInsight: {
    title: { en: "The Soul at the Throat", ur: "حلق تک پہنچتی روح" },
    insight: { en: "Verses 83-87 paint a vivid scene of death: the soul reaches the throat, family watches helplessly, and Allah challenges: if you're not subject to judgment, bring the soul back. This confronts human arrogance with ultimate powerlessness. The phrase 'We are nearer to him than you, but you do not see' (v.85) reminds us that angels of death are present though invisible. The rhetorical challenge—'why don't you return the soul if you are truthful?'—demolishes any illusion of human control over life and death. This passage is why many scholars recommend reciting Al-Waqi'ah daily as preparation for death.", ur: "آیات 83-87 موت کا ایک واضح منظر پیش کرتی ہیں: روح حلق تک پہنچتی ہے، خاندان بے بسی سے دیکھتا ہے، اور اللہ چیلنج دیتا ہے: اگر تم حساب کے پابند نہیں تو روح واپس لاؤ۔ یہ انسانی تکبر کو حتمی بے بسی کا سامنا کراتا ہے۔ 'ہم اس سے تمہاری نسبت زیادہ قریب ہیں مگر تم دیکھتے نہیں' (آیت 85) یاد دلاتا ہے کہ موت کے فرشتے موجود ہیں حالانکہ نظر نہیں آتے۔ بلاغتی چیلنج - 'اگر سچے ہو تو روح واپس کیوں نہیں لاتے؟' - زندگی اور موت پر انسانی قابو کے ہر فریب کو توڑ دیتا ہے۔" },
    arabicTerm: "فَلَوْلَا إِذَا بَلَغَتِ الْحُلْقُومَ وَأَنتُمْ حِينَئِذٍ تَنظُرُونَ",
    rootMeaning: { en: "ح-ل-ق-م (throat/gullet) - the final passage of the soul", ur: "ح-ل-ق-م (حلق/گلا) - روح کا آخری گزر گاہ" },
    keyAyah: 83
  },

  historicalContext: {
    revelationPeriod: "Makkan period",
    occasion: { en: "Revealed to establish the reality of resurrection and judgment, which the Quraysh denied. The Prophet (peace be upon him) said: 'Whoever recites Surah Al-Waqi'ah every night will never be afflicted by poverty.'", ur: "قیامت اور حساب کی حقیقت ثابت کرنے کے لیے نازل ہوئی جسے قریش نے جھٹلایا تھا۔ نبی صلی اللہ علیہ وسلم نے فرمایا: 'جو سورة الواقعہ ہر رات پڑھے اسے کبھی فقر نہیں ہو گا۔'" },
    note: { en: "This surah is distinctive for dividing humanity into three groups rather than two, introducing the elite 'Sabiqun' category. The four proofs of resurrection (creation, crops, water, fire) use daily observations to demonstrate Allah's power over life and death.", ur: "یہ سورة دو کی بجائے تین گروہوں میں انسانیت کی تقسیم کے لیے منفرد ہے، 'سابقون' کا اعلیٰ درجہ متعارف کراتی ہے۔ قیامت کے چار دلائل (تخلیق، فصلیں، پانی، آگ) روزمرہ مشاہدات استعمال کر کے زندگی اور موت پر اللہ کی قدرت ثابت کرتے ہیں۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Rhetorical Opening", description: "إِذَا وَقَعَتِ الْوَاقِعَةُ", example: { en: "When the Event occurs", ur: "جب واقعہ واقع ہو جائے" }, ayah: 1 },
      { name: "Triple Classification", description: "Three groups instead of usual two", pattern: { en: "Sabiqun, Right, Left", ur: "سابقون، دائیں والے، بائیں والے" }, ayahs: [7, 8, 9, 10] },
      { name: "Repeated Questions", description: "أَأَنتُمْ تَخْلُقُونَهُ... أَأَنتُمْ تَزْرَعُونَهُ", example: { en: "Do YOU create/grow it?", ur: "کیا تم بناتے/اُگاتے ہو؟" }, ayahs: [59, 64, 69, 72] },
      { name: "Oath Structure", description: "فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ", example: { en: "By positions of stars", ur: "ستاروں کے مقامات کی قسم" }, ayah: 75 },
      { name: "Conditional Challenge", description: "فَلَوْلَا... تُرْجِعُونَهَا", example: { en: "Why don't you return it?", ur: "تم اسے واپس کیوں نہیں لاتے؟" }, ayah: 87 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 55, name: "Ar-Rahman", relationship: { en: "Both describe Paradise rewards in detail", ur: "دونوں جنت کے انعامات کا تفصیلی بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 78, name: "An-Naba", relationship: { en: "Both focus on Day of Judgment", ur: "دونوں یومِ قیامت پر مرکوز ہیں" }, type: "thematic_parallel" },
      { surah: 81, name: "At-Takwir", relationship: { en: "Both describe cosmic events at end times", ur: "دونوں آخری وقت کے کائناتی واقعات بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 44, name: "Ad-Dukhan", relationship: { en: "Both mention tree of Zaqqum", ur: "دونوں زقوم کے درخت کا ذکر کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 57, name: "Al-Hadid", relationship: { en: "Following surah, shifts to Medinan legislation", ur: "اگلی سورة، مدنی احکام کی طرف منتقل" }, type: "sequential_relationship" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Strive to be among the Foremost", ur: "سبقت لے جانے والوں میں شامل ہونے کی کوشش کرو" }, how: { en: "Go beyond minimum obligations, excel in worship and service", ur: "کم از کم فرائض سے آگے بڑھو، عبادت اور خدمت میں عمدگی اختیار کرو" }, verse: "56:10-12" },
      { principle: { en: "Don't be deceived by luxury", ur: "عیش و عشرت سے دھوکا نہ کھاؤ" }, how: { en: "Worldly comfort led the Left to heedlessness", ur: "دنیاوی آرام نے بائیں والوں کو غفلت میں ڈالا" }, verse: "56:45" },
      { principle: { en: "Recognize Allah in daily life", ur: "روزمرہ زندگی میں اللہ کو پہچانو" }, how: { en: "Every crop, drink of water, and fire is from Him", ur: "ہر فصل، پانی کا گھونٹ اور آگ اسی کی طرف سے ہے" }, verse: "56:63-73" },
      { principle: { en: "Honor the Quran", ur: "قرآن کی تعظیم کرو" }, how: { en: "Approach it with purity and reverence", ur: "پاکیزگی اور تعظیم کے ساتھ قرآن کے قریب آؤ" }, verse: "56:77-79" },
      { principle: { en: "Prepare for death", ur: "موت کی تیاری کرو" }, how: { en: "Remember the soul at the throat - no one can prevent death", ur: "حلق تک پہنچتی روح یاد رکھو - کوئی موت نہیں روک سکتا" }, verse: "56:83-87" },
      { principle: { en: "Recite regularly", ur: "باقاعدگی سے تلاوت کرو" }, how: { en: "Prophet recommended nightly recitation for protection from poverty", ur: "نبی صلی اللہ علیہ وسلم نے فقر سے حفاظت کے لیے رات کو تلاوت کی سفارش کی" }, verse: "56:1" }
    ]
  }
};

export default ONTOLOGY;
