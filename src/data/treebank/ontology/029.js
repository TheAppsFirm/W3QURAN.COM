/**
 * Surah Al-Ankabut (29) - Ontology of Quranic Concepts
 * The Spider
 * Theme: Trials test faith, spider's web parable, prophets' tests, patience in adversity
 */

export const ONTOLOGY = {
  surahId: 29,
  surahName: "Al-Ankabut",
  surahNameArabic: "العنكبوت",
  revelationType: "Makki",
  totalAyahs: 69,

  categories: {
    trialsAndTests: {
      name: "Trials and Tests of Faith",
      nameArabic: "الفتن والابتلاءات",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "أَحَسِبَ النَّاسُ أَن يُتْرَكُوا", meaning: "Do people think they will be left", explanation: "Opening rhetorical question - trials are inevitable", verseRef: "29:2" },
        { term: "أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ", meaning: "To say 'We believe' without being tested", explanation: "Faith requires proof through trials", verseRef: "29:2" },
        { term: "فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا", meaning: "Allah will surely know those who are truthful", explanation: "Tests distinguish sincere from false", verseRef: "29:3" },
        { term: "وَلَيَعْلَمَنَّ الْكَاذِبِينَ", meaning: "And know the liars", explanation: "Trials expose hypocrisy", verseRef: "29:3" },
        { term: "وَلَنَبْلُوَنَّكُمْ", meaning: "And We will surely test you", explanation: "Divine promise of testing believers", verseRef: "29:2" }
      ]
    },

    spiderParable: {
      name: "The Spider's Web Parable",
      nameArabic: "مثل العنكبوت",
      color: "#8B5CF6",
      icon: "MessageCircle",
      concepts: [
        { term: "مَثَلُ الَّذِينَ اتَّخَذُوا مِن دُونِ اللَّهِ أَوْلِيَاءَ", meaning: "Example of those who take protectors besides Allah", explanation: "False deities provide no real protection", verseRef: "29:41" },
        { term: "كَمَثَلِ الْعَنكَبُوتِ", meaning: "Like the example of a spider", explanation: "Iconic parable giving surah its name", verseRef: "29:41" },
        { term: "اتَّخَذَتْ بَيْتًا", meaning: "That takes a home", explanation: "Spider constructs dwelling for protection", verseRef: "29:41" },
        { term: "وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنكَبُوتِ", meaning: "And the weakest of homes is the spider's house", explanation: "Flimsy structure - metaphor for false worship", verseRef: "29:41" },
        { term: "لَوْ كَانُوا يَعْلَمُونَ", meaning: "If only they knew", explanation: "Ignorance of idolaters about their weakness", verseRef: "29:41" }
      ]
    },

    storyOfNuh: {
      name: "Story of Prophet Nuh",
      nameArabic: "قصة نوح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ", meaning: "And We sent Nuh to his people", explanation: "950 years of calling to Allah", verseRef: "29:14" },
        { term: "فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا", meaning: "He remained among them 1000 years minus 50", explanation: "Longest prophetic mission in history", verseRef: "29:14" },
        { term: "فَأَخَذَهُمُ الطُّوفَانُ", meaning: "Then the flood seized them", explanation: "Divine punishment for persistent rejection", verseRef: "29:14" },
        { term: "وَهُمْ ظَالِمُونَ", meaning: "While they were wrongdoers", explanation: "Punishment came due to injustice", verseRef: "29:14" },
        { term: "فَأَنجَيْنَاهُ وَأَصْحَابَ السَّفِينَةِ", meaning: "We saved him and companions of the ship", explanation: "Believers rescued from destruction", verseRef: "29:15" }
      ]
    },

    storyOfIbrahim: {
      name: "Story of Prophet Ibrahim",
      nameArabic: "قصة إبراهيم",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَإِبْرَاهِيمَ إِذْ قَالَ لِقَوْمِهِ", meaning: "And Ibrahim when he said to his people", explanation: "Ibrahim's confrontation with idolatry", verseRef: "29:16" },
        { term: "اعْبُدُوا اللَّهَ وَاتَّقُوهُ", meaning: "Worship Allah and fear Him", explanation: "Core message of all prophets", verseRef: "29:16" },
        { term: "إِنَّمَا تَعْبُدُونَ مِن دُونِ اللَّهِ أَوْثَانًا", meaning: "You only worship idols besides Allah", explanation: "Exposing the falsehood of idol worship", verseRef: "29:17" },
        { term: "وَتَخْلُقُونَ إِفْكًا", meaning: "And you create falsehood", explanation: "Idols are human inventions", verseRef: "29:17" },
        { term: "فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَن قَالُوا اقْتُلُوهُ أَوْ حَرِّقُوهُ", meaning: "Response was only 'Kill him or burn him'", explanation: "Violence as answer to truth", verseRef: "29:24" },
        { term: "فَأَنجَاهُ اللَّهُ مِنَ النَّارِ", meaning: "But Allah saved him from the fire", explanation: "Miraculous deliverance from fire", verseRef: "29:24" }
      ]
    },

    storyOfLut: {
      name: "Story of Prophet Lut",
      nameArabic: "قصة لوط",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ", meaning: "And Lut when he said to his people", explanation: "Lut confronts his people's immorality", verseRef: "29:28" },
        { term: "إِنَّكُمْ لَتَأْتُونَ الْفَاحِشَةَ", meaning: "You commit immorality", explanation: "Direct condemnation of sin", verseRef: "29:28" },
        { term: "مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ مِّنَ الْعَالَمِينَ", meaning: "No one preceded you in it from the worlds", explanation: "Unprecedented nature of their sin", verseRef: "29:28" },
        { term: "فَأَنجَيْنَاهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ", meaning: "We saved him and his family except his wife", explanation: "His wife remained with disbelievers", verseRef: "29:32-33" }
      ]
    },

    storyOfShuayb: {
      name: "Story of Prophet Shuayb",
      nameArabic: "قصة شعيب",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        { term: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا", meaning: "And to Madyan their brother Shuayb", explanation: "Shuayb sent to Madyan people", verseRef: "29:36" },
        { term: "اعْبُدُوا اللَّهَ وَارْجُوا الْيَوْمَ الْآخِرَ", meaning: "Worship Allah and expect the Last Day", explanation: "Call to monotheism and accountability", verseRef: "29:36" },
        { term: "وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ", meaning: "Do not commit abuse on earth corrupting", explanation: "Prohibition of spreading corruption", verseRef: "29:36" },
        { term: "فَأَخَذَتْهُمُ الرَّجْفَةُ", meaning: "So the earthquake seized them", explanation: "Punishment by earthquake", verseRef: "29:37" }
      ]
    },

    destructionOfNations: {
      name: "Destruction of Past Nations",
      nameArabic: "هلاك الأمم السابقة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَعَادًا وَثَمُودَ", meaning: "And Aad and Thamud", explanation: "Ancient Arabian nations destroyed", verseRef: "29:38" },
        { term: "وَقَد تَّبَيَّنَ لَكُم مِّن مَّسَاكِنِهِمْ", meaning: "Clear to you from their dwellings", explanation: "Ruins remain as lessons", verseRef: "29:38" },
        { term: "وَقَارُونَ وَفِرْعَوْنَ وَهَامَانَ", meaning: "And Qarun, Pharaoh and Haman", explanation: "Arrogant tyrants of history", verseRef: "29:39" },
        { term: "فَكُلًّا أَخَذْنَا بِذَنبِهِ", meaning: "Each We seized for his sin", explanation: "Individual accountability for rejection", verseRef: "29:40" },
        { term: "فَمِنْهُم مَّنْ أَرْسَلْنَا عَلَيْهِ حَاصِبًا", meaning: "Some We sent upon them a storm of stones", explanation: "Varied punishments for different nations", verseRef: "29:40" },
        { term: "وَمِنْهُم مَّنْ أَخَذَتْهُ الصَّيْحَةُ", meaning: "And some were seized by the shriek", explanation: "Destructive sound wave", verseRef: "29:40" },
        { term: "وَمِنْهُم مَّنْ خَسَفْنَا بِهِ الْأَرْضَ", meaning: "And some We made earth swallow", explanation: "Earth opening up - Qarun", verseRef: "29:40" },
        { term: "وَمِنْهُم مَّنْ أَغْرَقْنَا", meaning: "And some We drowned", explanation: "Pharaoh's drowning", verseRef: "29:40" }
      ]
    },

    parentalRelations: {
      name: "Duty to Parents",
      nameArabic: "حق الوالدين",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حُسْنًا", meaning: "We enjoined man to treat parents with excellence", explanation: "Divine command for good treatment", verseRef: "29:8" },
        { term: "وَإِن جَاهَدَاكَ لِتُشْرِكَ بِي", meaning: "If they strive to make you associate with Me", explanation: "Limits of parental obedience", verseRef: "29:8" },
        { term: "مَا لَيْسَ لَكَ بِهِ عِلْمٌ", meaning: "That of which you have no knowledge", explanation: "No obedience in disobedience to Allah", verseRef: "29:8" },
        { term: "فَلَا تُطِعْهُمَا", meaning: "Then do not obey them", explanation: "Clear boundary - no shirk even for parents", verseRef: "29:8" },
        { term: "إِلَيَّ مَرْجِعُكُمْ", meaning: "To Me is your return", explanation: "All will be accountable to Allah", verseRef: "29:8" }
      ]
    },

    hypocrisyExposed: {
      name: "Hypocrisy Exposed",
      nameArabic: "كشف النفاق",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ", meaning: "Among people who say 'We believe in Allah'", explanation: "Verbal profession of faith", verseRef: "29:10" },
        { term: "فَإِذَا أُوذِيَ فِي اللَّهِ", meaning: "But if harmed for Allah's cause", explanation: "Test reveals true faith", verseRef: "29:10" },
        { term: "جَعَلَ فِتْنَةَ النَّاسِ كَعَذَابِ اللَّهِ", meaning: "Makes trial of people like punishment of Allah", explanation: "Fears people more than Allah", verseRef: "29:10" },
        { term: "وَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ آمَنُوا", meaning: "Allah will surely know those who believe", explanation: "Divine knowledge of true believers", verseRef: "29:11" },
        { term: "وَلَيَعْلَمَنَّ الْمُنَافِقِينَ", meaning: "And will know the hypocrites", explanation: "Hypocrites cannot hide from Allah", verseRef: "29:11" }
      ]
    },

    quranAndRevelation: {
      name: "Quran and Revelation",
      nameArabic: "القرآن والوحي",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَكَذَٰلِكَ أَنزَلْنَا إِلَيْكَ الْكِتَابَ", meaning: "Thus We revealed to you the Book", explanation: "Quran as divine revelation", verseRef: "29:47" },
        { term: "فَالَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يُؤْمِنُونَ بِهِ", meaning: "Those We gave the Scripture believe in it", explanation: "True scholars recognize truth", verseRef: "29:47" },
        { term: "وَمَا كُنتَ تَتْلُو مِن قَبْلِهِ مِن كِتَابٍ", meaning: "You did not recite before it any scripture", explanation: "Prophet was unlettered - proof of revelation", verseRef: "29:48" },
        { term: "وَلَا تَخُطُّهُ بِيَمِينِكَ", meaning: "Nor write it with your right hand", explanation: "Could not read or write", verseRef: "29:48" },
        { term: "إِذًا لَّارْتَابَ الْمُبْطِلُونَ", meaning: "Then falsifiers would have doubted", explanation: "Illiteracy removes doubt of human authorship", verseRef: "29:48" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Knowledge",
      nameArabic: "علم الله",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "إِنَّ اللَّهَ يَعْلَمُ مَا يَدْعُونَ مِن دُونِهِ", meaning: "Allah knows what they invoke besides Him", explanation: "Allah knows all false worship", verseRef: "29:42" },
        { term: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: "And He is the Mighty, the Wise", explanation: "Power combined with wisdom", verseRef: "29:42" },
        { term: "بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ", meaning: "Rather clear signs in breasts of those given knowledge", explanation: "Quran preserved in hearts", verseRef: "29:49" },
        { term: "وَمَا يَجْحَدُ بِآيَاتِنَا إِلَّا الظَّالِمُونَ", meaning: "None reject Our signs except wrongdoers", explanation: "Rejection stems from injustice", verseRef: "29:49" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "أَوَلَمْ يَرَوْا كَيْفَ يُبْدِئُ اللَّهُ الْخَلْقَ", meaning: "Have they not seen how Allah begins creation", explanation: "Creation as proof of Allah", verseRef: "29:19" },
        { term: "ثُمَّ يُعِيدُهُ", meaning: "Then He will repeat it", explanation: "Resurrection is like creation - easy for Allah", verseRef: "29:19" },
        { term: "إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ", meaning: "Indeed that is easy for Allah", explanation: "Nothing difficult for Allah", verseRef: "29:19" },
        { term: "سِيرُوا فِي الْأَرْضِ", meaning: "Travel through the earth", explanation: "Command to observe and learn", verseRef: "29:20" },
        { term: "فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ", meaning: "And observe how He began creation", explanation: "Nature as evidence of Creator", verseRef: "29:20" }
      ]
    },

    prayerAndRemembrance: {
      name: "Prayer and Remembrance",
      nameArabic: "الصلاة والذكر",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "اتْلُ مَا أُوحِيَ إِلَيْكَ مِنَ الْكِتَابِ", meaning: "Recite what has been revealed to you of the Book", explanation: "Command to recite Quran", verseRef: "29:45" },
        { term: "وَأَقِمِ الصَّلَاةَ", meaning: "And establish prayer", explanation: "Fundamental act of worship", verseRef: "29:45" },
        { term: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ", meaning: "Indeed prayer prohibits immorality and wrongdoing", explanation: "Prayer's protective effect on behavior", verseRef: "29:45" },
        { term: "وَلَذِكْرُ اللَّهِ أَكْبَرُ", meaning: "And remembrance of Allah is greater", explanation: "Dhikr is greatest act of worship", verseRef: "29:45" },
        { term: "وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ", meaning: "And Allah knows what you do", explanation: "All deeds are known to Allah", verseRef: "29:45" }
      ]
    },

    debateWithPeopleOfBook: {
      name: "Dialogue with People of the Book",
      nameArabic: "الحوار مع أهل الكتاب",
      color: "#10B981",
      icon: "MessageCircle",
      concepts: [
        { term: "وَلَا تُجَادِلُوا أَهْلَ الْكِتَابِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ", meaning: "Do not argue with People of Book except in best manner", explanation: "Beautiful conduct in religious dialogue", verseRef: "29:46" },
        { term: "إِلَّا الَّذِينَ ظَلَمُوا مِنْهُمْ", meaning: "Except those who do wrong among them", explanation: "Exception for oppressors", verseRef: "29:46" },
        { term: "آمَنَّا بِالَّذِي أُنزِلَ إِلَيْنَا وَأُنزِلَ إِلَيْكُمْ", meaning: "We believe in what was revealed to us and to you", explanation: "Common ground in revelation", verseRef: "29:46" },
        { term: "وَإِلَٰهُنَا وَإِلَٰهُكُمْ وَاحِدٌ", meaning: "And our God and your God is one", explanation: "Unity of God across revelations", verseRef: "29:46" },
        { term: "وَنَحْنُ لَهُ مُسْلِمُونَ", meaning: "And we submit to Him", explanation: "Islam as universal submission", verseRef: "29:46" }
      ]
    },

    strivingForAllah: {
      name: "Striving for Allah",
      nameArabic: "الجهاد في سبيل الله",
      color: "#F59E0B",
      icon: "Zap",
      concepts: [
        { term: "وَالَّذِينَ جَاهَدُوا فِينَا", meaning: "And those who strive for Us", explanation: "Effort in Allah's cause", verseRef: "29:69" },
        { term: "لَنَهْدِيَنَّهُمْ سُبُلَنَا", meaning: "We will surely guide them to Our ways", explanation: "Divine guidance for sincere strivers", verseRef: "29:69" },
        { term: "وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ", meaning: "And indeed Allah is with the doers of good", explanation: "Allah's support for righteous", verseRef: "29:69" }
      ]
    },

    worldlyLife: {
      name: "Nature of Worldly Life",
      nameArabic: "حقيقة الحياة الدنيا",
      color: "#EC4899",
      icon: "Globe",
      concepts: [
        { term: "وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ", meaning: "This worldly life is only amusement and diversion", explanation: "Transient nature of dunya", verseRef: "29:64" },
        { term: "وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ", meaning: "And the home of Hereafter - that is the true life", explanation: "Real life is eternal life", verseRef: "29:64" },
        { term: "لَوْ كَانُوا يَعْلَمُونَ", meaning: "If only they knew", explanation: "Ignorance of true priorities", verseRef: "29:64" }
      ]
    },

    divineProvision: {
      name: "Divine Provision",
      nameArabic: "الرزق الإلهي",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "وَكَأَيِّن مِّن دَابَّةٍ لَّا تَحْمِلُ رِزْقَهَا", meaning: "How many creatures carry not their provision", explanation: "Creatures trust in Allah's provision", verseRef: "29:60" },
        { term: "اللَّهُ يَرْزُقُهَا وَإِيَّاكُمْ", meaning: "Allah provides for them and for you", explanation: "Allah sustains all creation", verseRef: "29:60" },
        { term: "وَهُوَ السَّمِيعُ الْعَلِيمُ", meaning: "And He is the Hearing, the Knowing", explanation: "Allah hears needs and knows all", verseRef: "29:60" }
      ]
    },

    migrationForFaith: {
      name: "Migration for Faith",
      nameArabic: "الهجرة في سبيل الدين",
      color: "#06B6D4",
      icon: "Compass",
      concepts: [
        { term: "يَا عِبَادِيَ الَّذِينَ آمَنُوا", meaning: "O My servants who have believed", explanation: "Direct address to believers", verseRef: "29:56" },
        { term: "إِنَّ أَرْضِي وَاسِعَةٌ", meaning: "Indeed My earth is spacious", explanation: "Migration permitted when persecuted", verseRef: "29:56" },
        { term: "فَإِيَّايَ فَاعْبُدُونِ", meaning: "So worship only Me", explanation: "Worship Allah wherever you are", verseRef: "29:56" },
        { term: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ", meaning: "Every soul will taste death", explanation: "Death is universal - migrate if needed", verseRef: "29:57" },
        { term: "ثُمَّ إِلَيْنَا تُرْجَعُونَ", meaning: "Then to Us you will be returned", explanation: "Final return is to Allah alone", verseRef: "29:57" }
      ]
    }
  },

  relationships: [
    { from: "آمَنَّا", to: "يُفْتَنُونَ", type: "requirement", description: "Faith requires testing" },
    { from: "العنكبوت", to: "أوهن البيوت", type: "metaphor", description: "Spider's web symbolizes false protection" },
    { from: "نوح", to: "ألف سنة", type: "exemplar", description: "Patience through 950 years of calling" },
    { from: "إبراهيم/النار", to: "أنجاه الله", type: "rescue", description: "Faith leads to divine rescue" },
    { from: "الصلاة", to: "تنهى عن الفحشاء", type: "effect", description: "Prayer prevents evil" },
    { from: "جاهدوا فينا", to: "لنهدينهم", type: "reward", description: "Striving leads to guidance" },
    { from: "الحياة الدنيا/لهو", to: "الآخرة/الحيوان", type: "contrast", description: "Worldly play vs true eternal life" },
    { from: "لا تحمل رزقها", to: "الله يرزقها", type: "trust", description: "Creatures rely on Allah's provision" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction to Trials", verses: "29:1-7", description: "Alif Lam Mim; trials distinguish true believers" },
      { stage: 2, theme: "Parental Rights and Limits", verses: "29:8-9", description: "Good treatment but no obedience in shirk" },
      { stage: 3, theme: "Exposing Hypocrisy", verses: "29:10-13", description: "Those who fear people's trials more than Allah" },
      { stage: 4, theme: "Story of Nuh", verses: "29:14-15", description: "950 years of patience, flood, ark" },
      { stage: 5, theme: "Story of Ibrahim", verses: "29:16-27", description: "Confronting idolatry, saved from fire" },
      { stage: 6, theme: "Story of Lut", verses: "29:28-35", description: "Immorality condemned, city destroyed" },
      { stage: 7, theme: "Story of Shuayb", verses: "29:36-37", description: "Madyan's corruption, earthquake" },
      { stage: 8, theme: "Destruction of Nations", verses: "29:38-40", description: "Aad, Thamud, Qarun, Pharaoh" },
      { stage: 9, theme: "Spider Parable", verses: "29:41-44", description: "Central parable of the surah" },
      { stage: 10, theme: "Prayer and Scripture", verses: "29:45-49", description: "Prayer's effects, Quran's nature" },
      { stage: 11, theme: "Demanding Signs", verses: "29:50-55", description: "Quran is sufficient sign" },
      { stage: 12, theme: "Migration and Provision", verses: "29:56-63", description: "Earth is spacious, Allah provides" },
      { stage: 13, theme: "True Life", verses: "29:64-69", description: "Akhirah is real life, strive for guidance" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Expect trials", how: "Faith will be tested - prepare mentally and spiritually", verse: "29:2-3" },
      { principle: "Set limits with parents", how: "Honor parents but never obey in matters of shirk", verse: "29:8" },
      { principle: "Learn from history", how: "Study destroyed nations - their ruins are lessons", verse: "29:38" },
      { principle: "Avoid false securities", how: "Don't rely on anything weaker than Allah - spider's web analogy", verse: "29:41" },
      { principle: "Establish prayer", how: "Prayer protects from evil - make it consistent", verse: "29:45" },
      { principle: "Debate beautifully", how: "Argue with wisdom and best manners", verse: "29:46" },
      { principle: "Trust Allah's provision", how: "Like creatures without storage, trust in Razzaq", verse: "29:60" },
      { principle: "Migrate if needed", how: "Allah's earth is vast - worship freely", verse: "29:56" },
      { principle: "Strive for guidance", how: "Those who struggle sincerely receive guidance", verse: "29:69" }
    ]
  },

  uniqueInsight: {
    title: "The Spider's Web - A Scientific and Spiritual Masterpiece",
    insight: "This surah uniquely combines prophetic narratives with a powerful scientific metaphor. The spider's web, while structurally impressive for its weight, is functionally one of the weakest shelters - it cannot protect against wind, rain, or predators. Allah uses this precise analogy to describe those who seek protection in false gods: structurally they may seem organized (temples, rituals, traditions), but functionally they provide zero protection against Allah's decree. Modern science confirms: spider silk is strong per weight, but the web structure itself is fragile. The surah's placement of this parable (v.41) at the center, surrounded by stories of prophets who faced trials (Nuh, Ibrahim, Lut, Shuayb), creates a powerful contrast: those who trust Allah survive (Nuh's ark, Ibrahim's fire), while those who trust false gods perish. The closing verses (29:69) promise that sincere striving leads to divine guidance - the antithesis of the spider's web, which catches nothing of value."
  },

  historicalContext: {
    note: "Surah Al-Ankabut was revealed in the late Makkan period when persecution of Muslims was intense. The opening verses directly address believers facing pressure to renounce Islam. The stories of prophets facing persecution (Ibrahim thrown into fire, Lut's people threatening him) would have resonated deeply with the early Muslims. The permission to migrate (v.56) hints at the coming Hijrah. Some scholars note verses 1-11 may have been revealed in Madinah, addressing hypocrites, while the rest is Makkan. The spider parable was particularly apt for Arabs who observed these fragile webs in their environment. The name 'Al-Ankabut' (The Spider) is unique - no other surah is named after an insect or arachnid."
  },

  linguisticFeatures: {
    features: [
      { feature: "أَحَسِبَ", example: "Interrogative hamza + verb", effect: "Rhetorical question implying negative - 'Do they think...? No!'" },
      { feature: "فِتْنَة", example: "Trial/tribulation", effect: "Root ف-ت-ن: gold tested by fire; believers tested by hardship" },
      { feature: "عَنْكَبُوت", example: "Spider", effect: "Unusual word in Quran - appears only here" },
      { feature: "أَوْهَن", example: "Weakest (elative)", effect: "Superlative form - absolutely weakest" },
      { feature: "الْحَيَوَان", example: "The true life", effect: "Intensive form of حياة - complete, eternal life" },
      { feature: "أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا", example: "1000 minus 50", effect: "Uses سنة (year) and عام (year) - subtle variation avoiding repetition" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "29:41", topic: "Spider's web", note: "Spider silk is strong per weight but web structure is fragile - accurate description" },
      { verse: "29:19-20", topic: "Creation cycle", note: "Beginning and repeating creation - echoes biological cycles" },
      { verse: "29:60", topic: "Animal provision", note: "Most animals don't store food long-term - rely on ecosystem" },
      { verse: "29:14", topic: "Longevity", note: "950 years - before Flood, different conditions may have allowed longer lifespans" }
    ]
  },

  crossReferences: {
    references: [
      { verse: "29:2-3", relatedTo: "2:214", topic: "Testing of believers" },
      { verse: "29:14-15", relatedTo: "11:25-48, 71:1-28", topic: "Story of Nuh" },
      { verse: "29:16-27", relatedTo: "21:51-70, 37:83-98", topic: "Story of Ibrahim" },
      { verse: "29:28-35", relatedTo: "7:80-84, 11:77-83", topic: "Story of Lut" },
      { verse: "29:41", relatedTo: "16:92", topic: "Weak structures/protection" },
      { verse: "29:45", relatedTo: "20:14", topic: "Establishing prayer" },
      { verse: "29:46", relatedTo: "16:125", topic: "Inviting with wisdom" }
    ]
  }
};

export default ONTOLOGY;
