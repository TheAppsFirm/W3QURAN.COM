/**
 * Surah Qaf (50) - Ontology of Quranic Concepts
 * The Letter Qaf
 * Theme: Resurrection proofs, recording angels, Hell and Paradise descriptions
 * Note: Prophet Muhammad (peace be upon him) frequently recited this surah in Eid and Friday prayers
 */

export const ONTOLOGY = {
  surahId: 50,
  surahName: "Qaf",
  surahNameArabic: "ق",
  revelationType: "Makki",
  totalAyahs: 45,

  categories: {
    mysteriousLetter: {
      name: "The Mysterious Letter",
      nameArabic: "الحرف المقطع",
      color: '#F59E0B',
      icon: 'Sparkles',
      concepts: [
        { term: "ق", meaning: "Qaf", explanation: "One of the mysterious letters (Huruf al-Muqatta'at) - some scholars say it refers to Mount Qaf, or represents Allah's attribute al-Qadir (The Powerful)", verseRef: "50:1" },
        { term: "وَالْقُرْآنِ الْمَجِيدِ", meaning: "By the glorious Quran", explanation: "Oath by the Quran emphasizing its majesty and honor", verseRef: "50:1" }
      ]
    },

    disbelieversWonder: {
      name: "Disbelievers' Astonishment",
      nameArabic: "تعجب الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "عَجِبُوا أَن جَاءَهُم مُّنذِرٌ مِّنْهُمْ", meaning: "They wonder that a warner from among them came", explanation: "Makkans amazed that a human like them was chosen as messenger", verseRef: "50:2" },
        { term: "هَٰذَا شَيْءٌ عَجِيبٌ", meaning: "This is a strange thing", explanation: "Disbelievers calling resurrection an impossible wonder", verseRef: "50:2" },
        { term: "أَإِذَا مِتْنَا وَكُنَّا تُرَابًا", meaning: "When we have died and become dust?", explanation: "Their incredulity about resurrection after decomposition", verseRef: "50:3" },
        { term: "ذَٰلِكَ رَجْعٌ بَعِيدٌ", meaning: "That is a far return", explanation: "They consider resurrection impossibly remote", verseRef: "50:3" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Complete Knowledge",
      nameArabic: "علم الله الشامل",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "قَدْ عَلِمْنَا مَا تَنقُصُ الْأَرْضُ مِنْهُمْ", meaning: "We know what the earth diminishes of them", explanation: "Allah knows every particle of decomposed bodies", verseRef: "50:4" },
        { term: "وَعِندَنَا كِتَابٌ حَفِيظٌ", meaning: "And with Us is a preserving record", explanation: "The Preserved Tablet (Lawh al-Mahfuz) contains all", verseRef: "50:4" }
      ]
    },

    creationSigns: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "أَفَلَمْ يَنظُرُوا إِلَى السَّمَاءِ فَوْقَهُمْ", meaning: "Have they not looked at the sky above them", explanation: "Call to observe the heavens as proof", verseRef: "50:6" },
        { term: "كَيْفَ بَنَيْنَاهَا وَزَيَّنَّاهَا", meaning: "How We constructed and adorned it", explanation: "Sky built and beautified without flaws", verseRef: "50:6" },
        { term: "وَمَا لَهَا مِن فُرُوجٍ", meaning: "And it has no rifts", explanation: "Perfectly seamless heavenly structure", verseRef: "50:6" },
        { term: "وَالْأَرْضَ مَدَدْنَاهَا", meaning: "And the earth We spread out", explanation: "Earth made suitable for habitation", verseRef: "50:7" },
        { term: "وَأَلْقَيْنَا فِيهَا رَوَاسِيَ", meaning: "And cast therein firmly set mountains", explanation: "Mountains as stabilizers", verseRef: "50:7" },
        { term: "وَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ بَهِيجٍ", meaning: "And caused to grow every beautiful pair", explanation: "Diverse, beautiful plant life", verseRef: "50:7" },
        { term: "تَبْصِرَةً وَذِكْرَىٰ", meaning: "As insight and reminder", explanation: "Creation serves to enlighten and remind", verseRef: "50:8" },
        { term: "لِكُلِّ عَبْدٍ مُّنِيبٍ", meaning: "For every servant who turns back (to Allah)", explanation: "Signs benefit those who repent and return", verseRef: "50:8" }
      ]
    },

    rainBlessing: {
      name: "Blessed Rain",
      nameArabic: "بركة المطر",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "مَاءً مُّبَارَكًا", meaning: "Blessed water", explanation: "Rain described as source of blessing", verseRef: "50:9" },
        { term: "فَأَنبَتْنَا بِهِ جَنَّاتٍ", meaning: "And caused gardens to grow", explanation: "Rain produces orchards and farms", verseRef: "50:9" },
        { term: "وَحَبَّ الْحَصِيدِ", meaning: "And grain for harvest", explanation: "Crops for human sustenance", verseRef: "50:9" },
        { term: "وَالنَّخْلَ بَاسِقَاتٍ لَّهَا طَلْعٌ نَّضِيدٌ", meaning: "And tall palm trees with clustered dates", explanation: "Majestic date palms with layered fruit", verseRef: "50:10" },
        { term: "رِّزْقًا لِّلْعِبَادِ", meaning: "Provision for the servants", explanation: "All growth is sustenance from Allah", verseRef: "50:11" },
        { term: "وَأَحْيَيْنَا بِهِ بَلْدَةً مَّيْتًا", meaning: "And gave life to a dead land", explanation: "Rain reviving barren land - proof of resurrection", verseRef: "50:11" },
        { term: "كَذَٰلِكَ الْخُرُوجُ", meaning: "Thus is the emergence (from graves)", explanation: "Just as dead land revives, so will the dead", verseRef: "50:11" }
      ]
    },

    destroyedNations: {
      name: "Destroyed Nations",
      nameArabic: "الأمم المهلكة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ", meaning: "Before them denied the people of Noah", explanation: "First of the destroyed nations listed", verseRef: "50:12" },
        { term: "وَأَصْحَابُ الرَّسِّ وَثَمُودُ", meaning: "And companions of Ar-Rass and Thamud", explanation: "Ar-Rass people and Thamud destroyed", verseRef: "50:12" },
        { term: "وَعَادٌ وَفِرْعَوْنُ", meaning: "And 'Ad and Pharaoh", explanation: "'Ad and Egyptian oppressor destroyed", verseRef: "50:13" },
        { term: "وَإِخْوَانُ لُوطٍ", meaning: "And the brothers of Lot", explanation: "People of Sodom destroyed", verseRef: "50:13" },
        { term: "وَأَصْحَابُ الْأَيْكَةِ", meaning: "And the companions of the Thicket", explanation: "People of Shu'ayb destroyed", verseRef: "50:14" },
        { term: "وَقَوْمُ تُبَّعٍ", meaning: "And the people of Tubba'", explanation: "Ancient Yemeni kings' people destroyed", verseRef: "50:14" },
        { term: "كُلٌّ كَذَّبَ الرُّسُلَ فَحَقَّ وَعِيدِ", meaning: "Each denied the messengers, so My threat was fulfilled", explanation: "Pattern: denial leads to promised punishment", verseRef: "50:14" }
      ]
    },

    firstCreation: {
      name: "Proof from First Creation",
      nameArabic: "برهان الخلق الأول",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "أَفَعَيِينَا بِالْخَلْقِ الْأَوَّلِ", meaning: "Were We then tired by the first creation?", explanation: "Rhetorical - Allah not exhausted by initial creation", verseRef: "50:15" },
        { term: "بَلْ هُمْ فِي لَبْسٍ مِّنْ خَلْقٍ جَدِيدٍ", meaning: "Rather, they are in confusion about new creation", explanation: "Their doubt is about recreation, not Allah's ability", verseRef: "50:15" }
      ]
    },

    humanCreationKnowledge: {
      name: "Allah's Intimate Knowledge of Humans",
      nameArabic: "علم الله بالإنسان",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "وَلَقَدْ خَلَقْنَا الْإِنسَانَ", meaning: "And We created the human", explanation: "Allah is humanity's Creator", verseRef: "50:16" },
        { term: "وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ", meaning: "And We know what his soul whispers to him", explanation: "Allah knows innermost thoughts and temptations", verseRef: "50:16" },
        { term: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ", meaning: "And We are closer to him than his jugular vein", explanation: "One of Quran's most profound statements - Allah's absolute nearness", verseRef: "50:16" }
      ]
    },

    recordingAngels: {
      name: "The Recording Angels",
      nameArabic: "الملائكة الكاتبون",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "إِذْ يَتَلَقَّى الْمُتَلَقِّيَانِ", meaning: "When the two receivers receive", explanation: "Two angels assigned to record deeds", verseRef: "50:17" },
        { term: "عَنِ الْيَمِينِ وَعَنِ الشِّمَالِ قَعِيدٌ", meaning: "On the right and on the left, seated", explanation: "One on each side constantly present", verseRef: "50:17" },
        { term: "مَّا يَلْفِظُ مِن قَوْلٍ", meaning: "He does not utter any word", explanation: "Every spoken word is noted", verseRef: "50:18" },
        { term: "إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ", meaning: "Except with him is an observer prepared", explanation: "Angel ready to record instantly - Raqib and 'Atid", verseRef: "50:18" }
      ]
    },

    deathAndResurrection: {
      name: "Death and Resurrection",
      nameArabic: "الموت والبعث",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَجَاءَتْ سَكْرَةُ الْمَوْتِ بِالْحَقِّ", meaning: "And the intoxication of death comes with truth", explanation: "Death's stupor brings reality - no more denial", verseRef: "50:19" },
        { term: "ذَٰلِكَ مَا كُنتَ مِنْهُ تَحِيدُ", meaning: "That is what you were trying to avoid", explanation: "Death was always evaded, now it arrives", verseRef: "50:19" },
        { term: "وَنُفِخَ فِي الصُّورِ", meaning: "And the trumpet is blown", explanation: "Signal for resurrection", verseRef: "50:20" },
        { term: "ذَٰلِكَ يَوْمُ الْوَعِيدِ", meaning: "That is the Day of Warning", explanation: "The promised day of threat/warning", verseRef: "50:20" }
      ]
    },

    dayOfJudgment: {
      name: "Scene of Judgment Day",
      nameArabic: "مشهد يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَجَاءَتْ كُلُّ نَفْسٍ مَّعَهَا سَائِقٌ وَشَهِيدٌ", meaning: "Every soul comes with a driver and witness", explanation: "Angel driving and angel testifying for each person", verseRef: "50:21" },
        { term: "لَّقَدْ كُنتَ فِي غَفْلَةٍ مِّنْ هَٰذَا", meaning: "You were certainly heedless of this", explanation: "Address to person - now veils removed", verseRef: "50:22" },
        { term: "فَكَشَفْنَا عَنكَ غِطَاءَكَ", meaning: "So We have removed from you your cover", explanation: "Veil of worldly distraction lifted", verseRef: "50:22" },
        { term: "فَبَصَرُكَ الْيَوْمَ حَدِيدٌ", meaning: "So your sight today is sharp", explanation: "Vision becomes piercing - seeing all reality", verseRef: "50:22" },
        { term: "وَقَالَ قَرِينُهُ هَٰذَا مَا لَدَيَّ عَتِيدٌ", meaning: "And his companion says: This is what I have ready", explanation: "Recording angel presents prepared record", verseRef: "50:23" }
      ]
    },

    hellDescription: {
      name: "Description of Hell",
      nameArabic: "وصف جهنم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "أَلْقِيَا فِي جَهَنَّمَ كُلَّ كَفَّارٍ عَنِيدٍ", meaning: "Throw into Hell every obstinate disbeliever", explanation: "Command to cast stubborn deniers into Hell", verseRef: "50:24" },
        { term: "مَّنَّاعٍ لِّلْخَيْرِ مُعْتَدٍ مُّرِيبٍ", meaning: "Preventer of good, transgressor, doubter", explanation: "Qualities of Hell's inhabitants", verseRef: "50:25" },
        { term: "الَّذِي جَعَلَ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: "Who made with Allah another deity", explanation: "Polytheism as cardinal sin", verseRef: "50:26" },
        { term: "فَأَلْقِيَاهُ فِي الْعَذَابِ الشَّدِيدِ", meaning: "So throw him into severe punishment", explanation: "Command repeated for emphasis", verseRef: "50:26" },
        { term: "قَالَ قَرِينُهُ رَبَّنَا مَا أَطْغَيْتُهُ", meaning: "His companion (devil) says: Our Lord, I did not make him transgress", explanation: "Satan disclaims responsibility", verseRef: "50:27" },
        { term: "وَلَٰكِن كَانَ فِي ضَلَالٍ بَعِيدٍ", meaning: "But he was in extreme error", explanation: "Devil blames the person's own misguidance", verseRef: "50:27" },
        { term: "لَا تَخْتَصِمُوا لَدَيَّ", meaning: "Do not dispute before Me", explanation: "Allah silences arguments between sinner and devil", verseRef: "50:28" },
        { term: "مَا يُبَدَّلُ الْقَوْلُ لَدَيَّ", meaning: "The word will not be changed with Me", explanation: "Allah's decree is final, unchangeable", verseRef: "50:29" },
        { term: "وَمَا أَنَا بِظَلَّامٍ لِّلْعَبِيدِ", meaning: "And I am not unjust to servants", explanation: "Allah is absolutely just - none wronged", verseRef: "50:29" },
        { term: "يَوْمَ نَقُولُ لِجَهَنَّمَ هَلِ امْتَلَأْتِ", meaning: "Day We say to Hell: Are you filled?", explanation: "Hell is addressed directly", verseRef: "50:30" },
        { term: "وَتَقُولُ هَلْ مِن مَّزِيدٍ", meaning: "And it says: Are there more?", explanation: "Hell's insatiable hunger for sinners", verseRef: "50:30" }
      ]
    },

    paradiseDescription: {
      name: "Description of Paradise",
      nameArabic: "وصف الجنة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "وَأُزْلِفَتِ الْجَنَّةُ لِلْمُتَّقِينَ غَيْرَ بَعِيدٍ", meaning: "And Paradise is brought near to the righteous, not far", explanation: "Paradise made close, within reach", verseRef: "50:31" },
        { term: "هَٰذَا مَا تُوعَدُونَ", meaning: "This is what you were promised", explanation: "Promise of Paradise fulfilled", verseRef: "50:32" },
        { term: "لِكُلِّ أَوَّابٍ حَفِيظٍ", meaning: "For everyone returning and preserving", explanation: "Those who repeatedly return to Allah and guard His limits", verseRef: "50:32" },
        { term: "مَّنْ خَشِيَ الرَّحْمَـٰنَ بِالْغَيْبِ", meaning: "Who feared the Most Merciful unseen", explanation: "Fear of Allah without seeing Him - true faith", verseRef: "50:33" },
        { term: "وَجَاءَ بِقَلْبٍ مُّنِيبٍ", meaning: "And came with a heart returning (to Allah)", explanation: "Repentant, devoted heart", verseRef: "50:33" },
        { term: "ادْخُلُوهَا بِسَلَامٍ", meaning: "Enter it in peace", explanation: "Welcome into Paradise with peace", verseRef: "50:34" },
        { term: "ذَٰلِكَ يَوْمُ الْخُلُودِ", meaning: "That is the Day of Eternity", explanation: "Paradise is eternal, never-ending", verseRef: "50:34" },
        { term: "لَهُم مَّا يَشَاءُونَ فِيهَا", meaning: "They will have whatever they wish therein", explanation: "Every desire fulfilled in Paradise", verseRef: "50:35" },
        { term: "وَلَدَيْنَا مَزِيدٌ", meaning: "And with Us is more", explanation: "Even beyond wishes - seeing Allah's Face", verseRef: "50:35" }
      ]
    },

    lessonsFromHistory: {
      name: "Lessons from History",
      nameArabic: "العبر من التاريخ",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "وَكَمْ أَهْلَكْنَا قَبْلَهُم مِّن قَرْنٍ", meaning: "How many generations We destroyed before them", explanation: "Countless nations destroyed for denial", verseRef: "50:36" },
        { term: "هُمْ أَشَدُّ مِنْهُم بَطْشًا", meaning: "They were greater than them in power", explanation: "More powerful nations were still destroyed", verseRef: "50:36" },
        { term: "فَنَقَّبُوا فِي الْبِلَادِ", meaning: "And they explored throughout the lands", explanation: "They searched everywhere but found no escape", verseRef: "50:36" },
        { term: "هَلْ مِن مَّحِيصٍ", meaning: "Is there any escape?", explanation: "Rhetorical - no escape from Allah's decree", verseRef: "50:36" },
        { term: "إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ", meaning: "Indeed in that is a reminder", explanation: "History serves as admonition", verseRef: "50:37" },
        { term: "لِمَن كَانَ لَهُ قَلْبٌ", meaning: "For whoever has a heart", explanation: "A receptive, understanding heart", verseRef: "50:37" },
        { term: "أَوْ أَلْقَى السَّمْعَ وَهُوَ شَهِيدٌ", meaning: "Or listens while present (in mind)", explanation: "Attentive listener with full awareness", verseRef: "50:37" }
      ]
    },

    sixDayCreation: {
      name: "Six-Day Creation",
      nameArabic: "خلق الستة أيام",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "وَلَقَدْ خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ", meaning: "And We created the heavens and earth", explanation: "Allah created the universe", verseRef: "50:38" },
        { term: "وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ", meaning: "And what is between them in six days", explanation: "Six periods of creation", verseRef: "50:38" },
        { term: "وَمَا مَسَّنَا مِن لُّغُوبٍ", meaning: "And no fatigue touched Us", explanation: "Refutes claims that Allah rested - He never tires", verseRef: "50:38" }
      ]
    },

    propheticGuidance: {
      name: "Guidance to the Prophet",
      nameArabic: "توجيهات للنبي",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "فَاصْبِرْ عَلَىٰ مَا يَقُولُونَ", meaning: "So be patient over what they say", explanation: "Command to endure their mockery", verseRef: "50:39" },
        { term: "وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ", meaning: "And glorify with praise of your Lord before sunrise", explanation: "Fajr prayer time", verseRef: "50:39" },
        { term: "وَقَبْلَ الْغُرُوبِ", meaning: "And before sunset", explanation: "Asr prayer time", verseRef: "50:39" },
        { term: "وَمِنَ اللَّيْلِ فَسَبِّحْهُ", meaning: "And from the night glorify Him", explanation: "Night prayers - Tahajjud", verseRef: "50:40" },
        { term: "وَأَدْبَارَ السُّجُودِ", meaning: "And after prostrations", explanation: "Remembrance after prayers, or Maghrib/Isha", verseRef: "50:40" }
      ]
    },

    dayOfCalling: {
      name: "The Day of Calling",
      nameArabic: "يوم النداء",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "وَاسْتَمِعْ يَوْمَ يُنَادِ الْمُنَادِ مِن مَّكَانٍ قَرِيبٍ", meaning: "And listen for the Day when the caller calls from a nearby place", explanation: "Angel Israfil calls from Jerusalem's Rock", verseRef: "50:41" },
        { term: "يَوْمَ يَسْمَعُونَ الصَّيْحَةَ بِالْحَقِّ", meaning: "Day they hear the blast in truth", explanation: "The true, undeniable resurrection call", verseRef: "50:42" },
        { term: "ذَٰلِكَ يَوْمُ الْخُرُوجِ", meaning: "That is the Day of Emergence", explanation: "Day of coming out from graves", verseRef: "50:42" }
      ]
    },

    divineControl: {
      name: "Divine Control Over Life and Death",
      nameArabic: "سيطرة الله على الحياة والموت",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "إِنَّا نَحْنُ نُحْيِي وَنُمِيتُ", meaning: "Indeed, We give life and cause death", explanation: "Allah alone controls life and death", verseRef: "50:43" },
        { term: "وَإِلَيْنَا الْمَصِيرُ", meaning: "And to Us is the destination", explanation: "All return to Allah ultimately", verseRef: "50:43" },
        { term: "يَوْمَ تَشَقَّقُ الْأَرْضُ عَنْهُمْ سِرَاعًا", meaning: "Day the earth splits away from them rapidly", explanation: "Earth opens quickly releasing the dead", verseRef: "50:44" },
        { term: "ذَٰلِكَ حَشْرٌ عَلَيْنَا يَسِيرٌ", meaning: "That is a gathering easy for Us", explanation: "Resurrection is effortless for Allah", verseRef: "50:44" }
      ]
    },

    finalConsole: {
      name: "Final Consolation",
      nameArabic: "التسلية الأخيرة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "نَّحْنُ أَعْلَمُ بِمَا يَقُولُونَ", meaning: "We are most knowing of what they say", explanation: "Allah knows all their denial and mockery", verseRef: "50:45" },
        { term: "وَمَا أَنتَ عَلَيْهِم بِجَبَّارٍ", meaning: "And you are not over them a tyrant", explanation: "Prophet cannot force belief", verseRef: "50:45" },
        { term: "فَذَكِّرْ بِالْقُرْآنِ مَن يَخَافُ وَعِيدِ", meaning: "So remind by the Quran whoever fears My warning", explanation: "Quran is for those who heed warnings - final instruction", verseRef: "50:45" }
      ]
    }
  },

  relationships: [
    { from: "قرآن مجيد", to: "فذكر بالقرآن", type: "bookend", description: "Surah begins and ends with the Quran's role" },
    { from: "أقرب من حبل الوريد", to: "رقيب عتيد", type: "expansion", description: "Allah's nearness manifests through recording angels" },
    { from: "سكرة الموت", to: "يوم الخروج", type: "sequence", description: "Death leads inevitably to resurrection" },
    { from: "أحيينا به بلدة ميتا", to: "كذلك الخروج", type: "analogy", description: "Rain reviving dead land proves resurrection" },
    { from: "هل من مزيد", to: "ولدينا مزيد", type: "contrast", description: "Hell asks for more sinners; Paradise offers more rewards" },
    { from: "كفار عنيد", to: "أواب حفيظ", type: "contrast", description: "Obstinate disbeliever vs. repeatedly repentant" },
    { from: "ما تنقص الأرض", to: "كتاب حفيظ", type: "complementary", description: "Allah knows decomposed bodies and records all" },
    { from: "كنت في غفلة", to: "بصرك اليوم حديد", type: "transformation", description: "Heedlessness transformed to piercing clarity" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening Oath", verses: "50:1-5", description: "Qaf, glorious Quran, disbelievers' wonder at resurrection" },
      { stage: 2, theme: "Creation Signs", verses: "50:6-11", description: "Sky, earth, rain, dead land revived as resurrection proof" },
      { stage: 3, theme: "Destroyed Nations", verses: "50:12-14", description: "Nine destroyed peoples as warning" },
      { stage: 4, theme: "First Creation Argument", verses: "50:15", description: "If Allah created once, He can recreate" },
      { stage: 5, theme: "Divine Nearness", verses: "50:16-18", description: "Closer than jugular vein, recording angels" },
      { stage: 6, theme: "Death to Judgment", verses: "50:19-23", description: "Death's intoxication, trumpet, driver and witness" },
      { stage: 7, theme: "Hell Scene", verses: "50:24-30", description: "Sinners cast in, Satan disclaims, Hell's hunger" },
      { stage: 8, theme: "Paradise Scene", verses: "50:31-35", description: "Paradise brought near, eternal bliss, 'and more'" },
      { stage: 9, theme: "Historical Lessons", verses: "50:36-37", description: "Powerful nations destroyed, reminder for hearts" },
      { stage: 10, theme: "Divine Power", verses: "50:38", description: "Six-day creation without fatigue" },
      { stage: 11, theme: "Prophetic Guidance", verses: "50:39-44", description: "Patience, prayer times, Day of Emergence" },
      { stage: 12, theme: "Final Instruction", verses: "50:45", description: "Remind with Quran those who fear warning" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Guard your speech", how: "Every word is recorded by Raqib and 'Atid - speak only good", verse: "50:18" },
      { principle: "Remember Allah's nearness", how: "He is closer than your jugular vein - live with this awareness", verse: "50:16" },
      { principle: "Use creation for reflection", how: "Look at sky, earth, rain - all point to resurrection", verse: "50:6-11" },
      { principle: "Fear Allah in private", how: "Fear Him unseen (بالغيب) - this earns Paradise", verse: "50:33" },
      { principle: "Return to Allah repeatedly", how: "Be أواب - one who constantly returns in repentance", verse: "50:32" },
      { principle: "Establish regular prayer", how: "Before sunrise, before sunset, and at night", verse: "50:39-40" },
      { principle: "Learn from history", how: "Nations more powerful were destroyed - take heed", verse: "50:36" },
      { principle: "Use Quran for reminder", how: "It benefits those who fear Allah's warning", verse: "50:45" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Eid and Friday (سورة العيد والجمعة)",
    insight: "Prophet Muhammad (peace be upon him) used to recite Surah Qaf in the first rak'ah of Eid prayers and would regularly recite it from the minbar (pulpit) during Friday sermons - so frequently that Umm Hisham bint Harithah said she memorized it just from hearing the Prophet recite it every Friday (Sahih Muslim). Why this surah? Because its 45 verses contain the complete message of Islam in miniature: Allah's sovereignty and knowledge (v.16 - closer than jugular vein), accountability through recording angels (v.17-18), the reality of death (v.19), judgment with driver and witness (v.21), Hell for the obstinate (v.24-30), Paradise for the repentant (v.31-35), and lessons from destroyed nations (v.36). The phrase 'وَلَدَيْنَا مَزِيدٌ' (And with Us is more - v.35) refers according to scholars to the greatest reward in Paradise: seeing Allah's Noble Face. This surah was the Prophet's weekly and annual reminder to the Ummah of life's ultimate realities."
  },

  historicalContext: {
    note: "Surah Qaf is an early Makkan surah revealed when the Quraysh intensely denied resurrection. The surah's name comes from the mysterious letter 'Qaf' which opens it - some scholars link it to Mount Qaf (a cosmic mountain in Islamic cosmology), others to the word 'Quran' or Allah's attribute 'al-Qadir.' The nine destroyed nations mentioned (Noah's people, Ar-Rass, Thamud, 'Ad, Pharaoh, Lot's people, Aykah dwellers, Tubba's people) would have been partially known to the Arabs through oral traditions, making the warning immediately relevant. The surah's regular recitation in Friday and Eid prayers by the Prophet established it as a foundational text for Islamic congregational worship.",
    significantEvents: [
      { event: "Regular Friday recitation", description: "Prophet recited this surah so often on Fridays that companions memorized it from his sermons" },
      { event: "Eid prayer recitation", description: "Prophet would recite Qaf in the first rak'ah of both Eid al-Fitr and Eid al-Adha prayers" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "ق", example: "Opening letter", effect: "Muqatta'at - mysterious, attention-grabbing opening" },
      { feature: "حَبْلِ الْوَرِيدِ", example: "Jugular vein", effect: "Vivid anatomical image of Allah's nearness" },
      { feature: "رَقِيبٌ عَتِيدٌ", example: "Observer prepared", effect: "Two attributes creating sense of constant surveillance" },
      { feature: "سَائِقٌ وَشَهِيدٌ", example: "Driver and witness", effect: "Two roles - one compels, one testifies" },
      { feature: "هَلْ مِن مَّزِيدٍ", example: "Is there more?", effect: "Personification of Hell's insatiable appetite" },
      { feature: "وَلَدَيْنَا مَزِيدٌ", example: "And with Us is more", effect: "Echo and contrast - Paradise offers even more" },
      { feature: "كَلَّا", example: "No! (emphatic)", effect: "Strong negation/rebuttal (appears at v.4)" }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 78, name: "An-Naba", relationship: "Both focus on resurrection proofs and afterlife descriptions", type: "thematic_parallel" },
      { surah: 36, name: "Ya-Sin", relationship: "Both use creation as proof of resurrection", type: "thematic_parallel" },
      { surah: 67, name: "Al-Mulk", relationship: "Both describe Hell questioning and divine knowledge", type: "thematic_parallel" },
      { surah: 56, name: "Al-Waqi'ah", relationship: "Both detail Paradise and Hell scenes", type: "thematic_parallel" },
      { surah: 51, name: "Adh-Dhariyat", relationship: "Following surah, continues resurrection theme", type: "sequential_relationship" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "50:6", topic: "Flawless sky", note: "فُرُوج (rifts/cracks) - atmosphere's seamless protective layer" },
      { verse: "50:7", topic: "Mountains as anchors", note: "رَوَاسِي (firmly set) - mountains' role in tectonic stability" },
      { verse: "50:9-10", topic: "Water cycle", note: "Rain from sky producing crops and tall palms - hydrological cycle" },
      { verse: "50:16", topic: "Jugular vein proximity", note: "حَبْلِ الْوَرِيدِ - vital blood vessel, symbolizing intimate divine knowledge" }
    ]
  }
};

export default ONTOLOGY;
