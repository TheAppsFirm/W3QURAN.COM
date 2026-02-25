/**
 * Surah Fussilat (41) - Ontology of Quranic Concepts
 * Also known as Ha Mim As-Sajdah (Ha Mim The Prostration)
 * Theme: Ha Mim opening, Quran as guidance and healing, creation in 6 days, body parts testifying, repelling evil with good
 * 54 Ayahs, Makkan
 */

export const ONTOLOGY = {
  surahId: 41,
  surahName: "Fussilat",
  alternativeName: "Ha Mim As-Sajdah",
  surahNameArabic: "فصلت",
  alternativeNameArabic: "حم السجدة",
  revelationType: "Makki",
  totalAyahs: 54,

  categories: {
    quranDescription: {
      name: "Description of the Quran",
      nameUr: "قرآن کا بیان",
      nameArabic: "وصف القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حم", meaning: { en: "Ha Mim", ur: "حم" }, explanation: { en: "Mysterious letters - one of seven Ha-Mim surahs (40-46)", ur: "حروف مقطعات - سات حم سورتوں (40-46) میں سے ایک" }, verseRef: "41:1" },
        { term: "تَنزِيلٌ مِّنَ الرَّحْمَٰنِ الرَّحِيمِ", meaning: { en: "A revelation from the Most Merciful", ur: "رحمن رحیم کی طرف سے نازل کردہ" }, explanation: { en: "Source of Quran is Allah's mercy", ur: "قرآن کا ماخذ اللہ کی رحمت ہے" }, verseRef: "41:2" },
        { term: "كِتَابٌ فُصِّلَتْ آيَاتُهُ", meaning: { en: "A Book whose verses are detailed", ur: "ایک کتاب جس کی آیتیں تفصیل سے بیان کی گئیں" }, explanation: { en: "Fussilat - clearly explained and distinctly set forth", ur: "فصلت - واضح طور پر بیان کیا اور الگ الگ پیش کیا" }, verseRef: "41:3" },
        { term: "قُرْآنًا عَرَبِيًّا", meaning: { en: "An Arabic Quran", ur: "عربی قرآن" }, explanation: { en: "Revealed in Arabic for people who understand", ur: "سمجھنے والوں کے لیے عربی میں نازل کیا گیا" }, verseRef: "41:3" },
        { term: "لِّقَوْمٍ يَعْلَمُونَ", meaning: { en: "For a people who know", ur: "ان لوگوں کے لیے جو جانتے ہیں" }, explanation: { en: "Addressed to those who use knowledge", ur: "ان لوگوں سے خطاب جو علم استعمال کرتے ہیں" }, verseRef: "41:3" },
        { term: "بَشِيرًا وَنَذِيرًا", meaning: { en: "Giver of good tidings and warner", ur: "خوشخبری دینے والا اور ڈرانے والا" }, explanation: { en: "Quran's dual function - hope and warning", ur: "قرآن کا دوہرا کردار - امید اور تنبیہ" }, verseRef: "41:4" },
        { term: "هُدًى وَشِفَاءٌ", meaning: { en: "Guidance and healing", ur: "ہدایت اور شفاء" }, explanation: { en: "Quran heals hearts and guides to truth", ur: "قرآن دلوں کو شفا دیتا ہے اور حق کی طرف رہنمائی کرتا ہے" }, verseRef: "41:44" },
        { term: "لِّلَّذِينَ آمَنُوا", meaning: { en: "For those who believe", ur: "ایمان والوں کے لیے" }, explanation: { en: "Believers receive guidance and healing", ur: "مومنین کو ہدایت اور شفاء ملتی ہے" }, verseRef: "41:44" },
        { term: "وَقْرٌ", meaning: { en: "Deafness", ur: "بہراپن" }, explanation: { en: "For disbelievers, it is deafness in their ears", ur: "کافروں کے لیے ان کے کانوں میں بہراپن ہے" }, verseRef: "41:44" },
        { term: "عَمًى", meaning: { en: "Blindness", ur: "اندھا پن" }, explanation: { en: "And upon them is blindness to truth", ur: "اور ان پر حق سے اندھا پن ہے" }, verseRef: "41:44" }
      ]
    },

    creationInSixDays: {
      name: "Creation in Six Days",
      nameUr: "چھ دنوں میں تخلیق",
      nameArabic: "الخلق في ستة أيام",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "خَلَقَ الْأَرْضَ فِي يَوْمَيْنِ", meaning: { en: "Created the earth in two days", ur: "زمین کو دو دنوں میں پیدا کیا" }, explanation: { en: "First stage of creation", ur: "تخلیق کا پہلا مرحلہ" }, verseRef: "41:9" },
        { term: "رَبُّ الْعَالَمِينَ", meaning: { en: "Lord of the worlds", ur: "تمام جہانوں کا رب" }, explanation: { en: "Creator of everything that exists", ur: "ہر موجود چیز کا خالق" }, verseRef: "41:9" },
        { term: "وَجَعَلَ فِيهَا رَوَاسِيَ", meaning: { en: "And placed therein firmly set mountains", ur: "اور اس میں مضبوط پہاڑ رکھے" }, explanation: { en: "Mountains for stability", ur: "استحکام کے لیے پہاڑ" }, verseRef: "41:10" },
        { term: "وَبَارَكَ فِيهَا", meaning: { en: "And blessed it", ur: "اور اس میں برکت رکھی" }, explanation: { en: "Earth is blessed with provisions", ur: "زمین رزق سے بابرکت ہے" }, verseRef: "41:10" },
        { term: "وَقَدَّرَ فِيهَا أَقْوَاتَهَا", meaning: { en: "And determined therein its sustenance", ur: "اور اس میں روزیاں مقرر کیں" }, explanation: { en: "Provision precisely measured", ur: "رزق بالکل ناپ تول کے ساتھ" }, verseRef: "41:10" },
        { term: "فِي أَرْبَعَةِ أَيَّامٍ", meaning: { en: "In four days", ur: "چار دنوں میں" }, explanation: { en: "Total for earth's formation with provisions", ur: "زمین کی تشکیل بمع رزق کی کل مدت" }, verseRef: "41:10" },
        { term: "سَوَاءً لِّلسَّائِلِينَ", meaning: { en: "Equal for those who ask", ur: "پوچھنے والوں کے لیے برابر" }, explanation: { en: "Sustenance available to all who seek", ur: "رزق تمام طلب کرنے والوں کے لیے دستیاب" }, verseRef: "41:10" },
        { term: "ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ", meaning: { en: "Then He directed to the heaven while it was smoke", ur: "پھر آسمان کی طرف متوجہ ہوا جبکہ وہ دھواں تھا" }, explanation: { en: "Heavens were initially gaseous", ur: "آسمان ابتداء میں گیسی حالت میں تھے" }, verseRef: "41:11" },
        { term: "ائْتِيَا طَوْعًا أَوْ كَرْهًا", meaning: { en: "Come willingly or unwillingly", ur: "آؤ خوشی سے یا مجبوری سے" }, explanation: { en: "Allah's command to heaven and earth", ur: "آسمان اور زمین کو اللہ کا حکم" }, verseRef: "41:11" },
        { term: "قَالَتَا أَتَيْنَا طَائِعِينَ", meaning: { en: "They said: We come willingly", ur: "انہوں نے کہا: ہم خوشی سے آتے ہیں" }, explanation: { en: "Creation submits to Allah", ur: "مخلوق اللہ کے سامنے سرنگوں ہے" }, verseRef: "41:11" },
        { term: "فَقَضَاهُنَّ سَبْعَ سَمَاوَاتٍ فِي يَوْمَيْنِ", meaning: { en: "He completed them as seven heavens in two days", ur: "پھر دو دنوں میں سات آسمان بنا دیے" }, explanation: { en: "Heavens formed in two days", ur: "آسمان دو دنوں میں بنائے گئے" }, verseRef: "41:12" },
        { term: "وَأَوْحَىٰ فِي كُلِّ سَمَاءٍ أَمْرَهَا", meaning: { en: "And inspired in each heaven its command", ur: "اور ہر آسمان میں اس کا حکم بھیج دیا" }, explanation: { en: "Each heaven given its function", ur: "ہر آسمان کو اس کا کام دیا گیا" }, verseRef: "41:12" },
        { term: "وَزَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ", meaning: { en: "And We adorned the nearest heaven with lamps", ur: "اور ہم نے قریب ترین آسمان کو چراغوں سے سجایا" }, explanation: { en: "Stars as decoration and protection", ur: "ستارے بطور زینت اور حفاظت" }, verseRef: "41:12" },
        { term: "وَحِفْظًا", meaning: { en: "And as protection", ur: "اور حفاظت کے لیے" }, explanation: { en: "Stars protect from devils", ur: "ستارے شیاطین سے حفاظت کرتے ہیں" }, verseRef: "41:12" }
      ]
    },

    warningsFromHistory: {
      name: "Warnings from Previous Nations",
      nameUr: "پچھلی قوموں سے عبرت",
      nameArabic: "عبر من الأمم السابقة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَإِنْ أَعْرَضُوا فَقُلْ أَنذَرْتُكُمْ صَاعِقَةً", meaning: { en: "If they turn away, say: I warn you of a thunderbolt", ur: "اگر وہ منہ موڑ لیں تو کہو: میں تمہیں ایک بجلی کی دھماکے سے ڈراتا ہوں" }, explanation: { en: "Warning of sudden punishment", ur: "اچانک عذاب کی تنبیہ" }, verseRef: "41:13" },
        { term: "مِّثْلَ صَاعِقَةِ عَادٍ وَثَمُودَ", meaning: { en: "Like the thunderbolt of Aad and Thamud", ur: "عاد اور ثمود کی بجلی جیسا" }, explanation: { en: "Historical examples of destruction", ur: "تباہی کی تاریخی مثالیں" }, verseRef: "41:13" },
        { term: "إِذْ جَاءَتْهُمُ الرُّسُلُ مِن بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ", meaning: { en: "When messengers came to them from before and after", ur: "جب ان کے پاس آگے سے اور پیچھے سے رسول آئے" }, explanation: { en: "Continuous prophetic mission", ur: "مسلسل نبوی مشن" }, verseRef: "41:14" },
        { term: "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ", meaning: { en: "Worship none but Allah", ur: "اللہ کے سوا کسی کی عبادت نہ کرو" }, explanation: { en: "Core message of all prophets", ur: "تمام انبیاء کا بنیادی پیغام" }, verseRef: "41:14" },
        { term: "لَوْ شَاءَ رَبُّنَا لَأَنزَلَ مَلَائِكَةً", meaning: { en: "If our Lord had willed, He would have sent angels", ur: "اگر ہمارا رب چاہتا تو فرشتے بھیجتا" }, explanation: { en: "Their excuse for rejecting human messengers", ur: "انسانی رسولوں کو ردّ کرنے کا ان کا بہانہ" }, verseRef: "41:14" },
        { term: "فَإِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ", meaning: { en: "Indeed we are disbelievers in what you were sent with", ur: "ہم تو اس چیز کا انکار کرتے ہیں جو تمہارے ساتھ بھیجی گئی" }, explanation: { en: "Outright rejection", ur: "صریح انکار" }, verseRef: "41:14" }
      ]
    },

    aadAndThamud: {
      name: "Story of Aad and Thamud",
      nameUr: "عاد اور ثمود کا قصہ",
      nameArabic: "قصة عاد وثمود",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ", meaning: { en: "As for Aad, they were arrogant in the land", ur: "رہا عاد، تو انہوں نے زمین میں تکبر کیا" }, explanation: { en: "Aad's pride and tyranny", ur: "عاد کا غرور اور ظلم" }, verseRef: "41:15" },
        { term: "بِغَيْرِ الْحَقِّ", meaning: { en: "Without right", ur: "ناحق" }, explanation: { en: "Unjustified arrogance", ur: "بلاجواز تکبر" }, verseRef: "41:15" },
        { term: "مَنْ أَشَدُّ مِنَّا قُوَّةً", meaning: { en: "Who is mightier than us in strength?", ur: "ہم سے زیادہ طاقتور کون ہے؟" }, explanation: { en: "Boasting of physical power", ur: "جسمانی طاقت کا گھمنڈ" }, verseRef: "41:15" },
        { term: "أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً", meaning: { en: "Did they not see that Allah who created them is mightier than them?", ur: "کیا انہوں نے نہیں دیکھا کہ اللہ جس نے انہیں پیدا کیا وہ ان سے زیادہ طاقتور ہے؟" }, explanation: { en: "Allah's power exceeds all creation", ur: "اللہ کی قدرت تمام مخلوق سے بڑھ کر ہے" }, verseRef: "41:15" },
        { term: "رِيحًا صَرْصَرًا فِي أَيَّامٍ نَّحِسَاتٍ", meaning: { en: "A screaming wind on days of misfortune", ur: "منحوس دنوں میں تیز چیختی ہوا" }, explanation: { en: "Wind that destroyed Aad", ur: "وہ ہوا جس نے عاد کو تباہ کیا" }, verseRef: "41:16" },
        { term: "لِّنُذِيقَهُمْ عَذَابَ الْخِزْيِ", meaning: { en: "To make them taste the punishment of disgrace", ur: "تاکہ ہم انہیں ذلت کا عذاب چکھائیں" }, explanation: { en: "Humiliation in this world", ur: "اس دنیا میں ذلت" }, verseRef: "41:16" },
        { term: "وَلَعَذَابُ الْآخِرَةِ أَخْزَىٰ", meaning: { en: "And the punishment of the Hereafter is more disgracing", ur: "اور آخرت کا عذاب اور بھی زیادہ رسوا کن ہے" }, explanation: { en: "Greater disgrace awaits", ur: "اس سے بڑی رسوائی آنے والی ہے" }, verseRef: "41:16" },
        { term: "وَأَمَّا ثَمُودُ فَهَدَيْنَاهُمْ", meaning: { en: "And as for Thamud, We guided them", ur: "اور رہے ثمود تو ہم نے انہیں ہدایت دی" }, explanation: { en: "Thamud received clear guidance", ur: "ثمود کو واضح ہدایت ملی" }, verseRef: "41:17" },
        { term: "فَاسْتَحَبُّوا الْعَمَىٰ عَلَى الْهُدَىٰ", meaning: { en: "But they preferred blindness over guidance", ur: "لیکن انہوں نے ہدایت پر اندھا پن پسند کیا" }, explanation: { en: "Chose misguidance deliberately", ur: "جان بوجھ کر گمراہی اختیار کی" }, verseRef: "41:17" },
        { term: "فَأَخَذَتْهُمْ صَاعِقَةُ الْعَذَابِ الْهُونِ", meaning: { en: "So the thunderbolt of humiliating punishment seized them", ur: "پھر ذلت آمیز عذاب کی بجلی نے انہیں پکڑ لیا" }, explanation: { en: "Sudden destruction", ur: "اچانک تباہی" }, verseRef: "41:17" }
      ]
    },

    bodyPartsTestifying: {
      name: "Body Parts Testifying on Judgment Day",
      nameUr: "قیامت کے دن اعضاء کی گواہی",
      nameArabic: "شهادة الأعضاء يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَيَوْمَ يُحْشَرُ أَعْدَاءُ اللَّهِ إِلَى النَّارِ", meaning: { en: "And the day the enemies of Allah are gathered to the Fire", ur: "اور جس دن اللہ کے دشمنوں کو آگ کی طرف جمع کیا جائے گا" }, explanation: { en: "Enemies of Allah assembled for punishment", ur: "اللہ کے دشمنوں کو سزا کے لیے جمع کیا جائے گا" }, verseRef: "41:19" },
        { term: "فَهُمْ يُوزَعُونَ", meaning: { en: "They will be driven in groups", ur: "وہ گروہوں میں ہانکے جائیں گے" }, explanation: { en: "Organized march to Hell", ur: "جہنم کی طرف منظم قطاریں" }, verseRef: "41:19" },
        { term: "حَتَّىٰ إِذَا مَا جَاءُوهَا", meaning: { en: "Until when they reach it", ur: "یہاں تک کہ جب وہ وہاں پہنچیں" }, explanation: { en: "Arriving at Hellfire", ur: "جہنم کی آگ تک پہنچنا" }, verseRef: "41:20" },
        { term: "شَهِدَ عَلَيْهِمْ سَمْعُهُمْ وَأَبْصَارُهُمْ وَجُلُودُهُم", meaning: { en: "Their hearing, sight, and skins will testify against them", ur: "ان کے کان، آنکھیں اور کھالیں ان کے خلاف گواہی دیں گی" }, explanation: { en: "Body parts become witnesses", ur: "جسم کے اعضاء گواہ بن جائیں گے" }, verseRef: "41:20" },
        { term: "بِمَا كَانُوا يَعْمَلُونَ", meaning: { en: "About what they used to do", ur: "ان کاموں کے بارے میں جو وہ کرتے تھے" }, explanation: { en: "Every deed recorded by the body", ur: "ہر عمل جسم نے ریکارڈ کر لیا" }, verseRef: "41:20" },
        { term: "وَقَالُوا لِجُلُودِهِمْ لِمَ شَهِدتُّمْ عَلَيْنَا", meaning: { en: "They will say to their skins: Why did you testify against us?", ur: "وہ اپنی کھالوں سے کہیں گے: تم نے ہمارے خلاف گواہی کیوں دی؟" }, explanation: { en: "Questioning their own bodies", ur: "اپنے ہی جسم سے سوال" }, verseRef: "41:21" },
        { term: "قَالُوا أَنطَقَنَا اللَّهُ الَّذِي أَنطَقَ كُلَّ شَيْءٍ", meaning: { en: "They will say: Allah made us speak, who makes all things speak", ur: "وہ کہیں گی: ہمیں اللہ نے بولنے کی طاقت دی جس نے ہر چیز کو بولنے کی طاقت دی" }, explanation: { en: "Allah gives speech to all things", ur: "اللہ ہر چیز کو بولنے کی صلاحیت دیتا ہے" }, verseRef: "41:21" },
        { term: "وَهُوَ خَلَقَكُمْ أَوَّلَ مَرَّةٍ", meaning: { en: "And He created you the first time", ur: "اور اسی نے تمہیں پہلی بار پیدا کیا" }, explanation: { en: "The Creator controls all", ur: "خالق ہر چیز پر قابو رکھتا ہے" }, verseRef: "41:21" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: { en: "And to Him you are returned", ur: "اور اسی کی طرف تم لوٹائے جاؤ گے" }, explanation: { en: "Ultimate return to Allah", ur: "اللہ کی طرف حتمی واپسی" }, verseRef: "41:21" },
        { term: "وَمَا كُنتُمْ تَسْتَتِرُونَ أَن يَشْهَدَ عَلَيْكُمْ سَمْعُكُمْ وَلَا أَبْصَارُكُمْ", meaning: { en: "You did not hide yourselves from the testimony of your hearing and sight", ur: "تم اپنے کانوں اور آنکھوں کی گواہی سے نہیں چھپ سکتے تھے" }, explanation: { en: "Could not hide from own body parts", ur: "اپنے ہی اعضاء سے نہیں چھپ سکتے تھے" }, verseRef: "41:22" },
        { term: "وَلَا جُلُودُكُمْ", meaning: { en: "Nor your skins", ur: "اور نہ اپنی کھالوں سے" }, explanation: { en: "Skin as a witness", ur: "جلد بطور گواہ" }, verseRef: "41:22" },
        { term: "وَلَٰكِن ظَنَنتُمْ أَنَّ اللَّهَ لَا يَعْلَمُ كَثِيرًا مِّمَّا تَعْمَلُونَ", meaning: { en: "But you thought Allah did not know much of what you do", ur: "لیکن تمہارا گمان تھا کہ اللہ تمہارے بہت سے کاموں سے بے خبر ہے" }, explanation: { en: "False assumption of divine ignorance", ur: "اللہ کی لاعلمی کا جھوٹا گمان" }, verseRef: "41:22" }
      ]
    },

    evilCompanions: {
      name: "Evil Companions (Qareen)",
      nameUr: "برے ساتھی (قرین)",
      nameArabic: "القرين السوء",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَيَّضْنَا لَهُمْ قُرَنَاءَ", meaning: { en: "And We appointed for them companions", ur: "اور ہم نے ان کے لیے ساتھی مقرر کر دیے" }, explanation: { en: "Shaytan companions assigned to disbelievers", ur: "کافروں کے لیے شیطانی ساتھی مقرر کیے گئے" }, verseRef: "41:25" },
        { term: "فَزَيَّنُوا لَهُم مَّا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ", meaning: { en: "Who made attractive to them what is before and behind them", ur: "جنہوں نے ان کے آگے اور پیچھے جو کچھ ہے اسے خوشنما بنا دیا" }, explanation: { en: "Beautifying sins past and future", ur: "ماضی اور مستقبل کے گناہوں کو خوبصورت بنانا" }, verseRef: "41:25" },
        { term: "وَحَقَّ عَلَيْهِمُ الْقَوْلُ", meaning: { en: "And the word became justified against them", ur: "اور ان پر بات ثابت ہو گئی" }, explanation: { en: "Decree of punishment confirmed", ur: "سزا کا فیصلہ ثابت ہو گیا" }, verseRef: "41:25" },
        { term: "فِي أُمَمٍ قَدْ خَلَتْ مِن قَبْلِهِم", meaning: { en: "Among nations that passed before them", ur: "ان قوموں میں جو ان سے پہلے گزر چکی ہیں" }, explanation: { en: "Joined previous destroyed nations", ur: "پچھلی تباہ شدہ قوموں میں شامل ہو گئے" }, verseRef: "41:25" },
        { term: "مِّنَ الْجِنِّ وَالْإِنسِ", meaning: { en: "Of jinn and mankind", ur: "جنوں اور انسانوں میں سے" }, explanation: { en: "Both species share this fate", ur: "دونوں انواع اس انجام میں شریک ہیں" }, verseRef: "41:25" },
        { term: "إِنَّهُمْ كَانُوا خَاسِرِينَ", meaning: { en: "Indeed they were losers", ur: "بے شک وہ نقصان اٹھانے والے تھے" }, explanation: { en: "Ultimate loss despite worldly gains", ur: "دنیاوی فوائد کے باوجود حتمی نقصان" }, verseRef: "41:25" }
      ]
    },

    disbelieversPlots: {
      name: "Plots Against the Quran",
      nameUr: "قرآن کے خلاف سازشیں",
      nameArabic: "مكر الكافرين بالقرآن",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَقَالَ الَّذِينَ كَفَرُوا لَا تَسْمَعُوا لِهَٰذَا الْقُرْآنِ", meaning: { en: "Disbelievers said: Do not listen to this Quran", ur: "کافروں نے کہا: اس قرآن کو نہ سنو" }, explanation: { en: "Plot to prevent Quran from spreading", ur: "قرآن کی اشاعت روکنے کی سازش" }, verseRef: "41:26" },
        { term: "وَالْغَوْا فِيهِ", meaning: { en: "And make noise during it", ur: "اور اس کے دوران شور مچاؤ" }, explanation: { en: "Drowning out recitation with noise", ur: "شور سے تلاوت کو دبانا" }, verseRef: "41:26" },
        { term: "لَعَلَّكُمْ تَغْلِبُونَ", meaning: { en: "Perhaps you will overcome", ur: "شاید تم غالب آ جاؤ" }, explanation: { en: "Hoping to defeat Islam through disruption", ur: "خلل ڈال کر اسلام کو شکست دینے کی امید" }, verseRef: "41:26" },
        { term: "فَلَنُذِيقَنَّ الَّذِينَ كَفَرُوا عَذَابًا شَدِيدًا", meaning: { en: "So We will surely make disbelievers taste severe punishment", ur: "تو ہم کافروں کو ضرور شدید عذاب چکھائیں گے" }, explanation: { en: "Response to their plotting", ur: "ان کی سازشوں کا جواب" }, verseRef: "41:27" },
        { term: "وَلَنَجْزِيَنَّهُمْ أَسْوَأَ الَّذِي كَانُوا يَعْمَلُونَ", meaning: { en: "And We will recompense them for the worst of what they did", ur: "اور ہم انہیں ان کے بدترین اعمال کی سزا ضرور دیں گے" }, explanation: { en: "Punishment matching worst deeds", ur: "بدترین اعمال کے مطابق سزا" }, verseRef: "41:27" },
        { term: "جَزَاءُ أَعْدَاءِ اللَّهِ النَّارُ", meaning: { en: "That is the recompense of Allah's enemies - the Fire", ur: "اللہ کے دشمنوں کا بدلہ آگ ہے" }, explanation: { en: "Eternal Fire for enemies of Allah", ur: "اللہ کے دشمنوں کے لیے ابدی آگ" }, verseRef: "41:28" },
        { term: "لَهُمْ فِيهَا دَارُ الْخُلْدِ", meaning: { en: "For them therein is the home of eternity", ur: "ان کے لیے اس میں ہمیشگی کا گھر ہے" }, explanation: { en: "Permanent dwelling in Hell", ur: "جہنم میں مستقل رہائش" }, verseRef: "41:28" },
        { term: "جَزَاءً بِمَا كَانُوا بِآيَاتِنَا يَجْحَدُونَ", meaning: { en: "As recompense for rejecting Our signs", ur: "اس بدلے میں کہ وہ ہماری آیات کا انکار کرتے تھے" }, explanation: { en: "Denial of signs leads to punishment", ur: "آیات کا انکار سزا کی طرف لے جاتا ہے" }, verseRef: "41:28" }
      ]
    },

    repellingEvilWithGood: {
      name: "Repelling Evil with Good",
      nameUr: "برائی کو نیکی سے دور کرنا",
      nameArabic: "دفع السيئة بالحسنة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ", meaning: { en: "Good and evil are not equal", ur: "نیکی اور بدی برابر نہیں" }, explanation: { en: "Fundamental inequality between good and evil", ur: "نیکی اور بدی کے درمیان بنیادی عدم مساوات" }, verseRef: "41:34" },
        { term: "ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ", meaning: { en: "Repel with that which is better", ur: "برائی کو بہتر طریقے سے دفع کرو" }, explanation: { en: "Respond to evil with the best conduct", ur: "برائی کا جواب بہترین اخلاق سے دو" }, verseRef: "41:34" },
        { term: "فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ", meaning: { en: "Then the one between you and him is enmity", ur: "پھر وہ جس کے اور تمہارے درمیان دشمنی ہے" }, explanation: { en: "Transforming enemies", ur: "دشمنوں کو بدلنا" }, verseRef: "41:34" },
        { term: "كَأَنَّهُ وَلِيٌّ حَمِيمٌ", meaning: { en: "Becomes as though a devoted friend", ur: "گویا وہ گہرا دوست ہو جائے گا" }, explanation: { en: "Enemy transformed into close friend", ur: "دشمن قریبی دوست میں بدل جاتا ہے" }, verseRef: "41:34" },
        { term: "وَمَا يُلَقَّاهَا إِلَّا الَّذِينَ صَبَرُوا", meaning: { en: "And none is granted it except those who are patient", ur: "اور یہ صفت صرف صبر کرنے والوں کو ملتی ہے" }, explanation: { en: "This quality requires patience", ur: "اس خوبی کے لیے صبر درکار ہے" }, verseRef: "41:35" },
        { term: "وَمَا يُلَقَّاهَا إِلَّا ذُو حَظٍّ عَظِيمٍ", meaning: { en: "And none is granted it except one of great fortune", ur: "اور یہ صرف بڑے نصیب والے کو ملتی ہے" }, explanation: { en: "Sign of immense spiritual fortune", ur: "عظیم روحانی خوش نصیبی کی علامت" }, verseRef: "41:35" }
      ]
    },

    seekingRefuge: {
      name: "Seeking Refuge from Shaytan",
      nameUr: "شیطان سے پناہ مانگنا",
      nameArabic: "الاستعاذة من الشيطان",
      color: '#8B5CF6',
      icon: 'Shield',
      concepts: [
        { term: "وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ", meaning: { en: "And if an evil suggestion from Shaytan provokes you", ur: "اور اگر شیطان کی طرف سے کوئی وسوسہ آئے" }, explanation: { en: "Shaytan's whispers are real", ur: "شیطان کے وسوسے حقیقی ہیں" }, verseRef: "41:36" },
        { term: "فَاسْتَعِذْ بِاللَّهِ", meaning: { en: "Then seek refuge in Allah", ur: "تو اللہ کی پناہ مانگو" }, explanation: { en: "Command to seek divine protection", ur: "الٰہی حفاظت طلب کرنے کا حکم" }, verseRef: "41:36" },
        { term: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ", meaning: { en: "Indeed He is the All-Hearing, All-Knowing", ur: "بے شک وہ سب کچھ سننے والا، جاننے والا ہے" }, explanation: { en: "Allah hears and knows all", ur: "اللہ سب کچھ سنتا اور جانتا ہے" }, verseRef: "41:36" }
      ]
    },

    signsOfAllah: {
      name: "Signs of Allah in Creation",
      nameUr: "تخلیق میں اللہ کی نشانیاں",
      nameArabic: "آيات الله في الخلق",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ", meaning: { en: "And among His signs are the night and day", ur: "اور اس کی نشانیوں میں سے رات اور دن ہیں" }, explanation: { en: "Day and night as divine signs", ur: "دن اور رات بطور الٰہی نشانیاں" }, verseRef: "41:37" },
        { term: "وَالشَّمْسُ وَالْقَمَرُ", meaning: { en: "And the sun and moon", ur: "اور سورج اور چاند" }, explanation: { en: "Celestial bodies as signs", ur: "آسمانی اجسام بطور نشانیاں" }, verseRef: "41:37" },
        { term: "لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ", meaning: { en: "Do not prostrate to the sun or moon", ur: "سورج اور چاند کو سجدہ نہ کرو" }, explanation: { en: "Worship Creator, not creation", ur: "خالق کی عبادت کرو، مخلوق کی نہیں" }, verseRef: "41:37" },
        { term: "وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ", meaning: { en: "But prostrate to Allah who created them", ur: "بلکہ اللہ کو سجدہ کرو جس نے انہیں پیدا کیا" }, explanation: { en: "Prostration for Allah alone", ur: "سجدہ صرف اللہ کے لیے" }, verseRef: "41:37" },
        { term: "وَمِنْ آيَاتِهِ أَنَّكَ تَرَى الْأَرْضَ خَاشِعَةً", meaning: { en: "And among His signs is that you see the earth barren", ur: "اور اس کی نشانیوں میں سے ہے کہ تم زمین کو سوکھی دیکھتے ہو" }, explanation: { en: "Dead earth as a sign", ur: "مردہ زمین بطور نشانی" }, verseRef: "41:39" },
        { term: "فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ وَرَبَتْ", meaning: { en: "When We send water upon it, it stirs and grows", ur: "جب ہم اس پر پانی اتارتے ہیں تو وہ جنبش میں آتی اور بڑھتی ہے" }, explanation: { en: "Revival of earth through rain", ur: "بارش سے زمین کی زندگی" }, verseRef: "41:39" },
        { term: "إِنَّ الَّذِي أَحْيَاهَا لَمُحْيِي الْمَوْتَىٰ", meaning: { en: "Indeed He who revives it is the Reviver of the dead", ur: "بے شک جس نے اسے زندہ کیا وہ مردوں کو بھی زندہ کرنے والا ہے" }, explanation: { en: "Proof of resurrection", ur: "قیامت کی دلیل" }, verseRef: "41:39" },
        { term: "إِنَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: { en: "Indeed He is over all things capable", ur: "بے شک وہ ہر چیز پر قادر ہے" }, explanation: { en: "Allah's unlimited power", ur: "اللہ کی لامحدود قدرت" }, verseRef: "41:39" }
      ]
    },

    believersAndAngels: {
      name: "Angels and the Believers",
      nameUr: "فرشتے اور مومنین",
      nameArabic: "الملائكة والمؤمنون",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا", meaning: { en: "Those who say Our Lord is Allah and remain steadfast", ur: "جو کہتے ہیں ہمارا رب اللہ ہے پھر ثابت قدم رہتے ہیں" }, explanation: { en: "Declaration with persistence", ur: "اعلان کے ساتھ استقامت" }, verseRef: "41:30" },
        { term: "تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ", meaning: { en: "The angels descend upon them", ur: "ان پر فرشتے اترتے ہیں" }, explanation: { en: "Angels come to believers", ur: "فرشتے مومنین کے پاس آتے ہیں" }, verseRef: "41:30" },
        { term: "أَلَّا تَخَافُوا وَلَا تَحْزَنُوا", meaning: { en: "Fear not nor grieve", ur: "نہ ڈرو اور نہ غمگین ہو" }, explanation: { en: "Angels bring reassurance", ur: "فرشتے تسلی لاتے ہیں" }, verseRef: "41:30" },
        { term: "وَأَبْشِرُوا بِالْجَنَّةِ الَّتِي كُنتُمْ تُوعَدُونَ", meaning: { en: "And receive good tidings of Paradise promised to you", ur: "اور اس جنت کی خوشخبری حاصل کرو جس کا تم سے وعدہ کیا گیا ہے" }, explanation: { en: "Glad tidings of Paradise", ur: "جنت کی خوشخبری" }, verseRef: "41:30" },
        { term: "نَحْنُ أَوْلِيَاؤُكُمْ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ", meaning: { en: "We are your allies in worldly life and Hereafter", ur: "ہم دنیا کی زندگی اور آخرت میں تمہارے ساتھی ہیں" }, explanation: { en: "Angels as protectors", ur: "فرشتے بطور محافظ" }, verseRef: "41:31" },
        { term: "وَلَكُمْ فِيهَا مَا تَشْتَهِي أَنفُسُكُمْ", meaning: { en: "And you will have therein whatever your souls desire", ur: "اور تمہارے لیے اس میں وہ سب ہے جو تمہارا دل چاہے" }, explanation: { en: "All desires fulfilled in Paradise", ur: "جنت میں تمام خواہشات پوری ہوں گی" }, verseRef: "41:31" },
        { term: "وَلَكُمْ فِيهَا مَا تَدَّعُونَ", meaning: { en: "And you will have therein whatever you request", ur: "اور تمہارے لیے اس میں وہ سب ہے جو تم مانگو" }, explanation: { en: "Every request granted", ur: "ہر مانگ پوری کی جائے گی" }, verseRef: "41:31" },
        { term: "نُزُلًا مِّنْ غَفُورٍ رَّحِيمٍ", meaning: { en: "Accommodation from a Forgiving and Merciful", ur: "بخشنے والے رحم کرنے والے کی طرف سے مہمان نوازی" }, explanation: { en: "Hospitality from Allah", ur: "اللہ کی طرف سے مہمان نوازی" }, verseRef: "41:32" }
      ]
    },

    bestSpeech: {
      name: "The Best Speech",
      nameUr: "بہترین بات",
      nameArabic: "أحسن القول",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَنْ أَحْسَنُ قَوْلًا", meaning: { en: "And who is better in speech", ur: "اور اس سے بہتر بات کس کی ہے" }, explanation: { en: "Rhetorical question about best speech", ur: "بہترین کلام کے بارے میں سوالیہ انداز" }, verseRef: "41:33" },
        { term: "مِّمَّن دَعَا إِلَى اللَّهِ", meaning: { en: "Than one who calls to Allah", ur: "اس شخص سے جو اللہ کی طرف بلائے" }, explanation: { en: "Calling people to Allah", ur: "لوگوں کو اللہ کی طرف بلانا" }, verseRef: "41:33" },
        { term: "وَعَمِلَ صَالِحًا", meaning: { en: "And does righteous deeds", ur: "اور نیک عمل کرے" }, explanation: { en: "Backing words with action", ur: "باتوں کو عمل سے ثابت کرنا" }, verseRef: "41:33" },
        { term: "وَقَالَ إِنَّنِي مِنَ الْمُسْلِمِينَ", meaning: { en: "And says: I am of the Muslims", ur: "اور کہے: میں مسلمانوں میں سے ہوں" }, explanation: { en: "Proud declaration of faith", ur: "ایمان کا فخریہ اعلان" }, verseRef: "41:33" }
      ]
    },

    deviatingFromSigns: {
      name: "Those Who Deviate from Signs",
      nameUr: "آیات میں کجی کرنے والے",
      nameArabic: "الذين يلحدون في آياتنا",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "إِنَّ الَّذِينَ يُلْحِدُونَ فِي آيَاتِنَا", meaning: { en: "Those who deviate concerning Our signs", ur: "جو لوگ ہماری آیات میں کجی کرتے ہیں" }, explanation: { en: "Distorting divine signs", ur: "الٰہی نشانیوں کو مسخ کرنا" }, verseRef: "41:40" },
        { term: "لَا يَخْفَوْنَ عَلَيْنَا", meaning: { en: "Are not concealed from Us", ur: "ہم سے چھپے نہیں ہیں" }, explanation: { en: "Allah knows all deviators", ur: "اللہ تمام منحرف لوگوں کو جانتا ہے" }, verseRef: "41:40" },
        { term: "أَفَمَن يُلْقَىٰ فِي النَّارِ خَيْرٌ", meaning: { en: "Is one cast into Fire better", ur: "کیا جو آگ میں ڈالا جائے وہ بہتر ہے" }, explanation: { en: "Comparison of outcomes", ur: "انجام کا موازنہ" }, verseRef: "41:40" },
        { term: "أَم مَّن يَأْتِي آمِنًا يَوْمَ الْقِيَامَةِ", meaning: { en: "Or one who comes secure on Day of Resurrection", ur: "یا وہ جو قیامت کے دن امن سے آئے" }, explanation: { en: "Security on Judgment Day", ur: "قیامت کے دن امان" }, verseRef: "41:40" },
        { term: "اعْمَلُوا مَا شِئْتُمْ", meaning: { en: "Do what you will", ur: "جو چاہو کرو" }, explanation: { en: "Freedom to choose, but consequences follow", ur: "انتخاب کی آزادی، لیکن نتائج بھگتنا ہوں گے" }, verseRef: "41:40" },
        { term: "إِنَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ", meaning: { en: "Indeed He sees what you do", ur: "بے شک وہ تمہارے اعمال کو دیکھ رہا ہے" }, explanation: { en: "Allah sees all actions", ur: "اللہ تمام اعمال دیکھتا ہے" }, verseRef: "41:40" }
      ]
    },

    quranIndestructible: {
      name: "Protection of the Quran",
      nameUr: "قرآن کی حفاظت",
      nameArabic: "حفظ القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "إِنَّ الَّذِينَ كَفَرُوا بِالذِّكْرِ لَمَّا جَاءَهُمْ", meaning: { en: "Those who disbelieve in the message when it comes", ur: "جنہوں نے ذکر (قرآن) کا انکار کیا جب وہ ان کے پاس آیا" }, explanation: { en: "Rejection despite its arrival", ur: "آنے کے باوجود انکار" }, verseRef: "41:41" },
        { term: "وَإِنَّهُ لَكِتَابٌ عَزِيزٌ", meaning: { en: "And indeed it is a mighty Book", ur: "اور بے شک یہ ایک بلند مرتبہ کتاب ہے" }, explanation: { en: "Quran's invincible nature", ur: "قرآن کی ناقابل تسخیر فطرت" }, verseRef: "41:41" },
        { term: "لَّا يَأْتِيهِ الْبَاطِلُ مِن بَيْنِ يَدَيْهِ وَلَا مِنْ خَلْفِهِ", meaning: { en: "Falsehood cannot approach it from before or behind", ur: "باطل نہ آگے سے آ سکتا ہے نہ پیچھے سے" }, explanation: { en: "Protected from all corruption", ur: "ہر قسم کی تحریف سے محفوظ" }, verseRef: "41:42" },
        { term: "تَنزِيلٌ مِّنْ حَكِيمٍ حَمِيدٍ", meaning: { en: "A revelation from One Wise and Praiseworthy", ur: "حکمت والے، تعریف کے لائق کی طرف سے نازل کردہ" }, explanation: { en: "Source guarantees perfection", ur: "ماخذ کمال کی ضمانت ہے" }, verseRef: "41:42" }
      ]
    },

    consolationToProphet: {
      name: "Consolation to the Prophet",
      nameUr: "نبی ﷺ کی تسلی",
      nameArabic: "تسلية النبي",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "مَّا يُقَالُ لَكَ إِلَّا مَا قَدْ قِيلَ لِلرُّسُلِ مِن قَبْلِكَ", meaning: { en: "Nothing is said to you except what was said to messengers before", ur: "تم سے وہی کہا جا رہا ہے جو تم سے پہلے رسولوں سے کہا گیا" }, explanation: { en: "Same treatment as previous prophets", ur: "پچھلے انبیاء جیسا سلوک" }, verseRef: "41:43" },
        { term: "إِنَّ رَبَّكَ لَذُو مَغْفِرَةٍ", meaning: { en: "Indeed your Lord is possessor of forgiveness", ur: "بے شک تمہارا رب مغفرت والا ہے" }, explanation: { en: "Allah's abundant forgiveness", ur: "اللہ کی وافر مغفرت" }, verseRef: "41:43" },
        { term: "وَذُو عِقَابٍ أَلِيمٍ", meaning: { en: "And possessor of painful punishment", ur: "اور دردناک سزا دینے والا بھی ہے" }, explanation: { en: "Balance of mercy and justice", ur: "رحمت اور عدل کا توازن" }, verseRef: "41:43" }
      ]
    },

    allahsKnowledge: {
      name: "Allah's Complete Knowledge",
      nameUr: "اللہ کا مکمل علم",
      nameArabic: "علم الله الشامل",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "إِلَيْهِ يُرَدُّ عِلْمُ السَّاعَةِ", meaning: { en: "To Him is referred knowledge of the Hour", ur: "قیامت کا علم اسی کی طرف لوٹایا جاتا ہے" }, explanation: { en: "Only Allah knows when Day of Judgment", ur: "صرف اللہ جانتا ہے کہ قیامت کب آئے گی" }, verseRef: "41:47" },
        { term: "وَمَا تَخْرُجُ مِن ثَمَرَاتٍ مِّنْ أَكْمَامِهَا", meaning: { en: "No fruit emerges from its covering", ur: "کوئی پھل اپنے غلاف سے نہیں نکلتا" }, explanation: { en: "Allah knows all growth", ur: "اللہ ہر اگنے والی چیز کو جانتا ہے" }, verseRef: "41:47" },
        { term: "وَمَا تَحْمِلُ مِنْ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلْمِهِ", meaning: { en: "No female conceives or delivers except with His knowledge", ur: "کوئی مادہ حاملہ نہیں ہوتی اور نہ جنتی ہے مگر اس کے علم سے" }, explanation: { en: "All reproduction known to Allah", ur: "ہر تولید اللہ کے علم میں ہے" }, verseRef: "41:47" },
        { term: "وَيَوْمَ يُنَادِيهِمْ أَيْنَ شُرَكَائِي", meaning: { en: "And the day He calls them: Where are My partners?", ur: "اور جس دن وہ انہیں پکارے گا: کہاں ہیں میرے شریک؟" }, explanation: { en: "Challenge on Judgment Day", ur: "قیامت کے دن چیلنج" }, verseRef: "41:47" },
        { term: "قَالُوا آذَنَّاكَ مَا مِنَّا مِن شَهِيدٍ", meaning: { en: "They will say: We inform You, none of us is witness", ur: "وہ کہیں گے: ہم آپ کو بتاتے ہیں، ہم میں سے کوئی گواہ نہیں" }, explanation: { en: "False gods cannot testify", ur: "جھوٹے معبود گواہی نہیں دے سکتے" }, verseRef: "41:47" },
        { term: "وَضَلَّ عَنْهُم مَّا كَانُوا يَدْعُونَ مِن قَبْلُ", meaning: { en: "And lost from them is what they used to invoke before", ur: "اور ان سے وہ سب غائب ہو جائیں گے جنہیں وہ پہلے پکارتے تھے" }, explanation: { en: "False deities disappear", ur: "جھوٹے معبود غائب ہو جائیں گے" }, verseRef: "41:48" }
      ]
    },

    humanNature: {
      name: "Human Nature",
      nameUr: "انسانی فطرت",
      nameArabic: "طبيعة الإنسان",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "لَّا يَسْأَمُ الْإِنسَانُ مِن دُعَاءِ الْخَيْرِ", meaning: { en: "Man does not tire of asking for good", ur: "انسان بھلائی مانگتے مانگتے نہیں تھکتا" }, explanation: { en: "Endless desire for good things", ur: "اچھی چیزوں کی لامتناہی خواہش" }, verseRef: "41:49" },
        { term: "وَإِن مَّسَّهُ الشَّرُّ فَيَئُوسٌ قَنُوطٌ", meaning: { en: "But if evil touches him, he is despairing", ur: "لیکن اگر اسے برائی چھو جائے تو مایوس اور ناامید ہو جاتا ہے" }, explanation: { en: "Quick to despair in hardship", ur: "مشکل میں جلدی مایوس ہونا" }, verseRef: "41:49" },
        { term: "وَلَئِنْ أَذَقْنَاهُ رَحْمَةً مِّنَّا مِن بَعْدِ ضَرَّاءَ مَسَّتْهُ", meaning: { en: "If We let him taste mercy after hardship", ur: "اگر ہم اسے تکلیف کے بعد اپنی رحمت چکھائیں" }, explanation: { en: "Response to relief after difficulty", ur: "مشکل کے بعد آسانی پر ردعمل" }, verseRef: "41:50" },
        { term: "لَيَقُولَنَّ هَٰذَا لِي", meaning: { en: "He will surely say: This is due to me", ur: "وہ ضرور کہے گا: یہ میرا حق ہے" }, explanation: { en: "Taking credit for blessings", ur: "نعمتوں کو اپنی محنت سمجھنا" }, verseRef: "41:50" },
        { term: "وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً", meaning: { en: "And I do not think the Hour will occur", ur: "اور مجھے نہیں لگتا کہ قیامت آئے گی" }, explanation: { en: "Denying Judgment Day", ur: "قیامت کا انکار" }, verseRef: "41:50" },
        { term: "وَلَئِن رُّجِعْتُ إِلَىٰ رَبِّي إِنَّ لِي عِندَهُ لَلْحُسْنَىٰ", meaning: { en: "And if I am returned to my Lord, I will have best with Him", ur: "اور اگر میں اپنے رب کی طرف لوٹایا بھی گیا تو اس کے پاس بھی میرے لیے بہتری ہوگی" }, explanation: { en: "False confidence about Hereafter", ur: "آخرت کے بارے میں جھوٹا اعتماد" }, verseRef: "41:50" }
      ]
    },

    signsInSelvesAndHorizons: {
      name: "Signs in Horizons and Selves",
      nameUr: "آفاق اور انفس میں نشانیاں",
      nameArabic: "الآيات في الآفاق والأنفس",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ", meaning: { en: "We will show them Our signs in the horizons", ur: "ہم انہیں آفاق میں اپنی نشانیاں دکھائیں گے" }, explanation: { en: "External signs in the universe", ur: "کائنات میں بیرونی نشانیاں" }, verseRef: "41:53" },
        { term: "وَفِي أَنفُسِهِمْ", meaning: { en: "And in themselves", ur: "اور خود ان کے اندر" }, explanation: { en: "Internal signs within humans", ur: "انسانوں کے اندر باطنی نشانیاں" }, verseRef: "41:53" },
        { term: "حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ", meaning: { en: "Until it becomes clear to them that it is the truth", ur: "یہاں تک کہ ان پر واضح ہو جائے کہ یہ حق ہے" }, explanation: { en: "Truth becomes undeniable", ur: "حق ناقابل انکار ہو جاتا ہے" }, verseRef: "41:53" },
        { term: "أَوَلَمْ يَكْفِ بِرَبِّكَ أَنَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ", meaning: { en: "Is it not sufficient that your Lord is Witness over all things?", ur: "کیا یہ کافی نہیں کہ تمہارا رب ہر چیز پر گواہ ہے؟" }, explanation: { en: "Allah witnesses everything", ur: "اللہ ہر چیز کا گواہ ہے" }, verseRef: "41:53" },
        { term: "أَلَا إِنَّهُمْ فِي مِرْيَةٍ مِّن لِّقَاءِ رَبِّهِمْ", meaning: { en: "Unquestionably they are in doubt about meeting their Lord", ur: "خبردار! وہ اپنے رب سے ملاقات میں شک میں ہیں" }, explanation: { en: "Root cause is doubting the meeting", ur: "بنیادی وجہ ملاقات میں شک ہے" }, verseRef: "41:54" },
        { term: "أَلَا إِنَّهُ بِكُلِّ شَيْءٍ مُّحِيطٌ", meaning: { en: "Unquestionably He encompasses all things", ur: "خبردار! وہ ہر چیز کو گھیرے ہوئے ہے" }, explanation: { en: "Allah's all-encompassing knowledge and power", ur: "اللہ کا ہر چیز پر محیط علم اور قدرت" }, verseRef: "41:54" }
      ]
    }
  },

  relationships: [
    { from: "كتاب فصلت آياته", to: "قرآنا عربيا", type: "description", description: { en: "Clear Book revealed in Arabic", ur: "عربی میں نازل واضح کتاب" } },
    { from: "بشيرا", to: "نذيرا", type: "complementary", description: { en: "Good news and warning together", ur: "خوشخبری اور تنبیہ ساتھ ساتھ" } },
    { from: "هدى", to: "شفاء", type: "function", description: { en: "Quran guides and heals believers", ur: "قرآن مومنین کی رہنمائی اور شفاء کرتا ہے" } },
    { from: "سمعهم وأبصارهم وجلودهم", to: "شهد عليهم", type: "testimony", description: { en: "Body parts become witnesses against sinners", ur: "جسم کے اعضاء گنہگاروں کے خلاف گواہی دیتے ہیں" } },
    { from: "الحسنة", to: "السيئة", type: "contrast", description: { en: "Good and evil are fundamentally unequal", ur: "نیکی اور بدی بنیادی طور پر غیر مساوی ہیں" } },
    { from: "ادفع بالتي هي أحسن", to: "كأنه ولي حميم", type: "transformation", description: { en: "Responding with good transforms enemies to friends", ur: "نیکی سے جواب دشمنوں کو دوستوں میں بدل دیتا ہے" } },
    { from: "ربنا الله", to: "استقاموا", type: "requirement", description: { en: "Declaration must be followed by steadfastness", ur: "اعلان کے بعد استقامت ضروری ہے" } },
    { from: "استحبوا العمى", to: "صاعقة العذاب", type: "consequence", description: { en: "Choosing blindness leads to thunderbolt punishment", ur: "اندھا پن چننا بجلی کی سزا کی طرف لے جاتا ہے" } },
    { from: "آيات في الآفاق", to: "آيات في أنفسهم", type: "parallel", description: { en: "Signs external and internal both point to truth", ur: "بیرونی اور اندرونی نشانیاں دونوں حق کی طرف اشارہ کرتی ہیں" } },
    { from: "لا يأتيه الباطل", to: "تنزيل من حكيم حميد", type: "protection", description: { en: "Divine source ensures Quran's protection", ur: "الٰہی ماخذ قرآن کی حفاظت کو یقینی بناتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Ha Mim and Quran Description", verses: "41:1-5", description: { en: "Opening letters, Quran as detailed revelation in Arabic", ur: "حروف مقطعات، قرآن بطور تفصیلی عربی وحی" } },
      { stage: 2, theme: "Rejection of the Message", verses: "41:6-8", description: { en: "Prophet is human, disbelievers turn away", ur: "نبی ﷺ انسان ہیں، کافر منہ موڑتے ہیں" } },
      { stage: 3, theme: "Creation in Six Days", verses: "41:9-12", description: { en: "Earth and heavens created with provisions and order", ur: "زمین اور آسمان رزق اور نظم کے ساتھ بنائے گئے" } },
      { stage: 4, theme: "Warning from Aad and Thamud", verses: "41:13-18", description: { en: "Historical examples of arrogance and destruction", ur: "تکبر اور تباہی کی تاریخی مثالیں" } },
      { stage: 5, theme: "Body Parts Testifying", verses: "41:19-25", description: { en: "Hearing, sight, and skin witness against sinners", ur: "کان، آنکھیں اور جلد گنہگاروں کے خلاف گواہی دیتے ہیں" } },
      { stage: 6, theme: "Plots Against Quran", verses: "41:26-29", description: { en: "Disbelievers' strategy to drown out recitation", ur: "کافروں کی تلاوت کو دبانے کی حکمت عملی" } },
      { stage: 7, theme: "Angels with Believers", verses: "41:30-32", description: { en: "Steadfast believers receive angelic support", ur: "ثابت قدم مومنین کو فرشتوں کی مدد ملتی ہے" } },
      { stage: 8, theme: "Best Speech and Conduct", verses: "41:33-36", description: { en: "Calling to Allah, repelling evil with good", ur: "اللہ کی طرف بلانا، برائی کو بھلائی سے دفع کرنا" } },
      { stage: 9, theme: "Signs of Allah", verses: "41:37-39", description: { en: "Cosmic signs and resurrection proof", ur: "کائناتی نشانیاں اور قیامت کی دلیل" } },
      { stage: 10, theme: "Quran's Protection", verses: "41:40-44", description: { en: "Quran invincible, guidance and healing for believers", ur: "قرآن ناقابل تسخیر، مومنین کے لیے ہدایت اور شفاء" } },
      { stage: 11, theme: "Human Nature", verses: "41:45-50", description: { en: "Man's ingratitude and false assumptions", ur: "انسان کی ناشکری اور جھوٹے گمان" } },
      { stage: 12, theme: "Signs in Horizons and Selves", verses: "41:51-54", description: { en: "External and internal signs prove truth", ur: "بیرونی اور اندرونی نشانیاں حق کو ثابت کرتی ہیں" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Repel evil with good", how: "When someone wrongs you, respond with kindness - this transforms enemies into friends", verse: "41:34" },
      { principle: "Seek refuge from Shaytan", how: "When anger or evil thoughts arise, immediately say: A'udhu billahi min ash-shaytanir rajim", verse: "41:36" },
      { principle: "Declare faith and remain steadfast", how: "Saying 'My Lord is Allah' must be followed by consistent righteous action", verse: "41:30" },
      { principle: "Call others to Allah", how: "The best speech is inviting to Allah while practicing what you preach", verse: "41:33" },
      { principle: "Prostrate to the Creator only", how: "Marvel at creation but worship only the Creator, not sun, moon, or nature", verse: "41:37" },
      { principle: "Remember your body records everything", how: "Your limbs will testify on Judgment Day - be conscious of what you do", verse: "41:20-21" },
      { principle: "Don't despair in hardship", how: "Avoid the human tendency to lose hope when difficulty strikes", verse: "41:49" },
      { principle: "Study signs in horizons and self", how: "Reflect on both external universe and internal human design", verse: "41:53" },
      { principle: "Trust that Quran is healing", how: "Approach Quran as medicine for spiritual ailments, not just information", verse: "41:44" }
    ]
  },

  uniqueInsight: {
    title: { en: "Fussilat - The Detailed Explanation and Transformation", ur: "فصلت - تفصیلی بیان اور تبدیلی" },
    insight: { en: "Surah Fussilat (meaning 'Detailed' or 'Clearly Explained') is the second of the Ha-Mim series and contains one of the most powerful psychological insights in the Quran. The teaching in verse 34 - 'Repel evil with that which is better, and the one between you and him is enmity will become like a devoted friend' - is not mere idealism but a profound understanding of human psychology. When met with unexpected kindness, the aggressor's neural patterns are disrupted; their prepared hostility has nowhere to go. The verse continues that this quality is only granted to 'those who are patient' and 'one of great fortune' - recognizing that overcoming the instinct for retaliation requires spiritual maturity. The surah's unique concept of body parts testifying (41:20-22) presents a terrifying scene where hearing, sight, and skin become witnesses. The sinners' question - 'Why did you testify against us?' - and the response - 'Allah who makes all things speak made us speak' - illustrates that nothing in creation can hide from Allah. Modern science's understanding of how our bodies record our actions (epigenetics, cellular memory) gives new appreciation to this imagery.", ur: "سورۃ فصلت (جس کا مطلب 'تفصیلی' یا 'واضح بیان' ہے) حم سلسلے کی دوسری سورت ہے اور اس میں قرآن کی سب سے طاقتور نفسیاتی بصیرتوں میں سے ایک ہے۔ آیت 34 کی تعلیم - 'برائی کو بہتر طریقے سے دفع کرو، اور وہ جس کے اور تمہارے درمیان دشمنی ہے گویا گہرا دوست بن جائے گا' - محض خیال پرستی نہیں بلکہ انسانی نفسیات کی گہری سمجھ ہے۔ جب غیر متوقع مہربانی کا سامنا ہو تو حملہ آور کے ذہنی نمونے درہم برہم ہو جاتے ہیں؛ اس کی تیار شدہ دشمنی کو کوئی جگہ نہیں ملتی۔ آیت آگے بتاتی ہے کہ یہ صفت صرف 'صبر کرنے والوں' اور 'بڑے نصیب والوں' کو عطا ہوتی ہے - جو اس بات کی تسلیم ہے کہ انتقام کی فطری خواہش پر قابو پانے کے لیے روحانی پختگی درکار ہے۔ سورت کا منفرد تصور کہ جسم کے اعضاء گواہی دیں گے (41:20-22) ایک خوفناک منظر پیش کرتا ہے جہاں کان، آنکھ اور جلد گواہ بن جاتے ہیں۔ گنہگاروں کا سوال - 'تم نے ہمارے خلاف گواہی کیوں دی؟' - اور جواب - 'اللہ نے ہمیں بولنے کی طاقت دی جس نے ہر چیز کو بولنے کی طاقت دی' - یہ واضح کرتا ہے کہ مخلوق میں کوئی چیز اللہ سے نہیں چھپ سکتی۔ جدید سائنس کی سمجھ کہ ہمارے جسم ہمارے اعمال کو ریکارڈ کرتے ہیں (ایپی جینیٹکس، سیلولر میموری) اس تصویر کشی کی نئی قدر کرنے کا موقع دیتی ہے۔" }
  },

  historicalContext: {
    note: { en: "This Makki surah was revealed during intense opposition to the Prophet in Mecca. The instruction to 'repel evil with good' (41:34) was particularly relevant as Muslims faced daily persecution. The reference to disbelievers making noise during Quran recitation (41:26) describes actual tactics used by the Quraysh to prevent people from hearing the message. The opening 'Ha Mim' connects this to a series of seven surahs (40-46) all beginning with these letters, revealed during the middle Makkan period. The surah's name 'Fussilat' (Detailed) refers to verse 3 where the Quran is described as having its verses 'clearly explained' - a response to accusations that it was unclear or incomprehensible.", ur: "یہ مکی سورت مکہ میں نبی ﷺ کی شدید مخالفت کے دوران نازل ہوئی۔ 'برائی کو بھلائی سے دفع کرو' (41:34) کی ہدایت خاص طور پر اس وقت مناسب تھی جب مسلمان روزانہ ظلم و ستم کا سامنا کر رہے تھے۔ قرآن کی تلاوت کے دوران شور مچانے کا حوالہ (41:26) قریش کی حقیقی حکمت عملی بیان کرتا ہے جو لوگوں کو پیغام سننے سے روکنے کے لیے استعمال کی جاتی تھی۔ 'حم' کی ابتداء اسے سات سورتوں (40-46) کے سلسلے سے جوڑتی ہے جو سب انہی حروف سے شروع ہوتی ہیں اور مکی دور کے درمیانی حصے میں نازل ہوئیں۔ سورت کا نام 'فصلت' (تفصیلی) آیت 3 سے ماخوذ ہے جہاں قرآن کی آیات کو 'واضح بیان' کیا گیا بتایا گیا ہے - ان الزامات کا جواب کہ یہ غیر واضح یا ناقابل فہم ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "حم", example: { en: "Ha Mim", ur: "حم" }, effect: { en: "Mysterious letters that captivate attention and establish Quranic uniqueness", ur: "حروف مقطعات جو توجہ مبذول کراتے ہیں اور قرآنی انفرادیت قائم کرتے ہیں" } },
      { feature: "فُصِّلَتْ", example: { en: "Detailed/Explained", ur: "تفصیل سے بیان کیا گیا" }, effect: { en: "Passive intensive form - thoroughly and completely explained", ur: "مبالغہ کا مجہول صیغہ - مکمل اور جامع طور پر بیان کیا گیا" } },
      { feature: "صَرْصَرًا", example: { en: "Screaming wind", ur: "چیختی ہوا" }, effect: { en: "Onomatopoeia - the sound of the destructive wind that destroyed Aad", ur: "صوتی تاثر - اس تباہ کن ہوا کی آواز جس نے عاد کو تباہ کیا" } },
      { feature: "أَتَيْنَا طَائِعِينَ", example: { en: "We come willingly", ur: "ہم خوشی سے آتے ہیں" }, effect: { en: "Creation speaking - personification showing universal submission", ur: "مخلوق بول رہی ہے - تشخیص جو عالمگیر اطاعت ظاہر کرتی ہے" } },
      { feature: "وَلِيٌّ حَمِيمٌ", example: { en: "Devoted friend", ur: "گہرا دوست" }, effect: { en: "Hamim means warm/intimate - beyond ordinary friendship", ur: "حمیم کا مطلب گرم/مخلص - عام دوستی سے بالاتر" } },
      { feature: "الْآفَاقِ", example: { en: "Horizons", ur: "آفاق/کنارے" }, effect: { en: "Plural of ufuq - vast cosmic horizons containing signs", ur: "افق کی جمع - نشانیوں سے بھرے وسیع کائناتی افق" } }
    ]
  },

  sajdahVerse: {
    verse: 37,
    text: "وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ وَالشَّمْسُ وَالْقَمَرُ ۚ لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ",
    translation: { en: "And among His signs are the night and day and the sun and moon. Do not prostrate to the sun or moon, but prostrate to Allah who created them, if it is Him you worship", ur: "اور اس کی نشانیوں میں سے رات اور دن اور سورج اور چاند ہیں۔ سورج اور چاند کو سجدہ نہ کرو بلکہ اللہ کو سجدہ کرو جس نے انہیں پیدا کیا، اگر تم اسی کی عبادت کرتے ہو" },
    note: { en: "This is a verse of sajdah (prostration). The command is clear - worship the Creator, not the creation. This corrects the practice of ancient peoples who worshipped celestial bodies.", ur: "یہ سجدے کی آیت ہے۔ حکم واضح ہے - خالق کی عبادت کرو، مخلوق کی نہیں۔ یہ قدیم لوگوں کے آسمانی اجسام کی پرستش کے رواج کی اصلاح کرتی ہے۔" }
  },

  hamimConnection: {
    position: "Second of seven Ha-Mim surahs",
    series: [40, 41, 42, 43, 44, 45, 46],
    names: ["Ghafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf"],
    commonThemes: [
      "Divine revelation and its defense",
      "Resurrection and accountability",
      "Stories of previous nations",
      "Prophetic consolation",
      "Challenge to disbelievers"
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "41:11", topic: "Cosmic smoke", note: { en: "Heavens described as 'smoke' (dukhan) - matches modern understanding of early universe as hot gas/plasma", ur: "آسمانوں کو 'دھواں' (دخان) کہا گیا - ابتدائی کائنات کے گرم گیس/پلازما ہونے کی جدید سمجھ سے مطابقت" } },
      { verse: "41:9-12", topic: "Creation timeline", note: { en: "Six days/periods for creation - stages not instantaneous, consistent with cosmic evolution", ur: "تخلیق کے چھ دن/ادوار - مراحل فوری نہیں بلکہ کائناتی ارتقاء سے ہم آہنگ" } },
      { verse: "41:53", topic: "Signs in horizons and selves", note: { en: "External cosmos and internal human biology both reveal divine design", ur: "بیرونی کائنات اور اندرونی انسانی حیاتیات دونوں الٰہی ڈیزائن ظاہر کرتی ہیں" } },
      { verse: "41:39", topic: "Earth revival", note: { en: "Dead earth reviving with water - water cycle and plant germination as resurrection proof", ur: "مردہ زمین کا پانی سے زندہ ہونا - پانی کا چکر اور پودوں کا اگنا بطور قیامت کی دلیل" } },
      { verse: "41:21", topic: "Body recording", note: { en: "Concept that body records actions - modern research on cellular memory and epigenetics", ur: "یہ تصور کہ جسم اعمال ریکارڈ کرتا ہے - سیلولر میموری اور ایپی جینیٹکس پر جدید تحقیق" } }
    ]
  }
};

export default ONTOLOGY;
