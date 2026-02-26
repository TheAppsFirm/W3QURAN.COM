/**
 * Surah Ash-Shura (42) - Ontology of Quranic Concepts
 * The Consultation - 53 Ayahs, Makkan
 * Theme: Consultation (Shura), revelation, forgiveness, unity of religion, creation signs
 *
 * Part of the Ha-Mim series (40-46), this surah uniquely has two sets of
 * disconnected letters (Ha-Mim and 'Ayn-Sin-Qaf). Named after the principle
 * of shura (consultation) mentioned in verse 38.
 */

export const ONTOLOGY = {
  surahId: 42,
  surahName: "Ash-Shura",
  surahNameArabic: "الشورى",
  revelationType: "Makki",
  totalAyahs: 53,

  categories: {
    divineRevelation: {
      name: "Divine Revelation",
      nameUr: "الٰہی وحی",
      nameArabic: "الوحي الإلهي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حم عسق", meaning: { en: "Ha-Mim, 'Ayn-Sin-Qaf", ur: "حم" }, explanation: { en: "Unique double set of disconnected letters in Quran", ur: "قرآن میں حروفِ مقطعات کا منفرد دوہرا مجموعہ" }, verseRef: "42:1-2" },
        { term: "كَذَٰلِكَ يُوحِي إِلَيْكَ", meaning: { en: "Thus He reveals to you", ur: "اسی طرح وہ تمہاری طرف وحی کرتا ہے" }, explanation: { en: "Continuity of revelation to Muhammad", ur: "محمد ﷺ پر وحی کا تسلسل" }, verseRef: "42:3" },
        { term: "وَإِلَى الَّذِينَ مِن قَبْلِكَ", meaning: { en: "And to those before you", ur: "اور تم سے پہلے والوں کی طرف" }, explanation: { en: "Same revelation to previous prophets", ur: "پچھلے انبیاء پر بھی یہی وحی" }, verseRef: "42:3" },
        { term: "اللَّهُ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "Allah, the Mighty, the Wise", ur: "اللہ غالب، حکمت والا" }, explanation: { en: "Source of all revelation", ur: "تمام وحی کا سرچشمہ" }, verseRef: "42:3" },
        { term: "وَكَذَٰلِكَ أَوْحَيْنَا إِلَيْكَ رُوحًا مِّنْ أَمْرِنَا", meaning: { en: "And thus We revealed to you a spirit from Our command", ur: "اور اسی طرح ہم نے اپنے حکم سے تمہاری طرف روح وحی کی" }, explanation: { en: "Quran as spiritual guidance from divine command", ur: "قرآن الٰہی حکم سے روحانی ہدایت" }, verseRef: "42:52" },
        { term: "مَا كُنتَ تَدْرِي مَا الْكِتَابُ وَلَا الْإِيمَانُ", meaning: { en: "You did not know what the Book was nor faith", ur: "تم نہیں جانتے تھے کہ کتاب کیا ہے اور نہ ایمان" }, explanation: { en: "Prophet's state before revelation", ur: "وحی سے پہلے نبی ﷺ کی حالت" }, verseRef: "42:52" },
        { term: "جَعَلْنَاهُ نُورًا نَّهْدِي بِهِ مَن نَّشَاءُ", meaning: { en: "We made it a light by which We guide whom We will", ur: "ہم نے اسے نور بنایا جس سے ہم جسے چاہیں ہدایت دیں" }, explanation: { en: "Quran as guiding light", ur: "قرآن بطور نورِ ہدایت" }, verseRef: "42:52" }
      ]
    },

    modesOfRevelation: {
      name: "Three Modes of Divine Communication",
      nameUr: "الٰہی مواصلات کے تین طریقے",
      nameArabic: "طرق الوحي الإلهي",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَا كَانَ لِبَشَرٍ أَن يُكَلِّمَهُ اللَّهُ", meaning: { en: "It is not for a human that Allah should speak to him", ur: "کسی بشر کی یہ حیثیت نہیں کہ اللہ اس سے کلام کرے" }, explanation: { en: "Human cannot directly perceive divine speech", ur: "انسان براہ راست الٰہی کلام کا ادراک نہیں کر سکتا" }, verseRef: "42:51" },
        { term: "إِلَّا وَحْيًا", meaning: { en: "Except by inspiration", ur: "مگر وحی کے ذریعے" }, explanation: { en: "First mode: direct inspiration into the heart", ur: "پہلا طریقہ: دل میں براہ راست القا" }, verseRef: "42:51" },
        { term: "أَوْ مِن وَرَاءِ حِجَابٍ", meaning: { en: "Or from behind a veil", ur: "یا پردے کے پیچھے سے" }, explanation: { en: "Second mode: Allah speaks but is unseen (like to Musa)", ur: "دوسرا طریقہ: اللہ بولتا ہے مگر نظر نہیں آتا (جیسے موسیٰ سے)" }, verseRef: "42:51" },
        { term: "أَوْ يُرْسِلَ رَسُولًا فَيُوحِيَ بِإِذْنِهِ", meaning: { en: "Or sends a messenger to reveal by His permission", ur: "یا کوئی فرشتہ بھیجے جو اس کے اذن سے وحی کرے" }, explanation: { en: "Third mode: through angel Jibreel", ur: "تیسرا طریقہ: فرشتہ جبرائیل کے ذریعے" }, verseRef: "42:51" },
        { term: "إِنَّهُ عَلِيٌّ حَكِيمٌ", meaning: { en: "Indeed He is Most High, Most Wise", ur: "بے شک وہ بلند مرتبہ حکمت والا ہے" }, explanation: { en: "Divine wisdom in communication methods", ur: "ابلاغ کے طریقوں میں الٰہی حکمت" }, verseRef: "42:51" }
      ]
    },

    unityOfReligion: {
      name: "Unity of Religion",
      nameUr: "دین کی وحدت",
      nameArabic: "وحدة الدين",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "شَرَعَ لَكُم مِّنَ الدِّينِ مَا وَصَّىٰ بِهِ نُوحًا", meaning: { en: "He prescribed for you of religion what He enjoined upon Nuh", ur: "اس نے تمہارے لیے دین میں وہی مقرر کیا جو نوح کو حکم دیا تھا" }, explanation: { en: "Same religion from earliest prophet", ur: "ابتدائی نبی سے ایک ہی دین" }, verseRef: "42:13" },
        { term: "وَالَّذِي أَوْحَيْنَا إِلَيْكَ", meaning: { en: "And what We revealed to you", ur: "اور جو ہم نے تمہاری طرف وحی کیا" }, explanation: { en: "Muhammad receives the same message", ur: "محمد ﷺ کو بھی وہی پیغام ملا" }, verseRef: "42:13" },
        { term: "وَمَا وَصَّيْنَا بِهِ إِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَىٰ", meaning: { en: "And what We enjoined upon Ibrahim, Musa, and Isa", ur: "اور جو ہم نے ابراہیم، موسیٰ اور عیسیٰ کو حکم دیا" }, explanation: { en: "Major prophets received same core message", ur: "بڑے انبیاء کو ایک ہی بنیادی پیغام ملا" }, verseRef: "42:13" },
        { term: "أَنْ أَقِيمُوا الدِّينَ وَلَا تَتَفَرَّقُوا فِيهِ", meaning: { en: "Establish the religion and do not be divided in it", ur: "دین قائم کرو اور اس میں تفرقہ نہ ڈالو" }, explanation: { en: "Core command: unity in worship", ur: "بنیادی حکم: عبادت میں اتحاد" }, verseRef: "42:13" },
        { term: "كَبُرَ عَلَى الْمُشْرِكِينَ مَا تَدْعُوهُمْ إِلَيْهِ", meaning: { en: "Difficult for polytheists is what you call them to", ur: "مشرکوں پر بھاری ہے جس چیز کی طرف تم بلاتے ہو" }, explanation: { en: "Pure monotheism is hard for idolaters", ur: "خالص توحید بت پرستوں کے لیے مشکل ہے" }, verseRef: "42:13" },
        { term: "اللَّهُ يَجْتَبِي إِلَيْهِ مَن يَشَاءُ", meaning: { en: "Allah chooses for Himself whom He wills", ur: "اللہ جسے چاہے اپنے لیے چن لیتا ہے" }, explanation: { en: "Divine selection of believers", ur: "مومنین کا الٰہی انتخاب" }, verseRef: "42:13" }
      ]
    },

    divisionInReligion: {
      name: "Division After Knowledge",
      nameUr: "علم کے بعد تفرقہ",
      nameArabic: "التفرق بعد العلم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَا تَفَرَّقُوا إِلَّا مِن بَعْدِ مَا جَاءَهُمُ الْعِلْمُ", meaning: { en: "They divided not except after knowledge had come to them", ur: "انہوں نے تفرقہ نہیں ڈالا مگر علم آ جانے کے بعد" }, explanation: { en: "Division came after clear guidance, not from ignorance", ur: "تفرقہ واضح ہدایت کے بعد ہوا، جہالت سے نہیں" }, verseRef: "42:14" },
        { term: "بَغْيًا بَيْنَهُمْ", meaning: { en: "Out of jealous rivalry between them", ur: "آپس کی حسد اور زیادتی سے" }, explanation: { en: "Cause of division: envy and transgression", ur: "تفرقے کا سبب: حسد اور سرکشی" }, verseRef: "42:14" },
        { term: "وَلَوْلَا كَلِمَةٌ سَبَقَتْ مِن رَّبِّكَ", meaning: { en: "Had it not been for a word from your Lord", ur: "اگر تمہارے رب کی طرف سے ایک بات پہلے طے نہ ہوتی" }, explanation: { en: "Divine decree delays judgment", ur: "الٰہی فیصلے نے عذاب مؤخر کیا" }, verseRef: "42:14" },
        { term: "إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: { en: "Until an appointed term", ur: "ایک مقررہ مدت تک" }, explanation: { en: "Respite until Day of Judgment", ur: "یومِ قیامت تک مہلت" }, verseRef: "42:14" },
        { term: "لَقُضِيَ بَيْنَهُمْ", meaning: { en: "It would have been judged between them", ur: "ان کے درمیان فیصلہ ہو چکا ہوتا" }, explanation: { en: "Judgment would already have been issued", ur: "فیصلہ پہلے ہی صادر ہو چکا ہوتا" }, verseRef: "42:14" }
      ]
    },

    consultationPrinciple: {
      name: "Principle of Consultation (Shura)",
      nameUr: "مشاورت (شوریٰ) کا اصول",
      nameArabic: "مبدأ الشورى",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ", meaning: { en: "Those who respond to their Lord", ur: "جو لوگ اپنے رب کی بات مانتے ہیں" }, explanation: { en: "First quality: responding to Allah", ur: "پہلی صفت: اللہ کی اطاعت" }, verseRef: "42:38" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "اور نماز قائم کرتے ہیں" }, explanation: { en: "Second quality: maintaining prayer", ur: "دوسری صفت: نماز کی پابندی" }, verseRef: "42:38" },
        { term: "وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", meaning: { en: "And their affair is consultation among them", ur: "اور ان کے معاملات آپس کی مشاورت سے طے ہوتے ہیں" }, explanation: { en: "Third quality: mutual consultation - basis of Islamic governance", ur: "تیسری صفت: باہمی مشاورت - اسلامی نظامِ حکومت کی بنیاد" }, verseRef: "42:38" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: { en: "And from what We provided them, they spend", ur: "اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں" }, explanation: { en: "Fourth quality: charitable spending", ur: "چوتھی صفت: راہِ خدا میں خرچ" }, verseRef: "42:38" }
      ]
    },

    forgivenessAndPardon: {
      name: "Forgiveness and Pardon",
      nameUr: "مغفرت اور عفو",
      nameArabic: "المغفرة والعفو",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "وَالَّذِينَ يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ", meaning: { en: "Those who avoid major sins and immoralities", ur: "جو لوگ بڑے گناہوں اور بے حیائیوں سے بچتے ہیں" }, explanation: { en: "Avoiding grave sins", ur: "بڑے گناہوں سے اجتناب" }, verseRef: "42:37" },
        { term: "وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ", meaning: { en: "And when they are angry, they forgive", ur: "اور جب غصہ آتا ہے تو معاف کر دیتے ہیں" }, explanation: { en: "Forgiving even in anger - sign of character", ur: "غصے میں بھی معاف کرنا - اعلیٰ کردار کی نشانی" }, verseRef: "42:37" },
        { term: "وَلَمَن صَبَرَ وَغَفَرَ", meaning: { en: "And whoever is patient and forgives", ur: "اور جس نے صبر کیا اور معاف کیا" }, explanation: { en: "Patience combined with forgiveness", ur: "صبر اور معافی کا امتزاج" }, verseRef: "42:43" },
        { term: "إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ", meaning: { en: "Indeed that is of the matters of determination", ur: "بے شک یہ بڑی ہمت کے کاموں میں سے ہے" }, explanation: { en: "Forgiveness requires strength, not weakness", ur: "معافی طاقت چاہتی ہے، کمزوری نہیں" }, verseRef: "42:43" },
        { term: "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ", meaning: { en: "And He is the One who accepts repentance from His servants", ur: "اور وہی ہے جو اپنے بندوں سے توبہ قبول کرتا ہے" }, explanation: { en: "Allah's acceptance of repentance", ur: "اللہ کا توبہ قبول کرنا" }, verseRef: "42:25" },
        { term: "وَيَعْفُو عَنِ السَّيِّئَاتِ", meaning: { en: "And pardons misdeeds", ur: "اور گناہ معاف کرتا ہے" }, explanation: { en: "Divine pardon for sins", ur: "گناہوں کی الٰہی معافی" }, verseRef: "42:25" },
        { term: "وَيَعْلَمُ مَا تَفْعَلُونَ", meaning: { en: "And knows what you do", ur: "اور جانتا ہے جو تم کرتے ہو" }, explanation: { en: "Complete divine knowledge", ur: "مکمل الٰہی علم" }, verseRef: "42:25" }
      ]
    },

    standingAgainstOppression: {
      name: "Standing Against Oppression",
      nameUr: "ظلم کے خلاف کھڑا ہونا",
      nameArabic: "مواجهة الظلم",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَالَّذِينَ إِذَا أَصَابَهُمُ الْبَغْيُ هُمْ يَنتَصِرُونَ", meaning: { en: "Those who when tyranny strikes them, they defend themselves", ur: "جو لوگ جب ان پر ظلم ہو تو اپنا دفاع کرتے ہیں" }, explanation: { en: "Right to defend against oppression", ur: "ظلم کے خلاف دفاع کا حق" }, verseRef: "42:39" },
        { term: "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا", meaning: { en: "The recompense of evil is an evil like it", ur: "برائی کا بدلہ اسی جیسی برائی ہے" }, explanation: { en: "Proportional retaliation permitted", ur: "متناسب بدلہ جائز ہے" }, verseRef: "42:40" },
        { term: "فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ", meaning: { en: "But whoever pardons and makes reconciliation, his reward is with Allah", ur: "لیکن جو معاف کرے اور اصلاح کرے اس کا اجر اللہ کے ذمے ہے" }, explanation: { en: "Forgiveness is better and rewarded", ur: "معافی بہتر اور باعثِ اجر ہے" }, verseRef: "42:40" },
        { term: "إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ", meaning: { en: "Indeed He does not love the wrongdoers", ur: "بے شک وہ ظالموں کو پسند نہیں کرتا" }, explanation: { en: "Allah's dislike of oppressors", ur: "اللہ کی ظالموں سے ناپسندیدگی" }, verseRef: "42:40" },
        { term: "وَلَمَنِ انتَصَرَ بَعْدَ ظُلْمِهِ فَأُولَٰئِكَ مَا عَلَيْهِم مِّن سَبِيلٍ", meaning: { en: "Whoever defends himself after being wronged, there is no blame on them", ur: "جو ظلم کے بعد اپنا دفاع کرے ان پر کوئی الزام نہیں" }, explanation: { en: "No sin in self-defense", ur: "دفاعِ نفس میں کوئی گناہ نہیں" }, verseRef: "42:41" },
        { term: "إِنَّمَا السَّبِيلُ عَلَى الَّذِينَ يَظْلِمُونَ النَّاسَ", meaning: { en: "The blame is only upon those who wrong people", ur: "الزام صرف ان پر ہے جو لوگوں پر ظلم کرتے ہیں" }, explanation: { en: "Blame lies with oppressors", ur: "الزام ظالموں پر ہے" }, verseRef: "42:42" },
        { term: "وَيَبْغُونَ فِي الْأَرْضِ بِغَيْرِ الْحَقِّ", meaning: { en: "And transgress on earth without right", ur: "اور زمین میں ناحق زیادتی کرتے ہیں" }, explanation: { en: "Unjust transgression condemned", ur: "ناحق زیادتی مذموم ہے" }, verseRef: "42:42" }
      ]
    },

    cosmicSigns: {
      name: "Signs in Creation",
      nameUr: "تخلیق میں نشانیاں",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "لَهُ مَقَالِيدُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To Him belong the keys of heavens and earth", ur: "آسمانوں اور زمین کی کنجیاں اسی کی ہیں" }, explanation: { en: "Divine ownership of all creation", ur: "تمام مخلوقات کی الٰہی ملکیت" }, verseRef: "42:12" },
        { term: "يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ", meaning: { en: "He extends provision for whom He wills and restricts", ur: "جسے چاہے رزق کشادہ کرے اور تنگ کرے" }, explanation: { en: "Divine control over provision", ur: "رزق پر الٰہی اختیار" }, verseRef: "42:12" },
        { term: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "And among His signs is the creation of heavens and earth", ur: "اور اس کی نشانیوں میں آسمانوں اور زمین کی تخلیق ہے" }, explanation: { en: "Cosmic creation as divine sign", ur: "کائناتی تخلیق بطور الٰہی نشانی" }, verseRef: "42:29" },
        { term: "وَمَا بَثَّ فِيهِمَا مِن دَابَّةٍ", meaning: { en: "And what He has dispersed in them of creatures", ur: "اور جو اس نے ان میں جانداروں کو پھیلایا" }, explanation: { en: "Life forms as signs of divine power", ur: "جاندار الٰہی قدرت کی نشانیاں ہیں" }, verseRef: "42:29" },
        { term: "وَهُوَ عَلَىٰ جَمْعِهِمْ إِذَا يَشَاءُ قَدِيرٌ", meaning: { en: "And He is able to gather them when He wills", ur: "اور جب چاہے انہیں جمع کرنے پر قادر ہے" }, explanation: { en: "Power to resurrect all creatures", ur: "تمام مخلوقات کو دوبارہ اٹھانے کی قدرت" }, verseRef: "42:29" }
      ]
    },

    maritimeSigns: {
      name: "Signs in Ships and Sea",
      nameUr: "جہازوں اور سمندر میں نشانیاں",
      nameArabic: "آيات في السفن والبحر",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "وَمِنْ آيَاتِهِ الْجَوَارِ فِي الْبَحْرِ كَالْأَعْلَامِ", meaning: { en: "And among His signs are ships sailing in the sea like mountains", ur: "اور اس کی نشانیوں میں سمندر میں پہاڑوں جیسے چلنے والے جہاز ہیں" }, explanation: { en: "Ships as divine signs of Allah's power", ur: "جہاز اللہ کی قدرت کی نشانیاں ہیں" }, verseRef: "42:32" },
        { term: "إِن يَشَأْ يُسْكِنِ الرِّيحَ", meaning: { en: "If He wills, He can still the wind", ur: "اگر چاہے تو ہوا کو روک دے" }, explanation: { en: "Control over wind that moves ships", ur: "جہازوں کو چلانے والی ہوا پر اختیار" }, verseRef: "42:33" },
        { term: "فَيَظْلَلْنَ رَوَاكِدَ عَلَىٰ ظَهْرِهِ", meaning: { en: "And they would remain motionless on its surface", ur: "اور وہ سمندر کی سطح پر ساکت رہ جائیں" }, explanation: { en: "Ships dependent on divine will", ur: "جہاز الٰہی مرضی پر منحصر" }, verseRef: "42:33" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ", meaning: { en: "Indeed in that are signs for every patient and grateful one", ur: "بے شک اس میں ہر صبر کرنے والے شکر گزار کے لیے نشانیاں ہیں" }, explanation: { en: "Signs for those who are patient and thankful", ur: "صبر و شکر کرنے والوں کے لیے نشانیاں" }, verseRef: "42:33" },
        { term: "أَوْ يُوبِقْهُنَّ بِمَا كَسَبُوا", meaning: { en: "Or He could destroy them for what they earned", ur: "یا ان کے اعمال کی وجہ سے انہیں غرق کر دے" }, explanation: { en: "Ships can be wrecked as punishment", ur: "جہاز بطور سزا تباہ ہو سکتے ہیں" }, verseRef: "42:34" },
        { term: "وَيَعْفُو عَن كَثِيرٍ", meaning: { en: "And He pardons much", ur: "اور وہ بہت معاف کرتا ہے" }, explanation: { en: "Divine pardon spares many", ur: "الٰہی عفو بہت سوں کو بچاتی ہے" }, verseRef: "42:34" }
      ]
    },

    divineSovereignty: {
      name: "Divine Sovereignty",
      nameUr: "الٰہی حاکمیت",
      nameArabic: "السيادة الإلهية",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To Him belongs the dominion of heavens and earth", ur: "آسمانوں اور زمین کی بادشاہی اسی کی ہے" }, explanation: { en: "Absolute divine sovereignty", ur: "مطلق الٰہی حاکمیت" }, verseRef: "42:49" },
        { term: "يَخْلُقُ مَا يَشَاءُ", meaning: { en: "He creates what He wills", ur: "وہ جو چاہے پیدا کرتا ہے" }, explanation: { en: "Unlimited creative power", ur: "لامحدود تخلیقی قدرت" }, verseRef: "42:49" },
        { term: "يَهَبُ لِمَن يَشَاءُ إِنَاثًا", meaning: { en: "He gives to whom He wills females", ur: "جسے چاہے بیٹیاں عطا کرے" }, explanation: { en: "Gender is divine decree", ur: "جنس الٰہی فیصلہ ہے" }, verseRef: "42:49" },
        { term: "وَيَهَبُ لِمَن يَشَاءُ الذُّكُورَ", meaning: { en: "And gives to whom He wills males", ur: "اور جسے چاہے بیٹے عطا کرے" }, explanation: { en: "Children are divine gifts", ur: "اولاد الٰہی تحفہ ہے" }, verseRef: "42:49" },
        { term: "أَوْ يُزَوِّجُهُمْ ذُكْرَانًا وَإِنَاثًا", meaning: { en: "Or He grants them both males and females", ur: "یا انہیں بیٹے اور بیٹیاں دونوں عطا کرے" }, explanation: { en: "Variety in family composition", ur: "خاندانی ساخت میں تنوع" }, verseRef: "42:50" },
        { term: "وَيَجْعَلُ مَن يَشَاءُ عَقِيمًا", meaning: { en: "And makes whom He wills barren", ur: "اور جسے چاہے بے اولاد رکھے" }, explanation: { en: "Fertility is divine decision", ur: "اولاد کا ہونا الٰہی فیصلہ ہے" }, verseRef: "42:50" },
        { term: "إِنَّهُ عَلِيمٌ قَدِيرٌ", meaning: { en: "Indeed He is Knowing, Competent", ur: "بے شک وہ جاننے والا قادر ہے" }, explanation: { en: "Divine knowledge and power combined", ur: "الٰہی علم اور قدرت کا اجتماع" }, verseRef: "42:50" }
      ]
    },

    trialsAndRecompense: {
      name: "Trials and Recompense",
      nameUr: "آزمائش اور جزا",
      nameArabic: "الابتلاء والجزاء",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَا أَصَابَكُم مِّن مُّصِيبَةٍ فَبِمَا كَسَبَتْ أَيْدِيكُمْ", meaning: { en: "Whatever misfortune befalls you is for what your hands have earned", ur: "جو مصیبت تمہیں پہنچے وہ تمہارے ہاتھوں کی کمائی ہے" }, explanation: { en: "Calamities result from one's actions", ur: "مصائب اپنے اعمال کا نتیجہ ہیں" }, verseRef: "42:30" },
        { term: "وَيَعْفُو عَن كَثِيرٍ", meaning: { en: "And He pardons much", ur: "اور وہ بہت معاف کرتا ہے" }, explanation: { en: "Allah overlooks many sins", ur: "اللہ بہت سے گناہ نظرانداز کرتا ہے" }, verseRef: "42:30" },
        { term: "وَمَا أَنتُم بِمُعْجِزِينَ فِي الْأَرْضِ", meaning: { en: "You cannot escape on earth", ur: "تم زمین میں بھاگ نہیں سکتے" }, explanation: { en: "No escaping divine decree", ur: "الٰہی فیصلے سے فرار ناممکن" }, verseRef: "42:31" },
        { term: "وَمَا لَكُم مِّن دُونِ اللَّهِ مِن وَلِيٍّ وَلَا نَصِيرٍ", meaning: { en: "And you have besides Allah no protector and no helper", ur: "اور اللہ کے سوا تمہارا کوئی دوست اور مددگار نہیں" }, explanation: { en: "Only Allah provides real protection", ur: "صرف اللہ حقیقی حفاظت فراہم کرتا ہے" }, verseRef: "42:31" }
      ]
    },

    propheticMission: {
      name: "Prophetic Mission",
      nameUr: "نبوی مشن",
      nameArabic: "الرسالة النبوية",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "فَلِذَٰلِكَ فَادْعُ وَاسْتَقِمْ كَمَا أُمِرْتَ", meaning: { en: "So to that invite, and be steadfast as you are commanded", ur: "پس اسی کی طرف دعوت دو اور ثابت قدم رہو جیسا حکم ہوا" }, explanation: { en: "Command to invite and remain firm", ur: "دعوت دینے اور ثابت قدم رہنے کا حکم" }, verseRef: "42:15" },
        { term: "وَلَا تَتَّبِعْ أَهْوَاءَهُمْ", meaning: { en: "And do not follow their desires", ur: "اور ان کی خواہشات کی پیروی نہ کرو" }, explanation: { en: "Not swayed by people's wishes", ur: "لوگوں کی خواہشات سے متاثر نہ ہونا" }, verseRef: "42:15" },
        { term: "وَقُلْ آمَنتُ بِمَا أَنزَلَ اللَّهُ مِن كِتَابٍ", meaning: { en: "And say: I believe in whatever book Allah has sent down", ur: "اور کہو: میں ہر اس کتاب پر ایمان لایا جو اللہ نے اتاری" }, explanation: { en: "Belief in all revealed scriptures", ur: "تمام نازل شدہ کتابوں پر ایمان" }, verseRef: "42:15" },
        { term: "وَأُمِرْتُ لِأَعْدِلَ بَيْنَكُمُ", meaning: { en: "And I have been commanded to be just among you", ur: "اور مجھے حکم ہوا ہے کہ تمہارے درمیان انصاف کروں" }, explanation: { en: "Justice as prophetic principle", ur: "انصاف بطور نبوی اصول" }, verseRef: "42:15" },
        { term: "اللَّهُ رَبُّنَا وَرَبُّكُمْ", meaning: { en: "Allah is our Lord and your Lord", ur: "اللہ ہمارا اور تمہارا رب ہے" }, explanation: { en: "Shared Lord between all people", ur: "تمام لوگوں کا مشترک رب" }, verseRef: "42:15" },
        { term: "لَنَا أَعْمَالُنَا وَلَكُمْ أَعْمَالُكُمْ", meaning: { en: "For us are our deeds, and for you your deeds", ur: "ہمارے لیے ہمارے اعمال اور تمہارے لیے تمہارے اعمال" }, explanation: { en: "Individual accountability", ur: "انفرادی جوابدہی" }, verseRef: "42:15" },
        { term: "لَا حُجَّةَ بَيْنَنَا وَبَيْنَكُمُ", meaning: { en: "There is no argument between us and you", ur: "ہمارے اور تمہارے درمیان کوئی جھگڑا نہیں" }, explanation: { en: "No need for debate - truth is clear", ur: "بحث کی ضرورت نہیں - حق واضح ہے" }, verseRef: "42:15" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameUr: "یومِ قیامت",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "يَوْمَ لَا مَرَدَّ لَهُ مِنَ اللَّهِ", meaning: { en: "A Day which there is no averting from Allah", ur: "ایک دن جو اللہ کی طرف سے ٹلنے والا نہیں" }, explanation: { en: "Judgment Day is unavoidable", ur: "یومِ قیامت ناگزیر ہے" }, verseRef: "42:47" },
        { term: "مَا لَكُم مِّن مَّلْجَإٍ يَوْمَئِذٍ", meaning: { en: "No refuge for you that Day", ur: "اس دن تمہارے لیے کوئی پناہ نہیں" }, explanation: { en: "No place to hide on Judgment Day", ur: "قیامت کے دن چھپنے کی کوئی جگہ نہیں" }, verseRef: "42:47" },
        { term: "وَمَا لَكُم مِّن نَّكِيرٍ", meaning: { en: "Nor for you any denial", ur: "اور نہ تمہارے لیے کوئی انکار" }, explanation: { en: "No denying one's deeds", ur: "اپنے اعمال کا انکار ناممکن" }, verseRef: "42:47" },
        { term: "تَرَى الظَّالِمِينَ مُشْفِقِينَ مِمَّا كَسَبُوا", meaning: { en: "You will see the wrongdoers fearful of what they earned", ur: "تم ظالموں کو دیکھو گے کہ اپنے اعمال سے خوفزدہ ہوں گے" }, explanation: { en: "Terror of wrongdoers facing their deeds", ur: "اپنے اعمال کا سامنا کرتے ظالموں کی دہشت" }, verseRef: "42:22" },
        { term: "وَهُوَ وَاقِعٌ بِهِمْ", meaning: { en: "And it will befall them", ur: "اور یہ ان پر واقع ہو کر رہے گا" }, explanation: { en: "Punishment will definitely reach them", ur: "سزا یقیناً ان تک پہنچے گی" }, verseRef: "42:22" },
        { term: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فِي رَوْضَاتِ الْجَنَّاتِ", meaning: { en: "And those who believed and did righteous deeds will be in gardens of Paradise", ur: "اور جو ایمان لائے اور نیک عمل کیے وہ جنت کے باغوں میں ہوں گے" }, explanation: { en: "Believers in gardens of bliss", ur: "مومنین نعمت کے باغوں میں" }, verseRef: "42:22" },
        { term: "لَهُم مَّا يَشَاءُونَ عِندَ رَبِّهِمْ", meaning: { en: "They will have whatever they wish with their Lord", ur: "ان کے لیے ان کے رب کے پاس جو چاہیں ملے گا" }, explanation: { en: "Unlimited wishes fulfilled in Paradise", ur: "جنت میں لامحدود خواہشات پوری" }, verseRef: "42:22" }
      ]
    },

    guidanceAndMisguidance: {
      name: "Guidance and Misguidance",
      nameUr: "ہدایت اور گمراہی",
      nameArabic: "الهداية والضلال",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِن وَلِيٍّ مِّن بَعْدِهِ", meaning: { en: "Whoever Allah sends astray, for him there is no protector after Him", ur: "جسے اللہ گمراہ کرے اس کے بعد اس کا کوئی کارساز نہیں" }, explanation: { en: "No help for those Allah allows to stray", ur: "جنہیں اللہ گمراہ رہنے دے ان کی کوئی مدد نہیں" }, verseRef: "42:44" },
        { term: "وَتَرَى الظَّالِمِينَ لَمَّا رَأَوُا الْعَذَابَ", meaning: { en: "And you will see the wrongdoers when they see the punishment", ur: "اور تم ظالموں کو دیکھو گے جب وہ عذاب دیکھیں گے" }, explanation: { en: "Wrongdoers will see punishment", ur: "ظالم عذاب دیکھیں گے" }, verseRef: "42:44" },
        { term: "يَقُولُونَ هَلْ إِلَىٰ مَرَدٍّ مِّن سَبِيلٍ", meaning: { en: "Saying: Is there any way to return?", ur: "کہیں گے: کیا واپسی کا کوئی راستہ ہے؟" }, explanation: { en: "Desperate plea to go back", ur: "واپس جانے کی بے بس التجا" }, verseRef: "42:44" },
        { term: "وَإِنَّكَ لَتَهْدِي إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "And indeed you guide to a straight path", ur: "اور بے شک تم سیدھے راستے کی رہنمائی کرتے ہو" }, explanation: { en: "Prophet guides to the straight way", ur: "نبی ﷺ صراطِ مستقیم کی رہنمائی کرتے ہیں" }, verseRef: "42:52" },
        { term: "صِرَاطِ اللَّهِ", meaning: { en: "The path of Allah", ur: "اللہ کا راستہ" }, explanation: { en: "Allah's path - the only true path", ur: "اللہ کا راستہ - واحد سچا راستہ" }, verseRef: "42:53" },
        { term: "الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: { en: "To whom belongs whatever is in heavens and earth", ur: "جس کا ہے جو کچھ آسمانوں اور زمین میں ہے" }, explanation: { en: "Allah owns all creation", ur: "اللہ تمام مخلوقات کا مالک ہے" }, verseRef: "42:53" },
        { term: "أَلَا إِلَى اللَّهِ تَصِيرُ الْأُمُورُ", meaning: { en: "Unquestionably, to Allah do all matters return", ur: "سنو! تمام معاملات اللہ ہی کی طرف لوٹتے ہیں" }, explanation: { en: "Final return to Allah - closing verse", ur: "اللہ کی طرف آخری بازگشت - اختتامی آیت" }, verseRef: "42:53" }
      ]
    },

    divineNames: {
      name: "Divine Names and Attributes",
      nameUr: "اللہ کے نام اور صفات",
      nameArabic: "أسماء الله وصفاته",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "الْعَزِيزُ الْحَكِيمُ", meaning: { en: "The Mighty, the Wise", ur: "غالب، حکمت والا" }, explanation: { en: "Power combined with wisdom", ur: "قدرت اور حکمت کا اجتماع" }, verseRef: "42:3" },
        { term: "الْعَلِيُّ الْعَظِيمُ", meaning: { en: "The Most High, the Greatest", ur: "بلند ترین، عظیم ترین" }, explanation: { en: "Supreme elevation and grandeur", ur: "اعلیٰ بلندی اور عظمت" }, verseRef: "42:4" },
        { term: "السَّمِيعُ الْبَصِيرُ", meaning: { en: "The Hearing, the Seeing", ur: "سننے والا، دیکھنے والا" }, explanation: { en: "All-perceiving awareness", ur: "ہمہ گیر سماعت و بصارت" }, verseRef: "42:11" },
        { term: "اللَّطِيفُ الْخَبِيرُ", meaning: { en: "The Subtle, the Aware", ur: "باریک بین، خبردار" }, explanation: { en: "Gentle awareness of all details", ur: "ہر تفصیل سے لطیف آگاہی" }, verseRef: "42:19" },
        { term: "الْقَوِيُّ الْعَزِيزُ", meaning: { en: "The Powerful, the Mighty", ur: "طاقتور، غالب" }, explanation: { en: "Strength and dominance", ur: "طاقت اور غلبہ" }, verseRef: "42:19" },
        { term: "الْوَلِيُّ", meaning: { en: "The Protector", ur: "حامی و ناصر" }, explanation: { en: "Allah as guardian and supporter", ur: "اللہ بطور محافظ اور مددگار" }, verseRef: "42:9" },
        { term: "الَّذِي يُحْيِي الْمَوْتَىٰ", meaning: { en: "The One who gives life to the dead", ur: "مردوں کو زندہ کرنے والا" }, explanation: { en: "Power of resurrection", ur: "دوبارہ زندہ کرنے کی قدرت" }, verseRef: "42:9" }
      ]
    },

    beliversCharacteristics: {
      name: "Characteristics of Believers",
      nameUr: "مومنین کی صفات",
      nameArabic: "صفات المؤمنين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "يَسْتَجِيبُونَ لِرَبِّهِمْ", meaning: { en: "They respond to their Lord", ur: "وہ اپنے رب کی بات مانتے ہیں" }, explanation: { en: "Responsive obedience to Allah", ur: "اللہ کی فرمانبرداری" }, verseRef: "42:26" },
        { term: "وَيُقِيمُونَ الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "اور نماز قائم کرتے ہیں" }, explanation: { en: "Maintaining regular prayer", ur: "باقاعدہ نماز کی پابندی" }, verseRef: "42:38" },
        { term: "أَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", meaning: { en: "Their affair is consultation among them", ur: "ان کے معاملات مشاورت سے ہوتے ہیں" }, explanation: { en: "Mutual consultation in decisions", ur: "فیصلوں میں باہمی مشاورت" }, verseRef: "42:38" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: { en: "And from what We provided them, they spend", ur: "اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں" }, explanation: { en: "Generous spending from provisions", ur: "رزق میں سے فراخدلی سے خرچ" }, verseRef: "42:38" },
        { term: "يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ", meaning: { en: "They avoid major sins", ur: "وہ بڑے گناہوں سے بچتے ہیں" }, explanation: { en: "Staying away from grave sins", ur: "بڑے گناہوں سے دور رہنا" }, verseRef: "42:37" },
        { term: "إِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ", meaning: { en: "When angry, they forgive", ur: "جب غصہ آئے تو معاف کر دیں" }, explanation: { en: "Forgiving even in anger", ur: "غصے میں بھی معاف کرنا" }, verseRef: "42:37" },
        { term: "يَنتَصِرُونَ", meaning: { en: "They defend themselves", ur: "وہ اپنا دفاع کرتے ہیں" }, explanation: { en: "Standing up against oppression", ur: "ظلم کے خلاف کھڑے ہونا" }, verseRef: "42:39" }
      ]
    },

    transcendenceOfAllah: {
      name: "Transcendence of Allah",
      nameUr: "اللہ کی تنزیہ",
      nameArabic: "تنزيه الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Creator of heavens and earth", ur: "آسمانوں اور زمین کا پیدا کرنے والا" }, explanation: { en: "Originator of the universe", ur: "کائنات کو وجود میں لانے والا" }, verseRef: "42:11" },
        { term: "جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا", meaning: { en: "Made for you from yourselves mates", ur: "تمہارے لیے تم ہی میں سے جوڑے بنائے" }, explanation: { en: "Created human pairs", ur: "انسانی جوڑے تخلیق کیے" }, verseRef: "42:11" },
        { term: "وَمِنَ الْأَنْعَامِ أَزْوَاجًا", meaning: { en: "And of livestock mates", ur: "اور مویشیوں کے بھی جوڑے" }, explanation: { en: "Animal pairs for reproduction", ur: "افزائشِ نسل کے لیے حیوانی جوڑے" }, verseRef: "42:11" },
        { term: "يَذْرَؤُكُمْ فِيهِ", meaning: { en: "He multiplies you thereby", ur: "اس طریقے سے تمہیں پھیلاتا ہے" }, explanation: { en: "Reproduction system established by Allah", ur: "اللہ کا قائم کردہ نظامِ تولید" }, verseRef: "42:11" },
        { term: "لَيْسَ كَمِثْلِهِ شَيْءٌ", meaning: { en: "There is nothing like Him", ur: "اس کے مثل کوئی چیز نہیں" }, explanation: { en: "Absolute uniqueness of Allah - no comparison", ur: "اللہ کی مطلق یکتائی - کوئی مثال نہیں" }, verseRef: "42:11" },
        { term: "وَهُوَ السَّمِيعُ الْبَصِيرُ", meaning: { en: "And He is the Hearing, the Seeing", ur: "اور وہ سننے والا دیکھنے والا ہے" }, explanation: { en: "Perfect perception despite transcendence", ur: "تنزیہ کے باوجود کامل ادراک" }, verseRef: "42:11" }
      ]
    }
  },

  relationships: [
    { from: "شَرَعَ لَكُم مِّنَ الدِّينِ", to: "مَا وَصَّىٰ بِهِ نُوحًا وَإِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَىٰ", type: "continuity", description: { en: "Same religion revealed to all prophets", ur: "تمام انبیاء پر ایک ہی دین نازل ہوا" } },
    { from: "أَقِيمُوا الدِّينَ", to: "لَا تَتَفَرَّقُوا فِيهِ", type: "command", description: { en: "Establish religion without division", ur: "دین قائم کرو تفرقے کے بغیر" } },
    { from: "تَفَرَّقُوا", to: "بَغْيًا بَيْنَهُمْ", type: "causation", description: { en: "Division caused by jealousy, not ignorance", ur: "تفرقہ حسد سے ہوا، جہالت سے نہیں" } },
    { from: "أَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", to: "يُنفِقُونَ", type: "sequence", description: { en: "Consultation and spending are linked believers' qualities", ur: "مشاورت اور خرچ مومنین کی مربوط صفات ہیں" } },
    { from: "صَبَرَ", to: "غَفَرَ", type: "combination", description: { en: "Patience and forgiveness together show strength", ur: "صبر اور معافی ساتھ مل کر طاقت ظاہر کرتے ہیں" } },
    { from: "سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا", to: "فَمَنْ عَفَا وَأَصْلَحَ", type: "preference", description: { en: "Retaliation permitted but forgiveness is better", ur: "بدلہ جائز ہے لیکن معافی بہتر ہے" } },
    { from: "لَيْسَ كَمِثْلِهِ شَيْءٌ", to: "السَّمِيعُ الْبَصِيرُ", type: "balance", description: { en: "Transcendence with personal attributes", ur: "ذاتی صفات کے ساتھ تنزیہ" } },
    { from: "وَحْيًا", to: "مِن وَرَاءِ حِجَابٍ", to2: "يُرْسِلَ رَسُولًا", type: "modes", description: { en: "Three methods of divine communication", ur: "الٰہی مواصلات کے تین طریقے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening and Revelation", verses: "42:1-6", description: { en: "Ha-Mim 'Ayn-Sin-Qaf, revelation from the Mighty, Wise", ur: "حم عسق، غالب حکمت والے کی طرف سے وحی" } },
      { stage: 2, theme: "Warning of Judgment", verses: "42:7-9", description: { en: "Warning of gathering Day, Allah as sole Protector", ur: "جمع ہونے کے دن کی تنبیہ، اللہ واحد محافظ" } },
      { stage: 3, theme: "Divine Transcendence", verses: "42:10-12", description: { en: "Nothing like Allah, keys of heavens and earth", ur: "اللہ کی کوئی مثل نہیں، آسمانوں اور زمین کی کنجیاں" } },
      { stage: 4, theme: "Unity of Religion", verses: "42:13-14", description: { en: "Same religion to all prophets, warning against division", ur: "تمام انبیاء کو ایک ہی دین، تفرقے سے خبردار" } },
      { stage: 5, theme: "Prophetic Mission", verses: "42:15-19", description: { en: "Call to faith, justice, accountability", ur: "ایمان، عدل، جوابدہی کی دعوت" } },
      { stage: 6, theme: "Worldly vs Afterlife Harvest", verses: "42:20", description: { en: "Choosing between worldly and eternal reward", ur: "دنیاوی اور ابدی اجر کے درمیان انتخاب" } },
      { stage: 7, theme: "Judgment Day", verses: "42:21-26", description: { en: "Wrongdoers' fate vs believers' paradise, acceptance of repentance", ur: "ظالموں کا انجام بمقابلہ مومنین کی جنت، توبہ کی قبولیت" } },
      { stage: 8, theme: "Divine Provision", verses: "42:27-28", description: { en: "Measured provision, rain after despair", ur: "ناپ تول سے رزق، مایوسی کے بعد بارش" } },
      { stage: 9, theme: "Signs in Creation", verses: "42:29-35", description: { en: "Creatures, ships, calamities from one's deeds", ur: "مخلوقات، جہاز، اعمال کی وجہ سے مصائب" } },
      { stage: 10, theme: "Believers' Qualities", verses: "42:36-43", description: { en: "Forgiveness, consultation, patience, defense against oppression", ur: "معافی، مشاورت، صبر، ظلم کے خلاف دفاع" } },
      { stage: 11, theme: "Misguidance and Return", verses: "42:44-48", description: { en: "No guidance for whom Allah leaves astray, seeking return", ur: "جسے اللہ چھوڑ دے اس کے لیے ہدایت نہیں، واپسی کی تلاش" } },
      { stage: 12, theme: "Divine Sovereignty", verses: "42:49-50", description: { en: "Allah gives males, females, both, or none", ur: "اللہ بیٹے دیتا ہے، بیٹیاں، دونوں یا کوئی نہیں" } },
      { stage: 13, theme: "Modes of Revelation", verses: "42:51-53", description: { en: "Three ways Allah communicates, guidance to straight path", ur: "اللہ کے کلام کے تین طریقے، صراطِ مستقیم کی ہدایت" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Practice Shura (consultation)", how: "Make collective decisions through mutual consultation - family, community, governance", verse: "42:38" },
      { principle: "Forgive even when angry", how: "Control anger and choose forgiveness - it shows strength, not weakness", verse: "42:37, 42:43" },
      { principle: "Maintain religious unity", how: "Focus on core beliefs shared by all prophets, avoid sectarian division", verse: "42:13" },
      { principle: "Defend against oppression", how: "Standing up against injustice is permitted, but forgiveness is more rewarded", verse: "42:39-40" },
      { principle: "Balance justice and mercy", how: "Retaliation should be proportional, but pardon is better", verse: "42:40" },
      { principle: "Accept trials as consequence", how: "Understand calamities may result from one's actions, but Allah pardons much", verse: "42:30" },
      { principle: "Avoid major sins", how: "Stay away from grave sins and immoralities", verse: "42:37" },
      { principle: "Spend from provisions", how: "Share what Allah has given you with others", verse: "42:38" },
      { principle: "Remain steadfast in invitation", how: "Continue calling to truth without following desires of others", verse: "42:15" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Consultation and Unity", ur: "مشاورت اور اتحاد کی سورت" },
    insight: { en: "Surah Ash-Shura is unique in several ways. First, it is the only surah with two sets of disconnected letters (Ha-Mim and 'Ayn-Sin-Qaf), emphasizing its special place in the Ha-Mim series. Second, it gives the surah its name from the principle of 'shura' (consultation) in verse 38 - one of the foundations of Islamic governance and community decision-making. Third, it presents the most comprehensive statement on the unity of religion: the same core message was given to Nuh, Ibrahim, Musa, Isa, and Muhammad. Division came not from different messages but from 'jealousy between themselves' after knowledge came. Fourth, it balances the right to self-defense with the superiority of forgiveness - retaliation is permitted but 'whoever pardons and makes reconciliation, his reward is with Allah.' Fifth, the famous verse 'There is nothing like Him' (42:11) is the clearest statement of divine transcendence in the Quran, yet immediately followed by 'He is the Hearing, the Seeing' - showing Allah is both utterly unique and personally aware. The surah closes with the three modes of divine communication, explaining how prophets received revelation, and ends with the powerful statement: 'To Allah return all matters.'", ur: "سورۃ الشوریٰ کئی طرح سے منفرد ہے۔ اول، یہ واحد سورت ہے جس میں حروفِ مقطعات کے دو مجموعے ہیں (حم اور عسق)۔ دوم، سورت کا نام آیت 38 میں شوریٰ (مشاورت) کے اصول سے ہے جو اسلامی نظامِ حکومت کی بنیاد ہے۔ سوم، یہ دین کی وحدت کا جامع ترین بیان پیش کرتی ہے: نوح، ابراہیم، موسیٰ، عیسیٰ اور محمد ﷺ سب کو ایک ہی پیغام دیا گیا۔ تفرقہ مختلف پیغامات سے نہیں بلکہ علم آنے کے بعد آپس کی حسد سے ہوا۔ چہارم، دفاعِ نفس کے حق اور معافی کی فوقیت میں توازن ہے - بدلہ جائز ہے مگر جو معاف کرے اس کا اجر اللہ پر ہے۔ پنجم، مشہور آیت 'اس جیسی کوئی چیز نہیں' (42:11) تنزیہ کا واضح ترین بیان ہے مگر فوراً بعد 'وہ سننے والا دیکھنے والا ہے' - اللہ یکتا بھی ہے اور باخبر بھی۔ سورت وحی کے تین طریقوں پر ختم ہوتی ہے اور 'تمام معاملات اللہ ہی کی طرف لوٹتے ہیں' پر اختتام پذیر ہوتی ہے۔" }
  },

  historicalContext: {
    note: { en: "This Makkan surah was revealed during a period when the Prophet faced opposition and needed to clarify the nature of his mission. The emphasis on the unity of religion countered claims that Islam was a new or foreign religion - it was the same message given to all prophets. The principle of shura (consultation) established an Islamic approach to governance distinct from both the tribal absolutism of Arabia and the imperial systems of Rome and Persia. The detailed explanation of revelation modes (42:51) responded to questions about how the Prophet received divine communication.", ur: "یہ مکی سورت اس دور میں نازل ہوئی جب نبی ﷺ کو مخالفت کا سامنا تھا اور مشن کی نوعیت واضح کرنے کی ضرورت تھی۔ دین کی وحدت پر زور نے ان دعوؤں کا رد کیا کہ اسلام نیا یا اجنبی مذہب ہے - یہ وہی پیغام تھا جو تمام انبیاء کو دیا گیا۔ شوریٰ کے اصول نے اسلامی نظامِ حکومت قائم کیا جو عرب کی قبائلی مطلق العنانیت اور روم و فارس کے سلطنتی نظاموں سے مختلف تھا۔ وحی کے طریقوں کی تفصیلی وضاحت (42:51) نے سوالات کا جواب دیا کہ نبی ﷺ کو الٰہی پیغام کیسے ملتا تھا۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "حم عسق", example: { en: "Double Huruf Muqatta'at", ur: "دوہرے حروفِ مقطعات" }, effect: { en: "Only surah with two sets of disconnected letters", ur: "واحد سورت جس میں حروفِ مقطعات کے دو مجموعے ہیں" } },
      { feature: "شُورَىٰ", example: { en: "Consultation", ur: "مشاورت" }, effect: { en: "Noun form emphasizing the principle itself", ur: "اسمی صورت جو خود اصول پر زور دیتی ہے" } },
      { feature: "لَيْسَ كَمِثْلِهِ شَيْءٌ", example: { en: "Nothing like Him", ur: "اس جیسا کچھ نہیں" }, effect: { en: "Double negation (laysa + ka-mithlihi) for emphasis on uniqueness", ur: "یکتائی پر زور کے لیے دوہری نفی (لیس + کمثلہ)" } },
      { feature: "عَزْمِ الْأُمُورِ", example: { en: "Matters of determination", ur: "پختہ عزم کے معاملات" }, effect: { en: "Forgiveness requires 'azm - firm resolve", ur: "معافی کو عزم یعنی پختہ ارادے کی ضرورت ہے" } },
      { feature: "مَقَالِيدُ", example: { en: "Keys", ur: "کنجیاں" }, effect: { en: "Plural of miqlaad - keys to treasures", ur: "مقلاد کی جمع - خزانوں کی کنجیاں" } },
      { feature: "رَوْضَاتِ الْجَنَّاتِ", example: { en: "Gardens of Paradise", ur: "جنت کے باغات" }, effect: { en: "Double plural - gardens within gardens", ur: "دوہری جمع - باغوں کے اندر باغات" } }
    ]
  },

  shuraVerse: {
    verse: 38,
    text: "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
    translation: { en: "And those who respond to their Lord, establish prayer, and whose affair is consultation among them, and from what We have provided them, they spend", ur: "اور جو لوگ اپنے رب کی بات مانتے ہیں، نماز قائم کرتے ہیں، ان کے معاملات مشاورت سے ہوتے ہیں، اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں" },
    significance: { en: "This verse establishes Shura (consultation) as a fundamental Islamic principle alongside prayer and charity. It places collective decision-making at the heart of the Muslim community's identity.", ur: "یہ آیت شوریٰ (مشاورت) کو نماز اور زکوٰۃ کے ساتھ بنیادی اسلامی اصول قرار دیتی ہے۔ یہ اجتماعی فیصلہ سازی کو مسلم معاشرے کی شناخت کا مرکز بناتی ہے۔" }
  },

  transcendenceVerse: {
    verse: 11,
    text: "فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ ۚ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا وَمِنَ الْأَنْعَامِ أَزْوَاجًا ۖ يَذْرَؤُكُمْ فِيهِ ۚ لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ",
    translation: { en: "Creator of the heavens and earth. He made for you from yourselves mates, and among livestock, mates. He multiplies you thereby. There is nothing like Him, and He is the Hearing, the Seeing.", ur: "آسمانوں اور زمین کا پیدا کرنے والا۔ اس نے تمہارے لیے تم ہی میں سے جوڑے بنائے اور مویشیوں کے بھی جوڑے۔ اس طریقے سے تمہیں پھیلاتا ہے۔ اس کے مثل کوئی چیز نہیں اور وہ سننے والا دیکھنے والا ہے۔" },
    significance: { en: "Contains the Quran's clearest statement of divine transcendence (laysa ka-mithlihi shay') while affirming Allah's personal attributes - the balance of tanzih (transcendence) and tashbih (similarity) in Islamic theology.", ur: "قرآن کا تنزیہ الٰہی (لیس کمثلہ شئ) کا واضح ترین بیان ہے جبکہ اللہ کی ذاتی صفات کی تصدیق بھی کرتی ہے - اسلامی عقیدے میں تنزیہ اور تشبیہ کا توازن۔" }
  },

  hamimConnection: {
    note: { en: "Part of the Ha-Mim series (Surahs 40-46)", ur: "حوامیم سلسلے کا حصہ (سورتیں 40-46)" },
    series: ["Ghafir (40)", "Fussilat (41)", "Ash-Shura (42)", "Az-Zukhruf (43)", "Ad-Dukhan (44)", "Al-Jathiyah (45)", "Al-Ahqaf (46)"],
    uniqueness: { en: "Ash-Shura is unique in the series for having an additional set of letters ('Ayn-Sin-Qaf) after Ha-Mim", ur: "الشوریٰ اس سلسلے میں منفرد ہے کیونکہ حم کے بعد اضافی حروف (عسق) ہیں" }
  }
};

export default ONTOLOGY;
