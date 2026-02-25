/**
 * Surah Al-Isra (17) - Ontology of Quranic Concepts
 * The Night Journey / Bani Israel
 * Theme: Night Journey (Isra), Divine Commandments, Children of Israel, Quran's Excellence
 * 111 Ayahs - Makki Surah (except verses 26, 32, 33, 57, and 73-80 which are Madani)
 */

export const ONTOLOGY = {
  surahId: 17,
  surahName: "Al-Isra",
  surahNameArabic: "الإسراء",
  alternateName: "Bani Israel",
  alternateNameArabic: "بني إسرائيل",
  revelationType: "Makki",
  totalAyahs: 111,

  categories: {
    nightJourney: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Night Journey (Al-Isra)",
      nameArabic: "الإسراء",
      nameUrdu: "معراج کا سفر",
      concepts: [
        { term: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ", meaning: { en: "Exalted is He who took His Servant by night", ur: "پاک ہے وہ جو اپنے بندے کو رات میں لے گیا" }, explanation: { en: "The miraculous night journey from Makkah to Jerusalem", ur: "مکہ سے بیت المقدس تک معجزانہ رات کا سفر" }, verseRef: "17:1" },
        { term: "مِنَ الْمَسْجِدِ الْحَرَامِ", meaning: { en: "From al-Masjid al-Haram", ur: "مسجد حرام سے" }, explanation: { en: "Starting point: the Sacred Mosque in Makkah", ur: "نقطہ آغاز: مکہ میں مسجدِ حرام" }, verseRef: "17:1" },
        { term: "إِلَى الْمَسْجِدِ الْأَقْصَى", meaning: { en: "To al-Masjid al-Aqsa", ur: "مسجد اقصیٰ تک" }, explanation: { en: "Destination: the Farthest Mosque in Jerusalem", ur: "منزل: بیت المقدس میں مسجدِ اقصیٰ" }, verseRef: "17:1" },
        { term: "الَّذِي بَارَكْنَا حَوْلَهُ", meaning: { en: "Whose surroundings We have blessed", ur: "جس کے اردگرد ہم نے برکت دی" }, explanation: { en: "Holy Land blessed by Allah", ur: "سرزمینِ مقدس جسے اللہ نے برکت دی" }, verseRef: "17:1" },
        { term: "لِنُرِيَهُ مِنْ آيَاتِنَا", meaning: { en: "To show him of Our signs", ur: "تاکہ ہم اسے اپنی نشانیاں دکھائیں" }, explanation: { en: "Purpose: to show divine signs to the Prophet", ur: "مقصد: نبی ﷺ کو الٰہی نشانیاں دکھانا" }, verseRef: "17:1" }
      ]
    },

    baniIsrael: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Children of Israel",
      nameArabic: "بني إسرائيل",
      nameUrdu: "بنی اسرائیل",
      concepts: [
        { term: "وَآتَيْنَا مُوسَى الْكِتَابَ", meaning: { en: "And We gave Moses the Scripture", ur: "اور ہم نے موسیٰ کو کتاب دی" }, explanation: { en: "Torah given to Moses as guidance", ur: "تورات موسیٰ کو بطور ہدایت دی گئی" }, verseRef: "17:2" },
        { term: "وَجَعَلْنَاهُ هُدًى لِّبَنِي إِسْرَائِيلَ", meaning: { en: "And made it guidance for Bani Israel", ur: "اور اسے بنی اسرائیل کے لیے ہدایت بنایا" }, explanation: { en: "Scripture as guidance for the Israelites", ur: "کتاب بنی اسرائیل کے لیے رہنمائی" }, verseRef: "17:2" },
        { term: "لَتُفْسِدُنَّ فِي الْأَرْضِ مَرَّتَيْنِ", meaning: { en: "You will surely cause corruption twice", ur: "تم ضرور زمین میں دو بار فساد کرو گے" }, explanation: { en: "Prophecy of two corruptions", ur: "دو فسادوں کی پیشگوئی" }, verseRef: "17:4" },
        { term: "فَإِذَا جَاءَ وَعْدُ أُولَاهُمَا", meaning: { en: "When the first promise came", ur: "جب پہلے وعدے کا وقت آیا" }, explanation: { en: "First punishment for transgression", ur: "سرکشی پر پہلی سزا" }, verseRef: "17:5" },
        { term: "ثُمَّ رَدَدْنَا لَكُمُ الْكَرَّةَ عَلَيْهِمْ", meaning: { en: "Then We gave you return over them", ur: "پھر ہم نے تمہیں ان پر دوبارہ غلبہ دیا" }, explanation: { en: "Restoration after repentance", ur: "توبہ کے بعد بحالی" }, verseRef: "17:6" },
        { term: "فَإِذَا جَاءَ وَعْدُ الْآخِرَةِ", meaning: { en: "When the final promise comes", ur: "جب آخری وعدے کا وقت آئے گا" }, explanation: { en: "Second punishment prophesied", ur: "دوسری سزا کی پیشگوئی" }, verseRef: "17:7" }
      ]
    },

    divineCommandments: {
      color: '#EF4444',
      icon: 'Users',
      name: "Divine Commandments",
      nameArabic: "الوصايا الإلهية",
      nameUrdu: "الٰہی احکامات",
      concepts: [
        { term: "أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ", meaning: { en: "Worship none but Him", ur: "اس کے سوا کسی کی عبادت نہ کرو" }, explanation: { en: "First commandment: Tawheed", ur: "پہلا حکم: توحید" }, verseRef: "17:23" },
        { term: "وَبِالْوَالِدَيْنِ إِحْسَانًا", meaning: { en: "And to parents, good treatment", ur: "اور والدین کے ساتھ حسنِ سلوک" }, explanation: { en: "Second commandment: honor parents", ur: "دوسرا حکم: والدین کی عزت" }, verseRef: "17:23" },
        { term: "فَلَا تَقُل لَّهُمَا أُفٍّ", meaning: { en: "Say not to them 'uff'", ur: "ان سے اُف تک نہ کہو" }, explanation: { en: "Even slight disrespect forbidden", ur: "معمولی بے ادبی بھی ممنوع" }, verseRef: "17:23" },
        { term: "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ", meaning: { en: "Lower to them the wing of humility", ur: "ان کے لیے عاجزی کا بازو جھکاؤ" }, explanation: { en: "Be humble with parents", ur: "والدین کے ساتھ عاجزی کرو" }, verseRef: "17:24" },
        { term: "وَآتِ ذَا الْقُرْبَىٰ حَقَّهُ", meaning: { en: "Give relatives their right", ur: "رشتہ داروں کو ان کا حق دو" }, explanation: { en: "Rights of kinship", ur: "رشتہ داری کے حقوق" }, verseRef: "17:26" },
        { term: "وَالْمِسْكِينَ وَابْنَ السَّبِيلِ", meaning: { en: "And the needy and traveler", ur: "اور مسکین اور مسافر کو" }, explanation: { en: "Care for the poor", ur: "غریبوں کی دیکھ بھال" }, verseRef: "17:26" },
        { term: "وَلَا تُبَذِّرْ تَبْذِيرًا", meaning: { en: "And do not spend wastefully", ur: "اور فضول خرچی نہ کرو" }, explanation: { en: "Prohibition of extravagance", ur: "فضول خرچی کی ممانعت" }, verseRef: "17:26" },
        { term: "إِنَّ الْمُبَذِّرِينَ كَانُوا إِخْوَانَ الشَّيَاطِينِ", meaning: { en: "Spendthrifts are brothers of devils", ur: "فضول خرچ لوگ شیطان کے بھائی ہیں" }, explanation: { en: "Severity of waste", ur: "فضول خرچی کی سنگینی" }, verseRef: "17:27" },
        { term: "وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً", meaning: { en: "Do not make your hand chained to your neck", ur: "اپنا ہاتھ گردن سے بندھا ہوا نہ رکھو" }, explanation: { en: "Neither miserly", ur: "نہ بخل کرو" }, verseRef: "17:29" },
        { term: "وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ", meaning: { en: "Nor extend it completely", ur: "اور نہ بالکل کھول دو" }, explanation: { en: "Nor overly generous", ur: "اور نہ حد سے زیادہ سخی ہو" }, verseRef: "17:29" },
        { term: "وَلَا تَقْتُلُوا أَوْلَادَكُمْ خَشْيَةَ إِمْلَاقٍ", meaning: { en: "Do not kill your children fearing poverty", ur: "غربت کے ڈر سے اپنی اولاد کو قتل نہ کرو" }, explanation: { en: "Prohibition of infanticide", ur: "بچوں کے قتل کی ممانعت" }, verseRef: "17:31" },
        { term: "وَلَا تَقْرَبُوا الزِّنَا", meaning: { en: "Do not approach unlawful sexual intercourse", ur: "زنا کے قریب بھی نہ جاؤ" }, explanation: { en: "Prohibition of zina", ur: "زنا کی ممانعت" }, verseRef: "17:32" },
        { term: "وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ", meaning: { en: "Do not kill the soul Allah has forbidden", ur: "اللہ نے جس جان کو حرام کیا اسے قتل نہ کرو" }, explanation: { en: "Sanctity of life", ur: "جان کا تقدس" }, verseRef: "17:33" },
        { term: "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ", meaning: { en: "Do not approach orphan's property", ur: "یتیم کے مال کے قریب نہ جاؤ" }, explanation: { en: "Protect orphan's wealth", ur: "یتیم کے مال کی حفاظت" }, verseRef: "17:34" },
        { term: "وَأَوْفُوا بِالْعَهْدِ", meaning: { en: "And fulfill the covenant", ur: "اور عہد پورا کرو" }, explanation: { en: "Keep promises", ur: "وعدے نبھاؤ" }, verseRef: "17:34" },
        { term: "وَأَوْفُوا الْكَيْلَ", meaning: { en: "And give full measure", ur: "اور پورا ناپ تول کرو" }, explanation: { en: "Fair business dealings", ur: "منصفانہ تجارت" }, verseRef: "17:35" },
        { term: "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ", meaning: { en: "Do not pursue what you have no knowledge of", ur: "جس چیز کا تمہیں علم نہ ہو اس کے پیچھے نہ پڑو" }, explanation: { en: "Avoid speculation", ur: "قیاس آرائی سے بچو" }, verseRef: "17:36" },
        { term: "وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا", meaning: { en: "Do not walk on earth exultantly", ur: "زمین پر اکڑ کر نہ چلو" }, explanation: { en: "Against arrogance", ur: "تکبر کے خلاف" }, verseRef: "17:37" }
      ]
    },

    quranExcellence: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Excellence of Quran",
      nameArabic: "فضل القرآن",
      nameUrdu: "قرآن کی فضیلت",
      concepts: [
        { term: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ", meaning: { en: "This Quran guides to that which is most suitable", ur: "یہ قرآن سب سے سیدھے راستے کی رہنمائی کرتا ہے" }, explanation: { en: "Quran as perfect guidance", ur: "قرآن بطور کامل رہنمائی" }, verseRef: "17:9" },
        { term: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ", meaning: { en: "We send down of the Quran that which is healing and mercy", ur: "ہم قرآن میں سے وہ نازل کرتے ہیں جو شفا اور رحمت ہے" }, explanation: { en: "Quran as spiritual healing", ur: "قرآن بطور روحانی شفا" }, verseRef: "17:82" },
        { term: "قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ", meaning: { en: "Say: If mankind and jinn gathered", ur: "کہو: اگر انسان اور جن جمع ہو جائیں" }, explanation: { en: "Challenge of inimitability", ur: "اعجاز کا چیلنج" }, verseRef: "17:88" },
        { term: "لَا يَأْتُونَ بِمِثْلِهِ", meaning: { en: "They could not produce the like of it", ur: "وہ اس جیسا نہیں لا سکتے" }, explanation: { en: "Quran's linguistic miracle", ur: "قرآن کا لسانی معجزہ" }, verseRef: "17:88" },
        { term: "وَلَوْ كَانَ بَعْضُهُمْ لِبَعْضٍ ظَهِيرًا", meaning: { en: "Even if they supported each other", ur: "چاہے وہ ایک دوسرے کے مددگار بھی ہوں" }, explanation: { en: "Even with cooperation, impossible", ur: "تعاون کے باوجود بھی ناممکن" }, verseRef: "17:88" },
        { term: "وَلَقَدْ صَرَّفْنَا لِلنَّاسِ فِي هَٰذَا الْقُرْآنِ", meaning: { en: "We have certainly diversified for people in this Quran", ur: "ہم نے اس قرآن میں لوگوں کے لیے طرح طرح سے بیان کیا" }, explanation: { en: "Various examples in Quran", ur: "قرآن میں مختلف مثالیں" }, verseRef: "17:89" },
        { term: "وَبِالْحَقِّ أَنزَلْنَاهُ وَبِالْحَقِّ نَزَلَ", meaning: { en: "With truth We sent it down, and with truth it descended", ur: "ہم نے اسے حق کے ساتھ نازل کیا اور حق کے ساتھ اترا" }, explanation: { en: "Quran revealed in truth", ur: "قرآن حق کے ساتھ نازل ہوا" }, verseRef: "17:105" }
      ]
    },

    tawheedAndShirk: {
      color: '#EF4444',
      icon: 'Users',
      name: "Monotheism vs Polytheism",
      nameArabic: "التوحيد والشرك",
      nameUrdu: "توحید اور شرک",
      concepts: [
        { term: "لَا تَجْعَلْ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: { en: "Do not make another deity with Allah", ur: "اللہ کے ساتھ کوئی اور معبود نہ بناؤ" }, explanation: { en: "Warning against shirk", ur: "شرک سے تنبیہ" }, verseRef: "17:22" },
        { term: "فَتَقْعُدَ مَذْمُومًا مَّخْذُولًا", meaning: { en: "Lest you sit blamed and forsaken", ur: "ورنہ ملامت زدہ اور بے یارومددگار بیٹھو گے" }, explanation: { en: "Consequence of shirk", ur: "شرک کا انجام" }, verseRef: "17:22" },
        { term: "قُلِ ادْعُوا الَّذِينَ زَعَمْتُم", meaning: { en: "Say: Invoke those you claimed", ur: "کہو: جنہیں تم نے معبود سمجھا انہیں پکارو" }, explanation: { en: "False gods cannot help", ur: "جھوٹے معبود مدد نہیں کر سکتے" }, verseRef: "17:56" },
        { term: "لَا يَمْلِكُونَ كَشْفَ الضُّرِّ عَنكُمْ", meaning: { en: "They possess not removal of adversity from you", ur: "وہ تم سے تکلیف دور کرنے کی طاقت نہیں رکھتے" }, explanation: { en: "Idols are powerless", ur: "بت بے بس ہیں" }, verseRef: "17:56" },
        { term: "أُولَٰئِكَ الَّذِينَ يَدْعُونَ يَبْتَغُونَ إِلَىٰ رَبِّهِمُ الْوَسِيلَةَ", meaning: { en: "Those whom they invoke seek means to their Lord", ur: "جنہیں وہ پکارتے ہیں وہ خود اپنے رب کا قرب تلاش کرتے ہیں" }, explanation: { en: "Even the invoked seek Allah", ur: "پکارے جانے والے خود اللہ کو تلاش کرتے ہیں" }, verseRef: "17:57" },
        { term: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ", meaning: { en: "And to Allah belong the most beautiful names", ur: "اور اللہ کے لیے سب سے خوبصورت نام ہیں" }, explanation: { en: "Allah's beautiful names", ur: "اللہ کے اسمائے حسنیٰ" }, verseRef: "17:110" }
      ]
    },

    humanNature: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      nameUrdu: "انسانی فطرت",
      concepts: [
        { term: "وَكَانَ الْإِنسَانُ عَجُولًا", meaning: { en: "And man is ever hasty", ur: "اور انسان بڑا جلد باز ہے" }, explanation: { en: "Human impatience", ur: "انسانی جلد بازی" }, verseRef: "17:11" },
        { term: "يَدْعُ الْإِنسَانُ بِالشَّرِّ دُعَاءَهُ بِالْخَيْرِ", meaning: { en: "Man supplicates for evil as he supplicates for good", ur: "انسان بُرائی کے لیے ایسے دعا مانگتا ہے جیسے بھلائی کے لیے" }, explanation: { en: "Hasty in desires", ur: "خواہشات میں جلد بازی" }, verseRef: "17:11" },
        { term: "وَإِذَا أَنْعَمْنَا عَلَى الْإِنسَانِ أَعْرَضَ", meaning: { en: "When We bestow favor on man, he turns away", ur: "جب ہم انسان پر نعمت دیتے ہیں تو وہ منہ موڑ لیتا ہے" }, explanation: { en: "Ingratitude in ease", ur: "آسانی میں ناشکری" }, verseRef: "17:83" },
        { term: "وَإِذَا مَسَّهُ الشَّرُّ كَانَ يَئُوسًا", meaning: { en: "When evil touches him, he is despairing", ur: "اور جب اسے تکلیف پہنچے تو مایوس ہو جاتا ہے" }, explanation: { en: "Despair in hardship", ur: "مشکل میں مایوسی" }, verseRef: "17:83" },
        { term: "وَخُلِقَ الْإِنسَانُ ضَعِيفًا", meaning: { en: "And mankind was created weak", ur: "اور انسان کمزور پیدا کیا گیا" }, explanation: { en: "Human weakness", ur: "انسانی کمزوری" }, verseRef: "17:67" },
        { term: "إِنَّ الْإِنسَانَ كَانَ كَفُورًا", meaning: { en: "Indeed mankind is ungrateful", ur: "بے شک انسان بڑا ناشکرا ہے" }, explanation: { en: "Human ingratitude", ur: "انسانی ناشکری" }, verseRef: "17:67" }
      ]
    },

    soulAndSpirit: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Soul and Spirit",
      nameArabic: "الروح والنفس",
      nameUrdu: "روح اور نفس",
      concepts: [
        { term: "وَيَسْأَلُونَكَ عَنِ الرُّوحِ", meaning: { en: "And they ask you about the spirit", ur: "اور وہ آپ سے روح کے بارے میں پوچھتے ہیں" }, explanation: { en: "Question about the soul", ur: "روح کے بارے میں سوال" }, verseRef: "17:85" },
        { term: "قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي", meaning: { en: "Say: The spirit is of the affair of my Lord", ur: "کہو: روح میرے رب کے حکم سے ہے" }, explanation: { en: "Spirit is from divine command", ur: "روح الٰہی حکم سے ہے" }, verseRef: "17:85" },
        { term: "وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا", meaning: { en: "And you have not been given of knowledge except a little", ur: "اور تمہیں علم بہت تھوڑا دیا گیا ہے" }, explanation: { en: "Limitation of human knowledge", ur: "انسانی علم کی محدودیت" }, verseRef: "17:85" },
        { term: "كُلُّ نَفْسٍ بِمَا كَسَبَتْ رَهِينَةٌ", meaning: { en: "Every soul is hostage to what it has earned", ur: "ہر جان اپنے اعمال کی گروی ہے" }, explanation: { en: "Soul's accountability", ur: "روح کی جوابدہی" }, verseRef: "17:13-14" }
      ]
    },

    prophethood: {
      color: '#EF4444',
      icon: 'Users',
      name: "Prophethood",
      nameArabic: "النبوة",
      nameUrdu: "نبوت",
      concepts: [
        { term: "وَمَا أَرْسَلْنَاكَ إِلَّا مُبَشِّرًا وَنَذِيرًا", meaning: { en: "We sent you only as a bringer of good tidings and a warner", ur: "ہم نے آپ کو صرف خوشخبری دینے والا اور ڈرانے والا بنا کر بھیجا" }, explanation: { en: "Prophet's mission", ur: "نبی ﷺ کا مشن" }, verseRef: "17:105" },
        { term: "وَمَا مَنَعَ النَّاسَ أَن يُؤْمِنُوا", meaning: { en: "And what prevented people from believing", ur: "اور لوگوں کو ایمان لانے سے کس چیز نے روکا" }, explanation: { en: "Obstacle to belief", ur: "ایمان کی رکاوٹ" }, verseRef: "17:94" },
        { term: "أَبَعَثَ اللَّهُ بَشَرًا رَّسُولًا", meaning: { en: "Has Allah sent a human messenger?", ur: "کیا اللہ نے انسان کو رسول بنا کر بھیجا؟" }, explanation: { en: "Doubt about human messenger", ur: "انسان رسول پر شک" }, verseRef: "17:94" },
        { term: "قُل لَّوْ كَانَ فِي الْأَرْضِ مَلَائِكَةٌ", meaning: { en: "Say: If there were angels on earth", ur: "کہو: اگر زمین پر فرشتے ہوتے" }, explanation: { en: "Why human messengers", ur: "انسان رسول کیوں" }, verseRef: "17:95" },
        { term: "وَلَقَدْ آتَيْنَا مُوسَىٰ تِسْعَ آيَاتٍ", meaning: { en: "We gave Moses nine signs", ur: "ہم نے موسیٰ کو نو نشانیاں دیں" }, explanation: { en: "Signs given to Moses", ur: "موسیٰ کو دی گئی نشانیاں" }, verseRef: "17:101" }
      ]
    },

    prayerAndRemembrance: {
      color: '#EF4444',
      icon: 'Users',
      name: "Prayer and Remembrance",
      nameArabic: "الصلاة والذكر",
      nameUrdu: "نماز اور ذکر",
      concepts: [
        { term: "أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ", meaning: { en: "Establish prayer at decline of sun", ur: "سورج ڈھلنے سے نماز قائم کرو" }, explanation: { en: "Prayer times ordained", ur: "نماز کے اوقات مقرر" }, verseRef: "17:78" },
        { term: "إِلَىٰ غَسَقِ اللَّيْلِ", meaning: { en: "Until the darkness of night", ur: "رات کے اندھیرے تک" }, explanation: { en: "Prayer until night", ur: "رات تک نماز" }, verseRef: "17:78" },
        { term: "وَقُرْآنَ الْفَجْرِ", meaning: { en: "And the Quran of dawn", ur: "اور فجر کا قرآن" }, explanation: { en: "Fajr prayer's importance", ur: "نمازِ فجر کی اہمیت" }, verseRef: "17:78" },
        { term: "إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا", meaning: { en: "Indeed the Quran of dawn is witnessed", ur: "بے شک فجر کا قرآن حاضری والا ہے" }, explanation: { en: "Angels witness Fajr", ur: "فرشتے فجر میں حاضر ہوتے ہیں" }, verseRef: "17:78" },
        { term: "وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً", meaning: { en: "And from night pray with it as additional", ur: "اور رات کے کچھ حصے میں تہجد پڑھو نفل کے طور پر" }, explanation: { en: "Tahajjud prayer", ur: "نمازِ تہجد" }, verseRef: "17:79" },
        { term: "عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا", meaning: { en: "Perhaps your Lord will raise you to a praised station", ur: "عنقریب آپ کا رب آپ کو مقامِ محمود پر فائز کرے گا" }, explanation: { en: "Maqam Mahmud - station of intercession", ur: "مقامِ محمود - شفاعت کا مقام" }, verseRef: "17:79" }
      ]
    },

    resurrection: {
      color: '#EF4444',
      icon: 'Users',
      name: "Resurrection",
      nameArabic: "البعث والنشور",
      nameUrdu: "قیامت اور حشر",
      concepts: [
        { term: "قَالُوا أَإِذَا كُنَّا عِظَامًا وَرُفَاتًا", meaning: { en: "They say: When we are bones and crumbled particles", ur: "وہ کہتے ہیں: جب ہم ہڈیاں اور ریزہ ریزہ ہو جائیں گے" }, explanation: { en: "Disbelievers' doubt", ur: "کافروں کا شک" }, verseRef: "17:49" },
        { term: "أَإِنَّا لَمَبْعُوثُونَ خَلْقًا جَدِيدًا", meaning: { en: "Will we be resurrected as new creation?", ur: "کیا ہم نئی تخلیق بن کر اٹھائے جائیں گے؟" }, explanation: { en: "Question about resurrection", ur: "قیامت کے بارے میں سوال" }, verseRef: "17:49" },
        { term: "قُلْ كُونُوا حِجَارَةً أَوْ حَدِيدًا", meaning: { en: "Say: Be stones or iron", ur: "کہو: پتھر ہو جاؤ یا لوہا" }, explanation: { en: "Allah can resurrect anything", ur: "اللہ کسی بھی چیز کو دوبارہ زندہ کر سکتا ہے" }, verseRef: "17:50" },
        { term: "أَوْ خَلْقًا مِّمَّا يَكْبُرُ فِي صُدُورِكُمْ", meaning: { en: "Or any creation greater in your minds", ur: "یا کوئی اور مخلوق جو تمہارے ذہن میں بڑی ہو" }, explanation: { en: "Whatever you imagine", ur: "جو بھی تم تصور کرو" }, verseRef: "17:51" },
        { term: "فَسَيُنْغِضُونَ إِلَيْكَ رُءُوسَهُمْ", meaning: { en: "They will shake their heads at you", ur: "وہ تمہاری طرف سر ہلائیں گے" }, explanation: { en: "Mockers questioning when", ur: "مذاق اڑانے والے پوچھتے ہیں کب" }, verseRef: "17:51" },
        { term: "يَوْمَ يَدْعُوكُمْ فَتَسْتَجِيبُونَ بِحَمْدِهِ", meaning: { en: "Day He calls you and you respond with His praise", ur: "جس دن وہ تمہیں بلائے گا تو تم اس کی حمد کرتے ہوئے جواب دو گے" }, explanation: { en: "All will answer His call", ur: "سب اس کی پکار کا جواب دیں گے" }, verseRef: "17:52" },
        { term: "وَتَظُنُّونَ إِن لَّبِثْتُمْ إِلَّا قَلِيلًا", meaning: { en: "And think you remained but a little", ur: "اور سمجھو گے کہ بہت تھوڑا ٹھہرے" }, explanation: { en: "Life seems short then", ur: "زندگی پھر مختصر لگے گی" }, verseRef: "17:52" }
      ]
    },

    shaytanAndEvil: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Satan and Evil",
      nameArabic: "الشيطان والشر",
      nameUrdu: "شیطان اور شر",
      concepts: [
        { term: "إِنَّ الشَّيْطَانَ كَانَ لِلْإِنسَانِ عَدُوًّا مُّبِينًا", meaning: { en: "Indeed Satan is to man a clear enemy", ur: "بے شک شیطان انسان کا کھلا دشمن ہے" }, explanation: { en: "Satan's enmity declared", ur: "شیطان کی دشمنی کا اعلان" }, verseRef: "17:53" },
        { term: "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ", meaning: { en: "When We said to angels: Prostrate to Adam", ur: "جب ہم نے فرشتوں سے کہا: آدم کو سجدہ کرو" }, explanation: { en: "Command to prostrate", ur: "سجدے کا حکم" }, verseRef: "17:61" },
        { term: "إِلَّا إِبْلِيسَ قَالَ أَأَسْجُدُ لِمَنْ خَلَقْتَ طِينًا", meaning: { en: "Except Iblis who said: Shall I prostrate to one created from clay?", ur: "سوائے ابلیس کے جس نے کہا: کیا میں مٹی سے بنے کو سجدہ کروں؟" }, explanation: { en: "Iblis's arrogance", ur: "ابلیس کا تکبر" }, verseRef: "17:61" },
        { term: "لَأَحْتَنِكَنَّ ذُرِّيَّتَهُ إِلَّا قَلِيلًا", meaning: { en: "I will surely mislead his descendants except few", ur: "میں اس کی اولاد کو ضرور گمراہ کروں گا سوائے چند کے" }, explanation: { en: "Satan's threat", ur: "شیطان کی دھمکی" }, verseRef: "17:62" },
        { term: "وَاسْتَفْزِزْ مَنِ اسْتَطَعْتَ مِنْهُم بِصَوْتِكَ", meaning: { en: "And incite whoever you can with your voice", ur: "اور جسے بھی اپنی آواز سے بھڑکا سکتا ہے بھڑکا" }, explanation: { en: "Satan's methods", ur: "شیطان کے طریقے" }, verseRef: "17:64" },
        { term: "وَأَجْلِبْ عَلَيْهِم بِخَيْلِكَ وَرَجِلِكَ", meaning: { en: "And assault them with your cavalry and infantry", ur: "اور اپنے سوار اور پیادے لے کر ان پر حملہ کر" }, explanation: { en: "Satan's forces", ur: "شیطان کی فوجیں" }, verseRef: "17:64" },
        { term: "وَشَارِكْهُمْ فِي الْأَمْوَالِ وَالْأَوْلَادِ", meaning: { en: "And share with them in wealth and children", ur: "اور ان کے مال اور اولاد میں شریک ہو جا" }, explanation: { en: "Satan's influence in life", ur: "زندگی میں شیطان کا اثر" }, verseRef: "17:64" },
        { term: "وَعِدْهُمْ ۚ وَمَا يَعِدُهُمُ الشَّيْطَانُ إِلَّا غُرُورًا", meaning: { en: "And promise them - but Satan promises only delusion", ur: "اور انہیں وعدے دے - شیطان کے وعدے صرف دھوکا ہیں" }, explanation: { en: "False promises", ur: "جھوٹے وعدے" }, verseRef: "17:64" },
        { term: "إِنَّ عِبَادِي لَيْسَ لَكَ عَلَيْهِمْ سُلْطَانٌ", meaning: { en: "Indeed My servants - you have no authority over them", ur: "بے شک میرے بندوں پر تیرا کوئی اختیار نہیں" }, explanation: { en: "Believers protected", ur: "مومنین محفوظ ہیں" }, verseRef: "17:65" }
      ]
    },

    divineWisdom: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Wisdom",
      nameArabic: "الحكمة الإلهية",
      nameUrdu: "الٰہی حکمت",
      concepts: [
        { term: "ذَٰلِكَ مِمَّا أَوْحَىٰ إِلَيْكَ رَبُّكَ مِنَ الْحِكْمَةِ", meaning: { en: "That is from what your Lord has revealed of wisdom", ur: "یہ ان حکمتوں میں سے ہے جو آپ کے رب نے وحی کی" }, explanation: { en: "Wisdom in commandments", ur: "احکامات میں حکمت" }, verseRef: "17:39" },
        { term: "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ", meaning: { en: "And We honored the children of Adam", ur: "اور ہم نے بنی آدم کو عزت بخشی" }, explanation: { en: "Human dignity", ur: "انسانی وقار" }, verseRef: "17:70" },
        { term: "وَحَمَلْنَاهُمْ فِي الْبَرِّ وَالْبَحْرِ", meaning: { en: "And carried them on land and sea", ur: "اور انہیں خشکی اور سمندر میں سواری دی" }, explanation: { en: "Divine provision for travel", ur: "سفر کے لیے الٰہی انتظام" }, verseRef: "17:70" },
        { term: "وَرَزَقْنَاهُم مِّنَ الطَّيِّبَاتِ", meaning: { en: "And provided them from good things", ur: "اور انہیں پاکیزہ چیزوں سے رزق دیا" }, explanation: { en: "Pure sustenance", ur: "پاکیزہ رزق" }, verseRef: "17:70" },
        { term: "وَفَضَّلْنَاهُمْ عَلَىٰ كَثِيرٍ مِّمَّنْ خَلَقْنَا تَفْضِيلًا", meaning: { en: "And preferred them over much of creation", ur: "اور انہیں بہت سی مخلوقات پر فضیلت دی" }, explanation: { en: "Human superiority over creation", ur: "مخلوقات پر انسان کی فضیلت" }, verseRef: "17:70" }
      ]
    },

    accountability: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Individual Accountability",
      nameArabic: "المسؤولية الفردية",
      nameUrdu: "انفرادی جوابدہی",
      concepts: [
        { term: "وَكُلَّ إِنسَانٍ أَلْزَمْنَاهُ طَائِرَهُ فِي عُنُقِهِ", meaning: { en: "Every person We bound their fate to their neck", ur: "ہر انسان کے اعمال ہم نے اس کی گردن میں لٹکا دیے" }, explanation: { en: "Deeds attached to each", ur: "اعمال ہر ایک سے جڑے ہیں" }, verseRef: "17:13" },
        { term: "وَنُخْرِجُ لَهُ يَوْمَ الْقِيَامَةِ كِتَابًا", meaning: { en: "And We will produce for him on Day of Resurrection a record", ur: "اور قیامت کے دن ہم اس کے لیے ایک کتاب نکالیں گے" }, explanation: { en: "Record of deeds", ur: "اعمال نامہ" }, verseRef: "17:13" },
        { term: "اقْرَأْ كِتَابَكَ كَفَىٰ بِنَفْسِكَ الْيَوْمَ عَلَيْكَ حَسِيبًا", meaning: { en: "Read your record - sufficient is yourself as accountant", ur: "اپنا نامہ اعمال پڑھ - آج تو خود اپنا حساب لینے والا کافی ہے" }, explanation: { en: "Self-accounting on Judgment Day", ur: "قیامت کے دن خود حسابی" }, verseRef: "17:14" },
        { term: "مَّنِ اهْتَدَىٰ فَإِنَّمَا يَهْتَدِي لِنَفْسِهِ", meaning: { en: "Whoever is guided is only guided for himself", ur: "جو ہدایت پائے وہ اپنے لیے ہدایت پاتا ہے" }, explanation: { en: "Benefits of guidance for self", ur: "ہدایت کا فائدہ خود کو" }, verseRef: "17:15" },
        { term: "وَمَن ضَلَّ فَإِنَّمَا يَضِلُّ عَلَيْهَا", meaning: { en: "And whoever strays only strays against himself", ur: "اور جو بھٹکے وہ اپنے ہی خلاف بھٹکتا ہے" }, explanation: { en: "Harm of misguidance to self", ur: "گمراہی کا نقصان خود کو" }, verseRef: "17:15" },
        { term: "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ", meaning: { en: "No bearer of burden will bear burden of another", ur: "کوئی بوجھ اٹھانے والا دوسرے کا بوجھ نہیں اٹھائے گا" }, explanation: { en: "Individual responsibility", ur: "انفرادی ذمہ داری" }, verseRef: "17:15" },
        { term: "وَمَا كُنَّا مُعَذِّبِينَ حَتَّىٰ نَبْعَثَ رَسُولًا", meaning: { en: "We would not punish until We send a messenger", ur: "ہم عذاب نہیں دیتے جب تک رسول نہ بھیج لیں" }, explanation: { en: "Justice requires warning first", ur: "انصاف کا تقاضا پہلے تنبیہ ہے" }, verseRef: "17:15" }
      ]
    },

    signsOfAllah: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Signs of Allah",
      nameArabic: "آيات الله",
      nameUrdu: "اللہ کی نشانیاں",
      concepts: [
        { term: "وَجَعَلْنَا اللَّيْلَ وَالنَّهَارَ آيَتَيْنِ", meaning: { en: "And We made night and day two signs", ur: "اور ہم نے رات اور دن کو دو نشانیاں بنایا" }, explanation: { en: "Day and night as signs", ur: "دن اور رات بطور نشانیاں" }, verseRef: "17:12" },
        { term: "فَمَحَوْنَا آيَةَ اللَّيْلِ", meaning: { en: "So We erased the sign of night", ur: "تو ہم نے رات کی نشانی کو مٹا دیا" }, explanation: { en: "Night made dark", ur: "رات کو اندھیرا کیا" }, verseRef: "17:12" },
        { term: "وَجَعَلْنَا آيَةَ النَّهَارِ مُبْصِرَةً", meaning: { en: "And made sign of day visible", ur: "اور دن کی نشانی کو روشن بنایا" }, explanation: { en: "Day made bright", ur: "دن کو روشن کیا" }, verseRef: "17:12" },
        { term: "لِتَبْتَغُوا فَضْلًا مِّن رَّبِّكُمْ", meaning: { en: "That you may seek bounty from your Lord", ur: "تاکہ تم اپنے رب کا فضل تلاش کرو" }, explanation: { en: "Day for livelihood", ur: "دن روزی کمانے کے لیے" }, verseRef: "17:12" },
        { term: "وَلِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ", meaning: { en: "And that you may know number of years and calculation", ur: "اور تاکہ تم سالوں کی گنتی اور حساب جان سکو" }, explanation: { en: "Calculation of time", ur: "وقت کا حساب" }, verseRef: "17:12" },
        { term: "رَّبُّكُمُ الَّذِي يُزْجِي لَكُمُ الْفُلْكَ فِي الْبَحْرِ", meaning: { en: "Your Lord who drives for you ships through the sea", ur: "تمہارا رب جو تمہارے لیے سمندر میں جہاز چلاتا ہے" }, explanation: { en: "Ships as divine blessing", ur: "جہاز بطور الٰہی نعمت" }, verseRef: "17:66" }
      ]
    },

    duaAndSupplication: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Supplication",
      nameArabic: "الدعاء",
      nameUrdu: "دعا",
      concepts: [
        { term: "وَقُل رَّبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ", meaning: { en: "Say: My Lord, cause me to enter a sound entrance", ur: "کہو: اے میرے رب! مجھے سچے داخلے سے داخل کر" }, explanation: { en: "Prayer for guidance", ur: "رہنمائی کی دعا" }, verseRef: "17:80" },
        { term: "وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ", meaning: { en: "And bring me out a sound exit", ur: "اور مجھے سچے نکلنے سے نکال" }, explanation: { en: "Prayer for protection", ur: "حفاظت کی دعا" }, verseRef: "17:80" },
        { term: "وَاجْعَل لِّي مِن لَّدُنكَ سُلْطَانًا نَّصِيرًا", meaning: { en: "And grant me from You a supporting authority", ur: "اور اپنی طرف سے مجھے مددگار قوت عطا فرما" }, explanation: { en: "Prayer for help", ur: "مدد کی دعا" }, verseRef: "17:80" },
        { term: "وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ", meaning: { en: "Say: Truth has come and falsehood has perished", ur: "کہو: حق آ گیا اور باطل مٹ گیا" }, explanation: { en: "Declaration of truth's victory", ur: "حق کی فتح کا اعلان" }, verseRef: "17:81" },
        { term: "إِنَّ الْبَاطِلَ كَانَ زَهُوقًا", meaning: { en: "Indeed falsehood is ever bound to perish", ur: "بے شک باطل مٹنے والا ہی ہے" }, explanation: { en: "Falsehood destined to fail", ur: "باطل ناکام ہونے کے لیے مقدر ہے" }, verseRef: "17:81" },
        { term: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", meaning: { en: "My Lord, have mercy on them as they raised me when small", ur: "اے میرے رب! ان پر رحم فرما جیسا انہوں نے مجھے بچپن میں پالا" }, explanation: { en: "Dua for parents", ur: "والدین کے لیے دعا" }, verseRef: "17:24" }
      ]
    }
  },

  relationships: [
    { from: "الإسراء", to: "المسجد الأقصى", type: "journey", description: { en: "Night Journey to Jerusalem", ur: "بیت المقدس تک رات کا سفر" } },
    { from: "موسى والكتاب", to: "بني إسرائيل", type: "guidance", description: { en: "Scripture given for guidance", ur: "کتاب ہدایت کے لیے دی گئی" } },
    { from: "التوحيد", to: "بر الوالدين", type: "sequence", description: { en: "Commandments begin with Tawheed then parents", ur: "احکامات توحید سے شروع ہو کر والدین تک" } },
    { from: "الشيطان", to: "الإنسان", type: "enmity", description: { en: "Satan declared enemy of mankind", ur: "شیطان انسان کا اعلان شدہ دشمن" } },
    { from: "القرآن", to: "الشفاء والرحمة", type: "function", description: { en: "Quran as healing and mercy", ur: "قرآن بطور شفا اور رحمت" } },
    { from: "الصلاة", to: "قرآن الفجر", type: "includes", description: { en: "Fajr prayer specifically mentioned", ur: "نمازِ فجر کا خاص ذکر" } },
    { from: "الحكمة", to: "الوصايا", type: "source", description: { en: "Commandments derived from wisdom", ur: "احکامات حکمت سے ماخوذ" } },
    { from: "التهجد", to: "المقام المحمود", type: "leads_to", description: { en: "Night prayer leads to praised station", ur: "رات کی نماز مقامِ محمود تک لے جاتی ہے" } },
    { from: "الروح", to: "أمر ربي", type: "origin", description: { en: "Spirit from divine command", ur: "روح الٰہی حکم سے" } },
    { from: "كرامة بني آدم", to: "التفضيل", type: "result", description: { en: "Human honor leads to preference", ur: "انسانی عزت فضیلت کی طرف لے جاتی ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Night Journey", verses: "17:1", description: { en: "Miraculous Isra to Jerusalem", ur: "بیت المقدس تک معجزانہ اسراء" } },
      { stage: 2, theme: "Bani Israel History", verses: "17:2-8", description: { en: "Moses, Scripture, and two corruptions", ur: "موسیٰ، کتاب اور دو فساد" } },
      { stage: 3, theme: "Quran's Guidance", verses: "17:9-12", description: { en: "Quran guides to best path", ur: "قرآن بہترین راستے کی رہنمائی" } },
      { stage: 4, theme: "Accountability", verses: "17:13-15", description: { en: "Individual responsibility and records", ur: "انفرادی ذمہ داری اور اعمال نامے" } },
      { stage: 5, theme: "Divine Destruction", verses: "17:16-21", description: { en: "Warning to transgressors", ur: "سرکشوں کو تنبیہ" } },
      { stage: 6, theme: "Divine Commandments", verses: "17:22-39", description: { en: "Comprehensive ethical code", ur: "جامع اخلاقی ضابطہ" } },
      { stage: 7, theme: "Tawheed Arguments", verses: "17:40-48", description: { en: "Refutation of polytheism", ur: "شرک کی تردید" } },
      { stage: 8, theme: "Resurrection Proofs", verses: "17:49-52", description: { en: "Evidence for raising the dead", ur: "مردوں کو اٹھانے کے دلائل" } },
      { stage: 9, theme: "Good Speech", verses: "17:53-55", description: { en: "Guidance on speaking", ur: "بات چیت کی رہنمائی" } },
      { stage: 10, theme: "False Gods", verses: "17:56-57", description: { en: "Powerlessness of idols", ur: "بتوں کی بے بسی" } },
      { stage: 11, theme: "Destruction of Nations", verses: "17:58-60", description: { en: "Past nations destroyed", ur: "پچھلی قومیں تباہ" } },
      { stage: 12, theme: "Iblis Story", verses: "17:61-65", description: { en: "Satan's arrogance and threat", ur: "شیطان کا تکبر اور دھمکی" } },
      { stage: 13, theme: "Divine Blessings", verses: "17:66-70", description: { en: "Sea travel and human honor", ur: "سمندری سفر اور انسانی عزت" } },
      { stage: 14, theme: "Day of Judgment", verses: "17:71-72", description: { en: "Every nation called by its record", ur: "ہر قوم اپنے نامے کے ساتھ بلائی جائے گی" } },
      { stage: 15, theme: "Prophet's Trial", verses: "17:73-77", description: { en: "Attempts to mislead Prophet", ur: "نبی ﷺ کو گمراہ کرنے کی کوششیں" } },
      { stage: 16, theme: "Prayer Times", verses: "17:78-79", description: { en: "Prescribed prayers and Tahajjud", ur: "فرض نمازیں اور تہجد" } },
      { stage: 17, theme: "Truth Arrives", verses: "17:80-81", description: { en: "Victory of truth over falsehood", ur: "باطل پر حق کی فتح" } },
      { stage: 18, theme: "Quran as Healing", verses: "17:82-84", description: { en: "Spiritual medicine", ur: "روحانی دوائی" } },
      { stage: 19, theme: "Spirit Question", verses: "17:85", description: { en: "Limited human knowledge", ur: "انسانی علم کی محدودیت" } },
      { stage: 20, theme: "Quran's Miracle", verses: "17:86-89", description: { en: "Inimitability challenge", ur: "اعجاز کا چیلنج" } },
      { stage: 21, theme: "Demands for Signs", verses: "17:90-93", description: { en: "Polytheists' demands", ur: "مشرکوں کے مطالبات" } },
      { stage: 22, theme: "Human Messengers", verses: "17:94-96", description: { en: "Why human prophets", ur: "انسان رسول کیوں" } },
      { stage: 23, theme: "Guidance and Misguidance", verses: "17:97", description: { en: "Allah guides whom He wills", ur: "اللہ جسے چاہے ہدایت دے" } },
      { stage: 24, theme: "Moses and Pharaoh", verses: "17:101-104", description: { en: "Nine signs to Pharaoh", ur: "فرعون کے لیے نو نشانیاں" } },
      { stage: 25, theme: "Quran's Truth", verses: "17:105-109", description: { en: "Revealed in truth, scholars weep", ur: "حق کے ساتھ نازل، علماء روتے ہیں" } },
      { stage: 26, theme: "Beautiful Names", verses: "17:110-111", description: { en: "Allah's names, final praise", ur: "اللہ کے نام، آخری حمد" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Honor parents absolutely", ur: "والدین کی مکمل عزت کریں" }, how: { en: "Never say 'uff', speak gently, lower wing of humility", ur: "کبھی اُف نہ کہیں، نرمی سے بات کریں، عاجزی کا بازو جھکائیں" }, verse: "17:23-24" },
      { principle: { en: "Balance in spending", ur: "خرچ میں اعتدال" }, how: { en: "Neither miserly nor extravagant - moderate approach", ur: "نہ بخل نہ فضول خرچی - معتدل طریقہ" }, verse: "17:29" },
      { principle: { en: "Protect life", ur: "جان کی حفاظت کریں" }, how: { en: "Do not kill children or anyone unjustly", ur: "بچوں یا کسی کو ناحق قتل نہ کریں" }, verse: "17:31,33" },
      { principle: { en: "Guard chastity", ur: "عفت کی حفاظت کریں" }, how: { en: "Do not even approach zina - avoid situations", ur: "زنا کے قریب بھی نہ جائیں - حالات سے بچیں" }, verse: "17:32" },
      { principle: { en: "Fulfill covenants", ur: "عہد پورے کریں" }, how: { en: "Keep all promises and commitments", ur: "تمام وعدے اور عہد نبھائیں" }, verse: "17:34" },
      { principle: { en: "Fair dealings", ur: "منصفانہ لین دین" }, how: { en: "Give full measure and weight", ur: "پورا ناپ تول کریں" }, verse: "17:35" },
      { principle: { en: "Verify before acting", ur: "عمل سے پہلے تصدیق کریں" }, how: { en: "Do not follow what you have no knowledge of", ur: "جس کا علم نہ ہو اس کے پیچھے نہ پڑیں" }, verse: "17:36" },
      { principle: { en: "Humble walk", ur: "عاجزانہ چال" }, how: { en: "Do not walk arrogantly on earth", ur: "زمین پر تکبر سے نہ چلیں" }, verse: "17:37" },
      { principle: { en: "Establish prayers", ur: "نمازیں قائم کریں" }, how: { en: "Pray from Dhuhr to Isha, especially Fajr", ur: "ظہر سے عشاء تک نماز پڑھیں، خاص طور پر فجر" }, verse: "17:78" },
      { principle: { en: "Pray Tahajjud", ur: "تہجد پڑھیں" }, how: { en: "Extra night prayer for elevated status", ur: "بلند مقام کے لیے اضافی رات کی نماز" }, verse: "17:79" },
      { principle: { en: "Make dua for parents", ur: "والدین کے لیے دعا کریں" }, how: { en: "Rabbi irhamhuma kama rabbayani saghira", ur: "ربِّ ارحمہما کما ربیانی صغیرا" }, verse: "17:24" },
      { principle: { en: "Speak beautifully", ur: "خوبصورتی سے بات کریں" }, how: { en: "Tell servants to speak best words", ur: "بندوں کو بہترین بات کہنے کی ہدایت" }, verse: "17:53" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Night Journey and Divine Constitution", ur: "معراج اور الٰہی دستور" },
    insight: { en: "Surah Al-Isra opens with the miraculous Night Journey (Isra) and connects it to the giving of Scripture to Moses, establishing a profound link between revelation and divine journeys. The surah then presents what scholars call the 'Islamic Constitution' - a comprehensive ethical code in verses 22-39 that parallels the Ten Commandments but with deeper elaboration. Beginning with Tawheed and ending with humility, these commandments cover worship, family, economics, life, and social conduct. The placement after the Night Journey narrative suggests these commandments were given or confirmed during this miraculous event. The surah also contains the famous verse about the Quran's inimitability (17:88), the question about the spirit (17:85), and the establishment of prayer times (17:78-79). The alternation between Makki and Madani verses reflects its comprehensive nature - combining faith foundations with practical legislation.", ur: "سورۃ الاسراء معجزانہ معراج سے شروع ہوتی ہے اور اسے موسیٰ کو کتاب دینے سے جوڑتی ہے، وحی اور الٰہی سفروں کے درمیان گہرا تعلق قائم کرتی ہے۔ پھر سورت وہ پیش کرتی ہے جسے علماء 'اسلامی دستور' کہتے ہیں - آیات 22-39 میں ایک جامع اخلاقی ضابطہ جو دس احکام سے ملتا جلتا ہے لیکن زیادہ تفصیلی ہے۔ توحید سے شروع ہو کر عاجزی پر ختم، یہ احکامات عبادت، خاندان، معیشت، جان اور معاشرتی رویے کا احاطہ کرتے ہیں۔ معراج کے واقعے کے بعد ان کی جگہ اشارہ کرتی ہے کہ یہ احکامات اس معجزانہ واقعے میں دیے یا تصدیق کیے گئے۔ سورت میں قرآن کے اعجاز (17:88)، روح کا سوال (17:85)، اور نماز کے اوقات (17:78-79) کی مشہور آیات بھی ہیں۔" }
  },

  historicalContext: {
    note: { en: "Surah Al-Isra was revealed late in the Makkan period, shortly before the Hijra. The Night Journey (Isra and Mi'raj) occurred about a year before migration to Madinah, during a period of intense persecution. The surah's alternate name 'Bani Israel' reflects its significant discussion of Jewish history and the Torah. The comprehensive commandments in this surah may have been revealed to prepare the Muslim community for establishing a society in Madinah. Some verses (26, 32, 33, 57, 73-80) were revealed in Madinah, indicating the surah was completed over time.", ur: "سورۃ الاسراء مکی دور کے آخر میں نازل ہوئی، ہجرت سے کچھ پہلے۔ معراج ہجرت سے تقریباً ایک سال پہلے ہوئی، شدید ظلم کے دور میں۔ سورت کا متبادل نام 'بنی اسرائیل' یہودی تاریخ اور تورات کی اہم بحث کی عکاسی کرتا ہے۔ اس سورت کے جامع احکامات مسلم معاشرے کو مدینہ میں معاشرے کی بنیاد رکھنے کے لیے تیار کرنے کے لیے نازل ہوئے ہو سکتے ہیں۔ بعض آیات (26، 32، 33، 57، 73-80) مدینہ میں نازل ہوئیں، جو ظاہر کرتا ہے کہ سورت وقت کے ساتھ مکمل ہوئی۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "سُبْحَانَ", example: { en: "Opening word", ur: "افتتاحی لفظ" }, effect: { en: "Glorification - only surah to open with this", ur: "تسبیح - صرف یہی سورت اس سے شروع ہوتی ہے" } },
      { feature: "أَسْرَىٰ", example: { en: "Form IV verb", ur: "باب اِفعال" }, effect: { en: "Causative - Allah caused the journey", ur: "سببی - اللہ نے سفر کروایا" } },
      { feature: "أُفٍّ", example: { en: "Expression of annoyance", ur: "ناراضگی کا اظہار" }, effect: { en: "Smallest sound of displeasure forbidden to parents", ur: "والدین کے سامنے ناخوشی کی معمولی ترین آواز بھی ممنوع" } },
      { feature: "طَائِرَهُ", example: { en: "Bird metaphor for fate", ur: "تقدیر کے لیے پرندے کا استعارہ" }, effect: { en: "Arab expression for destiny attached to neck", ur: "گردن سے بندھی تقدیر کا عربی محاورہ" } },
      { feature: "مَقَامًا مَّحْمُودًا", example: { en: "Station of praise", ur: "مقامِ محمود" }, effect: { en: "Passive participle - praised by all creation", ur: "اسم مفعول - تمام مخلوقات کی تعریف" } },
      { feature: "يَنقُضُّونَ", example: { en: "Emphatic form", ur: "تاکیدی صیغہ" }, effect: { en: "Quick, repeated shaking of heads", ur: "تیز، بار بار سر ہلانا" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "17:1", topic: "Night Journey", note: { en: "Fastest travel - instantaneous or near-light-speed transportation", ur: "تیز ترین سفر - فوری یا روشنی کی رفتار سے قریب نقل و حمل" } },
      { verse: "17:12", topic: "Day and Night", note: { en: "Cosmic signs for timekeeping and calculation", ur: "وقت کی پیمائش اور حساب کے لیے کائناتی نشانیاں" } },
      { verse: "17:44", topic: "Universal praise", note: { en: "Everything glorifies Allah - could relate to vibrations/energy", ur: "ہر چیز اللہ کی تسبیح کرتی ہے - ارتعاشات/توانائی سے تعلق ہو سکتا ہے" } },
      { verse: "17:66", topic: "Ships at sea", note: { en: "Buoyancy and navigation as divine blessings", ur: "تیرنا اور راہنمائی بطور الٰہی نعمتیں" } },
      { verse: "17:70", topic: "Land and sea travel", note: { en: "Human ability to traverse all terrains", ur: "ہر قسم کے خطے میں سفر کرنے کی انسانی صلاحیت" } },
      { verse: "17:85", topic: "The Spirit", note: { en: "Limits of human scientific knowledge acknowledged", ur: "انسانی سائنسی علم کی حدود کا اعتراف" } }
    ]
  },

  crossReferences: [
    { surah: 53, verses: "1-18", topic: "Mi'raj details", description: { en: "Surah An-Najm describes the ascension", ur: "سورۃ النجم معراج کی تفصیل بیان کرتی ہے" } },
    { surah: 7, verses: "103-156", topic: "Moses story", description: { en: "Extended narrative of Moses and Pharaoh", ur: "موسیٰ اور فرعون کا تفصیلی بیان" } },
    { surah: 2, verses: "83", topic: "Similar commandments", description: { en: "Covenant with Bani Israel", ur: "بنی اسرائیل سے عہد" } },
    { surah: 6, verses: "151-153", topic: "Parallel commandments", description: { en: "Similar ethical injunctions", ur: "ملتے جلتے اخلاقی احکامات" } },
    { surah: 31, verses: "13-19", topic: "Luqman's advice", description: { en: "Similar wisdom teachings", ur: "ملتی جلتی حکمت کی تعلیمات" } },
    { surah: 25, verses: "63-77", topic: "Servants of Rahman", description: { en: "Qualities of righteous servants", ur: "نیک بندوں کی صفات" } }
  ],

  virtueHadith: {
    hadith: { en: "The Prophet (peace be upon him) would not sleep until he recited Surah Al-Isra and Surah Az-Zumar every night (Tirmidhi). The Prophet also said about Surah Al-Isra: 'These are among the first surahs revealed, and they are the core of my recitation.' This surah contains the famous verse establishing the five daily prayers and the Night Journey narrative.", ur: "نبی ﷺ ہر رات سورۃ الاسراء اور سورۃ الزمر پڑھے بغیر نہیں سوتے تھے (ترمذی)۔ نبی ﷺ نے سورۃ الاسراء کے بارے میں فرمایا: 'یہ پہلے نازل ہونے والی سورتوں میں سے ہیں اور یہ میری تلاوت کا مرکز ہیں۔' اس سورت میں پانچ وقت کی نمازوں کی مشہور آیت اور معراج کا واقعہ ہے۔" }
  }
};

export default ONTOLOGY;
