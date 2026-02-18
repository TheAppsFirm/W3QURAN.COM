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
      nameArabic: "وحدة البشرية والأصل",
      nameUrdu: "انسانی وحدت اور اصل",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        {
          term: "خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ",
          meaning: "Created you from a single soul",
          explanation: "All humanity from Adam - foundation of human equality",
          meaningUrdu: "ایک جان سے پیدا کیا - انسانی مساوات کی بنیاد",
          verseRef: "4:1"
        },
        {
          term: "وَخَلَقَ مِنْهَا زَوْجَهَا",
          meaning: "Created from it its mate",
          explanation: "Hawwa (Eve) created from Adam - complementary pair",
          meaningUrdu: "اس سے اس کا جوڑا بنایا",
          verseRef: "4:1"
        },
        {
          term: "وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً",
          meaning: "Dispersed from them many men and women",
          explanation: "All humanity descends from this pair - universal kinship",
          meaningUrdu: "ان دونوں سے بہت سے مرد و عورت پھیلائے",
          verseRef: "4:1"
        },
        {
          term: "وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ",
          meaning: "Fear Allah by whom you ask one another",
          explanation: "Invoking Allah in oaths - respect kinship ties",
          meaningUrdu: "اس اللہ سے ڈرو جس کے نام پر مانگتے ہو",
          verseRef: "4:1"
        },
        {
          term: "وَالْأَرْحَامَ",
          meaning: "And the wombs (kinship)",
          explanation: "Respect family ties - Arham shares root with Rahman (mercy)",
          meaningUrdu: "اور رشتوں کا خیال رکھو",
          verseRef: "4:1"
        }
      ]
    },

    orphanRights: {
      name: "Orphan Rights and Protection",
      nameArabic: "حقوق اليتامى وحمايتهم",
      nameUrdu: "یتیموں کے حقوق اور تحفظ",
      color: "#EC4899",
      icon: "Heart",
      concepts: [
        {
          term: "وَآتُوا الْيَتَامَىٰ أَمْوَالَهُمْ",
          meaning: "Give orphans their property",
          explanation: "Orphans must receive their rightful inheritance",
          meaningUrdu: "یتیموں کو ان کا مال دو",
          verseRef: "4:2"
        },
        {
          term: "وَلَا تَتَبَدَّلُوا الْخَبِيثَ بِالطَّيِّبِ",
          meaning: "Don't exchange bad for good",
          explanation: "Don't swap their quality property with inferior ones",
          meaningUrdu: "خراب کو اچھے سے نہ بدلو",
          verseRef: "4:2"
        },
        {
          term: "وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ",
          meaning: "Don't consume their wealth with yours",
          explanation: "Don't mix their property with yours to embezzle",
          meaningUrdu: "ان کا مال اپنے مال میں ملا کر نہ کھاؤ",
          verseRef: "4:2"
        },
        {
          term: "إِنَّهُ كَانَ حُوبًا كَبِيرًا",
          meaning: "It is a great sin",
          explanation: "Hub - major sin. Consuming orphan wealth is severely condemned",
          meaningUrdu: "یہ بڑا گناہ ہے",
          verseRef: "4:2"
        },
        {
          term: "وَابْتَلُوا الْيَتَامَىٰ",
          meaning: "Test the orphans",
          explanation: "Assess their maturity before giving them property",
          meaningUrdu: "یتیموں کو آزماؤ",
          verseRef: "4:6"
        },
        {
          term: "حَتَّىٰ إِذَا بَلَغُوا النِّكَاحَ",
          meaning: "Until they reach marriageable age",
          explanation: "Age of maturity - when they can manage property",
          meaningUrdu: "جب نکاح کی عمر کو پہنچیں",
          verseRef: "4:6"
        },
        {
          term: "فَإِنْ آنَسْتُم مِّنْهُمْ رُشْدًا",
          meaning: "If you perceive in them sound judgment",
          explanation: "Rushd - maturity in handling affairs, not just age",
          meaningUrdu: "اگر ان میں سمجھ داری پاؤ",
          verseRef: "4:6"
        },
        {
          term: "فَادْفَعُوا إِلَيْهِمْ أَمْوَالَهُمْ",
          meaning: "Then deliver their property to them",
          explanation: "Hand over property when they're ready",
          meaningUrdu: "تو ان کا مال انہیں دے دو",
          verseRef: "4:6"
        },
        {
          term: "وَلَا تَأْكُلُوهَا إِسْرَافًا وَبِدَارًا",
          meaning: "Don't consume it wastefully or hastily",
          explanation: "Don't waste it before they grow up",
          meaningUrdu: "فضول خرچی اور جلد بازی سے نہ کھاؤ",
          verseRef: "4:6"
        },
        {
          term: "إِنَّ الَّذِينَ يَأْكُلُونَ أَمْوَالَ الْيَتَامَىٰ ظُلْمًا",
          meaning: "Those who consume orphans' wealth unjustly",
          explanation: "Eating orphan property = consuming fire",
          meaningUrdu: "جو یتیموں کا مال ظلم سے کھاتے ہیں",
          verseRef: "4:10"
        },
        {
          term: "إِنَّمَا يَأْكُلُونَ فِي بُطُونِهِمْ نَارًا",
          meaning: "They are eating fire into their bellies",
          explanation: "Graphic warning - consumed wealth becomes hellfire",
          meaningUrdu: "اپنے پیٹوں میں آگ بھرتے ہیں",
          verseRef: "4:10"
        }
      ]
    },

    marriageRegulations: {
      name: "Marriage Regulations",
      nameArabic: "أحكام الزواج",
      nameUrdu: "نکاح کے احکام",
      color: "#F59E0B",
      icon: "Heart",
      concepts: [
        {
          term: "فَانكِحُوا مَا طَابَ لَكُم مِّنَ النِّسَاءِ",
          meaning: "Marry women of your choice",
          explanation: "Permission to marry - within limits",
          meaningUrdu: "جو عورتیں تمہیں پسند ہوں ان سے نکاح کرو",
          verseRef: "4:3"
        },
        {
          term: "مَثْنَىٰ وَثُلَاثَ وَرُبَاعَ",
          meaning: "Two, three, or four",
          explanation: "Maximum four wives permitted - with conditions",
          meaningUrdu: "دو، تین، یا چار",
          verseRef: "4:3"
        },
        {
          term: "فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً",
          meaning: "If you fear you cannot be just, then one",
          explanation: "Justice is condition - if can't be fair, marry one",
          meaningUrdu: "اگر انصاف نہ کر سکو تو ایک",
          verseRef: "4:3"
        },
        {
          term: "وَلَن تَسْتَطِيعُوا أَن تَعْدِلُوا بَيْنَ النِّسَاءِ",
          meaning: "You will never be able to be just between wives",
          explanation: "Perfect emotional equality impossible - but try",
          meaningUrdu: "تم ہرگز بیویوں میں انصاف نہیں کر سکتے",
          verseRef: "4:129"
        },
        {
          term: "فَلَا تَمِيلُوا كُلَّ الْمَيْلِ",
          meaning: "Don't incline completely (to one)",
          explanation: "Don't neglect one wife entirely for another",
          meaningUrdu: "پوری طرح نہ جھکو",
          verseRef: "4:129"
        },
        {
          term: "وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً",
          meaning: "Give women their mahr as a gift",
          explanation: "Mahr is woman's right - given willingly as gift",
          meaningUrdu: "عورتوں کو ان کے مہر خوشی سے دو",
          verseRef: "4:4"
        },
        {
          term: "فَإِن طِبْنَ لَكُمْ عَن شَيْءٍ مِّنْهُ نَفْسًا",
          meaning: "If they give up some willingly",
          explanation: "Wife can forgo part of mahr by her own choice",
          meaningUrdu: "اگر وہ خوشی سے کچھ چھوڑ دیں",
          verseRef: "4:4"
        }
      ]
    },

    prohibitedMarriages: {
      name: "Prohibited Marriage Relations",
      nameArabic: "المحرمات من النساء",
      nameUrdu: "حرام رشتے",
      color: "#EF4444",
      icon: "Ban",
      concepts: [
        {
          term: "حُرِّمَتْ عَلَيْكُمْ أُمَّهَاتُكُمْ",
          meaning: "Forbidden: your mothers",
          explanation: "Biological mothers - permanent prohibition",
          meaningUrdu: "تم پر حرام ہیں تمہاری مائیں",
          verseRef: "4:23"
        },
        {
          term: "وَبَنَاتُكُمْ",
          meaning: "And your daughters",
          explanation: "Biological daughters at all levels",
          meaningUrdu: "اور بیٹیاں",
          verseRef: "4:23"
        },
        {
          term: "وَأَخَوَاتُكُمْ",
          meaning: "And your sisters",
          explanation: "Full, half (paternal/maternal) sisters",
          meaningUrdu: "اور بہنیں",
          verseRef: "4:23"
        },
        {
          term: "وَعَمَّاتُكُمْ",
          meaning: "And your paternal aunts",
          explanation: "Father's sisters",
          meaningUrdu: "اور پھوپھیاں",
          verseRef: "4:23"
        },
        {
          term: "وَخَالَاتُكُمْ",
          meaning: "And your maternal aunts",
          explanation: "Mother's sisters",
          meaningUrdu: "اور خالائیں",
          verseRef: "4:23"
        },
        {
          term: "وَبَنَاتُ الْأَخِ وَبَنَاتُ الْأُخْتِ",
          meaning: "And brother's daughters, sister's daughters",
          explanation: "Nieces from both sides",
          meaningUrdu: "اور بھائی کی بیٹیاں اور بہن کی بیٹیاں",
          verseRef: "4:23"
        },
        {
          term: "وَأُمَّهَاتُكُمُ اللَّاتِي أَرْضَعْنَكُمْ",
          meaning: "And mothers who nursed you",
          explanation: "Milk mothers - breastfeeding creates kinship",
          meaningUrdu: "اور دودھ پلانے والی مائیں",
          verseRef: "4:23"
        },
        {
          term: "وَأَخَوَاتُكُم مِّنَ الرَّضَاعَةِ",
          meaning: "And milk-sisters",
          explanation: "Sisters through breastfeeding",
          meaningUrdu: "اور دودھ کی بہنیں",
          verseRef: "4:23"
        },
        {
          term: "وَأُمَّهَاتُ نِسَائِكُمْ",
          meaning: "And mothers of your wives",
          explanation: "Mother-in-law - forbidden immediately upon marriage",
          meaningUrdu: "اور بیویوں کی مائیں",
          verseRef: "4:23"
        },
        {
          term: "وَرَبَائِبُكُمُ اللَّاتِي فِي حُجُورِكُم",
          meaning: "And stepdaughters in your care",
          explanation: "Stepdaughters - if marriage consummated with mother",
          meaningUrdu: "اور سوتیلی بیٹیاں جو تمہاری گود میں ہیں",
          verseRef: "4:23"
        },
        {
          term: "وَحَلَائِلُ أَبْنَائِكُمُ الَّذِينَ مِنْ أَصْلَابِكُمْ",
          meaning: "And wives of your sons from your loins",
          explanation: "Daughter-in-law - biological sons only",
          meaningUrdu: "اور صلبی بیٹوں کی بیویاں",
          verseRef: "4:23"
        },
        {
          term: "وَأَن تَجْمَعُوا بَيْنَ الْأُخْتَيْنِ",
          meaning: "And combining two sisters",
          explanation: "Can't marry two sisters simultaneously",
          meaningUrdu: "اور دو بہنوں کو جمع کرنا",
          verseRef: "4:23"
        },
        {
          term: "وَالْمُحْصَنَاتُ مِنَ النِّسَاءِ",
          meaning: "And married women",
          explanation: "Already married women are forbidden",
          meaningUrdu: "اور شوہر والی عورتیں",
          verseRef: "4:24"
        },
        {
          term: "وَلَا تَنكِحُوا مَا نَكَحَ آبَاؤُكُم",
          meaning: "Don't marry whom your fathers married",
          explanation: "Stepmother forbidden - pre-Islamic practice abolished",
          meaningUrdu: "اپنے باپوں کی منکوحہ سے نکاح نہ کرو",
          verseRef: "4:22"
        }
      ]
    },

    inheritanceLaws: {
      name: "Inheritance Laws",
      nameArabic: "أحكام الميراث",
      nameUrdu: "وراثت کے احکام",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        {
          term: "لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ",
          meaning: "For men a share of what parents left",
          explanation: "Men have inheritance rights - not exclusive to eldest",
          meaningUrdu: "مردوں کے لیے والدین کے ترکے میں حصہ",
          verseRef: "4:7"
        },
        {
          term: "وَلِلنِّسَاءِ نَصِيبٌ",
          meaning: "And for women a share",
          explanation: "Women also inherit - revolutionary for that time",
          meaningUrdu: "اور عورتوں کے لیے حصہ",
          verseRef: "4:7"
        },
        {
          term: "نَصِيبًا مَّفْرُوضًا",
          meaning: "An obligatory share",
          explanation: "Fixed, mandatory - not optional charity",
          meaningUrdu: "مقرر حصہ",
          verseRef: "4:7"
        },
        {
          term: "يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ",
          meaning: "Allah instructs you about your children",
          explanation: "Divine command about children's inheritance",
          meaningUrdu: "اللہ تمہیں اولاد کے بارے میں حکم دیتا ہے",
          verseRef: "4:11"
        },
        {
          term: "لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ",
          meaning: "For male, share of two females",
          explanation: "2:1 ratio - male has financial obligations",
          meaningUrdu: "مرد کو دو عورتوں کے برابر",
          verseRef: "4:11"
        },
        {
          term: "فَإِن كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ",
          meaning: "If daughters more than two",
          explanation: "Two or more daughters get 2/3 together",
          meaningUrdu: "اگر دو سے زیادہ بیٹیاں ہوں",
          verseRef: "4:11"
        },
        {
          term: "فَلَهُنَّ ثُلُثَا مَا تَرَكَ",
          meaning: "They get two-thirds",
          explanation: "2/3 divided among all daughters",
          meaningUrdu: "تو ان کے لیے دو تہائی",
          verseRef: "4:11"
        },
        {
          term: "وَإِن كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ",
          meaning: "If one daughter, half",
          explanation: "Single daughter gets 1/2",
          meaningUrdu: "اگر ایک بیٹی ہو تو آدھا",
          verseRef: "4:11"
        },
        {
          term: "وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُ",
          meaning: "For parents, each one-sixth",
          explanation: "Both parents get 1/6 if deceased has children",
          meaningUrdu: "والدین میں سے ہر ایک کے لیے چھٹا حصہ",
          verseRef: "4:11"
        },
        {
          term: "فَإِن لَّمْ يَكُن لَّهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ",
          meaning: "If no child and parents inherit",
          explanation: "Mother gets 1/3 if no children",
          meaningUrdu: "اگر اولاد نہ ہو اور والدین وارث ہوں",
          verseRef: "4:11"
        },
        {
          term: "فَلِأُمِّهِ الثُّلُثُ",
          meaning: "Mother gets one-third",
          explanation: "Mother's share increases without children",
          meaningUrdu: "ماں کو تہائی",
          verseRef: "4:11"
        },
        {
          term: "مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ",
          meaning: "After bequest or debt",
          explanation: "Debts and valid bequests paid first",
          meaningUrdu: "وصیت اور قرض کے بعد",
          verseRef: "4:11"
        },
        {
          term: "وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ",
          meaning: "For you half of what wives leave",
          explanation: "Husband gets 1/2 if wife has no children",
          meaningUrdu: "تمہارے لیے بیویوں کے ترکے کا آدھا",
          verseRef: "4:12"
        },
        {
          term: "فَإِن كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ",
          meaning: "If they have children, you get quarter",
          explanation: "Husband's share reduces to 1/4 with children",
          meaningUrdu: "اگر ان کی اولاد ہو تو تمہیں چوتھائی",
          verseRef: "4:12"
        },
        {
          term: "وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ",
          meaning: "For them quarter of what you leave",
          explanation: "Wife gets 1/4 if husband has no children",
          meaningUrdu: "ان کے لیے چوتھائی جو تم چھوڑو",
          verseRef: "4:12"
        },
        {
          term: "فَإِن كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ",
          meaning: "If you have children, they get eighth",
          explanation: "Wife's share 1/8 with children",
          meaningUrdu: "اگر تمہاری اولاد ہو تو انہیں آٹھواں",
          verseRef: "4:12"
        },
        {
          term: "الْكَلَالَةُ",
          meaning: "Kalalah (no direct heirs)",
          explanation: "Person with no parents or children - siblings inherit",
          meaningUrdu: "کلالہ - جس کے والدین یا اولاد نہ ہو",
          verseRef: "4:12, 4:176"
        },
        {
          term: "تِلْكَ حُدُودُ اللَّهِ",
          meaning: "These are Allah's limits",
          explanation: "Hudud - boundaries not to be crossed",
          meaningUrdu: "یہ اللہ کی حدیں ہیں",
          verseRef: "4:13"
        }
      ]
    },

    womenRights: {
      name: "Women's Rights and Treatment",
      nameArabic: "حقوق المرأة ومعاملتها",
      nameUrdu: "عورتوں کے حقوق اور سلوک",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        {
          term: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ",
          meaning: "Live with them honorably",
          explanation: "Ma'ruf - kindness, good treatment as standard",
          meaningUrdu: "ان کے ساتھ اچھے طریقے سے رہو",
          verseRef: "4:19"
        },
        {
          term: "فَإِن كَرِهْتُمُوهُنَّ",
          meaning: "If you dislike them",
          explanation: "Disliking doesn't justify mistreatment",
          meaningUrdu: "اگر تم انہیں ناپسند کرو",
          verseRef: "4:19"
        },
        {
          term: "فَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا",
          meaning: "Perhaps you dislike something with much good in it",
          explanation: "Wisdom in patience - good may come from what's disliked",
          meaningUrdu: "شاید تم کسی چیز کو ناپسند کرو اور اللہ اس میں بہت بھلائی رکھ دے",
          verseRef: "4:19"
        },
        {
          term: "لَا يَحِلُّ لَكُمْ أَن تَرِثُوا النِّسَاءَ كَرْهًا",
          meaning: "Not lawful to inherit women against their will",
          explanation: "Abolished practice of inheriting deceased's wives",
          meaningUrdu: "تمہارے لیے حلال نہیں کہ عورتوں کو زبردستی وارثت میں لو",
          verseRef: "4:19"
        },
        {
          term: "وَلَا تَعْضُلُوهُنَّ لِتَذْهَبُوا بِبَعْضِ مَا آتَيْتُمُوهُنَّ",
          meaning: "Don't constrain them to take back what you gave",
          explanation: "Don't pressure wives to return mahr for divorce",
          meaningUrdu: "انہیں تنگ نہ کرو کہ جو دیا ہے واپس لو",
          verseRef: "4:19"
        },
        {
          term: "وَإِنْ أَرَدتُّمُ اسْتِبْدَالَ زَوْجٍ مَّكَانَ زَوْجٍ",
          meaning: "If you want to replace one wife with another",
          explanation: "Divorce for remarriage - still pay full mahr",
          meaningUrdu: "اگر ایک بیوی کی جگہ دوسری لانا چاہو",
          verseRef: "4:20"
        },
        {
          term: "وَآتَيْتُمْ إِحْدَاهُنَّ قِنطَارًا فَلَا تَأْخُذُوا مِنْهُ شَيْئًا",
          meaning: "Even if you gave one a great amount, take nothing",
          explanation: "Even huge mahr cannot be taken back",
          meaningUrdu: "اگر ڈھیروں مال دیا ہو تو بھی کچھ واپس نہ لو",
          verseRef: "4:20"
        },
        {
          term: "أَتَأْخُذُونَهُ بُهْتَانًا وَإِثْمًا مُّبِينًا",
          meaning: "Would you take it by slander and clear sin?",
          explanation: "Taking back mahr = slander + sin",
          meaningUrdu: "کیا بہتان اور کھلے گناہ سے لو گے؟",
          verseRef: "4:20"
        },
        {
          term: "وَكَيْفَ تَأْخُذُونَهُ وَقَدْ أَفْضَىٰ بَعْضُكُمْ إِلَىٰ بَعْضٍ",
          meaning: "How can you take it when you have been intimate?",
          explanation: "Intimacy creates bond - can't undo that",
          meaningUrdu: "کیسے لو گے جبکہ تم ایک دوسرے تک پہنچ چکے ہو؟",
          verseRef: "4:21"
        },
        {
          term: "وَأَخَذْنَ مِنكُم مِّيثَاقًا غَلِيظًا",
          meaning: "And they took from you a solemn covenant",
          explanation: "Marriage is mithaq ghaliz - firm covenant",
          meaningUrdu: "اور انہوں نے تم سے پختہ عہد لیا",
          verseRef: "4:21"
        }
      ]
    },

    maritalDisputes: {
      name: "Marital Disputes and Resolution",
      nameArabic: "النزاعات الزوجية والحل",
      nameUrdu: "ازدواجی تنازعات اور حل",
      color: "#06B6D4",
      icon: "Scale",
      concepts: [
        {
          term: "الرِّجَالُ قَوَّامُونَ عَلَى النِّسَاءِ",
          meaning: "Men are protectors/maintainers of women",
          explanation: "Qawwam - responsibility for protection and provision",
          meaningUrdu: "مرد عورتوں کے نگران ہیں",
          verseRef: "4:34"
        },
        {
          term: "بِمَا فَضَّلَ اللَّهُ بَعْضَهُمْ عَلَىٰ بَعْضٍ",
          meaning: "Because Allah favored some over others",
          explanation: "Different roles, not superiority - complementary",
          meaningUrdu: "اس لیے کہ اللہ نے بعض کو بعض پر فضیلت دی",
          verseRef: "4:34"
        },
        {
          term: "وَبِمَا أَنفَقُوا مِنْ أَمْوَالِهِمْ",
          meaning: "And because they spend from their wealth",
          explanation: "Financial responsibility on men",
          meaningUrdu: "اور اس لیے کہ انہوں نے اپنے مال سے خرچ کیا",
          verseRef: "4:34"
        },
        {
          term: "فَالصَّالِحَاتُ قَانِتَاتٌ",
          meaning: "Righteous women are devoutly obedient",
          explanation: "Qanitat - devoted, obedient to Allah",
          meaningUrdu: "نیک عورتیں اطاعت گزار ہیں",
          verseRef: "4:34"
        },
        {
          term: "حَافِظَاتٌ لِّلْغَيْبِ بِمَا حَفِظَ اللَّهُ",
          meaning: "Guarding in absence what Allah guards",
          explanation: "Protecting honor and property when husband absent",
          meaningUrdu: "غیر حاضری میں حفاظت کرنے والیاں",
          verseRef: "4:34"
        },
        {
          term: "وَاللَّاتِي تَخَافُونَ نُشُوزَهُنَّ",
          meaning: "Those whose rebellion you fear",
          explanation: "Nushuz - rebellion, arrogance, violation of duties",
          meaningUrdu: "جن کی سرکشی کا اندیشہ ہو",
          verseRef: "4:34"
        },
        {
          term: "فَعِظُوهُنَّ",
          meaning: "Advise them",
          explanation: "First step: verbal counsel",
          meaningUrdu: "انہیں نصیحت کرو",
          verseRef: "4:34"
        },
        {
          term: "وَاهْجُرُوهُنَّ فِي الْمَضَاجِعِ",
          meaning: "And forsake them in bed",
          explanation: "Second step: separate sleeping",
          meaningUrdu: "اور بستروں میں انہیں چھوڑ دو",
          verseRef: "4:34"
        },
        {
          term: "وَاضْرِبُوهُنَّ",
          meaning: "And strike them",
          explanation: "Last resort: light, non-injurious - Prophet discouraged",
          meaningUrdu: "اور انہیں مارو",
          verseRef: "4:34"
        },
        {
          term: "فَإِنْ أَطَعْنَكُمْ فَلَا تَبْغُوا عَلَيْهِنَّ سَبِيلًا",
          meaning: "If they obey, seek no way against them",
          explanation: "Once resolved, no further action",
          meaningUrdu: "اگر مان جائیں تو ان پر زیادتی کی راہ نہ ڈھونڈو",
          verseRef: "4:34"
        },
        {
          term: "وَإِنْ خِفْتُمْ شِقَاقَ بَيْنِهِمَا",
          meaning: "If you fear discord between them",
          explanation: "When couple can't resolve themselves",
          meaningUrdu: "اگر دونوں میں پھوٹ کا اندیشہ ہو",
          verseRef: "4:35"
        },
        {
          term: "فَابْعَثُوا حَكَمًا مِّنْ أَهْلِهِ وَحَكَمًا مِّنْ أَهْلِهَا",
          meaning: "Send an arbitrator from his family and from hers",
          explanation: "Family arbitration - both sides represented",
          meaningUrdu: "اس کے گھر والوں سے ایک فیصل اور اس کے گھر والوں سے ایک",
          verseRef: "4:35"
        },
        {
          term: "إِن يُرِيدَا إِصْلَاحًا يُوَفِّقِ اللَّهُ بَيْنَهُمَا",
          meaning: "If both desire reconciliation, Allah will cause it",
          explanation: "Sincere intention + Allah's help = success",
          meaningUrdu: "اگر دونوں اصلاح چاہیں تو اللہ موافقت کرا دے گا",
          verseRef: "4:35"
        }
      ]
    },

    hypocrites: {
      name: "Hypocrites and Their Traits",
      nameArabic: "المنافقون وصفاتهم",
      nameUrdu: "منافقین اور ان کی صفات",
      color: "#6B7280",
      icon: "Mask",
      concepts: [
        {
          term: "إِنَّ الْمُنَافِقِينَ يُخَادِعُونَ اللَّهَ",
          meaning: "Hypocrites try to deceive Allah",
          explanation: "Thinking they can fool God",
          meaningUrdu: "منافقین اللہ کو دھوکا دینا چاہتے ہیں",
          verseRef: "4:142"
        },
        {
          term: "وَهُوَ خَادِعُهُمْ",
          meaning: "But He deceives them",
          explanation: "Their deception returns on them",
          meaningUrdu: "حالانکہ وہ انہیں دھوکے میں ڈالنے والا ہے",
          verseRef: "4:142"
        },
        {
          term: "وَإِذَا قَامُوا إِلَى الصَّلَاةِ قَامُوا كُسَالَىٰ",
          meaning: "When they stand for prayer, they stand lazily",
          explanation: "Prayer is burden for them",
          meaningUrdu: "جب نماز کو کھڑے ہوتے ہیں تو سستی سے",
          verseRef: "4:142"
        },
        {
          term: "يُرَاءُونَ النَّاسَ",
          meaning: "Showing off to people",
          explanation: "Riya - praying for human approval",
          meaningUrdu: "لوگوں کو دکھاتے ہیں",
          verseRef: "4:142"
        },
        {
          term: "وَلَا يَذْكُرُونَ اللَّهَ إِلَّا قَلِيلًا",
          meaning: "And remember Allah only little",
          explanation: "Minimal dhikr - heart not connected",
          meaningUrdu: "اور اللہ کو بہت کم یاد کرتے ہیں",
          verseRef: "4:142"
        },
        {
          term: "مُّذَبْذَبِينَ بَيْنَ ذَٰلِكَ",
          meaning: "Wavering between this and that",
          explanation: "Neither with believers nor disbelievers",
          meaningUrdu: "دونوں کے بیچ ڈولتے ہیں",
          verseRef: "4:143"
        },
        {
          term: "لَا إِلَىٰ هَٰؤُلَاءِ وَلَا إِلَىٰ هَٰؤُلَاءِ",
          meaning: "Neither to these nor to those",
          explanation: "No true allegiance to anyone",
          meaningUrdu: "نہ ان کی طرف نہ ان کی طرف",
          verseRef: "4:143"
        },
        {
          term: "الَّذِينَ يَتَرَبَّصُونَ بِكُمْ",
          meaning: "Those who watch and wait",
          explanation: "Waiting to see who wins before committing",
          meaningUrdu: "جو تمہارے ساتھ انتظار کرتے ہیں",
          verseRef: "4:141"
        },
        {
          term: "فَإِن كَانَ لَكُمْ فَتْحٌ مِّنَ اللَّهِ قَالُوا أَلَمْ نَكُن مَّعَكُمْ",
          meaning: "If you have victory, they say: Were we not with you?",
          explanation: "Claim credit for Muslim victories",
          meaningUrdu: "اگر تمہیں فتح ملے تو کہتے ہیں: ہم تمہارے ساتھ نہ تھے؟",
          verseRef: "4:141"
        },
        {
          term: "وَإِن كَانَ لِلْكَافِرِينَ نَصِيبٌ",
          meaning: "If disbelievers have some success",
          explanation: "Then they claim they protected disbelievers from Muslims",
          meaningUrdu: "اگر کافروں کو کچھ حصہ ملے",
          verseRef: "4:141"
        },
        {
          term: "إِنَّ الْمُنَافِقِينَ فِي الدَّرْكِ الْأَسْفَلِ مِنَ النَّارِ",
          meaning: "Hypocrites are in lowest depth of Fire",
          explanation: "Worse than open disbelievers - deepest Hell",
          meaningUrdu: "منافقین آگ کے سب سے نیچے درجے میں ہوں گے",
          verseRef: "4:145"
        }
      ]
    },

    obedienceHierarchy: {
      name: "Obedience and Authority",
      nameArabic: "الطاعة والسلطة",
      nameUrdu: "اطاعت اور اختیار",
      color: "#7C3AED",
      icon: "Crown",
      concepts: [
        {
          term: "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ",
          meaning: "Obey Allah, the Messenger, and those in authority",
          explanation: "Hierarchy: Allah > Prophet > Muslim authorities",
          meaningUrdu: "اللہ کی اطاعت کرو، رسول کی اور اپنے میں سے اولی الامر کی",
          verseRef: "4:59"
        },
        {
          term: "فَإِن تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ",
          meaning: "If you disagree, refer to Allah and Messenger",
          explanation: "Quran and Sunnah are final reference",
          meaningUrdu: "اگر کسی بات میں اختلاف ہو تو اللہ اور رسول کی طرف لوٹاؤ",
          verseRef: "4:59"
        },
        {
          term: "مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ",
          meaning: "Whoever obeys the Messenger has obeyed Allah",
          explanation: "Prophet's commands = Allah's commands",
          meaningUrdu: "جس نے رسول کی اطاعت کی اس نے اللہ کی اطاعت کی",
          verseRef: "4:80"
        },
        {
          term: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ",
          meaning: "No, by your Lord, they don't believe",
          explanation: "True faith requires accepting Prophet's judgment",
          meaningUrdu: "نہیں! تیرے رب کی قسم، وہ مومن نہیں",
          verseRef: "4:65"
        },
        {
          term: "حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ",
          meaning: "Until they make you judge in disputes",
          explanation: "Must accept Prophet as arbitrator",
          meaningUrdu: "جب تک تجھے اپنے جھگڑوں میں فیصل نہ بنائیں",
          verseRef: "4:65"
        },
        {
          term: "ثُمَّ لَا يَجِدُوا فِي أَنفُسِهِمْ حَرَجًا",
          meaning: "Then find no discomfort in themselves",
          explanation: "Accept wholeheartedly, not reluctantly",
          meaningUrdu: "پھر اپنے دلوں میں تنگی نہ پائیں",
          verseRef: "4:65"
        },
        {
          term: "وَيُسَلِّمُوا تَسْلِيمًا",
          meaning: "And submit completely",
          explanation: "Full submission to Prophet's ruling",
          meaningUrdu: "اور پوری طرح تسلیم کریں",
          verseRef: "4:65"
        }
      ]
    },

    fightingRules: {
      name: "Fighting in Allah's Cause",
      nameArabic: "القتال في سبيل الله",
      nameUrdu: "اللہ کی راہ میں جہاد",
      color: "#DC2626",
      icon: "Sword",
      concepts: [
        {
          term: "وَمَا لَكُمْ لَا تُقَاتِلُونَ فِي سَبِيلِ اللَّهِ",
          meaning: "Why don't you fight in Allah's cause?",
          explanation: "Rhetorical question - motivation to fight for oppressed",
          meaningUrdu: "تمہیں کیا ہوا کہ اللہ کی راہ میں نہیں لڑتے؟",
          verseRef: "4:75"
        },
        {
          term: "وَالْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ",
          meaning: "And for the oppressed men, women, and children",
          explanation: "Fighting to liberate the oppressed",
          meaningUrdu: "اور کمزور مردوں، عورتوں اور بچوں کے لیے",
          verseRef: "4:75"
        },
        {
          term: "الَّذِينَ يَقُولُونَ رَبَّنَا أَخْرِجْنَا مِنْ هَٰذِهِ الْقَرْيَةِ",
          meaning: "Who say: Our Lord, take us from this town",
          explanation: "Oppressed Muslims calling for rescue",
          meaningUrdu: "جو کہتے ہیں: اے رب! ہمیں اس بستی سے نکال",
          verseRef: "4:75"
        },
        {
          term: "الَّذِينَ آمَنُوا يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ",
          meaning: "Believers fight in Allah's cause",
          explanation: "Believers fight for Allah's sake",
          meaningUrdu: "مومن اللہ کی راہ میں لڑتے ہیں",
          verseRef: "4:76"
        },
        {
          term: "وَالَّذِينَ كَفَرُوا يُقَاتِلُونَ فِي سَبِيلِ الطَّاغُوتِ",
          meaning: "Disbelievers fight in cause of taghut",
          explanation: "Fighting for false gods/tyrants",
          meaningUrdu: "کافر طاغوت کی راہ میں لڑتے ہیں",
          verseRef: "4:76"
        },
        {
          term: "فَقَاتِلُوا أَوْلِيَاءَ الشَّيْطَانِ",
          meaning: "So fight the allies of Satan",
          explanation: "Satan's allies to be opposed",
          meaningUrdu: "پس شیطان کے دوستوں سے لڑو",
          verseRef: "4:76"
        },
        {
          term: "إِنَّ كَيْدَ الشَّيْطَانِ كَانَ ضَعِيفًا",
          meaning: "Satan's plot is ever weak",
          explanation: "Encouragement - Satan's schemes are fragile",
          meaningUrdu: "بیشک شیطان کی چال کمزور ہے",
          verseRef: "4:76"
        },
        {
          term: "وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا",
          meaning: "If they incline to peace, incline to it",
          explanation: "Peace preferred when enemy wants it (see 8:61)",
          meaningUrdu: "اگر وہ صلح کی طرف جھکیں تو تم بھی جھکو",
          verseRef: "4:90"
        },
        {
          term: "وَمَن يَقْتُلْ مُؤْمِنًا مُّتَعَمِّدًا",
          meaning: "Whoever kills a believer intentionally",
          explanation: "Deliberate murder of Muslim - severe sin",
          meaningUrdu: "جو مومن کو جان بوجھ کر قتل کرے",
          verseRef: "4:93"
        },
        {
          term: "فَجَزَاؤُهُ جَهَنَّمُ خَالِدًا فِيهَا",
          meaning: "His recompense is Hell, abiding eternally",
          explanation: "Eternal Hell for intentional Muslim murder",
          meaningUrdu: "اس کی سزا جہنم ہے ہمیشہ رہے گا",
          verseRef: "4:93"
        }
      ]
    },

    migration: {
      name: "Migration (Hijrah)",
      nameArabic: "الهجرة",
      nameUrdu: "ہجرت",
      color: "#0891B2",
      icon: "Plane",
      concepts: [
        {
          term: "إِنَّ الَّذِينَ تَوَفَّاهُمُ الْمَلَائِكَةُ ظَالِمِي أَنفُسِهِمْ",
          meaning: "Those whom angels take while wronging themselves",
          explanation: "Dying without migrating when able",
          meaningUrdu: "جن کی جان فرشتے لیتے ہیں جبکہ وہ اپنے آپ پر ظلم کر رہے ہوں",
          verseRef: "4:97"
        },
        {
          term: "قَالُوا فِيمَ كُنتُمْ",
          meaning: "They say: In what condition were you?",
          explanation: "Angels question their state",
          meaningUrdu: "فرشتے کہتے ہیں: تم کس حال میں تھے؟",
          verseRef: "4:97"
        },
        {
          term: "قَالُوا كُنَّا مُسْتَضْعَفِينَ فِي الْأَرْضِ",
          meaning: "They say: We were oppressed in the land",
          explanation: "Excuse of weakness",
          meaningUrdu: "وہ کہتے ہیں: ہم زمین میں کمزور تھے",
          verseRef: "4:97"
        },
        {
          term: "أَلَمْ تَكُنْ أَرْضُ اللَّهِ وَاسِعَةً فَتُهَاجِرُوا فِيهَا",
          meaning: "Was not Allah's earth spacious to migrate?",
          explanation: "Earth is vast - could have migrated",
          meaningUrdu: "کیا اللہ کی زمین وسیع نہ تھی کہ ہجرت کرتے؟",
          verseRef: "4:97"
        },
        {
          term: "إِلَّا الْمُسْتَضْعَفِينَ مِنَ الرِّجَالِ وَالنِّسَاءِ وَالْوِلْدَانِ",
          meaning: "Except truly weak men, women, children",
          explanation: "Genuine inability excused",
          meaningUrdu: "مگر جو واقعی کمزور مرد، عورتیں اور بچے",
          verseRef: "4:98"
        },
        {
          term: "لَا يَسْتَطِيعُونَ حِيلَةً وَلَا يَهْتَدُونَ سَبِيلًا",
          meaning: "Cannot devise a plan nor find a way",
          explanation: "Truly unable - no means or knowledge",
          meaningUrdu: "نہ کوئی تدبیر کر سکتے ہیں نہ راہ پاتے ہیں",
          verseRef: "4:98"
        },
        {
          term: "فَأُولَٰئِكَ عَسَى اللَّهُ أَن يَعْفُوَ عَنْهُمْ",
          meaning: "Allah may pardon them",
          explanation: "Hope for genuinely weak",
          meaningUrdu: "شاید اللہ انہیں معاف کر دے",
          verseRef: "4:99"
        },
        {
          term: "وَمَن يُهَاجِرْ فِي سَبِيلِ اللَّهِ",
          meaning: "Whoever migrates in Allah's cause",
          explanation: "Migration for Allah's sake rewarded",
          meaningUrdu: "جو اللہ کی راہ میں ہجرت کرے",
          verseRef: "4:100"
        },
        {
          term: "يَجِدْ فِي الْأَرْضِ مُرَاغَمًا كَثِيرًا وَسَعَةً",
          meaning: "Finds many refuges and abundance",
          explanation: "Allah provides for migrants",
          meaningUrdu: "زمین میں بہت جگہ اور وسعت پائے گا",
          verseRef: "4:100"
        }
      ]
    },

    prayerInDanger: {
      name: "Prayer in Times of Danger",
      nameArabic: "صلاة الخوف",
      nameUrdu: "خوف کی نماز",
      color: "#F59E0B",
      icon: "Shield",
      concepts: [
        {
          term: "وَإِذَا كُنتَ فِيهِمْ فَأَقَمْتَ لَهُمُ الصَّلَاةَ",
          meaning: "When you are with them and lead prayer",
          explanation: "Instructions for prayer during battle",
          meaningUrdu: "جب تو ان میں ہو اور نماز قائم کرائے",
          verseRef: "4:102"
        },
        {
          term: "فَلْتَقُمْ طَائِفَةٌ مِّنْهُم مَّعَكَ",
          meaning: "Let a group stand with you",
          explanation: "One group prays, other guards",
          meaningUrdu: "ایک جماعت تیرے ساتھ کھڑی ہو",
          verseRef: "4:102"
        },
        {
          term: "وَلْيَأْخُذُوا أَسْلِحَتَهُمْ",
          meaning: "And let them take their weapons",
          explanation: "Armed even during prayer",
          meaningUrdu: "اور اپنے ہتھیار اٹھائے رہیں",
          verseRef: "4:102"
        },
        {
          term: "وَدَّ الَّذِينَ كَفَرُوا لَوْ تَغْفُلُونَ عَنْ أَسْلِحَتِكُمْ",
          meaning: "Disbelievers wish you would neglect weapons",
          explanation: "Enemy hopes for Muslims' carelessness",
          meaningUrdu: "کافر چاہتے ہیں کہ تم اپنے ہتھیاروں سے غافل ہو جاؤ",
          verseRef: "4:102"
        },
        {
          term: "فَيَمِيلُونَ عَلَيْكُم مَّيْلَةً وَاحِدَةً",
          meaning: "To assault you at once",
          explanation: "Enemy waiting for chance to attack",
          meaningUrdu: "پھر تم پر یکدم حملہ کریں",
          verseRef: "4:102"
        },
        {
          term: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",
          meaning: "Prayer is prescribed for believers at fixed times",
          explanation: "Prayer timing is obligatory - can't skip",
          meaningUrdu: "نماز مومنوں پر مقررہ وقت پر فرض ہے",
          verseRef: "4:103"
        },
        {
          term: "فَإِذَا اطْمَأْنَنتُمْ فَأَقِيمُوا الصَّلَاةَ",
          meaning: "When you are secure, establish prayer (normally)",
          explanation: "Full prayer when danger passes",
          meaningUrdu: "جب اطمینان ہو تو نماز پوری پڑھو",
          verseRef: "4:103"
        }
      ]
    },

    justice: {
      name: "Justice and Fair Dealing",
      nameArabic: "العدل والإنصاف",
      nameUrdu: "عدل اور انصاف",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        {
          term: "إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",
          meaning: "Allah commands you to return trusts",
          explanation: "Amanah - all trusts must be returned to owners",
          meaningUrdu: "اللہ تمہیں حکم دیتا ہے کہ امانتیں مالکوں کو لوٹاؤ",
          verseRef: "4:58"
        },
        {
          term: "وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ",
          meaning: "When judging between people, judge with justice",
          explanation: "Justice mandatory in all judgments",
          meaningUrdu: "جب لوگوں کے درمیان فیصلہ کرو تو انصاف سے کرو",
          verseRef: "4:58"
        },
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ",
          meaning: "O believers, be upholders of justice",
          explanation: "Actively establish justice",
          meaningUrdu: "اے ایمان والو! انصاف پر قائم رہو",
          verseRef: "4:135"
        },
        {
          term: "شُهَدَاءَ لِلَّهِ وَلَوْ عَلَىٰ أَنفُسِكُمْ",
          meaning: "Witnesses for Allah, even against yourselves",
          explanation: "Testify truth even against yourself",
          meaningUrdu: "اللہ کے لیے گواہ بنو چاہے اپنے خلاف ہو",
          verseRef: "4:135"
        },
        {
          term: "أَوِ الْوَالِدَيْنِ وَالْأَقْرَبِينَ",
          meaning: "Or parents and relatives",
          explanation: "Justice even against family",
          meaningUrdu: "یا والدین اور رشتہ داروں کے خلاف",
          verseRef: "4:135"
        },
        {
          term: "إِن يَكُنْ غَنِيًّا أَوْ فَقِيرًا",
          meaning: "Whether rich or poor",
          explanation: "Justice regardless of wealth status",
          meaningUrdu: "چاہے امیر ہو یا غریب",
          verseRef: "4:135"
        },
        {
          term: "فَاللَّهُ أَوْلَىٰ بِهِمَا",
          meaning: "Allah is closer to both",
          explanation: "Allah knows best - don't show favoritism",
          meaningUrdu: "اللہ ان دونوں کا زیادہ خیرخواہ ہے",
          verseRef: "4:135"
        },
        {
          term: "فَلَا تَتَّبِعُوا الْهَوَىٰ أَن تَعْدِلُوا",
          meaning: "Don't follow desire instead of being just",
          explanation: "Desire shouldn't compromise justice",
          meaningUrdu: "خواہش کی پیروی نہ کرو کہ انصاف نہ کرو",
          verseRef: "4:135"
        }
      ]
    },

    peopleOfBook: {
      name: "People of the Book",
      nameArabic: "أهل الكتاب",
      nameUrdu: "اہل کتاب",
      color: "#6366F1",
      icon: "Book",
      concepts: [
        {
          term: "يَسْأَلُكَ أَهْلُ الْكِتَابِ أَن تُنَزِّلَ عَلَيْهِمْ كِتَابًا مِّنَ السَّمَاءِ",
          meaning: "People of Book ask you to bring down a book from heaven",
          explanation: "They demanded physical book from sky",
          meaningUrdu: "اہل کتاب تجھ سے مانگتے ہیں کہ آسمان سے کتاب اتار",
          verseRef: "4:153"
        },
        {
          term: "فَقَدْ سَأَلُوا مُوسَىٰ أَكْبَرَ مِن ذَٰلِكَ",
          meaning: "They asked Moses for even greater",
          explanation: "Asked to see Allah directly",
          meaningUrdu: "انہوں نے موسیٰ سے اس سے بڑی بات مانگی",
          verseRef: "4:153"
        },
        {
          term: "فَقَالُوا أَرِنَا اللَّهَ جَهْرَةً",
          meaning: "They said: Show us Allah openly",
          explanation: "Demanded to see God with eyes",
          meaningUrdu: "کہا: ہمیں اللہ کھلم کھلا دکھاؤ",
          verseRef: "4:153"
        },
        {
          term: "فَأَخَذَتْهُمُ الصَّاعِقَةُ بِظُلْمِهِمْ",
          meaning: "Thunderbolt seized them for their wrongdoing",
          explanation: "Punished for their arrogance",
          meaningUrdu: "بجلی نے ان کے ظلم کی وجہ سے پکڑ لیا",
          verseRef: "4:153"
        },
        {
          term: "ثُمَّ اتَّخَذُوا الْعِجْلَ",
          meaning: "Then they took the calf (for worship)",
          explanation: "Golden calf worship despite signs",
          meaningUrdu: "پھر انہوں نے بچھڑے کو (معبود) بنایا",
          verseRef: "4:153"
        },
        {
          term: "وَبِكُفْرِهِمْ وَقَوْلِهِمْ عَلَىٰ مَرْيَمَ بُهْتَانًا عَظِيمًا",
          meaning: "And for their disbelief and saying against Mary a great slander",
          explanation: "Slandering Maryam's honor",
          meaningUrdu: "ان کے کفر اور مریم پر بڑے بہتان کی وجہ سے",
          verseRef: "4:156"
        },
        {
          term: "وَقَوْلِهِمْ إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ",
          meaning: "And their saying: We killed the Messiah, Jesus son of Mary",
          explanation: "False claim of killing Jesus",
          meaningUrdu: "اور یہ کہنا کہ ہم نے مسیح عیسیٰ ابن مریم کو قتل کیا",
          verseRef: "4:157"
        },
        {
          term: "وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ",
          meaning: "They didn't kill him or crucify him, but it appeared so",
          explanation: "Jesus not killed - made to appear so",
          meaningUrdu: "انہوں نے نہ مارا نہ سولی دی بلکہ ان کو شبہ ہوا",
          verseRef: "4:157"
        },
        {
          term: "بَل رَّفَعَهُ اللَّهُ إِلَيْهِ",
          meaning: "Rather, Allah raised him to Himself",
          explanation: "Jesus raised to Allah alive",
          meaningUrdu: "بلکہ اللہ نے اسے اپنی طرف اٹھا لیا",
          verseRef: "4:158"
        }
      ]
    },

    shirk: {
      name: "Shirk and Forgiveness",
      nameArabic: "الشرك والمغفرة",
      nameUrdu: "شرک اور مغفرت",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        {
          term: "إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ",
          meaning: "Allah doesn't forgive associating partners with Him",
          explanation: "Shirk - unforgivable if died upon",
          meaningUrdu: "اللہ اپنے ساتھ شرک کو نہیں بخشتا",
          verseRef: "4:48, 4:116"
        },
        {
          term: "وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ",
          meaning: "But forgives what is less for whom He wills",
          explanation: "All other sins potentially forgivable",
          meaningUrdu: "اس کے علاوہ جسے چاہے بخش دے",
          verseRef: "4:48, 4:116"
        },
        {
          term: "وَمَن يُشْرِكْ بِاللَّهِ فَقَدِ افْتَرَىٰ إِثْمًا عَظِيمًا",
          meaning: "Whoever associates - has fabricated great sin",
          explanation: "Shirk = inventing lies against Allah",
          meaningUrdu: "جس نے شرک کیا اس نے بڑا گناہ گھڑا",
          verseRef: "4:48"
        },
        {
          term: "وَمَن يُشْرِكْ بِاللَّهِ فَقَدْ ضَلَّ ضَلَالًا بَعِيدًا",
          meaning: "Whoever associates has strayed far astray",
          explanation: "Shirk = ultimate misguidance",
          meaningUrdu: "جس نے شرک کیا وہ دور کی گمراہی میں گیا",
          verseRef: "4:116"
        },
        {
          term: "إِن يَدْعُونَ مِن دُونِهِ إِلَّا إِنَاثًا",
          meaning: "They invoke besides Him only females",
          explanation: "Pagans worshipped female deities",
          meaningUrdu: "وہ اس کے سوا صرف عورتوں کو پکارتے ہیں",
          verseRef: "4:117"
        },
        {
          term: "وَإِن يَدْعُونَ إِلَّا شَيْطَانًا مَّرِيدًا",
          meaning: "They invoke only a rebellious Satan",
          explanation: "Idol worship = Satan worship",
          meaningUrdu: "اور صرف سرکش شیطان کو پکارتے ہیں",
          verseRef: "4:117"
        }
      ]
    },

    tawbah: {
      name: "Repentance and Forgiveness",
      nameArabic: "التوبة والمغفرة",
      nameUrdu: "توبہ اور بخشش",
      color: "#22C55E",
      icon: "Heart",
      concepts: [
        {
          term: "إِنَّمَا التَّوْبَةُ عَلَى اللَّهِ لِلَّذِينَ يَعْمَلُونَ السُّوءَ بِجَهَالَةٍ",
          meaning: "Repentance accepted for those who do wrong in ignorance",
          explanation: "Sins done without knowledge - repentance accepted",
          meaningUrdu: "توبہ اللہ پر ان کے لیے ہے جو جہالت سے برائی کریں",
          verseRef: "4:17"
        },
        {
          term: "ثُمَّ يَتُوبُونَ مِن قَرِيبٍ",
          meaning: "Then repent soon after",
          explanation: "Repent quickly - don't delay",
          meaningUrdu: "پھر جلد توبہ کریں",
          verseRef: "4:17"
        },
        {
          term: "فَأُولَٰئِكَ يَتُوبُ اللَّهُ عَلَيْهِمْ",
          meaning: "Allah accepts their repentance",
          explanation: "Allah turns in mercy to such people",
          meaningUrdu: "یہ ہیں جن کی توبہ اللہ قبول کرتا ہے",
          verseRef: "4:17"
        },
        {
          term: "وَلَيْسَتِ التَّوْبَةُ لِلَّذِينَ يَعْمَلُونَ السَّيِّئَاتِ",
          meaning: "Repentance not for those who do evil",
          explanation: "Deathbed repentance after lifelong sin",
          meaningUrdu: "ان کے لیے توبہ نہیں جو برائیاں کرتے رہیں",
          verseRef: "4:18"
        },
        {
          term: "حَتَّىٰ إِذَا حَضَرَ أَحَدَهُمُ الْمَوْتُ قَالَ إِنِّي تُبْتُ الْآنَ",
          meaning: "Until death comes and says: Now I repent",
          explanation: "Too late when death is imminent",
          meaningUrdu: "یہاں تک کہ موت آئے تو کہے: اب میں توبہ کرتا ہوں",
          verseRef: "4:18"
        },
        {
          term: "وَلَا الَّذِينَ يَمُوتُونَ وَهُمْ كُفَّارٌ",
          meaning: "Nor those who die as disbelievers",
          explanation: "No repentance after death",
          meaningUrdu: "نہ ان کے لیے جو کفر پر مریں",
          verseRef: "4:18"
        }
      ]
    },

    prophethood: {
      name: "Prophethood and Messengers",
      nameArabic: "النبوة والرسل",
      nameUrdu: "نبوت اور رسالت",
      color: "#A855F7",
      icon: "Star",
      concepts: [
        {
          term: "إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا أَوْحَيْنَا إِلَىٰ نُوحٍ",
          meaning: "We revealed to you as We revealed to Nuh",
          explanation: "Same mode of revelation to all prophets",
          meaningUrdu: "ہم نے تیری طرف وحی کی جیسے نوح کی طرف کی",
          verseRef: "4:163"
        },
        {
          term: "وَالنَّبِيِّينَ مِن بَعْدِهِ",
          meaning: "And prophets after him",
          explanation: "Chain of prophets continued",
          meaningUrdu: "اور ان کے بعد نبیوں کی طرف",
          verseRef: "4:163"
        },
        {
          term: "وَأَوْحَيْنَا إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ وَيَعْقُوبَ",
          meaning: "We revealed to Ibrahim, Ismail, Ishaq, Yaqub",
          explanation: "Patriarchs all received revelation",
          meaningUrdu: "ابراہیم، اسماعیل، اسحاق، یعقوب کی طرف وحی کی",
          verseRef: "4:163"
        },
        {
          term: "وَالْأَسْبَاطِ وَعِيسَىٰ وَأَيُّوبَ وَيُونُسَ وَهَارُونَ وَسُلَيْمَانَ",
          meaning: "And the tribes, Jesus, Job, Jonah, Aaron, Solomon",
          explanation: "Wide range of prophets named",
          meaningUrdu: "اور اسباط، عیسیٰ، ایوب، یونس، ہارون، سلیمان",
          verseRef: "4:163"
        },
        {
          term: "وَآتَيْنَا دَاوُودَ زَبُورًا",
          meaning: "We gave David the Zabur (Psalms)",
          explanation: "Dawud received scripture",
          meaningUrdu: "اور داؤد کو زبور دی",
          verseRef: "4:163"
        },
        {
          term: "رُّسُلًا قَدْ قَصَصْنَاهُمْ عَلَيْكَ مِن قَبْلُ",
          meaning: "Messengers We told you about before",
          explanation: "Some prophets named in earlier surahs",
          meaningUrdu: "رسول جن کا ذکر پہلے کر چکے",
          verseRef: "4:164"
        },
        {
          term: "وَرُسُلًا لَّمْ نَقْصُصْهُمْ عَلَيْكَ",
          meaning: "And messengers We haven't told you about",
          explanation: "Many more prophets unnamed",
          meaningUrdu: "اور رسول جن کا ذکر نہیں کیا",
          verseRef: "4:164"
        },
        {
          term: "وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا",
          meaning: "And Allah spoke to Musa directly",
          explanation: "Musa's unique honor - direct speech",
          meaningUrdu: "اور اللہ نے موسیٰ سے کلام کیا کلام",
          verseRef: "4:164"
        },
        {
          term: "رُّسُلًا مُّبَشِّرِينَ وَمُنذِرِينَ",
          meaning: "Messengers giving good news and warning",
          explanation: "Dual role: hope and warning",
          meaningUrdu: "رسول خوشخبری دینے والے اور ڈرانے والے",
          verseRef: "4:165"
        },
        {
          term: "لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى اللَّهِ حُجَّةٌ بَعْدَ الرُّسُلِ",
          meaning: "So people have no argument against Allah after messengers",
          explanation: "Prophets remove excuse of ignorance",
          meaningUrdu: "تاکہ رسولوں کے بعد لوگوں کو اللہ پر حجت نہ رہے",
          verseRef: "4:165"
        }
      ]
    },

    kalalahFinal: {
      name: "Final Inheritance Ruling (Kalalah)",
      nameArabic: "حكم الكلالة الختامي",
      nameUrdu: "کلالہ کا آخری حکم",
      color: "#0D9488",
      icon: "FileText",
      concepts: [
        {
          term: "يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلَالَةِ",
          meaning: "They ask you for ruling. Say: Allah gives you fatwa about kalalah",
          explanation: "Final verse revealed - completes inheritance law",
          meaningUrdu: "تجھ سے فتویٰ پوچھتے ہیں۔ کہو: اللہ کلالہ کے بارے میں فتویٰ دیتا ہے",
          verseRef: "4:176"
        },
        {
          term: "إِنِ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ",
          meaning: "If a man dies without a child",
          explanation: "Person with no direct descendants",
          meaningUrdu: "اگر کوئی مرے جس کی اولاد نہ ہو",
          verseRef: "4:176"
        },
        {
          term: "وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ",
          meaning: "And he has a sister, she gets half",
          explanation: "Single full/paternal sister gets 1/2",
          meaningUrdu: "اور اس کی ایک بہن ہو تو اسے آدھا",
          verseRef: "4:176"
        },
        {
          term: "وَهُوَ يَرِثُهَا إِن لَّمْ يَكُن لَّهَا وَلَدٌ",
          meaning: "And he inherits her if she has no child",
          explanation: "Brother inherits all from childless sister",
          meaningUrdu: "اور وہ اس کا وارث ہوگا اگر اس کی اولاد نہ ہو",
          verseRef: "4:176"
        },
        {
          term: "فَإِن كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ",
          meaning: "If two sisters, they get two-thirds",
          explanation: "Two or more sisters share 2/3",
          meaningUrdu: "اگر دو بہنیں ہوں تو انہیں دو تہائی",
          verseRef: "4:176"
        },
        {
          term: "وَإِن كَانُوا إِخْوَةً رِّجَالًا وَنِسَاءً",
          meaning: "If brothers and sisters, men and women",
          explanation: "Mixed siblings - male gets double female share",
          meaningUrdu: "اگر بہن بھائی مرد و عورت ہوں",
          verseRef: "4:176"
        },
        {
          term: "فَلِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ",
          meaning: "Male gets share of two females",
          explanation: "2:1 ratio applies",
          meaningUrdu: "مرد کو دو عورتوں کے برابر",
          verseRef: "4:176"
        },
        {
          term: "يُبَيِّنُ اللَّهُ لَكُمْ أَن تَضِلُّوا",
          meaning: "Allah clarifies so you don't go astray",
          explanation: "Divine clarity prevents error",
          meaningUrdu: "اللہ تمہیں بتاتا ہے تاکہ گمراہ نہ ہو",
          verseRef: "4:176"
        },
        {
          term: "وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
          meaning: "Allah knows everything",
          explanation: "Closing - Allah's perfect knowledge",
          meaningUrdu: "اور اللہ ہر چیز جاننے والا ہے",
          verseRef: "4:176"
        }
      ]
    }
  },

  relationships: [
    { from: "خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ", to: "وَالْأَرْحَامَ", type: "foundation", description: "Single origin establishes kinship obligations" },
    { from: "وَآتُوا الْيَتَامَىٰ أَمْوَالَهُمْ", to: "إِنَّمَا يَأْكُلُونَ نَارًا", type: "consequence", description: "Stealing orphan wealth leads to hellfire" },
    { from: "لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ", to: "الرِّجَالُ قَوَّامُونَ", type: "explanation", description: "Greater share due to financial responsibility" },
    { from: "فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً", to: "وَلَن تَسْتَطِيعُوا أَن تَعْدِلُوا", type: "elaboration", description: "Justice requirement explained - perfect equality impossible" },
    { from: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ", to: "وَأَخَذْنَ مِنكُم مِّيثَاقًا غَلِيظًا", type: "foundation", description: "Kind treatment based on solemn covenant" },
    { from: "أَطِيعُوا اللَّهَ", to: "مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ", type: "equivalence", description: "Obeying Prophet equals obeying Allah" },
    { from: "إِنَّ الْمُنَافِقِينَ يُخَادِعُونَ", to: "فِي الدَّرْكِ الْأَسْفَلِ مِنَ النَّارِ", type: "consequence", description: "Hypocrisy leads to lowest Hell" },
    { from: "لَا يَغْفِرُ أَن يُشْرَكَ بِهِ", to: "وَيَغْفِرُ مَا دُونَ ذَٰلِكَ", type: "contrast", description: "Shirk unforgivable vs other sins forgivable" },
    { from: "إِنَّمَا التَّوْبَةُ", to: "وَلَيْسَتِ التَّوْبَةُ", type: "contrast", description: "Accepted repentance vs rejected deathbed repentance" },
    { from: "وَمَا قَتَلُوهُ", to: "بَل رَّفَعَهُ اللَّهُ", type: "correction", description: "Jesus not killed but raised" },
    { from: "يَسْتَفْتُونَكَ", to: "يُبَيِّنُ اللَّهُ لَكُمْ", type: "fulfillment", description: "Question answered with divine clarity" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Human Unity", verses: "4:1", description: "All humanity from single soul - foundation of equality" },
      { stage: 2, theme: "Orphan Rights", verses: "4:2-10", description: "Protecting orphans and their wealth" },
      { stage: 3, theme: "Inheritance Laws", verses: "4:11-14", description: "Detailed shares for heirs - Allah's limits" },
      { stage: 4, theme: "Sin and Repentance", verses: "4:15-18", description: "Punishment for fahishah, repentance conditions" },
      { stage: 5, theme: "Women's Treatment", verses: "4:19-21", description: "Live with wives honorably, don't take mahr" },
      { stage: 6, theme: "Prohibited Relations", verses: "4:22-24", description: "Forbidden marriage categories" },
      { stage: 7, theme: "Marriage Guidelines", verses: "4:25-28", description: "Marrying slave women if unable to marry free" },
      { stage: 8, theme: "Consuming Wealth", verses: "4:29-33", description: "Don't consume wealth unjustly" },
      { stage: 9, theme: "Marital Disputes", verses: "4:34-35", description: "Handling marital discord and arbitration" },
      { stage: 10, theme: "Worship and Kindness", verses: "4:36-42", description: "Worship Allah, be kind to all, avoid miserliness" },
      { stage: 11, theme: "Purity and Prayer", verses: "4:43-46", description: "Conditions for prayer, tahara" },
      { stage: 12, theme: "Shirk Warning", verses: "4:47-57", description: "Shirk unforgivable, rewards for believers" },
      { stage: 13, theme: "Justice and Authority", verses: "4:58-70", description: "Trust, justice, obeying authorities, hypocrisy" },
      { stage: 14, theme: "Fighting", verses: "4:71-76", description: "Fighting in Allah's cause vs taghut" },
      { stage: 15, theme: "Death and Caution", verses: "4:77-84", description: "Death inevitable, Prophet's mission" },
      { stage: 16, theme: "Intercession", verses: "4:85-91", description: "Good and bad intercession, relations with others" },
      { stage: 17, theme: "Murder Rulings", verses: "4:92-96", description: "Accidental vs intentional killing" },
      { stage: 18, theme: "Migration", verses: "4:97-100", description: "Obligation to migrate when possible" },
      { stage: 19, theme: "Prayer in Danger", verses: "4:101-104", description: "Shortened and fear prayer" },
      { stage: 20, theme: "Justice in Disputes", verses: "4:105-115", description: "Don't defend betrayers, seeking forgiveness" },
      { stage: 21, theme: "Shirk and Satan", verses: "4:116-126", description: "Shirk warning, Satan's promises" },
      { stage: 22, theme: "Women's Justice", verses: "4:127-134", description: "Justice for orphan women, wives" },
      { stage: 23, theme: "Faith Requirements", verses: "4:135-140", description: "Justice even against self, don't sit with mockers" },
      { stage: 24, theme: "Hypocrites", verses: "4:141-147", description: "Traits of hypocrites, their fate" },
      { stage: 25, theme: "Speech and Gratitude", verses: "4:148-152", description: "Good speech, belief in all prophets" },
      { stage: 26, theme: "People of Book", verses: "4:153-162", description: "Their demands, Jesus's story" },
      { stage: 27, theme: "Prophets", verses: "4:163-166", description: "Chain of prophets, revelation" },
      { stage: 28, theme: "Jesus Clarified", verses: "4:167-175", description: "Jesus as messenger, trinity rejected" },
      { stage: 29, theme: "Final Inheritance", verses: "4:176", description: "Kalalah ruling - surah conclusion" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Respect kinship ties", how: "Maintain family relationships, help relatives", verse: "4:1" },
      { principle: "Protect orphan wealth", how: "Don't mix their property with yours, don't consume wastefully", verse: "4:2-6" },
      { principle: "Follow inheritance law", how: "Divide estates according to fixed shares, pay debts first", verse: "4:11-12" },
      { principle: "Treat wives kindly", how: "Ma'ruf - good treatment as norm, don't take back mahr", verse: "4:19" },
      { principle: "Avoid prohibited marriages", how: "Know the list, include milk relations", verse: "4:23" },
      { principle: "Resolve disputes properly", how: "Advice, then separation, then arbitration - escalate gradually", verse: "4:34-35" },
      { principle: "Obey authorities", how: "Follow Muslim leaders unless they command sin", verse: "4:59" },
      { principle: "Testify truthfully", how: "Even against yourself and family", verse: "4:135" },
      { principle: "Repent quickly", how: "Don't delay - deathbed repentance not accepted", verse: "4:17-18" },
      { principle: "Migrate if needed", how: "Leave oppression when able, Allah's earth is vast", verse: "4:97-100" }
    ]
  },

  uniqueInsight: {
    title: "The Surah of Social Justice",
    insight: "An-Nisa is the Quran's foundational text on social justice, particularly for the vulnerable: women, orphans, and the weak. It opens by reminding us that all humanity came from a single soul - establishing the basis for human equality. The surah then systematically addresses those who were most exploited in pre-Islamic Arabia: orphans whose wealth was stolen, women who were inherited like property, and the weak who had no voice. The detailed inheritance laws were revolutionary - giving women rights to inherit 1400 years before the West. The repeated emphasis on justice (qist, 'adl) - even against one's own family - creates a society where the powerful cannot exploit the weak. The surah also addresses the hypocrites extensively because hypocrisy is the greatest threat to social justice: those who appear righteous while exploiting others. By ending with the kalalah ruling, the surah completes the legal framework for wealth distribution, ensuring no Muslim dies without clear heirs."
  },

  linguisticFeatures: {
    features: [
      { feature: "Opening with Taqwa", example: "وَاتَّقُوا اللَّهَ", effect: "God-consciousness frames all rulings that follow" },
      { feature: "Ya ayyuhal-ladhina amanu", example: "يَا أَيُّهَا الَّذِينَ آمَنُوا", effect: "Direct address to believers - appears 8+ times" },
      { feature: "Mathematical precision", example: "نِصْف، ثُلُث، رُبُع، سُدُس", effect: "Exact fractions leave no ambiguity in inheritance" },
      { feature: "Hudud Allah", example: "تِلْكَ حُدُودُ اللَّهِ", effect: "Boundaries/limits - emphasizes fixed nature of laws" },
      { feature: "Conditional statements", example: "فَإِن كَانَ... فَإِن لَّمْ يَكُن", effect: "Covers all scenarios in inheritance" },
      { feature: "Question-answer format", example: "يَسْتَفْتُونَكَ... قُلِ اللَّهُ يُفْتِيكُمْ", effect: "Divine response to real questions" }
    ]
  },

  crossReferences: {
    references: [
      { reference: "2:180-182", topic: "Bequests", connection: "Wasiyyah mentioned, An-Nisa gives details" },
      { reference: "2:221", topic: "Marriage to polytheists", connection: "Al-Baqarah prohibits, An-Nisa lists all prohibitions" },
      { reference: "2:228-232", topic: "Divorce", connection: "Al-Baqarah on divorce, An-Nisa on marriage contracts" },
      { reference: "3:195", topic: "Gender equality", connection: "Men and women from each other, An-Nisa elaborates" },
      { reference: "5:32", topic: "Sanctity of life", connection: "Killing one = killing all, An-Nisa on murder" },
      { reference: "24:2-9", topic: "Sexual crimes", connection: "An-Nisa's early rulings completed in An-Nur" },
      { reference: "33:6", topic: "Prophet's wives", connection: "Mothers of believers, related to An-Nisa's marriage laws" }
    ]
  }
};

export default ONTOLOGY;
