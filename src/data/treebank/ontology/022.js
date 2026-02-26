/**
 * Surah Al-Hajj (22) - Ontology of Quranic Concepts
 * The Pilgrimage
 * Theme: Hajj pilgrimage, Day of Judgment earthquake, sacrifice, permission to fight, signs of Allah
 */

export const ONTOLOGY = {
  surahId: 22,
  surahName: "Al-Hajj",
  surahNameArabic: "الحج",
  revelationType: "Madani",
  totalAyahs: 78,

  categories: {
    dayOfJudgmentEarthquake: {
      name: "The Earthquake of the Hour",
      nameUr: "قیامت کا زلزلہ",
      nameArabic: "زلزلة الساعة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ", meaning: { en: "Earthquake of the Hour - a tremendous thing", ur: "قیامت کا زلزلہ - ایک عظیم چیز" }, explanation: { en: "Opening warning: cosmic upheaval beyond imagination", ur: "ابتدائی تنبیہ: تصور سے بالاتر کائناتی ہلچل" }, verseRef: "22:1" },
        { term: "يَوْمَ تَرَوْنَهَا تَذْهَلُ كُلُّ مُرْضِعَةٍ", meaning: { en: "Day you see it, every nursing mother will forget", ur: "جس دن تم اسے دیکھو گے، ہر دودھ پلانے والی اپنے بچے کو بھول جائے گی" }, explanation: { en: "Horror so intense mothers abandon infants", ur: "اتنی شدید دہشت کہ مائیں بچوں کو چھوڑ دیں" }, verseRef: "22:2" },
        { term: "وَتَضَعُ كُلُّ ذَاتِ حَمْلٍ حَمْلَهَا", meaning: { en: "Every pregnant one will miscarry", ur: "ہر حاملہ اپنا بوجھ گرا دے گی" }, explanation: { en: "Physical manifestation of terror", ur: "دہشت کا جسمانی اظہار" }, verseRef: "22:2" },
        { term: "وَتَرَى النَّاسَ سُكَارَىٰ", meaning: { en: "You will see people intoxicated", ur: "تم لوگوں کو نشے میں دیکھو گے" }, explanation: { en: "Staggering in confusion though not drunk", ur: "بغیر نشے کے حیرانی میں لڑکھڑاتے ہوئے" }, verseRef: "22:2" },
        { term: "وَلَـٰكِنَّ عَذَابَ اللَّهِ شَدِيدٌ", meaning: { en: "But Allah's punishment is severe", ur: "لیکن اللہ کا عذاب سخت ہے" }, explanation: { en: "The real intoxication is terror, not wine", ur: "اصل نشہ دہشت ہے، شراب نہیں" }, verseRef: "22:2" }
      ]
    },

    creationProofs: {
      name: "Proofs of Resurrection",
      nameUr: "قیامت کے دلائل",
      nameArabic: "براهين البعث",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "خَلَقْنَاكُم مِّن تُرَابٍ", meaning: { en: "We created you from dust", ur: "ہم نے تمہیں مٹی سے پیدا کیا" }, explanation: { en: "First creation stage - ultimate origin", ur: "تخلیق کا پہلا مرحلہ - ابتدائی اصل" }, verseRef: "22:5" },
        { term: "ثُمَّ مِن نُّطْفَةٍ", meaning: { en: "Then from a sperm-drop", ur: "پھر نطفے سے" }, explanation: { en: "Beginning of individual human creation", ur: "انفرادی انسانی تخلیق کی ابتدا" }, verseRef: "22:5" },
        { term: "ثُمَّ مِنْ عَلَقَةٍ", meaning: { en: "Then from a clinging clot", ur: "پھر لوتھڑے سے" }, explanation: { en: "Embryonic development stage", ur: "جنینی نشوونما کا مرحلہ" }, verseRef: "22:5" },
        { term: "ثُمَّ مِن مُّضْغَةٍ", meaning: { en: "Then from a lump of flesh", ur: "پھر گوشت کے ٹکڑے سے" }, explanation: { en: "Formed and unformed stages", ur: "شکل یافتہ اور بے شکل مراحل" }, verseRef: "22:5" },
        { term: "وَنُقِرُّ فِي الْأَرْحَامِ مَا نَشَاءُ", meaning: { en: "We settle in wombs whom We will", ur: "ہم رحموں میں جسے چاہیں ٹھہراتے ہیں" }, explanation: { en: "Divine selection of who lives", ur: "کسے زندگی ملے اس کا الٰہی انتخاب" }, verseRef: "22:5" },
        { term: "ثُمَّ نُخْرِجُكُمْ طِفْلًا", meaning: { en: "Then bring you out as a child", ur: "پھر تمہیں بچے کی صورت نکالتے ہیں" }, explanation: { en: "Birth - emergence from hidden creation", ur: "پیدائش - پوشیدہ تخلیق سے ظہور" }, verseRef: "22:5" },
        { term: "لِتَبْلُغُوا أَشُدَّكُمْ", meaning: { en: "That you may reach maturity", ur: "تاکہ تم اپنی جوانی کو پہنچو" }, explanation: { en: "Purpose of growth - reaching full strength", ur: "نشوونما کا مقصد - پوری طاقت تک پہنچنا" }, verseRef: "22:5" },
        { term: "وَمِنكُم مَّن يُرَدُّ إِلَىٰ أَرْذَلِ الْعُمُرِ", meaning: { en: "Some returned to decrepit old age", ur: "بعض کو بدترین بڑھاپے کی طرف لوٹایا جاتا ہے" }, explanation: { en: "Cycle back to helplessness", ur: "بے بسی کی طرف واپسی کا چکر" }, verseRef: "22:5" }
      ]
    },

    earthRevivalSign: {
      name: "Earth Revival as Resurrection Sign",
      nameUr: "زمین کی بحالی بطور دلیلِ قیامت",
      nameArabic: "إحياء الأرض دليل البعث",
      color: "#22C55E",
      icon: "Sun",
      concepts: [
        { term: "وَتَرَى الْأَرْضَ هَامِدَةً", meaning: { en: "You see the earth barren", ur: "تم زمین کو بے جان دیکھتے ہو" }, explanation: { en: "Dead, lifeless, hopeless appearance", ur: "مردہ، بے جان، مایوس کن منظر" }, verseRef: "22:5" },
        { term: "فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ", meaning: { en: "When We send water, it stirs", ur: "جب ہم اس پر پانی اتارتے ہیں تو وہ ہلنے لگتی ہے" }, explanation: { en: "Immediate response to rain", ur: "بارش پر فوری ردعمل" }, verseRef: "22:5" },
        { term: "وَرَبَتْ", meaning: { en: "And swells", ur: "اور ابھرتی ہے" }, explanation: { en: "Earth grows, expands with life", ur: "زمین زندگی سے بڑھتی اور پھیلتی ہے" }, verseRef: "22:5" },
        { term: "وَأَنبَتَتْ مِن كُلِّ زَوْجٍ بَهِيجٍ", meaning: { en: "Produces every lovely pair", ur: "ہر خوبصورت قسم کے جوڑے اگاتی ہے" }, explanation: { en: "Diversity and beauty emerge from death", ur: "موت سے تنوع اور خوبصورتی ابھرتی ہے" }, verseRef: "22:5" },
        { term: "ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ", meaning: { en: "That is because Allah is the Truth", ur: "یہ اس لیے کہ اللہ حق ہے" }, explanation: { en: "Earth revival proves Allah's reality", ur: "زمین کی بحالی اللہ کی حقیقت ثابت کرتی ہے" }, verseRef: "22:6" },
        { term: "وَأَنَّهُ يُحْيِي الْمَوْتَىٰ", meaning: { en: "And He gives life to the dead", ur: "اور وہ مردوں کو زندہ کرتا ہے" }, explanation: { en: "Same power that revives earth will resurrect humans", ur: "جو طاقت زمین زندہ کرتی ہے وہی انسان اٹھائے گی" }, verseRef: "22:6" }
      ]
    },

    typesOfWorshippers: {
      name: "Types of Worshippers",
      nameUr: "عبادت گزاروں کی اقسام",
      nameArabic: "أصناف العابدين",
      color: "#F59E0B",
      icon: "Users",
      concepts: [
        { term: "مَن يَعْبُدُ اللَّهَ عَلَىٰ حَرْفٍ", meaning: { en: "Who worships Allah on an edge", ur: "جو اللہ کی عبادت کنارے پر کھڑے ہو کر کرتا ہے" }, explanation: { en: "Conditional faith - worship contingent on results", ur: "مشروط ایمان - نتائج پر منحصر عبادت" }, verseRef: "22:11" },
        { term: "فَإِنْ أَصَابَهُ خَيْرٌ اطْمَأَنَّ بِهِ", meaning: { en: "If good befalls, satisfied", ur: "اگر بھلائی ملے تو مطمئن" }, explanation: { en: "Content only when things go well", ur: "صرف اچھے حالات میں مطمئن" }, verseRef: "22:11" },
        { term: "وَإِنْ أَصَابَتْهُ فِتْنَةٌ انقَلَبَ عَلَىٰ وَجْهِهِ", meaning: { en: "If trial strikes, turns on his face", ur: "اگر آزمائش آئے تو منہ کے بل پلٹ جاتا ہے" }, explanation: { en: "Apostasy at first difficulty", ur: "پہلی مشکل پر ایمان سے پلٹ جانا" }, verseRef: "22:11" },
        { term: "خَسِرَ الدُّنْيَا وَالْآخِرَةَ", meaning: { en: "Lost the world and Hereafter", ur: "دنیا اور آخرت دونوں خسارے میں" }, explanation: { en: "Double loss - neither realm gained", ur: "دوہرا نقصان - نہ دنیا ملی نہ آخرت" }, verseRef: "22:11" },
        { term: "ذَٰلِكَ هُوَ الْخُسْرَانُ الْمُبِينُ", meaning: { en: "That is the clear loss", ur: "یہ صریح خسارہ ہے" }, explanation: { en: "Ultimate bankruptcy - total failure", ur: "حتمی دیوالیہ پن - مکمل ناکامی" }, verseRef: "22:11" }
      ]
    },

    divineProtection: {
      name: "Divine Protection of Believers",
      nameUr: "مومنوں کی الٰہی حفاظت",
      nameArabic: "حماية الله للمؤمنين",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "إِنَّ اللَّهَ يُدَافِعُ عَنِ الَّذِينَ آمَنُوا", meaning: { en: "Allah defends those who believe", ur: "بے شک اللہ مومنوں کا دفاع کرتا ہے" }, explanation: { en: "Active divine protection for believers", ur: "مومنوں کے لیے فعال الٰہی تحفظ" }, verseRef: "22:38" },
        { term: "إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ خَوَّانٍ كَفُورٍ", meaning: { en: "Allah loves not any treacherous ingrate", ur: "اللہ کسی خیانت کرنے والے ناشکرے کو پسند نہیں کرتا" }, explanation: { en: "Betrayal and ingratitude earn divine displeasure", ur: "خیانت اور ناشکری الٰہی ناراضگی کا سبب" }, verseRef: "22:38" }
      ]
    },

    permissionToFight: {
      name: "Permission for Self-Defense",
      nameUr: "دفاعِ نفس کی اجازت",
      nameArabic: "الإذن بالقتال",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "أُذِنَ لِلَّذِينَ يُقَاتَلُونَ", meaning: { en: "Permission granted to those fought against", ur: "اجازت دی گئی ان لوگوں کو جن سے لڑائی کی جاتی ہے" }, explanation: { en: "First verse permitting armed defense", ur: "مسلح دفاع کی اجازت دینے والی پہلی آیت" }, verseRef: "22:39" },
        { term: "بِأَنَّهُمْ ظُلِمُوا", meaning: { en: "Because they were wronged", ur: "اس لیے کہ ان پر ظلم ہوا" }, explanation: { en: "Defensive fighting due to oppression", ur: "ظلم کی وجہ سے دفاعی جنگ" }, verseRef: "22:39" },
        { term: "وَإِنَّ اللَّهَ عَلَىٰ نَصْرِهِمْ لَقَدِيرٌ", meaning: { en: "Allah is able to help them", ur: "اللہ ان کی مدد پر قادر ہے" }, explanation: { en: "Divine capability to grant victory", ur: "فتح عطا کرنے کی الٰہی صلاحیت" }, verseRef: "22:39" },
        { term: "الَّذِينَ أُخْرِجُوا مِن دِيَارِهِم بِغَيْرِ حَقٍّ", meaning: { en: "Those expelled from homes unjustly", ur: "جنہیں ناحق ان کے گھروں سے نکالا گیا" }, explanation: { en: "Expulsion justifies defense", ur: "بے دخلی دفاع کا جواز ہے" }, verseRef: "22:40" },
        { term: "إِلَّا أَن يَقُولُوا رَبُّنَا اللَّهُ", meaning: { en: "Only because they say 'Our Lord is Allah'", ur: "صرف اس لیے کہ وہ کہتے ہیں 'ہمارا رب اللہ ہے'" }, explanation: { en: "Persecuted solely for monotheism", ur: "صرف توحید کی وجہ سے ستائے گئے" }, verseRef: "22:40" }
      ]
    },

    protectionOfWorship: {
      name: "Protection of All Places of Worship",
      nameUr: "تمام عبادت گاہوں کی حفاظت",
      nameArabic: "حماية دور العبادة",
      color: "#10B981",
      icon: "Shield",
      concepts: [
        { term: "لَّهُدِّمَتْ صَوَامِعُ", meaning: { en: "Monasteries would be demolished", ur: "خانقاہیں ڈھا دی جاتیں" }, explanation: { en: "Christian monasteries protected", ur: "مسیحی خانقاہوں کی حفاظت" }, verseRef: "22:40" },
        { term: "وَبِيَعٌ", meaning: { en: "And churches", ur: "اور گرجا گھر" }, explanation: { en: "Christian churches protected", ur: "مسیحی گرجا گھروں کی حفاظت" }, verseRef: "22:40" },
        { term: "وَصَلَوَاتٌ", meaning: { en: "And synagogues", ur: "اور عبادت خانے" }, explanation: { en: "Jewish places of worship protected", ur: "یہودی عبادت گاہوں کی حفاظت" }, verseRef: "22:40" },
        { term: "وَمَسَاجِدُ يُذْكَرُ فِيهَا اسْمُ اللَّهِ كَثِيرًا", meaning: { en: "And mosques where Allah's name much mentioned", ur: "اور مسجدیں جن میں اللہ کا نام بکثرت لیا جاتا ہے" }, explanation: { en: "All worship places where God is invoked", ur: "تمام عبادت گاہیں جہاں خدا کا نام لیا جاتا ہے" }, verseRef: "22:40" },
        { term: "وَلَيَنصُرَنَّ اللَّهُ مَن يَنصُرُهُ", meaning: { en: "Allah will help those who help Him", ur: "اللہ ضرور ان کی مدد کرے گا جو اس کی مدد کریں" }, explanation: { en: "Divine aid for those who support His cause", ur: "اللہ کے دین کی مدد کرنے والوں کے لیے الٰہی مدد" }, verseRef: "22:40" }
      ]
    },

    hajjPilgrimage: {
      name: "Hajj - The Pilgrimage",
      nameUr: "حج - زیارتِ بیت اللہ",
      nameArabic: "مناسك الحج",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَأَذِّن فِي النَّاسِ بِالْحَجِّ", meaning: { en: "Proclaim Hajj to mankind", ur: "لوگوں میں حج کا اعلان کرو" }, explanation: { en: "Ibrahim's call echoes eternally", ur: "ابراہیم کی پکار ہمیشہ گونجتی ہے" }, verseRef: "22:27" },
        { term: "يَأْتُوكَ رِجَالًا", meaning: { en: "They will come on foot", ur: "وہ پیدل آئیں گے" }, explanation: { en: "Pilgrims arriving by walking", ur: "حاجی پیدل آنے والے" }, verseRef: "22:27" },
        { term: "وَعَلَىٰ كُلِّ ضَامِرٍ", meaning: { en: "And on every lean camel", ur: "اور ہر دبلی اونٹنی پر" }, explanation: { en: "Arriving on travel-worn mounts", ur: "سفر سے تھکے ہارے سواریوں پر آنا" }, verseRef: "22:27" },
        { term: "يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ", meaning: { en: "Coming from every distant pass", ur: "ہر دور دراز گھاٹی سے آتے ہوئے" }, explanation: { en: "Pilgrims from all corners of earth", ur: "دنیا کے ہر کونے سے حاجی" }, verseRef: "22:27" },
        { term: "لِّيَشْهَدُوا مَنَافِعَ لَهُمْ", meaning: { en: "To witness benefits for them", ur: "تاکہ اپنے فائدے دیکھیں" }, explanation: { en: "Spiritual and worldly benefits of Hajj", ur: "حج کے روحانی اور دنیاوی فوائد" }, verseRef: "22:28" },
        { term: "وَيَذْكُرُوا اسْمَ اللَّهِ فِي أَيَّامٍ مَّعْلُومَاتٍ", meaning: { en: "Mention Allah's name on known days", ur: "مقررہ دنوں میں اللہ کا نام لیں" }, explanation: { en: "Days of Dhul Hijjah - counted, appointed", ur: "ذوالحجہ کے دن - شمار شدہ، مقرر" }, verseRef: "22:28" }
      ]
    },

    sacrifice: {
      name: "Sacrifice and Its Reality",
      nameUr: "قربانی اور اس کی حقیقت",
      nameArabic: "الأضحية وحقيقتها",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "عَلَىٰ مَا رَزَقَهُم مِّن بَهِيمَةِ الْأَنْعَامِ", meaning: { en: "Over what He provided of livestock", ur: "جو اس نے انہیں چوپایوں میں سے دیا اس پر" }, explanation: { en: "Gratitude shown through sacrifice", ur: "قربانی کے ذریعے شکر ادا کرنا" }, verseRef: "22:28" },
        { term: "فَكُلُوا مِنْهَا وَأَطْعِمُوا الْبَائِسَ الْفَقِيرَ", meaning: { en: "Eat from them and feed the miserable poor", ur: "ان میں سے خود بھی کھاؤ اور تنگدست محتاج کو بھی کھلاؤ" }, explanation: { en: "Sacrifice benefits both donor and needy", ur: "قربانی دینے والے اور ضرورتمند دونوں کو فائدہ" }, verseRef: "22:28" },
        { term: "لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا", meaning: { en: "Their meat and blood reach not Allah", ur: "اللہ کو ان کا گوشت اور خون نہیں پہنچتا" }, explanation: { en: "Physical sacrifice is not the goal", ur: "جسمانی قربانی مقصد نہیں" }, verseRef: "22:37" },
        { term: "وَلَـٰكِن يَنَالُهُ التَّقْوَىٰ مِنكُمْ", meaning: { en: "But taqwa from you reaches Him", ur: "لیکن تمہاری تقویٰ اس تک پہنچتی ہے" }, explanation: { en: "Piety, not meat, is what Allah accepts", ur: "تقویٰ قبول ہوتی ہے، گوشت نہیں" }, verseRef: "22:37" },
        { term: "كَذَٰلِكَ سَخَّرَهَا لَكُمْ لِتُكَبِّرُوا اللَّهَ", meaning: { en: "Thus He subjected them that you may glorify Allah", ur: "اسی طرح اس نے انہیں تمہارے لیے مسخر کیا تاکہ تم اللہ کی بڑائی بیان کرو" }, explanation: { en: "Animals made serviceable for divine praise", ur: "جانور الٰہی حمد کے لیے مسخر" }, verseRef: "22:37" }
      ]
    },

    sacredHouse: {
      name: "The Sacred House (Kaaba)",
      nameUr: "بیت الحرام (کعبہ)",
      nameArabic: "البيت الحرام",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَإِذْ بَوَّأْنَا لِإِبْرَاهِيمَ مَكَانَ الْبَيْتِ", meaning: { en: "When We designated for Ibrahim the House's place", ur: "جب ہم نے ابراہیم کے لیے بیت اللہ کی جگہ مقرر کی" }, explanation: { en: "Divine selection of Kaaba's location", ur: "کعبہ کے مقام کا الٰہی انتخاب" }, verseRef: "22:26" },
        { term: "أَن لَّا تُشْرِكْ بِي شَيْئًا", meaning: { en: "Do not associate anything with Me", ur: "میرے ساتھ کسی کو شریک نہ ٹھہراؤ" }, explanation: { en: "Tawhid - foundation of the House", ur: "توحید - بیت اللہ کی بنیاد" }, verseRef: "22:26" },
        { term: "وَطَهِّرْ بَيْتِيَ لِلطَّائِفِينَ", meaning: { en: "Purify My House for those circling", ur: "میرے گھر کو طواف کرنے والوں کے لیے پاک رکھو" }, explanation: { en: "Tawaf requires pure sanctuary", ur: "طواف کے لیے پاک حرم ضروری" }, verseRef: "22:26" },
        { term: "وَالْقَائِمِينَ", meaning: { en: "And those standing", ur: "اور کھڑے ہو کر عبادت کرنے والوں" }, explanation: { en: "Standing in prayer at Kaaba", ur: "کعبہ میں کھڑے ہو کر نماز" }, verseRef: "22:26" },
        { term: "وَالرُّكَّعِ السُّجُودِ", meaning: { en: "And those bowing, prostrating", ur: "اور رکوع اور سجدہ کرنے والوں" }, explanation: { en: "Complete prayer at sacred site", ur: "مقدس مقام پر مکمل نماز" }, verseRef: "22:26" },
        { term: "ثُمَّ لْيَقْضُوا تَفَثَهُمْ", meaning: { en: "Then let them end their unkemptness", ur: "پھر اپنا میل کچیل دور کریں" }, explanation: { en: "Completing Hajj rituals - grooming after ihram", ur: "حج کی رسومات مکمل کرنا - احرام کے بعد صفائی" }, verseRef: "22:29" },
        { term: "وَلْيُوفُوا نُذُورَهُمْ", meaning: { en: "Fulfill their vows", ur: "اور اپنی نذریں پوری کریں" }, explanation: { en: "Completing pledged obligations", ur: "عہد شدہ فرائض پورے کرنا" }, verseRef: "22:29" },
        { term: "وَلْيَطَّوَّفُوا بِالْبَيْتِ الْعَتِيقِ", meaning: { en: "Circle the Ancient House", ur: "اور قدیم گھر کا طواف کریں" }, explanation: { en: "Tawaf of Kaaba - the ancient sanctuary", ur: "کعبہ کا طواف - قدیم حرم" }, verseRef: "22:29" }
      ]
    },

    sacredSymbols: {
      name: "Sacred Symbols of Allah",
      nameUr: "اللہ کی مقدس نشانیاں",
      nameArabic: "شعائر الله",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "ذَٰلِكَ وَمَن يُعَظِّمْ شَعَائِرَ اللَّهِ", meaning: { en: "Whoever honors Allah's symbols", ur: "جو اللہ کے شعائر کی تعظیم کرے" }, explanation: { en: "Respecting sacred rites and places", ur: "مقدس رسومات اور مقامات کا احترام" }, verseRef: "22:32" },
        { term: "فَإِنَّهَا مِن تَقْوَى الْقُلُوبِ", meaning: { en: "It is from piety of hearts", ur: "یہ دلوں کی تقویٰ سے ہے" }, explanation: { en: "External honor reflects internal taqwa", ur: "ظاہری احترام باطنی تقویٰ کی عکاسی" }, verseRef: "22:32" },
        { term: "لَكُمْ فِيهَا مَنَافِعُ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: { en: "In them benefits until appointed time", ur: "ان میں ایک مقررہ وقت تک فائدے ہیں" }, explanation: { en: "Use of animals until sacrifice time", ur: "قربانی کے وقت تک جانوروں کا استعمال" }, verseRef: "22:33" },
        { term: "ثُمَّ مَحِلُّهَا إِلَى الْبَيْتِ الْعَتِيقِ", meaning: { en: "Then their place is at Ancient House", ur: "پھر ان کی جگہ قدیم گھر تک ہے" }, explanation: { en: "Sacrificial animals destined for Kaaba", ur: "قربانی کے جانور کعبہ کے لیے مقرر" }, verseRef: "22:33" },
        { term: "وَالْبُدْنَ جَعَلْنَاهَا لَكُم مِّن شَعَائِرِ اللَّهِ", meaning: { en: "Sacrificial camels - Allah's symbols for you", ur: "قربانی کے اونٹ - تمہارے لیے اللہ کے شعائر" }, explanation: { en: "Camels as sacred offerings", ur: "اونٹ بطور مقدس قربانی" }, verseRef: "22:36" },
        { term: "لَكُمْ فِيهَا خَيْرٌ", meaning: { en: "In them is good for you", ur: "ان میں تمہارے لیے بھلائی ہے" }, explanation: { en: "Benefits in the sacrificial system", ur: "قربانی کے نظام میں فوائد" }, verseRef: "22:36" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Complete Knowledge",
      nameUr: "اللہ کا مکمل علم",
      nameArabic: "علم الله الشامل",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "أَلَمْ تَعْلَمْ أَنَّ اللَّهَ يَعْلَمُ مَا فِي السَّمَاءِ وَالْأَرْضِ", meaning: { en: "Do you not know Allah knows what is in heaven and earth", ur: "کیا تم نہیں جانتے اللہ جانتا ہے جو آسمان اور زمین میں ہے" }, explanation: { en: "Total divine awareness", ur: "مکمل الٰہی آگاہی" }, verseRef: "22:70" },
        { term: "إِنَّ ذَٰلِكَ فِي كِتَابٍ", meaning: { en: "That is in a Record", ur: "یہ سب ایک کتاب میں ہے" }, explanation: { en: "All recorded in Preserved Tablet", ur: "لوحِ محفوظ میں سب درج ہے" }, verseRef: "22:70" },
        { term: "إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ", meaning: { en: "That is easy for Allah", ur: "یہ اللہ پر آسان ہے" }, explanation: { en: "Comprehensive knowledge requires no effort", ur: "جامع علم میں کسی محنت کی ضرورت نہیں" }, verseRef: "22:70" }
      ]
    },

    falseDeitiesWeakness: {
      name: "Weakness of False Deities",
      nameUr: "جھوٹے معبودوں کی کمزوری",
      nameArabic: "ضعف الآلهة الباطلة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ", meaning: { en: "O people, example is presented - listen!", ur: "اے لوگو، ایک مثال بیان کی جا رہی ہے - سنو!" }, explanation: { en: "Attention demanded for crucial parable", ur: "اہم تمثیل کے لیے توجہ کا مطالبہ" }, verseRef: "22:73" },
        { term: "إِنَّ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ لَن يَخْلُقُوا ذُبَابًا", meaning: { en: "Those you invoke besides Allah cannot create a fly", ur: "جنہیں تم اللہ کے سوا پکارتے ہو وہ ایک مکھی بھی نہیں بنا سکتے" }, explanation: { en: "Idols cannot create smallest creature", ur: "بت چھوٹی سے چھوٹی مخلوق نہیں بنا سکتے" }, verseRef: "22:73" },
        { term: "وَلَوِ اجْتَمَعُوا لَهُ", meaning: { en: "Even if they gathered for it", ur: "چاہے وہ سب مل کر کوشش کریں" }, explanation: { en: "Combined effort still fails", ur: "اجتماعی کوشش بھی ناکام" }, verseRef: "22:73" },
        { term: "وَإِن يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَّا يَسْتَنقِذُوهُ مِنْهُ", meaning: { en: "If fly takes something, cannot retrieve it", ur: "اگر مکھی ان سے کچھ چھین لے تو وہ اسے واپس نہیں لے سکتے" }, explanation: { en: "Cannot even defend against a fly", ur: "مکھی سے بھی دفاع نہیں کر سکتے" }, verseRef: "22:73" },
        { term: "ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ", meaning: { en: "Weak are pursuer and pursued", ur: "مانگنے والا اور جس سے مانگا جا رہا ہے دونوں کمزور" }, explanation: { en: "Both worshipper and idol are helpless", ur: "عبادت کرنے والا اور بت دونوں بے بس" }, verseRef: "22:73" },
        { term: "مَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ", meaning: { en: "They did not estimate Allah's true worth", ur: "انہوں نے اللہ کی قدر جیسی قدر کرنی چاہیے نہیں کی" }, explanation: { en: "Failure to appreciate divine greatness", ur: "الٰہی عظمت کو سمجھنے میں ناکامی" }, verseRef: "22:74" }
      ]
    },

    divineMessengers: {
      name: "Divine Messengers and Angels",
      nameUr: "الٰہی رسول اور فرشتے",
      nameArabic: "الرسل والملائكة",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "اللَّهُ يَصْطَفِي مِنَ الْمَلَائِكَةِ رُسُلًا وَمِنَ النَّاسِ", meaning: { en: "Allah chooses messengers from angels and people", ur: "اللہ فرشتوں اور لوگوں میں سے رسول چنتا ہے" }, explanation: { en: "Selection of prophets - both angelic and human", ur: "انبیاء کا انتخاب - فرشتے اور انسان دونوں سے" }, verseRef: "22:75" },
        { term: "إِنَّ اللَّهَ سَمِيعٌ بَصِيرٌ", meaning: { en: "Allah is Hearing, Seeing", ur: "بے شک اللہ سننے والا دیکھنے والا ہے" }, explanation: { en: "Divine perception of all things", ur: "تمام چیزوں کا الٰہی ادراک" }, verseRef: "22:75" }
      ]
    },

    ummatulWasat: {
      name: "The Muslim Ummah",
      nameUr: "مسلم امت",
      nameArabic: "الأمة المسلمة",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "هُوَ اجْتَبَاكُمْ", meaning: { en: "He has chosen you", ur: "اس نے تمہیں چنا ہے" }, explanation: { en: "Divine selection of Muslim community", ur: "مسلم امت کا الٰہی انتخاب" }, verseRef: "22:78" },
        { term: "وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ", meaning: { en: "He placed no hardship in religion", ur: "اس نے دین میں تم پر کوئی تنگی نہیں رکھی" }, explanation: { en: "Islam made easy, not burdensome", ur: "اسلام آسان بنایا، بوجھل نہیں" }, verseRef: "22:78" },
        { term: "مِّلَّةَ أَبِيكُمْ إِبْرَاهِيمَ", meaning: { en: "Religion of your father Ibrahim", ur: "تمہارے باپ ابراہیم کی ملت" }, explanation: { en: "Continuity with Abrahamic tradition", ur: "ابراہیمی روایت کا تسلسل" }, verseRef: "22:78" },
        { term: "هُوَ سَمَّاكُمُ الْمُسْلِمِينَ مِن قَبْلُ", meaning: { en: "He named you Muslims before", ur: "اس نے پہلے سے تمہارا نام مسلمان رکھا" }, explanation: { en: "Muslim identity from Ibrahim's time", ur: "ابراہیم کے زمانے سے مسلمان کی شناخت" }, verseRef: "22:78" },
        { term: "وَفِي هَـٰذَا لِيَكُونَ الرَّسُولُ شَهِيدًا عَلَيْكُمْ", meaning: { en: "That Messenger be witness over you", ur: "تاکہ رسول تم پر گواہ ہو" }, explanation: { en: "Prophet testifies for the Ummah", ur: "نبی امت کے لیے گواہی دیتا ہے" }, verseRef: "22:78" },
        { term: "وَتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ", meaning: { en: "And you be witnesses over mankind", ur: "اور تم لوگوں پر گواہ ہو" }, explanation: { en: "Ummah's responsibility to witness to humanity", ur: "انسانیت پر گواہی دینے کی امت کی ذمہ داری" }, verseRef: "22:78" }
      ]
    },

    previousNationsPunishment: {
      name: "Punishment of Previous Nations",
      nameUr: "پچھلی قوموں کی سزا",
      nameArabic: "عذاب الأمم السابقة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَكَأَيِّن مِّن قَرْيَةٍ أَمْلَيْتُ لَهَا", meaning: { en: "How many cities I gave respite", ur: "کتنی بستیوں کو میں نے مہلت دی" }, explanation: { en: "Divine patience precedes punishment", ur: "عذاب سے پہلے الٰہی صبر" }, verseRef: "22:48" },
        { term: "وَهِيَ ظَالِمَةٌ ثُمَّ أَخَذْتُهَا", meaning: { en: "While unjust, then seized them", ur: "وہ ظالم تھیں پھر میں نے انہیں پکڑ لیا" }, explanation: { en: "Eventually justice is executed", ur: "بالآخر انصاف ہو کر رہتا ہے" }, verseRef: "22:48" },
        { term: "فَكَيْفَ كَانَ نَكِيرِ", meaning: { en: "How was My punishment", ur: "تو میرا عذاب کیسا تھا" }, explanation: { en: "Rhetorical: consider their fate", ur: "بیانیہ: ان کے انجام پر غور کرو" }, verseRef: "22:44" },
        { term: "فَأَهْلَكْنَاهُمْ", meaning: { en: "So We destroyed them", ur: "پھر ہم نے انہیں تباہ کر دیا" }, explanation: { en: "Divine destruction of oppressors", ur: "ظالموں کی الٰہی تباہی" }, verseRef: "22:48" },
        { term: "قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ", meaning: { en: "People of Nuh, Aad, Thamud", ur: "نوح، عاد اور ثمود کی قومیں" }, explanation: { en: "Examples of destroyed nations", ur: "تباہ شدہ قوموں کی مثالیں" }, verseRef: "22:42" },
        { term: "وَقَوْمِ إِبْرَاهِيمَ وَقَوْمِ لُوطٍ", meaning: { en: "People of Ibrahim and Lut", ur: "ابراہیم اور لوط کی قومیں" }, explanation: { en: "More destroyed communities", ur: "مزید تباہ شدہ معاشرے" }, verseRef: "22:43" },
        { term: "وَأَصْحَابِ مَدْيَنَ", meaning: { en: "Companions of Madyan", ur: "مدین والے" }, explanation: { en: "Shuayb's people destroyed", ur: "شعیب کی قوم تباہ ہوئی" }, verseRef: "22:44" }
      ]
    },

    shaitanDeception: {
      name: "Satan's Deception",
      nameUr: "شیطان کا دھوکا",
      nameArabic: "إضلال الشيطان",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَمَن يَتَّبِعْ خُطُوَاتِ الشَّيْطَانِ", meaning: { en: "Whoever follows Satan's footsteps", ur: "جو شیطان کے قدموں پر چلے" }, explanation: { en: "Gradual path to misguidance", ur: "گمراہی کی تدریجی راہ" }, verseRef: "22:52" },
        { term: "فَإِنَّهُ يَأْمُرُ بِالْفَحْشَاءِ وَالْمُنكَرِ", meaning: { en: "He commands immorality and wrong", ur: "وہ بے حیائی اور برائی کا حکم دیتا ہے" }, explanation: { en: "Satan's consistent agenda", ur: "شیطان کا مسلسل ایجنڈا" }, verseRef: "22:52" },
        { term: "إِذَا تَمَنَّىٰ أَلْقَى الشَّيْطَانُ فِي أُمْنِيَّتِهِ", meaning: { en: "When he recited, Satan cast into his recitation", ur: "جب اس نے تلاوت کی، شیطان نے اس کی تلاوت میں ڈالا" }, explanation: { en: "Satan attempts to corrupt revelation", ur: "شیطان وحی کو بگاڑنے کی کوشش" }, verseRef: "22:52" },
        { term: "فَيَنسَخُ اللَّهُ مَا يُلْقِي الشَّيْطَانُ", meaning: { en: "Allah abolishes what Satan casts", ur: "اللہ شیطان کی ڈالی ہوئی بات کو مٹا دیتا ہے" }, explanation: { en: "Divine protection of revelation", ur: "وحی کی الٰہی حفاظت" }, verseRef: "22:52" },
        { term: "ثُمَّ يُحْكِمُ اللَّهُ آيَاتِهِ", meaning: { en: "Then Allah perfects His verses", ur: "پھر اللہ اپنی آیات کو محکم کر دیتا ہے" }, explanation: { en: "Quran protected from corruption", ur: "قرآن بگاڑ سے محفوظ" }, verseRef: "22:52" }
      ]
    },

    finalGuidance: {
      name: "Final Guidance",
      nameUr: "آخری ہدایت",
      nameArabic: "الهداية الأخيرة",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا", meaning: { en: "O believers, bow and prostrate", ur: "اے ایمان والو، رکوع کرو اور سجدہ کرو" }, explanation: { en: "Call to physical worship", ur: "جسمانی عبادت کی دعوت" }, verseRef: "22:77" },
        { term: "وَاعْبُدُوا رَبَّكُمْ", meaning: { en: "And worship your Lord", ur: "اور اپنے رب کی عبادت کرو" }, explanation: { en: "Comprehensive devotion", ur: "جامع عبادت" }, verseRef: "22:77" },
        { term: "وَافْعَلُوا الْخَيْرَ", meaning: { en: "And do good", ur: "اور نیکی کرو" }, explanation: { en: "Righteous actions commanded", ur: "نیک اعمال کا حکم" }, verseRef: "22:77" },
        { term: "لَعَلَّكُمْ تُفْلِحُونَ", meaning: { en: "That you may succeed", ur: "تاکہ تم کامیاب ہو" }, explanation: { en: "Success through worship and good deeds", ur: "عبادت اور نیک اعمال سے کامیابی" }, verseRef: "22:77" },
        { term: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ", meaning: { en: "Strive in Allah's cause as due", ur: "اللہ کی راہ میں جہاد کرو جیسا اس کا حق ہے" }, explanation: { en: "True jihad - complete striving", ur: "حقیقی جہاد - مکمل جدوجہد" }, verseRef: "22:78" },
        { term: "فَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ", meaning: { en: "Establish prayer, give zakah", ur: "نماز قائم کرو اور زکوٰة دو" }, explanation: { en: "Twin pillars of practice", ur: "عمل کے جڑواں ستون" }, verseRef: "22:78" },
        { term: "وَاعْتَصِمُوا بِاللَّهِ هُوَ مَوْلَاكُمْ", meaning: { en: "Hold fast to Allah - He is your Protector", ur: "اللہ کو مضبوطی سے تھامو - وہ تمہارا مولا ہے" }, explanation: { en: "Divine protection through attachment", ur: "اللہ سے وابستگی کے ذریعے الٰہی تحفظ" }, verseRef: "22:78" },
        { term: "فَنِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ", meaning: { en: "Excellent Protector, excellent Helper", ur: "کیا ہی اچھا مولا اور کیا ہی اچھا مددگار" }, explanation: { en: "Perfect guardian and supporter", ur: "کامل محافظ اور مددگار" }, verseRef: "22:78" }
      ]
    }
  },

  relationships: [
    { from: "زلزلة الساعة", to: "يحيي الموتى", type: "consequence", description: { en: "Earthquake precedes resurrection", ur: "زلزلہ قیامت سے پہلے آتا ہے" } },
    { from: "خلقناكم من تراب", to: "إحياء الأرض", type: "analogy", description: { en: "Human creation mirrors earth revival", ur: "انسانی تخلیق زمین کی بحالی جیسی" } },
    { from: "يعبد الله على حرف", to: "خسر الدنيا والآخرة", type: "causation", description: { en: "Conditional faith leads to total loss", ur: "مشروط ایمان مکمل نقصان تک لے جاتا ہے" } },
    { from: "أذن للذين يقاتلون", to: "بأنهم ظلموا", type: "justification", description: { en: "Fighting permitted due to oppression", ur: "ظلم کی وجہ سے لڑائی کی اجازت" } },
    { from: "شعائر الله", to: "تقوى القلوب", type: "identity", description: { en: "Honoring symbols = heart's piety", ur: "شعائر کی تعظیم = دل کی تقویٰ" } },
    { from: "لن ينال الله لحومها", to: "التقوى منكم", type: "contrast", description: { en: "Physical sacrifice vs spiritual essence", ur: "جسمانی قربانی بمقابلہ روحانی جوہر" } },
    { from: "لن يخلقوا ذبابا", to: "ما قدروا الله حق قدره", type: "consequence", description: { en: "Idols' weakness proves misunderstanding of Allah", ur: "بتوں کی کمزوری اللہ کو نہ سمجھنے کا ثبوت" } },
    { from: "هو اجتباكم", to: "تكونوا شهداء على الناس", type: "purpose", description: { en: "Selection for witnessing to humanity", ur: "انسانیت پر گواہی کے لیے انتخاب" } },
    { from: "ملة إبراهيم", to: "سماكم المسلمين", type: "continuity", description: { en: "Muslim identity continues from Ibrahim", ur: "مسلمان کی شناخت ابراہیم سے جاری" } },
    { from: "أقيموا الصلاة", to: "واعتصموا بالله", type: "means", description: { en: "Prayer leads to holding fast to Allah", ur: "نماز اللہ کو مضبوطی سے تھامنے تک لے جاتی ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Day of Judgment Terror", verses: "22:1-2", description: { en: "Earthquake of the Hour - nursing mothers forget, all stagger", ur: "قیامت کا زلزلہ - مائیں بھول جائیں، سب لڑکھڑائیں" } },
      { stage: 2, theme: "Argumentative Doubter", verses: "22:3-10", description: { en: "Those who argue without knowledge vs clear truth", ur: "بغیر علم بحث کرنے والے بمقابلہ واضح سچائی" } },
      { stage: 3, theme: "Edge-Worshipper", verses: "22:11-14", description: { en: "Conditional faith - satisfied with good, apostates at trial", ur: "مشروط ایمان - بھلائی پر مطمئن، آزمائش پر مرتد" } },
      { stage: 4, theme: "Resurrection Proofs", verses: "22:5-7", description: { en: "Human creation stages and earth revival as evidence", ur: "انسانی تخلیق کے مراحل اور زمین کی بحالی بطور ثبوت" } },
      { stage: 5, theme: "True Religions", verses: "22:17", description: { en: "Believers, Jews, Sabians, Christians, Magians, Polytheists", ur: "مومن، یہود، صابئین، مسیحی، مجوسی، مشرکین" } },
      { stage: 6, theme: "Universal Submission", verses: "22:18", description: { en: "All creation prostrates to Allah", ur: "تمام مخلوق اللہ کو سجدہ کرتی ہے" } },
      { stage: 7, theme: "Two Groups", verses: "22:19-24", description: { en: "Believers vs disbelievers - Paradise vs boiling water", ur: "مومن بمقابلہ کافر - جنت بمقابلہ کھولتا پانی" } },
      { stage: 8, theme: "Sacred House", verses: "22:25-29", description: { en: "Ibrahim's Kaaba - purification, Hajj proclamation, rituals", ur: "ابراہیم کا کعبہ - تطہیر، حج کا اعلان، مناسک" } },
      { stage: 9, theme: "Sacred Symbols", verses: "22:30-37", description: { en: "Honor sha'a'ir, sacrifice reality - taqwa reaches Allah", ur: "شعائر کی تعظیم، قربانی کی حقیقت - تقویٰ اللہ تک پہنچتی ہے" } },
      { stage: 10, theme: "Divine Defense", verses: "22:38-41", description: { en: "Allah defends believers, permission to fight granted", ur: "اللہ مومنوں کا دفاع کرتا ہے، لڑائی کی اجازت" } },
      { stage: 11, theme: "Historical Warnings", verses: "22:42-48", description: { en: "Destroyed nations - Nuh, Aad, Thamud, Lut, Madyan", ur: "تباہ شدہ قومیں - نوح، عاد، ثمود، لوط، مدین" } },
      { stage: 12, theme: "Satan's Interference", verses: "22:52-57", description: { en: "Satan casts doubts but Allah perfects His verses", ur: "شیطان شکوک ڈالتا ہے لیکن اللہ آیات محکم کرتا ہے" } },
      { stage: 13, theme: "Divine Power", verses: "22:61-66", description: { en: "Night/day, creation, provision - all controlled by Allah", ur: "رات/دن، تخلیق، رزق - سب اللہ کے قابو میں" } },
      { stage: 14, theme: "Fly Parable", verses: "22:73-76", description: { en: "Idols cannot create fly or retrieve from it - ultimate weakness", ur: "بت مکھی نہ بنا سکیں نہ اس سے چھین سکیں - انتہائی کمزوری" } },
      { stage: 15, theme: "Final Commands", verses: "22:77-78", description: { en: "Bow, prostrate, worship, do good, strive, hold to Allah", ur: "رکوع، سجدہ، عبادت، نیکی، جہاد، اللہ کو تھامو" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Prepare for the Hour", how: "Visualize Day of Judgment's terror to strengthen taqwa", verse: "22:1-2" },
      { principle: "Avoid edge-worship", how: "Test your faith - do you worship only when things go well?", verse: "22:11" },
      { principle: "See resurrection in nature", how: "Watch barren earth revive with rain - same power resurrects you", verse: "22:5-6" },
      { principle: "Honor sacred symbols", how: "Respect all signs of Allah - rituals, places, times", verse: "22:32" },
      { principle: "Understand sacrifice", how: "Your taqwa reaches Allah, not the meat - intention over action", verse: "22:37" },
      { principle: "Protect all worship", how: "Defend freedom of worship - monasteries, churches, synagogues, mosques", verse: "22:40" },
      { principle: "Witness to humanity", how: "You are chosen to be examples - live accordingly", verse: "22:78" },
      { principle: "Hold fast to Allah", how: "He is your Mawla (protector) and Nasir (helper) - rely on Him", verse: "22:78" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Fly Parable - Ultimate Proof of Tawhid", ur: "مکھی کی تمثیل - توحید کا حتمی ثبوت" },
    insight: { en: "Verse 22:73 delivers one of the Quran's most devastating arguments against polytheism: 'Those you invoke besides Allah cannot create a fly, even if they gathered for it. And if the fly snatched something from them, they could not recover it.' This is profound: (1) The fly is among the smallest, most insignificant creatures - yet false gods cannot create even this. (2) Worse, they cannot even DEFEND against a fly! If a fly takes something, they're helpless. (3) The worshipper (seeker) and the idol (sought) are both 'weak' - both helpless before a fly. The rhetorical genius: Allah doesn't compare idols to Himself (unfair comparison) but to a FLY - and they lose. This demolishes idol-worship through simple logic anyone can understand. The next verse (22:74) concludes: 'They did not estimate Allah with His true estimation' - those who worship idols have no concept of true divine power.", ur: "آیت 22:73 شرک کے خلاف قرآن کی سب سے زبردست دلیل پیش کرتی ہے: 'جنہیں تم اللہ کے سوا پکارتے ہو وہ ایک مکھی نہیں بنا سکتے چاہے سب جمع ہو جائیں۔ اور اگر مکھی ان سے کچھ چھین لے تو واپس نہیں لے سکتے۔' یہ بہت گہری بات ہے: (1) مکھی سب سے چھوٹی، معمولی مخلوق ہے - پھر بھی جھوٹے معبود اتنی بھی نہیں بنا سکتے۔ (2) اس سے بدتر، وہ مکھی سے دفاع بھی نہیں کر سکتے! (3) عبادت کرنے والا اور بت دونوں 'کمزور' ہیں - مکھی کے سامنے بے بس۔ بیانی کمال: اللہ بتوں کا اپنے آپ سے موازنہ نہیں کرتا (غیر منصفانہ موازنہ) بلکہ مکھی سے - اور وہ ہار جاتے ہیں۔ یہ سادہ منطق سے بت پرستی کی عمارت گرا دیتی ہے جو ہر کوئی سمجھ سکتا ہے۔ اگلی آیت (22:74) نتیجہ نکالتی ہے: 'انہوں نے اللہ کی قدر جیسی کرنی چاہیے نہیں کی' - بت پرست الٰہی طاقت کا تصور ہی نہیں رکھتے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "زَلْزَلَة reduplication", example: { en: "زَلْزَلَة الساعة", ur: "قیامت کا زلزلہ" }, effect: "Sound mimics shaking - phonetic imagery" },
      { feature: "Conditional structure", example: { en: "إِنْ أَصَابَهُ خَيْرٌ... وَإِنْ أَصَابَتْهُ فِتْنَةٌ", ur: "اگر بھلائی ملے... اور اگر آزمائش آئے" }, effect: "Exposes fragile, conditional faith" },
      { feature: "Rhetorical question", example: { en: "أَلَمْ تَرَ", ur: "کیا تم نے نہیں دیکھا" }, effect: "Invites reflection on obvious truth" },
      { feature: "ضَعُفَ symmetry", example: { en: "ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ", ur: "مانگنے والا اور جس سے مانگا جائے دونوں کمزور" }, effect: "Both worshipper and idol equally helpless" },
      { feature: "Double superlative", example: { en: "نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ", ur: "کیا اچھا مولا اور کیا اچھا مددگار" }, effect: "Allah praised as excellent protector AND helper" }
    ]
  },

  historicalContext: {
    notes: [
      { topic: "First permission to fight", verse: "22:39", note: { en: "This is widely considered the first verse permitting armed self-defense for Muslims who were persecuted in Makkah", ur: "یہ بڑے پیمانے پر مکہ میں ستائے گئے مسلمانوں کو مسلح دفاع کی اجازت دینے والی پہلی آیت مانی جاتی ہے" } },
      { topic: "Mixed revelation", verse: "22:52", note: { en: "Some scholars consider Al-Hajj to contain both Makki and Madani verses, making it unique", ur: "بعض علماء سورہ الحج کو مکی اور مدنی دونوں آیات پر مشتمل مانتے ہیں جو اسے منفرد بناتا ہے" } },
      { topic: "Protection of worship", verse: "22:40", note: { en: "This verse establishes that fighting is permitted to protect ALL places of worship - not just Islamic ones", ur: "یہ آیت ثابت کرتی ہے کہ لڑائی صرف اسلامی نہیں بلکہ تمام عبادت گاہوں کی حفاظت کے لیے جائز ہے" } },
      { topic: "Ibrahim's call", verse: "22:27", note: { en: "The call to Hajj made by Ibrahim continues to be answered by millions annually", ur: "ابراہیم کی حج کی پکار کا جواب ہر سال لاکھوں لوگ دیتے ہیں" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "22:5", topic: "Embryonic development", note: "Stages mentioned (nutfah, 'alaqah, mudghah) align with modern embryology" },
      { verse: "22:73", topic: "Fly biology", note: "A fly's ability to dissolve and absorb food externally is referenced - once taken, cannot be retrieved" }
    ]
  }
};

export default ONTOLOGY;
