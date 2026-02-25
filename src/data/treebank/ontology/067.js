/**
 * Surah Al-Mulk (67) - Ontology of Quranic Concepts
 * The Sovereignty / Dominion
 * Theme: Allah's sovereignty, perfect creation, accountability, blessings
 */

export const ONTOLOGY = {
  surahId: 67,
  surahName: "Al-Mulk",
  surahNameArabic: "الملك",
  revelationType: "Makki",
  totalAyahs: 30,

  categories: {
    divineSovereignty: {
      name: "Divine Sovereignty",
      nameUr: "الٰہی بادشاہت",
      nameArabic: "الملك الإلهي",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ", meaning: { en: "Blessed is He in Whose Hand is dominion", ur: "بابرکت ہے وہ جس کے ہاتھ میں بادشاہی ہے" }, explanation: { en: "Opening declaration of Allah's absolute control", ur: "Allah کے مطلق اختیار کا افتتاحی اعلان" }, verseRef: "67:1" },
        { term: "عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: { en: "Over all things competent", ur: "ہر چیز پر قادر" }, explanation: { en: "Unlimited divine power", ur: "لامحدود الٰہی طاقت" }, verseRef: "67:1" }
      ]
    },
    purposeOfLife: {
      name: "Purpose of Life",
      nameUr: "زندگی کا مقصد",
      nameArabic: "الحكمة من الخلق",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "خَلَقَ الْمَوْتَ وَالْحَيَاةَ", meaning: { en: "Created death and life", ur: "موت اور زندگی پیدا کی" }, explanation: { en: "Death mentioned first - reminder of return to Allah", ur: "موت کا ذکر پہلے - Allah کی طرف واپسی کی یاد دہانی" }, verseRef: "67:2" },
        { term: "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا", meaning: { en: "To test you - which is best in deed", ur: "تاکہ تمہیں آزمائے کون عمل میں بہتر ہے" }, explanation: { en: "Life is a test of quality, not quantity", ur: "زندگی معیار کا امتحان ہے، مقدار کا نہیں" }, verseRef: "67:2" },
        { term: "الْعَزِيزُ الْغَفُورُ", meaning: { en: "The Mighty, the Forgiving", ur: "غالب، بخشنے والا" }, explanation: { en: "Power to punish, yet chooses to forgive", ur: "سزا دینے کی طاقت، مگر معاف کرنے کا انتخاب" }, verseRef: "67:2" }
      ]
    },
    perfectCreation: {
      name: "Perfection of Creation",
      nameUr: "تخلیق کا کمال",
      nameArabic: "كمال الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "سَبْعَ سَمَاوَاتٍ طِبَاقًا", meaning: { en: "Seven heavens in layers", ur: "سات آسمان تہ بہ تہ" }, explanation: { en: "Multi-layered cosmic structure", ur: "کئی طبقات والی کائناتی ساخت" }, verseRef: "67:3" },
        { term: "مَا تَرَىٰ... مِن تَفَاوُتٍ", meaning: { en: "You see no inconsistency", ur: "تم کوئی بے ترتیبی نہیں دیکھو گے" }, explanation: { en: "No flaws in creation", ur: "تخلیق میں کوئی نقص نہیں" }, verseRef: "67:3" },
        { term: "فَارْجِعِ الْبَصَرَ", meaning: { en: "Return your vision", ur: "نظر دوبارہ ڈالو" }, explanation: { en: "Challenge to find any flaw", ur: "کوئی نقص ڈھونڈنے کا چیلنج" }, verseRef: "67:3" },
        { term: "يَنقَلِبْ... خَاسِئًا وَهُوَ حَسِيرٌ", meaning: { en: "Returns humbled and fatigued", ur: "نظر ذلیل اور تھکی ہوئی واپس آئے گی" }, explanation: { en: "Vision returns unable to find defect", ur: "نظر نقص ڈھونڈنے سے قاصر واپس آتی ہے" }, verseRef: "67:4" }
      ]
    },
    cosmicSigns: {
      name: "Cosmic Signs",
      nameUr: "کائناتی نشانیاں",
      nameArabic: "الآيات الكونية",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "زَيَّنَّا السَّمَاءَ... بِمَصَابِيحَ", meaning: { en: "Adorned heaven with lamps", ur: "آسمان کو چراغوں سے سجایا" }, explanation: { en: "Stars as decoration and guidance", ur: "ستارے بطور زینت اور رہنمائی" }, verseRef: "67:5" },
        { term: "رُجُومًا لِّلشَّيَاطِينِ", meaning: { en: "Missiles for devils", ur: "شیاطین کو مارنے کے لیے" }, explanation: { en: "Stars protect against eavesdropping jinn", ur: "ستارے چھپ کر سننے والے جنوں سے حفاظت کرتے ہیں" }, verseRef: "67:5" },
        { term: "الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ", meaning: { en: "Birds spreading and folding wings", ur: "پرندے پر پھیلائے اور سمیٹے" }, explanation: { en: "Only Allah holds them aloft", ur: "صرف Allah انہیں ہوا میں تھامے ہے" }, verseRef: "67:19" }
      ]
    },
    hellDescription: {
      name: "Description of Hell",
      nameUr: "جہنم کا بیان",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "عَذَابُ جَهَنَّمَ", meaning: { en: "Punishment of Hell", ur: "جہنم کا عذاب" }, explanation: { en: "Prepared for disbelievers", ur: "کافروں کے لیے تیار" }, verseRef: "67:6" },
        { term: "سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ", meaning: { en: "They hear inhaling while it boils", ur: "وہ اس کی چیخ سنیں گے جب وہ ابل رہی ہوگی" }, explanation: { en: "Hell has sound and heat", ur: "جہنم میں آواز اور حرارت ہے" }, verseRef: "67:7" },
        { term: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ", meaning: { en: "Almost bursting from rage", ur: "غصے سے پھٹنے کو ہے" }, explanation: { en: "Hell itself is angry at sinners", ur: "جہنم خود گنہگاروں پر غضبناک ہے" }, verseRef: "67:8" },
        { term: "أَلَمْ يَأْتِكُمْ نَذِيرٌ", meaning: { en: "Did not a warner come to you?", ur: "کیا تمہارے پاس ڈرانے والا نہیں آیا تھا؟" }, explanation: { en: "Hell's keepers question new arrivals", ur: "جہنم کے داروغے نئے آنے والوں سے سوال کرتے ہیں" }, verseRef: "67:8" }
      ]
    },
    admissionOfGuilt: {
      name: "Admission of Guilt",
      nameUr: "گناہ کا اعتراف",
      nameArabic: "الاعتراف بالذنب",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ", meaning: { en: "We denied and said Allah sent nothing", ur: "ہم نے جھٹلایا اور کہا Allah نے کچھ نازل نہیں کیا" }, explanation: { en: "Admission of rejecting truth", ur: "حق کے انکار کا اعتراف" }, verseRef: "67:9" },
        { term: "لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ", meaning: { en: "If only we had listened or reasoned", ur: "کاش ہم سنتے یا عقل سے کام لیتے" }, explanation: { en: "Regret for not using intellect", ur: "عقل استعمال نہ کرنے کا پچھتاوا" }, verseRef: "67:10" },
        { term: "فَاعْتَرَفُوا بِذَنبِهِمْ", meaning: { en: "So they will admit their sin", ur: "پس وہ اپنے گناہ کا اعتراف کریں گے" }, explanation: { en: "Too late confession", ur: "بہت دیر کا اعتراف" }, verseRef: "67:11" },
        { term: "فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ", meaning: { en: "Away with companions of Blaze", ur: "دوزخیوں کے لیے دوری (رحمت سے)" }, explanation: { en: "Curse upon them", ur: "ان پر لعنت" }, verseRef: "67:11" }
      ]
    },
    rewardForRighteous: {
      name: "Reward for Righteous",
      nameUr: "متقیوں کا اجر",
      nameArabic: "جزاء المتقين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ", meaning: { en: "Fear their Lord unseen", ur: "اپنے رب سے بن دیکھے ڈرتے ہیں" }, explanation: { en: "Faith without physical seeing", ur: "بغیر دیکھے ایمان" }, verseRef: "67:12" },
        { term: "مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ", meaning: { en: "Forgiveness and great reward", ur: "مغفرت اور بڑا اجر" }, explanation: { en: "Double blessing for believers", ur: "مومنوں کے لیے دوہرا انعام" }, verseRef: "67:12" }
      ]
    },
    divineKnowledge: {
      name: "Divine Knowledge",
      nameUr: "الٰہی علم",
      nameArabic: "العلم الإلهي",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "أَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ", meaning: { en: "Conceal or publicize your speech", ur: "اپنی بات چھپاؤ یا اعلانیہ کہو" }, explanation: { en: "Allah hears all regardless", ur: "Allah بہرحال سب سنتا ہے" }, verseRef: "67:13" },
        { term: "عَلِيمٌ بِذَاتِ الصُّدُورِ", meaning: { en: "Knowing of what is within breasts", ur: "سینوں کی باتوں کو جاننے والا" }, explanation: { en: "Allah knows even thoughts", ur: "Allah خیالات بھی جانتا ہے" }, verseRef: "67:13" },
        { term: "أَلَا يَعْلَمُ مَنْ خَلَقَ", meaning: { en: "Would He not know who created?", ur: "کیا وہ نہیں جانتا جس نے پیدا کیا؟" }, explanation: { en: "Creator knows creation intimately", ur: "خالق مخلوق کو بخوبی جانتا ہے" }, verseRef: "67:14" },
        { term: "اللَّطِيفُ الْخَبِيرُ", meaning: { en: "The Subtle, the Aware", ur: "باریک بین، باخبر" }, explanation: { en: "Knows finest details", ur: "باریک ترین تفصیلات جانتا ہے" }, verseRef: "67:14" }
      ]
    },
    earthlyBlessings: {
      name: "Earthly Blessings",
      nameUr: "زمین کی نعمتیں",
      nameArabic: "نعم الأرض",
      color: '#22C55E',
      icon: 'Globe',
      concepts: [
        { term: "جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا", meaning: { en: "Made the earth tame for you", ur: "زمین کو تمہارے لیے نرم بنایا" }, explanation: { en: "Earth submits to human use", ur: "زمین انسانی استعمال کے لیے مسخر" }, verseRef: "67:15" },
        { term: "فَامْشُوا فِي مَنَاكِبِهَا", meaning: { en: "Walk among its paths", ur: "اس کے راستوں میں چلو" }, explanation: { en: "Travel and explore freely", ur: "آزادانہ سفر اور تلاش کرو" }, verseRef: "67:15" },
        { term: "وَكُلُوا مِن رِّزْقِهِ", meaning: { en: "Eat from His provision", ur: "اس کے رزق سے کھاؤ" }, explanation: { en: "All sustenance is from Allah", ur: "تمام رزق Allah کی طرف سے ہے" }, verseRef: "67:15" },
        { term: "وَإِلَيْهِ النُّشُورُ", meaning: { en: "And to Him is resurrection", ur: "اور اسی کی طرف اٹھ کر جانا ہے" }, explanation: { en: "Reminder amid blessings", ur: "نعمتوں کے درمیان یاد دہانی" }, verseRef: "67:15" }
      ]
    },
    divineWarnings: {
      name: "Divine Warnings",
      nameUr: "الٰہی تنبیہات",
      nameArabic: "التحذيرات الإلهية",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "أَن يَخْسِفَ بِكُمُ الْأَرْضَ", meaning: { en: "To make the earth swallow you", ur: "تمہیں زمین میں دھنسا دے" }, explanation: { en: "Earth can turn against you", ur: "زمین تمہارے خلاف ہو سکتی ہے" }, verseRef: "67:16" },
        { term: "يُرْسِلَ عَلَيْكُمْ حَاصِبًا", meaning: { en: "Send upon you a storm of stones", ur: "تم پر پتھروں کی بارش بھیج دے" }, explanation: { en: "Divine punishment from sky", ur: "آسمان سے الٰہی عذاب" }, verseRef: "67:17" },
        { term: "وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ", meaning: { en: "Already denied those before them", ur: "ان سے پہلے والوں نے بھی جھٹلایا" }, explanation: { en: "Historical precedent of destruction", ur: "تباہی کی تاریخی مثالیں" }, verseRef: "67:18" },
        { term: "فَكَيْفَ كَانَ نَكِيرِ", meaning: { en: "How was My rejection", ur: "پھر میرا عذاب کیسا تھا" }, explanation: { en: "Rhetorical - punishment was severe", ur: "بلاغی سوال - عذاب سخت تھا" }, verseRef: "67:18" }
      ]
    },
    humanDependence: {
      name: "Human Dependence on Allah",
      nameUr: "اللہ پر انسان کا انحصار",
      nameArabic: "اعتماد البشر على الله",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ", meaning: { en: "None holds them except the Most Merciful", ur: "انہیں رحمٰن کے سوا کوئی نہیں تھامے" }, explanation: { en: "Birds' flight depends on Allah", ur: "پرندوں کی پرواز Allah پر منحصر ہے" }, verseRef: "67:19" },
        { term: "أَمَّنْ هَٰذَا الَّذِي... يَنصُرُكُم", meaning: { en: "Who is this that would help you?", ur: "وہ کون ہے جو تمہاری مدد کرے؟" }, explanation: { en: "No army can help against Allah", ur: "Allah کے مقابلے میں کوئی لشکر مدد نہیں کر سکتا" }, verseRef: "67:20" },
        { term: "يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ", meaning: { en: "Would provide if He withheld provision", ur: "اگر وہ رزق روک لے تو کون دے گا؟" }, explanation: { en: "All sustenance is from Allah alone", ur: "تمام رزق صرف Allah کی طرف سے ہے" }, verseRef: "67:21" }
      ]
    },
    twoPaths: {
      name: "Two Paths",
      nameUr: "دو راستے",
      nameArabic: "الطريقان",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "مُكِبًّا عَلَىٰ وَجْهِهِ", meaning: { en: "Fallen on his face", ur: "اوندھے منہ گرا ہوا" }, explanation: { en: "Disbeliever walks blind and stumbling", ur: "کافر اندھا اور لڑکھڑاتا چلتا ہے" }, verseRef: "67:22" },
        { term: "يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "Walks upright on straight path", ur: "سیدھے راستے پر سیدھا چلتا ہے" }, explanation: { en: "Believer walks guided and stable", ur: "مومن ہدایت یافتہ اور مستحکم چلتا ہے" }, verseRef: "67:22" }
      ]
    },
    humanFaculties: {
      name: "Human Faculties",
      nameUr: "انسانی صلاحیتیں",
      nameArabic: "قدرات الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "أَنشَأَكُمْ", meaning: { en: "Produced you", ur: "تمہیں پیدا کیا" }, explanation: { en: "Allah originated creation", ur: "Allah نے تخلیق کی ابتدا کی" }, verseRef: "67:23" },
        { term: "السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ", meaning: { en: "Hearing, vision, and hearts", ur: "کان، آنکھیں اور دل" }, explanation: { en: "Three gifts - use for guidance", ur: "تین نعمتیں - ہدایت کے لیے استعمال کرو" }, verseRef: "67:23" },
        { term: "قَلِيلًا مَّا تَشْكُرُونَ", meaning: { en: "Little you are grateful", ur: "تم بہت کم شکر کرتے ہو" }, explanation: { en: "Ingratitude for blessings", ur: "نعمتوں کی ناشکری" }, verseRef: "67:23" }
      ]
    },
    finalDestination: {
      name: "Final Destination",
      nameUr: "آخری ٹھکانا",
      nameArabic: "المصير النهائي",
      color: '#EC4899',
      icon: 'Scale',
      concepts: [
        { term: "ذَرَأَكُمْ فِي الْأَرْضِ", meaning: { en: "Dispersed you in earth", ur: "تمہیں زمین میں پھیلایا" }, explanation: { en: "Spread humanity across earth", ur: "انسانیت کو زمین پر بکھیرا" }, verseRef: "67:24" },
        { term: "وَإِلَيْهِ تُحْشَرُونَ", meaning: { en: "And to Him you will be gathered", ur: "اور اسی کی طرف تم جمع کیے جاؤ گے" }, explanation: { en: "All return to Allah", ur: "سب Allah کی طرف لوٹیں گے" }, verseRef: "67:24" },
        { term: "مَتَىٰ هَٰذَا الْوَعْدُ", meaning: { en: "When is this promise?", ur: "یہ وعدہ کب پورا ہوگا؟" }, explanation: { en: "Mockers demanding date", ur: "مذاق اڑانے والے تاریخ مانگتے ہیں" }, verseRef: "67:25" },
        { term: "إِنَّمَا الْعِلْمُ عِندَ اللَّهِ", meaning: { en: "Knowledge is only with Allah", ur: "علم صرف Allah کے پاس ہے" }, explanation: { en: "Only Allah knows timing", ur: "صرف Allah وقت جانتا ہے" }, verseRef: "67:26" }
      ]
    },
    waterBlessing: {
      name: "The Water Blessing",
      nameUr: "پانی کی نعمت",
      nameArabic: "نعمة الماء",
      color: '#06B6D4',
      icon: 'Sparkles',
      concepts: [
        { term: "إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا", meaning: { en: "If your water becomes sunken", ur: "اگر تمہارا پانی زمین میں اتر جائے" }, explanation: { en: "Water could disappear into earth", ur: "پانی زمین میں غائب ہو سکتا ہے" }, verseRef: "67:30" },
        { term: "فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ", meaning: { en: "Who could bring you flowing water?", ur: "کون تمہیں بہتا پانی لا کر دے گا؟" }, explanation: { en: "Only Allah provides water - final rhetorical question", ur: "صرف Allah پانی دیتا ہے - آخری بلاغی سوال" }, verseRef: "67:30" }
      ]
    }
  },

  relationships: [
    { from: "بيده الملك", to: "قدير", type: "expansion", description: { en: "Dominion implies power over all", ur: "بادشاہت ہر چیز پر قدرت کی علامت ہے" } },
    { from: "الموت والحياة", to: "ليبلوكم", type: "purpose", description: { en: "Life/death exist for testing", ur: "زندگی/موت آزمائش کے لیے ہیں" } },
    { from: "تفاوت/فطور", to: "خاسئاً حسير", type: "result", description: { en: "Searching for flaws leads to failure", ur: "نقص ڈھونڈنا ناکامی پر ختم ہوتا ہے" } },
    { from: "نسمع أو نعقل", to: "أصحاب السعير", type: "cause", description: { en: "Ignoring faculties leads to Hell", ur: "صلاحیتوں کو نظرانداز کرنا جہنم لے جاتا ہے" } },
    { from: "يخشون بالغيب", to: "مغفرة وأجر", type: "reward", description: { en: "Fear leads to forgiveness", ur: "خوفِ خدا مغفرت کا ذریعہ ہے" } },
    { from: "مكباً على وجهه", to: "سوياً على صراط", type: "contrast", description: { en: "Disbeliever vs believer paths", ur: "کافر بمقابلہ مومن کا راستہ" } },
    { from: "السمع والأبصار والأفئدة", to: "قليلاً ما تشكرون", type: "irony", description: { en: "Faculties given but gratitude lacking", ur: "صلاحیتیں دی گئیں مگر شکر نہیں" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Sovereignty", verses: "67:1-2", description: { en: "Allah's dominion and purpose of life", ur: "Allah کی بادشاہت اور زندگی کا مقصد" } },
      { stage: 2, theme: "Perfect Creation", verses: "67:3-5", description: { en: "Flawless heavens, stars as lamps", ur: "بے عیب آسمان، ستارے بطور چراغ" } },
      { stage: 3, theme: "Hell's Questioning", verses: "67:6-11", description: { en: "Disbelievers' admission of guilt", ur: "کافروں کا گناہ کا اعتراف" } },
      { stage: 4, theme: "Believer's Reward", verses: "67:12-14", description: { en: "Fear unseen, Allah's knowledge", ur: "غائبانہ خوف، Allah کا علم" } },
      { stage: 5, theme: "Earth's Blessings", verses: "67:15-21", description: { en: "Tame earth, provision, dependence", ur: "مسخر زمین، رزق، انحصار" } },
      { stage: 6, theme: "Two Paths", verses: "67:22-24", description: { en: "Stumbling vs upright walking", ur: "لڑکھڑانا بمقابلہ سیدھا چلنا" } },
      { stage: 7, theme: "Final Questions", verses: "67:25-30", description: { en: "When? Only Allah knows; water blessing", ur: "کب؟ صرف Allah جانتا ہے؛ پانی کی نعمت" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Focus on quality of deeds", how: "Best in deed, not most in deed", verse: "67:2" },
      { principle: "Contemplate creation", how: "Look at sky repeatedly - see perfection", verse: "67:3-4" },
      { principle: "Use intellect", how: "Listen and reason - don't be like Hell's residents", verse: "67:10" },
      { principle: "Fear Allah privately", how: "Fear Him in the unseen - when alone", verse: "67:12" },
      { principle: "Guard thoughts", how: "Allah knows what's in hearts - purify intentions", verse: "67:13" },
      { principle: "Be grateful for senses", how: "Thank Allah for hearing, sight, hearts", verse: "67:23" },
      { principle: "Remember water blessing", how: "Don't take water for granted", verse: "67:30" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Protective Surah", ur: "حفاظت کرنے والی سورت" },
    insight: { en: "Prophet Muhammad ﷺ said about this surah: 'There is a surah in the Quran of thirty verses that interceded for a man until he was forgiven. It is Tabarak alladhi biyadihil-mulk' (Tirmidhi). Known as 'al-Munjiyah' (the Savior) and 'al-Mani'ah' (the Protector), this surah is recommended to recite every night before sleep. Its structure is remarkable: it begins with Allah's sovereignty (v.1), questions human purpose (v.2), demonstrates perfect creation (v.3-5), warns of Hell (v.6-11), promises reward (v.12), and ends with ultimate dependence - water (v.30). The final question 'Who could bring you flowing water?' encapsulates the entire surah's message: complete dependence on Allah for everything, from cosmic order to daily water.", ur: "نبی ﷺ نے اس سورت کے بارے میں فرمایا: 'قرآن میں تیس آیات کی ایک سورت ہے جس نے ایک شخص کی شفاعت کی یہاں تک کہ اسے معاف کر دیا گیا۔ وہ تبارک الذی بیدہ الملک ہے' (ترمذی)۔ 'المنجیہ' (نجات دلانے والی) اور 'المانعہ' (حفاظت کرنے والی) کے نام سے مشہور اس سورت کو ہر رات سونے سے پہلے پڑھنے کی سفارش ہے۔ اس کی ساخت شاندار ہے: Allah کی بادشاہت سے شروع (آیت 1)، زندگی کے مقصد کا سوال (آیت 2)، کامل تخلیق کا مظاہرہ (آیت 3-5)، جہنم کی تنبیہ (آیت 6-11)، اجر کا وعدہ (آیت 12)، اور آخر میں مکمل انحصار - پانی (آیت 30)۔ آخری سوال 'کون تمہیں بہتا پانی لا دے گا؟' پوری سورت کا پیغام سمیٹ لیتا ہے: کائناتی نظام سے لے کر روزمرہ کے پانی تک ہر چیز کے لیے Allah پر مکمل انحصار۔" }
  },

  historicalContext: {
    note: { en: "This Makki surah addresses the fundamental belief in Allah's sovereignty and the reality of accountability. The challenge to find flaws in creation (v.3-4) addresses Arab polytheists who believed in multiple gods for different functions. The reference to water 'becoming sunken' (v.30) would resonate deeply with desert Arabs entirely dependent on wells and springs. The surah is sometimes called 'Tabarak' (Blessed) after its opening word.", ur: "یہ مکی سورت Allah کی بادشاہت اور احتساب کی حقیقت کے بنیادی عقیدے سے خطاب کرتی ہے۔ تخلیق میں نقص ڈھونڈنے کا چیلنج (آیت 3-4) عرب مشرکین کو مخاطب ہے جو مختلف کاموں کے لیے متعدد خداؤں پر یقین رکھتے تھے۔ پانی کے 'زمین میں اتر جانے' (آیت 30) کا حوالہ صحرائی عربوں کے لیے خاص اہمیت رکھتا تھا جو کنوؤں اور چشموں پر مکمل انحصار کرتے تھے۔ سورت کو اس کے پہلے لفظ کی وجہ سے 'تبارک' بھی کہا جاتا ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "تَبَارَكَ", example: { en: "Form VI verb", ur: "باب تفاعل کا فعل" }, effect: "Intensive blessing - continuously blessed" },
      { feature: "طِبَاقًا", example: { en: "Layers", ur: "تہ بہ تہ" }, effect: "From طَبَق - stacked one upon another" },
      { feature: "خَاسِئًا حَسِيرًا", example: { en: "Humbled and fatigued", ur: "ذلیل اور تھکی ہوئی" }, effect: "Rhyming adjectives - complete failure" },
      { feature: "شَهِيق", example: { en: "Inhaling sound", ur: "چیخنے کی آواز" }, effect: "Onomatopoeia - Hell's gasping" },
      { feature: "ذَلُولًا", example: { en: "Submissive/tame", ur: "مسخر/نرم" }, effect: "faʿūl pattern - thoroughly tamed" },
      { feature: "مَّعِين", example: { en: "Flowing (water)", ur: "بہتا ہوا (پانی)" }, effect: "From عَيْن - visible, abundant spring" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "67:3", topic: "Layered heavens", note: "Seven layers - correlates with atmosphere layers or cosmic structure" },
      { verse: "67:5", topic: "Stars as missiles", note: "Meteors ('shooting stars') visible phenomena guarding space" },
      { verse: "67:15", topic: "Tame earth", note: "Earth's crust stable enough for habitation despite inner molten core" },
      { verse: "67:19", topic: "Bird flight", note: "Aerodynamics requires precise conditions Allah maintains" },
      { verse: "67:30", topic: "Groundwater", note: "Water table can recede - aquifers are finite resources" }
    ]
  }
};

export default ONTOLOGY;
