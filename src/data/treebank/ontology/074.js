/**
 * Surah Al-Muddaththir (74) - Ontology of Quranic Concepts
 * The Cloaked One
 * Theme: Early commands to Prophet, warning mission, 'Over it are 19', reasons for Hell
 */

export const ONTOLOGY = {
  surahId: 74,
  surahName: "Al-Muddaththir",
  surahNameArabic: "المدثر",
  revelationType: "Makki",
  totalAyahs: 56,

  categories: {
    propheticCommands: {
      name: "Early Commands to Prophet",
      nameArabic: "أوامر النبي الأولى",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "يَا أَيُّهَا الْمُدَّثِّرُ", meaning: "O you wrapped in garments", explanation: "First public mission command", verseRef: "74:1" },
        { term: "قُمْ فَأَنذِرْ", meaning: "Arise and warn", explanation: "Core prophetic mission: warning", verseRef: "74:2" },
        { term: "وَرَبَّكَ فَكَبِّرْ", meaning: "Your Lord glorify", explanation: "Declare Allah's greatness", verseRef: "74:3" },
        { term: "وَثِيَابَكَ فَطَهِّرْ", meaning: "Your garments purify", explanation: "Physical/spiritual purity", verseRef: "74:4" },
        { term: "وَالرُّجْزَ فَاهْجُرْ", meaning: "Uncleanliness/idols avoid", explanation: "Abandon impurity and idolatry", verseRef: "74:5" },
        { term: "وَلَا تَمْنُن تَسْتَكْثِرُ", meaning: "Don't give expecting more", explanation: "Give without worldly expectation", verseRef: "74:6" },
        { term: "وَلِرَبِّكَ فَاصْبِرْ", meaning: "For your Lord be patient", explanation: "Patient endurance for Allah", verseRef: "74:7" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "فَإِذَا نُقِرَ فِي النَّاقُورِ", meaning: "When Horn is blown", explanation: "Trumpet signals resurrection", verseRef: "74:8" },
        { term: "يَوْمٌ عَسِيرٌ... غَيْرُ يَسِيرٍ", meaning: "Difficult Day, not easy", explanation: "Severe for disbelievers", verseRef: "74:9-10" }
      ]
    },

    waleedIbnMugheera: {
      name: "The Obstinate Denier",
      nameArabic: "المعاند الكفور",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "ذَرْنِي وَمَنْ خَلَقْتُ وَحِيدًا", meaning: "Leave Me with whom I created alone", explanation: "Allah deals with Waleed personally", verseRef: "74:11" },
        { term: "مَالًا مَّمْدُودًا", meaning: "Extensive wealth", explanation: "Given abundant resources", verseRef: "74:12" },
        { term: "وَبَنِينَ شُهُودًا", meaning: "Sons present", explanation: "Many sons at his service", verseRef: "74:13" },
        { term: "وَمَهَّدتُّ لَهُ تَمْهِيدًا", meaning: "Made smooth for him", explanation: "Easy, comfortable life", verseRef: "74:14" },
        { term: "ثُمَّ يَطْمَعُ أَنْ أَزِيدَ", meaning: "Then he desires I increase", explanation: "Endless greed despite blessings", verseRef: "74:15" },
        { term: "إِنَّهُ كَانَ لِآيَاتِنَا عَنِيدًا", meaning: "He is obstinate to Our signs", explanation: "Willful rejection", verseRef: "74:16" }
      ]
    },

    waleedsDeliberation: {
      name: "The Denier's Process",
      nameArabic: "عملية إنكار الوليد",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "فَكَّرَ وَقَدَّرَ", meaning: "He thought and calculated", explanation: "Deliberate plotting", verseRef: "74:18" },
        { term: "فَقُتِلَ كَيْفَ قَدَّرَ", meaning: "Destroyed! How he calculated!", explanation: "Curse on his plotting", verseRef: "74:19-20" },
        { term: "ثُمَّ نَظَرَ", meaning: "Then he looked", explanation: "Observed people's reactions", verseRef: "74:21" },
        { term: "ثُمَّ عَبَسَ وَبَسَرَ", meaning: "Then he frowned and scowled", explanation: "Showed displeasure", verseRef: "74:22" },
        { term: "ثُمَّ أَدْبَرَ وَاسْتَكْبَرَ", meaning: "Then turned away arrogantly", explanation: "Rejected with pride", verseRef: "74:23" },
        { term: "إِنْ هَـٰذَا إِلَّا سِحْرٌ يُؤْثَرُ", meaning: "This is only magic learned", explanation: "Called Quran borrowed magic", verseRef: "74:24" },
        { term: "إِنْ هَـٰذَا إِلَّا قَوْلُ الْبَشَرِ", meaning: "This is only speech of man", explanation: "Denied divine origin", verseRef: "74:25" }
      ]
    },

    saqar: {
      name: "Description of Saqar (Hell)",
      nameArabic: "وصف سقر",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "سَأُصْلِيهِ سَقَرَ", meaning: "I will burn him in Saqar", explanation: "Saqar - name for Hell", verseRef: "74:26" },
        { term: "وَمَا أَدْرَاكَ مَا سَقَرُ", meaning: "What can make you know Saqar?", explanation: "Beyond human comprehension", verseRef: "74:27" },
        { term: "لَا تُبْقِي وَلَا تَذَرُ", meaning: "It spares not, leaves nothing", explanation: "Complete destruction", verseRef: "74:28" },
        { term: "لَوَّاحَةٌ لِّلْبَشَرِ", meaning: "Scorching for mankind", explanation: "Burns skin completely", verseRef: "74:29" }
      ]
    },

    nineteenAngels: {
      name: "The Nineteen Angels",
      nameArabic: "تسعة عشر ملكاً",
      color: '#06B6D4',
      icon: 'Shield',
      concepts: [
        { term: "عَلَيْهَا تِسْعَةَ عَشَرَ", meaning: "Over it are nineteen", explanation: "19 angels guard Hell", verseRef: "74:30" },
        { term: "وَمَا جَعَلْنَا أَصْحَابَ النَّارِ إِلَّا مَلَائِكَةً", meaning: "Made keepers only angels", explanation: "Angels, not humans, guard Hell", verseRef: "74:31" },
        { term: "عِدَّتَهُمْ... فِتْنَةً لِّلَّذِينَ كَفَرُوا", meaning: "Their number a trial for disbelievers", explanation: "Number itself is test - some mock 'only 19'", verseRef: "74:31" }
      ]
    },

    cosmicOaths: {
      name: "Cosmic Oaths",
      nameArabic: "القسم الكوني",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "وَالْقَمَرِ", meaning: "By the moon", explanation: "Oath by moon", verseRef: "74:32" },
        { term: "وَاللَّيْلِ إِذْ أَدْبَرَ", meaning: "By night as it retreats", explanation: "Night departing", verseRef: "74:33" },
        { term: "وَالصُّبْحِ إِذَا أَسْفَرَ", meaning: "By dawn as it brightens", explanation: "Dawn breaking", verseRef: "74:34" },
        { term: "إِنَّهَا لَإِحْدَى الْكُبَرِ", meaning: "Indeed it is one of the greatest", explanation: "Hell is major warning", verseRef: "74:35" }
      ]
    },

    fourReasonsForHell: {
      name: "Four Reasons for Hell",
      nameArabic: "أربعة أسباب لدخول جهنم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَمْ نَكُ مِنَ الْمُصَلِّينَ", meaning: "We were not of those who prayed", explanation: "Reason 1: Abandoned prayer", verseRef: "74:43" },
        { term: "وَلَمْ نَكُ نُطْعِمُ الْمِسْكِينَ", meaning: "Nor fed the poor", explanation: "Reason 2: Neglected charity", verseRef: "74:44" },
        { term: "وَكُنَّا نَخُوضُ مَعَ الْخَائِضِينَ", meaning: "We engaged in vain talk with others", explanation: "Reason 3: Idle gossip/falsehood", verseRef: "74:45" },
        { term: "وَكُنَّا نُكَذِّبُ بِيَوْمِ الدِّينِ", meaning: "We denied Day of Judgment", explanation: "Reason 4: Denied accountability", verseRef: "74:46" }
      ]
    },

    noIntercession: {
      name: "No Intercession",
      nameArabic: "لا شفاعة",
      color: '#EC4899',
      icon: 'Scale',
      concepts: [
        { term: "حَتَّىٰ أَتَانَا الْيَقِينُ", meaning: "Until death came to us", explanation: "Yaqeen = death/certainty", verseRef: "74:47" },
        { term: "فَمَا تَنفَعُهُمْ شَفَاعَةُ الشَّافِعِينَ", meaning: "Intercession won't benefit them", explanation: "No intercession for deniers", verseRef: "74:48" }
      ]
    },

    fleeingFromReminder: {
      name: "Fleeing from Reminder",
      nameArabic: "الفرار من التذكرة",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "عَنِ التَّذْكِرَةِ مُعْرِضِينَ", meaning: "From reminder turning away", explanation: "Rejecting Quranic guidance", verseRef: "74:49" },
        { term: "كَأَنَّهُمْ حُمُرٌ مُّسْتَنفِرَةٌ فَرَّتْ مِن قَسْوَرَةٍ", meaning: "Like donkeys fleeing from lion", explanation: "Wild panic from truth", verseRef: "74:50-51" }
      ]
    },

    divineAttributes: {
      name: "Divine Attributes",
      nameArabic: "الصفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "هُوَ أَهْلُ التَّقْوَىٰ", meaning: "He is worthy of being feared", explanation: "Allah deserves ultimate reverence", verseRef: "74:56" },
        { term: "وَأَهْلُ الْمَغْفِرَةِ", meaning: "And worthy of forgiving", explanation: "Allah deserves being sought for forgiveness", verseRef: "74:56" }
      ]
    }
  },

  relationships: [
    { from: "قم فأنذر", to: "نذيرا للبشر", type: "mission", description: "Prophet commanded to warn → warning for humanity" },
    { from: "مالا ممدودا... بنين شهودا", to: "عنيدا", type: "ingratitude", description: "Despite all blessings → became obstinate" },
    { from: "فكر وقدر", to: "سحر يؤثر", type: "consequence", description: "Deliberated → concluded it's 'magic'" },
    { from: "لم نك من المصلين", to: "نخوض مع الخائضين", type: "causation", description: "Abandoned prayer led to idle talk" },
    { from: "حمر مستنفرة", to: "عن التذكرة معرضين", type: "illustration", description: "Fleeing donkeys = those fleeing reminder" },
    { from: "أهل التقوى", to: "أهل المغفرة", type: "balance", description: "Allah deserves fear AND is source of forgiveness" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Prophetic Commands", verses: "74:1-7", description: "Seven commands: arise, warn, glorify, purify, avoid, give, be patient" },
      { stage: 2, theme: "Day's Severity", verses: "74:8-10", description: "Trumpet blown; difficult Day for disbelievers" },
      { stage: 3, theme: "Waleed's Story", verses: "74:11-25", description: "Blessed man who deliberated then rejected" },
      { stage: 4, theme: "Saqar Description", verses: "74:26-31", description: "Hell's nature; 19 angels; trial for disbelievers" },
      { stage: 5, theme: "Cosmic Oaths", verses: "74:32-37", description: "Moon, night, dawn; greatest warning; free choice" },
      { stage: 6, theme: "Four Reasons", verses: "74:38-48", description: "No prayer, no charity, vain talk, denied Judgment" },
      { stage: 7, theme: "Fleeing Truth", verses: "74:49-56", description: "Like fleeing donkeys; Allah worthy of fear and forgiveness" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Warn others", how: "Share truth even if uncomfortable - your mission", verse: "74:2" },
      { principle: "Purify yourself", how: "Physical and spiritual cleanliness together", verse: "74:4" },
      { principle: "Give without expecting", how: "Charity purely for Allah, not for returns", verse: "74:6" },
      { principle: "Be patient", how: "Patience for Allah's sake through difficulties", verse: "74:7" },
      { principle: "Pray consistently", how: "First reason for Hell was abandoning salah", verse: "74:43" },
      { principle: "Feed the poor", how: "Second reason was neglecting the needy", verse: "74:44" },
      { principle: "Avoid vain talk", how: "Third reason was idle gossip and falsehood", verse: "74:45" }
    ]
  },

  uniqueInsight: {
    title: "The 'Nineteen' Controversy",
    insight: "Verse 30's 'عَلَيْهَا تِسْعَةَ عَشَرَ' (Over it are 19) sparked mockery from Quraysh. Abu Jahl said, 'Muhammad claims there are 19 guardians - can't some of you fight each one?' But verse 31 explains this number is itself a trial (فِتْنَة). The Quran challenges: angels guard Hell, not humans - why mock their number? Some modern scholars note '19' appears to have mathematical significance throughout Quran (Bismillah has 19 letters, Quran mentions 'Rahman' 57 times = 19×3, etc.), though this remains debated. The classical understanding: 19 refers to Zabaniyah angels who guard Hell, their number challenges human arrogance - as if humans could overpower divine guards."
  },

  historicalContext: {
    note: "One of earliest revelations after Al-Muzzammil. Prophet was wrapped in garments after first revelation's intensity. This surah commands public preaching. Waleed ibn al-Mughirah was a respected Quraysh chief who admitted Quran's beauty privately but publicly called it 'magic' to preserve tribal standing. His deliberation process (thinking, calculating, frowning, declaring 'magic') is recorded as eternal lesson on willful rejection."
  },

  linguisticFeatures: {
    features: [
      { feature: "المُدَّثِّر", example: "One wrapped", effect: "Form V participle - wrapped heavily" },
      { feature: "Seven commands فَ", example: "قم فأنذر, ربك فكبر...", effect: "Rapid-fire instructions with فَ" },
      { feature: "قَسْوَرَة", example: "Lion", effect: "Rare word for lion emphasizing terror" },
      { feature: "تِسْعَةَ عَشَرَ", example: "Nineteen", effect: "Specific number - definiteness" },
      { feature: "لَوَّاحَة", example: "Scorching", effect: "Intensive form - burns blackening skin" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "74:30-31", topic: "The number 19", note: "Some claim mathematical patterns in Quran based on 19; classical view: 19 Zabaniyah angels guard Hell" }
    ]
  }
};

export default ONTOLOGY;
