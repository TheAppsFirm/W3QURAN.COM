/**
 * Surah Ash-Shura (42) - Ontology of Quranic Concepts
 * The Consultation - 53 Ayahs, Makkan
 * Theme: Consultation (Shura), revelation, forgiveness, unity of religion, creation signs
 *
 * Part of the Ha-Mim series (40-46), this surah uniquely has two sets of
 * disconnected letters (Ha-Mim and 'Ayn-Sin-Qaf). Named after the principle
 * of shura (consultation) mentioned in verse 38.
 */

export const ONTOLOGY = {
  surahId: 42,
  surahName: "Ash-Shura",
  surahNameArabic: "الشورى",
  revelationType: "Makki",
  totalAyahs: 53,

  categories: {
    divineRevelation: {
      name: "Divine Revelation",
      nameArabic: "الوحي الإلهي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حم عسق", meaning: { en: "Ha-Mim, 'Ayn-Sin-Qaf", ur: "حم" }, explanation: { en: "Unique double set of disconnected letters in Quran", ur: "Unique double set of disconnected letters in Quran" }, verseRef: "42:1-2" },
        { term: "كَذَٰلِكَ يُوحِي إِلَيْكَ", meaning: { en: "Thus He reveals to you", ur: "Thus He reveals to you" }, explanation: { en: "Continuity of revelation to Muhammad", ur: "Continuity of revelation to Muhammad" }, verseRef: "42:3" },
        { term: "وَإِلَى الَّذِينَ مِن قَبْلِكَ", meaning: { en: "And to those before you", ur: "And to those before you" }, explanation: { en: "Same revelation to previous prophets", ur: "Same revelation to previous prophets" }, verseRef: "42:3" },
        { term: "اللَّهُ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "Allah, the Mighty, the Wise", ur: "Allah, the Mighty, the Wise" }, explanation: { en: "Source of all revelation", ur: "Source of all revelation" }, verseRef: "42:3" },
        { term: "وَكَذَٰلِكَ أَوْحَيْنَا إِلَيْكَ رُوحًا مِّنْ أَمْرِنَا", meaning: { en: "And thus We revealed to you a spirit from Our command", ur: "And thus We revealed to you a spirit from Our command" }, explanation: { en: "Quran as spiritual guidance from divine command", ur: "Quran as spiritual guidance from divine command" }, verseRef: "42:52" },
        { term: "مَا كُنتَ تَدْرِي مَا الْكِتَابُ وَلَا الْإِيمَانُ", meaning: { en: "You did not know what the Book was nor faith", ur: "You did not know what the Book was nor faith" }, explanation: { en: "Prophet's state before revelation", ur: "Prophet's state before revelation" }, verseRef: "42:52" },
        { term: "جَعَلْنَاهُ نُورًا نَّهْدِي بِهِ مَن نَّشَاءُ", meaning: { en: "We made it a light by which We guide whom We will", ur: "We made it a light by which We guide whom We will" }, explanation: { en: "Quran as guiding light", ur: "Quran as guiding light" }, verseRef: "42:52" }
      ]
    },

    modesOfRevelation: {
      name: "Three Modes of Divine Communication",
      nameArabic: "طرق الوحي الإلهي",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَا كَانَ لِبَشَرٍ أَن يُكَلِّمَهُ اللَّهُ", meaning: { en: "It is not for a human that Allah should speak to him", ur: "It is not for a human that Allah should speak to him" }, explanation: { en: "Human cannot directly perceive divine speech", ur: "Human cannot directly perceive divine speech" }, verseRef: "42:51" },
        { term: "إِلَّا وَحْيًا", meaning: { en: "Except by inspiration", ur: "Except by inspiration" }, explanation: { en: "First mode: direct inspiration into the heart", ur: "First mode: direct inspiration into the heart" }, verseRef: "42:51" },
        { term: "أَوْ مِن وَرَاءِ حِجَابٍ", meaning: { en: "Or from behind a veil", ur: "Or from behind a veil" }, explanation: { en: "Second mode: Allah speaks but is unseen (like to Musa)", ur: "Second mode: Allah speaks but is unseen (like to Musa)" }, verseRef: "42:51" },
        { term: "أَوْ يُرْسِلَ رَسُولًا فَيُوحِيَ بِإِذْنِهِ", meaning: { en: "Or sends a messenger to reveal by His permission", ur: "Or sends a messenger to reveal by His permission" }, explanation: { en: "Third mode: through angel Jibreel", ur: "Third mode: through angel Jibreel" }, verseRef: "42:51" },
        { term: "إِنَّهُ عَلِيٌّ حَكِيمٌ", meaning: { en: "Indeed He is Most High, Most Wise", ur: "Indeed He is Most High, Most Wise" }, explanation: { en: "Divine wisdom in communication methods", ur: "Divine wisdom in communication methods" }, verseRef: "42:51" }
      ]
    },

    unityOfReligion: {
      name: "Unity of Religion",
      nameArabic: "وحدة الدين",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "شَرَعَ لَكُم مِّنَ الدِّينِ مَا وَصَّىٰ بِهِ نُوحًا", meaning: { en: "He prescribed for you of religion what He enjoined upon Nuh", ur: "He prescribed for you of religion what He enjoined upon Nuh" }, explanation: { en: "Same religion from earliest prophet", ur: "Same religion from earliest prophet" }, verseRef: "42:13" },
        { term: "وَالَّذِي أَوْحَيْنَا إِلَيْكَ", meaning: { en: "And what We revealed to you", ur: "And what We revealed to you" }, explanation: { en: "Muhammad receives the same message", ur: "Muhammad receives the same message" }, verseRef: "42:13" },
        { term: "وَمَا وَصَّيْنَا بِهِ إِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَىٰ", meaning: { en: "And what We enjoined upon Ibrahim, Musa, and Isa", ur: "And what We enjoined upon Ibrahim, Musa, and Isa" }, explanation: { en: "Major prophets received same core message", ur: "Major prophets received same core message" }, verseRef: "42:13" },
        { term: "أَنْ أَقِيمُوا الدِّينَ وَلَا تَتَفَرَّقُوا فِيهِ", meaning: { en: "Establish the religion and do not be divided in it", ur: "Establish the religion and do not be divided in it" }, explanation: { en: "Core command: unity in worship", ur: "Core command: unity in worship" }, verseRef: "42:13" },
        { term: "كَبُرَ عَلَى الْمُشْرِكِينَ مَا تَدْعُوهُمْ إِلَيْهِ", meaning: { en: "Difficult for polytheists is what you call them to", ur: "Difficult for polytheists is what you call them to" }, explanation: { en: "Pure monotheism is hard for idolaters", ur: "Pure monotheism is hard for idolaters" }, verseRef: "42:13" },
        { term: "اللَّهُ يَجْتَبِي إِلَيْهِ مَن يَشَاءُ", meaning: { en: "Allah chooses for Himself whom He wills", ur: "Allah chooses for Himself whom He wills" }, explanation: { en: "Divine selection of believers", ur: "Divine selection of believers" }, verseRef: "42:13" }
      ]
    },

    divisionInReligion: {
      name: "Division After Knowledge",
      nameArabic: "التفرق بعد العلم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَا تَفَرَّقُوا إِلَّا مِن بَعْدِ مَا جَاءَهُمُ الْعِلْمُ", meaning: { en: "They divided not except after knowledge had come to them", ur: "They divided not except after knowledge had come to them" }, explanation: { en: "Division came after clear guidance, not from ignorance", ur: "Division came after clear guidance, not from ignorance" }, verseRef: "42:14" },
        { term: "بَغْيًا بَيْنَهُمْ", meaning: { en: "Out of jealous rivalry between them", ur: "Out of jealous rivalry between them" }, explanation: { en: "Cause of division: envy and transgression", ur: "Cause of division: envy and transgression" }, verseRef: "42:14" },
        { term: "وَلَوْلَا كَلِمَةٌ سَبَقَتْ مِن رَّبِّكَ", meaning: { en: "Had it not been for a word from your Lord", ur: "Had it not been for a word from your Lord" }, explanation: { en: "Divine decree delays judgment", ur: "Divine decree delays judgment" }, verseRef: "42:14" },
        { term: "إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: { en: "Until an appointed term", ur: "Until an appointed term" }, explanation: { en: "Respite until Day of Judgment", ur: "Respite until Day of Judgment" }, verseRef: "42:14" },
        { term: "لَقُضِيَ بَيْنَهُمْ", meaning: { en: "It would have been judged between them", ur: "It would have been judged between them" }, explanation: { en: "Judgment would already have been issued", ur: "Judgment would already have been issued" }, verseRef: "42:14" }
      ]
    },

    consultationPrinciple: {
      name: "Principle of Consultation (Shura)",
      nameArabic: "مبدأ الشورى",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ", meaning: { en: "Those who respond to their Lord", ur: "Those who respond to their Lord" }, explanation: { en: "First quality: responding to Allah", ur: "First quality: responding to Allah" }, verseRef: "42:38" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "And establish prayer" }, explanation: { en: "Second quality: maintaining prayer", ur: "Second quality: maintaining prayer" }, verseRef: "42:38" },
        { term: "وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", meaning: { en: "And their affair is consultation among them", ur: "And their affair is consultation among them" }, explanation: { en: "Third quality: mutual consultation - basis of Islamic governance", ur: "Third quality: mutual consultation - basis of Islamic governance" }, verseRef: "42:38" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: { en: "And from what We provided them, they spend", ur: "And from what We provided them, they spend" }, explanation: { en: "Fourth quality: charitable spending", ur: "Fourth quality: charitable spending" }, verseRef: "42:38" }
      ]
    },

    forgivenessAndPardon: {
      name: "Forgiveness and Pardon",
      nameArabic: "المغفرة والعفو",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "وَالَّذِينَ يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ", meaning: { en: "Those who avoid major sins and immoralities", ur: "Those who avoid major sins and immoralities" }, explanation: { en: "Avoiding grave sins", ur: "Avoiding grave sins" }, verseRef: "42:37" },
        { term: "وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ", meaning: { en: "And when they are angry, they forgive", ur: "And when they are angry, they forgive" }, explanation: { en: "Forgiving even in anger - sign of character", ur: "Forgiving even in anger - sign of character" }, verseRef: "42:37" },
        { term: "وَلَمَن صَبَرَ وَغَفَرَ", meaning: { en: "And whoever is patient and forgives", ur: "And whoever is patient and forgives" }, explanation: { en: "Patience combined with forgiveness", ur: "Patience combined with forgiveness" }, verseRef: "42:43" },
        { term: "إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ", meaning: { en: "Indeed that is of the matters of determination", ur: "Indeed that is of the matters of determination" }, explanation: { en: "Forgiveness requires strength, not weakness", ur: "Forgiveness requires strength, not weakness" }, verseRef: "42:43" },
        { term: "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ", meaning: { en: "And He is the One who accepts repentance from His servants", ur: "And He is the One who accepts repentance from His servants" }, explanation: { en: "Allah's acceptance of repentance", ur: "Allah's acceptance of repentance" }, verseRef: "42:25" },
        { term: "وَيَعْفُو عَنِ السَّيِّئَاتِ", meaning: { en: "And pardons misdeeds", ur: "And pardons misdeeds" }, explanation: { en: "Divine pardon for sins", ur: "Divine pardon for sins" }, verseRef: "42:25" },
        { term: "وَيَعْلَمُ مَا تَفْعَلُونَ", meaning: { en: "And knows what you do", ur: "And knows what you do" }, explanation: { en: "Complete divine knowledge", ur: "Complete divine knowledge" }, verseRef: "42:25" }
      ]
    },

    standingAgainstOppression: {
      name: "Standing Against Oppression",
      nameArabic: "مواجهة الظلم",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَالَّذِينَ إِذَا أَصَابَهُمُ الْبَغْيُ هُمْ يَنتَصِرُونَ", meaning: { en: "Those who when tyranny strikes them, they defend themselves", ur: "Those who when tyranny strikes them, they defend themselves" }, explanation: { en: "Right to defend against oppression", ur: "Right to defend against oppression" }, verseRef: "42:39" },
        { term: "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا", meaning: { en: "The recompense of evil is an evil like it", ur: "The recompense of evil is an evil like it" }, explanation: { en: "Proportional retaliation permitted", ur: "Proportional retaliation permitted" }, verseRef: "42:40" },
        { term: "فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ", meaning: { en: "But whoever pardons and makes reconciliation, his reward is with Allah", ur: "But whoever pardons and makes reconciliation, his reward is with Allah" }, explanation: { en: "Forgiveness is better and rewarded", ur: "Forgiveness is better and rewarded" }, verseRef: "42:40" },
        { term: "إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ", meaning: { en: "Indeed He does not love the wrongdoers", ur: "Indeed He does not love the wrongdoers" }, explanation: { en: "Allah's dislike of oppressors", ur: "Allah's dislike of oppressors" }, verseRef: "42:40" },
        { term: "وَلَمَنِ انتَصَرَ بَعْدَ ظُلْمِهِ فَأُولَٰئِكَ مَا عَلَيْهِم مِّن سَبِيلٍ", meaning: { en: "Whoever defends himself after being wronged, there is no blame on them", ur: "Whoever defends himself after being wronged, there is no blame on them" }, explanation: { en: "No sin in self-defense", ur: "No sin in self-defense" }, verseRef: "42:41" },
        { term: "إِنَّمَا السَّبِيلُ عَلَى الَّذِينَ يَظْلِمُونَ النَّاسَ", meaning: { en: "The blame is only upon those who wrong people", ur: "The blame is only upon those who wrong people" }, explanation: { en: "Blame lies with oppressors", ur: "Blame lies with oppressors" }, verseRef: "42:42" },
        { term: "وَيَبْغُونَ فِي الْأَرْضِ بِغَيْرِ الْحَقِّ", meaning: { en: "And transgress on earth without right", ur: "And transgress on earth without right" }, explanation: { en: "Unjust transgression condemned", ur: "Unjust transgression condemned" }, verseRef: "42:42" }
      ]
    },

    cosmicSigns: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "لَهُ مَقَالِيدُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To Him belong the keys of heavens and earth", ur: "To Him belong the keys of heavens and earth" }, explanation: { en: "Divine ownership of all creation", ur: "Divine ownership of all creation" }, verseRef: "42:12" },
        { term: "يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ", meaning: { en: "He extends provision for whom He wills and restricts", ur: "He extends provision for whom He wills and restricts" }, explanation: { en: "Divine control over provision", ur: "Divine control over provision" }, verseRef: "42:12" },
        { term: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "And among His signs is the creation of heavens and earth", ur: "And among His signs is the creation of heavens and earth" }, explanation: { en: "Cosmic creation as divine sign", ur: "Cosmic creation as divine sign" }, verseRef: "42:29" },
        { term: "وَمَا بَثَّ فِيهِمَا مِن دَابَّةٍ", meaning: { en: "And what He has dispersed in them of creatures", ur: "And what He has dispersed in them of creatures" }, explanation: { en: "Life forms as signs of divine power", ur: "Life forms as signs of divine power" }, verseRef: "42:29" },
        { term: "وَهُوَ عَلَىٰ جَمْعِهِمْ إِذَا يَشَاءُ قَدِيرٌ", meaning: { en: "And He is able to gather them when He wills", ur: "And He is able to gather them when He wills" }, explanation: { en: "Power to resurrect all creatures", ur: "Power to resurrect all creatures" }, verseRef: "42:29" }
      ]
    },

    maritimeSigns: {
      name: "Signs in Ships and Sea",
      nameArabic: "آيات في السفن والبحر",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "وَمِنْ آيَاتِهِ الْجَوَارِ فِي الْبَحْرِ كَالْأَعْلَامِ", meaning: { en: "And among His signs are ships sailing in the sea like mountains", ur: "And among His signs are ships sailing in the sea like mountains" }, explanation: { en: "Ships as divine signs of Allah's power", ur: "Ships as divine signs of Allah's power" }, verseRef: "42:32" },
        { term: "إِن يَشَأْ يُسْكِنِ الرِّيحَ", meaning: { en: "If He wills, He can still the wind", ur: "If He wills, He can still the wind" }, explanation: { en: "Control over wind that moves ships", ur: "Control over wind that moves ships" }, verseRef: "42:33" },
        { term: "فَيَظْلَلْنَ رَوَاكِدَ عَلَىٰ ظَهْرِهِ", meaning: { en: "And they would remain motionless on its surface", ur: "And they would remain motionless on its surface" }, explanation: { en: "Ships dependent on divine will", ur: "Ships dependent on divine will" }, verseRef: "42:33" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ", meaning: { en: "Indeed in that are signs for every patient and grateful one", ur: "Indeed in that are signs for every patient and grateful one" }, explanation: { en: "Signs for those who are patient and thankful", ur: "Signs for those who are patient and thankful" }, verseRef: "42:33" },
        { term: "أَوْ يُوبِقْهُنَّ بِمَا كَسَبُوا", meaning: { en: "Or He could destroy them for what they earned", ur: "Or He could destroy them for what they earned" }, explanation: { en: "Ships can be wrecked as punishment", ur: "Ships can be wrecked as punishment" }, verseRef: "42:34" },
        { term: "وَيَعْفُو عَن كَثِيرٍ", meaning: { en: "And He pardons much", ur: "And He pardons much" }, explanation: { en: "Divine pardon spares many", ur: "Divine pardon spares many" }, verseRef: "42:34" }
      ]
    },

    divineSovereignty: {
      name: "Divine Sovereignty",
      nameArabic: "السيادة الإلهية",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To Him belongs the dominion of heavens and earth", ur: "To Him belongs the dominion of heavens and earth" }, explanation: { en: "Absolute divine sovereignty", ur: "Absolute divine sovereignty" }, verseRef: "42:49" },
        { term: "يَخْلُقُ مَا يَشَاءُ", meaning: { en: "He creates what He wills", ur: "He creates what He wills" }, explanation: { en: "Unlimited creative power", ur: "Unlimited creative power" }, verseRef: "42:49" },
        { term: "يَهَبُ لِمَن يَشَاءُ إِنَاثًا", meaning: { en: "He gives to whom He wills females", ur: "He gives to whom He wills females" }, explanation: { en: "Gender is divine decree", ur: "Gender is divine decree" }, verseRef: "42:49" },
        { term: "وَيَهَبُ لِمَن يَشَاءُ الذُّكُورَ", meaning: { en: "And gives to whom He wills males", ur: "And gives to whom He wills males" }, explanation: { en: "Children are divine gifts", ur: "Children are divine gifts" }, verseRef: "42:49" },
        { term: "أَوْ يُزَوِّجُهُمْ ذُكْرَانًا وَإِنَاثًا", meaning: { en: "Or He grants them both males and females", ur: "Or He grants them both males and females" }, explanation: { en: "Variety in family composition", ur: "Variety in family composition" }, verseRef: "42:50" },
        { term: "وَيَجْعَلُ مَن يَشَاءُ عَقِيمًا", meaning: { en: "And makes whom He wills barren", ur: "And makes whom He wills barren" }, explanation: { en: "Fertility is divine decision", ur: "Fertility is divine decision" }, verseRef: "42:50" },
        { term: "إِنَّهُ عَلِيمٌ قَدِيرٌ", meaning: { en: "Indeed He is Knowing, Competent", ur: "Indeed He is Knowing, Competent" }, explanation: { en: "Divine knowledge and power combined", ur: "Divine knowledge and power combined" }, verseRef: "42:50" }
      ]
    },

    trialsAndRecompense: {
      name: "Trials and Recompense",
      nameArabic: "الابتلاء والجزاء",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَا أَصَابَكُم مِّن مُّصِيبَةٍ فَبِمَا كَسَبَتْ أَيْدِيكُمْ", meaning: { en: "Whatever misfortune befalls you is for what your hands have earned", ur: "Whatever misfortune befalls you is for what your hands have earned" }, explanation: { en: "Calamities result from one's actions", ur: "Calamities result from one's actions" }, verseRef: "42:30" },
        { term: "وَيَعْفُو عَن كَثِيرٍ", meaning: { en: "And He pardons much", ur: "And He pardons much" }, explanation: { en: "Allah overlooks many sins", ur: "Allah overlooks many sins" }, verseRef: "42:30" },
        { term: "وَمَا أَنتُم بِمُعْجِزِينَ فِي الْأَرْضِ", meaning: { en: "You cannot escape on earth", ur: "You cannot escape on earth" }, explanation: { en: "No escaping divine decree", ur: "No escaping divine decree" }, verseRef: "42:31" },
        { term: "وَمَا لَكُم مِّن دُونِ اللَّهِ مِن وَلِيٍّ وَلَا نَصِيرٍ", meaning: { en: "And you have besides Allah no protector and no helper", ur: "And you have besides Allah no protector and no helper" }, explanation: { en: "Only Allah provides real protection", ur: "Only Allah provides real protection" }, verseRef: "42:31" }
      ]
    },

    propheticMission: {
      name: "Prophetic Mission",
      nameArabic: "الرسالة النبوية",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "فَلِذَٰلِكَ فَادْعُ وَاسْتَقِمْ كَمَا أُمِرْتَ", meaning: { en: "So to that invite, and be steadfast as you are commanded", ur: "So to that invite, and be steadfast as you are commanded" }, explanation: { en: "Command to invite and remain firm", ur: "Command to invite and remain firm" }, verseRef: "42:15" },
        { term: "وَلَا تَتَّبِعْ أَهْوَاءَهُمْ", meaning: { en: "And do not follow their desires", ur: "And do not follow their desires" }, explanation: { en: "Not swayed by people's wishes", ur: "Not swayed by people's wishes" }, verseRef: "42:15" },
        { term: "وَقُلْ آمَنتُ بِمَا أَنزَلَ اللَّهُ مِن كِتَابٍ", meaning: { en: "And say: I believe in whatever book Allah has sent down", ur: "And say: I believe in whatever book Allah has sent down" }, explanation: { en: "Belief in all revealed scriptures", ur: "Belief in all revealed scriptures" }, verseRef: "42:15" },
        { term: "وَأُمِرْتُ لِأَعْدِلَ بَيْنَكُمُ", meaning: { en: "And I have been commanded to be just among you", ur: "And I have been commanded to be just among you" }, explanation: { en: "Justice as prophetic principle", ur: "Justice as prophetic principle" }, verseRef: "42:15" },
        { term: "اللَّهُ رَبُّنَا وَرَبُّكُمْ", meaning: { en: "Allah is our Lord and your Lord", ur: "Allah is our Lord and your Lord" }, explanation: { en: "Shared Lord between all people", ur: "Shared Lord between all people" }, verseRef: "42:15" },
        { term: "لَنَا أَعْمَالُنَا وَلَكُمْ أَعْمَالُكُمْ", meaning: { en: "For us are our deeds, and for you your deeds", ur: "For us are our deeds, and for you your deeds" }, explanation: { en: "Individual accountability", ur: "Individual accountability" }, verseRef: "42:15" },
        { term: "لَا حُجَّةَ بَيْنَنَا وَبَيْنَكُمُ", meaning: { en: "There is no argument between us and you", ur: "There is no argument between us and you" }, explanation: { en: "No need for debate - truth is clear", ur: "No need for debate - truth is clear" }, verseRef: "42:15" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "يَوْمَ لَا مَرَدَّ لَهُ مِنَ اللَّهِ", meaning: { en: "A Day which there is no averting from Allah", ur: "A Day which there is no averting from Allah" }, explanation: { en: "Judgment Day is unavoidable", ur: "Judgment Day is unavoidable" }, verseRef: "42:47" },
        { term: "مَا لَكُم مِّن مَّلْجَإٍ يَوْمَئِذٍ", meaning: { en: "No refuge for you that Day", ur: "No refuge for you that Day" }, explanation: { en: "No place to hide on Judgment Day", ur: "No place to hide on Judgment Day" }, verseRef: "42:47" },
        { term: "وَمَا لَكُم مِّن نَّكِيرٍ", meaning: { en: "Nor for you any denial", ur: "Nor for you any denial" }, explanation: { en: "No denying one's deeds", ur: "No denying one's deeds" }, verseRef: "42:47" },
        { term: "تَرَى الظَّالِمِينَ مُشْفِقِينَ مِمَّا كَسَبُوا", meaning: { en: "You will see the wrongdoers fearful of what they earned", ur: "You will see the wrongdoers fearful of what they earned" }, explanation: { en: "Terror of wrongdoers facing their deeds", ur: "Terror of wrongdoers facing their deeds" }, verseRef: "42:22" },
        { term: "وَهُوَ وَاقِعٌ بِهِمْ", meaning: { en: "And it will befall them", ur: "And it will befall them" }, explanation: { en: "Punishment will definitely reach them", ur: "Punishment will definitely reach them" }, verseRef: "42:22" },
        { term: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فِي رَوْضَاتِ الْجَنَّاتِ", meaning: { en: "And those who believed and did righteous deeds will be in gardens of Paradise", ur: "And those who believed and did righteous deeds will be in gardens of Paradise" }, explanation: { en: "Believers in gardens of bliss", ur: "Believers in gardens of bliss" }, verseRef: "42:22" },
        { term: "لَهُم مَّا يَشَاءُونَ عِندَ رَبِّهِمْ", meaning: { en: "They will have whatever they wish with their Lord", ur: "They will have whatever they wish with their Lord" }, explanation: { en: "Unlimited wishes fulfilled in Paradise", ur: "Unlimited wishes fulfilled in Paradise" }, verseRef: "42:22" }
      ]
    },

    guidanceAndMisguidance: {
      name: "Guidance and Misguidance",
      nameArabic: "الهداية والضلال",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِن وَلِيٍّ مِّن بَعْدِهِ", meaning: { en: "Whoever Allah sends astray, for him there is no protector after Him", ur: "Whoever Allah sends astray, for him there is no protector after Him" }, explanation: { en: "No help for those Allah allows to stray", ur: "No help for those Allah allows to stray" }, verseRef: "42:44" },
        { term: "وَتَرَى الظَّالِمِينَ لَمَّا رَأَوُا الْعَذَابَ", meaning: { en: "And you will see the wrongdoers when they see the punishment", ur: "And you will see the wrongdoers when they see the punishment" }, explanation: { en: "Wrongdoers will see punishment", ur: "Wrongdoers will see punishment" }, verseRef: "42:44" },
        { term: "يَقُولُونَ هَلْ إِلَىٰ مَرَدٍّ مِّن سَبِيلٍ", meaning: { en: "Saying: Is there any way to return?", ur: "Saying: Is there any way to return?" }, explanation: { en: "Desperate plea to go back", ur: "Desperate plea to go back" }, verseRef: "42:44" },
        { term: "وَإِنَّكَ لَتَهْدِي إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "And indeed you guide to a straight path", ur: "And indeed you guide to a straight path" }, explanation: { en: "Prophet guides to the straight way", ur: "Prophet guides to the straight way" }, verseRef: "42:52" },
        { term: "صِرَاطِ اللَّهِ", meaning: { en: "The path of Allah", ur: "The path of Allah" }, explanation: { en: "Allah's path - the only true path", ur: "Allah's path - the only true path" }, verseRef: "42:53" },
        { term: "الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: { en: "To whom belongs whatever is in heavens and earth", ur: "To whom belongs whatever is in heavens and earth" }, explanation: { en: "Allah owns all creation", ur: "Allah owns all creation" }, verseRef: "42:53" },
        { term: "أَلَا إِلَى اللَّهِ تَصِيرُ الْأُمُورُ", meaning: { en: "Unquestionably, to Allah do all matters return", ur: "Unquestionably, to Allah do all matters return" }, explanation: { en: "Final return to Allah - closing verse", ur: "Final return to Allah - closing verse" }, verseRef: "42:53" }
      ]
    },

    divineNames: {
      name: "Divine Names and Attributes",
      nameArabic: "أسماء الله وصفاته",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "الْعَزِيزُ الْحَكِيمُ", meaning: { en: "The Mighty, the Wise", ur: "غالب، حکمت والا" }, explanation: { en: "Power combined with wisdom", ur: "قدرت اور حکمت کا اجتماع" }, verseRef: "42:3" },
        { term: "الْعَلِيُّ الْعَظِيمُ", meaning: { en: "The Most High, the Greatest", ur: "The Most High, the Greatest" }, explanation: { en: "Supreme elevation and grandeur", ur: "Supreme elevation and grandeur" }, verseRef: "42:4" },
        { term: "السَّمِيعُ الْبَصِيرُ", meaning: { en: "The Hearing, the Seeing", ur: "The Hearing, the Seeing" }, explanation: { en: "All-perceiving awareness", ur: "All-perceiving awareness" }, verseRef: "42:11" },
        { term: "اللَّطِيفُ الْخَبِيرُ", meaning: { en: "The Subtle, the Aware", ur: "The Subtle, the Aware" }, explanation: { en: "Gentle awareness of all details", ur: "Gentle awareness of all details" }, verseRef: "42:19" },
        { term: "الْقَوِيُّ الْعَزِيزُ", meaning: { en: "The Powerful, the Mighty", ur: "The Powerful, the Mighty" }, explanation: { en: "Strength and dominance", ur: "Strength and dominance" }, verseRef: "42:19" },
        { term: "الْوَلِيُّ", meaning: { en: "The Protector", ur: "The Protector" }, explanation: { en: "Allah as guardian and supporter", ur: "Allah as guardian and supporter" }, verseRef: "42:9" },
        { term: "الَّذِي يُحْيِي الْمَوْتَىٰ", meaning: { en: "The One who gives life to the dead", ur: "The One who gives life to the dead" }, explanation: { en: "Power of resurrection", ur: "Power of resurrection" }, verseRef: "42:9" }
      ]
    },

    beliversCharacteristics: {
      name: "Characteristics of Believers",
      nameArabic: "صفات المؤمنين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "يَسْتَجِيبُونَ لِرَبِّهِمْ", meaning: { en: "They respond to their Lord", ur: "They respond to their Lord" }, explanation: { en: "Responsive obedience to Allah", ur: "Responsive obedience to Allah" }, verseRef: "42:26" },
        { term: "وَيُقِيمُونَ الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "And establish prayer" }, explanation: { en: "Maintaining regular prayer", ur: "Maintaining regular prayer" }, verseRef: "42:38" },
        { term: "أَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", meaning: { en: "Their affair is consultation among them", ur: "Their affair is consultation among them" }, explanation: { en: "Mutual consultation in decisions", ur: "Mutual consultation in decisions" }, verseRef: "42:38" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: { en: "And from what We provided them, they spend", ur: "And from what We provided them, they spend" }, explanation: { en: "Generous spending from provisions", ur: "Generous spending from provisions" }, verseRef: "42:38" },
        { term: "يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ", meaning: { en: "They avoid major sins", ur: "They avoid major sins" }, explanation: { en: "Staying away from grave sins", ur: "Staying away from grave sins" }, verseRef: "42:37" },
        { term: "إِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ", meaning: { en: "When angry, they forgive", ur: "When angry, they forgive" }, explanation: { en: "Forgiving even in anger", ur: "Forgiving even in anger" }, verseRef: "42:37" },
        { term: "يَنتَصِرُونَ", meaning: { en: "They defend themselves", ur: "They defend themselves" }, explanation: { en: "Standing up against oppression", ur: "Standing up against oppression" }, verseRef: "42:39" }
      ]
    },

    transcendenceOfAllah: {
      name: "Transcendence of Allah",
      nameArabic: "تنزيه الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Creator of heavens and earth", ur: "Creator of heavens and earth" }, explanation: { en: "Originator of the universe", ur: "Originator of the universe" }, verseRef: "42:11" },
        { term: "جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا", meaning: { en: "Made for you from yourselves mates", ur: "Made for you from yourselves mates" }, explanation: { en: "Created human pairs", ur: "Created human pairs" }, verseRef: "42:11" },
        { term: "وَمِنَ الْأَنْعَامِ أَزْوَاجًا", meaning: { en: "And of livestock mates", ur: "And of livestock mates" }, explanation: { en: "Animal pairs for reproduction", ur: "Animal pairs for reproduction" }, verseRef: "42:11" },
        { term: "يَذْرَؤُكُمْ فِيهِ", meaning: { en: "He multiplies you thereby", ur: "He multiplies you thereby" }, explanation: { en: "Reproduction system established by Allah", ur: "Reproduction system established by Allah" }, verseRef: "42:11" },
        { term: "لَيْسَ كَمِثْلِهِ شَيْءٌ", meaning: { en: "There is nothing like Him", ur: "There is nothing like Him" }, explanation: { en: "Absolute uniqueness of Allah - no comparison", ur: "Absolute uniqueness of Allah - no comparison" }, verseRef: "42:11" },
        { term: "وَهُوَ السَّمِيعُ الْبَصِيرُ", meaning: { en: "And He is the Hearing, the Seeing", ur: "And He is the Hearing, the Seeing" }, explanation: { en: "Perfect perception despite transcendence", ur: "Perfect perception despite transcendence" }, verseRef: "42:11" }
      ]
    }
  },

  relationships: [
    { from: "شَرَعَ لَكُم مِّنَ الدِّينِ", to: "مَا وَصَّىٰ بِهِ نُوحًا وَإِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَىٰ", type: "continuity", description: { en: "Same religion revealed to all prophets", ur: "تمام انبیاء پر ایک ہی دین نازل ہوا" } },
    { from: "أَقِيمُوا الدِّينَ", to: "لَا تَتَفَرَّقُوا فِيهِ", type: "command", description: { en: "Establish religion without division", ur: "دین قائم کرو تفرقے کے بغیر" } },
    { from: "تَفَرَّقُوا", to: "بَغْيًا بَيْنَهُمْ", type: "causation", description: { en: "Division caused by jealousy, not ignorance", ur: "تفرقہ حسد سے ہوا، جہالت سے نہیں" } },
    { from: "أَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", to: "يُنفِقُونَ", type: "sequence", description: { en: "Consultation and spending are linked believers' qualities", ur: "مشاورت اور خرچ مومنین کی مربوط صفات ہیں" } },
    { from: "صَبَرَ", to: "غَفَرَ", type: "combination", description: { en: "Patience and forgiveness together show strength", ur: "صبر اور معافی ساتھ مل کر طاقت ظاہر کرتے ہیں" } },
    { from: "سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا", to: "فَمَنْ عَفَا وَأَصْلَحَ", type: "preference", description: { en: "Retaliation permitted but forgiveness is better", ur: "بدلہ جائز ہے لیکن معافی بہتر ہے" } },
    { from: "لَيْسَ كَمِثْلِهِ شَيْءٌ", to: "السَّمِيعُ الْبَصِيرُ", type: "balance", description: { en: "Transcendence with personal attributes", ur: "ذاتی صفات کے ساتھ تنزیہ" } },
    { from: "وَحْيًا", to: "مِن وَرَاءِ حِجَابٍ", to2: "يُرْسِلَ رَسُولًا", type: "modes", description: { en: "Three methods of divine communication", ur: "الٰہی مواصلات کے تین طریقے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening and Revelation", verses: "42:1-6", description: { en: "Ha-Mim 'Ayn-Sin-Qaf, revelation from the Mighty, Wise", ur: "Ha-Mim 'Ayn-Sin-Qaf, revelation from the Mighty, Wise" } },
      { stage: 2, theme: "Warning of Judgment", verses: "42:7-9", description: { en: "Warning of gathering Day, Allah as sole Protector", ur: "Warning of gathering Day, Allah as sole Protector" } },
      { stage: 3, theme: "Divine Transcendence", verses: "42:10-12", description: { en: "Nothing like Allah, keys of heavens and earth", ur: "Nothing like Allah, keys of heavens and earth" } },
      { stage: 4, theme: "Unity of Religion", verses: "42:13-14", description: { en: "Same religion to all prophets, warning against division", ur: "Same religion to all prophets, warning against division" } },
      { stage: 5, theme: "Prophetic Mission", verses: "42:15-19", description: { en: "Call to faith, justice, accountability", ur: "Call to faith, justice, accountability" } },
      { stage: 6, theme: "Worldly vs Afterlife Harvest", verses: "42:20", description: { en: "Choosing between worldly and eternal reward", ur: "Choosing between worldly and eternal reward" } },
      { stage: 7, theme: "Judgment Day", verses: "42:21-26", description: { en: "Wrongdoers' fate vs believers' paradise, acceptance of repentance", ur: "Wrongdoers' fate vs believers' paradise, acceptance of repentance" } },
      { stage: 8, theme: "Divine Provision", verses: "42:27-28", description: { en: "Measured provision, rain after despair", ur: "Measured provision, rain after despair" } },
      { stage: 9, theme: "Signs in Creation", verses: "42:29-35", description: { en: "Creatures, ships, calamities from one's deeds", ur: "Creatures, ships, calamities from one's deeds" } },
      { stage: 10, theme: "Believers' Qualities", verses: "42:36-43", description: { en: "Forgiveness, consultation, patience, defense against oppression", ur: "Forgiveness, consultation, patience, defense against oppression" } },
      { stage: 11, theme: "Misguidance and Return", verses: "42:44-48", description: { en: "No guidance for whom Allah leaves astray, seeking return", ur: "No guidance for whom Allah leaves astray, seeking return" } },
      { stage: 12, theme: "Divine Sovereignty", verses: "42:49-50", description: { en: "Allah gives males, females, both, or none", ur: "Allah gives males, females, both, or none" } },
      { stage: 13, theme: "Modes of Revelation", verses: "42:51-53", description: { en: "Three ways Allah communicates, guidance to straight path", ur: "Three ways Allah communicates, guidance to straight path" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Practice Shura (consultation)", how: "Make collective decisions through mutual consultation - family, community, governance", verse: "42:38" },
      { principle: "Forgive even when angry", how: "Control anger and choose forgiveness - it shows strength, not weakness", verse: "42:37, 42:43" },
      { principle: "Maintain religious unity", how: "Focus on core beliefs shared by all prophets, avoid sectarian division", verse: "42:13" },
      { principle: "Defend against oppression", how: "Standing up against injustice is permitted, but forgiveness is more rewarded", verse: "42:39-40" },
      { principle: "Balance justice and mercy", how: "Retaliation should be proportional, but pardon is better", verse: "42:40" },
      { principle: "Accept trials as consequence", how: "Understand calamities may result from one's actions, but Allah pardons much", verse: "42:30" },
      { principle: "Avoid major sins", how: "Stay away from grave sins and immoralities", verse: "42:37" },
      { principle: "Spend from provisions", how: "Share what Allah has given you with others", verse: "42:38" },
      { principle: "Remain steadfast in invitation", how: "Continue calling to truth without following desires of others", verse: "42:15" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Consultation and Unity", ur: "The Surah of Consultation and Unity" },
    insight: { en: "Surah Ash-Shura is unique in several ways. First, it is the only surah with two sets of disconnected letters (Ha-Mim and 'Ayn-Sin-Qaf), emphasizing its special place in the Ha-Mim series. Second, it gives the surah its name from the principle of 'shura' (consultation) in verse 38 - one of the foundations of Islamic governance and community decision-making. Third, it presents the most comprehensive statement on the unity of religion: the same core message was given to Nuh, Ibrahim, Musa, Isa, and Muhammad. Division came not from different messages but from 'jealousy between themselves' after knowledge came. Fourth, it balances the right to self-defense with the superiority of forgiveness - retaliation is permitted but 'whoever pardons and makes reconciliation, his reward is with Allah.' Fifth, the famous verse 'There is nothing like Him' (42:11) is the clearest statement of divine transcendence in the Quran, yet immediately followed by 'He is the Hearing, the Seeing' - showing Allah is both utterly unique and personally aware. The surah closes with the three modes of divine communication, explaining how prophets received revelation, and ends with the powerful statement: 'To Allah return all matters.'", ur: "Surah Ash-Shura is unique in several ways. First, it is the only surah with two sets of disconnected letters (Ha-Mim and 'Ayn-Sin-Qaf), emphasizing its special place in the Ha-Mim series. Second, it gives the surah its name from the principle of 'shura' (consultation) in verse 38 - one of the foundations of Islamic governance and community decision-making. Third, it presents the most comprehensive statement on the unity of religion: the same core message was given to Nuh, Ibrahim, Musa, Isa, and Muhammad. Division came not from different messages but from 'jealousy between themselves' after knowledge came. Fourth, it balances the right to self-defense with the superiority of forgiveness - retaliation is permitted but 'whoever pardons and makes reconciliation, his reward is with Allah.' Fifth, the famous verse 'There is nothing like Him' (42:11) is the clearest statement of divine transcendence in the Quran, yet immediately followed by 'He is the Hearing, the Seeing' - showing Allah is both utterly unique and personally aware. The surah closes with the three modes of divine communication, explaining how prophets received revelation, and ends with the powerful statement: 'To Allah return all matters.'" }
  },

  historicalContext: {
    note: { en: "This Makkan surah was revealed during a period when the Prophet faced opposition and needed to clarify the nature of his mission. The emphasis on the unity of religion countered claims that Islam was a new or foreign religion - it was the same message given to all prophets. The principle of shura (consultation) established an Islamic approach to governance distinct from both the tribal absolutism of Arabia and the imperial systems of Rome and Persia. The detailed explanation of revelation modes (42:51) responded to questions about how the Prophet received divine communication.", ur: "This Makkan surah was revealed during a period when the Prophet faced opposition and needed to clarify the nature of his mission. The emphasis on the unity of religion countered claims that Islam was a new or foreign religion - it was the same message given to all prophets. The principle of shura (consultation) established an Islamic approach to governance distinct from both the tribal absolutism of Arabia and the imperial systems of Rome and Persia. The detailed explanation of revelation modes (42:51) responded to questions about how the Prophet received divine communication." }
  },

  linguisticFeatures: {
    features: [
      { feature: "حم عسق", example: { en: "Double Huruf Muqatta'at", ur: "Double Huruf Muqatta'at" }, effect: { en: "Only surah with two sets of disconnected letters", ur: "Only surah with two sets of disconnected letters" } },
      { feature: "شُورَىٰ", example: { en: "Consultation", ur: "Consultation" }, effect: { en: "Noun form emphasizing the principle itself", ur: "Noun form emphasizing the principle itself" } },
      { feature: "لَيْسَ كَمِثْلِهِ شَيْءٌ", example: { en: "Nothing like Him", ur: "Nothing like Him" }, effect: { en: "Double negation (laysa + ka-mithlihi) for emphasis on uniqueness", ur: "Double negation (laysa + ka-mithlihi) for emphasis on uniqueness" } },
      { feature: "عَزْمِ الْأُمُورِ", example: { en: "Matters of determination", ur: "Matters of determination" }, effect: { en: "Forgiveness requires 'azm - firm resolve", ur: "Forgiveness requires 'azm - firm resolve" } },
      { feature: "مَقَالِيدُ", example: { en: "Keys", ur: "Keys" }, effect: { en: "Plural of miqlaad - keys to treasures", ur: "Plural of miqlaad - keys to treasures" } },
      { feature: "رَوْضَاتِ الْجَنَّاتِ", example: { en: "Gardens of Paradise", ur: "Gardens of Paradise" }, effect: { en: "Double plural - gardens within gardens", ur: "Double plural - gardens within gardens" } }
    ]
  },

  shuraVerse: {
    verse: 38,
    text: "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
    translation: { en: "And those who respond to their Lord, establish prayer, and whose affair is consultation among them, and from what We have provided them, they spend", ur: "And those who respond to their Lord, establish prayer, and whose affair is consultation among them, and from what We have provided them, they spend" },
    significance: { en: "This verse establishes Shura (consultation) as a fundamental Islamic principle alongside prayer and charity. It places collective decision-making at the heart of the Muslim community's identity.", ur: "This verse establishes Shura (consultation) as a fundamental Islamic principle alongside prayer and charity. It places collective decision-making at the heart of the Muslim community's identity." }
  },

  transcendenceVerse: {
    verse: 11,
    text: "فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ ۚ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا وَمِنَ الْأَنْعَامِ أَزْوَاجًا ۖ يَذْرَؤُكُمْ فِيهِ ۚ لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ",
    translation: { en: "Creator of the heavens and earth. He made for you from yourselves mates, and among livestock, mates. He multiplies you thereby. There is nothing like Him, and He is the Hearing, the Seeing.", ur: "Creator of the heavens and earth. He made for you from yourselves mates, and among livestock, mates. He multiplies you thereby. There is nothing like Him, and He is the Hearing, the Seeing." },
    significance: { en: "Contains the Quran's clearest statement of divine transcendence (laysa ka-mithlihi shay') while affirming Allah's personal attributes - the balance of tanzih (transcendence) and tashbih (similarity) in Islamic theology.", ur: "Contains the Quran's clearest statement of divine transcendence (laysa ka-mithlihi shay') while affirming Allah's personal attributes - the balance of tanzih (transcendence) and tashbih (similarity) in Islamic theology." }
  },

  hamimConnection: {
    note: { en: "Part of the Ha-Mim series (Surahs 40-46)", ur: "Part of the Ha-Mim series (Surahs 40-46)" },
    series: ["Ghafir (40)", "Fussilat (41)", "Ash-Shura (42)", "Az-Zukhruf (43)", "Ad-Dukhan (44)", "Al-Jathiyah (45)", "Al-Ahqaf (46)"],
    uniqueness: { en: "Ash-Shura is unique in the series for having an additional set of letters ('Ayn-Sin-Qaf) after Ha-Mim", ur: "Ash-Shura is unique in the series for having an additional set of letters ('Ayn-Sin-Qaf) after Ha-Mim" }
  }
};

export default ONTOLOGY;
