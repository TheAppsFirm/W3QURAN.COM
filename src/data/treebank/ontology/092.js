/**
 * Surah Al-Layl (92) - Ontology of Quranic Concepts
 * The Night
 * Theme: Two paths diverge - the generous believer vs the miserly denier
 */

export const ONTOLOGY = {
  surahId: 92,
  surahName: "Al-Layl",
  surahNameArabic: "الليل",
  revelationType: "Makki",
  totalAyahs: 21,

  categories: {
    cosmicOaths: {
      name: "The Cosmic Oaths",
      nameArabic: "القسم الكوني",
      color: '#8B5CF6',
      icon: 'Moon',
      description: { en: "Divine oaths by natural phenomena representing human spiritual states", ur: "قدرتی مظاہر کی الٰہی قسمیں جو انسانی روحانی حالتوں کی نمائندگی کرتی ہیں" },
      concepts: [
        {
          term: "اللَّيْلِ إِذَا يَغْشَىٰ",
          transliteration: "Al-Layli idhaa yaghshaa",
          meaning: { en: "The night when it covers", ur: "رات جب ڈھانپ لے" },
          explanation: { en: "Night covering represents the state of those who cover/reject truth. The darkness of spiritual blindness, miserliness, and denial.", ur: "رات کا ڈھانپنا ان لوگوں کی حالت کی نمائندگی کرتا ہے جو حق کو ڈھانپتے/رد کرتے ہیں۔ روحانی اندھے پن، بخل اور انکار کی تاریکی۔" },
          verseRef: "92:1"
        },
        {
          term: "النَّهَارِ إِذَا تَجَلَّىٰ",
          transliteration: "An-Nahaari idhaa tajallaa",
          meaning: { en: "The day when it appears/manifests", ur: "دن جب ظاہر ہو/نمودار ہو" },
          explanation: { en: "Day manifesting represents clarity, truth, and those who live in spiritual light. Tajallaa (manifestation) - truth unveiled.", ur: "دن کا ظاہر ہونا وضاحت، حق اور روحانی روشنی میں رہنے والوں کی نمائندگی۔ تجلّیٰ (ظہور) - حق کا بے نقاب ہونا۔" },
          verseRef: "92:2"
        },
        {
          term: "مَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ",
          transliteration: "Maa khalaqa adh-dhakara wal-unthaa",
          meaning: { en: "He who created male and female", ur: "اس ذات کی جس نے نر اور مادہ بنایا" },
          explanation: { en: "The Creator of complementary pairs: night/day, male/female, and similarly, two spiritual paths. Divine design includes diversity and choice.", ur: "تکمیلی جوڑوں کا خالق: رات/دن، نر/مادہ، اور اسی طرح دو روحانی راستے۔ الٰہی ڈیزائن میں تنوع اور انتخاب شامل ہے۔" },
          verseRef: "92:3"
        }
      ]
    },

    diverseEfforts: {
      name: "The Diverse Human Efforts",
      nameArabic: "السعي المختلف",
      color: '#06B6D4',
      icon: 'Users',
      description: { en: "The central thesis - human striving leads in different directions", ur: "مرکزی مقالہ - انسانی کوشش مختلف سمتوں کی طرف لے جاتی ہے" },
      concepts: [
        {
          term: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
          transliteration: "Inna sa'yakum la-shattaa",
          meaning: { en: "Indeed, your efforts are diverse", ur: "بیشک تمہاری کوششیں مختلف ہیں" },
          explanation: { en: "The key thesis after oaths: human efforts diverge fundamentally. Sa'y (striving) goes in opposite directions based on choices. Not all paths lead to the same destination.", ur: "قسموں کے بعد مرکزی نکتہ: انسانی کوششیں بنیادی طور پر مختلف ہیں۔ سعی (کوشش) انتخاب کی بنیاد پر مخالف سمتوں میں جاتی ہے۔ تمام راستے ایک ہی منزل تک نہیں لے جاتے۔" },
          verseRef: "92:4"
        }
      ]
    },

    pathOfGenerosity: {
      name: "The Path of Generosity",
      nameArabic: "طريق العطاء",
      color: '#10B981',
      icon: 'Heart',
      description: { en: "Three qualities that lead to ease", ur: "تین خوبیاں جو آسانی کی طرف لے جاتی ہیں" },
      concepts: [
        {
          term: "أَعْطَىٰ",
          transliteration: "A'taa",
          meaning: { en: "He who gives", ur: "جو دیتا ہے" },
          explanation: { en: "First quality: generosity without limits. The verb is absolute (no object specified) - giving of wealth, time, self, knowledge, everything. Opposite of holding back.", ur: "پہلی خوبی: بے حد سخاوت۔ فعل مطلق ہے (کوئی مفعول نہیں) - مال، وقت، جان، علم، سب کچھ دینا۔ روکنے کی ضد۔" },
          verseRef: "92:5"
        },
        {
          term: "اتَّقَىٰ",
          transliteration: "Ittaqaa",
          meaning: { en: "And fears Allah / is God-conscious", ur: "اور اللہ سے ڈرتا ہے / خدا ترس ہے" },
          explanation: { en: "Second quality: taqwa - protecting oneself through consciousness of Allah. Internal compass that guides external behavior.", ur: "دوسری خوبی: تقویٰ - اللہ کی آگاہی سے خود کو بچانا۔ باطنی رہنما جو ظاہری عمل کی رہنمائی کرتا ہے۔" },
          verseRef: "92:5"
        },
        {
          term: "صَدَّقَ بِالْحُسْنَىٰ",
          transliteration: "Saddaqa bil-Husnaa",
          meaning: { en: "And believes in the best", ur: "اور سب سے اچھی بات کی تصدیق کی" },
          explanation: { en: "Third quality: believing in al-Husnaa - the best reward, La ilaha illa Allah, Paradise, or all good from Allah. Faith driving action.", ur: "تیسری خوبی: الحسنیٰ پر یقین - بہترین اجر، لا الٰہ الا اللہ، جنت، یا اللہ کی طرف سے تمام بھلائی۔ ایمان عمل کی قوت محرکہ۔" },
          verseRef: "92:6"
        },
        {
          term: "فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ",
          transliteration: "Fa-sa-nuyassiruhu lil-Yusraa",
          meaning: { en: "We will ease him toward ease", ur: "ہم اسے آسانی کی طرف آسان کر دیں گے" },
          explanation: { en: "Divine promise: those who give find giving easier. Ease compounds - good deeds become habitual, leading to eternal ease. Root يسر used twice for emphasis.", ur: "الٰہی وعدہ: جو دیتے ہیں ان کے لیے دینا آسان ہوتا جاتا ہے۔ آسانی بڑھتی ہے - نیک اعمال عادت بن جاتے ہیں، ابدی آسانی کی طرف لے جاتے ہیں۔ جڑ یسر دو بار تاکید کے لیے۔" },
          verseRef: "92:7"
        }
      ]
    },

    pathOfMiserliness: {
      name: "The Path of Miserliness",
      nameArabic: "طريق البخل",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "Three qualities that lead to difficulty", ur: "تین خصلتیں جو مشکل کی طرف لے جاتی ہیں" },
      concepts: [
        {
          term: "بَخِلَ",
          transliteration: "Bakhila",
          meaning: { en: "He who withholds/is stingy", ur: "جو روکے / بخیل ہو" },
          explanation: { en: "First negative quality: withholding what should be given. Opposite of a'taa. Bukhl (miserliness) is not just with money but with kindness, help, and compassion.", ur: "پہلی بری خصلت: جو دینا چاہیے اسے روکنا۔ اعطاء کی ضد۔ بخل صرف مال میں نہیں بلکہ مہربانی، مدد اور شفقت میں بھی ہوتا ہے۔" },
          verseRef: "92:8"
        },
        {
          term: "اسْتَغْنَىٰ",
          transliteration: "Istaghnaa",
          meaning: { en: "And considers himself self-sufficient", ur: "اور خود کو بے نیاز سمجھے" },
          explanation: { en: "Second negative quality: feeling independent of Allah and others. Form X indicates self-perception - considering oneself needless of guidance. The height of arrogance.", ur: "دوسری بری خصلت: اللہ اور دوسروں سے بے نیازی محسوس کرنا۔ باب استفعال خود کی سوچ ظاہر کرتا ہے - خود کو ہدایت سے بے نیاز سمجھنا۔ تکبر کی انتہا۔" },
          verseRef: "92:8"
        },
        {
          term: "كَذَّبَ بِالْحُسْنَىٰ",
          transliteration: "Kadhdhaba bil-Husnaa",
          meaning: { en: "And denies the best", ur: "اور سب سے اچھی بات کو جھٹلائے" },
          explanation: { en: "Third negative quality: actively calling truth a lie. Not passive disbelief but active rejection. Form II intensifies - deliberately choosing to deny.", ur: "تیسری بری خصلت: حق کو جان بوجھ کر جھوٹ قرار دینا۔ غیر فعال بے ایمانی نہیں بلکہ فعال انکار۔ باب تفعیل شدت ظاہر کرتا ہے - جان بوجھ کر انکار۔" },
          verseRef: "92:9"
        },
        {
          term: "فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ",
          transliteration: "Fa-sa-nuyassiruhu lil-'Usraa",
          meaning: { en: "We will ease him toward difficulty", ur: "ہم اسے مشکل کی طرف آسان کر دیں گے" },
          explanation: { en: "Devastating irony: 'eased' toward hardship. Sin becomes easy, leading to permanent difficulty. The path of miserliness seems easy initially but leads to eternal hardship.", ur: "تباہ کن ستم ظریفی: مشکل کی طرف 'آسان' کر دیا۔ گناہ آسان ہو جاتا ہے، مستقل مشکل کی طرف لے جاتا ہے۔ بخل کا راستہ ابتداء میں آسان لگتا ہے لیکن ابدی مشکل تک لے جاتا ہے۔" },
          verseRef: "92:10"
        }
      ]
    },

    consequencesOfChoice: {
      name: "Consequences of Spiritual Choices",
      nameArabic: "عواقب الاختيار الروحي",
      color: '#F59E0B',
      icon: 'Scale',
      description: { en: "What happens to accumulated wealth and the divine response", ur: "جمع شدہ دولت کا کیا ہوتا ہے اور الٰہی جواب" },
      concepts: [
        {
          term: "وَمَا يُغْنِي عَنْهُ مَالُهُ إِذَا تَرَدَّىٰ",
          transliteration: "Wa maa yughnee 'anhu maaluhu idhaa taraddaa",
          meaning: { en: "His wealth will not avail him when he falls", ur: "اس کا مال اسے کچھ فائدہ نہیں دے گا جب وہ گرے گا" },
          explanation: { en: "Poetic justice: He claimed to be ghaniy (rich/independent), but his maal (wealth) won't bring any ghinaa (benefit) when he taraddaa (falls into destruction). Wordplay emphasizes the futility.", ur: "شعری انصاف: اس نے غنی (امیر/بے نیاز) ہونے کا دعویٰ کیا، لیکن اس کا مال کوئی غنا (فائدہ) نہیں دے گا جب وہ تردّیٰ (ہلاکت میں گرے گا)۔ فعلی صنعت بے فائدگی پر زور دیتی ہے۔" },
          verseRef: "92:11"
        },
        {
          term: "إِنَّ عَلَيْنَا لَلْهُدَىٰ",
          transliteration: "Inna 'alaynaa lal-Hudaa",
          meaning: { en: "Indeed, upon Us is guidance", ur: "بیشک ہدایت دینا ہمارے ذمے ہے" },
          explanation: { en: "Allah's responsibility is to show the path clearly. Both paths have been explained. Human responsibility is to choose. Guidance has been given; excuse has been removed.", ur: "اللہ کی ذمہ داری راستہ واضح طور پر دکھانا ہے۔ دونوں راستے بیان کر دیے گئے ہیں۔ انسان کی ذمہ داری انتخاب کرنا ہے۔ ہدایت دے دی گئی، عذر ختم ہو گیا۔" },
          verseRef: "92:12"
        },
        {
          term: "وَإِنَّ لَنَا لَلْآخِرَةَ وَالْأُولَىٰ",
          transliteration: "Wa inna lanaa lal-Aakhirata wal-Oolaa",
          meaning: { en: "And to Us belongs the Hereafter and the first", ur: "اور آخرت اور دنیا ہماری ہے" },
          explanation: { en: "Allah owns both worlds completely. The miser's wealth is actually Allah's, temporarily loaned. Both worlds belong to Allah, so seeking His pleasure is the wisest investment.", ur: "اللہ دونوں جہان کا مکمل مالک ہے۔ بخیل کا مال اصل میں اللہ کا ہے، عارضی طور پر قرض دیا گیا۔ دونوں جہان اللہ کے ہیں، اس لیے اس کی رضا حاصل کرنا سب سے عقلمندانہ سرمایہ کاری ہے۔" },
          verseRef: "92:13"
        }
      ]
    },

    fireAndWarning: {
      name: "The Blazing Fire",
      nameArabic: "النار المتلظية",
      color: '#EF4444',
      icon: 'Zap',
      description: { en: "Warning about the fire and who enters it", ur: "آگ کے بارے میں تنبیہ اور اس میں داخل ہونے والے" },
      concepts: [
        {
          term: "نَارًا تَلَظَّىٰ",
          transliteration: "Naaran taladhdhaa",
          meaning: { en: "A fire blazing intensely", ur: "شدید بھڑکتی آگ" },
          explanation: { en: "The Fire described with onomatopoeia - taladhdhaa sounds like crackling flames. Indefinite 'naaran' emphasizes its indescribability. Continuous present tense = always burning.", ur: "آگ آواز کی نقل سے بیان کی گئی - تلظّیٰ بھڑکتی آگ کی آواز جیسا۔ نکرہ 'ناراً' ناقابل بیان ہونے پر زور۔ مضارع مستمر = ہمیشہ جلتی رہنے والی۔" },
          verseRef: "92:14"
        },
        {
          term: "الْأَشْقَى",
          transliteration: "Al-Ashqaa",
          meaning: { en: "The most wretched", ur: "سب سے بدبخت" },
          explanation: { en: "Superlative form - the worst possible outcome. The ashqaa is defined by two actions: kadhdhaba (denied) and tawalla (turned away). Ultimate spiritual failure.", ur: "افعل التفضیل - بدترین ممکنہ انجام۔ اشقیٰ دو اعمال سے بیان ہوتا ہے: کذّب (جھٹلایا) اور تولّیٰ (منہ پھیر لیا)۔ حتمی روحانی ناکامی۔" },
          verseRef: "92:15"
        },
        {
          term: "كَذَّبَ وَتَوَلَّىٰ",
          transliteration: "Kadhdhaba wa Tawallaa",
          meaning: { en: "Denied and turned away", ur: "جھٹلایا اور منہ پھیر لیا" },
          explanation: { en: "Double rejection: verbal (kadhdhaba - calling truth a lie) and physical (tawalla - turning one's back). Complete rejection in word and deed.", ur: "دوہرا انکار: زبانی (کذّب - حق کو جھوٹ کہنا) اور جسمانی (تولّیٰ - پیٹھ پھیرنا)۔ قول اور عمل میں مکمل انکار۔" },
          verseRef: "92:16"
        }
      ]
    },

    theRighteous: {
      name: "The Most Righteous",
      nameArabic: "الأتقى",
      color: '#10B981',
      icon: 'Sparkles',
      description: { en: "Description of the one saved from the Fire", ur: "آگ سے بچائے جانے والے کا بیان" },
      concepts: [
        {
          term: "الْأَتْقَى",
          transliteration: "Al-Atqaa",
          meaning: { en: "The most righteous/God-conscious", ur: "سب سے زیادہ متقی/خدا ترس" },
          explanation: { en: "Perfect antithesis to al-ashqaa. Superlative of muttaqi. Will be 'janaba' (kept to the side) from the Fire - actively protected by Allah.", ur: "اشقیٰ کی کامل ضد۔ متقی کا افعل التفضیل۔ آگ سے 'جنّب' (ایک طرف رکھا) جائے گا - اللہ کی فعال حفاظت میں۔" },
          verseRef: "92:17"
        },
        {
          term: "يُؤْتِي مَالَهُ يَتَزَكَّىٰ",
          transliteration: "Yu'tee maalahu yatazakkaa",
          meaning: { en: "Gives his wealth to purify himself", ur: "اپنا مال پاکیزگی کے لیے دیتا ہے" },
          explanation: { en: "Continuous giving (present tense) for purification (tazakkaa). Same root as zakah - giving purifies AND grows. Not transaction but transformation.", ur: "مسلسل دینا (مضارع) پاکیزگی (تزکّیٰ) کے لیے۔ زکوٰۃ کا ہم اصل - دینا پاک بھی کرتا ہے اور بڑھاتا بھی ہے۔ لین دین نہیں بلکہ تبدیلی۔" },
          verseRef: "92:18"
        },
        {
          term: "وَمَا لِأَحَدٍ عِندَهُ مِن نِّعْمَةٍ تُجْزَىٰ",
          transliteration: "Wa maa li-ahadin 'indahu min ni'matin tujzaa",
          meaning: { en: "No one has any favor upon him to be repaid", ur: "کسی کا اس پر کوئی احسان نہیں جو چکایا جائے" },
          explanation: { en: "Pure intention: he gives not to repay debts or earn favors. No worldly motive. His giving is unconditional, purely for Allah.", ur: "خالص نیت: نہ قرض اتارنے کے لیے دیتا ہے نہ احسان کمانے کے لیے۔ کوئی دنیاوی مقصد نہیں۔ اس کا دینا بلا شرط ہے، خالص اللہ کے لیے۔" },
          verseRef: "92:19"
        },
        {
          term: "إِلَّا ابْتِغَاءَ وَجْهِ رَبِّهِ الْأَعْلَىٰ",
          transliteration: "Illa ibtighaa'a wajhi Rabbihi al-A'laa",
          meaning: { en: "Only seeking the face of his Lord, Most High", ur: "صرف اپنے رب بلند و برتر کی رضا چاہتے ہوئے" },
          explanation: { en: "The highest motive: seeking Allah's wajh (pleasure/countenance). Not Paradise, not reward, but Allah Himself. Ibtighaa' (Form VIII) indicates earnest, devoted pursuit.", ur: "بلند ترین مقصد: اللہ کی رضا (وجہ) حاصل کرنا۔ جنت نہیں، اجر نہیں، بلکہ خود اللہ۔ ابتغاء (باب افتعال) مخلصانہ، وقف شدہ جستجو ظاہر کرتا ہے۔" },
          verseRef: "92:20"
        },
        {
          term: "وَلَسَوْفَ يَرْضَىٰ",
          transliteration: "Wa la-sawfa yardaa",
          meaning: { en: "And he will surely be satisfied", ur: "اور وہ ضرور راضی ہو جائے گا" },
          explanation: { en: "Triple-emphatic future promise. He sought Allah's pleasure (wajh), he will receive satisfaction (ridaa). Perfect circle: sought wajh, receives ridaa. Complete fulfillment.", ur: "تین تاکیدوں والا مستقبل کا وعدہ۔ اس نے اللہ کی رضا (وجہ) چاہی، اسے اطمینان (رضا) ملے گا۔ کامل دائرہ: وجہ چاہا، رضا ملی۔ مکمل تکمیل۔" },
          verseRef: "92:21"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الليل يغشى",
      to: "النهار تجلى",
      type: "contrast",
      description: { en: "Night covering vs Day manifesting", ur: "رات ڈھانپنا بمقابلہ دن ظاہر ہونا" },
      explanation: { en: "Cosmic opposites representing spiritual states: darkness of denial vs light of faith", ur: "کائناتی اضداد جو روحانی حالتوں کی نمائندگی: انکار کی تاریکی بمقابلہ ایمان کی روشنی" }
    },
    {
      from: "أعطى",
      to: "بخل",
      type: "antithesis",
      description: { en: "Giving vs Withholding", ur: "دینا بمقابلہ روکنا" },
      explanation: { en: "First quality of each path - fundamental choice between generosity and miserliness", ur: "ہر راستے کی پہلی خصوصیت - سخاوت اور بخل کے درمیان بنیادی انتخاب" }
    },
    {
      from: "اتقى",
      to: "استغنى",
      type: "antithesis",
      description: { en: "God-consciousness vs Self-sufficiency", ur: "خدا ترسی بمقابلہ خود بے نیازی" },
      explanation: { en: "Second quality: humility before Allah vs arrogance of independence", ur: "دوسری خصوصیت: اللہ کے سامنے عاجزی بمقابلہ آزادی کا غرور" }
    },
    {
      from: "صدق بالحسنى",
      to: "كذب بالحسنى",
      type: "antithesis",
      description: { en: "Believed in the best vs Denied the best", ur: "بہترین کی تصدیق بمقابلہ بہترین کی تکذیب" },
      explanation: { en: "Third quality: faith vs rejection of truth", ur: "تیسری خصوصیت: ایمان بمقابلہ حق کی تکذیب" }
    },
    {
      from: "اليسرى",
      to: "العسرى",
      type: "antithesis",
      description: { en: "Path of ease vs Path of difficulty", ur: "آسانی کا راستہ بمقابلہ مشکل کا راستہ" },
      explanation: { en: "Outcomes: ease leading to more ease vs hardship leading to more hardship", ur: "نتائج: آسانی مزید آسانی کی طرف بمقابلہ مشکل مزید مشکل کی طرف" }
    },
    {
      from: "الأشقى",
      to: "الأتقى",
      type: "antithesis",
      description: { en: "Most wretched vs Most righteous", ur: "سب سے بدبخت بمقابلہ سب سے متقی" },
      explanation: { en: "Ultimate spiritual outcomes: worst of creation vs best of creation", ur: "حتمی روحانی نتائج: بدترین مخلوق بمقابلہ بہترین مخلوق" }
    },
    {
      from: "يتزكى",
      to: "يرضى",
      type: "causation",
      description: { en: "Purification leads to satisfaction", ur: "تزکیہ اطمینان کی طرف لے جاتا ہے" },
      explanation: { en: "Giving for purification leads to eternal satisfaction from Allah", ur: "تزکیہ کے لیے دینا اللہ کی طرف سے ابدی اطمینان کی طرف لے جاتا ہے" }
    },
    {
      from: "وجه ربه",
      to: "يرضى",
      type: "reciprocity",
      description: { en: "Seeking Allah's pleasure brings satisfaction", ur: "اللہ کی رضا چاہنا اطمینان لاتا ہے" },
      explanation: { en: "Seeking Allah's wajh results in receiving ridaa - divine reciprocity", ur: "اللہ کی رضا چاہنا رضا ملنے کا سبب - الٰہی باہمی تعلق" }
    }
  ],

  thematicFlow: {
    title: "Two Paths, Two Destinations",
    titleArabic: "طريقان ومصيران",
    stages: [
      {
        stage: 1,
        theme: "The Cosmic Oaths",
        verses: "92:1-3",
        description: { en: "Night and day represent two states; male and female represent divine design of pairs", ur: "رات اور دن دو حالتوں کی نمائندگی؛ نر اور مادہ جوڑوں کے الٰہی ڈیزائن کی" }
      },
      {
        stage: 2,
        theme: "The Central Thesis",
        verses: "92:4",
        description: { en: "Human efforts diverge - not all paths lead to the same destination", ur: "انسانی کوششیں مختلف ہیں - تمام راستے ایک ہی منزل تک نہیں لے جاتے" }
      },
      {
        stage: 3,
        theme: "The Path of Generosity",
        verses: "92:5-7",
        description: { en: "Giving + Taqwa + Belief = Ease upon ease", ur: "دینا + تقویٰ + ایمان = آسانی پر آسانی" }
      },
      {
        stage: 4,
        theme: "The Path of Miserliness",
        verses: "92:8-11",
        description: { en: "Withholding + Arrogance + Denial = Hardship, wealth useless at the fall", ur: "روکنا + تکبر + انکار = مشکل، گرنے پر مال بے فائدہ" }
      },
      {
        stage: 5,
        theme: "Divine Ownership and Warning",
        verses: "92:12-16",
        description: { en: "Allah owns both worlds, warns of Fire for the most wretched", ur: "اللہ دونوں جہان کا مالک ہے، سب سے بدبخت کو آگ سے ڈراتا ہے" }
      },
      {
        stage: 6,
        theme: "Portrait of the Righteous",
        verses: "92:17-21",
        description: { en: "The atqaa gives purely for Allah's pleasure and will be satisfied", ur: "اتقیٰ خالصتاً اللہ کی رضا کے لیے دیتا ہے اور راضی ہو جائے گا" }
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 93,
        name: "Ad-Duha",
        relation: "Thematic pair - both address paths to success",
        sharedTheme: "Divine guidance, giving, and satisfaction"
      },
      {
        surah: 94,
        name: "Ash-Sharh",
        relation: "With hardship comes ease",
        sharedTheme: "Ease (yusraa) concept appears in both"
      },
      {
        surah: 103,
        name: "Al-Asr",
        relation: "Two paths theme",
        sharedTheme: "Faith and righteous deeds save from loss"
      },
      {
        surah: 89,
        name: "Al-Fajr",
        verses: "15-20",
        relation: "Wealth and stinginess",
        sharedTheme: "Man's relationship with wealth and giving"
      },
      {
        surah: 107,
        name: "Al-Ma'un",
        relation: "Those who deny religion",
        sharedTheme: "Characteristics of deniers: prevent small kindnesses"
      }
    ]
  },

  hadith: [
    {
      arabic: "يدُ اللهِ مَلْأى لا يَغِيضُها نَفَقَة",
      english: "Allah's Hand is full; spending does not decrease it",
      source: "Bukhari & Muslim",
      relevance: "Giving doesn't deplete - connects to yatazakkaa (purification through giving)"
    },
    {
      arabic: "مَا نَقَصَتْ صَدَقَةٌ مِن مَال",
      english: "Charity does not decrease wealth",
      source: "Muslim",
      relevance: "The one who gives is eased to more ease; giving increases, not decreases"
    },
    {
      arabic: "اتَّقِ اللهَ حَيثُما كُنتَ",
      english: "Fear Allah wherever you are",
      source: "Tirmidhi",
      relevance: "Taqwa in all circumstances - the quality of al-atqaa"
    }
  ],

  practicalApplication: {
    title: "Living by Al-Layl",
    applications: [
      {
        principle: "Choose giving over withholding",
        how: "When you feel the urge to hold back (time, money, help), remember: a'taa leads to yusraa",
        verse: "92:5-7"
      },
      {
        principle: "Maintain God-consciousness",
        how: "Before major decisions, ask: Am I acting with taqwa or istighnaa (false independence)?",
        verse: "92:5, 92:8"
      },
      {
        principle: "Believe in the good outcome",
        how: "Trust that al-Husnaa is true - good awaits those who do good",
        verse: "92:6"
      },
      {
        principle: "Check your motives",
        how: "Give without expecting worldly return - seek only Allah's wajh",
        verse: "92:19-20"
      },
      {
        principle: "Know that ease compounds",
        how: "Start giving today; it becomes easier. Start withholding; generosity becomes harder",
        verse: "92:7, 92:10"
      },
      {
        principle: "Remember wealth is temporary",
        how: "Your wealth won't help at the moment of death (taraddaa). Invest it now in what lasts",
        verse: "92:11"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Economics of Spiritual Investment", ur: "روحانی سرمایہ کاری کی معاشیات" },
    insight: { en: "Surah Al-Layl presents a profound economic principle: spending leads to increase, while hoarding leads to loss. The word 'yusra' (ease) is used twice in verse 7 - 'We will ease him toward ease' - creating a compounding effect. Conversely, the ironic 'We will ease him toward difficulty' shows how the path of miserliness, while seeming easier initially, leads to ever-increasing hardship. The surah ends with the ultimate transaction: the atqaa gives his wealth seeking only Allah's wajh (pleasure), and receives radaa (satisfaction). He traded temporary wealth for eternal satisfaction - the best possible investment. Notice the contrast with the miser: he kept his wealth but lost everything when he 'fell' (taraddaa). The one who gave everything will be completely satisfied; the one who kept everything will find his wealth useless.", ur: "سورۃ اللیل ایک گہرا معاشی اصول پیش کرتی ہے: خرچ کرنا بڑھوتری کی طرف لے جاتا ہے، جبکہ ذخیرہ اندوزی نقصان کی طرف۔ لفظ 'یسریٰ' (آسانی) آیت 7 میں دو بار استعمال ہوا - 'ہم اسے آسانی کی طرف آسان کر دیں گے' - مرکب اثر پیدا کرتے ہوئے۔ اس کے برعکس، ستم ظریفانہ 'ہم اسے مشکل کی طرف آسان کر دیں گے' دکھاتا ہے کہ بخل کا راستہ ابتداء میں آسان لگتا ہے لیکن بڑھتی مشکل کی طرف لے جاتا ہے۔ سورت کا اختتام حتمی سودے پر ہوتا ہے: اتقیٰ اپنا مال صرف اللہ کی رضا کے لیے دیتا ہے، اور رضا (اطمینان) حاصل کرتا ہے۔ عارضی مال کو ابدی اطمینان سے بدلا - بہترین ممکنہ سرمایہ کاری۔" },
    modernRelevance: "In an age of accumulation and FOMO, this surah teaches that true security comes not from hoarding but from giving. The ease that comes from generosity is both spiritual (peace of heart) and practical (relationships, barakah). The miser may appear successful temporarily, but his path leads to 'usraa - difficulty in this life (anxiety about losing wealth) and the next."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "Perfect Antithesis Structure",
        examples: "أعطى/بخل، اتقى/استغنى، صدق/كذب، يسرى/عسرى، الأشقى/الأتقى",
        effect: "Every positive quality has its perfect negative counterpart - binary clarity"
      },
      {
        feature: "Onomatopoeia",
        example: "تَلَظَّىٰ (taladhdhaa)",
        effect: "The word sounds like crackling fire - auditory imagery"
      },
      {
        feature: "Ironic Parallelism",
        example: "سَنُيَسِّرُهُ لِلْيُسْرَىٰ vs سَنُيَسِّرُهُ لِلْعُسْرَىٰ",
        effect: "Same verb structure, opposite destinations - devastating irony"
      },
      {
        feature: "Root Wordplay (غني)",
        example: "استغنى (considered himself rich) → يغني (will his wealth avail)",
        effect: "His claimed independence won't actually help him"
      },
      {
        feature: "Circular Completion",
        example: "Sought وجه (Allah's face) → Receives رضى (satisfaction)",
        effect: "Seeking leads to receiving - divine reciprocity"
      }
    ]
  },

  comparisonTable: {
    title: "The Two Paths Compared",
    headers: ["Aspect", "Path of Generosity", "Path of Miserliness"],
    rows: [
      {
        aspect: "First Quality",
        generosity: "أَعْطَىٰ (gives)",
        miserliness: "بَخِلَ (withholds)"
      },
      {
        aspect: "Second Quality",
        generosity: "اتَّقَىٰ (fears Allah)",
        miserliness: "اسْتَغْنَىٰ (considers self-sufficient)"
      },
      {
        aspect: "Third Quality",
        generosity: "صَدَّقَ بِالْحُسْنَىٰ (believes in best)",
        miserliness: "كَذَّبَ بِالْحُسْنَىٰ (denies the best)"
      },
      {
        aspect: "Result",
        generosity: "نُيَسِّرُهُ لِلْيُسْرَىٰ (eased to ease)",
        miserliness: "نُيَسِّرُهُ لِلْعُسْرَىٰ (eased to hardship)"
      },
      {
        aspect: "Description",
        generosity: "الْأَتْقَى (most righteous)",
        miserliness: "الْأَشْقَى (most wretched)"
      },
      {
        aspect: "Action Pattern",
        generosity: "يُؤْتِي مَالَهُ يَتَزَكَّىٰ (gives to purify)",
        miserliness: "كَذَّبَ وَتَوَلَّىٰ (denied and turned away)"
      },
      {
        aspect: "Motive",
        generosity: "ابْتِغَاءَ وَجْهِ رَبِّهِ (seeking Allah's pleasure)",
        miserliness: "None mentioned (worldly)"
      },
      {
        aspect: "Final Outcome",
        generosity: "يَرْضَىٰ (will be satisfied)",
        miserliness: "نَارًا تَلَظَّىٰ (blazing fire)"
      }
    ]
  },

  tripleEmphasis: {
    title: "Triple Emphatic Promise",
    verse: "وَلَسَوْفَ يَرْضَىٰ (92:21)",
    elements: [
      {
        element: "وَ (wa)",
        function: "Connective emphasis"
      },
      {
        element: "لَ (lam)",
        function: "Emphatic particle (لام التوكيد)"
      },
      {
        element: "سَوْفَ (sawfa)",
        function: "Future certainty particle"
      }
    ],
    meaning: "The strongest possible emphasis on a future promise in Arabic - absolute certainty that the righteous will be satisfied"
  }
};

export default ONTOLOGY;
