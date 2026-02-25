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
    title: { en: "The Letter Sad", ur: "حرف صاد" },
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
      nameUr: "ابتدائیہ اور کافروں کو تنبیہ",
      nameArabic: "الافتتاح والإنذار",
      color: "#8B5CF6",
      icon: "AlertTriangle",
      verses: "38:1-11",
      concepts: [
        {
          term: "ص",
          transliteration: "Sad",
          meaning: { en: "The Letter Sad", ur: "حرفِ صاد" },
          explanation: { en: "One of the mysterious letters (Huruf Muqatta'at) that begin certain surahs. Its exact meaning is known only to Allah.", ur: "حروفِ مقطعات میں سے جو بعض سورتوں کی ابتدا میں آتے ہیں۔ ان کا حقیقی مطلب صرف اللہ کو معلوم ہے۔" },
          verseRef: "38:1"
        },
        {
          term: "وَالْقُرْآنِ ذِي الذِّكْرِ",
          transliteration: "Wal-Qur'ani dhil-Dhikr",
          meaning: { en: "By the Quran full of remembrance", ur: "قسم ہے قرآن کی جو ذکر والا ہے" },
          explanation: { en: "An oath by the Quran, described as containing dhikr - reminder, remembrance, and honor.", ur: "قرآن کی قسم، جسے ذکر پر مشتمل بتایا گیا - یاد دہانی، ذکر اور عزت۔" },
          verseRef: "38:1",
          keyPhrase: true
        },
        {
          term: "فِي عِزَّةٍ وَشِقَاقٍ",
          transliteration: "Fee 'Izzatin wa Shiqaq",
          meaning: { en: "In pride and dissension", ur: "تکبر اور مخالفت میں" },
          explanation: { en: "Disbelievers are in self-importance and opposition - their arrogance prevents acceptance of truth.", ur: "کافر خود پسندی اور مخالفت میں ہیں - ان کا تکبر سچائی قبول کرنے سے روکتا ہے۔" },
          verseRef: "38:2"
        },
        {
          term: "كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍ",
          transliteration: "Kam Ahlakna min Qablihim min Qarn",
          meaning: { en: "How many generations We destroyed before them", ur: "ہم نے ان سے پہلے کتنی نسلیں تباہ کیں" },
          explanation: { en: "Warning from history - many nations destroyed for rejecting prophets. They cried out but too late.", ur: "تاریخ سے تنبیہ - بہت سی قومیں انبیاء کو رد کرنے پر تباہ ہوئیں۔ انہوں نے فریاد کی مگر بہت دیر ہو چکی تھی۔" },
          verseRef: "38:3"
        },
        {
          term: "سَاحِرٌ كَذَّابٌ",
          transliteration: "Sahirun Kadhdhab",
          meaning: { en: "A magician, a liar", ur: "جادوگر، جھوٹا" },
          explanation: { en: "The accusation of Quraysh against the Prophet - same accusation made against previous prophets.", ur: "نبی ﷺ پر قریش کا الزام - وہی الزام جو پچھلے انبیاء پر لگایا گیا۔" },
          verseRef: "38:4"
        },
        {
          term: "أَجَعَلَ الْآلِهَةَ إِلَٰهًا وَاحِدًا",
          transliteration: "A-Ja'alal-Aalihata Ilahan Wahidan",
          meaning: { en: "Has he made the gods into one God?", ur: "کیا اس نے سب معبودوں کو ایک معبود بنا دیا؟" },
          explanation: { en: "Disbelievers' shock at Tawheed - they couldn't accept the concept of One God.", ur: "توحید پر کافروں کا صدمہ - وہ ایک خدا کا تصور قبول نہیں کر سکتے تھے۔" },
          verseRef: "38:5"
        },
        {
          term: "إِنَّ هَٰذَا لَشَيْءٌ عُجَابٌ",
          transliteration: "Inna Hadha la-Shay'un 'Ujab",
          meaning: { en: "This is indeed an amazing thing", ur: "یہ تو واقعی عجیب بات ہے" },
          explanation: { en: "Their sarcastic rejection of monotheism - finding unity of God strange while accepting multiple deities.", ur: "توحید کا طنزیہ انکار - ایک خدا کو عجیب سمجھنا جبکہ متعدد معبود قبول۔" },
          verseRef: "38:5"
        },
        {
          term: "امْشُوا وَاصْبِرُوا عَلَىٰ آلِهَتِكُمْ",
          transliteration: "Imshoo wasbiru 'ala Aalihatikum",
          meaning: { en: "Go and be patient upon your gods", ur: "چلو اور اپنے معبودوں پر ثابت قدم رہو" },
          explanation: { en: "Quraysh leaders urging each other to persist in polytheism - mockery and resistance to truth.", ur: "قریش کے سردار ایک دوسرے کو شرک پر ثابت قدم رہنے کی ترغیب دے رہے - سچائی کا مذاق اور مزاحمت۔" },
          verseRef: "38:6"
        },
        {
          term: "مَا سَمِعْنَا بِهَٰذَا فِي الْمِلَّةِ الْآخِرَةِ",
          transliteration: "Ma Sami'na bi-hadha fil-Millat-il-Aakhirah",
          meaning: { en: "We never heard of this in the latest religion", ur: "ہم نے یہ بات آخری دین میں نہیں سنی" },
          explanation: { en: "Claim that Tawheed was not in their forefathers' religion - preferring ancestral tradition over truth.", ur: "دعویٰ کہ توحید ان کے باپ دادا کے دین میں نہیں تھی - سچائی پر آبائی روایت کو ترجیح۔" },
          verseRef: "38:7"
        },
        {
          term: "أَمْ عِندَهُمْ خَزَائِنُ رَحْمَةِ رَبِّكَ",
          transliteration: "Am 'Indahum Khazaa'inu Rahmati Rabbik",
          meaning: { en: "Or do they have the treasuries of your Lord's mercy?", ur: "کیا ان کے پاس تیرے رب کی رحمت کے خزانے ہیں؟" },
          explanation: { en: "Rhetorical question - they don't control prophethood or divine mercy. Allah chooses whom He wills.", ur: "سوالِ انکاری - وہ نبوت یا الٰہی رحمت پر قابو نہیں رکھتے۔ اللہ جسے چاہے چنتا ہے۔" },
          verseRef: "38:9"
        },
        {
          term: "جُندٌ مَّا هُنَالِكَ مَهْزُومٌ مِّنَ الْأَحْزَابِ",
          transliteration: "Jundun ma Hunalika Mahzoomun min-al-Ahzab",
          meaning: { en: "A small army there will be defeated from the confederates", ur: "یہ مخالفین کا ایک لشکر ہے جو شکست کھائے گا" },
          explanation: { en: "Prophecy that the coalition against the Prophet would be defeated - fulfilled at Badr and beyond.", ur: "پیشگوئی کہ نبی ﷺ کے خلاف اتحاد شکست کھائے گا - بدر اور اس کے بعد پوری ہوئی۔" },
          verseRef: "38:11"
        }
      ]
    },

    previousNations: {
      name: "Previous Nations' Rejection",
      nameUr: "پچھلی قوموں کا انکار",
      nameArabic: "تكذيب الأمم السابقة",
      color: "#EF4444",
      icon: "Users",
      verses: "38:12-16",
      concepts: [
        {
          term: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ",
          transliteration: "Kadhdhabat Qablahum Qawmu Nuh",
          meaning: { en: "The people of Nuh denied before them", ur: "ان سے پہلے نوح کی قوم نے جھٹلایا" },
          explanation: { en: "Pattern of rejection - Nuh's people first in this list of deniers.", ur: "انکار کا نمونہ - اس فہرست میں نوح کی قوم سب سے پہلے۔" },
          verseRef: "38:12"
        },
        {
          term: "وَعَادٌ وَفِرْعَوْنُ ذُو الْأَوْتَادِ",
          transliteration: "Wa 'Aadun wa Fir'awnu dhul-Awtad",
          meaning: { en: "And Aad, and Pharaoh owner of stakes", ur: "اور عاد اور فرعون میخوں والا" },
          explanation: { en: "Pharaoh described as 'owner of stakes' - possibly referring to tent pegs of his vast army or impaling victims.", ur: "فرعون کو 'میخوں والا' کہا گیا - ممکنہ طور پر اس کے بڑے لشکر کے خیمے یا لوگوں کو ٹانگنے کا حوالہ۔" },
          verseRef: "38:12"
        },
        {
          term: "وَثَمُودُ وَقَوْمُ لُوطٍ وَأَصْحَابُ الْأَيْكَةِ",
          transliteration: "Wa Thamoodu wa Qawmu Lootin wa Ashaab-ul-Aykah",
          meaning: { en: "And Thamud, Lut's people, and the people of the Thicket", ur: "اور ثمود اور لوط کی قوم اور ایکہ والے" },
          explanation: { en: "Continuation of destroyed nations - Thamud, Lut's people, Shu'ayb's people (Aykah).", ur: "تباہ شدہ قوموں کا تسلسل - ثمود، لوط کی قوم، شعیب کی قوم (ایکہ)۔" },
          verseRef: "38:13"
        },
        {
          term: "أُولَٰئِكَ الْأَحْزَابُ",
          transliteration: "Ulaa'ik-al-Ahzab",
          meaning: { en: "Those are the confederates", ur: "یہی مخالفین کے گروہ ہیں" },
          explanation: { en: "These destroyed nations were confederates against truth - just like Quraysh's coalition.", ur: "یہ تباہ شدہ قومیں سچائی کے خلاف مخالفین تھیں - بالکل قریش کے اتحاد کی طرح۔" },
          verseRef: "38:13"
        },
        {
          term: "إِن كُلٌّ إِلَّا كَذَّبَ الرُّسُلَ فَحَقَّ عِقَابِ",
          transliteration: "In Kullun illa Kadhdhab-ar-Rusula fa-Haqqa 'Iqab",
          meaning: { en: "Each denied the messengers, so My punishment was justified", ur: "سب نے رسولوں کو جھٹلایا تو میرا عذاب واجب ہو گیا" },
          explanation: { en: "Universal pattern - denial of messengers leads to deserved punishment.", ur: "آفاقی نمونہ - رسولوں کا انکار مستحق سزا کی طرف لے جاتا ہے۔" },
          verseRef: "38:14"
        },
        {
          term: "وَمَا يَنظُرُ هَٰؤُلَاءِ إِلَّا صَيْحَةً وَاحِدَةً",
          transliteration: "Wa ma Yandhuru Haa'ulaa'i illa Sayhatan Wahidah",
          meaning: { en: "These only await a single blast", ur: "یہ صرف ایک چیخ کے منتظر ہیں" },
          explanation: { en: "Warning that punishment can come suddenly - just one shout from the angel.", ur: "تنبیہ کہ عذاب اچانک آ سکتا ہے - فرشتے کی صرف ایک چیخ۔" },
          verseRef: "38:15"
        },
        {
          term: "رَبَّنَا عَجِّل لَّنَا قِطَّنَا قَبْلَ يَوْمِ الْحِسَابِ",
          transliteration: "Rabbana 'Ajjil lana Qittana Qabla Yawm-il-Hisab",
          meaning: { en: "Our Lord, hasten our share before the Day of Account", ur: "اے ہمارے رب، حساب کے دن سے پہلے ہمارا حصہ جلدی دے دے" },
          explanation: { en: "Mocking demand for immediate punishment - they challenged Allah to punish them now.", ur: "فوری سزا کا مذاق اڑاتا مطالبہ - انہوں نے اللہ کو ابھی سزا دینے کا چیلنج کیا۔" },
          verseRef: "38:16"
        }
      ]
    },

    dawudStory: {
      name: "The Story of Dawud",
      nameUr: "داؤد کا قصہ",
      nameArabic: "قصة داود",
      color: "#F59E0B",
      icon: "Crown",
      verses: "38:17-26",
      concepts: [
        {
          term: "اصْبِرْ عَلَىٰ مَا يَقُولُونَ",
          transliteration: "Isbir 'ala ma Yaqooloon",
          meaning: { en: "Be patient over what they say", ur: "جو وہ کہتے ہیں اس پر صبر کرو" },
          explanation: { en: "Command to patience - Prophet consoled with stories of previous prophets' patience.", ur: "صبر کا حکم - نبی ﷺ کو پچھلے انبیاء کے صبر کے قصوں سے تسلی۔" },
          verseRef: "38:17"
        },
        {
          term: "وَاذْكُرْ عَبْدَنَا دَاوُودَ ذَا الْأَيْدِ",
          transliteration: "Wadhkur 'Abdana Dawooda dhal-Ayd",
          meaning: { en: "Remember Our servant Dawud, possessor of strength", ur: "ہمارے بندے داؤد کو یاد کرو جو قوت والا تھا" },
          explanation: { en: "Dawud introduced as Allah's servant with 'ayd' - strength in worship, body, and kingdom.", ur: "داؤد کو اللہ کے بندے کے طور پر 'اید' (قوت) کے ساتھ متعارف کرایا - عبادت، جسم اور حکومت میں قوت۔" },
          verseRef: "38:17",
          keyPhrase: true
        },
        {
          term: "إِنَّهُ أَوَّابٌ",
          transliteration: "Innahu Awwab",
          meaning: { en: "Indeed, he was one who repeatedly turned [to Allah]", ur: "بے شک وہ بہت رجوع کرنے والا تھا" },
          explanation: { en: "Awwab - one who constantly returns to Allah in repentance. Key characteristic of Dawud.", ur: "اوّاب - جو مسلسل توبہ کرتے ہوئے اللہ کی طرف لوٹتا ہے۔ داؤد کی کلیدی خصوصیت۔" },
          verseRef: "38:17"
        },
        {
          term: "إِنَّا سَخَّرْنَا الْجِبَالَ مَعَهُ",
          transliteration: "Inna Sakhkharna-l-Jibala ma'ahu",
          meaning: { en: "We subjected the mountains with him", ur: "ہم نے پہاڑوں کو اس کے ساتھ مسخر کیا" },
          explanation: { en: "Mountains glorified Allah along with Dawud - miraculous praise at evening and sunrise.", ur: "پہاڑ داؤد کے ساتھ اللہ کی تسبیح کرتے تھے - شام اور صبح معجزانہ تسبیح۔" },
          verseRef: "38:18"
        },
        {
          term: "يُسَبِّحْنَ بِالْعَشِيِّ وَالْإِشْرَاقِ",
          transliteration: "Yusabbihna bil-'Ashiyyi wal-Ishraaq",
          meaning: { en: "Glorifying [Allah] in the evening and sunrise", ur: "شام اور صبح تسبیح کرتے تھے" },
          explanation: { en: "Times of Dawud's worship - evening and early morning. Mountains joined in praise.", ur: "داؤد کی عبادت کے اوقات - شام اور صبح سویرے۔ پہاڑ تسبیح میں شامل۔" },
          verseRef: "38:18"
        },
        {
          term: "وَالطَّيْرَ مَحْشُورَةً",
          transliteration: "Wat-Tayra Mahshooratun",
          meaning: { en: "And the birds assembled", ur: "اور پرندے جمع تھے" },
          explanation: { en: "Birds gathered to praise Allah with Dawud - all creation joining in worship.", ur: "پرندے داؤد کے ساتھ اللہ کی تسبیح کے لیے جمع ہوتے - ساری مخلوق عبادت میں شامل۔" },
          verseRef: "38:19"
        },
        {
          term: "كُلٌّ لَّهُ أَوَّابٌ",
          transliteration: "Kullun lahu Awwab",
          meaning: { en: "All were returning [to Allah in praise]", ur: "سب اس کی طرف رجوع کرنے والے تھے" },
          explanation: { en: "Mountains and birds all joined Dawud in being 'awwab' - frequently turning to Allah.", ur: "پہاڑ اور پرندے سب داؤد کے ساتھ 'اوّاب' بن گئے - اللہ کی طرف بار بار لوٹنے والے۔" },
          verseRef: "38:19"
        },
        {
          term: "وَشَدَدْنَا مُلْكَهُ",
          transliteration: "Wa Shadadna Mulkahu",
          meaning: { en: "And We strengthened his kingdom", ur: "اور ہم نے اس کی سلطنت مضبوط کی" },
          explanation: { en: "Allah established Dawud's rule firmly - strong governance and authority.", ur: "اللہ نے داؤد کی حکومت مضبوطی سے قائم کی - مضبوط حکمرانی اور اختیار۔" },
          verseRef: "38:20"
        },
        {
          term: "وَآتَيْنَاهُ الْحِكْمَةَ وَفَصْلَ الْخِطَابِ",
          transliteration: "Wa Aataynahu-l-Hikmata wa Fasl-al-Khitab",
          meaning: { en: "And We gave him wisdom and decisive speech", ur: "اور ہم نے اسے حکمت اور فیصلہ کن بات دی" },
          explanation: { en: "Two gifts: hikmah (wisdom) and fasl al-khitab (decisive judgment in speech/ruling).", ur: "دو تحفے: حکمت اور فصل الخطاب (بات/فیصلے میں قطعیت)۔" },
          verseRef: "38:20",
          keyPhrase: true
        },
        {
          term: "نَبَأُ الْخَصْمِ إِذْ تَسَوَّرُوا الْمِحْرَابَ",
          transliteration: "Naba'-ul-Khasmi idh Tasawwaru-l-Mihrab",
          meaning: { en: "The news of the disputants when they climbed over the sanctuary wall", ur: "جھگڑنے والوں کی خبر جب وہ محراب کی دیوار سے چڑھ آئے" },
          explanation: { en: "Two litigants climbed over Dawud's prayer chamber wall - sudden test of his judgment.", ur: "دو فریق داؤد کے محراب کی دیوار سے چڑھ آئے - ان کے فیصلے کی اچانک آزمائش۔" },
          verseRef: "38:21"
        },
        {
          term: "إِذْ دَخَلُوا عَلَىٰ دَاوُودَ فَفَزِعَ مِنْهُمْ",
          transliteration: "Idh Dakhaloo 'ala Dawooda fa-Fazi'a minhum",
          meaning: { en: "When they entered upon Dawud and he was alarmed by them", ur: "جب وہ داؤد کے پاس آئے تو وہ ان سے گھبرا گیا" },
          explanation: { en: "Dawud was startled by their sudden entry - unusual approach indicated test.", ur: "داؤد ان کے اچانک داخلے سے گھبرا گیا - غیر معمولی طریقہ آزمائش کی طرف اشارہ تھا۔" },
          verseRef: "38:22"
        },
        {
          term: "خَصْمَانِ بَغَىٰ بَعْضُنَا عَلَىٰ بَعْضٍ",
          transliteration: "Khasmani Bagha Ba'duna 'ala Ba'd",
          meaning: { en: "Two disputants, one has wronged the other", ur: "دو فریق، ایک نے دوسرے پر زیادتی کی" },
          explanation: { en: "They presented their case - one claiming injustice from the other.", ur: "انہوں نے اپنا معاملہ پیش کیا - ایک نے دوسرے سے ناانصافی کا دعویٰ کیا۔" },
          verseRef: "38:22"
        },
        {
          term: "إِنَّ هَٰذَا أَخِي لَهُ تِسْعٌ وَتِسْعُونَ نَعْجَةً",
          transliteration: "Inna Hadha Akhee lahu Tis'un wa Tis'oona Na'jah",
          meaning: { en: "This is my brother, he has ninety-nine ewes", ur: "یہ میرا بھائی ہے، اس کی ننانوے دنبیاں ہیں" },
          explanation: { en: "The parable: one has 99 sheep, the other has 1 - the rich one demanded the poor one's sheep.", ur: "تمثیل: ایک کے پاس 99 دنبیاں، دوسرے کے پاس 1 - امیر نے غریب کی دنبی مانگی۔" },
          verseRef: "38:23"
        },
        {
          term: "وَلِيَ نَعْجَةٌ وَاحِدَةٌ",
          transliteration: "Wa Liya Na'jatun Wahidah",
          meaning: { en: "And I have one ewe", ur: "اور میری ایک دنبی ہے" },
          explanation: { en: "Stark inequality - 99 vs 1 - illustrating greed of the wealthy.", ur: "واضح عدم مساوات - 99 بمقابلہ 1 - امیروں کی لالچ کی تصویر۔" },
          verseRef: "38:23"
        },
        {
          term: "أَكْفِلْنِيهَا",
          transliteration: "Akfilneeha",
          meaning: { en: "Give it to me", ur: "وہ مجھے دے دے" },
          explanation: { en: "The demand - not satisfied with 99, wanting the poor man's only sheep.", ur: "مطالبہ - 99 سے مطمئن نہیں، غریب کی اکلوتی دنبی چاہتے ہیں۔" },
          verseRef: "38:23"
        },
        {
          term: "وَعَزَّنِي فِي الْخِطَابِ",
          transliteration: "Wa 'Azzanee fil-Khitab",
          meaning: { en: "And he overpowered me in speech", ur: "اور اس نے مجھ پر بات میں غلبہ پایا" },
          explanation: { en: "The rich one used eloquent speech to pressure the poor - power dynamics in disputes.", ur: "امیر نے فصیح گفتگو سے غریب پر دباؤ ڈالا - تنازعات میں طاقت کی حرکیات۔" },
          verseRef: "38:23"
        },
        {
          term: "لَقَدْ ظَلَمَكَ بِسُؤَالِ نَعْجَتِكَ إِلَىٰ نِعَاجِهِ",
          transliteration: "Laqad Dhalamaka bi-Su'aali Na'jatika ila Ni'ajihi",
          meaning: { en: "He has wronged you by demanding your ewe to add to his ewes", ur: "اس نے تیری دنبی اپنی دنبیوں میں شامل کرنے کا مطالبہ کرکے تجھ پر ظلم کیا" },
          explanation: { en: "Dawud's immediate judgment - declaring the demand as oppression.", ur: "داؤد کا فوری فیصلہ - مطالبے کو ظلم قرار دینا۔" },
          verseRef: "38:24"
        },
        {
          term: "وَإِنَّ كَثِيرًا مِّنَ الْخُلَطَاءِ لَيَبْغِي بَعْضُهُمْ عَلَىٰ بَعْضٍ",
          transliteration: "Wa Inna Katheeran min-al-Khulata'i la-Yabghee Ba'duhum 'ala Ba'd",
          meaning: { en: "Indeed, many partners oppress one another", ur: "بے شک بہت سے شراکت دار ایک دوسرے پر ظلم کرتے ہیں" },
          explanation: { en: "Universal observation - business partners often wrong each other.", ur: "آفاقی مشاہدہ - کاروباری شراکت دار اکثر ایک دوسرے پر ظلم کرتے ہیں۔" },
          verseRef: "38:24"
        },
        {
          term: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَقَلِيلٌ مَّا هُمْ",
          transliteration: "Illa-lladheena Aamanu wa 'Amilu-s-Salihaati wa Qaleelun ma Hum",
          meaning: { en: "Except those who believe and do righteous deeds - and how few are they", ur: "مگر وہ جو ایمان لائیں اور نیک عمل کریں - اور وہ کتنے کم ہیں" },
          explanation: { en: "Exception - believers who do good don't oppress, but they are few.", ur: "استثناء - نیک ایمان والے ظلم نہیں کرتے، مگر وہ کم ہیں۔" },
          verseRef: "38:24"
        },
        {
          term: "وَظَنَّ دَاوُودُ أَنَّمَا فَتَنَّاهُ",
          transliteration: "Wa Dhanna Dawoodu annama Fatannahu",
          meaning: { en: "And Dawud realized that We had tested him", ur: "اور داؤد سمجھ گیا کہ ہم نے اسے آزمایا ہے" },
          explanation: { en: "Dawud understood the case was a test - moment of self-realization.", ur: "داؤد سمجھ گیا کہ معاملہ آزمائش تھی - خود شناسی کا لمحہ۔" },
          verseRef: "38:24"
        },
        {
          term: "فَاسْتَغْفَرَ رَبَّهُ وَخَرَّ رَاكِعًا وَأَنَابَ",
          transliteration: "Fa-staghfara Rabbahu wa Kharra Raaki'an wa Anab",
          meaning: { en: "So he asked forgiveness of his Lord and fell down bowing and turned in repentance", ur: "تو اس نے اپنے رب سے مغفرت مانگی اور رکوع میں گر پڑا اور رجوع کیا" },
          explanation: { en: "Dawud's immediate response - seeking forgiveness, prostrating, returning to Allah.", ur: "داؤد کا فوری ردعمل - مغفرت طلب کرنا، سجدہ کرنا، اللہ کی طرف رجوع کرنا۔" },
          verseRef: "38:24",
          keyPhrase: true
        },
        {
          term: "فَغَفَرْنَا لَهُ ذَٰلِكَ",
          transliteration: "Fa-ghafarna lahu Dhalika",
          meaning: { en: "So We forgave him that", ur: "تو ہم نے اسے معاف کر دیا" },
          explanation: { en: "Allah's immediate forgiveness - sincere repentance is always accepted.", ur: "اللہ کی فوری مغفرت - سچی توبہ ہمیشہ قبول ہوتی ہے۔" },
          verseRef: "38:25"
        },
        {
          term: "وَإِنَّ لَهُ عِندَنَا لَزُلْفَىٰ وَحُسْنَ مَآبٍ",
          transliteration: "Wa Inna lahu 'Indana la-Zulfa wa Husna Ma'ab",
          meaning: { en: "Indeed, he has nearness to Us and a good return", ur: "بے شک اس کے لیے ہمارے پاس قربت اور اچھا ٹھکانا ہے" },
          explanation: { en: "Dawud's status with Allah - closeness (zulfa) and excellent final destination.", ur: "اللہ کے نزدیک داؤد کا مقام - قربت (زلفیٰ) اور بہترین ٹھکانا۔" },
          verseRef: "38:25"
        },
        {
          term: "يَا دَاوُودُ إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ",
          transliteration: "Ya Dawoodu Inna Ja'alnaka Khaleefatan fil-Ard",
          meaning: { en: "O Dawud, We have made you a successor/ruler on earth", ur: "اے داؤد، ہم نے تجھے زمین میں خلیفہ بنایا" },
          explanation: { en: "Dawud appointed as khalifah - vicegerent and ruler with divine mandate.", ur: "داؤد کو خلیفہ مقرر کیا - الٰہی حکم سے نائب اور حکمران۔" },
          verseRef: "38:26",
          keyPhrase: true
        },
        {
          term: "فَاحْكُم بَيْنَ النَّاسِ بِالْحَقِّ",
          transliteration: "Fa-hkum Bayn-an-Nasi bil-Haqq",
          meaning: { en: "So judge between people with truth", ur: "تو لوگوں کے درمیان حق کے ساتھ فیصلہ کرو" },
          explanation: { en: "Command to rule with justice and truth - core responsibility of leadership.", ur: "عدل اور حق کے ساتھ حکومت کا حکم - قیادت کی بنیادی ذمہ داری۔" },
          verseRef: "38:26"
        },
        {
          term: "وَلَا تَتَّبِعِ الْهَوَىٰ فَيُضِلَّكَ عَن سَبِيلِ اللَّهِ",
          transliteration: "Wa la Tattabi'-il-Hawa fa-Yudillaka 'an Sabeelillah",
          meaning: { en: "And do not follow desire, lest it lead you astray from Allah's path", ur: "اور خواہش کی پیروی نہ کرو ورنہ وہ تمہیں اللہ کے راستے سے بھٹکا دے گی" },
          explanation: { en: "Warning against following personal desires in judgment - leads to deviation.", ur: "فیصلے میں ذاتی خواہشات کی پیروی سے تنبیہ - گمراہی کا سبب۔" },
          verseRef: "38:26"
        },
        {
          term: "إِنَّ الَّذِينَ يَضِلُّونَ عَن سَبِيلِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ",
          transliteration: "Inna-lladheena Yadilloona 'an Sabeelillahi lahum 'Adhabun Shadeed",
          meaning: { en: "Those who stray from Allah's path will have severe punishment", ur: "جو اللہ کے راستے سے بھٹکتے ہیں ان کے لیے سخت عذاب ہے" },
          explanation: { en: "Consequence of deviation - severe punishment awaits those who abandon divine guidance.", ur: "انحراف کا نتیجہ - الٰہی ہدایت چھوڑنے والوں کے لیے سخت سزا۔" },
          verseRef: "38:26"
        },
        {
          term: "بِمَا نَسُوا يَوْمَ الْحِسَابِ",
          transliteration: "Bima Nasoo Yawm-al-Hisab",
          meaning: { en: "Because they forgot the Day of Account", ur: "اس لیے کہ وہ حساب کا دن بھول گئے" },
          explanation: { en: "Root cause of deviation - forgetting accountability leads to following desires.", ur: "انحراف کی بنیادی وجہ - احتساب بھولنا خواہشات کی پیروی کا سبب بنتا ہے۔" },
          verseRef: "38:26"
        }
      ]
    },

    sulaymanStory: {
      name: "The Story of Sulayman",
      nameUr: "سلیمان کا قصہ",
      nameArabic: "قصة سليمان",
      color: "#10B981",
      icon: "Crown",
      verses: "38:30-40",
      concepts: [
        {
          term: "وَوَهَبْنَا لِدَاوُودَ سُلَيْمَانَ",
          transliteration: "Wa Wahabna li-Dawooda Sulayman",
          meaning: { en: "And We granted to Dawud, Sulayman", ur: "اور ہم نے داؤد کو سلیمان عطا کیا" },
          explanation: { en: "Sulayman was a gift to Dawud - continuing the prophetic lineage.", ur: "سلیمان داؤد کے لیے تحفہ تھا - نبوی سلسلے کا تسلسل۔" },
          verseRef: "38:30"
        },
        {
          term: "نِعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ",
          transliteration: "Ni'mal-'Abd Innahu Awwab",
          meaning: { en: "Excellent is the servant; indeed, he was one repeatedly turning [to Allah]", ur: "کیا اچھا بندہ ہے، بے شک وہ بہت رجوع کرنے والا تھا" },
          explanation: { en: "Same praise as Dawud - 'ni'mal-'abd' (excellent servant) and 'awwab' (constantly returning to Allah).", ur: "داؤد جیسی تعریف - 'نعم العبد' (بہترین بندہ) اور 'اوّاب' (مسلسل اللہ کی طرف لوٹنے والا)۔" },
          verseRef: "38:30",
          keyPhrase: true
        },
        {
          term: "إِذْ عُرِضَ عَلَيْهِ بِالْعَشِيِّ الصَّافِنَاتُ الْجِيَادُ",
          transliteration: "Idh 'Urida 'alayhi bil-'Ashiyyi-s-Safinat-ul-Jiyad",
          meaning: { en: "When there were displayed before him in the evening the poised horses", ur: "جب شام کو اس کے سامنے عمدہ تیز گھوڑے پیش کیے گئے" },
          explanation: { en: "Fine horses were shown to Sulayman - standing on three legs, swift runners.", ur: "سلیمان کے سامنے عمدہ گھوڑے پیش کیے گئے - تین ٹانگوں پر کھڑے، تیز دوڑنے والے۔" },
          verseRef: "38:31"
        },
        {
          term: "إِنِّي أَحْبَبْتُ حُبَّ الْخَيْرِ عَن ذِكْرِ رَبِّي",
          transliteration: "Innee Ahbabtu Hubb-al-Khayri 'an Dhikri Rabbee",
          meaning: { en: "Indeed, I loved the love of good [things] over the remembrance of my Lord", ur: "میں نے نیکی کی محبت کو اپنے رب کی یاد پر ترجیح دے دی" },
          explanation: { en: "Sulayman's realization - worldly good distracted him from remembering Allah.", ur: "سلیمان کی خبرداری - دنیاوی بھلائی نے اسے اللہ کی یاد سے غافل کر دیا۔" },
          verseRef: "38:32"
        },
        {
          term: "حَتَّىٰ تَوَارَتْ بِالْحِجَابِ",
          transliteration: "Hatta Tawarat bil-Hijab",
          meaning: { en: "Until [the sun] disappeared behind the veil [of the horizon]", ur: "یہاں تک کہ (سورج) پردے میں چھپ گیا" },
          explanation: { en: "He was distracted until sunset - missing the time for worship.", ur: "غروب آفتاب تک مشغول رہا - عبادت کا وقت نکل گیا۔" },
          verseRef: "38:32"
        },
        {
          term: "رُدُّوهَا عَلَيَّ",
          transliteration: "Ruddooha 'Alayya",
          meaning: { en: "Return them to me", ur: "انہیں میرے پاس واپس لاؤ" },
          explanation: { en: "Sulayman commanded the horses be brought back.", ur: "سلیمان نے حکم دیا کہ گھوڑے واپس لاؤ۔" },
          verseRef: "38:33"
        },
        {
          term: "فَطَفِقَ مَسْحًا بِالسُّوقِ وَالْأَعْنَاقِ",
          transliteration: "Fa-Tafiqa Mashan bis-Sooqi wal-A'naq",
          meaning: { en: "And he began to pass his hand over their legs and necks", ur: "اور اس نے ان کی ٹانگوں اور گردنوں پر ہاتھ پھیرنا شروع کیا" },
          explanation: { en: "Some say he stroked them lovingly; others say he sacrificed them to remove the distraction.", ur: "بعض کہتے ہیں اس نے پیار سے ہاتھ پھیرا؛ دوسرے کہتے ہیں اس نے توجہ ہٹانے کے لیے قربان کیے۔" },
          verseRef: "38:33"
        },
        {
          term: "وَلَقَدْ فَتَنَّا سُلَيْمَانَ",
          transliteration: "Wa Laqad Fatanna Sulayman",
          meaning: { en: "And We certainly tested Sulayman", ur: "اور ہم نے سلیمان کو ضرور آزمایا" },
          explanation: { en: "Sulayman was also tested - even great prophets face trials.", ur: "سلیمان کو بھی آزمایا گیا - عظیم انبیاء کو بھی آزمائشوں کا سامنا ہوتا ہے۔" },
          verseRef: "38:34"
        },
        {
          term: "وَأَلْقَيْنَا عَلَىٰ كُرْسِيِّهِ جَسَدًا",
          transliteration: "Wa Alqayna 'ala Kursiyyihi Jasadan",
          meaning: { en: "And We placed on his throne a body", ur: "اور ہم نے اس کے تخت پر ایک جسد رکھ دیا" },
          explanation: { en: "A body was placed on his throne - various interpretations of this trial.", ur: "اس کے تخت پر ایک جسد رکھا گیا - اس آزمائش کی مختلف تعبیرات۔" },
          verseRef: "38:34"
        },
        {
          term: "ثُمَّ أَنَابَ",
          transliteration: "Thumma Anab",
          meaning: { en: "Then he turned back [to Allah]", ur: "پھر اس نے رجوع کیا" },
          explanation: { en: "After the test, Sulayman returned to Allah - consistent pattern of prophetic repentance.", ur: "آزمائش کے بعد سلیمان نے اللہ کی طرف رجوع کیا - نبوی توبہ کا مسلسل نمونہ۔" },
          verseRef: "38:34"
        },
        {
          term: "قَالَ رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكًا",
          transliteration: "Qala Rabbi-ghfir Lee wa Hab Lee Mulkan",
          meaning: { en: "He said: My Lord, forgive me and grant me a kingdom", ur: "اس نے کہا: میرے رب، مجھے معاف کر اور مجھے ایسی سلطنت دے" },
          explanation: { en: "Sulayman's prayer - seeking forgiveness first, then asking for unique kingdom.", ur: "سلیمان کی دعا - پہلے مغفرت، پھر بے مثال سلطنت مانگی۔" },
          verseRef: "38:35"
        },
        {
          term: "لَّا يَنبَغِي لِأَحَدٍ مِّن بَعْدِي",
          transliteration: "La Yanbaghee li-Ahadin min Ba'dee",
          meaning: { en: "Such as will not belong to anyone after me", ur: "جو میرے بعد کسی کو نہ ملے" },
          explanation: { en: "Request for unique, unparalleled kingdom - not from greed but divine purpose.", ur: "بے مثال سلطنت کی درخواست - لالچ سے نہیں بلکہ الٰہی مقصد سے۔" },
          verseRef: "38:35",
          keyPhrase: true
        },
        {
          term: "إِنَّكَ أَنتَ الْوَهَّابُ",
          transliteration: "Innaka Ant-al-Wahhab",
          meaning: { en: "Indeed, You are the Bestower", ur: "بے شک تو بہت عطا کرنے والا ہے" },
          explanation: { en: "Acknowledging Allah as Al-Wahhab - the One who gives abundantly.", ur: "اللہ کو الوہاب مان کر - وہ جو بے حد عطا کرتا ہے۔" },
          verseRef: "38:35"
        },
        {
          term: "فَسَخَّرْنَا لَهُ الرِّيحَ تَجْرِي بِأَمْرِهِ",
          transliteration: "Fa-sakhkharna lahu-r-Reeha Tajree bi-Amrihi",
          meaning: { en: "So We subjected to him the wind, blowing by his command", ur: "تو ہم نے اس کے لیے ہوا مسخر کر دی جو اس کے حکم سے چلتی تھی" },
          explanation: { en: "Wind controlled by Sulayman - traveled wherever he directed it.", ur: "ہوا سلیمان کے تابع - جہاں اس نے چاہا وہاں چلی۔" },
          verseRef: "38:36"
        },
        {
          term: "رُخَاءً حَيْثُ أَصَابَ",
          transliteration: "Rukhaa'an Haythu Asab",
          meaning: { en: "Gently wherever he directed", ur: "نرمی سے جہاں وہ چاہتا" },
          explanation: { en: "The wind was gentle (rukhaa'), not destructive - controlled power.", ur: "ہوا نرم (رخاء) تھی، تباہ کن نہیں - قابو میں طاقت۔" },
          verseRef: "38:36"
        },
        {
          term: "وَالشَّيَاطِينَ كُلَّ بَنَّاءٍ وَغَوَّاصٍ",
          transliteration: "Wash-Shayateena Kulla Bannaa'in wa Ghawwas",
          meaning: { en: "And the devils - every builder and diver", ur: "اور شیاطین - ہر معمار اور غوطہ خور" },
          explanation: { en: "Jinn subjected to Sulayman - some building, some diving for pearls.", ur: "جنات سلیمان کے تابع - کچھ تعمیر کرتے، کچھ موتیوں کے لیے غوطہ لگاتے۔" },
          verseRef: "38:37"
        },
        {
          term: "وَآخَرِينَ مُقَرَّنِينَ فِي الْأَصْفَادِ",
          transliteration: "Wa Aakhareena Muqarraneena fil-Asfad",
          meaning: { en: "And others bound together in chains", ur: "اور دوسرے زنجیروں میں جکڑے ہوئے" },
          explanation: { en: "Some jinn were restrained in chains - rebellious ones kept under control.", ur: "بعض جنات زنجیروں میں جکڑے - سرکش قابو میں رکھے گئے۔" },
          verseRef: "38:38"
        },
        {
          term: "هَٰذَا عَطَاؤُنَا فَامْنُنْ أَوْ أَمْسِكْ بِغَيْرِ حِسَابٍ",
          transliteration: "Hadha 'Ataa'una fa-mnun aw Amsik bi-Ghayri Hisab",
          meaning: { en: "This is Our gift, so grant or withhold without account", ur: "یہ ہمارا عطیہ ہے، چاہو تو دو یا روکو، بے حساب ہے" },
          explanation: { en: "Complete freedom given to Sulayman - give or withhold from his kingdom freely.", ur: "سلیمان کو مکمل آزادی دی گئی - اپنی سلطنت سے دینا یا روکنا آزاد ہے۔" },
          verseRef: "38:39"
        },
        {
          term: "وَإِنَّ لَهُ عِندَنَا لَزُلْفَىٰ وَحُسْنَ مَآبٍ",
          transliteration: "Wa Inna lahu 'Indana la-Zulfa wa Husna Ma'ab",
          meaning: { en: "And indeed, for him is nearness to Us and a good return", ur: "اور بے شک اس کے لیے ہمارے پاس قربت اور اچھا ٹھکانا ہے" },
          explanation: { en: "Same honor as Dawud - closeness to Allah and excellent final destination.", ur: "داؤد جیسا اعزاز - اللہ سے قربت اور بہترین ٹھکانا۔" },
          verseRef: "38:40"
        }
      ]
    },

    ayyubStory: {
      name: "The Story of Ayyub",
      nameUr: "ایوب کا قصہ",
      nameArabic: "قصة أيوب",
      color: "#06B6D4",
      icon: "Heart",
      verses: "38:41-44",
      concepts: [
        {
          term: "وَاذْكُرْ عَبْدَنَا أَيُّوبَ",
          transliteration: "Wadhkur 'Abdana Ayyub",
          meaning: { en: "And remember Our servant Ayyub", ur: "اور ہمارے بندے ایوب کو یاد کرو" },
          explanation: { en: "Ayyub introduced as Allah's servant - model of patience in suffering.", ur: "ایوب کو اللہ کے بندے کے طور پر متعارف - مصائب میں صبر کا نمونہ۔" },
          verseRef: "38:41",
          keyPhrase: true
        },
        {
          term: "إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الشَّيْطَانُ بِنُصْبٍ وَعَذَابٍ",
          transliteration: "Idh Nada Rabbahu Annee Massaniya-sh-Shaytanu bi-Nusbin wa 'Adhab",
          meaning: { en: "When he called to his Lord: Satan has touched me with hardship and torment", ur: "جب اس نے اپنے رب کو پکارا: شیطان نے مجھے تکلیف اور عذاب میں مبتلا کیا" },
          explanation: { en: "Ayyub's call to Allah - attributing his affliction to Satan's touch, maintaining adab with Allah.", ur: "ایوب کی اللہ سے فریاد - اپنی مصیبت شیطان کی طرف منسوب، اللہ کے ساتھ ادب برقرار۔" },
          verseRef: "38:41"
        },
        {
          term: "ارْكُضْ بِرِجْلِكَ",
          transliteration: "Urkud bi-Rijlika",
          meaning: { en: "Strike with your foot", ur: "اپنا پاؤں مارو" },
          explanation: { en: "Allah's command to Ayyub - strike the ground to release healing water.", ur: "اللہ کا ایوب کو حکم - زمین پر پاؤں مارو تاکہ شفا کا پانی نکلے۔" },
          verseRef: "38:42"
        },
        {
          term: "هَٰذَا مُغْتَسَلٌ بَارِدٌ وَشَرَابٌ",
          transliteration: "Hadha Mughtasalun Baridun wa Sharab",
          meaning: { en: "This is a cool spring for bathing and drinking", ur: "یہ نہانے اور پینے کا ٹھنڈا پانی ہے" },
          explanation: { en: "Miraculous spring emerged - cool water for washing (healing) and drinking.", ur: "معجزانہ چشمہ نکلا - نہانے (شفا) اور پینے کا ٹھنڈا پانی۔" },
          verseRef: "38:42"
        },
        {
          term: "وَوَهَبْنَا لَهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ",
          transliteration: "Wa Wahabna lahu Ahlahu wa Mithlahum ma'ahum",
          meaning: { en: "And We granted him his family and the like of them with them", ur: "اور ہم نے اسے اس کا گھرانا اور اتنے ہی اور ان کے ساتھ دے دیے" },
          explanation: { en: "Allah restored his family and doubled it - reward for patience.", ur: "اللہ نے اس کا گھرانا بحال کیا اور دگنا کر دیا - صبر کا انعام۔" },
          verseRef: "38:43"
        },
        {
          term: "رَحْمَةً مِّنَّا وَذِكْرَىٰ لِأُولِي الْأَلْبَابِ",
          transliteration: "Rahmatan Minna wa Dhikra li-Ulil-Albab",
          meaning: { en: "As mercy from Us and a reminder for those of understanding", ur: "ہماری طرف سے رحمت اور عقلمندوں کے لیے یاد دہانی" },
          explanation: { en: "Ayyub's restoration was divine mercy and lesson for people of intellect.", ur: "ایوب کی بحالی الٰہی رحمت اور عقلمندوں کے لیے سبق تھی۔" },
          verseRef: "38:43"
        },
        {
          term: "وَخُذْ بِيَدِكَ ضِغْثًا",
          transliteration: "Wa Khudh bi-Yadika Dighthan",
          meaning: { en: "And take in your hand a bunch [of grass]", ur: "اور اپنے ہاتھ میں ایک مٹھی (گھاس) لو" },
          explanation: { en: "Solution for Ayyub's oath - he had sworn to strike his wife, so Allah provided easy fulfillment.", ur: "ایوب کی قسم کا حل - اس نے بیوی کو مارنے کی قسم کھائی تھی، اللہ نے آسان طریقہ مہیا کیا۔" },
          verseRef: "38:44"
        },
        {
          term: "فَاضْرِب بِّهِ وَلَا تَحْنَثْ",
          transliteration: "Fa-drib bihi wa la Tahnath",
          meaning: { en: "Strike with it and do not break your oath", ur: "اس سے مارو اور قسم نہ توڑو" },
          explanation: { en: "Merciful solution - symbolic strike with grass bundle to fulfill oath without harm.", ur: "رحمت والا حل - قسم پوری کرنے کے لیے گھاس کے گچھے سے علامتی ضرب بغیر نقصان۔" },
          verseRef: "38:44"
        },
        {
          term: "إِنَّا وَجَدْنَاهُ صَابِرًا",
          transliteration: "Inna Wajadnahu Sabiran",
          meaning: { en: "Indeed, We found him patient", ur: "بے شک ہم نے اسے صبر کرنے والا پایا" },
          explanation: { en: "Allah's testimony about Ayyub - found to be truly patient through all trials.", ur: "ایوب کے بارے میں اللہ کی گواہی - تمام آزمائشوں میں حقیقی صبر کرنے والا پایا۔" },
          verseRef: "38:44",
          keyPhrase: true
        },
        {
          term: "نِّعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ",
          transliteration: "Ni'mal-'Abd Innahu Awwab",
          meaning: { en: "Excellent is the servant; indeed, he was one repeatedly turning [to Allah]", ur: "کیا اچھا بندہ ہے، بے شک وہ بہت رجوع کرنے والا تھا" },
          explanation: { en: "Same praise given to Ayyub - excellent servant and constantly returning to Allah.", ur: "ایوب کو بھی وہی تعریف - بہترین بندہ اور مسلسل اللہ کی طرف لوٹنے والا۔" },
          verseRef: "38:44"
        }
      ]
    },

    otherProphets: {
      name: "Other Prophets Mentioned",
      nameUr: "دیگر مذکور انبیاء",
      nameArabic: "أنبياء آخرون",
      color: "#A855F7",
      icon: "Star",
      verses: "38:45-48",
      concepts: [
        {
          term: "وَاذْكُرْ عِبَادَنَا إِبْرَاهِيمَ وَإِسْحَاقَ وَيَعْقُوبَ",
          transliteration: "Wadhkur 'Ibadana Ibrahima wa Ishaqa wa Ya'qoob",
          meaning: { en: "And remember Our servants Ibrahim, Ishaq, and Ya'qub", ur: "اور ہمارے بندوں ابراہیم، اسحاق اور یعقوب کو یاد کرو" },
          explanation: { en: "Three generations of prophets mentioned together - grandfather, father, son.", ur: "تین نسلوں کے انبیاء ایک ساتھ - دادا، باپ، بیٹا۔" },
          verseRef: "38:45"
        },
        {
          term: "أُولِي الْأَيْدِي وَالْأَبْصَارِ",
          transliteration: "Ulil-Aydee wal-Absar",
          meaning: { en: "Possessors of strength and vision", ur: "قوت اور بصیرت والے" },
          explanation: { en: "Praised for 'ayd' (strength in worship/action) and 'absar' (insight/vision).", ur: "'اید' (عبادت/عمل میں قوت) اور 'ابصار' (بصیرت/نظر) کے لیے تعریف۔" },
          verseRef: "38:45"
        },
        {
          term: "إِنَّا أَخْلَصْنَاهُم بِخَالِصَةٍ ذِكْرَى الدَّارِ",
          transliteration: "Inna Akhlasnahum bi-Khalisatin Dhikra-d-Dar",
          meaning: { en: "We chose them for an exclusive quality - remembrance of the [final] abode", ur: "ہم نے انہیں ایک خالص صفت کے لیے چنا - آخرت کی یاد" },
          explanation: { en: "They were distinguished by constant remembrance of the Hereafter.", ur: "وہ آخرت کی مسلسل یاد سے ممتاز تھے۔" },
          verseRef: "38:46"
        },
        {
          term: "وَإِنَّهُمْ عِندَنَا لَمِنَ الْمُصْطَفَيْنَ الْأَخْيَارِ",
          transliteration: "Wa Innahum 'Indana la-Minal-Mustafayn-al-Akhyar",
          meaning: { en: "And indeed they are, to Us, among the chosen, the outstanding", ur: "اور بے شک وہ ہمارے نزدیک چنیدہ اور بہترین میں سے ہیں" },
          explanation: { en: "Highest praise - selected (mustafa) and best (akhyar) in Allah's sight.", ur: "بلند ترین تعریف - اللہ کی نظر میں چنیدہ (مصطفیٰ) اور بہترین (اخیار)۔" },
          verseRef: "38:47"
        },
        {
          term: "وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ",
          transliteration: "Wadhkur Isma'eela wal-Yasa'a wa Dhal-Kifl",
          meaning: { en: "And remember Ismail, Elisha, and Dhul-Kifl", ur: "اور اسماعیل، الیسع اور ذوالکفل کو یاد کرو" },
          explanation: { en: "Three more prophets mentioned - Ismail, Al-Yasa (Elisha), and Dhul-Kifl.", ur: "تین مزید انبیاء کا ذکر - اسماعیل، الیسع اور ذوالکفل۔" },
          verseRef: "38:48"
        },
        {
          term: "وَكُلٌّ مِّنَ الْأَخْيَارِ",
          transliteration: "Wa Kullun min-al-Akhyar",
          meaning: { en: "And all are among the outstanding", ur: "اور سب بہترین لوگوں میں سے ہیں" },
          explanation: { en: "All these prophets are among the best of humanity.", ur: "یہ سب انبیاء انسانیت کے بہترین لوگوں میں سے ہیں۔" },
          verseRef: "38:48"
        }
      ]
    },

    paradiseDescription: {
      name: "Description of Paradise",
      nameUr: "جنت کا بیان",
      nameArabic: "وصف الجنة",
      color: "#22C55E",
      icon: "Sparkles",
      verses: "38:49-54",
      concepts: [
        {
          term: "هَٰذَا ذِكْرٌ",
          transliteration: "Hadha Dhikr",
          meaning: { en: "This is a reminder", ur: "یہ ایک یاد دہانی ہے" },
          explanation: { en: "Transition - the previous stories serve as dhikr (reminder) for believers.", ur: "تبدیلی - پچھلے قصے مومنوں کے لیے ذکر (یاد دہانی) کا کام کرتے ہیں۔" },
          verseRef: "38:49"
        },
        {
          term: "وَإِنَّ لِلْمُتَّقِينَ لَحُسْنَ مَآبٍ",
          transliteration: "Wa Inna lil-Muttaqeena la-Husna Ma'ab",
          meaning: { en: "And indeed, for the righteous is a good return", ur: "اور بے شک متقیوں کے لیے اچھا ٹھکانا ہے" },
          explanation: { en: "Promise for the muttaqeen (God-conscious) - excellent final destination.", ur: "متقیوں (خدا ترس) کے لیے وعدہ - بہترین ٹھکانا۔" },
          verseRef: "38:49"
        },
        {
          term: "جَنَّاتِ عَدْنٍ مُّفَتَّحَةً لَّهُمُ الْأَبْوَابُ",
          transliteration: "Jannati 'Adnin Mufattahatan lahum-ul-Abwab",
          meaning: { en: "Gardens of perpetual residence, with doors opened for them", ur: "ہمیشہ رہنے کے باغات، ان کے لیے دروازے کھلے ہوئے" },
          explanation: { en: "Gardens of Eden with gates already open - welcoming the righteous.", ur: "عدن کے باغات دروازے پہلے سے کھلے - نیکوکاروں کا استقبال۔" },
          verseRef: "38:50"
        },
        {
          term: "مُتَّكِئِينَ فِيهَا يَدْعُونَ فِيهَا بِفَاكِهَةٍ كَثِيرَةٍ وَشَرَابٍ",
          transliteration: "Muttaki'eena Feeha Yad'oona Feeha bi-Fakihatin Katheeratin wa Sharab",
          meaning: { en: "Reclining therein, calling for much fruit and drink", ur: "اس میں تکیہ لگائے بیٹھے، بہت سے پھلوں اور مشروبات کی فرمائش کرتے ہوئے" },
          explanation: { en: "Comfortable reclining, abundant fruits and drinks at their call.", ur: "آرام سے تکیہ لگائے، بلانے پر بے شمار پھل اور مشروبات۔" },
          verseRef: "38:51"
        },
        {
          term: "وَعِندَهُمْ قَاصِرَاتُ الطَّرْفِ أَتْرَابٌ",
          transliteration: "Wa 'Indahum Qasiraat-ut-Tarfi Atrab",
          meaning: { en: "And with them will be women limiting their glances, of equal age", ur: "اور ان کے پاس نگاہیں جھکائے ہم عمر عورتیں ہوں گی" },
          explanation: { en: "Companions with modest gazes, all of same age - perfect companions.", ur: "نگاہیں جھکائے ہم عمر ساتھی - کامل رفیقائیں۔" },
          verseRef: "38:52"
        },
        {
          term: "هَٰذَا مَا تُوعَدُونَ لِيَوْمِ الْحِسَابِ",
          transliteration: "Hadha ma Too'adoona li-Yawm-il-Hisab",
          meaning: { en: "This is what you are promised for the Day of Account", ur: "یہ ہے جس کا تم سے حساب کے دن کا وعدہ کیا جاتا ہے" },
          explanation: { en: "Confirmation - these rewards are promised for the Day of Judgment.", ur: "تصدیق - یہ انعامات یومِ حساب کے لیے وعدہ ہیں۔" },
          verseRef: "38:53"
        },
        {
          term: "إِنَّ هَٰذَا لَرِزْقُنَا مَا لَهُ مِن نَّفَادٍ",
          transliteration: "Inna Hadha la-Rizquna ma lahu min Nafad",
          meaning: { en: "Indeed, this is Our provision, for it there is no depletion", ur: "بے شک یہ ہمارا رزق ہے جو کبھی ختم نہ ہوگا" },
          explanation: { en: "Allah's provision in Paradise - never-ending, inexhaustible.", ur: "جنت میں اللہ کا رزق - نہ ختم ہونے والا، لا محدود۔" },
          verseRef: "38:54",
          keyPhrase: true
        }
      ]
    },

    hellfireDescription: {
      name: "Description of Hellfire",
      nameUr: "جہنم کا بیان",
      nameArabic: "وصف جهنم",
      color: "#EF4444",
      icon: "AlertTriangle",
      verses: "38:55-64",
      concepts: [
        {
          term: "هَٰذَا وَإِنَّ لِلطَّاغِينَ لَشَرَّ مَآبٍ",
          transliteration: "Hadha wa Inna lit-Tagheena la-Sharra Ma'ab",
          meaning: { en: "This [is so]. And for the transgressors is an evil return", ur: "یہ (ایسا ہے)۔ اور سرکشوں کے لیے بُرا ٹھکانا ہے" },
          explanation: { en: "Contrast - those who transgress will have the worst destination.", ur: "تضاد - سرکشی کرنے والوں کا بدترین ٹھکانا ہوگا۔" },
          verseRef: "38:55"
        },
        {
          term: "جَهَنَّمَ يَصْلَوْنَهَا",
          transliteration: "Jahannama Yaslawnaha",
          meaning: { en: "Hell, which they will burn", ur: "جہنم جس میں وہ جلیں گے" },
          explanation: { en: "Jahannam - they will enter and experience its burning.", ur: "جہنم - وہ اس میں داخل ہوں گے اور اس کی جلن محسوس کریں گے۔" },
          verseRef: "38:56"
        },
        {
          term: "فَبِئْسَ الْمِهَادُ",
          transliteration: "Fa-bi'sal-Mihad",
          meaning: { en: "Wretched is the resting place", ur: "کیا بُرا بستر ہے" },
          explanation: { en: "Terrible bed/resting place - opposite of the comfort in Paradise.", ur: "خوفناک بستر/آرام گاہ - جنت کے آرام کا الٹ۔" },
          verseRef: "38:56"
        },
        {
          term: "هَٰذَا فَلْيَذُوقُوهُ حَمِيمٌ وَغَسَّاقٌ",
          transliteration: "Hadha fa-l-Yadhooqoohu Hameemun wa Ghassaq",
          meaning: { en: "This - so let them taste it - is scalding water and [foul] discharge", ur: "یہ ہے - چکھیں اسے - کھولتا پانی اور پیپ" },
          explanation: { en: "Two punishments: hameem (boiling water) and ghassaq (pus or freezing cold).", ur: "دو عذاب: حمیم (کھولتا پانی) اور غساق (پیپ یا شدید سردی)۔" },
          verseRef: "38:57"
        },
        {
          term: "وَآخَرُ مِن شَكْلِهِ أَزْوَاجٌ",
          transliteration: "Wa Aakharu min Shaklihi Azwaj",
          meaning: { en: "And other [punishments] of its kind in pairs", ur: "اور اسی قسم کے اور جوڑے دار عذاب" },
          explanation: { en: "Multiple paired punishments - various types of torment.", ur: "متعدد جوڑے دار عذاب - مختلف قسم کے عذاب۔" },
          verseRef: "38:58"
        },
        {
          term: "هَٰذَا فَوْجٌ مُّقْتَحِمٌ مَّعَكُمْ",
          transliteration: "Hadha Fawjun Muqtahimun ma'akum",
          meaning: { en: "This is a company bursting in with you", ur: "یہ ایک جماعت ہے جو تمہارے ساتھ گھسی آ رہی ہے" },
          explanation: { en: "Groups rushing into Hell together - leaders and followers.", ur: "جماعتیں مل کر جہنم میں گھسی آ رہی ہیں - قائدین اور پیروکار۔" },
          verseRef: "38:59"
        },
        {
          term: "لَا مَرْحَبًا بِهِمْ",
          transliteration: "La Marhaban Bihim",
          meaning: { en: "No welcome for them", ur: "ان کے لیے کوئی خوش آمدید نہیں" },
          explanation: { en: "No welcome - instead of hospitality, they receive curse and torment.", ur: "خوش آمدید نہیں - مہمان نوازی کی بجائے لعنت اور عذاب۔" },
          verseRef: "38:59"
        },
        {
          term: "إِنَّهُمْ صَالُو النَّارِ",
          transliteration: "Innahum Salu-n-Nar",
          meaning: { en: "Indeed, they will burn in the Fire", ur: "بے شک وہ آگ میں جلیں گے" },
          explanation: { en: "Confirmation of their entry into the Fire.", ur: "ان کے آگ میں داخلے کی تصدیق۔" },
          verseRef: "38:59"
        },
        {
          term: "قَالُوا بَلْ أَنتُمْ لَا مَرْحَبًا بِكُمْ",
          transliteration: "Qalu Bal Antum la Marhaban Bikum",
          meaning: { en: "They said: No, it is you - no welcome for you", ur: "انہوں نے کہا: نہیں، تمہیں خوش آمدید نہیں" },
          explanation: { en: "Followers blame leaders - mutual accusation in Hell.", ur: "پیروکار قائدین کو ذمہ دار ٹھہراتے ہیں - جہنم میں باہمی الزام تراشی۔" },
          verseRef: "38:60"
        },
        {
          term: "أَنتُمْ قَدَّمْتُمُوهُ لَنَا",
          transliteration: "Antum Qaddamtumoohu lana",
          meaning: { en: "You presented this to us", ur: "تم نے یہ ہمارے سامنے رکھا" },
          explanation: { en: "Followers accuse leaders of leading them to this fate.", ur: "پیروکار قائدین پر الزام لگاتے ہیں کہ انہوں نے اس انجام تک پہنچایا۔" },
          verseRef: "38:60"
        },
        {
          term: "فَبِئْسَ الْقَرَارُ",
          transliteration: "Fa-bi'sal-Qarar",
          meaning: { en: "Wretched is the settlement", ur: "کیا بُرا ٹھکانا ہے" },
          explanation: { en: "Terrible final abode - permanent misery.", ur: "خوفناک حتمی ٹھکانا - ابدی تکلیف۔" },
          verseRef: "38:60"
        },
        {
          term: "رَبَّنَا مَن قَدَّمَ لَنَا هَٰذَا فَزِدْهُ عَذَابًا ضِعْفًا فِي النَّارِ",
          transliteration: "Rabbana man Qaddama lana Hadha fa-Zidhu 'Adhaban Di'fan fin-Nar",
          meaning: { en: "Our Lord, whoever brought this upon us - increase for him double punishment in Fire", ur: "اے ہمارے رب، جس نے ہمیں اس میں مبتلا کیا اس کا عذاب آگ میں دگنا کر دے" },
          explanation: { en: "They pray against those who misled them - wanting double punishment for leaders.", ur: "وہ گمراہ کرنے والوں کے خلاف دعا کرتے ہیں - قائدین کے لیے دگنے عذاب کی خواہش۔" },
          verseRef: "38:61"
        },
        {
          term: "وَقَالُوا مَا لَنَا لَا نَرَىٰ رِجَالًا كُنَّا نَعُدُّهُم مِّنَ الْأَشْرَارِ",
          transliteration: "Wa Qalu ma Lana la Nara Rijalan Kunna Na'udduhum min-al-Ashrar",
          meaning: { en: "They will say: What is wrong with us that we do not see men we used to count among the worst?", ur: "وہ کہیں گے: ہمیں کیا ہو گیا کہ ہم ان لوگوں کو نہیں دیکھتے جنہیں ہم بُروں میں شمار کرتے تھے؟" },
          explanation: { en: "Disbelievers wonder where the believers are - whom they mocked as evil.", ur: "کافر حیران ہیں کہ مومن کہاں ہیں - جنہیں وہ بُرا سمجھتے اور مذاق اڑاتے تھے۔" },
          verseRef: "38:62"
        },
        {
          term: "أَتَّخَذْنَاهُمْ سِخْرِيًّا",
          transliteration: "Attakhadh-nahum Sikhriyyan",
          meaning: { en: "Did we take them in ridicule?", ur: "کیا ہم نے ان کا مذاق اڑایا تھا؟" },
          explanation: { en: "Realization that they mocked the righteous - now the righteous are not in Hell.", ur: "احساس ہوا کہ انہوں نے نیکوکاروں کا مذاق اڑایا - اب نیکوکار جہنم میں نہیں ہیں۔" },
          verseRef: "38:63"
        },
        {
          term: "أَمْ زَاغَتْ عَنْهُمُ الْأَبْصَارُ",
          transliteration: "Am Zaghat 'anhum-ul-Absar",
          meaning: { en: "Or have our eyes turned away from them?", ur: "یا ہماری نظریں ان سے پھر گئی ہیں؟" },
          explanation: { en: "Wondering if they simply can't see the believers - ironic spiritual blindness.", ur: "سوچتے ہیں شاید مومنوں کو دیکھ نہیں سکتے - ستم ظریف روحانی اندھاپن۔" },
          verseRef: "38:63"
        },
        {
          term: "إِنَّ ذَٰلِكَ لَحَقٌّ تَخَاصُمُ أَهْلِ النَّارِ",
          transliteration: "Inna Dhalika la-Haqqun Takhasumu Ahl-in-Nar",
          meaning: { en: "Indeed, that is truth - the quarreling of the people of Fire", ur: "بے شک یہ سچ ہے - دوزخ والوں کا جھگڑا" },
          explanation: { en: "Allah confirms this mutual accusation in Hell is reality - they will argue forever.", ur: "اللہ تصدیق کرتا ہے کہ جہنم میں یہ باہمی الزام تراشی حقیقت ہے - وہ ہمیشہ جھگڑتے رہیں گے۔" },
          verseRef: "38:64"
        }
      ]
    },

    propheticMission: {
      name: "The Prophet's Mission",
      nameUr: "نبی ﷺ کا مشن",
      nameArabic: "رسالة النبي",
      color: "#3B82F6",
      icon: "Book",
      verses: "38:65-70",
      concepts: [
        {
          term: "قُلْ إِنَّمَا أَنَا مُنذِرٌ",
          transliteration: "Qul Innama Ana Mundhir",
          meaning: { en: "Say: I am only a warner", ur: "کہو: میں صرف ڈرانے والا ہوں" },
          explanation: { en: "Prophet's role defined - a warner, not controller of people's choices.", ur: "نبی ﷺ کا کردار متعین - ڈرانے والا، نہ کہ لوگوں کے فیصلوں کا مالک۔" },
          verseRef: "38:65"
        },
        {
          term: "وَمَا مِنْ إِلَٰهٍ إِلَّا اللَّهُ الْوَاحِدُ الْقَهَّارُ",
          transliteration: "Wa ma min Ilahin illa-llahu-l-Wahid-ul-Qahhar",
          meaning: { en: "And there is no deity except Allah, the One, the Prevailing", ur: "اور اللہ کے سوا کوئی معبود نہیں، ایک، غالب" },
          explanation: { en: "Core message - Tawheed. Allah is One (Wahid) and Dominant (Qahhar).", ur: "بنیادی پیغام - توحید۔ اللہ ایک (واحد) اور غالب (قہار) ہے۔" },
          verseRef: "38:65",
          keyPhrase: true
        },
        {
          term: "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا",
          transliteration: "Rabb-us-Samawati wal-Ardi wa ma Baynahuma",
          meaning: { en: "Lord of the heavens and the earth and what is between them", ur: "آسمانوں اور زمین اور جو کچھ ان کے درمیان ہے سب کا رب" },
          explanation: { en: "Allah's sovereignty over all creation - heavens, earth, and everything between.", ur: "تمام مخلوقات پر اللہ کی حاکمیت - آسمان، زمین اور جو کچھ ان کے درمیان ہے۔" },
          verseRef: "38:66"
        },
        {
          term: "الْعَزِيزُ الْغَفَّارُ",
          transliteration: "Al-'Azeez-ul-Ghaffar",
          meaning: { en: "The Mighty, the Perpetual Forgiver", ur: "غالب، بار بار معاف کرنے والا" },
          explanation: { en: "Two divine names: 'Azeez (Mighty/Powerful) and Ghaffar (Repeatedly Forgiving).", ur: "دو الٰہی نام: عزیز (غالب/طاقتور) اور غفار (بار بار معاف کرنے والا)۔" },
          verseRef: "38:66"
        },
        {
          term: "قُلْ هُوَ نَبَأٌ عَظِيمٌ",
          transliteration: "Qul Huwa Naba'un 'Adheem",
          meaning: { en: "Say: It is great news", ur: "کہو: یہ ایک عظیم خبر ہے" },
          explanation: { en: "The Quran/message is tremendous news - not to be taken lightly.", ur: "قرآن/پیغام عظیم خبر ہے - ہلکا نہیں لینا۔" },
          verseRef: "38:67",
          keyPhrase: true
        },
        {
          term: "أَنتُمْ عَنْهُ مُعْرِضُونَ",
          transliteration: "Antum 'anhu Mu'ridoon",
          meaning: { en: "From which you are turning away", ur: "جس سے تم منہ موڑ رہے ہو" },
          explanation: { en: "Despite its greatness, they turn away heedlessly.", ur: "اس کی عظمت کے باوجود، وہ بے خبری سے منہ موڑ لیتے ہیں۔" },
          verseRef: "38:68"
        },
        {
          term: "مَا كَانَ لِيَ مِنْ عِلْمٍ بِالْمَلَإِ الْأَعْلَىٰ إِذْ يَخْتَصِمُونَ",
          transliteration: "Ma Kana Liya min 'Ilmin bil-Mala'-il-A'la idh Yakhtasimoon",
          meaning: { en: "I had no knowledge of the exalted assembly when they disputed", ur: "مجھے اعلیٰ مجلس کا کوئی علم نہیں تھا جب وہ بحث کر رہے تھے" },
          explanation: { en: "Prophet had no prior knowledge of angelic discussions - proof of revelation.", ur: "نبی ﷺ کو فرشتوں کی بحث کا پہلے سے علم نہیں تھا - وحی کا ثبوت۔" },
          verseRef: "38:69"
        },
        {
          term: "إِن يُوحَىٰ إِلَيَّ إِلَّا أَنَّمَا أَنَا نَذِيرٌ مُّبِينٌ",
          transliteration: "In Yooha Ilayya illa Annama Ana Nadheerun Mubeen",
          meaning: { en: "It is only revealed to me that I am a clear warner", ur: "میری طرف صرف یہ وحی کی جاتی ہے کہ میں واضح ڈرانے والا ہوں" },
          explanation: { en: "The Prophet's role is clear warning - not claim to divine knowledge on his own.", ur: "نبی ﷺ کا کردار واضح تنبیہ ہے - اپنی طرف سے الٰہی علم کا دعویٰ نہیں۔" },
          verseRef: "38:70"
        }
      ]
    },

    iblisStory: {
      name: "The Story of Iblis",
      nameUr: "ابلیس کا قصہ",
      nameArabic: "قصة إبليس",
      color: "#DC2626",
      icon: "Zap",
      verses: "38:71-85",
      concepts: [
        {
          term: "إِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن طِينٍ",
          transliteration: "Idh Qala Rabbuka lil-Mala'ikati Innee Khaliqun Basharan min Teen",
          meaning: { en: "When your Lord said to the angels: I am creating a human from clay", ur: "جب تیرے رب نے فرشتوں سے کہا: میں مٹی سے انسان بنانے والا ہوں" },
          explanation: { en: "Allah announces Adam's creation from clay - setting the scene for the test.", ur: "اللہ مٹی سے آدم کی تخلیق کا اعلان کرتا ہے - آزمائش کا منظر تیار۔" },
          verseRef: "38:71"
        },
        {
          term: "فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي",
          transliteration: "Fa-idha Sawwaytuhu wa Nafakhtu feehi min Roohee",
          meaning: { en: "When I have proportioned him and breathed into him of My spirit", ur: "جب میں اسے درست کر لوں اور اپنی روح اس میں پھونک دوں" },
          explanation: { en: "Two stages: physical formation and divine spirit - human dignity from Allah's breath.", ur: "دو مراحل: جسمانی تشکیل اور الٰہی روح - اللہ کی روح سے انسانی وقار۔" },
          verseRef: "38:72",
          keyPhrase: true
        },
        {
          term: "فَقَعُوا لَهُ سَاجِدِينَ",
          transliteration: "Faqa'oo lahu Sajideen",
          meaning: { en: "Then fall down to him prostrating", ur: "تو اس کے لیے سجدے میں گر جاؤ" },
          explanation: { en: "Command to prostrate to Adam - gesture of honor, not worship.", ur: "آدم کو سجدہ کرنے کا حکم - عزت کا اشارہ، عبادت نہیں۔" },
          verseRef: "38:72"
        },
        {
          term: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
          transliteration: "Fa-Sajad-al-Mala'ikatu Kulluhum Ajma'oon",
          meaning: { en: "So the angels prostrated, all of them entirely", ur: "تو تمام فرشتے سجدے میں گر گئے، سب کے سب" },
          explanation: { en: "All angels obeyed without exception - complete submission to Allah's command.", ur: "تمام فرشتوں نے بلا استثناء اطاعت کی - اللہ کے حکم کی مکمل تابعداری۔" },
          verseRef: "38:73"
        },
        {
          term: "إِلَّا إِبْلِيسَ اسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ",
          transliteration: "Illa Ibleesa Istakbara wa Kana min-al-Kafireen",
          meaning: { en: "Except Iblis; he was arrogant and was among the disbelievers", ur: "مگر ابلیس، اس نے تکبر کیا اور کافروں میں سے ہو گیا" },
          explanation: { en: "Iblis refused due to arrogance (istikbar) - making him a disbeliever.", ur: "ابلیس نے تکبر (استکبار) کی وجہ سے انکار کیا - جس سے وہ کافر بن گیا۔" },
          verseRef: "38:74",
          keyPhrase: true
        },
        {
          term: "قَالَ يَا إِبْلِيسُ مَا مَنَعَكَ أَن تَسْجُدَ لِمَا خَلَقْتُ بِيَدَيَّ",
          transliteration: "Qala Ya Ibleesu ma Mana'aka an Tasjuda lima Khalaqtu bi-Yadayya",
          meaning: { en: "He said: O Iblis, what prevented you from prostrating to what I created with My hands?", ur: "فرمایا: اے ابلیس، تجھے کس چیز نے اسے سجدہ کرنے سے روکا جسے میں نے اپنے ہاتھوں سے بنایا؟" },
          explanation: { en: "Allah questions Iblis - Adam was created by Allah's own hands, deserving honor.", ur: "اللہ ابلیس سے سوال کرتا ہے - آدم اللہ کے اپنے ہاتھوں سے بنایا گیا، عزت کا مستحق۔" },
          verseRef: "38:75"
        },
        {
          term: "أَسْتَكْبَرْتَ أَمْ كُنتَ مِنَ الْعَالِينَ",
          transliteration: "Astakbarta am Kunta min-al-'Aaleen",
          meaning: { en: "Were you arrogant or were you of the haughty?", ur: "کیا تو نے تکبر کیا یا تو بلند مقام والوں میں سے تھا؟" },
          explanation: { en: "Question exposing Iblis's arrogance - no valid excuse for disobedience.", ur: "ابلیس کے تکبر کو بے نقاب کرنے والا سوال - نافرمانی کا کوئی جائز عذر نہیں۔" },
          verseRef: "38:75"
        },
        {
          term: "قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ",
          transliteration: "Qala Ana Khayrun minhu Khalaqtanee min Narin wa Khalaqtahu min Teen",
          meaning: { en: "He said: I am better than him. You created me from fire and created him from clay", ur: "اس نے کہا: میں اس سے بہتر ہوں۔ تو نے مجھے آگ سے بنایا اور اسے مٹی سے" },
          explanation: { en: "Iblis's argument - fire is superior to clay. Flawed reasoning based on material origin.", ur: "ابلیس کی دلیل - آگ مٹی سے بہتر ہے۔ مادی اصل پر مبنی غلط استدلال۔" },
          verseRef: "38:76",
          keyPhrase: true
        },
        {
          term: "قَالَ فَاخْرُجْ مِنْهَا فَإِنَّكَ رَجِيمٌ",
          transliteration: "Qala Fa-khruj minha fa-Innaka Rajeem",
          meaning: { en: "He said: Then get out of it, for indeed you are expelled", ur: "فرمایا: نکل جا یہاں سے، بے شک تو مردود ہے" },
          explanation: { en: "Iblis expelled from Paradise - rajeem (stoned, accursed, expelled).", ur: "ابلیس جنت سے نکالا گیا - رجیم (ملعون، مردود، نکالا ہوا)۔" },
          verseRef: "38:77"
        },
        {
          term: "وَإِنَّ عَلَيْكَ لَعْنَتِي إِلَىٰ يَوْمِ الدِّينِ",
          transliteration: "Wa Inna 'Alayka La'natee ila Yawm-id-Deen",
          meaning: { en: "And upon you is My curse until the Day of Judgment", ur: "اور تجھ پر روزِ قیامت تک میری لعنت ہے" },
          explanation: { en: "Perpetual curse on Iblis - lasting until the Day of Judgment.", ur: "ابلیس پر ابدی لعنت - قیامت کے دن تک۔" },
          verseRef: "38:78"
        },
        {
          term: "قَالَ رَبِّ فَأَنظِرْنِي إِلَىٰ يَوْمِ يُبْعَثُونَ",
          transliteration: "Qala Rabbi fa-Andhirnee ila Yawmi Yub'athoon",
          meaning: { en: "He said: My Lord, then give me respite until the Day they are resurrected", ur: "اس نے کہا: میرے رب، مجھے اٹھائے جانے کے دن تک مہلت دے" },
          explanation: { en: "Iblis asks for time - to mislead humans until resurrection.", ur: "ابلیس وقت مانگتا ہے - قیامت تک انسانوں کو گمراہ کرنے کے لیے۔" },
          verseRef: "38:79"
        },
        {
          term: "قَالَ فَإِنَّكَ مِنَ الْمُنظَرِينَ",
          transliteration: "Qala fa-Innaka min-al-Mundhareen",
          meaning: { en: "He said: Indeed, you are of those reprieved", ur: "فرمایا: بے شک تو مہلت پانے والوں میں سے ہے" },
          explanation: { en: "Allah grants respite - part of the test for humanity.", ur: "اللہ مہلت دیتا ہے - انسانیت کی آزمائش کا حصہ۔" },
          verseRef: "38:80"
        },
        {
          term: "إِلَىٰ يَوْمِ الْوَقْتِ الْمَعْلُومِ",
          transliteration: "Ila Yawm-il-Waqt-il-Ma'loom",
          meaning: { en: "Until the Day of the Appointed Time", ur: "مقررہ وقت کے دن تک" },
          explanation: { en: "Respite until a known time - Allah's wisdom in the duration.", ur: "معلوم وقت تک مہلت - مدت میں اللہ کی حکمت۔" },
          verseRef: "38:81"
        },
        {
          term: "قَالَ فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ",
          transliteration: "Qala fa-bi-'Izzatika la-Ughwiyannahum Ajma'een",
          meaning: { en: "He said: By Your might, I will surely mislead them all", ur: "اس نے کہا: تیری عزت کی قسم، میں ان سب کو ضرور گمراہ کروں گا" },
          explanation: { en: "Iblis swears by Allah's might to mislead all humans - vow of enmity.", ur: "ابلیس اللہ کی عزت کی قسم کھا کر تمام انسانوں کو گمراہ کرنے کا عہد - دشمنی کی قسم۔" },
          verseRef: "38:82",
          keyPhrase: true
        },
        {
          term: "إِلَّا عِبَادَكَ مِنْهُمُ الْمُخْلَصِينَ",
          transliteration: "Illa 'Ibadaka minhum-ul-Mukhlaseen",
          meaning: { en: "Except Your servants among them - the chosen ones", ur: "مگر ان میں سے تیرے مخلص بندے" },
          explanation: { en: "Iblis admits inability to mislead sincere servants - Allah's protection for the devoted.", ur: "ابلیس مخلص بندوں کو گمراہ کرنے سے عاجزی کا اعتراف - وقف شدگان کے لیے اللہ کی حفاظت۔" },
          verseRef: "38:83",
          keyPhrase: true
        },
        {
          term: "قَالَ فَالْحَقُّ وَالْحَقَّ أَقُولُ",
          transliteration: "Qala fal-Haqqu wal-Haqqa Aqool",
          meaning: { en: "He said: The truth [is My oath], and the truth I say", ur: "فرمایا: حق ہے اور حق ہی کہتا ہوں" },
          explanation: { en: "Allah swears by the Truth (Himself) - about to declare truth.", ur: "اللہ حق (خود) کی قسم کھاتا ہے - سچائی بیان کرنے والا ہے۔" },
          verseRef: "38:84"
        },
        {
          term: "لَأَمْلَأَنَّ جَهَنَّمَ مِنكَ وَمِمَّن تَبِعَكَ مِنْهُمْ أَجْمَعِينَ",
          transliteration: "La-Amla'anna Jahannama minka wa Mimman Tabi'aka minhum Ajma'een",
          meaning: { en: "I will surely fill Hell with you and those of them who follow you - all together", ur: "میں جہنم کو تجھ سے اور ان میں سے تیری پیروی کرنے والوں سے ضرور بھر دوں گا - سب کو" },
          explanation: { en: "Allah's decree - Hell will be filled with Iblis and his followers from humans.", ur: "اللہ کا فیصلہ - جہنم ابلیس اور اس کے انسانی پیروکاروں سے بھر دی جائے گی۔" },
          verseRef: "38:85",
          keyPhrase: true
        }
      ]
    },

    closingMessage: {
      name: "Closing Message",
      nameUr: "اختتامی پیغام",
      nameArabic: "الخاتمة",
      color: "#6366F1",
      icon: "Star",
      verses: "38:86-88",
      concepts: [
        {
          term: "قُلْ مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ",
          transliteration: "Qul ma As'alukum 'alayhi min Ajr",
          meaning: { en: "Say: I do not ask of you for it any payment", ur: "کہو: میں تم سے اس پر کوئی اجر نہیں مانگتا" },
          explanation: { en: "Prophet seeks no worldly compensation - proof of sincerity.", ur: "نبی ﷺ دنیاوی اجر نہیں مانگتے - اخلاص کا ثبوت۔" },
          verseRef: "38:86"
        },
        {
          term: "وَمَا أَنَا مِنَ الْمُتَكَلِّفِينَ",
          transliteration: "Wa ma Ana min-al-Mutakallefeen",
          meaning: { en: "And I am not of the pretentious", ur: "اور میں بناوٹ کرنے والوں میں سے نہیں" },
          explanation: { en: "No pretense or false claims - authentic message without affectation.", ur: "نہ دکھاوا نہ جھوٹے دعوے - بغیر بناوٹ حقیقی پیغام۔" },
          verseRef: "38:86"
        },
        {
          term: "إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ",
          transliteration: "In Huwa illa Dhikrun lil-'Aalameen",
          meaning: { en: "It is nothing but a reminder to the worlds", ur: "یہ تمام جہانوں کے لیے ایک یاد دہانی کے سوا کچھ نہیں" },
          explanation: { en: "The Quran is dhikr (reminder) for all of creation - universal message.", ur: "قرآن تمام مخلوقات کے لیے ذکر (یاد دہانی) ہے - آفاقی پیغام۔" },
          verseRef: "38:87",
          keyPhrase: true
        },
        {
          term: "وَلَتَعْلَمُنَّ نَبَأَهُ بَعْدَ حِينٍ",
          transliteration: "Wa la-Ta'lamunna Naba'ahu Ba'da Heen",
          meaning: { en: "And you will surely know its truth after a time", ur: "اور تم ایک مدت بعد اس کی خبر ضرور جان لو گے" },
          explanation: { en: "Final warning - they will know the truth later, whether in this life or the next.", ur: "آخری تنبیہ - وہ سچائی بعد میں جان لیں گے، چاہے اس زندگی میں یا اگلی میں۔" },
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
      description: { en: "Both prophets praised for patience", ur: "دونوں انبیاء کو صبر کے لیے سراہا گیا" }
    },
    {
      from: "أواب (38:17, 30, 44)",
      to: "المخلصين (38:83)",
      type: "characteristic",
      description: { en: "Constantly returning to Allah leads to being among the sincere", ur: "مسلسل اللہ کی طرف رجوع کرنا مخلصین میں شامل ہونے کا باعث بنتا ہے" }
    },
    {
      from: "خلقتني من نار (38:76)",
      to: "استكبر (38:74)",
      type: "causation",
      description: { en: "Iblis's flawed reasoning led to his arrogance", ur: "ابلیس کی غلط استدلال نے اسے تکبر کی طرف لے گیا" }
    },
    {
      from: "فسجد الملائكة (38:73)",
      to: "إلا إبليس (38:74)",
      type: "contrast",
      description: { en: "Angels' obedience vs Iblis's rebellion", ur: "فرشتوں کی فرمانبرداری بمقابلہ ابلیس کی سرکشی" }
    },
    {
      from: "لأغوينهم (38:82)",
      to: "إلا عبادك المخلصين (38:83)",
      type: "exception",
      description: { en: "Iblis cannot mislead the sincere servants", ur: "ابلیس مخلص بندوں کو گمراہ نہیں کر سکتا" }
    },
    {
      from: "حسن مآب (38:25, 40, 49)",
      to: "شر مآب (38:55)",
      type: "contrast",
      description: { en: "Good return for righteous vs evil return for transgressors", ur: "نیکوکاروں کے لیے اچھا ٹھکانہ بمقابلہ سرکشوں کے لیے برا ٹھکانہ" }
    },
    {
      from: "نعم العبد (38:30, 44)",
      to: "أواب (38:17, 30, 44)",
      type: "qualification",
      description: { en: "Being an excellent servant requires constant return to Allah", ur: "بہترین بندہ ہونے کے لیے مسلسل اللہ کی طرف رجوع ضروری ہے" }
    },
    {
      from: "ذكر الدار (38:46)",
      to: "يوم الحساب (38:26)",
      type: "focus",
      description: { en: "Remembering the final abode prevents following desires", ur: "آخری ٹھکانے کو یاد رکھنا خواہشات کی پیروی سے روکتا ہے" }
    }
  ],

  thematicFlow: {
    title: { en: "From Divine Warning to Human Test", ur: "الہی تنبیہ سے انسانی آزمائش تک" },
    titleArabic: "من الإنذار الإلهي إلى الابتلاء البشري",
    description: { en: "The surah moves from challenging disbelievers to stories of tested prophets to the origin of human testing through Iblis", ur: "سورت کافروں کو چیلنج کرنے سے آزمائے ہوئے انبیاء کے قصوں تک اور پھر ابلیس کے ذریعے انسانی آزمائش کی ابتداء تک آگے بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: { en: "Opening Oath and Warning", ur: "ابتدائی قسم اور تنبیہ" },
        verses: "38:1-16",
        description: { en: "Oath by the Quran, disbelievers' arrogance, previous nations destroyed", ur: "قرآن کی قسم، کافروں کا تکبر، پچھلی قوموں کی تباہی" },
        color: "#8B5CF6"
      },
      {
        stage: 2,
        theme: { en: "Dawud's Kingdom and Test", ur: "داؤد کی بادشاہت اور آزمائش" },
        verses: "38:17-26",
        description: { en: "Mountains and birds praise Allah with Dawud, the parable of the two disputants", ur: "پہاڑ اور پرندے داؤد کے ساتھ اللہ کی تسبیح کرتے ہیں، دو فریقوں کی مثال" },
        color: "#F59E0B"
      },
      {
        stage: 3,
        theme: { en: "Sulayman's Unique Kingdom", ur: "سلیمان کی منفرد بادشاہت" },
        verses: "38:30-40",
        description: { en: "Wind, jinn, and unlimited authority - test of worldly power", ur: "ہوا، جن، اور لامحدود اختیار - دنیاوی طاقت کی آزمائش" },
        color: "#10B981"
      },
      {
        stage: 4,
        theme: { en: "Ayyub's Patience in Suffering", ur: "ایوب کا مصائب میں صبر" },
        verses: "38:41-44",
        description: { en: "Model of patience through illness and loss", ur: "بیماری اور نقصان میں صبر کا نمونہ" },
        color: "#06B6D4"
      },
      {
        stage: 5,
        theme: { en: "Other Chosen Prophets", ur: "دیگر منتخب انبیاء" },
        verses: "38:45-48",
        description: { en: "Ibrahim, Ishaq, Ya'qub, Ismail, Elisha, Dhul-Kifl praised", ur: "ابراہیم، اسحاق، یعقوب، اسماعیل، الیسع، ذوالکفل کی تعریف" },
        color: "#A855F7"
      },
      {
        stage: 6,
        theme: { en: "Paradise and Hellfire", ur: "جنت اور جہنم" },
        verses: "38:49-64",
        description: { en: "Contrasting destinations - endless provision vs eternal dispute", ur: "متضاد منزلیں - لامتناہی نعمتیں بمقابلہ ابدی جھگڑا" },
        color: "#22C55E"
      },
      {
        stage: 7,
        theme: { en: "Prophet's Mission Defined", ur: "نبی کے مشن کی وضاحت" },
        verses: "38:65-70",
        description: { en: "Warner, monotheism, great news they ignore", ur: "خبردار کرنے والا، توحید، عظیم خبر جسے وہ نظرانداز کرتے ہیں" },
        color: "#3B82F6"
      },
      {
        stage: 8,
        theme: { en: "Iblis's Rebellion and Vow", ur: "ابلیس کی سرکشی اور عہد" },
        verses: "38:71-85",
        description: { en: "Creation of Adam, Iblis's refusal, vow to mislead, Allah's decree", ur: "آدم کی تخلیق، ابلیس کا انکار، گمراہ کرنے کا عہد، اللہ کا فیصلہ" },
        color: "#DC2626"
      },
      {
        stage: 9,
        theme: { en: "Final Declaration", ur: "آخری اعلان" },
        verses: "38:86-88",
        description: { en: "No payment sought, universal reminder, truth will be known", ur: "کوئی اجر نہیں مانگا، آفاقی یاد دہانی، سچائی معلوم ہو جائے گی" },
        color: "#6366F1"
      }
    ]
  },

  keyCharacters: [
    {
      name: "Dawud (David)",
      nameArabic: "داود",
      role: { en: "Prophet-King", ur: "نبی-بادشاہ" },
      qualities: [
        { en: "Strength (ayd)", ur: "قوت (اید)" },
        { en: "Constantly returning to Allah (awwab)", ur: "ہمیشہ اللہ کی طرف رجوع کرنے والا (اوّاب)" },
        { en: "Just ruler", ur: "عادل حکمران" },
        { en: "Wisdom (hikmah)", ur: "حکمت" }
      ],
      arc: { en: "Given kingdom, tested with judgment, repented immediately, forgiven", ur: "بادشاہت عطا ہوئی، فیصلے میں آزمائش، فوری توبہ، معاف کر دیا گیا" }
    },
    {
      name: "Sulayman (Solomon)",
      nameArabic: "سليمان",
      role: { en: "Prophet-King with unique powers", ur: "منفرد طاقتوں والے نبی-بادشاہ" },
      qualities: [
        { en: "Excellent servant", ur: "بہترین بندہ" },
        { en: "Awwab", ur: "اوّاب" },
        { en: "Master of wind and jinn", ur: "ہوا اور جنوں پر اختیار" },
        { en: "Unique kingdom", ur: "منفرد بادشاہت" }
      ],
      arc: { en: "Tested with distraction, repented, granted unparalleled authority", ur: "غفلت سے آزمایا گیا، توبہ کی، بے مثال اختیار عطا ہوا" }
    },
    {
      name: "Ayyub (Job)",
      nameArabic: "أيوب",
      role: { en: "Prophet of patience", ur: "صبر کے نبی" },
      qualities: [
        { en: "Patient (sabir)", ur: "صابر" },
        { en: "Excellent servant", ur: "بہترین بندہ" },
        { en: "Awwab", ur: "اوّاب" },
        { en: "Maintained faith through suffering", ur: "مصائب میں ایمان قائم رکھا" }
      ],
      arc: { en: "Afflicted with illness, called upon Allah, healed, family restored double", ur: "بیماری میں مبتلا، اللہ کو پکارا، شفا ملی، خاندان دوگنا بحال ہوا" }
    },
    {
      name: "Iblis (Satan)",
      nameArabic: "إبليس",
      role: { en: "The Accursed Enemy", ur: "ملعون دشمن" },
      qualities: [
        { en: "Arrogance", ur: "تکبر" },
        { en: "Self-superiority", ur: "خود برتری" },
        { en: "Disobedience", ur: "نافرمانی" },
        { en: "Sworn enemy of humanity", ur: "انسانیت کا قسم خوردہ دشمن" }
      ],
      arc: { en: "Refused to prostrate to Adam, expelled, vowed to mislead all except sincere servants", ur: "آدم کو سجدہ کرنے سے انکار کیا، نکال دیا گیا، مخلص بندوں کے سوا سب کو گمراہ کرنے کا عہد کیا" }
    },
    {
      name: "Adam",
      nameArabic: "آدم",
      role: { en: "First human", ur: "پہلا انسان" },
      qualities: [
        { en: "Created from clay", ur: "مٹی سے تخلیق" },
        { en: "Received Allah's spirit", ur: "اللہ کی روح عطا ہوئی" },
        { en: "Honored by angels' prostration", ur: "فرشتوں کے سجدے سے عزت افزائی" }
      ],
      arc: { en: "Created with honor, catalyst for Iblis's fall", ur: "عزت کے ساتھ تخلیق، ابلیس کے زوال کا سبب" }
    }
  ],

  moralLessons: {
    title: { en: "Timeless Lessons from Surah Sad", ur: "سورۃ ص کے لازوال اسباق" },
    titleArabic: "دروس خالدة من سورة ص",
    lessons: [
      {
        lesson: "Be Awwab - Constantly Return to Allah",
        lessonArabic: "كن أواباً - عد إلى الله دائماً",
        explanation: { en: "Dawud, Sulayman, and Ayyub are all praised as 'awwab' - those who constantly return to Allah in repentance and devotion", ur: "داؤد، سلیمان، اور ایوب سب کو 'اوّاب' کے طور پر سراہا گیا - وہ جو مسلسل توبہ اور عبادت میں اللہ کی طرف رجوع کرتے ہیں" },
        verses: ["38:17", "38:30", "38:44"]
      },
      {
        lesson: "Judge with Truth, Not Desire",
        lessonArabic: "احكم بالحق لا بالهوى",
        explanation: { en: "Dawud was commanded to judge with truth and not follow desires - applicable to all leadership and decision-making", ur: "داؤد کو حق کے ساتھ فیصلہ کرنے اور خواہشات کی پیروی نہ کرنے کا حکم دیا گیا - ہر قسم کی قیادت اور فیصلہ سازی پر لاگو" },
        verses: ["38:26"]
      },
      {
        lesson: "Arrogance is the Root of Disbelief",
        lessonArabic: "التكبر أصل الكفر",
        explanation: { en: "Iblis's downfall was arrogance (istikbar) - considering himself better than Adam. Pride prevents accepting truth", ur: "ابلیس کا زوال تکبر (استکبار) تھا - خود کو آدم سے بہتر سمجھنا۔ غرور حق قبول کرنے سے روکتا ہے" },
        verses: ["38:74", "38:76"]
      },
      {
        lesson: "Patience Through Suffering",
        lessonArabic: "الصبر على البلاء",
        explanation: { en: "Ayyub's patience through illness and loss earned Allah's praise and restoration", ur: "ایوب کے بیماری اور نقصان میں صبر نے اللہ کی تعریف اور بحالی حاصل کی" },
        verses: ["38:41-44"]
      },
      {
        lesson: "Worldly Blessings Can Be Tests",
        lessonArabic: "النعم الدنيوية ابتلاء",
        explanation: { en: "Sulayman's horses distracted him from worship - even blessings can become tests if not handled properly", ur: "سلیمان کے گھوڑوں نے عبادت سے غافل کر دیا - نعمتیں بھی آزمائش بن سکتی ہیں اگر مناسب طریقے سے نہ سنبھالی جائیں" },
        verses: ["38:31-33"]
      },
      {
        lesson: "Sincerity Protects from Satan",
        lessonArabic: "الإخلاص يحمي من الشيطان",
        explanation: { en: "Iblis admitted he cannot mislead Allah's sincere servants (mukhalseen) - sincerity is protection", ur: "ابلیس نے اعتراف کیا کہ وہ اللہ کے مخلص بندوں (مخلصین) کو گمراہ نہیں کر سکتا - اخلاص ہی تحفظ ہے" },
        verses: ["38:83"]
      },
      {
        lesson: "Remember the Day of Account",
        lessonArabic: "تذكر يوم الحساب",
        explanation: { en: "Those who stray do so because they forget the Day of Account - remembering it prevents deviation", ur: "جو لوگ گمراہ ہوتے ہیں وہ یوم حساب بھلانے کی وجہ سے ہوتے ہیں - اسے یاد رکھنا انحراف سے روکتا ہے" },
        verses: ["38:26"]
      },
      {
        lesson: "Truth Will Be Known Eventually",
        lessonArabic: "الحق سيظهر في النهاية",
        explanation: { en: "Even if disbelievers deny now, they will know the truth after a time", ur: "چاہے کافر ابھی انکار کریں، وہ ایک وقت بعد سچائی جان لیں گے" },
        verses: ["38:88"]
      }
    ]
  },

  linguisticFeatures: {
    openingLetters: { en: "Sad (ص) - one of the mysterious letters (Huruf Muqatta'at)", ur: "صاد (ص) - حروف مقطعات میں سے ایک پراسرار حرف" },
    oaths: { en: "Oath by the Quran 'dhil-dhikr' (full of remembrance)", ur: "قرآن 'ذِالذکر' (یاد دہانی سے بھرپور) کی قسم" },
    repetition: { en: "'Awwab' repeated for Dawud, Sulayman, and Ayyub", ur: "'اوّاب' داؤد، سلیمان، اور ایوب کے لیے بار بار دہرایا گیا" },
    rhetoricQuestions: { en: "Multiple rhetorical questions challenging disbelievers", ur: "کافروں کو چیلنج کرنے والے متعدد استفہامیہ سوالات" },
    dialogue: { en: "Extended dialogue between Allah and Iblis (38:75-85)", ur: "اللہ اور ابلیس کے درمیان طویل مکالمہ (38:75-85)" },
    contrast: { en: "Paradise vs Hellfire descriptions (38:49-64)", ur: "جنت بمقابلہ جہنم کے بیانات (38:49-64)" },
    prophetPraise: { en: "'Ni'mal-'abd' (excellent servant) used for Sulayman and Ayyub", ur: "'نِعمَ العبد' (کیا اچھا بندہ) سلیمان اور ایوب کے لیے استعمال ہوا" }
  },

  practicalApplication: {
    title: { en: "Living by Surah Sad", ur: "سورۃ ص کے مطابق زندگی گزارنا" },
    applications: [
      {
        principle: { en: "When you sin or err", ur: "جب آپ گناہ یا غلطی کریں" },
        how: { en: "Immediately seek forgiveness like Dawud - fall down, repent, return to Allah", ur: "فوری طور پر داؤد کی طرح معافی مانگیں - سجدے میں گر جائیں، توبہ کریں، اللہ کی طرف لوٹیں" },
        verse: "38:24"
      },
      {
        principle: { en: "When worldly things distract you", ur: "جب دنیاوی چیزیں آپ کو غافل کریں" },
        how: { en: "Recognize the distraction like Sulayman and prioritize worship", ur: "سلیمان کی طرح غفلت کو پہچانیں اور عبادت کو ترجیح دیں" },
        verse: "38:32"
      },
      {
        principle: { en: "When facing illness or hardship", ur: "جب بیماری یا مشکل کا سامنا ہو" },
        how: { en: "Be patient like Ayyub, call upon Allah, and trust in His relief", ur: "ایوب کی طرح صبر کریں، اللہ کو پکاریں، اور اس کی راحت پر بھروسہ رکھیں" },
        verse: "38:41-44"
      },
      {
        principle: { en: "When making judgments", ur: "جب فیصلے کریں" },
        how: { en: "Judge with truth (haqq), don't follow personal desires", ur: "حق کے ساتھ فیصلہ کریں، ذاتی خواہشات کی پیروی نہ کریں" },
        verse: "38:26"
      },
      {
        principle: { en: "When feeling superior", ur: "جب برتری محسوس ہو" },
        how: { en: "Remember Iblis's fall - arrogance led to eternal curse", ur: "ابلیس کے انجام کو یاد رکھیں - تکبر ابدی لعنت کا باعث بنا" },
        verse: "38:74-76"
      },
      {
        principle: { en: "When Satan whispers", ur: "جب شیطان وسوسے ڈالے" },
        how: { en: "Strive to be among the mukhalseen (sincere) whom he cannot mislead", ur: "مخلصین میں شامل ہونے کی کوشش کریں جنہیں وہ گمراہ نہیں کر سکتا" },
        verse: "38:83"
      },
      {
        principle: { en: "When people mock your faith", ur: "جب لوگ آپ کے ایمان کا مذاق اڑائیں" },
        how: { en: "Remember you will all know the truth after a time", ur: "یاد رکھیں کہ تم سب ایک وقت بعد سچائی جان لو گے" },
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
        relation: { en: "Iblis's story", ur: "ابلیس کا قصہ" },
        sharedTheme: { en: "Satan's refusal to prostrate and expulsion", ur: "شیطان کا سجدے سے انکار اور نکالا جانا" }
      },
      {
        surah: 15,
        name: "Al-Hijr",
        verses: "15:26-44",
        relation: { en: "Creation of Adam and Iblis", ur: "آدم اور ابلیس کی تخلیق" },
        sharedTheme: { en: "Clay creation and Satan's vow", ur: "مٹی سے تخلیق اور شیطان کا عہد" }
      },
      {
        surah: 17,
        name: "Al-Isra",
        verses: "17:61-65",
        relation: { en: "Iblis and Adam", ur: "ابلیس اور آدم" },
        sharedTheme: { en: "Satan's enmity to humans", ur: "شیطان کی انسانوں سے دشمنی" }
      },
      {
        surah: 21,
        name: "Al-Anbiya",
        verses: "21:78-82, 83-84",
        relation: { en: "Dawud, Sulayman, Ayyub stories", ur: "داؤد، سلیمان، ایوب کے قصے" },
        sharedTheme: { en: "Prophets' trials and blessings", ur: "انبیاء کی آزمائشیں اور نعمتیں" }
      },
      {
        surah: 27,
        name: "An-Naml",
        verses: "27:15-44",
        relation: { en: "Sulayman's kingdom", ur: "سلیمان کی بادشاہت" },
        sharedTheme: { en: "Sulayman's power over jinn, birds, ants", ur: "سلیمان کا جنوں، پرندوں، چیونٹیوں پر اختیار" }
      },
      {
        surah: 34,
        name: "Saba",
        verses: "34:10-14",
        relation: { en: "Dawud and Sulayman", ur: "داؤد اور سلیمان" },
        sharedTheme: { en: "Their blessings and iron/copper work", ur: "ان کی نعمتیں اور لوہے/تانبے کا کام" }
      }
    ]
  },

  reflectionQuestions: [
    { en: "Am I 'awwab' - do I constantly return to Allah after every slip?", ur: "کیا میں 'اوّاب' ہوں - کیا میں ہر لغزش کے بعد مسلسل اللہ کی طرف رجوع کرتا ہوں؟" },
    { en: "What worldly distractions take me away from remembering Allah?", ur: "کون سی دنیاوی مشغولیات مجھے اللہ کی یاد سے غافل کرتی ہیں؟" },
    { en: "Do I judge matters with truth or follow my desires?", ur: "کیا میں معاملات کا حق کے ساتھ فیصلہ کرتا ہوں یا اپنی خواہشات کی پیروی کرتا ہوں؟" },
    { en: "Is there any arrogance in me that makes me feel superior to others?", ur: "کیا مجھ میں کوئی تکبر ہے جو مجھے دوسروں سے برتر محسوس کراتا ہے؟" },
    { en: "How patient am I when facing hardships compared to Ayyub?", ur: "ایوب کے مقابلے میں مشکلات کا سامنا کرتے وقت میں کتنا صبر کرتا ہوں؟" },
    { en: "Am I striving to be among the 'mukhalseen' (sincere) whom Satan cannot mislead?", ur: "کیا میں 'مخلصین' میں شامل ہونے کی کوشش کر رہا ہوں جنہیں شیطان گمراہ نہیں کر سکتا؟" },
    { en: "Do I remember the Day of Account in my daily decisions?", ur: "کیا میں اپنے روزمرہ فیصلوں میں یوم حساب کو یاد رکھتا ہوں؟" }
  ]
};

export default ONTOLOGY;
