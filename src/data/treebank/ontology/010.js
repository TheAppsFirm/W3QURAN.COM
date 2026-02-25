/**
 * Surah Yunus (10) - Ontology of Quranic Concepts
 * Jonah
 * Theme: Quran's divine origin, Prophetic stories (Musa, Nuh, Yunus), Tawheed, Day of Judgment
 */

export const ONTOLOGY = {
  surahId: 10,
  surahName: "Yunus",
  surahNameArabic: "يونس",
  revelationType: "Makki",
  totalAyahs: 109,

  categories: {
    quranDivineOrigin: {
      color: '#EF4444',
      icon: 'Users',
      name: "Divine Origin of Quran",
      nameArabic: "المصدر الإلهي للقرآن",
      concepts: [
        { term: "الر تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ", meaning: { en: "Alif Lam Ra - These are verses of the Wise Book", ur: "الف لام را - یہ حکمت والی کتاب کی آیات ہیں" }, explanation: { en: "Opening declaration of Quran's wisdom", ur: "قرآن کی حکمت کا ابتدائی اعلان" }, verseRef: "10:1" },
        { term: "أَكَانَ لِلنَّاسِ عَجَبًا أَنْ أَوْحَيْنَا", meaning: { en: "Is it wonder for people that We revealed?", ur: "کیا لوگوں کو تعجب ہوا کہ ہم نے وحی بھیجی؟" }, explanation: { en: "Addressing disbelief in revelation", ur: "وحی پر بے اعتقادی کا جواب" }, verseRef: "10:2" },
        { term: "يَفْتَرِي", meaning: { en: "He invented it (accusation)", ur: "اس نے یہ گھڑ لیا ہے (الزام)" }, explanation: { en: "Disbelievers' claim", ur: "کافروں کا دعویٰ" }, verseRef: "10:37" },
        { term: "مَا كَانَ هَٰذَا الْقُرْآنُ أَن يُفْتَرَىٰ", meaning: { en: "This Quran could not have been invented", ur: "یہ قرآن ایسا نہیں کہ اللہ کے سوا کوئی گھڑ لے" }, explanation: { en: "Defense of Quran's authenticity", ur: "قرآن کی صداقت کا دفاع" }, verseRef: "10:37" },
        { term: "فَأْتُوا بِسُورَةٍ مِّثْلِهِ", meaning: { en: "Bring a surah like it", ur: "اس جیسی ایک سورت تو لے آؤ" }, explanation: { en: "Challenge to produce similar text", ur: "اس جیسی تحریر لانے کا چیلنج" }, verseRef: "10:38" },
        { term: "بَلْ كَذَّبُوا بِمَا لَمْ يُحِيطُوا بِعِلْمِهِ", meaning: { en: "They denied what they could not encompass in knowledge", ur: "انہوں نے اس چیز کو جھٹلایا جس کا علم ان کے احاطے میں نہ آ سکا" }, explanation: { en: "Root of rejection: lack of understanding", ur: "انکار کی اصل وجہ: سمجھ کی کمی" }, verseRef: "10:39" },
        { term: "نَبَأُ الرُّسُلِ مَا نُثَبِّتُ بِهِ فُؤَادَكَ", meaning: { en: "Stories of messengers to strengthen your heart", ur: "رسولوں کے واقعات جن سے ہم آپ کا دل مضبوط کرتے ہیں" }, explanation: { en: "Purpose of prophetic narratives", ur: "انبیاء کے قصوں کا مقصد" }, verseRef: "10:57" }
      ]
    },

    tawheedSigns: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Signs of Allah's Oneness",
      nameArabic: "آيات التوحيد",
      concepts: [
        { term: "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "Your Lord is Allah who created heavens and earth", ur: "بے شک تمہارا رب اللہ ہے جس نے آسمانوں اور زمین کو پیدا کیا" }, explanation: { en: "Creator of universe", ur: "کائنات کا خالق" }, verseRef: "10:3" },
        { term: "فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ", meaning: { en: "In six days, then established on Throne", ur: "چھ دنوں میں، پھر عرش پر مستوی ہوا" }, explanation: { en: "Creation timeline and sovereignty", ur: "تخلیق کی مدت اور حاکمیت" }, verseRef: "10:3" },
        { term: "يُدَبِّرُ الْأَمْرَ", meaning: { en: "He arranges all affairs", ur: "وہ تمام امور کی تدبیر کرتا ہے" }, explanation: { en: "Divine management of universe", ur: "کائنات کی الٰہی تدبیر" }, verseRef: "10:3" },
        { term: "هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً", meaning: { en: "He made the sun a light", ur: "وہی ہے جس نے سورج کو روشن بنایا" }, explanation: { en: "Sun as source of light", ur: "سورج بطور روشنی کا منبع" }, verseRef: "10:5" },
        { term: "وَالْقَمَرَ نُورًا", meaning: { en: "And the moon a reflected light", ur: "اور چاند کو منعکس روشنی والا بنایا" }, explanation: { en: "Moon reflects light (scientific accuracy)", ur: "چاند روشنی منعکس کرتا ہے (سائنسی درستگی)" }, verseRef: "10:5" },
        { term: "وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ", meaning: { en: "Determined phases to know years", ur: "اس کی منزلیں مقرر کیں تاکہ تم سالوں کا حساب جان سکو" }, explanation: { en: "Lunar calendar system", ur: "قمری تقویم کا نظام" }, verseRef: "10:5" },
        { term: "إِنَّ فِي اخْتِلَافِ اللَّيْلِ وَالنَّهَارِ", meaning: { en: "In alternation of night and day", ur: "رات اور دن کے بدلنے میں" }, explanation: { en: "Day-night cycle as sign", ur: "رات دن کی تبدیلی بطور نشانی" }, verseRef: "10:6" },
        { term: "هُوَ الَّذِي يُسَيِّرُكُمْ فِي الْبَرِّ وَالْبَحْرِ", meaning: { en: "He enables you to travel on land and sea", ur: "وہی ہے جو تمہیں خشکی اور سمندر میں سفر کراتا ہے" }, explanation: { en: "Divine provision for travel", ur: "سفر کے لیے الٰہی انتظام" }, verseRef: "10:22" }
      ]
    },

    storyMusa: {
      color: '#EF4444',
      icon: 'Users',
      name: "Story of Musa and Pharaoh",
      nameArabic: "قصة موسى وفرعون",
      concepts: [
        { term: "ثُمَّ بَعَثْنَا مِن بَعْدِهِم مُّوسَىٰ وَهَارُونَ", meaning: { en: "Then We sent Musa and Harun after them", ur: "پھر ہم نے ان کے بعد موسیٰ اور ہارون کو بھیجا" }, explanation: { en: "Mission of Musa and Harun", ur: "موسیٰ اور ہارون کی بعثت" }, verseRef: "10:75" },
        { term: "إِلَىٰ فِرْعَوْنَ وَمَلَئِهِ بِآيَاتِنَا", meaning: { en: "To Pharaoh and his chiefs with Our signs", ur: "فرعون اور اس کے درباریوں کے پاس ہماری نشانیوں کے ساتھ" }, explanation: { en: "Target audience: Pharaoh's court", ur: "مخاطب: فرعون کا دربار" }, verseRef: "10:75" },
        { term: "فَاسْتَكْبَرُوا وَكَانُوا قَوْمًا مُّجْرِمِينَ", meaning: { en: "They were arrogant criminal people", ur: "انہوں نے تکبر کیا اور وہ مجرم لوگ تھے" }, explanation: { en: "Response: arrogance and crime", ur: "ردعمل: تکبر اور جرم" }, verseRef: "10:75" },
        { term: "أَجِئْتَنَا لِتَلْفِتَنَا عَمَّا وَجَدْنَا عَلَيْهِ آبَاءَنَا", meaning: { en: "Have you come to turn us from our fathers' way?", ur: "کیا تم ہمیں اس راستے سے پھیرنے آئے ہو جس پر ہم نے اپنے باپ دادا کو پایا؟" }, explanation: { en: "Blind following of ancestors", ur: "باپ دادا کی اندھی تقلید" }, verseRef: "10:78" },
        { term: "السِّحْرُ", meaning: { en: "Magic (accusation)", ur: "جادو (الزام)" }, explanation: { en: "Pharaoh called miracles magic", ur: "فرعون نے معجزات کو جادو کہا" }, verseRef: "10:76-77" },
        { term: "فَلَمَّا أَلْقَوْا قَالَ مُوسَىٰ مَا جِئْتُم بِهِ السِّحْرُ", meaning: { en: "When they threw, Musa said: What you brought is magic", ur: "جب انہوں نے ڈالا تو موسیٰ نے کہا: جو تم لائے ہو یہ جادو ہے" }, explanation: { en: "Musa's response to magicians", ur: "جادوگروں کو موسیٰ کا جواب" }, verseRef: "10:81" },
        { term: "فَآمَنَ لِمُوسَىٰ إِلَّا ذُرِّيَّةٌ مِّن قَوْمِهِ", meaning: { en: "None believed Musa except offspring of his people", ur: "موسیٰ پر ان کی قوم کی ایک نسل کے سوا کوئی ایمان نہ لایا" }, explanation: { en: "Limited believers due to fear", ur: "خوف کی وجہ سے ایمان لانے والے محدود رہے" }, verseRef: "10:83" },
        { term: "وَجَاوَزْنَا بِبَنِي إِسْرَائِيلَ الْبَحْرَ", meaning: { en: "We took Children of Israel across the sea", ur: "ہم نے بنی اسرائیل کو سمندر پار کرا دیا" }, explanation: { en: "Crossing the Red Sea", ur: "بحر احمر عبور کرنا" }, verseRef: "10:90" },
        { term: "فَأَتْبَعَهُمْ فِرْعَوْنُ وَجُنُودُهُ بَغْيًا وَعَدْوًا", meaning: { en: "Pharaoh and his soldiers pursued them wrongfully", ur: "فرعون اور اس کے لشکر نے ظلم اور زیادتی سے ان کا پیچھا کیا" }, explanation: { en: "Pharaoh's pursuit", ur: "فرعون کا تعاقب" }, verseRef: "10:90" },
        { term: "آلْآنَ وَقَدْ عَصَيْتَ قَبْلُ", meaning: { en: "Now? While you disobeyed before?", ur: "اب؟ جبکہ تو نے پہلے نافرمانی کی تھی؟" }, explanation: { en: "Pharaoh's deathbed faith rejected", ur: "فرعون کا وقت مرگ پر ایمان مسترد ہوا" }, verseRef: "10:91" },
        { term: "فَالْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ", meaning: { en: "Today We will save your body", ur: "آج ہم تیرے بدن کو بچائیں گے" }, explanation: { en: "Pharaoh's body preserved as sign", ur: "فرعون کا جسم بطور نشانی محفوظ ہوا" }, verseRef: "10:92" },
        { term: "لِتَكُونَ لِمَنْ خَلْفَكَ آيَةً", meaning: { en: "To be a sign for those after you", ur: "تاکہ تیرے بعد والوں کے لیے نشانی ہو" }, explanation: { en: "His mummy as historical evidence", ur: "اس کی ممی بطور تاریخی شہادت" }, verseRef: "10:92" }
      ]
    },

    storyNuh: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Story of Nuh",
      nameArabic: "قصة نوح",
      concepts: [
        { term: "وَاتْلُ عَلَيْهِمْ نَبَأَ نُوحٍ", meaning: { en: "Recite to them the story of Nuh", ur: "ان کو نوح کا واقعہ سنا دو" }, explanation: { en: "Command to narrate Nuh's story", ur: "نوح کا قصہ بیان کرنے کا حکم" }, verseRef: "10:71" },
        { term: "يَا قَوْمِ إِن كَانَ كَبُرَ عَلَيْكُم مَّقَامِي وَتَذْكِيرِي بِآيَاتِ اللَّهِ", meaning: { en: "O my people, if my presence and reminding offends you", ur: "اے میری قوم! اگر تمہیں میرا کھڑا ہونا اور اللہ کی آیات سے یاد دہانی بھاری لگتی ہے" }, explanation: { en: "Nuh addresses hostility", ur: "نوح کا دشمنی کا جواب" }, verseRef: "10:71" },
        { term: "فَعَلَى اللَّهِ تَوَكَّلْتُ", meaning: { en: "Upon Allah I rely", ur: "میں نے اللہ پر توکل کیا" }, explanation: { en: "Tawakkul of Nuh", ur: "نوح کا توکل" }, verseRef: "10:71" },
        { term: "فَأَجْمِعُوا أَمْرَكُمْ وَشُرَكَاءَكُمْ", meaning: { en: "Gather your affair and your partners", ur: "اپنا معاملہ اور اپنے شریکوں کو جمع کر لو" }, explanation: { en: "Challenge to opponents", ur: "مخالفین کو چیلنج" }, verseRef: "10:71" },
        { term: "فَكَذَّبُوهُ فَنَجَّيْنَاهُ وَمَن مَّعَهُ فِي الْفُلْكِ", meaning: { en: "They denied him, so We saved him and those with him in the ship", ur: "انہوں نے اسے جھٹلایا تو ہم نے اسے اور اس کے ساتھیوں کو کشتی میں بچا لیا" }, explanation: { en: "Salvation through the Ark", ur: "کشتی کے ذریعے نجات" }, verseRef: "10:73" },
        { term: "وَأَغْرَقْنَا الَّذِينَ كَذَّبُوا بِآيَاتِنَا", meaning: { en: "And We drowned those who denied Our signs", ur: "اور ہم نے ان لوگوں کو غرق کر دیا جنہوں نے ہماری نشانیوں کو جھٹلایا" }, explanation: { en: "Punishment by flood", ur: "سیلاب کے ذریعے سزا" }, verseRef: "10:73" }
      ]
    },

    storyYunus: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Story of Yunus",
      nameArabic: "قصة يونس",
      concepts: [
        { term: "فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا إِلَّا قَوْمَ يُونُسَ", meaning: { en: "If only a city had believed and benefited - except people of Yunus", ur: "کوئی بستی ایسی کیوں نہ ہوئی جو ایمان لاتی اور اس کا ایمان اسے فائدہ دیتا - سوائے قوم یونس کے" }, explanation: { en: "Unique case: entire city repented", ur: "منفرد واقعہ: پوری بستی نے توبہ کی" }, verseRef: "10:98" },
        { term: "لَمَّا آمَنُوا كَشَفْنَا عَنْهُمْ عَذَابَ الْخِزْيِ", meaning: { en: "When they believed, We removed disgraceful punishment", ur: "جب وہ ایمان لائے تو ہم نے ان سے ذلت کا عذاب ہٹا دیا" }, explanation: { en: "Collective repentance accepted", ur: "اجتماعی توبہ قبول ہوئی" }, verseRef: "10:98" },
        { term: "وَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ", meaning: { en: "And gave them enjoyment for a time", ur: "اور ایک مدت تک انہیں فائدہ اٹھانے دیا" }, explanation: { en: "Respite granted to believers", ur: "ایمان لانے والوں کو مہلت دی گئی" }, verseRef: "10:98" }
      ]
    },

    humanNature: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      concepts: [
        { term: "وَإِذَا مَسَّ الْإِنسَانَ الضُّرُّ دَعَانَا", meaning: { en: "When harm touches man, he calls upon Us", ur: "جب انسان کو تکلیف پہنچتی ہے تو وہ ہمیں پکارتا ہے" }, explanation: { en: "Turning to Allah in hardship", ur: "مصیبت میں اللہ کی طرف رجوع" }, verseRef: "10:12" },
        { term: "فَلَمَّا كَشَفْنَا عَنْهُ ضُرَّهُ مَرَّ", meaning: { en: "When We remove his hardship, he passes on", ur: "جب ہم اس کی تکلیف دور کر دیتے ہیں تو وہ چلا جاتا ہے" }, explanation: { en: "Forgetting Allah after relief", ur: "آرام ملنے کے بعد اللہ کو بھول جانا" }, verseRef: "10:12" },
        { term: "كَأَن لَّمْ يَدْعُنَا إِلَىٰ ضُرٍّ مَّسَّهُ", meaning: { en: "As if he never called Us for hardship", ur: "گویا اس نے کبھی کسی تکلیف میں ہمیں پکارا ہی نہ تھا" }, explanation: { en: "Human ingratitude", ur: "انسان کی ناشکری" }, verseRef: "10:12" },
        { term: "هُوَ الَّذِي يُسَيِّرُكُمْ فِي الْبَرِّ وَالْبَحْرِ", meaning: { en: "He enables you to travel land and sea", ur: "وہی ہے جو تمہیں خشکی اور سمندر میں چلاتا ہے" }, explanation: { en: "Divine provision for journey", ur: "سفر کے لیے الٰہی انتظام" }, verseRef: "10:22" },
        { term: "حَتَّىٰ إِذَا كُنتُمْ فِي الْفُلْكِ وَجَرَيْنَ بِهِم بِرِيحٍ طَيِّبَةٍ", meaning: { en: "Until you are in ships sailing with good wind", ur: "یہاں تک کہ جب تم کشتیوں میں ہوتے ہو اور وہ اچھی ہوا سے چلتی ہیں" }, explanation: { en: "Smooth sailing initially", ur: "ابتدا میں بخیریت سفر" }, verseRef: "10:22" },
        { term: "وَجَاءَتْهَا رِيحٌ عَاصِفٌ", meaning: { en: "Then comes a stormy wind", ur: "پھر تیز آندھی آ جاتی ہے" }, explanation: { en: "Sudden trial at sea", ur: "سمندر میں اچانک آزمائش" }, verseRef: "10:22" },
        { term: "دَعَوُا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ", meaning: { en: "They call Allah with sincere faith", ur: "وہ اللہ کو خالص عبادت کے ساتھ پکارتے ہیں" }, explanation: { en: "Sincerity in crisis", ur: "مصیبت میں اخلاص" }, verseRef: "10:22" },
        { term: "فَلَمَّا أَنجَاهُمْ إِذَا هُمْ يَبْغُونَ فِي الْأَرْضِ", meaning: { en: "When He saves them, they transgress on earth", ur: "جب اللہ انہیں بچا لیتا ہے تو وہ زمین میں ظلم کرنے لگتے ہیں" }, explanation: { en: "Return to sin after salvation", ur: "نجات کے بعد گناہ کی طرف واپسی" }, verseRef: "10:23" }
      ]
    },

    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      concepts: [
        { term: "إِلَيْهِ مَرْجِعُكُمْ جَمِيعًا", meaning: { en: "To Him is your return, all of you", ur: "اسی کی طرف تم سب کو لوٹنا ہے" }, explanation: { en: "Universal return to Allah", ur: "سب کی اللہ کی طرف واپسی" }, verseRef: "10:4" },
        { term: "وَعْدَ اللَّهِ حَقًّا", meaning: { en: "Promise of Allah is true", ur: "اللہ کا وعدہ سچا ہے" }, explanation: { en: "Certainty of resurrection", ur: "قیامت کی یقینی حقیقت" }, verseRef: "10:4" },
        { term: "إِنَّهُ يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ", meaning: { en: "He originates creation then repeats it", ur: "وہی مخلوق کو پہلی بار پیدا کرتا ہے پھر دوبارہ پیدا کرے گا" }, explanation: { en: "Allah creates and resurrects", ur: "اللہ تخلیق اور دوبارہ اٹھانے والا ہے" }, verseRef: "10:4" },
        { term: "لِيَجْزِيَ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ بِالْقِسْطِ", meaning: { en: "To reward believers with justice", ur: "تاکہ ایمان والوں اور نیک عمل کرنے والوں کو انصاف سے جزا دے" }, explanation: { en: "Fair recompense for believers", ur: "ایمان والوں کے لیے منصفانہ بدلہ" }, verseRef: "10:4" },
        { term: "وَالَّذِينَ كَفَرُوا لَهُمْ شَرَابٌ مِّنْ حَمِيمٍ", meaning: { en: "Disbelievers will have boiling drink", ur: "اور جن لوگوں نے کفر کیا ان کے لیے کھولتا ہوا پانی ہے" }, explanation: { en: "Punishment for disbelief", ur: "کفر کی سزا" }, verseRef: "10:4" },
        { term: "يَوْمَ يَحْشُرُهُمْ كَأَن لَّمْ يَلْبَثُوا إِلَّا سَاعَةً", meaning: { en: "Day He gathers them as if they stayed only an hour", ur: "جس دن وہ انہیں جمع کرے گا گویا وہ ایک گھڑی سے زیادہ نہیں ٹھہرے تھے" }, explanation: { en: "Life seems short in retrospect", ur: "دنیا کی زندگی پیچھے مُڑ کر دیکھیں تو مختصر معلوم ہوگی" }, verseRef: "10:45" },
        { term: "يَتَعَارَفُونَ بَيْنَهُمْ", meaning: { en: "They will recognize each other", ur: "وہ آپس میں ایک دوسرے کو پہچانیں گے" }, explanation: { en: "Recognition on Judgment Day", ur: "قیامت کے دن ایک دوسرے کی پہچان" }, verseRef: "10:45" },
        { term: "قَدْ خَسِرَ الَّذِينَ كَذَّبُوا بِلِقَاءِ اللَّهِ", meaning: { en: "Lost are those who denied meeting Allah", ur: "یقیناً وہ لوگ خسارے میں رہے جنہوں نے اللہ سے ملاقات کو جھٹلایا" }, explanation: { en: "Ultimate loss of deniers", ur: "منکرین کا حتمی خسارہ" }, verseRef: "10:45" }
      ]
    },

    guidanceAndMisguidance: {
      color: '#10B981',
      icon: 'Book',
      name: "Guidance and Misguidance",
      nameArabic: "الهداية والضلال",
      concepts: [
        { term: "مَن يَهْدِ اللَّهُ فَهُوَ الْمُهْتَدِي", meaning: { en: "Whoever Allah guides is truly guided", ur: "جسے اللہ ہدایت دے وہی ہدایت پانے والا ہے" }, explanation: { en: "Source of true guidance", ur: "حقیقی ہدایت کا سرچشمہ" }, verseRef: "10:35" },
        { term: "وَمَن يُضْلِلْ فَلَن تَجِدَ لَهُ وَلِيًّا مُّرْشِدًا", meaning: { en: "Whoever He misguides, no guiding friend", ur: "اور جسے وہ گمراہ کرے اسے کوئی رہنمائی کرنے والا دوست نہیں ملے گا" }, explanation: { en: "Misguidance as consequence", ur: "گمراہی بطور نتیجہ" }, verseRef: "10:35" },
        { term: "قُلْ هَلْ مِن شُرَكَائِكُم مَّن يَهْدِي إِلَى الْحَقِّ", meaning: { en: "Say: Can any of your partners guide to truth?", ur: "کہو: کیا تمہارے شریکوں میں سے کوئی حق کی طرف ہدایت دے سکتا ہے؟" }, explanation: { en: "Challenge to polytheists", ur: "مشرکین کو چیلنج" }, verseRef: "10:35" },
        { term: "أَفَمَن يَهْدِي إِلَى الْحَقِّ أَحَقُّ أَن يُتَّبَعَ", meaning: { en: "Is one who guides to truth more worthy to be followed?", ur: "کیا حق کی طرف ہدایت دینے والا زیادہ حقدار ہے کہ اس کی اتباع کی جائے؟" }, explanation: { en: "Logical argument for following Allah", ur: "اللہ کی اتباع کے لیے عقلی دلیل" }, verseRef: "10:35" },
        { term: "إِلَّا الظَّنَّ وَإِنَّ الظَّنَّ لَا يُغْنِي مِنَ الْحَقِّ شَيْئًا", meaning: { en: "Only assumption, and assumption avails nothing against truth", ur: "صرف گمان کی پیروی کرتے ہیں اور گمان حق کے مقابلے میں کچھ کام نہیں آتا" }, explanation: { en: "Conjecture vs. certainty", ur: "گمان بمقابلہ یقین" }, verseRef: "10:36" }
      ]
    },

    propheticConsole: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Consolation to the Prophet",
      nameArabic: "تسلية النبي",
      concepts: [
        { term: "وَلَا يَحْزُنكَ قَوْلُهُمْ", meaning: { en: "Let not their speech grieve you", ur: "ان کی باتیں آپ کو غمگین نہ کریں" }, explanation: { en: "Comfort against mockery", ur: "تمسخر کے خلاف تسلی" }, verseRef: "10:65" },
        { term: "إِنَّ الْعِزَّةَ لِلَّهِ جَمِيعًا", meaning: { en: "Indeed, all honor belongs to Allah", ur: "بے شک تمام عزت اللہ ہی کے لیے ہے" }, explanation: { en: "True source of honor", ur: "عزت کا حقیقی سرچشمہ" }, verseRef: "10:65" },
        { term: "وَإِن كَذَّبُوكَ فَقُل لِّي عَمَلِي وَلَكُمْ عَمَلُكُمْ", meaning: { en: "If they deny you, say: My deeds are mine, yours are yours", ur: "اگر وہ آپ کو جھٹلائیں تو کہہ دیں: میرا عمل میرے لیے اور تمہارا عمل تمہارے لیے" }, explanation: { en: "Separation of accountability", ur: "جوابدہی کی علیحدگی" }, verseRef: "10:41" },
        { term: "أَنتُم بَرِيئُونَ مِمَّا أَعْمَلُ وَأَنَا بَرِيءٌ مِّمَّا تَعْمَلُونَ", meaning: { en: "You are free of what I do, I am free of what you do", ur: "تم میرے عمل سے بری ہو اور میں تمہارے عمل سے بری ہوں" }, explanation: { en: "Individual responsibility", ur: "انفرادی ذمہ داری" }, verseRef: "10:41" },
        { term: "فَإِن تَوَلَّوْا فَمَا أَرْسَلْنَاكَ عَلَيْهِمْ حَفِيظًا", meaning: { en: "If they turn away, We did not send you as guardian over them", ur: "اگر وہ منہ موڑیں تو ہم نے آپ کو ان پر نگہبان بنا کر نہیں بھیجا" }, explanation: { en: "Prophet's role is to convey, not force", ur: "نبی کا کام پیغام پہنچانا ہے، زبردستی نہیں" }, verseRef: "10:108" },
        { term: "وَاصْبِرْ حَتَّىٰ يَحْكُمَ اللَّهُ", meaning: { en: "Be patient until Allah judges", ur: "صبر کریں یہاں تک کہ اللہ فیصلہ فرمائے" }, explanation: { en: "Command for patience", ur: "صبر کا حکم" }, verseRef: "10:109" }
      ]
    },

    rejectersArguments: {
      color: '#10B981',
      icon: 'Book',
      name: "Arguments of Rejecters",
      nameArabic: "حجج المكذبين",
      concepts: [
        { term: "لَوْلَا أُنزِلَ عَلَيْهِ آيَةٌ مِّن رَّبِّهِ", meaning: { en: "Why is a sign not sent down from his Lord?", ur: "ان پر ان کے رب کی طرف سے کوئی نشانی کیوں نہیں اتری؟" }, explanation: { en: "Demand for miraculous sign", ur: "معجزاتی نشانی کا مطالبہ" }, verseRef: "10:20" },
        { term: "ائْتِ بِقُرْآنٍ غَيْرِ هَٰذَا أَوْ بَدِّلْهُ", meaning: { en: "Bring a different Quran or change it", ur: "اس کے سوا کوئی اور قرآن لے آؤ یا اسے بدل دو" }, explanation: { en: "Request to alter revelation", ur: "وحی میں تبدیلی کا مطالبہ" }, verseRef: "10:15" },
        { term: "قُلْ مَا يَكُونُ لِي أَنْ أُبَدِّلَهُ مِن تِلْقَاءِ نَفْسِي", meaning: { en: "Say: I cannot change it of my own accord", ur: "کہہ دو: مجھے یہ حق نہیں کہ اسے اپنی طرف سے بدل دوں" }, explanation: { en: "Prophet cannot modify revelation", ur: "نبی وحی میں ترمیم نہیں کر سکتے" }, verseRef: "10:15" },
        { term: "إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰ إِلَيَّ", meaning: { en: "I only follow what is revealed to me", ur: "میں صرف اسی کی پیروی کرتا ہوں جو مجھ پر وحی کیا جاتا ہے" }, explanation: { en: "Complete obedience to revelation", ur: "وحی کی مکمل اطاعت" }, verseRef: "10:15" },
        { term: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ", meaning: { en: "When will this promise be, if you are truthful?", ur: "اور وہ کہتے ہیں یہ وعدہ کب پورا ہوگا اگر تم سچے ہو؟" }, explanation: { en: "Mockery of Day of Judgment", ur: "یوم قیامت کا مذاق اڑانا" }, verseRef: "10:48" }
      ]
    },

    duaAndWorship: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Supplication and Worship",
      nameArabic: "الدعاء والعبادة",
      concepts: [
        { term: "قُلْ أَرَأَيْتُمْ إِنْ أَتَاكُمْ عَذَابُهُ بَيَاتًا أَوْ نَهَارًا", meaning: { en: "Say: Have you seen if His punishment came by night or day?", ur: "کہو: بتاؤ اگر اللہ کا عذاب تم پر رات کو یا دن کو آ جائے؟" }, explanation: { en: "Sudden punishment warning", ur: "اچانک عذاب کی تنبیہ" }, verseRef: "10:50" },
        { term: "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا", meaning: { en: "Say: In Allah's bounty and mercy, let them rejoice", ur: "کہو: اللہ کے فضل اور اس کی رحمت پر خوشی منائیں" }, explanation: { en: "True source of joy", ur: "خوشی کا حقیقی سرچشمہ" }, verseRef: "10:58" },
        { term: "هُوَ خَيْرٌ مِّمَّا يَجْمَعُونَ", meaning: { en: "It is better than what they accumulate", ur: "یہ ان چیزوں سے بہتر ہے جو وہ جمع کرتے ہیں" }, explanation: { en: "Faith over worldly wealth", ur: "ایمان دنیاوی دولت سے بہتر ہے" }, verseRef: "10:58" },
        { term: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", meaning: { en: "Indeed, allies of Allah - no fear upon them nor grief", ur: "سن لو! بے شک اللہ کے دوستوں پر نہ کوئی خوف ہے اور نہ وہ غمگین ہوں گے" }, explanation: { en: "Security for friends of Allah", ur: "اللہ کے دوستوں کے لیے امان" }, verseRef: "10:62" },
        { term: "الَّذِينَ آمَنُوا وَكَانُوا يَتَّقُونَ", meaning: { en: "Those who believed and had taqwa", ur: "جو ایمان لائے اور تقویٰ اختیار کرتے رہے" }, explanation: { en: "Characteristics of Allah's allies", ur: "اللہ کے دوستوں کی صفات" }, verseRef: "10:63" },
        { term: "لَهُمُ الْبُشْرَىٰ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ", meaning: { en: "For them is good news in this life and the Hereafter", ur: "ان کے لیے دنیا کی زندگی میں بھی خوشخبری ہے اور آخرت میں بھی" }, explanation: { en: "Glad tidings for believers", ur: "ایمان والوں کے لیے بشارت" }, verseRef: "10:64" }
      ]
    },

    falseDeitiesRefuted: {
      color: '#10B981',
      icon: 'Book',
      name: "Refutation of False Deities",
      nameArabic: "إبطال الآلهة الباطلة",
      concepts: [
        { term: "وَيَعْبُدُونَ مِن دُونِ اللَّهِ مَا لَا يَضُرُّهُمْ وَلَا يَنفَعُهُمْ", meaning: { en: "They worship besides Allah what neither harms nor benefits", ur: "وہ اللہ کے سوا ایسی چیزوں کی عبادت کرتے ہیں جو نہ نقصان پہنچا سکیں نہ فائدہ" }, explanation: { en: "Uselessness of idols", ur: "بتوں کی بے فائدگی" }, verseRef: "10:18" },
        { term: "وَيَقُولُونَ هَٰؤُلَاءِ شُفَعَاؤُنَا عِندَ اللَّهِ", meaning: { en: "They say: These are our intercessors with Allah", ur: "اور کہتے ہیں کہ یہ اللہ کے پاس ہمارے سفارشی ہیں" }, explanation: { en: "False intercession belief", ur: "جھوٹی شفاعت کا عقیدہ" }, verseRef: "10:18" },
        { term: "قُلْ أَتُنَبِّئُونَ اللَّهَ بِمَا لَا يَعْلَمُ", meaning: { en: "Say: Do you inform Allah of what He does not know?", ur: "کہو: کیا تم اللہ کو وہ بات بتاتے ہو جو وہ نہیں جانتا؟" }, explanation: { en: "Absurdity of their claims", ur: "ان کے دعووں کی بے ہودگی" }, verseRef: "10:18" },
        { term: "قُلْ مَن يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: { en: "Say: Who provides for you from heaven and earth?", ur: "کہو: آسمان اور زمین سے تمہیں رزق کون دیتا ہے؟" }, explanation: { en: "Challenge: who is the Provider?", ur: "چیلنج: رزق دینے والا کون ہے؟" }, verseRef: "10:31" },
        { term: "أَمَّن يَمْلِكُ السَّمْعَ وَالْأَبْصَارَ", meaning: { en: "Or who controls hearing and sight?", ur: "یا کان اور آنکھوں کا مالک کون ہے؟" }, explanation: { en: "Allah controls senses", ur: "اللہ حواس کا مالک ہے" }, verseRef: "10:31" },
        { term: "وَمَن يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ", meaning: { en: "Who brings the living from the dead?", ur: "زندہ کو مردے سے کون نکالتا ہے؟" }, explanation: { en: "Life from death", ur: "موت سے زندگی" }, verseRef: "10:31" },
        { term: "وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ", meaning: { en: "And brings the dead from the living?", ur: "اور مردے کو زندے سے کون نکالتا ہے؟" }, explanation: { en: "Death from life", ur: "زندگی سے موت" }, verseRef: "10:31" },
        { term: "وَمَن يُدَبِّرُ الْأَمْرَ", meaning: { en: "And who arranges every matter?", ur: "اور تمام معاملات کی تدبیر کون کرتا ہے؟" }, explanation: { en: "Divine management", ur: "الٰہی تدبیر" }, verseRef: "10:31" },
        { term: "فَسَيَقُولُونَ اللَّهُ", meaning: { en: "They will say: Allah", ur: "وہ کہیں گے: اللہ" }, explanation: { en: "Even polytheists admit Allah's role", ur: "مشرک بھی اللہ کے کردار کا اعتراف کرتے ہیں" }, verseRef: "10:31" },
        { term: "فَقُلْ أَفَلَا تَتَّقُونَ", meaning: { en: "Say: Will you not then fear Him?", ur: "کہو: پھر کیا تم ڈرتے نہیں؟" }, explanation: { en: "Logical conclusion: fear Allah alone", ur: "منطقی نتیجہ: صرف اللہ سے ڈرو" }, verseRef: "10:31" }
      ]
    },

    quranAsHealing: {
      color: '#10B981',
      icon: 'Book',
      name: "Quran as Healing",
      nameArabic: "القرآن شفاء",
      concepts: [
        { term: "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ", meaning: { en: "O people, there has come to you advice from your Lord", ur: "اے لوگو! تمہارے پاس تمہارے رب کی طرف سے نصیحت آ گئی ہے" }, explanation: { en: "Quran as admonition", ur: "قرآن بطور نصیحت" }, verseRef: "10:57" },
        { term: "وَشِفَاءٌ لِّمَا فِي الصُّدُورِ", meaning: { en: "And healing for what is in the chests", ur: "اور سینوں میں جو بیماریاں ہیں ان کے لیے شفا ہے" }, explanation: { en: "Spiritual cure", ur: "روحانی علاج" }, verseRef: "10:57" },
        { term: "وَهُدًى وَرَحْمَةٌ لِّلْمُؤْمِنِينَ", meaning: { en: "And guidance and mercy for believers", ur: "اور ایمان والوں کے لیے ہدایت اور رحمت ہے" }, explanation: { en: "Guidance and mercy combined", ur: "ہدایت اور رحمت کا مجموعہ" }, verseRef: "10:57" }
      ]
    }
  },

  relationships: [
    { from: "قصة نوح", to: "قصة موسى", type: "sequence", description: { en: "Prophets sent in succession - rejection pattern repeats", ur: "انبیاء یکے بعد دیگرے بھیجے گئے - انکار کا سلسلہ دہرایا گیا" } },
    { from: "قصة موسى", to: "قصة يونس", type: "contrast", description: { en: "Pharaoh's people destroyed vs Yunus's people saved", ur: "فرعون کی قوم تباہ ہوئی بمقابلہ یونس کی قوم بچا لی گئی" } },
    { from: "آيات التوحيد", to: "إبطال الآلهة", type: "causation", description: { en: "Signs prove Tawheed → false gods refuted", ur: "نشانیاں توحید ثابت کرتی ہیں ← جھوٹے معبود رد ہوئے" } },
    { from: "طبيعة الإنسان", to: "يوم القيامة", type: "warning", description: { en: "Human ingratitude → accountability on Judgment Day", ur: "انسان کی ناشکری ← قیامت کے دن حساب" } },
    { from: "الشمس ضياء", to: "القمر نوراً", type: "distinction", description: { en: "Sun = source of light (ضياء); Moon = reflected light (نور)", ur: "سورج = روشنی کا منبع (ضیاء)؛ چاند = منعکس روشنی (نور)" } },
    { from: "فرعون", to: "ننجيك ببدنك", type: "consequence", description: { en: "Pharaoh's arrogance → body preserved as lesson", ur: "فرعون کا تکبر ← جسم بطور عبرت محفوظ ہوا" } },
    { from: "قوم يونس", to: "كشفنا العذاب", type: "consequence", description: { en: "Collective repentance → punishment lifted", ur: "اجتماعی توبہ ← عذاب ٹل گیا" } },
    { from: "الدعاء في الضر", to: "البغي بعد النجاة", type: "human_pattern", description: { en: "Sincere prayer in hardship → transgression after relief", ur: "مصیبت میں خالص دعا ← نجات کے بعد سرکشی" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran's Divine Origin", verses: "10:1-10", description: { en: "Opening with Quran's wisdom and signs of Allah", ur: "قرآن کی حکمت اور اللہ کی نشانیوں سے آغاز" } },
      { stage: 2, theme: "Human Ingratitude", verses: "10:11-23", description: { en: "Human behavior: calling Allah in distress, forgetting after relief", ur: "انسانی رویہ: مصیبت میں اللہ کو پکارنا، آرام ملنے پر بھول جانا" } },
      { stage: 3, theme: "Worldly Life Parable", verses: "10:24-30", description: { en: "Life like rain: flourishes then perishes", ur: "زندگی بارش کی مانند: پھلتی پھولتی ہے پھر فنا ہو جاتی ہے" } },
      { stage: 4, theme: "Tawheed Proofs", verses: "10:31-40", description: { en: "Logical arguments for Allah's oneness", ur: "اللہ کی وحدانیت کے عقلی دلائل" } },
      { stage: 5, theme: "Quran Challenge", verses: "10:37-40", description: { en: "Challenge to produce a surah like it", ur: "اس جیسی ایک سورت لانے کا چیلنج" } },
      { stage: 6, theme: "Day of Judgment", verses: "10:41-56", description: { en: "Accountability, brevity of worldly life", ur: "احتساب، دنیاوی زندگی کی مختصری" } },
      { stage: 7, theme: "Quran as Healing", verses: "10:57-70", description: { en: "Spiritual cure, joy in Allah's bounty, allies of Allah", ur: "روحانی شفا، اللہ کے فضل پر خوشی، اللہ کے دوست" } },
      { stage: 8, theme: "Story of Nuh", verses: "10:71-74", description: { en: "Nuh's message, rejection, flood", ur: "نوح کا پیغام، انکار، سیلاب" } },
      { stage: 9, theme: "Story of Musa", verses: "10:75-92", description: { en: "Confrontation with Pharaoh, drowning, body preserved", ur: "فرعون سے مقابلہ، غرق ہونا، جسم کا محفوظ ہونا" } },
      { stage: 10, theme: "Story of Yunus", verses: "10:98", description: { en: "Unique case: entire city repented and saved", ur: "منفرد واقعہ: پوری بستی نے توبہ کی اور بچا لی گئی" } },
      { stage: 11, theme: "Conclusion", verses: "10:99-109", description: { en: "No forced belief, follow revelation, patience", ur: "ایمان میں زبردستی نہیں، وحی کی پیروی، صبر" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Trust Allah in adversity", how: { en: "Like Nuh: 'Upon Allah I rely - gather your forces'", ur: "نوح کی طرح: 'میں نے اللہ پر توکل کیا - اپنی تمام طاقتیں جمع کر لو'" }, verse: "10:71" },
      { principle: "Repentance is always possible", how: { en: "Yunus's people repented at the last moment and were saved", ur: "یونس کی قوم نے آخری لمحے میں توبہ کی اور بچا لی گئی" }, verse: "10:98" },
      { principle: "Don't be like Pharaoh", how: { en: "Deathbed repentance without sincerity was rejected", ur: "موت کے وقت بغیر اخلاص کے توبہ مسترد ہوئی" }, verse: "10:90-91" },
      { principle: "Be consistent in worship", how: { en: "Don't only call Allah in hardship, forget Him in ease", ur: "صرف مصیبت میں اللہ کو نہ پکارو، آسانی میں بھی یاد رکھو" }, verse: "10:12" },
      { principle: "Rejoice in faith, not wealth", how: { en: "Allah's bounty and mercy > all worldly accumulation", ur: "اللہ کا فضل اور رحمت > تمام دنیاوی جمع پونجی" }, verse: "10:58" },
      { principle: "No fear for believers", how: { en: "Allies of Allah have no fear nor grief", ur: "اللہ کے دوستوں پر نہ خوف ہے نہ غم" }, verse: "10:62" },
      { principle: "Quran heals the heart", how: { en: "Use Quran as spiritual medicine for doubts and diseases", ur: "شکوک اور بیماریوں کے لیے قرآن کو روحانی دوا کے طور پر استعمال کرو" }, verse: "10:57" },
      { principle: "Patience until Allah's judgment", how: { en: "Prophet commanded to wait for Allah's decree", ur: "نبی کو اللہ کے فیصلے کا انتظار کرنے کا حکم دیا گیا" }, verse: "10:109" }
    ]
  },

  uniqueInsight: {
    title: { en: "Pharaoh's Body - A Sign for Humanity", ur: "فرعون کا جسم - انسانیت کے لیے نشانی" },
    insight: { en: "Verse 10:92 states that Allah preserved Pharaoh's body 'as a sign for those after you.' This was revealed 1400 years ago when the mummy was buried. In 1898, the mummy believed to be the Pharaoh of Exodus (possibly Merneptah or Ramesses II) was discovered and is now in Cairo's Egyptian Museum. This preservation, predicted in the Quran, serves as historical evidence - his drowned body a testament to divine punishment and a warning against arrogance.", ur: "آیت 10:92 بیان کرتی ہے کہ اللہ نے فرعون کے جسم کو 'تیرے بعد والوں کے لیے نشانی' کے طور پر محفوظ کیا۔ یہ 1400 سال پہلے نازل ہوا جب ممی دفن تھی۔ 1898 میں وہ ممی دریافت ہوئی جو خروج کے فرعون (ممکنہ طور پر مرنپتاح یا رمسیس دوم) کی سمجھی جاتی ہے اور اب قاہرہ کے مصری عجائب گھر میں موجود ہے۔ یہ تحفظ جو قرآن میں بیان ہوا، تاریخی شہادت ہے - اس کا ڈوبا ہوا جسم الٰہی سزا کی گواہی اور تکبر کے خلاف تنبیہ ہے۔" }
  },

  historicalContext: {
    note: { en: "Surah Yunus was revealed in the late Makkan period when opposition to the Prophet ﷺ was intense. The stories of Nuh, Musa, and Yunus consoled him and warned the Quraysh of similar fates. The name 'Yunus' comes from verse 98, highlighting the unique case where an entire city's repentance was accepted - offering hope to even the most sinful communities.", ur: "سورہ یونس مکی دور کے آخر میں نازل ہوئی جب نبی ﷺ کی مخالفت شدید تھی۔ نوح، موسیٰ اور یونس کے قصوں نے آپ کو تسلی دی اور قریش کو ایسے ہی انجام سے خبردار کیا۔ 'یونس' نام آیت 98 سے ہے جو اس منفرد واقعے کو نمایاں کرتا ہے جہاں پوری بستی کی توبہ قبول ہوئی - یہ بڑے سے بڑے گنہگار معاشروں کو بھی امید دیتا ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "ضِيَاء vs نُور", example: { en: "Sun=ضياء (source), Moon=نور (reflected)", ur: "سورج=ضیاء (منبع)، چاند=نور (منعکس)" }, effect: "Scientific precision in word choice" },
      { feature: "الْحَكِيم", example: { en: "Wise Book (verse 1)", ur: "حکمت والی کتاب (آیت 1)" }, effect: "Emphasizes Quran's wisdom, not just knowledge" },
      { feature: "غَفَّار", example: { en: "Ever-Forgiving (not mentioned but implied pattern)", ur: "بہت زیادہ بخشنے والا (ذکر نہیں لیکن مضمر صیغہ)" }, effect: "faʿʿāl pattern - intensive" },
      { feature: "نُنَجِّيكَ بِبَدَنِكَ", example: { en: "Save you with your body", ur: "تیرے بدن کو بچائیں گے" }, effect: "بَدَن = lifeless body, not جِسْم = living body" },
      { feature: "مَوْعِظَة، شِفَاء، هُدًى، رَحْمَة", example: { en: "Four descriptions of Quran in one verse", ur: "ایک آیت میں قرآن کی چار صفات" }, effect: "Comprehensive spiritual benefit" },
      { feature: "خَلْفَكَ", example: { en: "After you (for those behind)", ur: "تیرے بعد والوں کے لیے" }, effect: "Implies future generations will see Pharaoh" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "10:5", topic: "Astronomy", note: "الشَّمْسَ ضِيَاءً (sun as radiant light) vs القَمَرَ نُورًا (moon as reflected light) - scientifically accurate distinction" },
      { verse: "10:5", topic: "Calendar", note: "مَنَازِل (phases) for calculating years and counting - lunar calendar system" },
      { verse: "10:92", topic: "Archaeology", note: "نُنَجِّيكَ بِبَدَنِكَ - Pharaoh's mummy preserved, discovered in modern era" },
      { verse: "10:3", topic: "Cosmology", note: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ - creation in six periods (يوم can mean era)" }
    ]
  },

  crossReferences: [
    { surah: 7, name: "Al-A'raf", connection: "Detailed story of Musa and Pharaoh", verses: "7:103-137" },
    { surah: 26, name: "Ash-Shu'ara", connection: "Musa's story with more dialogue", verses: "26:10-68" },
    { surah: 37, name: "As-Saffat", connection: "Story of Yunus in the whale", verses: "37:139-148" },
    { surah: 68, name: "Al-Qalam", connection: "Reference to 'companion of the fish' (Yunus)", verses: "68:48-50" },
    { surah: 21, name: "Al-Anbiya", connection: "Yunus's supplication from the whale", verses: "21:87-88" },
    { surah: 71, name: "Nuh", connection: "Entire surah dedicated to Nuh's story", verses: "71:1-28" },
    { surah: 11, name: "Hud", connection: "Stories of multiple prophets including Nuh", verses: "11:25-49" }
  ]
};

export default ONTOLOGY;
