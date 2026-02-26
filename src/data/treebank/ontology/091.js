/**
 * Surah Ash-Shams (91) - Ontology of Quranic Concepts
 * The Sun
 * Theme: Seven cosmic oaths leading to the truth about soul purification vs corruption
 */

export const ONTOLOGY = {
  surahId: 91,
  surahName: "Ash-Shams",
  surahNameArabic: "الشمس",
  revelationType: "Makki",
  totalAyahs: 15,

  categories: {
    cosmicOaths: {
      name: "The Seven Cosmic Oaths",
      nameUr: "سات کائناتی قسمیں",
      nameArabic: "القسم الكوني السباعي",
      color: '#F59E0B',
      icon: 'Sun',
      description: { en: "Seven consecutive oaths by celestial and earthly phenomena, all pointing to the central truth about the human soul", ur: "سات متواتر قسمیں آسمانی اور زمینی مظاہر کی، جو سب انسانی روح کے بارے میں مرکزی حقیقت کی طرف اشارہ کرتی ہیں" },
      concepts: [
        {
          term: "الشَّمْسِ وَضُحَاهَا",
          transliteration: "Ash-Shamsi wa Duhaahaa",
          meaning: { en: "The sun and its brightness", ur: "سورج اور اس کی چمک" },
          explanation: { en: "First oath: The sun at its full glory (duhaa = mid-morning light). Represents clarity, guidance, and the source of all earthly light. Symbol of truth unveiled.", ur: "پہلی قسم: سورج اپنی پوری شان میں (ضحیٰ = صبح کی روشنی)۔ وضاحت، ہدایت اور زمین کی تمام روشنی کے منبع کی علامت۔ حق کے منکشف ہونے کی نشانی۔" },
          verseRef: "91:1"
        },
        {
          term: "القَمَرِ إِذَا تَلَاهَا",
          transliteration: "Al-Qamari idhaa Talaahaa",
          meaning: { en: "The moon when it follows it", ur: "چاند جب سورج کے پیچھے آئے" },
          explanation: { en: "Second oath: The moon follows the sun, reflecting its light. Represents those who follow guidance, receiving and transmitting divine light.", ur: "دوسری قسم: چاند سورج کے پیچھے آتا ہے، اس کی روشنی منعکس کرتا ہے۔ ان لوگوں کی علامت جو ہدایت کی پیروی کرتے ہیں، الٰہی نور حاصل اور منتقل کرتے ہیں۔" },
          verseRef: "91:2"
        },
        {
          term: "النَّهَارِ إِذَا جَلَّاهَا",
          transliteration: "An-Nahaari idhaa Jallaahaa",
          meaning: { en: "The day when it reveals it", ur: "دن جب اسے ظاہر کرے" },
          explanation: { en: "Third oath: Day manifests the sun's splendor (jalaa = to reveal/polish). Represents the time of action, clarity, and truth becoming evident.", ur: "تیسری قسم: دن سورج کی شان ظاہر کرتا ہے (جلّیٰ = ظاہر/صاف کرنا)۔ عمل کے وقت، وضاحت اور حق کے واضح ہونے کی علامت۔" },
          verseRef: "91:3"
        },
        {
          term: "اللَّيْلِ إِذَا يَغْشَاهَا",
          transliteration: "Al-Layli idhaa Yaghshaahaa",
          meaning: { en: "The night when it covers it", ur: "رات جب اسے ڈھانپ لے" },
          explanation: { en: "Fourth oath: Night covers the sun (yaghshaa = to cover). Represents concealment, rest, and also the covering of truth by those who reject it.", ur: "چوتھی قسم: رات سورج کو ڈھانپ لیتی ہے (یغشیٰ = ڈھانپنا)۔ پوشیدگی، آرام اور حق کو ڈھانپنے والوں کی بھی علامت۔" },
          verseRef: "91:4"
        },
        {
          term: "السَّمَاءِ وَمَا بَنَاهَا",
          transliteration: "As-Samaa'i wa maa Banaahaa",
          meaning: { en: "The sky and He who built it", ur: "آسمان اور اسے بنانے والا" },
          explanation: { en: "Fifth oath: The sky's construction by Allah. 'Banaa' (built) implies intelligent design, structure, and purposeful engineering.", ur: "پانچویں قسم: آسمان کی تعمیر اللہ کے ہاتھوں۔ 'بنیٰ' (تعمیر) میں ذہین ڈیزائن، ساخت اور مقصدی انجینئرنگ کا مفہوم ہے۔" },
          verseRef: "91:5"
        },
        {
          term: "الْأَرْضِ وَمَا طَحَاهَا",
          transliteration: "Al-Ardi wa maa Tahaahaa",
          meaning: { en: "The earth and He who spread it", ur: "زمین اور اسے بچھانے والا" },
          explanation: { en: "Sixth oath: The earth spread out for habitation. Unique verb 'tahaa' emphasizes the special preparation of earth for human life.", ur: "چھٹی قسم: زمین کو رہائش کے لیے بچھایا گیا۔ منفرد فعل 'طحیٰ' انسانی زندگی کے لیے زمین کی خصوصی تیاری پر زور دیتا ہے۔" },
          verseRef: "91:6"
        },
        {
          term: "نَفْسٍ وَمَا سَوَّاهَا",
          transliteration: "Nafsin wa maa Sawwaahaa",
          meaning: { en: "The soul and He who proportioned it", ur: "نفس اور اسے درست بنانے والا" },
          explanation: { en: "Seventh and climactic oath: The human soul perfected by Allah. Indefinite 'nafsin' = any soul, universal truth. Sawwaa = perfected, balanced, proportioned.", ur: "ساتویں اور عروج کی قسم: انسانی روح کو اللہ نے کامل بنایا۔ نکرہ 'نفسٍ' = کوئی بھی روح، آفاقی حقیقت۔ سوّیٰ = کامل کیا، متوازن کیا، درست بنایا۔" },
          verseRef: "91:7"
        }
      ]
    },

    soulAndItsNature: {
      name: "The Nature of the Soul",
      nameUr: "نفس کی فطرت",
      nameArabic: "طبيعة النفس",
      color: '#8B5CF6',
      icon: 'Heart',
      description: { en: "The soul's inherent design with both potential for good and evil", ur: "نفس کی فطری ساخت جس میں نیکی اور بدی دونوں کی صلاحیت ہے" },
      concepts: [
        {
          term: "سَوَّاهَا",
          transliteration: "Sawwaahaa",
          meaning: { en: "He proportioned/perfected it", ur: "اسے درست اور مکمل بنایا" },
          explanation: { en: "Allah designed the soul with inherent balance. The soul is not inherently corrupt but divinely engineered with the capacity for both good and evil.", ur: "اللہ نے نفس کو فطری توازن کے ساتھ بنایا۔ نفس فطری طور پر خراب نہیں بلکہ الٰہی طور پر نیکی اور بدی دونوں کی صلاحیت کے ساتھ بنایا گیا ہے۔" },
          verseRef: "91:7"
        },
        {
          term: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
          transliteration: "Fa-alhamahaa Fujoorahaa wa Taqwaahaa",
          meaning: { en: "Then inspired it with its wickedness and righteousness", ur: "پھر اسے اس کی بدکاری اور تقویٰ کا الہام دیا" },
          explanation: { en: "Ilham = divine inspiration without teaching. Both fujoor (wickedness) and taqwa (righteousness) are INNATE - we instinctively know right from wrong. This is the fitrah.", ur: "الہام = بغیر سکھائے الٰہی القاء۔ فجور (بدکاری) اور تقویٰ (پرہیزگاری) دونوں فطری ہیں - ہم جبلّی طور پر نیکی اور بدی میں فرق جانتے ہیں۔ یہ فطرت ہے۔" },
          verseRef: "91:8"
        },
        {
          term: "فُجُور",
          transliteration: "Fujoor",
          meaning: { en: "Wickedness/sinfulness", ur: "بدکاری/گناہ" },
          explanation: { en: "From 'fajara' (to break forth like a spring). Sin is breaking divine boundaries. Listed first not because dominant, but to show what must be overcome.", ur: "'فجر' (چشمے کی طرح پھوٹنا) سے ماخوذ۔ گناہ الٰہی حدود کو توڑنا ہے۔ پہلے ذکر اس لیے نہیں کہ غالب ہے، بلکہ یہ دکھانے کے لیے کہ کس پر قابو پانا ہے۔" },
          verseRef: "91:8"
        },
        {
          term: "تَقْوَى",
          transliteration: "Taqwaa",
          meaning: { en: "God-consciousness/righteousness", ur: "خدا ترسی/تقویٰ" },
          explanation: { en: "From 'waqaa' (to protect). Taqwa is protecting oneself through consciousness of Allah. The soul naturally knows this path.", ur: "'وقیٰ' (بچانا) سے ماخوذ۔ تقویٰ اللہ کی آگاہی کے ذریعے اپنے آپ کو بچانا ہے۔ نفس فطری طور پر اس راستے کو جانتا ہے۔" },
          verseRef: "91:8"
        }
      ]
    },

    successAndFailure: {
      name: "Success and Failure of the Soul",
      nameUr: "نفس کی فلاح اور ناکامی",
      nameArabic: "فلاح النفس وخسرانها",
      color: '#10B981',
      icon: 'Scale',
      description: { en: "The two possible outcomes for the human soul", ur: "انسانی روح کے دو ممکنہ انجام" },
      concepts: [
        {
          term: "قَدْ أَفْلَحَ مَن زَكَّاهَا",
          transliteration: "Qad Aflaha man Zakkaahaa",
          meaning: { en: "He has succeeded who purifies it", ur: "بیشک کامیاب ہوا جس نے اسے پاک کیا" },
          explanation: { en: "THE ANSWER to all seven oaths. Aflaha = succeeded like a farmer (fallah) who cultivates land. Zakkaa = to purify AND grow. Tazkiyah makes the soul both pure and greater.", ur: "تمام سات قسموں کا جواب۔ افلح = کامیاب ہوا جیسے کسان (فلّاح) زمین کاشت کرتا ہے۔ زکّیٰ = پاک کرنا اور بڑھانا۔ تزکیہ نفس کو پاک بھی کرتا ہے اور بڑا بھی۔" },
          verseRef: "91:9"
        },
        {
          term: "وَقَدْ خَابَ مَن دَسَّاهَا",
          transliteration: "Wa qad Khaaba man Dassaahaa",
          meaning: { en: "And he has failed who corrupts it", ur: "اور ناکام ہوا جس نے اسے آلودہ کیا" },
          explanation: { en: "Khaaba = to fail, be disappointed. Dassaa = to hide, bury, conceal. Corruption is HIDING the soul's innate goodness, burying the fitrah under sin.", ur: "خاب = ناکام ہونا، مایوس ہونا۔ دسّیٰ = چھپانا، دبانا، مخفی کرنا۔ فساد نفس کی فطری نیکی کو چھپانا ہے، فطرت کو گناہ کے نیچے دبا دینا۔" },
          verseRef: "91:10"
        },
        {
          term: "زَكَّى",
          transliteration: "Zakkaa",
          meaning: { en: "To purify and grow", ur: "پاک کرنا اور بڑھانا" },
          explanation: { en: "Same root as zakah. Purification leads to growth. The soul that is cleansed doesn't become less - it becomes MORE.", ur: "زکوٰۃ کا ہم اصل۔ تزکیہ بڑھوتری کی طرف لے جاتا ہے۔ جو نفس صاف ہوتا ہے وہ کم نہیں ہوتا - بلکہ زیادہ ہوتا ہے۔" },
          verseRef: "91:9"
        },
        {
          term: "دَسَّى",
          transliteration: "Dassaa",
          meaning: { en: "To corrupt by burying", ur: "دبا کر خراب کرنا" },
          explanation: { en: "Opposite of zakkaa. Instead of growing the soul, dassaa buries it. The fitrah is covered, hidden, suffocated by sins.", ur: "زکّیٰ کی ضد۔ نفس کو بڑھانے کی بجائے دسّیٰ اسے دبا دیتا ہے۔ فطرت ڈھکی، چھپائی اور گناہوں سے دبائی جاتی ہے۔" },
          verseRef: "91:10"
        }
      ]
    },

    storyOfThamud: {
      name: "The Story of Thamud",
      nameUr: "قوم ثمود کا واقعہ",
      nameArabic: "قصة ثمود",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "Historical example of souls that were corrupted, illustrating the consequence of dassaa", ur: "ان نفوس کی تاریخی مثال جو فاسد ہو گئے، دسّیٰ کے انجام کی وضاحت" },
      concepts: [
        {
          term: "ثَمُود",
          transliteration: "Thamood",
          meaning: { en: "The people of Thamud", ur: "قوم ثمود" },
          explanation: { en: "Ancient Arabian tribe who dwelt in rock-carved homes in Al-Hijr. Prophet Salih was sent to them with the miraculous she-camel as a sign.", ur: "قدیم عرب قبیلہ جو الحجر میں چٹانوں سے تراشے ہوئے گھروں میں رہتے تھے۔ حضرت صالح علیہ السلام معجزاتی اونٹنی کے ساتھ ان کی طرف بھیجے گئے۔" },
          verseRef: "91:11"
        },
        {
          term: "كَذَّبَتْ... بِطَغْوَاهَا",
          transliteration: "Kadhdhabat... bi-Taghwaahaa",
          meaning: { en: "They denied in their transgression", ur: "انہوں نے اپنی سرکشی میں جھٹلایا" },
          explanation: { en: "Their taghwa (transgression) CAUSED their takdhib (denial). Transgression leads to denial - sin clouds the heart's ability to recognize truth.", ur: "ان کی طغویٰ (سرکشی) نے تکذیب (جھٹلانے) کا سبب بنایا۔ سرکشی انکار کی طرف لے جاتی ہے - گناہ دل کی حق پہچاننے کی صلاحیت پر پردہ ڈال دیتا ہے۔" },
          verseRef: "91:11"
        },
        {
          term: "انبَعَثَ أَشْقَاهَا",
          transliteration: "Inba'atha Ashqaahaa",
          meaning: { en: "The most wretched of them rose up", ur: "ان میں سے سب سے بدبخت اٹھا" },
          explanation: { en: "Among sinners, there are degrees. The ashqaa (most wretched) led the crime. His name was Qidar bin Salif. Leadership in evil has consequences.", ur: "گنہگاروں میں بھی درجے ہیں۔ اشقیٰ (سب سے بدبخت) نے جرم کی قیادت کی۔ اس کا نام قدار بن سالف تھا۔ برائی میں قیادت کے نتائج ہوتے ہیں۔" },
          verseRef: "91:12"
        },
        {
          term: "نَاقَةَ اللَّهِ",
          transliteration: "Naaqat-Allah",
          meaning: { en: "The she-camel of Allah", ur: "اللہ کی اونٹنی" },
          explanation: { en: "A miraculous sign - the she-camel emerged from a rock. It had designated drinking days. Harming it meant rejecting Allah's sign directly.", ur: "ایک معجزاتی نشانی - اونٹنی چٹان سے نکلی۔ اس کے پانی پینے کے مقررہ دن تھے۔ اسے نقصان پہنچانا اللہ کی نشانی کو براہ راست رد کرنا تھا۔" },
          verseRef: "91:13"
        },
        {
          term: "عَقَرُوهَا",
          transliteration: "'Aqaroohaa",
          meaning: { en: "They hamstrung her", ur: "انہوں نے اس کی کونچیں کاٹ دیں" },
          explanation: { en: "'Aqara = to cut the legs, a cruel method of killing. They not only rejected the sign but brutally destroyed it - adding cruelty to disbelief.", ur: "عقر = ٹانگیں کاٹنا، ظالمانہ طریقہ قتل۔ انہوں نے نشانی کو رد ہی نہیں کیا بلکہ وحشیانہ طور پر تباہ کیا - کفر میں ظلم کا اضافہ۔" },
          verseRef: "91:14"
        },
        {
          term: "دَمْدَمَ",
          transliteration: "Damdama",
          meaning: { en: "He destroyed completely", ur: "مکمل تباہ کر دیا" },
          explanation: { en: "Unique quadriliteral verb used only here. The repeated syllables (dam-dam) suggest complete, crushing destruction. Onomatopoeia for utter annihilation.", ur: "منفرد چہار حرفی فعل صرف یہاں استعمال ہوا۔ دہرائے ہوئے حروف (دم-دم) مکمل کچل دینے والی تباہی کا اظہار۔ مکمل فنا کی آواز کی نقل۔" },
          verseRef: "91:14"
        },
        {
          term: "فَسَوَّاهَا",
          transliteration: "Fa-sawwaahaa",
          meaning: { en: "And leveled it", ur: "اور برابر کر دیا" },
          explanation: { en: "Same verb as verse 7 (sawwaa). Allah sawwaa (perfected) the nafs, but when Thamud dassaa (buried) it, Allah sawwaa (leveled) them. The verb can create or destroy.", ur: "وہی فعل جو آیت 7 میں ہے (سوّیٰ)۔ اللہ نے نفس کو سوّیٰ (کامل) بنایا، لیکن جب ثمود نے دسّیٰ (دبایا)، تو اللہ نے انہیں سوّیٰ (برابر) کر دیا۔ ایک ہی فعل تخلیق یا تباہی دونوں کر سکتا ہے۔" },
          verseRef: "91:14"
        }
      ]
    },

    divineAuthority: {
      name: "Divine Authority",
      nameUr: "الٰہی اقتدار",
      nameArabic: "السلطة الإلهية",
      color: '#F59E0B',
      icon: 'Crown',
      description: { en: "Allah's absolute power and fearlessness in executing justice", ur: "اللہ کی مطلق قدرت اور انصاف کے نفاذ میں بے خوفی" },
      concepts: [
        {
          term: "وَلَا يَخَافُ عُقْبَاهَا",
          transliteration: "Wa laa Yakhafu 'Uqbaahaa",
          meaning: { en: "And He does not fear its consequence", ur: "اور وہ اس کے انجام سے نہیں ڈرتا" },
          explanation: { en: "Unlike human rulers who fear retaliation, Allah's justice is absolute. No one can question or avenge. His destruction of Thamud was final and unchallengeable.", ur: "انسانی حکمرانوں کے برعکس جو انتقام سے ڈرتے ہیں، اللہ کا انصاف مطلق ہے۔ کوئی سوال یا بدلہ نہیں لے سکتا۔ ثمود کی تباہی حتمی اور ناقابل چیلنج تھی۔" },
          verseRef: "91:15"
        },
        {
          term: "رَبُّهُم",
          transliteration: "Rabbuhum",
          meaning: { en: "Their Lord", ur: "ان کا رب" },
          explanation: { en: "Even while destroying them, they remain His creation. Rabb implies lordship, ownership, and authority. The punishment came from the One who created them.", ur: "تباہ کرتے ہوئے بھی وہ اس کی مخلوق رہے۔ رب میں خداوندی، ملکیت اور اختیار کا مفہوم ہے۔ سزا اسی ذات سے آئی جس نے انہیں بنایا۔" },
          verseRef: "91:14"
        },
        {
          term: "بِذَنبِهِمْ",
          transliteration: "Bi-dhanbihim",
          meaning: { en: "Because of their sin", ur: "ان کے گناہ کی وجہ سے" },
          explanation: { en: "The destruction was not arbitrary but caused by their sin. Justice: the punishment matched the crime. They dassaa their souls, so they were sawwaa'd (leveled).", ur: "تباہی بے مقصد نہیں تھی بلکہ ان کے گناہ کی وجہ سے تھی۔ انصاف: سزا جرم کے مطابق تھی۔ انہوں نے اپنے نفس کو دسّیٰ (دبایا)، تو انہیں سوّیٰ (برابر) کر دیا گیا۔" },
          verseRef: "91:14"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الشمس",
      to: "القمر",
      type: "sequence",
      description: { en: "Sun followed by moon", ur: "سورج کے بعد چاند" },
      explanation: { en: "The moon follows (talaahaa) the sun - reflecting its light, representing followers of guidance", ur: "چاند سورج کے پیچھے آتا ہے (تلاھا) - اس کی روشنی منعکس کرتے ہوئے، ہدایت کے پیروکاروں کی نمائندگی" }
    },
    {
      from: "النهار",
      to: "الليل",
      type: "contrast",
      description: { en: "Day revealing vs Night covering", ur: "دن ظاہر کرنا بمقابلہ رات ڈھانپنا" },
      explanation: { en: "Day reveals (jallaa) what night covers (yaghshaa) - truth vs concealment", ur: "دن ظاہر کرتا ہے (جلّیٰ) جو رات ڈھانپتی ہے (یغشیٰ) - حق بمقابلہ پوشیدگی" }
    },
    {
      from: "السماء",
      to: "الأرض",
      type: "pair",
      description: { en: "Heaven and earth", ur: "آسمان اور زمین" },
      explanation: { en: "Both built/spread by Allah - complete cosmic framework", ur: "دونوں اللہ کے بنائے/بچھائے ہوئے - مکمل کائناتی ڈھانچہ" }
    },
    {
      from: "فجور",
      to: "تقوى",
      type: "antithesis",
      description: { en: "Wickedness vs Righteousness", ur: "بدکاری بمقابلہ تقویٰ" },
      explanation: { en: "Both innately known (ilham) - the soul's dual potential", ur: "دونوں فطری طور پر معلوم (الہام) - نفس کی دوہری صلاحیت" }
    },
    {
      from: "زكاها",
      to: "دساها",
      type: "antithesis",
      description: { en: "Purification vs Corruption", ur: "تزکیہ بمقابلہ فساد" },
      explanation: { en: "Growing the soul vs burying it - the central choice", ur: "نفس کو بڑھانا بمقابلہ دبانا - مرکزی انتخاب" }
    },
    {
      from: "أفلح",
      to: "خاب",
      type: "antithesis",
      description: { en: "Success vs Failure", ur: "کامیابی بمقابلہ ناکامی" },
      explanation: { en: "Ultimate outcomes of the two paths", ur: "دو راستوں کے حتمی نتائج" }
    },
    {
      from: "سواها (v.7)",
      to: "سواها (v.14)",
      type: "wordplay",
      description: { en: "Perfected vs Leveled", ur: "کامل بنانا بمقابلہ برابر کرنا" },
      explanation: { en: "Same verb for creating souls and destroying Thamud - sawwaa can build or demolish", ur: "روحوں کی تخلیق اور ثمود کی تباہی کے لیے ایک ہی فعل - سوّیٰ تعمیر یا تخریب دونوں کر سکتا ہے" }
    },
    {
      from: "دساها",
      to: "ثمود",
      type: "exemplification",
      description: { en: "Thamud exemplifies dassaa", ur: "ثمود دسّیٰ کی مثال ہے" },
      explanation: { en: "The story of Thamud illustrates what happens when souls are corrupted", ur: "ثمود کی کہانی واضح کرتی ہے کہ جب نفوس فاسد ہوں تو کیا ہوتا ہے" }
    }
  ],

  thematicFlow: {
    title: "From Cosmos to Consequence",
    titleArabic: "من الكون إلى العاقبة",
    stages: [
      {
        stage: 1,
        theme: "Celestial Oaths",
        verses: "91:1-4",
        description: { en: "Sun, moon, day, night - cosmic alternation of light and darkness", ur: "سورج، چاند، دن، رات - روشنی اور تاریکی کی کائناتی تبدیلی" }
      },
      {
        stage: 2,
        theme: "Divine Creation",
        verses: "91:5-6",
        description: { en: "Heaven built, earth spread - the cosmic framework", ur: "آسمان تعمیر، زمین بچھائی - کائناتی ڈھانچہ" }
      },
      {
        stage: 3,
        theme: "The Human Soul",
        verses: "91:7-8",
        description: { en: "Soul proportioned, inspired with both wickedness and righteousness", ur: "نفس درست بنایا، بدکاری اور تقویٰ دونوں کا الہام دیا" }
      },
      {
        stage: 4,
        theme: "The Central Truth",
        verses: "91:9-10",
        description: { en: "THE ANSWER: Success for purifiers, failure for corruptors", ur: "مرکزی حقیقت: پاک کرنے والوں کے لیے کامیابی، فاسد کرنے والوں کے لیے ناکامی" }
      },
      {
        stage: 5,
        theme: "Historical Example",
        verses: "91:11-14",
        description: { en: "Thamud's transgression, crime, and destruction", ur: "ثمود کی سرکشی، جرم اور تباہی" }
      },
      {
        stage: 6,
        theme: "Divine Sovereignty",
        verses: "91:15",
        description: { en: "Allah fears no consequence - absolute authority", ur: "اللہ کسی انجام سے نہیں ڈرتا - مطلق اختیار" }
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 92,
        name: "Al-Layl",
        relation: "Thematic twin",
        sharedTheme: "Two paths: generosity/taqwa vs miserliness/denial"
      },
      {
        surah: 7,
        name: "Al-A'raf",
        verses: "73-79",
        relation: "Detailed Thamud story",
        sharedTheme: "Salih and the she-camel"
      },
      {
        surah: 26,
        name: "Ash-Shu'ara",
        verses: "141-159",
        relation: "Thamud narrative",
        sharedTheme: "Their rejection and punishment"
      },
      {
        surah: 54,
        name: "Al-Qamar",
        verses: "23-31",
        relation: "Thamud condensed",
        sharedTheme: "Their rejection of the she-camel"
      },
      {
        surah: 89,
        name: "Al-Fajr",
        verses: "9-13",
        relation: "Thamud among destroyed nations",
        sharedTheme: "Those who carved rocks"
      }
    ]
  },

  hadith: [
    {
      arabic: "إِنَّ اللَّهَ لا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
      english: "Allah does not look at your forms or wealth, but He looks at your hearts and deeds",
      source: "Muslim",
      relevance: "The nafs (heart/soul) is what matters - its purification or corruption"
    },
    {
      arabic: "أَلا وَإِنَّ فِي الجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الجَسَدُ كُلُّهُ",
      english: "Indeed in the body there is a piece of flesh; if it is sound, the whole body is sound",
      source: "Bukhari & Muslim",
      relevance: "Tazkiyah of the heart/nafs affects everything"
    },
    {
      arabic: "قَدْ أَفْلَحَ مَنْ أَسْلَمَ وَرُزِقَ كَفَافًا وَقَنَّعَهُ اللَّهُ بِمَا آتَاهُ",
      english: "He has succeeded who submits, is given sufficient provision, and is content with what Allah has given",
      source: "Muslim",
      relevance: "Aflaha (success) defined - submission and contentment"
    }
  ],

  practicalApplication: {
    title: "Living by Ash-Shams",
    applications: [
      {
        principle: "The soul needs cultivation",
        how: "Like a farmer (fallah), regularly tend your soul: remove weeds (sins), water it (worship), expose it to light (knowledge)",
        verse: "91:9"
      },
      {
        principle: "You already know right from wrong",
        how: "Allah has placed the compass within you (ilham). When unsure, pause and listen to your fitrah - it knows",
        verse: "91:8"
      },
      {
        principle: "Don't bury your conscience",
        how: "Dassaa is covering the soul's light. Each ignored sin buries the fitrah deeper. Keep your conscience alive and responsive",
        verse: "91:10"
      },
      {
        principle: "Tazkiyah is growth, not deprivation",
        how: "Zakkaa means both purification AND growth. Purifying doesn't make you less - it makes you MORE",
        verse: "91:9"
      },
      {
        principle: "History teaches",
        how: "Learn from Thamud: transgression leads to denial leads to destruction. Break the cycle early",
        verse: "91:11-14"
      },
      {
        principle: "Divine justice is certain",
        how: "Allah fears no consequence. Justice will be served. This should comfort the oppressed and warn the oppressor",
        verse: "91:15"
      }
    ]
  },

  uniqueInsight: {
    title: { en: "The Internal Cosmos", ur: "باطنی کائنات" },
    insight: { en: "This surah's structure is profound: seven cosmic oaths (sun, moon, day, night, sky, earth, soul) all lead to ONE truth - the soul's purification or corruption. The message: the internal cosmos (nafs) is as significant as the external cosmos. The same Allah who banaa (built) the sky and tahaa (spread) the earth also sawwaa (proportioned) your soul. The verb sawwaa appears twice: for creating the soul (v.7) and for destroying Thamud (v.14). This wordplay is devastating - the same creative power can become destructive. But notice: Allah perfected the soul BEFORE inspiring it with fujoor and taqwa. The soul's default state is balanced, not corrupt. Corruption (dassaa) is covering this balance, while purification (zakkaa) is uncovering and growing it. The farmer metaphor (aflaha from fallah) is perfect: success requires cultivation, not just avoiding harm. You must actively grow your soul, not just keep it from rotting.", ur: "اس سورت کی ساخت گہری ہے: سات کائناتی قسمیں (سورج، چاند، دن، رات، آسمان، زمین، نفس) سب ایک حقیقت کی طرف لے جاتی ہیں - نفس کا تزکیہ یا فساد۔ پیغام: باطنی کائنات (نفس) ظاہری کائنات جتنی اہم ہے۔ وہی اللہ جس نے آسمان بنایا اور زمین بچھائی، اسی نے آپ کا نفس بھی سوّیٰ (درست) بنایا۔ سوّیٰ دو بار آیا: نفس کی تخلیق (آیت 7) اور ثمود کی تباہی (آیت 14) کے لیے۔ یہ فعلی صنعت تباہ کن ہے - وہی تخلیقی قوت تباہ کن بن سکتی ہے۔ غور کریں: اللہ نے نفس کو فجور اور تقویٰ کا الہام دینے سے پہلے کامل بنایا۔ نفس کی بنیادی حالت متوازن ہے، فاسد نہیں۔ فساد (دسّیٰ) اس توازن کو ڈھانپنا ہے، جبکہ تزکیہ (زکّیٰ) اسے ظاہر اور بڑھانا ہے۔" },
    modernRelevance: "In an age of external achievement, this surah redirects focus inward. Your most important project is your nafs. All the cosmic grandeur exists partly to teach this lesson about the inner world. The seven oaths build anticipation: what truth is so important it requires all this? Answer: your soul's fate. Therapy, self-improvement, and spiritual practice all connect to this Quranic principle of tazkiyah."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "Seven Consecutive Oaths",
        significance: "Most consecutive oaths in any surah",
        effect: "Builds suspense for the main message - maximum emphasis"
      },
      {
        feature: "Paired Oaths",
        examples: "Sun/Moon, Day/Night, Sky/Earth",
        effect: "Shows Allah's control over complementary opposites"
      },
      {
        feature: "Indefinite Nafs",
        example: "وَنَفْسٍ (not الْنَفْس)",
        effect: "Universal truth: applies to ANY soul, not a specific one"
      },
      {
        feature: "Sawwaa Wordplay",
        example: "سَوَّاهَا (v.7) vs فَسَوَّاهَا (v.14)",
        effect: "Same verb for creation and destruction - devastating irony"
      },
      {
        feature: "Quadriliteral Damdama",
        example: "دَمْدَمَ (dam-dam)",
        effect: "Onomatopoeia for crushing destruction - sounds like rumbling annihilation"
      },
      {
        feature: "Causative Chain",
        example: "طَغْوَى → كَذَّبَ → عَقَرُوا → دَمْدَمَ",
        effect: "Transgression leads to denial leads to crime leads to destruction"
      }
    ]
  },

  comparisonTable: {
    title: "The Two Outcomes",
    headers: ["Aspect", "Purification (Zakkaa)", "Corruption (Dassaa)"],
    rows: [
      {
        aspect: "Action",
        purification: "زَكَّاهَا (purifies/grows it)",
        corruption: "دَسَّاهَا (buries/hides it)"
      },
      {
        aspect: "Result",
        purification: "أَفْلَحَ (succeeds)",
        corruption: "خَابَ (fails)"
      },
      {
        aspect: "Meaning",
        purification: "Growing the soul like a farmer",
        corruption: "Burying the fitrah under sins"
      },
      {
        aspect: "Direction",
        purification: "Upward (growth)",
        corruption: "Downward (burial)"
      },
      {
        aspect: "Example",
        purification: "The righteous throughout history",
        corruption: "Thamud - transgression led to destruction"
      },
      {
        aspect: "Ultimate Fate",
        purification: "Eternal success (فَلَاح)",
        corruption: "Complete loss (خَيْبَة)"
      }
    ]
  },

  sevenOathsTable: {
    title: "The Seven Cosmic Oaths",
    oaths: [
      {
        number: 1,
        object: "الشَّمْس",
        meaning: "The Sun",
        symbolism: "Primary source of light - guidance, truth"
      },
      {
        number: 2,
        object: "القَمَر",
        meaning: "The Moon",
        symbolism: "Reflected light - followers of guidance"
      },
      {
        number: 3,
        object: "النَّهَار",
        meaning: "The Day",
        symbolism: "Revelation, clarity, action"
      },
      {
        number: 4,
        object: "اللَّيْل",
        meaning: "The Night",
        symbolism: "Concealment, rest, covering"
      },
      {
        number: 5,
        object: "السَّمَاء",
        meaning: "The Sky",
        symbolism: "Divine construction - intelligent design"
      },
      {
        number: 6,
        object: "الأَرْض",
        meaning: "The Earth",
        symbolism: "Preparation for life - divine hospitality"
      },
      {
        number: 7,
        object: "نَفْس",
        meaning: "The Soul",
        symbolism: "The internal cosmos - climactic focus"
      }
    ],
    conclusion: "All seven oaths culminate in the truth about the soul: purify it to succeed, corrupt it to fail"
  },

  thamudTimeline: {
    title: "The Fall of Thamud",
    stages: [
      {
        stage: 1,
        event: "طَغْوَى (Transgression)",
        description: { en: "Their souls became corrupted through rebellion", ur: "ان کے نفوس بغاوت سے فاسد ہو گئے" }
      },
      {
        stage: 2,
        event: "كَذَّبَتْ (Denial)",
        description: { en: "Transgression led them to deny truth and their prophet", ur: "سرکشی نے انہیں حق اور اپنے نبی کے انکار تک پہنچایا" }
      },
      {
        stage: 3,
        event: "انبَعَثَ أَشْقَاهَا (Most wretched rose)",
        description: { en: "The worst among them took leadership in evil", ur: "ان میں سب سے بدتر نے برائی میں قیادت سنبھالی" }
      },
      {
        stage: 4,
        event: "عَقَرُوهَا (Hamstrung the camel)",
        description: { en: "They cruelly killed Allah's miraculous sign", ur: "انہوں نے ظالمانہ طور پر اللہ کی معجزاتی نشانی کو مار ڈالا" }
      },
      {
        stage: 5,
        event: "دَمْدَمَ... فَسَوَّاهَا (Complete destruction)",
        description: { en: "Allah leveled them completely - utter annihilation", ur: "اللہ نے انہیں مکمل طور پر برابر کر دیا - کلی فنا" }
      }
    ]
  }
};

export default ONTOLOGY;
