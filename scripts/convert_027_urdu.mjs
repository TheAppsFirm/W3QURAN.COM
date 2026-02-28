import fs from 'fs';

const filePath = 'src/data/treebank/ontology/027.js';
let content = fs.readFileSync(filePath, 'utf8');

// Concept-level Urdu translations organized by category
const translations = {
  // quranIntroduction
  "Ta Sin (disconnected letters)": "طٰسٓ (حروفِ مقطعات)",
  "Mysterious letters opening the surah": "سورت کے آغاز میں پراسرار حروف",
  "These are verses of the Quran and a clear Book": "یہ قرآن اور واضح کتاب کی آیات ہیں",
  "Dual description emphasizing clarity": "وضاحت پر زور دینے والی دوہری تعریف",
  "Guidance and glad tidings for believers": "مومنوں کے لیے ہدایت اور خوشخبری",
  "Quran's dual function for the faithful": "ایمانداروں کے لیے قرآن کا دوہرا کردار",

  // believersQualities
  "Establish prayer": "نماز قائم کرنا",
  "First pillar mentioned": "سب سے پہلا ذکر شدہ رکن",
  "Give zakah": "زکوٰۃ دینا",
  "Financial worship obligation": "مالی عبادت کی ذمہ داری",
  "Certain of the Hereafter": "آخرت پر یقین رکھنا",
  "Firm faith in afterlife": "آخرت پر پختہ ایمان",

  // disbelieversState
  "We made their deeds pleasing to them": "ہم نے ان کے اعمال ان کی نظر میں مزیّن کر دیے",
  "Self-deception in misguidance": "گمراہی میں خود فریبی",
  "So they wander blindly": "تو وہ اندھے ہو کر بھٹکتے ہیں",
  "Spiritual blindness leads to confusion": "روحانی اندھاپن حیرت کی طرف لے جاتا ہے",
  "Those who will have worst punishment": "وہ جنہیں بدترین عذاب ہوگا",
  "Consequence of denying afterlife": "آخرت سے انکار کا نتیجہ",

  // musaStory
  "Indeed I perceive a fire": "بے شک میں نے ایک آگ دیکھی ہے",
  "Musa's first encounter with divine light": "موسیٰ کا الٰہی نور سے پہلا سامنا",
  "Blessed is whoever is at the fire": "مبارک ہے وہ جو آگ کے پاس ہے",
  "Divine blessing at the burning bush": "جلتی جھاڑی پر الٰہی برکت",
  "O Musa, indeed it is I - Allah, the Mighty, the Wise": "اے موسیٰ، بے شک میں ہی اللہ ہوں، غالب، حکمت والا",
  "Allah's self-introduction to Musa": "اللہ کا موسیٰ سے اپنا تعارف",
  "Throw your staff": "اپنا عصا پھینکو",
  "First miracle commanded": "پہلا معجزہ حکم دیا گیا",
  "Put your hand in your pocket": "اپنا ہاتھ اپنے گریبان میں ڈالو",
  "Second miracle of the white hand": "سفید ہاتھ کا دوسرا معجزہ",
  "Among nine signs to Pharaoh": "فرعون کے لیے نو نشانیوں میں سے",
  "Nine miracles for Pharaoh's people": "فرعون کی قوم کے لیے نو معجزات",
  "This is obvious magic": "یہ صریح جادو ہے",
  "Pharaoh's dismissive response": "فرعون کا رد عمل",
  "They rejected while certain of them": "انہوں نے انکار کیا حالانکہ ان کے دلوں نے مان لیا تھا",
  "Denial despite inner conviction": "باطنی یقین کے باوجود انکار",

  // sulaymanKingdom
  "We gave Dawud and Sulayman knowledge": "ہم نے داؤد اور سلیمان کو علم عطا کیا",
  "Divine knowledge granted to both": "دونوں کو الٰہی علم عطا ہوا",
  "Praise to Allah who favored us": "اللہ کا شکر ہے جس نے ہمیں فضیلت دی",
  "Gratitude for being preferred over many": "بہت سے بندوں پر فضیلت پانے کا شکر",
  "Sulayman inherited Dawud": "سلیمان نے داؤد کی وراثت پائی",
  "Inheritance of prophethood and kingdom": "نبوت اور سلطنت کی وراثت",
  "We were taught the language of birds": "ہمیں پرندوں کی زبان سکھائی گئی",
  "Unique gift of understanding bird speech": "پرندوں کی بات سمجھنے کا منفرد عطیہ",
  "We were given of all things": "ہمیں ہر چیز دی گئی",
  "Comprehensive divine provision": "جامع الٰہی عطائے",

  // sulaymanArmy
  "Gathered for Sulayman were his soldiers": "سلیمان کے لیے ان کے لشکر جمع کیے گئے",
  "Marshalling of vast forces": "عظیم افواج کی صف بندی",
  "Of jinn, humans, and birds": "جنوں، انسانوں اور پرندوں میں سے",
  "Three types of soldiers": "تین قسم کے سپاہی",
  "They were marshaled in rows": "وہ قطاروں میں منظم کیے گئے",
  "Military organization and discipline": "فوجی تنظیم اور نظم",

  // valleyOfAnts
  "Valley of the Ants": "چیونٹیوں کی وادی",
  "Geographic location named after ants": "چیونٹیوں کے نام سے موسوم جغرافیائی مقام",
  "O ants, enter your dwellings": "اے چیونٹیو، اپنے بلوں میں داخل ہو جاؤ",
  "Ant's warning to her colony": "چیونٹی کا اپنی بستی کو خبردار کرنا",
  "Lest Sulayman and his soldiers crush you": "کہیں سلیمان اور ان کے لشکر تمہیں کچل نہ دیں",
  "Ant's concern for community survival": "چیونٹی کی اپنی بستی کی بقاء کی فکر",
  "While they perceive not": "اور انہیں خبر بھی نہ ہو",
  "Acknowledging they would not intentionally harm": "تسلیم کرنا کہ وہ جان بوجھ کر نقصان نہ پہنچائیں گے",
  "He smiled laughing at her words": "اس نے اس کی بات پر مسکراتے ہوئے ہنسا",
  "Sulayman's gentle amusement": "سلیمان کی نرم دلی سے خوشی",

  // sulaymanPrayer
  "My Lord, enable me to be grateful for Your favor": "اے میرے رب، مجھے توفیق دے کہ میں تیری نعمت کا شکر ادا کروں",
  "Prayer for gratitude": "شکرگزاری کی دعا",
  "Which You have bestowed upon me and my parents": "جو تو نے مجھ پر اور میرے والدین پر انعام فرمائی",
  "Including parents in gratitude": "شکرگزاری میں والدین کو شامل کرنا",
  "And to do righteousness pleasing to You": "اور یہ کہ میں ایسے نیک عمل کروں جو تجھے پسند ہوں",
  "Prayer for pleasing deeds": "پسندیدہ اعمال کی دعا",
  "Admit me by Your mercy among Your righteous servants": "اپنی رحمت سے مجھے اپنے نیک بندوں میں داخل فرما",
  "Prayer for righteous companionship": "نیک صحبت کی دعا",

  // hudhudStory
  "He inspected the birds": "اس نے پرندوں کا معائنہ کیا",
  "Sulayman's attention to detail": "سلیمان کی تفصیل پر توجہ",
  "Why do I not see the hoopoe?": "مجھے ہدہد کیوں نظر نہیں آتا؟",
  "Noticing absence of one bird": "ایک پرندے کی غیر حاضری کو نوٹ کرنا",
  "I will punish him severely or slaughter him": "میں اسے سخت سزا دوں گا یا اسے ذبح کروں گا",
  "Accountability for absence without excuse": "بغیر عذر غیر حاضری پر جوابدہی",
  "Unless he brings me clear evidence": "مگر یہ کہ وہ واضح دلیل لائے",
  "Opportunity for justification": "جواز کا موقع",
  "I learned what you have not learned": "میں نے وہ جانا جو آپ نے نہیں جانا",
  "Hoopoe's surprising knowledge": "ہدہد کا حیرت انگیز علم",
  "I have come to you from Sheba with certain news": "میں آپ کے پاس سبا سے یقینی خبر لے کر آیا ہوں",
  "Important intelligence from Yemen": "یمن سے اہم اطلاعات",

  // queenOfSheba
  "I found a woman ruling them": "میں نے ایک عورت کو ان پر حکومت کرتے پایا",
  "Female ruler discovered": "خاتون حکمران دریافت ہوئی",
  "And she has been given of all things": "اور اسے ہر چیز دی گئی ہے",
  "Her wealth and power described": "اس کی دولت اور طاقت کی تفصیل",
  "And she has a magnificent throne": "اور اس کا ایک عظیم تخت ہے",
  "Symbol of her royal authority": "اس کی شاہی اقتدار کی علامت",
  "I found her and her people prostrating to the sun": "میں نے اسے اور اس کی قوم کو سورج کو سجدہ کرتے پایا",
  "Sun worship in Sheba": "سبا میں سورج پرستی",
  "Satan made their deeds pleasing to them": "شیطان نے ان کے اعمال ان کی نظر میں مزیّن کر دیے",
  "Satanic beautification of idolatry": "بت پرستی کی شیطانی آرائش",

  // sulaymanLetter
  "Take this letter of mine and deliver it to them": "میرا یہ خط لے جاؤ اور ان تک پہنچاؤ",
  "Diplomatic mission assigned": "سفارتی مشن تفویض کیا گیا",
  "Indeed, it is from Sulayman": "بے شک یہ سلیمان کی طرف سے ہے",
  "Royal identification": "شاہی شناخت",
  "In the name of Allah, the Most Merciful": "اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے",
  "Bismillah in the letter": "خط میں بسم اللہ",
  "Do not be arrogant and come to me in submission": "میرے سامنے سرکشی نہ کرو اور فرمانبردار ہو کر آؤ",
  "Call to Islam and humility": "اسلام اور عاجزی کی دعوت",

  // shebaConsultation
  "She said: O chiefs, advise me in my affair": "اس نے کہا: اے سرداروں، میرے معاملے میں مشورہ دو",
  "Queen seeks counsel": "ملکہ مشورہ طلب کرتی ہے",
  "I would not decide until you witness": "میں فیصلہ نہیں کروں گی جب تک تم میرے سامنے نہ ہو",
  "Consultative leadership style": "مشاورتی طرزِ قیادت",
  "We are of great strength and military might": "ہم بڑی طاقت اور جنگی قوت والے ہیں",
  "Chiefs boast of military power": "سرداروں کا فوجی طاقت پر فخر",
  "The command is yours, so see what you will command": "حکم آپ کا ہے، دیکھ لیں آپ کیا حکم دیتی ہیں",
  "Deferring to queen's judgment": "ملکہ کی رائے پر چھوڑنا",
  "Indeed kings, when they enter a city, ruin it": "بے شک بادشاہ جب کسی بستی میں داخل ہوتے ہیں تو اسے تباہ کر دیتے ہیں",
  "Queen's wisdom about conquering kings": "فاتح بادشاہوں کے بارے میں ملکہ کی حکمت",
  "And I will send them a gift": "اور میں ان کے پاس ایک تحفہ بھیجوں گی",
  "Diplomatic approach chosen": "سفارتی طریقہ اختیار کیا",

  // sulaymanRejectsGift
  "Would you provide me with wealth?": "کیا تم مجھے مال سے مدد کرتے ہو؟",
  "Rejection of material bribery": "مادی رشوت کا رد",
  "What Allah has given me is better than what He gave you": "جو اللہ نے مجھے دیا ہے وہ اس سے بہتر ہے جو تمہیں دیا",
  "Divine gifts exceed worldly wealth": "الٰہی عطائے دنیاوی دولت سے بڑھ کر ہیں",
  "Rather you rejoice in your gift": "بلکہ تم اپنے تحفے سے خوش ہوتے ہو",
  "Worldly people value material things": "دنیادار مادی چیزوں کی قدر کرتے ہیں",
  "Return to them, for we will come with soldiers": "ان کے پاس واپس جاؤ، ہم لشکر لے کر آئیں گے",
  "Warning of military response": "فوجی جواب کی تنبیہ",

  // throneTransport
  "Which of you will bring me her throne?": "تم میں سے کون اس کا تخت میرے پاس لائے گا؟",
  "Challenge issued to court": "دربار میں چیلنج دیا",
  "A powerful one of the jinn said": "جنوں میں سے ایک طاقتور نے کہا",
  "Jinn offers to bring throne": "جن نے تخت لانے کی پیشکش کی",
  "I will bring it before you rise from your place": "آپ کے اپنی جگہ سے اٹھنے سے پہلے لے آؤں گا",
  "Jinn's offer of speed": "جن کی تیزرفتاری کی پیشکش",
  "Said one who had knowledge from the Book": "کتاب کا علم رکھنے والے نے کہا",
  "One with special knowledge": "خاص علم والا شخص",
  "I will bring it before your glance returns": "آپ کی پلک جھپکنے سے پہلے لے آؤں گا",
  "Instantaneous transport": "فوری منتقلی",
  "This is from my Lord's favor": "یہ میرے رب کے فضل سے ہے",
  "Sulayman attributes miracle to Allah": "سلیمان نے معجزے کو اللہ کی طرف منسوب کیا",
  "To test me whether I will be grateful or ungrateful": "میری آزمائش کے لیے کہ میں شکر کروں گا یا ناشکری",
  "Recognizing blessings as tests": "نعمتوں کو آزمائش سمجھنا",

  // queenArrival
  "Disguise her throne": "اس کے تخت کی شکل بدل دو",
  "Test of her intelligence": "اس کی ذہانت کی آزمائش",
  "We will see if she will be guided or of those who are not guided": "ہم دیکھیں گے آیا وہ سمجھتی ہے یا ان میں سے ہے جو نہیں سمجھتے",
  "Observing her discernment": "اس کی فراست کا مشاہدہ",
  "Is your throne like this?": "کیا تمہارا تخت ایسا ہے؟",
  "Question about her throne": "اس کے تخت کے بارے میں سوال",
  "It is as if it were": "جیسے یہ وہی ہے",
  "Queen's perceptive response": "ملکہ کا فراستمند جواب",
  "She was told, Enter the palace": "اسے کہا گیا، محل میں داخل ہو",
  "Invitation to crystal palace": "شیشے کے محل میں دعوت",
  "She thought it was water and uncovered her shins": "اس نے اسے پانی سمجھا اور اپنی پنڈلیاں کھول دیں",
  "Glass floor illusion": "شیشے کے فرش کا دھوکا",
  "It is a palace smoothed of glass": "یہ شیشے کا صاف محل ہے",
  "Explanation of the floor": "فرش کی وضاحت",

  // queenSubmission
  "My Lord, I have wronged myself": "اے میرے رب، میں نے اپنے آپ پر ظلم کیا",
  "Queen's confession": "ملکہ کا اعتراف",
  "I submit with Sulayman to Allah, Lord of the worlds": "میں سلیمان کے ساتھ اللہ رب العالمین کے حضور سر تسلیم خم کرتی ہوں",
  "Queen accepts Islam": "ملکہ نے اسلام قبول کیا",

  // salihStory
  "We sent to Thamud their brother Salih": "ہم نے ثمود کی طرف ان کے بھائی صالح کو بھیجا",
  "Prophet sent to his own people": "نبی کو اپنی ہی قوم کی طرف بھیجا گیا",
  "That worship Allah": "اللہ کی عبادت کرو",
  "Core prophetic message": "بنیادی نبوی پیغام",
  "Suddenly they were two parties conflicting": "اچانک وہ دو متنازع گروہ بن گئے",
  "Division among people": "لوگوں میں تفرقہ",
  "Why do you hasten evil before good?": "تم برائی کو بھلائی سے پہلے کیوں مانگتے ہو؟",
  "People demanding punishment": "لوگوں کا عذاب مانگنا",
  "They said: We consider you and your followers bad omens": "انہوں نے کہا: ہم تمہیں اور تمہارے ساتھیوں کو منحوس سمجھتے ہیں",
  "Blaming prophets for misfortune": "مصائب کا الزام انبیاء پر لگانا",
  "Your omen is with Allah": "تمہاری قسمت اللہ کے پاس ہے",
  "Fate is with Allah, not omens": "تقدیر اللہ کے پاس ہے، نحوست نہیں",

  // thamudDestruction
  "There were in the city nine family heads": "اس شہر میں نو سرداروں کے گروہ تھے",
  "Corrupt leaders plotting": "بدعنوان سرداروں کی سازش",
  "Who corrupted the land and did not reform": "جو زمین میں فساد پھیلاتے اور اصلاح نہیں کرتے تھے",
  "Spreading corruption": "فساد پھیلانا",
  "They swore by Allah to attack him and his family by night": "انہوں نے اللہ کی قسم کھائی کہ رات کو اس پر اور اس کے گھر والوں پر حملہ کریں گے",
  "Assassination plot": "قتل کی سازش",
  "They planned a plan and We planned a plan": "انہوں نے مکر کیا اور ہم نے بھی تدبیر فرمائی",
  "Divine counter-plan": "الٰہی جوابی تدبیر",
  "See how was the outcome of their plan": "دیکھو ان کی سازش کا انجام کیا ہوا",
  "Lesson from their fate": "ان کے انجام سے سبق",
  "We destroyed them and their people all together": "ہم نے انہیں اور ان کی ساری قوم کو تباہ کر دیا",
  "Complete annihilation": "مکمل تباہی",
  "Those are their houses desolate because they wronged": "یہ ہیں ان کے ویران مکانات کیونکہ انہوں نے ظلم کیا",
  "Empty ruins as evidence": "خالی کھنڈرات بطور ثبوت",

  // lutStory
  "And Lut when he said to his people": "اور لوط جب انہوں نے اپنی قوم سے کہا",
  "Lut's mission to his people": "لوط کا اپنی قوم کے لیے مشن",
  "Do you commit immorality while you see?": "کیا تم دیکھتے بوجھتے بے حیائی کرتے ہو؟",
  "Condemning open sin": "کھلے گناہ کی مذمت",
  "Do you approach men lustfully instead of women?": "کیا تم عورتوں کو چھوڑ کر مردوں سے شہوت پوری کرتے ہو؟",
  "Condemning the specific sin": "مخصوص گناہ کی مذمت",
  "Rather you are ignorant people": "بلکہ تم جاہل لوگ ہو",
  "Ignorance of divine law": "الٰہی قانون سے جہالت",
  "Expel the family of Lut from your city": "لوط کے گھر والوں کو اپنی بستی سے نکال دو",
  "Persecution for being pure": "پاکدامنی کی وجہ سے ایذارسانی",
  "They are people who keep themselves pure": "یہ وہ لوگ ہیں جو پاکدامن رہتے ہیں",
  "Purity seen as offense": "پاکدامنی کو جرم سمجھنا",
  "We saved him and his family except his wife": "ہم نے انہیں اور ان کے گھر والوں کو بچایا سوائے ان کی بیوی کے",
  "Exception of disbelieving wife": "کافر بیوی کا استثناء",
  "We destined her among those who remained": "ہم نے اسے پیچھے رہنے والوں میں مقدر کر دیا",
  "Wife's fate with the sinners": "بیوی کا گناہگاروں کے ساتھ انجام",
  "And We rained upon them a rain": "اور ہم نے ان پر ایک بارش برسائی",
  "Rain of destruction": "تباہی کی بارش",
  "Evil was the rain of those warned": "بری تھی ان تنبیہ کیے گئے لوگوں کی بارش",
  "Punishment after warning": "تنبیہ کے بعد سزا",

  // praiseAndGratitude
  "Say: Praise to Allah and peace upon His servants": "کہو: اللہ کا شکر ہے اور اس کے چنے ہوئے بندوں پر سلامتی ہو",
  "Opening formula of gratitude": "شکرگزاری کا ابتدائی فارمولا",
  "Whom He has chosen": "جنہیں اس نے چن لیا",
  "Peace upon the chosen ones": "چنے ہوئوں پر سلامتی",
  "Is Allah better or what they associate?": "کیا اللہ بہتر ہے یا جنہیں یہ شریک ٹھہراتے ہیں؟",
  "Rhetorical comparison": "بلاغی موازنہ",

  // signsInCreation
  "Who created the heavens and earth": "جس نے آسمانوں اور زمین کو پیدا کیا",
  "First creative sign": "تخلیق کی پہلی نشانی",
  "And sent down for you water from the sky": "اور تمہارے لیے آسمان سے پانی برسایا",
  "Rain blessing": "بارش کی نعمت",
  "By which We caused to grow gardens of delight": "جس سے ہم نے خوشنما باغ اگائے",
  "Gardens from rain": "بارش سے باغات",
  "Is there a deity with Allah?": "کیا اللہ کے ساتھ کوئی معبود ہے؟",
  "Refutation of polytheism": "شرک کی تردید",
  "Who made the earth stable": "جس نے زمین کو قرارگاہ بنایا",
  "Earth's stability": "زمین کا استحکام",
  "And made through it rivers": "اور اس میں نہریں بنائیں",
  "Rivers blessing": "نہروں کی نعمت",
  "And placed for it mountains": "اور اس میں پہاڑ رکھے",
  "Mountains as anchors": "پہاڑ بطور لنگر",
  "And placed between the two seas a barrier": "اور دو سمندروں کے درمیان حائل رکھا",
  "Separation of salt and fresh water": "کھارے اور میٹھے پانی کی علیحدگی",

  // divineResponseToSupplication
  "Who responds to the distressed when he calls": "جو مضطر کی پکار سنتا ہے جب وہ پکارے",
  "Allah answers the desperate": "اللہ بے بس کی دعا قبول کرتا ہے",
  "And removes the affliction": "اور تکلیف دور کرتا ہے",
  "Removal of hardship": "مشکل کا ازالہ",
  "And makes you successors on earth": "اور تمہیں زمین میں خلیفہ بناتا ہے",
  "Human stewardship": "انسانی خلافت",
  "Little do you remember": "بہت کم یاد رکھتے ہو",
  "Heedlessness despite blessings": "نعمتوں کے باوجود غفلت",

  // guidanceInDarkness
  "Who guides you in the darkness of land and sea": "جو تمہیں خشکی اور سمندر کی تاریکیوں میں رہنمائی کرتا ہے",
  "Divine guidance for travelers": "مسافروں کے لیے الٰہی رہنمائی",
  "Who sends winds as glad tidings before His mercy": "جو اپنی رحمت سے پہلے ہواؤں کو خوشخبری بنا کر بھیجتا ہے",
  "Winds heralding rain": "بارش کی نوید دینے والی ہوائیں",

  // creationAndResurrection
  "Who originates creation and then repeats it": "جو تخلیق کا آغاز کرتا ہے پھر اسے دہراتا ہے",
  "Initial creation proves resurrection": "پہلی تخلیق دوبارہ اٹھائے جانے کا ثبوت ہے",
  "Who provides you from heaven and earth": "جو تمہیں آسمان اور زمین سے رزق دیتا ہے",
  "Provision from above and below": "اوپر اور نیچے سے رزق",
  "Say: Bring your proof if you are truthful": "کہو: اگر سچے ہو تو اپنی دلیل لاؤ",
  "Challenge to polytheists": "مشرکوں کو چیلنج",

  // unseenKnowledge
  "Say: None in heavens and earth knows the unseen except Allah": "کہو: آسمانوں اور زمین میں غیب کوئی نہیں جانتا سوائے اللہ کے",
  "Exclusive divine knowledge": "اللہ کا خصوصی علم",
  "They do not know when they will be resurrected": "انہیں خبر نہیں کب اٹھائے جائیں گے",
  "Time of resurrection unknown": "قیامت کا وقت نامعلوم",
  "Rather their knowledge fails regarding the Hereafter": "بلکہ آخرت کے بارے میں ان کا علم ختم ہو گیا",
  "Human knowledge limited": "انسانی علم محدود",
  "Rather they are in doubt about it": "بلکہ وہ اس میں شک میں ہیں",
  "Doubt about afterlife": "آخرت کے بارے میں شک",
  "Rather they are blind to it": "بلکہ وہ اس سے اندھے ہیں",
  "Spiritual blindness": "روحانی اندھاپن",

  // disbelieversDoubts
  "When we become dust and our fathers too": "جب ہم اور ہمارے باپ دادا مٹی ہو جائیں",
  "Doubting bodily resurrection": "جسمانی دوبارہ اٹھائے جانے میں شک",
  "Will we be brought out?": "کیا ہم نکالے جائیں گے؟",
  "Skepticism about being raised": "اٹھائے جانے کے بارے میں شکوک",
  "We and our fathers were promised this": "ہم سے اور ہمارے باپ دادا سے یہ وعدہ کیا گیا تھا",
  "Dismissing as old tales": "پرانی کہانیاں کہہ کر رد کرنا",
  "This is nothing but legends of the ancients": "یہ پہلے لوگوں کے افسانوں کے سوا کچھ نہیں",
  "Calling revelation mythology": "وحی کو افسانہ کہنا",

  // travelAndReflect
  "Say: Travel through the earth": "کہو: زمین میں چلو پھرو",
  "Command to learn from history": "تاریخ سے سبق سیکھنے کا حکم",
  "See how was the end of the criminals": "دیکھو مجرموں کا انجام کیسا ہوا",
  "Learn from destroyed nations": "تباہ شدہ اقوام سے سبق سیکھو",
  "Do not grieve over them": "ان پر غم نہ کرو",
  "Consolation to the Prophet": "نبی ﷺ کو تسلی",
  "Do not be distressed by what they plot": "ان کی سازشوں سے تنگ دل نہ ہو",
  "Reassurance against plotting": "سازشوں کے خلاف اطمینان",

  // dayOfJudgment
  "And the Day the Horn is blown": "اور جس دن صور پھونکا جائے گا",
  "Trumpet signaling resurrection": "قیامت کا اعلان کرنے والا صور",
  "All in heavens and earth will be terrified": "آسمانوں اور زمین میں جو بھی ہے گھبرا جائے گا",
  "Universal terror on that Day": "اس دن عالمگیر دہشت",
  "Except whom Allah wills": "سوائے جسے اللہ چاہے",
  "Some exempted from terror": "کچھ دہشت سے مستثنیٰ",
  "All will come to Him humbled": "سب اس کے حضور عاجز ہو کر آئیں گے",
  "Universal humility before Allah": "اللہ کے سامنے عالمگیر عاجزی",
  "You see the mountains thinking them solid": "تم پہاڑوں کو جمے ہوئے سمجھتے ہو",
  "Mountains appear stationary": "پہاڑ ساکت نظر آتے ہیں",
  "While they pass like clouds": "حالانکہ وہ بادلوں کی طرح چل رہے ہیں",
  "Mountains moving like clouds": "پہاڑ بادلوں کی طرح چلتے ہیں",
  "Work of Allah who perfected all things": "یہ اللہ کی صنعت ہے جس نے ہر چیز کو مضبوط بنایا",
  "Divine perfection in all creation": "تمام تخلیق میں الٰہی کمال",

  // goodAndEvil
  "Whoever comes with a good deed will have better": "جو نیکی لائے اسے اس سے بہتر ملے گا",
  "Good deeds multiplied": "نیکیاں کئی گنا بڑھائی جاتی ہیں",
  "And they are safe from terror that Day": "اور وہ اس دن خوف سے محفوظ ہیں",
  "Security for the righteous": "نیکوکاروں کے لیے تحفظ",
  "Whoever comes with evil, their faces cast into Fire": "جو برائی لائے ان کے منہ آگ میں ڈالے جائیں گے",
  "Punishment for evildoers": "بدکاروں کی سزا",
  "Are you recompensed except for what you used to do?": "کیا تمہیں اس کے سوا بدلہ ملے گا جو تم کرتے تھے؟",
  "Fair recompense": "منصفانہ بدلہ",

  // prophetMission
  "I am commanded to worship the Lord of this city": "مجھے حکم ہے کہ اس شہر کے رب کی عبادت کروں",
  "Prophet's primary duty": "نبی ﷺ کا بنیادی فریضہ",
  "Who made it sacred": "جس نے اسے حرمت والا بنایا",
  "Makkah's sanctity": "مکہ کی حرمت",
  "To Him belongs all things": "اسی کا سب کچھ ہے",
  "Allah's absolute ownership": "اللہ کی مطلق ملکیت",
  "And I am commanded to be of those who submit": "اور مجھے حکم ہے کہ مسلمانوں میں سے ہوں",
  "Prophet among the Muslims": "مسلمانوں میں نبی",
  "And to recite the Quran": "اور قرآن کی تلاوت کروں",
  "Recitation as mission": "تلاوت بطور مشن",
  "Whoever is guided is guided for himself": "جو ہدایت پائے وہ اپنے ہی لیے ہدایت پاتا ہے",
  "Personal responsibility for guidance": "ہدایت کے لیے ذاتی ذمہ داری",
  "Whoever strays, say: I am only a warner": "جو بھٹکے، کہو: میں صرف ڈرانے والا ہوں",
  "Prophet's role as warner only": "نبی ﷺ کا صرف تنبیہ کرنے والے کا کردار",

  // closingPraise
  "And say: Praise to Allah": "اور کہو: اللہ کا شکر ہے",
  "Closing with gratitude": "شکرگزاری سے اختتام",
  "He will show you His signs and you will recognize them": "وہ تمہیں اپنی نشانیاں دکھائے گا اور تم انہیں پہچان لو گے",
  "Promise of recognizable signs": "پہچانی جانے والی نشانیوں کا وعدہ",
  "Your Lord is not unaware of what you do": "تمہارا رب تمہارے اعمال سے بے خبر نہیں",
  "Divine awareness of all actions": "تمام اعمال سے الٰہی آگاہی",
};

