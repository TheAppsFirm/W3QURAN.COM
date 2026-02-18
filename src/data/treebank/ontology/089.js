/**
 * Surah Al-Fajr (89) - Ontology of Quranic Concepts
 * The Dawn
 * Theme: Destroyed nations, tests of wealth, Day of Judgment, the satisfied soul
 */

export const ONTOLOGY = {
  surahId: 89,
  surahName: "Al-Fajr",
  surahNameArabic: "الفجر",
  revelationType: "Makki",
  totalAyahs: 30,

  categories: {
    cosmicOaths: {
      name: "The Sacred Oaths",
      nameArabic: "القسم الكوني",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "الْفَجْر", meaning: "The Dawn", explanation: "Dawn breaking darkness - truth emerging, new beginnings", verseRef: "89:1" },
        { term: "لَيَالٍ عَشْرٍ", meaning: "Ten Nights", explanation: "First ten of Dhul-Hijjah - most sacred nights of the year", verseRef: "89:2" },
        { term: "الشَّفْعِ وَالْوَتْرِ", meaning: "The Even and Odd", explanation: "Days of Hajj, or creation's duality, or Allah (The One - Watr)", verseRef: "89:3" },
        { term: "ذِي حِجْرٍ", meaning: "One of understanding", explanation: "Hijr = intellect that restrains from foolishness. These oaths are for the wise", verseRef: "89:5" }
      ]
    },

    destroyedNations: {
      name: "Lessons from Destroyed Nations",
      nameArabic: "عبرة الأمم الهالكة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "عَاد - إِرَمَ ذَاتِ الْعِمَادِ", meaning: "Aad - Iram of lofty pillars", explanation: "Ancient Arabian civilization with magnificent architecture, destroyed for arrogance", verseRef: "89:6-8" },
        { term: "ثَمُود - جَابُوا الصَّخْرَ", meaning: "Thamud who carved rocks", explanation: "Carved homes in mountains (Madain Saleh), destroyed for rejecting Salih", verseRef: "89:9" },
        { term: "فِرْعَوْنَ ذِي الْأَوْتَادِ", meaning: "Pharaoh of stakes", explanation: "Pyramids, torture stakes, or military might - epitome of tyranny", verseRef: "89:10" },
        { term: "طَغَوْا... الْفَسَادَ", meaning: "Transgressed and spread corruption", explanation: "Common sin: transgression (tughyan) leading to corruption (fasaad)", verseRef: "89:11-12" },
        { term: "سَوْطَ عَذَابٍ", meaning: "Scourge of punishment", explanation: "Punishment poured like rain, striking like a whip - sudden, devastating", verseRef: "89:13" },
        { term: "رَبَّكَ لَبِالْمِرْصَادِ", meaning: "Your Lord is in observation", explanation: "Allah watches from a 'mirsaad' (watchtower) - nothing escapes His justice", verseRef: "89:14" }
      ]
    },

    humanNatureAndWealth: {
      name: "Human Response to Tests",
      nameArabic: "طبيعة الإنسان والابتلاء",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "أَكْرَمَهُ وَنَعَّمَهُ → رَبِّي أَكْرَمَنِ", meaning: "When honored, says 'Lord honored me'", explanation: "Wrong conclusion: assumes wealth = divine approval", verseRef: "89:15" },
        { term: "قَدَرَ عَلَيْهِ رِزْقَهُ → رَبِّي أَهَانَنِ", meaning: "When restricted, says 'Lord humiliated me'", explanation: "Wrong conclusion: assumes poverty = divine rejection", verseRef: "89:16" },
        { term: "كَلَّا", meaning: "No! (Rejection)", explanation: "Allah rejects both conclusions. Wealth/poverty are tests, not judgments", verseRef: "89:17" }
      ]
    },

    socialFailures: {
      name: "Social Sins",
      nameArabic: "الذنوب الاجتماعية",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَّا تُكْرِمُونَ الْيَتِيمَ", meaning: "You don't honor orphans", explanation: "Neglecting the most vulnerable - sign of spiritual emptiness", verseRef: "89:17" },
        { term: "لَا تَحَاضُّونَ عَلَىٰ طَعَامِ الْمِسْكِينِ", meaning: "Don't encourage feeding the poor", explanation: "Not just feeding but ENCOURAGING others to feed - social responsibility", verseRef: "89:18" },
        { term: "تَأْكُلُونَ التُّرَاثَ أَكْلًا لَّمًّا", meaning: "Devour inheritance greedily", explanation: "Lamm = gathering everything. Taking others' shares, especially orphans'", verseRef: "89:19" },
        { term: "تُحِبُّونَ الْمَالَ حُبًّا جَمًّا", meaning: "Love wealth excessively", explanation: "Jamm = excessive. Wealth-worship that blinds to responsibility", verseRef: "89:20" }
      ]
    },

    dayOfJudgment: {
      name: "The Day of Reckoning",
      nameArabic: "يوم الحساب",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "دُكَّتِ الْأَرْضُ دَكًّا دَكًّا", meaning: "Earth pounded flat", explanation: "Repetition = complete leveling. Mountains, buildings - all crushed", verseRef: "89:21" },
        { term: "جَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا", meaning: "Lord comes with angels row upon row", explanation: "Divine arrival with angelic armies. Awe-inspiring scene of Judgment", verseRef: "89:22" },
        { term: "جِيءَ بِجَهَنَّمَ", meaning: "Hell is brought", explanation: "Hell physically brought, with 70,000 chains per hadith", verseRef: "89:23" },
        { term: "يَتَذَكَّرُ... وَأَنَّىٰ لَهُ الذِّكْرَىٰ", meaning: "Remembers, but how will it benefit?", explanation: "Too late to remember. Regret without remedy", verseRef: "89:23" },
        { term: "يَا لَيْتَنِي قَدَّمْتُ لِحَيَاتِي", meaning: "I wish I had sent ahead for my life", explanation: "Real 'life' is Hereafter. The regret of the unprepared", verseRef: "89:24" }
      ]
    },

    satisfiedSoul: {
      name: "The Tranquil Soul",
      nameArabic: "النفس المطمئنة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "النَّفْسُ الْمُطْمَئِنَّةُ", meaning: "The satisfied/tranquil soul", explanation: "Peak spiritual state. At peace with Allah's decree, no anxiety or doubt", verseRef: "89:27" },
        { term: "رَاضِيَةً مَّرْضِيَّةً", meaning: "Pleased and pleasing", explanation: "Mutual pleasure: soul pleased with Allah, Allah pleased with soul", verseRef: "89:28" },
        { term: "فَادْخُلِي فِي عِبَادِي", meaning: "Enter among My servants", explanation: "Join the company of the righteous - ultimate honor", verseRef: "89:29" },
        { term: "وَادْخُلِي جَنَّتِي", meaning: "Enter My Paradise", explanation: "'Jannatee' - MY Paradise. Personal divine invitation", verseRef: "89:30" }
      ]
    }
  },

  relationships: [
    { from: "عاد، ثمود، فرعون", to: "لبالمرصاد", type: "consequence", description: "Allah watched and destroyed them" },
    { from: "أكرمه/أهانه", to: "كلا", type: "correction", description: "Human misreading of tests is rejected" },
    { from: "لا تكرمون اليتيم", to: "حب المال", type: "causation", description: "Wealth-love causes neglect of vulnerable" },
    { from: "دكت الأرض", to: "يا ليتني", type: "sequence", description: "Judgment leads to regret" },
    { from: "المطمئنة", to: "راضية مرضية", type: "result", description: "Tranquility leads to mutual pleasure" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Sacred Oaths", verses: "89:1-5", description: "Dawn, ten nights, even/odd - oaths for the wise" },
      { stage: 2, theme: "Destroyed Nations", verses: "89:6-14", description: "Aad, Thamud, Pharaoh - transgressed, destroyed" },
      { stage: 3, theme: "Human Failure", verses: "89:15-20", description: "Misreading tests, social sins, wealth-love" },
      { stage: 4, theme: "Day of Judgment", verses: "89:21-26", description: "Earth leveled, Hell brought, regret" },
      { stage: 5, theme: "The Blessed Soul", verses: "89:27-30", description: "Satisfied soul invited to Paradise" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Learn from history", how: "Study Aad, Thamud, Pharaoh - power doesn't protect from Allah", verse: "89:6-14" },
      { principle: "Reframe wealth/poverty", how: "Both are tests, not judgments. Don't assume divine approval or rejection", verse: "89:15-16" },
      { principle: "Honor orphans", how: "Active honor (ikram), not just avoiding harm", verse: "89:17" },
      { principle: "Encourage feeding poor", how: "Not just give, but urge others to give (tahaaddu)", verse: "89:18" },
      { principle: "Purify wealth relationships", how: "Don't hoard, don't love excessively (jamm), don't take others' shares", verse: "89:19-20" },
      { principle: "Seek nafs mutma'innah", how: "Work toward soul tranquility through dhikr, tawakkul, contentment", verse: "89:27" }
    ]
  },

  uniqueInsight: {
    title: "From Destruction to Peace",
    insight: "This surah moves from cosmic terror to intimate invitation. It begins with sacred time (fajr, ten nights), moves to destroyed civilizations (Aad, Thamud, Pharaoh), exposes human spiritual blindness (misreading wealth/poverty), catalogs social sins, describes Judgment's horror, then... suddenly shifts tone entirely. After all the warning, verses 27-30 become tender, personal: 'O satisfied soul, return to your Lord, pleased and pleasing...' The contrast is striking: from 'sawt 'adhab' (whip of punishment) to 'jannatee' (MY Paradise). The message: the path from destruction to peace is through the nafs mutma'innah - the soul at rest with Allah regardless of circumstances."
  },

  linguisticFeatures: {
    features: [
      { feature: "Repetition for intensity", example: "دَكًّا دَكًّا، صَفًّا صَفًّا", effect: "Complete, utter action" },
      { feature: "Feminine address to soul", example: "ارْجِعِي، ادْخُلِي", effect: "Intimate, personal invitation" },
      { feature: "Mutual form: راضية مرضية", example: "Active (pleased) + Passive (pleasing)", effect: "Two-way relationship" },
      { feature: "Personal possessive: جَنَّتِي", example: "MY Paradise", effect: "Divine personal invitation" }
    ]
  }
};

export default ONTOLOGY;
