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
  meaning: "The Gold Ornaments",
  revelationType: "Makki",
  totalAyahs: 89,

  categories: {
    quranInArabic: {
      name: "Quran Revealed in Arabic",
      nameArabic: "القرآن عربي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "حم", meaning: "Ha-Mim", explanation: "Disconnected letters (Muqatta'at) - part of Ha-Mim series", verseRef: "43:1" },
        { term: "وَالْكِتَابِ الْمُبِينِ", meaning: "By the clear Book", explanation: "Oath by the Quran's clarity", verseRef: "43:2" },
        { term: "إِنَّا جَعَلْنَاهُ قُرْآنًا عَرَبِيًّا", meaning: "Indeed, We have made it an Arabic Quran", explanation: "Quran revealed in Arabic for understanding", verseRef: "43:3" },
        { term: "لَّعَلَّكُمْ تَعْقِلُونَ", meaning: "That you might understand", explanation: "Arabic chosen so Arabs comprehend", verseRef: "43:3" },
        { term: "وَإِنَّهُ فِي أُمِّ الْكِتَابِ لَدَيْنَا", meaning: "And indeed it is, in the Mother of the Book with Us", explanation: "Quran's origin in the Preserved Tablet (Lawh Mahfuz)", verseRef: "43:4" },
        { term: "لَعَلِيٌّ حَكِيمٌ", meaning: "Exalted and full of wisdom", explanation: "The Quran's lofty and wise nature", verseRef: "43:4" },
        { term: "أَفَنَضْرِبُ عَنكُمُ الذِّكْرَ صَفْحًا", meaning: "Should We turn away the Reminder from you?", explanation: "Rhetorical - revelation continues despite rejection", verseRef: "43:5" },
        { term: "أَن كُنتُمْ قَوْمًا مُّسْرِفِينَ", meaning: "Because you are a transgressing people", explanation: "Transgression doesn't stop mercy", verseRef: "43:5" }
      ]
    },

    previousProphetsRejected: {
      name: "Previous Prophets Also Mocked",
      nameArabic: "استهزاء الأنبياء السابقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَكَمْ أَرْسَلْنَا مِن نَّبِيٍّ فِي الْأَوَّلِينَ", meaning: "And how many a prophet We sent among the former peoples", explanation: "Pattern of sending prophets", verseRef: "43:6" },
        { term: "وَمَا يَأْتِيهِم مِّن نَّبِيٍّ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: "And no prophet came to them except they mocked him", explanation: "Mockery is constant pattern", verseRef: "43:7" },
        { term: "فَأَهْلَكْنَا أَشَدَّ مِنْهُم بَطْشًا", meaning: "So We destroyed those more powerful than them", explanation: "Previous nations destroyed despite power", verseRef: "43:8" },
        { term: "وَمَضَىٰ مَثَلُ الْأَوَّلِينَ", meaning: "And the example of the former peoples has passed", explanation: "Historical warning established", verseRef: "43:8" }
      ]
    },

    signsOfCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: "If you asked them who created heavens and earth", explanation: "Even disbelievers acknowledge Creator", verseRef: "43:9" },
        { term: "لَيَقُولُنَّ خَلَقَهُنَّ الْعَزِيزُ الْعَلِيمُ", meaning: "They would say: The Mighty, the Knowing created them", explanation: "Innate acknowledgment of Allah", verseRef: "43:9" },
        { term: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا", meaning: "Who made the earth a bed for you", explanation: "Earth spread out for living", verseRef: "43:10" },
        { term: "وَجَعَلَ لَكُمْ فِيهَا سُبُلًا", meaning: "And made for you therein pathways", explanation: "Roads and passages for travel", verseRef: "43:10" },
        { term: "لَّعَلَّكُمْ تَهْتَدُونَ", meaning: "That you may be guided", explanation: "Physical and spiritual guidance", verseRef: "43:10" },
        { term: "وَالَّذِي نَزَّلَ مِنَ السَّمَاءِ مَاءً بِقَدَرٍ", meaning: "Who sends down water from sky in measure", explanation: "Precise rainfall provision", verseRef: "43:11" },
        { term: "فَأَنشَرْنَا بِهِ بَلْدَةً مَّيْتًا", meaning: "And We revive thereby a dead land", explanation: "Rain brings life - parallel to resurrection", verseRef: "43:11" },
        { term: "كَذَٰلِكَ تُخْرَجُونَ", meaning: "Thus you will be brought forth", explanation: "Resurrection like land revival", verseRef: "43:11" }
      ]
    },

    transportationBlessings: {
      name: "Blessings of Transportation",
      nameArabic: "نعمة المركب",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "وَالَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا", meaning: "And Who created all the pairs", explanation: "Male-female pairs in creation", verseRef: "43:12" },
        { term: "وَجَعَلَ لَكُم مِّنَ الْفُلْكِ وَالْأَنْعَامِ مَا تَرْكَبُونَ", meaning: "And made for you of ships and animals that you ride", explanation: "Transportation provided by Allah", verseRef: "43:12" },
        { term: "لِتَسْتَوُوا عَلَىٰ ظُهُورِهِ", meaning: "That you may settle upon their backs", explanation: "Ability to mount and ride", verseRef: "43:13" },
        { term: "ثُمَّ تَذْكُرُوا نِعْمَةَ رَبِّكُمْ إِذَا اسْتَوَيْتُمْ عَلَيْهِ", meaning: "Then remember the favor of your Lord when you settle upon it", explanation: "Gratitude when mounting transport", verseRef: "43:13" },
        { term: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا", meaning: "Exalted is He who has subjected this to us", explanation: "Travel supplication - recognizing Allah's control", verseRef: "43:13" },
        { term: "وَمَا كُنَّا لَهُ مُقْرِنِينَ", meaning: "And we could not have subdued it ourselves", explanation: "Human inability without Allah's help", verseRef: "43:13" },
        { term: "وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ", meaning: "And indeed we, to our Lord, will surely return", explanation: "Remembering ultimate return while traveling", verseRef: "43:14" }
      ]
    },

    angelsAsFemales: {
      name: "Refutation of Angels as Daughters",
      nameArabic: "رد دعوى الملائكة إناث",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَجَعَلُوا لَهُ مِنْ عِبَادِهِ جُزْءًا", meaning: "And they have made for Him from His servants a portion", explanation: "Attributing offspring to Allah", verseRef: "43:15" },
        { term: "إِنَّ الْإِنسَانَ لَكَفُورٌ مُّبِينٌ", meaning: "Indeed, mankind is clearly ungrateful", explanation: "Clear ingratitude in this claim", verseRef: "43:15" },
        { term: "أَمِ اتَّخَذَ مِمَّا يَخْلُقُ بَنَاتٍ", meaning: "Has He taken from what He creates daughters?", explanation: "Rhetorical - absurd claim", verseRef: "43:16" },
        { term: "وَأَصْفَاكُم بِالْبَنِينَ", meaning: "And chosen sons for you?", explanation: "Inconsistency in their own preference", verseRef: "43:16" },
        { term: "وَإِذَا بُشِّرَ أَحَدُهُم بِمَا ضَرَبَ لِلرَّحْمَٰنِ مَثَلًا", meaning: "When one of them is given news of that which he attributes to the Most Merciful", explanation: "When told of a daughter...", verseRef: "43:17" },
        { term: "ظَلَّ وَجْهُهُ مُسْوَدًّا وَهُوَ كَظِيمٌ", meaning: "His face becomes dark, and he suppresses grief", explanation: "Their own reaction to daughters", verseRef: "43:17" },
        { term: "أَوَمَن يُنَشَّأُ فِي الْحِلْيَةِ", meaning: "Is one raised in ornaments?", explanation: "Reference to feminine upbringing", verseRef: "43:18" },
        { term: "وَهُوَ فِي الْخِصَامِ غَيْرُ مُبِينٍ", meaning: "And is unclear in dispute?", explanation: "Stereotyping females - their own view", verseRef: "43:18" },
        { term: "وَجَعَلُوا الْمَلَائِكَةَ الَّذِينَ هُمْ عِبَادُ الرَّحْمَٰنِ إِنَاثًا", meaning: "And they made the angels, who are servants of the Most Merciful, females", explanation: "False claim about angels' gender", verseRef: "43:19" },
        { term: "أَشَهِدُوا خَلْقَهُمْ", meaning: "Did they witness their creation?", explanation: "No witness to make such claims", verseRef: "43:19" },
        { term: "سَتُكْتَبُ شَهَادَتُهُمْ وَيُسْأَلُونَ", meaning: "Their testimony will be recorded and they will be questioned", explanation: "Accountability for false claims", verseRef: "43:19" }
      ]
    },

    blindFollowingOfAncestors: {
      name: "Blind Following of Ancestors",
      nameArabic: "التقليد الأعمى للآباء",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَقَالُوا لَوْ شَاءَ الرَّحْمَٰنُ مَا عَبَدْنَاهُم", meaning: "And they say: If the Most Merciful had willed, we would not have worshipped them", explanation: "False fatalism to justify shirk", verseRef: "43:20" },
        { term: "مَّا لَهُم بِذَٰلِكَ مِنْ عِلْمٍ", meaning: "They have no knowledge of that", explanation: "Claim without evidence", verseRef: "43:20" },
        { term: "إِنْ هُمْ إِلَّا يَخْرُصُونَ", meaning: "They are only guessing", explanation: "Mere conjecture", verseRef: "43:20" },
        { term: "أَمْ آتَيْنَاهُمْ كِتَابًا مِّن قَبْلِهِ", meaning: "Or have We given them a book before this?", explanation: "No divine authority for their claims", verseRef: "43:21" },
        { term: "فَهُم بِهِ مُسْتَمْسِكُونَ", meaning: "To which they are adhering?", explanation: "No scriptural basis", verseRef: "43:21" },
        { term: "بَلْ قَالُوا إِنَّا وَجَدْنَا آبَاءَنَا عَلَىٰ أُمَّةٍ", meaning: "Rather, they say: We found our fathers upon a religion", explanation: "Only basis is ancestral tradition", verseRef: "43:22" },
        { term: "وَإِنَّا عَلَىٰ آثَارِهِم مُّهْتَدُونَ", meaning: "And we are guided by their footsteps", explanation: "Blind following without thinking", verseRef: "43:22" },
        { term: "وَكَذَٰلِكَ مَا أَرْسَلْنَا مِن قَبْلِكَ فِي قَرْيَةٍ مِّن نَّذِيرٍ", meaning: "Similarly, We did not send before you any warner into a city", explanation: "Same pattern in all societies", verseRef: "43:23" },
        { term: "إِلَّا قَالَ مُتْرَفُوهَا إِنَّا وَجَدْنَا آبَاءَنَا عَلَىٰ أُمَّةٍ", meaning: "Except that its affluent said: We found our fathers upon a religion", explanation: "Wealthy elite uphold tradition", verseRef: "43:23" },
        { term: "قَالَ أَوَلَوْ جِئْتُكُم بِأَهْدَىٰ مِمَّا وَجَدتُّمْ عَلَيْهِ آبَاءَكُمْ", meaning: "Say: Even if I brought you better guidance than that upon which you found your fathers?", explanation: "Prophet offers superior guidance", verseRef: "43:24" },
        { term: "قَالُوا إِنَّا بِمَا أُرْسِلْتُم بِهِ كَافِرُونَ", meaning: "They said: Indeed we disbelieve in that with which you have been sent", explanation: "Rejection despite better alternative", verseRef: "43:24" },
        { term: "فَانتَقَمْنَا مِنْهُمْ", meaning: "So We took retribution from them", explanation: "Consequence of rejection", verseRef: "43:25" },
        { term: "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُكَذِّبِينَ", meaning: "See how was the end of the deniers", explanation: "Historical lesson", verseRef: "43:25" }
      ]
    },

    ibrahimMonotheism: {
      name: "Ibrahim's Pure Monotheism",
      nameArabic: "توحيد إبراهيم",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ وَقَوْمِهِ", meaning: "And when Ibrahim said to his father and his people", explanation: "Ibrahim's public declaration", verseRef: "43:26" },
        { term: "إِنَّنِي بَرَاءٌ مِّمَّا تَعْبُدُونَ", meaning: "Indeed, I am disassociated from that which you worship", explanation: "Clear disavowal of idolatry", verseRef: "43:26" },
        { term: "إِلَّا الَّذِي فَطَرَنِي", meaning: "Except He who created me", explanation: "Exception - worship only the Creator", verseRef: "43:27" },
        { term: "فَإِنَّهُ سَيَهْدِينِ", meaning: "For indeed He will guide me", explanation: "Trust in divine guidance", verseRef: "43:27" },
        { term: "وَجَعَلَهَا كَلِمَةً بَاقِيَةً فِي عَقِبِهِ", meaning: "And he made it a word remaining among his descendants", explanation: "La ilaha illallah as lasting legacy", verseRef: "43:28" },
        { term: "لَعَلَّهُمْ يَرْجِعُونَ", meaning: "That they might return", explanation: "Hope for descendants to return to monotheism", verseRef: "43:28" },
        { term: "بَلْ مَتَّعْتُ هَٰؤُلَاءِ وَآبَاءَهُمْ", meaning: "But I gave enjoyment to these and their fathers", explanation: "Allah's patience with worldly enjoyment", verseRef: "43:29" },
        { term: "حَتَّىٰ جَاءَهُمُ الْحَقُّ وَرَسُولٌ مُّبِينٌ", meaning: "Until the truth came to them and a clear Messenger", explanation: "Finally truth arrives with Muhammad", verseRef: "43:29" }
      ]
    },

    rejectionOfMuhammad: {
      name: "Quraysh's Rejection of Muhammad",
      nameArabic: "رفض قريش لمحمد",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَلَمَّا جَاءَهُمُ الْحَقُّ قَالُوا هَٰذَا سِحْرٌ", meaning: "And when the truth came to them, they said: This is magic", explanation: "Accusation of sorcery", verseRef: "43:30" },
        { term: "وَإِنَّا بِهِ كَافِرُونَ", meaning: "And indeed we disbelieve in it", explanation: "Open rejection", verseRef: "43:30" },
        { term: "وَقَالُوا لَوْلَا نُزِّلَ هَٰذَا الْقُرْآنُ عَلَىٰ رَجُلٍ مِّنَ الْقَرْيَتَيْنِ عَظِيمٍ", meaning: "And they said: Why was this Quran not sent down upon a great man from the two cities?", explanation: "Expecting revelation to wealthy leaders", verseRef: "43:31" },
        { term: "أَهُمْ يَقْسِمُونَ رَحْمَتَ رَبِّكَ", meaning: "Do they distribute the mercy of your Lord?", explanation: "They don't control who receives prophethood", verseRef: "43:32" },
        { term: "نَحْنُ قَسَمْنَا بَيْنَهُم مَّعِيشَتَهُمْ فِي الْحَيَاةِ الدُّنْيَا", meaning: "We have distributed among them their livelihood in worldly life", explanation: "Allah distributes provision and roles", verseRef: "43:32" },
        { term: "وَرَفَعْنَا بَعْضَهُمْ فَوْقَ بَعْضٍ دَرَجَاتٍ", meaning: "And raised some of them above others in degrees", explanation: "Hierarchy is Allah's design", verseRef: "43:32" },
        { term: "لِّيَتَّخِذَ بَعْضُهُم بَعْضًا سُخْرِيًّا", meaning: "That they may make use of one another", explanation: "Interdependence in society", verseRef: "43:32" },
        { term: "وَرَحْمَتُ رَبِّكَ خَيْرٌ مِّمَّا يَجْمَعُونَ", meaning: "And the mercy of your Lord is better than what they accumulate", explanation: "Divine mercy exceeds worldly wealth", verseRef: "43:32" }
      ]
    },

    goldOrnamentsDevalued: {
      name: "Gold Ornaments - Worldly Deception",
      nameArabic: "الزخرف - متاع الدنيا",
      color: '#F59E0B',
      icon: 'Sparkles',
      concepts: [
        { term: "وَلَوْلَا أَن يَكُونَ النَّاسُ أُمَّةً وَاحِدَةً", meaning: "And if it were not that people would become one community", explanation: "If not for test of faith...", verseRef: "43:33" },
        { term: "لَّجَعَلْنَا لِمَن يَكْفُرُ بِالرَّحْمَٰنِ لِبُيُوتِهِمْ سُقُفًا مِّن فِضَّةٍ", meaning: "We would have made for disbelievers roofs of silver for their houses", explanation: "Allah could give disbelievers silver roofs", verseRef: "43:33" },
        { term: "وَمَعَارِجَ عَلَيْهَا يَظْهَرُونَ", meaning: "And stairways upon which to mount", explanation: "Silver stairways for the disbelievers", verseRef: "43:33" },
        { term: "وَلِبُيُوتِهِمْ أَبْوَابًا وَسُرُرًا عَلَيْهَا يَتَّكِئُونَ", meaning: "And for their houses doors and couches upon which to recline", explanation: "Luxurious doors and furniture", verseRef: "43:34" },
        { term: "وَزُخْرُفًا", meaning: "And gold ornaments", explanation: "ZUKHRUF - the surah's namesake", verseRef: "43:35" },
        { term: "وَإِن كُلُّ ذَٰلِكَ لَمَّا مَتَاعُ الْحَيَاةِ الدُّنْيَا", meaning: "And all of that is nothing but enjoyment of worldly life", explanation: "Core message: gold/luxury is temporary", verseRef: "43:35" },
        { term: "وَالْآخِرَةُ عِندَ رَبِّكَ لِلْمُتَّقِينَ", meaning: "And the Hereafter with your Lord is for the righteous", explanation: "Hereafter reserved for the God-conscious", verseRef: "43:35" }
      ]
    },

    satanAsCompanion: {
      name: "Satan as Companion of the Heedless",
      nameArabic: "الشيطان قرين الغافل",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَمَن يَعْشُ عَن ذِكْرِ الرَّحْمَٰنِ", meaning: "And whoever is blinded from remembrance of the Most Merciful", explanation: "Turning away from Allah's remembrance", verseRef: "43:36" },
        { term: "نُقَيِّضْ لَهُ شَيْطَانًا", meaning: "We appoint for him a devil", explanation: "Satan assigned as companion", verseRef: "43:36" },
        { term: "فَهُوَ لَهُ قَرِينٌ", meaning: "And he is to him a companion", explanation: "Constant evil companionship", verseRef: "43:36" },
        { term: "وَإِنَّهُمْ لَيَصُدُّونَهُمْ عَنِ السَّبِيلِ", meaning: "And indeed, they avert them from the way", explanation: "Devils block the path", verseRef: "43:37" },
        { term: "وَيَحْسَبُونَ أَنَّهُم مُّهْتَدُونَ", meaning: "While they think they are guided", explanation: "False sense of guidance", verseRef: "43:37" },
        { term: "حَتَّىٰ إِذَا جَاءَنَا", meaning: "Until, when he comes to Us", explanation: "Moment of truth at judgment", verseRef: "43:38" },
        { term: "قَالَ يَا لَيْتَ بَيْنِي وَبَيْنَكَ بُعْدَ الْمَشْرِقَيْنِ", meaning: "He says: Oh, I wish between me and you was the distance of the two easts", explanation: "Wishing maximum distance from satan", verseRef: "43:38" },
        { term: "فَبِئْسَ الْقَرِينُ", meaning: "What a wretched companion", explanation: "Satan revealed as worst companion", verseRef: "43:38" },
        { term: "وَلَن يَنفَعَكُمُ الْيَوْمَ إِذ ظَّلَمْتُمْ أَنَّكُمْ فِي الْعَذَابِ مُشْتَرِكُونَ", meaning: "And never will it benefit you that Day, when you have wronged, that you are sharing in punishment", explanation: "Shared punishment offers no comfort", verseRef: "43:39" }
      ]
    },

    prophetCannotGuideAll: {
      name: "Prophet Cannot Guide the Unwilling",
      nameArabic: "النبي لا يهدي من لا يريد",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "أَفَأَنتَ تُسْمِعُ الصُّمَّ", meaning: "Can you make the deaf hear?", explanation: "Rhetorical - spiritual deafness", verseRef: "43:40" },
        { term: "أَوْ تَهْدِي الْعُمْيَ", meaning: "Or guide the blind?", explanation: "Spiritual blindness cannot be forced", verseRef: "43:40" },
        { term: "وَمَن كَانَ فِي ضَلَالٍ مُّبِينٍ", meaning: "And one who is in clear error?", explanation: "Those in obvious misguidance", verseRef: "43:40" },
        { term: "فَإِمَّا نَذْهَبَنَّ بِكَ فَإِنَّا مِنْهُم مُّنتَقِمُونَ", meaning: "If We take you away, We will take retribution from them", explanation: "Punishment will come regardless", verseRef: "43:41" },
        { term: "أَوْ نُرِيَنَّكَ الَّذِي وَعَدْنَاهُمْ", meaning: "Or We will show you what We have promised them", explanation: "Prophet may witness their punishment", verseRef: "43:42" },
        { term: "فَإِنَّا عَلَيْهِم مُّقْتَدِرُونَ", meaning: "For indeed, We have power over them", explanation: "Allah's complete control", verseRef: "43:42" },
        { term: "فَاسْتَمْسِكْ بِالَّذِي أُوحِيَ إِلَيْكَ", meaning: "So hold fast to that which is revealed to you", explanation: "Command to adhere to revelation", verseRef: "43:43" },
        { term: "إِنَّكَ عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", meaning: "Indeed, you are upon a straight path", explanation: "Affirmation of correct guidance", verseRef: "43:43" },
        { term: "وَإِنَّهُ لَذِكْرٌ لَّكَ وَلِقَوْمِكَ", meaning: "And indeed, it is a reminder for you and your people", explanation: "Quran as honor for Arabs", verseRef: "43:44" },
        { term: "وَسَوْفَ تُسْأَلُونَ", meaning: "And you will be questioned", explanation: "Accountability coming", verseRef: "43:44" }
      ]
    },

    allMessengersPreachedTawhid: {
      name: "All Messengers Preached Monotheism",
      nameArabic: "كل الرسل دعوا للتوحيد",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "وَاسْأَلْ مَنْ أَرْسَلْنَا مِن قَبْلِكَ مِن رُّسُلِنَا", meaning: "And ask those We sent before you of Our messengers", explanation: "Universal message of all prophets", verseRef: "43:45" },
        { term: "أَجَعَلْنَا مِن دُونِ الرَّحْمَٰنِ آلِهَةً يُعْبَدُونَ", meaning: "Did We make besides the Most Merciful gods to be worshipped?", explanation: "No prophet endorsed polytheism", verseRef: "43:45" }
      ]
    },

    musaAndPharaoh: {
      name: "Musa and Pharaoh",
      nameArabic: "موسى وفرعون",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِآيَاتِنَا إِلَىٰ فِرْعَوْنَ وَمَلَئِهِ", meaning: "And We sent Musa with Our signs to Pharaoh and his establishment", explanation: "Musa sent to Pharaoh with miracles", verseRef: "43:46" },
        { term: "فَقَالَ إِنِّي رَسُولُ رَبِّ الْعَالَمِينَ", meaning: "He said: Indeed, I am a messenger of the Lord of the worlds", explanation: "Musa's declaration of prophethood", verseRef: "43:46" },
        { term: "فَلَمَّا جَاءَهُم بِآيَاتِنَا إِذَا هُم مِّنْهَا يَضْحَكُونَ", meaning: "But when he brought them Our signs, they laughed at them", explanation: "Mockery of divine signs", verseRef: "43:47" },
        { term: "وَمَا نُرِيهِم مِّنْ آيَةٍ إِلَّا هِيَ أَكْبَرُ مِنْ أُخْتِهَا", meaning: "And We showed them not a sign except it was greater than its sister", explanation: "Each sign more powerful than previous", verseRef: "43:48" },
        { term: "وَأَخَذْنَاهُم بِالْعَذَابِ", meaning: "And We seized them with punishment", explanation: "Divine punishment on Pharaoh's people", verseRef: "43:48" },
        { term: "لَعَلَّهُمْ يَرْجِعُونَ", meaning: "That perhaps they might return", explanation: "Punishment to encourage repentance", verseRef: "43:48" },
        { term: "وَقَالُوا يَا أَيُّهَ السَّاحِرُ ادْعُ لَنَا رَبَّكَ", meaning: "And they said: O magician, invoke for us your Lord", explanation: "Pharaoh's people call Musa during affliction", verseRef: "43:49" },
        { term: "بِمَا عَهِدَ عِندَكَ إِنَّنَا لَمُهْتَدُونَ", meaning: "By what He has promised you. Indeed, we will be guided", explanation: "False promise to believe", verseRef: "43:49" },
        { term: "فَلَمَّا كَشَفْنَا عَنْهُمُ الْعَذَابَ إِذَا هُمْ يَنكُثُونَ", meaning: "But when We removed from them the punishment, they broke their word", explanation: "Breaking promise once saved", verseRef: "43:50" }
      ]
    },

    pharaohsArrogance: {
      name: "Pharaoh's Arrogance",
      nameArabic: "تكبر فرعون",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَنَادَىٰ فِرْعَوْنُ فِي قَوْمِهِ", meaning: "And Pharaoh called out among his people", explanation: "Pharaoh's public proclamation", verseRef: "43:51" },
        { term: "قَالَ يَا قَوْمِ أَلَيْسَ لِي مُلْكُ مِصْرَ", meaning: "He said: O my people, does not the kingdom of Egypt belong to me?", explanation: "Boasting of Egyptian kingship", verseRef: "43:51" },
        { term: "وَهَٰذِهِ الْأَنْهَارُ تَجْرِي مِن تَحْتِي", meaning: "And these rivers flowing beneath me?", explanation: "Pride in Nile's abundance", verseRef: "43:51" },
        { term: "أَفَلَا تُبْصِرُونَ", meaning: "Do you not see?", explanation: "Appealing to their senses", verseRef: "43:51" },
        { term: "أَمْ أَنَا خَيْرٌ مِّنْ هَٰذَا الَّذِي هُوَ مَهِينٌ", meaning: "Or am I not better than this one who is insignificant?", explanation: "Belittling Musa", verseRef: "43:52" },
        { term: "وَلَا يَكَادُ يُبِينُ", meaning: "And can hardly express himself clearly", explanation: "Mocking Musa's speech impediment", verseRef: "43:52" },
        { term: "فَلَوْلَا أُلْقِيَ عَلَيْهِ أَسْوِرَةٌ مِّن ذَهَبٍ", meaning: "Then why have not been placed upon him bracelets of gold?", explanation: "Demanding gold as proof of prophethood", verseRef: "43:53" },
        { term: "أَوْ جَاءَ مَعَهُ الْمَلَائِكَةُ مُقْتَرِنِينَ", meaning: "Or come with him the angels accompanying?", explanation: "Demanding angel escort", verseRef: "43:53" },
        { term: "فَاسْتَخَفَّ قَوْمَهُ فَأَطَاعُوهُ", meaning: "So he bluffed his people, and they obeyed him", explanation: "Pharaoh manipulated masses", verseRef: "43:54" },
        { term: "إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ", meaning: "Indeed, they were a people defiantly disobedient", explanation: "Root cause - disobedience", verseRef: "43:54" },
        { term: "فَلَمَّا آسَفُونَا انتَقَمْنَا مِنْهُمْ", meaning: "So when they angered Us, We took retribution from them", explanation: "Divine anger triggered punishment", verseRef: "43:55" },
        { term: "فَأَغْرَقْنَاهُمْ أَجْمَعِينَ", meaning: "And drowned them all", explanation: "Total destruction by drowning", verseRef: "43:55" },
        { term: "فَجَعَلْنَاهُمْ سَلَفًا وَمَثَلًا لِّلْآخِرِينَ", meaning: "And We made them a precedent and an example for the later peoples", explanation: "Historical lesson for future", verseRef: "43:56" }
      ]
    },

    isaServantNotSon: {
      name: "Isa: Servant, Not Son",
      nameArabic: "عيسى عبد لا ولد",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "وَلَمَّا ضُرِبَ ابْنُ مَرْيَمَ مَثَلًا", meaning: "And when the son of Mary was presented as an example", explanation: "Isa cited in argument", verseRef: "43:57" },
        { term: "إِذَا قَوْمُكَ مِنْهُ يَصِدُّونَ", meaning: "Immediately your people laughed aloud", explanation: "Quraysh mocked/disputed", verseRef: "43:57" },
        { term: "وَقَالُوا أَآلِهَتُنَا خَيْرٌ أَمْ هُوَ", meaning: "And said: Are our gods better, or is he?", explanation: "Comparing Isa to idols", verseRef: "43:58" },
        { term: "مَا ضَرَبُوهُ لَكَ إِلَّا جَدَلًا", meaning: "They did not present it except for argument", explanation: "Mere argumentation, not seeking truth", verseRef: "43:58" },
        { term: "بَلْ هُمْ قَوْمٌ خَصِمُونَ", meaning: "Rather, they are a quarrelsome people", explanation: "Nature - contentious disputants", verseRef: "43:58" },
        { term: "إِنْ هُوَ إِلَّا عَبْدٌ أَنْعَمْنَا عَلَيْهِ", meaning: "He was not but a servant upon whom We bestowed favor", explanation: "CORE MESSAGE: Isa is servant (abd), not son", verseRef: "43:59" },
        { term: "وَجَعَلْنَاهُ مَثَلًا لِّبَنِي إِسْرَائِيلَ", meaning: "And We made him an example for the Children of Israel", explanation: "Isa as sign for Israelites", verseRef: "43:59" },
        { term: "وَلَوْ نَشَاءُ لَجَعَلْنَا مِنكُم مَّلَائِكَةً فِي الْأَرْضِ يَخْلُفُونَ", meaning: "And if We willed, We could make from among you angels succeeding on earth", explanation: "Allah's power to create differently", verseRef: "43:60" },
        { term: "وَإِنَّهُ لَعِلْمٌ لِّلسَّاعَةِ", meaning: "And indeed, he is a knowledge for the Hour", explanation: "Isa's return as sign of Day of Judgment", verseRef: "43:61" },
        { term: "فَلَا تَمْتَرُنَّ بِهَا", meaning: "So do not doubt it", explanation: "No doubt about the Hour", verseRef: "43:61" },
        { term: "وَاتَّبِعُونِ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ", meaning: "And follow Me. This is a straight path", explanation: "Call to follow Allah's guidance", verseRef: "43:61" },
        { term: "وَلَا يَصُدَّنَّكُمُ الشَّيْطَانُ", meaning: "And let not Satan avert you", explanation: "Warning against Satan's diversion", verseRef: "43:62" },
        { term: "إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ", meaning: "Indeed, he is to you a clear enemy", explanation: "Satan's open enmity", verseRef: "43:62" }
      ]
    },

    isasTeaching: {
      name: "Isa's Clear Teaching",
      nameArabic: "تعليم عيسى الواضح",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَلَمَّا جَاءَ عِيسَىٰ بِالْبَيِّنَاتِ", meaning: "And when Jesus brought clear proofs", explanation: "Isa came with evident signs", verseRef: "43:63" },
        { term: "قَالَ قَدْ جِئْتُكُم بِالْحِكْمَةِ", meaning: "He said: I have come to you with wisdom", explanation: "Isa brought divine wisdom", verseRef: "43:63" },
        { term: "وَلِأُبَيِّنَ لَكُم بَعْضَ الَّذِي تَخْتَلِفُونَ فِيهِ", meaning: "And to make clear to you some of that over which you differ", explanation: "Clarifying disputed matters", verseRef: "43:63" },
        { term: "فَاتَّقُوا اللَّهَ وَأَطِيعُونِ", meaning: "So fear Allah and obey me", explanation: "Isa's call to taqwa and obedience", verseRef: "43:63" },
        { term: "إِنَّ اللَّهَ هُوَ رَبِّي وَرَبُّكُمْ", meaning: "Indeed, Allah is my Lord and your Lord", explanation: "Isa affirms shared Lord", verseRef: "43:64" },
        { term: "فَاعْبُدُوهُ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ", meaning: "So worship Him. This is a straight path", explanation: "Call to worship Allah alone", verseRef: "43:64" },
        { term: "فَاخْتَلَفَ الْأَحْزَابُ مِن بَيْنِهِمْ", meaning: "But the parties differed among themselves", explanation: "Christians split into sects", verseRef: "43:65" },
        { term: "فَوَيْلٌ لِّلَّذِينَ ظَلَمُوا مِنْ عَذَابِ يَوْمٍ أَلِيمٍ", meaning: "So woe to those who have wronged from punishment of a painful Day", explanation: "Warning to those who deviated", verseRef: "43:65" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "هَلْ يَنظُرُونَ إِلَّا السَّاعَةَ أَن تَأْتِيَهُم بَغْتَةً", meaning: "Are they waiting except for the Hour to come upon them suddenly", explanation: "Hour will come unexpectedly", verseRef: "43:66" },
        { term: "وَهُمْ لَا يَشْعُرُونَ", meaning: "While they perceive not", explanation: "Unaware of its timing", verseRef: "43:66" },
        { term: "الْأَخِلَّاءُ يَوْمَئِذٍ بَعْضُهُمْ لِبَعْضٍ عَدُوٌّ", meaning: "Close friends that Day will be enemies to each other", explanation: "False friendships exposed", verseRef: "43:67" },
        { term: "إِلَّا الْمُتَّقِينَ", meaning: "Except for the righteous", explanation: "Only God-conscious maintain friendship", verseRef: "43:67" }
      ]
    },

    paradiseForRighteous: {
      name: "Paradise for the Righteous",
      nameArabic: "الجنة للمتقين",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "يَا عِبَادِ لَا خَوْفٌ عَلَيْكُمُ الْيَوْمَ وَلَا أَنتُمْ تَحْزَنُونَ", meaning: "O My servants, no fear will there be concerning you this Day, nor will you grieve", explanation: "Divine assurance to believers", verseRef: "43:68" },
        { term: "الَّذِينَ آمَنُوا بِآيَاتِنَا وَكَانُوا مُسْلِمِينَ", meaning: "Those who believed in Our signs and were Muslims", explanation: "Criteria: belief + submission", verseRef: "43:69" },
        { term: "ادْخُلُوا الْجَنَّةَ أَنتُمْ وَأَزْوَاجُكُمْ تُحْبَرُونَ", meaning: "Enter Paradise, you and your spouses, delighted", explanation: "Entry with spouses in joy", verseRef: "43:70" },
        { term: "يُطَافُ عَلَيْهِم بِصِحَافٍ مِّن ذَهَبٍ وَأَكْوَابٍ", meaning: "Circulated among them will be plates of gold and cups", explanation: "Gold plates in Paradise - true gold", verseRef: "43:71" },
        { term: "وَفِيهَا مَا تَشْتَهِيهِ الْأَنفُسُ وَتَلَذُّ الْأَعْيُنُ", meaning: "And therein is whatever souls desire and eyes delight in", explanation: "All desires fulfilled", verseRef: "43:71" },
        { term: "وَأَنتُمْ فِيهَا خَالِدُونَ", meaning: "And you will abide therein eternally", explanation: "Eternal residence", verseRef: "43:71" },
        { term: "وَتِلْكَ الْجَنَّةُ الَّتِي أُورِثْتُمُوهَا بِمَا كُنتُمْ تَعْمَلُونَ", meaning: "And that is Paradise which you are made to inherit for what you used to do", explanation: "Paradise earned through deeds", verseRef: "43:72" },
        { term: "لَكُمْ فِيهَا فَاكِهَةٌ كَثِيرَةٌ مِّنْهَا تَأْكُلُونَ", meaning: "For you therein is much fruit from which you will eat", explanation: "Abundant fruits", verseRef: "43:73" }
      ]
    },

    criminalsInHell: {
      name: "Criminals in Hell",
      nameArabic: "المجرمون في النار",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "إِنَّ الْمُجْرِمِينَ فِي عَذَابِ جَهَنَّمَ خَالِدُونَ", meaning: "Indeed, the criminals will be in punishment of Hell, abiding eternally", explanation: "Eternal punishment for criminals", verseRef: "43:74" },
        { term: "لَا يُفَتَّرُ عَنْهُمْ", meaning: "It will not be lightened for them", explanation: "No respite from punishment", verseRef: "43:75" },
        { term: "وَهُمْ فِيهِ مُبْلِسُونَ", meaning: "And they will be in despair therein", explanation: "Complete hopelessness", verseRef: "43:75" },
        { term: "وَمَا ظَلَمْنَاهُمْ وَلَٰكِن كَانُوا هُمُ الظَّالِمِينَ", meaning: "And We did not wrong them, but they were the wrongdoers", explanation: "Self-inflicted through wrongdoing", verseRef: "43:76" },
        { term: "وَنَادَوْا يَا مَالِكُ لِيَقْضِ عَلَيْنَا رَبُّكَ", meaning: "And they will call: O Malik, let your Lord put an end to us", explanation: "Pleading for death to end suffering", verseRef: "43:77" },
        { term: "قَالَ إِنَّكُم مَّاكِثُونَ", meaning: "He will say: Indeed, you will remain", explanation: "Malik's response - no escape", verseRef: "43:77" },
        { term: "لَقَدْ جِئْنَاكُم بِالْحَقِّ", meaning: "We had certainly brought you the truth", explanation: "Truth was presented", verseRef: "43:78" },
        { term: "وَلَٰكِنَّ أَكْثَرَكُمْ لِلْحَقِّ كَارِهُونَ", meaning: "But most of you were averse to the truth", explanation: "Majority rejected truth", verseRef: "43:78" }
      ]
    },

    secretPlotsExposed: {
      name: "Secret Plots Exposed",
      nameArabic: "كشف المكائد السرية",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "أَمْ أَبْرَمُوا أَمْرًا فَإِنَّا مُبْرِمُونَ", meaning: "Or have they devised an affair? Then We are devising", explanation: "Allah's counter-plan", verseRef: "43:79" },
        { term: "أَمْ يَحْسَبُونَ أَنَّا لَا نَسْمَعُ سِرَّهُمْ وَنَجْوَاهُم", meaning: "Or do they think that We hear not their secrets and private conversations?", explanation: "Allah hears all", verseRef: "43:80" },
        { term: "بَلَىٰ وَرُسُلُنَا لَدَيْهِمْ يَكْتُبُونَ", meaning: "Yes, and Our messengers are with them recording", explanation: "Angels record everything", verseRef: "43:80" }
      ]
    },

    noChildForAllah: {
      name: "Allah Has No Child",
      nameArabic: "الله ليس له ولد",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "قُلْ إِن كَانَ لِلرَّحْمَٰنِ وَلَدٌ", meaning: "Say: If the Most Merciful had a son", explanation: "Hypothetical argument", verseRef: "43:81" },
        { term: "فَأَنَا أَوَّلُ الْعَابِدِينَ", meaning: "Then I would be the first of his worshippers", explanation: "Prophet would be first to worship if true", verseRef: "43:81" },
        { term: "سُبْحَانَ رَبِّ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Exalted is the Lord of the heavens and earth", explanation: "Allah transcends such claims", verseRef: "43:82" },
        { term: "رَبِّ الْعَرْشِ عَمَّا يَصِفُونَ", meaning: "Lord of the Throne, above what they describe", explanation: "Beyond their false descriptions", verseRef: "43:82" },
        { term: "فَذَرْهُمْ يَخُوضُوا وَيَلْعَبُوا", meaning: "So leave them to converse vainly and play", explanation: "Let them in their heedlessness", verseRef: "43:83" },
        { term: "حَتَّىٰ يُلَاقُوا يَوْمَهُمُ الَّذِي يُوعَدُونَ", meaning: "Until they meet their Day which they are promised", explanation: "Until Judgment Day arrives", verseRef: "43:83" }
      ]
    },

    allahsSovereignty: {
      name: "Allah's Universal Sovereignty",
      nameArabic: "ملكية الله الشاملة",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "وَهُوَ الَّذِي فِي السَّمَاءِ إِلَٰهٌ وَفِي الْأَرْضِ إِلَٰهٌ", meaning: "And He is God in the heaven and God on the earth", explanation: "Sole deity in heaven and earth", verseRef: "43:84" },
        { term: "وَهُوَ الْحَكِيمُ الْعَلِيمُ", meaning: "And He is the Wise, the Knowing", explanation: "Wisdom and knowledge combined", verseRef: "43:84" },
        { term: "وَتَبَارَكَ الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "And blessed is He to whom belongs the dominion of heavens and earth", explanation: "All dominion belongs to Allah", verseRef: "43:85" },
        { term: "وَمَا بَيْنَهُمَا", meaning: "And whatever is between them", explanation: "Everything in between included", verseRef: "43:85" },
        { term: "وَعِندَهُ عِلْمُ السَّاعَةِ", meaning: "And with Him is knowledge of the Hour", explanation: "Only Allah knows the Hour", verseRef: "43:85" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: "And to Him you will be returned", explanation: "Final return to Allah", verseRef: "43:85" },
        { term: "وَلَا يَمْلِكُ الَّذِينَ يَدْعُونَ مِن دُونِهِ الشَّفَاعَةَ", meaning: "And those they invoke besides Him do not possess intercession", explanation: "False gods cannot intercede", verseRef: "43:86" },
        { term: "إِلَّا مَن شَهِدَ بِالْحَقِّ وَهُمْ يَعْلَمُونَ", meaning: "Except those who testify to the truth and know", explanation: "Only truthful witnesses can intercede", verseRef: "43:86" },
        { term: "وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَهُمْ لَيَقُولُنَّ اللَّهُ", meaning: "And if you asked them who created them, they would say: Allah", explanation: "They acknowledge Creator yet worship others", verseRef: "43:87" },
        { term: "فَأَنَّىٰ يُؤْفَكُونَ", meaning: "So how are they deluded?", explanation: "Illogic of their polytheism", verseRef: "43:87" }
      ]
    },

    prophetsFrustration: {
      name: "Prophet's Concern for His People",
      nameArabic: "همّ النبي لقومه",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "وَقِيلِهِ يَا رَبِّ إِنَّ هَٰؤُلَاءِ قَوْمٌ لَّا يُؤْمِنُونَ", meaning: "And his saying: O my Lord, indeed these are a people who do not believe", explanation: "Prophet's complaint to Allah", verseRef: "43:88" },
        { term: "فَاصْفَحْ عَنْهُمْ", meaning: "So turn aside from them", explanation: "Command to overlook", verseRef: "43:89" },
        { term: "وَقُلْ سَلَامٌ", meaning: "And say: Peace", explanation: "Respond with peace", verseRef: "43:89" },
        { term: "فَسَوْفَ يَعْلَمُونَ", meaning: "For they are going to know", explanation: "Ultimate knowledge will come", verseRef: "43:89" }
      ]
    }
  },

  relationships: [
    { from: "زخرف (gold)", to: "متاع الدنيا", type: "symbol", description: "Gold represents temporary worldly enjoyment" },
    { from: "القرآن العربي", to: "أم الكتاب", type: "origin", description: "Arabic Quran originates from Preserved Tablet" },
    { from: "إبراهيم", to: "كلمة باقية", type: "legacy", description: "Ibrahim's lasting word of monotheism" },
    { from: "موسى", to: "فرعون", type: "opposition", description: "Prophet vs tyrant - truth vs arrogance" },
    { from: "عيسى", to: "عبد", type: "identity", description: "Isa's true identity as servant, not son" },
    { from: "ذكر الرحمن", to: "شيطان قرين", type: "consequence", description: "Turning away from Allah leads to satanic companionship" },
    { from: "الأخلاء في الدنيا", to: "أعداء يوم القيامة", type: "transformation", description: "Worldly friends become enemies except the righteous" },
    { from: "صحاف من ذهب في الجنة", to: "زخرف الدنيا", type: "contrast", description: "True gold in Paradise vs deceptive worldly gold" },
    { from: "آباء", to: "أمة", type: "blind-following", description: "Following ancestors without thought" },
    { from: "المتقين", to: "خالدون في الجنة", type: "reward", description: "God-conscious inherit Paradise" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran's Origin and Arabic Nature", verses: "43:1-8", description: "Ha-Mim, Quran in Arabic from Mother of Book, prophets mocked" },
      { stage: 2, theme: "Signs in Creation", verses: "43:9-14", description: "Earth, rain, transportation - blessings requiring gratitude" },
      { stage: 3, theme: "Angels as Daughters Refuted", verses: "43:15-22", description: "False claim about angels, following ancestors blindly" },
      { stage: 4, theme: "Ibrahim's Monotheistic Legacy", verses: "43:26-28", description: "Ibrahim's disavowal of idols, lasting word for descendants" },
      { stage: 5, theme: "Rejection of Muhammad", verses: "43:29-35", description: "Quraysh's objections, gold/ornaments devalued" },
      { stage: 6, theme: "Satan as Companion", verses: "43:36-45", description: "Turning from Allah leads to satanic companionship" },
      { stage: 7, theme: "Musa and Pharaoh", verses: "43:46-56", description: "Signs mocked, Pharaoh's arrogance, drowning" },
      { stage: 8, theme: "Isa as Servant", verses: "43:57-65", description: "Isa is servant not son, his clear teaching" },
      { stage: 9, theme: "Day of Judgment", verses: "43:66-78", description: "Friends become enemies, Paradise for righteous, Hell for criminals" },
      { stage: 10, theme: "Allah's Sovereignty", verses: "43:79-89", description: "No child, universal Lord, Prophet's concern, peace" }
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
    title: "The Surah of True vs False Gold",
    insight: "Surah Az-Zukhruf derives its name from 'gold ornaments' (43:35), but its message is that gold/worldly luxury is worthless compared to divine guidance. The surah presents a powerful paradox: Allah could give disbelievers silver roofs, gold stairways, and luxurious furnishings - but all of it is merely 'enjoyment of worldly life' (متاع الحياة الدنيا). Meanwhile, the true gold - plates of gold (صحاف من ذهب, 43:71) - awaits believers in Paradise. The surah brilliantly connects three prophetic narratives: Ibrahim who established the lasting word of tawhid, Musa who faced Pharaoh's gold-obsessed arrogance (Pharaoh mocked Musa for not having gold bracelets, 43:53), and Isa who is a servant (عبد) despite those who elevated him to sonship. Each narrative dismantles false measures of worth - ancestral tradition, royal power, and divine sonship - and establishes the only true measure: servitude to Allah alone."
  },

  historicalContext: {
    note: "This Makki surah was revealed during intense opposition in Mecca when the Quraysh elite rejected Muhammad for not being a 'great man from the two cities' (Mecca or Taif). They expected prophethood to come with gold bracelets and angelic escorts - the same standard Pharaoh applied to Musa. The surah systematically dismantles their criteria: true worth is not measured by gold, lineage, or worldly status, but by relationship with Allah. The travel supplication (43:13-14) remains one of the most practiced Sunnah supplications to this day."
  },

  linguisticFeatures: {
    features: [
      { feature: "زُخْرُفًا", example: "Gold ornaments/gilding", effect: "Word implies both beauty and deception - ornamental but superficial" },
      { feature: "قَرِينٌ", example: "Companion", effect: "Intimate term for constant satanic presence - worse than temporary association" },
      { feature: "بُعْدَ الْمَشْرِقَيْنِ", example: "Distance of two easts", effect: "Maximum conceivable distance - east of east" },
      { feature: "مَهِينٌ", example: "Insignificant/contemptible", effect: "Pharaoh's dismissive term for Musa - ironic given outcome" },
      { feature: "أُمَّةٍ", example: "Religion/way", effect: "Same word for 'nation' and 'religion' - ancestors' religion becomes national identity" },
      { feature: "حم", example: "Ha-Mim", effect: "Part of 7 Ha-Mim surahs (40-46) - mysterious opening letters" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "43:11", topic: "Rain and resurrection", note: "Analogy of dead land revived by rain parallels bodily resurrection" },
      { verse: "43:12", topic: "Pairs in creation", note: "Reference to male-female pairs across species" },
      { verse: "43:10", topic: "Pathways on earth", note: "Natural valleys and passes facilitating travel" }
    ]
  }
};

export default ONTOLOGY;