// Non-concept section translations
const relationshipDescriptions = {
  "Knowledge leads to gratitude": "علم شکرگزاری کی طرف لے جاتا ہے",
  "Understanding languages enabled hearing the ant": "زبانوں کی سمجھ نے چیونٹی کی بات سننا ممکن بنایا",
  "Ant's words inspired prayer for gratitude": "چیونٹی کی بات نے شکرگزاری کی دعا کی تحریک دی",
  "Her throne brought to test her intelligence": "اس کا تخت اس کی ذہانت جانچنے کے لیے لایا گیا",
  "Glass palace led to her submission": "شیشے کے محل نے اسے ایمان لانے پر مائل کیا",
  "Their plotting led to destruction": "ان کی سازش نے تباہی کی طرف لے گیا",
  "Their sin brought destructive rain": "ان کے گناہ نے تباہ کن بارش لائی",
  "Creation signs prove monotheism": "تخلیق کی نشانیاں توحید ثابت کرتی ہیں",
  "Good deeds bring security": "نیک اعمال تحفظ لاتے ہیں",
  "Evil deeds lead to Fire": "بُرے اعمال آگ کی طرف لے جاتے ہیں",
};

const stageDescriptions = {
  "Introduction to Quran, believers vs disbelievers": "قرآن کا تعارف، مومنوں بمقابلہ کافروں",
  "Musa receives prophethood and miracles": "موسیٰ کو نبوت اور معجزات ملتے ہیں",
  "Divine gifts, language of birds, the ant": "الٰہی عطائے، پرندوں کی زبان، چیونٹی",
  "Discovery of Sheba, letter sent": "سبا کی دریافت، خط بھیجا گیا",
  "Consultation, throne, palace, submission": "مشاورت، تخت، محل، اسلام قبولیت",
  "Warning, plotting, destruction": "تنبیہ، سازش، تباہی",
  "Sin, expulsion, punishment": "گناہ، جلاوطنی، سزا",
  "Creation proofs, Allah alone answers": "تخلیق کے ثبوت، صرف اللہ جواب دیتا ہے",
  "Disbelievers' skepticism answered": "کافروں کے شکوک کا جواب",
  "Guidance for Bani Isra'il, signs emerge": "بنی اسرائیل کے لیے ہدایت، نشانیاں ظاہر ہوتی ہیں",
  "Gathering, Horn, recompense": "حشر، صور، بدلہ",
  "Worship, recite, warn, praise": "عبادت، تلاوت، تنبیہ، حمد",
};

