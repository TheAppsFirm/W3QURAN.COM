/**
 * Surah Al-Hijr (15) - Ontology of Quranic Concepts
 * The Rocky Tract - 99 Ayahs, Makki
 *
 * Theme: Divine preservation of the Quran, creation narratives, Iblis's arrogance,
 *        and the fate of destroyed nations who rejected their messengers.
 *
 * Named after: Al-Hijr, the rocky tract where the people of Thamud lived
 */

export const ONTOLOGY = {
  surahId: 15,
  surahName: "Al-Hijr",
  surahNameArabic: "الحجر",
  revelationType: "Makki",
  totalAyahs: 99,

  categories: {
    quranPreservation: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Quran's Divine Preservation",
      nameArabic: "حفظ القرآن الإلهي",
      description: { en: "Allah's guarantee to protect the Quran from corruption", ur: "قرآن کو بگاڑ سے محفوظ رکھنے کی اللہ کی ضمانت" },
      concepts: [
        {
          term: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ",
          transliteration: "Inna Nahnu Nazzalna adh-Dhikr",
          meaning: { en: "Indeed, it is We who sent down the Reminder", ur: "بے شک ہم نے ہی اس نصیحت کو نازل کیا" },
          explanation: { en: "Triple emphasis (inna + nahnu + nazzalna) establishes Allah as the sole author. The Quran is called 'Dhikr' (Reminder/Remembrance) - it reminds humans of their purpose and covenant.", ur: "تین تاکیدات (اِنّا + نحنُ + نزّلنا) اللہ کو واحد نازل کرنے والا ثابت کرتی ہیں۔ قرآن کو 'ذکر' (یاد دہانی) کہا گیا ہے - یہ انسانوں کو ان کے مقصد اور عہد کی یاد دلاتا ہے۔" },
          verseRef: "15:9"
        },
        {
          term: "وَإِنَّا لَهُ لَحَافِظُونَ",
          transliteration: "Wa inna lahu la-Haafizoon",
          meaning: { en: "And indeed, We will be its Guardian", ur: "اور بے شک ہم خود اس کے محافظ ہیں" },
          explanation: { en: "Absolute divine guarantee of preservation. Unlike previous scriptures that were entrusted to humans, Allah Himself guards the Quran. 1400+ years later, not a letter has changed - this is the living miracle.", ur: "حفاظت کی مطلق الٰہی ضمانت۔ پچھلی کتابوں کے برعکس جو انسانوں کے سپرد تھیں، اللہ خود قرآن کی حفاظت فرماتا ہے۔ 1400 سال سے زائد عرصے میں ایک حرف نہیں بدلا - یہ زندہ معجزہ ہے۔" },
          verseRef: "15:9"
        },
        {
          term: "الكِتَاب المُبِين",
          transliteration: "Al-Kitab al-Mubeen",
          meaning: { en: "The Clear Book", ur: "واضح کتاب" },
          explanation: { en: "The Quran is described as 'mubeen' - clear, evident, making things manifest. It clarifies truth from falsehood.", ur: "قرآن کو 'مبین' کہا گیا - واضح، ظاہر، حقائق کو آشکار کرنے والی۔ یہ حق کو باطل سے واضح کرتی ہے۔" },
          verseRef: "15:1"
        }
      ]
    },

    creationOfMan: {
      color: '#10B981',
      icon: 'Book',
      name: "Creation of Humanity",
      nameArabic: "خلق الإنسان",
      description: { en: "The miraculous creation of Adam from clay", ur: "مٹی سے آدم کی معجزانہ تخلیق" },
      concepts: [
        {
          term: "صَلْصَال مِنْ حَمَإٍ مَسْنُون",
          transliteration: "Salsal min Hama'in Masnoon",
          meaning: { en: "Dried clay from altered black mud", ur: "سیاہ بدبودار مٹی سے بنی خشک مٹی" },
          explanation: { en: "Salsal = dried clay that makes sound when struck. Hama' = black mud. Masnoon = aged, shaped, formed. The stages of Adam's creation: earth → mud → shaped mud → dried clay. Shows meticulous divine crafting.", ur: "صلصال = خشک مٹی جو مارنے پر آواز دے۔ حمأ = سیاہ مٹی۔ مسنون = پرانی، سانچے میں ڈھلی ہوئی۔ آدم کی تخلیق کے مراحل: مٹی ← کیچڑ ← سانچے میں ڈھلا کیچڑ ← خشک مٹی۔ باریک بینی سے الٰہی تخلیق کا مظاہرہ۔" },
          verseRef: "15:26, 15:28, 15:33"
        },
        {
          term: "نَفَخْتُ فِيهِ مِن رُّوحِي",
          transliteration: "Nafakhtu feehi min Roohi",
          meaning: { en: "I breathed into him of My Spirit", ur: "میں نے اس میں اپنی روح پھونکی" },
          explanation: { en: "The divine breath (ruh) transforms clay into a living, honored being. 'Min Roohi' doesn't mean part of Allah, but a spirit that belongs to and is honored by Allah. This makes humans unique in creation.", ur: "الٰہی پھونک (روح) مٹی کو زندہ، مکرم وجود میں بدل دیتی ہے۔ 'مِن روحی' کا مطلب اللہ کا حصہ نہیں بلکہ ایک ایسی روح جو اللہ سے منسوب اور اس کی طرف سے عزت یافتہ ہے۔ یہ انسانوں کو مخلوقات میں منفرد بناتا ہے۔" },
          verseRef: "15:29"
        },
        {
          term: "فَقَعُوا لَهُ سَاجِدِينَ",
          transliteration: "Faqa'oo lahu Saajideen",
          meaning: { en: "Fall down in prostration to him", ur: "اس کے آگے سجدے میں گر جاؤ" },
          explanation: { en: "Command to angels to prostrate to Adam - not worship, but acknowledgment of Adam's honored status. This prostration was a test that exposed Iblis's arrogance.", ur: "فرشتوں کو آدم کے سامنے سجدہ کرنے کا حکم - عبادت نہیں بلکہ آدم کے مکرم مقام کا اعتراف۔ یہ سجدہ ایک امتحان تھا جس نے ابلیس کے تکبر کو بے نقاب کیا۔" },
          verseRef: "15:29"
        }
      ]
    },

    iblisArrogance: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Iblis's Arrogance and Promise",
      nameArabic: "كبر إبليس ووعده",
      description: { en: "The devil's refusal, reasoning, and vow to mislead humanity", ur: "شیطان کا انکار، اس کی دلیل اور انسانیت کو گمراہ کرنے کی قسم" },
      concepts: [
        {
          term: "لَمْ يَكُن مِّنَ السَّاجِدِينَ",
          transliteration: "Lam yakun minas-Saajideen",
          meaning: { en: "He was not among those who prostrated", ur: "وہ سجدہ کرنے والوں میں سے نہ تھا" },
          explanation: { en: "Iblis alone refused the divine command. His absence from the prostrators exposed his hidden arrogance that had been concealed among the angels.", ur: "صرف ابلیس نے الٰہی حکم سے انکار کیا۔ سجدہ کرنے والوں میں اس کی غیر موجودگی نے اس کے چھپے ہوئے تکبر کو بے نقاب کیا جو فرشتوں کے درمیان چھپا ہوا تھا۔" },
          verseRef: "15:31"
        },
        {
          term: "خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ",
          transliteration: "Khalaqtani min Naar wa khalaqtahu min Teen",
          meaning: { en: "You created me from fire and created him from clay", ur: "تو نے مجھے آگ سے بنایا اور اسے مٹی سے" },
          explanation: { en: "Iblis's flawed reasoning - he considered fire superior to clay. He used his own logic against Allah's command. This is the origin of racism and arrogance - judging worth by origin rather than by obedience.", ur: "ابلیس کی غلط دلیل - اس نے آگ کو مٹی سے برتر سمجھا۔ اس نے اللہ کے حکم کے خلاف اپنی عقل استعمال کی۔ یہ نسل پرستی اور تکبر کی ابتدا ہے - اطاعت کی بجائے اصل کی بنیاد پر قدر کرنا۔" },
          verseRef: "15:33"
        },
        {
          term: "لَأُغْوِيَنَّهُمْ أَجْمَعِينَ",
          transliteration: "La-ughwiyannahum ajma'een",
          meaning: { en: "I will surely mislead them all", ur: "میں ان سب کو ضرور گمراہ کروں گا" },
          explanation: { en: "Iblis's vengeful promise to mislead ALL humans. The emphatic 'la' + nun of emphasis shows his determination. Yet Allah allows this as a test for humanity.", ur: "ابلیس کا تمام انسانوں کو گمراہ کرنے کا انتقامی عہد۔ تاکیدی 'لَ' اور نونِ تاکید اس کے عزم کو ظاہر کرتے ہیں۔ لیکن اللہ اسے انسانیت کی آزمائش کے طور پر اجازت دیتا ہے۔" },
          verseRef: "15:39"
        },
        {
          term: "إِلَّا عِبَادَكَ مِنْهُمُ الْمُخْلَصِينَ",
          transliteration: "Illa 'ibaadaka minhumul-Mukhlaseen",
          meaning: { en: "Except Your sincere servants among them", ur: "سوائے ان کے مخلص بندوں کے" },
          explanation: { en: "Even Iblis admits his powerlessness over sincere believers. Ikhlas (sincerity) is the shield against shaytan. He can only mislead those who willingly follow.", ur: "ابلیس خود مخلص مومنوں پر اپنی بے بسی کا اعتراف کرتا ہے۔ اخلاص شیطان کے خلاف ڈھال ہے۔ وہ صرف انہیں گمراہ کر سکتا ہے جو رضاکارانہ طور پر اس کی پیروی کریں۔" },
          verseRef: "15:40"
        },
        {
          term: "لَأُزَيِّنَنَّ لَهُمْ فِي الأَرْضِ",
          transliteration: "La-uzayyinanna lahum fil-Ard",
          meaning: { en: "I will surely make attractive to them on earth", ur: "میں ان کے لیے زمین پر (گناہوں کو) ضرور خوبصورت بنا دوں گا" },
          explanation: { en: "Shaytan's method: beautification of sin. He doesn't force, he decorates evil until it appears desirable. The world (dunya) becomes his tool of deception.", ur: "شیطان کا طریقہ: گناہ کی آرائش۔ وہ مجبور نہیں کرتا بلکہ برائی کو اتنا سجاتا ہے کہ وہ مطلوب نظر آنے لگے۔ دنیا اس کے فریب کا آلہ بن جاتی ہے۔" },
          verseRef: "15:39"
        }
      ]
    },

    destroyedNations: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Destroyed Nations",
      nameArabic: "الأمم المهلكة",
      description: { en: "Stories of nations who rejected their messengers and were destroyed", ur: "ان قوموں کے واقعات جنہوں نے اپنے رسولوں کو جھٹلایا اور تباہ ہوئیں" },
      concepts: [
        {
          term: "أَصْحَاب الحِجْر",
          transliteration: "Ashaab al-Hijr",
          meaning: { en: "The People of the Rocky Tract (Thamud)", ur: "حجر والے (قومِ ثمود)" },
          explanation: { en: "Thamud carved homes in mountains, thinking they were secure. They rejected Salih and killed the she-camel. Allah destroyed them with a single blast (sayhah). Their impressive architecture couldn't save them.", ur: "ثمود نے پہاڑوں میں گھر تراشے اور خود کو محفوظ سمجھا۔ انہوں نے صالح کو جھٹلایا اور اونٹنی کو قتل کیا۔ اللہ نے انہیں ایک چیخ سے تباہ کر دیا۔ ان کا شاندار فنِ تعمیر بھی انہیں نہ بچا سکا۔" },
          verseRef: "15:80-84"
        },
        {
          term: "قَوْم لُوط",
          transliteration: "Qawm Lut",
          meaning: { en: "The People of Lot", ur: "قومِ لوط" },
          explanation: { en: "Guilty of unprecedented fahishah (homosexuality). Despite angels visiting as guests, the townspeople attempted assault. Cities were overturned and rained with marked stones. Lot's wife was among the destroyed.", ur: "بے مثال فحاشی (ہم جنس پرستی) کے مرتکب۔ فرشتوں کے مہمان بن کر آنے کے باوجود شہر والوں نے حملے کی کوشش کی۔ شہروں کو الٹ دیا گیا اور نشان زدہ پتھروں کی بارش ہوئی۔ لوط کی بیوی بھی ہلاک ہونے والوں میں شامل تھی۔" },
          verseRef: "15:58-77"
        },
        {
          term: "أَصْحَاب الأَيْكَة",
          transliteration: "Ashaab al-Aykah",
          meaning: { en: "The Companions of the Thicket (Shu'ayb's people)", ur: "جھاڑیوں والے (شعیب کی قوم)" },
          explanation: { en: "Dwellers in dense forest, they cheated in measures and weights. They were destroyed for commercial corruption - a warning that economic injustice invites divine punishment.", ur: "گھنے جنگل میں رہنے والے، ناپ تول میں دھوکا دیتے تھے۔ تجارتی بدعنوانی کی وجہ سے تباہ ہوئے - یہ انتباہ ہے کہ معاشی ظلم الٰہی عذاب کو دعوت دیتا ہے۔" },
          verseRef: "15:78-79"
        },
        {
          term: "المُجْرِمِينَ",
          transliteration: "Al-Mujrimeen",
          meaning: { en: "The Criminals", ur: "مجرمین" },
          explanation: { en: "Generic term for all who persist in rejecting truth. Their crime (jurm) is choosing disbelief despite clear signs.", ur: "حق کو مسلسل جھٹلانے والوں کے لیے عام اصطلاح۔ ان کا جرم واضح نشانیوں کے باوجود کفر کا انتخاب ہے۔" },
          verseRef: "15:12"
        }
      ]
    },

    angelicRevelation: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Angels and Revelation",
      nameArabic: "الملائكة والوحي",
      description: { en: "The role of angels in delivering divine messages", ur: "الٰہی پیغامات پہنچانے میں فرشتوں کا کردار" },
      concepts: [
        {
          term: "مَا نُنَزِّلُ الْمَلَائِكَةَ إِلَّا بِالْحَقِّ",
          transliteration: "Maa nunazzilul-Malaa'ikata illa bil-Haqq",
          meaning: { en: "We do not send down the angels except with truth", ur: "ہم فرشتے صرف حق کے ساتھ نازل کرتے ہیں" },
          explanation: { en: "Angels descend only for serious divine purposes - revelation, punishment, or death. The disbelievers mockingly asked for angels; they don't realize that seeing angels usually means destruction.", ur: "فرشتے صرف اہم الٰہی مقاصد کے لیے اترتے ہیں - وحی، عذاب یا موت۔ کافر مذاق میں فرشتے مانگتے تھے لیکن انہیں نہیں معلوم کہ فرشتوں کو دیکھنا عام طور پر تباہی کی علامت ہے۔" },
          verseRef: "15:8"
        },
        {
          term: "ضَيْف إِبْرَاهِيمَ",
          transliteration: "Dayf Ibrahim",
          meaning: { en: "The Guests of Ibrahim", ur: "ابراہیم کے مہمان" },
          explanation: { en: "Angels in human form visited Ibrahim with good news (Ishaq) and then proceeded to destroy Lot's people. Shows angels' dual role: mercy and punishment.", ur: "فرشتے انسانی شکل میں ابراہیم کے پاس خوشخبری (اسحاق) لے کر آئے اور پھر قومِ لوط کو تباہ کرنے گئے۔ فرشتوں کا دوہرا کردار: رحمت اور عذاب۔" },
          verseRef: "15:51-56"
        },
        {
          term: "لَا تَوْجَل",
          transliteration: "La Tawjal",
          meaning: { en: "Do not fear", ur: "خوف نہ کریں" },
          explanation: { en: "The angels' reassurance to Ibrahim when he was alarmed by their refusal to eat. Their mission was one of mercy to him, destruction to others.", ur: "فرشتوں نے ابراہیم کو تسلی دی جب وہ ان کے کھانا نہ کھانے پر پریشان ہوئے۔ ان کا مشن ابراہیم کے لیے رحمت اور دوسروں کے لیے تباہی تھا۔" },
          verseRef: "15:53"
        }
      ]
    },

    prophetConsolation: {
      color: '#EF4444',
      icon: 'Users',
      name: "Consolation for the Prophet",
      nameArabic: "تسلية النبي",
      description: { en: "Divine comfort to Prophet Muhammad facing rejection", ur: "نبی محمد ﷺ کو انکار کا سامنا کرتے ہوئے الٰہی تسلی" },
      concepts: [
        {
          term: "وَلَقَدْ نَعْلَمُ أَنَّكَ يَضِيقُ صَدْرُكَ",
          transliteration: "Wa laqad na'lamu annaka yadeequ sadruk",
          meaning: { en: "And We know that your breast is constrained", ur: "اور ہم جانتے ہیں کہ آپ کا سینہ تنگ ہوتا ہے" },
          explanation: { en: "Allah acknowledges the Prophet's emotional pain from rejection. 'Yadeequ sadruk' = chest tightens with grief. Divine empathy before divine prescription.", ur: "اللہ نبی ﷺ کے انکار سے ہونے والے جذباتی درد کو تسلیم کرتا ہے۔ 'یضیقُ صدرُک' = غم سے سینہ تنگ ہونا۔ الٰہی نسخے سے پہلے الٰہی ہمدردی۔" },
          verseRef: "15:97"
        },
        {
          term: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَكُن مِّنَ السَّاجِدِينَ",
          transliteration: "Fa-sabbih bi-hamdi Rabbika wa kun minas-Saajideen",
          meaning: { en: "So glorify with praise of your Lord and be among those who prostrate", ur: "پس اپنے رب کی حمد کے ساتھ تسبیح کریں اور سجدہ کرنے والوں میں سے ہوں" },
          explanation: { en: "The prescription for grief: tasbeeh (glorification) and sujood (prostration). Dhikr and salah are the antidotes to emotional distress.", ur: "غم کا نسخہ: تسبیح (حمد) اور سجود (سجدہ)۔ ذکر اور نماز جذباتی پریشانی کا علاج ہیں۔" },
          verseRef: "15:98"
        },
        {
          term: "وَاعْبُدْ رَبَّكَ حَتَّى يَأْتِيَكَ الْيَقِينُ",
          transliteration: "Wa'bud Rabbaka hatta ya'tiyakal-Yaqeen",
          meaning: { en: "And worship your Lord until certainty comes to you", ur: "اور اپنے رب کی عبادت کریں یہاں تک کہ یقین آ جائے" },
          explanation: { en: "Yaqeen here means death - the absolute certainty. The command: worship continuously until death. No retirement from 'ibadah. Some scholars say yaqeen also means witnessing truth's victory.", ur: "یقین سے یہاں مراد موت ہے - قطعی حقیقت۔ حکم: موت تک مسلسل عبادت کریں۔ عبادت سے ریٹائرمنٹ نہیں۔ بعض علماء کہتے ہیں یقین سے حق کی فتح کا مشاہدہ بھی مراد ہے۔" },
          verseRef: "15:99"
        },
        {
          term: "فَاصْفَحِ الصَّفْحَ الجَمِيل",
          transliteration: "Fasfah as-Safhal-Jameel",
          meaning: { en: "So turn away with gracious forgiveness", ur: "پس خوبصورت انداز میں درگزر کریں" },
          explanation: { en: "Safh jameel = beautiful/gracious turning away. Not angry ignoring, but dignified overlooking of insults. The highest form of patience.", ur: "صفحِ جمیل = خوبصورت/شائستہ انداز میں نظرانداز کرنا۔ غصے میں اعراض نہیں بلکہ وقار کے ساتھ توہین کو نظرانداز کرنا۔ صبر کی اعلیٰ ترین شکل۔" },
          verseRef: "15:85"
        }
      ]
    },

    divineCreativity: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Creative Power",
      nameArabic: "القدرة الخالقة",
      description: { en: "Signs of Allah's creative power in the universe", ur: "کائنات میں اللہ کی تخلیقی قدرت کی نشانیاں" },
      concepts: [
        {
          term: "بُرُوج السَّمَاء",
          transliteration: "Burooj as-Samaa",
          meaning: { en: "Constellations of the sky", ur: "آسمان کے برج" },
          explanation: { en: "The zodiacal constellations - massive celestial structures that display divine design. 'Burooj' also means mansions/stations, referring to the moon's path.", ur: "بروجِ فلکی - عظیم آسمانی ڈھانچے جو الٰہی نقشے کو ظاہر کرتے ہیں۔ 'بروج' کا مطلب محل/منزل بھی ہے، جو چاند کے راستے کی طرف اشارہ کرتے ہیں۔" },
          verseRef: "15:16"
        },
        {
          term: "رَوَاسِيَ",
          transliteration: "Rawaasiy",
          meaning: { en: "Firm mountains", ur: "مضبوط پہاڑ" },
          explanation: { en: "Mountains as pegs/anchors stabilizing the earth. Modern geology confirms mountains' role in tectonic stability. Another Quranic scientific indication.", ur: "پہاڑ بطور میخیں/لنگر زمین کو مستحکم رکھتے ہیں۔ جدید ارضیات پہاڑوں کے ٹیکٹونک استحکام میں کردار کی تصدیق کرتی ہے۔ قرآن کا ایک اور سائنسی اشارہ۔" },
          verseRef: "15:19"
        },
        {
          term: "خَزَائِنُ كُلِّ شَيْءٍ",
          transliteration: "Khazaa'inu kulli shay'",
          meaning: { en: "Treasuries of all things", ur: "ہر چیز کے خزانے" },
          explanation: { en: "Everything has a 'treasury' with Allah - unlimited supply. He sends down in measured amounts according to wisdom. Nothing runs out; scarcity is divine wisdom, not divine limitation.", ur: "ہر چیز کا اللہ کے پاس خزانہ ہے - لامحدود ذخیرہ۔ وہ حکمت کے مطابق معین مقدار میں نازل کرتا ہے۔ کوئی چیز ختم نہیں ہوتی؛ کمی الٰہی حکمت ہے، الٰہی محدودیت نہیں۔" },
          verseRef: "15:21"
        },
        {
          term: "الرِّيَاح لَوَاقِحَ",
          transliteration: "Ar-Riyah Lawaaqih",
          meaning: { en: "Winds as fertilizers", ur: "ہوائیں بارور کرنے والی" },
          explanation: { en: "Winds that 'fertilize' - carry pollen, bring rain clouds. The Quran mentions wind's role in plant reproduction and water cycle 1400 years before modern botany.", ur: "ہوائیں جو 'بارور' کرتی ہیں - زردانے لے جاتی ہیں، بارش کے بادل لاتی ہیں۔ قرآن نے جدید نباتیات سے 1400 سال پہلے پودوں کی افزائش اور پانی کے چکر میں ہوا کے کردار کا ذکر کیا۔" },
          verseRef: "15:22"
        }
      ]
    },

    jinnCreation: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Creation of Jinn",
      nameArabic: "خلق الجن",
      description: { en: "The creation of jinn from fire before humans", ur: "انسانوں سے پہلے آگ سے جنات کی تخلیق" },
      concepts: [
        {
          term: "الجَآنَّ مِن نَّارِ السَّمُومِ",
          transliteration: "Al-Jaanna min Naaris-Samoom",
          meaning: { en: "The jinn from scorching fire", ur: "جنات جلتی ہوئی آگ سے" },
          explanation: { en: "Jinn were created from 'samoom' - intensely hot, penetrating fire. Created before humans ('min qabl'). They are a parallel creation with free will, unseen to us but real.", ur: "جنات 'سموم' سے بنائے گئے - شدید گرم، چبھنے والی آگ۔ انسانوں سے پہلے بنائے گئے ('مِن قبل')۔ وہ ایک متوازی مخلوق ہیں جن کو ارادے کی آزادی ہے، ہمیں نظر نہیں آتے لیکن حقیقی ہیں۔" },
          verseRef: "15:27"
        }
      ]
    }
  },

  relationships: [
    {
      from: "Quran Preservation",
      to: "Destroyed Nations",
      type: "contrast",
      description: { en: "Preserved message vs. destroyed deniers", ur: "محفوظ پیغام بمقابلہ تباہ شدہ منکرین" },
      explanation: { en: "The Quran is preserved; those who reject it face the fate of previous nations", ur: "قرآن محفوظ ہے؛ جو اسے جھٹلائیں ان کا حشر پچھلی قوموں جیسا ہوگا" }
    },
    {
      from: "Creation of Man (clay)",
      to: "Creation of Jinn (fire)",
      type: "parallel",
      description: { en: "Two creations with free will", ur: "آزاد ارادے والی دو مخلوقات" },
      explanation: { en: "Both created for worship, both tested, different origins", ur: "دونوں عبادت کے لیے بنائے گئے، دونوں آزمائے گئے، مختلف اصل" }
    },
    {
      from: "Iblis's refusal",
      to: "Adam's honor",
      type: "causation",
      description: { en: "Honor provokes jealousy", ur: "عزت حسد کو جنم دیتی ہے" },
      explanation: { en: "Iblis's arrogance was exposed by Adam's elevation", ur: "آدم کی بلندی نے ابلیس کے تکبر کو بے نقاب کیا" }
    },
    {
      from: "Iblis's promise to mislead",
      to: "Sincere servants excepted",
      type: "limitation",
      description: { en: "Shaytan's power is limited", ur: "شیطان کی طاقت محدود ہے" },
      explanation: { en: "Sincerity (ikhlas) is protection from shaytan", ur: "اخلاص شیطان سے تحفظ ہے" }
    },
    {
      from: "Prophet's grief",
      to: "Worship prescription",
      type: "solution",
      description: { en: "Ibadah heals emotional pain", ur: "عبادت جذباتی درد کا علاج ہے" },
      explanation: { en: "Tasbeeh, sujood, and continuous worship until death", ur: "تسبیح، سجدہ اور موت تک مسلسل عبادت" }
    },
    {
      from: "Ibrahim's guests",
      to: "Lot's people destroyed",
      type: "sequence",
      description: { en: "Same angels, different missions", ur: "وہی فرشتے، مختلف مشن" },
      explanation: { en: "Mercy to believers, destruction to transgressors", ur: "مومنوں کے لیے رحمت، سرکشوں کے لیے تباہی" }
    }
  ],

  thematicFlow: {
    title: "From Preservation to Protection",
    titleArabic: "من الحفظ إلى الحماية",
    description: { en: "The surah moves from Quran's preservation to humanity's protection through faith", ur: "سورت قرآن کی حفاظت سے ایمان کے ذریعے انسانیت کے تحفظ کی طرف بڑھتی ہے" },
    stages: [
      {
        stage: 1,
        theme: "Quran's Nature",
        verses: "15:1-15",
        description: { en: "Clear book, preserved reminder, disbelievers' mockery", ur: "واضح کتاب، محفوظ یاددہانی، کافروں کا مذاق" }
      },
      {
        stage: 2,
        theme: "Cosmic Signs",
        verses: "15:16-25",
        description: { en: "Constellations, mountains, winds, provisions - signs of Creator", ur: "برج، پہاڑ، ہوائیں، رزق - خالق کی نشانیاں" }
      },
      {
        stage: 3,
        theme: "Creation Narrative",
        verses: "15:26-44",
        description: { en: "Man from clay, jinn from fire, Iblis's refusal and promise", ur: "مٹی سے انسان، آگ سے جن، ابلیس کا انکار اور عہد" }
      },
      {
        stage: 4,
        theme: "Paradise and Believers",
        verses: "15:45-50",
        description: { en: "Reward for the righteous - gardens, peace, immortality", ur: "نیک لوگوں کا صلہ - باغات، سکون، ابدیت" }
      },
      {
        stage: 5,
        theme: "Ibrahim's Guests",
        verses: "15:51-60",
        description: { en: "Angels bring good news to Ibrahim, proceed to destroy", ur: "فرشتے ابراہیم کو خوشخبری دیتے ہیں، پھر تباہی کے لیے روانہ ہوتے ہیں" }
      },
      {
        stage: 6,
        theme: "Lot's People",
        verses: "15:61-77",
        description: { en: "Angels arrive, people attempt evil, cities overturned", ur: "فرشتے آتے ہیں، لوگ برائی کی کوشش کرتے ہیں، شہر الٹ دیے جاتے ہیں" }
      },
      {
        stage: 7,
        theme: "Other Destroyed Nations",
        verses: "15:78-84",
        description: { en: "Aykah and Hijr - patterns of destruction", ur: "ایکہ اور حجر - تباہی کے نمونے" }
      },
      {
        stage: 8,
        theme: "Consolation and Command",
        verses: "15:85-99",
        description: { en: "Comfort for Prophet, prescription of worship until death", ur: "نبی ﷺ کے لیے تسلی، موت تک عبادت کا نسخہ" }
      }
    ]
  },

  backgroundContext: {
    title: "Revelation Context",
    description: { en: "Understanding when and why this surah was revealed", ur: "یہ سمجھنا کہ یہ سورت کب اور کیوں نازل ہوئی" },
    events: [
      {
        event: "Makkan Period",
        detail: { en: "Revealed when persecution was intense and converts were few", ur: "ایسے وقت نازل ہوئی جب ظلم و ستم شدید اور نئے مسلمان کم تھے" }
      },
      {
        event: "Mockery of the Quran",
        detail: { en: "Quraysh mocked the Quran as poetry, magic, or madness", ur: "قریش نے قرآن کو شاعری، جادو یا پاگل پن کہہ کر مذاق اڑایا" }
      },
      {
        event: "Demand for Miracles",
        detail: { en: "Disbelievers demanded angels or spectacular miracles", ur: "کافروں نے فرشتے یا شاندار معجزات کا مطالبہ کیا" }
      },
      {
        event: "Prophet's Grief",
        detail: { en: "The Prophet felt deep sorrow at his people's rejection", ur: "نبی ﷺ اپنی قوم کے انکار پر گہرا دکھ محسوس کرتے تھے" }
      }
    ],
    wisdom: { en: "The surah addresses mockery with the promise of Quran's preservation, and consoles the Prophet with stories of previous prophets who faced similar rejection", ur: "سورت مذاق کا جواب قرآن کی حفاظت کے وعدے سے دیتی ہے اور نبی ﷺ کو پچھلے انبیاء کی کہانیوں سے تسلی دیتی ہے جنہوں نے بھی اسی طرح کے انکار کا سامنا کیا" }
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 26,
        name: "Ash-Shu'ara",
        relation: { en: "Expanded narratives of destroyed nations", ur: "تباہ شدہ قوموں کے تفصیلی واقعات" },
        sharedTheme: { en: "Messenger rejection patterns", ur: "رسولوں کو جھٹلانے کے نمونے" }
      },
      {
        surah: 7,
        name: "Al-A'raf",
        verses: "7:11-18",
        relation: { en: "Parallel account of Iblis's refusal", ur: "ابلیس کے انکار کا متوازی بیان" },
        sharedTheme: { en: "Adam's creation and Iblis's fall", ur: "آدم کی تخلیق اور ابلیس کا زوال" }
      },
      {
        surah: 38,
        name: "Sad",
        verses: "38:71-85",
        relation: { en: "Another detailed Iblis narrative", ur: "ابلیس کا ایک اور تفصیلی بیان" },
        sharedTheme: { en: "Iblis's arrogance and promise", ur: "ابلیس کا تکبر اور عہد" }
      },
      {
        surah: 11,
        name: "Hud",
        relation: { en: "Stories of Thamud, Lot, Shu'ayb", ur: "ثمود، لوط، شعیب کے واقعات" },
        sharedTheme: { en: "Destroyed nations", ur: "تباہ شدہ اقوام" }
      },
      {
        surah: 51,
        name: "Adh-Dhariyat",
        verses: "51:24-37",
        relation: { en: "Ibrahim's guests and Lot's destruction", ur: "ابراہیم کے مہمان اور لوط کی تباہی" },
        sharedTheme: { en: "Angel visitation narratives", ur: "فرشتوں کی آمد کے واقعات" }
      }
    ]
  },

  hadith: [
    {
      arabic: "من قرأ سورة الحجر كان له من الأجر عشر حسنات بعدد المهاجرين والأنصار",
      english: "Whoever recites Surah Al-Hijr will have reward of ten good deeds for each Muhajir and Ansar",
      source: "Attributed, needs verification",
      relevance: { en: "Virtue of reciting this surah", ur: "اس سورت کی تلاوت کی فضیلت" }
    },
    {
      arabic: "لا تزال طائفة من أمتي ظاهرين على الحق",
      english: "A group from my ummah will always remain upon truth",
      source: "Sahih Muslim",
      relevance: { en: "Related to verse 15:9 - preservation of Quran through righteous community", ur: "آیت 15:9 سے متعلق - نیک جماعت کے ذریعے قرآن کی حفاظت" }
    }
  ],

  practicalApplication: {
    title: "Living by Al-Hijr",
    applications: [
      {
        principle: { en: "Trust the Quran's authenticity", ur: "قرآن کی صداقت پر بھروسا کریں" },
        how: { en: "The divine promise of preservation means you hold an unchanged message", ur: "حفاظت کا الٰہی وعدہ یعنی آپ کے ہاتھ میں ایک غیر تبدیل شدہ پیغام ہے" },
        verse: "15:9"
      },
      {
        principle: { en: "Recognize shaytan's methods", ur: "شیطان کے طریقے پہچانیں" },
        how: { en: "He beautifies sin - be wary when haram looks attractive", ur: "وہ گناہ کو سجاتا ہے - جب حرام خوبصورت نظر آئے تو چوکس رہیں" },
        verse: "15:39"
      },
      {
        principle: { en: "Cultivate sincerity (ikhlas)", ur: "اخلاص پیدا کریں" },
        how: { en: "Ikhlas is the shield against shaytan's influence", ur: "اخلاص شیطان کے اثر کے خلاف ڈھال ہے" },
        verse: "15:40"
      },
      {
        principle: { en: "Learn from history", ur: "تاریخ سے سبق سیکھیں" },
        how: { en: "The ruins of destroyed nations are warnings, not tourist attractions", ur: "تباہ شدہ قوموں کے کھنڈرات انتباہ ہیں، سیاحتی مقامات نہیں" },
        verse: "15:80-84"
      },
      {
        principle: { en: "Worship through grief", ur: "غم میں عبادت کریں" },
        how: { en: "When emotionally distressed, increase in tasbeeh and sujood", ur: "جب جذباتی پریشانی ہو، تسبیح اور سجدے بڑھائیں" },
        verse: "15:97-98"
      },
      {
        principle: { en: "Worship until death", ur: "موت تک عبادت کریں" },
        how: { en: "No retirement from 'ibadah - continue until yaqeen (death) arrives", ur: "عبادت سے ریٹائرمنٹ نہیں - یقین (موت) آنے تک جاری رکھیں" },
        verse: "15:99"
      },
      {
        principle: { en: "Practice gracious forgiveness", ur: "شائستہ معافی کی مشق کریں" },
        how: { en: "When wronged, turn away beautifully (safh jameel)", ur: "جب ظلم ہو تو خوبصورتی سے درگزر کریں (صفحِ جمیل)" },
        verse: "15:85"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Architecture of Divine Protection", ur: "الٰہی تحفظ کا نظام" },
    insight: { en: "This surah presents a layered system of protection: (1) The QURAN is protected by Allah - 'We will guard it' (15:9). (2) The BELIEVERS are protected from shaytan through sincerity - 'except Your sincere servants' (15:40). (3) The PROPHET is protected through worship - 'glorify and prostrate until certainty' (15:98-99). Notice the beautiful inversion: shaytan's promise to mislead (15:39) is countered by Allah's promise to protect (15:9). Iblis admits his impotence against the sincere, which tells believers exactly how to be safe. The destroyed nations (Hijr, Lot, Aykah) serve as physical proof that rejection has consequences - their ruins still exist as reminders. Most striking is the final prescription: when the Prophet's chest tightens with grief, the solution is not venting or complaint, but tasbeeh, sujood, and 'ibadah until death. This transforms pain into worship and grief into connection.", ur: "یہ سورت تحفظ کا ایک کثیر پرتی نظام پیش کرتی ہے: (1) قرآن اللہ کی حفاظت میں ہے - 'ہم خود اس کے محافظ ہیں' (15:9)۔ (2) مومنین اخلاص کے ذریعے شیطان سے محفوظ ہیں - 'سوائے آپ کے مخلص بندوں کے' (15:40)۔ (3) نبی ﷺ عبادت کے ذریعے محفوظ ہیں - 'تسبیح کریں اور سجدہ کریں یقین تک' (15:98-99)۔ خوبصورت الٹ پر غور کریں: شیطان کا گمراہ کرنے کا عہد (15:39) اللہ کے حفاظت کے وعدے (15:9) سے مقابلہ کرتا ہے۔ ابلیس مخلصین پر اپنی بے بسی کا اعتراف کرتا ہے جو مومنوں کو بتاتا ہے کہ محفوظ کیسے رہنا ہے۔ تباہ شدہ اقوام (حجر، لوط، ایکہ) اس بات کا مادی ثبوت ہیں کہ انکار کے نتائج ہوتے ہیں۔ سب سے نمایاں آخری نسخہ ہے: جب نبی ﷺ کا سینہ غم سے تنگ ہو تو علاج شکایت نہیں بلکہ تسبیح، سجود اور موت تک عبادت ہے۔ یہ درد کو عبادت اور غم کو تعلق میں بدل دیتا ہے۔" },
    modernRelevance: { en: "In an age of doubt about religious texts, 15:9 stands as a 1400-year-old promise fulfilled - the Quran remains unchanged. The shaytan's method of 'beautifying' sin (15:39) perfectly describes modern marketing of harmful lifestyles. And the prescription of worship for emotional distress (15:97-98) offers an alternative to the modern epidemic of anxiety.", ur: "مذہبی کتابوں پر شکوک کے دور میں، آیت 15:9 ایک 1400 سالہ پورا شدہ وعدہ ہے - قرآن غیر تبدیل رہا۔ شیطان کا گناہ کو 'سجانے' کا طریقہ (15:39) نقصاندہ طرزِ زندگی کی جدید مارکیٹنگ کو بالکل بیان کرتا ہے۔ اور جذباتی پریشانی کے لیے عبادت کا نسخہ (15:97-98) پریشانی کی جدید وبا کا متبادل پیش کرتا ہے۔" }
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        feature: "Emphatic preservation promise",
        example: "إِنَّا نَحْنُ نَزَّلْنَا... وَإِنَّا لَهُ لَحَافِظُونَ",
        effect: { en: "Five emphatic devices in one verse (inna, nahnu, nazzalna, inna, la) - maximum certainty", ur: "ایک آیت میں پانچ تاکیدی اسالیب (اِنّا، نحنُ، نزّلنا، اِنّا، لَ) - انتہائی یقین" }
      },
      {
        feature: "Iblis's dialogue",
        example: { en: "Direct speech reveals character", ur: "براہ راست تقریر کردار کو ظاہر کرتی ہے" },
        effect: { en: "Readers hear shaytan's arrogant reasoning in his own words", ur: "قارئین شیطان کی متکبرانہ دلیل اس کے اپنے الفاظ میں سنتے ہیں" }
      },
      {
        feature: "Creation stages",
        example: "صَلْصَال مِنْ حَمَإٍ مَسْنُونٍ",
        effect: { en: "Rare vocabulary paints vivid picture of clay transformation", ur: "نایاب الفاظ مٹی کی تبدیلی کی واضح تصویر پیش کرتے ہیں" }
      },
      {
        feature: "Safh Jameel",
        example: "فَاصْفَحِ الصَّفْحَ الْجَمِيلَ",
        effect: { en: "Cognate accusative (maf'ul mutlaq) intensifies the beauty of forgiveness", ur: "مفعول مطلق معافی کی خوبصورتی کو مزید بڑھاتا ہے" }
      }
    ]
  },

  comparisonTable: {
    title: "Iblis's Reasoning vs. Divine Reality",
    headers: ["Iblis's Claim", "Reality", "Lesson"],
    rows: [
      {
        claim: { en: "Fire > Clay (I'm superior)", ur: "آگ > مٹی (میں برتر ہوں)" },
        reality: { en: "Honor is by obedience, not origin", ur: "عزت اطاعت سے ہے، اصل سے نہیں" },
        lesson: { en: "Never judge worth by background", ur: "کبھی پس منظر سے قدر نہ پرکھیں" }
      },
      {
        claim: { en: "I will mislead all", ur: "میں سب کو گمراہ کروں گا" },
        reality: { en: "Sincere servants are protected", ur: "مخلص بندے محفوظ ہیں" },
        lesson: { en: "Ikhlas is the ultimate shield", ur: "اخلاص سب سے بڑی ڈھال ہے" }
      },
      {
        claim: { en: "I'll beautify sin for them", ur: "میں ان کے لیے گناہ سجاؤں گا" },
        reality: { en: "Allah guides whom He wills", ur: "اللہ جسے چاہے ہدایت دیتا ہے" },
        lesson: { en: "Stay close to revelation", ur: "وحی سے قریب رہیں" }
      }
    ]
  },

  destroyedNationsComparison: {
    title: "Patterns of Destruction",
    headers: ["Nation", "Prophet", "Sin", "Punishment", "Verse"],
    rows: [
      {
        nation: "Thamud (Hijr)",
        prophet: "Salih",
        sin: { en: "Killed the she-camel, rejected signs", ur: "اونٹنی کو قتل کیا، نشانیاں جھٹلائیں" },
        punishment: { en: "Single mighty blast (sayhah)", ur: "ایک زبردست چیخ (صیحہ)" },
        verse: "15:80-84"
      },
      {
        nation: "People of Lot",
        prophet: "Lot",
        sin: { en: "Homosexuality, attempted assault on angels", ur: "ہم جنس پرستی، فرشتوں پر حملے کی کوشش" },
        punishment: { en: "Cities overturned, rained with stones", ur: "شہر الٹ دیے گئے، پتھروں کی بارش" },
        verse: "15:58-77"
      },
      {
        nation: "Aykah (Madyan)",
        prophet: "Shu'ayb",
        sin: { en: "Cheating in weights and measures", ur: "ناپ تول میں دھوکا" },
        punishment: { en: "Punishment of the Day of Shadow", ur: "سائے والے دن کا عذاب" },
        verse: "15:78-79"
      }
    ]
  },

  memorization: {
    title: "Memorization Structure",
    outline: [
      "Verses 1-15: Quran's nature and disbelievers' mockery",
      "Verses 16-25: Cosmic signs (sky, earth, provisions)",
      "Verses 26-44: Adam's creation, Iblis's refusal and promise",
      "Verses 45-50: Paradise description",
      "Verses 51-60: Ibrahim and the angel guests",
      "Verses 61-77: Lot's people and their destruction",
      "Verses 78-84: Aykah and Hijr (Thamud)",
      "Verses 85-99: Consolation, forgiveness, worship until death"
    ],
    mnemonic: "Quran preserved - Signs shown - Creation told - Paradise promised - Ibrahim visited - Lot destroyed - Nations ruined - Prophet consoled"
  },

  spiritualPrescription: {
    title: "When to Recite Al-Hijr",
    occasions: [
      { en: "When doubting the Quran's authenticity (15:9 reassures)", ur: "جب قرآن کی صداقت پر شک ہو (15:9 اطمینان دیتی ہے)" },
      { en: "When tempted by beautified sin (15:39 warns)", ur: "جب سجے ہوئے گناہ کا لالچ ہو (15:39 خبردار کرتی ہے)" },
      { en: "When struggling with sincerity (15:40 motivates)", ur: "جب اخلاص میں مشکل ہو (15:40 حوصلہ دیتی ہے)" },
      { en: "When grieving rejection or failure (15:97-99 prescribes)", ur: "جب انکار یا ناکامی کا غم ہو (15:97-99 نسخہ دیتی ہے)" },
      { en: "When needing to forgive graciously (15:85 models)", ur: "جب شائستہ معافی کی ضرورت ہو (15:85 نمونہ ہے)" },
      { en: "When wanting to understand shaytan's methods (15:39-42 exposes)", ur: "جب شیطان کے طریقے سمجھنا ہوں (15:39-42 بے نقاب کرتی ہے)" }
    ],
    effect: { en: "This surah builds trust in scripture, awareness of shaytan, and resilience through worship", ur: "یہ سورت کتاب پر اعتماد، شیطان سے آگاہی اور عبادت کے ذریعے استقامت پیدا کرتی ہے" }
  },

  theVerseOfPreservation: {
    title: "The Most Important Verse: 15:9",
    arabic: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
    transliteration: "Inna nahnu nazzalna adh-dhikra wa inna lahu la-haafizoon",
    translation: { en: "Indeed, it is We who sent down the Reminder (Quran), and indeed, We will be its Guardian", ur: "بے شک ہم نے ہی اس ذکر (قرآن) کو نازل کیا اور بے شک ہم خود اس کے محافظ ہیں" },
    significance: [
      { en: "Divine promise of Quran's preservation - unique among scriptures", ur: "قرآن کی حفاظت کا الٰہی وعدہ - تمام کتابوں میں منفرد" },
      { en: "Unlike Torah and Gospel entrusted to humans, Allah guards the Quran directly", ur: "تورات اور انجیل کے برعکس جو انسانوں کے سپرد تھیں، اللہ براہ راست قرآن کی حفاظت کرتا ہے" },
      { en: "1400 years of fulfilled prophecy - not a letter changed", ur: "1400 سال کی پوری ہوتی پیشگوئی - ایک حرف نہیں بدلا" },
      { en: "Basis for Muslim confidence in Quran's textual integrity", ur: "قرآن کی متنی سالمیت پر مسلمانوں کے اعتماد کی بنیاد" },
      { en: "Answers the challenge: 'Prove your book isn't corrupted'", ur: "اس چیلنج کا جواب: 'ثابت کرو کہ تمہاری کتاب بگڑی نہیں ہے'" }
    ]
  }
};

export default ONTOLOGY;
