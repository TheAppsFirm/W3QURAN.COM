/**
 * Surah Al-A'raf (7) - Ontology of Quranic Concepts
 * The Heights
 * Theme: Adam and Iblis, prophets' stories (Nuh, Hud, Salih, Lut, Shu'ayb, Musa), Al-A'raf (barrier between Paradise and Hell)
 */

export const ONTOLOGY = {
  surahId: 7,
  surahName: "Al-A'raf",
  surahNameArabic: "الأعراف",
  revelationType: "Makki",
  totalAyahs: 206,

  categories: {
    quranIntroduction: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Introduction to the Quran",
      nameArabic: "مقدمة القرآن",
      concepts: [
        { term: "كِتَابٌ أُنزِلَ إِلَيْكَ", meaning: "A Book revealed to you", explanation: "Quran's divine origin", verseRef: "7:2" },
        { term: "لِتُنذِرَ بِهِ", meaning: "That you may warn thereby", explanation: "Purpose: warning", verseRef: "7:2" },
        { term: "وَذِكْرَىٰ لِلْمُؤْمِنِينَ", meaning: "And a reminder for believers", explanation: "Purpose: reminder", verseRef: "7:2" },
        { term: "اتَّبِعُوا مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ", meaning: "Follow what is revealed to you from your Lord", explanation: "Command to follow revelation", verseRef: "7:3" }
      ]
    },

    adamCreation: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Creation of Adam",
      nameArabic: "خلق آدم",
      concepts: [
        { term: "خَلَقْنَاكُمْ ثُمَّ صَوَّرْنَاكُمْ", meaning: "We created you, then fashioned you", explanation: "Two stages: creation then shaping", verseRef: "7:11" },
        { term: "اسْجُدُوا لِآدَمَ", meaning: "Prostrate to Adam", explanation: "Divine command to angels", verseRef: "7:11" },
        { term: "فَسَجَدُوا إِلَّا إِبْلِيسَ", meaning: "They prostrated except Iblis", explanation: "Angels obeyed, Iblis refused", verseRef: "7:11" },
        { term: "خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ", meaning: "You created me from fire and him from clay", explanation: "Iblis's false reasoning", verseRef: "7:12" }
      ]
    },

    iblisRefusal: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Iblis's Refusal and Fall",
      nameArabic: "رفض إبليس وسقوطه",
      concepts: [
        { term: "أَنَا خَيْرٌ مِّنْهُ", meaning: "I am better than him", explanation: "Root of pride: self-superiority", verseRef: "7:12" },
        { term: "فَاهْبِطْ مِنْهَا", meaning: "Descend from it (Paradise)", explanation: "Expulsion for arrogance", verseRef: "7:13" },
        { term: "أَنظِرْنِي إِلَىٰ يَوْمِ يُبْعَثُونَ", meaning: "Reprieve me until the Day they are resurrected", explanation: "Iblis's request for time", verseRef: "7:14" },
        { term: "لَأَقْعُدَنَّ لَهُمْ صِرَاطَكَ الْمُسْتَقِيمَ", meaning: "I will sit for them on Your straight path", explanation: "Shaytan's strategy: block the path", verseRef: "7:16" },
        { term: "ثُمَّ لَآتِيَنَّهُم مِّن بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ", meaning: "I will come at them from front and behind", explanation: "Four directions of attack", verseRef: "7:17" },
        { term: "وَعَنْ أَيْمَانِهِمْ وَعَن شَمَائِلِهِمْ", meaning: "From their right and left", explanation: "Comprehensive assault strategy", verseRef: "7:17" }
      ]
    },

    adamParadise: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Adam in Paradise",
      nameArabic: "آدم في الجنة",
      concepts: [
        { term: "اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ", meaning: "Dwell, you and your wife, in Paradise", explanation: "Initial dwelling", verseRef: "7:19" },
        { term: "كُلَا مِنْ حَيْثُ شِئْتُمَا", meaning: "Eat from wherever you wish", explanation: "Abundant provision", verseRef: "7:19" },
        { term: "وَلَا تَقْرَبَا هَـٰذِهِ الشَّجَرَةَ", meaning: "Do not approach this tree", explanation: "Single prohibition", verseRef: "7:19" },
        { term: "فَتَكُونَا مِنَ الظَّالِمِينَ", meaning: "Lest you become wrongdoers", explanation: "Warning of consequence", verseRef: "7:19" }
      ]
    },

    shaytanDeception: {
      color: '#10B981',
      icon: 'Book',
      name: "Shaytan's Deception",
      nameArabic: "خداع الشيطان",
      concepts: [
        { term: "فَوَسْوَسَ لَهُمَا الشَّيْطَانُ", meaning: "Then Shaytan whispered to them", explanation: "Method: whispering", verseRef: "7:20" },
        { term: "لِيُبْدِيَ لَهُمَا مَا وُورِيَ عَنْهُمَا", meaning: "To expose their private parts", explanation: "Revealing their nakedness", verseRef: "7:20" },
        { term: "مَا نَهَاكُمَا رَبُّكُمَا عَنْ هَـٰذِهِ الشَّجَرَةِ إِلَّا أَن تَكُونَا مَلَكَيْنِ", meaning: "Your Lord forbade this tree only so you become angels", explanation: "False promise #1", verseRef: "7:20" },
        { term: "أَوْ تَكُونَا مِنَ الْخَالِدِينَ", meaning: "Or become immortal", explanation: "False promise #2", verseRef: "7:20" },
        { term: "وَقَاسَمَهُمَا إِنِّي لَكُمَا لَمِنَ النَّاصِحِينَ", meaning: "And swore: I am your sincere advisor", explanation: "Deception through false oath", verseRef: "7:21" },
        { term: "فَدَلَّاهُمَا بِغُرُورٍ", meaning: "So he led them by delusion", explanation: "Gradual misleading", verseRef: "7:22" }
      ]
    },

    adamRepentance: {
      color: '#EF4444',
      icon: 'Users',
      name: "Adam's Repentance",
      nameArabic: "توبة آدم",
      concepts: [
        { term: "بَدَتْ لَهُمَا سَوْآتُهُمَا", meaning: "Their private parts became visible", explanation: "Consequence of sin", verseRef: "7:22" },
        { term: "طَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ", meaning: "They began covering with leaves of Paradise", explanation: "Attempt to cover shame", verseRef: "7:22" },
        { term: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا", meaning: "Our Lord, we have wronged ourselves", explanation: "Acknowledgment of sin", verseRef: "7:23" },
        { term: "وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", meaning: "If You don't forgive and have mercy, we'll be losers", explanation: "Seeking forgiveness", verseRef: "7:23" },
        { term: "اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ", meaning: "Descend, some of you enemies to others", explanation: "Earth as place of trial", verseRef: "7:24" },
        { term: "وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَىٰ حِينٍ", meaning: "On earth is your dwelling and provision for a time", explanation: "Temporary worldly life", verseRef: "7:24" }
      ]
    },

    clothing: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Clothing of Taqwa",
      nameArabic: "لباس التقوى",
      concepts: [
        { term: "أَنزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْآتِكُمْ", meaning: "We sent down clothing to cover your private parts", explanation: "Physical covering", verseRef: "7:26" },
        { term: "وَرِيشًا", meaning: "And adornment", explanation: "Beauty in dress", verseRef: "7:26" },
        { term: "وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ", meaning: "But clothing of taqwa - that is best", explanation: "Spiritual covering superior", verseRef: "7:26" }
      ]
    },

    alAraf: {
      color: '#10B981',
      icon: 'Book',
      name: "Al-A'raf - The Heights",
      nameArabic: "الأعراف",
      concepts: [
        { term: "وَبَيْنَهُمَا حِجَابٌ", meaning: "Between them is a barrier", explanation: "Partition between Paradise and Hell", verseRef: "7:46" },
        { term: "وَعَلَى الْأَعْرَافِ رِجَالٌ", meaning: "And on the Heights are men", explanation: "People on the barrier", verseRef: "7:46" },
        { term: "يَعْرِفُونَ كُلًّا بِسِيمَاهُمْ", meaning: "They recognize all by their marks", explanation: "Recognition of faces", verseRef: "7:46" },
        { term: "وَنَادَوْا أَصْحَابَ الْجَنَّةِ أَن سَلَامٌ عَلَيْكُمْ", meaning: "They call to Paradise dwellers: Peace be upon you", explanation: "Greeting to Paradise", verseRef: "7:46" },
        { term: "لَمْ يَدْخُلُوهَا وَهُمْ يَطْمَعُونَ", meaning: "They have not entered it but hope to", explanation: "Aspiring for Paradise", verseRef: "7:46" }
      ]
    },

    paradiseHellDialogue: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Dialogue Between Paradise and Hell Dwellers",
      nameArabic: "حوار أهل الجنة والنار",
      concepts: [
        { term: "وَنَادَىٰ أَصْحَابُ الْجَنَّةِ أَصْحَابَ النَّارِ", meaning: "Paradise dwellers call to Hell dwellers", explanation: "Cross-realm dialogue", verseRef: "7:44" },
        { term: "أَن قَدْ وَجَدْنَا مَا وَعَدَنَا رَبُّنَا حَقًّا", meaning: "We found what our Lord promised to be true", explanation: "Promise fulfilled", verseRef: "7:44" },
        { term: "فَهَلْ وَجَدتُّم مَّا وَعَدَ رَبُّكُمْ حَقًّا", meaning: "Have you found your Lord's promise true?", explanation: "Questioning disbelievers", verseRef: "7:44" },
        { term: "فَأَذَّنَ مُؤَذِّنٌ بَيْنَهُمْ أَن لَّعْنَةُ اللَّهِ عَلَى الظَّالِمِينَ", meaning: "An announcer proclaimed: Allah's curse on wrongdoers", explanation: "Declaration of curse", verseRef: "7:44" },
        { term: "أَفِيضُوا عَلَيْنَا مِنَ الْمَاءِ", meaning: "Pour water upon us", explanation: "Hell dwellers begging", verseRef: "7:50" },
        { term: "إِنَّ اللَّهَ حَرَّمَهُمَا عَلَى الْكَافِرِينَ", meaning: "Allah has forbidden both to disbelievers", explanation: "Blessings withheld", verseRef: "7:50" }
      ]
    },

    prophetNuh: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Prophet Nuh (Noah)",
      nameArabic: "قصة نوح",
      concepts: [
        { term: "لَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ", meaning: "We sent Nuh to his people", explanation: "First named prophet in series", verseRef: "7:59" },
        { term: "يَا قَوْمِ اعْبُدُوا اللَّهَ", meaning: "O my people, worship Allah", explanation: "Core message: tawhid", verseRef: "7:59" },
        { term: "مَا لَكُم مِّنْ إِلَـٰهٍ غَيْرُهُ", meaning: "You have no god other than Him", explanation: "No deity but Allah", verseRef: "7:59" },
        { term: "إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ", meaning: "I fear for you punishment of a great Day", explanation: "Warning of judgment", verseRef: "7:59" },
        { term: "فَأَنجَيْنَاهُ وَالَّذِينَ مَعَهُ فِي الْفُلْكِ", meaning: "We saved him and those with him in the Ark", explanation: "Salvation of believers", verseRef: "7:64" },
        { term: "وَأَغْرَقْنَا الَّذِينَ كَذَّبُوا بِآيَاتِنَا", meaning: "We drowned those who denied Our signs", explanation: "Destruction of deniers", verseRef: "7:64" }
      ]
    },

    prophetHud: {
      color: '#10B981',
      icon: 'Book',
      name: "Prophet Hud",
      nameArabic: "قصة هود",
      concepts: [
        { term: "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا", meaning: "And to 'Ad, their brother Hud", explanation: "Prophet to 'Ad", verseRef: "7:65" },
        { term: "أَفَلَا تَتَّقُونَ", meaning: "Will you not fear Allah?", explanation: "Call to taqwa", verseRef: "7:65" },
        { term: "إِنَّا لَنَرَاكَ فِي سَفَاهَةٍ", meaning: "We see you in foolishness", explanation: "People's accusation", verseRef: "7:66" },
        { term: "إِنِّي أُبَلِّغُكُمْ رِسَالَاتِ رَبِّي", meaning: "I convey my Lord's messages to you", explanation: "Prophet's duty", verseRef: "7:68" },
        { term: "وَأَنَا لَكُمْ نَاصِحٌ أَمِينٌ", meaning: "And I am a trustworthy advisor", explanation: "Prophet's qualities", verseRef: "7:68" },
        { term: "فَأَنجَيْنَاهُ وَالَّذِينَ مَعَهُ بِرَحْمَةٍ مِّنَّا", meaning: "We saved him and those with him by Our mercy", explanation: "Divine salvation", verseRef: "7:72" },
        { term: "وَقَطَعْنَا دَابِرَ الَّذِينَ كَذَّبُوا", meaning: "We cut off the roots of those who denied", explanation: "Complete destruction of 'Ad", verseRef: "7:72" }
      ]
    },

    prophetSalih: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Prophet Salih",
      nameArabic: "قصة صالح",
      concepts: [
        { term: "وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا", meaning: "And to Thamud, their brother Salih", explanation: "Prophet to Thamud", verseRef: "7:73" },
        { term: "هَـٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً", meaning: "This she-camel of Allah is a sign for you", explanation: "Miraculous she-camel", verseRef: "7:73" },
        { term: "فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللَّهِ", meaning: "Let her eat in Allah's land", explanation: "Command to spare her", verseRef: "7:73" },
        { term: "وَلَا تَمَسُّوهَا بِسُوءٍ", meaning: "Do not touch her with harm", explanation: "Warning against harm", verseRef: "7:73" },
        { term: "فَعَقَرُوا النَّاقَةَ", meaning: "They hamstrung the she-camel", explanation: "Their transgression", verseRef: "7:77" },
        { term: "وَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ", meaning: "They defied their Lord's command", explanation: "Insolent rebellion", verseRef: "7:77" },
        { term: "فَأَخَذَتْهُمُ الرَّجْفَةُ", meaning: "So the earthquake seized them", explanation: "Destruction by tremor", verseRef: "7:78" }
      ]
    },

    prophetLut: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Prophet Lut (Lot)",
      nameArabic: "قصة لوط",
      concepts: [
        { term: "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ", meaning: "And Lut when he said to his people", explanation: "Lut's mission", verseRef: "7:80" },
        { term: "أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ", meaning: "Do you commit immorality unprecedented?", explanation: "Unique sin of his people", verseRef: "7:80" },
        { term: "إِنَّكُمْ لَتَأْتُونَ الرِّجَالَ شَهْوَةً مِّن دُونِ النِّسَاءِ", meaning: "You approach men with desire instead of women", explanation: "Description of their sin", verseRef: "7:81" },
        { term: "بَلْ أَنتُمْ قَوْمٌ مُّسْرِفُونَ", meaning: "Rather, you are a transgressing people", explanation: "Judgment on them", verseRef: "7:81" },
        { term: "أَخْرِجُوهُم مِّن قَرْيَتِكُمْ", meaning: "Expel them from your town", explanation: "People's hostility", verseRef: "7:82" },
        { term: "إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ", meaning: "They are people who keep pure", explanation: "Mocking Lut's purity", verseRef: "7:82" },
        { term: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًا", meaning: "We rained upon them a rain", explanation: "Rain of stones", verseRef: "7:84" }
      ]
    },

    prophetShuayb: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Prophet Shu'ayb",
      nameArabic: "قصة شعيب",
      concepts: [
        { term: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا", meaning: "And to Madyan, their brother Shu'ayb", explanation: "Prophet to Madyan", verseRef: "7:85" },
        { term: "فَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ", meaning: "Give full measure and weight", explanation: "Economic justice", verseRef: "7:85" },
        { term: "وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ", meaning: "Do not deprive people of their due", explanation: "Fair dealing", verseRef: "7:85" },
        { term: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا", meaning: "Do not corrupt the earth after its reform", explanation: "Preserve good order", verseRef: "7:85" },
        { term: "وَلَا تَقْعُدُوا بِكُلِّ صِرَاطٍ تُوعِدُونَ", meaning: "Do not sit on every path threatening", explanation: "Condemning highway robbery", verseRef: "7:86" },
        { term: "وَتَصُدُّونَ عَن سَبِيلِ اللَّهِ", meaning: "Barring from Allah's way", explanation: "Blocking guidance", verseRef: "7:86" },
        { term: "فَأَخَذَتْهُمُ الرَّجْفَةُ", meaning: "So the earthquake seized them", explanation: "Destruction of Madyan", verseRef: "7:91" }
      ]
    },

    prophetMusa: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Prophet Musa (Moses) - Most Extensive",
      nameArabic: "قصة موسى",
      concepts: [
        { term: "ثُمَّ بَعَثْنَا مِن بَعْدِهِم مُّوسَىٰ بِآيَاتِنَا إِلَىٰ فِرْعَوْنَ وَمَلَئِهِ", meaning: "Then We sent Musa with Our signs to Pharaoh", explanation: "Musa's mission", verseRef: "7:103" },
        { term: "إِنِّي رَسُولٌ مِّن رَّبِّ الْعَالَمِينَ", meaning: "I am a messenger from the Lord of the worlds", explanation: "Musa's declaration", verseRef: "7:104" },
        { term: "فَأَلْقَىٰ عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُّبِينٌ", meaning: "He cast his staff and it became a clear serpent", explanation: "First sign", verseRef: "7:107" },
        { term: "وَنَزَعَ يَدَهُ فَإِذَا هِيَ بَيْضَاءُ لِلنَّاظِرِينَ", meaning: "He drew out his hand and it was white for beholders", explanation: "Second sign", verseRef: "7:108" }
      ]
    },

    musaVsMagicians: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Musa vs. Pharaoh's Magicians",
      nameArabic: "موسى والسحرة",
      concepts: [
        { term: "ائْتُونِي بِكُلِّ سَاحِرٍ عَلِيمٍ", meaning: "Bring me every skilled magician", explanation: "Pharaoh's challenge", verseRef: "7:112" },
        { term: "إِنَّ لَنَا لَأَجْرًا إِن كُنَّا نَحْنُ الْغَالِبِينَ", meaning: "Will we have reward if we prevail?", explanation: "Magicians' demand", verseRef: "7:113" },
        { term: "فَلَمَّا أَلْقَوْا سَحَرُوا أَعْيُنَ النَّاسِ", meaning: "When they threw, they bewitched people's eyes", explanation: "Magic's illusion", verseRef: "7:116" },
        { term: "أَلْقِ مَا أَنتَ مُلْقٍ", meaning: "Throw what you will throw", explanation: "Musa's confidence", verseRef: "7:117" },
        { term: "فَوَقَعَ الْحَقُّ وَبَطَلَ مَا كَانُوا يَعْمَلُونَ", meaning: "Truth prevailed and what they did was nullified", explanation: "Truth defeats falsehood", verseRef: "7:118" },
        { term: "فَغُلِبُوا هُنَالِكَ وَانقَلَبُوا صَاغِرِينَ", meaning: "They were defeated and humiliated", explanation: "Magicians' defeat", verseRef: "7:119" },
        { term: "وَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ", meaning: "The magicians fell in prostration", explanation: "Magicians accept truth", verseRef: "7:120" },
        { term: "آمَنَّا بِرَبِّ الْعَالَمِينَ رَبِّ مُوسَىٰ وَهَارُونَ", meaning: "We believe in Lord of the worlds, Lord of Musa and Harun", explanation: "Magicians' faith", verseRef: "7:121-122" }
      ]
    },

    pharaohThreat: {
      color: '#10B981',
      icon: 'Book',
      name: "Pharaoh's Threat",
      nameArabic: "تهديد فرعون",
      concepts: [
        { term: "آمَنتُم بِهِ قَبْلَ أَنْ آذَنَ لَكُمْ", meaning: "You believed before I permitted you", explanation: "Pharaoh's anger", verseRef: "7:123" },
        { term: "لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَافٍ", meaning: "I will cut your hands and feet alternately", explanation: "Torture threat", verseRef: "7:124" },
        { term: "ثُمَّ لَأُصَلِّبَنَّكُمْ أَجْمَعِينَ", meaning: "Then I will crucify you all", explanation: "Crucifixion threat", verseRef: "7:124" },
        { term: "إِنَّا إِلَىٰ رَبِّنَا مُنقَلِبُونَ", meaning: "Indeed, to our Lord we will return", explanation: "Magicians' firm faith", verseRef: "7:125" },
        { term: "أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ", meaning: "Pour patience on us and take us as Muslims", explanation: "Magicians' prayer", verseRef: "7:126" }
      ]
    },

    ninePlagues: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Plagues on Egypt",
      nameArabic: "الآيات التسع",
      concepts: [
        { term: "الطُّوفَانَ", meaning: "The flood", explanation: "First plague", verseRef: "7:133" },
        { term: "وَالْجَرَادَ", meaning: "The locusts", explanation: "Second plague", verseRef: "7:133" },
        { term: "وَالْقُمَّلَ", meaning: "The lice", explanation: "Third plague", verseRef: "7:133" },
        { term: "وَالضَّفَادِعَ", meaning: "The frogs", explanation: "Fourth plague", verseRef: "7:133" },
        { term: "وَالدَّمَ", meaning: "The blood", explanation: "Fifth plague", verseRef: "7:133" },
        { term: "آيَاتٍ مُّفَصَّلَاتٍ", meaning: "Distinct signs", explanation: "Clear evidence", verseRef: "7:133" },
        { term: "فَاسْتَكْبَرُوا وَكَانُوا قَوْمًا مُّجْرِمِينَ", meaning: "They were arrogant criminal people", explanation: "Egypt's response", verseRef: "7:133" }
      ]
    },

    exodusAndSea: {
      color: '#EF4444',
      icon: 'Users',
      name: "Exodus and Crossing the Sea",
      nameArabic: "الخروج وعبور البحر",
      concepts: [
        { term: "وَجَاوَزْنَا بِبَنِي إِسْرَائِيلَ الْبَحْرَ", meaning: "We took Children of Israel across the sea", explanation: "Sea crossing miracle", verseRef: "7:138" },
        { term: "فَأَتَوْا عَلَىٰ قَوْمٍ يَعْكُفُونَ عَلَىٰ أَصْنَامٍ", meaning: "They came upon people devoted to idols", explanation: "Encountering idolaters", verseRef: "7:138" },
        { term: "اجْعَل لَّنَا إِلَـٰهًا كَمَا لَهُمْ آلِهَةٌ", meaning: "Make for us a god as they have gods", explanation: "Israel's ignorant request", verseRef: "7:138" },
        { term: "إِنَّكُمْ قَوْمٌ تَجْهَلُونَ", meaning: "You are an ignorant people", explanation: "Musa's rebuke", verseRef: "7:138" }
      ]
    },

    musaAtTur: {
      color: '#10B981',
      icon: 'Book',
      name: "Musa at Mount Tur",
      nameArabic: "موسى عند الطور",
      concepts: [
        { term: "وَوَاعَدْنَا مُوسَىٰ ثَلَاثِينَ لَيْلَةً وَأَتْمَمْنَاهَا بِعَشْرٍ", meaning: "We appointed for Musa thirty nights, then ten more", explanation: "Forty nights total", verseRef: "7:142" },
        { term: "رَبِّ أَرِنِي أَنظُرْ إِلَيْكَ", meaning: "My Lord, show me that I may look at You", explanation: "Musa's request to see Allah", verseRef: "7:143" },
        { term: "لَن تَرَانِي", meaning: "You will never see Me", explanation: "Allah's response", verseRef: "7:143" },
        { term: "وَلَـٰكِنِ انظُرْ إِلَى الْجَبَلِ", meaning: "But look at the mountain", explanation: "Test of perception", verseRef: "7:143" },
        { term: "فَلَمَّا تَجَلَّىٰ رَبُّهُ لِلْجَبَلِ جَعَلَهُ دَكًّا", meaning: "When his Lord appeared to mountain, it crumbled", explanation: "Mountain destroyed", verseRef: "7:143" },
        { term: "وَخَرَّ مُوسَىٰ صَعِقًا", meaning: "Musa fell unconscious", explanation: "Effect of manifestation", verseRef: "7:143" },
        { term: "سُبْحَانَكَ تُبْتُ إِلَيْكَ", meaning: "Glory to You, I repent to You", explanation: "Musa's repentance", verseRef: "7:143" }
      ]
    },

    tablets: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Tablets",
      nameArabic: "الألواح",
      concepts: [
        { term: "وَكَتَبْنَا لَهُ فِي الْأَلْوَاحِ", meaning: "We wrote for him on tablets", explanation: "Divine writing", verseRef: "7:145" },
        { term: "مِن كُلِّ شَيْءٍ مَّوْعِظَةً", meaning: "Of everything an admonition", explanation: "Comprehensive guidance", verseRef: "7:145" },
        { term: "وَتَفْصِيلًا لِّكُلِّ شَيْءٍ", meaning: "And detailed explanation of everything", explanation: "Complete details", verseRef: "7:145" },
        { term: "فَخُذْهَا بِقُوَّةٍ", meaning: "Take them with determination", explanation: "Command to hold firmly", verseRef: "7:145" },
        { term: "وَأْمُرْ قَوْمَكَ يَأْخُذُوا بِأَحْسَنِهَا", meaning: "Command your people to take the best of it", explanation: "Choose best rulings", verseRef: "7:145" }
      ]
    },

    goldenCalf: {
      color: '#EC4899',
      icon: 'Globe',
      name: "The Golden Calf",
      nameArabic: "العجل",
      concepts: [
        { term: "وَاتَّخَذَ قَوْمُ مُوسَىٰ مِن بَعْدِهِ مِنْ حُلِيِّهِمْ عِجْلًا جَسَدًا", meaning: "Musa's people made from their ornaments a calf body", explanation: "Calf creation", verseRef: "7:148" },
        { term: "لَّهُ خُوَارٌ", meaning: "Having a lowing sound", explanation: "Artificial sound", verseRef: "7:148" },
        { term: "أَلَمْ يَرَوْا أَنَّهُ لَا يُكَلِّمُهُمْ وَلَا يَهْدِيهِمْ سَبِيلًا", meaning: "Did they not see it could not speak or guide?", explanation: "Idol's powerlessness", verseRef: "7:148" },
        { term: "اتَّخَذُوهُ وَكَانُوا ظَالِمِينَ", meaning: "They took it and were wrongdoers", explanation: "Sin of idolatry", verseRef: "7:148" },
        { term: "سُقِطَ فِي أَيْدِيهِمْ", meaning: "They fell into regret", explanation: "Realization of error", verseRef: "7:149" },
        { term: "لَئِن لَّمْ يَرْحَمْنَا رَبُّنَا وَيَغْفِرْ لَنَا", meaning: "If our Lord does not have mercy and forgive", explanation: "Seeking forgiveness", verseRef: "7:149" }
      ]
    },

    musaAnger: {
      color: '#10B981',
      icon: 'Book',
      name: "Musa's Return and Anger",
      nameArabic: "عودة موسى وغضبه",
      concepts: [
        { term: "وَلَمَّا رَجَعَ مُوسَىٰ إِلَىٰ قَوْمِهِ غَضْبَانَ أَسِفًا", meaning: "When Musa returned angry and grieved", explanation: "Musa's reaction", verseRef: "7:150" },
        { term: "بِئْسَمَا خَلَفْتُمُونِي مِن بَعْدِي", meaning: "How terrible what you did after me", explanation: "Rebuke to his people", verseRef: "7:150" },
        { term: "أَعَجِلْتُمْ أَمْرَ رَبِّكُمْ", meaning: "Were you impatient for your Lord's command?", explanation: "Question about impatience", verseRef: "7:150" },
        { term: "وَأَلْقَى الْأَلْوَاحَ", meaning: "He threw down the tablets", explanation: "Casting tablets in anger", verseRef: "7:150" },
        { term: "وَأَخَذَ بِرَأْسِ أَخِيهِ يَجُرُّهُ إِلَيْهِ", meaning: "Seized his brother's head, pulling him", explanation: "Confronting Harun", verseRef: "7:150" },
        { term: "إِنَّ الْقَوْمَ اسْتَضْعَفُونِي وَكَادُوا يَقْتُلُونَنِي", meaning: "The people oppressed me and nearly killed me", explanation: "Harun's explanation", verseRef: "7:150" }
      ]
    },

    divineNames: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Allah's Beautiful Names",
      nameArabic: "أسماء الله الحسنى",
      concepts: [
        { term: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ", meaning: "To Allah belong the Beautiful Names", explanation: "Divine Names concept", verseRef: "7:180" },
        { term: "فَادْعُوهُ بِهَا", meaning: "So call upon Him by them", explanation: "How to invoke Allah", verseRef: "7:180" },
        { term: "وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ", meaning: "Leave those who deviate in His Names", explanation: "Warning against distortion", verseRef: "7:180" }
      ]
    },

    creationReflection: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Reflection on Creation",
      nameArabic: "التفكر في الخلق",
      concepts: [
        { term: "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ", meaning: "Your Lord is Allah who created heavens and earth in six days", explanation: "Creation in six periods", verseRef: "7:54" },
        { term: "ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ", meaning: "Then established Himself on the Throne", explanation: "Divine sovereignty", verseRef: "7:54" },
        { term: "يُغْشِي اللَّيْلَ النَّهَارَ", meaning: "He covers night with day", explanation: "Day-night cycle", verseRef: "7:54" },
        { term: "وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ", meaning: "Sun, moon, stars are subjected to His command", explanation: "Celestial obedience", verseRef: "7:54" },
        { term: "أَلَا لَهُ الْخَلْقُ وَالْأَمْرُ", meaning: "Is not creation and command His alone?", explanation: "Divine exclusive sovereignty", verseRef: "7:54" }
      ]
    },

    supplicationGuidelines: {
      color: '#F59E0B',
      icon: 'Star',
      name: "How to Supplicate",
      nameArabic: "آداب الدعاء",
      concepts: [
        { term: "ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً", meaning: "Call your Lord humbly and privately", explanation: "Humble, quiet supplication", verseRef: "7:55" },
        { term: "إِنَّهُ لَا يُحِبُّ الْمُعْتَدِينَ", meaning: "He does not love transgressors", explanation: "Avoid excess in dua", verseRef: "7:55" },
        { term: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا", meaning: "Do not corrupt earth after its reform", explanation: "Preserve order", verseRef: "7:56" },
        { term: "وَادْعُوهُ خَوْفًا وَطَمَعًا", meaning: "Call Him with fear and hope", explanation: "Balance fear and hope", verseRef: "7:56" },
        { term: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ", meaning: "Allah's mercy is near to doers of good", explanation: "Mercy for the good", verseRef: "7:56" }
      ]
    },

    covenant: {
      color: '#10B981',
      icon: 'Book',
      name: "The Primordial Covenant",
      nameArabic: "الميثاق الأول",
      concepts: [
        { term: "وَإِذْ أَخَذَ رَبُّكَ مِن بَنِي آدَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ", meaning: "When your Lord took from Adam's children, from their loins, their descendants", explanation: "Extraction of souls", verseRef: "7:172" },
        { term: "وَأَشْهَدَهُمْ عَلَىٰ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ", meaning: "Made them testify: Am I not your Lord?", explanation: "Divine question", verseRef: "7:172" },
        { term: "قَالُوا بَلَىٰ شَهِدْنَا", meaning: "They said: Yes, we testify", explanation: "Universal acknowledgment", verseRef: "7:172" },
        { term: "أَن تَقُولُوا يَوْمَ الْقِيَامَةِ إِنَّا كُنَّا عَنْ هَـٰذَا غَافِلِينَ", meaning: "Lest you say on Judgment Day: We were unaware", explanation: "Removing excuse of ignorance", verseRef: "7:172" }
      ]
    },

    prophetMuhammad: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Prophet Muhammad Prophecy",
      nameArabic: "البشارة بمحمد",
      concepts: [
        { term: "الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّيَّ", meaning: "Those who follow the Messenger, the unlettered Prophet", explanation: "Description of Muhammad", verseRef: "7:157" },
        { term: "الَّذِي يَجِدُونَهُ مَكْتُوبًا عِندَهُمْ فِي التَّوْرَاةِ وَالْإِنجِيلِ", meaning: "Whom they find written with them in Torah and Gospel", explanation: "Prophecy in previous scriptures", verseRef: "7:157" },
        { term: "يَأْمُرُهُم بِالْمَعْرُوفِ وَيَنْهَاهُمْ عَنِ الْمُنكَرِ", meaning: "Commands good, forbids evil", explanation: "His mission", verseRef: "7:157" },
        { term: "وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ", meaning: "Makes lawful pure things, forbids impure", explanation: "His legislation", verseRef: "7:157" },
        { term: "وَيَضَعُ عَنْهُمْ إِصْرَهُمْ وَالْأَغْلَالَ", meaning: "Relieves them of burden and shackles", explanation: "Ease of his law", verseRef: "7:157" }
      ]
    },

    finalGuidance: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Final Guidance",
      nameArabic: "الهداية الختامية",
      concepts: [
        { term: "وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا", meaning: "When Quran is recited, listen and be silent", explanation: "Etiquette of Quran recitation", verseRef: "7:204" },
        { term: "لَعَلَّكُمْ تُرْحَمُونَ", meaning: "That you may receive mercy", explanation: "Benefit of listening", verseRef: "7:204" },
        { term: "وَاذْكُر رَّبَّكَ فِي نَفْسِكَ تَضَرُّعًا وَخِيفَةً", meaning: "Remember your Lord within yourself humbly and fearfully", explanation: "Personal dhikr", verseRef: "7:205" },
        { term: "وَدُونَ الْجَهْرِ مِنَ الْقَوْلِ", meaning: "Without loudness of speech", explanation: "Moderate voice", verseRef: "7:205" },
        { term: "بِالْغُدُوِّ وَالْآصَالِ", meaning: "Morning and evening", explanation: "Times of remembrance", verseRef: "7:205" },
        { term: "وَلَا تَكُن مِّنَ الْغَافِلِينَ", meaning: "And do not be among the heedless", explanation: "Warning against neglect", verseRef: "7:205" }
      ]
    },

    prostrationVerse: {
      color: '#EF4444',
      icon: 'Users',
      name: "Verse of Prostration",
      nameArabic: "آية السجدة",
      concepts: [
        { term: "إِنَّ الَّذِينَ عِندَ رَبِّكَ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِ", meaning: "Those near your Lord are not too proud to worship", explanation: "Angels' humility", verseRef: "7:206" },
        { term: "وَيُسَبِّحُونَهُ", meaning: "They glorify Him", explanation: "Constant tasbih", verseRef: "7:206" },
        { term: "وَلَهُ يَسْجُدُونَ", meaning: "And to Him they prostrate", explanation: "Sujud - requires prostration when recited", verseRef: "7:206" }
      ]
    }
  },

  relationships: [
    { from: "خلقتني من نار", to: "أنا خير منه", type: "causation", description: "False origin-based superiority claim" },
    { from: "فوسوس لهما", to: "بدت لهما سوآتهما", type: "consequence", description: "Shaytan's whisper led to exposure" },
    { from: "ظلمنا أنفسنا", to: "فتلقى آدم من ربه كلمات", type: "progression", description: "Confession led to forgiveness" },
    { from: "اعبدوا الله", to: "ما لكم من إله غيره", type: "elaboration", description: "All prophets' core message" },
    { from: "فأنجيناه والذين معه", to: "وأغرقنا/فأخذتهم الرجفة", type: "contrast", description: "Believers saved, deniers destroyed" },
    { from: "ألقى عصاه", to: "فوقع الحق", type: "causation", description: "Musa's sign established truth" },
    { from: "آمنا برب العالمين", to: "لأقطعن أيديكم", type: "consequence", description: "Faith led to persecution" },
    { from: "أرني أنظر إليك", to: "لن تراني", type: "divine_response", description: "Human limitation in seeing Allah" },
    { from: "ألست بربكم", to: "بلى شهدنا", type: "covenant", description: "Primordial testimony of souls" },
    { from: "إذا قرئ القرآن فاستمعوا", to: "لعلكم ترحمون", type: "causation", description: "Listening leads to mercy" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction & Quran's Purpose", verses: "7:1-10", description: "Book revealed to warn and remind" },
      { stage: 2, theme: "Adam, Iblis, and Paradise", verses: "7:11-25", description: "Creation, prostration refusal, fall from Paradise" },
      { stage: 3, theme: "Children of Adam", verses: "7:26-53", description: "Clothing, Satan's enmity, Day of Judgment" },
      { stage: 4, theme: "Al-A'raf (The Heights)", verses: "7:44-51", description: "Barrier between Paradise and Hell" },
      { stage: 5, theme: "Creation and Worship", verses: "7:54-58", description: "Allah's creation, how to supplicate" },
      { stage: 6, theme: "Prophet Nuh", verses: "7:59-64", description: "First prophet, flood, salvation of believers" },
      { stage: 7, theme: "Prophet Hud and 'Ad", verses: "7:65-72", description: "Hud's message, people's arrogance, destruction" },
      { stage: 8, theme: "Prophet Salih and Thamud", verses: "7:73-79", description: "She-camel miracle, hamstringing, earthquake" },
      { stage: 9, theme: "Prophet Lut", verses: "7:80-84", description: "Unprecedented sin, rain of stones" },
      { stage: 10, theme: "Prophet Shu'ayb and Madyan", verses: "7:85-93", description: "Economic justice, destruction of cheaters" },
      { stage: 11, theme: "Prophet Musa - Mission Begins", verses: "7:103-126", description: "Sent to Pharaoh, signs, magicians convert" },
      { stage: 12, theme: "Plagues on Egypt", verses: "7:127-136", description: "Nine plagues, Pharaoh's stubbornness" },
      { stage: 13, theme: "Exodus & Sea Crossing", verses: "7:137-141", description: "Israel inherits, crosses sea, requests idol" },
      { stage: 14, theme: "Mount Tur & Tablets", verses: "7:142-147", description: "40 nights, Musa asks to see Allah, tablets" },
      { stage: 15, theme: "Golden Calf Incident", verses: "7:148-156", description: "Calf worship, Musa's anger, repentance" },
      { stage: 16, theme: "Prophet Muhammad Prophecy", verses: "7:157-158", description: "Unlettered prophet foretold in scriptures" },
      { stage: 17, theme: "Israel's Trials", verses: "7:159-171", description: "Righteous among them, covenant, mountain raised" },
      { stage: 18, theme: "Primordial Covenant", verses: "7:172-174", description: "Souls testify to Allah's lordship" },
      { stage: 19, theme: "Warning Examples", verses: "7:175-186", description: "Bal'am story, those who reject signs" },
      { stage: 20, theme: "Final Guidance", verses: "7:187-206", description: "Hour's knowledge, Quran recitation etiquette, prostration" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Avoid pride", how: "Iblis was destroyed by pride - never consider yourself superior", verse: "7:12-13" },
      { principle: "Beware of Shaytan's whispers", how: "He attacks from all directions - stay vigilant", verse: "7:16-17" },
      { principle: "Repent sincerely", how: "Adam's model: acknowledge sin, seek forgiveness", verse: "7:23" },
      { principle: "Wear clothing of taqwa", how: "Physical modesty + inner consciousness of Allah", verse: "7:26" },
      { principle: "Prophets had one message", how: "All called to worship Allah alone - follow this", verse: "7:59,65,73,85" },
      { principle: "Economic justice", how: "Give full measure, don't cheat in business", verse: "7:85" },
      { principle: "Truth defeats falsehood", how: "Stay firm in truth even against overwhelming odds", verse: "7:118-119" },
      { principle: "Faith over fear", how: "Magicians chose faith despite crucifixion threat", verse: "7:124-126" },
      { principle: "Hold scripture firmly", how: "Take guidance with determination, not casually", verse: "7:145" },
      { principle: "Listen to Quran attentively", how: "When recited, be silent and attentive", verse: "7:204" },
      { principle: "Remember Allah morning and evening", how: "Consistent dhikr prevents heedlessness", verse: "7:205" }
    ]
  },

  uniqueInsight: {
    title: "Al-A'raf - The Barrier Between Eternal Destinations",
    insight: "The surah takes its name from Al-A'raf (verses 46-48), a concept unique to Quranic eschatology. It refers to elevated heights between Paradise and Hell where certain people will stand. Scholars differ: some say they are those whose good and bad deeds are equal, others say they are martyrs whose parents didn't permit jihad, or children of mushrikin. They recognize both Paradise and Hell dwellers by their marks. They greet Paradise dwellers but haven't entered yet; they seek refuge from Hell. Eventually, Allah admits them to Paradise by His mercy. This represents divine justice - no one is lost in ambiguity; everyone has a destination, even if delayed. The concept also symbolizes how humans in dunya stand on a ridge between two eternities, choosing their direction."
  },

  historicalContext: {
    note: "This is the longest Makkan surah, revealed before the migration to Madinah when Muslims faced severe persecution. The extensive stories of previous prophets served to comfort Prophet Muhammad and believers, showing that all messengers faced rejection but truth ultimately prevailed. The Pharaoh-Musa narrative is particularly detailed (70+ verses), perhaps paralleling Quraysh's opposition. The surah's emphasis on prophets being 'brothers' to their people (أخاهم) highlights that messengers came from within communities, not as outsiders. The primordial covenant (7:172) establishes that every soul has inherent knowledge of Allah, making disbelief a betrayal of one's own testimony."
  },

  linguisticFeatures: {
    features: [
      { feature: "الأعراف", example: "The Heights", effect: "Plural of عُرف (elevated place) - unique Quranic term" },
      { feature: "فَدَلَّاهُمَا بِغُرُورٍ", example: "Led them gradually by deception", effect: "دلّى from دَلْو (bucket) - lowered them step by step" },
      { feature: "اسْتَكْبَرَ", example: "Was arrogant", effect: "Form X - sought/considered self great" },
      { feature: "أَسِفًا", example: "Grieved", effect: "Pattern فَعِل indicating intense emotional state" },
      { feature: "طِبَاقًا", example: "Layered", effect: "Describes seven heavens in layers" },
      { feature: "الْأَسْمَاءُ الْحُسْنَىٰ", example: "Most Beautiful Names", effect: "Superlative pattern فُعْلَى" },
      { feature: "مُسَخَّرَات", example: "Subjected/made subservient", effect: "Passive participle Form II - celestial obedience" },
      { feature: "تَضَرُّعًا وَخُفْيَةً", example: "Humbly and privately", effect: "Two modes of proper supplication" }
    ]
  },

  prophetMentions: {
    prophets: [
      { name: "Adam", arabic: "آدم", verses: "7:11-25, 172", role: "First human, covenant representative" },
      { name: "Nuh (Noah)", arabic: "نوح", verses: "7:59-64", role: "First named prophet to a nation" },
      { name: "Hud", arabic: "هود", verses: "7:65-72", role: "Prophet to 'Ad" },
      { name: "Salih", arabic: "صالح", verses: "7:73-79", role: "Prophet to Thamud, she-camel miracle" },
      { name: "Lut (Lot)", arabic: "لوط", verses: "7:80-84", role: "Prophet condemning unprecedented sin" },
      { name: "Shu'ayb", arabic: "شعيب", verses: "7:85-93", role: "Prophet to Madyan, economic justice" },
      { name: "Musa (Moses)", arabic: "موسى", verses: "7:103-162", role: "Most detailed story - Pharaoh, plagues, tablets" },
      { name: "Harun (Aaron)", arabic: "هارون", verses: "7:122, 142, 150-151", role: "Musa's brother and helper" },
      { name: "Muhammad", arabic: "محمد", verses: "7:157-158", role: "Prophesied in previous scriptures" }
    ]
  },

  destructions: {
    nations: [
      { nation: "People of Nuh", punishment: "أَغْرَقْنَا - Drowned in flood", verse: "7:64" },
      { nation: "'Ad (Hud's people)", punishment: "قَطَعْنَا دَابِرَ - Cut off completely", verse: "7:72" },
      { nation: "Thamud (Salih's people)", punishment: "الرَّجْفَة - Earthquake", verse: "7:78" },
      { nation: "People of Lut", punishment: "أَمْطَرْنَا مَطَرًا - Rain of stones", verse: "7:84" },
      { nation: "Madyan (Shu'ayb's people)", punishment: "الرَّجْفَة - Earthquake", verse: "7:91" },
      { nation: "Pharaoh's people", punishment: "أَغْرَقْنَاهُمْ فِي الْيَمِّ - Drowned in sea", verse: "7:136" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "7:11", topic: "Human Creation", note: "خَلَقْنَاكُمْ ثُمَّ صَوَّرْنَاكُمْ - Creation then shaping/formation stages" },
      { verse: "7:54", topic: "Cosmology", note: "Six days of creation, cosmic order, day-night cycle" },
      { verse: "7:57", topic: "Water Cycle", note: "Winds carrying clouds, rain reviving dead earth" },
      { verse: "7:172", topic: "Consciousness", note: "Pre-existence awareness, souls acknowledging their Lord" }
    ]
  }
};

export default ONTOLOGY;
