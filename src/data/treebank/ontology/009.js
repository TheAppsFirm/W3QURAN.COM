/**
 * Surah At-Tawbah (9) - Ontology of Quranic Concepts
 * The Repentance / Bara'ah (Disavowal)
 *
 * Theme: Disavowal from polytheists, exposure of hypocrites, Tabuk expedition, divine forgiveness
 * Revelation: Medinan (one of the last surahs revealed)
 * Ayahs: 129
 *
 * UNIQUE: Only surah without Bismillah at the start
 * - Some say: continuation of Surah 8 (Al-Anfal)
 * - Some say: severe tone of disavowal incompatible with "mercy" opening
 * - Some say: the secret died with Uthman (RA) who compiled the Quran
 */

export const ONTOLOGY = {
  surahId: 9,
  surahName: "At-Tawbah",
  surahNameArabic: "التوبة",
  alternateNames: ["Bara'ah (البراءة) - The Disavowal", "Al-Fadiha (الفاضحة) - The Exposer", "Al-Muqashqisha - The Remover of Hypocrisy"],
  revelationType: "Madani",
  totalAyahs: 129,
  noBismillah: true,
  reasonNoBismillah: {
    en: "This is the only surah without Bismillah. Scholars give reasons: (1) It's a continuation of Al-Anfal, (2) Its severe tone of war and disavowal doesn't suit 'In the name of Allah, the Most Merciful', (3) The matter was not definitively settled before the Prophet's death.",
    ur: "یہ واحد سورت ہے جس میں بسم اللہ نہیں۔ علماء کی وجوہات: (1) سورۃ الانفال کا تسلسل ہے، (2) جنگ اور براءت کا سخت لہجہ 'رحمٰن رحیم' سے مناسب نہیں، (3) نبی ﷺ کی وفات سے پہلے یہ معاملہ طے نہیں ہوا۔"
  },

  categories: {
    // 1. DISAVOWAL FROM POLYTHEISTS (Bara'ah)
    disavowalFromPolytheists: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Disavowal from Polytheists",
      nameArabic: "البراءة من المشركين",
      description: "Declaration of immunity from treaty obligations with those who broke their covenants",
      verses: "9:1-12",
      concepts: [
        {
          term: "بَرَاءَةٌ مِّنَ اللَّهِ",
          meaning: "Disavowal from Allah",
          explanation: "Ultimate severance - Allah Himself declares freedom from polytheists who broke treaties",
          verseRef: "9:1"
        },
        {
          term: "فَسِيحُوا فِي الْأَرْضِ أَرْبَعَةَ أَشْهُرٍ",
          meaning: "Travel freely for four months",
          explanation: "Grace period: Dhul-Qa'dah, Dhul-Hijjah, Muharram, Safar - then treaties void",
          verseRef: "9:2"
        },
        {
          term: "أَذَانٌ مِّنَ اللَّهِ",
          meaning: "Announcement from Allah",
          explanation: "Public proclamation at Hajj by Ali (RA) - Allah and His Messenger are free from polytheists",
          verseRef: "9:3"
        },
        {
          term: "فَإِذَا انسَلَخَ الْأَشْهُرُ الْحُرُمُ",
          meaning: "When sacred months have passed",
          explanation: "After grace period, active measures against treaty-breakers begin",
          verseRef: "9:5"
        },
        {
          term: "فَاقْتُلُوا الْمُشْرِكِينَ",
          meaning: "Then kill the polytheists",
          explanation: "Verse of the Sword - but immediately followed by conditions and exceptions",
          verseRef: "9:5"
        },
        {
          term: "وَإِنْ أَحَدٌ مِّنَ الْمُشْرِكِينَ اسْتَجَارَكَ فَأَجِرْهُ",
          meaning: "If a polytheist seeks protection, protect him",
          explanation: "Even amid war declaration, protection (jiwar) is granted to those seeking it",
          verseRef: "9:6"
        },
        {
          term: "لَا أَيْمَانَ لَهُمْ",
          meaning: "No faith in their oaths",
          explanation: "Their covenants are worthless - they break them repeatedly",
          verseRef: "9:12"
        }
      ]
    },

    // 2. FIGHTING IN ALLAH'S CAUSE
    jihad: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Striving in Allah's Cause",
      nameArabic: "الجهاد في سبيل الله",
      description: "Commands regarding fighting those who violate treaties and oppress believers",
      verses: "9:13-24, 9:36-37, 9:38-42, 9:73, 9:81, 9:86-89",
      concepts: [
        {
          term: "أَلَا تُقَاتِلُونَ قَوْمًا نَّكَثُوا أَيْمَانَهُمْ",
          meaning: "Will you not fight those who broke their oaths?",
          explanation: "Rhetorical question - they broke treaties, expelled the Prophet, attacked first",
          verseRef: "9:13"
        },
        {
          term: "قَاتِلُوهُمْ يُعَذِّبْهُمُ اللَّهُ بِأَيْدِيكُمْ",
          meaning: "Fight them - Allah will punish them through your hands",
          explanation: "Believers as instruments of divine justice",
          verseRef: "9:14"
        },
        {
          term: "انفِرُوا خِفَافًا وَثِقَالًا",
          meaning: "March forth light and heavy",
          explanation: "Young or old, rich or poor, mounted or on foot - everyone must respond",
          verseRef: "9:41"
        },
        {
          term: "جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ",
          meaning: "Strive against disbelievers and hypocrites",
          explanation: "Two fronts: external (kuffar) and internal (munafiqeen)",
          verseRef: "9:73"
        },
        {
          term: "يُجَاهِدُونَ بِأَمْوَالِهِمْ وَأَنفُسِهِمْ",
          meaning: "Strive with wealth and lives",
          explanation: "Complete jihad: financial support AND physical participation",
          verseRef: "9:20"
        }
      ]
    },

    // 3. HYPOCRITES EXPOSED (Al-Munafiqun)
    hypocritesExposed: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Hypocrites Exposed",
      nameArabic: "فضيحة المنافقين",
      description: "This surah is called 'Al-Fadiha' (The Exposer) because it unveils hypocrites' true nature",
      verses: "9:42-57, 9:61-70, 9:73-78, 9:81-85, 9:94-98, 9:101-110",
      concepts: [
        {
          term: "لَوْ كَانَ عَرَضًا قَرِيبًا",
          meaning: "If it were easy gain",
          explanation: "Hypocrites only join when benefit is obvious and hardship minimal",
          verseRef: "9:42"
        },
        {
          term: "سَيَحْلِفُونَ بِاللَّهِ",
          meaning: "They will swear by Allah",
          explanation: "Characteristic: false oaths to appear sincere",
          verseRef: "9:42"
        },
        {
          term: "لَوِ اسْتَطَعْنَا لَخَرَجْنَا مَعَكُمْ",
          meaning: "If we could, we would go with you",
          explanation: "Excuses upon excuses - destroying their own souls with lies",
          verseRef: "9:42"
        },
        {
          term: "ائْذَن لِّي وَلَا تَفْتِنِّي",
          meaning: "Allow me to stay and don't put me to trial",
          explanation: "Al-Jadd's excuse: 'Roman women will tempt me' - while IN trial already",
          verseRef: "9:49"
        },
        {
          term: "قُلْ هَلْ تَرَبَّصُونَ بِنَا إِلَّا إِحْدَى الْحُسْنَيَيْنِ",
          meaning: "Do you await for us except one of two good things?",
          explanation: "Victory or martyrdom - believers win either way. Hypocrites cannot understand this",
          verseRef: "9:52"
        },
        {
          term: "لَا تُقْبَلُ مِنْهُمْ نَفَقَاتُهُمْ",
          meaning: "Their spending will not be accepted",
          explanation: "Charity without faith is rejected - inner corruption nullifies outer deeds",
          verseRef: "9:53-54"
        },
        {
          term: "مُذَبْذَبِينَ بَيْنَ ذَٰلِكَ",
          meaning: "Wavering between this and that",
          explanation: "Neither here nor there - their defining characteristic",
          verseRef: "9:57"
        },
        {
          term: "يَحْذَرُ الْمُنَافِقُونَ أَن تُنَزَّلَ",
          meaning: "Hypocrites fear a surah revealing them",
          explanation: "This very surah is their nightmare - exposing what's in their hearts",
          verseRef: "9:64"
        },
        {
          term: "قُلِ اسْتَهْزِئُوا",
          meaning: "Say: Go on mocking",
          explanation: "When caught, they claim 'just joking' - mocking Allah, verses, Messenger",
          verseRef: "9:65"
        },
        {
          term: "نَسُوا اللَّهَ فَنَسِيَهُمْ",
          meaning: "They forgot Allah, so He forgot them",
          explanation: "Divine abandonment - consequence of persistent hypocrisy",
          verseRef: "9:67"
        },
        {
          term: "الْمُنَافِقُونَ وَالْمُنَافِقَاتُ بَعْضُهُم مِّن بَعْضٍ",
          meaning: "Hypocrite men and women are of one another",
          explanation: "They form a united front of evil - commanding wrong, forbidding good",
          verseRef: "9:67"
        },
        {
          term: "فَرِحَ الْمُخَلَّفُونَ بِمَقْعَدِهِمْ",
          meaning: "Those who stayed behind rejoiced",
          explanation: "Happy to avoid Tabuk expedition - preferring comfort over obedience",
          verseRef: "9:81"
        },
        {
          term: "وَمِنَ الْأَعْرَابِ مَن يَتَّخِذُ مَا يُنفِقُ مَغْرَمًا",
          meaning: "Among Bedouins are those who consider spending a loss",
          explanation: "Give reluctantly, waiting for misfortune to strike believers",
          verseRef: "9:98"
        },
        {
          term: "مَسْجِدًا ضِرَارًا",
          meaning: "Mosque of harm (Masjid Dirar)",
          explanation: "Built to divide Muslims, spy post - ordered to be demolished",
          verseRef: "9:107"
        }
      ]
    },

    // 4. TABUK EXPEDITION
    tabukExpedition: {
      color: '#EF4444',
      icon: 'Users',
      name: "The Tabuk Campaign",
      nameArabic: "غزوة تبوك",
      description: "The difficult expedition in summer heat against the Byzantine army - test of faith",
      verses: "9:38-59, 9:81-83, 9:86-93, 9:117-122",
      concepts: [
        {
          term: "مَا لَكُمْ إِذَا قِيلَ لَكُمُ انفِرُوا",
          meaning: "What is with you when told to march forth?",
          explanation: "Rebuke for hesitation when called to Tabuk in extreme heat",
          verseRef: "9:38"
        },
        {
          term: "اثَّاقَلْتُمْ إِلَى الْأَرْضِ",
          meaning: "You clung heavily to the earth",
          explanation: "Attached to worldly comfort, reluctant to sacrifice",
          verseRef: "9:38"
        },
        {
          term: "إِلَّا تَنفِرُوا يُعَذِّبْكُمْ",
          meaning: "If you don't march, He will punish you",
          explanation: "Severe warning - this was obligatory, not optional",
          verseRef: "9:39"
        },
        {
          term: "سَاعَةِ الْعُسْرَةِ",
          meaning: "The hour of difficulty",
          explanation: "Tabuk = Jaysh al-Usra (Army of Hardship) - extreme conditions",
          verseRef: "9:117"
        },
        {
          term: "لَا يَظْمَأُونَ",
          meaning: "They do not suffer thirst",
          explanation: "No thirst, fatigue, hunger, or step in Allah's cause except rewarded",
          verseRef: "9:120"
        },
        {
          term: "وَلَا يَقْطَعُونَ وَادِيًا",
          meaning: "Nor do they cross a valley",
          explanation: "Every distance traveled is recorded for them",
          verseRef: "9:121"
        }
      ]
    },

    // 5. THE THREE WHO STAYED BEHIND
    threeWhoStayed: {
      color: '#F59E0B',
      icon: 'Star',
      name: "The Three Who Were Left Behind",
      nameArabic: "الثلاثة الذين خُلِّفوا",
      description: "Ka'b ibn Malik, Murarah ibn Rabi', Hilal ibn Umayyah - sincere believers who made a mistake",
      verses: "9:118-119",
      concepts: [
        {
          term: "وَعَلَى الثَّلَاثَةِ الَّذِينَ خُلِّفُوا",
          meaning: "And upon the three who were left behind",
          explanation: "Unlike hypocrites, they confessed honestly and awaited Allah's decree",
          verseRef: "9:118"
        },
        {
          term: "حَتَّىٰ إِذَا ضَاقَتْ عَلَيْهِمُ الْأَرْضُ بِمَا رَحُبَتْ",
          meaning: "Until the earth constrained them despite its vastness",
          explanation: "50 days of social boycott - even their wives avoided them",
          verseRef: "9:118"
        },
        {
          term: "وَضَاقَتْ عَلَيْهِمْ أَنفُسُهُمْ",
          meaning: "And their souls constrained them",
          explanation: "Internal anguish worse than external isolation",
          verseRef: "9:118"
        },
        {
          term: "ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوبُوا",
          meaning: "Then He turned to them so they could repent",
          explanation: "Allah's tawbah precedes their tawbah - He enables repentance",
          verseRef: "9:118"
        },
        {
          term: "كُونُوا مَعَ الصَّادِقِينَ",
          meaning: "Be with the truthful",
          explanation: "Key lesson: their honesty saved them while hypocrites' lies damned them",
          verseRef: "9:119"
        }
      ]
    },

    // 6. REPENTANCE AND FORGIVENESS
    repentance: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Repentance (Tawbah)",
      nameArabic: "التوبة والمغفرة",
      description: "Despite severity, the surah's core message is Allah's acceptance of repentance",
      verses: "9:3, 9:5, 9:11, 9:15, 9:27, 9:74, 9:102-106, 9:117-118",
      concepts: [
        {
          term: "فَإِن تُبْتُمْ فَهُوَ خَيْرٌ لَّكُمْ",
          meaning: "If you repent, it is better for you",
          explanation: "Door always open - even for worst enemies",
          verseRef: "9:3"
        },
        {
          term: "فَإِن تَابُوا وَأَقَامُوا الصَّلَاةَ",
          meaning: "If they repent and establish prayer",
          explanation: "Conditions of acceptance: tawbah + salah + zakah = brotherhood",
          verseRef: "9:11"
        },
        {
          term: "ثُمَّ يَتُوبُ اللَّهُ مِن بَعْدِ ذَٰلِكَ عَلَىٰ مَن يَشَاءُ",
          meaning: "Then Allah will accept repentance of whom He wills",
          explanation: "Post-battle mercy - even prisoners of war can be forgiven",
          verseRef: "9:27"
        },
        {
          term: "اعْتَرَفُوا بِذُنُوبِهِمْ",
          meaning: "They confessed their sins",
          explanation: "Acknowledging sin is first step - mixing good and bad deeds",
          verseRef: "9:102"
        },
        {
          term: "خَلَطُوا عَمَلًا صَالِحًا وَآخَرَ سَيِّئًا",
          meaning: "They mixed good deeds with bad",
          explanation: "Most people's state - not purely good or evil",
          verseRef: "9:102"
        },
        {
          term: "عَسَى اللَّهُ أَن يَتُوبَ عَلَيْهِمْ",
          meaning: "Perhaps Allah will accept their repentance",
          explanation: "'Asa' from Allah = certainty. His 'perhaps' is promise",
          verseRef: "9:102"
        },
        {
          term: "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ",
          meaning: "Take from their wealth charity to purify them",
          explanation: "Sadaqah as expiation - charity cleanses sin",
          verseRef: "9:103"
        },
        {
          term: "وَصَلِّ عَلَيْهِمْ",
          meaning: "And pray for them",
          explanation: "Prophet's dua provides tranquility - intercession for sinners",
          verseRef: "9:103"
        },
        {
          term: "إِنَّ صَلَاتَكَ سَكَنٌ لَّهُمْ",
          meaning: "Indeed your prayer is tranquility for them",
          explanation: "Prophetic prayer brings peace to troubled hearts",
          verseRef: "9:103"
        },
        {
          term: "التَّوَّابُ الرَّحِيمُ",
          meaning: "The Acceptor of Repentance, the Merciful",
          explanation: "Surah named 'Tawbah' ends emphasizing Allah's nature to forgive",
          verseRef: "9:104"
        }
      ]
    },

    // 7. PROHIBITIONS AND RULINGS
    prohibitionsRulings: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Legal Rulings",
      nameArabic: "الأحكام الشرعية",
      description: "Important Islamic laws established in this surah",
      verses: "9:28-29, 9:34-35, 9:36-37, 9:60, 9:80, 9:84, 9:113",
      concepts: [
        {
          term: "إِنَّمَا الْمُشْرِكُونَ نَجَسٌ",
          meaning: "Polytheists are impure",
          explanation: "Spiritual impurity - barred from Masjid al-Haram",
          verseRef: "9:28"
        },
        {
          term: "فَلَا يَقْرَبُوا الْمَسْجِدَ الْحَرَامَ",
          meaning: "They shall not approach the Sacred Mosque",
          explanation: "From this year onward (9 AH) - Makkah for Muslims only",
          verseRef: "9:28"
        },
        {
          term: "قَاتِلُوا الَّذِينَ لَا يُؤْمِنُونَ... حَتَّىٰ يُعْطُوا الْجِزْيَةَ",
          meaning: "Fight those who don't believe... until they pay jizyah",
          explanation: "Jizyah ruling: tax on non-Muslims under Islamic rule in exchange for protection",
          verseRef: "9:29"
        },
        {
          term: "يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ",
          meaning: "Those who hoard gold and silver",
          explanation: "Hoarding wealth without paying zakah - severe punishment",
          verseRef: "9:34"
        },
        {
          term: "يُكْوَىٰ بِهَا جِبَاهُهُمْ وَجُنُوبُهُمْ",
          meaning: "Their foreheads and sides will be branded",
          explanation: "Hoarded wealth becomes instruments of torture",
          verseRef: "9:35"
        },
        {
          term: "عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا",
          meaning: "Number of months is twelve",
          explanation: "Islamic lunar calendar established - four sacred months",
          verseRef: "9:36"
        },
        {
          term: "إِنَّمَا النَّسِيءُ زِيَادَةٌ فِي الْكُفْرِ",
          meaning: "Postponing sacred months is increase in disbelief",
          explanation: "Pre-Islamic practice of manipulating sacred calendar forbidden",
          verseRef: "9:37"
        },
        {
          term: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ...",
          meaning: "Charity is only for the poor...",
          explanation: "Eight categories of zakah recipients defined",
          verseRef: "9:60"
        },
        {
          term: "اسْتَغْفِرْ لَهُمْ أَوْ لَا تَسْتَغْفِرْ لَهُمْ",
          meaning: "Ask forgiveness for them or don't",
          explanation: "Istighfar for hypocrites is futile - even if 70 times",
          verseRef: "9:80"
        },
        {
          term: "وَلَا تُصَلِّ عَلَىٰ أَحَدٍ مِّنْهُم مَّاتَ أَبَدًا",
          meaning: "Never pray over any of them who dies",
          explanation: "After Ibn Ubayy's funeral - no janazah for known hypocrites",
          verseRef: "9:84"
        },
        {
          term: "مَا كَانَ لِلنَّبِيِّ... أَن يَسْتَغْفِرُوا لِلْمُشْرِكِينَ",
          meaning: "Not for Prophet to seek forgiveness for polytheists",
          explanation: "Even relatives - revealed after Ibrahim's death, Abraham's example cited",
          verseRef: "9:113"
        }
      ]
    },

    // 8. CATEGORIES OF ZAKAH RECIPIENTS
    zakahRecipients: {
      color: '#EF4444',
      icon: 'Users',
      name: "Eight Categories of Zakah",
      nameArabic: "مصارف الزكاة الثمانية",
      description: "The definitive verse on who can receive zakah",
      verses: "9:60",
      concepts: [
        { term: "الْفُقَرَاءِ", meaning: "The Poor (Fuqara)", explanation: "Those who have nothing or very little", verseRef: "9:60" },
        { term: "الْمَسَاكِينِ", meaning: "The Needy (Masakeen)", explanation: "Those who have some but not enough", verseRef: "9:60" },
        { term: "الْعَامِلِينَ عَلَيْهَا", meaning: "Those who collect it", explanation: "Administrators of zakah collection and distribution", verseRef: "9:60" },
        { term: "الْمُؤَلَّفَةِ قُلُوبُهُمْ", meaning: "Those whose hearts are to be reconciled", explanation: "New Muslims or potential converts needing support", verseRef: "9:60" },
        { term: "فِي الرِّقَابِ", meaning: "For freeing slaves", explanation: "To liberate slaves and captives", verseRef: "9:60" },
        { term: "الْغَارِمِينَ", meaning: "Those in debt", explanation: "People burdened with legitimate debts", verseRef: "9:60" },
        { term: "فِي سَبِيلِ اللَّهِ", meaning: "In Allah's cause", explanation: "Those striving for Islam - scholars, mujahideen, da'wah", verseRef: "9:60" },
        { term: "ابْنِ السَّبِيلِ", meaning: "The wayfarer", explanation: "Stranded travelers, even if wealthy at home", verseRef: "9:60" }
      ]
    },

    // 9. BELIEVERS' CHARACTERISTICS
    believersCharacteristics: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "True Believers",
      nameArabic: "صفات المؤمنين",
      description: "Qualities that distinguish sincere believers from hypocrites",
      verses: "9:20-22, 9:71-72, 9:88-89, 9:100, 9:111-112, 9:119",
      concepts: [
        {
          term: "الَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا",
          meaning: "Those who believed, emigrated, and strove",
          explanation: "Triple qualification: iman + hijrah + jihad = highest rank",
          verseRef: "9:20"
        },
        {
          term: "أَعْظَمُ دَرَجَةً عِندَ اللَّهِ",
          meaning: "Greater in degree with Allah",
          explanation: "These are the successful - above those who just provide water",
          verseRef: "9:20"
        },
        {
          term: "وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ",
          meaning: "Believing men and women are allies of one another",
          explanation: "Contrast to hypocrites - believers command good, forbid evil",
          verseRef: "9:71"
        },
        {
          term: "يَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ",
          meaning: "They command good and forbid evil",
          explanation: "Active righteousness, not passive - opposite of hypocrites' behavior",
          verseRef: "9:71"
        },
        {
          term: "السَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنصَارِ",
          meaning: "The forerunners - first of Muhajirin and Ansar",
          explanation: "First generation's special status - Allah is pleased with them",
          verseRef: "9:100"
        },
        {
          term: "رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ",
          meaning: "Allah is pleased with them and they with Him",
          explanation: "Mutual pleasure - highest achievement, guaranteed Paradise",
          verseRef: "9:100"
        },
        {
          term: "إِنَّ اللَّهَ اشْتَرَىٰ مِنَ الْمُؤْمِنِينَ أَنفُسَهُمْ",
          meaning: "Allah has purchased from believers their lives",
          explanation: "Divine transaction: souls and wealth for Paradise",
          verseRef: "9:111"
        },
        {
          term: "يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ فَيَقْتُلُونَ وَيُقْتَلُونَ",
          meaning: "They fight in Allah's cause - killing and being killed",
          explanation: "Promise in Torah, Gospel, Quran - ultimate commitment",
          verseRef: "9:111"
        },
        {
          term: "التَّائِبُونَ الْعَابِدُونَ الْحَامِدُونَ السَّائِحُونَ",
          meaning: "Repentant, worshipping, praising, traveling",
          explanation: "Nine qualities of true believers - verse 112",
          verseRef: "9:112"
        },
        {
          term: "الرَّاكِعُونَ السَّاجِدُونَ",
          meaning: "Bowing, prostrating",
          explanation: "Physical worship as identity markers",
          verseRef: "9:112"
        },
        {
          term: "الْآمِرُونَ بِالْمَعْرُوفِ وَالنَّاهُونَ عَنِ الْمُنكَرِ",
          meaning: "Commanding good, forbidding evil",
          explanation: "Social responsibility as faith requirement",
          verseRef: "9:112"
        },
        {
          term: "وَالْحَافِظُونَ لِحُدُودِ اللَّهِ",
          meaning: "And keepers of Allah's limits",
          explanation: "Final quality - guarding divine boundaries",
          verseRef: "9:112"
        }
      ]
    },

    // 10. PROPHET'S CONCERN AND COMPASSION
    propheticCompassion: {
      color: '#EF4444',
      icon: 'Users',
      name: "The Compassionate Prophet",
      nameArabic: "رحمة النبي صلى الله عليه وسلم",
      description: "Final verses describing Prophet Muhammad's care for his ummah",
      verses: "9:128-129",
      concepts: [
        {
          term: "لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ",
          meaning: "There has come to you a Messenger from among yourselves",
          explanation: "From your own people - understanding your condition",
          verseRef: "9:128"
        },
        {
          term: "عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ",
          meaning: "Grievous to him is your suffering",
          explanation: "Your hardship weighs heavily on him - he cannot bear your pain",
          verseRef: "9:128"
        },
        {
          term: "حَرِيصٌ عَلَيْكُم",
          meaning: "Anxious for you",
          explanation: "Deeply concerned for your guidance and salvation",
          verseRef: "9:128"
        },
        {
          term: "بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ",
          meaning: "To believers he is kind and merciful",
          explanation: "Ra'uf and Rahim - names usually for Allah, here for Prophet",
          verseRef: "9:128"
        },
        {
          term: "فَإِن تَوَلَّوْا فَقُلْ حَسْبِيَ اللَّهُ",
          meaning: "If they turn away, say: Allah is sufficient for me",
          explanation: "Ultimate tawakkul - regardless of people's response",
          verseRef: "9:129"
        },
        {
          term: "لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ",
          meaning: "No god except Him, upon Him I rely",
          explanation: "Tawheed and tawakkul - the two pillars",
          verseRef: "9:129"
        },
        {
          term: "رَبُّ الْعَرْشِ الْعَظِيمِ",
          meaning: "Lord of the Mighty Throne",
          explanation: "Surah ends affirming Allah's supreme sovereignty",
          verseRef: "9:129"
        }
      ]
    },

    // 11. PEOPLE OF THE BOOK
    peopleOfBook: {
      color: '#EF4444',
      icon: 'Users',
      name: "People of the Book",
      nameArabic: "أهل الكتاب",
      description: "Critique of distortions by Jews and Christians",
      verses: "9:29-35",
      concepts: [
        {
          term: "قَاتِلُوا الَّذِينَ لَا يُؤْمِنُونَ بِاللَّهِ وَلَا بِالْيَوْمِ الْآخِرِ",
          meaning: "Fight those who don't believe in Allah or Last Day",
          explanation: "Despite having scripture, they corrupted core beliefs",
          verseRef: "9:29"
        },
        {
          term: "وَقَالَتِ الْيَهُودُ عُزَيْرٌ ابْنُ اللَّهِ",
          meaning: "Jews say Uzair is son of Allah",
          explanation: "Extreme veneration of Ezra by some Jewish sects",
          verseRef: "9:30"
        },
        {
          term: "وَقَالَتِ النَّصَارَى الْمَسِيحُ ابْنُ اللَّهِ",
          meaning: "Christians say Messiah is son of Allah",
          explanation: "Core Christian belief refuted as borrowed paganism",
          verseRef: "9:30"
        },
        {
          term: "يُضَاهِئُونَ قَوْلَ الَّذِينَ كَفَرُوا مِن قَبْلُ",
          meaning: "They imitate the saying of disbelievers before",
          explanation: "Divine sonship concept borrowed from pagans",
          verseRef: "9:30"
        },
        {
          term: "اتَّخَذُوا أَحْبَارَهُمْ وَرُهْبَانَهُمْ أَرْبَابًا",
          meaning: "They took rabbis and monks as lords",
          explanation: "Obeying them in making halal haram and vice versa = worship",
          verseRef: "9:31"
        },
        {
          term: "يُرِيدُونَ أَن يُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ",
          meaning: "They want to extinguish Allah's light with their mouths",
          explanation: "Futile attempt - like blowing out the sun",
          verseRef: "9:32"
        },
        {
          term: "وَيَأْبَى اللَّهُ إِلَّا أَن يُتِمَّ نُورَهُ",
          meaning: "But Allah refuses except to perfect His light",
          explanation: "Islam will prevail despite all opposition",
          verseRef: "9:32-33"
        }
      ]
    }
  },

  relationships: [
    { from: "براءة", to: "تابوا", type: "contrast", description: "Disavowal balanced by path to reconciliation through repentance" },
    { from: "المنافقون", to: "المؤمنون", type: "contrast", description: "Hypocrites' traits vs. believers' traits - opposite in every way" },
    { from: "غزوة تبوك", to: "الثلاثة المخلفون", type: "sequence", description: "Expedition leads to trial of those who stayed" },
    { from: "خلطوا عملا", to: "خذ من أموالهم", type: "consequence", description: "Mixed deeds purified through charity" },
    { from: "نسوا الله", to: "فنسيهم", type: "consequence", description: "Divine forgetting follows human forgetting" },
    { from: "اشترى أنفسهم", to: "جنات", type: "transaction", description: "Divine purchase - souls for Paradise" },
    { from: "السابقون", to: "رضي الله عنهم", type: "result", description: "First believers earn eternal pleasure" },
    { from: "مسجد ضرار", to: "تخريبه", type: "consequence", description: "Mosque of harm ordered demolished" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Declaration of Disavowal", verses: "9:1-12", description: "Announcement of immunity from treaty obligations with polytheists who broke covenants" },
      { stage: 2, theme: "Command to Fight", verses: "9:13-24", description: "Order to fight those who broke oaths and attacked first" },
      { stage: 3, theme: "Polytheists Barred", verses: "9:25-28", description: "Victory of Hunayn, polytheists banned from Masjid al-Haram" },
      { stage: 4, theme: "People of the Book", verses: "9:29-35", description: "Critique of Jewish and Christian theological errors" },
      { stage: 5, theme: "Sacred Calendar", verses: "9:36-37", description: "Twelve months, four sacred, nasi' forbidden" },
      { stage: 6, theme: "Tabuk Expedition", verses: "9:38-59", description: "Call to march, hypocrites' excuses, believers' resolve" },
      { stage: 7, theme: "Zakah Distribution", verses: "9:60", description: "Eight categories of zakah recipients defined" },
      { stage: 8, theme: "Hypocrites Exposed", verses: "9:61-96", description: "Detailed exposure of hypocrites' characteristics and fate" },
      { stage: 9, theme: "Bedouin Arabs", verses: "9:97-99", description: "Two types: sincere and insincere among desert Arabs" },
      { stage: 10, theme: "First Generation", verses: "9:100", description: "Honor of Muhajirin and Ansar - Allah pleased with them" },
      { stage: 11, theme: "Mixed Deeds", verses: "9:101-106", description: "Those who mixed good and bad - hope through charity" },
      { stage: 12, theme: "Masjid Dirar", verses: "9:107-110", description: "Mosque built to harm Muslims - destroyed" },
      { stage: 13, theme: "Divine Transaction", verses: "9:111-112", description: "Allah buys believers' lives - nine qualities of believers" },
      { stage: 14, theme: "No Intercession for Mushrikeen", verses: "9:113-116", description: "Cannot seek forgiveness for polytheists, even relatives" },
      { stage: 15, theme: "The Three Forgiven", verses: "9:117-119", description: "Forgiveness of Army of Hardship and three who stayed" },
      { stage: 16, theme: "Rewards of Jihad", verses: "9:120-122", description: "Every hardship in Allah's cause is rewarded" },
      { stage: 17, theme: "Conclusion", verses: "9:123-129", description: "Final warnings to hypocrites, beautiful description of Prophet" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Honor commitments", how: "Break no treaty or covenant - Muslims must be trustworthy", verse: "9:4" },
      { principle: "Protection over politics", how: "Grant asylum even to enemies seeking knowledge of Islam", verse: "9:6" },
      { principle: "Wealth is test", how: "Don't let trade or comfort prevent responding to duty", verse: "9:24" },
      { principle: "Pay zakah properly", how: "Give to eight categories - don't hoard", verse: "9:60" },
      { principle: "Identify hypocrisy in self", how: "Check: Do I make excuses? Do I prefer comfort? Do I mock religion?", verse: "9:64-66" },
      { principle: "Command good", how: "Don't be passive - actively encourage righteousness", verse: "9:71" },
      { principle: "Be with the truthful", how: "Honesty even when it hurts - Ka'b's example", verse: "9:119" },
      { principle: "Every step counts", how: "No thirst, fatigue, or distance in Allah's cause goes unrewarded", verse: "9:120-121" }
    ]
  },

  uniqueInsight: {
    title: "Severity and Mercy Intertwined",
    insight: "This surah appears severe - no Bismillah, declarations of war, exposure of hypocrites. Yet it's named 'At-Tawbah' (Repentance), not 'Al-Bara'ah' (Disavowal). Why? Because its ultimate message is return to Allah. The three honest companions who stayed behind were forgiven after 50 days of social isolation - their truthfulness saved them while hypocrites' lies damned them. The verse 'خَلَطُوا عَمَلًا صَالِحًا وَآخَرَ سَيِّئًا' (they mixed good and bad deeds) describes most Muslims - and hope follows: 'عَسَى اللَّهُ أَن يَتُوبَ عَلَيْهِمْ'. Allah's 'perhaps' (عسى) is certainty. And the surah that began with disavowal ends with the most beautiful description of Prophet Muhammad: 'بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ' - Kind and Merciful to believers."
  },

  linguisticFeatures: {
    features: [
      { feature: "No Bismillah", example: "Begins directly with بَرَاءَةٌ", effect: "Severity of disavowal, uniqueness" },
      { feature: "إِحْدَى الْحُسْنَيَيْنِ", example: "Two goods: victory or martyrdom", effect: "Reframes apparent loss as win" },
      { feature: "نَسُوا... فَنَسِيَهُمْ", example: "They forgot... so He forgot them", effect: "Divine reciprocity in exact terms" },
      { feature: "رَءُوفٌ رَّحِيمٌ", example: "Kind, Merciful - divine names for Prophet", effect: "Highest honor for Messenger" },
      { feature: "حَسْبِيَ اللَّهُ", example: "Allah is sufficient for me", effect: "Ultimate expression of tawakkul" }
    ]
  },

  historicalContext: {
    revelationPeriod: "9 AH - among the last revealed, after Tabuk expedition",
    occasion: "Post-Hudaybiyyah treaty violations by Quraysh, preparation for Tabuk campaign",
    proclamation: "Ali ibn Abi Talib announced verses 1-12 at Hajj of 9 AH",
    significance: "Final major policy statements on polytheists, hypocrites, People of Book, and warfare"
  }
};

export default ONTOLOGY;
