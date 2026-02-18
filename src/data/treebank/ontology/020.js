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
  mainTheme: "The Story of Musa in Detail - From Birth to Prophethood, and Adam's Fall",

  categories: {
    quranPurpose: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Purpose of the Quran",
      nameAr: "مقصد القرآن",
      concepts: [
        { term: "Not for Distress", arabic: "ما أنزلنا عليك القرآن لتشقى", meaning: "Quran was not sent to cause hardship", ayahs: [2] },
        { term: "Reminder for Those Who Fear", arabic: "تذكرة لمن يخشى", meaning: "A reminder for those who have khashya", ayahs: [3] },
        { term: "From the Creator", arabic: "تنزيلا ممن خلق", meaning: "Revelation from Him who created", ayahs: [4] },
        { term: "Allah on Throne", arabic: "الرحمن على العرش استوى", meaning: "The Most Merciful established on Throne", ayahs: [5] },
        { term: "Allah Knows All", arabic: "يعلم السر وأخفى", meaning: "He knows the secret and what is hidden", ayahs: [7] },
        { term: "Beautiful Names", arabic: "الأسماء الحسنى", meaning: "To Him belong the most beautiful names", ayahs: [8] }
      ]
    },

    musaCallingBurningBush: {
      color: '#10B981',
      icon: 'Book',
      name: "Musa at the Burning Bush",
      nameAr: "موسى عند الشجرة المباركة",
      concepts: [
        { term: "Seeing Fire", arabic: "آنست نارا", meaning: "Musa perceived a fire", ayahs: [10] },
        { term: "Sacred Valley", arabic: "الواد المقدس طوى", meaning: "The sacred valley of Tuwa", ayahs: [12] },
        { term: "Remove Sandals", arabic: "اخلع نعليك", meaning: "Command to remove sandals", ayahs: [12] },
        { term: "I Am Allah", arabic: "إنني أنا الله", meaning: "Indeed, I am Allah", ayahs: [14] },
        { term: "No God But Me", arabic: "لا إله إلا أنا", meaning: "There is no deity except Me", ayahs: [14] },
        { term: "Worship Me", arabic: "فاعبدني", meaning: "So worship Me", ayahs: [14] },
        { term: "Establish Prayer", arabic: "أقم الصلاة لذكري", meaning: "Establish prayer for My remembrance", ayahs: [14] },
        { term: "Hour is Coming", arabic: "الساعة آتية", meaning: "The Hour is coming", ayahs: [15] },
        { term: "Hidden Hour", arabic: "أكاد أخفيها", meaning: "I almost conceal it", ayahs: [15] }
      ]
    },

    musaMiracles: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Miracles Given to Musa",
      nameAr: "معجزات موسى",
      concepts: [
        { term: "Staff Question", arabic: "وما تلك بيمينك يا موسى", meaning: "What is in your right hand, O Musa?", ayahs: [17] },
        { term: "Staff to Serpent", arabic: "فألقاها فإذا هي حية تسعى", meaning: "He cast it down, it became a serpent", ayahs: [20] },
        { term: "Take It Without Fear", arabic: "خذها ولا تخف", meaning: "Take it and fear not", ayahs: [21] },
        { term: "Glowing Hand", arabic: "اضمم يدك إلى جناحك", meaning: "Draw your hand close - it emerges white", ayahs: [22] },
        { term: "Greater Signs", arabic: "لنريك من آياتنا الكبرى", meaning: "That We may show you of Our greater signs", ayahs: [23] }
      ]
    },

    musaMissionToPharaoh: {
      color: '#EF4444',
      icon: 'Users',
      name: "Mission to Pharaoh",
      nameAr: "الإرسال إلى فرعون",
      concepts: [
        { term: "Go to Pharaoh", arabic: "اذهب إلى فرعون", meaning: "Go to Pharaoh - he has transgressed", ayahs: [24] },
        { term: "Pharaoh's Tyranny", arabic: "إنه طغى", meaning: "Indeed, he has transgressed", ayahs: [24, 43] },
        { term: "Expand My Chest", arabic: "اشرح لي صدري", meaning: "My Lord, expand for me my chest", ayahs: [25] },
        { term: "Ease My Task", arabic: "ويسر لي أمري", meaning: "And ease for me my task", ayahs: [26] },
        { term: "Untie Tongue", arabic: "واحلل عقدة من لساني", meaning: "And untie the knot from my tongue", ayahs: [27] },
        { term: "Harun as Helper", arabic: "اجعل لي وزيرا من أهلي هارون", meaning: "Appoint for me a minister from my family - Harun", ayahs: [29, 30] },
        { term: "Strengthen Through Brother", arabic: "اشدد به أزري", meaning: "Increase my strength through him", ayahs: [31] },
        { term: "Speak Gently", arabic: "فقولا له قولا لينا", meaning: "Speak to him with gentle speech", ayahs: [44] }
      ]
    },

    musaEarlyLife: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Musa's Early Life - Divine Protection",
      nameAr: "حياة موسى المبكرة",
      concepts: [
        { term: "Revelation to Mother", arabic: "وأوحينا إلى أم موسى", meaning: "We inspired to Musa's mother", ayahs: [38] },
        { term: "Cast Him in River", arabic: "أن اقذفيه في التابوت", meaning: "Cast him into the chest, then river", ayahs: [39] },
        { term: "Enemy Takes Him", arabic: "يأخذه عدو لي وعدو له", meaning: "Enemy to Me and to him will take him", ayahs: [39] },
        { term: "Love Cast Upon Him", arabic: "وألقيت عليك محبة مني", meaning: "I cast upon you love from Me", ayahs: [39] },
        { term: "Made Under My Eye", arabic: "ولتصنع على عيني", meaning: "That you would be brought up under My eye", ayahs: [39] },
        { term: "Sister Follows", arabic: "إذ تمشي أختك", meaning: "When your sister went forth", ayahs: [40] },
        { term: "Return to Mother", arabic: "فرجعناك إلى أمك", meaning: "So We restored you to your mother", ayahs: [40] },
        { term: "Killing a Soul", arabic: "وقتلت نفسا", meaning: "And you killed a soul", ayahs: [40] },
        { term: "Years in Madyan", arabic: "ولبثت سنين في أهل مدين", meaning: "You stayed years among the people of Madyan", ayahs: [40] },
        { term: "Chosen for Myself", arabic: "واصطنعتك لنفسي", meaning: "And I produced you for Myself", ayahs: [41] }
      ]
    },

    pharaohConfrontation: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Confrontation with Pharaoh",
      nameAr: "مواجهة فرعون",
      concepts: [
        { term: "Who is Your Lord", arabic: "فمن ربكما يا موسى", meaning: "Pharaoh asked: Who is your Lord?", ayahs: [49] },
        { term: "Lord Gave Everything", arabic: "ربنا الذي أعطى كل شيء خلقه", meaning: "Our Lord gave each thing its form then guided", ayahs: [50] },
        { term: "Knowledge with Allah", arabic: "علمها عند ربي في كتاب", meaning: "Knowledge of past nations is with my Lord in a record", ayahs: [52] },
        { term: "Earth as Bed", arabic: "جعل لكم الأرض مهدا", meaning: "He made the earth for you as a bed", ayahs: [53] },
        { term: "From Earth Created", arabic: "منها خلقناكم", meaning: "From it We created you", ayahs: [55] },
        { term: "To Earth Return", arabic: "وفيها نعيدكم", meaning: "And into it We will return you", ayahs: [55] },
        { term: "From Earth Brought Forth", arabic: "ومنها نخرجكم", meaning: "And from it We will bring you out", ayahs: [55] },
        { term: "Pharaoh Rejected Signs", arabic: "فكذب وأبى", meaning: "But Pharaoh denied and refused", ayahs: [56] }
      ]
    },

    magiciansContest: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Contest with the Magicians",
      nameAr: "مباراة السحرة",
      concepts: [
        { term: "Day of Festival", arabic: "يوم الزينة", meaning: "The day of the festival", ayahs: [59] },
        { term: "Magicians Assembled", arabic: "فجمع كيده ثم أتى", meaning: "Pharaoh gathered his plan then came", ayahs: [60] },
        { term: "Warning from Musa", arabic: "لا تفتروا على الله كذبا", meaning: "Do not invent a lie against Allah", ayahs: [61] },
        { term: "Magicians Disagree", arabic: "فتنازعوا أمرهم", meaning: "They disputed their affair secretly", ayahs: [62] },
        { term: "Ropes Seemed to Move", arabic: "يخيل إليه من سحرهم أنها تسعى", meaning: "Their ropes appeared to him to be moving", ayahs: [66] },
        { term: "Musa's Fear", arabic: "فأوجس في نفسه خيفة موسى", meaning: "Musa felt fear within himself", ayahs: [67] },
        { term: "Fear Not", arabic: "لا تخف إنك أنت الأعلى", meaning: "Fear not, you are superior", ayahs: [68] },
        { term: "Staff Swallows", arabic: "تلقف ما صنعوا", meaning: "It will swallow what they have made", ayahs: [69] },
        { term: "Magician's Craft", arabic: "إنما صنعوا كيد ساحر", meaning: "What they made is only a magician's trick", ayahs: [69] },
        { term: "Magicians Prostrate", arabic: "فألقي السحرة سجدا", meaning: "The magicians fell in prostration", ayahs: [70] },
        { term: "Believe in Lord of Harun and Musa", arabic: "آمنا برب هارون وموسى", meaning: "We have believed in Lord of Harun and Musa", ayahs: [70] }
      ]
    },

    pharaohThreats: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Pharaoh's Threats and Magicians' Faith",
      nameAr: "تهديدات فرعون وإيمان السحرة",
      concepts: [
        { term: "Unauthorized Belief", arabic: "آمنتم له قبل أن آذن لكم", meaning: "You believed before I permitted you", ayahs: [71] },
        { term: "Musa as Teacher", arabic: "إنه لكبيركم", meaning: "He is your leader who taught you", ayahs: [71] },
        { term: "Crucifixion Threat", arabic: "لأقطعن أيديكم وأرجلكم", meaning: "I will cut off hands and feet", ayahs: [71] },
        { term: "Crucified on Palms", arabic: "ولأصلبنكم في جذوع النخل", meaning: "And crucify you on trunks of palm trees", ayahs: [71] },
        { term: "Magicians' Response", arabic: "لن نؤثرك على ما جاءنا من البينات", meaning: "We will not prefer you over clear proofs", ayahs: [72] },
        { term: "Faith Over Life", arabic: "إنما تقضي هذه الحياة الدنيا", meaning: "You only judge this worldly life", ayahs: [72] },
        { term: "Forgiveness for Belief", arabic: "إنا آمنا بربنا ليغفر لنا خطايانا", meaning: "We believed to have sins forgiven", ayahs: [73] },
        { term: "Best Reward", arabic: "والله خير وأبقى", meaning: "Allah is better and more enduring", ayahs: [73] }
      ]
    },

    hellAndParadise: {
      color: '#10B981',
      icon: 'Book',
      name: "Consequences: Hell and Paradise",
      nameAr: "العاقبة: النار والجنة",
      concepts: [
        { term: "Criminal to Hell", arabic: "من يأت ربه مجرما", meaning: "Who comes as criminal - for him is Hell", ayahs: [74] },
        { term: "Neither Dies Nor Lives", arabic: "لا يموت فيها ولا يحيى", meaning: "He will neither die therein nor live", ayahs: [74] },
        { term: "Believer Rewarded", arabic: "ومن يأته مؤمنا", meaning: "Who comes as believer with good deeds", ayahs: [75] },
        { term: "Gardens of Eden", arabic: "جنات عدن", meaning: "Gardens of perpetual residence", ayahs: [76] },
        { term: "Rivers Beneath", arabic: "تجري من تحتها الأنهار", meaning: "Rivers flowing beneath", ayahs: [76] },
        { term: "Reward for Purification", arabic: "ذلك جزاء من تزكى", meaning: "That is reward for one who purifies", ayahs: [76] }
      ]
    },

    exodusAndSeaParting: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "The Exodus and Parting of the Sea",
      nameAr: "الخروج وانشقاق البحر",
      concepts: [
        { term: "Travel by Night", arabic: "أن أسر بعبادي", meaning: "Travel by night with My servants", ayahs: [77] },
        { term: "Dry Path in Sea", arabic: "اضرب لهم طريقا في البحر يبسا", meaning: "Strike a dry path through the sea", ayahs: [77] },
        { term: "No Fear of Pursuit", arabic: "لا تخاف دركا ولا تخشى", meaning: "Fear not being overtaken or afraid", ayahs: [77] },
        { term: "Pharaoh Pursued", arabic: "فأتبعهم فرعون بجنوده", meaning: "Pharaoh pursued with his soldiers", ayahs: [78] },
        { term: "Sea Covered Them", arabic: "فغشيهم من اليم ما غشيهم", meaning: "Sea covered them with what covered them", ayahs: [78] },
        { term: "Pharaoh Led Astray", arabic: "وأضل فرعون قومه", meaning: "Pharaoh led his people astray", ayahs: [79] }
      ]
    },

    israelitesBlessings: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Blessings Upon Bani Israel",
      nameAr: "نعم الله على بني إسرائيل",
      concepts: [
        { term: "Delivered from Enemy", arabic: "أنجيناكم من عدوكم", meaning: "We saved you from your enemy", ayahs: [80] },
        { term: "Appointed at Mount", arabic: "وواعدناكم جانب الطور", meaning: "Appointed at right side of Mount", ayahs: [80] },
        { term: "Manna and Quail", arabic: "المن والسلوى", meaning: "We sent down manna and quails", ayahs: [80] },
        { term: "Eat from Good", arabic: "كلوا من طيبات ما رزقناكم", meaning: "Eat from good things We provided", ayahs: [81] },
        { term: "Do Not Transgress", arabic: "ولا تطغوا فيه", meaning: "Do not transgress therein", ayahs: [81] },
        { term: "Forgiveness for Repentant", arabic: "وإني لغفار لمن تاب", meaning: "I am Forgiving to who repents", ayahs: [82] }
      ]
    },

    samiriGoldenCalf: {
      color: '#10B981',
      icon: 'Book',
      name: "The Samiri and the Golden Calf",
      nameAr: "السامري والعجل",
      concepts: [
        { term: "Musa Hastened", arabic: "وما أعجلك عن قومك", meaning: "What made you hasten from your people?", ayahs: [83] },
        { term: "People Left Behind", arabic: "هم أولاء على أثري", meaning: "They are following my tracks", ayahs: [84] },
        { term: "Samiri Led Astray", arabic: "فإنا قد فتنا قومك وأضلهم السامري", meaning: "Samiri led them astray", ayahs: [85] },
        { term: "Angry and Grieved", arabic: "غضبان أسفا", meaning: "Musa returned angry and grieved", ayahs: [86] },
        { term: "Calf with Sound", arabic: "عجلا جسدا له خوار", meaning: "A calf body that had a lowing sound", ayahs: [88] },
        { term: "This is Your God", arabic: "هذا إلهكم وإله موسى", meaning: "This is your god and god of Musa", ayahs: [88] },
        { term: "Calf Cannot Respond", arabic: "ألا يرجع إليهم قولا", meaning: "It could not return speech to them", ayahs: [89] },
        { term: "Harun's Warning", arabic: "وقد قال لهم هارون", meaning: "Harun had told them before", ayahs: [90] },
        { term: "Follow Me", arabic: "فاتبعوني وأطيعوا أمري", meaning: "So follow me and obey my order", ayahs: [90] }
      ]
    },

    musaReturnsAngry: {
      color: '#10B981',
      icon: 'Book',
      name: "Musa's Return and Confrontation",
      nameAr: "عودة موسى الغاضبة",
      concepts: [
        { term: "Seizes Harun's Head", arabic: "أخذ برأس أخيه يجره إليه", meaning: "Musa seized his brother's head", ayahs: [94] },
        { term: "Son of My Mother", arabic: "ابن أم", meaning: "O son of my mother", ayahs: [94] },
        { term: "They Oppressed Me", arabic: "إن القوم استضعفوني", meaning: "The people oppressed me", ayahs: [94] },
        { term: "Almost Killed Me", arabic: "وكادوا يقتلونني", meaning: "And were about to kill me", ayahs: [94] },
        { term: "Question to Samiri", arabic: "فما خطبك يا سامري", meaning: "What is your case, O Samiri?", ayahs: [95] },
        { term: "Saw What They Did Not", arabic: "بصرت بما لم يبصروا به", meaning: "I saw what they did not see", ayahs: [96] },
        { term: "Handful from Messenger's Track", arabic: "قبضت قبضة من أثر الرسول", meaning: "I took a handful from messenger's track", ayahs: [96] },
        { term: "Soul Suggested", arabic: "كذلك سولت لي نفسي", meaning: "Thus my soul suggested to me", ayahs: [96] },
        { term: "No Touching", arabic: "لا مساس", meaning: "Your punishment: Do not touch", ayahs: [97] },
        { term: "Burn and Scatter Calf", arabic: "لنحرقنه ثم لننسفنه في اليم", meaning: "We will burn it and scatter in sea", ayahs: [97] }
      ]
    },

    torahGiven: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Revelation of the Torah",
      nameAr: "إنزال التوراة",
      concepts: [
        { term: "Appointed Thirty Nights", arabic: "وواعدنا موسى ثلاثين ليلة", meaning: "We made appointment with Musa for thirty nights", ayahs: [83] },
        { term: "Completed with Ten", arabic: "وأتممناها بعشر", meaning: "And completed them with ten", ayahs: [83] },
        { term: "Tablets", arabic: "الألواح", meaning: "The Tablets of Torah", ayahs: [86] }
      ]
    },

    adamStory: {
      color: '#10B981',
      icon: 'Book',
      name: "The Story of Adam",
      nameAr: "قصة آدم",
      concepts: [
        { term: "Covenant with Adam", arabic: "ولقد عهدنا إلى آدم", meaning: "We made covenant with Adam", ayahs: [115] },
        { term: "Adam Forgot", arabic: "فنسي ولم نجد له عزما", meaning: "But he forgot; We found no determination", ayahs: [115] },
        { term: "Angels Prostrated", arabic: "فسجدوا إلا إبليس أبى", meaning: "Angels prostrated except Iblis refused", ayahs: [116] },
        { term: "Iblis Enemy", arabic: "إن هذا عدو لك ولزوجك", meaning: "This is enemy to you and your wife", ayahs: [117] },
        { term: "Never Hungry in Paradise", arabic: "أن لا تجوع فيها ولا تعرى", meaning: "You will not be hungry or naked therein", ayahs: [118] },
        { term: "Never Thirsty or Sunstruck", arabic: "لا تظمأ فيها ولا تضحى", meaning: "Not thirsty nor struck by sun", ayahs: [119] },
        { term: "Shaytan Whispered", arabic: "فوسوس إليه الشيطان", meaning: "Satan whispered to him", ayahs: [120] },
        { term: "Tree of Eternity", arabic: "شجرة الخلد", meaning: "Shall I direct you to tree of eternity?", ayahs: [120] },
        { term: "Kingdom That Decays Not", arabic: "ملك لا يبلى", meaning: "And possession that will not deteriorate", ayahs: [120] },
        { term: "They Both Ate", arabic: "فأكلا منها", meaning: "So they both ate from it", ayahs: [121] },
        { term: "Private Parts Exposed", arabic: "فبدت لهما سوآتهما", meaning: "Their private parts became apparent", ayahs: [121] },
        { term: "Covered with Leaves", arabic: "وطفقا يخصفان عليهما من ورق الجنة", meaning: "They began to fasten leaves over themselves", ayahs: [121] },
        { term: "Adam Disobeyed", arabic: "وعصى آدم ربه فغوى", meaning: "Adam disobeyed his Lord and erred", ayahs: [121] },
        { term: "Then Chosen", arabic: "ثم اجتباه ربه", meaning: "Then his Lord chose him", ayahs: [122] },
        { term: "Turned to Him", arabic: "فتاب عليه وهدى", meaning: "And turned to him and guided", ayahs: [122] },
        { term: "Descend Together", arabic: "اهبطا منها جميعا", meaning: "Descend from Paradise, all together", ayahs: [123] },
        { term: "Some Enemy to Others", arabic: "بعضكم لبعض عدو", meaning: "Some of you enemies to others", ayahs: [123] },
        { term: "Guidance From Me", arabic: "فإما يأتينكم مني هدى", meaning: "When guidance comes from Me", ayahs: [123] }
      ]
    },

    consequencesOfGuidance: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Consequences of Following/Ignoring Guidance",
      nameAr: "عواقب اتباع الهدى أو الإعراض عنه",
      concepts: [
        { term: "Following Guidance", arabic: "فمن اتبع هداي", meaning: "Whoever follows My guidance", ayahs: [123] },
        { term: "Will Not Go Astray", arabic: "فلا يضل ولا يشقى", meaning: "Will neither go astray nor suffer", ayahs: [123] },
        { term: "Turns Away from Remembrance", arabic: "ومن أعرض عن ذكري", meaning: "Who turns away from My remembrance", ayahs: [124] },
        { term: "Depressed Life", arabic: "فإن له معيشة ضنكا", meaning: "Will have a depressed life", ayahs: [124] },
        { term: "Raised Blind", arabic: "ونحشره يوم القيامة أعمى", meaning: "Gathered on Day of Judgment blind", ayahs: [124] },
        { term: "Why Blind", arabic: "لم حشرتني أعمى وقد كنت بصيرا", meaning: "Why have I been raised blind when I could see?", ayahs: [125] },
        { term: "Forgot Our Signs", arabic: "كذلك أتتك آياتنا فنسيتها", meaning: "Our signs came, you forgot them", ayahs: [126] },
        { term: "Likewise Forgotten", arabic: "وكذلك اليوم تنسى", meaning: "And thus today you are forgotten", ayahs: [126] }
      ]
    },

    dayOfJudgment: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Day of Judgment Scenes",
      nameAr: "مشاهد يوم القيامة",
      concepts: [
        { term: "Trumpet Blown", arabic: "يوم ينفخ في الصور", meaning: "Day when trumpet is blown", ayahs: [102] },
        { term: "Criminals Blue-Eyed", arabic: "ونحشر المجرمين يومئذ زرقا", meaning: "Criminals gathered with blue/blind eyes", ayahs: [102] },
        { term: "Murmuring", arabic: "يتخافتون بينهم", meaning: "They will murmur among themselves", ayahs: [103] },
        { term: "Stayed Only Ten Days", arabic: "إن لبثتم إلا عشرا", meaning: "You stayed only ten days", ayahs: [103] },
        { term: "Mountains Question", arabic: "ويسألونك عن الجبال", meaning: "They ask about the mountains", ayahs: [105] },
        { term: "Mountains Blown Away", arabic: "فقل ينسفها ربي نسفا", meaning: "Say: My Lord will blow them away", ayahs: [105] },
        { term: "Level Plain", arabic: "فيذرها قاعا صفصفا", meaning: "Leaving it as level plain", ayahs: [106] },
        { term: "No Crookedness", arabic: "لا ترى فيها عوجا ولا أمتا", meaning: "No depression or elevation", ayahs: [107] },
        { term: "Follow the Caller", arabic: "يتبعون الداعي", meaning: "They will follow the caller", ayahs: [108] },
        { term: "Voices Humbled", arabic: "وخشعت الأصوات للرحمن", meaning: "Voices humbled for the Most Merciful", ayahs: [108] },
        { term: "Only Whisper", arabic: "فلا تسمع إلا همسا", meaning: "You hear only a whisper", ayahs: [108] },
        { term: "No Intercession Except", arabic: "لا تنفع الشفاعة إلا من أذن له الرحمن", meaning: "Intercession benefits only whom Rahman permits", ayahs: [109] },
        { term: "Faces Humbled", arabic: "وعنت الوجوه للحي القيوم", meaning: "Faces will be humbled before the Living", ayahs: [111] }
      ]
    },

    quranGuidance: {
      color: '#EF4444',
      icon: 'Users',
      name: "The Quran as Guidance",
      nameAr: "القرآن هداية",
      concepts: [
        { term: "Arabic Quran", arabic: "قرآنا عربيا", meaning: "An Arabic Quran", ayahs: [113] },
        { term: "Varied Warnings", arabic: "صرفنا فيه من الوعيد", meaning: "Diversified therein the warnings", ayahs: [113] },
        { term: "They May Fear", arabic: "لعلهم يتقون", meaning: "That they might fear Allah", ayahs: [113] },
        { term: "Or Produce Remembrance", arabic: "أو يحدث لهم ذكرا", meaning: "Or it would cause them remembrance", ayahs: [113] },
        { term: "Exalted is Allah", arabic: "فتعالى الله الملك الحق", meaning: "Exalted is Allah, the Sovereign, the Truth", ayahs: [114] },
        { term: "Do Not Hasten", arabic: "ولا تعجل بالقرآن", meaning: "Do not hasten with the Quran", ayahs: [114] },
        { term: "Increase My Knowledge", arabic: "رب زدني علما", meaning: "My Lord, increase me in knowledge", ayahs: [114] }
      ]
    },

    finalAdmonitions: {
      color: '#10B981',
      icon: 'Book',
      name: "Final Admonitions",
      nameAr: "النصائح الختامية",
      concepts: [
        { term: "Do Not Extend Eyes", arabic: "ولا تمدن عينيك", meaning: "Do not extend your eyes toward what We gave", ayahs: [131] },
        { term: "Flower of Worldly Life", arabic: "زهرة الحياة الدنيا", meaning: "Splendor of worldly life", ayahs: [131] },
        { term: "Test Them Thereby", arabic: "لنفتنهم فيه", meaning: "By which We test them", ayahs: [131] },
        { term: "Provision of Lord Better", arabic: "ورزق ربك خير وأبقى", meaning: "Provision of your Lord is better and lasting", ayahs: [131] },
        { term: "Command Family to Prayer", arabic: "وأمر أهلك بالصلاة", meaning: "And enjoin prayer upon your family", ayahs: [132] },
        { term: "Be Steadfast", arabic: "واصطبر عليها", meaning: "And be steadfast therein", ayahs: [132] },
        { term: "We Provide You", arabic: "نحن نرزقك", meaning: "We provide for you", ayahs: [132] },
        { term: "End for the Righteous", arabic: "والعاقبة للتقوى", meaning: "The outcome is for the righteous", ayahs: [132] },
        { term: "Why No Sign", arabic: "لولا يأتينا بآية من ربه", meaning: "Why does he not bring a sign from his Lord?", ayahs: [133] },
        { term: "Clear Evidence Came", arabic: "أولم تأتهم بينة ما في الصحف الأولى", meaning: "Has there not come evidence of what was in former scriptures?", ayahs: [133] },
        { term: "Wait, We Are Waiting", arabic: "فتربصوا فستعلمون", meaning: "So wait, and you will know", ayahs: [135] },
        { term: "Straight Path", arabic: "من أصحاب الصراط السوي", meaning: "Who are companions of the straight path", ayahs: [135] }
      ]
    }
  },

  relationships: [
    { from: "Quran's Purpose", to: "Mercy Not Distress", type: "declaration", description: "Quran is comfort, not hardship" },
    { from: "Musa at Bush", to: "Prophethood", type: "appointment", description: "Direct divine calling and commission" },
    { from: "Staff Miracle", to: "Signs for Pharaoh", type: "preparation", description: "Miracles given as proof of prophethood" },
    { from: "Musa's Prayer", to: "Harun as Support", type: "fulfillment", description: "Allah grants helper as requested" },
    { from: "Gentle Speech", to: "Pharaoh's Rejection", type: "contrast", description: "Kindness met with arrogance" },
    { from: "Magicians' Defeat", to: "Magicians' Faith", type: "transformation", description: "Opponents become believers" },
    { from: "Pharaoh's Threats", to: "Magicians' Firmness", type: "test", description: "Faith stronger than death" },
    { from: "Sea Parting", to: "Pharaoh's Drowning", type: "consequence", description: "Salvation for believers, destruction for oppressors" },
    { from: "Manna and Quail", to: "Golden Calf", type: "contrast", description: "Blessings followed by ingratitude" },
    { from: "Samiri's Deception", to: "Musa's Anger", type: "consequence", description: "Innovation leads to divine anger" },
    { from: "Adam's Covenant", to: "Adam's Forgetfulness", type: "failure", description: "Human weakness despite divine warning" },
    { from: "Tree of Eternity", to: "Paradise Lost", type: "consequence", description: "Deception leads to expulsion" },
    { from: "Guidance Given", to: "Two Paths", type: "choice", description: "Following or rejecting determines fate" },
    { from: "Worldly Splendor", to: "Divine Provision", type: "comparison", description: "Temporary vs. eternal provision" }
  ],

  thematicFlow: {
    title: "From Divine Comfort to Human Choice",
    stages: [
      { name: "Quran's Purpose", ayahs: [1, 2, 3, 4, 5, 6, 7, 8], description: "Not for distress but as reminder" },
      { name: "Musa's Calling", ayahs: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], description: "The burning bush and miracles" },
      { name: "Mission Assignment", ayahs: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], description: "Go to Pharaoh with Harun" },
      { name: "Musa's Early Life", ayahs: [37, 38, 39, 40, 41, 42], description: "Divine protection from birth" },
      { name: "Instructions for Pharaoh", ayahs: [43, 44, 45, 46, 47, 48], description: "Speak gently, fear not" },
      { name: "Confrontation Begins", ayahs: [49, 50, 51, 52, 53, 54, 55, 56], description: "Who is your Lord?" },
      { name: "Challenge Issued", ayahs: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70], description: "Magicians contest" },
      { name: "Magicians Convert", ayahs: [70, 71, 72, 73, 74, 75, 76], description: "Faith over death threats" },
      { name: "Exodus and Sea", ayahs: [77, 78, 79, 80, 81, 82], description: "Escape and blessings" },
      { name: "Golden Calf Crisis", ayahs: [83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98], description: "Samiri's deception" },
      { name: "True God Declaration", ayahs: [98, 99, 100, 101], description: "Allah alone is God" },
      { name: "Day of Judgment", ayahs: [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112], description: "Trumpet, mountains, humbled voices" },
      { name: "Quran's Warning", ayahs: [113, 114], description: "Arabic Quran with warnings" },
      { name: "Adam's Story", ayahs: [115, 116, 117, 118, 119, 120, 121, 122, 123], description: "Covenant, fall, and descent" },
      { name: "Two Paths", ayahs: [124, 125, 126, 127, 128, 129, 130], description: "Guidance vs. turning away" },
      { name: "Final Advice", ayahs: [131, 132, 133, 134, 135], description: "Don't covet, pray, wait" }
    ]
  },

  uniqueInsight: {
    title: "The Dua of Musa (رَبِّ اشْرَحْ لِي صَدْرِي)",
    insight: "Verses 25-35 contain Musa's beautiful supplication when given the mission to Pharaoh. He asks for: (1) expanded chest (courage), (2) ease in his task, (3) untied tongue (eloquence), (4) a helper (Harun). This dua teaches us that prophets too needed divine support for difficult tasks. The phrase 'Expand my chest' became a model for seeking courage before challenges. Remarkably, Allah grants every request, showing that sincere dua during moments of apprehension is beloved to Him. This passage is frequently recited before public speaking or facing difficult situations.",
    arabicTerm: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    rootMeaning: "ش-ر-ح (to expand, open) - opening of the heart for wisdom and courage",
    keyAyah: 25
  },

  historicalContext: {
    revelationPeriod: "Makkan period - middle period",
    occasion: "Revealed when the Prophet (peace be upon him) was facing great difficulty and pressure from Quraysh. The opening verses 'We have not sent down the Quran to cause you distress' were a comfort. Umar ibn al-Khattab is reported to have embraced Islam after hearing the opening verses of this surah.",
    note: "This surah contains the most detailed account of Musa's story in the Quran, from his miraculous protection as an infant through the golden calf incident. It also uniquely connects Musa's story with Adam's, showing the pattern of divine covenant, human weakness, repentance, and guidance."
  },

  linguisticFeatures: {
    features: [
      { name: "Opening Letters", description: "طه - Muqatta'at (disconnected letters)", example: "Ta Ha", ayah: 1 },
      { name: "Rhetorical Questions", description: "وما تلك بيمينك يا موسى", example: "What is that in your right hand, O Musa?", ayah: 17 },
      { name: "Direct Divine Speech", description: "إنني أنا الله", example: "Indeed, I am Allah", ayah: 14 },
      { name: "Parallel Structure", description: "لا يموت فيها ولا يحيى", example: "Neither dies therein nor lives", ayah: 74 },
      { name: "Emphatic Construction", description: "إنك أنت الأعلى", example: "Indeed, you - you are superior", ayah: 68 },
      { name: "Beautiful Dua Format", description: "رب اشرح لي صدري", example: "My Lord, expand for me my chest", ayah: 25 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 26, name: "Ash-Shu'ara", relationship: "Also tells Musa's story in detail", type: "parallel_narrative" },
      { surah: 28, name: "Al-Qasas", relationship: "Covers Musa's early life extensively", type: "parallel_narrative" },
      { surah: 7, name: "Al-A'raf", relationship: "Contains magicians' story and golden calf", type: "parallel_narrative" },
      { surah: 2, name: "Al-Baqarah", relationship: "Golden calf story also mentioned (2:51-54)", type: "parallel_narrative" },
      { surah: 19, name: "Maryam", relationship: "Previous surah, also Makkan with prophets' stories", type: "sequential" },
      { surah: 21, name: "Al-Anbiya", relationship: "Following surah with multiple prophet stories", type: "sequential" }
    ]
  },

  famousDuas: [
    { ayah: 25, arabic: "رَبِّ اشْرَحْ لِي صَدْرِي", meaning: "My Lord, expand for me my chest" },
    { ayah: 26, arabic: "وَيَسِّرْ لِي أَمْرِي", meaning: "And ease for me my task" },
    { ayah: 27, arabic: "وَاحْلُلْ عُقْدَةً مِن لِسَانِي", meaning: "And untie the knot from my tongue" },
    { ayah: 28, arabic: "يَفْقَهُوا قَوْلِي", meaning: "That they may understand my speech" },
    { ayah: 114, arabic: "رَبِّ زِدْنِي عِلْمًا", meaning: "My Lord, increase me in knowledge" }
  ],

  keyVerses: [
    { ayah: 2, text: "مَا أَنزَلْنَا عَلَيْكَ الْقُرْآنَ لِتَشْقَىٰ", description: "We have not sent down the Quran to cause you distress" },
    { ayah: 14, text: "إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي", description: "Indeed, I am Allah. There is no deity except Me, so worship Me" },
    { ayah: 44, text: "فَقُولَا لَهُ قَوْلًا لَّيِّنًا", description: "Speak to him with gentle speech" },
    { ayah: 82, text: "وَإِنِّي لَغَفَّارٌ لِّمَن تَابَ", description: "And I am Forgiving to whoever repents" },
    { ayah: 114, text: "رَّبِّ زِدْنِي عِلْمًا", description: "My Lord, increase me in knowledge" },
    { ayah: 124, text: "وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا", description: "Whoever turns away from My remembrance - for him is a depressed life" },
    { ayah: 131, text: "وَرِزْقُ رَبِّكَ خَيْرٌ وَأَبْقَىٰ", description: "But the provision of your Lord is better and more lasting" },
    { ayah: 132, text: "وَأْمُرْ أَهْلَكَ بِالصَّلَاةِ وَاصْطَبِرْ عَلَيْهَا", description: "Enjoin prayer upon your family and be steadfast" }
  ]
};

export default ONTOLOGY;
