/**
 * Surah Ibrahim (14) - Ontology of Quranic Concepts
 * Prophet Ibrahim / Abraham - 52 Ayahs, Makki
 *
 * Major Themes:
 * - Guidance through revelation vs misguidance
 * - Stories of past prophets (Musa, Ibrahim)
 * - The parable of good word vs evil word
 * - Ibrahim's prayer for Makkah and his descendants
 * - Allah's blessings and ingratitude of disbelievers
 * - Day of Judgment warnings
 */

export const ONTOLOGY = {
  surahId: 14,
  surahName: "Ibrahim",
  surahNameArabic: "إبراهيم",
  revelationType: "Makki",
  totalAyahs: 52,

  categories: {
    revelationGuidance: {
      color: '#EF4444',
      icon: 'Users',
      name: "Revelation as Guidance",
      nameArabic: "الهداية بالوحي",
      concepts: [
        { term: "كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ", meaning: { en: "A Book We revealed to you", ur: "ایک کتاب جو ہم نے تمہاری طرف نازل کی" }, explanation: { en: "Quran's purpose is to guide humanity", ur: "قرآن کا مقصد انسانیت کی رہنمائی ہے" }, verseRef: "14:1" },
        { term: "لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ", meaning: { en: "To bring people from darkness to light", ur: "تاکہ لوگوں کو اندھیروں سے نکال کر روشنی میں لاؤ" }, explanation: { en: "Core metaphor: disbelief is darkness, faith is light", ur: "بنیادی استعارہ: کفر اندھیرا ہے، ایمان روشنی ہے" }, verseRef: "14:1" },
        { term: "صِرَاطِ الْعَزِيزِ الْحَمِيدِ", meaning: { en: "Path of the Mighty, the Praiseworthy", ur: "غالب، قابل تعریف کا راستہ" }, explanation: { en: "The straight path belongs to Allah", ur: "صراط مستقیم Allah کا ہے" }, verseRef: "14:1" },
        { term: "وَمَا أَرْسَلْنَا مِن رَّسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ", meaning: { en: "We sent no messenger except in his people's tongue", ur: "ہم نے کوئی رسول نہیں بھیجا مگر اپنی قوم کی زبان میں" }, explanation: { en: "Wisdom of revelation in native language", ur: "مادری زبان میں وحی کی حکمت" }, verseRef: "14:4" }
      ]
    },

    divineAuthority: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Divine Authority",
      nameArabic: "السلطان الإلهي",
      concepts: [
        { term: "اللَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: { en: "Allah, to whom belongs all in heavens and earth", ur: "Allah جس کا ہے جو کچھ آسمانوں اور زمین میں ہے" }, explanation: { en: "Absolute divine ownership", ur: "مطلق الٰہی ملکیت" }, verseRef: "14:2" },
        { term: "يُضِلُّ اللَّهُ مَن يَشَاءُ وَيَهْدِي مَن يَشَاءُ", meaning: { en: "Allah lets stray whom He wills and guides whom He wills", ur: "Allah جسے چاہے گمراہ کرے اور جسے چاہے ہدایت دے" }, explanation: { en: "Divine will in guidance/misguidance", ur: "ہدایت/گمراہی میں الٰہی مشیت" }, verseRef: "14:4" },
        { term: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "And He is the Mighty, the Wise", ur: "اور وہ غالب، حکمت والا ہے" }, explanation: { en: "Power combined with wisdom", ur: "طاقت حکمت کے ساتھ مل کر" }, verseRef: "14:4" }
      ]
    },

    propheticMission: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Prophetic Mission",
      nameArabic: "رسالة الأنبياء",
      concepts: [
        { term: "أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا", meaning: { en: "We sent Musa with Our signs", ur: "ہم نے موسیٰ کو اپنی نشانیوں کے ساتھ بھیجا" }, explanation: { en: "Musa's mission to Pharaoh's people", ur: "موسیٰ کی فرعون کی قوم کی طرف بعثت" }, verseRef: "14:5" },
        { term: "أَخْرِجْ قَوْمَكَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ", meaning: { en: "Bring your people from darkness to light", ur: "اپنی قوم کو اندھیروں سے نکال کر روشنی میں لاؤ" }, explanation: { en: "Same mission as Muhammad", ur: "محمد ﷺ جیسا ہی مشن" }, verseRef: "14:5" },
        { term: "وَذَكِّرْهُم بِأَيَّامِ اللَّهِ", meaning: { en: "Remind them of the days of Allah", ur: "انہیں Allah کے ایام یاد دلاؤ" }, explanation: { en: "Historical lessons as reminders", ur: "تاریخی اسباق بطور نصیحت" }, verseRef: "14:5" },
        { term: "جَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ", meaning: { en: "Their messengers came with clear proofs", ur: "ان کے رسول واضح دلائل لے کر آئے" }, explanation: { en: "Every nation received clear guidance", ur: "ہر قوم کو واضح ہدایت ملی" }, verseRef: "14:9" }
      ]
    },

    disbelieversTactics: {
      color: '#EF4444',
      icon: 'Users',
      name: "Tactics of Disbelievers",
      nameArabic: "مكر الكافرين",
      concepts: [
        { term: "الَّذِينَ يَسْتَحِبُّونَ الْحَيَاةَ الدُّنْيَا عَلَى الْآخِرَةِ", meaning: { en: "Those who prefer worldly life over Hereafter", ur: "جو دنیا کی زندگی کو آخرت پر ترجیح دیتے ہیں" }, explanation: { en: "Root cause: prioritizing this world", ur: "بنیادی وجہ: اس دنیا کو ترجیح دینا" }, verseRef: "14:3" },
        { term: "وَيَصُدُّونَ عَن سَبِيلِ اللَّهِ وَيَبْغُونَهَا عِوَجًا", meaning: { en: "Barring from Allah's path and seeking to make it crooked", ur: "Allah کے راستے سے روکتے ہیں اور اسے ٹیڑھا کرنا چاہتے ہیں" }, explanation: { en: "Active opposition to guidance", ur: "ہدایت کی فعال مخالفت" }, verseRef: "14:3" },
        { term: "فَرَدُّوا أَيْدِيَهُمْ فِي أَفْوَاهِهِمْ", meaning: { en: "They put their hands over their mouths", ur: "انہوں نے اپنے ہاتھ اپنے منہ پر رکھ لیے" }, explanation: { en: "Gesture of rejection/mockery", ur: "انکار/تمسخر کا اشارہ" }, verseRef: "14:9" },
        { term: "إِنَّا كَفَرْنَا بِمَا أُرْسِلْتُم بِهِ", meaning: { en: "We disbelieve in what you were sent with", ur: "جو کچھ تمہیں دے کر بھیجا گیا ہم اس کا انکار کرتے ہیں" }, explanation: { en: "Open declaration of rejection", ur: "کھلم کھلا انکار کا اعلان" }, verseRef: "14:9" }
      ]
    },

    propheticResponse: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Prophetic Response",
      nameArabic: "رد الأنبياء",
      concepts: [
        { term: "أَفِي اللَّهِ شَكٌّ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Is there doubt about Allah, Creator of heavens and earth?", ur: "کیا آسمانوں اور زمین کے پیدا کرنے والے Allah میں شک ہے؟" }, explanation: { en: "Rhetorical question affirming Allah's existence", ur: "بلاغی سوال جو Allah کے وجود کی تصدیق کرتا ہے" }, verseRef: "14:10" },
        { term: "يَدْعُوكُمْ لِيَغْفِرَ لَكُم مِّن ذُنُوبِكُمْ", meaning: { en: "He calls you to forgive your sins", ur: "وہ تمہیں بلاتا ہے تاکہ تمہارے گناہ معاف کرے" }, explanation: { en: "Divine call is for mercy not punishment", ur: "الٰہی پکار رحمت کے لیے ہے نہ کہ سزا کے لیے" }, verseRef: "14:10" },
        { term: "إِنْ نَحْنُ إِلَّا بَشَرٌ مِّثْلُكُمْ", meaning: { en: "We are only humans like you", ur: "ہم تمہاری طرح صرف انسان ہیں" }, explanation: { en: "Prophets' humanity acknowledged", ur: "انبیاء کی انسانیت کا اعتراف" }, verseRef: "14:11" },
        { term: "وَلَٰكِنَّ اللَّهَ يَمُنُّ عَلَىٰ مَن يَشَاءُ", meaning: { en: "But Allah bestows favor on whom He wills", ur: "لیکن Allah جس پر چاہے احسان فرماتا ہے" }, explanation: { en: "Prophethood is divine selection", ur: "نبوت الٰہی انتخاب ہے" }, verseRef: "14:11" }
      ]
    },

    patienceAndTrust: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Patience and Trust in Allah",
      nameArabic: "الصبر والتوكل",
      concepts: [
        { term: "وَلَنَصْبِرَنَّ عَلَىٰ مَا آذَيْتُمُونَا", meaning: { en: "We will surely be patient over your harm", ur: "تمہاری تکلیف پر ہم ضرور صبر کریں گے" }, explanation: { en: "Prophetic commitment to patience", ur: "صبر پر انبیاء کا عزم" }, verseRef: "14:12" },
        { term: "وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُتَوَكِّلُونَ", meaning: { en: "And upon Allah let those who trust put their trust", ur: "اور Allah پر ہی بھروسہ کرنے والوں کو بھروسہ کرنا چاہیے" }, explanation: { en: "Tawakkul as foundation of faith", ur: "توکل ایمان کی بنیاد ہے" }, verseRef: "14:12" },
        { term: "لَنُخْرِجَنَّكُم مِّنْ أَرْضِنَا", meaning: { en: "We will surely expel you from our land", ur: "ہم تمہیں اپنی سرزمین سے ضرور نکال دیں گے" }, explanation: { en: "Threat of exile by disbelievers", ur: "کافروں کی طرف سے جلاوطنی کی دھمکی" }, verseRef: "14:13" },
        { term: "وَأَوْحَىٰ إِلَيْهِمْ رَبُّهُمْ لَنُهْلِكَنَّ الظَّالِمِينَ", meaning: { en: "Their Lord inspired them: We will destroy wrongdoers", ur: "ان کے رب نے ان کی طرف وحی کی: ہم ظالموں کو ضرور ہلاک کریں گے" }, explanation: { en: "Divine promise to protect believers", ur: "مومنین کی حفاظت کا الٰہی وعدہ" }, verseRef: "14:13" }
      ]
    },

    destroyedNations: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Destroyed Nations",
      nameArabic: "الأمم الهالكة",
      concepts: [
        { term: "أَلَمْ يَأْتِكُمْ نَبَأُ الَّذِينَ مِن قَبْلِكُمْ قَوْمِ نُوحٍ وَعَادٍ وَثَمُودَ", meaning: { en: "Has not the news reached you of those before you - people of Nuh, Aad, Thamud", ur: "کیا تمہیں ان لوگوں کی خبر نہیں پہنچی جو تم سے پہلے تھے - قوم نوح، عاد اور ثمود" }, explanation: { en: "Historical precedents of destruction", ur: "تباہی کی تاریخی مثالیں" }, verseRef: "14:9" },
        { term: "وَمَكَرُوا مَكْرَهُمْ وَعِندَ اللَّهِ مَكْرُهُمْ", meaning: { en: "They planned their plan, but with Allah is their plan", ur: "انہوں نے اپنی چال چلی اور ان کی چال Allah کے پاس ہے" }, explanation: { en: "Allah sees all plots", ur: "Allah تمام سازشیں دیکھتا ہے" }, verseRef: "14:46" },
        { term: "وَإِن كَانَ مَكْرُهُمْ لِتَزُولَ مِنْهُ الْجِبَالُ", meaning: { en: "Even if their plan was to move mountains", ur: "اگرچہ ان کی چال ایسی ہو کہ پہاڑ ہل جائیں" }, explanation: { en: "No plot can defeat Allah", ur: "کوئی سازش Allah کو شکست نہیں دے سکتی" }, verseRef: "14:46" }
      ]
    },

    goodWordParable: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Parable of the Good Word",
      nameArabic: "مثل الكلمة الطيبة",
      concepts: [
        { term: "كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ", meaning: { en: "A good word like a good tree", ur: "پاکیزہ کلمہ پاکیزہ درخت کی مانند ہے" }, explanation: { en: "La ilaha illallah compared to tree", ur: "لا الہ الا اللہ کا درخت سے موازنہ" }, verseRef: "14:24" },
        { term: "أَصْلُهَا ثَابِتٌ", meaning: { en: "Its root firm", ur: "اس کی جڑ مضبوط ہے" }, explanation: { en: "Faith firmly rooted in heart", ur: "ایمان دل میں مضبوطی سے جڑا ہوا ہے" }, verseRef: "14:24" },
        { term: "وَفَرْعُهَا فِي السَّمَاءِ", meaning: { en: "Its branches in the sky", ur: "اور اس کی شاخیں آسمان میں ہیں" }, explanation: { en: "Good deeds rising to heavens", ur: "نیک اعمال آسمانوں تک بلند ہوتے ہیں" }, verseRef: "14:24" },
        { term: "تُؤْتِي أُكُلَهَا كُلَّ حِينٍ بِإِذْنِ رَبِّهَا", meaning: { en: "Producing fruit all the time by permission of its Lord", ur: "اپنے رب کے حکم سے ہر وقت پھل دیتا ہے" }, explanation: { en: "Continuous benefits of faith", ur: "ایمان کے مسلسل فوائد" }, verseRef: "14:25" },
        { term: "وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ", meaning: { en: "And Allah presents examples for people", ur: "اور Allah لوگوں کے لیے مثالیں بیان کرتا ہے" }, explanation: { en: "Purpose of Quranic parables", ur: "قرآنی تمثیلات کا مقصد" }, verseRef: "14:25" }
      ]
    },

    evilWordParable: {
      color: '#EF4444',
      icon: 'Users',
      name: "Parable of the Evil Word",
      nameArabic: "مثل الكلمة الخبيثة",
      concepts: [
        { term: "كَلِمَةٍ خَبِيثَةٍ كَشَجَرَةٍ خَبِيثَةٍ", meaning: { en: "An evil word like an evil tree", ur: "خبیث کلمہ خبیث درخت کی مانند ہے" }, explanation: { en: "Kufr/shirk compared to rotten tree", ur: "کفر/شرک کا بوسیدہ درخت سے موازنہ" }, verseRef: "14:26" },
        { term: "اجْتُثَّتْ مِن فَوْقِ الْأَرْضِ", meaning: { en: "Uprooted from above the earth", ur: "زمین کے اوپر سے اکھاڑ دیا گیا" }, explanation: { en: "No firm foundation", ur: "کوئی مضبوط بنیاد نہیں" }, verseRef: "14:26" },
        { term: "مَا لَهَا مِن قَرَارٍ", meaning: { en: "Having no stability", ur: "اس کا کوئی ٹھکانا نہیں" }, explanation: { en: "Falsehood has no permanence", ur: "باطل کا کوئی دوام نہیں" }, verseRef: "14:26" }
      ]
    },

    firmWord: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "The Firm Word",
      nameArabic: "القول الثابت",
      concepts: [
        { term: "يُثَبِّتُ اللَّهُ الَّذِينَ آمَنُوا بِالْقَوْلِ الثَّابِتِ", meaning: { en: "Allah keeps firm those who believe with the firm word", ur: "Allah ایمان والوں کو پختہ قول سے ثابت قدم رکھتا ہے" }, explanation: { en: "Faith provides stability", ur: "ایمان ثابت قدمی دیتا ہے" }, verseRef: "14:27" },
        { term: "فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ", meaning: { en: "In worldly life and in the Hereafter", ur: "دنیا کی زندگی میں اور آخرت میں" }, explanation: { en: "Firmness in both worlds", ur: "دونوں جہانوں میں استحکام" }, verseRef: "14:27" },
        { term: "وَيُضِلُّ اللَّهُ الظَّالِمِينَ", meaning: { en: "And Allah lets the wrongdoers stray", ur: "اور Allah ظالموں کو گمراہ کر دیتا ہے" }, explanation: { en: "Justice in misguidance", ur: "گمراہی میں عدل" }, verseRef: "14:27" }
      ]
    },

    allahsBlessings: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Allah's Blessings",
      nameArabic: "نعم الله",
      concepts: [
        { term: "وَسَخَّرَ لَكُمُ الْفُلْكَ لِتَجْرِيَ فِي الْبَحْرِ بِأَمْرِهِ", meaning: { en: "Subjected to you ships to sail through the sea by His command", ur: "تمہارے لیے کشتیاں مسخر کیں تاکہ اس کے حکم سے سمندر میں چلیں" }, explanation: { en: "Sea travel as divine gift", ur: "سمندری سفر بطور الٰہی عطیہ" }, verseRef: "14:32" },
        { term: "وَسَخَّرَ لَكُمُ الْأَنْهَارَ", meaning: { en: "And subjected to you the rivers", ur: "اور تمہارے لیے ندیاں مسخر کیں" }, explanation: { en: "Fresh water systems", ur: "میٹھے پانی کے نظام" }, verseRef: "14:32" },
        { term: "وَسَخَّرَ لَكُمُ الشَّمْسَ وَالْقَمَرَ دَائِبَيْنِ", meaning: { en: "And subjected sun and moon continuously", ur: "اور سورج اور چاند کو مسلسل مسخر کیا" }, explanation: { en: "Cosmic order for humanity", ur: "انسانیت کے لیے کائناتی نظام" }, verseRef: "14:33" },
        { term: "وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ", meaning: { en: "And subjected night and day", ur: "اور رات اور دن کو مسخر کیا" }, explanation: { en: "Time cycles for benefit", ur: "فائدے کے لیے وقت کے چکر" }, verseRef: "14:33" },
        { term: "وَآتَاكُم مِّن كُلِّ مَا سَأَلْتُمُوهُ", meaning: { en: "And gave you from all you asked Him", ur: "اور جو کچھ تم نے مانگا اس میں سے تمہیں دیا" }, explanation: { en: "Allah provides even unasked", ur: "Allah بن مانگے بھی عطا کرتا ہے" }, verseRef: "14:34" },
        { term: "وَإِن تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا", meaning: { en: "And if you count Allah's blessings you cannot enumerate them", ur: "اور اگر تم Allah کی نعمتیں شمار کرو تو گن نہیں سکتے" }, explanation: { en: "Blessings are countless", ur: "نعمتیں بے شمار ہیں" }, verseRef: "14:34" }
      ]
    },

    humanIngratitude: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Human Ingratitude",
      nameArabic: "كفران النعم",
      concepts: [
        { term: "إِنَّ الْإِنسَانَ لَظَلُومٌ كَفَّارٌ", meaning: { en: "Indeed mankind is most unjust, ungrateful", ur: "بے شک انسان بڑا ظالم، بڑا ناشکرا ہے" }, explanation: { en: "Human tendency toward ingratitude", ur: "ناشکری کی طرف انسانی رجحان" }, verseRef: "14:34" },
        { term: "أَلَمْ تَرَ إِلَى الَّذِينَ بَدَّلُوا نِعْمَتَ اللَّهِ كُفْرًا", meaning: { en: "Have you not seen those who exchanged Allah's blessing for disbelief", ur: "کیا تم نے ان لوگوں کو نہیں دیکھا جنہوں نے Allah کی نعمت کو کفر سے بدل دیا" }, explanation: { en: "Trading faith for kufr", ur: "ایمان کو کفر سے بدلنا" }, verseRef: "14:28" },
        { term: "وَأَحَلُّوا قَوْمَهُمْ دَارَ الْبَوَارِ", meaning: { en: "And settled their people in the home of ruin", ur: "اور اپنی قوم کو تباہی کے گھر میں اتار دیا" }, explanation: { en: "Leaders leading to destruction", ur: "رہنما تباہی کی طرف لے جانا" }, verseRef: "14:28" }
      ]
    },

    ibrahimPrayerMakkah: {
      color: '#EF4444',
      icon: 'Users',
      name: "Ibrahim's Prayer for Makkah",
      nameArabic: "دعاء إبراهيم لمكة",
      concepts: [
        { term: "رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا", meaning: { en: "My Lord, make this city secure", ur: "اے میرے رب! اس شہر کو امن والا بنا دے" }, explanation: { en: "Prayer for Makkah's safety", ur: "مکہ کی سلامتی کی دعا" }, verseRef: "14:35" },
        { term: "وَاجْنُبْنِي وَبَنِيَّ أَن نَّعْبُدَ الْأَصْنَامَ", meaning: { en: "And keep me and my sons from worshipping idols", ur: "اور مجھے اور میرے بیٹوں کو بتوں کی عبادت سے بچا" }, explanation: { en: "Fear of shirk even for prophets", ur: "شرک کا خوف انبیاء کے لیے بھی" }, verseRef: "14:35" },
        { term: "رَبِّ إِنَّهُنَّ أَضْلَلْنَ كَثِيرًا مِّنَ النَّاسِ", meaning: { en: "My Lord, they have led astray many people", ur: "اے میرے رب! انہوں نے بہت سے لوگوں کو گمراہ کیا" }, explanation: { en: "Idols as source of misguidance", ur: "بت گمراہی کا ذریعہ" }, verseRef: "14:36" },
        { term: "فَمَن تَبِعَنِي فَإِنَّهُ مِنِّي", meaning: { en: "Whoever follows me is of me", ur: "جو میری پیروی کرے وہ مجھ سے ہے" }, explanation: { en: "True brotherhood through faith", ur: "ایمان کے ذریعے سچا بھائی چارہ" }, verseRef: "14:36" }
      ]
    },

    ibrahimFamilyMakkah: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Ibrahim's Family in Makkah",
      nameArabic: "ذرية إبراهيم في مكة",
      concepts: [
        { term: "رَّبَّنَا إِنِّي أَسْكَنتُ مِن ذُرِّيَّتِي بِوَادٍ غَيْرِ ذِي زَرْعٍ", meaning: { en: "Our Lord, I have settled some of my descendants in an uncultivated valley", ur: "اے ہمارے رب! میں نے اپنی اولاد کو بے آب و گیاہ وادی میں بسایا" }, explanation: { en: "Settling Ismail and Hajar in barren Makkah", ur: "اسماعیل اور ہاجرہ کو بنجر مکہ میں بسانا" }, verseRef: "14:37" },
        { term: "عِندَ بَيْتِكَ الْمُحَرَّمِ", meaning: { en: "Near Your sacred House", ur: "تیرے حرمت والے گھر کے پاس" }, explanation: { en: "Location near the Kaaba", ur: "کعبہ کے قریب مقام" }, verseRef: "14:37" },
        { term: "رَبَّنَا لِيُقِيمُوا الصَّلَاةَ", meaning: { en: "Our Lord, that they may establish prayer", ur: "اے ہمارے رب! تاکہ وہ نماز قائم کریں" }, explanation: { en: "Purpose: worship establishment", ur: "مقصد: عبادت کی اقامت" }, verseRef: "14:37" },
        { term: "فَاجْعَلْ أَفْئِدَةً مِّنَ النَّاسِ تَهْوِي إِلَيْهِمْ", meaning: { en: "So make hearts of people incline toward them", ur: "تو لوگوں کے دل ان کی طرف مائل کر دے" }, explanation: { en: "Prayer for pilgrims to Makkah", ur: "مکہ کے زائرین کے لیے دعا" }, verseRef: "14:37" },
        { term: "وَارْزُقْهُم مِّنَ الثَّمَرَاتِ", meaning: { en: "And provide them with fruits", ur: "اور انہیں پھلوں سے رزق دے" }, explanation: { en: "Prayer for provision in desert", ur: "صحرا میں رزق کی دعا" }, verseRef: "14:37" }
      ]
    },

    ibrahimGratitude: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Ibrahim's Gratitude",
      nameArabic: "شكر إبراهيم",
      concepts: [
        { term: "الْحَمْدُ لِلَّهِ الَّذِي وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ", meaning: { en: "Praise to Allah who granted me in old age Ismail and Ishaq", ur: "تمام تعریفیں Allah کے لیے جس نے مجھے بڑھاپے میں اسماعیل اور اسحاق عطا فرمائے" }, explanation: { en: "Gratitude for children in old age", ur: "بڑھاپے میں اولاد کا شکر" }, verseRef: "14:39" },
        { term: "إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ", meaning: { en: "Indeed my Lord is Hearer of supplication", ur: "بے شک میرا رب دعا سننے والا ہے" }, explanation: { en: "Confidence in answered prayers", ur: "دعاؤں کی قبولیت پر اعتماد" }, verseRef: "14:39" }
      ]
    },

    ibrahimPrayerFamily: {
      color: '#10B981',
      icon: 'Book',
      name: "Ibrahim's Prayer for Family",
      nameArabic: "دعاء إبراهيم لأهله",
      concepts: [
        { term: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي", meaning: { en: "My Lord, make me establisher of prayer and from my descendants", ur: "اے میرے رب! مجھے نماز قائم کرنے والا بنا اور میری اولاد سے بھی" }, explanation: { en: "Prayer for generations of worshippers", ur: "نسلوں کے عبادت گزار ہونے کی دعا" }, verseRef: "14:40" },
        { term: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ", meaning: { en: "Our Lord, and accept my supplication", ur: "اے ہمارے رب! میری دعا قبول فرما" }, explanation: { en: "Humble request for acceptance", ur: "قبولیت کی عاجزانہ درخواست" }, verseRef: "14:40" },
        { term: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ", meaning: { en: "Our Lord, forgive me and my parents and the believers", ur: "اے ہمارے رب! مجھے اور میرے والدین اور مومنین کو بخش دے" }, explanation: { en: "Comprehensive prayer for forgiveness", ur: "مغفرت کی جامع دعا" }, verseRef: "14:41" },
        { term: "يَوْمَ يَقُومُ الْحِسَابُ", meaning: { en: "The Day the account is established", ur: "جس دن حساب قائم ہوگا" }, explanation: { en: "Awareness of accountability", ur: "جوابدہی کا شعور" }, verseRef: "14:41" }
      ]
    },

    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      concepts: [
        { term: "وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ", meaning: { en: "Never think Allah is unaware of what wrongdoers do", ur: "ظالم جو کچھ کرتے ہیں Allah کو اس سے غافل نہ سمجھو" }, explanation: { en: "Divine observation of all deeds", ur: "تمام اعمال پر الٰہی نگرانی" }, verseRef: "14:42" },
        { term: "إِنَّمَا يُؤَخِّرُهُمْ لِيَوْمٍ تَشْخَصُ فِيهِ الْأَبْصَارُ", meaning: { en: "He only delays them for a Day eyes will stare in horror", ur: "وہ انہیں صرف اس دن کے لیے مہلت دے رہا ہے جب آنکھیں پھٹی رہ جائیں گی" }, explanation: { en: "Delay is not neglect", ur: "تاخیر غفلت نہیں ہے" }, verseRef: "14:42" },
        { term: "مُهْطِعِينَ مُقْنِعِي رُءُوسِهِمْ", meaning: { en: "Racing ahead, heads raised", ur: "دوڑتے ہوئے، سر اٹھائے ہوئے" }, explanation: { en: "Terror causes heads to freeze upward", ur: "خوف سروں کو اوپر جمنے پر مجبور کرتا ہے" }, verseRef: "14:43" },
        { term: "لَا يَرْتَدُّ إِلَيْهِمْ طَرْفُهُمْ", meaning: { en: "Their gaze does not return to them", ur: "ان کی نظر ان کی طرف نہیں لوٹتی" }, explanation: { en: "Frozen stare of horror", ur: "خوف کی جمی ہوئی نگاہ" }, verseRef: "14:43" },
        { term: "وَأَفْئِدَتُهُمْ هَوَاءٌ", meaning: { en: "And their hearts are empty", ur: "اور ان کے دل خالی ہیں" }, explanation: { en: "Hearts void from terror", ur: "خوف سے دل خالی ہو گئے" }, verseRef: "14:43" }
      ]
    },

    regretOfDisbelievers: {
      color: '#EF4444',
      icon: 'Users',
      name: "Regret of Disbelievers",
      nameArabic: "ندم الكافرين",
      concepts: [
        { term: "رَبَّنَا أَخِّرْنَا إِلَىٰ أَجَلٍ قَرِيبٍ", meaning: { en: "Our Lord, delay us for a brief term", ur: "اے ہمارے رب! ہمیں تھوڑی مہلت دے" }, explanation: { en: "Too-late request for time", ur: "وقت کی دیر سے درخواست" }, verseRef: "14:44" },
        { term: "نُّجِبْ دَعْوَتَكَ وَنَتَّبِعِ الرُّسُلَ", meaning: { en: "We will answer Your call and follow the messengers", ur: "ہم تیری پکار قبول کریں گے اور رسولوں کی پیروی کریں گے" }, explanation: { en: "Promise they cannot keep", ur: "وعدہ جو وہ پورا نہیں کر سکتے" }, verseRef: "14:44" },
        { term: "أَوَلَمْ تَكُونُوا أَقْسَمْتُم مِّن قَبْلُ مَا لَكُم مِّن زَوَالٍ", meaning: { en: "Had you not sworn before that you would never decline?", ur: "کیا تم نے پہلے قسم نہیں کھائی تھی کہ تمہیں زوال نہیں آئے گا؟" }, explanation: { en: "Reminder of their arrogance", ur: "ان کے تکبر کی یاد دہانی" }, verseRef: "14:44" }
      ]
    },

    satanDisowns: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Satan Disowns Followers",
      nameArabic: "تبرؤ الشيطان",
      concepts: [
        { term: "وَقَالَ الشَّيْطَانُ لَمَّا قُضِيَ الْأَمْرُ", meaning: { en: "And Satan will say when the matter is concluded", ur: "اور شیطان کہے گا جب فیصلہ ہو جائے گا" }, explanation: { en: "Satan's speech on Judgment Day", ur: "قیامت کے دن شیطان کی تقریر" }, verseRef: "14:22" },
        { term: "إِنَّ اللَّهَ وَعَدَكُمْ وَعْدَ الْحَقِّ وَوَعَدتُّكُمْ فَأَخْلَفْتُكُمْ", meaning: { en: "Allah promised you truth, I promised and betrayed you", ur: "Allah نے تم سے سچا وعدہ کیا تھا اور میں نے تم سے وعدہ کیا اور وعدہ خلافی کی" }, explanation: { en: "Satan admits his deception", ur: "شیطان اپنے دھوکے کا اعتراف کرتا ہے" }, verseRef: "14:22" },
        { term: "وَمَا كَانَ لِيَ عَلَيْكُم مِّن سُلْطَانٍ إِلَّا أَن دَعَوْتُكُمْ فَاسْتَجَبْتُمْ لِي", meaning: { en: "I had no authority over you except that I called you and you responded", ur: "مجھے تم پر کوئی اختیار نہیں تھا سوائے اس کے کہ میں نے بلایا اور تم نے قبول کر لیا" }, explanation: { en: "Satan had no power, only suggestions", ur: "شیطان کے پاس طاقت نہیں تھی، صرف وسوسے تھے" }, verseRef: "14:22" },
        { term: "فَلَا تَلُومُونِي وَلُومُوا أَنفُسَكُم", meaning: { en: "So blame not me but blame yourselves", ur: "تو مجھے الزام نہ دو بلکہ اپنے آپ کو الزام دو" }, explanation: { en: "Personal responsibility emphasized", ur: "ذاتی ذمہ داری پر زور" }, verseRef: "14:22" },
        { term: "إِنِّي كَفَرْتُ بِمَا أَشْرَكْتُمُونِ مِن قَبْلُ", meaning: { en: "Indeed I deny your previous association of me", ur: "بے شک میں اس بات سے بری ہوں کہ تم نے پہلے مجھے شریک ٹھہرایا" }, explanation: { en: "Satan rejects being worshipped", ur: "شیطان اپنی عبادت کو رد کرتا ہے" }, verseRef: "14:22" }
      ]
    },

    paradiseDescription: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Description of Paradise",
      nameArabic: "وصف الجنة",
      concepts: [
        { term: "وَأُدْخِلَ الَّذِينَ آمَنُوا... جَنَّاتٍ", meaning: { en: "And those who believed will be admitted to gardens", ur: "اور جو ایمان لائے انہیں باغات میں داخل کیا جائے گا" }, explanation: { en: "Entry of believers to Paradise", ur: "مومنین کا جنت میں داخلہ" }, verseRef: "14:23" },
        { term: "تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", meaning: { en: "Beneath which rivers flow", ur: "جن کے نیچے نہریں بہتی ہیں" }, explanation: { en: "Rivers of Paradise", ur: "جنت کی نہریں" }, verseRef: "14:23" },
        { term: "خَالِدِينَ فِيهَا بِإِذْنِ رَبِّهِمْ", meaning: { en: "Abiding therein by permission of their Lord", ur: "اپنے رب کے حکم سے ہمیشہ وہاں رہیں گے" }, explanation: { en: "Eternal residence", ur: "ابدی قیام" }, verseRef: "14:23" },
        { term: "تَحِيَّتُهُمْ فِيهَا سَلَامٌ", meaning: { en: "Their greeting therein is 'Peace'", ur: "وہاں ان کی تحیت سلام ہوگی" }, explanation: { en: "Greeting in Paradise", ur: "جنت میں سلام" }, verseRef: "14:23" }
      ]
    },

    cosmicTransformation: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Cosmic Transformation",
      nameArabic: "تبدل الكون",
      concepts: [
        { term: "يَوْمَ تُبَدَّلُ الْأَرْضُ غَيْرَ الْأَرْضِ وَالسَّمَاوَاتُ", meaning: { en: "The Day earth will be replaced by another earth and the heavens", ur: "جس دن زمین بدل دی جائے گی دوسری زمین سے اور آسمان بھی" }, explanation: { en: "Complete cosmic recreation", ur: "مکمل کائناتی تخلیق نو" }, verseRef: "14:48" },
        { term: "وَبَرَزُوا لِلَّهِ الْوَاحِدِ الْقَهَّارِ", meaning: { en: "And they will come forth before Allah, the One, the Prevailing", ur: "اور وہ Allah واحد قہار کے سامنے پیش ہوں گے" }, explanation: { en: "Standing before Allah", ur: "Allah کے سامنے کھڑے ہونا" }, verseRef: "14:48" },
        { term: "وَتَرَى الْمُجْرِمِينَ يَوْمَئِذٍ مُّقَرَّنِينَ فِي الْأَصْفَادِ", meaning: { en: "You will see criminals that Day bound together in shackles", ur: "اس دن تم مجرمین کو بیڑیوں میں جکڑے ہوئے دیکھو گے" }, explanation: { en: "Criminals chained together", ur: "مجرمین زنجیروں میں جکڑے ہوئے" }, verseRef: "14:49" },
        { term: "سَرَابِيلُهُم مِّن قَطِرَانٍ", meaning: { en: "Their garments of tar", ur: "ان کے لباس تارکول کے ہوں گے" }, explanation: { en: "Clothing of burning pitch", ur: "جلتی ہوئی رال کے لباس" }, verseRef: "14:50" },
        { term: "وَتَغْشَىٰ وُجُوهَهُمُ النَّارُ", meaning: { en: "And fire will cover their faces", ur: "اور آگ ان کے چہروں کو ڈھانپ لے گی" }, explanation: { en: "Faces engulfed in flames", ur: "چہرے شعلوں میں لپٹے ہوئے" }, verseRef: "14:50" }
      ]
    },

    warningToPeople: {
      color: '#10B981',
      icon: 'Book',
      name: "Warning to People",
      nameArabic: "البلاغ والإنذار",
      concepts: [
        { term: "هَٰذَا بَلَاغٌ لِّلنَّاسِ", meaning: { en: "This is notification for the people", ur: "یہ لوگوں کے لیے پیغام ہے" }, explanation: { en: "Quran as clear message", ur: "قرآن بطور واضح پیغام" }, verseRef: "14:52" },
        { term: "وَلِيُنذَرُوا بِهِ", meaning: { en: "That they may be warned thereby", ur: "تاکہ اس سے ڈرائے جائیں" }, explanation: { en: "Purpose: warning humanity", ur: "مقصد: انسانیت کو خبردار کرنا" }, verseRef: "14:52" },
        { term: "وَلِيَعْلَمُوا أَنَّمَا هُوَ إِلَٰهٌ وَاحِدٌ", meaning: { en: "And that they may know He is but one God", ur: "اور تاکہ جان لیں کہ وہ صرف ایک معبود ہے" }, explanation: { en: "Core message: Tawheed", ur: "بنیادی پیغام: توحید" }, verseRef: "14:52" },
        { term: "وَلِيَذَّكَّرَ أُولُو الْأَلْبَابِ", meaning: { en: "And that those of understanding may remember", ur: "اور تاکہ عقل والے نصیحت حاصل کریں" }, explanation: { en: "Reminder for the intelligent", ur: "عقلمندوں کے لیے نصیحت" }, verseRef: "14:52" }
      ]
    }
  },

  relationships: [
    { from: "كلمة طيبة", to: "شجرة طيبة", type: "parable", description: { en: "Good word compared to good tree - faith has strong roots", ur: "پاکیزہ کلمے کا پاکیزہ درخت سے موازنہ - ایمان کی جڑیں مضبوط ہیں" } },
    { from: "كلمة خبيثة", to: "شجرة خبيثة", type: "parable", description: { en: "Evil word compared to uprooted tree - kufr has no foundation", ur: "خبیث کلمے کا اکھڑے درخت سے موازنہ - کفر کی کوئی بنیاد نہیں" } },
    { from: "الظلمات", to: "النور", type: "contrast", description: { en: "Darkness (disbelief) vs Light (faith) - central metaphor", ur: "اندھیرا (کفر) بمقابلہ روشنی (ایمان) - مرکزی استعارہ" } },
    { from: "دعاء إبراهيم", to: "مكة", type: "fulfillment", description: { en: "Ibrahim's prayers answered - Makkah became center of Islam", ur: "ابراہیم کی دعائیں قبول ہوئیں - مکہ اسلام کا مرکز بنا" } },
    { from: "نعم الله", to: "كفران الإنسان", type: "irony", description: { en: "Countless blessings met with ingratitude", ur: "بے شمار نعمتوں کا جواب ناشکری سے" } },
    { from: "وعد الشيطان", to: "وعد الله", type: "contrast", description: { en: "Satan's false promises vs Allah's true promise", ur: "شیطان کے جھوٹے وعدے بمقابلہ Allah کا سچا وعدہ" } },
    { from: "تبديل الأرض", to: "يوم القيامة", type: "sequence", description: { en: "Cosmic transformation at resurrection", ur: "قیامت پر کائناتی تبدیلی" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Revelation as Guidance", verses: "14:1-4", description: { en: "Quran brings from darkness to light", ur: "قرآن اندھیروں سے روشنی کی طرف لاتا ہے" } },
      { stage: 2, theme: "Musa's Mission", verses: "14:5-8", description: { en: "Reminder of days of Allah", ur: "Allah کے ایام کی یاد دہانی" } },
      { stage: 3, theme: "Previous Nations", verses: "14:9-18", description: { en: "Rejection and destruction patterns", ur: "انکار اور تباہی کے نمونے" } },
      { stage: 4, theme: "Satan's Disowning", verses: "14:19-23", description: { en: "Satan admits deception, Paradise described", ur: "شیطان دھوکے کا اعتراف کرتا ہے، جنت کا بیان" } },
      { stage: 5, theme: "Good and Evil Word Parables", verses: "14:24-27", description: { en: "Tree metaphors for faith and kufr", ur: "ایمان اور کفر کے لیے درخت کے استعارے" } },
      { stage: 6, theme: "Exchanging Blessings for Kufr", verses: "14:28-31", description: { en: "Consequences of ingratitude", ur: "ناشکری کے نتائج" } },
      { stage: 7, theme: "Allah's Countless Blessings", verses: "14:32-34", description: { en: "Cosmic and earthly gifts", ur: "کائناتی اور زمینی عطیات" } },
      { stage: 8, theme: "Ibrahim's Prayers", verses: "14:35-41", description: { en: "Prayers for Makkah, family, ummah", ur: "مکہ، خاندان، امت کے لیے دعائیں" } },
      { stage: 9, theme: "Warning of Judgment", verses: "14:42-52", description: { en: "Delay is not neglect, final reckoning", ur: "تاخیر غفلت نہیں، آخری حساب" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Move from darkness to light", how: "Seek knowledge, practice Islam sincerely", verse: "14:1" },
      { principle: "Trust in Allah during hardship", how: "When harmed for faith, rely on Allah alone", verse: "14:12" },
      { principle: "Cultivate the 'good word'", how: "Strengthen tawheed, produce good deeds constantly", verse: "14:24-25" },
      { principle: "Count and appreciate blessings", how: "Daily gratitude practice, avoid complaining", verse: "14:34" },
      { principle: "Fear idolatry in all forms", how: "Even Ibrahim feared shirk - be vigilant", verse: "14:35" },
      { principle: "Pray for family's guidance", how: "Make dua for children to establish prayer", verse: "14:40" },
      { principle: "Take personal responsibility", how: "Don't blame Satan - you chose to follow", verse: "14:22" },
      { principle: "Remember this is notification", how: "Share the message, warn with wisdom", verse: "14:52" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Tale of Two Trees", ur: "دو درختوں کی کہانی" },
    insight: { en: "Surah Ibrahim presents one of the Quran's most powerful parables: the comparison of the 'good word' (La ilaha illallah) to a good tree with firm roots and branches reaching the sky, versus the 'evil word' (kufr/shirk) as an uprooted tree with no stability. This parable teaches that faith produces continuous fruits (good deeds), while disbelief has no foundation and cannot sustain. The surah is named after Ibrahim specifically because it contains his famous prayers for Makkah and his descendants - prayers that were answered when Prophet Muhammad emerged from his lineage and transformed that barren valley into the spiritual center of the world. Ibrahim's fear of shirk even for himself (v.35) teaches us that no one is immune from spiritual danger, requiring constant vigilance.", ur: "سورۃ ابراہیم قرآن کی سب سے طاقتور تمثیلات میں سے ایک پیش کرتی ہے: 'کلمہ طیبہ' (لا الہ الا اللہ) کا ایسے اچھے درخت سے موازنہ جس کی جڑیں مضبوط اور شاخیں آسمان تک ہیں، بمقابلہ 'کلمہ خبیثہ' (کفر/شرک) جو اکھڑے ہوئے درخت کی طرح بے ثبات ہے۔ یہ تمثیل سکھاتی ہے کہ ایمان مسلسل پھل (نیک اعمال) دیتا ہے، جبکہ کفر کی کوئی بنیاد نہیں اور وہ قائم نہیں رہ سکتا۔ سورت کا نام خاص طور پر ابراہیم رکھا گیا کیونکہ اس میں مکہ اور ان کی نسل کے لیے ان کی مشہور دعائیں ہیں - وہ دعائیں جو اس وقت قبول ہوئیں جب نبی محمد ﷺ ان کی نسل سے آئے اور اس بنجر وادی کو دنیا کا روحانی مرکز بنا دیا۔ ابراہیم کا اپنے لیے بھی شرک کا خوف (آیت 35) ہمیں سکھاتا ہے کہ کوئی بھی روحانی خطرے سے محفوظ نہیں، مسلسل چوکنا رہنا ضروری ہے۔" }
  },

  historicalContext: {
    note: { en: "This Makki surah addresses the Prophet Muhammad and early Muslims during persecution in Makkah. The references to Ibrahim settling his family in an 'uncultivated valley' near the Sacred House would have resonated deeply with Makkan listeners who knew they were descendants of Ismail. The threat of exile mentioned (v.13) reflects the actual persecution faced by early Muslims. The name 'Ibrahim' connects this surah to the Abrahamic legacy that both the Prophet and the Quraysh claimed - yet the surah distinguishes true followers of Ibrahim (monotheists) from those who had corrupted his legacy with idol worship.", ur: "یہ مکی سورت مکہ میں ظلم و ستم کے دوران نبی محمد ﷺ اور ابتدائی مسلمانوں سے خطاب کرتی ہے۔ ابراہیم کا اپنے خاندان کو بیت المحرم کے قریب 'بے آب و گیاہ وادی' میں بسانے کا حوالہ مکی سامعین کے دلوں کو چھوتا جو جانتے تھے کہ وہ اسماعیل کی نسل سے ہیں۔ جلاوطنی کی دھمکی (آیت 13) ابتدائی مسلمانوں کو درپیش حقیقی ظلم و ستم کی عکاسی کرتی ہے۔ 'ابراہیم' کا نام اس سورت کو ابراہیمی میراث سے جوڑتا ہے جس کا دعویٰ نبی اور قریش دونوں کرتے تھے - لیکن سورت ابراہیم کے سچے پیروکاروں (موحدین) کو ان سے ممتاز کرتی ہے جنہوں نے بت پرستی سے اس کی میراث کو بگاڑ دیا تھا۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "الظُّلُمَاتِ/النُّورِ", example: { en: "Darkness/Light", ur: "اندھیرے/روشنی" }, effect: "Plural for darkness (many types), singular for light (one truth)" },
      { feature: "كَلِمَةً طَيِّبَةً", example: { en: "Good word", ur: "پاکیزہ کلمہ" }, effect: "Indefinite for vastness - encompasses all good" },
      { feature: "أَصْلُهَا ثَابِتٌ", example: { en: "Root firm", ur: "جڑ مضبوط" }, effect: "Passive participle - established permanently" },
      { feature: "لَظَلُومٌ كَفَّارٌ", example: { en: "Very unjust, very ungrateful", ur: "بڑا ظالم، بڑا ناشکرا" }, effect: "Intensive forms (فَعُول and فَعَّار) emphasizing human tendency" },
      { feature: "تَشْخَصُ فِيهِ الْأَبْصَارُ", example: { en: "Eyes stare", ur: "آنکھیں پھٹی رہ جائیں" }, effect: "Visual imagery of terror" },
      { feature: "وَأَفْئِدَتُهُمْ هَوَاءٌ", example: { en: "Hearts are empty", ur: "دل خالی ہیں" }, effect: "Metaphor - hearts become void from fear" }
    ]
  },

  ibrahimPrayers: {
    note: { en: "The surah contains seven distinct prayers of Ibrahim, making it a masterclass in supplication: (1) Safety for Makkah, (2) Protection from idolatry, (3) Followers to join him, (4) Hearts to incline to Makkah, (5) Provision for family, (6) Establishment of prayer, (7) Forgiveness. Each prayer shows his priorities: security, monotheism, community, spiritual attraction, material needs, worship, and mercy.", ur: "سورت میں ابراہیم کی سات الگ الگ دعائیں ہیں، جو دعا کا شاہکار بناتی ہیں: (1) مکہ کی سلامتی، (2) بت پرستی سے حفاظت، (3) پیروکاروں کا ساتھ، (4) دلوں کا مکہ کی طرف مائل ہونا، (5) خاندان کی رزق، (6) نماز کی اقامت، (7) مغفرت۔ ہر دعا ان کی ترجیحات ظاہر کرتی ہے: امن، توحید، جماعت، روحانی کشش، مادی ضروریات، عبادت اور رحمت۔" }
  },

  scientificReferences: {
    notes: [
      { verse: "14:24", topic: "Tree root systems", note: "Deep roots provide stability - faith needs deep conviction" },
      { verse: "14:32", topic: "Ship navigation", note: "Early recognition of maritime travel as blessing" },
      { verse: "14:33", topic: "Sun and moon cycles", note: "Continuous (دَائِبَيْنِ) - unceasing celestial motion" },
      { verse: "14:34", topic: "Uncountable blessings", note: "Modern science reveals countless bodily processes, cells, etc." },
      { verse: "14:48", topic: "Cosmic transformation", note: "Universe will be recreated - modern cosmology confirms universe had beginning" }
    ]
  }
};

export default ONTOLOGY;
