/**
 * Surah Aal Imran (The Family of Imran) - Surah 3
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 3,
  surahName: "Aal Imran",
  surahNameArabic: "آل عمران",
  totalAyahs: 200,
  revelationType: "Medinan",
  mainTheme: { en: "Family of Imran, Truth of Jesus and Mary, Battle of Uhud, and Steadfastness in Faith", ur: "آلِ عمران، عیسیٰ اور مریم کی حقیقت، غزوۂ اُحد، اور ایمان پر ثابت قدمی" },

  categories: {
    divineUnity: {
      name: "Divine Unity and Attributes",
      nameAr: "التوحيد وصفات الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Hayy Al-Qayyum", arabic: "الحي القيوم", meaning: { en: "The Ever-Living, Self-Sustaining", ur: "ہمیشہ زندہ رہنے والا، سب کو قائم رکھنے والا" }, ayahs: [2] },
        { term: "La ilaha illa Huwa", arabic: "لا إله إلا هو", meaning: { en: "There is no god but He", ur: "اس کے سوا کوئی معبود نہیں" }, ayahs: [2, 6, 18] },
        { term: "Musawwir fil-Arham", arabic: "يصوركم في الأرحام", meaning: { en: "He forms you in the wombs", ur: "وہ ماؤں کے پیٹ میں تمہاری صورت بناتا ہے" }, ayahs: [6] },
        { term: "Ulul-Albab", arabic: "أولو الألباب", meaning: { en: "People of understanding", ur: "عقل و فہم والے لوگ" }, ayahs: [7, 190] },
        { term: "Allah Witnesses", arabic: "شهد الله", meaning: { en: "Allah testifies to His unity", ur: "اللہ نے اپنی وحدانیت کی گواہی دی" }, ayahs: [18] }
      ]
    },
    familyOfImran: {
      name: "Family of Imran",
      nameAr: "آل عمران",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Imran's Wife", arabic: "امرأة عمران", meaning: { en: "Mother of Maryam, her vow", ur: "مریم کی والدہ، ان کی نذر" }, ayahs: [35, 36] },
        { term: "Maryam (Mary)", arabic: "مريم", meaning: { en: "Chosen and purified above all women", ur: "تمام عورتوں سے بالاتر چُنی ہوئی اور پاکیزہ" }, ayahs: [36, 37, 42, 43, 44, 45] },
        { term: "Zakariyya", arabic: "زكريا", meaning: { en: "Guardian of Maryam, father of Yahya", ur: "مریم کے کفیل، یحییٰ کے والد" }, ayahs: [37, 38, 39, 40, 41] },
        { term: "Yahya (John)", arabic: "يحيى", meaning: { en: "Noble, chaste, prophet", ur: "شریف، پاکدامن، نبی" }, ayahs: [39] },
        { term: "Miraculous Provision", arabic: "الرزق العجيب", meaning: { en: "Food coming to Maryam in the mihrab", ur: "محراب میں مریم کو معجزانہ رزق ملنا" }, ayahs: [37] }
      ]
    },
    isaIbnMaryam: {
      name: "Jesus Son of Mary",
      nameAr: "عيسى ابن مريم",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "Al-Masih Isa", arabic: "المسيح عيسى", meaning: { en: "The Messiah Jesus, son of Mary", ur: "مسیح عیسیٰ ابن مریم" }, ayahs: [45] },
        { term: "Kalimatullah", arabic: "كلمة منه", meaning: { en: "A word from Allah", ur: "اللہ کی طرف سے ایک کلمہ" }, ayahs: [45] },
        { term: "Wajih", arabic: "وجيها", meaning: { en: "Distinguished in this world and Hereafter", ur: "دنیا اور آخرت میں عزت والا" }, ayahs: [45] },
        { term: "Speaking in Cradle", arabic: "يكلم الناس في المهد", meaning: { en: "Speaking in the cradle", ur: "گہوارے میں لوگوں سے بات کرنا" }, ayahs: [46] },
        { term: "Kun Fayakun", arabic: "كن فيكون", meaning: { en: "Be, and it is - creation of Jesus", ur: "ہو جا، اور ہو گیا - عیسیٰ کی تخلیق" }, ayahs: [47, 59] },
        { term: "Like Adam", arabic: "كمثل آدم", meaning: { en: "Jesus's creation like Adam's", ur: "عیسیٰ کی تخلیق آدم کی طرح ہے" }, ayahs: [59] },
        { term: "Miracles of Jesus", arabic: "معجزات عيسى", meaning: { en: "Birds from clay, healing, raising dead", ur: "مٹی کے پرندے، شفا دینا، مُردوں کو زندہ کرنا" }, ayahs: [49] },
        { term: "Al-Hawariyyun", arabic: "الحواريون", meaning: { en: "The disciples of Jesus", ur: "عیسیٰ کے حواری (مددگار)" }, ayahs: [52] },
        { term: "Raised to Allah", arabic: "رافعك إلي", meaning: { en: "Allah raised Jesus to Himself", ur: "اللہ نے عیسیٰ کو اپنی طرف اٹھا لیا" }, ayahs: [55] }
      ]
    },
    muhkamMutashabih: {
      name: "Clear and Allegorical Verses",
      nameAr: "المحكم والمتشابه",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Ayat Muhkamat", arabic: "آيات محكمات", meaning: { en: "Clear, precise verses - mother of the Book", ur: "واضح، محکم آیات - کتاب کی اصل بنیاد" }, ayahs: [7] },
        { term: "Ayat Mutashabihat", arabic: "آيات متشابهات", meaning: { en: "Allegorical, ambiguous verses", ur: "مبہم، متشابہ آیات" }, ayahs: [7] },
        { term: "Seeking Fitna", arabic: "ابتغاء الفتنة", meaning: { en: "Those who follow ambiguous seeking discord", ur: "جو لوگ فتنے کی تلاش میں مبہم آیات کے پیچھے جاتے ہیں" }, ayahs: [7] },
        { term: "Rasikhuun fil-Ilm", arabic: "الراسخون في العلم", meaning: { en: "Firmly grounded in knowledge", ur: "علم میں پختہ و راسخ لوگ" }, ayahs: [7] }
      ]
    },
    battleOfUhud: {
      name: "Battle of Uhud",
      nameAr: "غزوة أحد",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Victory at Badr", arabic: "نصر ببدر", meaning: { en: "Previous victory when weak", ur: "کمزوری کی حالت میں پچھلی فتح (بدر)" }, ayahs: [123] },
        { term: "Two Armies Met", arabic: "التقى الجمعان", meaning: { en: "When two armies met at Uhud", ur: "جب اُحد میں دو لشکر آمنے سامنے آئے" }, ayahs: [121, 122, 155, 166] },
        { term: "Archer Disobedience", arabic: "عصيتم من بعد ما أراكم", meaning: { en: "Disobeyed after seeing victory", ur: "فتح دیکھ کر نافرمانی کی (تیراندازوں نے)" }, ayahs: [152] },
        { term: "Prophet Wounded", arabic: "جرح الرسول", meaning: { en: "Prophet was injured in battle", ur: "نبی ﷺ جنگ میں زخمی ہوئے" }, ayahs: [144] },
        { term: "Rumors of Death", arabic: "شائعة الموت", meaning: { en: "Rumor that Prophet had died", ur: "نبی ﷺ کی شہادت کی افواہ" }, ayahs: [144] },
        { term: "Testing Believers", arabic: "ابتلاء المؤمنين", meaning: { en: "Allah tests believers through trials", ur: "اللہ مومنوں کو آزمائشوں سے آزماتا ہے" }, ayahs: [140, 141, 142, 154] },
        { term: "Shaytan's Slip", arabic: "استزلهم الشيطان", meaning: { en: "Satan caused them to slip", ur: "شیطان نے ان کو پھسلا دیا" }, ayahs: [155] },
        { term: "Seventy Martyrs", arabic: "الشهداء", meaning: { en: "Martyrs are alive with their Lord", ur: "شہداء اپنے رب کے پاس زندہ ہیں" }, ayahs: [169, 170, 171] }
      ]
    },
    steadfastnessAndPatience: {
      name: "Steadfastness and Patience",
      nameAr: "الصبر والثبات",
      color: '#06B6D4',
      icon: 'Heart',
      concepts: [
        { term: "Sabr", arabic: "الصبر", meaning: { en: "Patience in adversity", ur: "مشکلات میں صبر" }, ayahs: [120, 125, 186, 200] },
        { term: "Musabirah", arabic: "المصابرة", meaning: { en: "Mutual encouragement in patience", ur: "صبر میں ایک دوسرے سے بازی لے جانا" }, ayahs: [200] },
        { term: "Ribat", arabic: "الرباط", meaning: { en: "Guarding the frontiers", ur: "سرحدوں کی حفاظت - مورچہ بندی" }, ayahs: [200] },
        { term: "Tawakkul", arabic: "التوكل", meaning: { en: "Trust in Allah", ur: "اللہ پر بھروسہ" }, ayahs: [122, 159, 160] },
        { term: "Hasbunallah", arabic: "حسبنا الله", meaning: { en: "Allah is sufficient for us", ur: "اللہ ہمیں کافی ہے" }, ayahs: [173, 174] },
        { term: "La Tahzanuu", arabic: "لا تحزنوا", meaning: { en: "Do not grieve or despair", ur: "غمزدہ اور مایوس نہ ہو" }, ayahs: [139, 153, 176] }
      ]
    },
    peopleOfTheBook: {
      name: "People of the Book",
      nameAr: "أهل الكتاب",
      color: '#F59E0B',
      icon: 'Book',
      concepts: [
        { term: "Ahl al-Kitab", arabic: "أهل الكتاب", meaning: { en: "Jews and Christians", ur: "یہود و نصاریٰ (اہلِ کتاب)" }, ayahs: [64, 65, 69, 70, 71, 72, 75, 98, 99, 110, 113, 199] },
        { term: "Common Word", arabic: "كلمة سواء", meaning: { en: "Call to common terms of worship", ur: "مشترکہ بات کی طرف دعوت - صرف اللہ کی عبادت" }, ayahs: [64] },
        { term: "Ibrahim's Religion", arabic: "ملة إبراهيم", meaning: { en: "Abraham was neither Jew nor Christian", ur: "ابراہیم نہ یہودی تھے نہ عیسائی" }, ayahs: [65, 67, 68, 95] },
        { term: "Distortion", arabic: "التحريف", meaning: { en: "They twist scripture with tongues", ur: "وہ اپنی زبانوں سے کتاب کو مروڑتے ہیں" }, ayahs: [78] },
        { term: "Righteous Among Them", arabic: "أمة قائمة", meaning: { en: "Among them an upright community", ur: "ان میں ایک نیکوکار جماعت بھی ہے" }, ayahs: [113, 114, 115, 199] }
      ]
    },
    hypocrisyAndDisbelief: {
      name: "Hypocrisy and Disbelief",
      nameAr: "النفاق والكفر",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Munafiqun Signs", arabic: "علامات النفاق", meaning: { en: "Characteristics of hypocrites", ur: "منافقوں کی خصوصیات" }, ayahs: [119, 120, 156, 167, 168] },
        { term: "Stayed Behind", arabic: "قعدوا", meaning: { en: "Hypocrites who refused to fight", ur: "وہ منافق جنہوں نے جنگ سے انکار کیا" }, ayahs: [167, 168] },
        { term: "Biting Fingers", arabic: "عضوا عليكم الأنامل", meaning: { en: "They bite fingers in rage at believers", ur: "مومنوں سے غصے میں اپنی انگلیاں کاٹتے ہیں" }, ayahs: [119] },
        { term: "Kufr Punishment", arabic: "عذاب الكافرين", meaning: { en: "Severe punishment for disbelievers", ur: "کافروں کے لیے سخت عذاب" }, ayahs: [4, 10, 21, 56, 88, 91, 106, 116, 131, 176, 177, 178] }
      ]
    },
    trueFaith: {
      name: "True Faith and Its Signs",
      nameAr: "الإيمان الصادق وعلاماته",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Islam as Din", arabic: "الإسلام الدين", meaning: { en: "True religion with Allah is Islam", ur: "اللہ کے نزدیک سچا دین اسلام ہے" }, ayahs: [19, 85] },
        { term: "Love of Allah", arabic: "حب الله", meaning: { en: "If you love Allah, follow the Prophet", ur: "اگر تم اللہ سے محبت رکھتے ہو تو نبی ﷺ کی پیروی کرو" }, ayahs: [31] },
        { term: "Birr", arabic: "البر", meaning: { en: "Righteousness - spending what you love", ur: "نیکی - اپنی پسندیدہ چیز خرچ کرنا" }, ayahs: [92] },
        { term: "Taqwa", arabic: "التقوى", meaning: { en: "God-consciousness, true piety", ur: "اللہ کا خوف و شعور، حقیقی تقویٰ" }, ayahs: [102, 123, 130, 131, 133, 179, 198, 200] },
        { term: "Dhikr", arabic: "الذكر", meaning: { en: "Remembrance of Allah", ur: "اللہ کا ذکر" }, ayahs: [41, 135, 191] },
        { term: "Istighfar", arabic: "الاستغفار", meaning: { en: "Seeking forgiveness", ur: "اللہ سے مغفرت طلب کرنا" }, ayahs: [135, 147] }
      ]
    },
    worldlyAttachments: {
      name: "Worldly Attachments",
      nameAr: "الزخرف الدنيوي",
      color: '#EC4899',
      icon: 'Eye',
      concepts: [
        { term: "Zuyyina", arabic: "زين للناس", meaning: { en: "Beautified for people - desires", ur: "لوگوں کے لیے خواہشات کو خوبصورت بنا دیا گیا" }, ayahs: [14] },
        { term: "Women, Children", arabic: "النساء والبنين", meaning: { en: "Love of women and children", ur: "عورتوں اور بچوں کی محبت" }, ayahs: [14] },
        { term: "Gold and Silver", arabic: "الذهب والفضة", meaning: { en: "Hoarded treasures", ur: "سونے چاندی کے ڈھیر" }, ayahs: [14] },
        { term: "Horses and Cattle", arabic: "الخيل والأنعام", meaning: { en: "Fine horses and livestock", ur: "عمدہ گھوڑے اور مویشی" }, ayahs: [14] },
        { term: "Better Than This", arabic: "خير من ذلك", meaning: { en: "What is with Allah is better", ur: "جو اللہ کے پاس ہے وہ ان سب سے بہتر ہے" }, ayahs: [15, 198] }
      ]
    },
    divineWisdom: {
      name: "Divine Wisdom and Signs",
      nameAr: "الحكمة الإلهية والآيات",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "Creation Signs", arabic: "آيات في الخلق", meaning: { en: "Signs in heavens and earth", ur: "آسمانوں اور زمین میں نشانیاں" }, ayahs: [190] },
        { term: "Night and Day", arabic: "اختلاف الليل والنهار", meaning: { en: "Alternation of night and day", ur: "رات اور دن کا بدلتے رہنا" }, ayahs: [190] },
        { term: "Remembering While Standing", arabic: "يذكرون الله قياما", meaning: { en: "Remember Allah in all positions", ur: "کھڑے، بیٹھے اور لیٹے اللہ کو یاد کرتے ہیں" }, ayahs: [191] },
        { term: "Not Created in Vain", arabic: "ما خلقت هذا باطلا", meaning: { en: "You created not this in vain", ur: "تو نے یہ سب بے مقصد نہیں بنایا" }, ayahs: [191] }
      ]
    },
    delegationOfNajran: {
      name: "Delegation of Najran",
      nameAr: "وفد نجران",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "Mubahala", arabic: "المباهلة", meaning: { en: "Mutual cursing/invocation challenge", ur: "مباہلہ - باہمی لعنت کا چیلنج" }, ayahs: [61] },
        { term: "Our Sons Your Sons", arabic: "أبناءنا وأبناءكم", meaning: { en: "Bring our children and yours", ur: "ہمارے بچے لاؤ اور اپنے بچے لاؤ" }, ayahs: [61] },
        { term: "Lanat Allah", arabic: "لعنة الله", meaning: { en: "Curse of Allah on liars", ur: "جھوٹوں پر اللہ کی لعنت" }, ayahs: [61] },
        { term: "True Narrative", arabic: "القصص الحق", meaning: { en: "This is the true story of Jesus", ur: "یہ عیسیٰ کا سچا قصہ ہے" }, ayahs: [62] }
      ]
    },
    victory: {
      name: "Victory and Defeat",
      nameAr: "النصر والهزيمة",
      color: '#22C55E',
      icon: 'Zap',
      concepts: [
        { term: "Nasr min Allah", arabic: "نصر من عند الله", meaning: { en: "Victory is only from Allah", ur: "فتح صرف اللہ کی طرف سے ہے" }, ayahs: [126, 160] },
        { term: "Angels Descending", arabic: "الملائكة منزلين", meaning: { en: "Reinforcing angels", ur: "مدد کے لیے فرشتوں کا اترنا" }, ayahs: [124, 125] },
        { term: "Alternating Days", arabic: "تلك الأيام نداولها", meaning: { en: "Days of victory rotate among people", ur: "فتح و شکست کے دن لوگوں میں باری باری آتے ہیں" }, ayahs: [140] },
        { term: "Wisdom in Defeat", arabic: "حكمة في الهزيمة", meaning: { en: "Testing and purification through defeat", ur: "شکست کے ذریعے آزمائش اور تزکیہ" }, ayahs: [140, 141, 142, 152, 154, 165, 166] }
      ]
    },
    ribaPrahibition: {
      name: "Usury Prohibition",
      nameAr: "تحريم الربا",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Riba Multiplied", arabic: "الربا أضعافا مضاعفة", meaning: { en: "Do not consume usury doubled", ur: "کئی گنا بڑھا کر سود نہ کھاؤ" }, ayahs: [130] },
        { term: "Fear Allah Regarding Riba", arabic: "اتقوا الله في الربا", meaning: { en: "Fear Allah and avoid usury", ur: "اللہ سے ڈرو اور سود سے بچو" }, ayahs: [130] },
        { term: "Fire Prepared", arabic: "النار أعدت", meaning: { en: "Fire prepared for those who persist", ur: "اڑے رہنے والوں کے لیے آگ تیار ہے" }, ayahs: [131] }
      ]
    },
    prophetMuhammad: {
      name: "Prophet Muhammad",
      nameAr: "النبي محمد",
      color: '#22C55E',
      icon: 'Star',
      concepts: [
        { term: "Muhammad is a Messenger", arabic: "ما محمد إلا رسول", meaning: { en: "Muhammad is only a messenger", ur: "محمد ﷺ صرف ایک رسول ہیں" }, ayahs: [144] },
        { term: "Messengers Before Him", arabic: "قد خلت من قبله الرسل", meaning: { en: "Messengers passed before him", ur: "ان سے پہلے بہت سے رسول گزر چکے ہیں" }, ayahs: [144] },
        { term: "If He Dies", arabic: "أفإن مات", meaning: { en: "Will you turn back if he dies?", ur: "اگر وہ وفات پا جائیں تو کیا تم الٹے پاؤں پلٹ جاؤ گے؟" }, ayahs: [144] },
        { term: "Gentle Character", arabic: "لنت لهم", meaning: { en: "By mercy you were gentle with them", ur: "اللہ کی رحمت سے تم ان کے لیے نرم دل ہو" }, ayahs: [159] },
        { term: "Shura", arabic: "شاورهم في الأمر", meaning: { en: "Consult them in affairs", ur: "معاملات میں ان سے مشورہ کرو" }, ayahs: [159] }
      ]
    }
  },

  relationships: [
    { from: "Family of Imran", to: "Jesus and Mary", type: "lineage", description: { en: "Maryam from the blessed family, mother of Isa", ur: "مریم مبارک خاندان سے ہیں، عیسیٰ کی والدہ" } },
    { from: "Kun Fayakun", to: "Adam and Jesus", type: "parallel", description: { en: "Both created by Allah's command without father", ur: "دونوں اللہ کے حکم سے بغیر باپ کے پیدا ہوئے" } },
    { from: "Mubahala", to: "Christian Delegation", type: "challenge", description: { en: "Challenge to invoke curse on liars about Jesus", ur: "عیسیٰ کے بارے میں جھوٹوں پر لعنت بھیجنے کا چیلنج" } },
    { from: "Battle of Uhud", to: "Archer Disobedience", type: "cause", description: { en: "Leaving posts caused military reversal", ur: "مورچے چھوڑنے سے فوجی صورتحال پلٹ گئی" } },
    { from: "Sabr and Musabirah", to: "Ultimate Success", type: "condition", description: { en: "Patience and steadfastness lead to victory", ur: "صبر اور ثابت قدمی فتح کی طرف لے جاتے ہیں" } },
    { from: "Testing Believers", to: "Purification", type: "purpose", description: { en: "Trials purify hearts and distinguish true believers", ur: "آزمائشیں دلوں کو پاک کرتی ہیں اور سچے مومنوں کو ممتاز کرتی ہیں" } },
    { from: "Muhkamat", to: "Mutashabihat", type: "distinction", description: { en: "Clear verses are foundation, ambiguous require interpretation", ur: "محکم آیات بنیاد ہیں، متشابہ آیات تفسیر چاہتی ہیں" } },
    { from: "People of Book", to: "Common Word", type: "invitation", description: { en: "Invitation to worship Allah alone", ur: "صرف اللہ کی عبادت کی دعوت" } },
    { from: "Worldly Desires", to: "What is With Allah", type: "comparison", description: { en: "Eternal rewards surpass temporary pleasures", ur: "ابدی اجر عارضی لذتوں سے بالاتر ہے" } },
    { from: "Muhammad's Death", to: "Faith Continuity", type: "principle", description: { en: "Islam continues regardless of Prophet's mortal life", ur: "اسلام نبی ﷺ کی فانی زندگی سے قطع نظر جاری رہتا ہے" } },
    { from: "Riba", to: "Divine Anger", type: "prohibition", description: { en: "Usury brings divine punishment", ur: "سود اللہ کا عذاب لاتا ہے" } },
    { from: "Hasbunallah", to: "Increased Faith", type: "result", description: { en: "Trust in Allah strengthens faith in adversity", ur: "مشکل میں اللہ پر بھروسہ ایمان کو مضبوط کرتا ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Divine Truth to Community Resilience", ur: "الٰہی حقیقت سے اجتماعی استقامت تک" },
    stages: [
      { name: "Divine Unity", ayahs: [1, 2, 3, 4, 5, 6], description: { en: "Alif Lam Mim, Allah is Al-Hayy Al-Qayyum", ur: "الم، اللہ الحی القیوم ہے" } },
      { name: "Clear and Ambiguous Verses", ayahs: [7, 8, 9], description: { en: "Muhkamat and Mutashabihat, supplication", ur: "محکم اور متشابہ آیات، دعا" } },
      { name: "Worldly Attachments", ayahs: [10, 11, 12, 13, 14, 15, 16, 17], description: { en: "Disbelievers' fate, worldly desires vs. Paradise", ur: "کافروں کا انجام، دنیاوی خواہشات بمقابلہ جنت" } },
      { name: "Islam as True Religion", ayahs: [18, 19, 20, 21, 22, 23, 24, 25], description: { en: "Allah witnesses, Islam is the religion", ur: "اللہ کی گواہی، اسلام ہی سچا دین ہے" } },
      { name: "Divine Sovereignty", ayahs: [26, 27, 28, 29, 30, 31, 32], description: { en: "Allah gives dominion, follow Prophet", ur: "اللہ حکومت عطا کرتا ہے، نبی ﷺ کی پیروی کرو" } },
      { name: "Chosen Families", ayahs: [33, 34], description: { en: "Adam, Nuh, Ibrahim, Imran", ur: "آدم، نوح، ابراہیم، عمران (چنیدہ خاندان)" } },
      { name: "Maryam's Birth and Upbringing", ayahs: [35, 36, 37, 38, 39, 40, 41], description: { en: "Dedication of Maryam, Zakariyya's prayer", ur: "مریم کی نذر، زکریا کی دعا" } },
      { name: "Maryam Chosen", ayahs: [42, 43, 44], description: { en: "Angels announce Maryam's selection", ur: "فرشتوں نے مریم کے چُنے جانے کا اعلان کیا" } },
      { name: "Annunciation of Jesus", ayahs: [45, 46, 47, 48, 49, 50, 51], description: { en: "Jesus's birth, miracles, mission", ur: "عیسیٰ کی ولادت، معجزات، مشن" } },
      { name: "Disciples and Ascension", ayahs: [52, 53, 54, 55, 56, 57, 58], description: { en: "Hawariyyun, plot against Jesus, raised up", ur: "حواری، عیسیٰ کے خلاف سازش، آسمان پر اٹھائے گئے" } },
      { name: "Jesus Like Adam", ayahs: [59, 60, 61, 62, 63], description: { en: "Kun fayakun, Mubahala challenge", ur: "کن فیکون، مباہلے کا چیلنج" } },
      { name: "Call to Common Ground", ayahs: [64, 65, 66, 67, 68, 69, 70, 71], description: { en: "People of Book invited, Ibrahim's true faith", ur: "اہلِ کتاب کو دعوت، ابراہیم کا سچا دین" } },
      { name: "People of Book's Deception", ayahs: [72, 73, 74, 75, 76, 77, 78, 79, 80], description: { en: "Plotting, distortion, false claims", ur: "سازشیں، تحریف، جھوٹے دعوے" } },
      { name: "Covenant of Prophets", ayahs: [81, 82, 83, 84, 85], description: { en: "All prophets confirm Muhammad, Islam", ur: "تمام انبیاء نے محمد ﷺ اور اسلام کی تصدیق کی" } },
      { name: "Apostasy Warning", ayahs: [86, 87, 88, 89, 90, 91], description: { en: "No forgiveness for persistent disbelief", ur: "مسلسل کفر پر کوئی معافی نہیں" } },
      { name: "True Righteousness", ayahs: [92, 93, 94, 95, 96, 97], description: { en: "Spend what you love, Ibrahim's way", ur: "پسندیدہ چیز خرچ کرو، ابراہیم کا راستہ" } },
      { name: "Ahlul Kitab's Division", ayahs: [98, 99, 100, 101], description: { en: "Some disbelieve, hold to Allah's rope", ur: "بعض نے کفر کیا، اللہ کی رسی مضبوط پکڑو" } },
      { name: "Brotherhood and Unity", ayahs: [102, 103, 104, 105, 106, 107, 108, 109, 110], description: { en: "Hold together, best nation", ur: "متحد رہو، بہترین امت" } },
      { name: "Promise to Believers", ayahs: [111, 112, 113, 114, 115], description: { en: "Enemies cannot harm, righteous among Ahlul Kitab", ur: "دشمن نقصان نہیں پہنچا سکتے، اہلِ کتاب میں سے نیک لوگ" } },
      { name: "Wealth and Deeds", ayahs: [116, 117, 118, 119, 120], description: { en: "Disbelievers' wealth useless, avoid hypocrites", ur: "کافروں کا مال بے کار ہے، منافقوں سے بچو" } },
      { name: "Battle Preparations", ayahs: [121, 122, 123, 124, 125, 126, 127, 128, 129], description: { en: "Positioning troops, angels promised", ur: "فوج کی صف بندی، فرشتوں کا وعدہ" } },
      { name: "Riba Prohibition", ayahs: [130, 131, 132], description: { en: "Avoid usury, obey Allah and Messenger", ur: "سود سے بچو، اللہ اور رسول کی اطاعت کرو" } },
      { name: "Paradise and Forgiveness", ayahs: [133, 134, 135, 136], description: { en: "Race to Paradise, characteristics of pious", ur: "جنت کی طرف دوڑو، متقین کی خصوصیات" } },
      { name: "Historical Lessons", ayahs: [137, 138, 139, 140, 141, 142, 143], description: { en: "Patterns of nations, do not weaken", ur: "قوموں کی تاریخ سے سبق، کمزور نہ پڑو" } },
      { name: "Death and Martyrdom", ayahs: [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158], description: { en: "Muhammad mortal, steadfast fighters", ur: "محمد ﷺ فانی ہیں، ثابت قدم مجاہدین" } },
      { name: "Prophet's Character", ayahs: [159, 160, 161, 162, 163, 164], description: { en: "Gentleness, consultation, trust", ur: "نرمی، مشاورت، بھروسہ" } },
      { name: "Uhud Analysis", ayahs: [165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175], description: { en: "What happened, martyrs alive, Hasbunallah", ur: "کیا ہوا، شہداء زندہ ہیں، حسبنا اللہ" } },
      { name: "Disbelievers' Fate", ayahs: [176, 177, 178, 179, 180], description: { en: "No harm to Allah, miserliness condemned", ur: "اللہ کو کوئی نقصان نہیں، بخل کی مذمت" } },
      { name: "Response to Mockery", ayahs: [181, 182, 183, 184, 185, 186, 187, 188, 189], description: { en: "Rejectors recorded, everyone tastes death", ur: "انکار کرنے والوں کا ریکارڈ، ہر نفس موت چکھے گا" } },
      { name: "Signs in Creation", ayahs: [190, 191, 192, 193, 194], description: { en: "Contemplating heavens and earth", ur: "آسمانوں اور زمین میں غور و فکر" } },
      { name: "Response to Supplication", ayahs: [195, 196, 197, 198], description: { en: "Allah accepts prayers, rewards emigrants", ur: "اللہ دعائیں قبول کرتا ہے، ہجرت کرنے والوں کو اجر دیتا ہے" } },
      { name: "Righteous Ahlul Kitab", ayahs: [199], description: { en: "Some truly believe", ur: "بعض واقعی ایمان رکھتے ہیں" } },
      { name: "Final Exhortation", ayahs: [200], description: { en: "Be patient, excel in patience, guard frontiers", ur: "صبر کرو، صبر میں بازی لے جاؤ، سرحدوں کی حفاظت کرو" } }
    ]
  },

  uniqueInsight: {
    title: { en: "Muhammad is Only a Messenger", ur: "محمد ﷺ صرف ایک رسول ہیں" },
    insight: {
      en: "Verse 144 addresses a critical moment during Uhud when rumors spread that Prophet Muhammad had been killed, causing some companions to lose hope and flee. The verse asks pointedly: 'If he dies or is killed, will you turn back on your heels?' This established a foundational principle: Islam is not personality-worship. The faith transcends any individual, even the Prophet himself. Abu Bakr quoted this very verse after the Prophet's death to steady the companions, telling Umar: 'Whoever worshipped Muhammad, know that Muhammad has died. And whoever worships Allah, know that Allah is Ever-Living and does not die.' This verse eternally protects Islam from the collapse that befalls movements built around charismatic individuals. The Prophet is honored and followed, but the religion belongs to Allah alone.",
      ur: "آیت 144 اُحد کے نازک لمحے کو بیان کرتی ہے جب یہ افواہ پھیلی کہ نبی ﷺ شہید ہو گئے، جس سے بعض صحابہ مایوس ہو کر بھاگ گئے۔ آیت تیکھے انداز میں پوچھتی ہے: 'اگر وہ وفات پائیں یا شہید ہو جائیں تو کیا تم الٹے پاؤں پھر جاؤ گے؟' یہ ایک بنیادی اصول قائم کرتی ہے: اسلام شخصیت پرستی نہیں۔ ایمان کسی بھی فرد سے بالاتر ہے، خود نبی ﷺ سے بھی۔ ابوبکر رضی اللہ عنہ نے نبی ﷺ کی وفات کے بعد یہی آیت پڑھ کر صحابہ کو سنبھالا اور عمر سے کہا: 'جو محمد ﷺ کی عبادت کرتا تھا تو جان لے کہ محمد ﷺ وفات پا گئے۔ اور جو اللہ کی عبادت کرتا ہے تو اللہ ہمیشہ زندہ ہے، کبھی نہیں مرے گا۔' یہ آیت ہمیشہ کے لیے اسلام کو اس زوال سے محفوظ رکھتی ہے جو شخصیت پر مبنی تحریکوں کو آتا ہے۔"
    },
    arabicTerm: "وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ",
    rootMeaning: { en: "ر-س-ل (to send) - emphasizing prophets are sent messengers, not divine", ur: "ر-س-ل (بھیجنا) - اس بات پر زور کہ انبیاء بھیجے ہوئے رسول ہیں، خدا نہیں" },
    keyAyah: 144
  },

  historicalContext: {
    revelationPeriod: { en: "Medinan period, largely after Battle of Uhud (3 AH/625 CE)", ur: "مدنی دور، زیادہ تر غزوۂ اُحد کے بعد (3 ہجری / 625 عیسوی)" },
    occasion: { en: "Multiple occasions: (1) Delegation of Najran Christians came to debate about Jesus, leading to Mubahala verses. (2) Battle of Uhud where Muslims suffered setback after initial victory, when archers abandoned posts. (3) Ongoing engagement with Medinan Jewish tribes. The surah addresses Christian theology regarding Jesus, Jewish claims, and provides detailed post-battle analysis of Uhud.", ur: "متعدد مواقع: (1) نجران کے عیسائی وفد نے عیسیٰ کے بارے میں مناظرہ کیا، جس سے مباہلہ کی آیات نازل ہوئیں۔ (2) غزوۂ اُحد جہاں ابتدائی فتح کے بعد تیراندازوں کے مورچے چھوڑنے سے مسلمانوں کو نقصان ہوا۔ (3) مدنی یہودی قبائل سے مسلسل معاملات۔ سورت عیسیٰ کے بارے میں عیسائی عقیدے، یہودی دعوؤں اور اُحد کا تفصیلی تجزیہ پیش کرتی ہے۔" },
    note: { en: "This surah and Al-Baqarah are called 'Al-Zahrawain' (the two lights) and will come as clouds or flocks of birds interceding for their reciters on Judgment Day. The last ten verses (190-200) are particularly praised by the Prophet who wept upon reading them and said: 'Woe to whoever reads these and does not contemplate them.'", ur: "یہ سورت اور البقرہ کو 'الزہراوین' (دو نور) کہا جاتا ہے اور یہ قیامت کے دن بادلوں یا پرندوں کے جھنڈ کی طرح آ کر اپنے پڑھنے والوں کی سفارش کریں گی۔ آخری دس آیات (190-200) کی خاص فضیلت ہے۔ نبی ﷺ نے انہیں پڑھ کر رویا اور فرمایا: 'اس شخص کے لیے ہلاکت جو انہیں پڑھے اور غور نہ کرے۔'" }
  },

  linguisticFeatures: {
    features: [
      { name: "Muqatta'at Opening", description: "الم - Alif Lam Mim", example: { en: "Mysterious letters beginning the surah", ur: "سورت کے آغاز میں معمّہ حروف" }, ayah: 1 },
      { name: "Kun Fayakun", description: "كن فيكون", example: { en: "Divine creative command for Jesus", ur: "عیسیٰ کی تخلیق کے لیے الٰہی حکم" }, ayah: 47 },
      { name: "Rhetorical Question", description: "أَفَإِن مَّاتَ أَوْ قُتِلَ", example: { en: "If he dies or is killed, will you turn back?", ur: "اگر وہ وفات پائیں یا قتل ہوں تو کیا تم پلٹ جاؤ گے؟" }, ayah: 144 },
      { name: "Call Formula", description: "قُلْ يَا أَهْلَ الْكِتَابِ", example: { en: "Direct address to People of Book", ur: "اہلِ کتاب سے براہِ راست خطاب" }, ayahs: [64, 65, 98, 99] },
      { name: "Triple Imperative Ending", description: "اصْبِرُوا وَصَابِرُوا وَرَابِطُوا", example: { en: "Be patient, excel in patience, guard", ur: "صبر کرو، صبر میں بازی لے جاؤ، اور مورچے سنبھالو" }, ayah: 200 },
      { name: "Ulu al-Albab Formula", description: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ", example: { en: "Signs for people of understanding", ur: "عقل والوں کے لیے نشانیاں" }, ayahs: [7, 190] }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 2, name: "Al-Baqarah", relationship: { en: "Both are 'Zahrawain', both address Ahlul Kitab extensively", ur: "دونوں 'زہراوین' ہیں، دونوں اہلِ کتاب کو تفصیل سے مخاطب کرتی ہیں" }, type: "paired_surahs" },
      { surah: 4, name: "An-Nisa", relationship: { en: "Both discuss Jesus, women's rights, and battle regulations", ur: "دونوں عیسیٰ، خواتین کے حقوق اور جنگ کے احکام بیان کرتی ہیں" }, type: "thematic_continuation" },
      { surah: 5, name: "Al-Ma'idah", relationship: { en: "Both address Christian beliefs about Jesus", ur: "دونوں عیسیٰ کے بارے میں عیسائی عقائد کا جواب دیتی ہیں" }, type: "thematic_parallel" },
      { surah: 19, name: "Maryam", relationship: { en: "Both narrate stories of Zakariyya, Maryam, and Jesus", ur: "دونوں زکریا، مریم اور عیسیٰ کے قصے بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 8, name: "Al-Anfal", relationship: { en: "Battle of Badr context compared with Uhud here", ur: "غزوۂ بدر کا سیاق یہاں اُحد سے موازنہ" }, type: "battle_narratives" },
      { surah: 33, name: "Al-Ahzab", relationship: { en: "Both discuss battles and hypocrites' behavior", ur: "دونوں جنگوں اور منافقوں کے رویے کا ذکر کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 57, name: "Al-Hadid", relationship: { en: "Both discuss Jesus and previous scripture", ur: "دونوں عیسیٰ اور سابقہ صحیفوں کا ذکر کرتی ہیں" }, type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
