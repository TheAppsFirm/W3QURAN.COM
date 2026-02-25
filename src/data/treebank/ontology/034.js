/**
 * Surah Saba (34) - Ontology of Quranic Concepts
 * Sheba
 *
 * Theme: The story of Sheba, Prophets Dawud and Sulayman, the flood of Arim,
 * gratitude versus ingratitude, and the consequences of denying blessings
 *
 * Revelation: Makki
 * Total Ayahs: 54
 */

export const ONTOLOGY = {
  surahId: 34,
  surahName: "Saba",
  surahNameArabic: "سبأ",
  revelationType: "Makki",
  totalAyahs: 54,

  categories: {
    openingPraise: {
      name: "Opening Praise",
      nameArabic: "الافتتاح بالحمد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "الْحَمْدُ لِلَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: { en: "All praise to Allah, to whom belongs whatever is in heavens and earth", ur: "تمام تعریفیں اللہ کے لیے ہیں جس کا ہے جو آسمانوں اور زمین میں ہے" }, explanation: { en: "Surah opens with absolute praise acknowledging Allah's ownership", ur: "سورت کا آغاز مطلق حمد سے ہے جو اللہ کی مالکیت کا اعتراف ہے" }, verseRef: "34:1" },
        { term: "وَلَهُ الْحَمْدُ فِي الْآخِرَةِ", meaning: { en: "And to Him is praise in the Hereafter", ur: "اور آخرت میں بھی اسی کے لیے حمد ہے" }, explanation: { en: "Praise belongs to Allah in both worlds", ur: "دونوں جہانوں میں حمد اللہ ہی کے لیے ہے" }, verseRef: "34:1" },
        { term: "وَهُوَ الْحَكِيمُ الْخَبِيرُ", meaning: { en: "He is the Wise, the All-Aware", ur: "اور وہ حکمت والا، باخبر ہے" }, explanation: { en: "Divine wisdom and comprehensive knowledge", ur: "الٰہی حکمت اور جامع علم" }, verseRef: "34:1" }
      ]
    },

    divineKnowledge: {
      name: "Divine Knowledge",
      nameArabic: "العلم الإلهي",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "يَعْلَمُ مَا يَلِجُ فِي الْأَرْضِ وَمَا يَخْرُجُ مِنْهَا", meaning: { en: "He knows what penetrates the earth and what emerges from it", ur: "وہ جانتا ہے جو زمین میں داخل ہوتا ہے اور جو اس سے نکلتا ہے" }, explanation: { en: "Knowledge of all that enters and exits earth", ur: "زمین میں داخل ہونے اور نکلنے والی ہر چیز کا علم" }, verseRef: "34:2" },
        { term: "وَمَا يَنزِلُ مِنَ السَّمَاءِ وَمَا يَعْرُجُ فِيهَا", meaning: { en: "And what descends from heaven and what ascends therein", ur: "اور جو آسمان سے اترتا ہے اور جو اس میں چڑھتا ہے" }, explanation: { en: "Knowledge of celestial movements", ur: "آسمانی حرکات کا علم" }, verseRef: "34:2" },
        { term: "وَهُوَ الرَّحِيمُ الْغَفُورُ", meaning: { en: "He is the Merciful, the Forgiving", ur: "وہ رحم کرنے والا، بخشنے والا ہے" }, explanation: { en: "Despite complete knowledge, He is merciful and forgiving", ur: "مکمل علم کے باوجود وہ رحم والا اور بخشنے والا ہے" }, verseRef: "34:2" },
        { term: "عَالِمِ الْغَيْبِ", meaning: { en: "Knower of the unseen", ur: "غیب کا جاننے والا" }, explanation: { en: "Allah alone knows the hidden realms", ur: "صرف اللہ ہی پوشیدہ عالموں کو جانتا ہے" }, verseRef: "34:3" },
        { term: "لَا يَعْزُبُ عَنْهُ مِثْقَالُ ذَرَّةٍ", meaning: { en: "Not absent from Him is an atom's weight", ur: "اس سے ذرہ برابر بھی چھپا نہیں" }, explanation: { en: "Nothing escapes Allah's knowledge, however small", ur: "اللہ کے علم سے کوئی چیز نہیں بچتی، خواہ کتنی ہی چھوٹی ہو" }, verseRef: "34:3" }
      ]
    },

    hourDeniers: {
      name: "Deniers of the Hour",
      nameArabic: "المكذبون بالساعة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لَا تَأْتِينَا السَّاعَةُ", meaning: { en: "Those who disbelieve say: The Hour will not come to us", ur: "کافروں نے کہا: قیامت ہم پر نہیں آئے گی" }, explanation: { en: "Disbelievers deny the Day of Judgment", ur: "کافر یومِ قیامت کا انکار کرتے ہیں" }, verseRef: "34:3" },
        { term: "قُلْ بَلَىٰ وَرَبِّي لَتَأْتِيَنَّكُمْ", meaning: { en: "Say: Yes, by my Lord, it will surely come to you", ur: "کہہ دو: ہاں، میرے رب کی قسم، یہ ضرور تم پر آئے گی" }, explanation: { en: "Prophet commanded to affirm with oath", ur: "نبی ﷺ کو قسم کے ساتھ تصدیق کا حکم دیا گیا" }, verseRef: "34:3" },
        { term: "لِيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", meaning: { en: "To reward those who believe and do righteous deeds", ur: "تاکہ ایمان لانے والوں اور نیک عمل کرنے والوں کو جزا دے" }, explanation: { en: "Hour's purpose: reward the believers", ur: "قیامت کا مقصد: مومنوں کو بدلہ دینا" }, verseRef: "34:4" },
        { term: "أُولَٰئِكَ لَهُم مَّغْفِرَةٌ وَرِزْقٌ كَرِيمٌ", meaning: { en: "Those will have forgiveness and noble provision", ur: "ان کے لیے مغفرت اور عزت والا رزق ہے" }, explanation: { en: "Believers promised forgiveness and generous reward", ur: "مومنوں سے مغفرت اور فراخ بدلے کا وعدہ" }, verseRef: "34:4" },
        { term: "وَالَّذِينَ سَعَوْا فِي آيَاتِنَا مُعَاجِزِينَ", meaning: { en: "Those who strive against Our verses to cause failure", ur: "اور جو لوگ ہماری آیات میں عاجز کرنے کی کوشش کرتے ہیں" }, explanation: { en: "Opponents try to defeat the message", ur: "مخالفین پیغام کو شکست دینے کی کوشش کرتے ہیں" }, verseRef: "34:5" },
        { term: "أُولَٰئِكَ لَهُمْ عَذَابٌ مِّن رِّجْزٍ أَلِيمٌ", meaning: { en: "Those will have a punishment of painful affliction", ur: "ان کے لیے دردناک عذاب ہے" }, explanation: { en: "Severe punishment for opponents", ur: "مخالفین کے لیے سخت سزا" }, verseRef: "34:5" }
      ]
    },

    witnessOfKnowledge: {
      name: "Witness of Those with Knowledge",
      nameArabic: "شهادة أهل العلم",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَيَرَى الَّذِينَ أُوتُوا الْعِلْمَ الَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ هُوَ الْحَقَّ", meaning: { en: "Those given knowledge see what is revealed to you is the truth", ur: "اور جن لوگوں کو علم دیا گیا وہ دیکھتے ہیں کہ جو آپ پر نازل ہوا وہ حق ہے" }, explanation: { en: "Learned people recognize Quran's truth", ur: "علم والے لوگ قرآن کی سچائی کو پہچانتے ہیں" }, verseRef: "34:6" },
        { term: "وَيَهْدِي إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ", meaning: { en: "And guides to the path of the Mighty, the Praiseworthy", ur: "اور غالب، قابلِ حمد ذات کے راستے کی طرف رہنمائی کرتا ہے" }, explanation: { en: "Quran leads to Allah's path", ur: "قرآن اللہ کے راستے کی طرف لے جاتا ہے" }, verseRef: "34:6" }
      ]
    },

    mockeryOfResurrection: {
      name: "Mockery of Resurrection",
      nameArabic: "السخرية من البعث",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا هَلْ نَدُلُّكُمْ عَلَىٰ رَجُلٍ يُنَبِّئُكُمْ", meaning: { en: "The disbelievers said: Shall we direct you to a man who informs you", ur: "کافروں نے کہا: کیا ہم تمہیں ایک ایسے آدمی کی طرف بتائیں جو تمہیں خبر دیتا ہے" }, explanation: { en: "Mockingly pointing to the Prophet", ur: "تمسخر سے نبی ﷺ کی طرف اشارہ کرنا" }, verseRef: "34:7" },
        { term: "إِذَا مُزِّقْتُمْ كُلَّ مُمَزَّقٍ إِنَّكُمْ لَفِي خَلْقٍ جَدِيدٍ", meaning: { en: "When you are torn apart completely, you will be in a new creation", ur: "جب تم بالکل ٹکڑے ٹکڑے ہو جاؤ گے تو نئی تخلیق میں ہوگے" }, explanation: { en: "Mocking the concept of resurrection after decomposition", ur: "بوسیدگی کے بعد دوبارہ اٹھائے جانے کے تصور کا مذاق اڑانا" }, verseRef: "34:7" },
        { term: "أَفْتَرَىٰ عَلَى اللَّهِ كَذِبًا أَم بِهِ جِنَّةٌ", meaning: { en: "Has he invented about Allah a lie or is there in him madness?", ur: "کیا اس نے اللہ پر جھوٹ باندھا یا اسے پاگل پن ہے؟" }, explanation: { en: "Accusing Prophet of lying or insanity", ur: "نبی ﷺ پر جھوٹ یا پاگل پن کا الزام لگانا" }, verseRef: "34:8" },
        { term: "بَلِ الَّذِينَ لَا يُؤْمِنُونَ بِالْآخِرَةِ فِي الْعَذَابِ وَالضَّلَالِ الْبَعِيدِ", meaning: { en: "Rather, those who disbelieve in the Hereafter are in punishment and extreme error", ur: "بلکہ جو لوگ آخرت پر ایمان نہیں رکھتے وہ عذاب اور دور کی گمراہی میں ہیں" }, explanation: { en: "They are actually the misguided ones", ur: "دراصل گمراہ تو یہی لوگ ہیں" }, verseRef: "34:8" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "أَفَلَمْ يَرَوْا إِلَىٰ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: { en: "Do they not see what is before them and behind them of sky and earth?", ur: "کیا وہ نہیں دیکھتے جو ان کے آگے اور پیچھے آسمان اور زمین میں ہے؟" }, explanation: { en: "Heaven and earth surround them as evidence", ur: "آسمان اور زمین ان کے گرد بطور دلیل موجود ہیں" }, verseRef: "34:9" },
        { term: "إِن نَّشَأْ نَخْسِفْ بِهِمُ الْأَرْضَ", meaning: { en: "If We willed, We could cause the earth to swallow them", ur: "اگر ہم چاہیں تو زمین کو ان کے ساتھ دھنسا دیں" }, explanation: { en: "Allah's power to punish through earth", ur: "زمین کے ذریعے عذاب دینے کی اللہ کی قدرت" }, verseRef: "34:9" },
        { term: "أَوْ نُسْقِطْ عَلَيْهِمْ كِسَفًا مِّنَ السَّمَاءِ", meaning: { en: "Or let fall upon them fragments from the sky", ur: "یا ان پر آسمان کے ٹکڑے گرا دیں" }, explanation: { en: "Allah's power to punish from above", ur: "اوپر سے عذاب دینے کی اللہ کی قدرت" }, verseRef: "34:9" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَةً لِّكُلِّ عَبْدٍ مُّنِيبٍ", meaning: { en: "Indeed in that is a sign for every servant turning back", ur: "بے شک اس میں ہر رجوع کرنے والے بندے کے لیے نشانی ہے" }, explanation: { en: "Signs benefit the repentant", ur: "نشانیاں توبہ کرنے والوں کو فائدہ دیتی ہیں" }, verseRef: "34:9" }
      ]
    },

    dawudBlessings: {
      name: "Blessings upon Dawud",
      nameArabic: "نعم داود",
      color: "#8B5CF6",
      icon: "Crown",
      concepts: [
        { term: "وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا", meaning: { en: "We certainly gave Dawud from Us bounty", ur: "اور ہم نے داؤد کو اپنی طرف سے فضل عطا کیا" }, explanation: { en: "Divine favor bestowed on Dawud", ur: "داؤد علیہ السلام پر الٰہی فضل" }, verseRef: "34:10" },
        { term: "يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ", meaning: { en: "O mountains, repeat with him [praises], and birds", ur: "اے پہاڑو، ان کے ساتھ تسبیح کرو، اور پرندو" }, explanation: { en: "Mountains and birds commanded to praise with Dawud", ur: "پہاڑوں اور پرندوں کو داؤد کے ساتھ تسبیح کا حکم" }, verseRef: "34:10" },
        { term: "وَأَلَنَّا لَهُ الْحَدِيدَ", meaning: { en: "And We made iron pliable for him", ur: "اور ہم نے ان کے لیے لوہا نرم کر دیا" }, explanation: { en: "Iron became soft for Dawud to shape", ur: "لوہا داؤد کے لیے نرم ہو گیا تاکہ وہ اسے شکل دے سکیں" }, verseRef: "34:10" },
        { term: "أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ", meaning: { en: "Make full coats of mail and calculate the links", ur: "پوری زرہیں بناؤ اور کڑیوں کو اندازے سے جوڑو" }, explanation: { en: "Command to craft armor with precise measurements", ur: "درست پیمائش کے ساتھ زرہ بنانے کا حکم" }, verseRef: "34:11" },
        { term: "وَاعْمَلُوا صَالِحًا إِنِّي بِمَا تَعْمَلُونَ بَصِيرٌ", meaning: { en: "And work righteousness. Indeed I am seeing what you do", ur: "اور نیک عمل کرو۔ بے شک میں تمہارے اعمال دیکھ رہا ہوں" }, explanation: { en: "Command paired with reminder of divine observation", ur: "حکم کے ساتھ الٰہی نگرانی کی یاد دہانی" }, verseRef: "34:11" }
      ]
    },

    sulaymanBlessings: {
      name: "Blessings upon Sulayman",
      nameArabic: "نعم سليمان",
      color: "#8B5CF6",
      icon: "Crown",
      concepts: [
        { term: "وَلِسُلَيْمَانَ الرِّيحَ غُدُوُّهَا شَهْرٌ وَرَوَاحُهَا شَهْرٌ", meaning: { en: "And to Sulayman the wind - its morning journey was a month, and its afternoon a month", ur: "اور سلیمان کے لیے ہوا - اس کی صبح کی مسافت ایک مہینے کی اور شام کی ایک مہینے کی تھی" }, explanation: { en: "Wind traveled month's distance in morning and evening", ur: "ہوا صبح اور شام میں ایک ایک مہینے کی مسافت طے کرتی تھی" }, verseRef: "34:12" },
        { term: "وَأَسَلْنَا لَهُ عَيْنَ الْقِطْرِ", meaning: { en: "And We made flow for him a spring of copper", ur: "اور ہم نے ان کے لیے تانبے کا چشمہ بہا دیا" }, explanation: { en: "Molten copper flowed like water for Sulayman", ur: "پگھلا تانبا سلیمان کے لیے پانی کی طرح بہتا تھا" }, verseRef: "34:12" },
        { term: "وَمِنَ الْجِنِّ مَن يَعْمَلُ بَيْنَ يَدَيْهِ بِإِذْنِ رَبِّهِ", meaning: { en: "And among the jinn were those who worked before him by permission of his Lord", ur: "اور جنات میں سے کچھ ان کے رب کے حکم سے ان کے سامنے کام کرتے تھے" }, explanation: { en: "Jinn served Sulayman by Allah's permission", ur: "جنات اللہ کے حکم سے سلیمان کی خدمت کرتے تھے" }, verseRef: "34:12" },
        { term: "وَمَن يَزِغْ مِنْهُمْ عَنْ أَمْرِنَا نُذِقْهُ مِنْ عَذَابِ السَّعِيرِ", meaning: { en: "Whoever deviates among them from Our command - We will make him taste the punishment of the Blaze", ur: "اور جو ان میں سے ہمارے حکم سے ہٹے اسے بھڑکتی آگ کا عذاب چکھائیں گے" }, explanation: { en: "Disobedient jinn face severe punishment", ur: "نافرمان جنات کو سخت سزا کا سامنا" }, verseRef: "34:12" }
      ]
    },

    jinnWorks: {
      name: "Works of the Jinn",
      nameArabic: "أعمال الجن",
      color: "#8B5CF6",
      icon: "Zap",
      concepts: [
        { term: "يَعْمَلُونَ لَهُ مَا يَشَاءُ مِن مَّحَارِيبَ وَتَمَاثِيلَ", meaning: { en: "They made for him what he willed of elevated chambers and statues", ur: "وہ ان کے لیے بلند محرابیں اور مجسمے بناتے تھے جو وہ چاہتے" }, explanation: { en: "Jinn constructed palaces and sculptures", ur: "جنات نے محلات اور مجسمے تعمیر کیے" }, verseRef: "34:13" },
        { term: "وَجِفَانٍ كَالْجَوَابِ", meaning: { en: "And bowls like reservoirs", ur: "اور حوضوں جیسے بڑے لگن" }, explanation: { en: "Massive basins like pools", ur: "تالابوں جیسے بڑے بڑے لگن" }, verseRef: "34:13" },
        { term: "وَقُدُورٍ رَّاسِيَاتٍ", meaning: { en: "And firmly set cooking pots", ur: "اور بھاری جمی ہوئی دیگیں" }, explanation: { en: "Huge immovable cauldrons", ur: "بہت بڑی بھاری دیگیں جو ہلائی نہیں جا سکتیں" }, verseRef: "34:13" },
        { term: "اعْمَلُوا آلَ دَاوُودَ شُكْرًا", meaning: { en: "Work, O family of Dawud, in gratitude", ur: "اے آلِ داؤد! شکر کے ساتھ عمل کرو" }, explanation: { en: "Command to work as expression of gratitude", ur: "شکرانے کے طور پر عمل کرنے کا حکم" }, verseRef: "34:13" },
        { term: "وَقَلِيلٌ مِّنْ عِبَادِيَ الشَّكُورُ", meaning: { en: "And few of My servants are grateful", ur: "اور میرے بندوں میں سے شکر گزار بہت کم ہیں" }, explanation: { en: "True gratitude is rare among servants", ur: "بندوں میں سچا شکر نایاب ہے" }, verseRef: "34:13" }
      ]
    },

    sulaymanDeath: {
      name: "Death of Sulayman",
      nameArabic: "موت سليمان",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "فَلَمَّا قَضَيْنَا عَلَيْهِ الْمَوْتَ", meaning: { en: "When We decreed for him death", ur: "پھر جب ہم نے ان پر موت کا فیصلہ کر دیا" }, explanation: { en: "Allah decreed Sulayman's death", ur: "اللہ نے سلیمان کی موت کا فیصلہ فرمایا" }, verseRef: "34:14" },
        { term: "مَا دَلَّهُمْ عَلَىٰ مَوْتِهِ إِلَّا دَابَّةُ الْأَرْضِ تَأْكُلُ مِنسَأَتَهُ", meaning: { en: "Nothing indicated his death except a creature of earth eating his staff", ur: "ان کی موت کی خبر صرف زمین کے کیڑے نے دی جو ان کی لاٹھی کھا رہا تھا" }, explanation: { en: "Only the termite eating his staff revealed his death", ur: "صرف دیمک کا ان کی لاٹھی کھانا ان کی موت ظاہر کر سکا" }, verseRef: "34:14" },
        { term: "فَلَمَّا خَرَّ تَبَيَّنَتِ الْجِنُّ", meaning: { en: "When he fell, the jinn clearly realized", ur: "جب وہ گرے تو جنات کو واضح ہو گیا" }, explanation: { en: "His falling revealed the truth to jinn", ur: "ان کے گرنے سے جنات پر حقیقت واضح ہوئی" }, verseRef: "34:14" },
        { term: "أَن لَّوْ كَانُوا يَعْلَمُونَ الْغَيْبَ مَا لَبِثُوا فِي الْعَذَابِ الْمُهِينِ", meaning: { en: "That if they had known the unseen, they would not have remained in humiliating punishment", ur: "کہ اگر وہ غیب جانتے تو ذلت کے عذاب میں نہ رہتے" }, explanation: { en: "Jinn proved ignorant of unseen - they don't know the ghayb", ur: "جنات غیب سے ناواقف ثابت ہوئے - وہ غیب نہیں جانتے" }, verseRef: "34:14" }
      ]
    },

    shebaBlessing: {
      name: "Blessing of Sheba",
      nameArabic: "نعمة سبأ",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "لَقَدْ كَانَ لِسَبَإٍ فِي مَسْكَنِهِمْ آيَةٌ", meaning: { en: "There was for Sheba in their dwelling place a sign", ur: "سبا کے لیے ان کے رہنے کی جگہ میں ایک نشانی تھی" }, explanation: { en: "Saba (Sheba) had clear signs in their land", ur: "سبا کی سرزمین میں واضح نشانیاں تھیں" }, verseRef: "34:15" },
        { term: "جَنَّتَانِ عَن يَمِينٍ وَشِمَالٍ", meaning: { en: "Two gardens on the right and left", ur: "دائیں اور بائیں دو باغ" }, explanation: { en: "Gardens flanking their valley", ur: "ان کی وادی کے دونوں طرف باغات" }, verseRef: "34:15" },
        { term: "كُلُوا مِن رِّزْقِ رَبِّكُمْ وَاشْكُرُوا لَهُ", meaning: { en: "Eat from the provision of your Lord and be grateful to Him", ur: "اپنے رب کے رزق سے کھاؤ اور اس کا شکر ادا کرو" }, explanation: { en: "Command to enjoy blessings with gratitude", ur: "شکر کے ساتھ نعمتوں سے فائدہ اٹھانے کا حکم" }, verseRef: "34:15" },
        { term: "بَلْدَةٌ طَيِّبَةٌ وَرَبٌّ غَفُورٌ", meaning: { en: "A good land and a forgiving Lord", ur: "پاکیزہ شہر اور بخشنے والا رب" }, explanation: { en: "Two blessings: good land and forgiving Lord", ur: "دو نعمتیں: اچھی سرزمین اور مغفرت والا رب" }, verseRef: "34:15" }
      ]
    },

    shebaIngratitude: {
      name: "Ingratitude of Sheba",
      nameArabic: "كفران سبأ",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَأَعْرَضُوا", meaning: { en: "But they turned away", ur: "لیکن انہوں نے منہ موڑ لیا" }, explanation: { en: "Saba rejected the blessings", ur: "سبا نے نعمتوں کو ٹھکرا دیا" }, verseRef: "34:16" },
        { term: "فَأَرْسَلْنَا عَلَيْهِمْ سَيْلَ الْعَرِمِ", meaning: { en: "So We sent upon them the flood of the dam", ur: "تو ہم نے ان پر بند کا سیلاب بھیج دیا" }, explanation: { en: "Dam burst - sayl al-arim as punishment", ur: "بند ٹوٹ گیا - سیلِ عرم بطور سزا" }, verseRef: "34:16" },
        { term: "وَبَدَّلْنَاهُم بِجَنَّتَيْهِمْ جَنَّتَيْنِ ذَوَاتَيْ أُكُلٍ خَمْطٍ", meaning: { en: "We replaced their two gardens with gardens of bitter fruit", ur: "اور ہم نے ان کے دو باغوں کو کڑوے پھلوں والے باغوں سے بدل دیا" }, explanation: { en: "Lush gardens replaced with bitter produce", ur: "سرسبز باغات کی جگہ کڑوی پیداوار" }, verseRef: "34:16" },
        { term: "وَأَثْلٍ وَشَيْءٍ مِّن سِدْرٍ قَلِيلٍ", meaning: { en: "And tamarisks and a few lote trees", ur: "اور جھاؤ اور تھوڑے سے بیری کے درخت" }, explanation: { en: "Gardens reduced to thorny shrubs", ur: "باغات کانٹے دار جھاڑیوں میں بدل گئے" }, verseRef: "34:16" },
        { term: "ذَٰلِكَ جَزَيْنَاهُم بِمَا كَفَرُوا", meaning: { en: "That We repaid them because they disbelieved", ur: "یہ ہم نے انہیں ان کی ناشکری کا بدلہ دیا" }, explanation: { en: "Punishment matched their ingratitude", ur: "سزا ان کی ناشکری کے مطابق تھی" }, verseRef: "34:17" },
        { term: "وَهَلْ نُجَازِي إِلَّا الْكَفُورَ", meaning: { en: "And do We punish except the ungrateful?", ur: "اور کیا ہم ناشکروں کے سوا کسی کو سزا دیتے ہیں؟" }, explanation: { en: "Such punishment reserved for the ungrateful", ur: "ایسی سزا صرف ناشکروں کے لیے مخصوص ہے" }, verseRef: "34:17" }
      ]
    },

    blessedJourney: {
      name: "Blessed Journey",
      nameArabic: "الرحلة المباركة",
      color: "#10B981",
      icon: "Compass",
      concepts: [
        { term: "وَجَعَلْنَا بَيْنَهُمْ وَبَيْنَ الْقُرَى الَّتِي بَارَكْنَا فِيهَا قُرًى ظَاهِرَةً", meaning: { en: "We placed between them and the cities We blessed visible cities", ur: "اور ہم نے ان کے اور ان بستیوں کے درمیان جن میں ہم نے برکت رکھی نظر آنے والی بستیاں بنائیں" }, explanation: { en: "Towns linked for safe travel", ur: "محفوظ سفر کے لیے بستیاں آپس میں جڑی ہوئی تھیں" }, verseRef: "34:18" },
        { term: "وَقَدَّرْنَا فِيهَا السَّيْرَ", meaning: { en: "And We determined therein the journey", ur: "اور ہم نے ان میں سفر کی مسافت مقرر کی" }, explanation: { en: "Travel distances were measured", ur: "سفر کے فاصلے ناپے ہوئے تھے" }, verseRef: "34:18" },
        { term: "سِيرُوا فِيهَا لَيَالِيَ وَأَيَّامًا آمِنِينَ", meaning: { en: "Travel through them by night or day in safety", ur: "ان میں رات اور دن امن سے سفر کرو" }, explanation: { en: "Guaranteed safe travel day and night", ur: "دن رات محفوظ سفر کی ضمانت" }, verseRef: "34:18" }
      ]
    },

    desireForHardship: {
      name: "Desire for Hardship",
      nameArabic: "طلب المشقة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَقَالُوا رَبَّنَا بَاعِدْ بَيْنَ أَسْفَارِنَا", meaning: { en: "They said: Our Lord, lengthen the distance between our journeys", ur: "انہوں نے کہا: اے ہمارے رب، ہمارے سفروں کے درمیان فاصلے بڑھا دے" }, explanation: { en: "Ungratefully asked for harder travel", ur: "ناشکری سے مشکل سفر کی درخواست کی" }, verseRef: "34:19" },
        { term: "وَظَلَمُوا أَنفُسَهُمْ", meaning: { en: "And they wronged themselves", ur: "اور انہوں نے اپنے آپ پر ظلم کیا" }, explanation: { en: "Self-harm through ingratitude", ur: "ناشکری کے ذریعے خود کو نقصان پہنچایا" }, verseRef: "34:19" },
        { term: "فَجَعَلْنَاهُمْ أَحَادِيثَ", meaning: { en: "So We made them tales", ur: "تو ہم نے انہیں کہانیاں بنا دیا" }, explanation: { en: "Became mere stories for others", ur: "دوسروں کے لیے محض کہانیاں بن کر رہ گئے" }, verseRef: "34:19" },
        { term: "وَمَزَّقْنَاهُمْ كُلَّ مُمَزَّقٍ", meaning: { en: "And We dispersed them in complete dispersion", ur: "اور ہم نے انہیں بالکل تتر بتر کر دیا" }, explanation: { en: "Totally scattered as a people", ur: "بطور قوم مکمل طور پر منتشر ہو گئے" }, verseRef: "34:19" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ", meaning: { en: "Indeed in that are signs for every patient, grateful person", ur: "بے شک اس میں ہر صبر کرنے والے شکر گزار کے لیے نشانیاں ہیں" }, explanation: { en: "Lesson for those with patience and gratitude", ur: "صبر اور شکر والوں کے لیے سبق" }, verseRef: "34:19" }
      ]
    },

    iblisInfluence: {
      name: "Influence of Iblis",
      nameArabic: "تأثير إبليس",
      color: "#EF4444",
      icon: "Zap",
      concepts: [
        { term: "وَلَقَدْ صَدَّقَ عَلَيْهِمْ إِبْلِيسُ ظَنَّهُ", meaning: { en: "And Iblis confirmed his assumption about them", ur: "اور ابلیس نے ان کے بارے میں اپنا گمان سچ کر دکھایا" }, explanation: { en: "Iblis's suspicion about humans proved correct", ur: "ابلیس کا انسانوں کے بارے میں گمان درست ثابت ہوا" }, verseRef: "34:20" },
        { term: "فَاتَّبَعُوهُ إِلَّا فَرِيقًا مِّنَ الْمُؤْمِنِينَ", meaning: { en: "So they followed him except a party of believers", ur: "تو انہوں نے اس کی پیروی کی سوائے مومنوں کی ایک جماعت کے" }, explanation: { en: "Most followed Satan, few resisted", ur: "اکثر نے شیطان کی پیروی کی، چند نے مزاحمت کی" }, verseRef: "34:20" },
        { term: "وَمَا كَانَ لَهُ عَلَيْهِم مِّن سُلْطَانٍ", meaning: { en: "He had over them no authority", ur: "اس کا ان پر کوئی زور نہیں تھا" }, explanation: { en: "Satan has no power to force obedience", ur: "شیطان کے پاس اطاعت پر مجبور کرنے کی طاقت نہیں" }, verseRef: "34:21" },
        { term: "إِلَّا لِنَعْلَمَ مَن يُؤْمِنُ بِالْآخِرَةِ مِمَّنْ هُوَ مِنْهَا فِي شَكٍّ", meaning: { en: "Except to distinguish who believes in Hereafter from who is in doubt", ur: "مگر اس لیے کہ ہم جان لیں کون آخرت پر ایمان رکھتا ہے اور کون شک میں ہے" }, explanation: { en: "Test to reveal true believers", ur: "سچے مومنوں کو ظاہر کرنے کا امتحان" }, verseRef: "34:21" },
        { term: "وَرَبُّكَ عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ", meaning: { en: "And your Lord is Guardian over all things", ur: "اور تیرا رب ہر چیز کا نگہبان ہے" }, explanation: { en: "Allah preserves and records everything", ur: "اللہ ہر چیز کی حفاظت اور ریکارڈ رکھتا ہے" }, verseRef: "34:21" }
      ]
    },

    falseIntercessors: {
      name: "False Intercessors",
      nameArabic: "الشفعاء الباطلون",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "قُلِ ادْعُوا الَّذِينَ زَعَمْتُم مِّن دُونِ اللَّهِ", meaning: { en: "Say: Invoke those you claim besides Allah", ur: "کہو: اللہ کے سوا جنہیں تم معبود سمجھتے ہو انہیں پکارو" }, explanation: { en: "Challenge to call upon false gods", ur: "جھوٹے معبودوں کو پکارنے کا چیلنج" }, verseRef: "34:22" },
        { term: "لَا يَمْلِكُونَ مِثْقَالَ ذَرَّةٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ", meaning: { en: "They do not possess an atom's weight in heavens or earth", ur: "وہ آسمانوں اور زمین میں ذرہ برابر بھی مالک نہیں" }, explanation: { en: "False gods own nothing", ur: "جھوٹے معبود کسی چیز کے مالک نہیں" }, verseRef: "34:22" },
        { term: "وَمَا لَهُمْ فِيهِمَا مِن شِرْكٍ وَمَا لَهُ مِنْهُم مِّن ظَهِيرٍ", meaning: { en: "They have no share in them, nor has He from them any helper", ur: "نہ ان کا ان میں کوئی حصہ ہے اور نہ اللہ کا ان میں سے کوئی مددگار" }, explanation: { en: "No partnership, no assistance from them", ur: "نہ کوئی شراکت ہے، نہ ان سے کوئی مدد" }, verseRef: "34:22" },
        { term: "وَلَا تَنفَعُ الشَّفَاعَةُ عِندَهُ إِلَّا لِمَنْ أَذِنَ لَهُ", meaning: { en: "Intercession does not benefit with Him except for whom He permits", ur: "اس کے ہاں سفارش فائدہ نہیں دیتی مگر جس کے لیے وہ اجازت دے" }, explanation: { en: "Intercession only by Allah's permission", ur: "سفارش صرف اللہ کی اجازت سے" }, verseRef: "34:23" }
      ]
    },

    providerQuestion: {
      name: "Who is the Provider?",
      nameArabic: "من الرزاق؟",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "قُلْ مَن يَرْزُقُكُم مِّنَ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Say: Who provides for you from heavens and earth?", ur: "کہو: آسمانوں اور زمین سے تمہیں کون رزق دیتا ہے؟" }, explanation: { en: "Question about the true Provider", ur: "اصل رزق دینے والے کے بارے میں سوال" }, verseRef: "34:24" },
        { term: "قُلِ اللَّهُ", meaning: { en: "Say: Allah", ur: "کہو: اللہ" }, explanation: { en: "Clear answer - Allah alone provides", ur: "واضح جواب - صرف اللہ ہی رزق دیتا ہے" }, verseRef: "34:24" },
        { term: "وَإِنَّا أَوْ إِيَّاكُمْ لَعَلَىٰ هُدًى أَوْ فِي ضَلَالٍ مُّبِينٍ", meaning: { en: "Indeed, we or you are either upon guidance or in clear error", ur: "بے شک ہم یا تم ہدایت پر ہیں یا کھلی گمراہی میں" }, explanation: { en: "One group is right, one is wrong", ur: "ایک گروہ حق پر ہے، دوسرا غلط پر" }, verseRef: "34:24" },
        { term: "قُل لَّا تُسْأَلُونَ عَمَّا أَجْرَمْنَا وَلَا نُسْأَلُ عَمَّا تَعْمَلُونَ", meaning: { en: "Say: You will not be asked about our sins, nor will we be asked about what you do", ur: "کہو: تم سے ہمارے گناہوں کی پوچھ نہیں ہوگی اور نہ ہم سے تمہارے اعمال کی" }, explanation: { en: "Each is responsible for own deeds", ur: "ہر شخص اپنے اعمال کا خود ذمہ دار ہے" }, verseRef: "34:25" }
      ]
    },

    dayOfGathering: {
      name: "Day of Gathering",
      nameArabic: "يوم الجمع",
      color: "#F59E0B",
      icon: "Sun",
      concepts: [
        { term: "قُلْ يَجْمَعُ بَيْنَنَا رَبُّنَا", meaning: { en: "Say: Our Lord will bring us together", ur: "کہو: ہمارا رب ہم سب کو جمع کرے گا" }, explanation: { en: "Allah will gather all for judgment", ur: "اللہ سب کو فیصلے کے لیے جمع کرے گا" }, verseRef: "34:26" },
        { term: "ثُمَّ يَفْتَحُ بَيْنَنَا بِالْحَقِّ", meaning: { en: "Then He will judge between us in truth", ur: "پھر ہمارے درمیان حق کے ساتھ فیصلہ کرے گا" }, explanation: { en: "Final judgment will be just", ur: "آخری فیصلہ عدل پر مبنی ہوگا" }, verseRef: "34:26" },
        { term: "وَهُوَ الْفَتَّاحُ الْعَلِيمُ", meaning: { en: "He is the Judge, the All-Knowing", ur: "وہ سب سے بڑا فیصلہ کرنے والا، سب کچھ جاننے والا ہے" }, explanation: { en: "Allah opens judgment with complete knowledge", ur: "اللہ مکمل علم کے ساتھ فیصلہ کرتا ہے" }, verseRef: "34:26" }
      ]
    },

    partnerChallenge: {
      name: "Challenge About Partners",
      nameArabic: "تحدي الشركاء",
      color: "#3B82F6",
      icon: "Shield",
      concepts: [
        { term: "قُلْ أَرُونِيَ الَّذِينَ أَلْحَقْتُم بِهِ شُرَكَاءَ", meaning: { en: "Say: Show me those you have attached to Him as partners", ur: "کہو: مجھے دکھاؤ جنہیں تم نے اس کا شریک بنایا ہے" }, explanation: { en: "Demand to produce the supposed partners", ur: "مبینہ شریکوں کو پیش کرنے کا مطالبہ" }, verseRef: "34:27" },
        { term: "كَلَّا بَلْ هُوَ اللَّهُ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "No! But He is Allah, the Mighty, the Wise", ur: "ہرگز نہیں! بلکہ وہ اللہ ہے، غالب، حکمت والا" }, explanation: { en: "Rejection - Allah alone is worthy", ur: "رد - صرف اللہ ہی لائقِ عبادت ہے" }, verseRef: "34:27" }
      ]
    },

    prophetUniversalMission: {
      name: "Prophet's Universal Mission",
      nameArabic: "رسالة النبي العالمية",
      color: "#F59E0B",
      icon: "Globe",
      concepts: [
        { term: "وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِّلنَّاسِ", meaning: { en: "We have not sent you except comprehensively to all mankind", ur: "اور ہم نے آپ کو تمام انسانوں کے لیے بھیجا ہے" }, explanation: { en: "Prophet's mission is universal", ur: "نبی ﷺ کی رسالت عالمگیر ہے" }, verseRef: "34:28" },
        { term: "بَشِيرًا وَنَذِيرًا", meaning: { en: "As a bringer of good tidings and a warner", ur: "خوشخبری دینے والا اور ڈرانے والا بنا کر" }, explanation: { en: "Dual role: good news and warning", ur: "دوہرا کردار: بشارت اور تنبیہ" }, verseRef: "34:28" },
        { term: "وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", meaning: { en: "But most of the people do not know", ur: "لیکن اکثر لوگ نہیں جانتے" }, explanation: { en: "Majority remain ignorant", ur: "اکثریت جاہل رہتی ہے" }, verseRef: "34:28" }
      ]
    },

    promiseImpatience: {
      name: "Impatience for Promise",
      nameArabic: "الاستعجال بالوعد",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ", meaning: { en: "They say: When is this promise, if you are truthful?", ur: "وہ کہتے ہیں: یہ وعدہ کب پورا ہوگا اگر تم سچے ہو؟" }, explanation: { en: "Mockers demand to know the date", ur: "تمسخر کرنے والے تاریخ جاننے کا مطالبہ کرتے ہیں" }, verseRef: "34:29" },
        { term: "قُل لَّكُم مِّيعَادُ يَوْمٍ لَّا تَسْتَأْخِرُونَ عَنْهُ سَاعَةً وَلَا تَسْتَقْدِمُونَ", meaning: { en: "Say: For you is an appointment of a Day you cannot delay by an hour nor advance", ur: "کہو: تمہارے لیے ایک دن کا وعدہ ہے جس سے نہ ایک گھڑی پیچھے ہو سکتے ہو نہ آگے" }, explanation: { en: "Fixed time - cannot be changed", ur: "مقررہ وقت ہے - بدلا نہیں جا سکتا" }, verseRef: "34:30" }
      ]
    },

    quranRejection: {
      name: "Rejection of Quran",
      nameArabic: "رفض القرآن",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لَن نُّؤْمِنَ بِهَٰذَا الْقُرْآنِ وَلَا بِالَّذِي بَيْنَ يَدَيْهِ", meaning: { en: "Those who disbelieve say: We will never believe in this Quran or what was before it", ur: "کافروں نے کہا: ہم نہ اس قرآن پر ایمان لائیں گے نہ اس سے پہلے کی کتابوں پر" }, explanation: { en: "Complete rejection of all revelation", ur: "تمام وحی کا مکمل انکار" }, verseRef: "34:31" },
        { term: "وَلَوْ تَرَىٰ إِذِ الظَّالِمُونَ مَوْقُوفُونَ عِندَ رَبِّهِمْ", meaning: { en: "If you could see when the wrongdoers are made to stand before their Lord", ur: "اور کاش تم دیکھو جب ظالم اپنے رب کے سامنے کھڑے کیے جائیں گے" }, explanation: { en: "Scene of Day of Judgment", ur: "یومِ قیامت کا منظر" }, verseRef: "34:31" },
        { term: "يَرْجِعُ بَعْضُهُمْ إِلَىٰ بَعْضٍ الْقَوْلَ", meaning: { en: "Returning word to one another", ur: "ایک دوسرے پر الزامات لگائیں گے" }, explanation: { en: "Mutual accusations among disbelievers", ur: "کافروں میں باہمی الزام تراشی" }, verseRef: "34:31" }
      ]
    },

    mutualBlame: {
      name: "Mutual Blame",
      nameArabic: "التلاوم",
      color: "#EF4444",
      icon: "Users",
      concepts: [
        { term: "يَقُولُ الَّذِينَ اسْتُضْعِفُوا لِلَّذِينَ اسْتَكْبَرُوا لَوْلَا أَنتُمْ لَكُنَّا مُؤْمِنِينَ", meaning: { en: "Those oppressed will say to the arrogant: If not for you, we would have been believers", ur: "کمزور لوگ مغرور لوگوں سے کہیں گے: اگر تم نہ ہوتے تو ہم مومن ہوتے" }, explanation: { en: "Followers blame leaders", ur: "پیروکار رہنماؤں کو الزام دیتے ہیں" }, verseRef: "34:31" },
        { term: "قَالَ الَّذِينَ اسْتَكْبَرُوا لِلَّذِينَ اسْتُضْعِفُوا أَنَحْنُ صَدَدْنَاكُمْ عَنِ الْهُدَىٰ", meaning: { en: "The arrogant say to the oppressed: Did we avert you from guidance?", ur: "مغرور لوگ کمزوروں سے کہیں گے: کیا ہم نے تمہیں ہدایت سے روکا تھا؟" }, explanation: { en: "Leaders deflect blame", ur: "رہنما الزام ٹالتے ہیں" }, verseRef: "34:32" },
        { term: "بَعْدَ إِذْ جَاءَكُم بَلْ كُنتُم مُّجْرِمِينَ", meaning: { en: "After it had come to you? Rather, you were criminals", ur: "جبکہ وہ تمہارے پاس آ چکی تھی؟ بلکہ تم خود مجرم تھے" }, explanation: { en: "Each chose their own crime", ur: "ہر ایک نے خود اپنا جرم چنا" }, verseRef: "34:32" },
        { term: "وَقَالَ الَّذِينَ اسْتُضْعِفُوا لِلَّذِينَ اسْتَكْبَرُوا بَلْ مَكْرُ اللَّيْلِ وَالنَّهَارِ", meaning: { en: "The oppressed say to the arrogant: Rather, your conspiracy by night and day", ur: "کمزوروں نے مغروروں سے کہا: بلکہ تمہاری رات دن کی سازش" }, explanation: { en: "Followers accuse leaders of constant plotting", ur: "پیروکار رہنماؤں پر مسلسل سازش کا الزام لگاتے ہیں" }, verseRef: "34:33" },
        { term: "إِذْ تَأْمُرُونَنَا أَن نَّكْفُرَ بِاللَّهِ وَنَجْعَلَ لَهُ أَندَادًا", meaning: { en: "When you commanded us to disbelieve in Allah and set up equals to Him", ur: "جب تم ہمیں حکم دیتے تھے کہ اللہ کا انکار کریں اور اس کے شریک بنائیں" }, explanation: { en: "Leaders ordered polytheism", ur: "رہنماؤں نے شرک کا حکم دیا" }, verseRef: "34:33" },
        { term: "وَأَسَرُّوا النَّدَامَةَ لَمَّا رَأَوُا الْعَذَابَ", meaning: { en: "They will conceal regret when they see the punishment", ur: "اور عذاب دیکھ کر وہ پچھتاوا چھپائیں گے" }, explanation: { en: "Hidden regret upon seeing doom", ur: "عذاب دیکھ کر پوشیدہ ندامت" }, verseRef: "34:33" },
        { term: "وَجَعَلْنَا الْأَغْلَالَ فِي أَعْنَاقِ الَّذِينَ كَفَرُوا", meaning: { en: "We will put shackles on the necks of those who disbelieved", ur: "اور ہم کافروں کی گردنوں میں طوق ڈال دیں گے" }, explanation: { en: "Punishment includes chains", ur: "سزا میں زنجیریں شامل ہیں" }, verseRef: "34:33" }
      ]
    },

    affluenceAndArrogance: {
      name: "Affluence and Arrogance",
      color: "#EF4444",
      icon: "Crown",
      nameArabic: "الثراء والكبر",
      concepts: [
        { term: "وَمَا أَرْسَلْنَا فِي قَرْيَةٍ مِّن نَّذِيرٍ إِلَّا قَالَ مُتْرَفُوهَا إِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ", meaning: { en: "We did not send to a city any warner except its affluent said: We disbelieve in what you were sent with", ur: "We did not send to a city any warner except its affluent said: We disbelieve in what you were sent with" }, explanation: { en: "Wealthy always first to reject", ur: "Wealthy always first to reject" }, verseRef: "34:34" },
        { term: "وَقَالُوا نَحْنُ أَكْثَرُ أَمْوَالًا وَأَوْلَادًا وَمَا نَحْنُ بِمُعَذَّبِينَ", meaning: { en: "They said: We have more wealth and children, and we will not be punished", ur: "They said: We have more wealth and children, and we will not be punished" }, explanation: { en: "Wealth mistaken for divine favor", ur: "Wealth mistaken for divine favor" }, verseRef: "34:35" }
      ]
    },

    provisionAndConstriction: {
      name: "Provision and Constriction",
      nameArabic: "الرزق والتقتير",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "قُلْ إِنَّ رَبِّي يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ", meaning: { en: "Say: Indeed, my Lord extends provision for whom He wills and restricts", ur: "Say: Indeed, my Lord extends provision for whom He wills and restricts" }, explanation: { en: "Allah controls provision freely", ur: "Allah controls provision freely" }, verseRef: "34:36" },
        { term: "وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", meaning: { en: "But most people do not know", ur: "But most people do not know" }, explanation: { en: "People misunderstand wealth as blessing", ur: "People misunderstand wealth as blessing" }, verseRef: "34:36" },
        { term: "وَمَا أَمْوَالُكُمْ وَلَا أَوْلَادُكُم بِالَّتِي تُقَرِّبُكُمْ عِندَنَا زُلْفَىٰ", meaning: { en: "It is not your wealth or children that bring you near to Us", ur: "It is not your wealth or children that bring you near to Us" }, explanation: { en: "Wealth and children don't guarantee closeness to Allah", ur: "Wealth and children don't guarantee closeness to Allah" }, verseRef: "34:37" },
        { term: "إِلَّا مَنْ آمَنَ وَعَمِلَ صَالِحًا", meaning: { en: "Except one who believes and does righteousness", ur: "Except one who believes and does righteousness" }, explanation: { en: "Faith and deeds bring closeness", ur: "Faith and deeds bring closeness" }, verseRef: "34:37" },
        { term: "فَأُولَٰئِكَ لَهُمْ جَزَاءُ الضِّعْفِ بِمَا عَمِلُوا", meaning: { en: "Those will have the double reward for what they did", ur: "Those will have the double reward for what they did" }, explanation: { en: "Righteous receive multiplied reward", ur: "Righteous receive multiplied reward" }, verseRef: "34:37" },
        { term: "وَهُمْ فِي الْغُرُفَاتِ آمِنُونَ", meaning: { en: "And they will be safe in lofty chambers", ur: "And they will be safe in lofty chambers" }, explanation: { en: "Security in elevated Paradise chambers", ur: "Security in elevated Paradise chambers" }, verseRef: "34:37" }
      ]
    },

    striversAgainstSigns: {
      name: "Strivers Against Signs",
      nameArabic: "الساعون في الآيات",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ يَسْعَوْنَ فِي آيَاتِنَا مُعَاجِزِينَ", meaning: { en: "Those who strive against Our verses to cause failure", ur: "Those who strive against Our verses to cause failure" }, explanation: { en: "Active opposition to divine signs", ur: "Active opposition to divine signs" }, verseRef: "34:38" },
        { term: "أُولَٰئِكَ فِي الْعَذَابِ مُحْضَرُونَ", meaning: { en: "Those will be brought into the punishment", ur: "Those will be brought into the punishment" }, explanation: { en: "Guaranteed presence in punishment", ur: "Guaranteed presence in punishment" }, verseRef: "34:38" }
      ]
    },

    spendingAndReplacement: {
      name: "Spending and Replacement",
      nameArabic: "الإنفاق والخلف",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "قُلْ إِنَّ رَبِّي يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ مِنْ عِبَادِهِ وَيَقْدِرُ لَهُ", meaning: { en: "Say: My Lord extends provision for whom He wills of His servants and restricts for him", ur: "Say: My Lord extends provision for whom He wills of His servants and restricts for him" }, explanation: { en: "Provision varies by divine will", ur: "Provision varies by divine will" }, verseRef: "34:39" },
        { term: "وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ", meaning: { en: "Whatever you spend, He will replace it", ur: "Whatever you spend, He will replace it" }, explanation: { en: "Allah replaces what is spent", ur: "Allah replaces what is spent" }, verseRef: "34:39" },
        { term: "وَهُوَ خَيْرُ الرَّازِقِينَ", meaning: { en: "And He is the best of providers", ur: "And He is the best of providers" }, explanation: { en: "Allah is the supreme Provider", ur: "Allah is the supreme Provider" }, verseRef: "34:39" }
      ]
    },

    angelsDisowning: {
      name: "Angels Disowning",
      nameArabic: "تبرؤ الملائكة",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "وَيَوْمَ يَحْشُرُهُمْ جَمِيعًا ثُمَّ يَقُولُ لِلْمَلَائِكَةِ أَهَٰؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ", meaning: { en: "On the Day He gathers them all, He will say to angels: Did these worship you?", ur: "On the Day He gathers them all, He will say to angels: Did these worship you?" }, explanation: { en: "Allah questions angels about worship", ur: "Allah questions angels about worship" }, verseRef: "34:40" },
        { term: "قَالُوا سُبْحَانَكَ أَنتَ وَلِيُّنَا مِن دُونِهِم", meaning: { en: "They will say: Exalted are You! You are our Protector, not them", ur: "They will say: Exalted are You! You are our Protector, not them" }, explanation: { en: "Angels declare loyalty only to Allah", ur: "Angels declare loyalty only to Allah" }, verseRef: "34:41" },
        { term: "بَلْ كَانُوا يَعْبُدُونَ الْجِنَّ", meaning: { en: "Rather, they used to worship the jinn", ur: "Rather, they used to worship the jinn" }, explanation: { en: "True object of worship was jinn", ur: "True object of worship was jinn" }, verseRef: "34:41" },
        { term: "أَكْثَرُهُم بِهِم مُّؤْمِنُونَ", meaning: { en: "Most of them were believers in them", ur: "Most of them were believers in them" }, explanation: { en: "Most followed jinn, not angels", ur: "Most followed jinn, not angels" }, verseRef: "34:41" }
      ]
    },

    noPowerExceptAllah: {
      name: "No Power Except Allah",
      nameArabic: "لا قوة إلا بالله",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "فَالْيَوْمَ لَا يَمْلِكُ بَعْضُكُمْ لِبَعْضٍ نَّفْعًا وَلَا ضَرًّا", meaning: { en: "Today none of you holds benefit or harm for another", ur: "Today none of you holds benefit or harm for another" }, explanation: { en: "No mutual help on Judgment Day", ur: "No mutual help on Judgment Day" }, verseRef: "34:42" },
        { term: "وَنَقُولُ لِلَّذِينَ ظَلَمُوا ذُوقُوا عَذَابَ النَّارِ الَّتِي كُنتُم بِهَا تُكَذِّبُونَ", meaning: { en: "We will say to those who wronged: Taste the punishment of Fire you used to deny", ur: "We will say to those who wronged: Taste the punishment of Fire you used to deny" }, explanation: { en: "Commanded to taste denied punishment", ur: "Commanded to taste denied punishment" }, verseRef: "34:42" }
      ]
    },

    clearSignsRejected: {
      name: "Clear Signs Rejected",
      nameArabic: "رفض الآيات البينات",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا بَيِّنَاتٍ قَالُوا مَا هَٰذَا إِلَّا رَجُلٌ يُرِيدُ أَن يَصُدَّكُمْ عَمَّا كَانَ يَعْبُدُ آبَاؤُكُمْ", meaning: { en: "When Our clear verses are recited to them, they say: This is only a man who wants to avert you from what your fathers worshipped", ur: "When Our clear verses are recited to them, they say: This is only a man who wants to avert you from what your fathers worshipped" }, explanation: { en: "Accusing Prophet of disrupting tradition", ur: "Accusing Prophet of disrupting tradition" }, verseRef: "34:43" },
        { term: "وَقَالُوا مَا هَٰذَا إِلَّا إِفْكٌ مُّفْتَرًى", meaning: { en: "They say: This is nothing but invented falsehood", ur: "They say: This is nothing but invented falsehood" }, explanation: { en: "Calling Quran fabricated lies", ur: "Calling Quran fabricated lies" }, verseRef: "34:43" },
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لِلْحَقِّ لَمَّا جَاءَهُمْ إِنْ هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ", meaning: { en: "Those who disbelieve say of the truth when it came to them: This is only obvious magic", ur: "Those who disbelieve say of the truth when it came to them: This is only obvious magic" }, explanation: { en: "Truth dismissed as magic", ur: "Truth dismissed as magic" }, verseRef: "34:43" }
      ]
    },

    noScriptureBeforeQuran: {
      name: "No Scripture Before Quran",
      nameArabic: "لا كتاب قبل القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَمَا آتَيْنَاهُم مِّن كُتُبٍ يَدْرُسُونَهَا", meaning: { en: "We had not given them books to study", ur: "We had not given them books to study" }, explanation: { en: "Arabs had no previous scripture", ur: "Arabs had no previous scripture" }, verseRef: "34:44" },
        { term: "وَمَا أَرْسَلْنَا إِلَيْهِمْ قَبْلَكَ مِن نَّذِيرٍ", meaning: { en: "Nor sent to them before you any warner", ur: "Nor sent to them before you any warner" }, explanation: { en: "No prophet before Muhammad to Arabs", ur: "No prophet before Muhammad to Arabs" }, verseRef: "34:44" },
        { term: "وَكَذَّبَ الَّذِينَ مِن قَبْلِهِمْ", meaning: { en: "Those before them denied", ur: "Those before them denied" }, explanation: { en: "Previous nations also denied", ur: "Previous nations also denied" }, verseRef: "34:45" },
        { term: "وَمَا بَلَغُوا مِعْشَارَ مَا آتَيْنَاهُمْ", meaning: { en: "And they did not attain a tenth of what We gave them", ur: "And they did not attain a tenth of what We gave them" }, explanation: { en: "Previous nations had more yet still denied", ur: "Previous nations had more yet still denied" }, verseRef: "34:45" },
        { term: "فَكَذَّبُوا رُسُلِي فَكَيْفَ كَانَ نَكِيرِ", meaning: { en: "But they denied My messengers, so how was My reproach?", ur: "But they denied My messengers, so how was My reproach?" }, explanation: { en: "Reminder of punishment for denial", ur: "Reminder of punishment for denial" }, verseRef: "34:45" }
      ]
    },

    prophetAdvice: {
      name: "Prophet's Advice",
      nameArabic: "نصيحة النبي",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "قُلْ إِنَّمَا أَعِظُكُم بِوَاحِدَةٍ", meaning: { en: "Say: I advise you with one thing", ur: "Say: I advise you with one thing" }, explanation: { en: "Single piece of counsel", ur: "Single piece of counsel" }, verseRef: "34:46" },
        { term: "أَن تَقُومُوا لِلَّهِ مَثْنَىٰ وَفُرَادَىٰ ثُمَّ تَتَفَكَّرُوا", meaning: { en: "That you stand for Allah in pairs or alone, then reflect", ur: "That you stand for Allah in pairs or alone, then reflect" }, explanation: { en: "Sincere reflection alone or in pairs", ur: "Sincere reflection alone or in pairs" }, verseRef: "34:46" },
        { term: "مَا بِصَاحِبِكُم مِّن جِنَّةٍ", meaning: { en: "There is no madness in your companion", ur: "There is no madness in your companion" }, explanation: { en: "Prophet is not insane", ur: "Prophet is not insane" }, verseRef: "34:46" },
        { term: "إِنْ هُوَ إِلَّا نَذِيرٌ لَّكُم بَيْنَ يَدَيْ عَذَابٍ شَدِيدٍ", meaning: { en: "He is only a warner to you before a severe punishment", ur: "He is only a warner to you before a severe punishment" }, explanation: { en: "Warning before inevitable punishment", ur: "Warning before inevitable punishment" }, verseRef: "34:46" }
      ]
    },

    prophetSeekingnNoReward: {
      name: "Prophet Seeks No Reward",
      nameArabic: "النبي لا يطلب أجراً",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "قُلْ مَا سَأَلْتُكُم مِّنْ أَجْرٍ فَهُوَ لَكُمْ", meaning: { en: "Say: Whatever reward I asked of you - it is yours", ur: "Say: Whatever reward I asked of you - it is yours" }, explanation: { en: "Prophet seeks no worldly reward", ur: "Prophet seeks no worldly reward" }, verseRef: "34:47" },
        { term: "إِنْ أَجْرِيَ إِلَّا عَلَى اللَّهِ", meaning: { en: "My reward is only from Allah", ur: "My reward is only from Allah" }, explanation: { en: "Reward comes from Allah alone", ur: "Reward comes from Allah alone" }, verseRef: "34:47" },
        { term: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ", meaning: { en: "And He is Witness over all things", ur: "And He is Witness over all things" }, explanation: { en: "Allah witnesses Prophet's sincerity", ur: "Allah witnesses Prophet's sincerity" }, verseRef: "34:47" }
      ]
    },

    truthHasCome: {
      name: "Truth Has Come",
      nameArabic: "جاء الحق",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "قُلْ إِنَّ رَبِّي يَقْذِفُ بِالْحَقِّ", meaning: { en: "Say: Indeed, my Lord hurls the truth", ur: "Say: Indeed, my Lord hurls the truth" }, explanation: { en: "Allah casts truth powerfully", ur: "Allah casts truth powerfully" }, verseRef: "34:48" },
        { term: "عَلَّامُ الْغُيُوبِ", meaning: { en: "Knower of the unseen", ur: "Knower of the unseen" }, explanation: { en: "Allah knows all hidden things", ur: "Allah knows all hidden things" }, verseRef: "34:48" },
        { term: "قُلْ جَاءَ الْحَقُّ", meaning: { en: "Say: The truth has come", ur: "Say: The truth has come" }, explanation: { en: "Declaration of truth's arrival", ur: "Declaration of truth's arrival" }, verseRef: "34:49" },
        { term: "وَمَا يُبْدِئُ الْبَاطِلُ وَمَا يُعِيدُ", meaning: { en: "Falsehood cannot originate or restore", ur: "Falsehood cannot originate or restore" }, explanation: { en: "Falsehood has no creative power", ur: "Falsehood has no creative power" }, verseRef: "34:49" }
      ]
    },

    prophetGuidance: {
      name: "Prophet's Guidance",
      nameArabic: "هداية النبي",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "قُلْ إِن ضَلَلْتُ فَإِنَّمَا أَضِلُّ عَلَىٰ نَفْسِي", meaning: { en: "Say: If I err, I err only against myself", ur: "Say: If I err, I err only against myself" }, explanation: { en: "Misguidance harms only oneself", ur: "Misguidance harms only oneself" }, verseRef: "34:50" },
        { term: "وَإِنِ اهْتَدَيْتُ فَبِمَا يُوحِي إِلَيَّ رَبِّي", meaning: { en: "And if I am guided, it is by what my Lord reveals to me", ur: "And if I am guided, it is by what my Lord reveals to me" }, explanation: { en: "Guidance comes through revelation", ur: "Guidance comes through revelation" }, verseRef: "34:50" },
        { term: "إِنَّهُ سَمِيعٌ قَرِيبٌ", meaning: { en: "Indeed, He is Hearing and near", ur: "Indeed, He is Hearing and near" }, explanation: { en: "Allah hears all and is close", ur: "Allah hears all and is close" }, verseRef: "34:50" }
      ]
    },

    terrorOnJudgmentDay: {
      name: "Terror on Judgment Day",
      nameArabic: "الفزع يوم القيامة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلَوْ تَرَىٰ إِذْ فَزِعُوا فَلَا فَوْتَ", meaning: { en: "If you could see when they are terrified but there is no escape", ur: "If you could see when they are terrified but there is no escape" }, explanation: { en: "No escape from terror on that Day", ur: "No escape from terror on that Day" }, verseRef: "34:51" },
        { term: "وَأُخِذُوا مِن مَّكَانٍ قَرِيبٍ", meaning: { en: "And they were seized from a nearby place", ur: "And they were seized from a nearby place" }, explanation: { en: "Caught from close proximity", ur: "Caught from close proximity" }, verseRef: "34:51" },
        { term: "وَقَالُوا آمَنَّا بِهِ", meaning: { en: "And they will say: We believe in it", ur: "And they will say: We believe in it" }, explanation: { en: "Too-late declaration of faith", ur: "Too-late declaration of faith" }, verseRef: "34:52" },
        { term: "وَأَنَّىٰ لَهُمُ التَّنَاوُشُ مِن مَّكَانٍ بَعِيدٍ", meaning: { en: "But how can they reach faith from a distant place?", ur: "But how can they reach faith from a distant place?" }, explanation: { en: "Faith from afar impossible at that point", ur: "Faith from afar impossible at that point" }, verseRef: "34:52" }
      ]
    },

    previousDisbelief: {
      name: "Previous Disbelief",
      nameArabic: "الكفر السابق",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَقَدْ كَفَرُوا بِهِ مِن قَبْلُ", meaning: { en: "They disbelieved in it before", ur: "They disbelieved in it before" }, explanation: { en: "Their prior rejection recorded", ur: "Their prior rejection recorded" }, verseRef: "34:53" },
        { term: "وَيَقْذِفُونَ بِالْغَيْبِ مِن مَّكَانٍ بَعِيدٍ", meaning: { en: "They hurl accusations about unseen from far away", ur: "They hurl accusations about unseen from far away" }, explanation: { en: "Random accusations without knowledge", ur: "Random accusations without knowledge" }, verseRef: "34:53" },
        { term: "وَحِيلَ بَيْنَهُمْ وَبَيْنَ مَا يَشْتَهُونَ", meaning: { en: "A barrier will be placed between them and what they desire", ur: "A barrier will be placed between them and what they desire" }, explanation: { en: "Denied their desires permanently", ur: "Denied their desires permanently" }, verseRef: "34:54" },
        { term: "كَمَا فُعِلَ بِأَشْيَاعِهِم مِّن قَبْلُ", meaning: { en: "As was done with their kind before", ur: "As was done with their kind before" }, explanation: { en: "Same fate as previous deniers", ur: "Same fate as previous deniers" }, verseRef: "34:54" },
        { term: "إِنَّهُمْ كَانُوا فِي شَكٍّ مُّرِيبٍ", meaning: { en: "Indeed, they were in disquieting doubt", ur: "Indeed, they were in disquieting doubt" }, explanation: { en: "Doubt that created restlessness", ur: "Doubt that created restlessness" }, verseRef: "34:54" }
      ]
    }
  },

  relationships: [
    { from: "الحمد لله", to: "العلم الإلهي", type: "foundation", description: { en: "Praise based on Allah's comprehensive knowledge", ur: "Praise based on Allah's comprehensive knowledge" } },
    { from: "داود", to: "سليمان", type: "succession", description: { en: "Father and son both blessed with kingdoms", ur: "Father and son both blessed with kingdoms" } },
    { from: "نعم سبأ", to: "كفران سبأ", type: "contrast", description: { en: "Blessings met with ingratitude", ur: "Blessings met with ingratitude" } },
    { from: "جنتان", to: "سيل العرم", type: "consequence", description: { en: "Gardens destroyed by dam flood as punishment", ur: "Gardens destroyed by dam flood as punishment" } },
    { from: "الشكر", to: "الكفور", type: "contrast", description: { en: "Grateful few versus ungrateful many", ur: "Grateful few versus ungrateful many" } },
    { from: "موت سليمان", to: "علم الغيب", type: "proof", description: { en: "Jinn's ignorance proves they don't know unseen", ur: "Jinn's ignorance proves they don't know unseen" } },
    { from: "باعد بين أسفارنا", to: "أحاديث", type: "consequence", description: { en: "Asking for hardship led to becoming mere tales", ur: "Asking for hardship led to becoming mere tales" } },
    { from: "إبليس ظنّه", to: "اتبعوه", type: "confirmation", description: { en: "Satan's assumption about human weakness confirmed", ur: "Satan's assumption about human weakness confirmed" } },
    { from: "الشركاء", to: "لا يملكون ذرة", type: "refutation", description: { en: "Partners own nothing - no power", ur: "Partners own nothing - no power" } },
    { from: "أموال وأولاد", to: "لا تقربكم زلفى", type: "correction", description: { en: "Wealth and children don't bring closeness to Allah", ur: "Wealth and children don't bring closeness to Allah" } },
    { from: "الملائكة", to: "تبرؤ", type: "disowning", description: { en: "Angels will disown those who claimed to worship them", ur: "Angels will disown those who claimed to worship them" } },
    { from: "جاء الحق", to: "الباطل", type: "negation", description: { en: "Truth's arrival means falsehood has no power", ur: "Truth's arrival means falsehood has no power" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening Praise and Divine Knowledge", verses: "34:1-6", description: { en: "Praise to Allah, His comprehensive knowledge, Hour affirmed", ur: "Praise to Allah, His comprehensive knowledge, Hour affirmed" } },
      { stage: 2, theme: "Mockery of Resurrection", verses: "34:7-9", description: { en: "Disbelievers mock resurrection, signs surround them", ur: "Disbelievers mock resurrection, signs surround them" } },
      { stage: 3, theme: "Dawud's Blessings", verses: "34:10-11", description: { en: "Mountains praise, iron softened, armor crafted", ur: "Mountains praise, iron softened, armor crafted" } },
      { stage: 4, theme: "Sulayman's Kingdom", verses: "34:12-14", description: { en: "Wind, copper, jinn works, death reveals jinn's ignorance", ur: "Wind, copper, jinn works, death reveals jinn's ignorance" } },
      { stage: 5, theme: "Sheba's Blessing and Ingratitude", verses: "34:15-17", description: { en: "Two gardens, dam flood punishment for ingratitude", ur: "Two gardens, dam flood punishment for ingratitude" } },
      { stage: 6, theme: "Safe Travel Rejected", verses: "34:18-19", description: { en: "Blessed towns, asked for hardship, became scattered tales", ur: "Blessed towns, asked for hardship, became scattered tales" } },
      { stage: 7, theme: "Satan's Success", verses: "34:20-21", description: { en: "Iblis's assumption confirmed, most followed him", ur: "Iblis's assumption confirmed, most followed him" } },
      { stage: 8, theme: "False Gods Refuted", verses: "34:22-27", description: { en: "Partners own nothing, intercession by permission only", ur: "Partners own nothing, intercession by permission only" } },
      { stage: 9, theme: "Universal Message", verses: "34:28-30", description: { en: "Prophet sent to all mankind, appointed time fixed", ur: "Prophet sent to all mankind, appointed time fixed" } },
      { stage: 10, theme: "Mutual Blame", verses: "34:31-33", description: { en: "Leaders and followers blame each other", ur: "Leaders and followers blame each other" } },
      { stage: 11, theme: "Wealth Misconception", verses: "34:34-39", description: { en: "Affluent reject, provision is from Allah alone", ur: "Affluent reject, provision is from Allah alone" } },
      { stage: 12, theme: "Angels Disown", verses: "34:40-42", description: { en: "Angels deny being worshipped, jinn were worshipped", ur: "Angels deny being worshipped, jinn were worshipped" } },
      { stage: 13, theme: "Rejecting Clear Signs", verses: "34:43-45", description: { en: "Quran called magic and lies, despite no prior scripture", ur: "Quran called magic and lies, despite no prior scripture" } },
      { stage: 14, theme: "Prophet's Sincere Call", verses: "34:46-50", description: { en: "Advice to reflect, Prophet seeks no reward, truth declared", ur: "Advice to reflect, Prophet seeks no reward, truth declared" } },
      { stage: 15, theme: "Terror and Too-Late Faith", verses: "34:51-54", description: { en: "No escape, late belief rejected, doubt leads to barrier", ur: "No escape, late belief rejected, doubt leads to barrier" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Gratitude preserves blessings", how: "Like Sheba, ingratitude leads to loss - express thanks daily", verse: "34:15-17" },
      { principle: "Work righteousness with blessings", how: "Dawud and Sulayman worked despite gifts - use blessings productively", verse: "34:11, 13" },
      { principle: "Don't ask for hardship", how: "Sheba asked for longer journeys - appreciate ease", verse: "34:19" },
      { principle: "Jinn don't know unseen", how: "They couldn't tell Sulayman died - don't seek knowledge from them", verse: "34:14" },
      { principle: "Wealth doesn't indicate favor", how: "Rich often reject truth first - don't equate wealth with guidance", verse: "34:34-35" },
      { principle: "Reflect sincerely", how: "Stand alone or in pairs and think - sincere reflection leads to truth", verse: "34:46" },
      { principle: "Spending is replaced", how: "Whatever spent, Allah replaces - be generous", verse: "34:39" },
      { principle: "Satan has no power", how: "He only suggests - resist and you're protected", verse: "34:21" },
      { principle: "False leaders won't help", how: "Mutual blame on Judgment Day - choose righteous companions", verse: "34:31-33" },
      { principle: "Too-late faith rejected", how: "Believe now - faith at death or judgment is not accepted", verse: "34:52" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Gratitude and its Consequences", ur: "The Surah of Gratitude and its Consequences" },
    insight: { en: "Surah Saba presents a masterclass on gratitude versus ingratitude through three powerful narratives: Dawud who was commanded 'Work in gratitude' (34:13), Sulayman whose death exposed jinn's lack of unseen knowledge, and the people of Sheba whose 'two gardens' became 'bitter fruit' after they rejected blessings. The surah's central message - 'few of My servants are grateful' (34:13) - explains why wealthy nations fall while patient, grateful individuals succeed. The people of Sheba committed a bizarre form of ingratitude: asking for longer, harder journeys when Allah had blessed them with safe, connected routes. This highlights how humans sometimes reject ease and seek difficulty as a form of arrogance. The mutual blame scene (34:31-33) between leaders and followers serves as a warning: on Judgment Day, no one will accept responsibility for leading or following into disbelief. The surah ends with the powerful image of those trying to reach faith from 'a distant place' (34:52) - too late, after a lifetime of rejection.", ur: "Surah Saba presents a masterclass on gratitude versus ingratitude through three powerful narratives: Dawud who was commanded 'Work in gratitude' (34:13), Sulayman whose death exposed jinn's lack of unseen knowledge, and the people of Sheba whose 'two gardens' became 'bitter fruit' after they rejected blessings. The surah's central message - 'few of My servants are grateful' (34:13) - explains why wealthy nations fall while patient, grateful individuals succeed. The people of Sheba committed a bizarre form of ingratitude: asking for longer, harder journeys when Allah had blessed them with safe, connected routes. This highlights how humans sometimes reject ease and seek difficulty as a form of arrogance. The mutual blame scene (34:31-33) between leaders and followers serves as a warning: on Judgment Day, no one will accept responsibility for leading or following into disbelief. The surah ends with the powerful image of those trying to reach faith from 'a distant place' (34:52) - too late, after a lifetime of rejection." }
  },

  historicalContext: {
    note: { en: "This Makkan surah addresses the Quraysh's specific objections: that resurrection is impossible (34:7), that Muhammad is either lying or mad (34:8), and that their wealth proves divine favor (34:35). The story of Sheba (Saba) was known to Arabs as the ancient Yemeni civilization whose dam collapse around 6th century CE caused their dispersion - a living memory for the audience. The mention of Dawud's armor-making (34:10-11) may relate to Arabia's awareness of sophisticated metalwork from the north. The challenge to invoke false gods (34:22) directly confronted Quraysh's idols with the logical proof that they 'own not even an atom's weight.' The surah's message of Allah extending and restricting provision (34:36, 39) addressed the Quraysh's commercial mindset, reframing wealth as a test rather than a sign of blessing.", ur: "This Makkan surah addresses the Quraysh's specific objections: that resurrection is impossible (34:7), that Muhammad is either lying or mad (34:8), and that their wealth proves divine favor (34:35). The story of Sheba (Saba) was known to Arabs as the ancient Yemeni civilization whose dam collapse around 6th century CE caused their dispersion - a living memory for the audience. The mention of Dawud's armor-making (34:10-11) may relate to Arabia's awareness of sophisticated metalwork from the north. The challenge to invoke false gods (34:22) directly confronted Quraysh's idols with the logical proof that they 'own not even an atom's weight.' The surah's message of Allah extending and restricting provision (34:36, 39) addressed the Quraysh's commercial mindset, reframing wealth as a test rather than a sign of blessing." }
  },

  linguisticFeatures: {
    features: [
      { feature: "الحمد لله", example: { en: "Opening praise", ur: "Opening praise" }, effect: { en: "One of four surahs opening with Alhamdulillah (1, 6, 18, 34, 35)", ur: "One of four surahs opening with Alhamdulillah (1, 6, 18, 34, 35)" } },
      { feature: "سيل العرم", example: { en: "Flood of the dam", ur: "Flood of the dam" }, effect: { en: "Specific historical reference using 'arim (dam/embankment)", ur: "Specific historical reference using 'arim (dam/embankment)" } },
      { feature: "أوِّبي", example: { en: "Repeat/return praises", ur: "Repeat/return praises" }, effect: { en: "Rare verb form commanding mountains to echo Dawud's praise", ur: "Rare verb form commanding mountains to echo Dawud's praise" } },
      { feature: "مُمَزَّق", example: { en: "Torn apart", ur: "Torn apart" }, effect: { en: "Intensive form - completely fragmented", ur: "Intensive form - completely fragmented" } },
      { feature: "الفتّاح", example: { en: "The Judge/Opener", ur: "The Judge/Opener" }, effect: { en: "Intensive form - the One who opens judgment definitively", ur: "Intensive form - the One who opens judgment definitively" } },
      { feature: "كافّة", example: { en: "Comprehensively", ur: "Comprehensively" }, effect: { en: "Emphasizes universality of Prophet's mission", ur: "Emphasizes universality of Prophet's mission" } },
      { feature: "التناوش", example: { en: "Reaching/grasping", ur: "Reaching/grasping" }, effect: { en: "Rare word - trying to grasp faith from impossible distance", ur: "Rare word - trying to grasp faith from impossible distance" } },
      { feature: "مريب", example: { en: "Disquieting", ur: "Disquieting" }, effect: { en: "Doubt that causes restlessness and anxiety", ur: "Doubt that causes restlessness and anxiety" } }
    ]
  },

  prophetsMentioned: {
    dawud: {
      name: "Dawud (David)",
      nameArabic: "داود",
      verseRange: "34:10-11",
      blessings: [
        "Divine bounty (fadl)",
        "Mountains echoed his praise",
        "Birds joined his glorification",
        "Iron made pliable/soft",
        "Taught armor crafting"
      ]
    },
    sulayman: {
      name: "Sulayman (Solomon)",
      nameArabic: "سليمان",
      verseRange: "34:12-14",
      blessings: [
        "Wind traveled a month's distance morning and evening",
        "Spring of molten copper",
        "Jinn served by Allah's permission",
        "Palaces, statues, basins, cauldrons built"
      ],
      death: "Died leaning on staff, jinn unaware until termite ate staff - proving they don't know unseen"
    }
  },

  shebaStory: {
    name: "People of Sheba (Saba)",
    nameArabic: "سبأ",
    location: "Yemen (Ma'rib)",
    blessings: [
      "Two gardens on right and left",
      "Good land (baldatun tayyibah)",
      "Connected safe travel routes",
      "Visible towns for journey stages"
    ],
    sins: [
      "Turned away from gratitude",
      "Asked for longer distances (harder journeys)"
    ],
    punishment: [
      "Flood of the dam (sayl al-arim)",
      "Gardens replaced with bitter fruit",
      "Tamarisks and few lote trees",
      "Complete dispersion as a people",
      "Became mere tales (ahadith)"
    ],
    lesson: "Signs for every patient, grateful person (34:19)"
  },

  keyFigures: {
    iblis: {
      name: "Iblis (Satan)",
      nameArabic: "إبليس",
      verseRange: "34:20-21",
      role: "His assumption about human weakness was confirmed - most followed him except believers",
      keyPoint: "Has no authority/power (sultan) over anyone - only suggests, cannot force"
    },
    angels: {
      name: "The Angels",
      nameArabic: "الملائكة",
      verseRange: "34:40-41",
      role: "Will disown those who claimed to worship them, declaring they only worship Allah",
      keyPoint: "Reveal that people actually worshipped jinn, not angels"
    },
    affluent: {
      name: "The Affluent (Mutrafun)",
      nameArabic: "المترفون",
      verseRange: "34:34-35",
      role: "In every city, the wealthy were first to reject the message",
      keyPoint: "Mistakenly believed wealth and children meant exemption from punishment"
    }
  },

  keyVerses: {
    verses: [
      { verse: "34:13", theme: "Gratitude", text: "Work, O family of Dawud, in gratitude. And few of My servants are grateful" },
      { verse: "34:14", theme: "Jinn's Ignorance", text: "If they had known the unseen, they would not have remained in humiliating punishment" },
      { verse: "34:15", theme: "Sheba's Blessing", text: "A good land and a forgiving Lord" },
      { verse: "34:19", theme: "Patience and Gratitude", text: "Signs for every patient, grateful person" },
      { verse: "34:21", theme: "Satan's Limit", text: "He had over them no authority except to distinguish believers from doubters" },
      { verse: "34:28", theme: "Universal Message", text: "We have not sent you except comprehensively to all mankind" },
      { verse: "34:37", theme: "True Closeness", text: "It is not your wealth or children that bring you near to Us" },
      { verse: "34:39", theme: "Replacement", text: "Whatever you spend, He will replace it" },
      { verse: "34:46", theme: "Sincere Reflection", text: "Stand for Allah in pairs or alone, then reflect" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "34:10", topic: "Iron softening", note: { en: "Iron requires high temperatures to become pliable - miracle granted to Dawud", ur: "Iron requires high temperatures to become pliable - miracle granted to Dawud" } },
      { verse: "34:12", topic: "Molten copper", note: { en: "Copper melting point is 1,085°C - flowing spring implies extraordinary metallurgical capability", ur: "Copper melting point is 1,085°C - flowing spring implies extraordinary metallurgical capability" } },
      { verse: "34:14", topic: "Wood-eating insects", note: { en: "Termites consume wood slowly - Sulayman remained standing until staff weakened enough to collapse", ur: "Termites consume wood slowly - Sulayman remained standing until staff weakened enough to collapse" } },
      { verse: "34:16", topic: "Dam collapse", note: { en: "Historical Ma'rib Dam collapse documented - massive irrigation system failure", ur: "Historical Ma'rib Dam collapse documented - massive irrigation system failure" } },
      { verse: "34:18", topic: "Measured journeys", note: { en: "Connected way-stations (visible towns) for safe travel - ancient trade infrastructure", ur: "Connected way-stations (visible towns) for safe travel - ancient trade infrastructure" } }
    ]
  }
};

export default ONTOLOGY;
