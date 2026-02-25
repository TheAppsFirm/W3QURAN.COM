/**
 * Surah Al-Mutaffifin (83) - Ontology of Quranic Concepts
 * The Defrauders
 * Theme: Cheaters in trade, Sijjin vs Illiyyun, righteous triumph
 */

export const ONTOLOGY = {
  surahId: 83,
  surahName: "Al-Mutaffifin",
  surahNameArabic: "المطففين",
  revelationType: "Makki",
  totalAyahs: 36,

  categories: {
    commercialFraud: {
      name: "Fraud in Commerce",
      nameUr: "تجارت میں دھوکہ",
      nameArabic: "الغش في التجارة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَيْلٌ لِّلْمُطَفِّفِينَ", meaning: { en: "Woe to defrauders", ur: "ناپ تول میں کمی کرنے والوں کے لیے تباہی" }, explanation: { en: "Tatfif = giving less than due in measure", ur: "تطفیف = ناپ تول میں کمی کرنا" }, verseRef: "83:1" },
        { term: "اكْتَالُوا... يَسْتَوْفُونَ", meaning: { en: "Take measure in full", ur: "جب لیتے ہیں تو پورا لیتے ہیں" }, explanation: { en: "Demand complete amount for themselves", ur: "اپنے لیے مکمل مقدار کا مطالبہ" }, verseRef: "83:2" },
        { term: "كَالُوهُمْ... يُخْسِرُونَ", meaning: { en: "Give less", ur: "جب دیتے ہیں تو کم دیتے ہیں" }, explanation: { en: "Cause others to lose in weights/measures", ur: "دوسروں کو وزن/پیمائش میں نقصان پہنچاتے ہیں" }, verseRef: "83:3" }
      ]
    },

    resurrectionAwareness: {
      name: "Resurrection Awareness",
      nameUr: "قیامت کا شعور",
      nameArabic: "الوعي بالبعث",
      color: '#3B82F6',
      icon: 'Eye',
      concepts: [
        { term: "أَلَا يَظُنُّ... مَّبْعُوثُونَ", meaning: { en: "Don't they think they'll be raised?", ur: "کیا وہ نہیں سمجھتے کہ اٹھائے جائیں گے؟" }, explanation: { en: "Cheating shows disbelief in accountability", ur: "دھوکہ دینا جوابدہی میں بے ایمانی ظاہر کرتا ہے" }, verseRef: "83:4" },
        { term: "يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ", meaning: { en: "Day people stand before Lord of worlds", ur: "جس دن لوگ رب العالمین کے سامنے کھڑے ہوں گے" }, explanation: { en: "Universal standing for judgment", ur: "حساب کے لیے سب کا کھڑا ہونا" }, verseRef: "83:6" }
      ]
    },

    sijjin: {
      name: "Sijjin - Record of Wicked",
      nameUr: "سجین - بدکاروں کا نامۂ اعمال",
      nameArabic: "سجين",
      color: '#EF4444',
      icon: 'Book',
      concepts: [
        { term: "كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ", meaning: { en: "Wicked's record in Sijjin", ur: "بدکاروں کا نامہ اعمال سجین میں ہے" }, explanation: { en: "From سِجن (prison) - lowest place", ur: "سِجن (قید) سے ماخوذ - سب سے نچلی جگہ" }, verseRef: "83:7" },
        { term: "كِتَابٌ مَّرْقُومٌ", meaning: { en: "Inscribed record", ur: "لکھی ہوئی کتاب" }, explanation: { en: "Permanently written - cannot be erased", ur: "مستقل لکھا ہوا - مٹایا نہیں جا سکتا" }, verseRef: "83:9" }
      ]
    },

    characterOfWicked: {
      name: "Traits of the Wicked",
      nameUr: "بدکاروں کی صفات",
      nameArabic: "صفات الفجار",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "مُعْتَدٍ أَثِيمٍ", meaning: { en: "Transgressor, sinful", ur: "حد سے گزرنے والا، گناہگار" }, explanation: { en: "Only such people deny Judgment Day", ur: "صرف ایسے لوگ قیامت کا انکار کرتے ہیں" }, verseRef: "83:12" },
        { term: "أَسَاطِيرُ الْأَوَّلِينَ", meaning: { en: "Legends of ancients", ur: "پہلوں کی کہانیاں" }, explanation: { en: "Dismisses revelation as myths", ur: "وحی کو قصے کہانیاں قرار دینا" }, verseRef: "83:13" },
        { term: "رَانَ عَلَىٰ قُلُوبِهِم", meaning: { en: "Rust covered hearts", ur: "ان کے دلوں پر زنگ چڑھ گیا" }, explanation: { en: "Sins accumulated like rust", ur: "گناہ زنگ کی طرح جمع ہوتے گئے" }, verseRef: "83:14" },
        { term: "لَّمَحْجُوبُونَ", meaning: { en: "Veiled from their Lord", ur: "اپنے رب سے پردے میں رہیں گے" }, explanation: { en: "Worst punishment - separation from Allah", ur: "بدترین سزا - Allah سے جدائی" }, verseRef: "83:15" }
      ]
    },

    illiyyun: {
      name: "Illiyyun - Record of Righteous",
      nameUr: "علیین - نیکوں کا نامۂ اعمال",
      nameArabic: "عليين",
      color: '#10B981',
      icon: 'Book',
      concepts: [
        { term: "كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ", meaning: { en: "Righteous's record in Illiyyun", ur: "نیکوں کا نامہ اعمال علیین میں ہے" }, explanation: { en: "From عُلُوّ (height) - highest place", ur: "عُلُوّ (بلندی) سے ماخوذ - سب سے اونچی جگہ" }, verseRef: "83:18" },
        { term: "يَشْهَدُهُ الْمُقَرَّبُونَ", meaning: { en: "Witnessed by those near", ur: "مقربین اس کے گواہ ہوتے ہیں" }, explanation: { en: "Angels closest to Allah witness it", ur: "Allah کے قریب ترین فرشتے اس کی گواہی دیتے ہیں" }, verseRef: "83:21" }
      ]
    },

    paradiseBliss: {
      name: "Paradise Delights",
      nameUr: "جنت کی نعمتیں",
      nameArabic: "نعيم الجنة",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "الْأَبْرَارَ لَفِي نَعِيمٍ", meaning: { en: "Righteous in bliss", ur: "نیک لوگ نعمتوں میں ہیں" }, explanation: { en: "Surrounded by blessings", ur: "نعمتوں سے گھرے ہوئے" }, verseRef: "83:22" },
        { term: "عَلَى الْأَرَائِكِ يَنظُرُونَ", meaning: { en: "On couches observing", ur: "تختوں پر بیٹھے نظارہ کر رہے ہیں" }, explanation: { en: "Relaxed, watching Paradise delights", ur: "آرام سے جنت کی نعمتوں کا نظارہ" }, verseRef: "83:23" },
        { term: "نَضْرَةَ النَّعِيمِ", meaning: { en: "Radiance of bliss", ur: "نعمتوں کی تازگی" }, explanation: { en: "Faces glowing with blessing", ur: "نعمتوں سے چمکتے چہرے" }, verseRef: "83:24" },
        { term: "رَّحِيقٍ مَّخْتُومٍ خِتَامُهُ مِسْكٌ", meaning: { en: "Sealed wine, seal is musk", ur: "مہر بند شراب، جس کی مہر مشک کی ہے" }, explanation: { en: "Purest drink, fragrant seal", ur: "پاکیزہ ترین مشروب، خوشبودار مہر" }, verseRef: "83:25-26" },
        { term: "تَسْنِيمٍ", meaning: { en: "Tasnim spring", ur: "تسنیم چشمہ" }, explanation: { en: "Highest spring in Paradise", ur: "جنت کا سب سے اونچا چشمہ" }, verseRef: "83:27" }
      ]
    },

    mockeryReversed: {
      name: "Tables Turned",
      nameUr: "پانسا پلٹ گیا",
      nameArabic: "انقلاب السخرية",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "الَّذِينَ أَجْرَمُوا... يَضْحَكُونَ", meaning: { en: "Criminals laughed at believers", ur: "مجرم مومنوں پر ہنستے تھے" }, explanation: { en: "Mocked faith in dunya", ur: "دنیا میں ایمان کا مذاق اڑاتے تھے" }, verseRef: "83:29" },
        { term: "يَتَغَامَزُونَ", meaning: { en: "Winked mockingly", ur: "ایک دوسرے کو آنکھوں سے اشارے کرتے تھے" }, explanation: { en: "Mutual mocking gestures", ur: "باہمی تمسخر کے اشارے" }, verseRef: "83:30" },
        { term: "فَالْيَوْمَ الَّذِينَ آمَنُوا... يَضْحَكُونَ", meaning: { en: "Today believers laugh", ur: "آج ایمان والے ہنس رہے ہیں" }, explanation: { en: "Complete reversal - justice served", ur: "مکمل الٹ - انصاف ہوا" }, verseRef: "83:34" },
        { term: "هَلْ ثُوِّبَ الْكُفَّارُ", meaning: { en: "Have disbelievers been repaid?", ur: "کیا کافروں کو بدلہ مل گیا؟" }, explanation: { en: "Rhetorical - perfect recompense", ur: "بلاغی سوال - کامل بدلہ" }, verseRef: "83:36" }
      ]
    }
  },

  relationships: [
    { from: "مطففين", to: "لا يظنون مبعوثون", type: "causation", description: { en: "Cheating stems from denying resurrection", ur: "دھوکہ دینا قیامت کے انکار سے پیدا ہوتا ہے" } },
    { from: "سجين", to: "عليين", type: "antithesis", description: { en: "Lowest vs highest - opposite records", ur: "سب سے نچلا بمقابلہ سب سے اونچا - مخالف نامے" } },
    { from: "ران على قلوبهم", to: "محجوبون", type: "consequence", description: { en: "Heart-rust leads to veil from Allah", ur: "دل کا زنگ Allah سے پردے تک لے جاتا ہے" } },
    { from: "يضحكون (v29)", to: "يضحكون (v34)", type: "reversal", description: { en: "Who laughs changes on Judgment Day", ur: "قیامت کے دن ہنسنے والا بدل جائے گا" } },
    { from: "فليتنافس المتنافسون", to: "رحيق/تسنيم", type: "motivation", description: { en: "These rewards worth competing for", ur: "یہ انعامات مقابلے کے قابل ہیں" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Warning to Cheaters", verses: "83:1-6", description: { en: "Woe to defrauders who deny resurrection", ur: "ناپ تول میں کمی کرنے والوں کو تباہی جو قیامت کا انکار کرتے ہیں" } },
      { stage: 2, theme: "Sijjin - Wicked's Record", verses: "83:7-17", description: { en: "Record in lowest place, hearts rusted", ur: "نچلی جگہ میں نامہ اعمال، زنگ آلود دل" } },
      { stage: 3, theme: "Illiyyun - Righteous Record", verses: "83:18-21", description: { en: "Record in highest place, witnessed by angels", ur: "اونچی جگہ میں نامہ اعمال، فرشتوں کی گواہی" } },
      { stage: 4, theme: "Paradise Delights", verses: "83:22-28", description: { en: "Bliss, couches, radiance, pure wine, Tasnim", ur: "نعمتیں، تخت، تازگی، پاکیزہ شراب، تسنیم" } },
      { stage: 5, theme: "Mockery Reversed", verses: "83:29-36", description: { en: "Mockers mocked - believers laugh last", ur: "تمسخر کرنے والوں کا تمسخر - مومنوں کی آخری ہنسی" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Honest dealings", how: "Give full measure; resurrection is real", verse: "83:1-3" },
      { principle: "Guard your heart", how: "Sins accumulate like rust - keep heart clean", verse: "83:14" },
      { principle: "Compete for akhirah", how: "Race for Paradise rewards, not dunya", verse: "83:26" },
      { principle: "Endure mockery", how: "Believers get last laugh - patience pays", verse: "83:34" },
      { principle: "Don't be guardian over others", how: "Focus on your deeds, not judging others", verse: "83:33" }
    ]
  },

  uniqueInsight: {
    title: { en: "From Tatfif to Ran - Spiritual Corrosion", ur: "تطفیف سے زنگ تک - روحانی کھوکھلاپن" },
    insight: { en: "The surah begins with a minor sin - tatfif (slight cheating in weights). But Allah connects this to denying resurrection (v4), which is connected to dismissing revelation as myths (v13), which is caused by 'ran' - rust on hearts (v14). The progression: small dishonesty → no fear of accountability → rejecting truth → spiritual corrosion → veiled from Allah (v15). The surah warns: tatfif isn't just commercial fraud - it's the beginning of spiritual death. Each small compromise adds rust to the heart until it can no longer recognize truth.", ur: "سورت ایک چھوٹے گناہ - تطفیف (ناپ تول میں معمولی کمی) سے شروع ہوتی ہے۔ لیکن Allah اسے قیامت کے انکار (آیت 4) سے جوڑتا ہے، جو وحی کو قصے کہانیاں کہنے (آیت 13) سے جڑا ہے، جو 'زنگ' - دل پر زنگ (آیت 14) کی وجہ سے ہے۔ ترقی: چھوٹی بے ایمانی → جوابدہی کا خوف نہیں → حق کا انکار → روحانی کھوکھلاپن → Allah سے پردہ (آیت 15)۔ سورت خبردار کرتی ہے: تطفیف صرف تجارتی دھوکہ نہیں - یہ روحانی موت کی شروعات ہے۔ ہر چھوٹا سمجھوتہ دل پر زنگ بڑھاتا ہے یہاں تک کہ وہ حق پہچاننے سے قاصر ہو جائے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "Form X يَسْتَوْفُونَ", example: { en: "Demanding full for themselves", ur: "اپنے لیے پورا مانگنا" }, effect: { en: "Intensified demand", ur: "شدید مطالبہ" } },
      { feature: "Sijjin from سِجن", example: { en: "Prison-record", ur: "قید خانے والا ریکارڈ" }, effect: { en: "Confined in lowest place", ur: "سب سے نچلی جگہ قید" } },
      { feature: "Form VI يَتَغَامَزُونَ", example: { en: "Mutual mocking", ur: "باہمی تمسخر" }, effect: { en: "Reciprocal action among mockers", ur: "مذاق اڑانے والوں میں باہمی عمل" } }
    ]
  },

  comparisonTable: {
    title: "Sijjin vs Illiyyun",
    headers: ["Aspect", "Wicked (Sijjin)", "Righteous (Illiyyun)"],
    rows: [
      { aspect: "Location", wicked: "سِجِّين (lowest)", righteous: "عِلِّيِّين (highest)" },
      { aspect: "Record", wicked: "كِتَابٌ مَّرْقُومٌ", righteous: "كِتَابٌ مَّرْقُومٌ" },
      { aspect: "Witnesses", wicked: "N/A", righteous: "المُقَرَّبُونَ (angels)" },
      { aspect: "State", wicked: "مَحْجُوبُونَ (veiled)", righteous: "نَعِيمٍ (bliss)" },
      { aspect: "Final Scene", wicked: "Laughed at", righteous: "Laughing" }
    ]
  }
};

export default ONTOLOGY;
