/**
 * Surah Muhammad (The Prophet Muhammad) - Surah 47
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 47,
  surahName: "Muhammad",
  surahNameArabic: "محمد",
  totalAyahs: 38,
  revelationType: "Medinan",
  mainTheme: "Fighting in Allah's Cause, Exposing Hypocrites, and Paradise's Promise",

  categories: {
    fightingInAllahsCause: {
      name: "Fighting in Allah's Cause",
      nameUr: "اللہ کی راہ میں جہاد",
      nameAr: "القتال في سبيل الله",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Meeting in Battle", arabic: "لقاء الكفار", meaning: { en: "When you meet disbelievers in battle", ur: "جب تم کافروں سے میدانِ جنگ میں ملو" }, ayahs: [4], description: { en: "Rules of engagement in warfare", ur: "جنگ میں شرکت کے احکام" } },
        { term: "Strike the Necks", arabic: "ضرب الرقاب", meaning: { en: "Strike at their necks", ur: "ان کی گردنیں مارو" }, ayahs: [4], description: { en: "Decisive action in combat", ur: "جنگ میں فیصلہ کن کارروائی" } },
        { term: "Taking Captives", arabic: "شد الوثاق", meaning: { en: "Bind firmly after overwhelming them", ur: "غلبہ حاصل کرنے کے بعد مضبوطی سے باندھو" }, ayahs: [4], description: { en: "Proper treatment of prisoners", ur: "قیدیوں کے ساتھ مناسب سلوک" } },
        { term: "Ransom or Grace", arabic: "المن أو الفداء", meaning: { en: "Release graciously or for ransom", ur: "احسان کے طور پر یا فدیہ لے کر رہا کرو" }, ayahs: [4], description: { en: "Options for prisoner release", ur: "قیدیوں کی رہائی کے اختیارات" } },
        { term: "War Ends", arabic: "تضع الحرب أوزارها", meaning: { en: "Until war lays down its burdens", ur: "یہاں تک کہ جنگ اپنے بوجھ رکھ دے" }, ayahs: [4], description: { en: "Fighting is not perpetual", ur: "جنگ ہمیشہ کے لیے نہیں ہے" } },
        { term: "Testing Believers", arabic: "ابتلاء المؤمنين", meaning: { en: "Allah tests through fighting", ur: "اللہ جنگ کے ذریعے آزماتا ہے" }, ayahs: [4], description: { en: "Battle as divine test", ur: "جنگ بطور الٰہی آزمائش" } },
        { term: "Help Allah's Cause", arabic: "نصر الله", meaning: { en: "If you help Allah, He helps you", ur: "اگر تم اللہ کی مدد کرو تو وہ تمہاری مدد کرے گا" }, ayahs: [7], description: { en: "Reciprocal divine support", ur: "باہمی الٰہی نصرت" } },
        { term: "Firm Feet", arabic: "يثبت أقدامكم", meaning: { en: "He will plant your feet firmly", ur: "وہ تمہارے قدم جما دے گا" }, ayahs: [7], description: { en: "Steadfastness in battle", ur: "میدانِ جنگ میں ثابت قدمی" } }
      ]
    },
    disbelieversCondemned: {
      name: "Fate of Disbelievers",
      nameUr: "کافروں کا انجام",
      nameAr: "مصير الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Deeds Made Worthless", arabic: "أضل أعمالهم", meaning: { en: "Their deeds are lost", ur: "ان کے اعمال ضائع ہو گئے" }, ayahs: [1, 8, 9, 32], description: { en: "Good works nullified by disbelief", ur: "کفر کی وجہ سے نیک اعمال ضائع" } },
        { term: "Following Falsehood", arabic: "اتباع الباطل", meaning: { en: "They follow falsehood", ur: "وہ باطل کی پیروی کرتے ہیں" }, ayahs: [3], description: { en: "Adherence to error", ur: "غلطی پر قائم رہنا" } },
        { term: "Destruction in Anger", arabic: "الهلاك بالغضب", meaning: { en: "Wretched and deeds gone astray", ur: "بدبخت اور اعمال برباد" }, ayahs: [8], description: { en: "Divine anger upon them", ur: "ان پر الٰہی غضب" } },
        { term: "Hatred of Revelation", arabic: "كراهية ما أنزل الله", meaning: { en: "They hate what Allah revealed", ur: "جو اللہ نے نازل کیا اس سے نفرت کرتے ہیں" }, ayahs: [9, 26], description: { en: "Rejection of divine message", ur: "الٰہی پیغام کا انکار" } },
        { term: "Travel and See", arabic: "السير في الأرض", meaning: { en: "Have they not traveled to see?", ur: "کیا انہوں نے زمین میں سفر نہیں کیا؟" }, ayahs: [10], description: { en: "Lessons from destroyed nations", ur: "تباہ شدہ اقوام سے عبرت" } },
        { term: "No Protector", arabic: "لا مولى لهم", meaning: { en: "Disbelievers have no protector", ur: "کافروں کا کوئی حمایتی نہیں" }, ayahs: [11], description: { en: "Abandoned by false gods", ur: "جھوٹے معبودوں نے بے سہارا چھوڑا" } },
        { term: "Like Cattle", arabic: "كالأنعام", meaning: { en: "They eat and enjoy like cattle", ur: "وہ جانوروں کی طرح کھاتے اور مزے کرتے ہیں" }, ayahs: [12], description: { en: "Living without purpose", ur: "بے مقصد زندگی گزارنا" } },
        { term: "Angels Striking", arabic: "ضرب الملائكة", meaning: { en: "Angels striking faces and backs", ur: "فرشتے چہروں اور پیٹھوں پر مارتے ہیں" }, ayahs: [27], description: { en: "Punishment at death", ur: "موت کے وقت عذاب" } }
      ]
    },
    hypocritesExposed: {
      name: "Hypocrites Exposed",
      nameUr: "منافقین کا بے نقاب ہونا",
      nameAr: "كشف المنافقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Disease in Hearts", arabic: "في قلوبهم مرض", meaning: { en: "Those with disease in their hearts", ur: "جن کے دلوں میں بیماری ہے" }, ayahs: [20, 29], description: { en: "Spiritual sickness of hypocrisy", ur: "نفاق کی روحانی بیماری" } },
        { term: "Afraid of Surah", arabic: "الخوف من السورة", meaning: { en: "Hypocrites fear revealing surah", ur: "منافقین سورت کے نزول سے ڈرتے ہیں" }, ayahs: [20], description: { en: "Fear of exposure", ur: "بے نقاب ہونے کا خوف" } },
        { term: "Crooked Looks", arabic: "نظر المغشي عليه", meaning: { en: "Looking like one fainting at death", ur: "موت سے بے ہوش ہونے والے کی طرح دیکھنا" }, ayahs: [20], description: { en: "Terror at fighting command", ur: "جہاد کے حکم پر دہشت" } },
        { term: "Better for Them", arabic: "طاعة وقول معروف", meaning: { en: "Obedience and good words better", ur: "اطاعت اور اچھی بات بہتر تھی" }, ayahs: [21], description: { en: "What they should have done", ur: "جو انہیں کرنا چاہیے تھا" } },
        { term: "Spread Corruption", arabic: "الفساد في الأرض", meaning: { en: "If you turn away, you spread corruption", ur: "اگر تم منہ موڑو تو زمین میں فساد پھیلاؤ گے" }, ayahs: [22], description: { en: "Hypocrisy leads to evil", ur: "نفاق برائی کی طرف لے جاتا ہے" } },
        { term: "Sever Kinship", arabic: "تقطيع الأرحام", meaning: { en: "Cut ties of kinship", ur: "رشتے ناتے توڑنا" }, ayahs: [22], description: { en: "Breaking family bonds", ur: "خاندانی رشتے توڑنا" } },
        { term: "Sealed Hearts", arabic: "طبع على القلوب", meaning: { en: "Allah sealed their hearts", ur: "اللہ نے ان کے دلوں پر مہر لگا دی" }, ayahs: [16], description: { en: "Divine punishment for rejection", ur: "انکار کی سزا کے طور پر الٰہی مہر" } },
        { term: "Private Counsel", arabic: "النجوى", meaning: { en: "Secret talks after the Prophet", ur: "نبی ﷺ کے بعد خفیہ مشورے" }, ayahs: [16], description: { en: "Plotting after guidance given", ur: "ہدایت ملنے کے بعد سازشیں" } },
        { term: "Satan's Temptation", arabic: "تسويل الشيطان", meaning: { en: "Satan enticed them", ur: "شیطان نے انہیں بہکایا" }, ayahs: [25], description: { en: "Shaytan leading astray", ur: "شیطان کا گمراہ کرنا" } },
        { term: "Extended False Hope", arabic: "أملى لهم", meaning: { en: "Prolonged false hope for them", ur: "ان کے لیے جھوٹی امیدیں لمبی کر دیں" }, ayahs: [25], description: { en: "Given rope to hang themselves", ur: "ڈھیل دی گئی تاکہ خود ہلاک ہوں" } },
        { term: "Known by Tone", arabic: "لحن القول", meaning: { en: "Known by their tone of speech", ur: "بات کے لہجے سے پہچانے جاتے ہیں" }, ayahs: [30], description: { en: "Hypocrisy revealed in speech patterns", ur: "گفتگو کے انداز سے نفاق ظاہر" } }
      ]
    },
    paradiseDescription: {
      name: "Paradise Description",
      nameUr: "جنت کا بیان",
      nameAr: "وصف الجنة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Rivers of Water", arabic: "أنهار من ماء", meaning: { en: "Rivers of water never stale", ur: "پانی کی نہریں جو کبھی خراب نہیں ہوتیں" }, ayahs: [15], description: { en: "Pure, unchanging water", ur: "خالص، نہ بدلنے والا پانی" } },
        { term: "Rivers of Milk", arabic: "أنهار من لبن", meaning: { en: "Rivers of milk unchanged in taste", ur: "دودھ کی نہریں جن کا ذائقہ نہیں بدلتا" }, ayahs: [15], description: { en: "Eternal fresh milk", ur: "ہمیشہ تازہ دودھ" } },
        { term: "Rivers of Wine", arabic: "أنهار من خمر", meaning: { en: "Rivers of wine delicious to drink", ur: "شراب کی نہریں جو پینے والوں کے لیے لذیذ" }, ayahs: [15], description: { en: "Pure, pleasurable wine", ur: "خالص، لذت بخش شراب" } },
        { term: "Rivers of Honey", arabic: "أنهار من عسل", meaning: { en: "Rivers of purified honey", ur: "صاف شہد کی نہریں" }, ayahs: [15], description: { en: "Honey perfectly pure", ur: "بالکل خالص شہد" } },
        { term: "Every Fruit", arabic: "من كل الثمرات", meaning: { en: "Every kind of fruit", ur: "ہر قسم کے پھل" }, ayahs: [15], description: { en: "Unlimited variety of fruits", ur: "پھلوں کی لامحدود اقسام" } },
        { term: "Forgiveness", arabic: "مغفرة من ربهم", meaning: { en: "Forgiveness from their Lord", ur: "اپنے رب کی طرف سے مغفرت" }, ayahs: [15], description: { en: "Ultimate divine pardon", ur: "حتمی الٰہی معافی" } },
        { term: "Guided to Path", arabic: "هدى وأصلح بالهم", meaning: { en: "He guided them and improved their state", ur: "اللہ نے انہیں ہدایت دی اور ان کا حال درست کیا" }, ayahs: [5], description: { en: "Divine guidance and reform", ur: "الٰہی ہدایت اور اصلاح" } },
        { term: "Paradise Admitted", arabic: "إدخال الجنة", meaning: { en: "Admitted to Paradise He described", ur: "جنت میں داخل کیا جو اس نے بیان کی" }, ayahs: [6], description: { en: "Entry to promised garden", ur: "وعدہ شدہ جنت میں داخلہ" } }
      ]
    },
    worldlyLifeTest: {
      name: "Worldly Life as Test",
      nameUr: "دنیاوی زندگی بطور آزمائش",
      nameAr: "الدنيا ابتلاء",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Play and Amusement", arabic: "لعب ولهو", meaning: { en: "Worldly life is play and amusement", ur: "دنیا کی زندگی کھیل تماشا ہے" }, ayahs: [36], description: { en: "Temporary entertainment", ur: "عارضی تفریح" } },
        { term: "Faith and Taqwa", arabic: "الإيمان والتقوى", meaning: { en: "If you believe and have taqwa", ur: "اگر تم ایمان لاؤ اور تقویٰ اختیار کرو" }, ayahs: [36], description: { en: "Conditions for reward", ur: "اجر کی شرائط" } },
        { term: "Not Asking Wealth", arabic: "لا يسألكم أموالكم", meaning: { en: "He does not ask your wealth", ur: "وہ تم سے تمہارے مال نہیں مانگتا" }, ayahs: [36], description: { en: "Allah not demanding possessions", ur: "اللہ مال کا مطالبہ نہیں کرتا" } },
        { term: "Stinginess Exposed", arabic: "البخل", meaning: { en: "If asked, you would be stingy", ur: "اگر مانگے تو تم بخل کرو گے" }, ayahs: [37], description: { en: "Human nature revealed", ur: "انسانی فطرت کا انکشاف" } },
        { term: "Grudging Spending", arabic: "من يبخل", meaning: { en: "Whoever is stingy harms himself", ur: "جو بخل کرتا ہے وہ اپنا ہی نقصان کرتا ہے" }, ayahs: [38], description: { en: "Self-harm of miserliness", ur: "بخل سے خود کو نقصان" } },
        { term: "Allah is Rich", arabic: "الله الغني", meaning: { en: "Allah is Self-Sufficient", ur: "اللہ بے نیاز ہے" }, ayahs: [38], description: { en: "Allah needs nothing", ur: "اللہ کو کسی کی حاجت نہیں" } },
        { term: "You are Poor", arabic: "أنتم الفقراء", meaning: { en: "You are the needy ones", ur: "تم ہی محتاج ہو" }, ayahs: [38], description: { en: "Human dependency", ur: "انسانی محتاجی" } },
        { term: "Replaced People", arabic: "يستبدل قوما غيركم", meaning: { en: "He can replace you with others", ur: "وہ تمہاری جگہ دوسری قوم لے آئے گا" }, ayahs: [38], description: { en: "Warning of replacement", ur: "تبدیلی کی تنبیہ" } }
      ]
    },
    prophetMuhammad: {
      name: "The Prophet Muhammad",
      nameUr: "نبی محمد ﷺ",
      nameAr: "النبي محمد",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Named Muhammad", arabic: "محمد", meaning: { en: "The Praised One", ur: "تعریف کیے گئے" }, ayahs: [2], description: { en: "Only surah named after the Prophet", ur: "واحد سورت جو نبی ﷺ کے نام پر ہے" } },
        { term: "What Was Revealed", arabic: "ما أنزل على محمد", meaning: { en: "What was revealed to Muhammad", ur: "جو محمد ﷺ پر نازل کیا گیا" }, ayahs: [2], description: { en: "Direct naming in revelation", ur: "وحی میں براہ راست نام لینا" } },
        { term: "The Truth", arabic: "الحق من ربهم", meaning: { en: "It is the truth from their Lord", ur: "یہ ان کے رب کی طرف سے حق ہے" }, ayahs: [2, 3], description: { en: "Confirmation of revelation", ur: "وحی کی تصدیق" } },
        { term: "Obey the Messenger", arabic: "أطيعوا الرسول", meaning: { en: "Obey Allah and the Messenger", ur: "اللہ اور رسول کی اطاعت کرو" }, ayahs: [33], description: { en: "Command for obedience", ur: "اطاعت کا حکم" } },
        { term: "Don't Nullify Deeds", arabic: "لا تبطلوا أعمالكم", meaning: { en: "Do not invalidate your deeds", ur: "اپنے اعمال ضائع نہ کرو" }, ayahs: [33], description: { en: "Warning against apostasy", ur: "ارتداد سے تنبیہ" } }
      ]
    },
    believersBlessings: {
      name: "Blessings for Believers",
      nameUr: "مومنین کے لیے نعمتیں",
      nameAr: "نعم المؤمنين",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Sins Covered", arabic: "كفر سيئاتهم", meaning: { en: "He will remove their sins", ur: "وہ ان کے گناہ دور کر دے گا" }, ayahs: [2], description: { en: "Sins forgiven through faith", ur: "ایمان کے ذریعے گناہ معاف" } },
        { term: "State Improved", arabic: "أصلح بالهم", meaning: { en: "He will improve their condition", ur: "وہ ان کی حالت درست کر دے گا" }, ayahs: [2], description: { en: "Divine reform of character", ur: "کردار کی الٰہی اصلاح" } },
        { term: "Allah Protector", arabic: "الله مولى المؤمنين", meaning: { en: "Allah is the protector of believers", ur: "اللہ مومنوں کا حامی ہے" }, ayahs: [11], description: { en: "Divine guardianship", ur: "الٰہی سرپرستی" } },
        { term: "Gardens of Paradise", arabic: "جنات تجري من تحتها الأنهار", meaning: { en: "Gardens with flowing rivers", ur: "جنتیں جن کے نیچے نہریں بہتی ہیں" }, ayahs: [12], description: { en: "Paradise reward", ur: "جنت کا انعام" } },
        { term: "Pure Drink", arabic: "شرابا طهورا", meaning: { en: "Given pure drink by their Lord", ur: "ان کا رب انہیں پاکیزہ مشروب پلائے گا" }, ayahs: [15], description: { en: "Purifying beverage", ur: "پاکیزہ مشروب" } }
      ]
    },
    hourAndJudgment: {
      name: "The Hour and Judgment",
      nameUr: "قیامت اور حساب",
      nameAr: "الساعة والحساب",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Hour Approaches", arabic: "هل ينظرون إلا الساعة", meaning: { en: "Are they waiting for the Hour?", ur: "کیا وہ قیامت کا انتظار کر رہے ہیں؟" }, ayahs: [18], description: { en: "Sudden arrival expected", ur: "اچانک آنے کی توقع" } },
        { term: "Signs Have Come", arabic: "قد جاء أشراطها", meaning: { en: "Its signs have already come", ur: "اس کی نشانیاں آ چکی ہیں" }, ayahs: [18], description: { en: "Precursors already present", ur: "قیامت کی علامات پہلے سے موجود" } },
        { term: "Remembrance Useless Then", arabic: "أنى لهم ذكراهم", meaning: { en: "How will remembrance help then?", ur: "پھر یاد کرنا کیسے فائدہ دے گا؟" }, ayahs: [18], description: { en: "Too late for reflection", ur: "سوچنے کے لیے بہت دیر" } },
        { term: "Knowledge with Allah", arabic: "علم الساعة", meaning: { en: "Only Allah knows the Hour", ur: "قیامت کا علم صرف اللہ کو ہے" }, ayahs: [18], description: { en: "Exclusive divine knowledge", ur: "صرف اللہ کا خصوصی علم" } },
        { term: "Ask Forgiveness", arabic: "استغفر لذنبك", meaning: { en: "Seek forgiveness for your sin", ur: "اپنے گناہ کی معافی مانگو" }, ayahs: [19], description: { en: "Command to Prophet and all", ur: "نبی ﷺ اور سب کے لیے حکم" } }
      ]
    }
  },

  relationships: [
    { from: "Disbelief", to: "Lost Deeds", type: "consequence", description: { en: "Disbelief causes all good works to be nullified", ur: "کفر تمام نیک اعمال کو ضائع کر دیتا ہے" } },
    { from: "Faith", to: "Sins Covered", type: "consequence", description: { en: "True faith leads to forgiveness of sins", ur: "سچا ایمان گناہوں کی معافی کا سبب بنتا ہے" } },
    { from: "Helping Allah", to: "Divine Support", type: "reciprocal", description: { en: "Those who help Allah's cause receive His help", ur: "جو اللہ کے دین کی مدد کریں انہیں اللہ کی مدد ملتی ہے" } },
    { from: "Hypocrisy", to: "Heart Disease", type: "identity", description: { en: "Hypocrisy is described as spiritual disease", ur: "نفاق کو روحانی بیماری سے تعبیر کیا گیا" } },
    { from: "Satan", to: "Hypocrites", type: "alliance", description: { en: "Satan leads hypocrites astray with false hopes", ur: "شیطان منافقوں کو جھوٹی امیدوں سے گمراہ کرتا ہے" } },
    { from: "Four Rivers", to: "Paradise", type: "description", description: { en: "Water, milk, wine, honey describe Paradise", ur: "پانی، دودھ، شراب، شہد جنت کا نقشہ کھینچتے ہیں" } },
    { from: "Worldly Life", to: "Test", type: "purpose", description: { en: "This life is a test through play and distraction", ur: "یہ زندگی کھیل اور غفلت کے ذریعے آزمائش ہے" } },
    { from: "Stinginess", to: "Self-Harm", type: "consequence", description: { en: "Being stingy only harms oneself", ur: "بخل صرف خود کو نقصان پہنچاتا ہے" } },
    { from: "Allah's Independence", to: "Human Need", type: "contrast", description: { en: "Allah is Rich, humans are poor and needy", ur: "اللہ بے نیاز ہے، انسان محتاج اور فقیر ہیں" } },
    { from: "Hour's Signs", to: "Time Running Out", type: "warning", description: { en: "Signs have come; time for repentance is short", ur: "نشانیاں آ چکیں؛ توبہ کا وقت کم ہے" } },
    { from: "Sealed Hearts", to: "Following Desires", type: "consequence", description: { en: "After clear guidance, hearts sealed for following desires", ur: "واضح ہدایت کے بعد خواہشات کی پیروی سے دلوں پر مہر" } },
    { from: "Obedience", to: "Preserved Deeds", type: "requirement", description: { en: "Obedience preserves good deeds from nullification", ur: "اطاعت نیک اعمال کو ضائع ہونے سے بچاتی ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Battle to Paradise Through Faith", ur: "ایمان کے ذریعے جنگ سے جنت تک" },
    stages: [
      {
        name: "Contrast of Outcomes",
        ayahs: [1, 2, 3],
        description: { en: "Disbelievers' deeds lost vs believers' sins forgiven; truth vs falsehood", ur: "کافروں کے اعمال ضائع بمقابلہ مومنوں کے گناہ معاف؛ حق بمقابلہ باطل" }
      },
      {
        name: "Rules of Battle",
        ayahs: [4],
        description: { en: "When meeting enemies: strike, capture, then release or ransom", ur: "دشمنوں سے ملاقات پر: مارو، قید کرو، پھر احسان یا فدیے سے رہا کرو" }
      },
      {
        name: "Divine Guidance",
        ayahs: [5, 6, 7],
        description: { en: "Allah guides believers, admits them to Paradise, helps those who help Him", ur: "اللہ مومنوں کو ہدایت دیتا، جنت میں داخل کرتا، اپنی مدد کرنے والوں کی مدد کرتا ہے" }
      },
      {
        name: "Fate of Rejectors",
        ayahs: [8, 9, 10, 11, 12, 13, 14],
        description: { en: "Disbelievers destroyed; travel to see past nations; no protector; like cattle", ur: "کافر تباہ کیے گئے؛ پچھلی اقوام دیکھنے کے لیے سفر کرو؛ کوئی حامی نہیں؛ جانوروں جیسے" }
      },
      {
        name: "Paradise Description",
        ayahs: [15],
        description: { en: "Four rivers in Paradise: water, milk, wine, honey", ur: "جنت میں چار نہریں: پانی، دودھ، شراب، شہد" }
      },
      {
        name: "Hypocrites Unveiled",
        ayahs: [16, 17, 18, 19, 20, 21, 22, 23],
        description: { en: "Sealed hearts, plotting, fearing exposure, corruption and severing kinship", ur: "مہر لگے دل، سازشیں، بے نقاب ہونے کا خوف، فساد اور رشتے توڑنا" }
      },
      {
        name: "Reflection on Quran",
        ayahs: [24],
        description: { en: "Why don't they reflect on the Quran? Hearts are locked", ur: "وہ قرآن پر غور کیوں نہیں کرتے؟ دلوں پر تالے لگے ہیں" }
      },
      {
        name: "Apostates and Satan",
        ayahs: [25, 26, 27, 28],
        description: { en: "Those who turn back, Satan's enticement, secret agreements with enemies", ur: "پلٹنے والے، شیطان کی ترغیب، دشمنوں سے خفیہ معاہدے" }
      },
      {
        name: "Hidden Hatred",
        ayahs: [29, 30, 31],
        description: { en: "Did diseased hearts think Allah wouldn't expose them? Known by speech tone", ur: "کیا بیمار دلوں نے سمجھا کہ اللہ انہیں بے نقاب نہیں کرے گا؟ لہجے سے پہچانے جاتے ہیں" }
      },
      {
        name: "Futility of Opposition",
        ayahs: [32],
        description: { en: "Those opposing can never harm Allah", ur: "مخالفت کرنے والے اللہ کا کچھ نہیں بگاڑ سکتے" }
      },
      {
        name: "Obedience Command",
        ayahs: [33, 34, 35],
        description: { en: "Obey Allah and Messenger; don't nullify deeds; no begging for peace when winning", ur: "اللہ اور رسول کی اطاعت کرو؛ اعمال ضائع نہ کرو؛ غالب ہوتے ہوئے صلح کی بھیک نہ مانگو" }
      },
      {
        name: "Worldly Life Reality",
        ayahs: [36, 37, 38],
        description: { en: "Life is play; believe and be conscious; Allah tests wealth; He can replace you", ur: "زندگی کھیل ہے؛ ایمان لاؤ اور خدا سے ڈرو؛ اللہ مال سے آزماتا ہے؛ وہ تمہیں بدل سکتا ہے" }
      }
    ]
  },

  practicalApplication: {
    title: { en: "Living by Surah Muhammad", ur: "سورہ محمد کے مطابق زندگی" },
    applications: [
      { context: "Faith Integrity", teaching: { en: "Guard your faith carefully; disbelief nullifies all good deeds", ur: "اپنے ایمان کی احتیاط سے حفاظت کرو؛ کفر تمام نیک اعمال ضائع کر دیتا ہے" }, ayah: 1 },
      { context: "Trust in Truth", teaching: { en: "Follow what is revealed to Muhammad; it is truth from your Lord", ur: "محمد ﷺ پر جو نازل ہوا اس کی پیروی کرو؛ یہ تمہارے رب کی طرف سے حق ہے" }, ayah: 2 },
      { context: "Standing for Justice", teaching: { en: "When conflict is unavoidable, act decisively but mercifully", ur: "جب تنازعہ ناگزیر ہو تو فیصلہ کن مگر رحم دلی سے عمل کرو" }, ayah: 4 },
      { context: "Mutual Help", teaching: { en: "Help Allah's cause and He will help you and make you firm", ur: "اللہ کے دین کی مدد کرو وہ تمہاری مدد کرے گا اور تمہیں ثابت قدم رکھے گا" }, ayah: 7 },
      { context: "Learning from History", teaching: { en: "Travel the earth and see the consequences for deniers before you", ur: "زمین میں چلو پھرو اور دیکھو تم سے پہلے جھٹلانے والوں کا کیا انجام ہوا" }, ayah: 10 },
      { context: "Hearts and Quran", teaching: { en: "Reflect deeply on the Quran; don't let hearts become locked", ur: "قرآن پر گہرا غور کرو؛ دلوں کو مقفل نہ ہونے دو" }, ayah: 24 },
      { context: "Spiritual Awareness", teaching: { en: "Be aware that hidden hatred and hypocrisy will be exposed", ur: "جان لو کہ چھپی دشمنی اور نفاق بے نقاب ہو کر رہے گا" }, ayah: 29 },
      { context: "Obedience", teaching: { en: "Obey Allah and the Messenger; don't invalidate your deeds through disobedience", ur: "اللہ اور رسول کی اطاعت کرو؛ نافرمانی سے اپنے اعمال ضائع نہ کرو" }, ayah: 33 },
      { context: "Worldly Perspective", teaching: { en: "Remember this life is temporary; invest in faith and consciousness of Allah", ur: "یاد رکھو یہ زندگی عارضی ہے؛ ایمان اور تقویٰ میں سرمایہ کاری کرو" }, ayah: 36 },
      { context: "Generosity", teaching: { en: "Don't be stingy; stinginess only harms yourself. Allah is self-sufficient", ur: "بخل نہ کرو؛ بخل صرف تمہارا اپنا نقصان ہے۔ اللہ بے نیاز ہے" }, ayah: 38 }
    ]
  },

  uniqueInsight: {
    title: { en: "The Four Rivers of Paradise (أَنْهَارٌ)", ur: "جنت کی چار نہریں (أَنْهَارٌ)" },
    insight: { en: "This surah contains one of the most vivid descriptions of Paradise in the Quran (verse 15), describing four types of rivers: (1) Rivers of water never becoming stale (مَاءٍ غَيْرِ آسِنٍ), (2) Rivers of milk whose taste never changes (لَبَنٍ لَّمْ يَتَغَيَّرْ طَعْمُهُ), (3) Rivers of wine delicious to drinkers (خَمْرٍ لَّذَّةٍ لِّلشَّارِبِينَ), and (4) Rivers of purified honey (عَسَلٍ مُّصَفًّى). Each represents a fundamental human desire perfected: water for survival, milk for nourishment, wine for pleasure, and honey for sweetness and healing. Unlike worldly versions that spoil, these are eternal and pure. The surah contrasts this with disbelievers who 'eat and enjoy like cattle' (verse 12) - showing that believers have elevated pleasures while disbelievers reduce themselves to base existence. This is also the only surah named after the Prophet Muhammad himself, making the paradise promise personal from him to his followers.", ur: "اس سورت میں قرآن میں جنت کی سب سے واضح تصویروں میں سے ایک ہے (آیت 15)، جس میں چار قسم کی نہروں کا بیان ہے: (1) پانی کی نہریں جو کبھی باسی نہیں ہوتیں، (2) دودھ کی نہریں جن کا ذائقہ کبھی نہیں بدلتا، (3) شراب کی نہریں جو پینے والوں کے لیے لذیذ ہیں، اور (4) صاف شہد کی نہریں۔ ہر ایک انسانی خواہش کی تکمیل ہے: پانی بقا کے لیے، دودھ غذائیت کے لیے، شراب لذت کے لیے، اور شہد مٹھاس اور شفا کے لیے۔ دنیاوی چیزوں کے برعکس جو خراب ہو جاتی ہیں، یہ ابدی اور خالص ہیں۔ سورت اس کا تقابل ان کافروں سے کرتی ہے جو 'جانوروں کی طرح کھاتے اور مزے کرتے ہیں' (آیت 12)۔ یہ واحد سورت ہے جو نبی محمد ﷺ کے نام سے ہے، جو جنت کا وعدہ ان کی طرف سے ان کے پیروکاروں کو ذاتی بناتا ہے۔" },
    arabicTerm: "فِيهَا أَنْهَارٌ مِّن مَّاءٍ غَيْرِ آسِنٍ وَأَنْهَارٌ مِّن لَّبَنٍ لَّمْ يَتَغَيَّرْ طَعْمُهُ وَأَنْهَارٌ مِّنْ خَمْرٍ لَّذَّةٍ لِّلشَّارِبِينَ وَأَنْهَارٌ مِّنْ عَسَلٍ مُّصَفًّى",
    rootMeaning: { en: "ن-ه-ر (to flow) - rivers represent continuous divine blessings", ur: "ن-ه-ر (بہنا) - نہریں مسلسل الٰہی نعمتوں کی علامت ہیں" },
    keyAyah: 15
  },

  historicalContext: {
    revelationPeriod: { en: "Medinan period, likely after Badr or Hudaybiyyah", ur: "مدنی دور، غالباً بدر یا حدیبیہ کے بعد" },
    occasion: { en: "Revealed during a time when Muslims faced military conflict and the community included both sincere believers and hypocrites. The surah addresses the need for steadfastness in battle while warning about internal enemies.", ur: "اس وقت نازل ہوئی جب مسلمان فوجی مقابلے کا سامنا کر رہے تھے اور معاشرے میں مخلص مومن اور منافق دونوں شامل تھے۔ سورت جنگ میں ثابت قدمی کی ضرورت پر توجہ دلاتی ہے اور اندرونی دشمنوں سے خبردار کرتی ہے۔" },
    note: { en: "This surah is unique in being named directly after the Prophet Muhammad (also called Surah Al-Qital - The Fighting). It is one of only four places in the Quran where the Prophet is mentioned by name (3:144, 33:40, 47:2, 48:29). The surah's placement in the Quran pairs it with Surah Al-Fath (Victory), as both deal with conflict and its outcomes. The verse about 'striking necks' (47:4) established rules of engagement that were revolutionary for their time, including the obligation to release prisoners.", ur: "یہ سورت اس لحاظ سے منفرد ہے کہ براہ راست نبی محمد ﷺ کے نام سے ہے (اسے سورۃ القتال بھی کہتے ہیں)۔ یہ قرآن کی چار جگہوں میں سے ایک ہے جہاں نبی ﷺ کا نام لیا گیا (3:144، 33:40، 47:2، 48:29)۔ قرآن میں اس کا مقام سورۃ الفتح کے ساتھ ہے کیونکہ دونوں جنگ اور اس کے نتائج سے متعلق ہیں۔ 'گردنیں مارو' (47:4) کی آیت نے اپنے وقت کے لیے انقلابی جنگی اصول قائم کیے جن میں قیدیوں کی رہائی کی ذمہ داری شامل ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Paired Contrasts", description: "الذين كفروا vs الذين آمنوا", example: { en: "Opening verses contrast disbelievers and believers in parallel", ur: "ابتدائی آیات کافروں اور مومنوں کا متوازی تقابل کرتی ہیں" }, ayahs: [1, 2] },
      { name: "Emphatic Particles", description: "ذَٰلِكَ بِأَنَّ", example: { en: "Repeated 'that is because' for causation", ur: "سبب بیان کرنے کے لیے 'یہ اس لیے کہ' کی تکرار" }, ayahs: [3, 9, 11] },
      { name: "Rhetorical Questions", description: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ", example: { en: "Do they not reflect on the Quran?", ur: "کیا وہ قرآن پر غور نہیں کرتے؟" }, ayah: 24 },
      { name: "Heart Lock Metaphor", description: "أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا", example: { en: "Or are there locks upon their hearts?", ur: "یا ان کے دلوں پر تالے لگے ہوئے ہیں؟" }, ayah: 24 },
      { name: "Speech Pattern Recognition", description: "لَحْنِ الْقَوْلِ", example: { en: "Tone/style of speech reveals hidden intentions", ur: "بات کا لہجہ/انداز چھپی نیتوں کو ظاہر کرتا ہے" }, ayah: 30 },
      { name: "Conditional Promises", description: "إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ", example: { en: "If you help Allah, He will help you", ur: "اگر تم اللہ کی مدد کرو گے تو وہ تمہاری مدد کرے گا" }, ayah: 7 },
      { name: "Dunya Description", description: "لَعِبٌ وَلَهْوٌ", example: { en: "Play and amusement - minimizing worldly life", ur: "کھیل اور تماشا - دنیوی زندگی کی حقیقت" }, ayah: 36 }
    ]
  },

  scientificReferences: {
    notes: [
      { topic: "Psychology of Hypocrisy", observation: { en: "The description of hypocrites being recognized by 'tone of speech' (lahn al-qawl) aligns with modern studies showing deception leaves linguistic markers", ur: "منافقوں کو 'لہجے' (لحن القول) سے پہچاننے کا بیان جدید تحقیقات سے مطابقت رکھتا ہے جو دکھاتی ہیں کہ دھوکا زبان کے نشانات چھوڑتا ہے" }, ayah: 30 },
      { topic: "Heart Disease Metaphor", observation: { en: "Describing spiritual conditions as 'disease in hearts' parallels psychosomatic understanding of moral-emotional states", ur: "روحانی حالات کو 'دلوں کی بیماری' سے بیان کرنا اخلاقی جذباتی حالات کی نفسیاتی جسمانی سمجھ سے مطابقت رکھتا ہے" }, ayah: 20 },
      { topic: "Water Purity", observation: { en: "Paradise water described as 'never becoming stale' (ghayr asin) - water on earth stagnates and breeds bacteria; this describes perfectly pure, living water", ur: "جنت کے پانی کو 'کبھی باسی نہ ہونے والا' بیان کیا - زمین پر پانی ٹھہر کر جراثیم پیدا کرتا ہے؛ یہ بالکل خالص زندہ پانی کا بیان ہے" }, ayah: 15 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 8, name: "Al-Anfal", relationship: "Both address warfare, spoils, and rules of engagement", type: "thematic_parallel" },
      { surah: 48, name: "Al-Fath", relationship: "Directly following surah, both deal with conflict and victory", type: "sequential_relationship" },
      { surah: 63, name: "Al-Munafiqun", relationship: "Both expose hypocrites' traits and behaviors", type: "thematic_parallel" },
      { surah: 9, name: "At-Tawbah", relationship: "Most detailed treatment of hypocrites; similar themes of fighting", type: "thematic_parallel" },
      { surah: 57, name: "Al-Hadid", relationship: "Both discuss spending in Allah's way and testing believers", type: "thematic_parallel" },
      { surah: 3, name: "Aal Imran", relationship: "Contains one of the four mentions of Muhammad by name (3:144)", type: "name_connection" },
      { surah: 33, name: "Al-Ahzab", relationship: "Contains mention of Muhammad by name (33:40) and hypocrites", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
