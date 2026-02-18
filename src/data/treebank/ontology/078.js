/**
 * Surah An-Naba' (78) - Ontology of Quranic Concepts
 * The News
 * Theme: The Great News (resurrection), creation signs, Hell and Paradise descriptions
 */

export const ONTOLOGY = {
  surahId: 78,
  surahName: "An-Naba'",
  surahNameArabic: "النبأ",
  revelationType: "Makki",
  totalAyahs: 40,

  categories: {
    greatNews: {
      name: "The Great News",
      nameArabic: "النبأ العظيم",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "عَمَّ يَتَسَاءَلُونَ", meaning: "About what do they question?", explanation: "Rhetorical opening about resurrection debates", verseRef: "78:1" },
        { term: "النَّبَإِ الْعَظِيمِ", meaning: "The great news", explanation: "Resurrection - the news they disputed", verseRef: "78:2" },
        { term: "مُخْتَلِفُونَ", meaning: "They differ", explanation: "People divided on resurrection's reality", verseRef: "78:3" },
        { term: "كَلَّا سَيَعْلَمُونَ", meaning: "No! They will come to know", explanation: "Double repetition for stern warning", verseRef: "78:4-5" }
      ]
    },

    creationSigns: {
      name: "Signs of Divine Creation",
      nameArabic: "آيات الخلق الإلهي",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "الْأَرْضَ مِهَادًا", meaning: "Earth as a resting place", explanation: "Earth spread as bed/cradle", verseRef: "78:6" },
        { term: "الْجِبَالَ أَوْتَادًا", meaning: "Mountains as stakes", explanation: "Mountains stabilize earth like tent pegs", verseRef: "78:7" },
        { term: "أَزْوَاجًا", meaning: "In pairs", explanation: "All creation in male/female pairs", verseRef: "78:8" },
        { term: "نَوْمَكُمْ سُبَاتًا", meaning: "Sleep as rest", explanation: "Sleep resembles death - daily reminder", verseRef: "78:9" },
        { term: "اللَّيْلَ لِبَاسًا", meaning: "Night as covering", explanation: "Darkness clothes the world", verseRef: "78:10" },
        { term: "النَّهَارَ مَعَاشًا", meaning: "Day for livelihood", explanation: "Day enables work and earning", verseRef: "78:11" },
        { term: "سَبْعًا شِدَادًا", meaning: "Seven strong (heavens)", explanation: "Seven firm heavens built above", verseRef: "78:12" },
        { term: "سِرَاجًا وَهَّاجًا", meaning: "Blazing lamp", explanation: "Sun as burning, radiant lamp", verseRef: "78:13" }
      ]
    },

    rainProvision: {
      name: "Rain and Provision",
      nameArabic: "المطر والرزق",
      color: '#22C55E',
      icon: 'Sun',
      concepts: [
        { term: "الْمُعْصِرَاتِ", meaning: "Rain-laden clouds", explanation: "Clouds ready to squeeze out water", verseRef: "78:14" },
        { term: "مَاءً ثَجَّاجًا", meaning: "Water pouring abundantly", explanation: "Heavy, continuous rainfall", verseRef: "78:14" },
        { term: "حَبًّا وَنَبَاتًا", meaning: "Grain and vegetation", explanation: "Rain produces food crops", verseRef: "78:15" },
        { term: "جَنَّاتٍ أَلْفَافًا", meaning: "Gardens dense", explanation: "Lush, intertwined gardens", verseRef: "78:16" }
      ]
    },

    dayOfSeparation: {
      name: "Day of Separation",
      nameArabic: "يوم الفصل",
      color: '#8B5CF6',
      icon: 'Scale',
      concepts: [
        { term: "يَوْمَ الْفَصْلِ... مِيقَاتًا", meaning: "Day of Judgment is appointed", explanation: "Fixed, unavoidable time", verseRef: "78:17" },
        { term: "يُنفَخُ فِي الصُّورِ", meaning: "Trumpet is blown", explanation: "Signal for resurrection", verseRef: "78:18" },
        { term: "فَتَأْتُونَ أَفْوَاجًا", meaning: "Coming in crowds", explanation: "All humanity arrives in groups", verseRef: "78:18" },
        { term: "فُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا", meaning: "Sky opened as gates", explanation: "Heaven splits into doorways", verseRef: "78:19" },
        { term: "سُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا", meaning: "Mountains become mirage", explanation: "Solid mountains dissolve like illusion", verseRef: "78:20" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "جَهَنَّمَ... مِرْصَادًا", meaning: "Hell as ambush", explanation: "Hell lies in wait for transgressors", verseRef: "78:21" },
        { term: "لِّلطَّاغِينَ مَآبًا", meaning: "For transgressors a refuge", explanation: "Their final destination/return", verseRef: "78:22" },
        { term: "لَّابِثِينَ فِيهَا أَحْقَابًا", meaning: "Remaining therein for ages", explanation: "Unending periods of punishment", verseRef: "78:23" },
        { term: "لَّا... بَرْدًا وَلَا شَرَابًا", meaning: "No coolness, no drink", explanation: "No relief from heat or thirst", verseRef: "78:24" },
        { term: "حَمِيمًا وَغَسَّاقًا", meaning: "Scalding water and purulence", explanation: "Only boiling water and pus to drink", verseRef: "78:25" },
        { term: "جَزَاءً وِفَاقًا", meaning: "Fitting recompense", explanation: "Punishment matches their crimes", verseRef: "78:26" }
      ]
    },

    reasonsForPunishment: {
      name: "Reasons for Punishment",
      nameArabic: "أسباب العذاب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَا يَرْجُونَ حِسَابًا", meaning: "Not expecting accountability", explanation: "Denied any reckoning would come", verseRef: "78:27" },
        { term: "كَذَّبُوا بِآيَاتِنَا كِذَّابًا", meaning: "Denied Our signs completely", explanation: "Persistent, emphatic rejection", verseRef: "78:28" },
        { term: "كُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا", meaning: "Everything enumerated in writing", explanation: "All deeds precisely recorded", verseRef: "78:29" },
        { term: "فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا", meaning: "Only increase in punishment", explanation: "No relief, only intensification", verseRef: "78:30" }
      ]
    },

    paradiseDescription: {
      name: "Description of Paradise",
      nameArabic: "وصف الجنة",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "لِلْمُتَّقِينَ مَفَازًا", meaning: "For righteous - success", explanation: "Ultimate triumph for God-conscious", verseRef: "78:31" },
        { term: "حَدَائِقَ وَأَعْنَابًا", meaning: "Gardens and grapevines", explanation: "Orchards of fruit", verseRef: "78:32" },
        { term: "كَوَاعِبَ أَتْرَابًا", meaning: "Companions of equal age", explanation: "Perfect, matching companions", verseRef: "78:33" },
        { term: "كَأْسًا دِهَاقًا", meaning: "Cup full to brim", explanation: "Overflowing drinks of Paradise", verseRef: "78:34" },
        { term: "لَّا... لَغْوًا وَلَا كِذَّابًا", meaning: "No idle talk or lying", explanation: "Pure, truthful speech only", verseRef: "78:35" },
        { term: "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا", meaning: "Reward from Lord, gift calculated", explanation: "Generous, measured gift from Allah", verseRef: "78:36" }
      ]
    },

    divineAuthority: {
      name: "Divine Authority on That Day",
      nameArabic: "السلطة الإلهية يوم القيامة",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ... الرَّحْمَـٰنِ", meaning: "Lord of heavens, earth - the Merciful", explanation: "Allah's absolute sovereignty", verseRef: "78:37" },
        { term: "لَا يَمْلِكُونَ مِنْهُ خِطَابًا", meaning: "None possess speech from Him", explanation: "No intercession without permission", verseRef: "78:37" },
        { term: "يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا", meaning: "Spirit and angels stand in rows", explanation: "Jibreel and angels in formation", verseRef: "78:38" },
        { term: "لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ", meaning: "None speak except by permission", explanation: "Total silence except those permitted", verseRef: "78:38" },
        { term: "ذَٰلِكَ الْيَوْمُ الْحَقُّ", meaning: "That is the True Day", explanation: "The Day of ultimate reality", verseRef: "78:39" }
      ]
    },

    finalWarning: {
      name: "Final Warning",
      nameArabic: "التحذير الأخير",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا", meaning: "Whoever wills may take a path to Lord", explanation: "Choice and free will emphasized", verseRef: "78:39" },
        { term: "أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا", meaning: "We warned you of near punishment", explanation: "Judgment closer than they think", verseRef: "78:40" },
        { term: "يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ", meaning: "Man sees what his hands sent forth", explanation: "Confronting one's own deeds", verseRef: "78:40" },
        { term: "يَا لَيْتَنِي كُنتُ تُرَابًا", meaning: "Would that I were dust!", explanation: "Disbeliever's ultimate regret", verseRef: "78:40" }
      ]
    }
  },

  relationships: [
    { from: "النبأ العظيم", to: "يوم الفصل", type: "identity", description: "The Great News IS the Day of Judgment" },
    { from: "الأرض مهادا", to: "الجبال أوتادا", type: "complementary", description: "Earth spread + mountains anchoring it" },
    { from: "الليل لباسا", to: "النهار معاشا", type: "contrast", description: "Night for rest, day for work - perfect balance" },
    { from: "لا يرجون حسابا", to: "جهنم مرصادا", type: "causation", description: "Denying accountability leads to Hell" },
    { from: "للمتقين مفازا", to: "للطاغين مآبا", type: "contrast", description: "Success vs. refuge - opposite destinations" },
    { from: "كل شيء أحصيناه", to: "ينظر المرء ما قدمت يداه", type: "consequence", description: "Everything recorded → confronting one's deeds" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Question", verses: "78:1-5", description: "About what do they ask? The Great News they dispute" },
      { stage: 2, theme: "Creation Proofs", verses: "78:6-16", description: "Earth, mountains, pairs, night/day, heavens, sun, rain, gardens" },
      { stage: 3, theme: "Day of Separation", verses: "78:17-20", description: "Appointed time, trumpet, crowds, sky and mountains transform" },
      { stage: 4, theme: "Hell's Reality", verses: "78:21-30", description: "Hell as ambush, ages of torment, no relief, increasing punishment" },
      { stage: 5, theme: "Paradise's Reality", verses: "78:31-36", description: "Gardens, companions, pure drinks, divine gift" },
      { stage: 6, theme: "Divine Majesty", verses: "78:37-40", description: "Allah's authority, angels in rows, final warning, disbeliever's regret" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Believe in resurrection", how: "The 'Great News' is not myth but coming reality", verse: "78:1-5" },
      { principle: "See creation as proof", how: "Every natural phenomenon proves Allah's power to resurrect", verse: "78:6-16" },
      { principle: "Expect accountability", how: "Everything is recorded - live accordingly", verse: "78:27-29" },
      { principle: "Fear Hell's reality", how: "Not metaphor but actual torment for transgressors", verse: "78:21-30" },
      { principle: "Aspire to Paradise", how: "Muttaqeen receive mafaaz - ultimate success through taqwa", verse: "78:31-36" },
      { principle: "Choose now", how: "Path to Allah is open - make the choice before it's too late", verse: "78:39" }
    ]
  },

  uniqueInsight: {
    title: "The Disbeliever's Final Wish",
    insight: "The surah's most powerful verse is its last: 'Would that I were dust!' (يَا لَيْتَنِي كُنتُ تُرَابًا). When disbelievers see their deeds and impending punishment, they wish for annihilation - to be dirt with no consciousness. But the Quran elsewhere (23:99-100) shows even death won't help; there's no escape. This wish contrasts with Adam's creation FROM dust - the very origin they scorn becomes their desperate desire. The irony: they mocked resurrection of dusty bones, now they'd give anything to BE dust. The surah's structure moves from questioning the Great News → proving it through creation → showing both destinations → this final, devastating regret. Their mockery becomes their ultimate torment."
  },

  linguisticFeatures: {
    features: [
      { feature: "عَمَّ contraction", example: "عَن + مَا = عَمَّ", effect: "Sharp, emphatic question opening" },
      { feature: "كَلَّا repetition", example: "Verses 4-5", effect: "Stern refutation + warning intensification" },
      { feature: "Ten creation signs", example: "78:6-16", effect: "Comprehensive proof of divine power" },
      { feature: "مِفعال pattern", example: "مِرصاد (ambush)", effect: "Instrument noun - Hell IS an ambush" },
      { feature: "أَحْقَاب", example: "Ages upon ages", effect: "Plural of plural indicating endless duration" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "78:7", topic: "Mountains as stabilizers", note: "أَوتَاد (pegs/stakes) - mountains have deep roots stabilizing tectonic plates" },
      { verse: "78:13", topic: "Sun as burning lamp", note: "سِراج وَهّاج - lamp (combustion) not just light source, indicating solar fusion" },
      { verse: "78:14", topic: "Rain process", note: "مُعصِرات (squeezing clouds) - water vapor compressed until rain releases" }
    ]
  }
};

export default ONTOLOGY;
