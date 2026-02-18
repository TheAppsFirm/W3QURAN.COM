/**
 * Surah Al-Ma'idah (5) - Ontology of Quranic Concepts
 * The Table Spread
 *
 * Theme: Fulfilling contracts/covenants, halal/haram rulings, relationships with People of the Book,
 *        Jesus and the disciples, the story of the Table from Heaven
 * Revelation: Medinan (one of the last surahs revealed)
 * Ayahs: 120
 *
 * Key Feature: Final rulings on many matters - completes legislative content of Islam
 * Famous Verse: "Today I have perfected your religion for you" (5:3)
 */

export const ONTOLOGY = {
  surahId: 5,
  surahName: "Al-Ma'idah",
  surahNameArabic: "المائدة",
  surahNameUrdu: "المائدہ - دسترخوان",
  meaning: {
    en: "The Table Spread",
    ur: "دسترخوان",
    ar: "المائدة"
  },
  revelationType: "Madani",
  totalAyahs: 120,
  chronologicalOrder: 112,

  introduction: {
    en: "One of the last surahs revealed, Al-Ma'idah finalizes many rulings. It opens with 'O you who believe, fulfill your contracts' - setting the theme of obligations. Contains the famous declaration 'Today I have perfected your religion' (5:3), final rulings on food, unique dialogue with Jesus, and the miraculous Table story.",
    ur: "آخری نازل ہونے والی سورتوں میں سے ایک، المائدہ بہت سے احکام کی تکمیل کرتی ہے۔ 'اے ایمان والو، عہد پورے کرو' سے شروع ہوتی ہے۔ مشہور اعلان 'آج میں نے تمہارا دین مکمل کر دیا' (5:3)، کھانے کے احکام، عیسیٰ سے مکالمہ، اور آسمانی دسترخوان کا واقعہ شامل ہے۔"
  },

  categories: {
    contractsAndCovenants: {
      name: "Contracts and Covenants",
      nameArabic: "العقود والمواثيق",
      nameUrdu: "عہد اور میثاق",
      color: "#3B82F6",
      icon: "FileSignature",
      concepts: [
        {
          term: "أَوْفُوا بِالْعُقُودِ",
          meaning: "Fulfill your contracts",
          explanation: "Opening command setting the surah's theme. Uqud includes all types: with Allah, with people, commercial, marital",
          meaningUrdu: "عہد پورے کرو - اللہ سے، لوگوں سے، تجارتی، ازدواجی",
          verseRef: "5:1"
        },
        {
          term: "مِيثَاقَ بَنِي إِسْرَائِيلَ",
          meaning: "Covenant of Bani Israel",
          explanation: "Allah took their covenant: establish prayer, give zakah, believe in messengers. They broke it.",
          meaningUrdu: "بنی اسرائیل کا میثاق - انہوں نے توڑ دیا",
          verseRef: "5:12"
        },
        {
          term: "مِيثَاقَ الَّذِينَ قَالُوا إِنَّا نَصَارَىٰ",
          meaning: "Covenant of Christians",
          explanation: "Christians also had covenant but forgot portion of it, leading to enmity among themselves",
          meaningUrdu: "نصاریٰ کا میثاق - حصہ بھول گئے",
          verseRef: "5:14"
        },
        {
          term: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ",
          meaning: "Today I have perfected your religion",
          explanation: "Revealed on Day of Arafah - Allah's covenant with this Ummah is complete. Final perfection.",
          meaningUrdu: "آج میں نے تمہارا دین مکمل کر دیا - عرفہ کے دن",
          verseRef: "5:3"
        },
        {
          term: "أَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي",
          meaning: "Completed My favor upon you",
          explanation: "Not just religion perfected, but Allah's favor completed - spiritual and worldly blessings",
          meaningUrdu: "اپنی نعمت پوری کر دی",
          verseRef: "5:3"
        },
        {
          term: "وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا",
          meaning: "Chosen Islam as your religion",
          explanation: "Divine pleasure in Islam as the final, chosen way - radiya (pleased/satisfied)",
          meaningUrdu: "اسلام کو تمہارے دین کے طور پر پسند کیا",
          verseRef: "5:3"
        }
      ]
    },

    halalAndHaram: {
      name: "Halal and Haram Laws",
      nameArabic: "أحكام الحلال والحرام",
      nameUrdu: "حلال و حرام کے احکام",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        {
          term: "أُحِلَّتْ لَكُم بَهِيمَةُ الْأَنْعَامِ",
          meaning: "Lawful for you are grazing livestock",
          explanation: "Cattle, sheep, goats, camels - permissible with conditions",
          meaningUrdu: "چوپائے جانور حلال ہیں",
          verseRef: "5:1"
        },
        {
          term: "حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ",
          meaning: "Forbidden: carrion",
          explanation: "Dead animals not slaughtered properly",
          meaningUrdu: "مردار حرام ہے",
          verseRef: "5:3"
        },
        {
          term: "وَالدَّمُ",
          meaning: "And blood",
          explanation: "Flowing blood is forbidden - wisdom in avoiding disease",
          meaningUrdu: "اور خون",
          verseRef: "5:3"
        },
        {
          term: "وَلَحْمُ الْخِنزِيرِ",
          meaning: "And swine flesh",
          explanation: "Pork absolutely forbidden in all forms",
          meaningUrdu: "اور سور کا گوشت",
          verseRef: "5:3"
        },
        {
          term: "وَمَا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ",
          meaning: "What is slaughtered for other than Allah",
          explanation: "Animals sacrificed to idols, saints, graves - forbidden regardless of method",
          meaningUrdu: "غیر اللہ کے نام پر ذبح کیا گیا",
          verseRef: "5:3"
        },
        {
          term: "الْمُنْخَنِقَةُ",
          meaning: "Strangled",
          explanation: "Animals that died by choking/strangulation",
          meaningUrdu: "گلا گھونٹ کر مارا گیا",
          verseRef: "5:3"
        },
        {
          term: "الْمَوْقُوذَةُ",
          meaning: "Beaten to death",
          explanation: "Animals killed by beating",
          meaningUrdu: "مار مار کر ہلاک کیا گیا",
          verseRef: "5:3"
        },
        {
          term: "الْمُتَرَدِّيَةُ",
          meaning: "Fallen from height",
          explanation: "Animals that died falling from high place",
          meaningUrdu: "اونچائی سے گر کر مرا",
          verseRef: "5:3"
        },
        {
          term: "النَّطِيحَةُ",
          meaning: "Gored by horns",
          explanation: "Killed by another animal's horns",
          meaningUrdu: "سینگ مار کر مارا گیا",
          verseRef: "5:3"
        },
        {
          term: "مَا أَكَلَ السَّبُعُ",
          meaning: "What predators ate from",
          explanation: "Animals partially eaten by wild beasts",
          meaningUrdu: "درندے کا کھایا ہوا",
          verseRef: "5:3"
        },
        {
          term: "إِلَّا مَا ذَكَّيْتُمْ",
          meaning: "Except what you slaughter (in time)",
          explanation: "If animal still alive and you slaughter properly - permissible",
          meaningUrdu: "سوائے جسے تم ذبح کر لو",
          verseRef: "5:3"
        },
        {
          term: "وَمَا ذُبِحَ عَلَى النُّصُبِ",
          meaning: "Slaughtered on stone altars",
          explanation: "Pre-Islamic practice of sacrificing on idol stones",
          meaningUrdu: "بتوں کی قربان گاہوں پر ذبح کیا گیا",
          verseRef: "5:3"
        },
        {
          term: "وَطَعَامُ الَّذِينَ أُوتُوا الْكِتَابَ حِلٌّ لَّكُمْ",
          meaning: "Food of People of the Book is lawful",
          explanation: "Jewish and Christian slaughtered meat permissible for Muslims",
          meaningUrdu: "اہل کتاب کا کھانا حلال ہے",
          verseRef: "5:5"
        },
        {
          term: "الْخَمْرُ وَالْمَيْسِرُ وَالْأَنصَابُ وَالْأَزْلَامُ",
          meaning: "Wine, gambling, idols, divining arrows",
          explanation: "Complete prohibition of intoxicants and games of chance - 'filth from Satan's work'",
          meaningUrdu: "شراب، جوا، بت، پانسے - شیطان کا گندا کام",
          verseRef: "5:90"
        },
        {
          term: "فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ",
          meaning: "Avoid it that you may succeed",
          explanation: "Command to completely avoid, not just abstain when drinking",
          meaningUrdu: "اس سے بچو تاکہ کامیاب ہو",
          verseRef: "5:90"
        }
      ]
    },

    huntingAndIhram: {
      name: "Hunting and Ihram Laws",
      nameArabic: "أحكام الصيد والإحرام",
      nameUrdu: "شکار اور احرام کے احکام",
      color: "#F59E0B",
      icon: "Mountain",
      concepts: [
        {
          term: "غَيْرَ مُحِلِّي الصَّيْدِ وَأَنتُمْ حُرُمٌ",
          meaning: "Not hunting while in ihram",
          explanation: "During pilgrimage state, land hunting is forbidden",
          meaningUrdu: "احرام میں شکار حرام",
          verseRef: "5:1"
        },
        {
          term: "أُحِلَّ لَكُمْ صَيْدُ الْبَحْرِ وَطَعَامُهُ",
          meaning: "Lawful: sea game and its food",
          explanation: "Sea hunting allowed even in ihram - provision for travelers",
          meaningUrdu: "سمندری شکار حلال ہے",
          verseRef: "5:96"
        },
        {
          term: "وَحُرِّمَ عَلَيْكُمْ صَيْدُ الْبَرِّ مَا دُمْتُمْ حُرُمًا",
          meaning: "Land game forbidden while in ihram",
          explanation: "Cannot hunt land animals during pilgrimage state",
          meaningUrdu: "احرام میں خشکی کا شکار حرام",
          verseRef: "5:96"
        },
        {
          term: "وَمَا عَلَّمْتُم مِّنَ الْجَوَارِحِ مُكَلِّبِينَ",
          meaning: "What trained hunting animals catch",
          explanation: "Hunting with trained dogs, falcons etc. - eat what they catch for you, say Bismillah",
          meaningUrdu: "سدھائے ہوئے شکاری جانوروں کا پکڑا ہوا",
          verseRef: "5:4"
        },
        {
          term: "جَزَاءٌ مِّثْلُ مَا قَتَلَ مِنَ النَّعَمِ",
          meaning: "Penalty: equivalent livestock",
          explanation: "If you kill game in ihram, sacrifice equivalent animal as kaffarah",
          meaningUrdu: "کفارہ: مارے گئے جانور کے برابر",
          verseRef: "5:95"
        }
      ]
    },

    wuduAndTayammum: {
      name: "Purification Laws",
      nameArabic: "أحكام الطهارة",
      nameUrdu: "طہارت کے احکام",
      color: "#06B6D4",
      icon: "Droplet",
      concepts: [
        {
          term: "إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ",
          meaning: "When you rise for prayer, wash faces",
          explanation: "Beginning of wudu: face washing first",
          meaningUrdu: "نماز کے لیے اٹھو تو چہرے دھوؤ",
          verseRef: "5:6"
        },
        {
          term: "وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ",
          meaning: "And hands to the elbows",
          explanation: "Arms including elbows - extent defined",
          meaningUrdu: "اور ہاتھ کہنیوں سمیت",
          verseRef: "5:6"
        },
        {
          term: "وَامْسَحُوا بِرُءُوسِكُمْ",
          meaning: "And wipe your heads",
          explanation: "Masah - wiping, not washing, the head",
          meaningUrdu: "سروں کا مسح کرو",
          verseRef: "5:6"
        },
        {
          term: "وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ",
          meaning: "And feet to the ankles",
          explanation: "Feet including ankles - completing wudu",
          meaningUrdu: "اور پاؤں ٹخنوں سمیت",
          verseRef: "5:6"
        },
        {
          term: "وَإِن كُنتُمْ جُنُبًا فَاطَّهَّرُوا",
          meaning: "If junub (major impurity), purify",
          explanation: "Ghusl (full bath) required after sexual intercourse",
          meaningUrdu: "جنابت ہو تو غسل کرو",
          verseRef: "5:6"
        },
        {
          term: "فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا",
          meaning: "If no water, use clean earth",
          explanation: "Tayammum: dry ablution with clean earth when water unavailable",
          meaningUrdu: "پانی نہ ملے تو پاک مٹی سے تیمم",
          verseRef: "5:6"
        },
        {
          term: "مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُم مِّنْ حَرَجٍ",
          meaning: "Allah doesn't want difficulty for you",
          explanation: "Islamic law designed for ease, not hardship",
          meaningUrdu: "اللہ تم پر تنگی نہیں چاہتا",
          verseRef: "5:6"
        }
      ]
    },

    peopleOfTheBook: {
      name: "Relations with People of the Book",
      nameArabic: "العلاقة مع أهل الكتاب",
      nameUrdu: "اہل کتاب سے تعلقات",
      color: "#8B5CF6",
      icon: "Book",
      concepts: [
        {
          term: "يَا أَهْلَ الْكِتَابِ قَدْ جَاءَكُمْ رَسُولُنَا",
          meaning: "O People of Book, Our Messenger has come",
          explanation: "Call to Jews/Christians to accept Muhammad - makes clear what was hidden",
          meaningUrdu: "اے اہل کتاب، ہمارا رسول آ گیا",
          verseRef: "5:15"
        },
        {
          term: "يُبَيِّنُ لَكُمْ كَثِيرًا مِّمَّا كُنتُمْ تُخْفُونَ",
          meaning: "Clarifies much of what you concealed",
          explanation: "Prophet reveals hidden truths they distorted in their scriptures",
          meaningUrdu: "جو تم چھپاتے تھے وہ ظاہر کرتا ہے",
          verseRef: "5:15"
        },
        {
          term: "قَدْ جَاءَكُم مِّنَ اللَّهِ نُورٌ وَكِتَابٌ مُّبِينٌ",
          meaning: "Light and clear Book from Allah",
          explanation: "Prophet/Quran as divine light and clarification",
          meaningUrdu: "نور اور واضح کتاب آ گئی",
          verseRef: "5:15"
        },
        {
          term: "لَقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ هُوَ الْمَسِيحُ",
          meaning: "Disbelieved: those who say Allah IS the Messiah",
          explanation: "Clear rejection of Christ's divinity - Jesus himself commanded worship of Allah alone",
          meaningUrdu: "کفر کیا جنہوں نے کہا اللہ مسیح ہے",
          verseRef: "5:17, 5:72"
        },
        {
          term: "لَّقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ ثَالِثُ ثَلَاثَةٍ",
          meaning: "Disbelieved: those who say Allah is third of three",
          explanation: "Trinity doctrine rejected - 'There is no god but One God'",
          meaningUrdu: "کفر کیا جنہوں نے کہا اللہ تین میں کا تیسرا ہے",
          verseRef: "5:73"
        },
        {
          term: "وَالْمُحْصَنَاتُ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ",
          meaning: "Chaste women from People of Book",
          explanation: "Muslim men may marry chaste Jewish/Christian women",
          meaningUrdu: "اہل کتاب کی پاکدامن عورتیں",
          verseRef: "5:5"
        },
        {
          term: "لَتَجِدَنَّ أَشَدَّ النَّاسِ عَدَاوَةً... الْيَهُودَ",
          meaning: "Most hostile: Jews and polytheists",
          explanation: "Observation about relative attitudes toward Muslims - historical context",
          meaningUrdu: "سب سے زیادہ دشمن یہود اور مشرکین",
          verseRef: "5:82"
        },
        {
          term: "وَلَتَجِدَنَّ أَقْرَبَهُم مَّوَدَّةً... الَّذِينَ قَالُوا إِنَّا نَصَارَىٰ",
          meaning: "Nearest in affection: Christians",
          explanation: "Among them are humble priests and monks, not arrogant",
          meaningUrdu: "محبت میں قریب تر نصاریٰ",
          verseRef: "5:82"
        }
      ]
    },

    jesusAndDisciplesStory: {
      name: "Jesus and the Disciples",
      nameArabic: "عيسى والحواريون",
      nameUrdu: "عیسیٰ اور حواری",
      color: "#EC4899",
      icon: "Users",
      concepts: [
        {
          term: "إِذْ قَالَ الْحَوَارِيُّونَ",
          meaning: "When the disciples said",
          explanation: "Hawariyin - Jesus's closest followers, the helpers",
          meaningUrdu: "جب حواریوں نے کہا",
          verseRef: "5:112"
        },
        {
          term: "هَلْ يَسْتَطِيعُ رَبُّكَ أَن يُنَزِّلَ عَلَيْنَا مَائِدَةً",
          meaning: "Can your Lord send down a Table from heaven?",
          explanation: "Disciples ask for miracle - seeking certainty or testing?",
          meaningUrdu: "کیا تمہارا رب دسترخوان اتار سکتا ہے؟",
          verseRef: "5:112"
        },
        {
          term: "اتَّقُوا اللَّهَ إِن كُنتُم مُّؤْمِنِينَ",
          meaning: "Fear Allah if you are believers",
          explanation: "Jesus's concerned response - true believers should not need such proofs",
          meaningUrdu: "اللہ سے ڈرو اگر تم مومن ہو",
          verseRef: "5:112"
        },
        {
          term: "نُرِيدُ أَن نَّأْكُلَ مِنْهَا وَتَطْمَئِنَّ قُلُوبُنَا",
          meaning: "We want to eat and our hearts be satisfied",
          explanation: "Their justification: physical sustenance AND spiritual certainty",
          meaningUrdu: "ہم کھانا چاہتے ہیں اور دل مطمئن ہوں",
          verseRef: "5:113"
        },
        {
          term: "وَنَعْلَمَ أَن قَدْ صَدَقْتَنَا",
          meaning: "And know you spoke truth",
          explanation: "Seeking certainty about Jesus's prophethood",
          meaningUrdu: "اور جان لیں کہ تو نے سچ کہا",
          verseRef: "5:113"
        },
        {
          term: "اللَّهُمَّ رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ",
          meaning: "O Allah, send us a Table from heaven",
          explanation: "Jesus's prayer - invokes Allah, not himself",
          meaningUrdu: "اے اللہ! آسمان سے دسترخوان نازل فرما",
          verseRef: "5:114"
        },
        {
          term: "تَكُونُ لَنَا عِيدًا لِّأَوَّلِنَا وَآخِرِنَا",
          meaning: "A festival for first and last of us",
          explanation: "Eid - celebration for all generations of followers",
          meaningUrdu: "ہمارے پہلوں اور پچھلوں کے لیے عید",
          verseRef: "5:114"
        },
        {
          term: "وَآيَةً مِّنكَ",
          meaning: "And a sign from You",
          explanation: "Request for divine sign - proof of Allah's power",
          meaningUrdu: "اور تیری طرف سے نشانی",
          verseRef: "5:114"
        },
        {
          term: "إِنِّي مُنَزِّلُهَا عَلَيْكُمْ",
          meaning: "I will send it down to you",
          explanation: "Allah grants the request - miracle confirmed",
          meaningUrdu: "میں اسے تم پر اتارتا ہوں",
          verseRef: "5:115"
        },
        {
          term: "فَمَن يَكْفُرْ بَعْدُ مِنكُمْ فَإِنِّي أُعَذِّبُهُ",
          meaning: "Whoever disbelieves after - punishment",
          explanation: "Warning: after such miracle, disbelief brings unprecedented punishment",
          meaningUrdu: "جو اس کے بعد کفر کرے، سخت عذاب",
          verseRef: "5:115"
        }
      ]
    },

    jesusAndMary: {
      name: "Jesus and Mary - Clarifications",
      nameArabic: "عيسى ومريم - التوضيحات",
      nameUrdu: "عیسیٰ اور مریم - وضاحت",
      color: "#F472B6",
      icon: "Heart",
      concepts: [
        {
          term: "مَّا الْمَسِيحُ ابْنُ مَرْيَمَ إِلَّا رَسُولٌ",
          meaning: "Messiah son of Mary was only a messenger",
          explanation: "Clear definition: Jesus = messenger, not divine",
          meaningUrdu: "مسیح ابن مریم صرف رسول تھے",
          verseRef: "5:75"
        },
        {
          term: "وَأُمُّهُ صِدِّيقَةٌ",
          meaning: "His mother was a truthful woman",
          explanation: "Mary honored as Siddiqah (truthful) - but human, not divine",
          meaningUrdu: "ان کی ماں صدیقہ تھیں",
          verseRef: "5:75"
        },
        {
          term: "كَانَا يَأْكُلَانِ الطَّعَامَ",
          meaning: "Both used to eat food",
          explanation: "Powerful proof: eating = physical needs = not divine",
          meaningUrdu: "دونوں کھانا کھاتے تھے - خدا نہیں",
          verseRef: "5:75"
        },
        {
          term: "وَإِذْ قَالَ اللَّهُ يَا عِيسَى ابْنَ مَرْيَمَ أَأَنتَ قُلْتَ لِلنَّاسِ",
          meaning: "When Allah said: O Jesus, did YOU tell people...",
          explanation: "Divine interrogation on Day of Judgment",
          meaningUrdu: "جب اللہ نے کہا: اے عیسیٰ، کیا تو نے کہا...",
          verseRef: "5:116"
        },
        {
          term: "اتَّخِذُونِي وَأُمِّيَ إِلَٰهَيْنِ مِن دُونِ اللَّهِ",
          meaning: "Take me and my mother as two gods besides Allah?",
          explanation: "Accusation examined: worship of Jesus and Mary as divine",
          meaningUrdu: "مجھے اور میری ماں کو اللہ کے سوا دو معبود بناؤ؟",
          verseRef: "5:116"
        },
        {
          term: "سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ",
          meaning: "Glory be to You! It was not for me to say what I had no right",
          explanation: "Jesus's denial - he never claimed divinity",
          meaningUrdu: "تو پاک ہے! میرا حق نہیں کہ بے حق بات کہوں",
          verseRef: "5:116"
        },
        {
          term: "مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ",
          meaning: "I said only what You commanded",
          explanation: "Jesus only preached what Allah commanded - no divine claims",
          meaningUrdu: "صرف وہی کہا جو تو نے حکم دیا",
          verseRef: "5:117"
        },
        {
          term: "اعْبُدُوا اللَّهَ رَبِّي وَرَبَّكُمْ",
          meaning: "Worship Allah, my Lord and your Lord",
          explanation: "Jesus's actual teaching: worship Allah alone - same Lord for all",
          meaningUrdu: "اللہ کی عبادت کرو، میرے اور تمہارے رب کی",
          verseRef: "5:117"
        },
        {
          term: "وَكُنتُ عَلَيْهِمْ شَهِيدًا مَّا دُمْتُ فِيهِمْ",
          meaning: "I was a witness over them while among them",
          explanation: "Jesus's responsibility was only during his earthly ministry",
          meaningUrdu: "جب تک ان میں رہا، گواہ رہا",
          verseRef: "5:117"
        },
        {
          term: "فَلَمَّا تَوَفَّيْتَنِي كُنتَ أَنتَ الرَّقِيبَ عَلَيْهِمْ",
          meaning: "When You took me up, You were the Watcher",
          explanation: "After Jesus, Allah alone watches - Jesus not interceding now",
          meaningUrdu: "جب تو نے مجھے اٹھا لیا، تو ہی نگران",
          verseRef: "5:117"
        }
      ]
    },

    miraclesOfJesus: {
      name: "Miracles Granted to Jesus",
      nameArabic: "معجزات عيسى",
      nameUrdu: "عیسیٰ کے معجزات",
      color: "#A855F7",
      icon: "Sparkles",
      concepts: [
        {
          term: "إِذْ أَيَّدتُّكَ بِرُوحِ الْقُدُسِ",
          meaning: "When I supported you with the Holy Spirit",
          explanation: "Jibreel (Gabriel) aided Jesus from childhood to prophethood",
          meaningUrdu: "جب میں نے روح القدس سے تیری مدد کی",
          verseRef: "5:110"
        },
        {
          term: "تُكَلِّمُ النَّاسَ فِي الْمَهْدِ وَكَهْلًا",
          meaning: "Speaking to people in cradle and maturity",
          explanation: "Miracle of infant speech defending Mary's honor",
          meaningUrdu: "گہوارے میں اور بڑی عمر میں بات کرنا",
          verseRef: "5:110"
        },
        {
          term: "وَإِذْ عَلَّمْتُكَ الْكِتَابَ وَالْحِكْمَةَ وَالتَّوْرَاةَ وَالْإِنجِيلَ",
          meaning: "When I taught you scripture, wisdom, Torah, Gospel",
          explanation: "Divine teaching - Jesus didn't invent, he was taught",
          meaningUrdu: "جب میں نے تجھے کتاب، حکمت، توریت، انجیل سکھائی",
          verseRef: "5:110"
        },
        {
          term: "وَإِذْ تَخْلُقُ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ بِإِذْنِي",
          meaning: "When you made from clay bird shape - by My permission",
          explanation: "Clay bird miracle - emphasized: by ALLAH's permission, not Jesus's power",
          meaningUrdu: "جب تو مٹی سے پرندے کی شکل بناتا - میرے حکم سے",
          verseRef: "5:110"
        },
        {
          term: "فَتَنفُخُ فِيهَا فَتَكُونُ طَيْرًا بِإِذْنِي",
          meaning: "Then blow in it and it becomes bird - by My permission",
          explanation: "Life given by Allah's permission - Jesus as instrument, not source",
          meaningUrdu: "پھر پھونکتا تو وہ پرندہ بن جاتا - میرے حکم سے",
          verseRef: "5:110"
        },
        {
          term: "وَتُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ بِإِذْنِي",
          meaning: "Heal blind and leper - by My permission",
          explanation: "Healing miracles - three times 'by My permission' emphasized",
          meaningUrdu: "اندھے اور کوڑھی کو شفا دینا - میرے حکم سے",
          verseRef: "5:110"
        },
        {
          term: "وَإِذْ تُخْرِجُ الْمَوْتَىٰ بِإِذْنِي",
          meaning: "Raising dead - by My permission",
          explanation: "Even raising dead was by Allah's permission - not Jesus's own power",
          meaningUrdu: "مردوں کو زندہ کرنا - میرے حکم سے",
          verseRef: "5:110"
        },
        {
          term: "إِذْ كَفَفْتُ بَنِي إِسْرَائِيلَ عَنكَ",
          meaning: "When I restrained Bani Israel from you",
          explanation: "Allah protected Jesus from those who wanted to kill him",
          meaningUrdu: "جب میں نے بنی اسرائیل کو تجھ سے روکا",
          verseRef: "5:110"
        },
        {
          term: "إِن هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ",
          meaning: "This is nothing but clear magic",
          explanation: "Disbelievers dismissed miracles as magic - same accusation for all prophets",
          meaningUrdu: "یہ تو صرف کھلا جادو ہے",
          verseRef: "5:110"
        }
      ]
    },

    cainAndAbel: {
      name: "Story of Cain and Abel",
      nameArabic: "قصة قابيل وهابيل",
      nameUrdu: "قابیل و ہابیل کا قصہ",
      color: "#EF4444",
      icon: "Skull",
      concepts: [
        {
          term: "وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ",
          meaning: "Recite to them the true story of Adam's two sons",
          explanation: "First murder in human history - Quran tells it truthfully",
          meaningUrdu: "آدم کے دو بیٹوں کا سچا قصہ سناؤ",
          verseRef: "5:27"
        },
        {
          term: "إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِن أَحَدِهِمَا",
          meaning: "Both offered sacrifice, one accepted",
          explanation: "Qurban = sacrifice. Habil's accepted (fire consumed it), Qabil's rejected",
          meaningUrdu: "دونوں نے قربانی دی، ایک کی قبول ہوئی",
          verseRef: "5:27"
        },
        {
          term: "لَأَقْتُلَنَّكَ",
          meaning: "I will surely kill you",
          explanation: "Jealousy leading to first murder threat",
          meaningUrdu: "میں تجھے ضرور مار ڈالوں گا",
          verseRef: "5:27"
        },
        {
          term: "إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ",
          meaning: "Allah accepts only from the righteous",
          explanation: "Key principle: acceptance based on taqwa, not ritual alone",
          meaningUrdu: "اللہ متقیوں سے ہی قبول کرتا ہے",
          verseRef: "5:27"
        },
        {
          term: "لَئِن بَسَطتَ إِلَيَّ يَدَكَ لِتَقْتُلَنِي مَا أَنَا بِبَاسِطٍ يَدِيَ",
          meaning: "If you extend hand to kill me, I won't extend mine",
          explanation: "Habil's noble response: won't commit murder even in self-defense from murder",
          meaningUrdu: "تو مجھے مارے گا، میں تجھے نہیں ماروں گا",
          verseRef: "5:28"
        },
        {
          term: "إِنِّي أَخَافُ اللَّهَ رَبَّ الْعَالَمِينَ",
          meaning: "I fear Allah, Lord of the worlds",
          explanation: "Taqwa prevents even justified violence - beautiful restraint",
          meaningUrdu: "میں اللہ رب العالمین سے ڈرتا ہوں",
          verseRef: "5:28"
        },
        {
          term: "فَطَوَّعَتْ لَهُ نَفْسُهُ قَتْلَ أَخِيهِ",
          meaning: "His soul prompted him to kill his brother",
          explanation: "Tawwa'at = made easy, normalized murder for him. Nafs can corrupt",
          meaningUrdu: "اس کے نفس نے بھائی کا قتل آسان کر دکھایا",
          verseRef: "5:30"
        },
        {
          term: "فَأَصْبَحَ مِنَ الْخَاسِرِينَ",
          meaning: "And became of the losers",
          explanation: "Murder = ultimate loss, even if 'winning' the dispute",
          meaningUrdu: "پس نقصان اٹھانے والوں میں سے ہو گیا",
          verseRef: "5:30"
        },
        {
          term: "فَبَعَثَ اللَّهُ غُرَابًا يَبْحَثُ فِي الْأَرْضِ",
          meaning: "Allah sent a crow digging in earth",
          explanation: "Allah taught burial through crow - first burial in human history",
          meaningUrdu: "اللہ نے کوا بھیجا جو زمین کھود رہا تھا",
          verseRef: "5:31"
        },
        {
          term: "يَا وَيْلَتَا أَعَجَزْتُ أَنْ أَكُونَ مِثْلَ هَٰذَا الْغُرَابِ",
          meaning: "Woe to me! Am I unable to be like this crow?",
          explanation: "Remorse - couldn't even bury his brother without animal teaching him",
          meaningUrdu: "ہائے افسوس! کیا میں اس کوے جیسا بھی نہ ہو سکا؟",
          verseRef: "5:31"
        }
      ]
    },

    sanctityOfLife: {
      name: "Sanctity of Human Life",
      nameArabic: "حرمة الدم البشري",
      nameUrdu: "انسانی جان کی حرمت",
      color: "#DC2626",
      icon: "Shield",
      concepts: [
        {
          term: "مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ",
          meaning: "Whoever kills a soul except for a soul or corruption",
          explanation: "Two valid reasons for death penalty: murder (qisas) or spreading corruption",
          meaningUrdu: "جس نے کسی کو بغیر جان کے بدلے یا فساد کے قتل کیا",
          verseRef: "5:32"
        },
        {
          term: "فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا",
          meaning: "As if he killed all mankind",
          explanation: "One unjust murder = assault on humanity itself",
          meaningUrdu: "گویا اس نے سب لوگوں کو قتل کیا",
          verseRef: "5:32"
        },
        {
          term: "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا",
          meaning: "And whoever saves one - as if he saved all mankind",
          explanation: "Saving one life = immense reward, equal to saving all",
          meaningUrdu: "جس نے ایک کو بچایا، سب کو بچایا",
          verseRef: "5:32"
        },
        {
          term: "كَتَبْنَا عَلَىٰ بَنِي إِسْرَائِيلَ",
          meaning: "We decreed upon Children of Israel",
          explanation: "This principle given to earlier nations - universal law",
          meaningUrdu: "ہم نے بنی اسرائیل پر لکھ دیا",
          verseRef: "5:32"
        }
      ]
    },

    hirabahAndHadd: {
      name: "Punishment for Corruption",
      nameArabic: "حد الحرابة والإفساد",
      nameUrdu: "فساد کی سزا",
      color: "#7C3AED",
      icon: "Gavel",
      concepts: [
        {
          term: "الَّذِينَ يُحَارِبُونَ اللَّهَ وَرَسُولَهُ",
          meaning: "Those who wage war against Allah and Messenger",
          explanation: "Hirabah - armed robbery, terrorism, spreading fear",
          meaningUrdu: "جو اللہ اور رسول سے جنگ کرتے ہیں",
          verseRef: "5:33"
        },
        {
          term: "وَيَسْعَوْنَ فِي الْأَرْضِ فَسَادًا",
          meaning: "And strive to spread corruption",
          explanation: "Active corruption-spreading - not minor sins",
          meaningUrdu: "اور زمین میں فساد پھیلاتے ہیں",
          verseRef: "5:33"
        },
        {
          term: "أَن يُقَتَّلُوا أَوْ يُصَلَّبُوا",
          meaning: "Be killed or crucified",
          explanation: "Death or crucifixion for most severe cases with killing",
          meaningUrdu: "قتل کیے جائیں یا سولی دی جائے",
          verseRef: "5:33"
        },
        {
          term: "أَوْ تُقَطَّعَ أَيْدِيهِمْ وَأَرْجُلُهُم مِّنْ خِلَافٍ",
          meaning: "Or hands and feet cut from opposite sides",
          explanation: "Cross-amputation for armed robbery without killing",
          meaningUrdu: "یا ہاتھ پاؤں مختلف طرف سے کاٹے جائیں",
          verseRef: "5:33"
        },
        {
          term: "أَوْ يُنفَوْا مِنَ الْأَرْضِ",
          meaning: "Or be exiled from the land",
          explanation: "Banishment for lesser crimes - creates terror without bodily harm",
          meaningUrdu: "یا زمین سے جلاوطن کیے جائیں",
          verseRef: "5:33"
        },
        {
          term: "ذَٰلِكَ لَهُمْ خِزْيٌ فِي الدُّنْيَا",
          meaning: "That is disgrace in this world",
          explanation: "Worldly punishment as deterrent and disgrace",
          meaningUrdu: "یہ ان کی دنیا میں رسوائی ہے",
          verseRef: "5:33"
        },
        {
          term: "وَلَهُمْ فِي الْآخِرَةِ عَذَابٌ عَظِيمٌ",
          meaning: "And in Hereafter a great punishment",
          explanation: "Worldly punishment doesn't expiate - Hereafter remains",
          meaningUrdu: "اور آخرت میں بڑا عذاب",
          verseRef: "5:33"
        },
        {
          term: "إِلَّا الَّذِينَ تَابُوا مِن قَبْلِ أَن تَقْدِرُوا عَلَيْهِمْ",
          meaning: "Except those who repent before you apprehend them",
          explanation: "Repentance before capture waives hadd - door of mercy open",
          meaningUrdu: "سوائے جو گرفتاری سے پہلے توبہ کریں",
          verseRef: "5:34"
        }
      ]
    },

    justiceAndWitness: {
      name: "Justice and Bearing Witness",
      nameArabic: "العدل والشهادة",
      nameUrdu: "عدل اور گواہی",
      color: "#0891B2",
      icon: "Scale",
      concepts: [
        {
          term: "كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ",
          meaning: "Be upholders for Allah, witnesses in justice",
          explanation: "Stand for Allah and testify justly - fundamental principle",
          meaningUrdu: "اللہ کے لیے قائم رہو، انصاف کے گواہ بنو",
          verseRef: "5:8"
        },
        {
          term: "وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ",
          meaning: "Let not hatred of a people...",
          explanation: "Even hatred of enemies shouldn't make you unjust",
          meaningUrdu: "کسی قوم کی دشمنی تمہیں...",
          verseRef: "5:8"
        },
        {
          term: "عَلَىٰ أَلَّا تَعْدِلُوا",
          meaning: "...lead you not to be just",
          explanation: "Justice even with enemies - Islamic principle",
          meaningUrdu: "...انصاف نہ کرنے پر آمادہ نہ کرے",
          verseRef: "5:8"
        },
        {
          term: "اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ",
          meaning: "Be just - it is nearer to taqwa",
          explanation: "Justice linked to God-consciousness - not revenge",
          meaningUrdu: "انصاف کرو، یہ تقویٰ کے قریب ہے",
          verseRef: "5:8"
        },
        {
          term: "وَالسَّارِقُ وَالسَّارِقَةُ فَاقْطَعُوا أَيْدِيَهُمَا",
          meaning: "The thief male and female - cut their hands",
          explanation: "Hadd for theft - conditions apply (nisab, secure place, etc.)",
          meaningUrdu: "چور مرد اور عورت کے ہاتھ کاٹو",
          verseRef: "5:38"
        },
        {
          term: "جَزَاءً بِمَا كَسَبَا نَكَالًا مِّنَ اللَّهِ",
          meaning: "Recompense for what they earned, deterrent from Allah",
          explanation: "Purpose: punishment for crime AND deterrent for society",
          meaningUrdu: "ان کے کیے کی سزا، اللہ کی طرف سے عبرت",
          verseRef: "5:38"
        },
        {
          term: "فَمَن تَابَ مِن بَعْدِ ظُلْمِهِ وَأَصْلَحَ",
          meaning: "Whoever repents after wrongdoing and reforms",
          explanation: "Repentance and reform accepted - Allah's mercy for sincere change",
          meaningUrdu: "جو ظلم کے بعد توبہ کرے اور اصلاح کرے",
          verseRef: "5:39"
        }
      ]
    },

    divineSovereignty: {
      name: "Divine Sovereignty and Judgment",
      nameArabic: "سيادة الله والحكم",
      nameUrdu: "اللہ کی حاکمیت اور فیصلہ",
      color: "#6366F1",
      icon: "Crown",
      concepts: [
        {
          term: "أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ",
          meaning: "Is it the judgment of jahiliyyah they seek?",
          explanation: "Rhetorical question: why seek pre-Islamic ignorant judgments?",
          meaningUrdu: "کیا جاہلیت کا فیصلہ چاہتے ہیں؟",
          verseRef: "5:50"
        },
        {
          term: "وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا لِّقَوْمٍ يُوقِنُونَ",
          meaning: "Who is better than Allah in judgment for people of certainty?",
          explanation: "Allah's judgment is best - for those who have yaqeen (certainty)",
          meaningUrdu: "یقین والوں کے لیے اللہ سے بہتر فیصلہ کرنے والا کون؟",
          verseRef: "5:50"
        },
        {
          term: "وَمَن لَّمْ يَحْكُم بِمَا أَنزَلَ اللَّهُ فَأُولَٰئِكَ هُمُ الْكَافِرُونَ",
          meaning: "Whoever doesn't judge by Allah's revelation - they are disbelievers",
          explanation: "Not judging by divine law = kufr (in its context)",
          meaningUrdu: "جو اللہ کی نازل کردہ سے فیصلہ نہ کرے - کافر ہیں",
          verseRef: "5:44"
        },
        {
          term: "فَأُولَٰئِكَ هُمُ الظَّالِمُونَ",
          meaning: "They are the wrongdoers",
          explanation: "Same verse pattern - zulm (oppression) in not judging by revelation",
          meaningUrdu: "وہی ظالم ہیں",
          verseRef: "5:45"
        },
        {
          term: "فَأُولَٰئِكَ هُمُ الْفَاسِقُونَ",
          meaning: "They are the transgressors",
          explanation: "Same verse pattern - fisq (transgression) in abandoning divine law",
          meaningUrdu: "وہی فاسق ہیں",
          verseRef: "5:47"
        },
        {
          term: "لِكُلٍّ جَعَلْنَا مِنكُمْ شِرْعَةً وَمِنْهَاجًا",
          meaning: "For each We made a law and method",
          explanation: "Different nations had different shariah - wisdom of Allah",
          meaningUrdu: "ہم نے ہر ایک کے لیے شریعت اور طریقہ بنایا",
          verseRef: "5:48"
        },
        {
          term: "وَلَوْ شَاءَ اللَّهُ لَجَعَلَكُمْ أُمَّةً وَاحِدَةً",
          meaning: "Had Allah willed, He would have made you one nation",
          explanation: "Diversity is divine plan - test who follows best",
          meaningUrdu: "اللہ چاہتا تو تمہیں ایک امت بناتا",
          verseRef: "5:48"
        }
      ]
    },

    loyaltyAndAlliance: {
      name: "Loyalty and Alliance (Wala)",
      nameArabic: "الولاء والبراء",
      nameUrdu: "دوستی اور ولایت",
      color: "#F97316",
      icon: "HandHeart",
      concepts: [
        {
          term: "لَا تَتَّخِذُوا الْيَهُودَ وَالنَّصَارَىٰ أَوْلِيَاءَ",
          meaning: "Don't take Jews and Christians as allies",
          explanation: "Awliya = protective allies in war context, not general friends. Context: military alliance against Muslims",
          meaningUrdu: "یہود و نصاریٰ کو ولی نہ بناؤ",
          verseRef: "5:51"
        },
        {
          term: "بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ",
          meaning: "They are allies of each other",
          explanation: "In conflict, religious communities protect their own",
          meaningUrdu: "وہ آپس میں ایک دوسرے کے ولی ہیں",
          verseRef: "5:51"
        },
        {
          term: "وَمَن يَتَوَلَّهُم مِّنكُمْ فَإِنَّهُ مِنْهُمْ",
          meaning: "Whoever allies with them is of them",
          explanation: "Warning against military alliance with those fighting Muslims",
          meaningUrdu: "جو ان سے دوستی کرے وہ انہی میں سے ہے",
          verseRef: "5:51"
        },
        {
          term: "إِنَّمَا وَلِيُّكُمُ اللَّهُ وَرَسُولُهُ وَالَّذِينَ آمَنُوا",
          meaning: "Your ally is only Allah, His Messenger, and believers",
          explanation: "True wali (protector/ally) = Allah, Prophet, believers",
          meaningUrdu: "تمہارا ولی صرف اللہ، رسول اور مومنین ہیں",
          verseRef: "5:55"
        },
        {
          term: "الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ",
          meaning: "Those who establish prayer and give zakah",
          explanation: "True believers identified by their actions - salah and zakah",
          meaningUrdu: "جو نماز قائم کرتے اور زکوٰۃ دیتے ہیں",
          verseRef: "5:55"
        },
        {
          term: "وَهُمْ رَاكِعُونَ",
          meaning: "While they bow (in humility)",
          explanation: "Believers humble before Allah - spiritual quality",
          meaningUrdu: "اور وہ رکوع کرنے والے ہیں",
          verseRef: "5:55"
        }
      ]
    },

    mosesAndBaniIsrael: {
      name: "Moses and Bani Israel",
      nameArabic: "موسى وبنو إسرائيل",
      nameUrdu: "موسیٰ اور بنی اسرائیل",
      color: "#0D9488",
      icon: "Mountain",
      concepts: [
        {
          term: "يَا قَوْمِ ادْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ",
          meaning: "O my people, enter the Holy Land",
          explanation: "Moses commanded entry to Holy Land (Palestine region)",
          meaningUrdu: "اے میری قوم! مقدس سرزمین میں داخل ہو",
          verseRef: "5:21"
        },
        {
          term: "الَّتِي كَتَبَ اللَّهُ لَكُمْ",
          meaning: "Which Allah has prescribed for you",
          explanation: "Allah had ordained that land for them at that time",
          meaningUrdu: "جو اللہ نے تمہارے لیے لکھ دی ہے",
          verseRef: "5:21"
        },
        {
          term: "وَلَا تَرْتَدُّوا عَلَىٰ أَدْبَارِكُمْ",
          meaning: "And don't turn back on your heels",
          explanation: "Warning against cowardice and retreat from divine command",
          meaningUrdu: "اور پیٹھ پھیر کر نہ لوٹو",
          verseRef: "5:21"
        },
        {
          term: "إِنَّ فِيهَا قَوْمًا جَبَّارِينَ",
          meaning: "Indeed in it are a tyrannical people",
          explanation: "Their excuse: giants/tyrants live there (Amalekites)",
          meaningUrdu: "وہاں زبردست لوگ رہتے ہیں",
          verseRef: "5:22"
        },
        {
          term: "وَإِنَّا لَن نَّدْخُلَهَا حَتَّىٰ يَخْرُجُوا مِنْهَا",
          meaning: "We will never enter until they leave",
          explanation: "Refusing to fight - waiting for easy victory",
          meaningUrdu: "ہم ہرگز نہیں جائیں گے جب تک وہ نہ نکلیں",
          verseRef: "5:22"
        },
        {
          term: "رَجُلَانِ مِنَ الَّذِينَ يَخَافُونَ",
          meaning: "Two men of those who feared (Allah)",
          explanation: "Joshua and Caleb - only two encouraged fighting, fearing Allah not giants",
          meaningUrdu: "دو آدمیوں نے جو اللہ سے ڈرتے تھے",
          verseRef: "5:23"
        },
        {
          term: "ادْخُلُوا عَلَيْهِمُ الْبَابَ فَإِذَا دَخَلْتُمُوهُ فَإِنَّكُمْ غَالِبُونَ",
          meaning: "Enter upon them through the gate; once you enter, you will prevail",
          explanation: "Faith-based courage: just start, Allah will give victory",
          meaningUrdu: "دروازے سے ان پر جا گھسو، داخل ہوتے ہی غالب ہو گے",
          verseRef: "5:23"
        },
        {
          term: "اذْهَبْ أَنتَ وَرَبُّكَ فَقَاتِلَا إِنَّا هَاهُنَا قَاعِدُونَ",
          meaning: "Go you and your Lord and fight; we are sitting here",
          explanation: "Ultimate disrespect: telling Moses to fight with Allah while they sit!",
          meaningUrdu: "تو اور تیرا رب جا کر لڑو، ہم یہیں بیٹھے ہیں",
          verseRef: "5:24"
        },
        {
          term: "فَإِنَّهَا مُحَرَّمَةٌ عَلَيْهِمْ أَرْبَعِينَ سَنَةً",
          meaning: "It is forbidden to them for forty years",
          explanation: "Punishment: wandering in desert 40 years - that generation won't enter",
          meaningUrdu: "چالیس سال تک ان پر حرام ہے",
          verseRef: "5:26"
        },
        {
          term: "يَتِيهُونَ فِي الْأَرْضِ",
          meaning: "Wandering in the land",
          explanation: "Tih - confusion, wandering aimlessly in Sinai desert",
          meaningUrdu: "زمین میں سرگرداں رہیں گے",
          verseRef: "5:26"
        }
      ]
    },

    prophethoodAndGuidance: {
      name: "Prophethood and Divine Guidance",
      nameArabic: "النبوة والهداية",
      nameUrdu: "نبوت اور ہدایت",
      color: "#84CC16",
      icon: "Compass",
      concepts: [
        {
          term: "إِنَّا أَنزَلْنَا التَّوْرَاةَ فِيهَا هُدًى وَنُورٌ",
          meaning: "We revealed Torah - in it guidance and light",
          explanation: "Torah was genuine guidance before corruption",
          meaningUrdu: "ہم نے توریت نازل کی، اس میں ہدایت اور نور",
          verseRef: "5:44"
        },
        {
          term: "يَحْكُمُ بِهَا النَّبِيُّونَ الَّذِينَ أَسْلَمُوا",
          meaning: "By which the prophets who submitted judged",
          explanation: "All prophets were Muslims (submitted to Allah) - judged by Torah",
          meaningUrdu: "اس سے فیصلہ کرتے تھے نبی جنہوں نے اسلام قبول کیا",
          verseRef: "5:44"
        },
        {
          term: "وَالرَّبَّانِيُّونَ وَالْأَحْبَارُ",
          meaning: "And the rabbis and scholars",
          explanation: "Religious scholars also judged by it - were guardians of scripture",
          meaningUrdu: "اور عالم اور احبار",
          verseRef: "5:44"
        },
        {
          term: "وَقَفَّيْنَا عَلَىٰ آثَارِهِم بِعِيسَى ابْنِ مَرْيَمَ",
          meaning: "We sent following them Jesus son of Mary",
          explanation: "Jesus followed chain of prophets - confirming Torah",
          meaningUrdu: "ان کے بعد عیسیٰ ابن مریم کو بھیجا",
          verseRef: "5:46"
        },
        {
          term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرَاةِ",
          meaning: "Confirming what was before him of Torah",
          explanation: "Jesus confirmed Torah - did not abolish it",
          meaningUrdu: "اپنے سے پہلے کی توریت کی تصدیق کرنے والا",
          verseRef: "5:46"
        },
        {
          term: "وَآتَيْنَاهُ الْإِنجِيلَ فِيهِ هُدًى وَنُورٌ",
          meaning: "We gave him Gospel - in it guidance and light",
          explanation: "Original Gospel (not current versions) had divine guidance",
          meaningUrdu: "اسے انجیل دی، اس میں ہدایت اور نور",
          verseRef: "5:46"
        },
        {
          term: "وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا",
          meaning: "We revealed to you the Book in truth, confirming",
          explanation: "Quran confirms previous scriptures - final word",
          meaningUrdu: "ہم نے تجھ پر کتاب سچائی کے ساتھ اتاری، تصدیق کرنے والی",
          verseRef: "5:48"
        },
        {
          term: "وَمُهَيْمِنًا عَلَيْهِ",
          meaning: "And as guardian over them",
          explanation: "Muhaymin = protector, guardian, criterion. Quran judges previous scriptures",
          meaningUrdu: "اور ان پر نگہبان",
          verseRef: "5:48"
        }
      ]
    }
  },

  relationships: [
    { from: "أَوْفُوا بِالْعُقُودِ", to: "الْيَوْمَ أَكْمَلْتُ", type: "fulfillment", description: "Opening command fulfilled by religion's completion" },
    { from: "مِيثَاقَ بَنِي إِسْرَائِيلَ", to: "فَنَسُوا حَظًّا", type: "consequence", description: "Breaking covenant led to forgetting guidance" },
    { from: "حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ", to: "إِلَّا مَا ذَكَّيْتُمْ", type: "exception", description: "Prohibition has exception for proper slaughter" },
    { from: "قَتَلَ نَفْسًا", to: "قَتَلَ النَّاسَ جَمِيعًا", type: "equivalence", description: "One murder equals universal murder in gravity" },
    { from: "مَا الْمَسِيحُ إِلَّا رَسُولٌ", to: "كَانَا يَأْكُلَانِ الطَّعَامَ", type: "proof", description: "Eating food proves human nature, not divine" },
    { from: "اتَّقُوا اللَّهَ", to: "لَأَقْتُلَنَّكَ", type: "contrast", description: "Habil's taqwa vs Qabil's murder threat" },
    { from: "الْمَائِدَةَ مِّنَ السَّمَاءِ", to: "فَمَن يَكْفُرْ بَعْدُ", type: "consequence", description: "Miracle demands greater accountability" },
    { from: "يُحَارِبُونَ اللَّهَ", to: "تَابُوا مِن قَبْلِ", type: "exception", description: "Even severe crimes forgiven if repent before capture" },
    { from: "أَعْجَزْتُ أَنْ أَكُونَ مِثْلَ الْغُرَابِ", to: "فَأَصْبَحَ مِنَ النَّادِمِينَ", type: "sequence", description: "Learning from crow led to regret" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Contracts & Food Laws", verses: "5:1-5", description: "Fulfill contracts, halal/haram animals, ihram hunting rules" },
      { stage: 2, theme: "Purification Laws", verses: "5:6", description: "Wudu, ghusl, tayammum - ease in religion" },
      { stage: 3, theme: "Justice & Witness", verses: "5:7-11", description: "Be just even with enemies, remember Allah's favor" },
      { stage: 4, theme: "Covenants Broken", verses: "5:12-19", description: "Bani Israel and Christian covenants, Prophet's clarification" },
      { stage: 5, theme: "Moses & Entry to Land", verses: "5:20-26", description: "Command to enter, refusal, 40-year wandering" },
      { stage: 6, theme: "Cain & Abel", verses: "5:27-32", description: "First murder, sanctity of life established" },
      { stage: 7, theme: "Punishment for Corruption", verses: "5:33-40", description: "Hirabah penalties, theft punishment, repentance" },
      { stage: 8, theme: "Previous Scriptures", verses: "5:41-50", description: "Torah, Gospel, Quran - judging by revelation" },
      { stage: 9, theme: "Alliance & Loyalty", verses: "5:51-58", description: "Who are true allies, hypocrites exposed" },
      { stage: 10, theme: "People of Book Criticized", verses: "5:59-69", description: "Their excesses, call to follow revelation" },
      { stage: 11, theme: "Jesus Clarified", verses: "5:70-77", description: "Trinity rejected, Jesus as messenger only" },
      { stage: 12, theme: "Nearest in Affection", verses: "5:78-86", description: "Humble Christians praised" },
      { stage: 13, theme: "Prohibitions Detailed", verses: "5:87-108", description: "Wine, gambling, hunting, oaths, wills" },
      { stage: 14, theme: "Jesus's Miracles", verses: "5:109-110", description: "Allah's favors to Jesus listed" },
      { stage: 15, theme: "The Table Story", verses: "5:111-115", description: "Disciples request, table descends" },
      { stage: 16, theme: "Final Interrogation", verses: "5:116-120", description: "Allah questions Jesus, Jesus responds, conclusion" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Honor all contracts", how: "Business, marriage, promises - fulfill them completely as worship", verse: "5:1" },
      { principle: "Eat halal carefully", how: "Know prohibited categories, ask about slaughter method, when in doubt abstain", verse: "5:3" },
      { principle: "Ease in worship", how: "Use tayammum when needed, Allah doesn't want hardship", verse: "5:6" },
      { principle: "Justice despite hatred", how: "Be fair even with enemies - 'adl (justice) is nearer to taqwa", verse: "5:8" },
      { principle: "Value every life", how: "One life = all humanity. Save lives, don't take them", verse: "5:32" },
      { principle: "Avoid major sins", how: "Wine, gambling, fortune-telling - complete avoidance, not moderation", verse: "5:90" },
      { principle: "Judge by Quran", how: "Reference Islamic principles in disputes, don't abandon divine guidance", verse: "5:48" },
      { principle: "Respect Jesus correctly", how: "Honor as prophet, not divine. He worshipped Allah alone", verse: "5:75" },
      { principle: "Repent before it's too late", how: "Even major sins forgiven if sincere repentance before being caught", verse: "5:34" },
      { principle: "Choose allies wisely", how: "Core loyalty to Allah, Prophet, believers. Others: fair dealing, not protective alliance against Islam", verse: "5:55" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Completion",
    insight: "Al-Ma'idah is uniquely positioned as one of the last surahs revealed, containing the iconic verse 'Today I have perfected your religion' (5:3), spoken on the Day of Arafah during the Farewell Pilgrimage. This gives the surah a sense of finality and comprehensiveness. It opens with 'O you who believe, fulfill your contracts' - and this contractual theme permeates everything: covenants with Allah, with previous nations, social contracts, food laws, even the disciples' request for a divine sign. The story of the Table (Ma'idah) itself represents a covenant: those who receive direct divine miracle bear greater responsibility. The surah also serves as the definitive statement on Christian beliefs about Jesus - addressing trinity, divinity claims, and worship of Mary, while honoring Jesus as a noble prophet. It's as if Allah is settling all accounts before closing this phase of revelation."
  },

  linguisticFeatures: {
    features: [
      { feature: "Opening with 'O you who believe'", example: "يَا أَيُّهَا الَّذِينَ آمَنُوا", effect: "Direct address establishing intimate relationship - appears 16+ times" },
      { feature: "Paired prohibitions", example: "حُرِّمَتْ... أُحِلَّتْ", effect: "Clear contrast between forbidden and permissible" },
      { feature: "Repetition of 'by My permission'", example: "بِإِذْنِي (×5 in v.110)", effect: "Emphasizes Jesus's miracles were Allah's power, not his own" },
      { feature: "Rhetorical questions", example: "أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ", effect: "Makes listener reflect - who would choose jahiliyyah?" },
      { feature: "Escalating consequences", example: "كَافِرُونَ، ظَالِمُونَ، فَاسِقُونَ", effect: "Three verses (44,45,47) with increasing severity of labels" }
    ]
  },

  crossReferences: {
    references: [
      { reference: "2:173", topic: "Halal/Haram food", connection: "Earlier list in Al-Baqarah expanded here" },
      { reference: "3:45-55", topic: "Jesus's story", connection: "Al-Imran's account complemented with Table story" },
      { reference: "4:171", topic: "Trinity refutation", connection: "An-Nisa begins, Al-Ma'idah completes" },
      { reference: "2:183-187", topic: "Fasting laws", connection: "Similar legislative style for different topic" },
      { reference: "6:145", topic: "Forbidden foods", connection: "Consistent list across Quran" }
    ]
  }
};

export default ONTOLOGY;
