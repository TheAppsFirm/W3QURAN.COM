/**
 * Surah Fatir (35) - Ontology of Quranic Concepts
 * The Originator - 45 Ayahs, Makkan
 * Theme: Allah as the Originator of creation, angels as messengers, signs in creation,
 * three categories of inheritors of the Book, contrast between believers and disbelievers
 */

export const ONTOLOGY = {
  surahId: 35,
  surahName: "Fatir",
  surahNameArabic: "فاطر",
  revelationType: "Makki",
  totalAyahs: 45,

  categories: {
    divineOrigination: {
      name: "Allah - The Originator",
      nameArabic: "الله الفاطر",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Originator of heavens and earth", explanation: "Fatir - One who brings into existence from nothing, splitting open non-existence", verseRef: "35:1" },
        { term: "الْحَمْدُ لِلَّهِ", meaning: "All praise is for Allah", explanation: "Opening with praise - establishing Allah's exclusive right to gratitude", verseRef: "35:1" },
        { term: "جَاعِلِ الْمَلَائِكَةِ رُسُلًا", meaning: "Who made angels messengers", explanation: "Angels serve as intermediaries for divine revelation", verseRef: "35:1" },
        { term: "أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ", meaning: "Having wings, two, three, or four", explanation: "Angels have varying numbers of wings - showing diversity in creation", verseRef: "35:1" },
        { term: "يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ", meaning: "He increases in creation what He wills", explanation: "Allah's creative power is unlimited - no constraints", verseRef: "35:1" },
        { term: "إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: "Allah is over all things powerful", explanation: "Absolute divine omnipotence", verseRef: "35:1" }
      ]
    },

    divineMercy: {
      name: "Divine Mercy & Providence",
      nameArabic: "الرحمة والرزق الإلهي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "مَّا يَفْتَحِ اللَّهُ لِلنَّاسِ مِن رَّحْمَةٍ", meaning: "Whatever mercy Allah opens for people", explanation: "Allah is source of all mercy - none can withhold it", verseRef: "35:2" },
        { term: "فَلَا مُمْسِكَ لَهَا", meaning: "None can withhold it", explanation: "When Allah grants mercy, no power can stop it", verseRef: "35:2" },
        { term: "وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُ", meaning: "What He withholds, none can release", explanation: "When Allah withholds, no power can provide it", verseRef: "35:2" },
        { term: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: "He is the Almighty, the Wise", explanation: "Power combined with wisdom in divine decisions", verseRef: "35:2" }
      ]
    },

    gratitudeReminder: {
      name: "Call to Remember Blessings",
      nameArabic: "تذكير النعم",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ", meaning: "Remember Allah's blessing upon you", explanation: "Gratitude begins with remembrance of blessings", verseRef: "35:3" },
        { term: "هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ", meaning: "Is there any creator other than Allah?", explanation: "Rhetorical question - no other creator exists", verseRef: "35:3" },
        { term: "يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: "Provides for you from sky and earth", explanation: "Rain from above, produce from below - all from Allah", verseRef: "35:3" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: "There is no deity except Him", explanation: "Tawheed - core message of the surah", verseRef: "35:3" },
        { term: "فَأَنَّىٰ تُؤْفَكُونَ", meaning: "So how are you deluded?", explanation: "Wonder at how people turn away despite clear evidence", verseRef: "35:3" }
      ]
    },

    prophetDenial: {
      name: "Denial of Prophets",
      nameArabic: "تكذيب الرسل",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَإِن يُكَذِّبُوكَ", meaning: "And if they deny you", explanation: "Comfort to Prophet - denial is not new", verseRef: "35:4" },
        { term: "فَقَدْ كُذِّبَتْ رُسُلٌ مِّن قَبْلِكَ", meaning: "Messengers before you were denied", explanation: "Pattern of history - prophets always faced rejection", verseRef: "35:4" },
        { term: "وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ", meaning: "To Allah all matters are returned", explanation: "Ultimate judgment belongs to Allah alone", verseRef: "35:4" }
      ]
    },

    worldlyDeception: {
      name: "Worldly Life & Deception",
      nameArabic: "الدنيا والغرور",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: "Indeed Allah's promise is true", explanation: "Certainty of divine promises - Hereafter is real", verseRef: "35:5" },
        { term: "فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا", meaning: "So let not worldly life deceive you", explanation: "Warning against being fooled by temporary pleasures", verseRef: "35:5" },
        { term: "وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ", meaning: "Let not the Deceiver deceive you about Allah", explanation: "Satan deceives by making people feel safe from Allah's punishment", verseRef: "35:5" }
      ]
    },

    satanWarning: {
      name: "Satan - The Open Enemy",
      nameArabic: "الشيطان العدو",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ", meaning: "Satan is your enemy", explanation: "Clear declaration - Satan is not friend or neutral", verseRef: "35:6" },
        { term: "فَاتَّخِذُوهُ عَدُوًّا", meaning: "So treat him as an enemy", explanation: "Practical command - act accordingly", verseRef: "35:6" },
        { term: "إِنَّمَا يَدْعُو حِزْبَهُ", meaning: "He only invites his party", explanation: "Satan calls people to join his faction", verseRef: "35:6" },
        { term: "لِيَكُونُوا مِنْ أَصْحَابِ السَّعِيرِ", meaning: "To be among companions of the Blaze", explanation: "Ultimate goal of Satan - dragging people to Hell", verseRef: "35:6" }
      ]
    },

    twoDestinations: {
      name: "Two Eternal Destinations",
      nameArabic: "المصيران",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "الَّذِينَ كَفَرُوا لَهُمْ عَذَابٌ شَدِيدٌ", meaning: "Those who disbelieve will have severe punishment", explanation: "Disbelievers face intense torment", verseRef: "35:7" },
        { term: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", meaning: "Those who believe and do good", explanation: "Faith plus action = salvation", verseRef: "35:7" },
        { term: "لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ", meaning: "For them is forgiveness and great reward", explanation: "Believers receive both pardon and reward", verseRef: "35:7" }
      ]
    },

    blindnessVsInsight: {
      name: "Spiritual Blindness vs Insight",
      nameArabic: "العمى والبصيرة",
      color: "#3B82F6",
      icon: "Eye",
      concepts: [
        { term: "أَفَمَن زُيِّنَ لَهُ سُوءُ عَمَلِهِ", meaning: "Is one whose evil deeds are beautified for him", explanation: "Evil seems good to the misguided", verseRef: "35:8" },
        { term: "فَرَآهُ حَسَنًا", meaning: "So he sees it as good", explanation: "Perception corrupted - wrong appears right", verseRef: "35:8" },
        { term: "فَإِنَّ اللَّهَ يُضِلُّ مَن يَشَاءُ", meaning: "Allah leaves astray whom He wills", explanation: "Misguidance as consequence of choices", verseRef: "35:8" },
        { term: "وَيَهْدِي مَن يَشَاءُ", meaning: "And guides whom He wills", explanation: "Guidance as divine gift to seekers", verseRef: "35:8" },
        { term: "فَلَا تَذْهَبْ نَفْسُكَ عَلَيْهِمْ حَسَرَاتٍ", meaning: "So let not your soul perish in sorrow for them", explanation: "Prophet told not to grieve excessively over deniers", verseRef: "35:8" }
      ]
    },

    resurrectionProofs: {
      name: "Proofs of Resurrection",
      nameArabic: "براهين البعث",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "وَاللَّهُ الَّذِي أَرْسَلَ الرِّيَاحَ", meaning: "Allah is the One who sends winds", explanation: "Wind as divine instrument", verseRef: "35:9" },
        { term: "فَتُثِيرُ سَحَابًا", meaning: "Which stir up clouds", explanation: "Natural process reflecting divine control", verseRef: "35:9" },
        { term: "فَسُقْنَاهُ إِلَىٰ بَلَدٍ مَّيِّتٍ", meaning: "We drive it to a dead land", explanation: "Rain directed to barren areas", verseRef: "35:9" },
        { term: "فَأَحْيَيْنَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: "We give life to earth after its death", explanation: "Dead land revived - parallel to resurrection", verseRef: "35:9" },
        { term: "كَذَٰلِكَ النُّشُورُ", meaning: "Thus is the resurrection", explanation: "Same power that revives land will resurrect humans", verseRef: "35:9" }
      ]
    },

    honorThroughAllah: {
      name: "Honor Belongs to Allah",
      nameArabic: "العزة لله",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "مَن كَانَ يُرِيدُ الْعِزَّةَ", meaning: "Whoever desires honor", explanation: "All who seek honor should know its source", verseRef: "35:10" },
        { term: "فَلِلَّهِ الْعِزَّةُ جَمِيعًا", meaning: "To Allah belongs all honor", explanation: "Honor is exclusively Allah's to bestow", verseRef: "35:10" },
        { term: "إِلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ", meaning: "To Him ascends good speech", explanation: "Good words rise to Allah - includes dhikr, dua, praise", verseRef: "35:10" },
        { term: "وَالْعَمَلُ الصَّالِحُ يَرْفَعُهُ", meaning: "And righteous deeds lift it up", explanation: "Good deeds elevate good speech - or speech elevates deeds", verseRef: "35:10" },
        { term: "وَالَّذِينَ يَمْكُرُونَ السَّيِّئَاتِ لَهُمْ عَذَابٌ شَدِيدٌ", meaning: "Those who plot evil will have severe punishment", explanation: "Evil schemers face harsh consequence", verseRef: "35:10" }
      ]
    },

    humanCreation: {
      name: "Human Creation from Earth",
      nameArabic: "خلق الإنسان من تراب",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَاللَّهُ خَلَقَكُم مِّن تُرَابٍ", meaning: "Allah created you from dust", explanation: "Adam's origin - mineral foundation of body", verseRef: "35:11" },
        { term: "ثُمَّ مِن نُّطْفَةٍ", meaning: "Then from a drop", explanation: "Subsequent generations from reproductive fluid", verseRef: "35:11" },
        { term: "ثُمَّ جَعَلَكُمْ أَزْوَاجًا", meaning: "Then He made you pairs", explanation: "Male and female - complementary creation", verseRef: "35:11" },
        { term: "وَمَا تَحْمِلُ مِنْ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلْمِهِ", meaning: "No female conceives or gives birth except by His knowledge", explanation: "Every pregnancy and birth known to Allah", verseRef: "35:11" },
        { term: "وَمَا يُعَمَّرُ مِن مُّعَمَّرٍ وَلَا يُنقَصُ مِنْ عُمُرِهِ إِلَّا فِي كِتَابٍ", meaning: "No one lives long or has life cut short except in a record", explanation: "Every lifespan decreed and recorded", verseRef: "35:11" }
      ]
    },

    twoSeasParable: {
      name: "Parable of Two Seas",
      nameArabic: "مثل البحرين",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَمَا يَسْتَوِي الْبَحْرَانِ", meaning: "Not equal are the two seas", explanation: "Two types of water as metaphor for people", verseRef: "35:12" },
        { term: "هَٰذَا عَذْبٌ فُرَاتٌ سَائِغٌ شَرَابُهُ", meaning: "This one fresh, sweet, pleasant to drink", explanation: "Fresh water - like the believer", verseRef: "35:12" },
        { term: "وَهَٰذَا مِلْحٌ أُجَاجٌ", meaning: "And this one salty, bitter", explanation: "Salt water - like the disbeliever", verseRef: "35:12" },
        { term: "وَمِن كُلٍّ تَأْكُلُونَ لَحْمًا طَرِيًّا", meaning: "From each you eat fresh meat", explanation: "Both seas provide food - Allah provides through both", verseRef: "35:12" },
        { term: "وَتَسْتَخْرِجُونَ حِلْيَةً تَلْبَسُونَهَا", meaning: "Extract ornaments you wear", explanation: "Pearls from both - beauty from different sources", verseRef: "35:12" },
        { term: "وَتَرَى الْفُلْكَ فِيهِ مَوَاخِرَ", meaning: "You see ships sailing through them", explanation: "Navigation - Allah's blessing in transportation", verseRef: "35:12" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs of Power",
      nameArabic: "الآيات الكونية",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "يُولِجُ اللَّيْلَ فِي النَّهَارِ", meaning: "He merges night into day", explanation: "Gradual transition - sunrise and sunset", verseRef: "35:13" },
        { term: "وَيُولِجُ النَّهَارَ فِي اللَّيْلِ", meaning: "And merges day into night", explanation: "Continuous cycle under divine control", verseRef: "35:13" },
        { term: "وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ", meaning: "And subjected sun and moon", explanation: "Celestial bodies in divine service", verseRef: "35:13" },
        { term: "كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى", meaning: "Each running for a specified term", explanation: "Orbits continue until appointed end", verseRef: "35:13" },
        { term: "ذَٰلِكُمُ اللَّهُ رَبُّكُمْ لَهُ الْمُلْكُ", meaning: "That is Allah, your Lord - to Him belongs sovereignty", explanation: "All power and dominion belong to Allah", verseRef: "35:13" }
      ]
    },

    idolsPowerlessness: {
      name: "Powerlessness of Idols",
      nameArabic: "عجز الأصنام",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ تَدْعُونَ مِن دُونِهِ", meaning: "Those you invoke besides Him", explanation: "False gods that people call upon", verseRef: "35:13" },
        { term: "مَا يَمْلِكُونَ مِن قِطْمِيرٍ", meaning: "Do not possess even a qitmir", explanation: "Qitmir - thin membrane on date seed, smallest thing", verseRef: "35:13" },
        { term: "إِن تَدْعُوهُمْ لَا يَسْمَعُوا دُعَاءَكُمْ", meaning: "If you call them, they do not hear your call", explanation: "Idols are deaf - cannot respond", verseRef: "35:14" },
        { term: "وَلَوْ سَمِعُوا مَا اسْتَجَابُوا لَكُمْ", meaning: "Even if they heard, they could not respond", explanation: "Powerless even if hearing existed", verseRef: "35:14" },
        { term: "وَيَوْمَ الْقِيَامَةِ يَكْفُرُونَ بِشِرْكِكُمْ", meaning: "On Resurrection Day they will deny your association", explanation: "False gods will disown worshippers", verseRef: "35:14" }
      ]
    },

    humanDependence: {
      name: "Human Dependence on Allah",
      nameArabic: "افتقار الإنسان لله",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "يَا أَيُّهَا النَّاسُ أَنتُمُ الْفُقَرَاءُ إِلَى اللَّهِ", meaning: "O people, you are the poor in need of Allah", explanation: "Fundamental human reality - total dependence", verseRef: "35:15" },
        { term: "وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ", meaning: "And Allah is the Free of need, the Praiseworthy", explanation: "Allah needs nothing while deserving all praise", verseRef: "35:15" },
        { term: "إِن يَشَأْ يُذْهِبْكُمْ", meaning: "If He wills, He can remove you", explanation: "Allah can eliminate entire humanity", verseRef: "35:16" },
        { term: "وَيَأْتِ بِخَلْقٍ جَدِيدٍ", meaning: "And bring a new creation", explanation: "Allah can create anew - not dependent on us", verseRef: "35:16" },
        { term: "وَمَا ذَٰلِكَ عَلَى اللَّهِ بِعَزِيزٍ", meaning: "And that is not difficult for Allah", explanation: "Nothing is hard for Allah", verseRef: "35:17" }
      ]
    },

    individualAccountability: {
      name: "Individual Accountability",
      nameArabic: "المسؤولية الفردية",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ", meaning: "No bearer of burdens will bear burden of another", explanation: "Each person carries own sins only", verseRef: "35:18" },
        { term: "وَإِن تَدْعُ مُثْقَلَةٌ إِلَىٰ حِمْلِهَا", meaning: "If a heavily burdened soul calls for help", explanation: "Cannot transfer sin to another", verseRef: "35:18" },
        { term: "لَا يُحْمَلْ مِنْهُ شَيْءٌ وَلَوْ كَانَ ذَا قُرْبَىٰ", meaning: "Nothing will be carried, even if relative", explanation: "Family ties cannot transfer burdens", verseRef: "35:18" },
        { term: "إِنَّمَا تُنذِرُ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ", meaning: "You only warn those who fear their Lord unseen", explanation: "Warning benefits those with inner fear", verseRef: "35:18" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: "And establish prayer", explanation: "Prayer as sign of responsiveness to warning", verseRef: "35:18" },
        { term: "وَمَن تَزَكَّىٰ فَإِنَّمَا يَتَزَكَّىٰ لِنَفْسِهِ", meaning: "Whoever purifies himself does so for his own benefit", explanation: "Self-purification benefits only the self", verseRef: "35:18" }
      ]
    },

    lightVsDarkness: {
      name: "Light vs Darkness",
      nameArabic: "النور والظلمات",
      color: "#F59E0B",
      icon: "Sun",
      concepts: [
        { term: "وَمَا يَسْتَوِي الْأَعْمَىٰ وَالْبَصِيرُ", meaning: "Not equal are the blind and the seeing", explanation: "Disbeliever vs believer - fundamentally different", verseRef: "35:19" },
        { term: "وَلَا الظُّلُمَاتُ وَلَا النُّورُ", meaning: "Nor are darkness and light", explanation: "Misguidance and guidance - opposites", verseRef: "35:20" },
        { term: "وَلَا الظِّلُّ وَلَا الْحَرُورُ", meaning: "Nor shade and heat", explanation: "Comfort of faith vs burning of disbelief", verseRef: "35:21" },
        { term: "وَمَا يَسْتَوِي الْأَحْيَاءُ وَلَا الْأَمْوَاتُ", meaning: "Not equal are the living and the dead", explanation: "Spiritual life vs spiritual death", verseRef: "35:22" },
        { term: "إِنَّ اللَّهَ يُسْمِعُ مَن يَشَاءُ", meaning: "Allah causes to hear whom He wills", explanation: "Hearing truth is divine gift", verseRef: "35:22" },
        { term: "وَمَا أَنتَ بِمُسْمِعٍ مَّن فِي الْقُبُورِ", meaning: "You cannot make hear those in graves", explanation: "Spiritually dead cannot hear Prophet", verseRef: "35:22" }
      ]
    },

    propheticMission: {
      name: "The Prophetic Mission",
      nameArabic: "رسالة النبي",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "إِنْ أَنتَ إِلَّا نَذِيرٌ", meaning: "You are only a warner", explanation: "Prophet's role is warning, not compelling", verseRef: "35:23" },
        { term: "إِنَّا أَرْسَلْنَاكَ بِالْحَقِّ", meaning: "We have sent you with truth", explanation: "Divine commission with truth", verseRef: "35:24" },
        { term: "بَشِيرًا وَنَذِيرًا", meaning: "As a bringer of good news and warner", explanation: "Dual role - glad tidings and warnings", verseRef: "35:24" },
        { term: "وَإِن مِّنْ أُمَّةٍ إِلَّا خَلَا فِيهَا نَذِيرٌ", meaning: "There is no nation but a warner passed among them", explanation: "Every nation received a messenger", verseRef: "35:24" }
      ]
    },

    patternsOfDenial: {
      name: "Patterns of Denial",
      nameArabic: "سنن التكذيب",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَإِن يُكَذِّبُوكَ فَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِم", meaning: "If they deny you, those before them denied", explanation: "Denial is historical pattern", verseRef: "35:25" },
        { term: "جَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ", meaning: "Their messengers came with clear proofs", explanation: "Evidence was always provided", verseRef: "35:25" },
        { term: "وَبِالزُّبُرِ", meaning: "And with scriptures", explanation: "Written revelation given", verseRef: "35:25" },
        { term: "وَبِالْكِتَابِ الْمُنِيرِ", meaning: "And with enlightening Book", explanation: "Illuminating scripture sent", verseRef: "35:25" },
        { term: "ثُمَّ أَخَذْتُ الَّذِينَ كَفَرُوا", meaning: "Then I seized those who disbelieved", explanation: "Divine punishment followed denial", verseRef: "35:26" },
        { term: "فَكَيْفَ كَانَ نَكِيرِ", meaning: "How was My punishment?", explanation: "Rhetorical - punishment was severe", verseRef: "35:26" }
      ]
    },

    creationDiversity: {
      name: "Diversity in Creation",
      nameArabic: "تنوع الخلق",
      color: "#06B6D4",
      icon: "Sparkles",
      concepts: [
        { term: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: "Do you not see Allah sends water from sky?", explanation: "Rain as source of diversity", verseRef: "35:27" },
        { term: "فَأَخْرَجْنَا بِهِ ثَمَرَاتٍ مُّخْتَلِفًا أَلْوَانُهَا", meaning: "With it We produce fruits of varying colors", explanation: "Fruit diversity from same water", verseRef: "35:27" },
        { term: "وَمِنَ الْجِبَالِ جُدَدٌ بِيضٌ وَحُمْرٌ", meaning: "And in mountains are streaks white and red", explanation: "Mountain colors - geological diversity", verseRef: "35:27" },
        { term: "مُّخْتَلِفٌ أَلْوَانُهَا وَغَرَابِيبُ سُودٌ", meaning: "Varying in color, and some intensely black", explanation: "Range of colors in nature", verseRef: "35:27" },
        { term: "وَمِنَ النَّاسِ وَالدَّوَابِّ وَالْأَنْعَامِ مُخْتَلِفٌ أَلْوَانُهُ", meaning: "And among people, creatures, livestock - varying colors", explanation: "Diversity in living beings", verseRef: "35:28" }
      ]
    },

    scholarsFearAllah: {
      name: "Scholars Who Fear Allah",
      nameArabic: "العلماء يخشون الله",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ", meaning: "Only those who have knowledge fear Allah among His servants", explanation: "True knowledge leads to khashya (awe-filled fear)", verseRef: "35:28" },
        { term: "إِنَّ اللَّهَ عَزِيزٌ غَفُورٌ", meaning: "Allah is Almighty, Forgiving", explanation: "Power and mercy combined", verseRef: "35:28" }
      ]
    },

    believersReward: {
      name: "Reward for Believers",
      nameArabic: "جزاء المؤمنين",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ", meaning: "Those who recite the Book of Allah", explanation: "Regular Quran recitation", verseRef: "35:29" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: "And establish prayer", explanation: "Consistent prayer practice", verseRef: "35:29" },
        { term: "وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً", meaning: "And spend from what We provided secretly and publicly", explanation: "Charity both hidden and open", verseRef: "35:29" },
        { term: "يَرْجُونَ تِجَارَةً لَّن تَبُورَ", meaning: "Hoping for a trade that will never fail", explanation: "Investment with Allah never loses", verseRef: "35:29" },
        { term: "لِيُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُم مِّن فَضْلِهِ", meaning: "That He may pay them full wages and increase from His bounty", explanation: "Full reward plus extra from Allah's generosity", verseRef: "35:30" }
      ]
    },

    quranTruth: {
      name: "Truth of the Quran",
      nameArabic: "صدق القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَالَّذِي أَوْحَيْنَا إِلَيْكَ مِنَ الْكِتَابِ هُوَ الْحَقُّ", meaning: "What We revealed to you of the Book is the truth", explanation: "Quran is absolute truth", verseRef: "35:31" },
        { term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ", meaning: "Confirming what was before it", explanation: "Quran confirms previous scriptures", verseRef: "35:31" },
        { term: "إِنَّ اللَّهَ بِعِبَادِهِ لَخَبِيرٌ بَصِيرٌ", meaning: "Allah is All-Aware, All-Seeing of His servants", explanation: "Allah fully knows and sees servants", verseRef: "35:31" }
      ]
    },

    inheritorsOfBook: {
      name: "Three Categories of Inheritors",
      nameArabic: "أصناف ورثة الكتاب",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ عِبَادِنَا", meaning: "Then We gave the Book as inheritance to those We chose from Our servants", explanation: "This ummah inherited the Book", verseRef: "35:32" },
        { term: "فَمِنْهُمْ ظَالِمٌ لِّنَفْسِهِ", meaning: "Among them is he who wrongs himself", explanation: "First category: sinners who acknowledge truth", verseRef: "35:32" },
        { term: "وَمِنْهُم مُّقْتَصِدٌ", meaning: "And among them is moderate", explanation: "Second category: those who do minimum obligations", verseRef: "35:32" },
        { term: "وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ", meaning: "And among them is foremost in good deeds", explanation: "Third category: excelling in righteousness", verseRef: "35:32" },
        { term: "بِإِذْنِ اللَّهِ", meaning: "By Allah's permission", explanation: "Excellence achieved only through divine help", verseRef: "35:32" },
        { term: "ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ", meaning: "That is the great bounty", explanation: "Being chosen to inherit Book is greatest favor", verseRef: "35:32" }
      ]
    },

    paradiseDescription: {
      name: "Gardens of Eternity",
      nameArabic: "جنات عدن",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "جَنَّاتُ عَدْنٍ يَدْخُلُونَهَا", meaning: "Gardens of perpetual residence they will enter", explanation: "All three categories enter Paradise", verseRef: "35:33" },
        { term: "يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍ", meaning: "Adorned with bracelets of gold", explanation: "Golden jewelry in Paradise", verseRef: "35:33" },
        { term: "وَلُؤْلُؤًا", meaning: "And pearl", explanation: "Pearl adornments", verseRef: "35:33" },
        { term: "وَلِبَاسُهُمْ فِيهَا حَرِيرٌ", meaning: "And their garments therein will be silk", explanation: "Silk clothing - forbidden in dunya for men", verseRef: "35:33" },
        { term: "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ", meaning: "Praise to Allah who removed from us sorrow", explanation: "No grief in Paradise", verseRef: "35:34" },
        { term: "إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ", meaning: "Indeed, our Lord is Forgiving, Appreciative", explanation: "Shakur - Allah appreciates small deeds greatly", verseRef: "35:34" },
        { term: "الَّذِي أَحَلَّنَا دَارَ الْمُقَامَةِ مِن فَضْلِهِ", meaning: "Who settled us in the Home of Permanence by His bounty", explanation: "Eternal residence through divine grace", verseRef: "35:35" },
        { term: "لَا يَمَسُّنَا فِيهَا نَصَبٌ", meaning: "No fatigue touches us therein", explanation: "No tiredness in Paradise", verseRef: "35:35" },
        { term: "وَلَا يَمَسُّنَا فِيهَا لُغُوبٌ", meaning: "Nor does weariness touch us", explanation: "No exhaustion ever", verseRef: "35:35" }
      ]
    },

    disbelieversRegret: {
      name: "Regret of Disbelievers",
      nameArabic: "ندم الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ كَفَرُوا لَهُمْ نَارُ جَهَنَّمَ", meaning: "Those who disbelieve will have fire of Hell", explanation: "Hellfire for disbelievers", verseRef: "35:36" },
        { term: "لَا يُقْضَىٰ عَلَيْهِمْ فَيَمُوتُوا", meaning: "It is not decreed that they die", explanation: "Cannot escape through death", verseRef: "35:36" },
        { term: "وَلَا يُخَفَّفُ عَنْهُم مِّنْ عَذَابِهَا", meaning: "Nor is its punishment lightened for them", explanation: "No reduction in torment", verseRef: "35:36" },
        { term: "وَهُمْ يَصْطَرِخُونَ فِيهَا", meaning: "They will cry out therein", explanation: "Screaming in Hell", verseRef: "35:37" },
        { term: "رَبَّنَا أَخْرِجْنَا نَعْمَلْ صَالِحًا", meaning: "Our Lord, take us out - we will do good", explanation: "Futile plea for second chance", verseRef: "35:37" },
        { term: "أَوَلَمْ نُعَمِّرْكُم مَّا يَتَذَكَّرُ فِيهِ مَن تَذَكَّرَ", meaning: "Did We not give you life long enough for one who reflects to reflect?", explanation: "Enough time was given to understand", verseRef: "35:37" },
        { term: "وَجَاءَكُمُ النَّذِيرُ", meaning: "And the warner came to you", explanation: "Prophet warned them clearly", verseRef: "35:37" },
        { term: "فَذُوقُوا فَمَا لِلظَّالِمِينَ مِن نَّصِيرٍ", meaning: "So taste, for wrongdoers have no helper", explanation: "No one to aid disbelievers", verseRef: "35:37" }
      ]
    },

    allahsKnowledge: {
      name: "Allah's Comprehensive Knowledge",
      nameArabic: "علم الله الشامل",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "إِنَّ اللَّهَ عَالِمُ غَيْبِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Allah is Knower of unseen of heavens and earth", explanation: "Nothing hidden in universe", verseRef: "35:38" },
        { term: "إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ", meaning: "He is Knowing of what is in the breasts", explanation: "Knows inner thoughts and feelings", verseRef: "35:38" }
      ]
    },

    stewardshipOnEarth: {
      name: "Human Stewardship",
      nameArabic: "الاستخلاف في الأرض",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "هُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ فِي الْأَرْضِ", meaning: "He is the One who made you successors on earth", explanation: "Humans as stewards - test of responsibility", verseRef: "35:39" },
        { term: "فَمَن كَفَرَ فَعَلَيْهِ كُفْرُهُ", meaning: "Whoever disbelieves - upon him is his disbelief", explanation: "Consequences fall on individual", verseRef: "35:39" },
        { term: "وَلَا يَزِيدُ الْكَافِرِينَ كُفْرُهُمْ عِندَ رَبِّهِمْ إِلَّا مَقْتًا", meaning: "Disbelief increases disbelievers only in hatred from their Lord", explanation: "Disbelief brings divine displeasure", verseRef: "35:39" },
        { term: "وَلَا يَزِيدُ الْكَافِرِينَ كُفْرُهُمْ إِلَّا خَسَارًا", meaning: "Disbelief increases disbelievers only in loss", explanation: "Disbelief is pure loss", verseRef: "35:39" }
      ]
    },

    challengeToIdolaters: {
      name: "Challenge to Idolaters",
      nameArabic: "تحدي المشركين",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "قُلْ أَرَأَيْتُمْ شُرَكَاءَكُمُ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ", meaning: "Say: Have you considered your partners you invoke besides Allah?", explanation: "Challenge to think about idols", verseRef: "35:40" },
        { term: "أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ", meaning: "Show me what they created of earth", explanation: "Demand for proof of creation", verseRef: "35:40" },
        { term: "أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ", meaning: "Or have they partnership in heavens?", explanation: "No share in cosmic creation", verseRef: "35:40" },
        { term: "أَمْ آتَيْنَاهُمْ كِتَابًا", meaning: "Or have We given them a book?", explanation: "No scripture supports their worship", verseRef: "35:40" },
        { term: "بَلْ إِن يَعِدُ الظَّالِمُونَ بَعْضُهُم بَعْضًا إِلَّا غُرُورًا", meaning: "Rather, wrongdoers promise each other only delusion", explanation: "Mutual deception among misguided", verseRef: "35:40" }
      ]
    },

    cosmicStability: {
      name: "Allah Upholds the Universe",
      nameArabic: "الله يمسك السماوات والأرض",
      color: "#F59E0B",
      icon: "Globe",
      concepts: [
        { term: "إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَن تَزُولَا", meaning: "Allah holds heavens and earth lest they cease", explanation: "Divine power maintains cosmic order", verseRef: "35:41" },
        { term: "وَلَئِن زَالَتَا إِنْ أَمْسَكَهُمَا مِنْ أَحَدٍ مِّن بَعْدِهِ", meaning: "If they were to cease, none could hold them after Him", explanation: "Only Allah prevents cosmic collapse", verseRef: "35:41" },
        { term: "إِنَّهُ كَانَ حَلِيمًا غَفُورًا", meaning: "He is Forbearing, Forgiving", explanation: "Despite power, Allah is gentle and pardoning", verseRef: "35:41" }
      ]
    },

    brokenOaths: {
      name: "Broken Oaths of Pagans",
      nameArabic: "نقض الأيمان",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَأَقْسَمُوا بِاللَّهِ جَهْدَ أَيْمَانِهِمْ", meaning: "They swore by Allah their strongest oaths", explanation: "Pagans made solemn promises", verseRef: "35:42" },
        { term: "لَئِن جَاءَهُمْ نَذِيرٌ لَيَكُونُنَّ أَهْدَىٰ مِنْ إِحْدَى الْأُمَمِ", meaning: "If a warner came they would be more guided than any nation", explanation: "Claimed they would believe if warned", verseRef: "35:42" },
        { term: "فَلَمَّا جَاءَهُمْ نَذِيرٌ مَّا زَادَهُمْ إِلَّا نُفُورًا", meaning: "But when warner came, it only increased their aversion", explanation: "Reality opposite of claim", verseRef: "35:42" }
      ]
    },

    arroganceAndSchemes: {
      name: "Arrogance & Evil Schemes",
      nameArabic: "الاستكبار والمكر",
      color: "#EF4444",
      icon: "Crown",
      concepts: [
        { term: "اسْتِكْبَارًا فِي الْأَرْضِ", meaning: "Arrogance in the land", explanation: "Pride was root of rejection", verseRef: "35:43" },
        { term: "وَمَكْرَ السَّيِّئِ", meaning: "And plotting of evil", explanation: "Scheming against truth", verseRef: "35:43" },
        { term: "وَلَا يَحِيقُ الْمَكْرُ السَّيِّئُ إِلَّا بِأَهْلِهِ", meaning: "Evil plotting encompasses only its people", explanation: "Evil schemes backfire on schemers", verseRef: "35:43" },
        { term: "فَهَلْ يَنظُرُونَ إِلَّا سُنَّتَ الْأَوَّلِينَ", meaning: "Do they await except way of former peoples?", explanation: "Same fate as destroyed nations", verseRef: "35:43" },
        { term: "فَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَبْدِيلًا", meaning: "You will never find change in Allah's way", explanation: "Divine patterns never change", verseRef: "35:43" },
        { term: "وَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَحْوِيلًا", meaning: "Nor will you find alteration in Allah's way", explanation: "No deviation from divine law", verseRef: "35:43" }
      ]
    },

    lessonsFromHistory: {
      name: "Lessons from Destroyed Nations",
      nameArabic: "عبر من الأمم الهالكة",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ", meaning: "Have they not traveled through earth?", explanation: "Call to observe historical ruins", verseRef: "35:44" },
        { term: "فَيَنظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلِهِمْ", meaning: "And see how was end of those before them?", explanation: "Fate of previous deniers visible", verseRef: "35:44" },
        { term: "وَكَانُوا أَشَدَّ مِنْهُمْ قُوَّةً", meaning: "They were greater than them in power", explanation: "Stronger nations were destroyed", verseRef: "35:44" },
        { term: "وَمَا كَانَ اللَّهُ لِيُعْجِزَهُ مِن شَيْءٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ", meaning: "Nothing in heavens or earth can escape Allah", explanation: "No one can outrun divine decree", verseRef: "35:44" },
        { term: "إِنَّهُ كَانَ عَلِيمًا قَدِيرًا", meaning: "He is All-Knowing, All-Powerful", explanation: "Knowledge and power combined", verseRef: "35:44" }
      ]
    },

    divinePatience: {
      name: "Divine Patience with Sinners",
      nameArabic: "حلم الله بالعصاة",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَلَوْ يُؤَاخِذُ اللَّهُ النَّاسَ بِمَا كَسَبُوا", meaning: "If Allah were to punish people for what they earned", explanation: "Hypothetical immediate punishment", verseRef: "35:45" },
        { term: "مَا تَرَكَ عَلَىٰ ظَهْرِهَا مِن دَابَّةٍ", meaning: "He would not leave on its back any creature", explanation: "All would be destroyed if judged immediately", verseRef: "35:45" },
        { term: "وَلَٰكِن يُؤَخِّرُهُمْ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: "But He defers them to an appointed term", explanation: "Delay is mercy - time to repent", verseRef: "35:45" },
        { term: "فَإِذَا جَاءَ أَجَلُهُمْ", meaning: "When their term comes", explanation: "Appointed time will arrive", verseRef: "35:45" },
        { term: "فَإِنَّ اللَّهَ كَانَ بِعِبَادِهِ بَصِيرًا", meaning: "Allah is Ever-Seeing of His servants", explanation: "Allah sees all and judges fairly", verseRef: "35:45" }
      ]
    }
  },

  relationships: [
    { from: "فاطر السماوات والأرض", to: "جاعل الملائكة رسلا", type: "action", description: "The Originator also appointed angels as messengers" },
    { from: "ما يفتح الله من رحمة", to: "لا ممسك لها", type: "consequence", description: "When Allah grants mercy, none can prevent it" },
    { from: "الشيطان عدو", to: "فاتخذوه عدوا", type: "command", description: "Recognizing enemy requires treating as enemy" },
    { from: "فأحيينا به الأرض", to: "كذلك النشور", type: "analogy", description: "Dead earth revived parallels resurrection" },
    { from: "الكلم الطيب", to: "العمل الصالح يرفعه", type: "synergy", description: "Good speech and deeds work together" },
    { from: "العلماء", to: "يخشى الله", type: "cause", description: "True knowledge leads to fearing Allah" },
    { from: "ظالم لنفسه", to: "مقتصد", type: "progression", description: "Levels of faith among inheritors" },
    { from: "مقتصد", to: "سابق بالخيرات", type: "progression", description: "From moderate to excelling" },
    { from: "المكر السيئ", to: "إلا بأهله", type: "consequence", description: "Evil schemes harm the schemers" },
    { from: "سنة الأولين", to: "لن تجد تبديلا", type: "permanence", description: "Divine patterns never change" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Originator", verses: "35:1-3", description: "Allah as Creator, angels as messengers, call to remember blessings" },
      { stage: 2, theme: "Prophetic Comfort", verses: "35:4-8", description: "Denial is historical, worldly deception warned, Satan as enemy" },
      { stage: 3, theme: "Signs of Resurrection", verses: "35:9-11", description: "Winds, rain, dead land revived, human creation from dust" },
      { stage: 4, theme: "Two Seas Parable", verses: "35:12-14", description: "Fresh vs salty water, cosmic signs, idols powerless" },
      { stage: 5, theme: "Human Dependence", verses: "35:15-18", description: "All need Allah, individual accountability, purification" },
      { stage: 6, theme: "Light vs Darkness", verses: "35:19-26", description: "Blind vs seeing, prophetic mission, patterns of denial" },
      { stage: 7, theme: "Creation Diversity", verses: "35:27-28", description: "Colors in nature, scholars who fear Allah" },
      { stage: 8, theme: "Believers' Trade", verses: "35:29-31", description: "Recitation, prayer, charity as profitable investment" },
      { stage: 9, theme: "Three Inheritors", verses: "35:32-35", description: "Wronging self, moderate, and foremost - all enter Paradise" },
      { stage: 10, theme: "Hellfire Regret", verses: "35:36-38", description: "Disbelievers' torment, futile pleas, missed opportunities" },
      { stage: 11, theme: "Stewardship Test", verses: "35:39-41", description: "Successors on earth, challenge to idolaters, cosmic stability" },
      { stage: 12, theme: "Divine Patterns", verses: "35:42-45", description: "Broken oaths, arrogance, unchanging divine ways, divine patience" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Remember blessings daily", how: "Ask yourself: 'Is there any creator besides Allah providing for me?'", verse: "35:3" },
      { principle: "Treat Satan as enemy", how: "Recognize his tricks, seek refuge, don't follow his whispers", verse: "35:6" },
      { principle: "Don't be deceived by dunya", how: "Remember that Allah's promise is true - this life is temporary", verse: "35:5" },
      { principle: "Good speech with good deeds", how: "Back up your words with actions - both rise together to Allah", verse: "35:10" },
      { principle: "Seek knowledge that increases fear of Allah", how: "True 'ilm leads to khashya - study to grow in awe of Allah", verse: "35:28" },
      { principle: "Profitable trade with Allah", how: "Recite Quran, pray, give charity secretly and openly", verse: "35:29" },
      { principle: "Strive to be foremost", how: "Don't settle for minimum - race to be among sabiqeen", verse: "35:32" },
      { principle: "Learn from history", how: "Travel, read, reflect on destroyed nations - stronger than you were ruined", verse: "35:44" },
      { principle: "Use time wisely", how: "You were given enough life to reflect - don't waste it", verse: "35:37" },
      { principle: "Evil schemes backfire", how: "Never plot evil - it only harms the plotter", verse: "35:43" }
    ]
  },

  uniqueInsight: {
    title: "The Three Inheritors and Universal Salvation",
    insight: "Surah Fatir contains one of the most hope-giving verses in the Quran (35:32-33). After stating that the Book was given as inheritance to chosen servants, it divides them into three categories: (1) Those who wrong themselves (zalim li-nafsihi), (2) The moderate (muqtasid), and (3) Those foremost in good (sabiq bil-khayrat). Remarkably, ALL THREE categories enter Paradise (35:33)! This shows that even those who sin but remain within the fold of faith have hope. The 'wronging oneself' refers to sins while still believing - not kufr. Scholars note this verse provides immense comfort: even those struggling with sins are among the 'chosen servants' if they hold onto faith. The surah also uniquely connects creation diversity (colors in fruits, mountains, animals, humans - 35:27-28) with scholars fearing Allah. True scholarship leads to wonder at Allah's creative power. The opening (Fatir - Originator) and this connection suggest that studying creation deeply should increase, not decrease, faith."
  },

  historicalContext: {
    note: "Revealed in the middle Makkan period when the Prophet faced persistent rejection. The surah opens by establishing Allah as Fatir - the One who originates everything from nothing. This countered the Makkan claim that resurrection was impossible. The reference to angels having varying numbers of wings (35:1) corrected pagan beliefs about angels. The parable of two seas (35:12) would resonate with the trading Quraysh familiar with both the Red Sea (salty) and fresh water sources. The verse about scholars fearing Allah (35:28) emphasized that true knowledge leads to humility before God, contrasting with the arrogant 'knowledge' of Makkan leaders. The three categories of inheritors (35:32) gave hope to new Muslims struggling between faith and their environment."
  },

  linguisticFeatures: {
    features: [
      { feature: "فَاطِر", example: "Originator (Fatir)", effect: "Unique divine name - One who splits open non-existence to create" },
      { feature: "مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ", example: "Two, three, four (wings)", effect: "Distributive numerals showing variety" },
      { feature: "قِطْمِير", example: "Thin membrane on date seed", effect: "Smallest conceivable thing - idols don't own even this" },
      { feature: "الْفُقَرَاءُ إِلَى اللَّهِ", example: "The poor in need of Allah", effect: "All humanity defined by poverty before Allah" },
      { feature: "غَرَابِيبُ سُودٌ", example: "Intensely black", effect: "Doubled adjective for emphasis - jet black" },
      { feature: "تِجَارَةً لَّن تَبُورَ", example: "Trade that will never fail", effect: "Commerce metaphor - believers as smart investors" },
      { feature: "سُنَّتَ الْأَوَّلِينَ", example: "Way of former peoples", effect: "Divine pattern - consistent across history" }
    ]
  },

  keyTerms: [
    { term: "فَاطِر", transliteration: "Fatir", meaning: "Originator - One who creates from nothing" },
    { term: "الْغَرُور", transliteration: "Al-Gharur", meaning: "The Deceiver (Satan)" },
    { term: "النُّشُور", transliteration: "An-Nushur", meaning: "The Resurrection - rising from graves" },
    { term: "الْعِزَّة", transliteration: "Al-'Izzah", meaning: "Honor, might, dignity" },
    { term: "الْكَلِمُ الطَّيِّبُ", transliteration: "Al-Kalim at-Tayyib", meaning: "Good/pure speech" },
    { term: "خَلَائِف", transliteration: "Khala'if", meaning: "Successors, stewards" },
    { term: "ظَالِمٌ لِّنَفْسِهِ", transliteration: "Zalimun li-nafsihi", meaning: "One who wrongs himself" },
    { term: "مُّقْتَصِد", transliteration: "Muqtasid", meaning: "Moderate, balanced one" },
    { term: "سَابِق بِالْخَيْرَاتِ", transliteration: "Sabiq bil-khayrat", meaning: "Foremost in good deeds" },
    { term: "يَخْشَى", transliteration: "Yakhsha", meaning: "To fear with awe and knowledge" }
  ],

  angelDescription: {
    verse: 1,
    text: "جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ",
    translation: "Who made angels messengers with wings - two, three, or four",
    note: "This is one of the rare descriptions of angelic physical attributes. Jibreel is reported to have 600 wings. The varying numbers show diversity even among angels - Allah's creativity extends to all creation."
  },

  threeCategoriesDetail: {
    verse: 32,
    categories: [
      {
        arabic: "ظَالِمٌ لِّنَفْسِهِ",
        name: "Wronging oneself",
        description: "Those who commit sins while maintaining faith. They harm themselves but remain believers.",
        hope: "They still inherit the Book and enter Paradise"
      },
      {
        arabic: "مُّقْتَصِد",
        name: "The moderate",
        description: "Those who fulfill obligations and avoid prohibitions - doing the minimum required.",
        status: "Steady believers who do what is required"
      },
      {
        arabic: "سَابِق بِالْخَيْرَاتِ",
        name: "Foremost in good",
        description: "Those who excel in worship, charity, character - going beyond obligations.",
        excellence: "The highest rank - achieved only by Allah's permission"
      }
    ],
    unifyingFactor: "All three categories are from those Allah 'chose' (istafa) - all enter Paradise"
  },

  scientificReferences: {
    notes: [
      { verse: "35:9", topic: "Water cycle", note: "Wind stirs clouds, drives rain to barren land - scientific accuracy" },
      { verse: "35:11", topic: "Fetal development", note: "Conception and birth known to Allah - no pregnancy unknown to Him" },
      { verse: "35:12", topic: "Two types of water", note: "Fresh and salt water - different densities, both useful" },
      { verse: "35:27", topic: "Geological diversity", note: "Mountain colors from mineral composition - white, red, black streaks" },
      { verse: "35:41", topic: "Cosmic stability", note: "Allah holds heavens and earth from collapsing - gravitational stability" }
    ]
  }
};

export default ONTOLOGY;
