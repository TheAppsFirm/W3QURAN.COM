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
        { term: "حم عسق", meaning: "Ha-Mim, 'Ayn-Sin-Qaf", explanation: "Unique double set of disconnected letters in Quran", verseRef: "42:1-2" },
        { term: "كَذَٰلِكَ يُوحِي إِلَيْكَ", meaning: "Thus He reveals to you", explanation: "Continuity of revelation to Muhammad", verseRef: "42:3" },
        { term: "وَإِلَى الَّذِينَ مِن قَبْلِكَ", meaning: "And to those before you", explanation: "Same revelation to previous prophets", verseRef: "42:3" },
        { term: "اللَّهُ الْعَزِيزُ الْحَكِيمُ", meaning: "Allah, the Mighty, the Wise", explanation: "Source of all revelation", verseRef: "42:3" },
        { term: "وَكَذَٰلِكَ أَوْحَيْنَا إِلَيْكَ رُوحًا مِّنْ أَمْرِنَا", meaning: "And thus We revealed to you a spirit from Our command", explanation: "Quran as spiritual guidance from divine command", verseRef: "42:52" },
        { term: "مَا كُنتَ تَدْرِي مَا الْكِتَابُ وَلَا الْإِيمَانُ", meaning: "You did not know what the Book was nor faith", explanation: "Prophet's state before revelation", verseRef: "42:52" },
        { term: "جَعَلْنَاهُ نُورًا نَّهْدِي بِهِ مَن نَّشَاءُ", meaning: "We made it a light by which We guide whom We will", explanation: "Quran as guiding light", verseRef: "42:52" }
      ]
    },

    modesOfRevelation: {
      name: "Three Modes of Divine Communication",
      nameArabic: "طرق الوحي الإلهي",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَا كَانَ لِبَشَرٍ أَن يُكَلِّمَهُ اللَّهُ", meaning: "It is not for a human that Allah should speak to him", explanation: "Human cannot directly perceive divine speech", verseRef: "42:51" },
        { term: "إِلَّا وَحْيًا", meaning: "Except by inspiration", explanation: "First mode: direct inspiration into the heart", verseRef: "42:51" },
        { term: "أَوْ مِن وَرَاءِ حِجَابٍ", meaning: "Or from behind a veil", explanation: "Second mode: Allah speaks but is unseen (like to Musa)", verseRef: "42:51" },
        { term: "أَوْ يُرْسِلَ رَسُولًا فَيُوحِيَ بِإِذْنِهِ", meaning: "Or sends a messenger to reveal by His permission", explanation: "Third mode: through angel Jibreel", verseRef: "42:51" },
        { term: "إِنَّهُ عَلِيٌّ حَكِيمٌ", meaning: "Indeed He is Most High, Most Wise", explanation: "Divine wisdom in communication methods", verseRef: "42:51" }
      ]
    },

    unityOfReligion: {
      name: "Unity of Religion",
      nameArabic: "وحدة الدين",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "شَرَعَ لَكُم مِّنَ الدِّينِ مَا وَصَّىٰ بِهِ نُوحًا", meaning: "He prescribed for you of religion what He enjoined upon Nuh", explanation: "Same religion from earliest prophet", verseRef: "42:13" },
        { term: "وَالَّذِي أَوْحَيْنَا إِلَيْكَ", meaning: "And what We revealed to you", explanation: "Muhammad receives the same message", verseRef: "42:13" },
        { term: "وَمَا وَصَّيْنَا بِهِ إِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَىٰ", meaning: "And what We enjoined upon Ibrahim, Musa, and Isa", explanation: "Major prophets received same core message", verseRef: "42:13" },
        { term: "أَنْ أَقِيمُوا الدِّينَ وَلَا تَتَفَرَّقُوا فِيهِ", meaning: "Establish the religion and do not be divided in it", explanation: "Core command: unity in worship", verseRef: "42:13" },
        { term: "كَبُرَ عَلَى الْمُشْرِكِينَ مَا تَدْعُوهُمْ إِلَيْهِ", meaning: "Difficult for polytheists is what you call them to", explanation: "Pure monotheism is hard for idolaters", verseRef: "42:13" },
        { term: "اللَّهُ يَجْتَبِي إِلَيْهِ مَن يَشَاءُ", meaning: "Allah chooses for Himself whom He wills", explanation: "Divine selection of believers", verseRef: "42:13" }
      ]
    },

    divisionInReligion: {
      name: "Division After Knowledge",
      nameArabic: "التفرق بعد العلم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَا تَفَرَّقُوا إِلَّا مِن بَعْدِ مَا جَاءَهُمُ الْعِلْمُ", meaning: "They divided not except after knowledge had come to them", explanation: "Division came after clear guidance, not from ignorance", verseRef: "42:14" },
        { term: "بَغْيًا بَيْنَهُمْ", meaning: "Out of jealous rivalry between them", explanation: "Cause of division: envy and transgression", verseRef: "42:14" },
        { term: "وَلَوْلَا كَلِمَةٌ سَبَقَتْ مِن رَّبِّكَ", meaning: "Had it not been for a word from your Lord", explanation: "Divine decree delays judgment", verseRef: "42:14" },
        { term: "إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: "Until an appointed term", explanation: "Respite until Day of Judgment", verseRef: "42:14" },
        { term: "لَقُضِيَ بَيْنَهُمْ", meaning: "It would have been judged between them", explanation: "Judgment would already have been issued", verseRef: "42:14" }
      ]
    },

    consultationPrinciple: {
      name: "Principle of Consultation (Shura)",
      nameArabic: "مبدأ الشورى",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ", meaning: "Those who respond to their Lord", explanation: "First quality: responding to Allah", verseRef: "42:38" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: "And establish prayer", explanation: "Second quality: maintaining prayer", verseRef: "42:38" },
        { term: "وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", meaning: "And their affair is consultation among them", explanation: "Third quality: mutual consultation - basis of Islamic governance", verseRef: "42:38" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: "And from what We provided them, they spend", explanation: "Fourth quality: charitable spending", verseRef: "42:38" }
      ]
    },

    forgivenessAndPardon: {
      name: "Forgiveness and Pardon",
      nameArabic: "المغفرة والعفو",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "وَالَّذِينَ يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ", meaning: "Those who avoid major sins and immoralities", explanation: "Avoiding grave sins", verseRef: "42:37" },
        { term: "وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ", meaning: "And when they are angry, they forgive", explanation: "Forgiving even in anger - sign of character", verseRef: "42:37" },
        { term: "وَلَمَن صَبَرَ وَغَفَرَ", meaning: "And whoever is patient and forgives", explanation: "Patience combined with forgiveness", verseRef: "42:43" },
        { term: "إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ", meaning: "Indeed that is of the matters of determination", explanation: "Forgiveness requires strength, not weakness", verseRef: "42:43" },
        { term: "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ", meaning: "And He is the One who accepts repentance from His servants", explanation: "Allah's acceptance of repentance", verseRef: "42:25" },
        { term: "وَيَعْفُو عَنِ السَّيِّئَاتِ", meaning: "And pardons misdeeds", explanation: "Divine pardon for sins", verseRef: "42:25" },
        { term: "وَيَعْلَمُ مَا تَفْعَلُونَ", meaning: "And knows what you do", explanation: "Complete divine knowledge", verseRef: "42:25" }
      ]
    },

    standingAgainstOppression: {
      name: "Standing Against Oppression",
      nameArabic: "مواجهة الظلم",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَالَّذِينَ إِذَا أَصَابَهُمُ الْبَغْيُ هُمْ يَنتَصِرُونَ", meaning: "Those who when tyranny strikes them, they defend themselves", explanation: "Right to defend against oppression", verseRef: "42:39" },
        { term: "وَجَزَاءُ سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا", meaning: "The recompense of evil is an evil like it", explanation: "Proportional retaliation permitted", verseRef: "42:40" },
        { term: "فَمَنْ عَفَا وَأَصْلَحَ فَأَجْرُهُ عَلَى اللَّهِ", meaning: "But whoever pardons and makes reconciliation, his reward is with Allah", explanation: "Forgiveness is better and rewarded", verseRef: "42:40" },
        { term: "إِنَّهُ لَا يُحِبُّ الظَّالِمِينَ", meaning: "Indeed He does not love the wrongdoers", explanation: "Allah's dislike of oppressors", verseRef: "42:40" },
        { term: "وَلَمَنِ انتَصَرَ بَعْدَ ظُلْمِهِ فَأُولَٰئِكَ مَا عَلَيْهِم مِّن سَبِيلٍ", meaning: "Whoever defends himself after being wronged, there is no blame on them", explanation: "No sin in self-defense", verseRef: "42:41" },
        { term: "إِنَّمَا السَّبِيلُ عَلَى الَّذِينَ يَظْلِمُونَ النَّاسَ", meaning: "The blame is only upon those who wrong people", explanation: "Blame lies with oppressors", verseRef: "42:42" },
        { term: "وَيَبْغُونَ فِي الْأَرْضِ بِغَيْرِ الْحَقِّ", meaning: "And transgress on earth without right", explanation: "Unjust transgression condemned", verseRef: "42:42" }
      ]
    },

    cosmicSigns: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "لَهُ مَقَالِيدُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "To Him belong the keys of heavens and earth", explanation: "Divine ownership of all creation", verseRef: "42:12" },
        { term: "يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ", meaning: "He extends provision for whom He wills and restricts", explanation: "Divine control over provision", verseRef: "42:12" },
        { term: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "And among His signs is the creation of heavens and earth", explanation: "Cosmic creation as divine sign", verseRef: "42:29" },
        { term: "وَمَا بَثَّ فِيهِمَا مِن دَابَّةٍ", meaning: "And what He has dispersed in them of creatures", explanation: "Life forms as signs of divine power", verseRef: "42:29" },
        { term: "وَهُوَ عَلَىٰ جَمْعِهِمْ إِذَا يَشَاءُ قَدِيرٌ", meaning: "And He is able to gather them when He wills", explanation: "Power to resurrect all creatures", verseRef: "42:29" }
      ]
    },

    maritimeSigns: {
      name: "Signs in Ships and Sea",
      nameArabic: "آيات في السفن والبحر",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "وَمِنْ آيَاتِهِ الْجَوَارِ فِي الْبَحْرِ كَالْأَعْلَامِ", meaning: "And among His signs are ships sailing in the sea like mountains", explanation: "Ships as divine signs of Allah's power", verseRef: "42:32" },
        { term: "إِن يَشَأْ يُسْكِنِ الرِّيحَ", meaning: "If He wills, He can still the wind", explanation: "Control over wind that moves ships", verseRef: "42:33" },
        { term: "فَيَظْلَلْنَ رَوَاكِدَ عَلَىٰ ظَهْرِهِ", meaning: "And they would remain motionless on its surface", explanation: "Ships dependent on divine will", verseRef: "42:33" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ", meaning: "Indeed in that are signs for every patient and grateful one", explanation: "Signs for those who are patient and thankful", verseRef: "42:33" },
        { term: "أَوْ يُوبِقْهُنَّ بِمَا كَسَبُوا", meaning: "Or He could destroy them for what they earned", explanation: "Ships can be wrecked as punishment", verseRef: "42:34" },
        { term: "وَيَعْفُو عَن كَثِيرٍ", meaning: "And He pardons much", explanation: "Divine pardon spares many", verseRef: "42:34" }
      ]
    },

    divineSovereignty: {
      name: "Divine Sovereignty",
      nameArabic: "السيادة الإلهية",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "To Him belongs the dominion of heavens and earth", explanation: "Absolute divine sovereignty", verseRef: "42:49" },
        { term: "يَخْلُقُ مَا يَشَاءُ", meaning: "He creates what He wills", explanation: "Unlimited creative power", verseRef: "42:49" },
        { term: "يَهَبُ لِمَن يَشَاءُ إِنَاثًا", meaning: "He gives to whom He wills females", explanation: "Gender is divine decree", verseRef: "42:49" },
        { term: "وَيَهَبُ لِمَن يَشَاءُ الذُّكُورَ", meaning: "And gives to whom He wills males", explanation: "Children are divine gifts", verseRef: "42:49" },
        { term: "أَوْ يُزَوِّجُهُمْ ذُكْرَانًا وَإِنَاثًا", meaning: "Or He grants them both males and females", explanation: "Variety in family composition", verseRef: "42:50" },
        { term: "وَيَجْعَلُ مَن يَشَاءُ عَقِيمًا", meaning: "And makes whom He wills barren", explanation: "Fertility is divine decision", verseRef: "42:50" },
        { term: "إِنَّهُ عَلِيمٌ قَدِيرٌ", meaning: "Indeed He is Knowing, Competent", explanation: "Divine knowledge and power combined", verseRef: "42:50" }
      ]
    },

    trialsAndRecompense: {
      name: "Trials and Recompense",
      nameArabic: "الابتلاء والجزاء",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَا أَصَابَكُم مِّن مُّصِيبَةٍ فَبِمَا كَسَبَتْ أَيْدِيكُمْ", meaning: "Whatever misfortune befalls you is for what your hands have earned", explanation: "Calamities result from one's actions", verseRef: "42:30" },
        { term: "وَيَعْفُو عَن كَثِيرٍ", meaning: "And He pardons much", explanation: "Allah overlooks many sins", verseRef: "42:30" },
        { term: "وَمَا أَنتُم بِمُعْجِزِينَ فِي الْأَرْضِ", meaning: "You cannot escape on earth", explanation: "No escaping divine decree", verseRef: "42:31" },
        { term: "وَمَا لَكُم مِّن دُونِ اللَّهِ مِن وَلِيٍّ وَلَا نَصِيرٍ", meaning: "And you have besides Allah no protector and no helper", explanation: "Only Allah provides real protection", verseRef: "42:31" }
      ]
    },

    propheticMission: {
      name: "Prophetic Mission",
      nameArabic: "الرسالة النبوية",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "فَلِذَٰلِكَ فَادْعُ وَاسْتَقِمْ كَمَا أُمِرْتَ", meaning: "So to that invite, and be steadfast as you are commanded", explanation: "Command to invite and remain firm", verseRef: "42:15" },
        { term: "وَلَا تَتَّبِعْ أَهْوَاءَهُمْ", meaning: "And do not follow their desires", explanation: "Not swayed by people's wishes", verseRef: "42:15" },
        { term: "وَقُلْ آمَنتُ بِمَا أَنزَلَ اللَّهُ مِن كِتَابٍ", meaning: "And say: I believe in whatever book Allah has sent down", explanation: "Belief in all revealed scriptures", verseRef: "42:15" },
        { term: "وَأُمِرْتُ لِأَعْدِلَ بَيْنَكُمُ", meaning: "And I have been commanded to be just among you", explanation: "Justice as prophetic principle", verseRef: "42:15" },
        { term: "اللَّهُ رَبُّنَا وَرَبُّكُمْ", meaning: "Allah is our Lord and your Lord", explanation: "Shared Lord between all people", verseRef: "42:15" },
        { term: "لَنَا أَعْمَالُنَا وَلَكُمْ أَعْمَالُكُمْ", meaning: "For us are our deeds, and for you your deeds", explanation: "Individual accountability", verseRef: "42:15" },
        { term: "لَا حُجَّةَ بَيْنَنَا وَبَيْنَكُمُ", meaning: "There is no argument between us and you", explanation: "No need for debate - truth is clear", verseRef: "42:15" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "يَوْمَ لَا مَرَدَّ لَهُ مِنَ اللَّهِ", meaning: "A Day which there is no averting from Allah", explanation: "Judgment Day is unavoidable", verseRef: "42:47" },
        { term: "مَا لَكُم مِّن مَّلْجَإٍ يَوْمَئِذٍ", meaning: "No refuge for you that Day", explanation: "No place to hide on Judgment Day", verseRef: "42:47" },
        { term: "وَمَا لَكُم مِّن نَّكِيرٍ", meaning: "Nor for you any denial", explanation: "No denying one's deeds", verseRef: "42:47" },
        { term: "تَرَى الظَّالِمِينَ مُشْفِقِينَ مِمَّا كَسَبُوا", meaning: "You will see the wrongdoers fearful of what they earned", explanation: "Terror of wrongdoers facing their deeds", verseRef: "42:22" },
        { term: "وَهُوَ وَاقِعٌ بِهِمْ", meaning: "And it will befall them", explanation: "Punishment will definitely reach them", verseRef: "42:22" },
        { term: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فِي رَوْضَاتِ الْجَنَّاتِ", meaning: "And those who believed and did righteous deeds will be in gardens of Paradise", explanation: "Believers in gardens of bliss", verseRef: "42:22" },
        { term: "لَهُم مَّا يَشَاءُونَ عِندَ رَبِّهِمْ", meaning: "They will have whatever they wish with their Lord", explanation: "Unlimited wishes fulfilled in Paradise", verseRef: "42:22" }
      ]
    },

    guidanceAndMisguidance: {
      name: "Guidance and Misguidance",
      nameArabic: "الهداية والضلال",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِن وَلِيٍّ مِّن بَعْدِهِ", meaning: "Whoever Allah sends astray, for him there is no protector after Him", explanation: "No help for those Allah allows to stray", verseRef: "42:44" },
        { term: "وَتَرَى الظَّالِمِينَ لَمَّا رَأَوُا الْعَذَابَ", meaning: "And you will see the wrongdoers when they see the punishment", explanation: "Wrongdoers will see punishment", verseRef: "42:44" },
        { term: "يَقُولُونَ هَلْ إِلَىٰ مَرَدٍّ مِّن سَبِيلٍ", meaning: "Saying: Is there any way to return?", explanation: "Desperate plea to go back", verseRef: "42:44" },
        { term: "وَإِنَّكَ لَتَهْدِي إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: "And indeed you guide to a straight path", explanation: "Prophet guides to the straight way", verseRef: "42:52" },
        { term: "صِرَاطِ اللَّهِ", meaning: "The path of Allah", explanation: "Allah's path - the only true path", verseRef: "42:53" },
        { term: "الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: "To whom belongs whatever is in heavens and earth", explanation: "Allah owns all creation", verseRef: "42:53" },
        { term: "أَلَا إِلَى اللَّهِ تَصِيرُ الْأُمُورُ", meaning: "Unquestionably, to Allah do all matters return", explanation: "Final return to Allah - closing verse", verseRef: "42:53" }
      ]
    },

    divineNames: {
      name: "Divine Names and Attributes",
      nameArabic: "أسماء الله وصفاته",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "الْعَزِيزُ الْحَكِيمُ", meaning: "The Mighty, the Wise", explanation: "Power combined with wisdom", verseRef: "42:3" },
        { term: "الْعَلِيُّ الْعَظِيمُ", meaning: "The Most High, the Greatest", explanation: "Supreme elevation and grandeur", verseRef: "42:4" },
        { term: "السَّمِيعُ الْبَصِيرُ", meaning: "The Hearing, the Seeing", explanation: "All-perceiving awareness", verseRef: "42:11" },
        { term: "اللَّطِيفُ الْخَبِيرُ", meaning: "The Subtle, the Aware", explanation: "Gentle awareness of all details", verseRef: "42:19" },
        { term: "الْقَوِيُّ الْعَزِيزُ", meaning: "The Powerful, the Mighty", explanation: "Strength and dominance", verseRef: "42:19" },
        { term: "الْوَلِيُّ", meaning: "The Protector", explanation: "Allah as guardian and supporter", verseRef: "42:9" },
        { term: "الَّذِي يُحْيِي الْمَوْتَىٰ", meaning: "The One who gives life to the dead", explanation: "Power of resurrection", verseRef: "42:9" }
      ]
    },

    beliversCharacteristics: {
      name: "Characteristics of Believers",
      nameArabic: "صفات المؤمنين",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "يَسْتَجِيبُونَ لِرَبِّهِمْ", meaning: "They respond to their Lord", explanation: "Responsive obedience to Allah", verseRef: "42:26" },
        { term: "وَيُقِيمُونَ الصَّلَاةَ", meaning: "And establish prayer", explanation: "Maintaining regular prayer", verseRef: "42:38" },
        { term: "أَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", meaning: "Their affair is consultation among them", explanation: "Mutual consultation in decisions", verseRef: "42:38" },
        { term: "وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", meaning: "And from what We provided them, they spend", explanation: "Generous spending from provisions", verseRef: "42:38" },
        { term: "يَجْتَنِبُونَ كَبَائِرَ الْإِثْمِ", meaning: "They avoid major sins", explanation: "Staying away from grave sins", verseRef: "42:37" },
        { term: "إِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ", meaning: "When angry, they forgive", explanation: "Forgiving even in anger", verseRef: "42:37" },
        { term: "يَنتَصِرُونَ", meaning: "They defend themselves", explanation: "Standing up against oppression", verseRef: "42:39" }
      ]
    },

    transcendenceOfAllah: {
      name: "Transcendence of Allah",
      nameArabic: "تنزيه الله",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Creator of heavens and earth", explanation: "Originator of the universe", verseRef: "42:11" },
        { term: "جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا", meaning: "Made for you from yourselves mates", explanation: "Created human pairs", verseRef: "42:11" },
        { term: "وَمِنَ الْأَنْعَامِ أَزْوَاجًا", meaning: "And of livestock mates", explanation: "Animal pairs for reproduction", verseRef: "42:11" },
        { term: "يَذْرَؤُكُمْ فِيهِ", meaning: "He multiplies you thereby", explanation: "Reproduction system established by Allah", verseRef: "42:11" },
        { term: "لَيْسَ كَمِثْلِهِ شَيْءٌ", meaning: "There is nothing like Him", explanation: "Absolute uniqueness of Allah - no comparison", verseRef: "42:11" },
        { term: "وَهُوَ السَّمِيعُ الْبَصِيرُ", meaning: "And He is the Hearing, the Seeing", explanation: "Perfect perception despite transcendence", verseRef: "42:11" }
      ]
    }
  },

  relationships: [
    { from: "شَرَعَ لَكُم مِّنَ الدِّينِ", to: "مَا وَصَّىٰ بِهِ نُوحًا وَإِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَىٰ", type: "continuity", description: "Same religion revealed to all prophets" },
    { from: "أَقِيمُوا الدِّينَ", to: "لَا تَتَفَرَّقُوا فِيهِ", type: "command", description: "Establish religion without division" },
    { from: "تَفَرَّقُوا", to: "بَغْيًا بَيْنَهُمْ", type: "causation", description: "Division caused by jealousy, not ignorance" },
    { from: "أَمْرُهُمْ شُورَىٰ بَيْنَهُمْ", to: "يُنفِقُونَ", type: "sequence", description: "Consultation and spending are linked believers' qualities" },
    { from: "صَبَرَ", to: "غَفَرَ", type: "combination", description: "Patience and forgiveness together show strength" },
    { from: "سَيِّئَةٍ سَيِّئَةٌ مِّثْلُهَا", to: "فَمَنْ عَفَا وَأَصْلَحَ", type: "preference", description: "Retaliation permitted but forgiveness is better" },
    { from: "لَيْسَ كَمِثْلِهِ شَيْءٌ", to: "السَّمِيعُ الْبَصِيرُ", type: "balance", description: "Transcendence with personal attributes" },
    { from: "وَحْيًا", to: "مِن وَرَاءِ حِجَابٍ", to2: "يُرْسِلَ رَسُولًا", type: "modes", description: "Three methods of divine communication" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening and Revelation", verses: "42:1-6", description: "Ha-Mim 'Ayn-Sin-Qaf, revelation from the Mighty, Wise" },
      { stage: 2, theme: "Warning of Judgment", verses: "42:7-9", description: "Warning of gathering Day, Allah as sole Protector" },
      { stage: 3, theme: "Divine Transcendence", verses: "42:10-12", description: "Nothing like Allah, keys of heavens and earth" },
      { stage: 4, theme: "Unity of Religion", verses: "42:13-14", description: "Same religion to all prophets, warning against division" },
      { stage: 5, theme: "Prophetic Mission", verses: "42:15-19", description: "Call to faith, justice, accountability" },
      { stage: 6, theme: "Worldly vs Afterlife Harvest", verses: "42:20", description: "Choosing between worldly and eternal reward" },
      { stage: 7, theme: "Judgment Day", verses: "42:21-26", description: "Wrongdoers' fate vs believers' paradise, acceptance of repentance" },
      { stage: 8, theme: "Divine Provision", verses: "42:27-28", description: "Measured provision, rain after despair" },
      { stage: 9, theme: "Signs in Creation", verses: "42:29-35", description: "Creatures, ships, calamities from one's deeds" },
      { stage: 10, theme: "Believers' Qualities", verses: "42:36-43", description: "Forgiveness, consultation, patience, defense against oppression" },
      { stage: 11, theme: "Misguidance and Return", verses: "42:44-48", description: "No guidance for whom Allah leaves astray, seeking return" },
      { stage: 12, theme: "Divine Sovereignty", verses: "42:49-50", description: "Allah gives males, females, both, or none" },
      { stage: 13, theme: "Modes of Revelation", verses: "42:51-53", description: "Three ways Allah communicates, guidance to straight path" }
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
    title: "The Surah of Consultation and Unity",
    insight: "Surah Ash-Shura is unique in several ways. First, it is the only surah with two sets of disconnected letters (Ha-Mim and 'Ayn-Sin-Qaf), emphasizing its special place in the Ha-Mim series. Second, it gives the surah its name from the principle of 'shura' (consultation) in verse 38 - one of the foundations of Islamic governance and community decision-making. Third, it presents the most comprehensive statement on the unity of religion: the same core message was given to Nuh, Ibrahim, Musa, Isa, and Muhammad. Division came not from different messages but from 'jealousy between themselves' after knowledge came. Fourth, it balances the right to self-defense with the superiority of forgiveness - retaliation is permitted but 'whoever pardons and makes reconciliation, his reward is with Allah.' Fifth, the famous verse 'There is nothing like Him' (42:11) is the clearest statement of divine transcendence in the Quran, yet immediately followed by 'He is the Hearing, the Seeing' - showing Allah is both utterly unique and personally aware. The surah closes with the three modes of divine communication, explaining how prophets received revelation, and ends with the powerful statement: 'To Allah return all matters.'"
  },

  historicalContext: {
    note: "This Makkan surah was revealed during a period when the Prophet faced opposition and needed to clarify the nature of his mission. The emphasis on the unity of religion countered claims that Islam was a new or foreign religion - it was the same message given to all prophets. The principle of shura (consultation) established an Islamic approach to governance distinct from both the tribal absolutism of Arabia and the imperial systems of Rome and Persia. The detailed explanation of revelation modes (42:51) responded to questions about how the Prophet received divine communication."
  },

  linguisticFeatures: {
    features: [
      { feature: "حم عسق", example: "Double Huruf Muqatta'at", effect: "Only surah with two sets of disconnected letters" },
      { feature: "شُورَىٰ", example: "Consultation", effect: "Noun form emphasizing the principle itself" },
      { feature: "لَيْسَ كَمِثْلِهِ شَيْءٌ", example: "Nothing like Him", effect: "Double negation (laysa + ka-mithlihi) for emphasis on uniqueness" },
      { feature: "عَزْمِ الْأُمُورِ", example: "Matters of determination", effect: "Forgiveness requires 'azm - firm resolve" },
      { feature: "مَقَالِيدُ", example: "Keys", effect: "Plural of miqlaad - keys to treasures" },
      { feature: "رَوْضَاتِ الْجَنَّاتِ", example: "Gardens of Paradise", effect: "Double plural - gardens within gardens" }
    ]
  },

  shuraVerse: {
    verse: 38,
    text: "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
    translation: "And those who respond to their Lord, establish prayer, and whose affair is consultation among them, and from what We have provided them, they spend",
    significance: "This verse establishes Shura (consultation) as a fundamental Islamic principle alongside prayer and charity. It places collective decision-making at the heart of the Muslim community's identity."
  },

  transcendenceVerse: {
    verse: 11,
    text: "فَاطِرُ السَّمَاوَاتِ وَالْأَرْضِ ۚ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا وَمِنَ الْأَنْعَامِ أَزْوَاجًا ۖ يَذْرَؤُكُمْ فِيهِ ۚ لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ",
    translation: "Creator of the heavens and earth. He made for you from yourselves mates, and among livestock, mates. He multiplies you thereby. There is nothing like Him, and He is the Hearing, the Seeing.",
    significance: "Contains the Quran's clearest statement of divine transcendence (laysa ka-mithlihi shay') while affirming Allah's personal attributes - the balance of tanzih (transcendence) and tashbih (similarity) in Islamic theology."
  },

  hamimConnection: {
    note: "Part of the Ha-Mim series (Surahs 40-46)",
    series: ["Ghafir (40)", "Fussilat (41)", "Ash-Shura (42)", "Az-Zukhruf (43)", "Ad-Dukhan (44)", "Al-Jathiyah (45)", "Al-Ahqaf (46)"],
    uniqueness: "Ash-Shura is unique in the series for having an additional set of letters ('Ayn-Sin-Qaf) after Ha-Mim"
  }
};

export default ONTOLOGY;
