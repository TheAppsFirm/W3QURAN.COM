/**
 * Surah Al-Anbiya (21) - Ontology of Quranic Concepts
 * The Prophets
 *
 * Theme: The prophets' mission of Tawheed, Ibrahim's confrontation with idolatry,
 * stories of 16+ prophets, Day of Judgment, and Allah's mercy to believers
 *
 * Revelation: Makki
 * Total Ayahs: 112
 */

export const ONTOLOGY = {
  surahId: 21,
  surahName: "Al-Anbiya",
  surahNameArabic: "الأنبياء",
  revelationType: "Makki",
  totalAyahs: 112,

  categories: {
    approachingJudgment: {
      name: "Approaching Judgment",
      nameUr: "قیامت کا قریب آنا",
      nameArabic: "اقتراب الحساب",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ", meaning: { en: "Draws near for mankind their reckoning", ur: "لوگوں کا حساب قریب آ گیا" }, explanation: { en: "Surah opens with warning - accountability is imminent", ur: "سورۃ انتباہ سے شروع ہوتی ہے - حساب قریب ہے" }, verseRef: "21:1" },
        { term: "وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ", meaning: { en: "While they are in heedlessness turning away", ur: "اور وہ غفلت میں منہ موڑے ہوئے ہیں" }, explanation: { en: "People ignore the coming judgment", ur: "لوگ آنے والے حساب کو نظرانداز کرتے ہیں" }, verseRef: "21:1" },
        { term: "إِلَّا اسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ", meaning: { en: "They listen to it while they are at play", ur: "وہ اسے سنتے ہیں کھیلتے ہوئے" }, explanation: { en: "Divine message treated as entertainment", ur: "الٰہی پیغام کو تفریح سمجھا جاتا ہے" }, verseRef: "21:2" },
        { term: "لَاهِيَةً قُلُوبُهُمْ", meaning: { en: "Their hearts distracted", ur: "ان کے دل غافل ہیں" }, explanation: { en: "Hearts occupied with worldly pursuits", ur: "دل دنیاوی مشاغل میں مصروف ہیں" }, verseRef: "21:3" }
      ]
    },

    disbelieversClaims: {
      name: "Claims of Disbelievers",
      nameUr: "کافروں کے دعوے",
      nameArabic: "ادعاءات الكافرين",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "هَلْ هَٰذَا إِلَّا بَشَرٌ مِّثْلُكُمْ", meaning: { en: "Is this except a human like you?", ur: "کیا یہ تمہاری طرح ایک انسان نہیں؟" }, explanation: { en: "Mocking that a human cannot be a prophet", ur: "تمسخر کہ انسان نبی نہیں ہو سکتا" }, verseRef: "21:3" },
        { term: "أَضْغَاثُ أَحْلَامٍ", meaning: { en: "Confused dreams", ur: "پریشان خواب" }, explanation: { en: "Accusation that Quran is confused imagination", ur: "الزام کہ قرآن پریشان تخیلات ہیں" }, verseRef: "21:5" },
        { term: "بَلِ افْتَرَاهُ", meaning: { en: "Rather, he invented it", ur: "بلکہ اس نے خود گھڑا ہے" }, explanation: { en: "Accusation that Prophet fabricated message", ur: "الزام کہ نبی نے پیغام خود بنایا" }, verseRef: "21:5" },
        { term: "بَلْ هُوَ شَاعِرٌ", meaning: { en: "Rather, he is a poet", ur: "بلکہ یہ شاعر ہے" }, explanation: { en: "Dismissing prophecy as poetry", ur: "نبوت کو شاعری کہہ کر رد کرنا" }, verseRef: "21:5" },
        { term: "فَلْيَأْتِنَا بِآيَةٍ", meaning: { en: "Let him bring us a sign", ur: "کوئی نشانی لا کر دکھائے" }, explanation: { en: "Demanding miracles despite clear guidance", ur: "واضح ہدایت کے باوجود معجزے کا مطالبہ" }, verseRef: "21:5" }
      ]
    },

    prophetsWereHuman: {
      name: "Prophets Were Human",
      nameUr: "انبیاء بشر تھے",
      nameArabic: "الأنبياء بشر",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "وَمَا أَرْسَلْنَا قَبْلَكَ إِلَّا رِجَالًا نُّوحِي إِلَيْهِمْ", meaning: { en: "We sent not before you except men to whom We revealed", ur: "ہم نے آپ سے پہلے صرف مرد بھیجے جن پر وحی کی" }, explanation: { en: "All prophets were human men with revelation", ur: "تمام انبیاء وحی والے انسان تھے" }, verseRef: "21:7" },
        { term: "وَمَا جَعَلْنَاهُمْ جَسَدًا لَّا يَأْكُلُونَ الطَّعَامَ", meaning: { en: "We did not make them bodies that ate no food", ur: "ہم نے انہیں ایسا جسم نہیں بنایا جو کھانا نہ کھائے" }, explanation: { en: "Prophets ate, drank, lived as humans", ur: "انبیاء کھاتے پیتے اور انسانوں کی طرح رہتے تھے" }, verseRef: "21:8" },
        { term: "وَمَا كَانُوا خَالِدِينَ", meaning: { en: "Nor were they immortal", ur: "اور نہ وہ ہمیشہ رہنے والے تھے" }, explanation: { en: "All prophets eventually died", ur: "سب انبیاء کو بالآخر موت آئی" }, verseRef: "21:8" }
      ]
    },

    tawheedDeclaration: {
      name: "Declaration of Tawheed",
      nameUr: "توحید کا اعلان",
      nameArabic: "إعلان التوحيد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ", meaning: { en: "We sent no messenger before you except We revealed to him: There is no deity except Me, so worship Me", ur: "ہم نے آپ سے پہلے کوئی رسول نہیں بھیجا مگر اس پر وحی کی کہ میرے سوا کوئی معبود نہیں پس میری عبادت کرو" }, explanation: { en: "Core message of ALL prophets was Tawheed", ur: "تمام انبیاء کا بنیادی پیغام توحید تھا" }, verseRef: "21:25" },
        { term: "لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا", meaning: { en: "Had there been gods besides Allah, both would have been ruined", ur: "اگر زمین و آسمان میں اللہ کے سوا معبود ہوتے تو دونوں تباہ ہو جاتے" }, explanation: { en: "Multiple gods would cause chaos - logical proof of Tawheed", ur: "متعدد معبود تباہی لاتے - توحید کی عقلی دلیل" }, verseRef: "21:22" },
        { term: "فَسُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ عَمَّا يَصِفُونَ", meaning: { en: "Exalted is Allah, Lord of the Throne, above what they describe", ur: "پاک ہے اللہ عرش کا رب، ان کی باتوں سے بالاتر" }, explanation: { en: "Allah is far above their false attributions", ur: "اللہ ان کی جھوٹی نسبتوں سے بہت بلند ہے" }, verseRef: "21:22" },
        { term: "لَا يُسْأَلُ عَمَّا يَفْعَلُ وَهُمْ يُسْأَلُونَ", meaning: { en: "He is not questioned about what He does, but they will be questioned", ur: "اس سے اس کے کاموں کا سوال نہیں ہوتا بلکہ ان سے سوال ہوگا" }, explanation: { en: "Allah's supreme authority - He judges, not judged", ur: "اللہ کا اعلیٰ اختیار - وہ فیصلہ کرتا ہے نہ کہ اس پر فیصلہ ہو" }, verseRef: "21:23" }
      ]
    },

    ibrahimStory: {
      name: "Ibrahim's Story - Breaking Idols",
      nameUr: "ابراہیم کا قصہ - بت شکنی",
      nameArabic: "قصة إبراهيم - تحطيم الأصنام",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَلَقَدْ آتَيْنَا إِبْرَاهِيمَ رُشْدَهُ", meaning: { en: "We gave Ibrahim his right guidance", ur: "ہم نے ابراہیم کو ان کی سمجھ عطا کی" }, explanation: { en: "Ibrahim received divine guidance from youth", ur: "ابراہیم کو بچپن سے الٰہی ہدایت ملی" }, verseRef: "21:51" },
        { term: "مَا هَٰذِهِ التَّمَاثِيلُ الَّتِي أَنتُمْ لَهَا عَاكِفُونَ", meaning: { en: "What are these statues to which you are devoted?", ur: "یہ کون سے مجسمے ہیں جن کے تم پجاری بنے ہو؟" }, explanation: { en: "Ibrahim questions idol worship", ur: "ابراہیم بت پرستی پر سوال اٹھاتے ہیں" }, verseRef: "21:52" },
        { term: "وَجَدْنَا آبَاءَنَا لَهَا عَابِدِينَ", meaning: { en: "We found our fathers worshipping them", ur: "ہم نے اپنے باپ دادا کو ان کی عبادت کرتے پایا" }, explanation: { en: "Blind following of ancestors", ur: "آباء و اجداد کی اندھی تقلید" }, verseRef: "21:53" },
        { term: "لَقَدْ كُنتُمْ أَنتُمْ وَآبَاؤُكُمْ فِي ضَلَالٍ مُّبِينٍ", meaning: { en: "You and your fathers were in clear error", ur: "تم اور تمہارے باپ دادا واضح گمراہی میں ہیں" }, explanation: { en: "Ibrahim boldly corrects both generations", ur: "ابراہیم نے دلیری سے دونوں نسلوں کی اصلاح کی" }, verseRef: "21:54" },
        { term: "تَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُم", meaning: { en: "By Allah, I will surely plan against your idols", ur: "اللہ کی قسم! میں تمہارے بتوں کے خلاف ضرور تدبیر کروں گا" }, explanation: { en: "Ibrahim's oath to destroy idols", ur: "ابراہیم کی بت شکنی کی قسم" }, verseRef: "21:57" },
        { term: "فَجَعَلَهُمْ جُذَاذًا إِلَّا كَبِيرًا لَّهُمْ", meaning: { en: "He broke them into fragments, except the largest", ur: "سب کو ٹکڑے ٹکڑے کر دیا سوائے سب سے بڑے کے" }, explanation: { en: "Smashed all idols except the big one", ur: "بڑے بت کے علاوہ سب بتوں کو توڑ دیا" }, verseRef: "21:58" },
        { term: "بَلْ فَعَلَهُ كَبِيرُهُمْ هَٰذَا فَاسْأَلُوهُمْ إِن كَانُوا يَنطِقُونَ", meaning: { en: "Rather, this - the largest of them - did it, so ask them, if they can speak", ur: "بلکہ یہ ان کے بڑے نے کیا ہے، ان سے پوچھو اگر بول سکتے ہوں" }, explanation: { en: "Ibrahim's brilliant logical trap", ur: "ابراہیم کا شاندار عقلی جال" }, verseRef: "21:63" },
        { term: "فَرَجَعُوا إِلَىٰ أَنفُسِهِمْ فَقَالُوا إِنَّكُمْ أَنتُمُ الظَّالِمُونَ", meaning: { en: "They returned to themselves and said, 'Indeed, you are the wrongdoers'", ur: "پھر اپنے آپ میں لوٹے اور کہا بے شک تم ہی ظالم ہو" }, explanation: { en: "Momentary realization of their error", ur: "لمحاتی طور پر اپنی غلطی کا احساس" }, verseRef: "21:64" },
        { term: "ثُمَّ نُكِسُوا عَلَىٰ رُءُوسِهِمْ", meaning: { en: "Then they reversed themselves", ur: "پھر اوندھے منہ پلٹ گئے" }, explanation: { en: "Reverted to stubbornness after realizing truth", ur: "حق پہچاننے کے بعد پھر ضد پر آ گئے" }, verseRef: "21:65" }
      ]
    },

    ibrahimInFire: {
      name: "Ibrahim Thrown in Fire",
      nameUr: "ابراہیم کو آگ میں ڈالنا",
      nameArabic: "إلقاء إبراهيم في النار",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "حَرِّقُوهُ وَانصُرُوا آلِهَتَكُمْ", meaning: { en: "Burn him and support your gods", ur: "اسے جلا دو اور اپنے معبودوں کی مدد کرو" }, explanation: { en: "Command to execute Ibrahim for insulting idols", ur: "بتوں کی توہین پر ابراہیم کو جلانے کا حکم" }, verseRef: "21:68" },
        { term: "قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ", meaning: { en: "We said, 'O fire, be coolness and safety upon Ibrahim'", ur: "ہم نے کہا اے آگ! ابراہیم پر ٹھنڈی اور سلامتی بن جا" }, explanation: { en: "Allah commands fire to become cool - miracle", ur: "اللہ نے آگ کو ٹھنڈا ہونے کا حکم دیا - معجزہ" }, verseRef: "21:69" },
        { term: "وَأَرَادُوا بِهِ كَيْدًا فَجَعَلْنَاهُمُ الْأَخْسَرِينَ", meaning: { en: "They intended for him harm, but We made them the losers", ur: "انہوں نے ان کے ساتھ فریب چاہا لیکن ہم نے انہیں سب سے زیادہ نقصان اٹھانے والا بنایا" }, explanation: { en: "Their plot backfired completely", ur: "ان کی سازش الٹی پڑ گئی" }, verseRef: "21:70" },
        { term: "وَنَجَّيْنَاهُ وَلُوطًا إِلَى الْأَرْضِ الَّتِي بَارَكْنَا فِيهَا", meaning: { en: "We saved him and Lut to the land We blessed", ur: "ہم نے انہیں اور لوط کو اس سرزمین کی طرف بچا لیا جس میں برکت رکھی" }, explanation: { en: "Migration to blessed land (Palestine/Sham)", ur: "بابرکت سرزمین (فلسطین/شام) کی طرف ہجرت" }, verseRef: "21:71" },
        { term: "وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ نَافِلَةً", meaning: { en: "We gave him Ishaq and Yaqub as an addition", ur: "ہم نے انہیں اسحاق اور یعقوب بطور اضافہ عطا کیا" }, explanation: { en: "Blessed with son and grandson", ur: "بیٹے اور پوتے کی نعمت سے نوازا" }, verseRef: "21:72" }
      ]
    },

    prophetLut: {
      name: "Prophet Lut",
      nameUr: "حضرت لوط",
      nameArabic: "النبي لوط",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَلُوطًا آتَيْنَاهُ حُكْمًا وَعِلْمًا", meaning: { en: "And to Lut We gave judgment and knowledge", ur: "اور لوط کو حکمت اور علم عطا کیا" }, explanation: { en: "Lut received wisdom and prophethood", ur: "لوط کو حکمت اور نبوت ملی" }, verseRef: "21:74" },
        { term: "وَنَجَّيْنَاهُ مِنَ الْقَرْيَةِ الَّتِي كَانَت تَّعْمَلُ الْخَبَائِثَ", meaning: { en: "We saved him from the city practicing wickedness", ur: "ہم نے اسے اس بستی سے بچایا جو گندے کام کرتی تھی" }, explanation: { en: "Lut rescued from corrupt Sodom", ur: "لوط کو فاسد سدوم سے بچایا گیا" }, verseRef: "21:74" },
        { term: "إِنَّهُمْ كَانُوا قَوْمَ سَوْءٍ فَاسِقِينَ", meaning: { en: "Indeed, they were a people of evil, defiantly disobedient", ur: "بے شک وہ بری اور نافرمان قوم تھے" }, explanation: { en: "Description of Lut's corrupt people", ur: "لوط کی فاسد قوم کی تفصیل" }, verseRef: "21:74" }
      ]
    },

    prophetNuh: {
      name: "Prophet Nuh",
      nameUr: "حضرت نوح",
      nameArabic: "النبي نوح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَنُوحًا إِذْ نَادَىٰ مِن قَبْلُ فَاسْتَجَبْنَا لَهُ", meaning: { en: "And Nuh, when he called before, so We responded to him", ur: "اور نوح، جب اس نے پہلے پکارا تو ہم نے قبول کیا" }, explanation: { en: "Allah answered Nuh's supplication", ur: "اللہ نے نوح کی دعا قبول فرمائی" }, verseRef: "21:76" },
        { term: "فَنَجَّيْنَاهُ وَأَهْلَهُ مِنَ الْكَرْبِ الْعَظِيمِ", meaning: { en: "We saved him and his family from great distress", ur: "ہم نے اسے اور اس کے گھر والوں کو بڑی مصیبت سے بچایا" }, explanation: { en: "Nuh and believers saved from the flood", ur: "نوح اور مومنین کو طوفان سے بچایا گیا" }, verseRef: "21:76" },
        { term: "وَنَصَرْنَاهُ مِنَ الْقَوْمِ الَّذِينَ كَذَّبُوا بِآيَاتِنَا", meaning: { en: "We aided him against the people who denied Our signs", ur: "ہم نے ان لوگوں کے خلاف اس کی مدد کی جنہوں نے ہماری نشانیاں جھٹلائیں" }, explanation: { en: "Divine victory over disbelievers", ur: "کافروں پر الٰہی فتح" }, verseRef: "21:77" },
        { term: "إِنَّهُمْ كَانُوا قَوْمَ سَوْءٍ فَأَغْرَقْنَاهُمْ أَجْمَعِينَ", meaning: { en: "Indeed, they were an evil people, so We drowned them all", ur: "بے شک وہ بری قوم تھے پس ہم نے سب کو غرق کر دیا" }, explanation: { en: "Complete destruction of Nuh's rejecters", ur: "نوح کے منکرین کی مکمل تباہی" }, verseRef: "21:77" }
      ]
    },

    prophetsDavidSolomon: {
      name: "Prophets Dawud and Sulayman",
      nameUr: "حضرت داؤد اور سلیمان",
      nameArabic: "النبيان داود وسليمان",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "وَدَاوُودَ وَسُلَيْمَانَ إِذْ يَحْكُمَانِ فِي الْحَرْثِ", meaning: { en: "And Dawud and Sulayman, when they judged concerning the field", ur: "اور داؤد اور سلیمان جب کھیت کے بارے میں فیصلہ کر رہے تھے" }, explanation: { en: "Father and son both given prophethood and wisdom", ur: "باپ بیٹے دونوں کو نبوت اور حکمت عطا ہوئی" }, verseRef: "21:78" },
        { term: "فَفَهَّمْنَاهَا سُلَيْمَانَ", meaning: { en: "We gave understanding of it to Sulayman", ur: "ہم نے سلیمان کو اس کی سمجھ دی" }, explanation: { en: "Sulayman given special insight in the case", ur: "سلیمان کو اس معاملے میں خاص بصیرت ملی" }, verseRef: "21:79" },
        { term: "وَكُلًّا آتَيْنَا حُكْمًا وَعِلْمًا", meaning: { en: "And to each We gave judgment and knowledge", ur: "اور دونوں کو حکمت اور علم عطا کیا" }, explanation: { en: "Both were wise, though Sulayman excelled in this case", ur: "دونوں حکیم تھے لیکن اس معاملے میں سلیمان ممتاز رہے" }, verseRef: "21:79" },
        { term: "وَسَخَّرْنَا مَعَ دَاوُودَ الْجِبَالَ يُسَبِّحْنَ وَالطَّيْرَ", meaning: { en: "We subjected with Dawud the mountains glorifying, and birds", ur: "ہم نے داؤد کے ساتھ پہاڑوں اور پرندوں کو تسبیح کرنے پر مسخر کیا" }, explanation: { en: "Mountains and birds praised Allah with Dawud", ur: "پہاڑوں اور پرندوں نے داؤد کے ساتھ اللہ کی تسبیح کی" }, verseRef: "21:79" },
        { term: "وَعَلَّمْنَاهُ صَنْعَةَ لَبُوسٍ لَّكُمْ", meaning: { en: "We taught him the making of armor for you", ur: "ہم نے انہیں تمہاری حفاظت کے لیے زرہ بنانا سکھایا" }, explanation: { en: "Dawud taught armor-making for protection", ur: "داؤد کو حفاظت کے لیے زرہ سازی سکھائی گئی" }, verseRef: "21:80" },
        { term: "وَلِسُلَيْمَانَ الرِّيحَ عَاصِفَةً", meaning: { en: "And to Sulayman [We subjected] the wind, blowing forcefully", ur: "اور سلیمان کے لیے تیز ہوا مسخر کر دی" }, explanation: { en: "Wind served Sulayman for travel", ur: "ہوا سلیمان کی سفر میں خدمت کرتی تھی" }, verseRef: "21:81" },
        { term: "وَمِنَ الشَّيَاطِينِ مَن يَغُوصُونَ لَهُ", meaning: { en: "And of the devils were those who dived for him", ur: "اور شیاطین میں سے جو اس کے لیے غوطے لگاتے تھے" }, explanation: { en: "Jinn worked under Sulayman's command", ur: "جنات سلیمان کے حکم سے کام کرتے تھے" }, verseRef: "21:82" }
      ]
    },

    prophetAyyub: {
      name: "Prophet Ayyub (Job)",
      nameUr: "حضرت ایوب",
      nameArabic: "النبي أيوب",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ", meaning: { en: "And Ayyub, when he called to his Lord, 'Indeed, adversity has touched me'", ur: "اور ایوب جب اپنے رب سے پکارا کہ مجھے تکلیف پہنچی ہے" }, explanation: { en: "Ayyub's humble supplication during illness", ur: "بیماری میں ایوب کی عاجزانہ دعا" }, verseRef: "21:83" },
        { term: "وَأَنتَ أَرْحَمُ الرَّاحِمِينَ", meaning: { en: "And You are the most merciful of the merciful", ur: "اور تو سب رحم کرنے والوں سے زیادہ رحم کرنے والا ہے" }, explanation: { en: "Acknowledging Allah's supreme mercy", ur: "اللہ کی اعلیٰ ترین رحمت کا اعتراف" }, verseRef: "21:83" },
        { term: "فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِن ضُرٍّ", meaning: { en: "So We responded to him and removed what afflicted him", ur: "تو ہم نے قبول کیا اور جو تکلیف تھی دور کر دی" }, explanation: { en: "Allah healed Ayyub after his patience", ur: "اللہ نے صبر کے بعد ایوب کو شفا دی" }, verseRef: "21:84" },
        { term: "وَآتَيْنَاهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ", meaning: { en: "We gave him his family and the like with them", ur: "ہم نے اس کا گھر والے اور ان جیسے اور بھی عطا کیے" }, explanation: { en: "Restored family and doubled blessings", ur: "خاندان بحال کیا اور نعمتیں دوگنی کیں" }, verseRef: "21:84" },
        { term: "رَحْمَةً مِّنْ عِندِنَا وَذِكْرَىٰ لِلْعَابِدِينَ", meaning: { en: "As mercy from Us and a reminder for worshippers", ur: "ہماری طرف سے رحمت اور عبادت گزاروں کے لیے نصیحت" }, explanation: { en: "His story is lesson for all who worship", ur: "ان کا قصہ تمام عبادت گزاروں کے لیے سبق ہے" }, verseRef: "21:84" }
      ]
    },

    prophetsIsmailIdrisZulKifl: {
      name: "Prophets Ismail, Idris, Dhul-Kifl",
      nameUr: "حضرت اسماعیل، ادریس، ذوالکفل",
      nameArabic: "الأنبياء إسماعيل وإدريس وذو الكفل",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ كُلٌّ مِّنَ الصَّابِرِينَ", meaning: { en: "And Ismail and Idris and Dhul-Kifl - all were of the patient", ur: "اور اسماعیل اور ادریس اور ذوالکفل - سب صبر کرنے والوں میں سے تھے" }, explanation: { en: "Three prophets praised for patience", ur: "تین انبیاء کی صبر پر تعریف" }, verseRef: "21:85" },
        { term: "وَأَدْخَلْنَاهُمْ فِي رَحْمَتِنَا", meaning: { en: "We admitted them into Our mercy", ur: "ہم نے انہیں اپنی رحمت میں داخل کیا" }, explanation: { en: "Allah's special mercy for them", ur: "ان کے لیے اللہ کی خاص رحمت" }, verseRef: "21:86" },
        { term: "إِنَّهُم مِّنَ الصَّالِحِينَ", meaning: { en: "Indeed, they were of the righteous", ur: "بے شک وہ نیکوکاروں میں سے تھے" }, explanation: { en: "Counted among the righteous", ur: "صالحین میں شمار ہوئے" }, verseRef: "21:86" }
      ]
    },

    prophetYunus: {
      name: "Prophet Yunus (Dhun-Nun)",
      nameUr: "حضرت یونس (ذوالنون)",
      nameArabic: "النبي يونس (ذو النون)",
      color: "#06B6D4",
      icon: "Heart",
      concepts: [
        { term: "وَذَا النُّونِ إِذ ذَّهَبَ مُغَاضِبًا", meaning: { en: "And Dhun-Nun (Yunus), when he went off in anger", ur: "اور ذوالنون (یونس) جب غصے میں چل دیے" }, explanation: { en: "Yunus left his people before permission", ur: "یونس اجازت سے پہلے اپنی قوم سے چلے گئے" }, verseRef: "21:87" },
        { term: "فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ", meaning: { en: "And thought We would not decree upon him", ur: "اور سمجھا کہ ہم اس پر تنگی نہیں کریں گے" }, explanation: { en: "Thought Allah would not restrict him", ur: "سمجھا کہ اللہ اسے نہیں پکڑے گا" }, verseRef: "21:87" },
        { term: "فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", meaning: { en: "He called out in the darknesses: There is no deity except You; exalted are You. Indeed, I was of the wrongdoers", ur: "اندھیروں میں پکارا: تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ظالموں میں سے تھا" }, explanation: { en: "Famous dua of Yunus from whale's belly - Tawheed + repentance", ur: "مچھلی کے پیٹ سے یونس کی مشہور دعا - توحید + توبہ" }, verseRef: "21:87" },
        { term: "فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ", meaning: { en: "So We responded to him and saved him from distress", ur: "پس ہم نے قبول کیا اور اسے غم سے نجات دی" }, explanation: { en: "Allah answered and rescued from whale", ur: "اللہ نے قبول کیا اور مچھلی سے چھڑایا" }, verseRef: "21:88" },
        { term: "وَكَذَٰلِكَ نُنجِي الْمُؤْمِنِينَ", meaning: { en: "And thus do We save the believers", ur: "اور اسی طرح ہم مومنوں کو نجات دیتے ہیں" }, explanation: { en: "Promise - Allah saves all sincere believers", ur: "وعدہ - اللہ تمام مخلص مومنوں کو بچاتا ہے" }, verseRef: "21:88" }
      ]
    },

    prophetZakariyyaYahya: {
      name: "Prophets Zakariyya and Yahya",
      nameUr: "حضرت زکریا اور یحییٰ",
      nameArabic: "النبيان زكريا ويحيى",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَزَكَرِيَّا إِذْ نَادَىٰ رَبَّهُ رَبِّ لَا تَذَرْنِي فَرْدًا", meaning: { en: "And Zakariyya, when he called to his Lord: My Lord, leave me not alone", ur: "اور زکریا جب اپنے رب سے پکارا: اے رب! مجھے اکیلا نہ چھوڑ" }, explanation: { en: "Zakariyya's desperate prayer for child", ur: "زکریا کی اولاد کے لیے بے قرار دعا" }, verseRef: "21:89" },
        { term: "وَأَنتَ خَيْرُ الْوَارِثِينَ", meaning: { en: "And You are the best of inheritors", ur: "اور تو بہترین وارث ہے" }, explanation: { en: "Acknowledging Allah even if no heir given", ur: "اللہ کا اعتراف چاہے وارث نہ بھی ملے" }, verseRef: "21:89" },
        { term: "فَاسْتَجَبْنَا لَهُ وَوَهَبْنَا لَهُ يَحْيَىٰ", meaning: { en: "So We responded to him, and We gave him Yahya", ur: "تو ہم نے قبول کیا اور اسے یحییٰ عطا کیا" }, explanation: { en: "Granted son Yahya despite old age", ur: "بڑھاپے کے باوجود بیٹا یحییٰ عطا کیا" }, verseRef: "21:90" },
        { term: "وَأَصْلَحْنَا لَهُ زَوْجَهُ", meaning: { en: "And We amended his wife for him", ur: "اور ہم نے اس کی بیوی کو ان کے لیے درست کر دیا" }, explanation: { en: "Wife made able to conceive", ur: "بیوی کو حاملہ ہونے کے قابل بنایا" }, verseRef: "21:90" },
        { term: "إِنَّهُمْ كَانُوا يُسَارِعُونَ فِي الْخَيْرَاتِ", meaning: { en: "Indeed, they used to hasten to good deeds", ur: "بے شک وہ نیکیوں میں جلدی کرتے تھے" }, explanation: { en: "Quality of prophets - racing to do good", ur: "انبیاء کی صفت - نیکی میں سبقت" }, verseRef: "21:90" },
        { term: "وَيَدْعُونَنَا رَغَبًا وَرَهَبًا", meaning: { en: "And called upon Us in hope and fear", ur: "اور امید اور خوف سے ہمیں پکارتے تھے" }, explanation: { en: "Balanced worship - hope and fear together", ur: "متوازن عبادت - امید اور خوف ایک ساتھ" }, verseRef: "21:90" },
        { term: "وَكَانُوا لَنَا خَاشِعِينَ", meaning: { en: "And were to Us humbly submissive", ur: "اور ہمارے سامنے عاجزی سے جھکنے والے تھے" }, explanation: { en: "Humility before Allah", ur: "اللہ کے سامنے عاجزی" }, verseRef: "21:90" }
      ]
    },

    prophetMaryamIsa: {
      name: "Maryam and Prophet Isa",
      nameUr: "مریم اور حضرت عیسیٰ",
      nameArabic: "مريم والنبي عيسى",
      color: "#EC4899",
      icon: "Sparkles",
      concepts: [
        { term: "وَالَّتِي أَحْصَنَتْ فَرْجَهَا", meaning: { en: "And she who guarded her chastity", ur: "اور وہ جس نے اپنی عصمت کی حفاظت کی" }, explanation: { en: "Maryam's purity praised", ur: "مریم کی پاکدامنی کی تعریف" }, verseRef: "21:91" },
        { term: "فَنَفَخْنَا فِيهَا مِن رُّوحِنَا", meaning: { en: "So We breathed into her of Our spirit", ur: "پس ہم نے اس میں اپنی روح پھونکی" }, explanation: { en: "Miraculous conception through divine spirit", ur: "الٰہی روح کے ذریعے معجزانہ حمل" }, verseRef: "21:91" },
        { term: "وَجَعَلْنَاهَا وَابْنَهَا آيَةً لِّلْعَالَمِينَ", meaning: { en: "We made her and her son a sign for the worlds", ur: "ہم نے اسے اور اس کے بیٹے کو جہانوں کے لیے نشانی بنایا" }, explanation: { en: "Maryam and Isa as signs of Allah's power", ur: "مریم اور عیسیٰ اللہ کی قدرت کی نشانیاں" }, verseRef: "21:91" }
      ]
    },

    oneUmmah: {
      name: "One Ummah - Unity of Message",
      nameUr: "ایک امت - پیغام کی وحدت",
      nameArabic: "أمة واحدة",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "إِنَّ هَٰذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً", meaning: { en: "Indeed this, your religion, is one religion", ur: "بے شک تمہاری یہ امت ایک ہی امت ہے" }, explanation: { en: "All prophets brought same message of Tawheed", ur: "تمام انبیاء توحید کا ایک ہی پیغام لائے" }, verseRef: "21:92" },
        { term: "وَأَنَا رَبُّكُمْ فَاعْبُدُونِ", meaning: { en: "And I am your Lord, so worship Me", ur: "اور میں تمہارا رب ہوں پس میری عبادت کرو" }, explanation: { en: "One Lord, one command: worship Him alone", ur: "ایک رب، ایک حکم: صرف اسی کی عبادت کرو" }, verseRef: "21:92" },
        { term: "وَتَقَطَّعُوا أَمْرَهُم بَيْنَهُمْ", meaning: { en: "But they divided their affair among themselves", ur: "لیکن لوگوں نے آپس میں اپنا معاملہ ٹکڑے ٹکڑے کر لیا" }, explanation: { en: "People split into sects despite one message", ur: "ایک پیغام کے باوجود لوگ فرقوں میں بٹ گئے" }, verseRef: "21:93" },
        { term: "كُلٌّ إِلَيْنَا رَاجِعُونَ", meaning: { en: "All will return to Us", ur: "سب ہماری طرف لوٹنے والے ہیں" }, explanation: { en: "Despite divisions, all return to Allah", ur: "تفرقے کے باوجود سب اللہ کی طرف لوٹیں گے" }, verseRef: "21:93" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameUr: "یومِ قیامت",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "يَوْمَ نَطْوِي السَّمَاءَ كَطَيِّ السِّجِلِّ لِلْكُتُبِ", meaning: { en: "The Day We will fold the heaven like folding a scroll", ur: "جس دن ہم آسمان کو طومار کی طرح لپیٹ دیں گے" }, explanation: { en: "Sky rolled up like a scroll - describing Judgment Day", ur: "آسمان طومار کی طرح لپیٹا جائے گا - قیامت کی تصویر" }, verseRef: "21:104" },
        { term: "كَمَا بَدَأْنَا أَوَّلَ خَلْقٍ نُّعِيدُهُ", meaning: { en: "As We began the first creation, We will repeat it", ur: "جیسے ہم نے پہلی تخلیق شروع کی ویسے ہی دوبارہ کریں گے" }, explanation: { en: "Recreation as easy as first creation", ur: "دوبارہ تخلیق پہلی تخلیق جتنی آسان" }, verseRef: "21:104" },
        { term: "وَعْدًا عَلَيْنَا إِنَّا كُنَّا فَاعِلِينَ", meaning: { en: "A promise binding upon Us. Indeed, We will do it", ur: "ہم پر لازم وعدہ ہے، بے شک ہم یہ کرنے والے ہیں" }, explanation: { en: "Divine promise - resurrection will occur", ur: "الٰہی وعدہ - قیامت ضرور آئے گی" }, verseRef: "21:104" },
        { term: "وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ", meaning: { en: "We will set up the scales of justice for Day of Resurrection", ur: "ہم قیامت کے دن انصاف کے ترازو رکھیں گے" }, explanation: { en: "Perfect scales - no injustice on that Day", ur: "کامل ترازو - اس دن کوئی ظلم نہیں" }, verseRef: "21:47" },
        { term: "فَلَا تُظْلَمُ نَفْسٌ شَيْئًا", meaning: { en: "No soul will be treated unjustly at all", ur: "کسی جان پر ذرا بھی ظلم نہیں ہوگا" }, explanation: { en: "Complete justice guaranteed", ur: "مکمل انصاف کی ضمانت" }, verseRef: "21:47" },
        { term: "وَإِن كَانَ مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ", meaning: { en: "Even if it be weight of a mustard seed", ur: "اگرچہ رائی کے دانے کے برابر بھی ہو" }, explanation: { en: "Smallest deeds will be weighed", ur: "چھوٹے سے چھوٹے اعمال بھی تولے جائیں گے" }, verseRef: "21:47" }
      ]
    },

    yajoojMajooj: {
      name: "Yajuj and Majuj (Gog and Magog)",
      nameUr: "یاجوج اور ماجوج",
      nameArabic: "يأجوج ومأجوج",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "حَتَّىٰ إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ", meaning: { en: "Until when Yajuj and Majuj have been opened", ur: "یہاں تک کہ جب یاجوج ماجوج کھول دیے جائیں گے" }, explanation: { en: "End times sign - barrier will be opened", ur: "آخری زمانے کی نشانی - رکاوٹ کھول دی جائے گی" }, verseRef: "21:96" },
        { term: "وَهُم مِّن كُلِّ حَدَبٍ يَنسِلُونَ", meaning: { en: "And they, from every elevation, descend", ur: "اور وہ ہر اونچائی سے تیزی سے اتریں گے" }, explanation: { en: "They will rush from every direction", ur: "وہ ہر طرف سے دوڑ پڑیں گے" }, verseRef: "21:96" },
        { term: "وَاقْتَرَبَ الْوَعْدُ الْحَقُّ", meaning: { en: "And the true promise has approached", ur: "اور سچا وعدہ قریب آ گیا" }, explanation: { en: "Sign that Judgment Day is near", ur: "نشانی کہ قیامت قریب ہے" }, verseRef: "21:97" }
      ]
    },

    idolsAndWorshippers: {
      name: "Idols and Their Worshippers",
      nameUr: "بت اور ان کے پجاری",
      nameArabic: "الأصنام وعابدوها",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "إِنَّكُمْ وَمَا تَعْبُدُونَ مِن دُونِ اللَّهِ حَصَبُ جَهَنَّمَ", meaning: { en: "Indeed, you and what you worship besides Allah are the firewood of Hell", ur: "بے شک تم اور جو تم اللہ کے سوا پوجتے ہو جہنم کا ایندھن ہیں" }, explanation: { en: "Both idols and idolaters fuel for Hellfire", ur: "بت اور بت پرست دونوں جہنم کا ایندھن ہیں" }, verseRef: "21:98" },
        { term: "أَنتُمْ لَهَا وَارِدُونَ", meaning: { en: "You are going to enter it", ur: "تم اس میں داخل ہونے والے ہو" }, explanation: { en: "Certainty of entering Hell", ur: "جہنم میں داخلے کا یقین" }, verseRef: "21:98" },
        { term: "لَوْ كَانَ هَٰؤُلَاءِ آلِهَةً مَّا وَرَدُوهَا", meaning: { en: "If these had been gods, they would not have come to it", ur: "اگر یہ معبود ہوتے تو اس میں نہ آتے" }, explanation: { en: "False gods cannot even save themselves", ur: "جھوٹے معبود خود کو بھی نہیں بچا سکتے" }, verseRef: "21:99" },
        { term: "وَكُلٌّ فِيهَا خَالِدُونَ", meaning: { en: "And all of them therein will abide eternally", ur: "اور سب اس میں ہمیشہ رہیں گے" }, explanation: { en: "Eternal punishment for idol worshippers", ur: "بت پرستوں کے لیے ابدی عذاب" }, verseRef: "21:99" }
      ]
    },

    believersReward: {
      name: "Reward for Believers",
      nameUr: "مومنوں کا اجر",
      nameArabic: "جزاء المؤمنين",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "إِنَّ الَّذِينَ سَبَقَتْ لَهُم مِّنَّا الْحُسْنَىٰ", meaning: { en: "Indeed, those for whom the best from Us has preceded", ur: "بے شک جن کے لیے ہماری طرف سے نیکی کا فیصلہ ہو چکا" }, explanation: { en: "Believers who have Allah's decree of good", ur: "وہ مومنین جن کے لیے اللہ کا بھلائی کا فیصلہ ہے" }, verseRef: "21:101" },
        { term: "أُولَٰئِكَ عَنْهَا مُبْعَدُونَ", meaning: { en: "They will be far removed from it", ur: "وہ اس سے دور رکھے جائیں گے" }, explanation: { en: "Kept far from Hell's sound and heat", ur: "جہنم کی آواز اور گرمی سے دور رکھے جائیں گے" }, verseRef: "21:101" },
        { term: "لَا يَسْمَعُونَ حَسِيسَهَا", meaning: { en: "They will not hear its sound", ur: "وہ اس کی سرسراہٹ بھی نہیں سنیں گے" }, explanation: { en: "Will not even hear Hell's noise", ur: "جہنم کا شور بھی نہیں سنیں گے" }, verseRef: "21:102" },
        { term: "وَهُمْ فِي مَا اشْتَهَتْ أَنفُسُهُمْ خَالِدُونَ", meaning: { en: "And they will be in what their souls desired, abiding eternally", ur: "اور جو ان کے دل چاہیں گے اس میں ہمیشہ رہیں گے" }, explanation: { en: "Every desire fulfilled in Paradise", ur: "جنت میں ہر خواہش پوری ہوگی" }, verseRef: "21:102" },
        { term: "لَا يَحْزُنُهُمُ الْفَزَعُ الْأَكْبَرُ", meaning: { en: "The greatest terror will not grieve them", ur: "بڑی گھبراہٹ انہیں غمگین نہیں کرے گی" }, explanation: { en: "Protected from all horrors of Judgment Day", ur: "قیامت کی تمام ہولناکیوں سے محفوظ" }, verseRef: "21:103" },
        { term: "وَتَتَلَقَّاهُمُ الْمَلَائِكَةُ هَٰذَا يَوْمُكُمُ الَّذِي كُنتُمْ تُوعَدُونَ", meaning: { en: "And the angels will meet them: This is your Day which you were promised", ur: "اور فرشتے ان کا استقبال کریں گے: یہ تمہارا وہ دن ہے جس کا تم سے وعدہ کیا گیا تھا" }, explanation: { en: "Angels welcome believers to Paradise", ur: "فرشتے مومنوں کا جنت میں استقبال کریں گے" }, verseRef: "21:103" }
      ]
    },

    inheritanceOfEarth: {
      name: "Inheritance of the Earth",
      nameUr: "زمین کی وراثت",
      nameArabic: "وراثة الأرض",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَلَقَدْ كَتَبْنَا فِي الزَّبُورِ مِن بَعْدِ الذِّكْرِ", meaning: { en: "We have written in the Zabur (Psalms) after the Reminder", ur: "ہم نے ذکر (تورات) کے بعد زبور میں لکھ دیا" }, explanation: { en: "Promise recorded in previous scriptures", ur: "وعدہ پچھلے صحیفوں میں درج ہے" }, verseRef: "21:105" },
        { term: "أَنَّ الْأَرْضَ يَرِثُهَا عِبَادِيَ الصَّالِحُونَ", meaning: { en: "The earth will be inherited by My righteous servants", ur: "زمین کے وارث میرے نیک بندے ہوں گے" }, explanation: { en: "Promise that righteous will ultimately prevail", ur: "وعدہ کہ نیک لوگ بالآخر غالب آئیں گے" }, verseRef: "21:105" },
        { term: "إِنَّ فِي هَٰذَا لَبَلَاغًا لِّقَوْمٍ عَابِدِينَ", meaning: { en: "Indeed, in this is notification for a worshipping people", ur: "بے شک اس میں عبادت گزار قوم کے لیے کافی پیغام ہے" }, explanation: { en: "Sufficient message for those who worship", ur: "عبادت کرنے والوں کے لیے کافی پیغام" }, verseRef: "21:106" }
      ]
    },

    prophetMuhammadMercy: {
      name: "Prophet Muhammad - Mercy to Worlds",
      nameUr: "نبی محمد ﷺ - جہانوں کے لیے رحمت",
      nameArabic: "النبي محمد رحمة للعالمين",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ", meaning: { en: "We have not sent you except as a mercy to the worlds", ur: "ہم نے آپ کو تمام جہانوں کے لیے رحمت بنا کر بھیجا" }, explanation: { en: "Prophet Muhammad sent as mercy to all creation, not just humans", ur: "نبی محمد صلی اللہ علیہ وسلم تمام مخلوقات کے لیے رحمت بنا کر بھیجے گئے" }, verseRef: "21:107" },
        { term: "إِنَّمَا يُوحَىٰ إِلَيَّ أَنَّمَا إِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ", meaning: { en: "It is only revealed to me that your god is one God", ur: "مجھ پر بس یہی وحی کی جاتی ہے کہ تمہارا معبود ایک ہی معبود ہے" }, explanation: { en: "Core revelation: One God", ur: "بنیادی وحی: ایک خدا" }, verseRef: "21:108" },
        { term: "فَهَلْ أَنتُم مُّسْلِمُونَ", meaning: { en: "So will you submit [to Him]?", ur: "تو کیا تم اسلام لاؤ گے؟" }, explanation: { en: "Final invitation to Islam (submission)", ur: "اسلام (فرمانبرداری) کی آخری دعوت" }, verseRef: "21:108" }
      ]
    },

    finalSupplication: {
      name: "Final Supplication",
      nameUr: "آخری دعا",
      nameArabic: "الدعاء الختامي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "رَبِّ احْكُم بِالْحَقِّ", meaning: { en: "My Lord, judge between us in truth", ur: "اے میرے رب! حق کے ساتھ فیصلہ فرما" }, explanation: { en: "Prophet asks Allah to judge with truth", ur: "نبی اللہ سے حق پر فیصلے کی دعا کرتے ہیں" }, verseRef: "21:112" },
        { term: "وَرَبُّنَا الرَّحْمَٰنُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ", meaning: { en: "And our Lord is the Most Merciful, the one whose help is sought against what you describe", ur: "اور ہمارا رب رحمان ہے جس سے تمہاری باتوں کے خلاف مدد مانگی جاتی ہے" }, explanation: { en: "Surah ends with Ar-Rahman and seeking help against false claims", ur: "سورۃ الرحمٰن کے نام اور جھوٹے دعووں کے خلاف مدد مانگنے پر ختم ہوتی ہے" }, verseRef: "21:112" }
      ]
    }
  },

  relationships: [
    { from: "اقترب للناس حسابهم", to: "غفلة", type: "contrast", description: { en: "Accountability near yet people heedless", ur: "حساب قریب ہے مگر لوگ غافل ہیں" } },
    { from: "لا إله إلا أنا", to: "الأنبياء", type: "core", description: { en: "All prophets brought same Tawheed message", ur: "تمام انبیاء توحید کا ایک ہی پیغام لائے" } },
    { from: "لو كان فيهما آلهة", to: "لفسدتا", type: "logical-proof", description: { en: "Multiple gods would cause cosmic chaos", ur: "متعدد معبود کائناتی تباہی لاتے" } },
    { from: "يا نار كوني برداً وسلاماً", to: "إبراهيم", type: "miracle", description: { en: "Fire obeyed Allah and cooled for Ibrahim", ur: "آگ نے اللہ کا حکم مانا اور ابراہیم کے لیے ٹھنڈی ہو گئی" } },
    { from: "أصنام", to: "حصب جهنم", type: "consequence", description: { en: "Idols become fuel for Hell with worshippers", ur: "بت اپنے پجاریوں کے ساتھ جہنم کا ایندھن بنیں گے" } },
    { from: "يأجوج ومأجوج", to: "الوعد الحق", type: "sign", description: { en: "Their release signals approaching Judgment", ur: "ان کا نکلنا قیامت قریب آنے کی نشانی ہے" } },
    { from: "رحمة للعالمين", to: "إله واحد", type: "purpose", description: { en: "Mercy sent to establish Tawheed", ur: "رحمت توحید قائم کرنے کے لیے بھیجی گئی" } },
    { from: "لا إله إلا أنت", to: "نجّيناه من الغمّ", type: "result", description: { en: "Yunus's dua of Tawheed led to rescue", ur: "یونس کی توحید کی دعا نے نجات دلائی" } },
    { from: "الموازين القسط", to: "مثقال حبة", type: "precision", description: { en: "Scales so precise they weigh mustard seeds", ur: "ترازو اتنے درست کہ رائی کا دانہ بھی تولیں" } },
    { from: "أمتكم أمة واحدة", to: "تقطّعوا", type: "tragedy", description: { en: "One Ummah divided by people", ur: "ایک امت لوگوں نے تقسیم کر دی" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Warning of Judgment", verses: "21:1-10", description: { en: "Opening warning - accountability approaches, people heedless", ur: "ابتدائی انتباہ - حساب قریب آ رہا ہے، لوگ غافل ہیں" } },
      { stage: 2, theme: "Destroyed Nations", verses: "21:11-20", description: { en: "Reminder of nations destroyed for rejection", ur: "انکار کی وجہ سے تباہ شدہ اقوام کی یاددہانی" } },
      { stage: 3, theme: "Proofs of Tawheed", verses: "21:21-33", description: { en: "Logical arguments for one God, creation signs", ur: "ایک خدا کے لیے عقلی دلائل، تخلیق کی نشانیاں" } },
      { stage: 4, theme: "All Prophets Human", verses: "21:34-47", description: { en: "Prophets mortal, scales of justice", ur: "انبیاء فانی تھے، انصاف کے ترازو" } },
      { stage: 5, theme: "Ibrahim's Story", verses: "21:51-73", description: { en: "Breaking idols, thrown in fire, saved", ur: "بت شکنی، آگ میں ڈالا گیا، بچایا گیا" } },
      { stage: 6, theme: "Lut and Nuh", verses: "21:74-77", description: { en: "Saved from corrupt peoples and flood", ur: "فاسد قوموں اور طوفان سے بچائے گئے" } },
      { stage: 7, theme: "Dawud and Sulayman", verses: "21:78-82", description: { en: "Wisdom, control over nature and jinn", ur: "حکمت، فطرت اور جنات پر اختیار" } },
      { stage: 8, theme: "Ayyub's Patience", verses: "21:83-84", description: { en: "Model of patience, prayer answered", ur: "صبر کا نمونہ، دعا قبول ہوئی" } },
      { stage: 9, theme: "Ismail, Idris, Dhul-Kifl", verses: "21:85-86", description: { en: "Praised for patience and righteousness", ur: "صبر اور نیکی پر تعریف" } },
      { stage: 10, theme: "Yunus's Repentance", verses: "21:87-88", description: { en: "Famous dua from darkness, saved from whale", ur: "اندھیروں سے مشہور دعا، مچھلی سے نجات" } },
      { stage: 11, theme: "Zakariyya and Yahya", verses: "21:89-90", description: { en: "Prayer for child answered", ur: "اولاد کے لیے دعا قبول ہوئی" } },
      { stage: 12, theme: "Maryam and Isa", verses: "21:91", description: { en: "Miracle of virgin birth", ur: "کنواری سے پیدائش کا معجزہ" } },
      { stage: 13, theme: "One Ummah", verses: "21:92-95", description: { en: "Unity of prophetic message", ur: "نبوی پیغام کی وحدت" } },
      { stage: 14, theme: "End Times Signs", verses: "21:96-100", description: { en: "Yajuj Majuj, idols in Hell", ur: "یاجوج ماجوج، بت جہنم میں" } },
      { stage: 15, theme: "Paradise Awaits Believers", verses: "21:101-106", description: { en: "Believers protected, inherit earth", ur: "مومنین محفوظ، زمین کے وارث" } },
      { stage: 16, theme: "Conclusion", verses: "21:107-112", description: { en: "Prophet as mercy, final dua", ur: "نبی بطور رحمت، آخری دعا" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Urgency of accountability", ur: "حساب کی فوری اہمیت" }, how: { en: "Live as if judgment is tomorrow", ur: "ایسے جیو جیسے کل قیامت ہے" }, verse: "21:1" },
      { principle: { en: "Question blind following", ur: "اندھی تقلید پر سوال اٹھاؤ" }, how: { en: "Ibrahim questioned ancestors - verify your beliefs", ur: "ابراہیم نے آباء پر سوال اٹھایا - اپنے عقائد کی تصدیق کرو" }, verse: "21:53-54" },
      { principle: { en: "Trust Allah in trials", ur: "آزمائشوں میں اللہ پر بھروسا" }, how: { en: "Fire became cool for Ibrahim - Allah protects", ur: "آگ ابراہیم کے لیے ٹھنڈی ہوگئی - اللہ حفاظت کرتا ہے" }, verse: "21:69" },
      { principle: { en: "Patience in suffering", ur: "تکلیف میں صبر" }, how: { en: "Ayyub's patience rewarded - endure difficulties", ur: "ایوب کے صبر کا صلہ ملا - مشکلات برداشت کرو" }, verse: "21:83-84" },
      { principle: { en: "Repent immediately", ur: "فوری توبہ کرو" }, how: { en: "Yunus's dua - admit wrongdoing, declare Tawheed", ur: "یونس کی دعا - غلطی کا اعتراف کرو، توحید کا اعلان کرو" }, verse: "21:87" },
      { principle: { en: "Race to do good", ur: "نیکی میں سبقت کرو" }, how: { en: "Prophets hastened to good deeds - don't delay", ur: "انبیاء نیکیوں میں جلدی کرتے تھے - تاخیر نہ کرو" }, verse: "21:90" },
      { principle: { en: "Balance hope and fear", ur: "امید اور خوف میں توازن" }, how: { en: "Call upon Allah with hope (reward) and fear (punishment)", ur: "اللہ کو امید (ثواب) اور خوف (عذاب) سے پکارو" }, verse: "21:90" },
      { principle: { en: "Unity of believers", ur: "مومنوں کا اتحاد" }, how: { en: "One Ummah - avoid sectarianism", ur: "ایک امت - فرقہ واریت سے بچو" }, verse: "21:92" },
      { principle: { en: "Every deed matters", ur: "ہر عمل اہم ہے" }, how: { en: "Even mustard seed weight is recorded", ur: "رائی کے دانے کے برابر بھی ریکارڈ ہے" }, verse: "21:47" },
      { principle: { en: "Spread mercy", ur: "رحمت پھیلاؤ" }, how: { en: "Prophet was mercy - embody mercy in dealings", ur: "نبی رحمت تھے - معاملات میں رحمت اپناؤ" }, verse: "21:107" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Prophets", ur: "انبیاء کی سورۃ" },
    insight: { en: "Al-Anbiya is unique in mentioning 18 prophets by name: Ibrahim, Lut, Nuh, Dawud, Sulayman, Ayyub, Ismail, Ishaq, Yaqub, Musa, Harun, Ismail, Idris, Dhul-Kifl, Yunus, Zakariyya, Yahya, and Isa (plus Maryam). The surah emphasizes that ALL prophets brought the same message of Tawheed (21:25) and were human beings who ate food and died (21:8). Ibrahim's story (breaking idols, surviving fire) takes center stage as the archetypal confrontation with polytheism. The surah also contains one of the most powerful duas: 'La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimin' (21:87) - the supplication of Yunus that the Prophet said whoever recites it in distress will be answered. The surah opens with approaching judgment (21:1) and ends with seeking Allah's judgment (21:112), forming a perfect frame.", ur: "الانبیاء 18 انبیاء کے نام ذکر کرنے میں منفرد ہے: ابراہیم، لوط، نوح، داؤد، سلیمان، ایوب، اسماعیل، اسحاق، یعقوب، موسیٰ، ہارون، اسماعیل، ادریس، ذوالکفل، یونس، زکریا، یحییٰ اور عیسیٰ (نیز مریم)۔ سورۃ اس بات پر زور دیتی ہے کہ تمام انبیاء توحید کا ایک ہی پیغام لائے (21:25) اور وہ انسان تھے جو کھانا کھاتے اور مرتے تھے (21:8)۔ ابراہیم کا قصہ (بت شکنی، آگ سے بچنا) شرک سے مقابلے کے نمونے کے طور پر مرکزی ہے۔ سورۃ میں سب سے طاقتور دعاؤں میں سے ایک ہے: 'لا الٰہ الا انت سبحانک انی کنت من الظالمین' (21:87) - یونس کی دعا جس کے بارے میں نبی نے فرمایا کہ جو مصیبت میں پڑھے اس کی دعا قبول ہوگی۔ سورۃ قیامت کے قریب آنے سے شروع ہوتی ہے (21:1) اور اللہ کے فیصلے کی درخواست پر ختم ہوتی ہے (21:112)، ایک کامل دائرہ بناتی ہے۔" }
  },

  historicalContext: {
    note: { en: "This Makkan surah addresses the Quraysh's objections to prophethood: Why a human messenger? Where are the miracles? The surah responds by citing all previous prophets as human, their miracles as historical facts, and Tawheed as the unchanged core message. The detailed Ibrahim narrative directly countered Quraysh pride in their Abrahamic lineage while worshipping idols - showing Ibrahim himself destroyed idols. The mention of inheriting the earth (21:105) gave hope to persecuted Makkan Muslims that they would ultimately prevail.", ur: "یہ مکی سورۃ قریش کے نبوت پر اعتراضات کا جواب دیتی ہے: انسان رسول کیوں؟ معجزے کہاں ہیں؟ سورۃ جواب دیتی ہے کہ تمام پچھلے انبیاء انسان تھے، ان کے معجزے تاریخی حقائق ہیں، اور توحید ہمیشہ سے بنیادی پیغام رہا۔ ابراہیم کا تفصیلی بیان قریش کے اس فخر کا براہ راست جواب تھا کہ وہ ابراہیم کی نسل ہیں مگر بت پوجتے ہیں - جبکہ خود ابراہیم نے بت توڑے۔ زمین کی وراثت کا ذکر (21:105) مظلوم مکی مسلمانوں کو امید دیتا تھا کہ وہ بالآخر غالب آئیں گے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "اقْتَرَبَ", example: { en: "Form VIII verb", ur: "باب افتعال کا فعل" }, effect: { en: "Intensive - drawing very near, not just approaching", ur: "شدت - بہت قریب آنا، محض قریب آنا نہیں" } },
      { feature: "جُذَاذًا", example: { en: "Fragments/pieces", ur: "ٹکڑے ٹکڑے/ریزہ ریزہ" }, effect: { en: "Intensive plural - thoroughly smashed", ur: "شدید جمع - مکمل طور پر توڑ ڈالا" } },
      { feature: "لَأَكِيدَنَّ", example: { en: "Emphatic nun + qasam", ur: "نون تاکید + قسم" }, effect: { en: "Triple emphasis on Ibrahim's oath", ur: "ابراہیم کی قسم پر تین گنا تاکید" } },
      { feature: "نُكِسُوا عَلَىٰ رُءُوسِهِمْ", example: { en: "Turned upside down on heads", ur: "سروں کے بل الٹ دیے گئے" }, effect: { en: "Idiom for complete reversal/confusion", ur: "مکمل الٹ پلٹ/حیرانی کا محاورہ" } },
      { feature: "ذَا النُّونِ", example: { en: "The one of the fish", ur: "مچھلی والا" }, effect: { en: "Epithet for Yunus - famous association", ur: "یونس کا لقب - مشہور پہچان" } },
      { feature: "الظُّلُمَاتِ", example: { en: "The darknesses (plural)", ur: "اندھیرے (جمع)" }, effect: { en: "Triple darkness: night, sea, whale", ur: "تین اندھیرے: رات، سمندر، مچھلی" } },
      { feature: "أُمَّتُكُمْ أُمَّةً وَاحِدَةً", example: { en: "Repetition with hal accusative", ur: "حال منصوب کے ساتھ تکرار" }, effect: { en: "Emphatic - your nation truly one nation", ur: "تاکید - تمہاری امت واقعی ایک امت ہے" } },
      { feature: "كَطَيِّ السِّجِلِّ", example: { en: "Like rolling a scroll", ur: "طومار لپیٹنے کی طرح" }, effect: { en: "Vivid imagery of sky being rolled up", ur: "آسمان لپیٹے جانے کی واضح تصویر" } }
    ]
  },

  famousDuas: {
    duas: [
      {
        arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        transliteration: "La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimin",
        meaning: { en: "There is no deity except You; exalted are You. Indeed, I was of the wrongdoers", ur: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ظالموں میں سے تھا" },
        context: { en: "Dua of Yunus from whale's belly", ur: "مچھلی کے پیٹ سے یونس کی دعا" },
        verse: "21:87",
        benefit: { en: "Prophet said whoever recites it in distress will be answered", ur: "نبی نے فرمایا جو مصیبت میں پڑھے اس کی دعا قبول ہوگی" }
      },
      {
        arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
        transliteration: "Rabbi la tadherni fardan wa Anta khayrul-warithin",
        meaning: { en: "My Lord, do not leave me alone, and You are the best of inheritors", ur: "اے میرے رب! مجھے اکیلا نہ چھوڑ اور تو بہترین وارث ہے" },
        context: { en: "Dua of Zakariyya for a child", ur: "زکریا کی اولاد کے لیے دعا" },
        verse: "21:89",
        benefit: { en: "Dua for offspring while accepting Allah's will", ur: "اللہ کی مرضی قبول کرتے ہوئے اولاد کی دعا" }
      },
      {
        arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
        transliteration: "Anni massaniya-ddurru wa Anta arham-ur-rahimin",
        meaning: { en: "Indeed, adversity has touched me, and You are the most merciful of the merciful", ur: "بے شک مجھے تکلیف پہنچی ہے اور تو سب سے زیادہ رحم کرنے والا ہے" },
        context: { en: "Dua of Ayyub during illness", ur: "بیماری میں ایوب کی دعا" },
        verse: "21:83",
        benefit: { en: "Model of humble supplication in hardship", ur: "مشکل میں عاجزانہ دعا کا نمونہ" }
      }
    ]
  },

  prophetsMentioned: {
    list: [
      { name: "Ibrahim", verses: "21:51-73", role: { en: "Central figure - broke idols, survived fire", ur: "مرکزی شخصیت - بت توڑے، آگ سے بچے" } },
      { name: "Lut", verses: "21:71, 74-75", role: { en: "Saved from wicked city", ur: "بدکار شہر سے بچائے گئے" } },
      { name: "Nuh", verses: "21:76-77", role: { en: "Saved from flood, people drowned", ur: "طوفان سے بچائے گئے، قوم ڈوبی" } },
      { name: "Dawud", verses: "21:78-80", role: { en: "Given wisdom, mountains glorified with him", ur: "حکمت عطا ہوئی، پہاڑوں نے ان کے ساتھ تسبیح کی" } },
      { name: "Sulayman", verses: "21:78-82", role: { en: "Given special understanding, controlled wind and jinn", ur: "خاص سمجھ عطا ہوئی، ہوا اور جنات پر اختیار" } },
      { name: "Ayyub", verses: "21:83-84", role: { en: "Model of patience in suffering", ur: "تکلیف میں صبر کا نمونہ" } },
      { name: "Ismail", verses: "21:85", role: { en: "Praised for patience", ur: "صبر پر تعریف" } },
      { name: "Ishaq", verses: "21:72", role: { en: "Gift to Ibrahim", ur: "ابراہیم کو تحفہ" } },
      { name: "Yaqub", verses: "21:72", role: { en: "Additional gift to Ibrahim", ur: "ابراہیم کو اضافی تحفہ" } },
      { name: "Idris", verses: "21:85", role: { en: "Praised for patience", ur: "صبر پر تعریف" } },
      { name: "Dhul-Kifl", verses: "21:85", role: { en: "Praised for patience", ur: "صبر پر تعریف" } },
      { name: "Yunus (Dhun-Nun)", verses: "21:87-88", role: { en: "Repented in whale, saved", ur: "مچھلی میں توبہ کی، بچائے گئے" } },
      { name: "Zakariyya", verses: "21:89-90", role: { en: "Prayed for child, given Yahya", ur: "اولاد کے لیے دعا کی، یحییٰ عطا ہوئے" } },
      { name: "Yahya", verses: "21:90", role: { en: "Gift to Zakariyya", ur: "زکریا کو تحفہ" } },
      { name: "Maryam", verses: "21:91", role: { en: "Guarded chastity, bore Isa", ur: "عصمت کی حفاظت کی، عیسیٰ کو جنم دیا" } },
      { name: "Isa", verses: "21:91", role: { en: "Sign along with his mother", ur: "اپنی ماں کے ساتھ نشانی" } },
      { name: "Musa", verses: "21:48", role: { en: "Given Furqan (criterion)", ur: "فرقان (کسوٹی) عطا ہوا" } },
      { name: "Harun", verses: "21:48", role: { en: "Given Furqan with Musa", ur: "موسیٰ کے ساتھ فرقان عطا ہوا" } }
    ]
  },

  keyVerses: {
    verses: [
      { verse: "21:25", theme: { en: "Core Message", ur: "بنیادی پیغام" }, text: { en: "All messengers sent with same message: La ilaha illa Ana", ur: "تمام رسول ایک ہی پیغام کے ساتھ بھیجے گئے: لا الٰہ الا انا" } },
      { verse: "21:22", theme: { en: "Logical Proof", ur: "عقلی دلیل" }, text: { en: "Multiple gods would cause cosmic corruption", ur: "متعدد معبود کائناتی تباہی کا سبب بنتے" } },
      { verse: "21:69", theme: { en: "Miracle", ur: "معجزہ" }, text: { en: "Fire commanded to be cool and safe for Ibrahim", ur: "آگ کو ابراہیم کے لیے ٹھنڈا اور سلامتی بننے کا حکم" } },
      { verse: "21:87", theme: { en: "Famous Dua", ur: "مشہور دعا" }, text: { en: "Yunus's supplication from darknesses", ur: "اندھیروں سے یونس کی دعا" } },
      { verse: "21:92", theme: { en: "Unity", ur: "وحدت" }, text: { en: "Your Ummah is one Ummah", ur: "تمہاری امت ایک امت ہے" } },
      { verse: "21:107", theme: { en: "Prophet's Role", ur: "نبی کا کردار" }, text: { en: "Sent only as mercy to the worlds", ur: "صرف جہانوں کے لیے رحمت بنا کر بھیجا" } },
      { verse: "21:47", theme: { en: "Justice", ur: "انصاف" }, text: { en: "Scales of justice - even mustard seed weighed", ur: "انصاف کے ترازو - رائی کا دانہ بھی تولا جائے گا" } },
      { verse: "21:104", theme: { en: "Day of Judgment", ur: "یومِ قیامت" }, text: { en: "Sky folded like scroll", ur: "آسمان طومار کی طرح لپیٹا جائے گا" } }
    ]
  }
};

export default ONTOLOGY;
