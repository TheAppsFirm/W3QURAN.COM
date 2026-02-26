/**
 * Surah An-Nisa (The Women) - Surah 4
 * Ontology of Quranic Concepts and Relationships
 *
 * Theme: Women's rights, inheritance laws, orphan rights, marriage regulations,
 *        justice, hypocrites, fighting in Allah's cause
 * Revelation: Medinan
 * Ayahs: 176
 *
 * Key Feature: Comprehensive legislation on family law, social justice, and community relations
 */

export const ONTOLOGY = {
  surahId: 4,
  surahName: "An-Nisa",
  surahNameArabic: "النساء",
  surahNameUrdu: "النساء - عورتیں",
  meaning: {
    en: "The Women",
    ur: "عورتیں",
    ar: "النساء"
  },
  revelationType: "Madani",
  totalAyahs: 176,
  chronologicalOrder: 92,

  introduction: {
    en: "An-Nisa addresses the rights of women, orphans, and the vulnerable in society. It establishes detailed inheritance laws, marriage regulations, and family structure. The surah also deals extensively with hypocrites, relations with People of the Book, and rules of fighting. It opens by emphasizing human unity from a single soul.",
    ur: "النساء عورتوں، یتیموں اور معاشرے کے کمزوروں کے حقوق بیان کرتی ہے۔ وراثت کے تفصیلی قوانین، نکاح کے ضوابط اور خاندانی ڈھانچہ قائم کرتی ہے۔ سورت منافقین، اہل کتاب سے تعلقات اور جنگ کے احکام سے بھی بحث کرتی ہے۔ ایک جان سے انسانی وحدت پر زور دے کر شروع ہوتی ہے۔"
  },

  categories: {
    humanUnity: {
      name: "Human Unity and Origin",
      nameUr: "انسانی وحدت اور اصل",
      nameArabic: "وحدة البشرية والأصل",
      nameUrdu: "انسانی وحدت اور اصل",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        {
          term: "خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ",
          meaning: { en: "Created you from a single soul", ur: "ایک جان سے پیدا کیا - انسانی مساوات کی بنیاد" },
          explanation: { en: "All humanity from Adam - foundation of human equality", ur: "تمام انسانیت آدم سے - انسانی مساوات کی بنیاد" },
          verseRef: "4:1"
        },
        {
          term: "وَخَلَقَ مِنْهَا زَوْجَهَا",
          meaning: { en: "Created from it its mate", ur: "اس سے اس کا جوڑا بنایا" },
          explanation: { en: "Hawwa (Eve) created from Adam - complementary pair", ur: "حوا آدم سے پیدا کی گئیں - ایک دوسرے کی تکمیل کرنے والا جوڑا" },
          verseRef: "4:1"
        },
        {
          term: "وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً",
          meaning: { en: "Dispersed from them many men and women", ur: "ان دونوں سے بہت سے مرد و عورت پھیلائے" },
          explanation: { en: "All humanity descends from this pair - universal kinship", ur: "تمام انسانیت اسی جوڑے سے ہے - عالمگیر رشتہ داری" },
          verseRef: "4:1"
        },
        {
          term: "وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ",
          meaning: { en: "Fear Allah by whom you ask one another", ur: "اس اللہ سے ڈرو جس کے نام پر مانگتے ہو" },
          explanation: { en: "Invoking Allah in oaths - respect kinship ties", ur: "قسموں میں اللہ کا نام لینا - رشتوں کا احترام" },
          verseRef: "4:1"
        },
        {
          term: "وَالْأَرْحَامَ",
          meaning: { en: "And the wombs (kinship)", ur: "اور رشتوں کا خیال رکھو" },
          explanation: { en: "Respect family ties - Arham shares root with Rahman (mercy)", ur: "خاندانی رشتوں کا احترام - ارحام کا مادہ رحمٰن (رحمت) سے مشترک" },
          verseRef: "4:1"
        }
      ]
    },

    orphanRights: {
      name: "Orphan Rights and Protection",
      nameUr: "یتیموں کے حقوق اور تحفظ",
      nameArabic: "حقوق اليتامى وحمايتهم",
      nameUrdu: "یتیموں کے حقوق اور تحفظ",
      color: "#EC4899",
      icon: "Heart",
      concepts: [
        {
          term: "وَآتُوا الْيَتَامَىٰ أَمْوَالَهُمْ",
          meaning: { en: "Give orphans their property", ur: "یتیموں کو ان کا مال دو" },
          explanation: { en: "Orphans must receive their rightful inheritance", ur: "یتیموں کو ان کی جائز وراثت ملنی چاہیے" },
          verseRef: "4:2"
        },
        {
          term: "وَلَا تَتَبَدَّلُوا الْخَبِيثَ بِالطَّيِّبِ",
          meaning: { en: "Don't exchange bad for good", ur: "خراب کو اچھے سے نہ بدلو" },
          explanation: { en: "Don't swap their quality property with inferior ones", ur: "ان کی اچھی جائیداد کو گھٹیا سے نہ بدلو" },
          verseRef: "4:2"
        },
        {
          term: "وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ",
          meaning: { en: "Don't consume their wealth with yours", ur: "ان کا مال اپنے مال میں ملا کر نہ کھاؤ" },
          explanation: { en: "Don't mix their property with yours to embezzle", ur: "ان کا مال اپنے مال میں ملا کر ہڑپ نہ کرو" },
          verseRef: "4:2"
        },
        {
          term: "إِنَّهُ كَانَ حُوبًا كَبِيرًا",
          meaning: { en: "It is a great sin", ur: "یہ بڑا گناہ ہے" },
          explanation: { en: "Hub - major sin. Consuming orphan wealth is severely condemned", ur: "حوب - بڑا گناہ۔ یتیم کا مال کھانا سخت مذموم ہے" },
          verseRef: "4:2"
        },
        {
          term: "وَابْتَلُوا الْيَتَامَىٰ",
          meaning: { en: "Test the orphans", ur: "یتیموں کو آزماؤ" },
          explanation: { en: "Assess their maturity before giving them property", ur: "مال دینے سے پہلے ان کی سمجھ داری جانچو" },
          verseRef: "4:6"
        },
        {
          term: "حَتَّىٰ إِذَا بَلَغُوا النِّكَاحَ",
          meaning: { en: "Until they reach marriageable age", ur: "جب نکاح کی عمر کو پہنچیں" },
          explanation: { en: "Age of maturity - when they can manage property", ur: "بلوغت کی عمر - جب مال کا انتظام کر سکیں" },
          verseRef: "4:6"
        },
        {
          term: "فَإِنْ آنَسْتُم مِّنْهُمْ رُشْدًا",
          meaning: { en: "If you perceive in them sound judgment", ur: "اگر ان میں سمجھ داری پاؤ" },
          explanation: { en: "Rushd - maturity in handling affairs, not just age", ur: "رشد - معاملات میں سمجھ داری، صرف عمر نہیں" },
          verseRef: "4:6"
        },
        {
          term: "فَادْفَعُوا إِلَيْهِمْ أَمْوَالَهُمْ",
          meaning: { en: "Then deliver their property to them", ur: "تو ان کا مال انہیں دے دو" },
          explanation: { en: "Hand over property when they're ready", ur: "جب تیار ہوں تو مال حوالے کرو" },
          verseRef: "4:6"
        },
        {
          term: "وَلَا تَأْكُلُوهَا إِسْرَافًا وَبِدَارًا",
          meaning: { en: "Don't consume it wastefully or hastily", ur: "فضول خرچی اور جلد بازی سے نہ کھاؤ" },
          explanation: { en: "Don't waste it before they grow up", ur: "ان کے بڑے ہونے سے پہلے ضائع نہ کرو" },
          verseRef: "4:6"
        },
        {
          term: "إِنَّ الَّذِينَ يَأْكُلُونَ أَمْوَالَ الْيَتَامَىٰ ظُلْمًا",
          meaning: { en: "Those who consume orphans' wealth unjustly", ur: "جو یتیموں کا مال ظلم سے کھاتے ہیں" },
          explanation: { en: "Eating orphan property = consuming fire", ur: "یتیم کا مال کھانا = آگ کھانا" },
          verseRef: "4:10"
        },
        {
          term: "إِنَّمَا يَأْكُلُونَ فِي بُطُونِهِمْ نَارًا",
          meaning: { en: "They are eating fire into their bellies", ur: "اپنے پیٹوں میں آگ بھرتے ہیں" },
          explanation: { en: "Graphic warning - consumed wealth becomes hellfire", ur: "سخت تنبیہ - کھایا ہوا مال جہنم کی آگ بنے گا" },
          verseRef: "4:10"
        }
      ]
    },

    marriageRegulations: {
      name: "Marriage Regulations",
      nameUr: "نکاح کے احکام",
      nameArabic: "أحكام الزواج",
      nameUrdu: "نکاح کے احکام",
      color: "#F59E0B",
      icon: "Heart",
      concepts: [
        {
          term: "فَانكِحُوا مَا طَابَ لَكُم مِّنَ النِّسَاءِ",
          meaning: { en: "Marry women of your choice", ur: "جو عورتیں تمہیں پسند ہوں ان سے نکاح کرو" },
          explanation: { en: "Permission to marry - within limits", ur: "نکاح کی اجازت - حدود کے اندر" },
          verseRef: "4:3"
        },
        {
          term: "مَثْنَىٰ وَثُلَاثَ وَرُبَاعَ",
          meaning: { en: "Two, three, or four", ur: "دو، تین، یا چار" },
          explanation: { en: "Maximum four wives permitted - with conditions", ur: "زیادہ سے زیادہ چار بیویاں - شرائط کے ساتھ" },
          verseRef: "4:3"
        },
        {
          term: "فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً",
          meaning: { en: "If you fear you cannot be just, then one", ur: "اگر انصاف نہ کر سکو تو ایک" },
          explanation: { en: "Justice is condition - if can't be fair, marry one", ur: "عدل شرط ہے - اگر انصاف نہیں کر سکتے تو ایک" },
          verseRef: "4:3"
        },
        {
          term: "وَلَن تَسْتَطِيعُوا أَن تَعْدِلُوا بَيْنَ النِّسَاءِ",
          meaning: { en: "You will never be able to be just between wives", ur: "تم ہرگز بیویوں میں انصاف نہیں کر سکتے" },
          explanation: { en: "Perfect emotional equality impossible - but try", ur: "مکمل جذباتی مساوات ناممکن - لیکن کوشش کرو" },
          verseRef: "4:129"
        },
        {
          term: "فَلَا تَمِيلُوا كُلَّ الْمَيْلِ",
          meaning: { en: "Don't incline completely (to one)", ur: "پوری طرح نہ جھکو" },
          explanation: { en: "Don't neglect one wife entirely for another", ur: "ایک بیوی کو دوسری کی خاطر بالکل نظر انداز نہ کرو" },
          verseRef: "4:129"
        },
        {
          term: "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً",
          meaning: { en: "Give women their mahr as a gift", ur: "عورتوں کو ان کے مہر خوشی سے دو" },
          explanation: { en: "Mahr is woman's right - given willingly as gift", ur: "مہر عورت کا حق ہے - خوشی سے بطور تحفہ دیا جائے" },
          verseRef: "4:4"
        },
        {
          term: "فَإِن طِبْنَ لَكُمْ عَن شَيْءٍ مِّنْهُ نَفْسًا",
          meaning: { en: "If they give up some willingly", ur: "اگر وہ خوشی سے کچھ چھوڑ دیں" },
          explanation: { en: "Wife can forgo part of mahr by her own choice", ur: "بیوی اپنی مرضی سے مہر کا حصہ چھوڑ سکتی ہے" },
          verseRef: "4:4"
        }
      ]
    },

    prohibitedMarriages: {
      name: "Prohibited Marriage Relations",
      nameUr: "حرام رشتے",
      nameArabic: "المحرمات من النساء",
      nameUrdu: "حرام رشتے",
      color: "#EF4444",
      icon: "Ban",
      concepts: [
        {
          term: "حُرِّمَتْ عَلَيْكُمْ أُمَّهَاتُكُمْ",
          meaning: { en: "Forbidden: your mothers", ur: "تم پر حرام ہیں تمہاری مائیں" },
          explanation: { en: "Biological mothers - permanent prohibition", ur: "حقیقی مائیں - ہمیشہ کے لیے حرام" },
          verseRef: "4:23"
        },
        {
          term: "وَبَنَاتُكُمْ",
          meaning: { en: "And your daughters", ur: "اور بیٹیاں" },
          explanation: { en: "Biological daughters at all levels", ur: "تمام درجات کی حقیقی بیٹیاں" },
          verseRef: "4:23"
        },
        {
          term: "وَأَخَوَاتُكُمْ",
          meaning: { en: "And your sisters", ur: "اور بہنیں" },
          explanation: { en: "Full, half (paternal/maternal) sisters", ur: "سگی، باپ شریک، ماں شریک بہنیں" },
          verseRef: "4:23"
        },
        {
          term: "وَعَمَّاتُكُمْ",
          meaning: { en: "And your paternal aunts", ur: "اور پھوپھیاں" },
          explanation: { en: "Father's sisters", ur: "باپ کی بہنیں" },
          verseRef: "4:23"
        },
        {
          term: "وَخَالَاتُكُمْ",
          meaning: { en: "And your maternal aunts", ur: "اور خالائیں" },
          explanation: { en: "Mother's sisters", ur: "ماں کی بہنیں" },
          verseRef: "4:23"
        },
        {
          term: "وَبَنَاتُ الْأَخِ وَبَنَاتُ الْأُخْتِ",
          meaning: { en: "And brother's daughters, sister's daughters", ur: "اور بھائی کی بیٹیاں اور بہن کی بیٹیاں" },
          explanation: { en: "Nieces from both sides", ur: "دونوں طرف کی بھتیجیاں و بھانجیاں" },
          verseRef: "4:23"
        },
        {
          term: "وَأُمَّهَاتُكُمُ اللَّاتِي أَرْضَعْنَكُمْ",
          meaning: { en: "And mothers who nursed you", ur: "اور دودھ پلانے والی مائیں" },
          explanation: { en: "Milk mothers - breastfeeding creates kinship", ur: "دودھ کی مائیں - رضاعت سے رشتہ بنتا ہے" },
          verseRef: "4:23"
        },
        {
          term: "وَأَخَوَاتُكُم مِّنَ الرَّضَاعَةِ",
          meaning: { en: "And milk-sisters", ur: "اور دودھ کی بہنیں" },
          explanation: { en: "Sisters through breastfeeding", ur: "رضاعت کے ذریعے بہنیں" },
          verseRef: "4:23"
        },
        {
          term: "وَأُمَّهَاتُ نِسَائِكُمْ",
          meaning: { en: "And mothers of your wives", ur: "اور بیویوں کی مائیں" },
          explanation: { en: "Mother-in-law - forbidden immediately upon marriage", ur: "ساس - نکاح ہوتے ہی حرام ہو جاتی ہے" },
          verseRef: "4:23"
        },
        {
          term: "وَرَبَائِبُكُمُ اللَّاتِي فِي حُجُورِكُم",
          meaning: { en: "And stepdaughters in your care", ur: "اور سوتیلی بیٹیاں جو تمہاری گود میں ہیں" },
          explanation: { en: "Stepdaughters - if marriage consummated with mother", ur: "سوتیلی بیٹیاں - اگر ماں سے ہم بستری ہو چکی ہو" },
          verseRef: "4:23"
        },
        {
          term: "وَحَلَائِلُ أَبْنَائِكُمُ الَّذِينَ مِنْ أَصْلَابِكُمْ",
          meaning: { en: "And wives of your sons from your loins", ur: "اور صلبی بیٹوں کی بیویاں" },
          explanation: { en: "Daughter-in-law - biological sons only", ur: "بہو - صرف صلبی بیٹوں کی" },
          verseRef: "4:23"
        },
        {
          term: "وَأَن تَجْمَعُوا بَيْنَ الْأُخْتَيْنِ",
          meaning: { en: "And combining two sisters", ur: "اور دو بہنوں کو جمع کرنا" },
          explanation: { en: "Can't marry two sisters simultaneously", ur: "دو بہنوں کو بیک وقت نکاح میں نہیں رکھ سکتے" },
          verseRef: "4:23"
        },
        {
          term: "وَالْمُحْصَنَاتُ مِنَ النِّسَاءِ",
          meaning: { en: "And married women", ur: "اور شوہر والی عورتیں" },
          explanation: { en: "Already married women are forbidden", ur: "شوہر والی عورتیں حرام ہیں" },
          verseRef: "4:24"
        },
        {
          term: "وَلَا تَنكِحُوا مَا نَكَحَ آبَاؤُكُم",
          meaning: { en: "Don't marry whom your fathers married", ur: "اپنے باپوں کی منکوحہ سے نکاح نہ کرو" },
          explanation: { en: "Stepmother forbidden - pre-Islamic practice abolished", ur: "سوتیلی ماں سے نکاح حرام - جاہلیت کی رسم ختم" },
          verseRef: "4:22"
        }
      ]
    },

    inheritanceLaws: {
      name: "Inheritance Laws",
      nameUr: "وراثت کے احکام",
      nameArabic: "أحكام الميراث",
      nameUrdu: "وراثت کے احکام",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        {
          term: "لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ",
          meaning: { en: "For men a share of what parents left", ur: "مردوں کے لیے والدین کے ترکے میں حصہ" },
          explanation: { en: "Men have inheritance rights - not exclusive to eldest", ur: "مردوں کو وراثت کا حق - صرف بڑے بیٹے تک محدود نہیں" },
          verseRef: "4:7"
        },
        {
          term: "وَلِلنِّسَاءِ نَصِيبٌ",
          meaning: { en: "And for women a share", ur: "اور عورتوں کے لیے حصہ" },
          explanation: { en: "Women also inherit - revolutionary for that time", ur: "عورتوں کو بھی وراثت ملتی ہے - اس وقت کے لیے انقلابی" },
          verseRef: "4:7"
        },
        {
          term: "نَصِيبًا مَّفْرُوضًا",
          meaning: { en: "An obligatory share", ur: "مقرر حصہ" },
          explanation: { en: "Fixed, mandatory - not optional charity", ur: "مقرر، لازمی - اختیاری صدقہ نہیں" },
          verseRef: "4:7"
        },
        {
          term: "يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ",
          meaning: { en: "Allah instructs you about your children", ur: "اللہ تمہیں اولاد کے بارے میں حکم دیتا ہے" },
          explanation: { en: "Divine command about children's inheritance", ur: "اولاد کی وراثت کے بارے میں الٰہی حکم" },
          verseRef: "4:11"
        },
        {
          term: "لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ",
          meaning: { en: "For male, share of two females", ur: "مرد کو دو عورتوں کے برابر" },
          explanation: { en: "2:1 ratio - male has financial obligations", ur: "2:1 کا تناسب - مرد پر مالی ذمہ داریاں ہیں" },
          verseRef: "4:11"
        },
        {
          term: "فَإِن كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ",
          meaning: { en: "If daughters more than two", ur: "اگر دو سے زیادہ بیٹیاں ہوں" },
          explanation: { en: "Two or more daughters get 2/3 together", ur: "دو یا زیادہ بیٹیاں مل کر 2/3 حاصل کریں" },
          verseRef: "4:11"
        },
        {
          term: "فَلَهُنَّ ثُلُثَا مَا تَرَكَ",
          meaning: { en: "They get two-thirds", ur: "تو ان کے لیے دو تہائی" },
          explanation: { en: "2/3 divided among all daughters", ur: "2/3 تمام بیٹیوں میں تقسیم ہوگا" },
          verseRef: "4:11"
        },
        {
          term: "وَإِن كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ",
          meaning: { en: "If one daughter, half", ur: "اگر ایک بیٹی ہو تو آدھا" },
          explanation: { en: "Single daughter gets 1/2", ur: "ایک بیٹی کو 1/2 ملے گا" },
          verseRef: "4:11"
        },
        {
          term: "وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُ",
          meaning: { en: "For parents, each one-sixth", ur: "والدین میں سے ہر ایک کے لیے چھٹا حصہ" },
          explanation: { en: "Both parents get 1/6 if deceased has children", ur: "اگر میت کی اولاد ہو تو دونوں والدین کو 1/6" },
          verseRef: "4:11"
        },
        {
          term: "فَإِن لَّمْ يَكُن لَّهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ",
          meaning: { en: "If no child and parents inherit", ur: "اگر اولاد نہ ہو اور والدین وارث ہوں" },
          explanation: { en: "Mother gets 1/3 if no children", ur: "اگر اولاد نہ ہو تو ماں کو 1/3" },
          verseRef: "4:11"
        },
        {
          term: "فَلِأُمِّهِ الثُّلُثُ",
          meaning: { en: "Mother gets one-third", ur: "ماں کو تہائی" },
          explanation: { en: "Mother's share increases without children", ur: "اولاد نہ ہونے پر ماں کا حصہ بڑھتا ہے" },
          verseRef: "4:11"
        },
        {
          term: "مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ",
          meaning: { en: "After bequest or debt", ur: "وصیت اور قرض کے بعد" },
          explanation: { en: "Debts and valid bequests paid first", ur: "پہلے قرضے اور جائز وصیتیں ادا ہوں گی" },
          verseRef: "4:11"
        },
        {
          term: "وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ",
          meaning: { en: "For you half of what wives leave", ur: "تمہارے لیے بیویوں کے ترکے کا آدھا" },
          explanation: { en: "Husband gets 1/2 if wife has no children", ur: "بیوی کی اولاد نہ ہو تو شوہر کو 1/2" },
          verseRef: "4:12"
        },
        {
          term: "فَإِن كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ",
          meaning: { en: "If they have children, you get quarter", ur: "اگر ان کی اولاد ہو تو تمہیں چوتھائی" },
          explanation: { en: "Husband's share reduces to 1/4 with children", ur: "اولاد ہو تو شوہر کا حصہ 1/4 ہو جاتا ہے" },
          verseRef: "4:12"
        },
        {
          term: "وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ",
          meaning: { en: "For them quarter of what you leave", ur: "ان کے لیے چوتھائی جو تم چھوڑو" },
          explanation: { en: "Wife gets 1/4 if husband has no children", ur: "شوہر کی اولاد نہ ہو تو بیوی کو 1/4" },
          verseRef: "4:12"
        },
        {
          term: "فَإِن كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ",
          meaning: { en: "If you have children, they get eighth", ur: "اگر تمہاری اولاد ہو تو انہیں آٹھواں" },
          explanation: { en: "Wife's share 1/8 with children", ur: "اولاد ہونے پر بیوی کا حصہ 1/8" },
          verseRef: "4:12"
        },
        {
          term: "الْكَلَالَةُ",
          meaning: { en: "Kalalah (no direct heirs)", ur: "کلالہ - جس کے والدین یا اولاد نہ ہو" },
          explanation: { en: "Person with no parents or children - siblings inherit", ur: "جس کے والدین یا اولاد نہ ہو - بہن بھائی وارث بنیں" },
          verseRef: "4:12, 4:176"
        },
        {
          term: "تِلْكَ حُدُودُ اللَّهِ",
          meaning: { en: "These are Allah's limits", ur: "یہ اللہ کی حدیں ہیں" },
          explanation: { en: "Hudud - boundaries not to be crossed", ur: "حدود - جن سے تجاوز نہیں کرنا" },
          verseRef: "4:13"
        }
      ]
    },

    womenRights: {
      name: "Women's Rights and Treatment",
      nameUr: "عورتوں کے حقوق اور سلوک",
      nameArabic: "حقوق المرأة ومعاملتها",
      nameUrdu: "عورتوں کے حقوق اور سلوک",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        {
          term: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ",
          meaning: { en: "Live with them honorably", ur: "ان کے ساتھ اچھے طریقے سے رہو" },
          explanation: { en: "Ma'ruf - kindness, good treatment as standard", ur: "معروف - بھلائی، اچھا سلوک معیار ہے" },
          verseRef: "4:19"
        },
        {
          term: "فَإِن كَرِهْتُمُوهُنَّ",
          meaning: { en: "If you dislike them", ur: "اگر تم انہیں ناپسند کرو" },
          explanation: { en: "Disliking doesn't justify mistreatment", ur: "ناپسندیدگی بدسلوکی کا جواز نہیں" },
          verseRef: "4:19"
        },
        {
          term: "فَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا",
          meaning: { en: "Perhaps you dislike something with much good in it", ur: "شاید تم کسی چیز کو ناپسند کرو اور اللہ اس میں بہت بھلائی رکھ دے" },
          explanation: { en: "Wisdom in patience - good may come from what's disliked", ur: "صبر میں حکمت - ناپسند چیز میں بھلائی ہو سکتی ہے" },
          verseRef: "4:19"
        },
        {
          term: "لَا يَحِلُّ لَكُمْ أَن تَرِثُوا النِّسَاءَ كَرْهًا",
          meaning: { en: "Not lawful to inherit women against their will", ur: "تمہارے لیے حلال نہیں کہ عورتوں کو زبردستی وارثت میں لو" },
          explanation: { en: "Abolished practice of inheriting deceased's wives", ur: "میت کی بیویوں کو وراثت میں لینے کی رسم ختم" },
          verseRef: "4:19"
        },
        {
          term: "وَلَا تَعْضُلُوهُنَّ لِتَذْهَبُوا بِبَعْضِ مَا آتَيْتُمُوهُنَّ",
          meaning: { en: "Don't constrain them to take back what you gave", ur: "انہیں تنگ نہ کرو کہ جو دیا ہے واپس لو" },
          explanation: { en: "Don't pressure wives to return mahr for divorce", ur: "بیویوں پر طلاق کے لیے مہر واپسی کا دباؤ نہ ڈالو" },
          verseRef: "4:19"
        },
        {
          term: "وَإِنْ أَرَدتُّمُ اسْتِبْدَالَ زَوْجٍ مَّكَانَ زَوْجٍ",
          meaning: { en: "If you want to replace one wife with another", ur: "اگر ایک بیوی کی جگہ دوسری لانا چاہو" },
          explanation: { en: "Divorce for remarriage - still pay full mahr", ur: "دوسری شادی کے لیے طلاق - پھر بھی پورا مہر دو" },
          verseRef: "4:20"
        },
        {
          term: "وَآتَيْتُمْ إِحْدَاهُنَّ قِنطَارًا فَلَا تَأْخُذُوا مِنْهُ شَيْئًا",
          meaning: { en: "Even if you gave one a great amount, take nothing", ur: "اگر ڈھیروں مال دیا ہو تو بھی کچھ واپس نہ لو" },
          explanation: { en: "Even huge mahr cannot be taken back", ur: "بہت بڑا مہر بھی واپس نہیں لیا جا سکتا" },
          verseRef: "4:20"
        },
        {
          term: "أَتَأْخُذُونَهُ بُهْتَانًا وَإِثْمًا مُّبِينًا",
          meaning: { en: "Would you take it by slander and clear sin?", ur: "کیا بہتان اور کھلے گناہ سے لو گے؟" },
          explanation: { en: "Taking back mahr = slander + sin", ur: "مہر واپس لینا = بہتان + گناہ" },
          verseRef: "4:20"
        },
        {
          term: "وَكَيْفَ تَأْخُذُونَهُ وَقَدْ أَفْضَىٰ بَعْضُكُمْ إِلَىٰ بَعْضٍ",
          meaning: { en: "How can you take it when you have been intimate?", ur: "کیسے لو گے جبکہ تم ایک دوسرے تک پہنچ چکے ہو؟" },
          explanation: { en: "Intimacy creates bond - can't undo that", ur: "قربت سے رشتہ بنتا ہے - اسے ختم نہیں کیا جا سکتا" },
          verseRef: "4:21"
        },
        {
          term: "وَأَخَذْنَ مِنكُم مِّيثَاقًا غَلِيظًا",
          meaning: { en: "And they took from you a solemn covenant", ur: "اور انہوں نے تم سے پختہ عہد لیا" },
          explanation: { en: "Marriage is mithaq ghaliz - firm covenant", ur: "نکاح میثاق غلیظ ہے - پختہ عہد" },
          verseRef: "4:21"
        }
      ]
    },

    maritalDisputes: {
      name: "Marital Disputes and Resolution",
      nameUr: "ازدواجی تنازعات اور حل",
      nameArabic: "النزاعات الزوجية والحل",
      nameUrdu: "ازدواجی تنازعات اور حل",
      color: "#06B6D4",
      icon: "Scale",
      concepts: [
        {
          term: "الرِّجَالُ قَوَّامُونَ عَلَى النِّسَاءِ",
          meaning: { en: "Men are protectors/maintainers of women", ur: "مرد عورتوں کے نگران ہیں" },
          explanation: { en: "Qawwam - responsibility for protection and provision", ur: "قوام - حفاظت اور نفقہ کی ذمہ داری" },
          verseRef: "4:34"
        },
        {
          term: "بِمَا فَضَّلَ اللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍ",
          meaning: { en: "Because Allah favored some over others", ur: "اس لیے کہ اللہ نے بعض کو بعض پر فضیلت دی" },
          explanation: { en: "Different roles, not superiority - complementary", ur: "مختلف کردار، برتری نہیں - ایک دوسرے کی تکمیل" },
          verseRef: "4:34"
        },
        {
          term: "وَبِمَا أَنفَقُوا مِنْ أَمْوَالِهِمْ",
          meaning: { en: "And because they spend from their wealth", ur: "اور اس لیے کہ انہوں نے اپنے مال سے خرچ کیا" },
          explanation: { en: "Financial responsibility on men", ur: "مالی ذمہ داری مردوں پر ہے" },
          verseRef: "4:34"
        },
        {
          term: "فَالصَّالِحَاتُ قَانِتَاتٌ",
          meaning: { en: "Righteous women are devoutly obedient", ur: "نیک عورتیں اطاعت گزار ہیں" },
          explanation: { en: "Qanitat - devoted, obedient to Allah", ur: "قانتات - اللہ کی فرمانبردار، عبادت گزار" },
          verseRef: "4:34"
        },
        {
          term: "حَافِظَاتٌ لِّلْغَيْبِ بِمَا حَفِظَ اللَّهُ",
          meaning: { en: "Guarding in absence what Allah guards", ur: "غیر حاضری میں حفاظت کرنے والیاں" },
          explanation: { en: "Protecting honor and property when husband absent", ur: "شوہر کی غیر حاضری میں عزت اور مال کی حفاظت" },
          verseRef: "4:34"
        },
        {
          term: "وَاللَّاتِي تَخَافُونَ نُشُوزَهُنَّ",
          meaning: { en: "Those whose rebellion you fear", ur: "جن کی سرکشی کا اندیشہ ہو" },
          explanation: { en: "Nushuz - rebellion, arrogance, violation of duties", ur: "نشوز - سرکشی، تکبر، فرائض کی خلاف ورزی" },
          verseRef: "4:34"
        },
        {
          term: "فَعِظُوهُنَّ",
          meaning: { en: "Advise them", ur: "انہیں نصیحت کرو" },
          explanation: { en: "First step: verbal counsel", ur: "پہلا قدم: زبانی نصیحت" },
          verseRef: "4:34"
        },
        {
          term: "وَاهْجُرُوهُنَّ فِي الْمَضَاجِعِ",
          meaning: { en: "And forsake them in bed", ur: "اور بستروں میں انہیں چھوڑ دو" },
          explanation: { en: "Second step: separate sleeping", ur: "دوسرا قدم: بستر الگ کرنا" },
          verseRef: "4:34"
        },
        {
          term: "وَاضْرِبُوهُنَّ",
          meaning: { en: "And strike them", ur: "اور انہیں مارو" },
          explanation: { en: "Last resort: light, non-injurious - Prophet discouraged", ur: "آخری چارہ: ہلکا، بغیر نقصان - نبی ﷺ نے منع فرمایا" },
          verseRef: "4:34"
        },
        {
          term: "فَإِنْ أَطَعْنَكُمْ فَلَا تَبْغُوا عَلَيْهِنَّ سَبِيلًا",
          meaning: { en: "If they obey, seek no way against them", ur: "اگر مان جائیں تو ان پر زیادتی کی راہ نہ ڈھونڈو" },
          explanation: { en: "Once resolved, no further action", ur: "حل ہو جائے تو مزید کارروائی نہیں" },
          verseRef: "4:34"
        },
        {
          term: "وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا",
          meaning: { en: "If you fear discord between them", ur: "اگر دونوں میں پھوٹ کا اندیشہ ہو" },
          explanation: { en: "When couple can't resolve themselves", ur: "جب میاں بیوی خود حل نہ کر سکیں" },
          verseRef: "4:35"
        },
        {
          term: "فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا",
          meaning: { en: "Send an arbitrator from his family and from hers", ur: "اس کے گھر والوں سے ایک فیصل اور اس کے گھر والوں سے ایک" },
          explanation: { en: "Family arbitration - both sides represented", ur: "خاندانی ثالثی - دونوں فریقین کی نمائندگی" },
          verseRef: "4:35"
        },
        {
          term: "إِن يُرِيدَا إِصْلَاحًا يُوَفِّقِ اللَّهُ بَيْنَهُمَا",
          meaning: { en: "If both desire reconciliation, Allah will cause it", ur: "اگر دونوں اصلاح چاہیں تو اللہ موافقت کرا دے گا" },
          explanation: { en: "Sincere intention + Allah's help = success", ur: "مخلص نیت + اللہ کی مدد = کامیابی" },
          verseRef: "4:35"
        }
      ]
    },

    hypocrites: {
      name: "Hypocrites and Their Traits",
      nameUr: "منافقین اور ان کی صفات",
      nameArabic: "المنافقون وصفاتهم",
      nameUrdu: "منافقین اور ان کی صفات",
      color: "#6B7280",
      icon: "Mask",
      concepts: [
        {
          term: "إِنَّ الْمُنَافِقِينَ يُخَادِعُونَ اللَّهَ",
          meaning: { en: "Hypocrites try to deceive Allah", ur: "منافقین اللہ کو دھوکا دینا چاہتے ہیں" },
          explanation: { en: "Thinking they can fool God", ur: "یہ سوچنا کہ اللہ کو دھوکا دے سکتے ہیں" },
          verseRef: "4:142"
        },
        {
          term: "وَهُوَ خَادِعُهُمْ",
          meaning: { en: "But He deceives them", ur: "حالانکہ وہ انہیں دھوکے میں ڈالنے والا ہے" },
          explanation: { en: "Their deception returns on them", ur: "ان کا دھوکا انہی پر لوٹتا ہے" },
          verseRef: "4:142"
        },
        {
          term: "وَإِذَا قَامُوا إِلَى الصَّلَاةِ قَامُوا كُسَالَىٰ",
          meaning: { en: "When they stand for prayer, they stand lazily", ur: "جب نماز کو کھڑے ہوتے ہیں تو سستی سے" },
          explanation: { en: "Prayer is burden for them", ur: "نماز ان کے لیے بوجھ ہے" },
          verseRef: "4:142"
        },
        {
          term: "يُرَاءُونَ النَّاسَ",
          meaning: { en: "Showing off to people", ur: "لوگوں کو دکھاتے ہیں" },
          explanation: { en: "Riya - praying for human approval", ur: "ریا - لوگوں کی رضا کے لیے نماز پڑھنا" },
          verseRef: "4:142"
        },
        {
          term: "وَلَا يَذْكُرُونَ اللَّهَ إِلَّا قَلِيلًا",
          meaning: { en: "And remember Allah only little", ur: "اور اللہ کو بہت کم یاد کرتے ہیں" },
          explanation: { en: "Minimal dhikr - heart not connected", ur: "بہت کم ذکر - دل جڑا ہوا نہیں" },
          verseRef: "4:142"
        },
        {
          term: "مُّذَبْذَبِينَ بَيْنَ ذَٰلِكَ",
          meaning: { en: "Wavering between this and that", ur: "دونوں کے بیچ ڈولتے ہیں" },
          explanation: { en: "Neither with believers nor disbelievers", ur: "نہ مومنوں کے ساتھ نہ کافروں کے ساتھ" },
          verseRef: "4:143"
        },
        {
          term: "لَا إِلَىٰ هَٰؤُلَاءِ وَلَا إِلَىٰ هَٰؤُلَاءِ",
          meaning: { en: "Neither to these nor to those", ur: "نہ ان کی طرف نہ ان کی طرف" },
          explanation: { en: "No true allegiance to anyone", ur: "کسی سے سچی وفاداری نہیں" },
          verseRef: "4:143"
        },
        {
          term: "الَّذِينَ يَتَرَبَّصُونَ بِكُمْ",
          meaning: { en: "Those who watch and wait", ur: "جو تمہارے ساتھ انتظار کرتے ہیں" },
          explanation: { en: "Waiting to see who wins before committing", ur: "فیصلہ کرنے سے پہلے دیکھتے ہیں کون جیتتا ہے" },
          verseRef: "4:141"
        },
        {
          term: "فَإِن كَانَ لَكُمْ فَتْحٌ مِّنَ اللَّهِ قَالُوا أَلَمْ نَكُن مَّعَكُمْ",
          meaning: { en: "If you have victory, they say: Were we not with you?", ur: "اگر تمہیں فتح ملے تو کہتے ہیں: ہم تمہارے ساتھ نہ تھے؟" },
          explanation: { en: "Claim credit for Muslim victories", ur: "مسلمانوں کی فتح کا سہرا لینا" },
          verseRef: "4:141"
        },
        {
          term: "وَإِن كَانَ لِلْكَافِرِينَ نَصِيبٌ",
          meaning: { en: "If disbelievers have some success", ur: "اگر کافروں کو کچھ حصہ ملے" },
          explanation: { en: "Then they claim they protected disbelievers from Muslims", ur: "پھر دعویٰ کرتے ہیں کہ انہوں نے کافروں کو مسلمانوں سے بچایا" },
          verseRef: "4:141"
        },
        {
          term: "إِنَّ الْمُنَافِقِينَ فِي الدَّرْكِ الْأَسْفَلِ مِنَ النَّارِ",
          meaning: { en: "Hypocrites are in lowest depth of Fire", ur: "منافقین آگ کے سب سے نیچے درجے میں ہوں گے" },
          explanation: { en: "Worse than open disbelievers - deepest Hell", ur: "کھلے کافروں سے بدتر - جہنم کا سب سے نچلا درجہ" },
          verseRef: "4:145"
        }
      ]
    },

    obedienceHierarchy: {
      name: "Obedience and Authority",
      nameUr: "اطاعت اور اختیار",
      nameArabic: "الطاعة والسلطة",
      nameUrdu: "اطاعت اور اختیار",
      color: "#7C3AED",
      icon: "Crown",
      concepts: [
        {
          term: "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ",
          meaning: { en: "Obey Allah, the Messenger, and those in authority", ur: "اللہ کی اطاعت کرو، رسول کی اور اپنے میں سے اولی الامر کی" },
          explanation: { en: "Hierarchy: Allah > Prophet > Muslim authorities", ur: "درجہ بندی: اللہ > نبی > مسلم حکام" },
          verseRef: "4:59"
        },
        {
          term: "فَإِن تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ",
          meaning: { en: "If you disagree, refer to Allah and Messenger", ur: "اگر کسی بات میں اختلاف ہو تو اللہ اور رسول کی طرف لوٹاؤ" },
          explanation: { en: "Quran and Sunnah are final reference", ur: "قرآن اور سنت آخری حوالہ ہیں" },
          verseRef: "4:59"
        },
        {
          term: "مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ",
          meaning: { en: "Whoever obeys the Messenger has obeyed Allah", ur: "جس نے رسول کی اطاعت کی اس نے اللہ کی اطاعت کی" },
          explanation: { en: "Prophet's commands = Allah's commands", ur: "نبی کے احکام = اللہ کے احکام" },
          verseRef: "4:80"
        },
        {
          term: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ",
          meaning: { en: "No, by your Lord, they don't believe", ur: "نہیں! تیرے رب کی قسم، وہ مومن نہیں" },
          explanation: { en: "True faith requires accepting Prophet's judgment", ur: "سچا ایمان نبی کا فیصلہ قبول کرنے کا تقاضا کرتا ہے" },
          verseRef: "4:65"
        },
        {
          term: "حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ",
          meaning: { en: "Until they make you judge in disputes", ur: "جب تک تجھے اپنے جھگڑوں میں فیصل نہ بنائیں" },
          explanation: { en: "Must accept Prophet as arbitrator", ur: "نبی کو حکم ماننا لازم ہے" },
          verseRef: "4:65"
        },
        {
          term: "ثُمَّ لَا يَجِدُوا فِي أَنفُسِهِمْ حَرَجًا",
          meaning: { en: "Then find no discomfort in themselves", ur: "پھر اپنے دلوں میں تنگی نہ پائیں" },
          explanation: { en: "Accept wholeheartedly, not reluctantly", ur: "دل سے قبول کرو، بے دلی سے نہیں" },
          verseRef: "4:65"
        },
        {
          term: "وَيُسَلِّمُوا تَسْلِيمًا",
          meaning: { en: "And submit completely", ur: "اور پوری طرح تسلیم کریں" },
          explanation: { en: "Full submission to Prophet's ruling", ur: "نبی کے فیصلے کے آگے مکمل سرتسلیم" },
          verseRef: "4:65"
        }
      ]
    },

    fightingRules: {
      name: "Fighting in Allah's Cause",
      nameUr: "اللہ کی راہ میں جہاد",
      nameArabic: "القتال في سبيل الله",
      nameUrdu: "اللہ کی راہ میں جہاد",
      color: "#DC2626",
      icon: "Sword",
      concepts: [
        {
          term: "وَمَا لَكُمْ لَا تُقَاتِلُونَ فِي سَبِيلِ اللَّهِ",
          meaning: { en: "Why don't you fight in Allah's cause?", ur: "تمہیں کیا ہوا کہ اللہ کی راہ میں نہیں لڑتے؟" },
          explanation: { en: "Rhetorical question - motivation to fight for oppressed", ur: "بلاغتی سوال - مظلوموں کے لیے لڑنے کی ترغیب" },
          verseRef: "4:75"
        },
        {
          term: "وَالْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ",
          meaning: { en: "And for the oppressed men, women, and children", ur: "اور کمزور مردوں، عورتوں اور بچوں کے لیے" },
          explanation: { en: "Fighting to liberate the oppressed", ur: "مظلوموں کی آزادی کے لیے جنگ" },
          verseRef: "4:75"
        },
        {
          term: "الَّذِينَ يَقُولُونَ رَبَّنَا أَخْرِجْنَا مِنْ هَٰذِهِ الْقَرْيَةِ",
          meaning: { en: "Who say: Our Lord, take us from this town", ur: "جو کہتے ہیں: اے رب! ہمیں اس بستی سے نکال" },
          explanation: { en: "Oppressed Muslims calling for rescue", ur: "مظلوم مسلمان بچاؤ کی پکار لگا رہے ہیں" },
          verseRef: "4:75"
        },
        {
          term: "الَّذِينَ آمَنُوا يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ",
          meaning: { en: "Believers fight in Allah's cause", ur: "مومن اللہ کی راہ میں لڑتے ہیں" },
          explanation: { en: "Believers fight for Allah's sake", ur: "مومن اللہ کی خاطر لڑتے ہیں" },
          verseRef: "4:76"
        },
        {
          term: "وَالَّذِينَ كَفَرُوا يُقَاتِلُونَ فِي سَبِيلِ الطَّاغُوتِ",
          meaning: { en: "Disbelievers fight in cause of taghut", ur: "کافر طاغوت کی راہ میں لڑتے ہیں" },
          explanation: { en: "Fighting for false gods/tyrants", ur: "جھوٹے معبودوں/ظالموں کے لیے لڑنا" },
          verseRef: "4:76"
        },
        {
          term: "فَقَاتِلُوا أَوْلِيَاءَ الشَّيْطَانِ",
          meaning: { en: "So fight the allies of Satan", ur: "پس شیطان کے دوستوں سے لڑو" },
          explanation: { en: "Satan's allies to be opposed", ur: "شیطان کے ساتھیوں کا مقابلہ کرنا" },
          verseRef: "4:76"
        },
        {
          term: "إِنَّ كَيْدَ الشَّيْطَانِ كَانَ ضَعِيفًا",
          meaning: { en: "Satan's plot is ever weak", ur: "بیشک شیطان کی چال کمزور ہے" },
          explanation: { en: "Encouragement - Satan's schemes are fragile", ur: "حوصلہ افزائی - شیطان کی چالیں کمزور ہیں" },
          verseRef: "4:76"
        },
        {
          term: "وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا",
          meaning: { en: "If they incline to peace, incline to it", ur: "اگر وہ صلح کی طرف جھکیں تو تم بھی جھکو" },
          explanation: { en: "Peace preferred when enemy wants it (see 8:61)", ur: "جب دشمن صلح چاہے تو صلح ترجیح ہے (دیکھیں 8:61)" },
          verseRef: "4:90"
        },
        {
          term: "وَمَن يَقْتُلْ مُؤْمِنًا مُّتَعَمِّدًا",
          meaning: { en: "Whoever kills a believer intentionally", ur: "جو مومن کو جان بوجھ کر قتل کرے" },
          explanation: { en: "Deliberate murder of Muslim - severe sin", ur: "مسلمان کا جان بوجھ کر قتل - بڑا گناہ" },
          verseRef: "4:93"
        },
        {
          term: "فَجَزَاؤُهُ جَهَنَّمُ خَالِدًا فِيهَا",
          meaning: { en: "His recompense is Hell, abiding eternally", ur: "اس کی سزا جہنم ہے ہمیشہ رہے گا" },
          explanation: { en: "Eternal Hell for intentional Muslim murder", ur: "مسلمان کے جان بوجھ کر قتل پر دائمی جہنم" },
          verseRef: "4:93"
        }
      ]
    },

    migration: {
      name: "Migration (Hijrah)",
      nameUr: "ہجرت",
      nameArabic: "الهجرة",
      nameUrdu: "ہجرت",
      color: "#0891B2",
      icon: "Plane",
      concepts: [
        {
          term: "إِنَّ الَّذِينَ تَوَفَّاهُمُ الْمَلَائِكَةُ ظَالِمِي أَنفُسِهِمْ",
          meaning: { en: "Those whom angels take while wronging themselves", ur: "جن کی جان فرشتے لیتے ہیں جبکہ وہ اپنے آپ پر ظلم کر رہے ہوں" },
          explanation: { en: "Dying without migrating when able", ur: "ہجرت کی استطاعت ہوتے ہوئے بغیر ہجرت مرنا" },
          verseRef: "4:97"
        },
        {
          term: "قَالُوا فِيمَ كُنتُمْ",
          meaning: { en: "They say: In what condition were you?", ur: "فرشتے کہتے ہیں: تم کس حال میں تھے؟" },
          explanation: { en: "Angels question their state", ur: "فرشتے ان کی حالت پوچھتے ہیں" },
          verseRef: "4:97"
        },
        {
          term: "قَالُوا كُنَّا مُسْتَضْعَفِينَ فِي الْأَرْضِ",
          meaning: { en: "They say: We were oppressed in the land", ur: "وہ کہتے ہیں: ہم زمین میں کمزور تھے" },
          explanation: { en: "Excuse of weakness", ur: "کمزوری کا بہانہ" },
          verseRef: "4:97"
        },
        {
          term: "أَلَمْ تَكُنْ أَرْضُ اللَّهِ وَاسِعَةً فَتُهَاجِرُوا فِيهَا",
          meaning: { en: "Was not Allah's earth spacious to migrate?", ur: "کیا اللہ کی زمین وسیع نہ تھی کہ ہجرت کرتے؟" },
          explanation: { en: "Earth is vast - could have migrated", ur: "زمین وسیع تھی - ہجرت کر سکتے تھے" },
          verseRef: "4:97"
        },
        {
          term: "إِلَّا الْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ",
          meaning: { en: "Except truly weak men, women, children", ur: "مگر جو واقعی کمزور مرد، عورتیں اور بچے" },
          explanation: { en: "Genuine inability excused", ur: "حقیقی مجبوری معذور ہے" },
          verseRef: "4:98"
        },
        {
          term: "لَا يَسْتَطِيعُونَ حِيلَةً وَلَا يَهْتَدُونَ سَبِيلًا",
          meaning: { en: "Cannot devise a plan nor find a way", ur: "نہ کوئی تدبیر کر سکتے ہیں نہ راہ پاتے ہیں" },
          explanation: { en: "Truly unable - no means or knowledge", ur: "واقعی قاصر - نہ وسائل نہ علم" },
          verseRef: "4:98"
        },
        {
          term: "فَأُولَٰئِكَ عَسَى اللَّهُ أَن يَعْفُوَ عَنْهُمْ",
          meaning: { en: "Allah may pardon them", ur: "شاید اللہ انہیں معاف کر دے" },
          explanation: { en: "Hope for genuinely weak", ur: "حقیقی کمزوروں کے لیے امید" },
          verseRef: "4:99"
        },
        {
          term: "وَمَن يُهَاجِرْ فِي سَبِيلِ اللَّهِ",
          meaning: { en: "Whoever migrates in Allah's cause", ur: "جو اللہ کی راہ میں ہجرت کرے" },
          explanation: { en: "Migration for Allah's sake rewarded", ur: "اللہ کی راہ میں ہجرت کا اجر" },
          verseRef: "4:100"
        },
        {
          term: "يَجِدْ فِي الْأَرْضِ مُرَاغَمًا كَثِيرًا وَسَعَةً",
          meaning: { en: "Finds many refuges and abundance", ur: "زمین میں بہت جگہ اور وسعت پائے گا" },
          explanation: { en: "Allah provides for migrants", ur: "اللہ ہجرت کرنے والوں کو دیتا ہے" },
          verseRef: "4:100"
        }
      ]
    },

    prayerInDanger: {
      name: "Prayer in Times of Danger",
      nameUr: "خوف کی نماز",
      nameArabic: "صلاة الخوف",
      nameUrdu: "خوف کی نماز",
      color: "#F59E0B",
      icon: "Shield",
      concepts: [
        {
          term: "وَإِذَا كُنتَ فِيهِمْ فَأَقَمْتَ لَهُمُ الصَّلَاةَ",
          meaning: { en: "When you are with them and lead prayer", ur: "جب تو ان میں ہو اور نماز قائم کرائے" },
          explanation: { en: "Instructions for prayer during battle", ur: "جنگ کے دوران نماز کی ہدایات" },
          verseRef: "4:102"
        },
        {
          term: "فَلْتَقُمْ طَائِفَةٌ مِّنْهُم مَّعَكَ",
          meaning: { en: "Let a group stand with you", ur: "ایک جماعت تیرے ساتھ کھڑی ہو" },
          explanation: { en: "One group prays, other guards", ur: "ایک جماعت نماز پڑھے، دوسری پہرہ دے" },
          verseRef: "4:102"
        },
        {
          term: "وَلْيَأْخُذُوا أَسْلِحَتَهُمْ",
          meaning: { en: "And let them take their weapons", ur: "اور اپنے ہتھیار اٹھائے رہیں" },
          explanation: { en: "Armed even during prayer", ur: "نماز کے دوران بھی مسلح" },
          verseRef: "4:102"
        },
        {
          term: "وَدَّ الَّذِينَ كَفَرُوا لَوْ تَغْفُلُونَ عَنْ أَسْلِحَتِكُمْ",
          meaning: { en: "Disbelievers wish you would neglect weapons", ur: "کافر چاہتے ہیں کہ تم اپنے ہتھیاروں سے غافل ہو جاؤ" },
          explanation: { en: "Enemy hopes for Muslims' carelessness", ur: "دشمن مسلمانوں کی غفلت کی امید رکھتا ہے" },
          verseRef: "4:102"
        },
        {
          term: "فَيَمِيلُونَ عَلَيْكُم مَّيْلَةً وَاحِدَةً",
          meaning: { en: "To assault you at once", ur: "پھر تم پر یکدم حملہ کریں" },
          explanation: { en: "Enemy waiting for chance to attack", ur: "دشمن حملے کے موقع کی تاک میں" },
          verseRef: "4:102"
        },
        {
          term: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",
          meaning: { en: "Prayer is prescribed for believers at fixed times", ur: "نماز مومنوں پر مقررہ وقت پر فرض ہے" },
          explanation: { en: "Prayer timing is obligatory - can't skip", ur: "نماز کے اوقات فرض ہیں - چھوڑ نہیں سکتے" },
          verseRef: "4:103"
        },
        {
          term: "فَإِذَا اطْمَأْنَنتُمْ فَأَقِيمُوا الصَّلَاةَ",
          meaning: { en: "When you are secure, establish prayer (normally)", ur: "جب اطمینان ہو تو نماز پوری پڑھو" },
          explanation: { en: "Full prayer when danger passes", ur: "خطرہ ٹلنے پر پوری نماز پڑھو" },
          verseRef: "4:103"
        }
      ]
    },

    justice: {
      name: "Justice and Fair Dealing",
      nameUr: "عدل اور انصاف",
      nameArabic: "العدل والإنصاف",
      nameUrdu: "عدل اور انصاف",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        {
          term: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
          meaning: { en: "Allah commands you to return trusts", ur: "اللہ تمہیں حکم دیتا ہے کہ امانتیں مالکوں کو لوٹاؤ" },
          explanation: { en: "Amanah - all trusts must be returned to owners", ur: "امانت - تمام امانتیں مالکوں کو لوٹانی ہیں" },
          verseRef: "4:58"
        },
        {
          term: "وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ",
          meaning: { en: "When judging between people, judge with justice", ur: "جب لوگوں کے درمیان فیصلہ کرو تو انصاف سے کرو" },
          explanation: { en: "Justice mandatory in all judgments", ur: "تمام فیصلوں میں انصاف لازمی ہے" },
          verseRef: "4:58"
        },
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ",
          meaning: { en: "O believers, be upholders of justice", ur: "اے ایمان والو! انصاف پر قائم رہو" },
          explanation: { en: "Actively establish justice", ur: "فعال طور پر انصاف قائم کرو" },
          verseRef: "4:135"
        },
        {
          term: "شُهَدَاءَ لِلَّهِ وَلَوْ عَلَىٰ أَنفُسِكُمْ",
          meaning: { en: "Witnesses for Allah, even against yourselves", ur: "اللہ کے لیے گواہ بنو چاہے اپنے خلاف ہو" },
          explanation: { en: "Testify truth even against yourself", ur: "اپنے خلاف بھی سچ کی گواہی دو" },
          verseRef: "4:135"
        },
        {
          term: "أَوِ الْوَالِدَيْنِ وَالْأَقْرَبِينَ",
          meaning: { en: "Or parents and relatives", ur: "یا والدین اور رشتہ داروں کے خلاف" },
          explanation: { en: "Justice even against family", ur: "خاندان کے خلاف بھی انصاف" },
          verseRef: "4:135"
        },
        {
          term: "إِن يَكُنْ غَنِيًّا أَوْ فَقِيرًا",
          meaning: { en: "Whether rich or poor", ur: "چاہے امیر ہو یا غریب" },
          explanation: { en: "Justice regardless of wealth status", ur: "دولت کی حیثیت سے قطع نظر انصاف" },
          verseRef: "4:135"
        },
        {
          term: "فَاللَّهُ أَوْلَىٰ بِهِمَا",
          meaning: { en: "Allah is closer to both", ur: "اللہ ان دونوں کا زیادہ خیرخواہ ہے" },
          explanation: { en: "Allah knows best - don't show favoritism", ur: "اللہ بہتر جانتا ہے - جانبداری نہ کرو" },
          verseRef: "4:135"
        },
        {
          term: "فَلَا تَتَّبِعُوا الْهَوَىٰ أَن تَعْدِلُوا",
          meaning: { en: "Don't follow desire instead of being just", ur: "خواہش کی پیروی نہ کرو کہ انصاف نہ کرو" },
          explanation: { en: "Desire shouldn't compromise justice", ur: "خواہش سے انصاف متاثر نہ ہو" },
          verseRef: "4:135"
        }
      ]
    },

    peopleOfBook: {
      name: "People of the Book",
      nameUr: "اہلِ کتاب",
      nameArabic: "أهل الكتاب",
      nameUrdu: "اہل کتاب",
      color: "#6366F1",
      icon: "Book",
      concepts: [
        {
          term: "يَسْأَلُكَ أَهْلُ الْكِتَابِ أَن تُنَزِّلَ عَلَيْهِمْ كِتَابًا مِّنَ السَّمَاءِ",
          meaning: { en: "People of Book ask you to bring down a book from heaven", ur: "اہل کتاب تجھ سے مانگتے ہیں کہ آسمان سے کتاب اتار" },
          explanation: { en: "They demanded physical book from sky", ur: "انہوں نے آسمان سے مادی کتاب مانگی" },
          verseRef: "4:153"
        },
        {
          term: "فَقَدْ سَأَلُوا مُوسَىٰ أَكْبَرَ مِن ذَٰلِكَ",
          meaning: { en: "They asked Moses for even greater", ur: "انہوں نے موسیٰ سے اس سے بڑی بات مانگی" },
          explanation: { en: "Asked to see Allah directly", ur: "اللہ کو براہ راست دیکھنے کا مطالبہ کیا" },
          verseRef: "4:153"
        },
        {
          term: "فَقَالُوا أَرِنَا اللَّهَ جَهْرَةً",
          meaning: { en: "They said: Show us Allah openly", ur: "کہا: ہمیں اللہ کھلم کھلا دکھاؤ" },
          explanation: { en: "Demanded to see God with eyes", ur: "خدا کو آنکھوں سے دیکھنے کا مطالبہ" },
          verseRef: "4:153"
        },
        {
          term: "فَأَخَذَتْهُمُ الصَّاعِقَةُ بِظُلْمِهِمْ",
          meaning: { en: "Thunderbolt seized them for their wrongdoing", ur: "بجلی نے ان کے ظلم کی وجہ سے پکڑ لیا" },
          explanation: { en: "Punished for their arrogance", ur: "ان کے تکبر پر سزا دی گئی" },
          verseRef: "4:153"
        },
        {
          term: "ثُمَّ اتَّخَذُوا الْعِجْلَ",
          meaning: { en: "Then they took the calf (for worship)", ur: "پھر انہوں نے بچھڑے کو (معبود) بنایا" },
          explanation: { en: "Golden calf worship despite signs", ur: "نشانیوں کے باوجود سونے کے بچھڑے کی پوجا" },
          verseRef: "4:153"
        },
        {
          term: "وَبِكُفْرِهِمْ وَقَوْلِهِمْ عَلَىٰ مَرْيَمَ بُهْتَانًا عَظِيمًا",
          meaning: { en: "And for their disbelief and saying against Mary a great slander", ur: "ان کے کفر اور مریم پر بڑے بہتان کی وجہ سے" },
          explanation: { en: "Slandering Maryam's honor", ur: "مریم کی عزت پر بہتان" },
          verseRef: "4:156"
        },
        {
          term: "وَقَوْلِهِمْ إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ",
          meaning: { en: "And their saying: We killed the Messiah, Jesus son of Mary", ur: "اور یہ کہنا کہ ہم نے مسیح عیسیٰ ابن مریم کو قتل کیا" },
          explanation: { en: "False claim of killing Jesus", ur: "عیسیٰ کے قتل کا جھوٹا دعویٰ" },
          verseRef: "4:157"
        },
        {
          term: "وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ",
          meaning: { en: "They didn't kill him or crucify him, but it appeared so", ur: "انہوں نے نہ مارا نہ سولی دی بلکہ ان کو شبہ ہوا" },
          explanation: { en: "Jesus not killed - made to appear so", ur: "عیسیٰ قتل نہیں ہوئے - شبہ ڈالا گیا" },
          verseRef: "4:157"
        },
        {
          term: "بَل رَّفَعَهُ اللَّهُ إِلَيْهِ",
          meaning: { en: "Rather, Allah raised him to Himself", ur: "بلکہ اللہ نے اسے اپنی طرف اٹھا لیا" },
          explanation: { en: "Jesus raised to Allah alive", ur: "عیسیٰ زندہ اللہ کی طرف اٹھائے گئے" },
          verseRef: "4:158"
        }
      ]
    },

    shirk: {
      name: "Shirk and Forgiveness",
      nameUr: "شرک اور مغفرت",
      nameArabic: "الشرك والمغفرة",
      nameUrdu: "شرک اور مغفرت",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        {
          term: "إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ",
          meaning: { en: "Allah doesn't forgive associating partners with Him", ur: "اللہ اپنے ساتھ شرک کو نہیں بخشتا" },
          explanation: { en: "Shirk - unforgivable if died upon", ur: "شرک - اگر اسی حال میں مرے تو نابخشودنیہ" },
          verseRef: "4:48, 4:116"
        },
        {
          term: "وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ",
          meaning: { en: "But forgives what is less for whom He wills", ur: "اس کے علاوہ جسے چاہے بخش دے" },
          explanation: { en: "All other sins potentially forgivable", ur: "باقی تمام گناہ بخشے جا سکتے ہیں" },
          verseRef: "4:48, 4:116"
        },
        {
          term: "وَمَن يُشْرِكْ بِاللَّهِ فَقَدِ افْتَرَىٰ إِثْمًا عَظِيمًا",
          meaning: { en: "Whoever associates - has fabricated great sin", ur: "جس نے شرک کیا اس نے بڑا گناہ گھڑا" },
          explanation: { en: "Shirk = inventing lies against Allah", ur: "شرک = اللہ پر جھوٹ باندھنا" },
          verseRef: "4:48"
        },
        {
          term: "وَمَن يُشْرِكْ بِاللَّهِ فَقَدْ ضَلَّ ضَلَالًا بَعِيدًا",
          meaning: { en: "Whoever associates has strayed far astray", ur: "جس نے شرک کیا وہ دور کی گمراہی میں گیا" },
          explanation: { en: "Shirk = ultimate misguidance", ur: "شرک = انتہائی گمراہی" },
          verseRef: "4:116"
        },
        {
          term: "إِن يَدْعُونَ مِن دُونِهِ إِلَّا إِنَاثًا",
          meaning: { en: "They invoke besides Him only females", ur: "وہ اس کے سوا صرف عورتوں کو پکارتے ہیں" },
          explanation: { en: "Pagans worshipped female deities", ur: "مشرکین مادہ دیویوں کی پوجا کرتے تھے" },
          verseRef: "4:117"
        },
        {
          term: "وَإِن يَدْعُونَ إِلَّا شَيْطَانًا مَّرِيدًا",
          meaning: { en: "They invoke only a rebellious Satan", ur: "اور صرف سرکش شیطان کو پکارتے ہیں" },
          explanation: { en: "Idol worship = Satan worship", ur: "بت پرستی = شیطان کی پوجا" },
          verseRef: "4:117"
        }
      ]
    },

    tawbah: {
      name: "Repentance and Forgiveness",
      nameUr: "توبہ اور بخشش",
      nameArabic: "التوبة والمغفرة",
      nameUrdu: "توبہ اور بخشش",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        {
          term: "إِنَّمَا التَّوْبَةُ عَلَى اللَّهِ لِلَّذِينَ يَعْمَلُونَ السُّوءَ بِجَهَالَةٍ",
          meaning: { en: "Repentance accepted for those who do wrong in ignorance", ur: "توبہ اللہ پر ان کے لیے ہے جو جہالت سے برائی کریں" },
          explanation: { en: "Sins done without knowledge - repentance accepted", ur: "لاعلمی میں کیے گئے گناہ - توبہ قبول ہوتی ہے" },
          verseRef: "4:17"
        },
        {
          term: "ثُمَّ يَتُوبُونَ مِن قَرِيبٍ",
          meaning: { en: "Then repent soon after", ur: "پھر جلد توبہ کریں" },
          explanation: { en: "Repent quickly - don't delay", ur: "جلدی توبہ کرو - تاخیر نہ کرو" },
          verseRef: "4:17"
        },
        {
          term: "فَأُولَٰئِكَ يَتُوبُ اللَّهُ عَلَيْهِمْ",
          meaning: { en: "Allah accepts their repentance", ur: "یہ ہیں جن کی توبہ اللہ قبول کرتا ہے" },
          explanation: { en: "Allah turns in mercy to such people", ur: "اللہ ایسے لوگوں پر رحمت سے توجہ فرماتا ہے" },
          verseRef: "4:17"
        },
        {
          term: "وَلَيْسَتِ التَّوْبَةُ لِلَّذِينَ يَعْمَلُونَ السَّيِّئَاتِ",
          meaning: { en: "Repentance not for those who do evil", ur: "ان کے لیے توبہ نہیں جو برائیاں کرتے رہیں" },
          explanation: { en: "Deathbed repentance after lifelong sin", ur: "عمر بھر گناہ کے بعد موت کے وقت کی توبہ" },
          verseRef: "4:18"
        },
        {
          term: "حَتَّىٰ إِذَا حَضَرَ أَحَدَهُمُ الْمَوْتُ قَالَ إِنِّي تُبْتُ الْآنَ",
          meaning: { en: "Until death comes and says: Now I repent", ur: "یہاں تک کہ موت آئے تو کہے: اب میں توبہ کرتا ہوں" },
          explanation: { en: "Too late when death is imminent", ur: "موت سامنے ہو تو بہت دیر ہو چکی" },
          verseRef: "4:18"
        },
        {
          term: "وَلَا الَّذِينَ يَمُوتُونَ وَهُمْ كُفَّارٌ",
          meaning: { en: "Nor those who die as disbelievers", ur: "نہ ان کے لیے جو کفر پر مریں" },
          explanation: { en: "No repentance after death", ur: "موت کے بعد کوئی توبہ نہیں" },
          verseRef: "4:18"
        }
      ]
    },

    prophethood: {
      name: "Prophethood and Messengers",
      nameUr: "نبوت اور رسالت",
      nameArabic: "النبوة والرسل",
      nameUrdu: "نبوت اور رسالت",
      color: "#A855F7",
      icon: "Star",
      concepts: [
        {
          term: "إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا أَوْحَيْنَا إِلَىٰ نُوحٍ",
          meaning: { en: "We revealed to you as We revealed to Nuh", ur: "ہم نے تیری طرف وحی کی جیسے نوح کی طرف کی" },
          explanation: { en: "Same mode of revelation to all prophets", ur: "تمام انبیاء کو ایک ہی طرح کی وحی" },
          verseRef: "4:163"
        },
        {
          term: "وَالنَّبِيِّينَ مِن بَعْدِهِ",
          meaning: { en: "And prophets after him", ur: "اور ان کے بعد نبیوں کی طرف" },
          explanation: { en: "Chain of prophets continued", ur: "انبیاء کا سلسلہ جاری رہا" },
          verseRef: "4:163"
        },
        {
          term: "وَأَوْحَيْنَا إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ وَيَعْقُوبَ",
          meaning: { en: "We revealed to Ibrahim, Ismail, Ishaq, Yaqub", ur: "ابراہیم، اسماعیل، اسحاق، یعقوب کی طرف وحی کی" },
          explanation: { en: "Patriarchs all received revelation", ur: "تمام بزرگ انبیاء کو وحی ملی" },
          verseRef: "4:163"
        },
        {
          term: "وَالْأَسْبَاطِ وَعِيسَىٰ وَأَيُّوبَ وَيُونُسَ وَهَارُونَ وَسُلَيْمَانَ",
          meaning: { en: "And the tribes, Jesus, Job, Jonah, Aaron, Solomon", ur: "اور اسباط، عیسیٰ، ایوب، یونس، ہارون، سلیمان" },
          explanation: { en: "Wide range of prophets named", ur: "بہت سے انبیاء کے نام لیے گئے" },
          verseRef: "4:163"
        },
        {
          term: "وَآتَيْنَا دَاوُودَ زَبُورًا",
          meaning: { en: "We gave David the Zabur (Psalms)", ur: "اور داؤد کو زبور دی" },
          explanation: { en: "Dawud received scripture", ur: "داؤد کو صحیفہ ملا" },
          verseRef: "4:163"
        },
        {
          term: "رُّسُلًا قَدْ قَصَصْنَاهُمْ عَلَيْكَ مِن قَبْلُ",
          meaning: { en: "Messengers We told you about before", ur: "رسول جن کا ذکر پہلے کر چکے" },
          explanation: { en: "Some prophets named in earlier surahs", ur: "بعض انبیاء کا ذکر پہلی سورتوں میں ہو چکا" },
          verseRef: "4:164"
        },
        {
          term: "وَرُسُلًا لَّمْ نَقْصُصْهُمْ عَلَيْكَ",
          meaning: { en: "And messengers We haven't told you about", ur: "اور رسول جن کا ذکر نہیں کیا" },
          explanation: { en: "Many more prophets unnamed", ur: "بہت سے اور انبیاء جن کے نام نہیں بتائے گئے" },
          verseRef: "4:164"
        },
        {
          term: "وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا",
          meaning: { en: "And Allah spoke to Musa directly", ur: "اور اللہ نے موسیٰ سے کلام کیا کلام" },
          explanation: { en: "Musa's unique honor - direct speech", ur: "موسیٰ کا منفرد اعزاز - براہ راست کلام" },
          verseRef: "4:164"
        },
        {
          term: "رُّسُلًا مُّبَشِّرِينَ وَمُنذِرِينَ",
          meaning: { en: "Messengers giving good news and warning", ur: "رسول خوشخبری دینے والے اور ڈرانے والے" },
          explanation: { en: "Dual role: hope and warning", ur: "دوہرا کردار: خوشخبری اور تنبیہ" },
          verseRef: "4:165"
        },
        {
          term: "لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى اللَّهِ حُجَّةٌ بَعْدَ الرُّسُلِ",
          meaning: { en: "So people have no argument against Allah after messengers", ur: "تاکہ رسولوں کے بعد لوگوں کو اللہ پر حجت نہ رہے" },
          explanation: { en: "Prophets remove excuse of ignorance", ur: "انبیاء جہالت کا بہانہ ختم کر دیتے ہیں" },
          verseRef: "4:165"
        }
      ]
    },

    kalalahFinal: {
      name: "Final Inheritance Ruling (Kalalah)",
      nameUr: "کلالہ کا آخری حکم",
      nameArabic: "حكم الكلالة الختامي",
      nameUrdu: "کلالہ کا آخری حکم",
      color: "#0D9488",
      icon: "FileText",
      concepts: [
        {
          term: "يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلَالَةِ",
          meaning: { en: "They ask you for ruling. Say: Allah gives you fatwa about kalalah", ur: "تجھ سے فتویٰ پوچھتے ہیں۔ کہو: اللہ کلالہ کے بارے میں فتویٰ دیتا ہے" },
          explanation: { en: "Final verse revealed - completes inheritance law", ur: "آخری نازل ہونے والی آیت - وراثت کا قانون مکمل کرتی ہے" },
          verseRef: "4:176"
        },
        {
          term: "إِنِ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ",
          meaning: { en: "If a man dies without a child", ur: "اگر کوئی مرے جس کی اولاد نہ ہو" },
          explanation: { en: "Person with no direct descendants", ur: "جس کی براہ راست اولاد نہ ہو" },
          verseRef: "4:176"
        },
        {
          term: "وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ",
          meaning: { en: "And he has a sister, she gets half", ur: "اور اس کی ایک بہن ہو تو اسے آدھا" },
          explanation: { en: "Single full/paternal sister gets 1/2", ur: "ایک سگی/باپ شریک بہن کو 1/2" },
          verseRef: "4:176"
        },
        {
          term: "وَهُوَ يَرِثُهَا إِن لَّمْ يَكُن لَّهَا وَلَدٌ",
          meaning: { en: "And he inherits her if she has no child", ur: "اور وہ اس کا وارث ہوگا اگر اس کی اولاد نہ ہو" },
          explanation: { en: "Brother inherits all from childless sister", ur: "بھائی بے اولاد بہن سے سب وراثت پاتا ہے" },
          verseRef: "4:176"
        },
        {
          term: "فَإِن كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ",
          meaning: { en: "If two sisters, they get two-thirds", ur: "اگر دو بہنیں ہوں تو انہیں دو تہائی" },
          explanation: { en: "Two or more sisters share 2/3", ur: "دو یا زیادہ بہنیں 2/3 میں شریک" },
          verseRef: "4:176"
        },
        {
          term: "وَإِن كَانُوا إِخْوَةً رِّجَالًا وَنِسَاءً",
          meaning: { en: "If brothers and sisters, men and women", ur: "اگر بہن بھائی مرد و عورت ہوں" },
          explanation: { en: "Mixed siblings - male gets double female share", ur: "مخلوط بہن بھائی - مرد کو عورت سے دوگنا" },
          verseRef: "4:176"
        },
        {
          term: "فَلِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ",
          meaning: { en: "Male gets share of two females", ur: "مرد کو دو عورتوں کے برابر" },
          explanation: { en: "2:1 ratio applies", ur: "2:1 کا تناسب لاگو" },
          verseRef: "4:176"
        },
        {
          term: "يُبَيِّنُ اللَّهُ لَكُمْ أَن تَضِلُّوا",
          meaning: { en: "Allah clarifies so you don't go astray", ur: "اللہ تمہیں بتاتا ہے تاکہ گمراہ نہ ہو" },
          explanation: { en: "Divine clarity prevents error", ur: "الٰہی وضاحت غلطی سے بچاتی ہے" },
          verseRef: "4:176"
        },
        {
          term: "وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
          meaning: { en: "Allah knows everything", ur: "اور اللہ ہر چیز جاننے والا ہے" },
          explanation: { en: "Closing - Allah's perfect knowledge", ur: "اختتام - اللہ کا مکمل علم" },
          verseRef: "4:176"
        }
      ]
    }
  },

  relationships: [
    { from: "خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ", to: "وَالْأَرْحَامَ", type: "foundation", description: { en: "Single origin establishes kinship obligations", ur: "واحد اصل سے رشتوں کی ذمہ داریاں قائم ہوتی ہیں" } },
    { from: "وَآتُوا الْيَتَامَىٰ أَمْوَالَهُمْ", to: "إِنَّمَا يَأْكُلُونَ نَارًا", type: "consequence", description: { en: "Stealing orphan wealth leads to hellfire", ur: "یتیم کا مال چرانا جہنم کی آگ کی طرف لے جاتا ہے" } },
    { from: "لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ", to: "الرِّجَالُ قَوَّامُونَ", type: "explanation", description: { en: "Greater share due to financial responsibility", ur: "مالی ذمہ داری کی وجہ سے زیادہ حصہ" } },
    { from: "فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً", to: "وَلَن تَسْتَطِيعُوا أَن تَعْدِلُوا", type: "elaboration", description: { en: "Justice requirement explained - perfect equality impossible", ur: "عدل کی شرط بیان کی - مکمل مساوات ناممکن" } },
    { from: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ", to: "وَأَخَذْنَ مِنكُم مِّيثَاقًا غَلِيظًا", type: "foundation", description: { en: "Kind treatment based on solemn covenant", ur: "پختہ عہد پر مبنی اچھا سلوک" } },
    { from: "أَطِيعُوا اللَّهَ", to: "مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ", type: "equivalence", description: { en: "Obeying Prophet equals obeying Allah", ur: "نبی کی اطاعت اللہ کی اطاعت کے برابر ہے" } },
    { from: "إِنَّ الْمُنَافِقِينَ يُخَادِعُونَ", to: "فِي الدَّرْكِ الْأَسْفَلِ مِنَ النَّارِ", type: "consequence", description: { en: "Hypocrisy leads to lowest Hell", ur: "نفاق جہنم کے سب سے نچلے درجے کی طرف لے جاتا ہے" } },
    { from: "لَا يَغْفِرُ أَن يُشْرَكَ بِهِ", to: "وَيَغْفِرُ مَا دُونَ ذَٰلِكَ", type: "contrast", description: { en: "Shirk unforgivable vs other sins forgivable", ur: "شرک نابخشودنیہ بمقابلہ دیگر گناہ بخشے جا سکتے ہیں" } },
    { from: "إِنَّمَا التَّوْبَةُ", to: "وَلَيْسَتِ التَّوْبَةُ", type: "contrast", description: { en: "Accepted repentance vs rejected deathbed repentance", ur: "قبول شدہ توبہ بمقابلہ مسترد موت کے وقت کی توبہ" } },
    { from: "وَمَا قَتَلُوهُ", to: "بَل رَّفَعَهُ اللَّهُ", type: "correction", description: { en: "Jesus not killed but raised", ur: "عیسیٰ قتل نہیں ہوئے بلکہ اٹھائے گئے" } },
    { from: "يَسْتَفْتُونَكَ", to: "يُبَيِّنُ اللَّهُ لَكُمْ", type: "fulfillment", description: { en: "Question answered with divine clarity", ur: "سوال کا الٰہی وضاحت سے جواب" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Human Unity", verses: "4:1", description: { en: "All humanity from single soul - foundation of equality", ur: "تمام انسانیت ایک جان سے - مساوات کی بنیاد" } },
      { stage: 2, theme: "Orphan Rights", verses: "4:2-10", description: { en: "Protecting orphans and their wealth", ur: "یتیموں اور ان کے مال کی حفاظت" } },
      { stage: 3, theme: "Inheritance Laws", verses: "4:11-14", description: { en: "Detailed shares for heirs - Allah's limits", ur: "وارثوں کے تفصیلی حصے - اللہ کی حدود" } },
      { stage: 4, theme: "Sin and Repentance", verses: "4:15-18", description: { en: "Punishment for fahishah, repentance conditions", ur: "فاحشہ کی سزا، توبہ کی شرائط" } },
      { stage: 5, theme: "Women's Treatment", verses: "4:19-21", description: { en: "Live with wives honorably, don't take mahr", ur: "بیویوں کے ساتھ عزت سے رہو، مہر واپس نہ لو" } },
      { stage: 6, theme: "Prohibited Relations", verses: "4:22-24", description: { en: "Forbidden marriage categories", ur: "حرام رشتوں کی اقسام" } },
      { stage: 7, theme: "Marriage Guidelines", verses: "4:25-28", description: { en: "Marrying slave women if unable to marry free", ur: "آزاد سے نکاح نہ کر سکو تو لونڈیوں سے نکاح" } },
      { stage: 8, theme: "Consuming Wealth", verses: "4:29-33", description: { en: "Don't consume wealth unjustly", ur: "مال ناحق نہ کھاؤ" } },
      { stage: 9, theme: "Marital Disputes", verses: "4:34-35", description: { en: "Handling marital discord and arbitration", ur: "ازدواجی ناچاقی اور ثالثی کا انتظام" } },
      { stage: 10, theme: "Worship and Kindness", verses: "4:36-42", description: { en: "Worship Allah, be kind to all, avoid miserliness", ur: "اللہ کی عبادت، سب سے اچھا سلوک، بخل سے بچو" } },
      { stage: 11, theme: "Purity and Prayer", verses: "4:43-46", description: { en: "Conditions for prayer, tahara", ur: "نماز کی شرائط، طہارت" } },
      { stage: 12, theme: "Shirk Warning", verses: "4:47-57", description: { en: "Shirk unforgivable, rewards for believers", ur: "شرک نابخشودنیہ، مومنوں کے اجر" } },
      { stage: 13, theme: "Justice and Authority", verses: "4:58-70", description: { en: "Trust, justice, obeying authorities, hypocrisy", ur: "امانت، عدل، حکام کی اطاعت، نفاق" } },
      { stage: 14, theme: "Fighting", verses: "4:71-76", description: { en: "Fighting in Allah's cause vs taghut", ur: "اللہ کی راہ میں جہاد بمقابلہ طاغوت" } },
      { stage: 15, theme: "Death and Caution", verses: "4:77-84", description: { en: "Death inevitable, Prophet's mission", ur: "موت ناگزیر، نبی کا مشن" } },
      { stage: 16, theme: "Intercession", verses: "4:85-91", description: { en: "Good and bad intercession, relations with others", ur: "اچھی اور بری سفارش، دوسروں سے تعلقات" } },
      { stage: 17, theme: "Murder Rulings", verses: "4:92-96", description: { en: "Accidental vs intentional killing", ur: "غلطی سے بمقابلہ جان بوجھ کر قتل" } },
      { stage: 18, theme: "Migration", verses: "4:97-100", description: { en: "Obligation to migrate when possible", ur: "ہجرت کی فرضیت جب ممکن ہو" } },
      { stage: 19, theme: "Prayer in Danger", verses: "4:101-104", description: { en: "Shortened and fear prayer", ur: "قصر اور خوف کی نماز" } },
      { stage: 20, theme: "Justice in Disputes", verses: "4:105-115", description: { en: "Don't defend betrayers, seeking forgiveness", ur: "خائنوں کا دفاع نہ کرو، مغفرت مانگو" } },
      { stage: 21, theme: "Shirk and Satan", verses: "4:116-126", description: { en: "Shirk warning, Satan's promises", ur: "شرک کی تنبیہ، شیطان کے وعدے" } },
      { stage: 22, theme: "Women's Justice", verses: "4:127-134", description: { en: "Justice for orphan women, wives", ur: "یتیم عورتوں اور بیویوں کے ساتھ انصاف" } },
      { stage: 23, theme: "Faith Requirements", verses: "4:135-140", description: { en: "Justice even against self, don't sit with mockers", ur: "اپنے خلاف بھی انصاف، مذاق اڑانے والوں کے ساتھ نہ بیٹھو" } },
      { stage: 24, theme: "Hypocrites", verses: "4:141-147", description: { en: "Traits of hypocrites, their fate", ur: "منافقین کی صفات، ان کا انجام" } },
      { stage: 25, theme: "Speech and Gratitude", verses: "4:148-152", description: { en: "Good speech, belief in all prophets", ur: "اچھی بات، تمام انبیاء پر ایمان" } },
      { stage: 26, theme: "People of Book", verses: "4:153-162", description: { en: "Their demands, Jesus's story", ur: "ان کے مطالبات، عیسیٰ کا واقعہ" } },
      { stage: 27, theme: "Prophets", verses: "4:163-166", description: { en: "Chain of prophets, revelation", ur: "انبیاء کا سلسلہ، وحی" } },
      { stage: 28, theme: "Jesus Clarified", verses: "4:167-175", description: { en: "Jesus as messenger, trinity rejected", ur: "عیسیٰ بحیثیت رسول، تثلیث مسترد" } },
      { stage: 29, theme: "Final Inheritance", verses: "4:176", description: { en: "Kalalah ruling - surah conclusion", ur: "کلالہ کا حکم - سورت کا اختتام" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Respect kinship ties", ur: "رشتہ داری کا احترام" }, how: { en: "Maintain family relationships, help relatives", ur: "خاندانی تعلقات قائم رکھو، رشتہ داروں کی مدد کرو" }, verse: "4:1" },
      { principle: { en: "Protect orphan wealth", ur: "یتیم کے مال کی حفاظت" }, how: { en: "Don't mix their property with yours, don't consume wastefully", ur: "ان کا مال اپنے سے نہ ملاؤ، فضول خرچ نہ کرو" }, verse: "4:2-6" },
      { principle: { en: "Follow inheritance law", ur: "وراثت کے قانون پر عمل" }, how: { en: "Divide estates according to fixed shares, pay debts first", ur: "مقرر حصوں کے مطابق ترکہ تقسیم، پہلے قرضے ادا" }, verse: "4:11-12" },
      { principle: { en: "Treat wives kindly", ur: "بیویوں سے اچھا سلوک" }, how: { en: "Ma'ruf - good treatment as norm, don't take back mahr", ur: "معروف - اچھا سلوک معمول، مہر واپس نہ لو" }, verse: "4:19" },
      { principle: { en: "Avoid prohibited marriages", ur: "حرام رشتوں سے بچو" }, how: { en: "Know the list, include milk relations", ur: "فہرست جانو، رضاعی رشتے شامل کرو" }, verse: "4:23" },
      { principle: { en: "Resolve disputes properly", ur: "تنازعات کو صحیح طرح حل کرو" }, how: { en: "Advice, then separation, then arbitration - escalate gradually", ur: "نصیحت، پھر علیحدگی، پھر ثالثی - آہستہ آہستہ بڑھاؤ" }, verse: "4:34-35" },
      { principle: { en: "Obey authorities", ur: "حکام کی اطاعت" }, how: { en: "Follow Muslim leaders unless they command sin", ur: "مسلم حکام کی اطاعت مگر جب گناہ کا حکم دیں تو نہیں" }, verse: "4:59" },
      { principle: { en: "Testify truthfully", ur: "سچی گواہی دو" }, how: { en: "Even against yourself and family", ur: "اپنے اور خاندان کے خلاف بھی" }, verse: "4:135" },
      { principle: { en: "Repent quickly", ur: "جلد توبہ کرو" }, how: { en: "Don't delay - deathbed repentance not accepted", ur: "تاخیر نہ کرو - موت کے وقت کی توبہ قبول نہیں" }, verse: "4:17-18" },
      { principle: { en: "Migrate if needed", ur: "ضرورت ہو تو ہجرت کرو" }, how: { en: "Leave oppression when able, Allah's earth is vast", ur: "ظلم سے نکلو جب سکو، اللہ کی زمین وسیع ہے" }, verse: "4:97-100" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Social Justice", ur: "سماجی انصاف کی سورت" },
    insight: { en: "An-Nisa is the Quran's foundational text on social justice, particularly for the vulnerable: women, orphans, and the weak. It opens by reminding us that all humanity came from a single soul - establishing the basis for human equality. The surah then systematically addresses those who were most exploited in pre-Islamic Arabia: orphans whose wealth was stolen, women who were inherited like property, and the weak who had no voice. The detailed inheritance laws were revolutionary - giving women rights to inherit 1400 years before the West. The repeated emphasis on justice (qist, 'adl) - even against one's own family - creates a society where the powerful cannot exploit the weak. The surah also addresses the hypocrites extensively because hypocrisy is the greatest threat to social justice: those who appear righteous while exploiting others. By ending with the kalalah ruling, the surah completes the legal framework for wealth distribution, ensuring no Muslim dies without clear heirs.", ur: "النساء سماجی انصاف پر قرآن کی بنیادی تحریر ہے، خاص طور پر کمزوروں کے لیے: عورتیں، یتیم، اور بے بس۔ یاد دلاتی ہے کہ ساری انسانیت ایک جان سے ہے - مساوات کی بنیاد قائم کرتی ہے۔ پھر منظم طور پر ان لوگوں کو مخاطب کرتی ہے جن کا قبل از اسلام عرب میں سب سے زیادہ استحصال ہوتا تھا: یتیم جن کا مال لوٹا جاتا، عورتیں جنہیں جائیداد کی طرح وراثت میں لیا جاتا، اور کمزور جن کی آواز نہ تھی۔ تفصیلی وراثت کے قوانین انقلابی تھے - مغرب سے 1400 سال پہلے عورتوں کو وراثت کا حق دیا۔ انصاف (قسط، عدل) پر بار بار زور - اپنے خاندان کے خلاف بھی - ایسا معاشرہ بناتا ہے جہاں طاقتور کمزور کا استحصال نہ کر سکے۔ منافقین کا تفصیلی ذکر اس لیے ہے کہ نفاق سماجی انصاف کی سب سے بڑی دھمکی ہے۔ کلالہ کے حکم سے سورت ختم ہو کر دولت کی تقسیم کا قانونی ڈھانچہ مکمل کرتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: { en: "Opening with Taqwa", ur: "تقویٰ سے آغاز" }, example: "وَاتَّقُوا اللَّهَ", effect: { en: "God-consciousness frames all rulings that follow", ur: "خدا خوفی تمام آنے والے احکام کا فریم بناتی ہے" } },
      { feature: { en: "Ya ayyuhal-ladhina amanu", ur: "يَا أَيُّهَا الَّذِينَ آمَنُوا" }, example: "يَا أَيُّهَا الَّذِينَ آمَنُوا", effect: { en: "Direct address to believers - appears 8+ times", ur: "مومنوں سے براہ راست خطاب - 8+ بار آتا ہے" } },
      { feature: { en: "Mathematical precision", ur: "ریاضیاتی درستگی" }, example: "نِصْف، ثُلُث، رُبُع، سُدُس", effect: { en: "Exact fractions leave no ambiguity in inheritance", ur: "عین کسر وراثت میں ابہام نہیں چھوڑتے" } },
      { feature: { en: "Hudud Allah", ur: "حدود اللہ" }, example: "تِلْكَ حُدُودُ اللَّهِ", effect: { en: "Boundaries/limits - emphasizes fixed nature of laws", ur: "حدود/سرحدیں - قوانین کی مقرر نوعیت پر زور" } },
      { feature: { en: "Conditional statements", ur: "شرطی جملے" }, example: "فَإِن كَانَ... فَإِن لَّمْ يَكُن", effect: { en: "Covers all scenarios in inheritance", ur: "وراثت میں تمام صورتیں شامل" } },
      { feature: { en: "Question-answer format", ur: "سوال و جواب کا طرز" }, example: "يَسْتَفْتُونَكَ... قُلِ اللَّهُ يُفْتِيكُمْ", effect: { en: "Divine response to real questions", ur: "حقیقی سوالات کا الٰہی جواب" } }
    ]
  },

  crossReferences: {
    references: [
      { reference: "2:180-182", topic: { en: "Bequests", ur: "وصیتیں" }, connection: { en: "Wasiyyah mentioned, An-Nisa gives details", ur: "وصیت کا ذکر، النساء تفصیلات دیتی ہے" } },
      { reference: "2:221", topic: { en: "Marriage to polytheists", ur: "مشرکوں سے نکاح" }, connection: { en: "Al-Baqarah prohibits, An-Nisa lists all prohibitions", ur: "البقرہ منع کرتی ہے، النساء تمام ممانعتوں کی فہرست" } },
      { reference: "2:228-232", topic: { en: "Divorce", ur: "طلاق" }, connection: { en: "Al-Baqarah on divorce, An-Nisa on marriage contracts", ur: "البقرہ میں طلاق، النساء میں نکاح کے معاہدے" } },
      { reference: "3:195", topic: { en: "Gender equality", ur: "صنفی مساوات" }, connection: { en: "Men and women from each other, An-Nisa elaborates", ur: "مرد و عورت ایک دوسرے سے، النساء تفصیل دیتی ہے" } },
      { reference: "5:32", topic: { en: "Sanctity of life", ur: "جان کی حرمت" }, connection: { en: "Killing one = killing all, An-Nisa on murder", ur: "ایک کا قتل = سب کا قتل، النساء میں قتل کا ذکر" } },
      { reference: "24:2-9", topic: { en: "Sexual crimes", ur: "جنسی جرائم" }, connection: { en: "An-Nisa's early rulings completed in An-Nur", ur: "النساء کے ابتدائی احکام النور میں مکمل" } },
      { reference: "33:6", topic: { en: "Prophet's wives", ur: "نبی کی بیویاں" }, connection: { en: "Mothers of believers, related to An-Nisa's marriage laws", ur: "امہات المومنین، النساء کے نکاح کے قوانین سے متعلق" } }
    ]
  }
};

export default ONTOLOGY;
