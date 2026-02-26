/**
 * Surah Ya-Sin (36) - Ontology of Quranic Concepts
 * Ya-Sin - 83 Ayahs, Makkan
 * Theme: Heart of the Quran, prophethood, resurrection, creation signs, divine power
 *
 * Special Status: Known as "The Heart of the Quran" (Qalb al-Quran)
 * Virtues:
 * - "Everything has a heart, and the heart of the Quran is Ya-Sin" (Tirmidhi)
 * - Recommended to recite for the dying and deceased
 * - "Whoever recites Ya-Sin seeking Allah's pleasure, his past sins will be forgiven"
 * - Contains powerful proofs of resurrection and divine power
 */

export const ONTOLOGY = {
  surahId: 36,
  surahName: "Ya-Sin",
  surahNameArabic: "يس",
  revelationType: "Makki",
  totalAyahs: 83,

  categories: {
    // OPENING OATH AND PROPHETHOOD (1-12)
    openingOath: {
      name: "Opening Oath and Prophethood",
      nameUr: "ابتدائی قسم اور نبوت",
      nameArabic: "القسم والرسالة",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "يس", meaning: { en: "Ya-Sin", ur: "یس" }, explanation: { en: "Huruf Muqatta'at - mysterious letters opening the surah; some say it means 'O human being'", ur: "حروفِ مقطعات - سورت کے آغاز کے پراسرار حروف؛ بعض کے نزدیک اس کا مطلب 'اے انسان' ہے" }, verseRef: "36:1" },
        { term: "وَالْقُرْآنِ الْحَكِيمِ", meaning: { en: "By the Wise Quran", ur: "حکمت والے قرآن کی قسم" }, explanation: { en: "Oath by the Quran - full of wisdom and judgment", ur: "قرآن کی قسم - حکمت اور فیصلے سے بھرپور" }, verseRef: "36:2" },
        { term: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ", meaning: { en: "Indeed you are among the messengers", ur: "بیشک تم رسولوں میں سے ہو" }, explanation: { en: "Confirmation of Prophet Muhammad's messengership", ur: "نبی محمد ﷺ کی رسالت کی تصدیق" }, verseRef: "36:3" },
        { term: "عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "On a straight path", ur: "سیدھے راستے پر" }, explanation: { en: "The path of guidance and truth", ur: "ہدایت اور سچائی کا راستہ" }, verseRef: "36:4" },
        { term: "تَنزِيلَ الْعَزِيزِ الرَّحِيمِ", meaning: { en: "Revelation of the Mighty, the Merciful", ur: "غالب اور رحم والے کا نازل کردہ" }, explanation: { en: "Quran sent down by Allah - both powerful and merciful", ur: "اللہ کی طرف سے نازل کردہ قرآن - قدرت والا بھی اور رحمت والا بھی" }, verseRef: "36:5" },
        { term: "لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ", meaning: { en: "To warn a people whose forefathers were not warned", ur: "ایسی قوم کو ڈرانے کے لیے جن کے باپ دادا کو ڈرایا نہیں گیا" }, explanation: { en: "Arabs had no prophet since Ismail - now they have guidance", ur: "اسماعیل علیہ السلام کے بعد عربوں میں کوئی نبی نہیں آیا تھا - اب انہیں ہدایت ملی" }, verseRef: "36:6" },
        { term: "فَهُمْ غَافِلُونَ", meaning: { en: "So they are heedless", ur: "پس وہ غافل ہیں" }, explanation: { en: "State of the pre-Islamic Arabs - unaware of divine truth", ur: "دورِ جاہلیت کے عربوں کی حالت - الٰہی سچائی سے بے خبر" }, verseRef: "36:6" }
      ]
    },

    sealedHearts: {
      name: "The Sealed Hearts",
      nameUr: "مہر شدہ دل",
      nameArabic: "القلوب المختومة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ", meaning: { en: "The word has proved true against most of them", ur: "ان میں سے اکثر پر بات ثابت ہو چکی ہے" }, explanation: { en: "Divine decree upon persistent disbelievers", ur: "ضدی کافروں پر الٰہی فیصلہ" }, verseRef: "36:7" },
        { term: "أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ", meaning: { en: "Shackles up to their chins", ur: "طوق جو ٹھوڑیوں تک ہیں" }, explanation: { en: "Imagery of those imprisoned by their own disbelief", ur: "اپنے کفر کی وجہ سے قید ہونے والوں کی تصویر" }, verseRef: "36:8" },
        { term: "فَهُم مُّقْمَحُونَ", meaning: { en: "So their heads are raised up", ur: "پس ان کے سر اوپر اٹھے ہوئے ہیں" }, explanation: { en: "Forced upward - cannot look at guidance", ur: "زبردستی اوپر اٹھائے گئے - ہدایت کو دیکھ نہیں سکتے" }, verseRef: "36:8" },
        { term: "سَدًّا مِّن بَيْنِ أَيْدِيهِمْ وَسَدًّا مِنْ خَلْفِهِمْ", meaning: { en: "A barrier before them and a barrier behind them", ur: "ان کے آگے ایک رکاوٹ اور پیچھے ایک رکاوٹ" }, explanation: { en: "Barriers preventing them from seeing truth", ur: "رکاوٹیں جو انہیں سچائی دیکھنے سے روکتی ہیں" }, verseRef: "36:9" },
        { term: "فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ", meaning: { en: "So We have covered them, so they do not see", ur: "پس ہم نے ان پر پردہ ڈال دیا تو وہ دیکھتے نہیں" }, explanation: { en: "Allah's veiling of those who persistently reject", ur: "مسلسل انکار کرنے والوں پر اللہ کا پردہ ڈالنا" }, verseRef: "36:9" },
        { term: "وَسَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ", meaning: { en: "Equal to them whether you warn them or not", ur: "ان پر برابر ہے چاہے تم انہیں ڈراؤ یا نہ ڈراؤ" }, explanation: { en: "Warning does not benefit those whose hearts are sealed", ur: "ڈرانا ان لوگوں کو فائدہ نہیں دیتا جن کے دل مہر لگے ہوئے ہیں" }, verseRef: "36:10" }
      ]
    },

    whoCanBeWarned: {
      name: "Those Who Benefit from Warning",
      nameUr: "تنبیہ سے فائدہ اٹھانے والے",
      nameArabic: "من ينتفع بالإنذار",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "إِنَّمَا تُنذِرُ مَنِ اتَّبَعَ الذِّكْرَ", meaning: { en: "You can only warn one who follows the reminder", ur: "تم صرف اسی کو ڈرا سکتے ہو جو نصیحت کی پیروی کرے" }, explanation: { en: "Warning benefits those with open hearts", ur: "ڈرانا ان لوگوں کو فائدہ دیتا ہے جن کے دل کھلے ہوں" }, verseRef: "36:11" },
        { term: "وَخَشِيَ الرَّحْمَٰنَ بِالْغَيْبِ", meaning: { en: "And fears the Most Merciful in the unseen", ur: "اور بن دیکھے رحمان سے ڈرے" }, explanation: { en: "Fear of Allah even when unseen - true faith", ur: "بن دیکھے اللہ سے ڈرنا - یہی سچا ایمان ہے" }, verseRef: "36:11" },
        { term: "فَبَشِّرْهُ بِمَغْفِرَةٍ وَأَجْرٍ كَرِيمٍ", meaning: { en: "So give him good tidings of forgiveness and noble reward", ur: "تو اسے مغفرت اور عمدہ اجر کی خوشخبری دو" }, explanation: { en: "Promise for believers who heed warning", ur: "ڈرانے پر توجہ دینے والے مومنوں کے لیے وعدہ" }, verseRef: "36:11" },
        { term: "إِنَّا نَحْنُ نُحْيِي الْمَوْتَىٰ", meaning: { en: "Indeed, it is We who bring the dead to life", ur: "بیشک ہم ہی مُردوں کو زندہ کرتے ہیں" }, explanation: { en: "Allah's power over life and death", ur: "زندگی اور موت پر اللہ کی قدرت" }, verseRef: "36:12" },
        { term: "وَنَكْتُبُ مَا قَدَّمُوا وَآثَارَهُمْ", meaning: { en: "We record what they put forth and their traces", ur: "اور ہم لکھتے ہیں جو انہوں نے آگے بھیجا اور ان کے نشانات" }, explanation: { en: "Every deed and its effects are recorded", ur: "ہر عمل اور اس کے اثرات لکھے جاتے ہیں" }, verseRef: "36:12" },
        { term: "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ", meaning: { en: "And everything We have enumerated in a clear register", ur: "اور ہر چیز کو ہم نے ایک کھلی کتاب میں شمار کر رکھا ہے" }, explanation: { en: "The Preserved Tablet - Lawh al-Mahfuz", ur: "لوحِ محفوظ - محفوظ تختی" }, verseRef: "36:12" }
      ]
    },

    // STORY OF THE MESSENGERS TO THE TOWN (13-32)
    messengersToTown: {
      name: "The Messengers to the Town",
      nameUr: "بستی کی طرف بھیجے گئے رسول",
      nameArabic: "الرسل إلى القرية",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "وَاضْرِبْ لَهُم مَّثَلًا أَصْحَابَ الْقَرْيَةِ", meaning: { en: "Present to them an example of the companions of the city", ur: "ان کے سامنے بستی والوں کی مثال بیان کرو" }, explanation: { en: "Story of Antioch (traditionally) as a parable", ur: "انطاکیہ (روایتی طور پر) کی کہانی بطور مثال" }, verseRef: "36:13" },
        { term: "إِذْ جَاءَهَا الْمُرْسَلُونَ", meaning: { en: "When the messengers came to it", ur: "جب اس میں رسول آئے" }, explanation: { en: "Messengers sent to guide the town", ur: "بستی کی ہدایت کے لیے بھیجے گئے رسول" }, verseRef: "36:13" },
        { term: "إِذْ أَرْسَلْنَا إِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوهُمَا", meaning: { en: "When We sent to them two, and they denied them", ur: "جب ہم نے ان کی طرف دو بھیجے تو انہوں نے جھٹلایا" }, explanation: { en: "First two messengers were rejected", ur: "پہلے دو رسولوں کو جھٹلا دیا گیا" }, verseRef: "36:14" },
        { term: "فَعَزَّزْنَا بِثَالِثٍ", meaning: { en: "So We strengthened them with a third", ur: "پھر ہم نے تیسرے سے تقویت دی" }, explanation: { en: "Allah sent reinforcement", ur: "اللہ نے مدد بھیجی" }, verseRef: "36:14" },
        { term: "إِنَّا إِلَيْكُم مُّرْسَلُونَ", meaning: { en: "Indeed, we are messengers to you", ur: "بیشک ہم تمہاری طرف بھیجے گئے ہیں" }, explanation: { en: "Clear declaration of divine mission", ur: "الٰہی مشن کا واضح اعلان" }, verseRef: "36:14" }
      ]
    },

    townPeopleRejection: {
      name: "The Town People's Rejection",
      nameUr: "بستی والوں کا انکار",
      nameArabic: "رفض أهل القرية",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "مَا أَنتُمْ إِلَّا بَشَرٌ مِّثْلُنَا", meaning: { en: "You are only human beings like us", ur: "تم تو ہماری طرح کے بشر ہو" }, explanation: { en: "Common objection - prophets are just men", ur: "عام اعتراض - انبیاء بھی تو انسان ہیں" }, verseRef: "36:15" },
        { term: "وَمَا أَنزَلَ الرَّحْمَٰنُ مِن شَيْءٍ", meaning: { en: "And the Most Merciful has not revealed anything", ur: "اور رحمان نے کچھ نہیں اتارا" }, explanation: { en: "Denial of divine revelation", ur: "الٰہی وحی کا انکار" }, verseRef: "36:15" },
        { term: "إِنْ أَنتُمْ إِلَّا تَكْذِبُونَ", meaning: { en: "You are only lying", ur: "تم تو بس جھوٹ بولتے ہو" }, explanation: { en: "Accusing messengers of falsehood", ur: "رسولوں پر جھوٹ کا الزام" }, verseRef: "36:15" },
        { term: "رَبُّنَا يَعْلَمُ إِنَّا إِلَيْكُمْ لَمُرْسَلُونَ", meaning: { en: "Our Lord knows that we are messengers to you", ur: "ہمارا رب جانتا ہے کہ ہم تمہاری طرف بھیجے گئے ہیں" }, explanation: { en: "Messengers appeal to Allah as witness", ur: "رسولوں نے اللہ کو گواہ بنایا" }, verseRef: "36:16" },
        { term: "وَمَا عَلَيْنَا إِلَّا الْبَلَاغُ الْمُبِينُ", meaning: { en: "And upon us is only clear notification", ur: "اور ہم پر صرف واضح پیغام پہنچانا ہے" }, explanation: { en: "Messenger's duty is only to convey", ur: "رسول کا فرض صرف پیغام پہنچانا ہے" }, verseRef: "36:17" },
        { term: "إِنَّا تَطَيَّرْنَا بِكُمْ", meaning: { en: "Indeed, we consider you a bad omen", ur: "بیشک ہم تمہیں بدشگونی سمجھتے ہیں" }, explanation: { en: "Superstitious rejection of messengers", ur: "توہم پرستانہ طور پر رسولوں کا رد" }, verseRef: "36:18" },
        { term: "لَئِن لَّمْ تَنتَهُوا لَنَرْجُمَنَّكُمْ", meaning: { en: "If you do not desist, we will stone you", ur: "اگر تم باز نہ آئے تو ہم تمہیں سنگسار کر دیں گے" }, explanation: { en: "Threat of violence against messengers", ur: "رسولوں کے خلاف تشدد کی دھمکی" }, verseRef: "36:18" },
        { term: "طَائِرُكُم مَّعَكُمْ", meaning: { en: "Your omen is with yourselves", ur: "تمہاری بدشگونی تمہارے ساتھ ہے" }, explanation: { en: "Their misfortune is their own doing", ur: "ان کی بدقسمتی ان کے اپنے اعمال کی وجہ سے ہے" }, verseRef: "36:19" }
      ]
    },

    believerFromEdgeOfTown: {
      name: "The Believer from the Edge of Town",
      nameUr: "شہر کے کنارے سے آنے والا مومن",
      nameArabic: "المؤمن من أقصى المدينة",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "وَجَاءَ مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ يَسْعَىٰ", meaning: { en: "And there came from the farthest end of the city a man, running", ur: "اور شہر کے دور دراز کنارے سے ایک آدمی دوڑتا ہوا آیا" }, explanation: { en: "Habib an-Najjar - passionate believer rushing to help", ur: "حبیب النجار - جوشیلا مومن جو مدد کے لیے دوڑا" }, verseRef: "36:20" },
        { term: "يَا قَوْمِ اتَّبِعُوا الْمُرْسَلِينَ", meaning: { en: "O my people, follow the messengers", ur: "اے میری قوم! رسولوں کی پیروی کرو" }, explanation: { en: "His call to his people", ur: "اپنی قوم کو اس کی پکار" }, verseRef: "36:20" },
        { term: "اتَّبِعُوا مَن لَّا يَسْأَلُكُمْ أَجْرًا", meaning: { en: "Follow those who do not ask of you any payment", ur: "ان کی پیروی کرو جو تم سے کوئی اجرت نہیں مانگتے" }, explanation: { en: "Messengers seek no worldly gain", ur: "رسول کوئی دنیاوی فائدہ نہیں چاہتے" }, verseRef: "36:21" },
        { term: "وَهُم مُّهْتَدُونَ", meaning: { en: "And they are guided", ur: "اور وہ ہدایت یافتہ ہیں" }, explanation: { en: "Confirmation of messengers' guidance", ur: "رسولوں کی ہدایت کی تصدیق" }, verseRef: "36:21" },
        { term: "وَمَا لِيَ لَا أَعْبُدُ الَّذِي فَطَرَنِي", meaning: { en: "And why should I not worship He who created me", ur: "اور مجھے کیا ہوا کہ میں اس کی عبادت نہ کروں جس نے مجھے پیدا کیا" }, explanation: { en: "Logical argument for monotheism", ur: "توحید کے لیے عقلی دلیل" }, verseRef: "36:22" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: { en: "And to whom you will be returned", ur: "اور اسی کی طرف تم لوٹائے جاؤ گے" }, explanation: { en: "Reminder of return to Allah", ur: "اللہ کی طرف واپسی کی یاد دہانی" }, verseRef: "36:22" },
        { term: "أَأَتَّخِذُ مِن دُونِهِ آلِهَةً", meaning: { en: "Should I take gods besides Him?", ur: "کیا میں اس کے سوا معبود بناؤں؟" }, explanation: { en: "Rejection of polytheism", ur: "شرک کی تردید" }, verseRef: "36:23" },
        { term: "إِنِّي آمَنتُ بِرَبِّكُمْ فَاسْمَعُونِ", meaning: { en: "Indeed, I have believed in your Lord, so listen to me", ur: "بیشک میں تمہارے رب پر ایمان لایا، پس میری بات سنو" }, explanation: { en: "His bold declaration of faith", ur: "اس کا بہادرانہ اعلانِ ایمان" }, verseRef: "36:25" }
      ]
    },

    martyrdomAndReward: {
      name: "Martyrdom and Heavenly Reward",
      nameUr: "شہادت اور آسمانی اجر",
      nameArabic: "الشهادة والجزاء",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "قِيلَ ادْخُلِ الْجَنَّةَ", meaning: { en: "It was said: Enter Paradise", ur: "کہا گیا: جنت میں داخل ہو جاؤ" }, explanation: { en: "Immediate entry to Paradise after martyrdom", ur: "شہادت کے بعد فوری طور پر جنت میں داخلہ" }, verseRef: "36:26" },
        { term: "قَالَ يَا لَيْتَ قَوْمِي يَعْلَمُونَ", meaning: { en: "He said: I wish my people could know", ur: "اس نے کہا: کاش میری قوم کو معلوم ہوتا" }, explanation: { en: "Concern for his people even in Paradise", ur: "جنت میں بھی اپنی قوم کی فکر" }, verseRef: "36:26" },
        { term: "بِمَا غَفَرَ لِي رَبِّي", meaning: { en: "For what my Lord has forgiven me", ur: "کہ میرے رب نے مجھے بخش دیا" }, explanation: { en: "Joy at divine forgiveness", ur: "الٰہی مغفرت پر خوشی" }, verseRef: "36:27" },
        { term: "وَجَعَلَنِي مِنَ الْمُكْرَمِينَ", meaning: { en: "And made me of the honored ones", ur: "اور مجھے عزت والوں میں شامل کیا" }, explanation: { en: "High rank among Allah's honored servants", ur: "اللہ کے معزز بندوں میں اونچا مقام" }, verseRef: "36:27" }
      ]
    },

    destructionOfTown: {
      name: "Destruction of the Town",
      nameUr: "بستی کی تباہی",
      nameArabic: "هلاك القرية",
      color: "#EF4444",
      icon: "Zap",
      concepts: [
        { term: "وَمَا أَنزَلْنَا عَلَىٰ قَوْمِهِ مِن بَعْدِهِ مِن جُندٍ مِّنَ السَّمَاءِ", meaning: { en: "We did not send down upon his people after him any soldiers from heaven", ur: "ہم نے اس کے بعد اس کی قوم پر آسمان سے کوئی لشکر نہیں اتارا" }, explanation: { en: "No heavenly army needed", ur: "آسمانی لشکر کی ضرورت نہیں تھی" }, verseRef: "36:28" },
        { term: "وَمَا كُنَّا مُنزِلِينَ", meaning: { en: "Nor would We have done so", ur: "اور نہ ہم نے اتارنا تھا" }, explanation: { en: "Allah's punishment is simple", ur: "اللہ کا عذاب آسان ہے" }, verseRef: "36:28" },
        { term: "إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً", meaning: { en: "It was only one shout", ur: "بس ایک چیخ تھی" }, explanation: { en: "Single blast destroyed them", ur: "ایک ہی دھماکے نے انہیں تباہ کر دیا" }, verseRef: "36:29" },
        { term: "فَإِذَا هُمْ خَامِدُونَ", meaning: { en: "And immediately they were extinguished", ur: "تو وہ فوراً بجھ گئے" }, explanation: { en: "Swift divine punishment", ur: "تیز رفتار الٰہی عذاب" }, verseRef: "36:29" },
        { term: "يَا حَسْرَةً عَلَى الْعِبَادِ", meaning: { en: "O regret over the servants", ur: "افسوس ہے بندوں پر" }, explanation: { en: "Allah's sorrow at human rejection", ur: "انسانوں کے انکار پر اللہ کا افسوس" }, verseRef: "36:30" },
        { term: "مَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: { en: "No messenger came to them except they ridiculed him", ur: "ان کے پاس کوئی رسول نہیں آیا مگر وہ اس کا مذاق اڑاتے تھے" }, explanation: { en: "Pattern of mockery throughout history", ur: "پوری تاریخ میں تمسخر کا سلسلہ" }, verseRef: "36:30" }
      ]
    },

    // SIGNS OF RESURRECTION (33-44)
    signsInEarth: {
      name: "Signs in the Earth",
      nameUr: "زمین میں نشانیاں",
      nameArabic: "الآيات في الأرض",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَآيَةٌ لَّهُمُ الْأَرْضُ الْمَيْتَةُ", meaning: { en: "And a sign for them is the dead earth", ur: "اور ان کے لیے مُردہ زمین ایک نشانی ہے" }, explanation: { en: "Dead land revival as proof of resurrection", ur: "مُردہ زمین کا زندہ ہونا قیامت کی دلیل" }, verseRef: "36:33" },
        { term: "أَحْيَيْنَاهَا وَأَخْرَجْنَا مِنْهَا حَبًّا", meaning: { en: "We have brought it to life and brought forth from it grain", ur: "ہم نے اسے زندہ کیا اور اس سے اناج نکالا" }, explanation: { en: "Life from death - divine power demonstrated", ur: "موت سے زندگی - الٰہی قدرت کا مظاہرہ" }, verseRef: "36:33" },
        { term: "فَمِنْهُ يَأْكُلُونَ", meaning: { en: "So from it they eat", ur: "پس وہ اس سے کھاتے ہیں" }, explanation: { en: "Sustenance from revived earth", ur: "زندہ ہوئی زمین سے رزق" }, verseRef: "36:33" },
        { term: "وَجَعَلْنَا فِيهَا جَنَّاتٍ مِّن نَّخِيلٍ وَأَعْنَابٍ", meaning: { en: "And We placed therein gardens of palms and grapevines", ur: "اور ہم نے اس میں کھجوروں اور انگوروں کے باغ بنائے" }, explanation: { en: "Orchards as divine blessing", ur: "باغات بطور الٰہی نعمت" }, verseRef: "36:34" },
        { term: "وَفَجَّرْنَا فِيهَا مِنَ الْعُيُونِ", meaning: { en: "And caused springs to gush forth therein", ur: "اور اس میں چشمے بہائے" }, explanation: { en: "Water springs as life source", ur: "پانی کے چشمے بطور ذریعہ حیات" }, verseRef: "36:34" },
        { term: "لِيَأْكُلُوا مِن ثَمَرِهِ", meaning: { en: "That they may eat of His fruit", ur: "تاکہ وہ اس کے پھل کھائیں" }, explanation: { en: "Divine provision for humanity", ur: "انسانیت کے لیے الٰہی رزق" }, verseRef: "36:35" },
        { term: "وَمَا عَمِلَتْهُ أَيْدِيهِمْ", meaning: { en: "And their hands have not produced it", ur: "اور یہ ان کے ہاتھوں نے نہیں بنایا" }, explanation: { en: "Human effort did not create the fruit itself", ur: "انسانی کوشش نے پھل خود نہیں بنایا" }, verseRef: "36:35" },
        { term: "أَفَلَا يَشْكُرُونَ", meaning: { en: "So will they not be grateful?", ur: "تو کیا وہ شکر نہیں کرتے؟" }, explanation: { en: "Call to gratitude for divine provision", ur: "الٰہی رزق پر شکر ادا کرنے کی دعوت" }, verseRef: "36:35" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation - Pairs",
      nameUr: "تخلیق میں نشانیاں - جوڑے",
      nameArabic: "الآيات في الخلق - الأزواج",
      color: "#06B6D4",
      icon: "Sparkles",
      concepts: [
        { term: "سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا", meaning: { en: "Exalted is He who created all pairs", ur: "پاک ہے وہ ذات جس نے سب جوڑے بنائے" }, explanation: { en: "Everything created in pairs - divine design", ur: "ہر چیز جوڑوں میں پیدا کی گئی - الٰہی تخلیق" }, verseRef: "36:36" },
        { term: "مِمَّا تُنبِتُ الْأَرْضُ", meaning: { en: "From what the earth grows", ur: "زمین جو اگاتی ہے اس سے" }, explanation: { en: "Male and female in plants", ur: "پودوں میں نر اور مادہ" }, verseRef: "36:36" },
        { term: "وَمِنْ أَنفُسِهِمْ", meaning: { en: "And of themselves", ur: "اور خود ان میں سے" }, explanation: { en: "Human male and female", ur: "انسانی مرد اور عورت" }, verseRef: "36:36" },
        { term: "وَمِمَّا لَا يَعْلَمُونَ", meaning: { en: "And from that which they do not know", ur: "اور ان چیزوں سے جو وہ نہیں جانتے" }, explanation: { en: "Pairs beyond human knowledge - subatomic, spiritual", ur: "انسانی علم سے ماورا جوڑے - ایٹمی ذرات، روحانی" }, verseRef: "36:36" }
      ]
    },

    signsInNightAndDay: {
      name: "Signs in Night and Day",
      nameUr: "رات اور دن کی نشانیاں",
      nameArabic: "آية الليل والنهار",
      color: "#06B6D4",
      icon: "Moon",
      concepts: [
        { term: "وَآيَةٌ لَّهُمُ اللَّيْلُ نَسْلَخُ مِنْهُ النَّهَارَ", meaning: { en: "And a sign for them is the night - We remove from it daylight", ur: "اور ان کے لیے رات ایک نشانی ہے - ہم اس سے دن کو الگ کر دیتے ہیں" }, explanation: { en: "Night-day cycle as divine sign", ur: "رات اور دن کا چکر بطور الٰہی نشانی" }, verseRef: "36:37" },
        { term: "فَإِذَا هُم مُّظْلِمُونَ", meaning: { en: "And then they are in darkness", ur: "تو وہ اندھیرے میں ہو جاتے ہیں" }, explanation: { en: "Transition to darkness", ur: "اندھیرے میں تبدیلی" }, verseRef: "36:37" },
        { term: "وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَّهَا", meaning: { en: "And the sun runs to a resting place for it", ur: "اور سورج اپنے ٹھکانے کی طرف چلتا ہے" }, explanation: { en: "Sun's ordained course through space", ur: "خلا میں سورج کا مقررہ راستہ" }, verseRef: "36:38" },
        { term: "ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ", meaning: { en: "That is the determination of the Mighty, the Knowing", ur: "یہ غالب اور علیم کا اندازہ ہے" }, explanation: { en: "Precise divine calculation", ur: "درست الٰہی حساب" }, verseRef: "36:38" }
      ]
    },

    signsInMoon: {
      name: "Signs in the Moon",
      nameUr: "چاند کی نشانی",
      nameArabic: "آية القمر",
      color: "#06B6D4",
      icon: "Moon",
      concepts: [
        { term: "وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ", meaning: { en: "And the moon - We have determined for it phases", ur: "اور چاند - ہم نے اس کی منزلیں مقرر کیں" }, explanation: { en: "Lunar phases as divine system", ur: "چاند کی منزلیں بطور الٰہی نظام" }, verseRef: "36:39" },
        { term: "حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ", meaning: { en: "Until it returns like the old date stalk", ur: "یہاں تک کہ پرانی کھجور کی شاخ جیسا ہو جاتا ہے" }, explanation: { en: "Crescent moon resembles dried palm branch", ur: "ہلال خشک کھجور کی شاخ جیسا لگتا ہے" }, verseRef: "36:39" },
        { term: "لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ", meaning: { en: "The sun is not allowed to reach the moon", ur: "نہ سورج کو یہ زیبا ہے کہ چاند کو جا پکڑے" }, explanation: { en: "Distinct orbits - cannot overtake", ur: "الگ الگ مدار - ایک دوسرے سے آگے نہیں نکل سکتے" }, verseRef: "36:40" },
        { term: "وَلَا اللَّيْلُ سَابِقُ النَّهَارِ", meaning: { en: "Nor does the night outstrip the day", ur: "اور نہ رات دن سے آگے نکل سکتی ہے" }, explanation: { en: "Perfect cosmic balance", ur: "کامل کائناتی توازن" }, verseRef: "36:40" },
        { term: "وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ", meaning: { en: "Each in an orbit is swimming", ur: "اور سب ایک مدار میں تیر رہے ہیں" }, explanation: { en: "Celestial bodies in their orbits", ur: "آسمانی اجرام اپنے اپنے مداروں میں" }, verseRef: "36:40" }
      ]
    },

    signsInShips: {
      name: "Signs in Ships",
      nameUr: "کشتیوں کی نشانیاں",
      nameArabic: "آية السفن",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "وَآيَةٌ لَّهُمْ أَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُونِ", meaning: { en: "A sign for them is that We carried their descendants in the laden ship", ur: "ان کے لیے نشانی ہے کہ ہم نے ان کی اولاد کو بھری ہوئی کشتی میں سوار کیا" }, explanation: { en: "Noah's Ark - salvation through divine guidance", ur: "نوح کی کشتی - الٰہی ہدایت سے نجات" }, verseRef: "36:41" },
        { term: "وَخَلَقْنَا لَهُم مِّن مِّثْلِهِ مَا يَرْكَبُونَ", meaning: { en: "And We created for them from the likes of it that which they ride", ur: "اور ہم نے ان کے لیے اسی طرح کی سواریاں بنائیں" }, explanation: { en: "All vessels derived from Ark's design", ur: "تمام کشتیاں اسی طرز پر بنائی گئیں" }, verseRef: "36:42" },
        { term: "وَإِن نَّشَأْ نُغْرِقْهُمْ", meaning: { en: "And if We should will, We could drown them", ur: "اور اگر ہم چاہیں تو انہیں ڈبو دیں" }, explanation: { en: "Human safety depends on Allah's will", ur: "انسانی حفاظت اللہ کی مشیت پر منحصر ہے" }, verseRef: "36:43" },
        { term: "فَلَا صَرِيخَ لَهُمْ", meaning: { en: "And there would be no cry for help", ur: "تو نہ ان کا کوئی فریاد رس ہو" }, explanation: { en: "No savior besides Allah", ur: "اللہ کے سوا کوئی بچانے والا نہیں" }, verseRef: "36:43" },
        { term: "وَلَا هُمْ يُنقَذُونَ", meaning: { en: "Nor would they be rescued", ur: "اور نہ وہ بچائے جائیں" }, explanation: { en: "Only divine mercy saves", ur: "صرف الٰہی رحمت ہی بچاتی ہے" }, verseRef: "36:43" },
        { term: "إِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا إِلَىٰ حِينٍ", meaning: { en: "Except as a mercy from Us and provision for a time", ur: "مگر ہماری رحمت اور ایک وقت تک کے فائدے کے لیے" }, explanation: { en: "Life is mercy - temporary provision", ur: "زندگی رحمت ہے - عارضی فائدہ" }, verseRef: "36:44" }
      ]
    },

    // WARNING TO DISBELIEVERS (45-54)
    warningIgnored: {
      name: "Warnings Ignored",
      nameUr: "نظرانداز تنبیہات",
      nameArabic: "الإنذار المرفوض",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَإِذَا قِيلَ لَهُمُ اتَّقُوا مَا بَيْنَ أَيْدِيكُمْ وَمَا خَلْفَكُمْ", meaning: { en: "When it is said to them: Fear what is before you and behind you", ur: "اور جب ان سے کہا جاتا ہے: اپنے آگے اور پیچھے سے ڈرو" }, explanation: { en: "Warning about past and future consequences", ur: "ماضی اور مستقبل کے نتائج کے بارے میں تنبیہ" }, verseRef: "36:45" },
        { term: "لَعَلَّكُمْ تُرْحَمُونَ", meaning: { en: "That you may receive mercy", ur: "تاکہ تم پر رحم کیا جائے" }, explanation: { en: "Purpose of warning - to attain mercy", ur: "تنبیہ کا مقصد - رحمت حاصل کرنا" }, verseRef: "36:45" },
        { term: "وَمَا تَأْتِيهِم مِّنْ آيَةٍ مِّنْ آيَاتِ رَبِّهِمْ", meaning: { en: "No sign comes to them from the signs of their Lord", ur: "ان کے رب کی نشانیوں میں سے کوئی نشانی نہیں آتی" }, explanation: { en: "Signs continuously presented", ur: "نشانیاں مسلسل پیش کی جاتی ہیں" }, verseRef: "36:46" },
        { term: "إِلَّا كَانُوا عَنْهَا مُعْرِضِينَ", meaning: { en: "Except that they turn away from it", ur: "مگر وہ اس سے منہ موڑ لیتے ہیں" }, explanation: { en: "Persistent rejection of all signs", ur: "تمام نشانیوں کا مسلسل رد" }, verseRef: "36:46" },
        { term: "أَنفِقُوا مِمَّا رَزَقَكُمُ اللَّهُ", meaning: { en: "Spend from what Allah has provided you", ur: "اللہ نے جو تمہیں دیا ہے اس میں سے خرچ کرو" }, explanation: { en: "Command to spend in charity", ur: "صدقہ و خیرات میں خرچ کرنے کا حکم" }, verseRef: "36:47" },
        { term: "أَنُطْعِمُ مَن لَّوْ يَشَاءُ اللَّهُ أَطْعَمَهُ", meaning: { en: "Should we feed those whom, if Allah willed, He would have fed?", ur: "کیا ہم انہیں کھلائیں جنہیں اگر اللہ چاہتا تو خود کھلا دیتا؟" }, explanation: { en: "False argument against charity - misunderstanding divine will", ur: "صدقے کے خلاف غلط دلیل - اللہ کی مشیت کی غلط فہمی" }, verseRef: "36:47" }
      ]
    },

    mockingResurrection: {
      name: "Mockers of Resurrection",
      nameUr: "قیامت کا مذاق اڑانے والے",
      nameArabic: "المستهزئون بالبعث",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ", meaning: { en: "And they say: When is this promise, if you are truthful?", ur: "اور کہتے ہیں: یہ وعدہ کب پورا ہوگا اگر تم سچے ہو؟" }, explanation: { en: "Mocking question about Day of Judgment", ur: "قیامت کے بارے میں تمسخر آمیز سوال" }, verseRef: "36:48" },
        { term: "مَا يَنظُرُونَ إِلَّا صَيْحَةً وَاحِدَةً", meaning: { en: "They await only a single blast", ur: "وہ صرف ایک دھماکے کے منتظر ہیں" }, explanation: { en: "Sudden coming of the Hour", ur: "قیامت کا اچانک آنا" }, verseRef: "36:49" },
        { term: "تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ", meaning: { en: "Which will seize them while they are disputing", ur: "جو انہیں آ پکڑے گا جب وہ جھگڑ رہے ہوں گے" }, explanation: { en: "Caught unaware in daily arguments", ur: "روزمرہ بحثوں میں بے خبر پکڑے جائیں گے" }, verseRef: "36:49" },
        { term: "فَلَا يَسْتَطِيعُونَ تَوْصِيَةً", meaning: { en: "They will not be able to make a will", ur: "تو نہ وصیت کر سکیں گے" }, explanation: { en: "No time for final instructions", ur: "آخری ہدایات کے لیے وقت نہ ملے گا" }, verseRef: "36:50" },
        { term: "وَلَا إِلَىٰ أَهْلِهِمْ يَرْجِعُونَ", meaning: { en: "Nor to their families return", ur: "اور نہ اپنے گھر والوں کی طرف لوٹ سکیں گے" }, explanation: { en: "Sudden separation from loved ones", ur: "پیاروں سے اچانک جدائی" }, verseRef: "36:50" }
      ]
    },

    // RESURRECTION SCENES (51-65)
    trumpetBlown: {
      name: "The Trumpet and Rising",
      nameUr: "صور اور اٹھنا",
      nameArabic: "النفخ في الصور",
      color: "#F59E0B",
      icon: "Zap",
      concepts: [
        { term: "وَنُفِخَ فِي الصُّورِ", meaning: { en: "And the trumpet will be blown", ur: "اور صور پھونکا جائے گا" }, explanation: { en: "Signal for resurrection", ur: "قیامت کا اشارہ" }, verseRef: "36:51" },
        { term: "فَإِذَا هُم مِّنَ الْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ", meaning: { en: "And at once from the graves to their Lord they will hasten", ur: "تو فوراً وہ قبروں سے اپنے رب کی طرف دوڑ پڑیں گے" }, explanation: { en: "Rising from graves toward Allah", ur: "قبروں سے اللہ کی طرف اٹھنا" }, verseRef: "36:51" },
        { term: "قَالُوا يَا وَيْلَنَا مَن بَعَثَنَا مِن مَّرْقَدِنَا", meaning: { en: "They will say: O woe to us! Who has raised us from our sleeping place?", ur: "کہیں گے: ہائے ہماری خرابی! کس نے ہمیں ہماری آرام گاہ سے اٹھایا؟" }, explanation: { en: "Disbelievers' shock at resurrection", ur: "کافروں کا قیامت پر صدمہ" }, verseRef: "36:52" },
        { term: "هَٰذَا مَا وَعَدَ الرَّحْمَٰنُ", meaning: { en: "This is what the Most Merciful had promised", ur: "یہ ہے وہ جس کا رحمان نے وعدہ کیا تھا" }, explanation: { en: "Confirmation of divine promise", ur: "الٰہی وعدے کی تصدیق" }, verseRef: "36:52" },
        { term: "وَصَدَقَ الْمُرْسَلُونَ", meaning: { en: "And the messengers spoke truth", ur: "اور رسولوں نے سچ کہا تھا" }, explanation: { en: "Messengers vindicated", ur: "رسولوں کی بات سچی ثابت ہوئی" }, verseRef: "36:52" }
      ]
    },

    swiftJudgment: {
      name: "The Swift Judgment",
      nameUr: "تیز فیصلہ",
      nameArabic: "الحساب السريع",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً", meaning: { en: "It will be only one blast", ur: "بس ایک ہی چیخ ہوگی" }, explanation: { en: "Single sound for all to gather", ur: "سب کو جمع کرنے کے لیے ایک آواز" }, verseRef: "36:53" },
        { term: "فَإِذَا هُمْ جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ", meaning: { en: "And at once they are all brought present before Us", ur: "تو فوراً وہ سب ہمارے سامنے حاضر کیے جائیں گے" }, explanation: { en: "Instantaneous gathering before Allah", ur: "اللہ کے سامنے فوری جمع ہونا" }, verseRef: "36:53" },
        { term: "فَالْيَوْمَ لَا تُظْلَمُ نَفْسٌ شَيْئًا", meaning: { en: "So today no soul will be wronged at all", ur: "تو آج کسی جان پر ذرا بھی ظلم نہ ہوگا" }, explanation: { en: "Perfect justice on Judgment Day", ur: "قیامت کے دن کامل انصاف" }, verseRef: "36:54" },
        { term: "وَلَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ", meaning: { en: "And you will not be recompensed except for what you used to do", ur: "اور تمہیں وہی بدلا دیا جائے گا جو تم کرتے تھے" }, explanation: { en: "Exact reward for deeds", ur: "اعمال کا بالکل درست بدلہ" }, verseRef: "36:54" }
      ]
    },

    paradiseDelights: {
      name: "Delights of Paradise",
      nameUr: "جنت کی نعمتیں",
      nameArabic: "نعيم الجنة",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "إِنَّ أَصْحَابَ الْجَنَّةِ الْيَوْمَ فِي شُغُلٍ فَاكِهُونَ", meaning: { en: "Indeed the companions of Paradise today are in occupation, rejoicing", ur: "بیشک جنت والے آج خوشیوں میں مشغول ہیں" }, explanation: { en: "Believers busy with delight in Paradise", ur: "مومنین جنت میں لذتوں میں مصروف" }, verseRef: "36:55" },
        { term: "هُمْ وَأَزْوَاجُهُمْ فِي ظِلَالٍ عَلَى الْأَرَائِكِ مُتَّكِئُونَ", meaning: { en: "They and their spouses - in shade, reclining on adorned couches", ur: "وہ اور ان کی بیویاں سایوں میں مسندوں پر ٹیک لگائے ہوئے" }, explanation: { en: "Restful luxury with spouses", ur: "بیویوں کے ساتھ آرام دہ عیش و آرام" }, verseRef: "36:56" },
        { term: "لَهُمْ فِيهَا فَاكِهَةٌ", meaning: { en: "For them therein is fruit", ur: "ان کے لیے وہاں پھل ہیں" }, explanation: { en: "Abundant fruits", ur: "بے شمار پھل" }, verseRef: "36:57" },
        { term: "وَلَهُم مَّا يَدَّعُونَ", meaning: { en: "And for them is whatever they request", ur: "اور ان کے لیے جو بھی وہ چاہیں" }, explanation: { en: "Every wish fulfilled", ur: "ہر خواہش پوری" }, verseRef: "36:57" },
        { term: "سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ", meaning: { en: "Peace - a word from a Merciful Lord", ur: "سلام - رحم کرنے والے رب کی طرف سے ایک کلام" }, explanation: { en: "Allah Himself greets them with Salam", ur: "اللہ خود انہیں سلام فرماتا ہے" }, verseRef: "36:58" }
      ]
    },

    separationOfSinners: {
      name: "Separation of the Sinners",
      nameUr: "گناہگاروں کی علیحدگی",
      nameArabic: "تمييز المجرمين",
      color: "#EF4444",
      icon: "Users",
      concepts: [
        { term: "وَامْتَازُوا الْيَوْمَ أَيُّهَا الْمُجْرِمُونَ", meaning: { en: "And be separate today, O criminals", ur: "اور آج الگ ہو جاؤ اے مجرمو" }, explanation: { en: "Command to separate sinners from believers", ur: "گنہگاروں کو مومنوں سے الگ کرنے کا حکم" }, verseRef: "36:59" },
        { term: "أَلَمْ أَعْهَدْ إِلَيْكُمْ يَا بَنِي آدَمَ", meaning: { en: "Did I not enjoin upon you, O children of Adam", ur: "کیا میں نے تم سے عہد نہیں لیا تھا اے اولادِ آدم" }, explanation: { en: "Allah reminds of the covenant", ur: "اللہ عہد یاد دلاتا ہے" }, verseRef: "36:60" },
        { term: "أَن لَّا تَعْبُدُوا الشَّيْطَانَ", meaning: { en: "That you not worship Satan", ur: "کہ شیطان کی عبادت نہ کرو" }, explanation: { en: "Command to reject Satan", ur: "شیطان کو رد کرنے کا حکم" }, verseRef: "36:60" },
        { term: "إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ", meaning: { en: "Indeed, he is to you a clear enemy", ur: "بیشک وہ تمہارا کھلا دشمن ہے" }, explanation: { en: "Satan's enmity made clear", ur: "شیطان کی دشمنی واضح کی گئی" }, verseRef: "36:60" },
        { term: "وَأَنِ اعْبُدُونِي", meaning: { en: "And that you worship Me", ur: "اور یہ کہ میری عبادت کرو" }, explanation: { en: "Worship Allah alone", ur: "صرف اللہ کی عبادت کرو" }, verseRef: "36:61" },
        { term: "هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ", meaning: { en: "This is a straight path", ur: "یہی سیدھا راستہ ہے" }, explanation: { en: "Monotheism is the straight path", ur: "توحید ہی صراطِ مستقیم ہے" }, verseRef: "36:61" },
        { term: "وَلَقَدْ أَضَلَّ مِنكُمْ جِبِلًّا كَثِيرًا", meaning: { en: "And he had led astray from you a great multitude", ur: "اور بیشک اس نے تم میں سے بڑی تعداد کو گمراہ کیا" }, explanation: { en: "Satan misled many generations", ur: "شیطان نے کئی نسلوں کو گمراہ کیا" }, verseRef: "36:62" },
        { term: "أَفَلَمْ تَكُونُوا تَعْقِلُونَ", meaning: { en: "Did you not use reason?", ur: "کیا تم عقل نہیں رکھتے تھے؟" }, explanation: { en: "Rebuke for not using intellect", ur: "عقل استعمال نہ کرنے پر سرزنش" }, verseRef: "36:62" }
      ]
    },

    hellfireDescription: {
      name: "Description of Hellfire",
      nameUr: "جہنم کا بیان",
      nameArabic: "وصف جهنم",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "هَٰذِهِ جَهَنَّمُ الَّتِي كُنتُمْ تُوعَدُونَ", meaning: { en: "This is the Hellfire which you were promised", ur: "یہ وہ جہنم ہے جس کا تم سے وعدہ کیا جاتا تھا" }, explanation: { en: "Confrontation with Hell", ur: "جہنم سے سامنا" }, verseRef: "36:63" },
        { term: "اصْلَوْهَا الْيَوْمَ بِمَا كُنتُمْ تَكْفُرُونَ", meaning: { en: "Enter it today for what you used to deny", ur: "آج اس میں داخل ہو جاؤ اس کفر کی وجہ سے جو تم کرتے تھے" }, explanation: { en: "Entry as consequence of denial", ur: "انکار کے نتیجے میں داخلہ" }, verseRef: "36:64" },
        { term: "الْيَوْمَ نَخْتِمُ عَلَىٰ أَفْوَاهِهِمْ", meaning: { en: "Today We seal their mouths", ur: "آج ہم ان کے منہ پر مہر لگا دیں گے" }, explanation: { en: "Mouths sealed - cannot speak lies", ur: "منہ بند - جھوٹ نہیں بول سکتے" }, verseRef: "36:65" },
        { term: "وَتُكَلِّمُنَا أَيْدِيهِمْ", meaning: { en: "And their hands will speak to Us", ur: "اور ان کے ہاتھ ہم سے بولیں گے" }, explanation: { en: "Hands testify to deeds", ur: "ہاتھ اعمال کی گواہی دیں گے" }, verseRef: "36:65" },
        { term: "وَتَشْهَدُ أَرْجُلُهُم", meaning: { en: "And their feet will testify", ur: "اور ان کے پاؤں گواہی دیں گے" }, explanation: { en: "Feet witness where they walked", ur: "پاؤں گواہی دیں گے کہ کہاں چلے" }, verseRef: "36:65" },
        { term: "بِمَا كَانُوا يَكْسِبُونَ", meaning: { en: "About what they used to earn", ur: "اس کے بارے میں جو وہ کمایا کرتے تھے" }, explanation: { en: "Body parts witness all deeds", ur: "جسم کے اعضاء تمام اعمال کی گواہی دیں گے" }, verseRef: "36:65" }
      ]
    },

    // DIVINE POWER PROOFS (66-76)
    divineAbilities: {
      name: "Divine Abilities",
      nameUr: "الٰہی قدرتیں",
      nameArabic: "القدرة الإلهية",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "وَلَوْ نَشَاءُ لَطَمَسْنَا عَلَىٰ أَعْيُنِهِمْ", meaning: { en: "If We willed, We could have obliterated their eyes", ur: "اور اگر ہم چاہیں تو ان کی آنکھیں مٹا دیں" }, explanation: { en: "Allah could blind them", ur: "اللہ انہیں اندھا کر سکتا ہے" }, verseRef: "36:66" },
        { term: "فَاسْتَبَقُوا الصِّرَاطَ فَأَنَّىٰ يُبْصِرُونَ", meaning: { en: "Then they would race to the path, but how could they see?", ur: "پھر وہ راستے کی طرف دوڑیں تو کیسے دیکھیں؟" }, explanation: { en: "Without guidance, cannot find the way", ur: "ہدایت کے بغیر راستہ نہیں مل سکتا" }, verseRef: "36:66" },
        { term: "وَلَوْ نَشَاءُ لَمَسَخْنَاهُمْ عَلَىٰ مَكَانَتِهِمْ", meaning: { en: "If We willed, We could have transformed them in their places", ur: "اور اگر ہم چاہیں تو انہیں ان کی جگہ پر بگاڑ دیں" }, explanation: { en: "Allah could disfigure them", ur: "اللہ ان کی شکل بدل سکتا ہے" }, verseRef: "36:67" },
        { term: "فَمَا اسْتَطَاعُوا مُضِيًّا وَلَا يَرْجِعُونَ", meaning: { en: "So they would not be able to proceed, nor return", ur: "تو نہ آگے جا سکیں نہ پیچھے لوٹ سکیں" }, explanation: { en: "Complete paralysis if Allah willed", ur: "اللہ چاہے تو مکمل بے بسی" }, verseRef: "36:67" }
      ]
    },

    agingAsSign: {
      name: "Aging as a Sign",
      nameUr: "بڑھاپا بطور نشانی",
      nameArabic: "آية الشيخوخة",
      color: "#06B6D4",
      icon: "Eye",
      concepts: [
        { term: "وَمَن نُّعَمِّرْهُ نُنَكِّسْهُ فِي الْخَلْقِ", meaning: { en: "And whoever We grant long life - We reverse him in creation", ur: "اور جسے ہم لمبی عمر دیں اسے خلقت میں الٹا کر دیتے ہیں" }, explanation: { en: "Old age reverses physical abilities", ur: "بڑھاپا جسمانی صلاحیتوں کو الٹ دیتا ہے" }, verseRef: "36:68" },
        { term: "أَفَلَا يَعْقِلُونَ", meaning: { en: "Will they not use reason?", ur: "کیا وہ عقل نہیں رکھتے؟" }, explanation: { en: "Call to reflect on life cycle", ur: "زندگی کے دور پر غور کرنے کی دعوت" }, verseRef: "36:68" }
      ]
    },

    quranNotPoetry: {
      name: "The Quran is Not Poetry",
      nameUr: "قرآن شاعری نہیں",
      nameArabic: "القرآن ليس شعرا",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَمَا عَلَّمْنَاهُ الشِّعْرَ", meaning: { en: "We did not teach him poetry", ur: "اور ہم نے انہیں شعر نہیں سکھایا" }, explanation: { en: "Prophet was not a poet", ur: "نبی ﷺ شاعر نہیں تھے" }, verseRef: "36:69" },
        { term: "وَمَا يَنبَغِي لَهُ", meaning: { en: "Nor is it befitting for him", ur: "اور نہ یہ ان کے شایانِ شان ہے" }, explanation: { en: "Poetry unfitting for prophecy", ur: "شاعری نبوت کے لائق نہیں" }, verseRef: "36:69" },
        { term: "إِنْ هُوَ إِلَّا ذِكْرٌ وَقُرْآنٌ مُّبِينٌ", meaning: { en: "It is only a reminder and a clear Quran", ur: "یہ تو بس ایک نصیحت اور واضح قرآن ہے" }, explanation: { en: "Quran is divine reminder, not human composition", ur: "قرآن الٰہی نصیحت ہے، انسانی تصنیف نہیں" }, verseRef: "36:69" },
        { term: "لِّيُنذِرَ مَن كَانَ حَيًّا", meaning: { en: "To warn whoever is alive", ur: "تاکہ جو زندہ ہو اسے ڈرائے" }, explanation: { en: "Warning for the spiritually alive", ur: "روحانی طور پر زندہ لوگوں کے لیے تنبیہ" }, verseRef: "36:70" },
        { term: "وَيَحِقَّ الْقَوْلُ عَلَى الْكَافِرِينَ", meaning: { en: "And justify the word against the disbelievers", ur: "اور کافروں پر بات ثابت ہو جائے" }, explanation: { en: "Establishing proof against deniers", ur: "منکرین کے خلاف حجت قائم کرنا" }, verseRef: "36:70" }
      ]
    },

    signsInLivestock: {
      name: "Signs in Livestock",
      nameUr: "مویشیوں میں نشانیاں",
      nameArabic: "آية الأنعام",
      color: "#10B981",
      icon: "Globe",
      concepts: [
        { term: "أَوَلَمْ يَرَوْا أَنَّا خَلَقْنَا لَهُم مِّمَّا عَمِلَتْ أَيْدِينَا أَنْعَامًا", meaning: { en: "Do they not see that We created for them from what Our hands made - livestock", ur: "کیا وہ نہیں دیکھتے کہ ہم نے اپنے ہاتھوں سے بنائی ہوئی چیزوں سے ان کے لیے جانور پیدا کیے" }, explanation: { en: "Cattle as divine creation for humans", ur: "مویشی بطور انسانوں کے لیے الٰہی تخلیق" }, verseRef: "36:71" },
        { term: "فَهُمْ لَهَا مَالِكُونَ", meaning: { en: "And they are their owners", ur: "تو وہ ان کے مالک ہیں" }, explanation: { en: "Human dominion over animals", ur: "جانوروں پر انسانی تسلط" }, verseRef: "36:71" },
        { term: "وَذَلَّلْنَاهَا لَهُمْ", meaning: { en: "And We have tamed them for them", ur: "اور ہم نے انہیں ان کے لیے مسخر کر دیا" }, explanation: { en: "Animals made submissive to humans", ur: "جانوروں کو انسانوں کے تابع بنایا" }, verseRef: "36:72" },
        { term: "فَمِنْهَا رَكُوبُهُمْ", meaning: { en: "So some of them they ride", ur: "تو ان میں سے بعض ان کی سواری ہیں" }, explanation: { en: "Transportation blessing", ur: "سواری کی نعمت" }, verseRef: "36:72" },
        { term: "وَمِنْهَا يَأْكُلُونَ", meaning: { en: "And some of them they eat", ur: "اور بعض کو وہ کھاتے ہیں" }, explanation: { en: "Food blessing", ur: "خوراک کی نعمت" }, verseRef: "36:72" },
        { term: "وَلَهُمْ فِيهَا مَنَافِعُ وَمَشَارِبُ", meaning: { en: "And for them therein are benefits and drinks", ur: "اور ان کے لیے ان میں فائدے اور مشروبات ہیں" }, explanation: { en: "Milk and other uses", ur: "دودھ اور دیگر استعمال" }, verseRef: "36:73" },
        { term: "أَفَلَا يَشْكُرُونَ", meaning: { en: "So will they not be grateful?", ur: "تو کیا وہ شکر نہیں کرتے؟" }, explanation: { en: "Call to gratitude for animal blessings", ur: "جانوروں کی نعمتوں پر شکر ادا کرنے کی دعوت" }, verseRef: "36:73" }
      ]
    },

    falseGods: {
      name: "Futility of False Gods",
      nameUr: "جھوٹے معبودوں کی بے کاری",
      nameArabic: "بطلان الآلهة الباطلة",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "وَاتَّخَذُوا مِن دُونِ اللَّهِ آلِهَةً", meaning: { en: "But they have taken besides Allah gods", ur: "لیکن انہوں نے اللہ کے سوا معبود بنا لیے" }, explanation: { en: "Polytheism - taking other gods", ur: "شرک - دوسرے معبود بنانا" }, verseRef: "36:74" },
        { term: "لَعَلَّهُمْ يُنصَرُونَ", meaning: { en: "That perhaps they would be helped", ur: "شاید ان کی مدد کی جائے" }, explanation: { en: "False hope in false gods", ur: "جھوٹے معبودوں سے جھوٹی امید" }, verseRef: "36:74" },
        { term: "لَا يَسْتَطِيعُونَ نَصْرَهُمْ", meaning: { en: "They are not able to help them", ur: "وہ ان کی مدد نہیں کر سکتے" }, explanation: { en: "False gods are powerless", ur: "جھوٹے معبود بے بس ہیں" }, verseRef: "36:75" },
        { term: "وَهُمْ لَهُمْ جُندٌ مُّحْضَرُونَ", meaning: { en: "And they will be soldiers brought forward", ur: "اور وہ ان کے لیے لشکر کی طرح حاضر کیے جائیں گے" }, explanation: { en: "Idols become evidence against worshippers", ur: "بت پوجنے والوں کے خلاف گواہ بن جائیں گے" }, verseRef: "36:75" },
        { term: "فَلَا يَحْزُنكَ قَوْلُهُمْ", meaning: { en: "So let not their speech grieve you", ur: "تو ان کی بات آپ کو غمگین نہ کرے" }, explanation: { en: "Comfort to the Prophet", ur: "نبی ﷺ کو تسلی" }, verseRef: "36:76" },
        { term: "إِنَّا نَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ", meaning: { en: "Indeed, We know what they conceal and what they declare", ur: "بیشک ہم جانتے ہیں جو وہ چھپاتے ہیں اور جو ظاہر کرتے ہیں" }, explanation: { en: "Allah knows all secrets", ur: "اللہ تمام رازوں کو جانتا ہے" }, verseRef: "36:76" }
      ]
    },

    // CLOSING ARGUMENT - RESURRECTION PROOF (77-83)
    humanCreation: {
      name: "Human Creation Proof",
      nameUr: "انسانی تخلیق کا ثبوت",
      nameArabic: "دليل خلق الإنسان",
      color: "#06B6D4",
      icon: "Users",
      concepts: [
        { term: "أَوَلَمْ يَرَ الْإِنسَانُ أَنَّا خَلَقْنَاهُ مِن نُّطْفَةٍ", meaning: { en: "Does man not see that We created him from a sperm-drop", ur: "کیا انسان نے نہیں دیکھا کہ ہم نے اسے نطفے سے پیدا کیا" }, explanation: { en: "Humble origin of humans", ur: "انسان کی حقیر ابتدا" }, verseRef: "36:77" },
        { term: "فَإِذَا هُوَ خَصِيمٌ مُّبِينٌ", meaning: { en: "Then at once he is a clear adversary", ur: "پھر وہ کھلا جھگڑالو بن جاتا ہے" }, explanation: { en: "Despite humble origin, he argues", ur: "حقیر ابتدا کے باوجود جھگڑا کرتا ہے" }, verseRef: "36:77" },
        { term: "وَضَرَبَ لَنَا مَثَلًا", meaning: { en: "And he presents an example for Us", ur: "اور وہ ہمارے لیے مثال بیان کرتا ہے" }, explanation: { en: "Man makes arguments against Allah", ur: "انسان اللہ کے خلاف دلیلیں دیتا ہے" }, verseRef: "36:78" },
        { term: "وَنَسِيَ خَلْقَهُ", meaning: { en: "And forgets his own creation", ur: "اور اپنی پیدائش بھول جاتا ہے" }, explanation: { en: "Forgets he was created from nothing", ur: "بھول جاتا ہے کہ وہ عدم سے بنایا گیا" }, verseRef: "36:78" },
        { term: "قَالَ مَن يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ", meaning: { en: "He says: Who will give life to bones while they are disintegrated?", ur: "کہتا ہے: ہڈیوں کو کون زندہ کرے گا جبکہ وہ بوسیدہ ہو چکی ہیں؟" }, explanation: { en: "Skeptic's question about resurrection", ur: "قیامت کے بارے میں منکر کا سوال" }, verseRef: "36:78" }
      ]
    },

    divineResponse: {
      name: "Divine Response to Skeptics",
      nameUr: "شک کرنے والوں کو الٰہی جواب",
      nameArabic: "الرد الإلهي على المنكرين",
      color: "#F59E0B",
      icon: "MessageCircle",
      concepts: [
        { term: "قُلْ يُحْيِيهَا الَّذِي أَنشَأَهَا أَوَّلَ مَرَّةٍ", meaning: { en: "Say: He who produced them the first time will give them life", ur: "کہو: انہیں وہی زندہ کرے گا جس نے پہلی بار بنایا" }, explanation: { en: "First creation proves ability for second", ur: "پہلی تخلیق دوسری بار بنانے کی صلاحیت ثابت کرتی ہے" }, verseRef: "36:79" },
        { term: "وَهُوَ بِكُلِّ خَلْقٍ عَلِيمٌ", meaning: { en: "And He is of all creation Knowing", ur: "اور وہ ہر تخلیق کو جاننے والا ہے" }, explanation: { en: "Allah knows every creation", ur: "اللہ ہر مخلوق کو جانتا ہے" }, verseRef: "36:79" },
        { term: "الَّذِي جَعَلَ لَكُم مِّنَ الشَّجَرِ الْأَخْضَرِ نَارًا", meaning: { en: "He who made for you from the green tree fire", ur: "جس نے تمہارے لیے ہرے درخت سے آگ بنائی" }, explanation: { en: "Opposite elements from same source", ur: "ایک ہی ماخذ سے متضاد عناصر" }, verseRef: "36:80" },
        { term: "فَإِذَا أَنتُم مِّنْهُ تُوقِدُونَ", meaning: { en: "And then from it you ignite", ur: "پھر تم اس سے آگ جلاتے ہو" }, explanation: { en: "Fire from green wood - divine power", ur: "ہری لکڑی سے آگ - الٰہی قدرت" }, verseRef: "36:80" }
      ]
    },

    ultimateProof: {
      name: "Ultimate Proof of Divine Power",
      nameUr: "الٰہی قدرت کا حتمی ثبوت",
      nameArabic: "البرهان النهائي للقدرة الإلهية",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "أَوَلَيْسَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "Is not He who created the heavens and earth", ur: "کیا وہ جس نے آسمانوں اور زمین کو پیدا کیا" }, explanation: { en: "Creator of cosmos can recreate humans", ur: "کائنات کا خالق انسانوں کو دوبارہ بنا سکتا ہے" }, verseRef: "36:81" },
        { term: "بِقَادِرٍ عَلَىٰ أَن يَخْلُقَ مِثْلَهُم", meaning: { en: "Able to create the likes of them?", ur: "ان جیسے پیدا کرنے پر قادر نہیں؟" }, explanation: { en: "Rhetorical - of course He can", ur: "استفہامیہ سوال - یقیناً وہ قادر ہے" }, verseRef: "36:81" },
        { term: "بَلَىٰ", meaning: { en: "Yes indeed", ur: "کیوں نہیں" }, explanation: { en: "Emphatic affirmation", ur: "زور دار تصدیق" }, verseRef: "36:81" },
        { term: "وَهُوَ الْخَلَّاقُ الْعَلِيمُ", meaning: { en: "And He is the Knowing Creator", ur: "اور وہی بہت پیدا کرنے والا علم والا ہے" }, explanation: { en: "Perpetual Creator with complete knowledge", ur: "مکمل علم والا دائمی خالق" }, verseRef: "36:81" },
        { term: "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا", meaning: { en: "His command is only when He intends a thing", ur: "اس کا حکم جب کوئی چیز چاہے تو بس یہ ہے" }, explanation: { en: "Divine will is immediate", ur: "الٰہی ارادہ فوری ہے" }, verseRef: "36:82" },
        { term: "أَن يَقُولَ لَهُ كُن فَيَكُونُ", meaning: { en: "That He says to it 'Be' and it is", ur: "کہ اسے کہے 'ہو جا' اور وہ ہو جاتی ہے" }, explanation: { en: "Kun Fayakun - creation by command", ur: "کُن فَیَکُون - حکم سے تخلیق" }, verseRef: "36:82" },
        { term: "فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ", meaning: { en: "Exalted is He in whose hand is the realm of all things", ur: "پاک ہے وہ ذات جس کے ہاتھ میں ہر چیز کی بادشاہی ہے" }, explanation: { en: "Complete divine sovereignty", ur: "مکمل الٰہی حاکمیت" }, verseRef: "36:83" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: { en: "And to Him you will be returned", ur: "اور اسی کی طرف تم لوٹائے جاؤ گے" }, explanation: { en: "Final return to Allah - closing message", ur: "اللہ کی طرف آخری واپسی - اختتامی پیغام" }, verseRef: "36:83" }
      ]
    }
  },

  relationships: [
    // Prophethood connections
    { from: "والقرآن الحكيم", to: "إنك لمن المرسلين", type: "oath-proof", description: { en: "Quran testifies to Prophet's messengership", ur: "قرآن نبی ﷺ کی رسالت کی گواہی دیتا ہے" } },
    { from: "لتنذر قوماً", to: "فهم غافلون", type: "purpose", description: { en: "Warning to awaken the heedless", ur: "غافلوں کو جگانے کے لیے تنبیہ" } },
    { from: "من اتبع الذكر", to: "بمغفرة وأجر كريم", type: "reward", description: { en: "Following reminder leads to forgiveness", ur: "نصیحت کی پیروی مغفرت کی طرف لے جاتی ہے" } },

    // Town story connections
    { from: "أصحاب القرية", to: "ما أنتم إلا بشر", type: "pattern", description: { en: "Same rejection faced by Prophet", ur: "وہی رد جو نبی ﷺ کو سہنا پڑا" } },
    { from: "جاء من أقصى المدينة رجل", to: "ادخل الجنة", type: "martyrdom", description: { en: "Running for truth leads to Paradise", ur: "سچائی کے لیے دوڑنا جنت کی طرف لے جاتا ہے" } },
    { from: "صيحة واحدة", to: "خامدون", type: "swift-justice", description: { en: "Single blast brings swift destruction", ur: "ایک دھماکے نے تیز تباہی لائی" } },

    // Signs connections
    { from: "الأرض الميتة", to: "أحييناها", type: "proof", description: { en: "Dead earth revival proves resurrection", ur: "مُردہ زمین کا زندہ ہونا قیامت ثابت کرتا ہے" } },
    { from: "خلق الأزواج كلها", to: "سبحان", type: "glorification", description: { en: "Pairs in creation inspire glorification", ur: "تخلیق میں جوڑے تسبیح کی ترغیب دیتے ہیں" } },
    { from: "الشمس تجري", to: "القمر قدرناه منازل", type: "system", description: { en: "Celestial bodies in precise system", ur: "آسمانی اجرام درست نظام میں" } },
    { from: "الفلك المشحون", to: "إلا رحمة منا", type: "dependence", description: { en: "All safety depends on divine mercy", ur: "تمام حفاظت الٰہی رحمت پر منحصر ہے" } },

    // Resurrection connections
    { from: "نفخ في الصور", to: "من الأجداث ينسلون", type: "sequence", description: { en: "Trumpet leads to rising from graves", ur: "صور قبروں سے اٹھنے کی طرف لے جاتا ہے" } },
    { from: "أصحاب الجنة", to: "سلام قولاً", type: "reward", description: { en: "Paradise dwellers receive Allah's greeting", ur: "جنت والوں کو اللہ کا سلام ملتا ہے" } },
    { from: "لا تعبدوا الشيطان", to: "اعبدوني", type: "command", description: { en: "Reject Satan, worship Allah", ur: "شیطان کو رد کرو، اللہ کی عبادت کرو" } },

    // Final proof connections
    { from: "خلقناه من نطفة", to: "من يحيي العظام", type: "irony", description: { en: "Sperm-drop doubts resurrection", ur: "نطفے سے بنا انسان قیامت پر شک کرتا ہے" } },
    { from: "أنشأها أول مرة", to: "بقادر على أن يخلق مثلهم", type: "logic", description: { en: "First creation proves ability for recreation", ur: "پہلی تخلیق دوبارہ بنانے کی صلاحیت ثابت کرتی ہے" } },
    { from: "كن", to: "فيكون", type: "divine-power", description: { en: "Creation by single command", ur: "ایک حکم سے تخلیق" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Prophethood Affirmed", verses: "36:1-12", description: { en: "Oath by Quran, Prophet's mission, sealed hearts vs. receptive souls", ur: "قرآن کی قسم، نبی ﷺ کا مشن، مہر لگے دل بمقابلہ قبول کرنے والی روحیں" } },
      { stage: 2, theme: "Story of the Messengers", verses: "36:13-19", description: { en: "Three messengers sent to a town, people reject them", ur: "تین رسول ایک بستی میں بھیجے گئے، لوگوں نے انہیں رد کیا" } },
      { stage: 3, theme: "The Believing Man", verses: "36:20-27", description: { en: "Man from edge of town, his faith, martyrdom, and Paradise entry", ur: "شہر کے کنارے سے ایک آدمی، اس کا ایمان، شہادت، اور جنت میں داخلہ" } },
      { stage: 4, theme: "Town's Destruction", verses: "36:28-32", description: { en: "Single blast destroys town, historical pattern of rejection", ur: "ایک دھماکے نے بستی تباہ کی، انکار کا تاریخی سلسلہ" } },
      { stage: 5, theme: "Signs in Creation", verses: "36:33-44", description: { en: "Dead earth, pairs, sun/moon, ships as divine signs", ur: "مُردہ زمین، جوڑے، سورج/چاند، کشتیاں بطور الٰہی نشانیاں" } },
      { stage: 6, theme: "Warnings Rejected", verses: "36:45-50", description: { en: "Signs ignored, charity refused, resurrection mocked", ur: "نشانیاں نظر انداز، صدقہ سے انکار، قیامت کا مذاق" } },
      { stage: 7, theme: "Resurrection Scenes", verses: "36:51-58", description: { en: "Trumpet, rising from graves, Paradise delights", ur: "صور، قبروں سے اٹھنا، جنت کی نعمتیں" } },
      { stage: 8, theme: "Sinners Separated", verses: "36:59-68", description: { en: "Criminals separated, body parts testify, aging sign", ur: "مجرمین الگ کیے گئے، اعضاء گواہی دیں گے، بڑھاپے کی نشانی" } },
      { stage: 9, theme: "Quran's Nature", verses: "36:69-76", description: { en: "Not poetry, livestock blessings, false gods futile", ur: "شاعری نہیں، مویشیوں کی نعمتیں، جھوٹے معبود بے سود" } },
      { stage: 10, theme: "Ultimate Proof", verses: "36:77-83", description: { en: "Bones argument, Kun Fayakun, return to Allah", ur: "ہڈیوں کی دلیل، کُن فَیَکُون، اللہ کی طرف واپسی" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Recite for the dying", how: "Read Ya-Sin for those approaching death - eases the soul's departure", verse: "Hadith tradition" },
      { principle: "Fear Allah privately", how: "Fear Allah in the unseen - this is true faith", verse: "36:11" },
      { principle: "Stand for truth boldly", how: "Like the man from the edge of town - speak truth even alone", verse: "36:20-25" },
      { principle: "Follow sincere messengers", how: "Follow those who ask no payment and are guided", verse: "36:21" },
      { principle: "Reflect on creation", how: "See dead earth, sun, moon, ships as signs of Allah", verse: "36:33-44" },
      { principle: "Be grateful for livestock", how: "Recognize animals as divine blessing for transport, food, drink", verse: "36:71-73" },
      { principle: "Remember humble origin", how: "You came from a sperm-drop - do not argue against your Creator", verse: "36:77-78" },
      { principle: "Trust in 'Kun Fayakun'", how: "Allah says 'Be' and it is - trust His power over all things", verse: "36:82" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Heart of the Quran", ur: "قرآن کا دل" },
    titleArabic: "قلب القرآن",
    insight: { en: "The Prophet Muhammad (peace be upon him) called Surah Ya-Sin 'the heart of the Quran' (Tirmidhi). Just as the heart pumps life throughout the body, Ya-Sin pumps the central themes of the Quran - Tawheed, prophethood, and resurrection - into the believer's consciousness. The surah is recommended to be recited for the dying because it addresses the soul directly, affirming resurrection with powerful proofs: the dead earth brought to life (36:33), the story of the martyred believer immediately entering Paradise (36:26), and the ultimate truth that He who created the first time will recreate (36:79). The closing verses contain one of the Quran's most powerful declarations: 'His command when He intends a thing is only that He says to it Be! and it is' (36:82). This 'Kun Fayakun' (Be and it is) encapsulates divine omnipotence - Allah needs no process, no time, no cause; His will alone suffices. Reading Ya-Sin for the dying reminds the departing soul that the God who first created them from nothing has absolute power to resurrect them, and that Paradise awaits those who believed. The surah ends as it began - with the return to Allah, forming a complete circle of divine truth.", ur: "نبی محمد ﷺ نے سورۃ یٰس کو 'قرآن کا دل' کہا (ترمذی)۔ جیسے دل پورے جسم میں زندگی پہنچاتا ہے، یٰس قرآن کے مرکزی موضوعات - توحید، نبوت، اور قیامت - کو مومن کے شعور میں پہنچاتی ہے۔ اس سورت کو مرنے والوں کے لیے پڑھنے کی سفارش کی جاتی ہے کیونکہ یہ روح سے براہ راست مخاطب ہوتی ہے، طاقتور دلائل سے قیامت کی تصدیق کرتی ہے: مُردہ زمین کا زندہ ہونا (36:33)، شہید مومن کا فوری جنت میں داخلہ (36:26)، اور حتمی سچائی کہ جس نے پہلی بار بنایا وہی دوبارہ بنائے گا (36:79)۔ آخری آیات میں قرآن کے طاقتور ترین اعلانات میں سے ایک ہے: 'اس کا حکم جب کوئی چیز چاہے تو بس یہ ہے کہ کہے ہو جا اور وہ ہو جاتی ہے' (36:82)۔ یہ 'کُن فَیَکُون' الٰہی قدرتِ مطلقہ کا خلاصہ ہے - اللہ کو نہ عمل کی ضرورت، نہ وقت کی، نہ سبب کی؛ صرف اس کی مشیت کافی ہے۔ مرنے والے کے لیے یٰس پڑھنا رخصت ہوتی روح کو یاد دلاتا ہے کہ جس خدا نے عدم سے بنایا اس کے پاس دوبارہ زندہ کرنے کی مطلق قدرت ہے، اور ایمان لانے والوں کے لیے جنت منتظر ہے۔ سورت جیسے شروع ہوئی ویسے ہی ختم ہوتی ہے - اللہ کی طرف واپسی، الٰہی سچائی کا مکمل دائرہ بناتے ہوئے۔" }
  },

  virtueAndMerit: {
    title: { en: "Virtues of Surah Ya-Sin", ur: "سورۃ یٰس کے فضائل" },
    titleArabic: "فضائل سورة يس",
    virtues: [
      {
        virtue: "Heart of the Quran",
        hadith: "Everything has a heart, and the heart of the Quran is Ya-Sin. Whoever recites Ya-Sin, Allah records for him the recitation of the Quran ten times.",
        source: "Tirmidhi (partially weak chain)",
        benefit: "Concentrated essence of Quranic message"
      },
      {
        virtue: "Recitation for the Dying",
        hadith: "Recite Ya-Sin over your dying ones.",
        source: "Abu Dawud, Ibn Majah",
        benefit: "Eases the soul's departure, provides comfort"
      },
      {
        virtue: "Forgiveness of Sins",
        hadith: "Whoever recites Ya-Sin at night seeking Allah's pleasure, his sins will be forgiven.",
        source: "Various narrations",
        benefit: "Night recitation brings forgiveness"
      },
      {
        virtue: "Fulfillment of Needs",
        hadith: "Whoever recites Ya-Sin in the morning, his needs will be fulfilled.",
        source: "Darimi (weak chain)",
        benefit: "Morning recitation for daily needs"
      }
    ],
    note: { en: "While some hadith about Ya-Sin's virtues have weak chains, scholars agree on its immense spiritual value based on its content alone. Its themes of resurrection, divine power, and the fate of believers and disbelievers make it profoundly impactful for reflection.", ur: "اگرچہ یٰس کے فضائل کی بعض احادیث کی سندیں ضعیف ہیں، علماء صرف اس کے مضامین کی بنا پر اس کی عظیم روحانی قدر و قیمت پر متفق ہیں۔ قیامت، الٰہی قدرت، اور مومنین و کافرین کے انجام کے موضوعات اسے غور و فکر کے لیے انتہائی مؤثر بناتے ہیں۔" }
  },

  recitationForDying: {
    title: { en: "Ya-Sin and the Departing Soul", ur: "یٰس اور رخصت ہوتی روح" },
    titleArabic: "يس وروح المحتضر",
    practice: "It is a Sunnah to recite Surah Ya-Sin for those who are dying",
    wisdom: [
      "Reminds the dying of resurrection and meeting Allah (36:51-52)",
      "Describes Paradise's delights as immediate comfort (36:55-58)",
      "Contains Allah's greeting of 'Salam' to believers (36:58)",
      "Affirms that body parts will testify - encourages final repentance (36:65)",
      "The 'Kun Fayakun' assures Allah's power to resurrect (36:82)",
      "Opens with prophethood affirmation - strengthening faith at the end",
      "The believing man enters Paradise immediately - hope for the dying (36:26)"
    ],
    etiquette: [
      "Recite calmly and clearly near the dying person",
      "Can be recited completely or partially based on time",
      "Encourage the dying to say La ilaha illallah",
      "Face the dying person toward the Qiblah if possible",
      "Continue remembrance of Allah and Quran recitation"
    ]
  },

  historicalContext: {
    note: { en: "Surah Ya-Sin was revealed in Makkah during the intense persecution of early Muslims. The story of the messengers sent to the town (traditionally identified as Antioch) and the believing man who was martyred served as encouragement for the Prophet and his companions facing similar opposition. The Quraysh mocked resurrection just as the townspeople mocked the messengers, making the detailed resurrection proofs highly relevant. The surah's powerful affirmation of prophethood ('Indeed you are among the messengers' 36:3) directly countered those who denied Muhammad's mission. The closing argument from creation to recreation (36:77-82) employs the same logic later used with Ubayy ibn Khalaf, who brought decayed bones to the Prophet asking 'Who will give life to bones when they are disintegrated?' - Allah revealed the answer: 'He who produced them the first time.'", ur: "سورۃ یٰس مکہ میں ابتدائی مسلمانوں کے شدید ظلم و ستم کے دور میں نازل ہوئی۔ بستی میں بھیجے گئے رسولوں اور شہید ہونے والے مومن کی کہانی نبی ﷺ اور ان کے صحابہ کے لیے حوصلہ افزائی تھی جو اسی طرح کی مخالفت کا سامنا کر رہے تھے۔ قریش نے قیامت کا مذاق اڑایا جیسے بستی والوں نے رسولوں کا مذاق اڑایا، جس سے قیامت کے تفصیلی دلائل انتہائی مناسب تھے۔ سورت کی نبوت کی طاقتور تصدیق ('بیشک تم رسولوں میں سے ہو' 36:3) نے براہ راست ان لوگوں کا رد کیا جنہوں نے محمد ﷺ کے مشن سے انکار کیا۔ تخلیق سے دوبارہ تخلیق کی آخری دلیل (36:77-82) وہی منطق استعمال کرتی ہے جو بعد میں ابی بن خلف کے ساتھ استعمال ہوئی، جو بوسیدہ ہڈیاں لے کر نبی ﷺ کے پاس آیا اور پوچھا 'ہڈیوں کو کون زندہ کرے گا جب وہ بوسیدہ ہو جائیں؟' - اللہ نے جواب نازل کیا: 'جس نے پہلی بار بنایا وہی۔'" }
  },

  linguisticFeatures: {
    features: [
      { feature: "يس", example: { en: "Huruf Muqatta'at", ur: "حروفِ مقطعات" }, effect: { en: "Mysterious letters capturing attention - possibly meaning 'O Human'", ur: "پراسرار حروف جو توجہ حاصل کرتے ہیں - ممکنہ معنی 'اے انسان'" } },
      { feature: "مُّقْمَحُونَ", example: { en: "Heads forced upward", ur: "سر زبردستی اوپر اٹھے ہوئے" }, effect: { en: "Vivid imagery of those shackled by disbelief", ur: "کفر کی زنجیروں میں جکڑے لوگوں کی واضح تصویر" } },
      { feature: "يَسْعَىٰ", example: { en: "Running/striving", ur: "دوڑنا/کوشش کرنا" }, effect: { en: "The believing man's urgency to reach his people", ur: "مومن آدمی کی اپنی قوم تک پہنچنے کی تڑپ" } },
      { feature: "صَيْحَةً وَاحِدَةً", example: { en: "Single shout", ur: "ایک چیخ" }, effect: { en: "Emphasizes swiftness of divine punishment", ur: "الٰہی عذاب کی تیزی پر زور" } },
      { feature: "يَنسِلُونَ", example: { en: "Hasten forth", ur: "تیزی سے نکلنا" }, effect: { en: "Quick emergence from graves - like insects from the ground", ur: "قبروں سے تیز نکلنا - زمین سے کیڑوں کی طرح" } },
      { feature: "مَّرْقَدِنَا", example: { en: "Our sleeping place", ur: "ہماری آرام گاہ" }, effect: { en: "Death described as sleep - resurrection as awakening", ur: "موت کو نیند سے تشبیہ - قیامت بیداری ہے" } },
      { feature: "الْعُرْجُونِ الْقَدِيمِ", example: { en: "Old date stalk", ur: "پرانی کھجور کی شاخ" }, effect: { en: "Crescent moon curved like dried palm branch - precise imagery", ur: "ہلال خشک کھجور کی شاخ جیسا خمیدہ - درست تصویر کشی" } },
      { feature: "كُن فَيَكُونُ", example: { en: "Be and it is", ur: "ہو جا اور وہ ہو جاتی ہے" }, effect: { en: "Ultimate expression of divine power - no process needed", ur: "الٰہی قدرت کا بلند ترین اظہار - کسی عمل کی ضرورت نہیں" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "36:36", topic: "Pairs in creation", note: { en: "Everything in pairs - atoms have positive/negative charges, male/female in living things, matter/antimatter", ur: "ہر چیز جوڑوں میں - ایٹموں میں مثبت/منفی چارجز، جانداروں میں نر/مادہ، مادہ/ضد مادہ" } },
      { verse: "36:38", topic: "Sun's course", note: { en: "Sun travels through space toward a destination (Vega region) - 'mustaqarr' as destination point", ur: "سورج خلا میں ایک منزل (ویگا کا علاقہ) کی طرف سفر کرتا ہے - 'مستقر' بطور منزلِ مقصود" } },
      { verse: "36:39", topic: "Moon phases", note: { en: "28 lunar stations (manazil) - precise lunar calendar system", ur: "28 قمری منازل - درست قمری تقویم کا نظام" } },
      { verse: "36:40", topic: "Celestial orbits", note: { en: "Each celestial body in its orbit (falak) - modern orbital mechanics", ur: "ہر آسمانی جسم اپنے مدار (فلک) میں - جدید مداری میکانکس" } },
      { verse: "36:77", topic: "Human from sperm", note: { en: "Nutfah (sperm-drop) - human origin from microscopic cell", ur: "نطفہ - خوردبینی خلیے سے انسان کی ابتدا" } },
      { verse: "36:80", topic: "Fire from green tree", note: { en: "Photosynthesis stores energy in wood - released as fire; also Markh and Afar trees used by Arabs to produce fire", ur: "ضیائی تالیف لکڑی میں توانائی ذخیرہ کرتی ہے - آگ کی صورت خارج ہوتی ہے؛ مرخ اور عفار کے درخت بھی عرب آگ جلانے میں استعمال کرتے تھے" } }
    ]
  },

  connectionToDeathAndResurrection: {
    title: { en: "Why Ya-Sin for the Dying", ur: "مرنے والوں کے لیے یٰس کیوں" },
    titleArabic: "لماذا يس للمحتضر",
    connections: [
      { theme: "Soul's journey affirmed", verse: "36:12", explanation: { en: "Allah gives life and records all deeds - soul's record complete", ur: "اللہ زندگی دیتا ہے اور تمام اعمال لکھتا ہے - روح کا ریکارڈ مکمل ہے" } },
      { theme: "Immediate Paradise entry", verse: "36:26", explanation: { en: "Believer told 'Enter Paradise' - hope for immediate reward", ur: "مومن کو کہا گیا 'جنت میں داخل ہو جاؤ' - فوری اجر کی امید" } },
      { theme: "Single blast awareness", verse: "36:29, 49, 53", explanation: { en: "Death comes suddenly - be prepared", ur: "موت اچانک آتی ہے - تیار رہو" } },
      { theme: "Rising described", verse: "36:51-52", explanation: { en: "Detailed resurrection scene - knowing what comes next", ur: "قیامت کا تفصیلی منظر - یہ جاننا کہ آگے کیا ہوگا" } },
      { theme: "Allah's greeting", verse: "36:58", explanation: { en: "Believers receive 'Salam' from Allah - ultimate honor", ur: "مومنین کو اللہ کی طرف سے 'سلام' ملتا ہے - سب سے بڑا اعزاز" } },
      { theme: "Body parts witness", verse: "36:65", explanation: { en: "Encourages final repentance - hands and feet will testify", ur: "آخری توبہ کی ترغیب - ہاتھ اور پاؤں گواہی دیں گے" } },
      { theme: "Recreation assured", verse: "36:79", explanation: { en: "He who created first time will recreate - certainty of resurrection", ur: "جس نے پہلی بار بنایا وہی دوبارہ بنائے گا - قیامت کا یقین" } },
      { theme: "Kun Fayakun", verse: "36:82", explanation: { en: "Allah's power is absolute - resurrection is easy for Him", ur: "اللہ کی قدرت مطلق ہے - قیامت اس کے لیے آسان ہے" } }
    ]
  }
};

export default ONTOLOGY;
