/**
 * Surah Az-Zumar (39) - Ontology of Quranic Concepts
 * The Groups (The Throngs) - 75 Ayahs, Makkan
 * Theme: Sincerity in worship, the two groups (believers vs disbelievers),
 * intercession denied for polytheists, Allah's boundless mercy (39:53)
 */

export const ONTOLOGY = {
  surahId: 39,
  surahName: "Az-Zumar",
  surahNameArabic: "الزمر",
  meaning: { en: "The Groups / The Throngs", ur: "گروہ / جماعتیں" },
  revelationType: "Makki",
  totalAyahs: 75,

  categories: {
    sincerityInWorship: {
      name: "Sincerity in Worship (Ikhlas)",
      nameArabic: "الإخلاص في العبادة",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "فَاعْبُدِ اللَّهَ مُخْلِصًا لَّهُ الدِّينَ", meaning: { en: "So worship Allah, sincere to Him in religion", ur: "پس اللہ کی عبادت کرو، دین کو اس کے لیے خالص کرتے ہوئے" }, explanation: { en: "Core command - worship must be purely for Allah", ur: "بنیادی حکم - عبادت صرف اللہ کے لیے خالص ہونی چاہیے" }, verseRef: "39:2" },
        { term: "أَلَا لِلَّهِ الدِّينُ الْخَالِصُ", meaning: { en: "Unquestionably, for Allah is the pure religion", ur: "سن لو! خالص دین صرف اللہ کے لیے ہے" }, explanation: { en: "Sincere worship belongs exclusively to Allah", ur: "خالص عبادت صرف اللہ کا حق ہے" }, verseRef: "39:3" },
        { term: "قُلِ اللَّهَ أَعْبُدُ مُخْلِصًا لَّهُ دِينِي", meaning: { en: "Say: Allah I worship, sincere to Him in my religion", ur: "کہو: میں اللہ کی عبادت کرتا ہوں، اپنا دین اس کے لیے خالص کرتے ہوئے" }, explanation: { en: "Prophet's declaration of pure monotheism", ur: "نبی ﷺ کا خالص توحید کا اعلان" }, verseRef: "39:14" },
        { term: "قُلْ إِنِّي أُمِرْتُ أَنْ أَعْبُدَ اللَّهَ مُخْلِصًا لَّهُ الدِّينَ", meaning: { en: "Say: I am commanded to worship Allah with sincere devotion", ur: "کہو: مجھے حکم دیا گیا ہے کہ اللہ کی عبادت کروں دین کو اس کے لیے خالص کرتے ہوئے" }, explanation: { en: "Divine command establishes ikhlas", ur: "الٰہی حکم اخلاص کو قائم کرتا ہے" }, verseRef: "39:11" },
        { term: "وَأُمِرْتُ لِأَنْ أَكُونَ أَوَّلَ الْمُسْلِمِينَ", meaning: { en: "And I am commanded to be the first of Muslims", ur: "اور مجھے حکم دیا گیا کہ سب سے پہلے اسلام قبول کرنے والا بنوں" }, explanation: { en: "Prophet leads by example in submission", ur: "نبی ﷺ اطاعت میں نمونہ بن کر رہنمائی کرتے ہیں" }, verseRef: "39:12" },
        { term: "فَادْعُوهُ مُخْلِصِينَ لَهُ الدِّينَ", meaning: { en: "So call upon Him, sincere to Him in religion", ur: "پس اسے پکارو، دین کو اس کے لیے خالص کرتے ہوئے" }, explanation: { en: "Supplication must also be sincere", ur: "دعا بھی خالص ہونی چاہیے" }, verseRef: "39:14" }
      ]
    },

    falsehoodOfPolytheism: {
      name: "Refutation of Polytheism",
      nameArabic: "بطلان الشرك",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ", meaning: { en: "Those who take protectors besides Him", ur: "جنہوں نے اس کے سوا دوسرے سرپرست بنا لیے" }, explanation: { en: "Description of polytheists", ur: "مشرکین کی تعریف" }, verseRef: "39:3" },
        { term: "مَا نَعْبُدُهُمْ إِلَّا لِيُقَرِّبُونَا إِلَى اللَّهِ زُلْفَىٰ", meaning: { en: "We only worship them to bring us nearer to Allah", ur: "ہم ان کی عبادت صرف اس لیے کرتے ہیں کہ وہ ہمیں اللہ کے قریب کر دیں" }, explanation: { en: "False justification of idol worship", ur: "بت پرستی کا جھوٹا جواز" }, verseRef: "39:3" },
        { term: "إِنَّ اللَّهَ يَحْكُمُ بَيْنَهُمْ فِي مَا هُمْ فِيهِ يَخْتَلِفُونَ", meaning: { en: "Allah will judge between them in what they differ", ur: "اللہ ان کے درمیان ان کے اختلافات کا فیصلہ کرے گا" }, explanation: { en: "Final judgment on theological disputes", ur: "عقائدی اختلافات پر حتمی فیصلہ" }, verseRef: "39:3" },
        { term: "إِنَّ اللَّهَ لَا يَهْدِي مَنْ هُوَ كَاذِبٌ كَفَّارٌ", meaning: { en: "Allah does not guide one who is a liar and disbeliever", ur: "اللہ اسے ہدایت نہیں دیتا جو جھوٹا اور بڑا ناشکرا ہو" }, explanation: { en: "Guidance withdrawn from persistent liars", ur: "مسلسل جھوٹ بولنے والوں سے ہدایت چھین لی جاتی ہے" }, verseRef: "39:3" },
        { term: "لَّوْ أَرَادَ اللَّهُ أَن يَتَّخِذَ وَلَدًا", meaning: { en: "If Allah had intended to take a son", ur: "اگر اللہ اولاد رکھنا چاہتا" }, explanation: { en: "Refutation of those claiming Allah has offspring", ur: "ان لوگوں کی تردید جو اللہ کی اولاد ہونے کا دعویٰ کرتے ہیں" }, verseRef: "39:4" },
        { term: "لَّاصْطَفَىٰ مِمَّا يَخْلُقُ مَا يَشَاءُ", meaning: { en: "He would have chosen from what He creates", ur: "تو اپنی مخلوقات میں سے جسے چاہتا چن لیتا" }, explanation: { en: "Allah is transcendent above need for children", ur: "اللہ اولاد کی ضرورت سے بالاتر ہے" }, verseRef: "39:4" },
        { term: "سُبْحَانَهُ هُوَ اللَّهُ الْوَاحِدُ الْقَهَّارُ", meaning: { en: "Exalted is He; He is Allah, the One, the Prevailing", ur: "وہ پاک ہے، وہ اللہ ہے، یکتا، سب پر غالب" }, explanation: { en: "Allah's absolute oneness", ur: "اللہ کی مطلق وحدانیت" }, verseRef: "39:4" }
      ]
    },

    intercessionDenied: {
      name: "Intercession Denied for Polytheists",
      nameArabic: "رد الشفاعة للمشركين",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "أَمِ اتَّخَذُوا مِن دُونِ اللَّهِ شُفَعَاءَ", meaning: { en: "Or have they taken intercessors besides Allah?", ur: "کیا انہوں نے اللہ کے سوا سفارشی بنا لیے ہیں؟" }, explanation: { en: "Challenge to idol worship as intercession", ur: "بتوں کو سفارشی ماننے پر چیلنج" }, verseRef: "39:43" },
        { term: "أَوَلَوْ كَانُوا لَا يَمْلِكُونَ شَيْئًا وَلَا يَعْقِلُونَ", meaning: { en: "Even though they possess nothing nor do they reason?", ur: "اگرچہ وہ کسی چیز کے مالک نہیں اور نہ عقل رکھتے ہیں؟" }, explanation: { en: "Idols are powerless and senseless", ur: "بت بے اختیار اور بے شعور ہیں" }, verseRef: "39:43" },
        { term: "قُل لِّلَّهِ الشَّفَاعَةُ جَمِيعًا", meaning: { en: "Say: To Allah belongs intercession entirely", ur: "کہو: سفارش تمام تر اللہ کے اختیار میں ہے" }, explanation: { en: "All intercession is Allah's prerogative", ur: "تمام سفارش اللہ کا اختیار ہے" }, verseRef: "39:44" },
        { term: "لَّهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To Him belongs dominion of heavens and earth", ur: "آسمانوں اور زمین کی بادشاہی اسی کی ہے" }, explanation: { en: "Allah alone controls all realms", ur: "صرف اللہ تمام عالموں پر حکمران ہے" }, verseRef: "39:44" },
        { term: "وَإِذَا ذُكِرَ اللَّهُ وَحْدَهُ اشْمَأَزَّتْ قُلُوبُ الَّذِينَ لَا يُؤْمِنُونَ", meaning: { en: "When Allah alone is mentioned, hearts of disbelievers shrink with aversion", ur: "جب اکیلے اللہ کا ذکر ہوتا ہے تو کافروں کے دل تنگ ہو جاتے ہیں" }, explanation: { en: "Polytheists reject pure monotheism", ur: "مشرکین خالص توحید کو مسترد کرتے ہیں" }, verseRef: "39:45" },
        { term: "وَإِذَا ذُكِرَ الَّذِينَ مِن دُونِهِ إِذَا هُمْ يَسْتَبْشِرُونَ", meaning: { en: "But when those besides Him are mentioned, they rejoice", ur: "لیکن جب اللہ کے سوا دوسروں کا ذکر ہوتا ہے تو وہ خوش ہو جاتے ہیں" }, explanation: { en: "They prefer their false gods", ur: "وہ اپنے جھوٹے معبودوں کو ترجیح دیتے ہیں" }, verseRef: "39:45" }
      ]
    },

    divineMercy: {
      name: "Allah's Boundless Mercy",
      nameArabic: "سعة رحمة الله",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ", meaning: { en: "Say: O My servants who have transgressed against themselves", ur: "کہو: اے میرے بندو جنہوں نے اپنی جانوں پر زیادتی کی" }, explanation: { en: "Addressing sinners with compassion", ur: "گنہگاروں کو شفقت سے مخاطب کرنا" }, verseRef: "39:53" },
        { term: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ", meaning: { en: "Do not despair of the mercy of Allah", ur: "اللہ کی رحمت سے مایوس نہ ہو" }, explanation: { en: "Prohibition of losing hope in Allah", ur: "اللہ سے ناامیدی کی ممانعت" }, verseRef: "39:53" },
        { term: "إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", meaning: { en: "Indeed, Allah forgives all sins", ur: "بے شک اللہ تمام گناہ معاف فرما دیتا ہے" }, explanation: { en: "No sin is too great for Allah's forgiveness", ur: "اللہ کی مغفرت کے لیے کوئی گناہ بہت بڑا نہیں" }, verseRef: "39:53" },
        { term: "إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ", meaning: { en: "Indeed, He is the Forgiving, the Merciful", ur: "بے شک وہی بخشنے والا، رحم کرنے والا ہے" }, explanation: { en: "Divine names affirming mercy", ur: "رحمت کی تصدیق کرنے والے اللہ کے اسماء" }, verseRef: "39:53" },
        { term: "وَأَنِيبُوا إِلَىٰ رَبِّكُمْ وَأَسْلِمُوا لَهُ", meaning: { en: "And return to your Lord and submit to Him", ur: "اور اپنے رب کی طرف لوٹ آؤ اور اس کے فرمانبردار ہو جاؤ" }, explanation: { en: "Path to receiving mercy - repentance and submission", ur: "رحمت پانے کا راستہ - توبہ اور اطاعت" }, verseRef: "39:54" },
        { term: "مِن قَبْلِ أَن يَأْتِيَكُمُ الْعَذَابُ ثُمَّ لَا تُنصَرُونَ", meaning: { en: "Before punishment comes and you will not be helped", ur: "اس سے پہلے کہ عذاب آ جائے پھر تمہاری مدد نہ کی جائے" }, explanation: { en: "Urgency of repentance", ur: "توبہ کی فوری ضرورت" }, verseRef: "39:54" },
        { term: "وَاتَّبِعُوا أَحْسَنَ مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ", meaning: { en: "Follow the best of what is revealed to you from your Lord", ur: "اپنے رب کی طرف سے نازل کردہ بہترین باتوں کی پیروی کرو" }, explanation: { en: "Guidance to salvation", ur: "نجات کی طرف رہنمائی" }, verseRef: "39:55" }
      ]
    },

    cosmicSigns: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ", meaning: { en: "He created the heavens and earth in truth", ur: "اس نے آسمانوں اور زمین کو حق کے ساتھ پیدا کیا" }, explanation: { en: "Purposeful creation", ur: "مقصدی تخلیق" }, verseRef: "39:5" },
        { term: "يُكَوِّرُ اللَّيْلَ عَلَى النَّهَارِ وَيُكَوِّرُ النَّهَارَ عَلَى اللَّيْلِ", meaning: { en: "He wraps the night over the day and wraps the day over the night", ur: "وہ رات کو دن پر لپیٹتا ہے اور دن کو رات پر لپیٹتا ہے" }, explanation: { en: "Alternation of day and night - spherical motion", ur: "دن اور رات کی تبدیلی - کروی حرکت" }, verseRef: "39:5" },
        { term: "وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ", meaning: { en: "And He subjected the sun and moon", ur: "اور اس نے سورج اور چاند کو مسخر کر دیا" }, explanation: { en: "Celestial bodies under divine control", ur: "آسمانی اجسام الٰہی کنٹرول میں ہیں" }, verseRef: "39:5" },
        { term: "كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى", meaning: { en: "Each running for a specified term", ur: "ہر ایک مقررہ وقت تک چل رہا ہے" }, explanation: { en: "Precise cosmic order", ur: "درست کائناتی نظام" }, verseRef: "39:5" },
        { term: "أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: { en: "Sent down from the sky water", ur: "آسمان سے پانی اتارا" }, explanation: { en: "Rain as divine provision", ur: "بارش بطور الٰہی رزق" }, verseRef: "39:21" },
        { term: "فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ", meaning: { en: "And made it flow as springs in the earth", ur: "پھر اسے زمین میں چشموں کی صورت جاری کیا" }, explanation: { en: "Water cycle described", ur: "پانی کے چکر کی وضاحت" }, verseRef: "39:21" },
        { term: "ثُمَّ يُخْرِجُ بِهِ زَرْعًا مُّخْتَلِفًا أَلْوَانُهُ", meaning: { en: "Then produces crops of varying colors", ur: "پھر اس سے مختلف رنگوں کی فصلیں نکالتا ہے" }, explanation: { en: "Diversity in vegetation", ur: "پودوں میں تنوع" }, verseRef: "39:21" },
        { term: "ثُمَّ يَهِيجُ فَتَرَاهُ مُصْفَرًّا", meaning: { en: "Then it withers and you see it turn yellow", ur: "پھر وہ خشک ہوتی ہے اور تم اسے زرد ہوتے دیکھتے ہو" }, explanation: { en: "Life cycle of plants", ur: "پودوں کی زندگی کا چکر" }, verseRef: "39:21" }
      ]
    },

    humanCreation: {
      name: "Human Creation and Nature",
      nameArabic: "خلق الإنسان وطبيعته",
      color: "#06B6D4",
      icon: "Users",
      concepts: [
        { term: "خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ", meaning: { en: "He created you from a single soul", ur: "اس نے تمہیں ایک جان سے پیدا کیا" }, explanation: { en: "Unity of human origin - Adam", ur: "انسانی اصل کی وحدت - آدم علیہ السلام" }, verseRef: "39:6" },
        { term: "ثُمَّ جَعَلَ مِنْهَا زَوْجَهَا", meaning: { en: "Then made from it its mate", ur: "پھر اس سے اس کا جوڑا بنایا" }, explanation: { en: "Creation of Hawwa (Eve)", ur: "حوا علیہا السلام کی تخلیق" }, verseRef: "39:6" },
        { term: "وَأَنزَلَ لَكُم مِّنَ الْأَنْعَامِ ثَمَانِيَةَ أَزْوَاجٍ", meaning: { en: "And sent down for you eight pairs of livestock", ur: "اور تمہارے لیے مویشیوں کے آٹھ جوڑے بنائے" }, explanation: { en: "Provision of animals", ur: "جانوروں کی فراہمی" }, verseRef: "39:6" },
        { term: "يَخْلُقُكُمْ فِي بُطُونِ أُمَّهَاتِكُمْ", meaning: { en: "He creates you in the wombs of your mothers", ur: "وہ تمہیں تمہاری ماؤں کے پیٹ میں بناتا ہے" }, explanation: { en: "Human development in utero", ur: "رحم مادر میں انسانی نشوونما" }, verseRef: "39:6" },
        { term: "خَلْقًا مِّن بَعْدِ خَلْقٍ", meaning: { en: "Creation after creation", ur: "ایک تخلیق کے بعد دوسری تخلیق" }, explanation: { en: "Stages of fetal development", ur: "جنین کی نشوونما کے مراحل" }, verseRef: "39:6" },
        { term: "فِي ظُلُمَاتٍ ثَلَاثٍ", meaning: { en: "In three darknesses", ur: "تین تاریکیوں میں" }, explanation: { en: "Womb layers - possibly membrane, uterine wall, abdomen", ur: "رحم کی تہیں - ممکنہ طور پر جھلی، رحم کی دیوار، پیٹ" }, verseRef: "39:6" },
        { term: "وَإِذَا مَسَّ الْإِنسَانَ ضُرٌّ دَعَا رَبَّهُ مُنِيبًا إِلَيْهِ", meaning: { en: "When hardship touches man, he calls his Lord, turning to Him", ur: "جب انسان کو تکلیف پہنچتی ہے تو وہ اپنے رب کو پکارتا ہے اس کی طرف رجوع کرتے ہوئے" }, explanation: { en: "Human nature - turning to Allah in difficulty", ur: "انسانی فطرت - مشکل میں اللہ کی طرف رجوع" }, verseRef: "39:8" },
        { term: "ثُمَّ إِذَا خَوَّلَهُ نِعْمَةً مِّنْهُ نَسِيَ مَا كَانَ يَدْعُو إِلَيْهِ", meaning: { en: "Then when He grants him a favor, he forgets what he called for", ur: "پھر جب اللہ اسے اپنی نعمت عطا کرتا ہے تو وہ بھول جاتا ہے کہ کس کے لیے دعا کرتا تھا" }, explanation: { en: "Ingratitude when comfort returns", ur: "آرام واپس آنے پر ناشکری" }, verseRef: "39:8" }
      ]
    },

    quranDescription: {
      name: "Description of the Quran",
      nameArabic: "وصف القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْحَكِيمِ", meaning: { en: "Revelation of the Book from Allah, the Mighty, the Wise", ur: "اس کتاب کا نازل ہونا اللہ غالب، حکمت والے کی طرف سے ہے" }, explanation: { en: "Divine source of the Quran", ur: "قرآن کا الٰہی ماخذ" }, verseRef: "39:1" },
        { term: "اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ", meaning: { en: "Allah has sent down the best statement", ur: "اللہ نے بہترین کلام نازل کیا ہے" }, explanation: { en: "Quran is the finest speech", ur: "قرآن سب سے عمدہ کلام ہے" }, verseRef: "39:23" },
        { term: "كِتَابًا مُّتَشَابِهًا مَّثَانِيَ", meaning: { en: "A consistent Book, repeating", ur: "ایک ہم آہنگ کتاب، بار بار دہرائی جانے والی" }, explanation: { en: "Internal consistency and reinforcement", ur: "اندرونی ہم آہنگی اور تقویت" }, verseRef: "39:23" },
        { term: "تَقْشَعِرُّ مِنْهُ جُلُودُ الَّذِينَ يَخْشَوْنَ رَبَّهُمْ", meaning: { en: "The skins of those who fear their Lord shiver from it", ur: "اس سے ان لوگوں کے رونگٹے کھڑے ہو جاتے ہیں جو اپنے رب سے ڈرتے ہیں" }, explanation: { en: "Physical response to Quran's power", ur: "قرآن کی طاقت پر جسمانی ردعمل" }, verseRef: "39:23" },
        { term: "ثُمَّ تَلِينُ جُلُودُهُمْ وَقُلُوبُهُمْ إِلَىٰ ذِكْرِ اللَّهِ", meaning: { en: "Then their skins and hearts soften to remembrance of Allah", ur: "پھر ان کے جسم اور دل اللہ کی یاد سے نرم ہو جاتے ہیں" }, explanation: { en: "Quran softens hearts after initial awe", ur: "قرآن ابتدائی خوف کے بعد دلوں کو نرم کر دیتا ہے" }, verseRef: "39:23" },
        { term: "ذَٰلِكَ هُدَى اللَّهِ يَهْدِي بِهِ مَن يَشَاءُ", meaning: { en: "That is Allah's guidance, He guides whom He wills", ur: "یہ اللہ کی ہدایت ہے، وہ جسے چاہے ہدایت دیتا ہے" }, explanation: { en: "Guidance through the Quran", ur: "قرآن کے ذریعے ہدایت" }, verseRef: "39:23" },
        { term: "وَلَقَدْ ضَرَبْنَا لِلنَّاسِ فِي هَٰذَا الْقُرْآنِ مِن كُلِّ مَثَلٍ", meaning: { en: "We have presented for people in this Quran every example", ur: "ہم نے اس قرآن میں لوگوں کے لیے ہر قسم کی مثال بیان کی ہے" }, explanation: { en: "Comprehensive guidance through parables", ur: "تمثیلات کے ذریعے جامع رہنمائی" }, verseRef: "39:27" },
        { term: "قُرْآنًا عَرَبِيًّا غَيْرَ ذِي عِوَجٍ", meaning: { en: "An Arabic Quran without any crookedness", ur: "عربی قرآن" }, explanation: { en: "Clear, straight, and Arabic", ur: "واضح، سیدھا اور عربی" }, verseRef: "39:28" }
      ]
    },

    twoGroups: {
      name: "The Two Groups (Zumar)",
      nameArabic: "الزمران",
      color: "#EF4444",
      icon: "Users",
      concepts: [
        { term: "وَسِيقَ الَّذِينَ كَفَرُوا إِلَىٰ جَهَنَّمَ زُمَرًا", meaning: { en: "Those who disbelieved will be driven to Hell in groups", ur: "کافروں کو جہنم کی طرف گروہ در گروہ ہانکا جائے گا" }, explanation: { en: "Disbelievers gathered in throngs to Hell", ur: "کافروں کو جماعتوں میں جہنم کی طرف لے جایا جائے گا" }, verseRef: "39:71" },
        { term: "حَتَّىٰ إِذَا جَاءُوهَا فُتِحَتْ أَبْوَابُهَا", meaning: { en: "Until when they reach it, its gates are opened", ur: "یہاں تک کہ جب وہ وہاں پہنچیں گے تو اس کے دروازے کھولے جائیں گے" }, explanation: { en: "Gates of Hell opened for them", ur: "ان کے لیے جہنم کے دروازے کھولے جائیں گے" }, verseRef: "39:71" },
        { term: "أَلَمْ يَأْتِكُمْ رُسُلٌ مِّنكُمْ", meaning: { en: "Did there not come to you messengers from among you?", ur: "کیا تمہارے پاس تمہارے اندر سے رسول نہیں آئے تھے؟" }, explanation: { en: "Rhetorical question - no excuse", ur: "سوالیہ انداز - کوئی عذر نہیں" }, verseRef: "39:71" },
        { term: "بَلَىٰ وَلَٰكِنْ حَقَّتْ كَلِمَةُ الْعَذَابِ عَلَى الْكَافِرِينَ", meaning: { en: "Yes, but the word of punishment was justified upon disbelievers", ur: "ہاں، لیکن عذاب کا فیصلہ کافروں پر ثابت ہو چکا ہے" }, explanation: { en: "Their confession comes too late", ur: "ان کا اعتراف بہت دیر سے آیا" }, verseRef: "39:71" },
        { term: "وَسِيقَ الَّذِينَ اتَّقَوْا رَبَّهُمْ إِلَى الْجَنَّةِ زُمَرًا", meaning: { en: "Those who feared their Lord will be led to Paradise in groups", ur: "جو لوگ اپنے رب سے ڈرتے تھے وہ گروہ در گروہ جنت کی طرف لے جائے جائیں گے" }, explanation: { en: "Believers gathered in throngs to Paradise", ur: "مومنین کو جماعتوں میں جنت کی طرف لے جایا جائے گا" }, verseRef: "39:73" },
        { term: "حَتَّىٰ إِذَا جَاءُوهَا وَفُتِحَتْ أَبْوَابُهَا", meaning: { en: "Until when they reach it and its gates have been opened", ur: "یہاں تک کہ جب وہ وہاں پہنچیں گے اور اس کے دروازے پہلے سے کھلے ہوں گے" }, explanation: { en: "Gates already opened in welcome - note the difference", ur: "دروازے خوش آمدید میں پہلے سے کھلے ہوں گے - فرق نوٹ کریں" }, verseRef: "39:73" },
        { term: "سَلَامٌ عَلَيْكُمْ طِبْتُمْ فَادْخُلُوهَا خَالِدِينَ", meaning: { en: "Peace be upon you; you have become pure, so enter it eternally", ur: "تم پر سلامتی ہو، تم پاکیزہ ہو گئے، پس اس میں ہمیشہ کے لیے داخل ہو جاؤ" }, explanation: { en: "Angelic welcome to Paradise", ur: "فرشتوں کی جنت میں خوش آمدید" }, verseRef: "39:73" }
      ]
    },

    judgmentDayScenes: {
      name: "Judgment Day Scenes",
      nameArabic: "مشاهد يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "وَنُفِخَ فِي الصُّورِ فَصَعِقَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ", meaning: { en: "The Trumpet will be blown and all in heavens and earth will fall dead", ur: "صور پھونکا جائے گا تو آسمانوں اور زمین میں سب بے ہوش ہو جائیں گے" }, explanation: { en: "First trumpet - universal death", ur: "پہلا صور - عالمگیر موت" }, verseRef: "39:68" },
        { term: "ثُمَّ نُفِخَ فِيهِ أُخْرَىٰ فَإِذَا هُمْ قِيَامٌ يَنظُرُونَ", meaning: { en: "Then it will be blown again and they will be standing, looking", ur: "پھر دوبارہ پھونکا جائے گا تو وہ کھڑے ہوں گے، دیکھ رہے ہوں گے" }, explanation: { en: "Second trumpet - resurrection", ur: "دوسرا صور - قیامت" }, verseRef: "39:68" },
        { term: "وَأَشْرَقَتِ الْأَرْضُ بِنُورِ رَبِّهَا", meaning: { en: "And the earth will shine with the light of its Lord", ur: "اور زمین اپنے رب کے نور سے چمک اٹھے گی" }, explanation: { en: "Divine light illuminates Judgment", ur: "الٰہی نور فیصلے کو روشن کرے گا" }, verseRef: "39:69" },
        { term: "وَوُضِعَ الْكِتَابُ", meaning: { en: "And the record will be placed", ur: "اور اعمال نامے رکھ دیے جائیں گے" }, explanation: { en: "Books of deeds opened", ur: "اعمال کی کتابیں کھولی جائیں گی" }, verseRef: "39:69" },
        { term: "وَجِيءَ بِالنَّبِيِّينَ وَالشُّهَدَاءِ", meaning: { en: "And the prophets and witnesses brought", ur: "اور نبیوں اور گواہوں کو لایا جائے گا" }, explanation: { en: "Prophets testify on that Day", ur: "انبیاء اس دن گواہی دیں گے" }, verseRef: "39:69" },
        { term: "وَقُضِيَ بَيْنَهُم بِالْحَقِّ", meaning: { en: "And it will be judged between them in truth", ur: "اور ان کے درمیان حق کے ساتھ فیصلہ کیا جائے گا" }, explanation: { en: "Perfect justice administered", ur: "کامل عدل قائم کیا جائے گا" }, verseRef: "39:69" },
        { term: "وَهُمْ لَا يُظْلَمُونَ", meaning: { en: "And they will not be wronged", ur: "اور ان پر ظلم نہیں کیا جائے گا" }, explanation: { en: "No injustice on Judgment Day", ur: "قیامت کے دن کوئی ناانصافی نہیں ہوگی" }, verseRef: "39:69" },
        { term: "وَوُفِّيَتْ كُلُّ نَفْسٍ مَّا عَمِلَتْ", meaning: { en: "Every soul will be fully compensated for what it did", ur: "ہر جان کو اس کے اعمال کا پورا پورا بدلہ دیا جائے گا" }, explanation: { en: "Perfect recompense", ur: "کامل بدلہ" }, verseRef: "39:70" }
      ]
    },

    sleepAndDeath: {
      name: "Sleep as Death's Brother",
      nameArabic: "النوم أخو الموت",
      color: "#8B5CF6",
      icon: "Moon",
      concepts: [
        { term: "اللَّهُ يَتَوَفَّى الْأَنفُسَ حِينَ مَوْتِهَا", meaning: { en: "Allah takes the souls at the time of their death", ur: "اللہ جانوں کو ان کی موت کے وقت قبض کر لیتا ہے" }, explanation: { en: "Allah takes souls at death", ur: "اللہ موت کے وقت روحیں قبض کرتا ہے" }, verseRef: "39:42" },
        { term: "وَالَّتِي لَمْ تَمُتْ فِي مَنَامِهَا", meaning: { en: "And those that do not die during their sleep", ur: "اور جو نیند میں نہیں مرتیں ان کی نیند کے وقت" }, explanation: { en: "Sleep is a minor death", ur: "نیند ایک چھوٹی موت ہے" }, verseRef: "39:42" },
        { term: "فَيُمْسِكُ الَّتِي قَضَىٰ عَلَيْهَا الْمَوْتَ", meaning: { en: "He keeps those for which He has decreed death", ur: "پھر جن کی موت کا فیصلہ ہو چکا ہے انہیں روک لیتا ہے" }, explanation: { en: "Some souls don't return from sleep", ur: "بعض روحیں نیند سے واپس نہیں آتیں" }, verseRef: "39:42" },
        { term: "وَيُرْسِلُ الْأُخْرَىٰ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: { en: "And releases the others for a specified term", ur: "اور باقیوں کو ایک مقررہ وقت تک کے لیے چھوڑ دیتا ہے" }, explanation: { en: "Others awakened until appointed time", ur: "باقیوں کو مقررہ وقت تک جگا دیا جاتا ہے" }, verseRef: "39:42" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ", meaning: { en: "Indeed in that are signs for people who reflect", ur: "بے شک اس میں غور و فکر کرنے والوں کے لیے نشانیاں ہیں" }, explanation: { en: "Sleep-death parallel invites reflection", ur: "نیند اور موت کی مماثلت غور و فکر کی دعوت دیتی ہے" }, verseRef: "39:42" }
      ]
    },

    regretOfSinners: {
      name: "Regret of Sinners",
      nameArabic: "ندم المذنبين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَن تَقُولَ نَفْسٌ يَا حَسْرَتَىٰ عَلَىٰ مَا فَرَّطتُ فِي جَنبِ اللَّهِ", meaning: { en: "Lest a soul should say: Alas for what I neglected regarding Allah", ur: "ایسا نہ ہو کہ کوئی جان کہے: ہائے افسوس جو میں نے اللہ کے معاملے میں کوتاہی کی" }, explanation: { en: "Deep regret for neglecting duties to Allah", ur: "اللہ کے فرائض میں کوتاہی پر گہرا افسوس" }, verseRef: "39:56" },
        { term: "وَإِن كُنتُ لَمِنَ السَّاخِرِينَ", meaning: { en: "And I was among the mockers", ur: "اور بے شک میں مذاق اڑانے والوں میں سے تھا" }, explanation: { en: "Admitting they mocked the truth", ur: "اعتراف کہ انہوں نے حق کا مذاق اڑایا" }, verseRef: "39:56" },
        { term: "أَوْ تَقُولَ لَوْ أَنَّ اللَّهَ هَدَانِي لَكُنتُ مِنَ الْمُتَّقِينَ", meaning: { en: "Or say: If only Allah had guided me, I would be among the righteous", ur: "یا کہے: کاش اللہ مجھے ہدایت دیتا تو میں متقین میں سے ہوتا" }, explanation: { en: "False excuse - blaming Allah for misguidance", ur: "جھوٹا بہانہ - گمراہی کا الزام اللہ پر ڈالنا" }, verseRef: "39:57" },
        { term: "أَوْ تَقُولَ حِينَ تَرَى الْعَذَابَ لَوْ أَنَّ لِي كَرَّةً", meaning: { en: "Or say when seeing punishment: If only I could return", ur: "یا عذاب دیکھ کر کہے: کاش مجھے ایک موقع اور ملتا" }, explanation: { en: "Wishing for second chance", ur: "دوسرے موقع کی تمنا" }, verseRef: "39:58" },
        { term: "فَأَكُونَ مِنَ الْمُحْسِنِينَ", meaning: { en: "So I could be among the doers of good", ur: "تو میں نیکی کرنے والوں میں سے ہو جاتا" }, explanation: { en: "Promise to do good if returned", ur: "واپسی پر نیکی کرنے کا وعدہ" }, verseRef: "39:58" },
        { term: "بَلَىٰ قَدْ جَاءَتْكَ آيَاتِي فَكَذَّبْتَ بِهَا", meaning: { en: "Yes, My signs came to you, but you denied them", ur: "ہاں، تیرے پاس میری آیات آئی تھیں لیکن تو نے انہیں جھٹلایا" }, explanation: { en: "Allah's response - guidance was available", ur: "اللہ کا جواب - ہدایت دستیاب تھی" }, verseRef: "39:59" },
        { term: "وَاسْتَكْبَرْتَ وَكُنتَ مِنَ الْكَافِرِينَ", meaning: { en: "And were arrogant and became among the disbelievers", ur: "اور تکبر کیا اور کافروں میں سے ہو گیا" }, explanation: { en: "Arrogance led to disbelief", ur: "تکبر نے کفر کی طرف لے جایا" }, verseRef: "39:59" }
      ]
    },

    believerVsDisbeliever: {
      name: "Believer vs Disbeliever",
      nameArabic: "المؤمن والكافر",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "أَمَّنْ هُوَ قَانِتٌ آنَاءَ اللَّيْلِ سَاجِدًا وَقَائِمًا", meaning: { en: "Is one who is devoutly obedient during the night, prostrating and standing", ur: "کیا وہ شخص جو رات کی گھڑیوں میں سجدے اور قیام میں عبادت گزار ہے" }, explanation: { en: "Night worshipper in devotion", ur: "رات کو عبادت کرنے والا فرمانبردار بندہ" }, verseRef: "39:9" },
        { term: "يَحْذَرُ الْآخِرَةَ وَيَرْجُو رَحْمَةَ رَبِّهِ", meaning: { en: "Fearing the Hereafter and hoping for mercy of his Lord", ur: "آخرت سے ڈرتا ہے اور اپنے رب کی رحمت کی امید رکھتا ہے" }, explanation: { en: "Balance of fear and hope", ur: "خوف اور امید کا توازن" }, verseRef: "39:9" },
        { term: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ", meaning: { en: "Say: Are those who know equal to those who do not know?", ur: "کہو: کیا جاننے والے اور نہ جاننے والے برابر ہیں؟" }, explanation: { en: "Knowledge distinguishes people", ur: "علم لوگوں میں فرق کرتا ہے" }, verseRef: "39:9" },
        { term: "إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ", meaning: { en: "Only those of understanding will remember", ur: "نصیحت تو عقل والے ہی قبول کرتے ہیں" }, explanation: { en: "Reminder benefits the wise", ur: "نصیحت عقل مندوں کو فائدہ دیتی ہے" }, verseRef: "39:9" },
        { term: "ضَرَبَ اللَّهُ مَثَلًا رَّجُلًا فِيهِ شُرَكَاءُ مُتَشَاكِسُونَ", meaning: { en: "Allah presents a parable: a man with quarreling partners", ur: "اللہ نے مثال بیان کی: ایک آدمی جس میں کئی جھگڑالو شریک ہیں" }, explanation: { en: "Polytheism like having conflicting masters", ur: "شرک ایسے ہے جیسے متضاد آقاؤں کی خدمت" }, verseRef: "39:29" },
        { term: "وَرَجُلًا سَلَمًا لِّرَجُلٍ", meaning: { en: "And a man devoted to one man", ur: "اور ایک آدمی جو ایک ہی شخص کا وقف ہے" }, explanation: { en: "Monotheism like serving one master", ur: "توحید ایسے ہے جیسے ایک آقا کی خدمت" }, verseRef: "39:29" },
        { term: "هَلْ يَسْتَوِيَانِ مَثَلًا", meaning: { en: "Are they equal in comparison?", ur: "کیا یہ دونوں مثال میں برابر ہیں؟" }, explanation: { en: "Obvious difference between the two", ur: "دونوں کے درمیان واضح فرق" }, verseRef: "39:29" }
      ]
    },

    divineAttributes: {
      name: "Divine Names and Attributes",
      nameArabic: "أسماء الله وصفاته",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "الْعَزِيزِ الْحَكِيمِ", meaning: { en: "The Mighty, the Wise", ur: "غالب، حکمت والا" }, explanation: { en: "Power combined with wisdom", ur: "قدرت اور حکمت کا اجتماع" }, verseRef: "39:1" },
        { term: "الْوَاحِدُ الْقَهَّارُ", meaning: { en: "The One, the Prevailing", ur: "یکتا، سب پر غالب" }, explanation: { en: "Absolute oneness and dominance", ur: "مطلق وحدانیت اور غلبہ" }, verseRef: "39:4" },
        { term: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ", meaning: { en: "Knower of the unseen and witnessed", ur: "غیب اور حاضر کا جاننے والا" }, explanation: { en: "Complete knowledge of hidden and manifest", ur: "پوشیدہ اور ظاہر کا مکمل علم" }, verseRef: "39:46" },
        { term: "الْكَبِيرُ الْمُتَعَالِ", meaning: { en: "The Grand, the Exalted", ur: "بڑا، بلند مرتبہ" }, explanation: { en: "Supreme greatness and transcendence", ur: "اعلیٰ ترین عظمت اور بلندی" }, verseRef: "39:67" },
        { term: "الْغَفُورُ الرَّحِيمُ", meaning: { en: "The Forgiving, the Merciful", ur: "بہت بخشنے والا، رحم کرنے والا" }, explanation: { en: "Divine forgiveness and mercy", ur: "الٰہی مغفرت اور رحمت" }, verseRef: "39:53" },
        { term: "ذَٰلِكُمُ اللَّهُ رَبُّكُمْ", meaning: { en: "That is Allah, your Lord", ur: "یہ ہے اللہ، تمہارا رب" }, explanation: { en: "Affirmation of lordship", ur: "ربوبیت کی تصدیق" }, verseRef: "39:6" },
        { term: "لَهُ الْمُلْكُ", meaning: { en: "To Him belongs dominion", ur: "بادشاہی اسی کی ہے" }, explanation: { en: "Absolute sovereignty", ur: "مطلق حاکمیت" }, verseRef: "39:6" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: { en: "There is no deity except Him", ur: "اس کے سوا کوئی معبود نہیں" }, explanation: { en: "Declaration of monotheism", ur: "توحید کا اعلان" }, verseRef: "39:6" }
      ]
    },

    paradiseDescription: {
      name: "Paradise Description",
      nameArabic: "وصف الجنة",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "لِلَّذِينَ أَحْسَنُوا فِي هَٰذِهِ الدُّنْيَا حَسَنَةٌ", meaning: { en: "For those who do good in this world is good", ur: "جنہوں نے اس دنیا میں نیکی کی ان کے لیے بھلائی ہے" }, explanation: { en: "Reward begins in this life", ur: "اجر اسی زندگی سے شروع ہوتا ہے" }, verseRef: "39:10" },
        { term: "وَأَرْضُ اللَّهِ وَاسِعَةٌ", meaning: { en: "And Allah's earth is spacious", ur: "اور اللہ کی زمین وسیع ہے" }, explanation: { en: "Emigration for religion is possible", ur: "دین کے لیے ہجرت ممکن ہے" }, verseRef: "39:10" },
        { term: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ", meaning: { en: "The patient will be given their reward without account", ur: "صبر کرنے والوں کو بے حساب اجر دیا جائے گا" }, explanation: { en: "Unlimited reward for patience", ur: "صبر کا لامحدود اجر" }, verseRef: "39:10" },
        { term: "لَهُم مِّن فَوْقِهِمْ ظُلَلٌ مِّنَ النَّارِ وَمِن تَحْتِهِمْ ظُلَلٌ", meaning: { en: "They will have canopies of fire above and below them", ur: "ان کے اوپر بھی آگ کے سائبان ہوں گے اور نیچے بھی" }, explanation: { en: "Hell description - fire above and below", ur: "جہنم کی تفصیل - اوپر نیچے آگ" }, verseRef: "39:16" },
        { term: "لَٰكِنِ الَّذِينَ اتَّقَوْا رَبَّهُمْ لَهُمْ غُرَفٌ مِّن فَوْقِهَا غُرَفٌ مَّبْنِيَّةٌ", meaning: { en: "But those who feared their Lord - for them are chambers, above which are chambers built", ur: "لیکن جو لوگ اپنے رب سے ڈرے ان کے لیے بالاخانے ہیں جن کے اوپر اور بالاخانے بنے ہوئے ہیں" }, explanation: { en: "Paradise has elevated chambers", ur: "جنت میں بلند بالاخانے ہیں" }, verseRef: "39:20" },
        { term: "تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", meaning: { en: "Beneath which rivers flow", ur: "جن کے نیچے نہریں بہتی ہیں" }, explanation: { en: "Rivers flowing beneath Paradise dwellings", ur: "جنت کے مکانات کے نیچے نہریں بہتی ہیں" }, verseRef: "39:20" },
        { term: "وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي صَدَقَنَا وَعْدَهُ", meaning: { en: "And they will say: Praise to Allah who fulfilled His promise to us", ur: "اور وہ کہیں گے: اللہ کا شکر ہے جس نے ہم سے اپنا وعدہ پورا کیا" }, explanation: { en: "Gratitude upon entering Paradise", ur: "جنت میں داخلے پر شکرگزاری" }, verseRef: "39:74" },
        { term: "وَأَوْرَثَنَا الْأَرْضَ نَتَبَوَّأُ مِنَ الْجَنَّةِ حَيْثُ نَشَاءُ", meaning: { en: "And made us inherit the land to settle in Paradise wherever we will", ur: "اور ہمیں زمین کا وارث بنایا ہم جنت میں جہاں چاہیں رہیں" }, explanation: { en: "Freedom to choose any place in Paradise", ur: "جنت میں کسی بھی جگہ کے انتخاب کی آزادی" }, verseRef: "39:74" },
        { term: "فَنِعْمَ أَجْرُ الْعَامِلِينَ", meaning: { en: "Excellent is the reward of workers", ur: "عمل کرنے والوں کا کیا ہی اچھا اجر ہے" }, explanation: { en: "Paradise earned through righteous deeds", ur: "جنت نیک اعمال سے حاصل ہوتی ہے" }, verseRef: "39:74" }
      ]
    },

    angelsAndThrone: {
      name: "Angels and the Throne",
      nameArabic: "الملائكة والعرش",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَتَرَى الْمَلَائِكَةَ حَافِّينَ مِنْ حَوْلِ الْعَرْشِ", meaning: { en: "And you will see the angels surrounding the Throne", ur: "اور تم فرشتوں کو عرش کے گرد گھیرا ڈالے دیکھو گے" }, explanation: { en: "Angels encircle Allah's Throne", ur: "فرشتے اللہ کے عرش کے گرد حلقہ بنائے ہوئے ہیں" }, verseRef: "39:75" },
        { term: "يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ", meaning: { en: "Glorifying with praise of their Lord", ur: "اپنے رب کی حمد کے ساتھ تسبیح کرتے ہوئے" }, explanation: { en: "Perpetual angelic worship", ur: "فرشتوں کی مسلسل عبادت" }, verseRef: "39:75" },
        { term: "وَقُضِيَ بَيْنَهُم بِالْحَقِّ", meaning: { en: "And it will be judged between them in truth", ur: "اور ان کے درمیان حق کے ساتھ فیصلہ کر دیا جائے گا" }, explanation: { en: "Final judgment completed", ur: "حتمی فیصلہ مکمل ہو جائے گا" }, verseRef: "39:75" },
        { term: "وَقِيلَ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaning: { en: "And it will be said: Praise to Allah, Lord of the worlds", ur: "اور کہا جائے گا: تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا رب ہے" }, explanation: { en: "Ultimate conclusion - all praise to Allah", ur: "حتمی اختتام - تمام حمد اللہ کے لیے" }, verseRef: "39:75" }
      ]
    },

    warningToDisbelievers: {
      name: "Warning to Disbelievers",
      nameArabic: "تحذير الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "قُلْ إِنِّي أَخَافُ إِنْ عَصَيْتُ رَبِّي عَذَابَ يَوْمٍ عَظِيمٍ", meaning: { en: "Say: I fear if I disobey my Lord punishment of a tremendous Day", ur: "کہو: مجھے ڈر ہے اگر میں اپنے رب کی نافرمانی کروں تو ایک بڑے دن کے عذاب کا" }, explanation: { en: "Even the Prophet warns of disobedience", ur: "نبی ﷺ بھی نافرمانی سے ڈراتے ہیں" }, verseRef: "39:13" },
        { term: "قُلْ أَفَغَيْرَ اللَّهِ تَأْمُرُونِّي أَعْبُدُ أَيُّهَا الْجَاهِلُونَ", meaning: { en: "Say: Is it other than Allah you order me to worship, O ignorant ones?", ur: "کہو: اے جاہلو! کیا تم مجھے اللہ کے سوا کسی اور کی عبادت کا حکم دیتے ہو؟" }, explanation: { en: "Rejecting command to worship idols", ur: "بتوں کی پرستش کے حکم کو مسترد کرنا" }, verseRef: "39:64" },
        { term: "لَئِنْ أَشْرَكْتَ لَيَحْبَطَنَّ عَمَلُكَ", meaning: { en: "If you associate others, your deeds will be nullified", ur: "اگر تم شرک کرو گے تو تمہارے اعمال ضائع ہو جائیں گے" }, explanation: { en: "Shirk nullifies all good deeds", ur: "شرک تمام نیک اعمال ضائع کر دیتا ہے" }, verseRef: "39:65" },
        { term: "وَلَتَكُونَنَّ مِنَ الْخَاسِرِينَ", meaning: { en: "And you will surely be among the losers", ur: "اور تم ضرور نقصان اٹھانے والوں میں سے ہو جاؤ گے" }, explanation: { en: "Shirk leads to total loss", ur: "شرک مکمل نقصان کی طرف لے جاتا ہے" }, verseRef: "39:65" },
        { term: "بَلِ اللَّهَ فَاعْبُدْ وَكُن مِّنَ الشَّاكِرِينَ", meaning: { en: "Rather, worship Allah and be among the grateful", ur: "بلکہ اللہ کی عبادت کرو اور شکر گزاروں میں سے ہو جاؤ" }, explanation: { en: "True worship with gratitude", ur: "شکرگزاری کے ساتھ سچی عبادت" }, verseRef: "39:66" }
      ]
    }
  },

  relationships: [
    { from: "مخلصاً له الدين", to: "ألا لله الدين الخالص", type: "command-principle", description: { en: "Command to sincerity reflects Allah's exclusive right to pure worship", ur: "اخلاص کا حکم اللہ کے خالص عبادت کے خصوصی حق کو ظاہر کرتا ہے" } },
    { from: "ليقربونا إلى الله زلفى", to: "لله الشفاعة جميعاً", type: "refutation", description: { en: "False claim of idol intercession vs Allah's sole control of intercession", ur: "بتوں کی سفارش کا جھوٹا دعویٰ بمقابلہ اللہ کا سفارش پر واحد اختیار" } },
    { from: "لا تقنطوا من رحمة الله", to: "يغفر الذنوب جميعاً", type: "promise-fulfillment", description: { en: "Prohibition of despair backed by divine forgiveness", ur: "مایوسی کی ممانعت جو الٰہی مغفرت سے مضبوط ہے" } },
    { from: "أسرفوا على أنفسهم", to: "أنيبوا إلى ربكم", type: "problem-solution", description: { en: "From transgression to repentance", ur: "حد سے تجاوز سے توبہ کی طرف" } },
    { from: "يتوفى الأنفس حين موتها", to: "في منامها", type: "analogy", description: { en: "Death and sleep both involve soul-taking", ur: "موت اور نیند دونوں میں روح قبض ہوتی ہے" } },
    { from: "سيق الذين كفروا زمراً", to: "سيق الذين اتقوا زمراً", type: "contrast", description: { en: "Both groups driven in throngs - to different destinations", ur: "دونوں گروہ جماعتوں میں ہانکے جائیں گے - مختلف منزلوں کی طرف" } },
    { from: "فتحت أبوابها", to: "وفتحت أبوابها", type: "subtle-difference", description: { en: "Hell gates open when they arrive; Paradise gates already open in welcome (waw difference)", ur: "جہنم کے دروازے ان کے پہنچنے پر کھلتے ہیں؛ جنت کے دروازے پہلے سے خوش آمدید میں کھلے ہیں (واؤ کا فرق)" } },
    { from: "تقشعر منه جلود", to: "تلين جلودهم وقلوبهم", type: "sequence", description: { en: "Quran causes fear then softens hearts", ur: "قرآن پہلے خوف پیدا کرتا ہے پھر دلوں کو نرم کرتا ہے" } },
    { from: "رجلاً فيه شركاء متشاكسون", to: "رجلاً سلماً لرجل", type: "parable", description: { en: "Polytheism vs monotheism illustrated", ur: "شرک بمقابلہ توحید کی تمثیل" } },
    { from: "يوم القيامة", to: "الحمد لله رب العالمين", type: "culmination", description: { en: "Judgment Day ends with universal praise to Allah", ur: "قیامت کا دن اللہ کی عالمگیر حمد پر ختم ہوتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Revelation and Sincerity", verses: "39:1-6", description: { en: "Quran's authority, pure worship, refutation of polytheism", ur: "قرآن کی حجت، خالص عبادت، شرک کی تردید" } },
      { stage: 2, theme: "Human Nature and Gratitude", verses: "39:7-9", description: { en: "Human ingratitude vs devoted worshipper", ur: "انسانی ناشکری بمقابلہ فرمانبردار عابد" } },
      { stage: 3, theme: "Reward for the Righteous", verses: "39:10-16", description: { en: "Patience, emigration, warning against shirk", ur: "صبر، ہجرت، شرک سے خبردار" } },
      { stage: 4, theme: "Good News for Servants", verses: "39:17-20", description: { en: "Avoiding taghut, chambers of Paradise", ur: "طاغوت سے اجتناب، جنت کے بالاخانے" } },
      { stage: 5, theme: "Signs in Nature and Quran", verses: "39:21-26", description: { en: "Water cycle, Quran's effect, hardened hearts", ur: "پانی کا چکر، قرآن کا اثر، سخت دل" } },
      { stage: 6, theme: "Quran's Examples", verses: "39:27-31", description: { en: "Parables, Arabic Quran, Prophet's mortality", ur: "تمثیلات، عربی قرآن، نبی ﷺ کی فانی ذات" } },
      { stage: 7, theme: "Lies Against Allah", verses: "39:32-40", description: { en: "Worst liars, Allah sufficient, guidance and misguidance", ur: "بدترین جھوٹے، اللہ کافی ہے، ہدایت اور گمراہی" } },
      { stage: 8, theme: "Soul-Taking and Intercession", verses: "39:41-48", description: { en: "Sleep-death parallel, false intercessors, single God vs many", ur: "نیند اور موت کی مماثلت، جھوٹے سفارشی، ایک خدا بمقابلہ بہت سے" } },
      { stage: 9, theme: "Boundless Mercy", verses: "39:49-58", description: { en: "Human inconsistency, FAMOUS VERSE 39:53, urgency of repentance", ur: "انسانی بے ثباتی، مشہور آیت 39:53، توبہ کی فوری ضرورت" } },
      { stage: 10, theme: "Regret and Lies", verses: "39:59-63", description: { en: "Faces blackened, Allah's complete control", ur: "چہرے سیاہ ہونا، اللہ کا مکمل اختیار" } },
      { stage: 11, theme: "Pure Worship Command", verses: "39:64-66", description: { en: "Rejection of shirk, worship Allah alone", ur: "شرک کی تردید، صرف اللہ کی عبادت" } },
      { stage: 12, theme: "Divine Majesty", verses: "39:67-70", description: { en: "Earth in His grip, trumpets blown, perfect justice", ur: "زمین اس کی مٹھی میں، صور پھونکے جائیں گے، کامل انصاف" } },
      { stage: 13, theme: "The Two Groups", verses: "39:71-75", description: { en: "Hell group, Paradise group, final praise to Allah", ur: "جہنم والا گروہ، جنت والا گروہ، اللہ کی حتمی حمد" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Worship with complete sincerity", how: "Examine intentions - are you worshipping for Allah alone or for show?", verse: "39:2-3" },
      { principle: "Never despair of Allah's mercy", how: "No matter how many sins, turn to Allah in repentance - He forgives all", verse: "39:53" },
      { principle: "Repent before it's too late", how: "Return to Allah and submit before punishment arrives", verse: "39:54-55" },
      { principle: "Balance fear and hope", how: "Fear the Hereafter while hoping for Allah's mercy", verse: "39:9" },
      { principle: "Knowledge distinguishes people", how: "Seek knowledge - those who know are not like those who don't", verse: "39:9" },
      { principle: "Be patient for unlimited reward", how: "The patient receive their reward without measure", verse: "39:10" },
      { principle: "Let the Quran affect your heart", how: "When reciting, let your skin shiver in awe, then soften to Allah's remembrance", verse: "39:23" },
      { principle: "Reflect on sleep", how: "Every sleep is a minor death - be grateful for each awakening", verse: "39:42" },
      { principle: "Don't make excuses", how: "Signs have come - arrogance and denial are your own choice", verse: "39:59" },
      { principle: "Choose one Master", how: "Serving Allah alone is simpler than serving conflicting idols", verse: "39:29" }
    ]
  },

  mostHopefulVerse: {
    verse: 53,
    arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ",
    translation: { en: "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, He is the Forgiving, the Merciful.", ur: "کہو: اے میرے بندو جنہوں نے اپنی جانوں پر زیادتی کی، اللہ کی رحمت سے مایوس نہ ہو۔ بے شک اللہ تمام گناہ معاف فرما دیتا ہے۔ بے شک وہی بخشنے والا، رحم کرنے والا ہے۔" },
    significance: { en: "Scholars call this the most hopeful verse in the Quran. It addresses sinners with the intimate 'My servants' (Ya Ibadi), prohibits despair, promises forgiveness of ALL sins, and confirms with two divine names of mercy. This verse gives hope to every sinner who turns back to Allah.", ur: "علماء اسے قرآن کی سب سے زیادہ امید افزا آیت کہتے ہیں۔ یہ گنہگاروں کو شفقت بھرے لفظ 'میرے بندو' (یا عبادی) سے مخاطب کرتی ہے، مایوسی سے منع کرتی ہے، تمام گناہوں کی معافی کا وعدہ کرتی ہے، اور رحمت کے دو الٰہی ناموں سے تصدیق کرتی ہے۔ یہ آیت ہر اس گنہگار کو امید دیتی ہے جو اللہ کی طرف لوٹتا ہے۔" },
    context: { en: "Revealed when some companions thought their pre-Islamic sins were too great to be forgiven. This verse assures that no sin is beyond Allah's forgiveness for those who repent.", ur: "یہ آیت اس وقت نازل ہوئی جب بعض صحابہ کو لگا کہ ان کے اسلام سے پہلے کے گناہ اتنے بڑے ہیں کہ معاف نہیں ہو سکتے۔ یہ آیت یقین دلاتی ہے کہ توبہ کرنے والوں کے لیے کوئی گناہ اللہ کی مغفرت سے بڑا نہیں۔" }
  },

  uniqueFeatures: {
    zumarConcept: { en: "The surah's name comes from 'zumar' (groups/throngs) describing how both believers and disbelievers will be driven in groups to their destinations on Judgment Day - a powerful image of collective fate.", ur: "سورت کا نام 'زمر' (گروہ/جماعتیں) سے آیا ہے جو بیان کرتا ہے کہ مومنین اور کافروں دونوں کو قیامت کے دن ان کی منزلوں کی طرف گروہوں میں لے جایا جائے گا - اجتماعی تقدیر کی ایک طاقتور تصویر۔" },
    gatesOfParadise: { en: "Note the subtle difference in 39:71 vs 39:73. For Hell: 'until they reach it, its gates are opened' (futihaat). For Paradise: 'until they reach it AND its gates have been opened' (wa futihaat with waw). Paradise gates are already open in anticipation and welcome!", ur: "39:71 اور 39:73 میں لطیف فرق نوٹ کریں۔ جہنم کے لیے: 'جب وہاں پہنچیں گے تو دروازے کھولے جائیں گے' (فتحت)۔ جنت کے لیے: 'جب پہنچیں گے اور اس کے دروازے پہلے سے کھلے ہوں گے' (وفتحت واؤ کے ساتھ)۔ جنت کے دروازے انتظار اور خوش آمدید میں پہلے سے کھلے ہیں!" },
    sleepDeathConnection: { en: "Verse 39:42 presents a profound connection between sleep and death - both involve Allah taking souls. Some return (sleep), some don't (death). This should make us reflect on each awakening as a new life.", ur: "آیت 39:42 نیند اور موت کے درمیان گہرے تعلق کو پیش کرتی ہے - دونوں میں اللہ روحیں قبض کرتا ہے۔ کچھ واپس آتی ہیں (نیند)، کچھ نہیں (موت)۔ یہ ہمیں ہر جاگنے کو ایک نئی زندگی سمجھ کر غور کرنے پر مجبور کرتا ہے۔" },
    quranEffect: { en: "The physical response to Quran described in 39:23 (skin shivers then softens) is unique - showing the Quran's tangible impact on believers who truly engage with it.", ur: "39:23 میں قرآن کے جسمانی اثر کی تفصیل (جلد سہم جاتی ہے پھر نرم ہو جاتی ہے) منفرد ہے - یہ ان مومنین پر قرآن کا محسوس اثر دکھاتی ہے جو واقعی اس سے جڑتے ہیں۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "يُكَوِّرُ", example: { en: "Wraps", ur: "لپیٹنا" }, effect: { en: "Form II verb suggesting spherical wrapping - night wrapped over day on a sphere", ur: "باب تفعیل کا فعل جو کروی لپیٹنے کی نشاندہی کرتا ہے - رات کو دن پر کرے پر لپیٹنا" } },
      { feature: "مُتَشَابِهًا مَّثَانِيَ", example: { en: "Consistent, repeating", ur: "ہم آہنگ، بار بار دہرایا جانے والا" }, effect: { en: "Two qualities of Quran - internal consistency and reinforcing repetition", ur: "قرآن کی دو خوبیاں - اندرونی ہم آہنگی اور تقویت بخش تکرار" } },
      { feature: "تَقْشَعِرُّ", example: { en: "Shiver/goosebumps", ur: "رونگٹے کھڑے ہونا" }, effect: { en: "Intensified form IV - strong physical reaction to Quran", ur: "شدید صیغہ - قرآن پر شدید جسمانی ردعمل" } },
      { feature: "زُمَرًا", example: { en: "In groups/throngs", ur: "گروہوں/جماعتوں میں" }, effect: { en: "Plural of zumrah - large organized groups, giving the surah its name", ur: "زمرہ کی جمع - بڑے منظم گروہ، جس سے سورت کا نام ہے" } },
      { feature: "أَسْرَفُوا", example: { en: "Transgressed/exceeded", ur: "حد سے گزرنا/زیادتی کرنا" }, effect: { en: "Israf - going beyond limits, used compassionately before the hope of forgiveness", ur: "اسراف - حد سے تجاوز، مغفرت کی امید سے پہلے شفقت سے استعمال کیا گیا" } },
      { feature: "لَا تَقْنَطُوا", example: { en: "Do not despair", ur: "مایوس مت ہو" }, effect: { en: "Qunut - deep, despairing loss of hope - strictly prohibited", ur: "قنوط - گہری مایوسی اور ناامیدی - سختی سے ممنوع" } },
      { feature: "حَافِّينَ", example: { en: "Surrounding", ur: "گھیرا ڈالنے والے" }, effect: { en: "Active participle - angels continuously encircling the Throne", ur: "اسم فاعل - فرشتے مسلسل عرش کے گرد حلقہ بنائے ہوئے" } }
    ]
  },

  historicalContext: {
    period: { en: "Late Makkan period, when persecution was intense and some Muslims considered emigration", ur: "مکی دور کا آخری حصہ، جب ظلم و ستم شدید تھا اور بعض مسلمان ہجرت پر غور کر رہے تھے" },
    themes: { en: "The emphasis on sincerity (ikhlas) and rejection of intercession through idols directly confronted Meccan polytheism. The call to emigrate (39:10) prepared Muslims for the eventual Hijrah.", ur: "اخلاص پر زور اور بتوں کے ذریعے سفارش کی تردید نے مکی شرک کا براہ راست مقابلہ کیا۔ ہجرت کی دعوت (39:10) نے مسلمانوں کو آنے والی ہجرت کے لیے تیار کیا۔" },
    occasion: { en: "Verse 39:53 was revealed for Muslims who had committed grave sins before Islam and feared they could never be forgiven. It provided immense hope and became one of the most beloved verses.", ur: "آیت 39:53 ان مسلمانوں کے لیے نازل ہوئی جنہوں نے اسلام سے پہلے سنگین گناہ کیے تھے اور ڈرتے تھے کہ انہیں کبھی معاف نہیں کیا جائے گا۔ اس نے بے پناہ امید فراہم کی اور محبوب ترین آیات میں سے ایک بن گئی۔" }
  },

  connectionToPrevious: {
    note: { en: "Surah 39 (Az-Zumar) follows Surah 38 (Sad), which discussed prophets and their trials. Az-Zumar shifts focus to the fundamental distinction between sincere worship and polytheism, and the ultimate separation of humanity into two groups - those destined for Paradise and those for Hell.", ur: "سورۃ الزمر (39) سورۃ ص (38) کے بعد آتی ہے جس میں انبیاء اور ان کی آزمائشوں کا ذکر تھا۔ الزمر خالص عبادت اور شرک کے درمیان بنیادی فرق پر توجہ مرکوز کرتی ہے اور انسانیت کی دو گروہوں میں حتمی تقسیم - جنت والے اور جہنم والے۔" }
  }
};

export default ONTOLOGY;
