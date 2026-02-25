/**
 * Surah Al-Insan (76) - Ontology of Quranic Concepts
 * Man / Time (Ad-Dahr)
 * Theme: Human creation, free will, righteous deeds, detailed Paradise descriptions
 */

export const ONTOLOGY = {
  surahId: 76,
  surahName: "Al-Insan",
  surahNameArabic: "الإنسان",
  revelationType: "Madani",
  totalAyahs: 31,

  categories: {
    humanOrigins: {
      name: "Human Origins and Purpose",
      nameArabic: "أصل الإنسان وغايته",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "حِينٌ مِّنَ الدَّهْرِ لَمْ يَكُن شَيْئًا مَّذْكُورًا", meaning: { en: "Period when man was nothing mentioned", ur: "زمانے کا ایک وقت جب انسان کوئی قابلِ ذکر چیز نہ تھا" }, explanation: { en: "Time before human existence", ur: "انسان کے وجود سے پہلے کا زمانہ" }, verseRef: "76:1" },
        { term: "نُّطْفَةٍ أَمْشَاجٍ", meaning: { en: "Drop of mixed fluid", ur: "مخلوط نطفہ (مرد و عورت کے مادے کا مرکب)" }, explanation: { en: "Sperm + egg combined", ur: "نطفے اور بیضے کا ملاپ" }, verseRef: "76:2" },
        { term: "نَّبْتَلِيهِ", meaning: { en: "We test him", ur: "ہم اسے آزماتے ہیں" }, explanation: { en: "Life's purpose is trial", ur: "زندگی کا مقصد آزمائش ہے" }, verseRef: "76:2" },
        { term: "سَمِيعًا بَصِيرًا", meaning: { en: "Hearing, seeing", ur: "سننے والا، دیکھنے والا" }, explanation: { en: "Given faculties to perceive truth", ur: "حق کو سمجھنے کی صلاحیتیں عطا کی گئیں" }, verseRef: "76:2" }
      ]
    },

    freeWill: {
      name: "Free Will and Choice",
      nameArabic: "الإرادة الحرة والاختيار",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "هَدَيْنَاهُ السَّبِيلَ", meaning: { en: "We guided him to the way", ur: "ہم نے اسے راستہ دکھا دیا" }, explanation: { en: "Path shown clearly", ur: "راہ واضح طور پر دکھا دی گئی" }, verseRef: "76:3" },
        { term: "إِمَّا شَاكِرًا وَإِمَّا كَفُورًا", meaning: { en: "Either grateful or ungrateful", ur: "خواہ شکر گزار ہو یا ناشکرا" }, explanation: { en: "Human chooses which to be", ur: "انسان خود انتخاب کرتا ہے کہ وہ کیا بنے" }, verseRef: "76:3" }
      ]
    },

    disbelieversDestiny: {
      name: "Destiny of Disbelievers",
      nameArabic: "مصير الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "سَلَاسِلَ", meaning: { en: "Chains", ur: "زنجیریں" }, explanation: { en: "Bound for punishment", ur: "عذاب کے لیے جکڑے ہوئے" }, verseRef: "76:4" },
        { term: "أَغْلَالًا", meaning: { en: "Shackles", ur: "طوق (گلے کے)" }, explanation: { en: "Neck collars constraining", ur: "گردنوں میں ڈالے جانے والے طوق" }, verseRef: "76:4" },
        { term: "سَعِيرًا", meaning: { en: "Blazing fire", ur: "بھڑکتی ہوئی آگ" }, explanation: { en: "Intense burning", ur: "شدید جلانے والی آگ" }, verseRef: "76:4" }
      ]
    },

    paradiseDrinks: {
      name: "Drinks of Paradise",
      nameArabic: "مشروبات الجنة",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "كَأْسٍ... مِزَاجُهَا كَافُورًا", meaning: { en: "Cup mixed with camphor", ur: "ایسا جام جس میں کافور کی آمیزش ہو" }, explanation: { en: "Cool, fragrant drink", ur: "ٹھنڈا اور خوشبودار مشروب" }, verseRef: "76:5" },
        { term: "عَيْنًا يَشْرَبُ بِهَا عِبَادُ اللَّهِ", meaning: { en: "Spring from which servants drink", ur: "چشمہ جس سے Allah کے بندے پیتے ہیں" }, explanation: { en: "Exclusive spring for righteous", ur: "نیک لوگوں کے لیے مخصوص چشمہ" }, verseRef: "76:6" },
        { term: "يُفَجِّرُونَهَا تَفْجِيرًا", meaning: { en: "Making it gush forth", ur: "جہاں چاہیں بہا لیتے ہیں" }, explanation: { en: "Springs flow wherever they wish", ur: "چشمے جہاں چاہیں وہاں بہتے ہیں" }, verseRef: "76:6" },
        { term: "مِزَاجُهَا زَنجَبِيلًا", meaning: { en: "Mixture of ginger", ur: "ادرک کی آمیزش والا" }, explanation: { en: "Warming, fragrant drink", ur: "گرم مزاج اور خوشبودار مشروب" }, verseRef: "76:17" },
        { term: "عَيْنًا... سَلْسَبِيلًا", meaning: { en: "Spring named Salsabil", ur: "سلسبیل نامی چشمہ" }, explanation: { en: "Sweet, smooth-flowing spring", ur: "میٹھا اور نرم رواں چشمہ" }, verseRef: "76:18" },
        { term: "شَرَابًا طَهُورًا", meaning: { en: "Purifying drink", ur: "پاکیزہ مشروب" }, explanation: { en: "Allah Himself gives them to drink", ur: "Allah خود انہیں پلائے گا" }, verseRef: "76:21" }
      ]
    },

    righteousCharacter: {
      name: "Character of the Righteous",
      nameArabic: "صفات الأبرار",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "يُوفُونَ بِالنَّذْرِ", meaning: { en: "They fulfill vows", ur: "وہ نذریں پوری کرتے ہیں" }, explanation: { en: "Keep promises to Allah", ur: "Allah سے کیے ہوئے وعدے نبھاتے ہیں" }, verseRef: "76:7" },
        { term: "يَخَافُونَ يَوْمًا... مُسْتَطِيرًا", meaning: { en: "Fear a Day of widespread evil", ur: "اس دن سے ڈرتے ہیں جس کی مصیبت ہر طرف پھیلی ہوگی" }, explanation: { en: "Conscious of Judgment", ur: "قیامت کا شعور رکھتے ہیں" }, verseRef: "76:7" },
        { term: "يُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ", meaning: { en: "Give food despite love of it", ur: "کھانے کی محبت کے باوجود کھلاتے ہیں" }, explanation: { en: "Sacrifice what they desire", ur: "اپنی پسندیدہ چیز قربان کرتے ہیں" }, verseRef: "76:8" },
        { term: "مِسْكِينًا وَيَتِيمًا وَأَسِيرًا", meaning: { en: "Poor, orphan, captive", ur: "مسکین، یتیم اور قیدی" }, explanation: { en: "Three categories of needy", ur: "ضرورت مندوں کی تین قسمیں" }, verseRef: "76:8" }
      ]
    },

    ikhlas: {
      name: "Sincerity (Ikhlas)",
      nameArabic: "الإخلاص",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ", meaning: { en: "We feed you only for Allah's Face", ur: "ہم تمہیں صرف Allah کی رضا کے لیے کھلاتے ہیں" }, explanation: { en: "Pure intention - no worldly motive", ur: "خالص نیت - کوئی دنیاوی مقصد نہیں" }, verseRef: "76:9" },
        { term: "لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا", meaning: { en: "No reward or thanks from you", ur: "ہم تم سے نہ بدلہ چاہتے ہیں نہ شکریہ" }, explanation: { en: "Seeking nothing from creation", ur: "مخلوق سے کچھ نہیں چاہتے" }, verseRef: "76:9" },
        { term: "نَخَافُ مِن رَّبِّنَا يَوْمًا عَبُوسًا قَمْطَرِيرًا", meaning: { en: "We fear a harsh, distressful Day", ur: "ہم اپنے رب سے ایک سخت تنگی والے دن سے ڈرتے ہیں" }, explanation: { en: "Motivation is fear of Allah", ur: "محرک Allah کا خوف ہے" }, verseRef: "76:10" }
      ]
    },

    divineProtection: {
      name: "Divine Protection and Reward",
      nameArabic: "الحماية والجزاء الإلهي",
      color: '#06B6D4',
      icon: 'Shield',
      concepts: [
        { term: "فَوَقَاهُمُ اللَّهُ شَرَّ ذَٰلِكَ الْيَوْمِ", meaning: { en: "Allah protected them from Day's evil", ur: "Allah نے انہیں اس دن کے شر سے بچا لیا" }, explanation: { en: "Their fear was not in vain", ur: "ان کا خوف بے فائدہ نہیں تھا" }, verseRef: "76:11" },
        { term: "وَلَقَّاهُمْ نَضْرَةً وَسُرُورًا", meaning: { en: "Granted them radiance and joy", ur: "انہیں تازگی اور خوشی عطا فرمائی" }, explanation: { en: "Inner light and happiness", ur: "باطنی نور اور خوشی" }, verseRef: "76:11" },
        { term: "جَزَاهُم بِمَا صَبَرُوا جَنَّةً وَحَرِيرًا", meaning: { en: "Rewarded for patience with Paradise and silk", ur: "ان کے صبر کا بدلہ جنت اور ریشم دیا" }, explanation: { en: "Sabr key to Paradise", ur: "صبر جنت کی کنجی ہے" }, verseRef: "76:12" }
      ]
    },

    paradiseDetails: {
      name: "Details of Paradise",
      nameArabic: "تفاصيل الجنة",
      color: '#10B981',
      icon: 'Crown',
      concepts: [
        { term: "مُّتَّكِئِينَ... عَلَى الْأَرَائِكِ", meaning: { en: "Reclining on couches", ur: "تختوں پر تکیے لگائے" }, explanation: { en: "Comfort and rest", ur: "آرام اور سکون" }, verseRef: "76:13" },
        { term: "لَا يَرَوْنَ فِيهَا شَمْسًا وَلَا زَمْهَرِيرًا", meaning: { en: "No sun or bitter cold", ur: "نہ دھوپ ہوگی نہ کڑاکے کی سردی" }, explanation: { en: "Perfect climate", ur: "بالکل مناسب موسم" }, verseRef: "76:13" },
        { term: "دَانِيَةً عَلَيْهِمْ ظِلَالُهَا", meaning: { en: "Shade near above them", ur: "درختوں کے سائے ان پر جھکے ہوں گے" }, explanation: { en: "Trees bend to shade", ur: "درخت سایہ کرنے کو جھکیں گے" }, verseRef: "76:14" },
        { term: "ذُلِّلَتْ قُطُوفُهَا تَذْلِيلًا", meaning: { en: "Fruits made easy to reach", ur: "پھلوں کے گچھے جھکا دیے گئے" }, explanation: { en: "Clusters bend down", ur: "گچھے نیچے جھک جائیں گے" }, verseRef: "76:14" },
        { term: "آنِيَةٍ مِّن فِضَّةٍ", meaning: { en: "Vessels of silver", ur: "چاندی کے برتن" }, explanation: { en: "Silver utensils", ur: "چاندی کے ظروف" }, verseRef: "76:15" },
        { term: "قَوَارِيرَا مِن فِضَّةٍ", meaning: { en: "Crystal-clear silver", ur: "چاندی کے شیشے جیسے صاف برتن" }, explanation: { en: "Unique material: silver's beauty, crystal's clarity", ur: "منفرد مادہ: چاندی کی خوبصورتی اور شیشے کی شفافیت" }, verseRef: "76:15-16" },
        { term: "وِلْدَانٌ مُّخَلَّدُونَ", meaning: { en: "Immortal young boys", ur: "ہمیشہ جوان رہنے والے خدمت گار" }, explanation: { en: "Eternal servants", ur: "ابدی خدمت گار" }, verseRef: "76:19" },
        { term: "لُؤْلُؤًا مَّنثُورًا", meaning: { en: "Scattered pearls", ur: "بکھرے ہوئے موتیوں کی طرح" }, explanation: { en: "Beautiful like scattered gems", ur: "بکھرے جواہرات جیسے خوبصورت" }, verseRef: "76:19" },
        { term: "نَعِيمًا وَمُلْكًا كَبِيرًا", meaning: { en: "Bliss and great kingdom", ur: "نعمتیں اور عظیم بادشاہت" }, explanation: { en: "Endless enjoyment, vast domain", ur: "لامتناہی لطف اور وسیع سلطنت" }, verseRef: "76:20" },
        { term: "ثِيَابُ سُندُسٍ خُضْرٌ وَإِسْتَبْرَقٌ", meaning: { en: "Green silk and brocade", ur: "سبز باریک ریشم اور موٹے دیبا کے لباس" }, explanation: { en: "Finest garments", ur: "عمدہ ترین لباس" }, verseRef: "76:21" },
        { term: "أَسَاوِرَ مِن فِضَّةٍ", meaning: { en: "Silver bracelets", ur: "چاندی کے کنگن" }, explanation: { en: "Adorned with jewelry", ur: "زیورات سے آراستہ" }, verseRef: "76:21" }
      ]
    },

    quranAndPatience: {
      name: "Quran and Patience",
      nameArabic: "القرآن والصبر",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "نَحْنُ نَزَّلْنَا عَلَيْكَ الْقُرْآنَ تَنزِيلًا", meaning: { en: "We sent down Quran gradually", ur: "ہم نے آپ پر Quran تھوڑا تھوڑا کر کے نازل کیا" }, explanation: { en: "Divine revelation emphasized", ur: "الہٰی وحی پر زور" }, verseRef: "76:23" },
        { term: "فَاصْبِرْ لِحُكْمِ رَبِّكَ", meaning: { en: "Be patient for Lord's decision", ur: "اپنے رب کے فیصلے پر صبر کریں" }, explanation: { en: "Patience commanded", ur: "صبر کا حکم" }, verseRef: "76:24" },
        { term: "وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا", meaning: { en: "Don't obey sinner or disbeliever", ur: "ان میں سے کسی گناہگار یا ناشکرے کی اطاعت نہ کریں" }, explanation: { en: "Resist pressure to compromise", ur: "سمجھوتے کے دباؤ کا مقابلہ کریں" }, verseRef: "76:24" }
      ]
    },

    worship: {
      name: "Worship Commands",
      nameArabic: "أوامر العبادة",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "اذْكُرِ اسْمَ رَبِّكَ بُكْرَةً وَأَصِيلًا", meaning: { en: "Remember Lord morning and evening", ur: "صبح و شام اپنے رب کا نام یاد کریں" }, explanation: { en: "Constant dhikr", ur: "مسلسل ذکر" }, verseRef: "76:25" },
        { term: "مِنَ اللَّيْلِ فَاسْجُدْ لَهُ", meaning: { en: "At night prostrate to Him", ur: "رات کو اس کے سامنے سجدہ کریں" }, explanation: { en: "Tahajjud prayer", ur: "تہجد کی نماز" }, verseRef: "76:26" },
        { term: "سَبِّحْهُ لَيْلًا طَوِيلًا", meaning: { en: "Glorify Him long night", ur: "لمبی رات اس کی تسبیح کریں" }, explanation: { en: "Extended night worship", ur: "رات کی طویل عبادت" }, verseRef: "76:26" }
      ]
    },

    worldlyVsEternal: {
      name: "Worldly vs Eternal",
      nameArabic: "الدنيا مقابل الآخرة",
      color: '#EC4899',
      icon: 'Scale',
      concepts: [
        { term: "يُحِبُّونَ الْعَاجِلَةَ", meaning: { en: "They love the immediate", ur: "وہ جلد ملنے والی (دنیا) سے محبت کرتے ہیں" }, explanation: { en: "Attached to dunya", ur: "دنیا سے لگاؤ" }, verseRef: "76:27" },
        { term: "يَذَرُونَ وَرَاءَهُمْ يَوْمًا ثَقِيلًا", meaning: { en: "Leave behind a heavy Day", ur: "اپنے پیچھے ایک بھاری دن چھوڑ رہے ہیں" }, explanation: { en: "Ignore coming judgment", ur: "آنے والے حساب کو نظرانداز کرتے ہیں" }, verseRef: "76:27" }
      ]
    },

    divineWill: {
      name: "Divine Will",
      nameArabic: "المشيئة الإلهية",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "مَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ سَبِيلًا", meaning: { en: "Whoever wills may take path to Lord", ur: "جو چاہے اپنے رب کی طرف راستہ اختیار کرے" }, explanation: { en: "Choice offered", ur: "انتخاب پیش کیا گیا" }, verseRef: "76:29" },
        { term: "وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ", meaning: { en: "You cannot will except Allah wills", ur: "تم نہیں چاہ سکتے جب تک Allah نہ چاہے" }, explanation: { en: "Human will under divine will", ur: "انسانی ارادہ الہٰی مشیئت کے تابع ہے" }, verseRef: "76:30" },
        { term: "يُدْخِلُ مَن يَشَاءُ فِي رَحْمَتِهِ", meaning: { en: "He admits whom He wills into mercy", ur: "جسے چاہے اپنی رحمت میں داخل کرتا ہے" }, explanation: { en: "Allah chooses who enters Paradise", ur: "Allah فیصلہ کرتا ہے کہ جنت میں کون داخل ہو" }, verseRef: "76:31" }
      ]
    }
  },

  relationships: [
    { from: "نطفة أمشاج", to: "سميعا بصيرا", type: "transformation", description: { en: "Mixed fluid → hearing, seeing being", ur: "مخلوط نطفے سے سننے دیکھنے والی مخلوق" } },
    { from: "إما شاكرا وإما كفورا", to: "سلاسل/جنة", type: "consequence", description: { en: "Choice of gratitude/ingratitude determines destination", ur: "شکر یا ناشکری کا انتخاب منزل طے کرتا ہے" } },
    { from: "لوجه الله", to: "نضرة وسرورا", type: "causation", description: { en: "Sincerity in giving → radiance and joy", ur: "خلوص نیت سے دینا تازگی اور خوشی کا باعث" } },
    { from: "بما صبروا", to: "جنة وحريرا", type: "reward", description: { en: "Patience rewarded with Paradise and silk", ur: "صبر کا بدلہ جنت اور ریشم" } },
    { from: "كافورا/زنجبيلا/سلسبيلا/طهورا", to: "مشروبات الجنة", type: "collection", description: { en: "Four Paradise drinks mentioned", ur: "جنت کے چار مشروبات کا ذکر" } },
    { from: "تشاءون", to: "يشاء الله", type: "hierarchy", description: { en: "Human will subordinate to divine will", ur: "انسانی ارادہ الہٰی مشیئت کے تابع" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Human Origin", verses: "76:1-3", description: { en: "From nothing → mixed fluid → choice given", ur: "عدم سے نطفے تک اور پھر انتخاب کا موقع" } },
      { stage: 2, theme: "Two Destinies", verses: "76:4", description: { en: "Disbelievers: chains, shackles, fire", ur: "کافرین: زنجیریں، طوق، آگ" } },
      { stage: 3, theme: "Righteous Character", verses: "76:5-10", description: { en: "Vows, feeding needy, pure intention, fear", ur: "نذریں، ضرورت مندوں کو کھلانا، خالص نیت، خوف" } },
      { stage: 4, theme: "Divine Reward", verses: "76:11-22", description: { en: "Protection, radiance, Paradise details", ur: "حفاظت، تازگی، جنت کی تفصیلات" } },
      { stage: 5, theme: "Prophet's Commands", verses: "76:23-26", description: { en: "Patience, no compromise, worship", ur: "صبر، سمجھوتہ نہیں، عبادت" } },
      { stage: 6, theme: "Final Warning", verses: "76:27-31", description: { en: "Worldly love, divine will, mercy/punishment", ur: "دنیا کی محبت، الہٰی مشیئت، رحمت و عذاب" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Remember your origins", how: "You were nothing - stay humble", verse: "76:1" },
      { principle: "Make the choice", how: "Grateful or ungrateful - decide now", verse: "76:3" },
      { principle: "Give selflessly", how: "Feed others despite your own need, expect nothing back", verse: "76:8-9" },
      { principle: "Fear that Day", how: "Let fear of Judgment guide your actions", verse: "76:10" },
      { principle: "Be patient", how: "Don't compromise faith for anyone", verse: "76:24" },
      { principle: "Worship at night", how: "Tahajjud connects you to Allah", verse: "76:26" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Selfless Giving Model", ur: "بے لوث عطا کا نمونہ" },
    insight: { en: "Verses 8-9 present the ultimate model of sadaqah: giving 'food they love' (عَلَىٰ حُبِّهِ) to poor, orphan, and captive, while explicitly stating 'We feed you only for Allah's Face, wanting no reward or thanks' (لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا). This is ikhlas distilled to its purest form. The inclusion of 'captive' (أَسِيرًا) is remarkable - feeding even enemies of war. The result? Allah protects them from that Day's evil and grants them 'radiance and joy' (نَضْرَةً وَسُرُورًا) - inner light shows on faces. The surah links this directly to patience: 'جَزَاهُم بِمَا صَبَرُوا' - rewarded for their patience in giving despite their own need.", ur: "آیات 8-9 صدقے کا اعلیٰ ترین نمونہ پیش کرتی ہیں: 'اپنی پسندیدہ غذا' (عَلَىٰ حُبِّهِ) مسکین، یتیم اور قیدی کو دینا، اور واضح طور پر کہنا کہ 'ہم تمہیں صرف Allah کی رضا کے لیے کھلاتے ہیں، نہ بدلہ چاہتے ہیں نہ شکریہ'۔ یہ اخلاص کی خالص ترین شکل ہے۔ 'قیدی' (أَسِيرًا) کا ذکر قابل توجہ ہے - جنگی دشمنوں کو بھی کھلانا۔ نتیجہ؟ Allah نے انہیں اس دن کے شر سے بچایا اور 'تازگی و مسرت' عطا فرمائی۔ یہ سورت اسے براہ راست صبر سے جوڑتی ہے: 'جَزَاهُم بِمَا صَبَرُوا' - ضرورت کے باوجود دینے کے صبر کا بدلہ۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "أَمْشَاج", example: { en: "Mixed fluids", ur: "مخلوط مادے" }, effect: { en: "Scientific accuracy - sperm + egg mixture", ur: "سائنسی درستی - نطفے اور بیضے کا ملاپ" } },
      { feature: "قَمْطَرِيرًا", example: { en: "Intensely distressful", ur: "انتہائی سختی والا" }, effect: { en: "Rare word emphasizing Day's severity", ur: "نایاب لفظ جو اس دن کی شدت پر زور دیتا ہے" } },
      { feature: "سَلْسَبِيل", example: { en: "Smooth-flowing", ur: "نرم رواں" }, effect: { en: "Onomatopoeia - sounds like flowing water", ur: "صوتی مماثلت - بہتے پانی جیسی آواز" } },
      { feature: "قَوَارِيرَا مِن فِضَّةٍ", example: { en: "Crystal of silver", ur: "چاندی کا شیشہ" }, effect: { en: "Oxymoron - unique Paradise material", ur: "متضاد ترکیب - جنت کا منفرد مادہ" } },
      { feature: "نَضْرَة", example: { en: "Radiance", ur: "چہرے کی تازگی" }, effect: { en: "Inner light visible on face", ur: "باطنی نور جو چہرے پر ظاہر ہو" } }
    ]
  },

  historicalContext: {
    note: { en: "Some scholars say this surah was revealed about Ali, Fatimah, and Hasan/Husain who gave away their iftar food for three consecutive days to a needy person, orphan, and captive. Whether historical or illustrative, it establishes the ultimate standard of charity.", ur: "بعض علماء کا کہنا ہے کہ یہ سورت علی، فاطمہ اور حسن/حسین رضی اللہ عنہم کے بارے میں نازل ہوئی جنہوں نے لگاتار تین دن اپنا افطار مسکین، یتیم اور قیدی کو دے دیا۔ چاہے یہ تاریخی واقعہ ہو یا مثال، یہ صدقے کا اعلیٰ ترین معیار قائم کرتی ہے۔" }
  },

  scientificReferences: {
    notes: [
      { verse: "76:2", topic: "Human conception", note: "نُطْفَة أَمْشَاج - mixed fluid refers to sperm meeting egg, both contributing genetic material" }
    ]
  }
};

export default ONTOLOGY;
