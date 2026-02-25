/**
 * Surah Al-Ahzab (33) - Ontology of Quranic Concepts
 * The Confederates / The Combined Forces - 73 Ayahs, Medinan
 *
 * Theme: Battle of the Trench (Khandaq), Prophet's household, hijab laws, adoption reforms
 * Revelation: Medinan (5 AH - Year of the Trench)
 *
 * Major Themes:
 * 1. Battle of the Confederates (Al-Ahzab) - Quraysh + Ghatafan + Jewish tribes alliance
 * 2. Abolition of adoption as lineage (Zayd ibn Haritha case)
 * 3. Wives of the Prophet - their status and responsibilities
 * 4. Hijab verses - modesty laws for believing women
 * 5. Prophet's unique status and responsibilities
 *
 * Historical Context:
 * - Battle of Khandaq (Trench): Shawwal 5 AH
 * - 10,000 confederate army vs 3,000 Muslims
 * - Trench strategy suggested by Salman al-Farisi
 * - Banu Qurayza's betrayal during siege
 * - Divine intervention: fierce wind and angels
 */

export const ONTOLOGY = {
  surahId: 33,
  surahName: "Al-Ahzab",
  surahNameArabic: "الأحزاب",
  meaning: { en: "The Confederates / The Combined Forces", ur: "اتحادی فوجیں / متحدہ لشکر" },
  revelationType: "Madani",
  totalAyahs: 73,

  categories: {
    // 1. OPENING: GUIDANCE FOR THE PROPHET
    propheticGuidance: {
      name: "Guidance for the Prophet",
      nameUr: "نبی ﷺ کے لیے ہدایت",
      nameArabic: "توجيهات للنبي",
      color: "#3B82F6",
      icon: "Compass",
      description: { en: "Opening instructions to the Prophet about trusting Allah and ignoring disbelievers", ur: "نبی ﷺ کو اللہ پر بھروسہ رکھنے اور کافروں کی بات نہ ماننے کی ابتدائی ہدایات" },
      verses: "33:1-3",
      concepts: [
        {
          term: "يَا أَيُّهَا النَّبِيُّ اتَّقِ اللَّهَ",
          meaning: { en: "O Prophet, fear Allah", ur: "اے نبی، اللہ سے ڈرو" },
          explanation: { en: "Direct address establishing the surah's personal nature - guidance for the Prophet himself", ur: "براہِ راست خطاب جو سورت کی ذاتی نوعیت قائم کرتا ہے - خود نبی ﷺ کے لیے رہنمائی" },
          verseRef: "33:1"
        },
        {
          term: "وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ",
          meaning: { en: "And do not obey disbelievers and hypocrites", ur: "اور کافروں اور منافقوں کی اطاعت نہ کرو" },
          explanation: { en: "Warning against succumbing to pressure from external and internal enemies", ur: "بیرونی اور اندرونی دشمنوں کے دباؤ میں نہ آنے کی تنبیہ" },
          verseRef: "33:1"
        },
        {
          term: "إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا",
          meaning: { en: "Indeed Allah is All-Knowing, All-Wise", ur: "بے شک اللہ سب جاننے والا، حکمت والا ہے" },
          explanation: { en: "Allah's knowledge surpasses human scheming", ur: "اللہ کا علم انسانی چالوں سے بالاتر ہے" },
          verseRef: "33:1"
        },
        {
          term: "وَاتَّبِعْ مَا يُوحَىٰ إِلَيْكَ مِن رَّبِّكَ",
          meaning: { en: "And follow what is revealed to you from your Lord", ur: "اور اپنے رب کی طرف سے نازل کردہ وحی کی پیروی کرو" },
          explanation: { en: "Revelation as the only guide, not human opinions", ur: "وحی ہی واحد رہنما ہے، انسانی رائے نہیں" },
          verseRef: "33:2"
        },
        {
          term: "وَتَوَكَّلْ عَلَى اللَّهِ",
          meaning: { en: "And put your trust in Allah", ur: "اور اللہ پر توکل کرو" },
          explanation: { en: "Tawakkul - reliance on Allah amidst overwhelming odds", ur: "توکل - مشکل ترین حالات میں بھی اللہ پر بھروسہ" },
          verseRef: "33:3"
        },
        {
          term: "وَكَفَىٰ بِاللَّهِ وَكِيلًا",
          meaning: { en: "And sufficient is Allah as Disposer of affairs", ur: "اور اللہ کافی ہے بطور کارساز" },
          explanation: { en: "Allah alone is enough - preparation for battle narrative", ur: "اللہ اکیلا ہی کافی ہے - جنگ کے بیان کی تمہید" },
          verseRef: "33:3"
        }
      ]
    },

    // 2. ABOLITION OF ADOPTION AS LINEAGE
    adoptionReform: {
      name: "Reform of Adoption Laws",
      nameUr: "گود لینے کے قوانین کی اصلاح",
      nameArabic: "إصلاح قوانين التبني",
      color: "#10B981",
      icon: "Scale",
      description: { en: "Abolishing the pre-Islamic practice of calling adopted sons by father's name", ur: "منہ بولے بیٹوں کو باپ کے نام سے پکارنے کی قبل از اسلام رسم کا خاتمہ" },
      verses: "33:4-6",
      concepts: [
        {
          term: "مَّا جَعَلَ اللَّهُ لِرَجُلٍ مِّن قَلْبَيْنِ فِي جَوْفِهِ",
          meaning: { en: "Allah has not made for a man two hearts in his body", ur: "اللہ نے کسی آدمی کے اندر دو دل نہیں رکھے" },
          explanation: { en: "Metaphor: just as one cannot have two hearts, one cannot have two fathers", ur: "استعارہ: جیسے دو دل نہیں ہو سکتے، ویسے ہی دو باپ نہیں ہو سکتے" },
          verseRef: "33:4"
        },
        {
          term: "وَمَا جَعَلَ أَدْعِيَاءَكُمْ أَبْنَاءَكُمْ",
          meaning: { en: "Nor has He made your adopted sons your [real] sons", ur: "اور نہ اس نے تمہارے منہ بولے بیٹوں کو تمہارے حقیقی بیٹے بنایا" },
          explanation: { en: "Legal ruling: adopted children retain their biological lineage", ur: "شرعی حکم: لے پالک بچے اپنے حقیقی نسب پر ہی رہتے ہیں" },
          verseRef: "33:4"
        },
        {
          term: "ذَٰلِكُمْ قَوْلُكُم بِأَفْوَاهِكُمْ",
          meaning: { en: "That is your saying by your mouths", ur: "یہ تمہارے منہ کی باتیں ہیں" },
          explanation: { en: "Calling someone 'son' doesn't change biological reality", ur: "کسی کو 'بیٹا' کہنا حقیقی نسب نہیں بدلتا" },
          verseRef: "33:4"
        },
        {
          term: "ادْعُوهُمْ لِآبَائِهِمْ",
          meaning: { en: "Call them by [the names of] their fathers", ur: "انہیں ان کے باپوں کے نام سے پکارو" },
          explanation: { en: "Legal requirement: use biological father's name (Zayd ibn Haritha, not Zayd ibn Muhammad)", ur: "شرعی تقاضا: حقیقی باپ کا نام استعمال کرو (زید بن حارثہ، نہ کہ زید بن محمد)" },
          verseRef: "33:5"
        },
        {
          term: "هُوَ أَقْسَطُ عِندَ اللَّهِ",
          meaning: { en: "That is more just in the sight of Allah", ur: "یہ اللہ کے نزدیک زیادہ انصاف ہے" },
          explanation: { en: "Preserving lineage is justice - inheritance and mahram laws depend on it", ur: "نسب کی حفاظت انصاف ہے - وراثت اور محرم کے احکام اسی پر منحصر ہیں" },
          verseRef: "33:5"
        },
        {
          term: "فَإِن لَّمْ تَعْلَمُوا آبَاءَهُمْ فَإِخْوَانُكُمْ فِي الدِّينِ",
          meaning: { en: "If you do not know their fathers - then they are your brothers in religion", ur: "اگر تمہیں ان کے باپ معلوم نہ ہوں تو وہ دین میں تمہارے بھائی ہیں" },
          explanation: { en: "Unknown parentage: call them 'brother' - Islamic brotherhood", ur: "نامعلوم نسب: انہیں 'بھائی' کہو - اسلامی اخوت" },
          verseRef: "33:5"
        },
        {
          term: "وَمَوَالِيكُمْ",
          meaning: { en: "And your freed slaves", ur: "اور تمہارے آزاد کردہ غلام" },
          explanation: { en: "Alternative designation for those of unknown lineage", ur: "نامعلوم نسب والوں کے لیے متبادل شناخت" },
          verseRef: "33:5"
        },
        {
          term: "النَّبِيُّ أَوْلَىٰ بِالْمُؤْمِنِينَ مِنْ أَنفُسِهِمْ",
          meaning: { en: "The Prophet is closer to the believers than their own selves", ur: "نبی مومنوں کے ان کی اپنی جانوں سے زیادہ قریب ہیں" },
          explanation: { en: "Prophet's authority exceeds even self-interest", ur: "نبی ﷺ کا اختیار ذاتی مفاد سے بھی بالاتر ہے" },
          verseRef: "33:6"
        },
        {
          term: "وَأَزْوَاجُهُ أُمَّهَاتُهُمْ",
          meaning: { en: "And his wives are their mothers", ur: "اور ان کی بیویاں ان کی مائیں ہیں" },
          explanation: { en: "Mothers of the Believers - cannot marry them after Prophet", ur: "امہات المومنین - نبی ﷺ کے بعد ان سے نکاح نہیں ہو سکتا" },
          verseRef: "33:6"
        },
        {
          term: "وَأُولُو الْأَرْحَامِ بَعْضُهُمْ أَوْلَىٰ بِبَعْضٍ",
          meaning: { en: "Blood relatives are closer to one another", ur: "خون کے رشتے دار ایک دوسرے سے زیادہ قریب ہیں" },
          explanation: { en: "Biological kinship takes precedence in inheritance", ur: "وراثت میں حقیقی خونی رشتے کو ترجیح حاصل ہے" },
          verseRef: "33:6"
        }
      ]
    },

    // 3. COVENANT OF THE PROPHETS
    propheticCovenant: {
      color: "#F59E0B",
      icon: "Star",
      name: "Covenant with the Prophets",
      nameUr: "انبیاء سے عہد",
      nameArabic: "ميثاق النبيين",
      concepts: [
        {
          term: "وَإِذْ أَخَذْنَا مِنَ النَّبِيِّينَ مِيثَاقَهُمْ",
          meaning: { en: "When We took from the prophets their covenant", ur: "جب ہم نے نبیوں سے ان کا عہد لیا" },
          explanation: { en: "Divine covenant with all prophets to convey the message", ur: "تمام انبیاء سے پیغام پہنچانے کا الٰہی عہد" },
          verseRef: "33:7"
        },
        {
          term: "وَمِنكَ وَمِن نُّوحٍ وَإِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَى",
          meaning: { en: "And from you, Noah, Abraham, Moses, and Jesus", ur: "اور آپ سے، نوح، ابراہیم، موسیٰ اور عیسیٰ سے" },
          explanation: { en: "Five greatest prophets (Ulul-Azm) - special mention", ur: "پانچ عظیم ترین انبیاء (اولوالعزم) - خصوصی ذکر" },
          verseRef: "33:7"
        },
        {
          term: "وَأَخَذْنَا مِنْهُم مِّيثَاقًا غَلِيظًا",
          meaning: { en: "And We took from them a solemn covenant", ur: "اور ہم نے ان سے پختہ عہد لیا" },
          explanation: { en: "Heavy covenant - greater responsibility, greater accountability", ur: "بھاری عہد - بڑی ذمہ داری، بڑا احتساب" },
          verseRef: "33:7"
        },
        {
          term: "لِّيَسْأَلَ الصَّادِقِينَ عَن صِدْقِهِمْ",
          meaning: { en: "That He may ask the truthful about their truthfulness", ur: "تاکہ وہ سچوں سے ان کی سچائی کے بارے میں پوچھے" },
          explanation: { en: "Even prophets will be questioned - accountability for message delivery", ur: "انبیاء سے بھی سوال ہوگا - پیغام پہنچانے کا احتساب" },
          verseRef: "33:8"
        }
      ]
    },

    // 4. BATTLE OF THE TRENCH (KHANDAQ)
    battleOfTrench: {
      name: "Battle of the Trench",
      nameUr: "غزوۂ خندق",
      nameArabic: "غزوة الخندق",
      color: "#EF4444",
      icon: "Shield",
      description: { en: "The siege of Medina by 10,000 confederates - divine intervention", ur: "10,000 اتحادیوں کا مدینہ کا محاصرہ - الٰہی مداخلت" },
      verses: "33:9-27",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ",
          meaning: { en: "O believers, remember Allah's favor upon you", ur: "اے ایمان والو، اپنے اوپر اللہ کی نعمت یاد کرو" },
          explanation: { en: "Gratitude for divine deliverance from confederate armies", ur: "اتحادی فوجوں سے الٰہی نجات پر شکر" },
          verseRef: "33:9"
        },
        {
          term: "إِذْ جَاءَتْكُمْ جُنُودٌ",
          meaning: { en: "When armies came against you", ur: "جب لشکر تمہارے خلاف آئے" },
          explanation: { en: "10,000 warriors: Quraysh, Ghatafan, Banu Asad, Banu Sulaym, Jewish tribes", ur: "10,000 جنگجو: قریش، غطفان، بنو اسد، بنو سلیم، یہودی قبائل" },
          verseRef: "33:9"
        },
        {
          term: "فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا",
          meaning: { en: "And We sent against them a wind", ur: "اور ہم نے ان پر ہوا بھیجی" },
          explanation: { en: "Fierce east wind for days - overturned tents, extinguished fires", ur: "کئی دن تک تیز مشرقی ہوا - خیمے اکھاڑ دیے، آگ بجھا دی" },
          verseRef: "33:9"
        },
        {
          term: "وَجُنُودًا لَّمْ تَرَوْهَا",
          meaning: { en: "And armies you did not see", ur: "اور ایسے لشکر جو تمہیں نظر نہیں آئے" },
          explanation: { en: "Angels sent to strike terror into enemy hearts", ur: "فرشتے بھیجے گئے جنہوں نے دشمنوں کے دلوں میں خوف ڈالا" },
          verseRef: "33:9"
        },
        {
          term: "إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ",
          meaning: { en: "When they came from above you and below you", ur: "جب وہ تمہارے اوپر سے اور نیچے سے آئے" },
          explanation: { en: "Surrounded: Quraysh from south, Ghatafan from east, Banu Qurayza from within", ur: "گھیراؤ: قریش جنوب سے، غطفان مشرق سے، بنو قریظہ اندر سے" },
          verseRef: "33:10"
        },
        {
          term: "وَإِذْ زَاغَتِ الْأَبْصَارُ",
          meaning: { en: "And when eyes shifted [in fear]", ur: "اور جب آنکھیں [خوف سے] پھر گئیں" },
          explanation: { en: "Terror of being surrounded - eyes darting in panic", ur: "محاصرے کی دہشت - آنکھیں خوف سے ادھر ادھر گھوم رہی تھیں" },
          verseRef: "33:10"
        },
        {
          term: "وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ",
          meaning: { en: "And hearts reached the throats", ur: "اور دل حلق تک آ پہنچے" },
          explanation: { en: "Arabic idiom for extreme fear - hearts seemed to jump to throats", ur: "شدید خوف کا عربی محاورہ - دل گلے تک آ گئے" },
          verseRef: "33:10"
        },
        {
          term: "وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا",
          meaning: { en: "And you assumed about Allah [various] assumptions", ur: "اور تم اللہ کے بارے میں طرح طرح کے گمان کرنے لگے" },
          explanation: { en: "Some doubted Allah's promise - crisis of faith for weak believers", ur: "کچھ لوگوں نے اللہ کے وعدے پر شک کیا - کمزور ایمان والوں کا بحرانِ ایمان" },
          verseRef: "33:10"
        },
        {
          term: "هُنَالِكَ ابْتُلِيَ الْمُؤْمِنُونَ",
          meaning: { en: "There the believers were tested", ur: "وہاں مومنوں کی آزمائش ہوئی" },
          explanation: { en: "Ultimate test of faith - distinguishing true from false", ur: "ایمان کی سخت ترین آزمائش - سچے اور جھوٹے کی تمیز" },
          verseRef: "33:11"
        },
        {
          term: "وَزُلْزِلُوا زِلْزَالًا شَدِيدًا",
          meaning: { en: "And shaken with a severe shaking", ur: "اور شدید جھنجھوڑے سے جھنجھوڑے گئے" },
          explanation: { en: "Earthquake of the soul - foundations of faith tested", ur: "روح کا زلزلہ - ایمان کی بنیادیں آزمائی گئیں" },
          verseRef: "33:11"
        }
      ]
    },

    // 5. HYPOCRITES DURING THE SIEGE
    hypocritesExposed: {
      name: "Hypocrites Exposed",
      nameUr: "منافقین کا پردہ فاش",
      nameArabic: "انكشاف المنافقين",
      color: "#EF4444",
      icon: "Eye",
      description: { en: "How the siege revealed the hypocrites' true nature", ur: "محاصرے نے منافقوں کی اصل حقیقت کیسے بے نقاب کی" },
      verses: "33:12-20",
      concepts: [
        {
          term: "وَإِذْ يَقُولُ الْمُنَافِقُونَ وَالَّذِينَ فِي قُلُوبِهِم مَّرَضٌ",
          meaning: { en: "And when the hypocrites and those with disease in hearts said", ur: "اور جب منافقوں اور دل کے بیمار لوگوں نے کہا" },
          explanation: { en: "Crisis reveals character - hypocrites speak their truth", ur: "بحران کردار کو ظاہر کرتا ہے - منافقوں نے اپنی اصلیت ظاہر کی" },
          verseRef: "33:12"
        },
        {
          term: "مَّا وَعَدَنَا اللَّهُ وَرَسُولُهُ إِلَّا غُرُورًا",
          meaning: { en: "Allah and His Messenger promised us nothing but delusion", ur: "اللہ اور اس کے رسول نے ہم سے صرف دھوکے کا وعدہ کیا تھا" },
          explanation: { en: "Accusing Allah and Prophet of false promises", ur: "اللہ اور نبی ﷺ پر جھوٹے وعدوں کا الزام" },
          verseRef: "33:12"
        },
        {
          term: "يَا أَهْلَ يَثْرِبَ لَا مُقَامَ لَكُمْ فَارْجِعُوا",
          meaning: { en: "O people of Yathrib, there is no staying for you, so return", ur: "اے یثرب والو، تمہارے لیے ٹھہرنا ممکن نہیں، واپس لوٹ جاؤ" },
          explanation: { en: "Calling for desertion - using old name 'Yathrib' not 'Madinah'", ur: "فرار کی دعوت - پرانا نام 'یثرب' استعمال کیا 'مدینہ' نہیں" },
          verseRef: "33:13"
        },
        {
          term: "وَيَسْتَأْذِنُ فَرِيقٌ مِّنْهُمُ النَّبِيَّ يَقُولُونَ إِنَّ بُيُوتَنَا عَوْرَةٌ",
          meaning: { en: "A group asked Prophet's permission saying 'Our homes are exposed'", ur: "ایک گروہ نے نبی ﷺ سے اجازت مانگی کہ 'ہمارے گھر بے حفاظت ہیں'" },
          explanation: { en: "Excuse-making: 'Our houses are unprotected' - seeking to flee", ur: "بہانہ سازی: 'ہمارے گھر غیر محفوظ ہیں' - بھاگنے کی کوشش" },
          verseRef: "33:13"
        },
        {
          term: "وَمَا هِيَ بِعَوْرَةٍ ۖ إِن يُرِيدُونَ إِلَّا فِرَارًا",
          meaning: { en: "They were not exposed - they only wanted to flee", ur: "وہ بے حفاظت نہیں تھے - وہ صرف بھاگنا چاہتے تھے" },
          explanation: { en: "Allah exposes the lie - they simply wanted to escape", ur: "اللہ نے جھوٹ بے نقاب کیا - وہ محض فرار چاہتے تھے" },
          verseRef: "33:13"
        },
        {
          term: "وَلَوْ دُخِلَتْ عَلَيْهِم مِّنْ أَقْطَارِهَا",
          meaning: { en: "If [the enemy] had entered upon them from all sides", ur: "اگر [دشمن] ہر طرف سے ان پر چڑھ آتے" },
          explanation: { en: "Hypothetical test: would they fight or betray?", ur: "فرضی امتحان: کیا وہ لڑتے یا غداری کرتے؟" },
          verseRef: "33:14"
        },
        {
          term: "ثُمَّ سُئِلُوا الْفِتْنَةَ لَآتَوْهَا",
          meaning: { en: "Then asked for fitnah, they would have done it", ur: "پھر اگر ان سے فتنہ مانگا جاتا تو وہ کر دکھاتے" },
          explanation: { en: "If asked to betray Islam, they would comply readily", ur: "اگر اسلام سے غداری کا کہا جاتا تو فوراً مان لیتے" },
          verseRef: "33:14"
        },
        {
          term: "قُل لَّن يَنفَعَكُمُ الْفِرَارُ إِن فَرَرْتُم مِّنَ الْمَوْتِ",
          meaning: { en: "Say: Fleeing will not benefit you if you flee from death", ur: "کہو: اگر تم موت سے بھاگو تو بھاگنا تمہیں فائدہ نہ دے گا" },
          explanation: { en: "Death is appointed - running won't change it", ur: "موت مقرر ہے - بھاگنے سے تبدیل نہیں ہوگی" },
          verseRef: "33:16"
        },
        {
          term: "يَحْسَبُونَ الْأَحْزَابَ لَمْ يَذْهَبُوا",
          meaning: { en: "They think the confederates have not departed", ur: "وہ سمجھتے ہیں کہ اتحادی ابھی نہیں گئے" },
          explanation: { en: "Even after victory, hypocrites lived in fear", ur: "فتح کے بعد بھی منافق خوف میں جیتے رہے" },
          verseRef: "33:20"
        },
        {
          term: "وَإِن يَأْتِ الْأَحْزَابُ يَوَدُّوا لَوْ أَنَّهُم بَادُونَ فِي الْأَعْرَابِ",
          meaning: { en: "If confederates return, they wish they were in the desert", ur: "اگر اتحادی واپس آئیں تو وہ چاہتے ہیں کہ صحرا میں ہوتے" },
          explanation: { en: "Cowardice: preferring to be far away with Bedouins", ur: "بزدلی: بادیہ نشینوں کے ساتھ دور ہونے کو ترجیح" },
          verseRef: "33:20"
        },
        {
          term: "أَشِحَّةً عَلَيْكُمْ",
          meaning: { en: "Grudging toward you", ur: "تم پر بخیلی کرنے والے" },
          explanation: { en: "Stingy with help, present only for appearance", ur: "مدد میں کنجوس، صرف دکھاوے کے لیے حاضر" },
          verseRef: "33:19"
        }
      ]
    },

    // 6. BELIEVERS' STEADFASTNESS
    believersSteadfast: {
      name: "Believers' Steadfastness",
      nameUr: "مومنوں کی ثابت قدمی",
      nameArabic: "ثبات المؤمنين",
      color: "#10B981",
      icon: "Shield",
      description: { en: "True believers' response to the crisis", ur: "سچے مومنوں کا بحران کے وقت ردعمل" },
      verses: "33:21-24",
      concepts: [
        {
          term: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
          meaning: { en: "There has certainly been for you in the Messenger of Allah an excellent example", ur: "بے شک تمہارے لیے رسول اللہ میں بہترین نمونہ ہے" },
          explanation: { en: "Prophet as role model (Uswatun Hasana) - central concept", ur: "نبی ﷺ بطور نمونہ (اسوۂ حسنہ) - مرکزی تصور" },
          verseRef: "33:21"
        },
        {
          term: "لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ",
          meaning: { en: "For whoever hopes in Allah and the Last Day", ur: "اس شخص کے لیے جو اللہ اور آخرت کی امید رکھتا ہو" },
          explanation: { en: "Condition: must believe in Allah and Hereafter to follow", ur: "شرط: پیروی کے لیے اللہ اور آخرت پر ایمان ضروری ہے" },
          verseRef: "33:21"
        },
        {
          term: "وَذَكَرَ اللَّهَ كَثِيرًا",
          meaning: { en: "And remembers Allah often", ur: "اور اللہ کو کثرت سے یاد کرتا ہو" },
          explanation: { en: "Dhikr-abundant life - characteristic of true followers", ur: "ذکر سے بھرپور زندگی - سچے پیروکاروں کی خصوصیت" },
          verseRef: "33:21"
        },
        {
          term: "وَلَمَّا رَأَى الْمُؤْمِنُونَ الْأَحْزَابَ",
          meaning: { en: "When the believers saw the confederates", ur: "اور جب مومنوں نے اتحادیوں کو دیکھا" },
          explanation: { en: "True believers' response to overwhelming odds", ur: "بھاری مشکلات کے سامنے سچے مومنوں کا ردعمل" },
          verseRef: "33:22"
        },
        {
          term: "قَالُوا هَٰذَا مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ",
          meaning: { en: "They said: This is what Allah and His Messenger promised us", ur: "انہوں نے کہا: یہ وہی ہے جس کا اللہ اور اس کے رسول نے وعدہ کیا تھا" },
          explanation: { en: "Contrast to hypocrites: believers saw confirmation of prophecy", ur: "منافقوں کے برعکس: مومنوں نے پیشگوئی کی تصدیق دیکھی" },
          verseRef: "33:22"
        },
        {
          term: "وَصَدَقَ اللَّهُ وَرَسُولُهُ",
          meaning: { en: "And Allah and His Messenger spoke the truth", ur: "اور اللہ اور اس کے رسول نے سچ فرمایا" },
          explanation: { en: "Affirmation of divine promise amidst difficulty", ur: "مشکل کے عالم میں الٰہی وعدے کی تصدیق" },
          verseRef: "33:22"
        },
        {
          term: "وَمَا زَادَهُمْ إِلَّا إِيمَانًا وَتَسْلِيمًا",
          meaning: { en: "And it increased them only in faith and submission", ur: "اور اس نے ان کے ایمان اور فرمانبرداری میں اضافہ ہی کیا" },
          explanation: { en: "Trial strengthened them - opposite of hypocrites", ur: "آزمائش نے انہیں مضبوط کیا - منافقوں کے بالکل برعکس" },
          verseRef: "33:22"
        },
        {
          term: "رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ",
          meaning: { en: "Men who were true to what they pledged to Allah", ur: "ایسے مرد جنہوں نے اللہ سے کیے گئے عہد کو سچ کر دکھایا" },
          explanation: { en: "Fulfilling the covenant - like Anas ibn Nadr", ur: "عہد کی تکمیل - جیسے انس بن نضر رضی اللہ عنہ" },
          verseRef: "33:23"
        },
        {
          term: "فَمِنْهُم مَّن قَضَىٰ نَحْبَهُ",
          meaning: { en: "Among them those who fulfilled their vow [by dying]", ur: "ان میں سے وہ جنہوں نے اپنی نذر پوری کر دی [شہادت پا کر]" },
          explanation: { en: "Martyrs who completed their promise", ur: "شہداء جنہوں نے اپنا وعدہ پورا کیا" },
          verseRef: "33:23"
        },
        {
          term: "وَمِنْهُم مَّن يَنتَظِرُ",
          meaning: { en: "And among them those who await", ur: "اور ان میں سے وہ جو انتظار میں ہیں" },
          explanation: { en: "Still living, awaiting opportunity for martyrdom", ur: "ابھی زندہ ہیں، شہادت کے موقع کے منتظر" },
          verseRef: "33:23"
        },
        {
          term: "وَمَا بَدَّلُوا تَبْدِيلًا",
          meaning: { en: "And they did not alter [their commitment]", ur: "اور انہوں نے [اپنے عہد میں] کوئی تبدیلی نہیں کی" },
          explanation: { en: "Consistency - no change despite pressure", ur: "استقامت - دباؤ کے باوجود کوئی تبدیلی نہیں" },
          verseRef: "33:23"
        }
      ]
    },

    // 7. DEFEAT OF THE CONFEDERATES
    confederatesDefeat: {
      name: "Defeat of the Confederates",
      nameUr: "احزاب کی شکست",
      nameArabic: "هزيمة الأحزاب",
      color: "#F59E0B",
      icon: "Star",
      description: { en: "Divine intervention and defeat of enemy alliance", ur: "الٰہی مداخلت اور دشمن اتحاد کی شکست" },
      verses: "33:25-27",
      concepts: [
        {
          term: "وَرَدَّ اللَّهُ الَّذِينَ كَفَرُوا بِغَيْظِهِمْ",
          meaning: { en: "And Allah repelled the disbelievers in their rage", ur: "اور اللہ نے کافروں کو ان کے غصے سمیت واپس لوٹا دیا" },
          explanation: { en: "Sent back empty-handed despite massive army", ur: "بڑے لشکر کے باوجود خالی ہاتھ واپس بھیج دیے" },
          verseRef: "33:25"
        },
        {
          term: "لَمْ يَنَالُوا خَيْرًا",
          meaning: { en: "Having not obtained any good", ur: "کوئی فائدہ حاصل نہ کر سکے" },
          explanation: { en: "Complete failure - no victory, no plunder", ur: "مکمل ناکامی - نہ فتح نہ مالِ غنیمت" },
          verseRef: "33:25"
        },
        {
          term: "وَكَفَى اللَّهُ الْمُؤْمِنِينَ الْقِتَالَ",
          meaning: { en: "And Allah was sufficient for the believers in battle", ur: "اور اللہ مومنوں کے لیے لڑائی میں کافی ہو گیا" },
          explanation: { en: "No major fighting needed - Allah handled it", ur: "بڑی لڑائی کی ضرورت نہیں پڑی - اللہ نے سنبھال لیا" },
          verseRef: "33:25"
        },
        {
          term: "وَكَانَ اللَّهُ قَوِيًّا عَزِيزًا",
          meaning: { en: "And Allah is ever Strong, Mighty", ur: "اور اللہ ہمیشہ سے طاقتور، غالب ہے" },
          explanation: { en: "Divine power exceeds any human army", ur: "الٰہی طاقت کسی بھی انسانی لشکر سے بڑھ کر ہے" },
          verseRef: "33:25"
        },
        {
          term: "وَأَنزَلَ الَّذِينَ ظَاهَرُوهُم مِّنْ أَهْلِ الْكِتَابِ مِن صَيَاصِيهِمْ",
          meaning: { en: "And He brought down from their fortresses those of People of Book who supported them", ur: "اور اہلِ کتاب میں سے ان کی مدد کرنے والوں کو ان کے قلعوں سے اتار دیا" },
          explanation: { en: "Banu Qurayza: Jews who betrayed the treaty during siege", ur: "بنو قریظہ: وہ یہودی جنہوں نے محاصرے کے دوران معاہدے کی خلاف ورزی کی" },
          verseRef: "33:26"
        },
        {
          term: "وَقَذَفَ فِي قُلُوبِهِمُ الرُّعْبَ",
          meaning: { en: "And cast terror into their hearts", ur: "اور ان کے دلوں میں رعب ڈال دیا" },
          explanation: { en: "Divine psychological warfare - hearts filled with dread", ur: "الٰہی نفسیاتی جنگ - دل دہشت سے بھر گئے" },
          verseRef: "33:26"
        },
        {
          term: "فَرِيقًا تَقْتُلُونَ وَتَأْسِرُونَ فَرِيقًا",
          meaning: { en: "A party you killed and a party you took captive", ur: "ایک گروہ کو تم نے قتل کیا اور ایک گروہ کو قیدی بنایا" },
          explanation: { en: "Judgment on Banu Qurayza for treachery during siege", ur: "محاصرے کے دوران غداری پر بنو قریظہ کا فیصلہ" },
          verseRef: "33:26"
        },
        {
          term: "وَأَوْرَثَكُمْ أَرْضَهُمْ وَدِيَارَهُمْ وَأَمْوَالَهُمْ",
          meaning: { en: "And He made you inherit their land, homes, and wealth", ur: "اور اس نے تمہیں ان کی زمین، گھر اور مال کا وارث بنا دیا" },
          explanation: { en: "Transfer of Banu Qurayza's property to Muslims", ur: "بنو قریظہ کی جائیداد کی مسلمانوں کو منتقلی" },
          verseRef: "33:27"
        },
        {
          term: "وَأَرْضًا لَّمْ تَطَئُوهَا",
          meaning: { en: "And land you have not yet trodden", ur: "اور ایسی زمین جس پر تم نے ابھی قدم نہیں رکھا" },
          explanation: { en: "Promise of future conquests - Khaybar and beyond", ur: "مستقبل کی فتوحات کا وعدہ - خیبر اور اس سے آگے" },
          verseRef: "33:27"
        }
      ]
    },

    // 8. WIVES OF THE PROPHET - CHOICE
    wivesChoice: {
      name: "The Wives' Choice",
      nameUr: "ازواجِ مطہرات کا انتخاب",
      nameArabic: "تخيير أزواج النبي",
      color: "#8B5CF6",
      icon: "Scale",
      description: { en: "Prophet's wives given choice between worldly life and Allah's path", ur: "نبی ﷺ کی بیویوں کو دنیاوی زندگی اور اللہ کی راہ میں سے انتخاب کا موقع" },
      verses: "33:28-34",
      concepts: [
        {
          term: "يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ",
          meaning: { en: "O Prophet, say to your wives", ur: "اے نبی، اپنی بیویوں سے کہو" },
          explanation: { en: "Addressing Prophet's domestic life - unique guidance", ur: "نبی ﷺ کی گھریلو زندگی سے متعلق خطاب - منفرد ہدایت" },
          verseRef: "33:28"
        },
        {
          term: "إِن كُنتُنَّ تُرِدْنَ الْحَيَاةَ الدُّنْيَا وَزِينَتَهَا",
          meaning: { en: "If you desire the worldly life and its adornment", ur: "اگر تم دنیاوی زندگی اور اس کی آرائش چاہتی ہو" },
          explanation: { en: "First option: choose material comfort", ur: "پہلا اختیار: مادی آسائش کا انتخاب" },
          verseRef: "33:28"
        },
        {
          term: "فَتَعَالَيْنَ أُمَتِّعْكُنَّ وَأُسَرِّحْكُنَّ سَرَاحًا جَمِيلًا",
          meaning: { en: "Then come, I will provide for you and release you graciously", ur: "تو آؤ، میں تمہیں سامان دے دوں اور خوبصورتی سے رخصت کر دوں" },
          explanation: { en: "Honorable divorce with provision if they choose dunya", ur: "دنیا کا انتخاب کرنے پر عزت کے ساتھ طلاق اور مال و متاع" },
          verseRef: "33:28"
        },
        {
          term: "وَإِن كُنتُنَّ تُرِدْنَ اللَّهَ وَرَسُولَهُ وَالدَّارَ الْآخِرَةَ",
          meaning: { en: "But if you desire Allah, His Messenger, and the Hereafter", ur: "لیکن اگر تم اللہ، اس کے رسول اور آخرت کو چاہتی ہو" },
          explanation: { en: "Second option: choose eternal reward", ur: "دوسرا اختیار: ابدی اجر کا انتخاب" },
          verseRef: "33:29"
        },
        {
          term: "فَإِنَّ اللَّهَ أَعَدَّ لِلْمُحْسِنَاتِ مِنكُنَّ أَجْرًا عَظِيمًا",
          meaning: { en: "Then Allah has prepared for the doers of good among you great reward", ur: "تو بے شک اللہ نے تم میں سے نیکی کرنے والیوں کے لیے عظیم اجر تیار کر رکھا ہے" },
          explanation: { en: "Promise of immense reward for choosing akhirah", ur: "آخرت کے انتخاب پر عظیم اجر کا وعدہ" },
          verseRef: "33:29"
        },
        {
          term: "يَا نِسَاءَ النَّبِيِّ مَن يَأْتِ مِنكُنَّ بِفَاحِشَةٍ مُّبَيِّنَةٍ",
          meaning: { en: "O wives of the Prophet, whoever commits clear immorality", ur: "اے نبی کی بیویو، تم میں سے جو کھلی بے حیائی کرے" },
          explanation: { en: "Higher standard: double punishment for wrongdoing", ur: "اعلیٰ معیار: غلطی پر دوگنی سزا" },
          verseRef: "33:30"
        },
        {
          term: "يُضَاعَفْ لَهَا الْعَذَابُ ضِعْفَيْنِ",
          meaning: { en: "Will have the punishment doubled for her", ur: "اس کے لیے سزا دوگنی کر دی جائے گی" },
          explanation: { en: "Greater privilege = greater responsibility", ur: "بڑا مقام = بڑی ذمہ داری" },
          verseRef: "33:30"
        },
        {
          term: "وَمَن يَقْنُتْ مِنكُنَّ لِلَّهِ وَرَسُولِهِ",
          meaning: { en: "And whoever is devoutly obedient to Allah and His Messenger", ur: "اور جو اللہ اور اس کے رسول کی فرمانبردار رہے" },
          explanation: { en: "Obedience rewarded double - balance of accountability", ur: "فرمانبرداری کا دوگنا اجر - احتساب کا توازن" },
          verseRef: "33:31"
        },
        {
          term: "نُّؤْتِهَا أَجْرَهَا مَرَّتَيْنِ",
          meaning: { en: "We will give her reward twice", ur: "ہم اسے دوگنا اجر دیں گے" },
          explanation: { en: "Double reward for righteousness", ur: "نیکی پر دوگنا اجر" },
          verseRef: "33:31"
        },
        {
          term: "وَأَعْتَدْنَا لَهَا رِزْقًا كَرِيمًا",
          meaning: { en: "And We have prepared for her noble provision", ur: "اور ہم نے اس کے لیے عزت والا رزق تیار کر رکھا ہے" },
          explanation: { en: "Special provision in Paradise", ur: "جنت میں خصوصی رزق" },
          verseRef: "33:31"
        }
      ]
    },

    // 9. CONDUCT OF PROPHET'S WIVES
    wivesConduct: {
      name: "Conduct of Prophet's Wives",
      nameUr: "نبی ﷺ کی بیویوں کا طرزِ عمل",
      nameArabic: "آداب نساء النبي",
      color: "#EC4899",
      icon: "Heart",
      description: { en: "Special behavioral guidelines for Prophet's household", ur: "نبی ﷺ کے گھرانے کے لیے خصوصی آداب و رہنمائی" },
      verses: "33:32-34",
      concepts: [
        {
          term: "يَا نِسَاءَ النَّبِيِّ لَسْتُنَّ كَأَحَدٍ مِّنَ النِّسَاءِ",
          meaning: { en: "O wives of the Prophet, you are not like other women", ur: "اے نبی کی بیویو، تم دوسری عورتوں کی طرح نہیں ہو" },
          explanation: { en: "Unique status = unique responsibilities", ur: "منفرد مقام = منفرد ذمہ داریاں" },
          verseRef: "33:32"
        },
        {
          term: "إِنِ اتَّقَيْتُنَّ",
          meaning: { en: "If you fear Allah", ur: "اگر تم اللہ سے ڈرتی ہو" },
          explanation: { en: "Condition: taqwa unlocks special status", ur: "شرط: تقویٰ خصوصی مقام کی کنجی ہے" },
          verseRef: "33:32"
        },
        {
          term: "فَلَا تَخْضَعْنَ بِالْقَوْلِ",
          meaning: { en: "Then do not be soft in speech", ur: "تو بات میں نرمی نہ کرو" },
          explanation: { en: "Voice modulation: avoid alluring tone", ur: "آواز کی نرمی: دلکش لہجے سے اجتناب" },
          verseRef: "33:32"
        },
        {
          term: "فَيَطْمَعَ الَّذِي فِي قَلْبِهِ مَرَضٌ",
          meaning: { en: "Lest he in whose heart is disease should covet", ur: "کہیں وہ جس کے دل میں بیماری ہے لالچ کرے" },
          explanation: { en: "Protection from those with impure intentions", ur: "ناپاک نیت والوں سے حفاظت" },
          verseRef: "33:32"
        },
        {
          term: "وَقُلْنَ قَوْلًا مَّعْرُوفًا",
          meaning: { en: "And speak with appropriate speech", ur: "اور مناسب بات کہو" },
          explanation: { en: "Proper, dignified speech - not harsh, not soft", ur: "مناسب، باوقار گفتگو - نہ سخت نہ نرم" },
          verseRef: "33:32"
        },
        {
          term: "وَقَرْنَ فِي بُيُوتِكُنَّ",
          meaning: { en: "And remain in your homes", ur: "اور اپنے گھروں میں رہو" },
          explanation: { en: "Staying home as primary base - not absolute seclusion", ur: "گھر کو بنیادی ٹھکانا بنانا - مکمل علیحدگی نہیں" },
          verseRef: "33:33"
        },
        {
          term: "وَلَا تَبَرَّجْنَ تَبَرُّجَ الْجَاهِلِيَّةِ الْأُولَىٰ",
          meaning: { en: "And do not display yourselves as in the former days of ignorance", ur: "اور پہلی جاہلیت کی طرح بن ٹھن کر نہ نکلو" },
          explanation: { en: "Rejecting pre-Islamic immodest display", ur: "قبل از اسلام بے پردگی اور نمائش کا رد" },
          verseRef: "33:33"
        },
        {
          term: "وَأَقِمْنَ الصَّلَاةَ وَآتِينَ الزَّكَاةَ",
          meaning: { en: "And establish prayer and give zakah", ur: "اور نماز قائم کرو اور زکوٰۃ ادا کرو" },
          explanation: { en: "Fundamental worship obligations", ur: "بنیادی عبادتی فرائض" },
          verseRef: "33:33"
        },
        {
          term: "وَأَطِعْنَ اللَّهَ وَرَسُولَهُ",
          meaning: { en: "And obey Allah and His Messenger", ur: "اور اللہ اور اس کے رسول کی اطاعت کرو" },
          explanation: { en: "Dual obedience - divine and prophetic", ur: "دوہری اطاعت - الٰہی اور نبوی" },
          verseRef: "33:33"
        },
        {
          term: "إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ",
          meaning: { en: "Allah only intends to remove impurity from you, O People of the House", ur: "اللہ تو بس یہ چاہتا ہے کہ تم سے ناپاکی دور کرے، اے اہلِ بیت" },
          explanation: { en: "Ahl al-Bayt - Prophet's household purified", ur: "اہلِ بیت - نبی ﷺ کے گھرانے کی تطہیر" },
          verseRef: "33:33"
        },
        {
          term: "وَيُطَهِّرَكُمْ تَطْهِيرًا",
          meaning: { en: "And purify you completely", ur: "اور تمہیں پوری طرح پاک کر دے" },
          explanation: { en: "Divine purification - spiritual cleansing", ur: "الٰہی تطہیر - روحانی پاکیزگی" },
          verseRef: "33:33"
        },
        {
          term: "وَاذْكُرْنَ مَا يُتْلَىٰ فِي بُيُوتِكُنَّ مِنْ آيَاتِ اللَّهِ وَالْحِكْمَةِ",
          meaning: { en: "And remember what is recited in your homes of Allah's verses and wisdom", ur: "اور اپنے گھروں میں اللہ کی آیات اور حکمت کی تلاوت کو یاد رکھو" },
          explanation: { en: "Preserve and transmit Quran and Sunnah - teaching role", ur: "قرآن و سنت کی حفاظت اور ترسیل - تعلیمی کردار" },
          verseRef: "33:34"
        }
      ]
    },

    // 10. QUALITIES OF MUSLIM MEN AND WOMEN
    muslimQualities: {
      name: "Ten Qualities of Muslim Men and Women",
      nameUr: "مسلمان مردوں اور عورتوں کی دس صفات",
      nameArabic: "عشر صفات للمسلمين والمسلمات",
      color: "#10B981",
      icon: "Users",
      description: { en: "Comprehensive list of qualities for both genders", ur: "مردوں اور عورتوں دونوں کے لیے صفات کی جامع فہرست" },
      verses: "33:35",
      concepts: [
        {
          term: "إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ",
          meaning: { en: "Indeed, the Muslim men and Muslim women", ur: "بے شک مسلمان مرد اور مسلمان عورتیں" },
          explanation: { en: "Gender equality in spiritual qualities begins", ur: "روحانی صفات میں صنفی مساوات کا آغاز" },
          verseRef: "33:35"
        },
        {
          term: "وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
          meaning: { en: "The believing men and believing women", ur: "مومن مرد اور مومن عورتیں" },
          explanation: { en: "Iman - inner conviction beyond outward submission", ur: "ایمان - ظاہری اسلام سے بڑھ کر باطنی یقین" },
          verseRef: "33:35"
        },
        {
          term: "وَالْقَانِتِينَ وَالْقَانِتَاتِ",
          meaning: { en: "The devoutly obedient men and women", ur: "فرمانبردار مرد اور فرمانبردار عورتیں" },
          explanation: { en: "Qunut - devoted obedience and humility", ur: "قنوت - مخلصانہ فرمانبرداری اور عاجزی" },
          verseRef: "33:35"
        },
        {
          term: "وَالصَّادِقِينَ وَالصَّادِقَاتِ",
          meaning: { en: "The truthful men and women", ur: "سچے مرد اور سچی عورتیں" },
          explanation: { en: "Sidq - honesty in word and deed", ur: "صدق - قول و فعل میں سچائی" },
          verseRef: "33:35"
        },
        {
          term: "وَالصَّابِرِينَ وَالصَّابِرَاتِ",
          meaning: { en: "The patient men and women", ur: "صبر کرنے والے مرد اور عورتیں" },
          explanation: { en: "Sabr - endurance in difficulty", ur: "صبر - مشکل میں ثابت قدمی" },
          verseRef: "33:35"
        },
        {
          term: "وَالْخَاشِعِينَ وَالْخَاشِعَاتِ",
          meaning: { en: "The humble men and women", ur: "عاجزی کرنے والے مرد اور عورتیں" },
          explanation: { en: "Khushu - reverence and humility before Allah", ur: "خشوع - اللہ کے سامنے عاجزی اور خشیت" },
          verseRef: "33:35"
        },
        {
          term: "وَالْمُتَصَدِّقِينَ وَالْمُتَصَدِّقَاتِ",
          meaning: { en: "The charitable men and women", ur: "صدقہ دینے والے مرد اور عورتیں" },
          explanation: { en: "Sadaqah - giving in Allah's cause", ur: "صدقہ - اللہ کی راہ میں خرچ کرنا" },
          verseRef: "33:35"
        },
        {
          term: "وَالصَّائِمِينَ وَالصَّائِمَاتِ",
          meaning: { en: "The fasting men and women", ur: "روزہ رکھنے والے مرد اور عورتیں" },
          explanation: { en: "Siyam - self-discipline through fasting", ur: "صیام - روزے کے ذریعے ضبطِ نفس" },
          verseRef: "33:35"
        },
        {
          term: "وَالْحَافِظِينَ فُرُوجَهُمْ وَالْحَافِظَاتِ",
          meaning: { en: "The men and women who guard their chastity", ur: "اپنی عصمت کی حفاظت کرنے والے مرد اور عورتیں" },
          explanation: { en: "Hifz al-furuj - protecting private parts, chastity", ur: "حفظِ فروج - شرمگاہوں کی حفاظت، عفت" },
          verseRef: "33:35"
        },
        {
          term: "وَالذَّاكِرِينَ اللَّهَ كَثِيرًا وَالذَّاكِرَاتِ",
          meaning: { en: "The men and women who remember Allah often", ur: "اللہ کو کثرت سے یاد کرنے والے مرد اور عورتیں" },
          explanation: { en: "Dhikr kathir - abundant remembrance of Allah", ur: "ذکرِ کثیر - اللہ کی کثرت سے یاد" },
          verseRef: "33:35"
        },
        {
          term: "أَعَدَّ اللَّهُ لَهُم مَّغْفِرَةً وَأَجْرًا عَظِيمًا",
          meaning: { en: "Allah has prepared for them forgiveness and great reward", ur: "اللہ نے ان کے لیے مغفرت اور عظیم اجر تیار کر رکھا ہے" },
          explanation: { en: "Promise for all who embody these qualities", ur: "ان تمام صفات والوں کے لیے وعدہ" },
          verseRef: "33:35"
        }
      ]
    },

    // 11. ZAYD AND ZAYNAB - ADOPTION RULING APPLIED
    zaydZaynab: {
      name: "Zayd and Zaynab - Applying the Adoption Ruling",
      nameUr: "زید اور زینب - گود لینے کے حکم کا اطلاق",
      nameArabic: "زيد وزينب - تطبيق حكم التبني",
      color: "#3B82F6",
      icon: "Scale",
      description: { en: "The marriage of Prophet to Zaynab bint Jahsh after her divorce from Zayd", ur: "زید سے طلاق کے بعد نبی ﷺ کا زینب بنت جحش سے نکاح" },
      verses: "33:36-40",
      concepts: [
        {
          term: "وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا",
          meaning: { en: "It is not for a believer, man or woman, when Allah and His Messenger decide a matter", ur: "کسی مومن مرد یا عورت کو حق نہیں کہ جب اللہ اور اس کا رسول کوئی فیصلہ کریں" },
          explanation: { en: "No choice when divine command is clear", ur: "جب الٰہی حکم واضح ہو تو کوئی اختیار نہیں" },
          verseRef: "33:36"
        },
        {
          term: "أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ",
          meaning: { en: "To have any choice in their matter", ur: "کہ اپنے معاملے میں کوئی اختیار رکھیں" },
          explanation: { en: "Submission to divine decree", ur: "الٰہی فیصلے کے سامنے سرِ تسلیم خم" },
          verseRef: "33:36"
        },
        {
          term: "وَإِذْ تَقُولُ لِلَّذِي أَنْعَمَ اللَّهُ عَلَيْهِ وَأَنْعَمْتَ عَلَيْهِ",
          meaning: { en: "And when you said to the one Allah blessed and you blessed", ur: "اور جب تم نے اس شخص سے کہا جس پر اللہ نے اور تم نے انعام کیا" },
          explanation: { en: "Zayd - blessed by Allah (Islam) and Prophet (adoption, freedom)", ur: "زید - اللہ کا انعام (اسلام) اور نبی ﷺ کا انعام (لے پالکی، آزادی)" },
          verseRef: "33:37"
        },
        {
          term: "أَمْسِكْ عَلَيْكَ زَوْجَكَ وَاتَّقِ اللَّهَ",
          meaning: { en: "Keep your wife and fear Allah", ur: "اپنی بیوی کو رکھو اور اللہ سے ڈرو" },
          explanation: { en: "Prophet advised Zayd to remain married to Zaynab", ur: "نبی ﷺ نے زید کو زینب سے نکاح برقرار رکھنے کا مشورہ دیا" },
          verseRef: "33:37"
        },
        {
          term: "وَتُخْفِي فِي نَفْسِكَ مَا اللَّهُ مُبْدِيهِ",
          meaning: { en: "And you concealed in yourself what Allah would reveal", ur: "اور تم نے اپنے دل میں وہ بات چھپائے رکھی جسے اللہ ظاہر کرنے والا تھا" },
          explanation: { en: "Prophet knew Allah would command him to marry Zaynab but hesitated", ur: "نبی ﷺ جانتے تھے کہ اللہ انہیں زینب سے نکاح کا حکم دے گا لیکن ہچکچاہٹ تھی" },
          verseRef: "33:37"
        },
        {
          term: "وَتَخْشَى النَّاسَ وَاللَّهُ أَحَقُّ أَن تَخْشَاهُ",
          meaning: { en: "And you feared people while Allah has more right to be feared", ur: "اور تم لوگوں سے ڈرتے تھے حالانکہ اللہ زیادہ حقدار ہے کہ تم اس سے ڈرو" },
          explanation: { en: "Gentle rebuke: fear of social reaction vs. fear of Allah", ur: "نرم تنبیہ: سماجی رد عمل کا خوف بمقابلہ اللہ کا خوف" },
          verseRef: "33:37"
        },
        {
          term: "فَلَمَّا قَضَىٰ زَيْدٌ مِّنْهَا وَطَرًا زَوَّجْنَاكَهَا",
          meaning: { en: "When Zayd ended his relationship with her, We married her to you", ur: "جب زید کا اس سے تعلق ختم ہو گیا تو ہم نے اسے تم سے بیاہ دیا" },
          explanation: { en: "Divine command: Prophet married Zaynab by Allah's decree", ur: "الٰہی حکم: نبی ﷺ نے اللہ کے فرمان سے زینب سے نکاح کیا" },
          verseRef: "33:37"
        },
        {
          term: "لِكَيْ لَا يَكُونَ عَلَى الْمُؤْمِنِينَ حَرَجٌ فِي أَزْوَاجِ أَدْعِيَائِهِمْ",
          meaning: { en: "So there would be no discomfort for believers regarding wives of their adopted sons", ur: "تاکہ مومنوں کو اپنے منہ بولے بیٹوں کی بیویوں کے معاملے میں تنگی نہ ہو" },
          explanation: { en: "Wisdom: abolishing taboo of marrying ex-wives of adopted sons", ur: "حکمت: منہ بولے بیٹوں کی سابقہ بیویوں سے نکاح کی پابندی کا خاتمہ" },
          verseRef: "33:37"
        },
        {
          term: "إِذَا قَضَوْا مِنْهُنَّ وَطَرًا",
          meaning: { en: "When they have ended their relationship with them", ur: "جب ان کا ان سے تعلق ختم ہو جائے" },
          explanation: { en: "After divorce is finalized", ur: "طلاق مکمل ہونے کے بعد" },
          verseRef: "33:37"
        },
        {
          term: "وَكَانَ أَمْرُ اللَّهِ مَفْعُولًا",
          meaning: { en: "And Allah's command is ever fulfilled", ur: "اور اللہ کا حکم ہمیشہ پورا ہو کر رہتا ہے" },
          explanation: { en: "Divine decree cannot be avoided", ur: "الٰہی فیصلے سے بچا نہیں جا سکتا" },
          verseRef: "33:37"
        },
        {
          term: "مَّا كَانَ عَلَى النَّبِيِّ مِنْ حَرَجٍ فِيمَا فَرَضَ اللَّهُ لَهُ",
          meaning: { en: "There is no blame upon the Prophet in what Allah has imposed on him", ur: "جو اللہ نے نبی پر فرض کیا اس میں ان پر کوئی حرج نہیں" },
          explanation: { en: "Prophet is blameless - he followed Allah's command", ur: "نبی ﷺ بے قصور ہیں - انہوں نے اللہ کے حکم کی پیروی کی" },
          verseRef: "33:38"
        },
        {
          term: "سُنَّةَ اللَّهِ فِي الَّذِينَ خَلَوْا مِن قَبْلُ",
          meaning: { en: "This is Allah's way with those who passed before", ur: "یہ اللہ کا طریقہ ہے جو پہلے گزرنے والوں کے ساتھ رہا" },
          explanation: { en: "Previous prophets also married multiple wives", ur: "پچھلے انبیاء نے بھی متعدد شادیاں کیں" },
          verseRef: "33:38"
        },
        {
          term: "الَّذِينَ يُبَلِّغُونَ رِسَالَاتِ اللَّهِ وَيَخْشَوْنَهُ",
          meaning: { en: "Those who convey Allah's messages and fear Him", ur: "جو اللہ کے پیغامات پہنچاتے ہیں اور اسی سے ڈرتے ہیں" },
          explanation: { en: "Prophets' mission: deliver message, fear only Allah", ur: "انبیاء کا مشن: پیغام پہنچانا، صرف اللہ سے ڈرنا" },
          verseRef: "33:39"
        },
        {
          term: "مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ",
          meaning: { en: "Muhammad is not the father of any of your men", ur: "محمد ﷺ تمہارے مردوں میں سے کسی کے باپ نہیں" },
          explanation: { en: "Clarification: Zayd is not his biological son", ur: "وضاحت: زید ان کے حقیقی بیٹے نہیں ہیں" },
          verseRef: "33:40"
        },
        {
          term: "وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ",
          meaning: { en: "But he is the Messenger of Allah and Seal of the Prophets", ur: "لیکن وہ اللہ کے رسول اور خاتم النبیین ہیں" },
          explanation: { en: "Khatam an-Nabiyyin - final prophet, no prophet after him", ur: "خاتم النبیین - آخری نبی، ان کے بعد کوئی نبی نہیں" },
          verseRef: "33:40"
        }
      ]
    },

    // 12. REMEMBRANCE OF ALLAH
    dhikrAllah: {
      name: "Remembrance of Allah",
      nameUr: "اللہ کا ذکر",
      nameArabic: "ذكر الله",
      color: "#F59E0B",
      icon: "Heart",
      description: { en: "Commands regarding abundant remembrance and glorification", ur: "کثرت سے ذکر اور تسبیح کے احکام" },
      verses: "33:41-44",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا",
          meaning: { en: "O believers, remember Allah with much remembrance", ur: "اے ایمان والو، اللہ کو بہت زیادہ یاد کرو" },
          explanation: { en: "Command for abundant dhikr - not occasional", ur: "کثرت سے ذکر کا حکم - کبھی کبھار نہیں" },
          verseRef: "33:41"
        },
        {
          term: "وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا",
          meaning: { en: "And glorify Him morning and evening", ur: "اور صبح و شام اس کی تسبیح کرو" },
          explanation: { en: "Tasbih at dawn and dusk - bookending the day", ur: "فجر اور مغرب کو تسبیح - دن کے دونوں کناروں پر" },
          verseRef: "33:42"
        },
        {
          term: "هُوَ الَّذِي يُصَلِّي عَلَيْكُمْ وَمَلَائِكَتُهُ",
          meaning: { en: "He is the One who sends blessings upon you, and His angels", ur: "وہی ہے جو تم پر رحمت بھیجتا ہے، اور اس کے فرشتے بھی" },
          explanation: { en: "Allah and angels bless believers - reciprocal blessing", ur: "اللہ اور فرشتے مومنوں پر رحمت بھیجتے ہیں - باہمی برکت" },
          verseRef: "33:43"
        },
        {
          term: "لِيُخْرِجَكُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ",
          meaning: { en: "To bring you from darkness into light", ur: "تاکہ تمہیں اندھیروں سے روشنی کی طرف نکالے" },
          explanation: { en: "Purpose: guidance from ignorance to knowledge", ur: "مقصد: جہالت سے علم کی طرف رہنمائی" },
          verseRef: "33:43"
        },
        {
          term: "وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
          meaning: { en: "And He is ever Merciful to the believers", ur: "اور وہ ہمیشہ مومنوں پر مہربان ہے" },
          explanation: { en: "Divine mercy specifically for believers", ur: "خاص طور پر مومنوں کے لیے الٰہی رحمت" },
          verseRef: "33:43"
        },
        {
          term: "تَحِيَّتُهُمْ يَوْمَ يَلْقَوْنَهُ سَلَامٌ",
          meaning: { en: "Their greeting the Day they meet Him will be 'Peace'", ur: "جس دن وہ اس سے ملیں گے ان کا استقبال 'سلام' سے ہوگا" },
          explanation: { en: "Salam - greeting in Paradise from Allah", ur: "سلام - جنت میں اللہ کی طرف سے خوش آمدید" },
          verseRef: "33:44"
        },
        {
          term: "وَأَعَدَّ لَهُمْ أَجْرًا كَرِيمًا",
          meaning: { en: "And He has prepared for them noble reward", ur: "اور اس نے ان کے لیے عزت والا اجر تیار کر رکھا ہے" },
          explanation: { en: "Generous reward awaiting believers", ur: "مومنوں کے لیے فراخ دلانہ اجر منتظر ہے" },
          verseRef: "33:44"
        }
      ]
    },

    // 13. PROPHET'S ROLES
    prophetRoles: {
      name: "Roles of the Prophet",
      nameUr: "نبی ﷺ کے کردار",
      nameArabic: "أدوار النبي",
      color: "#F59E0B",
      icon: "Star",
      description: { en: "Multiple roles of Prophet Muhammad", ur: "نبی محمد ﷺ کے متعدد کردار" },
      verses: "33:45-48",
      concepts: [
        {
          term: "يَا أَيُّهَا النَّبِيُّ إِنَّا أَرْسَلْنَاكَ شَاهِدًا",
          meaning: { en: "O Prophet, We have sent you as a witness", ur: "اے نبی، ہم نے آپ کو گواہ بنا کر بھیجا" },
          explanation: { en: "Shahid - witness over his ummah", ur: "شاہد - اپنی امت پر گواہ" },
          verseRef: "33:45"
        },
        {
          term: "وَمُبَشِّرًا",
          meaning: { en: "And a bringer of good tidings", ur: "اور خوشخبری سنانے والا" },
          explanation: { en: "Mubashshir - announcing glad news of Paradise", ur: "مبشر - جنت کی خوشخبری سنانے والا" },
          verseRef: "33:45"
        },
        {
          term: "وَنَذِيرًا",
          meaning: { en: "And a warner", ur: "اور ڈرانے والا" },
          explanation: { en: "Nadhir - warning against Hell", ur: "نذیر - جہنم سے ڈرانے والا" },
          verseRef: "33:45"
        },
        {
          term: "وَدَاعِيًا إِلَى اللَّهِ بِإِذْنِهِ",
          meaning: { en: "And one who invites to Allah by His permission", ur: "اور اللہ کی اجازت سے اس کی طرف بلانے والا" },
          explanation: { en: "Dai - caller to Allah's path", ur: "داعی - اللہ کی راہ کی طرف بلانے والا" },
          verseRef: "33:46"
        },
        {
          term: "وَسِرَاجًا مُّنِيرًا",
          meaning: { en: "And an illuminating lamp", ur: "اور روشنی پھیلانے والا چراغ" },
          explanation: { en: "Siraj Munir - light guiding humanity", ur: "سراجِ منیر - انسانیت کو روشنی دکھانے والا" },
          verseRef: "33:46"
        },
        {
          term: "وَبَشِّرِ الْمُؤْمِنِينَ بِأَنَّ لَهُم مِّنَ اللَّهِ فَضْلًا كَبِيرًا",
          meaning: { en: "And give good tidings to believers that they have great bounty from Allah", ur: "اور مومنوں کو خوشخبری دو کہ ان کے لیے اللہ کی طرف سے بڑا فضل ہے" },
          explanation: { en: "Glad tidings of immense divine favor", ur: "عظیم الٰہی فضل کی خوشخبری" },
          verseRef: "33:47"
        },
        {
          term: "وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ",
          meaning: { en: "And do not obey disbelievers and hypocrites", ur: "اور کافروں اور منافقوں کی اطاعت نہ کرو" },
          explanation: { en: "Repeated warning from verse 1 - emphasis", ur: "آیت 1 سے دہرائی گئی تنبیہ - تاکید" },
          verseRef: "33:48"
        },
        {
          term: "وَدَعْ أَذَاهُمْ",
          meaning: { en: "And disregard their annoyance", ur: "اور ان کی اذیت کو نظرانداز کرو" },
          explanation: { en: "Ignore their harm - focus on mission", ur: "ان کے نقصان کو نظرانداز کرو - مشن پر توجہ دو" },
          verseRef: "33:48"
        },
        {
          term: "وَتَوَكَّلْ عَلَى اللَّهِ",
          meaning: { en: "And rely upon Allah", ur: "اور اللہ پر بھروسہ رکھو" },
          explanation: { en: "Tawakkul - core response to opposition", ur: "توکل - مخالفت کا بنیادی جواب" },
          verseRef: "33:48"
        }
      ]
    },

    // 14. MARRIAGE REGULATIONS FOR PROPHET
    prophetMarriages: {
      name: "Marriage Regulations for the Prophet",
      nameUr: "نبی ﷺ کے لیے نکاح کے احکام",
      nameArabic: "أحكام زواج النبي",
      color: "#8B5CF6",
      icon: "Book",
      description: { en: "Special marriage rules applicable only to Prophet Muhammad", ur: "صرف نبی محمد ﷺ پر لاگو ہونے والے خصوصی نکاح کے احکام" },
      verses: "33:49-52",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نَكَحْتُمُ الْمُؤْمِنَاتِ ثُمَّ طَلَّقْتُمُوهُنَّ",
          meaning: { en: "O believers, when you marry believing women then divorce them", ur: "اے ایمان والو، جب تم مومن عورتوں سے نکاح کرو پھر طلاق دو" },
          explanation: { en: "General rule: no iddah before consummation", ur: "عام قاعدہ: ہم بستری سے پہلے عدت نہیں" },
          verseRef: "33:49"
        },
        {
          term: "مِن قَبْلِ أَن تَمَسُّوهُنَّ فَمَا لَكُمْ عَلَيْهِنَّ مِنْ عِدَّةٍ",
          meaning: { en: "Before touching them, then there is no waiting period", ur: "ان کو چھونے سے پہلے، تو ان پر کوئی عدت نہیں" },
          explanation: { en: "No iddah if marriage not consummated", ur: "اگر نکاح مکمل نہ ہوا ہو تو عدت نہیں" },
          verseRef: "33:49"
        },
        {
          term: "فَمَتِّعُوهُنَّ وَسَرِّحُوهُنَّ سَرَاحًا جَمِيلًا",
          meaning: { en: "So provide for them and release them graciously", ur: "پس انہیں سامان دو اور خوبصورتی سے رخصت کرو" },
          explanation: { en: "Mut'ah (compensation) and beautiful release", ur: "متعہ (معاوضہ) اور حسنِ سلوک سے رخصتی" },
          verseRef: "33:49"
        },
        {
          term: "يَا أَيُّهَا النَّبِيُّ إِنَّا أَحْلَلْنَا لَكَ أَزْوَاجَكَ",
          meaning: { en: "O Prophet, We have made lawful to you your wives", ur: "اے نبی، ہم نے آپ کے لیے آپ کی بیویاں حلال کر دیں" },
          explanation: { en: "Categories of women lawful for Prophet", ur: "نبی ﷺ کے لیے حلال عورتوں کے زمرے" },
          verseRef: "33:50"
        },
        {
          term: "اللَّاتِي آتَيْتَ أُجُورَهُنَّ",
          meaning: { en: "To whom you have given their mahr", ur: "جن کا مہر آپ نے ادا کر دیا" },
          explanation: { en: "Current wives with mahr paid", ur: "موجودہ بیویاں جن کا مہر ادا ہو چکا" },
          verseRef: "33:50"
        },
        {
          term: "وَمَا مَلَكَتْ يَمِينُكَ مِمَّا أَفَاءَ اللَّهُ عَلَيْكَ",
          meaning: { en: "And those your right hand possesses from what Allah returned to you", ur: "اور جو تمہارے دائیں ہاتھ کی ملکیت ہیں جو اللہ نے تمہیں لوٹائی" },
          explanation: { en: "Captives from battles", ur: "جنگوں سے حاصل ہونے والے قیدی" },
          verseRef: "33:50"
        },
        {
          term: "وَبَنَاتِ عَمِّكَ وَبَنَاتِ عَمَّاتِكَ وَبَنَاتِ خَالِكَ وَبَنَاتِ خَالَاتِكَ",
          meaning: { en: "And daughters of your paternal uncles/aunts and maternal uncles/aunts", ur: "اور تمہارے چچاؤں/پھوپھیوں اور ماموؤں/خالاؤں کی بیٹیاں" },
          explanation: { en: "Relatives who emigrated with him", ur: "رشتے دار جنہوں نے آپ کے ساتھ ہجرت کی" },
          verseRef: "33:50"
        },
        {
          term: "وَامْرَأَةً مُّؤْمِنَةً إِن وَهَبَتْ نَفْسَهَا لِلنَّبِيِّ",
          meaning: { en: "And a believing woman who offers herself to the Prophet", ur: "اور مومن عورت جو خود کو نبی کے لیے ہبہ کر دے" },
          explanation: { en: "Unique: women could offer themselves without mahr", ur: "منفرد: عورتیں بغیر مہر کے خود کو پیش کر سکتی تھیں" },
          verseRef: "33:50"
        },
        {
          term: "خَالِصَةً لَّكَ مِن دُونِ الْمُؤْمِنِينَ",
          meaning: { en: "Exclusively for you, not for the believers", ur: "خاص طور پر آپ کے لیے، عام مومنوں کے لیے نہیں" },
          explanation: { en: "This ruling was specific to Prophet only", ur: "یہ حکم صرف نبی ﷺ کے لیے مخصوص تھا" },
          verseRef: "33:50"
        },
        {
          term: "قَدْ عَلِمْنَا مَا فَرَضْنَا عَلَيْهِمْ فِي أَزْوَاجِهِمْ",
          meaning: { en: "We know what We have imposed on them regarding their wives", ur: "ہم جانتے ہیں جو ہم نے ان پر ان کی بیویوں کے بارے میں فرض کیا ہے" },
          explanation: { en: "Regular believers have different rules (max 4 wives)", ur: "عام مومنوں کے لیے مختلف قواعد ہیں (زیادہ سے زیادہ 4 بیویاں)" },
          verseRef: "33:50"
        },
        {
          term: "لِكَيْلَا يَكُونَ عَلَيْكَ حَرَجٌ",
          meaning: { en: "So that there will be no discomfort for you", ur: "تاکہ آپ پر کوئی تنگی نہ ہو" },
          explanation: { en: "Ease for Prophet in his unique situation", ur: "نبی ﷺ کی منفرد صورتحال میں آسانی" },
          verseRef: "33:50"
        },
        {
          term: "تُرْجِي مَن تَشَاءُ مِنْهُنَّ وَتُؤْوِي إِلَيْكَ مَن تَشَاءُ",
          meaning: { en: "You may postpone whom you will and receive whom you will", ur: "جسے چاہو مؤخر کرو اور جسے چاہو اپنے پاس رکھو" },
          explanation: { en: "Flexibility in rotating among wives", ur: "بیویوں کے درمیان باری میں لچک" },
          verseRef: "33:51"
        },
        {
          term: "وَمَنِ ابْتَغَيْتَ مِمَّنْ عَزَلْتَ فَلَا جُنَاحَ عَلَيْكَ",
          meaning: { en: "And whom you desire of those you set aside - no blame", ur: "اور جسے الگ کیا تھا اسے واپس چاہو - کوئی حرج نہیں" },
          explanation: { en: "No strict rotation requirement", ur: "سخت باری بندی کی پابندی نہیں" },
          verseRef: "33:51"
        },
        {
          term: "ذَٰلِكَ أَدْنَىٰ أَن تَقَرَّ أَعْيُنُهُنَّ",
          meaning: { en: "That is more likely they will be content", ur: "اس طرح ان کی آنکھیں ٹھنڈی رہنے کا زیادہ امکان ہے" },
          explanation: { en: "Wisdom: flexibility brings satisfaction", ur: "حکمت: لچک سے خوشنودی آتی ہے" },
          verseRef: "33:51"
        },
        {
          term: "لَّا يَحِلُّ لَكَ النِّسَاءُ مِن بَعْدُ",
          meaning: { en: "Not lawful for you are women after this", ur: "اس کے بعد آپ کے لیے عورتیں حلال نہیں" },
          explanation: { en: "No additional wives beyond current ones", ur: "موجودہ بیویوں کے علاوہ مزید نکاح نہیں" },
          verseRef: "33:52"
        },
        {
          term: "وَلَا أَن تَبَدَّلَ بِهِنَّ مِنْ أَزْوَاجٍ",
          meaning: { en: "Nor to exchange them for other wives", ur: "اور نہ ہی انہیں بدل کر دوسری بیویاں لاؤ" },
          explanation: { en: "Cannot divorce to marry others", ur: "دوسروں سے نکاح کے لیے طلاق نہیں دے سکتے" },
          verseRef: "33:52"
        },
        {
          term: "وَلَوْ أَعْجَبَكَ حُسْنُهُنَّ",
          meaning: { en: "Even if their beauty pleases you", ur: "چاہے ان کی خوبصورتی تمہیں بھلی لگے" },
          explanation: { en: "Restriction regardless of attraction", ur: "کشش سے قطع نظر پابندی" },
          verseRef: "33:52"
        }
      ]
    },

    // 15. ETIQUETTE IN PROPHET'S HOUSE
    householdEtiquette: {
      name: "Etiquette in Prophet's Household",
      nameUr: "نبی ﷺ کے گھر کے آداب",
      nameArabic: "آداب بيت النبي",
      color: "#10B981",
      icon: "Users",
      description: { en: "Rules for visiting Prophet's home", ur: "نبی ﷺ کے گھر آنے کے آداب" },
      verses: "33:53",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَدْخُلُوا بُيُوتَ النَّبِيِّ",
          meaning: { en: "O believers, do not enter the houses of the Prophet", ur: "اے ایمان والو، نبی کے گھروں میں داخل نہ ہو" },
          explanation: { en: "Restrictions on entering Prophet's home", ur: "نبی ﷺ کے گھر میں داخلے پر پابندیاں" },
          verseRef: "33:53"
        },
        {
          term: "إِلَّا أَن يُؤْذَنَ لَكُمْ إِلَىٰ طَعَامٍ",
          meaning: { en: "Unless permitted for a meal", ur: "مگر جب کھانے کی اجازت دی جائے" },
          explanation: { en: "Only enter when invited for food", ur: "صرف اس وقت داخل ہو جب کھانے کی دعوت ہو" },
          verseRef: "33:53"
        },
        {
          term: "غَيْرَ نَاظِرِينَ إِنَاهُ",
          meaning: { en: "Without waiting for its preparation", ur: "اس کی تیاری کا انتظار کیے بغیر" },
          explanation: { en: "Don't arrive early and wait around", ur: "جلدی آ کر انتظار میں نہ بیٹھو" },
          verseRef: "33:53"
        },
        {
          term: "وَلَٰكِنْ إِذَا دُعِيتُمْ فَادْخُلُوا",
          meaning: { en: "But when invited, then enter", ur: "لیکن جب بلائے جاؤ تو داخل ہو" },
          explanation: { en: "Enter only after invitation", ur: "صرف دعوت کے بعد داخل ہو" },
          verseRef: "33:53"
        },
        {
          term: "فَإِذَا طَعِمْتُمْ فَانتَشِرُوا",
          meaning: { en: "When you have eaten, then disperse", ur: "جب کھانا کھا لو تو منتشر ہو جاؤ" },
          explanation: { en: "Don't linger after eating", ur: "کھانے کے بعد ٹھہرے نہ رہو" },
          verseRef: "33:53"
        },
        {
          term: "وَلَا مُسْتَأْنِسِينَ لِحَدِيثٍ",
          meaning: { en: "Without seeking to remain for conversation", ur: "باتوں میں لگے رہنے کے لیے نہ ٹھہرو" },
          explanation: { en: "Don't stay to chat - respect Prophet's time", ur: "گپ شپ کے لیے نہ رکو - نبی ﷺ کے وقت کا احترام کرو" },
          verseRef: "33:53"
        },
        {
          term: "إِنَّ ذَٰلِكُمْ كَانَ يُؤْذِي النَّبِيَّ فَيَسْتَحْيِي مِنكُمْ",
          meaning: { en: "Indeed, that was troubling the Prophet, and he is shy of you", ur: "بے شک یہ بات نبی کو تکلیف دیتی تھی، اور وہ تم سے شرم کرتے تھے" },
          explanation: { en: "Prophet too polite to ask guests to leave", ur: "نبی ﷺ اتنے شریف تھے کہ مہمانوں کو جانے کو نہ کہتے" },
          verseRef: "33:53"
        },
        {
          term: "وَاللَّهُ لَا يَسْتَحْيِي مِنَ الْحَقِّ",
          meaning: { en: "But Allah is not shy of the truth", ur: "لیکن اللہ حق بات سے نہیں شرماتا" },
          explanation: { en: "Allah states what Prophet's modesty prevents", ur: "اللہ وہ بات فرما دیتا ہے جو نبی ﷺ کی حیا مانع ہوتی ہے" },
          verseRef: "33:53"
        },
        {
          term: "وَإِذَا سَأَلْتُمُوهُنَّ مَتَاعًا فَاسْأَلُوهُنَّ مِن وَرَاءِ حِجَابٍ",
          meaning: { en: "And when you ask his wives for something, ask from behind a barrier", ur: "اور جب ان کی بیویوں سے کوئی چیز مانگو تو پردے کے پیچھے سے مانگو" },
          explanation: { en: "Hijab verse - physical barrier with Prophet's wives", ur: "آیتِ حجاب - نبی ﷺ کی بیویوں کے ساتھ جسمانی پردہ" },
          verseRef: "33:53"
        },
        {
          term: "ذَٰلِكُمْ أَطْهَرُ لِقُلُوبِكُمْ وَقُلُوبِهِنَّ",
          meaning: { en: "That is purer for your hearts and their hearts", ur: "یہ تمہارے دلوں اور ان کے دلوں کے لیے زیادہ پاکیزہ ہے" },
          explanation: { en: "Purpose: spiritual purity for both parties", ur: "مقصد: دونوں فریقوں کی روحانی پاکیزگی" },
          verseRef: "33:53"
        },
        {
          term: "وَمَا كَانَ لَكُمْ أَن تُؤْذُوا رَسُولَ اللَّهِ",
          meaning: { en: "And it is not for you to harm the Messenger of Allah", ur: "اور تمہارے لیے جائز نہیں کہ رسول اللہ کو تکلیف پہنچاؤ" },
          explanation: { en: "Prohibition of causing any distress to Prophet", ur: "نبی ﷺ کو کسی بھی طرح کی تکلیف دینے کی ممانعت" },
          verseRef: "33:53"
        },
        {
          term: "وَلَا أَن تَنكِحُوا أَزْوَاجَهُ مِن بَعْدِهِ أَبَدًا",
          meaning: { en: "Nor to marry his wives after him ever", ur: "اور نہ ہی ان کی بیویوں سے ان کے بعد کبھی نکاح کرو" },
          explanation: { en: "Eternal prohibition - they are mothers of believers", ur: "ابدی ممانعت - وہ امہات المومنین ہیں" },
          verseRef: "33:53"
        },
        {
          term: "إِنَّ ذَٰلِكُمْ كَانَ عِندَ اللَّهِ عَظِيمًا",
          meaning: { en: "Indeed, that would be a grave offense with Allah", ur: "بے شک یہ اللہ کے نزدیک بہت بڑا گناہ ہے" },
          explanation: { en: "Marrying Prophet's widow = enormous sin", ur: "نبی ﷺ کی بیوہ سے نکاح = بہت بڑا گناہ" },
          verseRef: "33:53"
        }
      ]
    },

    // 16. DIVINE KNOWLEDGE
    divineKnowledge: {
      name: "Divine Knowledge",
      nameUr: "الٰہی علم",
      nameArabic: "علم الله",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        {
          term: "إِن تُبْدُوا شَيْئًا أَوْ تُخْفُوهُ",
          meaning: { en: "Whether you reveal something or conceal it", ur: "چاہے تم کوئی چیز ظاہر کرو یا چھپاؤ" },
          explanation: { en: "Open or hidden - Allah knows all", ur: "ظاہر ہو یا پوشیدہ - اللہ سب جانتا ہے" },
          verseRef: "33:54"
        },
        {
          term: "فَإِنَّ اللَّهَ كَانَ بِكُلِّ شَيْءٍ عَلِيمًا",
          meaning: { en: "Indeed Allah is ever Knowing of all things", ur: "بے شک اللہ ہر چیز کا جاننے والا ہے" },
          explanation: { en: "Complete divine knowledge", ur: "مکمل الٰہی علم" },
          verseRef: "33:54"
        }
      ]
    },

    // 17. MAHRAM RELATIVES
    mahramRelatives: {
      name: "Mahram Relatives for Prophet's Wives",
      nameUr: "نبی ﷺ کی بیویوں کے محرم رشتے دار",
      nameArabic: "محارم أزواج النبي",
      color: "#8B5CF6",
      icon: "Users",
      verses: "33:55",
      concepts: [
        {
          term: "لَّا جُنَاحَ عَلَيْهِنَّ فِي آبَائِهِنَّ",
          meaning: { en: "No blame on them regarding their fathers", ur: "ان کے باپوں کے بارے میں ان پر کوئی حرج نہیں" },
          explanation: { en: "Fathers can see them without hijab", ur: "باپ بغیر حجاب کے ان سے مل سکتے ہیں" },
          verseRef: "33:55"
        },
        {
          term: "وَلَا أَبْنَائِهِنَّ وَلَا إِخْوَانِهِنَّ",
          meaning: { en: "Nor their sons nor their brothers", ur: "اور نہ ان کے بیٹوں اور نہ ان کے بھائیوں سے" },
          explanation: { en: "Sons and brothers are mahram", ur: "بیٹے اور بھائی محرم ہیں" },
          verseRef: "33:55"
        },
        {
          term: "وَلَا أَبْنَاءِ إِخْوَانِهِنَّ وَلَا أَبْنَاءِ أَخَوَاتِهِنَّ",
          meaning: { en: "Nor their brothers' sons nor sisters' sons", ur: "اور نہ ان کے بھائیوں کے بیٹوں اور نہ بہنوں کے بیٹوں سے" },
          explanation: { en: "Nephews are mahram", ur: "بھانجے اور بھتیجے محرم ہیں" },
          verseRef: "33:55"
        },
        {
          term: "وَلَا نِسَائِهِنَّ وَلَا مَا مَلَكَتْ أَيْمَانُهُنَّ",
          meaning: { en: "Nor their women nor what their right hands possess", ur: "اور نہ ان کی عورتوں اور نہ ان کے دائیں ہاتھ کی ملکیت سے" },
          explanation: { en: "Muslim women and servants", ur: "مسلمان عورتیں اور خادمائیں" },
          verseRef: "33:55"
        },
        {
          term: "وَاتَّقِينَ اللَّهَ",
          meaning: { en: "And fear Allah", ur: "اور اللہ سے ڈرو" },
          explanation: { en: "Command to maintain taqwa", ur: "تقویٰ برقرار رکھنے کا حکم" },
          verseRef: "33:55"
        },
        {
          term: "إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدًا",
          meaning: { en: "Indeed Allah is witness over all things", ur: "بے شک اللہ ہر چیز کا گواہ ہے" },
          explanation: { en: "Divine observation of all actions", ur: "تمام اعمال پر الٰہی نگرانی" },
          verseRef: "33:55"
        }
      ]
    },

    // 18. SALAWAT - BLESSINGS ON THE PROPHET
    salawat: {
      name: "Blessings Upon the Prophet (Salawat)",
      nameUr: "نبی ﷺ پر درود و سلام",
      nameArabic: "الصلاة على النبي",
      color: "#F59E0B",
      icon: "Sparkles",
      description: { en: "Command for Allah, angels, and believers to send blessings", ur: "اللہ، فرشتوں اور مومنوں کا درود بھیجنے کا حکم" },
      verses: "33:56",
      concepts: [
        {
          term: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ",
          meaning: { en: "Indeed Allah and His angels send blessings on the Prophet", ur: "بے شک اللہ اور اس کے فرشتے نبی پر درود بھیجتے ہیں" },
          explanation: { en: "Divine and angelic salawat - continuous blessing", ur: "الٰہی اور فرشتوں کا درود - مسلسل رحمت" },
          verseRef: "33:56"
        },
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ",
          meaning: { en: "O believers, send blessings upon him", ur: "اے ایمان والو، ان پر درود بھیجو" },
          explanation: { en: "Command to believers - join Allah and angels", ur: "مومنوں کو حکم - اللہ اور فرشتوں کے ساتھ شامل ہو" },
          verseRef: "33:56"
        },
        {
          term: "وَسَلِّمُوا تَسْلِيمًا",
          meaning: { en: "And greet him with peace", ur: "اور خوب سلام بھیجو" },
          explanation: { en: "Full formula: Allahumma salli wa sallim", ur: "مکمل صیغہ: اللہم صلِّ وسلم" },
          verseRef: "33:56"
        }
      ]
    },

    // 19. HARMING ALLAH AND HIS MESSENGER
    harmingProphet: {
      name: "Those Who Harm Allah and His Messenger",
      nameUr: "اللہ اور رسول کو ایذا دینے والے",
      nameArabic: "إيذاء الله ورسوله",
      color: "#EF4444",
      icon: "AlertTriangle",
      verses: "33:57-58",
      concepts: [
        {
          term: "إِنَّ الَّذِينَ يُؤْذُونَ اللَّهَ وَرَسُولَهُ",
          meaning: { en: "Indeed, those who abuse Allah and His Messenger", ur: "بے شک جو لوگ اللہ اور اس کے رسول کو اذیت دیتے ہیں" },
          explanation: { en: "Abuse through disbelief, mockery, slander", ur: "کفر، تمسخر، بہتان کے ذریعے اذیت" },
          verseRef: "33:57"
        },
        {
          term: "لَعَنَهُمُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ",
          meaning: { en: "Allah has cursed them in this world and the Hereafter", ur: "اللہ نے ان پر دنیا اور آخرت میں لعنت کی" },
          explanation: { en: "Double curse - expelled from mercy", ur: "دوہری لعنت - رحمت سے خارج" },
          verseRef: "33:57"
        },
        {
          term: "وَأَعَدَّ لَهُمْ عَذَابًا مُّهِينًا",
          meaning: { en: "And prepared for them humiliating punishment", ur: "اور ان کے لیے ذلت آمیز عذاب تیار کیا" },
          explanation: { en: "Punishment befitting their arrogance", ur: "ان کے تکبر کے مناسب سزا" },
          verseRef: "33:57"
        },
        {
          term: "وَالَّذِينَ يُؤْذُونَ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ بِغَيْرِ مَا اكْتَسَبُوا",
          meaning: { en: "Those who harm believing men and women for what they have not earned", ur: "جو لوگ مومن مردوں اور عورتوں کو بے قصور اذیت دیتے ہیں" },
          explanation: { en: "Wrongfully accusing innocent believers", ur: "بے گناہ مومنوں پر ناحق الزام" },
          verseRef: "33:58"
        },
        {
          term: "فَقَدِ احْتَمَلُوا بُهْتَانًا وَإِثْمًا مُّبِينًا",
          meaning: { en: "Have taken upon themselves slander and clear sin", ur: "انہوں نے بہتان اور کھلا گناہ اٹھا لیا" },
          explanation: { en: "Burden of false accusation", ur: "جھوٹے الزام کا بوجھ" },
          verseRef: "33:58"
        }
      ]
    },

    // 20. HIJAB VERSE - JILBAB
    hijabJilbab: {
      name: "The Jilbab Verse",
      nameUr: "آیتِ جلباب (چادر کا حکم)",
      nameArabic: "آية الجلباب",
      color: "#EC4899",
      icon: "Shield",
      description: { en: "Command for believing women to wear outer garments", ur: "مومن عورتوں کو بیرونی لباس پہننے کا حکم" },
      verses: "33:59",
      concepts: [
        {
          term: "يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ",
          meaning: { en: "O Prophet, tell your wives, daughters, and believing women", ur: "اے نبی، اپنی بیویوں، بیٹیوں اور مومن عورتوں سے کہو" },
          explanation: { en: "Universal address: all Muslim women", ur: "آفاقی خطاب: تمام مسلمان عورتیں" },
          verseRef: "33:59"
        },
        {
          term: "يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ",
          meaning: { en: "To draw over themselves their outer garments", ur: "اپنے اوپر اپنی چادریں لٹکا لیں" },
          explanation: { en: "Jilbab - loose outer cloak covering body", ur: "جلباب - جسم ڈھانپنے والی ڈھیلی بیرونی چادر" },
          verseRef: "33:59"
        },
        {
          term: "ذَٰلِكَ أَدْنَىٰ أَن يُعْرَفْنَ",
          meaning: { en: "That is more suitable that they will be recognized", ur: "اس طرح ان کی پہچان ہو سکے گی" },
          explanation: { en: "Identified as free Muslim women", ur: "آزاد مسلمان عورتوں کے طور پر شناخت" },
          verseRef: "33:59"
        },
        {
          term: "فَلَا يُؤْذَيْنَ",
          meaning: { en: "And not be abused", ur: "اور ستائی نہ جائیں" },
          explanation: { en: "Protection from harassment", ur: "ایذا رسانی سے حفاظت" },
          verseRef: "33:59"
        },
        {
          term: "وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
          meaning: { en: "And Allah is ever Forgiving, Merciful", ur: "اور اللہ بخشنے والا مہربان ہے" },
          explanation: { en: "Forgiveness for past and gradual implementation", ur: "ماضی کے لیے معافی اور بتدریج نفاذ" },
          verseRef: "33:59"
        }
      ]
    },

    // 21. WARNING TO HYPOCRITES
    warningHypocrites: {
      name: "Warning to Hypocrites and Rumormongers",
      nameUr: "منافقوں اور افواہ پھیلانے والوں کو تنبیہ",
      nameArabic: "تهديد المنافقين والمرجفين",
      color: "#EF4444",
      icon: "AlertTriangle",
      verses: "33:60-62",
      concepts: [
        {
          term: "لَّئِن لَّمْ يَنتَهِ الْمُنَافِقُونَ",
          meaning: { en: "If the hypocrites do not cease", ur: "اگر منافق باز نہ آئیں" },
          explanation: { en: "Final warning to hypocrites", ur: "منافقوں کو آخری تنبیہ" },
          verseRef: "33:60"
        },
        {
          term: "وَالَّذِينَ فِي قُلُوبِهِم مَّرَضٌ",
          meaning: { en: "And those in whose hearts is disease", ur: "اور وہ جن کے دلوں میں بیماری ہے" },
          explanation: { en: "Those with spiritual sickness", ur: "روحانی بیماری والے لوگ" },
          verseRef: "33:60"
        },
        {
          term: "وَالْمُرْجِفُونَ فِي الْمَدِينَةِ",
          meaning: { en: "And those who spread rumors in Madinah", ur: "اور مدینے میں افواہیں پھیلانے والے" },
          explanation: { en: "Murjifun - those spreading false news, creating panic", ur: "مرجفون - جھوٹی خبریں پھیلانے والے، خوف و ہراس پیدا کرنے والے" },
          verseRef: "33:60"
        },
        {
          term: "لَنُغْرِيَنَّكَ بِهِمْ",
          meaning: { en: "We will surely incite you against them", ur: "ہم ضرور تمہیں ان کے خلاف اکسائیں گے" },
          explanation: { en: "Prophet will be commanded to act against them", ur: "نبی ﷺ کو ان کے خلاف کارروائی کا حکم دیا جائے گا" },
          verseRef: "33:60"
        },
        {
          term: "ثُمَّ لَا يُجَاوِرُونَكَ فِيهَا إِلَّا قَلِيلًا",
          meaning: { en: "Then they will not remain your neighbors except briefly", ur: "پھر وہ تمہارے پڑوسی نہیں رہیں گے مگر تھوڑا سا" },
          explanation: { en: "Expulsion from Madinah", ur: "مدینے سے نکالا" },
          verseRef: "33:60"
        },
        {
          term: "مَّلْعُونِينَ ۖ أَيْنَمَا ثُقِفُوا أُخِذُوا وَقُتِّلُوا تَقْتِيلًا",
          meaning: { en: "Accursed wherever found, seized and killed thoroughly", ur: "لعنتی ہوں گے جہاں بھی ملیں، پکڑے جائیں اور قتل کیے جائیں" },
          explanation: { en: "Severe punishment for those who persist", ur: "اصرار کرنے والوں کے لیے سخت سزا" },
          verseRef: "33:61"
        },
        {
          term: "سُنَّةَ اللَّهِ فِي الَّذِينَ خَلَوْا مِن قَبْلُ",
          meaning: { en: "That was Allah's way with those who passed before", ur: "یہ اللہ کا طریقہ ہے پہلے گزرنے والوں کے ساتھ" },
          explanation: { en: "Historical pattern - hypocrites always dealt with", ur: "تاریخی اصول - منافقوں کا ہمیشہ حساب ہوا" },
          verseRef: "33:62"
        },
        {
          term: "وَلَن تَجِدَ لِسُنَّةِ اللَّهِ تَبْدِيلًا",
          meaning: { en: "And you will not find any change in Allah's way", ur: "اور تم اللہ کے طریقے میں کوئی تبدیلی نہ پاؤ گے" },
          explanation: { en: "Divine pattern is constant", ur: "الٰہی اصول مستقل ہے" },
          verseRef: "33:62"
        }
      ]
    },

    // 22. THE HOUR
    theHour: {
      name: "Knowledge of the Hour",
      nameUr: "قیامت کا علم",
      nameArabic: "علم الساعة",
      color: "#F59E0B",
      icon: "Eye",
      verses: "33:63",
      concepts: [
        {
          term: "يَسْأَلُكَ النَّاسُ عَنِ السَّاعَةِ",
          meaning: { en: "People ask you about the Hour", ur: "لوگ تم سے قیامت کے بارے میں پوچھتے ہیں" },
          explanation: { en: "Common question about Day of Judgment timing", ur: "قیامت کے وقت کے بارے میں عام سوال" },
          verseRef: "33:63"
        },
        {
          term: "قُلْ إِنَّمَا عِلْمُهَا عِندَ اللَّهِ",
          meaning: { en: "Say: Its knowledge is only with Allah", ur: "کہو: اس کا علم صرف اللہ کے پاس ہے" },
          explanation: { en: "Only Allah knows when", ur: "صرف اللہ جانتا ہے کب آئے گی" },
          verseRef: "33:63"
        },
        {
          term: "وَمَا يُدْرِيكَ لَعَلَّ السَّاعَةَ تَكُونُ قَرِيبًا",
          meaning: { en: "And what will make you know - perhaps the Hour is near", ur: "اور تمہیں کیا خبر - شاید قیامت قریب ہی ہو" },
          explanation: { en: "It could come at any moment", ur: "کسی بھی لمحے آ سکتی ہے" },
          verseRef: "33:63"
        }
      ]
    },

    // 23. FATE OF DISBELIEVERS
    disbelieversFate: {
      name: "Fate of Disbelievers",
      nameUr: "کافروں کا انجام",
      nameArabic: "مصير الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      verses: "33:64-68",
      concepts: [
        {
          term: "إِنَّ اللَّهَ لَعَنَ الْكَافِرِينَ وَأَعَدَّ لَهُمْ سَعِيرًا",
          meaning: { en: "Indeed Allah has cursed the disbelievers and prepared for them a Blaze", ur: "بے شک اللہ نے کافروں پر لعنت کی اور ان کے لیے بھڑکتی آگ تیار کی" },
          explanation: { en: "Curse and Hellfire for persistent disbelievers", ur: "ضدی کافروں کے لیے لعنت اور جہنم کی آگ" },
          verseRef: "33:64"
        },
        {
          term: "خَالِدِينَ فِيهَا أَبَدًا",
          meaning: { en: "Abiding therein forever", ur: "اس میں ہمیشہ رہیں گے" },
          explanation: { en: "Eternal punishment", ur: "ابدی عذاب" },
          verseRef: "33:65"
        },
        {
          term: "لَّا يَجِدُونَ وَلِيًّا وَلَا نَصِيرًا",
          meaning: { en: "They will not find a protector or helper", ur: "وہ نہ کوئی دوست پائیں گے نہ مددگار" },
          explanation: { en: "Abandoned - no intercessor", ur: "بے سہارا - کوئی سفارشی نہیں" },
          verseRef: "33:65"
        },
        {
          term: "يَوْمَ تُقَلَّبُ وُجُوهُهُمْ فِي النَّارِ",
          meaning: { en: "The Day their faces are turned about in the Fire", ur: "جس دن ان کے چہرے آگ میں الٹ پلٹ کیے جائیں گے" },
          explanation: { en: "Physical torment - faces in flames", ur: "جسمانی عذاب - شعلوں میں چہرے" },
          verseRef: "33:66"
        },
        {
          term: "يَقُولُونَ يَا لَيْتَنَا أَطَعْنَا اللَّهَ وَأَطَعْنَا الرَّسُولَا",
          meaning: { en: "They will say: Oh, if only we had obeyed Allah and the Messenger", ur: "وہ کہیں گے: کاش ہم نے اللہ اور رسول کی اطاعت کی ہوتی" },
          explanation: { en: "Regret - too late for obedience", ur: "پچھتاوا - اطاعت کا وقت گزر چکا" },
          verseRef: "33:66"
        },
        {
          term: "رَبَّنَا إِنَّا أَطَعْنَا سَادَتَنَا وَكُبَرَاءَنَا",
          meaning: { en: "Our Lord, we obeyed our leaders and elders", ur: "اے ہمارے رب، ہم نے اپنے سرداروں اور بڑوں کی اطاعت کی" },
          explanation: { en: "Blaming those who misled them", ur: "گمراہ کرنے والوں پر الزام" },
          verseRef: "33:67"
        },
        {
          term: "فَأَضَلُّونَا السَّبِيلَا",
          meaning: { en: "And they led us astray from the path", ur: "اور انہوں نے ہمیں راستے سے بھٹکا دیا" },
          explanation: { en: "Following wrong leaders", ur: "غلط راہنماؤں کی پیروی" },
          verseRef: "33:67"
        },
        {
          term: "رَبَّنَا آتِهِمْ ضِعْفَيْنِ مِنَ الْعَذَابِ",
          meaning: { en: "Our Lord, give them double punishment", ur: "اے ہمارے رب، انہیں دوگنا عذاب دے" },
          explanation: { en: "Calling for double punishment on misleaders", ur: "گمراہ کرنے والوں کے لیے دوگنی سزا کی فریاد" },
          verseRef: "33:68"
        },
        {
          term: "وَالْعَنْهُمْ لَعْنًا كَبِيرًا",
          meaning: { en: "And curse them with a great curse", ur: "اور ان پر بڑی لعنت بھیج" },
          explanation: { en: "Asking for maximum curse", ur: "زیادہ سے زیادہ لعنت کی درخواست" },
          verseRef: "33:68"
        }
      ]
    },

    // 24. DO NOT BE LIKE THOSE WHO HARMED MUSA
    musaExample: {
      name: "Example of Those Who Harmed Musa",
      nameUr: "موسیٰ کو تکلیف دینے والوں کی مثال",
      nameArabic: "مثل الذين آذوا موسى",
      color: "#3B82F6",
      icon: "Book",
      verses: "33:69",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَكُونُوا كَالَّذِينَ آذَوْا مُوسَىٰ",
          meaning: { en: "O believers, do not be like those who harmed Musa", ur: "اے ایمان والو، ان لوگوں جیسے نہ بنو جنہوں نے موسیٰ کو ایذا دی" },
          explanation: { en: "Warning: don't repeat Israelites' mistakes", ur: "تنبیہ: بنی اسرائیل کی غلطیاں نہ دہراؤ" },
          verseRef: "33:69"
        },
        {
          term: "فَبَرَّأَهُ اللَّهُ مِمَّا قَالُوا",
          meaning: { en: "But Allah cleared him of what they said", ur: "لیکن اللہ نے انہیں اس سے بری کر دیا جو انہوں نے کہا" },
          explanation: { en: "Divine vindication - accusations refuted", ur: "الٰہی برأت - الزامات کی تردید" },
          verseRef: "33:69"
        },
        {
          term: "وَكَانَ عِندَ اللَّهِ وَجِيهًا",
          meaning: { en: "And he was distinguished in the sight of Allah", ur: "اور وہ اللہ کے نزدیک بڑے عزت والے تھے" },
          explanation: { en: "Wajih - honored, having high status", ur: "وجیہ - معزز، اعلیٰ مقام والے" },
          verseRef: "33:69"
        }
      ]
    },

    // 25. SPEAKING TRUTH
    speakingTruth: {
      name: "Speaking Righteous Words",
      nameUr: "سیدھی بات کہنا",
      nameArabic: "قول السديد",
      color: "#10B981",
      icon: "MessageCircle",
      verses: "33:70-71",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ",
          meaning: { en: "O believers, fear Allah", ur: "اے ایمان والو، اللہ سے ڈرو" },
          explanation: { en: "Foundation: taqwa leads to right speech", ur: "بنیاد: تقویٰ درست گفتگو کی طرف لے جاتا ہے" },
          verseRef: "33:70"
        },
        {
          term: "وَقُولُوا قَوْلًا سَدِيدًا",
          meaning: { en: "And speak words of appropriate justice", ur: "اور سیدھی سچی بات کہو" },
          explanation: { en: "Qawl sadid - straight, truthful, appropriate speech", ur: "قولِ سدید - سیدھی، سچی، مناسب گفتگو" },
          verseRef: "33:70"
        },
        {
          term: "يُصْلِحْ لَكُمْ أَعْمَالَكُمْ",
          meaning: { en: "He will amend for you your deeds", ur: "وہ تمہارے اعمال درست کر دے گا" },
          explanation: { en: "Reward 1: Allah will rectify your actions", ur: "انعام 1: اللہ تمہارے عمل سنوار دے گا" },
          verseRef: "33:71"
        },
        {
          term: "وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ",
          meaning: { en: "And forgive you your sins", ur: "اور تمہارے گناہ بخش دے گا" },
          explanation: { en: "Reward 2: Divine forgiveness", ur: "انعام 2: الٰہی مغفرت" },
          verseRef: "33:71"
        },
        {
          term: "وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا",
          meaning: { en: "And whoever obeys Allah and His Messenger has won a great victory", ur: "اور جس نے اللہ اور اس کے رسول کی اطاعت کی وہ بڑی کامیابی پا گیا" },
          explanation: { en: "Ultimate success through obedience", ur: "اطاعت کے ذریعے حتمی کامیابی" },
          verseRef: "33:71"
        }
      ]
    },

    // 26. THE TRUST (AL-AMANAH)
    theTrust: {
      name: "The Trust (Al-Amanah)",
      nameUr: "امانت",
      nameArabic: "الأمانة",
      color: "#F59E0B",
      icon: "Crown",
      description: { en: "The trust offered to creation - accepted by humans", ur: "مخلوق کو پیش کی گئی امانت - جو انسان نے اٹھائی" },
      verses: "33:72-73",
      concepts: [
        {
          term: "إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ",
          meaning: { en: "We offered the Trust to the heavens, earth, and mountains", ur: "ہم نے امانت کو آسمانوں، زمین اور پہاڑوں پر پیش کیا" },
          explanation: { en: "Cosmic offer - trust presented to all creation", ur: "کائناتی پیشکش - امانت ساری مخلوق کو پیش کی گئی" },
          verseRef: "33:72"
        },
        {
          term: "فَأَبَيْنَ أَن يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا",
          meaning: { en: "But they refused to bear it and feared it", ur: "لیکن انہوں نے اسے اٹھانے سے انکار کیا اور اس سے ڈر گئیں" },
          explanation: { en: "Creation declined - recognized its weight", ur: "مخلوق نے انکار کیا - اس کے بوجھ کو پہچان لیا" },
          verseRef: "33:72"
        },
        {
          term: "وَحَمَلَهَا الْإِنسَانُ",
          meaning: { en: "But mankind bore it", ur: "لیکن انسان نے اسے اٹھا لیا" },
          explanation: { en: "Humans accepted the trust", ur: "انسان نے امانت قبول کر لی" },
          verseRef: "33:72"
        },
        {
          term: "إِنَّهُ كَانَ ظَلُومًا جَهُولًا",
          meaning: { en: "Indeed, he was unjust and ignorant", ur: "بے شک وہ بڑا ظالم، بڑا جاہل تھا" },
          explanation: { en: "Human nature: often fails the trust through injustice and ignorance", ur: "انسانی فطرت: اکثر ظلم اور جہالت سے امانت میں ناکام ہو جاتا ہے" },
          verseRef: "33:72"
        },
        {
          term: "لِّيُعَذِّبَ اللَّهُ الْمُنَافِقِينَ وَالْمُنَافِقَاتِ",
          meaning: { en: "So Allah will punish the hypocrite men and women", ur: "تاکہ اللہ منافق مردوں اور عورتوں کو سزا دے" },
          explanation: { en: "Those who betrayed the trust", ur: "وہ جنہوں نے امانت میں خیانت کی" },
          verseRef: "33:73"
        },
        {
          term: "وَالْمُشْرِكِينَ وَالْمُشْرِكَاتِ",
          meaning: { en: "And the polytheist men and women", ur: "اور مشرک مردوں اور عورتوں کو" },
          explanation: { en: "Those who associated partners with Allah", ur: "وہ جنہوں نے اللہ کے ساتھ شریک ٹھہرائے" },
          verseRef: "33:73"
        },
        {
          term: "وَيَتُوبَ اللَّهُ عَلَى الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
          meaning: { en: "And Allah will accept repentance of believing men and women", ur: "اور اللہ مومن مردوں اور عورتوں کی توبہ قبول فرمائے" },
          explanation: { en: "Those who honor the trust receive forgiveness", ur: "امانت نبھانے والوں کو مغفرت ملتی ہے" },
          verseRef: "33:73"
        },
        {
          term: "وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
          meaning: { en: "And Allah is ever Forgiving, Merciful", ur: "اور اللہ بخشنے والا مہربان ہے" },
          explanation: { en: "Surah ends with divine mercy - hope for all", ur: "سورت الٰہی رحمت پر ختم ہوتی ہے - سب کے لیے امید" },
          verseRef: "33:73"
        }
      ]
    }
  },

  relationships: [
    { from: "adoption reform", to: "Zayd-Zaynab marriage", type: "application", description: { en: "Reform abolished, then practically demonstrated", ur: "اصلاح کا خاتمہ، پھر عملی مظاہرہ" } },
    { from: "hypocrites exposed", to: "believers steadfast", type: "contrast", description: { en: "Crisis revealed true from false believers", ur: "بحران نے سچے اور جھوٹے مومنوں کو الگ کر دیا" } },
    { from: "Battle of Trench", to: "Banu Qurayza", type: "sequence", description: { en: "Siege led to judgment on traitors", ur: "محاصرے نے غداروں کے فیصلے تک پہنچایا" } },
    { from: "divine wind", to: "confederates defeat", type: "cause", description: { en: "Allah's wind dispersed enemy armies", ur: "اللہ کی ہوا نے دشمن فوجوں کو منتشر کر دیا" } },
    { from: "wives' choice", to: "wives' conduct", type: "sequence", description: { en: "Chose akhirah, then given behavioral guidelines", ur: "آخرت کا انتخاب کیا، پھر آداب کی ہدایت دی گئی" } },
    { from: "Ahl al-Bayt purification", to: "salawat command", type: "elevation", description: { en: "Purified household deserves blessings", ur: "پاکیزہ گھرانہ درود کا مستحق ہے" } },
    { from: "hijab barrier", to: "jilbab command", type: "progression", description: { en: "From Prophet's wives to all believing women", ur: "نبی ﷺ کی بیویوں سے تمام مومن عورتوں تک" } },
    { from: "fear of people", to: "fear of Allah", type: "correction", description: { en: "Allah corrected Prophet's human hesitation", ur: "اللہ نے نبی ﷺ کی انسانی ہچکچاہٹ کی اصلاح فرمائی" } },
    { from: "speaking truth", to: "the trust", type: "fulfillment", description: { en: "Truthful speech honors the human trust", ur: "سچی بات امانتِ انسانی کا حق ادا کرتی ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Guidance", verses: "33:1-8", description: { en: "Fear Allah, follow revelation, adoption reform, prophetic covenant", ur: "اللہ سے ڈرو، وحی کی پیروی، اصلاحِ تبنّی، میثاقِ نبوت" } },
      { stage: 2, theme: "Battle of the Trench", verses: "33:9-27", description: { en: "Siege narrative, hypocrites exposed, believers steadfast, divine victory", ur: "محاصرے کا بیان، منافقوں کا انکشاف، مومنوں کی ثابت قدمی، الٰہی فتح" } },
      { stage: 3, theme: "Prophet's Household", verses: "33:28-34", description: { en: "Wives' choice, conduct guidelines, Ahl al-Bayt purification", ur: "بیویوں کا انتخاب، آدابِ سلوک، اہلِ بیت کی تطہیر" } },
      { stage: 4, theme: "Ten Qualities", verses: "33:35", description: { en: "Comprehensive list for Muslim men and women", ur: "مسلمان مردوں اور عورتوں کی جامع فہرست" } },
      { stage: 5, theme: "Zayd and Zaynab", verses: "33:36-40", description: { en: "Application of adoption reform, Seal of Prophets", ur: "اصلاحِ تبنّی کا اطلاق، خاتم النبیین" } },
      { stage: 6, theme: "Remembrance and Roles", verses: "33:41-48", description: { en: "Dhikr, Prophet's multiple roles, blessings for believers", ur: "ذکر، نبی ﷺ کے متعدد کردار، مومنوں کے لیے رحمتیں" } },
      { stage: 7, theme: "Marriage Regulations", verses: "33:49-52", description: { en: "Special rules for Prophet's marriages", ur: "نبی ﷺ کے نکاح کے خصوصی قواعد" } },
      { stage: 8, theme: "Household Etiquette", verses: "33:53-55", description: { en: "Rules for visiting, hijab barrier, mahram relatives", ur: "ملاقات کے آداب، حجاب کی رکاوٹ، محرم رشتے دار" } },
      { stage: 9, theme: "Salawat and Protection", verses: "33:56-62", description: { en: "Blessings on Prophet, punishment for harmers, warning to hypocrites", ur: "نبی ﷺ پر درود، ایذا رسانوں کی سزا، منافقوں کو تنبیہ" } },
      { stage: 10, theme: "The Hour and Fate", verses: "33:63-68", description: { en: "Knowledge of Hour, disbelievers' punishment and regret", ur: "قیامت کا علم، کافروں کی سزا اور پچھتاوا" } },
      { stage: 11, theme: "Truth and Trust", verses: "33:69-73", description: { en: "Musa's example, righteous speech, the cosmic trust", ur: "موسیٰ کی مثال، سچی بات، کائناتی امانت" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Trust in Allah's plan", ur: "اللہ کے منصوبے پر بھروسہ" }, how: { en: "When overwhelmed by challenges, remember the Trench - Allah is sufficient", ur: "جب مشکلات سے گھبراؤ تو خندق یاد کرو - اللہ کافی ہے" }, verse: "33:3" },
      { principle: { en: "Preserve lineage", ur: "نسب کی حفاظت" }, how: { en: "Call adopted children by biological father's name - maintain clarity", ur: "لے پالک بچوں کو حقیقی باپ کے نام سے پکارو - وضاحت برقرار رکھو" }, verse: "33:5" },
      { principle: { en: "Follow the Prophet's example", ur: "نبی ﷺ کی پیروی" }, how: { en: "Uswatun Hasana - study Seerah and implement his character", ur: "اسوۂ حسنہ - سیرت کا مطالعہ کرو اور ان کے اخلاق اپناؤ" }, verse: "33:21" },
      { principle: { en: "Fulfill your promises", ur: "اپنے وعدے پورے کرو" }, how: { en: "Be among those who are true to their covenant with Allah", ur: "ان لوگوں میں سے ہو جنہوں نے اللہ سے کیا عہد سچ کر دکھایا" }, verse: "33:23" },
      { principle: { en: "Choose akhirah over dunya", ur: "دنیا پر آخرت کو ترجیح دو" }, how: { en: "When faced with choice, prioritize eternal reward", ur: "جب انتخاب کا موقع آئے تو ابدی اجر کو مقدم رکھو" }, verse: "33:29" },
      { principle: { en: "Embody ten qualities", ur: "دس صفات اپناؤ" }, how: { en: "Work on submission, faith, obedience, truth, patience, humility, charity, fasting, chastity, dhikr", ur: "اسلام، ایمان، اطاعت، سچائی، صبر، عاجزی، صدقہ، روزہ، عفت، ذکر پر عمل کرو" }, verse: "33:35" },
      { principle: { en: "Fear Allah, not people", ur: "لوگوں سے نہیں، اللہ سے ڈرو" }, how: { en: "Don't let social pressure prevent obedience to Allah", ur: "سماجی دباؤ کو اللہ کی اطاعت سے نہ روکنے دو" }, verse: "33:37" },
      { principle: { en: "Remember Allah abundantly", ur: "اللہ کو کثرت سے یاد کرو" }, how: { en: "Make dhikr a constant practice, morning and evening", ur: "ذکر کو مستقل عمل بناؤ، صبح و شام" }, verse: "33:41-42" },
      { principle: { en: "Send salawat on Prophet", ur: "نبی ﷺ پر درود بھیجو" }, how: { en: "Regularly recite Allahumma salli wa sallim", ur: "باقاعدگی سے اللہم صلِّ وسلم پڑھو" }, verse: "33:56" },
      { principle: { en: "Observe hijab", ur: "حجاب کی پابندی کرو" }, how: { en: "Muslim women should wear modest outer garments", ur: "مسلمان عورتوں کو باحیا بیرونی لباس پہننا چاہیے" }, verse: "33:59" },
      { principle: { en: "Speak truth", ur: "سچ بولو" }, how: { en: "Qawl sadid - appropriate, straight, honest speech", ur: "قولِ سدید - مناسب، سیدھی، ایمانداری سے گفتگو" }, verse: "33:70" },
      { principle: { en: "Honor the trust", ur: "امانت کا حق ادا کرو" }, how: { en: "Fulfill responsibilities Allah placed on humans", ur: "اللہ نے انسان پر جو ذمہ داریاں رکھی ہیں انہیں پورا کرو" }, verse: "33:72" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Year of Crisis and Clarity", ur: "بحران اور وضاحت کا سال" },
    insight: {
      en: "Surah Al-Ahzab was revealed during one of Islam's most critical moments - the Battle of the Trench (5 AH). With 10,000 enemy soldiers surrounding Madinah and internal betrayal by Banu Qurayza, the Muslim community faced potential annihilation. This surah captures both the terror ('hearts reached throats') and the triumph (divine wind scattered enemies). But remarkably, Allah uses this crisis to legislate domestic and social matters: adoption laws, hijab, Prophet's marriages, and household etiquette. Why? Because the same crisis that tests faith also purifies society. The verse 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ' (33:21) - declaring the Prophet as the perfect example - comes right after describing the siege. In difficulty, we learn to follow. The surah ends with 'Al-Amanah' (The Trust) - humanity's unique burden of moral responsibility. Mountains refused it; humans accepted it. The Trench tested whether Muslims would honor that trust. They did. And Allah rewarded them with victory, clarity, and legislation that would guide generations.",
      ur: "سورۃ الاحزاب اسلام کے نازک ترین لمحات میں سے ایک میں نازل ہوئی - غزوۂ خندق (5 ہجری)۔ 10,000 دشمن فوجیوں نے مدینہ کا محاصرہ کیا اور بنو قریظہ نے اندر سے غداری کی، مسلمان تباہی کے دہانے پر تھے۔ یہ سورت دہشت ('دل گلوں تک آ پہنچے') اور فتح (الٰہی ہوا نے دشمنوں کو منتشر کیا) دونوں کو بیان کرتی ہے۔ حیرت کی بات یہ ہے کہ اللہ نے اس بحران کو گھریلو اور سماجی معاملات کی قانون سازی کے لیے استعمال کیا: تبنّی کے قوانین، حجاب، نبی ﷺ کی شادیاں، اور گھریلو آداب۔ کیوں؟ کیونکہ جو بحران ایمان کی آزمائش کرتا ہے وہی معاشرے کو پاکیزہ بھی کرتا ہے۔ آیت 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ' (33:21) - جو نبی ﷺ کو بہترین نمونہ قرار دیتی ہے - محاصرے کے بیان کے فوراً بعد آتی ہے۔ مشکل میں ہم پیروی سیکھتے ہیں۔ سورت 'الامانۃ' (امانت) پر ختم ہوتی ہے - انسانیت کا منفرد اخلاقی بوجھ۔ پہاڑوں نے انکار کیا؛ انسان نے اٹھا لیا۔ خندق نے آزمایا کہ کیا مسلمان اس امانت کا حق ادا کریں گے۔ انہوں نے کیا۔ اور اللہ نے انہیں فتح، وضاحت، اور ایسی قانون سازی سے نوازا جو نسلوں کی رہنمائی کرے گی۔"
    }
  },

  linguisticFeatures: {
    features: [
      { feature: "الأحزاب", example: { en: "The Confederates", ur: "اتحادی لشکر" }, effect: { en: "Plural of حزب - allied factions united against Islam", ur: "حزب کی جمع - اسلام کے خلاف متحد دھڑے" } },
      { feature: "أُسْوَةٌ حَسَنَةٌ", example: { en: "Excellent example", ur: "بہترین نمونہ" }, effect: { en: "Technical term for Prophetic model to follow", ur: "نبوی نمونے کی پیروی کی اصطلاح" } },
      { feature: "خَاتَمَ النَّبِيِّينَ", example: { en: "Seal of the Prophets", ur: "خاتم النبیین" }, effect: { en: "Finality of prophethood - no prophet after Muhammad", ur: "ختمِ نبوت - محمد ﷺ کے بعد کوئی نبی نہیں" } },
      { feature: "أَهْلَ الْبَيْتِ", example: { en: "People of the House", ur: "اہلِ بیت" }, effect: { en: "Special designation for Prophet's household", ur: "نبی ﷺ کے گھرانے کا خصوصی لقب" } },
      { feature: "الْأَمَانَةَ", example: { en: "The Trust", ur: "امانت" }, effect: { en: "Cosmic responsibility accepted by humans", ur: "کائناتی ذمہ داری جو انسان نے قبول کی" } },
      { feature: "قَوْلًا سَدِيدًا", example: { en: "Appropriate speech", ur: "سیدھی بات" }, effect: { en: "From س-د-د (to be straight) - honest, fitting words", ur: "س-د-د سے (سیدھا ہونا) - ایمانداری سے مناسب الفاظ" } },
      { feature: "يُدْنِينَ", example: { en: "Draw close/over", ur: "قریب لانا/اوپر لینا" }, effect: { en: "From د-ن-و - bringing garment close to body", ur: "د-ن-و سے - لباس کو جسم کے قریب لانا" } },
      { feature: "الْمُرْجِفُونَ", example: { en: "Rumormongers", ur: "افواہ سازان" }, effect: { en: "From ر-ج-ف (to shake) - those who spread shaking news", ur: "ر-ج-ف سے (ہلانا) - لرزہ خیز خبریں پھیلانے والے" } }
    ]
  },

  historicalContext: {
    revelationPeriod: { en: "5 AH - Year of the Trench (Khandaq)", ur: "5 ہجری - غزوۂ خندق کا سال" },
    occasionOfRevelation: {
      battle: { en: "Quraysh, Ghatafan, and Jewish tribes formed alliance of 10,000 against 3,000 Muslims", ur: "قریش، غطفان اور یہودی قبائل نے 3,000 مسلمانوں کے خلاف 10,000 کا اتحاد بنایا" },
      trench: { en: "Salman al-Farisi suggested Persian trench strategy - unprecedented in Arabia", ur: "سلمان فارسی نے فارسی خندق کی حکمت عملی تجویز کی - عرب میں بے مثال" },
      betrayal: { en: "Banu Qurayza violated treaty during siege, threatening Muslims from within", ur: "بنو قریظہ نے محاصرے کے دوران معاہدے کی خلاف ورزی کی اور اندر سے مسلمانوں کو خطرے میں ڈالا" },
      resolution: { en: "Divine wind (saba) for days scattered enemy, angels struck terror, siege lifted without battle", ur: "الٰہی ہوا (صبا) نے کئی دن دشمن کو منتشر کیا، فرشتوں نے خوف ڈالا، بغیر لڑائی محاصرہ اٹھ گیا" }
    },
    adoptionCase: {
      context: { en: "Zayd ibn Haritha was called 'Zayd ibn Muhammad' before these verses", ur: "ان آیات سے پہلے زید بن حارثہ کو 'زید بن محمد' کہا جاتا تھا" },
      reform: { en: "Allah commanded calling him by biological father's name: Zayd ibn Haritha", ur: "اللہ نے حکم دیا کہ انہیں حقیقی باپ کے نام سے پکارو: زید بن حارثہ" },
      demonstration: { en: "Prophet married Zaynab after her divorce from Zayd to prove adopted sons' ex-wives are not forbidden", ur: "نبی ﷺ نے زید سے طلاق کے بعد زینب سے نکاح کیا تاکہ ثابت ہو کہ منہ بولے بیٹوں کی سابقہ بیویاں حرام نہیں" }
    },
    hijabRevelation: {
      barrier: { en: "Verse 33:53 - screen between companions and Prophet's wives", ur: "آیت 33:53 - صحابہ اور نبی ﷺ کی بیویوں کے درمیان پردہ" },
      jilbab: { en: "Verse 33:59 - extended to all believing women for protection and identification", ur: "آیت 33:59 - تمام مومن عورتوں تک توسیع برائے حفاظت اور شناخت" }
    }
  },

  scientificReferences: {
    notes: [
      { verse: "33:4", topic: { en: "Two hearts metaphor", ur: "دو دلوں کا استعارہ" }, note: { en: "Anatomical reality - one heart per person, used as basis for singular lineage", ur: "تشریحی حقیقت - ہر شخص کا ایک دل، واحد نسب کی بنیاد کے طور پر استعمال" } },
      { verse: "33:9", topic: { en: "Wind as weapon", ur: "ہوا بطور ہتھیار" }, note: { en: "Strong easterly wind (saba) can indeed collapse tents and extinguish fires - historical meteorology confirms harsh conditions", ur: "تیز مشرقی ہوا (صبا) واقعی خیمے گرا سکتی ہے اور آگ بجھا سکتی ہے - تاریخی موسمیات سخت حالات کی تصدیق کرتی ہے" } },
      { verse: "33:10", topic: { en: "Hearts reaching throats", ur: "دلوں کا حلق تک آنا" }, note: { en: "Describes physiological fear response - elevated heart rate, sensation of constriction", ur: "خوف کا جسمانی ردعمل بیان کرتا ہے - دل کی تیز دھڑکن، گلے میں گھٹن کا احساس" } }
    ]
  },

  namesOfSurah: {
    names: [
      { name: "Al-Ahzab", meaning: { en: "The Confederates", ur: "اتحادی لشکر" }, reason: { en: "Named after the allied enemy forces in Battle of Trench", ur: "غزوۂ خندق میں دشمن اتحادی فوجوں کے نام پر" } },
      { name: "Surah Al-Hijab", meaning: { en: "Chapter of the Veil", ur: "پردے کی سورت" }, reason: { en: "Contains major hijab legislation (33:53, 33:59)", ur: "حجاب کی اہم قانون سازی شامل ہے (33:53, 33:59)" } }
    ]
  },

  keyPersons: {
    mentioned: [
      { name: "Prophet Muhammad", role: { en: "Central figure - guidance for his household, battles, marriages", ur: "مرکزی شخصیت - گھرانے، جنگوں، شادیوں کے لیے رہنمائی" } },
      { name: "Zayd ibn Haritha", role: { en: "Former adopted son, his divorce from Zaynab led to adoption reform", ur: "سابق منہ بولا بیٹا، زینب سے طلاق نے تبنّی کی اصلاح کی" } },
      { name: "Zaynab bint Jahsh", role: { en: "Prophet's cousin who married Zayd then Prophet after divorce", ur: "نبی ﷺ کی کزن جنہوں نے زید سے نکاح کیا پھر طلاق کے بعد نبی ﷺ سے" } },
      { name: "Mothers of Believers", role: { en: "Prophet's wives - given special status and responsibilities", ur: "نبی ﷺ کی بیویاں - خصوصی مقام اور ذمہ داریاں عطا ہوئیں" } },
      { name: "Nuh, Ibrahim, Musa, Isa", role: { en: "Prophets mentioned in covenant context (33:7)", ur: "میثاق کے سیاق میں ذکر کیے گئے انبیاء (33:7)" } }
    ]
  },

  battleDetails: {
    name: "Ghazwat al-Khandaq (Battle of the Trench)",
    alternateNames: ["Ghazwat al-Ahzab (Battle of Confederates)"],
    date: "Shawwal 5 AH (627 CE)",
    location: "Northern approaches to Madinah",
    muslimForce: "~3,000",
    enemyForce: "~10,000 (Quraysh: 4,000, Ghatafan: 6,000 + other tribes)",
    strategy: "Trench (Khandaq) dug on exposed northern side - suggested by Salman al-Farisi",
    duration: "~27 days siege",
    outcome: "Strategic Muslim victory - siege lifted without major battle",
    divineIntervention: [
      "Fierce wind (saba) for days - scattered enemy camps",
      "Unseen armies (angels) - struck terror into enemy hearts",
      "Nu'aym ibn Mas'ud's conversion - sowed distrust between confederates"
    ]
  }
};

export default ONTOLOGY;
