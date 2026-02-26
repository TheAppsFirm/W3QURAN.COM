/**
 * Surah Al-Bayyinah (98) - Ontology of Quranic Concepts
 * The Clear Evidence
 * Theme: The decisive proof, essence of true religion, and ultimate destinations
 */

export const ONTOLOGY = {
  surahId: 98,
  surahName: "Al-Bayyinah",
  surahNameArabic: "البينة",
  revelationType: "Madani",
  totalAyahs: 8,

  categories: {
    clearEvidence: {
      name: "The Clear Evidence",
      nameUr: "واضح دلیل",
      nameArabic: "البينة",
      color: '#3B82F6',
      icon: 'Eye',
      description: { en: "The decisive proof that came to separate truth from falsehood", ur: "وہ فیصلہ کن دلیل جو حق کو باطل سے الگ کرنے آئی" },
      concepts: [
        {
          term: "البَيِّنَة",
          transliteration: "Al-Bayyinah",
          meaning: { en: "The Clear Evidence", ur: "واضح دلیل" },
          explanation: { en: "Refers to Prophet Muhammad ﷺ and/or the Quran. The proof so clear it leaves no excuse. The title of this surah emphasizes that truth has been made evident.", ur: "نبی محمد ﷺ اور/یا قرآن سے مراد ہے۔ اتنی واضح دلیل کہ کوئی عذر باقی نہ رہے۔ سورت کا نام اس بات پر زور دیتا ہے کہ حق واضح کر دیا گیا۔" },
          verseRef: "98:1, 4"
        },
        {
          term: "رَسُولٌ مِنَ اللَّهِ",
          transliteration: "Rasoolun minAllaah",
          meaning: { en: "A Messenger from Allah", ur: "Allah کی طرف سے ایک رسول" },
          explanation: { en: "The Prophet himself is the bayyinah - clear evidence. His message, character, and miracles constitute undeniable proof.", ur: "نبی ﷺ خود بینہ (واضح دلیل) ہیں۔ ان کا پیغام، کردار اور معجزات ناقابلِ انکار ثبوت ہیں۔" },
          verseRef: "98:2"
        },
        {
          term: "صُحُفًا مُطَهَّرَةً",
          transliteration: "Suhufan Mutahharah",
          meaning: { en: "Purified scriptures", ur: "پاکیزہ صحیفے" },
          explanation: { en: "The Quran is purified from error, falsehood, and contradiction. It contains only truth, recited by the Messenger.", ur: "قرآن غلطی، جھوٹ اور تضاد سے پاک ہے۔ اس میں صرف حق ہے، جو رسول پڑھ کر سناتے ہیں۔" },
          verseRef: "98:2"
        },
        {
          term: "كُتُبٌ قَيِّمَةٌ",
          transliteration: "Kutubun Qayyimah",
          meaning: { en: "Correct/valuable writings", ur: "درست اور قیمتی تحریریں" },
          explanation: { en: "The scriptures contain straight, upright, valuable guidance. Qayyimah from the same root as mustaqeem (straight path).", ur: "صحیفوں میں سیدھی، درست اور قیمتی رہنمائی ہے۔ قیّمہ اسی جڑ سے ہے جس سے مستقیم (سیدھا راستہ) ہے۔" },
          verseRef: "98:3"
        }
      ]
    },

    divisionAfterTruth: {
      name: "Division After Truth",
      nameUr: "حق کے بعد تفرقہ",
      nameArabic: "التفرق بعد الحق",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "How people divided after clear evidence came", ur: "واضح دلیل آنے کے بعد لوگ کیسے تقسیم ہوئے" },
      concepts: [
        {
          term: "مَا تَفَرَّقَ... إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ البَيِّنَةُ",
          transliteration: "Maa tafarraqa... illaa min ba'di maa jaa'athumul-Bayyinah",
          meaning: { en: "They didn't divide except after clear evidence came", ur: "وہ تفرقے میں نہ پڑے مگر واضح دلیل آنے کے بعد" },
          explanation: { en: "Ironic: division came AFTER truth arrived, not before. People knew the truth but chose to reject it due to envy, pride, or worldly interests.", ur: "ستم ظریفی: تفرقہ حق آنے کے بعد ہوا، پہلے نہیں۔ لوگ حق جانتے تھے لیکن حسد، تکبر یا دنیاوی مفادات کی وجہ سے انکار کیا۔" },
          verseRef: "98:4"
        },
        {
          term: "أَهْل الكِتَاب",
          transliteration: "Ahl al-Kitaab",
          meaning: { en: "People of the Scripture", ur: "اہلِ کتاب" },
          explanation: { en: "Jews and Christians who received previous revelations. They had been waiting for the final Prophet but many rejected him when he came.", ur: "یہود و نصاریٰ جنہیں پہلے وحی ملی تھی۔ وہ آخری نبی کا انتظار کر رہے تھے لیکن جب وہ آئے تو بہت سوں نے انکار کیا۔" },
          verseRef: "98:1, 6"
        },
        {
          term: "المُشْرِكِين",
          transliteration: "Al-Mushrikeen",
          meaning: { en: "The polytheists", ur: "مشرکین (شرک کرنے والے)" },
          explanation: { en: "Those who associate partners with Allah. Arab pagans who worshipped idols alongside or instead of Allah.", ur: "وہ لوگ جو Allah کے ساتھ شریک ٹھہراتے ہیں۔ عرب بت پرست جو Allah کے ساتھ یا اس کی جگہ بتوں کی پوجا کرتے تھے۔" },
          verseRef: "98:1, 6"
        }
      ]
    },

    essenceOfReligion: {
      name: "The Essence of True Religion",
      nameUr: "سچے دین کا جوہر",
      nameArabic: "جوهر الدين الصحيح",
      color: '#10B981',
      icon: 'Heart',
      description: { en: "What Allah actually commanded", ur: "Allah نے حقیقت میں کیا حکم دیا" },
      concepts: [
        {
          term: "لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ",
          transliteration: "Liya'budullaaha Mukhliseena lahud-Deen",
          meaning: { en: "To worship Allah, sincere to Him in religion", ur: "Allah کی عبادت کریں، دین میں اس کے لیے خالص ہو کر" },
          explanation: { en: "The core command: worship Allah with ikhlas (sincerity). No hidden agendas, no showing off, no partners - pure devotion to Allah alone.", ur: "بنیادی حکم: اخلاص کے ساتھ Allah کی عبادت۔ کوئی پوشیدہ مقصد نہیں، کوئی دکھاوا نہیں، کوئی شریک نہیں - صرف Allah کے لیے خالص عبادت۔" },
          verseRef: "98:5"
        },
        {
          term: "حُنَفَاءَ",
          transliteration: "Hunafaa'",
          meaning: { en: "Inclining to truth/uprightly", ur: "حق کی طرف جھکے ہوئے / سیدھے" },
          explanation: { en: "Plural of hanif - the way of Ibrahim. Pure monotheism, turning away from all false worship toward the One True God.", ur: "حنیف کی جمع - ابراہیم علیہ السلام کا طریقہ۔ خالص توحید، تمام باطل عبادات سے رخ پھیر کر ایک سچے معبود کی طرف۔" },
          verseRef: "98:5"
        },
        {
          term: "إِقَامَة الصَّلَاة",
          transliteration: "Iqaamat as-Salaah",
          meaning: { en: "Establishing prayer", ur: "نماز قائم کرنا" },
          explanation: { en: "Not just 'praying' but establishing it - making it regular, proper, communal, and with full attention.", ur: "صرف نماز 'پڑھنا' نہیں بلکہ اسے 'قائم' کرنا - باقاعدہ، درست، باجماعت اور پوری توجہ سے ادا کرنا۔" },
          verseRef: "98:5"
        },
        {
          term: "إِيتَاء الزَّكَاة",
          transliteration: "Eetaa' az-Zakaah",
          meaning: { en: "Giving zakah", ur: "زکاۃ ادا کرنا" },
          explanation: { en: "Purifying wealth by giving the obligatory charity. Connects worship to social responsibility.", ur: "فرض صدقہ دے کر مال کو پاک کرنا۔ عبادت کو سماجی ذمہ داری سے جوڑتا ہے۔" },
          verseRef: "98:5"
        },
        {
          term: "دِين القَيِّمَة",
          transliteration: "Deen al-Qayyimah",
          meaning: { en: "The correct/upright religion", ur: "سیدھا اور درست دین" },
          explanation: { en: "This simple formula IS the true religion: sincere worship, prayer, zakah. Not complicated rituals, but pure submission.", ur: "یہ سادہ فارمولا ہی سچا دین ہے: خالص عبادت، نماز، زکاۃ۔ پیچیدہ رسوم نہیں، بلکہ خالص اطاعت۔" },
          verseRef: "98:5"
        }
      ]
    },

    ultimateDestinations: {
      name: "Ultimate Destinations",
      nameUr: "حتمی انجام",
      nameArabic: "المصير النهائي",
      color: '#F59E0B',
      icon: 'Scale',
      description: { en: "The final outcomes for believers and disbelievers", ur: "ایمان والوں اور منکرین کے حتمی انجام" },
      concepts: [
        {
          term: "شَرُّ البَرِيَّة",
          transliteration: "Sharr al-Bariyyah",
          meaning: { en: "Worst of creatures", ur: "بدترین مخلوق" },
          explanation: { en: "Those who disbelieve after clear evidence are worse than any other creation - even animals follow their nature, but these rejected clear truth.", ur: "جو واضح دلیل کے بعد بھی انکار کریں وہ تمام مخلوقات سے بدتر ہیں - جانور بھی اپنی فطرت پر چلتے ہیں، لیکن انہوں نے واضح حق کو مسترد کیا۔" },
          verseRef: "98:6"
        },
        {
          term: "خَيْر البَرِيَّة",
          transliteration: "Khayr al-Bariyyah",
          meaning: { en: "Best of creatures", ur: "بہترین مخلوق" },
          explanation: { en: "Believers who do righteous deeds are the best of all creation - elevated above all by their faith and actions.", ur: "ایمان والے جو نیک اعمال کریں وہ تمام مخلوقات میں بہترین ہیں - اپنے ایمان اور اعمال سے سب سے بلند۔" },
          verseRef: "98:7"
        },
        {
          term: "جَنَّات عَدْن",
          transliteration: "Jannaatu 'Adn",
          meaning: { en: "Gardens of perpetual residence", ur: "ہمیشگی کے باغات" },
          explanation: { en: "'Adn = permanent dwelling. Not temporary paradise but eternal home with rivers flowing beneath.", ur: "عدن = مستقل ٹھکانا۔ عارضی جنت نہیں بلکہ دائمی گھر جس کے نیچے نہریں بہتی ہیں۔" },
          verseRef: "98:8"
        },
        {
          term: "رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ",
          transliteration: "RadiyAllaahu 'anhum wa radoo 'anhu",
          meaning: { en: "Allah is pleased with them and they with Him", ur: "Allah ان سے راضی ہوا اور وہ اس سے راضی ہوئے" },
          explanation: { en: "Mutual pleasure - the greatest reward. Allah's ridwan (pleasure) is the ultimate prize, and they are completely satisfied with what He gives.", ur: "باہمی رضامندی - سب سے بڑا اجر۔ Allah کی رضا (رضوان) سب سے بڑا انعام ہے، اور وہ اس کی عطا سے مکمل طور پر مطمئن ہیں۔" },
          verseRef: "98:8"
        }
      ]
    }
  },

  relationships: [
    {
      from: "البينة",
      to: "التفرق",
      type: "causation",
      description: { en: "Clear evidence caused division", ur: "واضح دلیل نے تفرقے کا سبب بنایا" },
      explanation: "Ironically, truth coming caused people to divide - some accepted, some rejected"
    },
    {
      from: "مخلصين",
      to: "حنفاء",
      type: "complementary",
      description: { en: "Sincerity and uprightness together", ur: "اخلاص اور سیدھا پن ایک ساتھ" },
      explanation: "True worship requires both internal sincerity and external uprightness"
    },
    {
      from: "شر البرية",
      to: "خير البرية",
      type: "contrast",
      description: { en: "Worst vs best of creation", ur: "بدترین مخلوق بمقابلہ بہترین مخلوق" },
      explanation: "Perfect antithesis based on faith and action"
    },
    {
      from: "الصلاة والزكاة",
      to: "دين القيمة",
      type: "definition",
      description: { en: "Prayer and zakah define true religion", ur: "نماز اور زکاۃ سچے دین کی تعریف کرتے ہیں" },
      explanation: "These acts are the practical essence of deen"
    }
  ],

  thematicFlow: {
    title: "From Evidence to Eternity",
    titleArabic: "من البينة إلى الأبدية",
    stages: [
      {
        stage: 1,
        theme: "The Evidence Arrives",
        verses: "98:1-3",
        description: { en: "Clear proof came: Messenger reciting purified scriptures", ur: "واضح دلیل آئی: رسول پاکیزہ صحیفے پڑھ کر سناتے ہیں" }
      },
      {
        stage: 2,
        theme: "Division Follows",
        verses: "98:4",
        description: { en: "People divided after truth came", ur: "حق آنے کے بعد لوگ تقسیم ہو گئے" }
      },
      {
        stage: 3,
        theme: "True Religion Defined",
        verses: "98:5",
        description: { en: "What was actually commanded: sincerity, prayer, zakah", ur: "حقیقی حکم: اخلاص، نماز، زکاۃ" }
      },
      {
        stage: 4,
        theme: "The Disbelievers' End",
        verses: "98:6",
        description: { en: "Worst of creatures, eternal Hell", ur: "بدترین مخلوق، دائمی جہنم" }
      },
      {
        stage: 5,
        theme: "The Believers' Reward",
        verses: "98:7-8",
        description: { en: "Best of creatures, eternal Paradise, mutual pleasure", ur: "بہترین مخلوق، دائمی جنت، باہمی رضامندی" }
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 3,
        name: "Al-Imran",
        verse: 19,
        relation: "'Indeed, the religion with Allah is Islam'",
        sharedTheme: "True religion defined"
      },
      {
        surah: 2,
        name: "Al-Baqarah",
        verses: "111-113",
        relation: "People of Book claimed exclusive salvation",
        sharedTheme: "Division among scripture people"
      },
      {
        surah: 6,
        name: "Al-An'am",
        verse: 161,
        relation: "'Ibrahim was hanif, not a polytheist'",
        sharedTheme: "Hanifiyyah - pure monotheism"
      },
      {
        surah: 9,
        name: "At-Tawbah",
        verse: 72,
        relation: "'The pleasure of Allah is greater'",
        sharedTheme: "Allah's ridwan as ultimate reward"
      }
    ]
  },

  hadith: [
    {
      arabic: "لا إله إلا الله مخلصاً من قلبه",
      english: "There is no god but Allah - sincerely from his heart",
      source: "Multiple sources",
      relevance: "The essence of ikhlas mentioned in verse 5"
    },
    {
      arabic: "أفضل ما قلت أنا والنبيون من قبلي: لا إله إلا الله",
      english: "The best thing I and the prophets before me have said is: There is no god but Allah",
      source: "Tirmidhi",
      relevance: "All prophets taught the same deen al-qayyimah"
    }
  ],

  practicalApplication: {
    title: "Living by Al-Bayyinah",
    applications: [
      {
        principle: "Accept clear evidence",
        how: "Don't reject truth when it's obvious just because of pride or interest",
        verse: "98:1-4"
      },
      {
        principle: "Worship with sincerity",
        how: "Check intentions - is worship for Allah alone or for others' approval?",
        verse: "98:5"
      },
      {
        principle: "Be hanif",
        how: "Turn completely toward Allah, away from all false gods (money, fame, etc.)",
        verse: "98:5"
      },
      {
        principle: "Establish prayer and give zakah",
        how: "These are non-negotiable pillars of true religion",
        verse: "98:5"
      },
      {
        principle: "Aim to be 'best of creation'",
        how: "Combine faith with righteous action",
        verse: "98:7"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Simplicity of True Religion", ur: "سچے دین کی سادگی" },
    insight: { en: "This surah contains one of the clearest definitions of 'deen' in the Quran. After all the debates between religious groups, Allah says the essence is simple: (1) Worship Allah alone (2) With sincerity (3) As hunafa (pure monotheists) (4) Establish prayer (5) Give zakah. That's it - 'wa dhaalika deen al-qayyimah' (and that is the correct religion). The complexity and divisions came from human additions, not from divine command. Notice that verses 6-7 use 'sharr al-bariyyah' and 'khayr al-bariyyah' (worst and best of CREATION) - this includes all created beings. Those who reject clear truth fall below animals in rank, while believers rise above all creation.", ur: "اس سورت میں قرآن میں 'دین' کی واضح ترین تعریفات میں سے ایک ہے۔ مذہبی گروہوں کی تمام بحثوں کے بعد، Allah فرماتا ہے کہ جوہر سادہ ہے: (1) صرف Allah کی عبادت (2) اخلاص کے ساتھ (3) حنفاء بن کر (خالص توحید پرست) (4) نماز قائم کرو (5) زکاۃ دو۔ بس - 'وذٰلک دین القیّمۃ' (اور یہی سیدھا دین ہے)۔ پیچیدگی اور تفرقہ انسانی اضافوں سے آیا، الٰہی حکم سے نہیں۔ غور کریں کہ آیات 6-7 میں 'شرّ البریّۃ' اور 'خیر البریّۃ' (بدترین اور بہترین مخلوق) کہا گیا - اس میں تمام مخلوقات شامل ہیں۔ واضح حق کو مسترد کرنے والے جانوروں سے بھی گرے، جبکہ مومنین تمام مخلوقات سے بلند ہوئے۔" },
    modernRelevance: "When religion seems complicated or divided, return to this simple formula. Sincerity + prayer + zakah = the true religion. Divisions come when people add to or subtract from this core."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "Bayyinah repeated",
        count: "Twice (verses 1 and 4)",
        effect: "Emphasizes that proof was given"
      },
      {
        feature: "Bariyyah",
        meaning: "All created beings",
        effect: "From bara'a (to create) - comprehensive term"
      },
      {
        feature: "Contrast structure",
        example: "Verse 6 (worst) vs Verse 7 (best)",
        effect: "Perfect parallel with opposite outcomes"
      },
      {
        feature: "Mutual pleasure",
        example: "رَضِيَ... وَرَضُوا",
        effect: "Same verb used for Allah and believers - mutual satisfaction"
      }
    ]
  },

  comparisonTable: {
    title: "Two Groups - Two Destinies",
    headers: ["Category", "Disbelievers", "Believers"],
    rows: [
      {
        category: "Status",
        disbelievers: "Worst of creation (شَرّ البَرِيَّة)",
        believers: "Best of creation (خَيْر البَرِيَّة)"
      },
      {
        category: "Destination",
        disbelievers: "Fire of Hell (نَار جَهَنَّم)",
        believers: "Gardens of Eden (جَنَّات عَدْن)"
      },
      {
        category: "Duration",
        disbelievers: "Eternally therein (خَالِدِينَ فِيهَا)",
        believers: "Forever (أَبَدًا)"
      },
      {
        category: "Relationship with Allah",
        disbelievers: "Rejected His evidence",
        believers: "Mutual pleasure (رَضِيَ...وَرَضُوا)"
      }
    ]
  },

  essenceOfDeenTable: {
    title: "The Components of Deen al-Qayyimah",
    components: [
      {
        component: "لِيَعْبُدُوا اللَّهَ",
        meaning: "To worship Allah",
        aspect: "The goal"
      },
      {
        component: "مُخْلِصِينَ لَهُ الدِّينَ",
        meaning: "Sincere to Him in religion",
        aspect: "The attitude"
      },
      {
        component: "حُنَفَاءَ",
        meaning: "Inclined to truth",
        aspect: "The orientation"
      },
      {
        component: "وَيُقِيمُوا الصَّلَاةَ",
        meaning: "And establish prayer",
        aspect: "The ritual"
      },
      {
        component: "وَيُؤْتُوا الزَّكَاةَ",
        meaning: "And give zakah",
        aspect: "The social duty"
      }
    ]
  }
};

export default ONTOLOGY;
