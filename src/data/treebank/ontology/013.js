/**
 * Surah Ar-Ra'd (13) - Ontology of Quranic Concepts
 * The Thunder
 * Theme: Thunder glorifies Allah, signs in nature, truth vs falsehood
 * Revelation: Medinan (some say Makki)
 * Ayahs: 43
 */

export const ONTOLOGY = {
  surahId: 13,
  surahName: "Ar-Ra'd",
  surahNameArabic: "الرعد",
  revelationType: "Madani",
  totalAyahs: 43,

  categories: {
    divineRevelation: {
      color: '#EF4444',
      icon: 'Users',
      name: "Divine Revelation",
      nameArabic: "الوحي الإلهي",
      description: "The truth of Quranic revelation and its signs",
      concepts: [
        {
          term: "تِلْكَ آيَاتُ الْكِتَابِ",
          transliteration: "Tilka aayaatul-Kitaab",
          meaning: "These are verses of the Book",
          explanation: "Opening declaration establishing the divine origin of the Quran. The demonstrative 'tilka' (those) elevates the verses, indicating something sublime and established.",
          verseRef: "13:1"
        },
        {
          term: "وَالَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ الْحَقُّ",
          transliteration: "Walladhee unzila ilayka min Rabbika al-Haqq",
          meaning: "What has been revealed to you from your Lord is the truth",
          explanation: "Emphatic declaration that revelation is absolute truth (al-Haqq with definite article), not opinion or poetry.",
          verseRef: "13:1"
        },
        {
          term: "أَكْثَرَ النَّاسِ لَا يُؤْمِنُونَ",
          transliteration: "Aktharan-naasi laa yu'minoon",
          meaning: "Most people do not believe",
          explanation: "Despite clear signs, majority reject truth - a recurring Quranic theme about human obstinacy.",
          verseRef: "13:1"
        }
      ]
    },

    cosmicSigns: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Cosmic Signs of Allah",
      nameArabic: "آيات الله الكونية",
      description: "Signs in the heavens and earth proving Allah's existence and power",
      concepts: [
        {
          term: "رَفَعَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا",
          transliteration: "Rafa'as-samaawaati bi-ghayri 'amadin tarawnahaa",
          meaning: "Raised the heavens without pillars you can see",
          explanation: "The sky is held up by invisible forces (gravity, atmospheric pressure) - a sign of Allah's power that requires reflection.",
          verseRef: "13:2"
        },
        {
          term: "سَخَّرَ الشَّمْسَ وَالْقَمَرَ",
          transliteration: "Sakhkharash-shamsa wal-qamar",
          meaning: "Subjected the sun and moon",
          explanation: "Taskheer (subjection) implies these celestial bodies are servants, not gods - refuting polytheism.",
          verseRef: "13:2"
        },
        {
          term: "كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى",
          transliteration: "Kullun yajree li-ajalin musammaa",
          meaning: "Each runs for a specified term",
          explanation: "Cosmic bodies follow precise orbits and have appointed end times - nothing is eternal except Allah.",
          verseRef: "13:2"
        },
        {
          term: "يُدَبِّرُ الْأَمْرَ يُفَصِّلُ الْآيَاتِ",
          transliteration: "Yudabbirul-amra yufassilul-aayaat",
          meaning: "He arranges affairs, He details the signs",
          explanation: "Tadbeer (arrangement) shows divine management of universe; tafseel (detailing) refers to explaining signs clearly.",
          verseRef: "13:2"
        }
      ]
    },

    earthlySigns: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Signs in the Earth",
      nameArabic: "آيات الأرض",
      description: "Natural phenomena on earth as proofs of divine power",
      concepts: [
        {
          term: "مَدَّ الْأَرْضَ",
          transliteration: "Maddal-ard",
          meaning: "Spread out the earth",
          explanation: "The earth made flat enough for habitation, despite being spherical - suitable for human life.",
          verseRef: "13:3"
        },
        {
          term: "رَوَاسِيَ وَأَنْهَارًا",
          transliteration: "Rawaasiya wa anhaaraa",
          meaning: "Mountains and rivers",
          explanation: "Rawasiy (firm mountains) stabilize the earth; rivers provide water - infrastructure for life.",
          verseRef: "13:3"
        },
        {
          term: "مِن كُلِّ الثَّمَرَاتِ جَعَلَ فِيهَا زَوْجَيْنِ اثْنَيْنِ",
          transliteration: "Min kulith-thamaraati ja'ala feehaa zawjayni ithnayn",
          meaning: "From all fruits He made pairs",
          explanation: "Pairs in fruits (male/female plants, sweet/sour varieties) - reflects divine design and balance.",
          verseRef: "13:3"
        },
        {
          term: "يُغْشِي اللَّيْلَ النَّهَارَ",
          transliteration: "Yughshil-laylan-nahaar",
          meaning: "He covers the night with day",
          explanation: "The alternation of day and night - a constant sign of divine power and mercy.",
          verseRef: "13:3"
        },
        {
          term: "قِطَعٌ مُّتَجَاوِرَاتٌ",
          transliteration: "Qita'un mutajaawirat",
          meaning: "Adjacent tracts of land",
          explanation: "Different soil types side by side - some fertile, some barren - showing Allah's selective blessing.",
          verseRef: "13:4"
        },
        {
          term: "وَجَنَّاتٌ مِّنْ أَعْنَابٍ وَزَرْعٌ وَنَخِيلٌ",
          transliteration: "Wa jannaatun min a'naabin wa zar'un wa nakheel",
          meaning: "Gardens of grapes, crops, and palm trees",
          explanation: "Agricultural diversity from same water and soil - miracle of divine provision.",
          verseRef: "13:4"
        },
        {
          term: "يُسْقَىٰ بِمَاءٍ وَاحِدٍ وَنُفَضِّلُ بَعْضَهَا",
          transliteration: "Yusqaa bi-maa'in waahidin wa nufaddilu ba'dahaa",
          meaning: "Watered with same water, yet We favor some over others",
          explanation: "Same water produces different tastes and qualities - only divine will can explain this variety.",
          verseRef: "13:4"
        }
      ]
    },

    thunderAndNature: {
      color: '#10B981',
      icon: 'Book',
      name: "Thunder and Natural Phenomena",
      nameArabic: "الرعد والظواهر الطبيعية",
      description: "Thunder, lightning, and clouds as signs of divine glorification",
      concepts: [
        {
          term: "وَيُسَبِّحُ الرَّعْدُ بِحَمْدِهِ",
          transliteration: "Wa yusabbihur-ra'du bi-hamdih",
          meaning: "Thunder glorifies His praise",
          explanation: "The surah's namesake - thunder is not mere noise but tasbih (glorification) of Allah. Even nature worships the Creator.",
          verseRef: "13:13"
        },
        {
          term: "وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
          transliteration: "Wal-malaa'ikatu min kheefatih",
          meaning: "And the angels from fear of Him",
          explanation: "Angels also glorify from reverent fear - establishing hierarchy: thunder, angels, all glorify Allah.",
          verseRef: "13:13"
        },
        {
          term: "يُرْسِلُ الصَّوَاعِقَ",
          transliteration: "Yursiluus-sawaa'iq",
          meaning: "He sends thunderbolts",
          explanation: "Lightning strikes as divine power - can destroy whom Allah wills. Warning to doubters.",
          verseRef: "13:13"
        },
        {
          term: "يُجَادِلُونَ فِي اللَّهِ وَهُوَ شَدِيدُ الْمِحَالِ",
          transliteration: "Yujaadilona fillaahi wa huwa shadeedul-mihaal",
          meaning: "They dispute about Allah while He is severe in assault",
          explanation: "Warning to those who argue against Allah's existence or attributes - His power is overwhelming.",
          verseRef: "13:13"
        },
        {
          term: "هُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا",
          transliteration: "Huwalladhee yureekumul-barqa khawfan wa tama'aa",
          meaning: "He shows you lightning causing fear and hope",
          explanation: "Lightning evokes dual emotions: fear of strikes, hope for rain - reflecting divine wisdom.",
          verseRef: "13:12"
        },
        {
          term: "وَيُنشِئُ السَّحَابَ الثِّقَالَ",
          transliteration: "Wa yunshi'us-sahaabath-thiqaal",
          meaning: "And He produces heavy clouds",
          explanation: "Cloud formation - water cycle as sign. Heavy clouds carry tons of water, yet float - divine engineering.",
          verseRef: "13:12"
        }
      ]
    },

    truthVsFalsehood: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Truth vs Falsehood",
      nameArabic: "الحق والباطل",
      description: "The eternal struggle and ultimate victory of truth",
      concepts: [
        {
          term: "أَنزَلَ مِنَ السَّمَاءِ مَاءً فَسَالَتْ أَوْدِيَةٌ بِقَدَرِهَا",
          transliteration: "Anzala minas-samaa'i maa'an fa-saalat awdiyatun bi-qadarihaa",
          meaning: "He sent down water and valleys flowed according to their measure",
          explanation: "Beginning of the famous parable - water (truth) flows in valleys (hearts) according to their capacity.",
          verseRef: "13:17"
        },
        {
          term: "فَاحْتَمَلَ السَّيْلُ زَبَدًا رَّابِيًا",
          transliteration: "Fahtamalas-saylu zabadan raabiyaa",
          meaning: "The torrent carried rising foam",
          explanation: "Foam (batil/falsehood) rises to the surface, appears prominent, but is worthless.",
          verseRef: "13:17"
        },
        {
          term: "فَأَمَّا الزَّبَدُ فَيَذْهَبُ جُفَاءً",
          transliteration: "Fa-ammaz-zabadu fa-yadhhabu jufaa'aa",
          meaning: "As for the foam, it vanishes as waste",
          explanation: "Falsehood disappears like foam - seems big but has no substance or permanence.",
          verseRef: "13:17"
        },
        {
          term: "وَأَمَّا مَا يَنفَعُ النَّاسَ فَيَمْكُثُ فِي الْأَرْضِ",
          transliteration: "Wa ammaa maa yanfa'un-naasa fa-yamkuthu fil-ard",
          meaning: "But what benefits people remains in the earth",
          explanation: "Truth/benefit settles and remains - like water that nourishes and metal that is useful.",
          verseRef: "13:17"
        },
        {
          term: "كَذَٰلِكَ يَضْرِبُ اللَّهُ الْحَقَّ وَالْبَاطِلَ",
          transliteration: "Kadhaalika yadribullaahul-haqqa wal-baatil",
          meaning: "Thus Allah presents truth and falsehood",
          explanation: "Divine methodology - parables clarify abstract concepts; truth vs falsehood made tangible.",
          verseRef: "13:17"
        }
      ]
    },

    divineKnowledge: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Allah's Encompassing Knowledge",
      nameArabic: "علم الله الشامل",
      description: "Allah's complete knowledge of all seen and unseen",
      concepts: [
        {
          term: "اللَّهُ يَعْلَمُ مَا تَحْمِلُ كُلُّ أُنثَىٰ",
          transliteration: "Allaahu ya'lamu maa tahmilu kullu unthaa",
          meaning: "Allah knows what every female carries",
          explanation: "Divine knowledge of wombs - gender, health, destiny of unborn. Unseen to humans, known to Allah.",
          verseRef: "13:8"
        },
        {
          term: "وَمَا تَغِيضُ الْأَرْحَامُ وَمَا تَزْدَادُ",
          transliteration: "Wa maa tagheedularhaam wa maa tazdaad",
          meaning: "What the wombs lose and what they exceed",
          explanation: "Every detail of pregnancy - miscarriages, multiple births, premature/late births - all known.",
          verseRef: "13:8"
        },
        {
          term: "وَكُلُّ شَيْءٍ عِندَهُ بِمِقْدَارٍ",
          transliteration: "Wa kullu shay'in 'indahu bi-miqdaar",
          meaning: "Everything with Him is by measure",
          explanation: "Nothing random - every creation has precise specifications and appointed time.",
          verseRef: "13:8"
        },
        {
          term: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ",
          transliteration: "'Aalimul-ghaybi wash-shahaadah",
          meaning: "Knower of the unseen and witnessed",
          explanation: "Complete knowledge dichotomy - what's hidden from creation and what's apparent, both known to Allah.",
          verseRef: "13:9"
        },
        {
          term: "الْكَبِيرُ الْمُتَعَالِ",
          transliteration: "Al-Kabeerul-Muta'aal",
          meaning: "The Grand, the Exalted",
          explanation: "Two divine names: Al-Kabeer (Greatness in essence), Al-Muta'aal (Transcendently High above all).",
          verseRef: "13:9"
        },
        {
          term: "سَوَاءٌ مِّنكُم مَّنْ أَسَرَّ الْقَوْلَ وَمَن جَهَرَ بِهِ",
          transliteration: "Sawaa'un minkum man asarral-qawla wa man jahara bih",
          meaning: "Same to Him whether you conceal speech or publicize it",
          explanation: "Allah hears whispers and shouts equally - no hiding from divine knowledge.",
          verseRef: "13:10"
        }
      ]
    },

    guardianAngels: {
      color: '#EF4444',
      icon: 'Users',
      name: "Guardian Angels",
      nameArabic: "الملائكة الحفظة",
      description: "Angels assigned to protect and record human deeds",
      concepts: [
        {
          term: "لَهُ مُعَقِّبَاتٌ مِّن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ",
          transliteration: "Lahu mu'aqqibaatun min bayni yadayhi wa min khalfih",
          meaning: "For him are successive angels before and behind him",
          explanation: "Mu'aqqibat - angels who take turns protecting humans, front and back. Constant divine care.",
          verseRef: "13:11"
        },
        {
          term: "يَحْفَظُونَهُ مِنْ أَمْرِ اللَّهِ",
          transliteration: "Yahfadhoonahu min amrillah",
          meaning: "They guard him by Allah's command",
          explanation: "Protection by Allah's permission - angels guard until decree of harm arrives.",
          verseRef: "13:11"
        },
        {
          term: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ",
          transliteration: "Innallaaha laa yughayyiru maa bi-qawmin hattaa yughayyiroo maa bi-anfusihim",
          meaning: "Allah does not change a people's condition until they change themselves",
          explanation: "Foundational principle: Divine assistance requires human effort. Change starts from within.",
          verseRef: "13:11"
        },
        {
          term: "وَإِذَا أَرَادَ اللَّهُ بِقَوْمٍ سُوءًا فَلَا مَرَدَّ لَهُ",
          transliteration: "Wa idhaa araadallaahu bi-qawmin soo'an fa-laa maradda lah",
          meaning: "When Allah intends harm for a people, there is no repelling it",
          explanation: "Divine decree is unstoppable - angels cannot protect against Allah's decided punishment.",
          verseRef: "13:11"
        }
      ]
    },

    callToAllah: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The True Call and False Gods",
      nameArabic: "دعوة الحق والآلهة الباطلة",
      description: "Calling upon Allah vs calling upon false deities",
      concepts: [
        {
          term: "لَهُ دَعْوَةُ الْحَقِّ",
          transliteration: "Lahu da'watul-haqq",
          meaning: "To Him is the call of truth",
          explanation: "Only calling upon Allah is effective and real. Da'wat al-Haqq - the true invocation.",
          verseRef: "13:14"
        },
        {
          term: "وَالَّذِينَ يَدْعُونَ مِن دُونِهِ لَا يَسْتَجِيبُونَ لَهُم بِشَيْءٍ",
          transliteration: "Walladheena yad'oona min doonihi laa yastajeeboona lahum bi-shay'",
          meaning: "Those they call besides Him respond not at all",
          explanation: "Idols/false gods cannot answer prayers - fundamental argument against shirk.",
          verseRef: "13:14"
        },
        {
          term: "كَبَاسِطِ كَفَّيْهِ إِلَى الْمَاءِ لِيَبْلُغَ فَاهُ",
          transliteration: "Ka-baasiti kaffayhi ilal-maa'i li-yablugha faah",
          meaning: "Like one stretching hands to water to reach his mouth",
          explanation: "Powerful parable - idol worship is like trying to drink water by holding hands out. Water never reaches mouth.",
          verseRef: "13:14"
        },
        {
          term: "وَمَا هُوَ بِبَالِغِهِ",
          transliteration: "Wa maa huwa bi-baalighih",
          meaning: "But it will not reach him",
          explanation: "Futility emphasized - the water will never reach, prayers to idols will never be answered.",
          verseRef: "13:14"
        },
        {
          term: "وَمَا دُعَاءُ الْكَافِرِينَ إِلَّا فِي ضَلَالٍ",
          transliteration: "Wa maa du'aa'ul-kaafireena illaa fee dalaal",
          meaning: "And the prayer of disbelievers is only in error",
          explanation: "Prayers to false gods lead nowhere - lost, misdirected, futile.",
          verseRef: "13:14"
        }
      ]
    },

    universalProstration: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Universal Prostration",
      nameArabic: "السجود الكوني",
      description: "All creation prostrates to Allah willingly or unwillingly",
      concepts: [
        {
          term: "وَلِلَّهِ يَسْجُدُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ",
          transliteration: "Wa lillaahi yasjudu man fis-samaawaati wal-ard",
          meaning: "To Allah prostrates whoever is in the heavens and earth",
          explanation: "Universal sujood - all creation submits to divine law, whether consciously or by nature.",
          verseRef: "13:15"
        },
        {
          term: "طَوْعًا وَكَرْهًا",
          transliteration: "Taw'an wa karhaa",
          meaning: "Willingly and unwillingly",
          explanation: "Believers prostrate willingly; disbelievers' bodies still submit to natural laws (divine sujood).",
          verseRef: "13:15"
        },
        {
          term: "وَظِلَالُهُم بِالْغُدُوِّ وَالْآصَالِ",
          transliteration: "Wa dhilaaluhum bil-ghuduwwi wal-aasaal",
          meaning: "And their shadows in morning and afternoon",
          explanation: "Even shadows prostrate - they stretch and bow throughout the day, obeying divine commands.",
          verseRef: "13:15"
        }
      ]
    },

    tawheedArguments: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Arguments for Tawheed",
      nameArabic: "أدلة التوحيد",
      description: "Logical arguments establishing Allah as sole Creator and Lord",
      concepts: [
        {
          term: "قُلْ مَن رَّبُّ السَّمَاوَاتِ وَالْأَرْضِ قُلِ اللَّهُ",
          transliteration: "Qul man Rabbus-samaawaati wal-ardi qulillaah",
          meaning: "Say: Who is Lord of heavens and earth? Say: Allah",
          explanation: "Rhetorical question and answer - even polytheists admitted Allah as Creator (Rabb).",
          verseRef: "13:16"
        },
        {
          term: "أَفَاتَّخَذْتُم مِّن دُونِهِ أَوْلِيَاءَ",
          transliteration: "Afattakhadhtum min doonihi awliyaa'",
          meaning: "Have you then taken besides Him protectors?",
          explanation: "Logical inconsistency exposed - if Allah is Creator, why worship others?",
          verseRef: "13:16"
        },
        {
          term: "لَا يَمْلِكُونَ لِأَنفُسِهِمْ نَفْعًا وَلَا ضَرًّا",
          transliteration: "Laa yamlikoona li-anfusihim naf'an wa laa darraa",
          meaning: "They possess not for themselves benefit or harm",
          explanation: "False gods cannot even help themselves - how can they help worshippers?",
          verseRef: "13:16"
        },
        {
          term: "قُلْ هَلْ يَسْتَوِي الْأَعْمَىٰ وَالْبَصِيرُ",
          transliteration: "Qul hal yastawil-a'maa wal-baseer",
          meaning: "Say: Are the blind and seeing equal?",
          explanation: "Rhetorical comparison - believers see truth, disbelievers are spiritually blind.",
          verseRef: "13:16"
        },
        {
          term: "أَمْ هَلْ تَسْتَوِي الظُّلُمَاتُ وَالنُّورُ",
          transliteration: "Am hal tastawiz-zulumaatu wan-noor",
          meaning: "Or are darkness and light equal?",
          explanation: "Light (Islam/truth) vs darkness (kufr/falsehood) - fundamentally different.",
          verseRef: "13:16"
        }
      ]
    },

    rewardAndPunishment: {
      color: '#EF4444',
      icon: 'Users',
      name: "Reward and Punishment",
      nameArabic: "الثواب والعقاب",
      description: "Descriptions of Paradise for believers and Hell for disbelievers",
      concepts: [
        {
          term: "لِلَّذِينَ اسْتَجَابُوا لِرَبِّهِمُ الْحُسْنَىٰ",
          transliteration: "Lilladhenas-tajaaboo li-Rabbihimul-husnaa",
          meaning: "For those who responded to their Lord is the best reward",
          explanation: "Al-Husnaa - the ultimate good, Paradise, for those who answered Allah's call.",
          verseRef: "13:18"
        },
        {
          term: "وَالَّذِينَ لَمْ يَسْتَجِيبُوا لَهُ",
          transliteration: "Walladheena lam yastajeeboo lah",
          meaning: "Those who did not respond to Him",
          explanation: "Rejection of divine call leads to eternal consequences.",
          verseRef: "13:18"
        },
        {
          term: "لَوْ أَنَّ لَهُم مَّا فِي الْأَرْضِ جَمِيعًا وَمِثْلَهُ مَعَهُ لَافْتَدَوْا بِهِ",
          transliteration: "Law anna lahum maa fil-ardi jamee'an wa mithlahu ma'ahu laftadaw bih",
          meaning: "If they had all that is on earth and the like with it, they would ransom themselves",
          explanation: "Hypothetical ransom - entire earth's wealth doubled wouldn't save disbelievers.",
          verseRef: "13:18"
        },
        {
          term: "أُولَٰئِكَ لَهُمْ سُوءُ الْحِسَابِ",
          transliteration: "Ulaa'ika lahum soo'ul-hisaab",
          meaning: "Those will have a bad account",
          explanation: "Soo' al-hisab - terrible reckoning where every sin is counted without mercy.",
          verseRef: "13:18"
        },
        {
          term: "وَمَأْوَاهُمْ جَهَنَّمُ وَبِئْسَ الْمِهَادُ",
          transliteration: "Wa ma'waahum jahannam wa bi'sal-mihaad",
          meaning: "Their refuge is Hell, and wretched is the resting place",
          explanation: "Mihaad (bed/resting place) - ironic term for Hell, no rest there.",
          verseRef: "13:18"
        }
      ]
    },

    believersQualities: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Qualities of Believers",
      nameArabic: "صفات المؤمنين",
      description: "Characteristics that distinguish true believers",
      concepts: [
        {
          term: "أَفَمَن يَعْلَمُ أَنَّمَا أُنزِلَ إِلَيْكَ مِن رَّبِّكَ الْحَقُّ كَمَنْ هُوَ أَعْمَىٰ",
          transliteration: "Afaman ya'lamu annamaa unzila ilayka min Rabbikal-haqqu kaman huwa a'maa",
          meaning: "Is one who knows what is revealed to you is truth like one who is blind?",
          explanation: "Knowledge of truth creates fundamental distinction - seeing vs blind.",
          verseRef: "13:19"
        },
        {
          term: "إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ",
          transliteration: "Innamaa yatadhakkaru ulul-albaab",
          meaning: "Only those of understanding take heed",
          explanation: "Ulul-albaab - people of intellect/core understanding who reflect and remember.",
          verseRef: "13:19"
        },
        {
          term: "الَّذِينَ يُوفُونَ بِعَهْدِ اللَّهِ",
          transliteration: "Alladheena yoofoona bi-'ahdillaah",
          meaning: "Those who fulfill the covenant of Allah",
          explanation: "First quality: keeping promises to Allah - prayers, obligations, vows.",
          verseRef: "13:20"
        },
        {
          term: "وَلَا يَنقُضُونَ الْمِيثَاقَ",
          transliteration: "Wa laa yanqudoonal-meethaaq",
          meaning: "And do not break the contract",
          explanation: "Meethaq - firm covenant. Believers don't break divine or human agreements.",
          verseRef: "13:20"
        },
        {
          term: "وَالَّذِينَ يَصِلُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ",
          transliteration: "Walladheena yasiloona maa amarallaahu bihi an yoosal",
          meaning: "Those who join what Allah has ordered to be joined",
          explanation: "Silat ar-Rahm - maintaining family ties, community bonds, brotherhood.",
          verseRef: "13:21"
        },
        {
          term: "وَيَخْشَوْنَ رَبَّهُمْ وَيَخَافُونَ سُوءَ الْحِسَابِ",
          transliteration: "Wa yakhshawna Rabbahum wa yakhafoona soo'al-hisaab",
          meaning: "They fear their Lord and dread the bad account",
          explanation: "Dual fear: Khashyah (reverent fear of Allah), Khawf (fear of punishment).",
          verseRef: "13:21"
        },
        {
          term: "وَالَّذِينَ صَبَرُوا ابْتِغَاءَ وَجْهِ رَبِّهِمْ",
          transliteration: "Walladheena sabarub-tighaa'a wajhi Rabbihim",
          meaning: "Those who are patient seeking the face of their Lord",
          explanation: "Sabr with ikhlas - patience purely for Allah's sake, not for worldly praise.",
          verseRef: "13:22"
        },
        {
          term: "وَأَقَامُوا الصَّلَاةَ",
          transliteration: "Wa aqaamus-salaah",
          meaning: "And establish prayer",
          explanation: "Iqamat as-Salah - not just praying but establishing it properly and consistently.",
          verseRef: "13:22"
        },
        {
          term: "وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً",
          transliteration: "Wa anfaqoo mimmaa razaqnaahum sirran wa 'alaaniyah",
          meaning: "And spend from what We provided secretly and publicly",
          explanation: "Balanced giving - sometimes secret (more sincere), sometimes public (to encourage others).",
          verseRef: "13:22"
        },
        {
          term: "وَيَدْرَءُونَ بِالْحَسَنَةِ السَّيِّئَةَ",
          transliteration: "Wa yadra'oona bil-hasanatis-sayyi'ah",
          meaning: "And repel evil with good",
          explanation: "Highest character - respond to bad treatment with kindness, breaking cycles of revenge.",
          verseRef: "13:22"
        }
      ]
    },

    paradiseDescription: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Description of Paradise",
      nameArabic: "وصف الجنة",
      description: "The eternal reward for righteous believers",
      concepts: [
        {
          term: "أُولَٰئِكَ لَهُمْ عُقْبَى الدَّارِ",
          transliteration: "Ulaa'ika lahum 'uqbad-daar",
          meaning: "Those will have the ultimate home",
          explanation: "'Uqba - the final outcome, ultimate abode. Daar - permanent residence (Paradise).",
          verseRef: "13:22"
        },
        {
          term: "جَنَّاتُ عَدْنٍ يَدْخُلُونَهَا",
          transliteration: "Jannaatu 'adnin yadkhulonahaa",
          meaning: "Gardens of perpetual residence they will enter",
          explanation: "'Adn - eternal settlement. Not temporary visit but permanent dwelling.",
          verseRef: "13:23"
        },
        {
          term: "وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ",
          transliteration: "Wa man salaha min aabaa'ihim wa azwaajihim wa dhurriyyaatihim",
          meaning: "And whoever was righteous from their fathers, spouses, and descendants",
          explanation: "Family reunion in Paradise - righteous family members join them.",
          verseRef: "13:23"
        },
        {
          term: "وَالْمَلَائِكَةُ يَدْخُلُونَ عَلَيْهِم مِّن كُلِّ بَابٍ",
          transliteration: "Wal-malaa'ikatu yadkhuloona 'alayhim min kulli baab",
          meaning: "And angels will enter upon them from every gate",
          explanation: "Angels visiting from all directions - honored guests receiving honored visitors.",
          verseRef: "13:23"
        },
        {
          term: "سَلَامٌ عَلَيْكُم بِمَا صَبَرْتُمْ",
          transliteration: "Salaamun 'alaykum bimaa sabartum",
          meaning: "Peace be upon you for what you patiently endured",
          explanation: "Angels' greeting acknowledging their patience - sabr rewarded with salaam.",
          verseRef: "13:24"
        },
        {
          term: "فَنِعْمَ عُقْبَى الدَّارِ",
          transliteration: "Fa-ni'ma 'uqbad-daar",
          meaning: "How excellent is the final home",
          explanation: "Exclamation of praise - the best possible outcome, ultimate success.",
          verseRef: "13:24"
        }
      ]
    },

    disbelieversQualities: {
      color: '#EF4444',
      icon: 'Users',
      name: "Qualities of Disbelievers",
      nameArabic: "صفات الكافرين",
      description: "Characteristics of those who reject faith",
      concepts: [
        {
          term: "وَالَّذِينَ يَنقُضُونَ عَهْدَ اللَّهِ مِن بَعْدِ مِيثَاقِهِ",
          transliteration: "Walladheena yanqudoona 'ahdallaahi min ba'di meethaaqih",
          meaning: "Those who break Allah's covenant after contracting it",
          explanation: "Breaking promises to Allah - the fitrah covenant and subsequent pledges.",
          verseRef: "13:25"
        },
        {
          term: "وَيَقْطَعُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ",
          transliteration: "Wa yaqta'oona maa amarallaahu bihi an yoosal",
          meaning: "And sever what Allah has ordered to be joined",
          explanation: "Opposite of believers - cutting family ties, breaking bonds, causing division.",
          verseRef: "13:25"
        },
        {
          term: "وَيُفْسِدُونَ فِي الْأَرْضِ",
          transliteration: "Wa yufsidoona fil-ard",
          meaning: "And spread corruption on earth",
          explanation: "Fasaad - corruption in morals, society, environment. Destructive behavior.",
          verseRef: "13:25"
        },
        {
          term: "أُولَٰئِكَ لَهُمُ اللَّعْنَةُ وَلَهُمْ سُوءُ الدَّارِ",
          transliteration: "Ulaa'ika lahumul-la'natu wa lahum soo'ud-daar",
          meaning: "Those will have the curse and the worst home",
          explanation: "La'nah - cut off from Allah's mercy. Soo' ad-daar - terrible final abode (Hell).",
          verseRef: "13:25"
        }
      ]
    },

    divineProvidence: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Providence",
      nameArabic: "الرزق الإلهي",
      description: "Allah's control over provision and guidance",
      concepts: [
        {
          term: "اللَّهُ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ",
          transliteration: "Allaahu yabsutur-rizqa liman yashaa'u wa yaqdir",
          meaning: "Allah extends provision for whom He wills and restricts",
          explanation: "Bast (expansion) and Qadr (restriction) of rizq - divine wisdom in wealth distribution.",
          verseRef: "13:26"
        },
        {
          term: "وَفَرِحُوا بِالْحَيَاةِ الدُّنْيَا",
          transliteration: "Wa farihoo bil-hayaatid-dunyaa",
          meaning: "And they rejoice in worldly life",
          explanation: "Excessive attachment to dunya - a sign of spiritual blindness.",
          verseRef: "13:26"
        },
        {
          term: "وَمَا الْحَيَاةُ الدُّنْيَا فِي الْآخِرَةِ إِلَّا مَتَاعٌ",
          transliteration: "Wa mal-hayaatud-dunyaa fil-aakhirati illaa mataa'",
          meaning: "And worldly life compared to Hereafter is only enjoyment",
          explanation: "Mata' - temporary enjoyment/goods. Dunya is fleeting compared to eternal Akhirah.",
          verseRef: "13:26"
        }
      ]
    },

    heartsTranquility: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Hearts' Tranquility",
      nameArabic: "طمأنينة القلوب",
      description: "Finding peace through remembrance of Allah",
      concepts: [
        {
          term: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ",
          transliteration: "Alladheena aamanoo wa tatma'innu quloobuhum bi-dhikrillaah",
          meaning: "Those who believe and whose hearts find rest in remembrance of Allah",
          explanation: "Tuma'neenah - deep peace and contentment. Dhikr brings tranquility to anxious hearts.",
          verseRef: "13:28"
        },
        {
          term: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
          transliteration: "Alaa bi-dhikrillaahi tatma'innul-quloob",
          meaning: "Unquestionably, by remembrance of Allah do hearts find rest",
          explanation: "One of Quran's most famous verses - universal prescription for anxiety and unrest.",
          verseRef: "13:28"
        },
        {
          term: "الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ طُوبَىٰ لَهُمْ",
          transliteration: "Alladheena aamanoo wa 'amilus-saalihaati toobaa lahum",
          meaning: "Those who believe and do righteous deeds - for them is Toobaa",
          explanation: "Toobaa - ultimate goodness, name of a tree in Paradise, or state of bliss.",
          verseRef: "13:29"
        },
        {
          term: "وَحُسْنُ مَآبٍ",
          transliteration: "Wa husnu ma'aab",
          meaning: "And a good return",
          explanation: "Ma'ab - place of return. Beautiful destination awaiting believers.",
          verseRef: "13:29"
        }
      ]
    },

    propheticMission: {
      color: '#F59E0B',
      icon: 'Star',
      name: "The Prophet's Mission",
      nameArabic: "رسالة النبي",
      description: "The role and treatment of Prophet Muhammad",
      concepts: [
        {
          term: "كَذَٰلِكَ أَرْسَلْنَاكَ فِي أُمَّةٍ",
          transliteration: "Kadhaalika arsalnaaka fee ummah",
          meaning: "Thus We have sent you to a nation",
          explanation: "Prophet's mission follows pattern of previous messengers to their nations.",
          verseRef: "13:30"
        },
        {
          term: "قَدْ خَلَتْ مِن قَبْلِهَا أُمَمٌ",
          transliteration: "Qad khalat min qablihaa umam",
          meaning: "Before which nations have passed",
          explanation: "Historical precedent - many nations received messengers before.",
          verseRef: "13:30"
        },
        {
          term: "لِّتَتْلُوَ عَلَيْهِمُ الَّذِي أَوْحَيْنَا إِلَيْكَ",
          transliteration: "Li-tatluwa 'alayhimul-ladhee awhaynaa ilayk",
          meaning: "To recite to them what We revealed to you",
          explanation: "Primary mission: Tilawah - reciting divine revelation to people.",
          verseRef: "13:30"
        },
        {
          term: "وَهُمْ يَكْفُرُونَ بِالرَّحْمَٰنِ",
          transliteration: "Wa hum yakfuroona bir-Rahmaan",
          meaning: "While they disbelieve in the Most Merciful",
          explanation: "Rejecting Ar-Rahman - the attribute that should draw people closest.",
          verseRef: "13:30"
        },
        {
          term: "قُلْ هُوَ رَبِّي لَا إِلَٰهَ إِلَّا هُوَ",
          transliteration: "Qul huwa Rabbee laa ilaaha illaa huwa",
          meaning: "Say: He is my Lord, there is no deity except Him",
          explanation: "Prophet's declaration of faith - model statement of tawheed.",
          verseRef: "13:30"
        },
        {
          term: "عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ مَتَابِ",
          transliteration: "'Alayhi tawakkaltu wa ilayhi mataab",
          meaning: "Upon Him I rely and to Him is my return",
          explanation: "Tawakkul (reliance) and Mataab (return) - complete trust and ultimate destination.",
          verseRef: "13:30"
        }
      ]
    },

    hypotheticalQuran: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Power of the Quran",
      nameArabic: "قوة القرآن",
      description: "Hypothetical demonstrations of Quranic power",
      concepts: [
        {
          term: "وَلَوْ أَنَّ قُرْآنًا سُيِّرَتْ بِهِ الْجِبَالُ",
          transliteration: "Wa law anna Qur'aanan suyyirat bihil-jibaal",
          meaning: "If there were a Quran by which mountains were moved",
          explanation: "Hypothetical: even if any recitation could move mountains, it would be this Quran.",
          verseRef: "13:31"
        },
        {
          term: "أَوْ قُطِّعَتْ بِهِ الْأَرْضُ",
          transliteration: "Aw qutti'at bihil-ard",
          meaning: "Or the earth were broken apart by it",
          explanation: "Or split the earth - demonstrating extraordinary power.",
          verseRef: "13:31"
        },
        {
          term: "أَوْ كُلِّمَ بِهِ الْمَوْتَىٰ",
          transliteration: "Aw kullima bihil-mawtaa",
          meaning: "Or the dead were made to speak by it",
          explanation: "Or communicate with the dead - ultimate miracle.",
          verseRef: "13:31"
        },
        {
          term: "بَل لِّلَّهِ الْأَمْرُ جَمِيعًا",
          transliteration: "Bal lillaahil-amru jamee'aa",
          meaning: "Rather, to Allah belongs all affairs",
          explanation: "All matters belong to Allah - He decides which miracles to grant.",
          verseRef: "13:31"
        }
      ]
    },

    mockersDestiny: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Fate of Mockers",
      nameArabic: "مصير المستهزئين",
      description: "The end of those who mocked messengers",
      concepts: [
        {
          term: "وَلَقَدِ اسْتُهْزِئَ بِرُسُلٍ مِّن قَبْلِكَ",
          transliteration: "Wa laqadis-tuhzi'a bi-rusulin min qablik",
          meaning: "Already were messengers ridiculed before you",
          explanation: "Consolation to Prophet - mockery is pattern faced by all messengers.",
          verseRef: "13:32"
        },
        {
          term: "فَأَمْلَيْتُ لِلَّذِينَ كَفَرُوا",
          transliteration: "Fa-amlaytu lilladheena kafaroo",
          meaning: "So I extended respite to those who disbelieved",
          explanation: "Imla' - giving time/rope. Allah gives chances before punishment.",
          verseRef: "13:32"
        },
        {
          term: "ثُمَّ أَخَذْتُهُمْ",
          transliteration: "Thumma akhadhtuhum",
          meaning: "Then I seized them",
          explanation: "After respite comes seizure - divine punishment eventually arrives.",
          verseRef: "13:32"
        },
        {
          term: "فَكَيْفَ كَانَ عِقَابِ",
          transliteration: "Fa-kayfa kaana 'iqaab",
          meaning: "So how was My punishment?",
          explanation: "Rhetorical - punishment was severe and exemplary.",
          verseRef: "13:32"
        }
      ]
    },

    finalAdmonition: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Final Admonition",
      nameArabic: "الموعظة الأخيرة",
      description: "Closing warnings and reassurances",
      concepts: [
        {
          term: "أَفَمَنْ هُوَ قَائِمٌ عَلَىٰ كُلِّ نَفْسٍ بِمَا كَسَبَتْ",
          transliteration: "Afaman huwa qaa'imun 'alaa kulli nafsin bimaa kasabat",
          meaning: "Is He who stands over every soul for what it has earned",
          explanation: "Allah oversees every soul's deeds - nothing escapes divine accounting.",
          verseRef: "13:33"
        },
        {
          term: "وَجَعَلُوا لِلَّهِ شُرَكَاءَ",
          transliteration: "Wa ja'aloo lillaahi shurakaa'",
          meaning: "And they attribute to Allah partners",
          explanation: "Absurdity of shirk - assigning partners to the All-Watchful God.",
          verseRef: "13:33"
        },
        {
          term: "قُلْ سَمُّوهُمْ",
          transliteration: "Qul sammoohum",
          meaning: "Say: Name them",
          explanation: "Challenge: identify these 'partners' - they cannot be properly named or described.",
          verseRef: "13:33"
        },
        {
          term: "زُيِّنَ لِلَّذِينَ كَفَرُوا مَكْرُهُمْ",
          transliteration: "Zuyyina lilladheena kafaroo makruhum",
          meaning: "Made pleasing to disbelievers is their plotting",
          explanation: "Their schemes appear good to them - blinded by self-deception.",
          verseRef: "13:33"
        },
        {
          term: "وَصُدُّوا عَنِ السَّبِيلِ",
          transliteration: "Wa suddoo 'anis-sabeel",
          meaning: "And they are blocked from the way",
          explanation: "Prevented from guidance - consequence of persistent rejection.",
          verseRef: "13:33"
        },
        {
          term: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِنْ هَادٍ",
          transliteration: "Wa man yudlilillaahu fa-maa lahu min haad",
          meaning: "Whoever Allah sends astray, there is no guide for him",
          explanation: "Divine sealing of hearts - when someone insists on misguidance, Allah confirms it.",
          verseRef: "13:33"
        },
        {
          term: "وَلَعَذَابُ الْآخِرَةِ أَشَقُّ",
          transliteration: "Wa la-'adhaabul-aakhirati ashaqq",
          meaning: "And the punishment of the Hereafter is more severe",
          explanation: "Worldly punishment is nothing compared to Hereafter - ultimate deterrent.",
          verseRef: "13:34"
        },
        {
          term: "وَمَا لَهُم مِّنَ اللَّهِ مِن وَاقٍ",
          transliteration: "Wa maa lahum minallaahi min waaq",
          meaning: "And they have no protector from Allah",
          explanation: "No shield, no defender against divine punishment - complete vulnerability.",
          verseRef: "13:34"
        }
      ]
    },

    witnessAndMessage: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Witness and Message",
      nameArabic: "الشهادة والرسالة",
      description: "Allah and scripture as witnesses to the Prophet's mission",
      concepts: [
        {
          term: "قُلْ كَفَىٰ بِاللَّهِ شَهِيدًا بَيْنِي وَبَيْنَكُمْ",
          transliteration: "Qul kafaa billaahi shaheedan baynee wa baynakum",
          meaning: "Say: Allah is sufficient as witness between me and you",
          explanation: "Allah Himself testifies to Prophet's truthfulness - ultimate witness.",
          verseRef: "13:43"
        },
        {
          term: "وَمَنْ عِندَهُ عِلْمُ الْكِتَابِ",
          transliteration: "Wa man 'indahu 'ilmul-Kitaab",
          meaning: "And whoever has knowledge of the Scripture",
          explanation: "Scholars of previous scriptures recognize Muhammad as foretold prophet.",
          verseRef: "13:43"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الرعد يسبح",
      to: "الملائكة من خيفته",
      type: "parallel",
      description: "Thunder and angels both glorify Allah"
    },
    {
      from: "الزبد يذهب جفاءً",
      to: "ما ينفع الناس يمكث",
      type: "contrast",
      description: "Foam (falsehood) vanishes vs benefit (truth) remains"
    },
    {
      from: "يوفون بعهد الله",
      to: "ينقضون عهد الله",
      type: "antithesis",
      description: "Believers fulfill vs disbelievers break covenant"
    },
    {
      from: "لا يغير ما بقوم",
      to: "حتى يغيروا ما بأنفسهم",
      type: "condition",
      description: "Divine change requires human change first"
    },
    {
      from: "بذكر الله",
      to: "تطمئن القلوب",
      type: "cause-effect",
      description: "Remembrance of Allah causes heart's tranquility"
    },
    {
      from: "الأعمى",
      to: "البصير",
      type: "contrast",
      description: "Spiritually blind vs seeing - disbeliever vs believer"
    },
    {
      from: "الظلمات",
      to: "النور",
      type: "contrast",
      description: "Darkness (kufr) vs light (Islam)"
    },
    {
      from: "سلام عليكم",
      to: "بما صبرتم",
      type: "result",
      description: "Patience results in angelic greeting of peace"
    }
  ],

  thematicFlow: {
    title: "Journey from Signs to Certainty",
    titleArabic: "من الآيات إلى اليقين",
    stages: [
      {
        stage: 1,
        theme: "Divine Revelation Affirmed",
        verses: "13:1",
        description: "Opening declaration: Quran is truth from Allah"
      },
      {
        stage: 2,
        theme: "Cosmic and Earthly Signs",
        verses: "13:2-4",
        description: "Heavens without pillars, sun, moon, earth, mountains, rivers, fruits"
      },
      {
        stage: 3,
        theme: "Divine Knowledge",
        verses: "13:8-11",
        description: "Allah knows the unseen, guardian angels, human change"
      },
      {
        stage: 4,
        theme: "Thunder's Glorification",
        verses: "13:12-13",
        description: "Lightning, clouds, thunder glorifying Allah, thunderbolts"
      },
      {
        stage: 5,
        theme: "True vs False Call",
        verses: "13:14-16",
        description: "Calling upon Allah vs idols, universal prostration"
      },
      {
        stage: 6,
        theme: "Truth vs Falsehood Parable",
        verses: "13:17",
        description: "Water/foam parable - truth remains, falsehood vanishes"
      },
      {
        stage: 7,
        theme: "Rewards and Punishment",
        verses: "13:18-24",
        description: "Believers' qualities and Paradise, disbelievers' qualities and Hell"
      },
      {
        stage: 8,
        theme: "Divine Providence",
        verses: "13:25-28",
        description: "Provision, worldly life as enjoyment, hearts' tranquility"
      },
      {
        stage: 9,
        theme: "Prophet's Mission",
        verses: "13:29-32",
        description: "Sending the Prophet, Quran's power, mockers' fate"
      },
      {
        stage: 10,
        theme: "Final Warnings",
        verses: "13:33-43",
        description: "Divine oversight, plotting, punishment, Allah as witness"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 2,
        name: "Al-Baqarah",
        verses: "164",
        relation: "Signs in heavens, earth, ships, rain, winds",
        sharedTheme: "Natural signs proving Allah"
      },
      {
        surah: 24,
        name: "An-Nur",
        verse: 43,
        relation: "Allah drives clouds, lightning, thunder",
        sharedTheme: "Thunder and weather as signs"
      },
      {
        surah: 10,
        name: "Yunus",
        verse: 3,
        relation: "Allah manages affairs, details signs",
        sharedTheme: "Divine management of universe"
      },
      {
        surah: 30,
        name: "Ar-Rum",
        verses: "20-25",
        relation: "Signs in creation, resurrection, lightning",
        sharedTheme: "Natural phenomena as proofs"
      },
      {
        surah: 6,
        name: "Al-An'am",
        verses: "95-99",
        relation: "Agricultural signs, diverse fruits from water",
        sharedTheme: "Botanical signs of Allah"
      }
    ]
  },

  practicalApplication: {
    title: "Living by Ar-Ra'd",
    applications: [
      {
        principle: "See Allah in nature",
        how: "Look at sky, mountains, rain as signs of Allah, not random phenomena",
        verse: "13:2-4"
      },
      {
        principle: "Change yourself first",
        how: "Don't expect circumstances to change without changing yourself",
        verse: "13:11"
      },
      {
        principle: "Find peace in dhikr",
        how: "When anxious, remember Allah - hearts find rest only in His remembrance",
        verse: "13:28"
      },
      {
        principle: "Maintain ties",
        how: "Connect what Allah ordered connected - family, community, faith bonds",
        verse: "13:21"
      },
      {
        principle: "Repel evil with good",
        how: "When wronged, respond with kindness - breaks cycles of revenge",
        verse: "13:22"
      },
      {
        principle: "Be patient for Allah",
        how: "Endure difficulties seeking Allah's pleasure, not praise",
        verse: "13:22"
      },
      {
        principle: "Balance secret and public charity",
        how: "Give secretly for sincerity, publicly to encourage others",
        verse: "13:22"
      },
      {
        principle: "Trust in truth's victory",
        how: "Falsehood may seem prominent but will vanish like foam",
        verse: "13:17"
      }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Nature's Worship",
    insight: "Ar-Ra'd uniquely presents nature as actively worshipping Allah. Thunder doesn't just exist - it glorifies (yusabbih). Shadows don't just fall - they prostrate. This surah transforms how we perceive the natural world: every storm, every sunrise, every growing plant is an act of ibadah. The famous verse 13:28 'Verily, in the remembrance of Allah do hearts find rest' is preceded by descriptions of nature's dhikr, suggesting that humans should join creation's constant praise. The surah's central parable (13:17) of water and foam brilliantly illustrates that truth, like water, may be beneath the surface while falsehood, like foam, appears prominent - but truth nourishes and remains while falsehood is 'jufaa' (worthless scum). The condition in 13:11 'Allah does not change a people until they change themselves' is one of Islam's most transformative principles - divine help awaits human initiative.",
    modernRelevance: "In an age of anxiety and environmental crisis, this surah offers: (1) Nature is not random but divine signs demanding reflection; (2) Hearts find peace only in remembering Allah - no therapy replaces dhikr; (3) Change starts with self - don't wait for circumstances; (4) Truth will prevail despite falsehood's current prominence."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "يُسَبِّحُ الرَّعْدُ",
        example: "Thunder glorifies",
        effect: "Personification - thunder as conscious worshipper"
      },
      {
        feature: "زَبَدًا رَّابِيًا",
        example: "Rising foam",
        effect: "Visual imagery - foam swelling then vanishing"
      },
      {
        feature: "جُفَاءً",
        example: "As waste/scum",
        effect: "Rare word emphasizing worthlessness"
      },
      {
        feature: "تَطْمَئِنُّ",
        example: "Find rest/tranquility",
        effect: "Form VIII verb intensifying the settling of hearts"
      },
      {
        feature: "طُوبَىٰ",
        example: "Blessedness/Tooba tree",
        effect: "Unique word appearing only here, indicating Paradise bliss"
      },
      {
        feature: "الْمِحَالِ",
        example: "Severe in assault",
        effect: "Rare word for intense power, only here in Quran"
      }
    ]
  },

  scientificReferences: {
    notes: [
      {
        verse: "13:2",
        topic: "Heavens without visible pillars",
        note: "Gravity and atmospheric forces hold celestial bodies - invisible 'pillars'"
      },
      {
        verse: "13:3",
        topic: "Pairs in fruits",
        note: "Sexual reproduction in plants - male/female parts or distinct varieties"
      },
      {
        verse: "13:4",
        topic: "Same water, different tastes",
        note: "Soil composition, genetics, and environmental factors create variety"
      },
      {
        verse: "13:12",
        topic: "Heavy clouds",
        note: "Clouds carry millions of tons of water yet float due to air density and updrafts"
      },
      {
        verse: "13:17",
        topic: "Water cycle",
        note: "Rain flows in valleys 'by measure' - water finds its level, natural drainage"
      }
    ]
  },

  historicalContext: {
    note: "Ar-Ra'd was revealed in Medina (though some say Makkah) addressing both the Quraysh's demands for miracles and the Jews of Medina questioning Muhammad's prophethood. The surah responds by pointing to nature's miracles visible daily - thunder, lightning, growth - as more profound than demanded supernatural events. The name 'Ar-Ra'd' (Thunder) was chosen by Allah to highlight that even this fearsome natural force is actually glorifying Him. The polytheists feared thunder as a deity or omen; Islam reframes it as worship. The verse about changing oneself (13:11) would later become a foundational principle for Muslim reformers throughout history."
  }
};

export default ONTOLOGY;
