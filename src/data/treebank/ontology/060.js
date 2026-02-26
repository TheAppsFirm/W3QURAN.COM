/**
 * Surah Al-Mumtahina (The Woman to be Examined) - Surah 60
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 60,
  surahName: "Al-Mumtahina",
  surahNameArabic: "الممتحنة",
  totalAyahs: 13,
  revelationType: "Medinan",
  mainTheme: { en: "Guidelines for Relations with Non-Muslims and Testing of Emigrants", ur: "غیر مسلمین سے تعلقات کے رہنما اصول اور مہاجرین کا امتحان" },

  categories: {
    loyaltyBoundaries: {
      name: "Loyalty Boundaries",
      nameUr: "وفاداری کی حدود",
      nameAr: "حدود الولاء",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "Prohibition of Enemy Alliance", arabic: "النهي عن موالاة الأعداء", meaning: { en: "Don't ally with Allah's enemies", ur: "اللہ کے دشمنوں سے دوستی مت کرو" }, ayahs: [1] },
        { term: "Extending Affection to Enemies", arabic: "إلقاء المودة", meaning: { en: "Showing love to disbelievers", ur: "کافروں سے محبت کا اظہار" }, ayahs: [1] },
        { term: "Kinship vs Faith", arabic: "الأرحام والإيمان", meaning: { en: "Family ties don't override faith", ur: "خاندانی رشتے ایمان سے بالاتر نہیں" }, ayahs: [3] }
      ]
    },
    abrahamicModel: {
      name: "Abraham's Example",
      nameUr: "ابراہیم علیہ السلام کا نمونہ",
      nameAr: "أسوة إبراهيم",
      color: '#8B5CF6',
      icon: 'Star',
      concepts: [
        { term: "Beautiful Example", arabic: "أسوة حسنة", meaning: { en: "Model of disassociation from polytheism", ur: "شرک سے براءت کا بہترین نمونہ" }, ayahs: [4, 6] },
        { term: "Declaration of Disavowal", arabic: "إعلان البراءة", meaning: { en: "Clear separation from idol worship", ur: "بت پرستی سے واضح اعلانِ براءت" }, ayahs: [4] },
        { term: "Enmity Until Belief", arabic: "العداوة حتى الإيمان", meaning: { en: "Opposition lasting until they believe", ur: "مخالفت جاری رہے گی جب تک ایمان نہ لائیں" }, ayahs: [4] }
      ]
    },
    nuancedRelations: {
      name: "Nuanced Relations",
      nameUr: "متوازن تعلقات",
      nameAr: "العلاقات المتمايزة",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Non-Combatant Kindness", arabic: "البر لغير المحاربين", meaning: { en: "Being kind to peaceful non-Muslims", ur: "امن پسند غیر مسلمین کے ساتھ حسنِ سلوک" }, ayahs: [8] },
        { term: "Justice to All", arabic: "القسط للجميع", meaning: { en: "Acting justly toward everyone", ur: "ہر ایک کے ساتھ انصاف سے پیش آنا" }, ayahs: [8] },
        { term: "Prohibition of Fighting Allies", arabic: "تحريم موالاة المحاربين", meaning: { en: "No alliance with fighters/expellers", ur: "لڑنے والوں/نکالنے والوں سے دوستی حرام" }, ayahs: [9] },
        { term: "Future Reconciliation", arabic: "المودة المستقبلية", meaning: { en: "Allah may bring love between enemies", ur: "اللہ دشمنوں کے درمیان محبت پیدا کر سکتا ہے" }, ayahs: [7] }
      ]
    },
    emigrantWomen: {
      name: "Examining Emigrant Women",
      nameUr: "مہاجر خواتین کا امتحان",
      nameAr: "امتحان المهاجرات",
      color: '#3B82F6',
      icon: 'Search',
      concepts: [
        { term: "Testing Believing Women", arabic: "امتحان المؤمنات", meaning: { en: "Examining women emigrating from Makkah", ur: "مکہ سے ہجرت کرنے والی خواتین کا امتحان" }, ayahs: [10] },
        { term: "Allah Knows Faith", arabic: "علم الله بالإيمان", meaning: { en: "Only Allah knows true belief", ur: "حقیقی ایمان صرف اللہ جانتا ہے" }, ayahs: [10] },
        { term: "Marriage Dissolution", arabic: "فسخ النكاح", meaning: { en: "Believing women not lawful for disbelievers", ur: "مومن عورتیں کافروں کے لیے حلال نہیں" }, ayahs: [10] },
        { term: "Compensation for Dowry", arabic: "رد المهر", meaning: { en: "Returning what spouses spent", ur: "شوہروں نے جو خرچ کیا اس کی واپسی" }, ayahs: [10, 11] }
      ]
    },
    womensPledge: {
      name: "Women's Pledge of Allegiance",
      nameUr: "خواتین کی بیعت",
      nameAr: "بيعة النساء",
      color: '#06B6D4',
      icon: 'Heart',
      concepts: [
        { term: "No Shirk", arabic: "عدم الشرك", meaning: { en: "No associating partners with Allah", ur: "اللہ کے ساتھ کسی کو شریک نہ ٹھہرانا" }, ayahs: [12] },
        { term: "No Theft", arabic: "عدم السرقة", meaning: { en: "Abstaining from stealing", ur: "چوری سے باز رہنا" }, ayahs: [12] },
        { term: "No Adultery", arabic: "عدم الزنا", meaning: { en: "No sexual immorality", ur: "بدکاری سے پرہیز" }, ayahs: [12] },
        { term: "No Infanticide", arabic: "عدم قتل الأولاد", meaning: { en: "Not killing children", ur: "اولاد کو قتل نہ کرنا" }, ayahs: [12] },
        { term: "No Slander", arabic: "عدم البهتان", meaning: { en: "No false accusations", ur: "جھوٹے الزامات نہ لگانا" }, ayahs: [12] },
        { term: "Obedience in Right", arabic: "الطاعة في المعروف", meaning: { en: "Obeying Prophet in good", ur: "نیک کاموں میں نبی ﷺ کی اطاعت" }, ayahs: [12] }
      ]
    }
  },

  relationships: [
    { from: "Enemy Alliance", to: "Divine Prohibition", type: "ruling", description: { en: "Allying with enemies of Allah forbidden", ur: "اللہ کے دشمنوں سے دوستی حرام ہے" } },
    { from: "Abraham's Model", to: "Current Muslims", type: "example", description: { en: "Ibrahim's disavowal is our model", ur: "ابراہیم علیہ السلام کی براءت ہمارا نمونہ ہے" } },
    { from: "Non-Combatants", to: "Kindness Permitted", type: "allowance", description: { en: "Peaceful non-Muslims deserve fairness", ur: "امن پسند غیر مسلم انصاف کے مستحق ہیں" } },
    { from: "Combatants/Expellers", to: "Alliance Forbidden", type: "ruling", description: { en: "Fighting enemies cannot be befriended", ur: "لڑنے والے دشمنوں سے دوستی نہیں ہو سکتی" } },
    { from: "Emigrant Women", to: "Testing Required", type: "procedure", description: { en: "Women's faith must be examined", ur: "خواتین کے ایمان کا امتحان ضروری ہے" } },
    { from: "Believing Women", to: "Disbelieving Husbands", type: "separation", description: { en: "Marriage no longer valid", ur: "نکاح مزید قائم نہیں رہتا" } },
    { from: "Women's Pledge", to: "Prophet's Acceptance", type: "procedure", description: { en: "Accept their pledge after conditions", ur: "شرائط پوری کرنے کے بعد ان کی بیعت قبول کرو" } }
  ],

  thematicFlow: {
    title: { en: "From Loyalty Boundaries to Women's Rights", ur: "وفاداری کی حدود سے خواتین کے حقوق تک" },
    stages: [
      { name: "Prohibition of Secret Alliance", ayahs: [1], description: { en: "Don't secretly ally with enemies while claiming faith", ur: "ایمان کا دعویٰ کرتے ہوئے دشمنوں سے خفیہ دوستی مت کرو" } },
      { name: "Enemy's True Nature", ayahs: [2], description: { en: "They would be enemies if they gained power", ur: "اگر انہیں طاقت ملے تو وہ تمہارے دشمن ہوں" } },
      { name: "Day of Judgment Reality", ayahs: [3], description: { en: "Family ties won't help on Resurrection Day", ur: "قیامت کے دن خاندانی رشتے کام نہیں آئیں گے" } },
      { name: "Abraham's Example", ayahs: [4, 5, 6], description: { en: "Following Ibrahim's clear disavowal from polytheism", ur: "ابراہیم علیہ السلام کی شرک سے واضح براءت کی پیروی" } },
      { name: "Hope for Reconciliation", ayahs: [7], description: { en: "Allah may bring future affection", ur: "اللہ مستقبل میں محبت پیدا کر سکتا ہے" } },
      { name: "Nuanced Relations", ayahs: [8, 9], description: { en: "Kindness to non-combatants; no alliance with fighters", ur: "غیر جنگجوؤں سے حسنِ سلوک؛ لڑنے والوں سے دوستی نہیں" } },
      { name: "Emigrant Women", ayahs: [10, 11], description: { en: "Testing believing women; marriage and compensation rules", ur: "مومن خواتین کا امتحان؛ نکاح اور معاوضے کے اصول" } },
      { name: "Women's Pledge", ayahs: [12], description: { en: "Six conditions for women's allegiance", ur: "خواتین کی بیعت کی چھ شرائط" } },
      { name: "Final Warning", ayahs: [13], description: { en: "Don't ally with those under Allah's wrath", ur: "اللہ کے غضب والوں سے دوستی نہ کرو" } }
    ]
  },

  uniqueInsight: {
    title: { en: "The Distinction Between Combatants and Non-Combatants (الفرق بين المحاربين وغيرهم)", ur: "جنگجوؤں اور غیر جنگجوؤں میں فرق (الفرق بين المحاربين وغيرهم)" },
    insight: {
      en: "This surah makes a crucial distinction often overlooked: verses 8-9 clearly differentiate between non-Muslims who fought Muslims and expelled them (alliance forbidden) versus those who did neither (kindness and justice commanded). The word 'birr' (البِرّ) in verse 8—the same word used for righteousness toward parents—is used for treating peaceful non-Muslims, showing Islam commands not mere tolerance but active kindness. This nuance demolishes the false notion that Islam requires hostility toward all non-Muslims.",
      ur: "یہ سورت ایک اہم فرق بیان کرتی ہے جسے اکثر نظرانداز کیا جاتا ہے: آیات 8-9 واضح طور پر ان غیر مسلمین میں فرق کرتی ہیں جنہوں نے مسلمانوں سے لڑائی کی اور نکالا (ان سے دوستی حرام) بمقابلہ ان کے جنہوں نے ایسا نہیں کیا (ان سے حسنِ سلوک اور انصاف کا حکم)۔ آیت 8 میں لفظ 'بِرّ' (البِرّ)—وہی لفظ جو والدین سے نیکی کے لیے استعمال ہوتا ہے—امن پسند غیر مسلمین کے ساتھ سلوک کے لیے استعمال ہوا، جو ظاہر کرتا ہے کہ اسلام محض برداشت نہیں بلکہ فعال حسنِ سلوک کا حکم دیتا ہے۔ یہ باریکی اس غلط تصور کو مسترد کرتی ہے کہ اسلام تمام غیر مسلمین سے دشمنی کا تقاضا کرتا ہے۔"
    },
    arabicTerm: "لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ",
    rootMeaning: { en: "ب-ر-ر (righteousness, kindness) - same root as birr toward parents", ur: "ب-ر-ر (نیکی، حسنِ سلوک) - وہی جڑ جو والدین سے نیکی کے لیے ہے" },
    keyAyah: 8
  },

  historicalContext: {
    revelationPeriod: { en: "Before or around the Conquest of Makkah (6-8 AH)", ur: "فتحِ مکہ سے پہلے یا اس کے قریب (6-8 ہجری)" },
    occasion: { en: "Hatib ibn Abi Balta'a sent a letter to Quraysh warning them of the Muslim army's advance. He did this to protect his family still in Makkah, not from doubt in Islam. The surah addresses this and similar situations.", ur: "حاطب بن ابی بلتعہ نے قریش کو خط بھیجا جس میں مسلمان لشکر کی پیشقدمی کی خبر دی۔ انہوں نے یہ مکہ میں اپنے خاندان کی حفاظت کے لیے کیا، اسلام میں شک کی وجہ سے نہیں۔ سورت اس اور اسی طرح کے معاملات کو بیان کرتی ہے۔" },
    note: { en: "The surah gets its name from verse 10's instruction to examine (امتحان) believing women who emigrated. The Treaty of Hudaybiyyah required returning emigrants, but when believing women came, this verse exempted them—they should be tested and not returned to disbelieving husbands.", ur: "سورت کا نام آیت 10 کی ہدایت سے ہے جس میں ہجرت کرنے والی مومن خواتین کا امتحان (امتحان) لینے کا حکم ہے۔ صلح حدیبیہ میں مہاجرین کو واپس بھیجنے کی شرط تھی، لیکن جب مومن عورتیں آئیں تو اس آیت نے انہیں مستثنیٰ کیا—ان کا امتحان لیا جائے اور کافر شوہروں کو واپس نہ کیا جائے۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Direct Address", description: { en: "Four 'O you who believe' addresses", ur: "چار مرتبہ 'اے ایمان والو' کی پکار" }, ayahs: [1, 10, 12, 13] },
      { name: "Abraham's Prayer", description: { en: "Extended supplication quoted", ur: "تفصیلی دعا نقل کی گئی" }, example: { en: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً", ur: "اے ہمارے رب! ہمیں فتنے کا سبب نہ بنا" }, ayah: 5 },
      { name: "Legal Precision", description: { en: "Detailed marriage/compensation rules", ur: "نکاح اور معاوضے کے تفصیلی احکام" }, ayahs: [10, 11] },
      { name: "Six-fold Pledge", description: { en: "Structured conditions for women's allegiance", ur: "خواتین کی بیعت کے منظم چھ شرائط" }, ayah: 12 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 9, name: "At-Tawbah", relationship: { en: "Both address relations with non-Muslims", ur: "دونوں غیر مسلمین سے تعلقات بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 48, name: "Al-Fath", relationship: { en: "Both related to Treaty of Hudaybiyyah period", ur: "دونوں صلح حدیبیہ کے دور سے متعلق ہیں" }, type: "historical_parallel" },
      { surah: 61, name: "As-Saff", relationship: { en: "Following surah, also Medinan with community guidance", ur: "اگلی سورت، یہ بھی مدنی ہے اور معاشرتی رہنمائی پر مشتمل" }, type: "sequential_relationship" }
    ]
  }
};

export default ONTOLOGY;
