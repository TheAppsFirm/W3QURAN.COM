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
          meaning: { en: "Fulfill your contracts", ur: "عہد پورے کرو - اللہ سے، لوگوں سے، تجارتی، ازدواجی" },
          explanation: { en: "Opening command setting the surah's theme. Uqud includes all types: with Allah, with people, commercial, marital", ur: "سورت کا موضوع متعین کرنے والا ابتدائی حکم۔ عقود میں ہر قسم شامل: اللہ سے، لوگوں سے، تجارتی، ازدواجی" },
          verseRef: "5:1"
        },
        {
          term: "مِيثَاقَ بَنِي إِسْرَائِيلَ",
          meaning: { en: "Covenant of Bani Israel", ur: "بنی اسرائیل کا میثاق - انہوں نے توڑ دیا" },
          explanation: { en: "Allah took their covenant: establish prayer, give zakah, believe in messengers. They broke it.", ur: "اللہ نے ان سے عہد لیا: نماز قائم کرو، زکوٰۃ دو، رسولوں پر ایمان لاؤ۔ انہوں نے توڑ دیا۔" },
          verseRef: "5:12"
        },
        {
          term: "مِيثَاقَ الَّذِينَ قَالُوا إِنَّا نَصَارَىٰ",
          meaning: { en: "Covenant of Christians", ur: "نصاریٰ کا میثاق - حصہ بھول گئے" },
          explanation: { en: "Christians also had covenant but forgot portion of it, leading to enmity among themselves", ur: "نصاریٰ سے بھی عہد تھا مگر حصہ بھول گئے، جس سے آپس میں دشمنی ہوئی" },
          verseRef: "5:14"
        },
        {
          term: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ",
          meaning: { en: "Today I have perfected your religion", ur: "آج میں نے تمہارا دین مکمل کر دیا - عرفہ کے دن" },
          explanation: { en: "Revealed on Day of Arafah - Allah's covenant with this Ummah is complete. Final perfection.", ur: "عرفہ کے دن نازل ہوئی - اس امت سے اللہ کا عہد مکمل۔ آخری تکمیل۔" },
          verseRef: "5:3"
        },
        {
          term: "أَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي",
          meaning: { en: "Completed My favor upon you", ur: "اپنی نعمت پوری کر دی" },
          explanation: { en: "Not just religion perfected, but Allah's favor completed - spiritual and worldly blessings", ur: "صرف دین مکمل نہیں بلکہ اللہ کی نعمت پوری - روحانی اور دنیاوی نعمتیں" },
          verseRef: "5:3"
        },
        {
          term: "وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا",
          meaning: { en: "Chosen Islam as your religion", ur: "اسلام کو تمہارے دین کے طور پر پسند کیا" },
          explanation: { en: "Divine pleasure in Islam as the final, chosen way - radiya (pleased/satisfied)", ur: "اسلام بطور آخری، منتخب راہ پر الٰہی رضا - رضیت (خوش/مطمئن)" },
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
          meaning: { en: "Lawful for you are grazing livestock", ur: "چوپائے جانور حلال ہیں" },
          explanation: { en: "Cattle, sheep, goats, camels - permissible with conditions", ur: "مویشی، بھیڑ، بکری، اونٹ - شرائط کے ساتھ حلال" },
          verseRef: "5:1"
        },
        {
          term: "حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ",
          meaning: { en: "Forbidden: carrion", ur: "مردار حرام ہے" },
          explanation: { en: "Dead animals not slaughtered properly", ur: "مردہ جانور جو صحیح ذبح نہیں ہوئے" },
          verseRef: "5:3"
        },
        {
          term: "وَالدَّمُ",
          meaning: { en: "And blood", ur: "اور خون" },
          explanation: { en: "Flowing blood is forbidden - wisdom in avoiding disease", ur: "بہتا خون حرام - بیماری سے بچاؤ کی حکمت" },
          verseRef: "5:3"
        },
        {
          term: "وَلَحْمُ الْخِنزِيرِ",
          meaning: { en: "And swine flesh", ur: "اور سور کا گوشت" },
          explanation: { en: "Pork absolutely forbidden in all forms", ur: "سور ہر شکل میں بالکل حرام" },
          verseRef: "5:3"
        },
        {
          term: "وَمَا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ",
          meaning: { en: "What is slaughtered for other than Allah", ur: "غیر اللہ کے نام پر ذبح کیا گیا" },
          explanation: { en: "Animals sacrificed to idols, saints, graves - forbidden regardless of method", ur: "بتوں، اولیاء، قبروں کے نام پر ذبح - طریقے سے قطع نظر حرام" },
          verseRef: "5:3"
        },
        {
          term: "الْمُنْخَنِقَةُ",
          meaning: { en: "Strangled", ur: "گلا گھونٹ کر مارا گیا" },
          explanation: { en: "Animals that died by choking/strangulation", ur: "گلا گھٹنے سے مرنے والے جانور" },
          verseRef: "5:3"
        },
        {
          term: "الْمَوْقُوذَةُ",
          meaning: { en: "Beaten to death", ur: "مار مار کر ہلاک کیا گیا" },
          explanation: { en: "Animals killed by beating", ur: "مار پیٹ سے ہلاک جانور" },
          verseRef: "5:3"
        },
        {
          term: "الْمُتَرَدِّيَةُ",
          meaning: { en: "Fallen from height", ur: "اونچائی سے گر کر مرا" },
          explanation: { en: "Animals that died falling from high place", ur: "اونچائی سے گر کر مرنے والے جانور" },
          verseRef: "5:3"
        },
        {
          term: "النَّطِيحَةُ",
          meaning: { en: "Gored by horns", ur: "سینگ مار کر مارا گیا" },
          explanation: { en: "Killed by another animal's horns", ur: "دوسرے جانور کے سینگوں سے مارے گئے" },
          verseRef: "5:3"
        },
        {
          term: "مَا أَكَلَ السَّبُعُ",
          meaning: { en: "What predators ate from", ur: "درندے کا کھایا ہوا" },
          explanation: { en: "Animals partially eaten by wild beasts", ur: "درندوں کے کھائے ہوئے جانور" },
          verseRef: "5:3"
        },
        {
          term: "إِلَّا مَا ذَكَّيْتُمْ",
          meaning: { en: "Except what you slaughter (in time)", ur: "سوائے جسے تم ذبح کر لو" },
          explanation: { en: "If animal still alive and you slaughter properly - permissible", ur: "اگر جانور ابھی زندہ ہو اور صحیح ذبح کرو - حلال" },
          verseRef: "5:3"
        },
        {
          term: "وَمَا ذُبِحَ عَلَى النُّصُبِ",
          meaning: { en: "Slaughtered on stone altars", ur: "بتوں کی قربان گاہوں پر ذبح کیا گیا" },
          explanation: { en: "Pre-Islamic practice of sacrificing on idol stones", ur: "جاہلیت کی رسم - بتوں کے پتھروں پر ذبح کرنا" },
          verseRef: "5:3"
        },
        {
          term: "وَطَعَامُ الَّذِينَ أُوتُوا الْكِتَابَ حِلٌّ لَّكُمْ",
          meaning: { en: "Food of People of the Book is lawful", ur: "اہل کتاب کا کھانا حلال ہے" },
          explanation: { en: "Jewish and Christian slaughtered meat permissible for Muslims", ur: "یہود اور نصاریٰ کا ذبیحہ مسلمانوں کے لیے حلال" },
          verseRef: "5:5"
        },
        {
          term: "الْخَمْرُ وَالْمَيْسِرُ وَالْأَنصَابُ وَالْأَزْلَامُ",
          meaning: { en: "Wine, gambling, idols, divining arrows", ur: "شراب، جوا، بت، پانسے - شیطان کا گندا کام" },
          explanation: { en: "Complete prohibition of intoxicants and games of chance - 'filth from Satan's work'", ur: "نشہ آور چیزوں اور جوئے کی مکمل حرمت - 'شیطان کا گندا کام'" },
          verseRef: "5:90"
        },
        {
          term: "فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ",
          meaning: { en: "Avoid it that you may succeed", ur: "اس سے بچو تاکہ کامیاب ہو" },
          explanation: { en: "Command to completely avoid, not just abstain when drinking", ur: "مکمل پرہیز کا حکم، صرف پینے وقت نہیں" },
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
          meaning: { en: "Not hunting while in ihram", ur: "احرام میں شکار حرام" },
          explanation: { en: "During pilgrimage state, land hunting is forbidden", ur: "حالت احرام میں خشکی کا شکار حرام" },
          verseRef: "5:1"
        },
        {
          term: "أُحِلَّ لَكُمْ صَيْدُ الْبَحْرِ وَطَعَامُهُ",
          meaning: { en: "Lawful: sea game and its food", ur: "سمندری شکار حلال ہے" },
          explanation: { en: "Sea hunting allowed even in ihram - provision for travelers", ur: "احرام میں بھی سمندری شکار جائز - مسافروں کا سامان" },
          verseRef: "5:96"
        },
        {
          term: "وَحُرِّمَ عَلَيْكُمْ صَيْدُ الْبَرِّ مَا دُمْتُمْ حُرُمًا",
          meaning: { en: "Land game forbidden while in ihram", ur: "احرام میں خشکی کا شکار حرام" },
          explanation: { en: "Cannot hunt land animals during pilgrimage state", ur: "حالت احرام میں خشکی کے جانوروں کا شکار نہیں کر سکتے" },
          verseRef: "5:96"
        },
        {
          term: "وَمَا عَلَّمْتُم مِّنَ الْجَوَارِحِ مُكَلِّبِينَ",
          meaning: { en: "What trained hunting animals catch", ur: "سدھائے ہوئے شکاری جانوروں کا پکڑا ہوا" },
          explanation: { en: "Hunting with trained dogs, falcons etc. - eat what they catch for you, say Bismillah", ur: "سدھائے ہوئے کتوں، باز وغیرہ سے شکار - ان کا پکڑا ہوا کھاؤ، بسم اللہ پڑھو" },
          verseRef: "5:4"
        },
        {
          term: "جَزَاءٌ مِّثْلُ مَا قَتَلَ مِنَ النَّعَمِ",
          meaning: { en: "Penalty: equivalent livestock", ur: "کفارہ: مارے گئے جانور کے برابر" },
          explanation: { en: "If you kill game in ihram, sacrifice equivalent animal as kaffarah", ur: "اگر احرام میں شکار مارو تو کفارے میں برابر جانور ذبح کرو" },
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
          meaning: { en: "When you rise for prayer, wash faces", ur: "نماز کے لیے اٹھو تو چہرے دھوؤ" },
          explanation: { en: "Beginning of wudu: face washing first", ur: "وضو کی ابتدا: پہلے چہرہ دھونا" },
          verseRef: "5:6"
        },
        {
          term: "وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ",
          meaning: { en: "And hands to the elbows", ur: "اور ہاتھ کہنیوں سمیت" },
          explanation: { en: "Arms including elbows - extent defined", ur: "بازو بشمول کہنیاں - حد مقرر" },
          verseRef: "5:6"
        },
        {
          term: "وَامْسَحُوا بِرُءُوسِكُمْ",
          meaning: { en: "And wipe your heads", ur: "سروں کا مسح کرو" },
          explanation: { en: "Masah - wiping, not washing, the head", ur: "مسح - سر کا دھونا نہیں بلکہ پونچھنا" },
          verseRef: "5:6"
        },
        {
          term: "وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ",
          meaning: { en: "And feet to the ankles", ur: "اور پاؤں ٹخنوں سمیت" },
          explanation: { en: "Feet including ankles - completing wudu", ur: "پاؤں بشمول ٹخنے - وضو کی تکمیل" },
          verseRef: "5:6"
        },
        {
          term: "وَإِن كُنتُمْ جُنُبًا فَاطَّهَّرُوا",
          meaning: { en: "If junub (major impurity), purify", ur: "جنابت ہو تو غسل کرو" },
          explanation: { en: "Ghusl (full bath) required after sexual intercourse", ur: "ہم بستری کے بعد غسل (پورا نہانا) ضروری" },
          verseRef: "5:6"
        },
        {
          term: "فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا",
          meaning: { en: "If no water, use clean earth", ur: "پانی نہ ملے تو پاک مٹی سے تیمم" },
          explanation: { en: "Tayammum: dry ablution with clean earth when water unavailable", ur: "تیمم: پانی نہ ملنے پر پاک مٹی سے خشک وضو" },
          verseRef: "5:6"
        },
        {
          term: "مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُم مِّنْ حَرَجٍ",
          meaning: { en: "Allah doesn't want difficulty for you", ur: "اللہ تم پر تنگی نہیں چاہتا" },
          explanation: { en: "Islamic law designed for ease, not hardship", ur: "اسلامی قانون آسانی کے لیے بنایا گیا، مشکل کے لیے نہیں" },
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
          meaning: { en: "O People of Book, Our Messenger has come", ur: "اے اہل کتاب، ہمارا رسول آ گیا" },
          explanation: { en: "Call to Jews/Christians to accept Muhammad - makes clear what was hidden", ur: "یہود و نصاریٰ کو محمد ﷺ قبول کرنے کی دعوت - جو چھپایا تھا وہ واضح کرتا ہے" },
          verseRef: "5:15"
        },
        {
          term: "يُبَيِّنُ لَكُمْ كَثِيرًا مِّمَّا كُنتُمْ تُخْفُونَ",
          meaning: { en: "Clarifies much of what you concealed", ur: "جو تم چھپاتے تھے وہ ظاہر کرتا ہے" },
          explanation: { en: "Prophet reveals hidden truths they distorted in their scriptures", ur: "نبی ان سچائیوں کو ظاہر کرتے ہیں جو انہوں نے اپنی کتابوں میں بگاڑی تھیں" },
          verseRef: "5:15"
        },
        {
          term: "قَدْ جَاءَكُم مِّنَ اللَّهِ نُورٌ وَكِتَابٌ مُّبِينٌ",
          meaning: { en: "Light and clear Book from Allah", ur: "نور اور واضح کتاب آ گئی" },
          explanation: { en: "Prophet/Quran as divine light and clarification", ur: "نبی/قرآن بطور الٰہی نور اور وضاحت" },
          verseRef: "5:15"
        },
        {
          term: "لَقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ هُوَ الْمَسِيحُ",
          meaning: { en: "Disbelieved: those who say Allah IS the Messiah", ur: "کفر کیا جنہوں نے کہا اللہ مسیح ہے" },
          explanation: { en: "Clear rejection of Christ's divinity - Jesus himself commanded worship of Allah alone", ur: "مسیح کی الوہیت کا واضح رد - عیسیٰ نے خود صرف اللہ کی عبادت کا حکم دیا" },
          verseRef: "5:17, 5:72"
        },
        {
          term: "لَّقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ ثَالِثُ ثَلَاثَةٍ",
          meaning: { en: "Disbelieved: those who say Allah is third of three", ur: "کفر کیا جنہوں نے کہا اللہ تین میں کا تیسرا ہے" },
          explanation: { en: "Trinity doctrine rejected - 'There is no god but One God'", ur: "تثلیث کا عقیدہ مسترد - 'اللہ کے سوا کوئی معبود نہیں'" },
          verseRef: "5:73"
        },
        {
          term: "وَالْمُحْصَنَاتُ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ",
          meaning: { en: "Chaste women from People of Book", ur: "اہل کتاب کی پاکدامن عورتیں" },
          explanation: { en: "Muslim men may marry chaste Jewish/Christian women", ur: "مسلمان مرد پاکدامن یہودی/عیسائی عورتوں سے نکاح کر سکتے ہیں" },
          verseRef: "5:5"
        },
        {
          term: "لَتَجِدَنَّ أَشَدَّ النَّاسِ عَدَاوَةً... الْيَهُودَ",
          meaning: { en: "Most hostile: Jews and polytheists", ur: "سب سے زیادہ دشمن یہود اور مشرکین" },
          explanation: { en: "Observation about relative attitudes toward Muslims - historical context", ur: "مسلمانوں کے ساتھ رویے کا مشاہدہ - تاریخی تناظر" },
          verseRef: "5:82"
        },
        {
          term: "وَلَتَجِدَنَّ أَقْرَبَهُم مَّوَدَّةً... الَّذِينَ قَالُوا إِنَّا نَصَارَىٰ",
          meaning: { en: "Nearest in affection: Christians", ur: "محبت میں قریب تر نصاریٰ" },
          explanation: { en: "Among them are humble priests and monks, not arrogant", ur: "ان میں عاجز پادری اور راہب ہیں، متکبر نہیں" },
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
          meaning: { en: "When the disciples said", ur: "جب حواریوں نے کہا" },
          explanation: { en: "Hawariyin - Jesus's closest followers, the helpers", ur: "حواریین - عیسیٰ کے قریب ترین پیروکار، مددگار" },
          verseRef: "5:112"
        },
        {
          term: "هَلْ يَسْتَطِيعُ رَبُّكَ أَن يُنَزِّلَ عَلَيْنَا مَائِدَةً",
          meaning: { en: "Can your Lord send down a Table from heaven?", ur: "کیا تمہارا رب دسترخوان اتار سکتا ہے؟" },
          explanation: { en: "Disciples ask for miracle - seeking certainty or testing?", ur: "حواری معجزے کی درخواست - یقین کی تلاش یا آزمائش؟" },
          verseRef: "5:112"
        },
        {
          term: "اتَّقُوا اللَّهَ إِن كُنتُم مُّؤْمِنِينَ",
          meaning: { en: "Fear Allah if you are believers", ur: "اللہ سے ڈرو اگر تم مومن ہو" },
          explanation: { en: "Jesus's concerned response - true believers should not need such proofs", ur: "عیسیٰ کا فکرمند جواب - سچے مومنوں کو ایسے ثبوت کی ضرورت نہیں ہونی چاہیے" },
          verseRef: "5:112"
        },
        {
          term: "نُرِيدُ أَن نَّأْكُلَ مِنْهَا وَتَطْمَئِنَّ قُلُوبُنَا",
          meaning: { en: "We want to eat and our hearts be satisfied", ur: "ہم کھانا چاہتے ہیں اور دل مطمئن ہوں" },
          explanation: { en: "Their justification: physical sustenance AND spiritual certainty", ur: "ان کا جواز: جسمانی خوراک اور روحانی اطمینان" },
          verseRef: "5:113"
        },
        {
          term: "وَنَعْلَمَ أَن قَدْ صَدَقْتَنَا",
          meaning: { en: "And know you spoke truth", ur: "اور جان لیں کہ تو نے سچ کہا" },
          explanation: { en: "Seeking certainty about Jesus's prophethood", ur: "عیسیٰ کی نبوت کے بارے میں یقین حاصل کرنا" },
          verseRef: "5:113"
        },
        {
          term: "اللَّهُمَّ رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ",
          meaning: { en: "O Allah, send us a Table from heaven", ur: "اے اللہ! آسمان سے دسترخوان نازل فرما" },
          explanation: { en: "Jesus's prayer - invokes Allah, not himself", ur: "عیسیٰ کی دعا - اللہ سے مانگی، خود سے نہیں" },
          verseRef: "5:114"
        },
        {
          term: "تَكُونُ لَنَا عِيدًا لِّأَوَّلِنَا وَآخِرِنَا",
          meaning: { en: "A festival for first and last of us", ur: "ہمارے پہلوں اور پچھلوں کے لیے عید" },
          explanation: { en: "Eid - celebration for all generations of followers", ur: "عید - تمام نسلوں کے پیروکاروں کی خوشی" },
          verseRef: "5:114"
        },
        {
          term: "وَآيَةً مِّنكَ",
          meaning: { en: "And a sign from You", ur: "اور تیری طرف سے نشانی" },
          explanation: { en: "Request for divine sign - proof of Allah's power", ur: "الٰہی نشانی کی درخواست - اللہ کی قدرت کا ثبوت" },
          verseRef: "5:114"
        },
        {
          term: "إِنِّي مُنَزِّلُهَا عَلَيْكُمْ",
          meaning: { en: "I will send it down to you", ur: "میں اسے تم پر اتارتا ہوں" },
          explanation: { en: "Allah grants the request - miracle confirmed", ur: "اللہ نے درخواست قبول فرمائی - معجزہ ثابت" },
          verseRef: "5:115"
        },
        {
          term: "فَمَن يَكْفُرْ بَعْدُ مِنكُمْ فَإِنِّي أُعَذِّبُهُ",
          meaning: { en: "Whoever disbelieves after - punishment", ur: "جو اس کے بعد کفر کرے، سخت عذاب" },
          explanation: { en: "Warning: after such miracle, disbelief brings unprecedented punishment", ur: "تنبیہ: اس معجزے کے بعد کفر سے بے مثال عذاب" },
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
          meaning: { en: "Messiah son of Mary was only a messenger", ur: "مسیح ابن مریم صرف رسول تھے" },
          explanation: { en: "Clear definition: Jesus = messenger, not divine", ur: "واضح تعریف: عیسیٰ = رسول، الٰہ نہیں" },
          verseRef: "5:75"
        },
        {
          term: "وَأُمُّهُ صِدِّيقَةٌ",
          meaning: { en: "His mother was a truthful woman", ur: "ان کی ماں صدیقہ تھیں" },
          explanation: { en: "Mary honored as Siddiqah (truthful) - but human, not divine", ur: "مریم صدیقہ (سچی) کے طور پر معزز - مگر انسان، الٰہ نہیں" },
          verseRef: "5:75"
        },
        {
          term: "كَانَا يَأْكُلَانِ الطَّعَامَ",
          meaning: { en: "Both used to eat food", ur: "دونوں کھانا کھاتے تھے - خدا نہیں" },
          explanation: { en: "Powerful proof: eating = physical needs = not divine", ur: "طاقتور دلیل: کھانا = جسمانی ضروریات = الٰہ نہیں" },
          verseRef: "5:75"
        },
        {
          term: "وَإِذْ قَالَ اللَّهُ يَا عِيسَى ابْنَ مَرْيَمَ أَأَنتَ قُلْتَ لِلنَّاسِ",
          meaning: { en: "When Allah said: O Jesus, did YOU tell people...", ur: "جب اللہ نے کہا: اے عیسیٰ، کیا تو نے کہا..." },
          explanation: { en: "Divine interrogation on Day of Judgment", ur: "قیامت کے دن الٰہی پوچھ گچھ" },
          verseRef: "5:116"
        },
        {
          term: "اتَّخِذُونِي وَأُمِّيَ إِلَٰهَيْنِ مِن دُونِ اللَّهِ",
          meaning: { en: "Take me and my mother as two gods besides Allah?", ur: "مجھے اور میری ماں کو اللہ کے سوا دو معبود بناؤ؟" },
          explanation: { en: "Accusation examined: worship of Jesus and Mary as divine", ur: "الزام کا جائزہ: عیسیٰ اور مریم کی بطور خدا عبادت" },
          verseRef: "5:116"
        },
        {
          term: "سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ",
          meaning: { en: "Glory be to You! It was not for me to say what I had no right", ur: "تو پاک ہے! میرا حق نہیں کہ بے حق بات کہوں" },
          explanation: { en: "Jesus's denial - he never claimed divinity", ur: "عیسیٰ کا انکار - انہوں نے کبھی الوہیت کا دعویٰ نہیں کیا" },
          verseRef: "5:116"
        },
        {
          term: "مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ",
          meaning: { en: "I said only what You commanded", ur: "صرف وہی کہا جو تو نے حکم دیا" },
          explanation: { en: "Jesus only preached what Allah commanded - no divine claims", ur: "عیسیٰ نے صرف وہی کہا جو اللہ نے حکم دیا - الوہیت کا کوئی دعویٰ نہیں" },
          verseRef: "5:117"
        },
        {
          term: "اعْبُدُوا اللَّهَ رَبِّي وَرَبَّكُمْ",
          meaning: { en: "Worship Allah, my Lord and your Lord", ur: "اللہ کی عبادت کرو، میرے اور تمہارے رب کی" },
          explanation: { en: "Jesus's actual teaching: worship Allah alone - same Lord for all", ur: "عیسیٰ کی اصل تعلیم: صرف اللہ کی عبادت - سب کا ایک ہی رب" },
          verseRef: "5:117"
        },
        {
          term: "وَكُنتُ عَلَيْهِمْ شَهِيدًا مَّا دُمْتُ فِيهِمْ",
          meaning: { en: "I was a witness over them while among them", ur: "جب تک ان میں رہا، گواہ رہا" },
          explanation: { en: "Jesus's responsibility was only during his earthly ministry", ur: "عیسیٰ کی ذمہ داری صرف ان کی زمینی خدمت تک تھی" },
          verseRef: "5:117"
        },
        {
          term: "فَلَمَّا تَوَفَّيْتَنِي كُنتَ أَنتَ الرَّقِيبَ عَلَيْهِمْ",
          meaning: { en: "When You took me up, You were the Watcher", ur: "جب تو نے مجھے اٹھا لیا، تو ہی نگران" },
          explanation: { en: "After Jesus, Allah alone watches - Jesus not interceding now", ur: "عیسیٰ کے بعد صرف اللہ نگران ہے - عیسیٰ اب شفاعت نہیں کر رہے" },
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
          meaning: { en: "When I supported you with the Holy Spirit", ur: "جب میں نے روح القدس سے تیری مدد کی" },
          explanation: { en: "Jibreel (Gabriel) aided Jesus from childhood to prophethood", ur: "جبریل نے عیسیٰ کی بچپن سے نبوت تک مدد کی" },
          verseRef: "5:110"
        },
        {
          term: "تُكَلِّمُ النَّاسَ فِي الْمَهْدِ وَكَهْلًا",
          meaning: { en: "Speaking to people in cradle and maturity", ur: "گہوارے میں اور بڑی عمر میں بات کرنا" },
          explanation: { en: "Miracle of infant speech defending Mary's honor", ur: "گہوارے میں بولنے کا معجزہ مریم کی عزت کے دفاع میں" },
          verseRef: "5:110"
        },
        {
          term: "وَإِذْ عَلَّمْتُكَ الْكِتَابَ وَالْحِكْمَةَ وَالتَّوْرَاةَ وَالْإِنجِيلَ",
          meaning: { en: "When I taught you scripture, wisdom, Torah, Gospel", ur: "جب میں نے تجھے کتاب، حکمت، توریت، انجیل سکھائی" },
          explanation: { en: "Divine teaching - Jesus didn't invent, he was taught", ur: "الٰہی تعلیم - عیسیٰ نے ایجاد نہیں کیا، انہیں سکھایا گیا" },
          verseRef: "5:110"
        },
        {
          term: "وَإِذْ تَخْلُقُ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ بِإِذْنِي",
          meaning: { en: "When you made from clay bird shape - by My permission", ur: "جب تو مٹی سے پرندے کی شکل بناتا - میرے حکم سے" },
          explanation: { en: "Clay bird miracle - emphasized: by ALLAH's permission, not Jesus's power", ur: "مٹی کے پرندے کا معجزہ - زور: اللہ کے حکم سے، عیسیٰ کی طاقت سے نہیں" },
          verseRef: "5:110"
        },
        {
          term: "فَتَنفُخُ فِيهَا فَتَكُونُ طَيْرًا بِإِذْنِي",
          meaning: { en: "Then blow in it and it becomes bird - by My permission", ur: "پھر پھونکتا تو وہ پرندہ بن جاتا - میرے حکم سے" },
          explanation: { en: "Life given by Allah's permission - Jesus as instrument, not source", ur: "زندگی اللہ کے حکم سے عطا - عیسیٰ ذریعہ ہیں، ماخذ نہیں" },
          verseRef: "5:110"
        },
        {
          term: "وَتُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ بِإِذْنِي",
          meaning: { en: "Heal blind and leper - by My permission", ur: "اندھے اور کوڑھی کو شفا دینا - میرے حکم سے" },
          explanation: { en: "Healing miracles - three times 'by My permission' emphasized", ur: "شفا کے معجزات - تین بار 'میرے حکم سے' پر زور" },
          verseRef: "5:110"
        },
        {
          term: "وَإِذْ تُخْرِجُ الْمَوْتَىٰ بِإِذْنِي",
          meaning: { en: "Raising dead - by My permission", ur: "مردوں کو زندہ کرنا - میرے حکم سے" },
          explanation: { en: "Even raising dead was by Allah's permission - not Jesus's own power", ur: "مردوں کو زندہ کرنا بھی اللہ کے حکم سے تھا - عیسیٰ کی اپنی طاقت نہیں" },
          verseRef: "5:110"
        },
        {
          term: "إِذْ كَفَفْتُ بَنِي إِسْرَائِيلَ عَنكَ",
          meaning: { en: "When I restrained Bani Israel from you", ur: "جب میں نے بنی اسرائیل کو تجھ سے روکا" },
          explanation: { en: "Allah protected Jesus from those who wanted to kill him", ur: "اللہ نے عیسیٰ کو ان سے بچایا جو انہیں مارنا چاہتے تھے" },
          verseRef: "5:110"
        },
        {
          term: "إِن هَٰذَا إِلَّا سِحْرٌ مُّبِينٌ",
          meaning: { en: "This is nothing but clear magic", ur: "یہ تو صرف کھلا جادو ہے" },
          explanation: { en: "Disbelievers dismissed miracles as magic - same accusation for all prophets", ur: "کافروں نے معجزات کو جادو کہا - تمام انبیاء پر یہی الزام" },
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
          meaning: { en: "Recite to them the true story of Adam's two sons", ur: "آدم کے دو بیٹوں کا سچا قصہ سناؤ" },
          explanation: { en: "First murder in human history - Quran tells it truthfully", ur: "انسانی تاریخ میں پہلا قتل - قرآن سچائی سے بیان کرتا ہے" },
          verseRef: "5:27"
        },
        {
          term: "إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِن أَحَدِهِمَا",
          meaning: { en: "Both offered sacrifice, one accepted", ur: "دونوں نے قربانی دی، ایک کی قبول ہوئی" },
          explanation: { en: "Qurban = sacrifice. Habil's accepted (fire consumed it), Qabil's rejected", ur: "قربان = قربانی۔ ہابیل کی قبول (آگ نے لے لی)، قابیل کی رد" },
          verseRef: "5:27"
        },
        {
          term: "لَأَقْتُلَنَّكَ",
          meaning: { en: "I will surely kill you", ur: "میں تجھے ضرور مار ڈالوں گا" },
          explanation: { en: "Jealousy leading to first murder threat", ur: "حسد پہلے قتل کی دھمکی کی طرف لے گیا" },
          verseRef: "5:27"
        },
        {
          term: "إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ",
          meaning: { en: "Allah accepts only from the righteous", ur: "اللہ متقیوں سے ہی قبول کرتا ہے" },
          explanation: { en: "Key principle: acceptance based on taqwa, not ritual alone", ur: "اہم اصول: قبولیت تقویٰ پر ہے، صرف رسم پر نہیں" },
          verseRef: "5:27"
        },
        {
          term: "لَئِن بَسَطتَ إِلَيَّ يَدَكَ لِتَقْتُلَنِي مَا أَنَا بِبَاسِطٍ يَدِيَ",
          meaning: { en: "If you extend hand to kill me, I won't extend mine", ur: "تو مجھے مارے گا، میں تجھے نہیں ماروں گا" },
          explanation: { en: "Habil's noble response: won't commit murder even in self-defense from murder", ur: "ہابیل کا نیک جواب: قتل کے دفاع میں بھی قتل نہیں کروں گا" },
          verseRef: "5:28"
        },
        {
          term: "إِنِّي أَخَافُ اللَّهَ رَبَّ الْعَالَمِينَ",
          meaning: { en: "I fear Allah, Lord of the worlds", ur: "میں اللہ رب العالمین سے ڈرتا ہوں" },
          explanation: { en: "Taqwa prevents even justified violence - beautiful restraint", ur: "تقویٰ جائز تشدد سے بھی روکتا ہے - خوبصورت ضبط" },
          verseRef: "5:28"
        },
        {
          term: "فَطَوَّعَتْ لَهُ نَفْسُهُ قَتْلَ أَخِيهِ",
          meaning: { en: "His soul prompted him to kill his brother", ur: "اس کے نفس نے بھائی کا قتل آسان کر دکھایا" },
          explanation: { en: "Tawwa'at = made easy, normalized murder for him. Nafs can corrupt", ur: "طوعت = آسان کر دیا، قتل کو عام بنایا۔ نفس بگاڑ سکتا ہے" },
          verseRef: "5:30"
        },
        {
          term: "فَأَصْبَحَ مِنَ الْخَاسِرِينَ",
          meaning: { en: "And became of the losers", ur: "پس نقصان اٹھانے والوں میں سے ہو گیا" },
          explanation: { en: "Murder = ultimate loss, even if 'winning' the dispute", ur: "قتل = انتہائی نقصان، چاہے تنازع 'جیت' بھی لیا" },
          verseRef: "5:30"
        },
        {
          term: "فَبَعَثَ اللَّهُ غُرَابًا يَبْحَثُ فِي الْأَرْضِ",
          meaning: { en: "Allah sent a crow digging in earth", ur: "اللہ نے کوا بھیجا جو زمین کھود رہا تھا" },
          explanation: { en: "Allah taught burial through crow - first burial in human history", ur: "اللہ نے کوے کے ذریعے دفن سکھایا - انسانی تاریخ میں پہلی تدفین" },
          verseRef: "5:31"
        },
        {
          term: "يَا وَيْلَتَا أَعَجَزْتُ أَنْ أَكُونَ مِثْلَ هَٰذَا الْغُرَابِ",
          meaning: { en: "Woe to me! Am I unable to be like this crow?", ur: "ہائے افسوس! کیا میں اس کوے جیسا بھی نہ ہو سکا؟" },
          explanation: { en: "Remorse - couldn't even bury his brother without animal teaching him", ur: "پچھتاوا - جانور سکھائے بغیر بھائی کو دفن بھی نہ کر سکا" },
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
          meaning: { en: "Whoever kills a soul except for a soul or corruption", ur: "جس نے کسی کو بغیر جان کے بدلے یا فساد کے قتل کیا" },
          explanation: { en: "Two valid reasons for death penalty: murder (qisas) or spreading corruption", ur: "سزائے موت کی دو جائز وجوہات: قتل (قصاص) یا فساد پھیلانا" },
          verseRef: "5:32"
        },
        {
          term: "فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا",
          meaning: { en: "As if he killed all mankind", ur: "گویا اس نے سب لوگوں کو قتل کیا" },
          explanation: { en: "One unjust murder = assault on humanity itself", ur: "ایک ناحق قتل = خود انسانیت پر حملہ" },
          verseRef: "5:32"
        },
        {
          term: "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا",
          meaning: { en: "And whoever saves one - as if he saved all mankind", ur: "جس نے ایک کو بچایا، سب کو بچایا" },
          explanation: { en: "Saving one life = immense reward, equal to saving all", ur: "ایک جان بچانا = عظیم اجر، سب کو بچانے کے برابر" },
          verseRef: "5:32"
        },
        {
          term: "كَتَبْنَا عَلَىٰ بَنِي إِسْرَائِيلَ",
          meaning: { en: "We decreed upon Children of Israel", ur: "ہم نے بنی اسرائیل پر لکھ دیا" },
          explanation: { en: "This principle given to earlier nations - universal law", ur: "یہ اصول پہلی قوموں کو دیا گیا - عالمگیر قانون" },
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
          meaning: { en: "Those who wage war against Allah and Messenger", ur: "جو اللہ اور رسول سے جنگ کرتے ہیں" },
          explanation: { en: "Hirabah - armed robbery, terrorism, spreading fear", ur: "حرابہ - مسلح ڈاکا، دہشت گردی، خوف پھیلانا" },
          verseRef: "5:33"
        },
        {
          term: "وَيَسْعَوْنَ فِي الْأَرْضِ فَسَادًا",
          meaning: { en: "And strive to spread corruption", ur: "اور زمین میں فساد پھیلاتے ہیں" },
          explanation: { en: "Active corruption-spreading - not minor sins", ur: "فعال فساد پھیلانا - معمولی گناہ نہیں" },
          verseRef: "5:33"
        },
        {
          term: "أَن يُقَتَّلُوا أَوْ يُصَلَّبُوا",
          meaning: { en: "Be killed or crucified", ur: "قتل کیے جائیں یا سولی دی جائے" },
          explanation: { en: "Death or crucifixion for most severe cases with killing", ur: "قتل کے ساتھ سنگین ترین مقدمات میں موت یا سولی" },
          verseRef: "5:33"
        },
        {
          term: "أَوْ تُقَطَّعَ أَيْدِيهِمْ وَأَرْجُلُهُم مِّنْ خِلَافٍ",
          meaning: { en: "Or hands and feet cut from opposite sides", ur: "یا ہاتھ پاؤں مختلف طرف سے کاٹے جائیں" },
          explanation: { en: "Cross-amputation for armed robbery without killing", ur: "بغیر قتل مسلح ڈاکے میں مخالف اطراف سے ہاتھ پاؤں کاٹنا" },
          verseRef: "5:33"
        },
        {
          term: "أَوْ يُنفَوْا مِنَ الْأَرْضِ",
          meaning: { en: "Or be exiled from the land", ur: "یا زمین سے جلاوطن کیے جائیں" },
          explanation: { en: "Banishment for lesser crimes - creates terror without bodily harm", ur: "کم سنگین جرائم میں جلاوطنی - جسمانی نقصان کے بغیر عبرت" },
          verseRef: "5:33"
        },
        {
          term: "ذَٰلِكَ لَهُمْ خِزْيٌ فِي الدُّنْيَا",
          meaning: { en: "That is disgrace in this world", ur: "یہ ان کی دنیا میں رسوائی ہے" },
          explanation: { en: "Worldly punishment as deterrent and disgrace", ur: "دنیاوی سزا بطور عبرت اور رسوائی" },
          verseRef: "5:33"
        },
        {
          term: "وَلَهُمْ فِي الْآخِرَةِ عَذَابٌ عَظِيمٌ",
          meaning: { en: "And in Hereafter a great punishment", ur: "اور آخرت میں بڑا عذاب" },
          explanation: { en: "Worldly punishment doesn't expiate - Hereafter remains", ur: "دنیاوی سزا کفارہ نہیں - آخرت باقی ہے" },
          verseRef: "5:33"
        },
        {
          term: "إِلَّا الَّذِينَ تَابُوا مِن قَبْلِ أَن تَقْدِرُوا عَلَيْهِمْ",
          meaning: { en: "Except those who repent before you apprehend them", ur: "سوائے جو گرفتاری سے پہلے توبہ کریں" },
          explanation: { en: "Repentance before capture waives hadd - door of mercy open", ur: "گرفتاری سے پہلے توبہ حد معاف کرتی ہے - رحمت کا دروازہ کھلا" },
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
          meaning: { en: "Be upholders for Allah, witnesses in justice", ur: "اللہ کے لیے قائم رہو، انصاف کے گواہ بنو" },
          explanation: { en: "Stand for Allah and testify justly - fundamental principle", ur: "اللہ کے لیے قائم رہو اور انصاف سے گواہی دو - بنیادی اصول" },
          verseRef: "5:8"
        },
        {
          term: "وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ",
          meaning: { en: "Let not hatred of a people...", ur: "کسی قوم کی دشمنی تمہیں..." },
          explanation: { en: "Even hatred of enemies shouldn't make you unjust", ur: "دشمنوں سے نفرت بھی بے انصاف نہ بنائے" },
          verseRef: "5:8"
        },
        {
          term: "عَلَىٰ أَلَّا تَعْدِلُوا",
          meaning: { en: "...lead you not to be just", ur: "...انصاف نہ کرنے پر آمادہ نہ کرے" },
          explanation: { en: "Justice even with enemies - Islamic principle", ur: "دشمنوں کے ساتھ بھی انصاف - اسلامی اصول" },
          verseRef: "5:8"
        },
        {
          term: "اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ",
          meaning: { en: "Be just - it is nearer to taqwa", ur: "انصاف کرو، یہ تقویٰ کے قریب ہے" },
          explanation: { en: "Justice linked to God-consciousness - not revenge", ur: "انصاف خدا خوفی سے جڑا - انتقام سے نہیں" },
          verseRef: "5:8"
        },
        {
          term: "وَالسَّارِقُ وَالسَّارِقَةُ فَاقْطَعُوا أَيْدِيَهُمَا",
          meaning: { en: "The thief male and female - cut their hands", ur: "چور مرد اور عورت کے ہاتھ کاٹو" },
          explanation: { en: "Hadd for theft - conditions apply (nisab, secure place, etc.)", ur: "چوری کی حد - شرائط لاگو (نصاب، محفوظ جگہ وغیرہ)" },
          verseRef: "5:38"
        },
        {
          term: "جَزَاءً بِمَا كَسَبَا نَكَالًا مِّنَ اللَّهِ",
          meaning: { en: "Recompense for what they earned, deterrent from Allah", ur: "ان کے کیے کی سزا، اللہ کی طرف سے عبرت" },
          explanation: { en: "Purpose: punishment for crime AND deterrent for society", ur: "مقصد: جرم کی سزا اور معاشرے کے لیے عبرت" },
          verseRef: "5:38"
        },
        {
          term: "فَمَن تَابَ مِن بَعْدِ ظُلْمِهِ وَأَصْلَحَ",
          meaning: { en: "Whoever repents after wrongdoing and reforms", ur: "جو ظلم کے بعد توبہ کرے اور اصلاح کرے" },
          explanation: { en: "Repentance and reform accepted - Allah's mercy for sincere change", ur: "توبہ اور اصلاح قبول - مخلص تبدیلی پر اللہ کی رحمت" },
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
          meaning: { en: "Is it the judgment of jahiliyyah they seek?", ur: "کیا جاہلیت کا فیصلہ چاہتے ہیں؟" },
          explanation: { en: "Rhetorical question: why seek pre-Islamic ignorant judgments?", ur: "بلاغتی سوال: جاہلیت کے جاہلانہ فیصلے کیوں چاہتے ہو؟" },
          verseRef: "5:50"
        },
        {
          term: "وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا لِّقَوْمٍ يُوقِنُونَ",
          meaning: { en: "Who is better than Allah in judgment for people of certainty?", ur: "یقین والوں کے لیے اللہ سے بہتر فیصلہ کرنے والا کون؟" },
          explanation: { en: "Allah's judgment is best - for those who have yaqeen (certainty)", ur: "اللہ کا فیصلہ بہترین ہے - یقین رکھنے والوں کے لیے" },
          verseRef: "5:50"
        },
        {
          term: "وَمَن لَّمْ يَحْكُم بِمَا أَنزَلَ اللَّهُ فَأُولَٰئِكَ هُمُ الْكَافِرُونَ",
          meaning: { en: "Whoever doesn't judge by Allah's revelation - they are disbelievers", ur: "جو اللہ کی نازل کردہ سے فیصلہ نہ کرے - کافر ہیں" },
          explanation: { en: "Not judging by divine law = kufr (in its context)", ur: "الٰہی قانون سے فیصلہ نہ کرنا = کفر (اپنے سیاق میں)" },
          verseRef: "5:44"
        },
        {
          term: "فَأُولَٰئِكَ هُمُ الظَّالِمُونَ",
          meaning: { en: "They are the wrongdoers", ur: "وہی ظالم ہیں" },
          explanation: { en: "Same verse pattern - zulm (oppression) in not judging by revelation", ur: "وہی آیت کا نمونہ - وحی سے فیصلہ نہ کرنے میں ظلم" },
          verseRef: "5:45"
        },
        {
          term: "فَأُولَٰئِكَ هُمُ الْفَاسِقُونَ",
          meaning: { en: "They are the transgressors", ur: "وہی فاسق ہیں" },
          explanation: { en: "Same verse pattern - fisq (transgression) in abandoning divine law", ur: "وہی آیت کا نمونہ - الٰہی قانون چھوڑنے میں فسق" },
          verseRef: "5:47"
        },
        {
          term: "لِكُلٍّ جَعَلْنَا مِنكُمْ شِرْعَةً وَمِنْهَاجًا",
          meaning: { en: "For each We made a law and method", ur: "ہم نے ہر ایک کے لیے شریعت اور طریقہ بنایا" },
          explanation: { en: "Different nations had different shariah - wisdom of Allah", ur: "مختلف قوموں کی مختلف شریعت - اللہ کی حکمت" },
          verseRef: "5:48"
        },
        {
          term: "وَلَوْ شَاءَ اللَّهُ لَجَعَلَكُمْ أُمَّةً وَاحِدَةً",
          meaning: { en: "Had Allah willed, He would have made you one nation", ur: "اللہ چاہتا تو تمہیں ایک امت بناتا" },
          explanation: { en: "Diversity is divine plan - test who follows best", ur: "تنوع الٰہی منصوبہ ہے - آزمائش کہ کون بہتر عمل کرتا ہے" },
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
          meaning: { en: "Don't take Jews and Christians as allies", ur: "یہود و نصاریٰ کو ولی نہ بناؤ" },
          explanation: { en: "Awliya = protective allies in war context, not general friends. Context: military alliance against Muslims", ur: "اولیاء = جنگی تناظر میں حفاظتی اتحادی، عام دوست نہیں۔ سیاق: مسلمانوں کے خلاف فوجی اتحاد" },
          verseRef: "5:51"
        },
        {
          term: "بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ",
          meaning: { en: "They are allies of each other", ur: "وہ آپس میں ایک دوسرے کے ولی ہیں" },
          explanation: { en: "In conflict, religious communities protect their own", ur: "تنازع میں مذہبی برادریاں اپنوں کی حفاظت کرتی ہیں" },
          verseRef: "5:51"
        },
        {
          term: "وَمَن يَتَوَلَّهُم مِّنكُمْ فَإِنَّهُ مِنْهُمْ",
          meaning: { en: "Whoever allies with them is of them", ur: "جو ان سے دوستی کرے وہ انہی میں سے ہے" },
          explanation: { en: "Warning against military alliance with those fighting Muslims", ur: "مسلمانوں سے لڑنے والوں سے فوجی اتحاد کی تنبیہ" },
          verseRef: "5:51"
        },
        {
          term: "إِنَّمَا وَلِيُّكُمُ اللَّهُ وَرَسُولُهُ وَالَّذِينَ آمَنُوا",
          meaning: { en: "Your ally is only Allah, His Messenger, and believers", ur: "تمہارا ولی صرف اللہ، رسول اور مومنین ہیں" },
          explanation: { en: "True wali (protector/ally) = Allah, Prophet, believers", ur: "حقیقی ولی (محافظ/اتحادی) = اللہ، نبی، مومنین" },
          verseRef: "5:55"
        },
        {
          term: "الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَيُؤْتُونَ الزَّكَاةَ",
          meaning: { en: "Those who establish prayer and give zakah", ur: "جو نماز قائم کرتے اور زکوٰۃ دیتے ہیں" },
          explanation: { en: "True believers identified by their actions - salah and zakah", ur: "سچے مومنین ان کے اعمال سے پہچانے جاتے ہیں - نماز اور زکوٰۃ" },
          verseRef: "5:55"
        },
        {
          term: "وَهُمْ رَاكِعُونَ",
          meaning: { en: "While they bow (in humility)", ur: "اور وہ رکوع کرنے والے ہیں" },
          explanation: { en: "Believers humble before Allah - spiritual quality", ur: "مومنین اللہ کے سامنے عاجز - روحانی خوبی" },
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
          meaning: { en: "O my people, enter the Holy Land", ur: "اے میری قوم! مقدس سرزمین میں داخل ہو" },
          explanation: { en: "Moses commanded entry to Holy Land (Palestine region)", ur: "موسیٰ نے ارض مقدس (فلسطین) میں داخلے کا حکم دیا" },
          verseRef: "5:21"
        },
        {
          term: "الَّتِي كَتَبَ اللَّهُ لَكُمْ",
          meaning: { en: "Which Allah has prescribed for you", ur: "جو اللہ نے تمہارے لیے لکھ دی ہے" },
          explanation: { en: "Allah had ordained that land for them at that time", ur: "اللہ نے اس وقت وہ سرزمین ان کے لیے مقرر کی تھی" },
          verseRef: "5:21"
        },
        {
          term: "وَلَا تَرْتَدُّوا عَلَىٰ أَدْبَارِكُمْ",
          meaning: { en: "And don't turn back on your heels", ur: "اور پیٹھ پھیر کر نہ لوٹو" },
          explanation: { en: "Warning against cowardice and retreat from divine command", ur: "بزدلی اور الٰہی حکم سے پیچھے ہٹنے کی تنبیہ" },
          verseRef: "5:21"
        },
        {
          term: "إِنَّ فِيهَا قَوْمًا جَبَّارِينَ",
          meaning: { en: "Indeed in it are a tyrannical people", ur: "وہاں زبردست لوگ رہتے ہیں" },
          explanation: { en: "Their excuse: giants/tyrants live there (Amalekites)", ur: "ان کا بہانہ: وہاں طاقتور لوگ رہتے ہیں (عمالقہ)" },
          verseRef: "5:22"
        },
        {
          term: "وَإِنَّا لَن نَّدْخُلَهَا حَتَّىٰ يَخْرُجُوا مِنْهَا",
          meaning: { en: "We will never enter until they leave", ur: "ہم ہرگز نہیں جائیں گے جب تک وہ نہ نکلیں" },
          explanation: { en: "Refusing to fight - waiting for easy victory", ur: "لڑنے سے انکار - آسان فتح کا انتظار" },
          verseRef: "5:22"
        },
        {
          term: "رَجُلَانِ مِنَ الَّذِينَ يَخَافُونَ",
          meaning: { en: "Two men of those who feared (Allah)", ur: "دو آدمیوں نے جو اللہ سے ڈرتے تھے" },
          explanation: { en: "Joshua and Caleb - only two encouraged fighting, fearing Allah not giants", ur: "یوشع اور کالب - صرف دو نے لڑنے کی ترغیب دی، اللہ سے ڈرے نہ طاقتوروں سے" },
          verseRef: "5:23"
        },
        {
          term: "ادْخُلُوا عَلَيْهِمُ الْبَابَ فَإِذَا دَخَلْتُمُوهُ فَإِنَّكُمْ غَالِبُونَ",
          meaning: { en: "Enter upon them through the gate; once you enter, you will prevail", ur: "دروازے سے ان پر جا گھسو، داخل ہوتے ہی غالب ہو گے" },
          explanation: { en: "Faith-based courage: just start, Allah will give victory", ur: "ایمان پر مبنی ہمت: صرف شروع کرو، اللہ فتح دے گا" },
          verseRef: "5:23"
        },
        {
          term: "اذْهَبْ أَنتَ وَرَبُّكَ فَقَاتِلَا إِنَّا هَاهُنَا قَاعِدُونَ",
          meaning: { en: "Go you and your Lord and fight; we are sitting here", ur: "تو اور تیرا رب جا کر لڑو، ہم یہیں بیٹھے ہیں" },
          explanation: { en: "Ultimate disrespect: telling Moses to fight with Allah while they sit!", ur: "انتہائی بے ادبی: موسیٰ سے کہنا کہ تو اور تیرا رب جا کر لڑو، ہم بیٹھے ہیں!" },
          verseRef: "5:24"
        },
        {
          term: "فَإِنَّهَا مُحَرَّمَةٌ عَلَيْهِمْ أَرْبَعِينَ سَنَةً",
          meaning: { en: "It is forbidden to them for forty years", ur: "چالیس سال تک ان پر حرام ہے" },
          explanation: { en: "Punishment: wandering in desert 40 years - that generation won't enter", ur: "سزا: 40 سال صحرا میں سرگردانی - وہ نسل داخل نہ ہوگی" },
          verseRef: "5:26"
        },
        {
          term: "يَتِيهُونَ فِي الْأَرْضِ",
          meaning: { en: "Wandering in the land", ur: "زمین میں سرگرداں رہیں گے" },
          explanation: { en: "Tih - confusion, wandering aimlessly in Sinai desert", ur: "تیہ - سینائی صحرا میں بے مقصد بھٹکنا" },
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
          meaning: { en: "We revealed Torah - in it guidance and light", ur: "ہم نے توریت نازل کی، اس میں ہدایت اور نور" },
          explanation: { en: "Torah was genuine guidance before corruption", ur: "توریت تحریف سے پہلے سچی ہدایت تھی" },
          verseRef: "5:44"
        },
        {
          term: "يَحْكُمُ بِهَا النَّبِيُّونَ الَّذِينَ أَسْلَمُوا",
          meaning: { en: "By which the prophets who submitted judged", ur: "اس سے فیصلہ کرتے تھے نبی جنہوں نے اسلام قبول کیا" },
          explanation: { en: "All prophets were Muslims (submitted to Allah) - judged by Torah", ur: "تمام انبیاء مسلم (اللہ کے فرمانبردار) تھے - توریت سے فیصلہ کرتے تھے" },
          verseRef: "5:44"
        },
        {
          term: "وَالرَّبَّانِيُّونَ وَالْأَحْبَارُ",
          meaning: { en: "And the rabbis and scholars", ur: "اور عالم اور احبار" },
          explanation: { en: "Religious scholars also judged by it - were guardians of scripture", ur: "علماء بھی اسی سے فیصلہ کرتے - کتاب کے نگران تھے" },
          verseRef: "5:44"
        },
        {
          term: "وَقَفَّيْنَا عَلَىٰ آثَارِهِم بِعِيسَى ابْنِ مَرْيَمَ",
          meaning: { en: "We sent following them Jesus son of Mary", ur: "ان کے بعد عیسیٰ ابن مریم کو بھیجا" },
          explanation: { en: "Jesus followed chain of prophets - confirming Torah", ur: "عیسیٰ انبیاء کے سلسلے کی پیروی کرتے رہے - توریت کی تصدیق" },
          verseRef: "5:46"
        },
        {
          term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرَاةِ",
          meaning: { en: "Confirming what was before him of Torah", ur: "اپنے سے پہلے کی توریت کی تصدیق کرنے والا" },
          explanation: { en: "Jesus confirmed Torah - did not abolish it", ur: "عیسیٰ نے توریت کی تصدیق کی - منسوخ نہیں کیا" },
          verseRef: "5:46"
        },
        {
          term: "وَآتَيْنَاهُ الْإِنجِيلَ فِيهِ هُدًى وَنُورٌ",
          meaning: { en: "We gave him Gospel - in it guidance and light", ur: "اسے انجیل دی، اس میں ہدایت اور نور" },
          explanation: { en: "Original Gospel (not current versions) had divine guidance", ur: "اصل انجیل (موجودہ نسخے نہیں) میں الٰہی ہدایت تھی" },
          verseRef: "5:46"
        },
        {
          term: "وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا",
          meaning: { en: "We revealed to you the Book in truth, confirming", ur: "ہم نے تجھ پر کتاب سچائی کے ساتھ اتاری، تصدیق کرنے والی" },
          explanation: { en: "Quran confirms previous scriptures - final word", ur: "قرآن پچھلی کتابوں کی تصدیق کرتا ہے - آخری فیصلہ" },
          verseRef: "5:48"
        },
        {
          term: "وَمُهَيْمِنًا عَلَيْهِ",
          meaning: { en: "And as guardian over them", ur: "اور ان پر نگہبان" },
          explanation: { en: "Muhaymin = protector, guardian, criterion. Quran judges previous scriptures", ur: "مہیمن = محافظ، نگران، معیار۔ قرآن پچھلی کتابوں کا فیصلہ کرتا ہے" },
          verseRef: "5:48"
        }
      ]
    }
  },

  relationships: [
    { from: "أَوْفُوا بِالْعُقُودِ", to: "الْيَوْمَ أَكْمَلْتُ", type: "fulfillment", description: { en: "Opening command fulfilled by religion's completion", ur: "ابتدائی حکم دین کی تکمیل سے پورا ہوا" } },
    { from: "مِيثَاقَ بَنِي إِسْرَائِيلَ", to: "فَنَسُوا حَظًّا", type: "consequence", description: { en: "Breaking covenant led to forgetting guidance", ur: "عہد توڑنے سے ہدایت بھول گئے" } },
    { from: "حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ", to: "إِلَّا مَا ذَكَّيْتُمْ", type: "exception", description: { en: "Prohibition has exception for proper slaughter", ur: "حرمت میں صحیح ذبح کی استثنا ہے" } },
    { from: "قَتَلَ نَفْسًا", to: "قَتَلَ النَّاسَ جَمِيعًا", type: "equivalence", description: { en: "One murder equals universal murder in gravity", ur: "ایک قتل سنگینی میں ساری انسانیت کے قتل کے برابر ہے" } },
    { from: "مَا الْمَسِيحُ إِلَّا رَسُولٌ", to: "كَانَا يَأْكُلَانِ الطَّعَامَ", type: "proof", description: { en: "Eating food proves human nature, not divine", ur: "کھانا کھانا انسانی فطرت ثابت کرتا ہے، الوہیت نہیں" } },
    { from: "اتَّقُوا اللَّهَ", to: "لَأَقْتُلَنَّكَ", type: "contrast", description: { en: "Habil's taqwa vs Qabil's murder threat", ur: "ہابیل کا تقویٰ بمقابلہ قابیل کی قتل کی دھمکی" } },
    { from: "الْمَائِدَةَ مِّنَ السَّمَاءِ", to: "فَمَن يَكْفُرْ بَعْدُ", type: "consequence", description: { en: "Miracle demands greater accountability", ur: "معجزہ زیادہ احتساب کا تقاضا کرتا ہے" } },
    { from: "يُحَارِبُونَ اللَّهَ", to: "تَابُوا مِن قَبْلِ", type: "exception", description: { en: "Even severe crimes forgiven if repent before capture", ur: "سنگین جرائم بھی معاف اگر گرفتاری سے پہلے توبہ" } },
    { from: "أَعْجَزْتُ أَنْ أَكُونَ مِثْلَ الْغُرَابِ", to: "فَأَصْبَحَ مِنَ النَّادِمِينَ", type: "sequence", description: { en: "Learning from crow led to regret", ur: "کوے سے سیکھنے سے پچھتاوا ہوا" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Contracts & Food Laws", verses: "5:1-5", description: { en: "Fulfill contracts, halal/haram animals, ihram hunting rules", ur: "عہد پورے کرو، حلال و حرام جانور، احرام میں شکار کے احکام" } },
      { stage: 2, theme: "Purification Laws", verses: "5:6", description: { en: "Wudu, ghusl, tayammum - ease in religion", ur: "وضو، غسل، تیمم - دین میں آسانی" } },
      { stage: 3, theme: "Justice & Witness", verses: "5:7-11", description: { en: "Be just even with enemies, remember Allah's favor", ur: "دشمنوں سے بھی انصاف، اللہ کی نعمت یاد رکھو" } },
      { stage: 4, theme: "Covenants Broken", verses: "5:12-19", description: { en: "Bani Israel and Christian covenants, Prophet's clarification", ur: "بنی اسرائیل اور عیسائیوں کے عہد، نبی کی وضاحت" } },
      { stage: 5, theme: "Moses & Entry to Land", verses: "5:20-26", description: { en: "Command to enter, refusal, 40-year wandering", ur: "داخلے کا حکم، انکار، 40 سال کی سرگردانی" } },
      { stage: 6, theme: "Cain & Abel", verses: "5:27-32", description: { en: "First murder, sanctity of life established", ur: "پہلا قتل، جان کی حرمت قائم" } },
      { stage: 7, theme: "Punishment for Corruption", verses: "5:33-40", description: { en: "Hirabah penalties, theft punishment, repentance", ur: "حرابہ کی سزائیں، چوری کی سزا، توبہ" } },
      { stage: 8, theme: "Previous Scriptures", verses: "5:41-50", description: { en: "Torah, Gospel, Quran - judging by revelation", ur: "توریت، انجیل، قرآن - وحی سے فیصلہ" } },
      { stage: 9, theme: "Alliance & Loyalty", verses: "5:51-58", description: { en: "Who are true allies, hypocrites exposed", ur: "حقیقی اتحادی کون، منافقین بے نقاب" } },
      { stage: 10, theme: "People of Book Criticized", verses: "5:59-69", description: { en: "Their excesses, call to follow revelation", ur: "ان کی زیادتیاں، وحی کی پیروی کی دعوت" } },
      { stage: 11, theme: "Jesus Clarified", verses: "5:70-77", description: { en: "Trinity rejected, Jesus as messenger only", ur: "تثلیث مسترد، عیسیٰ صرف رسول" } },
      { stage: 12, theme: "Nearest in Affection", verses: "5:78-86", description: { en: "Humble Christians praised", ur: "عاجز عیسائیوں کی تعریف" } },
      { stage: 13, theme: "Prohibitions Detailed", verses: "5:87-108", description: { en: "Wine, gambling, hunting, oaths, wills", ur: "شراب، جوا، شکار، قسمیں، وصیتیں" } },
      { stage: 14, theme: "Jesus's Miracles", verses: "5:109-110", description: { en: "Allah's favors to Jesus listed", ur: "عیسیٰ پر اللہ کی نعمتوں کی فہرست" } },
      { stage: 15, theme: "The Table Story", verses: "5:111-115", description: { en: "Disciples request, table descends", ur: "حواریوں کی درخواست، دسترخوان اترتا ہے" } },
      { stage: 16, theme: "Final Interrogation", verses: "5:116-120", description: { en: "Allah questions Jesus, Jesus responds, conclusion", ur: "اللہ عیسیٰ سے سوال کرتا ہے، عیسیٰ جواب دیتے ہیں، اختتام" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Honor all contracts", ur: "تمام عہدوں کا احترام" }, how: { en: "Business, marriage, promises - fulfill them completely as worship", ur: "تجارت، نکاح، وعدے - عبادت سمجھ کر مکمل پورے کرو" }, verse: "5:1" },
      { principle: { en: "Eat halal carefully", ur: "احتیاط سے حلال کھاؤ" }, how: { en: "Know prohibited categories, ask about slaughter method, when in doubt abstain", ur: "حرام اقسام جانو، ذبح کا طریقہ پوچھو، شک ہو تو پرہیز کرو" }, verse: "5:3" },
      { principle: { en: "Ease in worship", ur: "عبادت میں آسانی" }, how: { en: "Use tayammum when needed, Allah doesn't want hardship", ur: "ضرورت پر تیمم کرو، اللہ مشکل نہیں چاہتا" }, verse: "5:6" },
      { principle: { en: "Justice despite hatred", ur: "نفرت کے باوجود انصاف" }, how: { en: "Be fair even with enemies - 'adl (justice) is nearer to taqwa", ur: "دشمنوں سے بھی منصف - عدل تقویٰ سے قریب ہے" }, verse: "5:8" },
      { principle: { en: "Value every life", ur: "ہر جان کی قدر" }, how: { en: "One life = all humanity. Save lives, don't take them", ur: "ایک جان = ساری انسانیت۔ جانیں بچاؤ، نہ لو" }, verse: "5:32" },
      { principle: { en: "Avoid major sins", ur: "بڑے گناہوں سے بچو" }, how: { en: "Wine, gambling, fortune-telling - complete avoidance, not moderation", ur: "شراب، جوا، فال نکالنا - مکمل پرہیز، اعتدال نہیں" }, verse: "5:90" },
      { principle: { en: "Judge by Quran", ur: "قرآن سے فیصلہ کرو" }, how: { en: "Reference Islamic principles in disputes, don't abandon divine guidance", ur: "تنازعات میں اسلامی اصولوں کا حوالہ دو، الٰہی ہدایت نہ چھوڑو" }, verse: "5:48" },
      { principle: { en: "Respect Jesus correctly", ur: "عیسیٰ کا صحیح احترام" }, how: { en: "Honor as prophet, not divine. He worshipped Allah alone", ur: "نبی کے طور پر عزت، الٰہ نہیں۔ انہوں نے صرف اللہ کی عبادت کی" }, verse: "5:75" },
      { principle: { en: "Repent before it's too late", ur: "بہت دیر سے پہلے توبہ کرو" }, how: { en: "Even major sins forgiven if sincere repentance before being caught", ur: "بڑے گناہ بھی معاف اگر پکڑے جانے سے پہلے سچی توبہ" }, verse: "5:34" },
      { principle: { en: "Choose allies wisely", ur: "اتحادی عقلمندی سے چنو" }, how: { en: "Core loyalty to Allah, Prophet, believers. Others: fair dealing, not protective alliance against Islam", ur: "بنیادی وفاداری اللہ، نبی، مومنوں سے۔ باقیوں سے: منصفانہ معاملات، اسلام کے خلاف اتحاد نہیں" }, verse: "5:55" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Completion", ur: "تکمیل کی سورت" },
    insight: { en: "Al-Ma'idah is uniquely positioned as one of the last surahs revealed, containing the iconic verse 'Today I have perfected your religion' (5:3), spoken on the Day of Arafah during the Farewell Pilgrimage. This gives the surah a sense of finality and comprehensiveness. It opens with 'O you who believe, fulfill your contracts' - and this contractual theme permeates everything: covenants with Allah, with previous nations, social contracts, food laws, even the disciples' request for a divine sign. The story of the Table (Ma'idah) itself represents a covenant: those who receive direct divine miracle bear greater responsibility. The surah also serves as the definitive statement on Christian beliefs about Jesus - addressing trinity, divinity claims, and worship of Mary, while honoring Jesus as a noble prophet. It's as if Allah is settling all accounts before closing this phase of revelation.", ur: "المائدہ آخری نازل ہونے والی سورتوں میں سے ایک ہے، جس میں مشہور آیت 'آج میں نے تمہارا دین مکمل کر دیا' (5:3) ہے، جو وداعی حج میں عرفہ کے دن نازل ہوئی۔ یہ سورت کو تکمیل اور جامعیت کا احساس دیتا ہے۔ 'اے ایمان والو، عہد پورے کرو' سے شروع ہوتی ہے - اور یہ عہد کا موضوع ہر چیز میں سرایت کرتا ہے: اللہ سے عہد، پچھلی قوموں سے، سماجی معاہدے، کھانے کے احکام، حتیٰ کہ حواریوں کی الٰہی نشانی کی درخواست۔ دسترخوان (مائدہ) کا واقعہ خود ایک عہد ہے: جنہیں براہ راست الٰہی معجزہ ملے ان پر زیادہ ذمہ داری ہے۔ سورت عیسیٰ کے بارے میں عیسائی عقائد پر حتمی بیان بھی ہے - تثلیث، الوہیت کے دعوے، اور مریم کی عبادت کو مخاطب کرتی ہے، جبکہ عیسیٰ کو ایک عظیم نبی کے طور پر عزت دیتی ہے۔ گویا اللہ وحی کا یہ مرحلہ بند کرنے سے پہلے تمام حساب چکا رہا ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: { en: "Opening with 'O you who believe'", ur: "اے ایمان والو سے آغاز" }, example: "يَا أَيُّهَا الَّذِينَ آمَنُوا", effect: { en: "Direct address establishing intimate relationship - appears 16+ times", ur: "براہ راست خطاب قائم کرتا ہے - 16+ بار" } },
      { feature: { en: "Paired prohibitions", ur: "جوڑے دار ممانعتیں" }, example: "حُرِّمَتْ... أُحِلَّتْ", effect: { en: "Clear contrast between forbidden and permissible", ur: "حرام اور حلال کے درمیان واضح تقابل" } },
      { feature: { en: "Repetition of 'by My permission'", ur: "'میرے حکم سے' کی تکرار" }, example: "بِإِذْنِي (×5 in v.110)", effect: { en: "Emphasizes Jesus's miracles were Allah's power, not his own", ur: "زور دیتا ہے کہ عیسیٰ کے معجزات اللہ کی طاقت تھے" } },
      { feature: { en: "Rhetorical questions", ur: "بلاغتی سوالات" }, example: "أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ", effect: { en: "Makes listener reflect - who would choose jahiliyyah?", ur: "سننے والے کو سوچنے پر مجبور کرتا ہے" } },
      { feature: { en: "Escalating consequences", ur: "بڑھتے ہوئے نتائج" }, example: "كَافِرُونَ، ظَالِمُونَ، فَاسِقُونَ", effect: { en: "Three verses (44,45,47) with increasing severity of labels", ur: "تین آیات (44، 45، 47) بڑھتی شدت کے القابات کے ساتھ" } }
    ]
  },

  crossReferences: {
    references: [
      { reference: "2:173", topic: { en: "Halal/Haram food", ur: "حلال و حرام کھانا" }, connection: { en: "Earlier list in Al-Baqarah expanded here", ur: "البقرہ کی پہلے کی فہرست یہاں توسیع شدہ" } },
      { reference: "3:45-55", topic: { en: "Jesus's story", ur: "عیسیٰ کا واقعہ" }, connection: { en: "Al-Imran's account complemented with Table story", ur: "آل عمران کا بیان دسترخوان کے واقعے سے مکمل" } },
      { reference: "4:171", topic: { en: "Trinity refutation", ur: "تثلیث کی تردید" }, connection: { en: "An-Nisa begins, Al-Ma'idah completes", ur: "النساء شروع کرتی ہے، المائدہ مکمل کرتی ہے" } },
      { reference: "2:183-187", topic: { en: "Fasting laws", ur: "روزے کے احکام" }, connection: { en: "Similar legislative style for different topic", ur: "مختلف موضوع کے لیے ملتا جلتا قانونی اسلوب" } },
      { reference: "6:145", topic: { en: "Forbidden foods", ur: "حرام کھانے" }, connection: { en: "Consistent list across Quran", ur: "قرآن میں یکساں فہرست" } }
    ]
  }
};

export default ONTOLOGY;
