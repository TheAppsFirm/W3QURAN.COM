/**
 * Surah Al-Kahf (18) - Ontology of Quranic Concepts
 * The Cave - 110 Ayahs
 * Theme: Four stories of trials - faith, wealth, knowledge, and power
 *
 * This surah contains four major narratives:
 * 1. Companions of the Cave (Ashab al-Kahf) - Trial of Faith
 * 2. Owner of Two Gardens - Trial of Wealth
 * 3. Musa and Khidr - Trial of Knowledge
 * 4. Dhul-Qarnayn - Trial of Power
 *
 * Special Virtue: Protection from Dajjal when recited on Fridays
 */

export const ONTOLOGY = {
  surahId: 18,
  surahName: "Al-Kahf",
  surahNameArabic: "الكهف",
  revelationType: "Makki",
  totalAyahs: 110,

  categories: {
    // INTRODUCTION (1-8)
    quranPraise: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Praise of the Quran",
      nameArabic: "الثناء على القرآن",
      concepts: [
        { term: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ", meaning: { en: "Praise to Allah who revealed", ur: "تمام تعریفیں اللہ کے لیے جس نے نازل کیا" }, explanation: { en: "Opening with gratitude for revelation", ur: "وحی کی نعمت پر شکر کے ساتھ آغاز" }, verseRef: "18:1" },
        { term: "كِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا", meaning: { en: "The Book with no crookedness", ur: "کتاب جس میں کوئی کجی نہیں" }, explanation: { en: "Quran is straight, without deviation", ur: "قرآن سیدھا ہے، کسی انحراف کے بغیر" }, verseRef: "18:1" },
        { term: "قَيِّمًا", meaning: { en: "Upright/Establisher", ur: "سیدھی/قائم رکھنے والی" }, explanation: { en: "Establishes truth and guides", ur: "حق قائم کرتی اور رہنمائی کرتی ہے" }, verseRef: "18:2" },
        { term: "لِّيُنذِرَ بَأْسًا شَدِيدًا", meaning: { en: "To warn of severe punishment", ur: "سخت عذاب سے ڈرانے کے لیے" }, explanation: { en: "Quran as warner", ur: "قرآن بطور ڈرانے والا" }, verseRef: "18:2" },
        { term: "وَيُبَشِّرَ الْمُؤْمِنِينَ", meaning: { en: "And give good news to believers", ur: "اور ایمان والوں کو خوشخبری دے" }, explanation: { en: "Quran as bearer of glad tidings", ur: "قرآن بطور بشارت دینے والا" }, verseRef: "18:2" }
      ]
    },

    // STORY 1: COMPANIONS OF THE CAVE (9-26)
    companionsOfCave: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Companions of the Cave (Ashab al-Kahf)",
      nameArabic: "أصحاب الكهف - فتنة الدين",
      themeType: "Trial of Faith",
      concepts: [
        { term: "فِتْيَةٌ آمَنُوا بِرَبِّهِمْ", meaning: { en: "Young men who believed in their Lord", ur: "نوجوان جو اپنے رب پر ایمان لائے" }, explanation: { en: "Youth with strong faith", ur: "مضبوط ایمان والے نوجوان" }, verseRef: "18:13" },
        { term: "وَزِدْنَاهُمْ هُدًى", meaning: { en: "And We increased them in guidance", ur: "اور ہم نے ان کو ہدایت میں بڑھایا" }, explanation: { en: "Allah increases guidance for the guided", ur: "اللہ ہدایت یافتہ لوگوں کی ہدایت بڑھاتا ہے" }, verseRef: "18:13" },
        { term: "رَبَطْنَا عَلَىٰ قُلُوبِهِمْ", meaning: { en: "We bound their hearts", ur: "ہم نے ان کے دلوں کو مضبوط کیا" }, explanation: { en: "Allah strengthened their hearts", ur: "اللہ نے ان کے دل مضبوط کیے" }, verseRef: "18:14" },
        { term: "رَبُّنَا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Our Lord is Lord of heavens and earth", ur: "ہمارا رب آسمانوں اور زمین کا رب ہے" }, explanation: { en: "Declaration of pure Tawheed", ur: "خالص توحید کا اعلان" }, verseRef: "18:14" },
        { term: "لَن نَّدْعُوَ مِن دُونِهِ إِلَٰهًا", meaning: { en: "We will never invoke besides Him any deity", ur: "ہم اس کے سوا کسی معبود کو نہیں پکاریں گے" }, explanation: { en: "Rejection of false gods", ur: "جھوٹے معبودوں کا انکار" }, verseRef: "18:14" },
        { term: "فَأْوُوا إِلَى الْكَهْفِ", meaning: { en: "Retreat to the cave", ur: "غار کی طرف پناہ لو" }, explanation: { en: "Strategic withdrawal to protect faith", ur: "ایمان کی حفاظت کے لیے حکمت عملی سے الگ ہونا" }, verseRef: "18:16" },
        { term: "يَنشُرْ لَكُمْ رَبُّكُم مِّن رَّحْمَتِهِ", meaning: { en: "Your Lord will spread His mercy", ur: "تمہارا رب تم پر اپنی رحمت پھیلائے گا" }, explanation: { en: "Trust in Allah's mercy", ur: "اللہ کی رحمت پر بھروسہ" }, verseRef: "18:16" }
      ]
    },

    caveDescription: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Miraculous Sleep",
      nameArabic: "النوم المعجز",
      concepts: [
        { term: "ضَرَبْنَا عَلَىٰ آذَانِهِمْ", meaning: { en: "We cast upon their ears", ur: "ہم نے ان کے کانوں پر (نیند کا) پردہ ڈال دیا" }, explanation: { en: "Supernatural deep sleep", ur: "غیر معمولی گہری نیند" }, verseRef: "18:11" },
        { term: "سِنِينَ عَدَدًا", meaning: { en: "For a number of years", ur: "کئی سالوں تک" }, explanation: { en: "Long miraculous slumber", ur: "طویل معجزاتی نیند" }, verseRef: "18:11" },
        { term: "لَبِثُوا ثَلَاثَ مِائَةٍ سِنِينَ وَازْدَادُوا تِسْعًا", meaning: { en: "They stayed 300 years, plus 9", ur: "وہ تین سو سال رہے اور نو مزید" }, explanation: { en: "309 years - solar vs lunar calculation", ur: "309 سال - شمسی بمقابلہ قمری حساب" }, verseRef: "18:25" },
        { term: "تَزَاوَرُ عَن كَهْفِهِمْ", meaning: { en: "Inclines away from their cave", ur: "ان کے غار سے ہٹ جاتی" }, explanation: { en: "Sun diverted to preserve them", ur: "سورج ان کی حفاظت کے لیے ہٹ جاتا" }, verseRef: "18:17" },
        { term: "ذَاتَ الْيَمِينِ... ذَاتَ الشِّمَالِ", meaning: { en: "To the right... to the left", ur: "دائیں طرف... بائیں طرف" }, explanation: { en: "Divine protection from sun", ur: "سورج سے الہی حفاظت" }, verseRef: "18:17" },
        { term: "وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ", meaning: { en: "Their dog stretching its forelegs", ur: "اور ان کا کتا اپنے دونوں ہاتھ پھیلائے ہوئے" }, explanation: { en: "Even their companion dog was preserved", ur: "ان کا ساتھی کتا بھی محفوظ رہا" }, verseRef: "18:18" },
        { term: "نُقَلِّبُهُمْ ذَاتَ الْيَمِينِ وَذَاتَ الشِّمَالِ", meaning: { en: "We turned them right and left", ur: "ہم انہیں دائیں اور بائیں کروٹ بدلواتے" }, explanation: { en: "Allah preserved their bodies from decay", ur: "اللہ نے ان کے جسموں کو گلنے سے محفوظ رکھا" }, verseRef: "18:18" }
      ]
    },

    caveLessons: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Lessons from the Cave",
      nameArabic: "دروس الكهف",
      concepts: [
        { term: "وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَٰلِكَ غَدًا", meaning: { en: "Never say 'I will do this tomorrow'", ur: "کسی چیز کے بارے میں ہرگز نہ کہو کہ میں یہ کل کروں گا" }, explanation: { en: "Do not speak of future without Allah", ur: "مستقبل کی بات اللہ کے ذکر کے بغیر نہ کرو" }, verseRef: "18:23" },
        { term: "إِلَّا أَن يَشَاءَ اللَّهُ", meaning: { en: "Except [with] 'If Allah wills'", ur: "مگر یہ کہ اللہ چاہے (انشاء اللہ)" }, explanation: { en: "Always say Insha'Allah for future plans", ur: "مستقبل کے ارادوں کے لیے ہمیشہ انشاء اللہ کہو" }, verseRef: "18:24" },
        { term: "وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ", meaning: { en: "Remember your Lord when you forget", ur: "اور جب بھول جاؤ تو اپنے رب کو یاد کرو" }, explanation: { en: "Turn to Allah when forgetful", ur: "بھولنے پر اللہ کی طرف رجوع کرو" }, verseRef: "18:24" },
        { term: "سَيَقُولُونَ ثَلَاثَةٌ رَّابِعُهُمْ كَلْبُهُمْ", meaning: { en: "They will say 'three, fourth is their dog'", ur: "وہ کہیں گے تین ہیں، چوتھا ان کا کتا" }, explanation: { en: "Speculation about their number", ur: "ان کی تعداد کے بارے میں قیاس آرائی" }, verseRef: "18:22" },
        { term: "قُل رَّبِّي أَعْلَمُ بِعِدَّتِهِمْ", meaning: { en: "Say: My Lord knows best their number", ur: "کہو: میرا رب ان کی تعداد بہتر جانتا ہے" }, explanation: { en: "Only Allah knows hidden matters", ur: "صرف اللہ غیب کی باتیں جانتا ہے" }, verseRef: "18:22" }
      ]
    },

    // STORY 2: TWO GARDENS (32-44)
    twoGardens: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Parable of Two Gardens",
      nameArabic: "مثل الجنتين - فتنة المال",
      themeType: "Trial of Wealth",
      concepts: [
        { term: "جَنَّتَيْنِ مِنْ أَعْنَابٍ", meaning: { en: "Two gardens of grapevines", ur: "انگوروں کے دو باغ" }, explanation: { en: "Abundant worldly blessings", ur: "بے شمار دنیاوی نعمتیں" }, verseRef: "18:32" },
        { term: "وَحَفَفْنَاهُمَا بِنَخْلٍ", meaning: { en: "Bordered with palm trees", ur: "کھجوروں سے گھیرے ہوئے" }, explanation: { en: "Complete and beautiful gardens", ur: "مکمل اور خوبصورت باغات" }, verseRef: "18:32" },
        { term: "وَفَجَّرْنَا خِلَالَهُمَا نَهَرًا", meaning: { en: "We caused a river between them", ur: "اور ان کے درمیان نہر بہائی" }, explanation: { en: "Water - source of life", ur: "پانی - زندگی کا سرچشمہ" }, verseRef: "18:33" },
        { term: "أَنَا أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا", meaning: { en: "I am greater than you in wealth and mightier in men", ur: "میں تجھ سے زیادہ مال والا اور لوگوں میں زیادہ عزت والا ہوں" }, explanation: { en: "Arrogance from wealth", ur: "دولت سے تکبر" }, verseRef: "18:34" },
        { term: "مَا أَظُنُّ أَن تَبِيدَ هَٰذِهِ أَبَدًا", meaning: { en: "I do not think this will ever perish", ur: "مجھے نہیں لگتا یہ کبھی تباہ ہوگا" }, explanation: { en: "False sense of permanence", ur: "دوام کا جھوٹا احساس" }, verseRef: "18:35" },
        { term: "وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً", meaning: { en: "I do not think the Hour is coming", ur: "مجھے نہیں لگتا قیامت آنے والی ہے" }, explanation: { en: "Denial of Day of Judgment", ur: "قیامت کا انکار" }, verseRef: "18:36" }
      ]
    },

    believerResponse: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "The Believer's Response",
      nameArabic: "رد المؤمن",
      concepts: [
        { term: "أَكَفَرْتَ بِالَّذِي خَلَقَكَ مِن تُرَابٍ", meaning: { en: "Have you disbelieved in He who created you from dust?", ur: "کیا تو نے اس کا انکار کیا جس نے تجھے مٹی سے بنایا؟" }, explanation: { en: "Reminder of humble origin", ur: "عاجز اصل کی یاد دہانی" }, verseRef: "18:37" },
        { term: "لَّٰكِنَّا هُوَ اللَّهُ رَبِّي", meaning: { en: "But as for me, He is Allah, my Lord", ur: "لیکن وہ اللہ میرا رب ہے" }, explanation: { en: "Strong declaration of faith", ur: "ایمان کا مضبوط اعلان" }, verseRef: "18:38" },
        { term: "وَلَا أُشْرِكُ بِرَبِّي أَحَدًا", meaning: { en: "And I do not associate anyone with my Lord", ur: "اور میں اپنے رب کے ساتھ کسی کو شریک نہیں ٹھہراتا" }, explanation: { en: "Pure Tawheed", ur: "خالص توحید" }, verseRef: "18:38" },
        { term: "مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ", meaning: { en: "What Allah willed! No power except with Allah", ur: "جو اللہ نے چاہا! طاقت نہیں مگر اللہ سے" }, explanation: { en: "Acknowledgment of divine will and power", ur: "الہی مشیت اور قدرت کا اعتراف" }, verseRef: "18:39" },
        { term: "فَعَسَىٰ رَبِّي أَن يُؤْتِيَنِ خَيْرًا", meaning: { en: "Perhaps my Lord will give me better", ur: "شاید میرا رب مجھے تیرے باغ سے بہتر دے" }, explanation: { en: "Hope in Allah's provision", ur: "اللہ کے رزق پر امید" }, verseRef: "18:40" }
      ]
    },

    gardensDestruction: {
      color: '#10B981',
      icon: 'Book',
      name: "Destruction of the Gardens",
      nameArabic: "هلاك الجنتين",
      concepts: [
        { term: "وَأُحِيطَ بِثَمَرِهِ", meaning: { en: "His fruits were encompassed [by ruin]", ur: "اس کے پھل تباہی میں گھیر لیے گئے" }, explanation: { en: "Complete destruction", ur: "مکمل تباہی" }, verseRef: "18:42" },
        { term: "فَأَصْبَحَ يُقَلِّبُ كَفَّيْهِ", meaning: { en: "He began turning his hands", ur: "وہ اپنے ہاتھ ملنے لگا" }, explanation: { en: "Gesture of regret", ur: "پچھتاوے کا اظہار" }, verseRef: "18:42" },
        { term: "يَا لَيْتَنِي لَمْ أُشْرِكْ بِرَبِّي أَحَدًا", meaning: { en: "I wish I had not associated anyone with my Lord", ur: "کاش میں نے اپنے رب کے ساتھ کسی کو شریک نہ ٹھہرایا ہوتا" }, explanation: { en: "Regret came too late", ur: "پچھتاوا بہت دیر سے آیا" }, verseRef: "18:42" },
        { term: "هُنَالِكَ الْوَلَايَةُ لِلَّهِ الْحَقِّ", meaning: { en: "There authority belongs to Allah, the Truth", ur: "وہاں اختیار اللہ برحق کا ہے" }, explanation: { en: "True protection is from Allah", ur: "حقیقی حفاظت اللہ کی طرف سے ہے" }, verseRef: "18:44" }
      ]
    },

    worldlyLifeParable: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Parable of Worldly Life",
      nameArabic: "مثل الحياة الدنيا",
      concepts: [
        { term: "إِنَّمَا مَثَلُ الْحَيَاةِ الدُّنْيَا", meaning: { en: "The example of worldly life", ur: "دنیاوی زندگی کی مثال" }, explanation: { en: "Temporary nature illustrated", ur: "عارضی فطرت کی عکاسی" }, verseRef: "18:45" },
        { term: "كَمَاءٍ أَنزَلْنَاهُ مِنَ السَّمَاءِ", meaning: { en: "Like water We send down from sky", ur: "جیسے پانی جو ہم نے آسمان سے اتارا" }, explanation: { en: "Rain analogy", ur: "بارش کی مثال" }, verseRef: "18:45" },
        { term: "فَاخْتَلَطَ بِهِ نَبَاتُ الْأَرْضِ", meaning: { en: "Vegetation grows with it", ur: "اس سے زمین کی سبزی مل جل گئی" }, explanation: { en: "Life flourishes temporarily", ur: "زندگی عارضی طور پر پھلتی پھولتی ہے" }, verseRef: "18:45" },
        { term: "فَأَصْبَحَ هَشِيمًا تَذْرُوهُ الرِّيَاحُ", meaning: { en: "It becomes dry debris, scattered by winds", ur: "پھر خشک ٹکڑے ہو گئی جسے ہوائیں اڑاتی ہیں" }, explanation: { en: "All worldly things perish", ur: "سب دنیاوی چیزیں فنا ہو جاتی ہیں" }, verseRef: "18:45" },
        { term: "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا", meaning: { en: "Wealth and children are adornment of worldly life", ur: "مال اور اولاد دنیاوی زندگی کی زینت ہیں" }, explanation: { en: "Temporary attractions", ur: "عارضی کشش" }, verseRef: "18:46" },
        { term: "وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ", meaning: { en: "But lasting good deeds are better", ur: "لیکن باقی رہنے والی نیکیاں بہتر ہیں" }, explanation: { en: "Eternal deeds outweigh temporal wealth", ur: "ابدی اعمال عارضی دولت سے بہتر ہیں" }, verseRef: "18:46" }
      ]
    },

    // STORY 3: MUSA AND KHIDR (60-82)
    musaJourney: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Musa's Journey to Knowledge",
      nameArabic: "رحلة موسى للعلم - فتنة العلم",
      themeType: "Trial of Knowledge",
      concepts: [
        { term: "لَا أَبْرَحُ حَتَّىٰ أَبْلُغَ مَجْمَعَ الْبَحْرَيْنِ", meaning: { en: "I will not cease until I reach the junction of two seas", ur: "میں نہیں رکوں گا جب تک دو سمندروں کے سنگم تک نہ پہنچ جاؤں" }, explanation: { en: "Determination to seek knowledge", ur: "علم کی تلاش کا پختہ ارادہ" }, verseRef: "18:60" },
        { term: "أَوْ أَمْضِيَ حُقُبًا", meaning: { en: "Or I will continue for ages", ur: "یا زمانوں تک چلتا رہوں" }, explanation: { en: "Willingness to journey long", ur: "طویل سفر کی آمادگی" }, verseRef: "18:60" },
        { term: "اتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ عَجَبًا", meaning: { en: "It took its course into the sea amazingly", ur: "مچھلی نے سمندر میں عجیب راستہ بنا لیا" }, explanation: { en: "Sign of the meeting place", ur: "ملاقات کی جگہ کی نشانی" }, verseRef: "18:63" },
        { term: "ذَٰلِكَ مَا كُنَّا نَبْغِ", meaning: { en: "That is what we were seeking", ur: "یہی تو ہم ڈھونڈ رہے تھے" }, explanation: { en: "Finding the destination", ur: "منزل کا ملنا" }, verseRef: "18:64" },
        { term: "فَارْتَدَّا عَلَىٰ آثَارِهِمَا قَصَصًا", meaning: { en: "They returned, retracing their footsteps", ur: "وہ دونوں اپنے نقش قدم پر واپس لوٹے" }, explanation: { en: "Going back to find Khidr", ur: "خضر کو تلاش کرنے واپس جانا" }, verseRef: "18:64" }
      ]
    },

    khidrMeeting: {
      color: '#EF4444',
      icon: 'Users',
      name: "Meeting Khidr",
      nameArabic: "لقاء الخضر",
      concepts: [
        { term: "عَبْدًا مِّنْ عِبَادِنَا", meaning: { en: "A servant from among Our servants", ur: "ہمارے بندوں میں سے ایک بندہ" }, explanation: { en: "Khidr - Allah's special servant", ur: "خضر - اللہ کا خاص بندہ" }, verseRef: "18:65" },
        { term: "آتَيْنَاهُ رَحْمَةً مِّنْ عِندِنَا", meaning: { en: "We gave him mercy from Us", ur: "ہم نے اسے اپنی طرف سے رحمت عطا کی" }, explanation: { en: "Divine blessing upon Khidr", ur: "خضر پر الہی رحمت" }, verseRef: "18:65" },
        { term: "وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا", meaning: { en: "Taught him knowledge from Our presence", ur: "اور ہم نے اسے اپنے پاس سے علم سکھایا" }, explanation: { en: "Ladunni (divine) knowledge", ur: "لدنی (الہی) علم" }, verseRef: "18:65" },
        { term: "هَلْ أَتَّبِعُكَ عَلَىٰ أَن تُعَلِّمَنِ", meaning: { en: "May I follow you that you teach me", ur: "کیا میں آپ کی پیروی کروں تاکہ آپ مجھے سکھائیں" }, explanation: { en: "Musa's humble request", ur: "موسیٰ کی عاجزانہ درخواست" }, verseRef: "18:66" },
        { term: "إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا", meaning: { en: "You will never be able to have patience with me", ur: "تم میرے ساتھ صبر نہیں کر سکو گے" }, explanation: { en: "Warning about difficult lessons", ur: "مشکل اسباق کے بارے میں خبردار" }, verseRef: "18:67" },
        { term: "وَكَيْفَ تَصْبِرُ عَلَىٰ مَا لَمْ تُحِطْ بِهِ خُبْرًا", meaning: { en: "How can you be patient about what you do not encompass in knowledge?", ur: "تم اس بات پر صبر کیسے کرو گے جس کا تمہیں علم نہیں?" }, explanation: { en: "Human limitation in understanding divine wisdom", ur: "الہی حکمت سمجھنے میں انسانی محدودیت" }, verseRef: "18:68" }
      ]
    },

    threeIncidents: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Three Incidents",
      nameArabic: "الحوادث الثلاث",
      concepts: [
        { term: "خَرَقَهَا", meaning: { en: "He made a hole in it", ur: "اس نے کشتی میں سوراخ کر دیا" }, explanation: { en: "First incident - damaging the ship", ur: "پہلا واقعہ - کشتی کو نقصان پہنچانا" }, verseRef: "18:71" },
        { term: "أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا", meaning: { en: "Have you torn it to drown its people?", ur: "کیا آپ نے اسے توڑا تاکہ اس کے لوگوں کو ڈبو دیں؟" }, explanation: { en: "Musa's objection", ur: "موسیٰ کا اعتراض" }, verseRef: "18:71" },
        { term: "فَقَتَلَهُ", meaning: { en: "So he killed him", ur: "تو اس نے اسے قتل کر دیا" }, explanation: { en: "Second incident - killing the boy", ur: "دوسرا واقعہ - لڑکے کو قتل کرنا" }, verseRef: "18:74" },
        { term: "أَقَتَلْتَ نَفْسًا زَكِيَّةً", meaning: { en: "Have you killed a pure soul?", ur: "کیا آپ نے بے گناہ جان ماری؟" }, explanation: { en: "Musa's greater objection", ur: "موسیٰ کا شدید اعتراض" }, verseRef: "18:74" },
        { term: "جِدَارًا يُرِيدُ أَن يَنقَضَّ فَأَقَامَهُ", meaning: { en: "A wall about to collapse, so he restored it", ur: "ایک دیوار جو گرنے والی تھی، اس نے اسے سیدھا کر دیا" }, explanation: { en: "Third incident - fixing the wall", ur: "تیسرا واقعہ - دیوار کی مرمت" }, verseRef: "18:77" },
        { term: "لَوْ شِئْتَ لَاتَّخَذْتَ عَلَيْهِ أَجْرًا", meaning: { en: "If you wished, you could have taken payment", ur: "اگر آپ چاہتے تو اس کی اجرت لے سکتے تھے" }, explanation: { en: "Musa suggests charging for service", ur: "موسیٰ نے خدمت کی اجرت لینے کا مشورہ دیا" }, verseRef: "18:77" },
        { term: "هَٰذَا فِرَاقُ بَيْنِي وَبَيْنِكَ", meaning: { en: "This is the parting between me and you", ur: "یہ میرے اور تمہارے درمیان جدائی ہے" }, explanation: { en: "End of companionship", ur: "ساتھ کا خاتمہ" }, verseRef: "18:78" }
      ]
    },

    khidrExplanations: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Khidr's Explanations",
      nameArabic: "تفسير الخضر",
      concepts: [
        { term: "أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ", meaning: { en: "As for the ship, it belonged to poor people", ur: "رہی کشتی تو وہ مسکینوں کی تھی" }, explanation: { en: "Ship damage to save from tyrannical king", ur: "ظالم بادشاہ سے بچانے کے لیے کشتی کو نقصان" }, verseRef: "18:79" },
        { term: "وَكَانَ وَرَاءَهُم مَّلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا", meaning: { en: "Behind them was a king seizing every [good] ship", ur: "ان کے پیچھے ایک بادشاہ تھا جو ہر اچھی کشتی چھین لیتا" }, explanation: { en: "Hidden threat avoided", ur: "پوشیدہ خطرے سے بچاؤ" }, verseRef: "18:79" },
        { term: "أَبَوَاهُ مُؤْمِنَيْنِ", meaning: { en: "His parents were believers", ur: "اس کے والدین مومن تھے" }, explanation: { en: "Parents would be tested by ungrateful son", ur: "والدین کی ناشکرے بیٹے سے آزمائش ہوتی" }, verseRef: "18:80" },
        { term: "فَخَشِينَا أَن يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا", meaning: { en: "We feared he would burden them with transgression and disbelief", ur: "ہمیں ڈر تھا کہ وہ ان کو سرکشی اور کفر میں مبتلا کر دے" }, explanation: { en: "Son would cause parents to go astray", ur: "بیٹا والدین کو گمراہ کر دیتا" }, verseRef: "18:80" },
        { term: "فَأَرَدْنَا أَن يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا", meaning: { en: "We intended that their Lord substitute better", ur: "ہم نے چاہا کہ ان کا رب انہیں اس سے بہتر بدلہ دے" }, explanation: { en: "Allah's better replacement", ur: "اللہ کا بہتر بدل" }, verseRef: "18:81" },
        { term: "وَكَانَ أَبُوهُمَا صَالِحًا", meaning: { en: "Their father had been righteous", ur: "ان کا باپ نیک تھا" }, explanation: { en: "Grandfather's righteousness protected grandsons' treasure", ur: "دادا کی نیکی نے پوتوں کے خزانے کی حفاظت کی" }, verseRef: "18:82" },
        { term: "وَمَا فَعَلْتُهُ عَنْ أَمْرِي", meaning: { en: "I did not do it of my own accord", ur: "میں نے یہ اپنی مرضی سے نہیں کیا" }, explanation: { en: "All actions by Allah's command", ur: "تمام اعمال اللہ کے حکم سے" }, verseRef: "18:82" }
      ]
    },

    // STORY 4: DHUL-QARNAYN (83-98)
    dhulQarnaynIntro: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Dhul-Qarnayn's Authority",
      nameArabic: "ذو القرنين - فتنة السلطة",
      themeType: "Trial of Power",
      concepts: [
        { term: "مَكَّنَّا لَهُ فِي الْأَرْضِ", meaning: { en: "We established him in the earth", ur: "ہم نے اسے زمین میں اقتدار دیا" }, explanation: { en: "Allah granted him authority", ur: "اللہ نے اسے اختیار عطا کیا" }, verseRef: "18:84" },
        { term: "وَآتَيْنَاهُ مِن كُلِّ شَيْءٍ سَبَبًا", meaning: { en: "We gave him means to everything", ur: "اور ہم نے اسے ہر چیز کا ذریعہ دیا" }, explanation: { en: "Resources and capabilities", ur: "وسائل اور صلاحیتیں" }, verseRef: "18:84" },
        { term: "فَأَتْبَعَ سَبَبًا", meaning: { en: "So he followed a way", ur: "تو اس نے ایک راستے پر چلنا شروع کیا" }, explanation: { en: "Used resources purposefully", ur: "وسائل کا بامقصد استعمال" }, verseRef: "18:85" }
      ]
    },

    threeJourneys: {
      color: '#EC4899',
      icon: 'Globe',
      name: "The Three Journeys",
      nameArabic: "الرحلات الثلاث",
      concepts: [
        { term: "مَغْرِبَ الشَّمْسِ", meaning: { en: "Setting of the sun", ur: "سورج کے غروب کی جگہ" }, explanation: { en: "First journey - to the west", ur: "پہلا سفر - مغرب کی طرف" }, verseRef: "18:86" },
        { term: "وَجَدَهَا تَغْرُبُ فِي عَيْنٍ حَمِئَةٍ", meaning: { en: "Found it setting in a muddy spring", ur: "دیکھا کہ سورج گدلے چشمے میں ڈوب رہا ہے" }, explanation: { en: "Western ocean appearance", ur: "مغربی سمندر کا منظر" }, verseRef: "18:86" },
        { term: "مَطْلِعَ الشَّمْسِ", meaning: { en: "Rising of the sun", ur: "سورج کے طلوع کی جگہ" }, explanation: { en: "Second journey - to the east", ur: "دوسرا سفر - مشرق کی طرف" }, verseRef: "18:90" },
        { term: "لَمْ نَجْعَل لَّهُم مِّن دُونِهَا سِتْرًا", meaning: { en: "We made no veil for them against it", ur: "ہم نے ان کے لیے اس سے کوئی پردہ نہیں بنایا" }, explanation: { en: "Exposed people without shelter", ur: "بے پناہ لوگ بغیر سائبان کے" }, verseRef: "18:90" },
        { term: "بَيْنَ السَّدَّيْنِ", meaning: { en: "Between two mountains", ur: "دو پہاڑوں کے درمیان" }, explanation: { en: "Third journey - to the barrier", ur: "تیسرا سفر - رکاوٹ کی طرف" }, verseRef: "18:93" }
      ]
    },

    yajoojMajooj: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Yajuj and Majuj (Gog and Magog)",
      nameArabic: "يأجوج ومأجوج",
      concepts: [
        { term: "يَأْجُوجَ وَمَأْجُوجَ مُفْسِدُونَ فِي الْأَرْضِ", meaning: { en: "Gog and Magog are corrupters in the land", ur: "یاجوج اور ماجوج زمین میں فساد مچانے والے ہیں" }, explanation: { en: "Destructive nations", ur: "تباہ کن قومیں" }, verseRef: "18:94" },
        { term: "نَجْعَلُ لَكَ خَرْجًا", meaning: { en: "May we assign for you an expenditure", ur: "کیا ہم آپ کے لیے ٹیکس مقرر کریں؟" }, explanation: { en: "People offer payment for protection", ur: "لوگوں نے حفاظت کے لیے ادائیگی کی پیشکش" }, verseRef: "18:94" },
        { term: "مَا مَكَّنِّي فِيهِ رَبِّي خَيْرٌ", meaning: { en: "What my Lord has established me in is better", ur: "جو میرے رب نے مجھے دیا وہ بہتر ہے" }, explanation: { en: "Dhul-Qarnayn refuses payment", ur: "ذوالقرنین نے ادائیگی سے انکار کیا" }, verseRef: "18:95" },
        { term: "فَأَعِينُونِي بِقُوَّةٍ", meaning: { en: "Aid me with strength", ur: "محنت سے میری مدد کرو" }, explanation: { en: "Requests labor, not wealth", ur: "دولت نہیں بلکہ محنت کی طلب" }, verseRef: "18:95" },
        { term: "آتُونِي زُبَرَ الْحَدِيدِ", meaning: { en: "Bring me blocks of iron", ur: "مجھے لوہے کے ٹکڑے لا کر دو" }, explanation: { en: "Iron construction materials", ur: "لوہے کا تعمیراتی سامان" }, verseRef: "18:96" },
        { term: "أُفْرِغْ عَلَيْهِ قِطْرًا", meaning: { en: "Pour over it molten copper", ur: "اس پر پگھلا ہوا تانبا انڈیل دو" }, explanation: { en: "Barrier construction technique", ur: "رکاوٹ کی تعمیر کا طریقہ" }, verseRef: "18:96" }
      ]
    },

    barrierSuccess: {
      color: '#10B981',
      icon: 'Book',
      name: "The Barrier's Success",
      nameArabic: "نجاح السد",
      concepts: [
        { term: "فَمَا اسْطَاعُوا أَن يَظْهَرُوهُ", meaning: { en: "They could not scale it", ur: "وہ اس پر چڑھ نہ سکے" }, explanation: { en: "Barrier too high to climb", ur: "رکاوٹ چڑھنے کے لیے بہت اونچی" }, verseRef: "18:97" },
        { term: "وَمَا اسْتَطَاعُوا لَهُ نَقْبًا", meaning: { en: "Nor could they penetrate it", ur: "اور نہ اس میں سوراخ کر سکے" }, explanation: { en: "Barrier too strong to pierce", ur: "رکاوٹ توڑنے کے لیے بہت مضبوط" }, verseRef: "18:97" },
        { term: "هَٰذَا رَحْمَةٌ مِّن رَّبِّي", meaning: { en: "This is a mercy from my Lord", ur: "یہ میرے رب کی رحمت ہے" }, explanation: { en: "Dhul-Qarnayn's attribution to Allah", ur: "ذوالقرنین نے کامیابی اللہ کی طرف منسوب کی" }, verseRef: "18:98" },
        { term: "فَإِذَا جَاءَ وَعْدُ رَبِّي جَعَلَهُ دَكَّاءَ", meaning: { en: "When the promise of my Lord comes, He will make it level", ur: "جب میرے رب کا وعدہ آئے گا تو وہ اسے زمین کے برابر کر دے گا" }, explanation: { en: "Barrier will fall before Day of Judgment", ur: "قیامت سے پہلے رکاوٹ ٹوٹ جائے گی" }, verseRef: "18:98" },
        { term: "وَكَانَ وَعْدُ رَبِّي حَقًّا", meaning: { en: "And the promise of my Lord is truth", ur: "اور میرے رب کا وعدہ سچا ہے" }, explanation: { en: "Certainty of Allah's promise", ur: "اللہ کے وعدے کی یقینی تکمیل" }, verseRef: "18:98" }
      ]
    },

    // DAY OF JUDGMENT (99-110)
    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      concepts: [
        { term: "وَتَرَكْنَا بَعْضَهُمْ يَوْمَئِذٍ يَمُوجُ فِي بَعْضٍ", meaning: { en: "We will leave them surging over each other", ur: "اس دن ہم انہیں ایک دوسرے میں ٹکراتا چھوڑ دیں گے" }, explanation: { en: "Chaos when barrier breaks", ur: "رکاوٹ ٹوٹنے پر افراتفری" }, verseRef: "18:99" },
        { term: "وَنُفِخَ فِي الصُّورِ فَجَمَعْنَاهُمْ جَمْعًا", meaning: { en: "The trumpet is blown and We gather them all", ur: "صور پھونکا جائے گا اور ہم سب کو جمع کریں گے" }, explanation: { en: "Resurrection gathering", ur: "حشر کا اجتماع" }, verseRef: "18:99" },
        { term: "وَعَرَضْنَا جَهَنَّمَ يَوْمَئِذٍ لِّلْكَافِرِينَ عَرْضًا", meaning: { en: "We present Hell to disbelievers on display", ur: "اس دن ہم کافروں کو جہنم دکھائیں گے" }, explanation: { en: "Hell made visible", ur: "جہنم سامنے لائی جائے گی" }, verseRef: "18:100" },
        { term: "أَفَحَسِبَ الَّذِينَ كَفَرُوا أَن يَتَّخِذُوا عِبَادِي", meaning: { en: "Did those who disbelieve think they could take My servants", ur: "کیا کافروں نے سمجھا کہ وہ میرے بندوں کو بنا لیں" }, explanation: { en: "False worship exposed", ur: "جھوٹی عبادت کا پردہ فاش" }, verseRef: "18:102" },
        { term: "الَّذِينَ ضَلَّ سَعْيُهُمْ فِي الْحَيَاةِ الدُّنْيَا", meaning: { en: "Those whose effort is lost in worldly life", ur: "جن کی کوشش دنیاوی زندگی میں ضائع ہو گئی" }, explanation: { en: "Wasted efforts of disbelievers", ur: "کافروں کی بے کار محنتیں" }, verseRef: "18:104" },
        { term: "يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا", meaning: { en: "They think they are doing good", ur: "وہ سمجھتے ہیں کہ اچھا کام کر رہے ہیں" }, explanation: { en: "Self-deception in misguidance", ur: "گمراہی میں خود فریبی" }, verseRef: "18:104" }
      ]
    },

    // CLOSING MESSAGE (105-110)
    closingMessage: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Final Message",
      nameArabic: "الخاتمة",
      concepts: [
        { term: "فَلَا نُقِيمُ لَهُمْ يَوْمَ الْقِيَامَةِ وَزْنًا", meaning: { en: "We will not assign them any weight on Day of Resurrection", ur: "قیامت کے دن ہم ان کا کوئی وزن قائم نہیں کریں گے" }, explanation: { en: "Worthless deeds of disbelievers", ur: "کافروں کے بے وزن اعمال" }, verseRef: "18:105" },
        { term: "جَزَاؤُهُمْ جَهَنَّمُ", meaning: { en: "Their recompense is Hell", ur: "ان کی جزا جہنم ہے" }, explanation: { en: "Consequence of disbelief", ur: "کفر کا انجام" }, verseRef: "18:106" },
        { term: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", meaning: { en: "Those who believe and do righteous deeds", ur: "جو لوگ ایمان لائے اور نیک عمل کیے" }, explanation: { en: "Believers rewarded", ur: "مومنوں کو اجر ملے گا" }, verseRef: "18:107" },
        { term: "جَنَّاتُ الْفِرْدَوْسِ نُزُلًا", meaning: { en: "Gardens of Paradise as lodging", ur: "جنت الفردوس ان کی مہمان نوازی" }, explanation: { en: "Highest level of Paradise", ur: "جنت کا اعلیٰ ترین درجہ" }, verseRef: "18:107" },
        { term: "خَالِدِينَ فِيهَا لَا يَبْغُونَ عَنْهَا حِوَلًا", meaning: { en: "Abiding eternally, never desiring transfer", ur: "ہمیشہ اس میں رہیں گے، کبھی اس سے جانا نہ چاہیں گے" }, explanation: { en: "Complete satisfaction in Paradise", ur: "جنت میں مکمل اطمینان" }, verseRef: "18:108" },
        { term: "قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي", meaning: { en: "Say: If the sea were ink for the words of my Lord", ur: "کہو: اگر سمندر میرے رب کے کلمات کی سیاہی ہو" }, explanation: { en: "Allah's knowledge is infinite", ur: "اللہ کا علم لامحدود ہے" }, verseRef: "18:109" },
        { term: "لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي", meaning: { en: "The sea would be exhausted before the words of my Lord", ur: "سمندر ختم ہو جائے مگر میرے رب کے کلمات ختم نہ ہوں" }, explanation: { en: "Ocean cannot contain divine wisdom", ur: "سمندر الہی حکمت کو سمو نہیں سکتا" }, verseRef: "18:109" },
        { term: "إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَىٰ إِلَيَّ", meaning: { en: "I am only a man like you, to whom it is revealed", ur: "میں تمہاری طرح ایک بشر ہوں جس کی طرف وحی آتی ہے" }, explanation: { en: "Prophet's humility", ur: "نبی کی عاجزی" }, verseRef: "18:110" },
        { term: "إِنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ", meaning: { en: "Your God is only One God", ur: "تمہارا معبود صرف ایک معبود ہے" }, explanation: { en: "Core message of Tawheed", ur: "توحید کا بنیادی پیغام" }, verseRef: "18:110" },
        { term: "فَمَن كَانَ يَرْجُو لِقَاءَ رَبِّهِ", meaning: { en: "Whoever hopes to meet his Lord", ur: "جو اپنے رب سے ملنے کی امید رکھتا ہو" }, explanation: { en: "Hope in the afterlife", ur: "آخرت پر امید" }, verseRef: "18:110" },
        { term: "فَلْيَعْمَلْ عَمَلًا صَالِحًا", meaning: { en: "Let him do righteous work", ur: "وہ نیک عمل کرے" }, explanation: { en: "Action required for hope", ur: "امید کے لیے عمل ضروری" }, verseRef: "18:110" },
        { term: "وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا", meaning: { en: "And not associate anyone in the worship of his Lord", ur: "اور اپنے رب کی عبادت میں کسی کو شریک نہ کرے" }, explanation: { en: "Closing with Tawheed", ur: "توحید پر خاتمہ" }, verseRef: "18:110" }
      ]
    }
  },

  relationships: [
    // Story 1 Connections
    { from: "فتية آمنوا", to: "زدناهم هدى", type: "cause-effect", description: { en: "Faith leads to increased guidance", ur: "ایمان ہدایت میں اضافے کا سبب بنتا ہے" } },
    { from: "ربطنا على قلوبهم", to: "فأووا إلى الكهف", type: "enabler", description: { en: "Strong hearts enabled brave action", ur: "مضبوط دلوں نے بہادرانہ اقدام ممکن بنایا" } },
    { from: "أهل الكهف", to: "إلا أن يشاء الله", type: "lesson", description: { en: "Cave story teaches Insha'Allah", ur: "غار کا واقعہ انشاء اللہ سکھاتا ہے" } },

    // Story 2 Connections
    { from: "أنا أكثر منك مالاً", to: "وأحيط بثمره", type: "cause-effect", description: { en: "Arrogance leads to destruction", ur: "تکبر تباہی کی طرف لے جاتا ہے" } },
    { from: "ما شاء الله", to: "البقيات الصالحات", type: "contrast", description: { en: "True acknowledgment vs worldly focus", ur: "حقیقی اعتراف بمقابلہ دنیاوی توجہ" } },
    { from: "كماء أنزلناه", to: "هشيماً تذروه الرياح", type: "transformation", description: { en: "Worldly life's temporary nature", ur: "دنیاوی زندگی کی عارضی فطرت" } },

    // Story 3 Connections
    { from: "علمناه من لدنا علماً", to: "لن تستطيع معي صبراً", type: "warning", description: { en: "Divine knowledge hard for humans to grasp", ur: "الہی علم انسانوں کے لیے سمجھنا مشکل" } },
    { from: "خرقها", to: "ملك يأخذ كل سفينة غصباً", type: "wisdom", description: { en: "Damage prevented greater loss", ur: "نقصان نے بڑے نقصان سے بچایا" } },
    { from: "قتله", to: "يرهقهما طغياناً", type: "wisdom", description: { en: "Death prevented parents' spiritual ruin", ur: "موت نے والدین کی روحانی تباہی روکی" } },
    { from: "أقامه", to: "كان أبوهما صالحاً", type: "wisdom", description: { en: "Wall protected orphans' treasure", ur: "دیوار نے یتیموں کے خزانے کی حفاظت کی" } },

    // Story 4 Connections
    { from: "مكنا له في الأرض", to: "ما مكني فيه ربي خير", type: "humility", description: { en: "Power attributed to Allah", ur: "طاقت کو اللہ کی طرف منسوب کیا" } },
    { from: "هذا رحمة من ربي", to: "جعله دكاء", type: "temporality", description: { en: "Even great works are temporary", ur: "عظیم کام بھی عارضی ہیں" } },

    // Cross-Story Connections
    { from: "فتنة الدين", to: "فتنة المال", type: "parallel", description: { en: "Faith trial vs wealth trial", ur: "ایمان کی آزمائش بمقابلہ دولت کی آزمائش" } },
    { from: "فتنة العلم", to: "فتنة السلطة", type: "parallel", description: { en: "Knowledge trial vs power trial", ur: "علم کی آزمائش بمقابلہ اقتدار کی آزمائش" } },
    { from: "أهل الكهف", to: "ذو القرنين", type: "contrast", description: { en: "Powerless youth vs powerful king - both succeeded", ur: "بے بس نوجوان بمقابلہ طاقتور بادشاہ - دونوں کامیاب" } },
    { from: "صاحب الجنتين", to: "ذو القرنين", type: "contrast", description: { en: "Wealth corrupted one, power humbled the other", ur: "دولت نے ایک کو بگاڑا، اقتدار نے دوسرے کو عاجز کیا" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction", verses: "18:1-8", description: { en: "Praise of Quran and its purpose", ur: "قرآن کی تعریف اور اس کا مقصد" } },
      { stage: 2, theme: "Companions of Cave", verses: "18:9-26", description: { en: "Trial of faith - youth flee for religion", ur: "ایمان کی آزمائش - نوجوان دین کے لیے فرار" } },
      { stage: 3, theme: "Two Gardens", verses: "18:32-44", description: { en: "Trial of wealth - arrogance leads to ruin", ur: "دولت کی آزمائش - تکبر تباہی کی طرف لے جاتا ہے" } },
      { stage: 4, theme: "Nature of Life", verses: "18:45-49", description: { en: "Worldly life compared to vegetation", ur: "دنیاوی زندگی کا سبزے سے موازنہ" } },
      { stage: 5, theme: "Musa and Khidr", verses: "18:60-82", description: { en: "Trial of knowledge - patience with divine wisdom", ur: "علم کی آزمائش - الہی حکمت پر صبر" } },
      { stage: 6, theme: "Dhul-Qarnayn", verses: "18:83-98", description: { en: "Trial of power - righteous use of authority", ur: "اقتدار کی آزمائش - اختیار کا نیک استعمال" } },
      { stage: 7, theme: "Day of Judgment", verses: "18:99-106", description: { en: "Ultimate accountability", ur: "حتمی جواب دہی" } },
      { stage: 8, theme: "Closing", verses: "18:107-110", description: { en: "Paradise for believers, core message of Tawheed", ur: "مومنوں کے لیے جنت، توحید کا بنیادی پیغام" } }
    ]
  },

  fourTrials: {
    title: { en: "The Four Trials (Fitan)", ur: "چار آزمائشیں (فتنے)" },
    titleArabic: "الفتن الأربعة",
    description: { en: "Each story in Al-Kahf addresses a major trial humans face, with guidance on how to overcome it", ur: "الکہف کی ہر کہانی ایک بڑی آزمائش کا ذکر کرتی ہے جس کا انسان سامنا کرتا ہے، اور اس پر قابو پانے کی رہنمائی دیتی ہے" },
    trials: [
      {
        trial: "Trial of Faith (Fitnah ad-Din)",
        trialArabic: "فتنة الدين",
        story: "Companions of the Cave",
        storyArabic: "أصحاب الكهف",
        verses: "18:9-26",
        challenge: { en: "Pressure to abandon faith", ur: "ایمان چھوڑنے کا دباؤ" },
        solution: { en: "Seek refuge, trust in Allah, maintain companions of faith", ur: "پناہ حاصل کرو، اللہ پر بھروسہ رکھو، ایمان والے ساتھیوں کو برقرار رکھو" },
        keyPhrase: "فَأْوُوا إِلَى الْكَهْفِ",
        protection: { en: "First 10 and last 10 verses protect from Dajjal's trial of faith", ur: "پہلی 10 اور آخری 10 آیات دجال کے فتنۂ ایمان سے حفاظت کرتی ہیں" }
      },
      {
        trial: "Trial of Wealth (Fitnah al-Mal)",
        trialArabic: "فتنة المال",
        story: "Owner of Two Gardens",
        storyArabic: "صاحب الجنتين",
        verses: "18:32-44",
        challenge: { en: "Wealth leading to arrogance and forgetfulness", ur: "دولت جو تکبر اور غفلت کا سبب بنے" },
        solution: { en: "Say 'Ma sha Allah la quwwata illa billah', remember Allah is true provider", ur: "ماشاء اللہ لا قوة الا باللہ کہو، یاد رکھو کہ اللہ حقیقی رزق دینے والا ہے" },
        keyPhrase: "مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ",
        protection: { en: "Remembering all blessings are from Allah protects from Dajjal's material temptations", ur: "تمام نعمتیں اللہ کی طرف سے ہیں یاد رکھنا دجال کے مادی فتنوں سے بچاتا ہے" }
      },
      {
        trial: "Trial of Knowledge (Fitnah al-Ilm)",
        trialArabic: "فتنة العلم",
        story: "Musa and Khidr",
        storyArabic: "موسى والخضر",
        verses: "18:60-82",
        challenge: { en: "Pride in knowledge, inability to accept what we don't understand", ur: "علم پر غرور، جو نہ سمجھیں اسے قبول نہ کر پانا" },
        solution: { en: "Humility, patience, recognition that Allah's wisdom surpasses ours", ur: "عاجزی، صبر، اس بات کا اعتراف کہ اللہ کی حکمت ہم سے بالاتر ہے" },
        keyPhrase: "وَكَيْفَ تَصْبِرُ عَلَىٰ مَا لَمْ تُحِطْ بِهِ خُبْرًا",
        protection: { en: "Humility before divine wisdom protects from Dajjal's false knowledge", ur: "الہی حکمت کے سامنے عاجزی دجال کے جھوٹے علم سے بچاتی ہے" }
      },
      {
        trial: "Trial of Power (Fitnah as-Sultan)",
        trialArabic: "فتنة السلطة",
        story: "Dhul-Qarnayn",
        storyArabic: "ذو القرنين",
        verses: "18:83-98",
        challenge: { en: "Power leading to oppression and self-glorification", ur: "طاقت جو ظلم اور خود پرستی کا سبب بنے" },
        solution: { en: "Use power for good, attribute success to Allah, serve people", ur: "طاقت کو نیکی کے لیے استعمال کرو، کامیابی اللہ کی طرف منسوب کرو، لوگوں کی خدمت کرو" },
        keyPhrase: "هَٰذَا رَحْمَةٌ مِّن رَّبِّي",
        protection: { en: "Attributing power to Allah protects from Dajjal's claim of divinity", ur: "طاقت کو اللہ کی طرف منسوب کرنا دجال کے الوہیت کے دعوے سے بچاتا ہے" }
      }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Say Insha'Allah for future plans", ur: "مستقبل کے ارادوں کے لیے انشاء اللہ کہو" }, how: { en: "Never speak of tomorrow without Allah's will", ur: "اللہ کی مشیت کے بغیر کل کی بات نہ کرو" }, verse: "18:23-24" },
      { principle: { en: "Say Ma sha Allah for blessings", ur: "نعمتوں پر ماشاء اللہ کہو" }, how: { en: "Acknowledge Allah's role in all good", ur: "ہر خیر میں اللہ کے کردار کا اعتراف کرو" }, verse: "18:39" },
      { principle: { en: "Recite first/last 10 verses", ur: "پہلی/آخری 10 آیات پڑھو" }, how: { en: "Protection from Dajjal's trials", ur: "دجال کے فتنوں سے حفاظت" }, verse: "18:1-10, 101-110" },
      { principle: { en: "Seek good company", ur: "اچھی صحبت اختیار کرو" }, how: { en: "Companions affect faith like Cave dwellers", ur: "ساتھی ایمان پر اثر ڈالتے ہیں جیسے غار والوں نے کیا" }, verse: "18:28" },
      { principle: { en: "Don't be deceived by wealth", ur: "دولت سے دھوکہ نہ کھاؤ" }, how: { en: "Remember parable of two gardens", ur: "دو باغوں کی مثال یاد رکھو" }, verse: "18:45-46" },
      { principle: { en: "Accept divine wisdom", ur: "الہی حکمت کو قبول کرو" }, how: { en: "What seems bad may be good - like Khidr's actions", ur: "جو برا لگے وہ اچھا ہو سکتا ہے - جیسے خضر کے اعمال" }, verse: "18:82" },
      { principle: { en: "Use power righteously", ur: "طاقت کو نیکی سے استعمال کرو" }, how: { en: "Dhul-Qarnayn served, didn't exploit", ur: "ذوالقرنین نے خدمت کی، استحصال نہیں کیا" }, verse: "18:95" },
      { principle: { en: "Focus on eternal deeds", ur: "ابدی اعمال پر توجہ دو" }, how: { en: "Al-Baqiyat as-Salihat outlast wealth", ur: "باقیات الصالحات دولت سے زیادہ پائیدار ہیں" }, verse: "18:46" }
    ]
  },

  uniqueInsight: {
    title: { en: "Friday Recitation and Protection from Dajjal", ur: "جمعے کی تلاوت اور دجال سے حفاظت" },
    titleArabic: "قراءة يوم الجمعة والحماية من الدجال",
    insight: { en: "The Prophet Muhammad (peace be upon him) said: 'Whoever recites Surah Al-Kahf on Friday, Allah will illuminate him with light between the two Fridays' (Al-Hakim). In another narration: 'Whoever memorizes ten verses from the beginning of Surah Al-Kahf will be protected from the trial of the Dajjal (Antichrist)' (Muslim). The connection is profound: Dajjal represents the ultimate manifestation of all four trials - he will test faith (claiming divinity), offer wealth (controlling resources), claim special knowledge (false miracles), and wield power (global control). Al-Kahf provides the antidote to each: the youth's uncompromising faith, recognition that wealth is from Allah, patience with divine wisdom beyond human understanding, and attribution of all success to Allah. The Friday recitation creates a weekly spiritual fortification, a 'light between two Fridays' that protects the believer's heart from the deceptions of false messiahs and worldly temptations. The surah teaches that trials - whether persecution, prosperity, perplexity, or power - are all opportunities to turn to Allah.", ur: "نبی کریم صلی اللہ علیہ وسلم نے فرمایا: 'جو شخص جمعے کے دن سورۃ الکہف پڑھے، اللہ اسے دو جمعوں کے درمیان نور سے روشن کر دے گا' (الحاکم)۔ ایک اور روایت میں: 'جو سورۃ الکہف کی پہلی دس آیات حفظ کر لے، وہ دجال کے فتنے سے محفوظ ہو جائے گا' (مسلم)۔ یہ تعلق بہت گہرا ہے: دجال چاروں فتنوں کا حتمی مظہر ہے - وہ ایمان کی آزمائش کرے گا (الوہیت کا دعویٰ)، دولت کی پیشکش کرے گا (وسائل پر کنٹرول)، خصوصی علم کا دعویٰ کرے گا (جھوٹے معجزات)، اور طاقت استعمال کرے گا (عالمی کنٹرول)۔ الکہف ہر ایک کا علاج فراہم کرتی ہے: نوجوانوں کا غیر سمجھوتہ والا ایمان، دولت اللہ کی طرف سے ہونے کا اعتراف، انسانی سمجھ سے بالاتر الہی حکمت پر صبر، اور تمام کامیابی اللہ کی طرف منسوب کرنا۔ جمعے کی تلاوت ہفتہ وار روحانی تقویت پیدا کرتی ہے، 'دو جمعوں کے درمیان نور' جو مومن کے دل کو جھوٹے مسیحاؤں اور دنیاوی فتنوں سے بچاتا ہے۔" }
  },

  historicalContext: {
    note: { en: "Surah Al-Kahf was revealed in Makkah when the Quraysh, at the suggestion of the Jews of Medina, asked the Prophet (peace be upon him) three questions: about the young men who disappeared, about a great traveler, and about the soul. The surah answers the first two questions (Companions of Cave and Dhul-Qarnayn) while the third is answered briefly in Surah Al-Isra. The Prophet waited 15 days for revelation without saying 'Insha'Allah,' and the surah itself corrects this with verses 23-24. The stories were meant to test the Prophet's prophethood, but they became timeless lessons for all believers facing trials of faith, wealth, knowledge, and power.", ur: "سورۃ الکہف مکہ میں نازل ہوئی جب قریش نے مدینہ کے یہودیوں کی تجویز پر نبی صلی اللہ علیہ وسلم سے تین سوالات پوچھے: غائب ہونے والے نوجوانوں کے بارے میں، ایک عظیم مسافر کے بارے میں، اور روح کے بارے میں۔ سورۃ پہلے دو سوالات کا جواب دیتی ہے (اصحاب الکہف اور ذوالقرنین) جبکہ تیسرے کا مختصر جواب سورۃ الاسراء میں ہے۔ نبی صلی اللہ علیہ وسلم نے 15 دن وحی کا انتظار کیا بغیر انشاء اللہ کہے، اور سورۃ نے خود آیت 23-24 میں اس کی اصلاح کی۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "الكهف", example: { en: "The Cave", ur: "غار" }, effect: { en: "Cave symbolizes refuge, protection, spiritual retreat", ur: "غار پناہ، حفاظت، روحانی خلوت کی علامت ہے" } },
      { feature: "تَزَاوَرُ", example: { en: "Inclines away (Form VI)", ur: "ہٹ جانا (باب تفاعل)" }, effect: { en: "Intensive form - sun actively moves away to protect them", ur: "مبالغے کا صیغہ - سورج فعال طور پر ان کی حفاظت کے لیے ہٹتا ہے" } },
      { feature: "رَقِيمٍ", example: { en: "Inscription", ur: "لکھی ہوئی کتبہ" }, effect: { en: "Mysterious word - their story inscribed/recorded", ur: "پراسرار لفظ - ان کی کہانی لکھی/محفوظ ہے" } },
      { feature: "عِوَجًا قَيِّمًا", example: { en: "Crookedness/Upright", ur: "کجی/سیدھا" }, effect: { en: "Perfect contrast describing Quran", ur: "قرآن کی وصف میں کامل تضاد" } },
      { feature: "حُقُبًا", example: { en: "Ages/Eras", ur: "زمانے/ادوار" }, effect: { en: "Indefinite long period - Musa's determination", ur: "غیر معین طویل مدت - موسیٰ کا عزم" } },
      { feature: "لَدُنِّي", example: { en: "From Our presence", ur: "ہماری طرف سے خاص" }, effect: { en: "Special divine knowledge - Ladunni ilm", ur: "خصوصی الہی علم - علم لدنی" } },
      { feature: "سَدَّيْنِ", example: { en: "Two barriers", ur: "دو رکاوٹیں" }, effect: { en: "Dual form emphasizing the gap between mountains", ur: "تثنیہ کا صیغہ پہاڑوں کے درمیان خلا پر زور دیتا ہے" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "18:25", topic: "309 years", note: { en: "300 solar years = 309 lunar years - mathematical precision", ur: "300 شمسی سال = 309 قمری سال - ریاضیاتی درستگی" } },
      { verse: "18:17-18", topic: "Sleep preservation", note: { en: "Sun avoidance and turning prevents bedsores and decay", ur: "دھوپ سے بچاؤ اور کروٹ بدلنا بستر کے زخموں اور بوسیدگی سے بچاتا ہے" } },
      { verse: "18:47", topic: "Mountains leveled", note: { en: "Geological upheaval of Day of Judgment", ur: "قیامت کا ارضیاتی انقلاب" } },
      { verse: "18:96", topic: "Iron-copper barrier", note: { en: "Ancient metallurgical technique - iron core, copper coating", ur: "قدیم دھات سازی کی تکنیک - لوہے کا بنیادی ڈھانچہ، تانبے کی تہ" } },
      { verse: "18:109", topic: "Ocean as ink", note: { en: "Illustrates infinity of divine knowledge", ur: "الہی علم کی لامحدودیت کی مثال" } }
    ]
  },

  connectionToDajjal: {
    title: { en: "How Al-Kahf Protects from Dajjal", ur: "الکہف دجال سے کیسے بچاتی ہے" },
    titleArabic: "كيف تحمي الكهف من الدجال",
    connections: [
      { dajjalTrait: { en: "Claims divinity", ur: "الوہیت کا دعویٰ کرتا ہے" }, surahResponse: { en: "Youth declared 'Our Lord is Lord of heavens and earth'", ur: "نوجوانوں نے اعلان کیا 'ہمارا رب آسمانوں اور زمین کا رب ہے'" }, verse: "18:14" },
      { dajjalTrait: { en: "Controls food/water", ur: "کھانے/پانی کو کنٹرول کرتا ہے" }, surahResponse: { en: "Garden owner learned all provision is from Allah", ur: "باغ والے نے سیکھا کہ تمام رزق اللہ کی طرف سے ہے" }, verse: "18:40" },
      { dajjalTrait: { en: "Performs false miracles", ur: "جھوٹے معجزات دکھاتا ہے" }, surahResponse: { en: "Khidr's story shows true miracles serve hidden wisdom", ur: "خضر کی کہانی بتاتی ہے کہ سچے معجزات پوشیدہ حکمت کی خدمت کرتے ہیں" }, verse: "18:82" },
      { dajjalTrait: { en: "Rules the earth", ur: "زمین پر حکومت کرتا ہے" }, surahResponse: { en: "Dhul-Qarnayn had authority but attributed it to Allah", ur: "ذوالقرنین کے پاس اختیار تھا مگر اسے اللہ کی طرف منسوب کیا" }, verse: "18:98" },
      { dajjalTrait: { en: "Deceives with falsehood", ur: "جھوٹ سے دھوکہ دیتا ہے" }, surahResponse: { en: "First verses declare Quran has no crookedness", ur: "پہلی آیات اعلان کرتی ہیں کہ قرآن میں کوئی کجی نہیں" }, verse: "18:1-2" },
      { dajjalTrait: { en: "Tests faith of believers", ur: "مومنوں کے ایمان کی آزمائش کرتا ہے" }, surahResponse: { en: "Cave youth prioritized faith over comfort", ur: "غار کے نوجوانوں نے آرام پر ایمان کو ترجیح دی" }, verse: "18:16" }
    ]
  }
};

export default ONTOLOGY;
