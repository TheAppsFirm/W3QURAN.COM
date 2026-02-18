/**
 * Surah At-Talaq (65) - Ontology of Quranic Concepts
 * The Divorce
 * Theme: Divorce regulations, waiting periods, reliance on Allah
 */

export const ONTOLOGY = {
  surahId: 65,
  surahName: "At-Talaq",
  surahNameArabic: "الطلاق",
  revelationType: "Madani",
  totalAyahs: 12,

  categories: {
    divorceRules: {
      name: "Divorce Regulations",
      nameArabic: "أحكام الطلاق",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "فَطَلِّقُوهُنَّ لِعِدَّتِهِنَّ", meaning: "Divorce them for their waiting period", explanation: "Divorce at start of iddah (clean period)", verseRef: "65:1" },
        { term: "وَأَحْصُوا الْعِدَّةَ", meaning: "And count the period", explanation: "Track the waiting period carefully", verseRef: "65:1" },
        { term: "لَا تُخْرِجُوهُنَّ مِن بُيُوتِهِنَّ", meaning: "Do not expel them from their houses", explanation: "Divorced women stay in home during iddah", verseRef: "65:1" },
        { term: "إِلَّا أَن يَأْتِينَ بِفَاحِشَةٍ مُّبَيِّنَةٍ", meaning: "Unless they commit clear immorality", explanation: "Exception - open misconduct", verseRef: "65:1" }
      ]
    },

    divineWisdom: {
      name: "Divine Wisdom in Waiting",
      nameArabic: "حكمة العدة",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًا", meaning: "You know not - perhaps Allah will bring about a matter", explanation: "Reconciliation possible during iddah", verseRef: "65:1" },
        { term: "وَتِلْكَ حُدُودُ اللَّهِ", meaning: "These are limits of Allah", explanation: "Divine boundaries not to transgress", verseRef: "65:1" },
        { term: "وَمَن يَتَعَدَّ حُدُودَ اللَّهِ فَقَدْ ظَلَمَ نَفْسَهُ", meaning: "Whoever transgresses has wronged himself", explanation: "Violating limits is self-harm", verseRef: "65:1" }
      ]
    },

    endOfIddah: {
      name: "End of Waiting Period",
      nameArabic: "انتهاء العدة",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "فَإِذَا بَلَغْنَ أَجَلَهُنَّ", meaning: "When they reach their term", explanation: "End of waiting period", verseRef: "65:2" },
        { term: "فَأَمْسِكُوهُنَّ بِمَعْرُوفٍ", meaning: "Retain them with kindness", explanation: "Reconcile properly", verseRef: "65:2" },
        { term: "أَوْ فَارِقُوهُنَّ بِمَعْرُوفٍ", meaning: "Or part with them kindly", explanation: "Separate amicably", verseRef: "65:2" },
        { term: "وَأَشْهِدُوا ذَوَيْ عَدْلٍ مِّنكُمْ", meaning: "Bring two just witnesses", explanation: "Witnesses for divorce/reconciliation", verseRef: "65:2" }
      ]
    },

    taqwaRewards: {
      name: "Rewards of Taqwa",
      nameArabic: "ثمرات التقوى",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", meaning: "Whoever fears Allah - He will make for him a way out", explanation: "Taqwa provides solutions", verseRef: "65:2" },
        { term: "وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ", meaning: "And provide from where he does not expect", explanation: "Unexpected provision for God-fearing", verseRef: "65:3" },
        { term: "يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا", meaning: "Make his matter easy for him", explanation: "Ease in affairs for believers", verseRef: "65:4" },
        { term: "يُكَفِّرْ عَنْهُ سَيِّئَاتِهِ", meaning: "Remove from him his misdeeds", explanation: "Sins forgiven", verseRef: "65:5" },
        { term: "وَيُعْظِمْ لَهُ أَجْرًا", meaning: "Make great for him reward", explanation: "Increased reward", verseRef: "65:5" }
      ]
    },

    tawakkul: {
      name: "Trust in Allah",
      nameArabic: "التوكل على الله",
      color: '#F59E0B',
      icon: 'Heart',
      concepts: [
        { term: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", meaning: "Whoever relies on Allah - He is sufficient for him", explanation: "Allah suffices those who trust Him", verseRef: "65:3" },
        { term: "إِنَّ اللَّهَ بَالِغُ أَمْرِهِ", meaning: "Indeed Allah will accomplish His purpose", explanation: "Divine decree always fulfilled", verseRef: "65:3" },
        { term: "قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا", meaning: "Allah has set for everything a measure", explanation: "Everything has divine timing", verseRef: "65:3" }
      ]
    },

    waitingPeriods: {
      name: "Specific Waiting Periods",
      nameArabic: "مدد العدة المختلفة",
      color: '#06B6D4',
      icon: 'Book',
      concepts: [
        { term: "وَاللَّائِي يَئِسْنَ مِنَ الْمَحِيضِ", meaning: "Those who have despaired of menstruation", explanation: "Postmenopausal women", verseRef: "65:4" },
        { term: "فَعِدَّتُهُنَّ ثَلَاثَةُ أَشْهُرٍ", meaning: "Their waiting period is three months", explanation: "Three months for those without menses", verseRef: "65:4" },
        { term: "وَاللَّائِي لَمْ يَحِضْنَ", meaning: "And those who have not menstruated", explanation: "Pre-pubescent or irregular - three months", verseRef: "65:4" },
        { term: "وَأُولَاتُ الْأَحْمَالِ أَجَلُهُنَّ أَن يَضَعْنَ حَمْلَهُنَّ", meaning: "Pregnant women - until they give birth", explanation: "Pregnancy ends at delivery", verseRef: "65:4" }
      ]
    },

    divorcedWomenRights: {
      name: "Rights of Divorced Women",
      nameArabic: "حقوق المطلقات",
      color: '#EC4899',
      icon: 'Shield',
      concepts: [
        { term: "أَسْكِنُوهُنَّ مِنْ حَيْثُ سَكَنتُم", meaning: "House them where you dwell", explanation: "Provide accommodation", verseRef: "65:6" },
        { term: "مِّن وُجْدِكُمْ", meaning: "According to your means", explanation: "Within one's ability", verseRef: "65:6" },
        { term: "وَلَا تُضَارُّوهُنَّ", meaning: "Do not harm them", explanation: "Prohibition of harassment", verseRef: "65:6" },
        { term: "لِتُضَيِّقُوا عَلَيْهِنَّ", meaning: "To make difficulty for them", explanation: "Don't pressure them to leave", verseRef: "65:6" }
      ]
    },

    pregnancyBreastfeeding: {
      name: "Pregnancy and Breastfeeding",
      nameArabic: "الحمل والرضاعة",
      color: '#22C55E',
      icon: 'Heart',
      concepts: [
        { term: "وَإِن كُنَّ أُولَاتِ حَمْلٍ فَأَنفِقُوا عَلَيْهِنَّ", meaning: "If pregnant, spend on them", explanation: "Financial support during pregnancy", verseRef: "65:6" },
        { term: "فَإِنْ أَرْضَعْنَ لَكُمْ فَآتُوهُنَّ أُجُورَهُنَّ", meaning: "If they breastfeed, give them their dues", explanation: "Payment for nursing", verseRef: "65:6" },
        { term: "وَأْتَمِرُوا بَيْنَكُم بِمَعْرُوفٍ", meaning: "Consult together in kindness", explanation: "Cooperative decision-making", verseRef: "65:6" },
        { term: "وَإِن تَعَاسَرْتُمْ فَسَتُرْضِعُ لَهُ أُخْرَىٰ", meaning: "If you disagree, another will nurse", explanation: "Alternative nursing arrangement", verseRef: "65:6" }
      ]
    },

    financialResponsibility: {
      name: "Financial Responsibility",
      nameArabic: "المسؤولية المالية",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ", meaning: "Let affluent spend from abundance", explanation: "Wealthy give according to means", verseRef: "65:7" },
        { term: "وَمَن قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنفِقْ مِمَّا آتَاهُ اللَّهُ", meaning: "Whoever's provision is restricted - spend from what Allah gave", explanation: "Poor give what they can", verseRef: "65:7" },
        { term: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا", meaning: "Allah does not burden a soul beyond what He gave it", explanation: "Divine mercy in obligations", verseRef: "65:7" },
        { term: "سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا", meaning: "Allah will make after hardship ease", explanation: "Promise of relief", verseRef: "65:7" }
      ]
    },

    destructionOfNations: {
      name: "Destruction of Disobedient Nations",
      nameArabic: "هلاك الأمم العاصية",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَكَأَيِّن مِّن قَرْيَةٍ عَتَتْ عَنْ أَمْرِ رَبِّهَا", meaning: "How many a city rebelled against its Lord's command", explanation: "Historical disobedience", verseRef: "65:8" },
        { term: "فَحَاسَبْنَاهَا حِسَابًا شَدِيدًا", meaning: "We took it to severe account", explanation: "Divine reckoning", verseRef: "65:8" },
        { term: "وَعَذَّبْنَاهَا عَذَابًا نُّكْرًا", meaning: "And punished it with terrible punishment", explanation: "Unprecedented punishment", verseRef: "65:8" },
        { term: "فَذَاقَتْ وَبَالَ أَمْرِهَا", meaning: "So it tasted evil result of its affair", explanation: "Consequences of rebellion", verseRef: "65:9" }
      ]
    },

    divineReminder: {
      name: "Divine Reminder",
      nameArabic: "التذكير الإلهي",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "فَاتَّقُوا اللَّهَ يَا أُولِي الْأَلْبَابِ", meaning: "Fear Allah, O people of understanding", explanation: "Call to those with intellect", verseRef: "65:10" },
        { term: "قَدْ أَنزَلَ اللَّهُ إِلَيْكُمْ ذِكْرًا", meaning: "Allah has sent down to you a reminder", explanation: "Quran as reminder", verseRef: "65:10" },
        { term: "رَّسُولًا يَتْلُو عَلَيْكُمْ آيَاتِ اللَّهِ", meaning: "A Messenger reciting to you verses of Allah", explanation: "Prophet as guide", verseRef: "65:11" },
        { term: "لِّيُخْرِجَ الَّذِينَ آمَنُوا... مِنَ الظُّلُمَاتِ إِلَى النُّورِ", meaning: "To bring believers from darkness into light", explanation: "Guidance from ignorance to truth", verseRef: "65:11" }
      ]
    },

    cosmicCreation: {
      name: "Cosmic Creation",
      nameArabic: "الخلق الكوني",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "اللَّهُ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ", meaning: "Allah created seven heavens", explanation: "Multi-layered heavens", verseRef: "65:12" },
        { term: "وَمِنَ الْأَرْضِ مِثْلَهُنَّ", meaning: "And of earth the like of them", explanation: "Seven earths parallel to heavens", verseRef: "65:12" },
        { term: "يَتَنَزَّلُ الْأَمْرُ بَيْنَهُنَّ", meaning: "Command descends between them", explanation: "Divine decree flows through creation", verseRef: "65:12" },
        { term: "لِتَعْلَمُوا أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: "So you may know Allah is over all things competent", explanation: "Purpose - realize divine power", verseRef: "65:12" },
        { term: "وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا", meaning: "And Allah has encompassed all things in knowledge", explanation: "Divine omniscience", verseRef: "65:12" }
      ]
    }
  },

  relationships: [
    { from: "طلقوهن لعدتهن", to: "لعل الله يحدث بعد ذلك أمراً", type: "wisdom", description: "Proper divorce timing allows reconciliation" },
    { from: "ومن يتق الله", to: "مخرجاً/رزقاً/يسراً", type: "reward", description: "Taqwa leads to way out, provision, ease" },
    { from: "حدود الله", to: "ظلم نفسه", type: "warning", description: "Transgressing limits is self-harm" },
    { from: "عتت عن أمر ربها", to: "حساباً شديداً", type: "cause-effect", description: "Rebellion leads to severe reckoning" },
    { from: "بعد عسر", to: "يسراً", type: "promise", description: "Hardship is always followed by ease" },
    { from: "سبع سماوات", to: "قدير/أحاط علماً", type: "evidence", description: "Creation proves power and knowledge" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divorce Initiation", verses: "65:1", description: "How to properly divorce - timing and rules" },
      { stage: 2, theme: "End of Iddah", verses: "65:2-3", description: "Options at end of waiting period - tawakkul" },
      { stage: 3, theme: "Specific Cases", verses: "65:4-5", description: "Different waiting periods for different situations" },
      { stage: 4, theme: "Rights and Duties", verses: "65:6-7", description: "Housing, maintenance, nursing rights" },
      { stage: 5, theme: "Historical Warning", verses: "65:8-9", description: "Fate of disobedient nations" },
      { stage: 6, theme: "Divine Guidance", verses: "65:10-12", description: "Reminder, Messenger, cosmic perspective" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Divorce at clean period", how: "Time divorce so iddah can be counted properly", verse: "65:1" },
      { principle: "Hope for reconciliation", how: "Don't rush - Allah may bring about change", verse: "65:1" },
      { principle: "Trust Allah for provision", how: "Fear Him and He provides unexpectedly", verse: "65:2-3" },
      { principle: "House divorced wife during iddah", how: "Let her stay in matrimonial home", verse: "65:6" },
      { principle: "Support pregnant ex-wife", how: "Maintain her until delivery", verse: "65:6" },
      { principle: "Pay for nursing", how: "Compensate for breastfeeding", verse: "65:6" },
      { principle: "Give according to ability", how: "Rich give more, poor give what they can", verse: "65:7" }
    ]
  },

  uniqueInsight: {
    title: "The Triple Promise of Taqwa",
    insight: "This surah contains one of the most comprehensive promises for those who have taqwa (God-consciousness). In verses 2-5, three times the phrase 'whoever fears Allah' (وَمَن يَتَّقِ اللَّهَ) appears, each followed by a different reward: (1) 'He will make for him a way out' (مَخْرَجًا) - v.2, (2) 'provide for him from where he does not expect' - v.3, (3) 'make his matter easy for him' (يُسْرًا) - v.4, plus removal of sins and increased reward - v.5. This triplet structure emphasizes that taqwa is the solution to divorce-related difficulties: a way out of marital problems, unexpected provision during hardship, and ease in complex arrangements. The context of divorce - one of the most difficult human experiences - makes these promises especially poignant. The surah teaches that even in the breakdown of marriage, maintaining God-consciousness leads to divine assistance."
  },

  historicalContext: {
    note: "This Madani surah provides detailed regulations about divorce that complement Surah Al-Baqarah's verses. It addresses a case where the Prophet ﷺ divorced Hafsa, then took her back. The verse 'perhaps Allah will bring about a matter after that' (65:1) refers to possible reconciliation during the waiting period. The emphasis on witnesses, fair treatment, and financial responsibility reflects Islam's balanced approach to a difficult situation, protecting both parties' rights while encouraging resolution."
  },

  linguisticFeatures: {
    features: [
      { feature: "وُجْدِكُمْ", example: "Your means/capacity", effect: "From وَجَد - finding/ability - means financial capacity" },
      { feature: "تَعَاسَرْتُمْ", example: "You disagree/find difficulty", effect: "Form VI - mutual difficulty/disagreement" },
      { feature: "عَتَتْ", example: "Insolently disobeyed", effect: "عُتُوّ - excessive rebellion" },
      { feature: "يَتَنَزَّلُ", example: "Descends gradually", effect: "Form V - continuous/gradual descent" },
      { feature: "أَحَاطَ... عِلْمًا", example: "Encompassed in knowledge", effect: "Tamyiz construction - specification of manner" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "65:4", topic: "Menstrual cycles", note: "Iddah tied to menstruation - natural biological marker for pregnancy determination" },
      { verse: "65:12", topic: "Seven heavens and earths", note: "Multiple cosmic layers - paralleled in modern understanding of atmospheric and geological layers" },
      { verse: "65:7", topic: "Proportional obligation", note: "Islamic economics principle - obligation according to means, psychologically beneficial" }
    ]
  }
};

export default ONTOLOGY;
