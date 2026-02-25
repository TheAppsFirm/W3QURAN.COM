/**
 * Surah As-Saff (The Ranks) - Surah 61
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 61,
  surahName: "As-Saff",
  surahNameArabic: "الصف",
  totalAyahs: 14,
  revelationType: "Medinan",
  mainTheme: "Unity in Faith and Action, Following the Prophetic Chain",

  categories: {
    divineAttributes: {
      name: "Divine Attributes",
      nameAr: "صفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Aziz", arabic: "العزيز", meaning: { en: "The Almighty", ur: "غالب، زبردست" }, ayahs: [1], description: { en: "Invincible power", ur: "ناقابلِ شکست قوت" } },
        { term: "Al-Hakim", arabic: "الحكيم", meaning: { en: "The Wise", ur: "حکمت والا" }, ayahs: [1], description: { en: "Perfect wisdom in decrees", ur: "فیصلوں میں کامل حکمت" } }
      ]
    },
    sincerity: {
      name: "Sincerity in Faith",
      nameAr: "الإخلاص في الإيمان",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Words vs Actions", arabic: "القول والعمل", meaning: { en: "Consistency between speech and deed", ur: "قول اور عمل میں مطابقت" }, ayahs: [2, 3], description: { en: "Saying what you don't do is hateful to Allah", ur: "جو نہیں کرتے وہ کہنا Allah کے نزدیک مبغوض ہے" } },
        { term: "Maqt", arabic: "المقت", meaning: { en: "Divine hatred for hypocrisy", ur: "منافقت پر الٰہی ناراضگی" }, ayahs: [3], description: { en: "Great sin of inconsistency", ur: "قول و فعل میں تضاد کا بڑا گناہ" } },
        { term: "Bunyan Marsus", arabic: "بنيان مرصوص", meaning: { en: "Solid structure", ur: "سیسہ پلائی ہوئی دیوار" }, ayahs: [4], description: { en: "Unity like cemented wall", ur: "مضبوط چنائی والی دیوار جیسی یکجہتی" } }
      ]
    },
    propheticChain: {
      name: "Prophetic Continuity",
      nameAr: "تسلسل الأنبياء",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Musa and His People", arabic: "موسى وقومه", meaning: { en: "Moses suffering from his people", ur: "موسیٰ علیہ السلام کا اپنی قوم سے تکلیف اٹھانا" }, ayahs: [5], description: { en: "Despite knowing he was a messenger", ur: "باوجود اس کے کہ وہ جانتے تھے کہ وہ رسول ہیں" } },
        { term: "Hearts Made to Deviate", arabic: "إزاغة القلوب", meaning: { en: "Divine response to deviation", ur: "گمراہی پر الٰہی جواب" }, ayahs: [5] },
        { term: "Isa's Confirmation", arabic: "تصديق عيسى", meaning: { en: "Jesus confirming Torah", ur: "عیسیٰ علیہ السلام کا تورات کی تصدیق کرنا" }, ayahs: [6] },
        { term: "Ahmad Prophecy", arabic: "البشارة بأحمد", meaning: { en: "Jesus foretelling Ahmad", ur: "عیسیٰ علیہ السلام کی احمد کی بشارت" }, ayahs: [6] },
        { term: "Rejection Pattern", arabic: "نمط الرفض", meaning: { en: "Calling truth 'magic'", ur: "حق کو 'جادو' کہنا" }, ayahs: [6] }
      ]
    },
    islamicStruggle: {
      name: "Sacred Struggle",
      nameAr: "الجهاد المقدس",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Fighting in Ranks", arabic: "القتال صفا", meaning: { en: "Organized battle for Allah", ur: "Allah کی راہ میں منظم جنگ" }, ayahs: [4] },
        { term: "Profitable Trade", arabic: "تجارة منجية", meaning: { en: "Saving transaction", ur: "نجات دلانے والی تجارت" }, ayahs: [10] },
        { term: "Jihad with Wealth", arabic: "الجهاد بالمال", meaning: { en: "Striving with property", ur: "مال سے جہاد" }, ayahs: [11] },
        { term: "Jihad with Lives", arabic: "الجهاد بالنفس", meaning: { en: "Striving with lives", ur: "جان سے جہاد" }, ayahs: [11] },
        { term: "Nasr and Fath", arabic: "النصر والفتح", meaning: { en: "Victory and conquest", ur: "نصرت اور فتح" }, ayahs: [13] }
      ]
    },
    rewardsOfStruggle: {
      name: "Rewards for Believers",
      nameAr: "جزاء المؤمنين",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "Sin Forgiveness", arabic: "مغفرة الذنوب", meaning: { en: "Erasure of sins", ur: "گناہوں کی معافی" }, ayahs: [12] },
        { term: "Gardens with Rivers", arabic: "جنات تجري", meaning: { en: "Paradise gardens", ur: "جنت کے باغات" }, ayahs: [12] },
        { term: "Pleasant Dwellings", arabic: "مساكن طيبة", meaning: { en: "Beautiful homes in Eden", ur: "جنتِ عدن میں عمدہ مکانات" }, ayahs: [12] },
        { term: "Supreme Success", arabic: "الفوز العظيم", meaning: { en: "Ultimate achievement", ur: "عظیم کامیابی" }, ayahs: [12] },
        { term: "Near Victory", arabic: "فتح قريب", meaning: { en: "Imminent triumph", ur: "قریب کی فتح" }, ayahs: [13] }
      ]
    },
    supportingAllah: {
      name: "Being Allah's Supporters",
      nameAr: "أنصار الله",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "Ansar Allah", arabic: "أنصار الله", meaning: { en: "Helpers of Allah's cause", ur: "Allah کے دین کے مددگار" }, ayahs: [14] },
        { term: "Disciples' Model", arabic: "نموذج الحواريين", meaning: { en: "Following Jesus's disciples", ur: "عیسیٰ علیہ السلام کے حواریوں کی پیروی" }, ayahs: [14] },
        { term: "Group that Believed", arabic: "الطائفة المؤمنة", meaning: { en: "Faction that had faith", ur: "ایمان لانے والا گروہ" }, ayahs: [14] },
        { term: "Divine Support", arabic: "التأييد الإلهي", meaning: { en: "Allah strengthening believers", ur: "Allah کا مومنوں کو تقویت دینا" }, ayahs: [14] }
      ]
    }
  },

  relationships: [
    { from: "Universal Glorification", to: "Human Obligation", type: "contrast", description: { en: "All creation glorifies Allah; humans must align words with actions", ur: "تمام مخلوقات Allah کی تسبیح کرتی ہیں؛ انسانوں کو قول و فعل میں مطابقت رکھنی چاہیے" } },
    { from: "Saying Without Doing", to: "Divine Hatred", type: "consequence", description: { en: "Inconsistency invokes Allah's maqt", ur: "قول و فعل کی تضاد Allah کی ناراضگی کا باعث ہے" } },
    { from: "United Ranks", to: "Solid Structure", type: "metaphor", description: { en: "Fighting in rows compared to cemented building", ur: "صفوں میں لڑنا سیسہ پلائی ہوئی عمارت سے تشبیہ" } },
    { from: "Moses's Suffering", to: "Hearts Deviated", type: "consequence", description: { en: "When they deviated, Allah made their hearts deviate", ur: "جب وہ کج روی کرنے لگے تو Allah نے ان کے دل ٹیڑھے کر دیے" } },
    { from: "Jesus's Mission", to: "Ahmad Prophecy", type: "continuity", description: { en: "Jesus confirmed Torah and foretold Muhammad", ur: "عیسیٰ نے تورات کی تصدیق کی اور محمد ﷺ کی بشارت دی" } },
    { from: "Light Extinguishing Attempt", to: "Light Completion", type: "opposition", description: { en: "They try to blow out light; Allah will complete it", ur: "وہ نورِ الٰہی بجھانا چاہتے ہیں؛ Allah اسے مکمل کرے گا" } },
    { from: "Profitable Trade", to: "Jihad", type: "metaphor", description: { en: "Faith and struggle presented as saving commerce", ur: "ایمان اور جہاد کو نجات دلانے والی تجارت کے طور پر پیش کیا گیا" } },
    { from: "Jihad", to: "Paradise", type: "reward", description: { en: "Striving leads to forgiveness and gardens", ur: "جہاد مغفرت اور جنت کی طرف لے جاتا ہے" } },
    { from: "Disciples' Pledge", to: "Believers' Call", type: "model", description: { en: "Muslims called to be like the disciples", ur: "مسلمانوں کو حواریوں جیسا بننے کی دعوت" } }
  ],

  thematicFlow: {
    title: "From Cosmic Glory to Active Support of Truth",
    stages: [
      {
        name: "Cosmic Glorification",
        ayahs: [1],
        description: { en: "Universal praise establishing divine authority", ur: "الٰہی اقتدار قائم کرنے والی آفاقی تسبیح" }
      },
      {
        name: "Call for Consistency",
        ayahs: [2, 3],
        description: { en: "Rebuke for saying what you don't do; gravely hateful to Allah", ur: "جو نہیں کرتے وہ کہنے پر ملامت؛ Allah کے نزدیک سخت ناپسندیدہ" }
      },
      {
        name: "United Fighting",
        ayahs: [4],
        description: { en: "Allah loves those fighting in ranks like solid structure", ur: "Allah ان سے محبت کرتا ہے جو صفوں میں سیسہ پلائی دیوار کی طرح لڑتے ہیں" }
      },
      {
        name: "Moses's Struggle",
        ayahs: [5],
        description: { en: "Moses asking why his people hurt him; deviation leads to sealed hearts", ur: "موسیٰ کا اپنی قوم سے تکلیف کا سوال؛ کج روی دل ٹیڑھے ہونے کا سبب" }
      },
      {
        name: "Jesus's Mission",
        ayahs: [6],
        description: { en: "Confirming Torah, foretelling Ahmad, yet accused of magic", ur: "تورات کی تصدیق، احمد کی بشارت، مگر جادو کا الزام" }
      },
      {
        name: "Lying About Islam",
        ayahs: [7],
        description: { en: "Greatest injustice: lying about Allah while being called to Islam", ur: "سب سے بڑا ظلم: اسلام کی دعوت کے باوجود Allah پر جھوٹ باندھنا" }
      },
      {
        name: "Inevitable Light",
        ayahs: [8, 9],
        description: { en: "Attempts to extinguish Allah's light will fail; Islam will prevail", ur: "نورِ الٰہی بجھانے کی کوششیں ناکام ہوں گی؛ اسلام غالب آئے گا" }
      },
      {
        name: "Profitable Trade",
        ayahs: [10, 11],
        description: { en: "Faith and jihad as saving transaction; striving with wealth and lives", ur: "ایمان اور جہاد نجات والی تجارت؛ مال اور جان سے جدوجہد" }
      },
      {
        name: "Rewards",
        ayahs: [12, 13],
        description: { en: "Forgiveness, paradise, near victory - what believers love", ur: "مغفرت، جنت، قریب کی فتح - وہ چیزیں جو مومنوں کو محبوب ہیں" }
      },
      {
        name: "Call to Support",
        ayahs: [14],
        description: { en: "Be Allah's helpers like the disciples; believers will prevail", ur: "حواریوں کی طرح Allah کے مددگار بنو؛ مومنین غالب آئیں گے" }
      }
    ]
  },

  practicalApplication: {
    title: "Living with Integrity and Purpose",
    applications: [
      {
        context: "Personal Integrity",
        teaching: "Ensure your actions match your words; inconsistency angers Allah",
        ayah: 2
      },
      {
        context: "Community Unity",
        teaching: "Work together like a solid, cemented structure",
        ayah: 4
      },
      {
        context: "Handling Opposition",
        teaching: "Expect accusations like 'magic' but trust Allah will complete His light",
        ayah: 8
      },
      {
        context: "Investment Perspective",
        teaching: "See faith and sacrifice as the most profitable trade",
        ayah: 10
      },
      {
        context: "Active Support",
        teaching: "Be helpers of Allah's cause, following the disciples' model",
        ayah: 14
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Ahmad Prophecy (اسْمُهُ أَحْمَدُ)", ur: "احمد کی بشارت (اسْمُهُ أَحْمَدُ)" },
    insight: { en: "This is the only verse in the Quran where the name 'Ahmad' (أَحْمَدُ) appears, placed on the lips of Jesus (Isa) as a prophecy of a messenger to come. Ahmad shares the same root as Muhammad (ح-م-د, meaning 'praise'), but Ahmad is the elative/superlative form meaning 'Most Praising' or 'Most Praised.' This verse establishes the continuity of prophethood: Jesus confirmed Moses (Torah) and foretold Muhammad, yet when Muhammad came with clear proofs, he was accused of 'obvious magic' - the same rejection pattern faced by previous messengers. This creates a powerful thread of prophetic solidarity.", ur: "یہ قرآن کی واحد آیت ہے جہاں 'احمد' (أَحْمَدُ) کا نام آیا ہے، جو عیسیٰ علیہ السلام کی زبان سے آنے والے رسول کی پیشگوئی کے طور پر ہے۔ احمد کا مادہ محمد جیسا ہے (ح-م-د، معنی 'حمد')، لیکن احمد صیغہ تفضیل ہے یعنی 'سب سے زیادہ حمد کرنے والا' یا 'سب سے زیادہ تعریف کیا گیا'۔ یہ آیت نبوت کا تسلسل قائم کرتی ہے: عیسیٰ نے موسیٰ (تورات) کی تصدیق کی اور محمد ﷺ کی بشارت دی، مگر جب محمد ﷺ واضح دلائل لے کر آئے تو ان پر 'کھلا جادو' کا الزام لگایا گیا - وہی رد کا انداز جو پچھلے انبیاء کے ساتھ ہوا۔ یہ نبوی یکجہتی کا مضبوط سلسلہ قائم کرتا ہے۔" },
    arabicTerm: "اسْمُهُ أَحْمَدُ",
    rootMeaning: { en: "ح-م-د (to praise) - Ahmad means 'Most Praised' or 'Most Praising'", ur: "ح-م-د (حمد کرنا) - احمد کا مطلب 'سب سے زیادہ حمد کیا گیا' یا 'سب سے زیادہ حمد کرنے والا'" },
    keyAyah: 6
  },

  historicalContext: {
    revelationPeriod: { en: "Medinan period, likely before major battles", ur: "مدنی دور، غالباً بڑی جنگوں سے پہلے" },
    occasion: { en: "Some companions had expressed great zeal for jihad but when the time came, showed hesitation. The surah addresses the importance of following through on commitments.", ur: "بعض صحابہ نے جہاد کے لیے بڑا جوش دکھایا تھا مگر وقت آنے پر ہچکچاہٹ ظاہر کی۔ سورت عہد پورا کرنے کی اہمیت بیان کرتی ہے۔" },
    note: { en: "The surah uniquely names Prophet Muhammad by his alternate name 'Ahmad,' linking him to Jesus's prophecy. It establishes the chain: Moses → Jesus → Muhammad, all facing opposition but all part of one divine plan. The 'solid structure' (بُنْيَانٌ مَّرْصُوصٌ) metaphor emphasizes that believers must be like bricks cemented together, supporting each other without gaps.", ur: "سورت منفرد طور پر نبی ﷺ کو ان کے متبادل نام 'احمد' سے پکارتی ہے، جو عیسیٰ کی پیشگوئی سے جوڑتا ہے۔ یہ سلسلہ قائم کرتی ہے: موسیٰ ← عیسیٰ ← محمد، سب کو مخالفت کا سامنا ہوا مگر سب ایک الٰہی منصوبے کا حصہ ہیں۔ 'سیسہ پلائی عمارت' (بُنْيَانٌ مَّرْصُوصٌ) کی تشبیہ بتاتی ہے کہ مومنین کو اینٹوں کی طرح مضبوطی سے جڑے رہنا چاہیے۔" }
  },

  linguisticFeatures: {
    features: [
      {
        name: "Musabbih Series",
        description: { en: "Part of seven surahs glorifying Allah", ur: "Allah کی تسبیح سے شروع ہونے والی سات سورتوں میں سے ایک" },
        pattern: "سَبَّحَ (perfect active)",
        note: "Past tense indicating completed/eternal glorification"
      },
      {
        name: "Rhetorical Question",
        description: { en: "Why do you say what you don't do?", ur: "تم وہ کیوں کہتے ہو جو نہیں کرتے؟" },
        example: "لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ",
        ayah: 2
      },
      {
        name: "Architectural Metaphor",
        description: { en: "Believers like cemented structure", ur: "مومنین سیسہ پلائی عمارت کی طرح" },
        example: "كَأَنَّهُم بُنْيَانٌ مَّرْصُوصٌ",
        ayah: 4
      },
      {
        name: "Commercial Metaphor",
        description: { en: "Faith as profitable trade", ur: "ایمان بطور نفع بخش تجارت" },
        example: "هَلْ أَدُلُّكُمْ عَلَىٰ تِجَارَةٍ",
        ayah: 10
      },
      {
        name: "Prophetic Name Revelation",
        description: { en: "Only occurrence of 'Ahmad'", ur: "'احمد' نام کا واحد ذکر" },
        example: "اسْمُهُ أَحْمَدُ",
        ayah: 6
      }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: "Structural Engineering",
        observation: "The 'marṣūṣ' (cemented/solid) building metaphor reflects understanding that individual bricks alone are weak, but bonded together create immense strength",
        ayah: 4
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      {
        surah: 57,
        name: "Al-Hadid",
        relationship: "Both part of Musabbihaat glorification surahs",
        type: "thematic_series"
      },
      {
        surah: 62,
        name: "Al-Jumuah",
        relationship: "Following surah, also Musabbihaat",
        type: "sequential_relationship"
      },
      {
        surah: 48,
        name: "Al-Fath",
        relationship: "Both promise divine victory (فتح)",
        type: "thematic_parallel"
      },
      {
        surah: 3,
        name: "Aal Imran",
        relationship: "Both discuss disciples (Hawāriyyūn) of Jesus",
        type: "thematic_parallel"
      },
      {
        surah: 9,
        name: "At-Tawbah",
        relationship: "Both discuss 'profitable trade' of faith",
        type: "thematic_parallel"
      }
    ]
  }
};

export default ONTOLOGY;