const applicationTranslations = {
  "Be grateful for blessings": "نعمتوں کا شکر ادا کرو",
  "Like Sulayman, ask Allah to enable gratitude": "سلیمان کی طرح اللہ سے شکرگزاری کی توفیق مانگو",
  "Consult before decisions": "فیصلوں سے پہلے مشورہ کرو",
  "Like Queen of Sheba, seek advice from trusted advisors": "ملکہ سبا کی طرح قابل اعتماد مشیروں سے مشورہ لو",
  "Value wisdom over wealth": "دولت پر حکمت کو ترجیح دو",
  "Sulayman rejected gifts, valued faith over gold": "سلیمان نے تحائف ٹھکرائے، ایمان کو سونے پر فوقیت دی",
  "Recognize tests in blessings": "نعمتوں میں آزمائش کو پہچانو",
  "Every gift is a test of gratitude or ingratitude": "ہر عطیہ شکر یا ناشکری کی آزمائش ہے",
  "Be accountable": "جوابدہ بنو",
  "Even a bird must justify absence - maintain discipline": "ایک پرندے کو بھی غیر حاضری کی وجہ بتانی ہوتی ہے - نظم برقرار رکھو",
  "Reflect on destroyed nations": "تباہ شدہ اقوام پر غور کرو",
  "Travel and learn from the ruins of past civilizations": "سفر کرو اور پچھلی تہذیبوں کے کھنڈرات سے سبق سیکھو",
  "Trust Allah's knowledge": "اللہ کے علم پر بھروسا رکھو",
  "Only Allah knows the unseen - don't pretend certainty": "صرف اللہ غیب جانتا ہے - یقین کا دکھاوا نہ کرو",
  "Do good for yourself": "اپنے لیے نیکی کرو",
  "Guidance and misguidance affect only the individual": "ہدایت اور گمراہی صرف فرد کو متاثر کرتی ہے",
};

