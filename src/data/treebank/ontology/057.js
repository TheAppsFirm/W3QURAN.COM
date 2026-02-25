/**
 * Surah Al-Hadid (The Iron) - Surah 57
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 57,
  surahName: "Al-Hadid",
  surahNameArabic: "الحديد",
  totalAyahs: 29,
  revelationType: "Medinan",
  mainTheme: { en: "Divine Sovereignty, Spending in Allah's Way, and Iron's Creation", ur: "الٰہی حاکمیت، اللہ کی راہ میں خرچ، اور لوہے کی تخلیق" },

  categories: {
    divineAttributes: {
      name: "Divine Attributes",
      nameAr: "صفات الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Awwal", arabic: "الأول", meaning: { en: "The First - before everything", ur: "الاوّل - ہر چیز سے پہلے" }, ayahs: [3] },
        { term: "Al-Akhir", arabic: "الآخر", meaning: { en: "The Last - after everything", ur: "الآخر - ہر چیز کے بعد" }, ayahs: [3] },
        { term: "Al-Zahir", arabic: "الظاهر", meaning: { en: "The Manifest - nothing above Him", ur: "الظاہر - اس سے اوپر کوئی نہیں" }, ayahs: [3] },
        { term: "Al-Batin", arabic: "الباطن", meaning: { en: "The Hidden - nothing below Him", ur: "الباطن - اس سے پوشیدہ کوئی نہیں" }, ayahs: [3] },
        { term: "Universal Glorification", arabic: "التسبيح الكوني", meaning: { en: "All creation glorifies Allah", ur: "تمام مخلوقات اللہ کی تسبیح کرتی ہیں" }, ayahs: [1] }
      ]
    },
    cosmicDominion: {
      name: "Cosmic Dominion",
      nameAr: "الملك الكوني",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Heavens and Earth Dominion", arabic: "ملك السماوات والأرض", meaning: { en: "Sovereignty over all creation", ur: "تمام مخلوقات پر حاکمیت" }, ayahs: [2, 5] },
        { term: "Life and Death", arabic: "الإحياء والإماتة", meaning: { en: "He gives life and causes death", ur: "وہ زندگی دیتا ہے اور موت دیتا ہے" }, ayahs: [2] },
        { term: "Six Days Creation", arabic: "الخلق في ستة أيام", meaning: { en: "Creation in six periods", ur: "چھ ادوار میں تخلیق" }, ayahs: [4] },
        { term: "Throne Establishment", arabic: "الاستواء على العرش", meaning: { en: "Established on the Throne", ur: "عرش پر مستوی ہونا" }, ayahs: [4] },
        { term: "Merging Night and Day", arabic: "إيلاج الليل والنهار", meaning: { en: "Gradual day-night transition", ur: "رات اور دن کی بتدریج تبدیلی" }, ayahs: [6] }
      ]
    },
    spendingInAllahsWay: {
      name: "Spending in Allah's Way",
      nameAr: "الإنفاق في سبيل الله",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Mustakhlifin", arabic: "مستخلفين", meaning: { en: "Trustees, not owners of wealth", ur: "مال کے امانتدار، مالک نہیں" }, ayahs: [7] },
        { term: "Qard Hasan", arabic: "القرض الحسن", meaning: { en: "Beautiful loan to Allah", ur: "اللہ کو قرضِ حسنہ دینا" }, ayahs: [11, 18] },
        { term: "Pre-Conquest vs Post", arabic: "قبل الفتح وبعده", meaning: { en: "Different reward for timing", ur: "وقت کے اعتبار سے مختلف اجر" }, ayahs: [10] },
        { term: "Multiplication of Reward", arabic: "مضاعفة الأجر", meaning: { en: "Allah multiplies charity", ur: "اللہ صدقے کو کئی گنا بڑھاتا ہے" }, ayahs: [11, 18] }
      ]
    },
    lightAndDarkness: {
      name: "Light and Darkness",
      nameAr: "النور والظلمات",
      color: '#3B82F6',
      icon: 'Sun',
      concepts: [
        { term: "Darkness to Light", arabic: "من الظلمات إلى النور", meaning: { en: "Guidance from darkness to light", ur: "اندھیروں سے روشنی کی طرف ہدایت" }, ayahs: [9] },
        { term: "Believers' Light", arabic: "نور المؤمنين", meaning: { en: "Light running before them on Judgment Day", ur: "قیامت کے دن ان کے آگے دوڑتا ہوا نور" }, ayahs: [12] },
        { term: "Hypocrites Seeking Light", arabic: "طلب المنافقين النور", meaning: { en: "Hypocrites asking to share light", ur: "منافقین کا نور مانگنا" }, ayahs: [13] },
        { term: "Wall Between Groups", arabic: "السور بين الفريقين", meaning: { en: "Barrier separating believers and hypocrites", ur: "مومنوں اور منافقوں کے درمیان دیوار" }, ayahs: [13] }
      ]
    },
    hypocrisyExposed: {
      name: "Hypocrites on Judgment Day",
      nameAr: "المنافقون يوم القيامة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Wait For Us", arabic: "انظرونا نقتبس", meaning: { en: "Hypocrites begging for light", ur: "منافقین کا نور کے لیے التجا کرنا" }, ayahs: [13] },
        { term: "Go Back", arabic: "ارجعوا وراءكم", meaning: { en: "Told to go back for light", ur: "واپس جاؤ اور نور تلاش کرو" }, ayahs: [13] },
        { term: "You Were With Us", arabic: "ألم نكن معكم", meaning: { en: "Hypocrites claiming companionship", ur: "منافقین کا ساتھ ہونے کا دعویٰ" }, ayahs: [14] },
        { term: "Self-Destruction", arabic: "فتنتم أنفسكم", meaning: { en: "They afflicted themselves with doubt", ur: "انہوں نے خود کو شک میں مبتلا کیا" }, ayahs: [14] },
        { term: "No Ransom Accepted", arabic: "لا يؤخذ فدية", meaning: { en: "No ransom accepted that Day", ur: "اس دن کوئی فدیہ قبول نہیں ہوگا" }, ayahs: [15] }
      ]
    },
    heartSoftening: {
      name: "Softening of Hearts",
      nameAr: "خشوع القلوب",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Time for Khushu", arabic: "ألم يأن للخشوع", meaning: { en: "Has the time not come for hearts to humble?", ur: "کیا ابھی وہ وقت نہیں آیا کہ دل جھک جائیں؟" }, ayahs: [16] },
        { term: "Warning Against Hardness", arabic: "التحذير من قسوة القلب", meaning: { en: "Don't be like those whose hearts hardened", ur: "ان جیسے نہ بنو جن کے دل سخت ہو گئے" }, ayahs: [16] },
        { term: "Earth Revival Metaphor", arabic: "إحياء الأرض الميتة", meaning: { en: "Allah revives dead earth—and hearts", ur: "اللہ مُردہ زمین کو زندہ کرتا ہے—اور دلوں کو بھی" }, ayahs: [17] }
      ]
    },
    worldlyLifeNature: {
      name: "Nature of Worldly Life",
      nameAr: "طبيعة الحياة الدنيا",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Play and Amusement", arabic: "لعب ولهو", meaning: { en: "Life is play and amusement", ur: "زندگی کھیل اور تماشا ہے" }, ayahs: [20] },
        { term: "Adornment", arabic: "زينة", meaning: { en: "Worldly decoration", ur: "دنیاوی آرائش و زیبائش" }, ayahs: [20] },
        { term: "Mutual Boasting", arabic: "تفاخر", meaning: { en: "Competition in pride", ur: "آپس میں فخر اور غرور کا مقابلہ" }, ayahs: [20] },
        { term: "Multiplication of Wealth", arabic: "تكاثر", meaning: { en: "Racing for more wealth and children", ur: "مال اور اولاد میں ایک دوسرے سے بڑھنے کی دوڑ" }, ayahs: [20] },
        { term: "Rain Metaphor", arabic: "مثل الغيث", meaning: { en: "Like vegetation that withers", ur: "اس سبزے کی طرح جو مرجھا جائے" }, ayahs: [20] }
      ]
    },
    divineDecree: {
      name: "Divine Decree (Qadr)",
      nameAr: "القدر الإلهي",
      color: '#F59E0B',
      icon: 'Book',
      concepts: [
        { term: "Pre-Written Calamities", arabic: "المصائب في كتاب", meaning: { en: "All disasters written before creation", ur: "تمام مصیبتیں تخلیق سے پہلے لکھی ہوئی ہیں" }, ayahs: [22] },
        { term: "No Grief for Lost", arabic: "لا تأسوا على ما فاتكم", meaning: { en: "Don't grieve over what passed", ur: "جو کچھ ہاتھ سے گیا اس پر غم نہ کرو" }, ayahs: [23] },
        { term: "No Excessive Joy", arabic: "لا تفرحوا بما آتاكم", meaning: { en: "Don't be exultant at gains", ur: "جو کچھ ملے اس پر اِترانا نہیں" }, ayahs: [23] },
        { term: "Against Pride", arabic: "المختال الفخور", meaning: { en: "Allah dislikes self-deluded boasters", ur: "اللہ خود پسند فخر کرنے والوں کو پسند نہیں کرتا" }, ayahs: [23] }
      ]
    },
    ironAndJustice: {
      name: "Iron and Justice",
      nameAr: "الحديد والعدل",
      color: '#3B82F6',
      icon: 'Scale',
      concepts: [
        { term: "Iron Sent Down", arabic: "أنزلنا الحديد", meaning: { en: "Allah sent down iron", ur: "اللہ نے لوہا اتارا" }, ayahs: [25] },
        { term: "Great Might", arabic: "بأس شديد", meaning: { en: "Iron has military power", ur: "لوہے میں شدید قوت ہے" }, ayahs: [25] },
        { term: "Benefits for People", arabic: "منافع للناس", meaning: { en: "Iron has many uses", ur: "لوہے میں لوگوں کے لیے بہت سے فوائد ہیں" }, ayahs: [25] },
        { term: "Book and Balance", arabic: "الكتاب والميزان", meaning: { en: "Scripture and justice scale", ur: "کتاب اور ترازو (عدل)" }, ayahs: [25] },
        { term: "Standing in Justice", arabic: "ليقوم الناس بالقسط", meaning: { en: "That people maintain justice", ur: "تاکہ لوگ انصاف پر قائم رہیں" }, ayahs: [25] }
      ]
    },
    propheticChain: {
      name: "Prophetic Lineage",
      nameAr: "سلسلة الأنبياء",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Noah and Abraham", arabic: "نوح وإبراهيم", meaning: { en: "Starting prophets", ur: "ابتدائی انبیاء" }, ayahs: [26] },
        { term: "Prophethood in Descendants", arabic: "النبوة في الذرية", meaning: { en: "Placed in their offspring", ur: "ان کی اولاد میں نبوت رکھی" }, ayahs: [26] },
        { term: "Jesus and Gospel", arabic: "عيسى والإنجيل", meaning: { en: "Followed by Jesus with Gospel", ur: "عیسیٰ علیہ السلام انجیل کے ساتھ آئے" }, ayahs: [27] },
        { term: "Rahbaniyya", arabic: "الرهبانية", meaning: { en: "Monasticism they invented", ur: "رہبانیت جو انہوں نے خود ایجاد کی" }, ayahs: [27] }
      ]
    }
  },

  relationships: [
    { from: "Divine Names", to: "Cosmic Reality", type: "explanation", description: { en: "Al-Awwal, Al-Akhir, etc. explain Allah's relationship to creation", ur: "الاوّل، الآخر وغیرہ اللہ کے مخلوقات سے تعلق کی وضاحت کرتے ہیں" } },
    { from: "Mustakhlifin", to: "Spending", type: "motivation", description: { en: "Being trustees motivates spending what is Allah's", ur: "امانتدار ہونا اللہ کے مال کو خرچ کرنے کی ترغیب دیتا ہے" } },
    { from: "Qard Hasan", to: "Multiplication", type: "consequence", description: { en: "Beautiful loan multiplied many times", ur: "قرضِ حسنہ کئی گنا بڑھا کر واپس ملتا ہے" } },
    { from: "Darkness", to: "Light", type: "transformation", description: { en: "Revelation transforms from ignorance to guidance", ur: "وحی جہالت سے ہدایت کی طرف تبدیل کرتی ہے" } },
    { from: "Hypocrites' Company", to: "No Benefit", type: "futility", description: { en: "Being with believers didn't help without sincerity", ur: "اخلاص کے بغیر مومنوں کے ساتھ ہونا فائدہ نہیں دیتا" } },
    { from: "Hearts Softening", to: "Time Question", type: "admonition", description: { en: "Rhetorical question about delayed humility", ur: "تاخیر سے عاجزی اختیار کرنے پر بلاغی سوال" } },
    { from: "Worldly Life", to: "Withering Plants", type: "metaphor", description: { en: "Both beautiful then destroyed", ur: "دونوں پہلے خوبصورت پھر فنا ہو جاتے ہیں" } },
    { from: "Pre-Written Decree", to: "Emotional Balance", type: "purpose", description: { en: "Knowing qadr prevents excessive grief or joy", ur: "تقدیر کا علم زیادہ غم یا خوشی سے بچاتا ہے" } },
    { from: "Iron", to: "Justice", type: "instrument", description: { en: "Iron enables enforcement of justice", ur: "لوہا عدل و انصاف کے نفاذ کا ذریعہ ہے" } },
    { from: "Book and Balance", to: "Human Conduct", type: "guidance", description: { en: "Scripture guides, scale measures justice", ur: "کتاب ہدایت دیتی ہے، ترازو عدل ناپتا ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Divine Glory to Human Responsibility", ur: "الٰہی عظمت سے انسانی ذمہ داری تک" },
    stages: [
      { name: "Cosmic Glorification", ayahs: [1], description: { en: "All creation glorifies Allah", ur: "تمام مخلوقات اللہ کی تسبیح کرتی ہیں" } },
      { name: "Divine Attributes", ayahs: [2, 3, 4, 5, 6], description: { en: "Allah's sovereignty, names, and cosmic control", ur: "اللہ کی حاکمیت، اسماء اور کائناتی کنٹرول" } },
      { name: "Call to Faith and Spending", ayahs: [7, 8, 9, 10, 11], description: { en: "Believe and spend as trustees", ur: "ایمان لاؤ اور امانتداروں کی طرح خرچ کرو" } },
      { name: "Believers' Light", ayahs: [12], description: { en: "Light running before believers", ur: "مومنوں کے آگے دوڑتا ہوا نور" } },
      { name: "Hypocrites Exposed", ayahs: [13, 14, 15], description: { en: "Barrier separating them from light", ur: "انہیں نور سے جدا کرنے والی دیوار" } },
      { name: "Heart Softening Call", ayahs: [16, 17], description: { en: "Time for hearts to humble", ur: "دلوں کے جھکنے کا وقت آ گیا" } },
      { name: "Rewards for Givers", ayahs: [18, 19], description: { en: "Charitable become truthful and martyrs", ur: "صدقہ دینے والے صدیقین اور شہداء بنتے ہیں" } },
      { name: "Worldly Life's Nature", ayahs: [20], description: { en: "Five descriptions of dunya", ur: "دنیا کی پانچ خصوصیات" } },
      { name: "Race to Paradise", ayahs: [21], description: { en: "Compete for forgiveness", ur: "مغفرت کے لیے سبقت کرو" } },
      { name: "Divine Decree", ayahs: [22, 23, 24], description: { en: "All written; don't grieve or boast", ur: "سب لکھا ہوا ہے؛ نہ غم کرو نہ فخر" } },
      { name: "Iron and Justice", ayahs: [25], description: { en: "Sent down with power and benefit", ur: "قوت اور فائدے کے ساتھ اتارا گیا" } },
      { name: "Prophetic History", ayahs: [26, 27], description: { en: "From Noah to Jesus", ur: "نوح سے عیسیٰ علیہم السلام تک" } },
      { name: "Final Call", ayahs: [28, 29], description: { en: "Fear Allah, believe, receive double mercy", ur: "اللہ سے ڈرو، ایمان لاؤ، دوگنی رحمت پاؤ" } }
    ]
  },

  uniqueInsight: {
    title: { en: "Iron Sent Down (وَأَنزَلْنَا الْحَدِيدَ)", ur: "لوہا اتارا گیا (وَأَنزَلْنَا الْحَدِيدَ)" },
    insight: {
      en: "Verse 25 states Allah 'sent down' (أَنزَلْنَا) iron—using the same verb for revelation. Modern science confirms iron wasn't formed on Earth but came from exploding stars (supernovae), literally 'sent down' from space. The surah's numerical position (57) equals iron's atomic number, and the word 'hadid' appears at a specific position corresponding to iron's isotope. But beyond science, the verse's placement is profound: iron comes after mentioning the Book and Balance (justice), showing that scripture provides spiritual guidance, scales measure fairness, and iron provides the power to enforce justice when needed. This trinity—revelation, justice, and power—forms the basis of human civilization. The verse acknowledges iron's 'great might' (بَأْسٌ شَدِيدٌ) for warfare but also 'benefits for people' (مَنَافِعُ لِلنَّاسِ)—tools, construction, transport. This balanced view recognizes both defensive and constructive uses.",
      ur: "آیت 25 میں اللہ نے فرمایا کہ لوہا 'اتارا' (أَنزَلْنَا)—یہ وہی فعل ہے جو وحی کے لیے استعمال ہوتا ہے۔ جدید سائنس تصدیق کرتی ہے کہ لوہا زمین پر نہیں بنا بلکہ پھٹتے ستاروں (سپرنووا) سے آیا، لفظی معنوں میں خلا سے 'اتارا گیا'۔ سورت کا نمبر (57) لوہے کے ایٹمی نمبر کے برابر ہے۔ لیکن سائنس سے ہٹ کر، آیت کی ترتیب بھی قابلِ غور ہے: لوہے کا ذکر کتاب اور ترازو (عدل) کے بعد آتا ہے، جو ظاہر کرتا ہے کہ کتاب روحانی رہنمائی فراہم کرتی ہے، ترازو انصاف ناپتا ہے، اور لوہا ضرورت پڑنے پر عدل نافذ کرنے کی طاقت فراہم کرتا ہے۔ یہ تثلیث—وحی، عدل، اور طاقت—انسانی تہذیب کی بنیاد ہے۔"
    },
    arabicTerm: "وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
    rootMeaning: { en: "ح-د-د (to limit, sharpen) - iron sets boundaries and limits", ur: "ح-د-د (حد بندی کرنا، تیز کرنا) - لوہا حدود و قیود مقرر کرتا ہے" },
    keyAyah: 25
  },

  historicalContext: {
    revelationPeriod: { en: "Medinan period, likely 6-7 AH", ur: "مدنی دور، غالباً 6-7 ہجری" },
    occasion: { en: "The Muslims faced financial strain and needed encouragement to spend in Allah's cause. Some believers' hearts had begun to harden after initial enthusiasm. The surah addresses both issues while establishing principles of faith and spending.", ur: "مسلمانوں کو مالی مشکلات کا سامنا تھا اور اللہ کی راہ میں خرچ کرنے کی ترغیب کی ضرورت تھی۔ کچھ مومنوں کے دل ابتدائی جوش کے بعد سخت ہونے لگے تھے۔ سورت دونوں مسائل کو ایمان اور انفاق کے اصول قائم کرتے ہوئے حل کرتی ہے۔" },
    note: { en: "This is the first of the 'Musabbihaat'—five surahs beginning with some form of 'sabbaha.' The famous verse 16 ('Has the time not come for believers' hearts to humble?') moved companions to tears. Verse 25 about iron is remarkable for matching modern astronomical knowledge about iron's extraterrestrial origin.", ur: "یہ 'مسبّحات' میں سے پہلی سورت ہے—پانچ سورتیں جو 'سبّح' کی کسی صورت سے شروع ہوتی ہیں۔ مشہور آیت 16 ('کیا ابھی وقت نہیں آیا کہ مومنوں کے دل جھکیں؟') نے صحابہ کو رُلا دیا تھا۔ آیت 25 لوہے کے بارے میں جدید فلکیاتی علم سے مطابقت کی وجہ سے قابلِ ذکر ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Musabbih Opening", description: { en: "سَبَّحَ - perfect tense glorification", ur: "سَبَّحَ - ماضی کے صیغے میں تسبیح" }, pattern: { en: "Indicating completed/eternal action", ur: "مکمل/ابدی فعل کی نشاندہی" }, ayah: 1 },
      { name: "Four Divine Names", description: { en: "الأول الآخر الظاهر الباطن", ur: "الاوّل الآخر الظاہر الباطن" }, example: { en: "Paired opposites covering all dimensions", ur: "متضاد جوڑے جو تمام جہتوں کا احاطہ کرتے ہیں" }, ayah: 3 },
      { name: "Rhetorical Question", description: { en: "أَلَمْ يَأْنِ - Has not the time come?", ur: "أَلَمْ يَأْنِ - کیا وقت نہیں آیا؟" }, example: { en: "Powerful admonition technique", ur: "مؤثر نصیحت کا اسلوب" }, ayah: 16 },
      { name: "Five-fold Description", description: { en: "لعب ولهو وزينة وتفاخر وتكاثر", ur: "لعب ولہو وزینۃ وتفاخر وتکاثر" }, example: { en: "Five terms for worldly life", ur: "دنیاوی زندگی کے پانچ اوصاف" }, ayah: 20 },
      { name: "Rain Parable", description: { en: "كَمَثَلِ غَيْثٍ", ur: "بارش کی مثال" }, example: { en: "Growth, yellowing, debris cycle", ur: "اگنا، زرد ہونا، ریزہ ریزہ ہو جانا" }, ayah: 20 }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: { en: "Iron's Cosmic Origin", ur: "لوہے کی کائناتی اصل" },
        observation: { en: "Modern astrophysics confirms iron formed in stellar nucleosynthesis, not on Earth—literally 'sent down' from dying stars", ur: "جدید فلکی طبیعیات تصدیق کرتی ہے کہ لوہا ستاروں کے اندرونی عمل سے بنا، زمین پر نہیں—لفظی طور پر مرتے ستاروں سے 'اتارا گیا'" },
        ayah: 25
      },
      {
        topic: { en: "Numerical Coincidence", ur: "عددی مطابقت" },
        observation: { en: "Surah 57 = iron's atomic number; various calculations of word positions relate to isotopes", ur: "سورت 57 = لوہے کا ایٹمی نمبر؛ الفاظ کی مختلف ترتیبیں آئسوٹوپس سے متعلق ہیں" },
        ayah: 25
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 59, name: "Al-Hashr", relationship: { en: "Both part of Musabbihaat glorification series", ur: "دونوں مسبّحات تسبیح سلسلے کا حصہ ہیں" }, type: "thematic_series" },
      { surah: 61, name: "As-Saff", relationship: { en: "Both part of Musabbihaat; both address spending", ur: "دونوں مسبّحات کا حصہ؛ دونوں میں انفاق کا ذکر" }, type: "thematic_series" },
      { surah: 2, name: "Al-Baqarah", relationship: { en: "Both use throne (ʿarsh) and dominion language", ur: "دونوں میں عرش اور ملک کی زبان استعمال ہوتی ہے" }, type: "thematic_parallel" },
      { surah: 3, name: "Aal Imran", relationship: { en: "Both discuss Jesus and previous scripture", ur: "دونوں میں عیسیٰ علیہ السلام اور پچھلی کتابوں کا ذکر ہے" }, type: "thematic_parallel" },
      { surah: 112, name: "Al-Ikhlas", relationship: { en: "Both focus on divine unity and attributes", ur: "دونوں کا مرکز توحید اور صفاتِ الٰہی ہے" }, type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
