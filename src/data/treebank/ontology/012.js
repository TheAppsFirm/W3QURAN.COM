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
          meaning: { en: "The Best of Stories", ur: "بہترین قصص" },
          explanation: { en: "Allah calls this 'the best of stories' - perfect in narrative, moral lessons, and structure. No human author could craft such a tale.", ur: "اللہ اسے 'بہترین قصص' کہتا ہے - بیانیہ، اخلاقی سبق اور ساخت میں کامل۔ کوئی انسانی مصنف ایسی کہانی نہیں بنا سکتا۔" },
          verseRef: "12:3"
        },
        {
          term: "رُؤْيَا",
          transliteration: "Ru'ya",
          meaning: { en: "The Prophetic Dream", ur: "نبوی خواب" },
          explanation: { en: "Young Yusuf sees eleven stars, sun, and moon prostrating to him - a prophecy of his future status. True dreams are 1/46th of prophethood.", ur: "چھوٹا یوسف گیارہ ستاروں، سورج اور چاند کو اپنے سامنے سجدہ کرتے دیکھتا ہے - اس کے مستقبل کے مقام کی پیشگوئی۔ سچے خواب نبوت کا چھیالیسواں حصہ ہیں۔" },
          verseRef: "12:4",
          relatedVerses: ["12:100"]
        },
        {
          term: "أَحَدَ عَشَرَ كَوْكَبًا",
          transliteration: "Ahada 'Ashara Kawkaban",
          meaning: { en: "Eleven Stars", ur: "گیارہ ستارے" },
          explanation: { en: "Representing his eleven brothers. Celestial imagery showing their future submission to Yusuf's authority.", ur: "اس کے گیارہ بھائیوں کی نمائندگی۔ آسمانی تصویر کشی جو یوسف کے اختیار کے سامنے ان کی مستقبل کی تابعداری دکھاتی ہے۔" },
          verseRef: "12:4"
        },
        {
          term: "الشَّمْسَ وَالْقَمَرَ",
          transliteration: "Ash-Shams wal-Qamar",
          meaning: { en: "The Sun and Moon", ur: "سورج اور چاند" },
          explanation: { en: "Representing his father Ya'qub and mother (or aunt who raised him). They too would honor him.", ur: "اس کے والد یعقوب اور والدہ (یا خالہ جنہوں نے پالا) کی نمائندگی۔ وہ بھی اسے عزت دیں گے۔" },
          verseRef: "12:4"
        },
        {
          term: "لَا تَقْصُصْ رُؤْيَاكَ",
          transliteration: "La Taqsus Ru'yaka",
          meaning: { en: "Don't narrate your dream", ur: "اپنا خواب مت سناؤ" },
          explanation: { en: "Ya'qub wisely advises concealing the dream from brothers. Lesson: Don't share blessings with potential enviers.", ur: "یعقوب حکمت سے بھائیوں سے خواب چھپانے کی نصیحت کرتے ہیں۔ سبق: نعمتیں حسد کرنے والوں سے نہ بانٹو۔" },
          verseRef: "12:5"
        },
        {
          term: "الشَّيْطَانَ... عَدُوٌّ مُّبِينٌ",
          transliteration: "Ash-Shaytanu 'Aduwwun Mubeen",
          meaning: { en: "Satan is a clear enemy", ur: "شیطان کھلا دشمن ہے" },
          explanation: { en: "Ya'qub explains that Satan incites jealousy between relatives. The brothers' envy was Satanic in origin.", ur: "یعقوب بتاتے ہیں کہ شیطان رشتہ داروں میں حسد بھڑکاتا ہے۔ بھائیوں کا حسد شیطانی تحریک تھی۔" },
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
          meaning: { en: "In Yusuf and his brothers are signs", ur: "یوسف اور ان کے بھائیوں میں نشانیاں ہیں" },
          explanation: { en: "The story is full of 'ayaat' (signs/lessons) - jealousy's destruction, patience's reward, divine planning.", ur: "کہانی 'آیات' (نشانیوں/سبقوں) سے بھری ہے - حسد کی تباہی، صبر کا انعام، الٰہی منصوبہ بندی۔" },
          verseRef: "12:7"
        },
        {
          term: "أَحَبُّ إِلَىٰ أَبِينَا",
          transliteration: "Ahabbu ila Abeena",
          meaning: { en: "More beloved to our father", ur: "ہمارے باپ کو ہم سے زیادہ پیارے" },
          explanation: { en: "The brothers' jealousy stemmed from perceived favoritism. Parental equity is crucial to prevent sibling rivalry.", ur: "بھائیوں کا حسد سمجھی ہوئی جانبداری سے تھا۔ بھائیوں کی رقابت روکنے کے لیے والدین کا مساوی سلوک ضروری ہے۔" },
          verseRef: "12:8"
        },
        {
          term: "اقْتُلُوا يُوسُفَ أَوِ اطْرَحُوهُ أَرْضًا",
          transliteration: "Uqtulu Yusufa aw Itrahoohu Ardan",
          meaning: { en: "Kill Yusuf or cast him away", ur: "یوسف کو قتل کر دو یا کسی زمین میں پھینک دو" },
          explanation: { en: "Extreme response to jealousy - plotting murder of their own brother. Sin escalates when unchecked.", ur: "حسد کا انتہائی ردعمل - اپنے ہی بھائی کے قتل کی سازش۔ گناہ بے لگام ہو تو بڑھتا جاتا ہے۔" },
          verseRef: "12:9"
        },
        {
          term: "غَيَابَتِ الْجُبِّ",
          transliteration: "Ghayabat al-Jubb",
          meaning: { en: "Depths of the well", ur: "کنویں کی تاریکی" },
          explanation: { en: "One brother suggests the well instead of murder. A caravan would take him far away. Even in evil, some restraint.", ur: "ایک بھائی نے قتل کی بجائے کنواں تجویز کیا۔ قافلہ اسے دور لے جائے گا۔ بُرائی میں بھی کسی کو کچھ روک تھی۔" },
          verseRef: "12:10"
        },
        {
          term: "وَأَوْحَيْنَا إِلَيْهِ",
          transliteration: "Wa Awhayna Ilayhi",
          meaning: { en: "We revealed to him", ur: "ہم نے اس کی طرف وحی کی" },
          explanation: { en: "Allah comforts young Yusuf in the dark well with revelation: 'You will inform them of this deed.' Divine support in darkest moments.", ur: "اللہ تاریک کنویں میں چھوٹے یوسف کو وحی سے تسلی دیتا ہے: 'تم انہیں اس کام کی خبر دو گے۔' تاریک ترین لمحات میں الٰہی مدد۔" },
          verseRef: "12:15"
        },
        {
          term: "بِدَمٍ كَذِبٍ",
          transliteration: "Bi-Damin Kadhibin",
          meaning: { en: "With false blood", ur: "جھوٹے خون کے ساتھ" },
          explanation: { en: "They stained Yusuf's shirt with animal blood as 'proof' of wolf attack. But Ya'qub saw through the lie.", ur: "انہوں نے یوسف کی قمیض پر جانور کا خون لگایا بھیڑیے کے حملے کے 'ثبوت' کے طور پر۔ لیکن یعقوب نے جھوٹ پہچان لیا۔" },
          verseRef: "12:18"
        },
        {
          term: "صَبْرٌ جَمِيلٌ",
          transliteration: "Sabrun Jameel",
          meaning: { en: "Beautiful Patience", ur: "صبرِ جمیل" },
          explanation: { en: "Ya'qub's response: 'Beautiful patience is most fitting.' Patience without complaint, trusting Allah completely.", ur: "یعقوب کا جواب: 'صبرِ جمیل ہی بہتر ہے۔' شکایت کے بغیر صبر، اللہ پر مکمل بھروسہ۔" },
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
          meaning: { en: "A traveling caravan", ur: "ایک مسافر قافلہ" },
          explanation: { en: "A caravan discovered Yusuf in the well. What seemed like disaster was Allah's plan to elevate him.", ur: "ایک قافلے نے کنویں میں یوسف کو دریافت کیا۔ جو تباہی لگ رہی تھی وہ اللہ کا اسے بلند کرنے کا منصوبہ تھا۔" },
          verseRef: "12:19"
        },
        {
          term: "يَا بُشْرَىٰ",
          transliteration: "Ya Bushra",
          meaning: { en: "Good news!", ur: "خوشخبری!" },
          explanation: { en: "The water-drawer exclaimed with joy at finding a boy. Irony: They saw monetary value; Allah planned prophethood.", ur: "پانی نکالنے والے نے لڑکا پا کر خوشی سے پکارا۔ ستم ظریفی: انہوں نے مالی قدر دیکھی؛ اللہ نے نبوت کا منصوبہ بنایا تھا۔" },
          verseRef: "12:19"
        },
        {
          term: "بِثَمَنٍ بَخْسٍ دَرَاهِمَ مَعْدُودَةٍ",
          transliteration: "Bi-Thamanin Bakhsin Darahima Ma'doodah",
          meaning: { en: "For a cheap price, few coins", ur: "معمولی قیمت، گنتی کے چند درہم" },
          explanation: { en: "A future prophet sold for mere dirhams. Human valuations are nothing compared to divine worth.", ur: "ایک مستقبل کے نبی چند درہموں میں بکے۔ انسانی قدر الٰہی قدر کے سامنے کچھ نہیں۔" },
          verseRef: "12:20"
        },
        {
          term: "الْعَزِيزِ",
          transliteration: "Al-'Aziz",
          meaning: { en: "The Minister/Noble", ur: "عزیزِ مصر" },
          explanation: { en: "High official of Egypt who bought Yusuf. Title means 'mighty/dear.' He sensed Yusuf's special nature.", ur: "مصر کے بلند مرتبہ عہدیدار جنہوں نے یوسف کو خریدا۔ لقب کا مطلب 'عزت والا'۔ انہوں نے یوسف کی خاص فطرت محسوس کی۔" },
          verseRef: "12:21"
        },
        {
          term: "أَكْرِمِي مَثْوَاهُ",
          transliteration: "Akrimee Mathwaahu",
          meaning: { en: "Honor his stay", ur: "اس کی رہائش کو عزت دو" },
          explanation: { en: "The Aziz instructed his wife to treat Yusuf well. Little did he know what trials this would bring.", ur: "عزیز نے اپنی بیوی کو یوسف کے ساتھ اچھا سلوک کرنے کی ہدایت کی۔ اسے کیا معلوم تھا کہ اس سے کیا آزمائشیں آئیں گی۔" },
          verseRef: "12:21"
        },
        {
          term: "مَكَّنَّا لِيُوسُفَ فِي الْأَرْضِ",
          transliteration: "Makkanna li-Yusufa fil-Ard",
          meaning: { en: "We established Yusuf in the land", ur: "ہم نے یوسف کو زمین میں اختیار دیا" },
          explanation: { en: "Allah was positioning Yusuf for greatness. Every hardship was a stepping stone to authority.", ur: "اللہ یوسف کو عظمت کے لیے تیار کر رہا تھا۔ ہر مشقت اقتدار کی طرف ایک سیڑھی تھی۔" },
          verseRef: "12:21"
        },
        {
          term: "تَأْوِيلِ الْأَحَادِيثِ",
          transliteration: "Ta'weel al-Ahaadeeth",
          meaning: { en: "Interpretation of dreams/events", ur: "خوابوں/واقعات کی تعبیر" },
          explanation: { en: "Allah taught Yusuf dream interpretation - a gift that would later save nations from famine.", ur: "اللہ نے یوسف کو خوابوں کی تعبیر سکھائی - ایک تحفہ جو بعد میں قوموں کو قحط سے بچائے گا۔" },
          verseRef: "12:21"
        },
        {
          term: "آتَيْنَاهُ حُكْمًا وَعِلْمًا",
          transliteration: "Aataynahu Hukman wa 'Ilman",
          meaning: { en: "We gave him wisdom and knowledge", ur: "ہم نے اسے حکمت اور علم عطا کیا" },
          explanation: { en: "At maturity, Yusuf received divine wisdom. Reward for the patient and righteous (muhsineen).", ur: "بلوغت پر یوسف کو الٰہی حکمت ملی۔ صابرین اور نیکوکاروں (محسنین) کا انعام۔" },
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
          meaning: { en: "She sought to seduce him", ur: "اس نے اسے بہکانے کی کوشش کی" },
          explanation: { en: "The Aziz's wife (tradition names her Zulaykha) tried to seduce Yusuf. Test of beauty, power, and opportunity.", ur: "عزیز کی بیوی (روایت میں زلیخا) نے یوسف کو بہکانے کی کوشش کی۔ حسن، طاقت اور موقع کی آزمائش۔" },
          verseRef: "12:23"
        },
        {
          term: "غَلَّقَتِ الْأَبْوَابَ",
          transliteration: "Ghallaqat al-Abwaab",
          meaning: { en: "She locked the doors", ur: "اس نے دروازے بند کر دیے" },
          explanation: { en: "Multiple doors locked - Arabic intensive form shows complete privacy and planning. No escape route.", ur: "کئی دروازے بند - عربی کا تاکیدی صیغہ مکمل رازداری اور منصوبہ بندی ظاہر کرتا ہے۔ فرار کا کوئی راستہ نہیں۔" },
          verseRef: "12:23"
        },
        {
          term: "هَيْتَ لَكَ",
          transliteration: "Hayta Laka",
          meaning: { en: "Come to me", ur: "میرے پاس آؤ" },
          explanation: { en: "Direct, shameless invitation. She had status, beauty, privacy, persistence. Yet Yusuf resisted.", ur: "براہ راست، بے شرم دعوت۔ اس کے پاس مقام، حسن، تنہائی، اصرار تھا۔ پھر بھی یوسف نے مزاحمت کی۔" },
          verseRef: "12:23"
        },
        {
          term: "مَعَاذَ اللَّهِ",
          transliteration: "Ma'adh-Allah",
          meaning: { en: "I seek refuge in Allah!", ur: "میں اللہ کی پناہ مانگتا ہوں!" },
          explanation: { en: "Yusuf's immediate response - fleeing to Allah, not debating or rationalizing. Model of chastity.", ur: "یوسف کا فوری جواب - اللہ کی طرف بھاگنا، نہ بحث نہ عذر۔ عفت کا نمونہ۔" },
          verseRef: "12:23",
          keyPhrase: true
        },
        {
          term: "إِنَّهُ رَبِّي أَحْسَنَ مَثْوَايَ",
          transliteration: "Innahu Rabbee Ahsana Mathwaaya",
          meaning: { en: "He (the Aziz/Allah) has been good to me", ur: "اس (عزیز/اللہ) نے میرے ساتھ اچھا سلوک کیا ہے" },
          explanation: { en: "Two meanings: The master treated me well (I won't betray him). Allah blessed me (I won't disobey Him).", ur: "دو مطلب: آقا نے میرے ساتھ اچھا کیا (میں خیانت نہیں کروں گا)۔ اللہ نے مجھ پر احسان کیا (میں نافرمانی نہیں کروں گا)۔" },
          verseRef: "12:23"
        },
        {
          term: "لَقَدْ هَمَّتْ بِهِ ۖ وَهَمَّ بِهَا",
          transliteration: "Laqad Hammat bihi wa Hamma biha",
          meaning: { en: "She intended him, and he would have inclined", ur: "اس عورت نے ارادہ کیا اور وہ بھی مائل ہوتا" },
          explanation: { en: "She fully intended sin. Yusuf's 'intention' was human nature's pull - but he resisted upon seeing Allah's sign.", ur: "اس نے پوری طرح گناہ کا ارادہ کیا۔ یوسف کا 'ارادہ' انسانی فطرت کی کشش تھی - لیکن اللہ کی نشانی دیکھ کر رُک گئے۔" },
          verseRef: "12:24"
        },
        {
          term: "بُرْهَانَ رَبِّهِ",
          transliteration: "Burhana Rabbihi",
          meaning: { en: "The proof from his Lord", ur: "اپنے رب کی برہان" },
          explanation: { en: "Allah showed Yusuf a 'burhan' (proof/sign) that stopped him. Divine intervention for the sincere.", ur: "اللہ نے یوسف کو 'برہان' (دلیل/نشانی) دکھائی جس نے روکا۔ مخلصین کے لیے الٰہی مداخلت۔" },
          verseRef: "12:24"
        },
        {
          term: "لِنَصْرِفَ عَنْهُ السُّوءَ وَالْفَحْشَاءَ",
          transliteration: "Li-Nasrifa 'anhus-Soo'a wal-Fahshaa",
          meaning: { en: "To turn away evil and immorality from him", ur: "اس سے بُرائی اور بے حیائی کو دور کرنے کے لیے" },
          explanation: { en: "Allah protected Yusuf because he was 'mukhlaseen' (sincere). Sincerity earns divine protection.", ur: "اللہ نے یوسف کی حفاظت کی کیونکہ وہ 'مخلصین' میں سے تھے۔ اخلاص الٰہی حفاظت کا باعث ہے۔" },
          verseRef: "12:24"
        },
        {
          term: "وَاسْتَبَقَا الْبَابَ",
          transliteration: "Wastabaq-al-Baab",
          meaning: { en: "They raced to the door", ur: "دونوں دروازے کی طرف دوڑے" },
          explanation: { en: "He fled, she chased. Physical escape from sin - running away is wisdom, not cowardice.", ur: "وہ بھاگا، اس نے تعاقب کیا۔ گناہ سے جسمانی فرار - بھاگنا حکمت ہے، بزدلی نہیں۔" },
          verseRef: "12:25"
        },
        {
          term: "قَدَّتْ قَمِيصَهُ مِن دُبُرٍ",
          transliteration: "Qaddat Qameesahu min Duburin",
          meaning: { en: "She tore his shirt from behind", ur: "اس نے اس کی قمیض پیچھے سے پھاڑ دی" },
          explanation: { en: "The shirt became evidence: torn from BEHIND proves he was fleeing, not attacking. Allah provides witnesses.", ur: "قمیض ثبوت بن گئی: پیچھے سے پھٹنا ثابت کرتا ہے کہ وہ بھاگ رہا تھا، حملہ نہیں کر رہا۔ اللہ گواہ مہیا کرتا ہے۔" },
          verseRef: "12:25"
        },
        {
          term: "شَاهِدٌ مِّنْ أَهْلِهَا",
          transliteration: "Shahidun min Ahliha",
          meaning: { en: "A witness from her family", ur: "اس کے خاندان میں سے ایک گواہ" },
          explanation: { en: "Her own relative testified using the shirt logic. Truth emerges from unexpected sources.", ur: "اس کے اپنے رشتہ دار نے قمیض کی منطق سے گواہی دی۔ سچائی غیر متوقع ذرائع سے نکلتی ہے۔" },
          verseRef: "12:26"
        },
        {
          term: "إِنَّ كَيْدَكُنَّ عَظِيمٌ",
          transliteration: "Inna Kaydakunna 'Adheem",
          meaning: { en: "Indeed, women's plotting is great", ur: "بے شک عورتوں کی چال بڑی ہے" },
          explanation: { en: "The Aziz's statement about deceptive schemes. Note: This refers to specific women's actions, not all women.", ur: "عزیز کا فریبی چالوں کے بارے میں بیان۔ نوٹ: یہ مخصوص عورتوں کے اعمال کی طرف اشارہ ہے، تمام عورتوں کی طرف نہیں۔" },
          verseRef: "12:28"
        },
        {
          term: "قَطَّعْنَ أَيْدِيَهُنَّ",
          transliteration: "Qatta'na Aydiyahunna",
          meaning: { en: "They cut their hands", ur: "انہوں نے اپنے ہاتھ کاٹ لیے" },
          explanation: { en: "When Yusuf entered, the noblewomen were so stunned by his beauty they cut themselves unknowingly.", ur: "جب یوسف داخل ہوا، شریف عورتیں اس کے حسن سے اتنی حیران ہوئیں کہ بے خبری میں اپنے ہاتھ کاٹ لیے۔" },
          verseRef: "12:31"
        },
        {
          term: "مَا هَٰذَا بَشَرًا",
          transliteration: "Ma Hadha Basharan",
          meaning: { en: "This is no human!", ur: "یہ کوئی انسان نہیں!" },
          explanation: { en: "The women declared Yusuf looked like an angel. His beauty was proverbial in all traditions.", ur: "عورتوں نے اعلان کیا کہ یوسف فرشتے جیسا لگتا ہے۔ اس کا حسن تمام روایات میں ضرب المثل تھا۔" },
          verseRef: "12:31"
        },
        {
          term: "السِّجْنُ أَحَبُّ إِلَيَّ",
          transliteration: "As-Sijnu Ahabbu Ilayya",
          meaning: { en: "Prison is more beloved to me", ur: "مجھے قید زیادہ پسند ہے" },
          explanation: { en: "Yusuf CHOSE prison over sin. Preferring hardship for faith over comfort in disobedience.", ur: "یوسف نے گناہ پر قید کو ترجیح دی۔ نافرمانی میں آرام پر ایمان کے لیے مشقت کو ترجیح دی۔" },
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
          meaning: { en: "Two young men", ur: "دو نوجوان" },
          explanation: { en: "Two servants of the king imprisoned with Yusuf - a cupbearer and a baker. Both had dreams.", ur: "بادشاہ کے دو خدمت گار یوسف کے ساتھ قید تھے - ساقی اور نانبائی۔ دونوں نے خواب دیکھے۔" },
          verseRef: "12:36"
        },
        {
          term: "أَرَانِي أَعْصِرُ خَمْرًا",
          transliteration: "Araanee A'siru Khamran",
          meaning: { en: "I saw myself pressing wine", ur: "میں نے دیکھا کہ میں شراب نچوڑ رہا ہوں" },
          explanation: { en: "The cupbearer's dream - he would return to serving the king. Good news interpreted correctly.", ur: "ساقی کا خواب - وہ بادشاہ کی خدمت میں واپس آئے گا۔ خوشخبری درست تعبیر۔" },
          verseRef: "12:36"
        },
        {
          term: "أَرَانِي أَحْمِلُ فَوْقَ رَأْسِي خُبْزًا",
          transliteration: "Araanee Ahmilu Fawqa Ra'see Khubzan",
          meaning: { en: "I saw myself carrying bread on my head", ur: "میں نے دیکھا کہ میں اپنے سر پر روٹی اٹھائے ہوں" },
          explanation: { en: "The baker's dream - birds eating from bread on his head meant his execution. Hard truth delivered kindly.", ur: "نانبائی کا خواب - پرندے اس کے سر سے روٹی کھا رہے ہیں یعنی اسے سولی دی جائے گی۔ سخت سچائی نرمی سے بیان۔" },
          verseRef: "12:36"
        },
        {
          term: "ذَٰلِكُمَا مِمَّا عَلَّمَنِي رَبِّي",
          transliteration: "Dhalikuma mimma 'Allamanee Rabbee",
          meaning: { en: "That is from what my Lord taught me", ur: "یہ اس علم سے ہے جو میرے رب نے مجھے سکھایا" },
          explanation: { en: "Yusuf attributes his gift to Allah, using the opportunity for da'wah (calling to faith).", ur: "یوسف اپنی صلاحیت اللہ کی طرف منسوب کرتا ہے اور دعوت (ایمان کی طرف بلانے) کا موقع استعمال کرتا ہے۔" },
          verseRef: "12:37"
        },
        {
          term: "أَأَرْبَابٌ مُّتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ",
          transliteration: "A-Arbaabun Mutafarriqoona Khayrun am-Illah",
          meaning: { en: "Are many lords better or Allah alone?", ur: "کیا بہت سے رب بہتر ہیں یا ایک اللہ؟" },
          explanation: { en: "Yusuf's powerful da'wah question - logical argument for Tawheed even in prison.", ur: "یوسف کا طاقتور دعوتی سوال - قید میں بھی توحید کی منطقی دلیل۔" },
          verseRef: "12:39"
        },
        {
          term: "مَا تَعْبُدُونَ مِن دُونِهِ إِلَّا أَسْمَاءً",
          transliteration: "Ma Ta'budoona min doonihi illa Asmaa'an",
          meaning: { en: "You worship nothing besides names", ur: "تم اس کے سوا محض ناموں کی عبادت کرتے ہو" },
          explanation: { en: "Idols are just names with no reality. Powerful critique of polytheism from prison.", ur: "بت محض نام ہیں جن کی کوئی حقیقت نہیں۔ قید سے شرک کی طاقتور تنقید۔" },
          verseRef: "12:40"
        },
        {
          term: "اذْكُرْنِي عِندَ رَبِّكَ",
          transliteration: "Udhkurnee 'inda Rabbika",
          meaning: { en: "Mention me to your master", ur: "اپنے آقا کے پاس میرا ذکر کرنا" },
          explanation: { en: "Yusuf asked the cupbearer to mention him to the king. Using means while trusting Allah.", ur: "یوسف نے ساقی سے کہا بادشاہ کے پاس اس کا ذکر کرنا۔ اللہ پر بھروسہ کے ساتھ اسباب اختیار کرنا۔" },
          verseRef: "12:42"
        },
        {
          term: "فَأَنسَاهُ الشَّيْطَانُ ذِكْرَ رَبِّهِ",
          transliteration: "Fa-ansaahu-sh-Shaytanu Dhikra Rabbihi",
          meaning: { en: "Satan made him forget mentioning his Lord", ur: "شیطان نے اسے اپنے رب کا ذکر بھلا دیا" },
          explanation: { en: "The cupbearer forgot for years. Some say Yusuf's reliance on human help prolonged his imprisonment.", ur: "ساقی سالوں تک بھول گیا۔ بعض کہتے ہیں یوسف کا انسانی مدد پر بھروسہ قید لمبی ہونے کا سبب بنا۔" },
          verseRef: "12:42"
        },
        {
          term: "فَلَبِثَ فِي السِّجْنِ بِضْعَ سِنِينَ",
          transliteration: "Fa-labitha fis-Sijni Bid'a Sineen",
          meaning: { en: "So he remained in prison several years", ur: "پھر وہ کئی سال قید میں رہا" },
          explanation: { en: "Bid'a = 3-9 years. Long imprisonment, but it was preparation for greater responsibility.", ur: "بضع = 3-9 سال۔ طویل قید، لیکن یہ بڑی ذمہ داری کی تیاری تھی۔" },
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
          meaning: { en: "Seven fat cows", ur: "سات موٹی گائیں" },
          explanation: { en: "The king's dream: 7 fat cows eaten by 7 lean, 7 green ears and 7 dry. Advisors couldn't interpret.", ur: "بادشاہ کا خواب: 7 موٹی گائیوں کو 7 دبلی کھا گئیں، 7 سبز بالیاں اور 7 خشک۔ مشیر تعبیر نہ کر سکے۔" },
          verseRef: "12:43"
        },
        {
          term: "أَضْغَاثُ أَحْلَامٍ",
          transliteration: "Adghathu Ahlaam",
          meaning: { en: "Confused dreams", ur: "پراگندہ خواب" },
          explanation: { en: "Court advisors dismissed it as meaningless. Their incompetence would lead to Yusuf's release.", ur: "دربار کے مشیروں نے اسے بے معنی قرار دیا۔ ان کی نااہلی یوسف کی رہائی کا سبب بنے گی۔" },
          verseRef: "12:44"
        },
        {
          term: "تَزْرَعُونَ سَبْعَ سِنِينَ دَأَبًا",
          transliteration: "Tazra'oona Sab'a Sineena Da'aban",
          meaning: { en: "You will plant for seven years continuously", ur: "تم سات سال مسلسل کاشت کرو گے" },
          explanation: { en: "Yusuf interpreted: 7 years of abundance, then 7 of famine. Store grain in ears to preserve it.", ur: "یوسف نے تعبیر بتائی: 7 سال فراوانی، پھر 7 سال قحط۔ غلہ بالیوں سمیت محفوظ رکھو۔" },
          verseRef: "12:47"
        },
        {
          term: "ثُمَّ يَأْتِي عَامٌ فِيهِ يُغَاثُ النَّاسُ",
          transliteration: "Thumma Ya'tee 'Aamun feehi Yughathu-n-Naas",
          meaning: { en: "Then a year when people will have rain", ur: "پھر ایک سال آئے گا جس میں لوگوں کو بارش ملے گی" },
          explanation: { en: "Yusuf added information NOT in the dream - a 15th year of relief. Prophetic knowledge.", ur: "یوسف نے خواب میں نہ ہونے والی معلومات شامل کیں - پندرھواں سال سکون کا۔ نبوی علم۔" },
          verseRef: "12:49"
        },
        {
          term: "ارْجِعْ إِلَىٰ رَبِّكَ",
          transliteration: "Irji' ila Rabbika",
          meaning: { en: "Return to your master", ur: "اپنے آقا کے پاس واپس جاؤ" },
          explanation: { en: "When summoned, Yusuf refused to leave prison until his innocence was proven. Dignity over freedom.", ur: "جب بلایا گیا، یوسف نے بے گناہی ثابت ہونے تک قید سے نکلنے سے انکار کیا۔ آزادی سے زیادہ عزت۔" },
          verseRef: "12:50",
          keyPhrase: true
        },
        {
          term: "مَا خَطْبُكُنَّ إِذْ رَاوَدتُّنَّ يُوسُفَ",
          transliteration: "Ma Khatbukunna idh Rawadtunna Yusuf",
          meaning: { en: "What was your affair when you sought Yusuf?", ur: "تمہارا کیا معاملہ تھا جب تم نے یوسف کو پھسلانا چاہا؟" },
          explanation: { en: "The king investigated. The women confessed: 'We know no evil of him.' Public exoneration.", ur: "بادشاہ نے تحقیق کی۔ عورتوں نے اعتراف کیا: 'ہم اس میں کوئی بُرائی نہیں جانتیں۔' عوامی بریت۔" },
          verseRef: "12:51"
        },
        {
          term: "الْآنَ حَصْحَصَ الْحَقُّ",
          transliteration: "Al-Aana Hashasa-l-Haqq",
          meaning: { en: "Now the truth has become clear", ur: "اب سچائی واضح ہو گئی" },
          explanation: { en: "Zulaykha finally confessed: 'I sought to seduce him, he was truthful.' Complete vindication.", ur: "زلیخا نے آخرکار اعتراف کیا: 'میں نے اسے پھسلانے کی کوشش کی، وہ سچا تھا۔' مکمل بریت۔" },
          verseRef: "12:51"
        },
        {
          term: "اجْعَلْنِي عَلَىٰ خَزَائِنِ الْأَرْضِ",
          transliteration: "Ij'alnee 'ala Khazaa'in-il-Ard",
          meaning: { en: "Put me in charge of the storehouses", ur: "مجھے ملک کے خزانوں پر مقرر کر دو" },
          explanation: { en: "Yusuf requested authority over Egypt's resources. Self-recommendation when qualified is permissible.", ur: "یوسف نے مصر کے وسائل پر اختیار کی درخواست کی۔ اہل ہونے پر خود کو پیش کرنا جائز ہے۔" },
          verseRef: "12:55"
        },
        {
          term: "إِنِّي حَفِيظٌ عَلِيمٌ",
          transliteration: "Innee Hafeethun 'Aleem",
          meaning: { en: "I am a knowing guardian", ur: "میں حفاظت کرنے والا، جاننے والا ہوں" },
          explanation: { en: "Yusuf's credentials: trustworthy (hafeeth) and knowledgeable ('aleem). Leadership qualities.", ur: "یوسف کی اہلیت: امانت دار (حفیظ) اور باعلم (علیم)۔ قائدانہ صفات۔" },
          verseRef: "12:55"
        },
        {
          term: "مَكَّنَّا لِيُوسُفَ فِي الْأَرْضِ",
          transliteration: "Makkanna li-Yusufa fil-Ard",
          meaning: { en: "We established Yusuf in the land", ur: "ہم نے یوسف کو زمین میں اختیار دیا" },
          explanation: { en: "From slave to vizier. Allah's plan unfolds - patient trust leads to authority and honor.", ur: "غلام سے وزیر تک۔ اللہ کا منصوبہ سامنے آتا ہے - صبر اور بھروسہ اقتدار اور عزت کی طرف لے جاتا ہے۔" },
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
          meaning: { en: "They entered upon him and he recognized them", ur: "وہ اس کے پاس آئے اور اس نے انہیں پہچان لیا" },
          explanation: { en: "The brothers came for grain during famine. Yusuf recognized them; they didn't recognize him.", ur: "بھائی قحط میں غلہ لینے آئے۔ یوسف نے انہیں پہچان لیا؛ انہوں نے نہیں پہچانا۔" },
          verseRef: "12:58"
        },
        {
          term: "ائْتُونِي بِأَخٍ لَّكُم مِّنْ أَبِيكُمْ",
          transliteration: "I'toonee bi-Akhin lakum min Abeekum",
          meaning: { en: "Bring me your brother from your father", ur: "اپنے باپ کی طرف سے اپنا بھائی میرے پاس لاؤ" },
          explanation: { en: "Yusuf demanded they bring Binyamin (Benjamin), his full brother. Testing and strategizing.", ur: "یوسف نے مطالبہ کیا کہ بنیامین (اپنا سگا بھائی) لائیں۔ آزمائش اور حکمت عملی۔" },
          verseRef: "12:59"
        },
        {
          term: "جَعَلَ بِضَاعَتَهُمْ فِي رِحَالِهِمْ",
          transliteration: "Ja'ala Bidaa'atahum fee Rihaalihim",
          meaning: { en: "He put their merchandise in their bags", ur: "اس نے ان کا سامان ان کے تھیلوں میں رکھ دیا" },
          explanation: { en: "Yusuf secretly returned their payment. Generosity despite their past betrayal.", ur: "یوسف نے خفیہ طور پر ان کی قیمت واپس کر دی۔ ان کی پرانی دھوکا دہی کے باوجود سخاوت۔" },
          verseRef: "12:62"
        },
        {
          term: "هَلْ آمَنُكُمْ عَلَيْهِ إِلَّا كَمَا أَمِنتُكُمْ عَلَىٰ أَخِيهِ",
          transliteration: "Hal Aamanukum 'alayhi illa kama Amintukum 'ala Akheehi",
          meaning: { en: "Shall I trust you with him as I trusted you with his brother?", ur: "کیا میں اس کے بارے میں تم پر اعتماد کروں جیسے اس کے بھائی پر کیا تھا؟" },
          explanation: { en: "Ya'qub reminded them of their betrayal with Yusuf. Trust once broken is hard to restore.", ur: "یعقوب نے انہیں یوسف کے ساتھ دھوکے کی یاد دلائی۔ ایک بار ٹوٹا اعتماد بحال ہونا مشکل ہے۔" },
          verseRef: "12:64"
        },
        {
          term: "فَاللَّهُ خَيْرٌ حَافِظًا",
          transliteration: "Fa-Allahu Khayrun Haafidhan",
          meaning: { en: "Allah is the best Guardian", ur: "اللہ سب سے بہتر حفاظت کرنے والا ہے" },
          explanation: { en: "Ya'qub ultimately trusted Allah, not his sons. True tawakkul.", ur: "یعقوب نے آخرکار بیٹوں پر نہیں اللہ پر بھروسہ کیا۔ حقیقی توکل۔" },
          verseRef: "12:64"
        },
        {
          term: "لَا تَدْخُلُوا مِن بَابٍ وَاحِدٍ",
          transliteration: "La Tadkhuloo min Baabin Waahidin",
          meaning: { en: "Don't enter from one gate", ur: "ایک دروازے سے داخل نہ ہونا" },
          explanation: { en: "Ya'qub advised separate entries to avoid attracting evil eye. Practical precaution while trusting Allah.", ur: "یعقوب نے نظر بد سے بچنے کے لیے الگ الگ داخل ہونے کی نصیحت کی۔ اللہ پر بھروسے کے ساتھ عملی احتیاط۔" },
          verseRef: "12:67"
        },
        {
          term: "جَعَلَ السِّقَايَةَ فِي رَحْلِ أَخِيهِ",
          transliteration: "Ja'alas-Siqaayata fee Rahli Akheehi",
          meaning: { en: "He placed the measuring cup in his brother's bag", ur: "اس نے پیالہ اپنے بھائی کے سامان میں رکھ دیا" },
          explanation: { en: "Yusuf's strategy to keep Binyamin. The cup was 'found' - brothers accused of theft.", ur: "بنیامین کو رکھنے کی یوسف کی حکمت عملی۔ پیالہ 'مل گیا' - بھائیوں پر چوری کا الزام۔" },
          verseRef: "12:70"
        },
        {
          term: "قَالُوا جَزَاؤُهُ مَن وُجِدَ فِي رَحْلِهِ",
          transliteration: "Qaaloo Jazaa'uhu man Wujida fee Rahlihi",
          meaning: { en: "They said: The penalty is the one in whose bag it's found", ur: "انہوں نے کہا: سزا یہ ہے کہ جس کے سامان میں نکلے" },
          explanation: { en: "By their own law (Canaanite), the 'thief' became a servant. They condemned Binyamin unknowingly.", ur: "ان کے اپنے قانون (کنعانی) کے مطابق 'چور' خدمت گار بنتا ہے۔ انہوں نے بے خبری میں بنیامین کو محکوم کیا۔" },
          verseRef: "12:75"
        },
        {
          term: "إِن يَسْرِقْ فَقَدْ سَرَقَ أَخٌ لَّهُ مِن قَبْلُ",
          transliteration: "In Yasriq faqad Saraqa Akhun lahu min Qabl",
          meaning: { en: "If he steals, a brother of his stole before", ur: "اگر اس نے چوری کی تو اس سے پہلے اس کے ایک بھائی نے بھی چوری کی تھی" },
          explanation: { en: "Brothers slandered Yusuf! He kept his pain hidden: 'You are worse in position.'", ur: "بھائیوں نے یوسف کی تہمت لگائی! اس نے درد چھپا لیا: 'تمہارا درجہ بدتر ہے۔'" },
          verseRef: "12:77"
        },
        {
          term: "فَأَسَرَّهَا يُوسُفُ فِي نَفْسِهِ",
          transliteration: "Fa-asarraha Yusufu fee Nafsihi",
          meaning: { en: "Yusuf concealed it within himself", ur: "یوسف نے اسے اپنے دل میں چھپا لیا" },
          explanation: { en: "Yusuf didn't reveal his identity or anger. Self-control in the face of injustice.", ur: "یوسف نے نہ شناخت ظاہر کی نہ غصہ۔ ظلم کے سامنے ضبطِ نفس۔" },
          verseRef: "12:77"
        },
        {
          term: "يَا أَسَفَىٰ عَلَىٰ يُوسُفَ",
          transliteration: "Ya Asafa 'ala Yusuf",
          meaning: { en: "Alas, my grief for Yusuf!", ur: "ہائے یوسف پر میرا غم!" },
          explanation: { en: "Ya'qub's cry when Binyamin was detained. His grief for Yusuf never diminished.", ur: "بنیامین کی گرفتاری پر یعقوب کا فریاد۔ یوسف کا غم کبھی کم نہیں ہوا۔" },
          verseRef: "12:84"
        },
        {
          term: "وَابْيَضَّتْ عَيْنَاهُ مِنَ الْحُزْنِ",
          transliteration: "Wa-abyaddat 'Aynaahu min-al-Huzn",
          meaning: { en: "His eyes turned white from grief", ur: "غم سے اس کی آنکھیں سفید ہو گئیں" },
          explanation: { en: "Ya'qub went blind from crying. Intense, prolonged grief for his beloved son.", ur: "یعقوب رونے سے اندھے ہو گئے۔ اپنے پیارے بیٹے کے لیے شدید، طویل غم۔" },
          verseRef: "12:84"
        },
        {
          term: "إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ",
          transliteration: "Innama Ashkoo Baththee wa Huznee ilal-lah",
          meaning: { en: "I only complain of my grief to Allah", ur: "میں اپنا دکھ اور غم صرف اللہ سے کہتا ہوں" },
          explanation: { en: "Ya'qub's grief didn't mean lack of faith. Complaining TO Allah is different from ABOUT Allah.", ur: "یعقوب کا غم ایمان کی کمی نہیں تھا۔ اللہ سے شکایت کرنا اللہ کی شکایت کرنے سے مختلف ہے۔" },
          verseRef: "12:86",
          keyPhrase: true
        },
        {
          term: "لَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ",
          transliteration: "La Tay'asoo min Rawh-illaah",
          meaning: { en: "Don't despair of Allah's mercy", ur: "اللہ کی رحمت سے مایوس نہ ہو" },
          explanation: { en: "After decades, Ya'qub still had hope. Only disbelievers despair of Allah's relief.", ur: "دہائیوں بعد بھی یعقوب کو امید تھی۔ صرف کافر اللہ کی رحمت سے مایوس ہوتے ہیں۔" },
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
          meaning: { en: "Hardship has touched us and our family", ur: "ہمیں اور ہمارے گھر والوں کو تکلیف پہنچی ہے" },
          explanation: { en: "Brothers returned humbled by famine. Arrogance replaced by desperation - transformation through trial.", ur: "بھائی قحط سے عاجز ہو کر لوٹے۔ تکبر کی جگہ لاچاری - آزمائش سے تبدیلی۔" },
          verseRef: "12:88"
        },
        {
          term: "هَلْ عَلِمْتُم مَّا فَعَلْتُم بِيُوسُفَ",
          transliteration: "Hal 'Alimtum ma Fa'altum bi-Yusuf",
          meaning: { en: "Do you know what you did to Yusuf?", ur: "کیا تمہیں معلوم ہے تم نے یوسف کے ساتھ کیا کیا؟" },
          explanation: { en: "Yusuf finally reveals the question. Moment of truth after decades of concealment.", ur: "یوسف آخرکار سوال ظاہر کرتا ہے۔ دہائیوں کی پوشیدگی کے بعد سچائی کا لمحہ۔" },
          verseRef: "12:89"
        },
        {
          term: "أَإِنَّكَ لَأَنتَ يُوسُفُ",
          transliteration: "A-innaka la-Anta Yusuf?",
          meaning: { en: "Are you indeed Yusuf?", ur: "کیا واقعی تم یوسف ہو؟" },
          explanation: { en: "Shock and recognition. The despised brother became the powerful vizier.", ur: "صدمہ اور پہچان۔ حقیر سمجھا جانے والا بھائی طاقتور وزیر بن گیا۔" },
          verseRef: "12:90"
        },
        {
          term: "قَدْ مَنَّ اللَّهُ عَلَيْنَا",
          transliteration: "Qad Mann-Allahu 'Alayna",
          meaning: { en: "Allah has favored us", ur: "اللہ نے ہم پر احسان کیا ہے" },
          explanation: { en: "Yusuf attributes success to Allah's favor, not his own merit. Humility in triumph.", ur: "یوسف کامیابی کو اللہ کے فضل سے منسوب کرتا ہے، اپنی محنت سے نہیں۔ فتح میں عاجزی۔" },
          verseRef: "12:90"
        },
        {
          term: "إِنَّهُ مَن يَتَّقِ وَيَصْبِرْ",
          transliteration: "Innahu man Yattaqi wa Yasbir",
          meaning: { en: "Whoever has taqwa and patience", ur: "جو تقویٰ اختیار کرے اور صبر کرے" },
          explanation: { en: "Yusuf's formula: God-consciousness (taqwa) + patience (sabr) = Allah never wastes reward.", ur: "یوسف کا فارمولا: خدا ترسی (تقویٰ) + صبر = اللہ کبھی اجر ضائع نہیں کرتا۔" },
          verseRef: "12:90",
          keyPhrase: true
        },
        {
          term: "لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ",
          transliteration: "La Tathreeba 'Alaykum-ul-Yawm",
          meaning: { en: "No blame on you today", ur: "آج تم پر کوئی ملامت نہیں" },
          explanation: { en: "Complete forgiveness! No revenge, no 'I told you so.' Model of prophetic mercy.", ur: "مکمل معافی! نہ انتقام، نہ 'میں نے کہا تھا'۔ نبوی رحمت کا نمونہ۔" },
          verseRef: "12:92",
          keyPhrase: true
        },
        {
          term: "يَغْفِرُ اللَّهُ لَكُمْ",
          transliteration: "Yaghfir-Allahu Lakum",
          meaning: { en: "May Allah forgive you", ur: "اللہ تمہیں معاف کرے" },
          explanation: { en: "Yusuf not only forgave but prayed for their divine forgiveness. Ultimate nobility.", ur: "یوسف نے نہ صرف معاف کیا بلکہ ان کی الٰہی مغفرت کی دعا کی۔ اعلیٰ ترین شرافت۔" },
          verseRef: "12:92"
        },
        {
          term: "اذْهَبُوا بِقَمِيصِي هَٰذَا",
          transliteration: "Idh-haboo bi-Qameesee Hadha",
          meaning: { en: "Take this shirt of mine", ur: "میری یہ قمیض لے جاؤ" },
          explanation: { en: "The shirt motif returns! Once bloodied as false evidence, now a cure. Full circle.", ur: "قمیض کا نقش واپس آتا ہے! کبھی جھوٹے ثبوت کے طور پر خون آلود، اب شفا۔ دائرہ مکمل۔" },
          verseRef: "12:93"
        },
        {
          term: "فَأَلْقُوهُ عَلَىٰ وَجْهِ أَبِي يَأْتِ بَصِيرًا",
          transliteration: "Fa-alqoohu 'ala Wajhi Abee Ya'ti Baseeran",
          meaning: { en: "Cast it on my father's face, he'll regain sight", ur: "اسے میرے باپ کے چہرے پر ڈال دو وہ بینا ہو جائیں گے" },
          explanation: { en: "Miraculous cure - Yusuf's shirt restored Ya'qub's sight. Divine healing.", ur: "معجزانہ شفا - یوسف کی قمیض نے یعقوب کی بینائی بحال کی۔ الٰہی شفا۔" },
          verseRef: "12:93"
        },
        {
          term: "إِنِّي لَأَجِدُ رِيحَ يُوسُفَ",
          transliteration: "Innee la-Ajidu Reeha Yusuf",
          meaning: { en: "I smell the scent of Yusuf", ur: "مجھے یوسف کی خوشبو آ رہی ہے" },
          explanation: { en: "Ya'qub sensed Yusuf's scent from afar! A father's heart, prophetic intuition, or miracle.", ur: "یعقوب نے دور سے یوسف کی خوشبو محسوس کی! باپ کا دل، نبوی بصیرت، یا معجزہ۔" },
          verseRef: "12:94"
        },
        {
          term: "سَوْفَ أَسْتَغْفِرُ لَكُمْ رَبِّي",
          transliteration: "Sawfa Astaghfiru Lakum Rabbee",
          meaning: { en: "I will ask forgiveness for you from my Lord", ur: "میں اپنے رب سے تمہارے لیے مغفرت مانگوں گا" },
          explanation: { en: "Ya'qub also forgave his sons and promised to pray for them. Prophets forgive greatly.", ur: "یعقوب نے بھی بیٹوں کو معاف کیا اور ان کے لیے دعا کا وعدہ کیا۔ انبیاء عظیم معافی دیتے ہیں۔" },
          verseRef: "12:98"
        },
        {
          term: "وَرَفَعَ أَبَوَيْهِ عَلَى الْعَرْشِ",
          transliteration: "Wa Rafa'a Abawayhi 'alal-'Arsh",
          meaning: { en: "He raised his parents on the throne", ur: "اس نے اپنے والدین کو تخت پر بٹھایا" },
          explanation: { en: "Yusuf honored his parents by seating them on his throne. Ultimate filial respect.", ur: "یوسف نے والدین کو تخت پر بٹھا کر عزت دی۔ اعلیٰ ترین والدین کی عزت۔" },
          verseRef: "12:100"
        },
        {
          term: "وَخَرُّوا لَهُ سُجَّدًا",
          transliteration: "Wa Kharroo lahu Sujjadan",
          meaning: { en: "They fell down in prostration to him", ur: "وہ اس کے لیے سجدے میں گر گئے" },
          explanation: { en: "The dream fulfilled! Parents and brothers prostrated (greeting of respect, not worship).", ur: "خواب پورا ہوا! والدین اور بھائیوں نے سجدہ کیا (عزت کا سلام، عبادت نہیں)۔" },
          verseRef: "12:100"
        },
        {
          term: "هَٰذَا تَأْوِيلُ رُؤْيَايَ مِن قَبْلُ",
          transliteration: "Hadha Ta'weelu Ru'yaaya min Qabl",
          meaning: { en: "This is the interpretation of my dream before", ur: "یہ میرے پہلے خواب کی تعبیر ہے" },
          explanation: { en: "Full circle - from childhood dream to royal fulfillment. Divine promises always come true.", ur: "دائرہ مکمل - بچپن کے خواب سے شاہی تکمیل تک۔ الٰہی وعدے ہمیشہ پورے ہوتے ہیں۔" },
          verseRef: "12:100"
        },
        {
          term: "قَدْ جَعَلَهَا رَبِّي حَقًّا",
          transliteration: "Qad Ja'alaha Rabbee Haqqan",
          meaning: { en: "My Lord has made it reality", ur: "میرے رب نے اسے سچ کر دکھایا" },
          explanation: { en: "Yusuf acknowledges Allah's planning. Every hardship was a stepping stone to this moment.", ur: "یوسف اللہ کی تدبیر کا اعتراف کرتا ہے۔ ہر مشقت اس لمحے تک ایک سیڑھی تھی۔" },
          verseRef: "12:100"
        },
        {
          term: "وَقَدْ أَحْسَنَ بِي إِذْ أَخْرَجَنِي مِنَ السِّجْنِ",
          transliteration: "Wa Qad Ahsana bee idh Akhrajanee min-as-Sijn",
          meaning: { en: "He was kind to me when He freed me from prison", ur: "اس نے مجھ پر احسان کیا جب مجھے قید سے نکالا" },
          explanation: { en: "Yusuf says 'prison' not 'well' - protecting his brothers' honor even in his triumph. Ultimate mercy.", ur: "یوسف 'قید' کہتا ہے نہ کہ 'کنواں' - فتح میں بھی بھائیوں کی عزت محفوظ رکھنا۔ اعلیٰ ترین رحمت۔" },
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
          meaning: { en: "That is from the news of the unseen", ur: "یہ غیب کی خبروں میں سے ہے" },
          explanation: { en: "Allah confirms: This story came through revelation, not human knowledge. Proof of prophethood.", ur: "اللہ تصدیق کرتا ہے: یہ کہانی وحی سے آئی، انسانی علم سے نہیں۔ نبوت کا ثبوت۔" },
          verseRef: "12:102"
        },
        {
          term: "وَمَا أَكْثَرُ النَّاسِ... بِمُؤْمِنِينَ",
          transliteration: "Wa ma Akthar-un-Naasi bi-Mu'mineen",
          meaning: { en: "Most people will not believe", ur: "اکثر لوگ ایمان نہیں لائیں گے" },
          explanation: { en: "Despite clear signs, most reject faith. Truth doesn't guarantee acceptance by masses.", ur: "واضح نشانیوں کے باوجود اکثر ایمان سے انکار کرتے ہیں۔ سچائی عوام کی قبولیت کی ضمانت نہیں۔" },
          verseRef: "12:103"
        },
        {
          term: "وَكَأَيِّن مِّنْ آيَةٍ فِي السَّمَاوَاتِ وَالْأَرْضِ",
          transliteration: "Wa Ka-ayyin min Aayatin fis-Samawaati wal-Ard",
          meaning: { en: "How many signs in heavens and earth", ur: "آسمانوں اور زمین میں کتنی نشانیاں ہیں" },
          explanation: { en: "Signs everywhere, yet people pass by heedlessly. Spiritual blindness despite physical sight.", ur: "ہر جگہ نشانیاں، پھر بھی لوگ بے خبری سے گزر جاتے ہیں۔ بینائی ہونے کے باوجود روحانی اندھاپن۔" },
          verseRef: "12:105"
        },
        {
          term: "وَمَا يُؤْمِنُ أَكْثَرُهُم بِاللَّهِ إِلَّا وَهُم مُّشْرِكُونَ",
          transliteration: "Wa ma Yu'minu Aktharuhum billahi illa wa hum Mushrikoon",
          meaning: { en: "Most don't believe except while associating partners", ur: "اکثر لوگ ایمان نہیں لاتے مگر شرک کرتے ہوئے" },
          explanation: { en: "Hidden shirk - believing in Allah but mixing worship with others. Dangerous spiritual state.", ur: "پوشیدہ شرک - اللہ پر ایمان لیکن دوسروں کی عبادت ملا دینا۔ خطرناک روحانی حالت۔" },
          verseRef: "12:106"
        },
        {
          term: "قُلْ هَٰذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ",
          transliteration: "Qul Hadhihi Sabeelee Ad'oo ilal-laah",
          meaning: { en: "Say: This is my way - I call to Allah", ur: "کہو: یہ میرا راستہ ہے - میں اللہ کی طرف بلاتا ہوں" },
          explanation: { en: "The Prophet's declaration of his mission - da'wah with insight (baseerah), not blind following.", ur: "نبی ﷺ کا اپنے مشن کا اعلان - بصیرت سے دعوت، اندھی تقلید نہیں۔" },
          verseRef: "12:108"
        },
        {
          term: "عَلَىٰ بَصِيرَةٍ أَنَا وَمَنِ اتَّبَعَنِي",
          transliteration: "'Ala Baseeratin Ana wa man-ittaba'anee",
          meaning: { en: "With insight - I and those who follow me", ur: "بصیرت کے ساتھ - میں اور میرے پیروکار" },
          explanation: { en: "True followers have INSIGHT (baseerah) - understanding, not blind imitation.", ur: "سچے پیروکاروں کے پاس بصیرت ہے - سمجھ، اندھی نقل نہیں۔" },
          verseRef: "12:108"
        },
        {
          term: "حَتَّىٰ إِذَا اسْتَيْأَسَ الرُّسُلُ",
          transliteration: "Hatta idhas-tay'as-ar-Rusul",
          meaning: { en: "Until when the messengers despaired", ur: "یہاں تک کہ جب رسول مایوس ہو گئے" },
          explanation: { en: "Victory comes at the darkest moment - when even prophets felt hopelessness. Then Allah's help arrives.", ur: "فتح تاریک ترین لمحے میں آتی ہے - جب انبیاء بھی مایوسی محسوس کریں۔ پھر اللہ کی مدد آتی ہے۔" },
          verseRef: "12:110"
        },
        {
          term: "جَاءَهُمْ نَصْرُنَا",
          transliteration: "Jaa'ahum Nasruna",
          meaning: { en: "Our help came to them", ur: "ہماری مدد ان کے پاس آئی" },
          explanation: { en: "Divine victory after human despair. Pattern repeated throughout prophetic history.", ur: "انسانی مایوسی کے بعد الٰہی فتح۔ نبوی تاریخ میں بار بار دہرایا گیا نمونہ۔" },
          verseRef: "12:110"
        },
        {
          term: "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ",
          transliteration: "Laqad Kaana fee Qasasihim 'Ibrah",
          meaning: { en: "In their stories is a lesson", ur: "ان کے قصوں میں عبرت ہے" },
          explanation: { en: "The purpose of Quranic narratives: 'ibrah (lesson), not entertainment. Reflect and apply.", ur: "قرآنی بیانیے کا مقصد: عبرت (سبق)، تفریح نہیں۔ غور کرو اور عمل کرو۔" },
          verseRef: "12:111"
        },
        {
          term: "مَا كَانَ حَدِيثًا يُفْتَرَىٰ",
          transliteration: "Ma Kaana Hadeethan Yuftara",
          meaning: { en: "This is not invented speech", ur: "یہ گھڑی ہوئی بات نہیں ہے" },
          explanation: { en: "Final assertion: The Quran is not human fabrication but divine truth. Believe and benefit.", ur: "آخری دعویٰ: قرآن انسانی من گھڑت نہیں بلکہ الٰہی سچائی ہے۔ ایمان لاؤ اور فائدہ اٹھاؤ۔" },
          verseRef: "12:111"
        },
        {
          term: "تَصْدِيقَ الَّذِي بَيْنَ يَدَيْهِ",
          transliteration: "Tasdeeq-alladhee Bayna Yadayhi",
          meaning: { en: "Confirmation of what came before", ur: "اپنے سے پہلے کی تصدیق" },
          explanation: { en: "Quran confirms previous scriptures' core message while correcting corruptions.", ur: "قرآن پچھلے صحائف کے بنیادی پیغام کی تصدیق کرتا ہے اور تحریفات کی اصلاح کرتا ہے۔" },
          verseRef: "12:111"
        },
        {
          term: "وَتَفْصِيلَ كُلِّ شَيْءٍ",
          transliteration: "Wa Tafseel-a Kulli Shay'in",
          meaning: { en: "Detailed explanation of all things", ur: "ہر چیز کی تفصیل" },
          explanation: { en: "Quran contains guidance for everything essential - complete system for life.", ur: "قرآن میں ہر ضروری چیز کے لیے رہنمائی ہے - زندگی کا مکمل نظام۔" },
          verseRef: "12:111"
        },
        {
          term: "وَهُدًى وَرَحْمَةً لِّقَوْمٍ يُؤْمِنُونَ",
          transliteration: "Wa Hudan wa Rahmatan li-Qawmin Yu'minoon",
          meaning: { en: "Guidance and mercy for believing people", ur: "ایمان والوں کے لیے ہدایت اور رحمت" },
          explanation: { en: "The Quran's benefit is for those who believe. Disbelief blocks its healing.", ur: "قرآن کا فائدہ ایمان والوں کے لیے ہے۔ کفر اس کی شفا کو روکتا ہے۔" },
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
      description: { en: "Dream fulfilled after 40+ years", ur: "40 سال سے زیادہ بعد خواب کی تکمیل" },
      explanation: { en: "The eleven stars, sun, and moon prostrating - realized when family honored Yusuf in Egypt", ur: "گیارہ ستارے، سورج اور چاند سجدہ کرتے - جب خاندان نے مصر میں یوسف کو عزت دی تو پورا ہوا" }
    },
    {
      from: "القميص بدم كذب (12:18)",
      to: "القميص الشفاء (12:93)",
      type: "reversal",
      description: { en: "Shirt of deception becomes shirt of healing", ur: "دھوکے کی قمیض شفا کی قمیض بن گئی" },
      explanation: { en: "The motif transforms from evidence of 'death' to instrument of restoration", ur: "نقش 'موت' کے ثبوت سے بحالی کے آلے میں بدل جاتا ہے" }
    },
    {
      from: "غيابت الجب (12:10)",
      to: "على خزائن الأرض (12:55)",
      type: "elevation",
      description: { en: "From well to treasury", ur: "کنویں سے خزانے تک" },
      explanation: { en: "Cast into darkness, elevated to control Egypt's resources", ur: "اندھیرے میں پھینکا گیا، مصر کے وسائل پر اختیار تک بلند کیا گیا" }
    },
    {
      from: "السجن (12:33)",
      to: "مكنا ليوسف (12:56)",
      type: "divine_planning",
      description: { en: "Prison was preparation", ur: "قید تیاری تھی" },
      explanation: { en: "Choosing prison over sin led to meeting the king's servants and ultimate authority", ur: "گناہ پر قید کا انتخاب بادشاہ کے خادموں سے ملاقات اور حتمی اقتدار کا سبب بنا" }
    },
    {
      from: "صبر جميل (12:18)",
      to: "لا تيأسوا من روح الله (12:87)",
      type: "consistency",
      description: { en: "Ya'qub's lifelong patience", ur: "یعقوب کا تاحیات صبر" },
      explanation: { en: "Beautiful patience maintained through decades of grief - never despairing of Allah", ur: "دہائیوں کے غم میں صبرِ جمیل برقرار - اللہ سے کبھی مایوس نہیں" }
    },
    {
      from: "معاذ الله (12:23)",
      to: "إنه من يتق ويصبر (12:90)",
      type: "formula",
      description: { en: "Taqwa + Sabr = Success", ur: "تقویٰ + صبر = کامیابی" },
      explanation: { en: "Yusuf's resistance to temptation and patience through trials led to Allah's favor", ur: "آزمائش میں یوسف کی مزاحمت اور مصائب میں صبر نے اللہ کے فضل تک پہنچایا" }
    },
    {
      from: "لا تقصص رؤياك (12:5)",
      to: "إن كيدكن عظيم (12:28)",
      type: "wisdom",
      description: { en: "Concealment from potential harm", ur: "ممکنہ نقصان سے بچنے کے لیے پوشیدگی" },
      explanation: { en: "Ya'qub knew to hide blessings from enviers - a recurring theme of protective wisdom", ur: "یعقوب جانتے تھے کہ نعمتیں حسد کرنے والوں سے چھپانی چاہییں - حفاظتی حکمت کا بار بار آنے والا موضوع" }
    }
  ],

  thematicFlow: {
    title: "The Journey from Darkness to Light",
    titleArabic: "الرحلة من الظلمات إلى النور",
    description: { en: "The surah follows a perfect narrative arc - from dream to fulfillment through trials", ur: "سورت ایک کامل بیانیہ محور پر چلتی ہے - خواب سے آزمائشوں کے ذریعے تکمیل تک" },
    stages: [
      {
        stage: 1,
        theme: { en: "The Prophetic Dream", ur: "نبوی خواب" },
        verses: "12:1-6",
        description: { en: "Young Yusuf's vision of future greatness", ur: "چھوٹے یوسف کا مستقبل کی عظمت کا نظارہ" },
        color: "#8B5CF6"
      },
      {
        stage: 2,
        theme: { en: "Betrayal by Brothers", ur: "بھائیوں کی دھوکا دہی" },
        verses: "12:7-18",
        description: { en: "Jealousy leads to attempted murder, cast into well", ur: "حسد قتل کی کوشش تک لے جاتا ہے، کنویں میں پھینکا گیا" },
        color: "#EF4444"
      },
      {
        stage: 3,
        theme: { en: "Slavery in Egypt", ur: "مصر میں غلامی" },
        verses: "12:19-22",
        description: { en: "Sold as slave, raised in Aziz's house", ur: "غلام کے طور پر بیچا گیا، عزیز کے گھر میں پلا" },
        color: "#F59E0B"
      },
      {
        stage: 4,
        theme: { en: "The Great Temptation", ur: "عظیم آزمائش" },
        verses: "12:23-34",
        description: { en: "Zulaykha's seduction, Yusuf's chastity, false accusation", ur: "زلیخا کی فریب کاری، یوسف کی عفت، جھوٹا الزام" },
        color: "#EC4899"
      },
      {
        stage: 5,
        theme: { en: "Prison Years", ur: "قید کے سال" },
        verses: "12:35-42",
        description: { en: "Interpreting dreams, da'wah in prison", ur: "خوابوں کی تعبیر، قید میں دعوت" },
        color: "#06B6D4"
      },
      {
        stage: 6,
        theme: { en: "Rise to Power", ur: "اقتدار میں عروج" },
        verses: "12:43-57",
        description: { en: "King's dream, exoneration, becoming vizier", ur: "بادشاہ کا خواب، بریت، وزیر بننا" },
        color: "#10B981"
      },
      {
        stage: 7,
        theme: { en: "Testing the Brothers", ur: "بھائیوں کی آزمائش" },
        verses: "12:58-87",
        description: { en: "Brothers come for grain, Binyamin detained, Ya'qub's grief", ur: "بھائی غلہ لینے آئے، بنیامین روکا گیا، یعقوب کا غم" },
        color: "#A855F7"
      },
      {
        stage: 8,
        theme: { en: "The Grand Revelation", ur: "عظیم انکشاف" },
        verses: "12:88-101",
        description: { en: "Identity revealed, forgiveness granted, family reunited", ur: "شناخت ظاہر، معافی عطا، خاندان دوبارہ ملا" },
        color: "#22C55E"
      },
      {
        stage: 9,
        theme: { en: "Lessons & Conclusion", ur: "اسباق اور اختتام" },
        verses: "12:102-111",
        description: { en: "Divine wisdom, prophetic call, Quranic purpose", ur: "الٰہی حکمت، نبوی دعوت، قرآنی مقصد" },
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
    title: { en: "Narrative Mastery", ur: "بیانیہ فن" },
    devices: [
      {
        device: "The Shirt Motif",
        deviceArabic: "قميص يوسف",
        description: { en: "Yusuf's shirt appears three times with transforming significance", ur: "یوسف کی قمیض تین بار تبدیل ہوتی اہمیت کے ساتھ ظاہر ہوتی ہے" },
        examples: [
          { verse: "12:18", instance: { en: "Bloodied as false evidence of death", ur: "موت کے جھوٹے ثبوت کے طور پر خون آلود" } },
          { verse: "12:25-28", instance: { en: "Torn from behind, proving innocence", ur: "پیچھے سے پھٹی، بے گناہی ثابت" } },
          { verse: "12:93", instance: { en: "Healing Ya'qub's blindness", ur: "یعقوب کی بینائی بحال" } }
        ]
      },
      {
        device: "Dramatic Irony",
        description: { en: "Reader knows what characters don't", ur: "قاری جانتا ہے جو کردار نہیں جانتے" },
        examples: [
          "Brothers don't recognize Yusuf (12:58)",
          "Zulaykha's guests cut hands (12:31)",
          "Brothers condemn themselves (12:75)"
        ]
      },
      {
        device: "Ring Structure",
        description: { en: "Story begins and ends with the dream", ur: "کہانی خواب سے شروع اور ختم ہوتی ہے" },
        examples: [
          "Dream told (12:4) → Dream fulfilled (12:100)"
        ]
      },
      {
        device: "Reversal of Fortune",
        description: { en: "Every low leads to a higher high", ur: "ہر پستی ایک اور بلندی کی طرف لے جاتی ہے" },
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
        explanation: { en: "Both Yusuf and Ya'qub exemplify 'sabr jameel' - beautiful patience without complaint", ur: "یوسف اور یعقوب دونوں 'صبرِ جمیل' کا نمونہ ہیں - بغیر شکایت خوبصورت صبر" },
        verses: ["12:18", "12:83", "12:90"]
      },
      {
        lesson: "Chastity Over Opportunity",
        lessonArabic: "العفة فوق الفرصة",
        explanation: { en: "Yusuf chose prison over sin - preferring hardship for faith over comfort in disobedience", ur: "یوسف نے گناہ پر قید کو ترجیح دی - نافرمانی کے آرام پر ایمان کی مشقت کو ترجیح" },
        verses: ["12:23", "12:33"]
      },
      {
        lesson: "Forgiveness Over Revenge",
        lessonArabic: "العفو فوق الانتقام",
        explanation: { en: "When in power, Yusuf forgave completely - 'No blame on you today'", ur: "اقتدار میں آ کر یوسف نے مکمل معافی دی - 'آج تم پر کوئی ملامت نہیں'" },
        verses: ["12:92"]
      },
      {
        lesson: "Trust Divine Planning",
        lessonArabic: "الثقة بتدبير الله",
        explanation: { en: "Every hardship was a step toward Yusuf's ultimate position - trust Allah's timing", ur: "ہر مشقت یوسف کے حتمی مقام کی طرف ایک قدم تھی - اللہ کے وقت پر بھروسہ رکھو" },
        verses: ["12:21", "12:56", "12:100"]
      },
      {
        lesson: "Don't Despair of Allah's Mercy",
        lessonArabic: "لا تيأس من رحمة الله",
        explanation: { en: "Ya'qub never lost hope even after decades - despair is for disbelievers", ur: "یعقوب نے دہائیوں بعد بھی امید نہیں چھوڑی - مایوسی کافروں کے لیے ہے" },
        verses: ["12:87"]
      },
      {
        lesson: "Guard Against Envy",
        lessonArabic: "الحذر من الحسد",
        explanation: { en: "Jealousy destroyed the brothers' peace - don't share blessings with potential enviers", ur: "حسد نے بھائیوں کا چین برباد کیا - نعمتیں حسد کرنے والوں سے نہ بانٹو" },
        verses: ["12:5", "12:8-9"]
      },
      {
        lesson: "Complain TO Allah, Not ABOUT Allah",
        lessonArabic: "الشكوى إلى الله لا من الله",
        explanation: { en: "Ya'qub grieved but directed it to Allah - expressing pain while maintaining faith", ur: "یعقوب نے غم کیا لیکن اسے اللہ کی طرف متوجہ رکھا - ایمان برقرار رکھتے ہوئے درد کا اظہار" },
        verses: ["12:86"]
      },
      {
        lesson: "Use Means While Trusting Allah",
        lessonArabic: "الأخذ بالأسباب مع التوكل",
        explanation: { en: "Yusuf asked the cupbearer for help - permissible while trusting Allah ultimately", ur: "یوسف نے ساقی سے مدد مانگی - اللہ پر بھروسہ رکھتے ہوئے اسباب اختیار کرنا جائز ہے" },
        verses: ["12:42", "12:55"]
      }
    ]
  },

  uniqueFeatures: {
    title: { en: "What Makes Surah Yusuf Unique", ur: "سورۂ یوسف کو کیا منفرد بناتا ہے" },
    features: [
      { en: "Only surah telling a complete, continuous narrative", ur: "واحد سورت جو ایک مکمل، مسلسل بیانیہ سناتی ہے" },
      { en: "Called 'Ahsan al-Qasas' (Best of Stories) by Allah", ur: "اللہ نے اسے 'احسن القصص' (بہترین قصص) کہا" },
      { en: "No verse breaks the narrative flow", ur: "کوئی آیت بیانیے کے بہاؤ کو نہیں توڑتی" },
      { en: "Contains the 'most beautiful woman' (Zulaykha) and 'most beautiful man' (Yusuf)", ur: "'سب سے خوبصورت عورت' (زلیخا) اور 'سب سے خوبصورت مرد' (یوسف) دونوں شامل" },
      { en: "Revealed as consolation during the Prophet's 'Year of Sorrow'", ur: "نبی ﷺ کے 'عام الحزن' میں تسلی کے طور پر نازل ہوئی" },
      { en: "Demonstrates dream interpretation as prophetic gift", ur: "خوابوں کی تعبیر کو نبوی تحفے کے طور پر پیش کرتی ہے" },
      { en: "Shows both Ya'qub and Yusuf as prophets in one story", ur: "ایک کہانی میں یعقوب اور یوسف دونوں کو نبی کے طور پر دکھاتی ہے" }
    ]
  },

  practicalApplication: {
    title: { en: "Living by Surah Yusuf", ur: "سورۂ یوسف پر عمل" },
    applications: [
      {
        principle: { en: "When betrayed by family", ur: "جب خاندان دھوکا دے" },
        how: { en: "Maintain patience, trust Allah's plan, eventually forgive completely", ur: "صبر کرو، اللہ کے منصوبے پر بھروسہ رکھو، آخرکار مکمل معافی دو" },
        model: { en: "Yusuf's treatment of his brothers", ur: "یوسف کا اپنے بھائیوں سے سلوک" }
      },
      {
        principle: { en: "When facing temptation", ur: "جب آزمائش کا سامنا ہو" },
        how: { en: "Say 'Ma'adh Allah', flee physically if needed, choose hardship over sin", ur: "'معاذ اللہ' کہو، ضرورت ہو تو جسمانی فرار کرو، گناہ پر مشقت اختیار کرو" },
        model: { en: "Yusuf and Zulaykha", ur: "یوسف اور زلیخا" }
      },
      {
        principle: { en: "When grieving deeply", ur: "جب شدید غم ہو" },
        how: { en: "Cry and complain TO Allah, never lose hope, maintain sabr jameel", ur: "رؤ اور اللہ سے فریاد کرو، کبھی امید نہ چھوڑو، صبرِ جمیل برقرار رکھو" },
        model: { en: "Ya'qub's decades of grief", ur: "یعقوب کا دہائیوں کا غم" }
      },
      {
        principle: { en: "When in authority", ur: "جب اقتدار میں ہو" },
        how: { en: "Use position for justice, help the needy, forgive past wrongs", ur: "عہدے کو انصاف کے لیے استعمال کرو، ضرورت مندوں کی مدد کرو، پرانی غلطیاں معاف کرو" },
        model: { en: "Yusuf as vizier", ur: "وزیر کے طور پر یوسف" }
      },
      {
        principle: { en: "When falsely accused", ur: "جب جھوٹا الزام لگے" },
        how: { en: "Demand exoneration before accepting freedom, protect your honor", ur: "آزادی قبول کرنے سے پہلے بریت کا مطالبہ کرو، اپنی عزت محفوظ رکھو" },
        model: { en: "Yusuf refusing to leave prison", ur: "یوسف کا قید سے نکلنے سے انکار" }
      },
      {
        principle: { en: "When given good news", ur: "جب خوشخبری ملے" },
        how: { en: "Don't share with potential enviers, protect blessings with discretion", ur: "حسد کرنے والوں سے نہ بانٹو، احتیاط سے نعمتوں کی حفاظت کرو" },
        model: { en: "Ya'qub's advice about the dream", ur: "خواب کے بارے میں یعقوب کی نصیحت" }
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 7,
        name: "Al-A'raf",
        verses: "7:59-93",
        relation: { en: "Other prophetic stories", ur: "دیگر نبوی قصے" },
        sharedTheme: { en: "Prophets facing rejection", ur: "رد کا سامنا کرنے والے انبیاء" }
      },
      {
        surah: 11,
        name: "Hud",
        relation: { en: "Preceding surah, also about prophets", ur: "پچھلی سورت، بھی انبیاء کے بارے میں" },
        sharedTheme: { en: "Patience of prophets", ur: "انبیاء کا صبر" }
      },
      {
        surah: 18,
        name: "Al-Kahf",
        relation: { en: "Another surah of narratives", ur: "ایک اور بیانیہ سورت" },
        sharedTheme: { en: "Stories of faith tested", ur: "ایمان کی آزمائش کے قصے" }
      },
      {
        surah: 28,
        name: "Al-Qasas",
        relation: { en: "Story of Musa", ur: "موسیٰ کا قصہ" },
        sharedTheme: { en: "From danger to power", ur: "خطرے سے اقتدار تک" }
      },
      {
        surah: 37,
        name: "As-Saffat",
        verses: "37:139-148",
        relation: { en: "Story of Yunus", ur: "یونس کا قصہ" },
        sharedTheme: { en: "Prophets in darkness finding light", ur: "تاریکی میں روشنی پانے والے انبیاء" }
      }
    ],
    biblicalParallel: {
      text: "Genesis 37-50",
      differences: [
        { en: "Quran emphasizes monotheism throughout", ur: "قرآن پوری کہانی میں توحید پر زور دیتا ہے" },
        { en: "Zulaykha's confession included", ur: "زلیخا کا اعتراف شامل ہے" },
        { en: "Greater focus on prophetic dreams", ur: "نبوی خوابوں پر زیادہ توجہ" },
        { en: "No explicit mention of Israel entering Egypt", ur: "اسرائیل کے مصر میں داخلے کا واضح ذکر نہیں" },
        { en: "Yusuf's da'wah in prison is Quranic addition", ur: "قید میں یوسف کی دعوت قرآنی اضافہ ہے" }
      ]
    }
  },

  hadithReferences: [
    {
      hadith: { en: "The Prophet was asked: Who is the most honorable? He said: Yusuf son of Ya'qub son of Ishaq son of Ibrahim - prophet, son of prophet, son of prophet, son of prophet.", ur: "نبی ﷺ سے پوچھا گیا: سب سے معزز کون؟ فرمایا: یوسف بن یعقوب بن اسحاق بن ابراہیم - نبی، نبی کا بیٹا، نبی کا بیٹا، نبی کا بیٹا۔" },
      source: "Sahih Bukhari",
      relevance: { en: "Yusuf's unique lineage of four prophets", ur: "یوسف کا چار انبیاء کا منفرد سلسلۂ نسب" }
    },
    {
      hadith: { en: "Yusuf was given half of all beauty.", ur: "یوسف کو تمام حسن کا آدھا حصہ دیا گیا تھا۔" },
      source: "Sahih Muslim",
      relevance: { en: "Explanation of women's reaction (12:31)", ur: "عورتوں کے ردعمل کی وضاحت (12:31)" }
    },
    {
      hadith: { en: "True dreams are from Allah, and bad dreams are from Satan.", ur: "سچے خواب اللہ کی طرف سے ہیں اور بُرے خواب شیطان کی طرف سے۔" },
      source: "Sahih Bukhari",
      relevance: { en: "Context for dream interpretation in the surah", ur: "سورت میں خوابوں کی تعبیر کا پس منظر" }
    }
  ],

  reflectionQuestions: [
    { en: "How do I respond when betrayed by those closest to me?", ur: "جب قریبی لوگ دھوکا دیں تو میں کیا کرتا ہوں؟" },
    { en: "What would I choose: comfort with sin or hardship with faith?", ur: "میں کیا چنوں گا: گناہ میں آرام یا ایمان میں مشقت؟" },
    { en: "Do I complain TO Allah or ABOUT Allah in grief?", ur: "کیا میں غم میں اللہ سے شکایت کرتا ہوں یا اللہ کی شکایت؟" },
    { en: "When I have power over those who wronged me, do I forgive?", ur: "جب ظالموں پر اختیار ہو تو کیا میں معاف کرتا ہوں؟" },
    { en: "Am I patient during the 'prison years' before my breakthrough?", ur: "کیا میں کامیابی سے پہلے 'قید کے سالوں' میں صابر ہوں؟" },
    { en: "Do I trust Allah's plan even when I can't see the path?", ur: "کیا میں اللہ کے منصوبے پر بھروسہ رکھتا ہوں جب راستہ نظر نہ آئے؟" },
    { en: "What blessings should I guard from potential enviers?", ur: "کون سی نعمتیں حسد کرنے والوں سے بچانی چاہییں؟" }
  ]
};

export default ONTOLOGY;
