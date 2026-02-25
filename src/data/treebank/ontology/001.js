/**
 * Surah Al-Fatiha (The Opening) - Surah 1
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 1,
  surahName: "Al-Fatiha",
  surahNameArabic: "الفاتحة",
  totalAyahs: 7,
  revelationType: "Makkan",
  mainTheme: "The Perfect Prayer and Essence of the Quran",

  categories: {
    divinePraise: {
      name: "Divine Praise and Gratitude",
      nameAr: "الحمد والثناء",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Al-Hamd", arabic: "الحمد", meaning: { en: "All praise belongs to Allah - comprehensive gratitude", ur: "تمام تعریفیں اللہ کے لیے ہیں - جامع شکر و حمد" }, ayahs: [2] },
        { term: "Rabb al-Alamin", arabic: "رب العالمين", meaning: { en: "Lord of all worlds - universal sovereignty", ur: "تمام جہانوں کا پالنے والا - آفاقی حاکمیت" }, ayahs: [2] },
        { term: "Universal Lordship", arabic: "الربوبية العامة", meaning: { en: "Allah's nurturing and sustaining all creation", ur: "اللہ کا تمام مخلوقات کی پرورش اور نگہداشت کرنا" }, ayahs: [2] }
      ]
    },
    divineAttributes: {
      name: "Divine Attributes",
      nameAr: "صفات الله",
      color: '#8B5CF6',
      icon: 'Crown',
      concepts: [
        { term: "Ar-Rahman", arabic: "الرحمن", meaning: { en: "The Most Gracious - infinite mercy for all creation", ur: "بے حد مہربان - تمام مخلوقات کے لیے لامحدود رحمت" }, ayahs: [1, 3] },
        { term: "Ar-Raheem", arabic: "الرحيم", meaning: { en: "The Most Merciful - special mercy for believers", ur: "نہایت رحم والا - مومنوں کے لیے خاص رحمت" }, ayahs: [1, 3] },
        { term: "Malik Yawm ad-Din", arabic: "مالك يوم الدين", meaning: { en: "Master of the Day of Judgment", ur: "یومِ جزا کا مالک" }, ayahs: [4] },
        { term: "Yawm ad-Din", arabic: "يوم الدين", meaning: { en: "Day of Recompense - when all accounts are settled", ur: "بدلے کا دن - جب سب حساب چکائے جائیں گے" }, ayahs: [4] }
      ]
    },
    worshipAndSeeking: {
      name: "Worship and Seeking Help",
      nameAr: "العبادة والاستعانة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Ibadah", arabic: "العبادة", meaning: { en: "Exclusive worship devoted to Allah alone", ur: "صرف اللہ کی عبادت - خالص بندگی" }, ayahs: [5] },
        { term: "Istianah", arabic: "الاستعانة", meaning: { en: "Seeking help only from Allah", ur: "صرف اللہ سے مدد مانگنا" }, ayahs: [5] },
        { term: "Iyyaka", arabic: "إياك", meaning: { en: "You alone - exclusive dedication (grammatical emphasis)", ur: "صرف تیری ہی - خالص وقف (نحوی تاکید)" }, ayahs: [5] },
        { term: "Direct Address", arabic: "المخاطبة", meaning: { en: "Shift from third to second person - intimate connection", ur: "غائب سے حاضر کی طرف تبدیلی - قربت کا اظہار" }, ayahs: [5] }
      ]
    },
    guidanceAndPath: {
      name: "Guidance and the Straight Path",
      nameAr: "الهداية والصراط المستقيم",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Hidayah", arabic: "الهداية", meaning: { en: "Divine guidance to truth", ur: "سچائی کی طرف الٰہی ہدایت" }, ayahs: [6] },
        { term: "Sirat al-Mustaqim", arabic: "الصراط المستقيم", meaning: { en: "The Straight Path - direct route to Allah", ur: "سیدھا راستہ - اللہ تک پہنچنے کا سیدھا رستہ" }, ayahs: [6] },
        { term: "Ihdina", arabic: "اهدنا", meaning: { en: "Guide us - continuous supplication for guidance", ur: "ہمیں ہدایت دے - مسلسل دعائے ہدایت" }, ayahs: [6] }
      ]
    },
    threeGroupsOfPeople: {
      name: "Three Groups of People",
      nameAr: "الفئات الثلاث من الناس",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "Al-Mun'am Alayhim", arabic: "المنعم عليهم", meaning: { en: "Those blessed - prophets, truthful, martyrs, righteous", ur: "انعام والے - انبیاء، صدیقین، شہداء، صالحین" }, ayahs: [7] },
        { term: "Al-Maghdub Alayhim", arabic: "المغضوب عليهم", meaning: { en: "Those who earned wrath - knew truth but rejected it", ur: "غضب والے - سچائی جان کر بھی رد کرنے والے" }, ayahs: [7] },
        { term: "Ad-Dallin", arabic: "الضالين", meaning: { en: "Those astray - deviated from truth through ignorance", ur: "گمراہ لوگ - جہالت کی وجہ سے سچائی سے بھٹکنے والے" }, ayahs: [7] },
        { term: "Knowledge vs Action", arabic: "العلم والعمل", meaning: { en: "Wrath for rejecting known truth; straying for ignorance", ur: "جانتے ہوئے انکار پر غضب؛ نادانی میں بھٹکنا گمراہی" }, ayahs: [7] }
      ]
    },
    prayerStructure: {
      name: "Structure of Perfect Prayer",
      nameAr: "بنية الدعاء الكامل",
      color: '#EC4899',
      icon: 'Book',
      concepts: [
        { term: "Praise First", arabic: "التقديم بالحمد", meaning: { en: "Beginning supplication with praise of Allah", ur: "دعا کا آغاز اللہ کی حمد سے" }, ayahs: [2, 3, 4] },
        { term: "Covenant of Worship", arabic: "عهد العبودية", meaning: { en: "Declaration of exclusive worship before asking", ur: "مانگنے سے پہلے خالص عبادت کا عہد" }, ayahs: [5] },
        { term: "Supplication", arabic: "الدعاء", meaning: { en: "Requesting guidance after establishing relationship", ur: "تعلق قائم کرنے کے بعد ہدایت کی درخواست" }, ayahs: [6, 7] },
        { term: "Collective Prayer", arabic: "صيغة الجمع", meaning: { en: "We - praying as community, not just individual", ur: "ہم - اجتماعی دعا، صرف انفرادی نہیں" }, ayahs: [5, 6, 7] }
      ]
    }
  },

  relationships: [
    { from: "Ar-Rahman", to: "Ar-Raheem", type: "complementary", description: { en: "Rahman is vast mercy, Raheem is deep mercy; together they encompass all", ur: "رحمٰن وسیع رحمت ہے، رحیم گہری رحمت ہے؛ دونوں مل کر سب کو گھیر لیتے ہیں" } },
    { from: "Al-Hamd", to: "Rabb al-Alamin", type: "causation", description: { en: "Praise is due because He is Lord of all worlds", ur: "حمد اس لیے واجب ہے کہ وہ تمام جہانوں کا رب ہے" } },
    { from: "Malik Yawm ad-Din", to: "Ibadah", type: "motivation", description: { en: "Awareness of Judgment Day motivates sincere worship", ur: "یومِ جزا کا شعور خالص عبادت کی ترغیب دیتا ہے" } },
    { from: "Ibadah", to: "Istianah", type: "prerequisite", description: { en: "True worship requires seeking help only from Allah", ur: "سچی عبادت کے لیے صرف اللہ سے مدد مانگنا ضروری ہے" } },
    { from: "Istianah", to: "Hidayah", type: "consequence", description: { en: "Seeking Allah's help leads to receiving guidance", ur: "اللہ سے مدد مانگنا ہدایت ملنے کا سبب بنتا ہے" } },
    { from: "Sirat al-Mustaqim", to: "Mun'am Alayhim", type: "definition", description: { en: "The Straight Path is the way of those blessed by Allah", ur: "سیدھا راستہ ان لوگوں کا راستہ ہے جن پر اللہ نے انعام کیا" } },
    { from: "Maghdub Alayhim", to: "Dallin", type: "contrast", description: { en: "Two types of deviation: willful rejection vs ignorant straying", ur: "دو قسم کے انحراف: جان بوجھ کر انکار بمقابلہ جہالت میں بھٹکنا" } },
    { from: "Praise", to: "Supplication", type: "order", description: { en: "Proper prayer begins with praise before making requests", ur: "صحیح دعا مانگنے سے پہلے حمد سے شروع ہوتی ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Divine Praise to Human Supplication", ur: "الٰہی حمد سے انسانی دعا تک" },
    stages: [
      { name: "Basmala", ayahs: [1], description: { en: "Beginning with Allah's name and mercy attributes", ur: "اللہ کے نام اور رحمت کی صفات سے آغاز" } },
      { name: "Universal Praise", ayahs: [2], description: { en: "All praise to the Lord of all worlds", ur: "تمام جہانوں کے رب کی حمد" } },
      { name: "Mercy Attributes", ayahs: [3], description: { en: "Emphasizing Allah's infinite mercy", ur: "اللہ کی لامحدود رحمت پر زور" } },
      { name: "Judgment Day", ayahs: [4], description: { en: "Master of the Day of Recompense - accountability", ur: "یومِ جزا کا مالک - احتساب" } },
      { name: "Declaration of Servitude", ayahs: [5], description: { en: "You alone we worship and seek help from", ur: "صرف تیری ہی عبادت کرتے ہیں اور تجھ سے ہی مدد مانگتے ہیں" } },
      { name: "Request for Guidance", ayahs: [6], description: { en: "Guide us to the Straight Path", ur: "ہمیں سیدھے راستے کی ہدایت دے" } },
      { name: "Clarification of Path", ayahs: [7], description: { en: "Path of blessed, not those in error", ur: "انعام والوں کا راستہ، نہ کہ غلطی والوں کا" } }
    ]
  },

  uniqueInsight: {
    title: { en: "Umm al-Quran (Mother of the Quran)", ur: "اُمّ القرآن (قرآن کی ماں)" },
    insight: {
      en: "Al-Fatiha is called 'Umm al-Quran' (Mother of the Quran) and 'Al-Sab' al-Mathani' (The Seven Oft-Repeated) because it contains the essence of the entire Quran in just seven verses. It encapsulates three core pillars: Tawhid (Divine Unity - verses 1-4), Ibadah (Worship - verse 5), and guidance through following the righteous and avoiding error (verses 6-7). Every concept in the Quran is either elaboration of praise (Hamd), explanation of mercy (Rahmah), description of the Day of Judgment, clarification of worship, or guidance to the Straight Path. Muslims recite this surah at least 17 times daily in the five obligatory prayers - making it the most recited passage in human history. The Prophet (peace be upon him) said: 'No prayer is valid without the Fatiha.' A hadith qudsi states Allah divided Al-Fatiha into two halves - one for Him (verses 1-4) and one for His servant (verses 5-7) - with the promise: 'My servant will have what he asks for.' This divine conversation makes every prayer an intimate dialogue between the servant and the Lord.",
      ur: "الفاتحہ کو 'اُمّ القرآن' اور 'السبع المثانی' (سات بار بار دہرائی جانے والی) کہا جاتا ہے کیونکہ صرف سات آیات میں پورے قرآن کا خلاصہ موجود ہے۔ اس میں تین بنیادی ستون ہیں: توحید (آیات 1-4)، عبادت (آیت 5)، اور صالحین کی پیروی اور گمراہی سے بچنا (آیات 6-7)۔ مسلمان پانچ فرض نمازوں میں روزانہ کم از کم 17 بار یہ سورت پڑھتے ہیں - یہ انسانی تاریخ میں سب سے زیادہ پڑھا جانے والا کلام ہے۔ نبی ﷺ نے فرمایا: 'بغیر فاتحہ کے نماز نہیں۔' ایک حدیثِ قدسی میں اللہ نے فرمایا کہ فاتحہ کو دو حصوں میں تقسیم کیا - ایک اپنے لیے (آیات 1-4) اور ایک بندے کے لیے (آیات 5-7) - اور وعدہ کیا: 'میرے بندے کو وہ ملے گا جو وہ مانگے۔'"
    },
    arabicTerm: "أم القرآن والسبع المثاني",
    rootMeaning: { en: "ف-ت-ح (to open) - The Opening that unlocks the treasures of the Quran", ur: "ف-ت-ح (کھولنا) - وہ آغاز جو قرآن کے خزانے کھولتا ہے" },
    keyAyah: 5
  },

  historicalContext: {
    revelationPeriod: { en: "Early Makkan period, one of the first complete surahs revealed", ur: "ابتدائی مکی دور، پہلی مکمل نازل ہونے والی سورتوں میں سے ایک" },
    occasion: { en: "Revealed as the perfect form of prayer and supplication, teaching the early Muslims how to approach and communicate with Allah. Some scholars consider it the first complete surah revealed, though individual verses like Iqra (96:1-5) came earlier.", ur: "نماز اور دعا کی کامل صورت کے طور پر نازل ہوئی، ابتدائی مسلمانوں کو اللہ سے رابطے کا طریقہ سکھاتی ہے۔ بعض علماء اسے پہلی مکمل نازل شدہ سورت مانتے ہیں۔" },
    note: { en: "Al-Fatiha is the only surah whose recitation is obligatory in every unit (rakat) of prayer. Its revelation marks the establishment of the formal prayer structure in Islam. The surah is also used for ruqyah (spiritual healing) and is recited at the opening of significant events.", ur: "الفاتحہ واحد سورت ہے جس کا نماز کی ہر رکعت میں پڑھنا فرض ہے۔ یہ رقیہ (روحانی علاج) کے لیے بھی استعمال ہوتی ہے اور اہم مواقع کے آغاز پر پڑھی جاتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Basmala Integration", description: "بِسْمِ اللَّهِ - Beginning formula", example: { en: "Establishes mercy as the frame for all action", ur: "رحمت کو ہر عمل کا دائرہ قرار دیتا ہے" }, ayah: 1 },
      { name: "Definite Article Al", description: "الحمد - THE praise (not just praise)", example: { en: "All praise of all kinds at all times", ur: "ہر قسم کی، ہر وقت کی تمام تعریف" }, ayah: 2 },
      { name: "Object Fronting (Taqdeem)", description: "إِيَّاكَ نَعْبُدُ - You alone we worship", example: { en: "Fronting the object for exclusivity emphasis", ur: "تاکید کے لیے مفعول کو مقدم کرنا" }, ayah: 5 },
      { name: "Person Shift (Iltifat)", description: "Third person to second person", example: { en: "From 'Rabb' (He) to 'Iyyaka' (You) - intimacy", ur: "'رب' (وہ) سے 'ایاک' (تو) کی طرف - قربت کا اظہار" }, ayah: 5 },
      { name: "Plural of Inclusion", description: "نَعْبُدُ، نَسْتَعِينُ، اهْدِنَا", example: { en: "We - communal worship, not individualistic", ur: "ہم - اجتماعی عبادت، انفرادی نہیں" }, ayah: 5 }
    ]
  },

  prayerSignificance: {
    dailyRecitation: {
      fajr: 4,
      dhuhr: 8,
      asr: 8,
      maghrib: 6,
      isha: 9,
      total: "17+ times minimum (more with sunnah prayers)",
      note: "Most recited words in the world - billions of daily recitations globally"
    },
    hadithReferences: [
      { text: "No prayer is valid without recitation of the Opening of the Book", source: "Bukhari and Muslim" },
      { text: "I have divided the prayer between Myself and My servant into two halves", source: "Muslim - Hadith Qudsi" },
      { text: "It is Umm al-Quran, Umm al-Kitab, and Al-Sab' al-Mathani", source: "Tirmidhi" }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 2, name: "Al-Baqarah", relationship: "Al-Baqarah begins with 'This is the Book with guidance' - answering Al-Fatiha's prayer for guidance", type: "direct_answer" },
      { surah: 3, name: "Aal Imran", relationship: "Details the 'blessed path' through prophetic stories", type: "thematic_expansion" },
      { surah: 15, name: "Al-Hijr", relationship: "Mentions 'Al-Sab' al-Mathani' (15:87) referring to Al-Fatiha", type: "direct_reference" },
      { surah: 17, name: "Al-Isra", relationship: "Night Journey where prayer was prescribed - Al-Fatiha integral", type: "historical_connection" },
      { surah: 112, name: "Al-Ikhlas", relationship: "Both focus on Tawhid; Ikhlas expands on 'Alhamdulillah' concept", type: "thematic_parallel" },
      { surah: 113, name: "Al-Falaq", relationship: "Protection prayers complement guidance prayer", type: "complementary" },
      { surah: 114, name: "An-Nas", relationship: "Seeking refuge from evil complements seeking guidance", type: "complementary" }
    ]
  },

  namesOfSurah: {
    names: [
      { name: "Al-Fatiha", arabic: "الفاتحة", meaning: "The Opening - opens the Quran and prayer" },
      { name: "Umm al-Quran", arabic: "أم القرآن", meaning: "Mother of the Quran - contains its essence" },
      { name: "Umm al-Kitab", arabic: "أم الكتاب", meaning: "Mother of the Book" },
      { name: "Al-Sab' al-Mathani", arabic: "السبع المثاني", meaning: "The Seven Oft-Repeated" },
      { name: "Al-Hamd", arabic: "الحمد", meaning: "The Praise" },
      { name: "As-Salah", arabic: "الصلاة", meaning: "The Prayer - it IS the prayer" },
      { name: "Ash-Shifa", arabic: "الشفاء", meaning: "The Cure - spiritual healing" },
      { name: "Ar-Ruqyah", arabic: "الرقية", meaning: "The Remedy - used for spiritual protection" },
      { name: "Al-Kafiyah", arabic: "الكافية", meaning: "The Sufficient - sufficient for worship" },
      { name: "Al-Asas", arabic: "الأساس", meaning: "The Foundation - foundation of the Quran" }
    ]
  }
};

export default ONTOLOGY;
