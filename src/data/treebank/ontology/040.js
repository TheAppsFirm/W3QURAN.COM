/**
 * Surah Ghafir (40) - Ontology of Quranic Concepts
 * Also known as Al-Mu'min (The Believer)
 * Theme: Divine forgiveness, Moses vs Pharaoh, the secret believer's speech, cosmic signs
 */

export const ONTOLOGY = {
  surahId: 40,
  surahName: "Ghafir",
  alternativeName: "Al-Mu'min",
  surahNameArabic: "غافر",
  alternativeNameArabic: "المؤمن",
  revelationType: "Makki",
  totalAyahs: 85,

  categories: {
    divineNames: {
      name: "Divine Names of Forgiveness",
      nameUr: "بخشش کے الٰہی نام",
      nameArabic: "أسماء الله للمغفرة",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "غَافِرِ الذَّنبِ", meaning: { en: "Forgiver of sin", ur: "گناہ معاف کرنے والا" }, explanation: { en: "Allah forgives sins completely", ur: "اللہ گناہوں کو مکمل طور پر معاف فرماتا ہے" }, verseRef: "40:3" },
        { term: "قَابِلِ التَّوْبِ", meaning: { en: "Acceptor of repentance", ur: "توبہ قبول کرنے والا" }, explanation: { en: "Allah accepts sincere repentance", ur: "اللہ سچی توبہ قبول فرماتا ہے" }, verseRef: "40:3" },
        { term: "شَدِيدِ الْعِقَابِ", meaning: { en: "Severe in punishment", ur: "سخت سزا دینے والا" }, explanation: { en: "Balance - forgiveness with justice", ur: "توازن - مغفرت کے ساتھ انصاف" }, verseRef: "40:3" },
        { term: "ذِي الطَّوْلِ", meaning: { en: "Owner of abundance", ur: "فضل و کرم والا" }, explanation: { en: "Allah's bounty is limitless", ur: "اللہ کا فضل بے حد ہے" }, verseRef: "40:3" },
        { term: "الْعَزِيزُ الْعَلِيمُ", meaning: { en: "The Mighty, the Knowing", ur: "غالب، علم والا" }, explanation: { en: "Power combined with knowledge", ur: "قدرت اور علم کا اجتماع" }, verseRef: "40:2" },
        { term: "الْعَلِيُّ الْكَبِيرُ", meaning: { en: "The Most High, the Grand", ur: "بلند مرتبہ، بڑا" }, explanation: { en: "Supreme elevation and greatness", ur: "سب سے اعلیٰ بلندی اور عظمت" }, verseRef: "40:12" },
        { term: "سَرِيعُ الْحِسَابِ", meaning: { en: "Swift in account", ur: "جلد حساب لینے والا" }, explanation: { en: "Quick reckoning on Judgment Day", ur: "قیامت کے دن تیز حساب" }, verseRef: "40:17" },
        { term: "الْغَفَّارُ", meaning: { en: "The Oft-Forgiving", ur: "بہت بخشنے والا" }, explanation: { en: "Intensive form - perpetual forgiveness", ur: "مبالغہ کا صیغہ - ہمیشہ بخشنے والا" }, verseRef: "40:42" }
      ]
    },

    musaPharaohHaman: {
      name: "Moses, Pharaoh and Haman",
      nameUr: "موسیٰ، فرعون اور ہامان",
      nameArabic: "موسى وفرعون وهامان",
      color: "#3B82F6",
      icon: "Shield",
      concepts: [
        { term: "مُوسَىٰ بِآيَاتِنَا وَسُلْطَانٍ مُّبِينٍ", meaning: { en: "Moses with Our signs and clear authority", ur: "موسیٰ کو ہماری نشانیوں اور واضح دلیل کے ساتھ" }, explanation: { en: "Moses sent with divine proofs", ur: "موسیٰ علیہ السلام الٰہی دلائل کے ساتھ بھیجے گئے" }, verseRef: "40:23" },
        { term: "فِرْعَوْنَ وَهَامَانَ وَقَارُونَ", meaning: { en: "Pharaoh, Haman and Qarun", ur: "فرعون، ہامان اور قارون" }, explanation: { en: "Trinity of arrogance - ruler, minister, wealthy", ur: "تکبر کی تکون - حکمران، وزیر، دولتمند" }, verseRef: "40:24" },
        { term: "سَاحِرٌ كَذَّابٌ", meaning: { en: "Magician, liar", ur: "جادوگر، جھوٹا" }, explanation: { en: "Their accusation against Moses", ur: "موسیٰ کے خلاف ان کا الزام" }, verseRef: "40:24" },
        { term: "اقْتُلُوا أَبْنَاءَ الَّذِينَ آمَنُوا", meaning: { en: "Kill sons of those who believe", ur: "ایمان والوں کے بیٹوں کو قتل کرو" }, explanation: { en: "Pharaoh's genocide policy", ur: "فرعون کی نسل کشی کی پالیسی" }, verseRef: "40:25" },
        { term: "ذَرُونِي أَقْتُلْ مُوسَىٰ", meaning: { en: "Let me kill Moses", ur: "مجھے چھوڑو کہ موسیٰ کو قتل کروں" }, explanation: { en: "Pharaoh's direct threat", ur: "فرعون کی براہ راست دھمکی" }, verseRef: "40:26" },
        { term: "ابْنِ لِي صَرْحًا", meaning: { en: "Build me a tower", ur: "میرے لیے ایک محل بناؤ" }, explanation: { en: "Pharaoh's arrogance - tower to heavens", ur: "فرعون کا تکبر - آسمان تک محل" }, verseRef: "40:36" },
        { term: "أَنَا رَبُّكُمُ الْأَعْلَىٰ", meaning: { en: "I am your most high lord", ur: "میں تمہارا سب سے بڑا رب ہوں" }, explanation: { en: "Pharaoh's claim to divinity", ur: "فرعون کا الوہیت کا دعویٰ" }, verseRef: "40:26" },
        { term: "فَوَقَاهُ اللَّهُ سَيِّئَاتِ مَا مَكَرُوا", meaning: { en: "Allah protected him from evils of their plot", ur: "اللہ نے اسے ان کی سازشوں کے شر سے بچایا" }, explanation: { en: "Divine protection for Moses", ur: "موسیٰ کے لیے الٰہی حفاظت" }, verseRef: "40:45" },
        { term: "أَغْرَقْنَا آلَ فِرْعَوْنَ", meaning: { en: "We drowned people of Pharaoh", ur: "ہم نے فرعون والوں کو ڈبو دیا" }, explanation: { en: "Final punishment", ur: "حتمی سزا" }, verseRef: "40:45" }
      ]
    },

    believerFromPharaohsFamily: {
      name: "The Believing Man from Pharaoh's Family",
      nameUr: "فرعون کے خاندان کا مومن آدمی",
      nameArabic: "مؤمن آل فرعون",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "رَجُلٌ مُّؤْمِنٌ مِّنْ آلِ فِرْعَوْنَ يَكْتُمُ إِيمَانَهُ", meaning: { en: "A believing man from Pharaoh's family who concealed his faith", ur: "فرعون کے خاندان کا ایک مومن آدمی جو اپنا ایمان چھپائے ہوئے تھا" }, explanation: { en: "Secret believer in hostile environment", ur: "دشمن ماحول میں خفیہ مومن" }, verseRef: "40:28" },
        { term: "أَتَقْتُلُونَ رَجُلًا أَن يَقُولَ رَبِّيَ اللَّهُ", meaning: { en: "Would you kill a man for saying My Lord is Allah?", ur: "کیا تم ایک آدمی کو اس لیے قتل کرو گے کہ وہ کہتا ہے میرا رب اللہ ہے؟" }, explanation: { en: "His courageous defense of Moses", ur: "موسیٰ کا بہادرانہ دفاع" }, verseRef: "40:28" },
        { term: "إِن يَكُ كَاذِبًا فَعَلَيْهِ كَذِبُهُ", meaning: { en: "If he is a liar, upon him is his lie", ur: "اگر وہ جھوٹا ہے تو اس کا جھوٹ اسی پر ہے" }, explanation: { en: "Logical argument - no loss to you", ur: "عقلی دلیل - تمہارا کوئی نقصان نہیں" }, verseRef: "40:28" },
        { term: "وَإِن يَكُ صَادِقًا", meaning: { en: "And if he is truthful", ur: "اور اگر وہ سچا ہے" }, explanation: { en: "Warning of consequences if Moses is true", ur: "اگر موسیٰ سچے ہیں تو نتائج کی تنبیہ" }, verseRef: "40:28" },
        { term: "يَا قَوْمِ لَكُمُ الْمُلْكُ الْيَوْمَ", meaning: { en: "O my people, sovereignty is yours today", ur: "اے میری قوم، آج بادشاہی تمہاری ہے" }, explanation: { en: "Reminder of temporary power", ur: "عارضی طاقت کی یاد دہانی" }, verseRef: "40:29" },
        { term: "مِثْلَ يَوْمِ الْأَحْزَابِ", meaning: { en: "Like the day of the confederates", ur: "لشکروں والے دن جیسا" }, explanation: { en: "Warning from history - previous destroyed nations", ur: "تاریخ سے تنبیہ - پچھلی تباہ شدہ قوموں کا حوالہ" }, verseRef: "40:30" },
        { term: "مِثْلَ دَأْبِ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ", meaning: { en: "Like the way of Noah's people, Aad, Thamud", ur: "قوم نوح، عاد اور ثمود جیسا انجام" }, explanation: { en: "Historical examples of destruction", ur: "تباہی کی تاریخی مثالیں" }, verseRef: "40:31" },
        { term: "يَا قَوْمِ إِنِّي أَخَافُ عَلَيْكُمْ يَوْمَ التَّنَادِ", meaning: { en: "O my people, I fear for you Day of Calling", ur: "اے میری قوم، مجھے تمہارے لیے پکار کے دن کا ڈر ہے" }, explanation: { en: "Warning about Judgment Day", ur: "قیامت کے دن کی تنبیہ" }, verseRef: "40:32" },
        { term: "يَوْمَ تُوَلُّونَ مُدْبِرِينَ", meaning: { en: "Day you will turn back fleeing", ur: "جس دن تم پیٹھ پھیر کر بھاگو گے" }, explanation: { en: "No escape on that Day", ur: "اس دن کوئی فرار نہیں" }, verseRef: "40:33" },
        { term: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِنْ هَادٍ", meaning: { en: "Whom Allah sends astray has no guide", ur: "جسے اللہ گمراہ کرے اسے کوئی ہدایت دینے والا نہیں" }, explanation: { en: "Divine guidance is essential", ur: "الٰہی ہدایت ضروری ہے" }, verseRef: "40:33" },
        { term: "يَا قَوْمِ اتَّبِعُونِ أَهْدِكُمْ سَبِيلَ الرَّشَادِ", meaning: { en: "O my people, follow me, I will guide you to the right path", ur: "اے میری قوم، میری پیروی کرو میں تمہیں سیدھے راستے کی رہنمائی کروں گا" }, explanation: { en: "His invitation to guidance", ur: "ہدایت کی طرف اس کی دعوت" }, verseRef: "40:38" },
        { term: "إِنَّمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا مَتَاعٌ", meaning: { en: "This worldly life is only enjoyment", ur: "یہ دنیا کی زندگی تو بس عارضی فائدہ ہے" }, explanation: { en: "Temporary nature of worldly life", ur: "دنیاوی زندگی کی عارضی حیثیت" }, verseRef: "40:39" },
        { term: "وَإِنَّ الْآخِرَةَ هِيَ دَارُ الْقَرَارِ", meaning: { en: "And the Hereafter is the home of permanence", ur: "اور آخرت ہی مستقل ٹھکانا ہے" }, explanation: { en: "Eternal abode is what matters", ur: "آخرت ہی اصل ٹھکانا ہے" }, verseRef: "40:39" },
        { term: "أُفَوِّضُ أَمْرِي إِلَى اللَّهِ", meaning: { en: "I entrust my affair to Allah", ur: "میں اپنا معاملہ اللہ کے سپرد کرتا ہوں" }, explanation: { en: "Complete trust in Allah", ur: "اللہ پر مکمل توکل" }, verseRef: "40:44" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs",
      nameUr: "کائناتی نشانیاں",
      nameArabic: "الآيات الكونية",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "اللَّهُ الَّذِي جَعَلَ لَكُمُ اللَّيْلَ لِتَسْكُنُوا فِيهِ", meaning: { en: "Allah who made for you the night to rest in", ur: "اللہ جس نے تمہارے لیے رات بنائی تاکہ تم اس میں آرام کرو" }, explanation: { en: "Night for rest", ur: "رات آرام کے لیے" }, verseRef: "40:61" },
        { term: "وَالنَّهَارَ مُبْصِرًا", meaning: { en: "And the day for seeing", ur: "اور دن کو روشن بنایا" }, explanation: { en: "Day for activity and vision", ur: "دن سرگرمی اور دیکھنے کے لیے" }, verseRef: "40:61" },
        { term: "اللَّهُ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ قَرَارًا", meaning: { en: "Allah who made for you the earth a place of settlement", ur: "اللہ جس نے تمہارے لیے زمین کو قرار گاہ بنایا" }, explanation: { en: "Earth as stable dwelling", ur: "زمین مستحکم ٹھکانے کے طور پر" }, verseRef: "40:64" },
        { term: "وَالسَّمَاءَ بِنَاءً", meaning: { en: "And the heaven a canopy", ur: "اور آسمان کو چھت بنایا" }, explanation: { en: "Sky as protective structure", ur: "آسمان حفاظتی ڈھانچے کے طور پر" }, verseRef: "40:64" },
        { term: "وَصَوَّرَكُمْ فَأَحْسَنَ صُوَرَكُمْ", meaning: { en: "And formed you and perfected your forms", ur: "اور تمہاری صورت بنائی اور بہترین صورتیں بنائیں" }, explanation: { en: "Human creation in best form", ur: "انسان کی بہترین صورت میں تخلیق" }, verseRef: "40:64" },
        { term: "وَرَزَقَكُم مِّنَ الطَّيِّبَاتِ", meaning: { en: "And provided you with good things", ur: "اور تمہیں پاکیزہ چیزوں سے رزق دیا" }, explanation: { en: "Provision of pure sustenance", ur: "پاکیزہ رزق کی فراہمی" }, verseRef: "40:64" },
        { term: "خَلَقَكُم مِّن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ", meaning: { en: "Created you from dust, then from a sperm-drop", ur: "تمہیں مٹی سے پیدا کیا پھر نطفے سے" }, explanation: { en: "Stages of human creation", ur: "انسانی تخلیق کے مراحل" }, verseRef: "40:67" },
        { term: "ثُمَّ مِنْ عَلَقَةٍ", meaning: { en: "Then from a clinging clot", ur: "پھر جمے ہوئے خون سے" }, explanation: { en: "Embryonic development", ur: "جنینی نشوونما" }, verseRef: "40:67" },
        { term: "ثُمَّ يُخْرِجُكُمْ طِفْلًا", meaning: { en: "Then He brings you out as a child", ur: "پھر تمہیں بچے کی صورت نکالتا ہے" }, explanation: { en: "Birth as infant", ur: "بچے کی پیدائش" }, verseRef: "40:67" },
        { term: "ثُمَّ لِتَبْلُغُوا أَشُدَّكُمْ", meaning: { en: "Then to reach maturity", ur: "پھر تاکہ تم اپنی جوانی کو پہنچو" }, explanation: { en: "Growth to full strength", ur: "پوری طاقت تک پہنچنا" }, verseRef: "40:67" },
        { term: "ثُمَّ لِتَكُونُوا شُيُوخًا", meaning: { en: "Then to become elders", ur: "پھر تاکہ تم بوڑھے ہو جاؤ" }, explanation: { en: "Old age stage", ur: "بڑھاپے کا مرحلہ" }, verseRef: "40:67" }
      ]
    },

    prayerOfAngels: {
      name: "Prayer of the Angels",
      nameUr: "فرشتوں کی دعا",
      nameArabic: "دعاء الملائكة",
      color: "#8B5CF6",
      icon: "Star",
      concepts: [
        { term: "الَّذِينَ يَحْمِلُونَ الْعَرْشَ وَمَنْ حَوْلَهُ", meaning: { en: "Those who carry the Throne and those around it", ur: "جو عرش اٹھائے ہوئے ہیں اور جو اس کے اردگرد ہیں" }, explanation: { en: "Angels bearing Allah's Throne", ur: "فرشتے اللہ کا عرش اٹھائے ہوئے" }, verseRef: "40:7" },
        { term: "يُسَبِّحُونَ بِحَمْدِ رَبِّهِمْ", meaning: { en: "Glorify with praise of their Lord", ur: "اپنے رب کی حمد کے ساتھ تسبیح کرتے ہیں" }, explanation: { en: "Constant worship of angels", ur: "فرشتوں کی مسلسل عبادت" }, verseRef: "40:7" },
        { term: "وَيُؤْمِنُونَ بِهِ", meaning: { en: "And believe in Him", ur: "اور اس پر ایمان رکھتے ہیں" }, explanation: { en: "Angels' faith in Allah", ur: "فرشتوں کا اللہ پر ایمان" }, verseRef: "40:7" },
        { term: "وَيَسْتَغْفِرُونَ لِلَّذِينَ آمَنُوا", meaning: { en: "And seek forgiveness for those who believe", ur: "اور ایمان والوں کے لیے مغفرت طلب کرتے ہیں" }, explanation: { en: "Angels intercede for believers", ur: "فرشتے مومنین کی سفارش کرتے ہیں" }, verseRef: "40:7" },
        { term: "رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا", meaning: { en: "Our Lord, You encompass all things in mercy and knowledge", ur: "اے ہمارے رب، تیری رحمت اور علم ہر چیز کو محیط ہے" }, explanation: { en: "Recognition of Allah's mercy and knowledge", ur: "اللہ کی رحمت اور علم کا اعتراف" }, verseRef: "40:7" },
        { term: "فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ", meaning: { en: "Forgive those who repent and follow Your way", ur: "ان لوگوں کو بخش دے جنہوں نے توبہ کی اور تیرے راستے پر چلے" }, explanation: { en: "Prayer for repentant believers", ur: "توبہ کرنے والے مومنین کے لیے دعا" }, verseRef: "40:7" },
        { term: "وَقِهِمْ عَذَابَ الْجَحِيمِ", meaning: { en: "And protect them from punishment of Hellfire", ur: "اور انہیں جہنم کے عذاب سے بچا لے" }, explanation: { en: "Prayer for protection", ur: "حفاظت کی دعا" }, verseRef: "40:7" },
        { term: "وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ", meaning: { en: "And admit them to Gardens of Eden", ur: "اور انہیں ہمیشہ رہنے والی جنتوں میں داخل فرما" }, explanation: { en: "Prayer for Paradise entry", ur: "جنت میں داخلے کی دعا" }, verseRef: "40:8" },
        { term: "وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ", meaning: { en: "And whoever was righteous of their fathers, spouses, offspring", ur: "اور ان کے باپ دادا، بیویوں اور اولاد میں سے جو نیک ہوں" }, explanation: { en: "Family reunion in Paradise", ur: "جنت میں خاندان کا اجتماع" }, verseRef: "40:8" },
        { term: "وَقِهِمُ السَّيِّئَاتِ", meaning: { en: "And protect them from evil deeds", ur: "اور انہیں برائیوں سے بچا لے" }, explanation: { en: "Protection from consequences of sins", ur: "گناہوں کے نتائج سے حفاظت" }, verseRef: "40:9" }
      ]
    },

    argumentsWithDisbelievers: {
      name: "Arguments with Disbelievers",
      nameUr: "کافروں سے مناظرہ",
      nameArabic: "محاجة الكافرين",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "مَا يُجَادِلُ فِي آيَاتِ اللَّهِ إِلَّا الَّذِينَ كَفَرُوا", meaning: { en: "None dispute about signs of Allah except disbelievers", ur: "اللہ کی آیات میں صرف کافر ہی جھگڑا کرتے ہیں" }, explanation: { en: "Disputation is sign of disbelief", ur: "اللہ کی آیات میں جھگڑا کفر کی علامت ہے" }, verseRef: "40:4" },
        { term: "فَلَا يَغْرُرْكَ تَقَلُّبُهُمْ فِي الْبِلَادِ", meaning: { en: "Let not their movement in land deceive you", ur: "ملک میں ان کی چال ڈھال تجھے دھوکے میں نہ ڈالے" }, explanation: { en: "Worldly success is not approval", ur: "دنیاوی کامیابی اللہ کی رضامندی نہیں" }, verseRef: "40:4" },
        { term: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ وَالْأَحْزَابُ", meaning: { en: "Denied before them people of Noah and confederates", ur: "ان سے پہلے قوم نوح اور لشکروں نے جھٹلایا" }, explanation: { en: "Pattern of rejection", ur: "انکار کا مسلسل سلسلہ" }, verseRef: "40:5" },
        { term: "لِيُدْحِضُوا بِهِ الْحَقَّ", meaning: { en: "To invalidate thereby the truth", ur: "تاکہ اس سے حق کو باطل کر دیں" }, explanation: { en: "False arguments against truth", ur: "حق کے خلاف جھوٹے دلائل" }, verseRef: "40:5" },
        { term: "إِذْ تُدْعَوْنَ إِلَى الْإِيمَانِ فَتَكْفُرُونَ", meaning: { en: "When you were invited to faith, you disbelieved", ur: "جب تمہیں ایمان کی دعوت دی جاتی تھی تو تم کفر کرتے تھے" }, explanation: { en: "Rejection of invitation to faith", ur: "ایمان کی دعوت کا انکار" }, verseRef: "40:10" }
      ]
    },

    judgmentDay: {
      name: "Day of Judgment",
      nameUr: "یومِ قیامت",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "يَوْمَ التَّلَاقِ", meaning: { en: "Day of Meeting", ur: "ملاقات کا دن" }, explanation: { en: "All creatures meet Allah", ur: "تمام مخلوقات اللہ سے ملیں گی" }, verseRef: "40:15" },
        { term: "يَوْمَ هُم بَارِزُونَ", meaning: { en: "Day they come forth", ur: "جس دن سب سامنے آ جائیں گے" }, explanation: { en: "Nothing hidden from Allah", ur: "اللہ سے کچھ بھی پوشیدہ نہیں" }, verseRef: "40:16" },
        { term: "لَا يَخْفَىٰ عَلَى اللَّهِ مِنْهُمْ شَيْءٌ", meaning: { en: "Nothing of them is hidden from Allah", ur: "ان کی کوئی چیز اللہ سے چھپی نہیں" }, explanation: { en: "Complete exposure before Allah", ur: "اللہ کے سامنے مکمل ظہور" }, verseRef: "40:16" },
        { term: "لِّمَنِ الْمُلْكُ الْيَوْمَ", meaning: { en: "To whom belongs dominion today?", ur: "آج بادشاہی کس کی ہے؟" }, explanation: { en: "Question on Judgment Day", ur: "قیامت کے دن کا سوال" }, verseRef: "40:16" },
        { term: "لِلَّهِ الْوَاحِدِ الْقَهَّارِ", meaning: { en: "To Allah, the One, the Prevailing", ur: "اللہ کی جو یکتا ہے، سب پر غالب ہے" }, explanation: { en: "Answer - only Allah", ur: "جواب - صرف اللہ" }, verseRef: "40:16" },
        { term: "الْيَوْمَ تُجْزَىٰ كُلُّ نَفْسٍ بِمَا كَسَبَتْ", meaning: { en: "Today every soul is recompensed for what it earned", ur: "آج ہر جان کو اس کے اعمال کا بدلہ دیا جائے گا" }, explanation: { en: "Perfect justice", ur: "کامل انصاف" }, verseRef: "40:17" },
        { term: "لَا ظُلْمَ الْيَوْمَ", meaning: { en: "No injustice today", ur: "آج کوئی ظلم نہیں" }, explanation: { en: "Absolute fairness", ur: "مکمل عدل" }, verseRef: "40:17" },
        { term: "يَوْمَ الْآزِفَةِ", meaning: { en: "Day of the Approaching", ur: "قریب آنے والے دن" }, explanation: { en: "Imminent arrival", ur: "قریب آنے والا" }, verseRef: "40:18" },
        { term: "إِذِ الْقُلُوبُ لَدَى الْحَنَاجِرِ كَاظِمِينَ", meaning: { en: "When hearts are at throats, suppressing", ur: "جب دل حلق تک آ جائیں گے، غم دبائے ہوئے" }, explanation: { en: "Extreme terror on that Day", ur: "اس دن شدید خوف و ہراس" }, verseRef: "40:18" }
      ]
    },

    supplicationAndResponse: {
      name: "Supplication and Response",
      nameUr: "دعا اور قبولیت",
      nameArabic: "الدعاء والاستجابة",
      color: "#8B5CF6",
      icon: "MessageCircle",
      concepts: [
        { term: "ادْعُونِي أَسْتَجِبْ لَكُمْ", meaning: { en: "Call upon Me, I will respond to you", ur: "مجھے پکارو، میں تمہاری دعا قبول کروں گا" }, explanation: { en: "Divine promise to answer prayers", ur: "دعاؤں کا جواب دینے کا الٰہی وعدہ" }, verseRef: "40:60" },
        { term: "إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي", meaning: { en: "Those who are too proud for My worship", ur: "جو لوگ میری عبادت سے تکبر کرتے ہیں" }, explanation: { en: "Pride prevents prayer", ur: "تکبر دعا سے روکتا ہے" }, verseRef: "40:60" },
        { term: "سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ", meaning: { en: "Will enter Hell humiliated", ur: "وہ ذلیل ہو کر جہنم میں داخل ہوں گے" }, explanation: { en: "Humiliation for the arrogant", ur: "متکبروں کی ذلت" }, verseRef: "40:60" }
      ]
    },

    propheticConsolation: {
      name: "Consolation to the Prophet",
      nameUr: "نبی ﷺ کی تسلی",
      nameArabic: "تسلية النبي",
      color: "#3B82F6",
      icon: "Heart",
      concepts: [
        { term: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: { en: "Be patient, indeed Allah's promise is truth", ur: "صبر کرو، بے شک اللہ کا وعدہ سچا ہے" }, explanation: { en: "Command to patience", ur: "صبر کا حکم" }, verseRef: "40:55" },
        { term: "وَاسْتَغْفِرْ لِذَنبِكَ", meaning: { en: "And seek forgiveness for your sin", ur: "اور اپنے گناہوں کی معافی مانگو" }, explanation: { en: "Importance of seeking forgiveness", ur: "استغفار کی اہمیت" }, verseRef: "40:55" },
        { term: "وَسَبِّحْ بِحَمْدِ رَبِّكَ بِالْعَشِيِّ وَالْإِبْكَارِ", meaning: { en: "And glorify with praise of your Lord evening and morning", ur: "اور شام اور صبح اپنے رب کی حمد کے ساتھ تسبیح کرو" }, explanation: { en: "Regular worship", ur: "باقاعدہ عبادت" }, verseRef: "40:55" },
        { term: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: { en: "Be patient, indeed Allah's promise is truth", ur: "صبر کرو، بے شک اللہ کا وعدہ سچا ہے" }, explanation: { en: "Repeated emphasis on patience", ur: "صبر پر بار بار زور" }, verseRef: "40:77" },
        { term: "وَلَقَدْ أَرْسَلْنَا رُسُلًا مِّن قَبْلِكَ", meaning: { en: "We sent messengers before you", ur: "ہم نے تم سے پہلے بھی رسول بھیجے" }, explanation: { en: "Pattern of messengership", ur: "رسالت کا سلسلہ" }, verseRef: "40:78" }
      ]
    },

    fateOfArrogant: {
      name: "Fate of the Arrogant",
      nameUr: "متکبروں کا انجام",
      nameArabic: "عاقبة المستكبرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَدْخِلُوا آلَ فِرْعَوْنَ أَشَدَّ الْعَذَابِ", meaning: { en: "Admit Pharaoh's people to severest punishment", ur: "فرعون والوں کو شدید ترین عذاب میں داخل کرو" }, explanation: { en: "Pharaoh's eternal punishment", ur: "فرعون کی ابدی سزا" }, verseRef: "40:46" },
        { term: "النَّارُ يُعْرَضُونَ عَلَيْهَا غُدُوًّا وَعَشِيًّا", meaning: { en: "Fire, they are exposed to it morning and evening", ur: "آگ، وہ صبح و شام اس کے سامنے پیش کیے جاتے ہیں" }, explanation: { en: "Punishment in grave", ur: "قبر میں عذاب" }, verseRef: "40:46" },
        { term: "إِذْ يَتَحَاجُّونَ فِي النَّارِ", meaning: { en: "When they dispute in the Fire", ur: "جب وہ آگ میں آپس میں جھگڑیں گے" }, explanation: { en: "Arguing in Hell", ur: "جہنم میں بحث" }, verseRef: "40:47" },
        { term: "يَقُولُ الضُّعَفَاءُ لِلَّذِينَ اسْتَكْبَرُوا", meaning: { en: "The weak say to the arrogant", ur: "کمزور لوگ متکبروں سے کہیں گے" }, explanation: { en: "Followers blame leaders", ur: "پیروکار رہنماؤں کو الزام دیتے ہیں" }, verseRef: "40:47" },
        { term: "ادْعُوا رَبَّكُمْ يُخَفِّفْ عَنَّا يَوْمًا مِّنَ الْعَذَابِ", meaning: { en: "Call your Lord to lighten punishment for a day", ur: "اپنے رب سے دعا کرو کہ ایک دن کے لیے ہم سے عذاب ہلکا کر دے" }, explanation: { en: "Desperate plea for relief", ur: "مایوسانہ فریاد" }, verseRef: "40:49" }
      ]
    }
  },

  relationships: [
    { from: "غافر الذنب", to: "قابل التوب", type: "complementary", description: { en: "Forgiveness and acceptance of repentance go together", ur: "مغفرت اور توبہ کی قبولیت ساتھ ساتھ چلتی ہیں" } },
    { from: "شديد العقاب", to: "ذي الطول", type: "balance", description: { en: "Justice balanced with bounty", ur: "انصاف فضل کے ساتھ متوازن" } },
    { from: "مؤمن آل فرعون", to: "يكتم إيمانه", type: "circumstance", description: { en: "Faith concealed due to danger", ur: "خطرے کی وجہ سے ایمان چھپایا" } },
    { from: "فرعون", to: "هامان وقارون", type: "alliance", description: { en: "Trinity of arrogance", ur: "تکبر کی تکون" } },
    { from: "ادعوني", to: "أستجب لكم", type: "promise", description: { en: "Divine guarantee to answer prayers", ur: "دعاؤں کا جواب دینے کی الٰہی ضمانت" } },
    { from: "يحملون العرش", to: "يستغفرون للذين آمنوا", type: "intercession", description: { en: "Angels pray for believers", ur: "فرشتے مومنین کے لیے دعا کرتے ہیں" } },
    { from: "الحياة الدنيا متاع", to: "الآخرة دار القرار", type: "contrast", description: { en: "Temporary world vs permanent hereafter", ur: "عارضی دنیا بمقابلہ مستقل آخرت" } },
    { from: "أفوض أمري إلى الله", to: "فوقاه الله", type: "result", description: { en: "Trust in Allah leads to protection", ur: "اللہ پر توکل حفاظت کی طرف لے جاتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Names of Forgiveness", verses: "40:1-3", description: { en: "Ha-Mim, revelation, and Allah's forgiving nature", ur: "حم، وحی، اور اللہ کی بخشنے والی فطرت" } },
      { stage: 2, theme: "Disputation of Disbelievers", verses: "40:4-6", description: { en: "Only disbelievers dispute Allah's signs", ur: "صرف کافر اللہ کی آیات میں جھگڑتے ہیں" } },
      { stage: 3, theme: "Angels' Prayer for Believers", verses: "40:7-9", description: { en: "Throne-bearers intercede for believers", ur: "عرش اٹھانے والے مومنین کی سفارش کرتے ہیں" } },
      { stage: 4, theme: "Dialogue on Judgment Day", verses: "40:10-22", description: { en: "Disbelievers' admission and regret", ur: "کافروں کا اعتراف اور ندامت" } },
      { stage: 5, theme: "Moses vs Pharaoh", verses: "40:23-27", description: { en: "Moses sent to Pharaoh, Haman, Qarun", ur: "موسیٰ فرعون، ہامان، قارون کی طرف بھیجے گئے" } },
      { stage: 6, theme: "The Secret Believer's Speech", verses: "40:28-45", description: { en: "Man from Pharaoh's family gives advice", ur: "فرعون کے خاندان کا آدمی نصیحت کرتا ہے" } },
      { stage: 7, theme: "Pharaoh's Punishment", verses: "40:46-52", description: { en: "Fire morning and evening, disputes in Hell", ur: "صبح شام آگ، جہنم میں بحث" } },
      { stage: 8, theme: "Consolation to Prophet", verses: "40:53-56", description: { en: "Patience, previous messengers", ur: "صبر، پچھلے رسول" } },
      { stage: 9, theme: "Creation and Cosmic Signs", verses: "40:57-68", description: { en: "Creation of heavens, earth, humans", ur: "آسمانوں، زمین، انسانوں کی تخلیق" } },
      { stage: 10, theme: "Those Who Deny Signs", verses: "40:69-85", description: { en: "Punishment of deniers, final victory", ur: "منکرین کی سزا، حتمی فتح" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Seek forgiveness", how: "Allah is Ghafir al-Dhanb - always return to Him", verse: "40:3" },
      { principle: "Don't be deceived by worldly success", how: "Disbelievers' prosperity is temporary", verse: "40:4" },
      { principle: "Angels pray for you", how: "Be worthy of angelic intercession through faith", verse: "40:7-9" },
      { principle: "Stand for truth even alone", how: "Like the believing man from Pharaoh's family", verse: "40:28" },
      { principle: "Use wisdom in difficult situations", how: "Sometimes conceal, sometimes speak", verse: "40:28" },
      { principle: "Remember this life is temporary", how: "Focus on the permanent Hereafter", verse: "40:39" },
      { principle: "Entrust affairs to Allah", how: "Say: I entrust my affair to Allah", verse: "40:44" },
      { principle: "Call upon Allah", how: "He promises to respond - just ask", verse: "40:60" },
      { principle: "Be patient", how: "Allah's promise is true, victory comes", verse: "40:77" }
    ]
  },

  linguisticFeatures: {
    hamimSurahs: { en: "Part of the Ha-Mim series (40-46), united by opening letters", ur: "حم سلسلے (40-46) کا حصہ، ابتدائی حروف سے متحد" },
    rhetoricalQuestions: { en: "Multiple rhetorical questions challenging disbelievers", ur: "کافروں کو چیلنج کرنے والے متعدد سوالیہ انداز" },
    directSpeech: { en: "Extended speech by the believing man (40:28-44)", ur: "مومن آدمی کی طویل تقریر (40:28-44)" },
    divineNames: { en: "Concentration of forgiveness-related names", ur: "مغفرت سے متعلق ناموں کا ارتکاز" },
    historicalNarratives: { en: "Moses-Pharaoh story with unique details", ur: "موسیٰ اور فرعون کا قصہ منفرد تفصیلات کے ساتھ" }
  }
};

export default ONTOLOGY;
