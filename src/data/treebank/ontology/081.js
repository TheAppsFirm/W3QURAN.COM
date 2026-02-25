/**
 * Surah At-Takwir (81) - Ontology of Quranic Concepts
 * The Folding / The Overthrowing
 * Theme: Day of Judgment signs, honoring the Messenger, Quran's authority
 */

export const ONTOLOGY = {
  surahId: 81,
  surahName: "At-Takwir",
  surahNameArabic: "التكوير",
  revelationType: "Makki",
  totalAyahs: 29,

  categories: {
    cosmicSigns: {
      name: "Cosmic Signs of Judgment",
      nameArabic: "علامات القيامة الكونية",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "الشَّمْسُ كُوِّرَتْ", meaning: { en: "Sun wrapped up", ur: "سورج لپیٹ دیا جائے گا" }, explanation: { en: "Takwir = folding like turban - light extinguished", ur: "تکویر = پگڑی کی طرح لپیٹنا - روشنی بجھ جائے گی" }, verseRef: "81:1" },
        { term: "النُّجُومُ انكَدَرَتْ", meaning: { en: "Stars fall/darken", ur: "ستارے بے نور ہو کر گر جائیں گے" }, explanation: { en: "Lose light and fall from orbits", ur: "روشنی کھو دیں گے اور مدار سے گر جائیں گے" }, verseRef: "81:2" },
        { term: "الْجِبَالُ سُيِّرَتْ", meaning: { en: "Mountains moved", ur: "پہاڑ چلائے جائیں گے" }, explanation: { en: "Set in motion, become dust", ur: "حرکت میں آئیں گے اور دھول بن جائیں گے" }, verseRef: "81:3" },
        { term: "الْعِشَارُ عُطِّلَتْ", meaning: { en: "Pregnant camels neglected", ur: "دس ماہ کی حاملہ اونٹنیاں بے کار چھوڑ دی جائیں گی" }, explanation: { en: "Most prized possession abandoned", ur: "سب سے قیمتی ملکیت چھوڑ دی جائے گی" }, verseRef: "81:4" },
        { term: "الْوُحُوشُ حُشِرَتْ", meaning: { en: "Wild beasts gathered", ur: "جنگلی جانور جمع کیے جائیں گے" }, explanation: { en: "Animals assembled for justice", ur: "جانور انصاف کے لیے اکٹھے کیے جائیں گے" }, verseRef: "81:5" },
        { term: "الْبِحَارُ سُجِّرَتْ", meaning: { en: "Seas set ablaze", ur: "سمندر بھڑکا دیے جائیں گے" }, explanation: { en: "Oceans ignited or overflowed", ur: "سمندروں میں آگ لگے گی یا وہ ابل پڑیں گے" }, verseRef: "81:6" }
      ]
    },

    humanEvents: {
      name: "Human Events on That Day",
      nameArabic: "أحداث البشر يومئذ",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "النُّفُوسُ زُوِّجَتْ", meaning: { en: "Souls paired", ur: "روحیں جسموں سے ملائی جائیں گی" }, explanation: { en: "Reunited with bodies or grouped by type", ur: "جسموں سے دوبارہ ملائی جائیں گی یا قسم کے لحاظ سے جوڑی جائیں گی" }, verseRef: "81:7" },
        { term: "الْمَوْءُودَةُ سُئِلَتْ", meaning: { en: "Buried girl asked", ur: "زندہ دفن کی گئی لڑکی سے پوچھا جائے گا" }, explanation: { en: "Infanticide victim questioned - murderer exposed", ur: "بچی قتل کا شکار سے سوال - قاتل بے نقاب" }, verseRef: "81:8-9" },
        { term: "الصُّحُفُ نُشِرَتْ", meaning: { en: "Records spread open", ur: "اعمال نامے کھول دیے جائیں گے" }, explanation: { en: "Deed scrolls opened for reading", ur: "اعمال کے طومار پڑھنے کے لیے کھولے جائیں گے" }, verseRef: "81:10" }
      ]
    },

    finalRealities: {
      name: "Final Realities",
      nameArabic: "الحقائق الأخيرة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "السَّمَاءُ كُشِطَتْ", meaning: { en: "Sky stripped away", ur: "آسمان اکھاڑ دیا جائے گا" }, explanation: { en: "Like skin peeled off - completely removed", ur: "کھال کی طرح اتارا - مکمل طور پر ہٹایا" }, verseRef: "81:11" },
        { term: "الْجَحِيمُ سُعِّرَتْ", meaning: { en: "Hell set ablaze", ur: "جہنم بھڑکائی جائے گی" }, explanation: { en: "Fire intensified for punishing", ur: "سزا کے لیے آگ تیز کی جائے گی" }, verseRef: "81:12" },
        { term: "الْجَنَّةُ أُزْلِفَتْ", meaning: { en: "Paradise brought near", ur: "جنت قریب لائی جائے گی" }, explanation: { en: "Approaches its dwellers - welcoming", ur: "اپنے رہنے والوں کے قریب آئے گی - خوش آمدید" }, verseRef: "81:13" },
        { term: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ", meaning: { en: "Soul knows what it brought", ur: "ہر جان کو معلوم ہو جائے گا کہ وہ کیا لایا ہے" }, explanation: { en: "Answer to all 12 'when' clauses", ur: "تمام 12 'جب' شرائط کا جواب" }, verseRef: "81:14" }
      ]
    },

    cosmicOaths: {
      name: "Oaths on Celestial Bodies",
      nameArabic: "القسم بالكواكب",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "الْخُنَّسِ الْجَوَارِ الْكُنَّسِ", meaning: { en: "Retreating, running, disappearing stars", ur: "پیچھے ہٹنے والے، چلنے والے، چھپ جانے والے ستارے" }, explanation: { en: "Planets in retrograde motion or stars at dawn", ur: "سیاروں کی الٹی چال یا فجر کے ستارے" }, verseRef: "81:15-16" },
        { term: "اللَّيْلِ إِذَا عَسْعَسَ", meaning: { en: "Night when it departs/arrives", ur: "رات جب وہ آتی/جاتی ہے" }, explanation: { en: "Rare word for night's transition", ur: "رات کی تبدیلی کا نایاب لفظ" }, verseRef: "81:17" },
        { term: "الصُّبْحِ إِذَا تَنَفَّسَ", meaning: { en: "Dawn when it breathes", ur: "صبح جب سانس لیتی ہے" }, explanation: { en: "Light 'breathes' into darkness - poetic", ur: "روشنی اندھیرے میں 'سانس لیتی ہے' - شاعرانہ" }, verseRef: "81:18" }
      ]
    },

    jibreelDescription: {
      name: "Jibreel's Noble Attributes",
      nameArabic: "صفات جبريل",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "رَسُولٍ كَرِيمٍ", meaning: { en: "Noble messenger", ur: "عزت والا فرشتہ (جبرائیل)" }, explanation: { en: "Jibreel brings revelation", ur: "جبرائیل وحی لاتا ہے" }, verseRef: "81:19" },
        { term: "ذِي قُوَّةٍ", meaning: { en: "Possessor of power", ur: "طاقت والا" }, explanation: { en: "Strength to execute divine missions", ur: "الہٰی مشنز انجام دینے کی طاقت" }, verseRef: "81:20" },
        { term: "عِندَ ذِي الْعَرْشِ مَكِينٍ", meaning: { en: "Established near Throne", ur: "عرش والے کے نزدیک معزز مقام رکھنے والا" }, explanation: { en: "High rank with Allah", ur: "Allah کے ہاں بلند مرتبہ" }, verseRef: "81:20" },
        { term: "مُّطَاعٍ ثَمَّ أَمِينٍ", meaning: { en: "Obeyed there, trustworthy", ur: "وہاں اس کی اطاعت کی جاتی ہے، امانت دار" }, explanation: { en: "Angels obey him, completely trusted", ur: "فرشتے اس کی اطاعت کرتے ہیں، مکمل طور پر قابل اعتماد" }, verseRef: "81:21" }
      ]
    },

    prophetDefense: {
      name: "Defense of the Prophet",
      nameArabic: "الدفاع عن النبي",
      color: '#EC4899',
      icon: 'Shield',
      concepts: [
        { term: "مَا صَاحِبُكُم بِمَجْنُونٍ", meaning: { en: "Your companion is not mad", ur: "تمہارا ساتھی پاگل نہیں ہے" }, explanation: { en: "Refutes their accusation of insanity", ur: "ان کے پاگل پن کے الزام کی تردید" }, verseRef: "81:22" },
        { term: "رَآهُ بِالْأُفُقِ الْمُبِينِ", meaning: { en: "Saw him on clear horizon", ur: "اس نے اسے (جبرائیل کو) روشن افق پر دیکھا" }, explanation: { en: "Prophet saw Jibreel in true form", ur: "نبی نے جبرائیل کو اصلی صورت میں دیکھا" }, verseRef: "81:23" },
        { term: "مَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ", meaning: { en: "Not stingy with unseen", ur: "وہ غیب (کی خبروں) پر بخل نہیں کرتا" }, explanation: { en: "Shares all revelation, hides nothing", ur: "ساری وحی بتاتا ہے، کچھ نہیں چھپاتا" }, verseRef: "81:24" }
      ]
    },

    quranAuthority: {
      name: "Quran's Divine Authority",
      nameArabic: "سلطان القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "مَا هُوَ بِقَوْلِ شَيْطَانٍ", meaning: { en: "Not Satan's word", ur: "یہ شیطان کا کلام نہیں ہے" }, explanation: { en: "Divine origin, not demonic", ur: "الہٰی ماخذ، شیطانی نہیں" }, verseRef: "81:25" },
        { term: "ذِكْرٌ لِّلْعَالَمِينَ", meaning: { en: "Reminder for all worlds", ur: "تمام جہانوں کے لیے نصیحت" }, explanation: { en: "Universal message", ur: "عالمگیر پیغام" }, verseRef: "81:27" },
        { term: "لِمَن شَاءَ... أَن يَسْتَقِيمَ", meaning: { en: "For whoever wills to go straight", ur: "جو سیدھا چلنا چاہے اس کے لیے" }, explanation: { en: "Guidance for those seeking truth", ur: "سچ کے متلاشیوں کے لیے ہدایت" }, verseRef: "81:28" },
        { term: "وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ", meaning: { en: "You don't will except Allah wills", ur: "تم نہیں چاہ سکتے جب تک Allah نہ چاہے" }, explanation: { en: "Human will within divine sovereignty", ur: "انسانی ارادہ الہٰی حاکمیت کے تحت" }, verseRef: "81:29" }
      ]
    }
  },

  relationships: [
    { from: "12 'when' clauses", to: "علمت نفس", type: "answer", description: { en: "Soul's knowledge follows cosmic collapse", ur: "کائناتی انہدام کے بعد روح کو علم ہوگا" } },
    { from: "رسول كريم", to: "صاحبكم", type: "transmission", description: { en: "Jibreel to Prophet to people", ur: "جبرائیل سے نبی تک اور نبی سے لوگوں تک" } },
    { from: "المؤودة", to: "بأي ذنب", type: "rhetorical", description: { en: "No answer - exposes injustice", ur: "کوئی جواب نہیں - ظلم کو بے نقاب کرتا ہے" } },
    { from: "يستقيم", to: "يشاء الله", type: "dependency", description: { en: "Human will under divine will", ur: "انسانی ارادہ الہٰی مشیئت کے تحت" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Cosmic Collapse", verses: "81:1-6", description: { en: "Sun, stars, mountains, animals, seas transformed", ur: "سورج، ستارے، پہاڑ، جانور، سمندر بدل جائیں گے" } },
      { stage: 2, theme: "Human Events", verses: "81:7-10", description: { en: "Souls paired, infanticide questioned, records opened", ur: "روحیں جوڑی جائیں، بچی قتل پر سوال، اعمال نامے کھولے" } },
      { stage: 3, theme: "Final Realities", verses: "81:11-14", description: { en: "Sky removed, Hell/Paradise ready, soul knows", ur: "آسمان ہٹایا، جہنم/جنت تیار، روح جان لے" } },
      { stage: 4, theme: "Cosmic Oaths", verses: "81:15-18", description: { en: "Stars, night, dawn bear witness", ur: "ستارے، رات، صبح گواہی دیتے ہیں" } },
      { stage: 5, theme: "Jibreel's Honor", verses: "81:19-21", description: { en: "Noble, powerful, trusted messenger", ur: "عزت دار، طاقتور، امانت دار فرشتہ" } },
      { stage: 6, theme: "Prophet's Defense", verses: "81:22-25", description: { en: "Not mad, saw Jibreel, not Satan's word", ur: "پاگل نہیں، جبرائیل کو دیکھا، شیطان کا کلام نہیں" } },
      { stage: 7, theme: "Quran's Authority", verses: "81:26-29", description: { en: "Where else to go? Reminder for all", ur: "اور کہاں جاؤ گے؟ سب کے لیے نصیحت" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Protect the vulnerable", how: "Remember the maw'udah - don't harm the weak", verse: "81:8-9" },
      { principle: "Trust the Prophet", how: "He's your companion, not mad, shares everything", verse: "81:22-24" },
      { principle: "Quran is pure", how: "Not from Satan - divine source through noble angel", verse: "81:19-25" },
      { principle: "Choose to go straight", how: "Guidance available - will you take it?", verse: "81:28" },
      { principle: "Submit to Allah's will", how: "Your choice operates within His sovereignty", verse: "81:29" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Unanswered Question", ur: "بے جواب سوال" },
    insight: { en: "Verses 8-9 ask the maw'udah (buried infant girl): 'For what sin was she killed?' The question is rhetorical - she has NO sin. But the real target is the murderer. On Judgment Day, the victim becomes the witness. The innocent girl, who couldn't speak in this life, will testify against those who killed her. This was Islam's first condemnation of female infanticide, elevating a discarded baby girl to a key witness on the Day of Judgment. The question goes unanswered because there IS no answer - the crime was answerless.", ur: "آیات 8-9 موءودہ (زندہ دفن کی گئی بچی) سے پوچھتی ہیں: 'کس گناہ میں مار ڈالی گئی؟' سوال بلاغی ہے - اس کا کوئی گناہ نہیں۔ لیکن اصل نشانہ قاتل ہے۔ قیامت کے دن مظلوم گواہ بنے گی۔ معصوم بچی جو اس زندگی میں بول نہیں سکتی تھی، اپنے قاتلوں کے خلاف گواہی دے گی۔ یہ اسلام کی بچیوں کو زندہ دفن کرنے کی پہلی مذمت تھی، ایک پھینکی ہوئی بچی کو قیامت کی اہم گواہ کا درجہ دیا۔ سوال بے جواب ہے کیونکہ اس جرم کا کوئی جواب ہے ہی نہیں۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "12 'إذا' clauses", example: { en: "Verses 1-13", ur: "آیات 1-13" }, effect: { en: "Building tension before answer in v14", ur: "آیت 14 کے جواب سے پہلے تجسس بڑھانا" } },
      { feature: "Rare تَنَفَّسَ", example: { en: "Dawn 'breathes'", ur: "صبح 'سانس لیتی ہے'" }, effect: { en: "Personification of light emerging", ur: "روشنی کے نمودار ہونے کی تشخیص" } },
      { feature: "صاحبكم", example: { en: "Your companion", ur: "تمہارا ساتھی" }, effect: { en: "Intimacy - Prophet is one of them", ur: "قربت - نبی ان میں سے ایک ہے" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "81:1", topic: "Sun's end", note: "Modern astronomy: sun will expand then collapse" },
      { verse: "81:15-16", topic: "Planetary motion", note: "May refer to retrograde motion of planets" }
    ]
  }
};

export default ONTOLOGY;