const uniqueInsightTranslation = {
  title: "مختلف مخلوقات کے درمیان رابطے کی سورت",
  insight: "سورۃ النمل منفرد ہے کیونکہ اس میں تین غیر انسانی مخلوقات کی بات شامل ہے: چیونٹی اپنی بستی کو خبردار کرتی ہے (27:18)، ہدہد اطلاعات دیتا ہے (27:22-26)، اور جن خدمت کی پیشکش کرتا ہے (27:39)۔ یہ ظاہر کرتا ہے کہ اللہ کی تمام مخلوق رابطہ کر سکتی ہے، عبادت کر سکتی ہے اور الٰہی مقاصد کی خدمت کر سکتی ہے۔ سورت کی مرکزی شخصیت سلیمان کو یہ رابطہ سمجھنے کا عطیہ ملا - جو ظاہر کرتا ہے کہ حقیقی حکمت میں اللہ کی تمام مخلوقات سے سیکھنے کی عاجزی شامل ہے۔ چیونٹی کا سلیمان کی نیکی کا ادراک ('انہیں خبر بھی نہ ہو' - تسلیم کرنا کہ وہ جان بوجھ کر نقصان نہ پہنچائیں گے) اور اس کی بستی کی فلاح کی فکر قیادت کی خوبیوں کی مثال ہے۔ دوسری طرف ملکہ سبا کا سورج پرستی سے اسلام تک کا سفر دلوں کے حق کے لیے کھلنے پر ممکن تبدیلی کا نمونہ ہے۔ سورت سکھاتی ہے کہ علم اور حکمت فضیلت کا اصل پیمانہ ہے، نہ کہ طاقت یا دولت۔"
};

