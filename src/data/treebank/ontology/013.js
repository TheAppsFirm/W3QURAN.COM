/**
 * Surah Ar-Ra'd (13) - Ontology of Quranic Concepts
 * The Thunder
 * Theme: Thunder glorifies Allah, signs in nature, truth vs falsehood
 * Revelation: Medinan (some say Makki)
 * Ayahs: 43
 */

export const ONTOLOGY = {
  surahId: 13,
  surahName: "Ar-Ra'd",
  surahNameArabic: "الرعد",
  revelationType: "Madani",
  totalAyahs: 43,

  categories: {
    divineRevelation: {
      color: '#EF4444',
      icon: 'Users',
      name: "Divine Revelation",
      nameArabic: "الوحي الإلهي",
      description: { en: "The truth of Quranic revelation and its signs", ur: "قرآنی وحی کی سچائی اور اس کی نشانیاں" },
      concepts: [
        {
          term: "تِلْكَ آيَاتُ الْكِتَابِ",
          transliteration: "Tilka aayaatul-Kitaab",
          meaning: { en: "These are verses of the Book", ur: "یہ کتاب کی آیات ہیں" },
          explanation: { en: "Opening declaration establishing the divine origin of the Quran. The demonstrative 'tilka' (those) elevates the verses, indicating something sublime and established.", ur: "افتتاحی اعلان جو قرآن کی الٰہی اصل کو ثابت کرتا ہے۔ اسم اشارہ 'تلک' آیات کو بلند مرتبہ دیتا ہے، جو کسی عظیم اور مستحکم چیز کی طرف اشارہ کرتا ہے۔" },
          verseRef: "13:1"
        },
        {
          term: "وَالَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ الْحَقُّ",
          transliteration: "Walladhee unzila ilayka min Rabbika al-Haqq",
          meaning: { en: "What has been revealed to you from your Lord is the truth", ur: "جو کچھ آپ کی طرف آپ کے رب سے نازل کیا گیا وہ حق ہے" },
          explanation: { en: "Emphatic declaration that revelation is absolute truth (al-Haqq with definite article), not opinion or poetry.", ur: "زور دار اعلان کہ وحی مطلق حق ہے (الحق معرفہ کے ساتھ)، نہ کوئی رائے ہے نہ شاعری۔" },
          verseRef: "13:1"
        },
        {
          term: "أَكْثَرَ النَّاسِ لَا يُؤْمِنُونَ",
          transliteration: "Aktharan-naasi laa yu'minoon",
          meaning: { en: "Most people do not believe", ur: "اکثر لوگ ایمان نہیں لاتے" },
          explanation: { en: "Despite clear signs, majority reject truth - a recurring Quranic theme about human obstinacy.", ur: "واضح نشانیوں کے باوجود اکثریت حق کو رد کرتی ہے - انسانی ہٹ دھرمی کے بارے میں قرآن کا بار بار آنے والا موضوع۔" },
          verseRef: "13:1"
        }
      ]
    },

    cosmicSigns: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Signs in the Universe",
      nameArabic: "آيات الكون",
      description: { en: "Natural phenomena as evidence of Allah's power and design", ur: "قدرتی مظاہر بطور دلیل Allah کی قدرت اور تخلیق کے" },
      concepts: [
        {
          term: "رَفَعَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا",
          transliteration: "Rafa'as-samaawaati bi-ghayri 'amadin tarawnahaa",
          meaning: { en: "He raised the heavens without pillars that you can see", ur: "اس نے آسمانوں کو بغیر ستونوں کے بلند کیا جو تم دیکھ سکو" },
          explanation: { en: "Invisible forces (gravity) hold the universe - a sign of divine engineering invisible to the eye.", ur: "غیر مرئی قوتیں (کشش ثقل) کائنات کو تھامے ہوئی ہیں - الٰہی ہنرمندی کی نشانی جو آنکھوں سے پوشیدہ ہے۔" },
          verseRef: "13:2"
        },
        {
          term: "وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى",
          transliteration: "Wa sakhkharash-shamsa wal-qamara kullun yajree li-ajalin musammaa",
          meaning: { en: "He subjected the sun and moon, each running for a specified term", ur: "اس نے سورج اور چاند کو مسخر کیا، ہر ایک مقررہ مدت تک چلتا ہے" },
          explanation: { en: "Celestial bodies follow precise orbits with divinely set expiration dates.", ur: "آسمانی اجسام الٰہی طور پر مقرر کردہ مدت کے ساتھ درست مداروں پر چلتے ہیں۔" },
          verseRef: "13:2"
        },
        {
          term: "يُدَبِّرُ الْأَمْرَ يُفَصِّلُ الْآيَاتِ",
          transliteration: "Yudabbirul-amra yufassilul-aayaat",
          meaning: { en: "He manages all affairs and details the signs", ur: "وہ تمام معاملات کی تدبیر کرتا ہے اور نشانیاں تفصیل سے بیان کرتا ہے" },
          explanation: { en: "Allah both manages the universe and explains His signs - combining power and pedagogy.", ur: "Allah کائنات کا انتظام بھی کرتا ہے اور اپنی نشانیاں بھی واضح کرتا ہے - قدرت اور تعلیم کا امتزاج۔" },
          verseRef: "13:2"
        },
        {
          term: "وَفِي الْأَرْضِ قِطَعٌ مُّتَجَاوِرَاتٌ",
          transliteration: "Wa fil-ardi qita'un mutajaawiraat",
          meaning: { en: "And in the earth are neighboring tracts", ur: "اور زمین میں ایک دوسرے سے ملے ہوئے ٹکڑے ہیں" },
          explanation: { en: "Adjacent land patches with different soils, climates, and vegetation - diversity from one earth.", ur: "ملحقہ زمینی ٹکڑے مختلف مٹی، آب و ہوا اور نباتات کے ساتھ - ایک ہی زمین سے تنوع۔" },
          verseRef: "13:4"
        },
        {
          term: "يُسْقَىٰ بِمَاءٍ وَاحِدٍ وَنُفَضِّلُ بَعْضَهَا عَلَىٰ بَعْضٍ فِي الْأُكُلِ",
          transliteration: "Yusqaa bi-maa'in waahidin wa nufaddilu ba'dahaa 'alaa ba'din fil-ukul",
          meaning: { en: "Watered with one water, yet We make some exceed others in fruit", ur: "ایک ہی پانی سے سیراب ہوتے ہیں، پھر بھی ہم بعض کو پھلوں میں دوسروں پر فضیلت دیتے ہیں" },
          explanation: { en: "Same water produces different flavors - divine design in biological diversity.", ur: "ایک ہی پانی سے مختلف ذائقے پیدا ہوتے ہیں - حیاتیاتی تنوع میں الٰہی تخلیق۔" },
          verseRef: "13:4"
        }
      ]
    },

    divineKnowledge: {
      color: '#10B981',
      icon: 'Book',
      name: "Allah's Perfect Knowledge",
      nameArabic: "علم الله الكامل",
      description: { en: "Allah's comprehensive knowledge of seen and unseen", ur: "Allah کا ظاہر و باطن کا مکمل علم" },
      concepts: [
        {
          term: "اللَّهُ يَعْلَمُ مَا تَحْمِلُ كُلُّ أُنثَىٰ",
          transliteration: "Allaahu ya'lamu maa tahmilu kullu unthaa",
          meaning: { en: "Allah knows what every female carries", ur: "Allah جانتا ہے کہ ہر مادہ کیا اٹھائے ہوئے ہے" },
          explanation: { en: "Divine knowledge extends to every womb - gender, characteristics, destiny.", ur: "الٰہی علم ہر رحم تک پھیلا ہوا ہے - جنس، خصوصیات، تقدیر۔" },
          verseRef: "13:8"
        },
        {
          term: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ",
          transliteration: "'Aalimul-ghaybi wash-shahaadah",
          meaning: { en: "Knower of the unseen and the witnessed", ur: "غیب اور حاضر کا جاننے والا" },
          explanation: { en: "Nothing is hidden from Allah - He knows the invisible and the visible equally.", ur: "Allah سے کچھ بھی چھپا ہوا نہیں - وہ غیب اور مشہود دونوں کو یکساں جانتا ہے۔" },
          verseRef: "13:9"
        },
        {
          term: "سَوَاءٌ مِّنكُم مَّنْ أَسَرَّ الْقَوْلَ وَمَن جَهَرَ بِهِ",
          transliteration: "Sawaa'un minkum man asarral-qawla wa man jahara bih",
          meaning: { en: "It is the same whether any of you conceals speech or declares it", ur: "تم میں سے جو بات چھپائے اور جو ظاہر کرے، برابر ہے" },
          explanation: { en: "Secret thoughts and loud declarations are equal before Allah.", ur: "خفیہ خیالات اور بلند آواز اعلانات Allah کے سامنے برابر ہیں۔" },
          verseRef: "13:10"
        },
        {
          term: "لَهُ مُعَقِّبَاتٌ مِّن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ يَحْفَظُونَهُ مِنْ أَمْرِ اللَّهِ",
          transliteration: "Lahu mu'aqqibaatun min bayni yadayhi wa min khalfihi yahfazoonahoo min amrillaah",
          meaning: { en: "He has successive angels before and behind him who protect him by Allah's command", ur: "اس کے آگے اور پیچھے باری باری فرشتے ہیں جو Allah کے حکم سے اس کی حفاظت کرتے ہیں" },
          explanation: { en: "Guardian angels work in shifts, protecting humans by divine order.", ur: "نگہبان فرشتے باری باری کام کرتے ہیں، الٰہی حکم سے انسانوں کی حفاظت کرتے ہیں۔" },
          verseRef: "13:11"
        }
      ]
    },

    selfChange: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Law of Self-Change",
      nameArabic: "سنة تغيير النفس",
      description: { en: "The divine law that change begins from within", ur: "الٰہی قانون کہ تبدیلی اندر سے شروع ہوتی ہے" },
      concepts: [
        {
          term: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ",
          transliteration: "Innallaaha laa yughayyiru maa bi-qawmin hattaa yughayyiroo maa bi-anfusihim",
          meaning: { en: "Allah does not change the condition of a people until they change what is in themselves", ur: "بے شک Allah کسی قوم کی حالت نہیں بدلتا جب تک وہ خود اپنے آپ کو نہ بدلیں" },
          explanation: { en: "The most transformative verse in the Quran - divine help follows human initiative. Change must start from within.", ur: "قرآن کی سب سے تبدیلی لانے والی آیت - الٰہی مدد انسانی پہل کے بعد آتی ہے۔ تبدیلی اندر سے شروع ہونی چاہیے۔" },
          verseRef: "13:11"
        },
        {
          term: "وَإِذَا أَرَادَ اللَّهُ بِقَوْمٍ سُوءًا فَلَا مَرَدَّ لَهُ",
          transliteration: "Wa idhaa araadallaahu bi-qawmin soo'an fa-laa maradda lah",
          meaning: { en: "And when Allah wills ill for a people, there is no repelling it", ur: "اور جب Allah کسی قوم کے ساتھ برائی کا ارادہ کر لے تو اسے کوئی ٹال نہیں سکتا" },
          explanation: { en: "When Allah decrees punishment after persistent disobedience, nothing can stop it.", ur: "جب Allah مسلسل نافرمانی کے بعد عذاب کا فیصلہ کر لے تو کوئی چیز اسے نہیں روک سکتی۔" },
          verseRef: "13:11"
        }
      ]
    },

    thunderGlorification: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Thunder Glorifies Allah",
      nameArabic: "تسبيح الرعد",
      description: { en: "Natural phenomena as acts of worship", ur: "قدرتی مظاہر بطور عبادت" },
      concepts: [
        {
          term: "هُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا",
          transliteration: "Huwal-ladhee yureekumul-barqa khawfan wa tama'aa",
          meaning: { en: "It is He who shows you lightning causing fear and aspiration", ur: "وہی ہے جو تمہیں بجلی دکھاتا ہے خوف اور امید کے ساتھ" },
          explanation: { en: "Lightning produces fear (of storms/destruction) and hope (of rain/provision) simultaneously.", ur: "بجلی بیک وقت خوف (طوفان/تباہی کا) اور امید (بارش/رزق کی) پیدا کرتی ہے۔" },
          verseRef: "13:12"
        },
        {
          term: "وَيُنْشِئُ السَّحَابَ الثِّقَالَ",
          transliteration: "Wa yunshi'us-sahaabath-thiqaal",
          meaning: { en: "And He produces heavy clouds", ur: "اور وہ بھاری بادل بناتا ہے" },
          explanation: { en: "Clouds carrying millions of tons of water floating in the sky - a marvel of divine engineering.", ur: "لاکھوں ٹن پانی اٹھائے آسمان میں تیرتے بادل - الٰہی ہنرمندی کا شاہکار۔" },
          verseRef: "13:12"
        },
        {
          term: "وَيُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
          transliteration: "Wa yusabbihur-ra'du bi-hamdihi wal-malaa'ikatu min kheefatih",
          meaning: { en: "Thunder glorifies His praise, and the angels from fear of Him", ur: "گرج اس کی حمد کے ساتھ تسبیح کرتی ہے اور فرشتے اس کے خوف سے" },
          explanation: { en: "The surah's namesake verse - thunder is not random noise but active praise. Angels glorify from reverential awe.", ur: "سورۃ کے نام والی آیت - گرج بے مقصد شور نہیں بلکہ فعال تسبیح ہے۔ فرشتے تعظیمی خوف سے تسبیح کرتے ہیں۔" },
          verseRef: "13:13"
        },
        {
          term: "وَيُرْسِلُ الصَّوَاعِقَ فَيُصِيبُ بِهَا مَن يَشَاءُ",
          transliteration: "Wa yursiluus-sawaa'iqa fa-yuseebu bihaa man yashaa'",
          meaning: { en: "And He sends thunderbolts and strikes with them whom He wills", ur: "اور وہ بجلیاں بھیجتا ہے اور جسے چاہتا ہے ان سے مارتا ہے" },
          explanation: { en: "Lightning strikes as divine weapon - the same force that brings rain can bring destruction.", ur: "بجلی گرنا بطور الٰہی ہتھیار - وہی قوت جو بارش لاتی ہے تباہی بھی لا سکتی ہے۔" },
          verseRef: "13:13"
        },
        {
          term: "وَهُمْ يُجَادِلُونَ فِي اللَّهِ وَهُوَ شَدِيدُ الْمِحَالِ",
          transliteration: "Wa hum yujaadilona fillaahi wa huwa shadeedul-mihaal",
          meaning: { en: "While they dispute about Allah, and He is severe in assault", ur: "اور وہ Allah کے بارے میں جھگڑتے ہیں حالانکہ وہ سخت طاقت والا ہے" },
          explanation: { en: "Mihaal - severe in power/punishment. They argue about Allah while His power shakes the earth.", ur: "محال - شدید طاقت/سزا والا۔ وہ Allah کے بارے میں بحث کرتے ہیں جبکہ اس کی قدرت زمین کو ہلا دیتی ہے۔" },
          verseRef: "13:13"
        }
      ]
    },

    universalProstration: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Universal Prostration",
      nameArabic: "السجود الكوني",
      description: { en: "All creation prostrates to Allah willingly or unwillingly", ur: "تمام مخلوقات خوشی سے یا مجبوری سے Allah کو سجدہ کرتی ہیں" },
      concepts: [
        {
          term: "وَلِلَّهِ يَسْجُدُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ طَوْعًا وَكَرْهًا",
          transliteration: "Wa lillaahi yasjudu man fis-samaawaati wal-ardi taw'an wa karhaa",
          meaning: { en: "To Allah prostrates whoever is in the heavens and earth, willingly or unwillingly", ur: "Allah کو سجدہ کرتا ہے جو کچھ آسمانوں اور زمین میں ہے، خوشی سے یا مجبوری سے" },
          explanation: { en: "Universal submission - believers prostrate willingly, all creation submits to natural laws (unwilling prostration).", ur: "آفاقی سر تسلیم خم - مومنین خوشی سے سجدہ کرتے ہیں، تمام مخلوقات قوانین فطرت کے تابع ہیں (مجبوری کا سجدہ)۔" },
          verseRef: "13:15"
        },
        {
          term: "وَظِلَالُهُم بِالْغُدُوِّ وَالْآصَالِ",
          transliteration: "Wa dhilaaluhum bil-ghuduwwi wal-aasaal",
          meaning: { en: "And their shadows in morning and afternoon", ur: "اور ان کے سائے صبح و شام" },
          explanation: { en: "Even shadows prostrate - they stretch and bow throughout the day, obeying divine commands.", ur: "سائے بھی سجدہ کرتے ہیں - وہ دن بھر پھیلتے اور جھکتے ہیں، الٰہی احکام کی اطاعت کرتے ہوئے۔" },
          verseRef: "13:15"
        }
      ]
    },

    tawheedArguments: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Arguments for Tawheed",
      nameArabic: "أدلة التوحيد",
      description: { en: "Logical arguments establishing Allah as sole Creator and Lord", ur: "منطقی دلائل جو Allah کو واحد خالق اور رب ثابت کرتے ہیں" },
      concepts: [
        {
          term: "قُلْ مَن رَّبُّ السَّمَاوَاتِ وَالْأَرْضِ قُلِ اللَّهُ",
          transliteration: "Qul man Rabbus-samaawaati wal-ardi qulillaah",
          meaning: { en: "Say: Who is Lord of heavens and earth? Say: Allah", ur: "کہو: آسمانوں اور زمین کا رب کون ہے؟ کہو: Allah" },
          explanation: { en: "Rhetorical question and answer - even polytheists admitted Allah as Creator (Rabb).", ur: "بلاغی سوال و جواب - مشرکین بھی Allah کو خالق (رب) مانتے تھے۔" },
          verseRef: "13:16"
        },
        {
          term: "أَفَاتَّخَذْتُم مِّن دُونِهِ أَوْلِيَاءَ",
          transliteration: "Afattakhadhtum min doonihi awliyaa'",
          meaning: { en: "Have you then taken besides Him protectors?", ur: "کیا تم نے اس کے سوا اور حمایتی بنا لیے ہیں؟" },
          explanation: { en: "Logical inconsistency exposed - if Allah is Creator, why worship others?", ur: "منطقی تضاد کو بے نقاب کیا - اگر Allah خالق ہے تو دوسروں کی عبادت کیوں؟" },
          verseRef: "13:16"
        },
        {
          term: "لَا يَمْلِكُونَ لِأَنفُسِهِمْ نَفْعًا وَلَا ضَرًّا",
          transliteration: "Laa yamlikoona li-anfusihim naf'an wa laa darraa",
          meaning: { en: "They possess not for themselves benefit or harm", ur: "وہ اپنے لیے نہ نفع کے مالک ہیں نہ نقصان کے" },
          explanation: { en: "False gods cannot even help themselves - how can they help worshippers?", ur: "جھوٹے معبود اپنی مدد بھی نہیں کر سکتے - وہ عبادت کرنے والوں کی مدد کیسے کریں گے؟" },
          verseRef: "13:16"
        },
        {
          term: "قُلْ هَلْ يَسْتَوِي الْأَعْمَىٰ وَالْبَصِيرُ",
          transliteration: "Qul hal yastawil-a'maa wal-baseer",
          meaning: { en: "Say: Are the blind and seeing equal?", ur: "کہو: کیا اندھا اور آنکھوں والا برابر ہیں؟" },
          explanation: { en: "Rhetorical comparison - believers see truth, disbelievers are spiritually blind.", ur: "بلاغی موازنہ - مومنین حق دیکھتے ہیں، کافر روحانی طور پر اندھے ہیں۔" },
          verseRef: "13:16"
        },
        {
          term: "أَمْ هَلْ تَسْتَوِي الظُّلُمَاتُ وَالنُّورُ",
          transliteration: "Am hal tastawiz-zulumaatu wan-noor",
          meaning: { en: "Or are darkness and light equal?", ur: "یا کیا اندھیرے اور روشنی برابر ہیں؟" },
          explanation: { en: "Light (Islam/truth) vs darkness (kufr/falsehood) - fundamentally different.", ur: "روشنی (اسلام/حق) بمقابلہ اندھیرا (کفر/باطل) - بنیادی طور پر مختلف۔" },
          verseRef: "13:16"
        }
      ]
    },

    truthVsFalsehood: {
      color: '#EF4444',
      icon: 'Users',
      name: "Truth vs Falsehood",
      nameArabic: "الحق والباطل",
      description: { en: "The eternal struggle and ultimate victory of truth", ur: "حق و باطل کی ابدی کشمکش اور حق کی حتمی فتح" },
      concepts: [
        {
          term: "أَنزَلَ مِنَ السَّمَاءِ مَاءً فَسَالَتْ أَوْدِيَةٌ بِقَدَرِهَا",
          transliteration: "Anzala minas-samaa'i maa'an fa-saalat awdiyatun bi-qadarihaa",
          meaning: { en: "He sent down water and valleys flowed according to their measure", ur: "اس نے آسمان سے پانی برسایا تو نالے اپنی اپنی سمائی کے مطابق بہہ نکلے" },
          explanation: { en: "Beginning of the famous parable - water (truth) flows in valleys (hearts) according to their capacity.", ur: "مشہور مثال کی ابتداء - پانی (حق) وادیوں (دلوں) میں ان کی گنجائش کے مطابق بہتا ہے۔" },
          verseRef: "13:17"
        },
        {
          term: "فَاحْتَمَلَ السَّيْلُ زَبَدًا رَّابِيًا",
          transliteration: "Fahtamalas-saylu zabadan raabiyaa",
          meaning: { en: "The torrent carried rising foam", ur: "سیلاب اوپر اٹھتا ہوا جھاگ بہا لایا" },
          explanation: { en: "Foam (batil/falsehood) rises to the surface, appears prominent, but is worthless.", ur: "جھاگ (باطل) سطح پر آتا ہے، نمایاں دکھائی دیتا ہے، لیکن بے قیمت ہے۔" },
          verseRef: "13:17"
        },
        {
          term: "فَأَمَّا الزَّبَدُ فَيَذْهَبُ جُفَاءً",
          transliteration: "Fa-ammaz-zabadu fa-yadhhabu jufaa'aa",
          meaning: { en: "As for the foam, it vanishes as waste", ur: "رہا جھاگ تو وہ بے کار ہو کر ختم ہو جاتا ہے" },
          explanation: { en: "Falsehood disappears like foam - seems big but has no substance or permanence.", ur: "باطل جھاگ کی طرح غائب ہو جاتا ہے - بڑا دکھائی دیتا ہے لیکن نہ اس میں جوہر ہے نہ دوام۔" },
          verseRef: "13:17"
        },
        {
          term: "وَأَمَّا مَا يَنفَعُ النَّاسَ فَيَمْكُثُ فِي الْأَرْضِ",
          transliteration: "Wa ammaa maa yanfa'un-naasa fa-yamkuthu fil-ard",
          meaning: { en: "But what benefits people remains in the earth", ur: "لیکن جو لوگوں کو فائدہ دے وہ زمین میں ٹھہرا رہتا ہے" },
          explanation: { en: "Truth/benefit settles and remains - like water that nourishes and metal that is useful.", ur: "حق/فائدہ جم جاتا ہے اور باقی رہتا ہے - جیسے پانی جو سیراب کرتا ہے اور دھات جو مفید ہوتی ہے۔" },
          verseRef: "13:17"
        },
        {
          term: "كَذَٰلِكَ يَضْرِبُ اللَّهُ الْحَقَّ وَالْبَاطِلَ",
          transliteration: "Kadhaalika yadribullaahul-haqqa wal-baatil",
          meaning: { en: "Thus Allah presents truth and falsehood", ur: "اس طرح Allah حق اور باطل کی مثال بیان کرتا ہے" },
          explanation: { en: "Allah uses parables to make abstract truths concrete and memorable.", ur: "Allah تمثیلات استعمال کرتا ہے تاکہ مجرد حقائق واضح اور یادگار بن جائیں۔" },
          verseRef: "13:17"
        }
      ]
    },

    rewardAndPunishment: {
      color: '#EF4444',
      icon: 'Users',
      name: "Reward and Punishment",
      nameArabic: "الثواب والعقاب",
      description: { en: "Descriptions of Paradise for believers and Hell for disbelievers", ur: "مومنین کے لیے جنت اور کافرین کے لیے جہنم کا بیان" },
      concepts: [
        {
          term: "لِلَّذِينَ اسْتَجَابُوا لِرَبِّهِمُ الْحُسْنَىٰ",
          transliteration: "Lilladhenas-tajaaboo li-Rabbihimul-husnaa",
          meaning: { en: "For those who responded to their Lord is the best reward", ur: "جنہوں نے اپنے رب کی پکار پر لبیک کہا ان کے لیے بہترین جزا ہے" },
          explanation: { en: "Al-Husnaa - the ultimate good, Paradise, for those who answered Allah's call.", ur: "الحسنیٰ - سب سے بڑی نیکی، جنت، ان کے لیے جنہوں نے Allah کی پکار پر لبیک کہا۔" },
          verseRef: "13:18"
        },
        {
          term: "وَالَّذِينَ لَمْ يَسْتَجِيبُوا لَهُ",
          transliteration: "Walladheena lam yastajeeboo lah",
          meaning: { en: "Those who did not respond to Him", ur: "اور جنہوں نے اس کی پکار قبول نہیں کی" },
          explanation: { en: "Rejection of divine call leads to eternal consequences.", ur: "الٰہی پکار کو رد کرنا ابدی نتائج کا باعث بنتا ہے۔" },
          verseRef: "13:18"
        },
        {
          term: "لَوْ أَنَّ لَهُم مَّا فِي الْأَرْضِ جَمِيعًا وَمِثْلَهُ مَعَهُ لَافْتَدَوْا بِهِ",
          transliteration: "Law anna lahum maa fil-ardi jamee'an wa mithlahu ma'ahu laftadaw bih",
          meaning: { en: "If they had all that is on earth and the like with it, they would ransom themselves", ur: "اگر ان کے پاس زمین کی ساری چیزیں ہوں اور اتنی ہی اور، تو وہ فدیہ دے دیں" },
          explanation: { en: "Hypothetical ransom - entire earth's wealth doubled wouldn't save disbelievers.", ur: "فرضی فدیہ - زمین کی پوری دولت دوگنی بھی کافروں کو نہیں بچا سکتی۔" },
          verseRef: "13:18"
        },
        {
          term: "أُولَٰئِكَ لَهُمْ سُوءُ الْحِسَابِ",
          transliteration: "Ulaa'ika lahum soo'ul-hisaab",
          meaning: { en: "Those will have a bad account", ur: "انہیں برا حساب ہوگا" },
          explanation: { en: "Soo' al-hisab - terrible reckoning where every sin is counted without mercy.", ur: "سوء الحساب - خوفناک حساب جہاں ہر گناہ بغیر رحم کے شمار ہوگا۔" },
          verseRef: "13:18"
        },
        {
          term: "وَمَأْوَاهُمْ جَهَنَّمُ وَبِئْسَ الْمِهَادُ",
          transliteration: "Wa ma'waahum jahannam wa bi'sal-mihaad",
          meaning: { en: "Their refuge is Hell, and wretched is the resting place", ur: "ان کا ٹھکانا جہنم ہے اور وہ کیا ہی برا بستر ہے" },
          explanation: { en: "Mihaad (bed/resting place) - ironic term for Hell, no rest there.", ur: "مہاد (بستر/آرام گاہ) - جہنم کے لیے طنزیہ لفظ، وہاں کوئی آرام نہیں۔" },
          verseRef: "13:18"
        }
      ]
    },

    believersQualities: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Qualities of Believers",
      nameArabic: "صفات المؤمنين",
      description: { en: "Characteristics that distinguish true believers", ur: "وہ خصوصیات جو سچے مومنین کو ممتاز کرتی ہیں" },
      concepts: [
        {
          term: "أَفَمَن يَعْلَمُ أَنَّمَا أُنزِلَ إِلَيْكَ مِن رَّبِّكَ الْحَقُّ كَمَنْ هُوَ أَعْمَىٰ",
          transliteration: "Afaman ya'lamu annamaa unzila ilayka min Rabbikal-haqqu kaman huwa a'maa",
          meaning: { en: "Is one who knows what is revealed to you is truth like one who is blind?", ur: "کیا جو جانتا ہے کہ جو تیری طرف نازل ہوا وہ حق ہے، وہ اس جیسا ہے جو اندھا ہے؟" },
          explanation: { en: "Knowledge of truth creates fundamental distinction - seeing vs blind.", ur: "حق کی معرفت بنیادی فرق پیدا کرتی ہے - بینا بمقابلہ اندھا۔" },
          verseRef: "13:19"
        },
        {
          term: "إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ",
          transliteration: "Innamaa yatadhakkaru ulul-albaab",
          meaning: { en: "Only those of understanding take heed", ur: "صرف عقل والے ہی نصیحت حاصل کرتے ہیں" },
          explanation: { en: "Ulul-albaab - people of intellect/core understanding who reflect and remember.", ur: "اولوالالباب - عقل و فہم والے لوگ جو غور و فکر اور یاد رکھتے ہیں۔" },
          verseRef: "13:19"
        },
        {
          term: "الَّذِينَ يُوفُونَ بِعَهْدِ اللَّهِ",
          transliteration: "Alladheena yoofoona bi-'ahdillaah",
          meaning: { en: "Those who fulfill the covenant of Allah", ur: "جو Allah کے عہد کو پورا کرتے ہیں" },
          explanation: { en: "First quality: keeping promises to Allah - prayers, obligations, vows.", ur: "پہلی صفت: Allah سے کیے گئے وعدے پورے کرنا - نمازیں، فرائض، نذریں۔" },
          verseRef: "13:20"
        },
        {
          term: "وَلَا يَنقُضُونَ الْمِيثَاقَ",
          transliteration: "Wa laa yanqudoonal-meethaaq",
          meaning: { en: "And do not break the contract", ur: "اور عہد نہیں توڑتے" },
          explanation: { en: "Meethaq - firm covenant. Believers don't break divine or human agreements.", ur: "میثاق - مضبوط عہد۔ مومنین نہ الٰہی اور نہ انسانی معاہدے توڑتے ہیں۔" },
          verseRef: "13:20"
        },
        {
          term: "وَالَّذِينَ يَصِلُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ",
          transliteration: "Walladheena yasiloona maa amarallaahu bihi an yoosal",
          meaning: { en: "Those who join what Allah has ordered to be joined", ur: "جو اسے جوڑتے ہیں جسے Allah نے جوڑنے کا حکم دیا" },
          explanation: { en: "Silat ar-Rahm - maintaining family ties, community bonds, brotherhood.", ur: "صلہ رحمی - خاندانی تعلقات، برادری کے بندھن، بھائی چارے کو قائم رکھنا۔" },
          verseRef: "13:21"
        },
        {
          term: "وَيَخْشَوْنَ رَبَّهُمْ وَيَخَافُونَ سُوءَ الْحِسَابِ",
          transliteration: "Wa yakhshawna Rabbahum wa yakhafoona soo'al-hisaab",
          meaning: { en: "They fear their Lord and dread the bad account", ur: "وہ اپنے رب سے ڈرتے ہیں اور برے حساب سے خوفزدہ ہیں" },
          explanation: { en: "Dual fear: Khashyah (reverent fear of Allah), Khawf (fear of punishment).", ur: "دوہرا خوف: خشیت (Allah کا تعظیمی خوف)، خوف (سزا کا ڈر)۔" },
          verseRef: "13:21"
        },
        {
          term: "وَالَّذِينَ صَبَرُوا ابْتِغَاءَ وَجْهِ رَبِّهِمْ",
          transliteration: "Walladheena sabarub-tighaa'a wajhi Rabbihim",
          meaning: { en: "Those who are patient seeking the face of their Lord", ur: "جو اپنے رب کی رضا کی خاطر صبر کرتے ہیں" },
          explanation: { en: "Sabr with ikhlas - patience purely for Allah's sake, not for worldly praise.", ur: "اخلاص کے ساتھ صبر - خالصتاً Allah کی رضا کے لیے، نہ کہ دنیوی تعریف کے لیے۔" },
          verseRef: "13:22"
        },
        {
          term: "وَأَقَامُوا الصَّلَاةَ",
          transliteration: "Wa aqaamus-salaah",
          meaning: { en: "And establish prayer", ur: "اور نماز قائم کرتے ہیں" },
          explanation: { en: "Iqamat as-Salah - not just praying but establishing it properly and consistently.", ur: "اقامت الصلاة - صرف نماز پڑھنا نہیں بلکہ اسے صحیح طریقے سے اور مستقل قائم کرنا۔" },
          verseRef: "13:22"
        },
        {
          term: "وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً",
          transliteration: "Wa anfaqoo mimmaa razaqnaahum sirran wa 'alaaniyah",
          meaning: { en: "And spend from what We provided secretly and publicly", ur: "اور جو ہم نے انہیں دیا اس سے چھپ کر اور کھلے طور پر خرچ کرتے ہیں" },
          explanation: { en: "Balanced giving - sometimes secret (more sincere), sometimes public (to encourage others).", ur: "متوازن انفاق - کبھی چھپ کر (زیادہ مخلصانہ)، کبھی کھلے طور پر (دوسروں کی حوصلہ افزائی کے لیے)۔" },
          verseRef: "13:22"
        },
        {
          term: "وَيَدْرَءُونَ بِالْحَسَنَةِ السَّيِّئَةَ",
          transliteration: "Wa yadra'oona bil-hasanatis-sayyi'ah",
          meaning: { en: "And repel evil with good", ur: "اور برائی کو بھلائی سے دور کرتے ہیں" },
          explanation: { en: "Highest character - respond to bad treatment with kindness, breaking cycles of revenge.", ur: "اعلیٰ ترین اخلاق - بری سلوک کا جواب نیکی سے دینا، انتقام کے سلسلے کو توڑنا۔" },
          verseRef: "13:22"
        }
      ]
    },

    paradiseDescription: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Description of Paradise",
      nameArabic: "وصف الجنة",
      description: { en: "The eternal reward for righteous believers", ur: "نیک مومنین کے لیے ابدی انعام" },
      concepts: [
        {
          term: "أُولَٰئِكَ لَهُمْ عُقْبَى الدَّارِ",
          transliteration: "Ulaa'ika lahum 'uqbad-daar",
          meaning: { en: "Those will have the ultimate home", ur: "ان کے لیے آخری گھر (جنت) ہے" },
          explanation: { en: "'Uqba - the final outcome, ultimate abode. Daar - permanent residence (Paradise).", ur: "عقبیٰ - آخری نتیجہ، حتمی ٹھکانا۔ دار - مستقل قیام گاہ (جنت)۔" },
          verseRef: "13:22"
        },
        {
          term: "جَنَّاتُ عَدْنٍ يَدْخُلُونَهَا",
          transliteration: "Jannaatu 'adnin yadkhulonahaa",
          meaning: { en: "Gardens of perpetual residence they will enter", ur: "ہمیشہ رہنے کے باغات جن میں وہ داخل ہوں گے" },
          explanation: { en: "'Adn - eternal settlement. Not temporary visit but permanent dwelling.", ur: "عدن - ابدی قیام۔ عارضی دورہ نہیں بلکہ مستقل رہائش۔" },
          verseRef: "13:23"
        },
        {
          term: "وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ",
          transliteration: "Wa man salaha min aabaa'ihim wa azwaajihim wa dhurriyyaatihim",
          meaning: { en: "And whoever was righteous from their fathers, spouses, and descendants", ur: "اور ان کے باپ دادا، بیویوں اور اولاد میں سے جو نیک ہوں" },
          explanation: { en: "Family reunion in Paradise - righteous family members join them.", ur: "جنت میں خاندانی ملاقات - نیک خاندان کے افراد ان سے مل جائیں گے۔" },
          verseRef: "13:23"
        },
        {
          term: "وَالْمَلَائِكَةُ يَدْخُلُونَ عَلَيْهِم مِّن كُلِّ بَابٍ",
          transliteration: "Wal-malaa'ikatu yadkhuloona 'alayhim min kulli baab",
          meaning: { en: "And angels will enter upon them from every gate", ur: "اور فرشتے ہر دروازے سے ان پر داخل ہوں گے" },
          explanation: { en: "Angels visiting from all directions - honored guests receiving honored visitors.", ur: "فرشتے ہر سمت سے آئیں گے - معزز مہمان معزز زائرین کا استقبال۔" },
          verseRef: "13:23"
        },
        {
          term: "سَلَامٌ عَلَيْكُم بِمَا صَبَرْتُمْ",
          transliteration: "Salaamun 'alaykum bimaa sabartum",
          meaning: { en: "Peace be upon you for what you patiently endured", ur: "تم پر سلامتی ہو، تمہارے صبر کے بدلے" },
          explanation: { en: "Angels' greeting acknowledging their patience - sabr rewarded with salaam.", ur: "فرشتوں کا سلام جو ان کے صبر کا اعتراف ہے - صبر کا بدلہ سلام سے۔" },
          verseRef: "13:24"
        },
        {
          term: "فَنِعْمَ عُقْبَى الدَّارِ",
          transliteration: "Fa-ni'ma 'uqbad-daar",
          meaning: { en: "How excellent is the final home", ur: "کتنا اچھا ہے آخری گھر" },
          explanation: { en: "Exclamation of praise - the best possible outcome, ultimate success.", ur: "تعریفی تعجب - بہترین ممکنہ نتیجہ، حتمی کامیابی۔" },
          verseRef: "13:24"
        }
      ]
    },

    disbelieversQualities: {
      color: '#EF4444',
      icon: 'Users',
      name: "Qualities of Disbelievers",
      nameArabic: "صفات الكافرين",
      description: { en: "Characteristics of those who reject faith", ur: "ان لوگوں کی خصوصیات جو ایمان کو رد کرتے ہیں" },
      concepts: [
        {
          term: "وَالَّذِينَ يَنقُضُونَ عَهْدَ اللَّهِ مِن بَعْدِ مِيثَاقِهِ",
          transliteration: "Walladheena yanqudoona 'ahdallaahi min ba'di meethaaqih",
          meaning: { en: "Those who break Allah's covenant after contracting it", ur: "جو Allah کے عہد کو اس کے پختہ کرنے کے بعد توڑ دیتے ہیں" },
          explanation: { en: "Breaking promises to Allah - the fitrah covenant and subsequent pledges.", ur: "Allah سے کیے گئے وعدے توڑنا - فطرت کا عہد اور بعد کے معاہدے۔" },
          verseRef: "13:25"
        },
        {
          term: "وَيَقْطَعُونَ مَا أَمَرَ اللَّهُ بِهِ أَن يُوصَلَ",
          transliteration: "Wa yaqta'oona maa amarallaahu bihi an yoosal",
          meaning: { en: "And sever what Allah has ordered to be joined", ur: "اور اسے کاٹتے ہیں جسے Allah نے جوڑنے کا حکم دیا" },
          explanation: { en: "Opposite of believers - cutting family ties, breaking bonds, causing division.", ur: "مومنین کے برعکس - خاندانی تعلقات توڑنا، رشتے کاٹنا، تفرقہ پیدا کرنا۔" },
          verseRef: "13:25"
        },
        {
          term: "وَيُفْسِدُونَ فِي الْأَرْضِ",
          transliteration: "Wa yufsidoona fil-ard",
          meaning: { en: "And spread corruption on earth", ur: "اور زمین میں فساد پھیلاتے ہیں" },
          explanation: { en: "Fasaad - corruption in morals, society, environment. Destructive behavior.", ur: "فساد - اخلاق، معاشرے، ماحول میں بگاڑ۔ تباہ کن رویہ۔" },
          verseRef: "13:25"
        },
        {
          term: "أُولَٰئِكَ لَهُمُ اللَّعْنَةُ وَلَهُمْ سُوءُ الدَّارِ",
          transliteration: "Ulaa'ika lahumul-la'natu wa lahum soo'ud-daar",
          meaning: { en: "Those will have the curse and the worst home", ur: "ان کے لیے لعنت ہے اور ان کا برا ٹھکانا ہے" },
          explanation: { en: "La'nah - cut off from Allah's mercy. Soo' ad-daar - terrible final abode (Hell).", ur: "لعنت - Allah کی رحمت سے محروم۔ سوء الدار - خوفناک آخری ٹھکانا (جہنم)۔" },
          verseRef: "13:25"
        }
      ]
    },

    divineProvidence: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Providence",
      nameArabic: "الرزق الإلهي",
      description: { en: "Allah's control over provision and guidance", ur: "رزق اور ہدایت پر Allah کا اختیار" },
      concepts: [
        {
          term: "اللَّهُ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ وَيَقْدِرُ",
          transliteration: "Allaahu yabsutur-rizqa liman yashaa'u wa yaqdir",
          meaning: { en: "Allah extends provision for whom He wills and restricts", ur: "Allah جس کے لیے چاہتا ہے رزق فراخ کرتا ہے اور تنگ کرتا ہے" },
          explanation: { en: "Bast (expansion) and Qadr (restriction) of rizq - divine wisdom in wealth distribution.", ur: "بسط (فراخی) اور قدر (تنگی) رزق میں - دولت کی تقسیم میں الٰہی حکمت۔" },
          verseRef: "13:26"
        },
        {
          term: "وَفَرِحُوا بِالْحَيَاةِ الدُّنْيَا",
          transliteration: "Wa farihoo bil-hayaatid-dunyaa",
          meaning: { en: "And they rejoice in worldly life", ur: "اور وہ دنیوی زندگی پر خوش ہوتے ہیں" },
          explanation: { en: "Excessive attachment to dunya - a sign of spiritual blindness.", ur: "دنیا سے حد سے زیادہ لگاؤ - روحانی اندھے پن کی علامت۔" },
          verseRef: "13:26"
        },
        {
          term: "وَمَا الْحَيَاةُ الدُّنْيَا فِي الْآخِرَةِ إِلَّا مَتَاعٌ",
          transliteration: "Wa mal-hayaatud-dunyaa fil-aakhirati illaa mataa'",
          meaning: { en: "And worldly life compared to Hereafter is only enjoyment", ur: "اور دنیا کی زندگی آخرت کے مقابلے میں محض ایک عارضی فائدہ ہے" },
          explanation: { en: "Mata' - temporary enjoyment/goods. Dunya is fleeting compared to eternal Akhirah.", ur: "متاع - عارضی فائدہ/سامان۔ دنیا ابدی آخرت کے مقابلے میں فانی ہے۔" },
          verseRef: "13:26"
        }
      ]
    },

    heartsTranquility: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Hearts' Tranquility",
      nameArabic: "طمأنينة القلوب",
      description: { en: "Finding peace through remembrance of Allah", ur: "Allah کے ذکر سے سکون پانا" },
      concepts: [
        {
          term: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ",
          transliteration: "Alladheena aamanoo wa tatma'innu quloobuhum bi-dhikrillaah",
          meaning: { en: "Those who believe and whose hearts find rest in remembrance of Allah", ur: "جو ایمان لائے اور ان کے دل Allah کے ذکر سے مطمئن ہوتے ہیں" },
          explanation: { en: "Tuma'neenah - deep peace and contentment. Dhikr brings tranquility to anxious hearts.", ur: "طمانیت - گہرا سکون اور اطمینان۔ ذکر بے چین دلوں کو سکون دیتا ہے۔" },
          verseRef: "13:28"
        },
        {
          term: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
          transliteration: "Alaa bi-dhikrillaahi tatma'innul-quloob",
          meaning: { en: "Unquestionably, by remembrance of Allah do hearts find rest", ur: "خبردار! Allah کے ذکر سے ہی دل مطمئن ہوتے ہیں" },
          explanation: { en: "One of Quran's most famous verses - universal prescription for anxiety and unrest.", ur: "قرآن کی سب سے مشہور آیات میں سے ایک - بے چینی اور اضطراب کا آفاقی علاج۔" },
          verseRef: "13:28"
        },
        {
          term: "الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ طُوبَىٰ لَهُمْ",
          transliteration: "Alladheena aamanoo wa 'amilus-saalihaati toobaa lahum",
          meaning: { en: "Those who believe and do righteous deeds - for them is Toobaa", ur: "جو ایمان لائے اور نیک عمل کیے، ان کے لیے طوبیٰ ہے" },
          explanation: { en: "Toobaa - ultimate goodness, name of a tree in Paradise, or state of bliss.", ur: "طوبیٰ - اعلیٰ ترین بھلائی، جنت میں ایک درخت کا نام، یا خوشی کی حالت۔" },
          verseRef: "13:29"
        },
        {
          term: "وَحُسْنُ مَآبٍ",
          transliteration: "Wa husnu ma'aab",
          meaning: { en: "And a good return", ur: "اور اچھا ٹھکانا" },
          explanation: { en: "Ma'ab - place of return. Beautiful destination awaiting believers.", ur: "مآب - لوٹنے کی جگہ۔ مومنین کے لیے خوبصورت منزل۔" },
          verseRef: "13:29"
        }
      ]
    },

    propheticMission: {
      color: '#F59E0B',
      icon: 'Star',
      name: "The Prophet's Mission",
      nameArabic: "رسالة النبي",
      description: { en: "The role and treatment of Prophet Muhammad", ur: "نبی محمد ﷺ کا کردار اور ان سے سلوک" },
      concepts: [
        {
          term: "كَذَٰلِكَ أَرْسَلْنَاكَ فِي أُمَّةٍ",
          transliteration: "Kadhaalika arsalnaaka fee ummah",
          meaning: { en: "Thus We have sent you to a nation", ur: "اسی طرح ہم نے تمہیں ایک امت میں بھیجا" },
          explanation: { en: "Prophet's mission follows pattern of previous messengers to their nations.", ur: "نبی کی مشن پچھلے رسولوں کی اپنی قوموں کی طرف بھیجے جانے کے انداز کے مطابق ہے۔" },
          verseRef: "13:30"
        },
        {
          term: "قَدْ خَلَتْ مِن قَبْلِهَا أُمَمٌ",
          transliteration: "Qad khalat min qablihaa umam",
          meaning: { en: "Before which nations have passed", ur: "جس سے پہلے کئی امتیں گزر چکی ہیں" },
          explanation: { en: "Historical precedent - many nations received messengers before.", ur: "تاریخی سابقہ - بہت سی قوموں نے پہلے رسولوں کو پایا۔" },
          verseRef: "13:30"
        },
        {
          term: "لِّتَتْلُوَ عَلَيْهِمُ الَّذِي أَوْحَيْنَا إِلَيْكَ",
          transliteration: "Li-tatluwa 'alayhimul-ladhee awhaynaa ilayk",
          meaning: { en: "To recite to them what We revealed to you", ur: "تاکہ ان پر وہ پڑھو جو ہم نے تمہاری طرف وحی کیا" },
          explanation: { en: "Primary mission: Tilawah - reciting divine revelation to people.", ur: "بنیادی مشن: تلاوت - لوگوں کو الٰہی وحی سنانا۔" },
          verseRef: "13:30"
        },
        {
          term: "وَهُمْ يَكْفُرُونَ بِالرَّحْمَٰنِ",
          transliteration: "Wa hum yakfuroona bir-Rahmaan",
          meaning: { en: "While they disbelieve in the Most Merciful", ur: "اور وہ رحمٰن کا انکار کرتے ہیں" },
          explanation: { en: "Rejecting Ar-Rahman - the attribute that should draw people closest.", ur: "الرحمٰن کا انکار - وہ صفت جو لوگوں کو سب سے زیادہ قریب کرنی چاہیے۔" },
          verseRef: "13:30"
        },
        {
          term: "قُلْ هُوَ رَبِّي لَا إِلَٰهَ إِلَّا هُوَ",
          transliteration: "Qul huwa Rabbee laa ilaaha illaa huwa",
          meaning: { en: "Say: He is my Lord, there is no deity except Him", ur: "کہو: وہ میرا رب ہے، اس کے سوا کوئی معبود نہیں" },
          explanation: { en: "Prophet's declaration of faith - model statement of tawheed.", ur: "نبی کا اعلان ایمان - توحید کا نمونہ بیان۔" },
          verseRef: "13:30"
        },
        {
          term: "عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ مَتَابِ",
          transliteration: "'Alayhi tawakkaltu wa ilayhi mataab",
          meaning: { en: "Upon Him I rely and to Him is my return", ur: "اسی پر میرا بھروسہ ہے اور اسی کی طرف میری واپسی ہے" },
          explanation: { en: "Tawakkul (reliance) and Mataab (return) - complete trust and ultimate destination.", ur: "توکل (بھروسہ) اور متاب (واپسی) - مکمل اعتماد اور حتمی منزل۔" },
          verseRef: "13:30"
        }
      ]
    },

    hypotheticalQuran: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Power of the Quran",
      nameArabic: "قوة القرآن",
      description: { en: "Hypothetical demonstrations of Quranic power", ur: "قرآن کی طاقت کے فرضی مظاہرے" },
      concepts: [
        {
          term: "وَلَوْ أَنَّ قُرْآنًا سُيِّرَتْ بِهِ الْجِبَالُ",
          transliteration: "Wa law anna Qur'aanan suyyirat bihil-jibaal",
          meaning: { en: "If there were a Quran by which mountains were moved", ur: "اگر کوئی قرآن ایسا ہوتا جس سے پہاڑ چلائے جاتے" },
          explanation: { en: "Hypothetical: even if any recitation could move mountains, it would be this Quran.", ur: "فرضی: اگر کوئی تلاوت پہاڑوں کو حرکت دے سکتی تو یہ قرآن ہوتا۔" },
          verseRef: "13:31"
        },
        {
          term: "أَوْ قُطِّعَتْ بِهِ الْأَرْضُ",
          transliteration: "Aw qutti'at bihil-ard",
          meaning: { en: "Or the earth were broken apart by it", ur: "یا اس سے زمین ٹکڑے ٹکڑے کر دی جاتی" },
          explanation: { en: "Or split the earth - demonstrating extraordinary power.", ur: "یا زمین کو چیر دیا جاتا - غیر معمولی طاقت کا مظاہرہ۔" },
          verseRef: "13:31"
        },
        {
          term: "أَوْ كُلِّمَ بِهِ الْمَوْتَىٰ",
          transliteration: "Aw kullima bihil-mawtaa",
          meaning: { en: "Or the dead were made to speak by it", ur: "یا اس سے مردوں سے بات کی جاتی" },
          explanation: { en: "Or communicate with the dead - ultimate miracle.", ur: "یا مردوں سے بات کی جاتی - سب سے بڑا معجزہ۔" },
          verseRef: "13:31"
        },
        {
          term: "بَل لِّلَّهِ الْأَمْرُ جَمِيعًا",
          transliteration: "Bal lillaahil-amru jamee'aa",
          meaning: { en: "Rather, to Allah belongs all affairs", ur: "بلکہ سارے معاملات Allah کے ہیں" },
          explanation: { en: "All matters belong to Allah - He decides which miracles to grant.", ur: "تمام معاملات Allah کے ہیں - وہ فیصلہ کرتا ہے کون سے معجزے عطا کرے۔" },
          verseRef: "13:31"
        }
      ]
    },

    mockersDestiny: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Fate of Mockers",
      nameArabic: "مصير المستهزئين",
      description: { en: "The end of those who mocked messengers", ur: "ان لوگوں کا انجام جنہوں نے رسولوں کا مذاق اڑایا" },
      concepts: [
        {
          term: "وَلَقَدِ اسْتُهْزِئَ بِرُسُلٍ مِّن قَبْلِكَ",
          transliteration: "Wa laqadis-tuhzi'a bi-rusulin min qablik",
          meaning: { en: "Already were messengers ridiculed before you", ur: "تم سے پہلے بھی رسولوں کا مذاق اڑایا گیا" },
          explanation: { en: "Consolation to Prophet - mockery is pattern faced by all messengers.", ur: "نبی کی تسلی - مذاق اڑانا تمام رسولوں کو درپیش ہونے والا نمونہ ہے۔" },
          verseRef: "13:32"
        },
        {
          term: "فَأَمْلَيْتُ لِلَّذِينَ كَفَرُوا",
          transliteration: "Fa-amlaytu lilladheena kafaroo",
          meaning: { en: "So I extended respite to those who disbelieved", ur: "تو میں نے کافروں کو مہلت دی" },
          explanation: { en: "Imla' - giving time/rope. Allah gives chances before punishment.", ur: "املاء - وقت/مہلت دینا۔ Allah سزا سے پہلے موقع دیتا ہے۔" },
          verseRef: "13:32"
        },
        {
          term: "ثُمَّ أَخَذْتُهُمْ",
          transliteration: "Thumma akhadhtuhum",
          meaning: { en: "Then I seized them", ur: "پھر میں نے انہیں پکڑ لیا" },
          explanation: { en: "After respite comes seizure - divine punishment eventually arrives.", ur: "مہلت کے بعد پکڑ آتی ہے - الٰہی سزا بالآخر آتی ہے۔" },
          verseRef: "13:32"
        },
        {
          term: "فَكَيْفَ كَانَ عِقَابِ",
          transliteration: "Fa-kayfa kaana 'iqaab",
          meaning: { en: "So how was My punishment?", ur: "تو کیسا رہا میرا عذاب؟" },
          explanation: { en: "Rhetorical - punishment was severe and exemplary.", ur: "بلاغی سوال - عذاب سخت اور عبرتناک تھا۔" },
          verseRef: "13:32"
        }
      ]
    },

    finalAdmonition: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Final Admonition",
      nameArabic: "الموعظة الأخيرة",
      description: { en: "Closing warnings and reassurances", ur: "اختتامی تنبیہات اور تسلیاں" },
      concepts: [
        {
          term: "أَفَمَنْ هُوَ قَائِمٌ عَلَىٰ كُلِّ نَفْسٍ بِمَا كَسَبَتْ",
          transliteration: "Afaman huwa qaa'imun 'alaa kulli nafsin bimaa kasabat",
          meaning: { en: "Is He who stands over every soul for what it has earned", ur: "کیا وہ جو ہر جان کے اعمال پر نگران ہے" },
          explanation: { en: "Allah oversees every soul's deeds - nothing escapes divine accounting.", ur: "Allah ہر جان کے اعمال پر نگران ہے - کوئی چیز الٰہی حساب سے بچ نہیں سکتی۔" },
          verseRef: "13:33"
        },
        {
          term: "وَجَعَلُوا لِلَّهِ شُرَكَاءَ",
          transliteration: "Wa ja'aloo lillaahi shurakaa'",
          meaning: { en: "And they attribute to Allah partners", ur: "اور انہوں نے Allah کے شریک بنائے" },
          explanation: { en: "Absurdity of shirk - assigning partners to the All-Watchful God.", ur: "شرک کی بے معنویت - ہر چیز پر نگران خدا کے شریک ٹھہرانا۔" },
          verseRef: "13:33"
        },
        {
          term: "قُلْ سَمُّوهُمْ",
          transliteration: "Qul sammoohum",
          meaning: { en: "Say: Name them", ur: "کہو: ان کے نام بتاؤ" },
          explanation: { en: "Challenge: identify these 'partners' - they cannot be properly named or described.", ur: "چیلنج: ان 'شریکوں' کی شناخت کرو - ان کا صحیح نام یا تعریف نہیں ہو سکتی۔" },
          verseRef: "13:33"
        },
        {
          term: "زُيِّنَ لِلَّذِينَ كَفَرُوا مَكْرُهُمْ",
          transliteration: "Zuyyina lilladheena kafaroo makruhum",
          meaning: { en: "Made pleasing to disbelievers is their plotting", ur: "کافروں کو ان کی چالبازی خوشنما کر دی گئی" },
          explanation: { en: "Their schemes appear good to them - blinded by self-deception.", ur: "ان کی سازشیں انہیں اچھی لگتی ہیں - خود فریبی سے اندھے ہو گئے۔" },
          verseRef: "13:33"
        },
        {
          term: "وَصُدُّوا عَنِ السَّبِيلِ",
          transliteration: "Wa suddoo 'anis-sabeel",
          meaning: { en: "And they are blocked from the way", ur: "اور وہ راستے سے روک دیے گئے" },
          explanation: { en: "Prevented from guidance - consequence of persistent rejection.", ur: "ہدایت سے روک دیے گئے - مسلسل انکار کا نتیجہ۔" },
          verseRef: "13:33"
        },
        {
          term: "وَمَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِنْ هَادٍ",
          transliteration: "Wa man yudlilillaahu fa-maa lahu min haad",
          meaning: { en: "Whoever Allah sends astray, there is no guide for him", ur: "جسے Allah گمراہ کر دے اس کا کوئی ہدایت دینے والا نہیں" },
          explanation: { en: "Divine sealing of hearts - when someone insists on misguidance, Allah confirms it.", ur: "دلوں پر مہر لگانا - جب کوئی گمراہی پر مصر ہو تو Allah اسے پختہ کر دیتا ہے۔" },
          verseRef: "13:33"
        },
        {
          term: "وَلَعَذَابُ الْآخِرَةِ أَشَقُّ",
          transliteration: "Wa la-'adhaabul-aakhirati ashaqq",
          meaning: { en: "And the punishment of the Hereafter is more severe", ur: "اور آخرت کا عذاب زیادہ سخت ہے" },
          explanation: { en: "Worldly punishment is nothing compared to Hereafter - ultimate deterrent.", ur: "دنیوی سزا آخرت کے مقابلے میں کچھ نہیں - حتمی تنبیہ۔" },
          verseRef: "13:34"
        },
        {
          term: "وَمَا لَهُم مِّنَ اللَّهِ مِن وَاقٍ",
          transliteration: "Wa maa lahum minallaahi min waaq",
          meaning: { en: "And they have no protector from Allah", ur: "اور ان کا Allah سے بچانے والا کوئی نہیں" },
          explanation: { en: "No shield, no defender against divine punishment - complete vulnerability.", ur: "نہ ڈھال، نہ الٰہی سزا سے بچانے والا - مکمل بے بسی۔" },
          verseRef: "13:34"
        }
      ]
    },

    witnessAndMessage: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Witness and Message",
      nameArabic: "الشهادة والرسالة",
      description: { en: "Allah and scripture as witnesses to the Prophet's mission", ur: "نبی کے مشن کی گواہی Allah اور کتاب سے" },
      concepts: [
        {
          term: "قُلْ كَفَىٰ بِاللَّهِ شَهِيدًا بَيْنِي وَبَيْنَكُمْ",
          transliteration: "Qul kafaa billaahi shaheedan baynee wa baynakum",
          meaning: { en: "Say: Allah is sufficient as witness between me and you", ur: "کہو: میرے اور تمہارے درمیان Allah گواہ کافی ہے" },
          explanation: { en: "Allah Himself testifies to Prophet's truthfulness - ultimate witness.", ur: "Allah خود نبی کی سچائی کی گواہی دیتا ہے - سب سے بڑا گواہ۔" },
          verseRef: "13:43"
        },
        {
          term: "وَمَنْ عِندَهُ عِلْمُ الْكِتَابِ",
          transliteration: "Wa man 'indahu 'ilmul-Kitaab",
          meaning: { en: "And whoever has knowledge of the Scripture", ur: "اور جس کے پاس کتاب کا علم ہے" },
          explanation: { en: "Scholars of previous scriptures recognize Muhammad as foretold prophet.", ur: "پچھلی کتابوں کے علماء محمد ﷺ کو پیش گوئی شدہ نبی کے طور پر پہچانتے ہیں۔" },
          verseRef: "13:43"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الرعد يسبح",
      to: "الملائكة من خيفته",
      type: "parallel",
      description: { en: "Thunder and angels both glorify Allah", ur: "گرج اور فرشتے دونوں Allah کی تسبیح کرتے ہیں" }
    },
    {
      from: "الزبد يذهب جفاءً",
      to: "ما ينفع الناس يمكث",
      type: "contrast",
      description: { en: "Foam (falsehood) vanishes vs benefit (truth) remains", ur: "جھاگ (باطل) ختم ہو جاتا ہے بمقابلہ فائدہ (حق) باقی رہتا ہے" }
    },
    {
      from: "يوفون بعهد الله",
      to: "ينقضون عهد الله",
      type: "antithesis",
      description: { en: "Believers fulfill vs disbelievers break covenant", ur: "مومنین عہد پورا کرتے ہیں بمقابلہ کافرین عہد توڑتے ہیں" }
    },
    {
      from: "لا يغير ما بقوم",
      to: "حتى يغيروا ما بأنفسهم",
      type: "condition",
      description: { en: "Divine change requires human change first", ur: "الٰہی تبدیلی کے لیے پہلے انسانی تبدیلی ضروری ہے" }
    },
    {
      from: "بذكر الله",
      to: "تطمئن القلوب",
      type: "cause-effect",
      description: { en: "Remembrance of Allah causes heart's tranquility", ur: "Allah کا ذکر دلوں کے اطمینان کا سبب ہے" }
    },
    {
      from: "الأعمى",
      to: "البصير",
      type: "contrast",
      description: { en: "Spiritually blind vs seeing - disbeliever vs believer", ur: "روحانی طور پر اندھا بمقابلہ بینا - کافر بمقابلہ مومن" }
    },
    {
      from: "الظلمات",
      to: "النور",
      type: "contrast",
      description: { en: "Darkness (kufr) vs light (Islam)", ur: "اندھیرا (کفر) بمقابلہ روشنی (اسلام)" }
    },
    {
      from: "سلام عليكم",
      to: "بما صبرتم",
      type: "result",
      description: { en: "Patience results in angelic greeting of peace", ur: "صبر کا نتیجہ فرشتوں کا سلام ہے" }
    }
  ],

  thematicFlow: {
    title: "Journey from Signs to Certainty",
    titleArabic: "من الآيات إلى اليقين",
    stages: [
      {
        stage: 1,
        theme: "Divine Revelation Affirmed",
        verses: "13:1",
        description: { en: "Opening declaration: Quran is truth from Allah", ur: "افتتاحی اعلان: قرآن Allah کی طرف سے حق ہے" }
      },
      {
        stage: 2,
        theme: "Cosmic and Earthly Signs",
        verses: "13:2-4",
        description: { en: "Heavens without pillars, sun, moon, earth, mountains, rivers, fruits", ur: "بے ستون آسمان، سورج، چاند، زمین، پہاڑ، ندیاں، پھل" }
      },
      {
        stage: 3,
        theme: "Divine Knowledge",
        verses: "13:8-11",
        description: { en: "Allah knows the unseen, guardian angels, human change", ur: "Allah غیب جانتا ہے، محافظ فرشتے، انسانی تبدیلی" }
      },
      {
        stage: 4,
        theme: "Thunder's Glorification",
        verses: "13:12-13",
        description: { en: "Lightning, clouds, thunder glorifying Allah, thunderbolts", ur: "بجلی، بادل، گرج Allah کی تسبیح کرتی ہے، بجلی کی کڑک" }
      },
      {
        stage: 5,
        theme: "True vs False Call",
        verses: "13:14-16",
        description: { en: "Calling upon Allah vs idols, universal prostration", ur: "Allah کو پکارنا بمقابلہ بتوں کو، آفاقی سجدہ" }
      },
      {
        stage: 6,
        theme: "Truth vs Falsehood Parable",
        verses: "13:17",
        description: { en: "Water/foam parable - truth remains, falsehood vanishes", ur: "پانی/جھاگ کی مثال - حق باقی رہتا ہے، باطل ختم ہو جاتا ہے" }
      },
      {
        stage: 7,
        theme: "Rewards and Punishment",
        verses: "13:18-24",
        description: { en: "Believers' qualities and Paradise, disbelievers' qualities and Hell", ur: "مومنین کی صفات اور جنت، کافرین کی صفات اور جہنم" }
      },
      {
        stage: 8,
        theme: "Divine Providence",
        verses: "13:25-28",
        description: { en: "Provision, worldly life as enjoyment, hearts' tranquility", ur: "رزق، دنیوی زندگی بطور عارضی فائدہ، دلوں کا اطمینان" }
      },
      {
        stage: 9,
        theme: "Prophet's Mission",
        verses: "13:29-32",
        description: { en: "Sending the Prophet, Quran's power, mockers' fate", ur: "نبی کی بعثت، قرآن کی طاقت، مذاق اڑانے والوں کا انجام" }
      },
      {
        stage: 10,
        theme: "Final Warnings",
        verses: "13:33-43",
        description: { en: "Divine oversight, plotting, punishment, Allah as witness", ur: "الٰہی نگرانی، سازش، عذاب، Allah بطور گواہ" }
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 2,
        name: "Al-Baqarah",
        verses: "164",
        relation: "Signs in heavens, earth, ships, rain, winds",
        sharedTheme: "Natural signs proving Allah"
      },
      {
        surah: 24,
        name: "An-Nur",
        verse: 43,
        relation: "Allah drives clouds, lightning, thunder",
        sharedTheme: "Thunder and weather as signs"
      },
      {
        surah: 10,
        name: "Yunus",
        verse: 3,
        relation: "Allah manages affairs, details signs",
        sharedTheme: "Divine management of universe"
      },
      {
        surah: 30,
        name: "Ar-Rum",
        verses: "20-25",
        relation: "Signs in creation, resurrection, lightning",
        sharedTheme: "Natural phenomena as proofs"
      },
      {
        surah: 6,
        name: "Al-An'am",
        verses: "95-99",
        relation: "Agricultural signs, diverse fruits from water",
        sharedTheme: "Botanical signs of Allah"
      }
    ]
  },

  practicalApplication: {
    title: "Living by Ar-Ra'd",
    applications: [
      {
        principle: "See Allah in nature",
        how: "Look at sky, mountains, rain as signs of Allah, not random phenomena",
        verse: "13:2-4"
      },
      {
        principle: "Change yourself first",
        how: "Don't expect circumstances to change without changing yourself",
        verse: "13:11"
      },
      {
        principle: "Find peace in dhikr",
        how: "When anxious, remember Allah - hearts find rest only in His remembrance",
        verse: "13:28"
      },
      {
        principle: "Maintain ties",
        how: "Connect what Allah ordered connected - family, community, faith bonds",
        verse: "13:21"
      },
      {
        principle: "Repel evil with good",
        how: "When wronged, respond with kindness - breaks cycles of revenge",
        verse: "13:22"
      },
      {
        principle: "Be patient for Allah",
        how: "Endure difficulties seeking Allah's pleasure, not praise",
        verse: "13:22"
      },
      {
        principle: "Balance secret and public charity",
        how: "Give secretly for sincerity, publicly to encourage others",
        verse: "13:22"
      },
      {
        principle: "Trust in truth's victory",
        how: "Falsehood may seem prominent but will vanish like foam",
        verse: "13:17"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Nature's Worship", ur: "فطرت کی عبادت کی سورت" },
    insight: { en: "Ar-Ra'd uniquely presents nature as actively worshipping Allah. Thunder doesn't just exist - it glorifies (yusabbih). Shadows don't just fall - they prostrate. This surah transforms how we perceive the natural world: every storm, every sunrise, every growing plant is an act of ibadah. The famous verse 13:28 'Verily, in the remembrance of Allah do hearts find rest' is preceded by descriptions of nature's dhikr, suggesting that humans should join creation's constant praise. The surah's central parable (13:17) of water and foam brilliantly illustrates that truth, like water, may be beneath the surface while falsehood, like foam, appears prominent - but truth nourishes and remains while falsehood is 'jufaa' (worthless scum). The condition in 13:11 'Allah does not change a people until they change themselves' is one of Islam's most transformative principles - divine help awaits human initiative.", ur: "سورۃ الرعد منفرد طور پر فطرت کو Allah کی فعال عبادت گزار کے طور پر پیش کرتی ہے۔ گرج صرف موجود نہیں - وہ تسبیح کرتی ہے۔ سائے صرف نہیں گرتے - وہ سجدہ کرتے ہیں۔ یہ سورت قدرتی دنیا کے بارے میں ہماری سوچ بدل دیتی ہے: ہر طوفان، ہر طلوع آفتاب، ہر اگتا ہوا پودا عبادت کا عمل ہے۔ مشہور آیت 13:28 'بے شک Allah کے ذکر سے دل مطمئن ہوتے ہیں' سے پہلے فطرت کے ذکر کا بیان ہے، جو اشارہ کرتا ہے کہ انسانوں کو مخلوقات کی مسلسل تسبیح میں شامل ہونا چاہیے۔ سورت کی مرکزی تمثیل (13:17) پانی اور جھاگ کی شاندار طریقے سے واضح کرتی ہے کہ حق، پانی کی طرح، سطح کے نیچے ہو سکتا ہے جبکہ باطل، جھاگ کی طرح نمایاں دکھائی دیتا ہے - لیکن حق سیراب کرتا ہے اور باقی رہتا ہے جبکہ باطل 'جفاء' (بے قیمت میل) ہے۔ 13:11 کی شرط 'Allah کسی قوم کی حالت نہیں بدلتا جب تک وہ خود نہ بدلیں' اسلام کے سب سے تبدیلی لانے والے اصولوں میں سے ایک ہے - الٰہی مدد انسانی پہل کی منتظر ہے۔" },
    modernRelevance: { en: "In an age of anxiety and environmental crisis, this surah offers: (1) Nature is not random but divine signs demanding reflection; (2) Hearts find peace only in remembering Allah - no therapy replaces dhikr; (3) Change starts with self - don't wait for circumstances; (4) Truth will prevail despite falsehood's current prominence.", ur: "بے چینی اور ماحولیاتی بحران کے دور میں، یہ سورت پیش کرتی ہے: (1) فطرت بے مقصد نہیں بلکہ غور و فکر کی متقاضی الٰہی نشانیاں ہیں؛ (2) دلوں کو سکون صرف Allah کو یاد کرنے سے ملتا ہے - کوئی علاج ذکر کی جگہ نہیں لے سکتا؛ (3) تبدیلی اپنے آپ سے شروع ہوتی ہے - حالات کا انتظار نہ کریں؛ (4) باطل کی موجودہ نمایاں حیثیت کے باوجود حق غالب آئے گا۔" }
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "يُسَبِّحُ الرَّعْدُ",
        example: { en: "Thunder glorifies", ur: "گرج تسبیح کرتی ہے" },
        effect: "Personification - thunder as conscious worshipper"
      },
      {
        feature: "زَبَدًا رَّابِيًا",
        example: { en: "Rising foam", ur: "اوپر اٹھتا جھاگ" },
        effect: "Visual imagery - foam swelling then vanishing"
      },
      {
        feature: "جُفَاءً",
        example: { en: "As waste/scum", ur: "بے کار میل کچیل" },
        effect: "Rare word emphasizing worthlessness"
      },
      {
        feature: "تَطْمَئِنُّ",
        example: { en: "Find rest/tranquility", ur: "اطمینان پانا" },
        effect: "Form VIII verb intensifying the settling of hearts"
      },
      {
        feature: "طُوبَىٰ",
        example: { en: "Blessedness/Tooba tree", ur: "خوشخبری/طوبیٰ کا درخت" },
        effect: "Unique word appearing only here, indicating Paradise bliss"
      },
      {
        feature: "الْمِحَالِ",
        example: { en: "Severe in assault", ur: "سخت طاقت والا" },
        effect: "Rare word for intense power, only here in Quran"
      }
    ]
  },

  scientificReferences: {
    notes: [
      {
        verse: "13:2",
        topic: "Heavens without visible pillars",
        note: "Gravity and atmospheric forces hold celestial bodies - invisible 'pillars'"
      },
      {
        verse: "13:3",
        topic: "Pairs in fruits",
        note: "Sexual reproduction in plants - male/female parts or distinct varieties"
      },
      {
        verse: "13:4",
        topic: "Same water, different tastes",
        note: "Soil composition, genetics, and environmental factors create variety"
      },
      {
        verse: "13:12",
        topic: "Heavy clouds",
        note: "Clouds carry millions of tons of water yet float due to air density and updrafts"
      },
      {
        verse: "13:17",
        topic: "Water cycle",
        note: "Rain flows in valleys 'by measure' - water finds its level, natural drainage"
      }
    ]
  },

  historicalContext: {
    note: { en: "Ar-Ra'd was revealed in Medina (though some say Makkah) addressing both the Quraysh's demands for miracles and the Jews of Medina questioning Muhammad's prophethood. The surah responds by pointing to nature's miracles visible daily - thunder, lightning, growth - as more profound than demanded supernatural events. The name 'Ar-Ra'd' (Thunder) was chosen by Allah to highlight that even this fearsome natural force is actually glorifying Him. The polytheists feared thunder as a deity or omen; Islam reframes it as worship. The verse about changing oneself (13:11) would later become a foundational principle for Muslim reformers throughout history.", ur: "سورۃ الرعد مدینہ میں نازل ہوئی (اگرچہ بعض کہتے ہیں مکہ میں) قریش کے معجزات کے مطالبات اور مدینہ کے یہودیوں کے محمد ﷺ کی نبوت پر سوالات کے جواب میں۔ سورت روزانہ نظر آنے والے فطرت کے معجزات - گرج، بجلی، نشوونما - کی طرف اشارہ کرکے جواب دیتی ہے جو مطلوبہ مافوق الفطرت واقعات سے زیادہ گہرے ہیں۔ 'الرعد' (گرج) کا نام Allah نے اس بات کو نمایاں کرنے کے لیے منتخب کیا کہ یہ خوفناک قدرتی قوت بھی دراصل اس کی تسبیح کر رہی ہے۔ مشرکین گرج کو ایک دیوتا یا شگون سمجھتے تھے؛ اسلام نے اسے عبادت کے طور پر دوبارہ بیان کیا۔ اپنے آپ کو بدلنے والی آیت (13:11) بعد میں پوری تاریخ میں مسلم اصلاح کاروں کا بنیادی اصول بنی۔" }
  }
};

export default ONTOLOGY;
