/**
 * Surah Hud (11) - Ontology of Quranic Concepts
 * Hud
 * Theme: Prophet Hud and 'Ad, prophets' stories (Nuh, Salih, Ibrahim, Lut, Shu'ayb, Musa), steadfastness, punishment of deniers
 */

export const ONTOLOGY = {
  surahId: 11,
  surahName: "Hud",
  surahNameArabic: "هود",
  revelationType: "Makki",
  totalAyahs: 123,

  categories: {
    quranNature: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Nature of the Quran",
      nameUr: "قرآن کی حقیقت",
      nameArabic: "طبيعة القرآن",
      concepts: [
        { term: "كِتَابٌ أُحْكِمَتْ آيَاتُهُ", meaning: { en: "A Book whose verses are perfected", ur: "ایک کتاب جس کی آیتیں مضبوط اور مُحکم کی گئیں" }, explanation: { en: "Precision of Quran", ur: "قرآن کی درستگی اور استحکام" }, verseRef: "11:1" },
        { term: "ثُمَّ فُصِّلَتْ", meaning: { en: "Then explained in detail", ur: "پھر تفصیل سے بیان کی گئیں" }, explanation: { en: "Detailed guidance", ur: "تفصیلی ہدایت" }, verseRef: "11:1" },
        { term: "مِن لَّدُنْ حَكِيمٍ خَبِيرٍ", meaning: { en: "From One Wise and Acquainted", ur: "حکمت والے باخبر ذات کی طرف سے" }, explanation: { en: "Divine source", ur: "الٰہی سرچشمہ" }, verseRef: "11:1" },
        { term: "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ", meaning: { en: "That you worship none but Allah", ur: "کہ تم اللہ کے سوا کسی کی عبادت نہ کرو" }, explanation: { en: "Central message", ur: "مرکزی پیغام" }, verseRef: "11:2" }
      ]
    },

    istighfarBlessings: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Benefits of Istighfar",
      nameUr: "استغفار کے فوائد",
      nameArabic: "فوائد الاستغفار",
      concepts: [
        { term: "اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ", meaning: { en: "Seek forgiveness then repent to Him", ur: "اپنے رب سے مغفرت مانگو پھر اس کی طرف توبہ کرو" }, explanation: { en: "Two-step process", ur: "دو مرحلے کا عمل" }, verseRef: "11:3" },
        { term: "يُمَتِّعْكُم مَّتَاعًا حَسَنًا", meaning: { en: "He will let you enjoy good provision", ur: "وہ تمہیں اچھا فائدہ اٹھانے دے گا" }, explanation: { en: "Worldly benefit", ur: "دنیاوی فائدہ" }, verseRef: "11:3" },
        { term: "يُؤْتِ كُلَّ ذِي فَضْلٍ فَضْلَهُ", meaning: { en: "Give every doer of favor his favor", ur: "ہر فضل والے کو اس کا فضل دے گا" }, explanation: { en: "Reward for good", ur: "نیکی کا بدلہ" }, verseRef: "11:3" },
        { term: "يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا", meaning: { en: "Send rain upon you in abundance", ur: "آسمان سے تم پر خوب بارش برسائے گا" }, explanation: { en: "Rain blessing", ur: "بارش کی نعمت" }, verseRef: "11:52" },
        { term: "وَيَزِدْكُمْ قُوَّةً إِلَىٰ قُوَّتِكُمْ", meaning: { en: "Increase you in strength", ur: "تمہاری طاقت پر مزید طاقت بڑھائے گا" }, explanation: { en: "Physical blessing", ur: "جسمانی نعمت" }, verseRef: "11:52" }
      ]
    },

    nuhStory: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Story of Nuh",
      nameUr: "نوح علیہ السلام کا قصہ",
      nameArabic: "قصة نوح",
      concepts: [
        { term: "أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ", meaning: { en: "We sent Nuh to his people", ur: "ہم نے نوح کو ان کی قوم کی طرف بھیجا" }, explanation: { en: "Mission begins", ur: "دعوت کا آغاز" }, verseRef: "11:25" },
        { term: "إِنِّي لَكُمْ نَذِيرٌ مُّبِينٌ", meaning: { en: "Indeed I am a clear warner", ur: "بے شک میں تمہارے لیے صاف صاف ڈرانے والا ہوں" }, explanation: { en: "Nuh's role", ur: "نوح کا کردار" }, verseRef: "11:25" },
        { term: "وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا", meaning: { en: "Construct the ship under Our observation", ur: "ہماری نگرانی اور ہماری وحی سے کشتی بناؤ" }, explanation: { en: "Building the Ark", ur: "کشتی کی تعمیر" }, verseRef: "11:37" },
        { term: "احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ", meaning: { en: "Load therein two of every kind", ur: "اس میں ہر قسم کے جانوروں میں سے دو دو سوار کر لو" }, explanation: { en: "Boarding the Ark", ur: "کشتی میں سوار ہونا" }, verseRef: "11:40" },
        { term: "بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا", meaning: { en: "In the name of Allah is its course and anchorage", ur: "اللہ کے نام سے اس کا چلنا اور ٹھہرنا ہے" }, explanation: { en: "Faith during journey", ur: "سفر میں ایمان و توکل" }, verseRef: "11:41" },
        { term: "يَا نُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ", meaning: { en: "O Nuh, he is not of your family", ur: "اے نوح! وہ تمہارے گھر والوں میں سے نہیں" }, explanation: { en: "About his disbelieving son", ur: "ان کے کافر بیٹے کے بارے میں" }, verseRef: "11:46" },
        { term: "اسْتَوَتْ عَلَى الْجُودِيِّ", meaning: { en: "It rested on Mount Judi", ur: "وہ جودی پہاڑ پر ٹھہر گئی" }, explanation: { en: "Ark's final resting place", ur: "کشتی کی آخری منزل" }, verseRef: "11:44" }
      ]
    },

    hudAndAd: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Hud and the People of 'Ad",
      nameUr: "ہود علیہ السلام اور قومِ عاد",
      nameArabic: "هود وقوم عاد",
      concepts: [
        { term: "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا", meaning: { en: "And to 'Ad their brother Hud", ur: "اور عاد کی طرف ان کے بھائی ہود کو بھیجا" }, explanation: { en: "Prophet from among them", ur: "انہی میں سے نبی" }, verseRef: "11:50" },
        { term: "يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ", meaning: { en: "O my people, worship Allah, you have no god but Him", ur: "اے میری قوم! اللہ کی عبادت کرو، اس کے سوا تمہارا کوئی معبود نہیں" }, explanation: { en: "Core message", ur: "مرکزی پیغام" }, verseRef: "11:50" },
        { term: "إِنْ أَنتُمْ إِلَّا مُفْتَرُونَ", meaning: { en: "You are only fabricators", ur: "تم صرف جھوٹ گھڑنے والے ہو" }, explanation: { en: "'Ad's accusation", ur: "قوم عاد کا الزام" }, verseRef: "11:50" },
        { term: "إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم", meaning: { en: "I place my trust in Allah, my Lord and your Lord", ur: "میں نے اللہ پر بھروسہ کیا جو میرا اور تمہارا رب ہے" }, explanation: { en: "Hud's tawakkul", ur: "ہود کا توکل" }, verseRef: "11:56" },
        { term: "مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا", meaning: { en: "There is no creature but He holds its forelock", ur: "کوئی جاندار نہیں مگر اللہ اس کی پیشانی پکڑے ہوئے ہے" }, explanation: { en: "Allah's complete control", ur: "اللہ کا مکمل اختیار" }, verseRef: "11:56" },
        { term: "أَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا", meaning: { en: "We sent upon them a screaming wind", ur: "ہم نے ان پر تیز چیختی ہوا بھیجی" }, explanation: { en: "Punishment of 'Ad", ur: "قوم عاد کی سزا" }, verseRef: "11:58 (ref 41:16)" },
        { term: "أَلَا إِنَّ عَادًا كَفَرُوا رَبَّهُمْ", meaning: { en: "Unquestionably, 'Ad denied their Lord", ur: "سن لو! بے شک عاد نے اپنے رب کا انکار کیا" }, explanation: { en: "Cause of destruction", ur: "تباہی کی وجہ" }, verseRef: "11:60" },
        { term: "أَلَا بُعْدًا لِّعَادٍ قَوْمِ هُودٍ", meaning: { en: "Away with 'Ad, the people of Hud", ur: "دور ہو عاد! جو ہود کی قوم تھی" }, explanation: { en: "Final destruction", ur: "حتمی تباہی" }, verseRef: "11:60" }
      ]
    },

    salihAndThamud: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Salih and the People of Thamud",
      nameUr: "صالح علیہ السلام اور قومِ ثمود",
      nameArabic: "صالح وقوم ثمود",
      concepts: [
        { term: "وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا", meaning: { en: "And to Thamud their brother Salih", ur: "اور ثمود کی طرف ان کے بھائی صالح کو بھیجا" }, explanation: { en: "Prophet from among them", ur: "انہی میں سے نبی" }, verseRef: "11:61" },
        { term: "هُوَ أَنشَأَكُم مِّنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا", meaning: { en: "He produced you from earth and settled you in it", ur: "اسی نے تمہیں زمین سے پیدا کیا اور اس میں تمہیں آباد کیا" }, explanation: { en: "Reminder of origins", ur: "اصل کی یاد دہانی" }, verseRef: "11:61" },
        { term: "هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً", meaning: { en: "This is the she-camel of Allah as a sign", ur: "یہ اللہ کی اونٹنی ہے تمہارے لیے نشانی کے طور پر" }, explanation: { en: "The miraculous camel", ur: "معجزاتی اونٹنی" }, verseRef: "11:64" },
        { term: "فَعَقَرُوهَا", meaning: { en: "But they hamstrung her", ur: "مگر انہوں نے اسے ذبح کر دیا" }, explanation: { en: "Thamud's crime", ur: "ثمود کا جرم" }, verseRef: "11:65" },
        { term: "تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ", meaning: { en: "Enjoy yourselves in your homes for three days", ur: "اپنے گھروں میں تین دن اور فائدہ اٹھا لو" }, explanation: { en: "Warning before punishment", ur: "سزا سے پہلے تنبیہ" }, verseRef: "11:65" },
        { term: "أَخَذَتْهُمُ الصَّيْحَةُ", meaning: { en: "The shriek seized them", ur: "ایک زوردار چیخ نے انہیں پکڑ لیا" }, explanation: { en: "Punishment", ur: "سزا" }, verseRef: "11:67" },
        { term: "كَأَن لَّمْ يَغْنَوْا فِيهَا", meaning: { en: "As if they had never prospered therein", ur: "گویا وہ کبھی وہاں آباد ہی نہ تھے" }, explanation: { en: "Complete destruction", ur: "مکمل تباہی" }, verseRef: "11:68" }
      ]
    },

    ibrahimStory: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Story of Ibrahim",
      nameUr: "ابراہیم علیہ السلام کا قصہ",
      nameArabic: "قصة إبراهيم",
      concepts: [
        { term: "جَاءَتْ رُسُلُنَا إِبْرَاهِيمَ بِالْبُشْرَىٰ", meaning: { en: "Our messengers came to Ibrahim with good tidings", ur: "ہمارے فرشتے ابراہیم کے پاس خوشخبری لے کر آئے" }, explanation: { en: "Angels' visit", ur: "فرشتوں کی آمد" }, verseRef: "11:69" },
        { term: "قَالُوا سَلَامًا ۖ قَالَ سَلَامٌ", meaning: { en: "They said 'Peace', he said 'Peace'", ur: "انہوں نے کہا سلام، انہوں نے جواب دیا سلام" }, explanation: { en: "Greeting exchange", ur: "سلام کا تبادلہ" }, verseRef: "11:69" },
        { term: "فَجَاءَ بِعِجْلٍ حَنِيذٍ", meaning: { en: "He brought a roasted calf", ur: "فوراً ایک بھنا ہوا بچھڑا لے آئے" }, explanation: { en: "Ibrahim's hospitality", ur: "ابراہیم کی مہمان نوازی" }, verseRef: "11:69" },
        { term: "فَلَمَّا رَأَىٰ أَيْدِيَهُمْ لَا تَصِلُ إِلَيْهِ نَكِرَهُمْ", meaning: { en: "When he saw their hands not reaching for it, he mistrusted them", ur: "جب دیکھا کہ ان کے ہاتھ اس کی طرف نہیں بڑھ رہے تو دل میں خوف آیا" }, explanation: { en: "Sensing something unusual", ur: "کچھ غیر معمولی محسوس کرنا" }, verseRef: "11:70" },
        { term: "لَا تَخَفْ إِنَّا أُرْسِلْنَا إِلَىٰ قَوْمِ لُوطٍ", meaning: { en: "Fear not, we are sent to the people of Lut", ur: "مت ڈریں، ہم قومِ لوط کی طرف بھیجے گئے ہیں" }, explanation: { en: "Angels' mission revealed", ur: "فرشتوں کے مشن کا انکشاف" }, verseRef: "11:70" },
        { term: "فَبَشَّرْنَاهَا بِإِسْحَاقَ", meaning: { en: "So We gave her good tidings of Ishaq", ur: "تو ہم نے انہیں اسحاق کی خوشخبری دی" }, explanation: { en: "Promise of a son", ur: "بیٹے کی بشارت" }, verseRef: "11:71" },
        { term: "وَمِن وَرَاءِ إِسْحَاقَ يَعْقُوبَ", meaning: { en: "And after Ishaq, Ya'qub", ur: "اور اسحاق کے بعد یعقوب کی" }, explanation: { en: "Promise of grandson", ur: "پوتے کی بشارت" }, verseRef: "11:71" },
        { term: "يُجَادِلُنَا فِي قَوْمِ لُوطٍ", meaning: { en: "He argued with Us concerning the people of Lut", ur: "وہ ہم سے قومِ لوط کے بارے میں بحث کرنے لگے" }, explanation: { en: "Ibrahim's compassion", ur: "ابراہیم کی شفقت" }, verseRef: "11:74" },
        { term: "إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ أَوَّاهٌ مُّنِيبٌ", meaning: { en: "Indeed Ibrahim was forbearing, grieving, and returning", ur: "بے شک ابراہیم بردبار، رقیق القلب اور اللہ کی طرف رجوع کرنے والے تھے" }, explanation: { en: "Ibrahim's qualities", ur: "ابراہیم کی صفات" }, verseRef: "11:75" }
      ]
    },

    lutStory: {
      color: '#EF4444',
      icon: 'Users',
      name: "Story of Lut",
      nameUr: "لوط علیہ السلام کا قصہ",
      nameArabic: "قصة لوط",
      concepts: [
        { term: "وَلَمَّا جَاءَتْ رُسُلُنَا لُوطًا سِيءَ بِهِمْ", meaning: { en: "When Our messengers came to Lut, he was distressed", ur: "جب ہمارے فرشتے لوط کے پاس آئے تو وہ پریشان ہو گئے" }, explanation: { en: "Lut's concern", ur: "لوط کی پریشانی" }, verseRef: "11:77" },
        { term: "وَضَاقَ بِهِمْ ذَرْعًا", meaning: { en: "He was in great difficulty", ur: "اور ان کی وجہ سے بہت تنگ دل ہو گئے" }, explanation: { en: "His anxiety", ur: "ان کی بے چینی" }, verseRef: "11:77" },
        { term: "هَٰؤُلَاءِ بَنَاتِي هُنَّ أَطْهَرُ لَكُمْ", meaning: { en: "These are my daughters, they are purer for you", ur: "یہ میری بیٹیاں ہیں، یہ تمہارے لیے زیادہ پاکیزہ ہیں" }, explanation: { en: "Offering lawful marriage", ur: "جائز نکاح کی پیشکش" }, verseRef: "11:78" },
        { term: "لَوْ أَنَّ لِي بِكُمْ قُوَّةً", meaning: { en: "If only I had power against you", ur: "کاش مجھ میں تمہارے مقابلے کی طاقت ہوتی" }, explanation: { en: "Lut's frustration", ur: "لوط کی بے بسی" }, verseRef: "11:80" },
        { term: "أَوْ آوِي إِلَىٰ رُكْنٍ شَدِيدٍ", meaning: { en: "Or could take refuge in a strong support", ur: "یا کسی مضبوط سہارے کی پناہ لے سکتا" }, explanation: { en: "Seeking help", ur: "مدد کی تلاش" }, verseRef: "11:80" },
        { term: "إِنَّا رُسُلُ رَبِّكَ لَن يَصِلُوا إِلَيْكَ", meaning: { en: "We are messengers of your Lord, they will not reach you", ur: "ہم آپ کے رب کے بھیجے ہوئے ہیں، وہ آپ تک نہیں پہنچ سکیں گے" }, explanation: { en: "Angels reveal identity", ur: "فرشتوں نے اپنی شناخت ظاہر کی" }, verseRef: "11:81" },
        { term: "فَأَسْرِ بِأَهْلِكَ بِقِطْعٍ مِّنَ اللَّيْلِ", meaning: { en: "Travel with your family in part of the night", ur: "اپنے گھر والوں کو رات کے ایک حصے میں لے کر نکل جاؤ" }, explanation: { en: "Command to leave", ur: "نکل جانے کا حکم" }, verseRef: "11:81" },
        { term: "جَعَلْنَا عَالِيَهَا سَافِلَهَا", meaning: { en: "We made its highest part its lowest", ur: "ہم نے اس بستی کو اوپر نیچے کر دیا" }, explanation: { en: "City overturned", ur: "بستی کو الٹ دیا گیا" }, verseRef: "11:82" },
        { term: "وَأَمْطَرْنَا عَلَيْهَا حِجَارَةً مِّن سِجِّيلٍ", meaning: { en: "And rained upon them stones of baked clay", ur: "اور ان پر کھنگر کے پتھروں کی بارش برسائی" }, explanation: { en: "Punishment", ur: "سزا" }, verseRef: "11:82" }
      ]
    },

    shuaybAndMadyan: {
      color: '#10B981',
      icon: 'Book',
      name: "Shu'ayb and the People of Madyan",
      nameUr: "شعیب علیہ السلام اور قومِ مدین",
      nameArabic: "شعيب وقوم مدين",
      concepts: [
        { term: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا", meaning: { en: "And to Madyan their brother Shu'ayb", ur: "اور مدین کی طرف ان کے بھائی شعیب کو بھیجا" }, explanation: { en: "Prophet from among them", ur: "انہی میں سے نبی" }, verseRef: "11:84" },
        { term: "اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ", meaning: { en: "Worship Allah, you have no god but Him", ur: "اللہ کی عبادت کرو، اس کے سوا تمہارا کوئی معبود نہیں" }, explanation: { en: "Core message", ur: "مرکزی پیغام" }, verseRef: "11:84" },
        { term: "وَلَا تَنقُصُوا الْمِكْيَالَ وَالْمِيزَانَ", meaning: { en: "Do not decrease the measure and weight", ur: "ناپ اور تول میں کمی نہ کرو" }, explanation: { en: "Economic justice", ur: "معاشی انصاف" }, verseRef: "11:84" },
        { term: "وَيَا قَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ", meaning: { en: "Give full measure and weight in justice", ur: "اے میری قوم! ناپ اور تول انصاف سے پورا دو" }, explanation: { en: "Fair dealings", ur: "منصفانہ معاملات" }, verseRef: "11:85" },
        { term: "وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ", meaning: { en: "Do not deprive people of their due", ur: "لوگوں کو ان کی چیزیں کم نہ دو" }, explanation: { en: "Rights of others", ur: "دوسروں کے حقوق" }, verseRef: "11:85" },
        { term: "وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ", meaning: { en: "Do not commit abuse on earth, spreading corruption", ur: "زمین میں فساد نہ پھیلاتے پھرو" }, explanation: { en: "Against corruption", ur: "فساد کے خلاف" }, verseRef: "11:85" },
        { term: "بَقِيَّتُ اللَّهِ خَيْرٌ لَّكُمْ", meaning: { en: "What remains from Allah is better for you", ur: "اللہ کا دیا ہوا بچا کھچا تمہارے لیے بہتر ہے" }, explanation: { en: "Lawful provision better", ur: "حلال رزق بہتر ہے" }, verseRef: "11:86" },
        { term: "أَخَذَتْهُمُ الرَّجْفَةُ", meaning: { en: "The earthquake seized them", ur: "زلزلے نے انہیں پکڑ لیا" }, explanation: { en: "Punishment of Madyan", ur: "مدین کی سزا" }, verseRef: "11:94" }
      ]
    },

    musaAndFiraun: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Musa and Fir'aun",
      nameUr: "موسیٰ علیہ السلام اور فرعون",
      nameArabic: "موسى وفرعون",
      concepts: [
        { term: "أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا وَسُلْطَانٍ مُّبِينٍ", meaning: { en: "We sent Musa with Our signs and clear authority", ur: "ہم نے موسیٰ کو اپنی نشانیوں اور واضح دلیل کے ساتھ بھیجا" }, explanation: { en: "Musa's mission", ur: "موسیٰ کی بعثت" }, verseRef: "11:96" },
        { term: "إِلَىٰ فِرْعَوْنَ وَمَلَئِهِ", meaning: { en: "To Fir'aun and his establishment", ur: "فرعون اور اس کے درباریوں کی طرف" }, explanation: { en: "Target audience", ur: "مخاطبین" }, verseRef: "11:97" },
        { term: "فَاتَّبَعُوا أَمْرَ فِرْعَوْنَ", meaning: { en: "But they followed the command of Fir'aun", ur: "مگر انہوں نے فرعون کے حکم کی پیروی کی" }, explanation: { en: "Blind following", ur: "اندھی تقلید" }, verseRef: "11:97" },
        { term: "وَمَا أَمْرُ فِرْعَوْنَ بِرَشِيدٍ", meaning: { en: "And the command of Fir'aun was not right", ur: "اور فرعون کا حکم درست نہ تھا" }, explanation: { en: "Fir'aun's misguidance", ur: "فرعون کی گمراہی" }, verseRef: "11:97" },
        { term: "يَقْدُمُ قَوْمَهُ يَوْمَ الْقِيَامَةِ", meaning: { en: "He will precede his people on Day of Resurrection", ur: "وہ قیامت کے دن اپنی قوم کے آگے ہوگا" }, explanation: { en: "Leading to Hell", ur: "جہنم کی طرف رہنمائی" }, verseRef: "11:98" },
        { term: "فَأَوْرَدَهُمُ النَّارَ", meaning: { en: "And he will lead them to the Fire", ur: "اور انہیں آگ میں لے جائے گا" }, explanation: { en: "Consequence of following", ur: "اتباع کا نتیجہ" }, verseRef: "11:98" },
        { term: "وَبِئْسَ الْوِرْدُ الْمَوْرُودُ", meaning: { en: "Wretched is the destination to which they are led", ur: "کیا ہی بری جگہ ہے جہاں وہ پہنچائے جائیں گے" }, explanation: { en: "Hellfire described", ur: "جہنم کی تصویر" }, verseRef: "11:98" }
      ]
    },

    steadfastnessCommand: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Command to Be Steadfast",
      nameUr: "ثابت قدمی کا حکم",
      nameArabic: "الأمر بالاستقامة",
      concepts: [
        { term: "فَاسْتَقِمْ كَمَا أُمِرْتَ", meaning: { en: "So remain steadfast as you have been commanded", ur: "پس آپ ثابت قدم رہیں جیسا کہ آپ کو حکم دیا گیا ہے" }, explanation: { en: "Central command", ur: "مرکزی حکم" }, verseRef: "11:112" },
        { term: "وَمَن تَابَ مَعَكَ", meaning: { en: "And those who turn in repentance with you", ur: "اور وہ لوگ بھی جنہوں نے آپ کے ساتھ توبہ کی" }, explanation: { en: "Applies to believers too", ur: "ایمان والوں پر بھی لاگو ہے" }, verseRef: "11:112" },
        { term: "وَلَا تَطْغَوْا", meaning: { en: "And do not transgress", ur: "اور حد سے تجاوز نہ کرو" }, explanation: { en: "Warning against excess", ur: "حد سے تجاوز کی تنبیہ" }, verseRef: "11:112" },
        { term: "إِنَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ", meaning: { en: "Indeed He sees what you do", ur: "بے شک وہ تمہارے اعمال کو دیکھ رہا ہے" }, explanation: { en: "Allah is watching", ur: "اللہ دیکھ رہا ہے" }, verseRef: "11:112" },
        { term: "وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا", meaning: { en: "Do not incline toward wrongdoers", ur: "ظالموں کی طرف نہ جھکو" }, explanation: { en: "Avoid supporting oppressors", ur: "ظالموں کی حمایت سے بچو" }, verseRef: "11:113" },
        { term: "فَتَمَسَّكُمُ النَّارُ", meaning: { en: "Lest the Fire touch you", ur: "ورنہ تمہیں آگ پکڑ لے گی" }, explanation: { en: "Consequence of inclining", ur: "ظالموں کی طرف جھکنے کا نتیجہ" }, verseRef: "11:113" }
      ]
    },

    prayerAndPatience: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Prayer and Patience",
      nameUr: "نماز اور صبر",
      nameArabic: "الصلاة والصبر",
      concepts: [
        { term: "وَأَقِمِ الصَّلَاةَ طَرَفَيِ النَّهَارِ", meaning: { en: "Establish prayer at both ends of the day", ur: "دن کے دونوں کناروں پر نماز قائم کرو" }, explanation: { en: "Prayer times", ur: "نماز کے اوقات" }, verseRef: "11:114" },
        { term: "وَزُلَفًا مِّنَ اللَّيْلِ", meaning: { en: "And at the approach of night", ur: "اور رات کے کچھ حصوں میں بھی" }, explanation: { en: "Night prayer", ur: "رات کی نماز" }, verseRef: "11:114" },
        { term: "إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ", meaning: { en: "Good deeds remove bad deeds", ur: "بے شک نیکیاں برائیوں کو مٹا دیتی ہیں" }, explanation: { en: "Good erases bad", ur: "نیکیاں گناہ مٹاتی ہیں" }, verseRef: "11:114" },
        { term: "ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ", meaning: { en: "That is a reminder for those who remember", ur: "یہ یاد رکھنے والوں کے لیے نصیحت ہے" }, explanation: { en: "For the mindful", ur: "غور و فکر کرنے والوں کے لیے" }, verseRef: "11:114" },
        { term: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", meaning: { en: "And be patient, for Allah does not waste the reward of doers of good", ur: "اور صبر کرو، بے شک اللہ نیکی کرنے والوں کا اجر ضائع نہیں کرتا" }, explanation: { en: "Patience rewarded", ur: "صبر کا اجر" }, verseRef: "11:115" }
      ]
    },

    lessonsFromHistory: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Lessons from History",
      nameUr: "تاریخ سے سبق",
      nameArabic: "عبر من التاريخ",
      concepts: [
        { term: "وَكُلًّا نَّقُصُّ عَلَيْكَ مِنْ أَنبَاءِ الرُّسُلِ", meaning: { en: "All We relate to you of the stories of the messengers", ur: "رسولوں کی خبروں میں سے سب ہم آپ کو سنا رہے ہیں" }, explanation: { en: "Purpose of stories", ur: "قصوں کا مقصد" }, verseRef: "11:120" },
        { term: "مَا نُثَبِّتُ بِهِ فُؤَادَكَ", meaning: { en: "That by which We make firm your heart", ur: "جس سے ہم آپ کا دل مضبوط کرتے ہیں" }, explanation: { en: "Strengthening the Prophet", ur: "نبی کی تقویت" }, verseRef: "11:120" },
        { term: "وَجَاءَكَ فِي هَٰذِهِ الْحَقُّ", meaning: { en: "And there has come to you in this the truth", ur: "اور اس میں آپ کے پاس حق آ گیا ہے" }, explanation: { en: "Truth in stories", ur: "قصوں میں حق" }, verseRef: "11:120" },
        { term: "وَمَوْعِظَةٌ وَذِكْرَىٰ لِلْمُؤْمِنِينَ", meaning: { en: "And an exhortation and reminder for the believers", ur: "اور ایمان والوں کے لیے نصیحت اور یاد دہانی" }, explanation: { en: "Benefit for believers", ur: "ایمان والوں کے لیے فائدہ" }, verseRef: "11:120" },
        { term: "وَقُل لِّلَّذِينَ لَا يُؤْمِنُونَ اعْمَلُوا عَلَىٰ مَكَانَتِكُمْ", meaning: { en: "Say to those who disbelieve: Work according to your position", ur: "جو لوگ ایمان نہیں لاتے ان سے کہو: اپنی جگہ عمل کیے جاؤ" }, explanation: { en: "Challenge to disbelievers", ur: "کافروں کو چیلنج" }, verseRef: "11:121" },
        { term: "إِنَّا عَامِلُونَ", meaning: { en: "Indeed we are working", ur: "بے شک ہم بھی عمل کرنے والے ہیں" }, explanation: { en: "Believers' resolve", ur: "ایمان والوں کا عزم" }, verseRef: "11:121" },
        { term: "وَانتَظِرُوا إِنَّا مُنتَظِرُونَ", meaning: { en: "And wait, indeed we are waiting", ur: "اور انتظار کرو، ہم بھی انتظار کر رہے ہیں" }, explanation: { en: "Waiting for judgment", ur: "فیصلے کا انتظار" }, verseRef: "11:122" }
      ]
    },

    allahsKnowledge: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Allah's Complete Knowledge",
      nameUr: "اللہ کا مکمل علم",
      nameArabic: "علم الله الكامل",
      concepts: [
        { term: "وَلِلَّهِ غَيْبُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To Allah belongs the unseen of heavens and earth", ur: "آسمانوں اور زمین کا غیب اللہ ہی کے لیے ہے" }, explanation: { en: "Allah knows all", ur: "اللہ سب جانتا ہے" }, verseRef: "11:123" },
        { term: "وَإِلَيْهِ يُرْجَعُ الْأَمْرُ كُلُّهُ", meaning: { en: "And to Him is returned all matter", ur: "اور تمام معاملات اسی کی طرف لوٹائے جائیں گے" }, explanation: { en: "All returns to Allah", ur: "سب کچھ اللہ کی طرف لوٹتا ہے" }, verseRef: "11:123" },
        { term: "فَاعْبُدْهُ وَتَوَكَّلْ عَلَيْهِ", meaning: { en: "So worship Him and rely upon Him", ur: "پس اس کی عبادت کرو اور اسی پر بھروسہ رکھو" }, explanation: { en: "Worship and trust", ur: "عبادت اور توکل" }, verseRef: "11:123" },
        { term: "وَمَا رَبُّكَ بِغَافِلٍ عَمَّا تَعْمَلُونَ", meaning: { en: "Your Lord is not unaware of what you do", ur: "اور تمہارا رب تمہارے اعمال سے غافل نہیں ہے" }, explanation: { en: "Allah sees everything", ur: "اللہ سب دیکھتا ہے" }, verseRef: "11:123" }
      ]
    },

    punishmentPatterns: {
      color: '#EF4444',
      icon: 'Users',
      name: "Patterns of Punishment",
      nameUr: "عذاب کے نمونے",
      nameArabic: "أنماط العذاب",
      concepts: [
        { term: "الطوفان", meaning: { en: "The Flood", ur: "طوفان" }, explanation: { en: "Nuh's people drowned", ur: "نوح کی قوم غرق ہوئی" }, verseRef: "11:42-44" },
        { term: "الريح الصرصر", meaning: { en: "Screaming wind", ur: "تیز چیختی ہوا" }, explanation: { en: "'Ad destroyed by wind", ur: "عاد ہوا سے تباہ ہوئے" }, verseRef: "11:58" },
        { term: "الصيحة", meaning: { en: "The Shriek", ur: "زوردار چیخ" }, explanation: { en: "Thamud's destruction", ur: "ثمود کی تباہی" }, verseRef: "11:67" },
        { term: "حجارة من سجيل", meaning: { en: "Stones of baked clay", ur: "کھنگر کے پتھر" }, explanation: { en: "People of Lut", ur: "قومِ لوط" }, verseRef: "11:82" },
        { term: "الرجفة", meaning: { en: "The earthquake", ur: "زلزلہ" }, explanation: { en: "Madyan's destruction", ur: "مدین کی تباہی" }, verseRef: "11:94" },
        { term: "الإغراق", meaning: { en: "Drowning", ur: "غرق" }, explanation: { en: "Fir'aun and his army", ur: "فرعون اور اس کا لشکر" }, verseRef: "implied" }
      ]
    },

    divineJustice: {
      color: '#10B981',
      icon: 'Book',
      name: "Divine Justice",
      nameUr: "الٰہی انصاف",
      nameArabic: "العدل الإلهي",
      concepts: [
        { term: "وَمَا ظَلَمْنَاهُمْ وَلَٰكِن ظَلَمُوا أَنفُسَهُمْ", meaning: { en: "We did not wrong them, but they wronged themselves", ur: "ہم نے ان پر ظلم نہیں کیا بلکہ انہوں نے خود اپنے اوپر ظلم کیا" }, explanation: { en: "Self-inflicted doom", ur: "خود کی تباہی خود لائی" }, verseRef: "11:101" },
        { term: "وَكَذَٰلِكَ أَخْذُ رَبِّكَ إِذَا أَخَذَ الْقُرَىٰ", meaning: { en: "Such is the seizure of your Lord when He seizes cities", ur: "اور تمہارے رب کی پکڑ ایسی ہی ہے جب وہ بستیوں کو پکڑتا ہے" }, explanation: { en: "Pattern of punishment", ur: "سزا کا طریقہ" }, verseRef: "11:102" },
        { term: "وَهِيَ ظَالِمَةٌ", meaning: { en: "While they are committing wrong", ur: "جبکہ وہ ظلم کر رہی ہوتی ہیں" }, explanation: { en: "Timing of punishment", ur: "سزا کا وقت" }, verseRef: "11:102" },
        { term: "إِنَّ أَخْذَهُ أَلِيمٌ شَدِيدٌ", meaning: { en: "Indeed His seizure is painful and severe", ur: "بے شک اس کی پکڑ بہت دردناک اور سخت ہے" }, explanation: { en: "Severity of punishment", ur: "سزا کی شدت" }, verseRef: "11:102" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَةً لِّمَنْ خَافَ عَذَابَ الْآخِرَةِ", meaning: { en: "In that is a sign for those who fear punishment of Hereafter", ur: "اس میں ان لوگوں کے لیے نشانی ہے جو آخرت کے عذاب سے ڈرتے ہیں" }, explanation: { en: "Lesson for believers", ur: "ایمان والوں کے لیے سبق" }, verseRef: "11:103" }
      ]
    },

    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment",
      nameUr: "یومِ قیامت",
      nameArabic: "يوم القيامة",
      concepts: [
        { term: "ذَٰلِكَ يَوْمٌ مَّجْمُوعٌ لَّهُ النَّاسُ", meaning: { en: "That is a Day for which people will be gathered", ur: "وہ ایسا دن ہے جس میں سب لوگ جمع کیے جائیں گے" }, explanation: { en: "Universal gathering", ur: "عالمگیر اجتماع" }, verseRef: "11:103" },
        { term: "وَذَٰلِكَ يَوْمٌ مَّشْهُودٌ", meaning: { en: "And that is a Day witnessed", ur: "اور وہ حاضری کا دن ہے" }, explanation: { en: "All will witness", ur: "سب حاضر ہوں گے" }, verseRef: "11:103" },
        { term: "وَمَا نُؤَخِّرُهُ إِلَّا لِأَجَلٍ مَّعْدُودٍ", meaning: { en: "We only delay it for a limited term", ur: "ہم اسے صرف ایک مقررہ مدت کے لیے مؤخر کر رہے ہیں" }, explanation: { en: "Appointed time", ur: "مقررہ وقت" }, verseRef: "11:104" },
        { term: "يَوْمَ يَأْتِ لَا تَكَلَّمُ نَفْسٌ إِلَّا بِإِذْنِهِ", meaning: { en: "Day it comes no soul will speak except by His permission", ur: "جس دن وہ آئے گا کوئی شخص اللہ کی اجازت کے بغیر بول نہ سکے گا" }, explanation: { en: "Only Allah permits speech", ur: "صرف اللہ کی اجازت سے بولنا ہوگا" }, verseRef: "11:105" },
        { term: "فَمِنْهُمْ شَقِيٌّ وَسَعِيدٌ", meaning: { en: "Of them some will be wretched and some happy", ur: "ان میں سے کچھ بدبخت ہوں گے اور کچھ خوش نصیب" }, explanation: { en: "Two groups", ur: "دو گروہ" }, verseRef: "11:105" }
      ]
    },

    hellAndParadise: {
      color: '#10B981',
      icon: 'Book',
      name: "Hell and Paradise",
      nameUr: "جہنم اور جنت",
      nameArabic: "النار والجنة",
      concepts: [
        { term: "فَأَمَّا الَّذِينَ شَقُوا فَفِي النَّارِ", meaning: { en: "As for those who were wretched, in the Fire", ur: "جو لوگ بدبخت ہوئے وہ آگ میں ہوں گے" }, explanation: { en: "Wretched in Hell", ur: "بدبخت جہنم میں" }, verseRef: "11:106" },
        { term: "لَهُمْ فِيهَا زَفِيرٌ وَشَهِيقٌ", meaning: { en: "For them therein is wailing and gasping", ur: "ان کے لیے اس میں چیخنا اور ہانپنا ہوگا" }, explanation: { en: "Sounds of Hell", ur: "جہنم کی آوازیں" }, verseRef: "11:106" },
        { term: "خَالِدِينَ فِيهَا مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ", meaning: { en: "Abiding therein as long as heavens and earth endure", ur: "جب تک آسمان اور زمین قائم رہیں اس میں ہمیشہ رہیں گے" }, explanation: { en: "Eternal stay", ur: "ہمیشہ کا ٹھکانا" }, verseRef: "11:107" },
        { term: "وَأَمَّا الَّذِينَ سُعِدُوا فَفِي الْجَنَّةِ", meaning: { en: "And as for those who were prosperous, in Paradise", ur: "اور جو خوش نصیب ہوئے وہ جنت میں ہوں گے" }, explanation: { en: "Prosperous in Paradise", ur: "خوش نصیب جنت میں" }, verseRef: "11:108" },
        { term: "خَالِدِينَ فِيهَا", meaning: { en: "Abiding therein", ur: "اس میں ہمیشہ رہیں گے" }, explanation: { en: "Eternal Paradise", ur: "ہمیشہ کی جنت" }, verseRef: "11:108" },
        { term: "عَطَاءً غَيْرَ مَجْذُوذٍ", meaning: { en: "A gift uninterrupted", ur: "ایسی عطا جو کبھی ختم نہ ہوگی" }, explanation: { en: "Unending blessing", ur: "کبھی نہ ختم ہونے والی نعمت" }, verseRef: "11:108" }
      ]
    }
  },

  relationships: [
    { from: "استغفروا ربكم", to: "يمتعكم متاعاً حسناً", type: "causation", description: { en: "Istighfar → good provision", ur: "استغفار ← اچھا رزق" } },
    { from: "فاستقم كما أمرت", to: "إنه بما تعملون بصير", type: "motivation", description: { en: "Steadfastness → Allah sees", ur: "استقامت ← اللہ دیکھ رہا ہے" } },
    { from: "الحسنات", to: "السيئات", type: "causation", description: { en: "Good deeds remove bad deeds", ur: "نیکیاں گناہوں کو مٹاتی ہیں" } },
    { from: "قصص الرسل", to: "نثبت به فؤادك", type: "purpose", description: { en: "Stories → strengthen heart", ur: "قصے ← دل کی مضبوطی" } },
    { from: "كفروا", to: "أخذتهم", type: "consequence", description: { en: "Denial → destruction", ur: "انکار ← تباہی" } },
    { from: "فاعبده", to: "وتوكل عليه", type: "parallel", description: { en: "Worship and trust together", ur: "عبادت اور توکل ایک ساتھ" } },
    { from: "هود", to: "عاد", type: "prophet-to-people", description: { en: "Prophet to his people", ur: "نبی اپنی قوم کی طرف" } },
    { from: "صالح", to: "ثمود", type: "prophet-to-people", description: { en: "Prophet to his people", ur: "نبی اپنی قوم کی طرف" } },
    { from: "شعيب", to: "مدين", type: "prophet-to-people", description: { en: "Prophet to his people", ur: "نبی اپنی قوم کی طرف" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran's Nature & Tawhid", verses: "11:1-24", description: { en: "Book's perfection, worship Allah alone, istighfar benefits", ur: "کتاب کا استحکام، صرف اللہ کی عبادت، استغفار کے فوائد" } },
      { stage: 2, theme: "Story of Nuh", verses: "11:25-49", description: { en: "950 years of dawah, Ark, flood, disbelieving son", ur: "950 سال کی دعوت، کشتی، سیلاب، کافر بیٹا" } },
      { stage: 3, theme: "Hud and 'Ad", verses: "11:50-60", description: { en: "Call to worship, tawakkul, destruction by wind", ur: "عبادت کی دعوت، توکل، ہوا سے تباہی" } },
      { stage: 4, theme: "Salih and Thamud", verses: "11:61-68", description: { en: "She-camel sign, hamstringing, shriek destruction", ur: "اونٹنی کی نشانی، اونٹنی کو مارنا، چیخ سے تباہی" } },
      { stage: 5, theme: "Ibrahim and Angels", verses: "11:69-76", description: { en: "Angels' visit, good news of Ishaq, intercession for Lut's people", ur: "فرشتوں کی آمد، اسحاق کی بشارت، قومِ لوط کے لیے سفارش" } },
      { stage: 6, theme: "Lut and His People", verses: "11:77-83", description: { en: "Angels' protection, city overturned, stones of clay", ur: "فرشتوں کی حفاظت، بستی الٹ دی گئی، مٹی کے پتھر" } },
      { stage: 7, theme: "Shu'ayb and Madyan", verses: "11:84-95", description: { en: "Economic justice, fair dealings, earthquake", ur: "معاشی انصاف، منصفانہ لین دین، زلزلہ" } },
      { stage: 8, theme: "Musa and Fir'aun", verses: "11:96-99", description: { en: "Signs and authority, Fir'aun's misguidance", ur: "نشانیاں اور واضح دلیل، فرعون کی گمراہی" } },
      { stage: 9, theme: "Lessons & Justice", verses: "11:100-111", description: { en: "Divine justice, Day of Judgment, Hell and Paradise", ur: "الٰہی انصاف، یوم قیامت، جہنم اور جنت" } },
      { stage: 10, theme: "Steadfastness & Trust", verses: "11:112-123", description: { en: "Istiqamah command, prayer, patience, trust in Allah", ur: "استقامت کا حکم، نماز، صبر، اللہ پر توکل" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Seek forgiveness regularly", how: { en: "Istighfar brings worldly and spiritual blessings", ur: "استغفار دنیاوی اور روحانی برکتیں لاتا ہے" }, verse: "11:3, 52" },
      { principle: "Be steadfast", how: { en: "Remain firm on truth despite challenges", ur: "مشکلات کے باوجود حق پر ثابت قدم رہو" }, verse: "11:112" },
      { principle: "Good deeds erase sins", how: { en: "Establish prayer, it removes bad deeds", ur: "نماز قائم کرو، یہ گناہوں کو مٹاتی ہے" }, verse: "11:114" },
      { principle: "Trust Allah completely", how: { en: "Place trust while fulfilling responsibilities", ur: "ذمہ داریاں ادا کرتے ہوئے اللہ پر بھروسہ رکھو" }, verse: "11:56, 123" },
      { principle: "Be just in dealings", how: { en: "Give full measure and weight in business", ur: "کاروبار میں ناپ تول پورا دو" }, verse: "11:84-85" },
      { principle: "Don't support wrongdoers", how: { en: "Even slight inclination toward oppressors is harmful", ur: "ظالموں کی طرف معمولی جھکاؤ بھی نقصان دہ ہے" }, verse: "11:113" },
      { principle: "Learn from history", how: { en: "Past nations' stories are lessons, not entertainment", ur: "گزشتہ قوموں کے قصے عبرت ہیں، تفریح نہیں" }, verse: "11:120" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Verse That Aged the Prophet", ur: "وہ آیت جس نے نبی ﷺ کے بال سفید کر دیے" },
    insight: { en: "The Prophet (peace be upon him) said: 'Surah Hud and its sisters have made my hair grey.' When asked why, he pointed to verse 112: 'So remain steadfast as you have been commanded.' This verse encapsulates the weight of prophethood - not just calling to Islam, but maintaining perfect istiqamah (steadfastness) without any deviation. The command 'fastaqim' (be steadfast) is so comprehensive that it covers belief, action, intention, and perseverance. It demands consistency in following the straight path in all circumstances - prosperity and adversity, ease and hardship. This is why the scholars say this single verse contains the entire religion.", ur: "نبی ﷺ نے فرمایا: 'سورہ ہود اور اس جیسی سورتوں نے مجھے بوڑھا کر دیا۔' جب پوچھا گیا تو آپ نے آیت 112 کی طرف اشارہ کیا: 'پس ثابت قدم رہو جیسا کہ تمہیں حکم دیا گیا ہے۔' یہ آیت نبوت کے بوجھ کا خلاصہ ہے - صرف اسلام کی دعوت نہیں بلکہ بغیر کسی انحراف کے مکمل استقامت برقرار رکھنا۔ 'فاستقم' (ثابت قدم رہو) کا حکم اتنا جامع ہے کہ عقیدہ، عمل، نیت اور ثابت قدمی سب کو شامل ہے۔ یہ ہر حال میں صراط مستقیم پر چلنے کا تقاضا کرتی ہے - خوشحالی اور تنگی، آسانی اور مشکل میں۔ اسی لیے علماء کہتے ہیں کہ یہ اکیلی آیت پورے دین کو سمیٹے ہوئے ہے۔" }
  },

  historicalContext: {
    note: { en: "Surah Hud was revealed in Makkah during a very difficult period. The Prophet had just experienced the 'Year of Sorrow' - losing both Khadijah and Abu Talib. The persecution of Muslims intensified. This surah came as consolation, showing him that all prophets faced rejection and hardship, yet they remained steadfast. The detailed stories of Nuh's 950 years of dawah, Hud's unwavering trust, and other prophets facing death threats - all paralleled the Prophet's own experience. The surah's name 'Hud' is significant: Hud was an Arab prophet sent to Arab people ('Ad), just as Muhammad was an Arab prophet to Arabs.", ur: "سورہ ہود مکہ میں ایک انتہائی مشکل دور میں نازل ہوئی۔ نبی ﷺ ابھی 'عام الحزن' سے گزرے تھے - خدیجہ اور ابو طالب دونوں کی وفات ہو چکی تھی۔ مسلمانوں پر ظلم و ستم بڑھ گیا تھا۔ یہ سورت تسلی کے طور پر آئی، آپ ﷺ کو دکھایا کہ تمام انبیاء کو انکار اور مشکلات کا سامنا ہوا مگر وہ ثابت قدم رہے۔ نوح کی 950 سال کی دعوت، ہود کے اٹل بھروسے اور دیگر انبیاء کو جان کی دھمکیوں کے تفصیلی قصے - سب نبی ﷺ کے اپنے تجربے سے مماثل تھے۔ سورت کا نام 'ہود' اہم ہے: ہود ایک عرب نبی تھے جو عرب قوم (عاد) کی طرف بھیجے گئے، بالکل جیسے محمد ﷺ عرب نبی تھے عربوں کی طرف۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "أُحْكِمَتْ", example: { en: "Made precise/perfected", ur: "مضبوط اور مُحکم کیا گیا" }, effect: "Passive form IV - divine perfection" },
      { feature: "فُصِّلَتْ", example: { en: "Explained in detail", ur: "تفصیل سے بیان کیا گیا" }, effect: "Passive form II - intensive detailing" },
      { feature: "مِدْرَارًا", example: { en: "Abundantly flowing", ur: "موسلادھار بارش" }, effect: "mifʿāl pattern - intensive continuous" },
      { feature: "صَرْصَر", example: { en: "Screaming/howling", ur: "چیختی/گرجتی ہوا" }, effect: "Onomatopoeia - sound of violent wind" },
      { feature: "حَلِيم أَوَّاه مُنِيب", example: { en: "Forbearing, grieving, returning", ur: "بردبار، رقیق القلب، رجوع کرنے والا" }, effect: "Three faʿīl patterns describing Ibrahim" },
      { feature: "زَفِير وَشَهِيق", example: { en: "Wailing and gasping", ur: "چیخنا اور ہانپنا" }, effect: "Sound imagery of Hellfire" },
      { feature: "فَاسْتَقِمْ", example: { en: "So be steadfast", ur: "پس ثابت قدم رہو" }, effect: "Form X imperative - seek steadfastness" }
    ]
  },

  prophetMentions: {
    prophets: [
      { name: "Nuh", arabicName: "نوح", verses: "25-49", duration: "950 years of dawah" },
      { name: "Hud", arabicName: "هود", verses: "50-60", people: "'Ad" },
      { name: "Salih", arabicName: "صالح", verses: "61-68", people: "Thamud" },
      { name: "Ibrahim", arabicName: "إبراهيم", verses: "69-76", event: "Angels' visit" },
      { name: "Lut", arabicName: "لوط", verses: "77-83", event: "City destruction" },
      { name: "Shu'ayb", arabicName: "شعيب", verses: "84-95", people: "Madyan" },
      { name: "Musa", arabicName: "موسى", verses: "96-99", opponent: "Fir'aun" }
    ]
  },

  destroyedNations: {
    nations: [
      { name: "People of Nuh", punishment: "Flood (Tufan)", cause: "Centuries of rejection" },
      { name: "'Ad", punishment: "Screaming wind for 7 nights, 8 days", cause: "Arrogance, idol worship" },
      { name: "Thamud", punishment: "The Shriek (Sayhah)", cause: "Killing the she-camel" },
      { name: "People of Lut", punishment: "City overturned, stones of clay", cause: "Fahishah (immorality)" },
      { name: "Madyan", punishment: "Earthquake (Rajfah)", cause: "Cheating in trade" },
      { name: "Fir'aun's people", punishment: "Drowning, eternal Fire", cause: "Claiming divinity, oppression" }
    ]
  }
};

export default ONTOLOGY;