const historicalContextTranslation = "یہ مکی سورت اس وقت نازل ہوئی جب قریش نبی ﷺ سے معجزات کا مطالبہ کر رہے تھے۔ سورت ایسے انبیاء کے قصے پیش کرکے جواب دیتی ہے جنہوں نے واضح نشانیاں حاصل کیں لیکن پھر بھی رد کیے گئے۔ سلیمان اور سبا کا قصہ عربوں کو یہودی اور عیسائی ذرائع سے معلوم تھا، لیکن قرآن منفرد تفصیلات پیش کرتا ہے جیسے چیونٹی کی بات اور شیشے کا محل۔ ثمود میں 'نو سرداروں کے گروہ' (27:48) کا ذکر قبائلی قیادت کے ڈھانچے کی طرف اشارہ کر سکتا ہے جو عربوں سے مانوس تھے۔ سورت کا اللہ کے خصوصی علمِ غیب (27:65) پر زور قبل از اسلام عرب میں رائج نجومیوں اور فال نکالنے والوں کا رد ہے۔";

const linguisticEffects = {
  "Creates attention and mystery at opening": "آغاز میں توجہ اور اسرار پیدا کرتے ہیں",
  "Surah named after a humble creature - emphasizing all creation matters": "سورت کا نام ایک حقیر مخلوق سے - تمام مخلوقات کی اہمیت پر زور",
  "Two words for joy - ta-bassama (smile) and dahik (laugh) - complete joy": "خوشی کے دو الفاظ - تبسّم (مسکراہٹ) اور ضاحک (ہنسی) - مکمل خوشی",
  "Specific Arabic term for a strong, cunning jinn": "طاقتور، چالاک جن کے لیے مخصوص عربی اصطلاح",
  "Alliteration in 'm' sounds creates flowing description": "'م' کی آوازوں کی تکرار روانی سے بھرپور بیان بناتی ہے",
  "Repeated rhetorical question (5 times) building logical argument": "بار بار بلاغی سوال (5 مرتبہ) منطقی دلیل تعمیر کرتا ہے",
  "Cognate accusative for emphasis on movement": "حرکت پر زور دینے کے لیے مفعول مطلق کا استعمال",
};

