/**
 * Surah Qaf (50) - Ontology of Quranic Concepts
 * The Letter Qaf
 * Theme: Resurrection proofs, recording angels, Hell and Paradise descriptions
 * Note: Prophet Muhammad (peace be upon him) frequently recited this surah in Eid and Friday prayers
 */

export const ONTOLOGY = {
  surahId: 50,
  surahName: "Qaf",
  surahNameArabic: "ق",
  revelationType: "Makki",
  totalAyahs: 45,

  categories: {
    mysteriousLetter: {
      name: "The Mysterious Letter",
      nameArabic: "الحرف المقطع",
      color: '#F59E0B',
      icon: 'Sparkles',
      concepts: [
        { term: "ق", meaning: { en: "Qaf", ur: "قاف" }, explanation: { en: "One of the mysterious letters (Huruf al-Muqatta'at) - some scholars say it refers to Mount Qaf, or represents Allah's attribute al-Qadir (The Powerful)", ur: "حروفِ مقطعات میں سے ایک - بعض علماء کہتے ہیں کہ یہ کوہِ قاف کی طرف اشارہ ہے، یا اللہ کی صفت القادر (قدرت والا) کی نمائندگی کرتا ہے" }, verseRef: "50:1" },
        { term: "وَالْقُرْآنِ الْمَجِيدِ", meaning: { en: "By the glorious Quran", ur: "عظمت والے قرآن کی قسم" }, explanation: { en: "Oath by the Quran emphasizing its majesty and honor", ur: "قرآن کی عظمت اور شان کو اجاگر کرتے ہوئے قسم" }, verseRef: "50:1" }
      ]
    },

    disbelieversWonder: {
      name: "Disbelievers' Astonishment",
      nameArabic: "تعجب الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "عَجِبُوا أَن جَاءَهُم مُّنذِرٌ مِّنْهُمْ", meaning: { en: "They wonder that a warner from among them came", ur: "انہیں تعجب ہوا کہ انہی میں سے ایک ڈرانے والا آیا" }, explanation: { en: "Makkans amazed that a human like them was chosen as messenger", ur: "مکہ والے حیران تھے کہ ان جیسا ایک انسان رسول چنا گیا" }, verseRef: "50:2" },
        { term: "هَٰذَا شَيْءٌ عَجِيبٌ", meaning: { en: "This is a strange thing", ur: "یہ تو عجیب بات ہے" }, explanation: { en: "Disbelievers calling resurrection an impossible wonder", ur: "کافروں نے قیامت کو ناممکن عجوبہ قرار دیا" }, verseRef: "50:2" },
        { term: "أَإِذَا مِتْنَا وَكُنَّا تُرَابًا", meaning: { en: "When we have died and become dust?", ur: "کیا جب ہم مر جائیں اور مٹی ہو جائیں؟" }, explanation: { en: "Their incredulity about resurrection after decomposition", ur: "مرنے کے بعد دوبارہ زندہ ہونے پر ان کا انکار" }, verseRef: "50:3" },
        { term: "ذَٰلِكَ رَجْعٌ بَعِيدٌ", meaning: { en: "That is a far return", ur: "یہ واپسی تو بعید از قیاس ہے" }, explanation: { en: "They consider resurrection impossibly remote", ur: "وہ دوبارہ اٹھائے جانے کو ناممکن سمجھتے ہیں" }, verseRef: "50:3" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Complete Knowledge",
      nameArabic: "علم الله الشامل",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "قَدْ عَلِمْنَا مَا تَنقُصُ الْأَرْضُ مِنْهُمْ", meaning: { en: "We know what the earth diminishes of them", ur: "ہم جانتے ہیں جو زمین ان (کے جسموں) سے کم کرتی ہے" }, explanation: { en: "Allah knows every particle of decomposed bodies", ur: "اللہ بوسیدہ جسموں کے ہر ذرے سے آگاہ ہے" }, verseRef: "50:4" },
        { term: "وَعِندَنَا كِتَابٌ حَفِيظٌ", meaning: { en: "And with Us is a preserving record", ur: "اور ہمارے پاس ایک محفوظ کتاب ہے" }, explanation: { en: "The Preserved Tablet (Lawh al-Mahfuz) contains all", ur: "لوحِ محفوظ میں سب کچھ درج ہے" }, verseRef: "50:4" }
      ]
    },

    creationSigns: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "أَفَلَمْ يَنظُرُوا إِلَى السَّمَاءِ فَوْقَهُمْ", meaning: { en: "Have they not looked at the sky above them", ur: "کیا انہوں نے اپنے اوپر آسمان کو نہیں دیکھا" }, explanation: { en: "Call to observe the heavens as proof", ur: "آسمان کا مشاہدہ کرنے کی دعوت بطورِ دلیل" }, verseRef: "50:6" },
        { term: "كَيْفَ بَنَيْنَاهَا وَزَيَّنَّاهَا", meaning: { en: "How We constructed and adorned it", ur: "ہم نے اسے کیسے بنایا اور سجایا" }, explanation: { en: "Sky built and beautified without flaws", ur: "آسمان بے عیب بنایا اور خوبصورت کیا گیا" }, verseRef: "50:6" },
        { term: "وَمَا لَهَا مِن فُرُوجٍ", meaning: { en: "And it has no rifts", ur: "اور اس میں کوئی دراڑ نہیں" }, explanation: { en: "Perfectly seamless heavenly structure", ur: "بالکل بے درز آسمانی ساخت" }, verseRef: "50:6" },
        { term: "وَالْأَرْضَ مَدَدْنَاهَا", meaning: { en: "And the earth We spread out", ur: "اور زمین کو ہم نے پھیلایا" }, explanation: { en: "Earth made suitable for habitation", ur: "زمین کو رہائش کے لائق بنایا" }, verseRef: "50:7" },
        { term: "وَأَلْقَيْنَا فِيهَا رَوَاسِيَ", meaning: { en: "And cast therein firmly set mountains", ur: "اور اس میں مضبوط پہاڑ گاڑ دیے" }, explanation: { en: "Mountains as stabilizers", ur: "پہاڑ بطورِ میخ" }, verseRef: "50:7" },
        { term: "وَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ بَهِيجٍ", meaning: { en: "And caused to grow every beautiful pair", ur: "اور اس میں ہر قسم کے خوبصورت جوڑے اُگائے" }, explanation: { en: "Diverse, beautiful plant life", ur: "متنوع اور خوبصورت نباتاتی زندگی" }, verseRef: "50:7" },
        { term: "تَبْصِرَةً وَذِكْرَىٰ", meaning: { en: "As insight and reminder", ur: "بصیرت اور نصیحت کے لیے" }, explanation: { en: "Creation serves to enlighten and remind", ur: "مخلوقات روشنی اور یاددہانی کا ذریعہ ہے" }, verseRef: "50:8" },
        { term: "لِكُلِّ عَبْدٍ مُّنِيبٍ", meaning: { en: "For every servant who turns back (to Allah)", ur: "ہر اس بندے کے لیے جو (اللہ کی طرف) رجوع کرے" }, explanation: { en: "Signs benefit those who repent and return", ur: "نشانیاں انہیں فائدہ دیتی ہیں جو توبہ کر کے لوٹیں" }, verseRef: "50:8" }
      ]
    },

    rainBlessing: {
      name: "Blessed Rain",
      nameArabic: "بركة المطر",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "مَاءً مُّبَارَكًا", meaning: { en: "Blessed water", ur: "برکت والا پانی" }, explanation: { en: "Rain described as source of blessing", ur: "بارش کو برکت کا ذریعہ بتایا گیا" }, verseRef: "50:9" },
        { term: "فَأَنبَتْنَا بِهِ جَنَّاتٍ", meaning: { en: "And caused gardens to grow", ur: "اور اس سے باغات اُگائے" }, explanation: { en: "Rain produces orchards and farms", ur: "بارش سے باغات اور کھیت پیدا ہوتے ہیں" }, verseRef: "50:9" },
        { term: "وَحَبَّ الْحَصِيدِ", meaning: { en: "And grain for harvest", ur: "اور کٹائی کا اناج" }, explanation: { en: "Crops for human sustenance", ur: "انسانی رزق کے لیے فصلیں" }, verseRef: "50:9" },
        { term: "وَالنَّخْلَ بَاسِقَاتٍ لَّهَا طَلْعٌ نَّضِيدٌ", meaning: { en: "And tall palm trees with clustered dates", ur: "اور بلند کھجور کے درخت جن پر تہ بہ تہ خوشے ہیں" }, explanation: { en: "Majestic date palms with layered fruit", ur: "شاندار کھجور کے درخت جن پر تہ دار پھل ہیں" }, verseRef: "50:10" },
        { term: "رِّزْقًا لِّلْعِبَادِ", meaning: { en: "Provision for the servants", ur: "بندوں کے لیے رزق" }, explanation: { en: "All growth is sustenance from Allah", ur: "تمام نشوونما اللہ کی طرف سے رزق ہے" }, verseRef: "50:11" },
        { term: "وَأَحْيَيْنَا بِهِ بَلْدَةً مَّيْتًا", meaning: { en: "And gave life to a dead land", ur: "اور اس سے مُردہ زمین کو زندہ کیا" }, explanation: { en: "Rain reviving barren land - proof of resurrection", ur: "بارش سے بنجر زمین کا زندہ ہونا - قیامت کی دلیل" }, verseRef: "50:11" },
        { term: "كَذَٰلِكَ الْخُرُوجُ", meaning: { en: "Thus is the emergence (from graves)", ur: "اسی طرح (قبروں سے) نکلنا ہوگا" }, explanation: { en: "Just as dead land revives, so will the dead", ur: "جیسے مُردہ زمین زندہ ہوتی ہے، ایسے ہی مُردے اٹھیں گے" }, verseRef: "50:11" }
      ]
    },

    destroyedNations: {
      name: "Destroyed Nations",
      nameArabic: "الأمم المهلكة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ", meaning: { en: "Before them denied the people of Noah", ur: "ان سے پہلے نوح کی قوم نے جھٹلایا" }, explanation: { en: "First of the destroyed nations listed", ur: "تباہ شدہ اقوام میں سے پہلی قوم" }, verseRef: "50:12" },
        { term: "وَأَصْحَابُ الرَّسِّ وَثَمُودُ", meaning: { en: "And companions of Ar-Rass and Thamud", ur: "اور اصحابِ رَس اور ثمود" }, explanation: { en: "Ar-Rass people and Thamud destroyed", ur: "اصحابِ رَس اور ثمود تباہ ہوئے" }, verseRef: "50:12" },
        { term: "وَعَادٌ وَفِرْعَوْنُ", meaning: { en: "And 'Ad and Pharaoh", ur: "اور عاد اور فرعون" }, explanation: { en: "'Ad and Egyptian oppressor destroyed", ur: "عاد اور مصری ظالم تباہ ہوئے" }, verseRef: "50:13" },
        { term: "وَإِخْوَانُ لُوطٍ", meaning: { en: "And the brothers of Lot", ur: "اور لوط کے بھائی بند" }, explanation: { en: "People of Sodom destroyed", ur: "قومِ سدوم تباہ ہوئی" }, verseRef: "50:13" },
        { term: "وَأَصْحَابُ الْأَيْكَةِ", meaning: { en: "And the companions of the Thicket", ur: "اور جھاڑیوں والے" }, explanation: { en: "People of Shu'ayb destroyed", ur: "شعیب علیہ السلام کی قوم تباہ ہوئی" }, verseRef: "50:14" },
        { term: "وَقَوْمُ تُبَّعٍ", meaning: { en: "And the people of Tubba'", ur: "اور تُبّع کی قوم" }, explanation: { en: "Ancient Yemeni kings' people destroyed", ur: "قدیم یمنی بادشاہوں کی قوم تباہ ہوئی" }, verseRef: "50:14" },
        { term: "كُلٌّ كَذَّبَ الرُّسُلَ فَحَقَّ وَعِيدِ", meaning: { en: "Each denied the messengers, so My threat was fulfilled", ur: "سب نے رسولوں کو جھٹلایا تو میری وعید پوری ہوئی" }, explanation: { en: "Pattern: denial leads to promised punishment", ur: "ضابطہ: جھٹلانا وعدے کے عذاب کی طرف لے جاتا ہے" }, verseRef: "50:14" }
      ]
    },

    firstCreation: {
      name: "Proof from First Creation",
      nameArabic: "برهان الخلق الأول",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "أَفَعَيِينَا بِالْخَلْقِ الْأَوَّلِ", meaning: { en: "Were We then tired by the first creation?", ur: "کیا ہم پہلی تخلیق سے تھک گئے تھے؟" }, explanation: { en: "Rhetorical - Allah not exhausted by initial creation", ur: "استفہامیہ - اللہ پہلی تخلیق سے تھکے نہیں" }, verseRef: "50:15" },
        { term: "بَلْ هُمْ فِي لَبْسٍ مِّنْ خَلْقٍ جَدِيدٍ", meaning: { en: "Rather, they are in confusion about new creation", ur: "بلکہ یہ نئی تخلیق کے بارے میں شک میں ہیں" }, explanation: { en: "Their doubt is about recreation, not Allah's ability", ur: "ان کا شک دوبارہ پیدائش پر ہے، اللہ کی قدرت پر نہیں" }, verseRef: "50:15" }
      ]
    },

    humanCreationKnowledge: {
      name: "Allah's Intimate Knowledge of Humans",
      nameArabic: "علم الله بالإنسان",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "وَلَقَدْ خَلَقْنَا الْإِنسَانَ", meaning: { en: "And We created the human", ur: "اور ہم نے انسان کو پیدا کیا" }, explanation: { en: "Allah is humanity's Creator", ur: "اللہ انسانیت کا خالق ہے" }, verseRef: "50:16" },
        { term: "وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ", meaning: { en: "And We know what his soul whispers to him", ur: "اور ہم جانتے ہیں جو اس کا نفس وسوسہ ڈالتا ہے" }, explanation: { en: "Allah knows innermost thoughts and temptations", ur: "اللہ اندرونی خیالات اور وسوسوں سے آگاہ ہے" }, verseRef: "50:16" },
        { term: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ", meaning: { en: "And We are closer to him than his jugular vein", ur: "اور ہم اس کی شہ رگ سے بھی زیادہ قریب ہیں" }, explanation: { en: "One of Quran's most profound statements - Allah's absolute nearness", ur: "قرآن کے سب سے گہرے بیانات میں سے ایک - اللہ کی مطلق قربت" }, verseRef: "50:16" }
      ]
    },

    recordingAngels: {
      name: "The Recording Angels",
      nameArabic: "الملائكة الكاتبون",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "إِذْ يَتَلَقَّى الْمُتَلَقِّيَانِ", meaning: { en: "When the two receivers receive", ur: "جب دو وصول کرنے والے وصول کرتے ہیں" }, explanation: { en: "Two angels assigned to record deeds", ur: "دو فرشتے اعمال لکھنے پر مامور ہیں" }, verseRef: "50:17" },
        { term: "عَنِ الْيَمِينِ وَعَنِ الشِّمَالِ قَعِيدٌ", meaning: { en: "On the right and on the left, seated", ur: "دائیں اور بائیں بیٹھے ہوئے" }, explanation: { en: "One on each side constantly present", ur: "ہر طرف ایک ہمیشہ موجود ہے" }, verseRef: "50:17" },
        { term: "مَّا يَلْفِظُ مِن قَوْلٍ", meaning: { en: "He does not utter any word", ur: "وہ کوئی لفظ نہیں بولتا" }, explanation: { en: "Every spoken word is noted", ur: "ہر بولا ہوا لفظ نوٹ ہوتا ہے" }, verseRef: "50:18" },
        { term: "إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ", meaning: { en: "Except with him is an observer prepared", ur: "مگر اس کے پاس ایک نگران تیار ہے" }, explanation: { en: "Angel ready to record instantly - Raqib and 'Atid", ur: "فرشتہ فوری طور پر لکھنے کے لیے تیار - رقیب اور عتید" }, verseRef: "50:18" }
      ]
    },

    deathAndResurrection: {
      name: "Death and Resurrection",
      nameArabic: "الموت والبعث",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَجَاءَتْ سَكْرَةُ الْمَوْتِ بِالْحَقِّ", meaning: { en: "And the intoxication of death comes with truth", ur: "اور موت کی سکرات حق لے کر آئیں" }, explanation: { en: "Death's stupor brings reality - no more denial", ur: "موت کی بے ہوشی حقیقت لاتی ہے - اب انکار نہیں" }, verseRef: "50:19" },
        { term: "ذَٰلِكَ مَا كُنتَ مِنْهُ تَحِيدُ", meaning: { en: "That is what you were trying to avoid", ur: "یہ وہی ہے جس سے تم بھاگتے رہے" }, explanation: { en: "Death was always evaded, now it arrives", ur: "موت سے ہمیشہ فرار کیا، اب آ پہنچی" }, verseRef: "50:19" },
        { term: "وَنُفِخَ فِي الصُّورِ", meaning: { en: "And the trumpet is blown", ur: "اور صور پھونکا جائے گا" }, explanation: { en: "Signal for resurrection", ur: "دوبارہ اٹھنے کا اشارہ" }, verseRef: "50:20" },
        { term: "ذَٰلِكَ يَوْمُ الْوَعِيدِ", meaning: { en: "That is the Day of Warning", ur: "یہ وعید کا دن ہے" }, explanation: { en: "The promised day of threat/warning", ur: "وعدے کا وعید/تنبیہ کا دن" }, verseRef: "50:20" }
      ]
    },

    dayOfJudgment: {
      name: "Scene of Judgment Day",
      nameArabic: "مشهد يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَجَاءَتْ كُلُّ نَفْسٍ مَّعَهَا سَائِقٌ وَشَهِيدٌ", meaning: { en: "Every soul comes with a driver and witness", ur: "ہر جان ایک ہانکنے والے اور گواہ کے ساتھ آئے گی" }, explanation: { en: "Angel driving and angel testifying for each person", ur: "ایک فرشتہ ہانکتا ہے اور ایک ہر شخص کی گواہی دیتا ہے" }, verseRef: "50:21" },
        { term: "لَّقَدْ كُنتَ فِي غَفْلَةٍ مِّنْ هَٰذَا", meaning: { en: "You were certainly heedless of this", ur: "تم یقیناً اس سے غافل تھے" }, explanation: { en: "Address to person - now veils removed", ur: "انسان سے خطاب - اب پردے ہٹ گئے" }, verseRef: "50:22" },
        { term: "فَكَشَفْنَا عَنكَ غِطَاءَكَ", meaning: { en: "So We have removed from you your cover", ur: "تو ہم نے تمہارا پردہ ہٹا دیا" }, explanation: { en: "Veil of worldly distraction lifted", ur: "دنیاوی غفلت کا پردہ اٹھا دیا گیا" }, verseRef: "50:22" },
        { term: "فَبَصَرُكَ الْيَوْمَ حَدِيدٌ", meaning: { en: "So your sight today is sharp", ur: "تو آج تمہاری نظر تیز ہے" }, explanation: { en: "Vision becomes piercing - seeing all reality", ur: "نظر چبھنے والی ہو جاتی ہے - ساری حقیقت نظر آتی ہے" }, verseRef: "50:22" },
        { term: "وَقَالَ قَرِينُهُ هَٰذَا مَا لَدَيَّ عَتِيدٌ", meaning: { en: "And his companion says: This is what I have ready", ur: "اور اس کا ساتھی کہتا ہے: یہ جو میرے پاس تیار ہے" }, explanation: { en: "Recording angel presents prepared record", ur: "لکھنے والا فرشتہ تیار شدہ اعمال نامہ پیش کرتا ہے" }, verseRef: "50:23" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أَلْقِيَا فِي جَهَنَّمَ كُلَّ كَفَّارٍ عَنِيدٍ", meaning: { en: "Throw into Hell every obstinate disbeliever", ur: "جہنم میں ڈال دو ہر ضدی کافر کو" }, explanation: { en: "Command to cast stubborn deniers into Hell", ur: "ضدی منکروں کو جہنم میں ڈالنے کا حکم" }, verseRef: "50:24" },
        { term: "مَّنَّاعٍ لِّلْخَيْرِ مُعْتَدٍ مُّرِيبٍ", meaning: { en: "Preventer of good, transgressor, doubter", ur: "بھلائی سے روکنے والا، حد سے گزرنے والا، شک کرنے والا" }, explanation: { en: "Qualities of Hell's inhabitants", ur: "جہنمیوں کی صفات" }, verseRef: "50:25" },
        { term: "الَّذِي جَعَلَ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: { en: "Who made with Allah another deity", ur: "جس نے اللہ کے ساتھ دوسرا معبود بنایا" }, explanation: { en: "Polytheism as cardinal sin", ur: "شرک بطورِ سب سے بڑا گناہ" }, verseRef: "50:26" },
        { term: "فَأَلْقِيَاهُ فِي الْعَذَابِ الشَّدِيدِ", meaning: { en: "So throw him into severe punishment", ur: "تو اسے سخت عذاب میں ڈال دو" }, explanation: { en: "Command repeated for emphasis", ur: "تاکید کے لیے حکم دہرایا گیا" }, verseRef: "50:26" },
        { term: "قَالَ قَرِينُهُ رَبَّنَا مَا أَطْغَيْتُهُ", meaning: { en: "His companion (devil) says: Our Lord, I did not make him transgress", ur: "اس کا ساتھی (شیطان) کہتا ہے: اے رب، میں نے اسے سرکش نہیں بنایا" }, explanation: { en: "Satan disclaims responsibility", ur: "شیطان ذمہ داری سے انکار کرتا ہے" }, verseRef: "50:27" },
        { term: "وَلَٰكِن كَانَ فِي ضَلَالٍ بَعِيدٍ", meaning: { en: "But he was in extreme error", ur: "لیکن وہ خود دور کی گمراہی میں تھا" }, explanation: { en: "Devil blames the person's own misguidance", ur: "شیطان خود اس شخص کی اپنی گمراہی کا الزام لگاتا ہے" }, verseRef: "50:27" },
        { term: "لَا تَخْتَصِمُوا لَدَيَّ", meaning: { en: "Do not dispute before Me", ur: "میرے سامنے جھگڑا نہ کرو" }, explanation: { en: "Allah silences arguments between sinner and devil", ur: "اللہ گنہگار اور شیطان کے بیچ بحث خاموش کراتا ہے" }, verseRef: "50:28" },
        { term: "مَا يُبَدَّلُ الْقَوْلُ لَدَيَّ", meaning: { en: "The word will not be changed with Me", ur: "میرے پاس بات بدلی نہیں جاتی" }, explanation: { en: "Allah's decree is final, unchangeable", ur: "اللہ کا فیصلہ حتمی ہے، بدلنے والا نہیں" }, verseRef: "50:29" },
        { term: "وَمَا أَنَا بِظَلَّامٍ لِّلْعَبِيدِ", meaning: { en: "And I am not unjust to servants", ur: "اور میں بندوں پر ظلم کرنے والا نہیں" }, explanation: { en: "Allah is absolutely just - none wronged", ur: "اللہ بالکل عادل ہے - کسی پر ظلم نہیں" }, verseRef: "50:29" },
        { term: "يَوْمَ نَقُولُ لِجَهَنَّمَ هَلِ امْتَلَأْتِ", meaning: { en: "Day We say to Hell: Are you filled?", ur: "جس دن ہم جہنم سے کہیں گے: کیا تو بھر گئی؟" }, explanation: { en: "Hell is addressed directly", ur: "جہنم سے براہِ راست مخاطبہ" }, verseRef: "50:30" },
        { term: "وَتَقُولُ هَلْ مِن مَّزِيدٍ", meaning: { en: "And it says: Are there more?", ur: "اور وہ کہتی ہے: کیا کچھ اور بھی ہے؟" }, explanation: { en: "Hell's insatiable hunger for sinners", ur: "جہنم کی گنہگاروں کے لیے نہ بجھنے والی بھوک" }, verseRef: "50:30" }
      ]
    },

    paradiseDescription: {
      name: "Description of Paradise",
      nameArabic: "وصف الجنة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "وَأُزْلِفَتِ الْجَنَّةُ لِلْمُتَّقِينَ غَيْرَ بَعِيدٍ", meaning: { en: "And Paradise is brought near to the righteous, not far", ur: "اور جنت متقیوں کے قریب لائی جائے گی، دور نہیں" }, explanation: { en: "Paradise made close, within reach", ur: "جنت قریب کر دی گئی، پہنچ میں" }, verseRef: "50:31" },
        { term: "هَٰذَا مَا تُوعَدُونَ", meaning: { en: "This is what you were promised", ur: "یہ ہے جس کا تم سے وعدہ تھا" }, explanation: { en: "Promise of Paradise fulfilled", ur: "جنت کا وعدہ پورا ہوا" }, verseRef: "50:32" },
        { term: "لِكُلِّ أَوَّابٍ حَفِيظٍ", meaning: { en: "For everyone returning and preserving", ur: "ہر بار بار لوٹنے والے اور (حدود کی) حفاظت کرنے والے کے لیے" }, explanation: { en: "Those who repeatedly return to Allah and guard His limits", ur: "وہ جو بار بار اللہ کی طرف لوٹتے ہیں اور اس کی حدود کی حفاظت کرتے ہیں" }, verseRef: "50:32" },
        { term: "مَّنْ خَشِيَ الرَّحْمَـٰنَ بِالْغَيْبِ", meaning: { en: "Who feared the Most Merciful unseen", ur: "جس نے بن دیکھے رحمٰن سے ڈرا" }, explanation: { en: "Fear of Allah without seeing Him - true faith", ur: "اللہ کو دیکھے بغیر ڈرنا - سچا ایمان" }, verseRef: "50:33" },
        { term: "وَجَاءَ بِقَلْبٍ مُّنِيبٍ", meaning: { en: "And came with a heart returning (to Allah)", ur: "اور رجوع کرنے والے دل کے ساتھ آیا" }, explanation: { en: "Repentant, devoted heart", ur: "توبہ کرنے والا، وقف دل" }, verseRef: "50:33" },
        { term: "ادْخُلُوهَا بِسَلَامٍ", meaning: { en: "Enter it in peace", ur: "سلامتی سے اس میں داخل ہو جاؤ" }, explanation: { en: "Welcome into Paradise with peace", ur: "سلامتی کے ساتھ جنت میں خوش آمدید" }, verseRef: "50:34" },
        { term: "ذَٰلِكَ يَوْمُ الْخُلُودِ", meaning: { en: "That is the Day of Eternity", ur: "یہ ہمیشگی کا دن ہے" }, explanation: { en: "Paradise is eternal, never-ending", ur: "جنت ابدی ہے، کبھی نہ ختم ہونے والی" }, verseRef: "50:34" },
        { term: "لَهُم مَّا يَشَاءُونَ فِيهَا", meaning: { en: "They will have whatever they wish therein", ur: "ان کے لیے اس میں جو چاہیں" }, explanation: { en: "Every desire fulfilled in Paradise", ur: "جنت میں ہر خواہش پوری ہوگی" }, verseRef: "50:35" },
        { term: "وَلَدَيْنَا مَزِيدٌ", meaning: { en: "And with Us is more", ur: "اور ہمارے پاس اس سے بھی زیادہ ہے" }, explanation: { en: "Even beyond wishes - seeing Allah's Face", ur: "خواہشات سے بھی آگے - اللہ کے چہرے کی زیارت" }, verseRef: "50:35" }
      ]
    },

    lessonsFromHistory: {
      name: "Lessons from History",
      nameArabic: "العبر من التاريخ",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَكَمْ أَهْلَكْنَا قَبْلَهُم مِّن قَرْنٍ", meaning: { en: "How many generations We destroyed before them", ur: "ان سے پہلے کتنی ہی نسلیں ہم نے تباہ کیں" }, explanation: { en: "Countless nations destroyed for denial", ur: "جھٹلانے کی وجہ سے بے شمار قومیں تباہ ہوئیں" }, verseRef: "50:36" },
        { term: "هُمْ أَشَدُّ مِنْهُم بَطْشًا", meaning: { en: "They were greater than them in power", ur: "وہ ان سے طاقت میں زیادہ تھے" }, explanation: { en: "More powerful nations were still destroyed", ur: "زیادہ طاقتور اقوام بھی تباہ ہو گئیں" }, verseRef: "50:36" },
        { term: "فَنَقَّبُوا فِي الْبِلَادِ", meaning: { en: "And they explored throughout the lands", ur: "اور انہوں نے ملکوں میں چھان بین کی" }, explanation: { en: "They searched everywhere but found no escape", ur: "ہر جگہ تلاش کیا مگر کوئی پناہ نہ ملی" }, verseRef: "50:36" },
        { term: "هَلْ مِن مَّحِيصٍ", meaning: { en: "Is there any escape?", ur: "کیا کوئی بچاؤ ہے؟" }, explanation: { en: "Rhetorical - no escape from Allah's decree", ur: "استفہامیہ - اللہ کے فیصلے سے کوئی بچاؤ نہیں" }, verseRef: "50:36" },
        { term: "إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ", meaning: { en: "Indeed in that is a reminder", ur: "بلاشبہ اس میں نصیحت ہے" }, explanation: { en: "History serves as admonition", ur: "تاریخ عبرت کا ذریعہ ہے" }, verseRef: "50:37" },
        { term: "لِمَن كَانَ لَهُ قَلْبٌ", meaning: { en: "For whoever has a heart", ur: "اس کے لیے جس کے پاس دل ہو" }, explanation: { en: "A receptive, understanding heart", ur: "ایک قبول کرنے والا، سمجھنے والا دل" }, verseRef: "50:37" },
        { term: "أَوْ أَلْقَى السَّمْعَ وَهُوَ شَهِيدٌ", meaning: { en: "Or listens while present (in mind)", ur: "یا کان لگائے اور وہ حاضر (دل) ہو" }, explanation: { en: "Attentive listener with full awareness", ur: "مکمل آگاہی کے ساتھ توجہ سے سننے والا" }, verseRef: "50:37" }
      ]
    },

    sixDayCreation: {
      name: "Six-Day Creation",
      nameArabic: "خلق الستة أيام",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "وَلَقَدْ خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "And We created the heavens and earth", ur: "اور ہم نے آسمانوں اور زمین کو پیدا کیا" }, explanation: { en: "Allah created the universe", ur: "اللہ نے کائنات کو تخلیق کیا" }, verseRef: "50:38" },
        { term: "وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ", meaning: { en: "And what is between them in six days", ur: "اور جو ان کے درمیان ہے چھ دنوں میں" }, explanation: { en: "Six periods of creation", ur: "تخلیق کے چھ ادوار" }, verseRef: "50:38" },
        { term: "وَمَا مَسَّنَا مِن لُّغُوبٍ", meaning: { en: "And no fatigue touched Us", ur: "اور ہمیں کوئی تھکاوٹ نہیں لگی" }, explanation: { en: "Refutes claims that Allah rested - He never tires", ur: "اس دعوے کی تردید کہ اللہ نے آرام کیا - وہ کبھی نہیں تھکتا" }, verseRef: "50:38" }
      ]
    },

    propheticGuidance: {
      name: "Guidance to the Prophet",
      nameArabic: "توجيهات للنبي",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "فَاصْبِرْ عَلَىٰ مَا يَقُولُونَ", meaning: { en: "So be patient over what they say", ur: "پس صبر کرو جو وہ کہتے ہیں اس پر" }, explanation: { en: "Command to endure their mockery", ur: "ان کے مذاق کو برداشت کرنے کا حکم" }, verseRef: "50:39" },
        { term: "وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ", meaning: { en: "And glorify with praise of your Lord before sunrise", ur: "اور اپنے رب کی حمد کے ساتھ تسبیح کرو سورج نکلنے سے پہلے" }, explanation: { en: "Fajr prayer time", ur: "نمازِ فجر کا وقت" }, verseRef: "50:39" },
        { term: "وَقَبْلَ الْغُرُوبِ", meaning: { en: "And before sunset", ur: "اور غروب سے پہلے" }, explanation: { en: "Asr prayer time", ur: "نمازِ عصر کا وقت" }, verseRef: "50:39" },
        { term: "وَمِنَ اللَّيْلِ فَسَبِّحْهُ", meaning: { en: "And from the night glorify Him", ur: "اور رات میں اس کی تسبیح کرو" }, explanation: { en: "Night prayers - Tahajjud", ur: "رات کی نمازیں - تہجد" }, verseRef: "50:40" },
        { term: "وَأَدْبَارَ السُّجُودِ", meaning: { en: "And after prostrations", ur: "اور سجدوں کے بعد" }, explanation: { en: "Remembrance after prayers, or Maghrib/Isha", ur: "نمازوں کے بعد ذکر، یا مغرب/عشاء" }, verseRef: "50:40" }
      ]
    },

    dayOfCalling: {
      name: "The Day of Calling",
      nameArabic: "يوم النداء",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَاسْتَمِعْ يَوْمَ يُنَادِ الْمُنَادِ مِن مَّكَانٍ قَرِيبٍ", meaning: { en: "And listen for the Day when the caller calls from a nearby place", ur: "اور سنو جس دن پکارنے والا قریب کی جگہ سے پکارے گا" }, explanation: { en: "Angel Israfil calls from Jerusalem's Rock", ur: "فرشتہ اسرافیل بیت المقدس کی چٹان سے پکارے گا" }, verseRef: "50:41" },
        { term: "يَوْمَ يَسْمَعُونَ الصَّيْحَةَ بِالْحَقِّ", meaning: { en: "Day they hear the blast in truth", ur: "جس دن وہ سچی چیخ سنیں گے" }, explanation: { en: "The true, undeniable resurrection call", ur: "سچی، ناقابلِ انکار قیامت کی پکار" }, verseRef: "50:42" },
        { term: "ذَٰلِكَ يَوْمُ الْخُرُوجِ", meaning: { en: "That is the Day of Emergence", ur: "وہ نکلنے کا دن ہے" }, explanation: { en: "Day of coming out from graves", ur: "قبروں سے نکلنے کا دن" }, verseRef: "50:42" }
      ]
    },

    divineControl: {
      name: "Divine Control Over Life and Death",
      nameArabic: "سيطرة الله على الحياة والموت",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "إِنَّا نَحْنُ نُحْيِي وَنُمِيتُ", meaning: { en: "Indeed, We give life and cause death", ur: "بلاشبہ ہم ہی زندگی دیتے ہیں اور موت دیتے ہیں" }, explanation: { en: "Allah alone controls life and death", ur: "صرف اللہ ہی زندگی اور موت کا مالک ہے" }, verseRef: "50:43" },
        { term: "وَإِلَيْنَا الْمَصِيرُ", meaning: { en: "And to Us is the destination", ur: "اور ہماری طرف لوٹنا ہے" }, explanation: { en: "All return to Allah ultimately", ur: "بالآخر سب اللہ کی طرف لوٹتے ہیں" }, verseRef: "50:43" },
        { term: "يَوْمَ تَشَقَّقُ الْأَرْضُ عَنْهُمْ سِرَاعًا", meaning: { en: "Day the earth splits away from them rapidly", ur: "جس دن زمین ان سے تیزی سے پھٹ جائے گی" }, explanation: { en: "Earth opens quickly releasing the dead", ur: "زمین تیزی سے کھلتی ہے مُردوں کو چھوڑتے ہوئے" }, verseRef: "50:44" },
        { term: "ذَٰلِكَ حَشْرٌ عَلَيْنَا يَسِيرٌ", meaning: { en: "That is a gathering easy for Us", ur: "یہ ایک جمع کرنا ہے جو ہمارے لیے آسان ہے" }, explanation: { en: "Resurrection is effortless for Allah", ur: "قیامت اللہ کے لیے بالکل آسان ہے" }, verseRef: "50:44" }
      ]
    },

    finalConsole: {
      name: "Final Consolation",
      nameArabic: "التسلية الأخيرة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ", meaning: { en: "We are most knowing of what they say", ur: "ہم خوب جانتے ہیں جو وہ کہتے ہیں" }, explanation: { en: "Allah knows all their denial and mockery", ur: "اللہ ان کے ہر انکار اور مذاق سے آگاہ ہے" }, verseRef: "50:45" },
        { term: "وَمَا أَنتَ عَلَيْهِم بِجَبَّارٍ", meaning: { en: "And you are not over them a tyrant", ur: "اور تم ان پر جبر کرنے والے نہیں" }, explanation: { en: "Prophet cannot force belief", ur: "نبی ایمان پر مجبور نہیں کر سکتے" }, verseRef: "50:45" },
        { term: "فَذَكِّرْ بِالْقُرْآنِ مَن يَخَافُ وَعِيدِ", meaning: { en: "So remind by the Quran whoever fears My warning", ur: "تو قرآن سے نصیحت کرو اسے جو میری وعید سے ڈرتا ہو" }, explanation: { en: "Quran is for those who heed warnings - final instruction", ur: "قرآن ان کے لیے ہے جو تنبیہات پر کان دھرتے ہیں - آخری ہدایت" }, verseRef: "50:45" }
      ]
    }
  },

  relationships: [
    { from: "قرآن مجيد", to: "فذكر بالقرآن", type: "bookend", description: { en: "Surah begins and ends with the Quran's role", ur: "سورت قرآن کے کردار سے شروع اور ختم ہوتی ہے" } },
    { from: "أقرب من حبل الوريد", to: "رقيب عتيد", type: "expansion", description: { en: "Allah's nearness manifests through recording angels", ur: "اللہ کی قربت لکھنے والے فرشتوں کے ذریعے ظاہر ہوتی ہے" } },
    { from: "سكرة الموت", to: "يوم الخروج", type: "sequence", description: { en: "Death leads inevitably to resurrection", ur: "موت لازمی طور پر قیامت کی طرف لے جاتی ہے" } },
    { from: "أحيينا به بلدة ميتا", to: "كذلك الخروج", type: "analogy", description: { en: "Rain reviving dead land proves resurrection", ur: "بارش سے مُردہ زمین کا زندہ ہونا قیامت ثابت کرتا ہے" } },
    { from: "هل من مزيد", to: "ولدينا مزيد", type: "contrast", description: { en: "Hell asks for more sinners; Paradise offers more rewards", ur: "جہنم مزید گنہگاروں کی طلب کرتی ہے؛ جنت مزید انعام پیش کرتی ہے" } },
    { from: "كفار عنيد", to: "أواب حفيظ", type: "contrast", description: { en: "Obstinate disbeliever vs. repeatedly repentant", ur: "ضدی کافر بمقابلہ بار بار توبہ کرنے والا" } },
    { from: "ما تنقص الأرض", to: "كتاب حفيظ", type: "complementary", description: { en: "Allah knows decomposed bodies and records all", ur: "اللہ بوسیدہ جسموں کو جانتا ہے اور سب ریکارڈ کرتا ہے" } },
    { from: "كنت في غفلة", to: "بصرك اليوم حديد", type: "transformation", description: { en: "Heedlessness transformed to piercing clarity", ur: "غفلت چبھنے والی وضاحت میں بدل گئی" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening Oath", verses: "50:1-5", description: { en: "Qaf, glorious Quran, disbelievers' wonder at resurrection", ur: "قاف، عظمت والا قرآن، قیامت پر کافروں کا تعجب" } },
      { stage: 2, theme: "Creation Signs", verses: "50:6-11", description: { en: "Sky, earth, rain, dead land revived as resurrection proof", ur: "آسمان، زمین، بارش، مُردہ زمین کا زندہ ہونا بطورِ دلیلِ قیامت" } },
      { stage: 3, theme: "Destroyed Nations", verses: "50:12-14", description: { en: "Nine destroyed peoples as warning", ur: "نو تباہ شدہ اقوام بطورِ عبرت" } },
      { stage: 4, theme: "First Creation Argument", verses: "50:15", description: { en: "If Allah created once, He can recreate", ur: "اگر اللہ نے ایک بار بنایا تو دوبارہ بنا سکتا ہے" } },
      { stage: 5, theme: "Divine Nearness", verses: "50:16-18", description: { en: "Closer than jugular vein, recording angels", ur: "شہ رگ سے زیادہ قریب، لکھنے والے فرشتے" } },
      { stage: 6, theme: "Death to Judgment", verses: "50:19-23", description: { en: "Death's intoxication, trumpet, driver and witness", ur: "موت کی سکرات، صور، ہانکنے والا اور گواہ" } },
      { stage: 7, theme: "Hell Scene", verses: "50:24-30", description: { en: "Sinners cast in, Satan disclaims, Hell's hunger", ur: "گنہگاروں کو ڈالا جاتا ہے، شیطان انکار کرتا ہے، جہنم کی بھوک" } },
      { stage: 8, theme: "Paradise Scene", verses: "50:31-35", description: { en: "Paradise brought near, eternal bliss, 'and more'", ur: "جنت قریب لائی گئی، ابدی خوشی، 'اور مزید'" } },
      { stage: 9, theme: "Historical Lessons", verses: "50:36-37", description: { en: "Powerful nations destroyed, reminder for hearts", ur: "طاقتور اقوام تباہ ہوئیں، دلوں کے لیے نصیحت" } },
      { stage: 10, theme: "Divine Power", verses: "50:38", description: { en: "Six-day creation without fatigue", ur: "چھ دنوں میں تخلیق بغیر تھکاوٹ" } },
      { stage: 11, theme: "Prophetic Guidance", verses: "50:39-44", description: { en: "Patience, prayer times, Day of Emergence", ur: "صبر، نماز کے اوقات، نکلنے کا دن" } },
      { stage: 12, theme: "Final Instruction", verses: "50:45", description: { en: "Remind with Quran those who fear warning", ur: "قرآن سے نصیحت کرو انہیں جو وعید سے ڈرتے ہیں" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Guard your speech", ur: "اپنی زبان کی حفاظت کرو" }, how: { en: "Every word is recorded by Raqib and 'Atid - speak only good", ur: "ہر لفظ رقیب اور عتید لکھتے ہیں - صرف اچھی بات کہو" }, verse: "50:18" },
      { principle: { en: "Remember Allah's nearness", ur: "اللہ کی قربت یاد رکھو" }, how: { en: "He is closer than your jugular vein - live with this awareness", ur: "وہ تمہاری شہ رگ سے بھی قریب ہے - اس آگاہی سے زندگی گزارو" }, verse: "50:16" },
      { principle: { en: "Use creation for reflection", ur: "تخلیقات کو غور و فکر کے لیے استعمال کرو" }, how: { en: "Look at sky, earth, rain - all point to resurrection", ur: "آسمان، زمین، بارش دیکھو - سب قیامت کی طرف اشارہ کرتے ہیں" }, verse: "50:6-11" },
      { principle: { en: "Fear Allah in private", ur: "تنہائی میں اللہ سے ڈرو" }, how: { en: "Fear Him unseen (بالغيب) - this earns Paradise", ur: "بن دیکھے اس سے ڈرو (بالغیب) - یہ جنت کا ذریعہ ہے" }, verse: "50:33" },
      { principle: { en: "Return to Allah repeatedly", ur: "بار بار اللہ کی طرف لوٹو" }, how: { en: "Be أواب - one who constantly returns in repentance", ur: "اوّاب بنو - جو ہمیشہ توبہ کرتے ہوئے لوٹتا ہو" }, verse: "50:32" },
      { principle: { en: "Establish regular prayer", ur: "باقاعدہ نماز قائم کرو" }, how: { en: "Before sunrise, before sunset, and at night", ur: "سورج نکلنے سے پہلے، غروب سے پہلے، اور رات کو" }, verse: "50:39-40" },
      { principle: { en: "Learn from history", ur: "تاریخ سے سبق سیکھو" }, how: { en: "Nations more powerful were destroyed - take heed", ur: "زیادہ طاقتور اقوام بھی تباہ ہوئیں - عبرت حاصل کرو" }, verse: "50:36" },
      { principle: { en: "Use Quran for reminder", ur: "قرآن کو نصیحت کے لیے استعمال کرو" }, how: { en: "It benefits those who fear Allah's warning", ur: "یہ انہیں فائدہ دیتا ہے جو اللہ کی وعید سے ڈرتے ہیں" }, verse: "50:45" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Eid and Friday (سورة العيد والجمعة)", ur: "عید اور جمعہ کی سورت (سورة العيد والجمعة)" },
    insight: { en: "Prophet Muhammad (peace be upon him) used to recite Surah Qaf in the first rak'ah of Eid prayers and would regularly recite it from the minbar (pulpit) during Friday sermons - so frequently that Umm Hisham bint Harithah said she memorized it just from hearing the Prophet recite it every Friday (Sahih Muslim). Why this surah? Because its 45 verses contain the complete message of Islam in miniature: Allah's sovereignty and knowledge (v.16 - closer than jugular vein), accountability through recording angels (v.17-18), the reality of death (v.19), judgment with driver and witness (v.21), Hell for the obstinate (v.24-30), Paradise for the repentant (v.31-35), and lessons from destroyed nations (v.36). The phrase 'وَلَدَيْنَا مَزِيدٌ' (And with Us is more - v.35) refers according to scholars to the greatest reward in Paradise: seeing Allah's Noble Face. This surah was the Prophet's weekly and annual reminder to the Ummah of life's ultimate realities.", ur: "نبی کریم صلی اللہ علیہ وسلم عید کی نماز کی پہلی رکعت میں سورۃ ق پڑھا کرتے تھے اور جمعہ کے خطبے میں منبر سے باقاعدگی سے اس کی تلاوت فرماتے - اتنی کثرت سے کہ اُمّ ہشام بنت حارثہ نے کہا کہ انہوں نے یہ سورت صرف نبی کو ہر جمعہ پڑھتے سن کر یاد کر لی (صحیح مسلم)۔ یہ سورت کیوں؟ کیونکہ اس کی 45 آیات میں اسلام کا مکمل پیغام مختصراً موجود ہے: اللہ کی حاکمیت اور علم (آیت 16 - شہ رگ سے زیادہ قریب)، لکھنے والے فرشتوں کے ذریعے محاسبہ (آیت 17-18)، موت کی حقیقت (آیت 19)، سائق اور شہید کے ساتھ فیصلہ (آیت 21)، ضدیوں کے لیے جہنم (آیت 24-30)، توبہ کرنے والوں کے لیے جنت (آیت 31-35)، اور تباہ شدہ اقوام سے سبق (آیت 36)۔ 'وَلَدَيْنَا مَزِيدٌ' (اور ہمارے پاس مزید ہے - آیت 35) علماء کے مطابق جنت کے سب سے بڑے انعام کی طرف اشارہ ہے: اللہ کے پاک چہرے کی زیارت۔ یہ سورت نبی کی امت کے لیے زندگی کی حتمی حقیقتوں کی ہفتہ وار اور سالانہ یاددہانی تھی۔" }
  },

  historicalContext: {
    note: { en: "Surah Qaf is an early Makkan surah revealed when the Quraysh intensely denied resurrection. The surah's name comes from the mysterious letter 'Qaf' which opens it - some scholars link it to Mount Qaf (a cosmic mountain in Islamic cosmology), others to the word 'Quran' or Allah's attribute 'al-Qadir.' The nine destroyed nations mentioned (Noah's people, Ar-Rass, Thamud, 'Ad, Pharaoh, Lot's people, Aykah dwellers, Tubba's people) would have been partially known to the Arabs through oral traditions, making the warning immediately relevant. The surah's regular recitation in Friday and Eid prayers by the Prophet established it as a foundational text for Islamic congregational worship.", ur: "سورۃ ق ابتدائی مکی سورتوں میں سے ہے جو اس وقت نازل ہوئی جب قریش شدت سے قیامت کا انکار کر رہے تھے۔ سورت کا نام اس حروفِ مقطعات 'ق' سے ہے جو اس کا آغاز کرتا ہے - بعض علماء اسے کوہِ قاف سے جوڑتے ہیں، بعض لفظ 'قرآن' سے یا اللہ کی صفت 'القادر' سے۔ نو تباہ شدہ اقوام (قومِ نوح، اصحابِ رَس، ثمود، عاد، فرعون، قومِ لوط، اصحابِ ایکہ، قومِ تُبّع) عربوں کو زبانی روایات سے جزوی طور پر معلوم ہوں گی، جس سے یہ تنبیہ فوری طور پر مؤثر بنتی تھی۔ نبی کریم کا جمعہ اور عید کی نمازوں میں اس سورت کی باقاعدہ تلاوت نے اسے اسلامی اجتماعی عبادت کی بنیادی نص کے طور پر قائم کیا۔" },
    significantEvents: [
      { event: "Regular Friday recitation", description: { en: "Prophet recited this surah so often on Fridays that companions memorized it from his sermons", ur: "نبی نے جمعہ کو اتنی کثرت سے یہ سورت پڑھی کہ صحابہ نے خطبات سے اسے یاد کر لیا" } },
      { event: "Eid prayer recitation", description: { en: "Prophet would recite Qaf in the first rak'ah of both Eid al-Fitr and Eid al-Adha prayers", ur: "نبی عید الفطر اور عید الاضحی دونوں کی نماز کی پہلی رکعت میں سورۃ ق پڑھتے تھے" } }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "ق", example: { en: "Opening letter", ur: "حرفِ آغاز" }, effect: { en: "Muqatta'at - mysterious, attention-grabbing opening", ur: "حروفِ مقطعات - پراسرار، توجہ کھینچنے والا آغاز" } },
      { feature: "حَبْلِ الْوَرِيدِ", example: { en: "Jugular vein", ur: "شہ رگ" }, effect: { en: "Vivid anatomical image of Allah's nearness", ur: "اللہ کی قربت کی واضح جسمانی تصویر" } },
      { feature: "رَقِيبٌ عَتِيدٌ", example: { en: "Observer prepared", ur: "تیار نگران" }, effect: { en: "Two attributes creating sense of constant surveillance", ur: "دو صفات جو مسلسل نگرانی کا احساس پیدا کرتی ہیں" } },
      { feature: "سَائِقٌ وَشَهِيدٌ", example: { en: "Driver and witness", ur: "ہانکنے والا اور گواہ" }, effect: { en: "Two roles - one compels, one testifies", ur: "دو کردار - ایک مجبور کرتا ہے، ایک گواہی دیتا ہے" } },
      { feature: "هَلْ مِن مَّزِيدٍ", example: { en: "Is there more?", ur: "کیا کچھ اور بھی ہے؟" }, effect: { en: "Personification of Hell's insatiable appetite", ur: "جہنم کی نہ بجھنے والی بھوک کی تشخیص" } },
      { feature: "وَلَدَيْنَا مَزِيدٌ", example: { en: "And with Us is more", ur: "اور ہمارے پاس مزید ہے" }, effect: { en: "Echo and contrast - Paradise offers even more", ur: "بازگشت اور تقابل - جنت اور بھی زیادہ پیش کرتی ہے" } },
      { feature: "كَلَّا", example: { en: "No! (emphatic)", ur: "ہرگز نہیں! (تاکیدی)" }, effect: { en: "Strong negation/rebuttal (appears at v.4)", ur: "سخت نفی/تردید (آیت 4 میں آتا ہے)" } }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 78, name: "An-Naba", relationship: "Both focus on resurrection proofs and afterlife descriptions", type: "thematic_parallel" },
      { surah: 36, name: "Ya-Sin", relationship: "Both use creation as proof of resurrection", type: "thematic_parallel" },
      { surah: 67, name: "Al-Mulk", relationship: "Both describe Hell questioning and divine knowledge", type: "thematic_parallel" },
      { surah: 56, name: "Al-Waqi'ah", relationship: "Both detail Paradise and Hell scenes", type: "thematic_parallel" },
      { surah: 51, name: "Adh-Dhariyat", relationship: "Following surah, continues resurrection theme", type: "sequential_relationship" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "50:6", topic: "Flawless sky", note: { en: "فُرُوج (rifts/cracks) - atmosphere's seamless protective layer", ur: "فُرُوج (دراڑیں/شگاف) - فضا کی بے درز حفاظتی تہ" } },
      { verse: "50:7", topic: "Mountains as anchors", note: { en: "رَوَاسِي (firmly set) - mountains' role in tectonic stability", ur: "رَوَاسِی (مضبوطی سے جمے ہوئے) - ٹیکٹونک استحکام میں پہاڑوں کا کردار" } },
      { verse: "50:9-10", topic: "Water cycle", note: { en: "Rain from sky producing crops and tall palms - hydrological cycle", ur: "آسمان سے بارش جو فصلیں اور بلند کھجوریں اُگاتی ہے - آبی چکر" } },
      { verse: "50:16", topic: "Jugular vein proximity", note: { en: "حَبْلِ الْوَرِيدِ - vital blood vessel, symbolizing intimate divine knowledge", ur: "حَبْلِ الْوَرِيدِ - اہم خون کی نالی، اللہ کے گہرے علم کی علامت" } }
    ]
  }
};

export default ONTOLOGY;
