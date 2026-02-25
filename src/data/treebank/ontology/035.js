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
        { term: "فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Originator of heavens and earth", ur: "Originator of heavens and earth" }, explanation: { en: "Fatir - One who brings into existence from nothing, splitting open non-existence", ur: "Fatir - One who brings into existence from nothing, splitting open non-existence" }, verseRef: "35:1" },
        { term: "الْحَمْدُ لِلَّهِ", meaning: { en: "All praise is for Allah", ur: "تمام تعریفیں اللہ کے لیے ہیں" }, explanation: { en: "Opening with praise - establishing Allah's exclusive right to gratitude", ur: "Opening with praise - establishing Allah's exclusive right to gratitude" }, verseRef: "35:1" },
        { term: "جَاعِلِ الْمَلَائِكَةِ رُسُلًا", meaning: { en: "Who made angels messengers", ur: "Who made angels messengers" }, explanation: { en: "Angels serve as intermediaries for divine revelation", ur: "Angels serve as intermediaries for divine revelation" }, verseRef: "35:1" },
        { term: "أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ", meaning: { en: "Having wings, two, three, or four", ur: "Having wings, two, three, or four" }, explanation: { en: "Angels have varying numbers of wings - showing diversity in creation", ur: "Angels have varying numbers of wings - showing diversity in creation" }, verseRef: "35:1" },
        { term: "يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ", meaning: { en: "He increases in creation what He wills", ur: "He increases in creation what He wills" }, explanation: { en: "Allah's creative power is unlimited - no constraints", ur: "Allah's creative power is unlimited - no constraints" }, verseRef: "35:1" },
        { term: "إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: { en: "Allah is over all things powerful", ur: "Allah is over all things powerful" }, explanation: { en: "Absolute divine omnipotence", ur: "Absolute divine omnipotence" }, verseRef: "35:1" }
      ]
    },

    divineMercy: {
      name: "Divine Mercy & Providence",
      nameArabic: "الرحمة والرزق الإلهي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "مَّا يَفْتَحِ اللَّهُ لِلنَّاسِ مِن رَّحْمَةٍ", meaning: { en: "Whatever mercy Allah opens for people", ur: "Whatever mercy Allah opens for people" }, explanation: { en: "Allah is source of all mercy - none can withhold it", ur: "Allah is source of all mercy - none can withhold it" }, verseRef: "35:2" },
        { term: "فَلَا مُمْسِكَ لَهَا", meaning: { en: "None can withhold it", ur: "None can withhold it" }, explanation: { en: "When Allah grants mercy, no power can stop it", ur: "When Allah grants mercy, no power can stop it" }, verseRef: "35:2" },
        { term: "وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُ", meaning: { en: "What He withholds, none can release", ur: "What He withholds, none can release" }, explanation: { en: "When Allah withholds, no power can provide it", ur: "When Allah withholds, no power can provide it" }, verseRef: "35:2" },
        { term: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "He is the Almighty, the Wise", ur: "He is the Almighty, the Wise" }, explanation: { en: "Power combined with wisdom in divine decisions", ur: "Power combined with wisdom in divine decisions" }, verseRef: "35:2" }
      ]
    },

    gratitudeReminder: {
      name: "Call to Remember Blessings",
      nameArabic: "تذكير النعم",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ", meaning: { en: "Remember Allah's blessing upon you", ur: "Remember Allah's blessing upon you" }, explanation: { en: "Gratitude begins with remembrance of blessings", ur: "Gratitude begins with remembrance of blessings" }, verseRef: "35:3" },
        { term: "هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ", meaning: { en: "Is there any creator other than Allah?", ur: "Is there any creator other than Allah?" }, explanation: { en: "Rhetorical question - no other creator exists", ur: "Rhetorical question - no other creator exists" }, verseRef: "35:3" },
        { term: "يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: { en: "Provides for you from sky and earth", ur: "Provides for you from sky and earth" }, explanation: { en: "Rain from above, produce from below - all from Allah", ur: "Rain from above, produce from below - all from Allah" }, verseRef: "35:3" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: { en: "There is no deity except Him", ur: "اس کے سوا کوئی معبود نہیں" }, explanation: { en: "Tawheed - core message of the surah", ur: "Tawheed - core message of the surah" }, verseRef: "35:3" },
        { term: "فَأَنَّىٰ تُؤْفَكُونَ", meaning: { en: "So how are you deluded?", ur: "So how are you deluded?" }, explanation: { en: "Wonder at how people turn away despite clear evidence", ur: "Wonder at how people turn away despite clear evidence" }, verseRef: "35:3" }
      ]
    },

    prophetDenial: {
      name: "Denial of Prophets",
      nameArabic: "تكذيب الرسل",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَإِن يُكَذِّبُوكَ", meaning: { en: "And if they deny you", ur: "And if they deny you" }, explanation: { en: "Comfort to Prophet - denial is not new", ur: "Comfort to Prophet - denial is not new" }, verseRef: "35:4" },
        { term: "فَقَدْ كُذِّبَتْ رُسُلٌ مِّن قَبْلِكَ", meaning: { en: "Messengers before you were denied", ur: "Messengers before you were denied" }, explanation: { en: "Pattern of history - prophets always faced rejection", ur: "Pattern of history - prophets always faced rejection" }, verseRef: "35:4" },
        { term: "وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ", meaning: { en: "To Allah all matters are returned", ur: "To Allah all matters are returned" }, explanation: { en: "Ultimate judgment belongs to Allah alone", ur: "Ultimate judgment belongs to Allah alone" }, verseRef: "35:4" }
      ]
    },

    worldlyDeception: {
      name: "Worldly Life & Deception",
      nameArabic: "الدنيا والغرور",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: { en: "Indeed Allah's promise is true", ur: "Indeed Allah's promise is true" }, explanation: { en: "Certainty of divine promises - Hereafter is real", ur: "Certainty of divine promises - Hereafter is real" }, verseRef: "35:5" },
        { term: "فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا", meaning: { en: "So let not worldly life deceive you", ur: "So let not worldly life deceive you" }, explanation: { en: "Warning against being fooled by temporary pleasures", ur: "Warning against being fooled by temporary pleasures" }, verseRef: "35:5" },
        { term: "وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ", meaning: { en: "Let not the Deceiver deceive you about Allah", ur: "Let not the Deceiver deceive you about Allah" }, explanation: { en: "Satan deceives by making people feel safe from Allah's punishment", ur: "Satan deceives by making people feel safe from Allah's punishment" }, verseRef: "35:5" }
      ]
    },

    satanWarning: {
      name: "Satan - The Open Enemy",
      nameArabic: "الشيطان العدو",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ", meaning: { en: "Satan is your enemy", ur: "Satan is your enemy" }, explanation: { en: "Clear declaration - Satan is not friend or neutral", ur: "Clear declaration - Satan is not friend or neutral" }, verseRef: "35:6" },
        { term: "فَاتَّخِذُوهُ عَدُوًّا", meaning: { en: "So treat him as an enemy", ur: "So treat him as an enemy" }, explanation: { en: "Practical command - act accordingly", ur: "Practical command - act accordingly" }, verseRef: "35:6" },
        { term: "إِنَّمَا يَدْعُو حِزْبَهُ", meaning: { en: "He only invites his party", ur: "He only invites his party" }, explanation: { en: "Satan calls people to join his faction", ur: "Satan calls people to join his faction" }, verseRef: "35:6" },
        { term: "لِيَكُونُوا مِنْ أَصْحَابِ السَّعِيرِ", meaning: { en: "To be among companions of the Blaze", ur: "To be among companions of the Blaze" }, explanation: { en: "Ultimate goal of Satan - dragging people to Hell", ur: "Ultimate goal of Satan - dragging people to Hell" }, verseRef: "35:6" }
      ]
    },

    twoDestinations: {
      name: "Two Eternal Destinations",
      nameArabic: "المصيران",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "الَّذِينَ كَفَرُوا لَهُمْ عَذَابٌ شَدِيدٌ", meaning: { en: "Those who disbelieve will have severe punishment", ur: "Those who disbelieve will have severe punishment" }, explanation: { en: "Disbelievers face intense torment", ur: "Disbelievers face intense torment" }, verseRef: "35:7" },
        { term: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", meaning: { en: "Those who believe and do good", ur: "Those who believe and do good" }, explanation: { en: "Faith plus action = salvation", ur: "Faith plus action = salvation" }, verseRef: "35:7" },
        { term: "لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ", meaning: { en: "For them is forgiveness and great reward", ur: "For them is forgiveness and great reward" }, explanation: { en: "Believers receive both pardon and reward", ur: "Believers receive both pardon and reward" }, verseRef: "35:7" }
      ]
    },

    blindnessVsInsight: {
      name: "Spiritual Blindness vs Insight",
      nameArabic: "العمى والبصيرة",
      color: "#3B82F6",
      icon: "Eye",
      concepts: [
        { term: "أَفَمَن زُيِّنَ لَهُ سُوءُ عَمَلِهِ", meaning: { en: "Is one whose evil deeds are beautified for him", ur: "Is one whose evil deeds are beautified for him" }, explanation: { en: "Evil seems good to the misguided", ur: "Evil seems good to the misguided" }, verseRef: "35:8" },
        { term: "فَرَآهُ حَسَنًا", meaning: { en: "So he sees it as good", ur: "So he sees it as good" }, explanation: { en: "Perception corrupted - wrong appears right", ur: "Perception corrupted - wrong appears right" }, verseRef: "35:8" },
        { term: "فَإِنَّ اللَّهَ يُضِلُّ مَن يَشَاءُ", meaning: { en: "Allah leaves astray whom He wills", ur: "Allah leaves astray whom He wills" }, explanation: { en: "Misguidance as consequence of choices", ur: "Misguidance as consequence of choices" }, verseRef: "35:8" },
        { term: "وَيَهْدِي مَن يَشَاءُ", meaning: { en: "And guides whom He wills", ur: "And guides whom He wills" }, explanation: { en: "Guidance as divine gift to seekers", ur: "Guidance as divine gift to seekers" }, verseRef: "35:8" },
        { term: "فَلَا تَذْهَبْ نَفْسُكَ عَلَيْهِمْ حَسَرَاتٍ", meaning: { en: "So let not your soul perish in sorrow for them", ur: "So let not your soul perish in sorrow for them" }, explanation: { en: "Prophet told not to grieve excessively over deniers", ur: "Prophet told not to grieve excessively over deniers" }, verseRef: "35:8" }
      ]
    },

    resurrectionProofs: {
      name: "Proofs of Resurrection",
      nameArabic: "براهين البعث",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "وَاللَّهُ الَّذِي أَرْسَلَ الرِّيَاحَ", meaning: { en: "Allah is the One who sends winds", ur: "Allah is the One who sends winds" }, explanation: { en: "Wind as divine instrument", ur: "Wind as divine instrument" }, verseRef: "35:9" },
        { term: "فَتُثِيرُ سَحَابًا", meaning: { en: "Which stir up clouds", ur: "Which stir up clouds" }, explanation: { en: "Natural process reflecting divine control", ur: "Natural process reflecting divine control" }, verseRef: "35:9" },
        { term: "فَسُقْنَاهُ إِلَىٰ بَلَدٍ مَّيِّتٍ", meaning: { en: "We drive it to a dead land", ur: "We drive it to a dead land" }, explanation: { en: "Rain directed to barren areas", ur: "Rain directed to barren areas" }, verseRef: "35:9" },
        { term: "فَأَحْيَيْنَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: { en: "We give life to earth after its death", ur: "We give life to earth after its death" }, explanation: { en: "Dead land revived - parallel to resurrection", ur: "Dead land revived - parallel to resurrection" }, verseRef: "35:9" },
        { term: "كَذَٰلِكَ النُّشُورُ", meaning: { en: "Thus is the resurrection", ur: "Thus is the resurrection" }, explanation: { en: "Same power that revives land will resurrect humans", ur: "Same power that revives land will resurrect humans" }, verseRef: "35:9" }
      ]
    },

    honorThroughAllah: {
      name: "Honor Belongs to Allah",
      nameArabic: "العزة لله",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "مَن كَانَ يُرِيدُ الْعِزَّةَ", meaning: { en: "Whoever desires honor", ur: "Whoever desires honor" }, explanation: { en: "All who seek honor should know its source", ur: "All who seek honor should know its source" }, verseRef: "35:10" },
        { term: "فَلِلَّهِ الْعِزَّةُ جَمِيعًا", meaning: { en: "To Allah belongs all honor", ur: "To Allah belongs all honor" }, explanation: { en: "Honor is exclusively Allah's to bestow", ur: "Honor is exclusively Allah's to bestow" }, verseRef: "35:10" },
        { term: "إِلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ", meaning: { en: "To Him ascends good speech", ur: "To Him ascends good speech" }, explanation: { en: "Good words rise to Allah - includes dhikr, dua, praise", ur: "Good words rise to Allah - includes dhikr, dua, praise" }, verseRef: "35:10" },
        { term: "وَالْعَمَلُ الصَّالِحُ يَرْفَعُهُ", meaning: { en: "And righteous deeds lift it up", ur: "And righteous deeds lift it up" }, explanation: { en: "Good deeds elevate good speech - or speech elevates deeds", ur: "Good deeds elevate good speech - or speech elevates deeds" }, verseRef: "35:10" },
        { term: "وَالَّذِينَ يَمْكُرُونَ السَّيِّئَاتِ لَهُمْ عَذَابٌ شَدِيدٌ", meaning: { en: "Those who plot evil will have severe punishment", ur: "Those who plot evil will have severe punishment" }, explanation: { en: "Evil schemers face harsh consequence", ur: "Evil schemers face harsh consequence" }, verseRef: "35:10" }
      ]
    },

    humanCreation: {
      name: "Human Creation from Earth",
      nameArabic: "خلق الإنسان من تراب",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَاللَّهُ خَلَقَكُم مِّن تُرَابٍ", meaning: { en: "Allah created you from dust", ur: "Allah created you from dust" }, explanation: { en: "Adam's origin - mineral foundation of body", ur: "Adam's origin - mineral foundation of body" }, verseRef: "35:11" },
        { term: "ثُمَّ مِن نُّطْفَةٍ", meaning: { en: "Then from a drop", ur: "Then from a drop" }, explanation: { en: "Subsequent generations from reproductive fluid", ur: "Subsequent generations from reproductive fluid" }, verseRef: "35:11" },
        { term: "ثُمَّ جَعَلَكُمْ أَزْوَاجًا", meaning: { en: "Then He made you pairs", ur: "Then He made you pairs" }, explanation: { en: "Male and female - complementary creation", ur: "Male and female - complementary creation" }, verseRef: "35:11" },
        { term: "وَمَا تَحْمِلُ مِنْ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلْمِهِ", meaning: { en: "No female conceives or gives birth except by His knowledge", ur: "No female conceives or gives birth except by His knowledge" }, explanation: { en: "Every pregnancy and birth known to Allah", ur: "Every pregnancy and birth known to Allah" }, verseRef: "35:11" },
        { term: "وَمَا يُعَمَّرُ مِن مُّعَمَّرٍ وَلَا يُنقَصُ مِنْ عُمُرِهِ إِلَّا فِي كِتَابٍ", meaning: { en: "No one lives long or has life cut short except in a record", ur: "No one lives long or has life cut short except in a record" }, explanation: { en: "Every lifespan decreed and recorded", ur: "Every lifespan decreed and recorded" }, verseRef: "35:11" }
      ]
    },

    twoSeasParable: {
      name: "Parable of Two Seas",
      nameArabic: "مثل البحرين",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَمَا يَسْتَوِي الْبَحْرَانِ", meaning: { en: "Not equal are the two seas", ur: "Not equal are the two seas" }, explanation: { en: "Two types of water as metaphor for people", ur: "Two types of water as metaphor for people" }, verseRef: "35:12" },
        { term: "هَٰذَا عَذْبٌ فُرَاتٌ سَائِغٌ شَرَابُهُ", meaning: { en: "This one fresh, sweet, pleasant to drink", ur: "This one fresh, sweet, pleasant to drink" }, explanation: { en: "Fresh water - like the believer", ur: "Fresh water - like the believer" }, verseRef: "35:12" },
        { term: "وَهَٰذَا مِلْحٌ أُجَاجٌ", meaning: { en: "And this one salty, bitter", ur: "And this one salty, bitter" }, explanation: { en: "Salt water - like the disbeliever", ur: "Salt water - like the disbeliever" }, verseRef: "35:12" },
        { term: "وَمِن كُلٍّ تَأْكُلُونَ لَحْمًا طَرِيًّا", meaning: { en: "From each you eat fresh meat", ur: "From each you eat fresh meat" }, explanation: { en: "Both seas provide food - Allah provides through both", ur: "Both seas provide food - Allah provides through both" }, verseRef: "35:12" },
        { term: "وَتَسْتَخْرِجُونَ حِلْيَةً تَلْبَسُونَهَا", meaning: { en: "Extract ornaments you wear", ur: "Extract ornaments you wear" }, explanation: { en: "Pearls from both - beauty from different sources", ur: "Pearls from both - beauty from different sources" }, verseRef: "35:12" },
        { term: "وَتَرَى الْفُلْكَ فِيهِ مَوَاخِرَ", meaning: { en: "You see ships sailing through them", ur: "You see ships sailing through them" }, explanation: { en: "Navigation - Allah's blessing in transportation", ur: "Navigation - Allah's blessing in transportation" }, verseRef: "35:12" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs of Power",
      nameArabic: "الآيات الكونية",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "يُولِجُ اللَّيْلَ فِي النَّهَارِ", meaning: { en: "He merges night into day", ur: "He merges night into day" }, explanation: { en: "Gradual transition - sunrise and sunset", ur: "Gradual transition - sunrise and sunset" }, verseRef: "35:13" },
        { term: "وَيُولِجُ النَّهَارَ فِي اللَّيْلِ", meaning: { en: "And merges day into night", ur: "And merges day into night" }, explanation: { en: "Continuous cycle under divine control", ur: "Continuous cycle under divine control" }, verseRef: "35:13" },
        { term: "وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ", meaning: { en: "And subjected sun and moon", ur: "And subjected sun and moon" }, explanation: { en: "Celestial bodies in divine service", ur: "Celestial bodies in divine service" }, verseRef: "35:13" },
        { term: "كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى", meaning: { en: "Each running for a specified term", ur: "Each running for a specified term" }, explanation: { en: "Orbits continue until appointed end", ur: "Orbits continue until appointed end" }, verseRef: "35:13" },
        { term: "ذَٰلِكُمُ اللَّهُ رَبُّكُمْ لَهُ الْمُلْكُ", meaning: { en: "That is Allah, your Lord - to Him belongs sovereignty", ur: "That is Allah, your Lord - to Him belongs sovereignty" }, explanation: { en: "All power and dominion belong to Allah", ur: "All power and dominion belong to Allah" }, verseRef: "35:13" }
      ]
    },

    idolsPowerlessness: {
      name: "Powerlessness of Idols",
      nameArabic: "عجز الأصنام",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ تَدْعُونَ مِن دُونِهِ", meaning: { en: "Those you invoke besides Him", ur: "Those you invoke besides Him" }, explanation: { en: "False gods that people call upon", ur: "False gods that people call upon" }, verseRef: "35:13" },
        { term: "مَا يَمْلِكُونَ مِن قِطْمِيرٍ", meaning: { en: "Do not possess even a qitmir", ur: "Do not possess even a qitmir" }, explanation: { en: "Qitmir - thin membrane on date seed, smallest thing", ur: "Qitmir - thin membrane on date seed, smallest thing" }, verseRef: "35:13" },
        { term: "إِن تَدْعُوهُمْ لَا يَسْمَعُوا دُعَاءَكُمْ", meaning: { en: "If you call them, they do not hear your call", ur: "If you call them, they do not hear your call" }, explanation: { en: "Idols are deaf - cannot respond", ur: "Idols are deaf - cannot respond" }, verseRef: "35:14" },
        { term: "وَلَوْ سَمِعُوا مَا اسْتَجَابُوا لَكُمْ", meaning: { en: "Even if they heard, they could not respond", ur: "Even if they heard, they could not respond" }, explanation: { en: "Powerless even if hearing existed", ur: "Powerless even if hearing existed" }, verseRef: "35:14" },
        { term: "وَيَوْمَ الْقِيَامَةِ يَكْفُرُونَ بِشِرْكِكُمْ", meaning: { en: "On Resurrection Day they will deny your association", ur: "On Resurrection Day they will deny your association" }, explanation: { en: "False gods will disown worshippers", ur: "False gods will disown worshippers" }, verseRef: "35:14" }
      ]
    },

    humanDependence: {
      name: "Human Dependence on Allah",
      nameArabic: "افتقار الإنسان لله",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "يَا أَيُّهَا النَّاسُ أَنتُمُ الْفُقَرَاءُ إِلَى اللَّهِ", meaning: { en: "O people, you are the poor in need of Allah", ur: "O people, you are the poor in need of Allah" }, explanation: { en: "Fundamental human reality - total dependence", ur: "Fundamental human reality - total dependence" }, verseRef: "35:15" },
        { term: "وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ", meaning: { en: "And Allah is the Free of need, the Praiseworthy", ur: "And Allah is the Free of need, the Praiseworthy" }, explanation: { en: "Allah needs nothing while deserving all praise", ur: "Allah needs nothing while deserving all praise" }, verseRef: "35:15" },
        { term: "إِن يَشَأْ يُذْهِبْكُمْ", meaning: { en: "If He wills, He can remove you", ur: "If He wills, He can remove you" }, explanation: { en: "Allah can eliminate entire humanity", ur: "Allah can eliminate entire humanity" }, verseRef: "35:16" },
        { term: "وَيَأْتِ بِخَلْقٍ جَدِيدٍ", meaning: { en: "And bring a new creation", ur: "And bring a new creation" }, explanation: { en: "Allah can create anew - not dependent on us", ur: "Allah can create anew - not dependent on us" }, verseRef: "35:16" },
        { term: "وَمَا ذَٰلِكَ عَلَى اللَّهِ بِعَزِيزٍ", meaning: { en: "And that is not difficult for Allah", ur: "And that is not difficult for Allah" }, explanation: { en: "Nothing is hard for Allah", ur: "Nothing is hard for Allah" }, verseRef: "35:17" }
      ]
    },

    individualAccountability: {
      name: "Individual Accountability",
      nameArabic: "المسؤولية الفردية",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ", meaning: { en: "No bearer of burdens will bear burden of another", ur: "No bearer of burdens will bear burden of another" }, explanation: { en: "Each person carries own sins only", ur: "Each person carries own sins only" }, verseRef: "35:18" },
        { term: "وَإِن تَدْعُ مُثْقَلَةٌ إِلَىٰ حِمْلِهَا", meaning: { en: "If a heavily burdened soul calls for help", ur: "If a heavily burdened soul calls for help" }, explanation: { en: "Cannot transfer sin to another", ur: "Cannot transfer sin to another" }, verseRef: "35:18" },
        { term: "لَا يُحْمَلْ مِنْهُ شَيْءٌ وَلَوْ كَانَ ذَا قُرْبَىٰ", meaning: { en: "Nothing will be carried, even if relative", ur: "Nothing will be carried, even if relative" }, explanation: { en: "Family ties cannot transfer burdens", ur: "Family ties cannot transfer burdens" }, verseRef: "35:18" },
        { term: "إِنَّمَا تُنذِرُ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ", meaning: { en: "You only warn those who fear their Lord unseen", ur: "You only warn those who fear their Lord unseen" }, explanation: { en: "Warning benefits those with inner fear", ur: "Warning benefits those with inner fear" }, verseRef: "35:18" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "And establish prayer" }, explanation: { en: "Prayer as sign of responsiveness to warning", ur: "Prayer as sign of responsiveness to warning" }, verseRef: "35:18" },
        { term: "وَمَن تَزَكَّىٰ فَإِنَّمَا يَتَزَكَّىٰ لِنَفْسِهِ", meaning: { en: "Whoever purifies himself does so for his own benefit", ur: "Whoever purifies himself does so for his own benefit" }, explanation: { en: "Self-purification benefits only the self", ur: "Self-purification benefits only the self" }, verseRef: "35:18" }
      ]
    },

    lightVsDarkness: {
      name: "Light vs Darkness",
      nameArabic: "النور والظلمات",
      color: "#F59E0B",
      icon: "Sun",
      concepts: [
        { term: "وَمَا يَسْتَوِي الْأَعْمَىٰ وَالْبَصِيرُ", meaning: { en: "Not equal are the blind and the seeing", ur: "Not equal are the blind and the seeing" }, explanation: { en: "Disbeliever vs believer - fundamentally different", ur: "Disbeliever vs believer - fundamentally different" }, verseRef: "35:19" },
        { term: "وَلَا الظُّلُمَاتُ وَلَا النُّورُ", meaning: { en: "Nor are darkness and light", ur: "Nor are darkness and light" }, explanation: { en: "Misguidance and guidance - opposites", ur: "Misguidance and guidance - opposites" }, verseRef: "35:20" },
        { term: "وَلَا الظِّلُّ وَلَا الْحَرُورُ", meaning: { en: "Nor shade and heat", ur: "Nor shade and heat" }, explanation: { en: "Comfort of faith vs burning of disbelief", ur: "Comfort of faith vs burning of disbelief" }, verseRef: "35:21" },
        { term: "وَمَا يَسْتَوِي الْأَحْيَاءُ وَلَا الْأَمْوَاتُ", meaning: { en: "Not equal are the living and the dead", ur: "Not equal are the living and the dead" }, explanation: { en: "Spiritual life vs spiritual death", ur: "Spiritual life vs spiritual death" }, verseRef: "35:22" },
        { term: "إِنَّ اللَّهَ يُسْمِعُ مَن يَشَاءُ", meaning: { en: "Allah causes to hear whom He wills", ur: "Allah causes to hear whom He wills" }, explanation: { en: "Hearing truth is divine gift", ur: "Hearing truth is divine gift" }, verseRef: "35:22" },
        { term: "وَمَا أَنتَ بِمُسْمِعٍ مَّن فِي الْقُبُورِ", meaning: { en: "You cannot make hear those in graves", ur: "You cannot make hear those in graves" }, explanation: { en: "Spiritually dead cannot hear Prophet", ur: "Spiritually dead cannot hear Prophet" }, verseRef: "35:22" }
      ]
    },

    propheticMission: {
      name: "The Prophetic Mission",
      nameArabic: "رسالة النبي",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "إِنْ أَنتَ إِلَّا نَذِيرٌ", meaning: { en: "You are only a warner", ur: "You are only a warner" }, explanation: { en: "Prophet's role is warning, not compelling", ur: "Prophet's role is warning, not compelling" }, verseRef: "35:23" },
        { term: "إِنَّا أَرْسَلْنَاكَ بِالْحَقِّ", meaning: { en: "We have sent you with truth", ur: "We have sent you with truth" }, explanation: { en: "Divine commission with truth", ur: "Divine commission with truth" }, verseRef: "35:24" },
        { term: "بَشِيرًا وَنَذِيرًا", meaning: { en: "As a bringer of good news and warner", ur: "As a bringer of good news and warner" }, explanation: { en: "Dual role - glad tidings and warnings", ur: "Dual role - glad tidings and warnings" }, verseRef: "35:24" },
        { term: "وَإِن مِّنْ أُمَّةٍ إِلَّا خَلَا فِيهَا نَذِيرٌ", meaning: { en: "There is no nation but a warner passed among them", ur: "There is no nation but a warner passed among them" }, explanation: { en: "Every nation received a messenger", ur: "Every nation received a messenger" }, verseRef: "35:24" }
      ]
    },

    patternsOfDenial: {
      name: "Patterns of Denial",
      nameArabic: "سنن التكذيب",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَإِن يُكَذِّبُوكَ فَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِم", meaning: { en: "If they deny you, those before them denied", ur: "If they deny you, those before them denied" }, explanation: { en: "Denial is historical pattern", ur: "Denial is historical pattern" }, verseRef: "35:25" },
        { term: "جَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ", meaning: { en: "Their messengers came with clear proofs", ur: "Their messengers came with clear proofs" }, explanation: { en: "Evidence was always provided", ur: "Evidence was always provided" }, verseRef: "35:25" },
        { term: "وَبِالزُّبُرِ", meaning: { en: "And with scriptures", ur: "And with scriptures" }, explanation: { en: "Written revelation given", ur: "Written revelation given" }, verseRef: "35:25" },
        { term: "وَبِالْكِتَابِ الْمُنِيرِ", meaning: { en: "And with enlightening Book", ur: "And with enlightening Book" }, explanation: { en: "Illuminating scripture sent", ur: "Illuminating scripture sent" }, verseRef: "35:25" },
        { term: "ثُمَّ أَخَذْتُ الَّذِينَ كَفَرُوا", meaning: { en: "Then I seized those who disbelieved", ur: "Then I seized those who disbelieved" }, explanation: { en: "Divine punishment followed denial", ur: "Divine punishment followed denial" }, verseRef: "35:26" },
        { term: "فَكَيْفَ كَانَ نَكِيرِ", meaning: { en: "How was My punishment?", ur: "How was My punishment?" }, explanation: { en: "Rhetorical - punishment was severe", ur: "Rhetorical - punishment was severe" }, verseRef: "35:26" }
      ]
    },

    creationDiversity: {
      name: "Diversity in Creation",
      nameArabic: "تنوع الخلق",
      color: "#06B6D4",
      icon: "Sparkles",
      concepts: [
        { term: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: { en: "Do you not see Allah sends water from sky?", ur: "Do you not see Allah sends water from sky?" }, explanation: { en: "Rain as source of diversity", ur: "Rain as source of diversity" }, verseRef: "35:27" },
        { term: "فَأَخْرَجْنَا بِهِ ثَمَرَاتٍ مُّخْتَلِفًا أَلْوَانُهَا", meaning: { en: "With it We produce fruits of varying colors", ur: "With it We produce fruits of varying colors" }, explanation: { en: "Fruit diversity from same water", ur: "Fruit diversity from same water" }, verseRef: "35:27" },
        { term: "وَمِنَ الْجِبَالِ جُدَدٌ بِيضٌ وَحُمْرٌ", meaning: { en: "And in mountains are streaks white and red", ur: "And in mountains are streaks white and red" }, explanation: { en: "Mountain colors - geological diversity", ur: "Mountain colors - geological diversity" }, verseRef: "35:27" },
        { term: "مُّخْتَلِفٌ أَلْوَانُهَا وَغَرَابِيبُ سُودٌ", meaning: { en: "Varying in color, and some intensely black", ur: "Varying in color, and some intensely black" }, explanation: { en: "Range of colors in nature", ur: "Range of colors in nature" }, verseRef: "35:27" },
        { term: "وَمِنَ النَّاسِ وَالدَّوَابِّ وَالْأَنْعَامِ مُخْتَلِفٌ أَلْوَانُهُ", meaning: { en: "And among people, creatures, livestock - varying colors", ur: "And among people, creatures, livestock - varying colors" }, explanation: { en: "Diversity in living beings", ur: "Diversity in living beings" }, verseRef: "35:28" }
      ]
    },

    scholarsFearAllah: {
      name: "Scholars Who Fear Allah",
      nameArabic: "العلماء يخشون الله",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ", meaning: { en: "Only those who have knowledge fear Allah among His servants", ur: "Only those who have knowledge fear Allah among His servants" }, explanation: { en: "True knowledge leads to khashya (awe-filled fear)", ur: "True knowledge leads to khashya (awe-filled fear)" }, verseRef: "35:28" },
        { term: "إِنَّ اللَّهَ عَزِيزٌ غَفُورٌ", meaning: { en: "Allah is Almighty, Forgiving", ur: "Allah is Almighty, Forgiving" }, explanation: { en: "Power and mercy combined", ur: "Power and mercy combined" }, verseRef: "35:28" }
      ]
    },

    believersReward: {
      name: "Reward for Believers",
      nameArabic: "جزاء المؤمنين",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ", meaning: { en: "Those who recite the Book of Allah", ur: "Those who recite the Book of Allah" }, explanation: { en: "Regular Quran recitation", ur: "Regular Quran recitation" }, verseRef: "35:29" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "And establish prayer" }, explanation: { en: "Consistent prayer practice", ur: "Consistent prayer practice" }, verseRef: "35:29" },
        { term: "وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً", meaning: { en: "And spend from what We provided secretly and publicly", ur: "And spend from what We provided secretly and publicly" }, explanation: { en: "Charity both hidden and open", ur: "Charity both hidden and open" }, verseRef: "35:29" },
        { term: "يَرْجُونَ تِجَارَةً لَّن تَبُورَ", meaning: { en: "Hoping for a trade that will never fail", ur: "Hoping for a trade that will never fail" }, explanation: { en: "Investment with Allah never loses", ur: "Investment with Allah never loses" }, verseRef: "35:29" },
        { term: "لِيُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُم مِّن فَضْلِهِ", meaning: { en: "That He may pay them full wages and increase from His bounty", ur: "That He may pay them full wages and increase from His bounty" }, explanation: { en: "Full reward plus extra from Allah's generosity", ur: "Full reward plus extra from Allah's generosity" }, verseRef: "35:30" }
      ]
    },

    quranTruth: {
      name: "Truth of the Quran",
      nameArabic: "صدق القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَالَّذِي أَوْحَيْنَا إِلَيْكَ مِنَ الْكِتَابِ هُوَ الْحَقُّ", meaning: { en: "What We revealed to you of the Book is the truth", ur: "What We revealed to you of the Book is the truth" }, explanation: { en: "Quran is absolute truth", ur: "Quran is absolute truth" }, verseRef: "35:31" },
        { term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ", meaning: { en: "Confirming what was before it", ur: "Confirming what was before it" }, explanation: { en: "Quran confirms previous scriptures", ur: "Quran confirms previous scriptures" }, verseRef: "35:31" },
        { term: "إِنَّ اللَّهَ بِعِبَادِهِ لَخَبِيرٌ بَصِيرٌ", meaning: { en: "Allah is All-Aware, All-Seeing of His servants", ur: "Allah is All-Aware, All-Seeing of His servants" }, explanation: { en: "Allah fully knows and sees servants", ur: "Allah fully knows and sees servants" }, verseRef: "35:31" }
      ]
    },

    inheritorsOfBook: {
      name: "Three Categories of Inheritors",
      nameArabic: "أصناف ورثة الكتاب",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ عِبَادِنَا", meaning: { en: "Then We gave the Book as inheritance to those We chose from Our servants", ur: "Then We gave the Book as inheritance to those We chose from Our servants" }, explanation: { en: "This ummah inherited the Book", ur: "This ummah inherited the Book" }, verseRef: "35:32" },
        { term: "فَمِنْهُمْ ظَالِمٌ لِّنَفْسِهِ", meaning: { en: "Among them is he who wrongs himself", ur: "Among them is he who wrongs himself" }, explanation: { en: "First category: sinners who acknowledge truth", ur: "First category: sinners who acknowledge truth" }, verseRef: "35:32" },
        { term: "وَمِنْهُم مُّقْتَصِدٌ", meaning: { en: "And among them is moderate", ur: "And among them is moderate" }, explanation: { en: "Second category: those who do minimum obligations", ur: "Second category: those who do minimum obligations" }, verseRef: "35:32" },
        { term: "وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ", meaning: { en: "And among them is foremost in good deeds", ur: "And among them is foremost in good deeds" }, explanation: { en: "Third category: excelling in righteousness", ur: "Third category: excelling in righteousness" }, verseRef: "35:32" },
        { term: "بِإِذْنِ اللَّهِ", meaning: { en: "By Allah's permission", ur: "By Allah's permission" }, explanation: { en: "Excellence achieved only through divine help", ur: "Excellence achieved only through divine help" }, verseRef: "35:32" },
        { term: "ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ", meaning: { en: "That is the great bounty", ur: "That is the great bounty" }, explanation: { en: "Being chosen to inherit Book is greatest favor", ur: "Being chosen to inherit Book is greatest favor" }, verseRef: "35:32" }
      ]
    },

    paradiseDescription: {
      name: "Gardens of Eternity",
      nameArabic: "جنات عدن",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "جَنَّاتُ عَدْنٍ يَدْخُلُونَهَا", meaning: { en: "Gardens of perpetual residence they will enter", ur: "Gardens of perpetual residence they will enter" }, explanation: { en: "All three categories enter Paradise", ur: "All three categories enter Paradise" }, verseRef: "35:33" },
        { term: "يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍ", meaning: { en: "Adorned with bracelets of gold", ur: "Adorned with bracelets of gold" }, explanation: { en: "Golden jewelry in Paradise", ur: "Golden jewelry in Paradise" }, verseRef: "35:33" },
        { term: "وَلُؤْلُؤًا", meaning: { en: "And pearl", ur: "And pearl" }, explanation: { en: "Pearl adornments", ur: "Pearl adornments" }, verseRef: "35:33" },
        { term: "وَلِبَاسُهُمْ فِيهَا حَرِيرٌ", meaning: { en: "And their garments therein will be silk", ur: "And their garments therein will be silk" }, explanation: { en: "Silk clothing - forbidden in dunya for men", ur: "Silk clothing - forbidden in dunya for men" }, verseRef: "35:33" },
        { term: "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ", meaning: { en: "Praise to Allah who removed from us sorrow", ur: "Praise to Allah who removed from us sorrow" }, explanation: { en: "No grief in Paradise", ur: "No grief in Paradise" }, verseRef: "35:34" },
        { term: "إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ", meaning: { en: "Indeed, our Lord is Forgiving, Appreciative", ur: "Indeed, our Lord is Forgiving, Appreciative" }, explanation: { en: "Shakur - Allah appreciates small deeds greatly", ur: "Shakur - Allah appreciates small deeds greatly" }, verseRef: "35:34" },
        { term: "الَّذِي أَحَلَّنَا دَارَ الْمُقَامَةِ مِن فَضْلِهِ", meaning: { en: "Who settled us in the Home of Permanence by His bounty", ur: "Who settled us in the Home of Permanence by His bounty" }, explanation: { en: "Eternal residence through divine grace", ur: "Eternal residence through divine grace" }, verseRef: "35:35" },
        { term: "لَا يَمَسُّنَا فِيهَا نَصَبٌ", meaning: { en: "No fatigue touches us therein", ur: "No fatigue touches us therein" }, explanation: { en: "No tiredness in Paradise", ur: "No tiredness in Paradise" }, verseRef: "35:35" },
        { term: "وَلَا يَمَسُّنَا فِيهَا لُغُوبٌ", meaning: { en: "Nor does weariness touch us", ur: "Nor does weariness touch us" }, explanation: { en: "No exhaustion ever", ur: "No exhaustion ever" }, verseRef: "35:35" }
      ]
    },

    disbelieversRegret: {
      name: "Regret of Disbelievers",
      nameArabic: "ندم الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ كَفَرُوا لَهُمْ نَارُ جَهَنَّمَ", meaning: { en: "Those who disbelieve will have fire of Hell", ur: "Those who disbelieve will have fire of Hell" }, explanation: { en: "Hellfire for disbelievers", ur: "Hellfire for disbelievers" }, verseRef: "35:36" },
        { term: "لَا يُقْضَىٰ عَلَيْهِمْ فَيَمُوتُوا", meaning: { en: "It is not decreed that they die", ur: "It is not decreed that they die" }, explanation: { en: "Cannot escape through death", ur: "Cannot escape through death" }, verseRef: "35:36" },
        { term: "وَلَا يُخَفَّفُ عَنْهُم مِّنْ عَذَابِهَا", meaning: { en: "Nor is its punishment lightened for them", ur: "Nor is its punishment lightened for them" }, explanation: { en: "No reduction in torment", ur: "No reduction in torment" }, verseRef: "35:36" },
        { term: "وَهُمْ يَصْطَرِخُونَ فِيهَا", meaning: { en: "They will cry out therein", ur: "They will cry out therein" }, explanation: { en: "Screaming in Hell", ur: "Screaming in Hell" }, verseRef: "35:37" },
        { term: "رَبَّنَا أَخْرِجْنَا نَعْمَلْ صَالِحًا", meaning: { en: "Our Lord, take us out - we will do good", ur: "Our Lord, take us out - we will do good" }, explanation: { en: "Futile plea for second chance", ur: "Futile plea for second chance" }, verseRef: "35:37" },
        { term: "أَوَلَمْ نُعَمِّرْكُم مَّا يَتَذَكَّرُ فِيهِ مَن تَذَكَّرَ", meaning: { en: "Did We not give you life long enough for one who reflects to reflect?", ur: "Did We not give you life long enough for one who reflects to reflect?" }, explanation: { en: "Enough time was given to understand", ur: "Enough time was given to understand" }, verseRef: "35:37" },
        { term: "وَجَاءَكُمُ النَّذِيرُ", meaning: { en: "And the warner came to you", ur: "And the warner came to you" }, explanation: { en: "Prophet warned them clearly", ur: "Prophet warned them clearly" }, verseRef: "35:37" },
        { term: "فَذُوقُوا فَمَا لِلظَّالِمِينَ مِن نَّصِيرٍ", meaning: { en: "So taste, for wrongdoers have no helper", ur: "So taste, for wrongdoers have no helper" }, explanation: { en: "No one to aid disbelievers", ur: "No one to aid disbelievers" }, verseRef: "35:37" }
      ]
    },

    allahsKnowledge: {
      name: "Allah's Comprehensive Knowledge",
      nameArabic: "علم الله الشامل",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "إِنَّ اللَّهَ عَالِمُ غَيْبِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Allah is Knower of unseen of heavens and earth", ur: "Allah is Knower of unseen of heavens and earth" }, explanation: { en: "Nothing hidden in universe", ur: "Nothing hidden in universe" }, verseRef: "35:38" },
        { term: "إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ", meaning: { en: "He is Knowing of what is in the breasts", ur: "He is Knowing of what is in the breasts" }, explanation: { en: "Knows inner thoughts and feelings", ur: "Knows inner thoughts and feelings" }, verseRef: "35:38" }
      ]
    },

    stewardshipOnEarth: {
      name: "Human Stewardship",
      nameArabic: "الاستخلاف في الأرض",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "هُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ فِي الْأَرْضِ", meaning: { en: "He is the One who made you successors on earth", ur: "He is the One who made you successors on earth" }, explanation: { en: "Humans as stewards - test of responsibility", ur: "Humans as stewards - test of responsibility" }, verseRef: "35:39" },
        { term: "فَمَن كَفَرَ فَعَلَيْهِ كُفْرُهُ", meaning: { en: "Whoever disbelieves - upon him is his disbelief", ur: "Whoever disbelieves - upon him is his disbelief" }, explanation: { en: "Consequences fall on individual", ur: "Consequences fall on individual" }, verseRef: "35:39" },
        { term: "وَلَا يَزِيدُ الْكَافِرِينَ كُفْرُهُمْ عِندَ رَبِّهِمْ إِلَّا مَقْتًا", meaning: { en: "Disbelief increases disbelievers only in hatred from their Lord", ur: "Disbelief increases disbelievers only in hatred from their Lord" }, explanation: { en: "Disbelief brings divine displeasure", ur: "Disbelief brings divine displeasure" }, verseRef: "35:39" },
        { term: "وَلَا يَزِيدُ الْكَافِرِينَ كُفْرُهُمْ إِلَّا خَسَارًا", meaning: { en: "Disbelief increases disbelievers only in loss", ur: "Disbelief increases disbelievers only in loss" }, explanation: { en: "Disbelief is pure loss", ur: "Disbelief is pure loss" }, verseRef: "35:39" }
      ]
    },

    challengeToIdolaters: {
      name: "Challenge to Idolaters",
      nameArabic: "تحدي المشركين",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "قُلْ أَرَأَيْتُمْ شُرَكَاءَكُمُ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ", meaning: { en: "Say: Have you considered your partners you invoke besides Allah?", ur: "Say: Have you considered your partners you invoke besides Allah?" }, explanation: { en: "Challenge to think about idols", ur: "Challenge to think about idols" }, verseRef: "35:40" },
        { term: "أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ", meaning: { en: "Show me what they created of earth", ur: "Show me what they created of earth" }, explanation: { en: "Demand for proof of creation", ur: "Demand for proof of creation" }, verseRef: "35:40" },
        { term: "أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ", meaning: { en: "Or have they partnership in heavens?", ur: "Or have they partnership in heavens?" }, explanation: { en: "No share in cosmic creation", ur: "No share in cosmic creation" }, verseRef: "35:40" },
        { term: "أَمْ آتَيْنَاهُمْ كِتَابًا", meaning: { en: "Or have We given them a book?", ur: "Or have We given them a book?" }, explanation: { en: "No scripture supports their worship", ur: "No scripture supports their worship" }, verseRef: "35:40" },
        { term: "بَلْ إِن يَعِدُ الظَّالِمُونَ بَعْضُهُم بَعْضًا إِلَّا غُرُورًا", meaning: { en: "Rather, wrongdoers promise each other only delusion", ur: "Rather, wrongdoers promise each other only delusion" }, explanation: { en: "Mutual deception among misguided", ur: "Mutual deception among misguided" }, verseRef: "35:40" }
      ]
    },

    cosmicStability: {
      name: "Allah Upholds the Universe",
      nameArabic: "الله يمسك السماوات والأرض",
      color: "#F59E0B",
      icon: "Globe",
      concepts: [
        { term: "إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَن تَزُولَا", meaning: { en: "Allah holds heavens and earth lest they cease", ur: "Allah holds heavens and earth lest they cease" }, explanation: { en: "Divine power maintains cosmic order", ur: "Divine power maintains cosmic order" }, verseRef: "35:41" },
        { term: "وَلَئِن زَالَتَا إِنْ أَمْسَكَهُمَا مِنْ أَحَدٍ مِّن بَعْدِهِ", meaning: { en: "If they were to cease, none could hold them after Him", ur: "If they were to cease, none could hold them after Him" }, explanation: { en: "Only Allah prevents cosmic collapse", ur: "Only Allah prevents cosmic collapse" }, verseRef: "35:41" },
        { term: "إِنَّهُ كَانَ حَلِيمًا غَفُورًا", meaning: { en: "He is Forbearing, Forgiving", ur: "He is Forbearing, Forgiving" }, explanation: { en: "Despite power, Allah is gentle and pardoning", ur: "Despite power, Allah is gentle and pardoning" }, verseRef: "35:41" }
      ]
    },

    brokenOaths: {
      name: "Broken Oaths of Pagans",
      nameArabic: "نقض الأيمان",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَأَقْسَمُوا بِاللَّهِ جَهْدَ أَيْمَانِهِمْ", meaning: { en: "They swore by Allah their strongest oaths", ur: "They swore by Allah their strongest oaths" }, explanation: { en: "Pagans made solemn promises", ur: "Pagans made solemn promises" }, verseRef: "35:42" },
        { term: "لَئِن جَاءَهُمْ نَذِيرٌ لَيَكُونُنَّ أَهْدَىٰ مِنْ إِحْدَى الْأُمَمِ", meaning: { en: "If a warner came they would be more guided than any nation", ur: "If a warner came they would be more guided than any nation" }, explanation: { en: "Claimed they would believe if warned", ur: "Claimed they would believe if warned" }, verseRef: "35:42" },
        { term: "فَلَمَّا جَاءَهُمْ نَذِيرٌ مَّا زَادَهُمْ إِلَّا نُفُورًا", meaning: { en: "But when warner came, it only increased their aversion", ur: "But when warner came, it only increased their aversion" }, explanation: { en: "Reality opposite of claim", ur: "Reality opposite of claim" }, verseRef: "35:42" }
      ]
    },

    arroganceAndSchemes: {
      name: "Arrogance & Evil Schemes",
      nameArabic: "الاستكبار والمكر",
      color: "#EF4444",
      icon: "Crown",
      concepts: [
        { term: "اسْتِكْبَارًا فِي الْأَرْضِ", meaning: { en: "Arrogance in the land", ur: "Arrogance in the land" }, explanation: { en: "Pride was root of rejection", ur: "Pride was root of rejection" }, verseRef: "35:43" },
        { term: "وَمَكْرَ السَّيِّئِ", meaning: { en: "And plotting of evil", ur: "And plotting of evil" }, explanation: { en: "Scheming against truth", ur: "Scheming against truth" }, verseRef: "35:43" },
        { term: "وَلَا يَحِيقُ الْمَكْرُ السَّيِّئُ إِلَّا بِأَهْلِهِ", meaning: { en: "Evil plotting encompasses only its people", ur: "Evil plotting encompasses only its people" }, explanation: { en: "Evil schemes backfire on schemers", ur: "Evil schemes backfire on schemers" }, verseRef: "35:43" },
        { term: "فَهَلْ يَنظُرُونَ إِلَّا سُنَّتَ الْأَوَّلِينَ", meaning: { en: "Do they await except way of former peoples?", ur: "Do they await except way of former peoples?" }, explanation: { en: "Same fate as destroyed nations", ur: "Same fate as destroyed nations" }, verseRef: "35:43" },
        { term: "فَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَبْدِيلًا", meaning: { en: "You will never find change in Allah's way", ur: "You will never find change in Allah's way" }, explanation: { en: "Divine patterns never change", ur: "Divine patterns never change" }, verseRef: "35:43" },
        { term: "وَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَحْوِيلًا", meaning: { en: "Nor will you find alteration in Allah's way", ur: "Nor will you find alteration in Allah's way" }, explanation: { en: "No deviation from divine law", ur: "No deviation from divine law" }, verseRef: "35:43" }
      ]
    },

    lessonsFromHistory: {
      name: "Lessons from Destroyed Nations",
      nameArabic: "عبر من الأمم الهالكة",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ", meaning: { en: "Have they not traveled through earth?", ur: "Have they not traveled through earth?" }, explanation: { en: "Call to observe historical ruins", ur: "Call to observe historical ruins" }, verseRef: "35:44" },
        { term: "فَيَنظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلِهِمْ", meaning: { en: "And see how was end of those before them?", ur: "And see how was end of those before them?" }, explanation: { en: "Fate of previous deniers visible", ur: "Fate of previous deniers visible" }, verseRef: "35:44" },
        { term: "وَكَانُوا أَشَدَّ مِنْهُمْ قُوَّةً", meaning: { en: "They were greater than them in power", ur: "They were greater than them in power" }, explanation: { en: "Stronger nations were destroyed", ur: "Stronger nations were destroyed" }, verseRef: "35:44" },
        { term: "وَمَا كَانَ اللَّهُ لِيُعْجِزَهُ مِن شَيْءٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ", meaning: { en: "Nothing in heavens or earth can escape Allah", ur: "Nothing in heavens or earth can escape Allah" }, explanation: { en: "No one can outrun divine decree", ur: "No one can outrun divine decree" }, verseRef: "35:44" },
        { term: "إِنَّهُ كَانَ عَلِيمًا قَدِيرًا", meaning: { en: "He is All-Knowing, All-Powerful", ur: "He is All-Knowing, All-Powerful" }, explanation: { en: "Knowledge and power combined", ur: "Knowledge and power combined" }, verseRef: "35:44" }
      ]
    },

    divinePatience: {
      name: "Divine Patience with Sinners",
      nameArabic: "حلم الله بالعصاة",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَلَوْ يُؤَاخِذُ اللَّهُ النَّاسَ بِمَا كَسَبُوا", meaning: { en: "If Allah were to punish people for what they earned", ur: "If Allah were to punish people for what they earned" }, explanation: { en: "Hypothetical immediate punishment", ur: "Hypothetical immediate punishment" }, verseRef: "35:45" },
        { term: "مَا تَرَكَ عَلَىٰ ظَهْرِهَا مِن دَابَّةٍ", meaning: { en: "He would not leave on its back any creature", ur: "He would not leave on its back any creature" }, explanation: { en: "All would be destroyed if judged immediately", ur: "All would be destroyed if judged immediately" }, verseRef: "35:45" },
        { term: "وَلَٰكِن يُؤَخِّرُهُمْ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: { en: "But He defers them to an appointed term", ur: "But He defers them to an appointed term" }, explanation: { en: "Delay is mercy - time to repent", ur: "Delay is mercy - time to repent" }, verseRef: "35:45" },
        { term: "فَإِذَا جَاءَ أَجَلُهُمْ", meaning: { en: "When their term comes", ur: "When their term comes" }, explanation: { en: "Appointed time will arrive", ur: "Appointed time will arrive" }, verseRef: "35:45" },
        { term: "فَإِنَّ اللَّهَ كَانَ بِعِبَادِهِ بَصِيرًا", meaning: { en: "Allah is Ever-Seeing of His servants", ur: "Allah is Ever-Seeing of His servants" }, explanation: { en: "Allah sees all and judges fairly", ur: "Allah sees all and judges fairly" }, verseRef: "35:45" }
      ]
    }
  },

  relationships: [
    { from: "فاطر السماوات والأرض", to: "جاعل الملائكة رسلا", type: "action", description: { en: "The Originator also appointed angels as messengers", ur: "The Originator also appointed angels as messengers" } },
    { from: "ما يفتح الله من رحمة", to: "لا ممسك لها", type: "consequence", description: { en: "When Allah grants mercy, none can prevent it", ur: "When Allah grants mercy, none can prevent it" } },
    { from: "الشيطان عدو", to: "فاتخذوه عدوا", type: "command", description: { en: "Recognizing enemy requires treating as enemy", ur: "Recognizing enemy requires treating as enemy" } },
    { from: "فأحيينا به الأرض", to: "كذلك النشور", type: "analogy", description: { en: "Dead earth revived parallels resurrection", ur: "Dead earth revived parallels resurrection" } },
    { from: "الكلم الطيب", to: "العمل الصالح يرفعه", type: "synergy", description: { en: "Good speech and deeds work together", ur: "Good speech and deeds work together" } },
    { from: "العلماء", to: "يخشى الله", type: "cause", description: { en: "True knowledge leads to fearing Allah", ur: "True knowledge leads to fearing Allah" } },
    { from: "ظالم لنفسه", to: "مقتصد", type: "progression", description: { en: "Levels of faith among inheritors", ur: "Levels of faith among inheritors" } },
    { from: "مقتصد", to: "سابق بالخيرات", type: "progression", description: { en: "From moderate to excelling", ur: "From moderate to excelling" } },
    { from: "المكر السيئ", to: "إلا بأهله", type: "consequence", description: { en: "Evil schemes harm the schemers", ur: "Evil schemes harm the schemers" } },
    { from: "سنة الأولين", to: "لن تجد تبديلا", type: "permanence", description: { en: "Divine patterns never change", ur: "Divine patterns never change" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Originator", verses: "35:1-3", description: { en: "Allah as Creator, angels as messengers, call to remember blessings", ur: "Allah as Creator, angels as messengers, call to remember blessings" } },
      { stage: 2, theme: "Prophetic Comfort", verses: "35:4-8", description: { en: "Denial is historical, worldly deception warned, Satan as enemy", ur: "Denial is historical, worldly deception warned, Satan as enemy" } },
      { stage: 3, theme: "Signs of Resurrection", verses: "35:9-11", description: { en: "Winds, rain, dead land revived, human creation from dust", ur: "Winds, rain, dead land revived, human creation from dust" } },
      { stage: 4, theme: "Two Seas Parable", verses: "35:12-14", description: { en: "Fresh vs salty water, cosmic signs, idols powerless", ur: "Fresh vs salty water, cosmic signs, idols powerless" } },
      { stage: 5, theme: "Human Dependence", verses: "35:15-18", description: { en: "All need Allah, individual accountability, purification", ur: "All need Allah, individual accountability, purification" } },
      { stage: 6, theme: "Light vs Darkness", verses: "35:19-26", description: { en: "Blind vs seeing, prophetic mission, patterns of denial", ur: "Blind vs seeing, prophetic mission, patterns of denial" } },
      { stage: 7, theme: "Creation Diversity", verses: "35:27-28", description: { en: "Colors in nature, scholars who fear Allah", ur: "Colors in nature, scholars who fear Allah" } },
      { stage: 8, theme: "Believers' Trade", verses: "35:29-31", description: { en: "Recitation, prayer, charity as profitable investment", ur: "Recitation, prayer, charity as profitable investment" } },
      { stage: 9, theme: "Three Inheritors", verses: "35:32-35", description: { en: "Wronging self, moderate, and foremost - all enter Paradise", ur: "Wronging self, moderate, and foremost - all enter Paradise" } },
      { stage: 10, theme: "Hellfire Regret", verses: "35:36-38", description: { en: "Disbelievers' torment, futile pleas, missed opportunities", ur: "Disbelievers' torment, futile pleas, missed opportunities" } },
      { stage: 11, theme: "Stewardship Test", verses: "35:39-41", description: { en: "Successors on earth, challenge to idolaters, cosmic stability", ur: "Successors on earth, challenge to idolaters, cosmic stability" } },
      { stage: 12, theme: "Divine Patterns", verses: "35:42-45", description: { en: "Broken oaths, arrogance, unchanging divine ways, divine patience", ur: "Broken oaths, arrogance, unchanging divine ways, divine patience" } }
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
    title: { en: "The Three Inheritors and Universal Salvation", ur: "The Three Inheritors and Universal Salvation" },
    insight: { en: "Surah Fatir contains one of the most hope-giving verses in the Quran (35:32-33). After stating that the Book was given as inheritance to chosen servants, it divides them into three categories: (1) Those who wrong themselves (zalim li-nafsihi), (2) The moderate (muqtasid), and (3) Those foremost in good (sabiq bil-khayrat). Remarkably, ALL THREE categories enter Paradise (35:33)! This shows that even those who sin but remain within the fold of faith have hope. The 'wronging oneself' refers to sins while still believing - not kufr. Scholars note this verse provides immense comfort: even those struggling with sins are among the 'chosen servants' if they hold onto faith. The surah also uniquely connects creation diversity (colors in fruits, mountains, animals, humans - 35:27-28) with scholars fearing Allah. True scholarship leads to wonder at Allah's creative power. The opening (Fatir - Originator) and this connection suggest that studying creation deeply should increase, not decrease, faith.", ur: "Surah Fatir contains one of the most hope-giving verses in the Quran (35:32-33). After stating that the Book was given as inheritance to chosen servants, it divides them into three categories: (1) Those who wrong themselves (zalim li-nafsihi), (2) The moderate (muqtasid), and (3) Those foremost in good (sabiq bil-khayrat). Remarkably, ALL THREE categories enter Paradise (35:33)! This shows that even those who sin but remain within the fold of faith have hope. The 'wronging oneself' refers to sins while still believing - not kufr. Scholars note this verse provides immense comfort: even those struggling with sins are among the 'chosen servants' if they hold onto faith. The surah also uniquely connects creation diversity (colors in fruits, mountains, animals, humans - 35:27-28) with scholars fearing Allah. True scholarship leads to wonder at Allah's creative power. The opening (Fatir - Originator) and this connection suggest that studying creation deeply should increase, not decrease, faith." }
  },

  historicalContext: {
    note: { en: "Revealed in the middle Makkan period when the Prophet faced persistent rejection. The surah opens by establishing Allah as Fatir - the One who originates everything from nothing. This countered the Makkan claim that resurrection was impossible. The reference to angels having varying numbers of wings (35:1) corrected pagan beliefs about angels. The parable of two seas (35:12) would resonate with the trading Quraysh familiar with both the Red Sea (salty) and fresh water sources. The verse about scholars fearing Allah (35:28) emphasized that true knowledge leads to humility before God, contrasting with the arrogant 'knowledge' of Makkan leaders. The three categories of inheritors (35:32) gave hope to new Muslims struggling between faith and their environment.", ur: "Revealed in the middle Makkan period when the Prophet faced persistent rejection. The surah opens by establishing Allah as Fatir - the One who originates everything from nothing. This countered the Makkan claim that resurrection was impossible. The reference to angels having varying numbers of wings (35:1) corrected pagan beliefs about angels. The parable of two seas (35:12) would resonate with the trading Quraysh familiar with both the Red Sea (salty) and fresh water sources. The verse about scholars fearing Allah (35:28) emphasized that true knowledge leads to humility before God, contrasting with the arrogant 'knowledge' of Makkan leaders. The three categories of inheritors (35:32) gave hope to new Muslims struggling between faith and their environment." }
  },

  linguisticFeatures: {
    features: [
      { feature: "فَاطِر", example: { en: "Originator (Fatir)", ur: "Originator (Fatir)" }, effect: { en: "Unique divine name - One who splits open non-existence to create", ur: "Unique divine name - One who splits open non-existence to create" } },
      { feature: "مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ", example: { en: "Two, three, four (wings)", ur: "Two, three, four (wings)" }, effect: { en: "Distributive numerals showing variety", ur: "Distributive numerals showing variety" } },
      { feature: "قِطْمِير", example: { en: "Thin membrane on date seed", ur: "Thin membrane on date seed" }, effect: { en: "Smallest conceivable thing - idols don't own even this", ur: "Smallest conceivable thing - idols don't own even this" } },
      { feature: "الْفُقَرَاءُ إِلَى اللَّهِ", example: { en: "The poor in need of Allah", ur: "The poor in need of Allah" }, effect: { en: "All humanity defined by poverty before Allah", ur: "All humanity defined by poverty before Allah" } },
      { feature: "غَرَابِيبُ سُودٌ", example: { en: "Intensely black", ur: "Intensely black" }, effect: { en: "Doubled adjective for emphasis - jet black", ur: "Doubled adjective for emphasis - jet black" } },
      { feature: "تِجَارَةً لَّن تَبُورَ", example: { en: "Trade that will never fail", ur: "Trade that will never fail" }, effect: { en: "Commerce metaphor - believers as smart investors", ur: "Commerce metaphor - believers as smart investors" } },
      { feature: "سُنَّتَ الْأَوَّلِينَ", example: { en: "Way of former peoples", ur: "Way of former peoples" }, effect: { en: "Divine pattern - consistent across history", ur: "Divine pattern - consistent across history" } }
    ]
  },

  keyTerms: [
    { term: "فَاطِر", transliteration: "Fatir", meaning: { en: "Originator - One who creates from nothing", ur: "Originator - One who creates from nothing" } },
    { term: "الْغَرُور", transliteration: "Al-Gharur", meaning: { en: "The Deceiver (Satan)", ur: "The Deceiver (Satan)" } },
    { term: "النُّشُور", transliteration: "An-Nushur", meaning: { en: "The Resurrection - rising from graves", ur: "The Resurrection - rising from graves" } },
    { term: "الْعِزَّة", transliteration: "Al-'Izzah", meaning: { en: "Honor, might, dignity", ur: "Honor, might, dignity" } },
    { term: "الْكَلِمُ الطَّيِّبُ", transliteration: "Al-Kalim at-Tayyib", meaning: { en: "Good/pure speech", ur: "Good/pure speech" } },
    { term: "خَلَائِف", transliteration: "Khala'if", meaning: { en: "Successors, stewards", ur: "Successors, stewards" } },
    { term: "ظَالِمٌ لِّنَفْسِهِ", transliteration: "Zalimun li-nafsihi", meaning: { en: "One who wrongs himself", ur: "One who wrongs himself" } },
    { term: "مُّقْتَصِد", transliteration: "Muqtasid", meaning: { en: "Moderate, balanced one", ur: "Moderate, balanced one" } },
    { term: "سَابِق بِالْخَيْرَاتِ", transliteration: "Sabiq bil-khayrat", meaning: { en: "Foremost in good deeds", ur: "Foremost in good deeds" } },
    { term: "يَخْشَى", transliteration: "Yakhsha", meaning: { en: "To fear with awe and knowledge", ur: "To fear with awe and knowledge" } }
  ],

  angelDescription: {
    verse: 1,
    text: "جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ",
    translation: { en: "Who made angels messengers with wings - two, three, or four", ur: "Who made angels messengers with wings - two, three, or four" },
    note: { en: "This is one of the rare descriptions of angelic physical attributes. Jibreel is reported to have 600 wings. The varying numbers show diversity even among angels - Allah's creativity extends to all creation.", ur: "This is one of the rare descriptions of angelic physical attributes. Jibreel is reported to have 600 wings. The varying numbers show diversity even among angels - Allah's creativity extends to all creation." }
  },

  threeCategoriesDetail: {
    verse: 32,
    categories: [
      {
        arabic: "ظَالِمٌ لِّنَفْسِهِ",
        name: "Wronging oneself",
        description: { en: "Those who commit sins while maintaining faith. They harm themselves but remain believers.", ur: "Those who commit sins while maintaining faith. They harm themselves but remain believers." },
        hope: "They still inherit the Book and enter Paradise"
      },
      {
        arabic: "مُّقْتَصِد",
        name: "The moderate",
        description: { en: "Those who fulfill obligations and avoid prohibitions - doing the minimum required.", ur: "Those who fulfill obligations and avoid prohibitions - doing the minimum required." },
        status: "Steady believers who do what is required"
      },
      {
        arabic: "سَابِق بِالْخَيْرَاتِ",
        name: "Foremost in good",
        description: { en: "Those who excel in worship, charity, character - going beyond obligations.", ur: "Those who excel in worship, charity, character - going beyond obligations." },
        excellence: "The highest rank - achieved only by Allah's permission"
      }
    ],
    unifyingFactor: "All three categories are from those Allah 'chose' (istafa) - all enter Paradise"
  },

  scientificReferences: {
    notes: [
      { verse: "35:9", topic: "Water cycle", note: { en: "Wind stirs clouds, drives rain to barren land - scientific accuracy", ur: "Wind stirs clouds, drives rain to barren land - scientific accuracy" } },
      { verse: "35:11", topic: "Fetal development", note: { en: "Conception and birth known to Allah - no pregnancy unknown to Him", ur: "Conception and birth known to Allah - no pregnancy unknown to Him" } },
      { verse: "35:12", topic: "Two types of water", note: { en: "Fresh and salt water - different densities, both useful", ur: "Fresh and salt water - different densities, both useful" } },
      { verse: "35:27", topic: "Geological diversity", note: { en: "Mountain colors from mineral composition - white, red, black streaks", ur: "Mountain colors from mineral composition - white, red, black streaks" } },
      { verse: "35:41", topic: "Cosmic stability", note: { en: "Allah holds heavens and earth from collapsing - gravitational stability", ur: "Allah holds heavens and earth from collapsing - gravitational stability" } }
    ]
  }
};

export default ONTOLOGY;