const scientificNotes = {
  "Modern science confirms ants communicate through pheromones and sounds": "جدید سائنس تصدیق کرتی ہے کہ چیونٹیاں فیرومونز اور آوازوں سے رابطہ کرتی ہیں",
  "Fresh and salt water meet but don't mix completely - halocline phenomenon": "میٹھا اور کھارا پانی ملتا ہے لیکن مکمل طور پر نہیں ملتا - ہیلوکلائن مظہر",
  "Earth's tectonic plates cause slow mountain movement - apparent stability, actual motion": "زمین کی ٹیکٹونک پلیٹیں پہاڑوں کی سست حرکت کا سبب - ظاہری استحکام، حقیقی حرکت",
  "Water cycle described - rain produces vegetation": "پانی کا چکر بیان کیا گیا - بارش سے نباتات پیدا ہوتی ہیں",
  "Ancient navigation relied on celestial bodies - still used today": "قدیم بحری سفر آسمانی اجرام پر منحصر تھا - آج بھی استعمال ہوتا ہے",
};

// ===== CONVERSION FUNCTIONS =====

// Convert concept meaning/explanation fields: "text" -> { en: "text", ur: "urdu" }
function convertSimpleField(content, englishText, urduText) {
  // Escape special regex chars in the english text
  const escaped = englishText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Match meaning: "text" or explanation: "text"
  const patterns = [
    new RegExp(`(meaning:\\s*)"(${escaped})"`, 'g'),
    new RegExp(`(explanation:\\s*)"(${escaped})"`, 'g'),
  ];

  for (const pattern of patterns) {
    content = content.replace(pattern, (match, prefix) => {
      return `${prefix}{ en: "${englishText}", ur: "${urduText}" }`;
    });
  }
  return content;
}

