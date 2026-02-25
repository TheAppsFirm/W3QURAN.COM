/**
 * Surah Al-Furqan (25) - Ontology of Quranic Concepts
 * The Criterion / The Standard
 * Theme: The Quran as criterion, qualities of true servants ('Ibad ar-Rahman), rejection of deniers
 */

export const ONTOLOGY = {
  surahId: 25,
  surahName: "Al-Furqan",
  surahNameArabic: "الفرقان",
  revelationType: "Makki",
  totalAyahs: 77,

  categories: {
    theFurqan: {
      name: "Al-Furqan (The Criterion)",
      nameArabic: "الفرقان",
      color: "#F59E0B",
      icon: "Book",
      concepts: [
        { term: "تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ", meaning: { en: "Blessed is He who sent down the Criterion", ur: "بابرکت ہے وہ جس نے فرقان نازل کیا" }, explanation: { en: "The Quran as the ultimate distinction between truth and falsehood", ur: "قرآن حق اور باطل کے درمیان حتمی فرق کرنے والا" }, verseRef: "25:1" },
        { term: "عَلَىٰ عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا", meaning: { en: "Upon His servant to be a warner to the worlds", ur: "اپنے بندے پر تاکہ تمام جہانوں کے لیے ڈرانے والا ہو" }, explanation: { en: "Prophet as universal warner through Quran", ur: "قرآن کے ذریعے نبی بطور عالمگیر خبردار کرنے والے" }, verseRef: "25:1" },
        { term: "أَسَاطِيرُ الْأَوَّلِينَ اكْتَتَبَهَا", meaning: { en: "Legends of the former peoples he had written", ur: "اگلے لوگوں کی کہانیاں جو اس نے لکھوا لیں" }, explanation: { en: "Accusation against Quran rejected", ur: "قرآن پر الزام کی تردید" }, verseRef: "25:5" },
        { term: "قُلْ أَنزَلَهُ الَّذِي يَعْلَمُ السِّرَّ", meaning: { en: "Say: Sent down by He who knows the secret", ur: "کہو: اسے اس نے نازل کیا جو بھید جانتا ہے" }, explanation: { en: "Divine origin of Quran confirmed", ur: "قرآن کی الٰہی اصلیت کی تصدیق" }, verseRef: "25:6" }
      ]
    },

    deniersObjections: {
      name: "Objections of Deniers",
      nameArabic: "اعتراضات المنکرین",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "مَا لِهَٰذَا الرَّسُولِ يَأْكُلُ الطَّعَامَ", meaning: { en: "What is this messenger who eats food?", ur: "یہ کیسا رسول ہے جو کھانا کھاتا ہے؟" }, explanation: { en: "They expected non-human messenger", ur: "وہ غیر انسانی رسول کی توقع رکھتے تھے" }, verseRef: "25:7" },
        { term: "لَوْلَا أُنزِلَ إِلَيْهِ مَلَكٌ", meaning: { en: "Why was not an angel sent down to him?", ur: "اس کے پاس فرشتہ کیوں نہیں بھیجا گیا؟" }, explanation: { en: "Demand for angelic messenger", ur: "فرشتے کو رسول بنا کر بھیجنے کا مطالبہ" }, verseRef: "25:7" },
        { term: "أَوْ يُلْقَىٰ إِلَيْهِ كَنزٌ", meaning: { en: "Or there is dropped to him a treasure", ur: "یا اس پر خزانہ گرایا جائے" }, explanation: { en: "Material expectations from prophet", ur: "نبی سے مادی توقعات" }, verseRef: "25:8" },
        { term: "أَوْ تَكُونُ لَهُ جَنَّةٌ يَأْكُلُ مِنْهَا", meaning: { en: "Or he has a garden from which he eats", ur: "یا اس کا باغ ہو جس سے وہ کھائے" }, explanation: { en: "Worldly prosperity as proof demand", ur: "دنیاوی خوشحالی کو ثبوت کے طور پر مانگنا" }, verseRef: "25:8" },
        { term: "إِنْ هَٰذَا إِلَّا رَجُلٌ مَّسْحُورٌ", meaning: { en: "This is not but a man affected by magic", ur: "یہ تو صرف ایک جادو زدہ آدمی ہے" }, explanation: { en: "Accusation of being bewitched", ur: "جادو کا شکار ہونے کا الزام" }, verseRef: "25:8" },
        { term: "لَوْلَا نُزِّلَ عَلَيْهِ الْقُرْآنُ جُمْلَةً وَاحِدَةً", meaning: { en: "Why was not the Quran revealed all at once?", ur: "قرآن ایک ہی مرتبہ کیوں نہیں اتارا گیا؟" }, explanation: { en: "Questioning gradual revelation", ur: "تدریجی وحی پر سوال اٹھانا" }, verseRef: "25:32" }
      ]
    },

    divineResponses: {
      name: "Divine Responses",
      nameArabic: "الردود الإلهية",
      color: "#8B5CF6",
      icon: "Zap",
      concepts: [
        { term: "انظُرْ كَيْفَ ضَرَبُوا لَكَ الْأَمْثَالَ", meaning: { en: "Look how they strike parables for you", ur: "دیکھو انہوں نے تمہارے لیے کیسی مثالیں بنائیں" }, explanation: { en: "Their confused reasoning exposed", ur: "ان کی پریشان استدلال کی نقاب کشائی" }, verseRef: "25:9" },
        { term: "فَضَلُّوا فَلَا يَسْتَطِيعُونَ سَبِيلًا", meaning: { en: "And have strayed, unable to find a way", ur: "وہ بھٹک گئے اور راستہ نہیں پا سکتے" }, explanation: { en: "Their misguidance confirmed", ur: "ان کی گمراہی کی تصدیق" }, verseRef: "25:9" },
        { term: "كَذَٰلِكَ لِنُثَبِّتَ بِهِ فُؤَادَكَ", meaning: { en: "Thus to strengthen your heart thereby", ur: "اس طرح تاکہ اس سے تمہارا دل مضبوط ہو" }, explanation: { en: "Gradual revelation for support", ur: "تقویت کے لیے تدریجی وحی" }, verseRef: "25:32" },
        { term: "وَرَتَّلْنَاهُ تَرْتِيلًا", meaning: { en: "And We have recited it distinctly", ur: "اور ہم نے اسے ٹھہر ٹھہر کر پڑھا" }, explanation: { en: "Perfect arrangement of Quran", ur: "قرآن کی کامل ترتیب" }, verseRef: "25:32" }
      ]
    },

    previousNations: {
      name: "Stories of Previous Nations",
      nameArabic: "قصص الأمم السابقة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "قَوْمَ نُوحٍ لَّمَّا كَذَّبُوا الرُّسُلَ", meaning: { en: "People of Noah when they denied messengers", ur: "نوح کی قوم جب انہوں نے رسولوں کو جھٹلایا" }, explanation: { en: "First example of destruction", ur: "تباہی کی پہلی مثال" }, verseRef: "25:37" },
        { term: "وَعَادًا وَثَمُودَ", meaning: { en: "And Aad and Thamud", ur: "اور عاد اور ثمود" }, explanation: { en: "Arab peoples destroyed", ur: "تباہ شدہ عرب قومیں" }, verseRef: "25:38" },
        { term: "وَأَصْحَابَ الرَّسِّ", meaning: { en: "And companions of the well", ur: "اور کنویں والے لوگ" }, explanation: { en: "Ancient people destroyed", ur: "تباہ شدہ قدیم قوم" }, verseRef: "25:38" },
        { term: "وَقُرُونًا بَيْنَ ذَٰلِكَ كَثِيرًا", meaning: { en: "And many generations between", ur: "اور ان کے درمیان بہت سی نسلیں" }, explanation: { en: "Countless examples", ur: "بے شمار مثالیں" }, verseRef: "25:38" },
        { term: "قَوْمُ مُّوسَىٰ", meaning: { en: "People of Moses", ur: "موسیٰ کی قوم" }, explanation: { en: "Pharaoh's destruction", ur: "فرعون کی تباہی" }, verseRef: "25:35-36" },
        { term: "قَوْمَ لُوطٍ", meaning: { en: "People of Lot", ur: "لوط کی قوم" }, explanation: { en: "Cities overturned", ur: "شہر الٹ دیے گئے" }, verseRef: "25:40" }
      ]
    },

    signsOfAllah: {
      name: "Signs in Creation",
      nameArabic: "الآيات الكونية",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "مَدَّ الظِّلَّ", meaning: { en: "Extends the shadow", ur: "سائے کو پھیلاتا ہے" }, explanation: { en: "Shadow as sign of Allah", ur: "سایہ اللہ کی نشانی" }, verseRef: "25:45" },
        { term: "جَعَلَ الشَّمْسَ عَلَيْهِ دَلِيلًا", meaning: { en: "Made the sun for it an indication", ur: "سورج کو اس کے لیے رہنما بنایا" }, explanation: { en: "Sun-shadow relationship", ur: "سورج اور سائے کا تعلق" }, verseRef: "25:45" },
        { term: "جَعَلَ لَكُمُ اللَّيْلَ لِبَاسًا", meaning: { en: "Made night for you as clothing", ur: "رات کو تمہارے لیے لباس بنایا" }, explanation: { en: "Night covers like garment", ur: "رات لباس کی طرح ڈھانپ لیتی ہے" }, verseRef: "25:47" },
        { term: "وَالنَّوْمَ سُبَاتًا", meaning: { en: "And sleep as rest", ur: "اور نیند کو آرام بنایا" }, explanation: { en: "Sleep for recovery", ur: "نیند صحت یابی کے لیے" }, verseRef: "25:47" },
        { term: "وَجَعَلَ النَّهَارَ نُشُورًا", meaning: { en: "And made the day a resurrection", ur: "اور دن کو جی اٹھنے کا ذریعہ بنایا" }, explanation: { en: "Daily awakening like resurrection", ur: "روزانہ بیداری قیامت جیسی" }, verseRef: "25:47" },
        { term: "أَرْسَلَ الرِّيَاحَ بُشْرًا", meaning: { en: "Sends winds as glad tidings", ur: "ہواؤں کو خوشخبری دینے والی بھیجتا ہے" }, explanation: { en: "Winds bring rain news", ur: "ہوائیں بارش کی خبر لاتی ہیں" }, verseRef: "25:48" },
        { term: "وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا", meaning: { en: "And We sent down pure water from sky", ur: "اور ہم نے آسمان سے پاک پانی اتارا" }, explanation: { en: "Rain as purifying water", ur: "بارش بطور پاکیزہ پانی" }, verseRef: "25:48" },
        { term: "لِّنُحْيِيَ بِهِ بَلْدَةً مَّيْتًا", meaning: { en: "To give life to a dead land", ur: "تاکہ اس سے مردہ سرزمین کو زندہ کریں" }, explanation: { en: "Water revives dead earth", ur: "پانی مردہ زمین کو زندہ کرتا ہے" }, verseRef: "25:49" },
        { term: "وَهُوَ الَّذِي مَرَجَ الْبَحْرَيْنِ", meaning: { en: "He released the two seas", ur: "وہی ہے جس نے دو سمندر ملا دیے" }, explanation: { en: "Two seas that don't mix", ur: "دو سمندر جو آپس میں نہیں ملتے" }, verseRef: "25:53" },
        { term: "بَيْنَهُمَا بَرْزَخٌ", meaning: { en: "Between them a barrier", ur: "ان کے درمیان ایک پردہ ہے" }, explanation: { en: "Natural barrier between seas", ur: "سمندروں کے درمیان قدرتی حائل" }, verseRef: "25:53" },
        { term: "خَلَقَ مِنَ الْمَاءِ بَشَرًا", meaning: { en: "Created from water a human", ur: "پانی سے انسان پیدا کیا" }, explanation: { en: "Human origin from water", ur: "انسان کی اصل پانی سے" }, verseRef: "25:54" },
        { term: "وَهُوَ الَّذِي خَلَقَ اللَّيْلَ وَالنَّهَارَ", meaning: { en: "He who created night and day", ur: "وہی ہے جس نے رات اور دن بنائے" }, explanation: { en: "Alternation of time", ur: "وقت کا ادلنا بدلنا" }, verseRef: "25:62" }
      ]
    },

    ibadArRahman: {
      name: "Servants of the Most Merciful",
      nameArabic: "عباد الرحمن",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "عِبَادُ الرَّحْمَٰنِ", meaning: { en: "Servants of the Most Merciful", ur: "رحمٰن کے بندے" }, explanation: { en: "Honored title for believers", ur: "مومنوں کا باعزت لقب" }, verseRef: "25:63" },
        { term: "يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا", meaning: { en: "Walk upon earth gently/humbly", ur: "زمین پر عاجزی سے چلتے ہیں" }, explanation: { en: "First quality: humble walking", ur: "پہلی صفت: عاجزانہ چال" }, verseRef: "25:63" },
        { term: "إِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا", meaning: { en: "When addressed by ignorant, say peace", ur: "جب جاہل ان سے بات کریں تو کہیں سلام" }, explanation: { en: "Responding to provocation with peace", ur: "اشتعال پر سلامتی سے جواب دینا" }, verseRef: "25:63" },
        { term: "يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا", meaning: { en: "Spend night prostrating and standing", ur: "اپنے رب کے لیے سجدے اور قیام میں رات گزارتے ہیں" }, explanation: { en: "Night prayer devotion", ur: "رات کی عبادت میں لگن" }, verseRef: "25:64" },
        { term: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ", meaning: { en: "Our Lord, avert from us punishment of Hell", ur: "اے ہمارے رب، ہم سے جہنم کا عذاب ٹال دے" }, explanation: { en: "Fear of Hell despite righteousness", ur: "نیکوکاری کے باوجود جہنم کا خوف" }, verseRef: "25:65" },
        { term: "إِنَّ عَذَابَهَا كَانَ غَرَامًا", meaning: { en: "Indeed its punishment is inseparable", ur: "بے شک اس کا عذاب چمٹنے والا ہے" }, explanation: { en: "Hell's punishment is permanent", ur: "جہنم کا عذاب مستقل ہے" }, verseRef: "25:65" },
        { term: "إِذَا أَنفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا", meaning: { en: "When they spend, neither extravagant nor stingy", ur: "جب خرچ کریں نہ فضول خرچی کریں نہ بخل" }, explanation: { en: "Balanced spending", ur: "متوازن خرچ" }, verseRef: "25:67" },
        { term: "وَكَانَ بَيْنَ ذَٰلِكَ قَوَامًا", meaning: { en: "And is between that moderate", ur: "اور ان دونوں کے درمیان اعتدال ہے" }, explanation: { en: "Middle path in spending", ur: "خرچ میں درمیانی راستہ" }, verseRef: "25:67" },
        { term: "لَا يَدْعُونَ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: { en: "Do not invoke with Allah another deity", ur: "اللہ کے ساتھ کسی اور معبود کو نہیں پکارتے" }, explanation: { en: "Pure monotheism", ur: "خالص توحید" }, verseRef: "25:68" },
        { term: "وَلَا يَقْتُلُونَ النَّفْسَ", meaning: { en: "Nor kill the soul", ur: "اور کسی جان کو قتل نہیں کرتے" }, explanation: { en: "Prohibition of murder", ur: "قتل کی حرمت" }, verseRef: "25:68" },
        { term: "وَلَا يَزْنُونَ", meaning: { en: "Nor commit unlawful intercourse", ur: "اور زنا نہیں کرتے" }, explanation: { en: "Sexual morality", ur: "جنسی اخلاقیات" }, verseRef: "25:68" },
        { term: "وَلَا يَشْهَدُونَ الزُّورَ", meaning: { en: "Do not witness falsehood", ur: "جھوٹی گواہی نہیں دیتے" }, explanation: { en: "Avoid false testimony", ur: "جھوٹی گواہی سے اجتناب" }, verseRef: "25:72" },
        { term: "مَرُّوا بِاللَّغْوِ مَرُّوا كِرَامًا", meaning: { en: "Pass by ill speech with dignity", ur: "بے ہودہ بات پر وقار سے گزر جاتے ہیں" }, explanation: { en: "Dignified avoidance of vain talk", ur: "فضول باتوں سے باوقار اجتناب" }, verseRef: "25:72" },
        { term: "لَمْ يَخِرُّوا عَلَيْهَا صُمًّا وَعُمْيَانًا", meaning: { en: "Do not fall upon them deaf and blind", ur: "ان پر بہرے اور اندھے ہو کر نہیں گرتے" }, explanation: { en: "Mindful reception of guidance", ur: "ہدایت کو سوچ سمجھ کر قبول کرنا" }, verseRef: "25:73" },
        { term: "هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ", meaning: { en: "Grant us from spouses and offspring comfort of eyes", ur: "ہمیں ہماری بیویوں اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما" }, explanation: { en: "Prayer for righteous family", ur: "نیک خاندان کی دعا" }, verseRef: "25:74" },
        { term: "وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", meaning: { en: "Make us leaders for the righteous", ur: "ہمیں متقیوں کا امام بنا دے" }, explanation: { en: "Aspiration for spiritual leadership", ur: "روحانی قیادت کی خواہش" }, verseRef: "25:74" }
      ]
    },

    repentance: {
      name: "Repentance and Forgiveness",
      nameArabic: "التوبة والمغفرة",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        { term: "إِلَّا مَن تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا", meaning: { en: "Except those who repent, believe, do good", ur: "سوائے ان کے جو توبہ کریں، ایمان لائیں اور نیک عمل کریں" }, explanation: { en: "Three conditions for forgiveness", ur: "معافی کی تین شرائط" }, verseRef: "25:70" },
        { term: "يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ", meaning: { en: "Allah will replace their sins with good deeds", ur: "اللہ ان کی برائیوں کو نیکیوں سے بدل دے گا" }, explanation: { en: "Transformation of sins to good deeds", ur: "گناہوں کا نیکیوں میں تبدیل ہونا" }, verseRef: "25:70" },
        { term: "وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا", meaning: { en: "And Allah is Forgiving and Merciful", ur: "اور اللہ بخشنے والا مہربان ہے" }, explanation: { en: "Divine mercy emphasized", ur: "الٰہی رحمت پر زور" }, verseRef: "25:70" },
        { term: "وَمَن تَابَ وَعَمِلَ صَالِحًا فَإِنَّهُ يَتُوبُ إِلَى اللَّهِ مَتَابًا", meaning: { en: "Whoever repents and does good, returns to Allah completely", ur: "جو توبہ کرے اور نیک عمل کرے وہ مکمل طور پر اللہ کی طرف لوٹتا ہے" }, explanation: { en: "Complete return through repentance", ur: "توبہ کے ذریعے مکمل واپسی" }, verseRef: "25:71" }
      ]
    },

    rewardOfServants: {
      name: "Reward of True Servants",
      nameArabic: "جزاء العباد الصالحين",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "يُجْزَوْنَ الْغُرْفَةَ بِمَا صَبَرُوا", meaning: { en: "Will be rewarded with chambers for patience", ur: "صبر کے بدلے بالاخانوں سے نوازے جائیں گے" }, explanation: { en: "Elevated chambers in Paradise", ur: "جنت میں بلند بالاخانے" }, verseRef: "25:75" },
        { term: "وَيُلَقَّوْنَ فِيهَا تَحِيَّةً وَسَلَامًا", meaning: { en: "Received with greeting and peace", ur: "ان میں سلام اور خوش آمدید سے ملاقات ہوگی" }, explanation: { en: "Welcome in Paradise", ur: "جنت میں خوش آمدید" }, verseRef: "25:75" },
        { term: "خَالِدِينَ فِيهَا", meaning: { en: "Abiding therein eternally", ur: "ان میں ہمیشہ رہیں گے" }, explanation: { en: "Eternal Paradise", ur: "ابدی جنت" }, verseRef: "25:76" },
        { term: "حَسُنَتْ مُسْتَقَرًّا وَمُقَامًا", meaning: { en: "Good is the settlement and residence", ur: "کیا ہی اچھا ٹھکانا اور مقام ہے" }, explanation: { en: "Best abode forever", ur: "ہمیشہ کا بہترین ٹھکانا" }, verseRef: "25:76" }
      ]
    },

    divineAttributes: {
      name: "Divine Attributes",
      nameArabic: "الصفات الإلهية",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To whom belongs dominion of heavens and earth", ur: "آسمانوں اور زمین کی بادشاہی جس کی ہے" }, explanation: { en: "Absolute sovereignty", ur: "مطلق حاکمیت" }, verseRef: "25:2" },
        { term: "وَلَمْ يَتَّخِذْ وَلَدًا", meaning: { en: "And has not taken a son", ur: "اور اس نے کوئی بیٹا نہیں بنایا" }, explanation: { en: "Rejection of divine offspring", ur: "الٰہی اولاد کے تصور کی تردید" }, verseRef: "25:2" },
        { term: "وَلَمْ يَكُن لَّهُ شَرِيكٌ فِي الْمُلْكِ", meaning: { en: "And has no partner in dominion", ur: "اور بادشاہی میں اس کا کوئی شریک نہیں" }, explanation: { en: "No partners in sovereignty", ur: "حاکمیت میں کوئی شریک نہیں" }, verseRef: "25:2" },
        { term: "وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا", meaning: { en: "Created everything and determined it precisely", ur: "ہر چیز کو پیدا کیا اور ٹھیک ٹھیک اندازے سے بنایا" }, explanation: { en: "Perfect divine planning", ur: "کامل الٰہی منصوبہ بندی" }, verseRef: "25:2" },
        { term: "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ", meaning: { en: "Rely upon the Living who does not die", ur: "اس زندہ ذات پر بھروسہ کرو جو کبھی نہیں مرتا" }, explanation: { en: "Allah's eternal existence", ur: "اللہ کی ابدی حیات" }, verseRef: "25:58" },
        { term: "وَسَبِّحْ بِحَمْدِهِ", meaning: { en: "And exalt with His praise", ur: "اور اس کی حمد کے ساتھ تسبیح کرو" }, explanation: { en: "Continuous glorification", ur: "مسلسل تسبیح" }, verseRef: "25:58" },
        { term: "وَكَفَىٰ بِهِ بِذُنُوبِ عِبَادِهِ خَبِيرًا", meaning: { en: "Sufficient is He as Aware of sins", ur: "بندوں کے گناہوں سے باخبر ہونے کے لیے وہ کافی ہے" }, explanation: { en: "Complete knowledge of sins", ur: "گناہوں کا مکمل علم" }, verseRef: "25:58" },
        { term: "الرَّحْمَٰنُ فَاسْأَلْ بِهِ خَبِيرًا", meaning: { en: "The Most Merciful, ask about Him one informed", ur: "رحمٰن، اس کے بارے میں کسی جاننے والے سے پوچھو" }, explanation: { en: "Rahman - key divine name", ur: "رحمٰن - اہم الٰہی نام" }, verseRef: "25:59" }
      ]
    },

    judgmentDay: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "يَوْمَ يَرَوْنَ الْمَلَائِكَةَ", meaning: { en: "The day they see the angels", ur: "جس دن وہ فرشتوں کو دیکھیں گے" }, explanation: { en: "No good news for criminals", ur: "مجرموں کے لیے کوئی خوشخبری نہیں" }, verseRef: "25:22" },
        { term: "لَا بُشْرَىٰ يَوْمَئِذٍ لِّلْمُجْرِمِينَ", meaning: { en: "No good tidings that day for criminals", ur: "اس دن مجرموں کے لیے کوئی خوشخبری نہیں" }, explanation: { en: "Terror for evildoers", ur: "بدکاروں کے لیے دہشت" }, verseRef: "25:22" },
        { term: "وَيَقُولُونَ حِجْرًا مَّحْجُورًا", meaning: { en: "And they will say: prevented by a barrier", ur: "اور کہیں گے: حرام ہے حرام" }, explanation: { en: "Angels block criminals", ur: "فرشتے مجرموں کو روکیں گے" }, verseRef: "25:22" },
        { term: "وَقَدِمْنَا إِلَىٰ مَا عَمِلُوا مِنْ عَمَلٍ", meaning: { en: "And We will approach their deeds", ur: "اور ہم ان کے اعمال کی طرف آئیں گے" }, explanation: { en: "Examination of deeds", ur: "اعمال کی جانچ" }, verseRef: "25:23" },
        { term: "فَجَعَلْنَاهُ هَبَاءً مَّنثُورًا", meaning: { en: "And make them scattered dust", ur: "اور انہیں بکھرے ہوئے ذروں کی طرح کر دیں گے" }, explanation: { en: "Deeds without faith worthless", ur: "ایمان کے بغیر اعمال بے قیمت" }, verseRef: "25:23" },
        { term: "وَيَوْمَ يَعَضُّ الظَّالِمُ عَلَىٰ يَدَيْهِ", meaning: { en: "Day the wrongdoer will bite his hands", ur: "جس دن ظالم اپنے ہاتھ کاٹے گا" }, explanation: { en: "Extreme regret of wrongdoers", ur: "ظالموں کی شدید پشیمانی" }, verseRef: "25:27" },
        { term: "يَا لَيْتَنِي اتَّخَذْتُ مَعَ الرَّسُولِ سَبِيلًا", meaning: { en: "If only I had taken path with Messenger", ur: "کاش میں نے رسول کے ساتھ راستہ اختیار کیا ہوتا" }, explanation: { en: "Wishing they followed Prophet", ur: "کاش نبی کی پیروی کی ہوتی" }, verseRef: "25:27" }
      ]
    },

    badCompanionship: {
      name: "Warning Against Bad Company",
      nameArabic: "التحذير من جليس السوء",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "يَا وَيْلَتَىٰ لَيْتَنِي لَمْ أَتَّخِذْ فُلَانًا خَلِيلًا", meaning: { en: "Woe to me! Would I had not taken so-and-so as friend", ur: "ہائے افسوس! کاش میں نے فلاں کو دوست نہ بنایا ہوتا" }, explanation: { en: "Regret over bad friendships", ur: "بری دوستیوں پر پشیمانی" }, verseRef: "25:28" },
        { term: "لَّقَدْ أَضَلَّنِي عَنِ الذِّكْرِ بَعْدَ إِذْ جَاءَنِي", meaning: { en: "He led me astray from remembrance after it came", ur: "اس نے مجھے ذکر سے گمراہ کیا اس کے بعد کہ وہ میرے پاس آ چکا تھا" }, explanation: { en: "Bad friends cause misguidance", ur: "برے دوست گمراہی کا سبب بنتے ہیں" }, verseRef: "25:29" },
        { term: "وَكَانَ الشَّيْطَانُ لِلْإِنسَانِ خَذُولًا", meaning: { en: "And Satan is to man a deserter", ur: "اور شیطان انسان کو دھوکا دینے والا ہے" }, explanation: { en: "Satan abandons his followers", ur: "شیطان اپنے پیروکاروں کو چھوڑ دیتا ہے" }, verseRef: "25:29" }
      ]
    },

    prophetComplaint: {
      name: "Prophet's Complaint",
      nameArabic: "شكوى الرسول",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "يَا رَبِّ إِنَّ قَوْمِي اتَّخَذُوا هَٰذَا الْقُرْآنَ مَهْجُورًا", meaning: { en: "O Lord, my people have taken this Quran as abandoned", ur: "اے رب! میری قوم نے اس قرآن کو چھوڑ رکھا ہے" }, explanation: { en: "Ignoring/deserting the Quran", ur: "قرآن کو نظرانداز کرنا/ترک کرنا" }, verseRef: "25:30" },
        { term: "كَذَٰلِكَ جَعَلْنَا لِكُلِّ نَبِيٍّ عَدُوًّا مِّنَ الْمُجْرِمِينَ", meaning: { en: "Thus We made for every prophet an enemy from criminals", ur: "اسی طرح ہم نے ہر نبی کا مجرموں میں سے دشمن بنایا" }, explanation: { en: "All prophets faced opposition", ur: "تمام انبیاء کو مخالفت کا سامنا ہوا" }, verseRef: "25:31" },
        { term: "وَكَفَىٰ بِرَبِّكَ هَادِيًا وَنَصِيرًا", meaning: { en: "Sufficient is your Lord as guide and helper", ur: "تمہارا رب رہنمائی اور مدد کے لیے کافی ہے" }, explanation: { en: "Allah suffices as support", ur: "اللہ سہارے کے لیے کافی ہے" }, verseRef: "25:31" }
      ]
    }
  },

  relationships: [
    { from: "الفرقان", to: "نذيراً للعالمين", type: "purpose", description: { en: "Criterion sent to warn all worlds", ur: "فرقان تمام جہانوں کو خبردار کرنے کے لیے نازل ہوا" } },
    { from: "اعتراضات المنكرين", to: "الردود الإلهية", type: "response", description: { en: "Every objection has divine answer", ur: "ہر اعتراض کا الٰہی جواب ہے" } },
    { from: "قصص الأمم السابقة", to: "يوم القيامة", type: "warning", description: { en: "Past destruction foretells judgment", ur: "ماضی کی تباہی قیامت کی پیشگوئی ہے" } },
    { from: "عباد الرحمن", to: "الغرفة", type: "reward", description: { en: "Qualities lead to elevated chambers", ur: "صفات بلند بالاخانوں تک لے جاتی ہیں" } },
    { from: "التوبة", to: "تبديل السيئات حسنات", type: "transformation", description: { en: "Repentance transforms sins to good", ur: "توبہ گناہوں کو نیکیوں میں بدل دیتی ہے" } },
    { from: "الشرك والقتل والزنا", to: "العذاب", type: "consequence", description: { en: "Major sins lead to punishment", ur: "بڑے گناہ عذاب کی طرف لے جاتے ہیں" } },
    { from: "يمشون هوناً", to: "سلاماً", type: "character", description: { en: "Humble walking connects to peaceful speech", ur: "عاجزانہ چال پُرامن گفتگو سے جڑی ہے" } },
    { from: "الليل والنهار", to: "الماء", type: "signs", description: { en: "All natural phenomena are signs", ur: "تمام قدرتی مظاہر نشانیاں ہیں" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction of Furqan", verses: "25:1-9", description: { en: "Quran revealed, deniers' objections", ur: "قرآن کا نزول، منکرین کے اعتراضات" } },
      { stage: 2, theme: "Blessings Rejected", verses: "25:10-20", description: { en: "What could have been; their excuses", ur: "جو ہو سکتا تھا؛ ان کے بہانے" } },
      { stage: 3, theme: "Day of Judgment", verses: "25:21-31", description: { en: "Terror for criminals, Prophet's complaint", ur: "مجرموں کے لیے دہشت، نبی کی شکایت" } },
      { stage: 4, theme: "Gradual Revelation", verses: "25:32-34", description: { en: "Wisdom of Quran's gradual descent", ur: "قرآن کے تدریجی نزول کی حکمت" } },
      { stage: 5, theme: "Previous Nations", verses: "25:35-44", description: { en: "Moses, Noah, Aad, Thamud, Lot", ur: "موسیٰ، نوح، عاد، ثمود، لوط" } },
      { stage: 6, theme: "Signs in Nature", verses: "25:45-62", description: { en: "Shadow, night, water, seas, creation", ur: "سایہ، رات، پانی، سمندر، تخلیق" } },
      { stage: 7, theme: "Ibad ar-Rahman", verses: "25:63-77", description: { en: "Qualities of true servants and their reward", ur: "سچے بندوں کی صفات اور ان کا اجر" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Walk humbly", how: "No arrogance in gait, gentle presence", verse: "25:63" },
      { principle: "Respond to ignorance with peace", how: "Don't engage in arguments, say salam", verse: "25:63" },
      { principle: "Establish night prayers", how: "Spend portion of night in worship", verse: "25:64" },
      { principle: "Balance in spending", how: "Neither extravagant nor miserly", verse: "25:67" },
      { principle: "Avoid major sins", how: "No shirk, murder, or adultery", verse: "25:68" },
      { principle: "Avoid false witness", how: "Never testify falsely", verse: "25:72" },
      { principle: "Receive guidance mindfully", how: "Don't be deaf and blind to revelation", verse: "25:73" },
      { principle: "Pray for righteous family", how: "Make dua for spouse and children", verse: "25:74" },
      { principle: "Repent sincerely", how: "Turn back with belief and good deeds", verse: "25:70-71" },
      { principle: "Choose companions wisely", how: "Friends can lead astray or guide", verse: "25:28-29" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Portrait of Perfect Believers", ur: "کامل مومنوں کی تصویر" },
    insight: { en: "Surah Al-Furqan concludes with one of the most comprehensive portraits of ideal believers in the Quran. The 'Ibad ar-Rahman' (Servants of the Most Merciful) passage (25:63-77) describes 12 distinct qualities that define true believers: (1) Humble walking, (2) Peaceful response to ignorance, (3) Night worship, (4) Fear of Hell, (5) Balanced spending, (6) Avoiding shirk, (7) Not killing, (8) Not committing adultery, (9) Avoiding false witness, (10) Dignified response to vain talk, (11) Mindful reception of guidance, (12) Prayer for righteous family. This is the only place in Quran where believers are given the honorific title 'Ibad ar-Rahman' (servants of THE MOST MERCIFUL specifically), connecting their mercy-like qualities to the Divine Name. The surah begins with Al-Furqan (criterion) distinguishing truth from falsehood, and ends with these servants as the living embodiment of that distinction.", ur: "سورہ الفرقان قرآن میں مثالی مومنوں کی سب سے جامع تصویر کے ساتھ ختم ہوتی ہے۔ 'عباد الرحمٰن' (رحمٰن کے بندے) کا حصہ (25:63-77) بارہ الگ صفات بیان کرتا ہے جو سچے مومنوں کی پہچان ہیں: (1) عاجزانہ چال، (2) جہالت پر پُرامن جواب، (3) رات کی عبادت، (4) جہنم کا خوف، (5) متوازن خرچ، (6) شرک سے اجتناب، (7) قتل نہ کرنا، (8) زنا نہ کرنا، (9) جھوٹی گواہی سے بچنا، (10) فضول باتوں پر باوقار جواب، (11) ہدایت کو سوچ سمجھ کر قبول کرنا، (12) نیک خاندان کی دعا۔ یہ قرآن میں واحد مقام ہے جہاں مومنوں کو 'عباد الرحمٰن' کا اعزازی لقب دیا گیا ہے، جو ان کی رحمت جیسی صفات کو الٰہی نام سے جوڑتا ہے۔ سورہ فرقان (کسوٹی) سے شروع ہوتی ہے جو حق اور باطل میں فرق کرتی ہے، اور ان بندوں کے ساتھ ختم ہوتی ہے جو اس فرق کا زندہ نمونہ ہیں۔" }
  },

  historicalContext: {
    note: { en: "This Makkan surah addresses the core objections Quraysh raised against the Prophet and the Quran. The accusations that he was bewitched (v.8), that the Quran was copied legends (v.5), and that a human messenger was inappropriate (v.7) were common Makkan attacks. The detailed mention of previous nations' destruction served as warning to Quraysh who knew these stories. The final passage on 'Ibad ar-Rahman' presented the alternative: instead of mockery, these qualities would lead to Paradise. The title 'Al-Furqan' (The Criterion) emphasizes the Quran's role in distinguishing truth from falsehood - a central Makkan theme when monotheism was being distinguished from polytheism.", ur: "یہ مکی سورہ ان بنیادی اعتراضات کا جواب دیتی ہے جو قریش نے نبی اور قرآن پر اٹھائے تھے۔ جادو زدہ ہونے کا الزام (آیت 8)، قرآن کا اگلوں کی کہانیاں ہونے کا دعویٰ (آیت 5)، اور انسانی رسول کا نامناسب ہونا (آیت 7) مکہ کے عام حملے تھے۔ پچھلی قوموں کی تباہی کا تفصیلی ذکر قریش کے لیے تنبیہ تھا جو ان کہانیوں سے واقف تھے۔ 'عباد الرحمٰن' کا آخری حصہ متبادل پیش کرتا ہے: مذاق کی بجائے، یہ صفات جنت کی طرف لے جائیں گی۔ 'الفرقان' (کسوٹی) کا عنوان حق اور باطل میں فرق کرنے میں قرآن کے کردار پر زور دیتا ہے - مکی دور کا مرکزی موضوع جب توحید کو شرک سے ممتاز کیا جا رہا تھا۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "الْفُرْقَانَ", example: { en: "The Criterion", ur: "فرقان (حق و باطل میں فرق کرنے والا)" }, effect: "From ف ر ق - to distinguish/separate; intensive form" },
      { feature: "تَبَارَكَ", example: { en: "Blessed is", ur: "بابرکت ہے" }, effect: "Form VI - intensive blessing, same opening as Surah 67" },
      { feature: "هَوْنًا", example: { en: "Gently/humbly", ur: "عاجزی/نرمی سے" }, effect: "Describes manner of walking - with ease and humility" },
      { feature: "سُجَّدًا وَقِيَامًا", example: { en: "Prostrating and standing", ur: "سجدے اور قیام میں" }, effect: "Two postures representing complete prayer" },
      { feature: "قَوَامًا", example: { en: "Moderate/balanced", ur: "معتدل/متوازن" }, effect: "From قوم - standing upright, justly balanced" },
      { feature: "الْغُرْفَةَ", example: { en: "The chambers", ur: "بالاخانے" }, effect: "Elevated rooms in Paradise - from غرف (upper room)" },
      { feature: "مَهْجُورًا", example: { en: "Abandoned", ur: "ترک شدہ" }, effect: "From هجر - to abandon; passive participle - the Quran left alone" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "25:45-46", topic: "Shadow extension", note: "Shadow's lengthening and shortening tied to sun's angle - observable science" },
      { verse: "25:47", topic: "Night as covering", note: "Darkness described as garment - night provides cover and rest" },
      { verse: "25:48", topic: "Wind and rain", note: "Winds carrying clouds before rain - meteorological accuracy" },
      { verse: "25:53", topic: "Two seas with barrier", note: "Fresh and salt water meeting with barrier (halocline) - oceanographic phenomenon" },
      { verse: "25:54", topic: "Human origin from water", note: "Water as basis of life - biological accuracy" },
      { verse: "25:59", topic: "Six-day creation", note: "Creation in six periods - cosmological reference" }
    ]
  }
};

export default ONTOLOGY;
