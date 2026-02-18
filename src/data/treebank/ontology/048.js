/**
 * Surah Al-Fath (The Victory) - Surah 48
 * Ontology of Quranic Concepts and Relationships
 *
 * Theme: The Treaty of Hudaybiyyah, Bay'at ar-Ridwan, Prophet's vision fulfilled
 * Revelation: Medinan (revealed on return from Hudaybiyyah, 6 AH)
 * Ayahs: 29
 *
 * This surah was revealed after the Treaty of Hudaybiyyah, which appeared to be
 * a setback but was actually a manifest victory (فَتْحًا مُّبِينًا).
 */

export const ONTOLOGY = {
  surahId: 48,
  surahName: "Al-Fath",
  surahNameArabic: "الفتح",
  totalAyahs: 29,
  revelationType: "Medinan",
  revelationContext: "Revealed on the return journey from Hudaybiyyah in 6 AH. Umar initially questioned the treaty, asking: 'Aren't we on the truth?' The Prophet affirmed yes, but this surah revealed that what seemed like concession was actually a manifest victory that would lead to the conquest of Makkah.",
  mainTheme: "The Treaty of Hudaybiyyah as Divine Victory, Bay'at ar-Ridwan under the tree, forgiveness of sins, and the Prophet's vision fulfilled",

  categories: {
    // 1. THE MANIFEST VICTORY
    manifestVictory: {
      name: "The Manifest Victory",
      nameAr: "الفتح المبين",
      color: '#F59E0B',
      icon: 'Crown',
      description: "The Treaty of Hudaybiyyah - appearing as setback but revealed as clear victory",
      concepts: [
        { term: "Al-Fath al-Mubeen", arabic: "فَتْحًا مُّبِينًا", meaning: "A manifest victory", ayahs: [1] },
        { term: "Forgiveness of Past and Future", arabic: "مَا تَقَدَّمَ وَمَا تَأَخَّرَ", meaning: "Forgiveness of all sins", ayahs: [2] },
        { term: "Completing Favor", arabic: "وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ", meaning: "Completing Allah's favor upon the Prophet", ayahs: [2] },
        { term: "Straight Path", arabic: "صِرَاطًا مُّسْتَقِيمًا", meaning: "Guiding to a straight path", ayahs: [2] },
        { term: "Mighty Help", arabic: "نَصْرًا عَزِيزًا", meaning: "Helping with a mighty help", ayahs: [3] }
      ]
    },

    // 2. DIVINE TRANQUILITY
    sakinah: {
      name: "Divine Tranquility (Sakinah)",
      nameAr: "السكينة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      description: "The special tranquility sent down upon believers' hearts",
      concepts: [
        { term: "Sakinah in Hearts", arabic: "أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ", meaning: "Tranquility sent into believers' hearts", ayahs: [4] },
        { term: "Increase in Faith", arabic: "لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ", meaning: "To increase them in faith upon faith", ayahs: [4] },
        { term: "Armies of Heaven and Earth", arabic: "جُنُودُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "Allah's forces in heavens and earth", ayahs: [4, 7] },
        { term: "All-Knowing, All-Wise", arabic: "عَلِيمًا حَكِيمًا", meaning: "Allah is All-Knowing, All-Wise", ayahs: [4] },
        { term: "Sakinah at Hudaybiyyah", arabic: "السَّكِينَةَ عَلَيْهِ", meaning: "Tranquility sent upon them under the tree", ayahs: [18, 26] }
      ]
    },

    // 3. BAY'AT AR-RIDWAN
    bayatRidwan: {
      name: "Bay'at ar-Ridwan (Pledge of Pleasure)",
      nameAr: "بيعة الرضوان",
      color: '#10B981',
      icon: 'Heart',
      description: "The historic pledge under the tree at Hudaybiyyah",
      concepts: [
        { term: "Pledge Under the Tree", arabic: "يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ", meaning: "Those who pledged under the tree", ayahs: [18] },
        { term: "Allah's Pleasure", arabic: "رَضِيَ اللَّهُ عَنْهُمْ", meaning: "Allah was pleased with them", ayahs: [18] },
        { term: "Hand of Allah", arabic: "يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ", meaning: "Allah's hand was above their hands", ayahs: [10] },
        { term: "Pledging to the Prophet", arabic: "يُبَايِعُونَكَ", meaning: "Those who pledge to you (Prophet)", ayahs: [10] },
        { term: "Pledging to Allah", arabic: "إِنَّمَا يُبَايِعُونَ اللَّهَ", meaning: "They only pledge to Allah", ayahs: [10] },
        { term: "Near Victory", arabic: "فَتْحًا قَرِيبًا", meaning: "A near victory (Conquest of Makkah)", ayahs: [18] },
        { term: "Abundant Spoils", arabic: "مَغَانِمَ كَثِيرَةً", meaning: "Many spoils to come", ayahs: [19, 20] }
      ]
    },

    // 4. REWARDS FOR BELIEVERS
    believersRewards: {
      name: "Rewards for True Believers",
      nameAr: "جزاء المؤمنين",
      color: '#8B5CF6',
      icon: 'Sparkles',
      description: "Paradise and eternal rewards promised to believers",
      concepts: [
        { term: "Gardens Under Rivers", arabic: "جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", meaning: "Gardens with flowing rivers", ayahs: [5, 17] },
        { term: "Eternal Dwelling", arabic: "خَالِدِينَ فِيهَا", meaning: "Dwelling therein forever", ayahs: [5] },
        { term: "Great Success", arabic: "الْفَوْزُ الْعَظِيمُ", meaning: "The supreme achievement", ayahs: [5] },
        { term: "Sins Expiated", arabic: "يُكَفِّرَ عَنْهُمْ سَيِّئَاتِهِمْ", meaning: "Evil deeds removed", ayahs: [5] },
        { term: "Forgiveness and Reward", arabic: "مَّغْفِرَةً وَأَجْرًا عَظِيمًا", meaning: "Forgiveness and great reward", ayahs: [29] }
      ]
    },

    // 5. HYPOCRITES AND DOUBTERS
    munafiqunAndDoubters: {
      name: "Hypocrites and Doubters",
      nameAr: "المنافقون والمرجفون",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "Those who doubted and harbored evil suspicions",
      concepts: [
        { term: "Hypocrite Men and Women", arabic: "الْمُنَافِقِينَ وَالْمُنَافِقَاتِ", meaning: "Male and female hypocrites punished", ayahs: [6] },
        { term: "Mushrik Men and Women", arabic: "الْمُشْرِكِينَ وَالْمُشْرِكَاتِ", meaning: "Male and female polytheists punished", ayahs: [6] },
        { term: "Evil Suspicion", arabic: "ظَنَّ السَّوْءِ", meaning: "Those who think evil thoughts about Allah", ayahs: [6] },
        { term: "Circle of Evil", arabic: "دَائِرَةُ السَّوْءِ", meaning: "Upon them is the evil turn of fortune", ayahs: [6] },
        { term: "Allah's Wrath", arabic: "غَضِبَ اللَّهُ عَلَيْهِمْ", meaning: "Allah's anger upon them", ayahs: [6] },
        { term: "Curse and Hellfire", arabic: "وَلَعَنَهُمْ وَأَعَدَّ لَهُمْ جَهَنَّمَ", meaning: "Cursed and prepared Hellfire for them", ayahs: [6] }
      ]
    },

    // 6. BEDOUINS WHO STAYED BEHIND
    bedouinsLeft: {
      name: "Bedouins Who Stayed Behind",
      nameAr: "المخلفون من الأعراب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "Desert Arabs who made excuses and didn't join at Hudaybiyyah",
      concepts: [
        { term: "Those Left Behind", arabic: "الْمُخَلَّفُونَ مِنَ الْأَعْرَابِ", meaning: "Bedouins who stayed behind", ayahs: [11, 15, 16] },
        { term: "False Excuses", arabic: "شَغَلَتْنَا أَمْوَالُنَا وَأَهْلُونَا", meaning: "Our wealth and families kept us busy", ayahs: [11] },
        { term: "Saying with Tongues", arabic: "يَقُولُونَ بِأَلْسِنَتِهِم", meaning: "They say with tongues what is not in hearts", ayahs: [11] },
        { term: "Evil Thought", arabic: "ظَنَنتُمْ ظَنَّ السَّوْءِ", meaning: "You harbored evil thoughts", ayahs: [12] },
        { term: "Doomed People", arabic: "قَوْمًا بُورًا", meaning: "A people ruined/doomed", ayahs: [12] },
        { term: "Test of Sincerity", arabic: "قُل لِّلْمُخَلَّفِينَ", meaning: "Say to those left behind - future test awaits", ayahs: [16] },
        { term: "Fighting People", arabic: "قَوْمٍ أُولِي بَأْسٍ شَدِيدٍ", meaning: "A people of great military might", ayahs: [16] }
      ]
    },

    // 7. TREATY OF HUDAYBIYYAH
    treatyHudaybiyyah: {
      name: "Treaty of Hudaybiyyah",
      nameAr: "صلح الحديبية",
      color: '#3B82F6',
      icon: 'Book',
      description: "The historic peace treaty that was actually a victory",
      concepts: [
        { term: "Restraining Hands", arabic: "كَفَّ أَيْدِيَهُمْ عَنكُمْ", meaning: "He restrained their hands from you", ayahs: [24] },
        { term: "Restraining Your Hands", arabic: "وَأَيْدِيَكُمْ عَنْهُم", meaning: "And your hands from them", ayahs: [24] },
        { term: "Valley of Makkah", arabic: "بِبَطْنِ مَكَّةَ", meaning: "In the valley of Makkah", ayahs: [24] },
        { term: "Allah's Observation", arabic: "وَكَانَ اللَّهُ بِمَا تَعْمَلُونَ بَصِيرًا", meaning: "Allah sees all that you do", ayahs: [24] },
        { term: "Those Who Disbelieved", arabic: "هُمُ الَّذِينَ كَفَرُوا", meaning: "They are the ones who disbelieved", ayahs: [25] },
        { term: "Prevented from Sacred Mosque", arabic: "وَصَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ", meaning: "And barred you from the Sacred Mosque", ayahs: [25] },
        { term: "Detained Offering", arabic: "وَالْهَدْيَ مَعْكُوفًا", meaning: "And the sacrificial animals detained", ayahs: [25] }
      ]
    },

    // 8. PROTECTION OF BELIEVERS IN MAKKAH
    protectionBelievers: {
      name: "Protection of Hidden Believers",
      nameAr: "حماية المؤمنين المختفين",
      color: '#10B981',
      icon: 'Users',
      description: "Secret Muslims in Makkah who needed protection",
      concepts: [
        { term: "Believing Men Unknown", arabic: "رِجَالٌ مُّؤْمِنُونَ", meaning: "Believing men you did not know", ayahs: [25] },
        { term: "Believing Women Unknown", arabic: "وَنِسَاءٌ مُّؤْمِنَاتٌ", meaning: "Believing women you did not know", ayahs: [25] },
        { term: "Trampling Them", arabic: "أَن تَطَئُوهُمْ", meaning: "That you might trample them unknowingly", ayahs: [25] },
        { term: "Guilt Upon You", arabic: "فَتُصِيبَكُم مِّنْهُم مَّعَرَّةٌ", meaning: "And incur guilt from harming them", ayahs: [25] },
        { term: "Mercy for Believers", arabic: "لِّيُدْخِلَ اللَّهُ فِي رَحْمَتِهِ", meaning: "That Allah may admit into His mercy", ayahs: [25] }
      ]
    },

    // 9. JAHILIYYAH VS ISLAM
    jahiliyyahVsIslam: {
      name: "Jahiliyyah Pride vs Islamic Tranquility",
      nameAr: "حمية الجاهلية مقابل السكينة",
      color: '#EF4444',
      icon: 'Shield',
      description: "Contrast between pre-Islamic arrogance and Islamic serenity",
      concepts: [
        { term: "Fury of Jahiliyyah", arabic: "حَمِيَّةَ الْجَاهِلِيَّةِ", meaning: "The tribal fury of ignorance", ayahs: [26] },
        { term: "Disbelievers' Hearts", arabic: "فِي قُلُوبِهِمُ الْحَمِيَّةَ", meaning: "Arrogance in disbelievers' hearts", ayahs: [26] },
        { term: "Allah's Sakinah", arabic: "فَأَنزَلَ اللَّهُ سَكِينَتَهُ", meaning: "Allah sent His tranquility", ayahs: [26] },
        { term: "Word of Taqwa", arabic: "كَلِمَةَ التَّقْوَىٰ", meaning: "The word of piety (La ilaha illallah)", ayahs: [26] },
        { term: "Most Deserving", arabic: "أَحَقَّ بِهَا وَأَهْلَهَا", meaning: "They were most worthy of it", ayahs: [26] }
      ]
    },

    // 10. PROPHET'S VISION FULFILLED
    visionFulfilled: {
      name: "The Prophet's Vision Fulfilled",
      nameAr: "تحقق رؤيا النبي",
      color: '#F59E0B',
      icon: 'Star',
      description: "The true dream of entering Makkah came true",
      concepts: [
        { term: "True Vision", arabic: "لَقَدْ صَدَقَ اللَّهُ رَسُولَهُ الرُّؤْيَا", meaning: "Allah fulfilled His Messenger's vision", ayahs: [27] },
        { term: "Entering Sacred Mosque", arabic: "لَتَدْخُلُنَّ الْمَسْجِدَ الْحَرَامَ", meaning: "You shall enter the Sacred Mosque", ayahs: [27] },
        { term: "In Safety", arabic: "إِن شَاءَ اللَّهُ آمِنِينَ", meaning: "In safety, if Allah wills", ayahs: [27] },
        { term: "Heads Shaved", arabic: "مُحَلِّقِينَ رُءُوسَكُمْ", meaning: "Heads shaved (completing Umrah)", ayahs: [27] },
        { term: "Hair Shortened", arabic: "وَمُقَصِّرِينَ", meaning: "Or hair shortened", ayahs: [27] },
        { term: "No Fear", arabic: "لَا تَخَافُونَ", meaning: "Fearing not", ayahs: [27] },
        { term: "Near Victory", arabic: "فَجَعَلَ مِن دُونِ ذَٰلِكَ فَتْحًا قَرِيبًا", meaning: "He arranged before that a near victory", ayahs: [27] }
      ]
    },

    // 11. ISLAM'S TRIUMPH
    islamTriumph: {
      name: "Islam Over All Religions",
      nameAr: "ظهور الإسلام",
      color: '#F59E0B',
      icon: 'Crown',
      description: "Islam sent to prevail over all other religions",
      concepts: [
        { term: "Sent His Messenger", arabic: "أَرْسَلَ رَسُولَهُ", meaning: "He sent His Messenger", ayahs: [28] },
        { term: "With Guidance", arabic: "بِالْهُدَىٰ", meaning: "With guidance", ayahs: [28] },
        { term: "Religion of Truth", arabic: "وَدِينِ الْحَقِّ", meaning: "And the religion of truth", ayahs: [28] },
        { term: "Prevail Over All", arabic: "لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ", meaning: "To make it prevail over all religion", ayahs: [28] },
        { term: "Allah as Witness", arabic: "وَكَفَىٰ بِاللَّهِ شَهِيدًا", meaning: "And sufficient is Allah as witness", ayahs: [28] }
      ]
    },

    // 12. DESCRIPTION OF COMPANIONS
    companionsDescription: {
      name: "Description of the Companions",
      nameAr: "صفة الصحابة",
      color: '#10B981',
      icon: 'Users',
      description: "The beautiful description of the Prophet and his companions",
      concepts: [
        { term: "Muhammad Messenger", arabic: "مُّحَمَّدٌ رَّسُولُ اللَّهِ", meaning: "Muhammad is the Messenger of Allah", ayahs: [29] },
        { term: "Stern Against Disbelievers", arabic: "أَشِدَّاءُ عَلَى الْكُفَّارِ", meaning: "Stern/severe against disbelievers", ayahs: [29] },
        { term: "Merciful Among Themselves", arabic: "رُحَمَاءُ بَيْنَهُمْ", meaning: "Merciful among themselves", ayahs: [29] },
        { term: "Bowing and Prostrating", arabic: "رُكَّعًا سُجَّدًا", meaning: "You see them bowing, prostrating", ayahs: [29] },
        { term: "Seeking Bounty", arabic: "يَبْتَغُونَ فَضْلًا مِّنَ اللَّهِ", meaning: "Seeking bounty and pleasure from Allah", ayahs: [29] },
        { term: "Mark of Prostration", arabic: "سِيمَاهُمْ فِي وُجُوهِهِم مِّنْ أَثَرِ السُّجُودِ", meaning: "Their mark is on faces from prostration", ayahs: [29] },
        { term: "Likeness in Torah", arabic: "ذَٰلِكَ مَثَلُهُمْ فِي التَّوْرَاةِ", meaning: "That is their description in Torah", ayahs: [29] },
        { term: "Likeness in Gospel", arabic: "وَمَثَلُهُمْ فِي الْإِنجِيلِ", meaning: "And their description in Gospel", ayahs: [29] },
        { term: "Like Planted Seed", arabic: "كَزَرْعٍ أَخْرَجَ شَطْأَهُ", meaning: "Like a seed that sprouts its shoot", ayahs: [29] },
        { term: "Strengthened and Firm", arabic: "فَآزَرَهُ فَاسْتَغْلَظَ فَاسْتَوَىٰ عَلَىٰ سُوقِهِ", meaning: "Strengthened it until thick on its stem", ayahs: [29] },
        { term: "Delighting the Sowers", arabic: "يُعْجِبُ الزُّرَّاعَ", meaning: "Pleasing to the sowers", ayahs: [29] },
        { term: "Enraging Disbelievers", arabic: "لِيَغِيظَ بِهِمُ الْكُفَّارَ", meaning: "Through them He enrages disbelievers", ayahs: [29] }
      ]
    },

    // 13. BREAKING PLEDGE
    breakingPledge: {
      name: "Consequences of Breaking Pledge",
      nameAr: "نقض العهد",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "Warning against breaking the pledge to Allah",
      concepts: [
        { term: "Whoever Breaks Pledge", arabic: "فَمَن نَّكَثَ", meaning: "Whoever breaks the pledge", ayahs: [10] },
        { term: "Against Himself", arabic: "فَإِنَّمَا يَنكُثُ عَلَىٰ نَفْسِهِ", meaning: "Only breaks it against himself", ayahs: [10] },
        { term: "Whoever Fulfills", arabic: "وَمَنْ أَوْفَىٰ", meaning: "And whoever fulfills", ayahs: [10] },
        { term: "Great Reward", arabic: "فَسَيُؤْتِيهِ أَجْرًا عَظِيمًا", meaning: "Will receive a great reward", ayahs: [10] }
      ]
    },

    // 14. DIVINE DOMINION
    divineDominion: {
      name: "Allah's Complete Dominion",
      nameAr: "ملك الله المطلق",
      color: '#F59E0B',
      icon: 'Crown',
      description: "Allah's ownership and control of all things",
      concepts: [
        { term: "Kingdom of Heavens and Earth", arabic: "مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: "To Allah belongs dominion of heavens and earth", ayahs: [14] },
        { term: "Forgives Whom He Wills", arabic: "يَغْفِرُ لِمَن يَشَاءُ", meaning: "He forgives whom He wills", ayahs: [14] },
        { term: "Punishes Whom He Wills", arabic: "وَيُعَذِّبُ مَن يَشَاءُ", meaning: "He punishes whom He wills", ayahs: [14] },
        { term: "Ever Forgiving, Merciful", arabic: "غَفُورًا رَّحِيمًا", meaning: "Allah is Forgiving, Merciful", ayahs: [14] }
      ]
    },

    // 15. OBEDIENCE TO ALLAH AND MESSENGER
    obedienceRequired: {
      name: "Obedience to Allah and Messenger",
      nameAr: "طاعة الله والرسول",
      color: '#3B82F6',
      icon: 'Compass',
      description: "Command to follow Allah and His Messenger",
      concepts: [
        { term: "Obey Allah and Messenger", arabic: "يُطِعِ اللَّهَ وَرَسُولَهُ", meaning: "Whoever obeys Allah and His Messenger", ayahs: [17] },
        { term: "No Blame on Disabled", arabic: "لَّيْسَ عَلَى الْأَعْمَىٰ حَرَجٌ", meaning: "No blame on the blind", ayahs: [17] },
        { term: "No Blame on Lame", arabic: "وَلَا عَلَى الْأَعْرَجِ حَرَجٌ", meaning: "No blame on the lame", ayahs: [17] },
        { term: "No Blame on Sick", arabic: "وَلَا عَلَى الْمَرِيضِ حَرَجٌ", meaning: "No blame on the sick", ayahs: [17] }
      ]
    }
  },

  relationships: [
    { from: "Bay'at ar-Ridwan", to: "Allah's Pleasure", type: "result", description: "The pledge under the tree earned Allah's pleasure for the Companions" },
    { from: "Treaty of Hudaybiyyah", to: "Manifest Victory", type: "identity", description: "What appeared as political defeat was actually the promised victory" },
    { from: "Prophet's Vision", to: "Conquest of Makkah", type: "fulfillment", description: "The dream of entering Sacred Mosque was fulfilled in Conquest" },
    { from: "Sakinah", to: "Increase in Faith", type: "effect", description: "Divine tranquility strengthened believers' faith" },
    { from: "Jahiliyyah Pride", to: "Islamic Tranquility", type: "contrast", description: "Quraysh's arrogance met by believers' serene confidence" },
    { from: "Bedouins' Excuses", to: "Future Test", type: "consequence", description: "Those who made excuses will be tested with stronger foes" },
    { from: "Breaking Pledge", to: "Self-Harm", type: "consequence", description: "Breaking covenant only harms the one who breaks it" },
    { from: "Hidden Believers", to: "Prevention of War", type: "cause", description: "Secret Muslims in Makkah prevented all-out war" },
    { from: "Companions Description", to: "Torah and Gospel", type: "prophecy", description: "Companions' qualities were foretold in previous scriptures" },
    { from: "Islam", to: "Prevailing Over All", type: "destiny", description: "Islam will dominate all other ideologies" },
    { from: "Stern Against Disbelievers", to: "Merciful Among Themselves", type: "balance", description: "Companions balanced firmness externally with mercy internally" },
    { from: "Pledge to Prophet", to: "Pledge to Allah", type: "equivalence", description: "Pledging allegiance to Prophet equals pledging to Allah" }
  ],

  thematicFlow: {
    title: "From Apparent Setback to Manifest Victory",
    stages: [
      { name: "Declaration of Victory", ayahs: [1, 2, 3], description: "Opening announcement: This is a manifest victory, forgiveness granted, help given" },
      { name: "Divine Tranquility", ayahs: [4, 5], description: "Sakinah sent to believers, Paradise promised" },
      { name: "Punishment for Doubters", ayahs: [6], description: "Hypocrites and polytheists who harbored evil thoughts" },
      { name: "Divine Sovereignty", ayahs: [7, 8, 9], description: "Allah's forces, Prophet sent as witness, warner, giver of glad tidings" },
      { name: "The Sacred Pledge", ayahs: [10], description: "Bay'ah to Prophet is bay'ah to Allah; consequences of breaking/keeping" },
      { name: "Bedouins' Excuses", ayahs: [11, 12, 13], description: "Those who stayed behind with false excuses, their doom" },
      { name: "Divine Dominion", ayahs: [14, 15], description: "Allah's complete authority to forgive or punish" },
      { name: "Future Test", ayahs: [16, 17], description: "Call to fight stronger enemy; exemptions for disabled" },
      { name: "Bay'at ar-Ridwan", ayahs: [18, 19, 20, 21], description: "Allah's pleasure, near victory, spoils promised" },
      { name: "Victory Assured", ayahs: [22, 23], description: "Had battle occurred, enemies would have fled; Allah's unchanging way" },
      { name: "Treaty Explained", ayahs: [24, 25, 26], description: "Restraining hands, protecting hidden believers, Jahiliyyah vs. Sakinah" },
      { name: "Vision Fulfilled", ayahs: [27], description: "Prophet's dream of entering Sacred Mosque confirmed true" },
      { name: "Islam's Triumph", ayahs: [28], description: "Islam sent to prevail over all religion" },
      { name: "Description of Companions", ayahs: [29], description: "Beautiful portrait of Prophet and Companions, their qualities" }
    ]
  },

  uniqueInsight: {
    title: "Victory Through Apparent Defeat (الفتح في ما يبدو هزيمة)",
    insight: "When the Treaty of Hudaybiyyah was signed, many companions were distressed. They had come for Umrah but were turned back. The terms seemed unfavorable: Muslims would return that year, any Quraysh escaping to Medina would be returned, but not vice versa. Umar asked the Prophet: 'Are we not on the truth and they on falsehood?' Yet this surah revealed it as 'fath mubeen' - a manifest victory. Why? (1) It gave Islam official recognition as a state. (2) It allowed peaceful da'wah, and more converted in 2 years than in the previous 19. (3) It freed the Prophet to deal with other threats (Khaybar). (4) It led directly to the Conquest of Makkah when Quraysh violated the treaty. This teaches that divine strategy often appears counterintuitive. The believer's surrender to Allah's wisdom, even when logic protests, is itself the victory. The 'hand of Allah above their hands' at Bay'at ar-Ridwan symbolized this: human planning submitted to divine plan.",
    arabicTerm: "فَتْحًا مُّبِينًا",
    rootMeaning: "ف-ت-ح (to open) - Victory is an 'opening' of closed doors",
    keyAyah: 1
  },

  historicalContext: {
    revelationPeriod: "6 AH, on return journey from Hudaybiyyah",
    occasion: "The Prophet saw a dream that he and companions entered Makkah for Umrah. In Dhul-Qa'dah 6 AH, 1400+ companions set out in ihram. Quraysh blocked them at Hudaybiyyah. After negotiations, a 10-year peace treaty was signed with terms appearing unfavorable to Muslims. This surah was revealed declaring it a manifest victory.",
    keyEvents: [
      { name: "Prophet's Dream", description: "Vision of performing Umrah in Makkah" },
      { name: "Journey to Makkah", description: "1400 companions in ihram, unarmed" },
      { name: "Blocked at Hudaybiyyah", description: "Quraysh sent forces to prevent entry" },
      { name: "Bay'at ar-Ridwan", description: "Pledge of death/allegiance under the tree when rumors of Uthman's death spread" },
      { name: "Treaty Signed", description: "10-year peace with Quraysh" },
      { name: "Surah Revealed", description: "On return journey, declaring it victory" },
      { name: "Vision Fulfilled", description: "Next year (7 AH) Muslims performed Umrah; later Makkah conquered (8 AH)" }
    ],
    note: "Umar later said: 'I have never had doubt since I accepted Islam except on that day (Hudaybiyyah).' He sought good deeds as expiation for questioning the Prophet's decision. This surah vindicated the Prophet's wisdom."
  },

  linguisticFeatures: {
    features: [
      { name: "Opening with Victory", description: "إِنَّا فَتَحْنَا لَكَ", example: "Emphatic 'indeed We have opened/granted you' - decisive announcement", ayah: 1 },
      { name: "Purpose Clauses", description: "لِيَغْفِرَ لَكَ... وَيُتِمَّ... وَيَهْدِيَكَ... وَيَنصُرَكَ", example: "Four purposes of victory: forgiveness, completion, guidance, help", ayah: 2 },
      { name: "Hand of Allah Metaphor", description: "يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ", example: "Powerful image of divine presence in human pledge", ayah: 10 },
      { name: "Agricultural Simile", description: "كَزَرْعٍ أَخْرَجَ شَطْأَهُ", example: "Companions compared to growing, strengthening seed/plant", ayah: 29 },
      { name: "Contrasting Pairs", description: "أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ", example: "Stern/severe paired with merciful/compassionate", ayah: 29 },
      { name: "Dual Prophecy Reference", description: "فِي التَّوْرَاةِ... وَفِي الْإِنجِيلِ", example: "Companions described in both Torah and Gospel", ayah: 29 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 8, name: "Al-Anfal", relationship: "Both discuss battles and spoils; Badr and Hudaybiyyah are linked victories", type: "thematic_parallel" },
      { surah: 9, name: "At-Tawbah", relationship: "Both address hypocrites and Bedouins who stayed behind; both discuss pledges", type: "thematic_continuation" },
      { surah: 33, name: "Al-Ahzab", relationship: "Both mention tranquility (sakinah) sent down in times of crisis", type: "thematic_parallel" },
      { surah: 110, name: "An-Nasr", relationship: "Both about victory (fath/nasr) and Islam's triumph", type: "thematic_parallel" },
      { surah: 61, name: "As-Saff", relationship: "Both mention Islam prevailing over all religion (liYuzhirahu 'ala ad-deen)", type: "identical_phrase" },
      { surah: 3, name: "Aal Imran", relationship: "Both describe companions' qualities and steadfastness in adversity", type: "thematic_parallel" }
    ]
  },

  practicalApplications: {
    lessons: [
      { principle: "Trust Divine Wisdom", application: "When Allah's decree seems unfavorable, trust that He sees what we cannot", ayah: 1 },
      { principle: "Sakinah Through Surrender", application: "Inner peace comes from accepting Allah's plan, not from favorable circumstances", ayah: 4 },
      { principle: "Pledge is Sacred", application: "Commitments to Allah and His cause must never be broken", ayah: 10 },
      { principle: "No Excuses When Called", application: "When duty calls, worldly preoccupations are not valid excuses", ayah: 11 },
      { principle: "Balance Firmness and Mercy", application: "Be strong against falsehood but compassionate with fellow believers", ayah: 29 },
      { principle: "Actions Leave Marks", application: "True worship leaves visible traces on character and appearance", ayah: 29 }
    ]
  }
};

export default ONTOLOGY;