// Convert non-concept string fields
function convertNonConceptField(content, fieldName, englishText, urduText) {
  const escaped = englishText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(${fieldName}:\\s*)"(${escaped})"`, 'g');
  content = content.replace(pattern, (match, prefix) => {
    return `${prefix}{ en: "${englishText}", ur: "${urduText}" }`;
  });
  return content;
}

// ===== APPLY CONVERSIONS =====

// 1. Convert all concept meaning/explanation fields
for (const [en, ur] of Object.entries(translations)) {
  content = convertSimpleField(content, en, ur);
}

// 2. Convert relationship descriptions
for (const [en, ur] of Object.entries(relationshipDescriptions)) {
  content = convertNonConceptField(content, 'description', en, ur);
}

// 3. Convert thematicFlow stage descriptions
for (const [en, ur] of Object.entries(stageDescriptions)) {
  content = convertNonConceptField(content, 'description', en, ur);
}

// 4. Convert practicalApplication principle and how
for (const [en, ur] of Object.entries(applicationTranslations)) {
  content = convertNonConceptField(content, 'principle', en, ur);
  content = convertNonConceptField(content, 'how', en, ur);
}

// 5. Convert uniqueInsight title and insight
content = convertNonConceptField(content, 'title', 'The Surah of Communication Across Species', uniqueInsightTranslation.title);
// For insight, it's very long so handle carefully
const insightEn = `Surah An-Naml is unique in containing the speech of three non-human entities: the ant warning her colony (27:18), the hoopoe reporting intelligence (27:22-26), and the jinn offering service (27:39). This highlights that all of Allah's creation can communicate, worship, and serve divine purposes. The surah's central figure, Sulayman, was granted the gift of understanding this communication - showing that true wisdom includes humility to learn from all of Allah's creatures. The ant's awareness of Sulayman's righteousness ('while they perceive not' - acknowledging he wouldn't harm intentionally) and her concern for community welfare exemplifies leadership qualities. Meanwhile, the Queen of Sheba's journey from sun worship to Islam models the transformation possible when hearts open to truth. The surah teaches that knowledge ('ilm) and wisdom (hikmah) are the true measures of superiority, not power or wealth.`;
content = content.replace(
  `insight: "${insightEn}"`,
  `insight: { en: "${insightEn}", ur: "${uniqueInsightTranslation.insight}" }`
);

// 6. Convert historicalContext note
const histEn = `This Makki surah was revealed when the Quraysh were challenging the Prophet with demands for miracles. The surah responds by presenting the stories of prophets who received clear signs yet were still rejected. The story of Sulayman and Sheba was known to the Arabs through Jewish and Christian sources, but the Quran presents unique details like the ant's speech and the glass palace. The mention of 'nine family heads' corrupting Thamud (27:48) may reference tribal leadership structures familiar to the Arabs. The surah's emphasis on Allah's exclusive knowledge of the unseen (27:65) counters soothsayers and fortune-tellers prevalent in pre-Islamic Arabia.`;
content = content.replace(
  `note: "${histEn}"`,
  `note: { en: "${histEn}", ur: "${historicalContextTranslation}" }`
);

