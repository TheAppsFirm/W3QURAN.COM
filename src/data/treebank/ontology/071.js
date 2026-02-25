/**
 * Surah Nuh (71) - Ontology of Quranic Concepts
 * Noah
 * Theme: Prophet Nuh's dawah methods, people's rejection, cosmic signs, flood
 */

export const ONTOLOGY = {
  surahId: 71,
  surahName: "Nuh",
  surahNameArabic: "نوح",
  revelationType: "Makki",
  totalAyahs: 28,

  categories: {
    propheticMission: {
      name: "Nuh's Mission",
      nameUr: "نوح علیہ السلام کی رسالت",
      nameArabic: "رسالة نوح",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ", meaning: { en: "We sent Nuh to his people", ur: "ہم نے نوح کو ان کی قوم کی طرف بھیجا" }, explanation: { en: "Divine appointment", ur: "الہی تقرری" }, verseRef: "71:1" },
        { term: "أَنذِرْ قَوْمَكَ", meaning: { en: "Warn your people", ur: "اپنی قوم کو خبردار کرو" }, explanation: { en: "Core mission: warning", ur: "بنیادی مشن: انتباہ" }, verseRef: "71:1" },
        { term: "مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ", meaning: { en: "Before painful punishment comes", ur: "اس سے پہلے کہ دردناک عذاب آ جائے" }, explanation: { en: "Urgency of message", ur: "پیغام کی فوری ضرورت" }, verseRef: "71:1" },
        { term: "نَذِيرٌ مُّبِينٌ", meaning: { en: "Clear warner", ur: "واضح ڈرانے والا" }, explanation: { en: "Nuh's self-description", ur: "نوح کی خود بیانی" }, verseRef: "71:2" }
      ]
    },

    coreMessage: {
      name: "Core Message",
      nameUr: "بنیادی پیغام",
      nameArabic: "الرسالة الأساسية",
      color: '#F59E0B',
      icon: 'MessageCircle',
      concepts: [
        { term: "اعْبُدُوا اللَّهَ", meaning: { en: "Worship Allah", ur: "اللہ کی عبادت کرو" }, explanation: { en: "First command", ur: "پہلا حکم" }, verseRef: "71:3" },
        { term: "وَاتَّقُوهُ", meaning: { en: "Fear Him", ur: "اس سے ڈرو" }, explanation: { en: "Second command", ur: "دوسرا حکم" }, verseRef: "71:3" },
        { term: "وَأَطِيعُونِ", meaning: { en: "Obey me", ur: "میری اطاعت کرو" }, explanation: { en: "Third command", ur: "تیسرا حکم" }, verseRef: "71:3" }
      ]
    },

    forgivenessBenefits: {
      name: "Benefits of Forgiveness",
      nameUr: "استغفار کے فوائد",
      nameArabic: "فوائد الاستغفار",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "يَغْفِرْ لَكُم مِّن ذُنُوبِكُمْ", meaning: { en: "He will forgive your sins", ur: "وہ تمہارے گناہ معاف کرے گا" }, explanation: { en: "Spiritual benefit", ur: "روحانی فائدہ" }, verseRef: "71:4" },
        { term: "وَيُؤَخِّرْكُمْ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: { en: "Grant respite to appointed term", ur: "مقررہ وقت تک مہلت دے گا" }, explanation: { en: "Extended life", ur: "عمر میں اضافہ" }, verseRef: "71:4" },
        { term: "يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا", meaning: { en: "Send rain abundantly", ur: "آسمان سے تم پر موسلادھار بارش بھیجے گا" }, explanation: { en: "Rain blessing", ur: "بارش کی نعمت" }, verseRef: "71:11" },
        { term: "وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ", meaning: { en: "Increase wealth and children", ur: "مال اور اولاد میں اضافہ کرے گا" }, explanation: { en: "Material blessing", ur: "مادی نعمت" }, verseRef: "71:12" },
        { term: "وَيَجْعَل لَّكُمْ جَنَّاتٍ", meaning: { en: "Make gardens for you", ur: "تمہارے لیے باغات بنائے گا" }, explanation: { en: "Gardens", ur: "باغات" }, verseRef: "71:12" },
        { term: "وَيَجْعَل لَّكُمْ أَنْهَارًا", meaning: { en: "Make rivers for you", ur: "تمہارے لیے نہریں بنائے گا" }, explanation: { en: "Rivers", ur: "نہریں" }, verseRef: "71:12" }
      ]
    },

    dawahMethods: {
      name: "Methods of Dawah",
      nameUr: "دعوت کے طریقے",
      nameArabic: "أساليب الدعوة",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا", meaning: { en: "Called my people night and day", ur: "میں نے اپنی قوم کو رات دن بلایا" }, explanation: { en: "Persistent effort", ur: "مسلسل کوشش" }, verseRef: "71:5" },
        { term: "دَعَوْتُهُمْ جِهَارًا", meaning: { en: "Called them publicly", ur: "میں نے انہیں علانیہ بلایا" }, explanation: { en: "Open preaching", ur: "کھلی تبلیغ" }, verseRef: "71:8" },
        { term: "أَعْلَنتُ لَهُمْ", meaning: { en: "Announced to them", ur: "میں نے ان کے سامنے اعلان کیا" }, explanation: { en: "Public announcements", ur: "عوامی اعلانات" }, verseRef: "71:9" },
        { term: "وَأَسْرَرْتُ لَهُمْ إِسْرَارًا", meaning: { en: "Confided to them secretly", ur: "اور انہیں خفیہ طور پر سمجھایا" }, explanation: { en: "Private counseling", ur: "خفیہ مشاورت" }, verseRef: "71:9" }
      ]
    },

    peoplesRejection: {
      name: "People's Rejection",
      nameUr: "قوم کا انکار",
      nameArabic: "رفض القوم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَلَمْ يَزِدْهُمْ دُعَائِي إِلَّا فِرَارًا", meaning: { en: "My calling only increased their flight", ur: "میری دعوت نے ان کی فرار میں اضافہ ہی کیا" }, explanation: { en: "Running from truth", ur: "سچائی سے بھاگنا" }, verseRef: "71:6" },
        { term: "جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ", meaning: { en: "Put fingers in their ears", ur: "انہوں نے کانوں میں انگلیاں ڈال لیں" }, explanation: { en: "Refusing to hear", ur: "سننے سے انکار" }, verseRef: "71:7" },
        { term: "وَاسْتَغْشَوْا ثِيَابَهُمْ", meaning: { en: "Covered themselves with garments", ur: "اپنے کپڑوں سے منہ ڈھانپ لیا" }, explanation: { en: "Refusing to see", ur: "دیکھنے سے انکار" }, verseRef: "71:7" },
        { term: "وَأَصَرُّوا", meaning: { en: "Persisted", ur: "ضد پر اڑے رہے" }, explanation: { en: "Stubbornness in rejection", ur: "انکار میں ہٹ دھرمی" }, verseRef: "71:7" },
        { term: "وَاسْتَكْبَرُوا اسْتِكْبَارًا", meaning: { en: "Were arrogant with arrogance", ur: "بہت تکبر کیا" }, explanation: { en: "Extreme arrogance", ur: "انتہائی تکبر" }, verseRef: "71:7" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs",
      nameUr: "کائناتی نشانیاں",
      nameArabic: "الآيات الكونية",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "خَلَقَكُمْ أَطْوَارًا", meaning: { en: "Created you in stages", ur: "تمہیں مختلف مراحل میں پیدا کیا" }, explanation: { en: "Human development", ur: "انسانی نشوونما" }, verseRef: "71:14" },
        { term: "سَبْعَ سَمَاوَاتٍ طِبَاقًا", meaning: { en: "Seven heavens in layers", ur: "سات آسمان تہہ در تہہ" }, explanation: { en: "Layered universe", ur: "تہہ دار کائنات" }, verseRef: "71:15" },
        { term: "الْقَمَرَ فِيهِنَّ نُورًا", meaning: { en: "Moon therein as light", ur: "چاند کو ان میں روشنی بنایا" }, explanation: { en: "Moon reflects light", ur: "چاند روشنی منعکس کرتا ہے" }, verseRef: "71:16" },
        { term: "الشَّمْسَ سِرَاجًا", meaning: { en: "Sun as lamp", ur: "سورج کو چراغ بنایا" }, explanation: { en: "Sun generates light", ur: "سورج روشنی پیدا کرتا ہے" }, verseRef: "71:16" },
        { term: "أَنبَتَكُم مِّنَ الْأَرْضِ نَبَاتًا", meaning: { en: "Grew you from earth like plants", ur: "تمہیں زمین سے پودوں کی طرح اگایا" }, explanation: { en: "Human origin from earth", ur: "زمین سے انسان کی ابتداء" }, verseRef: "71:17" },
        { term: "الْأَرْضَ بِسَاطًا", meaning: { en: "Earth as an expanse", ur: "زمین کو فرش بنایا" }, explanation: { en: "Earth spread out", ur: "زمین بچھائی گئی" }, verseRef: "71:19" }
      ]
    },

    idols: {
      name: "The Five Idols",
      nameUr: "پانچ بت",
      nameArabic: "الأصنام الخمسة",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَدًّا", meaning: { en: "Wadd", ur: "وَد" }, explanation: { en: "Idol of love/moon - tribe of Kalb", ur: "محبت/چاند کا بت - قبیلہ کلب" }, verseRef: "71:23" },
        { term: "سُوَاعًا", meaning: { en: "Suwa", ur: "سُواع" }, explanation: { en: "Idol - tribe of Hamdan", ur: "بت - قبیلہ ہمدان" }, verseRef: "71:23" },
        { term: "يَغُوثَ", meaning: { en: "Yaghuth", ur: "یغوث" }, explanation: { en: "Idol of help - tribe of Murad", ur: "مدد کا بت - قبیلہ مراد" }, verseRef: "71:23" },
        { term: "يَعُوقَ", meaning: { en: "Ya'uq", ur: "یعوق" }, explanation: { en: "Idol - tribe of Madhhij", ur: "بت - قبیلہ مذحج" }, verseRef: "71:23" },
        { term: "نَسْرًا", meaning: { en: "Nasr", ur: "نسر" }, explanation: { en: "Idol of eagle - tribe of Himyar", ur: "عقاب کا بت - قبیلہ حمیر" }, verseRef: "71:23" }
      ]
    },

    nuhsDua: {
      name: "Nuh's Final Supplication",
      nameUr: "نوح علیہ السلام کی آخری دعا",
      nameArabic: "دعاء نوح الأخير",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "لَا تَذَرْ عَلَى الْأَرْضِ مِنَ الْكَافِرِينَ دَيَّارًا", meaning: { en: "Don't leave single disbeliever on earth", ur: "زمین پر ایک بھی کافر نہ چھوڑ" }, explanation: { en: "Request for complete cleansing", ur: "مکمل صفائی کی درخواست" }, verseRef: "71:26" },
        { term: "إِن تَذَرْهُمْ يُضِلُّوا عِبَادَكَ", meaning: { en: "If You leave them, they will mislead Your servants", ur: "اگر تو نے انہیں چھوڑا تو یہ تیرے بندوں کو گمراہ کریں گے" }, explanation: { en: "Reason: they corrupt others", ur: "وجہ: وہ دوسروں کو بگاڑتے ہیں" }, verseRef: "71:27" },
        { term: "وَلَا يَلِدُوا إِلَّا فَاجِرًا كَفَّارًا", meaning: { en: "They only give birth to wicked disbelievers", ur: "یہ فاجر اور سخت کافر ہی پیدا کریں گے" }, explanation: { en: "Generational corruption", ur: "نسل در نسل بگاڑ" }, verseRef: "71:27" },
        { term: "اغْفِرْ لِي وَلِوَالِدَيَّ", meaning: { en: "Forgive me and my parents", ur: "مجھے اور میرے والدین کو بخش دے" }, explanation: { en: "Seeking forgiveness", ur: "مغفرت طلب کرنا" }, verseRef: "71:28" },
        { term: "وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا", meaning: { en: "And whoever enters my house as believer", ur: "اور جو کوئی ایمان لا کر میرے گھر میں داخل ہو" }, explanation: { en: "Forgiveness for believers", ur: "مومنوں کے لیے مغفرت" }, verseRef: "71:28" }
      ]
    },

    punishment: {
      name: "Punishment",
      nameUr: "سزا",
      nameArabic: "العقوبة",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "مِّمَّا خَطِيئَاتِهِمْ أُغْرِقُوا", meaning: { en: "Because of sins they were drowned", ur: "ان کے گناہوں کی وجہ سے غرق کیے گئے" }, explanation: { en: "Drowning in flood", ur: "طوفان میں ڈوبنا" }, verseRef: "71:25" },
        { term: "فَأُدْخِلُوا نَارًا", meaning: { en: "Then made to enter Fire", ur: "پھر آگ میں داخل کیے گئے" }, explanation: { en: "Hellfire after death", ur: "موت کے بعد جہنم" }, verseRef: "71:25" },
        { term: "فَلَمْ يَجِدُوا لَهُم مِّن دُونِ اللَّهِ أَنصَارًا", meaning: { en: "Found no helpers besides Allah", ur: "اللہ کے سوا کوئی مددگار نہ پایا" }, explanation: { en: "Idols useless", ur: "بت بے کار ثابت ہوئے" }, verseRef: "71:25" }
      ]
    }
  },

  relationships: [
    { from: "اعبدوا الله", to: "يغفر لكم", type: "causation", description: { en: "Worship → forgiveness", ur: "عبادت → مغفرت" } },
    { from: "استغفروا ربكم", to: "يرسل السماء مدراراً", type: "causation", description: { en: "Istighfar → rain", ur: "استغفار → بارش" } },
    { from: "دعوت ليلاً ونهاراً", to: "جهاراً... إسراراً", type: "progression", description: { en: "Methods evolved: night/day → public/private", ur: "طریقے تبدیل ہوئے: رات/دن → علانیہ/خفیہ" } },
    { from: "أصروا واستكبروا", to: "أغرقوا", type: "consequence", description: { en: "Persistence in kufr → drowning", ur: "کفر پر اصرار → غرق" } },
    { from: "وداً سواعاً يغوث يعوق نسراً", to: "أضلوا كثيراً", type: "causation", description: { en: "Idol worship → mass misguidance", ur: "بت پرستی → اجتماعی گمراہی" } },
    { from: "الشمس سراجاً", to: "القمر نوراً", type: "contrast", description: { en: "Sun = lamp (generates light); Moon = light (reflects)", ur: "سورج = چراغ (روشنی پیدا کرے)؛ چاند = نور (منعکس کرے)" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Mission Begins", verses: "71:1-4", description: { en: "Nuh sent, warns, promises forgiveness", ur: "نوح بھیجے گئے، ڈرایا، مغفرت کا وعدہ" } },
      { stage: 2, theme: "Persistent Dawah", verses: "71:5-9", description: { en: "Night/day, public/private calling", ur: "رات/دن، علانیہ/خفیہ دعوت" } },
      { stage: 3, theme: "Istighfar Benefits", verses: "71:10-12", description: { en: "Rain, wealth, children, gardens", ur: "بارش، مال، اولاد، باغات" } },
      { stage: 4, theme: "Cosmic Signs", verses: "71:13-20", description: { en: "Human stages, heavens, sun, moon, earth", ur: "انسانی مراحل، آسمان، سورج، چاند، زمین" } },
      { stage: 5, theme: "People's Corruption", verses: "71:21-24", description: { en: "Following wealthy, idol worship", ur: "مالداروں کی پیروی، بت پرستی" } },
      { stage: 6, theme: "Punishment & Dua", verses: "71:25-28", description: { en: "Drowned, Nuh's final supplication", ur: "غرق کیے گئے، نوح کی آخری دعا" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Persist in dawah", how: "Night and day, public and private - don't give up", verse: "71:5-9" },
      { principle: "Istighfar brings provision", how: "Seek forgiveness for rain, wealth, children", verse: "71:10-12" },
      { principle: "Reflect on creation", how: "Human stages, heavens, sun/moon - signs of Allah", verse: "71:14-16" },
      { principle: "Don't expect acceptance", how: "Even 950 years of dawah had few believers", verse: "71:6-7" },
      { principle: "Pray for believers", how: "Include parents and all believers in dua", verse: "71:28" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Five Idols - From Righteous Men to Statues", ur: "پانچ بت - نیک انسانوں سے مجسموں تک" },
    insight: { en: "The five names in verse 23 (Wadd, Suwa, Yaghuth, Ya'uq, Nasr) were originally names of righteous men between Adam and Nuh. When they died, Shaytan suggested making statues to remember them. Later generations began worshipping the statues. Ibn Abbas reported this. These same idols were later worshipped by Arab tribes: Wadd by Kalb (in Dumatul-Jandal), Suwa by Hamdan, Yaghuth by Murad, Ya'uq by Madhhij, Nasr by Himyar. This shows how bid'ah (innovation) in religion begins innocently but leads to shirk.", ur: "آیت 23 میں پانچ نام (ود، سواع، یغوث، یعوق، نسر) اصل میں آدم اور نوح کے درمیان نیک لوگوں کے نام تھے۔ جب وہ فوت ہوئے تو شیطان نے یاد رکھنے کے لیے مجسمے بنانے کا مشورہ دیا۔ بعد کی نسلوں نے ان مجسموں کی پوجا شروع کر دی۔ ابن عباس نے یہ روایت کیا۔ بعد میں عرب قبائل نے انہیں پوجا: ود - قبیلہ کلب، سواع - ہمدان، یغوث - مراد، یعوق - مذحج، نسر - حمیر۔ یہ دکھاتا ہے کہ دین میں بدعت بے ضرر شروع ہوتی ہے لیکن شرک تک پہنچا دیتی ہے۔" }
  },

  historicalContext: {
    note: { en: "Nuh preached for 950 years (29:14). His people were the first to worship idols after Adam. The flood was global according to many scholars, though some say regional. Nuh's son Kan'an and wife refused to believe. Only believers on the Ark survived. This surah, revealed in Makkah, paralleled Prophet Muhammad's struggle with Quraysh.", ur: "نوح نے 950 سال تبلیغ کی (29:14)۔ ان کی قوم آدم کے بعد بت پرستی کرنے والی پہلی قوم تھی۔ بہت سے علماء کے مطابق طوفان عالمی تھا، اگرچہ کچھ کہتے ہیں علاقائی تھا۔ نوح کے بیٹے کنعان اور بیوی نے ایمان لانے سے انکار کیا۔ صرف کشتی پر سوار مومنین بچے۔ یہ سورت مکہ میں نازل ہوئی، جو نبی ﷺ کی قریش سے جدوجہد سے مماثل تھی۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "غَفَّار", example: { en: "Ever-Forgiving", ur: "بہت معاف کرنے والا" }, effect: "faʿʿāl pattern - intensive" },
      { feature: "مِدْرَار", example: { en: "Abundantly flowing", ur: "موسلادھار" }, effect: "mifʿāl pattern - intensive" },
      { feature: "اسْتِكْبَار", example: { en: "Form X verbal noun", ur: "باب استفعال کا مصدر" }, effect: "Intensive arrogance" },
      { feature: "كُبَّار", example: { en: "Immense plot", ur: "بہت بڑی سازش" }, effect: "fuʿʿāl pattern - intensive" },
      { feature: "دَيَّار", example: { en: "Single inhabitant", ur: "ایک بھی رہنے والا" }, effect: "fayyāl pattern - any individual" },
      { feature: "كَفَّار", example: { en: "Extremely disbelieving", ur: "انتہائی کافر" }, effect: "faʿʿāl pattern - intensive" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "71:14", topic: "Embryology", note: "أَطْوَار (stages) - human development in stages" },
      { verse: "71:15-16", topic: "Astronomy", note: "سِرَاج (lamp) for sun vs نُور (light) for moon - sun generates, moon reflects" },
      { verse: "71:17", topic: "Human origin", note: "أَنبَتَكُم مِّنَ الْأَرْضِ - elements in human body from earth" }
    ]
  }
};

export default ONTOLOGY;
