/**
 * Surah Sad (38) - Ontology of Quranic Concepts
 * The Letter Sad
 *
 * Theme: Stories of prophets facing trials - Dawud, Sulayman, Ayyub - and the origin of Iblis's rebellion
 * Named after the Arabic letter "Sad" which begins the surah
 *
 * Revelation: Makki
 * Total Ayahs: 88
 */

export const ONTOLOGY = {
  surahId: 38,
  surahName: "Sad",
  surahNameArabic: "ص",
  surahNameMeaning: "The Letter Sad",
  revelationType: "Makki",
  totalAyahs: 88,
  chronologicalOrder: 38,
  juzNumber: "23",
  rukus: 5,

  introduction: {
    title: "The Letter Sad",
    titleArabic: "ص",
    description: {
      en: "Surah Sad begins with the mysterious letter 'Sad' and an oath by the Quran. It addresses disbelievers' arrogance and tells stories of prophets who faced trials: Dawud's kingdom and judgment, Sulayman's wealth and spiritual test, Ayyub's patience through suffering. The surah culminates with the dramatic account of Iblis's refusal to prostrate to Adam and his vow to mislead humanity.",
      ur: "سورہ ص حروف مقطعات 'ص' سے شروع ہوتی ہے اور قرآن کی قسم کھاتی ہے۔ یہ کافروں کے تکبر کو خطاب کرتی ہے اور آزمائشوں کا سامنا کرنے والے انبیاء کی کہانیاں بیان کرتی ہے: داؤد کی حکومت اور فیصلہ، سلیمان کی دولت اور روحانی آزمائش، ایوب کی مصائب میں صبر۔ سورہ ابلیس کے آدم کو سجدہ کرنے سے انکار اور انسانیت کو گمراہ کرنے کی قسم کے ڈرامائی واقعے پر اختتام پذیر ہوتی ہے۔",
      hi: "सूरह साद रहस्यमय अक्षर 'साद' और कुरान की कसम से शुरू होती है। यह काफिरों के घमंड को संबोधित करती है और परीक्षाओं का सामना करने वाले नबियों की कहानियां बताती है: दाऊद का राज्य और फैसला, सुलेमान की दौलत और आध्यात्मिक परीक्षा, अय्यूब का कष्टों में धैर्य।"
    },
    revelationContext: {
      en: "Revealed in Makkah when the Prophet faced severe opposition. The stories of previous prophets' trials served as consolation and guidance.",
      ur: "مکہ میں نازل ہوئی جب نبی ﷺ کو شدید مخالفت کا سامنا تھا۔ پچھلے انبیاء کی آزمائشوں کی کہانیاں تسلی اور رہنمائی کے طور پر تھیں۔"
    }
  },

  categories: {
    openingAndWarning: {
      name: "Opening and Warning to Disbelievers",
      nameArabic: "الافتتاح والإنذار",
      color: "#8B5CF6",
      icon: "AlertTriangle",
      verses: "38:1-11",
      concepts: [
        {
          term: "ص",
          transliteration: "Sad",
          meaning: "The Letter Sad",
          explanation: "One of the mysterious letters (Huruf Muqatta'at) that begin certain surahs. Its exact meaning is known only to Allah.",
          verseRef: "38:1"
        },
        {
          term: "وَالْقُرْآنِ ذِي الذِّكْرِ",
          transliteration: "Wal-Qur'ani dhil-Dhikr",
          meaning: "By the Quran full of remembrance",
          explanation: "An oath by the Quran, described as containing dhikr - reminder, remembrance, and honor.",
          verseRef: "38:1",
          keyPhrase: true
        },
        {
          term: "فِي عِزَّةٍ وَشِقَاقٍ",
          transliteration: "Fee 'Izzatin wa Shiqaq",
          meaning: "In pride and dissension",
          explanation: "Disbelievers are in self-importance and opposition - their arrogance prevents acceptance of truth.",
          verseRef: "38:2"
        },
        {
          term: "كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍ",
          transliteration: "Kam Ahlakna min Qablihim min Qarn",
          meaning: "How many generations We destroyed before them",
          explanation: "Warning from history - many nations destroyed for rejecting prophets. They cried out but too late.",
          verseRef: "38:3"
        },
        {
          term: "سَاحِرٌ كَذَّابٌ",
          transliteration: "Sahirun Kadhdhab",
          meaning: "A magician, a liar",
          explanation: "The accusation of Quraysh against the Prophet - same accusation made against previous prophets.",
          verseRef: "38:4"
        },
        {
          term: "أَجَعَلَ الْآلِهَةَ إِلَٰهًا وَاحِدًا",
          transliteration: "A-Ja'alal-Aalihata Ilahan Wahidan",
          meaning: "Has he made the gods into one God?",
          explanation: "Disbelievers' shock at Tawheed - they couldn't accept the concept of One God.",
          verseRef: "38:5"
        },
        {
          term: "إِنَّ هَٰذَا لَشَيْءٌ عُجَابٌ",
          transliteration: "Inna Hadha la-Shay'un 'Ujab",
          meaning: "This is indeed an amazing thing",
          explanation: "Their sarcastic rejection of monotheism - finding unity of God strange while accepting multiple deities.",
          verseRef: "38:5"
        },
        {
          term: "امْشُوا وَاصْبِرُوا عَلَىٰ آلِهَتِكُمْ",
          transliteration: "Imshoo wasbiru 'ala Aalihatikum",
          meaning: "Go and be patient upon your gods",
          explanation: "Quraysh leaders urging each other to persist in polytheism - mockery and resistance to truth.",
          verseRef: "38:6"
        },
        {
          term: "مَا سَمِعْنَا بِهَٰذَا فِي الْمِلَّةِ الْآخِرَةِ",
          transliteration: "Ma Sami'na bi-hadha fil-Millat-il-Aakhirah",
          meaning: "We never heard of this in the latest religion",
          explanation: "Claim that Tawheed was not in their forefathers' religion - preferring ancestral tradition over truth.",
          verseRef: "38:7"
        },
        {
          term: "أَمْ عِندَهُمْ خَزَائِنُ رَحْمَةِ رَبِّكَ",
          transliteration: "Am 'Indahum Khazaa'inu Rahmati Rabbik",
          meaning: "Or do they have the treasuries of your Lord's mercy?",
          explanation: "Rhetorical question - they don't control prophethood or divine mercy. Allah chooses whom He wills.",
          verseRef: "38:9"
        },
        {
          term: "جُندٌ مَّا هُنَالِكَ مَهْزُومٌ مِّنَ الْأَحْزَابِ",
          transliteration: "Jundun ma Hunalika Mahzoomun min-al-Ahzab",
          meaning: "A small army there will be defeated from the confederates",
          explanation: "Prophecy that the coalition against the Prophet would be defeated - fulfilled at Badr and beyond.",
          verseRef: "38:11"
        }
      ]
    },

    previousNations: {
      name: "Previous Nations' Rejection",
      nameArabic: "تكذيب الأمم السابقة",
      color: "#EF4444",
      icon: "Users",
      verses: "38:12-16",
      concepts: [
        {
          term: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ",
          transliteration: "Kadhdhabat Qablahum Qawmu Nuh",
          meaning: "The people of Nuh denied before them",
          explanation: "Pattern of rejection - Nuh's people first in this list of deniers.",
          verseRef: "38:12"
        },
        {
          term: "وَعَادٌ وَفِرْعَوْنُ ذُو الْأَوْتَادِ",
          transliteration: "Wa 'Aadun wa Fir'awnu dhul-Awtad",
          meaning: "And Aad, and Pharaoh owner of stakes",
          explanation: "Pharaoh described as 'owner of stakes' - possibly referring to tent pegs of his vast army or impaling victims.",
          verseRef: "38:12"
        },
        {
          term: "وَثَمُودُ وَقَوْمُ لُوطٍ وَأَصْحَابُ الْأَيْكَةِ",
          transliteration: "Wa Thamoodu wa Qawmu Lootin wa Ashaab-ul-Aykah",
          meaning: "And Thamud, Lut's people, and the people of the Thicket",
          explanation: "Continuation of destroyed nations - Thamud, Lut's people, Shu'ayb's people (Aykah).",
          verseRef: "38:13"
        },
        {
          term: "أُولَٰئِكَ الْأَحْزَابُ",
          transliteration: "Ulaa'ik-al-Ahzab",
          meaning: "Those are the confederates",
          explanation: "These destroyed nations were confederates against truth - just like Quraysh's coalition.",
          verseRef: "38:13"
        },
        {
          term: "إِن كُلٌّ إِلَّا كَذَّبَ الرُّسُلَ فَحَقَّ عِقَابِ",
          transliteration: "In Kullun illa Kadhdhab-ar-Rusula fa-Haqqa 'Iqab",
          meaning: "Each denied the messengers, so My punishment was justified",
          explanation: "Universal pattern - denial of messengers leads to deserved punishment.",
          verseRef: "38:14"
        },
        {
          term: "وَمَا يَنظُرُ هَٰؤُلَاءِ إِلَّا صَيْحَةً وَاحِدَةً",
          transliteration: "Wa ma Yandhuru Haa'ulaa'i illa Sayhatan Wahidah",
          meaning: "These only await a single blast",
          explanation: "Warning that punishment can come suddenly - just one shout from the angel.",
          verseRef: "38:15"
        },
        {
          term: "رَبَّنَا عَجِّل لَّنَا قِطَّنَا قَبْلَ يَوْمِ الْحِسَابِ",
          transliteration: "Rabbana 'Ajjil lana Qittana Qabla Yawm-il-Hisab",
          meaning: "Our Lord, hasten our share before the Day of Account",
          explanation: "Mocking demand for immediate punishment - they challenged Allah to punish them now.",
          verseRef: "38:16"
        }
      ]
    },

    dawudStory: {
      name: "The Story of Dawud",
      nameArabic: "قصة داود",
      color: "#F59E0B",
      icon: "Crown",
      verses: "38:17-26",
      concepts: [
        {
          term: "اصْبِرْ عَلَىٰ مَا يَقُولُونَ",
          transliteration: "Isbir 'ala ma Yaqooloon",
          meaning: "Be patient over what they say",
          explanation: "Command to patience - Prophet consoled with stories of previous prophets' patience.",
          verseRef: "38:17"
        },
        {
          term: "وَاذْكُرْ عَبْدَنَا دَاوُودَ ذَا الْأَيْدِ",
          transliteration: "Wadhkur 'Abdana Dawooda dhal-Ayd",
          meaning: "Remember Our servant Dawud, possessor of strength",
          explanation: "Dawud introduced as Allah's servant with 'ayd' - strength in worship, body, and kingdom.",
          verseRef: "38:17",
          keyPhrase: true
        },
        {
          term: "إِنَّهُ أَوَّابٌ",
          transliteration: "Innahu Awwab",
          meaning: "Indeed, he was one who repeatedly turned [to Allah]",
          explanation: "Awwab - one who constantly returns to Allah in repentance. Key characteristic of Dawud.",
          verseRef: "38:17"
        },
        {
          term: "إِنَّا سَخَّرْنَا الْجِبَالَ مَعَهُ",
          transliteration: "Inna Sakhkharna-l-Jibala ma'ahu",
          meaning: "We subjected the mountains with him",
          explanation: "Mountains glorified Allah along with Dawud - miraculous praise at evening and sunrise.",
          verseRef: "38:18"
        },
        {
          term: "يُسَبِّحْنَ بِالْعَشِيِّ وَالْإِشْرَاقِ",
          transliteration: "Yusabbihna bil-'Ashiyyi wal-Ishraaq",
          meaning: "Glorifying [Allah] in the evening and sunrise",
          explanation: "Times of Dawud's worship - evening and early morning. Mountains joined in praise.",
          verseRef: "38:18"
        },
        {
          term: "وَالطَّيْرَ مَحْشُورَةً",
          transliteration: "Wat-Tayra Mahshooratun",
          meaning: "And the birds assembled",
          explanation: "Birds gathered to praise Allah with Dawud - all creation joining in worship.",
          verseRef: "38:19"
        },
        {
          term: "كُلٌّ لَّهُ أَوَّابٌ",
          transliteration: "Kullun lahu Awwab",
          meaning: "All were returning [to Allah in praise]",
          explanation: "Mountains and birds all joined Dawud in being 'awwab' - frequently turning to Allah.",
          verseRef: "38:19"
        },
        {
          term: "وَشَدَدْنَا مُلْكَهُ",
          transliteration: "Wa Shadadna Mulkahu",
          meaning: "And We strengthened his kingdom",
          explanation: "Allah established Dawud's rule firmly - strong governance and authority.",
          verseRef: "38:20"
        },
        {
          term: "وَآتَيْنَاهُ الْحِكْمَةَ وَفَصْلَ الْخِطَابِ",
          transliteration: "Wa Aataynahu-l-Hikmata wa Fasl-al-Khitab",
          meaning: "And We gave him wisdom and decisive speech",
          explanation: "Two gifts: hikmah (wisdom) and fasl al-khitab (decisive judgment in speech/ruling).",
          verseRef: "38:20",
          keyPhrase: true
        },
        {
          term: "نَبَأُ الْخَصْمِ إِذْ تَسَوَّرُوا الْمِحْرَابَ",
          transliteration: "Naba'-ul-Khasmi idh Tasawwaru-l-Mihrab",
          meaning: "The news of the disputants when they climbed over the sanctuary wall",
          explanation: "Two litigants climbed over Dawud's prayer chamber wall - sudden test of his judgment.",
          verseRef: "38:21"
        },
        {
          term: "إِذْ دَخَلُوا عَلَىٰ دَاوُودَ فَفَزِعَ مِنْهُمْ",
          transliteration: "Idh Dakhaloo 'ala Dawooda fa-Fazi'a minhum",
          meaning: "When they entered upon Dawud and he was alarmed by them",
          explanation: "Dawud was startled by their sudden entry - unusual approach indicated test.",
          verseRef: "38:22"
        },
        {
          term: "خَصْمَانِ بَغَىٰ بَعْضُنَا عَلَىٰ بَعْضٍ",
          transliteration: "Khasmani Bagha Ba'duna 'ala Ba'd",
          meaning: "Two disputants, one has wronged the other",
          explanation: "They presented their case - one claiming injustice from the other.",
          verseRef: "38:22"
        },
        {
          term: "إِنَّ هَٰذَا أَخِي لَهُ تِسْعٌ وَتِسْعُونَ نَعْجَةً",
          transliteration: "Inna Hadha Akhee lahu Tis'un wa Tis'oona Na'jah",
          meaning: "This is my brother, he has ninety-nine ewes",
          explanation: "The parable: one has 99 sheep, the other has 1 - the rich one demanded the poor one's sheep.",
          verseRef: "38:23"
        },
        {
          term: "وَلِيَ نَعْجَةٌ وَاحِدَةٌ",
          transliteration: "Wa Liya Na'jatun Wahidah",
          meaning: "And I have one ewe",
          explanation: "Stark inequality - 99 vs 1 - illustrating greed of the wealthy.",
          verseRef: "38:23"
        },
        {
          term: "أَكْفِلْنِيهَا",
          transliteration: "Akfilneeha",
          meaning: "Give it to me",
          explanation: "The demand - not satisfied with 99, wanting the poor man's only sheep.",
          verseRef: "38:23"
        },
        {
          term: "وَعَزَّنِي فِي الْخِطَابِ",
          transliteration: "Wa 'Azzanee fil-Khitab",
          meaning: "And he overpowered me in speech",
          explanation: "The rich one used eloquent speech to pressure the poor - power dynamics in disputes.",
          verseRef: "38:23"
        },
        {
          term: "لَقَدْ ظَلَمَكَ بِسُؤَالِ نَعْجَتِكَ إِلَىٰ نِعَاجِهِ",
          transliteration: "Laqad Dhalamaka bi-Su'aali Na'jatika ila Ni'ajihi",
          meaning: "He has wronged you by demanding your ewe to add to his ewes",
          explanation: "Dawud's immediate judgment - declaring the demand as oppression.",
          verseRef: "38:24"
        },
        {
          term: "وَإِنَّ كَثِيرًا مِّنَ الْخُلَطَاءِ لَيَبْغِي بَعْضُهُمْ عَلَىٰ بَعْضٍ",
          transliteration: "Wa Inna Katheeran min-al-Khulata'i la-Yabghee Ba'duhum 'ala Ba'd",
          meaning: "Indeed, many partners oppress one another",
          explanation: "Universal observation - business partners often wrong each other.",
          verseRef: "38:24"
        },
        {
          term: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَقَلِيلٌ مَّا هُمْ",
          transliteration: "Illa-lladheena Aamanu wa 'Amilu-s-Salihaati wa Qaleelun ma Hum",
          meaning: "Except those who believe and do righteous deeds - and how few are they",
          explanation: "Exception - believers who do good don't oppress, but they are few.",
          verseRef: "38:24"
        },
        {
          term: "وَظَنَّ دَاوُودُ أَنَّمَا فَتَنَّاهُ",
          transliteration: "Wa Dhanna Dawoodu annama Fatannahu",
          meaning: "And Dawud realized that We had tested him",
          explanation: "Dawud understood the case was a test - moment of self-realization.",
          verseRef: "38:24"
        },
        {
          term: "فَاسْتَغْفَرَ رَبَّهُ وَخَرَّ رَاكِعًا وَأَنَابَ",
          transliteration: "Fa-staghfara Rabbahu wa Kharra Raaki'an wa Anab",
          meaning: "So he asked forgiveness of his Lord and fell down bowing and turned in repentance",
          explanation: "Dawud's immediate response - seeking forgiveness, prostrating, returning to Allah.",
          verseRef: "38:24",
          keyPhrase: true
        },
        {
          term: "فَغَفَرْنَا لَهُ ذَٰلِكَ",
          transliteration: "Fa-ghafarna lahu Dhalika",
          meaning: "So We forgave him that",
          explanation: "Allah's immediate forgiveness - sincere repentance is always accepted.",
          verseRef: "38:25"
        },
        {
          term: "وَإِنَّ لَهُ عِندَنَا لَزُلْفَىٰ وَحُسْنَ مَآبٍ",
          transliteration: "Wa Inna lahu 'Indana la-Zulfa wa Husna Ma'ab",
          meaning: "Indeed, he has nearness to Us and a good return",
          explanation: "Dawud's status with Allah - closeness (zulfa) and excellent final destination.",
          verseRef: "38:25"
        },
        {
          term: "يَا دَاوُودُ إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ",
          transliteration: "Ya Dawoodu Inna Ja'alnaka Khaleefatan fil-Ard",
          meaning: "O Dawud, We have made you a successor/ruler on earth",
          explanation: "Dawud appointed as khalifah - vicegerent and ruler with divine mandate.",
          verseRef: "38:26",
          keyPhrase: true
        },
        {
          term: "فَاحْكُم بَيْنَ النَّاسِ بِالْحَقِّ",
          transliteration: "Fa-hkum Bayn-an-Nasi bil-Haqq",
          meaning: "So judge between people with truth",
          explanation: "Command to rule with justice and truth - core responsibility of leadership.",
          verseRef: "38:26"
        },
        {
          term: "وَلَا تَتَّبِعِ الْهَوَىٰ فَيُضِلَّكَ عَن سَبِيلِ اللَّهِ",
          transliteration: "Wa la Tattabi'-il-Hawa fa-Yudillaka 'an Sabeelillah",
          meaning: "And do not follow desire, lest it lead you astray from Allah's path",
          explanation: "Warning against following personal desires in judgment - leads to deviation.",
          verseRef: "38:26"
        },
        {
          term: "إِنَّ الَّذِينَ يَضِلُّونَ عَن سَبِيلِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ",
          transliteration: "Inna-lladheena Yadilloona 'an Sabeelillahi lahum 'Adhabun Shadeed",
          meaning: "Those who stray from Allah's path will have severe punishment",
          explanation: "Consequence of deviation - severe punishment awaits those who abandon divine guidance.",
          verseRef: "38:26"
        },
        {
          term: "بِمَا نَسُوا يَوْمَ الْحِسَابِ",
          transliteration: "Bima Nasoo Yawm-al-Hisab",
          meaning: "Because they forgot the Day of Account",
          explanation: "Root cause of deviation - forgetting accountability leads to following desires.",
          verseRef: "38:26"
        }
      ]
    },

    sulaymanStory: {
      name: "The Story of Sulayman",
      nameArabic: "قصة سليمان",
      color: "#10B981",
      icon: "Crown",
      verses: "38:30-40",
      concepts: [
        {
          term: "وَوَهَبْنَا لِدَاوُودَ سُلَيْمَانَ",
          transliteration: "Wa Wahabna li-Dawooda Sulayman",
          meaning: "And We granted to Dawud, Sulayman",
          explanation: "Sulayman was a gift to Dawud - continuing the prophetic lineage.",
          verseRef: "38:30"
        },
        {
          term: "نِعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ",
          transliteration: "Ni'mal-'Abd Innahu Awwab",
          meaning: "Excellent is the servant; indeed, he was one repeatedly turning [to Allah]",
          explanation: "Same praise as Dawud - 'ni'mal-'abd' (excellent servant) and 'awwab' (constantly returning to Allah).",
          verseRef: "38:30",
          keyPhrase: true
        },
        {
          term: "إِذْ عُرِضَ عَلَيْهِ بِالْعَشِيِّ الصَّافِنَاتُ الْجِيَادُ",
          transliteration: "Idh 'Urida 'alayhi bil-'Ashiyyi-s-Safinat-ul-Jiyad",
          meaning: "When there were displayed before him in the evening the poised horses",
          explanation: "Fine horses were shown to Sulayman - standing on three legs, swift runners.",
          verseRef: "38:31"
        },
        {
          term: "إِنِّي أَحْبَبْتُ حُبَّ الْخَيْرِ عَن ذِكْرِ رَبِّي",
          transliteration: "Innee Ahbabtu Hubb-al-Khayri 'an Dhikri Rabbee",
          meaning: "Indeed, I loved the love of good [things] over the remembrance of my Lord",
          explanation: "Sulayman's realization - worldly good distracted him from remembering Allah.",
          verseRef: "38:32"
        },
        {
          term: "حَتَّىٰ تَوَارَتْ بِالْحِجَابِ",
          transliteration: "Hatta Tawarat bil-Hijab",
          meaning: "Until [the sun] disappeared behind the veil [of the horizon]",
          explanation: "He was distracted until sunset - missing the time for worship.",
          verseRef: "38:32"
        },
        {
          term: "رُدُّوهَا عَلَيَّ",
          transliteration: "Ruddooha 'Alayya",
          meaning: "Return them to me",
          explanation: "Sulayman commanded the horses be brought back.",
          verseRef: "38:33"
        },
        {
          term: "فَطَفِقَ مَسْحًا بِالسُّوقِ وَالْأَعْنَاقِ",
          transliteration: "Fa-Tafiqa Mashan bis-Sooqi wal-A'naq",
          meaning: "And he began to pass his hand over their legs and necks",
          explanation: "Some say he stroked them lovingly; others say he sacrificed them to remove the distraction.",
          verseRef: "38:33"
        },
        {
          term: "وَلَقَدْ فَتَنَّا سُلَيْمَانَ",
          transliteration: "Wa Laqad Fatanna Sulayman",
          meaning: "And We certainly tested Sulayman",
          explanation: "Sulayman was also tested - even great prophets face trials.",
          verseRef: "38:34"
        },
        {
          term: "وَأَلْقَيْنَا عَلَىٰ كُرْسِيِّهِ جَسَدًا",
          transliteration: "Wa Alqayna 'ala Kursiyyihi Jasadan",
          meaning: "And We placed on his throne a body",
          explanation: "A body was placed on his throne - various interpretations of this trial.",
          verseRef: "38:34"
        },
        {
          term: "ثُمَّ أَنَابَ",
          transliteration: "Thumma Anab",
          meaning: "Then he turned back [to Allah]",
          explanation: "After the test, Sulayman returned to Allah - consistent pattern of prophetic repentance.",
          verseRef: "38:34"
        },
        {
          term: "قَالَ رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكًا",
          transliteration: "Qala Rabbi-ghfir Lee wa Hab Lee Mulkan",
          meaning: "He said: My Lord, forgive me and grant me a kingdom",
          explanation: "Sulayman's prayer - seeking forgiveness first, then asking for unique kingdom.",
          verseRef: "38:35"
        },
        {
          term: "لَّا يَنبَغِي لِأَحَدٍ مِّن بَعْدِي",
          transliteration: "La Yanbaghee li-Ahadin min Ba'dee",
          meaning: "Such as will not belong to anyone after me",
          explanation: "Request for unique, unparalleled kingdom - not from greed but divine purpose.",
          verseRef: "38:35",
          keyPhrase: true
        },
        {
          term: "إِنَّكَ أَنتَ الْوَهَّابُ",
          transliteration: "Innaka Ant-al-Wahhab",
          meaning: "Indeed, You are the Bestower",
          explanation: "Acknowledging Allah as Al-Wahhab - the One who gives abundantly.",
          verseRef: "38:35"
        },
        {
          term: "فَسَخَّرْنَا لَهُ الرِّيحَ تَجْرِي بِأَمْرِهِ",
          transliteration: "Fa-sakhkharna lahu-r-Reeha Tajree bi-Amrihi",
          meaning: "So We subjected to him the wind, blowing by his command",
          explanation: "Wind controlled by Sulayman - traveled wherever he directed it.",
          verseRef: "38:36"
        },
        {
          term: "رُخَاءً حَيْثُ أَصَابَ",
          transliteration: "Rukhaa'an Haythu Asab",
          meaning: "Gently wherever he directed",
          explanation: "The wind was gentle (rukhaa'), not destructive - controlled power.",
          verseRef: "38:36"
        },
        {
          term: "وَالشَّيَاطِينَ كُلَّ بَنَّاءٍ وَغَوَّاصٍ",
          transliteration: "Wash-Shayateena Kulla Bannaa'in wa Ghawwas",
          meaning: "And the devils - every builder and diver",
          explanation: "Jinn subjected to Sulayman - some building, some diving for pearls.",
          verseRef: "38:37"
        },
        {
          term: "وَآخَرِينَ مُقَرَّنِينَ فِي الْأَصْفَادِ",
          transliteration: "Wa Aakhareena Muqarraneena fil-Asfad",
          meaning: "And others bound together in chains",
          explanation: "Some jinn were restrained in chains - rebellious ones kept under control.",
          verseRef: "38:38"
        },
        {
          term: "هَٰذَا عَطَاؤُنَا فَامْنُنْ أَوْ أَمْسِكْ بِغَيْرِ حِسَابٍ",
          transliteration: "Hadha 'Ataa'una fa-mnun aw Amsik bi-Ghayri Hisab",
          meaning: "This is Our gift, so grant or withhold without account",
          explanation: "Complete freedom given to Sulayman - give or withhold from his kingdom freely.",
          verseRef: "38:39"
        },
        {
          term: "وَإِنَّ لَهُ عِندَنَا لَزُلْفَىٰ وَحُسْنَ مَآبٍ",
          transliteration: "Wa Inna lahu 'Indana la-Zulfa wa Husna Ma'ab",
          meaning: "And indeed, for him is nearness to Us and a good return",
          explanation: "Same honor as Dawud - closeness to Allah and excellent final destination.",
          verseRef: "38:40"
        }
      ]
    },

    ayyubStory: {
      name: "The Story of Ayyub",
      nameArabic: "قصة أيوب",
      color: "#06B6D4",
      icon: "Heart",
      verses: "38:41-44",
      concepts: [
        {
          term: "وَاذْكُرْ عَبْدَنَا أَيُّوبَ",
          transliteration: "Wadhkur 'Abdana Ayyub",
          meaning: "And remember Our servant Ayyub",
          explanation: "Ayyub introduced as Allah's servant - model of patience in suffering.",
          verseRef: "38:41",
          keyPhrase: true
        },
        {
          term: "إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الشَّيْطَانُ بِنُصْبٍ وَعَذَابٍ",
          transliteration: "Idh Nada Rabbahu Annee Massaniya-sh-Shaytanu bi-Nusbin wa 'Adhab",
          meaning: "When he called to his Lord: Satan has touched me with hardship and torment",
          explanation: "Ayyub's call to Allah - attributing his affliction to Satan's touch, maintaining adab with Allah.",
          verseRef: "38:41"
        },
        {
          term: "ارْكُضْ بِرِجْلِكَ",
          transliteration: "Urkud bi-Rijlika",
          meaning: "Strike with your foot",
          explanation: "Allah's command to Ayyub - strike the ground to release healing water.",
          verseRef: "38:42"
        },
        {
          term: "هَٰذَا مُغْتَسَلٌ بَارِدٌ وَشَرَابٌ",
          transliteration: "Hadha Mughtasalun Baridun wa Sharab",
          meaning: "This is a cool spring for bathing and drinking",
          explanation: "Miraculous spring emerged - cool water for washing (healing) and drinking.",
          verseRef: "38:42"
        },
        {
          term: "وَوَهَبْنَا لَهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ",
          transliteration: "Wa Wahabna lahu Ahlahu wa Mithlahum ma'ahum",
          meaning: "And We granted him his family and the like of them with them",
          explanation: "Allah restored his family and doubled it - reward for patience.",
          verseRef: "38:43"
        },
        {
          term: "رَحْمَةً مِّنَّا وَذِكْرَىٰ لِأُولِي الْأَلْبَابِ",
          transliteration: "Rahmatan Minna wa Dhikra li-Ulil-Albab",
          meaning: "As mercy from Us and a reminder for those of understanding",
          explanation: "Ayyub's restoration was divine mercy and lesson for people of intellect.",
          verseRef: "38:43"
        },
        {
          term: "وَخُذْ بِيَدِكَ ضِغْثًا",
          transliteration: "Wa Khudh bi-Yadika Dighthan",
          meaning: "And take in your hand a bunch [of grass]",
          explanation: "Solution for Ayyub's oath - he had sworn to strike his wife, so Allah provided easy fulfillment.",
          verseRef: "38:44"
        },
        {
          term: "فَاضْرِب بِّهِ وَلَا تَحْنَثْ",
          transliteration: "Fa-drib bihi wa la Tahnath",
          meaning: "Strike with it and do not break your oath",
          explanation: "Merciful solution - symbolic strike with grass bundle to fulfill oath without harm.",
          verseRef: "38:44"
        },
        {
          term: "إِنَّا وَجَدْنَاهُ صَابِرًا",
          transliteration: "Inna Wajadnahu Sabiran",
          meaning: "Indeed, We found him patient",
          explanation: "Allah's testimony about Ayyub - found to be truly patient through all trials.",
          verseRef: "38:44",
          keyPhrase: true
        },
        {
          term: "نِّعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ",
          transliteration: "Ni'mal-'Abd Innahu Awwab",
          meaning: "Excellent is the servant; indeed, he was one repeatedly turning [to Allah]",
          explanation: "Same praise given to Ayyub - excellent servant and constantly returning to Allah.",
          verseRef: "38:44"
        }
      ]
    },

    otherProphets: {
      name: "Other Prophets Mentioned",
      nameArabic: "أنبياء آخرون",
      color: "#A855F7",
      icon: "Star",
      verses: "38:45-48",
      concepts: [
        {
          term: "وَاذْكُرْ عِبَادَنَا إِبْرَاهِيمَ وَإِسْحَاقَ وَيَعْقُوبَ",
          transliteration: "Wadhkur 'Ibadana Ibrahima wa Ishaqa wa Ya'qoob",
          meaning: "And remember Our servants Ibrahim, Ishaq, and Ya'qub",
          explanation: "Three generations of prophets mentioned together - grandfather, father, son.",
          verseRef: "38:45"
        },
        {
          term: "أُولِي الْأَيْدِي وَالْأَبْصَارِ",
          transliteration: "Ulil-Aydee wal-Absar",
          meaning: "Possessors of strength and vision",
          explanation: "Praised for 'ayd' (strength in worship/action) and 'absar' (insight/vision).",
          verseRef: "38:45"
        },
        {
          term: "إِنَّا أَخْلَصْنَاهُم بِخَالِصَةٍ ذِكْرَى الدَّارِ",
          transliteration: "Inna Akhlasnahum bi-Khalisatin Dhikra-d-Dar",
          meaning: "We chose them for an exclusive quality - remembrance of the [final] abode",
          explanation: "They were distinguished by constant remembrance of the Hereafter.",
          verseRef: "38:46"
        },
        {
          term: "وَإِنَّهُمْ عِندَنَا لَمِنَ الْمُصْطَفَيْنَ الْأَخْيَارِ",
          transliteration: "Wa Innahum 'Indana la-Minal-Mustafayn-al-Akhyar",
          meaning: "And indeed they are, to Us, among the chosen, the outstanding",
          explanation: "Highest praise - selected (mustafa) and best (akhyar) in Allah's sight.",
          verseRef: "38:47"
        },
        {
          term: "وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ",
          transliteration: "Wadhkur Isma'eela wal-Yasa'a wa Dhal-Kifl",
          meaning: "And remember Ismail, Elisha, and Dhul-Kifl",
          explanation: "Three more prophets mentioned - Ismail, Al-Yasa (Elisha), and Dhul-Kifl.",
          verseRef: "38:48"
        },
        {
          term: "وَكُلٌّ مِّنَ الْأَخْيَارِ",
          transliteration: "Wa Kullun min-al-Akhyar",
          meaning: "And all are among the outstanding",
          explanation: "All these prophets are among the best of humanity.",
          verseRef: "38:48"
        }
      ]
    },

    paradiseDescription: {
      name: "Description of Paradise",
      nameArabic: "وصف الجنة",
      color: "#22C55E",
      icon: "Sparkles",
      verses: "38:49-54",
      concepts: [
        {
          term: "هَٰذَا ذِكْرٌ",
          transliteration: "Hadha Dhikr",
          meaning: "This is a reminder",
          explanation: "Transition - the previous stories serve as dhikr (reminder) for believers.",
          verseRef: "38:49"
        },
        {
          term: "وَإِنَّ لِلْمُتَّقِينَ لَحُسْنَ مَآبٍ",
          transliteration: "Wa Inna lil-Muttaqeena la-Husna Ma'ab",
          meaning: "And indeed, for the righteous is a good return",
          explanation: "Promise for the muttaqeen (God-conscious) - excellent final destination.",
          verseRef: "38:49"
        },
        {
          term: "جَنَّاتِ عَدْنٍ مُّفَتَّحَةً لَّهُمُ الْأَبْوَابُ",
          transliteration: "Jannati 'Adnin Mufattahatan lahum-ul-Abwab",
          meaning: "Gardens of perpetual residence, with doors opened for them",
          explanation: "Gardens of Eden with gates already open - welcoming the righteous.",
          verseRef: "38:50"
        },
        {
          term: "مُتَّكِئِينَ فِيهَا يَدْعُونَ فِيهَا بِفَاكِهَةٍ كَثِيرَةٍ وَشَرَابٍ",
          transliteration: "Muttaki'eena Feeha Yad'oona Feeha bi-Fakihatin Katheeratin wa Sharab",
          meaning: "Reclining therein, calling for much fruit and drink",
          explanation: "Comfortable reclining, abundant fruits and drinks at their call.",
          verseRef: "38:51"
        },
        {
          term: "وَعِندَهُمْ قَاصِرَاتُ الطَّرْفِ أَتْرَابٌ",
          transliteration: "Wa 'Indahum Qasiraat-ut-Tarfi Atrab",
          meaning: "And with them will be women limiting their glances, of equal age",
          explanation: "Companions with modest gazes, all of same age - perfect companions.",
          verseRef: "38:52"
        },
        {
          term: "هَٰذَا مَا تُوعَدُونَ لِيَوْمِ الْحِسَابِ",
          transliteration: "Hadha ma Too'adoona li-Yawm-il-Hisab",
          meaning: "This is what you are promised for the Day of Account",
          explanation: "Confirmation - these rewards are promised for the Day of Judgment.",
          verseRef: "38:53"
        },
        {
          term: "إِنَّ هَٰذَا لَرِزْقُنَا مَا لَهُ مِن نَّفَادٍ",
          transliteration: "Inna Hadha la-Rizquna ma lahu min Nafad",
          meaning: "Indeed, this is Our provision, for it there is no depletion",
          explanation: "Allah's provision in Paradise - never-ending, inexhaustible.",
          verseRef: "38:54",
          keyPhrase: true
        }
      ]
    },

    hellfireDescription: {
      name: "Description of Hellfire",
      nameArabic: "وصف جهنم",
      color: "#EF4444",
      icon: "AlertTriangle",
      verses: "38:55-64",
      concepts: [
        {
          term: "هَٰذَا وَإِنَّ لِلطَّاغِينَ لَشَرَّ مَآبٍ",
          transliteration: "Hadha wa Inna lit-Tagheena la-Sharra Ma'ab",
          meaning: "This [is so]. And for the transgressors is an evil return",
          explanation: "Contrast - those who transgress will have the worst destination.",
          verseRef: "38:55"
        },
        {
          term: "جَهَنَّمَ يَصْلَوْنَهَا",
          transliteration: "Jahannama Yaslawnaha",
          meaning: "Hell, which they will burn",
          explanation: "Jahannam - they will enter and experience its burning.",
          verseRef: "38:56"
        },
        {
          term: "فَبِئْسَ الْمِهَادُ",
          transliteration: "Fa-bi'sal-Mihad",
          meaning: "Wretched is the resting place",
          explanation: "Terrible bed/resting place - opposite of the comfort in Paradise.",
          verseRef: "38:56"
        },
        {
          term: "هَٰذَا فَلْيَذُوقُوهُ حَمِيمٌ وَغَسَّاقٌ",
          transliteration: "Hadha fa-l-Yadhooqoohu Hameemun wa Ghassaq",
          meaning: "This - so let them taste it - is scalding water and [foul] discharge",
          explanation: "Two punishments: hameem (boiling water) and ghassaq (pus or freezing cold).",
          verseRef: "38:57"
        },
        {
          term: "وَآخَرُ مِن شَكْلِهِ أَزْوَاجٌ",
          transliteration: "Wa Aakharu min Shaklihi Azwaj",
          meaning: "And other [punishments] of its kind in pairs",
          explanation: "Multiple paired punishments - various types of torment.",
          verseRef: "38:58"
        },
        {
          term: "هَٰذَا فَوْجٌ مُّقْتَحِمٌ مَّعَكُمْ",
          transliteration: "Hadha Fawjun Muqtahimun ma'akum",
          meaning: "This is a company bursting in with you",
          explanation: "Groups rushing into Hell together - leaders and followers.",
          verseRef: "38:59"
        },
        {
          term: "لَا مَرْحَبًا بِهِمْ",
          transliteration: "La Marhaban Bihim",
          meaning: "No welcome for them",
          explanation: "No welcome - instead of hospitality, they receive curse and torment.",
          verseRef: "38:59"
        },
        {
          term: "إِنَّهُمْ صَالُو النَّارِ",
          transliteration: "Innahum Salu-n-Nar",
          meaning: "Indeed, they will burn in the Fire",
          explanation: "Confirmation of their entry into the Fire.",
          verseRef: "38:59"
        },
        {
          term: "قَالُوا بَلْ أَنتُمْ لَا مَرْحَبًا بِكُمْ",
          transliteration: "Qalu Bal Antum la Marhaban Bikum",
          meaning: "They said: No, it is you - no welcome for you",
          explanation: "Followers blame leaders - mutual accusation in Hell.",
          verseRef: "38:60"
        },
        {
          term: "أَنتُمْ قَدَّمْتُمُوهُ لَنَا",
          transliteration: "Antum Qaddamtumoohu lana",
          meaning: "You presented this to us",
          explanation: "Followers accuse leaders of leading them to this fate.",
          verseRef: "38:60"
        },
        {
          term: "فَبِئْسَ الْقَرَارُ",
          transliteration: "Fa-bi'sal-Qarar",
          meaning: "Wretched is the settlement",
          explanation: "Terrible final abode - permanent misery.",
          verseRef: "38:60"
        },
        {
          term: "رَبَّنَا مَن قَدَّمَ لَنَا هَٰذَا فَزِدْهُ عَذَابًا ضِعْفًا فِي النَّارِ",
          transliteration: "Rabbana man Qaddama lana Hadha fa-Zidhu 'Adhaban Di'fan fin-Nar",
          meaning: "Our Lord, whoever brought this upon us - increase for him double punishment in Fire",
          explanation: "They pray against those who misled them - wanting double punishment for leaders.",
          verseRef: "38:61"
        },
        {
          term: "وَقَالُوا مَا لَنَا لَا نَرَىٰ رِجَالًا كُنَّا نَعُدُّهُم مِّنَ الْأَشْرَارِ",
          transliteration: "Wa Qalu ma Lana la Nara Rijalan Kunna Na'udduhum min-al-Ashrar",
          meaning: "They will say: What is wrong with us that we do not see men we used to count among the worst?",
          explanation: "Disbelievers wonder where the believers are - whom they mocked as evil.",
          verseRef: "38:62"
        },
        {
          term: "أَتَّخَذْنَاهُمْ سِخْرِيًّا",
          transliteration: "Attakhadh-nahum Sikhriyyan",
          meaning: "Did we take them in ridicule?",
          explanation: "Realization that they mocked the righteous - now the righteous are not in Hell.",
          verseRef: "38:63"
        },
        {
          term: "أَمْ زَاغَتْ عَنْهُمُ الْأَبْصَارُ",
          transliteration: "Am Zaghat 'anhum-ul-Absar",
          meaning: "Or have our eyes turned away from them?",
          explanation: "Wondering if they simply can't see the believers - ironic spiritual blindness.",
          verseRef: "38:63"
        },
        {
          term: "إِنَّ ذَٰلِكَ لَحَقٌّ تَخَاصُمُ أَهْلِ النَّارِ",
          transliteration: "Inna Dhalika la-Haqqun Takhasumu Ahl-in-Nar",
          meaning: "Indeed, that is truth - the quarreling of the people of Fire",
          explanation: "Allah confirms this mutual accusation in Hell is reality - they will argue forever.",
          verseRef: "38:64"
        }
      ]
    },

    propheticMission: {
      name: "The Prophet's Mission",
      nameArabic: "رسالة النبي",
      color: "#3B82F6",
      icon: "Book",
      verses: "38:65-70",
      concepts: [
        {
          term: "قُلْ إِنَّمَا أَنَا مُنذِرٌ",
          transliteration: "Qul Innama Ana Mundhir",
          meaning: "Say: I am only a warner",
          explanation: "Prophet's role defined - a warner, not controller of people's choices.",
          verseRef: "38:65"
        },
        {
          term: "وَمَا مِنْ إِلَٰهٍ إِلَّا اللَّهُ الْوَاحِدُ الْقَهَّارُ",
          transliteration: "Wa ma min Ilahin illa-llahu-l-Wahid-ul-Qahhar",
          meaning: "And there is no deity except Allah, the One, the Prevailing",
          explanation: "Core message - Tawheed. Allah is One (Wahid) and Dominant (Qahhar).",
          verseRef: "38:65",
          keyPhrase: true
        },
        {
          term: "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا",
          transliteration: "Rabb-us-Samawati wal-Ardi wa ma Baynahuma",
          meaning: "Lord of the heavens and the earth and what is between them",
          explanation: "Allah's sovereignty over all creation - heavens, earth, and everything between.",
          verseRef: "38:66"
        },
        {
          term: "الْعَزِيزُ الْغَفَّارُ",
          transliteration: "Al-'Azeez-ul-Ghaffar",
          meaning: "The Mighty, the Perpetual Forgiver",
          explanation: "Two divine names: 'Azeez (Mighty/Powerful) and Ghaffar (Repeatedly Forgiving).",
          verseRef: "38:66"
        },
        {
          term: "قُلْ هُوَ نَبَأٌ عَظِيمٌ",
          transliteration: "Qul Huwa Naba'un 'Adheem",
          meaning: "Say: It is great news",
          explanation: "The Quran/message is tremendous news - not to be taken lightly.",
          verseRef: "38:67",
          keyPhrase: true
        },
        {
          term: "أَنتُمْ عَنْهُ مُعْرِضُونَ",
          transliteration: "Antum 'anhu Mu'ridoon",
          meaning: "From which you are turning away",
          explanation: "Despite its greatness, they turn away heedlessly.",
          verseRef: "38:68"
        },
        {
          term: "مَا كَانَ لِيَ مِنْ عِلْمٍ بِالْمَلَإِ الْأَعْلَىٰ إِذْ يَخْتَصِمُونَ",
          transliteration: "Ma Kana Liya min 'Ilmin bil-Mala'-il-A'la idh Yakhtasimoon",
          meaning: "I had no knowledge of the exalted assembly when they disputed",
          explanation: "Prophet had no prior knowledge of angelic discussions - proof of revelation.",
          verseRef: "38:69"
        },
        {
          term: "إِن يُوحَىٰ إِلَيَّ إِلَّا أَنَّمَا أَنَا نَذِيرٌ مُّبِينٌ",
          transliteration: "In Yooha Ilayya illa Annama Ana Nadheerun Mubeen",
          meaning: "It is only revealed to me that I am a clear warner",
          explanation: "The Prophet's role is clear warning - not claim to divine knowledge on his own.",
          verseRef: "38:70"
        }
      ]
    },

    iblisStory: {
      name: "The Story of Iblis",
      nameArabic: "قصة إبليس",
      color: "#DC2626",
      icon: "Zap",
      verses: "38:71-85",
      concepts: [
        {
          term: "إِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن طِينٍ",
          transliteration: "Idh Qala Rabbuka lil-Mala'ikati Innee Khaliqun Basharan min Teen",
          meaning: "When your Lord said to the angels: I am creating a human from clay",
          explanation: "Allah announces Adam's creation from clay - setting the scene for the test.",
          verseRef: "38:71"
        },
        {
          term: "فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي",
          transliteration: "Fa-idha Sawwaytuhu wa Nafakhtu feehi min Roohee",
          meaning: "When I have proportioned him and breathed into him of My spirit",
          explanation: "Two stages: physical formation and divine spirit - human dignity from Allah's breath.",
          verseRef: "38:72",
          keyPhrase: true
        },
        {
          term: "فَقَعُوا لَهُ سَاجِدِينَ",
          transliteration: "Faqa'oo lahu Sajideen",
          meaning: "Then fall down to him prostrating",
          explanation: "Command to prostrate to Adam - gesture of honor, not worship.",
          verseRef: "38:72"
        },
        {
          term: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
          transliteration: "Fa-Sajad-al-Mala'ikatu Kulluhum Ajma'oon",
          meaning: "So the angels prostrated, all of them entirely",
          explanation: "All angels obeyed without exception - complete submission to Allah's command.",
          verseRef: "38:73"
        },
        {
          term: "إِلَّا إِبْلِيسَ اسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ",
          transliteration: "Illa Ibleesa Istakbara wa Kana min-al-Kafireen",
          meaning: "Except Iblis; he was arrogant and was among the disbelievers",
          explanation: "Iblis refused due to arrogance (istikbar) - making him a disbeliever.",
          verseRef: "38:74",
          keyPhrase: true
        },
        {
          term: "قَالَ يَا إِبْلِيسُ مَا مَنَعَكَ أَن تَسْجُدَ لِمَا خَلَقْتُ بِيَدَيَّ",
          transliteration: "Qala Ya Ibleesu ma Mana'aka an Tasjuda lima Khalaqtu bi-Yadayya",
          meaning: "He said: O Iblis, what prevented you from prostrating to what I created with My hands?",
          explanation: "Allah questions Iblis - Adam was created by Allah's own hands, deserving honor.",
          verseRef: "38:75"
        },
        {
          term: "أَسْتَكْبَرْتَ أَمْ كُنتَ مِنَ الْعَالِينَ",
          transliteration: "Astakbarta am Kunta min-al-'Aaleen",
          meaning: "Were you arrogant or were you of the haughty?",
          explanation: "Question exposing Iblis's arrogance - no valid excuse for disobedience.",
          verseRef: "38:75"
        },
        {
          term: "قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ",
          transliteration: "Qala Ana Khayrun minhu Khalaqtanee min Narin wa Khalaqtahu min Teen",
          meaning: "He said: I am better than him. You created me from fire and created him from clay",
          explanation: "Iblis's argument - fire is superior to clay. Flawed reasoning based on material origin.",
          verseRef: "38:76",
          keyPhrase: true
        },
        {
          term: "قَالَ فَاخْرُجْ مِنْهَا فَإِنَّكَ رَجِيمٌ",
          transliteration: "Qala Fa-khruj minha fa-Innaka Rajeem",
          meaning: "He said: Then get out of it, for indeed you are expelled",
          explanation: "Iblis expelled from Paradise - rajeem (stoned, accursed, expelled).",
          verseRef: "38:77"
        },
        {
          term: "وَإِنَّ عَلَيْكَ لَعْنَتِي إِلَىٰ يَوْمِ الدِّينِ",
          transliteration: "Wa Inna 'Alayka La'natee ila Yawm-id-Deen",
          meaning: "And upon you is My curse until the Day of Judgment",
          explanation: "Perpetual curse on Iblis - lasting until the Day of Judgment.",
          verseRef: "38:78"
        },
        {
          term: "قَالَ رَبِّ فَأَنظِرْنِي إِلَىٰ يَوْمِ يُبْعَثُونَ",
          transliteration: "Qala Rabbi fa-Andhirnee ila Yawmi Yub'athoon",
          meaning: "He said: My Lord, then give me respite until the Day they are resurrected",
          explanation: "Iblis asks for time - to mislead humans until resurrection.",
          verseRef: "38:79"
        },
        {
          term: "قَالَ فَإِنَّكَ مِنَ الْمُنظَرِينَ",
          transliteration: "Qala fa-Innaka min-al-Mundhareen",
          meaning: "He said: Indeed, you are of those reprieved",
          explanation: "Allah grants respite - part of the test for humanity.",
          verseRef: "38:80"
        },
        {
          term: "إِلَىٰ يَوْمِ الْوَقْتِ الْمَعْلُومِ",
          transliteration: "Ila Yawm-il-Waqt-il-Ma'loom",
          meaning: "Until the Day of the Appointed Time",
          explanation: "Respite until a known time - Allah's wisdom in the duration.",
          verseRef: "38:81"
        },
        {
          term: "قَالَ فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ",
          transliteration: "Qala fa-bi-'Izzatika la-Ughwiyannahum Ajma'een",
          meaning: "He said: By Your might, I will surely mislead them all",
          explanation: "Iblis swears by Allah's might to mislead all humans - vow of enmity.",
          verseRef: "38:82",
          keyPhrase: true
        },
        {
          term: "إِلَّا عِبَادَكَ مِنْهُمُ الْمُخْلَصِينَ",
          transliteration: "Illa 'Ibadaka minhum-ul-Mukhlaseen",
          meaning: "Except Your servants among them - the chosen ones",
          explanation: "Iblis admits inability to mislead sincere servants - Allah's protection for the devoted.",
          verseRef: "38:83",
          keyPhrase: true
        },
        {
          term: "قَالَ فَالْحَقُّ وَالْحَقَّ أَقُولُ",
          transliteration: "Qala fal-Haqqu wal-Haqqa Aqool",
          meaning: "He said: The truth [is My oath], and the truth I say",
          explanation: "Allah swears by the Truth (Himself) - about to declare truth.",
          verseRef: "38:84"
        },
        {
          term: "لَأَمْلَأَنَّ جَهَنَّمَ مِنكَ وَمِمَّن تَبِعَكَ مِنْهُمْ أَجْمَعِينَ",
          transliteration: "La-Amla'anna Jahannama minka wa Mimman Tabi'aka minhum Ajma'een",
          meaning: "I will surely fill Hell with you and those of them who follow you - all together",
          explanation: "Allah's decree - Hell will be filled with Iblis and his followers from humans.",
          verseRef: "38:85",
          keyPhrase: true
        }
      ]
    },

    closingMessage: {
      name: "Closing Message",
      nameArabic: "الخاتمة",
      color: "#6366F1",
      icon: "Star",
      verses: "38:86-88",
      concepts: [
        {
          term: "قُلْ مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ",
          transliteration: "Qul ma As'alukum 'alayhi min Ajr",
          meaning: "Say: I do not ask of you for it any payment",
          explanation: "Prophet seeks no worldly compensation - proof of sincerity.",
          verseRef: "38:86"
        },
        {
          term: "وَمَا أَنَا مِنَ الْمُتَكَلِّفِينَ",
          transliteration: "Wa ma Ana min-al-Mutakallefeen",
          meaning: "And I am not of the pretentious",
          explanation: "No pretense or false claims - authentic message without affectation.",
          verseRef: "38:86"
        },
        {
          term: "إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ",
          transliteration: "In Huwa illa Dhikrun lil-'Aalameen",
          meaning: "It is nothing but a reminder to the worlds",
          explanation: "The Quran is dhikr (reminder) for all of creation - universal message.",
          verseRef: "38:87",
          keyPhrase: true
        },
        {
          term: "وَلَتَعْلَمُنَّ نَبَأَهُ بَعْدَ حِينٍ",
          transliteration: "Wa la-Ta'lamunna Naba'ahu Ba'da Heen",
          meaning: "And you will surely know its truth after a time",
          explanation: "Final warning - they will know the truth later, whether in this life or the next.",
          verseRef: "38:88"
        }
      ]
    }
  },

  relationships: [
    {
      from: "صبر داود (38:17)",
      to: "صبر أيوب (38:44)",
      type: "parallel",
      description: "Both prophets praised for patience"
    },
    {
      from: "أواب (38:17, 30, 44)",
      to: "المخلصين (38:83)",
      type: "characteristic",
      description: "Constantly returning to Allah leads to being among the sincere"
    },
    {
      from: "خلقتني من نار (38:76)",
      to: "استكبر (38:74)",
      type: "causation",
      description: "Iblis's flawed reasoning led to his arrogance"
    },
    {
      from: "فسجد الملائكة (38:73)",
      to: "إلا إبليس (38:74)",
      type: "contrast",
      description: "Angels' obedience vs Iblis's rebellion"
    },
    {
      from: "لأغوينهم (38:82)",
      to: "إلا عبادك المخلصين (38:83)",
      type: "exception",
      description: "Iblis cannot mislead the sincere servants"
    },
    {
      from: "حسن مآب (38:25, 40, 49)",
      to: "شر مآب (38:55)",
      type: "contrast",
      description: "Good return for righteous vs evil return for transgressors"
    },
    {
      from: "نعم العبد (38:30, 44)",
      to: "أواب (38:17, 30, 44)",
      type: "qualification",
      description: "Being an excellent servant requires constant return to Allah"
    },
    {
      from: "ذكر الدار (38:46)",
      to: "يوم الحساب (38:26)",
      type: "focus",
      description: "Remembering the final abode prevents following desires"
    }
  ],

  thematicFlow: {
    title: "From Divine Warning to Human Test",
    titleArabic: "من الإنذار الإلهي إلى الابتلاء البشري",
    description: "The surah moves from challenging disbelievers to stories of tested prophets to the origin of human testing through Iblis",
    stages: [
      {
        stage: 1,
        theme: "Opening Oath and Warning",
        verses: "38:1-16",
        description: "Oath by the Quran, disbelievers' arrogance, previous nations destroyed",
        color: "#8B5CF6"
      },
      {
        stage: 2,
        theme: "Dawud's Kingdom and Test",
        verses: "38:17-26",
        description: "Mountains and birds praise Allah with Dawud, the parable of the two disputants",
        color: "#F59E0B"
      },
      {
        stage: 3,
        theme: "Sulayman's Unique Kingdom",
        verses: "38:30-40",
        description: "Wind, jinn, and unlimited authority - test of worldly power",
        color: "#10B981"
      },
      {
        stage: 4,
        theme: "Ayyub's Patience in Suffering",
        verses: "38:41-44",
        description: "Model of patience through illness and loss",
        color: "#06B6D4"
      },
      {
        stage: 5,
        theme: "Other Chosen Prophets",
        verses: "38:45-48",
        description: "Ibrahim, Ishaq, Ya'qub, Ismail, Elisha, Dhul-Kifl praised",
        color: "#A855F7"
      },
      {
        stage: 6,
        theme: "Paradise and Hellfire",
        verses: "38:49-64",
        description: "Contrasting destinations - endless provision vs eternal dispute",
        color: "#22C55E"
      },
      {
        stage: 7,
        theme: "Prophet's Mission Defined",
        verses: "38:65-70",
        description: "Warner, monotheism, great news they ignore",
        color: "#3B82F6"
      },
      {
        stage: 8,
        theme: "Iblis's Rebellion and Vow",
        verses: "38:71-85",
        description: "Creation of Adam, Iblis's refusal, vow to mislead, Allah's decree",
        color: "#DC2626"
      },
      {
        stage: 9,
        theme: "Final Declaration",
        verses: "38:86-88",
        description: "No payment sought, universal reminder, truth will be known",
        color: "#6366F1"
      }
    ]
  },

  keyCharacters: [
    {
      name: "Dawud (David)",
      nameArabic: "داود",
      role: "Prophet-King",
      qualities: ["Strength (ayd)", "Constantly returning to Allah (awwab)", "Just ruler", "Wisdom (hikmah)"],
      arc: "Given kingdom, tested with judgment, repented immediately, forgiven"
    },
    {
      name: "Sulayman (Solomon)",
      nameArabic: "سليمان",
      role: "Prophet-King with unique powers",
      qualities: ["Excellent servant", "Awwab", "Master of wind and jinn", "Unique kingdom"],
      arc: "Tested with distraction, repented, granted unparalleled authority"
    },
    {
      name: "Ayyub (Job)",
      nameArabic: "أيوب",
      role: "Prophet of patience",
      qualities: ["Patient (sabir)", "Excellent servant", "Awwab", "Maintained faith through suffering"],
      arc: "Afflicted with illness, called upon Allah, healed, family restored double"
    },
    {
      name: "Iblis (Satan)",
      nameArabic: "إبليس",
      role: "The Accursed Enemy",
      qualities: ["Arrogance", "Self-superiority", "Disobedience", "Sworn enemy of humanity"],
      arc: "Refused to prostrate to Adam, expelled, vowed to mislead all except sincere servants"
    },
    {
      name: "Adam",
      nameArabic: "آدم",
      role: "First human",
      qualities: ["Created from clay", "Received Allah's spirit", "Honored by angels' prostration"],
      arc: "Created with honor, catalyst for Iblis's fall"
    }
  ],

  moralLessons: {
    title: "Timeless Lessons from Surah Sad",
    titleArabic: "دروس خالدة من سورة ص",
    lessons: [
      {
        lesson: "Be Awwab - Constantly Return to Allah",
        lessonArabic: "كن أواباً - عد إلى الله دائماً",
        explanation: "Dawud, Sulayman, and Ayyub are all praised as 'awwab' - those who constantly return to Allah in repentance and devotion",
        verses: ["38:17", "38:30", "38:44"]
      },
      {
        lesson: "Judge with Truth, Not Desire",
        lessonArabic: "احكم بالحق لا بالهوى",
        explanation: "Dawud was commanded to judge with truth and not follow desires - applicable to all leadership and decision-making",
        verses: ["38:26"]
      },
      {
        lesson: "Arrogance is the Root of Disbelief",
        lessonArabic: "التكبر أصل الكفر",
        explanation: "Iblis's downfall was arrogance (istikbar) - considering himself better than Adam. Pride prevents accepting truth",
        verses: ["38:74", "38:76"]
      },
      {
        lesson: "Patience Through Suffering",
        lessonArabic: "الصبر على البلاء",
        explanation: "Ayyub's patience through illness and loss earned Allah's praise and restoration",
        verses: ["38:41-44"]
      },
      {
        lesson: "Worldly Blessings Can Be Tests",
        lessonArabic: "النعم الدنيوية ابتلاء",
        explanation: "Sulayman's horses distracted him from worship - even blessings can become tests if not handled properly",
        verses: ["38:31-33"]
      },
      {
        lesson: "Sincerity Protects from Satan",
        lessonArabic: "الإخلاص يحمي من الشيطان",
        explanation: "Iblis admitted he cannot mislead Allah's sincere servants (mukhalseen) - sincerity is protection",
        verses: ["38:83"]
      },
      {
        lesson: "Remember the Day of Account",
        lessonArabic: "تذكر يوم الحساب",
        explanation: "Those who stray do so because they forget the Day of Account - remembering it prevents deviation",
        verses: ["38:26"]
      },
      {
        lesson: "Truth Will Be Known Eventually",
        lessonArabic: "الحق سيظهر في النهاية",
        explanation: "Even if disbelievers deny now, they will know the truth after a time",
        verses: ["38:88"]
      }
    ]
  },

  linguisticFeatures: {
    openingLetters: "Sad (ص) - one of the mysterious letters (Huruf Muqatta'at)",
    oaths: "Oath by the Quran 'dhil-dhikr' (full of remembrance)",
    repetition: "'Awwab' repeated for Dawud, Sulayman, and Ayyub",
    rhetoricQuestions: "Multiple rhetorical questions challenging disbelievers",
    dialogue: "Extended dialogue between Allah and Iblis (38:75-85)",
    contrast: "Paradise vs Hellfire descriptions (38:49-64)",
    prophetPraise: "'Ni'mal-'abd' (excellent servant) used for Sulayman and Ayyub"
  },

  practicalApplication: {
    title: "Living by Surah Sad",
    applications: [
      {
        principle: "When you sin or err",
        how: "Immediately seek forgiveness like Dawud - fall down, repent, return to Allah",
        verse: "38:24"
      },
      {
        principle: "When worldly things distract you",
        how: "Recognize the distraction like Sulayman and prioritize worship",
        verse: "38:32"
      },
      {
        principle: "When facing illness or hardship",
        how: "Be patient like Ayyub, call upon Allah, and trust in His relief",
        verse: "38:41-44"
      },
      {
        principle: "When making judgments",
        how: "Judge with truth (haqq), don't follow personal desires",
        verse: "38:26"
      },
      {
        principle: "When feeling superior",
        how: "Remember Iblis's fall - arrogance led to eternal curse",
        verse: "38:74-76"
      },
      {
        principle: "When Satan whispers",
        how: "Strive to be among the mukhalseen (sincere) whom he cannot mislead",
        verse: "38:83"
      },
      {
        principle: "When people mock your faith",
        how: "Remember you will all know the truth after a time",
        verse: "38:88"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 7,
        name: "Al-A'raf",
        verses: "7:11-18",
        relation: "Iblis's story",
        sharedTheme: "Satan's refusal to prostrate and expulsion"
      },
      {
        surah: 15,
        name: "Al-Hijr",
        verses: "15:26-44",
        relation: "Creation of Adam and Iblis",
        sharedTheme: "Clay creation and Satan's vow"
      },
      {
        surah: 17,
        name: "Al-Isra",
        verses: "17:61-65",
        relation: "Iblis and Adam",
        sharedTheme: "Satan's enmity to humans"
      },
      {
        surah: 21,
        name: "Al-Anbiya",
        verses: "21:78-82, 83-84",
        relation: "Dawud, Sulayman, Ayyub stories",
        sharedTheme: "Prophets' trials and blessings"
      },
      {
        surah: 27,
        name: "An-Naml",
        verses: "27:15-44",
        relation: "Sulayman's kingdom",
        sharedTheme: "Sulayman's power over jinn, birds, ants"
      },
      {
        surah: 34,
        name: "Saba",
        verses: "34:10-14",
        relation: "Dawud and Sulayman",
        sharedTheme: "Their blessings and iron/copper work"
      }
    ]
  },

  reflectionQuestions: [
    "Am I 'awwab' - do I constantly return to Allah after every slip?",
    "What worldly distractions take me away from remembering Allah?",
    "Do I judge matters with truth or follow my desires?",
    "Is there any arrogance in me that makes me feel superior to others?",
    "How patient am I when facing hardships compared to Ayyub?",
    "Am I striving to be among the 'mukhalseen' (sincere) whom Satan cannot mislead?",
    "Do I remember the Day of Account in my daily decisions?"
  ]
};

export default ONTOLOGY;