// 7. Convert linguisticFeatures effects
for (const [en, ur] of Object.entries(linguisticEffects)) {
  content = convertNonConceptField(content, 'effect', en, ur);
}

// 8. Convert scientificReferences notes
for (const [en, ur] of Object.entries(scientificNotes)) {
  content = convertNonConceptField(content, 'note', en, ur);
}

// Write back
fs.writeFileSync(filePath, content, 'utf8');

// Verify remaining plain strings in concept fields
const remaining = (content.match(/meaning:\s*"[^"]/g) || []).length +
                  (content.match(/explanation:\s*"[^"]/g) || []).length;
console.log('Done converting 027.js');
console.log(`Remaining plain concept strings: ${remaining}`);

// Check for any remaining non-bilingual description/principle/how/effect/note/title/insight/significance
const nonConceptRemaining =
  (content.match(/\bdescription:\s*"[^"]/g) || []).length +
  (content.match(/\bprinciple:\s*"[^"]/g) || []).length +
  (content.match(/\bhow:\s*"[^"]/g) || []).length +
  (content.match(/\beffect:\s*"[^"]/g) || []).length +
  (content.match(/\btitle:\s*"[^"]/g) || []).length +
  (content.match(/\binsight:\s*"[^"]/g) || []).length +
  (content.match(/\bsignificance:\s*"[^"]/g) || []).length;
console.log(`Remaining non-concept plain strings: ${nonConceptRemaining}`);
