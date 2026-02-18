/**
 * Surah Al-Masad / Al-Lahab (111) - Ontology of Quranic Concepts
 * The Only Surah Naming a Specific Enemy by Nickname
 *
 * Theme: Fate of those who oppose Allah's messenger
 * Unique Feature: Prophecy that came true - Abu Lahab died as a disbeliever
 */

const SURAH_111_ONTOLOGY = {
  surahId: 111,
  name: {
    en: 'Al-Masad - The Fate of Opposition',
    ur: 'المسد - مخالفت کا انجام',
    hi: 'अल-मसद - मुख़ालिफ़त का अंजाम',
    ar: 'المسد',
  },
  description: {
    en: 'The only surah that names a specific enemy by his nickname. Abu Lahab (Father of Flame) was the Prophet\'s ﷺ own uncle who violently opposed Islam. This surah was a prophecy - and it came true: he died as a disbeliever, unable to disprove the Quran even by pretending to accept Islam.',
    ur: 'واحد سورہ جو کسی خاص دشمن کا لقب سے نام لیتی ہے۔ ابو لہب (شعلے کا باپ) نبی ﷺ کا چچا تھا جس نے اسلام کی سخت مخالفت کی۔ یہ سورہ پیشگوئی تھی - اور سچ ہوئی: وہ کافر مرا، اسلام قبول کر کے قرآن کو جھوٹا ثابت نہ کر سکا۔',
    hi: 'अकेली सूरह जो किसी ख़ास दुश्मन का लक़ब से नाम लेती है। अबू लहब (शोले का बाप) नबी ﷺ का चचा था जिसने इस्लाम की सख़्त मुख़ालिफ़त की। यह सूरह पेशगोई थी - और सच हुई: वह काफ़िर मरा, इस्लाम क़बूल कर के क़ुरआन को झूठा साबित न कर सका।',
  },

  categories: {
    condemnation: {
      id: 'condemnation',
      label: { en: 'Divine Condemnation', ur: 'الہی لعنت', hi: 'इलाही लानत' },
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: {
        en: 'Allah\'s direct curse on a specific enemy',
        ur: 'ایک خاص دشمن پر اللہ کی براہ راست لعنت',
      },
      concepts: [
        {
          id: 'tabbat-yada',
          arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ',
          transliteration: 'Tabbat Yada Abi Lahab',
          meaning: { en: 'May the hands of Abu Lahab perish', ur: 'ابو لہب کے ہاتھ ٹوٹ جائیں', hi: 'अबू लहब के हाथ टूट जाएँ' },
          ayah: 1,
          details: {
            en: '"Hands" = his efforts, power, actions. Everything he did against Islam is cursed.',
            ur: '"ہاتھ" = اس کی کوششیں، طاقت، اعمال۔ جو کچھ بھی اس نے اسلام کے خلاف کیا ملعون ہے۔',
          },
          characteristic: {
            en: 'تَبَّتْ could be curse OR statement of fact. Both came true - his efforts failed AND he was destroyed.',
            ur: 'تَبَّتْ بد دعا یا حقیقت کا بیان ہو سکتا ہے۔ دونوں سچ ہوئے - اس کی کوششیں ناکام اور وہ تباہ۔',
          },
        },
        {
          id: 'wa-tabba',
          arabic: 'وَتَبَّ',
          transliteration: 'Wa-Tabba',
          meaning: { en: 'And ruined is he', ur: 'اور وہ تباہ ہو', hi: 'और वह तबाह हो' },
          ayah: 1,
          details: {
            en: 'First his HANDS (actions), then HE himself. Total, complete destruction.',
            ur: 'پہلے اس کے ہاتھ (اعمال)، پھر خود وہ۔ کلی، مکمل تباہی۔',
          },
        },
      ],
    },

    uselessWealth: {
      id: 'useless-wealth',
      label: { en: 'Useless Wealth', ur: 'بے کار دولت', hi: 'बेकार दौलत' },
      color: '#F59E0B',
      icon: 'DollarSign',
      description: {
        en: 'Wealth cannot protect from Allah\'s decree',
        ur: 'دولت اللہ کے فیصلے سے نہیں بچا سکتی',
      },
      concepts: [
        {
          id: 'ma-aghna',
          arabic: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ',
          transliteration: 'Ma Aghna Anhu Maluhu',
          meaning: { en: 'His wealth did not avail him', ur: 'اس کا مال کام نہ آیا', hi: 'उसका माल काम न आया' },
          ayah: 2,
          details: {
            en: 'Abu Lahab was very wealthy. But wealth couldn\'t save him from Allah\'s punishment.',
            ur: 'ابو لہب بہت دولت مند تھا۔ لیکن دولت اسے اللہ کی سزا سے نہ بچا سکی۔',
          },
          characteristic: {
            en: 'Lesson: Neither wealth nor status protects from divine justice.',
            ur: 'سبق: نہ دولت نہ رتبہ الہی انصاف سے بچاتا ہے۔',
          },
        },
        {
          id: 'ma-kasaba',
          arabic: 'وَمَا كَسَبَ',
          transliteration: 'Wa ma Kasaba',
          meaning: { en: 'Nor what he earned', ur: 'نہ جو کچھ کمایا', hi: 'न जो कुछ कमाया' },
          ayah: 2,
          details: {
            en: '"What he earned" includes: children, allies, status, reputation. All useless against Allah.',
            ur: '"جو کچھ کمایا" میں شامل: بچے، حلیف، رتبہ، شہرت۔ سب اللہ کے سامنے بے کار۔',
          },
        },
      ],
    },

    hellfire: {
      id: 'hellfire',
      label: { en: 'The Punishment', ur: 'سزا', hi: 'सज़ा' },
      color: '#DC2626',
      icon: 'Flame',
      description: {
        en: 'The eternal fate of Abu Lahab and his wife',
        ur: 'ابو لہب اور اس کی بیوی کا ابدی انجام',
      },
      concepts: [
        {
          id: 'naran-dhata-lahab',
          arabic: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ',
          transliteration: 'Sa-yasla Naran Dhata Lahab',
          meaning: { en: 'He will burn in Fire of Flame', ur: 'وہ شعلے والی آگ میں جلے گا', hi: 'वह शोले वाली आग में जलेगा' },
          ayah: 3,
          details: {
            en: 'Abu LAHAB (Father of Flame) → Fire of LAHAB (Flame). His name became his eternal address.',
            ur: 'ابو لَہَب (شعلے کا باپ) → لَہَب (شعلے) کی آگ۔ اس کا نام اس کا ابدی پتہ بنا۔',
          },
          characteristic: {
            en: 'Poetic justice: He loved his nickname (fiery complexion). Now "fire" is his eternal home.',
            ur: 'شاعرانہ انصاف: اسے اپنا لقب پسند تھا (آتشیں رنگت)۔ اب "آگ" اس کا ابدی گھر۔',
          },
        },
        {
          id: 'wife-punishment',
          arabic: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ',
          transliteration: "Wa-mra'atuhu Hammalat al-Hatab",
          meaning: { en: 'And his wife, carrier of firewood', ur: 'اور اس کی بیوی، لکڑیاں ڈھونے والی', hi: 'और उसकी बीवी, लकड़ियाँ ढोने वाली' },
          ayah: 4,
          details: {
            en: 'Umm Jamil (sister of Abu Sufyan) actively harmed the Prophet ﷺ. She carried thorns to throw in his path.',
            ur: 'ام جمیل (ابو سفیان کی بہن) نے فعال طور پر نبی ﷺ کو نقصان پہنچایا۔ وہ کانٹے اٹھا کر ان کے راستے میں ڈالتی۔',
          },
          characteristic: {
            en: 'حَمَّالَةَ الْحَطَبِ has multiple meanings: (1) She carried thorns, (2) She carried gossip, (3) She will carry Hell-fuel.',
            ur: 'حَمَّالَةَ الْحَطَبِ کے متعدد معانی: (1) وہ کانٹے اٹھاتی، (2) غیبت اٹھاتی، (3) جہنم کا ایندھن اٹھائے گی۔',
          },
        },
        {
          id: 'rope-of-masad',
          arabic: 'فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ',
          transliteration: 'Fi Jidiha Hablun min Masad',
          meaning: { en: 'Around her neck, a rope of palm fiber', ur: 'اس کی گردن میں کھجور کی رسی', hi: 'उसकी गर्दन में खजूर की रस्सी' },
          ayah: 5,
          details: {
            en: 'She wore expensive necklaces. In Hell, she wears a coarse, cheap rope. From luxury to humiliation.',
            ur: 'وہ مہنگے ہار پہنتی۔ جہنم میں موٹی، سستی رسی پہنے گی۔ عیش سے ذلت تک۔',
          },
          characteristic: {
            en: 'جِيد (neck for jewelry) is deliberately used - her beautiful necklaces replaced with Hell-rope.',
            ur: 'جِيد (زیورات کی گردن) جان بوجھ کر استعمال - اس کے خوبصورت ہار جہنم کی رسی سے بدلے۔',
          },
        },
      ],
    },

    prophecy: {
      id: 'prophecy',
      label: { en: 'The Fulfilled Prophecy', ur: 'پوری ہونے والی پیشگوئی', hi: 'पूरी होने वाली पेशगोई' },
      color: '#8B5CF6',
      icon: 'Eye',
      description: {
        en: 'This surah was a test - and the test was passed',
        ur: 'یہ سورہ امتحان تھی - اور امتحان کامیاب ہوا',
      },
      concepts: [
        {
          id: 'the-test',
          meaning: { en: 'The Impossible Test', ur: 'ناممکن امتحان', hi: 'नामुमकिन इम्तिहान' },
          details: {
            en: 'If Abu Lahab had accepted Islam - even falsely - he could have "disproved" the Quran. This surah predicted his death as a disbeliever. He had 10+ years to convert but never did.',
            ur: 'اگر ابو لہب اسلام قبول کر لیتا - جھوٹا بھی - تو قرآن کو "غلط ثابت" کر سکتا۔ اس سورہ نے اس کی کافر کی موت کی پیشگوئی کی۔ اس کے پاس 10+ سال تھے مگر کبھی نہیں قبول کیا۔',
          },
          characteristic: {
            en: 'This proves divine authorship - no human would risk making such a falsifiable prophecy.',
            ur: 'یہ الہی تالیف ثابت کرتا ہے - کوئی انسان ایسی جھوٹی ثابت ہونے والی پیشگوئی کا خطرہ نہ لیتا۔',
          },
        },
        {
          id: 'death-of-abu-lahab',
          meaning: { en: 'How Abu Lahab Died', ur: 'ابو لہب کیسے مرا', hi: 'अबू लहब कैसे मरा' },
          details: {
            en: 'After Battle of Badr (2 AH), Abu Lahab got a disease. His family abandoned him out of fear. He died alone, body decomposed for days before burial by hired workers.',
            ur: 'غزوہ بدر (2 ہجری) کے بعد ابو لہب کو بیماری لگی۔ خاندان نے خوف سے چھوڑ دیا۔ اکیلا مرا، لاش کئی دن سڑتی رہی پھر مزدوروں نے دفنایا۔',
          },
        },
        {
          id: 'death-of-umm-jamil',
          meaning: { en: 'How Umm Jamil Died', ur: 'ام جمیل کیسے مری', hi: 'उम्म जमील कैसे मरी' },
          details: {
            en: 'She died carrying a bundle of thorns. Some reports say she fell with the rope around her neck while carrying firewood.',
            ur: 'وہ کانٹوں کا گٹھر اٹھائے مری۔ کچھ روایات کہتی ہیں لکڑیاں اٹھاتے گردن میں رسی کے ساتھ گر کر مری۔',
          },
        },
      ],
    },

    historicalContext: {
      id: 'historical-context',
      label: { en: 'Historical Context', ur: 'تاریخی پس منظر', hi: 'ऐतिहासिक पृष्ठभूमि' },
      color: '#3B82F6',
      icon: 'Book',
      description: {
        en: 'Who was Abu Lahab and why this surah?',
        ur: 'ابو لہب کون تھا اور یہ سورہ کیوں؟',
      },
      concepts: [
        {
          id: 'who-was-abu-lahab',
          meaning: { en: 'Who Was Abu Lahab?', ur: 'ابو لہب کون تھا؟', hi: 'अबू लहब कौन था?' },
          details: {
            en: 'Abdul-Uzza ibn Abdul-Muttalib - the Prophet\'s own paternal uncle. Nicknamed "Abu Lahab" (Father of Flame) due to his bright, ruddy complexion.',
            ur: 'عبدالعزیٰ بن عبدالمطلب - نبی کا اپنا چچا۔ روشن، سرخ رنگت کی وجہ سے "ابو لہب" (شعلے کا باپ) کہلاتا۔',
          },
        },
        {
          id: 'mount-safa-incident',
          meaning: { en: 'The Mount Safa Incident', ur: 'کوہ صفا کا واقعہ', hi: 'कोह सफ़ा का वाक़िआ' },
          details: {
            en: 'When Prophet ﷺ first publicly preached on Mount Safa, Abu Lahab said: "تَبًّا لَكَ! May you perish! Is this why you gathered us?" This surah responds: "No, YOU will perish!"',
            ur: 'جب نبی ﷺ نے پہلے صفا پہاڑ پر تبلیغ کی، ابو لہب نے کہا: "تَبًّا لَكَ! تو برباد ہو! اس لیے جمع کیا؟" اس سورہ کا جواب: "نہیں، تو برباد ہوگا!"',
          },
        },
        {
          id: 'umm-jamil-identity',
          meaning: { en: 'Who Was Umm Jamil?', ur: 'ام جمیل کون تھی؟', hi: 'उम्म जमील कौन थी?' },
          details: {
            en: 'Arwa bint Harb - sister of Abu Sufyan (Quraysh chief). She actively persecuted the Prophet ﷺ, carrying thorns to throw in his path at night.',
            ur: 'اروی بنت حرب - ابو سفیان (قریش سردار) کی بہن۔ اس نے فعال طور پر نبی ﷺ کو ستایا، رات کانٹے اٹھا کر راستے میں ڈالتی۔',
          },
        },
      ],
    },
  },

  relationships: [
    {
      from: { en: 'Abu Lahab (Flame)', ur: 'ابو لہب (شعلہ)', ar: 'أَبِي لَهَبٍ' },
      to: { en: 'Fire of Flame', ur: 'شعلے والی آگ', ar: 'نَارًا ذَاتَ لَهَبٍ' },
      type: 'poetic-justice',
      explanation: {
        en: 'His nickname "Father of Flame" became his eternal address - the Fire of Flame.',
        ur: 'اس کا لقب "شعلے کا باپ" اس کا ابدی پتہ بنا - شعلے والی آگ۔',
      },
    },
    {
      from: { en: 'Wealth & Status', ur: 'دولت و رتبہ', ar: 'مَالُهُ وَمَا كَسَبَ' },
      to: { en: 'Protection?', ur: 'حفاظت؟', ar: 'مَا أَغْنَىٰ' },
      type: 'negation',
      explanation: {
        en: 'His wealth and accomplishments provided ZERO protection from Allah\'s decree.',
        ur: 'اس کی دولت اور کامیابیوں نے اللہ کے فیصلے سے صفر حفاظت دی۔',
      },
    },
    {
      from: { en: 'Necklace (Luxury)', ur: 'ہار (عیش)', ar: 'جِيد' },
      to: { en: 'Rope of Masad', ur: 'مسد کی رسی', ar: 'حَبْلٌ مِّن مَّسَدٍ' },
      type: 'reversal',
      explanation: {
        en: 'Her expensive jewelry replaced with coarse palm fiber rope - complete humiliation.',
        ur: 'اس کے مہنگے زیورات کھجور کی موٹی رسی سے بدلے - مکمل ذلت۔',
      },
    },
    {
      from: { en: 'Abu Lahab\'s Curse', ur: 'ابو لہب کی بد دعا', ar: 'تَبًّا لَكَ' },
      to: { en: 'Allah\'s Response', ur: 'اللہ کا جواب', ar: 'تَبَّتْ يَدَا أَبِي لَهَبٍ' },
      type: 'reversal',
      explanation: {
        en: 'Abu Lahab said "تَبًّا لَكَ" (May you perish!) to the Prophet. Allah responded: "تَبَّتْ يَدَا" - YOUR hands will perish!',
        ur: 'ابو لہب نے نبی کو "تَبًّا لَكَ" (تو برباد ہو!) کہا۔ اللہ نے جواب دیا: "تَبَّتْ يَدَا" - تیرے ہاتھ برباد ہوں!',
      },
    },
  ],

  thematicFlow: {
    title: {
      en: 'The Complete Destruction',
      ur: 'مکمل تباہی',
      hi: 'मुकम्मल तबाही',
    },
    stages: [
      {
        ayah: 1,
        stage: { en: 'The Curse', ur: 'لعنت' },
        description: {
          en: 'His hands (efforts) and he himself are cursed. Total condemnation from Allah.',
          ur: 'اس کے ہاتھ (کوششیں) اور وہ خود ملعون۔ اللہ کی طرف سے مکمل مذمت۔',
        },
        color: '#EF4444',
      },
      {
        ayah: 2,
        stage: { en: 'Useless Resources', ur: 'بے کار وسائل' },
        description: {
          en: 'Wealth and achievements cannot save from Allah\'s decree. All worldly power is worthless.',
          ur: 'دولت اور کامیابیاں اللہ کے فیصلے سے نہیں بچا سکتیں۔ تمام دنیاوی طاقت بے وقعت۔',
        },
        color: '#F59E0B',
      },
      {
        ayah: 3,
        stage: { en: 'The Punishment', ur: 'سزا' },
        description: {
          en: 'Eternal Hellfire - specifically "Fire of Flame" matching his nickname.',
          ur: 'ابدی جہنم - خاص طور پر "شعلے والی آگ" اس کے لقب کے مطابق۔',
        },
        color: '#DC2626',
      },
      {
        ayah: '4-5',
        stage: { en: 'The Partner Condemned', ur: 'ساتھی ملعون' },
        description: {
          en: 'His wife shares his fate. From carrying thorns to carrying Hell-fuel; from necklaces to ropes.',
          ur: 'اس کی بیوی اس کی تقدیر شریک۔ کانٹے اٹھانے سے جہنم کا ایندھن؛ ہاروں سے رسیاں۔',
        },
        color: '#7C3AED',
      },
    ],
  },

  crossReferences: {
    title: {
      en: 'Related Verses in Other Surahs',
      ur: 'دیگر سورتوں میں متعلقہ آیات',
    },
    references: [
      {
        surah: 108,
        name: { en: 'Al-Kawthar', ur: 'الکوثر' },
        connection: {
          en: 'Similar theme: "Your enemy is cut off" (108:3). Both surahs address enemies who mocked the Prophet ﷺ.',
          ur: 'ملتا موضوع: "تمہارا دشمن کٹا ہوا ہے" (108:3)۔ دونوں سورتیں دشمنوں کو مخاطب جنہوں نے نبی ﷺ کا مذاق اڑایا۔',
        },
      },
      {
        surah: 92,
        ayah: '14-16',
        name: { en: 'Al-Layl', ur: 'اللیل' },
        arabic: 'فَأَنذَرْتُكُمْ نَارًا تَلَظَّىٰ',
        connection: {
          en: '"I have warned you of a Fire that blazes" - same concept of blazing hellfire.',
          ur: '"میں نے تمہیں بھڑکتی آگ سے خبردار کیا" - بھڑکتی جہنم کا وہی تصور۔',
        },
      },
      {
        surah: 69,
        ayah: '30-32',
        name: { en: 'Al-Haqqah', ur: 'الحاقہ' },
        arabic: 'ثُمَّ فِي سِلْسِلَةٍ ذَرْعُهَا سَبْعُونَ ذِرَاعًا فَاسْلُكُوهُ',
        connection: {
          en: '"Then bind him with a chain of 70 cubits" - similar punishment with chains/ropes.',
          ur: '"پھر ستر ہاتھ کی زنجیر میں جکڑو" - زنجیروں/رسیوں والی ملتی سزا۔',
        },
      },
    ],
  },

  hadith: {
    virtue: {
      text: {
        ar: 'لَمَّا نَزَلَتْ: وَأَنْذِرْ عَشِيرَتَكَ الأَقْرَبِينَ، صَعِدَ النَّبِيُّ ﷺ عَلَى الصَّفَا فَقَالَ: يَا صَبَاحَاه!',
        en: 'When "Warn your closest kindred" was revealed, the Prophet ﷺ climbed Mount Safa and called out. When people gathered, he warned them. Abu Lahab said: "تَبًّا لَكَ! May you perish! Is this why you gathered us?" Then this surah was revealed.',
        ur: 'جب "اپنے قریبی رشتے داروں کو خبردار کرو" نازل ہوئی، نبی ﷺ صفا پر چڑھے اور پکارا۔ جب لوگ جمع ہوئے، آپ نے خبردار کیا۔ ابو لہب نے کہا: "تَبًّا لَكَ! تو برباد ہو! اس لیے جمع کیا؟" پھر یہ سورہ نازل ہوئی۔',
      },
      source: 'Sahih al-Bukhari',
      narrator: 'Ibn Abbas',
    },
  },

  uniqueInsight: {
    title: { en: 'The Unfalsifiable Prophecy', ur: 'ناقابل تردید پیشگوئی' },
    content: {
      en: 'This surah is a miracle of the Quran. It declares Abu Lahab will die as a disbeliever and enter Hell. For 10+ years, Abu Lahab could have "disproved" the Quran simply by saying "La ilaha illallah" - even falsely. But he never did. No human author would risk making such a prophecy about a living person who could easily falsify it. This proves the Quran is from the One who knows the unseen.',
      ur: 'یہ سورہ قرآن کا معجزہ ہے۔ یہ اعلان کرتی ہے ابو لہب کافر مرے گا اور جہنم میں جائے گا۔ 10+ سال تک ابو لہب قرآن کو "غلط ثابت" کر سکتا تھا صرف "لا الہ الا اللہ" کہہ کر - جھوٹا بھی۔ مگر اس نے کبھی نہیں کیا۔ کوئی انسانی مصنف کسی زندہ شخص کے بارے میں ایسی پیشگوئی کا خطرہ نہ لیتا جو آسانی سے جھوٹی ثابت کر سکے۔ یہ ثابت کرتا ہے قرآن اس کی طرف سے ہے جو غیب جانتا ہے۔',
    },
  },

  lessonsForUs: {
    title: { en: 'Lessons for Us', ur: 'ہمارے لیے سبق' },
    lessons: [
      {
        lesson: { en: 'Family Ties Don\'t Grant Immunity', ur: 'خاندانی تعلق چھوٹ نہیں دیتا' },
        explanation: {
          en: 'Abu Lahab was the Prophet\'s own uncle - but no family privilege saved him from truth.',
          ur: 'ابو لہب نبی کا اپنا چچا تھا - مگر کوئی خاندانی استحقاق اسے سچائی سے نہ بچا سکا۔',
        },
      },
      {
        lesson: { en: 'Wealth is No Protection', ur: 'دولت حفاظت نہیں' },
        explanation: {
          en: 'His riches and status couldn\'t save him. True protection is from Allah alone.',
          ur: 'اس کی دولت اور رتبہ نہ بچا سکا۔ حقیقی حفاظت صرف اللہ کی طرف سے۔',
        },
      },
      {
        lesson: { en: 'Partnership in Sin = Partnership in Punishment', ur: 'گناہ میں شراکت = سزا میں شراکت' },
        explanation: {
          en: 'Umm Jamil supported her husband\'s evil - and shares his Hell.',
          ur: 'ام جمیل نے اپنے شوہر کی برائی میں ساتھ دیا - اور جہنم میں شریک۔',
        },
      },
      {
        lesson: { en: 'Allah\'s Word is Truth', ur: 'اللہ کا کلام سچ ہے' },
        explanation: {
          en: 'Every prophecy in the Quran comes true. This surah is living proof.',
          ur: 'قرآن کی ہر پیشگوئی سچ ہوتی ہے۔ یہ سورہ زندہ ثبوت ہے۔',
        },
      },
    ],
  },
};

export default SURAH_111_ONTOLOGY;
