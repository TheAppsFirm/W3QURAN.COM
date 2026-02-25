/**
 * Surah Al-Anfal (8) - Ontology of Quranic Concepts
 * The Spoils of War
 * Theme: Spoils of war, Battle of Badr, victory conditions, loyalty to Allah
 * Revelation: Madani (Medinan)
 * Ayahs: 75
 */

export const ONTOLOGY = {
  surahId: 8,
  surahName: "Al-Anfal",
  surahNameArabic: "الأنفال",
  revelationType: "Madani",
  totalAyahs: 75,

  categories: {
    spoilsOfWar: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Spoils of War (Anfal)",
      nameArabic: "الأنفال",
      concepts: [
        { term: "يَسْأَلُونَكَ عَنِ الْأَنفَالِ", meaning: { en: "They ask you about the spoils", ur: "یہ آپ سے مالِ غنیمت کے بارے میں پوچھتے ہیں" }, explanation: { en: "Opening question about war booty - central theme", ur: "مالِ غنیمت کے بارے میں افتتاحی سوال - مرکزی موضوع" }, verseRef: "8:1" },
        { term: "قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ", meaning: { en: "Say: The spoils are for Allah and the Messenger", ur: "کہو: مالِ غنیمت Allah اور رسول کے لیے ہے" }, explanation: { en: "Divine authority over war gains", ur: "مالِ غنیمت پر الہٰی اختیار" }, verseRef: "8:1" },
        { term: "فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ", meaning: { en: "So fear Allah and amend between yourselves", ur: "پس Allah سے ڈرو اور آپس کے معاملات درست کرو" }, explanation: { en: "Unity over material gains", ur: "مادی فائدوں پر اتحاد کو ترجیح" }, verseRef: "8:1" },
        { term: "وَاعْلَمُوا أَنَّمَا غَنِمْتُم مِّن شَيْءٍ", meaning: { en: "And know that whatever spoils you take", ur: "اور جان لو کہ جو کچھ بھی غنیمت میں حاصل کرو" }, explanation: { en: "Distribution rules for war gains", ur: "مالِ غنیمت کی تقسیم کے قواعد" }, verseRef: "8:41" },
        { term: "فَأَنَّ لِلَّهِ خُمُسَهُ", meaning: { en: "Then indeed for Allah is one-fifth", ur: "تو اس کا پانچواں حصہ Allah کے لیے ہے" }, explanation: { en: "The khums (1/5) principle", ur: "خمس (پانچواں حصہ) کا اصول" }, verseRef: "8:41" }
      ]
    },

    battleOfBadr: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Battle of Badr",
      nameArabic: "غزوة بدر",
      concepts: [
        { term: "يَوْمَ الْفُرْقَانِ", meaning: { en: "Day of Criterion", ur: "حق و باطل میں فرق کرنے والا دن" }, explanation: { en: "Badr as the decisive day separating truth from falsehood", ur: "بدر فیصلہ کن دن تھا جس نے حق کو باطل سے جدا کیا" }, verseRef: "8:41" },
        { term: "يَوْمَ الْتَقَى الْجَمْعَانِ", meaning: { en: "Day the two armies met", ur: "جس دن دو لشکر آمنے سامنے آئے" }, explanation: { en: "The historic confrontation at Badr", ur: "بدر میں تاریخی مقابلہ" }, verseRef: "8:41" },
        { term: "إِذْ أَنتُم بِالْعُدْوَةِ الدُّنْيَا", meaning: { en: "When you were on the near side", ur: "جب تم قریب والی جانب تھے" }, explanation: { en: "Geographic description of battle positions", ur: "جنگی مقامات کی جغرافیائی تفصیل" }, verseRef: "8:42" },
        { term: "وَهُم بِالْعُدْوَةِ الْقُصْوَىٰ", meaning: { en: "And they were on the farther side", ur: "اور وہ دور والی جانب تھے" }, explanation: { en: "Enemy position - further from Medina", ur: "دشمن کا مقام - مدینے سے دور" }, verseRef: "8:42" },
        { term: "وَالرَّكْبُ أَسْفَلَ مِنكُمْ", meaning: { en: "And the caravan was below you", ur: "اور قافلہ تم سے نیچے تھا" }, explanation: { en: "Quraysh caravan's position", ur: "قریش کے قافلے کا مقام" }, verseRef: "8:42" },
        { term: "لِّيَهْلِكَ مَنْ هَلَكَ عَن بَيِّنَةٍ", meaning: { en: "So that he who perished would perish upon evidence", ur: "تاکہ جو ہلاک ہو واضح دلیل کے بعد ہلاک ہو" }, explanation: { en: "Battle as clear proof of truth", ur: "جنگ حق کے واضح ثبوت کے طور پر" }, verseRef: "8:42" }
      ]
    },

    divineSupport: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Support in Battle",
      nameArabic: "النصر الإلهي",
      concepts: [
        { term: "إِذْ تَسْتَغِيثُونَ رَبَّكُمْ", meaning: { en: "When you were calling upon your Lord for help", ur: "جب تم اپنے رب سے فریاد کر رہے تھے" }, explanation: { en: "Believers' desperate plea before battle", ur: "جنگ سے پہلے مومنوں کی بے بس التجا" }, verseRef: "8:9" },
        { term: "أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ", meaning: { en: "I will reinforce you with a thousand angels", ur: "میں تمہاری مدد ایک ہزار فرشتوں سے کروں گا" }, explanation: { en: "Angelic army sent as reinforcement", ur: "فرشتوں کا لشکر بطور کمک بھیجا گیا" }, verseRef: "8:9" },
        { term: "مُرْدِفِينَ", meaning: { en: "Following one another", ur: "ایک کے بعد ایک آنے والے" }, explanation: { en: "Waves of angels in succession", ur: "فرشتوں کی لہریں یکے بعد دیگرے" }, verseRef: "8:9" },
        { term: "إِذْ يُغَشِّيكُمُ النُّعَاسَ أَمَنَةً مِّنْهُ", meaning: { en: "When He covered you with drowsiness as security from Him", ur: "جب اس نے تم پر اپنی طرف سے اطمینان کے لیے اونگھ طاری کر دی" }, explanation: { en: "Miraculous calm before battle", ur: "جنگ سے پہلے معجزانہ سکون" }, verseRef: "8:11" },
        { term: "وَيُنَزِّلُ عَلَيْكُم مِّنَ السَّمَاءِ مَاءً", meaning: { en: "And sent down upon you water from sky", ur: "اور تم پر آسمان سے پانی اتارا" }, explanation: { en: "Rain for purification and firmness", ur: "پاکیزگی اور زمین مضبوط کرنے کے لیے بارش" }, verseRef: "8:11" },
        { term: "وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ", meaning: { en: "You did not throw when you threw, but Allah threw", ur: "جب تم نے پھینکا تو تم نے نہیں پھینکا بلکہ Allah نے پھینکا" }, explanation: { en: "Divine action through Prophet's hand", ur: "نبی ﷺ کے ہاتھ سے الہٰی فعل" }, verseRef: "8:17" },
        { term: "فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ", meaning: { en: "You did not kill them, but Allah killed them", ur: "تم نے انہیں قتل نہیں کیا بلکہ Allah نے قتل کیا" }, explanation: { en: "Victory attributed solely to Allah", ur: "فتح صرف Allah سے منسوب" }, verseRef: "8:17" }
      ]
    },

    trueBelievers: {
      color: '#EF4444',
      icon: 'Users',
      name: "Qualities of True Believers",
      nameArabic: "صفات المؤمنين الحقيقيين",
      concepts: [
        { term: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ", meaning: { en: "The believers are only those who, when Allah is mentioned, their hearts tremble", ur: "مومن تو وہ ہیں کہ جب Allah کا ذکر ہو تو ان کے دل کانپ اٹھیں" }, explanation: { en: "Heart's response to Allah's remembrance", ur: "Allah کے ذکر پر دل کا لرزنا" }, verseRef: "8:2" },
        { term: "وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا", meaning: { en: "And when His verses are recited, it increases them in faith", ur: "اور جب ان پر اس کی آیات تلاوت ہوں تو ان کا ایمان بڑھ جائے" }, explanation: { en: "Quran strengthens iman", ur: "Quran ایمان کو مضبوط کرتا ہے" }, verseRef: "8:2" },
        { term: "وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ", meaning: { en: "And upon their Lord they rely", ur: "اور اپنے رب پر بھروسا رکھتے ہیں" }, explanation: { en: "Tawakkul as core trait", ur: "توکل بنیادی صفت کے طور پر" }, verseRef: "8:2" },
        { term: "الَّذِينَ يُقِيمُونَ الصَّلَاةَ", meaning: { en: "Those who establish prayer", ur: "جو نماز قائم کرتے ہیں" }, explanation: { en: "Regular prayer obligation", ur: "نماز کی پابندی کی فرضیت" }, verseRef: "8:3" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: { en: "And from what We have provided them, they spend", ur: "اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں" }, explanation: { en: "Charitable spending", ur: "راہِ خدا میں خرچ کرنا" }, verseRef: "8:3" },
        { term: "أُولَٰئِكَ هُمُ الْمُؤْمِنُونَ حَقًّا", meaning: { en: "Those are the true believers", ur: "یہی سچے مومن ہیں" }, explanation: { en: "Definition of genuine faith", ur: "حقیقی ایمان کی تعریف" }, verseRef: "8:4" }
      ]
    },

    obedienceToAllah: {
      color: '#10B981',
      icon: 'Book',
      name: "Obedience to Allah and Messenger",
      nameArabic: "طاعة الله والرسول",
      concepts: [
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَرَسُولَهُ", meaning: { en: "O you who believe, obey Allah and His Messenger", ur: "اے ایمان والو! Allah اور اس کے رسول کی اطاعت کرو" }, explanation: { en: "Command for dual obedience", ur: "دوہری اطاعت کا حکم" }, verseRef: "8:20" },
        { term: "وَلَا تَوَلَّوْا عَنْهُ وَأَنتُمْ تَسْمَعُونَ", meaning: { en: "And do not turn from him while you hear", ur: "اور اس سے منہ نہ موڑو جبکہ تم سن رہے ہو" }, explanation: { en: "Warning against turning away", ur: "منہ موڑنے سے تنبیہ" }, verseRef: "8:20" },
        { term: "وَلَا تَكُونُوا كَالَّذِينَ قَالُوا سَمِعْنَا وَهُمْ لَا يَسْمَعُونَ", meaning: { en: "And be not like those who say 'We hear' but they hear not", ur: "اور ان جیسے نہ بنو جو کہتے ہیں ہم نے سنا حالانکہ وہ سنتے نہیں" }, explanation: { en: "Warning against superficial compliance", ur: "ظاہری اطاعت سے تنبیہ" }, verseRef: "8:21" },
        { term: "اسْتَجِيبُوا لِلَّهِ وَلِلرَّسُولِ إِذَا دَعَاكُمْ لِمَا يُحْيِيكُمْ", meaning: { en: "Respond to Allah and Messenger when he calls you to that which gives you life", ur: "Allah اور رسول کی پکار پر لبیک کہو جب وہ تمہیں اس چیز کی طرف بلائیں جو تمہیں زندگی دے" }, explanation: { en: "Islam as source of true life", ur: "اسلام حقیقی زندگی کا سرچشمہ" }, verseRef: "8:24" },
        { term: "وَاعْلَمُوا أَنَّ اللَّهَ يَحُولُ بَيْنَ الْمَرْءِ وَقَلْبِهِ", meaning: { en: "Know that Allah intervenes between a man and his heart", ur: "جان لو کہ Allah آدمی اور اس کے دل کے درمیان حائل ہو جاتا ہے" }, explanation: { en: "Allah's power over hearts", ur: "دلوں پر Allah کی قدرت" }, verseRef: "8:24" }
      ]
    },

    steadfastnessInBattle: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Steadfastness in Battle",
      nameArabic: "الثبات في القتال",
      concepts: [
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمُ الَّذِينَ كَفَرُوا زَحْفًا فَلَا تُوَلُّوهُمُ الْأَدْبَارَ", meaning: { en: "O believers, when you meet the disbelievers advancing, do not turn your backs", ur: "اے ایمان والو! جب کافروں سے میدان میں سامنا ہو تو ان سے پیٹھ نہ پھیرو" }, explanation: { en: "Prohibition of fleeing battle", ur: "میدانِ جنگ سے بھاگنے کی ممانعت" }, verseRef: "8:15" },
        { term: "وَمَن يُوَلِّهِمْ يَوْمَئِذٍ دُبُرَهُ", meaning: { en: "And whoever turns his back that day", ur: "اور جو اس دن پیٹھ پھیرے" }, explanation: { en: "Consequence of desertion", ur: "فرار کا نتیجہ" }, verseRef: "8:16" },
        { term: "فَقَدْ بَاءَ بِغَضَبٍ مِّنَ اللَّهِ", meaning: { en: "Has certainly returned with anger from Allah", ur: "وہ Allah کے غضب کا مستحق ہوا" }, explanation: { en: "Divine wrath for cowardice", ur: "بزدلی پر الہٰی غضب" }, verseRef: "8:16" },
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا لَقِيتُمْ فِئَةً فَاثْبُتُوا", meaning: { en: "O believers, when you meet a force, stand firm", ur: "اے ایمان والو! جب کسی جماعت سے مقابلہ ہو تو ثابت قدم رہو" }, explanation: { en: "Command for battlefield steadfastness", ur: "میدانِ جنگ میں ثابت قدمی کا حکم" }, verseRef: "8:45" },
        { term: "وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ", meaning: { en: "And remember Allah much that you may succeed", ur: "اور Allah کو کثرت سے یاد کرو تاکہ تم کامیاب ہو" }, explanation: { en: "Dhikr as key to victory", ur: "ذکر کامیابی کی کنجی ہے" }, verseRef: "8:45" },
        { term: "وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا", meaning: { en: "Obey Allah and His Messenger, and do not dispute lest you fail", ur: "Allah اور رسول کی اطاعت کرو اور آپس میں جھگڑا نہ کرو ورنہ ناکام ہو جاؤ گے" }, explanation: { en: "Unity essential for victory", ur: "فتح کے لیے اتحاد ضروری ہے" }, verseRef: "8:46" }
      ]
    },

    warEthics: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Ethics of Warfare",
      nameArabic: "أخلاقيات الحرب",
      concepts: [
        { term: "وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ", meaning: { en: "And prepare against them what you can of power", ur: "اور ان کے مقابلے کے لیے جتنی طاقت ہو سکے تیار رکھو" }, explanation: { en: "Military preparation as duty", ur: "فوجی تیاری بطور فریضہ" }, verseRef: "8:60" },
        { term: "وَمِن رِّبَاطِ الْخَيْلِ", meaning: { en: "And steeds of war", ur: "اور بندھے ہوئے گھوڑے" }, explanation: { en: "Cavalry readiness (modern: defense)", ur: "گھڑ سوار فوج کی تیاری (جدید: دفاع)" }, verseRef: "8:60" },
        { term: "تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ", meaning: { en: "To deter the enemy of Allah and your enemy", ur: "تاکہ اس سے Allah کے اور تمہارے دشمن کو خوف ہو" }, explanation: { en: "Deterrence through strength", ur: "طاقت کے ذریعے دشمن کو روکنا" }, verseRef: "8:60" },
        { term: "وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا", meaning: { en: "And if they incline to peace, then incline to it", ur: "اور اگر وہ صلح کی طرف مائل ہوں تو تم بھی مائل ہو جاؤ" }, explanation: { en: "Peace preferred over war", ur: "جنگ پر صلح کو ترجیح" }, verseRef: "8:61" },
        { term: "وَتَوَكَّلْ عَلَى اللَّهِ", meaning: { en: "And rely upon Allah", ur: "اور Allah پر بھروسا رکھو" }, explanation: { en: "Trust Allah in peace negotiations", ur: "صلح کے معاملات میں Allah پر توکل" }, verseRef: "8:61" },
        { term: "وَإِن يُرِيدُوا أَن يَخْدَعُوكَ فَإِنَّ حَسْبَكَ اللَّهُ", meaning: { en: "If they intend to deceive you, Allah is sufficient for you", ur: "اگر وہ تمہیں دھوکا دینا چاہیں تو Allah تمہارے لیے کافی ہے" }, explanation: { en: "Protection from enemy treachery", ur: "دشمن کی دھوکا دہی سے حفاظت" }, verseRef: "8:62" }
      ]
    },

    prisonersOfWar: {
      color: '#10B981',
      icon: 'Book',
      name: "Treatment of Prisoners",
      nameArabic: "معاملة الأسرى",
      concepts: [
        { term: "مَا كَانَ لِنَبِيٍّ أَن يَكُونَ لَهُ أَسْرَىٰ حَتَّىٰ يُثْخِنَ فِي الْأَرْضِ", meaning: { en: "It is not for a prophet to have prisoners until he has established dominance", ur: "کسی نبی کو قیدی رکھنا زیبا نہیں جب تک زمین میں اچھی طرح غلبہ نہ حاصل کر لے" }, explanation: { en: "Historical context of prisoner policy", ur: "قیدیوں کی پالیسی کا تاریخی پسِ منظر" }, verseRef: "8:67" },
        { term: "تُرِيدُونَ عَرَضَ الدُّنْيَا", meaning: { en: "You desire the goods of this world", ur: "تم دنیا کا سامان چاہتے ہو" }, explanation: { en: "Warning against material motives for ransoming", ur: "فدیے میں مادی مقاصد سے تنبیہ" }, verseRef: "8:67" },
        { term: "وَاللَّهُ يُرِيدُ الْآخِرَةَ", meaning: { en: "But Allah desires the Hereafter", ur: "اور Allah آخرت چاہتا ہے" }, explanation: { en: "Higher purpose over worldly gain", ur: "دنیاوی فائدے پر اعلیٰ مقصد" }, verseRef: "8:67" },
        { term: "قُل لِّمَن فِي أَيْدِيكُم مِّنَ الْأَسْرَىٰ", meaning: { en: "Say to those prisoners in your hands", ur: "ان قیدیوں سے کہو جو تمہارے ہاتھ میں ہیں" }, explanation: { en: "Address to captives of Badr", ur: "بدر کے قیدیوں سے خطاب" }, verseRef: "8:70" },
        { term: "إِن يَعْلَمِ اللَّهُ فِي قُلُوبِكُمْ خَيْرًا يُؤْتِكُمْ خَيْرًا", meaning: { en: "If Allah knows goodness in your hearts, He will give you better", ur: "اگر Allah تمہارے دلوں میں بھلائی پائے گا تو تمہیں اس سے بہتر دے گا" }, explanation: { en: "Potential redemption for sincere captives", ur: "مخلص قیدیوں کی نجات کا امکان" }, verseRef: "8:70" }
      ]
    },

    hypocritesAndDisbelievers: {
      color: '#EF4444',
      icon: 'Users',
      name: "Hypocrites and Disbelievers",
      nameArabic: "المنافقون والكافرون",
      concepts: [
        { term: "إِنَّ شَرَّ الدَّوَابِّ عِندَ اللَّهِ الَّذِينَ كَفَرُوا", meaning: { en: "Indeed, the worst of creatures to Allah are those who disbelieve", ur: "بے شک Allah کے نزدیک بدترین جانور وہ لوگ ہیں جنہوں نے کفر کیا" }, explanation: { en: "Disbelievers' status before Allah", ur: "Allah کے نزدیک کافروں کا مقام" }, verseRef: "8:55" },
        { term: "فَهُمْ لَا يُؤْمِنُونَ", meaning: { en: "So they will not believe", ur: "پس وہ ایمان نہیں لاتے" }, explanation: { en: "Persistent rejection of faith", ur: "ایمان کا مسلسل انکار" }, verseRef: "8:55" },
        { term: "الَّذِينَ عَاهَدتَّ مِنْهُمْ ثُمَّ يَنقُضُونَ عَهْدَهُمْ", meaning: { en: "Those with whom you made a treaty but they break it", ur: "وہ جن سے تم نے عہد کیا پھر وہ بار بار اپنا عہد توڑتے ہیں" }, explanation: { en: "Treaty-breakers", ur: "عہد شکن" }, verseRef: "8:56" },
        { term: "وَهُمْ لَا يَتَّقُونَ", meaning: { en: "And they do not fear Allah", ur: "اور وہ Allah سے نہیں ڈرتے" }, explanation: { en: "No taqwa leads to treachery", ur: "تقویٰ کی کمی غداری کا سبب" }, verseRef: "8:56" },
        { term: "إِنَّ شَرَّ الدَّوَابِّ عِندَ اللَّهِ الصُّمُّ الْبُكْمُ الَّذِينَ لَا يَعْقِلُونَ", meaning: { en: "Worst creatures are the deaf and dumb who do not reason", ur: "Allah کے نزدیک بدترین جانور وہ بہرے گونگے ہیں جو عقل نہیں رکھتے" }, explanation: { en: "Those who refuse to use intellect", ur: "وہ جو عقل استعمال کرنے سے انکاری ہیں" }, verseRef: "8:22" },
        { term: "وَلَوْ عَلِمَ اللَّهُ فِيهِمْ خَيْرًا لَّأَسْمَعَهُمْ", meaning: { en: "Had Allah known any good in them, He would have made them hear", ur: "اگر Allah ان میں کوئی بھلائی جانتا تو انہیں سنا دیتا" }, explanation: { en: "Divine knowledge of hearts", ur: "دلوں کے بارے میں الہٰی علم" }, verseRef: "8:23" }
      ]
    },

    loyaltyAndAlliance: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Loyalty and Alliance (Walaa)",
      nameArabic: "الولاء والبراء",
      concepts: [
        { term: "إِنَّ الَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا", meaning: { en: "Those who believed, emigrated, and fought", ur: "جو لوگ ایمان لائے، ہجرت کی اور جہاد کیا" }, explanation: { en: "The Muhajirun's sacrifice", ur: "مہاجرین کی قربانی" }, verseRef: "8:72" },
        { term: "بِأَمْوَالِهِمْ وَأَنفُسِهِمْ فِي سَبِيلِ اللَّهِ", meaning: { en: "With their wealth and lives in the cause of Allah", ur: "اپنے مال اور جان سے Allah کی راہ میں" }, explanation: { en: "Complete sacrifice for faith", ur: "ایمان کے لیے مکمل قربانی" }, verseRef: "8:72" },
        { term: "وَالَّذِينَ آوَوا وَّنَصَرُوا", meaning: { en: "And those who gave shelter and aided", ur: "اور جنہوں نے پناہ دی اور مدد کی" }, explanation: { en: "The Ansar's hospitality", ur: "انصار کی مہمان نوازی" }, verseRef: "8:72" },
        { term: "أُولَٰئِكَ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ", meaning: { en: "They are allies of one another", ur: "یہ سب ایک دوسرے کے دوست ہیں" }, explanation: { en: "Brotherhood of believers", ur: "مومنوں کا بھائی چارہ" }, verseRef: "8:72" },
        { term: "وَالَّذِينَ كَفَرُوا بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ", meaning: { en: "And those who disbelieve are allies of one another", ur: "اور جن لوگوں نے کفر کیا وہ ایک دوسرے کے دوست ہیں" }, explanation: { en: "Disbelievers united against truth", ur: "کافر حق کے خلاف متحد" }, verseRef: "8:73" },
        { term: "إِلَّا تَفْعَلُوهُ تَكُن فِتْنَةٌ فِي الْأَرْضِ وَفَسَادٌ كَبِيرٌ", meaning: { en: "If you do not do this, there will be fitnah and great corruption", ur: "اگر تم ایسا نہ کرو تو زمین میں فتنہ اور بڑا فساد ہو گا" }, explanation: { en: "Unity of believers prevents chaos", ur: "مومنوں کا اتحاد فساد کو روکتا ہے" }, verseRef: "8:73" }
      ]
    },

    satanAndEvil: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Satan's Deception",
      nameArabic: "خداع الشيطان",
      concepts: [
        { term: "وَإِذْ زَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ", meaning: { en: "And when Satan made their deeds pleasing to them", ur: "اور جب شیطان نے ان کے اعمال ان کے لیے خوشنما بنا دیے" }, explanation: { en: "Satan beautifies evil for disbelievers", ur: "شیطان کافروں کے لیے برائی کو خوبصورت بناتا ہے" }, verseRef: "8:48" },
        { term: "وَقَالَ لَا غَالِبَ لَكُمُ الْيَوْمَ مِنَ النَّاسِ", meaning: { en: "And said: No one can defeat you today", ur: "اور کہا: آج لوگوں میں سے کوئی تم پر غالب نہیں آ سکتا" }, explanation: { en: "Satan's false promise of victory", ur: "شیطان کا فتح کا جھوٹا وعدہ" }, verseRef: "8:48" },
        { term: "وَإِنِّي جَارٌ لَّكُمْ", meaning: { en: "And I am your protector", ur: "اور میں تمہارا حامی ہوں" }, explanation: { en: "Satan's deceptive guarantee", ur: "شیطان کی دھوکے بھری ضمانت" }, verseRef: "8:48" },
        { term: "فَلَمَّا تَرَاءَتِ الْفِئَتَانِ نَكَصَ عَلَىٰ عَقِبَيْهِ", meaning: { en: "But when the two armies sighted each other, he turned on his heels", ur: "لیکن جب دونوں لشکر آمنے سامنے آئے تو الٹے پاؤں بھاگ گیا" }, explanation: { en: "Satan abandons at moment of truth", ur: "شیطان فیصلے کے لمحے میں ساتھ چھوڑ دیتا ہے" }, verseRef: "8:48" },
        { term: "وَقَالَ إِنِّي بَرِيءٌ مِّنكُمْ", meaning: { en: "And said: I am dissociated from you", ur: "اور کہا: میں تم سے بری ہوں" }, explanation: { en: "Satan's betrayal revealed", ur: "شیطان کی غداری آشکار" }, verseRef: "8:48" },
        { term: "إِنِّي أَخَافُ اللَّهَ", meaning: { en: "Indeed, I fear Allah", ur: "بے شک میں Allah سے ڈرتا ہوں" }, explanation: { en: "Satan acknowledges Allah's power", ur: "شیطان Allah کی طاقت کا اعتراف کرتا ہے" }, verseRef: "8:48" }
      ]
    },

    divineWisdom: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Wisdom and Planning",
      nameArabic: "الحكمة والتدبير الإلهي",
      concepts: [
        { term: "وَلَوْ تَوَاعَدتُّمْ لَاخْتَلَفْتُمْ فِي الْمِيعَادِ", meaning: { en: "If you had made an appointment, you would have missed it", ur: "اگر تم آپس میں وعدہ کرتے تو وقت پر نہ پہنچ پاتے" }, explanation: { en: "Divine orchestration of Badr", ur: "بدر کی الہٰی تدبیر" }, verseRef: "8:42" },
        { term: "وَلَٰكِن لِّيَقْضِيَ اللَّهُ أَمْرًا كَانَ مَفْعُولًا", meaning: { en: "But Allah's decree was to be accomplished", ur: "لیکن Allah کا فیصلہ پورا ہونا تھا" }, explanation: { en: "Battle was divinely destined", ur: "جنگ الہٰی تقدیر میں لکھی تھی" }, verseRef: "8:42" },
        { term: "إِذْ يُرِيكَهُمُ اللَّهُ فِي مَنَامِكَ قَلِيلًا", meaning: { en: "When Allah showed them to you in your dream as few", ur: "جب Allah نے خواب میں انہیں آپ کو کم دکھایا" }, explanation: { en: "Vision given to Prophet for confidence", ur: "نبی ﷺ کو حوصلے کے لیے خواب دکھایا" }, verseRef: "8:43" },
        { term: "وَلَوْ أَرَاكَهُمْ كَثِيرًا لَّفَشِلْتُمْ", meaning: { en: "Had He shown them to you as many, you would have lost heart", ur: "اگر وہ انہیں زیادہ دکھاتا تو تم ہمت ہار جاتے" }, explanation: { en: "Divine mercy in perception", ur: "ادراک میں الہٰی رحمت" }, verseRef: "8:43" },
        { term: "وَإِذْ يُرِيكُمُوهُمْ إِذِ الْتَقَيْتُمْ فِي أَعْيُنِكُمْ قَلِيلًا", meaning: { en: "And when you met, He made them appear few in your eyes", ur: "اور جب تم آمنے سامنے آئے تو اس نے انہیں تمہاری نظروں میں کم دکھایا" }, explanation: { en: "Mutual underestimation by design", ur: "الہٰی تدبیر سے دونوں طرف کم نظر آئے" }, verseRef: "8:44" },
        { term: "وَيُقَلِّلُكُمْ فِي أَعْيُنِهِمْ", meaning: { en: "And made you appear few in their eyes", ur: "اور تمہیں ان کی نظروں میں کم دکھایا" }, explanation: { en: "Both sides emboldened to fight", ur: "دونوں طرف لڑنے کی ہمت پیدا ہوئی" }, verseRef: "8:44" }
      ]
    },

    testAndTrial: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Test and Trial",
      nameArabic: "الابتلاء والفتنة",
      concepts: [
        { term: "وَاتَّقُوا فِتْنَةً لَّا تُصِيبَنَّ الَّذِينَ ظَلَمُوا مِنكُمْ خَاصَّةً", meaning: { en: "Fear a trial that will not affect only the wrongdoers", ur: "ایسے فتنے سے بچو جو صرف ظالموں تک محدود نہیں رہے گا" }, explanation: { en: "Collective trials affect all", ur: "اجتماعی آزمائشیں سب کو متاثر کرتی ہیں" }, verseRef: "8:25" },
        { term: "وَاعْلَمُوا أَنَّ اللَّهَ شَدِيدُ الْعِقَابِ", meaning: { en: "And know that Allah is severe in punishment", ur: "اور جان لو کہ Allah سخت سزا دینے والا ہے" }, explanation: { en: "Warning of consequences", ur: "نتائج کی تنبیہ" }, verseRef: "8:25" },
        { term: "وَاذْكُرُوا إِذْ أَنتُمْ قَلِيلٌ مُّسْتَضْعَفُونَ فِي الْأَرْضِ", meaning: { en: "Remember when you were few and oppressed in the land", ur: "یاد کرو جب تم زمین میں تھوڑے اور کمزور تھے" }, explanation: { en: "Reminder of humble beginnings in Makkah", ur: "مکہ میں عاجزانہ آغاز کی یاد دہانی" }, verseRef: "8:26" },
        { term: "تَخَافُونَ أَن يَتَخَطَّفَكُمُ النَّاسُ", meaning: { en: "Fearing people would snatch you away", ur: "ڈرتے تھے کہ لوگ تمہیں اچک لیں گے" }, explanation: { en: "Previous state of vulnerability", ur: "پہلے کی بے بسی کی حالت" }, verseRef: "8:26" },
        { term: "فَآوَاكُمْ وَأَيَّدَكُم بِنَصْرِهِ وَرَزَقَكُم مِّنَ الطَّيِّبَاتِ", meaning: { en: "He sheltered you, supported you with His help, and provided good things", ur: "پھر اس نے تمہیں پناہ دی، اپنی مدد سے تقویت دی اور پاکیزہ رزق عطا کیا" }, explanation: { en: "Allah's transformation of their condition", ur: "Allah نے ان کی حالت بدل دی" }, verseRef: "8:26" },
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللَّهَ وَالرَّسُولَ", meaning: { en: "O believers, do not betray Allah and the Messenger", ur: "اے ایمان والو! Allah اور رسول سے خیانت نہ کرو" }, explanation: { en: "Warning against betraying trust", ur: "امانت میں خیانت سے تنبیہ" }, verseRef: "8:27" }
      ]
    },

    criterionOfTruth: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Criterion (Furqan)",
      nameArabic: "الفرقان",
      concepts: [
        { term: "إِن تَتَّقُوا اللَّهَ يَجْعَل لَّكُمْ فُرْقَانًا", meaning: { en: "If you fear Allah, He will grant you a criterion", ur: "اگر تم Allah سے ڈرو گے تو وہ تمہیں حق و باطل میں فرق کرنے کی صلاحیت دے گا" }, explanation: { en: "Taqwa leads to discernment", ur: "تقویٰ بصیرت کی طرف لے جاتی ہے" }, verseRef: "8:29" },
        { term: "وَيُكَفِّرْ عَنكُمْ سَيِّئَاتِكُمْ", meaning: { en: "And will remove your sins", ur: "اور تمہارے گناہ دور کر دے گا" }, explanation: { en: "Forgiveness through taqwa", ur: "تقویٰ کے ذریعے مغفرت" }, verseRef: "8:29" },
        { term: "وَيَغْفِرْ لَكُمْ", meaning: { en: "And forgive you", ur: "اور تمہیں معاف کر دے گا" }, explanation: { en: "Complete absolution promised", ur: "مکمل معافی کا وعدہ" }, verseRef: "8:29" },
        { term: "وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ", meaning: { en: "Allah is the possessor of great bounty", ur: "اور Allah بڑے فضل والا ہے" }, explanation: { en: "His generosity is immense", ur: "اس کی سخاوت بے حد ہے" }, verseRef: "8:29" }
      ]
    },

    refugeInAllah: {
      color: '#10B981',
      icon: 'Book',
      name: "Seeking Refuge in Allah",
      nameArabic: "اللجوء إلى الله",
      concepts: [
        { term: "وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ", meaning: { en: "Allah would not punish them while you are among them", ur: "جب تک آپ ان میں موجود ہیں Allah انہیں عذاب نہیں دے گا" }, explanation: { en: "Prophet's presence as mercy", ur: "نبی ﷺ کی موجودگی بطور رحمت" }, verseRef: "8:33" },
        { term: "وَمَا كَانَ اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ", meaning: { en: "Nor would Allah punish them while they seek forgiveness", ur: "اور نہ Allah انہیں عذاب دے گا جب تک وہ استغفار کر رہے ہیں" }, explanation: { en: "Istighfar protects from punishment", ur: "استغفار عذاب سے بچاتی ہے" }, verseRef: "8:33" },
        { term: "وَإِن يُرِدْكَ بِخَيْرٍ فَلَا رَادَّ لِفَضْلِهِ", meaning: { en: "If He intends good for you, none can repel His bounty", ur: "اگر وہ تمہارے ساتھ بھلائی کا ارادہ کرے تو کوئی اس کے فضل کو روک نہیں سکتا" }, explanation: { en: "Allah's good cannot be stopped", ur: "Allah کی بھلائی کو کوئی نہیں روک سکتا" }, verseRef: "8:62" }
      ]
    }
  },

  relationships: [
    { from: "الأنفال", to: "فاتقوا الله", type: "resolution", description: { en: "Dispute over spoils resolved through taqwa", ur: "مالِ غنیمت کا تنازعہ تقویٰ سے حل ہوا" } },
    { from: "يوم الفرقان", to: "غزوة بدر", type: "identity", description: { en: "Badr is the Day of Criterion", ur: "بدر یومِ فرقان ہے" } },
    { from: "ألف من الملائكة", to: "النصر", type: "means", description: { en: "Angels as means of victory", ur: "فرشتے فتح کا ذریعہ" } },
    { from: "وجلت قلوبهم", to: "المؤمنون حقا", type: "characteristic", description: { en: "Heart-trembling defines true faith", ur: "دل کا لرزنا سچے ایمان کی علامت" } },
    { from: "أطيعوا الله", to: "لا تنازعوا", type: "condition", description: { en: "Obedience prevents disunity", ur: "اطاعت انتشار کو روکتی ہے" } },
    { from: "إعداد القوة", to: "ترهبون العدو", type: "purpose", description: { en: "Preparation deters enemies", ur: "تیاری دشمنوں کو روکتی ہے" } },
    { from: "جنحوا للسلم", to: "فاجنح لها", type: "command", description: { en: "Peace overtures must be accepted", ur: "صلح کی پیشکش قبول کرنا لازم ہے" } },
    { from: "الشيطان", to: "نكص على عقبيه", type: "betrayal", description: { en: "Satan abandons his followers", ur: "شیطان اپنے پیروکاروں کو چھوڑ دیتا ہے" } },
    { from: "المهاجرون", to: "الأنصار", type: "alliance", description: { en: "Emigrants and helpers as allies", ur: "مہاجرین اور انصار بطور حلیف" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Spoils Question", verses: "8:1-4", description: { en: "Opening question about Anfal resolved through taqwa and true believer qualities", ur: "انفال کا افتتاحی سوال تقویٰ اور سچے مومن کی صفات سے حل" } },
      { stage: 2, theme: "Pre-Battle Scene", verses: "8:5-14", description: { en: "Setting out for battle, believers' reluctance, divine support promised", ur: "جنگ کے لیے روانگی، مومنوں کی ہچکچاہٹ، الہٰی مدد کا وعدہ" } },
      { stage: 3, theme: "Battle Commands", verses: "8:15-19", description: { en: "Rules of engagement - no fleeing, Allah's role in victory", ur: "جنگ کے قواعد - فرار نہیں، فتح میں Allah کا کردار" } },
      { stage: 4, theme: "Obedience Required", verses: "8:20-28", description: { en: "Commands for obedience, response to Allah's call, avoiding betrayal", ur: "اطاعت کے احکام، Allah کی پکار کا جواب، خیانت سے بچنا" } },
      { stage: 5, theme: "Criterion Granted", verses: "8:29-40", description: { en: "Furqan through taqwa, Prophet's protection, fighting until no fitnah", ur: "تقویٰ سے فرقان، نبی ﷺ کی حفاظت، فتنہ ختم ہونے تک لڑنا" } },
      { stage: 6, theme: "Badr's Divine Plan", verses: "8:41-44", description: { en: "Distribution rules, Day of Furqan, Allah's orchestration of battle positions", ur: "تقسیم کے قواعد، یومِ فرقان، جنگی مقامات کی الہٰی تدبیر" } },
      { stage: 7, theme: "Battlefield Conduct", verses: "8:45-49", description: { en: "Stand firm, remember Allah, avoid boasting, Satan's deception revealed", ur: "ثابت قدم رہو، Allah کو یاد رکھو، تکبر سے بچو، شیطان کا فریب آشکار" } },
      { stage: 8, theme: "Fate of Disbelievers", verses: "8:50-58", description: { en: "Death of disbelievers, treaty-breakers, worst of creatures", ur: "کافروں کی موت، عہد شکن، بدترین مخلوق" } },
      { stage: 9, theme: "War Ethics", verses: "8:59-66", description: { en: "Prepare strength for deterrence, accept peace, trust in Allah", ur: "روک تھام کے لیے طاقت تیار رکھو، صلح قبول کرو، Allah پر بھروسا رکھو" } },
      { stage: 10, theme: "Prisoners & Loyalty", verses: "8:67-75", description: { en: "Captive policy, Muhajirun-Ansar alliance, believers as one family", ur: "قیدیوں کی پالیسی، مہاجرین-انصار اتحاد، مومن ایک خاندان" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Unity over wealth", how: "Don't let material gains divide the community", verse: "8:1" },
      { principle: "Heart consciousness", how: "When Allah is mentioned, feel your heart respond", verse: "8:2" },
      { principle: "Faith through Quran", how: "Let Quran recitation increase your iman", verse: "8:2" },
      { principle: "Full obedience", how: "Obey Allah and His Messenger without partial compliance", verse: "8:20" },
      { principle: "Respond to life-giving call", how: "Answer Islam's call - it gives true life", verse: "8:24" },
      { principle: "Prepare but trust", how: "Do your best preparation, then rely on Allah", verse: "8:60-61" },
      { principle: "Choose peace", how: "When enemy inclines to peace, accept it", verse: "8:61" },
      { principle: "Stay firm under pressure", how: "Stand firm, remember Allah, avoid disputes", verse: "8:45-46" },
      { principle: "Brotherhood matters", how: "Believers are allies of one another - act accordingly", verse: "8:72" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Anatomy of Victory", ur: "فتح کی تشریح" },
    insight: { en: "Surah Al-Anfal is essentially a divine after-action report of the Battle of Badr. It begins with a dispute (spoils) and ends with unity (Muhajirun-Ansar alliance). The surah reveals that victory comes not through numbers (313 vs 1000) but through divine support, obedience, and steadfastness. Remarkably, it shows both the human element ('You threw') and divine element ('Allah threw') working together (8:17). The surah establishes that military strength is for deterrence (8:60), peace is preferred (8:61), and fighting is only until there is no more fitnah (8:39). Most strikingly, it reveals Satan's role in emboldening the Quraysh then abandoning them (8:48) - a lesson that evil promises never deliver. The term 'Anfal' (spoils/extra bounty) reminds believers that all gains are from Allah, not personal achievement.", ur: "سورۃ الانفال بنیادی طور پر غزوہ بدر کی الہٰی رپورٹ ہے۔ یہ ایک تنازعے (مالِ غنیمت) سے شروع ہوتی ہے اور اتحاد (مہاجرین-انصار اتحاد) پر ختم ہوتی ہے۔ سورت واضح کرتی ہے کہ فتح تعداد سے نہیں (313 بمقابلہ 1000) بلکہ الہٰی مدد، اطاعت اور ثابت قدمی سے ملتی ہے۔ قابلِ توجہ بات یہ ہے کہ انسانی عمل ('تم نے پھینکا') اور الہٰی عمل ('Allah نے پھینکا') دونوں ساتھ کام کرتے دکھائے گئے (8:17)۔ سورت یہ اصول قائم کرتی ہے کہ فوجی طاقت روک تھام کے لیے ہے (8:60)، صلح کو ترجیح دی جائے (8:61)، اور لڑائی صرف فتنہ ختم ہونے تک ہے (8:39)۔ سب سے اہم بات، شیطان کا کردار سامنے آتا ہے جس نے قریش کو ابھارا پھر چھوڑ دیا (8:48) - سبق یہ کہ برائی کے وعدے کبھی پورے نہیں ہوتے۔ 'انفال' (اضافی مال) کی اصطلاح یاد دلاتی ہے کہ تمام فائدے Allah کی طرف سے ہیں، ذاتی کارنامہ نہیں۔" }
  },

  historicalContext: {
    note: { en: "Revealed after the Battle of Badr (2 AH/624 CE), Islam's first major military victory. 313 poorly-equipped Muslims faced about 1000 well-armed Quraysh. The surah addresses the dispute over war spoils that arose after victory, establishes rules of warfare, and records the miraculous events at Badr - angelic support, the rain before battle, the Prophet throwing dust that blinded enemies. It also addresses the ransom of prisoners, including Abbas (the Prophet's uncle). The surah lays the foundation for Islamic international law, including treatment of prisoners and peace treaties.", ur: "غزوۂ بدر (2 ہجری/624 عیسوی) کے بعد نازل ہوئی، جو اسلام کی پہلی بڑی فوجی فتح تھی۔ 313 کم ساز و سامان والے مسلمانوں نے تقریباً 1000 مسلح قریش کا مقابلہ کیا۔ سورت فتح کے بعد پیدا ہونے والے مالِ غنیمت کے تنازعے کو حل کرتی ہے، جنگ کے قواعد مقرر کرتی ہے، اور بدر کے معجزانہ واقعات کا ذکر کرتی ہے - فرشتوں کی مدد، جنگ سے پہلے بارش، نبی ﷺ کا مٹی پھینکنا جس نے دشمنوں کو اندھا کر دیا۔ یہ قیدیوں کے فدیے کا بھی ذکر کرتی ہے، جن میں عباس (نبی ﷺ کے چچا) بھی شامل تھے۔ سورت اسلامی بین الاقوامی قانون کی بنیاد رکھتی ہے، جس میں قیدیوں کا سلوک اور صلح کے معاہدے شامل ہیں۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "الأنفال", example: { en: "Plural of نَفَل", ur: "نَفَل کی جمع" }, effect: "Extra bounty beyond expected - emphasizes Allah's generosity" },
      { feature: "وَجِلَتْ قُلُوبُهُمْ", example: { en: "Hearts tremble", ur: "دل کانپ اٹھے" }, effect: "وَجِلَ = fearful trembling, different from خَوْف (fear)" },
      { feature: "مُرْدِفِينَ", example: { en: "Following one another", ur: "یکے بعد دیگرے آنے والے" }, effect: "Wave after wave of angels - Form IV participle" },
      { feature: "يُثَبِّتَ بِهِ الْأَقْدَامَ", example: { en: "To make firm the feet", ur: "قدم جمانے کے لیے" }, effect: "Rain firmed the sandy ground - tactical advantage" },
      { feature: "مَا رَمَيْتَ إِذْ رَمَيْتَ", example: { en: "You did not throw when you threw", ur: "تم نے نہیں پھینکا جب تم نے پھینکا" }, effect: "Paradox highlighting divine agency through human action" },
      { feature: "نَكَصَ عَلَىٰ عَقِبَيْهِ", example: { en: "Turned on his heels", ur: "الٹے پاؤں بھاگ گیا" }, effect: "Vivid image of Satan fleeing backward in cowardice" },
      { feature: "الْفُرْقَانِ", example: { en: "The Criterion", ur: "حق و باطل میں فرق کرنے والا" }, effect: "From فَرَقَ (to separate) - distinguishing truth from falsehood" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "8:11", topic: "Rain before battle", note: "Rain firmed the sandy ground for Muslim camp while making Quraysh area muddy" },
      { verse: "8:11", topic: "Sleep as security", note: "Deep restful sleep despite danger - psychological preparation for battle" },
      { verse: "8:43-44", topic: "Perception manipulation", note: "Both armies saw each other as smaller - increasing confidence on both sides" },
      { verse: "8:60", topic: "Deterrence theory", note: "Military preparation for deterrence, not aggression - modern defense principle" }
    ]
  }
};

export default ONTOLOGY;
