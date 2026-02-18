/**
 * Surah At-Tahrim (66) - Ontology of Quranic Concepts
 * The Prohibition
 * Theme: Household matters of Prophet, repentance, examples of righteous/wicked women
 */

export const ONTOLOGY = {
  surahId: 66,
  surahName: "At-Tahrim",
  surahNameArabic: "التحريم",
  revelationType: "Madani",
  totalAyahs: 12,

  categories: {
    propheticHousehold: {
      name: "Prophet's Household Matter",
      nameArabic: "شأن بيت النبي",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "لِمَ تُحَرِّمُ مَا أَحَلَّ اللَّهُ لَكَ", meaning: "Why do you prohibit what Allah made lawful?", explanation: "Prophet made something lawful upon himself forbidden to please wives", verseRef: "66:1" },
        { term: "تَبْتَغِي مَرْضَاتَ أَزْوَاجِكَ", meaning: "Seeking approval of your wives", explanation: "Gentleness toward wives - but not at cost of divine law", verseRef: "66:1" },
        { term: "تَحِلَّةَ أَيْمَانِكُمْ", meaning: "Dissolution of your oaths", explanation: "Allah provides way to undo oaths (kaffārah)", verseRef: "66:2" }
      ]
    },

    secretRevealed: {
      name: "Secret Revealed",
      nameArabic: "كشف السر",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "أَسَرَّ النَّبِيُّ إِلَىٰ بَعْضِ أَزْوَاجِهِ حَدِيثًا", meaning: "Prophet confided to one of his wives", explanation: "Private conversation between spouses", verseRef: "66:3" },
        { term: "فَلَمَّا نَبَّأَتْ بِهِ", meaning: "When she informed about it", explanation: "Breaking confidence is serious", verseRef: "66:3" },
        { term: "وَأَظْهَرَهُ اللَّهُ عَلَيْهِ", meaning: "Allah informed him of it", explanation: "Allah revealed betrayal to Prophet", verseRef: "66:3" },
        { term: "عَرَّفَ بَعْضَهُ وَأَعْرَضَ عَن بَعْضٍ", meaning: "He mentioned part and overlooked part", explanation: "Prophet's mercy - didn't expose fully", verseRef: "66:3" },
        { term: "نَبَّأَنِيَ الْعَلِيمُ الْخَبِيرُ", meaning: "The All-Knowing, All-Aware informed me", explanation: "Source was divine revelation", verseRef: "66:3" }
      ]
    },

    callToRepentance: {
      name: "Call to Repentance",
      nameArabic: "الدعوة إلى التوبة",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "إِن تَتُوبَا إِلَى اللَّهِ", meaning: "If you both repent to Allah", explanation: "Addressed to Hafsa and Aisha", verseRef: "66:4" },
        { term: "فَقَدْ صَغَتْ قُلُوبُكُمَا", meaning: "Your hearts have inclined", explanation: "Hearts deviated from what's right", verseRef: "66:4" },
        { term: "وَإِن تَظَاهَرَا عَلَيْهِ", meaning: "If you cooperate against him", explanation: "Warning against conspiring", verseRef: "66:4" },
        { term: "اللَّهَ هُوَ مَوْلَاهُ وَجِبْرِيلُ", meaning: "Allah is his protector, and Gabriel", explanation: "Prophet has divine support", verseRef: "66:4" }
      ]
    },

    idealWifeQualities: {
      name: "Qualities of Ideal Wives",
      nameArabic: "صفات الزوجات المثاليات",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "مُسْلِمَاتٍ", meaning: "Muslim women", explanation: "Submitted to Allah", verseRef: "66:5" },
        { term: "مُّؤْمِنَاتٍ", meaning: "Believing women", explanation: "Strong in faith", verseRef: "66:5" },
        { term: "قَانِتَاتٍ", meaning: "Devoutly obedient", explanation: "Humble and devout", verseRef: "66:5" },
        { term: "تَائِبَاتٍ", meaning: "Repentant", explanation: "Quick to repent", verseRef: "66:5" },
        { term: "عَابِدَاتٍ", meaning: "Worshipping", explanation: "Dedicated to worship", verseRef: "66:5" },
        { term: "سَائِحَاتٍ", meaning: "Fasting/traveling", explanation: "Fasting or striving for Allah", verseRef: "66:5" },
        { term: "ثَيِّبَاتٍ وَأَبْكَارًا", meaning: "Previously married and virgins", explanation: "Both types acceptable", verseRef: "66:5" }
      ]
    },

    familyProtection: {
      name: "Family Protection from Fire",
      nameArabic: "حماية الأسرة من النار",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا", meaning: "Protect yourselves and families from Fire", explanation: "Family head's responsibility", verseRef: "66:6" },
        { term: "وَقُودُهَا النَّاسُ وَالْحِجَارَةُ", meaning: "Fuel is people and stones", explanation: "Terrifying description of Hell", verseRef: "66:6" },
        { term: "مَلَائِكَةٌ غِلَاظٌ شِدَادٌ", meaning: "Angels harsh and severe", explanation: "Hell's guardians are merciless", verseRef: "66:6" },
        { term: "لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ", meaning: "They never disobey Allah", explanation: "Angels' perfect obedience", verseRef: "66:6" }
      ]
    },

    noExcuses: {
      name: "No Excuses Accepted",
      nameArabic: "لا أعذار مقبولة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَا تَعْتَذِرُوا الْيَوْمَ", meaning: "Do not make excuses today", explanation: "Day of Judgment - no excuses help", verseRef: "66:7" },
        { term: "تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ", meaning: "You are recompensed for what you did", explanation: "Just reward for actions", verseRef: "66:7" }
      ]
    },

    sincereRepentance: {
      name: "Sincere Repentance",
      nameArabic: "التوبة النصوح",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "تَوْبَةً نَّصُوحًا", meaning: "Sincere repentance", explanation: "Complete, honest, irreversible repentance", verseRef: "66:8" },
        { term: "يُكَفِّرَ عَنكُمْ سَيِّئَاتِكُمْ", meaning: "Remove from you your misdeeds", explanation: "Sincere repentance erases sins", verseRef: "66:8" },
        { term: "جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", meaning: "Gardens beneath which rivers flow", explanation: "Reward for repentant believers", verseRef: "66:8" },
        { term: "نُورُهُمْ يَسْعَىٰ بَيْنَ أَيْدِيهِمْ", meaning: "Light will proceed before them", explanation: "Believers' light on Day of Judgment", verseRef: "66:8" },
        { term: "أَتْمِمْ لَنَا نُورَنَا", meaning: "Perfect for us our light", explanation: "Prayer for complete guidance", verseRef: "66:8" }
      ]
    },

    striving: {
      name: "Striving Against Disbelief",
      nameArabic: "الجهاد ضد الكفر",
      color: '#3B82F6',
      icon: 'Shield',
      concepts: [
        { term: "جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ", meaning: "Strive against disbelievers and hypocrites", explanation: "Jihad includes verbal/intellectual struggle", verseRef: "66:9" },
        { term: "وَاغْلُظْ عَلَيْهِمْ", meaning: "Be harsh with them", explanation: "Firm stance against enemies of Islam", verseRef: "66:9" },
        { term: "مَأْوَاهُمْ جَهَنَّمُ", meaning: "Their refuge is Hell", explanation: "Final destination of rejecters", verseRef: "66:9" }
      ]
    },

    wickedWomenExamples: {
      name: "Examples of Wicked Women",
      nameArabic: "أمثلة النساء الكافرات",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "امْرَأَتَ نُوحٍ", meaning: "Wife of Noah", explanation: "Disbelieved despite prophet husband", verseRef: "66:10" },
        { term: "وَامْرَأَتَ لُوطٍ", meaning: "Wife of Lot", explanation: "Betrayed prophet husband", verseRef: "66:10" },
        { term: "كَانَتَا تَحْتَ عَبْدَيْنِ مِنْ عِبَادِنَا صَالِحَيْنِ", meaning: "Were under two righteous servants", explanation: "Marriage to prophet didn't save them", verseRef: "66:10" },
        { term: "فَخَانَتَاهُمَا", meaning: "They betrayed them", explanation: "Betrayal in religion, not adultery", verseRef: "66:10" },
        { term: "فَلَمْ يُغْنِيَا عَنْهُمَا مِنَ اللَّهِ شَيْئًا", meaning: "Did not avail them anything from Allah", explanation: "Family ties don't override personal faith", verseRef: "66:10" }
      ]
    },

    righteousWomenExamples: {
      name: "Examples of Righteous Women",
      nameArabic: "أمثلة النساء الصالحات",
      color: '#10B981',
      icon: 'Crown',
      concepts: [
        { term: "امْرَأَتَ فِرْعَوْنَ", meaning: "Wife of Pharaoh", explanation: "Asiya - believed despite tyrant husband", verseRef: "66:11" },
        { term: "ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ", meaning: "Build for me near You a house in Paradise", explanation: "Her famous supplication", verseRef: "66:11" },
        { term: "نَجِّنِي مِن فِرْعَوْنَ وَعَمَلِهِ", meaning: "Save me from Pharaoh and his deeds", explanation: "Sought refuge from evil", verseRef: "66:11" },
        { term: "مَرْيَمَ ابْنَتَ عِمْرَانَ", meaning: "Maryam daughter of Imran", explanation: "Virgin Mary - supreme example", verseRef: "66:12" },
        { term: "أَحْصَنَتْ فَرْجَهَا", meaning: "Guarded her chastity", explanation: "Perfect purity", verseRef: "66:12" },
        { term: "فَنَفَخْنَا فِيهِ مِن رُّوحِنَا", meaning: "We breathed into it Our spirit", explanation: "Miraculous conception of Jesus", verseRef: "66:12" },
        { term: "وَكَانَتْ مِنَ الْقَانِتِينَ", meaning: "She was of the devoutly obedient", explanation: "Masculine form - transcends gender in piety", verseRef: "66:12" }
      ]
    }
  },

  relationships: [
    { from: "تحرم ما أحل الله", to: "تحلة أيمانكم", type: "solution", description: "Self-imposed prohibition can be dissolved" },
    { from: "أسر النبي حديثاً", to: "فنبأت به", type: "cause-effect", description: "Confidence shared was betrayed" },
    { from: "تتوبا", to: "صغت قلوبكما", type: "reason", description: "Hearts inclined wrongly - need repentance" },
    { from: "امرأت نوح/لوط", to: "امرأت فرعون/مريم", type: "contrast", description: "Wicked wives of prophets vs righteous in evil environments" },
    { from: "تحت عبدين صالحين", to: "فخانتاهما", type: "irony", description: "Proximity to righteousness didn't help" },
    { from: "توبة نصوحاً", to: "نورهم يسعى", type: "reward", description: "Sincere repentance leads to light on Judgment Day" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Prophet's Household", verses: "66:1-5", description: "Incident with wives, call to repent" },
      { stage: 2, theme: "Family Protection", verses: "66:6-7", description: "Protect family from Fire, no excuses" },
      { stage: 3, theme: "Sincere Repentance", verses: "66:8", description: "Tawbah nasuha - complete repentance" },
      { stage: 4, theme: "Striving", verses: "66:9", description: "Jihad against disbelievers and hypocrites" },
      { stage: 5, theme: "Contrasting Examples", verses: "66:10-12", description: "Wicked vs righteous women" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Don't prohibit the permissible", how: "Don't make halal upon yourself haram", verse: "66:1" },
      { principle: "Keep confidences", how: "Don't share private conversations of spouse", verse: "66:3" },
      { principle: "Overlook spouse's faults", how: "Like Prophet who overlooked some matters", verse: "66:3" },
      { principle: "Protect family spiritually", how: "Educate family about religion to save from Fire", verse: "66:6" },
      { principle: "Repent sincerely", how: "Repentance must be complete - nasuha", verse: "66:8" },
      { principle: "Environment doesn't determine fate", how: "Asiya believed despite Pharaoh, wives of prophets disbelieved", verse: "66:10-11" }
    ]
  },

  uniqueInsight: {
    title: "The Four Greatest Women",
    insight: "This surah presents two of the four greatest women ever: Asiya (Pharaoh's wife) and Maryam (daughter of Imran). Prophet Muhammad ﷺ said: 'The best women of Paradise are Khadijah bint Khuwaylid, Fatimah bint Muhammad, Maryam bint Imran, and Asiya bint Muzahim wife of Pharaoh.' Notice the surah's profound teaching: being married to a prophet (Noah, Lot) doesn't guarantee salvation, and being married to the worst tyrant (Pharaoh) doesn't prevent it. Personal faith is what matters. The final verse describes Maryam using the masculine plural 'qānitīn' (devoutly obedient ones) rather than feminine 'qānitāt' - scholars explain this indicates her piety transcended gender distinctions, placing her among the highest ranks of the obedient."
  },

  historicalContext: {
    note: "This surah was revealed regarding an incident where the Prophet ﷺ made something lawful upon himself forbidden (either honey or spending time with Maria the Copt) to please some of his wives. Hafsa shared a secret the Prophet had confided in her with Aisha. The surah addresses these matters while drawing universal lessons about repentance, family responsibility, and the importance of personal faith over associations. Asiya is praised for her famous supplication for a house in Paradise 'near' Allah - prioritizing closeness to Allah over worldly comfort despite being queen of Egypt."
  },

  linguisticFeatures: {
    features: [
      { feature: "تَوْبَةً نَّصُوحًا", example: "Sincere repentance", effect: "naṣūḥ from نصح - advice/sincerity - meaning pure, advising repentance" },
      { feature: "صَغَتْ قُلُوبُكُمَا", example: "Your hearts inclined", effect: "Dual address - specifically to two wives" },
      { feature: "غِلَاظٌ شِدَادٌ", example: "Harsh and severe", effect: "Both intensive adjectives - extreme harshness" },
      { feature: "سَائِحَاتٍ", example: "Fasting/traveling", effect: "From سِيَاحَة - means fasting or traveling in worship" },
      { feature: "الْقَانِتِينَ (masculine)", example: "The devoutly obedient", effect: "Masculine used for Maryam - transcending gender in piety" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "66:6", topic: "Parental responsibility", note: "Modern psychology confirms parents shape children's worldview and moral development" },
      { verse: "66:12", topic: "Virgin birth", note: "Miraculous conception - beyond natural explanation, divine intervention" }
    ]
  }
};

export default ONTOLOGY;
