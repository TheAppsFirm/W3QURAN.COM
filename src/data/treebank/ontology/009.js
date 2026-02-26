/**
 * Surah At-Tawbah (9) - Ontology of Quranic Concepts
 * The Repentance / Bara'ah (Disavowal)
 *
 * Theme: Disavowal from polytheists, exposure of hypocrites, Tabuk expedition, divine forgiveness
 * Revelation: Medinan (one of the last surahs revealed)
 * Ayahs: 129
 *
 * UNIQUE: Only surah without Bismillah at the start
 * - Some say: continuation of Surah 8 (Al-Anfal)
 * - Some say: severe tone of disavowal incompatible with "mercy" opening
 * - Some say: the secret died with Uthman (RA) who compiled the Quran
 */

export const ONTOLOGY = {
  surahId: 9,
  surahName: "At-Tawbah",
  surahNameArabic: "التوبة",
  alternateNames: ["Bara'ah (البراءة) - The Disavowal", "Al-Fadiha (الفاضحة) - The Exposer", "Al-Muqashqisha - The Remover of Hypocrisy"],
  revelationType: "Madani",
  totalAyahs: 129,
  noBismillah: true,
  reasonNoBismillah: {
    en: "This is the only surah without Bismillah. Scholars give reasons: (1) It's a continuation of Al-Anfal, (2) Its severe tone of war and disavowal doesn't suit 'In the name of Allah, the Most Merciful', (3) The matter was not definitively settled before the Prophet's death.",
    ur: "یہ واحد سورت ہے جس میں بسم اللہ نہیں۔ علماء کی وجوہات: (1) سورۃ الانفال کا تسلسل ہے، (2) جنگ اور براءت کا سخت لہجہ 'رحمٰن رحیم' سے مناسب نہیں، (3) نبی ﷺ کی وفات سے پہلے یہ معاملہ طے نہیں ہوا۔"
  },

  categories: {
    // 1. DISAVOWAL FROM POLYTHEISTS (Bara'ah)
    disavowalFromPolytheists: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Disavowal from Polytheists",
      nameUr: "مشرکین سے براءت",
      nameArabic: "البراءة من المشركين",
      description: { en: "Declaration of immunity from treaty obligations with those who broke their covenants", ur: "ان لوگوں سے معاہدات کی ذمہ داریوں سے براءت کا اعلان جنہوں نے اپنے عہد توڑ دیے" },
      verses: "9:1-12",
      concepts: [
        {
          term: "بَرَاءَةٌ مِّنَ اللَّهِ",
          meaning: { en: "Disavowal from Allah", ur: "اللہ کی طرف سے براءت" },
          explanation: { en: "Ultimate severance - Allah Himself declares freedom from polytheists who broke treaties", ur: "حتمی قطع تعلق - اللہ خود ان مشرکین سے براءت کا اعلان فرماتا ہے جنہوں نے معاہدے توڑے" },
          verseRef: "9:1"
        },
        {
          term: "فَسِيحُوا فِي الْأَرْضِ أَرْبَعَةَ أَشْهُرٍ",
          meaning: { en: "Travel freely for four months", ur: "چار مہینے زمین میں آزادانہ چلو پھرو" },
          explanation: { en: "Grace period: Dhul-Qa'dah, Dhul-Hijjah, Muharram, Safar - then treaties void", ur: "مہلت: ذوالقعدہ، ذوالحجہ، محرم، صفر - پھر معاہدے ختم" },
          verseRef: "9:2"
        },
        {
          term: "أَذَانٌ مِّنَ اللَّهِ",
          meaning: { en: "Announcement from Allah", ur: "اللہ کی طرف سے اعلان" },
          explanation: { en: "Public proclamation at Hajj by Ali (RA) - Allah and His Messenger are free from polytheists", ur: "حج میں علی (رض) کا عوامی اعلان - اللہ اور اس کے رسول مشرکین سے بری ہیں" },
          verseRef: "9:3"
        },
        {
          term: "فَإِذَا انسَلَخَ الْأَشْهُرُ الْحُرُمُ",
          meaning: { en: "When sacred months have passed", ur: "جب حرمت والے مہینے گزر جائیں" },
          explanation: { en: "After grace period, active measures against treaty-breakers begin", ur: "مہلت کے بعد عہد توڑنے والوں کے خلاف فعال اقدامات شروع" },
          verseRef: "9:5"
        },
        {
          term: "فَاقْتُلُوا الْمُشْرِكِينَ",
          meaning: { en: "Then kill the polytheists", ur: "تو مشرکوں کو قتل کرو" },
          explanation: { en: "Verse of the Sword - but immediately followed by conditions and exceptions", ur: "آیت السیف - لیکن فوراً شرائط اور استثناءات آتے ہیں" },
          verseRef: "9:5"
        },
        {
          term: "وَإِنْ أَحَدٌ مِّنَ الْمُشْرِكِينَ اسْتَجَارَكَ فَأَجِرْهُ",
          meaning: { en: "If a polytheist seeks protection, protect him", ur: "اگر کوئی مشرک تم سے پناہ مانگے تو اسے پناہ دو" },
          explanation: { en: "Even amid war declaration, protection (jiwar) is granted to those seeking it", ur: "جنگ کے اعلان کے باوجود، پناہ مانگنے والوں کو جوار (حفاظت) دی جائے" },
          verseRef: "9:6"
        },
        {
          term: "لَا أَيْمَانَ لَهُمْ",
          meaning: { en: "No faith in their oaths", ur: "ان کی قسموں میں کوئی وفا نہیں" },
          explanation: { en: "Their covenants are worthless - they break them repeatedly", ur: "ان کے عہد بے قیمت ہیں - وہ بار بار توڑتے ہیں" },
          verseRef: "9:12"
        }
      ]
    },

    // 2. FIGHTING IN ALLAH'S CAUSE
    jihad: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Striving in Allah's Cause",
      nameUr: "اللہ کی راہ میں جدوجہد",
      nameArabic: "الجهاد في سبيل الله",
      description: { en: "Commands regarding fighting those who violate treaties and oppress believers", ur: "ان لوگوں سے لڑنے کے احکام جو معاہدات کی خلاف ورزی کریں اور مومنوں پر ظلم کریں" },
      verses: "9:13-24, 9:36-37, 9:38-42, 9:73, 9:81, 9:86-89",
      concepts: [
        {
          term: "أَلَا تُقَاتِلُونَ قَوْمًا نَّكَثُوا أَيْمَانَهُمْ",
          meaning: { en: "Will you not fight those who broke their oaths?", ur: "کیا تم ان لوگوں سے نہیں لڑو گے جنہوں نے اپنی قسمیں توڑ دیں؟" },
          explanation: { en: "Rhetorical question - they broke treaties, expelled the Prophet, attacked first", ur: "سوالِ انکاری - انہوں نے معاہدے توڑے، نبی کو نکالا، پہلے حملہ کیا" },
          verseRef: "9:13"
        },
        {
          term: "قَاتِلُوهُمْ يُعَذِّبْهُمُ اللَّهُ بِأَيْدِيكُمْ",
          meaning: { en: "Fight them - Allah will punish them through your hands", ur: "ان سے لڑو - اللہ تمہارے ہاتھوں سے انہیں سزا دے گا" },
          explanation: { en: "Believers as instruments of divine justice", ur: "مومنین الٰہی انصاف کے آلات کے طور پر" },
          verseRef: "9:14"
        },
        {
          term: "انفِرُوا خِفَافًا وَثِقَالًا",
          meaning: { en: "March forth light and heavy", ur: "نکلو ہلکے اور بھاری" },
          explanation: { en: "Young or old, rich or poor, mounted or on foot - everyone must respond", ur: "جوان ہو یا بوڑھا، امیر ہو یا غریب، سوار ہو یا پیدل - سب کو نکلنا ہے" },
          verseRef: "9:41"
        },
        {
          term: "جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ",
          meaning: { en: "Strive against disbelievers and hypocrites", ur: "کافروں اور منافقوں کے خلاف جہاد کرو" },
          explanation: { en: "Two fronts: external (kuffar) and internal (munafiqeen)", ur: "دو محاذ: بیرونی (کفار) اور اندرونی (منافقین)" },
          verseRef: "9:73"
        },
        {
          term: "يُجَاهِدُونَ بِأَمْوَالِهِمْ وَأَنفُسِهِمْ",
          meaning: { en: "Strive with wealth and lives", ur: "اپنے مالوں اور جانوں سے جہاد کرتے ہیں" },
          explanation: { en: "Complete jihad: financial support AND physical participation", ur: "مکمل جہاد: مالی مدد اور جسمانی شرکت دونوں" },
          verseRef: "9:20"
        }
      ]
    },

    // 3. HYPOCRITES EXPOSED (Al-Munafiqun)
    hypocritesExposed: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Hypocrites Exposed",
      nameUr: "منافقین کا پردہ فاش",
      nameArabic: "فضيحة المنافقين",
      description: { en: "This surah is called 'Al-Fadiha' (The Exposer) because it unveils hypocrites' true nature", ur: "اس سورت کو 'الفاضحة' (بے نقاب کرنے والی) کہتے ہیں کیونکہ یہ منافقوں کی اصل حقیقت کھولتی ہے" },
      verses: "9:42-57, 9:61-70, 9:73-78, 9:81-85, 9:94-98, 9:101-110",
      concepts: [
        {
          term: "لَوْ كَانَ عَرَضًا قَرِيبًا",
          meaning: { en: "If it were easy gain", ur: "اگر فائدہ آسان ہوتا" },
          explanation: { en: "Hypocrites only join when benefit is obvious and hardship minimal", ur: "منافقین صرف تب شامل ہوتے ہیں جب فائدہ واضح اور مشقت کم ہو" },
          verseRef: "9:42"
        },
        {
          term: "سَيَحْلِفُونَ بِاللَّهِ",
          meaning: { en: "They will swear by Allah", ur: "وہ اللہ کی قسمیں کھائیں گے" },
          explanation: { en: "Characteristic: false oaths to appear sincere", ur: "خصوصیت: مخلص دکھائی دینے کے لیے جھوٹی قسمیں" },
          verseRef: "9:42"
        },
        {
          term: "لَوِ اسْتَطَعْنَا لَخَرَجْنَا مَعَكُمْ",
          meaning: { en: "If we could, we would go with you", ur: "اگر ہم سے ہو سکتا تو ہم تمہارے ساتھ نکلتے" },
          explanation: { en: "Excuses upon excuses - destroying their own souls with lies", ur: "بہانوں پر بہانے - جھوٹ سے اپنی ہی جانوں کو ہلاک کر رہے ہیں" },
          verseRef: "9:42"
        },
        {
          term: "ائْذَن لِّي وَلَا تَفْتِنِّي",
          meaning: { en: "Allow me to stay and don't put me to trial", ur: "مجھے اجازت دیں اور مجھے فتنے میں نہ ڈالیں" },
          explanation: { en: "Al-Jadd's excuse: 'Roman women will tempt me' - while IN trial already", ur: "الجد کا بہانہ: 'رومی عورتیں مجھے آزمائش میں ڈالیں گی' - جبکہ وہ پہلے سے فتنے میں ہے" },
          verseRef: "9:49"
        },
        {
          term: "قُلْ هَلْ تَرَبَّصُونَ بِنَا إِلَّا إِحْدَى الْحُسْنَيَيْنِ",
          meaning: { en: "Do you await for us except one of two good things?", ur: "کیا تم ہمارے لیے دو اچھائیوں میں سے ایک کے سوا کسی اور کا انتظار کر رہے ہو؟" },
          explanation: { en: "Victory or martyrdom - believers win either way. Hypocrites cannot understand this", ur: "فتح یا شہادت - مومن دونوں صورتوں میں کامیاب۔ منافقین یہ سمجھ نہیں سکتے" },
          verseRef: "9:52"
        },
        {
          term: "لَا تُقْبَلُ مِنْهُمْ نَفَقَاتُهُمْ",
          meaning: { en: "Their spending will not be accepted", ur: "ان کے خرچ قبول نہیں کیے جائیں گے" },
          explanation: { en: "Charity without faith is rejected - inner corruption nullifies outer deeds", ur: "ایمان کے بغیر صدقہ مسترد ہے - باطنی فساد ظاہری اعمال کو باطل کر دیتا ہے" },
          verseRef: "9:53-54"
        },
        {
          term: "مُذَبْذَبِينَ بَيْنَ ذَٰلِكَ",
          meaning: { en: "Wavering between this and that", ur: "ادھر ادھر ڈولتے رہتے ہیں" },
          explanation: { en: "Neither here nor there - their defining characteristic", ur: "نہ ادھر کے نہ اُدھر کے - ان کی امتیازی خصوصیت" },
          verseRef: "9:57"
        },
        {
          term: "يَحْذَرُ الْمُنَافِقُونَ أَن تُنَزَّلَ",
          meaning: { en: "Hypocrites fear a surah revealing them", ur: "منافقین ڈرتے ہیں کہ کوئی سورت ان کو بے نقاب کر دے" },
          explanation: { en: "This very surah is their nightmare - exposing what's in their hearts", ur: "یہی سورت ان کا ڈراؤنا خواب ہے - ان کے دلوں کی باتیں کھولتی ہے" },
          verseRef: "9:64"
        },
        {
          term: "قُلِ اسْتَهْزِئُوا",
          meaning: { en: "Say: Go on mocking", ur: "کہو: مذاق اڑاتے رہو" },
          explanation: { en: "When caught, they claim 'just joking' - mocking Allah, verses, Messenger", ur: "جب پکڑے جائیں تو کہتے ہیں 'ہم تو مذاق کر رہے تھے' - اللہ، آیات اور رسول کا مذاق" },
          verseRef: "9:65"
        },
        {
          term: "نَسُوا اللَّهَ فَنَسِيَهُمْ",
          meaning: { en: "They forgot Allah, so He forgot them", ur: "انہوں نے اللہ کو بھلا دیا تو اللہ نے انہیں بھلا دیا" },
          explanation: { en: "Divine abandonment - consequence of persistent hypocrisy", ur: "الٰہی ترک - مسلسل منافقت کا نتیجہ" },
          verseRef: "9:67"
        },
        {
          term: "الْمُنَافِقُونَ وَالْمُنَافِقَاتُ بَعْضُهُم مِّن بَعْضٍ",
          meaning: { en: "Hypocrite men and women are of one another", ur: "منافق مرد اور منافق عورتیں ایک دوسرے سے ہیں" },
          explanation: { en: "They form a united front of evil - commanding wrong, forbidding good", ur: "وہ برائی کا متحد محاذ بناتے ہیں - بُرائی کا حکم دیتے اور نیکی سے روکتے ہیں" },
          verseRef: "9:67"
        },
        {
          term: "فَرِحَ الْمُخَلَّفُونَ بِمَقْعَدِهِمْ",
          meaning: { en: "Those who stayed behind rejoiced", ur: "پیچھے رہ جانے والے خوش ہوئے" },
          explanation: { en: "Happy to avoid Tabuk expedition - preferring comfort over obedience", ur: "تبوک مہم سے بچ کر خوش - اطاعت پر آرام کو ترجیح" },
          verseRef: "9:81"
        },
        {
          term: "وَمِنَ الْأَعْرَابِ مَن يَتَّخِذُ مَا يُنفِقُ مَغْرَمًا",
          meaning: { en: "Among Bedouins are those who consider spending a loss", ur: "دیہاتیوں میں سے بعض خرچ کو تاوان سمجھتے ہیں" },
          explanation: { en: "Give reluctantly, waiting for misfortune to strike believers", ur: "بے دلی سے دیتے ہیں، مومنوں پر مصیبت آنے کا انتظار کرتے ہیں" },
          verseRef: "9:98"
        },
        {
          term: "مَسْجِدًا ضِرَارًا",
          meaning: { en: "Mosque of harm (Masjid Dirar)", ur: "نقصان والی مسجد (مسجد ضرار)" },
          explanation: { en: "Built to divide Muslims, spy post - ordered to be demolished", ur: "مسلمانوں میں تفرقہ ڈالنے اور جاسوسی کے لیے بنائی گئی - گرانے کا حکم دیا گیا" },
          verseRef: "9:107"
        }
      ]
    },

    // 4. TABUK EXPEDITION
    tabukExpedition: {
      color: '#EF4444',
      icon: 'Users',
      name: "The Tabuk Campaign",
      nameUr: "غزوۂ تبوک",
      nameArabic: "غزوة تبوك",
      description: { en: "The difficult expedition in summer heat against the Byzantine army - test of faith", ur: "گرمی کی شدت میں بازنطینی فوج کے خلاف مشکل مہم - ایمان کی آزمائش" },
      verses: "9:38-59, 9:81-83, 9:86-93, 9:117-122",
      concepts: [
        {
          term: "مَا لَكُمْ إِذَا قِيلَ لَكُمُ انفِرُوا",
          meaning: { en: "What is with you when told to march forth?", ur: "تمہیں کیا ہو گیا جب تم سے کہا گیا کہ نکلو؟" },
          explanation: { en: "Rebuke for hesitation when called to Tabuk in extreme heat", ur: "شدید گرمی میں تبوک کی پکار پر ہچکچاہٹ پر ملامت" },
          verseRef: "9:38"
        },
        {
          term: "اثَّاقَلْتُمْ إِلَى الْأَرْضِ",
          meaning: { en: "You clung heavily to the earth", ur: "تم زمین پر بوجھل ہو کر بیٹھ رہے" },
          explanation: { en: "Attached to worldly comfort, reluctant to sacrifice", ur: "دنیاوی آرام سے چمٹے ہوئے، قربانی سے کتراتے ہوئے" },
          verseRef: "9:38"
        },
        {
          term: "إِلَّا تَنفِرُوا يُعَذِّبْكُمْ",
          meaning: { en: "If you don't march, He will punish you", ur: "اگر تم نہ نکلے تو وہ تمہیں عذاب دے گا" },
          explanation: { en: "Severe warning - this was obligatory, not optional", ur: "سخت تنبیہ - یہ فرض تھا، اختیاری نہیں" },
          verseRef: "9:39"
        },
        {
          term: "سَاعَةِ الْعُسْرَةِ",
          meaning: { en: "The hour of difficulty", ur: "مشکل کی گھڑی" },
          explanation: { en: "Tabuk = Jaysh al-Usra (Army of Hardship) - extreme conditions", ur: "تبوک = جیش العسرہ (مشقت کا لشکر) - انتہائی مشکل حالات" },
          verseRef: "9:117"
        },
        {
          term: "لَا يَظْمَأُونَ",
          meaning: { en: "They do not suffer thirst", ur: "وہ پیاسے نہیں ہوتے" },
          explanation: { en: "No thirst, fatigue, hunger, or step in Allah's cause except rewarded", ur: "اللہ کی راہ میں نہ پیاس، نہ تھکاوٹ، نہ بھوک، نہ کوئی قدم مگر اس کا اجر ملتا ہے" },
          verseRef: "9:120"
        },
        {
          term: "وَلَا يَقْطَعُونَ وَادِيًا",
          meaning: { en: "Nor do they cross a valley", ur: "اور نہ وہ کوئی وادی طے کرتے ہیں" },
          explanation: { en: "Every distance traveled is recorded for them", ur: "ہر طے کردہ فاصلہ ان کے لیے لکھا جاتا ہے" },
          verseRef: "9:121"
        }
      ]
    },

    // 5. THE THREE WHO STAYED BEHIND
    threeWhoStayed: {
      color: '#F59E0B',
      icon: 'Star',
      name: "The Three Who Were Left Behind",
      nameUr: "تین پیچھے رہ جانے والے",
      nameArabic: "الثلاثة الذين خُلِّفوا",
      description: { en: "Ka'b ibn Malik, Murarah ibn Rabi', Hilal ibn Umayyah - sincere believers who made a mistake", ur: "کعب بن مالک، مرارہ بن ربیع، ہلال بن امیہ - سچے مومن جنہوں نے غلطی کی" },
      verses: "9:118-119",
      concepts: [
        {
          term: "وَعَلَى الثَّلَاثَةِ الَّذِينَ خُلِّفُوا",
          meaning: { en: "And upon the three who were left behind", ur: "اور ان تین لوگوں پر جو پیچھے چھوڑ دیے گئے" },
          explanation: { en: "Unlike hypocrites, they confessed honestly and awaited Allah's decree", ur: "منافقوں کے برعکس، انہوں نے ایمانداری سے اعتراف کیا اور اللہ کے فیصلے کا انتظار کیا" },
          verseRef: "9:118"
        },
        {
          term: "حَتَّىٰ إِذَا ضَاقَتْ عَلَيْهِمُ الْأَرْضُ بِمَا رَحُبَتْ",
          meaning: { en: "Until the earth constrained them despite its vastness", ur: "یہاں تک کہ زمین باوجود کشادگی کے ان پر تنگ ہو گئی" },
          explanation: { en: "50 days of social boycott - even their wives avoided them", ur: "50 دن کا سماجی بائیکاٹ - ان کی بیویوں نے بھی ان سے کنارہ کشی اختیار کی" },
          verseRef: "9:118"
        },
        {
          term: "وَضَاقَتْ عَلَيْهِمْ أَنفُسُهُمْ",
          meaning: { en: "And their souls constrained them", ur: "اور ان کی جانیں ان پر تنگ ہو گئیں" },
          explanation: { en: "Internal anguish worse than external isolation", ur: "اندرونی تکلیف بیرونی تنہائی سے بدتر تھی" },
          verseRef: "9:118"
        },
        {
          term: "ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوبُوا",
          meaning: { en: "Then He turned to them so they could repent", ur: "پھر اللہ نے ان کی طرف رجوع فرمایا تاکہ وہ توبہ کریں" },
          explanation: { en: "Allah's tawbah precedes their tawbah - He enables repentance", ur: "اللہ کی توبہ ان کی توبہ سے پہلے ہے - وہ توبہ کی توفیق دیتا ہے" },
          verseRef: "9:118"
        },
        {
          term: "كُونُوا مَعَ الصَّادِقِينَ",
          meaning: { en: "Be with the truthful", ur: "سچے لوگوں کے ساتھ رہو" },
          explanation: { en: "Key lesson: their honesty saved them while hypocrites' lies damned them", ur: "اہم سبق: ان کی سچائی نے انہیں بچایا جبکہ منافقوں کے جھوٹ نے انہیں تباہ کیا" },
          verseRef: "9:119"
        }
      ]
    },

    // 6. REPENTANCE AND FORGIVENESS
    repentance: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Repentance (Tawbah)",
      nameUr: "توبہ اور بخشش",
      nameArabic: "التوبة والمغفرة",
      description: { en: "Despite severity, the surah's core message is Allah's acceptance of repentance", ur: "سختی کے باوجود، سورت کا بنیادی پیغام اللہ کا توبہ قبول کرنا ہے" },
      verses: "9:3, 9:5, 9:11, 9:15, 9:27, 9:74, 9:102-106, 9:117-118",
      concepts: [
        {
          term: "فَإِن تُبْتُمْ فَهُوَ خَيْرٌ لَّكُمْ",
          meaning: { en: "If you repent, it is better for you", ur: "اگر تم توبہ کرو تو یہ تمہارے لیے بہتر ہے" },
          explanation: { en: "Door always open - even for worst enemies", ur: "دروازہ ہمیشہ کھلا ہے - بدترین دشمنوں کے لیے بھی" },
          verseRef: "9:3"
        },
        {
          term: "فَإِن تَابُوا وَأَقَامُوا الصَّلَاةَ",
          meaning: { en: "If they repent and establish prayer", ur: "اگر وہ توبہ کریں اور نماز قائم کریں" },
          explanation: { en: "Conditions of acceptance: tawbah + salah + zakah = brotherhood", ur: "قبولیت کی شرائط: توبہ + نماز + زکاۃ = بھائی چارہ" },
          verseRef: "9:11"
        },
        {
          term: "ثُمَّ يَتُوبُ اللَّهُ مِن بَعْدِ ذَٰلِكَ عَلَىٰ مَن يَشَاءُ",
          meaning: { en: "Then Allah will accept repentance of whom He wills", ur: "پھر اللہ جس کو چاہے اس کے بعد توبہ قبول فرمائے" },
          explanation: { en: "Post-battle mercy - even prisoners of war can be forgiven", ur: "جنگ کے بعد رحمت - جنگی قیدیوں کو بھی معاف کیا جا سکتا ہے" },
          verseRef: "9:27"
        },
        {
          term: "اعْتَرَفُوا بِذُنُوبِهِمْ",
          meaning: { en: "They confessed their sins", ur: "انہوں نے اپنے گناہوں کا اعتراف کیا" },
          explanation: { en: "Acknowledging sin is first step - mixing good and bad deeds", ur: "گناہ کا اعتراف پہلا قدم ہے - اچھے اور بُرے اعمال کا ملاپ" },
          verseRef: "9:102"
        },
        {
          term: "خَلَطُوا عَمَلًا صَالِحًا وَآخَرَ سَيِّئًا",
          meaning: { en: "They mixed good deeds with bad", ur: "انہوں نے نیک عمل بُرے عمل کے ساتھ ملا دیا" },
          explanation: { en: "Most people's state - not purely good or evil", ur: "اکثر لوگوں کی حالت - نہ خالصتاً نیک نہ بُرے" },
          verseRef: "9:102"
        },
        {
          term: "عَسَى اللَّهُ أَن يَتُوبَ عَلَيْهِمْ",
          meaning: { en: "Perhaps Allah will accept their repentance", ur: "شاید اللہ ان کی توبہ قبول فرما لے" },
          explanation: { en: "'Asa' from Allah = certainty. His 'perhaps' is promise", ur: "اللہ کی طرف سے 'عسیٰ' = یقین۔ اس کا 'شاید' وعدہ ہے" },
          verseRef: "9:102"
        },
        {
          term: "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ",
          meaning: { en: "Take from their wealth charity to purify them", ur: "ان کے مالوں سے صدقہ لو جو انہیں پاک کرے" },
          explanation: { en: "Sadaqah as expiation - charity cleanses sin", ur: "صدقہ بطور کفارہ - خیرات گناہ کو صاف کرتی ہے" },
          verseRef: "9:103"
        },
        {
          term: "وَصَلِّ عَلَيْهِمْ",
          meaning: { en: "And pray for them", ur: "اور ان کے لیے دعا کرو" },
          explanation: { en: "Prophet's dua provides tranquility - intercession for sinners", ur: "نبی ﷺ کی دعا سکون دیتی ہے - گناہگاروں کے لیے شفاعت" },
          verseRef: "9:103"
        },
        {
          term: "إِنَّ صَلَاتَكَ سَكَنٌ لَّهُمْ",
          meaning: { en: "Indeed your prayer is tranquility for them", ur: "بے شک آپ کی دعا ان کے لیے سکون ہے" },
          explanation: { en: "Prophetic prayer brings peace to troubled hearts", ur: "نبوی دعا پریشان دلوں کو سکون دیتی ہے" },
          verseRef: "9:103"
        },
        {
          term: "التَّوَّابُ الرَّحِيمُ",
          meaning: { en: "The Acceptor of Repentance, the Merciful", ur: "توبہ قبول کرنے والا، رحم فرمانے والا" },
          explanation: { en: "Surah named 'Tawbah' ends emphasizing Allah's nature to forgive", ur: "سورت کا نام 'توبہ' ہے اور اللہ کی معاف کرنے کی صفت پر زور دے کر ختم ہوتی ہے" },
          verseRef: "9:104"
        }
      ]
    },

    // 7. PROHIBITIONS AND RULINGS
    prohibitionsRulings: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Legal Rulings",
      nameUr: "شرعی احکام",
      nameArabic: "الأحكام الشرعية",
      description: { en: "Important Islamic laws established in this surah", ur: "اس سورت میں قائم کیے گئے اہم اسلامی احکام" },
      verses: "9:28-29, 9:34-35, 9:36-37, 9:60, 9:80, 9:84, 9:113",
      concepts: [
        {
          term: "إِنَّمَا الْمُشْرِكُونَ نَجَسٌ",
          meaning: { en: "Polytheists are impure", ur: "مشرکین ناپاک ہیں" },
          explanation: { en: "Spiritual impurity - barred from Masjid al-Haram", ur: "روحانی ناپاکی - مسجد الحرام سے ممنوع" },
          verseRef: "9:28"
        },
        {
          term: "فَلَا يَقْرَبُوا الْمَسْجِدَ الْحَرَامَ",
          meaning: { en: "They shall not approach the Sacred Mosque", ur: "وہ مسجد حرام کے قریب نہ آئیں" },
          explanation: { en: "From this year onward (9 AH) - Makkah for Muslims only", ur: "اس سال (9 ہجری) سے آگے - مکہ صرف مسلمانوں کے لیے" },
          verseRef: "9:28"
        },
        {
          term: "قَاتِلُوا الَّذِينَ لَا يُؤْمِنُونَ... حَتَّىٰ يُعْطُوا الْجِزْيَةَ",
          meaning: { en: "Fight those who don't believe... until they pay jizyah", ur: "لڑو ان سے جو ایمان نہیں لاتے... یہاں تک کہ جزیہ دیں" },
          explanation: { en: "Jizyah ruling: tax on non-Muslims under Islamic rule in exchange for protection", ur: "جزیہ کا حکم: اسلامی حکومت میں غیر مسلموں پر محافظت کے بدلے ٹیکس" },
          verseRef: "9:29"
        },
        {
          term: "يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ",
          meaning: { en: "Those who hoard gold and silver", ur: "جو سونا اور چاندی جمع کرکے رکھتے ہیں" },
          explanation: { en: "Hoarding wealth without paying zakah - severe punishment", ur: "زکاۃ ادا کیے بغیر مال جمع کرنا - سخت سزا" },
          verseRef: "9:34"
        },
        {
          term: "يُكْوَىٰ بِهَا جِبَاهُهُمْ وَجُنُوبُهُمْ",
          meaning: { en: "Their foreheads and sides will be branded", ur: "ان کی پیشانیوں اور پہلوؤں کو داغا جائے گا" },
          explanation: { en: "Hoarded wealth becomes instruments of torture", ur: "جمع شدہ مال عذاب کا آلہ بن جائے گا" },
          verseRef: "9:35"
        },
        {
          term: "عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا",
          meaning: { en: "Number of months is twelve", ur: "اللہ کے نزدیک مہینوں کی تعداد بارہ ہے" },
          explanation: { en: "Islamic lunar calendar established - four sacred months", ur: "اسلامی قمری کیلنڈر قائم کیا گیا - چار حرمت والے مہینے" },
          verseRef: "9:36"
        },
        {
          term: "إِنَّمَا النَّسِيءُ زِيَادَةٌ فِي الْكُفْرِ",
          meaning: { en: "Postponing sacred months is increase in disbelief", ur: "حرمت والے مہینوں کی تاخیر کفر میں اضافہ ہے" },
          explanation: { en: "Pre-Islamic practice of manipulating sacred calendar forbidden", ur: "زمانۂ جاہلیت کی مقدس کیلنڈر میں ہیرا پھیری کی ممانعت" },
          verseRef: "9:37"
        },
        {
          term: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ...",
          meaning: { en: "Charity is only for the poor...", ur: "صدقات صرف فقیروں کے لیے ہیں..." },
          explanation: { en: "Eight categories of zakah recipients defined", ur: "زکاۃ کے مستحقین کے آٹھ زمرے بیان کیے گئے" },
          verseRef: "9:60"
        },
        {
          term: "اسْتَغْفِرْ لَهُمْ أَوْ لَا تَسْتَغْفِرْ لَهُمْ",
          meaning: { en: "Ask forgiveness for them or don't", ur: "ان کے لیے استغفار کرو یا نہ کرو" },
          explanation: { en: "Istighfar for hypocrites is futile - even if 70 times", ur: "منافقوں کے لیے استغفار بے سود ہے - اگر ستر مرتبہ بھی کرو" },
          verseRef: "9:80"
        },
        {
          term: "وَلَا تُصَلِّ عَلَىٰ أَحَدٍ مِّنْهُم مَّاتَ أَبَدًا",
          meaning: { en: "Never pray over any of them who dies", ur: "ان میں سے کسی مرنے والے پر کبھی نماز نہ پڑھو" },
          explanation: { en: "After Ibn Ubayy's funeral - no janazah for known hypocrites", ur: "ابن ابی کی تدفین کے بعد - معروف منافقوں کی نماز جنازہ نہیں" },
          verseRef: "9:84"
        },
        {
          term: "مَا كَانَ لِلنَّبِيِّ... أَن يَسْتَغْفِرُوا لِلْمُشْرِكِينَ",
          meaning: { en: "Not for Prophet to seek forgiveness for polytheists", ur: "نبی کے لیے جائز نہیں کہ مشرکوں کے لیے مغفرت مانگیں" },
          explanation: { en: "Even relatives - revealed after Ibrahim's death, Abraham's example cited", ur: "قریبی رشتہ داروں کے لیے بھی نہیں - ابراہیم کی وفات کے بعد نازل ہوئی، ابراہیم علیہ السلام کی مثال دی گئی" },
          verseRef: "9:113"
        }
      ]
    },

    // 8. CATEGORIES OF ZAKAH RECIPIENTS
    zakahRecipients: {
      color: '#EF4444',
      icon: 'Users',
      name: "Eight Categories of Zakah",
      nameUr: "زکوٰۃ کے آٹھ مصارف",
      nameArabic: "مصارف الزكاة الثمانية",
      description: { en: "The definitive verse on who can receive zakah", ur: "زکاۃ کے مستحقین کے بارے میں حتمی آیت" },
      verses: "9:60",
      concepts: [
        { term: "الْفُقَرَاءِ", meaning: { en: "The Poor (Fuqara)", ur: "فقراء (مفلس)" }, explanation: { en: "Those who have nothing or very little", ur: "جن کے پاس کچھ نہیں یا بہت کم ہے" }, verseRef: "9:60" },
        { term: "الْمَسَاكِينِ", meaning: { en: "The Needy (Masakeen)", ur: "مساکین (ضرورت مند)" }, explanation: { en: "Those who have some but not enough", ur: "جن کے پاس کچھ ہے لیکن کافی نہیں" }, verseRef: "9:60" },
        { term: "الْعَامِلِينَ عَلَيْهَا", meaning: { en: "Those who collect it", ur: "زکاۃ وصول کرنے والے" }, explanation: { en: "Administrators of zakah collection and distribution", ur: "زکاۃ کی وصولی اور تقسیم کے منتظمین" }, verseRef: "9:60" },
        { term: "الْمُؤَلَّفَةِ قُلُوبُهُمْ", meaning: { en: "Those whose hearts are to be reconciled", ur: "وہ جن کے دلوں میں الفت پیدا کرنا مقصود ہو" }, explanation: { en: "New Muslims or potential converts needing support", ur: "نئے مسلمان یا ممکنہ مسلمان جنہیں مدد کی ضرورت ہو" }, verseRef: "9:60" },
        { term: "فِي الرِّقَابِ", meaning: { en: "For freeing slaves", ur: "غلاموں کی آزادی کے لیے" }, explanation: { en: "To liberate slaves and captives", ur: "غلاموں اور قیدیوں کو آزاد کرانے کے لیے" }, verseRef: "9:60" },
        { term: "الْغَارِمِينَ", meaning: { en: "Those in debt", ur: "قرضداروں کے لیے" }, explanation: { en: "People burdened with legitimate debts", ur: "جائز قرضوں کے بوجھ تلے دبے لوگ" }, verseRef: "9:60" },
        { term: "فِي سَبِيلِ اللَّهِ", meaning: { en: "In Allah's cause", ur: "اللہ کی راہ میں" }, explanation: { en: "Those striving for Islam - scholars, mujahideen, da'wah", ur: "اسلام کے لیے جدوجہد کرنے والے - علماء، مجاہدین، دعوت" }, verseRef: "9:60" },
        { term: "ابْنِ السَّبِيلِ", meaning: { en: "The wayfarer", ur: "مسافر" }, explanation: { en: "Stranded travelers, even if wealthy at home", ur: "سفر میں پھنسے مسافر، چاہے گھر پر مالدار ہوں" }, verseRef: "9:60" }
      ]
    },

    // 9. BELIEVERS' CHARACTERISTICS
    believersCharacteristics: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "True Believers",
      nameUr: "سچے مومنین",
      nameArabic: "صفات المؤمنين",
      description: { en: "Qualities that distinguish sincere believers from hypocrites", ur: "وہ خصوصیات جو سچے مومنوں کو منافقوں سے ممتاز کرتی ہیں" },
      verses: "9:20-22, 9:71-72, 9:88-89, 9:100, 9:111-112, 9:119",
      concepts: [
        {
          term: "الَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا",
          meaning: { en: "Those who believed, emigrated, and strove", ur: "جو ایمان لائے، ہجرت کی اور جہاد کیا" },
          explanation: { en: "Triple qualification: iman + hijrah + jihad = highest rank", ur: "تین شرائط: ایمان + ہجرت + جہاد = بلند ترین مرتبہ" },
          verseRef: "9:20"
        },
        {
          term: "أَعْظَمُ دَرَجَةً عِندَ اللَّهِ",
          meaning: { en: "Greater in degree with Allah", ur: "اللہ کے نزدیک درجے میں بہت بڑے" },
          explanation: { en: "These are the successful - above those who just provide water", ur: "یہی کامیاب ہیں - ان سے بڑھ کر جو صرف پانی پلاتے ہیں" },
          verseRef: "9:20"
        },
        {
          term: "وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ",
          meaning: { en: "Believing men and women are allies of one another", ur: "مومن مرد اور مومن عورتیں ایک دوسرے کے دوست ہیں" },
          explanation: { en: "Contrast to hypocrites - believers command good, forbid evil", ur: "منافقوں کے برعکس - مومن نیکی کا حکم دیتے اور بُرائی سے روکتے ہیں" },
          verseRef: "9:71"
        },
        {
          term: "يَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ",
          meaning: { en: "They command good and forbid evil", ur: "وہ نیکی کا حکم دیتے اور بُرائی سے روکتے ہیں" },
          explanation: { en: "Active righteousness, not passive - opposite of hypocrites' behavior", ur: "فعال نیکی، غیر فعال نہیں - منافقوں کے رویے کے برعکس" },
          verseRef: "9:71"
        },
        {
          term: "السَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنصَارِ",
          meaning: { en: "The forerunners - first of Muhajirin and Ansar", ur: "سبقت لے جانے والے - مہاجرین اور انصار میں سے پہلے لوگ" },
          explanation: { en: "First generation's special status - Allah is pleased with them", ur: "پہلی نسل کا خصوصی مقام - اللہ ان سے راضی ہے" },
          verseRef: "9:100"
        },
        {
          term: "رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ",
          meaning: { en: "Allah is pleased with them and they with Him", ur: "اللہ ان سے راضی ہوا اور وہ اللہ سے راضی ہوئے" },
          explanation: { en: "Mutual pleasure - highest achievement, guaranteed Paradise", ur: "باہمی رضامندی - بلند ترین کامیابی، جنت کی ضمانت" },
          verseRef: "9:100"
        },
        {
          term: "إِنَّ اللَّهَ اشْتَرَىٰ مِنَ الْمُؤْمِنِينَ أَنفُسَهُمْ",
          meaning: { en: "Allah has purchased from believers their lives", ur: "اللہ نے مومنوں سے ان کی جانیں خرید لیں" },
          explanation: { en: "Divine transaction: souls and wealth for Paradise", ur: "الٰہی سودا: جانیں اور مال جنت کے بدلے" },
          verseRef: "9:111"
        },
        {
          term: "يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ فَيَقْتُلُونَ وَيُقْتَلُونَ",
          meaning: { en: "They fight in Allah's cause - killing and being killed", ur: "وہ اللہ کی راہ میں لڑتے ہیں - قتل کرتے ہیں اور قتل ہوتے ہیں" },
          explanation: { en: "Promise in Torah, Gospel, Quran - ultimate commitment", ur: "تورات، انجیل اور قرآن میں وعدہ - حتمی عزم" },
          verseRef: "9:111"
        },
        {
          term: "التَّائِبُونَ الْعَابِدُونَ الْحَامِدُونَ السَّائِحُونَ",
          meaning: { en: "Repentant, worshipping, praising, traveling", ur: "توبہ کرنے والے، عبادت کرنے والے، حمد کرنے والے، سفر کرنے والے" },
          explanation: { en: "Nine qualities of true believers - verse 112", ur: "سچے مومنوں کی نو صفات - آیت 112" },
          verseRef: "9:112"
        },
        {
          term: "الرَّاكِعُونَ السَّاجِدُونَ",
          meaning: { en: "Bowing, prostrating", ur: "رکوع کرنے والے، سجدہ کرنے والے" },
          explanation: { en: "Physical worship as identity markers", ur: "جسمانی عبادت بطور شناخت" },
          verseRef: "9:112"
        },
        {
          term: "الْآمِرُونَ بِالْمَعْرُوفِ وَالنَّاهُونَ عَنِ الْمُنكَرِ",
          meaning: { en: "Commanding good, forbidding evil", ur: "نیکی کا حکم دینے والے اور بُرائی سے روکنے والے" },
          explanation: { en: "Social responsibility as faith requirement", ur: "ایمان کے تقاضے کے طور پر سماجی ذمہ داری" },
          verseRef: "9:112"
        },
        {
          term: "وَالْحَافِظُونَ لِحُدُودِ اللَّهِ",
          meaning: { en: "And keepers of Allah's limits", ur: "اور اللہ کی حدود کی حفاظت کرنے والے" },
          explanation: { en: "Final quality - guarding divine boundaries", ur: "آخری صفت - الٰہی حدود کی نگہبانی" },
          verseRef: "9:112"
        }
      ]
    },

    // 10. PROPHET'S CONCERN AND COMPASSION
    propheticCompassion: {
      color: '#EF4444',
      icon: 'Users',
      name: "The Compassionate Prophet",
      nameUr: "شفیق نبی ﷺ",
      nameArabic: "رحمة النبي صلى الله عليه وسلم",
      description: { en: "Final verses describing Prophet Muhammad's care for his ummah", ur: "آخری آیات جو نبی ﷺ کی اپنی امت کے لیے فکرمندی بیان کرتی ہیں" },
      verses: "9:128-129",
      concepts: [
        {
          term: "لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ",
          meaning: { en: "There has come to you a Messenger from among yourselves", ur: "تمہارے پاس تمہیں میں سے ایک رسول آیا" },
          explanation: { en: "From your own people - understanding your condition", ur: "تمہاری اپنی قوم سے - تمہاری حالت سمجھنے والا" },
          verseRef: "9:128"
        },
        {
          term: "عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ",
          meaning: { en: "Grievous to him is your suffering", ur: "تمہاری تکلیف اس پر بھاری ہے" },
          explanation: { en: "Your hardship weighs heavily on him - he cannot bear your pain", ur: "تمہاری مشکل اس پر بھاری ہے - وہ تمہارا درد برداشت نہیں کر سکتا" },
          verseRef: "9:128"
        },
        {
          term: "حَرِيصٌ عَلَيْكُم",
          meaning: { en: "Anxious for you", ur: "تمہاری بھلائی کا بہت حریص" },
          explanation: { en: "Deeply concerned for your guidance and salvation", ur: "تمہاری ہدایت اور نجات کے لیے شدید فکرمند" },
          verseRef: "9:128"
        },
        {
          term: "بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ",
          meaning: { en: "To believers he is kind and merciful", ur: "مومنوں کے ساتھ شفیق اور مہربان" },
          explanation: { en: "Ra'uf and Rahim - names usually for Allah, here for Prophet", ur: "رؤوف اور رحیم - عموماً اللہ کے نام، یہاں نبی ﷺ کے لیے" },
          verseRef: "9:128"
        },
        {
          term: "فَإِن تَوَلَّوْا فَقُلْ حَسْبِيَ اللَّهُ",
          meaning: { en: "If they turn away, say: Allah is sufficient for me", ur: "اگر وہ منہ موڑ لیں تو کہو: اللہ مجھے کافی ہے" },
          explanation: { en: "Ultimate tawakkul - regardless of people's response", ur: "حتمی توکل - لوگوں کے جواب سے قطع نظر" },
          verseRef: "9:129"
        },
        {
          term: "لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ",
          meaning: { en: "No god except Him, upon Him I rely", ur: "اس کے سوا کوئی معبود نہیں، اسی پر میں نے بھروسہ کیا" },
          explanation: { en: "Tawheed and tawakkul - the two pillars", ur: "توحید اور توکل - دو بنیادی ستون" },
          verseRef: "9:129"
        },
        {
          term: "رَبُّ الْعَرْشِ الْعَظِيمِ",
          meaning: { en: "Lord of the Mighty Throne", ur: "عظیم عرش کا مالک" },
          explanation: { en: "Surah ends affirming Allah's supreme sovereignty", ur: "سورت اللہ کی اعلیٰ ترین حاکمیت کی تصدیق پر ختم ہوتی ہے" },
          verseRef: "9:129"
        }
      ]
    },

    // 11. PEOPLE OF THE BOOK
    peopleOfBook: {
      color: '#EF4444',
      icon: 'Users',
      name: "People of the Book",
      nameUr: "اہلِ کتاب",
      nameArabic: "أهل الكتاب",
      description: { en: "Critique of distortions by Jews and Christians", ur: "یہود اور عیسائیوں کی تحریفات پر نقد" },
      verses: "9:29-35",
      concepts: [
        {
          term: "قَاتِلُوا الَّذِينَ لَا يُؤْمِنُونَ بِاللَّهِ وَلَا بِالْيَوْمِ الْآخِرِ",
          meaning: { en: "Fight those who don't believe in Allah or Last Day", ur: "ان سے لڑو جو اللہ اور آخرت کے دن پر ایمان نہیں لاتے" },
          explanation: { en: "Despite having scripture, they corrupted core beliefs", ur: "کتاب ہونے کے باوجود انہوں نے بنیادی عقائد کو بگاڑ دیا" },
          verseRef: "9:29"
        },
        {
          term: "وَقَالَتِ الْيَهُودُ عُزَيْرٌ ابْنُ اللَّهِ",
          meaning: { en: "Jews say Uzair is son of Allah", ur: "یہود کہتے ہیں عزیر اللہ کا بیٹا ہے" },
          explanation: { en: "Extreme veneration of Ezra by some Jewish sects", ur: "بعض یہودی فرقوں کی طرف سے عزرا کی حد سے زیادہ تعظیم" },
          verseRef: "9:30"
        },
        {
          term: "وَقَالَتِ النَّصَارَى الْمَسِيحُ ابْنُ اللَّهِ",
          meaning: { en: "Christians say Messiah is son of Allah", ur: "عیسائی کہتے ہیں مسیح اللہ کا بیٹا ہے" },
          explanation: { en: "Core Christian belief refuted as borrowed paganism", ur: "عیسائیت کا بنیادی عقیدہ مستعار مشرکانہ تصور کے طور پر رد کیا گیا" },
          verseRef: "9:30"
        },
        {
          term: "يُضَاهِئُونَ قَوْلَ الَّذِينَ كَفَرُوا مِن قَبْلُ",
          meaning: { en: "They imitate the saying of disbelievers before", ur: "وہ پہلے کے کافروں کی بات کی نقل کرتے ہیں" },
          explanation: { en: "Divine sonship concept borrowed from pagans", ur: "الٰہی بیٹے کا تصور مشرکوں سے مستعار لیا گیا" },
          verseRef: "9:30"
        },
        {
          term: "اتَّخَذُوا أَحْبَارَهُمْ وَرُهْبَانَهُمْ أَرْبَابًا",
          meaning: { en: "They took rabbis and monks as lords", ur: "انہوں نے اپنے علماء اور راہبوں کو رب بنا لیا" },
          explanation: { en: "Obeying them in making halal haram and vice versa = worship", ur: "حلال کو حرام اور حرام کو حلال کرنے میں ان کی اطاعت = عبادت" },
          verseRef: "9:31"
        },
        {
          term: "يُرِيدُونَ أَن يُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ",
          meaning: { en: "They want to extinguish Allah's light with their mouths", ur: "وہ اللہ کے نور کو اپنے منہ سے بجھانا چاہتے ہیں" },
          explanation: { en: "Futile attempt - like blowing out the sun", ur: "بے سود کوشش - جیسے سورج کو پھونک سے بجھانا" },
          verseRef: "9:32"
        },
        {
          term: "وَيَأْبَى اللَّهُ إِلَّا أَن يُتِمَّ نُورَهُ",
          meaning: { en: "But Allah refuses except to perfect His light", ur: "لیکن اللہ اپنے نور کو مکمل کیے بغیر نہیں رہے گا" },
          explanation: { en: "Islam will prevail despite all opposition", ur: "اسلام تمام مخالفت کے باوجود غالب آئے گا" },
          verseRef: "9:32-33"
        }
      ]
    }
  },

  relationships: [
    { from: "براءة", to: "تابوا", type: "contrast", description: { en: "Disavowal balanced by path to reconciliation through repentance", ur: "براءت کا توازن توبہ کے ذریعے مصالحت کے راستے سے" } },
    { from: "المنافقون", to: "المؤمنون", type: "contrast", description: { en: "Hypocrites' traits vs. believers' traits - opposite in every way", ur: "منافقوں کی صفات بمقابلہ مومنوں کی صفات - ہر لحاظ سے متضاد" } },
    { from: "غزوة تبوك", to: "الثلاثة المخلفون", type: "sequence", description: { en: "Expedition leads to trial of those who stayed", ur: "مہم پیچھے رہ جانے والوں کی آزمائش کا سبب بنی" } },
    { from: "خلطوا عملا", to: "خذ من أموالهم", type: "consequence", description: { en: "Mixed deeds purified through charity", ur: "ملے جلے اعمال صدقہ سے پاک ہوتے ہیں" } },
    { from: "نسوا الله", to: "فنسيهم", type: "consequence", description: { en: "Divine forgetting follows human forgetting", ur: "الٰہی فراموشی انسانی فراموشی کے بعد آتی ہے" } },
    { from: "اشترى أنفسهم", to: "جنات", type: "transaction", description: { en: "Divine purchase - souls for Paradise", ur: "الٰہی سودا - جانوں کے بدلے جنت" } },
    { from: "السابقون", to: "رضي الله عنهم", type: "result", description: { en: "First believers earn eternal pleasure", ur: "پہلے مومنوں نے ابدی رضا حاصل کی" } },
    { from: "مسجد ضرار", to: "تخريبه", type: "consequence", description: { en: "Mosque of harm ordered demolished", ur: "نقصان والی مسجد کو گرانے کا حکم" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: { en: "Declaration of Disavowal", ur: "براءت کا اعلان" }, verses: "9:1-12", description: { en: "Announcement of immunity from treaty obligations with polytheists who broke covenants", ur: "ان مشرکین سے معاہدات کی ذمہ داریوں سے براءت کا اعلان جنہوں نے عہد توڑے" } },
      { stage: 2, theme: { en: "Command to Fight", ur: "لڑنے کا حکم" }, verses: "9:13-24", description: { en: "Order to fight those who broke oaths and attacked first", ur: "ان سے لڑنے کا حکم جنہوں نے قسمیں توڑیں اور پہلے حملہ کیا" } },
      { stage: 3, theme: { en: "Polytheists Barred", ur: "مشرکین ممنوع" }, verses: "9:25-28", description: { en: "Victory of Hunayn, polytheists banned from Masjid al-Haram", ur: "حنین کی فتح، مشرکین کو مسجد الحرام سے ممنوع کیا گیا" } },
      { stage: 4, theme: { en: "People of the Book", ur: "اہلِ کتاب" }, verses: "9:29-35", description: { en: "Critique of Jewish and Christian theological errors", ur: "یہودی اور عیسائی عقائد کی غلطیوں پر نقد" } },
      { stage: 5, theme: { en: "Sacred Calendar", ur: "مقدس کیلنڈر" }, verses: "9:36-37", description: { en: "Twelve months, four sacred, nasi' forbidden", ur: "بارہ مہینے، چار حرمت والے، نسیء حرام" } },
      { stage: 6, theme: { en: "Tabuk Expedition", ur: "غزوۂ تبوک" }, verses: "9:38-59", description: { en: "Call to march, hypocrites' excuses, believers' resolve", ur: "نکلنے کی پکار، منافقوں کے بہانے، مومنوں کا عزم" } },
      { stage: 7, theme: { en: "Zakah Distribution", ur: "زکاۃ کی تقسیم" }, verses: "9:60", description: { en: "Eight categories of zakah recipients defined", ur: "زکاۃ کے مستحقین کے آٹھ زمرے بیان کیے گئے" } },
      { stage: 8, theme: { en: "Hypocrites Exposed", ur: "منافقوں کا پردہ فاش" }, verses: "9:61-96", description: { en: "Detailed exposure of hypocrites' characteristics and fate", ur: "منافقوں کی خصوصیات اور انجام کی تفصیلی بے نقابی" } },
      { stage: 9, theme: { en: "Bedouin Arabs", ur: "دیہاتی عرب" }, verses: "9:97-99", description: { en: "Two types: sincere and insincere among desert Arabs", ur: "دو قسمیں: صحرائی عربوں میں مخلص اور غیر مخلص" } },
      { stage: 10, theme: { en: "First Generation", ur: "پہلی نسل" }, verses: "9:100", description: { en: "Honor of Muhajirin and Ansar - Allah pleased with them", ur: "مہاجرین اور انصار کا اعزاز - اللہ ان سے راضی ہوا" } },
      { stage: 11, theme: { en: "Mixed Deeds", ur: "ملے جلے اعمال" }, verses: "9:101-106", description: { en: "Those who mixed good and bad - hope through charity", ur: "جنہوں نے نیک اور بُرے عمل ملائے - صدقہ سے امید" } },
      { stage: 12, theme: { en: "Masjid Dirar", ur: "مسجد ضرار" }, verses: "9:107-110", description: { en: "Mosque built to harm Muslims - destroyed", ur: "مسلمانوں کو نقصان پہنچانے کے لیے بنائی گئی مسجد - گرا دی گئی" } },
      { stage: 13, theme: { en: "Divine Transaction", ur: "الٰہی سودا" }, verses: "9:111-112", description: { en: "Allah buys believers' lives - nine qualities of believers", ur: "اللہ نے مومنوں کی جانیں خریدیں - مومنوں کی نو صفات" } },
      { stage: 14, theme: { en: "No Intercession for Mushrikeen", ur: "مشرکوں کے لیے شفاعت نہیں" }, verses: "9:113-116", description: { en: "Cannot seek forgiveness for polytheists, even relatives", ur: "مشرکوں کے لیے معافی نہیں مانگ سکتے، قریبی رشتہ داروں کے لیے بھی نہیں" } },
      { stage: 15, theme: { en: "The Three Forgiven", ur: "تین معاف کردہ" }, verses: "9:117-119", description: { en: "Forgiveness of Army of Hardship and three who stayed", ur: "جیش العسرہ اور پیچھے رہ جانے والے تین افراد کی معافی" } },
      { stage: 16, theme: { en: "Rewards of Jihad", ur: "جہاد کے اجر" }, verses: "9:120-122", description: { en: "Every hardship in Allah's cause is rewarded", ur: "اللہ کی راہ میں ہر مشقت کا اجر ملتا ہے" } },
      { stage: 17, theme: { en: "Conclusion", ur: "اختتام" }, verses: "9:123-129", description: { en: "Final warnings to hypocrites, beautiful description of Prophet", ur: "منافقوں کو آخری تنبیہات، نبی ﷺ کی خوبصورت تعریف" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Honor commitments", ur: "عہد نبھاؤ" }, how: { en: "Break no treaty or covenant - Muslims must be trustworthy", ur: "کوئی معاہدہ نہ توڑو - مسلمانوں کو قابلِ اعتماد ہونا چاہیے" }, verse: "9:4" },
      { principle: { en: "Protection over politics", ur: "سیاست سے زیادہ حفاظت" }, how: { en: "Grant asylum even to enemies seeking knowledge of Islam", ur: "اسلام کا علم حاصل کرنے والے دشمنوں کو بھی پناہ دو" }, verse: "9:6" },
      { principle: { en: "Wealth is test", ur: "مال آزمائش ہے" }, how: { en: "Don't let trade or comfort prevent responding to duty", ur: "تجارت یا آرام کو فرض سے نہ روکنے دو" }, verse: "9:24" },
      { principle: { en: "Pay zakah properly", ur: "زکاۃ صحیح طریقے سے ادا کرو" }, how: { en: "Give to eight categories - don't hoard", ur: "آٹھ زمروں کو دو - جمع نہ کرو" }, verse: "9:60" },
      { principle: { en: "Identify hypocrisy in self", ur: "اپنے اندر منافقت پہچانو" }, how: { en: "Check: Do I make excuses? Do I prefer comfort? Do I mock religion?", ur: "جانچو: کیا میں بہانے بناتا ہوں؟ آرام کو ترجیح دیتا ہوں؟ دین کا مذاق اڑاتا ہوں؟" }, verse: "9:64-66" },
      { principle: { en: "Command good", ur: "نیکی کا حکم دو" }, how: { en: "Don't be passive - actively encourage righteousness", ur: "غیر فعال مت رہو - فعال طور پر نیکی کی حوصلہ افزائی کرو" }, verse: "9:71" },
      { principle: { en: "Be with the truthful", ur: "سچوں کے ساتھ رہو" }, how: { en: "Honesty even when it hurts - Ka'b's example", ur: "سچائی چاہے تکلیف دے - کعب کی مثال" }, verse: "9:119" },
      { principle: { en: "Every step counts", ur: "ہر قدم اہم ہے" }, how: { en: "No thirst, fatigue, or distance in Allah's cause goes unrewarded", ur: "اللہ کی راہ میں نہ پیاس، نہ تھکاوٹ، نہ فاصلہ بے اجر جاتا ہے" }, verse: "9:120-121" }
    ]
  },

  uniqueInsight: {
    title: { en: "Severity and Mercy Intertwined", ur: "سختی اور رحمت کا امتزاج" },
    insight: { en: "This surah appears severe - no Bismillah, declarations of war, exposure of hypocrites. Yet it's named 'At-Tawbah' (Repentance), not 'Al-Bara'ah' (Disavowal). Why? Because its ultimate message is return to Allah. The three honest companions who stayed behind were forgiven after 50 days of social isolation - their truthfulness saved them while hypocrites' lies damned them. The verse 'خَلَطُوا عَمَلًا صَالِحًا وَآخَرَ سَيِّئًا' (they mixed good and bad deeds) describes most Muslims - and hope follows: 'عَسَى اللَّهُ أَن يَتُوبَ عَلَيْهِمْ'. Allah's 'perhaps' (عسى) is certainty. And the surah that began with disavowal ends with the most beautiful description of Prophet Muhammad: 'بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ' - Kind and Merciful to believers.", ur: "یہ سورت ظاہراً سخت لگتی ہے - بسم اللہ نہیں، جنگ کے اعلانات، منافقوں کی بے نقابی۔ پھر بھی اس کا نام 'التوبہ' (توبہ) ہے نہ کہ 'البراءة' (براءت)۔ کیوں؟ کیونکہ اس کا حتمی پیغام اللہ کی طرف لوٹنا ہے۔ تین سچے صحابہ جو پیچھے رہ گئے تھے 50 دن کی سماجی تنہائی کے بعد معاف کیے گئے - ان کی سچائی نے انہیں بچایا جبکہ منافقوں کے جھوٹ نے انہیں تباہ کیا۔ آیت 'خَلَطُوا عَمَلًا صَالِحًا وَآخَرَ سَيِّئًا' (انہوں نے نیک اور بُرے عمل ملائے) اکثر مسلمانوں کی حالت بیان کرتی ہے - اور پھر امید آتی ہے: 'عَسَى اللَّهُ أَن يَتُوبَ عَلَيْهِمْ'۔ اللہ کا 'شاید' (عسیٰ) یقین ہے۔ اور جو سورت براءت سے شروع ہوئی وہ نبی ﷺ کی سب سے خوبصورت تعریف پر ختم ہوتی ہے: 'بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ' - مومنوں کے ساتھ شفیق اور مہربان۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: { en: "No Bismillah", ur: "بسم اللہ نہیں" }, example: { en: "Begins directly with بَرَاءَةٌ", ur: "براہ راست بَرَاءَةٌ سے شروع" }, effect: { en: "Severity of disavowal, uniqueness", ur: "براءت کی سختی، منفرد" } },
      { feature: { en: "إِحْدَى الْحُسْنَيَيْنِ", ur: "دو اچھائیوں میں سے ایک" }, example: { en: "Two goods: victory or martyrdom", ur: "دو بھلائیاں: فتح یا شہادت" }, effect: { en: "Reframes apparent loss as win", ur: "ظاہری نقصان کو فتح کے طور پر پیش کرتا ہے" } },
      { feature: { en: "نَسُوا... فَنَسِيَهُمْ", ur: "بھول گئے... تو بھلا دیا" }, example: { en: "They forgot... so He forgot them", ur: "وہ بھول گئے... تو اس نے بھلا دیا" }, effect: { en: "Divine reciprocity in exact terms", ur: "عین الفاظ میں الٰہی مکافات" } },
      { feature: { en: "رَءُوفٌ رَّحِيمٌ", ur: "شفیق، مہربان" }, example: { en: "Kind, Merciful - divine names for Prophet", ur: "شفیق، مہربان - الٰہی نام نبی ﷺ کے لیے" }, effect: { en: "Highest honor for Messenger", ur: "رسول کے لیے بلند ترین اعزاز" } },
      { feature: { en: "حَسْبِيَ اللَّهُ", ur: "اللہ مجھے کافی ہے" }, example: { en: "Allah is sufficient for me", ur: "اللہ مجھے کافی ہے" }, effect: { en: "Ultimate expression of tawakkul", ur: "توکل کا اعلیٰ ترین اظہار" } }
    ]
  },

  historicalContext: {
    revelationPeriod: { en: "9 AH - among the last revealed, after Tabuk expedition", ur: "9 ہجری - آخری نازل ہونے والی سورتوں میں سے، غزوۂ تبوک کے بعد" },
    occasion: { en: "Post-Hudaybiyyah treaty violations by Quraysh, preparation for Tabuk campaign", ur: "قریش کی جانب سے صلح حدیبیہ کی خلاف ورزی، تبوک مہم کی تیاری" },
    proclamation: { en: "Ali ibn Abi Talib announced verses 1-12 at Hajj of 9 AH", ur: "علی بن ابی طالب نے 9 ہجری کے حج میں آیات 1-12 کا اعلان کیا" },
    significance: { en: "Final major policy statements on polytheists, hypocrites, People of Book, and warfare", ur: "مشرکوں، منافقوں، اہلِ کتاب اور جنگ کے بارے میں آخری بڑے پالیسی بیانات" }
  }
};

export default ONTOLOGY;
