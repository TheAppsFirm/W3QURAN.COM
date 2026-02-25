/**
 * Surah Al-Hujurat (The Chambers) - Surah 49
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 49,
  surahName: "Al-Hujurat",
  surahNameArabic: "الحجرات",
  totalAyahs: 18,
  revelationType: "Medinan",
  mainTheme: "Social Ethics: Etiquette with the Prophet, Verifying News, Brotherhood, Avoiding Mockery and Backbiting, Unity of Humanity",

  categories: {
    etiquetteWithProphet: {
      name: "Etiquette with the Prophet",
      nameUr: "نبی ﷺ سے آداب",
      nameAr: "أدب مع الرسول",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Not Preceding Allah and Messenger", arabic: "لا تقدموا بين يدي الله ورسوله", meaning: { en: "Don't put yourselves ahead of Allah and His Messenger", ur: "اللہ اور اس کے رسول سے آگے نہ بڑھو" }, ayahs: [1] },
        { term: "Lowering Voice", arabic: "غض الصوت", meaning: { en: "Lower your voices before the Prophet", ur: "نبی ﷺ کے سامنے اپنی آواز دھیمی رکھو" }, ayahs: [2, 3] },
        { term: "Hearts Tested for Taqwa", arabic: "امتحن الله قلوبهم للتقوى", meaning: { en: "Those who lower voices have hearts tested for piety", ur: "جو آواز دھیمی رکھتے ہیں ان کے دل تقویٰ کے لیے آزمائے گئے ہیں" }, ayahs: [3] },
        { term: "Calling from Behind Chambers", arabic: "ينادونك من وراء الحجرات", meaning: { en: "Those who call from behind private chambers", ur: "جو حجروں کے پیچھے سے پکارتے ہیں" }, ayahs: [4] },
        { term: "Waiting Patiently", arabic: "الصبر حتى يخرج", meaning: { en: "Better to wait until he comes out", ur: "صبر سے انتظار کرنا بہتر ہے یہاں تک کہ وہ باہر آئیں" }, ayahs: [5] }
      ]
    },
    verifyingNews: {
      name: "Verifying News and Information",
      nameUr: "خبروں اور اطلاعات کی تصدیق",
      nameAr: "التثبت من الأخبار",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Fasiq's Report", arabic: "نبأ الفاسق", meaning: { en: "News brought by a corrupt person", ur: "فاسق کی لائی ہوئی خبر" }, ayahs: [6] },
        { term: "Tabayyun", arabic: "التبين", meaning: { en: "Verification before action", ur: "عمل سے پہلے تصدیق" }, ayahs: [6] },
        { term: "Harming in Ignorance", arabic: "إصابة قوم بجهالة", meaning: { en: "Harming people unknowingly", ur: "لاعلمی میں لوگوں کو نقصان پہنچانا" }, ayahs: [6] },
        { term: "Regret", arabic: "الندامة", meaning: { en: "Becoming regretful over hasty action", ur: "جلد بازی میں کیے گئے عمل پر پشیمانی" }, ayahs: [6] }
      ]
    },
    faithBeautified: {
      name: "Faith Beautified in Hearts",
      nameUr: "دلوں میں ایمان کی آرائش",
      nameAr: "تزيين الإيمان",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Messenger Among You", arabic: "فيكم رسول الله", meaning: { en: "The Messenger is among you", ur: "تم میں اللہ کا رسول موجود ہے" }, ayahs: [7] },
        { term: "Allah Beautified Faith", arabic: "حبب إليكم الإيمان وزينه", meaning: { en: "Allah made faith beloved and beautified it", ur: "اللہ نے ایمان کو تمہارے لیے محبوب اور خوبصورت بنایا" }, ayahs: [7] },
        { term: "Hatred of Disbelief", arabic: "كره إليكم الكفر والفسوق والعصيان", meaning: { en: "Made disbelief, sin, and disobedience hateful", ur: "کفر، فسق اور نافرمانی کو ناپسندیدہ بنایا" }, ayahs: [7] },
        { term: "Ar-Rashidun", arabic: "الراشدون", meaning: { en: "The rightly guided ones", ur: "ہدایت یافتہ لوگ" }, ayahs: [7] }
      ]
    },
    conflictResolution: {
      name: "Conflict Resolution Among Believers",
      nameUr: "مومنین کے درمیان تنازعات کا حل",
      nameAr: "إصلاح ذات البين",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Two Groups Fighting", arabic: "طائفتان من المؤمنين اقتتلوا", meaning: { en: "If two parties of believers fight", ur: "اگر مومنوں کے دو گروہ لڑ پڑیں" }, ayahs: [9] },
        { term: "Islah", arabic: "الإصلاح", meaning: { en: "Making reconciliation between them", ur: "ان میں صلح کرانا" }, ayahs: [9, 10] },
        { term: "Fighting the Aggressor", arabic: "قتال الباغية", meaning: { en: "Fight the transgressing party", ur: "زیادتی کرنے والے گروہ سے لڑو" }, ayahs: [9] },
        { term: "Return to Allah's Command", arabic: "الفيء إلى أمر الله", meaning: { en: "Until it returns to Allah's command", ur: "یہاں تک کہ وہ اللہ کے حکم کی طرف لوٹ آئے" }, ayahs: [9] },
        { term: "Justice in Reconciliation", arabic: "العدل في الإصلاح", meaning: { en: "Reconcile with justice", ur: "انصاف سے صلح کرو" }, ayahs: [9] }
      ]
    },
    brotherhood: {
      name: "Brotherhood of Believers",
      nameUr: "مومنین کا بھائی چارہ",
      nameAr: "أخوة المؤمنين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Believers Are Brothers", arabic: "إنما المؤمنون إخوة", meaning: { en: "Believers are but brothers", ur: "مومن آپس میں بھائی بھائی ہیں" }, ayahs: [10] },
        { term: "Reconcile Brothers", arabic: "أصلحوا بين أخويكم", meaning: { en: "Make peace between your brothers", ur: "اپنے بھائیوں میں صلح کرو" }, ayahs: [10] },
        { term: "Taqwa for Mercy", arabic: "التقوى للرحمة", meaning: { en: "Fear Allah that you may receive mercy", ur: "اللہ سے ڈرو تاکہ تم پر رحم کیا جائے" }, ayahs: [10] }
      ]
    },
    socialProhibitions: {
      name: "Social Prohibitions",
      nameUr: "معاشرتی ممانعتیں",
      nameAr: "المنهيات الاجتماعية",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "No Mockery", arabic: "النهي عن السخرية", meaning: { en: "A people should not mock another", ur: "کوئی قوم دوسری قوم کا مذاق نہ اڑائے" }, ayahs: [11] },
        { term: "Men Mocking Men", arabic: "سخرية الرجال", meaning: { en: "Men should not mock men", ur: "مرد مردوں کا مذاق نہ اڑائیں" }, ayahs: [11] },
        { term: "Women Mocking Women", arabic: "سخرية النساء", meaning: { en: "Women should not mock women", ur: "عورتیں عورتوں کا مذاق نہ اڑائیں" }, ayahs: [11] },
        { term: "The Mocked May Be Better", arabic: "عسى أن يكونوا خيرا منهم", meaning: { en: "Perhaps they are better than them", ur: "شاید وہ ان سے بہتر ہوں" }, ayahs: [11] },
        { term: "No Self-Defamation", arabic: "لا تلمزوا أنفسكم", meaning: { en: "Do not defame one another", ur: "ایک دوسرے پر طعنہ نہ لگاؤ" }, ayahs: [11] },
        { term: "No Evil Nicknames", arabic: "لا تنابزوا بالألقاب", meaning: { en: "Do not call each other by offensive nicknames", ur: "ایک دوسرے کو برے لقب نہ دو" }, ayahs: [11] },
        { term: "Fisq After Iman", arabic: "الفسوق بعد الإيمان", meaning: { en: "Wretched is the name of disobedience after faith", ur: "ایمان کے بعد فسق کا نام بہت برا ہے" }, ayahs: [11] }
      ]
    },
    avoidingSuspicion: {
      name: "Avoiding Suspicion and Backbiting",
      nameUr: "بدگمانی اور غیبت سے اجتناب",
      nameAr: "اجتناب الظن والغيبة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Avoid Much Suspicion", arabic: "اجتنبوا كثيرا من الظن", meaning: { en: "Avoid much negative assumption", ur: "بہت سے بدگمانیوں سے بچو" }, ayahs: [12] },
        { term: "Some Suspicion is Sin", arabic: "بعض الظن إثم", meaning: { en: "Some suspicion is indeed sinful", ur: "بعض گمان واقعی گناہ ہیں" }, ayahs: [12] },
        { term: "No Spying", arabic: "لا تجسسوا", meaning: { en: "Do not spy on one another", ur: "ایک دوسرے کی ٹوہ میں نہ لگو" }, ayahs: [12] },
        { term: "No Backbiting", arabic: "لا يغتب بعضكم بعضا", meaning: { en: "Do not backbite one another", ur: "ایک دوسرے کی غیبت نہ کرو" }, ayahs: [12] },
        { term: "Eating Dead Brother's Flesh", arabic: "أكل لحم الأخ ميتا", meaning: { en: "Like eating flesh of dead brother", ur: "اپنے مردہ بھائی کا گوشت کھانے جیسا" }, ayahs: [12] },
        { term: "Disgust at Backbiting", arabic: "فكرهتموه", meaning: { en: "You would hate it", ur: "تم اسے ناپسند کرو گے" }, ayahs: [12] }
      ]
    },
    humanUnity: {
      name: "Unity of Humanity",
      nameUr: "انسانیت کی وحدت",
      nameAr: "وحدة البشرية",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Single Male and Female", arabic: "من ذكر وأنثى", meaning: { en: "Created from one male and one female", ur: "ایک مرد اور ایک عورت سے پیدا کیا" }, ayahs: [13] },
        { term: "Nations and Tribes", arabic: "شعوبا وقبائل", meaning: { en: "Made you peoples and tribes", ur: "تمہیں قومیں اور قبیلے بنایا" }, ayahs: [13] },
        { term: "Li-Ta'arafu", arabic: "لتعارفوا", meaning: { en: "That you may know one another", ur: "تاکہ تم ایک دوسرے کو پہچانو" }, ayahs: [13] },
        { term: "Honor by Taqwa", arabic: "أكرمكم عند الله أتقاكم", meaning: { en: "Most honorable is the most righteous", ur: "اللہ کے نزدیک سب سے معزز وہ ہے جو سب سے زیادہ متقی ہے" }, ayahs: [13] },
        { term: "Allah is Knowing", arabic: "إن الله عليم خبير", meaning: { en: "Allah is All-Knowing, All-Aware", ur: "اللہ سب جاننے والا، باخبر ہے" }, ayahs: [13] }
      ]
    },
    trueIman: {
      name: "True Faith vs Claimed Faith",
      nameAr: "الإيمان الحقيقي والمدعى",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Islam vs Iman", arabic: "الإسلام والإيمان", meaning: { en: "Distinction between submission and true faith", ur: "اسلام (ظاہری تابعداری) اور ایمان (سچے یقین) میں فرق" }, ayahs: [14] },
        { term: "Bedouins' Claim", arabic: "قالت الأعراب آمنا", meaning: { en: "Bedouins say 'We believe'", ur: "اعراب کہتے ہیں 'ہم ایمان لائے'" }, ayahs: [14] },
        { term: "Say Aslamna", arabic: "قولوا أسلمنا", meaning: { en: "Say 'We have submitted'", ur: "کہو 'ہم نے اطاعت قبول کی'" }, ayahs: [14] },
        { term: "Faith Not Yet Entered Hearts", arabic: "لما يدخل الإيمان في قلوبكم", meaning: { en: "Faith has not yet entered your hearts", ur: "ایمان ابھی تمہارے دلوں میں داخل نہیں ہوا" }, ayahs: [14] },
        { term: "True Believers", arabic: "المؤمنون حقا", meaning: { en: "Those who truly believe", ur: "جو حقیقی مومن ہیں" }, ayahs: [15] },
        { term: "Believe Then Don't Doubt", arabic: "آمنوا ثم لم يرتابوا", meaning: { en: "Believed then never doubted", ur: "ایمان لائے پھر کبھی شک نہیں کیا" }, ayahs: [15] },
        { term: "Jihad with Wealth and Lives", arabic: "الجهاد بالأموال والأنفس", meaning: { en: "Strive with wealth and lives", ur: "مال اور جانوں سے جہاد کیا" }, ayahs: [15] },
        { term: "As-Sadiqun", arabic: "الصادقون", meaning: { en: "Those are the truthful ones", ur: "یہی سچے لوگ ہیں" }, ayahs: [15] }
      ]
    },
    divineKnowledge: {
      name: "Divine Knowledge",
      nameAr: "علم الله",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Teaching Allah Your Religion?", arabic: "أتعلمون الله بدينكم", meaning: { en: "Would you inform Allah of your religion?", ur: "کیا تم اللہ کو اپنے دین کے بارے میں بتاؤ گے؟" }, ayahs: [16] },
        { term: "Allah Knows All", arabic: "يعلم ما في السماوات والأرض", meaning: { en: "Allah knows what is in heavens and earth", ur: "اللہ جانتا ہے جو آسمانوں اور زمین میں ہے" }, ayahs: [16, 18] },
        { term: "Favor of Guidance", arabic: "منة الهداية", meaning: { en: "Do not consider your Islam a favor", ur: "اپنے اسلام کو احسان نہ جتاؤ" }, ayahs: [17] },
        { term: "Allah's Favor", arabic: "بل الله يمن عليكم", meaning: { en: "Rather Allah has favored you", ur: "بلکہ اللہ نے تم پر احسان کیا ہے" }, ayahs: [17] },
        { term: "Ghayb al-Samawat", arabic: "غيب السماوات والأرض", meaning: { en: "Unseen of heavens and earth", ur: "آسمانوں اور زمین کا غیب" }, ayahs: [18] },
        { term: "Allah Sees All Actions", arabic: "بصير بما تعملون", meaning: { en: "Allah is Seeing of what you do", ur: "اللہ تمہارے اعمال دیکھنے والا ہے" }, ayahs: [18] }
      ]
    }
  },

  relationships: [
    { from: "Etiquette with Prophet", to: "Taqwa", type: "result", description: { en: "Proper conduct indicates hearts tested for piety", ur: "مناسب ادب تقویٰ کے لیے آزمائے گئے دلوں کی علامت ہے" } },
    { from: "Unverified News", to: "Regret", type: "consequence", description: { en: "Acting on unverified news leads to regret", ur: "بغیر تصدیق خبر پر عمل پشیمانی کا سبب بنتا ہے" } },
    { from: "Verification", to: "Justice", type: "protection", description: { en: "Tabayyun protects from harming innocents", ur: "تحقیق بے گناہوں کو نقصان سے بچاتی ہے" } },
    { from: "Believers Fighting", to: "Reconciliation", type: "obligation", description: { en: "Community must reconcile fighting parties", ur: "معاشرے پر لڑنے والوں میں صلح کرانا فرض ہے" } },
    { from: "Brotherhood", to: "Reconciliation", type: "foundation", description: { en: "Brotherhood necessitates making peace", ur: "بھائی چارہ صلح کرانا لازمی بناتا ہے" } },
    { from: "Mockery", to: "Possible Inferiority", type: "irony", description: { en: "The mocker may be worse than the mocked", ur: "مذاق اڑانے والا مذاق کے نشانے سے بدتر ہو سکتا ہے" } },
    { from: "Backbiting", to: "Eating Dead Flesh", type: "analogy", description: { en: "Backbiting is like consuming dead brother's flesh", ur: "غیبت اپنے مردہ بھائی کا گوشت کھانے جیسی ہے" } },
    { from: "Nations and Tribes", to: "Mutual Recognition", type: "purpose", description: { en: "Diversity exists for mutual knowing, not superiority", ur: "تنوع باہمی پہچان کے لیے ہے، برتری کے لیے نہیں" } },
    { from: "Taqwa", to: "True Honor", type: "measure", description: { en: "Honor is measured by piety, not lineage", ur: "عزت تقویٰ سے ناپی جاتی ہے، نسب سے نہیں" } },
    { from: "Islam", to: "Iman", type: "distinction", description: { en: "Outward submission differs from inner faith", ur: "ظاہری اطاعت باطنی ایمان سے مختلف ہے" } },
    { from: "True Faith", to: "No Doubt + Jihad", type: "evidence", description: { en: "True believers don't doubt and strive with everything", ur: "سچے مومن شک نہیں کرتے اور ہر چیز سے جہاد کرتے ہیں" } },
    { from: "Claiming Faith", to: "Divine Knowledge", type: "futility", description: { en: "Cannot inform Allah of what He already knows", ur: "جو اللہ پہلے سے جانتا ہے اسے بتانا بے فائدہ ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Prophetic Etiquette to Human Brotherhood", ur: "نبوی آداب سے انسانی بھائی چارے تک" },
    stages: [
      { name: "Etiquette with Allah and Messenger", ayahs: [1], description: { en: "Do not precede Allah and His Messenger in any matter", ur: "کسی بھی معاملے میں اللہ اور اس کے رسول سے آگے نہ بڑھو" } },
      { name: "Lowering Voices", ayahs: [2, 3], description: { en: "Lower voices before Prophet; those who do have hearts tested for taqwa", ur: "نبی ﷺ کے سامنے آواز دھیمی رکھو؛ ایسا کرنے والوں کے دل تقویٰ کے لیے آزمائے گئے ہیں" } },
      { name: "Calling from Chambers", ayahs: [4, 5], description: { en: "Those calling from behind chambers lack understanding; patience is better", ur: "حجروں کے پیچھے سے پکارنے والے سمجھ نہیں رکھتے؛ صبر بہتر ہے" } },
      { name: "Verifying News", ayahs: [6], description: { en: "Verify news from corrupt sources before acting", ur: "فاسق کی خبر پر عمل سے پہلے تصدیق کرو" } },
      { name: "Faith Beautified", ayahs: [7, 8], description: { en: "Allah made faith beloved and beautified in believers' hearts", ur: "اللہ نے ایمان کو مومنوں کے دلوں میں محبوب اور خوبصورت بنایا" } },
      { name: "Conflict Resolution", ayahs: [9], description: { en: "If believers fight, reconcile them; fight aggressors until they comply", ur: "اگر مومن لڑیں تو صلح کراؤ؛ زیادتی کرنے والے سے لڑو جب تک وہ نہ مانے" } },
      { name: "Brotherhood", ayahs: [10], description: { en: "Believers are brothers; reconcile between your brothers", ur: "مومن بھائی بھائی ہیں؛ اپنے بھائیوں میں صلح کرو" } },
      { name: "No Mockery or Nicknames", ayahs: [11], description: { en: "Don't mock, defame, or use offensive nicknames", ur: "مذاق نہ اڑاؤ، طعنہ نہ لگاؤ، برے لقب نہ دو" } },
      { name: "No Suspicion or Backbiting", ayahs: [12], description: { en: "Avoid suspicion, spying, and backbiting", ur: "بدگمانی، جاسوسی اور غیبت سے بچو" } },
      { name: "Unity of Humanity", ayahs: [13], description: { en: "Created from one pair; tribes for recognition; honor is by taqwa", ur: "ایک جوڑے سے پیدا کیا؛ قبیلے پہچان کے لیے؛ عزت تقویٰ سے ہے" } },
      { name: "Islam vs Iman", ayahs: [14, 15], description: { en: "Bedouins claimed faith; true believers don't doubt and strive", ur: "اعراب نے ایمان کا دعویٰ کیا؛ سچے مومن شک نہیں کرتے اور جدوجہد کرتے ہیں" } },
      { name: "Allah's Complete Knowledge", ayahs: [16, 17, 18], description: { en: "Allah knows all; guidance is His favor; He sees everything", ur: "اللہ سب جانتا ہے؛ ہدایت اس کا احسان ہے؛ وہ سب دیکھتا ہے" } }
    ]
  },

  uniqueInsight: {
    title: { en: "Honor is Only by Taqwa (إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ)", ur: "عزت صرف تقویٰ سے ہے (إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ)" },
    insight: { en: "Verse 13 revolutionized human social organization. In a world defined by tribal pride, racial superiority, and aristocratic lineage, this verse declared that all humanity came from one man and one woman. The diversity of nations and tribes exists not for competition but for 'ta'aruf'—mutual recognition and learning. The only criterion for honor with Allah is taqwa (God-consciousness), which is invisible to human eyes. No one can claim superiority based on birth, color, language, or wealth. The Prophet (peace be upon him) delivered this verse during his Farewell Pilgrimage, declaring: 'No Arab has superiority over a non-Arab, nor a non-Arab over an Arab; no white person over a black person, nor a black person over a white person—except by taqwa.' This verse remains Islam's definitive statement on human equality.", ur: "آیت 13 نے انسانی سماجی نظام میں انقلاب برپا کیا۔ ایک ایسی دنیا میں جہاں قبائلی فخر، نسلی برتری اور خاندانی حسب نسب سب کچھ تھا، اس آیت نے اعلان کیا کہ تمام انسانیت ایک مرد اور ایک عورت سے پیدا ہوئی۔ قوموں اور قبیلوں کا تنوع مقابلے کے لیے نہیں بلکہ 'تعارف' - باہمی پہچان اور سیکھنے کے لیے ہے۔ اللہ کے نزدیک عزت کا واحد معیار تقویٰ ہے جو انسانی آنکھوں سے نظر نہیں آتا۔ کوئی پیدائش، رنگ، زبان یا دولت کی بنیاد پر برتری کا دعویٰ نہیں کر سکتا۔ نبی ﷺ نے حجۃ الوداع میں فرمایا: 'کسی عربی کو عجمی پر فوقیت نہیں، نہ عجمی کو عربی پر؛ نہ گورے کو کالے پر، نہ کالے کو گورے پر - سوائے تقویٰ کے۔' یہ آیت اسلام کا انسانی مساوات کا حتمی بیان ہے۔" },
    arabicTerm: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ",
    rootMeaning: { en: "ع-ر-ف (to know, recognize) - Tribes exist for mutual recognition (ta'aruf), not pride", ur: "ع-ر-ف (جاننا، پہچاننا) - قبیلے باہمی تعارف کے لیے ہیں، فخر کے لیے نہیں" },
    keyAyah: 13
  },

  historicalContext: {
    revelationPeriod: { en: "Medinan period, after 9 AH (Year of Delegations)", ur: "مدنی دور، 9 ہجری کے بعد (سالِ وفود)" },
    occasion: { en: "Multiple incidents: (1) Some companions spoke ahead of the Prophet or raised their voices in his presence. (2) Al-Walid ibn Uqba brought false news about Banu al-Mustaliq, nearly causing war. (3) Bedouin delegations came claiming faith while having ulterior motives. (4) The incident of people calling the Prophet from outside his chambers. These events prompted guidance on social etiquette and community ethics.", ur: "متعدد واقعات: (1) بعض صحابہ نبی ﷺ سے پہلے بول پڑے یا ان کے سامنے آواز بلند کی۔ (2) ولید بن عقبہ بنو المصطلق کے بارے میں جھوٹی خبر لائے جس سے تقریباً جنگ ہو جاتی۔ (3) بدو وفود ایمان کا دعویٰ لے کر آئے جبکہ مخفی مقاصد تھے۔ (4) حجروں کے باہر سے نبی ﷺ کو پکارنے کا واقعہ۔ ان واقعات نے سماجی آداب اور معاشرتی اخلاقیات کی رہنمائی کا سبب بنا۔" },
    note: { en: "This surah is called 'Surah al-Akhlaq' (The Surah of Manners) because it establishes fundamental principles of Islamic social ethics. It addressed the new reality of diverse tribes and backgrounds joining Islam, establishing equality and proper conduct as foundations of the Muslim community.", ur: "اس سورت کو 'سورۃ الاخلاق' کہا جاتا ہے کیونکہ یہ اسلامی سماجی اخلاقیات کے بنیادی اصول قائم کرتی ہے۔ اس نے مختلف قبائل اور پس منظر کے لوگوں کے اسلام میں شامل ہونے کی نئی حقیقت کو مخاطب کیا اور مساوات اور مناسب طرزِ عمل کو مسلم معاشرے کی بنیاد قرار دیا۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Ya Ayyuhalladhina Amanu", description: "يا أيها الذين آمنوا", example: { en: "Five direct addresses to believers (1, 6, 9, 11, 12)", ur: "مومنوں کو پانچ بار براہ راست خطاب (1، 6، 9، 11، 12)" }, ayahs: [1, 6, 9, 11, 12] },
      { name: "Ya Ayyuhan-Nas", description: "يا أيها الناس", example: { en: "One universal address to all humanity", ur: "تمام انسانیت کو ایک عالمی خطاب" }, ayah: 13 },
      { name: "Vivid Analogy", description: "أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا", example: { en: "Backbiting as eating dead brother's flesh", ur: "غیبت کو مردہ بھائی کا گوشت کھانے سے تشبیہ" }, ayah: 12 },
      { name: "Rhetorical Question", description: "أَتُعَلِّمُونَ اللَّهَ بِدِينِكُمْ", example: { en: "Would you teach Allah your religion?", ur: "کیا تم اللہ کو اپنا دین سکھاؤ گے؟" }, ayah: 16 },
      { name: "Inna + Emphasis", description: "إنما المؤمنون إخوة", example: { en: "Believers are ONLY brothers", ur: "مومن صرف بھائی بھائی ہیں" }, ayah: 10 },
      { name: "Prohibition Series", description: "لا يسخر...لا تلمزوا...لا تنابزوا", example: { en: "Rapid-fire prohibitions", ur: "تیز تر ممانعتوں کا سلسلہ" }, ayah: 11 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 24, name: "An-Nur", relationship: "Both address social ethics, privacy, and backbiting", type: "thematic_parallel" },
      { surah: 33, name: "Al-Ahzab", relationship: "Both address etiquette with the Prophet", type: "thematic_parallel" },
      { surah: 48, name: "Al-Fath", relationship: "Both from late Medinan period; victory and community consolidation", type: "historical_parallel" },
      { surah: 58, name: "Al-Mujadila", relationship: "Both address social protocols and private conversations", type: "thematic_parallel" },
      { surah: 60, name: "Al-Mumtahina", relationship: "Both from Year of Delegations; community relations", type: "historical_parallel" },
      { surah: 104, name: "Al-Humazah", relationship: "Both condemn mockery and defamation", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
