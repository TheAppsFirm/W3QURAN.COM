/**
 * Surah Al-Balad (90) - Ontology of Quranic Concepts
 * The City
 * Theme: Human struggle, the steep path of good deeds, two paths to success or failure
 */

export const ONTOLOGY = {
  surahId: 90,
  surahName: "Al-Balad",
  surahNameArabic: "البلد",
  revelationType: "Makki",
  totalAyahs: 20,

  categories: {
    sacredOaths: {
      name: "The Sacred Oaths",
      nameUr: "مقدس قسمیں",
      nameArabic: "القسم المقدس",
      color: '#8B5CF6',
      icon: 'Star',
      description: { en: "Allah swears by the city (Makkah), the Prophet's presence in it, and parenthood", ur: "اللہ شہر (مکہ)، اس میں نبی ﷺ کی موجودگی، اور والدین و اولاد کی قسم کھاتا ہے" },
      concepts: [
        {
          term: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ",
          transliteration: "Laa Uqsimu bi-haadhal-Balad",
          meaning: { en: "I do swear by this city", ur: "میں اس شہر کی قسم کھاتا ہوں" },
          explanation: { en: "Emphatic oath by Makkah, the sacred city. 'Laa uqsimu' is not negation but emphatic affirmation - 'I DO swear'. The city's sanctity is the basis of the oath.", ur: "مکہ مکرمہ کی تاکیدی قسم۔ 'لا اُقسم' نفی نہیں بلکہ تاکیدی اثبات ہے - 'میں ضرور قسم کھاتا ہوں'۔ شہر کی حرمت قسم کی بنیاد ہے۔" },
          verseRef: "90:1"
        },
        {
          term: "وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ",
          transliteration: "Wa-anta hillun bi-haadhal-Balad",
          meaning: { en: "And you are free of restriction in this city", ur: "اور آپ اس شہر میں حلال ہیں" },
          explanation: { en: "The Prophet ﷺ is 'hill' - his enemies have made his blood permissible (persecution), OR prophecy of conquest when fighting becomes permitted. His presence elevates the city's honor.", ur: "نبی ﷺ 'حِل' ہیں - ان کے دشمنوں نے ان کا خون حلال کر رکھا ہے (ظلم)، یا فتح مکہ کی پیشگوئی جب لڑائی جائز ہوگی۔ آپ کی موجودگی شہر کی عزت بڑھاتی ہے۔" },
          verseRef: "90:2"
        },
        {
          term: "وَوَالِدٍ وَمَا وَلَدَ",
          transliteration: "Wa-waalidin wa maa walad",
          meaning: { en: "And by the father and what he begot", ur: "اور والد کی قسم اور جو اس نے جنا" },
          explanation: { en: "Oath by parent-child relationship - Adam and humanity, Ibrahim and his descendants, or universally any parent and child. Foundation of human continuity.", ur: "والدین اور اولاد کے رشتے کی قسم - آدم اور انسانیت، ابراہیم اور ان کی اولاد، یا عمومی طور پر کوئی بھی والد اور بچہ۔ انسانی تسلسل کی بنیاد۔" },
          verseRef: "90:3"
        }
      ]
    },

    humanNature: {
      name: "Human Nature and Struggle",
      nameUr: "انسانی فطرت اور جدوجہد",
      nameArabic: "طبيعة الإنسان وكفاحه",
      color: '#06B6D4',
      icon: 'Users',
      description: { en: "The fundamental reality of human existence: created in struggle", ur: "انسانی وجود کی بنیادی حقیقت: مشقت میں پیدا کیا گیا" },
      concepts: [
        {
          term: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ",
          transliteration: "Laqad khalaqnal-Insaana fee kabad",
          meaning: { en: "We have certainly created man in hardship/struggle", ur: "بے شک ہم نے انسان کو مشقت میں پیدا کیا ہے" },
          explanation: { en: "The central thesis after the oaths. Kabad = hardship, struggle, toil. Life IS struggle - from birth's pain to death's journey. This is not punishment but design.", ur: "قسموں کے بعد مرکزی مضمون۔ کَبَد = مشقت، جدوجہد، محنت۔ زندگی خود جدوجہد ہے - پیدائش کے درد سے موت کے سفر تک۔ یہ سزا نہیں بلکہ تخلیقی منصوبہ ہے۔" },
          verseRef: "90:4"
        },
        {
          term: "كَبَد",
          transliteration: "Kabad",
          meaning: { en: "Hardship/struggle (also: liver)", ur: "مشقت/جدوجہد (بمعنی: جگر بھی)" },
          explanation: { en: "Unique word meaning hardship. Also means 'liver' - the organ of endurance, constantly working. Life is lived 'in the liver' of struggle. Rare Quranic term emphasizing the depth of this truth.", ur: "منفرد لفظ جس کا مطلب مشقت ہے۔ 'جگر' بھی کہتے ہیں - صبر کا عضو، مسلسل کام کرتا ہے۔ زندگی جدوجہد کے 'جگر' میں گزاری جاتی ہے۔ نایاب قرآنی اصطلاح جو اس حقیقت کی گہرائی پر زور دیتی ہے۔" },
          verseRef: "90:4"
        }
      ]
    },

    humanArrogance: {
      name: "Human Arrogance",
      nameUr: "انسانی تکبر",
      nameArabic: "غرور الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "The false assumptions of the arrogant person", ur: "مغرور شخص کے جھوٹے گمان" },
      concepts: [
        {
          term: "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ",
          transliteration: "A-yahsabu an lan yaqdira 'alayhi ahad",
          meaning: { en: "Does he think no one can overcome him?", ur: "کیا وہ سمجھتا ہے کہ کوئی اس پر قابو نہیں پا سکتا؟" },
          explanation: { en: "Rhetorical question exposing human delusion. The wealthy, powerful person thinks he's invincible. But Allah has ultimate power.", ur: "استفہامِ انکاری جو انسانی فریب کو بے نقاب کرتا ہے۔ دولت مند، طاقتور شخص سمجھتا ہے وہ ناقابلِ شکست ہے۔ لیکن اصل طاقت اللہ کی ہے۔" },
          verseRef: "90:5"
        },
        {
          term: "أَهْلَكْتُ مَالًا لُّبَدًا",
          transliteration: "Ahlaktu maalan lubada",
          meaning: { en: "I have spent wealth in abundance", ur: "میں نے ڈھیروں مال خرچ کیا" },
          explanation: { en: "Boastful claim. 'Ahlaktu' (I destroyed) for spending shows wasteful attitude. 'Lubadan' = heaps of wealth. Boasting about quantity, not quality of spending.", ur: "فخریہ دعویٰ۔ خرچ کے لیے 'اَہلکتُ' (میں نے تباہ کیا) فضول خرچی ظاہر کرتا ہے۔ 'لُبَدًا' = ڈھیروں دولت۔ خرچ کی مقدار پر فخر، معیار پر نہیں۔" },
          verseRef: "90:6"
        },
        {
          term: "أَيَحْسَبُ أَن لَّمْ يَرَهُ أَحَدٌ",
          transliteration: "A-yahsabu an lam yarahu ahad",
          meaning: { en: "Does he think no one has seen him?", ur: "کیا وہ سمجھتا ہے کسی نے اسے نہیں دیکھا؟" },
          explanation: { en: "Second rhetorical question. Does he think Allah doesn't see his spending? His motives? Whether it was for good or show? Allah sees all.", ur: "دوسرا استفہامِ انکاری۔ کیا وہ سمجھتا ہے اللہ اس کا خرچ نہیں دیکھتا؟ اس کی نیت؟ نیکی کے لیے تھا یا دکھاوے کے لیے؟ اللہ سب دیکھتا ہے۔" },
          verseRef: "90:7"
        }
      ]
    },

    divineBlessings: {
      name: "Divine Blessings and Guidance",
      nameUr: "الٰہی نعمتیں اور ہدایت",
      nameArabic: "النعم الإلهية والهداية",
      color: '#F59E0B',
      icon: 'Sparkles',
      description: { en: "The gifts Allah gave humanity: senses and guidance between two paths", ur: "اللہ نے انسانیت کو جو نعمتیں دیں: حواس اور دو راستوں کے درمیان ہدایت" },
      concepts: [
        {
          term: "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ",
          transliteration: "Alam naj'al lahu 'aynayn",
          meaning: { en: "Have We not made for him two eyes", ur: "کیا ہم نے اسے دو آنکھیں نہیں دیں" },
          explanation: { en: "First blessing: sight - to see physical and spiritual truth. Eyes to recognize right from wrong, beauty from ugliness.", ur: "پہلی نعمت: بینائی - جسمانی اور روحانی سچائی دیکھنے کے لیے۔ آنکھیں صحیح کو غلط سے، خوبصورتی کو بدصورتی سے پہچاننے کے لیے۔" },
          verseRef: "90:8"
        },
        {
          term: "وَلِسَانًا وَشَفَتَيْنِ",
          transliteration: "Wa-lisaanan wa shafatayn",
          meaning: { en: "And a tongue and two lips", ur: "اور ایک زبان اور دو ہونٹ" },
          explanation: { en: "Second blessing: speech - to articulate truth, communicate, praise Allah, advise others. Tools for expressing what the eyes see.", ur: "دوسری نعمت: گویائی - سچائی بیان کرنے، بات چیت کرنے، اللہ کی حمد کرنے، دوسروں کو نصیحت کرنے کے لیے۔ آنکھوں نے جو دیکھا اسے ظاہر کرنے کے اوزار۔" },
          verseRef: "90:9"
        },
        {
          term: "وَهَدَيْنَاهُ النَّجْدَيْنِ",
          transliteration: "Wa-hadaynaahun-najdayn",
          meaning: { en: "And shown him the two ways", ur: "اور ہم نے اسے دونوں راستے دکھا دیے" },
          explanation: { en: "Third blessing: moral guidance. Najd = elevated clear path. Two najds: path of good and path of evil. Allah showed both clearly - choice is ours.", ur: "تیسری نعمت: اخلاقی ہدایت۔ نَجد = بلند واضح راستہ۔ دو نجد: نیکی کا راستہ اور برائی کا راستہ۔ اللہ نے دونوں واضح دکھا دیے - انتخاب ہمارا ہے۔" },
          verseRef: "90:10"
        }
      ]
    },

    steepPath: {
      name: "The Steep Path ('Aqabah)",
      nameUr: "کٹھن گھاٹی (عقبہ)",
      nameArabic: "العقبة",
      color: '#3B82F6',
      icon: 'Compass',
      description: { en: "The difficult but rewarding path of righteousness", ur: "نیکی کا مشکل مگر باثمر راستہ" },
      concepts: [
        {
          term: "فَلَا اقْتَحَمَ الْعَقَبَةَ",
          transliteration: "Fa-laq-tahamal-'aqabah",
          meaning: { en: "But he has not attempted the steep path", ur: "لیکن اس نے دشوار گھاٹی کو طے نہیں کیا" },
          explanation: { en: "Central metaphor. 'Aqabah = steep mountain pass, difficult to climb. Despite blessings, he didn't take the challenging path of righteousness. Iqtahama = to plunge in with effort.", ur: "مرکزی استعارہ۔ عقبہ = پہاڑی دشوار گزار، چڑھنا مشکل۔ نعمتوں کے باوجود نیکی کا مشکل راستہ نہ اپنایا۔ اقتحام = محنت سے کود پڑنا۔" },
          verseRef: "90:11"
        },
        {
          term: "فَكُّ رَقَبَةٍ",
          transliteration: "Fakku raqabah",
          meaning: { en: "Freeing a slave", ur: "گردن (غلام) آزاد کرنا" },
          explanation: { en: "First component of 'aqabah: liberation. Fakk = untying bonds. Raqabah = neck (idiom for slave). Freeing others from bondage - physical and metaphorical.", ur: "عقبہ کا پہلا جزو: آزادی۔ فک = بندھن کھولنا۔ رقبہ = گردن (غلام کے لیے محاورہ)۔ دوسروں کو غلامی سے آزاد کرنا - جسمانی اور استعاراتی۔" },
          verseRef: "90:13"
        },
        {
          term: "إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ",
          transliteration: "It'aamun fee yawmin dhee masghabah",
          meaning: { en: "Feeding on a day of severe hunger", ur: "شدید بھوک کے دن کھانا کھلانا" },
          explanation: { en: "Second component: feeding the hungry. Specifically during masghabah (severe hunger/famine). Helping when it's hardest and most needed.", ur: "دوسرا جزو: بھوکوں کو کھلانا۔ خاص طور پر مسغبہ (شدید بھوک/قحط) کے دوران۔ سب سے مشکل وقت میں مدد جب ضرورت سب سے زیادہ ہو۔" },
          verseRef: "90:14"
        },
        {
          term: "يَتِيمًا ذَا مَقْرَبَةٍ",
          transliteration: "Yateeman dhaa maqrabah",
          meaning: { en: "An orphan of near relationship", ur: "رشتہ دار یتیم" },
          explanation: { en: "Who to feed: relative orphans first. Double responsibility - blood relation plus vulnerability. Prioritizing those with rightful claims.", ur: "کسے کھلائیں: پہلے رشتہ دار یتیموں کو۔ دوہری ذمہ داری - خون کا رشتہ اور بے بسی۔ حق رکھنے والوں کو ترجیح دینا۔" },
          verseRef: "90:15"
        },
        {
          term: "مِسْكِينًا ذَا مَتْرَبَةٍ",
          transliteration: "Miskeenan dhaa matrabah",
          meaning: { en: "A poor person lying in dust", ur: "خاک نشین مسکین" },
          explanation: { en: "Also feed: the destitute poor. Matrabah = covered in dust from lying on ground. Extreme poverty, homeless, utterly destitute.", ur: "انہیں بھی کھلاؤ: انتہائی غریب۔ مَتربہ = زمین پر پڑے رہنے سے خاک آلود۔ شدید غربت، بے گھر، بالکل مفلس۔" },
          verseRef: "90:16"
        }
      ]
    },

    spiritualCommunity: {
      name: "The Spiritual Community",
      nameUr: "روحانی جماعت",
      nameArabic: "المجتمع الروحي",
      color: '#10B981',
      icon: 'Heart',
      description: { en: "Beyond individual deeds: faith and mutual encouragement", ur: "انفرادی اعمال سے آگے: ایمان اور باہمی حوصلہ افزائی" },
      concepts: [
        {
          term: "ثُمَّ كَانَ مِنَ الَّذِينَ آمَنُوا",
          transliteration: "Thumma kaana minal-ladheena aamanoo",
          meaning: { en: "Then he was of those who believed", ur: "پھر وہ ایمان والوں میں سے ہوا" },
          explanation: { en: "Deeds must be coupled with faith. 'Thumma' (then/moreover) indicates this is essential addition. Without iman, deeds don't complete the 'aqabah.", ur: "اعمال کے ساتھ ایمان ضروری ہے۔ 'ثُمّ' (پھر/مزید) اشارہ کرتا ہے کہ یہ لازمی اضافہ ہے۔ ایمان کے بغیر اعمال عقبہ مکمل نہیں کرتے۔" },
          verseRef: "90:17"
        },
        {
          term: "تَوَاصَوْا بِالصَّبْرِ",
          transliteration: "Tawaasau bis-sabr",
          meaning: { en: "Advised each other to patience", ur: "ایک دوسرے کو صبر کی تلقین کی" },
          explanation: { en: "First mutual advice: patience. Form VI = reciprocal - they advise EACH OTHER. Community of mutual strengthening. Sabr for the 'aqabah's difficulty.", ur: "پہلی باہمی نصیحت: صبر۔ باب تفاعل = باہمی - ایک دوسرے کو نصیحت کرتے ہیں۔ باہمی مضبوطی کی جماعت۔ عقبہ کی مشکل کے لیے صبر۔" },
          verseRef: "90:17"
        },
        {
          term: "تَوَاصَوْا بِالْمَرْحَمَةِ",
          transliteration: "Tawaasau bil-marhamah",
          meaning: { en: "Advised each other to mercy", ur: "ایک دوسرے کو رحم کی تلقین کی" },
          explanation: { en: "Second mutual advice: mercy/compassion. Balance of sabr (strength) and marhamah (tenderness). Internal resilience + external compassion.", ur: "دوسری باہمی نصیحت: رحم/شفقت۔ صبر (طاقت) اور مرحمت (نرمی) کا توازن۔ اندرونی ثابت قدمی + بیرونی شفقت۔" },
          verseRef: "90:17"
        }
      ]
    },

    twoDestinies: {
      name: "The Two Destinies",
      nameUr: "دو انجام",
      nameArabic: "المصيران",
      color: '#EC4899',
      icon: 'Scale',
      description: { en: "Ultimate outcomes for the two groups", ur: "دو گروہوں کے حتمی انجام" },
      concepts: [
        {
          term: "أَصْحَابُ الْمَيْمَنَةِ",
          transliteration: "As-haabul-Maymanah",
          meaning: { en: "Companions of the right", ur: "دائیں ہاتھ والے (نیک بخت)" },
          explanation: { en: "Those who took the 'aqabah. Maymanah = right side, also blessing/good fortune. Same root as Yemen (blessed land). The successful, blessed group.", ur: "جنہوں نے عقبہ طے کیا۔ میمنہ = دائیں طرف، نیک بختی بھی۔ یمن (بابرکت سرزمین) سے ایک ہی جذر۔ کامیاب، بابرکت گروہ۔" },
          verseRef: "90:18"
        },
        {
          term: "أَصْحَابُ الْمَشْأَمَةِ",
          transliteration: "As-haabul-Mash'amah",
          meaning: { en: "Companions of the left", ur: "بائیں ہاتھ والے (بدبخت)" },
          explanation: { en: "Those who disbelieved in Allah's signs. Mash'amah = left side, ill-fortune. Same root as Shaam (direction left from Hijaz). The cursed, unsuccessful group.", ur: "جنہوں نے اللہ کی آیات کا انکار کیا۔ مشأمہ = بائیں طرف، بدبختی۔ شام (حجاز سے بائیں کی سمت) سے ایک ہی جذر۔ ملعون، ناکام گروہ۔" },
          verseRef: "90:19"
        },
        {
          term: "نَارٌ مُّؤْصَدَةٌ",
          transliteration: "Naarun Mu'sadah",
          meaning: { en: "Fire sealed over them", ur: "بند کی ہوئی آگ ان پر" },
          explanation: { en: "Final fate of the left. The Fire is mu'sadah = locked, sealed, no exit. Permanent, inescapable confinement. Terrifying conclusion.", ur: "بائیں والوں کا آخری انجام۔ آگ مؤصدہ = بند، مہر لگی، کوئی نکاس نہیں۔ مستقل، ناقابلِ فرار قید۔ خوفناک انجام۔" },
          verseRef: "90:20"
        }
      ]
    }
  },

  relationships: [
    {
      from: "البلد",
      to: "حل",
      type: "elevation",
      description: { en: "City honored by Prophet's presence", ur: "نبی ﷺ کی موجودگی سے شہر کو عزت" },
      explanation: { en: "The city is sworn by because the Prophet ﷺ is in it - his presence elevates its status", ur: "شہر کی قسم اس لیے کھائی گئی کہ نبی ﷺ اس میں ہیں - آپ کی موجودگی اس کا مرتبہ بلند کرتی ہے" }
    },
    {
      from: "كبد",
      to: "العقبة",
      type: "parallel",
      description: { en: "Life is struggle, 'aqabah is struggle", ur: "زندگی جدوجہد ہے، عقبہ بھی جدوجہد ہے" },
      explanation: { en: "Since life is inherently difficult (kabad), the steep path ('aqabah) aligns with human nature", ur: "چونکہ زندگی فطری طور پر مشکل ہے (کبد)، دشوار گزار راستہ (عقبہ) انسانی فطرت سے ہم آہنگ ہے" }
    },
    {
      from: "عينين، لسان، شفتين",
      to: "النجدين",
      type: "progression",
      description: { en: "Tools lead to choice", ur: "اوزار انتخاب تک لے جاتے ہیں" },
      explanation: { en: "Eyes to see, tongue to speak, then guidance to both paths - equipped for the choice", ur: "دیکھنے کے لیے آنکھیں، بولنے کے لیے زبان، پھر دونوں راستوں کی ہدایت - انتخاب کے لیے لیس" }
    },
    {
      from: "فك رقبة",
      to: "إطعام",
      type: "components",
      description: { en: "Two forms of liberation", ur: "آزادی کی دو شکلیں" },
      explanation: { en: "Freeing slaves liberates bodies, feeding hungry liberates from desperation - both are 'aqabah", ur: "غلام آزاد کرنا جسموں کو آزاد کرتا ہے، بھوکے کو کھلانا مایوسی سے آزاد کرتا ہے - دونوں عقبہ ہیں" }
    },
    {
      from: "صبر",
      to: "مرحمة",
      type: "balance",
      description: { en: "Internal strength + external compassion", ur: "اندرونی طاقت + بیرونی شفقت" },
      explanation: { en: "Mutual advice includes both: sabr (resilience within) and marhamah (mercy toward others)", ur: "باہمی نصیحت میں دونوں شامل ہیں: صبر (اندرونی ثابت قدمی) اور مرحمت (دوسروں کے ساتھ رحم)" }
    },
    {
      from: "الميمنة",
      to: "المشأمة",
      type: "antithesis",
      description: { en: "Right (blessed) vs Left (cursed)", ur: "دائیں (نیک بخت) بمقابلہ بائیں (بدبخت)" },
      explanation: { en: "Perfect opposites: those who took 'aqabah vs those who refused", ur: "کامل تضاد: جنہوں نے عقبہ طے کیا بمقابلہ جنہوں نے انکار کیا" }
    }
  ],

  thematicFlow: {
    title: { en: "From Struggle to Choice to Destiny", ur: "جدوجہد سے انتخاب تک، انتخاب سے انجام تک" },
    titleArabic: "من الكفاح إلى الاختيار إلى المصير",
    stages: [
      {
        stage: 1,
        theme: { en: "Sacred Oaths", ur: "مقدس قسمیں" },
        verses: "90:1-3",
        description: { en: "Allah swears by Makkah, the Prophet's presence, and parenthood", ur: "اللہ مکہ، نبی ﷺ کی موجودگی، اور والدین و اولاد کی قسم کھاتا ہے" }
      },
      {
        stage: 2,
        theme: { en: "Human Nature", ur: "انسانی فطرت" },
        verses: "90:4",
        description: { en: "Central truth: humans are created in struggle (kabad)", ur: "مرکزی حقیقت: انسان مشقت (کبد) میں پیدا کیا گیا" }
      },
      {
        stage: 3,
        theme: { en: "Human Arrogance", ur: "انسانی غرور" },
        verses: "90:5-7",
        description: { en: "The arrogant person thinks he's invincible and unseen", ur: "مغرور شخص سمجھتا ہے وہ ناقابلِ شکست ہے اور کوئی نہیں دیکھ رہا" }
      },
      {
        stage: 4,
        theme: { en: "Divine Gifts", ur: "الٰہی نعمتیں" },
        verses: "90:8-10",
        description: { en: "Eyes, tongue, lips, and guidance to two paths", ur: "آنکھیں، زبان، ہونٹ، اور دو راستوں کی ہدایت" }
      },
      {
        stage: 5,
        theme: { en: "The Steep Path", ur: "دشوار گھاٹی" },
        verses: "90:11-16",
        description: { en: "The 'aqabah: freeing slaves, feeding hungry orphans and poor", ur: "عقبہ: غلام آزاد کرنا، بھوکے یتیموں اور غریبوں کو کھلانا" }
      },
      {
        stage: 6,
        theme: { en: "Spiritual Community", ur: "روحانی جماعت" },
        verses: "90:17",
        description: { en: "Faith + mutual encouragement to patience and mercy", ur: "ایمان + صبر اور رحم کی باہمی تلقین" }
      },
      {
        stage: 7,
        theme: { en: "Two Destinies", ur: "دو انجام" },
        verses: "90:18-20",
        description: { en: "Companions of right (blessed) vs left (sealed in Fire)", ur: "دائیں والے (نیک بخت) بمقابلہ بائیں والے (آگ میں بند)" }
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 91,
        name: "Ash-Shams",
        relation: { en: "Soul purification theme", ur: "نفس کی پاکیزگی کا موضوع" },
        sharedTheme: { en: "Success through purification vs failure through corruption", ur: "پاکیزگی سے کامیابی بمقابلہ بگاڑ سے ناکامی" }
      },
      {
        surah: 92,
        name: "Al-Layl",
        relation: { en: "Two paths theme", ur: "دو راستوں کا موضوع" },
        sharedTheme: { en: "Giving vs withholding, ease vs hardship", ur: "دینا بمقابلہ روکنا، آسانی بمقابلہ مشکل" }
      },
      {
        surah: 103,
        name: "Al-Asr",
        relation: { en: "Mutual advice", ur: "باہمی نصیحت" },
        sharedTheme: { en: "Tawaasi bil-haqq wa bil-sabr - advising to truth and patience", ur: "تواصی بالحق و بالصبر - حق اور صبر کی نصیحت" }
      },
      {
        surah: 107,
        name: "Al-Ma'un",
        relation: { en: "Feeding the poor", ur: "غریبوں کو کھلانا" },
        sharedTheme: { en: "Those who don't encourage feeding the miskeen", ur: "وہ جو مسکینوں کو کھلانے کی ترغیب نہیں دیتے" }
      },
      {
        surah: 56,
        name: "Al-Waqi'ah",
        verses: "8-9, 27-40, 41-56",
        relation: { en: "Companions of right and left", ur: "دائیں اور بائیں والے" },
        sharedTheme: { en: "As-habul-maymanah vs as-habul-mash'amah", ur: "اصحاب المیمنہ بمقابلہ اصحاب المشأمہ" }
      }
    ]
  },

  hadith: [
    {
      arabic: "مَا مِنْكُمْ أَحَدٌ إِلَّا سَيُكَلِّمُهُ رَبُّهُ لَيْسَ بَيْنَهُ وَبَيْنَهُ تُرْجُمَانٌ",
      english: { en: "There is none among you but his Lord will speak to him without an interpreter", ur: "تم میں سے ہر ایک سے اس کا رب بغیر ترجمان کے بات کرے گا" },
      source: "Bukhari",
      relevance: { en: "Allah sees all - answers the question 'does he think no one sees him?'", ur: "اللہ سب دیکھتا ہے - 'کیا وہ سمجھتا ہے کسی نے نہیں دیکھا' کا جواب" }
    },
    {
      arabic: "مَنْ أَعْتَقَ رَقَبَةً مُسْلِمَةً أَعْتَقَ اللَّهُ بِكُلِّ عُضْوٍ مِنْهَا عُضْوًا مِنْهُ مِنَ النَّارِ",
      english: { en: "Whoever frees a Muslim slave, Allah will free from Fire a limb for every limb of that slave", ur: "جو مسلمان غلام آزاد کرے، اللہ اس کے ہر عضو کے بدلے آگ سے ایک عضو آزاد کرے گا" },
      source: "Bukhari & Muslim",
      relevance: { en: "Reward for 'fakku raqabah' - freeing a slave", ur: "'فک رقبہ' - غلام آزاد کرنے کا اجر" }
    },
    {
      arabic: "لَيْسَ الْمُؤْمِنُ بِالَّذِي يَشْبَعُ وَجَارُهُ جَائِعٌ إِلَى جَنْبِهِ",
      english: { en: "A believer is not one who eats while his neighbor is hungry beside him", ur: "وہ مومن نہیں جو خود سیر ہو اور اس کا پڑوسی بھوکا ہو" },
      source: "Authenticated by Al-Albani",
      relevance: { en: "Feeding the hungry - component of 'aqabah", ur: "بھوکوں کو کھلانا - عقبہ کا حصہ" }
    }
  ],

  practicalApplication: {
    title: { en: "Living by Al-Balad", ur: "سورۃ البلد پر عمل" },
    applications: [
      {
        principle: { en: "Accept that life is struggle", ur: "قبول کرو کہ زندگی جدوجہد ہے" },
        how: { en: "Don't expect ease; expect kabad. Struggle is not punishment but design. This mindset transforms how you face challenges", ur: "آسانی کی توقع نہ کرو؛ کبد کی توقع رکھو۔ جدوجہد سزا نہیں بلکہ تخلیقی منصوبہ ہے۔ یہ سوچ مشکلات سے نمٹنے کا طریقہ بدل دیتی ہے" },
        verse: "90:4"
      },
      {
        principle: { en: "Remember Allah sees all", ur: "یاد رکھو اللہ سب دیکھتا ہے" },
        how: { en: "Before spending or acting, remember: 'Allah sees me.' This transforms your spending from show to sincerity", ur: "خرچ یا عمل سے پہلے یاد رکھو: 'اللہ مجھے دیکھ رہا ہے۔' یہ تمہارے خرچ کو دکھاوے سے اخلاص میں بدل دیتا ہے" },
        verse: "90:7"
      },
      {
        principle: { en: "Use your gifts for guidance", ur: "اپنی نعمتوں کو ہدایت کے لیے استعمال کرو" },
        how: { en: "Eyes, tongue, lips - use them to see truth, speak truth, and choose the right path", ur: "آنکھیں، زبان، ہونٹ - انہیں سچائی دیکھنے، سچ بولنے، اور صحیح راستہ چننے کے لیے استعمال کرو" },
        verse: "90:8-10"
      },
      {
        principle: { en: "Take the steep path", ur: "دشوار راستہ اختیار کرو" },
        how: { en: "The 'aqabah is hard but rewarding. Free people from bondage, feed the hungry - actively do difficult good", ur: "عقبہ مشکل ہے لیکن با ثمر ہے۔ لوگوں کو غلامی سے آزاد کرو، بھوکوں کو کھلاؤ - مشکل نیکی فعال طور پر کرو" },
        verse: "90:11-16"
      },
      {
        principle: { en: "Prioritize vulnerable relatives", ur: "کمزور رشتہ داروں کو ترجیح دو" },
        how: { en: "Orphan relatives have double claim - blood and need. Check on vulnerable family members first", ur: "یتیم رشتہ داروں کا دوہرا حق ہے - خون کا رشتہ اور ضرورت۔ پہلے کمزور خاندانی افراد کی خبر لو" },
        verse: "90:15"
      },
      {
        principle: { en: "Help the utterly destitute", ur: "انتہائی مفلسوں کی مدد کرو" },
        how: { en: "Miskeen dhaa matrabah - those covered in dust. Seek out the most desperate, not just convenient charity", ur: "مسکین ذا متربہ - خاک نشین۔ سب سے مایوس لوگوں کو تلاش کرو، صرف آسان صدقہ نہیں" },
        verse: "90:16"
      },
      {
        principle: { en: "Build community of mutual support", ur: "باہمی مدد کی جماعت بناؤ" },
        how: { en: "Tawaasau - advise each other. Don't journey alone. Encourage others to patience and mercy", ur: "تواصوا - ایک دوسرے کو نصیحت کرو۔ اکیلے سفر نہ کرو۔ دوسروں کو صبر اور رحم کی ترغیب دو" },
        verse: "90:17"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The 'Aqabah Formula for Success", ur: "کامیابی کا عقبہ فارمولا" },
    insight: { en: "This surah provides a comprehensive formula for success. First, it establishes the reality: life is kabad (struggle). Since struggle is inherent, the question isn't whether to struggle but WHAT to struggle for. The arrogant person wastes his struggle on accumulation and show. The wise person channels struggle toward the 'aqabah. The 'aqabah has three dimensions: (1) LIBERATION - freeing others from bondage (physical, financial, social), (2) SUSTENANCE - feeding the hungry during hardship, prioritizing orphan relatives and the utterly destitute, (3) COMMUNITY - being among believers who mutually encourage patience (for the difficulty) and mercy (for others). Notice 'aqabah literally means steep pass - it's supposed to be hard. The surah doesn't promise the path will be easy, only that it leads to being 'as-habul-maymanah' (people of blessing). The alternative is 'as-habul-mash'amah' with Fire 'mu'sadah' (sealed over them). The seal imagery is terrifying - not just Fire, but Fire with no exit, permanently locked.", ur: "یہ سورت کامیابی کا جامع فارمولا دیتی ہے۔ پہلے حقیقت قائم کرتی ہے: زندگی کبد (جدوجہد) ہے۔ چونکہ جدوجہد فطری ہے، سوال یہ نہیں کہ جدوجہد کریں یا نہیں بلکہ کس لیے کریں۔ مغرور شخص اپنی جدوجہد جمع کرنے اور دکھاوے پر ضائع کرتا ہے۔ عقلمند شخص جدوجہد کو عقبہ کی طرف موڑتا ہے۔ عقبہ کے تین پہلو ہیں: (1) آزادی - دوسروں کو غلامی سے آزاد کرنا (جسمانی، مالی، سماجی)، (2) رزق - مشکل میں بھوکوں کو کھلانا، یتیم رشتہ داروں اور انتہائی مفلسوں کو ترجیح دینا، (3) جماعت - ایمان والوں میں رہنا جو باہمی طور پر صبر (مشکل کے لیے) اور رحم (دوسروں کے لیے) کی تلقین کرتے ہیں۔ دیکھو عقبہ کا لفظی مطلب دشوار گھاٹی ہے - یہ مشکل ہونی چاہیے۔ سورت آسان راستے کا وعدہ نہیں کرتی، صرف یہ کہ یہ 'اصحاب المیمنہ' (نیک بختوں) بنا دیتا ہے۔ دوسرا راستہ 'اصحاب المشأمہ' ہے جن پر آگ 'مؤصدہ' (بند) ہوگی۔ مہر بند ہونے کی تصویر خوفناک ہے - صرف آگ نہیں بلکہ بغیر نکاس کی آگ، ہمیشہ کے لیے بند۔" },
    modernRelevance: { en: "In a world obsessed with ease and shortcuts, this surah reminds us that meaningful achievement requires struggle. The 'aqabah today might be: standing up for the oppressed (modern slavery exists), feeding food banks during economic hardship, supporting refugee orphans, helping homeless neighbors. The mutual encouragement to sabr and marhamah is essentially a support group - community that reinforces values.", ur: "آسانی اور شارٹ کٹس کے دیوانے دنیا میں، یہ سورت یاد دلاتی ہے کہ بامعنی کامیابی جدوجہد مانگتی ہے۔ آج کا عقبہ ہو سکتا ہے: مظلوموں کے لیے کھڑا ہونا (جدید غلامی موجود ہے)، معاشی مشکل میں فوڈ بینکوں کو کھلانا، پناہ گزین یتیموں کی مدد کرنا، بے گھر پڑوسیوں کی مدد کرنا۔ صبر اور مرحمت کی باہمی تلقین بنیادی طور پر ایک سپورٹ گروپ ہے - ایسی جماعت جو اقدار کو مضبوط کرے۔" }
  },

  linguisticFeatures: {
    title: { en: "Linguistic Gems", ur: "لسانی جواہرات" },
    features: [
      {
        feature: { en: "Emphatic 'Laa Uqsimu'", ur: "تاکیدی 'لا اُقسم'" },
        example: "لَا أُقْسِمُ (Laa Uqsimu)",
        effect: { en: "Paradoxical: 'no' + 'I swear' = emphatic oath. Strongest form of swearing", ur: "متضاد: 'نہیں' + 'میں قسم کھاتا ہوں' = تاکیدی قسم۔ قسم کھانے کی سب سے مضبوط شکل" }
      },
      {
        feature: { en: "Unique Word Kabad", ur: "منفرد لفظ کبد" },
        example: "كَبَد (kabad)",
        effect: { en: "Appears only here. Means both 'hardship' and 'liver' - organ of endurance", ur: "صرف یہاں آتا ہے۔ 'مشقت' اور 'جگر' دونوں معنی - صبر کا عضو" }
      },
      {
        feature: { en: "Iqtahama - Reflexive Effort", ur: "اقتحام - خود سے محنت" },
        example: "اقْتَحَمَ (iqtahama)",
        effect: { en: "Form VIII = self-initiated plunging. The 'aqabah requires active, voluntary effort", ur: "باب افتعال = خود سے کود پڑنا۔ عقبہ فعال، رضاکارانہ محنت چاہتا ہے" }
      },
      {
        feature: { en: "Unique Masghabah and Matrabah", ur: "منفرد مسغبہ اور متربہ" },
        example: "مَسْغَبَة (masghabah), مَتْرَبَة (matrabah)",
        effect: { en: "Both unique to this surah. Vivid poverty imagery: severe hunger, dust-covered", ur: "دونوں اس سورت میں منفرد ہیں۔ غربت کی واضح تصویر: شدید بھوک، خاک آلود" }
      },
      {
        feature: { en: "Tawaasau - Reciprocal Form", ur: "تواصوا - باہمی صیغہ" },
        example: "تَوَاصَوْا (tawaasau)",
        effect: { en: "Form VI = mutual action. Not one-way preaching but community support", ur: "باب تفاعل = باہمی عمل۔ ایک طرفہ وعظ نہیں بلکہ جماعتی مدد" }
      },
      {
        feature: { en: "Maymanah / Mash'amah Contrast", ur: "میمنہ / مشأمہ کا تضاد" },
        example: "الْمَيْمَنَة vs الْمَشْأَمَة",
        effect: { en: "Right/blessing vs Left/curse - same pattern, opposite destinies", ur: "دائیں/برکت بمقابلہ بائیں/لعنت - ایک ہی وزن، متضاد انجام" }
      }
    ]
  },

  comparisonTable: {
    title: { en: "The Two Groups Compared", ur: "دو گروہوں کا موازنہ" },
    headers: [
      { en: "Aspect", ur: "پہلو" },
      { en: "Companions of Right", ur: "دائیں والے" },
      { en: "Companions of Left", ur: "بائیں والے" }
    ],
    rows: [
      {
        aspect: { en: "Title", ur: "لقب" },
        right: "أَصْحَابُ الْمَيْمَنَةِ",
        left: "أَصْحَابُ الْمَشْأَمَةِ"
      },
      {
        aspect: { en: "Meaning", ur: "معنی" },
        right: { en: "People of blessing/right", ur: "نیک بختی/دائیں کے لوگ" },
        left: { en: "People of ill-fortune/left", ur: "بدبختی/بائیں کے لوگ" }
      },
      {
        aspect: { en: "Choice", ur: "انتخاب" },
        right: { en: "Took the 'aqabah (steep path)", ur: "عقبہ (دشوار راستہ) اپنایا" },
        left: { en: "Refused the 'aqabah", ur: "عقبہ سے انکار کیا" }
      },
      {
        aspect: { en: "Actions", ur: "اعمال" },
        right: { en: "Freed slaves, fed hungry", ur: "غلام آزاد کیے، بھوکوں کو کھلایا" },
        left: { en: "Boasted about spending", ur: "خرچ پر فخر کیا" }
      },
      {
        aspect: { en: "Faith", ur: "ایمان" },
        right: { en: "Among the believers", ur: "ایمان والوں میں سے" },
        left: { en: "Disbelieved in signs", ur: "آیات کا انکار کیا" }
      },
      {
        aspect: { en: "Community", ur: "جماعت" },
        right: { en: "Advised patience and mercy", ur: "صبر اور رحم کی تلقین" },
        left: { en: "No mutual support mentioned", ur: "باہمی مدد کا ذکر نہیں" }
      },
      {
        aspect: { en: "Destiny", ur: "انجام" },
        right: { en: "Implied: Paradise", ur: "مضمر: جنت" },
        left: "نَارٌ مُّؤْصَدَةٌ (sealed Fire)"
      }
    ]
  },

  aqabahComponents: {
    title: { en: "Components of the Steep Path", ur: "دشوار گھاٹی کے اجزاء" },
    components: [
      {
        component: "فَكُّ رَقَبَةٍ",
        action: { en: "Freeing a slave/neck", ur: "غلام/گردن آزاد کرنا" },
        modern: { en: "Fighting human trafficking, paying off debts, freeing people from bondage", ur: "انسانی اسمگلنگ کے خلاف لڑنا، قرض ادا کرنا، لوگوں کو غلامی سے آزاد کرنا" }
      },
      {
        component: "إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ",
        action: { en: "Feeding during severe hunger", ur: "شدید بھوک کے وقت کھلانا" },
        modern: { en: "Food banks during crises, helping during famine, disaster relief", ur: "بحران میں فوڈ بینک، قحط میں مدد، آفات میں ریلیف" }
      },
      {
        component: "يَتِيمًا ذَا مَقْرَبَةٍ",
        action: { en: "Feeding orphan relatives", ur: "یتیم رشتہ داروں کو کھلانا" },
        modern: { en: "Caring for orphaned nieces/nephews, extended family support", ur: "یتیم بھانجوں/بھتیجوں کی دیکھ بھال، وسیع خاندانی مدد" }
      },
      {
        component: "مِسْكِينًا ذَا مَتْرَبَةٍ",
        action: { en: "Feeding the utterly destitute", ur: "انتہائی مفلسوں کو کھلانا" },
        modern: { en: "Helping homeless, refugees, those with nothing", ur: "بے گھروں، پناہ گزینوں، بے سروسامانوں کی مدد" }
      },
      {
        component: "كَانَ مِنَ الَّذِينَ آمَنُوا",
        action: { en: "Being among believers", ur: "ایمان والوں میں شامل ہونا" },
        modern: { en: "Faith community, masjid attendance, Islamic companionship", ur: "ایمانی جماعت، مسجد میں حاضری، اسلامی رفاقت" }
      },
      {
        component: "تَوَاصَوْا بِالصَّبْرِ",
        action: { en: "Mutual encouragement to patience", ur: "صبر کی باہمی تلقین" },
        modern: { en: "Support groups, mentorship, community counseling", ur: "سپورٹ گروپ، رہنمائی، جماعتی مشاورت" }
      },
      {
        component: "تَوَاصَوْا بِالْمَرْحَمَةِ",
        action: { en: "Mutual encouragement to mercy", ur: "رحم کی باہمی تلقین" },
        modern: { en: "Compassion training, mercy-based activism, kindness campaigns", ur: "شفقت کی تربیت، رحم پر مبنی سرگرمی، مہربانی کی مہمات" }
      }
    ]
  }
};

export default ONTOLOGY;
