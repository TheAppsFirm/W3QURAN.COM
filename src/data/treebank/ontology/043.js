/**
 * Surah Az-Zukhruf (43) - Ontology of Quranic Concepts
 * The Gold Ornaments / The Gilded Adornments
 * Theme: Worldly gold vs eternal truth, Quran in Arabic, Ibrahim's legacy, Musa vs Pharaoh, Isa as servant not son
 * 89 Ayahs - Makki Surah
 */

export const ONTOLOGY = {
  surahId: 43,
  surahName: "Az-Zukhruf",
  surahNameArabic: "الزخرف",
  meaning: { en: "The Gold Ornaments", ur: "The Gold Ornaments" },
  revelationType: "Makki",
  totalAyahs: 89,

  categories: {
    quranInArabic: {
      name: "Quran Revealed in Arabic",
      nameArabic: "القرآن عربي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حم", meaning: { en: "Ha-Mim", ur: "حم" }, explanation: { en: "Disconnected letters (Muqatta'at) - part of Ha-Mim series", ur: "Disconnected letters (Muqatta'at) - part of Ha-Mim series" }, verseRef: "43:1" },
        { term: "وَالْكِتَابِ الْمُبِينِ", meaning: { en: "By the clear Book", ur: "By the clear Book" }, explanation: { en: "Oath by the Quran's clarity", ur: "Oath by the Quran's clarity" }, verseRef: "43:2" },
        { term: "إِنَّا جَعَلْنَاهُ قُرْآنًا عَرَبِيًّا", meaning: { en: "Indeed, We have made it an Arabic Quran", ur: "Indeed, We have made it an Arabic Quran" }, explanation: { en: "Quran revealed in Arabic for understanding", ur: "Quran revealed in Arabic for understanding" }, verseRef: "43:3" },
        { term: "لَّعَلَّكُمْ تَعْقِلُونَ", meaning: { en: "That you might understand", ur: "That you might understand" }, explanation: { en: "Arabic chosen so Arabs comprehend", ur: "Arabic chosen so Arabs comprehend" }, verseRef: "43:3" },
        { term: "وَإِنَّهُ فِي أُمِّ الْكِتَابِ لَدَيْنَا", meaning: { en: "And indeed it is, in the Mother of the Book with Us", ur: "And indeed it is, in the Mother of the Book with Us" }, explanation: { en: "Quran's origin in the Preserved Tablet (Lawh Mahfuz)", ur: "Quran's origin in the Preserved Tablet (Lawh Mahfuz)" }, verseRef: "43:4" },
        { term: "لَعَلِيٌّ حَكِيمٌ", meaning: { en: "Exalted and full of wisdom", ur: "Exalted and full of wisdom" }, explanation: { en: "The Quran's lofty and wise nature", ur: "The Quran's lofty and wise nature" }, verseRef: "43:4" },
        { term: "أَفَنَضْرِبُ عَنكُمُ الذِّكْرَ صَفْحًا", meaning: { en: "Should We turn away the Reminder from you?", ur: "Should We turn away the Reminder from you?" }, explanation: { en: "Rhetorical - revelation continues despite rejection", ur: "Rhetorical - revelation continues despite rejection" }, verseRef: "43:5" },
        { term: "أَن كُنتُمْ قَوْمًا مُّسْرِفِينَ", meaning: { en: "Because you are a transgressing people", ur: "Because you are a transgressing people" }, explanation: { en: "Transgression doesn't stop mercy", ur: "Transgression doesn't stop mercy" }, verseRef: "43:5" }
      ]
    },

    previousProphetsRejected: {
      name: "Previous Prophets Also Mocked",
      nameArabic: "استهزاء الأنبياء السابقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَكَمْ أَرْسَلْنَا مِن نَّبِيٍّ فِي الْأَوَّلِينَ", meaning: { en: "And how many a prophet We sent among the former peoples", ur: "And how many a prophet We sent among the former peoples" }, explanation: { en: "Pattern of sending prophets", ur: "Pattern of sending prophets" }, verseRef: "43:6" },
        { term: "وَمَا يَأْتِيهِم مِّن نَّبِيٍّ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: { en: "And no prophet came to them except they mocked him", ur: "And no prophet came to them except they mocked him" }, explanation: { en: "Mockery is constant pattern", ur: "Mockery is constant pattern" }, verseRef: "43:7" },
        { term: "فَأَهْلَكْنَا أَشَدَّ مِنْهُم بَطْشًا", meaning: { en: "So We destroyed those more powerful than them", ur: "So We destroyed those more powerful than them" }, explanation: { en: "Previous nations destroyed despite power", ur: "Previous nations destroyed despite power" }, verseRef: "43:8" },
        { term: "وَمَضَىٰ مَثَلُ الْأَوَّلِينَ", meaning: { en: "And the example of the former peoples has passed", ur: "And the example of the former peoples has passed" }, explanation: { en: "Historical warning established", ur: "Historical warning established" }, verseRef: "43:8" }
      ]
    },

    signsOfCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "If you asked them who created heavens and earth", ur: "If you asked them who created heavens and earth" }, explanation: { en: "Even disbelievers acknowledge Creator", ur: "Even disbelievers acknowledge Creator" }, verseRef: "43:9" },
        { term: "لَيَقُولُنَّ خَلَقَهُنَّ الْعَزِيزُ الْعَلِيمُ", meaning: { en: "They would say: The Mighty, the Knowing created them", ur: "They would say: The Mighty, the Knowing created them" }, explanation: { en: "Innate acknowledgment of Allah", ur: "Innate acknowledgment of Allah" }, verseRef: "43:9" },
        { term: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا", meaning: { en: "Who made the earth a bed for you", ur: "Who made the earth a bed for you" }, explanation: { en: "Earth spread out for living", ur: "Earth spread out for living" }, verseRef: "43:10" },
        { term: "وَجَعَلَ لَكُمْ فِيهَا سُبُلًا", meaning: { en: "And made for you therein pathways", ur: "And made for you therein pathways" }, explanation: { en: "Roads and passages for travel", ur: "Roads and passages for travel" }, verseRef: "43:10" },
        { term: "لَّعَلَّكُمْ تَهْتَدُونَ", meaning: { en: "That you may be guided", ur: "That you may be guided" }, explanation: { en: "Physical and spiritual guidance", ur: "Physical and spiritual guidance" }, verseRef: "43:10" },
        { term: "وَالَّذِي نَزَّلَ مِنَ السَّمَاءِ مَاءً بِقَدَرٍ", meaning: { en: "Who sends down water from sky in measure", ur: "Who sends down water from sky in measure" }, explanation: { en: "Precise rainfall provision", ur: "Precise rainfall provision" }, verseRef: "43:11" },
        { term: "فَأَنشَرْنَا بِهِ بَلْدَةً مَّيْتًا", meaning: { en: "And We revive thereby a dead land", ur: "And We revive thereby a dead land" }, explanation: { en: "Rain brings life - parallel to resurrection", ur: "Rain brings life - parallel to resurrection" }, verseRef: "43:11" },
        { term: "كَذَٰلِكَ تُخْرَجُونَ", meaning: { en: "Thus you will be brought forth", ur: "Thus you will be brought forth" }, explanation: { en: "Resurrection like land revival", ur: "Resurrection like land revival" }, verseRef: "43:11" }
      ]
    },

    transportationBlessings: {
      name: "Blessings of Transportation",
      nameArabic: "نعمة المركب",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "وَالَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا", meaning: { en: "And Who created all the pairs", ur: "And Who created all the pairs" }, explanation: { en: "Male-female pairs in creation", ur: "Male-female pairs in creation" }, verseRef: "43:12" },
        { term: "وَجَعَلَ لَكُم مِّنَ الْفُلْكِ وَالْأَنْعَامِ مَا تَرْكَبُونَ", meaning: { en: "And made for you of ships and animals that you ride", ur: "And made for you of ships and animals that you ride" }, explanation: { en: "Transportation provided by Allah", ur: "Transportation provided by Allah" }, verseRef: "43:12" },
        { term: "لِتَسْتَوُوا عَلَىٰ ظُهُورِهِ", meaning: { en: "That you may settle upon their backs", ur: "That you may settle upon their backs" }, explanation: { en: "Ability to mount and ride", ur: "Ability to mount and ride" }, verseRef: "43:13" },
        { term: "ثُمَّ تَذْكُرُوا نِعْمَةَ رَبِّكُمْ إِذَا اسْتَوَيْتُمْ عَلَيْهِ", meaning: { en: "Then remember the favor of your Lord when you settle upon it", ur: "Then remember the favor of your Lord when you settle upon it" }, explanation: { en: "Gratitude when mounting transport", ur: "Gratitude when mounting transport" }, verseRef: "43:13" },
        { term: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا", meaning: { en: "Exalted is He who has subjected this to us", ur: "Exalted is He who has subjected this to us" }, explanation: { en: "Travel supplication - recognizing Allah's control", ur: "Travel supplication - recognizing Allah's control" }, verseRef: "43:13" },
        { term: "وَمَا كُنَّا لَهُ مُقْرِنِينَ", meaning: { en: "And we could not have subdued it ourselves", ur: "And we could not have subdued it ourselves" }, explanation: { en: "Human inability without Allah's help", ur: "Human inability without Allah's help" }, verseRef: "43:13" },
        { term: "وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ", meaning: { en: "And indeed we, to our Lord, will surely return", ur: "And indeed we, to our Lord, will surely return" }, explanation: { en: "Remembering ultimate return while traveling", ur: "Remembering ultimate return while traveling" }, verseRef: "43:14" }
      ]
    },

    angelsAsFemales: {
      name: "Refutation of Angels as Daughters",
      nameArabic: "رد دعوى الملائكة إناث",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَجَعَلُوا لَهُ مِنْ عِبَادِهِ جُزْءًا", meaning: { en: "And they have made for Him from His servants a portion", ur: "And they have made for Him from His servants a portion" }, explanation: { en: "Attributing offspring to Allah", ur: "Attributing offspring to Allah" }, verseRef: "43:15" },
        { term: "إِنَّ الْإِنسَانَ لَكَفُورٌ مُّبِينٌ", meaning: { en: "Indeed, mankind is clearly ungrateful", ur: "Indeed, mankind is clearly ungrateful" }, explanation: { en: "Clear ingratitude in this claim", ur: "Clear ingratitude in this claim" }, verseRef: "43:15" },
        { term: "أَمِ اتَّخَذَ مِمَّا يَخْلُقُ بَنَاتٍ", meaning: { en: "Has He taken from what He creates daughters?", ur: "Has He taken from what He creates daughters?" }, explanation: { en: "Rhetorical - absurd claim", ur: "Rhetorical - absurd claim" }, verseRef: "43:16" },
        { term: "وَأَصْفَاكُم بِالْبَنِينَ", meaning: { en: "And chosen sons for you?", ur: "And chosen sons for you?" }, explanation: { en: "Inconsistency in their own preference", ur: "Inconsistency in their own preference" }, verseRef: "43:16" },
        { term: "وَإِذَا بُشِّرَ أَحَدُهُم بِمَا ضَرَبَ لِلرَّحْمَٰنِ مَثَلًا", meaning: { en: "When one of them is given news of that which he attributes to the Most Merciful", ur: "When one of them is given news of that which he attributes to the Most Merciful" }, explanation: { en: "When told of a daughter...", ur: "When told of a daughter..." }, verseRef: "43:17" },
        { term: "ظَلَّ وَجْهُهُ مُسْوَدًّا وَهُوَ كَظِيمٌ", meaning: { en: "His face becomes dark, and he suppresses grief", ur: "His face becomes dark, and he suppresses grief" }, explanation: { en: "Their own reaction to daughters", ur: "Their own reaction to daughters" }, verseRef: "43:17" },
        { term: "أَوَمَن يُنَشَّأُ فِي الْحِلْيَةِ", meaning: { en: "Is one raised in ornaments?", ur: "Is one raised in ornaments?" }, explanation: { en: "Reference to feminine upbringing", ur: "Reference to feminine upbringing" }, verseRef: "43:18" },
        { term: "وَهُوَ فِي الْخِصَامِ غَيْرُ مُبِينٍ", meaning: { en: "And is unclear in dispute?", ur: "And is unclear in dispute?" }, explanation: { en: "Stereotyping females - their own view", ur: "Stereotyping females - their own view" }, verseRef: "43:18" },
        { term: "وَجَعَلُوا الْمَلَائِكَةَ الَّذِينَ هُمْ عِبَادُ الرَّحْمَٰنِ إِنَاثًا", meaning: { en: "And they made the angels, who are servants of the Most Merciful, females", ur: "And they made the angels, who are servants of the Most Merciful, females" }, explanation: { en: "False claim about angels' gender", ur: "False claim about angels' gender" }, verseRef: "43:19" },
        { term: "أَشَهِدُوا خَلْقَهُمْ", meaning: { en: "Did they witness their creation?", ur: "Did they witness their creation?" }, explanation: { en: "No witness to make such claims", ur: "No witness to make such claims" }, verseRef: "43:19" },
        { term: "سَتُكْتَبُ شَهَادَتُهُمْ وَيُسْأَلُونَ", meaning: { en: "Their testimony will be recorded and they will be questioned", ur: "Their testimony will be recorded and they will be questioned" }, explanation: { en: "Accountability for false claims", ur: "Accountability for false claims" }, verseRef: "43:19" }
      ]
    },

    blindFollowingOfAncestors: {
      name: "Blind Following of Ancestors",
      nameArabic: "التقليد الأعمى للآباء",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَالُوا لَوْ شَاءَ الرَّحْمَٰنُ مَا عَبَدْنَاهُم", meaning: { en: "And they say: If the Most Merciful had willed, we would not have worshipped them", ur: "And they say: If the Most Merciful had willed, we would not have worshipped them" }, explanation: { en: "False fatalism to justify shirk", ur: "False fatalism to justify shirk" }, verseRef: "43:20" },
        { term: "مَّا لَهُم بِذَٰلِكَ مِنْ عِلْمٍ", meaning: { en: "They have no knowledge of that", ur: "They have no knowledge of that" }, explanation: { en: "Claim without evidence", ur: "Claim without evidence" }, verseRef: "43:20" },
        { term: "إِنْ هُمْ إِلَّا يَخْرُصُونَ", meaning: { en: "They are only guessing", ur: "They are only guessing" }, explanation: { en: "Mere conjecture", ur: "Mere conjecture" }, verseRef: "43:20" },
        { term: "أَمْ آتَيْنَاهُمْ كِتَابًا مِّن قَبْلِهِ", meaning: { en: "Or have We given them a book before this?", ur: "Or have We given them a book before this?" }, explanation: { en: "No divine authority for their claims", ur: "No divine authority for their claims" }, verseRef: "43:21" },
        { term: "فَهُم بِهِ مُسْتَمْسِكُونَ", meaning: { en: "To which they are adhering?", ur: "To which they are adhering?" }, explanation: { en: "No scriptural basis", ur: "No scriptural basis" }, verseRef: "43:21" },
        { term: "بَلْ قَالُوا إِنَّا وَجَدْنَا آبَاءَنَا عَلَىٰ أُمَّةٍ", meaning: { en: "Rather, they say: We found our fathers upon a religion", ur: "Rather, they say: We found our fathers upon a religion" }, explanation: { en: "Only basis is ancestral tradition", ur: "Only basis is ancestral tradition" }, verseRef: "43:22" },
        { term: "وَإِنَّا عَلَىٰ آثَارِهِم مُّهْتَدُونَ", meaning: { en: "And we are guided by their footsteps", ur: "And we are guided by their footsteps" }, explanation: { en: "Blind following without thinking", ur: "Blind following without thinking" }, verseRef: "43:22" },
        { term: "وَكَذَٰلِكَ مَا أَرْسَلْنَا مِن قَبْلِكَ فِي قَرْيَةٍ مِّن نَّذِيرٍ", meaning: { en: "Similarly, We did not send before you any warner into a city", ur: "Similarly, We did not send before you any warner into a city" }, explanation: { en: "Same pattern in all societies", ur: "Same pattern in all societies" }, verseRef: "43:23" },
        { term: "إِلَّا قَالَ مُتْرَفُوهَا إِنَّا وَجَدْنَا آبَاءَنَا عَلَىٰ أُمَّةٍ", meaning: { en: "Except that its affluent said: We found our fathers upon a religion", ur: "Except that its affluent said: We found our fathers upon a religion" }, explanation: { en: "Wealthy elite uphold tradition", ur: "Wealthy elite uphold tradition" }, verseRef: "43:23" },
        { term: "قَالَ أَوَلَوْ جِئْتُكُم بِأَهْدَىٰ مِمَّا وَجَدتُّمْ عَلَيْهِ آبَاءَكُمْ", meaning: { en: "Say: Even if I brought you better guidance than that upon which you found your fathers?", ur: "Say: Even if I brought you better guidance than that upon which you found your fathers?" }, explanation: { en: "Prophet offers superior guidance", ur: "Prophet offers superior guidance" }, verseRef: "43:24" },
        { term: "قَالُوا إِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ", meaning: { en: "They said: Indeed we disbelieve in that with which you have been sent", ur: "They said: Indeed we disbelieve in that with which you have been sent" }, explanation: { en: "Rejection despite better alternative", ur: "Rejection despite better alternative" }, verseRef: "43:24" },
        { term: "فَانتَقَمْنَا مِنْهُمْ", meaning: { en: "So We took retribution from them", ur: "So We took retribution from them" }, explanation: { en: "Consequence of rejection", ur: "Consequence of rejection" }, verseRef: "43:25" },
        { term: "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُكَذِّبِينَ", meaning: { en: "See how was the end of the deniers", ur: "See how was the end of the deniers" }, explanation: { en: "Historical lesson", ur: "Historical lesson" }, verseRef: "43:25" }
      ]
    },

    ibrahimMonotheism: {
      name: "Ibrahim's Pure Monotheism",
      nameArabic: "توحيد إبراهيم",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ وَقَوْمِهِ", meaning: { en: "And when Ibrahim said to his father and his people", ur: "And when Ibrahim said to his father and his people" }, explanation: { en: "Ibrahim's public declaration", ur: "Ibrahim's public declaration" }, verseRef: "43:26" },
        { term: "إِنَّنِي بَرَاءٌ مِّمَّا تَعْبُدُونَ", meaning: { en: "Indeed, I am disassociated from that which you worship", ur: "Indeed, I am disassociated from that which you worship" }, explanation: { en: "Clear disavowal of idolatry", ur: "Clear disavowal of idolatry" }, verseRef: "43:26" },
        { term: "إِلَّا الَّذِي فَطَرَنِي", meaning: { en: "Except He who created me", ur: "Except He who created me" }, explanation: { en: "Exception - worship only the Creator", ur: "Exception - worship only the Creator" }, verseRef: "43:27" },
        { term: "فَإِنَّهُ سَيَهْدِينِ", meaning: { en: "For indeed He will guide me", ur: "For indeed He will guide me" }, explanation: { en: "Trust in divine guidance", ur: "Trust in divine guidance" }, verseRef: "43:27" },
        { term: "وَجَعَلَهَا كَلِمَةً بَاقِيَةً فِي عَقِبِهِ", meaning: { en: "And he made it a word remaining among his descendants", ur: "And he made it a word remaining among his descendants" }, explanation: { en: "La ilaha illallah as lasting legacy", ur: "La ilaha illallah as lasting legacy" }, verseRef: "43:28" },
        { term: "لَعَلَّهُمْ يَرْجِعُونَ", meaning: { en: "That they might return", ur: "That they might return" }, explanation: { en: "Hope for descendants to return to monotheism", ur: "Hope for descendants to return to monotheism" }, verseRef: "43:28" },
        { term: "بَلْ مَتَّعْتُ هَٰؤُلَاءِ وَآبَاءَهُمْ", meaning: { en: "But I gave enjoyment to these and their fathers", ur: "But I gave enjoyment to these and their fathers" }, explanation: { en: "Allah's patience with worldly enjoyment", ur: "Allah's patience with worldly enjoyment" }, verseRef: "43:29" },
        { term: "حَتَّىٰ جَاءَهُمُ الْحَقُّ وَرَسُولٌ مُّبِينٌ", meaning: { en: "Until the truth came to them and a clear Messenger", ur: "Until the truth came to them and a clear Messenger" }, explanation: { en: "Finally truth arrives with Muhammad", ur: "Finally truth arrives with Muhammad" }, verseRef: "43:29" }
      ]
    },

    rejectionOfMuhammad: {
      name: "Quraysh's Rejection of Muhammad",
      nameArabic: "رفض قريش لمحمد",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَلَمَّا جَاءَهُمُ الْحَقُّ قَالُوا هَٰذَا سِحْرٌ", meaning: { en: "And when the truth came to them, they said: This is magic", ur: "And when the truth came to them, they said: This is magic" }, explanation: { en: "Accusation of sorcery", ur: "Accusation of sorcery" }, verseRef: "43:30" },
        { term: "وَإِنَّا بِهِ كَافِرُونَ", meaning: { en: "And indeed we disbelieve in it", ur: "And indeed we disbelieve in it" }, explanation: { en: "Open rejection", ur: "Open rejection" }, verseRef: "43:30" },
        { term: "وَقَالُوا لَوْلَا نُزِّلَ هَٰذَا الْقُرْآنُ عَلَىٰ رَجُلٍ مِّنَ الْقَرْيَتَيْنِ عَظِيمٍ", meaning: { en: "And they said: Why was this Quran not sent down upon a great man from the two cities?", ur: "And they said: Why was this Quran not sent down upon a great man from the two cities?" }, explanation: { en: "Expecting revelation to wealthy leaders", ur: "Expecting revelation to wealthy leaders" }, verseRef: "43:31" },
        { term: "أَهُمْ يَقْسِمُونَ رَحْمَتَ رَبِّكَ", meaning: { en: "Do they distribute the mercy of your Lord?", ur: "Do they distribute the mercy of your Lord?" }, explanation: { en: "They don't control who receives prophethood", ur: "They don't control who receives prophethood" }, verseRef: "43:32" },
        { term: "نَحْنُ قَسَمْنَا بَيْنَهُم مَّعِيشَتَهُمْ فِي الْحَيَاةِ الدُّنْيَا", meaning: { en: "We have distributed among them their livelihood in worldly life", ur: "We have distributed among them their livelihood in worldly life" }, explanation: { en: "Allah distributes provision and roles", ur: "Allah distributes provision and roles" }, verseRef: "43:32" },
        { term: "وَرَفَعْنَا بَعْضَهُمْ فَوْقَ بَعْضٍ دَرَجَاتٍ", meaning: { en: "And raised some of them above others in degrees", ur: "And raised some of them above others in degrees" }, explanation: { en: "Hierarchy is Allah's design", ur: "Hierarchy is Allah's design" }, verseRef: "43:32" },
        { term: "لِّيَتَّخِذَ بَعْضُهُم بَعْضًا سُخْرِيًّا", meaning: { en: "That they may make use of one another", ur: "That they may make use of one another" }, explanation: { en: "Interdependence in society", ur: "Interdependence in society" }, verseRef: "43:32" },
        { term: "وَرَحْمَتُ رَبِّكَ خَيْرٌ مِّمَّا يَجْمَعُونَ", meaning: { en: "And the mercy of your Lord is better than what they accumulate", ur: "And the mercy of your Lord is better than what they accumulate" }, explanation: { en: "Divine mercy exceeds worldly wealth", ur: "Divine mercy exceeds worldly wealth" }, verseRef: "43:32" }
      ]
    },

    goldOrnamentsDevalued: {
      name: "Gold Ornaments - Worldly Deception",
      nameArabic: "الزخرف - متاع الدنيا",
      color: '#F59E0B',
      icon: 'Sparkles',
      concepts: [
        { term: "وَلَوْلَا أَن يَكُونَ النَّاسُ أُمَّةً وَاحِدَةً", meaning: { en: "And if it were not that people would become one community", ur: "And if it were not that people would become one community" }, explanation: { en: "If not for test of faith...", ur: "If not for test of faith..." }, verseRef: "43:33" },
        { term: "لَّجَعَلْنَا لِمَن يَكْفُرُ بِالرَّحْمَٰنِ لِبُيُوتِهِمْ سُقُفًا مِّن فِضَّةٍ", meaning: { en: "We would have made for disbelievers roofs of silver for their houses", ur: "We would have made for disbelievers roofs of silver for their houses" }, explanation: { en: "Allah could give disbelievers silver roofs", ur: "Allah could give disbelievers silver roofs" }, verseRef: "43:33" },
        { term: "وَمَعَارِجَ عَلَيْهَا يَظْهَرُونَ", meaning: { en: "And stairways upon which to mount", ur: "And stairways upon which to mount" }, explanation: { en: "Silver stairways for the disbelievers", ur: "Silver stairways for the disbelievers" }, verseRef: "43:33" },
        { term: "وَلِبُيُوتِهِمْ أَبْوَابًا وَسُرُرًا عَلَيْهَا يَتَّكِئُونَ", meaning: { en: "And for their houses doors and couches upon which to recline", ur: "And for their houses doors and couches upon which to recline" }, explanation: { en: "Luxurious doors and furniture", ur: "Luxurious doors and furniture" }, verseRef: "43:34" },
        { term: "وَزُخْرُفًا", meaning: { en: "And gold ornaments", ur: "And gold ornaments" }, explanation: { en: "ZUKHRUF - the surah's namesake", ur: "ZUKHRUF - the surah's namesake" }, verseRef: "43:35" },
        { term: "وَإِن كُلُّ ذَٰلِكَ لَمَّا مَتَاعُ الْحَيَاةِ الدُّنْيَا", meaning: { en: "And all of that is nothing but enjoyment of worldly life", ur: "And all of that is nothing but enjoyment of worldly life" }, explanation: { en: "Core message: gold/luxury is temporary", ur: "Core message: gold/luxury is temporary" }, verseRef: "43:35" },
        { term: "وَالْآخِرَةُ عِندَ رَبِّكَ لِلْمُتَّقِينَ", meaning: { en: "And the Hereafter with your Lord is for the righteous", ur: "And the Hereafter with your Lord is for the righteous" }, explanation: { en: "Hereafter reserved for the God-conscious", ur: "Hereafter reserved for the God-conscious" }, verseRef: "43:35" }
      ]
    },

    satanAsCompanion: {
      name: "Satan as Companion of the Heedless",
      nameArabic: "الشيطان قرين الغافل",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَن يَعْشُ عَن ذِكْرِ الرَّحْمَٰنِ", meaning: { en: "And whoever is blinded from remembrance of the Most Merciful", ur: "And whoever is blinded from remembrance of the Most Merciful" }, explanation: { en: "Turning away from Allah's remembrance", ur: "Turning away from Allah's remembrance" }, verseRef: "43:36" },
        { term: "نُقَيِّضْ لَهُ شَيْطَانًا", meaning: { en: "We appoint for him a devil", ur: "We appoint for him a devil" }, explanation: { en: "Satan assigned as companion", ur: "Satan assigned as companion" }, verseRef: "43:36" },
        { term: "فَهُوَ لَهُ قَرِينٌ", meaning: { en: "And he is to him a companion", ur: "And he is to him a companion" }, explanation: { en: "Constant evil companionship", ur: "Constant evil companionship" }, verseRef: "43:36" },
        { term: "وَإِنَّهُمْ لَيَصُدُّونَهُمْ عَنِ السَّبِيلِ", meaning: { en: "And indeed, they avert them from the way", ur: "And indeed, they avert them from the way" }, explanation: { en: "Devils block the path", ur: "Devils block the path" }, verseRef: "43:37" },
        { term: "وَيَحْسَبُونَ أَنَّهُم مُّهْتَدُونَ", meaning: { en: "While they think they are guided", ur: "While they think they are guided" }, explanation: { en: "False sense of guidance", ur: "False sense of guidance" }, verseRef: "43:37" },
        { term: "حَتَّىٰ إِذَا جَاءَنَا", meaning: { en: "Until, when he comes to Us", ur: "Until, when he comes to Us" }, explanation: { en: "Moment of truth at judgment", ur: "Moment of truth at judgment" }, verseRef: "43:38" },
        { term: "قَالَ يَا لَيْتَ بَيْنِي وَبَيْنَكَ بُعْدَ الْمَشْرِقَيْنِ", meaning: { en: "He says: Oh, I wish between me and you was the distance of the two easts", ur: "He says: Oh, I wish between me and you was the distance of the two easts" }, explanation: { en: "Wishing maximum distance from satan", ur: "Wishing maximum distance from satan" }, verseRef: "43:38" },
        { term: "فَبِئْسَ الْقَرِينُ", meaning: { en: "What a wretched companion", ur: "What a wretched companion" }, explanation: { en: "Satan revealed as worst companion", ur: "Satan revealed as worst companion" }, verseRef: "43:38" },
        { term: "وَلَن يَنفَعَكُمُ الْيَوْمَ إِذ ظَّلَمْتُمْ أَنَّكُمْ فِي الْعَذَابِ مُشْتَرِكُونَ", meaning: { en: "And never will it benefit you that Day, when you have wronged, that you are sharing in punishment", ur: "And never will it benefit you that Day, when you have wronged, that you are sharing in punishment" }, explanation: { en: "Shared punishment offers no comfort", ur: "Shared punishment offers no comfort" }, verseRef: "43:39" }
      ]
    },

    prophetCannotGuideAll: {
      name: "Prophet Cannot Guide the Unwilling",
      nameArabic: "النبي لا يهدي من لا يريد",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "أَفَأَنتَ تُسْمِعُ الصُّمَّ", meaning: { en: "Can you make the deaf hear?", ur: "Can you make the deaf hear?" }, explanation: { en: "Rhetorical - spiritual deafness", ur: "Rhetorical - spiritual deafness" }, verseRef: "43:40" },
        { term: "أَوْ تَهْدِي الْعُمْيَ", meaning: { en: "Or guide the blind?", ur: "Or guide the blind?" }, explanation: { en: "Spiritual blindness cannot be forced", ur: "Spiritual blindness cannot be forced" }, verseRef: "43:40" },
        { term: "وَمَن كَانَ فِي ضَلَالٍ مُّبِينٍ", meaning: { en: "And one who is in clear error?", ur: "And one who is in clear error?" }, explanation: { en: "Those in obvious misguidance", ur: "Those in obvious misguidance" }, verseRef: "43:40" },
        { term: "فَإِمَّا نَذْهَبَنَّ بِكَ فَإِنَّا مِنْهُم مُّنتَقِمُونَ", meaning: { en: "If We take you away, We will take retribution from them", ur: "If We take you away, We will take retribution from them" }, explanation: { en: "Punishment will come regardless", ur: "Punishment will come regardless" }, verseRef: "43:41" },
        { term: "أَوْ نُرِيَنَّكَ الَّذِي وَعَدْنَاهُمْ", meaning: { en: "Or We will show you what We have promised them", ur: "Or We will show you what We have promised them" }, explanation: { en: "Prophet may witness their punishment", ur: "Prophet may witness their punishment" }, verseRef: "43:42" },
        { term: "فَإِنَّا عَلَيْهِم مُّقْتَدِرُونَ", meaning: { en: "For indeed, We have power over them", ur: "For indeed, We have power over them" }, explanation: { en: "Allah's complete control", ur: "Allah's complete control" }, verseRef: "43:42" },
        { term: "فَاسْتَمْسِكْ بِالَّذِي أُوحِيَ إِلَيْكَ", meaning: { en: "So hold fast to that which is revealed to you", ur: "So hold fast to that which is revealed to you" }, explanation: { en: "Command to adhere to revelation", ur: "Command to adhere to revelation" }, verseRef: "43:43" },
        { term: "إِنَّكَ عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: { en: "Indeed, you are upon a straight path", ur: "Indeed, you are upon a straight path" }, explanation: { en: "Affirmation of correct guidance", ur: "Affirmation of correct guidance" }, verseRef: "43:43" },
        { term: "وَإِنَّهُ لَذِكْرٌ لَّكَ وَلِقَوْمِكَ", meaning: { en: "And indeed, it is a reminder for you and your people", ur: "And indeed, it is a reminder for you and your people" }, explanation: { en: "Quran as honor for Arabs", ur: "Quran as honor for Arabs" }, verseRef: "43:44" },
        { term: "وَسَوْفَ تُسْأَلُونَ", meaning: { en: "And you will be questioned", ur: "And you will be questioned" }, explanation: { en: "Accountability coming", ur: "Accountability coming" }, verseRef: "43:44" }
      ]
    },

    allMessengersPreachedTawhid: {
      name: "All Messengers Preached Monotheism",
      nameArabic: "كل الرسل دعوا للتوحيد",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "وَاسْأَلْ مَنْ أَرْسَلْنَا مِن قَبْلِكَ مِن رُّسُلِنَا", meaning: { en: "And ask those We sent before you of Our messengers", ur: "And ask those We sent before you of Our messengers" }, explanation: { en: "Universal message of all prophets", ur: "Universal message of all prophets" }, verseRef: "43:45" },
        { term: "أَجَعَلْنَا مِن دُونِ الرَّحْمَٰنِ آلِهَةً يُعْبَدُونَ", meaning: { en: "Did We make besides the Most Merciful gods to be worshipped?", ur: "Did We make besides the Most Merciful gods to be worshipped?" }, explanation: { en: "No prophet endorsed polytheism", ur: "No prophet endorsed polytheism" }, verseRef: "43:45" }
      ]
    },

    musaAndPharaoh: {
      name: "Musa and Pharaoh",
      nameArabic: "موسى وفرعون",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا إِلَىٰ فِرْعَوْنَ وَمَلَئِهِ", meaning: { en: "And We sent Musa with Our signs to Pharaoh and his establishment", ur: "And We sent Musa with Our signs to Pharaoh and his establishment" }, explanation: { en: "Musa sent to Pharaoh with miracles", ur: "Musa sent to Pharaoh with miracles" }, verseRef: "43:46" },
        { term: "فَقَالَ إِنِّي رَسُولُ رَبِّ الْعَالَمِينَ", meaning: { en: "He said: Indeed, I am a messenger of the Lord of the worlds", ur: "He said: Indeed, I am a messenger of the Lord of the worlds" }, explanation: { en: "Musa's declaration of prophethood", ur: "Musa's declaration of prophethood" }, verseRef: "43:46" },
        { term: "فَلَمَّا جَاءَهُم بِآيَاتِنَا إِذَا هُم مِّنْهَا يَضْحَكُونَ", meaning: { en: "But when he brought them Our signs, they laughed at them", ur: "But when he brought them Our signs, they laughed at them" }, explanation: { en: "Mockery of divine signs", ur: "Mockery of divine signs" }, verseRef: "43:47" },
        { term: "وَمَا نُرِيهِم مِّنْ آيَةٍ إِلَّا هِيَ أَكْبَرُ مِنْ أُخْتِهَا", meaning: { en: "And We showed them not a sign except it was greater than its sister", ur: "And We showed them not a sign except it was greater than its sister" }, explanation: { en: "Each sign more powerful than previous", ur: "Each sign more powerful than previous" }, verseRef: "43:48" },
        { term: "وَأَخَذْنَاهُم بِالْعَذَابِ", meaning: { en: "And We seized them with punishment", ur: "And We seized them with punishment" }, explanation: { en: "Divine punishment on Pharaoh's people", ur: "Divine punishment on Pharaoh's people" }, verseRef: "43:48" },
        { term: "لَعَلَّهُمْ يَرْجِعُونَ", meaning: { en: "That perhaps they might return", ur: "That perhaps they might return" }, explanation: { en: "Punishment to encourage repentance", ur: "Punishment to encourage repentance" }, verseRef: "43:48" },
        { term: "وَقَالُوا يَا أَيُّهَ السَّاحِرُ ادْعُ لَنَا رَبَّكَ", meaning: { en: "And they said: O magician, invoke for us your Lord", ur: "And they said: O magician, invoke for us your Lord" }, explanation: { en: "Pharaoh's people call Musa during affliction", ur: "Pharaoh's people call Musa during affliction" }, verseRef: "43:49" },
        { term: "بِمَا عَهِدَ عِندَكَ إِنَّنَا لَمُهْتَدُونَ", meaning: { en: "By what He has promised you. Indeed, we will be guided", ur: "By what He has promised you. Indeed, we will be guided" }, explanation: { en: "False promise to believe", ur: "False promise to believe" }, verseRef: "43:49" },
        { term: "فَلَمَّا كَشَفْنَا عَنْهُمُ الْعَذَابَ إِذَا هُمْ يَنكُثُونَ", meaning: { en: "But when We removed from them the punishment, they broke their word", ur: "But when We removed from them the punishment, they broke their word" }, explanation: { en: "Breaking promise once saved", ur: "Breaking promise once saved" }, verseRef: "43:50" }
      ]
    },

    pharaohsArrogance: {
      name: "Pharaoh's Arrogance",
      nameArabic: "تكبر فرعون",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَنَادَىٰ فِرْعَوْنُ فِي قَوْمِهِ", meaning: { en: "And Pharaoh called out among his people", ur: "And Pharaoh called out among his people" }, explanation: { en: "Pharaoh's public proclamation", ur: "Pharaoh's public proclamation" }, verseRef: "43:51" },
        { term: "قَالَ يَا قَوْمِ أَلَيْسَ لِي مُلْكُ مِصْرَ", meaning: { en: "He said: O my people, does not the kingdom of Egypt belong to me?", ur: "He said: O my people, does not the kingdom of Egypt belong to me?" }, explanation: { en: "Boasting of Egyptian kingship", ur: "Boasting of Egyptian kingship" }, verseRef: "43:51" },
        { term: "وَهَٰذِهِ الْأَنْهَارُ تَجْرِي مِن تَحْتِي", meaning: { en: "And these rivers flowing beneath me?", ur: "And these rivers flowing beneath me?" }, explanation: { en: "Pride in Nile's abundance", ur: "Pride in Nile's abundance" }, verseRef: "43:51" },
        { term: "أَفَلَا تُبْصِرُونَ", meaning: { en: "Do you not see?", ur: "Do you not see?" }, explanation: { en: "Appealing to their senses", ur: "Appealing to their senses" }, verseRef: "43:51" },
        { term: "أَمْ أَنَا خَيْرٌ مِّنْ هَٰذَا الَّذِي هُوَ مَهِينٌ", meaning: { en: "Or am I not better than this one who is insignificant?", ur: "Or am I not better than this one who is insignificant?" }, explanation: { en: "Belittling Musa", ur: "Belittling Musa" }, verseRef: "43:52" },
        { term: "وَلَا يَكَادُ يُبِينُ", meaning: { en: "And can hardly express himself clearly", ur: "And can hardly express himself clearly" }, explanation: { en: "Mocking Musa's speech impediment", ur: "Mocking Musa's speech impediment" }, verseRef: "43:52" },
        { term: "فَلَوْلَا أُلْقِيَ عَلَيْهِ أَسْوِرَةٌ مِّن ذَهَبٍ", meaning: { en: "Then why have not been placed upon him bracelets of gold?", ur: "Then why have not been placed upon him bracelets of gold?" }, explanation: { en: "Demanding gold as proof of prophethood", ur: "Demanding gold as proof of prophethood" }, verseRef: "43:53" },
        { term: "أَوْ جَاءَ مَعَهُ الْمَلَائِكَةُ مُقْتَرِنِينَ", meaning: { en: "Or come with him the angels accompanying?", ur: "Or come with him the angels accompanying?" }, explanation: { en: "Demanding angel escort", ur: "Demanding angel escort" }, verseRef: "43:53" },
        { term: "فَاسْتَخَفَّ قَوْمَهُ فَأَطَاعُوهُ", meaning: { en: "So he bluffed his people, and they obeyed him", ur: "So he bluffed his people, and they obeyed him" }, explanation: { en: "Pharaoh manipulated masses", ur: "Pharaoh manipulated masses" }, verseRef: "43:54" },
        { term: "إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ", meaning: { en: "Indeed, they were a people defiantly disobedient", ur: "Indeed, they were a people defiantly disobedient" }, explanation: { en: "Root cause - disobedience", ur: "Root cause - disobedience" }, verseRef: "43:54" },
        { term: "فَلَمَّا آسَفُونَا انتَقَمْنَا مِنْهُمْ", meaning: { en: "So when they angered Us, We took retribution from them", ur: "So when they angered Us, We took retribution from them" }, explanation: { en: "Divine anger triggered punishment", ur: "Divine anger triggered punishment" }, verseRef: "43:55" },
        { term: "فَأَغْرَقْنَاهُمْ أَجْمَعِينَ", meaning: { en: "And drowned them all", ur: "And drowned them all" }, explanation: { en: "Total destruction by drowning", ur: "Total destruction by drowning" }, verseRef: "43:55" },
        { term: "فَجَعَلْنَاهُمْ سَلَفًا وَمَثَلًا لِّلْآخِرِينَ", meaning: { en: "And We made them a precedent and an example for the later peoples", ur: "And We made them a precedent and an example for the later peoples" }, explanation: { en: "Historical lesson for future", ur: "Historical lesson for future" }, verseRef: "43:56" }
      ]
    },

    isaServantNotSon: {
      name: "Isa: Servant, Not Son",
      nameArabic: "عيسى عبد لا ولد",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "وَلَمَّا ضُرِبَ ابْنُ مَرْيَمَ مَثَلًا", meaning: { en: "And when the son of Mary was presented as an example", ur: "And when the son of Mary was presented as an example" }, explanation: { en: "Isa cited in argument", ur: "Isa cited in argument" }, verseRef: "43:57" },
        { term: "إِذَا قَوْمُكَ مِنْهُ يَصِدُّونَ", meaning: { en: "Immediately your people laughed aloud", ur: "Immediately your people laughed aloud" }, explanation: { en: "Quraysh mocked/disputed", ur: "Quraysh mocked/disputed" }, verseRef: "43:57" },
        { term: "وَقَالُوا أَآلِهَتُنَا خَيْرٌ أَمْ هُوَ", meaning: { en: "And said: Are our gods better, or is he?", ur: "And said: Are our gods better, or is he?" }, explanation: { en: "Comparing Isa to idols", ur: "Comparing Isa to idols" }, verseRef: "43:58" },
        { term: "مَا ضَرَبُوهُ لَكَ إِلَّا جَدَلًا", meaning: { en: "They did not present it except for argument", ur: "They did not present it except for argument" }, explanation: { en: "Mere argumentation, not seeking truth", ur: "Mere argumentation, not seeking truth" }, verseRef: "43:58" },
        { term: "بَلْ هُمْ قَوْمٌ خَصِمُونَ", meaning: { en: "Rather, they are a quarrelsome people", ur: "Rather, they are a quarrelsome people" }, explanation: { en: "Nature - contentious disputants", ur: "Nature - contentious disputants" }, verseRef: "43:58" },
        { term: "إِنْ هُوَ إِلَّا عَبْدٌ أَنْعَمْنَا عَلَيْهِ", meaning: { en: "He was not but a servant upon whom We bestowed favor", ur: "He was not but a servant upon whom We bestowed favor" }, explanation: { en: "CORE MESSAGE: Isa is servant (abd), not son", ur: "CORE MESSAGE: Isa is servant (abd), not son" }, verseRef: "43:59" },
        { term: "وَجَعَلْنَاهُ مَثَلًا لِّبَنِي إِسْرَائِيلَ", meaning: { en: "And We made him an example for the Children of Israel", ur: "And We made him an example for the Children of Israel" }, explanation: { en: "Isa as sign for Israelites", ur: "Isa as sign for Israelites" }, verseRef: "43:59" },
        { term: "وَلَوْ نَشَاءُ لَجَعَلْنَا مِنكُم مَّلَائِكَةً فِي الْأَرْضِ يَخْلُفُونَ", meaning: { en: "And if We willed, We could make from among you angels succeeding on earth", ur: "And if We willed, We could make from among you angels succeeding on earth" }, explanation: { en: "Allah's power to create differently", ur: "Allah's power to create differently" }, verseRef: "43:60" },
        { term: "وَإِنَّهُ لَعِلْمٌ لِّلسَّاعَةِ", meaning: { en: "And indeed, he is a knowledge for the Hour", ur: "And indeed, he is a knowledge for the Hour" }, explanation: { en: "Isa's return as sign of Day of Judgment", ur: "Isa's return as sign of Day of Judgment" }, verseRef: "43:61" },
        { term: "فَلَا تَمْتَرُنَّ بِهَا", meaning: { en: "So do not doubt it", ur: "So do not doubt it" }, explanation: { en: "No doubt about the Hour", ur: "No doubt about the Hour" }, verseRef: "43:61" },
        { term: "وَاتَّبِعُونِ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ", meaning: { en: "And follow Me. This is a straight path", ur: "And follow Me. This is a straight path" }, explanation: { en: "Call to follow Allah's guidance", ur: "Call to follow Allah's guidance" }, verseRef: "43:61" },
        { term: "وَلَا يَصُدَّنَّكُمُ الشَّيْطَانُ", meaning: { en: "And let not Satan avert you", ur: "And let not Satan avert you" }, explanation: { en: "Warning against Satan's diversion", ur: "Warning against Satan's diversion" }, verseRef: "43:62" },
        { term: "إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ", meaning: { en: "Indeed, he is to you a clear enemy", ur: "Indeed, he is to you a clear enemy" }, explanation: { en: "Satan's open enmity", ur: "Satan's open enmity" }, verseRef: "43:62" }
      ]
    },

    isasTeaching: {
      name: "Isa's Clear Teaching",
      nameArabic: "تعليم عيسى الواضح",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَلَمَّا جَاءَ عِيسَىٰ بِالْبَيِّنَاتِ", meaning: { en: "And when Jesus brought clear proofs", ur: "And when Jesus brought clear proofs" }, explanation: { en: "Isa came with evident signs", ur: "Isa came with evident signs" }, verseRef: "43:63" },
        { term: "قَالَ قَدْ جِئْتُكُم بِالْحِكْمَةِ", meaning: { en: "He said: I have come to you with wisdom", ur: "He said: I have come to you with wisdom" }, explanation: { en: "Isa brought divine wisdom", ur: "Isa brought divine wisdom" }, verseRef: "43:63" },
        { term: "وَلِأُبَيِّنَ لَكُم بَعْضَ الَّذِي تَخْتَلِفُونَ فِيهِ", meaning: { en: "And to make clear to you some of that over which you differ", ur: "And to make clear to you some of that over which you differ" }, explanation: { en: "Clarifying disputed matters", ur: "Clarifying disputed matters" }, verseRef: "43:63" },
        { term: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: { en: "So fear Allah and obey me", ur: "So fear Allah and obey me" }, explanation: { en: "Isa's call to taqwa and obedience", ur: "Isa's call to taqwa and obedience" }, verseRef: "43:63" },
        { term: "إِنَّ اللَّهَ هُوَ رَبِّي وَرَبُّكُمْ", meaning: { en: "Indeed, Allah is my Lord and your Lord", ur: "Indeed, Allah is my Lord and your Lord" }, explanation: { en: "Isa affirms shared Lord", ur: "Isa affirms shared Lord" }, verseRef: "43:64" },
        { term: "فَاعْبُدُوهُ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ", meaning: { en: "So worship Him. This is a straight path", ur: "So worship Him. This is a straight path" }, explanation: { en: "Call to worship Allah alone", ur: "Call to worship Allah alone" }, verseRef: "43:64" },
        { term: "فَاخْتَلَفَ الْأَحْزَابُ مِن بَيْنِهِمْ", meaning: { en: "But the parties differed among themselves", ur: "But the parties differed among themselves" }, explanation: { en: "Christians split into sects", ur: "Christians split into sects" }, verseRef: "43:65" },
        { term: "فَوَيْلٌ لِّلَّذِينَ ظَلَمُوا مِنْ عَذَابِ يَوْمٍ أَلِيمٍ", meaning: { en: "So woe to those who have wronged from punishment of a painful Day", ur: "So woe to those who have wronged from punishment of a painful Day" }, explanation: { en: "Warning to those who deviated", ur: "Warning to those who deviated" }, verseRef: "43:65" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "هَلْ يَنظُرُونَ إِلَّا السَّاعَةَ أَن تَأْتِيَهُم بَغْتَةً", meaning: { en: "Are they waiting except for the Hour to come upon them suddenly", ur: "Are they waiting except for the Hour to come upon them suddenly" }, explanation: { en: "Hour will come unexpectedly", ur: "Hour will come unexpectedly" }, verseRef: "43:66" },
        { term: "وَهُمْ لَا يَشْعُرُونَ", meaning: { en: "While they perceive not", ur: "While they perceive not" }, explanation: { en: "Unaware of its timing", ur: "Unaware of its timing" }, verseRef: "43:66" },
        { term: "الْأَخِلَّاءُ يَوْمَئِذٍ بَعْضُهُمْ لِبَعْضٍ عَدُوٌّ", meaning: { en: "Close friends that Day will be enemies to each other", ur: "Close friends that Day will be enemies to each other" }, explanation: { en: "False friendships exposed", ur: "False friendships exposed" }, verseRef: "43:67" },
        { term: "إِلَّا الْمُتَّقِينَ", meaning: { en: "Except for the righteous", ur: "Except for the righteous" }, explanation: { en: "Only God-conscious maintain friendship", ur: "Only God-conscious maintain friendship" }, verseRef: "43:67" }
      ]
    },

    paradiseForRighteous: {
      name: "Paradise for the Righteous",
      nameArabic: "الجنة للمتقين",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "يَا عِبَادِ لَا خَوْفٌ عَلَيْكُمُ الْيَوْمَ وَلَا أَنتُمْ تَحْزَنُونَ", meaning: { en: "O My servants, no fear will there be concerning you this Day, nor will you grieve", ur: "O My servants, no fear will there be concerning you this Day, nor will you grieve" }, explanation: { en: "Divine assurance to believers", ur: "Divine assurance to believers" }, verseRef: "43:68" },
        { term: "الَّذِينَ آمَنُوا بِآيَاتِنَا وَكَانُوا مُسْلِمِينَ", meaning: { en: "Those who believed in Our signs and were Muslims", ur: "Those who believed in Our signs and were Muslims" }, explanation: { en: "Criteria: belief + submission", ur: "Criteria: belief + submission" }, verseRef: "43:69" },
        { term: "ادْخُلُوا الْجَنَّةَ أَنتُمْ وَأَزْوَاجُكُمْ تُحْبَرُونَ", meaning: { en: "Enter Paradise, you and your spouses, delighted", ur: "Enter Paradise, you and your spouses, delighted" }, explanation: { en: "Entry with spouses in joy", ur: "Entry with spouses in joy" }, verseRef: "43:70" },
        { term: "يُطَافُ عَلَيْهِم بِصِحَافٍ مِّن ذَهَبٍ وَأَكْوَابٍ", meaning: { en: "Circulated among them will be plates of gold and cups", ur: "Circulated among them will be plates of gold and cups" }, explanation: { en: "Gold plates in Paradise - true gold", ur: "Gold plates in Paradise - true gold" }, verseRef: "43:71" },
        { term: "وَفِيهَا مَا تَشْتَهِيهِ الْأَنفُسُ وَتَلَذُّ الْأَعْيُنُ", meaning: { en: "And therein is whatever souls desire and eyes delight in", ur: "And therein is whatever souls desire and eyes delight in" }, explanation: { en: "All desires fulfilled", ur: "All desires fulfilled" }, verseRef: "43:71" },
        { term: "وَأَنتُمْ فِيهَا خَالِدُونَ", meaning: { en: "And you will abide therein eternally", ur: "And you will abide therein eternally" }, explanation: { en: "Eternal residence", ur: "Eternal residence" }, verseRef: "43:71" },
        { term: "وَتِلْكَ الْجَنَّةُ الَّتِي أُورِثْتُمُوهَا بِمَا كُنتُمْ تَعْمَلُونَ", meaning: { en: "And that is Paradise which you are made to inherit for what you used to do", ur: "And that is Paradise which you are made to inherit for what you used to do" }, explanation: { en: "Paradise earned through deeds", ur: "Paradise earned through deeds" }, verseRef: "43:72" },
        { term: "لَكُمْ فِيهَا فَاكِهَةٌ كَثِيرَةٌ مِّنْهَا تَأْكُلُونَ", meaning: { en: "For you therein is much fruit from which you will eat", ur: "For you therein is much fruit from which you will eat" }, explanation: { en: "Abundant fruits", ur: "Abundant fruits" }, verseRef: "43:73" }
      ]
    },

    criminalsInHell: {
      name: "Criminals in Hell",
      nameArabic: "المجرمون في النار",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "إِنَّ الْمُجْرِمِينَ فِي عَذَابِ جَهَنَّمَ خَالِدُونَ", meaning: { en: "Indeed, the criminals will be in punishment of Hell, abiding eternally", ur: "Indeed, the criminals will be in punishment of Hell, abiding eternally" }, explanation: { en: "Eternal punishment for criminals", ur: "Eternal punishment for criminals" }, verseRef: "43:74" },
        { term: "لَا يُفَتَّرُ عَنْهُمْ", meaning: { en: "It will not be lightened for them", ur: "It will not be lightened for them" }, explanation: { en: "No respite from punishment", ur: "No respite from punishment" }, verseRef: "43:75" },
        { term: "وَهُمْ فِيهِ مُبْلِسُونَ", meaning: { en: "And they will be in despair therein", ur: "And they will be in despair therein" }, explanation: { en: "Complete hopelessness", ur: "Complete hopelessness" }, verseRef: "43:75" },
        { term: "وَمَا ظَلَمْنَاهُمْ وَلَٰكِن كَانُوا هُمُ الظَّالِمِينَ", meaning: { en: "And We did not wrong them, but they were the wrongdoers", ur: "And We did not wrong them, but they were the wrongdoers" }, explanation: { en: "Self-inflicted through wrongdoing", ur: "Self-inflicted through wrongdoing" }, verseRef: "43:76" },
        { term: "وَنَادَوْا يَا مَالِكُ لِيَقْضِ عَلَيْنَا رَبُّكَ", meaning: { en: "And they will call: O Malik, let your Lord put an end to us", ur: "And they will call: O Malik, let your Lord put an end to us" }, explanation: { en: "Pleading for death to end suffering", ur: "Pleading for death to end suffering" }, verseRef: "43:77" },
        { term: "قَالَ إِنَّكُم مَّاكِثُونَ", meaning: { en: "He will say: Indeed, you will remain", ur: "He will say: Indeed, you will remain" }, explanation: { en: "Malik's response - no escape", ur: "Malik's response - no escape" }, verseRef: "43:77" },
        { term: "لَقَدْ جِئْنَاكُم بِالْحَقِّ", meaning: { en: "We had certainly brought you the truth", ur: "We had certainly brought you the truth" }, explanation: { en: "Truth was presented", ur: "Truth was presented" }, verseRef: "43:78" },
        { term: "وَلَٰكِنَّ أَكْثَرَكُمْ لِلْحَقِّ كَارِهُونَ", meaning: { en: "But most of you were averse to the truth", ur: "But most of you were averse to the truth" }, explanation: { en: "Majority rejected truth", ur: "Majority rejected truth" }, verseRef: "43:78" }
      ]
    },

    secretPlotsExposed: {
      name: "Secret Plots Exposed",
      nameArabic: "كشف المكائد السرية",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "أَمْ أَبْرَمُوا أَمْرًا فَإِنَّا مُبْرِمُونَ", meaning: { en: "Or have they devised an affair? Then We are devising", ur: "Or have they devised an affair? Then We are devising" }, explanation: { en: "Allah's counter-plan", ur: "Allah's counter-plan" }, verseRef: "43:79" },
        { term: "أَمْ يَحْسَبُونَ أَنَّا لَا نَسْمَعُ سِرَّهُمْ وَنَجْوَاهُم", meaning: { en: "Or do they think that We hear not their secrets and private conversations?", ur: "Or do they think that We hear not their secrets and private conversations?" }, explanation: { en: "Allah hears all", ur: "Allah hears all" }, verseRef: "43:80" },
        { term: "بَلَىٰ وَرُسُلُنَا لَدَيْهِمْ يَكْتُبُونَ", meaning: { en: "Yes, and Our messengers are with them recording", ur: "Yes, and Our messengers are with them recording" }, explanation: { en: "Angels record everything", ur: "Angels record everything" }, verseRef: "43:80" }
      ]
    },

    noChildForAllah: {
      name: "Allah Has No Child",
      nameArabic: "الله ليس له ولد",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "قُلْ إِن كَانَ لِلرَّحْمَٰنِ وَلَدٌ", meaning: { en: "Say: If the Most Merciful had a son", ur: "Say: If the Most Merciful had a son" }, explanation: { en: "Hypothetical argument", ur: "Hypothetical argument" }, verseRef: "43:81" },
        { term: "فَأَنَا أَوَّلُ الْعَابِدِينَ", meaning: { en: "Then I would be the first of his worshippers", ur: "Then I would be the first of his worshippers" }, explanation: { en: "Prophet would be first to worship if true", ur: "Prophet would be first to worship if true" }, verseRef: "43:81" },
        { term: "سُبْحَانَ رَبِّ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Exalted is the Lord of the heavens and earth", ur: "Exalted is the Lord of the heavens and earth" }, explanation: { en: "Allah transcends such claims", ur: "Allah transcends such claims" }, verseRef: "43:82" },
        { term: "رَبِّ الْعَرْشِ عَمَّا يَصِفُونَ", meaning: { en: "Lord of the Throne, above what they describe", ur: "Lord of the Throne, above what they describe" }, explanation: { en: "Beyond their false descriptions", ur: "Beyond their false descriptions" }, verseRef: "43:82" },
        { term: "فَذَرْهُمْ يَخُوضُوا وَيَلْعَبُوا", meaning: { en: "So leave them to converse vainly and play", ur: "So leave them to converse vainly and play" }, explanation: { en: "Let them in their heedlessness", ur: "Let them in their heedlessness" }, verseRef: "43:83" },
        { term: "حَتَّىٰ يُلَاقُوا يَوْمَهُمُ الَّذِي يُوعَدُونَ", meaning: { en: "Until they meet their Day which they are promised", ur: "Until they meet their Day which they are promised" }, explanation: { en: "Until Judgment Day arrives", ur: "Until Judgment Day arrives" }, verseRef: "43:83" }
      ]
    },

    allahsSovereignty: {
      name: "Allah's Universal Sovereignty",
      nameArabic: "ملكية الله الشاملة",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "وَهُوَ الَّذِي فِي السَّمَاءِ إِلَٰهٌ وَفِي الْأَرْضِ إِلَٰهٌ", meaning: { en: "And He is God in the heaven and God on the earth", ur: "And He is God in the heaven and God on the earth" }, explanation: { en: "Sole deity in heaven and earth", ur: "Sole deity in heaven and earth" }, verseRef: "43:84" },
        { term: "وَهُوَ الْحَكِيمُ الْعَلِيمُ", meaning: { en: "And He is the Wise, the Knowing", ur: "And He is the Wise, the Knowing" }, explanation: { en: "Wisdom and knowledge combined", ur: "Wisdom and knowledge combined" }, verseRef: "43:84" },
        { term: "وَتَبَارَكَ الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "And blessed is He to whom belongs the dominion of heavens and earth", ur: "And blessed is He to whom belongs the dominion of heavens and earth" }, explanation: { en: "All dominion belongs to Allah", ur: "All dominion belongs to Allah" }, verseRef: "43:85" },
        { term: "وَمَا بَيْنَهُمَا", meaning: { en: "And whatever is between them", ur: "And whatever is between them" }, explanation: { en: "Everything in between included", ur: "Everything in between included" }, verseRef: "43:85" },
        { term: "وَعِندَهُ عِلْمُ السَّاعَةِ", meaning: { en: "And with Him is knowledge of the Hour", ur: "And with Him is knowledge of the Hour" }, explanation: { en: "Only Allah knows the Hour", ur: "Only Allah knows the Hour" }, verseRef: "43:85" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: { en: "And to Him you will be returned", ur: "And to Him you will be returned" }, explanation: { en: "Final return to Allah", ur: "Final return to Allah" }, verseRef: "43:85" },
        { term: "وَلَا يَمْلِكُ الَّذِينَ يَدْعُونَ مِن دُونِهِ الشَّفَاعَةَ", meaning: { en: "And those they invoke besides Him do not possess intercession", ur: "And those they invoke besides Him do not possess intercession" }, explanation: { en: "False gods cannot intercede", ur: "False gods cannot intercede" }, verseRef: "43:86" },
        { term: "إِلَّا مَن شَهِدَ بِالْحَقِّ وَهُمْ يَعْلَمُونَ", meaning: { en: "Except those who testify to the truth and know", ur: "Except those who testify to the truth and know" }, explanation: { en: "Only truthful witnesses can intercede", ur: "Only truthful witnesses can intercede" }, verseRef: "43:86" },
        { term: "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَهُمْ لَيَقُولُنَّ اللَّهُ", meaning: { en: "And if you asked them who created them, they would say: Allah", ur: "And if you asked them who created them, they would say: Allah" }, explanation: { en: "They acknowledge Creator yet worship others", ur: "They acknowledge Creator yet worship others" }, verseRef: "43:87" },
        { term: "فَأَنَّىٰ يُؤْفَكُونَ", meaning: { en: "So how are they deluded?", ur: "So how are they deluded?" }, explanation: { en: "Illogic of their polytheism", ur: "Illogic of their polytheism" }, verseRef: "43:87" }
      ]
    },

    prophetsFrustration: {
      name: "Prophet's Concern for His People",
      nameArabic: "همّ النبي لقومه",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "وَقِيلِهِ يَا رَبِّ إِنَّ هَٰؤُلَاءِ قَوْمٌ لَّا يُؤْمِنُونَ", meaning: { en: "And his saying: O my Lord, indeed these are a people who do not believe", ur: "And his saying: O my Lord, indeed these are a people who do not believe" }, explanation: { en: "Prophet's complaint to Allah", ur: "Prophet's complaint to Allah" }, verseRef: "43:88" },
        { term: "فَاصْفَحْ عَنْهُمْ", meaning: { en: "So turn aside from them", ur: "So turn aside from them" }, explanation: { en: "Command to overlook", ur: "Command to overlook" }, verseRef: "43:89" },
        { term: "وَقُلْ سَلَامٌ", meaning: { en: "And say: Peace", ur: "And say: Peace" }, explanation: { en: "Respond with peace", ur: "Respond with peace" }, verseRef: "43:89" },
        { term: "فَسَوْفَ يَعْلَمُونَ", meaning: { en: "For they are going to know", ur: "For they are going to know" }, explanation: { en: "Ultimate knowledge will come", ur: "Ultimate knowledge will come" }, verseRef: "43:89" }
      ]
    }
  },

  relationships: [
    { from: "زخرف (gold)", to: "متاع الدنيا", type: "symbol", description: { en: "Gold represents temporary worldly enjoyment", ur: "سونا عارضی دنیاوی لطف کی نمائندگی کرتا ہے" } },
    { from: "القرآن العربي", to: "أم الكتاب", type: "origin", description: { en: "Arabic Quran originates from Preserved Tablet", ur: "عربی قرآن لوح محفوظ سے نازل ہوا" } },
    { from: "إبراهيم", to: "كلمة باقية", type: "legacy", description: { en: "Ibrahim's lasting word of monotheism", ur: "ابراہیم کا توحید کا دائمی کلمہ" } },
    { from: "موسى", to: "فرعون", type: "opposition", description: { en: "Prophet vs tyrant - truth vs arrogance", ur: "نبی بمقابلہ ظالم - حق بمقابلہ تکبر" } },
    { from: "عيسى", to: "عبد", type: "identity", description: { en: "Isa's true identity as servant, not son", ur: "عیسیٰ کی حقیقی شناخت بندے کی ہے، بیٹے کی نہیں" } },
    { from: "ذكر الرحمن", to: "شيطان قرين", type: "consequence", description: { en: "Turning away from Allah leads to satanic companionship", ur: "اللہ سے اعراض شیطانی ساتھ کی طرف لے جاتا ہے" } },
    { from: "الأخلاء في الدنيا", to: "أعداء يوم القيامة", type: "transformation", description: { en: "Worldly friends become enemies except the righteous", ur: "دنیاوی دوست دشمن بن جائیں گے سوائے متقیوں کے" } },
    { from: "صحاف من ذهب في الجنة", to: "زخرف الدنيا", type: "contrast", description: { en: "True gold in Paradise vs deceptive worldly gold", ur: "جنت کا حقیقی سونا بمقابلہ دنیا کا فریب دینے والا سونا" } },
    { from: "آباء", to: "أمة", type: "blind-following", description: { en: "Following ancestors without thought", ur: "بغیر سوچے سمجھے آباء کی پیروی" } },
    { from: "المتقين", to: "خالدون في الجنة", type: "reward", description: { en: "God-conscious inherit Paradise", ur: "اللہ سے ڈرنے والے جنت کے وارث ہوں گے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran's Origin and Arabic Nature", verses: "43:1-8", description: { en: "Ha-Mim, Quran in Arabic from Mother of Book, prophets mocked", ur: "Ha-Mim, Quran in Arabic from Mother of Book, prophets mocked" } },
      { stage: 2, theme: "Signs in Creation", verses: "43:9-14", description: { en: "Earth, rain, transportation - blessings requiring gratitude", ur: "Earth, rain, transportation - blessings requiring gratitude" } },
      { stage: 3, theme: "Angels as Daughters Refuted", verses: "43:15-22", description: { en: "False claim about angels, following ancestors blindly", ur: "False claim about angels, following ancestors blindly" } },
      { stage: 4, theme: "Ibrahim's Monotheistic Legacy", verses: "43:26-28", description: { en: "Ibrahim's disavowal of idols, lasting word for descendants", ur: "Ibrahim's disavowal of idols, lasting word for descendants" } },
      { stage: 5, theme: "Rejection of Muhammad", verses: "43:29-35", description: { en: "Quraysh's objections, gold/ornaments devalued", ur: "Quraysh's objections, gold/ornaments devalued" } },
      { stage: 6, theme: "Satan as Companion", verses: "43:36-45", description: { en: "Turning from Allah leads to satanic companionship", ur: "Turning from Allah leads to satanic companionship" } },
      { stage: 7, theme: "Musa and Pharaoh", verses: "43:46-56", description: { en: "Signs mocked, Pharaoh's arrogance, drowning", ur: "Signs mocked, Pharaoh's arrogance, drowning" } },
      { stage: 8, theme: "Isa as Servant", verses: "43:57-65", description: { en: "Isa is servant not son, his clear teaching", ur: "Isa is servant not son, his clear teaching" } },
      { stage: 9, theme: "Day of Judgment", verses: "43:66-78", description: { en: "Friends become enemies, Paradise for righteous, Hell for criminals", ur: "Friends become enemies, Paradise for righteous, Hell for criminals" } },
      { stage: 10, theme: "Allah's Sovereignty", verses: "43:79-89", description: { en: "No child, universal Lord, Prophet's concern, peace", ur: "No child, universal Lord, Prophet's concern, peace" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Value revelation over gold", how: "Remember that worldly ornaments are temporary; Allah's mercy is better", verse: "43:32-35" },
      { principle: "Travel supplication", how: "Say: Subhanallazi sakh-khara lana haza when mounting transport", verse: "43:13-14" },
      { principle: "Break blind following", how: "Don't follow ancestors if they lacked knowledge; seek truth independently", verse: "43:22-24" },
      { principle: "Maintain dhikr", how: "Remember Allah to avoid satanic companionship", verse: "43:36" },
      { principle: "Understand Isa correctly", how: "He is a servant of Allah, not His son - follow his monotheistic teaching", verse: "43:59, 64" },
      { principle: "Choose righteous friends", how: "Friendships based on taqwa last eternally; others end", verse: "43:67" },
      { principle: "Respond with peace", how: "When faced with rejection, say salam and move on", verse: "43:89" },
      { principle: "Trust in Allah's plan", how: "Even if they plot, Allah's plan prevails", verse: "43:79" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of True vs False Gold", ur: "The Surah of True vs False Gold" },
    insight: { en: "Surah Az-Zukhruf derives its name from 'gold ornaments' (43:35), but its message is that gold/worldly luxury is worthless compared to divine guidance. The surah presents a powerful paradox: Allah could give disbelievers silver roofs, gold stairways, and luxurious furnishings - but all of it is merely 'enjoyment of worldly life' (متاع الحياة الدنيا). Meanwhile, the true gold - plates of gold (صحاف من ذهب, 43:71) - awaits believers in Paradise. The surah brilliantly connects three prophetic narratives: Ibrahim who established the lasting word of tawhid, Musa who faced Pharaoh's gold-obsessed arrogance (Pharaoh mocked Musa for not having gold bracelets, 43:53), and Isa who is a servant (عبد) despite those who elevated him to sonship. Each narrative dismantles false measures of worth - ancestral tradition, royal power, and divine sonship - and establishes the only true measure: servitude to Allah alone.", ur: "Surah Az-Zukhruf derives its name from 'gold ornaments' (43:35), but its message is that gold/worldly luxury is worthless compared to divine guidance. The surah presents a powerful paradox: Allah could give disbelievers silver roofs, gold stairways, and luxurious furnishings - but all of it is merely 'enjoyment of worldly life' (متاع الحياة الدنيا). Meanwhile, the true gold - plates of gold (صحاف من ذهب, 43:71) - awaits believers in Paradise. The surah brilliantly connects three prophetic narratives: Ibrahim who established the lasting word of tawhid, Musa who faced Pharaoh's gold-obsessed arrogance (Pharaoh mocked Musa for not having gold bracelets, 43:53), and Isa who is a servant (عبد) despite those who elevated him to sonship. Each narrative dismantles false measures of worth - ancestral tradition, royal power, and divine sonship - and establishes the only true measure: servitude to Allah alone." }
  },

  historicalContext: {
    note: { en: "This Makki surah was revealed during intense opposition in Mecca when the Quraysh elite rejected Muhammad for not being a 'great man from the two cities' (Mecca or Taif). They expected prophethood to come with gold bracelets and angelic escorts - the same standard Pharaoh applied to Musa. The surah systematically dismantles their criteria: true worth is not measured by gold, lineage, or worldly status, but by relationship with Allah. The travel supplication (43:13-14) remains one of the most practiced Sunnah supplications to this day.", ur: "This Makki surah was revealed during intense opposition in Mecca when the Quraysh elite rejected Muhammad for not being a 'great man from the two cities' (Mecca or Taif). They expected prophethood to come with gold bracelets and angelic escorts - the same standard Pharaoh applied to Musa. The surah systematically dismantles their criteria: true worth is not measured by gold, lineage, or worldly status, but by relationship with Allah. The travel supplication (43:13-14) remains one of the most practiced Sunnah supplications to this day." }
  },

  linguisticFeatures: {
    features: [
      { feature: "زُخْرُفًا", example: { en: "Gold ornaments/gilding", ur: "Gold ornaments/gilding" }, effect: { en: "Word implies both beauty and deception - ornamental but superficial", ur: "Word implies both beauty and deception - ornamental but superficial" } },
      { feature: "قَرِينٌ", example: { en: "Companion", ur: "Companion" }, effect: { en: "Intimate term for constant satanic presence - worse than temporary association", ur: "Intimate term for constant satanic presence - worse than temporary association" } },
      { feature: "بُعْدَ الْمَشْرِقَيْنِ", example: { en: "Distance of two easts", ur: "Distance of two easts" }, effect: { en: "Maximum conceivable distance - east of east", ur: "Maximum conceivable distance - east of east" } },
      { feature: "مَهِينٌ", example: { en: "Insignificant/contemptible", ur: "Insignificant/contemptible" }, effect: { en: "Pharaoh's dismissive term for Musa - ironic given outcome", ur: "Pharaoh's dismissive term for Musa - ironic given outcome" } },
      { feature: "أُمَّةٍ", example: { en: "Religion/way", ur: "Religion/way" }, effect: { en: "Same word for 'nation' and 'religion' - ancestors' religion becomes national identity", ur: "Same word for 'nation' and 'religion' - ancestors' religion becomes national identity" } },
      { feature: "حم", example: { en: "Ha-Mim", ur: "Ha-Mim" }, effect: { en: "Part of 7 Ha-Mim surahs (40-46) - mysterious opening letters", ur: "Part of 7 Ha-Mim surahs (40-46) - mysterious opening letters" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "43:11", topic: "Rain and resurrection", note: { en: "Analogy of dead land revived by rain parallels bodily resurrection", ur: "Analogy of dead land revived by rain parallels bodily resurrection" } },
      { verse: "43:12", topic: "Pairs in creation", note: { en: "Reference to male-female pairs across species", ur: "Reference to male-female pairs across species" } },
      { verse: "43:10", topic: "Pathways on earth", note: { en: "Natural valleys and passes facilitating travel", ur: "Natural valleys and passes facilitating travel" } }
    ]
  }
};

export default ONTOLOGY;
