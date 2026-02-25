/**
 * Surah Ad-Dukhan (44) - Ontology of Quranic Concepts
 * The Smoke - 59 Ayahs, Makki
 * Theme: Laylat al-Qadr, the smoke sign, Pharaoh's destruction, tree of Zaqqum, Paradise rewards
 */

export const ONTOLOGY = {
  surahId: 44,
  surahName: "Ad-Dukhan",
  surahNameArabic: "الدخان",
  revelationType: "Makki",
  totalAyahs: 59,

  categories: {
    laylatAlQadr: {
      name: "The Blessed Night (Laylat al-Qadr)",
      nameUr: "مبارک رات (لیلۃ القدر)",
      nameArabic: "ليلة القدر",
      color: "#8B5CF6",
      concepts: [
        { term: "حم", meaning: { en: "Ha-Mim", ur: "حم" }, explanation: { en: "Disconnected letters - part of the Ha-Mim series (40-46)", ur: "حروفِ مقطعات - حوامیم سلسلے کا حصہ (40-46)" }, verseRef: "44:1" },
        { term: "وَالْكِتَابِ الْمُبِينِ", meaning: { en: "By the clear Book", ur: "واضح کتاب کی قسم" }, explanation: { en: "Oath by the Quran emphasizing its clarity", ur: "قرآن کی قسم اس کی وضاحت پر زور دیتے ہوئے" }, verseRef: "44:2" },
        { term: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُّبَارَكَةٍ", meaning: { en: "Indeed, We sent it down during a blessed night", ur: "بے شک ہم نے اسے ایک مبارک رات میں نازل کیا" }, explanation: { en: "Revelation of Quran on Laylat al-Qadr", ur: "لیلۃ القدر میں قرآن کا نزول" }, verseRef: "44:3" },
        { term: "إِنَّا كُنَّا مُنذِرِينَ", meaning: { en: "Indeed, We were to warn", ur: "بے شک ہم خبردار کرنے والے تھے" }, explanation: { en: "Purpose of revelation - to warn mankind", ur: "نزولِ وحی کا مقصد - انسانوں کو خبردار کرنا" }, verseRef: "44:3" },
        { term: "فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ", meaning: { en: "On that night every wise affair is determined", ur: "اس رات ہر حکمت والے معاملے کا فیصلہ ہوتا ہے" }, explanation: { en: "Decrees for the year are decided", ur: "سال بھر کے فیصلے طے ہوتے ہیں" }, verseRef: "44:4" },
        { term: "أَمْرًا مِّنْ عِندِنَا", meaning: { en: "A command from Us", ur: "ہماری طرف سے ایک حکم" }, explanation: { en: "Divine origin of all decrees", ur: "تمام فیصلوں کی الٰہی اصل" }, verseRef: "44:5" },
        { term: "رَحْمَةً مِّن رَّبِّكَ", meaning: { en: "As mercy from your Lord", ur: "تمہارے رب کی رحمت سے" }, explanation: { en: "Revelation as divine mercy", ur: "وحی بطور الٰہی رحمت" }, verseRef: "44:6" },
        { term: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ", meaning: { en: "Indeed, He is the Hearing, the Knowing", ur: "بے شک وہ سننے والا جاننے والا ہے" }, explanation: { en: "Allah's attributes of hearing and knowledge", ur: "اللہ کی سماعت اور علم کی صفات" }, verseRef: "44:6" }
      ]
    },

    divineCreatorship: {
      name: "Divine Lordship and Creation",
      nameUr: "الٰہی ربوبیت اور تخلیق",
      nameArabic: "الربوبية والخلق",
      color: "#10B981",
      concepts: [
        { term: "رَبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا", meaning: { en: "Lord of the heavens and earth and what is between them", ur: "آسمانوں اور زمین اور جو ان کے درمیان ہے ان سب کا رب" }, explanation: { en: "Allah's sovereignty over all creation", ur: "تمام مخلوقات پر اللہ کی حاکمیت" }, verseRef: "44:7" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: { en: "There is no deity except Him", ur: "اس کے سوا کوئی معبود نہیں" }, explanation: { en: "Declaration of Tawhid - absolute monotheism", ur: "توحید کا اعلان - مطلق یکتا پرستی" }, verseRef: "44:8" },
        { term: "يُحْيِي وَيُمِيتُ", meaning: { en: "He gives life and causes death", ur: "وہ زندگی دیتا ہے اور موت دیتا ہے" }, explanation: { en: "Allah controls life and death", ur: "اللہ زندگی اور موت پر حاکم ہے" }, verseRef: "44:8" },
        { term: "رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ", meaning: { en: "Your Lord and the Lord of your forefathers", ur: "تمہارا رب اور تمہارے باپ دادا کا رب" }, explanation: { en: "Lordship spans all generations", ur: "ربوبیت تمام نسلوں پر محیط ہے" }, verseRef: "44:8" }
      ]
    },

    theSmoke: {
      name: "The Smoke (Ad-Dukhan)",
      nameUr: "دھواں (الدخان)",
      nameArabic: "الدخان",
      color: "#6B7280",
      concepts: [
        { term: "بَلْ هُمْ فِي شَكٍّ يَلْعَبُونَ", meaning: { en: "But they are in doubt, amusing themselves", ur: "بلکہ وہ شک میں کھیل رہے ہیں" }, explanation: { en: "Disbelievers' heedless attitude", ur: "کافروں کا غفلت بھرا رویہ" }, verseRef: "44:9" },
        { term: "فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُّبِينٍ", meaning: { en: "Then watch for the Day when the sky brings visible smoke", ur: "پس اس دن کا انتظار کرو جب آسمان واضح دھواں لائے گا" }, explanation: { en: "Prophecy of the smoke - a major sign", ur: "دھوئیں کی پیشگوئی - ایک بڑی نشانی" }, verseRef: "44:10" },
        { term: "يَغْشَى النَّاسَ", meaning: { en: "Covering the people", ur: "لوگوں کو ڈھانپ لے گا" }, explanation: { en: "Smoke will envelop humanity", ur: "دھواں انسانوں کو ڈھانپ لے گا" }, verseRef: "44:11" },
        { term: "هَٰذَا عَذَابٌ أَلِيمٌ", meaning: { en: "This is a painful punishment", ur: "یہ دردناک عذاب ہے" }, explanation: { en: "Nature of the smoke punishment", ur: "دھوئیں کے عذاب کی نوعیت" }, verseRef: "44:11" },
        { term: "رَّبَّنَا اكْشِفْ عَنَّا الْعَذَابَ إِنَّا مُؤْمِنُونَ", meaning: { en: "Our Lord, remove from us the torment; indeed, we are believers", ur: "اے ہمارے رب ہم سے عذاب ہٹا دے بے شک ہم ایمان لاتے ہیں" }, explanation: { en: "People's desperate plea during the smoke", ur: "دھوئیں کے دوران لوگوں کی بے بس فریاد" }, verseRef: "44:12" },
        { term: "أَنَّىٰ لَهُمُ الذِّكْرَىٰ", meaning: { en: "How will they be reminded?", ur: "انہیں نصیحت کہاں سے ہوگی؟" }, explanation: { en: "Rhetorical - too late for remembrance", ur: "استفہامِ انکاری - نصیحت کا وقت گزر چکا" }, verseRef: "44:13" },
        { term: "وَقَدْ جَاءَهُمْ رَسُولٌ مُّبِينٌ", meaning: { en: "When a clear messenger had already come to them", ur: "جبکہ ان کے پاس واضح رسول پہلے ہی آ چکا تھا" }, explanation: { en: "They already received clear guidance", ur: "انہیں واضح ہدایت پہلے ہی مل چکی تھی" }, verseRef: "44:13" },
        { term: "ثُمَّ تَوَلَّوْا عَنْهُ وَقَالُوا مُعَلَّمٌ مَّجْنُونٌ", meaning: { en: "Then they turned away and said: Taught [by others], a madman", ur: "پھر انہوں نے منہ پھیر لیا اور کہا: سکھایا ہوا ہے، دیوانہ ہے" }, explanation: { en: "Their rejection and insults", ur: "ان کا انکار اور توہین" }, verseRef: "44:14" },
        { term: "إِنَّا كَاشِفُو الْعَذَابِ قَلِيلًا", meaning: { en: "Indeed, We will remove the punishment a little", ur: "بے شک ہم تھوڑی دیر کے لیے عذاب ہٹا دیں گے" }, explanation: { en: "Temporary respite granted", ur: "عارضی مہلت دی گئی" }, verseRef: "44:15" },
        { term: "إِنَّكُمْ عَائِدُونَ", meaning: { en: "Indeed, you will return [to disbelief]", ur: "بے شک تم (کفر کی طرف) لوٹ جاؤ گے" }, explanation: { en: "Prophecy of their relapse", ur: "ان کے پلٹ جانے کی پیشگوئی" }, verseRef: "44:15" }
      ]
    },

    greatSeizure: {
      name: "The Great Seizure (Al-Batshah Al-Kubra)",
      nameUr: "بڑی پکڑ (البطشۃ الکبریٰ)",
      nameArabic: "البطشة الكبرى",
      color: "#EF4444",
      concepts: [
        { term: "يَوْمَ نَبْطِشُ الْبَطْشَةَ الْكُبْرَىٰ", meaning: { en: "The Day We will strike with the greatest assault", ur: "جس دن ہم سب سے بڑی پکڑ سے پکڑیں گے" }, explanation: { en: "Reference to Badr or Day of Judgment", ur: "بدر یا یومِ قیامت کا حوالہ" }, verseRef: "44:16" },
        { term: "إِنَّا مُنتَقِمُونَ", meaning: { en: "Indeed, We will take retribution", ur: "بے شک ہم بدلہ لیں گے" }, explanation: { en: "Divine vengeance upon deniers", ur: "منکروں سے الٰہی انتقام" }, verseRef: "44:16" }
      ]
    },

    pharaohStory: {
      name: "Pharaoh and the Children of Israel",
      nameUr: "فرعون اور بنی اسرائیل",
      nameArabic: "فرعون وبنو إسرائيل",
      color: "#F59E0B",
      concepts: [
        { term: "وَلَقَدْ فَتَنَّا قَبْلَهُمْ قَوْمَ فِرْعَوْنَ", meaning: { en: "And We had tried before them the people of Pharaoh", ur: "اور ان سے پہلے ہم نے فرعون کی قوم کو آزمایا" }, explanation: { en: "Historical example - Pharaoh's people tested", ur: "تاریخی مثال - فرعون کی قوم آزمائی گئی" }, verseRef: "44:17" },
        { term: "وَجَاءَهُمْ رَسُولٌ كَرِيمٌ", meaning: { en: "And there came to them a noble messenger", ur: "اور ان کے پاس ایک معزز رسول آیا" }, explanation: { en: "Prophet Musa sent to them", ur: "حضرت موسیٰ ان کی طرف بھیجے گئے" }, verseRef: "44:17" },
        { term: "أَنْ أَدُّوا إِلَيَّ عِبَادَ اللَّهِ", meaning: { en: "Send with me the servants of Allah", ur: "اللہ کے بندوں کو میرے ساتھ بھیج دو" }, explanation: { en: "Musa's demand to free Israelites", ur: "بنی اسرائیل کی آزادی کا موسیٰ کا مطالبہ" }, verseRef: "44:18" },
        { term: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: { en: "Indeed, I am to you a trustworthy messenger", ur: "بے شک میں تمہارے لیے ایک امانتدار رسول ہوں" }, explanation: { en: "Musa's credentials", ur: "موسیٰ کی اسناد" }, verseRef: "44:18" },
        { term: "وَأَن لَّا تَعْلُوا عَلَى اللَّهِ", meaning: { en: "And do not be haughty with Allah", ur: "اور اللہ کے سامنے سرکشی نہ کرو" }, explanation: { en: "Warning against arrogance before Allah", ur: "اللہ کے سامنے تکبر سے خبردار" }, verseRef: "44:19" },
        { term: "إِنِّي آتِيكُم بِسُلْطَانٍ مُّبِينٍ", meaning: { en: "Indeed, I come to you with clear authority", ur: "بے شک میں تمہارے پاس واضح دلیل لایا ہوں" }, explanation: { en: "Musa's miracles as proof", ur: "بطور ثبوت موسیٰ کے معجزات" }, verseRef: "44:19" },
        { term: "وَإِنِّي عُذْتُ بِرَبِّي وَرَبِّكُمْ أَن تَرْجُمُونِ", meaning: { en: "And indeed, I have sought refuge in my Lord and your Lord, lest you stone me", ur: "اور بے شک میں نے اپنے اور تمہارے رب کی پناہ لی ہے کہ تم مجھے سنگسار نہ کرو" }, explanation: { en: "Musa seeking divine protection", ur: "موسیٰ کا الٰہی پناہ طلب کرنا" }, verseRef: "44:20" },
        { term: "وَإِن لَّمْ تُؤْمِنُوا لِي فَاعْتَزِلُونِ", meaning: { en: "But if you do not believe me, then leave me alone", ur: "لیکن اگر تم میرا یقین نہیں کرتے تو مجھ سے الگ رہو" }, explanation: { en: "Final ultimatum to Pharaoh", ur: "فرعون کو آخری تنبیہ" }, verseRef: "44:21" },
        { term: "فَدَعَا رَبَّهُ أَنَّ هَٰؤُلَاءِ قَوْمٌ مُّجْرِمُونَ", meaning: { en: "So he called upon his Lord: These are a criminal people", ur: "پس اس نے اپنے رب سے فریاد کی: یہ مجرم قوم ہے" }, explanation: { en: "Musa's prayer against Pharaoh's people", ur: "فرعون کی قوم کے خلاف موسیٰ کی دعا" }, verseRef: "44:22" }
      ]
    },

    exodusAndDestruction: {
      name: "The Exodus and Pharaoh's Destruction",
      nameUr: "بنی اسرائیل کی نجات اور فرعون کی تباہی",
      nameArabic: "الخروج وهلاك فرعون",
      color: "#3B82F6",
      concepts: [
        { term: "فَأَسْرِ بِعِبَادِي لَيْلًا", meaning: { en: "Set out with My servants by night", ur: "رات کو میرے بندوں کو لے کر چلو" }, explanation: { en: "Command to lead Israelites at night", ur: "رات کو بنی اسرائیل کو لے جانے کا حکم" }, verseRef: "44:23" },
        { term: "إِنَّكُم مُّتَّبَعُونَ", meaning: { en: "Indeed, you will be pursued", ur: "بے شک تمہارا پیچھا کیا جائے گا" }, explanation: { en: "Warning that Pharaoh will follow", ur: "فرعون کے پیچھا کرنے کی خبر" }, verseRef: "44:23" },
        { term: "وَاتْرُكِ الْبَحْرَ رَهْوًا", meaning: { en: "And leave the sea parted", ur: "اور سمندر کو کھلا چھوڑ دو" }, explanation: { en: "Miracle of the parted sea", ur: "سمندر کے پھٹنے کا معجزہ" }, verseRef: "44:24" },
        { term: "إِنَّهُمْ جُندٌ مُّغْرَقُونَ", meaning: { en: "Indeed, they are an army to be drowned", ur: "بے شک وہ ڈوبنے والا لشکر ہے" }, explanation: { en: "Prophecy of Pharaoh's army drowning", ur: "فرعون کے لشکر کے ڈوبنے کی پیشگوئی" }, verseRef: "44:24" },
        { term: "كَمْ تَرَكُوا مِن جَنَّاتٍ وَعُيُونٍ", meaning: { en: "How much they left of gardens and springs", ur: "کتنے باغ اور چشمے چھوڑ گئے" }, explanation: { en: "Material wealth abandoned", ur: "مادی دولت چھوڑ دی گئی" }, verseRef: "44:25" },
        { term: "وَزُرُوعٍ وَمَقَامٍ كَرِيمٍ", meaning: { en: "And crops and noble residences", ur: "اور کھیتیاں اور شاندار مکانات" }, explanation: { en: "Their luxurious dwellings left behind", ur: "ان کی عالیشان رہائش گاہیں پیچھے رہ گئیں" }, verseRef: "44:26" },
        { term: "وَنَعْمَةٍ كَانُوا فِيهَا فَاكِهِينَ", meaning: { en: "And comfort in which they were enjoying themselves", ur: "اور عیش و آرام جس میں وہ مزے لوٹ رہے تھے" }, explanation: { en: "Pleasures they indulged in", ur: "عیش جس میں وہ مست تھے" }, verseRef: "44:27" },
        { term: "كَذَٰلِكَ ۖ وَأَوْرَثْنَاهَا قَوْمًا آخَرِينَ", meaning: { en: "Thus. And We caused another people to inherit them", ur: "ایسا ہی ہوا۔ اور ہم نے دوسری قوم کو ان کا وارث بنا دیا" }, explanation: { en: "Transfer of wealth to Israelites", ur: "دولت کی بنی اسرائیل کو منتقلی" }, verseRef: "44:28" },
        { term: "فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالْأَرْضُ", meaning: { en: "And the heaven and earth wept not for them", ur: "اور آسمان اور زمین نے ان پر نہیں رویا" }, explanation: { en: "No cosmic mourning for the wicked", ur: "بدکاروں کے لیے کائناتی ماتم نہیں" }, verseRef: "44:29" },
        { term: "وَمَا كَانُوا مُنظَرِينَ", meaning: { en: "Nor were they given respite", ur: "اور نہ انہیں مہلت دی گئی" }, explanation: { en: "No delay in their punishment", ur: "ان کی سزا میں کوئی تاخیر نہیں" }, verseRef: "44:29" }
      ]
    },

    israelitesSaved: {
      name: "Children of Israel Saved",
      nameUr: "بنی اسرائیل کی نجات",
      nameArabic: "نجاة بني إسرائيل",
      color: "#10B981",
      concepts: [
        { term: "وَلَقَدْ نَجَّيْنَا بَنِي إِسْرَائِيلَ مِنَ الْعَذَابِ الْمُهِينِ", meaning: { en: "And We certainly saved the Children of Israel from the humiliating torment", ur: "اور ہم نے بنی اسرائیل کو ذلت آمیز عذاب سے بچا لیا" }, explanation: { en: "Divine rescue from oppression", ur: "ظلم سے الٰہی نجات" }, verseRef: "44:30" },
        { term: "مِن فِرْعَوْنَ ۚ إِنَّهُ كَانَ عَالِيًا مِّنَ الْمُسْرِفِينَ", meaning: { en: "From Pharaoh. Indeed, he was a haughty one among the transgressors", ur: "فرعون سے۔ بے شک وہ حد سے بڑھنے والوں میں بلند تھا" }, explanation: { en: "Pharaoh's arrogance highlighted", ur: "فرعون کے تکبر کی نشاندہی" }, verseRef: "44:31" },
        { term: "وَلَقَدِ اخْتَرْنَاهُمْ عَلَىٰ عِلْمٍ عَلَى الْعَالَمِينَ", meaning: { en: "And We chose them, with knowledge, over [all] the worlds", ur: "اور ہم نے انہیں علم کی بنا پر تمام جہانوں پر چن لیا" }, explanation: { en: "Israelites chosen in their time", ur: "بنی اسرائیل اپنے زمانے میں منتخب ہوئے" }, verseRef: "44:32" },
        { term: "وَآتَيْنَاهُم مِّنَ الْآيَاتِ مَا فِيهِ بَلَاءٌ مُّبِينٌ", meaning: { en: "And We gave them signs in which was a clear trial", ur: "اور ہم نے انہیں نشانیاں دیں جن میں واضح آزمائش تھی" }, explanation: { en: "Miracles that tested their faith", ur: "معجزات جنہوں نے ان کے ایمان کو آزمایا" }, verseRef: "44:33" }
      ]
    },

    denialOfResurrection: {
      name: "Denial of Resurrection",
      nameUr: "قیامت کا انکار",
      nameArabic: "إنكار البعث",
      color: "#6366F1",
      concepts: [
        { term: "إِنَّ هَٰؤُلَاءِ لَيَقُولُونَ", meaning: { en: "Indeed, these [disbelievers] say", ur: "بے شک یہ (کافر) کہتے ہیں" }, explanation: { en: "Introducing Quraysh's denial", ur: "قریش کے انکار کا تعارف" }, verseRef: "44:34" },
        { term: "إِنْ هِيَ إِلَّا مَوْتَتُنَا الْأُولَىٰ", meaning: { en: "There is not but our first death", ur: "ہماری پہلی موت کے سوا کچھ نہیں" }, explanation: { en: "Denial of life after death", ur: "موت کے بعد زندگی کا انکار" }, verseRef: "44:35" },
        { term: "وَمَا نَحْنُ بِمُنشَرِينَ", meaning: { en: "And we will not be resurrected", ur: "اور ہم دوبارہ نہیں اٹھائے جائیں گے" }, explanation: { en: "Explicit denial of resurrection", ur: "قیامت کا صریح انکار" }, verseRef: "44:35" },
        { term: "فَأْتُوا بِآبَائِنَا إِن كُنتُمْ صَادِقِينَ", meaning: { en: "Then bring [back] our forefathers, if you are truthful", ur: "تو ہمارے باپ دادا کو واپس لاؤ اگر تم سچے ہو" }, explanation: { en: "Their mocking challenge", ur: "ان کا تمسخر آمیز چیلنج" }, verseRef: "44:36" },
        { term: "أَهُمْ خَيْرٌ أَمْ قَوْمُ تُبَّعٍ", meaning: { en: "Are they better or the people of Tubba'?", ur: "کیا یہ بہتر ہیں یا قومِ تبع؟" }, explanation: { en: "Comparison to destroyed Himyarite kingdom", ur: "تباہ شدہ حمیری سلطنت سے موازنہ" }, verseRef: "44:37" },
        { term: "وَالَّذِينَ مِن قَبْلِهِمْ ۚ أَهْلَكْنَاهُمْ", meaning: { en: "And those before them? We destroyed them", ur: "اور ان سے پہلے والوں کو؟ ہم نے انہیں ہلاک کیا" }, explanation: { en: "Pattern of destruction", ur: "تباہی کا نمونہ" }, verseRef: "44:37" },
        { term: "إِنَّهُمْ كَانُوا مُجْرِمِينَ", meaning: { en: "Indeed, they were criminals", ur: "بے شک وہ مجرم تھے" }, explanation: { en: "Reason for their destruction", ur: "ان کی تباہی کی وجہ" }, verseRef: "44:37" }
      ]
    },

    purposefulCreation: {
      name: "Purposeful Creation",
      nameUr: "بامقصد تخلیق",
      nameArabic: "الخلق بالحق",
      color: "#14B8A6",
      concepts: [
        { term: "وَمَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ", meaning: { en: "And We did not create the heavens and earth and what is between them in play", ur: "اور ہم نے آسمانوں اور زمین اور جو ان کے درمیان ہے کو کھیل میں نہیں بنایا" }, explanation: { en: "Creation has serious purpose", ur: "تخلیق کا سنجیدہ مقصد ہے" }, verseRef: "44:38" },
        { term: "مَا خَلَقْنَاهُمَا إِلَّا بِالْحَقِّ", meaning: { en: "We did not create them except in truth", ur: "ہم نے انہیں حق کے ساتھ ہی بنایا" }, explanation: { en: "Creation founded on truth and justice", ur: "تخلیق حق اور عدل پر قائم ہے" }, verseRef: "44:39" },
        { term: "وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ", meaning: { en: "But most of them do not know", ur: "لیکن ان میں سے اکثر نہیں جانتے" }, explanation: { en: "Most people ignorant of this truth", ur: "اکثر لوگ اس حقیقت سے بے خبر" }, verseRef: "44:39" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameUr: "یومِ قیامت",
      nameArabic: "يوم الفصل",
      color: "#EC4899",
      concepts: [
        { term: "إِنَّ يَوْمَ الْفَصْلِ مِيقَاتُهُمْ أَجْمَعِينَ", meaning: { en: "Indeed, the Day of Judgment is their appointment - all of them", ur: "بے شک یومِ فصل ان سب کا وعدہ ہے" }, explanation: { en: "Universal gathering for judgment", ur: "فیصلے کے لیے آفاقی اجتماع" }, verseRef: "44:40" },
        { term: "يَوْمَ لَا يُغْنِي مَوْلًى عَن مَّوْلًى شَيْئًا", meaning: { en: "The Day when no relation will avail a relative at all", ur: "جس دن کوئی دوست کسی دوست کے کام نہ آئے گا" }, explanation: { en: "No intercession without permission", ur: "اجازت کے بغیر کوئی سفارش نہیں" }, verseRef: "44:41" },
        { term: "وَلَا هُمْ يُنصَرُونَ", meaning: { en: "Nor will they be helped", ur: "اور نہ ان کی مدد کی جائے گی" }, explanation: { en: "No external help available", ur: "کوئی بیرونی مدد دستیاب نہیں" }, verseRef: "44:41" },
        { term: "إِلَّا مَن رَّحِمَ اللَّهُ", meaning: { en: "Except those on whom Allah has mercy", ur: "سوائے ان کے جن پر اللہ رحم کرے" }, explanation: { en: "Only Allah's mercy saves", ur: "صرف اللہ کی رحمت بچاتی ہے" }, verseRef: "44:42" },
        { term: "إِنَّهُ هُوَ الْعَزِيزُ الرَّحِيمُ", meaning: { en: "Indeed, He is the Exalted in Might, the Merciful", ur: "بے شک وہ غالب مہربان ہے" }, explanation: { en: "Power combined with mercy", ur: "قدرت اور رحمت کا اجتماع" }, verseRef: "44:42" }
      ]
    },

    treeOfZaqqum: {
      name: "The Tree of Zaqqum",
      nameUr: "زقوم کا درخت",
      nameArabic: "شجرة الزقوم",
      color: "#7C3AED",
      concepts: [
        { term: "إِنَّ شَجَرَتَ الزَّقُّومِ", meaning: { en: "Indeed, the tree of Zaqqum", ur: "بے شک زقوم کا درخت" }, explanation: { en: "Tree in Hell described", ur: "جہنم کے درخت کا بیان" }, verseRef: "44:43" },
        { term: "طَعَامُ الْأَثِيمِ", meaning: { en: "Is food for the sinful", ur: "گنہگاروں کا کھانا ہے" }, explanation: { en: "Forced sustenance of sinners", ur: "گنہگاروں کی جبری خوراک" }, verseRef: "44:44" },
        { term: "كَالْمُهْلِ يَغْلِي فِي الْبُطُونِ", meaning: { en: "Like murky oil, boiling in the bellies", ur: "پگھلی ہوئی دھات کی طرح پیٹوں میں کھولے گا" }, explanation: { en: "Tormenting effect in stomachs", ur: "پیٹوں میں تکلیف دہ اثر" }, verseRef: "44:45" },
        { term: "كَغَلْيِ الْحَمِيمِ", meaning: { en: "Like the boiling of scalding water", ur: "کھولتے ہوئے گرم پانی کے جوش کی طرح" }, explanation: { en: "Intensity of the torment", ur: "عذاب کی شدت" }, verseRef: "44:46" },
        { term: "خُذُوهُ فَاعْتِلُوهُ إِلَىٰ سَوَاءِ الْجَحِيمِ", meaning: { en: "Seize him and drag him into the midst of the Hellfire", ur: "اسے پکڑو اور جہنم کے بیچ میں گھسیٹ لے جاؤ" }, explanation: { en: "Command to angels of punishment", ur: "عذاب کے فرشتوں کو حکم" }, verseRef: "44:47" },
        { term: "ثُمَّ صُبُّوا فَوْقَ رَأْسِهِ مِنْ عَذَابِ الْحَمِيمِ", meaning: { en: "Then pour over his head the torment of scalding water", ur: "پھر اس کے سر پر کھولتے پانی کا عذاب انڈیلو" }, explanation: { en: "Boiling water poured on sinners", ur: "گنہگاروں پر کھولتا پانی ڈالا جائے گا" }, verseRef: "44:48" },
        { term: "ذُقْ إِنَّكَ أَنتَ الْعَزِيزُ الْكَرِيمُ", meaning: { en: "Taste! Indeed, you are the honored, the noble", ur: "چکھو! بے شک تو ہی عزت دار ہے، شریف ہے" }, explanation: { en: "Ironic mockery of their worldly pride", ur: "ان کے دنیاوی فخر کا طنزیہ مذاق" }, verseRef: "44:49" },
        { term: "إِنَّ هَٰذَا مَا كُنتُم بِهِ تَمْتَرُونَ", meaning: { en: "Indeed, this is what you used to dispute", ur: "بے شک یہ وہی ہے جس میں تم شک کرتے تھے" }, explanation: { en: "Confirmation of what they denied", ur: "جس کا وہ انکار کرتے تھے اس کی تصدیق" }, verseRef: "44:50" }
      ]
    },

    paradiseRewards: {
      name: "Paradise and Its Rewards",
      nameUr: "جنت اور اس کے انعامات",
      nameArabic: "الجنة ونعيمها",
      color: "#22C55E",
      concepts: [
        { term: "إِنَّ الْمُتَّقِينَ فِي مَقَامٍ أَمِينٍ", meaning: { en: "Indeed, the righteous will be in a secure place", ur: "بے شک متقین امن کے مقام میں ہوں گے" }, explanation: { en: "Paradise as place of security", ur: "جنت بطور مقامِ امان" }, verseRef: "44:51" },
        { term: "فِي جَنَّاتٍ وَعُيُونٍ", meaning: { en: "In gardens and springs", ur: "باغوں اور چشموں میں" }, explanation: { en: "Gardens with flowing springs", ur: "بہتے چشموں والے باغات" }, verseRef: "44:52" },
        { term: "يَلْبَسُونَ مِن سُندُسٍ وَإِسْتَبْرَقٍ", meaning: { en: "Wearing [garments of] fine silk and brocade", ur: "باریک ریشم اور اطلس پہنے ہوئے" }, explanation: { en: "Luxurious clothing in Paradise", ur: "جنت میں عالیشان لباس" }, verseRef: "44:53" },
        { term: "مُّتَقَابِلِينَ", meaning: { en: "Facing one another", ur: "آمنے سامنے" }, explanation: { en: "Companions enjoying each other's company", ur: "ساتھی ایک دوسرے کی صحبت سے لطف اندوز" }, verseRef: "44:53" },
        { term: "كَذَٰلِكَ وَزَوَّجْنَاهُم بِحُورٍ عِينٍ", meaning: { en: "Thus. And We will marry them to fair women with large eyes", ur: "ایسا ہی ہوگا۔ اور ہم ان کا جوڑا حورانِ عین سے ملائیں گے" }, explanation: { en: "Pure companions in Paradise (Hur al-'In)", ur: "جنت میں پاکیزہ ساتھی (حورِ عین)" }, verseRef: "44:54" },
        { term: "يَدْعُونَ فِيهَا بِكُلِّ فَاكِهَةٍ آمِنِينَ", meaning: { en: "They will call therein for every [kind of] fruit, safe and secure", ur: "وہ وہاں ہر قسم کا پھل منگوائیں گے امن سے" }, explanation: { en: "All fruits available without fear", ur: "بے خوف ہر پھل دستیاب" }, verseRef: "44:55" },
        { term: "لَا يَذُوقُونَ فِيهَا الْمَوْتَ إِلَّا الْمَوْتَةَ الْأُولَىٰ", meaning: { en: "They will not taste death therein except the first death", ur: "وہاں پہلی موت کے سوا انہیں موت نہیں آئے گی" }, explanation: { en: "No death in Paradise - eternal life", ur: "جنت میں موت نہیں - ابدی زندگی" }, verseRef: "44:56" },
        { term: "وَوَقَاهُمْ عَذَابَ الْجَحِيمِ", meaning: { en: "And He will have protected them from the punishment of Hellfire", ur: "اور اللہ نے انہیں دوزخ کے عذاب سے بچا لیا ہوگا" }, explanation: { en: "Saved from Hell", ur: "جہنم سے نجات" }, verseRef: "44:56" },
        { term: "فَضْلًا مِّن رَّبِّكَ", meaning: { en: "As bounty from your Lord", ur: "تمہارے رب کے فضل سے" }, explanation: { en: "All rewards are Allah's favor", ur: "تمام انعامات اللہ کا فضل ہیں" }, verseRef: "44:57" },
        { term: "ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ", meaning: { en: "That is the great attainment", ur: "یہی بڑی کامیابی ہے" }, explanation: { en: "Ultimate success", ur: "حتمی کامیابی" }, verseRef: "44:57" }
      ]
    },

    quranAndProphet: {
      name: "Quran Made Easy and Prophetic Mission",
      nameUr: "قرآن کی آسانی اور نبوی مشن",
      nameArabic: "تيسير القرآن ومهمة النبي",
      color: "#F97316",
      concepts: [
        { term: "فَإِنَّمَا يَسَّرْنَاهُ بِلِسَانِكَ", meaning: { en: "Indeed, We have made it easy in your tongue", ur: "بے شک ہم نے اسے تمہاری زبان میں آسان کیا" }, explanation: { en: "Quran revealed in Arabic for accessibility", ur: "قرآن عربی میں نازل کیا تاکہ آسان ہو" }, verseRef: "44:58" },
        { term: "لَعَلَّهُمْ يَتَذَكَّرُونَ", meaning: { en: "That they might be reminded", ur: "تاکہ وہ نصیحت حاصل کریں" }, explanation: { en: "Purpose - remembrance and reflection", ur: "مقصد - یاددہانی اور غور و فکر" }, verseRef: "44:58" },
        { term: "فَارْتَقِبْ إِنَّهُم مُّرْتَقِبُونَ", meaning: { en: "So watch; indeed, they are watching", ur: "پس انتظار کرو بے شک وہ بھی انتظار کر رہے ہیں" }, explanation: { en: "Mutual waiting - truth will prevail", ur: "باہمی انتظار - حق غالب آئے گا" }, verseRef: "44:59" }
      ]
    }
  },

  relationships: [
    { from: "ليلة مباركة", to: "يفرق كل أمر حكيم", type: "occasion", description: { en: "On the blessed night, all affairs are decreed", ur: "مبارک رات میں تمام معاملات کا فیصلہ ہوتا ہے" } },
    { from: "الدخان", to: "عذاب أليم", type: "nature", description: { en: "The smoke is a painful punishment", ur: "دھواں ایک دردناک عذاب ہے" } },
    { from: "رسول كريم", to: "فرعون", type: "confrontation", description: { en: "Musa confronted Pharaoh with truth", ur: "موسیٰ نے فرعون کو حق سے ٹکرایا" } },
    { from: "اترك البحر رهوا", to: "جند مغرقون", type: "result", description: { en: "Parted sea led to drowning of Pharaoh's army", ur: "سمندر کے پھٹنے سے فرعون کی فوج ڈوب گئی" } },
    { from: "شجرة الزقوم", to: "طعام الأثيم", type: "purpose", description: { en: "Zaqqum is the food of sinners", ur: "زقوم گنہگاروں کا کھانا ہے" } },
    { from: "المتقين", to: "مقام أمين", type: "reward", description: { en: "The righteous earn secure Paradise", ur: "متقین محفوظ جنت حاصل کرتے ہیں" } },
    { from: "فوز عظيم", to: "فضل من ربك", type: "source", description: { en: "Great success comes from Allah's bounty", ur: "عظیم کامیابی اللہ کے فضل سے ہے" } },
    { from: "إنكار البعث", to: "يوم الفصل", type: "reality", description: { en: "What they deny will certainly occur", ur: "جسے وہ جھٹلاتے ہیں وہ ضرور ہو کر رہے گا" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Blessed Night", verses: "44:1-9", description: { en: "Ha-Mim, oath by Quran, Laylat al-Qadr, Tawhid", ur: "حم، قرآن کی قسم، لیلۃ القدر، توحید" } },
      { stage: 2, theme: "The Smoke Sign", verses: "44:10-16", description: { en: "Warning of smoke, people's plea, temporary respite, great seizure", ur: "دھوئیں کی تنبیہ، لوگوں کی فریاد، عارضی مہلت، بڑی پکڑ" } },
      { stage: 3, theme: "Pharaoh's Story", verses: "44:17-33", description: { en: "Musa sent, demand to free Israelites, exodus, drowning, inheritance", ur: "موسیٰ بھیجے گئے، بنی اسرائیل کی آزادی کا مطالبہ، ہجرت، غرق، وراثت" } },
      { stage: 4, theme: "Denial of Resurrection", verses: "44:34-39", description: { en: "Quraysh deny afterlife, Tubba' mentioned, purposeful creation", ur: "قریش کا آخرت سے انکار، تبع کا ذکر، مقصدی تخلیق" } },
      { stage: 5, theme: "Day of Judgment", verses: "44:40-42", description: { en: "Day of Separation, no intercession except by Allah's mercy", ur: "یومِ فصل، اللہ کی رحمت کے بغیر کوئی سفارش نہیں" } },
      { stage: 6, theme: "Punishment of Sinners", verses: "44:43-50", description: { en: "Tree of Zaqqum, boiling drink, mockery of their pride", ur: "زقوم کا درخت، کھولتا مشروب، ان کے فخر کا مذاق" } },
      { stage: 7, theme: "Rewards of Paradise", verses: "44:51-57", description: { en: "Gardens, springs, silk, companions, fruits, eternal life", ur: "باغات، چشمے، ریشم، ساتھی، پھل، ابدی زندگی" } },
      { stage: 8, theme: "Closing Exhortation", verses: "44:58-59", description: { en: "Quran made easy, command to watch", ur: "قرآن آسان کیا گیا، انتظار کا حکم" } }
    ]
  },

  keyTerms: {
    dukhan: {
      arabic: "الدخان",
      transliteration: "ad-dukhān",
      meaning: { en: "The Smoke", ur: "دھواں" },
      significance: { en: "A major eschatological sign, either referring to a severe famine during Prophet's time or a future sign before Day of Judgment", ur: "آخرت کی ایک بڑی نشانی، یا نبی ﷺ کے زمانے میں شدید قحط کا حوالہ یا قیامت سے پہلے کی آنے والی نشانی" },
      verseRef: "44:10"
    },
    laylatMubarakah: {
      arabic: "ليلة مباركة",
      transliteration: "laylat mubārakah",
      meaning: { en: "A blessed night", ur: "ایک مبارک رات" },
      significance: { en: "Identified as Laylat al-Qadr when Quran was revealed and decrees are determined", ur: "لیلۃ القدر کے طور پر پہچانی جاتی ہے جب قرآن نازل ہوا اور فیصلے طے ہوتے ہیں" },
      verseRef: "44:3"
    },
    zaqqum: {
      arabic: "الزقوم",
      transliteration: "az-zaqqūm",
      meaning: { en: "Tree of Zaqqum", ur: "زقوم کا درخت" },
      significance: { en: "A tree in Hell with bitter fruit that torments its eaters", ur: "جہنم کا ایک درخت جس کا کڑوا پھل کھانے والوں کو عذاب دیتا ہے" },
      verseRef: "44:43"
    },
    batshah: {
      arabic: "البطشة الكبرى",
      transliteration: "al-baṭshah al-kubrā",
      meaning: { en: "The Greatest Assault/Seizure", ur: "سب سے بڑی پکڑ" },
      significance: { en: "Either the Battle of Badr or the final Day of Judgment", ur: "غزوۂ بدر یا آخری یومِ قیامت" },
      verseRef: "44:16"
    },
    yawmAlFasl: {
      arabic: "يوم الفصل",
      transliteration: "yawm al-faṣl",
      meaning: { en: "Day of Separation/Decision", ur: "فیصلے کا دن" },
      significance: { en: "Day when truth is separated from falsehood, believers from disbelievers", ur: "جس دن حق باطل سے اور مومن کافروں سے الگ ہوں گے" },
      verseRef: "44:40"
    }
  },

  practicalApplication: {
    applications: [
      { principle: "Value Laylat al-Qadr", how: "Seek the blessed night in Ramadan with worship and supplication", verse: "44:3-4" },
      { principle: "Reflect on creation's purpose", how: "Universe is not play - there is accountability", verse: "44:38-39" },
      { principle: "Learn from Pharaoh", how: "Arrogance leads to destruction despite worldly power", verse: "44:31" },
      { principle: "Material wealth is temporary", how: "Pharaoh's gardens and palaces meant nothing at death", verse: "44:25-28" },
      { principle: "Be among the Muttaqin", how: "Taqwa leads to eternal security and reward", verse: "44:51-56" },
      { principle: "Heed warnings before it's too late", how: "Don't wait until punishment to believe", verse: "44:12-15" },
      { principle: "Trust in ultimate justice", how: "Day of Separation will reveal all truth", verse: "44:40" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "حم", pattern: "Huruf Muqatta'at", effect: { en: "Part of the Ha-Mim series, creating unity among surahs 40-46", ur: "حوامیم سلسلے کا حصہ، سورتوں 40-46 میں وحدت پیدا کرتا ہے" } },
      { feature: "يُفْرَقُ", pattern: "Passive voice", effect: { en: "Emphasizes divine action without specifying agent", ur: "فاعل بتائے بغیر الٰہی فعل پر زور دیتا ہے" } },
      { feature: "ذُقْ", pattern: "Imperative singular", effect: { en: "Personalized address heightening impact of judgment", ur: "ذاتی خطاب جو فیصلے کے اثر کو بڑھاتا ہے" } },
      { feature: "أَنَّىٰ", pattern: "Rhetorical question", effect: { en: "Emphasizes impossibility of late remembrance", ur: "دیر سے نصیحت کی ناممکنیت پر زور" } },
      { feature: "كَالْمُهْلِ", pattern: "Simile", effect: { en: "Vivid imagery of Zaqqum's torment", ur: "زقوم کے عذاب کی جاندار تصویر کشی" } }
    ],
    hamimConnection: { en: "Surah 44 is part of the seven 'Ha-Mim' surahs (40-46), all beginning with these letters and sharing themes of revelation, warning, and the fate of nations.", ur: "سورت 44 سات حوامیم سورتوں (40-46) کا حصہ ہے جو سب ان حروف سے شروع ہوتی ہیں اور وحی، تنبیہ اور قوموں کے انجام کے موضوعات میں مشترک ہیں۔" }
  },

  historicalContext: {
    note: { en: "Ad-Dukhan was revealed in Makkah during a period of intense opposition to the Prophet. The Quraysh denied resurrection, mocked the message, and persecuted believers. The surah warns them through the story of Pharaoh's destruction and prophecies the 'smoke' sign. Some scholars interpret the smoke as the severe famine that afflicted Makkah, during which people saw smoke-like mirages due to extreme hunger, and the 'great seizure' as the Battle of Badr. Others view both as eschatological signs yet to occur.", ur: "الدخان مکہ میں نبی ﷺ کی شدید مخالفت کے دور میں نازل ہوئی۔ قریش نے قیامت کا انکار کیا، پیغام کا مذاق اڑایا اور مومنوں کو ایذائیں دیں۔ سورت فرعون کی تباہی کے قصے سے انہیں خبردار کرتی ہے اور دھوئیں کی نشانی کی پیشگوئی کرتی ہے۔ بعض علماء دھوئیں کی تفسیر مکہ پر آنے والے شدید قحط سے کرتے ہیں جب لوگوں کو بھوک سے دھوئیں جیسے نظارے دکھتے تھے اور بڑی پکڑ سے مراد غزوۂ بدر لیتے ہیں۔ دوسرے دونوں کو آنے والی آخرت کی نشانیاں سمجھتے ہیں۔" }
  },

  uniqueInsight: {
    title: { en: "The Night of Decree and the Day of Separation", ur: "شبِ قدر اور یومِ فصل" },
    insight: { en: "Ad-Dukhan uniquely connects two pivotal moments: Laylat al-Qadr (when Quran was revealed and decrees are determined) and Yawm al-Fasl (when all decrees manifest). This creates a theological bridge between divine knowledge and divine judgment. What Allah decrees on the blessed night will be fully realized on the Day of Separation. The surah moves from the mercy of revelation to the reality of recompense, with Pharaoh's story serving as a historical proof that those who reject guidance face certain destruction. The contrast between the tree of Zaqqum and the gardens of Paradise demonstrates the two ultimate destinations awaiting humanity.", ur: "الدخان دو اہم لمحات کو منفرد طریقے سے جوڑتی ہے: لیلۃ القدر (جب قرآن نازل ہوا اور فیصلے طے ہوتے ہیں) اور یومِ فصل (جب تمام فیصلے ظاہر ہوتے ہیں)۔ یہ الٰہی علم اور الٰہی فیصلے کے درمیان ایک عقائدی پل بناتی ہے۔ اللہ جو مبارک رات میں طے کرتا ہے وہ یومِ فصل میں مکمل طور پر ظاہر ہوگا۔ سورت وحی کی رحمت سے بدلے کی حقیقت کی طرف بڑھتی ہے اور فرعون کا قصہ تاریخی ثبوت ہے کہ ہدایت کے منکرین یقینی تباہی کا سامنا کرتے ہیں۔ زقوم کے درخت اور جنت کے باغات کا تضاد انسانیت کے دو حتمی ٹھکانے واضح کرتا ہے۔" }
  }
};

export default ONTOLOGY;
