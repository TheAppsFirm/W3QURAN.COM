/**
 * Surah Ta-Ha (طه) - Surah 20
 * Ontology of Quranic Concepts and Relationships
 *
 * Theme: Musa's comprehensive story, Quran as mercy not distress, Adam's story
 * Ayahs: 135 | Revelation: Makkan
 */

export const ONTOLOGY = {
  surahId: 20,
  surahName: "Ta-Ha",
  surahNameArabic: "طه",
  totalAyahs: 135,
  revelationType: "Makkan",
  mainTheme: { en: "The Story of Musa in Detail - From Birth to Prophethood, and Adam's Fall", ur: "موسیٰ کا تفصیلی قصہ - پیدائش سے نبوت تک، اور آدم کا واقعہ" },

  categories: {
    quranPurpose: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Purpose of the Quran",
      nameUr: "قرآن کا مقصد",
      nameAr: "مقصد القرآن",
      concepts: [
        { term: "Not for Distress", arabic: "ما أنزلنا عليك القرآن لتشقى", meaning: { en: "Quran was not sent to cause hardship", ur: "قرآن تکلیف دینے کے لیے نازل نہیں کیا گیا" }, ayahs: [2] },
        { term: "Reminder for Those Who Fear", arabic: "تذكرة لمن يخشى", meaning: { en: "A reminder for those who have khashya", ur: "ان کے لیے نصیحت جو خشیت رکھتے ہیں" }, ayahs: [3] },
        { term: "From the Creator", arabic: "تنزيلا ممن خلق", meaning: { en: "Revelation from Him who created", ur: "اس کی طرف سے نازل کردہ جس نے تخلیق کیا" }, ayahs: [4] },
        { term: "Allah on Throne", arabic: "الرحمن على العرش استوى", meaning: { en: "The Most Merciful established on Throne", ur: "رحمٰن عرش پر مستوی ہوا" }, ayahs: [5] },
        { term: "Allah Knows All", arabic: "يعلم السر وأخفى", meaning: { en: "He knows the secret and what is hidden", ur: "وہ ہر راز اور اس سے بھی زیادہ چھپی بات جانتا ہے" }, ayahs: [7] },
        { term: "Beautiful Names", arabic: "الأسماء الحسنى", meaning: { en: "To Him belong the most beautiful names", ur: "خوبصورت ترین نام اسی کے ہیں" }, ayahs: [8] }
      ]
    },

    musaCallingBurningBush: {
      color: '#10B981',
      icon: 'Book',
      name: "Musa at the Burning Bush",
      nameUr: "موسیٰ جلتی جھاڑی کے پاس",
      nameAr: "موسى عند الشجرة المباركة",
      concepts: [
        { term: "Seeing Fire", arabic: "آنست نارا", meaning: { en: "Musa perceived a fire", ur: "موسیٰ نے ایک آگ دیکھی" }, ayahs: [10] },
        { term: "Sacred Valley", arabic: "الواد المقدس طوى", meaning: { en: "The sacred valley of Tuwa", ur: "مقدس وادیِ طویٰ" }, ayahs: [12] },
        { term: "Remove Sandals", arabic: "اخلع نعليك", meaning: { en: "Command to remove sandals", ur: "جوتے اتارنے کا حکم" }, ayahs: [12] },
        { term: "I Am Allah", arabic: "إنني أنا الله", meaning: { en: "Indeed, I am Allah", ur: "بے شک میں اللہ ہوں" }, ayahs: [14] },
        { term: "No God But Me", arabic: "لا إله إلا أنا", meaning: { en: "There is no deity except Me", ur: "میرے سوا کوئی معبود نہیں" }, ayahs: [14] },
        { term: "Worship Me", arabic: "فاعبدني", meaning: { en: "So worship Me", ur: "پس میری عبادت کرو" }, ayahs: [14] },
        { term: "Establish Prayer", arabic: "أقم الصلاة لذكري", meaning: { en: "Establish prayer for My remembrance", ur: "میری یاد کے لیے نماز قائم کرو" }, ayahs: [14] },
        { term: "Hour is Coming", arabic: "الساعة آتية", meaning: { en: "The Hour is coming", ur: "قیامت آنے والی ہے" }, ayahs: [15] },
        { term: "Hidden Hour", arabic: "أكاد أخفيها", meaning: { en: "I almost conceal it", ur: "میں اسے چھپائے رکھنا چاہتا ہوں" }, ayahs: [15] }
      ]
    },

    musaMiracles: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Miracles Given to Musa",
      nameUr: "موسیٰ کو عطا کردہ معجزات",
      nameAr: "معجزات موسى",
      concepts: [
        { term: "Staff Question", arabic: "وما تلك بيمينك يا موسى", meaning: { en: "What is in your right hand, O Musa?", ur: "اے موسیٰ، تمہارے دائیں ہاتھ میں کیا ہے؟" }, ayahs: [17] },
        { term: "Staff to Serpent", arabic: "فألقاها فإذا هي حية تسعى", meaning: { en: "He cast it down, it became a serpent", ur: "اس نے اسے پھینکا تو وہ دوڑتا سانپ بن گیا" }, ayahs: [20] },
        { term: "Take It Without Fear", arabic: "خذها ولا تخف", meaning: { en: "Take it and fear not", ur: "اسے پکڑو اور مت ڈرو" }, ayahs: [21] },
        { term: "Glowing Hand", arabic: "اضمم يدك إلى جناحك", meaning: { en: "Draw your hand close - it emerges white", ur: "اپنا ہاتھ بغل سے ملاؤ - وہ سفید چمکتا نکلے گا" }, ayahs: [22] },
        { term: "Greater Signs", arabic: "لنريك من آياتنا الكبرى", meaning: { en: "That We may show you of Our greater signs", ur: "تاکہ ہم تمہیں اپنی بڑی نشانیاں دکھائیں" }, ayahs: [23] }
      ]
    },

    musaMissionToPharaoh: {
      color: '#EF4444',
      icon: 'Users',
      name: "Mission to Pharaoh",
      nameUr: "فرعون کی طرف بھیجنا",
      nameAr: "الإرسال إلى فرعون",
      concepts: [
        { term: "Go to Pharaoh", arabic: "اذهب إلى فرعون", meaning: { en: "Go to Pharaoh - he has transgressed", ur: "فرعون کے پاس جاؤ - اس نے سرکشی کی ہے" }, ayahs: [24] },
        { term: "Pharaoh's Tyranny", arabic: "إنه طغى", meaning: { en: "Indeed, he has transgressed", ur: "بے شک اس نے حد سے تجاوز کیا ہے" }, ayahs: [24, 43] },
        { term: "Expand My Chest", arabic: "اشرح لي صدري", meaning: { en: "My Lord, expand for me my chest", ur: "اے میرے رب، میرا سینہ کھول دے" }, ayahs: [25] },
        { term: "Ease My Task", arabic: "ويسر لي أمري", meaning: { en: "And ease for me my task", ur: "اور میرا کام آسان کر دے" }, ayahs: [26] },
        { term: "Untie Tongue", arabic: "واحلل عقدة من لساني", meaning: { en: "And untie the knot from my tongue", ur: "اور میری زبان کی گرہ کھول دے" }, ayahs: [27] },
        { term: "Harun as Helper", arabic: "اجعل لي وزيرا من أهلي هارون", meaning: { en: "Appoint for me a minister from my family - Harun", ur: "میرے گھرانے سے میرا وزیر بنا دے - ہارون کو" }, ayahs: [29, 30] },
        { term: "Strengthen Through Brother", arabic: "اشدد به أزري", meaning: { en: "Increase my strength through him", ur: "اس کے ذریعے میری پشت مضبوط کر" }, ayahs: [31] },
        { term: "Speak Gently", arabic: "فقولا له قولا لينا", meaning: { en: "Speak to him with gentle speech", ur: "اس سے نرم بات کرنا" }, ayahs: [44] }
      ]
    },

    musaEarlyLife: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Musa's Early Life - Divine Protection",
      nameUr: "موسیٰ کی ابتدائی زندگی - الٰہی حفاظت",
      nameAr: "حياة موسى المبكرة",
      concepts: [
        { term: "Revelation to Mother", arabic: "وأوحينا إلى أم موسى", meaning: { en: "We inspired to Musa's mother", ur: "ہم نے موسیٰ کی ماں کو وحی کی" }, ayahs: [38] },
        { term: "Cast Him in River", arabic: "أن اقذفيه في التابوت", meaning: { en: "Cast him into the chest, then river", ur: "اسے صندوق میں ڈال کر دریا میں بہا دو" }, ayahs: [39] },
        { term: "Enemy Takes Him", arabic: "يأخذه عدو لي وعدو له", meaning: { en: "Enemy to Me and to him will take him", ur: "میرا اور اس کا دشمن اسے اٹھائے گا" }, ayahs: [39] },
        { term: "Love Cast Upon Him", arabic: "وألقيت عليك محبة مني", meaning: { en: "I cast upon you love from Me", ur: "میں نے تجھ پر اپنی طرف سے محبت ڈال دی" }, ayahs: [39] },
        { term: "Made Under My Eye", arabic: "ولتصنع على عيني", meaning: { en: "That you would be brought up under My eye", ur: "تاکہ تو میری نظر میں پرورش پائے" }, ayahs: [39] },
        { term: "Sister Follows", arabic: "إذ تمشي أختك", meaning: { en: "When your sister went forth", ur: "جب تمہاری بہن چلی" }, ayahs: [40] },
        { term: "Return to Mother", arabic: "فرجعناك إلى أمك", meaning: { en: "So We restored you to your mother", ur: "پھر ہم نے تجھے تیری ماں کے پاس لوٹا دیا" }, ayahs: [40] },
        { term: "Killing a Soul", arabic: "وقتلت نفسا", meaning: { en: "And you killed a soul", ur: "اور تم نے ایک جان لے لی" }, ayahs: [40] },
        { term: "Years in Madyan", arabic: "ولبثت سنين في أهل مدين", meaning: { en: "You stayed years among the people of Madyan", ur: "اور تم مدین والوں میں کئی سال رہے" }, ayahs: [40] },
        { term: "Chosen for Myself", arabic: "واصطنعتك لنفسي", meaning: { en: "And I produced you for Myself", ur: "اور میں نے تجھے اپنے لیے چن لیا" }, ayahs: [41] }
      ]
    },

    pharaohConfrontation: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Confrontation with Pharaoh",
      nameUr: "فرعون سے مقابلہ",
      nameAr: "مواجهة فرعون",
      concepts: [
        { term: "Who is Your Lord", arabic: "فمن ربكما يا موسى", meaning: { en: "Pharaoh asked: Who is your Lord?", ur: "فرعون نے پوچھا: تمہارا رب کون ہے؟" }, ayahs: [49] },
        { term: "Lord Gave Everything", arabic: "ربنا الذي أعطى كل شيء خلقه", meaning: { en: "Our Lord gave each thing its form then guided", ur: "ہمارا رب وہ ہے جس نے ہر چیز کو اس کی شکل دی پھر ہدایت کی" }, ayahs: [50] },
        { term: "Knowledge with Allah", arabic: "علمها عند ربي في كتاب", meaning: { en: "Knowledge of past nations is with my Lord in a record", ur: "گزشتہ قوموں کا علم میرے رب کے پاس ایک کتاب میں ہے" }, ayahs: [52] },
        { term: "Earth as Bed", arabic: "جعل لكم الأرض مهدا", meaning: { en: "He made the earth for you as a bed", ur: "اس نے تمہارے لیے زمین کو بچھونا بنایا" }, ayahs: [53] },
        { term: "From Earth Created", arabic: "منها خلقناكم", meaning: { en: "From it We created you", ur: "اسی سے ہم نے تمہیں پیدا کیا" }, ayahs: [55] },
        { term: "To Earth Return", arabic: "وفيها نعيدكم", meaning: { en: "And into it We will return you", ur: "اور اسی میں تمہیں لوٹائیں گے" }, ayahs: [55] },
        { term: "From Earth Brought Forth", arabic: "ومنها نخرجكم", meaning: { en: "And from it We will bring you out", ur: "اور اسی سے تمہیں دوبارہ نکالیں گے" }, ayahs: [55] },
        { term: "Pharaoh Rejected Signs", arabic: "فكذب وأبى", meaning: { en: "But Pharaoh denied and refused", ur: "لیکن فرعون نے جھٹلایا اور انکار کیا" }, ayahs: [56] }
      ]
    },

    magiciansContest: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Contest with the Magicians",
      nameUr: "جادوگروں سے مقابلہ",
      nameAr: "مباراة السحرة",
      concepts: [
        { term: "Day of Festival", arabic: "يوم الزينة", meaning: { en: "The day of the festival", ur: "تہوار کا دن" }, ayahs: [59] },
        { term: "Magicians Assembled", arabic: "فجمع كيده ثم أتى", meaning: { en: "Pharaoh gathered his plan then came", ur: "فرعون نے اپنی چال اکٹھی کی پھر آیا" }, ayahs: [60] },
        { term: "Warning from Musa", arabic: "لا تفتروا على الله كذبا", meaning: { en: "Do not invent a lie against Allah", ur: "اللہ پر جھوٹ نہ گھڑو" }, ayahs: [61] },
        { term: "Magicians Disagree", arabic: "فتنازعوا أمرهم", meaning: { en: "They disputed their affair secretly", ur: "انہوں نے خفیہ طور پر اپنے معاملے میں جھگڑا کیا" }, ayahs: [62] },
        { term: "Ropes Seemed to Move", arabic: "يخيل إليه من سحرهم أنها تسعى", meaning: { en: "Their ropes appeared to him to be moving", ur: "ان کے جادو سے اسے لگا کہ رسیاں دوڑ رہی ہیں" }, ayahs: [66] },
        { term: "Musa's Fear", arabic: "فأوجس في نفسه خيفة موسى", meaning: { en: "Musa felt fear within himself", ur: "موسیٰ نے اپنے دل میں خوف محسوس کیا" }, ayahs: [67] },
        { term: "Fear Not", arabic: "لا تخف إنك أنت الأعلى", meaning: { en: "Fear not, you are superior", ur: "مت ڈرو، تم ہی غالب ہو" }, ayahs: [68] },
        { term: "Staff Swallows", arabic: "تلقف ما صنعوا", meaning: { en: "It will swallow what they have made", ur: "یہ ان کی بنائی ہوئی چیزوں کو نگل جائے گا" }, ayahs: [69] },
        { term: "Magician's Craft", arabic: "إنما صنعوا كيد ساحر", meaning: { en: "What they made is only a magician's trick", ur: "جو انہوں نے بنایا وہ تو بس جادوگر کی چال ہے" }, ayahs: [69] },
        { term: "Magicians Prostrate", arabic: "فألقي السحرة سجدا", meaning: { en: "The magicians fell in prostration", ur: "جادوگر سجدے میں گر پڑے" }, ayahs: [70] },
        { term: "Believe in Lord of Harun and Musa", arabic: "آمنا برب هارون وموسى", meaning: { en: "We have believed in Lord of Harun and Musa", ur: "ہم ہارون اور موسیٰ کے رب پر ایمان لائے" }, ayahs: [70] }
      ]
    },

    pharaohThreats: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Pharaoh's Threats and Magicians' Faith",
      nameUr: "فرعون کی دھمکیاں اور جادوگروں کا ایمان",
      nameAr: "تهديدات فرعون وإيمان السحرة",
      concepts: [
        { term: "Unauthorized Belief", arabic: "آمنتم له قبل أن آذن لكم", meaning: { en: "You believed before I permitted you", ur: "تم میری اجازت سے پہلے ایمان لے آئے" }, ayahs: [71] },
        { term: "Musa as Teacher", arabic: "إنه لكبيركم", meaning: { en: "He is your leader who taught you", ur: "یہ تمہارا سردار ہے جس نے تمہیں سکھایا" }, ayahs: [71] },
        { term: "Crucifixion Threat", arabic: "لأقطعن أيديكم وأرجلكم", meaning: { en: "I will cut off hands and feet", ur: "میں تمہارے ہاتھ پاؤں کاٹ دوں گا" }, ayahs: [71] },
        { term: "Crucified on Palms", arabic: "ولأصلبنكم في جذوع النخل", meaning: { en: "And crucify you on trunks of palm trees", ur: "اور تمہیں کھجور کے تنوں پر سولی دوں گا" }, ayahs: [71] },
        { term: "Magicians' Response", arabic: "لن نؤثرك على ما جاءنا من البينات", meaning: { en: "We will not prefer you over clear proofs", ur: "ہم تجھے واضح نشانیوں پر ترجیح نہیں دیں گے" }, ayahs: [72] },
        { term: "Faith Over Life", arabic: "إنما تقضي هذه الحياة الدنيا", meaning: { en: "You only judge this worldly life", ur: "تو بس اس دنیا کی زندگی کا فیصلہ کر سکتا ہے" }, ayahs: [72] },
        { term: "Forgiveness for Belief", arabic: "إنا آمنا بربنا ليغفر لنا خطايانا", meaning: { en: "We believed to have sins forgiven", ur: "ہم ایمان لائے تاکہ ہمارے گناہ معاف ہوں" }, ayahs: [73] },
        { term: "Best Reward", arabic: "والله خير وأبقى", meaning: { en: "Allah is better and more enduring", ur: "اور اللہ بہتر اور زیادہ پائیدار ہے" }, ayahs: [73] }
      ]
    },

    hellAndParadise: {
      color: '#10B981',
      icon: 'Book',
      name: "Consequences: Hell and Paradise",
      nameUr: "نتائج: جہنم اور جنت",
      nameAr: "العاقبة: النار والجنة",
      concepts: [
        { term: "Criminal to Hell", arabic: "من يأت ربه مجرما", meaning: { en: "Who comes as criminal - for him is Hell", ur: "جو مجرم بن کر آئے - اس کے لیے جہنم ہے" }, ayahs: [74] },
        { term: "Neither Dies Nor Lives", arabic: "لا يموت فيها ولا يحيى", meaning: { en: "He will neither die therein nor live", ur: "نہ اس میں مرے گا نہ جیے گا" }, ayahs: [74] },
        { term: "Believer Rewarded", arabic: "ومن يأته مؤمنا", meaning: { en: "Who comes as believer with good deeds", ur: "جو مومن بن کر نیک اعمال کے ساتھ آئے" }, ayahs: [75] },
        { term: "Gardens of Eden", arabic: "جنات عدن", meaning: { en: "Gardens of perpetual residence", ur: "ہمیشگی کے باغات" }, ayahs: [76] },
        { term: "Rivers Beneath", arabic: "تجري من تحتها الأنهار", meaning: { en: "Rivers flowing beneath", ur: "نیچے نہریں بہتی ہیں" }, ayahs: [76] },
        { term: "Reward for Purification", arabic: "ذلك جزاء من تزكى", meaning: { en: "That is reward for one who purifies", ur: "یہ جزا ہے اس کی جو پاکیزگی اختیار کرے" }, ayahs: [76] }
      ]
    },

    exodusAndSeaParting: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "The Exodus and Parting of the Sea",
      nameUr: "ہجرت اور سمندر کا شق ہونا",
      nameAr: "الخروج وانشقاق البحر",
      concepts: [
        { term: "Travel by Night", arabic: "أن أسر بعبادي", meaning: { en: "Travel by night with My servants", ur: "میرے بندوں کو رات کو لے کر چلو" }, ayahs: [77] },
        { term: "Dry Path in Sea", arabic: "اضرب لهم طريقا في البحر يبسا", meaning: { en: "Strike a dry path through the sea", ur: "سمندر میں خشک راستہ بنا دو" }, ayahs: [77] },
        { term: "No Fear of Pursuit", arabic: "لا تخاف دركا ولا تخشى", meaning: { en: "Fear not being overtaken or afraid", ur: "نہ پکڑے جانے کا خوف نہ ڈر" }, ayahs: [77] },
        { term: "Pharaoh Pursued", arabic: "فأتبعهم فرعون بجنوده", meaning: { en: "Pharaoh pursued with his soldiers", ur: "فرعون نے اپنے لشکر کے ساتھ ان کا پیچھا کیا" }, ayahs: [78] },
        { term: "Sea Covered Them", arabic: "فغشيهم من اليم ما غشيهم", meaning: { en: "Sea covered them with what covered them", ur: "سمندر نے انہیں ڈھانپ لیا جو ڈھانپ لیا" }, ayahs: [78] },
        { term: "Pharaoh Led Astray", arabic: "وأضل فرعون قومه", meaning: { en: "Pharaoh led his people astray", ur: "فرعون نے اپنی قوم کو گمراہ کیا" }, ayahs: [79] }
      ]
    },

    israelitesBlessings: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Blessings Upon Bani Israel",
      nameUr: "بنی اسرائیل پر نعمتیں",
      nameAr: "نعم الله على بني إسرائيل",
      concepts: [
        { term: "Delivered from Enemy", arabic: "أنجيناكم من عدوكم", meaning: { en: "We saved you from your enemy", ur: "ہم نے تمہیں تمہارے دشمن سے بچایا" }, ayahs: [80] },
        { term: "Appointed at Mount", arabic: "وواعدناكم جانب الطور", meaning: { en: "Appointed at right side of Mount", ur: "طور کی دائیں جانب وعدہ مقرر کیا" }, ayahs: [80] },
        { term: "Manna and Quail", arabic: "المن والسلوى", meaning: { en: "We sent down manna and quails", ur: "ہم نے من اور سلویٰ نازل کیا" }, ayahs: [80] },
        { term: "Eat from Good", arabic: "كلوا من طيبات ما رزقناكم", meaning: { en: "Eat from good things We provided", ur: "ان پاکیزہ چیزوں میں سے کھاؤ جو ہم نے تمہیں دیں" }, ayahs: [81] },
        { term: "Do Not Transgress", arabic: "ولا تطغوا فيه", meaning: { en: "Do not transgress therein", ur: "اس میں حد سے تجاوز نہ کرو" }, ayahs: [81] },
        { term: "Forgiveness for Repentant", arabic: "وإني لغفار لمن تاب", meaning: { en: "I am Forgiving to who repents", ur: "اور میں بہت بخشنے والا ہوں اس کے لیے جو توبہ کرے" }, ayahs: [82] }
      ]
    },

    samiriGoldenCalf: {
      color: '#10B981',
      icon: 'Book',
      name: "The Samiri and the Golden Calf",
      nameUr: "سامری اور سونے کا بچھڑا",
      nameAr: "السامري والعجل",
      concepts: [
        { term: "Musa Hastened", arabic: "وما أعجلك عن قومك", meaning: { en: "What made you hasten from your people?", ur: "تجھے اپنی قوم سے جلدی کس بات نے کرائی؟" }, ayahs: [83] },
        { term: "People Left Behind", arabic: "هم أولاء على أثري", meaning: { en: "They are following my tracks", ur: "وہ میرے پیچھے آ رہے ہیں" }, ayahs: [84] },
        { term: "Samiri Led Astray", arabic: "فإنا قد فتنا قومك وأضلهم السامري", meaning: { en: "Samiri led them astray", ur: "سامری نے تمہاری قوم کو گمراہ کر دیا" }, ayahs: [85] },
        { term: "Angry and Grieved", arabic: "غضبان أسفا", meaning: { en: "Musa returned angry and grieved", ur: "موسیٰ غصے اور غم سے بھرے لوٹے" }, ayahs: [86] },
        { term: "Calf with Sound", arabic: "عجلا جسدا له خوار", meaning: { en: "A calf body that had a lowing sound", ur: "بچھڑے کا جسم جس سے آواز نکلتی تھی" }, ayahs: [88] },
        { term: "This is Your God", arabic: "هذا إلهكم وإله موسى", meaning: { en: "This is your god and god of Musa", ur: "یہ تمہارا معبود ہے اور موسیٰ کا معبود" }, ayahs: [88] },
        { term: "Calf Cannot Respond", arabic: "ألا يرجع إليهم قولا", meaning: { en: "It could not return speech to them", ur: "وہ ان سے بات نہیں کر سکتا تھا" }, ayahs: [89] },
        { term: "Harun's Warning", arabic: "وقد قال لهم هارون", meaning: { en: "Harun had told them before", ur: "ہارون نے انہیں پہلے ہی بتایا تھا" }, ayahs: [90] },
        { term: "Follow Me", arabic: "فاتبعوني وأطيعوا أمري", meaning: { en: "So follow me and obey my order", ur: "پس میری پیروی کرو اور میرا حکم مانو" }, ayahs: [90] }
      ]
    },

    musaReturnsAngry: {
      color: '#10B981',
      icon: 'Book',
      name: "Musa's Return and Confrontation",
      nameUr: "موسیٰ کی واپسی اور محاسبہ",
      nameAr: "عودة موسى الغاضبة",
      concepts: [
        { term: "Seizes Harun's Head", arabic: "أخذ برأس أخيه يجره إليه", meaning: { en: "Musa seized his brother's head", ur: "موسیٰ نے اپنے بھائی کا سر پکڑ کر کھینچا" }, ayahs: [94] },
        { term: "Son of My Mother", arabic: "ابن أم", meaning: { en: "O son of my mother", ur: "اے میری ماں کے بیٹے" }, ayahs: [94] },
        { term: "They Oppressed Me", arabic: "إن القوم استضعفوني", meaning: { en: "The people oppressed me", ur: "لوگوں نے مجھے کمزور سمجھا" }, ayahs: [94] },
        { term: "Almost Killed Me", arabic: "وكادوا يقتلونني", meaning: { en: "And were about to kill me", ur: "اور قریب تھا کہ مجھے مار ڈالتے" }, ayahs: [94] },
        { term: "Question to Samiri", arabic: "فما خطبك يا سامري", meaning: { en: "What is your case, O Samiri?", ur: "تیرا کیا معاملہ ہے اے سامری؟" }, ayahs: [95] },
        { term: "Saw What They Did Not", arabic: "بصرت بما لم يبصروا به", meaning: { en: "I saw what they did not see", ur: "میں نے وہ دیکھا جو انہوں نے نہیں دیکھا" }, ayahs: [96] },
        { term: "Handful from Messenger's Track", arabic: "قبضت قبضة من أثر الرسول", meaning: { en: "I took a handful from messenger's track", ur: "میں نے رسول کے نقشِ قدم سے ایک مٹھی بھر لی" }, ayahs: [96] },
        { term: "Soul Suggested", arabic: "كذلك سولت لي نفسي", meaning: { en: "Thus my soul suggested to me", ur: "میرے نفس نے مجھے یہ سجھایا" }, ayahs: [96] },
        { term: "No Touching", arabic: "لا مساس", meaning: { en: "Your punishment: Do not touch", ur: "تیری سزا: چھونا منع ہے" }, ayahs: [97] },
        { term: "Burn and Scatter Calf", arabic: "لنحرقنه ثم لننسفنه في اليم", meaning: { en: "We will burn it and scatter in sea", ur: "ہم اسے جلائیں گے پھر سمندر میں بکھیر دیں گے" }, ayahs: [97] }
      ]
    },

    torahGiven: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Revelation of the Torah",
      nameUr: "تورات کا نزول",
      nameAr: "إنزال التوراة",
      concepts: [
        { term: "Appointed Thirty Nights", arabic: "وواعدنا موسى ثلاثين ليلة", meaning: { en: "We made appointment with Musa for thirty nights", ur: "ہم نے موسیٰ سے تیس راتوں کا وعدہ کیا" }, ayahs: [83] },
        { term: "Completed with Ten", arabic: "وأتممناها بعشر", meaning: { en: "And completed them with ten", ur: "اور دس سے پورا کیا" }, ayahs: [83] },
        { term: "Tablets", arabic: "الألواح", meaning: { en: "The Tablets of Torah", ur: "تورات کی تختیاں" }, ayahs: [86] }
      ]
    },

    adamStory: {
      color: '#10B981',
      icon: 'Book',
      name: "The Story of Adam",
      nameUr: "آدم کا قصہ",
      nameAr: "قصة آدم",
      concepts: [
        { term: "Covenant with Adam", arabic: "ولقد عهدنا إلى آدم", meaning: { en: "We made covenant with Adam", ur: "ہم نے آدم سے عہد لیا" }, ayahs: [115] },
        { term: "Adam Forgot", arabic: "فنسي ولم نجد له عزما", meaning: { en: "But he forgot; We found no determination", ur: "لیکن وہ بھول گیا؛ ہم نے اس میں عزم نہیں پایا" }, ayahs: [115] },
        { term: "Angels Prostrated", arabic: "فسجدوا إلا إبليس أبى", meaning: { en: "Angels prostrated except Iblis refused", ur: "فرشتوں نے سجدہ کیا سوائے ابلیس کے، اس نے انکار کیا" }, ayahs: [116] },
        { term: "Iblis Enemy", arabic: "إن هذا عدو لك ولزوجك", meaning: { en: "This is enemy to you and your wife", ur: "یہ تمہارا اور تمہاری بیوی کا دشمن ہے" }, ayahs: [117] },
        { term: "Never Hungry in Paradise", arabic: "أن لا تجوع فيها ولا تعرى", meaning: { en: "You will not be hungry or naked therein", ur: "اس میں نہ بھوکا رہے گا نہ ننگا" }, ayahs: [118] },
        { term: "Never Thirsty or Sunstruck", arabic: "لا تظمأ فيها ولا تضحى", meaning: { en: "Not thirsty nor struck by sun", ur: "نہ پیاسا ہوگا نہ دھوپ لگے گی" }, ayahs: [119] },
        { term: "Shaytan Whispered", arabic: "فوسوس إليه الشيطان", meaning: { en: "Satan whispered to him", ur: "شیطان نے اسے وسوسہ ڈالا" }, ayahs: [120] },
        { term: "Tree of Eternity", arabic: "شجرة الخلد", meaning: { en: "Shall I direct you to tree of eternity?", ur: "کیا میں تمہیں ہمیشگی کے درخت کا بتاؤں؟" }, ayahs: [120] },
        { term: "Kingdom That Decays Not", arabic: "ملك لا يبلى", meaning: { en: "And possession that will not deteriorate", ur: "اور ایسی بادشاہی جو کبھی ختم نہ ہو" }, ayahs: [120] },
        { term: "They Both Ate", arabic: "فأكلا منها", meaning: { en: "So they both ate from it", ur: "پھر دونوں نے اس سے کھا لیا" }, ayahs: [121] },
        { term: "Private Parts Exposed", arabic: "فبدت لهما سوآتهما", meaning: { en: "Their private parts became apparent", ur: "ان کی شرمگاہیں ظاہر ہو گئیں" }, ayahs: [121] },
        { term: "Covered with Leaves", arabic: "وطفقا يخصفان عليهما من ورق الجنة", meaning: { en: "They began to fasten leaves over themselves", ur: "وہ جنت کے پتے اپنے اوپر چپکانے لگے" }, ayahs: [121] },
        { term: "Adam Disobeyed", arabic: "وعصى آدم ربه فغوى", meaning: { en: "Adam disobeyed his Lord and erred", ur: "آدم نے اپنے رب کی نافرمانی کی اور بھٹک گیا" }, ayahs: [121] },
        { term: "Then Chosen", arabic: "ثم اجتباه ربه", meaning: { en: "Then his Lord chose him", ur: "پھر اس کے رب نے اسے چن لیا" }, ayahs: [122] },
        { term: "Turned to Him", arabic: "فتاب عليه وهدى", meaning: { en: "And turned to him and guided", ur: "اور اس کی توبہ قبول کی اور ہدایت دی" }, ayahs: [122] },
        { term: "Descend Together", arabic: "اهبطا منها جميعا", meaning: { en: "Descend from Paradise, all together", ur: "سب مل کر جنت سے اتر جاؤ" }, ayahs: [123] },
        { term: "Some Enemy to Others", arabic: "بعضكم لبعض عدو", meaning: { en: "Some of you enemies to others", ur: "تم میں سے بعض بعض کے دشمن ہیں" }, ayahs: [123] },
        { term: "Guidance From Me", arabic: "فإما يأتينكم مني هدى", meaning: { en: "When guidance comes from Me", ur: "جب میری طرف سے تمہارے پاس ہدایت آئے" }, ayahs: [123] }
      ]
    },

    consequencesOfGuidance: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Consequences of Following/Ignoring Guidance",
      nameUr: "ہدایت کی پیروی یا اعراض کے نتائج",
      nameAr: "عواقب اتباع الهدى أو الإعراض عنه",
      concepts: [
        { term: "Following Guidance", arabic: "فمن اتبع هداي", meaning: { en: "Whoever follows My guidance", ur: "جس نے میری ہدایت کی پیروی کی" }, ayahs: [123] },
        { term: "Will Not Go Astray", arabic: "فلا يضل ولا يشقى", meaning: { en: "Will neither go astray nor suffer", ur: "نہ گمراہ ہوگا نہ بدبخت" }, ayahs: [123] },
        { term: "Turns Away from Remembrance", arabic: "ومن أعرض عن ذكري", meaning: { en: "Who turns away from My remembrance", ur: "جس نے میرے ذکر سے منہ موڑا" }, ayahs: [124] },
        { term: "Depressed Life", arabic: "فإن له معيشة ضنكا", meaning: { en: "Will have a depressed life", ur: "اس کی زندگی تنگ ہوگی" }, ayahs: [124] },
        { term: "Raised Blind", arabic: "ونحشره يوم القيامة أعمى", meaning: { en: "Gathered on Day of Judgment blind", ur: "اور قیامت کے دن اسے اندھا اٹھائیں گے" }, ayahs: [124] },
        { term: "Why Blind", arabic: "لم حشرتني أعمى وقد كنت بصيرا", meaning: { en: "Why have I been raised blind when I could see?", ur: "مجھے اندھا کیوں اٹھایا جبکہ میں دیکھتا تھا؟" }, ayahs: [125] },
        { term: "Forgot Our Signs", arabic: "كذلك أتتك آياتنا فنسيتها", meaning: { en: "Our signs came, you forgot them", ur: "اسی طرح تیرے پاس ہماری آیات آئیں تو نے انہیں بھلا دیا" }, ayahs: [126] },
        { term: "Likewise Forgotten", arabic: "وكذلك اليوم تنسى", meaning: { en: "And thus today you are forgotten", ur: "اور اسی طرح آج تو بھلا دیا جائے گا" }, ayahs: [126] }
      ]
    },

    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment Scenes",
      nameUr: "قیامت کے مناظر",
      nameAr: "مشاهد يوم القيامة",
      concepts: [
        { term: "Trumpet Blown", arabic: "يوم ينفخ في الصور", meaning: { en: "Day when trumpet is blown", ur: "جس دن صور پھونکا جائے گا" }, ayahs: [102] },
        { term: "Criminals Blue-Eyed", arabic: "ونحشر المجرمين يومئذ زرقا", meaning: { en: "Criminals gathered with blue/blind eyes", ur: "مجرم اس دن نیلی/اندھی آنکھوں سے اٹھائے جائیں گے" }, ayahs: [102] },
        { term: "Murmuring", arabic: "يتخافتون بينهم", meaning: { en: "They will murmur among themselves", ur: "وہ آپس میں سرگوشیاں کریں گے" }, ayahs: [103] },
        { term: "Stayed Only Ten Days", arabic: "إن لبثتم إلا عشرا", meaning: { en: "You stayed only ten days", ur: "تم صرف دس دن رہے" }, ayahs: [103] },
        { term: "Mountains Question", arabic: "ويسألونك عن الجبال", meaning: { en: "They ask about the mountains", ur: "وہ تم سے پہاڑوں کے بارے میں پوچھتے ہیں" }, ayahs: [105] },
        { term: "Mountains Blown Away", arabic: "فقل ينسفها ربي نسفا", meaning: { en: "Say: My Lord will blow them away", ur: "کہو: میرا رب انہیں ریزہ ریزہ اڑا دے گا" }, ayahs: [105] },
        { term: "Level Plain", arabic: "فيذرها قاعا صفصفا", meaning: { en: "Leaving it as level plain", ur: "اسے ہموار میدان بنا دے گا" }, ayahs: [106] },
        { term: "No Crookedness", arabic: "لا ترى فيها عوجا ولا أمتا", meaning: { en: "No depression or elevation", ur: "نہ ٹیڑھ نظر آئے نہ اونچ نیچ" }, ayahs: [107] },
        { term: "Follow the Caller", arabic: "يتبعون الداعي", meaning: { en: "They will follow the caller", ur: "وہ پکارنے والے کے پیچھے چلیں گے" }, ayahs: [108] },
        { term: "Voices Humbled", arabic: "وخشعت الأصوات للرحمن", meaning: { en: "Voices humbled for the Most Merciful", ur: "رحمٰن کے سامنے آوازیں دب جائیں گی" }, ayahs: [108] },
        { term: "Only Whisper", arabic: "فلا تسمع إلا همسا", meaning: { en: "You hear only a whisper", ur: "بس ہلکی سی آہٹ سنو گے" }, ayahs: [108] },
        { term: "No Intercession Except", arabic: "لا تنفع الشفاعة إلا من أذن له الرحمن", meaning: { en: "Intercession benefits only whom Rahman permits", ur: "شفاعت صرف اس کو فائدہ دے گی جسے رحمٰن اجازت دے" }, ayahs: [109] },
        { term: "Faces Humbled", arabic: "وعنت الوجوه للحي القيوم", meaning: { en: "Faces will be humbled before the Living", ur: "چہرے زندہ قائم رہنے والے کے سامنے جھک جائیں گے" }, ayahs: [111] }
      ]
    },

    quranGuidance: {
      color: '#EF4444',
      icon: 'Users',
      name: "The Quran as Guidance",
      nameUr: "قرآن بطور ہدایت",
      nameAr: "القرآن هداية",
      concepts: [
        { term: "Arabic Quran", arabic: "قرآنا عربيا", meaning: { en: "An Arabic Quran", ur: "عربی قرآن" }, ayahs: [113] },
        { term: "Varied Warnings", arabic: "صرفنا فيه من الوعيد", meaning: { en: "Diversified therein the warnings", ur: "اس میں طرح طرح کی تنبیہات بیان کیں" }, ayahs: [113] },
        { term: "They May Fear", arabic: "لعلهم يتقون", meaning: { en: "That they might fear Allah", ur: "تاکہ وہ اللہ سے ڈریں" }, ayahs: [113] },
        { term: "Or Produce Remembrance", arabic: "أو يحدث لهم ذكرا", meaning: { en: "Or it would cause them remembrance", ur: "یا ان میں نصیحت پیدا کرے" }, ayahs: [113] },
        { term: "Exalted is Allah", arabic: "فتعالى الله الملك الحق", meaning: { en: "Exalted is Allah, the Sovereign, the Truth", ur: "بلند ہے اللہ، سچا بادشاہ" }, ayahs: [114] },
        { term: "Do Not Hasten", arabic: "ولا تعجل بالقرآن", meaning: { en: "Do not hasten with the Quran", ur: "قرآن میں جلدی نہ کرو" }, ayahs: [114] },
        { term: "Increase My Knowledge", arabic: "رب زدني علما", meaning: { en: "My Lord, increase me in knowledge", ur: "اے میرے رب، میرا علم بڑھا دے" }, ayahs: [114] }
      ]
    },

    finalAdmonitions: {
      color: '#10B981',
      icon: 'Book',
      name: "Final Admonitions",
      nameUr: "آخری نصیحتیں",
      nameAr: "النصائح الختامية",
      concepts: [
        { term: "Do Not Extend Eyes", arabic: "ولا تمدن عينيك", meaning: { en: "Do not extend your eyes toward what We gave", ur: "اپنی نظریں نہ لگاؤ ان چیزوں کی طرف جو ہم نے دیں" }, ayahs: [131] },
        { term: "Flower of Worldly Life", arabic: "زهرة الحياة الدنيا", meaning: { en: "Splendor of worldly life", ur: "دنیاوی زندگی کی رونق" }, ayahs: [131] },
        { term: "Test Them Thereby", arabic: "لنفتنهم فيه", meaning: { en: "By which We test them", ur: "تاکہ ہم انہیں اس سے آزمائیں" }, ayahs: [131] },
        { term: "Provision of Lord Better", arabic: "ورزق ربك خير وأبقى", meaning: { en: "Provision of your Lord is better and lasting", ur: "تیرے رب کا رزق بہتر اور پائیدار ہے" }, ayahs: [131] },
        { term: "Command Family to Prayer", arabic: "وأمر أهلك بالصلاة", meaning: { en: "And enjoin prayer upon your family", ur: "اور اپنے گھر والوں کو نماز کا حکم دو" }, ayahs: [132] },
        { term: "Be Steadfast", arabic: "واصطبر عليها", meaning: { en: "And be steadfast therein", ur: "اور اس پر صبر کرو" }, ayahs: [132] },
        { term: "We Provide You", arabic: "نحن نرزقك", meaning: { en: "We provide for you", ur: "ہم تمہیں رزق دیتے ہیں" }, ayahs: [132] },
        { term: "End for the Righteous", arabic: "والعاقبة للتقوى", meaning: { en: "The outcome is for the righteous", ur: "اور انجام تقویٰ والوں کے لیے ہے" }, ayahs: [132] },
        { term: "Why No Sign", arabic: "لولا يأتينا بآية من ربه", meaning: { en: "Why does he not bring a sign from his Lord?", ur: "یہ اپنے رب کی طرف سے نشانی کیوں نہیں لاتا؟" }, ayahs: [133] },
        { term: "Clear Evidence Came", arabic: "أولم تأتهم بينة ما في الصحف الأولى", meaning: { en: "Has there not come evidence of what was in former scriptures?", ur: "کیا ان کے پاس پہلی کتابوں کی واضح دلیل نہیں آئی؟" }, ayahs: [133] },
        { term: "Wait, We Are Waiting", arabic: "فتربصوا فستعلمون", meaning: { en: "So wait, and you will know", ur: "پس انتظار کرو، عنقریب تمہیں معلوم ہو جائے گا" }, ayahs: [135] },
        { term: "Straight Path", arabic: "من أصحاب الصراط السوي", meaning: { en: "Who are companions of the straight path", ur: "سیدھے راستے والے کون ہیں" }, ayahs: [135] }
      ]
    }
  },

  relationships: [
    { from: "Quran's Purpose", to: "Mercy Not Distress", type: "declaration", description: { en: "Quran is comfort, not hardship", ur: "قرآن راحت ہے، مشقت نہیں" } },
    { from: "Musa at Bush", to: "Prophethood", type: "appointment", description: { en: "Direct divine calling and commission", ur: "براہِ راست الٰہی بلاوا اور مقرری" } },
    { from: "Staff Miracle", to: "Signs for Pharaoh", type: "preparation", description: { en: "Miracles given as proof of prophethood", ur: "نبوت کی دلیل کے طور پر معجزات دیے گئے" } },
    { from: "Musa's Prayer", to: "Harun as Support", type: "fulfillment", description: { en: "Allah grants helper as requested", ur: "اللہ نے درخواست پر مددگار عطا کیا" } },
    { from: "Gentle Speech", to: "Pharaoh's Rejection", type: "contrast", description: { en: "Kindness met with arrogance", ur: "نرمی کا جواب تکبر سے ملا" } },
    { from: "Magicians' Defeat", to: "Magicians' Faith", type: "transformation", description: { en: "Opponents become believers", ur: "مخالفین مومن بن گئے" } },
    { from: "Pharaoh's Threats", to: "Magicians' Firmness", type: "test", description: { en: "Faith stronger than death", ur: "ایمان موت سے مضبوط" } },
    { from: "Sea Parting", to: "Pharaoh's Drowning", type: "consequence", description: { en: "Salvation for believers, destruction for oppressors", ur: "مومنوں کی نجات، ظالموں کی تباہی" } },
    { from: "Manna and Quail", to: "Golden Calf", type: "contrast", description: { en: "Blessings followed by ingratitude", ur: "نعمتوں کے بعد ناشکری" } },
    { from: "Samiri's Deception", to: "Musa's Anger", type: "consequence", description: { en: "Innovation leads to divine anger", ur: "بدعت الٰہی غضب کا سبب بنتی ہے" } },
    { from: "Adam's Covenant", to: "Adam's Forgetfulness", type: "failure", description: { en: "Human weakness despite divine warning", ur: "الٰہی تنبیہ کے باوجود انسانی کمزوری" } },
    { from: "Tree of Eternity", to: "Paradise Lost", type: "consequence", description: { en: "Deception leads to expulsion", ur: "دھوکا جنت سے نکالے جانے کا سبب بنا" } },
    { from: "Guidance Given", to: "Two Paths", type: "choice", description: { en: "Following or rejecting determines fate", ur: "ہدایت کی پیروی یا انکار تقدیر طے کرتا ہے" } },
    { from: "Worldly Splendor", to: "Divine Provision", type: "comparison", description: { en: "Temporary vs. eternal provision", ur: "عارضی بمقابلہ دائمی رزق" } }
  ],

  thematicFlow: {
    title: { en: "From Divine Comfort to Human Choice", ur: "الٰہی تسلی سے انسانی انتخاب تک" },
    stages: [
      { name: "Quran's Purpose", ayahs: [1, 2, 3, 4, 5, 6, 7, 8], description: { en: "Not for distress but as reminder", ur: "مشقت کے لیے نہیں بلکہ نصیحت کے طور پر" } },
      { name: "Musa's Calling", ayahs: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], description: { en: "The burning bush and miracles", ur: "جلتی جھاڑی اور معجزات" } },
      { name: "Mission Assignment", ayahs: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], description: { en: "Go to Pharaoh with Harun", ur: "ہارون کے ساتھ فرعون کے پاس جاؤ" } },
      { name: "Musa's Early Life", ayahs: [37, 38, 39, 40, 41, 42], description: { en: "Divine protection from birth", ur: "پیدائش سے الٰہی حفاظت" } },
      { name: "Instructions for Pharaoh", ayahs: [43, 44, 45, 46, 47, 48], description: { en: "Speak gently, fear not", ur: "نرمی سے بات کرو، مت ڈرو" } },
      { name: "Confrontation Begins", ayahs: [49, 50, 51, 52, 53, 54, 55, 56], description: { en: "Who is your Lord?", ur: "تمہارا رب کون ہے؟" } },
      { name: "Challenge Issued", ayahs: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70], description: { en: "Magicians contest", ur: "جادوگروں کا مقابلہ" } },
      { name: "Magicians Convert", ayahs: [70, 71, 72, 73, 74, 75, 76], description: { en: "Faith over death threats", ur: "موت کی دھمکیوں پر ایمان غالب" } },
      { name: "Exodus and Sea", ayahs: [77, 78, 79, 80, 81, 82], description: { en: "Escape and blessings", ur: "فرار اور نعمتیں" } },
      { name: "Golden Calf Crisis", ayahs: [83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98], description: { en: "Samiri's deception", ur: "سامری کا دھوکا" } },
      { name: "True God Declaration", ayahs: [98, 99, 100, 101], description: { en: "Allah alone is God", ur: "صرف اللہ معبود ہے" } },
      { name: "Day of Judgment", ayahs: [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112], description: { en: "Trumpet, mountains, humbled voices", ur: "صور، پہاڑ، دبی ہوئی آوازیں" } },
      { name: "Quran's Warning", ayahs: [113, 114], description: { en: "Arabic Quran with warnings", ur: "تنبیہات والا عربی قرآن" } },
      { name: "Adam's Story", ayahs: [115, 116, 117, 118, 119, 120, 121, 122, 123], description: { en: "Covenant, fall, and descent", ur: "عہد، لغزش اور نزول" } },
      { name: "Two Paths", ayahs: [124, 125, 126, 127, 128, 129, 130], description: { en: "Guidance vs. turning away", ur: "ہدایت بمقابلہ اعراض" } },
      { name: "Final Advice", ayahs: [131, 132, 133, 134, 135], description: { en: "Don't covet, pray, wait", ur: "لالچ نہ کرو، نماز پڑھو، انتظار کرو" } }
    ]
  },

  uniqueInsight: {
    title: { en: "The Dua of Musa (رَبِّ اشْرَحْ لِي صَدْرِي)", ur: "موسیٰ کی دعا (رَبِّ اشْرَحْ لِي صَدْرِي)" },
    insight: { en: "Verses 25-35 contain Musa's beautiful supplication when given the mission to Pharaoh. He asks for: (1) expanded chest (courage), (2) ease in his task, (3) untied tongue (eloquence), (4) a helper (Harun). This dua teaches us that prophets too needed divine support for difficult tasks. The phrase 'Expand my chest' became a model for seeking courage before challenges. Remarkably, Allah grants every request, showing that sincere dua during moments of apprehension is beloved to Him. This passage is frequently recited before public speaking or facing difficult situations.", ur: "آیات 25-35 میں موسیٰ کی خوبصورت دعا ہے جب فرعون کی طرف بھیجا گیا۔ انہوں نے مانگا: (1) سینہ کھول دے (ہمت)، (2) کام آسان کر دے، (3) زبان کی گرہ کھول دے (فصاحت)، (4) مددگار (ہارون)۔ یہ دعا سکھاتی ہے کہ انبیاء کو بھی مشکل کاموں میں الٰہی مدد کی ضرورت تھی۔ 'میرا سینہ کھول دے' ہمت مانگنے کا نمونہ بن گیا۔ اللہ نے ہر درخواست قبول کی جو ظاہر کرتا ہے کہ مشکل وقت میں مخلصانہ دعا اللہ کو محبوب ہے۔" },
    arabicTerm: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    rootMeaning: { en: "ش-ر-ح (to expand, open) - opening of the heart for wisdom and courage", ur: "ش-ر-ح (کھولنا، وسیع کرنا) - حکمت اور ہمت کے لیے دل کا کھلنا" },
    keyAyah: 25
  },

  historicalContext: {
    revelationPeriod: { en: "Makkan period - middle period", ur: "مکی دور - درمیانی مرحلہ" },
    occasion: { en: "Revealed when the Prophet (peace be upon him) was facing great difficulty and pressure from Quraysh. The opening verses 'We have not sent down the Quran to cause you distress' were a comfort. Umar ibn al-Khattab is reported to have embraced Islam after hearing the opening verses of this surah.", ur: "جب نبی کریم صلی اللہ علیہ وسلم قریش کی طرف سے شدید مشکلات اور دباؤ کا سامنا کر رہے تھے تب نازل ہوئی۔ ابتدائی آیات 'ہم نے آپ پر قرآن تکلیف دینے کے لیے نازل نہیں کیا' تسلی کا باعث تھیں۔ روایت ہے کہ عمر بن الخطاب رضی اللہ عنہ نے اس سورۃ کی ابتدائی آیات سن کر اسلام قبول کیا۔" },
    note: { en: "This surah contains the most detailed account of Musa's story in the Quran, from his miraculous protection as an infant through the golden calf incident. It also uniquely connects Musa's story with Adam's, showing the pattern of divine covenant, human weakness, repentance, and guidance.", ur: "اس سورۃ میں قرآن میں موسیٰ کے قصے کا سب سے تفصیلی بیان ہے، بچپن میں معجزانہ حفاظت سے لے کر سونے کے بچھڑے کے واقعے تک۔ یہ موسیٰ کے قصے کو آدم کے قصے سے منفرد طور پر جوڑتی ہے، الٰہی عہد، انسانی کمزوری، توبہ اور ہدایت کا نمونہ دکھاتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { name: { en: "Opening Letters", ur: "حروفِ مقطعات" }, description: { en: "طه - Muqatta'at (disconnected letters)", ur: "طه - حروفِ مقطعات (الگ الگ حروف)" }, example: { en: "Ta Ha", ur: "طٰہٰ" }, ayah: 1 },
      { name: { en: "Rhetorical Questions", ur: "استفہامِ انکاری" }, description: { en: "وما تلك بيمينك يا موسى", ur: "وما تلك بيمينك يا موسى" }, example: { en: "What is that in your right hand, O Musa?", ur: "اے موسیٰ، تمہارے دائیں ہاتھ میں کیا ہے؟" }, ayah: 17 },
      { name: { en: "Direct Divine Speech", ur: "براہِ راست الٰہی کلام" }, description: { en: "إنني أنا الله", ur: "إنني أنا الله" }, example: { en: "Indeed, I am Allah", ur: "بے شک میں اللہ ہوں" }, ayah: 14 },
      { name: { en: "Parallel Structure", ur: "متوازی ساخت" }, description: { en: "لا يموت فيها ولا يحيى", ur: "لا يموت فيها ولا يحيى" }, example: { en: "Neither dies therein nor lives", ur: "نہ اس میں مرے نہ جیے" }, ayah: 74 },
      { name: { en: "Emphatic Construction", ur: "تاکیدی ساخت" }, description: { en: "إنك أنت الأعلى", ur: "إنك أنت الأعلى" }, example: { en: "Indeed, you - you are superior", ur: "بے شک تم ہی غالب ہو" }, ayah: 68 },
      { name: { en: "Beautiful Dua Format", ur: "خوبصورت دعا کی شکل" }, description: { en: "رب اشرح لي صدري", ur: "رب اشرح لي صدري" }, example: { en: "My Lord, expand for me my chest", ur: "اے میرے رب، میرا سینہ کھول دے" }, ayah: 25 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 26, name: "Ash-Shu'ara", relationship: { en: "Also tells Musa's story in detail", ur: "موسیٰ کا قصہ بھی تفصیل سے بیان کرتی ہے" }, type: "parallel_narrative" },
      { surah: 28, name: "Al-Qasas", relationship: { en: "Covers Musa's early life extensively", ur: "موسیٰ کی ابتدائی زندگی کا تفصیلی بیان" }, type: "parallel_narrative" },
      { surah: 7, name: "Al-A'raf", relationship: { en: "Contains magicians' story and golden calf", ur: "جادوگروں کا قصہ اور سونے کا بچھڑا" }, type: "parallel_narrative" },
      { surah: 2, name: "Al-Baqarah", relationship: { en: "Golden calf story also mentioned (2:51-54)", ur: "سونے کے بچھڑے کا قصہ بھی مذکور ہے (2:51-54)" }, type: "parallel_narrative" },
      { surah: 19, name: "Maryam", relationship: { en: "Previous surah, also Makkan with prophets' stories", ur: "پچھلی سورۃ، بھی مکی ہے انبیاء کے قصوں کے ساتھ" }, type: "sequential" },
      { surah: 21, name: "Al-Anbiya", relationship: { en: "Following surah with multiple prophet stories", ur: "اگلی سورۃ جس میں متعدد انبیاء کے قصے ہیں" }, type: "sequential" }
    ]
  },

  famousDuas: [
    { ayah: 25, arabic: "رَبِّ اشْرَحْ لِي صَدْرِي", meaning: { en: "My Lord, expand for me my chest", ur: "اے میرے رب! میرا سینہ کھول دے" } },
    { ayah: 26, arabic: "وَيَسِّرْ لِي أَمْرِي", meaning: { en: "And ease for me my task", ur: "اور میرا کام آسان کر دے" } },
    { ayah: 27, arabic: "وَاحْلُلْ عُقْدَةً مِن لِسَانِي", meaning: { en: "And untie the knot from my tongue", ur: "اور میری زبان کی گرہ کھول دے" } },
    { ayah: 28, arabic: "يَفْقَهُوا قَوْلِي", meaning: { en: "That they may understand my speech", ur: "تاکہ وہ میری بات سمجھ سکیں" } },
    { ayah: 114, arabic: "رَبِّ زِدْنِي عِلْمًا", meaning: { en: "My Lord, increase me in knowledge", ur: "اے میرے رب! میرے علم میں اضافہ فرما" } }
  ],

  keyVerses: [
    { ayah: 2, text: "مَا أَنزَلْنَا عَلَيْكَ الْقُرْآنَ لِتَشْقَىٰ", description: { en: "We have not sent down the Quran to cause you distress", ur: "ہم نے آپ پر قرآن اس لیے نازل نہیں کیا کہ آپ تکلیف میں پڑیں" } },
    { ayah: 14, text: "إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي", description: { en: "Indeed, I am Allah. There is no deity except Me, so worship Me", ur: "بے شک میں اللہ ہوں۔ میرے سوا کوئی معبود نہیں، پس میری عبادت کرو" } },
    { ayah: 44, text: "فَقُولَا لَهُ قَوْلًا لَّيِّنًا", description: { en: "Speak to him with gentle speech", ur: "اس سے نرم بات کہنا" } },
    { ayah: 82, text: "وَإِنِّي لَغَفَّارٌ لِّمَن تَابَ", description: { en: "And I am Forgiving to whoever repents", ur: "اور بے شک میں بہت بخشنے والا ہوں جو توبہ کرے" } },
    { ayah: 114, text: "رَّبِّ زِدْنِي عِلْمًا", description: { en: "My Lord, increase me in knowledge", ur: "اے میرے رب! میرے علم میں اضافہ فرما" } },
    { ayah: 124, text: "وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا", description: { en: "Whoever turns away from My remembrance - for him is a depressed life", ur: "جو میری یاد سے منہ موڑے اس کی زندگی تنگ ہوگی" } },
    { ayah: 131, text: "وَرِزْقُ رَبِّكَ خَيْرٌ وَأَبْقَىٰ", description: { en: "But the provision of your Lord is better and more lasting", ur: "اور تیرے رب کا رزق بہتر اور زیادہ پائدار ہے" } },
    { ayah: 132, text: "وَأْمُرْ أَهْلَكَ بِالصَّلَاةِ وَاصْطَبِرْ عَلَيْهَا", description: { en: "Enjoin prayer upon your family and be steadfast", ur: "اپنے گھر والوں کو نماز کا حکم دو اور اس پر ثابت قدم رہو" } }
  ]
};

export default ONTOLOGY;
