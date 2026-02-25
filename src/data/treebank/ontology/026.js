/**
 * Surah Ash-Shu'ara (26) - Ontology of Quranic Concepts
 * The Poets
 * Theme: The Poets, Prophet stories (Musa, Ibrahim, Nuh, Hud, Salih, Lut, Shu'ayb) with repeated refrain, revelation and poets contrast
 */

export const ONTOLOGY = {
  surahId: 26,
  surahName: "Ash-Shu'ara",
  surahNameArabic: "الشعراء",
  revelationType: "Makki",
  totalAyahs: 227,

  categories: {
    quranIntroduction: {
      name: "Introduction to the Quran",
      nameArabic: "مقدمة القرآن",
      color: "#F59E0B",
      icon: "Book",
      concepts: [
        { term: "طسم", meaning: { en: "Ta Sin Mim (disconnected letters)", ur: "طٰسٓمٓ (حروفِ مقطعات)" }, explanation: { en: "Mysterious letters opening the surah", ur: "سورت کے آغاز میں پراسرار حروف" }, verseRef: "26:1" },
        { term: "تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ", meaning: { en: "These are verses of the clear Book", ur: "یہ واضح کتاب کی آیات ہیں" }, explanation: { en: "Quran's clarity emphasized", ur: "قرآن کی وضاحت پر زور" }, verseRef: "26:2" },
        { term: "لَعَلَّكَ بَاخِعٌ نَّفْسَكَ", meaning: { en: "Perhaps you would destroy yourself", ur: "شاید آپ اپنی جان کو ہلاک کر ڈالیں" }, explanation: { en: "Prophet's intense concern for people", ur: "نبی ﷺ کی لوگوں کے لیے شدید فکرمندی" }, verseRef: "26:3" },
        { term: "أَلَّا يَكُونُوا مُؤْمِنِينَ", meaning: { en: "That they will not be believers", ur: "کہ یہ ایمان نہیں لاتے" }, explanation: { en: "Grief over disbelief", ur: "کفر پر غم" }, verseRef: "26:3" },
        { term: "إِن نَّشَأْ نُنَزِّلْ عَلَيْهِم مِّنَ السَّمَاءِ آيَةً", meaning: { en: "If We willed, We could send a sign from heaven", ur: "اگر ہم چاہیں تو آسمان سے ایک نشانی نازل کر دیں" }, explanation: { en: "Allah's power to compel belief", ur: "اللہ کی ایمان لانے پر مجبور کرنے کی قدرت" }, verseRef: "26:4" },
        { term: "فَظَلَّتْ أَعْنَاقُهُمْ لَهَا خَاضِعِينَ", meaning: { en: "Their necks would remain humbled to it", ur: "ان کی گردنیں اس کے آگے جھکی رہتیں" }, explanation: { en: "Overwhelming sign would compel submission", ur: "زبردست نشانی سر تسلیم خم کرا دیتی" }, verseRef: "26:4" }
      ]
    },

    prophetMuhammadComfort: {
      name: "Comfort to Prophet Muhammad",
      nameArabic: "تسلية النبي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَمَا يَأْتِيهِم مِّن ذِكْرٍ مِّنَ الرَّحْمَٰنِ مُحْدَثٍ إِلَّا كَانُوا عَنْهُ مُعْرِضِينَ", meaning: { en: "No new reminder comes to them from the Most Merciful but they turn away", ur: "رحمٰن کی طرف سے کوئی نئی نصیحت نہیں آتی مگر یہ اعراض کرتے ہیں" }, explanation: { en: "Pattern of rejection", ur: "انکار کا مسلسل رویہ" }, verseRef: "26:5" },
        { term: "فَقَدْ كَذَّبُوا", meaning: { en: "They have denied", ur: "انہوں نے جھٹلا دیا" }, explanation: { en: "Confirmation of denial", ur: "تکذیب کی تصدیق" }, verseRef: "26:6" },
        { term: "فَسَيَأْتِيهِمْ أَنبَاءُ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: { en: "News of what they used to mock will come to them", ur: "جس چیز کا مذاق اڑاتے تھے اس کی خبریں ان کے پاس آئیں گی" }, explanation: { en: "Warning of consequences", ur: "نتائج کی تنبیہ" }, verseRef: "26:6" },
        { term: "أَوَلَمْ يَرَوْا إِلَى الْأَرْضِ كَمْ أَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ", meaning: { en: "Have they not seen the earth - how much noble growth We caused", ur: "کیا انہوں نے زمین نہیں دیکھی کہ ہم نے اس میں ہر قسم کی عمدہ نباتات اگائیں" }, explanation: { en: "Signs in vegetation", ur: "نباتات میں نشانیاں" }, verseRef: "26:7" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَةً", meaning: { en: "Indeed in that is a sign", ur: "بے شک اس میں ایک نشانی ہے" }, explanation: { en: "Nature as evidence", ur: "فطرت بطور دلیل" }, verseRef: "26:8" },
        { term: "وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ", meaning: { en: "But most of them were not believers", ur: "لیکن ان میں اکثر ایمان لانے والے نہیں تھے" }, explanation: { en: "Majority reject despite signs", ur: "نشانیوں کے باوجود اکثریت نے انکار کیا" }, verseRef: "26:8" }
      ]
    },

    divineRefrain: {
      name: "The Repeated Refrain",
      nameArabic: "اللازمة المتكررة",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ", meaning: { en: "And indeed, your Lord - He is the Exalted in Might, the Merciful", ur: "اور بے شک تیرا رب ہی غالب اور رحم فرمانے والا ہے" }, explanation: { en: "Central refrain after each story - combines power and mercy", ur: "ہر قصے کے بعد مرکزی ترجیع - قدرت اور رحمت کا امتزاج" }, verseRef: "26:9,68,104,122,140,159,175,191" },
        { term: "الْعَزِيز", meaning: { en: "The Exalted in Might", ur: "غالب، زبردست" }, explanation: { en: "Power to punish deniers", ur: "منکرین کو سزا دینے کی قدرت" }, verseRef: "throughout" },
        { term: "الرَّحِيم", meaning: { en: "The Merciful", ur: "رحم فرمانے والا" }, explanation: { en: "Mercy to save believers", ur: "مومنوں کو بچانے کی رحمت" }, verseRef: "throughout" }
      ]
    },

    musaStoryPart1: {
      name: "Story of Musa - Divine Call",
      nameArabic: "قصة موسى - النداء الإلهي",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَإِذْ نَادَىٰ رَبُّكَ مُوسَىٰ", meaning: { en: "When your Lord called Musa", ur: "جب تیرے رب نے موسیٰ کو پکارا" }, explanation: { en: "Divine calling begins narrative", ur: "الٰہی پکار سے قصے کا آغاز" }, verseRef: "26:10" },
        { term: "أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ", meaning: { en: "Go to the wrongdoing people", ur: "ظالم قوم کے پاس جاؤ" }, explanation: { en: "Mission to oppressors", ur: "ظالموں کی طرف مشن" }, verseRef: "26:10" },
        { term: "قَوْمَ فِرْعَوْنَ أَلَا يَتَّقُونَ", meaning: { en: "The people of Pharaoh - will they not fear Allah?", ur: "فرعون کی قوم - کیا یہ اللہ سے نہیں ڈرتے؟" }, explanation: { en: "Call to God-consciousness", ur: "تقویٰ کی دعوت" }, verseRef: "26:11" },
        { term: "قَالَ رَبِّ إِنِّي أَخَافُ أَن يُكَذِّبُونِ", meaning: { en: "He said: My Lord, I fear they will deny me", ur: "اس نے کہا: اے میرے رب، مجھے ڈر ہے وہ مجھے جھٹلائیں گے" }, explanation: { en: "Musa's concern about rejection", ur: "موسیٰ کی تکذیب کا خدشہ" }, verseRef: "26:12" },
        { term: "وَيَضِيقُ صَدْرِي", meaning: { en: "And my breast will tighten", ur: "اور میرا سینہ تنگ ہوتا ہے" }, explanation: { en: "Anxiety about the mission", ur: "مشن کے بارے میں بے چینی" }, verseRef: "26:13" },
        { term: "وَلَا يَنطَلِقُ لِسَانِي", meaning: { en: "And my tongue will not be fluent", ur: "اور میری زبان نہیں چلتی" }, explanation: { en: "Speech difficulty", ur: "گفتگو میں دشواری" }, verseRef: "26:13" },
        { term: "فَأَرْسِلْ إِلَىٰ هَارُونَ", meaning: { en: "So send for Harun", ur: "تو ہارون کی طرف پیغام بھیج" }, explanation: { en: "Request for help", ur: "مدد کی درخواست" }, verseRef: "26:13" },
        { term: "وَلَهُمْ عَلَيَّ ذَنبٌ فَأَخَافُ أَن يَقْتُلُونِ", meaning: { en: "They have a charge against me, I fear they will kill me", ur: "ان کا مجھ پر ایک جرم ہے، مجھے ڈر ہے وہ مجھے قتل کر دیں گے" }, explanation: { en: "Past incident with Egyptian", ur: "مصری کے ساتھ ماضی کا واقعہ" }, verseRef: "26:14" }
      ]
    },

    musaStoryPart2: {
      name: "Story of Musa - Divine Assurance",
      nameArabic: "قصة موسى - الطمأنينة الإلهية",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "كَلَّا فَاذْهَبَا بِآيَاتِنَا", meaning: { en: "No! Go both of you with Our signs", ur: "ہرگز نہیں! تم دونوں ہماری نشانیاں لے کر جاؤ" }, explanation: { en: "Allah dismisses fears", ur: "اللہ نے خوف دور کیا" }, verseRef: "26:15" },
        { term: "إِنَّا مَعَكُم مُّسْتَمِعُونَ", meaning: { en: "Indeed We are with you, listening", ur: "بے شک ہم تمہارے ساتھ سن رہے ہیں" }, explanation: { en: "Divine companionship promised", ur: "الٰہی معیت کا وعدہ" }, verseRef: "26:15" },
        { term: "فَأْتِيَا فِرْعَوْنَ فَقُولَا إِنَّا رَسُولُ رَبِّ الْعَالَمِينَ", meaning: { en: "Go to Pharaoh and say: We are messengers of the Lord of the worlds", ur: "فرعون کے پاس جاؤ اور کہو: ہم رب العالمین کے رسول ہیں" }, explanation: { en: "Mission statement", ur: "مشن کا بیان" }, verseRef: "26:16" },
        { term: "أَنْ أَرْسِلْ مَعَنَا بَنِي إِسْرَائِيلَ", meaning: { en: "Send with us the Children of Israel", ur: "بنی اسرائیل کو ہمارے ساتھ بھیج دے" }, explanation: { en: "Demand for release", ur: "رہائی کا مطالبہ" }, verseRef: "26:17" }
      ]
    },

    musaStoryPart3: {
      name: "Story of Musa - Confronting Pharaoh",
      nameArabic: "قصة موسى - مواجهة فرعون",
      color: "#EF4444",
      icon: "Zap",
      concepts: [
        { term: "قَالَ أَلَمْ نُرَبِّكَ فِينَا وَلِيدًا", meaning: { en: "Did we not raise you among us as a child?", ur: "کیا ہم نے تمہیں اپنے میں بچپن سے نہیں پالا؟" }, explanation: { en: "Pharaoh's reminder of upbringing", ur: "فرعون کی پرورش کی یاد دہانی" }, verseRef: "26:18" },
        { term: "وَلَبِثْتَ فِينَا مِنْ عُمُرِكَ سِنِينَ", meaning: { en: "And you remained among us years of your life", ur: "اور تم ہمارے میں اپنی عمر کے کئی سال رہے" }, explanation: { en: "Years spent in palace", ur: "محل میں گزارے ہوئے سال" }, verseRef: "26:19" },
        { term: "وَفَعَلْتَ فَعْلَتَكَ الَّتِي فَعَلْتَ", meaning: { en: "And you did your deed which you did", ur: "اور تم نے وہ کام کیا جو تم نے کیا" }, explanation: { en: "Reference to killing Egyptian", ur: "مصری کے قتل کا حوالہ" }, verseRef: "26:20" },
        { term: "وَأَنتَ مِنَ الْكَافِرِينَ", meaning: { en: "And you were ungrateful", ur: "اور تم ناشکروں میں سے تھے" }, explanation: { en: "Pharaoh's accusation", ur: "فرعون کا الزام" }, verseRef: "26:19" },
        { term: "قَالَ فَعَلْتُهَا إِذًا وَأَنَا مِنَ الضَّالِّينَ", meaning: { en: "I did it then when I was astray", ur: "میں نے وہ کام اس وقت کیا جب میں بے خبروں میں سے تھا" }, explanation: { en: "Musa's acknowledgment before guidance", ur: "ہدایت سے پہلے موسیٰ کا اعتراف" }, verseRef: "26:20" },
        { term: "فَفَرَرْتُ مِنكُمْ لَمَّا خِفْتُكُمْ", meaning: { en: "So I fled from you when I feared you", ur: "تو میں تم سے بھاگ گیا جب مجھے تم سے ڈر لگا" }, explanation: { en: "Flight to Madyan", ur: "مدین کی طرف فرار" }, verseRef: "26:21" },
        { term: "فَوَهَبَ لِي رَبِّي حُكْمًا", meaning: { en: "Then my Lord granted me wisdom", ur: "پھر میرے رب نے مجھے حکمت عطا فرمائی" }, explanation: { en: "Divine gift of prophethood", ur: "نبوت کا الٰہی عطیہ" }, verseRef: "26:21" },
        { term: "وَجَعَلَنِي مِنَ الْمُرْسَلِينَ", meaning: { en: "And made me one of the messengers", ur: "اور مجھے رسولوں میں سے بنایا" }, explanation: { en: "Prophet status", ur: "نبوت کا مقام" }, verseRef: "26:21" }
      ]
    },

    musaStoryPart4: {
      name: "Story of Musa - Rebutting Pharaoh",
      nameArabic: "قصة موسى - رد موسى على فرعون",
      color: "#3B82F6",
      icon: "MessageCircle",
      concepts: [
        { term: "وَتِلْكَ نِعْمَةٌ تَمُنُّهَا عَلَيَّ أَنْ عَبَّدتَّ بَنِي إِسْرَائِيلَ", meaning: { en: "And is this a favor you remind me of - that you enslaved Israel?", ur: "یہ کون سا احسان ہے جو تم مجھ پر جتاتے ہو کہ تم نے بنی اسرائیل کو غلام بنایا؟" }, explanation: { en: "Musa exposes the irony", ur: "موسیٰ نے ستم ظریفی کو بے نقاب کیا" }, verseRef: "26:22" },
        { term: "قَالَ فِرْعَوْنُ وَمَا رَبُّ الْعَالَمِينَ", meaning: { en: "Pharaoh said: And what is the Lord of the worlds?", ur: "فرعون نے کہا: رب العالمین کیا ہے؟" }, explanation: { en: "Pharaoh's challenge", ur: "فرعون کا چیلنج" }, verseRef: "26:23" },
        { term: "قَالَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا", meaning: { en: "He said: Lord of heavens and earth and what is between", ur: "اس نے کہا: آسمانوں اور زمین اور جو ان کے درمیان ہے سب کا رب" }, explanation: { en: "Musa's description of Allah", ur: "موسیٰ کا اللہ کا تعارف" }, verseRef: "26:24" },
        { term: "إِن كُنتُم مُّوقِنِينَ", meaning: { en: "If you are certain", ur: "اگر تمہیں یقین ہو" }, explanation: { en: "Challenge to reflect", ur: "غور و فکر کی دعوت" }, verseRef: "26:24" },
        { term: "قَالَ لِمَنْ حَوْلَهُ أَلَا تَسْتَمِعُونَ", meaning: { en: "He said to those around: Do you not hear?", ur: "اس نے اپنے اردگرد والوں سے کہا: کیا تم سنتے نہیں؟" }, explanation: { en: "Pharaoh mocks Musa", ur: "فرعون نے موسیٰ کا مذاق اڑایا" }, verseRef: "26:25" },
        { term: "قَالَ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ", meaning: { en: "He said: Your Lord and Lord of your forefathers", ur: "اس نے کہا: تمہارا اور تمہارے اگلے باپ دادا کا رب" }, explanation: { en: "Musa expands definition", ur: "موسیٰ نے تعریف وسیع کی" }, verseRef: "26:26" },
        { term: "قَالَ إِنَّ رَسُولَكُمُ الَّذِي أُرْسِلَ إِلَيْكُمْ لَمَجْنُونٌ", meaning: { en: "He said: Your messenger sent to you is mad", ur: "اس نے کہا: تمہارا یہ رسول جو تمہاری طرف بھیجا گیا ہے پاگل ہے" }, explanation: { en: "Pharaoh's insult", ur: "فرعون کی توہین" }, verseRef: "26:27" },
        { term: "قَالَ رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ وَمَا بَيْنَهُمَا", meaning: { en: "He said: Lord of East and West and what is between", ur: "اس نے کہا: مشرق اور مغرب اور جو ان کے درمیان ہے سب کا رب" }, explanation: { en: "Musa's third description", ur: "موسیٰ کا تیسرا تعارف" }, verseRef: "26:28" },
        { term: "إِن كُنتُمْ تَعْقِلُونَ", meaning: { en: "If you use reason", ur: "اگر تم عقل رکھتے ہو" }, explanation: { en: "Appeal to intellect", ur: "عقل سے سوچنے کی دعوت" }, verseRef: "26:28" }
      ]
    },

    musaStoryPart5: {
      name: "Story of Musa - Signs and Magicians",
      nameArabic: "قصة موسى - الآيات والسحرة",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "قَالَ لَئِنِ اتَّخَذْتَ إِلَٰهًا غَيْرِي لَأَجْعَلَنَّكَ مِنَ الْمَسْجُونِينَ", meaning: { en: "He said: If you take a god other than me, I will imprison you", ur: "اس نے کہا: اگر تم نے میرے سوا کوئی معبود بنایا تو میں تمہیں قیدیوں میں شامل کر دوں گا" }, explanation: { en: "Pharaoh's threat", ur: "فرعون کی دھمکی" }, verseRef: "26:29" },
        { term: "قَالَ أَوَلَوْ جِئْتُكَ بِشَيْءٍ مُّبِينٍ", meaning: { en: "He said: Even if I brought you clear proof?", ur: "اس نے کہا: اگرچہ میں تمہارے پاس واضح ثبوت لاؤں؟" }, explanation: { en: "Musa offers evidence", ur: "موسیٰ نے دلیل پیش کی" }, verseRef: "26:30" },
        { term: "فَأَلْقَىٰ عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُّبِينٌ", meaning: { en: "So he threw his staff and it became a clear serpent", ur: "تو اس نے عصا پھینکا اور وہ واضح اژدہا بن گیا" }, explanation: { en: "First miracle", ur: "پہلا معجزہ" }, verseRef: "26:32" },
        { term: "وَنَزَعَ يَدَهُ فَإِذَا هِيَ بَيْضَاءُ لِلنَّاظِرِينَ", meaning: { en: "He drew out his hand and it was white for beholders", ur: "اس نے اپنا ہاتھ نکالا تو وہ دیکھنے والوں کے لیے سفید چمکدار تھا" }, explanation: { en: "Second miracle", ur: "دوسرا معجزہ" }, verseRef: "26:33" },
        { term: "قَالَ لِلْمَلَإِ حَوْلَهُ إِنَّ هَٰذَا لَسَاحِرٌ عَلِيمٌ", meaning: { en: "He said to the eminent ones: This is a learned magician", ur: "اس نے اعیان سے کہا: یہ تو ایک ماہر جادوگر ہے" }, explanation: { en: "Pharaoh's dismissal as magic", ur: "فرعون نے جادو کہہ کر ٹال دیا" }, verseRef: "26:34" },
        { term: "يُرِيدُ أَن يُخْرِجَكُم مِّنْ أَرْضِكُم بِسِحْرِهِ", meaning: { en: "He wants to drive you out of your land by his magic", ur: "یہ اپنے جادو سے تمہیں تمہاری زمین سے نکالنا چاہتا ہے" }, explanation: { en: "Political accusation", ur: "سیاسی الزام" }, verseRef: "26:35" },
        { term: "قَالُوا أَرْجِهْ وَأَخَاهُ وَابْعَثْ فِي الْمَدَائِنِ حَاشِرِينَ", meaning: { en: "They said: Postpone him and his brother and send gatherers to the cities", ur: "انہوں نے کہا: اسے اور اس کے بھائی کو مہلت دو اور شہروں میں جمع کرنے والے بھیجو" }, explanation: { en: "Plan to summon magicians", ur: "جادوگروں کو بلانے کا منصوبہ" }, verseRef: "26:36" },
        { term: "يَأْتُوكَ بِكُلِّ سَحَّارٍ عَلِيمٍ", meaning: { en: "To bring every skilled magician", ur: "ہر ماہر جادوگر کو لانے کے لیے" }, explanation: { en: "Gathering magicians", ur: "جادوگروں کو جمع کرنا" }, verseRef: "26:37" }
      ]
    },

    musaStoryPart6: {
      name: "Story of Musa - The Contest",
      nameArabic: "قصة موسى - المباراة",
      color: "#F59E0B",
      icon: "Zap",
      concepts: [
        { term: "فَجُمِعَ السَّحَرَةُ لِمِيقَاتِ يَوْمٍ مَّعْلُومٍ", meaning: { en: "So the magicians were assembled for appointment of a known day", ur: "تو جادوگر ایک مقررہ دن کی میعاد پر جمع کیے گئے" }, explanation: { en: "Public contest arranged", ur: "عوامی مقابلے کا بندوبست" }, verseRef: "26:38" },
        { term: "وَقِيلَ لِلنَّاسِ هَلْ أَنتُم مُّجْتَمِعُونَ", meaning: { en: "And it was said to people: Will you assemble?", ur: "لوگوں سے کہا گیا: کیا تم جمع ہوتے ہو؟" }, explanation: { en: "Public gathering called", ur: "عوامی اجتماع بلایا گیا" }, verseRef: "26:39" },
        { term: "لَعَلَّنَا نَتَّبِعُ السَّحَرَةَ إِن كَانُوا هُمُ الْغَالِبِينَ", meaning: { en: "Perhaps we will follow the magicians if they prevail", ur: "شاید ہم جادوگروں کی پیروی کریں اگر وہ غالب آئے" }, explanation: { en: "Stakes of the contest", ur: "مقابلے کی اہمیت" }, verseRef: "26:40" },
        { term: "قَالُوا لِفِرْعَوْنَ أَئِنَّ لَنَا لَأَجْرًا إِن كُنَّا نَحْنُ الْغَالِبِينَ", meaning: { en: "They said to Pharaoh: Is there a reward if we prevail?", ur: "انہوں نے فرعون سے کہا: کیا ہمارے لیے اجر ہے اگر ہم غالب آئے؟" }, explanation: { en: "Magicians bargain", ur: "جادوگروں کا سودا" }, verseRef: "26:41" },
        { term: "قَالَ نَعَمْ وَإِنَّكُمْ إِذًا لَّمِنَ الْمُقَرَّبِينَ", meaning: { en: "He said: Yes, and you will be among those near me", ur: "اس نے کہا: ہاں، اور تم میرے مقربین میں سے ہو گے" }, explanation: { en: "Promise of status", ur: "مقام کا وعدہ" }, verseRef: "26:42" },
        { term: "قَالَ لَهُم مُّوسَىٰ أَلْقُوا مَا أَنتُم مُّلْقُونَ", meaning: { en: "Musa said: Throw what you will throw", ur: "موسیٰ نے کہا: جو پھینکنا ہے پھینک دو" }, explanation: { en: "Musa's confidence", ur: "موسیٰ کا اعتماد" }, verseRef: "26:43" },
        { term: "فَأَلْقَوْا حِبَالَهُمْ وَعِصِيَّهُمْ", meaning: { en: "So they threw their ropes and staffs", ur: "تو انہوں نے اپنی رسیاں اور لاٹھیاں پھینکیں" }, explanation: { en: "Magicians' trick", ur: "جادوگروں کا داؤ" }, verseRef: "26:44" },
        { term: "وَقَالُوا بِعِزَّةِ فِرْعَوْنَ إِنَّا لَنَحْنُ الْغَالِبُونَ", meaning: { en: "And said: By Pharaoh's might, we will prevail", ur: "اور کہا: فرعون کی عزت کی قسم، ہم ہی غالب آئیں گے" }, explanation: { en: "Swearing by Pharaoh", ur: "فرعون کی قسم" }, verseRef: "26:44" },
        { term: "فَأَلْقَىٰ مُوسَىٰ عَصَاهُ فَإِذَا هِيَ تَلْقَفُ مَا يَأْفِكُونَ", meaning: { en: "Then Musa threw his staff and it swallowed what they faked", ur: "پھر موسیٰ نے اپنا عصا پھینکا تو وہ ان کی بنائی ہوئی چیزوں کو نگل گیا" }, explanation: { en: "Truth devours falsehood", ur: "حق نے باطل کو نگل لیا" }, verseRef: "26:45" }
      ]
    },

    musaStoryPart7: {
      name: "Story of Musa - Magicians' Submission",
      nameArabic: "قصة موسى - إسلام السحرة",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        { term: "فَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ", meaning: { en: "So the magicians fell in prostration", ur: "تو جادوگر سجدے میں گر پڑے" }, explanation: { en: "Immediate submission to truth", ur: "حق کے سامنے فوری سر تسلیم خم" }, verseRef: "26:46" },
        { term: "قَالُوا آمَنَّا بِرَبِّ الْعَالَمِينَ", meaning: { en: "They said: We believe in the Lord of the worlds", ur: "انہوں نے کہا: ہم رب العالمین پر ایمان لائے" }, explanation: { en: "Declaration of faith", ur: "ایمان کا اعلان" }, verseRef: "26:47" },
        { term: "رَبِّ مُوسَىٰ وَهَارُونَ", meaning: { en: "Lord of Musa and Harun", ur: "موسیٰ اور ہارون کا رب" }, explanation: { en: "Specifying their belief", ur: "اپنے ایمان کی تصریح" }, verseRef: "26:48" },
        { term: "قَالَ آمَنتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ", meaning: { en: "He said: You believed before I gave permission", ur: "اس نے کہا: تم نے میری اجازت سے پہلے ایمان لے آئے" }, explanation: { en: "Pharaoh's outrage", ur: "فرعون کا غصہ" }, verseRef: "26:49" },
        { term: "إِنَّهُ لَكَبِيرُكُمُ الَّذِي عَلَّمَكُمُ السِّحْرَ", meaning: { en: "He is your chief who taught you magic", ur: "یہ تمہارا بڑا ہے جس نے تمہیں جادو سکھایا" }, explanation: { en: "Pharaoh's conspiracy theory", ur: "فرعون کی سازشی تھیوری" }, verseRef: "26:49" },
        { term: "فَلَسَوْفَ تَعْلَمُونَ", meaning: { en: "So you will know", ur: "تو تم جلد جان لو گے" }, explanation: { en: "Pharaoh's ominous warning", ur: "فرعون کی منحوس دھمکی" }, verseRef: "26:49" },
        { term: "لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَافٍ", meaning: { en: "I will cut your hands and feet on opposite sides", ur: "میں تمہارے ہاتھ اور پاؤں الٹے سیدھے کاٹ دوں گا" }, explanation: { en: "Torture threat", ur: "اذیت کی دھمکی" }, verseRef: "26:50" },
        { term: "وَلَأُصَلِّبَنَّكُمْ أَجْمَعِينَ", meaning: { en: "And I will crucify you all", ur: "اور میں تم سب کو سولی دے دوں گا" }, explanation: { en: "Death threat", ur: "موت کی دھمکی" }, verseRef: "26:50" }
      ]
    },

    musaStoryPart8: {
      name: "Story of Musa - Magicians' Firmness",
      nameArabic: "قصة موسى - ثبات السحرة",
      color: "#10B981",
      icon: "Shield",
      concepts: [
        { term: "قَالُوا لَا ضَيْرَ", meaning: { en: "They said: No harm", ur: "انہوں نے کہا: کوئی نقصان نہیں" }, explanation: { en: "Fearless response", ur: "بے خوف جواب" }, verseRef: "26:50" },
        { term: "إِنَّا إِلَىٰ رَبِّنَا مُنقَلِبُونَ", meaning: { en: "Indeed to our Lord we will return", ur: "بے شک ہم اپنے رب کی طرف لوٹنے والے ہیں" }, explanation: { en: "Trust in afterlife", ur: "آخرت پر بھروسا" }, verseRef: "26:50" },
        { term: "إِنَّا نَطْمَعُ أَن يَغْفِرَ لَنَا رَبُّنَا خَطَايَانَا", meaning: { en: "We hope our Lord forgives our sins", ur: "ہمیں امید ہے ہمارا رب ہماری خطائیں معاف کر دے" }, explanation: { en: "Hope for forgiveness", ur: "مغفرت کی امید" }, verseRef: "26:51" },
        { term: "أَن كُنَّا أَوَّلَ الْمُؤْمِنِينَ", meaning: { en: "Since we are the first believers", ur: "کیونکہ ہم پہلے ایمان لانے والے ہیں" }, explanation: { en: "Pride in being first to believe", ur: "پہلے ایمان لانے پر فخر" }, verseRef: "26:51" }
      ]
    },

    musaStoryPart9: {
      name: "Story of Musa - Exodus",
      nameArabic: "قصة موسى - الخروج",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنْ أَسْرِ بِعِبَادِي", meaning: { en: "We revealed to Musa: Travel by night with My servants", ur: "ہم نے موسیٰ کو وحی کی: رات کو میرے بندوں کو لے کر چلو" }, explanation: { en: "Command to leave Egypt", ur: "مصر سے نکلنے کا حکم" }, verseRef: "26:52" },
        { term: "إِنَّكُم مُّتَّبَعُونَ", meaning: { en: "You will be pursued", ur: "تمہارا پیچھا کیا جائے گا" }, explanation: { en: "Warning of pursuit", ur: "پیچھا کرنے کی تنبیہ" }, verseRef: "26:52" },
        { term: "فَأَرْسَلَ فِرْعَوْنُ فِي الْمَدَائِنِ حَاشِرِينَ", meaning: { en: "So Pharaoh sent gatherers to the cities", ur: "تو فرعون نے شہروں میں جمع کرنے والے بھیجے" }, explanation: { en: "Pharaoh mobilizes army", ur: "فرعون نے فوج جمع کی" }, verseRef: "26:53" },
        { term: "إِنَّ هَٰؤُلَاءِ لَشِرْذِمَةٌ قَلِيلُونَ", meaning: { en: "Indeed these are a small band", ur: "بے شک یہ ایک چھوٹی سی جماعت ہے" }, explanation: { en: "Pharaoh's dismissal", ur: "فرعون کی تحقیر" }, verseRef: "26:54" },
        { term: "وَإِنَّهُمْ لَنَا لَغَائِظُونَ", meaning: { en: "And they have enraged us", ur: "اور انہوں نے ہمیں غصے میں لایا ہے" }, explanation: { en: "Pharaoh's anger", ur: "فرعون کا غصہ" }, verseRef: "26:55" },
        { term: "وَإِنَّا لَجَمِيعٌ حَاذِرُونَ", meaning: { en: "And we are all cautious", ur: "اور ہم سب چوکنے ہیں" }, explanation: { en: "Military preparation", ur: "فوجی تیاری" }, verseRef: "26:56" },
        { term: "فَأَخْرَجْنَاهُم مِّن جَنَّاتٍ وَعُيُونٍ", meaning: { en: "So We removed them from gardens and springs", ur: "تو ہم نے انہیں باغوں اور چشموں سے نکال دیا" }, explanation: { en: "Egypt's loss of Pharaoh's people", ur: "فرعون کی قوم سے مصر کا نقصان" }, verseRef: "26:57" },
        { term: "وَكُنُوزٍ وَمَقَامٍ كَرِيمٍ", meaning: { en: "And treasures and noble position", ur: "اور خزانوں اور عزت دار مقام سے" }, explanation: { en: "Worldly loss", ur: "دنیاوی نقصان" }, verseRef: "26:58" },
        { term: "كَذَٰلِكَ وَأَوْرَثْنَاهَا بَنِي إِسْرَائِيلَ", meaning: { en: "Thus, and We made Israel inherit it", ur: "اسی طرح اور ہم نے بنی اسرائیل کو اس کا وارث بنا دیا" }, explanation: { en: "Transfer of inheritance", ur: "وراثت کی منتقلی" }, verseRef: "26:59" }
      ]
    },

    musaStoryPart10: {
      name: "Story of Musa - Sea Crossing",
      nameArabic: "قصة موسى - عبور البحر",
      color: "#06B6D4",
      icon: "Sparkles",
      concepts: [
        { term: "فَأَتْبَعُوهُم مُّشْرِقِينَ", meaning: { en: "So they pursued them at sunrise", ur: "تو انہوں نے سورج نکلتے وقت ان کا پیچھا کیا" }, explanation: { en: "Chase at dawn", ur: "فجر کے وقت پیچھا" }, verseRef: "26:60" },
        { term: "فَلَمَّا تَرَاءَى الْجَمْعَانِ", meaning: { en: "When the two groups saw each other", ur: "جب دونوں گروہ آمنے سامنے آئے" }, explanation: { en: "Confrontation moment", ur: "ٹکراؤ کا لمحہ" }, verseRef: "26:61" },
        { term: "قَالَ أَصْحَابُ مُوسَىٰ إِنَّا لَمُدْرَكُونَ", meaning: { en: "Companions of Musa said: We will be overtaken", ur: "موسیٰ کے ساتھیوں نے کہا: ہم پکڑے جائیں گے" }, explanation: { en: "Moment of fear", ur: "خوف کا لمحہ" }, verseRef: "26:61" },
        { term: "قَالَ كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ", meaning: { en: "He said: No! My Lord is with me, He will guide me", ur: "اس نے کہا: ہرگز نہیں! میرا رب میرے ساتھ ہے، وہ مجھے رہنمائی کرے گا" }, explanation: { en: "Musa's absolute trust", ur: "موسیٰ کا مکمل بھروسا" }, verseRef: "26:62" },
        { term: "فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنِ اضْرِب بِّعَصَاكَ الْبَحْرَ", meaning: { en: "We revealed to Musa: Strike the sea with your staff", ur: "ہم نے موسیٰ کو وحی کی: سمندر پر اپنا عصا مارو" }, explanation: { en: "Command to part sea", ur: "سمندر چیرنے کا حکم" }, verseRef: "26:63" },
        { term: "فَانفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ", meaning: { en: "So it parted, each part like a great mountain", ur: "تو وہ پھٹ گیا، ہر حصہ بڑے پہاڑ کی طرح" }, explanation: { en: "Sea splits into towering walls", ur: "سمندر بلند دیواروں میں بٹ گیا" }, verseRef: "26:63" },
        { term: "وَأَزْلَفْنَا ثَمَّ الْآخَرِينَ", meaning: { en: "And We brought near the others there", ur: "اور ہم نے وہاں دوسروں کو قریب لے آئے" }, explanation: { en: "Pharaoh's army approaches", ur: "فرعون کی فوج قریب آئی" }, verseRef: "26:64" },
        { term: "وَأَنجَيْنَا مُوسَىٰ وَمَن مَّعَهُ أَجْمَعِينَ", meaning: { en: "And We saved Musa and all those with him", ur: "اور ہم نے موسیٰ اور سب ساتھیوں کو بچا لیا" }, explanation: { en: "Believers saved", ur: "مومنین بچا لیے گئے" }, verseRef: "26:65" },
        { term: "ثُمَّ أَغْرَقْنَا الْآخَرِينَ", meaning: { en: "Then We drowned the others", ur: "پھر ہم نے باقیوں کو ڈبو دیا" }, explanation: { en: "Pharaoh's army destroyed", ur: "فرعون کی فوج تباہ ہوئی" }, verseRef: "26:66" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَةً وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ", meaning: { en: "In that is a sign, but most were not believers", ur: "اس میں نشانی ہے لیکن اکثر ایمان نہیں لائے" }, explanation: { en: "Lesson and reality", ur: "عبرت اور حقیقت" }, verseRef: "26:67" }
      ]
    },

    ibrahimStory: {
      name: "Story of Ibrahim",
      nameArabic: "قصة إبراهيم",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَاتْلُ عَلَيْهِمْ نَبَأَ إِبْرَاهِيمَ", meaning: { en: "Recite to them the story of Ibrahim", ur: "ان کو ابراہیم کا قصہ سناؤ" }, explanation: { en: "Command to narrate", ur: "بیان کرنے کا حکم" }, verseRef: "26:69" },
        { term: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِ مَا تَعْبُدُونَ", meaning: { en: "When he said to his father and people: What do you worship?", ur: "جب اس نے اپنے باپ اور قوم سے کہا: تم کس کی عبادت کرتے ہو؟" }, explanation: { en: "Opening challenge", ur: "پہلا چیلنج" }, verseRef: "26:70" },
        { term: "قَالُوا نَعْبُدُ أَصْنَامًا فَنَظَلُّ لَهَا عَاكِفِينَ", meaning: { en: "They said: We worship idols and remain devoted to them", ur: "انہوں نے کہا: ہم بتوں کی پوجا کرتے ہیں اور ان کے لیے عبادت گزار رہتے ہیں" }, explanation: { en: "Confession of idolatry", ur: "بت پرستی کا اعتراف" }, verseRef: "26:71" },
        { term: "قَالَ هَلْ يَسْمَعُونَكُمْ إِذْ تَدْعُونَ", meaning: { en: "He said: Do they hear you when you call?", ur: "اس نے کہا: کیا وہ تمہاری سنتے ہیں جب تم پکارتے ہو؟" }, explanation: { en: "First logical question", ur: "پہلا منطقی سوال" }, verseRef: "26:72" },
        { term: "أَوْ يَنفَعُونَكُمْ أَوْ يَضُرُّونَ", meaning: { en: "Or do they benefit or harm you?", ur: "یا تمہیں فائدہ یا نقصان پہنچاتے ہیں؟" }, explanation: { en: "Second logical question", ur: "دوسرا منطقی سوال" }, verseRef: "26:73" },
        { term: "قَالُوا بَلْ وَجَدْنَا آبَاءَنَا كَذَٰلِكَ يَفْعَلُونَ", meaning: { en: "They said: We found our fathers doing so", ur: "انہوں نے کہا: ہم نے اپنے باپ دادا کو ایسا کرتے پایا" }, explanation: { en: "Appeal to tradition", ur: "روایت کی دہائی" }, verseRef: "26:74" },
        { term: "قَالَ أَفَرَأَيْتُم مَّا كُنتُمْ تَعْبُدُونَ", meaning: { en: "He said: Have you considered what you worship?", ur: "اس نے کہا: کیا تم نے غور کیا جس کی تم عبادت کرتے ہو؟" }, explanation: { en: "Ibrahim challenges tradition", ur: "ابراہیم نے روایت کو چیلنج کیا" }, verseRef: "26:75" },
        { term: "أَنتُمْ وَآبَاؤُكُمُ الْأَقْدَمُونَ", meaning: { en: "You and your ancient forefathers?", ur: "تم اور تمہارے پرانے باپ دادا؟" }, explanation: { en: "Questioning generations", ur: "نسلوں پر سوال" }, verseRef: "26:76" },
        { term: "فَإِنَّهُمْ عَدُوٌّ لِّي إِلَّا رَبَّ الْعَالَمِينَ", meaning: { en: "They are enemies to me, except the Lord of the worlds", ur: "وہ سب میرے دشمن ہیں سوائے رب العالمین کے" }, explanation: { en: "Rejection of false gods", ur: "جھوٹے معبودوں کا انکار" }, verseRef: "26:77" }
      ]
    },

    ibrahimPraise: {
      name: "Ibrahim's Praise of Allah",
      nameArabic: "ثناء إبراهيم على الله",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "الَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ", meaning: { en: "Who created me, and He guides me", ur: "جس نے مجھے پیدا کیا، وہی مجھے ہدایت دیتا ہے" }, explanation: { en: "Creator and Guide", ur: "خالق اور ہادی" }, verseRef: "26:78" },
        { term: "وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ", meaning: { en: "Who feeds me and gives me drink", ur: "جو مجھے کھلاتا اور پلاتا ہے" }, explanation: { en: "Provider of sustenance", ur: "رزق دینے والا" }, verseRef: "26:79" },
        { term: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", meaning: { en: "When I am ill, He heals me", ur: "جب میں بیمار ہوتا ہوں تو وہی شفا دیتا ہے" }, explanation: { en: "Healer - illness attributed to self, healing to Allah", ur: "شفا دینے والا - بیماری خود کی طرف، شفا اللہ کی طرف" }, verseRef: "26:80" },
        { term: "وَالَّذِي يُمِيتُنِي ثُمَّ يُحْيِينِ", meaning: { en: "Who will cause me to die and then bring me back", ur: "جو مجھے موت دے گا اور پھر زندہ کرے گا" }, explanation: { en: "Lord of death and resurrection", ur: "موت اور حیات کا مالک" }, verseRef: "26:81" },
        { term: "وَالَّذِي أَطْمَعُ أَن يَغْفِرَ لِي خَطِيئَتِي يَوْمَ الدِّينِ", meaning: { en: "Who I hope will forgive my sins on Judgment Day", ur: "جس سے مجھے امید ہے کہ قیامت کے دن میرے گناہ معاف کرے" }, explanation: { en: "Forgiver on Day of Judgment", ur: "قیامت کے دن معاف کرنے والا" }, verseRef: "26:82" }
      ]
    },

    ibrahimDua: {
      name: "Ibrahim's Supplication",
      nameArabic: "دعاء إبراهيم",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ", meaning: { en: "My Lord, grant me wisdom and join me with the righteous", ur: "اے میرے رب، مجھے حکمت دے اور نیک لوگوں میں شامل کر" }, explanation: { en: "Prayer for wisdom and company", ur: "حکمت اور صحبت کی دعا" }, verseRef: "26:83" },
        { term: "وَاجْعَل لِّي لِسَانَ صِدْقٍ فِي الْآخِرِينَ", meaning: { en: "And grant me a truthful mention among later generations", ur: "اور بعد کے لوگوں میں میرا سچا ذکر رکھ" }, explanation: { en: "Prayer for lasting good reputation", ur: "پائیدار نیک نامی کی دعا" }, verseRef: "26:84" },
        { term: "وَاجْعَلْنِي مِن وَرَثَةِ جَنَّةِ النَّعِيمِ", meaning: { en: "Make me among the inheritors of Paradise", ur: "مجھے جنت النعیم کے وارثوں میں شامل فرما" }, explanation: { en: "Prayer for Paradise", ur: "جنت کی دعا" }, verseRef: "26:85" },
        { term: "وَاغْفِرْ لِأَبِي إِنَّهُ كَانَ مِنَ الضَّالِّينَ", meaning: { en: "And forgive my father, he was among the astray", ur: "اور میرے باپ کو معاف فرما، وہ گمراہوں میں سے تھا" }, explanation: { en: "Prayer for father - before prohibition", ur: "باپ کے لیے دعا - ممانعت سے پہلے" }, verseRef: "26:86" },
        { term: "وَلَا تُخْزِنِي يَوْمَ يُبْعَثُونَ", meaning: { en: "Do not disgrace me on the Day they are resurrected", ur: "مجھے اس دن رسوا نہ کرنا جب لوگ اٹھائے جائیں گے" }, explanation: { en: "Prayer for dignity on Judgment Day", ur: "قیامت کے دن عزت کی دعا" }, verseRef: "26:87" },
        { term: "يَوْمَ لَا يَنفَعُ مَالٌ وَلَا بَنُونَ", meaning: { en: "Day when neither wealth nor children will benefit", ur: "جس دن مال و اولاد کام نہیں آئیں گے" }, explanation: { en: "Description of Judgment Day", ur: "قیامت کے دن کی تصویر" }, verseRef: "26:88" },
        { term: "إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ", meaning: { en: "Except one who comes to Allah with a sound heart", ur: "مگر وہ جو اللہ کے پاس سلامت دل لے کر آئے" }, explanation: { en: "The only thing that benefits - pure heart", ur: "صرف ایک چیز فائدہ دیتی ہے - پاک دل" }, verseRef: "26:89" }
      ]
    },

    paradiseAndHell: {
      name: "Paradise and Hell",
      nameArabic: "الجنة والنار",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "وَأُزْلِفَتِ الْجَنَّةُ لِلْمُتَّقِينَ", meaning: { en: "Paradise will be brought near the God-fearing", ur: "جنت متقیوں کے قریب لائی جائے گی" }, explanation: { en: "Paradise approaches the pious", ur: "جنت پرہیزگاروں کے قریب آتی ہے" }, verseRef: "26:90" },
        { term: "وَبُرِّزَتِ الْجَحِيمُ لِلْغَاوِينَ", meaning: { en: "Hellfire will be displayed for the deviators", ur: "جہنم گمراہوں کے لیے ظاہر کی جائے گی" }, explanation: { en: "Hell exposed to sinners", ur: "جہنم گناہگاروں کو دکھائی گئی" }, verseRef: "26:91" },
        { term: "وَقِيلَ لَهُمْ أَيْنَ مَا كُنتُمْ تَعْبُدُونَ", meaning: { en: "They will be asked: Where are those you worshipped?", ur: "ان سے پوچھا جائے گا: کہاں ہیں وہ جن کی تم عبادت کرتے تھے؟" }, explanation: { en: "Question about false gods", ur: "جھوٹے معبودوں کے بارے میں سوال" }, verseRef: "26:92" },
        { term: "مِن دُونِ اللَّهِ هَلْ يَنصُرُونَكُمْ أَوْ يَنتَصِرُونَ", meaning: { en: "Besides Allah? Can they help you or themselves?", ur: "اللہ کے سوا؟ کیا وہ تمہاری یا اپنی مدد کر سکتے ہیں؟" }, explanation: { en: "Helplessness of idols", ur: "بتوں کی بے بسی" }, verseRef: "26:93" },
        { term: "فَكُبْكِبُوا فِيهَا هُمْ وَالْغَاوُونَ", meaning: { en: "They will be thrown into it, they and the deviators", ur: "وہ اس میں پھینکے جائیں گے، وہ اور گمراہ" }, explanation: { en: "Idols and worshippers together in Hell", ur: "بت اور ان کے پجاری ایک ساتھ جہنم میں" }, verseRef: "26:94" },
        { term: "وَجُنُودُ إِبْلِيسَ أَجْمَعُونَ", meaning: { en: "And the soldiers of Iblis, all of them", ur: "اور ابلیس کے تمام لشکر" }, explanation: { en: "Shaytan's army also punished", ur: "شیطان کی فوج کو بھی سزا" }, verseRef: "26:95" }
      ]
    },

    hellDialogue: {
      name: "Dialogue in Hell",
      nameArabic: "حوار في جهنم",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "قَالُوا وَهُمْ فِيهَا يَخْتَصِمُونَ", meaning: { en: "They will say while disputing therein", ur: "وہ اس میں جھگڑتے ہوئے کہیں گے" }, explanation: { en: "Arguments in Hell", ur: "جہنم میں بحث" }, verseRef: "26:96" },
        { term: "تَاللَّهِ إِن كُنَّا لَفِي ضَلَالٍ مُّبِينٍ", meaning: { en: "By Allah, we were in clear error", ur: "اللہ کی قسم، ہم واضح گمراہی میں تھے" }, explanation: { en: "Confession too late", ur: "بہت دیر سے اعتراف" }, verseRef: "26:97" },
        { term: "إِذْ نُسَوِّيكُم بِرَبِّ الْعَالَمِينَ", meaning: { en: "When we equated you with Lord of the worlds", ur: "جب ہم نے تمہیں رب العالمین کے برابر ٹھہرایا" }, explanation: { en: "Sin of equating idols with Allah", ur: "بتوں کو اللہ کے برابر ٹھہرانے کا گناہ" }, verseRef: "26:98" },
        { term: "وَمَا أَضَلَّنَا إِلَّا الْمُجْرِمُونَ", meaning: { en: "Only the criminals led us astray", ur: "ہمیں صرف مجرموں نے گمراہ کیا" }, explanation: { en: "Blaming their leaders", ur: "اپنے سرداروں کو الزام دینا" }, verseRef: "26:99" },
        { term: "فَمَا لَنَا مِن شَافِعِينَ", meaning: { en: "So we have no intercessors", ur: "تو ہمارا کوئی سفارشی نہیں" }, explanation: { en: "No one to intercede", ur: "کوئی سفارش کرنے والا نہیں" }, verseRef: "26:100" },
        { term: "وَلَا صَدِيقٍ حَمِيمٍ", meaning: { en: "Nor a close friend", ur: "نہ کوئی قریبی دوست" }, explanation: { en: "No true friends", ur: "کوئی سچا دوست نہیں" }, verseRef: "26:101" },
        { term: "فَلَوْ أَنَّ لَنَا كَرَّةً فَنَكُونَ مِنَ الْمُؤْمِنِينَ", meaning: { en: "If only we could return and be believers", ur: "کاش ہم واپس جائیں اور مومن بن جائیں" }, explanation: { en: "Futile wish for return", ur: "واپسی کی بے سود تمنا" }, verseRef: "26:102" }
      ]
    },

    nuhStory: {
      name: "Story of Nuh",
      nameArabic: "قصة نوح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "كَذَّبَتْ قَوْمُ نُوحٍ الْمُرْسَلِينَ", meaning: { en: "The people of Nuh denied the messengers", ur: "نوح کی قوم نے رسولوں کو جھٹلایا" }, explanation: { en: "Denial of all messengers by denying one", ur: "ایک رسول کا انکار سب رسولوں کا انکار ہے" }, verseRef: "26:105" },
        { term: "إِذْ قَالَ لَهُمْ أَخُوهُمْ نُوحٌ أَلَا تَتَّقُونَ", meaning: { en: "When their brother Nuh said: Will you not fear Allah?", ur: "جب ان کے بھائی نوح نے کہا: کیا تم اللہ سے نہیں ڈرتے؟" }, explanation: { en: "Nuh from among them", ur: "نوح ان میں سے ہی تھے" }, verseRef: "26:106" },
        { term: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: { en: "I am a trustworthy messenger to you", ur: "میں تمہارے لیے ایک امانت دار رسول ہوں" }, explanation: { en: "Trustworthiness claim", ur: "امانتداری کا دعویٰ" }, verseRef: "26:107" },
        { term: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: { en: "So fear Allah and obey me", ur: "تو اللہ سے ڈرو اور میری اطاعت کرو" }, explanation: { en: "Two commands", ur: "دو احکام" }, verseRef: "26:108" },
        { term: "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ", meaning: { en: "I ask no payment from you", ur: "میں تم سے کوئی اجر نہیں مانگتا" }, explanation: { en: "No worldly motive", ur: "کوئی دنیاوی مقصد نہیں" }, verseRef: "26:109" },
        { term: "إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ", meaning: { en: "My reward is only from the Lord of the worlds", ur: "میرا اجر صرف رب العالمین کے ذمے ہے" }, explanation: { en: "Seeking Allah's reward only", ur: "صرف اللہ کا اجر چاہنا" }, verseRef: "26:109" },
        { term: "قَالُوا أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ", meaning: { en: "They said: Shall we believe you when the lowest follow you?", ur: "انہوں نے کہا: کیا ہم تم پر ایمان لائیں جبکہ تمہارے پیروکار نچلے لوگ ہیں؟" }, explanation: { en: "Rejection based on followers' status", ur: "پیروکاروں کی حیثیت کی بنا پر رد" }, verseRef: "26:111" },
        { term: "قَالَ وَمَا عِلْمِي بِمَا كَانُوا يَعْمَلُونَ", meaning: { en: "He said: What knowledge do I have of what they did?", ur: "اس نے کہا: مجھے کیا علم کہ وہ کیا کرتے تھے؟" }, explanation: { en: "Nuh doesn't judge backgrounds", ur: "نوح لوگوں کے پس منظر کا فیصلہ نہیں کرتے" }, verseRef: "26:112" },
        { term: "إِنْ حِسَابُهُمْ إِلَّا عَلَىٰ رَبِّي", meaning: { en: "Their account is only with my Lord", ur: "ان کا حساب صرف میرے رب کے پاس ہے" }, explanation: { en: "Allah judges, not prophet", ur: "فیصلہ اللہ کرتا ہے، نبی نہیں" }, verseRef: "26:113" },
        { term: "وَمَا أَنَا بِطَارِدِ الْمُؤْمِنِينَ", meaning: { en: "And I will not drive away the believers", ur: "اور میں مومنوں کو نہیں دھتکاروں گا" }, explanation: { en: "Refusing to reject poor believers", ur: "غریب مومنوں کو رد کرنے سے انکار" }, verseRef: "26:114" },
        { term: "إِنْ أَنَا إِلَّا نَذِيرٌ مُّبِينٌ", meaning: { en: "I am only a clear warner", ur: "میں صرف کھلا تنبیہ کرنے والا ہوں" }, explanation: { en: "Role defined", ur: "کردار کی وضاحت" }, verseRef: "26:115" },
        { term: "قَالُوا لَئِن لَّمْ تَنتَهِ يَا نُوحُ لَتَكُونَنَّ مِنَ الْمَرْجُومِينَ", meaning: { en: "They said: If you don't stop, Nuh, you will be stoned", ur: "انہوں نے کہا: اے نوح اگر تم باز نہ آئے تو سنگسار کر دیے جاؤ گے" }, explanation: { en: "Death threat", ur: "موت کی دھمکی" }, verseRef: "26:116" },
        { term: "قَالَ رَبِّ إِنَّ قَوْمِي كَذَّبُونِ", meaning: { en: "He said: My Lord, my people have denied me", ur: "اس نے کہا: اے میرے رب، میری قوم نے مجھے جھٹلا دیا" }, explanation: { en: "Nuh's complaint to Allah", ur: "نوح کی اللہ سے فریاد" }, verseRef: "26:117" },
        { term: "فَافْتَحْ بَيْنِي وَبَيْنَهُمْ فَتْحًا", meaning: { en: "So judge between me and them decisively", ur: "تو میرے اور ان کے درمیان فیصلہ کن فیصلہ فرما" }, explanation: { en: "Request for judgment", ur: "فیصلے کی درخواست" }, verseRef: "26:118" },
        { term: "وَنَجِّنِي وَمَن مَّعِيَ مِنَ الْمُؤْمِنِينَ", meaning: { en: "And save me and the believers with me", ur: "اور مجھے اور میرے ساتھ کے مومنوں کو بچا لے" }, explanation: { en: "Prayer for salvation", ur: "نجات کی دعا" }, verseRef: "26:118" },
        { term: "فَأَنجَيْنَاهُ وَمَن مَّعَهُ فِي الْفُلْكِ الْمَشْحُونِ", meaning: { en: "So We saved him and those with him in the laden ship", ur: "تو ہم نے اسے اور اس کے ساتھیوں کو بھری ہوئی کشتی میں بچا لیا" }, explanation: { en: "Salvation in the Ark", ur: "کشتی میں نجات" }, verseRef: "26:119" },
        { term: "ثُمَّ أَغْرَقْنَا بَعْدُ الْبَاقِينَ", meaning: { en: "Then We drowned the rest", ur: "پھر ہم نے باقیوں کو ڈبو دیا" }, explanation: { en: "Flood destroys deniers", ur: "طوفان نے منکرین کو تباہ کیا" }, verseRef: "26:120" }
      ]
    },

    hudStory: {
      name: "Story of Hud",
      nameArabic: "قصة هود",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "كَذَّبَتْ عَادٌ الْمُرْسَلِينَ", meaning: { en: "'Ad denied the messengers", ur: "عاد نے رسولوں کو جھٹلایا" }, explanation: { en: "Denial pattern continues", ur: "انکار کا سلسلہ جاری" }, verseRef: "26:123" },
        { term: "إِذْ قَالَ لَهُمْ أَخُوهُمْ هُودٌ أَلَا تَتَّقُونَ", meaning: { en: "When their brother Hud said: Will you not fear Allah?", ur: "جب ان کے بھائی ہود نے کہا: کیا تم اللہ سے نہیں ڈرتے؟" }, explanation: { en: "Hud from among them", ur: "ہود ان ہی میں سے تھے" }, verseRef: "26:124" },
        { term: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: { en: "I am a trustworthy messenger to you", ur: "میں تمہارے لیے ایک امانت دار رسول ہوں" }, explanation: { en: "Same claim as Nuh", ur: "نوح جیسا ہی دعویٰ" }, verseRef: "26:125" },
        { term: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: { en: "So fear Allah and obey me", ur: "تو اللہ سے ڈرو اور میری اطاعت کرو" }, explanation: { en: "Same commands", ur: "وہی احکام" }, verseRef: "26:126" },
        { term: "أَتَبْنُونَ بِكُلِّ رِيعٍ آيَةً تَعْبَثُونَ", meaning: { en: "Do you build on every elevation a sign for amusement?", ur: "کیا تم ہر اونچی جگہ بے مقصد نشانی بناتے ہو؟" }, explanation: { en: "Criticism of vanity projects", ur: "بے مقصد منصوبوں پر تنقید" }, verseRef: "26:128" },
        { term: "وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ", meaning: { en: "And take for yourselves palaces hoping to live forever?", ur: "اور محلات بناتے ہو گویا ہمیشہ رہو گے؟" }, explanation: { en: "Criticism of false immortality hopes", ur: "جھوٹی ابدیت کی امید پر تنقید" }, verseRef: "26:129" },
        { term: "وَإِذَا بَطَشْتُم بَطَشْتُمْ جَبَّارِينَ", meaning: { en: "When you strike, you strike as tyrants", ur: "جب تم پکڑتے ہو تو جابروں کی طرح پکڑتے ہو" }, explanation: { en: "Criticism of oppression", ur: "ظلم پر تنقید" }, verseRef: "26:130" },
        { term: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: { en: "So fear Allah and obey me", ur: "تو اللہ سے ڈرو اور میری اطاعت کرو" }, explanation: { en: "Repeated call", ur: "دوبارہ پکار" }, verseRef: "26:131" },
        { term: "وَاتَّقُوا الَّذِي أَمَدَّكُم بِمَا تَعْلَمُونَ", meaning: { en: "Fear Him who provided you with what you know", ur: "اس سے ڈرو جس نے تمہیں وہ سب دیا جو تم جانتے ہو" }, explanation: { en: "Reminder of blessings", ur: "نعمتوں کی یاد دہانی" }, verseRef: "26:132" },
        { term: "أَمَدَّكُم بِأَنْعَامٍ وَبَنِينَ", meaning: { en: "Provided you with livestock and children", ur: "تمہیں مویشی اور اولاد عطا کیے" }, explanation: { en: "Specific blessings", ur: "مخصوص نعمتیں" }, verseRef: "26:133" },
        { term: "وَجَنَّاتٍ وَعُيُونٍ", meaning: { en: "And gardens and springs", ur: "اور باغات اور چشمے" }, explanation: { en: "More blessings", ur: "مزید نعمتیں" }, verseRef: "26:134" },
        { term: "إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ", meaning: { en: "I fear for you punishment of a great Day", ur: "مجھے تمہارے لیے ایک بڑے دن کے عذاب کا ڈر ہے" }, explanation: { en: "Warning of Judgment", ur: "قیامت کی تنبیہ" }, verseRef: "26:135" },
        { term: "قَالُوا سَوَاءٌ عَلَيْنَا أَوَعَظْتَ أَمْ لَمْ تَكُن مِّنَ الْوَاعِظِينَ", meaning: { en: "They said: Same to us whether you advise or not", ur: "انہوں نے کہا: ہمارے لیے برابر ہے چاہے تم نصیحت کرو یا نہ کرو" }, explanation: { en: "Complete indifference", ur: "مکمل بے حسی" }, verseRef: "26:136" },
        { term: "إِنْ هَٰذَا إِلَّا خُلُقُ الْأَوَّلِينَ", meaning: { en: "This is nothing but custom of the ancients", ur: "یہ تو بس پہلے لوگوں کا طریقہ ہے" }, explanation: { en: "Dismissing as old tales", ur: "پرانی کہانیاں کہہ کر ٹالنا" }, verseRef: "26:137" },
        { term: "وَمَا نَحْنُ بِمُعَذَّبِينَ", meaning: { en: "And we will not be punished", ur: "اور ہمیں عذاب نہیں ہوگا" }, explanation: { en: "Denial of punishment", ur: "عذاب کا انکار" }, verseRef: "26:138" },
        { term: "فَكَذَّبُوهُ فَأَهْلَكْنَاهُمْ", meaning: { en: "So they denied him and We destroyed them", ur: "تو انہوں نے اسے جھٹلایا اور ہم نے انہیں تباہ کر دیا" }, explanation: { en: "Consequence of denial", ur: "انکار کا نتیجہ" }, verseRef: "26:139" }
      ]
    },

    salihStory: {
      name: "Story of Salih",
      nameArabic: "قصة صالح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "كَذَّبَتْ ثَمُودُ الْمُرْسَلِينَ", meaning: { en: "Thamud denied the messengers", ur: "ثمود نے رسولوں کو جھٹلایا" }, explanation: { en: "Another nation denies", ur: "ایک اور قوم نے انکار کیا" }, verseRef: "26:141" },
        { term: "إِذْ قَالَ لَهُمْ أَخُوهُمْ صَالِحٌ أَلَا تَتَّقُونَ", meaning: { en: "When their brother Salih said: Will you not fear Allah?", ur: "جب ان کے بھائی صالح نے کہا: کیا تم اللہ سے نہیں ڈرتے؟" }, explanation: { en: "Salih from among them", ur: "صالح ان ہی میں سے تھے" }, verseRef: "26:142" },
        { term: "أَتُتْرَكُونَ فِي مَا هَاهُنَا آمِنِينَ", meaning: { en: "Will you be left secure in what is here?", ur: "کیا تم اس میں جو یہاں ہے محفوظ چھوڑ دیے جاؤ گے؟" }, explanation: { en: "Challenge to their security", ur: "ان کے تحفظ پر سوال" }, verseRef: "26:146" },
        { term: "فِي جَنَّاتٍ وَعُيُونٍ", meaning: { en: "In gardens and springs", ur: "باغوں اور چشموں میں" }, explanation: { en: "Their comfortable life", ur: "ان کی آرام دہ زندگی" }, verseRef: "26:147" },
        { term: "وَزُرُوعٍ وَنَخْلٍ طَلْعُهَا هَضِيمٌ", meaning: { en: "And crops and date-palms with soft fruit", ur: "اور کھیتیاں اور نرم گابھوں والے کھجور کے درخت" }, explanation: { en: "Agricultural blessings", ur: "زرعی نعمتیں" }, verseRef: "26:148" },
        { term: "وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا فَارِهِينَ", meaning: { en: "You carve from mountains homes skillfully", ur: "اور تم پہاڑوں میں مہارت سے گھر تراشتے ہو" }, explanation: { en: "Architectural achievements", ur: "تعمیراتی کارنامے" }, verseRef: "26:149" },
        { term: "وَلَا تُطِيعُوا أَمْرَ الْمُسْرِفِينَ", meaning: { en: "Do not obey the command of the transgressors", ur: "حد سے بڑھنے والوں کا حکم نہ مانو" }, explanation: { en: "Warning against corrupt leaders", ur: "بگڑے ہوئے سرداروں سے خبردار" }, verseRef: "26:151" },
        { term: "الَّذِينَ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ", meaning: { en: "Who cause corruption and do not reform", ur: "جو زمین میں فساد پھیلاتے ہیں اور اصلاح نہیں کرتے" }, explanation: { en: "Description of transgressors", ur: "حد سے بڑھنے والوں کی تفصیل" }, verseRef: "26:152" },
        { term: "قَالُوا إِنَّمَا أَنتَ مِنَ الْمُسَحَّرِينَ", meaning: { en: "They said: You are but of the bewitched", ur: "انہوں نے کہا: تم تو جادو زدہ لوگوں میں سے ہو" }, explanation: { en: "Accusation of being enchanted", ur: "جادو زدہ ہونے کا الزام" }, verseRef: "26:153" },
        { term: "مَا أَنتَ إِلَّا بَشَرٌ مِّثْلُنَا", meaning: { en: "You are only a human like us", ur: "تم تو ہم جیسے انسان ہو" }, explanation: { en: "Rejection based on humanity", ur: "انسان ہونے کی بنا پر رد" }, verseRef: "26:154" },
        { term: "فَأْتِ بِآيَةٍ إِن كُنتَ مِنَ الصَّادِقِينَ", meaning: { en: "So bring a sign if you are truthful", ur: "تو کوئی نشانی لاؤ اگر تم سچے ہو" }, explanation: { en: "Demand for proof", ur: "ثبوت کا مطالبہ" }, verseRef: "26:154" },
        { term: "قَالَ هَٰذِهِ نَاقَةٌ لَّهَا شِرْبٌ وَلَكُمْ شِرْبُ يَوْمٍ مَّعْلُومٍ", meaning: { en: "He said: This is a she-camel; she has a drink and you a drink on an appointed day", ur: "اس نے کہا: یہ اونٹنی ہے؛ ایک دن اس کے پانی پینے کا اور ایک مقررہ دن تمہارے پانی پینے کا" }, explanation: { en: "Miraculous she-camel", ur: "معجزاتی اونٹنی" }, verseRef: "26:155" },
        { term: "وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابُ يَوْمٍ عَظِيمٍ", meaning: { en: "Do not touch her with harm lest punishment of a great day seize you", ur: "اسے نقصان نہ پہنچانا ورنہ ایک بڑے دن کا عذاب تمہیں پکڑ لے گا" }, explanation: { en: "Warning about harming camel", ur: "اونٹنی کو نقصان پہنچانے کی تنبیہ" }, verseRef: "26:156" },
        { term: "فَعَقَرُوهَا فَأَصْبَحُوا نَادِمِينَ", meaning: { en: "But they hamstrung her and became regretful", ur: "لیکن انہوں نے اسے کاٹ ڈالا اور پچھتانے لگے" }, explanation: { en: "They killed it and regretted", ur: "انہوں نے اسے مار ڈالا اور پچھتائے" }, verseRef: "26:157" },
        { term: "فَأَخَذَهُمُ الْعَذَابُ", meaning: { en: "So the punishment seized them", ur: "تو عذاب نے انہیں پکڑ لیا" }, explanation: { en: "Divine punishment came", ur: "الٰہی عذاب آ گیا" }, verseRef: "26:158" }
      ]
    },

    lutStory: {
      name: "Story of Lut",
      nameArabic: "قصة لوط",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "كَذَّبَتْ قَوْمُ لُوطٍ الْمُرْسَلِينَ", meaning: { en: "The people of Lut denied the messengers", ur: "لوط کی قوم نے رسولوں کو جھٹلایا" }, explanation: { en: "Pattern of denial", ur: "انکار کا نمونہ" }, verseRef: "26:160" },
        { term: "إِذْ قَالَ لَهُمْ أَخُوهُمْ لُوطٌ أَلَا تَتَّقُونَ", meaning: { en: "When their brother Lut said: Will you not fear Allah?", ur: "جب ان کے بھائی لوط نے کہا: کیا تم اللہ سے نہیں ڈرتے؟" }, explanation: { en: "Lut's call to his people", ur: "لوط کی اپنی قوم کو پکار" }, verseRef: "26:161" },
        { term: "أَتَأْتُونَ الذُّكْرَانَ مِنَ الْعَالَمِينَ", meaning: { en: "Do you approach males of the worlds?", ur: "کیا تم دنیا میں مردوں کے پاس جاتے ہو؟" }, explanation: { en: "Condemning their sin", ur: "ان کے گناہ کی مذمت" }, verseRef: "26:165" },
        { term: "وَتَذَرُونَ مَا خَلَقَ لَكُمْ رَبُّكُم مِّنْ أَزْوَاجِكُم", meaning: { en: "And leave what your Lord created for you of your wives", ur: "اور تمہارے رب نے جو تمہاری بیویاں تمہارے لیے بنائی ہیں انہیں چھوڑتے ہو" }, explanation: { en: "Abandoning natural way", ur: "فطری طریقہ چھوڑنا" }, verseRef: "26:166" },
        { term: "بَلْ أَنتُمْ قَوْمٌ عَادُونَ", meaning: { en: "Rather, you are a transgressing people", ur: "بلکہ تم حد سے بڑھنے والی قوم ہو" }, explanation: { en: "Judgment on them", ur: "ان پر فیصلہ" }, verseRef: "26:166" },
        { term: "قَالُوا لَئِن لَّمْ تَنتَهِ يَا لُوطُ لَتَكُونَنَّ مِنَ الْمُخْرَجِينَ", meaning: { en: "They said: If you don't stop, Lut, you will be expelled", ur: "انہوں نے کہا: اے لوط، اگر باز نہ آئے تو نکال دیے جاؤ گے" }, explanation: { en: "Threat of expulsion", ur: "نکالنے کی دھمکی" }, verseRef: "26:167" },
        { term: "قَالَ إِنِّي لِعَمَلِكُم مِّنَ الْقَالِينَ", meaning: { en: "He said: I am of those who detest your deed", ur: "اس نے کہا: میں تمہارے عمل سے سخت نفرت کرنے والوں میں سے ہوں" }, explanation: { en: "Lut's disgust with their sin", ur: "لوط کی ان کے گناہ سے نفرت" }, verseRef: "26:168" },
        { term: "رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ", meaning: { en: "My Lord, save me and my family from what they do", ur: "اے میرے رب، مجھے اور میرے گھر والوں کو ان کے کاموں سے بچا لے" }, explanation: { en: "Lut's prayer for salvation", ur: "لوط کی نجات کی دعا" }, verseRef: "26:169" },
        { term: "فَنَجَّيْنَاهُ وَأَهْلَهُ أَجْمَعِينَ", meaning: { en: "So We saved him and his family, all", ur: "تو ہم نے اسے اور اس کے پورے گھر والوں کو بچا لیا" }, explanation: { en: "Family saved", ur: "خاندان بچا لیا گیا" }, verseRef: "26:170" },
        { term: "إِلَّا عَجُوزًا فِي الْغَابِرِينَ", meaning: { en: "Except an old woman among those who remained", ur: "سوائے ایک بوڑھی عورت جو پیچھے رہ جانے والوں میں تھی" }, explanation: { en: "His wife stayed behind", ur: "اس کی بیوی پیچھے رہ گئی" }, verseRef: "26:171" },
        { term: "ثُمَّ دَمَّرْنَا الْآخَرِينَ", meaning: { en: "Then We destroyed the others", ur: "پھر ہم نے باقیوں کو تباہ کر دیا" }, explanation: { en: "Destruction of sinners", ur: "گناہگاروں کی تباہی" }, verseRef: "26:172" },
        { term: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًا", meaning: { en: "And We rained upon them a rain", ur: "اور ہم نے ان پر ایک بارش برسائی" }, explanation: { en: "Rain of stones", ur: "پتھروں کی بارش" }, verseRef: "26:173" },
        { term: "فَسَاءَ مَطَرُ الْمُنذَرِينَ", meaning: { en: "Evil was the rain of those warned", ur: "کیا بری تھی ان تنبیہ شدہ لوگوں کی بارش" }, explanation: { en: "Terrible punishment", ur: "خوفناک سزا" }, verseRef: "26:173" }
      ]
    },

    shuaybStory: {
      name: "Story of Shu'ayb",
      nameArabic: "قصة شعيب",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        { term: "كَذَّبَ أَصْحَابُ الْأَيْكَةِ الْمُرْسَلِينَ", meaning: { en: "The companions of the thicket denied the messengers", ur: "اصحاب الایکہ (جھاڑیوں والوں) نے رسولوں کو جھٹلایا" }, explanation: { en: "People of the woods/Midian", ur: "جنگل/مدین کے لوگ" }, verseRef: "26:176" },
        { term: "إِذْ قَالَ لَهُمْ شُعَيْبٌ أَلَا تَتَّقُونَ", meaning: { en: "When Shu'ayb said to them: Will you not fear Allah?", ur: "جب شعیب نے ان سے کہا: کیا تم اللہ سے نہیں ڈرتے؟" }, explanation: { en: "Shu'ayb's call", ur: "شعیب کی پکار" }, verseRef: "26:177" },
        { term: "أَوْفُوا الْكَيْلَ وَلَا تَكُونُوا مِنَ الْمُخْسِرِينَ", meaning: { en: "Give full measure and do not be of those who cause loss", ur: "پورا ناپ دو اور گھٹانے والوں میں سے نہ بنو" }, explanation: { en: "Economic justice command", ur: "معاشی انصاف کا حکم" }, verseRef: "26:181" },
        { term: "وَزِنُوا بِالْقِسْطَاسِ الْمُسْتَقِيمِ", meaning: { en: "And weigh with a straight balance", ur: "اور سیدھی ترازو سے تولو" }, explanation: { en: "Fair weighing", ur: "منصفانہ تول" }, verseRef: "26:182" },
        { term: "وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ", meaning: { en: "Do not deprive people of their due", ur: "لوگوں کو ان کی چیزیں کم دے کر نہ ٹھگو" }, explanation: { en: "Rights of others", ur: "دوسروں کے حقوق" }, verseRef: "26:183" },
        { term: "وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ", meaning: { en: "Do not commit abuse on earth, spreading corruption", ur: "اور زمین میں فساد نہ پھیلاؤ" }, explanation: { en: "Against corruption", ur: "فساد کے خلاف" }, verseRef: "26:183" },
        { term: "وَاتَّقُوا الَّذِي خَلَقَكُمْ وَالْجِبِلَّةَ الْأَوَّلِينَ", meaning: { en: "Fear Him who created you and former generations", ur: "اس سے ڈرو جس نے تمہیں اور پہلی نسلوں کو پیدا کیا" }, explanation: { en: "Fear the Creator", ur: "خالق سے ڈرو" }, verseRef: "26:184" },
        { term: "قَالُوا إِنَّمَا أَنتَ مِنَ الْمُسَحَّرِينَ", meaning: { en: "They said: You are but of the bewitched", ur: "انہوں نے کہا: تم تو جادو زدہ لوگوں میں سے ہو" }, explanation: { en: "Same accusation as to Salih", ur: "صالح جیسا ہی الزام" }, verseRef: "26:185" },
        { term: "وَمَا أَنتَ إِلَّا بَشَرٌ مِّثْلُنَا", meaning: { en: "You are only a human like us", ur: "تم تو ہم جیسے انسان ہو" }, explanation: { en: "Rejection of human messenger", ur: "انسان رسول کا انکار" }, verseRef: "26:186" },
        { term: "وَإِن نَّظُنُّكَ لَمِنَ الْكَاذِبِينَ", meaning: { en: "We think you are of the liars", ur: "ہم تمہیں جھوٹوں میں سے سمجھتے ہیں" }, explanation: { en: "Accusation of lying", ur: "جھوٹ بولنے کا الزام" }, verseRef: "26:186" },
        { term: "فَأَسْقِطْ عَلَيْنَا كِسَفًا مِّنَ السَّمَاءِ", meaning: { en: "So drop upon us fragments from the sky", ur: "تو آسمان سے ہم پر ٹکڑے گرا دو" }, explanation: { en: "Mocking challenge", ur: "تمسخر آمیز چیلنج" }, verseRef: "26:187" },
        { term: "إِن كُنتَ مِنَ الصَّادِقِينَ", meaning: { en: "If you are truthful", ur: "اگر تم سچے ہو" }, explanation: { en: "Demanding proof", ur: "ثبوت کا مطالبہ" }, verseRef: "26:187" },
        { term: "قَالَ رَبِّي أَعْلَمُ بِمَا تَعْمَلُونَ", meaning: { en: "He said: My Lord knows best what you do", ur: "اس نے کہا: میرا رب تمہارے اعمال کو خوب جانتا ہے" }, explanation: { en: "Shu'ayb's response", ur: "شعیب کا جواب" }, verseRef: "26:188" },
        { term: "فَكَذَّبُوهُ فَأَخَذَهُمْ عَذَابُ يَوْمِ الظُّلَّةِ", meaning: { en: "So they denied him and punishment of the Day of Shadow seized them", ur: "تو انہوں نے اسے جھٹلایا اور سائبان والے دن کے عذاب نے انہیں پکڑ لیا" }, explanation: { en: "Punishment by shadow/cloud of fire", ur: "آگ کے بادل/سائبان سے سزا" }, verseRef: "26:189" },
        { term: "إِنَّهُ كَانَ عَذَابَ يَوْمٍ عَظِيمٍ", meaning: { en: "It was punishment of a great day", ur: "وہ ایک بڑے دن کا عذاب تھا" }, explanation: { en: "Severity of their end", ur: "ان کے انجام کی شدت" }, verseRef: "26:189" }
      ]
    },

    quranRevelation: {
      name: "Quran's Revelation",
      nameArabic: "نزول القرآن",
      color: "#F59E0B",
      icon: "Book",
      concepts: [
        { term: "وَإِنَّهُ لَتَنزِيلُ رَبِّ الْعَالَمِينَ", meaning: { en: "Indeed, it is revelation from the Lord of the worlds", ur: "بے شک یہ رب العالمین کی طرف سے اتارا گیا ہے" }, explanation: { en: "Divine source affirmed", ur: "الٰہی ماخذ کی تصدیق" }, verseRef: "26:192" },
        { term: "نَزَلَ بِهِ الرُّوحُ الْأَمِينُ", meaning: { en: "The Trustworthy Spirit brought it down", ur: "اسے روح الامین لے کر اترے" }, explanation: { en: "Jibril as bearer", ur: "جبرائیل بطور حامل" }, verseRef: "26:193" },
        { term: "عَلَىٰ قَلْبِكَ لِتَكُونَ مِنَ الْمُنذِرِينَ", meaning: { en: "Upon your heart so you may be a warner", ur: "تمہارے دل پر تاکہ تم تنبیہ کرنے والے بنو" }, explanation: { en: "Revealed to Prophet's heart", ur: "نبی ﷺ کے دل پر نازل ہوا" }, verseRef: "26:194" },
        { term: "بِلِسَانٍ عَرَبِيٍّ مُّبِينٍ", meaning: { en: "In clear Arabic tongue", ur: "واضح عربی زبان میں" }, explanation: { en: "Language of revelation", ur: "وحی کی زبان" }, verseRef: "26:195" },
        { term: "وَإِنَّهُ لَفِي زُبُرِ الْأَوَّلِينَ", meaning: { en: "And it is in the scriptures of former peoples", ur: "اور یہ پہلے لوگوں کی کتابوں میں موجود ہے" }, explanation: { en: "Mentioned in previous books", ur: "پچھلی کتابوں میں مذکور" }, verseRef: "26:196" },
        { term: "أَوَلَمْ يَكُن لَّهُمْ آيَةً أَن يَعْلَمَهُ عُلَمَاءُ بَنِي إِسْرَائِيلَ", meaning: { en: "Was it not a sign that scholars of Israel knew it?", ur: "کیا یہ نشانی نہ تھی کہ بنی اسرائیل کے عالموں نے اسے پہچانا؟" }, explanation: { en: "Jewish scholars recognize it", ur: "یہودی علماء نے اسے پہچانا" }, verseRef: "26:197" }
      ]
    },

    nonArabMessenger: {
      name: "Hypothetical Non-Arab Messenger",
      nameArabic: "لو كان المرسل أعجمياً",
      color: "#8B5CF6",
      icon: "MessageCircle",
      concepts: [
        { term: "وَلَوْ نَزَّلْنَاهُ عَلَىٰ بَعْضِ الْأَعْجَمِينَ", meaning: { en: "If We had revealed it to a non-Arab", ur: "اگر ہم اسے کسی عجمی پر نازل کرتے" }, explanation: { en: "Hypothetical scenario", ur: "فرضی صورتحال" }, verseRef: "26:198" },
        { term: "فَقَرَأَهُ عَلَيْهِم مَّا كَانُوا بِهِ مُؤْمِنِينَ", meaning: { en: "And he recited it to them, they would not believe", ur: "اور وہ انہیں پڑھ کر سناتا تو وہ ایمان نہ لاتے" }, explanation: { en: "They would still reject", ur: "وہ پھر بھی رد کرتے" }, verseRef: "26:199" },
        { term: "كَذَٰلِكَ سَلَكْنَاهُ فِي قُلُوبِ الْمُجْرِمِينَ", meaning: { en: "Thus We inserted disbelief in hearts of criminals", ur: "اسی طرح ہم نے مجرموں کے دلوں میں انکار ڈال دیا" }, explanation: { en: "Denial rooted in heart", ur: "انکار دل میں جڑا ہوا" }, verseRef: "26:200" },
        { term: "لَا يُؤْمِنُونَ بِهِ حَتَّىٰ يَرَوُا الْعَذَابَ الْأَلِيمَ", meaning: { en: "They will not believe until they see painful punishment", ur: "وہ ایمان نہیں لائیں گے جب تک دردناک عذاب نہ دیکھ لیں" }, explanation: { en: "Belief only when too late", ur: "ایمان صرف تب جب بہت دیر ہو چکی ہو" }, verseRef: "26:201" },
        { term: "فَيَأْتِيَهُم بَغْتَةً وَهُمْ لَا يَشْعُرُونَ", meaning: { en: "It will come suddenly while they perceive not", ur: "وہ اچانک آئے گا جب انہیں خبر بھی نہ ہوگی" }, explanation: { en: "Punishment comes unexpectedly", ur: "عذاب غیر متوقع طور پر آتا ہے" }, verseRef: "26:202" }
      ]
    },

    warningAndDestruction: {
      name: "Warning and Destruction",
      nameArabic: "الإنذار والإهلاك",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَيَقُولُوا هَلْ نَحْنُ مُنظَرُونَ", meaning: { en: "They will say: Can we be reprieved?", ur: "وہ کہیں گے: کیا ہمیں مہلت مل سکتی ہے؟" }, explanation: { en: "Desperate plea for delay", ur: "تاخیر کی مایوسانہ التجا" }, verseRef: "26:203" },
        { term: "أَفَبِعَذَابِنَا يَسْتَعْجِلُونَ", meaning: { en: "Do they wish to hasten Our punishment?", ur: "کیا یہ ہمارے عذاب میں جلدی کراتے ہیں؟" }, explanation: { en: "Mocking those who challenge", ur: "چیلنج کرنے والوں پر طنز" }, verseRef: "26:204" },
        { term: "أَفَرَأَيْتَ إِن مَّتَّعْنَاهُمْ سِنِينَ", meaning: { en: "Have you considered if We give them enjoyment for years", ur: "کیا تم نے سوچا اگر ہم انہیں برسوں تک فائدہ اٹھانے دیں" }, explanation: { en: "Even long life won't help", ur: "طویل عمر بھی فائدہ نہیں دے گی" }, verseRef: "26:205" },
        { term: "ثُمَّ جَاءَهُم مَّا كَانُوا يُوعَدُونَ", meaning: { en: "Then what they were promised comes to them", ur: "پھر ان سے کیا وعدہ کیا گیا تھا وہ آ جائے" }, explanation: { en: "Promise fulfilled eventually", ur: "وعدہ بالآخر پورا ہوتا ہے" }, verseRef: "26:206" },
        { term: "مَا أَغْنَىٰ عَنْهُم مَّا كَانُوا يُمَتَّعُونَ", meaning: { en: "What will avail them what they enjoyed?", ur: "جو فائدہ اٹھایا وہ ان کے کس کام آئے گا؟" }, explanation: { en: "Enjoyment won't save them", ur: "فائدے انہیں نہیں بچائیں گے" }, verseRef: "26:207" },
        { term: "وَمَا أَهْلَكْنَا مِن قَرْيَةٍ إِلَّا لَهَا مُنذِرُونَ", meaning: { en: "We did not destroy any city except it had warners", ur: "ہم نے کوئی بستی تباہ نہیں کی مگر اس میں تنبیہ کرنے والے تھے" }, explanation: { en: "No destruction without warning", ur: "بغیر تنبیہ کے کوئی تباہی نہیں" }, verseRef: "26:208" },
        { term: "ذِكْرَىٰ وَمَا كُنَّا ظَالِمِينَ", meaning: { en: "As a reminder, and We were not unjust", ur: "نصیحت کے طور پر، اور ہم ظالم نہیں تھے" }, explanation: { en: "Divine justice in punishment", ur: "سزا میں الٰہی عدل" }, verseRef: "26:209" }
      ]
    },

    quranNotFromDevils: {
      name: "Quran Not from Devils",
      nameArabic: "ليس القرآن من الشياطين",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "وَمَا تَنَزَّلَتْ بِهِ الشَّيَاطِينُ", meaning: { en: "Devils did not bring it down", ur: "شیاطین نے اسے نازل نہیں کیا" }, explanation: { en: "Refuting accusation", ur: "الزام کی تردید" }, verseRef: "26:210" },
        { term: "وَمَا يَنبَغِي لَهُمْ وَمَا يَسْتَطِيعُونَ", meaning: { en: "It is not befitting for them, nor could they", ur: "نہ یہ ان کے شایان شان ہے اور نہ وہ یہ کر سکتے ہیں" }, explanation: { en: "Devils incapable", ur: "شیاطین عاجز" }, verseRef: "26:211" },
        { term: "إِنَّهُمْ عَنِ السَّمْعِ لَمَعْزُولُونَ", meaning: { en: "They are barred from hearing", ur: "وہ سننے سے محروم کر دیے گئے ہیں" }, explanation: { en: "Devils cannot access revelation", ur: "شیاطین وحی تک رسائی نہیں رکھتے" }, verseRef: "26:212" }
      ]
    },

    warningAgainstIdolatry: {
      name: "Warning Against Idolatry",
      nameArabic: "التحذير من الشرك",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَلَا تَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: { en: "Do not call with Allah another god", ur: "اللہ کے ساتھ کسی اور معبود کو نہ پکارو" }, explanation: { en: "Warning against polytheism", ur: "شرک سے خبردار" }, verseRef: "26:213" },
        { term: "فَتَكُونَ مِنَ الْمُعَذَّبِينَ", meaning: { en: "Lest you be among the punished", ur: "ورنہ عذاب پانے والوں میں ہو جاؤ گے" }, explanation: { en: "Consequence of shirk", ur: "شرک کا نتیجہ" }, verseRef: "26:213" },
        { term: "وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ", meaning: { en: "Warn your closest kindred", ur: "اپنے قریب ترین رشتہ داروں کو خبردار کرو" }, explanation: { en: "Start with family", ur: "خاندان سے شروع کرو" }, verseRef: "26:214" },
        { term: "وَاخْفِضْ جَنَاحَكَ لِمَنِ اتَّبَعَكَ مِنَ الْمُؤْمِنِينَ", meaning: { en: "Lower your wing to believers who follow you", ur: "اپنے پیروکار مومنوں کے لیے اپنا بازو جھکاؤ" }, explanation: { en: "Be humble with followers", ur: "پیروکاروں سے عاجزی کرو" }, verseRef: "26:215" },
        { term: "فَإِنْ عَصَوْكَ فَقُلْ إِنِّي بَرِيءٌ مِّمَّا تَعْمَلُونَ", meaning: { en: "If they disobey, say: I am free of what you do", ur: "اگر وہ نافرمانی کریں تو کہو: میں تمہارے اعمال سے بری ہوں" }, explanation: { en: "Disassociation from sin", ur: "گناہ سے بیزاری" }, verseRef: "26:216" },
        { term: "وَتَوَكَّلْ عَلَى الْعَزِيزِ الرَّحِيمِ", meaning: { en: "And rely on the Mighty, the Merciful", ur: "اور غالب اور رحم والے پر بھروسا رکھو" }, explanation: { en: "Trust in Allah", ur: "اللہ پر توکل" }, verseRef: "26:217" },
        { term: "الَّذِي يَرَاكَ حِينَ تَقُومُ", meaning: { en: "Who sees you when you stand", ur: "جو تمہیں دیکھتا ہے جب تم کھڑے ہوتے ہو" }, explanation: { en: "Allah sees your prayer", ur: "اللہ تمہاری نماز دیکھتا ہے" }, verseRef: "26:218" },
        { term: "وَتَقَلُّبَكَ فِي السَّاجِدِينَ", meaning: { en: "And your movement among those who prostrate", ur: "اور تمہارا سجدہ کرنے والوں میں حرکت کرنا" }, explanation: { en: "Allah sees all worship", ur: "اللہ ہر عبادت دیکھتا ہے" }, verseRef: "26:219" },
        { term: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ", meaning: { en: "Indeed He is the Hearing, the Knowing", ur: "بے شک وہ سننے والا، جاننے والا ہے" }, explanation: { en: "Divine attributes", ur: "الٰہی صفات" }, verseRef: "26:220" }
      ]
    },

    poetsContrast: {
      name: "The Poets - Final Section",
      nameArabic: "الشعراء - الخاتمة",
      color: "#EC4899",
      icon: "MessageCircle",
      concepts: [
        { term: "هَلْ أُنَبِّئُكُمْ عَلَىٰ مَن تَنَزَّلُ الشَّيَاطِينُ", meaning: { en: "Shall I tell you upon whom devils descend?", ur: "کیا میں تمہیں بتاؤں شیاطین کس پر اترتے ہیں؟" }, explanation: { en: "Rhetorical question", ur: "بلاغی سوال" }, verseRef: "26:221" },
        { term: "تَنَزَّلُ عَلَىٰ كُلِّ أَفَّاكٍ أَثِيمٍ", meaning: { en: "They descend upon every sinful liar", ur: "وہ ہر جھوٹے گناہگار پر اترتے ہیں" }, explanation: { en: "Devils inspire liars", ur: "شیاطین جھوٹوں کو سکھاتے ہیں" }, verseRef: "26:222" },
        { term: "يُلْقُونَ السَّمْعَ وَأَكْثَرُهُمْ كَاذِبُونَ", meaning: { en: "They pass on what they hear, and most are liars", ur: "جو سنتے ہیں آگے پہنچاتے ہیں اور اکثر جھوٹے ہیں" }, explanation: { en: "Soothsayers lie", ur: "نجومی جھوٹ بولتے ہیں" }, verseRef: "26:223" },
        { term: "وَالشُّعَرَاءُ يَتَّبِعُهُمُ الْغَاوُونَ", meaning: { en: "As for the poets, the deviators follow them", ur: "اور شاعروں کی پیروی گمراہ لوگ کرتے ہیں" }, explanation: { en: "Misguided follow poets", ur: "گمراہ شاعروں کی پیروی کرتے ہیں" }, verseRef: "26:224" },
        { term: "أَلَمْ تَرَ أَنَّهُمْ فِي كُلِّ وَادٍ يَهِيمُونَ", meaning: { en: "Do you not see that they wander in every valley?", ur: "کیا تم نے نہیں دیکھا کہ وہ ہر وادی میں بھٹکتے ہیں؟" }, explanation: { en: "Poets' aimless wandering in fantasy", ur: "شاعروں کا تخیل میں بے مقصد بھٹکنا" }, verseRef: "26:225" },
        { term: "وَأَنَّهُمْ يَقُولُونَ مَا لَا يَفْعَلُونَ", meaning: { en: "And they say what they do not do", ur: "اور وہ کہتے ہیں جو کرتے نہیں" }, explanation: { en: "Poetry often insincere", ur: "شاعری اکثر غیر مخلص ہوتی ہے" }, verseRef: "26:226" }
      ]
    },

    exceptedPoets: {
      name: "Excepted Righteous Poets",
      nameArabic: "استثناء الشعراء الصالحين",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        { term: "إِلَّا الَّذِينَ آمَنُوا", meaning: { en: "Except those who believe", ur: "سوائے ان کے جو ایمان لائے" }, explanation: { en: "Believing poets excepted", ur: "مومن شاعر مستثنیٰ" }, verseRef: "26:227" },
        { term: "وَعَمِلُوا الصَّالِحَاتِ", meaning: { en: "And do righteous deeds", ur: "اور نیک عمل کیے" }, explanation: { en: "Righteous action required", ur: "نیک عمل ضروری" }, verseRef: "26:227" },
        { term: "وَذَكَرُوا اللَّهَ كَثِيرًا", meaning: { en: "And remember Allah often", ur: "اور اللہ کو کثرت سے یاد کیا" }, explanation: { en: "Frequent remembrance", ur: "کثرت سے ذکر" }, verseRef: "26:227" },
        { term: "وَانتَصَرُوا مِن بَعْدِ مَا ظُلِمُوا", meaning: { en: "And defend themselves after being wronged", ur: "اور ظلم کے بعد اپنا دفاع کیا" }, explanation: { en: "Defending Islam through poetry", ur: "شاعری سے اسلام کا دفاع" }, verseRef: "26:227" },
        { term: "وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنقَلَبٍ يَنقَلِبُونَ", meaning: { en: "Those who wrong will know what return they will have", ur: "ظلم کرنے والے جلد جان لیں گے کہ ان کا انجام کیا ہوگا" }, explanation: { en: "Warning to oppressors", ur: "ظالموں کو تنبیہ" }, verseRef: "26:227" }
      ]
    }
  },

  relationships: [
    { from: "طسم", to: "آيات الكتاب المبين", type: "connection", description: { en: "Opening letters lead to describing clear Book", ur: "حروفِ مقطعات سے واضح کتاب کی تعریف کی طرف" } },
    { from: "إن نشأ ننزل آية", to: "فظلت أعناقهم خاضعين", type: "causation", description: { en: "Overwhelming sign would compel submission", ur: "زبردست نشانی سر تسلیم خم کرا دیتی" } },
    { from: "كل قصة نبي", to: "وإن ربك لهو العزيز الرحيم", type: "conclusion", description: { en: "Each story ends with same refrain", ur: "ہر قصہ ایک ہی ترجیع پر ختم ہوتا ہے" } },
    { from: "إني لكم رسول أمين", to: "كل الأنبياء", type: "pattern", description: { en: "All prophets claim trustworthiness", ur: "تمام انبیاء نے امانتداری کا دعویٰ کیا" } },
    { from: "فاتقوا الله وأطيعون", to: "كل الأنبياء", type: "pattern", description: { en: "All prophets give same command", ur: "تمام انبیاء نے ایک ہی حکم دیا" } },
    { from: "وما أسألكم عليه من أجر", to: "كل الأنبياء", type: "pattern", description: { en: "All prophets seek no reward", ur: "تمام انبیاء نے کوئی اجر نہیں مانگا" } },
    { from: "كذبوه", to: "فأهلكناهم/فأخذهم العذاب", type: "consequence", description: { en: "Denial leads to destruction", ur: "تکذیب تباہی کی طرف لے جاتی ہے" } },
    { from: "السحرة", to: "آمنا برب العالمين", type: "transformation", description: { en: "Magicians become believers", ur: "جادوگر مومن بن گئے" } },
    { from: "الشعراء", to: "إلا الذين آمنوا", type: "exception", description: { en: "Righteous poets excepted", ur: "نیک شاعر مستثنیٰ" } },
    { from: "نزل به الروح الأمين", to: "على قلبك", type: "destination", description: { en: "Jibril brings to Prophet's heart", ur: "جبرائیل نے نبی ﷺ کے دل پر نازل کیا" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction", verses: "26:1-9", description: { en: "Quran's clarity, Prophet's concern, divine signs, first refrain", ur: "قرآن کی وضاحت، نبی ﷺ کی فکرمندی، الٰہی نشانیاں، پہلی ترجیع" } },
      { stage: 2, theme: "Story of Musa - Part 1", verses: "26:10-51", description: { en: "Divine call, confronting Pharaoh, signs, magicians convert", ur: "الٰہی پکار، فرعون سے مقابلہ، نشانیاں، جادوگروں کا ایمان" } },
      { stage: 3, theme: "Story of Musa - Part 2", verses: "26:52-68", description: { en: "Exodus, sea crossing, Pharaoh drowns, second refrain", ur: "خروج، سمندر عبور کرنا، فرعون کا ڈوبنا، دوسری ترجیع" } },
      { stage: 4, theme: "Story of Ibrahim", verses: "26:69-104", description: { en: "Challenging idolatry, praising Allah, dua, Paradise/Hell, third refrain", ur: "بت پرستی کو للکارنا، اللہ کی حمد، دعا، جنت/جہنم، تیسری ترجیع" } },
      { stage: 5, theme: "Story of Nuh", verses: "26:105-122", description: { en: "Call to people, rejection by elite, flood, fourth refrain", ur: "قوم کو دعوت، سرداروں کا انکار، طوفان، چوتھی ترجیع" } },
      { stage: 6, theme: "Story of Hud", verses: "26:123-140", description: { en: "Warning to 'Ad, their arrogance, destruction, fifth refrain", ur: "عاد کو تنبیہ، ان کا تکبر، تباہی، پانچویں ترجیع" } },
      { stage: 7, theme: "Story of Salih", verses: "26:141-159", description: { en: "Thamud's blessings, she-camel, hamstringing, sixth refrain", ur: "ثمود کی نعمتیں، اونٹنی، کونچیں کاٹنا، چھٹی ترجیع" } },
      { stage: 8, theme: "Story of Lut", verses: "26:160-175", description: { en: "Confronting immorality, family saved, destruction, seventh refrain", ur: "بے حیائی کا مقابلہ، خاندان کی نجات، تباہی، ساتویں ترجیع" } },
      { stage: 9, theme: "Story of Shu'ayb", verses: "26:176-191", description: { en: "Economic justice, Day of Shadow punishment, eighth refrain", ur: "معاشی انصاف، سائبان والے دن کا عذاب، آٹھویں ترجیع" } },
      { stage: 10, theme: "Quran's Divine Origin", verses: "26:192-209", description: { en: "Revelation from Allah via Jibril, Arabic language, previous scriptures", ur: "اللہ کی طرف سے جبرائیل کے ذریعے وحی، عربی زبان، پچھلی کتابیں" } },
      { stage: 11, theme: "Refutation and Warning", verses: "26:210-220", description: { en: "Not from devils, warning against shirk, trust in Allah", ur: "شیاطین کی طرف سے نہیں، شرک سے خبردار، اللہ پر توکل" } },
      { stage: 12, theme: "The Poets", verses: "26:221-227", description: { en: "Devils inspire liars, poets and their followers, except righteous", ur: "شیاطین جھوٹوں کو سکھاتے ہیں، شاعر اور ان کے پیروکار، سوائے نیکوں کے" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Don't grieve excessively over disbelief", ur: "کفر پر حد سے زیادہ غم نہ کرو" }, how: { en: "Prophet warned not to destroy himself with grief - do your duty, leave results to Allah", ur: "نبی ﷺ کو غم سے خود کو ہلاک نہ کرنے کی تنبیہ - اپنا فرض ادا کرو، نتائج اللہ پر چھوڑو" }, verse: "26:3" },
      { principle: { en: "Allah is with sincere messengers", ur: "اللہ مخلص پیغمبروں کے ساتھ ہے" }, how: { en: "When facing challenges, remember 'My Lord is with me, He will guide me'", ur: "مشکلات کا سامنا کرتے وقت یاد رکھو 'میرا رب میرے ساتھ ہے، وہ میری رہنمائی کرے گا'" }, verse: "26:62" },
      { principle: { en: "Prophets seek no worldly reward", ur: "انبیاء دنیاوی اجر نہیں مانگتے" }, how: { en: "True dawah is selfless - 'My reward is only from the Lord of the worlds'", ur: "حقیقی دعوت بے لوث ہے - 'میرا اجر صرف رب العالمین کے ذمے ہے'" }, verse: "26:109,127,145,164,180" },
      { principle: { en: "Don't reject based on followers' status", ur: "پیروکاروں کی حیثیت کی بنیاد پر رد نہ کرو" }, how: { en: "Nuh refused to judge or reject believers based on social class", ur: "نوح نے سماجی طبقے کی بنیاد پر مومنوں کو پرکھنے یا رد کرنے سے انکار کیا" }, verse: "26:111-114" },
      { principle: { en: "Fear Allah who gave all blessings", ur: "اللہ سے ڈرو جس نے تمام نعمتیں دیں" }, how: { en: "Hud reminded of livestock, children, gardens - be grateful", ur: "ہود نے مویشیوں، اولاد، باغات کی یاد دلائی - شکرگزار بنو" }, verse: "26:132-134" },
      { principle: { en: "Give full measure and weight", ur: "پورا ناپ اور تول دو" }, how: { en: "Shu'ayb's core message - economic honesty essential", ur: "شعیب کا بنیادی پیغام - معاشی دیانتداری ضروری" }, verse: "26:181-183" },
      { principle: { en: "Start warning with family", ur: "تنبیہ خاندان سے شروع کرو" }, how: { en: "Warn your closest kindred first", ur: "پہلے اپنے قریب ترین رشتہ داروں کو خبردار کرو" }, verse: "26:214" },
      { principle: { en: "Be humble with followers", ur: "پیروکاروں سے عاجزی کرو" }, how: { en: "Lower your wing to believers - gentle leadership", ur: "مومنوں کے لیے اپنا بازو جھکاؤ - نرم مزاج قیادت" }, verse: "26:215" },
      { principle: { en: "Poetry can be righteous", ur: "شاعری نیک ہو سکتی ہے" }, how: { en: "If combined with faith, good deeds, remembrance, and defending truth", ur: "اگر ایمان، نیک اعمال، ذکرِ الٰہی اور حق کے دفاع کے ساتھ ہو" }, verse: "26:227" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Structural Genius of the Repeated Refrain", ur: "بار بار آنے والی ترجیع کی ساختی عبقریت" },
    insight: { en: "Surah Ash-Shu'ara presents seven prophet narratives (Musa, Ibrahim, Nuh, Hud, Salih, Lut, Shu'ayb), each concluding with the identical refrain: 'And indeed, your Lord - He is the Exalted in Might, the Merciful' (وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ). This refrain appears 8 times total (including after the introduction). The pairing of 'Al-Aziz' (Mighty) and 'Al-Rahim' (Merciful) is profound: after each story of destruction, Allah reminds that He is both powerful enough to destroy deniers AND merciful enough to save believers. The repetition creates a rhythmic structure unique in the Quran, almost like a chorus in a song, reinforcing that all prophetic missions share the same message, face similar rejection, and receive the same divine protection. The surah's name 'The Poets' comes from its ending, creating a contrast: false poets wander aimlessly saying what they don't do, while prophets deliver consistent, truthful messages backed by divine authority.", ur: "سورۃ الشعراء سات انبیاء کے قصے پیش کرتی ہے (موسیٰ، ابراہیم، نوح، ہود، صالح، لوط، شعیب)، ہر ایک ایک ہی ترجیع پر ختم ہوتا ہے: 'بے شک تیرا رب ہی غالب اور رحم فرمانے والا ہے' (وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ)۔ یہ ترجیع کل 8 بار آتی ہے (مقدمے کے بعد بھی شامل)۔ 'العزیز' (غالب) اور 'الرحیم' (رحم والا) کا جوڑا بلیغ ہے: ہر تباہی کے قصے کے بعد اللہ یاد دلاتا ہے کہ وہ منکرین کو تباہ کرنے کی قدرت بھی رکھتا ہے اور مومنوں کو بچانے کی رحمت بھی۔ یہ تکرار قرآن میں ایک منفرد لہ دار ڈھانچہ بناتی ہے، جیسے گیت کا ٹیپ، اس بات کو تقویت دیتی ہے کہ تمام انبیاء کا پیغام ایک ہے، ملتا جلتا انکار ہوتا ہے اور ایک ہی الٰہی حفاظت ملتی ہے۔ سورت کا نام 'الشعراء' اس کے اختتام سے آتا ہے، ایک تضاد پیدا کرتا ہے: جھوٹے شاعر بے مقصد بھٹکتے ہیں وہ کہتے ہیں جو کرتے نہیں، جبکہ انبیاء مستقل، سچے پیغامات پہنچاتے ہیں جن کے پیچھے الٰہی اختیار ہے۔" }
  },

  historicalContext: {
    note: { en: "This Makkan surah was revealed during intense persecution when the Quraysh accused Prophet Muhammad of being a poet or soothsayer. The surah systematically refutes this by distinguishing divine revelation from poetic inspiration. The detailed stories of prophets facing similar accusations and their ultimate vindication served to comfort the Prophet and early Muslims. The magicians' instant conversion upon seeing truth, despite facing crucifixion, was especially relevant - showing that true recognition of truth can happen instantly and that worldly threats cannot shake genuine faith. The emphasis on prophets being 'brothers' to their people (أخوهم) shows messengers are not outsiders but arise from within communities, paralleling Muhammad's situation with Quraysh.", ur: "یہ مکی سورت شدید ایذارسانی کے دوران نازل ہوئی جب قریش نے نبی ﷺ پر شاعر یا کاہن ہونے کا الزام لگایا۔ سورت منظم طریقے سے الٰہی وحی کو شاعرانہ الہام سے ممتاز کرکے اس کی تردید کرتی ہے۔ ایسے ہی الزامات کا سامنا کرنے والے انبیاء کے تفصیلی قصے اور ان کی حتمی کامیابی نبی ﷺ اور ابتدائی مسلمانوں کو تسلی دینے کے لیے تھے۔ جادوگروں کا حق دیکھتے ہی فوری ایمان، سولی کی دھمکی کے باوجود، خاص طور پر متعلقہ تھا - یہ دکھاتا ہے کہ حق کی پہچان فوری ہو سکتی ہے اور دنیاوی دھمکیاں سچے ایمان کو نہیں ہلا سکتیں۔ انبیاء کا اپنی قوم کے 'بھائی' (أخوهم) ہونے پر زور ظاہر کرتا ہے کہ رسول باہر کے نہیں بلکہ قوم میں سے ہی آتے ہیں، جو قریش کے ساتھ محمد ﷺ کی صورتحال کی عکاسی کرتا ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "طسم", example: "Ta Sin Mim", effect: { en: "Mysterious opening letters shared with 27 and 28", ur: "پراسرار حروفِ مقطعات جو سورت 27 اور 28 میں بھی ہیں" } },
      { feature: "بَاخِعٌ نَّفْسَكَ", example: "Destroying yourself", effect: { en: "Rare word bakhiʿ - extreme grief metaphor", ur: "نادر لفظ باخع - شدید غم کا استعارہ" } },
      { feature: "الطَّوْدِ الْعَظِيمِ", example: "Great towering mountain", effect: { en: "Vivid description of parted sea walls", ur: "سمندر کی چیری ہوئی دیواروں کی واضح تصویر کشی" } },
      { feature: "أَفَّاكٍ أَثِيمٍ", example: "Sinful liar", effect: { en: "Intensified adjectives for those devils inspire", ur: "شیاطین جن کو الہام کرتے ہیں ان کے لیے شدید صفات" } },
      { feature: "يَهِيمُونَ", example: "They wander aimlessly", effect: { en: "Root h-y-m suggests lost in desert/love - poetic wandering", ur: "مادہ ہ-ی-م صحرا/محبت میں گم ہونے کا مفہوم - شاعرانہ بھٹکنا" } },
      { feature: "فِي كُلِّ وَادٍ", example: "In every valley", effect: { en: "Metaphor for every topic/fantasy - poets explore all themes", ur: "ہر موضوع/تخیل کا استعارہ - شاعر ہر موضوع میں گھومتے ہیں" } },
      { feature: "اخْفِضْ جَنَاحَكَ", example: "Lower your wing", effect: { en: "Bird metaphor for humility - tender leadership", ur: "عاجزی کا پرندے کا استعارہ - نرم مزاج قیادت" } },
      { feature: "الظُّلَّةِ", example: "The Shadow", effect: { en: "Unique punishment name - cloud of fire over them", ur: "عذاب کا منفرد نام - ان پر آگ کا بادل" } }
    ]
  },

  prophetMentions: {
    prophets: [
      { name: "Musa", arabic: "موسى", verses: "26:10-68", details: "Most detailed - divine call, Pharaoh confrontation, magicians, exodus, sea crossing" },
      { name: "Ibrahim", arabic: "إبراهيم", verses: "26:69-104", details: "Challenging idolatry, describing Allah's attributes, comprehensive dua" },
      { name: "Nuh", arabic: "نوح", verses: "26:105-122", details: "Call to people, elite rejection, death threat, flood" },
      { name: "Hud", arabic: "هود", verses: "26:123-140", details: "Warning 'Ad about vanity, tyranny; their indifference, destruction" },
      { name: "Salih", arabic: "صالح", verses: "26:141-159", details: "Thamud's blessings, she-camel miracle, hamstringing, punishment" },
      { name: "Lut", arabic: "لوط", verses: "26:160-175", details: "Confronting immorality, threat of expulsion, family saved except wife" },
      { name: "Shu'ayb", arabic: "شعيب", verses: "26:176-191", details: "To people of Aykah (thicket), economic justice, Day of Shadow" }
    ]
  },

  destroyedNations: {
    nations: [
      { name: "Pharaoh's people", punishment: "أَغْرَقْنَا - Drowned in sea", verse: "26:66", cause: "Enslaving Israel, claiming divinity" },
      { name: "People of Nuh", punishment: "أَغْرَقْنَا الْبَاقِينَ - Drowned the rest", verse: "26:120", cause: "Centuries of rejection, class discrimination" },
      { name: "'Ad (Hud's people)", punishment: "فَأَهْلَكْنَاهُمْ - We destroyed them", verse: "26:139", cause: "Arrogance, vanity projects, tyranny" },
      { name: "Thamud (Salih's people)", punishment: "فَأَخَذَهُمُ الْعَذَابُ - Punishment seized them", verse: "26:158", cause: "Killing the she-camel despite warning" },
      { name: "People of Lut", punishment: "أَمْطَرْنَا عَلَيْهِم مَّطَرًا - Rained upon them", verse: "26:173", cause: "Unprecedented immorality" },
      { name: "People of Aykah (Shu'ayb)", punishment: "عَذَابُ يَوْمِ الظُّلَّةِ - Day of Shadow", verse: "26:189", cause: "Cheating in weights, corruption" }
    ]
  },

  refrainAnalysis: {
    refrain: "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
    translation: "And indeed, your Lord - He is the Exalted in Might, the Merciful",
    occurrences: [
      { verse: "26:9", after: "Introduction and nature signs" },
      { verse: "26:68", after: "Musa story - sea crossing" },
      { verse: "26:104", after: "Ibrahim story - Paradise/Hell" },
      { verse: "26:122", after: "Nuh story - flood" },
      { verse: "26:140", after: "Hud story - 'Ad destruction" },
      { verse: "26:159", after: "Salih story - Thamud punishment" },
      { verse: "26:175", after: "Lut story - rain of stones" },
      { verse: "26:191", after: "Shu'ayb story - Day of Shadow" }
    ],
    significance: { en: "The dual names combine Allah's power to punish (Al-Aziz) with His mercy to save (Al-Rahim), showing both aspects manifest in every prophetic narrative", ur: "دو ناموں کا جوڑا اللہ کی سزا دینے کی قدرت (العزیز) اور بچانے کی رحمت (الرحیم) کو ملاتا ہے، یہ ظاہر کرتا ہے کہ دونوں پہلو ہر نبوی قصے میں جلوہ گر ہیں" }
  },

  prophetFormula: {
    title: { en: "Common Formula in All Prophet Stories", ur: "تمام انبیاء کے قصوں میں مشترک فارمولا" },
    elements: [
      { element: "كَذَّبَتْ قَوْمُ ... الْمُرْسَلِينَ", meaning: { en: "The people of X denied the messengers", ur: "فلاں قوم نے رسولوں کو جھٹلایا" }, note: { en: "Denial of one = denial of all", ur: "ایک کا انکار = سب کا انکار" } },
      { element: "إِذْ قَالَ لَهُمْ أَخُوهُمْ", meaning: { en: "When their brother said to them", ur: "جب ان کے بھائی نے ان سے کہا" }, note: { en: "Prophet from among them", ur: "نبی ان ہی میں سے" } },
      { element: "أَلَا تَتَّقُونَ", meaning: { en: "Will you not fear Allah?", ur: "کیا تم اللہ سے نہیں ڈرتے؟" }, note: { en: "Call to taqwa", ur: "تقویٰ کی دعوت" } },
      { element: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ", meaning: { en: "I am a trustworthy messenger", ur: "میں تمہارے لیے ایک امانتدار رسول ہوں" }, note: { en: "Trustworthiness claim", ur: "امانتداری کا دعویٰ" } },
      { element: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: { en: "Fear Allah and obey me", ur: "اللہ سے ڈرو اور میری اطاعت کرو" }, note: { en: "Two essential commands", ur: "دو بنیادی احکام" } },
      { element: "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ", meaning: { en: "I ask no reward from you", ur: "میں تم سے کوئی اجر نہیں مانگتا" }, note: { en: "Selfless mission", ur: "بے لوث مشن" } },
      { element: "إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ", meaning: { en: "My reward is only from Lord of worlds", ur: "میرا اجر صرف رب العالمین کے ذمے ہے" }, note: { en: "Seeking divine reward", ur: "الٰہی اجر کی طلب" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "26:7", topic: "Botany", note: { en: "Pairs (zawj) in plants - male and female parts in vegetation", ur: "نباتات میں جوڑے (زوج) - پودوں میں نر اور مادہ حصے" } },
      { verse: "26:63", topic: "Hydrodynamics", note: { en: "Sea parting into towering walls - water behaving against nature", ur: "سمندر کا بلند دیواروں میں چیرا جانا - پانی کا فطرت کے خلاف رویہ" } },
      { verse: "26:78-80", topic: "Medicine", note: { en: "Ibrahim attributes illness to self, healing to Allah - recognizing divine healing", ur: "ابراہیم بیماری اپنی طرف اور شفا اللہ کی طرف منسوب کرتے ہیں - الٰہی شفا کی پہچان" } }
    ]
  },

  qalbSalim: {
    title: { en: "Al-Qalb Al-Salim - The Sound Heart", ur: "القلب السلیم - سلامت دل" },
    verse: "26:89",
    arabic: "إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ",
    meaning: { en: "Except one who comes to Allah with a sound heart", ur: "مگر وہ جو اللہ کے پاس سلامت دل لے کر آئے" },
    significance: { en: "This verse establishes that on Judgment Day, neither wealth nor children will benefit anyone - only a 'sound heart' (qalb salim). Scholars define this as a heart free from shirk, hypocrisy, envy, hatred, and attachment to dunya. Ibrahim prays for this state, showing even prophets seek spiritual purity. This concept became foundational in Islamic spirituality - the ultimate goal is not external worship alone but inner purification.", ur: "یہ آیت یہ طے کرتی ہے کہ قیامت کے دن نہ مال کام آئے گا نہ اولاد - صرف 'سلامت دل' (قلب سلیم)۔ علماء اسے شرک، نفاق، حسد، نفرت اور دنیا سے لگاؤ سے پاک دل کے طور پر بیان کرتے ہیں۔ ابراہیم اس حالت کی دعا کرتے ہیں، جو ظاہر کرتا ہے کہ انبیاء بھی روحانی پاکیزگی چاہتے ہیں۔ یہ تصور اسلامی روحانیت میں بنیادی بن گیا - حتمی مقصد صرف ظاہری عبادت نہیں بلکہ باطنی تزکیہ ہے۔" }
  }
};

export default ONTOLOGY;
