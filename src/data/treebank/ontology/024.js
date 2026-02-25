/**
 * Surah An-Nur (24) - Ontology of Quranic Concepts
 * The Light - 64 Ayahs, Medinan
 *
 * Theme: Social ethics, modesty, household laws, and divine light
 * Famous for: Ayat an-Nur (Light Verse), laws of modesty, slander incident
 *
 * Major Sections:
 * 1. Laws against adultery and slander (1-26)
 * 2. Household etiquette and privacy (27-34)
 * 3. The Light Verse - Ayat an-Nur (35-40)
 * 4. Signs in creation (41-46)
 * 5. Obedience to Allah and Messenger (47-57)
 * 6. Privacy rules and permissions (58-64)
 */

export const ONTOLOGY = {
  surahId: 24,
  surahName: "An-Nur",
  surahNameArabic: "النور",
  revelationType: "Madani",
  totalAyahs: 64,

  categories: {
    legalPunishments: {
      name: "Legal Punishments (Hudud)",
      nameArabic: "الحدود",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "الزَّانِيَةُ وَالزَّانِي", meaning: { en: "The adulteress and adulterer", ur: "زنا کار عورت اور زنا کار مرد" }, explanation: { en: "Opening declaration on fornication", ur: "زنا کے بارے میں ابتدائی اعلان" }, verseRef: "24:2" },
        { term: "فَاجْلِدُوا كُلَّ وَاحِدٍ مِّنْهُمَا مِائَةَ جَلْدَةٍ", meaning: { en: "Lash each one of them a hundred lashes", ur: "ان میں سے ہر ایک کو سو کوڑے لگاؤ" }, explanation: { en: "Prescribed punishment for proven adultery", ur: "ثابت شدہ زنا کی مقررہ سزا" }, verseRef: "24:2" },
        { term: "لَا تَأْخُذْكُم بِهِمَا رَأْفَةٌ فِي دِينِ اللَّهِ", meaning: { en: "Let not compassion overtake you in Allah's religion", ur: "اللہ کے دین میں ان پر ترس نہ کھاؤ" }, explanation: { en: "Justice must not be compromised", ur: "انصاف میں کوئی سمجھوتہ نہیں ہونا چاہیے" }, verseRef: "24:2" },
        { term: "الزَّانِي لَا يَنكِحُ إِلَّا زَانِيَةً", meaning: { en: "Adulterer marries not except adulteress", ur: "زنا کار مرد صرف زنا کار عورت سے نکاح کرتا ہے" }, explanation: { en: "Social consequence of such behavior", ur: "اس طرح کے رویے کا سماجی نتیجہ" }, verseRef: "24:3" }
      ]
    },

    slanderLaws: {
      name: "Laws Against Slander (Qadhf)",
      nameArabic: "حد القذف",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "وَالَّذِينَ يَرْمُونَ الْمُحْصَنَاتِ", meaning: { en: "Those who accuse chaste women", ur: "جو لوگ پاک دامن عورتوں پر الزام لگائیں" }, explanation: { en: "Beginning of slander legislation", ur: "تہمت سے متعلق قانون سازی کا آغاز" }, verseRef: "24:4" },
        { term: "ثُمَّ لَمْ يَأْتُوا بِأَرْبَعَةِ شُهَدَاءَ", meaning: { en: "Then do not bring four witnesses", ur: "پھر چار گواہ نہ لائیں" }, explanation: { en: "Extremely high burden of proof required", ur: "ثبوت کا انتہائی سخت معیار درکار" }, verseRef: "24:4" },
        { term: "فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً", meaning: { en: "Lash them eighty lashes", ur: "انہیں اسّی کوڑے لگاؤ" }, explanation: { en: "Punishment for false accusation", ur: "جھوٹی تہمت کی سزا" }, verseRef: "24:4" },
        { term: "وَلَا تَقْبَلُوا لَهُمْ شَهَادَةً أَبَدًا", meaning: { en: "And never accept their testimony", ur: "اور ان کی گواہی کبھی قبول نہ کرو" }, explanation: { en: "Permanent loss of credibility", ur: "ہمیشہ کے لیے اعتبار ختم" }, verseRef: "24:4" },
        { term: "وَأُولَٰئِكَ هُمُ الْفَاسِقُونَ", meaning: { en: "And those are the defiantly disobedient", ur: "اور یہی لوگ فاسق ہیں" }, explanation: { en: "False accusers labeled as transgressors", ur: "جھوٹا الزام لگانے والے فاسق قرار" }, verseRef: "24:4" }
      ]
    },

    liaan: {
      name: "Li'an (Spousal Accusation)",
      nameArabic: "اللعان",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "وَالَّذِينَ يَرْمُونَ أَزْوَاجَهُمْ", meaning: { en: "Those who accuse their wives", ur: "جو لوگ اپنی بیویوں پر الزام لگائیں" }, explanation: { en: "Special case for spousal accusation", ur: "میاں بیوی کے درمیان الزام کا خاص معاملہ" }, verseRef: "24:6" },
        { term: "أَرْبَعُ شَهَادَاتٍ بِاللَّهِ", meaning: { en: "Four testimonies by Allah", ur: "اللہ کی چار قسمیں" }, explanation: { en: "Husband swears four times", ur: "شوہر چار بار قسم کھاتا ہے" }, verseRef: "24:6" },
        { term: "إِنَّهُ لَمِنَ الصَّادِقِينَ", meaning: { en: "That he is of the truthful", ur: "کہ وہ سچوں میں سے ہے" }, explanation: { en: "Oath affirming truthfulness", ur: "سچائی کی تصدیق کی قسم" }, verseRef: "24:6" },
        { term: "وَالْخَامِسَةُ أَنَّ لَعْنَتَ اللَّهِ عَلَيْهِ", meaning: { en: "And the fifth: Allah's curse on him", ur: "اور پانچویں بار کہ اللہ کی لعنت اس پر" }, explanation: { en: "Fifth oath invoking curse if lying", ur: "پانچویں قسم میں جھوٹ بولنے پر لعنت کی دعا" }, verseRef: "24:7" },
        { term: "وَيَدْرَأُ عَنْهَا الْعَذَابَ", meaning: { en: "And it will ward off punishment from her", ur: "اور عورت سے سزا ٹل جائے گی" }, explanation: { en: "Wife can defend herself similarly", ur: "بیوی بھی اسی طرح اپنا دفاع کر سکتی ہے" }, verseRef: "24:8" }
      ]
    },

    ifkIncident: {
      name: "The Slander Incident (Al-Ifk)",
      nameArabic: "حادثة الإفك",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "إِنَّ الَّذِينَ جَاءُوا بِالْإِفْكِ", meaning: { en: "Those who brought the slander", ur: "جو لوگ بہتان لے کر آئے" }, explanation: { en: "Introduction to false accusation against Aisha", ur: "عائشہ رضی اللہ عنہا پر جھوٹے الزام کا تعارف" }, verseRef: "24:11" },
        { term: "عُصْبَةٌ مِّنكُمْ", meaning: { en: "A group among you", ur: "تم میں سے ایک گروہ" }, explanation: { en: "Some Muslims participated in spreading lies", ur: "بعض مسلمانوں نے جھوٹ پھیلانے میں حصہ لیا" }, verseRef: "24:11" },
        { term: "لَا تَحْسَبُوهُ شَرًّا لَّكُم بَلْ هُوَ خَيْرٌ لَّكُمْ", meaning: { en: "Do not think it bad for you; rather it is good for you", ur: "اسے اپنے لیے بُرا نہ سمجھو بلکہ یہ تمہارے لیے بہتر ہے" }, explanation: { en: "Trial became purification and legislation", ur: "آزمائش تزکیہ اور قانون سازی کا ذریعہ بنی" }, verseRef: "24:11" },
        { term: "لَوْلَا إِذْ سَمِعْتُمُوهُ ظَنَّ الْمُؤْمِنُونَ", meaning: { en: "Why, when you heard it, did not the believers assume good?", ur: "جب تم نے یہ سنا تو مومنوں نے اچھا گمان کیوں نہ کیا؟" }, explanation: { en: "Proper response should have been good assumption", ur: "صحیح جواب حُسنِ ظن ہونا چاہیے تھا" }, verseRef: "24:12" },
        { term: "إِذْ تَلَقَّوْنَهُ بِأَلْسِنَتِكُمْ", meaning: { en: "When you received it with your tongues", ur: "جب تم اسے اپنی زبانوں سے آگے پہنچا رہے تھے" }, explanation: { en: "Spreading without verification", ur: "تصدیق کے بغیر پھیلانا" }, verseRef: "24:15" },
        { term: "هَٰذَا بُهْتَانٌ عَظِيمٌ", meaning: { en: "This is a great slander", ur: "یہ بہت بڑا بہتان ہے" }, explanation: { en: "Should have recognized its enormity", ur: "اس کی سنگینی کو پہچاننا چاہیے تھا" }, verseRef: "24:16" },
        { term: "يَعِظُكُمُ اللَّهُ أَن تَعُودُوا لِمِثْلِهِ أَبَدًا", meaning: { en: "Allah warns you never to repeat the like", ur: "اللہ تمہیں نصیحت کرتا ہے کہ ایسا دوبارہ کبھی نہ کرنا" }, explanation: { en: "Prohibition against future slander", ur: "مستقبل میں تہمت لگانے کی ممانعت" }, verseRef: "24:17" }
      ]
    },

    vindication: {
      name: "Vindication of the Innocent",
      nameArabic: "براءة العفيفات",
      color: "#22C55E",
      icon: "Shield",
      concepts: [
        { term: "وَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ", meaning: { en: "And if not for Allah's favor and mercy upon you", ur: "اور اگر تم پر اللہ کا فضل اور رحمت نہ ہوتی" }, explanation: { en: "Divine protection from greater harm", ur: "بڑے نقصان سے الٰہی تحفظ" }, verseRef: "24:20" },
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ", meaning: { en: "O believers, do not follow Satan's footsteps", ur: "اے ایمان والو! شیطان کے قدموں پر نہ چلو" }, explanation: { en: "Gossip is satanic path", ur: "غیبت شیطانی راستہ ہے" }, verseRef: "24:21" },
        { term: "الْخَبِيثَاتُ لِلْخَبِيثِينَ", meaning: { en: "Impure women for impure men", ur: "ناپاک عورتیں ناپاک مردوں کے لیے" }, explanation: { en: "People naturally match their type", ur: "لوگ فطری طور پر اپنی قسم سے ملتے ہیں" }, verseRef: "24:26" },
        { term: "وَالطَّيِّبَاتُ لِلطَّيِّبِينَ", meaning: { en: "Good women for good men", ur: "پاکیزہ عورتیں پاکیزہ مردوں کے لیے" }, explanation: { en: "Pure attract pure", ur: "پاکیزگی پاکیزگی کو کھینچتی ہے" }, verseRef: "24:26" },
        { term: "أُولَٰئِكَ مُبَرَّءُونَ مِمَّا يَقُولُونَ", meaning: { en: "Those are cleared of what they say", ur: "یہ لوگ ان باتوں سے بَری ہیں جو یہ کہتے ہیں" }, explanation: { en: "Complete exoneration of the accused", ur: "الزام لگائے گئے شخص کی مکمل براءت" }, verseRef: "24:26" }
      ]
    },

    householdEtiquette: {
      name: "Household Etiquette (Adab)",
      nameArabic: "آداب البيوت",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ", meaning: { en: "Do not enter houses other than your own", ur: "اپنے گھروں کے سوا دوسرے گھروں میں داخل نہ ہو" }, explanation: { en: "Privacy and permission required", ur: "پردہ اور اجازت ضروری ہے" }, verseRef: "24:27" },
        { term: "حَتَّىٰ تَسْتَأْنِسُوا", meaning: { en: "Until you ascertain welcome", ur: "جب تک اجازت نہ لے لو" }, explanation: { en: "Ensure hosts are ready", ur: "یقینی بناؤ کہ میزبان تیار ہیں" }, verseRef: "24:27" },
        { term: "وَتُسَلِّمُوا عَلَىٰ أَهْلِهَا", meaning: { en: "And greet its people", ur: "اور گھر والوں کو سلام کرو" }, explanation: { en: "Proper greeting protocol", ur: "سلام کرنے کا مناسب طریقہ" }, verseRef: "24:27" },
        { term: "فَإِن لَّمْ تَجِدُوا فِيهَا أَحَدًا فَلَا تَدْخُلُوهَا", meaning: { en: "If you find no one, do not enter", ur: "اگر کوئی نہ ملے تو اندر داخل نہ ہو" }, explanation: { en: "Empty house rule", ur: "خالی گھر کا قاعدہ" }, verseRef: "24:28" },
        { term: "وَإِن قِيلَ لَكُمُ ارْجِعُوا فَارْجِعُوا", meaning: { en: "And if told to return, then return", ur: "اور اگر واپس جانے کو کہا جائے تو واپس لوٹ جاؤ" }, explanation: { en: "Accept refusal graciously", ur: "انکار کو خوش اسلوبی سے قبول کرو" }, verseRef: "24:28" },
        { term: "لَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَدْخُلُوا بُيُوتًا غَيْرَ مَسْكُونَةٍ", meaning: { en: "No blame for entering uninhabited buildings", ur: "غیر آباد عمارتوں میں داخل ہونے پر کوئی گناہ نہیں" }, explanation: { en: "Public spaces exempt", ur: "عوامی مقامات مستثنیٰ ہیں" }, verseRef: "24:29" }
      ]
    },

    modestyLaws: {
      name: "Modesty Laws (Hijab)",
      nameArabic: "أحكام الحجاب",
      color: "#EC4899",
      icon: "Eye",
      concepts: [
        { term: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ", meaning: { en: "Tell believing men to lower their gaze", ur: "مومن مردوں سے کہو اپنی نظریں نیچی رکھیں" }, explanation: { en: "Men's modesty begins with eyes", ur: "مردوں کی حیا کی ابتداء نظروں سے ہوتی ہے" }, verseRef: "24:30" },
        { term: "وَيَحْفَظُوا فُرُوجَهُمْ", meaning: { en: "And guard their private parts", ur: "اور اپنی شرمگاہوں کی حفاظت کریں" }, explanation: { en: "Physical chastity", ur: "جسمانی پاکدامنی" }, verseRef: "24:30" },
        { term: "ذَٰلِكَ أَزْكَىٰ لَهُمْ", meaning: { en: "That is purer for them", ur: "یہ ان کے لیے زیادہ پاکیزہ ہے" }, explanation: { en: "Spiritual benefit of modesty", ur: "حیا کا روحانی فائدہ" }, verseRef: "24:30" },
        { term: "وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ", meaning: { en: "And tell believing women to lower their gaze", ur: "اور مومن عورتوں سے کہو اپنی نظریں نیچی رکھیں" }, explanation: { en: "Women's modesty also begins with eyes", ur: "عورتوں کی حیا بھی نظروں سے شروع ہوتی ہے" }, verseRef: "24:31" },
        { term: "وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا مَا ظَهَرَ مِنْهَا", meaning: { en: "And not display their adornment except what appears", ur: "اور اپنی زینت ظاہر نہ کریں سوائے اس کے جو خود ظاہر ہو" }, explanation: { en: "General concealment with exceptions", ur: "عمومی پردہ مع استثنائات" }, verseRef: "24:31" },
        { term: "وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ", meaning: { en: "And let them draw their veils over their chests", ur: "اور اپنے دوپٹے اپنے سینوں پر ڈالے رکھیں" }, explanation: { en: "Covering the chest area", ur: "سینے کے حصے کو ڈھانپنا" }, verseRef: "24:31" },
        { term: "وَلَا يَضْرِبْنَ بِأَرْجُلِهِنَّ لِيُعْلَمَ مَا يُخْفِينَ", meaning: { en: "And not stamp feet to make known hidden adornment", ur: "اور پاؤں نہ مارا کریں کہ چھپی ہوئی زینت معلوم ہو جائے" }, explanation: { en: "Even sounds of hidden jewelry", ur: "چھپے ہوئے زیورات کی آواز بھی نہیں" }, verseRef: "24:31" }
      ]
    },

    exemptRelatives: {
      name: "Exempt Relatives (Mahram)",
      nameArabic: "المحارم",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "بُعُولَتِهِنَّ", meaning: { en: "Their husbands", ur: "ان کے شوہر" }, explanation: { en: "First category of exemption", ur: "استثنائی زمرے کی پہلی قسم" }, verseRef: "24:31" },
        { term: "آبَائِهِنَّ أَوْ آبَاءِ بُعُولَتِهِنَّ", meaning: { en: "Their fathers or husbands' fathers", ur: "ان کے باپ یا سسر" }, explanation: { en: "Fathers and fathers-in-law", ur: "باپ اور سسر" }, verseRef: "24:31" },
        { term: "أَبْنَائِهِنَّ أَوْ أَبْنَاءِ بُعُولَتِهِنَّ", meaning: { en: "Their sons or husbands' sons", ur: "ان کے بیٹے یا سوتیلے بیٹے" }, explanation: { en: "Sons and stepsons", ur: "بیٹے اور سوتیلے بیٹے" }, verseRef: "24:31" },
        { term: "إِخْوَانِهِنَّ أَوْ بَنِي إِخْوَانِهِنَّ", meaning: { en: "Their brothers or brothers' sons", ur: "ان کے بھائی یا بھتیجے" }, explanation: { en: "Brothers and nephews", ur: "بھائی اور بھتیجے" }, verseRef: "24:31" },
        { term: "أَوْ نِسَائِهِنَّ", meaning: { en: "Or their women", ur: "یا ان کی عورتیں" }, explanation: { en: "Muslim women", ur: "مسلمان عورتیں" }, verseRef: "24:31" },
        { term: "أَوِ الطِّفْلِ الَّذِينَ لَمْ يَظْهَرُوا عَلَىٰ عَوْرَاتِ النِّسَاءِ", meaning: { en: "Or children unaware of women's private aspects", ur: "یا ایسے بچے جو عورتوں کی پردے کی باتوں سے واقف نہیں" }, explanation: { en: "Young children exempt", ur: "چھوٹے بچے مستثنیٰ ہیں" }, verseRef: "24:31" }
      ]
    },

    marriageEncouragement: {
      name: "Encouragement of Marriage",
      nameArabic: "الحث على الزواج",
      color: "#EC4899",
      icon: "Heart",
      concepts: [
        { term: "وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ", meaning: { en: "And marry the unmarried among you", ur: "اور اپنے میں سے بے نکاحوں کا نکاح کر دو" }, explanation: { en: "Social duty to facilitate marriage", ur: "نکاح میں آسانی پیدا کرنا سماجی فریضہ ہے" }, verseRef: "24:32" },
        { term: "وَالصَّالِحِينَ مِنْ عِبَادِكُمْ وَإِمَائِكُمْ", meaning: { en: "And the righteous among your servants", ur: "اور اپنے نیک غلاموں اور لونڈیوں کا بھی" }, explanation: { en: "Include servants in marriage", ur: "خادموں کو بھی نکاح میں شامل کرو" }, verseRef: "24:32" },
        { term: "إِن يَكُونُوا فُقَرَاءَ يُغْنِهِمُ اللَّهُ مِن فَضْلِهِ", meaning: { en: "If poor, Allah will enrich from His bounty", ur: "اگر وہ غریب ہوں تو اللہ اپنے فضل سے غنی کر دے گا" }, explanation: { en: "Poverty not excuse to avoid marriage", ur: "غربت نکاح سے بچنے کا بہانہ نہیں" }, verseRef: "24:32" },
        { term: "وَلْيَسْتَعْفِفِ الَّذِينَ لَا يَجِدُونَ نِكَاحًا", meaning: { en: "Let those who cannot marry practice restraint", ur: "جو نکاح کی استطاعت نہ رکھیں وہ پاک دامنی اختیار کریں" }, explanation: { en: "Chastity until marriage possible", ur: "نکاح تک پاکدامنی اختیار کرنا" }, verseRef: "24:33" }
      ]
    },

    ayatAnNur: {
      name: "The Light Verse (Ayat an-Nur)",
      nameArabic: "آية النور",
      color: "#F59E0B",
      icon: "Sun",
      concepts: [
        { term: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Allah is the Light of heavens and earth", ur: "اللہ آسمانوں اور زمین کا نور ہے" }, explanation: { en: "Central declaration of divine light", ur: "الٰہی نور کا مرکزی اعلان" }, verseRef: "24:35" },
        { term: "مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ", meaning: { en: "His light is like a niche with a lamp", ur: "اس کے نور کی مثال ایسی ہے جیسے ایک طاق میں چراغ ہو" }, explanation: { en: "Beginning of the famous parable", ur: "مشہور تمثیل کا آغاز" }, verseRef: "24:35" },
        { term: "الْمِصْبَاحُ فِي زُجَاجَةٍ", meaning: { en: "The lamp in a glass", ur: "چراغ ایک شیشے میں ہے" }, explanation: { en: "Glass intensifies light", ur: "شیشہ روشنی کو تیز کرتا ہے" }, verseRef: "24:35" },
        { term: "الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ", meaning: { en: "The glass like a brilliant star", ur: "وہ شیشہ گویا ایک چمکتا ہوا ستارہ ہے" }, explanation: { en: "Radiant luminosity", ur: "چمکدار روشنی" }, verseRef: "24:35" },
        { term: "يُوقَدُ مِن شَجَرَةٍ مُّبَارَكَةٍ زَيْتُونَةٍ", meaning: { en: "Lit from a blessed olive tree", ur: "ایک مبارک زیتون کے درخت سے روشن کیا جاتا ہے" }, explanation: { en: "Pure fuel source", ur: "خالص ایندھن کا ذریعہ" }, verseRef: "24:35" },
        { term: "لَّا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ", meaning: { en: "Neither eastern nor western", ur: "نہ مشرقی نہ مغربی" }, explanation: { en: "Perfect balance, receives full sun", ur: "کامل توازن، پوری دھوپ ملتی ہے" }, verseRef: "24:35" },
        { term: "يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ", meaning: { en: "Its oil would glow even without fire", ur: "اس کا تیل خود روشن ہو جائے اگرچہ آگ نہ چھوئے" }, explanation: { en: "Inherent radiance", ur: "ذاتی چمک" }, verseRef: "24:35" },
        { term: "نُّورٌ عَلَىٰ نُورٍ", meaning: { en: "Light upon light", ur: "نور پر نور" }, explanation: { en: "Layers of divine illumination", ur: "الٰہی روشنی کی تہیں" }, verseRef: "24:35" },
        { term: "يَهْدِي اللَّهُ لِنُورِهِ مَن يَشَاءُ", meaning: { en: "Allah guides to His light whom He wills", ur: "اللہ جسے چاہے اپنے نور کی طرف ہدایت دیتا ہے" }, explanation: { en: "Guidance as divine selection", ur: "ہدایت بطور الٰہی انتخاب" }, verseRef: "24:35" },
        { term: "وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ", meaning: { en: "Allah sets forth parables for people", ur: "اللہ لوگوں کے لیے مثالیں بیان کرتا ہے" }, explanation: { en: "Teaching through metaphor", ur: "استعاروں کے ذریعے تعلیم" }, verseRef: "24:35" }
      ]
    },

    housesOfWorship: {
      name: "Houses of Worship",
      nameArabic: "بيوت العبادة",
      color: "#8B5CF6",
      icon: "Star",
      concepts: [
        { term: "فِي بُيُوتٍ أَذِنَ اللَّهُ أَن تُرْفَعَ", meaning: { en: "In houses Allah has permitted to be raised", ur: "ان گھروں میں جنہیں اللہ نے بلند کرنے کا حکم دیا" }, explanation: { en: "Mosques elevated in status", ur: "مساجد کا بلند مرتبہ" }, verseRef: "24:36" },
        { term: "وَيُذْكَرَ فِيهَا اسْمُهُ", meaning: { en: "And His name mentioned therein", ur: "اور جن میں اس کا نام لیا جائے" }, explanation: { en: "Purpose of mosques", ur: "مساجد کا مقصد" }, verseRef: "24:36" },
        { term: "يُسَبِّحُ لَهُ فِيهَا بِالْغُدُوِّ وَالْآصَالِ", meaning: { en: "Glorifying Him morning and evening", ur: "صبح و شام اس کی تسبیح کرتے ہیں" }, explanation: { en: "Continuous worship", ur: "مسلسل عبادت" }, verseRef: "24:36" },
        { term: "رِجَالٌ لَّا تُلْهِيهِمْ تِجَارَةٌ وَلَا بَيْعٌ", meaning: { en: "Men whom neither trade nor sale distracts", ur: "ایسے مرد جنہیں تجارت اور خرید و فروخت غافل نہیں کرتی" }, explanation: { en: "Prioritizing worship over business", ur: "کاروبار پر عبادت کو ترجیح دینا" }, verseRef: "24:37" },
        { term: "عَن ذِكْرِ اللَّهِ وَإِقَامِ الصَّلَاةِ", meaning: { en: "From remembrance of Allah and prayer", ur: "اللہ کے ذکر اور نماز قائم کرنے سے" }, explanation: { en: "Focus remains on devotion", ur: "توجہ عبادت پر قائم رہتی ہے" }, verseRef: "24:37" }
      ]
    },

    disbelieversState: {
      name: "State of Disbelievers",
      nameArabic: "حال الكافرين",
      color: "#EF4444",
      icon: "Moon",
      concepts: [
        { term: "وَالَّذِينَ كَفَرُوا أَعْمَالُهُمْ كَسَرَابٍ بِقِيعَةٍ", meaning: { en: "Disbelievers' deeds like a mirage in desert", ur: "کافروں کے اعمال چٹیل میدان کی سراب کی طرح ہیں" }, explanation: { en: "Illusory nature of their works", ur: "ان کے اعمال کی فریب کاری" }, verseRef: "24:39" },
        { term: "يَحْسَبُهُ الظَّمْآنُ مَاءً", meaning: { en: "The thirsty thinks it water", ur: "پیاسا اسے پانی سمجھتا ہے" }, explanation: { en: "False hope", ur: "جھوٹی امید" }, verseRef: "24:39" },
        { term: "حَتَّىٰ إِذَا جَاءَهُ لَمْ يَجِدْهُ شَيْئًا", meaning: { en: "Until when he reaches it, he finds nothing", ur: "یہاں تک کہ جب وہاں پہنچے تو کچھ نہ پائے" }, explanation: { en: "Ultimate disappointment", ur: "انتہائی مایوسی" }, verseRef: "24:39" },
        { term: "وَوَجَدَ اللَّهَ عِندَهُ فَوَفَّاهُ حِسَابَهُ", meaning: { en: "And found Allah there who paid his account", ur: "اور وہاں اللہ کو پایا جس نے اس کا حساب پورا چکا دیا" }, explanation: { en: "Unexpected reckoning", ur: "غیر متوقع حساب" }, verseRef: "24:39" },
        { term: "أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُّجِّيٍّ", meaning: { en: "Or like darkness in a deep sea", ur: "یا جیسے گہرے سمندر میں اندھیرے" }, explanation: { en: "Second parable of disbelief", ur: "کفر کی دوسری تمثیل" }, verseRef: "24:40" },
        { term: "يَغْشَاهُ مَوْجٌ مِّن فَوْقِهِ مَوْجٌ", meaning: { en: "Covered by waves upon waves", ur: "لہروں پر لہریں اسے ڈھانپے ہوئے ہیں" }, explanation: { en: "Layers of darkness", ur: "تاریکی کی تہیں" }, verseRef: "24:40" },
        { term: "ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ", meaning: { en: "Darkness, some above others", ur: "اندھیرے ایک کے اوپر ایک" }, explanation: { en: "Compounded confusion", ur: "مسلسل بڑھتی ہوئی گمراہی" }, verseRef: "24:40" },
        { term: "وَمَن لَّمْ يَجْعَلِ اللَّهُ لَهُ نُورًا فَمَا لَهُ مِن نُّورٍ", meaning: { en: "Whom Allah gives no light has no light", ur: "جسے اللہ نور نہ دے اس کے لیے کوئی نور نہیں" }, explanation: { en: "Divine light is essential", ur: "الٰہی نور ناگزیر ہے" }, verseRef: "24:40" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "أَلَمْ تَرَ أَنَّ اللَّهَ يُسَبِّحُ لَهُ مَن فِي السَّمَاوَاتِ", meaning: { en: "Do you not see that Allah is glorified by all in heavens", ur: "کیا تم نے نہیں دیکھا کہ آسمانوں میں سب اللہ کی تسبیح کرتے ہیں" }, explanation: { en: "Universal worship", ur: "کائناتی عبادت" }, verseRef: "24:41" },
        { term: "وَالطَّيْرُ صَافَّاتٍ", meaning: { en: "And the birds with wings spread", ur: "اور پرندے پر پھیلائے ہوئے" }, explanation: { en: "Birds glorify in flight", ur: "پرندے اڑتے ہوئے تسبیح کرتے ہیں" }, verseRef: "24:41" },
        { term: "كُلٌّ قَدْ عَلِمَ صَلَاتَهُ وَتَسْبِيحَهُ", meaning: { en: "Each knows its prayer and praise", ur: "ہر ایک اپنی نماز اور تسبیح جانتا ہے" }, explanation: { en: "Innate worship", ur: "فطری عبادت" }, verseRef: "24:41" },
        { term: "وَاللَّهُ يُقَلِّبُ اللَّيْلَ وَالنَّهَارَ", meaning: { en: "Allah alternates night and day", ur: "اللہ رات اور دن کو پلٹتا رہتا ہے" }, explanation: { en: "Cosmic rhythm", ur: "کائناتی تال میل" }, verseRef: "24:44" },
        { term: "وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِّن مَّاءٍ", meaning: { en: "Allah created every creature from water", ur: "اللہ نے ہر جاندار کو پانی سے پیدا کیا" }, explanation: { en: "Water origin of life", ur: "پانی زندگی کی اصل" }, verseRef: "24:45" }
      ]
    },

    obedienceCommand: {
      name: "Obedience to Allah and Messenger",
      nameArabic: "طاعة الله والرسول",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "وَأَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ", meaning: { en: "Obey Allah and obey the Messenger", ur: "اللہ کی اطاعت کرو اور رسول کی اطاعت کرو" }, explanation: { en: "Dual obedience required", ur: "دوہری اطاعت ضروری ہے" }, verseRef: "24:54" },
        { term: "فَإِن تَوَلَّوْا فَإِنَّمَا عَلَيْهِ مَا حُمِّلَ", meaning: { en: "If you turn away, upon him is only his duty", ur: "اگر تم منہ موڑو تو اس پر صرف اس کی ذمہ داری ہے" }, explanation: { en: "Messenger's responsibility is delivery", ur: "رسول کی ذمہ داری صرف پیغام پہنچانا ہے" }, verseRef: "24:54" },
        { term: "وَعَلَيْكُم مَّا حُمِّلْتُمْ", meaning: { en: "And upon you is what you are charged with", ur: "اور تم پر وہ ہے جو تم پر فرض کیا گیا" }, explanation: { en: "Your responsibility is obedience", ur: "تمہاری ذمہ داری اطاعت ہے" }, verseRef: "24:54" },
        { term: "إِنَّمَا كَانَ قَوْلَ الْمُؤْمِنِينَ... أَن يَقُولُوا سَمِعْنَا وَأَطَعْنَا", meaning: { en: "Believers say 'We hear and obey'", ur: "مومنوں کا قول یہ ہے کہ 'ہم نے سنا اور اطاعت کی'" }, explanation: { en: "True believer's response", ur: "سچے مومن کا جواب" }, verseRef: "24:51" }
      ]
    },

    promiseToRighteous: {
      name: "Promise to the Righteous",
      nameArabic: "وعد المؤمنين",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَعَمِلُوا الصَّالِحَاتِ", meaning: { en: "Allah has promised those who believe and do good", ur: "اللہ نے تم میں سے ایمان والوں اور نیک عمل کرنے والوں سے وعدہ کیا ہے" }, explanation: { en: "Divine promise to believers", ur: "مومنوں سے الٰہی وعدہ" }, verseRef: "24:55" },
        { term: "لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ", meaning: { en: "He will make them successors on earth", ur: "وہ انہیں زمین میں خلیفہ بنائے گا" }, explanation: { en: "Promise of leadership", ur: "قیادت کا وعدہ" }, verseRef: "24:55" },
        { term: "كَمَا اسْتَخْلَفَ الَّذِينَ مِن قَبْلِهِمْ", meaning: { en: "As He made successors those before them", ur: "جیسے ان سے پہلے لوگوں کو خلیفہ بنایا" }, explanation: { en: "Historical precedent", ur: "تاریخی مثال" }, verseRef: "24:55" },
        { term: "وَلَيُمَكِّنَنَّ لَهُمْ دِينَهُمُ", meaning: { en: "And establish for them their religion", ur: "اور ان کے دین کو مضبوط کر دے گا" }, explanation: { en: "Religious authority", ur: "دینی اقتدار" }, verseRef: "24:55" },
        { term: "وَلَيُبَدِّلَنَّهُم مِّن بَعْدِ خَوْفِهِمْ أَمْنًا", meaning: { en: "And replace their fear with security", ur: "اور ان کے خوف کو امن سے بدل دے گا" }, explanation: { en: "Peace after struggle", ur: "جدوجہد کے بعد امن" }, verseRef: "24:55" }
      ]
    },

    privacyRules: {
      name: "Privacy Within Household",
      nameArabic: "آداب الاستئذان",
      color: "#10B981",
      icon: "Eye",
      concepts: [
        { term: "لِيَسْتَأْذِنكُمُ الَّذِينَ مَلَكَتْ أَيْمَانُكُمْ", meaning: { en: "Let those your right hands possess ask permission", ur: "تمہارے غلام تم سے اجازت لیں" }, explanation: { en: "Servants must seek permission", ur: "خادموں کو اجازت لینی ضروری ہے" }, verseRef: "24:58" },
        { term: "وَالَّذِينَ لَمْ يَبْلُغُوا الْحُلُمَ مِنكُمْ", meaning: { en: "And those who have not reached puberty", ur: "اور تمہارے وہ بچے جو ابھی بالغ نہیں ہوئے" }, explanation: { en: "Children's etiquette", ur: "بچوں کے آداب" }, verseRef: "24:58" },
        { term: "ثَلَاثَ مَرَّاتٍ", meaning: { en: "Three times", ur: "تین مرتبہ" }, explanation: { en: "Three private times daily", ur: "روزانہ تین خلوت کے اوقات" }, verseRef: "24:58" },
        { term: "مِّن قَبْلِ صَلَاةِ الْفَجْرِ", meaning: { en: "Before dawn prayer", ur: "نمازِ فجر سے پہلے" }, explanation: { en: "Early morning privacy", ur: "صبح سویرے کی خلوت" }, verseRef: "24:58" },
        { term: "وَحِينَ تَضَعُونَ ثِيَابَكُم مِّنَ الظَّهِيرَةِ", meaning: { en: "When you put aside clothing at noon", ur: "اور جب دوپہر کو کپڑے اتارتے ہو" }, explanation: { en: "Afternoon rest time", ur: "دوپہر کے آرام کا وقت" }, verseRef: "24:58" },
        { term: "وَمِن بَعْدِ صَلَاةِ الْعِشَاءِ", meaning: { en: "After night prayer", ur: "نمازِ عشاء کے بعد" }, explanation: { en: "Nighttime privacy", ur: "رات کی خلوت" }, verseRef: "24:58" },
        { term: "ثَلَاثُ عَوْرَاتٍ لَّكُمْ", meaning: { en: "Three times of privacy for you", ur: "تمہارے لیے تین پردے کے اوقات" }, explanation: { en: "Natural private moments", ur: "فطری خلوت کے لمحات" }, verseRef: "24:58" }
      ]
    },

    elderlyWomenExemption: {
      name: "Elderly Women's Exemption",
      nameArabic: "رخصة القواعد",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَالْقَوَاعِدُ مِنَ النِّسَاءِ", meaning: { en: "Women past childbearing", ur: "بوڑھی عورتیں جو بچے پیدا کرنے کی عمر سے گزر چکی ہوں" }, explanation: { en: "Elderly women category", ur: "بزرگ عورتوں کا زمرہ" }, verseRef: "24:60" },
        { term: "اللَّاتِي لَا يَرْجُونَ نِكَاحًا", meaning: { en: "Who have no hope of marriage", ur: "جو نکاح کی امید نہیں رکھتیں" }, explanation: { en: "No longer marriage candidates", ur: "اب نکاح کی امیدوار نہیں" }, verseRef: "24:60" },
        { term: "فَلَيْسَ عَلَيْهِنَّ جُنَاحٌ أَن يَضَعْنَ ثِيَابَهُنَّ", meaning: { en: "No blame to put aside outer garments", ur: "ان پر کوئی گناہ نہیں کہ اپنی بالائی چادریں اتار دیں" }, explanation: { en: "Relaxed covering rules", ur: "پردے کے نرم احکامات" }, verseRef: "24:60" },
        { term: "غَيْرَ مُتَبَرِّجَاتٍ بِزِينَةٍ", meaning: { en: "Not displaying adornment", ur: "بشرطیکہ بناؤ سنگار کی نمائش نہ کریں" }, explanation: { en: "Still not displaying beauty", ur: "پھر بھی خوبصورتی کی نمائش نہیں" }, verseRef: "24:60" },
        { term: "وَأَن يَسْتَعْفِفْنَ خَيْرٌ لَّهُنَّ", meaning: { en: "But to remain modest is better for them", ur: "لیکن پردے میں رہنا ان کے لیے بہتر ہے" }, explanation: { en: "Full modesty still preferred", ur: "مکمل حیا ابھی بھی افضل ہے" }, verseRef: "24:60" }
      ]
    },

    socialDining: {
      name: "Social Dining Rules",
      nameArabic: "آداب الطعام",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "لَيْسَ عَلَى الْأَعْمَىٰ حَرَجٌ", meaning: { en: "No blame on the blind", ur: "اندھے پر کوئی حرج نہیں" }, explanation: { en: "Exemption for disabled", ur: "معذوروں کے لیے رخصت" }, verseRef: "24:61" },
        { term: "وَلَا عَلَى الْأَعْرَجِ حَرَجٌ", meaning: { en: "Nor on the lame", ur: "اور نہ لنگڑے پر حرج ہے" }, explanation: { en: "Physical limitations accommodated", ur: "جسمانی معذوری کا لحاظ" }, verseRef: "24:61" },
        { term: "وَلَا عَلَى الْمَرِيضِ حَرَجٌ", meaning: { en: "Nor on the sick", ur: "اور نہ بیمار پر کوئی حرج" }, explanation: { en: "Illness exemption", ur: "بیماری کی رخصت" }, verseRef: "24:61" },
        { term: "وَلَا عَلَىٰ أَنفُسِكُمْ أَن تَأْكُلُوا مِن بُيُوتِكُمْ", meaning: { en: "Nor on yourselves to eat from your homes", ur: "اور نہ تم پر کوئی حرج کہ اپنے گھروں سے کھاؤ" }, explanation: { en: "Eating at family homes", ur: "خاندانی گھروں میں کھانا" }, verseRef: "24:61" },
        { term: "أَوْ بُيُوتِ آبَائِكُمْ أَوْ بُيُوتِ أُمَّهَاتِكُمْ", meaning: { en: "Or homes of fathers or mothers", ur: "یا باپ کے گھروں سے یا ماؤں کے گھروں سے" }, explanation: { en: "Parent's homes", ur: "والدین کے گھر" }, verseRef: "24:61" },
        { term: "أَشْتَاتًا أَوْ جَمِيعًا", meaning: { en: "Separately or together", ur: "الگ الگ ہو یا اکٹھے" }, explanation: { en: "No restriction on eating alone or together", ur: "اکیلے یا مل کر کھانے پر کوئی پابندی نہیں" }, verseRef: "24:61" },
        { term: "فَإِذَا دَخَلْتُم بُيُوتًا فَسَلِّمُوا", meaning: { en: "When you enter houses, greet", ur: "جب گھروں میں داخل ہو تو سلام کرو" }, explanation: { en: "Proper greeting", ur: "مناسب طریقے سے سلام" }, verseRef: "24:61" },
        { term: "تَحِيَّةً مِّنْ عِندِ اللَّهِ مُبَارَكَةً طَيِّبَةً", meaning: { en: "A greeting from Allah, blessed and good", ur: "اللہ کی طرف سے ایک مبارک اور پاکیزہ دعا" }, explanation: { en: "Salam as divine blessing", ur: "سلام بطور الٰہی برکت" }, verseRef: "24:61" }
      ]
    },

    properConduct: {
      name: "Proper Conduct with Prophet",
      nameArabic: "آداب مع الرسول",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ آمَنُوا بِاللَّهِ وَرَسُولِهِ", meaning: { en: "Believers are those who believe in Allah and His Messenger", ur: "مومن وہی ہیں جو اللہ اور اس کے رسول پر ایمان لائے" }, explanation: { en: "Definition of believers", ur: "مومنوں کی تعریف" }, verseRef: "24:62" },
        { term: "وَإِذَا كَانُوا مَعَهُ عَلَىٰ أَمْرٍ جَامِعٍ", meaning: { en: "When with him on collective matter", ur: "جب وہ کسی اجتماعی معاملے میں آپ ﷺ کے ساتھ ہوں" }, explanation: { en: "Congregational affairs", ur: "اجتماعی معاملات" }, verseRef: "24:62" },
        { term: "لَمْ يَذْهَبُوا حَتَّىٰ يَسْتَأْذِنُوهُ", meaning: { en: "Do not leave until seeking his permission", ur: "اس وقت تک نہیں جاتے جب تک اجازت نہ لے لیں" }, explanation: { en: "Respecting Prophet's leadership", ur: "نبی ﷺ کی قیادت کا احترام" }, verseRef: "24:62" },
        { term: "لَّا تَجْعَلُوا دُعَاءَ الرَّسُولِ بَيْنَكُمْ كَدُعَاءِ بَعْضِكُم بَعْضًا", meaning: { en: "Do not make calling the Messenger like calling each other", ur: "رسول کو پکارنا آپس میں ایک دوسرے کو پکارنے جیسا نہ بناؤ" }, explanation: { en: "Elevated respect for Prophet", ur: "نبی ﷺ کے لیے بلند مرتبے کا احترام" }, verseRef: "24:63" },
        { term: "فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ", meaning: { en: "Let those who oppose his command beware", ur: "جو لوگ اس کے حکم کی خلاف ورزی کریں وہ ڈریں" }, explanation: { en: "Warning against disobedience", ur: "نافرمانی کے خلاف تنبیہ" }, verseRef: "24:63" },
        { term: "أَن تُصِيبَهُمْ فِتْنَةٌ أَوْ يُصِيبَهُمْ عَذَابٌ أَلِيمٌ", meaning: { en: "That trial or painful punishment strikes them", ur: "کہ ان پر کوئی فتنہ آ پڑے یا دردناک عذاب پہنچے" }, explanation: { en: "Consequence of disobedience", ur: "نافرمانی کا انجام" }, verseRef: "24:63" }
      ]
    }
  },

  relationships: [
    { from: "الزنا", to: "القذف", type: "sequence", description: { en: "Adultery laws followed by slander laws", ur: "زنا کے احکام کے بعد تہمت کے احکام" } },
    { from: "الإفك", to: "براءة العفيفات", type: "cause-effect", description: { en: "Slander incident led to vindication", ur: "واقعہ افک براءت کا سبب بنا" } },
    { from: "غض البصر", to: "حفظ الفروج", type: "progression", description: { en: "Lowering gaze leads to chastity", ur: "نظریں نیچی رکھنا پاکدامنی کی طرف لے جاتا ہے" } },
    { from: "نور الله", to: "ظلمات الكفر", type: "contrast", description: { en: "Divine light vs. disbeliever's darkness", ur: "الٰہی نور بمقابلہ کافروں کی تاریکی" } },
    { from: "المشكاة", to: "النور", type: "metaphor", description: { en: "Niche-lamp-glass metaphor for divine light", ur: "الٰہی نور کے لیے طاق-چراغ-شیشے کی تمثیل" } },
    { from: "السراب", to: "الظلمات", type: "parallel", description: { en: "Two parables for disbelief", ur: "کفر کے لیے دو تمثیلیں" } },
    { from: "الاستخلاف", to: "الإيمان والعمل", type: "condition", description: { en: "Succession conditioned on faith and deeds", ur: "خلافت ایمان اور اعمال پر مشروط ہے" } },
    { from: "العورات الثلاث", to: "الأدب المنزلي", type: "application", description: { en: "Privacy times as household etiquette", ur: "پردے کے اوقات بطور گھریلو آداب" } }
  ],

  thematicFlow: {
    title: { en: "From Legal Protection to Divine Light", ur: "قانونی تحفظ سے الٰہی نور تک" },
    stages: [
      { stage: 1, theme: "Legal Punishments", verses: "24:1-10", description: { en: "Laws for adultery, slander, li'an", ur: "زنا، تہمت اور لعان کے احکام" } },
      { stage: 2, theme: "The Ifk Incident", verses: "24:11-20", description: { en: "Slander against Aisha and its lessons", ur: "عائشہ رضی اللہ عنہا پر بہتان اور اس کے اسباق" } },
      { stage: 3, theme: "Moral Cleansing", verses: "24:21-26", description: { en: "Satan's footsteps, vindication of the innocent", ur: "شیطان کے نقشِ قدم، بے گناہوں کی براءت" } },
      { stage: 4, theme: "Household Etiquette", verses: "24:27-29", description: { en: "Permission and privacy rules", ur: "اجازت اور پردے کے قوانین" } },
      { stage: 5, theme: "Modesty Laws", verses: "24:30-34", description: { en: "Lowering gaze, covering, marriage encouragement", ur: "نظریں نیچی رکھنا، پردہ، نکاح کی ترغیب" } },
      { stage: 6, theme: "The Light Verse", verses: "24:35-40", description: { en: "Divine light vs. darkness of disbelief", ur: "الٰہی نور بمقابلہ کفر کی تاریکی" } },
      { stage: 7, theme: "Universal Worship", verses: "24:41-46", description: { en: "All creation glorifies Allah", ur: "ساری مخلوقات اللہ کی تسبیح کرتی ہے" } },
      { stage: 8, theme: "True Believers", verses: "24:47-54", description: { en: "Characteristics of hypocrites vs. believers", ur: "منافقین بمقابلہ مومنوں کی خصوصیات" } },
      { stage: 9, theme: "Divine Promise", verses: "24:55-57", description: { en: "Succession for righteous believers", ur: "نیک مومنوں کے لیے خلافت کا وعدہ" } },
      { stage: 10, theme: "Privacy Completion", verses: "24:58-64", description: { en: "Detailed privacy rules, dining, conduct", ur: "تفصیلی پردے کے احکام، کھانے کے آداب، سلوک" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Protect honor", ur: "عزت کی حفاظت" }, how: { en: "Never spread unverified accusations", ur: "کبھی بھی غیر تصدیق شدہ الزامات نہ پھیلاؤ" }, verse: "24:12" },
      { principle: { en: "Assume good", ur: "حسنِ ظن رکھو" }, how: { en: "When hearing accusations, think positively of believers", ur: "الزامات سن کر مومنوں کے بارے میں اچھا سوچو" }, verse: "24:12" },
      { principle: { en: "Seek permission", ur: "اجازت لو" }, how: { en: "Always announce before entering others' spaces", ur: "دوسروں کی جگہ میں داخل ہونے سے پہلے ہمیشہ اجازت لو" }, verse: "24:27" },
      { principle: { en: "Lower gaze", ur: "نظریں نیچی رکھو" }, how: { en: "First step to chastity - control where you look", ur: "پاکدامنی کا پہلا قدم - نظروں پر قابو رکھو" }, verse: "24:30" },
      { principle: { en: "Facilitate marriage", ur: "نکاح میں آسانی پیدا کرو" }, how: { en: "Help unmarried people find spouses", ur: "غیر شادی شدہ لوگوں کو شریکِ حیات ڈھونڈنے میں مدد کرو" }, verse: "24:32" },
      { principle: { en: "Seek light", ur: "نور تلاش کرو" }, how: { en: "Follow Allah's guidance - without it there is only darkness", ur: "اللہ کی ہدایت پر چلو - اس کے بغیر صرف اندھیرا ہے" }, verse: "24:40" },
      { principle: { en: "Prioritize worship", ur: "عبادت کو ترجیح دو" }, how: { en: "Don't let business distract from prayer", ur: "کاروبار کو نماز سے غافل نہ ہونے دو" }, verse: "24:37" },
      { principle: { en: "Respect privacy times", ur: "خلوت کے اوقات کا احترام کرو" }, how: { en: "Observe three private times in household", ur: "گھر میں تین خلوت کے اوقات کا خیال رکھو" }, verse: "24:58" },
      { principle: { en: "Say 'We hear and obey'", ur: "'ہم نے سنا اور اطاعت کی' کہو" }, how: { en: "True believer's response to divine commands", ur: "الٰہی احکام پر سچے مومن کا جواب" }, verse: "24:51" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Light of Morality", ur: "اخلاقیات کا نور" },
    insight: {
      en: "Surah An-Nur is uniquely structured around the theme of 'light' - both physical and spiritual. The surah begins with laws protecting honor and chastity (social light), moves to the famous Light Verse describing Allah as the source of all illumination, then contrasts this with the darkness of disbelief (mirage and deep sea parables). The message is profound: a morally upright society reflects divine light, while moral corruption leads to spiritual darkness. The Ifk incident (slander against Aisha) serves as a historical lesson - even the Prophet's household was tested, and the divine response established permanent laws. The detailed rules about household privacy, modesty, and social interaction are not restrictions but protections for this light. As verse 24:40 states: 'Whoever Allah gives no light has no light' - showing that divine guidance is essential for moral clarity. Umar ibn al-Khattab reportedly said: 'Learn Surah An-Nur and teach it to your women' - recognizing its comprehensive guidance for family and social life.",
      ur: "سورہ النور 'نور' کے موضوع کے گرد منفرد طور پر مرتب ہے - جسمانی اور روحانی دونوں۔ سورت عزت اور پاکدامنی کی حفاظت کے قوانین (سماجی نور) سے شروع ہوتی ہے، پھر مشہور آیتِ نور کی طرف بڑھتی ہے جو اللہ کو تمام روشنی کا منبع بیان کرتی ہے، پھر اسے کفر کی تاریکی (سراب اور گہرے سمندر کی تمثیلیں) سے مقابل رکھتی ہے۔ پیغام گہرا ہے: اخلاقی طور پر مضبوط معاشرہ الٰہی نور کی عکاسی کرتا ہے، جبکہ اخلاقی بگاڑ روحانی تاریکی کی طرف لے جاتا ہے۔ واقعہ افک (عائشہ رضی اللہ عنہا پر بہتان) ایک تاریخی سبق ہے - نبی ﷺ کا گھرانہ بھی آزمایا گیا، اور الٰہی جواب نے مستقل قوانین قائم کیے۔ گھریلو پردے، حیا اور سماجی میل جول کے تفصیلی احکام پابندیاں نہیں بلکہ اس نور کی حفاظت ہیں۔ جیسا کہ آیت 24:40 بیان کرتی ہے: 'جسے اللہ نور نہ دے اس کے لیے کوئی نور نہیں' - یہ ظاہر کرتا ہے کہ اخلاقی وضاحت کے لیے الٰہی ہدایت ناگزیر ہے۔ عمر بن خطاب رضی اللہ عنہ نے فرمایا: 'سورہ النور سیکھو اور اپنی عورتوں کو سکھاؤ' - خاندانی اور سماجی زندگی کے لیے اس کی جامع رہنمائی کو تسلیم کرتے ہوئے۔"
    }
  },

  historicalContext: {
    note: {
      en: "This Madani surah was revealed after the slander incident (Ifk) against Aisha (RA) during the campaign against Banu Mustaliq (5-6 AH). The Prophet's wife was falsely accused by hypocrites and some Muslims, causing immense distress for a month until these verses vindicated her. This crisis became the occasion for comprehensive legislation on: (1) punishment for adultery and false accusation, (2) the li'an procedure for spousal accusations, (3) household privacy, (4) modesty for both genders, and (5) social etiquette. The Light Verse (35) has been extensively discussed by scholars and Sufis as describing divine illumination in the believer's heart. The surah's placement after Al-Mu'minun (about believers' characteristics) and before Al-Furqan (about the criterion) emphasizes moral clarity as essential to faith.",
      ur: "یہ مدنی سورت واقعہ افک (عائشہ رضی اللہ عنہا پر بہتان) کے بعد نازل ہوئی جو غزوہ بنو مصطلق (5-6 ہجری) کے دوران پیش آیا۔ نبی ﷺ کی اہلیہ پر منافقین اور بعض مسلمانوں نے جھوٹا الزام لگایا، جس سے ایک ماہ تک شدید پریشانی رہی یہاں تک کہ ان آیات نے ان کی براءت کا اعلان کیا۔ یہ بحران جامع قانون سازی کا موقع بنا: (1) زنا اور جھوٹے الزام کی سزا، (2) میاں بیوی کے الزامات کے لیے لعان کا طریقہ، (3) گھریلو پردہ، (4) مرد و عورت دونوں کے لیے حیا، اور (5) سماجی آداب۔ آیتِ نور (35) پر علماء اور صوفیاء نے بڑے پیمانے پر بحث کی ہے جو مومن کے دل میں الٰہی روشنی بیان کرتی ہے۔ سورت کی ترتیب المومنون (مومنوں کی خصوصیات) کے بعد اور الفرقان (کسوٹی) سے پہلے اخلاقی وضاحت کو ایمان کے لیے لازمی قرار دیتی ہے۔"
    }
  },

  linguisticFeatures: {
    features: [
      { feature: "النُّور", example: { en: "Light", ur: "نور" }, effect: { en: "Central theme - divine guidance and moral clarity", ur: "مرکزی موضوع - الٰہی ہدایت اور اخلاقی وضاحت" } },
      { feature: "الإفك", example: { en: "The Lie/Slander", ur: "بہتان/تہمت" }, effect: { en: "Emphasizes severity - not just a lie, but a deliberate fabrication", ur: "سنگینی پر زور - صرف جھوٹ نہیں بلکہ جان بوجھ کر گھڑا ہوا الزام" } },
      { feature: "مِشْكَاة", example: { en: "Niche", ur: "طاق" }, effect: { en: "Unique word - lamp niche that focuses light", ur: "منفرد لفظ - چراغ کا طاق جو روشنی کو مرکوز کرتا ہے" } },
      { feature: "كَوْكَب دُرِّيّ", example: { en: "Brilliant star", ur: "چمکتا ہوا ستارہ" }, effect: { en: "Intensified radiance - from durr (pearl)", ur: "شدید چمک - دُرّ (موتی) سے ماخوذ" } },
      { feature: "سَرَاب بِقِيعَة", example: { en: "Mirage in desert", ur: "چٹیل میدان میں سراب" }, effect: { en: "Perfect metaphor - appears real but is nothing", ur: "بہترین استعارہ - حقیقی لگتا ہے لیکن کچھ بھی نہیں" } },
      { feature: "بَحْر لُّجِّيّ", example: { en: "Deep sea", ur: "گہرا سمندر" }, effect: { en: "Layered darkness - waves upon waves", ur: "تاریکی کی تہیں - لہروں پر لہریں" } },
      { feature: "يَسْتَأْنِسُوا", example: { en: "Ascertain welcome", ur: "اجازت حاصل کرو" }, effect: { en: "More than permission - ensure comfort", ur: "صرف اجازت نہیں بلکہ میزبان کی سہولت کا خیال" } },
      { feature: "خُمُرهنّ", example: { en: "Their veils", ur: "ان کے دوپٹے" }, effect: { en: "Plural of khimar - head covering", ur: "خمار کی جمع - سر کا پردہ" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "24:35", topic: { en: "Light parable", ur: "نور کی تمثیل" }, note: { en: "Glass intensifying light, olive oil's purity - precision in metaphor", ur: "شیشے کا روشنی بڑھانا، زیتون کے تیل کی خالصیت - استعارے میں درستگی" } },
      { verse: "24:40", topic: { en: "Deep sea darkness", ur: "گہرے سمندر کی تاریکی" }, note: { en: "Describes layers of darkness in ocean - light penetration decreases with depth", ur: "سمندر میں تاریکی کی تہیں بیان کرتا ہے - گہرائی کے ساتھ روشنی کم ہوتی جاتی ہے" } },
      { verse: "24:43", topic: { en: "Cloud formation", ur: "بادلوں کی تشکیل" }, note: { en: "Describes cloud buildup, merging, and rain - meteorological accuracy", ur: "بادلوں کا بننا، ملنا اور بارش - موسمیاتی درستگی" } },
      { verse: "24:44", topic: { en: "Day-night alternation", ur: "رات دن کا تبادلہ" }, note: { en: "Earth's rotation causing alternation", ur: "زمین کی گردش سے تبادلہ ہوتا ہے" } },
      { verse: "24:45", topic: { en: "Water origin of life", ur: "پانی سے زندگی کی ابتدا" }, note: { en: "All creatures from water - biological consensus", ur: "تمام جاندار پانی سے - حیاتیاتی اتفاقِ رائے" } }
    ]
  },

  namesOfSurah: {
    names: [
      { name: "An-Nur", meaning: { en: "The Light", ur: "نور" }, reason: { en: "Contains the famous Light Verse (24:35)", ur: "مشہور آیتِ نور (24:35) اس میں ہے" } },
      { name: "Surah of Modesty", meaning: { en: "Chapter of Chastity", ur: "حیا کی سورت" }, reason: { en: "Extensive modesty and privacy laws", ur: "حیا اور پردے کے جامع احکام" } }
    ]
  },

  virtue: {
    hadith: {
      en: "Umar ibn al-Khattab (RA) said: 'Learn Surah Al-Baqarah and Surah An-Nur, and teach them to your women.' This indicates the special importance of An-Nur for family and social guidance.",
      ur: "عمر بن خطاب رضی اللہ عنہ نے فرمایا: 'سورہ البقرہ اور سورہ النور سیکھو اور اپنی عورتوں کو سکھاؤ۔' یہ خاندانی اور سماجی رہنمائی کے لیے سورہ النور کی خاص اہمیت کو ظاہر کرتا ہے۔"
    }
  }
};

export default ONTOLOGY;
