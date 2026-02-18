/**
 * Surah At-Tur (52) - Ontology of Quranic Concepts
 * The Mount - 49 Ayahs, Makki
 * Theme: Divine oaths, punishment of deniers, Paradise bliss, Prophet's vindication
 */

export const ONTOLOGY = {
  surahId: 52,
  surahName: "At-Tur",
  surahNameArabic: "الطور",
  revelationType: "Makki",
  totalAyahs: 49,
  mainTheme: "Divine Oaths Affirming Judgment and Vindication of the Prophet",

  categories: {
    divineOaths: {
      name: "The Opening Oaths",
      nameArabic: "القسم الإلهي",
      color: "#8B5CF6",
      concepts: [
        { term: "وَالطُّورِ", meaning: "By the Mount", explanation: "Mount Sinai where Musa received revelation", verseRef: "52:1" },
        { term: "وَكِتَابٍ مَّسْطُورٍ", meaning: "And a Book inscribed", explanation: "The written scripture (Quran/Preserved Tablet)", verseRef: "52:2" },
        { term: "فِي رَقٍّ مَّنشُورٍ", meaning: "In parchment spread open", explanation: "The record unfolded and accessible", verseRef: "52:3" },
        { term: "وَالْبَيْتِ الْمَعْمُورِ", meaning: "And the House frequented", explanation: "The celestial Ka'bah visited by angels", verseRef: "52:4" },
        { term: "وَالسَّقْفِ الْمَرْفُوعِ", meaning: "And the roof raised high", explanation: "The sky/heavens as a canopy", verseRef: "52:5" },
        { term: "وَالْبَحْرِ الْمَسْجُورِ", meaning: "And the sea filled with fire", explanation: "The sea set ablaze on Day of Judgment", verseRef: "52:6" }
      ]
    },

    certaintyOfPunishment: {
      name: "Certainty of Punishment",
      nameArabic: "حتمية العذاب",
      color: "#EF4444",
      concepts: [
        { term: "إِنَّ عَذَابَ رَبِّكَ لَوَاقِعٌ", meaning: "Indeed, the punishment of your Lord will occur", explanation: "Subject of the oaths - punishment is certain", verseRef: "52:7" },
        { term: "مَّا لَهُ مِن دَافِعٍ", meaning: "Of it there is no preventer", explanation: "No one can ward off divine punishment", verseRef: "52:8" },
        { term: "يَوْمَ تَمُورُ السَّمَاءُ مَوْرًا", meaning: "On the Day the heaven will sway with motion", explanation: "Cosmic upheaval at Judgment", verseRef: "52:9" },
        { term: "وَتَسِيرُ الْجِبَالُ سَيْرًا", meaning: "And the mountains will pass on departing", explanation: "Mountains will move and crumble", verseRef: "52:10" }
      ]
    },

    punishmentOfDeniers: {
      name: "Punishment of Deniers",
      nameArabic: "عذاب المكذبين",
      color: "#F43F5E",
      concepts: [
        { term: "فَوَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ", meaning: "Then woe, that Day, to the deniers", explanation: "Declaration of doom for rejecters", verseRef: "52:11" },
        { term: "الَّذِينَ هُمْ فِي خَوْضٍ يَلْعَبُونَ", meaning: "Who are in [empty] discourse amusing themselves", explanation: "Those who mock and play with truth", verseRef: "52:12" },
        { term: "يَوْمَ يُدَعُّونَ إِلَىٰ نَارِ جَهَنَّمَ دَعًّا", meaning: "The Day they are thrust toward the fire of Hell with a [violent] thrust", explanation: "Forcefully pushed into Hell", verseRef: "52:13" },
        { term: "هَٰذِهِ النَّارُ الَّتِي كُنتُم بِهَا تُكَذِّبُونَ", meaning: "This is the Fire which you used to deny", explanation: "Confronted with what they denied", verseRef: "52:14" },
        { term: "أَفَسِحْرٌ هَٰذَا أَمْ أَنتُمْ لَا تُبْصِرُونَ", meaning: "Is this magic, or do you not see?", explanation: "Rhetorical rebuke of their denial", verseRef: "52:15" },
        { term: "اصْلَوْهَا فَاصْبِرُوا أَوْ لَا تَصْبِرُوا", meaning: "Burn in it; be patient or impatient", explanation: "No escape - patience or impatience equal", verseRef: "52:16" }
      ]
    },

    paradiseBliss: {
      name: "Paradise and Its Bliss",
      nameArabic: "نعيم الجنة",
      color: "#10B981",
      concepts: [
        { term: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَعِيمٍ", meaning: "Indeed, the righteous will be in gardens and pleasure", explanation: "Transition to rewards for the righteous", verseRef: "52:17" },
        { term: "فَاكِهِينَ بِمَا آتَاهُمْ رَبُّهُمْ", meaning: "Enjoying what their Lord has given them", explanation: "Delighting in divine gifts", verseRef: "52:18" },
        { term: "وَوَقَاهُمْ رَبُّهُمْ عَذَابَ الْجَحِيمِ", meaning: "And their Lord protected them from the punishment of Hellfire", explanation: "Saved from torment", verseRef: "52:18" },
        { term: "كُلُوا وَاشْرَبُوا هَنِيئًا", meaning: "Eat and drink in satisfaction", explanation: "Invitation to partake without worry", verseRef: "52:19" },
        { term: "مُتَّكِئِينَ عَلَىٰ سُرُرٍ مَّصْفُوفَةٍ", meaning: "Reclining on thrones lined up", explanation: "Luxurious seating in Paradise", verseRef: "52:20" },
        { term: "وَزَوَّجْنَاهُم بِحُورٍ عِينٍ", meaning: "And We will marry them to fair women with large eyes", explanation: "Companions in Paradise", verseRef: "52:20" }
      ]
    },

    familyReunion: {
      name: "Family Reunion in Paradise",
      nameArabic: "لحاق الذرية",
      color: "#3B82F6",
      concepts: [
        { term: "وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَانٍ", meaning: "And those who believed and whose descendants followed them in faith", explanation: "Believers and their faithful offspring", verseRef: "52:21" },
        { term: "أَلْحَقْنَا بِهِمْ ذُرِّيَّتَهُمْ", meaning: "We will join with them their descendants", explanation: "Families reunited in Paradise", verseRef: "52:21" },
        { term: "وَمَا أَلَتْنَاهُم مِّنْ عَمَلِهِم مِّن شَيْءٍ", meaning: "And We will not deprive them of anything of their deeds", explanation: "No reduction in rewards", verseRef: "52:21" },
        { term: "كُلُّ امْرِئٍ بِمَا كَسَبَ رَهِينٌ", meaning: "Every person is pledged for what he has earned", explanation: "Individual accountability", verseRef: "52:21" }
      ]
    },

    paradiseContinued: {
      name: "More Delights of Paradise",
      nameArabic: "المزيد من النعيم",
      color: "#22C55E",
      concepts: [
        { term: "وَأَمْدَدْنَاهُم بِفَاكِهَةٍ وَلَحْمٍ", meaning: "And We will provide them with fruit and meat", explanation: "Abundant food in Paradise", verseRef: "52:22" },
        { term: "مِّمَّا يَشْتَهُونَ", meaning: "From whatever they desire", explanation: "Whatever their hearts wish", verseRef: "52:22" },
        { term: "يَتَنَازَعُونَ فِيهَا كَأْسًا", meaning: "They will exchange a cup [of wine]", explanation: "Sharing drinks in fellowship", verseRef: "52:23" },
        { term: "لَّا لَغْوٌ فِيهَا وَلَا تَأْثِيمٌ", meaning: "No ill speech therein nor any sin", explanation: "Pure from idle talk and wrongdoing", verseRef: "52:23" },
        { term: "وَيَطُوفُ عَلَيْهِمْ غِلْمَانٌ لَّهُمْ", meaning: "And there will circulate among them young servants", explanation: "Attendants serving the believers", verseRef: "52:24" },
        { term: "كَأَنَّهُمْ لُؤْلُؤٌ مَّكْنُونٌ", meaning: "As if they were pearls well-protected", explanation: "Beautiful like hidden pearls", verseRef: "52:24" }
      ]
    },

    dialogueInParadise: {
      name: "Dialogue of Paradise Dwellers",
      nameArabic: "حوار أهل الجنة",
      color: "#6366F1",
      concepts: [
        { term: "وَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍ يَتَسَاءَلُونَ", meaning: "And they will approach one another, inquiring of each other", explanation: "Believers conversing together", verseRef: "52:25" },
        { term: "إِنَّا كُنَّا قَبْلُ فِي أَهْلِنَا مُشْفِقِينَ", meaning: "Indeed, we were previously among our families fearful", explanation: "They feared Allah in worldly life", verseRef: "52:26" },
        { term: "فَمَنَّ اللَّهُ عَلَيْنَا", meaning: "So Allah conferred favor upon us", explanation: "Gratitude for divine grace", verseRef: "52:27" },
        { term: "وَوَقَانَا عَذَابَ السَّمُومِ", meaning: "And protected us from the punishment of the Scorching Fire", explanation: "Saved from burning wind of Hell", verseRef: "52:27" },
        { term: "إِنَّا كُنَّا مِن قَبْلُ نَدْعُوهُ", meaning: "Indeed, we used to call upon Him before", explanation: "They supplicated to Allah in life", verseRef: "52:28" },
        { term: "إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ", meaning: "Indeed, He is the Beneficent, the Merciful", explanation: "Divine attributes of kindness and mercy", verseRef: "52:28" }
      ]
    },

    prophetVindication: {
      name: "Vindication of the Prophet",
      nameArabic: "تبرئة النبي",
      color: "#F59E0B",
      concepts: [
        { term: "فَذَكِّرْ فَمَا أَنتَ بِنِعْمَتِ رَبِّكَ بِكَاهِنٍ وَلَا مَجْنُونٍ", meaning: "So remind, for you are not, by favor of your Lord, a soothsayer or a madman", explanation: "Prophet is neither fortune-teller nor insane", verseRef: "52:29" },
        { term: "أَمْ يَقُولُونَ شَاعِرٌ", meaning: "Or do they say: A poet", explanation: "Rejecting accusation of being a poet", verseRef: "52:30" },
        { term: "نَّتَرَبَّصُ بِهِ رَيْبَ الْمَنُونِ", meaning: "For whom we await a turn of misfortune", explanation: "They wait hoping he will die", verseRef: "52:30" },
        { term: "قُلْ تَرَبَّصُوا فَإِنِّي مَعَكُم مِّنَ الْمُتَرَبِّصِينَ", meaning: "Say: Wait, for indeed I am, with you, among those who wait", explanation: "Counter-challenge to wait and see", verseRef: "52:31" }
      ]
    },

    refutingAccusations: {
      name: "Refuting Accusations",
      nameArabic: "دحض الاتهامات",
      color: "#EC4899",
      concepts: [
        { term: "أَمْ تَأْمُرُهُمْ أَحْلَامُهُم بِهَٰذَا", meaning: "Or do their minds command them to this?", explanation: "Is their reasoning so flawed?", verseRef: "52:32" },
        { term: "أَمْ هُمْ قَوْمٌ طَاغُونَ", meaning: "Or are they a transgressing people?", explanation: "Their rebellion causes denial", verseRef: "52:32" },
        { term: "أَمْ يَقُولُونَ تَقَوَّلَهُ", meaning: "Or do they say: He invented it?", explanation: "Accusation that he fabricated Quran", verseRef: "52:33" },
        { term: "بَل لَّا يُؤْمِنُونَ", meaning: "Rather, they do not believe", explanation: "Root cause is their disbelief", verseRef: "52:33" },
        { term: "فَلْيَأْتُوا بِحَدِيثٍ مِّثْلِهِ", meaning: "Then let them produce a statement like it", explanation: "Challenge to produce similar", verseRef: "52:34" }
      ]
    },

    rhetoricalQuestions: {
      name: "Rhetorical Questions",
      nameArabic: "الأسئلة الإنكارية",
      color: "#8B5CF6",
      concepts: [
        { term: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ", meaning: "Or were they created by nothing?", explanation: "Did they come from nothing?", verseRef: "52:35" },
        { term: "أَمْ هُمُ الْخَالِقُونَ", meaning: "Or were they the creators [of themselves]?", explanation: "Did they create themselves?", verseRef: "52:35" },
        { term: "أَمْ خَلَقُوا السَّمَاوَاتِ وَالْأَرْضَ", meaning: "Or did they create the heavens and the earth?", explanation: "Did they create the universe?", verseRef: "52:36" },
        { term: "بَل لَّا يُوقِنُونَ", meaning: "Rather, they are not certain", explanation: "They lack conviction", verseRef: "52:36" },
        { term: "أَمْ عِندَهُمْ خَزَائِنُ رَبِّكَ", meaning: "Or have they the treasuries of your Lord?", explanation: "Do they control divine treasures?", verseRef: "52:37" },
        { term: "أَمْ هُمُ الْمُصَيْطِرُونَ", meaning: "Or are they the controllers?", explanation: "Do they have authority over affairs?", verseRef: "52:37" }
      ]
    },

    moreQuestions: {
      name: "Further Challenges",
      nameArabic: "المزيد من التحديات",
      color: "#14B8A6",
      concepts: [
        { term: "أَمْ لَهُمْ سُلَّمٌ يَسْتَمِعُونَ فِيهِ", meaning: "Or have they a stairway [into heaven] upon which they listen?", explanation: "Do they have access to divine knowledge?", verseRef: "52:38" },
        { term: "فَلْيَأْتِ مُسْتَمِعُهُم بِسُلْطَانٍ مُّبِينٍ", meaning: "Then let their listener produce a clear authority", explanation: "Challenge to bring proof", verseRef: "52:38" },
        { term: "أَمْ لَهُ الْبَنَاتُ وَلَكُمُ الْبَنُونَ", meaning: "Or has He daughters while you have sons?", explanation: "Refuting their attribution of daughters to Allah", verseRef: "52:39" },
        { term: "أَمْ تَسْأَلُهُمْ أَجْرًا فَهُم مِّن مَّغْرَمٍ مُّثْقَلُونَ", meaning: "Or do you ask them a payment so they are burdened with debt?", explanation: "Prophet asks no payment", verseRef: "52:40" },
        { term: "أَمْ عِندَهُمُ الْغَيْبُ فَهُمْ يَكْتُبُونَ", meaning: "Or have they [knowledge of] the unseen, so they write?", explanation: "Do they know the hidden?", verseRef: "52:41" }
      ]
    },

    plottersExposed: {
      name: "Plotters Exposed",
      nameArabic: "فضح المتآمرين",
      color: "#EF4444",
      concepts: [
        { term: "أَمْ يُرِيدُونَ كَيْدًا", meaning: "Or do they intend a plan?", explanation: "They scheme against the Prophet", verseRef: "52:42" },
        { term: "فَالَّذِينَ كَفَرُوا هُمُ الْمَكِيدُونَ", meaning: "But those who disbelieve - they are the object of a plan", explanation: "Their plot turns against them", verseRef: "52:42" },
        { term: "أَمْ لَهُمْ إِلَٰهٌ غَيْرُ اللَّهِ", meaning: "Or have they a deity other than Allah?", explanation: "Rhetorical - there is no other god", verseRef: "52:43" },
        { term: "سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ", meaning: "Exalted is Allah above whatever they associate", explanation: "Allah is far above their shirk", verseRef: "52:43" }
      ]
    },

    stubborness: {
      name: "Stubbornness of Deniers",
      nameArabic: "عناد المكذبين",
      color: "#F97316",
      concepts: [
        { term: "وَإِن يَرَوْا كِسْفًا مِّنَ السَّمَاءِ سَاقِطًا", meaning: "And if they saw a fragment from the sky falling", explanation: "Even if they saw sky falling", verseRef: "52:44" },
        { term: "يَقُولُوا سَحَابٌ مَّرْكُومٌ", meaning: "They would say: Piled-up clouds", explanation: "They would deny even that", verseRef: "52:44" },
        { term: "فَذَرْهُمْ حَتَّىٰ يُلَاقُوا يَوْمَهُمُ الَّذِي فِيهِ يُصْعَقُونَ", meaning: "So leave them until they meet their Day in which they will be struck insensible", explanation: "Leave them to face Judgment", verseRef: "52:45" },
        { term: "يَوْمَ لَا يُغْنِي عَنْهُمْ كَيْدُهُمْ شَيْئًا", meaning: "The Day their plan will not avail them at all", explanation: "Their schemes will be useless", verseRef: "52:46" },
        { term: "وَلَا هُمْ يُنصَرُونَ", meaning: "Nor will they be helped", explanation: "No help will come to them", verseRef: "52:46" }
      ]
    },

    punishmentBeforeJudgment: {
      name: "Punishment Before Judgment",
      nameArabic: "العذاب قبل القيامة",
      color: "#DC2626",
      concepts: [
        { term: "وَإِنَّ لِلَّذِينَ ظَلَمُوا عَذَابًا دُونَ ذَٰلِكَ", meaning: "And indeed, for those who do wrong is a punishment before that", explanation: "Worldly punishment before Hereafter", verseRef: "52:47" },
        { term: "وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ", meaning: "But most of them do not know", explanation: "Most are unaware of consequences", verseRef: "52:47" }
      ]
    },

    finalCommand: {
      name: "Final Command to the Prophet",
      nameArabic: "الأمر الأخير للنبي",
      color: "#10B981",
      concepts: [
        { term: "وَاصْبِرْ لِحُكْمِ رَبِّكَ", meaning: "And be patient for the decision of your Lord", explanation: "Command to be patient", verseRef: "52:48" },
        { term: "فَإِنَّكَ بِأَعْيُنِنَا", meaning: "For indeed, you are in Our eyes", explanation: "Under divine protection and care", verseRef: "52:48" },
        { term: "وَسَبِّحْ بِحَمْدِ رَبِّكَ حِينَ تَقُومُ", meaning: "And glorify your Lord with praise when you arise", explanation: "Praise Allah when standing for prayer", verseRef: "52:48" },
        { term: "وَمِنَ اللَّيْلِ فَسَبِّحْهُ", meaning: "And in [a part of] the night also glorify Him", explanation: "Night worship and dhikr", verseRef: "52:49" },
        { term: "وَإِدْبَارَ النُّجُومِ", meaning: "And at the retreat of the stars", explanation: "At dawn when stars fade", verseRef: "52:49" }
      ]
    }
  },

  relationships: [
    { from: "Divine Oaths", to: "Certainty of Punishment", type: "affirmation", description: "Five oaths confirm punishment is coming" },
    { from: "Mount Sinai", to: "Revelation", type: "symbolism", description: "Mount connects to divine communication" },
    { from: "Deniers", to: "Hellfire", type: "consequence", description: "Mockery leads to thrust into Fire" },
    { from: "Righteous", to: "Paradise", type: "reward", description: "Taqwa leads to gardens and pleasure" },
    { from: "Family Faith", to: "Reunion", type: "blessing", description: "Believing families joined in Paradise" },
    { from: "Fear in Dunya", to: "Safety in Akhirah", type: "transformation", description: "Worldly fear leads to eternal security" },
    { from: "Accusation", to: "Vindication", type: "refutation", description: "Prophet cleared of all false claims" },
    { from: "Rhetorical Questions", to: "Divine Authority", type: "proof", description: "Questions expose disbelievers' irrationality" },
    { from: "Plotting", to: "Backfiring", type: "irony", description: "Schemers become the schemed against" },
    { from: "Patience", to: "Divine Care", type: "command", description: "Be patient - you are under Allah's watch" }
  ],

  thematicFlow: {
    title: "From Divine Oaths to Divine Protection",
    stages: [
      { stage: 1, theme: "Divine Oaths", verses: "52:1-6", description: "Five solemn oaths by sacred objects" },
      { stage: 2, theme: "Punishment Certain", verses: "52:7-10", description: "Subject of oaths - punishment will occur" },
      { stage: 3, theme: "Doom of Deniers", verses: "52:11-16", description: "Woe to those who mocked - thrust into Fire" },
      { stage: 4, theme: "Paradise Bliss", verses: "52:17-24", description: "Gardens, food, drink, companions for righteous" },
      { stage: 5, theme: "Paradise Dialogue", verses: "52:25-28", description: "Believers reflect on Allah's mercy" },
      { stage: 6, theme: "Prophet Vindicated", verses: "52:29-34", description: "Not a soothsayer, madman, or poet" },
      { stage: 7, theme: "Rhetorical Questions", verses: "52:35-43", description: "Series of questions exposing deniers" },
      { stage: 8, theme: "Stubborn Denial", verses: "52:44-46", description: "They would deny even falling sky" },
      { stage: 9, theme: "Final Commands", verses: "52:47-49", description: "Be patient, glorify Allah day and night" }
    ]
  },

  oathAnalysis: {
    title: "The Five Oaths of At-Tur",
    oaths: [
      { arabic: "وَالطُّورِ", object: "Mount Tur (Sinai)", significance: "Sacred mountain of Musa's revelation", verseRef: "52:1" },
      { arabic: "وَكِتَابٍ مَّسْطُورٍ فِي رَقٍّ مَّنشُورٍ", object: "Inscribed Book", significance: "Divine scripture/Preserved Tablet", verseRef: "52:2-3" },
      { arabic: "وَالْبَيْتِ الْمَعْمُورِ", object: "Frequented House", significance: "Celestial Ka'bah visited by angels", verseRef: "52:4" },
      { arabic: "وَالسَّقْفِ الْمَرْفُوعِ", object: "Raised Canopy", significance: "The sky held without pillars", verseRef: "52:5" },
      { arabic: "وَالْبَحْرِ الْمَسْجُورِ", object: "Sea Filled", significance: "Sea that will burn on Judgment Day", verseRef: "52:6" }
    ],
    subject: "إِنَّ عَذَابَ رَبِّكَ لَوَاقِعٌ - The punishment of your Lord will certainly occur",
    rhetoricalFunction: "Multiple oaths intensify certainty of the message"
  },

  rhetoricalQuestionAnalysis: {
    title: "Series of Am Questions (أَمْ)",
    questions: [
      { arabic: "أَمْ تَأْمُرُهُمْ أَحْلَامُهُم", question: "Do their minds command this?", implication: "Their reasoning is faulty", verseRef: "52:32" },
      { arabic: "أَمْ يَقُولُونَ تَقَوَّلَهُ", question: "Did he invent it?", implication: "Challenge to produce similar", verseRef: "52:33-34" },
      { arabic: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ", question: "Created from nothing?", implication: "Must have a Creator", verseRef: "52:35" },
      { arabic: "أَمْ هُمُ الْخَالِقُونَ", question: "Did they create themselves?", implication: "Impossible - requires external Creator", verseRef: "52:35" },
      { arabic: "أَمْ خَلَقُوا السَّمَاوَاتِ وَالْأَرْضَ", question: "Did they create heavens and earth?", implication: "Obviously not", verseRef: "52:36" },
      { arabic: "أَمْ عِندَهُمْ خَزَائِنُ رَبِّكَ", question: "Do they have Allah's treasuries?", implication: "They control nothing", verseRef: "52:37" },
      { arabic: "أَمْ هُمُ الْمُصَيْطِرُونَ", question: "Are they in control?", implication: "Allah alone controls all affairs", verseRef: "52:37" },
      { arabic: "أَمْ لَهُمْ سُلَّمٌ", question: "Do they have a stairway?", implication: "No access to divine realm", verseRef: "52:38" },
      { arabic: "أَمْ لَهُ الْبَنَاتُ وَلَكُمُ الْبَنُونَ", question: "He has daughters, you sons?", implication: "Absurd attribution refuted", verseRef: "52:39" },
      { arabic: "أَمْ عِندَهُمُ الْغَيْبُ", question: "Do they have the unseen?", implication: "Only Allah knows ghayb", verseRef: "52:41" },
      { arabic: "أَمْ يُرِيدُونَ كَيْدًا", question: "Do they plot?", implication: "Their plot will fail", verseRef: "52:42" },
      { arabic: "أَمْ لَهُمْ إِلَٰهٌ غَيْرُ اللَّهِ", question: "Is there another god?", implication: "None - glorify Allah", verseRef: "52:43" }
    ],
    rhetoricalFunction: "Each question is answered implicitly with 'No' - exposing irrationality of denial"
  },

  practicalApplication: {
    applications: [
      { principle: "Fear Allah while in safety", how: "Be mindful before calamity strikes - like believers who feared while with families", verse: "52:26" },
      { principle: "Call upon Allah constantly", how: "Maintain supplication - it leads to Paradise", verse: "52:28" },
      { principle: "Glorify at specific times", how: "Praise Allah when arising, at night, and dawn", verse: "52:48-49" },
      { principle: "Be patient with criticism", how: "Face accusations as Prophet did - you are under Allah's protection", verse: "52:48" },
      { principle: "Trust Allah's plan", how: "Schemers will be schemed against", verse: "52:42" },
      { principle: "Reflect on creation", how: "Ask: Who created you? This leads to faith", verse: "52:35-36" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "وَالطُّورِ", pattern: "Oath particle و + definite noun", effect: "Solemn oath formula" },
      { feature: "لَوَاقِعٌ", pattern: "Emphatic lam + active participle", effect: "Certainty - will definitely occur" },
      { feature: "تَمُورُ", pattern: "Form I verb", meaning: "To sway, shake violently", effect: "Vivid cosmic imagery" },
      { feature: "يُدَعُّونَ", pattern: "Passive form IV", meaning: "To be pushed violently", effect: "Forceful thrust into Hell" },
      { feature: "أَمْ", pattern: "Interrogative particle", effect: "Disjunctive questions creating logical chain" },
      { feature: "الْمَكِيدُونَ", pattern: "Passive participle", meaning: "Those who are plotted against", effect: "Reversal - plotters become victims" },
      { feature: "بِأَعْيُنِنَا", pattern: "Prepositional phrase", meaning: "Under Our eyes/care", effect: "Divine protection and watchfulness" }
    ]
  },

  historicalContext: {
    revelationPeriod: "Makkan period, middle phase",
    occasion: "Revealed when the Prophet faced intense accusations of being a soothsayer, madman, and poet. The surah vindicates him through divine testimony and challenges deniers with logical questions they cannot answer.",
    note: "The term 'Al-Bayt al-Ma'mur' (Frequented House) is mentioned only here. The Prophet saw it during Isra and Mi'raj - a celestial structure above Ka'bah where 70,000 angels enter daily for worship and never return (different angels each day). This connects earthly and heavenly worship."
  },

  uniqueInsight: {
    title: "The Logical Chain of Questions (أَمْ...أَمْ...أَمْ)",
    insight: "Verses 35-43 contain a remarkable logical sequence of 12+ rhetorical questions using 'Am' (أَمْ), each building on the previous. This is one of the most intensive questioning passages in the Quran. Starting from basic ontological questions (Were you created from nothing? Did you create yourselves?) to theological ones (Do you have God's treasures? Is there another god?), each question implicitly demands 'No' as the answer. The cumulative effect demolishes every possible excuse for disbelief. This technique, called 'Al-Istifham al-Inkari' (rhetorical negation), proves Tawhid through pure reason. The final verse (52:43) declares glorification of Allah above all they associate - the logical conclusion of this devastating argument.",
    arabicTerm: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ",
    rootMeaning: "خ-ل-ق (to create) - central to the argument",
    keyAyah: 35
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 51, name: "Adh-Dhariyat", relationship: "Previous surah, also begins with oaths and discusses Judgment", type: "sequential_thematic" },
      { surah: 53, name: "An-Najm", relationship: "Following surah, continues defending Prophet's revelation", type: "sequential_thematic" },
      { surah: 56, name: "Al-Waqi'ah", relationship: "Both describe Paradise bliss in detail", type: "thematic_parallel" },
      { surah: 77, name: "Al-Mursalat", relationship: "Similar refrain structure warning deniers", type: "thematic_parallel" },
      { surah: 55, name: "Ar-Rahman", relationship: "Both detail rewards of Paradise", type: "thematic_parallel" },
      { surah: 78, name: "An-Naba", relationship: "Also uses rhetorical questions to prove resurrection", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
