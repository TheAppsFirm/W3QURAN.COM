/**
 * Quran Guidance Data
 * Maps life situations to relevant Quranic verses and guidance
 * Used by the AI Companion feature
 */

// Life situations with relevant verses and guidance
export const LIFE_GUIDANCE = {
  anxiety: {
    id: 'anxiety',
    name: 'Feeling Anxious',
    nameAr: 'القلق',
    icon: 'Cloud',
    color: '#EF4444',
    keywords: ['worried', 'anxious', 'stressed', 'nervous', 'fear', 'panic', 'overwhelmed', 'restless'],
    primaryVerses: [
      { surah: 94, ayah: 5, preview: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', translation: 'For indeed, with hardship [will be] ease.' },
      { surah: 94, ayah: 6, preview: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', translation: 'Indeed, with hardship [will be] ease.' },
      { surah: 65, ayah: 3, preview: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', translation: 'And whoever relies upon Allah - then He is sufficient for him.' },
      { surah: 3, ayah: 139, preview: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا', translation: 'Do not weaken and do not grieve.' },
    ],
    supportingVerses: [
      { surah: 13, ayah: 28 }, { surah: 2, ayah: 286 }, { surah: 39, ayah: 53 },
    ],
    reflection: 'Allah reminds us twice in Surah Ash-Sharh that with every hardship comes ease. This repetition emphasizes His promise. Your current struggle is temporary, and relief is near.',
    actionItems: [
      'Take a deep breath and recite "HasbunAllahu wa ni\'mal wakeel" (Allah is sufficient for us)',
      'Make wudu and pray 2 rakah for peace of heart',
      'Write down 3 blessings you have right now',
      'Remember: Allah does not burden a soul beyond what it can bear (2:286)',
    ],
    dua: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ',
    duaTranslation: 'O Allah, I seek refuge in You from worry and grief',
  },

  sadness: {
    id: 'sadness',
    name: 'Feeling Sad',
    nameAr: 'الحزن',
    icon: 'Cloud',
    color: '#6366F1',
    keywords: ['sad', 'depressed', 'down', 'unhappy', 'blue', 'sorrow', 'grief', 'hopeless'],
    primaryVerses: [
      { surah: 93, ayah: 3, preview: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ', translation: 'Your Lord has not taken leave of you, nor has He detested [you].' },
      { surah: 93, ayah: 4, preview: 'وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ', translation: 'And the Hereafter is better for you than the first [life].' },
      { surah: 12, ayah: 87, preview: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ', translation: 'And despair not of relief from Allah.' },
    ],
    supportingVerses: [
      { surah: 3, ayah: 139 }, { surah: 39, ayah: 53 }, { surah: 94, ayah: 5 },
    ],
    reflection: 'Surah Ad-Duha was revealed when the Prophet (PBUH) himself felt sad because revelation had paused. Allah comforted him with these beautiful words. Know that Allah has not forsaken you.',
    actionItems: [
      'Read Surah Ad-Duha and reflect on its meaning',
      'Connect with a trusted friend or family member',
      'Engage in dhikr - it brings tranquility to the heart',
      'Remember the story of Prophet Yaqub\'s patience in Surah Yusuf',
    ],
    dua: 'اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ',
    duaTranslation: 'O Allah, I hope for Your mercy. Do not leave me to myself even for the blink of an eye.',
  },

  gratitude: {
    id: 'gratitude',
    name: 'Feeling Grateful',
    nameAr: 'الشكر',
    icon: 'Star',
    color: '#10B981',
    keywords: ['grateful', 'thankful', 'blessed', 'appreciative', 'content', 'happy', 'joyful'],
    primaryVerses: [
      { surah: 14, ayah: 7, preview: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ', translation: 'If you are grateful, I will surely increase you [in favor].' },
      { surah: 55, ayah: 13, preview: 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ', translation: 'So which of the favors of your Lord would you deny?' },
      { surah: 2, ayah: 152, preview: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي', translation: 'So remember Me; I will remember you. And be grateful to Me.' },
    ],
    supportingVerses: [
      { surah: 31, ayah: 12 }, { surah: 16, ayah: 114 }, { surah: 34, ayah: 13 },
    ],
    reflection: 'Your gratitude is a beautiful act of worship. Allah promises to increase His blessings for those who are thankful. Let this feeling inspire you to share your blessings with others.',
    actionItems: [
      'Pray 2 rakah shukr (gratitude) prayer',
      'Write in a gratitude journal',
      'Share your blessings with someone in need',
      'Call a loved one to express appreciation',
    ],
    dua: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
    duaTranslation: 'O Allah, help me to remember You, to thank You, and to worship You well.',
  },

  confused: {
    id: 'confused',
    name: 'Seeking Guidance',
    nameAr: 'طلب الهداية',
    icon: 'Compass',
    color: '#8B5CF6',
    keywords: ['confused', 'lost', 'uncertain', 'decision', 'guidance', 'direction', 'unsure', 'choice'],
    primaryVerses: [
      { surah: 1, ayah: 6, preview: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guide us to the straight path.' },
      { surah: 2, ayah: 2, preview: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ', translation: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.' },
      { surah: 3, ayah: 159, preview: 'فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ', translation: 'And when you have decided, then rely upon Allah.' },
    ],
    supportingVerses: [
      { surah: 17, ayah: 80 }, { surah: 6, ayah: 161 }, { surah: 18, ayah: 10 },
    ],
    reflection: 'When facing decisions, remember that the Quran itself is guidance. Combine sincere dua, istikhara prayer, and wise counsel. Then trust in Allah\'s plan.',
    actionItems: [
      'Pray Salat al-Istikhara for guidance',
      'Consult with knowledgeable and trustworthy people',
      'List the pros and cons thoughtfully',
      'Make your best decision and trust Allah with the outcome',
    ],
    dua: 'اللَّهُمَّ خِرْ لِي وَاخْتَرْ لِي',
    duaTranslation: 'O Allah, choose for me and make the choice for me.',
  },

  anger: {
    id: 'anger',
    name: 'Feeling Angry',
    nameAr: 'الغضب',
    icon: 'Zap',
    color: '#F59E0B',
    keywords: ['angry', 'upset', 'frustrated', 'irritated', 'annoyed', 'furious', 'mad'],
    primaryVerses: [
      { surah: 3, ayah: 134, preview: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ', translation: 'Those who restrain anger and pardon the people - and Allah loves the doers of good.' },
      { surah: 41, ayah: 34, preview: 'ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ', translation: 'Repel evil with that which is better.' },
      { surah: 42, ayah: 37, preview: 'وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ', translation: 'And when they are angry, they forgive.' },
    ],
    supportingVerses: [
      { surah: 7, ayah: 199 }, { surah: 24, ayah: 22 }, { surah: 42, ayah: 40 },
    ],
    reflection: 'The Prophet (PBUH) said: "The strong person is not the one who can wrestle, but the one who controls himself when angry." Controlling anger is a sign of true strength.',
    actionItems: [
      'If standing, sit down. If sitting, lie down.',
      'Make wudu - water cools the anger',
      'Seek refuge from Shaytan: "A\'udhu billahi min ash-shaytanir rajeem"',
      'Stay silent until the anger passes',
    ],
    dua: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    duaTranslation: 'I seek refuge in Allah from the accursed Satan.',
  },

  financial: {
    id: 'financial',
    name: 'Financial Difficulty',
    nameAr: 'الضائقة المالية',
    icon: 'Target',
    color: '#22C55E',
    keywords: ['money', 'financial', 'broke', 'debt', 'poor', 'struggling', 'rizq', 'provision'],
    primaryVerses: [
      { surah: 65, ayah: 3, preview: 'وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ', translation: 'And He will provide for him from where he does not expect.' },
      { surah: 29, ayah: 60, preview: 'وَكَأَيِّن مِّن دَابَّةٍ لَّا تَحْمِلُ رِزْقَهَا اللَّهُ يَرْزُقُهَا', translation: 'And how many a creature carries not its own provision. Allah provides for it and for you.' },
      { surah: 11, ayah: 6, preview: 'وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا', translation: 'And there is no creature on earth but that upon Allah is its provision.' },
    ],
    supportingVerses: [
      { surah: 17, ayah: 30 }, { surah: 51, ayah: 58 }, { surah: 2, ayah: 268 },
    ],
    reflection: 'Your rizq (provision) is written by Allah. He provides from sources we cannot imagine. Focus on halal efforts, maintain tawakkul, and know that what is meant for you will never miss you.',
    actionItems: [
      'Increase istighfar - it opens doors of provision',
      'Give charity, even if small - it increases wealth',
      'Maintain ties with family for blessing in rizq',
      'Make dua at times when duas are accepted',
    ],
    dua: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
    duaTranslation: 'O Allah, suffice me with what You have permitted instead of what You have forbidden, and enrich me by Your grace from all others.',
  },

  relationship: {
    id: 'relationship',
    name: 'Relationship Issues',
    nameAr: 'مشاكل العلاقات',
    icon: 'Heart',
    color: '#EC4899',
    keywords: ['relationship', 'marriage', 'spouse', 'family', 'conflict', 'divorce', 'love', 'partner'],
    primaryVerses: [
      { surah: 30, ayah: 21, preview: 'وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً', translation: 'And He placed between you affection and mercy.' },
      { surah: 4, ayah: 19, preview: 'وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ', translation: 'And live with them in kindness.' },
      { surah: 49, ayah: 10, preview: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ', translation: 'The believers are but brothers, so make settlement between your brothers.' },
    ],
    supportingVerses: [
      { surah: 25, ayah: 74 }, { surah: 64, ayah: 14 }, { surah: 3, ayah: 159 },
    ],
    reflection: 'Allah placed love and mercy between spouses as a sign of His creation. Even in difficulty, approaching with gentleness and patience can transform relationships.',
    actionItems: [
      'Practice active listening without interrupting',
      'Speak with kindness, even when hurt',
      'Make dua for your spouse/family regularly',
      'Seek counsel from wise elders if needed',
    ],
    dua: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
    duaTranslation: 'Our Lord, grant us from our spouses and offspring comfort to our eyes.',
  },

  loss: {
    id: 'loss',
    name: 'Experiencing Loss',
    nameAr: 'فقدان',
    icon: 'Heart',
    color: '#6B7280',
    keywords: ['loss', 'death', 'grief', 'mourning', 'bereavement', 'passed away', 'died'],
    primaryVerses: [
      { surah: 2, ayah: 156, preview: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ', translation: 'Indeed we belong to Allah, and indeed to Him we will return.' },
      { surah: 2, ayah: 155, preview: 'وَبَشِّرِ الصَّابِرِينَ', translation: 'And give good tidings to the patient.' },
      { surah: 39, ayah: 42, preview: 'اللَّهُ يَتَوَفَّى الْأَنفُسَ حِينَ مَوْتِهَا', translation: 'Allah takes the souls at the time of their death.' },
    ],
    supportingVerses: [
      { surah: 3, ayah: 185 }, { surah: 29, ayah: 57 }, { surah: 21, ayah: 35 },
    ],
    reflection: 'Every soul will taste death. The Prophet (PBUH) himself lost beloved ones. Your grief is valid. Allow yourself to feel, while holding onto the hope of reunion in Jannah.',
    actionItems: [
      'Recite "Inna lillahi wa inna ilayhi raji\'un"',
      'Make dua for the deceased',
      'Give charity on their behalf',
      'Allow yourself to grieve - it is natural',
    ],
    dua: 'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ',
    duaTranslation: 'O Allah, forgive them and have mercy upon them, keep them safe and pardon them.',
  },

  health: {
    id: 'health',
    name: 'Health Concerns',
    nameAr: 'الصحة',
    icon: 'Heart',
    color: '#EF4444',
    keywords: ['sick', 'illness', 'health', 'disease', 'pain', 'suffering', 'hospital', 'unwell'],
    primaryVerses: [
      { surah: 26, ayah: 80, preview: 'وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ', translation: 'And when I am ill, it is He who cures me.' },
      { surah: 17, ayah: 82, preview: 'وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ', translation: 'And We send down of the Quran that which is healing.' },
      { surah: 10, ayah: 57, preview: 'وَشِفَاءٌ لِّمَا فِي الصُّدُورِ', translation: 'And healing for what is in the breasts.' },
    ],
    supportingVerses: [
      { surah: 41, ayah: 44 }, { surah: 16, ayah: 69 }, { surah: 21, ayah: 83 },
    ],
    reflection: 'Ibrahim (AS) acknowledged that it is Allah alone who heals. Illness can expiate sins and raise ranks in Jannah. The Prophet (PBUH) said no Muslim is afflicted with harm but that Allah will remove sins like leaves falling from a tree.',
    actionItems: [
      'Recite Surah Al-Fatiha and the last 3 surahs for healing',
      'Make wudu and pray for recovery',
      'Seek proper medical treatment - it is part of tawakkul',
      'Maintain patience and good thoughts about Allah',
    ],
    dua: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ اشْفِهِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ',
    duaTranslation: 'O Allah, Lord of mankind, remove the affliction. Heal, for You are the Healer. There is no healing except Your healing.',
  },

  forgiveness: {
    id: 'forgiveness',
    name: 'Seeking Forgiveness',
    nameAr: 'طلب المغفرة',
    icon: 'Refresh',
    color: '#8B5CF6',
    keywords: ['sin', 'forgiveness', 'repent', 'mistake', 'guilty', 'regret', 'tawbah', 'sorry'],
    primaryVerses: [
      { surah: 39, ayah: 53, preview: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا', translation: 'Do not despair of the mercy of Allah. Indeed, Allah forgives all sins.' },
      { surah: 25, ayah: 70, preview: 'يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ', translation: 'Allah will replace their evil deeds with good.' },
      { surah: 4, ayah: 110, preview: 'ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا', translation: 'Then seeks forgiveness of Allah, he will find Allah Forgiving and Merciful.' },
    ],
    supportingVerses: [
      { surah: 3, ayah: 135 }, { surah: 66, ayah: 8 }, { surah: 11, ayah: 114 },
    ],
    reflection: 'Allah\'s mercy encompasses everything. No sin is too great for His forgiveness when met with sincere repentance. The door of tawbah is always open.',
    actionItems: [
      'Make sincere tawbah with regret and resolve not to repeat',
      'Perform wudu and pray 2 rakah of repentance',
      'Increase istighfar throughout the day',
      'Replace bad deeds with good deeds',
    ],
    dua: 'أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    duaTranslation: 'I seek forgiveness from Allah, besides Whom there is none worthy of worship, the Ever-Living, Self-Subsisting, and I repent to Him.',
  },

  hope: {
    id: 'hope',
    name: 'Need Hope',
    nameAr: 'الأمل',
    icon: 'Sun',
    color: '#F59E0B',
    keywords: ['hopeless', 'despair', 'give up', 'tired', 'exhausted', 'broken', 'lost hope'],
    primaryVerses: [
      { surah: 12, ayah: 87, preview: 'إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ', translation: 'Indeed, no one despairs of relief from Allah except the disbelieving people.' },
      { surah: 39, ayah: 53, preview: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', translation: 'Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah.' },
      { surah: 93, ayah: 5, preview: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ', translation: 'And your Lord is going to give you, and you will be satisfied.' },
    ],
    supportingVerses: [
      { surah: 94, ayah: 5 }, { surah: 2, ayah: 214 }, { surah: 3, ayah: 139 },
    ],
    reflection: 'Yaqub (AS) never lost hope of finding Yusuf (AS), even after decades. Allah\'s help comes when you least expect it. Hold onto hope - it is a form of worship.',
    actionItems: [
      'Read the story of Prophet Yusuf in Surah 12',
      'List times when Allah helped you in the past',
      'Connect with people who uplift you',
      'Remember: "With hardship comes ease" is a promise from Allah',
    ],
    dua: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ',
    duaTranslation: 'O Ever-Living, O Self-Sustaining, by Your mercy I seek help.',
  },

  strength: {
    id: 'strength',
    name: 'Need Strength',
    nameAr: 'القوة',
    icon: 'Award',
    color: '#3B82F6',
    keywords: ['weak', 'strength', 'courage', 'brave', 'strong', 'power', 'capability'],
    primaryVerses: [
      { surah: 8, ayah: 46, preview: 'وَاصْبِرُوا إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', translation: 'And be patient. Indeed, Allah is with the patient.' },
      { surah: 3, ayah: 139, preview: 'وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ', translation: 'And you will be superior if you are [true] believers.' },
      { surah: 2, ayah: 286, preview: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا', translation: 'Allah does not burden a soul beyond its capacity.' },
    ],
    supportingVerses: [
      { surah: 47, ayah: 7 }, { surah: 3, ayah: 160 }, { surah: 22, ayah: 40 },
    ],
    reflection: 'You are stronger than you think. Allah chose you for this test because He knows you can handle it. Draw strength from salah, dhikr, and remembering that Allah is with you.',
    actionItems: [
      'Stand in night prayer - it builds spiritual strength',
      'Recite Ayatul Kursi for protection and strength',
      'Physical exercise also builds mental resilience',
      'Connect with a supportive community',
    ],
    dua: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ وَالْعَزِيمَةَ عَلَى الرُّشْدِ',
    duaTranslation: 'O Allah, I ask You for steadfastness in my affairs and determination upon guidance.',
  },

  morning: {
    id: 'morning',
    name: 'Starting the Day',
    nameAr: 'الصباح',
    icon: 'Sun',
    color: '#F59E0B',
    keywords: ['morning', 'start', 'day', 'wake', 'fajr', 'beginning'],
    primaryVerses: [
      { surah: 17, ayah: 78, preview: 'إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا', translation: 'Indeed, the recitation of dawn is ever witnessed.' },
      { surah: 113, ayah: 1, preview: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', translation: 'Say: I seek refuge in the Lord of daybreak.' },
      { surah: 89, ayah: 1, preview: 'وَالْفَجْرِ', translation: 'By the dawn.' },
    ],
    supportingVerses: [
      { surah: 73, ayah: 6 }, { surah: 50, ayah: 39 }, { surah: 20, ayah: 130 },
    ],
    reflection: 'Each new day is a blessing and opportunity. The Prophet (PBUH) made morning adhkar a part of his routine. Start with gratitude and intention.',
    actionItems: [
      'Pray Fajr on time',
      'Recite morning adhkar',
      'Set positive intentions for the day',
      'Plan your day with purpose',
    ],
    dua: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    duaTranslation: 'All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection.',
  },

  evening: {
    id: 'evening',
    name: 'Ending the Day',
    nameAr: 'المساء',
    icon: 'Moon',
    color: '#8B5CF6',
    keywords: ['evening', 'night', 'sleep', 'maghrib', 'isha', 'end'],
    primaryVerses: [
      { surah: 91, ayah: 4, preview: 'وَاللَّيْلِ إِذَا يَغْشَاهَا', translation: 'And by the night when it covers [the sun].' },
      { surah: 113, ayah: 3, preview: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', translation: 'And from the evil of darkness when it settles.' },
      { surah: 67, ayah: 2, preview: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ', translation: 'He who created death and life to test you.' },
    ],
    supportingVerses: [
      { surah: 2, ayah: 255 }, { surah: 112, ayah: 1 }, { surah: 114, ayah: 1 },
    ],
    reflection: 'Before sleep, reflect on your day. Seek forgiveness for shortcomings and express gratitude for blessings. Sleep in a state of remembrance.',
    actionItems: [
      'Pray Isha and Witr',
      'Recite evening adhkar and the 3 Quls',
      'Reflect on the day and seek forgiveness',
      'Sleep on your right side facing Qibla',
    ],
    dua: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    duaTranslation: 'In Your name, O Allah, I die and I live.',
  },
};

// Quick situation buttons for the AI companion
export const QUICK_SITUATIONS = [
  { id: 'anxiety', icon: 'Cloud', label: 'Feeling Anxious', color: '#EF4444' },
  { id: 'sadness', icon: 'Cloud', label: 'Feeling Sad', color: '#6366F1' },
  { id: 'gratitude', icon: 'Star', label: 'Grateful', color: '#10B981' },
  { id: 'confused', icon: 'Compass', label: 'Need Guidance', color: '#8B5CF6' },
  { id: 'strength', icon: 'Award', label: 'Need Strength', color: '#3B82F6' },
  { id: 'forgiveness', icon: 'Refresh', label: 'Seeking Forgiveness', color: '#EC4899' },
];

// Get guidance for a situation
export const getGuidance = (situationId) => {
  return LIFE_GUIDANCE[situationId] || null;
};

// Match keywords to situations
export const matchSituation = (text) => {
  const lowerText = text.toLowerCase();
  const matches = [];

  Object.values(LIFE_GUIDANCE).forEach(guidance => {
    const matchCount = guidance.keywords.filter(keyword =>
      lowerText.includes(keyword.toLowerCase())
    ).length;

    if (matchCount > 0) {
      matches.push({ ...guidance, matchScore: matchCount });
    }
  });

  // Sort by match score
  return matches.sort((a, b) => b.matchScore - a.matchScore);
};

// Get all situations
export const getAllSituations = () => Object.values(LIFE_GUIDANCE);

export default {
  LIFE_GUIDANCE,
  QUICK_SITUATIONS,
  getGuidance,
  matchSituation,
  getAllSituations,
};
