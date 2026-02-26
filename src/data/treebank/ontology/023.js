/**
 * Surah Al-Mu'minun (23) - Ontology of Quranic Concepts
 * The Believers - 118 Ayahs, Makki
 *
 * Theme: Characteristics of successful believers, human creation stages,
 *        stories of prophets, Day of Judgment, and ultimate success criteria
 *
 * Named after the believers (al-mu'minun) mentioned in the opening verse.
 * Opens with "Successful indeed are the believers" - defining true success.
 */

export const ONTOLOGY = {
  surahId: 23,
  surahName: "Al-Mu'minun",
  surahNameArabic: "المؤمنون",
  revelationType: "Makki",
  totalAyahs: 118,

  categories: {
    believersQualities: {
      name: "Qualities of Successful Believers",
      nameUr: "کامیاب مومنوں کی صفات",
      nameArabic: "صفات المؤمنين الفائزين",
      color: "#22C55E",
      icon: "Star",
      concepts: [
        { term: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ", meaning: { en: "Successful indeed are the believers", ur: "بے شک مومن کامیاب ہو گئے" }, explanation: { en: "Falah = comprehensive success (spiritual, worldly, eternal). Past tense (aflaha) indicates certainty - their success is guaranteed", ur: "فلاح = جامع کامیابی (روحانی، دنیاوی، ابدی)۔ ماضی کا صیغہ (افلح) یقین کی علامت - ان کی کامیابی یقینی ہے" }, verseRef: "23:1" },
        { term: "خَاشِعُونَ فِي صَلَاتِهِمْ", meaning: { en: "Humble in their prayers", ur: "اپنی نمازوں میں خشوع کرنے والے" }, explanation: { en: "Khushu' = heart focus + body stillness. Not just praying, but being fully present with Allah", ur: "خشوع = دل کی توجہ + جسم کا سکون۔ صرف نماز پڑھنا نہیں بلکہ مکمل طور پر اللہ کے ساتھ حاضر ہونا" }, verseRef: "23:2" },
        { term: "عَنِ اللَّغْوِ مُعْرِضُونَ", meaning: { en: "Turning away from vain talk", ur: "بے ہودہ باتوں سے اعراض کرنے والے" }, explanation: { en: "Laghw = useless speech, gossip, anything without benefit. True believers avoid wasting time", ur: "لغو = بے فائدہ بات، غیبت، ہر بے مقصد چیز۔ سچے مومن وقت ضائع نہیں کرتے" }, verseRef: "23:3" },
        { term: "لِلزَّكَاةِ فَاعِلُونَ", meaning: { en: "Actively giving zakah", ur: "زکوٰة ادا کرنے والے" }, explanation: { en: "Fa'ilun = doers, not just givers. Active purification through charity", ur: "فاعلون = عمل کرنے والے، صرف دینے والے نہیں۔ صدقے سے فعال تزکیہ" }, verseRef: "23:4" },
        { term: "لِفُرُوجِهِمْ حَافِظُونَ", meaning: { en: "Guarding their private parts", ur: "اپنی شرمگاہوں کی حفاظت کرنے والے" }, explanation: { en: "Sexual purity - except with spouses. Protecting chastity is a sign of faith", ur: "جنسی پاکدامنی - بیویوں کے سوا۔ عفت کی حفاظت ایمان کی نشانی" }, verseRef: "23:5-6" },
        { term: "لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ", meaning: { en: "Faithful to trusts and promises", ur: "اپنی امانتوں اور عہد کی نگہبانی کرنے والے" }, explanation: { en: "Amanah = trusts (responsibilities). 'Ahd = covenants. Believers honor both", ur: "امانت = ذمہ داریاں۔ عہد = معاہدے۔ مومن دونوں کا پاس کرتے ہیں" }, verseRef: "23:8" },
        { term: "عَلَىٰ صَلَوَاتِهِمْ يُحَافِظُونَ", meaning: { en: "Guarding their prayers", ur: "اپنی نمازوں کی حفاظت کرنے والے" }, explanation: { en: "Not just praying but GUARDING prayers - timing, quality, consistency", ur: "صرف نماز نہیں بلکہ نمازوں کی حفاظت - وقت، معیار، استقامت" }, verseRef: "23:9" },
        { term: "هُمُ الْوَارِثُونَ", meaning: { en: "They are the inheritors", ur: "وہی وارث ہیں" }, explanation: { en: "Inheritors of Firdaus - highest level of Paradise. Ultimate inheritance", ur: "فردوس کے وارث - جنت کا اعلیٰ ترین درجہ۔ حتمی وراثت" }, verseRef: "23:10-11" }
      ]
    },

    humanCreation: {
      name: "Stages of Human Creation",
      nameUr: "انسانی تخلیق کے مراحل",
      nameArabic: "مراحل خلق الإنسان",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "سُلَالَةٍ مِّن طِينٍ", meaning: { en: "Extract of clay", ur: "مٹی کے خلاصے سے" }, explanation: { en: "Sulalah = essence, extract. Human origin from earth's elements", ur: "سلالہ = جوہر، خلاصہ۔ انسان کی اصل زمین کے عناصر سے" }, verseRef: "23:12" },
        { term: "نُطْفَةً فِي قَرَارٍ مَّكِينٍ", meaning: { en: "Drop in a secure lodging", ur: "محفوظ ٹھکانے میں نطفہ" }, explanation: { en: "Nutfah = tiny drop (sperm). Qarar makeen = womb as secure dwelling", ur: "نطفہ = چھوٹا قطرہ۔ قرارِ مکین = رحم بطور محفوظ ٹھکانا" }, verseRef: "23:13" },
        { term: "عَلَقَةً", meaning: { en: "Clinging clot", ur: "لوتھڑا" }, explanation: { en: "'Alaqah = clot that clings. Embryonic stage attached to uterine wall", ur: "علقہ = چپکنے والا لوتھڑا۔ جنین رحم کی دیوار سے جڑا ہوتا ہے" }, verseRef: "23:14" },
        { term: "مُضْغَةً", meaning: { en: "Chewed substance", ur: "گوشت کا لوتھڑا" }, explanation: { en: "Mudghah = like chewed meat. Embryo at 4 weeks resembles this", ur: "مضغہ = چبائے ہوئے گوشت جیسا۔ 4 ہفتے کا جنین اس جیسا" }, verseRef: "23:14" },
        { term: "عِظَامًا", meaning: { en: "Bones", ur: "ہڈیاں" }, explanation: { en: "Skeleton formation - structural framework develops", ur: "ڈھانچے کی تشکیل - ساختی ڈھانچہ بنتا ہے" }, verseRef: "23:14" },
        { term: "لَحْمًا", meaning: { en: "Flesh", ur: "گوشت" }, explanation: { en: "Muscles covering bones. Lahm wraps around 'izam", ur: "پٹھے ہڈیوں کو ڈھانپتے ہیں۔ لحم عظام کے گرد لپٹتا ہے" }, verseRef: "23:14" },
        { term: "خَلْقًا آخَرَ", meaning: { en: "Another creation", ur: "ایک اور مخلوق" }, explanation: { en: "Soul breathed in - transformation from biological to spiritual being", ur: "روح پھونکی جاتی ہے - حیاتیاتی سے روحانی وجود میں تبدیلی" }, verseRef: "23:14" },
        { term: "فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ", meaning: { en: "Blessed is Allah, best of creators", ur: "بابرکت ہے اللہ، سب سے بہترین خالق" }, explanation: { en: "Exclamation of awe at divine creative power. Ahsan = most excellent", ur: "الٰہی تخلیقی قدرت پر حیرت کا اظہار۔ احسن = سب سے عمدہ" }, verseRef: "23:14" }
      ]
    },

    deathAndResurrection: {
      name: "Death and Resurrection",
      nameUr: "موت اور قیامت",
      nameArabic: "الموت والبعث",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "ثُمَّ إِنَّكُم بَعْدَ ذَٰلِكَ لَمَيِّتُونَ", meaning: { en: "Then after that you will die", ur: "پھر اس کے بعد تم ضرور مرنے والے ہو" }, explanation: { en: "Certainty of death - every soul will taste it", ur: "موت کا یقین - ہر جان نے اسے چکھنا ہے" }, verseRef: "23:15" },
        { term: "ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ تُبْعَثُونَ", meaning: { en: "Then on Day of Resurrection you will be raised", ur: "پھر قیامت کے دن تم ضرور اٹھائے جاؤ گے" }, explanation: { en: "Resurrection guaranteed - same power that created can recreate", ur: "قیامت یقینی - جس نے بنایا وہی دوبارہ بنا سکتا ہے" }, verseRef: "23:16" },
        { term: "سَبْعَ طَرَائِقَ", meaning: { en: "Seven pathways/heavens", ur: "سات راستے/آسمان" }, explanation: { en: "Seven heavens above - cosmic architecture showing Allah's power", ur: "اوپر سات آسمان - اللہ کی قدرت دکھاتا کائناتی ڈھانچہ" }, verseRef: "23:17" }
      ]
    },

    naturalSigns: {
      name: "Signs in Nature",
      nameUr: "فطرت میں نشانیاں",
      nameArabic: "الآيات في الطبيعة",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "مَاءً بِقَدَرٍ", meaning: { en: "Water in measure", ur: "اندازے سے پانی" }, explanation: { en: "Rain sent in precise amounts - not too much, not too little", ur: "درست مقدار میں بارش - نہ زیادہ نہ کم" }, verseRef: "23:18" },
        { term: "جَنَّاتٍ مِّن نَّخِيلٍ وَأَعْنَابٍ", meaning: { en: "Gardens of palms and grapes", ur: "کھجوروں اور انگوروں کے باغات" }, explanation: { en: "Date palms and vineyards - staple crops showing divine provision", ur: "کھجور اور انگور کے باغ - الٰہی رزق کی نشانی" }, verseRef: "23:19" },
        { term: "شَجَرَةً تَخْرُجُ مِن طُورِ سَيْنَاءَ", meaning: { en: "Tree from Mount Sinai", ur: "طورِ سینا سے نکلنے والا درخت" }, explanation: { en: "Olive tree - produces oil for eating and anointing. Blessed tree", ur: "زیتون کا درخت - کھانے اور لگانے کا تیل۔ مبارک درخت" }, verseRef: "23:20" },
        { term: "الْأَنْعَامِ لَعِبْرَةً", meaning: { en: "Cattle - a lesson", ur: "مویشی - عبرت" }, explanation: { en: "Livestock provide milk, meat, transport - signs for reflection", ur: "مویشی دودھ، گوشت، سواری دیتے ہیں - غور و فکر کی نشانیاں" }, verseRef: "23:21" },
        { term: "الْفُلْكِ وَالْأَنْعَامِ تُرْكَبُونَ", meaning: { en: "Ships and animals you ride", ur: "کشتیاں اور جانور جن پر سوار ہوتے ہو" }, explanation: { en: "Transportation by sea and land - divine facilitation of travel", ur: "سمندری اور زمینی سفر - الٰہی آسانی" }, verseRef: "23:22" }
      ]
    },

    prophetNuh: {
      name: "Story of Prophet Nuh (Noah)",
      nameUr: "حضرت نوح کا قصہ",
      nameArabic: "قصة نوح عليه السلام",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "نُوحًا إِلَىٰ قَوْمِهِ", meaning: { en: "Nuh to his people", ur: "نوح اپنی قوم کی طرف" }, explanation: { en: "950 years of patient da'wah to his nation", ur: "اپنی قوم کو 950 سال صبر سے دعوت" }, verseRef: "23:23" },
        { term: "مَا هَٰذَا إِلَّا بَشَرٌ مِّثْلُكُمْ", meaning: { en: "This is only a human like you", ur: "یہ تو صرف تمہارے جیسا انسان ہے" }, explanation: { en: "Common rejection - prophets dismissed as mere mortals", ur: "عام ردّ - انبیاء کو محض بشر کہہ کر رد کرنا" }, verseRef: "23:24" },
        { term: "يُرِيدُ أَن يَتَفَضَّلَ عَلَيْكُمْ", meaning: { en: "He wants superiority over you", ur: "وہ تم پر بڑائی چاہتا ہے" }, explanation: { en: "Accusation of ulterior motives - classic disbeliever argument", ur: "ذاتی مقاصد کا الزام - کافروں کی کلاسیکی دلیل" }, verseRef: "23:24" },
        { term: "بِهِ جِنَّةٌ", meaning: { en: "Possessed by jinn", ur: "اسے جنون ہو گیا ہے" }, explanation: { en: "Calling prophets insane - another common dismissal", ur: "انبیاء کو پاگل کہنا - ایک اور عام تردید" }, verseRef: "23:25" },
        { term: "اصْنَعِ الْفُلْكَ بِأَعْيُنِنَا", meaning: { en: "Build the ark under Our eyes", ur: "ہماری نگرانی میں کشتی بناؤ" }, explanation: { en: "Divine instruction to build, with Allah's supervision and protection", ur: "اللہ کی نگرانی اور حفاظت میں بنانے کا الٰہی حکم" }, verseRef: "23:27" },
        { term: "فَإِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ", meaning: { en: "When Our command comes and oven overflows", ur: "جب ہمارا حکم آئے اور تنور ابل پڑے" }, explanation: { en: "Sign of flood's beginning - water from earth and sky", ur: "طوفان شروع ہونے کی نشانی - زمین اور آسمان سے پانی" }, verseRef: "23:27" },
        { term: "مُنزَلًا مُّبَارَكًا", meaning: { en: "Blessed landing place", ur: "مبارک اترنے کی جگہ" }, explanation: { en: "Safe arrival after flood - new beginning for humanity", ur: "طوفان کے بعد محفوظ پہنچنا - انسانیت کی نئی شروعات" }, verseRef: "23:29" }
      ]
    },

    otherProphets: {
      name: "Stories of Other Prophets",
      nameUr: "دیگر انبیاء کے قصے",
      nameArabic: "قصص الأنبياء الآخرين",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "قَرْنًا آخَرِينَ", meaning: { en: "Another generation", ur: "ایک اور نسل" }, explanation: { en: "After Nuh's people, new nations tested", ur: "نوح کی قوم کے بعد نئی قومیں آزمائی گئیں" }, verseRef: "23:31" },
        { term: "رَسُولًا مِّنْهُمْ", meaning: { en: "A messenger from among them", ur: "انہی میں سے ایک رسول" }, explanation: { en: "Each nation received messenger from their own - relatable, understandable", ur: "ہر قوم کو انہی میں سے رسول ملا - قابلِ فہم" }, verseRef: "23:32" },
        { term: "مُتْرَفُوهَا", meaning: { en: "Their affluent ones", ur: "ان کے خوشحال لوگ" }, explanation: { en: "Wealthy elite typically lead rejection - arrogance of privilege", ur: "دولتمند طبقہ عموماً انکار میں پیش پیش - امتیاز کا تکبر" }, verseRef: "23:33" },
        { term: "مُوسَىٰ وَهَارُونَ", meaning: { en: "Musa and Harun", ur: "موسیٰ اور ہارون" }, explanation: { en: "Brothers sent together to Pharaoh - support in prophethood", ur: "دونوں بھائی فرعون کی طرف بھیجے گئے - نبوت میں مدد" }, verseRef: "23:45" },
        { term: "سُلْطَانٍ مُّبِينٍ", meaning: { en: "Clear authority", ur: "واضح دلیل" }, explanation: { en: "Given miracles as clear proofs - undeniable evidence", ur: "واضح معجزات بطور ثبوت - ناقابلِ انکار شواہد" }, verseRef: "23:45" },
        { term: "فَاسْتَكْبَرُوا", meaning: { en: "But they were arrogant", ur: "لیکن انہوں نے تکبر کیا" }, explanation: { en: "Istikbar = arrogance. Root of all rejection is pride", ur: "استکبار = تکبر۔ ہر ردّ کی جڑ غرور ہے" }, verseRef: "23:46" },
        { term: "عِيسَى ابْنَ مَرْيَمَ", meaning: { en: "Isa son of Maryam", ur: "عیسیٰ بن مریم" }, explanation: { en: "Jesus identified by his mother - miraculous birth affirmed", ur: "عیسیٰ کی پہچان ان کی ماں سے - معجزانہ پیدائش کی تصدیق" }, verseRef: "23:50" },
        { term: "آيَةً", meaning: { en: "A sign", ur: "ایک نشانی" }, explanation: { en: "'Isa and Maryam themselves are signs of Allah's power", ur: "عیسیٰ اور مریم خود اللہ کی قدرت کی نشانیاں ہیں" }, verseRef: "23:50" },
        { term: "رَبْوَةٍ ذَاتِ قَرَارٍ وَمَعِينٍ", meaning: { en: "Elevated land with water", ur: "بلند زمین جہاں پانی اور سکون ہو" }, explanation: { en: "High ground with springs - where Maryam was sheltered", ur: "چشموں والی بلندی - جہاں مریم کو پناہ ملی" }, verseRef: "23:50" }
      ]
    },

    unityOfMessage: {
      name: "Unity of Prophetic Message",
      nameUr: "نبوی پیغام کی وحدت",
      nameArabic: "وحدة رسالة الأنبياء",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "إِنَّ هَٰذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً", meaning: { en: "This nation of yours is one nation", ur: "بے شک تمہاری یہ امت ایک امت ہے" }, explanation: { en: "All believers throughout history form ONE ummah", ur: "تاریخ بھر کے تمام مومن ایک امت ہیں" }, verseRef: "23:52" },
        { term: "وَأَنَا رَبُّكُمْ فَاتَّقُونِ", meaning: { en: "And I am your Lord, so fear Me", ur: "اور میں تمہارا رب ہوں، مجھ سے ڈرو" }, explanation: { en: "One God, one message, one community of believers", ur: "ایک خدا، ایک پیغام، مومنوں کی ایک جماعت" }, verseRef: "23:52" },
        { term: "فَتَقَطَّعُوا أَمْرَهُم بَيْنَهُمْ زُبُرًا", meaning: { en: "They divided their affair into sects", ur: "انہوں نے اپنے معاملے کو ٹکڑوں میں بانٹ لیا" }, explanation: { en: "Tragedy of sectarianism - breaking the unity Allah commanded", ur: "فرقہ بندی کا المیہ - اللہ کے حکم کردہ اتحاد کو توڑنا" }, verseRef: "23:53" },
        { term: "كُلُّ حِزْبٍ بِمَا لَدَيْهِمْ فَرِحُونَ", meaning: { en: "Each group rejoicing in what it has", ur: "ہر گروہ اپنے پاس جو ہے اس پر خوش" }, explanation: { en: "Each sect proud of their version - blind to unity", ur: "ہر فرقہ اپنے نسخے پر فخر - اتحاد سے اندھا" }, verseRef: "23:53" }
      ]
    },

    wealthAndChildren: {
      name: "Tests of Wealth and Children",
      nameUr: "مال اور اولاد کی آزمائش",
      nameArabic: "فتنة المال والولد",
      color: "#F59E0B",
      icon: "Zap",
      concepts: [
        { term: "نُمِدُّهُم بِهِ مِن مَّالٍ وَبَنِينَ", meaning: { en: "We extend to them wealth and children", ur: "ہم انہیں مال اور اولاد سے مدد کرتے ہیں" }, explanation: { en: "Wealth and children given as test - not necessarily blessing", ur: "مال اور اولاد بطور آزمائش - ضروری نہیں کہ نعمت ہو" }, verseRef: "23:55" },
        { term: "نُسَارِعُ لَهُمْ فِي الْخَيْرَاتِ", meaning: { en: "We hasten good things to them?", ur: "کیا ہم ان کے لیے بھلائیوں میں جلدی کر رہے ہیں؟" }, explanation: { en: "Rhetorical - material abundance doesn't mean divine approval", ur: "بیانیہ سوال - مادی فراوانی الٰہی رضامندی کی دلیل نہیں" }, verseRef: "23:56" },
        { term: "بَل لَّا يَشْعُرُونَ", meaning: { en: "But they perceive not", ur: "بلکہ وہ سمجھتے نہیں" }, explanation: { en: "Unaware they're being tested - istidraj (gradual destruction)", ur: "بے خبر کہ آزمائے جا رہے ہیں - استدراج (بتدریج تباہی)" }, verseRef: "23:56" }
      ]
    },

    trueBelieverQualities: {
      name: "Qualities That Earn Paradise",
      nameUr: "جنت کے مستحق اوصاف",
      nameArabic: "صفات أهل الجنة",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        { term: "مِنْ خَشْيَةِ رَبِّهِم مُّشْفِقُونَ", meaning: { en: "Fearful of their Lord with awe", ur: "اپنے رب کے خوف سے لرزاں" }, explanation: { en: "Mushfiqun = reverential fear mixed with love, not terror", ur: "مشفقون = محبت ملی ہوئی تعظیمی خوف، دہشت نہیں" }, verseRef: "23:57" },
        { term: "بِآيَاتِ رَبِّهِمْ يُؤْمِنُونَ", meaning: { en: "Believe in their Lord's signs", ur: "اپنے رب کی نشانیوں پر ایمان رکھتے ہیں" }, explanation: { en: "Faith in divine signs - Quran, creation, messengers", ur: "الٰہی نشانیوں پر ایمان - قرآن، تخلیق، رسول" }, verseRef: "23:58" },
        { term: "بِرَبِّهِمْ لَا يُشْرِكُونَ", meaning: { en: "Associate none with their Lord", ur: "اپنے رب کے ساتھ کسی کو شریک نہیں کرتے" }, explanation: { en: "Pure tawheed - no partners, no intermediaries in worship", ur: "خالص توحید - عبادت میں کوئی شریک، کوئی واسطہ نہیں" }, verseRef: "23:59" },
        { term: "يُؤْتُونَ مَا آتَوا وَّقُلُوبُهُمْ وَجِلَةٌ", meaning: { en: "Give what they give while hearts are fearful", ur: "دیتے ہیں جو دیتے ہیں اور ان کے دل ڈرے ہوئے ہیں" }, explanation: { en: "Give charity yet fear it won't be accepted - highest sincerity", ur: "صدقہ دیتے ہیں پھر بھی ڈرتے ہیں قبول نہ ہو - اعلیٰ اخلاص" }, verseRef: "23:60" },
        { term: "أُولَٰئِكَ يُسَارِعُونَ فِي الْخَيْرَاتِ", meaning: { en: "They hasten to good deeds", ur: "وہ نیکیوں میں سبقت لے جاتے ہیں" }, explanation: { en: "Racing to do good - not delayed or reluctant", ur: "نیکی میں دوڑنا - تاخیر یا ہچکچاہٹ نہیں" }, verseRef: "23:61" }
      ]
    },

    divineJustice: {
      name: "Divine Justice and Accountability",
      nameUr: "الٰہی انصاف اور احتساب",
      nameArabic: "العدل الإلهي والحساب",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "لَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَا", meaning: { en: "We burden no soul beyond its capacity", ur: "ہم کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتے" }, explanation: { en: "Divine mercy in obligations - only what one can bear", ur: "فرائض میں الٰہی رحمت - صرف وہ جو برداشت ہو سکے" }, verseRef: "23:62" },
        { term: "كِتَابٌ يَنطِقُ بِالْحَقِّ", meaning: { en: "A record that speaks truth", ur: "ایک کتاب جو سچ بولتی ہے" }, explanation: { en: "Book of deeds - records everything accurately, nothing hidden", ur: "نامہ اعمال - سب کچھ درست طور پر درج، کچھ نہیں چھپا" }, verseRef: "23:62" },
        { term: "وَهُمْ لَا يُظْلَمُونَ", meaning: { en: "And they will not be wronged", ur: "اور ان پر ظلم نہیں کیا جائے گا" }, explanation: { en: "Perfect justice - no one treated unfairly", ur: "کامل انصاف - کسی کے ساتھ ناانصافی نہیں" }, verseRef: "23:62" }
      ]
    },

    disbelieversState: {
      name: "State of the Heedless",
      nameUr: "غافلوں کی حالت",
      nameArabic: "حال الغافلين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "قُلُوبُهُمْ فِي غَمْرَةٍ", meaning: { en: "Hearts in heedlessness", ur: "ان کے دل غفلت میں ڈوبے ہوئے" }, explanation: { en: "Ghamrah = drowning/covering. Hearts submerged in negligence", ur: "غمرہ = غرق/ڈھکا ہوا۔ دل غفلت میں ڈوبے ہوئے" }, verseRef: "23:63" },
        { term: "أَعْمَالٌ مِّن دُونِ ذَٰلِكَ", meaning: { en: "Deeds other than that", ur: "اس کے علاوہ اور کام" }, explanation: { en: "Busy with worldly actions, missing what truly matters", ur: "دنیاوی کاموں میں مصروف، اصل اہم چیز سے غافل" }, verseRef: "23:63" },
        { term: "إِذَا أَخَذْنَا مُتْرَفِيهِم بِالْعَذَابِ", meaning: { en: "When We seize their affluent with punishment", ur: "جب ہم ان کے خوشحالوں کو عذاب سے پکڑیں" }, explanation: { en: "The wealthy finally face consequences - no escape", ur: "دولتمند بالآخر نتائج بھگتتے ہیں - کوئی فرار نہیں" }, verseRef: "23:64" },
        { term: "يَجْأَرُونَ", meaning: { en: "They cry out", ur: "وہ چلاتے ہیں" }, explanation: { en: "Screaming in panic - when punishment arrives", ur: "گھبراہٹ میں چیخنا - جب عذاب آتا ہے" }, verseRef: "23:64" },
        { term: "لَا تَجْأَرُوا الْيَوْمَ", meaning: { en: "Do not cry out today", ur: "آج چیخو چلاؤ نہیں" }, explanation: { en: "Too late for screams - time for action has passed", ur: "چیخنے کے لیے بہت دیر - عمل کا وقت گزر چکا" }, verseRef: "23:65" },
        { term: "قَدْ كَانَتْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ", meaning: { en: "My verses were recited to you", ur: "میری آیتیں تم پر پڑھی جاتی تھیں" }, explanation: { en: "They had the message - rejection was their choice", ur: "پیغام ان کے پاس تھا - ردّ ان کا اپنا انتخاب تھا" }, verseRef: "23:66" },
        { term: "فَكُنتُمْ عَلَىٰ أَعْقَابِكُمْ تَنكِصُونَ", meaning: { en: "You turned back on your heels", ur: "تم اپنی ایڑیوں پر پیچھے ہٹ جاتے تھے" }, explanation: { en: "Tankisun = turning away backwards. Retreat from truth", ur: "تنکصون = پیچھے ہٹنا۔ سچائی سے پسپائی" }, verseRef: "23:66" }
      ]
    },

    prophetRejection: {
      name: "Why They Rejected the Prophet",
      nameUr: "انہوں نے نبی کو کیوں رد کیا",
      nameArabic: "أسباب رفض النبي",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "أَفَلَمْ يَدَّبَّرُوا الْقَوْلَ", meaning: { en: "Have they not pondered the Word?", ur: "کیا انہوں نے اس کلام پر غور نہیں کیا؟" }, explanation: { en: "Tadabbur = deep reflection. They refused to think deeply", ur: "تدبر = گہرا غور۔ انہوں نے سوچنے سے انکار کیا" }, verseRef: "23:68" },
        { term: "أَمْ جَاءَهُم مَّا لَمْ يَأْتِ آبَاءَهُمُ الْأَوَّلِينَ", meaning: { en: "Or came to them what didn't come to their forefathers?", ur: "کیا ان کے پاس وہ آیا جو ان کے اگلے باپ دادا کے پاس نہیں آیا تھا؟" }, explanation: { en: "Message is the same - continuation of prophethood", ur: "پیغام وہی ہے - نبوت کا تسلسل" }, verseRef: "23:68" },
        { term: "أَمْ لَمْ يَعْرِفُوا رَسُولَهُمْ", meaning: { en: "Or do they not recognize their messenger?", ur: "کیا وہ اپنے رسول کو نہیں پہچانتے؟" }, explanation: { en: "They knew Muhammad's character - Al-Amin (trustworthy)", ur: "وہ محمد کے کردار کو جانتے تھے - الامین (امانتدار)" }, verseRef: "23:69" },
        { term: "أَمْ يَقُولُونَ بِهِ جِنَّةٌ", meaning: { en: "Or do they say he's possessed?", ur: "کیا وہ کہتے ہیں اسے جنون ہے؟" }, explanation: { en: "Insanity accusation - desperate denial of obvious truth", ur: "پاگل پن کا الزام - واضح سچائی سے مایوسانہ انکار" }, verseRef: "23:70" },
        { term: "بَلْ جَاءَهُم بِالْحَقِّ", meaning: { en: "Rather, he brought them the truth", ur: "بلکہ وہ ان کے لیے حق لایا" }, explanation: { en: "Simple reality - he brought truth they couldn't accept", ur: "سادہ حقیقت - وہ سچائی لایا جو وہ قبول نہ کر سکے" }, verseRef: "23:70" },
        { term: "وَأَكْثَرُهُمْ لِلْحَقِّ كَارِهُونَ", meaning: { en: "And most of them hate the truth", ur: "اور ان میں سے اکثر حق سے نفرت کرتے ہیں" }, explanation: { en: "Karahiyyah = hatred. Truth threatens their lifestyle", ur: "کراہیت = نفرت۔ سچائی ان کے طرزِ زندگی کو خطرہ" }, verseRef: "23:70" }
      ]
    },

    ifTruthFollowedDesires: {
      name: "If Truth Followed Desires",
      nameUr: "اگر حق خواہشات کے تابع ہوتا",
      nameArabic: "لو اتبع الحق أهواءهم",
      color: "#8B5CF6",
      icon: "Eye",
      concepts: [
        { term: "لَوِ اتَّبَعَ الْحَقُّ أَهْوَاءَهُمْ", meaning: { en: "If truth followed their desires", ur: "اگر حق ان کی خواہشات کی پیروی کرتا" }, explanation: { en: "Hypothetical - what if reality bent to whims?", ur: "فرضی - اگر حقیقت خواہشات کے مطابق ہوتی تو؟" }, verseRef: "23:71" },
        { term: "لَفَسَدَتِ السَّمَاوَاتُ وَالْأَرْضُ", meaning: { en: "Heavens and earth would corrupt", ur: "آسمان اور زمین بگڑ جاتے" }, explanation: { en: "Cosmic chaos - universe requires objective truth, not subjective desires", ur: "کائناتی بگاڑ - کائنات حقیقی سچائی مانگتی ہے، ذاتی خواہشات نہیں" }, verseRef: "23:71" },
        { term: "بَلْ أَتَيْنَاهُم بِذِكْرِهِمْ", meaning: { en: "Rather We brought them their reminder", ur: "بلکہ ہم نے انہیں ان کی نصیحت دی" }, explanation: { en: "Dhikr = reminder, honor, mention. Quran elevates them", ur: "ذکر = یاددہانی، عزت۔ قرآن انہیں بلند کرتا ہے" }, verseRef: "23:71" },
        { term: "فَهُمْ عَن ذِكْرِهِم مُّعْرِضُونَ", meaning: { en: "But from their reminder they turn away", ur: "لیکن وہ اپنی نصیحت سے منہ موڑتے ہیں" }, explanation: { en: "Rejecting their own honor and elevation", ur: "اپنی عزت اور بلندی کو ردّ کرنا" }, verseRef: "23:71" }
      ]
    },

    prophetsAskNothing: {
      name: "Prophet Asks No Reward",
      nameUr: "نبی کوئی اجر نہیں مانگتے",
      nameArabic: "النبي لا يطلب أجراً",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "أَمْ تَسْأَلُهُمْ خَرْجًا", meaning: { en: "Or do you ask them for payment?", ur: "کیا تم ان سے معاوضہ مانگتے ہو؟" }, explanation: { en: "Rhetorical - Prophet seeks no worldly reward", ur: "بیانیہ - نبی کوئی دنیاوی اجر نہیں مانگتا" }, verseRef: "23:72" },
        { term: "فَخَرَاجُ رَبِّكَ خَيْرٌ", meaning: { en: "The reward of your Lord is better", ur: "تمہارے رب کا اجر بہتر ہے" }, explanation: { en: "Divine reward surpasses any worldly payment", ur: "الٰہی اجر ہر دنیاوی معاوضے سے بالاتر" }, verseRef: "23:72" },
        { term: "وَهُوَ خَيْرُ الرَّازِقِينَ", meaning: { en: "And He is best of providers", ur: "اور وہ سب سے بہتر رزق دینے والا ہے" }, explanation: { en: "Allah's provision > any human payment", ur: "اللہ کا رزق > کسی انسانی معاوضے سے بڑھ کر" }, verseRef: "23:72" },
        { term: "صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "Straight path", ur: "سیدھا راستہ" }, explanation: { en: "The path Prophet calls to - direct route to Allah", ur: "وہ راستہ جس کی طرف نبی بلاتا ہے - اللہ تک سیدھا راستہ" }, verseRef: "23:73" }
      ]
    },

    arrogantDisbelievers: {
      name: "The Arrogant Rejectors",
      nameUr: "متکبر منکرین",
      nameArabic: "المستكبرون الرافضون",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "لَا يُؤْمِنُونَ بِالْآخِرَةِ", meaning: { en: "Don't believe in Hereafter", ur: "آخرت پر ایمان نہیں رکھتے" }, explanation: { en: "Root problem - denying accountability emboldens sin", ur: "بنیادی مسئلہ - جوابدہی کا انکار گناہ کی ہمت بڑھاتا ہے" }, verseRef: "23:74" },
        { term: "عَنِ الصِّرَاطِ لَنَاكِبُونَ", meaning: { en: "From the path, deviating", ur: "راستے سے ہٹنے والے" }, explanation: { en: "Nakib = one who turns aside. Straying from guidance", ur: "ناکب = ایک طرف ہٹنے والا۔ ہدایت سے بھٹکنا" }, verseRef: "23:74" },
        { term: "لَوْ رَحِمْنَاهُمْ وَكَشَفْنَا مَا بِهِم مِّن ضُرٍّ", meaning: { en: "If We showed mercy and removed their hardship", ur: "اگر ہم ان پر رحم کریں اور ان کی تکلیف دور کریں" }, explanation: { en: "Even if difficulty removed, they wouldn't change", ur: "تکلیف دور بھی ہو تو بھی نہ بدلیں" }, verseRef: "23:75" },
        { term: "لَّلَجُّوا فِي طُغْيَانِهِمْ يَعْمَهُونَ", meaning: { en: "They'd persist in transgression, wandering blindly", ur: "وہ اپنی سرکشی میں اندھے بنے رہتے" }, explanation: { en: "Tughyan = transgression. 'Amah = blindness. Persistent rebellion", ur: "طغیان = سرکشی۔ عمہ = اندھا پن۔ مسلسل بغاوت" }, verseRef: "23:75" }
      ]
    },

    divineAttributes: {
      name: "Divine Attributes",
      nameUr: "الٰہی صفات",
      nameArabic: "الصفات الإلهية",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ", meaning: { en: "Knower of unseen and witnessed", ur: "غیب اور حاضر کا جاننے والا" }, explanation: { en: "Allah knows hidden and apparent - complete knowledge", ur: "اللہ پوشیدہ اور ظاہر جانتا ہے - مکمل علم" }, verseRef: "23:92" },
        { term: "فَتَعَالَىٰ عَمَّا يُشْرِكُونَ", meaning: { en: "Exalted above what they associate", ur: "جو وہ شریک ٹھہراتے ہیں اس سے بلند ہے" }, explanation: { en: "Allah transcends all partners/comparisons", ur: "اللہ تمام شریکوں/تقابلوں سے بالاتر" }, verseRef: "23:92" },
        { term: "رَبُّ الْعَرْشِ الْكَرِيمِ", meaning: { en: "Lord of the noble Throne", ur: "عرشِ عظیم کا مالک" }, explanation: { en: "Sovereignty over all creation - Al-'Arsh represents authority", ur: "تمام مخلوق پر حاکمیت - عرش اقتدار کی علامت" }, verseRef: "23:116" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: { en: "There is no god but He", ur: "اس کے سوا کوئی معبود نہیں" }, explanation: { en: "Core declaration of tawheed - absolute oneness", ur: "توحید کا بنیادی اعلان - مطلق وحدانیت" }, verseRef: "23:116" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment Scenes",
      nameUr: "قیامت کے مناظر",
      nameArabic: "مشاهد يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "حَتَّىٰ إِذَا جَاءَ أَحَدَهُمُ الْمَوْتُ", meaning: { en: "Until when death comes to one of them", ur: "یہاں تک کہ جب ان میں سے کسی کو موت آتی ہے" }, explanation: { en: "Moment of death - too late for repentance", ur: "موت کا لمحہ - توبہ کے لیے بہت دیر" }, verseRef: "23:99" },
        { term: "رَبِّ ارْجِعُونِ", meaning: { en: "My Lord, send me back", ur: "اے میرے رب، مجھے واپس بھیج دے" }, explanation: { en: "Desperate plea to return - second chance requested", ur: "واپسی کی مایوسانہ التجا - دوسرا موقع مانگنا" }, verseRef: "23:99" },
        { term: "لَعَلِّي أَعْمَلُ صَالِحًا", meaning: { en: "Perhaps I may do good", ur: "شاید میں نیک عمل کروں" }, explanation: { en: "Promise to do good if returned - but too late", ur: "واپس بھیجو تو نیکی کا وعدہ - لیکن بہت دیر" }, verseRef: "23:100" },
        { term: "كَلَّا", meaning: { en: "No!", ur: "ہرگز نہیں!" }, explanation: { en: "Emphatic denial - no return, no second chance", ur: "شدید انکار - واپسی نہیں، دوسرا موقع نہیں" }, verseRef: "23:100" },
        { term: "بَرْزَخٌ", meaning: { en: "Barrier (Barzakh)", ur: "پردہ (برزخ)" }, explanation: { en: "Barrier between death and resurrection - no crossing back", ur: "موت اور قیامت کے درمیان پردہ - واپسی ناممکن" }, verseRef: "23:100" },
        { term: "فَإِذَا نُفِخَ فِي الصُّورِ", meaning: { en: "When blown in the Trumpet", ur: "جب صور پھونکا جائے گا" }, explanation: { en: "Resurrection begins - all will rise", ur: "قیامت شروع ہوگی - سب اٹھیں گے" }, verseRef: "23:101" },
        { term: "فَلَا أَنسَابَ بَيْنَهُمْ", meaning: { en: "No relationships between them", ur: "ان کے درمیان کوئی نسبت نہیں" }, explanation: { en: "Lineage won't matter - only deeds count", ur: "نسب کام نہیں آئے گا - صرف اعمال شمار ہوں گے" }, verseRef: "23:101" },
        { term: "وَلَا يَتَسَاءَلُونَ", meaning: { en: "Nor will they ask about each other", ur: "نہ ایک دوسرے کے بارے میں پوچھیں گے" }, explanation: { en: "Too consumed with own fate to inquire about others", ur: "اپنی قسمت میں اتنے مصروف کہ دوسروں کا حال نہ پوچھیں" }, verseRef: "23:101" },
        { term: "مَن ثَقُلَتْ مَوَازِينُهُ", meaning: { en: "Whose scales are heavy", ur: "جس کے ترازو بھاری ہوں" }, explanation: { en: "Good deeds outweigh bad - success", ur: "نیکیاں برائیوں سے بھاری - کامیابی" }, verseRef: "23:102" },
        { term: "فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ", meaning: { en: "Those are the successful", ur: "وہی کامیاب ہیں" }, explanation: { en: "True falah - eternal success, Paradise", ur: "حقیقی فلاح - ابدی کامیابی، جنت" }, verseRef: "23:102" },
        { term: "مَنْ خَفَّتْ مَوَازِينُهُ", meaning: { en: "Whose scales are light", ur: "جس کے ترازو ہلکے ہوں" }, explanation: { en: "Bad deeds outweigh good - failure", ur: "برائیاں نیکیوں سے بھاری - ناکامی" }, verseRef: "23:103" },
        { term: "خَسِرُوا أَنفُسَهُمْ", meaning: { en: "Lost their souls", ur: "اپنے آپ کو خسارے میں ڈالا" }, explanation: { en: "Ultimate loss - losing oneself to Hell", ur: "حتمی نقصان - خود کو جہنم کے حوالے کرنا" }, verseRef: "23:103" },
        { term: "فِي جَهَنَّمَ خَالِدُونَ", meaning: { en: "In Hell forever", ur: "ہمیشہ جہنم میں" }, explanation: { en: "Eternal punishment - no exit", ur: "ابدی عذاب - کوئی نکلنے کا راستہ نہیں" }, verseRef: "23:103" }
      ]
    },

    hellDescriptions: {
      name: "Descriptions of Hell",
      nameUr: "جہنم کے احوال",
      nameArabic: "وصف جهنم",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "تَلْفَحُ وُجُوهَهُمُ النَّارُ", meaning: { en: "Fire will sear their faces", ur: "آگ ان کے چہرے جھلس دے گی" }, explanation: { en: "Talfahh = scorching heat. Faces directly burned", ur: "تلفح = جھلسا دینے والی حرارت۔ چہرے براہ راست جلیں گے" }, verseRef: "23:104" },
        { term: "وَهُمْ فِيهَا كَالِحُونَ", meaning: { en: "And they will be grimacing", ur: "اور وہ اس میں منہ بنائے ہوں گے" }, explanation: { en: "Kalih = grim expression from severe pain", ur: "کالح = شدید درد سے بگڑا ہوا چہرہ" }, verseRef: "23:104" },
        { term: "أَلَمْ تَكُنْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ", meaning: { en: "Were My verses not recited to you?", ur: "کیا میری آیتیں تم پر نہیں پڑھی جاتی تھیں؟" }, explanation: { en: "Divine questioning - they had the message", ur: "الٰہی سوال - پیغام ان کے پاس تھا" }, verseRef: "23:105" },
        { term: "فَكُنتُم بِهَا تُكَذِّبُونَ", meaning: { en: "But you denied them", ur: "لیکن تم انہیں جھٹلاتے تھے" }, explanation: { en: "Their denial led to this outcome", ur: "ان کے انکار نے اس انجام تک پہنچایا" }, verseRef: "23:105" },
        { term: "رَبَّنَا غَلَبَتْ عَلَيْنَا شِقْوَتُنَا", meaning: { en: "Our Lord, our wretchedness overcame us", ur: "اے ہمارے رب، ہماری بدبختی ہم پر غالب آگئی" }, explanation: { en: "Admission of being overwhelmed by misfortune/desires", ur: "بدنصیبی/خواہشات سے مغلوب ہونے کا اعتراف" }, verseRef: "23:106" },
        { term: "وَكُنَّا قَوْمًا ضَالِّينَ", meaning: { en: "And we were a people astray", ur: "اور ہم گمراہ قوم تھے" }, explanation: { en: "Finally acknowledging they were lost", ur: "بالآخر اعتراف کہ وہ گمراہ تھے" }, verseRef: "23:106" },
        { term: "رَبَّنَا أَخْرِجْنَا مِنْهَا", meaning: { en: "Our Lord, remove us from it", ur: "اے ہمارے رب، ہمیں اس سے نکال لے" }, explanation: { en: "Plea for escape - but response is harsh", ur: "فرار کی التجا - لیکن جواب سخت ہے" }, verseRef: "23:107" },
        { term: "اخْسَئُوا فِيهَا وَلَا تُكَلِّمُونِ", meaning: { en: "Remain despised and don't speak to Me", ur: "ذلیل ہو کر اس میں رہو اور مجھ سے بات نہ کرو" }, explanation: { en: "Ikhsa'u = be humiliated like dogs. Silenced forever", ur: "اخسئوا = کتوں کی طرح دھتکارنا۔ ہمیشہ خاموش" }, verseRef: "23:108" }
      ]
    },

    mockersOfBelievers: {
      name: "Those Who Mocked Believers",
      nameUr: "مومنوں کا مذاق اڑانے والے",
      nameArabic: "الذين سخروا من المؤمنين",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "كُنتُمْ مِنْهُمْ تَضْحَكُونَ", meaning: { en: "You used to laugh at them", ur: "تم ان پر ہنستے تھے" }, explanation: { en: "Mockers in this world become mocked eternally", ur: "دنیا میں مذاق اڑانے والے ہمیشہ مذاق بنیں گے" }, verseRef: "23:110" },
        { term: "حَتَّىٰ أَنسَوْكُمْ ذِكْرِي", meaning: { en: "Until they made you forget My remembrance", ur: "یہاں تک کہ انہوں نے تمہیں میرا ذکر بھلا دیا" }, explanation: { en: "Mocking believers distracted from remembering Allah", ur: "مومنوں کا مذاق اللہ کے ذکر سے غافل کر گیا" }, verseRef: "23:110" },
        { term: "إِنِّي جَزَيْتُهُمُ الْيَوْمَ بِمَا صَبَرُوا", meaning: { en: "I have rewarded them today for their patience", ur: "میں نے آج انہیں ان کے صبر کا بدلہ دیا" }, explanation: { en: "Patient believers finally vindicated", ur: "صابر مومنوں کی بالآخر کامیابی" }, verseRef: "23:111" },
        { term: "أَنَّهُمْ هُمُ الْفَائِزُونَ", meaning: { en: "They are the successful ones", ur: "وہی کامیاب ہیں" }, explanation: { en: "Ultimate winners - those who were mocked", ur: "حتمی فاتح - وہ جن کا مذاق اڑایا گیا" }, verseRef: "23:111" }
      ]
    },

    timeInWorld: {
      name: "Time in the World",
      nameUr: "دنیا میں وقت",
      nameArabic: "الزمن في الدنيا",
      color: "#8B5CF6",
      icon: "Moon",
      concepts: [
        { term: "كَمْ لَبِثْتُمْ فِي الْأَرْضِ", meaning: { en: "How long did you stay on earth?", ur: "تم زمین میں کتنا رہے؟" }, explanation: { en: "Question to those in Hell about worldly duration", ur: "جہنمیوں سے دنیاوی مدت کے بارے میں سوال" }, verseRef: "23:112" },
        { term: "يَوْمًا أَوْ بَعْضَ يَوْمٍ", meaning: { en: "A day or part of a day", ur: "ایک دن یا دن کا کچھ حصہ" }, explanation: { en: "Worldly life feels like moments compared to eternity", ur: "دنیاوی زندگی ابدیت کے مقابلے میں لمحے جیسی" }, verseRef: "23:113" },
        { term: "فَاسْأَلِ الْعَادِّينَ", meaning: { en: "Ask those who count", ur: "گنتی رکھنے والوں سے پوچھو" }, explanation: { en: "Ask the angels who keep records", ur: "ریکارڈ رکھنے والے فرشتوں سے پوچھو" }, verseRef: "23:113" },
        { term: "إِن لَّبِثْتُمْ إِلَّا قَلِيلًا", meaning: { en: "You stayed only a little", ur: "تم بہت تھوڑا رہے" }, explanation: { en: "Brief worldly stay - eternal consequences", ur: "مختصر دنیاوی قیام - ابدی نتائج" }, verseRef: "23:114" },
        { term: "لَّوْ أَنَّكُمْ كُنتُمْ تَعْلَمُونَ", meaning: { en: "If only you had known", ur: "کاش تم جانتے ہوتے" }, explanation: { en: "Regret for not realizing brevity of life", ur: "زندگی کی مختصری نہ سمجھنے پر پشیمانی" }, verseRef: "23:114" }
      ]
    },

    purposeOfCreation: {
      name: "Purpose of Creation",
      nameUr: "تخلیق کا مقصد",
      nameArabic: "الحكمة من الخلق",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا", meaning: { en: "Did you think We created you uselessly?", ur: "کیا تم نے سمجھا کہ ہم نے تمہیں بے مقصد پیدا کیا؟" }, explanation: { en: "'Abath = purposeless play. Life has meaning", ur: "عبث = بے مقصد کھیل۔ زندگی بامعنی ہے" }, verseRef: "23:115" },
        { term: "وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ", meaning: { en: "And that you would not be returned to Us?", ur: "اور تم ہماری طرف نہیں لوٹائے جاؤ گے؟" }, explanation: { en: "Return to Allah is certain - accountability awaits", ur: "اللہ کی طرف واپسی یقینی - حساب منتظر ہے" }, verseRef: "23:115" },
        { term: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ", meaning: { en: "Exalted is Allah, the True King", ur: "بلند ہے اللہ، حقیقی بادشاہ" }, explanation: { en: "Al-Malik Al-Haqq - the Only Real Sovereign", ur: "الملک الحق - واحد حقیقی حاکمِ اعلیٰ" }, verseRef: "23:116" }
      ]
    },

    closingDua: {
      name: "The Closing Supplication",
      nameUr: "اختتامی دعا",
      nameArabic: "الدعاء الختامي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "رَّبِّ اغْفِرْ وَارْحَمْ", meaning: { en: "My Lord, forgive and have mercy", ur: "اے میرے رب، معاف فرما اور رحم کر" }, explanation: { en: "Seeking both forgiveness and mercy - complete protection", ur: "مغفرت اور رحمت دونوں مانگنا - مکمل تحفظ" }, verseRef: "23:118" },
        { term: "وَأَنتَ خَيْرُ الرَّاحِمِينَ", meaning: { en: "And You are the best of those who show mercy", ur: "اور تو سب سے بہتر رحم کرنے والا ہے" }, explanation: { en: "Ending on hope - Allah's mercy is the greatest", ur: "امید پر اختتام - اللہ کی رحمت سب سے بڑی ہے" }, verseRef: "23:118" }
      ]
    }
  },

  relationships: [
    { from: "قد أفلح المؤمنون", to: "هم الوارثون", type: "result", description: { en: "Believer qualities lead to inheriting Firdaus", ur: "مومنانہ صفات فردوس کی وراثت تک لے جاتی ہیں" } },
    { from: "سلالة من طين", to: "خلقاً آخر", type: "progression", description: { en: "From clay to ensouled being - stages of creation", ur: "مٹی سے روح والی مخلوق تک - تخلیق کے مراحل" } },
    { from: "نوح", to: "موسى وهارون", type: "sequence", description: { en: "Pattern of prophethood - same message, same rejection", ur: "نبوت کا نمونہ - وہی پیغام، وہی ردّ" } },
    { from: "أفلم يدبروا القول", to: "أكثرهم للحق كارهون", type: "causation", description: { en: "Lack of reflection leads to hating truth", ur: "غور نہ کرنا حق سے نفرت تک لے جاتا ہے" } },
    { from: "من ثقلت موازينه", to: "المفلحون", type: "equivalence", description: { en: "Heavy scales = success", ur: "بھاری ترازو = کامیابی" } },
    { from: "من خفت موازينه", to: "في جهنم خالدون", type: "consequence", description: { en: "Light scales = eternal Hell", ur: "ہلکے ترازو = ابدی جہنم" } },
    { from: "تضحكون", to: "جزيتهم بما صبروا", type: "reversal", description: { en: "Mockers punished, mocked believers rewarded", ur: "مذاق اڑانے والے سزا یافتہ، مذاق اڑائے گئے مومن انعام یافتہ" } },
    { from: "خلقناكم عبثاً", to: "إلينا لا ترجعون", type: "correction", description: { en: "Purpose requires accountability", ur: "مقصد جوابدہی مانگتا ہے" } },
    { from: "لا إله إلا هو", to: "خير الراحمين", type: "completion", description: { en: "From tawheed declaration to seeking mercy", ur: "توحید کے اعلان سے رحمت مانگنے تک" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Qualities of Believers", verses: "23:1-11", description: { en: "Seven qualities leading to Paradise - the successful ones", ur: "جنت کی طرف لے جانے والی سات صفات - کامیاب لوگ" } },
      { stage: 2, theme: "Human Creation", verses: "23:12-16", description: { en: "From clay to death - stages of human existence", ur: "مٹی سے موت تک - انسانی وجود کے مراحل" } },
      { stage: 3, theme: "Signs in Creation", verses: "23:17-22", description: { en: "Heavens, rain, plants, animals - evidence of Creator", ur: "آسمان، بارش، نباتات، جانور - خالق کا ثبوت" } },
      { stage: 4, theme: "Prophet Nuh", verses: "23:23-30", description: { en: "Nuh's da'wah, rejection, ark, flood, salvation", ur: "نوح کی دعوت، ردّ، کشتی، طوفان، نجات" } },
      { stage: 5, theme: "Pattern of Rejection", verses: "23:31-44", description: { en: "Other nations following same pattern of denial", ur: "دوسری قومیں انکار کے اسی نمونے پر" } },
      { stage: 6, theme: "Musa and Harun", verses: "23:45-49", description: { en: "Brothers sent to Pharaoh - arrogance of elite", ur: "بھائی فرعون کی طرف بھیجے گئے - اشرافیہ کا تکبر" } },
      { stage: 7, theme: "Isa and Maryam", verses: "23:50-52", description: { en: "Sign and shelter - unity of ummah", ur: "نشانی اور پناہ - امت کا اتحاد" } },
      { stage: 8, theme: "Sectarianism Condemned", verses: "23:53-56", description: { en: "Division into sects - each proud of their way", ur: "فرقوں میں تقسیم - ہر ایک اپنے طریقے پر فخر" } },
      { stage: 9, theme: "True Believers Described", verses: "23:57-61", description: { en: "Those who fear, believe, race to good", ur: "جو ڈرتے ہیں، ایمان رکھتے ہیں، نیکی میں دوڑتے ہیں" } },
      { stage: 10, theme: "Divine Justice", verses: "23:62-67", description: { en: "No burden beyond capacity, heedless hearts", ur: "طاقت سے زیادہ بوجھ نہیں، غافل دل" } },
      { stage: 11, theme: "Reasons for Rejection", verses: "23:68-77", description: { en: "Why they reject - arrogance, not reflection", ur: "وہ کیوں ردّ کرتے ہیں - تکبر، غور نہیں" } },
      { stage: 12, theme: "Prophet's Innocence", verses: "23:78-92", description: { en: "Prophet asks no reward, calls to straight path", ur: "نبی اجر نہیں مانگتا، سیدھے راستے کی دعوت" } },
      { stage: 13, theme: "Death and Barzakh", verses: "23:99-100", description: { en: "Moment of death, plea to return, barrier", ur: "موت کا لمحہ، واپسی کی التجا، پردہ" } },
      { stage: 14, theme: "Resurrection Scenes", verses: "23:101-111", description: { en: "Scales, success, failure, Hell, mocking reversed", ur: "ترازو، کامیابی، ناکامی، جہنم، مذاق الٹ گیا" } },
      { stage: 15, theme: "Purpose and Prayer", verses: "23:112-118", description: { en: "Brief life, purposeful creation, closing dua", ur: "مختصر زندگی، بامقصد تخلیق، اختتامی دعا" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Develop khushu'", how: "Focus completely in salah - minimize distractions, understand what you recite", verse: "23:2" },
      { principle: "Avoid laghw", how: "Guard your tongue and time from useless talk, social media scrolling", verse: "23:3" },
      { principle: "Be fa'il for zakah", how: "Don't just give charity passively - actively seek opportunities to purify wealth", verse: "23:4" },
      { principle: "Guard trusts", how: "Honor every responsibility - work commitments, secrets, borrowed items", verse: "23:8" },
      { principle: "Reflect on creation", how: "Study embryology as confirmation of Quranic accuracy", verse: "23:12-14" },
      { principle: "Learn from history", how: "Study destroyed nations - same patterns of arrogance repeat", verse: "23:23-44" },
      { principle: "Avoid sectarianism", how: "Focus on uniting ummah, not dividing into proud groups", verse: "23:52-53" },
      { principle: "Give with fear", how: "Even after charity, worry about acceptance - avoid pride", verse: "23:60" },
      { principle: "Race to good", how: "Don't delay good deeds - compete in khayr", verse: "23:61" },
      { principle: "Reflect deeply", how: "Practice tadabbur - don't skim the Quran, ponder each verse", verse: "23:68" },
      { principle: "Remember life's brevity", how: "Life is a day or less - invest for eternity", verse: "23:112-114" },
      { principle: "Know your purpose", how: "You weren't created without purpose - live intentionally", verse: "23:115" },
      { principle: "End with hope", how: "After all warnings, seek Allah's mercy - He is khayr ar-rahimeen", verse: "23:118" }
    ]
  },

  uniqueInsight: {
    title: { en: "From Falah to Falah: The Circle of Success", ur: "فلاح سے فلاح تک: کامیابی کا دائرہ" },
    insight: { en: "Surah Al-Mu'minun opens with 'Qad aflaha al-mu'minun' (Successful indeed are the believers) and returns to 'fa ula'ika hum al-muflihun' (those are the successful) at verse 102. This creates a deliberate ring structure. The surah defines success at the start (seven qualities in verses 1-11), then takes the reader through history (prophets rejected), human psychology (why people reject truth), cosmic signs (creation's evidence), and finally judgment scenes - before declaring again who truly succeeds. The point: true success isn't wealth, children, or worldly status (explicitly refuted in verses 55-56). True success is heavy scales on Judgment Day, which come from living the seven qualities. The wealthy elite (mutrafeehum) who rejected prophets thought they were successful - but real falah belongs to those they mocked.", ur: "سورہ المؤمنون 'قد افلح المؤمنون' (بے شک مومن کامیاب ہوئے) سے شروع ہوتی ہے اور آیت 102 پر 'فاولئک ہم المفلحون' (وہی کامیاب ہیں) پر واپس آتی ہے۔ یہ ایک جان بوجھ کر حلقہ دار ساخت بناتی ہے۔ سورہ شروع میں کامیابی کی تعریف کرتی ہے (آیات 1-11 میں سات صفات)، پھر قاری کو تاریخ (انبیاء کی تکذیب)، انسانی نفسیات (لوگ سچائی کیوں ردّ کرتے ہیں)، کائناتی نشانیاں (تخلیق کا ثبوت)، اور آخر میں قیامت کے مناظر سے گزارتی ہے - دوبارہ اعلان کرنے سے پہلے کہ حقیقی کامیاب کون ہے۔ نکتہ: حقیقی کامیابی مال، اولاد یا دنیاوی حیثیت نہیں (آیات 55-56 میں واضح تردید)۔ حقیقی کامیابی قیامت کے دن بھاری ترازو ہے، جو سات صفات پر عمل سے آتا ہے۔ دولتمند اشرافیہ (مترفیہم) جنہوں نے انبیاء کو ردّ کیا، خود کو کامیاب سمجھتے تھے - لیکن اصل فلاح ان لوگوں کی ہے جن کا وہ مذاق اڑاتے تھے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "Opening with qad + past tense", example: { en: "قَدْ أَفْلَحَ", ur: "بے شک کامیاب ہوئے" }, effect: "Certainty - their success is already guaranteed" },
      { feature: "Active participle pattern", example: { en: "خَاشِعُونَ، فَاعِلُونَ، حَافِظُونَ، رَاعُونَ", ur: "خاشعون، فاعلون، حافظون، راعون" }, effect: "Continuous action - not one-time but constant traits" },
      { feature: "Rhetorical questions", example: { en: "أَفَلَمْ يَدَّبَّرُوا، أَمْ لَمْ يَعْرِفُوا", ur: "کیا انہوں نے غور نہیں کیا، کیا انہوں نے نہیں پہچانا" }, effect: "Forces reflection - makes rejection seem unreasonable" },
      { feature: "Kalla - strong negation", example: { en: "كَلَّا", ur: "ہرگز نہیں" }, effect: "Emphatic rejection of their plea to return" },
      { feature: "Imperative command at end", example: { en: "اخْسَئُوا", ur: "دُھتکارے جاؤ" }, effect: "Harsh dismissal - silenced like dogs" },
      { feature: "Superlative ending", example: { en: "خَيْرُ الرَّاحِمِينَ", ur: "سب سے بہتر رحم کرنے والا" }, effect: "Hope after all warnings - Allah's mercy is supreme" }
    ]
  }
};

export default ONTOLOGY;
