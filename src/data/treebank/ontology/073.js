/**
 * Surah Al-Muzzammil (73) - Ontology of Quranic Concepts
 * The Enshrouded One
 * Theme: Night prayer (Tahajjud), gradual revelation, patience, warning to deniers
 */

export const ONTOLOGY = {
  surahId: 73,
  surahName: "Al-Muzzammil",
  surahNameArabic: "المزمل",
  revelationType: "Makki (except verse 20 - Madani)",
  totalAyahs: 20,

  categories: {
    propheticAddress: {
      name: "Address to the Prophet",
      nameUr: "نبی ﷺ سے خطاب",
      nameArabic: "خطاب النبي",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "يَا أَيُّهَا الْمُزَّمِّلُ", meaning: { en: "O you wrapped in garments", ur: "اے کپڑا لپیٹنے والے" }, explanation: { en: "Prophet ﷺ covered after receiving revelation", ur: "نبی ﷺ وحی کے بعد کپڑے میں لپٹے ہوئے تھے" }, verseRef: "73:1" },
        { term: "قُمِ اللَّيْلَ", meaning: { en: "Stand at night", ur: "رات کو (نماز کے لیے) کھڑے ہو" }, explanation: { en: "Command for night prayer", ur: "قیام اللیل کا حکم" }, verseRef: "73:2" },
        { term: "إِلَّا قَلِيلًا", meaning: { en: "Except a little", ur: "تھوڑا سا (آرام لے لو)" }, explanation: { en: "Some rest is permitted", ur: "کچھ آرام کی اجازت ہے" }, verseRef: "73:2" }
      ]
    },

    nightPrayerGuidelines: {
      name: "Night Prayer Guidelines",
      nameUr: "قیام اللیل کے احکام",
      nameArabic: "أحكام قيام الليل",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "نِصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا", meaning: { en: "Half or less than half", ur: "آدھی رات یا اس سے کچھ کم" }, explanation: { en: "Flexibility in night prayer duration", ur: "قیام اللیل کی مدت میں لچک" }, verseRef: "73:3" },
        { term: "أَوْ زِدْ عَلَيْهِ", meaning: { en: "Or add to it", ur: "یا اس سے زیادہ" }, explanation: { en: "Can pray more than half", ur: "آدھے سے زیادہ بھی پڑھ سکتے ہیں" }, verseRef: "73:4" },
        { term: "رَتِّلِ الْقُرْآنَ تَرْتِيلًا", meaning: { en: "Recite Quran slowly and clearly", ur: "قرآن ٹھہر ٹھہر کر پڑھو" }, explanation: { en: "Tarteel - measured, beautiful recitation", ur: "ترتیل - ناپا تلا، خوبصورت تلاوت" }, verseRef: "73:4" }
      ]
    },

    weightyRevelation: {
      name: "The Weighty Word",
      nameUr: "بھاری کلام",
      nameArabic: "القول الثقيل",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "قَوْلًا ثَقِيلًا", meaning: { en: "Heavy/weighty word", ur: "بھاری کلام" }, explanation: { en: "Quran's gravitas and responsibility", ur: "قرآن کا وقار اور ذمہ داری" }, verseRef: "73:5" },
        { term: "نَاشِئَةَ اللَّيْلِ", meaning: { en: "Rising at night", ur: "رات کو اٹھنا" }, explanation: { en: "Night prayer is spiritually potent", ur: "قیام اللیل روحانی طور پر مؤثر ہے" }, verseRef: "73:6" },
        { term: "أَشَدُّ وَطْئًا", meaning: { en: "More intense in impression", ur: "زیادہ گہرا اثر ڈالنے والا" }, explanation: { en: "Night worship leaves deeper impact", ur: "رات کی عبادت زیادہ گہرا اثر چھوڑتی ہے" }, verseRef: "73:6" },
        { term: "أَقْوَمُ قِيلًا", meaning: { en: "More suitable for speech", ur: "بات کے لیے زیادہ سیدھا" }, explanation: { en: "Better for Quran recitation/contemplation", ur: "قرآن کی تلاوت/تدبر کے لیے بہتر" }, verseRef: "73:6" }
      ]
    },

    dayOccupations: {
      name: "Daytime Activities",
      nameUr: "دن کی مصروفیات",
      nameArabic: "أشغال النهار",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "سَبْحًا طَوِيلًا", meaning: { en: "Long occupation", ur: "طویل مشغولیت" }, explanation: { en: "Day filled with prophetic duties", ur: "دن نبوی فرائض سے بھرا ہوا" }, verseRef: "73:7" },
        { term: "اذْكُرِ اسْمَ رَبِّكَ", meaning: { en: "Remember your Lord's name", ur: "اپنے رب کا نام یاد کرو" }, explanation: { en: "Constant dhikr", ur: "مسلسل ذکر" }, verseRef: "73:8" },
        { term: "تَبَتَّلْ إِلَيْهِ تَبْتِيلًا", meaning: { en: "Devote yourself completely", ur: "اس کی طرف پوری طرح متوجہ ہو جاؤ" }, explanation: { en: "Total devotion to Allah", ur: "اللہ کے لیے مکمل وقف" }, verseRef: "73:8" }
      ]
    },

    divineAttributes: {
      name: "Divine Attributes",
      nameUr: "الہٰی صفات",
      nameArabic: "الصفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ", meaning: { en: "Lord of East and West", ur: "مشرق اور مغرب کا رب" }, explanation: { en: "Sovereignty over all", ur: "تمام پر حکمرانی" }, verseRef: "73:9" },
        { term: "لَا إِلَـٰهَ إِلَّا هُوَ", meaning: { en: "No deity except Him", ur: "اس کے سوا کوئی معبود نہیں" }, explanation: { en: "Absolute monotheism", ur: "مطلق توحید" }, verseRef: "73:9" },
        { term: "وَكِيلًا", meaning: { en: "Disposer of affairs", ur: "کارساز" }, explanation: { en: "Allah manages all matters", ur: "اللہ تمام معاملات چلاتا ہے" }, verseRef: "73:9" },
        { term: "غَفُورٌ رَّحِيمٌ", meaning: { en: "Forgiving, Merciful", ur: "بخشنے والا، رحم کرنے والا" }, explanation: { en: "Final attributes in surah", ur: "سورت میں آخری صفات" }, verseRef: "73:20" }
      ]
    },

    patienceWithDeniers: {
      name: "Patience with Deniers",
      nameUr: "جھٹلانے والوں پر صبر",
      nameArabic: "الصبر على المكذبين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "اصْبِرْ عَلَىٰ مَا يَقُولُونَ", meaning: { en: "Be patient over what they say", ur: "جو وہ کہتے ہیں اس پر صبر کرو" }, explanation: { en: "Endure their mockery", ur: "ان کے مذاق کو برداشت کرو" }, verseRef: "73:10" },
        { term: "هَجْرًا جَمِيلًا", meaning: { en: "Gracious avoidance", ur: "خوبصورت طریقے سے کنارہ کشی" }, explanation: { en: "Leave them elegantly, not bitterly", ur: "خوبصورتی سے چھوڑو، تلخی سے نہیں" }, verseRef: "73:10" },
        { term: "ذَرْنِي وَالْمُكَذِّبِينَ", meaning: { en: "Leave Me with the deniers", ur: "جھٹلانے والوں کو مجھ پر چھوڑ دو" }, explanation: { en: "Allah will deal with them", ur: "اللہ ان سے نمٹے گا" }, verseRef: "73:11" },
        { term: "مَهِّلْهُمْ قَلِيلًا", meaning: { en: "Grant them respite a little", ur: "تھوڑی مہلت دے دو" }, explanation: { en: "Short delay before punishment", ur: "عذاب سے پہلے مختصر مہلت" }, verseRef: "73:11" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameUr: "جہنم کا بیان",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أَنكَالًا", meaning: { en: "Shackles", ur: "بیڑیاں" }, explanation: { en: "Chains binding criminals", ur: "مجرموں کو جکڑنے والی زنجیریں" }, verseRef: "73:12" },
        { term: "جَحِيمًا", meaning: { en: "Blazing fire", ur: "بھڑکتی آگ" }, explanation: { en: "Intense hellfire", ur: "شدید دوزخ کی آگ" }, verseRef: "73:12" },
        { term: "طَعَامًا ذَا غُصَّةٍ", meaning: { en: "Choking food", ur: "گلے میں اٹکنے والا کھانا" }, explanation: { en: "Zaqqum - lodges in throat", ur: "زقوم - گلے میں پھنس جائے" }, verseRef: "73:13" },
        { term: "عَذَابًا أَلِيمًا", meaning: { en: "Painful punishment", ur: "دردناک عذاب" }, explanation: { en: "Severe torment", ur: "شدید سزا" }, verseRef: "73:13" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameUr: "یومِ قیامت",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "تَرْجُفُ الْأَرْضُ وَالْجِبَالُ", meaning: { en: "Earth and mountains shake", ur: "زمین اور پہاڑ لرز اٹھیں گے" }, explanation: { en: "Cosmic earthquake", ur: "کائناتی زلزلہ" }, verseRef: "73:14" },
        { term: "كَثِيبًا مَّهِيلًا", meaning: { en: "Heap of sand pouring down", ur: "بہتی ہوئی ریت کا ڈھیر" }, explanation: { en: "Mountains become flowing sand", ur: "پہاڑ بہتی ریت بن جائیں گے" }, verseRef: "73:14" },
        { term: "يَجْعَلُ الْوِلْدَانَ شِيبًا", meaning: { en: "Makes children grey-haired", ur: "بچوں کے بال سفید کر دے" }, explanation: { en: "Day so severe it ages children", ur: "اتنا سخت دن کہ بچے بوڑھے ہو جائیں" }, verseRef: "73:17" },
        { term: "السَّمَاءُ مُنفَطِرٌ بِهِ", meaning: { en: "Heaven breaking apart", ur: "آسمان اس سے پھٹ جائے گا" }, explanation: { en: "Sky torn asunder", ur: "آسمان ٹکڑے ٹکڑے ہو جائے گا" }, verseRef: "73:18" }
      ]
    },

    pharaohParallel: {
      name: "Pharaoh's Lesson",
      nameUr: "فرعون کی عبرت",
      nameArabic: "عبرة فرعون",
      color: '#EC4899',
      icon: 'Book',
      concepts: [
        { term: "أَرْسَلْنَا إِلَيْكُمْ رَسُولًا", meaning: { en: "We sent you a Messenger", ur: "ہم نے تمہاری طرف ایک رسول بھیجا" }, explanation: { en: "Prophet sent like Musa was to Pharaoh", ur: "جیسے موسیٰ فرعون کے پاس بھیجے گئے" }, verseRef: "73:15" },
        { term: "كَمَا أَرْسَلْنَا إِلَىٰ فِرْعَوْنَ", meaning: { en: "As We sent to Pharaoh", ur: "جیسے ہم نے فرعون کے پاس بھیجا" }, explanation: { en: "Historical parallel", ur: "تاریخی موازنہ" }, verseRef: "73:15" },
        { term: "فَعَصَىٰ فِرْعَوْنُ الرَّسُولَ", meaning: { en: "Pharaoh disobeyed the Messenger", ur: "فرعون نے رسول کی نافرمانی کی" }, explanation: { en: "Warning: rejectors will be punished", ur: "تنبیہ: انکار کرنے والوں کو سزا ملے گی" }, verseRef: "73:16" },
        { term: "أَخْذًا وَبِيلًا", meaning: { en: "Severe seizing", ur: "سخت پکڑ" }, explanation: { en: "Pharaoh's drowning - severe punishment", ur: "فرعون کا غرق ہونا - سخت سزا" }, verseRef: "73:16" }
      ]
    },

    abrogationOfNightPrayer: {
      name: "Lightening of Night Prayer",
      nameUr: "قیام اللیل میں تخفیف",
      nameArabic: "تخفيف قيام الليل",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "إِنَّ رَبَّكَ يَعْلَمُ", meaning: { en: "Your Lord knows", ur: "بلاشبہ تمہارا رب جانتا ہے" }, explanation: { en: "Allah sees their sincere effort", ur: "اللہ ان کی مخلصانہ کوشش دیکھتا ہے" }, verseRef: "73:20" },
        { term: "أَدْنَىٰ مِن ثُلُثَيِ اللَّيْلِ", meaning: { en: "Less than two-thirds of the night", ur: "رات کے دو تہائی سے کم" }, explanation: { en: "Prophet's devotion exceeded requirement", ur: "نبی ﷺ کی عبادت فرض سے بڑھ کر تھی" }, verseRef: "73:20" },
        { term: "لَّن تُحْصُوهُ", meaning: { en: "You cannot count it precisely", ur: "تم اسے بالکل صحیح نہیں گن سکتے" }, explanation: { en: "Exact measurement difficult", ur: "درست اندازہ مشکل" }, verseRef: "73:20" },
        { term: "فَتَابَ عَلَيْكُمْ", meaning: { en: "So He turned to you in mercy", ur: "پس اللہ نے تم پر رحم فرمایا" }, explanation: { en: "Obligation lightened to ease", ur: "فرض ہلکا کر کے آسانی دی" }, verseRef: "73:20" },
        { term: "فَاقْرَءُوا مَا تَيَسَّرَ", meaning: { en: "Recite what is easy", ur: "جتنا آسان ہو پڑھ لو" }, explanation: { en: "New ruling: recite what's convenient", ur: "نیا حکم: جتنا آسان ہو اتنا پڑھو" }, verseRef: "73:20" }
      ]
    },

    excusesForLightening: {
      name: "Reasons for Concession",
      nameUr: "رعایت کی وجوہات",
      nameArabic: "أسباب التخفيف",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "مَّرْضَىٰ", meaning: { en: "Sick ones", ur: "بیمار لوگ" }, explanation: { en: "Illness excuses extensive night prayer", ur: "بیماری طویل قیام اللیل سے مستثنیٰ کرتی ہے" }, verseRef: "73:20" },
        { term: "يَضْرِبُونَ فِي الْأَرْضِ", meaning: { en: "Traveling in the land", ur: "زمین میں سفر کرنے والے" }, explanation: { en: "Traders traveling for livelihood", ur: "رزق کے لیے سفر کرنے والے تاجر" }, verseRef: "73:20" },
        { term: "يَبْتَغُونَ مِن فَضْلِ اللَّهِ", meaning: { en: "Seeking Allah's bounty", ur: "اللہ کا فضل تلاش کرنے والے" }, explanation: { en: "Commerce is permissible", ur: "تجارت جائز ہے" }, verseRef: "73:20" },
        { term: "يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ", meaning: { en: "Fighting in Allah's way", ur: "اللہ کی راہ میں لڑنے والے" }, explanation: { en: "Jihad also excuses", ur: "جہاد بھی معذرت کی وجہ ہے" }, verseRef: "73:20" }
      ]
    },

    finalInjunctions: {
      name: "Final Commands",
      nameUr: "اختتامی احکام",
      nameArabic: "الأوامر الختامية",
      color: '#10B981',
      icon: 'Compass',
      concepts: [
        { term: "أَقِيمُوا الصَّلَاةَ", meaning: { en: "Establish prayer", ur: "نماز قائم کرو" }, explanation: { en: "Regular obligatory prayers", ur: "باقاعدہ فرض نمازیں" }, verseRef: "73:20" },
        { term: "آتُوا الزَّكَاةَ", meaning: { en: "Give zakah", ur: "زکوٰۃ دو" }, explanation: { en: "Obligatory charity", ur: "فرض صدقہ" }, verseRef: "73:20" },
        { term: "أَقْرِضُوا اللَّهَ قَرْضًا حَسَنًا", meaning: { en: "Loan Allah a goodly loan", ur: "اللہ کو اچھا قرض دو" }, explanation: { en: "Extra charity beyond zakah", ur: "زکوٰۃ کے علاوہ اضافی صدقہ" }, verseRef: "73:20" },
        { term: "وَاسْتَغْفِرُوا اللَّهَ", meaning: { en: "Seek forgiveness from Allah", ur: "اللہ سے مغفرت مانگو" }, explanation: { en: "Constant istighfar", ur: "مسلسل استغفار" }, verseRef: "73:20" }
      ]
    }
  },

  relationships: [
    { from: "المزمل", to: "المدثر", type: "parallel", description: { en: "Both address Prophet wrapped/covered after revelation", ur: "دونوں سورتیں وحی کے بعد لپٹے ہوئے نبی ﷺ کو مخاطب کرتی ہیں" } },
    { from: "قم الليل", to: "فاقرءوا ما تيسر", type: "abrogation", description: { en: "Initial night prayer requirement lightened", ur: "ابتدائی قیام اللیل کا حکم ہلکا کیا گیا" } },
    { from: "ناشئة الليل", to: "سبحاً طويلاً", type: "contrast", description: { en: "Night = worship; Day = worldly duties", ur: "رات = عبادت؛ دن = دنیوی فرائض" } },
    { from: "أرسلنا إليكم رسولاً", to: "أرسلنا إلى فرعون", type: "parallel", description: { en: "Prophet to Quraysh = Musa to Pharaoh", ur: "قریش کو نبی = فرعون کو موسیٰ" } },
    { from: "فعصى فرعون", to: "أخذاً وبيلاً", type: "consequence", description: { en: "Disobedience → severe punishment", ur: "نافرمانی → سخت سزا" } },
    { from: "قولاً ثقيلاً", to: "رتل القرآن ترتيلاً", type: "causation", description: { en: "Heavy word requires careful recitation", ur: "بھاری کلام کے لیے احتیاط سے تلاوت ضروری" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Night Prayer Command", verses: "73:1-4", description: { en: "Stand at night, half or more, recite slowly", ur: "رات کو کھڑے ہو، آدھی یا زیادہ، آہستہ پڑھو" } },
      { stage: 2, theme: "Weighty Revelation", verses: "73:5-6", description: { en: "Heavy word; night prayer most impactful", ur: "بھاری کلام؛ قیام اللیل سب سے مؤثر" } },
      { stage: 3, theme: "Day's Occupation", verses: "73:7-9", description: { en: "Day busy; remember Allah; take Him as Wakīl", ur: "دن مصروف؛ اللہ کو یاد کرو؛ اسے وکیل بناؤ" } },
      { stage: 4, theme: "Patience & Warning", verses: "73:10-14", description: { en: "Be patient; leave deniers; Hell awaits", ur: "صبر کرو؛ جھٹلانے والوں کو چھوڑو؛ جہنم منتظر ہے" } },
      { stage: 5, theme: "Pharaoh's Parallel", verses: "73:15-16", description: { en: "Quraysh warned like Pharaoh was", ur: "قریش کو ویسی ہی تنبیہ جیسی فرعون کو تھی" } },
      { stage: 6, theme: "Day's Terror", verses: "73:17-19", description: { en: "Children age; sky splits; choose your path", ur: "بچے بوڑھے ہو جائیں؛ آسمان پھٹے؛ اپنا راستہ چنو" } },
      { stage: 7, theme: "Lightened Ruling", verses: "73:20", description: { en: "Long Madani verse: recite what's easy; excuses for sick, travelers, fighters; establish prayer, zakah, loan to Allah, istighfar", ur: "طویل مدنی آیت: جتنا آسان ہو پڑھو؛ بیماروں، مسافروں، مجاہدین کے عذر؛ نماز، زکوٰۃ، اللہ کو قرض، استغفار" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Establish tahajjud", how: "Even if small, night prayer connects you to Allah", verse: "73:2-4" },
      { principle: "Recite with tarteel", how: "Slow, measured recitation with contemplation", verse: "73:4" },
      { principle: "Balance worship and work", how: "Night for worship, day for responsibilities", verse: "73:7" },
      { principle: "Complete devotion", how: "Tabattul - detach heart from worldly to focus on Allah", verse: "73:8" },
      { principle: "Gracious avoidance", how: "Leave opponents without bitterness or revenge", verse: "73:10" },
      { principle: "Learn from history", how: "Pharaoh's fate warns all who reject messengers", verse: "73:15-16" },
      { principle: "Recite what's easy", how: "Allah eases obligations based on circumstances", verse: "73:20" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Tarteel Principle", ur: "ترتیل کا اصول" },
    insight: { en: "Verse 4's 'رَتِّلِ الْقُرْآنَ تَرْتِيلًا' establishes the fundamental principle of Quranic recitation. Tarteel comes from ratl (رتل) meaning 'arranging teeth evenly' - hence, measured, unhurried recitation where each letter gets its due. This is not about speed or quantity, but quality. When Umm Salamah was asked about the Prophet's recitation, she said he would recite 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' separating each word distinctly. Ali (RA) defined tarteel as 'tajweed of letters and knowledge of stops.' This command came before any tajweed rules existed - Allah first established the principle of careful, beautiful recitation, and the detailed rules developed around it. The cognate accusative 'تَرْتِيلًا' emphasizes: recite with REAL tarteel, not perfunctory reading.", ur: "آیت 4 کا 'رَتِّلِ الْقُرْآنَ تَرْتِيلًا' قرآنی تلاوت کا بنیادی اصول قائم کرتا ہے۔ ترتیل 'رتل' سے ہے جس کا مطلب 'دانتوں کو برابر ترتیب دینا' ہے - یعنی ناپی تلی، غیر جلدی تلاوت جہاں ہر حرف کا حق ادا ہو۔ یہ رفتار یا مقدار کی نہیں بلکہ معیار کی بات ہے۔ ام سلمہ سے جب نبی ﷺ کی تلاوت کے بارے میں پوچھا گیا تو فرمایا کہ آپ 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' میں ہر لفظ الگ الگ پڑھتے۔ علی رضی اللہ عنہ نے ترتیل کی تعریف کی: 'حروف کی تجوید اور وقف کا علم۔' یہ حکم کسی تجوید کے قواعد سے پہلے آیا - اللہ نے پہلے محتاط، خوبصورت تلاوت کا اصول قائم کیا، تفصیلی قواعد بعد میں بنے۔ مفعول مطلق 'تَرْتِيلًا' زور دیتا ہے: حقیقی ترتیل سے پڑھو، نہ کہ لاپرواہی سے۔" }
  },

  historicalContext: {
    note: { en: "One of earliest surahs revealed, soon after Al-Muddaththir. Prophet ﷺ was wrapped in garments either from cold or from the weight of revelation. The night prayer was initially obligatory for the Prophet and companions, with verses 1-19 revealed in Makkah. Verse 20, revealed later in Madinah (possibly 15+ years later), lightened this obligation. This represents one of the clearest cases of abrogation (naskh) within a single surah. The Madani verse is remarkably long, covering multiple injunctions, reflecting the developed community's needs.", ur: "ابتدائی نازل ہونے والی سورتوں میں سے، المدثر کے فوراً بعد۔ نبی ﷺ سردی سے یا وحی کے بوجھ سے کپڑوں میں لپٹے ہوئے تھے۔ قیام اللیل نبی ﷺ اور صحابہ پر پہلے فرض تھا، آیات 1-19 مکہ میں نازل ہوئیں۔ آیت 20 بعد میں مدینہ میں (شاید 15 سال سے زیادہ بعد) نازل ہوئی جس نے یہ فرض ہلکا کیا۔ یہ ایک ہی سورت میں نسخ کی واضح ترین مثال ہے۔ مدنی آیت قابلِ ذکر حد تک طویل ہے، کئی احکام پر مشتمل، ترقی یافتہ معاشرے کی ضروریات کی عکاسی کرتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "الْمُزَّمِّلُ", example: { en: "Form V participle", ur: "باب تفعّل کا اسم فاعل" }, effect: "Intensive wrapping - heavily covered" },
      { feature: "تَرْتِيلًا", example: { en: "Cognate accusative", ur: "مفعول مطلق" }, effect: "Emphasis: recite with REAL tarteel" },
      { feature: "تَبَتَّلْ... تَبْتِيلًا", example: { en: "Form V verb + Form II verbal noun", ur: "باب تفعّل فعل + باب تفعیل مصدر" }, effect: "Mixed forms for intensity - unusual" },
      { feature: "قَوْلًا ثَقِيلًا", example: { en: "Heavy word", ur: "بھاری کلام" }, effect: "Weighty in obligation and meaning" },
      { feature: "كَثِيبًا مَّهِيلًا", example: { en: "Sand heap pouring", ur: "بہتی ریت کا ڈھیر" }, effect: "Vivid image of mountains disintegrating" },
      { feature: "Verse 20 length", example: { en: "Longest verse after Āyat al-Dayn", ur: "آیت الدین کے بعد طویل ترین آیت" }, effect: "Comprehensive concluding legislation" }
    ]
  },

  comparativeAnalysis: {
    muzzammilVsMuddaththir: {
      similarities: [
        "Both address Prophet in wrapped state",
        "Both among earliest revelations",
        "Both command rising for mission"
      ],
      differences: [
        "Muzzammil: Focus on personal spiritual preparation (night prayer)",
        "Muddaththir: Focus on public mission (arise and warn)",
        "Muzzammil: قُمِ اللَّيْلَ (stand at night)",
        "Muddaththir: قُمْ فَأَنذِرْ (arise and warn)"
      ]
    }
  },

  scientificReferences: {
    notes: [
      { verse: "73:6", topic: "Night prayer benefits", note: "ناشئة الليل - rising at night is 'أشد وطئاً' (more impactful); modern sleep science shows early morning hours involve REM sleep and enhanced cognitive/spiritual receptivity" }
    ]
  }
};

export default ONTOLOGY;
