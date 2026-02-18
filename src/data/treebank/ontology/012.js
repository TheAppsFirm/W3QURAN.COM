/**
 * Surah Yusuf (12) - Ontology of Quranic Concepts
 * The Prophet Joseph
 *
 * Theme: The most detailed and beautiful narrative in the Quran - the story of Prophet Yusuf
 * This is the ONLY surah that tells a complete story from beginning to end
 * Called "Ahsan al-Qasas" (The Best of Stories) by Allah Himself
 *
 * Revelation: Makki (during the "Year of Sorrow" when Prophet lost Khadijah and Abu Talib)
 * Total Ayahs: 111
 */

export const ONTOLOGY = {
  surahId: 12,
  surahName: "Yusuf",
  surahNameArabic: "يوسف",
  surahNameMeaning: "Joseph",
  revelationType: "Makki",
  totalAyahs: 111,
  chronologicalOrder: 53,
  juzNumber: "12-13",
  rukus: 12,

  introduction: {
    title: "The Best of Stories",
    titleArabic: "أحسن القصص",
    description: {
      en: "Surah Yusuf is unique in the Quran - it tells one complete, continuous story from beginning to end. Revealed during the Prophet's most difficult period (Year of Sorrow), it served as consolation and hope. The story covers jealousy, betrayal, temptation, imprisonment, patience, divine planning, and ultimate triumph.",
      ur: "سورہ یوسف قرآن میں منفرد ہے - یہ شروع سے آخر تک ایک مکمل کہانی بیان کرتی ہے۔ نبی ﷺ کے مشکل ترین دور (عام الحزن) میں نازل ہوئی، تسلی اور امید کے طور پر۔ کہانی میں حسد، دھوکہ، آزمائش، قید، صبر، الٰہی منصوبہ بندی، اور آخری فتح شامل ہے۔",
      hi: "सूरह यूसुफ कुरान में अनोखी है - यह शुरू से अंत तक एक पूरी कहानी बयान करती है। नबी के सबसे मुश्किल दौर (साल-ए-ग़म) में नाज़िल हुई, तसल्ली और उम्मीद के रूप में।"
    },
    revelationContext: {
      en: "Revealed when the Prophet Muhammad was grieving the loss of his wife Khadijah and uncle Abu Talib. The story of Yusuf's patience through trials and ultimate success provided comfort.",
      ur: "جب نبی ﷺ اپنی بیوی خدیجہ اور چچا ابو طالب کی وفات کا غم اٹھا رہے تھے۔ یوسف کی آزمائشوں میں صبر اور آخری کامیابی کی کہانی نے تسلی دی۔"
    }
  },

  categories: {
    yusufsChildhood: {
      name: "Yusuf's Childhood & The Dream",
      nameArabic: "طفولة يوسف والرؤيا",
      color: "#8B5CF6",
      verses: "12:1-6",
      concepts: [
        {
          term: "أَحْسَنَ الْقَصَصِ",
          transliteration: "Ahsan al-Qasas",
          meaning: "The Best of Stories",
          explanation: "Allah calls this 'the best of stories' - perfect in narrative, moral lessons, and structure. No human author could craft such a tale.",
          verseRef: "12:3"
        },
        {
          term: "رُؤْيَا",
          transliteration: "Ru'ya",
          meaning: "The Prophetic Dream",
          explanation: "Young Yusuf sees eleven stars, sun, and moon prostrating to him - a prophecy of his future status. True dreams are 1/46th of prophethood.",
          verseRef: "12:4",
          relatedVerses: ["12:100"]
        },
        {
          term: "أَحَدَ عَشَرَ كَوْكَبًا",
          transliteration: "Ahada 'Ashara Kawkaban",
          meaning: "Eleven Stars",
          explanation: "Representing his eleven brothers. Celestial imagery showing their future submission to Yusuf's authority.",
          verseRef: "12:4"
        },
        {
          term: "الشَّمْسَ وَالْقَمَرَ",
          transliteration: "Ash-Shams wal-Qamar",
          meaning: "The Sun and Moon",
          explanation: "Representing his father Ya'qub and mother (or aunt who raised him). They too would honor him.",
          verseRef: "12:4"
        },
        {
          term: "لَا تَقْصُصْ رُؤْيَاكَ",
          transliteration: "La Taqsus Ru'yaka",
          meaning: "Don't narrate your dream",
          explanation: "Ya'qub wisely advises concealing the dream from brothers. Lesson: Don't share blessings with potential enviers.",
          verseRef: "12:5"
        },
        {
          term: "الشَّيْطَانَ... عَدُوٌّ مُّبِينٌ",
          transliteration: "Ash-Shaytanu 'Aduwwun Mubeen",
          meaning: "Satan is a clear enemy",
          explanation: "Ya'qub explains that Satan incites jealousy between relatives. The brothers' envy was Satanic in origin.",
          verseRef: "12:5"
        }
      ]
    },

    brothersJealousy: {
      name: "The Brothers' Plot",
      nameArabic: "مكيدة الإخوة",
      color: "#EF4444",
      verses: "12:7-18",
      concepts: [
        {
          term: "لَقَدْ كَانَ فِي يُوسُفَ وَإِخْوَتِهِ آيَاتٌ",
          transliteration: "Laqad Kaana fi Yusufa wa Ikhwatihi Ayaat",
          meaning: "In Yusuf and his brothers are signs",
          explanation: "The story is full of 'ayaat' (signs/lessons) - jealousy's destruction, patience's reward, divine planning.",
          verseRef: "12:7"
        },
        {
          term: "أَحَبُّ إِلَىٰ أَبِينَا",
          transliteration: "Ahabbu ila Abeena",
          meaning: "More beloved to our father",
          explanation: "The brothers' jealousy stemmed from perceived favoritism. Parental equity is crucial to prevent sibling rivalry.",
          verseRef: "12:8"
        },
        {
          term: "اقْتُلُوا يُوسُفَ أَوِ اطْرَحُوهُ أَرْضًا",
          transliteration: "Uqtulu Yusufa aw Itrahoohu Ardan",
          meaning: "Kill Yusuf or cast him away",
          explanation: "Extreme response to jealousy - plotting murder of their own brother. Sin escalates when unchecked.",
          verseRef: "12:9"
        },
        {
          term: "غَيَابَتِ الْجُبِّ",
          transliteration: "Ghayabat al-Jubb",
          meaning: "Depths of the well",
          explanation: "One brother suggests the well instead of murder. A caravan would take him far away. Even in evil, some restraint.",
          verseRef: "12:10"
        },
        {
          term: "وَأَوْحَيْنَا إِلَيْهِ",
          transliteration: "Wa Awhayna Ilayhi",
          meaning: "We revealed to him",
          explanation: "Allah comforts young Yusuf in the dark well with revelation: 'You will inform them of this deed.' Divine support in darkest moments.",
          verseRef: "12:15"
        },
        {
          term: "بِدَمٍ كَذِبٍ",
          transliteration: "Bi-Damin Kadhibin",
          meaning: "With false blood",
          explanation: "They stained Yusuf's shirt with animal blood as 'proof' of wolf attack. But Ya'qub saw through the lie.",
          verseRef: "12:18"
        },
        {
          term: "صَبْرٌ جَمِيلٌ",
          transliteration: "Sabrun Jameel",
          meaning: "Beautiful Patience",
          explanation: "Ya'qub's response: 'Beautiful patience is most fitting.' Patience without complaint, trusting Allah completely.",
          verseRef: "12:18",
          keyPhrase: true
        }
      ]
    },

    egyptAndAziz: {
      name: "Egypt & The Aziz's House",
      nameArabic: "مصر وبيت العزيز",
      color: "#F59E0B",
      verses: "12:19-22",
      concepts: [
        {
          term: "سَيَّارَةٌ",
          transliteration: "Sayyarah",
          meaning: "A traveling caravan",
          explanation: "A caravan discovered Yusuf in the well. What seemed like disaster was Allah's plan to elevate him.",
          verseRef: "12:19"
        },
        {
          term: "يَا بُشْرَىٰ",
          transliteration: "Ya Bushra",
          meaning: "Good news!",
          explanation: "The water-drawer exclaimed with joy at finding a boy. Irony: They saw monetary value; Allah planned prophethood.",
          verseRef: "12:19"
        },
        {
          term: "بِثَمَنٍ بَخْسٍ دَرَاهِمَ مَعْدُودَةٍ",
          transliteration: "Bi-Thamanin Bakhsin Darahima Ma'doodah",
          meaning: "For a cheap price, few coins",
          explanation: "A future prophet sold for mere dirhams. Human valuations are nothing compared to divine worth.",
          verseRef: "12:20"
        },
        {
          term: "الْعَزِيزِ",
          transliteration: "Al-'Aziz",
          meaning: "The Minister/Noble",
          explanation: "High official of Egypt who bought Yusuf. Title means 'mighty/dear.' He sensed Yusuf's special nature.",
          verseRef: "12:21"
        },
        {
          term: "أَكْرِمِي مَثْوَاهُ",
          transliteration: "Akrimee Mathwaahu",
          meaning: "Honor his stay",
          explanation: "The Aziz instructed his wife to treat Yusuf well. Little did he know what trials this would bring.",
          verseRef: "12:21"
        },
        {
          term: "مَكَّنَّا لِيُوسُفَ فِي الْأَرْضِ",
          transliteration: "Makkanna li-Yusufa fil-Ard",
          meaning: "We established Yusuf in the land",
          explanation: "Allah was positioning Yusuf for greatness. Every hardship was a stepping stone to authority.",
          verseRef: "12:21"
        },
        {
          term: "تَأْوِيلِ الْأَحَادِيثِ",
          transliteration: "Ta'weel al-Ahaadeeth",
          meaning: "Interpretation of dreams/events",
          explanation: "Allah taught Yusuf dream interpretation - a gift that would later save nations from famine.",
          verseRef: "12:21"
        },
        {
          term: "آتَيْنَاهُ حُكْمًا وَعِلْمًا",
          transliteration: "Aataynahu Hukman wa 'Ilman",
          meaning: "We gave him wisdom and knowledge",
          explanation: "At maturity, Yusuf received divine wisdom. Reward for the patient and righteous (muhsineen).",
          verseRef: "12:22"
        }
      ]
    },

    temptationOfZulaykha: {
      name: "The Temptation of Zulaykha",
      nameArabic: "فتنة زليخا",
      color: "#EC4899",
      verses: "12:23-34",
      concepts: [
        {
          term: "رَاوَدَتْهُ الَّتِي هُوَ فِي بَيْتِهَا",
          transliteration: "Rawadathu-llatee Huwa fee Baytiha",
          meaning: "She sought to seduce him",
          explanation: "The Aziz's wife (tradition names her Zulaykha) tried to seduce Yusuf. Test of beauty, power, and opportunity.",
          verseRef: "12:23"
        },
        {
          term: "غَلَّقَتِ الْأَبْوَابَ",
          transliteration: "Ghallaqat al-Abwaab",
          meaning: "She locked the doors",
          explanation: "Multiple doors locked - Arabic intensive form shows complete privacy and planning. No escape route.",
          verseRef: "12:23"
        },
        {
          term: "هَيْتَ لَكَ",
          transliteration: "Hayta Laka",
          meaning: "Come to me",
          explanation: "Direct, shameless invitation. She had status, beauty, privacy, persistence. Yet Yusuf resisted.",
          verseRef: "12:23"
        },
        {
          term: "مَعَاذَ اللَّهِ",
          transliteration: "Ma'adh-Allah",
          meaning: "I seek refuge in Allah!",
          explanation: "Yusuf's immediate response - fleeing to Allah, not debating or rationalizing. Model of chastity.",
          verseRef: "12:23",
          keyPhrase: true
        },
        {
          term: "إِنَّهُ رَبِّي أَحْسَنَ مَثْوَايَ",
          transliteration: "Innahu Rabbee Ahsana Mathwaaya",
          meaning: "He (the Aziz/Allah) has been good to me",
          explanation: "Two meanings: The master treated me well (I won't betray him). Allah blessed me (I won't disobey Him).",
          verseRef: "12:23"
        },
        {
          term: "لَقَدْ هَمَّتْ بِهِ ۖ وَهَمَّ بِهَا",
          transliteration: "Laqad Hammat bihi wa Hamma biha",
          meaning: "She intended him, and he would have inclined",
          explanation: "She fully intended sin. Yusuf's 'intention' was human nature's pull - but he resisted upon seeing Allah's sign.",
          verseRef: "12:24"
        },
        {
          term: "بُرْهَانَ رَبِّهِ",
          transliteration: "Burhana Rabbihi",
          meaning: "The proof from his Lord",
          explanation: "Allah showed Yusuf a 'burhan' (proof/sign) that stopped him. Divine intervention for the sincere.",
          verseRef: "12:24"
        },
        {
          term: "لِنَصْرِفَ عَنْهُ السُّوءَ وَالْفَحْشَاءَ",
          transliteration: "Li-Nasrifa 'anhus-Soo'a wal-Fahshaa",
          meaning: "To turn away evil and immorality from him",
          explanation: "Allah protected Yusuf because he was 'mukhlaseen' (sincere). Sincerity earns divine protection.",
          verseRef: "12:24"
        },
        {
          term: "وَاسْتَبَقَا الْبَابَ",
          transliteration: "Wastabaq-al-Baab",
          meaning: "They raced to the door",
          explanation: "He fled, she chased. Physical escape from sin - running away is wisdom, not cowardice.",
          verseRef: "12:25"
        },
        {
          term: "قَدَّتْ قَمِيصَهُ مِن دُبُرٍ",
          transliteration: "Qaddat Qameesahu min Duburin",
          meaning: "She tore his shirt from behind",
          explanation: "The shirt became evidence: torn from BEHIND proves he was fleeing, not attacking. Allah provides witnesses.",
          verseRef: "12:25"
        },
        {
          term: "شَاهِدٌ مِّنْ أَهْلِهَا",
          transliteration: "Shahidun min Ahliha",
          meaning: "A witness from her family",
          explanation: "Her own relative testified using the shirt logic. Truth emerges from unexpected sources.",
          verseRef: "12:26"
        },
        {
          term: "إِنَّ كَيْدَكُنَّ عَظِيمٌ",
          transliteration: "Inna Kaydakunna 'Adheem",
          meaning: "Indeed, women's plotting is great",
          explanation: "The Aziz's statement about deceptive schemes. Note: This refers to specific women's actions, not all women.",
          verseRef: "12:28"
        },
        {
          term: "قَطَّعْنَ أَيْدِيَهُنَّ",
          transliteration: "Qatta'na Aydiyahunna",
          meaning: "They cut their hands",
          explanation: "When Yusuf entered, the noblewomen were so stunned by his beauty they cut themselves unknowingly.",
          verseRef: "12:31"
        },
        {
          term: "مَا هَٰذَا بَشَرًا",
          transliteration: "Ma Hadha Basharan",
          meaning: "This is no human!",
          explanation: "The women declared Yusuf looked like an angel. His beauty was proverbial in all traditions.",
          verseRef: "12:31"
        },
        {
          term: "السِّجْنُ أَحَبُّ إِلَيَّ",
          transliteration: "As-Sijnu Ahabbu Ilayya",
          meaning: "Prison is more beloved to me",
          explanation: "Yusuf CHOSE prison over sin. Preferring hardship for faith over comfort in disobedience.",
          verseRef: "12:33",
          keyPhrase: true
        }
      ]
    },

    prisonYears: {
      name: "The Prison & Dream Interpretation",
      nameArabic: "السجن وتفسير الأحلام",
      color: "#06B6D4",
      verses: "12:35-42",
      concepts: [
        {
          term: "فَتَيَانِ",
          transliteration: "Fatayaan",
          meaning: "Two young men",
          explanation: "Two servants of the king imprisoned with Yusuf - a cupbearer and a baker. Both had dreams.",
          verseRef: "12:36"
        },
        {
          term: "أَرَانِي أَعْصِرُ خَمْرًا",
          transliteration: "Araanee A'siru Khamran",
          meaning: "I saw myself pressing wine",
          explanation: "The cupbearer's dream - he would return to serving the king. Good news interpreted correctly.",
          verseRef: "12:36"
        },
        {
          term: "أَرَانِي أَحْمِلُ فَوْقَ رَأْسِي خُبْزًا",
          transliteration: "Araanee Ahmilu Fawqa Ra'see Khubzan",
          meaning: "I saw myself carrying bread on my head",
          explanation: "The baker's dream - birds eating from bread on his head meant his execution. Hard truth delivered kindly.",
          verseRef: "12:36"
        },
        {
          term: "ذَٰلِكُمَا مِمَّا عَلَّمَنِي رَبِّي",
          transliteration: "Dhalikuma mimma 'Allamanee Rabbee",
          meaning: "That is from what my Lord taught me",
          explanation: "Yusuf attributes his gift to Allah, using the opportunity for da'wah (calling to faith).",
          verseRef: "12:37"
        },
        {
          term: "أَأَرْبَابٌ مُّتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ",
          transliteration: "A-Arbaabun Mutafarriqoona Khayrun am-Illah",
          meaning: "Are many lords better or Allah alone?",
          explanation: "Yusuf's powerful da'wah question - logical argument for Tawheed even in prison.",
          verseRef: "12:39"
        },
        {
          term: "مَا تَعْبُدُونَ مِن دُونِهِ إِلَّا أَسْمَاءً",
          transliteration: "Ma Ta'budoona min doonihi illa Asmaa'an",
          meaning: "You worship nothing besides names",
          explanation: "Idols are just names with no reality. Powerful critique of polytheism from prison.",
          verseRef: "12:40"
        },
        {
          term: "اذْكُرْنِي عِندَ رَبِّكَ",
          transliteration: "Udhkurnee 'inda Rabbika",
          meaning: "Mention me to your master",
          explanation: "Yusuf asked the cupbearer to mention him to the king. Using means while trusting Allah.",
          verseRef: "12:42"
        },
        {
          term: "فَأَنسَاهُ الشَّيْطَانُ ذِكْرَ رَبِّهِ",
          transliteration: "Fa-ansaahu-sh-Shaytanu Dhikra Rabbihi",
          meaning: "Satan made him forget mentioning his Lord",
          explanation: "The cupbearer forgot for years. Some say Yusuf's reliance on human help prolonged his imprisonment.",
          verseRef: "12:42"
        },
        {
          term: "فَلَبِثَ فِي السِّجْنِ بِضْعَ سِنِينَ",
          transliteration: "Fa-labitha fis-Sijni Bid'a Sineen",
          meaning: "So he remained in prison several years",
          explanation: "Bid'a = 3-9 years. Long imprisonment, but it was preparation for greater responsibility.",
          verseRef: "12:42"
        }
      ]
    },

    kingsVisionAndRelease: {
      name: "The King's Dream & Yusuf's Release",
      nameArabic: "رؤيا الملك وإطلاق يوسف",
      color: "#10B981",
      verses: "12:43-57",
      concepts: [
        {
          term: "سَبْعَ بَقَرَاتٍ سِمَانٍ",
          transliteration: "Sab'a Baqaraatin Simaanin",
          meaning: "Seven fat cows",
          explanation: "The king's dream: 7 fat cows eaten by 7 lean, 7 green ears and 7 dry. Advisors couldn't interpret.",
          verseRef: "12:43"
        },
        {
          term: "أَضْغَاثُ أَحْلَامٍ",
          transliteration: "Adghathu Ahlaam",
          meaning: "Confused dreams",
          explanation: "Court advisors dismissed it as meaningless. Their incompetence would lead to Yusuf's release.",
          verseRef: "12:44"
        },
        {
          term: "تَزْرَعُونَ سَبْعَ سِنِينَ دَأَبًا",
          transliteration: "Tazra'oona Sab'a Sineena Da'aban",
          meaning: "You will plant for seven years continuously",
          explanation: "Yusuf interpreted: 7 years of abundance, then 7 of famine. Store grain in ears to preserve it.",
          verseRef: "12:47"
        },
        {
          term: "ثُمَّ يَأْتِي عَامٌ فِيهِ يُغَاثُ النَّاسُ",
          transliteration: "Thumma Ya'tee 'Aamun feehi Yughathu-n-Naas",
          meaning: "Then a year when people will have rain",
          explanation: "Yusuf added information NOT in the dream - a 15th year of relief. Prophetic knowledge.",
          verseRef: "12:49"
        },
        {
          term: "ارْجِعْ إِلَىٰ رَبِّكَ",
          transliteration: "Irji' ila Rabbika",
          meaning: "Return to your master",
          explanation: "When summoned, Yusuf refused to leave prison until his innocence was proven. Dignity over freedom.",
          verseRef: "12:50",
          keyPhrase: true
        },
        {
          term: "مَا خَطْبُكُنَّ إِذْ رَاوَدتُّنَّ يُوسُفَ",
          transliteration: "Ma Khatbukunna idh Rawadtunna Yusuf",
          meaning: "What was your affair when you sought Yusuf?",
          explanation: "The king investigated. The women confessed: 'We know no evil of him.' Public exoneration.",
          verseRef: "12:51"
        },
        {
          term: "الْآنَ حَصْحَصَ الْحَقُّ",
          transliteration: "Al-Aana Hashasa-l-Haqq",
          meaning: "Now the truth has become clear",
          explanation: "Zulaykha finally confessed: 'I sought to seduce him, he was truthful.' Complete vindication.",
          verseRef: "12:51"
        },
        {
          term: "اجْعَلْنِي عَلَىٰ خَزَائِنِ الْأَرْضِ",
          transliteration: "Ij'alnee 'ala Khazaa'in-il-Ard",
          meaning: "Put me in charge of the storehouses",
          explanation: "Yusuf requested authority over Egypt's resources. Self-recommendation when qualified is permissible.",
          verseRef: "12:55"
        },
        {
          term: "إِنِّي حَفِيظٌ عَلِيمٌ",
          transliteration: "Innee Hafeethun 'Aleem",
          meaning: "I am a knowing guardian",
          explanation: "Yusuf's credentials: trustworthy (hafeeth) and knowledgeable ('aleem). Leadership qualities.",
          verseRef: "12:55"
        },
        {
          term: "مَكَّنَّا لِيُوسُفَ فِي الْأَرْضِ",
          transliteration: "Makkanna li-Yusufa fil-Ard",
          meaning: "We established Yusuf in the land",
          explanation: "From slave to vizier. Allah's plan unfolds - patient trust leads to authority and honor.",
          verseRef: "12:56"
        }
      ]
    },

    brothersReturn: {
      name: "The Brothers Come to Egypt",
      nameArabic: "عودة الإخوة إلى مصر",
      color: "#A855F7",
      verses: "12:58-87",
      concepts: [
        {
          term: "فَدَخَلُوا عَلَيْهِ فَعَرَفَهُمْ",
          transliteration: "Fa-dakhaloo 'alayhi fa-'arafahum",
          meaning: "They entered upon him and he recognized them",
          explanation: "The brothers came for grain during famine. Yusuf recognized them; they didn't recognize him.",
          verseRef: "12:58"
        },
        {
          term: "ائْتُونِي بِأَخٍ لَّكُم مِّنْ أَبِيكُمْ",
          transliteration: "I'toonee bi-Akhin lakum min Abeekum",
          meaning: "Bring me your brother from your father",
          explanation: "Yusuf demanded they bring Binyamin (Benjamin), his full brother. Testing and strategizing.",
          verseRef: "12:59"
        },
        {
          term: "جَعَلَ بِضَاعَتَهُمْ فِي رِحَالِهِمْ",
          transliteration: "Ja'ala Bidaa'atahum fee Rihaalihim",
          meaning: "He put their merchandise in their bags",
          explanation: "Yusuf secretly returned their payment. Generosity despite their past betrayal.",
          verseRef: "12:62"
        },
        {
          term: "هَلْ آمَنُكُمْ عَلَيْهِ إِلَّا كَمَا أَمِنتُكُمْ عَلَىٰ أَخِيهِ",
          transliteration: "Hal Aamanukum 'alayhi illa kama Amintukum 'ala Akheehi",
          meaning: "Shall I trust you with him as I trusted you with his brother?",
          explanation: "Ya'qub reminded them of their betrayal with Yusuf. Trust once broken is hard to restore.",
          verseRef: "12:64"
        },
        {
          term: "فَاللَّهُ خَيْرٌ حَافِظًا",
          transliteration: "Fa-Allahu Khayrun Haafidhan",
          meaning: "Allah is the best Guardian",
          explanation: "Ya'qub ultimately trusted Allah, not his sons. True tawakkul.",
          verseRef: "12:64"
        },
        {
          term: "لَا تَدْخُلُوا مِن بَابٍ وَاحِدٍ",
          transliteration: "La Tadkhuloo min Baabin Waahidin",
          meaning: "Don't enter from one gate",
          explanation: "Ya'qub advised separate entries to avoid attracting evil eye. Practical precaution while trusting Allah.",
          verseRef: "12:67"
        },
        {
          term: "جَعَلَ السِّقَايَةَ فِي رَحْلِ أَخِيهِ",
          transliteration: "Ja'alas-Siqaayata fee Rahli Akheehi",
          meaning: "He placed the measuring cup in his brother's bag",
          explanation: "Yusuf's strategy to keep Binyamin. The cup was 'found' - brothers accused of theft.",
          verseRef: "12:70"
        },
        {
          term: "قَالُوا جَزَاؤُهُ مَن وُجِدَ فِي رَحْلِهِ",
          transliteration: "Qaaloo Jazaa'uhu man Wujida fee Rahlihi",
          meaning: "They said: The penalty is the one in whose bag it's found",
          explanation: "By their own law (Canaanite), the 'thief' became a servant. They condemned Binyamin unknowingly.",
          verseRef: "12:75"
        },
        {
          term: "إِن يَسْرِقْ فَقَدْ سَرَقَ أَخٌ لَّهُ مِن قَبْلُ",
          transliteration: "In Yasriq faqad Saraqa Akhun lahu min Qabl",
          meaning: "If he steals, a brother of his stole before",
          explanation: "Brothers slandered Yusuf! He kept his pain hidden: 'You are worse in position.'",
          verseRef: "12:77"
        },
        {
          term: "فَأَسَرَّهَا يُوسُفُ فِي نَفْسِهِ",
          transliteration: "Fa-asarraha Yusufu fee Nafsihi",
          meaning: "Yusuf concealed it within himself",
          explanation: "Yusuf didn't reveal his identity or anger. Self-control in the face of injustice.",
          verseRef: "12:77"
        },
        {
          term: "يَا أَسَفَىٰ عَلَىٰ يُوسُفَ",
          transliteration: "Ya Asafa 'ala Yusuf",
          meaning: "Alas, my grief for Yusuf!",
          explanation: "Ya'qub's cry when Binyamin was detained. His grief for Yusuf never diminished.",
          verseRef: "12:84"
        },
        {
          term: "وَابْيَضَّتْ عَيْنَاهُ مِنَ الْحُزْنِ",
          transliteration: "Wa-abyaddat 'Aynaahu min-al-Huzn",
          meaning: "His eyes turned white from grief",
          explanation: "Ya'qub went blind from crying. Intense, prolonged grief for his beloved son.",
          verseRef: "12:84"
        },
        {
          term: "إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ",
          transliteration: "Innama Ashkoo Baththee wa Huznee ilal-lah",
          meaning: "I only complain of my grief to Allah",
          explanation: "Ya'qub's grief didn't mean lack of faith. Complaining TO Allah is different from ABOUT Allah.",
          verseRef: "12:86",
          keyPhrase: true
        },
        {
          term: "لَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ",
          transliteration: "La Tay'asoo min Rawh-illaah",
          meaning: "Don't despair of Allah's mercy",
          explanation: "After decades, Ya'qub still had hope. Only disbelievers despair of Allah's relief.",
          verseRef: "12:87"
        }
      ]
    },

    grandReunion: {
      name: "The Grand Reunion",
      nameArabic: "اللقاء الكبير",
      color: "#22C55E",
      verses: "12:88-101",
      concepts: [
        {
          term: "مَسَّنَا وَأَهْلَنَا الضُّرُّ",
          transliteration: "Massana wa Ahlana-d-Durr",
          meaning: "Hardship has touched us and our family",
          explanation: "Brothers returned humbled by famine. Arrogance replaced by desperation - transformation through trial.",
          verseRef: "12:88"
        },
        {
          term: "هَلْ عَلِمْتُم مَّا فَعَلْتُم بِيُوسُفَ",
          transliteration: "Hal 'Alimtum ma Fa'altum bi-Yusuf",
          meaning: "Do you know what you did to Yusuf?",
          explanation: "Yusuf finally reveals the question. Moment of truth after decades of concealment.",
          verseRef: "12:89"
        },
        {
          term: "أَإِنَّكَ لَأَنتَ يُوسُفُ",
          transliteration: "A-innaka la-Anta Yusuf?",
          meaning: "Are you indeed Yusuf?",
          explanation: "Shock and recognition. The despised brother became the powerful vizier.",
          verseRef: "12:90"
        },
        {
          term: "قَدْ مَنَّ اللَّهُ عَلَيْنَا",
          transliteration: "Qad Mann-Allahu 'Alayna",
          meaning: "Allah has favored us",
          explanation: "Yusuf attributes success to Allah's favor, not his own merit. Humility in triumph.",
          verseRef: "12:90"
        },
        {
          term: "إِنَّهُ مَن يَتَّقِ وَيَصْبِرْ",
          transliteration: "Innahu man Yattaqi wa Yasbir",
          meaning: "Whoever has taqwa and patience",
          explanation: "Yusuf's formula: God-consciousness (taqwa) + patience (sabr) = Allah never wastes reward.",
          verseRef: "12:90",
          keyPhrase: true
        },
        {
          term: "لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ",
          transliteration: "La Tathreeba 'Alaykum-ul-Yawm",
          meaning: "No blame on you today",
          explanation: "Complete forgiveness! No revenge, no 'I told you so.' Model of prophetic mercy.",
          verseRef: "12:92",
          keyPhrase: true
        },
        {
          term: "يَغْفِرُ اللَّهُ لَكُمْ",
          transliteration: "Yaghfir-Allahu Lakum",
          meaning: "May Allah forgive you",
          explanation: "Yusuf not only forgave but prayed for their divine forgiveness. Ultimate nobility.",
          verseRef: "12:92"
        },
        {
          term: "اذْهَبُوا بِقَمِيصِي هَٰذَا",
          transliteration: "Idh-haboo bi-Qameesee Hadha",
          meaning: "Take this shirt of mine",
          explanation: "The shirt motif returns! Once bloodied as false evidence, now a cure. Full circle.",
          verseRef: "12:93"
        },
        {
          term: "فَأَلْقُوهُ عَلَىٰ وَجْهِ أَبِي يَأْتِ بَصِيرًا",
          transliteration: "Fa-alqoohu 'ala Wajhi Abee Ya'ti Baseeran",
          meaning: "Cast it on my father's face, he'll regain sight",
          explanation: "Miraculous cure - Yusuf's shirt restored Ya'qub's sight. Divine healing.",
          verseRef: "12:93"
        },
        {
          term: "إِنِّي لَأَجِدُ رِيحَ يُوسُفَ",
          transliteration: "Innee la-Ajidu Reeha Yusuf",
          meaning: "I smell the scent of Yusuf",
          explanation: "Ya'qub sensed Yusuf's scent from afar! A father's heart, prophetic intuition, or miracle.",
          verseRef: "12:94"
        },
        {
          term: "سَوْفَ أَسْتَغْفِرُ لَكُمْ رَبِّي",
          transliteration: "Sawfa Astaghfiru Lakum Rabbee",
          meaning: "I will ask forgiveness for you from my Lord",
          explanation: "Ya'qub also forgave his sons and promised to pray for them. Prophets forgive greatly.",
          verseRef: "12:98"
        },
        {
          term: "وَرَفَعَ أَبَوَيْهِ عَلَى الْعَرْشِ",
          transliteration: "Wa Rafa'a Abawayhi 'alal-'Arsh",
          meaning: "He raised his parents on the throne",
          explanation: "Yusuf honored his parents by seating them on his throne. Ultimate filial respect.",
          verseRef: "12:100"
        },
        {
          term: "وَخَرُّوا لَهُ سُجَّدًا",
          transliteration: "Wa Kharroo lahu Sujjadan",
          meaning: "They fell down in prostration to him",
          explanation: "The dream fulfilled! Parents and brothers prostrated (greeting of respect, not worship).",
          verseRef: "12:100"
        },
        {
          term: "هَٰذَا تَأْوِيلُ رُؤْيَايَ مِن قَبْلُ",
          transliteration: "Hadha Ta'weelu Ru'yaaya min Qabl",
          meaning: "This is the interpretation of my dream before",
          explanation: "Full circle - from childhood dream to royal fulfillment. Divine promises always come true.",
          verseRef: "12:100"
        },
        {
          term: "قَدْ جَعَلَهَا رَبِّي حَقًّا",
          transliteration: "Qad Ja'alaha Rabbee Haqqan",
          meaning: "My Lord has made it reality",
          explanation: "Yusuf acknowledges Allah's planning. Every hardship was a stepping stone to this moment.",
          verseRef: "12:100"
        },
        {
          term: "وَقَدْ أَحْسَنَ بِي إِذْ أَخْرَجَنِي مِنَ السِّجْنِ",
          transliteration: "Wa Qad Ahsana bee idh Akhrajanee min-as-Sijn",
          meaning: "He was kind to me when He freed me from prison",
          explanation: "Yusuf says 'prison' not 'well' - protecting his brothers' honor even in his triumph. Ultimate mercy.",
          verseRef: "12:100"
        }
      ]
    },

    closingReflections: {
      name: "Final Reflections & Lessons",
      nameArabic: "خاتمة وعبر",
      color: "#6366F1",
      verses: "12:102-111",
      concepts: [
        {
          term: "ذَٰلِكَ مِنْ أَنبَاءِ الْغَيْبِ",
          transliteration: "Dhalika min Anba'-il-Ghayb",
          meaning: "That is from the news of the unseen",
          explanation: "Allah confirms: This story came through revelation, not human knowledge. Proof of prophethood.",
          verseRef: "12:102"
        },
        {
          term: "وَمَا أَكْثَرُ النَّاسِ... بِمُؤْمِنِينَ",
          transliteration: "Wa ma Akthar-un-Naasi bi-Mu'mineen",
          meaning: "Most people will not believe",
          explanation: "Despite clear signs, most reject faith. Truth doesn't guarantee acceptance by masses.",
          verseRef: "12:103"
        },
        {
          term: "وَكَأَيِّن مِّنْ آيَةٍ فِي السَّمَاوَاتِ وَالْأَرْضِ",
          transliteration: "Wa Ka-ayyin min Aayatin fis-Samawaati wal-Ard",
          meaning: "How many signs in heavens and earth",
          explanation: "Signs everywhere, yet people pass by heedlessly. Spiritual blindness despite physical sight.",
          verseRef: "12:105"
        },
        {
          term: "وَمَا يُؤْمِنُ أَكْثَرُهُم بِاللَّهِ إِلَّا وَهُم مُّشْرِكُونَ",
          transliteration: "Wa ma Yu'minu Aktharuhum billahi illa wa hum Mushrikoon",
          meaning: "Most don't believe except while associating partners",
          explanation: "Hidden shirk - believing in Allah but mixing worship with others. Dangerous spiritual state.",
          verseRef: "12:106"
        },
        {
          term: "قُلْ هَٰذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ",
          transliteration: "Qul Hadhihi Sabeelee Ad'oo ilal-laah",
          meaning: "Say: This is my way - I call to Allah",
          explanation: "The Prophet's declaration of his mission - da'wah with insight (baseerah), not blind following.",
          verseRef: "12:108"
        },
        {
          term: "عَلَىٰ بَصِيرَةٍ أَنَا وَمَنِ اتَّبَعَنِي",
          transliteration: "'Ala Baseeratin Ana wa man-ittaba'anee",
          meaning: "With insight - I and those who follow me",
          explanation: "True followers have INSIGHT (baseerah) - understanding, not blind imitation.",
          verseRef: "12:108"
        },
        {
          term: "حَتَّىٰ إِذَا اسْتَيْأَسَ الرُّسُلُ",
          transliteration: "Hatta idhas-tay'as-ar-Rusul",
          meaning: "Until when the messengers despaired",
          explanation: "Victory comes at the darkest moment - when even prophets felt hopelessness. Then Allah's help arrives.",
          verseRef: "12:110"
        },
        {
          term: "جَاءَهُمْ نَصْرُنَا",
          transliteration: "Jaa'ahum Nasruna",
          meaning: "Our help came to them",
          explanation: "Divine victory after human despair. Pattern repeated throughout prophetic history.",
          verseRef: "12:110"
        },
        {
          term: "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ",
          transliteration: "Laqad Kaana fee Qasasihim 'Ibrah",
          meaning: "In their stories is a lesson",
          explanation: "The purpose of Quranic narratives: 'ibrah (lesson), not entertainment. Reflect and apply.",
          verseRef: "12:111"
        },
        {
          term: "مَا كَانَ حَدِيثًا يُفْتَرَىٰ",
          transliteration: "Ma Kaana Hadeethan Yuftara",
          meaning: "This is not invented speech",
          explanation: "Final assertion: The Quran is not human fabrication but divine truth. Believe and benefit.",
          verseRef: "12:111"
        },
        {
          term: "تَصْدِيقَ الَّذِي بَيْنَ يَدَيْهِ",
          transliteration: "Tasdeeq-alladhee Bayna Yadayhi",
          meaning: "Confirmation of what came before",
          explanation: "Quran confirms previous scriptures' core message while correcting corruptions.",
          verseRef: "12:111"
        },
        {
          term: "وَتَفْصِيلَ كُلِّ شَيْءٍ",
          transliteration: "Wa Tafseel-a Kulli Shay'in",
          meaning: "Detailed explanation of all things",
          explanation: "Quran contains guidance for everything essential - complete system for life.",
          verseRef: "12:111"
        },
        {
          term: "وَهُدًى وَرَحْمَةً لِّقَوْمٍ يُؤْمِنُونَ",
          transliteration: "Wa Hudan wa Rahmatan li-Qawmin Yu'minoon",
          meaning: "Guidance and mercy for believing people",
          explanation: "The Quran's benefit is for those who believe. Disbelief blocks its healing.",
          verseRef: "12:111"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الرؤيا (12:4)",
      to: "خروا له سجدا (12:100)",
      type: "fulfillment",
      description: "Dream fulfilled after 40+ years",
      explanation: "The eleven stars, sun, and moon prostrating - realized when family honored Yusuf in Egypt"
    },
    {
      from: "القميص بدم كذب (12:18)",
      to: "القميص الشفاء (12:93)",
      type: "reversal",
      description: "Shirt of deception becomes shirt of healing",
      explanation: "The motif transforms from evidence of 'death' to instrument of restoration"
    },
    {
      from: "غيابت الجب (12:10)",
      to: "على خزائن الأرض (12:55)",
      type: "elevation",
      description: "From well to treasury",
      explanation: "Cast into darkness, elevated to control Egypt's resources"
    },
    {
      from: "السجن (12:33)",
      to: "مكنا ليوسف (12:56)",
      type: "divine_planning",
      description: "Prison was preparation",
      explanation: "Choosing prison over sin led to meeting the king's servants and ultimate authority"
    },
    {
      from: "صبر جميل (12:18)",
      to: "لا تيأسوا من روح الله (12:87)",
      type: "consistency",
      description: "Ya'qub's lifelong patience",
      explanation: "Beautiful patience maintained through decades of grief - never despairing of Allah"
    },
    {
      from: "معاذ الله (12:23)",
      to: "إنه من يتق ويصبر (12:90)",
      type: "formula",
      description: "Taqwa + Sabr = Success",
      explanation: "Yusuf's resistance to temptation and patience through trials led to Allah's favor"
    },
    {
      from: "لا تقصص رؤياك (12:5)",
      to: "إن كيدكن عظيم (12:28)",
      type: "wisdom",
      description: "Concealment from potential harm",
      explanation: "Ya'qub knew to hide blessings from enviers - a recurring theme of protective wisdom"
    }
  ],

  thematicFlow: {
    title: "The Journey from Darkness to Light",
    titleArabic: "الرحلة من الظلمات إلى النور",
    description: "The surah follows a perfect narrative arc - from dream to fulfillment through trials",
    stages: [
      {
        stage: 1,
        theme: "The Prophetic Dream",
        verses: "12:1-6",
        description: "Young Yusuf's vision of future greatness",
        color: "#8B5CF6"
      },
      {
        stage: 2,
        theme: "Betrayal by Brothers",
        verses: "12:7-18",
        description: "Jealousy leads to attempted murder, cast into well",
        color: "#EF4444"
      },
      {
        stage: 3,
        theme: "Slavery in Egypt",
        verses: "12:19-22",
        description: "Sold as slave, raised in Aziz's house",
        color: "#F59E0B"
      },
      {
        stage: 4,
        theme: "The Great Temptation",
        verses: "12:23-34",
        description: "Zulaykha's seduction, Yusuf's chastity, false accusation",
        color: "#EC4899"
      },
      {
        stage: 5,
        theme: "Prison Years",
        verses: "12:35-42",
        description: "Interpreting dreams, da'wah in prison",
        color: "#06B6D4"
      },
      {
        stage: 6,
        theme: "Rise to Power",
        verses: "12:43-57",
        description: "King's dream, exoneration, becoming vizier",
        color: "#10B981"
      },
      {
        stage: 7,
        theme: "Testing the Brothers",
        verses: "12:58-87",
        description: "Brothers come for grain, Binyamin detained, Ya'qub's grief",
        color: "#A855F7"
      },
      {
        stage: 8,
        theme: "The Grand Revelation",
        verses: "12:88-101",
        description: "Identity revealed, forgiveness granted, family reunited",
        color: "#22C55E"
      },
      {
        stage: 9,
        theme: "Lessons & Conclusion",
        verses: "12:102-111",
        description: "Divine wisdom, prophetic call, Quranic purpose",
        color: "#6366F1"
      }
    ]
  },

  keyCharacters: [
    {
      name: "Yusuf (Joseph)",
      nameArabic: "يوسف",
      role: "Prophet, protagonist",
      qualities: ["Exceptional beauty", "Dream interpretation", "Chastity", "Patience", "Forgiveness", "Leadership"],
      arc: "From beloved child to slave to prisoner to vizier"
    },
    {
      name: "Ya'qub (Jacob)",
      nameArabic: "يعقوب",
      role: "Prophet, father",
      qualities: ["Prophetic wisdom", "Sabr jameel (beautiful patience)", "Never-ending hope", "Deep love"],
      arc: "From father to grieving elder to reunited patriarch"
    },
    {
      name: "The Brothers (10)",
      nameArabic: "إخوة يوسف",
      role: "Antagonists turned redeemed",
      qualities: ["Initial jealousy", "Conspiracy", "Gradual humbling", "Final repentance"],
      arc: "From envious plotters to humbled, forgiven family"
    },
    {
      name: "Binyamin (Benjamin)",
      nameArabic: "بنيامين",
      role: "Full brother of Yusuf",
      qualities: ["Innocent", "Protected by Ya'qub", "Catalyst for reunion"],
      arc: "The key to bringing the family to Egypt"
    },
    {
      name: "Zulaykha (Aziz's wife)",
      nameArabic: "زليخا",
      role: "Seductress, eventual confessor",
      qualities: ["Beauty", "Power", "Obsession", "Ultimate honesty"],
      arc: "From temptress to confessor of truth"
    },
    {
      name: "The Aziz",
      nameArabic: "العزيز",
      role: "Egyptian minister",
      qualities: ["Wisdom", "Restraint", "Fairness"],
      arc: "Recognized Yusuf's worth, believed his innocence"
    },
    {
      name: "The King",
      nameArabic: "الملك",
      role: "Ruler of Egypt",
      qualities: ["Troubled by dreams", "Sought truth", "Appointed Yusuf"],
      arc: "From puzzled ruler to Yusuf's patron"
    }
  ],

  literaryDevices: {
    title: "Narrative Mastery",
    devices: [
      {
        device: "The Shirt Motif",
        deviceArabic: "قميص يوسف",
        description: "Yusuf's shirt appears three times with transforming significance",
        examples: [
          { verse: "12:18", instance: "Bloodied as false evidence of death" },
          { verse: "12:25-28", instance: "Torn from behind, proving innocence" },
          { verse: "12:93", instance: "Healing Ya'qub's blindness" }
        ]
      },
      {
        device: "Dramatic Irony",
        description: "Reader knows what characters don't",
        examples: [
          "Brothers don't recognize Yusuf (12:58)",
          "Zulaykha's guests cut hands (12:31)",
          "Brothers condemn themselves (12:75)"
        ]
      },
      {
        device: "Ring Structure",
        description: "Story begins and ends with the dream",
        examples: [
          "Dream told (12:4) → Dream fulfilled (12:100)"
        ]
      },
      {
        device: "Reversal of Fortune",
        description: "Every low leads to a higher high",
        examples: [
          "Well → Slavery → Palace",
          "Temptation → Prison → Authority",
          "Blindness → Healing → Reunion"
        ]
      }
    ]
  },

  moralLessons: {
    title: "Timeless Lessons",
    titleArabic: "دروس خالدة",
    lessons: [
      {
        lesson: "Patience Through Trials (Sabr)",
        lessonArabic: "الصبر على الابتلاء",
        explanation: "Both Yusuf and Ya'qub exemplify 'sabr jameel' - beautiful patience without complaint",
        verses: ["12:18", "12:83", "12:90"]
      },
      {
        lesson: "Chastity Over Opportunity",
        lessonArabic: "العفة فوق الفرصة",
        explanation: "Yusuf chose prison over sin - preferring hardship for faith over comfort in disobedience",
        verses: ["12:23", "12:33"]
      },
      {
        lesson: "Forgiveness Over Revenge",
        lessonArabic: "العفو فوق الانتقام",
        explanation: "When in power, Yusuf forgave completely - 'No blame on you today'",
        verses: ["12:92"]
      },
      {
        lesson: "Trust Divine Planning",
        lessonArabic: "الثقة بتدبير الله",
        explanation: "Every hardship was a step toward Yusuf's ultimate position - trust Allah's timing",
        verses: ["12:21", "12:56", "12:100"]
      },
      {
        lesson: "Don't Despair of Allah's Mercy",
        lessonArabic: "لا تيأس من رحمة الله",
        explanation: "Ya'qub never lost hope even after decades - despair is for disbelievers",
        verses: ["12:87"]
      },
      {
        lesson: "Guard Against Envy",
        lessonArabic: "الحذر من الحسد",
        explanation: "Jealousy destroyed the brothers' peace - don't share blessings with potential enviers",
        verses: ["12:5", "12:8-9"]
      },
      {
        lesson: "Complain TO Allah, Not ABOUT Allah",
        lessonArabic: "الشكوى إلى الله لا من الله",
        explanation: "Ya'qub grieved but directed it to Allah - expressing pain while maintaining faith",
        verses: ["12:86"]
      },
      {
        lesson: "Use Means While Trusting Allah",
        lessonArabic: "الأخذ بالأسباب مع التوكل",
        explanation: "Yusuf asked the cupbearer for help - permissible while trusting Allah ultimately",
        verses: ["12:42", "12:55"]
      }
    ]
  },

  uniqueFeatures: {
    title: "What Makes Surah Yusuf Unique",
    features: [
      "Only surah telling a complete, continuous narrative",
      "Called 'Ahsan al-Qasas' (Best of Stories) by Allah",
      "No verse breaks the narrative flow",
      "Contains the 'most beautiful woman' (Zulaykha) and 'most beautiful man' (Yusuf)",
      "Revealed as consolation during the Prophet's 'Year of Sorrow'",
      "Demonstrates dream interpretation as prophetic gift",
      "Shows both Ya'qub and Yusuf as prophets in one story"
    ]
  },

  practicalApplication: {
    title: "Living by Surah Yusuf",
    applications: [
      {
        principle: "When betrayed by family",
        how: "Maintain patience, trust Allah's plan, eventually forgive completely",
        model: "Yusuf's treatment of his brothers"
      },
      {
        principle: "When facing temptation",
        how: "Say 'Ma'adh Allah', flee physically if needed, choose hardship over sin",
        model: "Yusuf and Zulaykha"
      },
      {
        principle: "When grieving deeply",
        how: "Cry and complain TO Allah, never lose hope, maintain sabr jameel",
        model: "Ya'qub's decades of grief"
      },
      {
        principle: "When in authority",
        how: "Use position for justice, help the needy, forgive past wrongs",
        model: "Yusuf as vizier"
      },
      {
        principle: "When falsely accused",
        how: "Demand exoneration before accepting freedom, protect your honor",
        model: "Yusuf refusing to leave prison"
      },
      {
        principle: "When given good news",
        how: "Don't share with potential enviers, protect blessings with discretion",
        model: "Ya'qub's advice about the dream"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 7,
        name: "Al-A'raf",
        verses: "7:59-93",
        relation: "Other prophetic stories",
        sharedTheme: "Prophets facing rejection"
      },
      {
        surah: 11,
        name: "Hud",
        relation: "Preceding surah, also about prophets",
        sharedTheme: "Patience of prophets"
      },
      {
        surah: 18,
        name: "Al-Kahf",
        relation: "Another surah of narratives",
        sharedTheme: "Stories of faith tested"
      },
      {
        surah: 28,
        name: "Al-Qasas",
        relation: "Story of Musa",
        sharedTheme: "From danger to power"
      },
      {
        surah: 37,
        name: "As-Saffat",
        verses: "37:139-148",
        relation: "Story of Yunus",
        sharedTheme: "Prophets in darkness finding light"
      }
    ],
    biblicalParallel: {
      text: "Genesis 37-50",
      differences: [
        "Quran emphasizes monotheism throughout",
        "Zulaykha's confession included",
        "Greater focus on prophetic dreams",
        "No explicit mention of Israel entering Egypt",
        "Yusuf's da'wah in prison is Quranic addition"
      ]
    }
  },

  hadithReferences: [
    {
      hadith: "The Prophet was asked: Who is the most honorable? He said: Yusuf son of Ya'qub son of Ishaq son of Ibrahim - prophet, son of prophet, son of prophet, son of prophet.",
      source: "Sahih Bukhari",
      relevance: "Yusuf's unique lineage of four prophets"
    },
    {
      hadith: "Yusuf was given half of all beauty.",
      source: "Sahih Muslim",
      relevance: "Explanation of women's reaction (12:31)"
    },
    {
      hadith: "True dreams are from Allah, and bad dreams are from Satan.",
      source: "Sahih Bukhari",
      relevance: "Context for dream interpretation in the surah"
    }
  ],

  reflectionQuestions: [
    "How do I respond when betrayed by those closest to me?",
    "What would I choose: comfort with sin or hardship with faith?",
    "Do I complain TO Allah or ABOUT Allah in grief?",
    "When I have power over those who wronged me, do I forgive?",
    "Am I patient during the 'prison years' before my breakthrough?",
    "Do I trust Allah's plan even when I can't see the path?",
    "What blessings should I guard from potential enviers?"
  ]
};

export default ONTOLOGY;
