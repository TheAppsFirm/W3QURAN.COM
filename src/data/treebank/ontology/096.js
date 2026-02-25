/**
 * Surah Al-Alaq (96) - Ontology of Quranic Concepts
 * The Clinging Clot / Read
 * Theme: First revelation - command to read, divine knowledge, warning against arrogance
 */

export const ONTOLOGY = {
  surahId: 96,
  surahName: "Al-Alaq",
  surahNameArabic: "العلق",
  revelationType: "Makki",
  totalAyahs: 19,

  categories: {
    divineCommand: {
      name: "The Command to Read",
      nameArabic: "الأمر بالقراءة",
      color: '#3B82F6',
      icon: 'Book',
      description: { en: "The first words revealed to the Prophet", ur: "نبی پر نازل ہونے والے پہلے الفاظ" },
      concepts: [
        {
          term: "اقْرَأْ",
          transliteration: "Iqra'",
          meaning: { en: "Read/Recite", ur: "پڑھو" },
          explanation: { en: "The very first word of the Quran revealed. Qara'a means to read, recite, gather, collect. Islam begins with a command to seek knowledge. Same root as 'Quran' - the book defined by being read.", ur: "قرآن کا سب سے پہلا نازل ہونے والا لفظ۔ قرأ کا مطلب پڑھنا، تلاوت، جمع کرنا۔ اسلام علم حاصل کرنے کے حکم سے شروع ہوتا ہے۔ 'قرآن' بھی اسی جڑ سے - وہ کتاب جو پڑھنے سے بیان ہو۔" },
          verseRef: "96:1, 96:3"
        },
        {
          term: "بِاسْمِ رَبِّكَ",
          transliteration: "Bismi Rabbika",
          meaning: { en: "In the name of your Lord", ur: "اپنے رب کے نام سے" },
          explanation: { en: "Read with Allah's name, invoking His authority, seeking His help. All knowledge should begin with acknowledgment of the true source.", ur: "اللہ کے نام سے پڑھو، اس کے اختیار کا حوالہ دیتے ہوئے، اس کی مدد چاہتے ہوئے۔ تمام علم حقیقی منبع کے اعتراف سے شروع ہونا چاہیے۔" },
          verseRef: "96:1"
        }
      ]
    },

    humanCreation: {
      name: "Human Creation",
      nameArabic: "خلق الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      description: { en: "How Allah created mankind", ur: "اللہ نے انسان کو کیسے بنایا" },
      concepts: [
        {
          term: "خَلَقَ الإِنسَانَ مِنْ عَلَقٍ",
          transliteration: "Khalaqal-Insaana min 'Alaq",
          meaning: { en: "Created man from a clinging clot", ur: "انسان کو جمے ہوئے خون سے بنایا" },
          explanation: { en: "'Alaq = that which clings/attaches. Describes the embryo when it implants in the uterine wall. Modern embryology confirms this clinging stage. Humble origin shows Allah's creative power.", ur: "علق = چمٹنے والی چیز۔ جنین کی اس حالت کو بیان کرتا ہے جب وہ رحم کی دیوار سے چمٹتا ہے۔ جدید علم الجنین اس چمٹنے کے مرحلے کی تصدیق کرتا ہے۔ عاجز آغاز اللہ کی تخلیقی قدرت ظاہر کرتا ہے۔" },
          verseRef: "96:2"
        },
        {
          term: "الأَكْرَمُ",
          transliteration: "Al-Akram",
          meaning: { en: "The Most Generous", ur: "سب سے زیادہ کرم فرمانے والا" },
          explanation: { en: "Allah's generosity is shown in giving knowledge. He could have created without teaching, but He generously shares wisdom with His creation.", ur: "اللہ کی سخاوت علم دینے میں ظاہر ہوتی ہے۔ وہ بغیر سکھائے بنا سکتا تھا، لیکن اس نے فیاضی سے اپنی مخلوق کو حکمت عطا کی۔" },
          verseRef: "96:3"
        }
      ]
    },

    divineTeaching: {
      name: "Divine Knowledge",
      nameArabic: "التعليم الإلهي",
      color: '#F59E0B',
      icon: 'Sparkles',
      description: { en: "Allah as the source of all knowledge", ur: "اللہ تمام علم کا سرچشمہ" },
      concepts: [
        {
          term: "عَلَّمَ بِالقَلَمِ",
          transliteration: "'Allama bil-Qalam",
          meaning: { en: "Taught by the pen", ur: "قلم کے ذریعے سکھایا" },
          explanation: { en: "The pen symbolizes written knowledge - preserved, transmitted, civilizational. First revelation mentions pen - emphasizing literacy and learning.", ur: "قلم تحریری علم کی علامت - محفوظ، منتقل، تہذیبی۔ پہلی وحی میں قلم کا ذکر - خواندگی اور تعلیم پر زور۔" },
          verseRef: "96:4"
        },
        {
          term: "عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ",
          transliteration: "'Allamal-Insaana maa lam ya'lam",
          meaning: { en: "Taught man what he knew not", ur: "انسان کو وہ سکھایا جو وہ نہ جانتا تھا" },
          explanation: { en: "All human knowledge originates from Allah. Science, arts, technology - everything we know is divine teaching. We start in complete ignorance.", ur: "تمام انسانی علم اللہ سے شروع ہوتا ہے۔ سائنس، فنون، ٹیکنالوجی - جو کچھ ہم جانتے ہیں الٰہی تعلیم ہے۔ ہم مکمل جہالت سے شروع کرتے ہیں۔" },
          verseRef: "96:5"
        }
      ]
    },

    humanArrogance: {
      name: "Human Transgression",
      nameArabic: "طغيان الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "How humans transgress when they feel self-sufficient", ur: "انسان بے نیازی محسوس کر کے کیسے سرکشی کرتا ہے" },
      concepts: [
        {
          term: "إِنَّ الإِنسَانَ لَيَطْغَى",
          transliteration: "Innal-Insaana la-Yatghaa",
          meaning: { en: "Indeed man transgresses", ur: "بیشک انسان سرکشی کرتا ہے" },
          explanation: { en: "Despite receiving divine gifts, humans tend toward rebellion. Tughyan = exceeding bounds, rebelling, tyranny. Same root as Pharaoh's description (taghaa).", ur: "الٰہی نعمتیں پانے کے باوجود انسان بغاوت کی طرف مائل ہوتا ہے۔ طغیان = حدود سے تجاوز، بغاوت، ظلم۔ فرعون کی صفت (طغیٰ) بھی اسی جڑ سے۔" },
          verseRef: "96:6"
        },
        {
          term: "أَن رَآهُ اسْتَغْنَى",
          transliteration: "An ra'aahus-taghnaa",
          meaning: { en: "Because he sees himself self-sufficient", ur: "کیونکہ اس نے خود کو بے نیاز سمجھا" },
          explanation: { en: "Istighnaa = considering oneself independent of Allah. The root of all sin - feeling you don't need God. Wealth, health, power create this delusion.", ur: "استغناء = خود کو اللہ سے بے نیاز سمجھنا۔ تمام گناہوں کی جڑ - محسوس کرنا کہ خدا کی ضرورت نہیں۔ دولت، صحت، طاقت یہ دھوکا پیدا کرتی ہیں۔" },
          verseRef: "96:7"
        },
        {
          term: "إِلَى رَبِّكَ الرُّجْعَى",
          transliteration: "Ilaa Rabbikar-Ruj'aa",
          meaning: { en: "To your Lord is the return", ur: "آپ کے رب کی طرف لوٹنا ہے" },
          explanation: { en: "Warning: no matter how self-sufficient you feel, you return to Allah. All arrogance ends at death. Accountability is inevitable.", ur: "تنبیہ: چاہے کتنے ہی بے نیاز محسوس کرو، اللہ کی طرف لوٹنا ہے۔ تمام تکبر موت پر ختم ہوتا ہے۔ جوابدہی ناگزیر ہے۔" },
          verseRef: "96:8"
        }
      ]
    },

    abuJahlIncident: {
      name: "The Opposition",
      nameArabic: "المعارضة",
      color: '#EF4444',
      icon: 'Shield',
      description: { en: "The case of one who forbids prayer", ur: "اس شخص کا معاملہ جو نماز سے روکتا ہے" },
      concepts: [
        {
          term: "الَّذِي يَنْهَى عَبْدًا إِذَا صَلَّى",
          transliteration: "Alladhee Yanhaa 'Abdan idhaa Sallaa",
          meaning: { en: "The one who forbids a servant when he prays", ur: "وہ جو بندے کو نماز پڑھنے سے روکتا ہے" },
          explanation: { en: "Refers to Abu Jahl who threatened to crush the Prophet's neck if he prayed at the Ka'bah. Prayer was so threatening to enemies of truth.", ur: "ابو جہل کی طرف اشارہ جس نے دھمکی دی کہ اگر نبی نے کعبہ میں نماز پڑھی تو گردن کچل دے گا۔ نماز حق کے دشمنوں کے لیے خطرناک تھی۔" },
          verseRef: "96:9-10"
        },
        {
          term: "أَرَأَيْتَ",
          transliteration: "Ara'ayta",
          meaning: { en: "Have you seen/considered", ur: "کیا آپ نے دیکھا/غور کیا" },
          explanation: { en: "Rhetorical formula drawing attention to remarkable behavior - can you believe someone would forbid prayer?", ur: "بلاغی انداز جو غیر معمولی رویے کی طرف توجہ دلاتا ہے - کیا یقین آتا ہے کوئی نماز سے روکے؟" },
          verseRef: "96:9, 11, 13"
        },
        {
          term: "أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَى",
          transliteration: "A lam Ya'lam bi-annAllaaha Yaraa",
          meaning: { en: "Does he not know that Allah sees?", ur: "کیا وہ نہیں جانتا کہ اللہ دیکھ رہا ہے؟" },
          explanation: { en: "Divine surveillance - nothing escapes Allah's sight. The forbidder acts as if no one watches, but Allah sees everything.", ur: "الٰہی نگرانی - اللہ کی نظر سے کچھ نہیں بچتا۔ روکنے والا ایسے کام کرتا ہے جیسے کوئی نہیں دیکھ رہا، لیکن اللہ سب دیکھتا ہے۔" },
          verseRef: "96:14"
        }
      ]
    },

    divineWarning: {
      name: "Divine Punishment",
      nameArabic: "العقوبة الإلهية",
      color: '#EF4444',
      icon: 'Zap',
      description: { en: "Warning to those who oppose truth", ur: "حق کی مخالفت کرنے والوں کو تنبیہ" },
      concepts: [
        {
          term: "لَنَسْفَعَن بِالنَّاصِيَةِ",
          transliteration: "La-nasfa'an bin-Naasiyah",
          meaning: { en: "We will drag him by the forelock", ur: "ہم اسے پیشانی سے پکڑ کر گھسیٹیں گے" },
          explanation: { en: "Nasfa' = to seize violently, drag. Arabs led prisoners by the forelock - ultimate humiliation. Modern note: prefrontal cortex (behind forelock) controls decisions.", ur: "نسفع = زبردستی پکڑنا، گھسیٹنا۔ عرب قیدیوں کو پیشانی سے پکڑ کر لے جاتے تھے - انتہائی ذلت۔ جدید نوٹ: پیشانی کے پیچھے دماغ کا حصہ فیصلے کنٹرول کرتا ہے۔" },
          verseRef: "96:15"
        },
        {
          term: "نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ",
          transliteration: "Naasiyatin Kaadhibatin Khaati'ah",
          meaning: { en: "A lying, sinning forelock", ur: "جھوٹی، گنہگار پیشانی" },
          explanation: { en: "The forelock/forehead described instead of the person - metonymy. Double sin: lying (kaadhibah) and sinning intentionally (khaati'ah).", ur: "شخص کی بجائے پیشانی بیان کی - مجاز مرسل۔ دوہرا گناہ: جھوٹ (کاذبۃ) اور جان بوجھ کر گناہ (خاطئۃ)۔" },
          verseRef: "96:16"
        },
        {
          term: "الزَّبَانِيَةَ",
          transliteration: "Az-Zabaaniyah",
          meaning: { en: "The angels of Hell", ur: "جہنم کے فرشتے" },
          explanation: { en: "From zabana = to push violently. Fierce angels who push sinners into Hell. Challenge: your allies vs Allah's angels.", ur: "زبن = زور سے دھکیلنا سے ماخوذ۔ سخت فرشتے جو گنہگاروں کو جہنم میں دھکیلتے ہیں۔ چیلنج: تمہارے ساتھی بمقابلہ اللہ کے فرشتے۔" },
          verseRef: "96:18"
        }
      ]
    },

    divineGuidance: {
      name: "The Path Forward",
      nameArabic: "السبيل",
      color: '#10B981',
      icon: 'Compass',
      description: { en: "Final instruction to the Prophet", ur: "نبی کے لیے حتمی ہدایت" },
      concepts: [
        {
          term: "لَا تُطِعْهُ",
          transliteration: "Laa Tuti'hu",
          meaning: { en: "Do not obey him", ur: "اس کی اطاعت نہ کرو" },
          explanation: { en: "Don't submit to those who forbid worship. Continue your mission regardless of opposition.", ur: "عبادت سے روکنے والوں کے آگے مت جھکو۔ مخالفت کے باوجود اپنا مشن جاری رکھو۔" },
          verseRef: "96:19"
        },
        {
          term: "وَاسْجُدْ وَاقْتَرِب",
          transliteration: "Wasjud waq-Tarib",
          meaning: { en: "Prostrate and draw near", ur: "سجدہ کرو اور قریب ہو جاؤ" },
          explanation: { en: "Sujood brings you closest to Allah. Prophet said: 'Closest a servant is to his Lord is in prostration.' Physical and spiritual nearness achieved.", ur: "سجدہ آپ کو اللہ کے سب سے قریب لاتا ہے۔ نبی نے فرمایا: 'بندہ اپنے رب کے سب سے قریب سجدے میں ہوتا ہے۔' جسمانی اور روحانی قرب حاصل ہوتا ہے۔" },
          verseRef: "96:19"
        }
      ]
    }
  },

  relationships: [
    {
      from: "اقرأ",
      to: "علّم بالقلم",
      type: "purpose",
      description: { en: "Reading enables written knowledge", ur: "پڑھنا تحریری علم ممکن بناتا ہے" },
      explanation: { en: "The command to read leads to learning through the pen", ur: "پڑھنے کا حکم قلم کے ذریعے سیکھنے کی طرف لے جاتا ہے" }
    },
    {
      from: "علّم الإنسان",
      to: "إن الإنسان ليطغى",
      type: "irony",
      description: { en: "Taught yet transgresses", ur: "سکھایا گیا پھر بھی سرکشی کرتا ہے" },
      explanation: { en: "Despite divine teaching, humans still rebel", ur: "الٰہی تعلیم کے باوجود انسان بغاوت کرتا ہے" }
    },
    {
      from: "استغنى",
      to: "إلى ربك الرجعى",
      type: "contrast",
      description: { en: "False independence vs inevitable return", ur: "جھوٹی بے نیازی بمقابلہ ناگزیر واپسی" },
      explanation: { en: "Self-sufficiency is illusion; return to Allah is reality", ur: "بے نیازی دھوکا ہے؛ اللہ کی طرف واپسی حقیقت ہے" }
    },
    {
      from: "ينهى عبدا إذا صلى",
      to: "واسجد واقترب",
      type: "opposition",
      description: { en: "Forbidding vs commanding prayer", ur: "نماز سے روکنا بمقابلہ نماز کا حکم" },
      explanation: { en: "Enemy forbids prayer; Allah commands more prayer", ur: "دشمن نماز سے روکتا ہے؛ اللہ مزید نماز کا حکم دیتا ہے" }
    }
  ],

  thematicFlow: {
    title: "From Knowledge to Worship",
    titleArabic: "من العلم إلى العبادة",
    description: { en: "The surah moves from learning to warning to worship", ur: "سورت تعلیم سے تنبیہ سے عبادت تک بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "The Command",
        verses: "96:1-5",
        description: { en: "First revelation: read, create, teach", ur: "پہلی وحی: پڑھو، پیدا کیا، سکھایا" }
      },
      {
        stage: 2,
        theme: "Human Nature",
        verses: "96:6-8",
        description: { en: "Warning about human arrogance", ur: "انسانی تکبر کے بارے میں تنبیہ" }
      },
      {
        stage: 3,
        theme: "The Opposition",
        verses: "96:9-14",
        description: { en: "Case of one who forbids prayer", ur: "نماز سے روکنے والے کا معاملہ" }
      },
      {
        stage: 4,
        theme: "The Threat",
        verses: "96:15-18",
        description: { en: "Punishment for the opponent", ur: "مخالف کے لیے سزا" }
      },
      {
        stage: 5,
        theme: "The Response",
        verses: "96:19",
        description: { en: "Don't obey; prostrate and draw near", ur: "اطاعت نہ کرو؛ سجدہ کرو اور قریب ہو جاؤ" }
      }
    ]
  },

  revelationContext: {
    title: "The First Revelation",
    description: { en: "The momentous beginning of prophethood", ur: "نبوت کا عظیم آغاز" },
    events: [
      {
        event: "Cave of Hira",
        detail: "Prophet was engaged in tahannuth (devotion) when Jibreel appeared"
      },
      {
        event: "Jibreel's Command",
        detail: "'Read!' - Prophet replied 'I cannot read' - squeezed three times"
      },
      {
        event: "First Words",
        detail: "Verses 1-5 were revealed - first five verses"
      },
      {
        event: "Prophet's Reaction",
        detail: "Returned trembling to Khadijah: 'Cover me, cover me'"
      },
      {
        event: "Later Verses",
        detail: "Verses 6-19 revealed later about Abu Jahl incident"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 68,
        name: "Al-Qalam",
        verse: 1,
        relation: "Swears by the pen",
        sharedTheme: "Pen as symbol of knowledge"
      },
      {
        surah: 20,
        name: "Ta-Ha",
        verses: "114",
        relation: "'Say: My Lord, increase me in knowledge'",
        sharedTheme: "Prayer for knowledge"
      },
      {
        surah: 39,
        name: "Az-Zumar",
        verse: 9,
        relation: "'Are those who know equal to those who don't?'",
        sharedTheme: "Value of knowledge"
      },
      {
        surah: 55,
        name: "Ar-Rahman",
        verses: "1-4",
        relation: "'Taught the Quran, created man, taught him speech'",
        sharedTheme: "Divine teaching"
      }
    ]
  },

  hadith: [
    {
      arabic: "أقرأ وربك الأكرم الذي علم بالقلم",
      english: "Read! And your Lord is the Most Generous, Who taught by the pen",
      source: "Sahih Bukhari (First Revelation)",
      relevance: "The narration of how these verses were revealed"
    },
    {
      arabic: "أقرب ما يكون العبد من ربه وهو ساجد",
      english: "The closest a servant is to his Lord is when he is in prostration",
      source: "Sahih Muslim",
      relevance: "Explains verse 19: 'Prostrate and draw near'"
    },
    {
      arabic: "طلب العلم فريضة على كل مسلم",
      english: "Seeking knowledge is an obligation upon every Muslim",
      source: "Ibn Majah",
      relevance: "The command 'Iqra' applies to all Muslims"
    }
  ],

  practicalApplication: {
    title: "Living by Al-Alaq",
    applications: [
      {
        principle: "Begin with Allah's name",
        how: "Start every endeavor with Bismillah",
        verse: "96:1"
      },
      {
        principle: "Seek knowledge always",
        how: "Never stop learning - first command was 'Read!'",
        verse: "96:1-5"
      },
      {
        principle: "Stay humble",
        how: "Remember your origin (clot) and your return (to Allah)",
        verse: "96:2, 8"
      },
      {
        principle: "Avoid self-sufficiency delusion",
        how: "No matter your success, you need Allah",
        verse: "96:6-7"
      },
      {
        principle: "Remember Allah sees",
        how: "Act as if being watched - because you are",
        verse: "96:14"
      },
      {
        principle: "Prostrate to draw near",
        how: "In difficulty, increase sujood",
        verse: "96:19"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "Why 'Read' First?", ur: "'پڑھو' پہلے کیوں؟" },
    insight: { en: "The first word of divine revelation to humanity was 'Iqra' - Read! Not 'Pray!', 'Fast!', or 'Give charity!' - but READ. This establishes that Islam is fundamentally a religion of knowledge and literacy. An illiterate Prophet received a command to read - emphasizing that divine help makes the impossible possible. The same surah that commands reading also warns: those who gain knowledge but become arrogant (thinking they don't need Allah) face the worst fate. Knowledge without humility leads to destruction (like Abu Jahl - literal meaning: 'Father of Ignorance' - yet he was very knowledgeable). The surah ends with 'prostrate and draw near' - knowledge should lead to worship, not arrogance. This is the foundation: learn, stay humble, worship.", ur: "انسانیت کے لیے الٰہی وحی کا پہلا لفظ 'اقرأ' تھا - پڑھو! نہ 'نماز پڑھو!'، نہ 'روزہ رکھو!'، نہ 'صدقہ دو!' - بلکہ پڑھو۔ یہ ثابت کرتا ہے کہ اسلام بنیادی طور پر علم اور خواندگی کا دین ہے۔ ایک اُمّی نبی کو پڑھنے کا حکم ملا - اللہ کی مدد ناممکن کو ممکن بناتی ہے۔ وہی سورت جو پڑھنے کا حکم دیتی ہے خبردار بھی کرتی ہے: جو علم حاصل کر کے متکبر ہوں (سمجھیں کہ اللہ کی ضرورت نہیں) ان کا بدترین انجام ہوتا ہے۔ سورت 'سجدہ کرو اور قریب ہو' پر ختم ہوتی ہے - علم عبادت کی طرف لے جائے، تکبر کی طرف نہیں۔" },
    modernRelevance: "In the age of information overload, this surah reminds us: pursue knowledge (Iqra), but remember its source (Allah), stay humble despite what you learn, and let knowledge bring you closer to Allah, not away from Him."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "First word revealed",
        example: "اقْرَأْ (Iqra')",
        effect: "Imperative - knowledge is commanded, not optional"
      },
      {
        feature: "Rhetorical questions",
        example: "أَرَأَيْتَ (Have you seen)",
        effect: "Draws attention to remarkable situations"
      },
      {
        feature: "Emphatic structures",
        example: "لَيَطْغَىٰ (surely transgresses)",
        effect: "Lam of emphasis before verb"
      },
      {
        feature: "Metonymy",
        example: "نَاصِيَةٍ كَاذِبَةٍ (lying forelock)",
        effect: "Part (forelock) represents whole (person)"
      }
    ]
  },

  scientificMiracle: {
    title: "The 'Alaq Description",
    description: { en: "The accuracy of describing embryonic development", ur: "جنینی نشوونما کی درست تصویر کشی" },
    details: [
      {
        stage: "'Alaq (clinging/attaching)",
        scientific: "Implantation - embryo attaches to uterine wall",
        note: "The word 'alaq literally means 'that which clings'"
      },
      {
        stage: "Forelock (Naasiyah)",
        scientific: "Prefrontal cortex controls decision-making",
        note: "Lying/sinning attributed to forelock - modern neuroscience confirms frontal lobe's role"
      }
    ]
  },

  comparisonTable: {
    title: "First Revelation vs Abu Jahl's Response",
    headers: ["Divine Gift", "Human Response"],
    rows: [
      {
        divine: "Read! (Iqra)",
        human: "Forbids reading/learning"
      },
      {
        divine: "Allah teaches",
        human: "Claims self-sufficiency"
      },
      {
        divine: "Created from clot",
        human: "Becomes arrogant"
      },
      {
        divine: "Prophet prays",
        human: "Tries to stop prayer"
      },
      {
        divine: "Will call angels",
        human: "Calls his assembly"
      }
    ]
  },

  memorization: {
    title: "Memorization Structure",
    sections: [
      "Verses 1-5: First revelation (Iqra, creation, teaching)",
      "Verses 6-8: Human arrogance",
      "Verses 9-14: Abu Jahl incident (forbids prayer)",
      "Verses 15-18: Threat of punishment",
      "Verse 19: Conclusion (don't obey, prostrate)"
    ],
    mnemonic: "Read - Create - Teach - Transgress - Forbid - Punish - Prostrate"
  }
};

export default ONTOLOGY;
