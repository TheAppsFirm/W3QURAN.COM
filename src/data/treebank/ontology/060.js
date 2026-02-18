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
  mainTheme: "Guidelines for Relations with Non-Muslims and Testing of Emigrants",

  categories: {
    loyaltyBoundaries: {
      name: "Loyalty Boundaries",
      nameAr: "حدود الولاء",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "Prohibition of Enemy Alliance", arabic: "النهي عن موالاة الأعداء", meaning: "Don't ally with Allah's enemies", ayahs: [1] },
        { term: "Extending Affection to Enemies", arabic: "إلقاء المودة", meaning: "Showing love to disbelievers", ayahs: [1] },
        { term: "Kinship vs Faith", arabic: "الأرحام والإيمان", meaning: "Family ties don't override faith", ayahs: [3] }
      ]
    },
    abrahamicModel: {
      name: "Abraham's Example",
      nameAr: "أسوة إبراهيم",
      color: '#8B5CF6',
      icon: 'Star',
      concepts: [
        { term: "Beautiful Example", arabic: "أسوة حسنة", meaning: "Model of disassociation from polytheism", ayahs: [4, 6] },
        { term: "Declaration of Disavowal", arabic: "إعلان البراءة", meaning: "Clear separation from idol worship", ayahs: [4] },
        { term: "Enmity Until Belief", arabic: "العداوة حتى الإيمان", meaning: "Opposition lasting until they believe", ayahs: [4] }
      ]
    },
    nuancedRelations: {
      name: "Nuanced Relations",
      nameAr: "العلاقات المتمايزة",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Non-Combatant Kindness", arabic: "البر لغير المحاربين", meaning: "Being kind to peaceful non-Muslims", ayahs: [8] },
        { term: "Justice to All", arabic: "القسط للجميع", meaning: "Acting justly toward everyone", ayahs: [8] },
        { term: "Prohibition of Fighting Allies", arabic: "تحريم موالاة المحاربين", meaning: "No alliance with fighters/expellers", ayahs: [9] },
        { term: "Future Reconciliation", arabic: "المودة المستقبلية", meaning: "Allah may bring love between enemies", ayahs: [7] }
      ]
    },
    emigrantWomen: {
      name: "Examining Emigrant Women",
      nameAr: "امتحان المهاجرات",
      color: '#3B82F6',
      icon: 'Search',
      concepts: [
        { term: "Testing Believing Women", arabic: "امتحان المؤمنات", meaning: "Examining women emigrating from Makkah", ayahs: [10] },
        { term: "Allah Knows Faith", arabic: "علم الله بالإيمان", meaning: "Only Allah knows true belief", ayahs: [10] },
        { term: "Marriage Dissolution", arabic: "فسخ النكاح", meaning: "Believing women not lawful for disbelievers", ayahs: [10] },
        { term: "Compensation for Dowry", arabic: "رد المهر", meaning: "Returning what spouses spent", ayahs: [10, 11] }
      ]
    },
    womensPledge: {
      name: "Women's Pledge of Allegiance",
      nameAr: "بيعة النساء",
      color: '#06B6D4',
      icon: 'Heart',
      concepts: [
        { term: "No Shirk", arabic: "عدم الشرك", meaning: "No associating partners with Allah", ayahs: [12] },
        { term: "No Theft", arabic: "عدم السرقة", meaning: "Abstaining from stealing", ayahs: [12] },
        { term: "No Adultery", arabic: "عدم الزنا", meaning: "No sexual immorality", ayahs: [12] },
        { term: "No Infanticide", arabic: "عدم قتل الأولاد", meaning: "Not killing children", ayahs: [12] },
        { term: "No Slander", arabic: "عدم البهتان", meaning: "No false accusations", ayahs: [12] },
        { term: "Obedience in Right", arabic: "الطاعة في المعروف", meaning: "Obeying Prophet in good", ayahs: [12] }
      ]
    }
  },

  relationships: [
    { from: "Enemy Alliance", to: "Divine Prohibition", type: "ruling", description: "Allying with enemies of Allah forbidden" },
    { from: "Abraham's Model", to: "Current Muslims", type: "example", description: "Ibrahim's disavowal is our model" },
    { from: "Non-Combatants", to: "Kindness Permitted", type: "allowance", description: "Peaceful non-Muslims deserve fairness" },
    { from: "Combatants/Expellers", to: "Alliance Forbidden", type: "ruling", description: "Fighting enemies cannot be befriended" },
    { from: "Emigrant Women", to: "Testing Required", type: "procedure", description: "Women's faith must be examined" },
    { from: "Believing Women", to: "Disbelieving Husbands", type: "separation", description: "Marriage no longer valid" },
    { from: "Women's Pledge", to: "Prophet's Acceptance", type: "procedure", description: "Accept their pledge after conditions" }
  ],

  thematicFlow: {
    title: "From Loyalty Boundaries to Women's Rights",
    stages: [
      { name: "Prohibition of Secret Alliance", ayahs: [1], description: "Don't secretly ally with enemies while claiming faith" },
      { name: "Enemy's True Nature", ayahs: [2], description: "They would be enemies if they gained power" },
      { name: "Day of Judgment Reality", ayahs: [3], description: "Family ties won't help on Resurrection Day" },
      { name: "Abraham's Example", ayahs: [4, 5, 6], description: "Following Ibrahim's clear disavowal from polytheism" },
      { name: "Hope for Reconciliation", ayahs: [7], description: "Allah may bring future affection" },
      { name: "Nuanced Relations", ayahs: [8, 9], description: "Kindness to non-combatants; no alliance with fighters" },
      { name: "Emigrant Women", ayahs: [10, 11], description: "Testing believing women; marriage and compensation rules" },
      { name: "Women's Pledge", ayahs: [12], description: "Six conditions for women's allegiance" },
      { name: "Final Warning", ayahs: [13], description: "Don't ally with those under Allah's wrath" }
    ]
  },

  uniqueInsight: {
    title: "The Distinction Between Combatants and Non-Combatants (الفرق بين المحاربين وغيرهم)",
    insight: "This surah makes a crucial distinction often overlooked: verses 8-9 clearly differentiate between non-Muslims who fought Muslims and expelled them (alliance forbidden) versus those who did neither (kindness and justice commanded). The word 'birr' (البِرّ) in verse 8—the same word used for righteousness toward parents—is used for treating peaceful non-Muslims, showing Islam commands not mere tolerance but active kindness. This nuance demolishes the false notion that Islam requires hostility toward all non-Muslims.",
    arabicTerm: "لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ",
    rootMeaning: "ب-ر-ر (righteousness, kindness) - same root as birr toward parents",
    keyAyah: 8
  },

  historicalContext: {
    revelationPeriod: "Before or around the Conquest of Makkah (6-8 AH)",
    occasion: "Hatib ibn Abi Balta'a sent a letter to Quraysh warning them of the Muslim army's advance. He did this to protect his family still in Makkah, not from doubt in Islam. The surah addresses this and similar situations.",
    note: "The surah gets its name from verse 10's instruction to examine (امتحان) believing women who emigrated. The Treaty of Hudaybiyyah required returning emigrants, but when believing women came, this verse exempted them—they should be tested and not returned to disbelieving husbands."
  },

  linguisticFeatures: {
    features: [
      { name: "Direct Address", description: "Four 'O you who believe' addresses", ayahs: [1, 10, 12, 13] },
      { name: "Abraham's Prayer", description: "Extended supplication quoted", example: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً", ayah: 5 },
      { name: "Legal Precision", description: "Detailed marriage/compensation rules", ayahs: [10, 11] },
      { name: "Six-fold Pledge", description: "Structured conditions for women's allegiance", ayah: 12 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 9, name: "At-Tawbah", relationship: "Both address relations with non-Muslims", type: "thematic_parallel" },
      { surah: 48, name: "Al-Fath", relationship: "Both related to Treaty of Hudaybiyyah period", type: "historical_parallel" },
      { surah: 61, name: "As-Saff", relationship: "Following surah, also Medinan with community guidance", type: "sequential_relationship" }
    ]
  }
};

export default ONTOLOGY;
