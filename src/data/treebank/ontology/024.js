/**
 * Surah An-Nur (24) - Ontology of Quranic Concepts
 * The Light - 64 Ayahs, Medinan
 *
 * Theme: Social ethics, modesty, household laws, and divine light
 * Famous for: Ayat an-Nur (Light Verse), laws of modesty, slander incident
 *
 * Major Sections:
 * 1. Laws against adultery and slander (1-26)
 * 2. Household etiquette and privacy (27-34)
 * 3. The Light Verse - Ayat an-Nur (35-40)
 * 4. Signs in creation (41-46)
 * 5. Obedience to Allah and Messenger (47-57)
 * 6. Privacy rules and permissions (58-64)
 */

export const ONTOLOGY = {
  surahId: 24,
  surahName: "An-Nur",
  surahNameArabic: "النور",
  revelationType: "Madani",
  totalAyahs: 64,

  categories: {
    legalPunishments: {
      name: "Legal Punishments (Hudud)",
      nameArabic: "الحدود",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "الزَّانِيَةُ وَالزَّانِي", meaning: "The adulteress and adulterer", explanation: "Opening declaration on fornication", verseRef: "24:2" },
        { term: "فَاجْلِدُوا كُلَّ وَاحِدٍ مِّنْهُمَا مِائَةَ جَلْدَةٍ", meaning: "Lash each one of them a hundred lashes", explanation: "Prescribed punishment for proven adultery", verseRef: "24:2" },
        { term: "لَا تَأْخُذْكُم بِهِمَا رَأْفَةٌ فِي دِينِ اللَّهِ", meaning: "Let not compassion overtake you in Allah's religion", explanation: "Justice must not be compromised", verseRef: "24:2" },
        { term: "الزَّانِي لَا يَنكِحُ إِلَّا زَانِيَةً", meaning: "Adulterer marries not except adulteress", explanation: "Social consequence of such behavior", verseRef: "24:3" }
      ]
    },

    slanderLaws: {
      name: "Laws Against Slander (Qadhf)",
      nameArabic: "حد القذف",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "وَالَّذِينَ يَرْمُونَ الْمُحْصَنَاتِ", meaning: "Those who accuse chaste women", explanation: "Beginning of slander legislation", verseRef: "24:4" },
        { term: "ثُمَّ لَمْ يَأْتُوا بِأَرْبَعَةِ شُهَدَاءَ", meaning: "Then do not bring four witnesses", explanation: "Extremely high burden of proof required", verseRef: "24:4" },
        { term: "فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً", meaning: "Lash them eighty lashes", explanation: "Punishment for false accusation", verseRef: "24:4" },
        { term: "وَلَا تَقْبَلُوا لَهُمْ شَهَادَةً أَبَدًا", meaning: "And never accept their testimony", explanation: "Permanent loss of credibility", verseRef: "24:4" },
        { term: "وَأُولَٰئِكَ هُمُ الْفَاسِقُونَ", meaning: "And those are the defiantly disobedient", explanation: "False accusers labeled as transgressors", verseRef: "24:4" }
      ]
    },

    liaan: {
      name: "Li'an (Spousal Accusation)",
      nameArabic: "اللعان",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "وَالَّذِينَ يَرْمُونَ أَزْوَاجَهُمْ", meaning: "Those who accuse their wives", explanation: "Special case for spousal accusation", verseRef: "24:6" },
        { term: "أَرْبَعُ شَهَادَاتٍ بِاللَّهِ", meaning: "Four testimonies by Allah", explanation: "Husband swears four times", verseRef: "24:6" },
        { term: "إِنَّهُ لَمِنَ الصَّادِقِينَ", meaning: "That he is of the truthful", explanation: "Oath affirming truthfulness", verseRef: "24:6" },
        { term: "وَالْخَامِسَةُ أَنَّ لَعْنَتَ اللَّهِ عَلَيْهِ", meaning: "And the fifth: Allah's curse on him", explanation: "Fifth oath invoking curse if lying", verseRef: "24:7" },
        { term: "وَيَدْرَأُ عَنْهَا الْعَذَابَ", meaning: "And it will ward off punishment from her", explanation: "Wife can defend herself similarly", verseRef: "24:8" }
      ]
    },

    ifkIncident: {
      name: "The Slander Incident (Al-Ifk)",
      nameArabic: "حادثة الإفك",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "إِنَّ الَّذِينَ جَاءُوا بِالْإِفْكِ", meaning: "Those who brought the slander", explanation: "Introduction to false accusation against Aisha", verseRef: "24:11" },
        { term: "عُصْبَةٌ مِّنكُمْ", meaning: "A group among you", explanation: "Some Muslims participated in spreading lies", verseRef: "24:11" },
        { term: "لَا تَحْسَبُوهُ شَرًّا لَّكُم بَلْ هُوَ خَيْرٌ لَّكُمْ", meaning: "Do not think it bad for you; rather it is good for you", explanation: "Trial became purification and legislation", verseRef: "24:11" },
        { term: "لَوْلَا إِذْ سَمِعْتُمُوهُ ظَنَّ الْمُؤْمِنُونَ", meaning: "Why, when you heard it, did not the believers assume good?", explanation: "Proper response should have been good assumption", verseRef: "24:12" },
        { term: "إِذْ تَلَقَّوْنَهُ بِأَلْسِنَتِكُمْ", meaning: "When you received it with your tongues", explanation: "Spreading without verification", verseRef: "24:15" },
        { term: "هَٰذَا بُهْتَانٌ عَظِيمٌ", meaning: "This is a great slander", explanation: "Should have recognized its enormity", verseRef: "24:16" },
        { term: "يَعِظُكُمُ اللَّهُ أَن تَعُودُوا لِمِثْلِهِ أَبَدًا", meaning: "Allah warns you never to repeat the like", explanation: "Prohibition against future slander", verseRef: "24:17" }
      ]
    },

    vindication: {
      name: "Vindication of the Innocent",
      nameArabic: "براءة العفيفات",
      color: "#22C55E",
      icon: "Shield",
      concepts: [
        { term: "وَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ", meaning: "And if not for Allah's favor and mercy upon you", explanation: "Divine protection from greater harm", verseRef: "24:20" },
        { term: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ", meaning: "O believers, do not follow Satan's footsteps", explanation: "Gossip is satanic path", verseRef: "24:21" },
        { term: "الْخَبِيثَاتُ لِلْخَبِيثِينَ", meaning: "Impure women for impure men", explanation: "People naturally match their type", verseRef: "24:26" },
        { term: "وَالطَّيِّبَاتُ لِلطَّيِّبِينَ", meaning: "Good women for good men", explanation: "Pure attract pure", verseRef: "24:26" },
        { term: "أُولَٰئِكَ مُبَرَّءُونَ مِمَّا يَقُولُونَ", meaning: "Those are cleared of what they say", explanation: "Complete exoneration of the accused", verseRef: "24:26" }
      ]
    },

    householdEtiquette: {
      name: "Household Etiquette (Adab)",
      nameArabic: "آداب البيوت",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ", meaning: "Do not enter houses other than your own", explanation: "Privacy and permission required", verseRef: "24:27" },
        { term: "حَتَّىٰ تَسْتَأْنِسُوا", meaning: "Until you ascertain welcome", explanation: "Ensure hosts are ready", verseRef: "24:27" },
        { term: "وَتُسَلِّمُوا عَلَىٰ أَهْلِهَا", meaning: "And greet its people", explanation: "Proper greeting protocol", verseRef: "24:27" },
        { term: "فَإِن لَّمْ تَجِدُوا فِيهَا أَحَدًا فَلَا تَدْخُلُوهَا", meaning: "If you find no one, do not enter", explanation: "Empty house rule", verseRef: "24:28" },
        { term: "وَإِن قِيلَ لَكُمُ ارْجِعُوا فَارْجِعُوا", meaning: "And if told to return, then return", explanation: "Accept refusal graciously", verseRef: "24:28" },
        { term: "لَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَدْخُلُوا بُيُوتًا غَيْرَ مَسْكُونَةٍ", meaning: "No blame for entering uninhabited buildings", explanation: "Public spaces exempt", verseRef: "24:29" }
      ]
    },

    modestyLaws: {
      name: "Modesty Laws (Hijab)",
      nameArabic: "أحكام الحجاب",
      color: "#EC4899",
      icon: "Eye",
      concepts: [
        { term: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ", meaning: "Tell believing men to lower their gaze", explanation: "Men's modesty begins with eyes", verseRef: "24:30" },
        { term: "وَيَحْفَظُوا فُرُوجَهُمْ", meaning: "And guard their private parts", explanation: "Physical chastity", verseRef: "24:30" },
        { term: "ذَٰلِكَ أَزْكَىٰ لَهُمْ", meaning: "That is purer for them", explanation: "Spiritual benefit of modesty", verseRef: "24:30" },
        { term: "وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ", meaning: "And tell believing women to lower their gaze", explanation: "Women's modesty also begins with eyes", verseRef: "24:31" },
        { term: "وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا مَا ظَهَرَ مِنْهَا", meaning: "And not display their adornment except what appears", explanation: "General concealment with exceptions", verseRef: "24:31" },
        { term: "وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ", meaning: "And let them draw their veils over their chests", explanation: "Covering the chest area", verseRef: "24:31" },
        { term: "وَلَا يَضْرِبْنَ بِأَرْجُلِهِنَّ لِيُعْلَمَ مَا يُخْفِينَ", meaning: "And not stamp feet to make known hidden adornment", explanation: "Even sounds of hidden jewelry", verseRef: "24:31" }
      ]
    },

    exemptRelatives: {
      name: "Exempt Relatives (Mahram)",
      nameArabic: "المحارم",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "بُعُولَتِهِنَّ", meaning: "Their husbands", explanation: "First category of exemption", verseRef: "24:31" },
        { term: "آبَائِهِنَّ أَوْ آبَاءِ بُعُولَتِهِنَّ", meaning: "Their fathers or husbands' fathers", explanation: "Fathers and fathers-in-law", verseRef: "24:31" },
        { term: "أَبْنَائِهِنَّ أَوْ أَبْنَاءِ بُعُولَتِهِنَّ", meaning: "Their sons or husbands' sons", explanation: "Sons and stepsons", verseRef: "24:31" },
        { term: "إِخْوَانِهِنَّ أَوْ بَنِي إِخْوَانِهِنَّ", meaning: "Their brothers or brothers' sons", explanation: "Brothers and nephews", verseRef: "24:31" },
        { term: "أَوْ نِسَائِهِنَّ", meaning: "Or their women", explanation: "Muslim women", verseRef: "24:31" },
        { term: "أَوِ الطِّفْلِ الَّذِينَ لَمْ يَظْهَرُوا عَلَىٰ عَوْرَاتِ النِّسَاءِ", meaning: "Or children unaware of women's private aspects", explanation: "Young children exempt", verseRef: "24:31" }
      ]
    },

    marriageEncouragement: {
      name: "Encouragement of Marriage",
      nameArabic: "الحث على الزواج",
      color: "#EC4899",
      icon: "Heart",
      concepts: [
        { term: "وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ", meaning: "And marry the unmarried among you", explanation: "Social duty to facilitate marriage", verseRef: "24:32" },
        { term: "وَالصَّالِحِينَ مِنْ عِبَادِكُمْ وَإِمَائِكُمْ", meaning: "And the righteous among your servants", explanation: "Include servants in marriage", verseRef: "24:32" },
        { term: "إِن يَكُونُوا فُقَرَاءَ يُغْنِهِمُ اللَّهُ مِن فَضْلِهِ", meaning: "If poor, Allah will enrich from His bounty", explanation: "Poverty not excuse to avoid marriage", verseRef: "24:32" },
        { term: "وَلْيَسْتَعْفِفِ الَّذِينَ لَا يَجِدُونَ نِكَاحًا", meaning: "Let those who cannot marry practice restraint", explanation: "Chastity until marriage possible", verseRef: "24:33" }
      ]
    },

    ayatAnNur: {
      name: "The Light Verse (Ayat an-Nur)",
      nameArabic: "آية النور",
      color: "#F59E0B",
      icon: "Sun",
      concepts: [
        { term: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Allah is the Light of heavens and earth", explanation: "Central declaration of divine light", verseRef: "24:35" },
        { term: "مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ", meaning: "His light is like a niche with a lamp", explanation: "Beginning of the famous parable", verseRef: "24:35" },
        { term: "الْمِصْبَاحُ فِي زُجَاجَةٍ", meaning: "The lamp in a glass", explanation: "Glass intensifies light", verseRef: "24:35" },
        { term: "الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ", meaning: "The glass like a brilliant star", explanation: "Radiant luminosity", verseRef: "24:35" },
        { term: "يُوقَدُ مِن شَجَرَةٍ مُّبَارَكَةٍ زَيْتُونَةٍ", meaning: "Lit from a blessed olive tree", explanation: "Pure fuel source", verseRef: "24:35" },
        { term: "لَّا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ", meaning: "Neither eastern nor western", explanation: "Perfect balance, receives full sun", verseRef: "24:35" },
        { term: "يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ", meaning: "Its oil would glow even without fire", explanation: "Inherent radiance", verseRef: "24:35" },
        { term: "نُّورٌ عَلَىٰ نُورٍ", meaning: "Light upon light", explanation: "Layers of divine illumination", verseRef: "24:35" },
        { term: "يَهْدِي اللَّهُ لِنُورِهِ مَن يَشَاءُ", meaning: "Allah guides to His light whom He wills", explanation: "Guidance as divine selection", verseRef: "24:35" },
        { term: "وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ", meaning: "Allah sets forth parables for people", explanation: "Teaching through metaphor", verseRef: "24:35" }
      ]
    },

    housesOfWorship: {
      name: "Houses of Worship",
      nameArabic: "بيوت العبادة",
      color: "#8B5CF6",
      icon: "Star",
      concepts: [
        { term: "فِي بُيُوتٍ أَذِنَ اللَّهُ أَن تُرْفَعَ", meaning: "In houses Allah has permitted to be raised", explanation: "Mosques elevated in status", verseRef: "24:36" },
        { term: "وَيُذْكَرَ فِيهَا اسْمُهُ", meaning: "And His name mentioned therein", explanation: "Purpose of mosques", verseRef: "24:36" },
        { term: "يُسَبِّحُ لَهُ فِيهَا بِالْغُدُوِّ وَالْآصَالِ", meaning: "Glorifying Him morning and evening", explanation: "Continuous worship", verseRef: "24:36" },
        { term: "رِجَالٌ لَّا تُلْهِيهِمْ تِجَارَةٌ وَلَا بَيْعٌ", meaning: "Men whom neither trade nor sale distracts", explanation: "Prioritizing worship over business", verseRef: "24:37" },
        { term: "عَن ذِكْرِ اللَّهِ وَإِقَامِ الصَّلَاةِ", meaning: "From remembrance of Allah and prayer", explanation: "Focus remains on devotion", verseRef: "24:37" }
      ]
    },

    disbelieversState: {
      name: "State of Disbelievers",
      nameArabic: "حال الكافرين",
      color: "#EF4444",
      icon: "Moon",
      concepts: [
        { term: "وَالَّذِينَ كَفَرُوا أَعْمَالُهُمْ كَسَرَابٍ بِقِيعَةٍ", meaning: "Disbelievers' deeds like a mirage in desert", explanation: "Illusory nature of their works", verseRef: "24:39" },
        { term: "يَحْسَبُهُ الظَّمْآنُ مَاءً", meaning: "The thirsty thinks it water", explanation: "False hope", verseRef: "24:39" },
        { term: "حَتَّىٰ إِذَا جَاءَهُ لَمْ يَجِدْهُ شَيْئًا", meaning: "Until when he reaches it, he finds nothing", explanation: "Ultimate disappointment", verseRef: "24:39" },
        { term: "وَوَجَدَ اللَّهَ عِندَهُ فَوَفَّاهُ حِسَابَهُ", meaning: "And found Allah there who paid his account", explanation: "Unexpected reckoning", verseRef: "24:39" },
        { term: "أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُّجِّيٍّ", meaning: "Or like darkness in a deep sea", explanation: "Second parable of disbelief", verseRef: "24:40" },
        { term: "يَغْشَاهُ مَوْجٌ مِّن فَوْقِهِ مَوْجٌ", meaning: "Covered by waves upon waves", explanation: "Layers of darkness", verseRef: "24:40" },
        { term: "ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ", meaning: "Darkness, some above others", explanation: "Compounded confusion", verseRef: "24:40" },
        { term: "وَمَن لَّمْ يَجْعَلِ اللَّهُ لَهُ نُورًا فَمَا لَهُ مِن نُّورٍ", meaning: "Whom Allah gives no light has no light", explanation: "Divine light is essential", verseRef: "24:40" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "أَلَمْ تَرَ أَنَّ اللَّهَ يُسَبِّحُ لَهُ مَن فِي السَّمَاوَاتِ", meaning: "Do you not see that Allah is glorified by all in heavens", explanation: "Universal worship", verseRef: "24:41" },
        { term: "وَالطَّيْرُ صَافَّاتٍ", meaning: "And the birds with wings spread", explanation: "Birds glorify in flight", verseRef: "24:41" },
        { term: "كُلٌّ قَدْ عَلِمَ صَلَاتَهُ وَتَسْبِيحَهُ", meaning: "Each knows its prayer and praise", explanation: "Innate worship", verseRef: "24:41" },
        { term: "وَاللَّهُ يُقَلِّبُ اللَّيْلَ وَالنَّهَارَ", meaning: "Allah alternates night and day", explanation: "Cosmic rhythm", verseRef: "24:44" },
        { term: "وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِّن مَّاءٍ", meaning: "Allah created every creature from water", explanation: "Water origin of life", verseRef: "24:45" }
      ]
    },

    obedienceCommand: {
      name: "Obedience to Allah and Messenger",
      nameArabic: "طاعة الله والرسول",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "وَأَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ", meaning: "Obey Allah and obey the Messenger", explanation: "Dual obedience required", verseRef: "24:54" },
        { term: "فَإِن تَوَلَّوْا فَإِنَّمَا عَلَيْهِ مَا حُمِّلَ", meaning: "If you turn away, upon him is only his duty", explanation: "Messenger's responsibility is delivery", verseRef: "24:54" },
        { term: "وَعَلَيْكُم مَّا حُمِّلْتُمْ", meaning: "And upon you is what you are charged with", explanation: "Your responsibility is obedience", verseRef: "24:54" },
        { term: "إِنَّمَا كَانَ قَوْلَ الْمُؤْمِنِينَ... أَن يَقُولُوا سَمِعْنَا وَأَطَعْنَا", meaning: "Believers say 'We hear and obey'", explanation: "True believer's response", verseRef: "24:51" }
      ]
    },

    promiseToRighteous: {
      name: "Promise to the Righteous",
      nameArabic: "وعد المؤمنين",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَعَمِلُوا الصَّالِحَاتِ", meaning: "Allah has promised those who believe and do good", explanation: "Divine promise to believers", verseRef: "24:55" },
        { term: "لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ", meaning: "He will make them successors on earth", explanation: "Promise of leadership", verseRef: "24:55" },
        { term: "كَمَا اسْتَخْلَفَ الَّذِينَ مِن قَبْلِهِمْ", meaning: "As He made successors those before them", explanation: "Historical precedent", verseRef: "24:55" },
        { term: "وَلَيُمَكِّنَنَّ لَهُمْ دِينَهُمُ", meaning: "And establish for them their religion", explanation: "Religious authority", verseRef: "24:55" },
        { term: "وَلَيُبَدِّلَنَّهُم مِّن بَعْدِ خَوْفِهِمْ أَمْنًا", meaning: "And replace their fear with security", explanation: "Peace after struggle", verseRef: "24:55" }
      ]
    },

    privacyRules: {
      name: "Privacy Within Household",
      nameArabic: "آداب الاستئذان",
      color: "#10B981",
      icon: "Eye",
      concepts: [
        { term: "لِيَسْتَأْذِنكُمُ الَّذِينَ مَلَكَتْ أَيْمَانُكُمْ", meaning: "Let those your right hands possess ask permission", explanation: "Servants must seek permission", verseRef: "24:58" },
        { term: "وَالَّذِينَ لَمْ يَبْلُغُوا الْحُلُمَ مِنكُمْ", meaning: "And those who have not reached puberty", explanation: "Children's etiquette", verseRef: "24:58" },
        { term: "ثَلَاثَ مَرَّاتٍ", meaning: "Three times", explanation: "Three private times daily", verseRef: "24:58" },
        { term: "مِّن قَبْلِ صَلَاةِ الْفَجْرِ", meaning: "Before dawn prayer", explanation: "Early morning privacy", verseRef: "24:58" },
        { term: "وَحِينَ تَضَعُونَ ثِيَابَكُم مِّنَ الظَّهِيرَةِ", meaning: "When you put aside clothing at noon", explanation: "Afternoon rest time", verseRef: "24:58" },
        { term: "وَمِن بَعْدِ صَلَاةِ الْعِشَاءِ", meaning: "After night prayer", explanation: "Nighttime privacy", verseRef: "24:58" },
        { term: "ثَلَاثُ عَوْرَاتٍ لَّكُمْ", meaning: "Three times of privacy for you", explanation: "Natural private moments", verseRef: "24:58" }
      ]
    },

    elderlyWomenExemption: {
      name: "Elderly Women's Exemption",
      nameArabic: "رخصة القواعد",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَالْقَوَاعِدُ مِنَ النِّسَاءِ", meaning: "Women past childbearing", explanation: "Elderly women category", verseRef: "24:60" },
        { term: "اللَّاتِي لَا يَرْجُونَ نِكَاحًا", meaning: "Who have no hope of marriage", explanation: "No longer marriage candidates", verseRef: "24:60" },
        { term: "فَلَيْسَ عَلَيْهِنَّ جُنَاحٌ أَن يَضَعْنَ ثِيَابَهُنَّ", meaning: "No blame to put aside outer garments", explanation: "Relaxed covering rules", verseRef: "24:60" },
        { term: "غَيْرَ مُتَبَرِّجَاتٍ بِزِينَةٍ", meaning: "Not displaying adornment", explanation: "Still not displaying beauty", verseRef: "24:60" },
        { term: "وَأَن يَسْتَعْفِفْنَ خَيْرٌ لَّهُنَّ", meaning: "But to remain modest is better for them", explanation: "Full modesty still preferred", verseRef: "24:60" }
      ]
    },

    socialDining: {
      name: "Social Dining Rules",
      nameArabic: "آداب الطعام",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "لَيْسَ عَلَى الْأَعْمَىٰ حَرَجٌ", meaning: "No blame on the blind", explanation: "Exemption for disabled", verseRef: "24:61" },
        { term: "وَلَا عَلَى الْأَعْرَجِ حَرَجٌ", meaning: "Nor on the lame", explanation: "Physical limitations accommodated", verseRef: "24:61" },
        { term: "وَلَا عَلَى الْمَرِيضِ حَرَجٌ", meaning: "Nor on the sick", explanation: "Illness exemption", verseRef: "24:61" },
        { term: "وَلَا عَلَىٰ أَنفُسِكُمْ أَن تَأْكُلُوا مِن بُيُوتِكُمْ", meaning: "Nor on yourselves to eat from your homes", explanation: "Eating at family homes", verseRef: "24:61" },
        { term: "أَوْ بُيُوتِ آبَائِكُمْ أَوْ بُيُوتِ أُمَّهَاتِكُمْ", meaning: "Or homes of fathers or mothers", explanation: "Parent's homes", verseRef: "24:61" },
        { term: "أَشْتَاتًا أَوْ جَمِيعًا", meaning: "Separately or together", explanation: "No restriction on eating alone or together", verseRef: "24:61" },
        { term: "فَإِذَا دَخَلْتُم بُيُوتًا فَسَلِّمُوا", meaning: "When you enter houses, greet", explanation: "Proper greeting", verseRef: "24:61" },
        { term: "تَحِيَّةً مِّنْ عِندِ اللَّهِ مُبَارَكَةً طَيِّبَةً", meaning: "A greeting from Allah, blessed and good", explanation: "Salam as divine blessing", verseRef: "24:61" }
      ]
    },

    properConduct: {
      name: "Proper Conduct with Prophet",
      nameArabic: "آداب مع الرسول",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ آمَنُوا بِاللَّهِ وَرَسُولِهِ", meaning: "Believers are those who believe in Allah and His Messenger", explanation: "Definition of believers", verseRef: "24:62" },
        { term: "وَإِذَا كَانُوا مَعَهُ عَلَىٰ أَمْرٍ جَامِعٍ", meaning: "When with him on collective matter", explanation: "Congregational affairs", verseRef: "24:62" },
        { term: "لَمْ يَذْهَبُوا حَتَّىٰ يَسْتَأْذِنُوهُ", meaning: "Do not leave until seeking his permission", explanation: "Respecting Prophet's leadership", verseRef: "24:62" },
        { term: "لَّا تَجْعَلُوا دُعَاءَ الرَّسُولِ بَيْنَكُمْ كَدُعَاءِ بَعْضِكُم بَعْضًا", meaning: "Do not make calling the Messenger like calling each other", explanation: "Elevated respect for Prophet", verseRef: "24:63" },
        { term: "فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ", meaning: "Let those who oppose his command beware", explanation: "Warning against disobedience", verseRef: "24:63" },
        { term: "أَن تُصِيبَهُمْ فِتْنَةٌ أَوْ يُصِيبَهُمْ عَذَابٌ أَلِيمٌ", meaning: "That trial or painful punishment strikes them", explanation: "Consequence of disobedience", verseRef: "24:63" }
      ]
    }
  },

  relationships: [
    { from: "الزنا", to: "القذف", type: "sequence", description: "Adultery laws followed by slander laws" },
    { from: "الإفك", to: "براءة العفيفات", type: "cause-effect", description: "Slander incident led to vindication" },
    { from: "غض البصر", to: "حفظ الفروج", type: "progression", description: "Lowering gaze leads to chastity" },
    { from: "نور الله", to: "ظلمات الكفر", type: "contrast", description: "Divine light vs. disbeliever's darkness" },
    { from: "المشكاة", to: "النور", type: "metaphor", description: "Niche-lamp-glass metaphor for divine light" },
    { from: "السراب", to: "الظلمات", type: "parallel", description: "Two parables for disbelief" },
    { from: "الاستخلاف", to: "الإيمان والعمل", type: "condition", description: "Succession conditioned on faith and deeds" },
    { from: "العورات الثلاث", to: "الأدب المنزلي", type: "application", description: "Privacy times as household etiquette" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Legal Punishments", verses: "24:1-10", description: "Laws for adultery, slander, li'an" },
      { stage: 2, theme: "The Ifk Incident", verses: "24:11-20", description: "Slander against Aisha and its lessons" },
      { stage: 3, theme: "Moral Cleansing", verses: "24:21-26", description: "Satan's footsteps, vindication of the innocent" },
      { stage: 4, theme: "Household Etiquette", verses: "24:27-29", description: "Permission and privacy rules" },
      { stage: 5, theme: "Modesty Laws", verses: "24:30-34", description: "Lowering gaze, covering, marriage encouragement" },
      { stage: 6, theme: "The Light Verse", verses: "24:35-40", description: "Divine light vs. darkness of disbelief" },
      { stage: 7, theme: "Universal Worship", verses: "24:41-46", description: "All creation glorifies Allah" },
      { stage: 8, theme: "True Believers", verses: "24:47-54", description: "Characteristics of hypocrites vs. believers" },
      { stage: 9, theme: "Divine Promise", verses: "24:55-57", description: "Succession for righteous believers" },
      { stage: 10, theme: "Privacy Completion", verses: "24:58-64", description: "Detailed privacy rules, dining, conduct" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Protect honor", how: "Never spread unverified accusations", verse: "24:12" },
      { principle: "Assume good", how: "When hearing accusations, think positively of believers", verse: "24:12" },
      { principle: "Seek permission", how: "Always announce before entering others' spaces", verse: "24:27" },
      { principle: "Lower gaze", how: "First step to chastity - control where you look", verse: "24:30" },
      { principle: "Facilitate marriage", how: "Help unmarried people find spouses", verse: "24:32" },
      { principle: "Seek light", how: "Follow Allah's guidance - without it there is only darkness", verse: "24:40" },
      { principle: "Prioritize worship", how: "Don't let business distract from prayer", verse: "24:37" },
      { principle: "Respect privacy times", how: "Observe three private times in household", verse: "24:58" },
      { principle: "Say 'We hear and obey'", how: "True believer's response to divine commands", verse: "24:51" }
    ]
  },

  uniqueInsight: {
    title: "The Light of Morality",
    insight: "Surah An-Nur is uniquely structured around the theme of 'light' - both physical and spiritual. The surah begins with laws protecting honor and chastity (social light), moves to the famous Light Verse describing Allah as the source of all illumination, then contrasts this with the darkness of disbelief (mirage and deep sea parables). The message is profound: a morally upright society reflects divine light, while moral corruption leads to spiritual darkness. The Ifk incident (slander against Aisha) serves as a historical lesson - even the Prophet's household was tested, and the divine response established permanent laws. The detailed rules about household privacy, modesty, and social interaction are not restrictions but protections for this light. As verse 24:40 states: 'Whoever Allah gives no light has no light' - showing that divine guidance is essential for moral clarity. Umar ibn al-Khattab reportedly said: 'Learn Surah An-Nur and teach it to your women' - recognizing its comprehensive guidance for family and social life."
  },

  historicalContext: {
    note: "This Madani surah was revealed after the slander incident (Ifk) against Aisha (RA) during the campaign against Banu Mustaliq (5-6 AH). The Prophet's wife was falsely accused by hypocrites and some Muslims, causing immense distress for a month until these verses vindicated her. This crisis became the occasion for comprehensive legislation on: (1) punishment for adultery and false accusation, (2) the li'an procedure for spousal accusations, (3) household privacy, (4) modesty for both genders, and (5) social etiquette. The Light Verse (35) has been extensively discussed by scholars and Sufis as describing divine illumination in the believer's heart. The surah's placement after Al-Mu'minun (about believers' characteristics) and before Al-Furqan (about the criterion) emphasizes moral clarity as essential to faith."
  },

  linguisticFeatures: {
    features: [
      { feature: "النُّور", example: "Light", effect: "Central theme - divine guidance and moral clarity" },
      { feature: "الإفك", example: "The Lie/Slander", effect: "Emphasizes severity - not just a lie, but a deliberate fabrication" },
      { feature: "مِشْكَاة", example: "Niche", effect: "Unique word - lamp niche that focuses light" },
      { feature: "كَوْكَب دُرِّيّ", example: "Brilliant star", effect: "Intensified radiance - from درّ (pearl)" },
      { feature: "سَرَاب بِقِيعَة", example: "Mirage in desert", effect: "Perfect metaphor - appears real but is nothing" },
      { feature: "بَحْر لُّجِّيّ", example: "Deep sea", effect: "Layered darkness - waves upon waves" },
      { feature: "يَسْتَأْنِسُوا", example: "Ascertain welcome", effect: "More than permission - ensure comfort" },
      { feature: "خُمُرهنّ", example: "Their veils", effect: "Plural of خمار - head covering" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "24:35", topic: "Light parable", note: "Glass intensifying light, olive oil's purity - precision in metaphor" },
      { verse: "24:40", topic: "Deep sea darkness", note: "Describes layers of darkness in ocean - light penetration decreases with depth" },
      { verse: "24:43", topic: "Cloud formation", note: "Describes cloud buildup, merging, and rain - meteorological accuracy" },
      { verse: "24:44", topic: "Day-night alternation", note: "Earth's rotation causing alternation" },
      { verse: "24:45", topic: "Water origin of life", note: "All creatures from water - biological consensus" }
    ]
  },

  namesOfSurah: {
    names: [
      { name: "An-Nur", meaning: "The Light", reason: "Contains the famous Light Verse (24:35)" },
      { name: "Surah of Modesty", meaning: "Chapter of Chastity", reason: "Extensive modesty and privacy laws" }
    ]
  },

  virtue: {
    hadith: "Umar ibn al-Khattab (RA) said: 'Learn Surah Al-Baqarah and Surah An-Nur, and teach them to your women.' This indicates the special importance of An-Nur for family and social guidance."
  }
};

export default ONTOLOGY;
