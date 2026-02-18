/**
 * Surah Al-Qamar (54) - Ontology of Quranic Concepts
 * The Moon - 55 Ayahs, Makki
 * Theme: Moon splitting miracle, destroyed nations, Quran made easy
 */

export const ONTOLOGY = {
  surahId: 54,
  surahName: "Al-Qamar",
  surahNameArabic: "القمر",
  revelationType: "Makki",
  totalAyahs: 55,

  categories: {
    moonSplitting: {
      name: "The Moon Splitting",
      nameArabic: "انشقاق القمر",
      color: "#8B5CF6",
      concepts: [
        { term: "اقْتَرَبَتِ السَّاعَةُ", meaning: "The Hour has drawn near", explanation: "Opening declaration - Day of Judgment approaches", verseRef: "54:1" },
        { term: "وَانشَقَّ الْقَمَرُ", meaning: "And the moon has split", explanation: "Miraculous sign shown to Quraysh at Prophet's time", verseRef: "54:1" },
        { term: "سِحْرٌ مُّسْتَمِرٌّ", meaning: "Passing magic", explanation: "Disbelievers dismissed the miracle as sorcery", verseRef: "54:2" },
        { term: "وَكَذَّبُوا وَاتَّبَعُوا أَهْوَاءَهُمْ", meaning: "They denied and followed their desires", explanation: "Pattern of rejection despite clear signs", verseRef: "54:3" }
      ]
    },

    refrain1: {
      name: "Warning Refrain",
      nameArabic: "التحذير المتكرر",
      color: "#EF4444",
      concepts: [
        {
          term: "فَكَيْفَ كَانَ عَذَابِي وَنُذُرِ",
          meaning: "So how was My punishment and warning?",
          explanation: "Repeated 4 times (v.16, 18, 21, 30) - rhetorical question after each nation's destruction",
          verseRefs: ["54:16", "54:18", "54:21", "54:30"],
          rhetoricalPurpose: "Invites reflection on consequences of denial"
        }
      ]
    },

    refrain2: {
      name: "Quran Made Easy",
      nameArabic: "تيسير القرآن",
      color: "#10B981",
      concepts: [
        {
          term: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
          meaning: "And We have made the Quran easy for remembrance, so is there anyone who will remember?",
          explanation: "Repeated 4 times (v.17, 22, 32, 40) - Divine facilitation of guidance",
          verseRefs: ["54:17", "54:22", "54:32", "54:40"],
          rhetoricalPurpose: "Encouragement and challenge - Quran is accessible to all who seek"
        }
      ]
    },

    peopleOfNuh: {
      name: "People of Nuh (Noah)",
      nameArabic: "قوم نوح",
      color: "#3B82F6",
      concepts: [
        { term: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ", meaning: "Before them the people of Noah denied", explanation: "First example of destroyed nations", verseRef: "54:9" },
        { term: "فَكَذَّبُوا عَبْدَنَا", meaning: "They denied Our servant", explanation: "Rejected Prophet Nuh despite centuries of preaching", verseRef: "54:9" },
        { term: "وَقَالُوا مَجْنُونٌ وَازْدُجِرَ", meaning: "And said: A madman, and he was repelled", explanation: "Insults and rejection", verseRef: "54:9" },
        { term: "فَفَتَحْنَا أَبْوَابَ السَّمَاءِ بِمَاءٍ مُّنْهَمِرٍ", meaning: "So We opened the gates of heaven with pouring water", explanation: "The Great Flood", verseRef: "54:11" },
        { term: "وَفَجَّرْنَا الْأَرْضَ عُيُونًا", meaning: "And caused the earth to burst with springs", explanation: "Water from above and below", verseRef: "54:12" },
        { term: "وَحَمَلْنَاهُ عَلَىٰ ذَاتِ أَلْوَاحٍ وَدُسُرٍ", meaning: "And We carried him on [a ship] of planks and nails", explanation: "The Ark - simple but effective", verseRef: "54:13" },
        { term: "تَجْرِي بِأَعْيُنِنَا", meaning: "Sailing under Our observation", explanation: "Divine protection of the believers", verseRef: "54:14" }
      ]
    },

    peopleOfAad: {
      name: "People of 'Aad",
      nameArabic: "قوم عاد",
      color: "#F59E0B",
      concepts: [
        { term: "كَذَّبَتْ عَادٌ", meaning: "'Aad denied", explanation: "Second destroyed nation - powerful civilization", verseRef: "54:18" },
        { term: "رِيحًا صَرْصَرًا", meaning: "A screaming wind", explanation: "Instrument of their destruction", verseRef: "54:19" },
        { term: "فِي يَوْمِ نَحْسٍ مُّسْتَمِرٍّ", meaning: "On a day of misfortune, continuous", explanation: "Unrelenting calamity", verseRef: "54:19" },
        { term: "تَنزِعُ النَّاسَ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ مُّنقَعِرٍ", meaning: "Extracting people as if they were trunks of uprooted palm trees", explanation: "Vivid imagery of destruction", verseRef: "54:20" }
      ]
    },

    peopleOfThamud: {
      name: "People of Thamud",
      nameArabic: "قوم ثمود",
      color: "#EC4899",
      concepts: [
        { term: "كَذَّبَتْ ثَمُودُ بِالنُّذُرِ", meaning: "Thamud denied the warnings", explanation: "Third destroyed nation", verseRef: "54:23" },
        { term: "أَبَشَرًا مِّنَّا وَاحِدًا نَّتَّبِعُهُ", meaning: "Is it one human from among us that we should follow?", explanation: "Arrogance - rejecting human messenger", verseRef: "54:24" },
        { term: "إِنَّا مُرْسِلُو النَّاقَةِ فِتْنَةً لَّهُمْ", meaning: "Indeed, We are sending the she-camel as trial for them", explanation: "The miraculous she-camel test", verseRef: "54:27" },
        { term: "فَنَادَوْا صَاحِبَهُمْ فَتَعَاطَىٰ فَعَقَرَ", meaning: "But they called their companion, and he dared and hamstrung [her]", explanation: "Their fatal crime", verseRef: "54:29" },
        { term: "صَيْحَةً وَاحِدَةً", meaning: "A single blast", explanation: "Swift and complete destruction", verseRef: "54:31" },
        { term: "فَكَانُوا كَهَشِيمِ الْمُحْتَظِرِ", meaning: "And they became like dry twig fragments of an [animal] pen", explanation: "Reduced to nothing", verseRef: "54:31" }
      ]
    },

    peopleOfLut: {
      name: "People of Lut (Lot)",
      nameArabic: "قوم لوط",
      color: "#6366F1",
      concepts: [
        { term: "كَذَّبَتْ قَوْمُ لُوطٍ بِالنُّذُرِ", meaning: "The people of Lot denied the warnings", explanation: "Fourth destroyed nation", verseRef: "54:33" },
        { term: "إِنَّا أَرْسَلْنَا عَلَيْهِمْ حَاصِبًا", meaning: "Indeed, We sent upon them a storm of stones", explanation: "Pelted with stones from sky", verseRef: "54:34" },
        { term: "إِلَّا آلَ لُوطٍ ۖ نَّجَّيْنَاهُم بِسَحَرٍ", meaning: "Except the family of Lot - We saved them before dawn", explanation: "Believers rescued", verseRef: "54:34" },
        { term: "وَلَقَدْ رَاوَدُوهُ عَن ضَيْفِهِ", meaning: "And they had demanded from him his guests", explanation: "Their shameless crime", verseRef: "54:37" },
        { term: "فَطَمَسْنَا أَعْيُنَهُمْ", meaning: "So We blinded their eyes", explanation: "Immediate punishment", verseRef: "54:37" }
      ]
    },

    peopleOfPharaoh: {
      name: "People of Pharaoh",
      nameArabic: "آل فرعون",
      color: "#14B8A6",
      concepts: [
        { term: "وَلَقَدْ جَاءَ آلَ فِرْعَوْنَ النُّذُرُ", meaning: "And there certainly came to the people of Pharaoh warning", explanation: "Fifth example - most powerful empire", verseRef: "54:41" },
        { term: "كَذَّبُوا بِآيَاتِنَا كُلِّهَا", meaning: "They denied Our signs, all of them", explanation: "Complete rejection despite multiple miracles", verseRef: "54:42" },
        { term: "فَأَخَذْنَاهُمْ أَخْذَ عَزِيزٍ مُّقْتَدِرٍ", meaning: "So We seized them with a seizure of One Exalted in Might and Perfect in Ability", explanation: "Divine power demonstrated", verseRef: "54:42" }
      ]
    },

    warningToQuraysh: {
      name: "Warning to Quraysh",
      nameArabic: "تحذير قريش",
      color: "#F43F5E",
      concepts: [
        { term: "أَكُفَّارُكُمْ خَيْرٌ مِّنْ أُولَٰئِكُمْ", meaning: "Are your disbelievers better than those?", explanation: "Rhetorical - Quraysh are no better than destroyed nations", verseRef: "54:43" },
        { term: "أَمْ لَكُم بَرَاءَةٌ فِي الزُّبُرِ", meaning: "Or do you have immunity in previous scriptures?", explanation: "No special exemption", verseRef: "54:43" },
        { term: "أَمْ يَقُولُونَ نَحْنُ جَمِيعٌ مُّنتَصِرٌ", meaning: "Or do they say: We are an assembly supporting [each other]?", explanation: "False confidence in numbers", verseRef: "54:44" },
        { term: "سَيُهْزَمُ الْجَمْعُ وَيُوَلُّونَ الدُّبُرَ", meaning: "Their assembly will be defeated, and they will turn their backs", explanation: "Prophecy fulfilled at Badr", verseRef: "54:45" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#8B5CF6",
      concepts: [
        { term: "بَلِ السَّاعَةُ مَوْعِدُهُمْ", meaning: "But the Hour is their appointment", explanation: "Ultimate accountability awaits", verseRef: "54:46" },
        { term: "وَالسَّاعَةُ أَدْهَىٰ وَأَمَرُّ", meaning: "And the Hour is more disastrous and more bitter", explanation: "Worse than worldly punishment", verseRef: "54:46" },
        { term: "إِنَّ الْمُجْرِمِينَ فِي ضَلَالٍ وَسُعُرٍ", meaning: "Indeed, the criminals are in error and madness", explanation: "State of disbelievers", verseRef: "54:47" },
        { term: "يُسْحَبُونَ فِي النَّارِ عَلَىٰ وُجُوهِهِمْ", meaning: "The Day they are dragged into the Fire on their faces", explanation: "Humiliating punishment", verseRef: "54:48" }
      ]
    },

    divineDecree: {
      name: "Divine Decree",
      nameArabic: "القضاء الإلهي",
      color: "#22C55E",
      concepts: [
        { term: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ", meaning: "Indeed, all things We created with predestination", explanation: "Everything by divine measure", verseRef: "54:49" },
        { term: "وَمَا أَمْرُنَا إِلَّا وَاحِدَةٌ كَلَمْحٍ بِالْبَصَرِ", meaning: "And Our command is but one, like a glance of the eye", explanation: "Instantaneous divine will", verseRef: "54:50" }
      ]
    },

    rewardForRighteous: {
      name: "Reward for the Righteous",
      nameArabic: "جزاء المتقين",
      color: "#10B981",
      concepts: [
        { term: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ", meaning: "Indeed, the righteous will be among gardens and rivers", explanation: "Paradise promised", verseRef: "54:54" },
        { term: "فِي مَقْعَدِ صِدْقٍ", meaning: "In a seat of honor", explanation: "Place of truth and dignity", verseRef: "54:55" },
        { term: "عِندَ مَلِيكٍ مُّقْتَدِرٍ", meaning: "Near a Sovereign, Perfect in Ability", explanation: "Closeness to Allah - ultimate reward", verseRef: "54:55" }
      ]
    }
  },

  relationships: [
    { from: "انشقاق القمر", to: "تكذيب", type: "response", description: "Miracle shown, but denied" },
    { from: "قوم نوح", to: "الطوفان", type: "punishment", description: "Denial led to flood" },
    { from: "عاد", to: "الريح الصرصر", type: "punishment", description: "Denial led to devastating wind" },
    { from: "ثمود", to: "الصيحة", type: "punishment", description: "Killing she-camel led to blast" },
    { from: "قوم لوط", to: "حاصب", type: "punishment", description: "Sin led to stone rain" },
    { from: "آل فرعون", to: "الأخذ", type: "punishment", description: "Denial led to seizure" },
    { from: "تيسير القرآن", to: "التذكر", type: "purpose", description: "Made easy for remembrance" },
    { from: "المتقين", to: "جنات ونهر", type: "reward", description: "Righteousness leads to Paradise" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening Sign", verses: "54:1-8", description: "Moon splitting, denial, approaching Hour" },
      { stage: 2, theme: "Story of Nuh", verses: "54:9-17", description: "First nation destroyed by flood + first refrain" },
      { stage: 3, theme: "Story of 'Aad", verses: "54:18-22", description: "Destroyed by wind + second refrain" },
      { stage: 4, theme: "Story of Thamud", verses: "54:23-32", description: "She-camel, blast + third refrain" },
      { stage: 5, theme: "Story of Lut", verses: "54:33-40", description: "Stone rain + fourth refrain" },
      { stage: 6, theme: "Story of Pharaoh", verses: "54:41-42", description: "All signs rejected, seized" },
      { stage: 7, theme: "Warning to Quraysh", verses: "54:43-46", description: "No immunity, Hour awaits" },
      { stage: 8, theme: "Day of Judgment", verses: "54:47-53", description: "Criminals punished, divine decree" },
      { stage: 9, theme: "Paradise", verses: "54:54-55", description: "Righteous rewarded near Allah" }
    ]
  },

  refrainAnalysis: {
    warningRefrain: {
      arabic: "فَكَيْفَ كَانَ عَذَابِي وَنُذُرِ",
      transliteration: "fa-kayfa kāna ʿadhābī wa-nudhur",
      meaning: "So how was My punishment and warning?",
      occurrences: [16, 18, 21, 30],
      pattern: "Follows description of each nation's destruction",
      rhetoricalFunction: "Rhetorical question demanding reflection"
    },
    easeRefrain: {
      arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
      transliteration: "wa-laqad yassarnā al-qurʾāna lil-dhikri fa-hal min muddakir",
      meaning: "And We have made the Quran easy for remembrance, so is there anyone who will remember?",
      occurrences: [17, 22, 32, 40],
      pattern: "Follows each warning, offering hope",
      rhetoricalFunction: "Invitation to guidance after warning"
    }
  },

  practicalApplication: {
    applications: [
      { principle: "Heed warnings", how: "Don't dismiss clear signs like previous nations", verse: "54:2-3" },
      { principle: "Quran is accessible", how: "Study and memorize - Allah made it easy", verse: "54:17" },
      { principle: "Numbers don't protect", how: "Group consensus doesn't guarantee truth", verse: "54:44-45" },
      { principle: "Everything is decreed", how: "Trust Allah's plan, accept qadr", verse: "54:49" },
      { principle: "Seek Allah's nearness", how: "Goal is 'near the Sovereign' - work for it", verse: "54:55" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "انشَقَّ", pattern: "Form VII (انفعل)", effect: "Reflexive - moon split by itself (by Allah's command)" },
      { feature: "مُّسْتَمِرٌّ", pattern: "Form X participle", effect: "Continuous, ongoing" },
      { feature: "صَرْصَرًا", pattern: "Intensive form", effect: "Intensely cold/screaming wind" },
      { feature: "مُّدَّكِرٍ", pattern: "Form VIII participle", effect: "One who takes heed/remembers" },
      { feature: "مُّقْتَدِرٍ", pattern: "Form VIII participle", effect: "Fully capable, omnipotent" }
    ]
  },

  historicalContext: {
    note: "This Makki surah was revealed after the miraculous splitting of the moon, which the Prophet showed to the Quraysh as a sign. Despite witnessing this cosmic miracle, they dismissed it as magic. The surah then recounts five previous nations who similarly rejected clear signs and were destroyed: Nuh's people (flood), 'Aad (wind), Thamud (blast), Lut's people (stones), and Pharaoh's people (drowning). The prophecy in verse 45 about the 'assembly being defeated' was fulfilled at the Battle of Badr years later."
  },

  uniqueInsight: {
    title: "The Dual Refrain Structure",
    insight: "Al-Qamar uniquely employs two alternating refrains that create a powerful rhythm: 'How was My punishment?' follows destruction, while 'We made Quran easy' offers hope. This pattern (warning → ease, warning → ease) shows Allah's justice balanced with mercy. The surah moves from cosmic sign (moon) to historical signs (nations) to future sign (Day of Judgment), all unified by the question: will you take heed? The closing verses (54-55) reveal the ultimate goal - not just avoiding punishment, but achieving nearness to the Sovereign King."
  }
};

export default ONTOLOGY;
