/**
 * Surah Nuh (71) - Ontology of Quranic Concepts
 * Noah
 * Theme: Prophet Nuh's dawah methods, people's rejection, cosmic signs, flood
 */

export const ONTOLOGY = {
  surahId: 71,
  surahName: "Nuh",
  surahNameArabic: "نوح",
  revelationType: "Makki",
  totalAyahs: 28,

  categories: {
    propheticMission: {
      name: "Nuh's Mission",
      nameArabic: "رسالة نوح",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ", meaning: "We sent Nuh to his people", explanation: "Divine appointment", verseRef: "71:1" },
        { term: "أَنذِرْ قَوْمَكَ", meaning: "Warn your people", explanation: "Core mission: warning", verseRef: "71:1" },
        { term: "مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ", meaning: "Before painful punishment comes", explanation: "Urgency of message", verseRef: "71:1" },
        { term: "نَذِيرٌ مُّبِينٌ", meaning: "Clear warner", explanation: "Nuh's self-description", verseRef: "71:2" }
      ]
    },

    coreMessage: {
      name: "Core Message",
      nameArabic: "الرسالة الأساسية",
      color: '#F59E0B',
      icon: 'MessageCircle',
      concepts: [
        { term: "اعْبُدُوا اللَّهَ", meaning: "Worship Allah", explanation: "First command", verseRef: "71:3" },
        { term: "وَاتَّقُوهُ", meaning: "Fear Him", explanation: "Second command", verseRef: "71:3" },
        { term: "وَأَطِيعُونِ", meaning: "Obey me", explanation: "Third command", verseRef: "71:3" }
      ]
    },

    forgivenessBenefits: {
      name: "Benefits of Forgiveness",
      nameArabic: "فوائد الاستغفار",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "يَغْفِرْ لَكُم مِّن ذُنُوبِكُمْ", meaning: "He will forgive your sins", explanation: "Spiritual benefit", verseRef: "71:4" },
        { term: "وَيُؤَخِّرْكُمْ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: "Grant respite to appointed term", explanation: "Extended life", verseRef: "71:4" },
        { term: "يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا", meaning: "Send rain abundantly", explanation: "Rain blessing", verseRef: "71:11" },
        { term: "وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ", meaning: "Increase wealth and children", explanation: "Material blessing", verseRef: "71:12" },
        { term: "وَيَجْعَل لَّكُمْ جَنَّاتٍ", meaning: "Make gardens for you", explanation: "Gardens", verseRef: "71:12" },
        { term: "وَيَجْعَل لَّكُمْ أَنْهَارًا", meaning: "Make rivers for you", explanation: "Rivers", verseRef: "71:12" }
      ]
    },

    dawahMethods: {
      name: "Methods of Dawah",
      nameArabic: "أساليب الدعوة",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا", meaning: "Called my people night and day", explanation: "Persistent effort", verseRef: "71:5" },
        { term: "دَعَوْتُهُمْ جِهَارًا", meaning: "Called them publicly", explanation: "Open preaching", verseRef: "71:8" },
        { term: "أَعْلَنتُ لَهُمْ", meaning: "Announced to them", explanation: "Public announcements", verseRef: "71:9" },
        { term: "وَأَسْرَرْتُ لَهُمْ إِسْرَارًا", meaning: "Confided to them secretly", explanation: "Private counseling", verseRef: "71:9" }
      ]
    },

    peoplesRejection: {
      name: "People's Rejection",
      nameArabic: "رفض القوم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَلَمْ يَزِدْهُمْ دُعَائِي إِلَّا فِرَارًا", meaning: "My calling only increased their flight", explanation: "Running from truth", verseRef: "71:6" },
        { term: "جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ", meaning: "Put fingers in their ears", explanation: "Refusing to hear", verseRef: "71:7" },
        { term: "وَاسْتَغْشَوْا ثِيَابَهُمْ", meaning: "Covered themselves with garments", explanation: "Refusing to see", verseRef: "71:7" },
        { term: "وَأَصَرُّوا", meaning: "Persisted", explanation: "Stubbornness in rejection", verseRef: "71:7" },
        { term: "وَاسْتَكْبَرُوا اسْتِكْبَارًا", meaning: "Were arrogant with arrogance", explanation: "Extreme arrogance", verseRef: "71:7" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs",
      nameArabic: "الآيات الكونية",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "خَلَقَكُمْ أَطْوَارًا", meaning: "Created you in stages", explanation: "Human development", verseRef: "71:14" },
        { term: "سَبْعَ سَمَاوَاتٍ طِبَاقًا", meaning: "Seven heavens in layers", explanation: "Layered universe", verseRef: "71:15" },
        { term: "الْقَمَرَ فِيهِنَّ نُورًا", meaning: "Moon therein as light", explanation: "Moon reflects light", verseRef: "71:16" },
        { term: "الشَّمْسَ سِرَاجًا", meaning: "Sun as lamp", explanation: "Sun generates light", verseRef: "71:16" },
        { term: "أَنبَتَكُم مِّنَ الْأَرْضِ نَبَاتًا", meaning: "Grew you from earth like plants", explanation: "Human origin from earth", verseRef: "71:17" },
        { term: "الْأَرْضَ بِسَاطًا", meaning: "Earth as an expanse", explanation: "Earth spread out", verseRef: "71:19" }
      ]
    },

    idols: {
      name: "The Five Idols",
      nameArabic: "الأصنام الخمسة",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَدًّا", meaning: "Wadd", explanation: "Idol of love/moon - tribe of Kalb", verseRef: "71:23" },
        { term: "سُوَاعًا", meaning: "Suwa", explanation: "Idol - tribe of Hamdan", verseRef: "71:23" },
        { term: "يَغُوثَ", meaning: "Yaghuth", explanation: "Idol of help - tribe of Murad", verseRef: "71:23" },
        { term: "يَعُوقَ", meaning: "Ya'uq", explanation: "Idol - tribe of Madhhij", verseRef: "71:23" },
        { term: "نَسْرًا", meaning: "Nasr", explanation: "Idol of eagle - tribe of Himyar", verseRef: "71:23" }
      ]
    },

    nuhsDua: {
      name: "Nuh's Final Supplication",
      nameArabic: "دعاء نوح الأخير",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "لَا تَذَرْ عَلَى الْأَرْضِ مِنَ الْكَافِرِينَ دَيَّارًا", meaning: "Don't leave single disbeliever on earth", explanation: "Request for complete cleansing", verseRef: "71:26" },
        { term: "إِن تَذَرْهُمْ يُضِلُّوا عِبَادَكَ", meaning: "If You leave them, they will mislead Your servants", explanation: "Reason: they corrupt others", verseRef: "71:27" },
        { term: "وَلَا يَلِدُوا إِلَّا فَاجِرًا كَفَّارًا", meaning: "They only give birth to wicked disbelievers", explanation: "Generational corruption", verseRef: "71:27" },
        { term: "اغْفِرْ لِي وَلِوَالِدَيَّ", meaning: "Forgive me and my parents", explanation: "Seeking forgiveness", verseRef: "71:28" },
        { term: "وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا", meaning: "And whoever enters my house as believer", explanation: "Forgiveness for believers", verseRef: "71:28" }
      ]
    },

    punishment: {
      name: "Punishment",
      nameArabic: "العقوبة",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "مِّمَّا خَطِيئَاتِهِمْ أُغْرِقُوا", meaning: "Because of sins they were drowned", explanation: "Drowning in flood", verseRef: "71:25" },
        { term: "فَأُدْخِلُوا نَارًا", meaning: "Then made to enter Fire", explanation: "Hellfire after death", verseRef: "71:25" },
        { term: "فَلَمْ يَجِدُوا لَهُم مِّن دُونِ اللَّهِ أَنصَارًا", meaning: "Found no helpers besides Allah", explanation: "Idols useless", verseRef: "71:25" }
      ]
    }
  },

  relationships: [
    { from: "اعبدوا الله", to: "يغفر لكم", type: "causation", description: "Worship → forgiveness" },
    { from: "استغفروا ربكم", to: "يرسل السماء مدراراً", type: "causation", description: "Istighfar → rain" },
    { from: "دعوت ليلاً ونهاراً", to: "جهاراً... إسراراً", type: "progression", description: "Methods evolved: night/day → public/private" },
    { from: "أصروا واستكبروا", to: "أغرقوا", type: "consequence", description: "Persistence in kufr → drowning" },
    { from: "وداً سواعاً يغوث يعوق نسراً", to: "أضلوا كثيراً", type: "causation", description: "Idol worship → mass misguidance" },
    { from: "الشمس سراجاً", to: "القمر نوراً", type: "contrast", description: "Sun = lamp (generates light); Moon = light (reflects)" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Mission Begins", verses: "71:1-4", description: "Nuh sent, warns, promises forgiveness" },
      { stage: 2, theme: "Persistent Dawah", verses: "71:5-9", description: "Night/day, public/private calling" },
      { stage: 3, theme: "Istighfar Benefits", verses: "71:10-12", description: "Rain, wealth, children, gardens" },
      { stage: 4, theme: "Cosmic Signs", verses: "71:13-20", description: "Human stages, heavens, sun, moon, earth" },
      { stage: 5, theme: "People's Corruption", verses: "71:21-24", description: "Following wealthy, idol worship" },
      { stage: 6, theme: "Punishment & Dua", verses: "71:25-28", description: "Drowned, Nuh's final supplication" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Persist in dawah", how: "Night and day, public and private - don't give up", verse: "71:5-9" },
      { principle: "Istighfar brings provision", how: "Seek forgiveness for rain, wealth, children", verse: "71:10-12" },
      { principle: "Reflect on creation", how: "Human stages, heavens, sun/moon - signs of Allah", verse: "71:14-16" },
      { principle: "Don't expect acceptance", how: "Even 950 years of dawah had few believers", verse: "71:6-7" },
      { principle: "Pray for believers", how: "Include parents and all believers in dua", verse: "71:28" }
    ]
  },

  uniqueInsight: {
    title: "The Five Idols - From Righteous Men to Statues",
    insight: "The five names in verse 23 (Wadd, Suwa, Yaghuth, Ya'uq, Nasr) were originally names of righteous men between Adam and Nuh. When they died, Shaytan suggested making statues to remember them. Later generations began worshipping the statues. Ibn Abbas reported this. These same idols were later worshipped by Arab tribes: Wadd by Kalb (in Dumatul-Jandal), Suwa by Hamdan, Yaghuth by Murad, Ya'uq by Madhhij, Nasr by Himyar. This shows how bid'ah (innovation) in religion begins innocently but leads to shirk."
  },

  historicalContext: {
    note: "Nuh preached for 950 years (29:14). His people were the first to worship idols after Adam. The flood was global according to many scholars, though some say regional. Nuh's son Kan'an and wife refused to believe. Only believers on the Ark survived. This surah, revealed in Makkah, paralleled Prophet Muhammad's struggle with Quraysh."
  },

  linguisticFeatures: {
    features: [
      { feature: "غَفَّار", example: "Ever-Forgiving", effect: "faʿʿāl pattern - intensive" },
      { feature: "مِدْرَار", example: "Abundantly flowing", effect: "mifʿāl pattern - intensive" },
      { feature: "اسْتِكْبَار", example: "Form X verbal noun", effect: "Intensive arrogance" },
      { feature: "كُبَّار", example: "Immense plot", effect: "fuʿʿāl pattern - intensive" },
      { feature: "دَيَّار", example: "Single inhabitant", effect: "fayyāl pattern - any individual" },
      { feature: "كَفَّار", example: "Extremely disbelieving", effect: "faʿʿāl pattern - intensive" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "71:14", topic: "Embryology", note: "أَطْوَار (stages) - human development in stages" },
      { verse: "71:15-16", topic: "Astronomy", note: "سِرَاج (lamp) for sun vs نُور (light) for moon - sun generates, moon reflects" },
      { verse: "71:17", topic: "Human origin", note: "أَنبَتَكُم مِّنَ الْأَرْضِ - elements in human body from earth" }
    ]
  }
};

export default ONTOLOGY;
