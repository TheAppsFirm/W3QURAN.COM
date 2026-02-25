/**
 * Surah Al-Munafiqun (The Hypocrites) - Surah 63
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 63,
  surahName: "Al-Munafiqun",
  surahNameArabic: "المنافقون",
  totalAyahs: 11,
  revelationType: "Medinan",
  mainTheme: "Exposing the Nature and Dangers of Hypocrisy",

  categories: {
    hypocrisyTraits: {
      name: "Traits of Hypocrites",
      nameAr: "صفات المنافقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "False Testimony", arabic: "الشهادة الكاذبة", meaning: { en: "Lying while claiming to testify truth", ur: "سچائی کی گواہی کا دعویٰ کرتے ہوئے جھوٹ بولنا" }, ayahs: [1], description: { en: "They claim to witness prophethood while lying", ur: "وہ نبوت کی گواہی کا دعویٰ کرتے ہیں مگر جھوٹے ہیں" } },
        { term: "Oaths as Shield", arabic: "الأيمان جُنة", meaning: { en: "Using false oaths as protection", ur: "جھوٹی قسموں کو ڈھال بنانا" }, ayahs: [2], description: { en: "Swearing falsely to avoid consequences", ur: "نتائج سے بچنے کے لیے جھوٹی قسمیں کھانا" } },
        { term: "Belief then Disbelief", arabic: "الإيمان ثم الكفر", meaning: { en: "Apostasy of the heart", ur: "دل کا ایمان سے پھر جانا" }, ayahs: [3], description: { en: "Initial profession followed by inner rejection", ur: "پہلے اقرار پھر اندرونی انکار" } },
        { term: "Sealed Hearts", arabic: "الطبع على القلوب", meaning: { en: "Hearts sealed from understanding", ur: "دلوں پر مہر لگا دی گئی" }, ayahs: [3] },
        { term: "Impressive Exterior", arabic: "الظاهر الخادع", meaning: { en: "Pleasing forms and speech", ur: "دلکش ظاہری شکل اور تقریر" }, ayahs: [4], description: { en: "Beautiful bodies and eloquent speech", ur: "خوبصورت جسم اور فصیح بیان" } },
        { term: "Propped-up Logs", arabic: "خشب مسندة", meaning: { en: "Like hollow timber", ur: "ٹیک لگائے ہوئے کھوکھلے لکڑے" }, ayahs: [4], description: { en: "Impressive outside, empty inside", ur: "باہر سے شاندار، اندر سے خالی" } },
        { term: "Paranoia", arabic: "الخوف والريبة", meaning: { en: "Thinking every shout is against them", ur: "ہر آواز کو اپنے خلاف سمجھنا" }, ayahs: [4] },
        { term: "Arrogance", arabic: "الاستكبار", meaning: { en: "Turning heads in pride", ur: "تکبر سے سر پھیرنا" }, ayahs: [5] },
        { term: "Economic Warfare", arabic: "الحصار الاقتصادي", meaning: { en: "Withholding support from believers", ur: "مومنوں سے مالی تعاون روکنا" }, ayahs: [7] },
        { term: "False Honor Claims", arabic: "ادعاء العزة", meaning: { en: "Claiming to be more honorable", ur: "زیادہ عزت دار ہونے کا دعویٰ" }, ayahs: [8] }
      ]
    },
    divineJudgment: {
      name: "Divine Response to Hypocrisy",
      nameAr: "حكم الله في النفاق",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "Divine Testimony Against", arabic: "شهادة الله ضدهم", meaning: { en: "Allah witnesses their lies", ur: "Allah ان کے جھوٹ پر گواہ ہے" }, ayahs: [1] },
        { term: "No Forgiveness", arabic: "عدم المغفرة", meaning: { en: "Prophet's intercession won't help them", ur: "نبی ﷺ کی شفاعت بھی انہیں فائدہ نہ دے گی" }, ayahs: [6] },
        { term: "No Guidance", arabic: "عدم الهداية", meaning: { en: "Allah doesn't guide the defiantly disobedient", ur: "Allah نافرمان قوم کو ہدایت نہیں دیتا" }, ayahs: [6] },
        { term: "Divine Curse", arabic: "قاتلهم الله", meaning: { en: "Allah's curse upon them", ur: "Allah کی ان پر لعنت" }, ayahs: [4] }
      ]
    },
    trueHonor: {
      name: "True Source of Honor",
      nameAr: "مصدر العزة الحقيقية",
      color: '#8B5CF6',
      icon: 'Crown',
      concepts: [
        { term: "Honor Belongs to Allah", arabic: "لله العزة", meaning: { en: "All honor comes from Allah", ur: "تمام عزت Allah کی ہے" }, ayahs: [8] },
        { term: "Prophet's Honor", arabic: "عزة الرسول", meaning: { en: "Messenger shares in divine honor", ur: "رسول الٰہی عزت میں شریک ہیں" }, ayahs: [8] },
        { term: "Believers' Honor", arabic: "عزة المؤمنين", meaning: { en: "Believers have honor through faith", ur: "مومنوں کو ایمان سے عزت ملتی ہے" }, ayahs: [8] },
        { term: "Divine Treasures", arabic: "خزائن السماوات والأرض", meaning: { en: "Allah owns all provisions", ur: "آسمانوں اور زمین کے خزانے Allah کے ہیں" }, ayahs: [7] }
      ]
    },
    guidanceForBelievers: {
      name: "Guidance for Believers",
      nameAr: "توجيهات للمؤمنين",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Priority of Remembrance", arabic: "أولوية الذكر", meaning: { en: "Don't let wealth distract from Allah", ur: "مال و دولت کو Allah کے ذکر سے غافل نہ ہونے دو" }, ayahs: [9] },
        { term: "Urgency of Charity", arabic: "عجلة الإنفاق", meaning: { en: "Spend before death arrives", ur: "موت آنے سے پہلے خرچ کرو" }, ayahs: [10] },
        { term: "Death's Certainty", arabic: "حتمية الأجل", meaning: { en: "No delay when time comes", ur: "وقت آنے پر کوئی مہلت نہیں" }, ayahs: [11] },
        { term: "Regret at Death", arabic: "الحسرة عند الموت", meaning: { en: "Wishing for more time at death", ur: "موت کے وقت مزید مہلت کی تمنا" }, ayahs: [10] }
      ]
    }
  },

  relationships: [
    { from: "False Testimony", to: "Divine Counter-Testimony", type: "opposition", description: { en: "Their lies are met with Allah's truth", ur: "ان کے جھوٹ کا جواب Allah کی سچائی سے ہوتا ہے" } },
    { from: "Impressive Exterior", to: "Propped-up Logs", type: "metaphor", description: { en: "Beautiful outside but hollow inside", ur: "باہر سے خوبصورت مگر اندر سے کھوکھلے" } },
    { from: "Oaths as Shield", to: "Blocking Allah's Path", type: "consequence", description: { en: "False oaths lead to preventing others from truth", ur: "جھوٹی قسمیں دوسروں کو حق سے روکنے کا سبب بنتی ہیں" } },
    { from: "Economic Warfare", to: "Divine Treasures", type: "futility", description: { en: "Their withholding is meaningless given Allah's wealth", ur: "Allah کی دولت کو دیکھتے ہوئے ان کا روکنا بے معنی ہے" } },
    { from: "Claims of Honor", to: "True Honor Source", type: "refutation", description: { en: "They claim honor but it belongs to Allah", ur: "وہ عزت کا دعویٰ کرتے ہیں مگر عزت Allah کی ہے" } },
    { from: "Paranoia", to: "Guilty Conscience", type: "symptom", description: { en: "Fear every shout because of inner guilt", ur: "اندرونی جرم کی وجہ سے ہر آواز سے ڈرتے ہیں" } },
    { from: "Death's Certainty", to: "Urgency of Charity", type: "motivation", description: { en: "Inevitable death should prompt immediate action", ur: "یقینی موت فوری عمل کی ترغیب دے" } },
    { from: "Wealth Distraction", to: "Loss", type: "consequence", description: { en: "Being distracted by wealth leads to ultimate loss", ur: "مال میں مشغول ہونا حتمی نقصان کا باعث ہے" } }
  ],

  thematicFlow: {
    title: "From Hypocrisy Exposed to Guidance for Believers",
    stages: [
      {
        name: "Hypocrites' Entrance",
        ayahs: [1],
        description: { en: "They come professing faith while lying", ur: "وہ ایمان کا اقرار کرتے ہوئے آتے ہیں مگر جھوٹے ہیں" }
      },
      {
        name: "Oaths and Obstruction",
        ayahs: [2, 3],
        description: { en: "Using oaths as shields, hearts sealed from understanding", ur: "قسموں کو ڈھال بنانا، دلوں پر سمجھ سے مہر" }
      },
      {
        name: "Appearance vs Reality",
        ayahs: [4],
        description: { en: "Impressive bodies and speech but like hollow logs; paranoid and dangerous", ur: "شاندار جسم اور تقریر مگر کھوکھلے لکڑوں جیسے؛ مشکوک اور خطرناک" }
      },
      {
        name: "Arrogant Rejection",
        ayahs: [5, 6],
        description: { en: "Refusing Prophet's intercession with arrogance; forgiveness denied", ur: "تکبر سے نبی ﷺ کی شفاعت ٹھکرانا؛ مغفرت سے محرومی" }
      },
      {
        name: "Economic Conspiracy",
        ayahs: [7],
        description: { en: "Plotting to starve believers; Allah owns all treasures", ur: "مومنوں کو بھوکا مارنے کی سازش؛ تمام خزانے Allah کے ہیں" }
      },
      {
        name: "False Honor Claims",
        ayahs: [8],
        description: { en: "Claiming superiority; true honor belongs to Allah, Prophet, and believers", ur: "برتری کا دعویٰ؛ حقیقی عزت Allah، رسول اور مومنوں کی ہے" }
      },
      {
        name: "Warning to Believers",
        ayahs: [9, 10, 11],
        description: { en: "Don't be distracted by wealth; spend before death", ur: "مال سے غافل نہ ہو؛ موت سے پہلے خرچ کرو" }
      }
    ]
  },

  practicalApplication: {
    title: "Recognizing and Avoiding Hypocrisy",
    applications: [
      {
        context: "Self-Examination",
        teaching: "Check if your faith is only verbal or truly in the heart",
        ayah: 1
      },
      {
        context: "Sincerity in Speech",
        teaching: "Avoid using oaths and religious language as manipulation tools",
        ayah: 2
      },
      {
        context: "Substance Over Appearance",
        teaching: "Don't be fooled by impressive appearances or eloquent speech",
        ayah: 4
      },
      {
        context: "Financial Trust",
        teaching: "Trust in Allah's provision rather than hoarding or manipulating resources",
        ayah: 7
      },
      {
        context: "Source of Honor",
        teaching: "Seek honor through faith and obedience, not worldly status",
        ayah: 8
      },
      {
        context: "Priority Management",
        teaching: "Don't let wealth and children distract from Allah's remembrance",
        ayah: 9
      },
      {
        context: "Urgent Charity",
        teaching: "Give charity now; at death you will wish for more time to give",
        ayah: 10
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The 'Propped-Up Logs' (خُشُبٌ مُّسَنَّدَةٌ) Metaphor", ur: "ٹیک لگائے لکڑوں (خُشُبٌ مُّسَنَّدَةٌ) کی تشبیہ" },
    insight: { en: "This surah contains one of the Quran's most striking metaphors for hypocrites: 'propped-up logs' (خُشُبٌ مُّسَنَّدَةٌ). Timber that is beautiful but hollow, that looks sturdy but needs to be leaned against a wall because it has no strength of its own. The hypocrites have impressive bodies and eloquent speech, but spiritually they are empty and cannot stand on their own principles. They are paranoid, thinking every shout is against them because their guilty conscience knows their inner corruption. This agricultural/construction metaphor would have been immediately understood by the early Arab community and remains powerfully relevant.", ur: "اس سورت میں منافقوں کے لیے قرآن کی سب سے نمایاں تشبیہات میں سے ایک ہے: 'ٹیک لگائے لکڑے' (خُشُبٌ مُّسَنَّدَةٌ)۔ لکڑی جو خوبصورت مگر کھوکھلی ہے، مضبوط نظر آتی ہے مگر دیوار سے ٹیک لگائے رکھنی پڑتی ہے کیونکہ اس میں اپنی طاقت نہیں۔ منافقوں کی شکل و صورت اچھی اور بیان فصیح ہے مگر روحانی طور پر خالی ہیں اور اپنے اصولوں پر کھڑے نہیں ہو سکتے۔ وہ مشکوک ہیں، ہر آواز کو اپنے خلاف سمجھتے ہیں کیونکہ ان کا ضمیر اندرونی فساد جانتا ہے۔ یہ زرعی/تعمیراتی تشبیہ ابتدائی عرب معاشرے کو فوراً سمجھ آتی اور آج بھی بے حد متعلقہ ہے۔" },
    arabicTerm: "خُشُبٌ مُّسَنَّدَةٌ",
    rootMeaning: { en: "خ-ش-ب (wood/timber), س-ن-د (to support/prop up)", ur: "خ-ش-ب (لکڑی)، س-ن-د (سہارا دینا/ٹیک لگانا)" },
    keyAyah: 4
  },

  historicalContext: {
    revelationPeriod: { en: "After Battle of Banu Mustaliq (5-6 AH)", ur: "غزوہ بنو مصطلق کے بعد (5-6 ہجری)" },
    occasion: { en: "The leader of hypocrites Abdullah ibn Ubayy said 'If we return to Madinah, the more honored will expel the more humble' - referring to expelling the Prophet and believers", ur: "منافقوں کے سردار عبداللہ بن ابی نے کہا 'اگر ہم مدینہ واپس گئے تو عزت والا ذلیل کو نکال دے گا' - اس کی مراد نبی ﷺ اور مومنوں کو نکالنا تھی" },
    note: { en: "This surah directly quotes and refutes the hypocrites' statements, especially Ibn Ubayy's arrogant claim. When Umar wanted to kill Ibn Ubayy for this statement, the Prophet showed mercy, and later Ibn Ubayy's own son offered to execute his father if the Prophet commanded. The surah established that true honor belongs to Allah, His Messenger, and believers - not to those who merely claim high social status.", ur: "یہ سورت براہِ راست منافقوں کی باتیں نقل کر کے ان کا رد کرتی ہے، خاص طور پر ابن ابی کا متکبرانہ دعویٰ۔ جب عمر رضی اللہ عنہ نے ابن ابی کو قتل کرنا چاہا تو نبی ﷺ نے رحم دکھایا، اور بعد میں ابن ابی کے اپنے بیٹے نے پیشکش کی کہ اگر نبی ﷺ حکم دیں تو وہ اپنے باپ کو قتل کر دے۔ سورت نے واضح کیا کہ حقیقی عزت Allah، اس کے رسول اور مومنوں کی ہے - نہ کہ ان کی جو محض اعلیٰ سماجی مقام کا دعویٰ کرتے ہیں۔" }
  },

  linguisticFeatures: {
    features: [
      {
        name: "Direct Quotation",
        description: { en: "Hypocrites' exact words quoted and refuted", ur: "منافقوں کے عین الفاظ نقل کر کے رد کیے گئے" },
        examples: ["نَشْهَدُ إِنَّكَ لَرَسُولُ اللَّهِ", "لَيُخْرِجَنَّ الْأَعَزُّ مِنْهَا الْأَذَلَّ"],
        ayahs: [1, 8]
      },
      {
        name: "Layered Testimony",
        description: { en: "Multiple testimonies in single verse", ur: "ایک آیت میں متعدد گواہیاں" },
        example: "They testify → Allah testifies → Allah testifies against them",
        ayah: 1
      },
      {
        name: "Vivid Metaphor",
        description: { en: "Agricultural/construction imagery for spiritual state", ur: "روحانی حالت کے لیے زرعی/تعمیراتی تشبیہ" },
        example: "خُشُبٌ مُّسَنَّدَةٌ - propped-up logs",
        ayah: 4
      },
      {
        name: "Emphatic Particles",
        description: { en: "Multiple emphatics for certainty", ur: "تاکید کے لیے متعدد حروف تاکید" },
        examples: ["لَرَسُولُ", "لَكَاذِبُونَ", "لَيُخْرِجَنَّ"],
        emphasis: "Strong affirmation through لام التوكيد"
      },
      {
        name: "Conditional Regret",
        description: { en: "لَوْلَا expressing impossible wish", ur: "لَوْلَا ناممکن تمنا ظاہر کرتا ہے" },
        example: "لَوْلَا أَخَّرْتَنِي - If only You had delayed me",
        ayah: 10
      }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Psychology of Hypocrisy",
        observation: "The paranoia described (thinking every shout is against them) reflects the psychological burden of maintaining deception",
        ayah: 4
      },
      {
        topic: "Body Language",
        observation: "Physical actions like turning heads (لَوَّوْا رُءُوسَهُمْ) as indicators of arrogance align with body language research",
        ayah: 5
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      {
        surah: 9,
        name: "At-Tawbah",
        relationship: "Most detailed treatment of hypocrites in the Quran",
        type: "thematic_parallel"
      },
      {
        surah: 2,
        name: "Al-Baqarah",
        relationship: "Opening description of hypocrites (verses 8-20)",
        type: "thematic_foundation"
      },
      {
        surah: 4,
        name: "An-Nisa",
        relationship: "Discusses hypocrites going between belief and disbelief",
        type: "thematic_parallel"
      },
      {
        surah: 62,
        name: "Al-Jumuah",
        relationship: "Directly preceding surah, also Medinan with community guidance",
        type: "sequential_relationship"
      }
    ]
  }
};

export default ONTOLOGY;
