import fs from 'fs';

const file = 'src/data/treebank/ontology/042.js';
let content = fs.readFileSync(file, 'utf8');

const map = {
  // divineRevelation
  'ur: "Unique double set of disconnected letters in Quran"': 'ur: "قرآن میں حروفِ مقطعات کا منفرد دوہرا مجموعہ"',
  'ur: "Thus He reveals to you"': 'ur: "اسی طرح وہ تمہاری طرف وحی کرتا ہے"',
  'ur: "Continuity of revelation to Muhammad"': 'ur: "محمد ﷺ پر وحی کا تسلسل"',
  'ur: "And to those before you"': 'ur: "اور تم سے پہلے والوں کی طرف"',
  'ur: "Same revelation to previous prophets"': 'ur: "پچھلے انبیاء پر بھی یہی وحی"',
  'ur: "Allah, the Mighty, the Wise"': 'ur: "اللہ غالب، حکمت والا"',
  'ur: "Source of all revelation"': 'ur: "تمام وحی کا سرچشمہ"',
  'ur: "And thus We revealed to you a spirit from Our command"': 'ur: "اور اسی طرح ہم نے اپنے حکم سے تمہاری طرف روح وحی کی"',
  'ur: "Quran as spiritual guidance from divine command"': 'ur: "قرآن الٰہی حکم سے روحانی ہدایت"',
  'ur: "You did not know what the Book was nor faith"': 'ur: "تم نہیں جانتے تھے کہ کتاب کیا ہے اور نہ ایمان"',
  "ur: \"Prophet's state before revelation\"": 'ur: "وحی سے پہلے نبی ﷺ کی حالت"',
  'ur: "We made it a light by which We guide whom We will"': 'ur: "ہم نے اسے نور بنایا جس سے ہم جسے چاہیں ہدایت دیں"',
  'ur: "Quran as guiding light"': 'ur: "قرآن بطور نورِ ہدایت"',

  // modesOfRevelation
  'ur: "It is not for a human that Allah should speak to him"': 'ur: "کسی بشر کی یہ حیثیت نہیں کہ اللہ اس سے کلام کرے"',
  'ur: "Human cannot directly perceive divine speech"': 'ur: "انسان براہ راست الٰہی کلام کا ادراک نہیں کر سکتا"',
  'ur: "Except by inspiration"': 'ur: "مگر وحی کے ذریعے"',
  'ur: "First mode: direct inspiration into the heart"': 'ur: "پہلا طریقہ: دل میں براہ راست القا"',
  'ur: "Or from behind a veil"': 'ur: "یا پردے کے پیچھے سے"',
  'ur: "Second mode: Allah speaks but is unseen (like to Musa)"': 'ur: "دوسرا طریقہ: اللہ بولتا ہے مگر نظر نہیں آتا (جیسے موسیٰ سے)"',
  'ur: "Or sends a messenger to reveal by His permission"': 'ur: "یا کوئی فرشتہ بھیجے جو اس کے اذن سے وحی کرے"',
  'ur: "Third mode: through angel Jibreel"': 'ur: "تیسرا طریقہ: فرشتہ جبرائیل کے ذریعے"',
  'ur: "Indeed He is Most High, Most Wise"': 'ur: "بے شک وہ بلند مرتبہ حکمت والا ہے"',
  'ur: "Divine wisdom in communication methods"': 'ur: "ابلاغ کے طریقوں میں الٰہی حکمت"',

  // unityOfReligion
  'ur: "He prescribed for you of religion what He enjoined upon Nuh"': 'ur: "اس نے تمہارے لیے دین میں وہی مقرر کیا جو نوح کو حکم دیا تھا"',
  'ur: "Same religion from earliest prophet"': 'ur: "ابتدائی نبی سے ایک ہی دین"',
  'ur: "And what We revealed to you"': 'ur: "اور جو ہم نے تمہاری طرف وحی کیا"',
  'ur: "Muhammad receives the same message"': 'ur: "محمد ﷺ کو بھی وہی پیغام ملا"',
  'ur: "And what We enjoined upon Ibrahim, Musa, and Isa"': 'ur: "اور جو ہم نے ابراہیم، موسیٰ اور عیسیٰ کو حکم دیا"',
  'ur: "Major prophets received same core message"': 'ur: "بڑے انبیاء کو ایک ہی بنیادی پیغام ملا"',
  'ur: "Establish the religion and do not be divided in it"': 'ur: "دین قائم کرو اور اس میں تفرقہ نہ ڈالو"',
  'ur: "Core command: unity in worship"': 'ur: "بنیادی حکم: عبادت میں اتحاد"',
  'ur: "Difficult for polytheists is what you call them to"': 'ur: "مشرکوں پر بھاری ہے جس چیز کی طرف تم بلاتے ہو"',
  'ur: "Pure monotheism is hard for idolaters"': 'ur: "خالص توحید بت پرستوں کے لیے مشکل ہے"',
  'ur: "Allah chooses for Himself whom He wills"': 'ur: "اللہ جسے چاہے اپنے لیے چن لیتا ہے"',
  'ur: "Divine selection of believers"': 'ur: "مومنین کا الٰہی انتخاب"',

  // divisionInReligion
  'ur: "They divided not except after knowledge had come to them"': 'ur: "انہوں نے تفرقہ نہیں ڈالا مگر علم آ جانے کے بعد"',
  'ur: "Division came after clear guidance, not from ignorance"': 'ur: "تفرقہ واضح ہدایت کے بعد ہوا، جہالت سے نہیں"',
  'ur: "Out of jealous rivalry between them"': 'ur: "آپس کی حسد اور زیادتی سے"',
  'ur: "Cause of division: envy and transgression"': 'ur: "تفرقے کا سبب: حسد اور سرکشی"',
  'ur: "Had it not been for a word from your Lord"': 'ur: "اگر تمہارے رب کی طرف سے ایک بات پہلے طے نہ ہوتی"',
  'ur: "Divine decree delays judgment"': 'ur: "الٰہی فیصلے نے عذاب مؤخر کیا"',
  'ur: "Until an appointed term"': 'ur: "ایک مقررہ مدت تک"',
  'ur: "Respite until Day of Judgment"': 'ur: "یومِ قیامت تک مہلت"',
  'ur: "It would have been judged between them"': 'ur: "ان کے درمیان فیصلہ ہو چکا ہوتا"',
  'ur: "Judgment would already have been issued"': 'ur: "فیصلہ پہلے ہی صادر ہو چکا ہوتا"',

  // consultationPrinciple
  'ur: "Those who respond to their Lord"': 'ur: "جو لوگ اپنے رب کی بات مانتے ہیں"',
  'ur: "First quality: responding to Allah"': 'ur: "پہلی صفت: اللہ کی اطاعت"',
  'ur: "And establish prayer"': 'ur: "اور نماز قائم کرتے ہیں"',
  'ur: "Second quality: maintaining prayer"': 'ur: "دوسری صفت: نماز کی پابندی"',
  'ur: "And their affair is consultation among them"': 'ur: "اور ان کے معاملات آپس کی مشاورت سے طے ہوتے ہیں"',
  'ur: "Third quality: mutual consultation - basis of Islamic governance"': 'ur: "تیسری صفت: باہمی مشاورت - اسلامی نظامِ حکومت کی بنیاد"',
  'ur: "And from what We provided them, they spend"': 'ur: "اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں"',
  'ur: "Fourth quality: charitable spending"': 'ur: "چوتھی صفت: راہِ خدا میں خرچ"',

  // forgivenessAndPardon
  'ur: "Those who avoid major sins and immoralities"': 'ur: "جو لوگ بڑے گناہوں اور بے حیائیوں سے بچتے ہیں"',
  'ur: "Avoiding grave sins"': 'ur: "بڑے گناہوں سے اجتناب"',
  'ur: "And when they are angry, they forgive"': 'ur: "اور جب غصہ آتا ہے تو معاف کر دیتے ہیں"',
  'ur: "Forgiving even in anger - sign of character"': 'ur: "غصے میں بھی معاف کرنا - اعلیٰ کردار کی نشانی"',
  'ur: "And whoever is patient and forgives"': 'ur: "اور جس نے صبر کیا اور معاف کیا"',
  'ur: "Patience combined with forgiveness"': 'ur: "صبر اور معافی کا امتزاج"',
  'ur: "Indeed that is of the matters of determination"': 'ur: "بے شک یہ بڑی ہمت کے کاموں میں سے ہے"',
  'ur: "Forgiveness requires strength, not weakness"': 'ur: "معافی طاقت چاہتی ہے، کمزوری نہیں"',
  'ur: "And He is the One who accepts repentance from His servants"': 'ur: "اور وہی ہے جو اپنے بندوں سے توبہ قبول کرتا ہے"',
  "ur: \"Allah's acceptance of repentance\"": 'ur: "اللہ کا توبہ قبول کرنا"',
  'ur: "And pardons misdeeds"': 'ur: "اور گناہ معاف کرتا ہے"',
  'ur: "Divine pardon for sins"': 'ur: "گناہوں کی الٰہی معافی"',
  'ur: "And knows what you do"': 'ur: "اور جانتا ہے جو تم کرتے ہو"',
  'ur: "Complete divine knowledge"': 'ur: "مکمل الٰہی علم"',

  // standingAgainstOppression
  'ur: "Those who when tyranny strikes them, they defend themselves"': 'ur: "جو لوگ جب ان پر ظلم ہو تو اپنا دفاع کرتے ہیں"',
  'ur: "Right to defend against oppression"': 'ur: "ظلم کے خلاف دفاع کا حق"',
  'ur: "The recompense of evil is an evil like it"': 'ur: "برائی کا بدلہ اسی جیسی برائی ہے"',
  'ur: "Proportional retaliation permitted"': 'ur: "متناسب بدلہ جائز ہے"',
  'ur: "But whoever pardons and makes reconciliation, his reward is with Allah"': 'ur: "لیکن جو معاف کرے اور اصلاح کرے اس کا اجر اللہ کے ذمے ہے"',
  'ur: "Forgiveness is better and rewarded"': 'ur: "معافی بہتر اور باعثِ اجر ہے"',
  'ur: "Indeed He does not love the wrongdoers"': 'ur: "بے شک وہ ظالموں کو پسند نہیں کرتا"',
  "ur: \"Allah's dislike of oppressors\"": 'ur: "اللہ کی ظالموں سے ناپسندیدگی"',
  'ur: "Whoever defends himself after being wronged, there is no blame on them"': 'ur: "جو ظلم کے بعد اپنا دفاع کرے ان پر کوئی الزام نہیں"',
  'ur: "No sin in self-defense"': 'ur: "دفاعِ نفس میں کوئی گناہ نہیں"',
  'ur: "The blame is only upon those who wrong people"': 'ur: "الزام صرف ان پر ہے جو لوگوں پر ظلم کرتے ہیں"',
  'ur: "Blame lies with oppressors"': 'ur: "الزام ظالموں پر ہے"',
  'ur: "And transgress on earth without right"': 'ur: "اور زمین میں ناحق زیادتی کرتے ہیں"',
  'ur: "Unjust transgression condemned"': 'ur: "ناحق زیادتی مذموم ہے"',

  // cosmicSigns
  'ur: "To Him belong the keys of heavens and earth"': 'ur: "آسمانوں اور زمین کی کنجیاں اسی کی ہیں"',
  'ur: "Divine ownership of all creation"': 'ur: "تمام مخلوقات کی الٰہی ملکیت"',
  'ur: "He extends provision for whom He wills and restricts"': 'ur: "جسے چاہے رزق کشادہ کرے اور تنگ کرے"',
  'ur: "Divine control over provision"': 'ur: "رزق پر الٰہی اختیار"',
  'ur: "And among His signs is the creation of heavens and earth"': 'ur: "اور اس کی نشانیوں میں آسمانوں اور زمین کی تخلیق ہے"',
  'ur: "Cosmic creation as divine sign"': 'ur: "کائناتی تخلیق بطور الٰہی نشانی"',
  'ur: "And what He has dispersed in them of creatures"': 'ur: "اور جو اس نے ان میں جانداروں کو پھیلایا"',
  'ur: "Life forms as signs of divine power"': 'ur: "جاندار الٰہی قدرت کی نشانیاں ہیں"',
  'ur: "And He is able to gather them when He wills"': 'ur: "اور جب چاہے انہیں جمع کرنے پر قادر ہے"',
  'ur: "Power to resurrect all creatures"': 'ur: "تمام مخلوقات کو دوبارہ اٹھانے کی قدرت"',

  // maritimeSigns
  'ur: "And among His signs are ships sailing in the sea like mountains"': 'ur: "اور اس کی نشانیوں میں سمندر میں پہاڑوں جیسے چلنے والے جہاز ہیں"',
  "ur: \"Ships as divine signs of Allah's power\"": 'ur: "جہاز اللہ کی قدرت کی نشانیاں ہیں"',
  'ur: "If He wills, He can still the wind"': 'ur: "اگر چاہے تو ہوا کو روک دے"',
  'ur: "Control over wind that moves ships"': 'ur: "جہازوں کو چلانے والی ہوا پر اختیار"',
  'ur: "And they would remain motionless on its surface"': 'ur: "اور وہ سمندر کی سطح پر ساکت رہ جائیں"',
  'ur: "Ships dependent on divine will"': 'ur: "جہاز الٰہی مرضی پر منحصر"',
  'ur: "Indeed in that are signs for every patient and grateful one"': 'ur: "بے شک اس میں ہر صبر کرنے والے شکر گزار کے لیے نشانیاں ہیں"',
  'ur: "Signs for those who are patient and thankful"': 'ur: "صبر و شکر کرنے والوں کے لیے نشانیاں"',
  'ur: "Or He could destroy them for what they earned"': 'ur: "یا ان کے اعمال کی وجہ سے انہیں غرق کر دے"',
  'ur: "Ships can be wrecked as punishment"': 'ur: "جہاز بطور سزا تباہ ہو سکتے ہیں"',
  'ur: "And He pardons much"': 'ur: "اور وہ بہت معاف کرتا ہے"',
  'ur: "Divine pardon spares many"': 'ur: "الٰہی عفو بہت سوں کو بچاتی ہے"',

  // divineSovereignty
  'ur: "To Him belongs the dominion of heavens and earth"': 'ur: "آسمانوں اور زمین کی بادشاہی اسی کی ہے"',
  'ur: "Absolute divine sovereignty"': 'ur: "مطلق الٰہی حاکمیت"',
  'ur: "He creates what He wills"': 'ur: "وہ جو چاہے پیدا کرتا ہے"',
  'ur: "Unlimited creative power"': 'ur: "لامحدود تخلیقی قدرت"',
  'ur: "He gives to whom He wills females"': 'ur: "جسے چاہے بیٹیاں عطا کرے"',
  'ur: "Gender is divine decree"': 'ur: "جنس الٰہی فیصلہ ہے"',
  'ur: "And gives to whom He wills males"': 'ur: "اور جسے چاہے بیٹے عطا کرے"',
  'ur: "Children are divine gifts"': 'ur: "اولاد الٰہی تحفہ ہے"',
  'ur: "Or He grants them both males and females"': 'ur: "یا انہیں بیٹے اور بیٹیاں دونوں عطا کرے"',
  'ur: "Variety in family composition"': 'ur: "خاندانی ساخت میں تنوع"',
  'ur: "And makes whom He wills barren"': 'ur: "اور جسے چاہے بے اولاد رکھے"',
  'ur: "Fertility is divine decision"': 'ur: "اولاد کا ہونا الٰہی فیصلہ ہے"',
  'ur: "Indeed He is Knowing, Competent"': 'ur: "بے شک وہ جاننے والا قادر ہے"',
  'ur: "Divine knowledge and power combined"': 'ur: "الٰہی علم اور قدرت کا اجتماع"',

  // trialsAndRecompense
  'ur: "Whatever misfortune befalls you is for what your hands have earned"': 'ur: "جو مصیبت تمہیں پہنچے وہ تمہارے ہاتھوں کی کمائی ہے"',
  "ur: \"Calamities result from one's actions\"": 'ur: "مصائب اپنے اعمال کا نتیجہ ہیں"',
  'ur: "Allah overlooks many sins"': 'ur: "اللہ بہت سے گناہ نظرانداز کرتا ہے"',
  'ur: "You cannot escape on earth"': 'ur: "تم زمین میں بھاگ نہیں سکتے"',
  'ur: "No escaping divine decree"': 'ur: "الٰہی فیصلے سے فرار ناممکن"',
  'ur: "And you have besides Allah no protector and no helper"': 'ur: "اور اللہ کے سوا تمہارا کوئی دوست اور مددگار نہیں"',
  'ur: "Only Allah provides real protection"': 'ur: "صرف اللہ حقیقی حفاظت فراہم کرتا ہے"',

  // propheticMission
  'ur: "So to that invite, and be steadfast as you are commanded"': 'ur: "پس اسی کی طرف دعوت دو اور ثابت قدم رہو جیسا حکم ہوا"',
  'ur: "Command to invite and remain firm"': 'ur: "دعوت دینے اور ثابت قدم رہنے کا حکم"',
  'ur: "And do not follow their desires"': 'ur: "اور ان کی خواہشات کی پیروی نہ کرو"',
  "ur: \"Not swayed by people's wishes\"": 'ur: "لوگوں کی خواہشات سے متاثر نہ ہونا"',
  'ur: "And say: I believe in whatever book Allah has sent down"': 'ur: "اور کہو: میں ہر اس کتاب پر ایمان لایا جو اللہ نے اتاری"',
  'ur: "Belief in all revealed scriptures"': 'ur: "تمام نازل شدہ کتابوں پر ایمان"',
  'ur: "And I have been commanded to be just among you"': 'ur: "اور مجھے حکم ہوا ہے کہ تمہارے درمیان انصاف کروں"',
  'ur: "Justice as prophetic principle"': 'ur: "انصاف بطور نبوی اصول"',
  'ur: "Allah is our Lord and your Lord"': 'ur: "اللہ ہمارا اور تمہارا رب ہے"',
  'ur: "Shared Lord between all people"': 'ur: "تمام لوگوں کا مشترک رب"',
  'ur: "For us are our deeds, and for you your deeds"': 'ur: "ہمارے لیے ہمارے اعمال اور تمہارے لیے تمہارے اعمال"',
  'ur: "Individual accountability"': 'ur: "انفرادی جوابدہی"',
  'ur: "There is no argument between us and you"': 'ur: "ہمارے اور تمہارے درمیان کوئی جھگڑا نہیں"',
  'ur: "No need for debate - truth is clear"': 'ur: "بحث کی ضرورت نہیں - حق واضح ہے"',

  // dayOfJudgment
  'ur: "A Day which there is no averting from Allah"': 'ur: "ایک دن جو اللہ کی طرف سے ٹلنے والا نہیں"',
  'ur: "Judgment Day is unavoidable"': 'ur: "یومِ قیامت ناگزیر ہے"',
  'ur: "No refuge for you that Day"': 'ur: "اس دن تمہارے لیے کوئی پناہ نہیں"',
  'ur: "No place to hide on Judgment Day"': 'ur: "قیامت کے دن چھپنے کی کوئی جگہ نہیں"',
  'ur: "Nor for you any denial"': 'ur: "اور نہ تمہارے لیے کوئی انکار"',
  "ur: \"No denying one's deeds\"": 'ur: "اپنے اعمال کا انکار ناممکن"',
  'ur: "You will see the wrongdoers fearful of what they earned"': 'ur: "تم ظالموں کو دیکھو گے کہ اپنے اعمال سے خوفزدہ ہوں گے"',
  'ur: "Terror of wrongdoers facing their deeds"': 'ur: "اپنے اعمال کا سامنا کرتے ظالموں کی دہشت"',
  'ur: "And it will befall them"': 'ur: "اور یہ ان پر واقع ہو کر رہے گا"',
  'ur: "Punishment will definitely reach them"': 'ur: "سزا یقیناً ان تک پہنچے گی"',
  'ur: "And those who believed and did righteous deeds will be in gardens of Paradise"': 'ur: "اور جو ایمان لائے اور نیک عمل کیے وہ جنت کے باغوں میں ہوں گے"',
  'ur: "Believers in gardens of bliss"': 'ur: "مومنین نعمت کے باغوں میں"',
  'ur: "They will have whatever they wish with their Lord"': 'ur: "ان کے لیے ان کے رب کے پاس جو چاہیں ملے گا"',
  'ur: "Unlimited wishes fulfilled in Paradise"': 'ur: "جنت میں لامحدود خواہشات پوری"',

  // guidanceAndMisguidance
  'ur: "Whoever Allah sends astray, for him there is no protector after Him"': 'ur: "جسے اللہ گمراہ کرے اس کے بعد اس کا کوئی کارساز نہیں"',
  'ur: "No help for those Allah allows to stray"': 'ur: "جنہیں اللہ گمراہ رہنے دے ان کی کوئی مدد نہیں"',
  'ur: "And you will see the wrongdoers when they see the punishment"': 'ur: "اور تم ظالموں کو دیکھو گے جب وہ عذاب دیکھیں گے"',
  'ur: "Wrongdoers will see punishment"': 'ur: "ظالم عذاب دیکھیں گے"',
  'ur: "Saying: Is there any way to return?"': 'ur: "کہیں گے: کیا واپسی کا کوئی راستہ ہے؟"',
  'ur: "Desperate plea to go back"': 'ur: "واپس جانے کی بے بس التجا"',
  'ur: "And indeed you guide to a straight path"': 'ur: "اور بے شک تم سیدھے راستے کی رہنمائی کرتے ہو"',
  'ur: "Prophet guides to the straight way"': 'ur: "نبی ﷺ صراطِ مستقیم کی رہنمائی کرتے ہیں"',
  'ur: "The path of Allah"': 'ur: "اللہ کا راستہ"',
  "ur: \"Allah's path - the only true path\"": 'ur: "اللہ کا راستہ - واحد سچا راستہ"',
  'ur: "To whom belongs whatever is in heavens and earth"': 'ur: "جس کا ہے جو کچھ آسمانوں اور زمین میں ہے"',
  'ur: "Allah owns all creation"': 'ur: "اللہ تمام مخلوقات کا مالک ہے"',
  'ur: "Unquestionably, to Allah do all matters return"': 'ur: "سنو! تمام معاملات اللہ ہی کی طرف لوٹتے ہیں"',
  'ur: "Final return to Allah - closing verse"': 'ur: "اللہ کی طرف آخری بازگشت - اختتامی آیت"',

  // divineNames
  'ur: "The Most High, the Greatest"': 'ur: "بلند ترین، عظیم ترین"',
  'ur: "Supreme elevation and grandeur"': 'ur: "اعلیٰ بلندی اور عظمت"',
  'ur: "The Hearing, the Seeing"': 'ur: "سننے والا، دیکھنے والا"',
  'ur: "All-perceiving awareness"': 'ur: "ہمہ گیر سماعت و بصارت"',
  'ur: "The Subtle, the Aware"': 'ur: "باریک بین، خبردار"',
  'ur: "Gentle awareness of all details"': 'ur: "ہر تفصیل سے لطیف آگاہی"',
  'ur: "The Powerful, the Mighty"': 'ur: "طاقتور، غالب"',
  'ur: "Strength and dominance"': 'ur: "طاقت اور غلبہ"',
  'ur: "The Protector"': 'ur: "حامی و ناصر"',
  'ur: "Allah as guardian and supporter"': 'ur: "اللہ بطور محافظ اور مددگار"',
  'ur: "The One who gives life to the dead"': 'ur: "مردوں کو زندہ کرنے والا"',
  'ur: "Power of resurrection"': 'ur: "دوبارہ زندہ کرنے کی قدرت"',

  // beliversCharacteristics
  'ur: "They respond to their Lord"': 'ur: "وہ اپنے رب کی بات مانتے ہیں"',
  'ur: "Responsive obedience to Allah"': 'ur: "اللہ کی فرمانبرداری"',
  'ur: "Maintaining regular prayer"': 'ur: "باقاعدہ نماز کی پابندی"',
  'ur: "Their affair is consultation among them"': 'ur: "ان کے معاملات مشاورت سے ہوتے ہیں"',
  'ur: "Mutual consultation in decisions"': 'ur: "فیصلوں میں باہمی مشاورت"',
  'ur: "Generous spending from provisions"': 'ur: "رزق میں سے فراخدلی سے خرچ"',
  'ur: "They avoid major sins"': 'ur: "وہ بڑے گناہوں سے بچتے ہیں"',
  'ur: "Staying away from grave sins"': 'ur: "بڑے گناہوں سے دور رہنا"',
  'ur: "When angry, they forgive"': 'ur: "جب غصہ آئے تو معاف کر دیں"',
  'ur: "Forgiving even in anger"': 'ur: "غصے میں بھی معاف کرنا"',
  'ur: "They defend themselves"': 'ur: "وہ اپنا دفاع کرتے ہیں"',
  'ur: "Standing up against oppression"': 'ur: "ظلم کے خلاف کھڑے ہونا"',

  // transcendenceOfAllah
  'ur: "Creator of heavens and earth"': 'ur: "آسمانوں اور زمین کا پیدا کرنے والا"',
  'ur: "Originator of the universe"': 'ur: "کائنات کو وجود میں لانے والا"',
  'ur: "Made for you from yourselves mates"': 'ur: "تمہارے لیے تم ہی میں سے جوڑے بنائے"',
  'ur: "Created human pairs"': 'ur: "انسانی جوڑے تخلیق کیے"',
  'ur: "And of livestock mates"': 'ur: "اور مویشیوں کے بھی جوڑے"',
  'ur: "Animal pairs for reproduction"': 'ur: "افزائشِ نسل کے لیے حیوانی جوڑے"',
  'ur: "He multiplies you thereby"': 'ur: "اس طریقے سے تمہیں پھیلاتا ہے"',
  'ur: "Reproduction system established by Allah"': 'ur: "اللہ کا قائم کردہ نظامِ تولید"',
  'ur: "There is nothing like Him"': 'ur: "اس کے مثل کوئی چیز نہیں"',
  'ur: "Absolute uniqueness of Allah - no comparison"': 'ur: "اللہ کی مطلق یکتائی - کوئی مثال نہیں"',
  'ur: "And He is the Hearing, the Seeing"': 'ur: "اور وہ سننے والا دیکھنے والا ہے"',
  'ur: "Perfect perception despite transcendence"': 'ur: "تنزیہ کے باوجود کامل ادراک"',

  // thematicFlow
  'ur: "Ha-Mim \'Ayn-Sin-Qaf, revelation from the Mighty, Wise"': 'ur: "حم عسق، غالب حکمت والے کی طرف سے وحی"',
  'ur: "Warning of gathering Day, Allah as sole Protector"': 'ur: "جمع ہونے کے دن کی تنبیہ، اللہ واحد محافظ"',
  'ur: "Nothing like Allah, keys of heavens and earth"': 'ur: "اللہ کی کوئی مثل نہیں، آسمانوں اور زمین کی کنجیاں"',
  'ur: "Same religion to all prophets, warning against division"': 'ur: "تمام انبیاء کو ایک ہی دین، تفرقے سے خبردار"',
  'ur: "Call to faith, justice, accountability"': 'ur: "ایمان، عدل، جوابدہی کی دعوت"',
  'ur: "Choosing between worldly and eternal reward"': 'ur: "دنیاوی اور ابدی اجر کے درمیان انتخاب"',
  "ur: \"Wrongdoers' fate vs believers' paradise, acceptance of repentance\"": 'ur: "ظالموں کا انجام بمقابلہ مومنین کی جنت، توبہ کی قبولیت"',
  'ur: "Measured provision, rain after despair"': 'ur: "ناپ تول سے رزق، مایوسی کے بعد بارش"',
  "ur: \"Creatures, ships, calamities from one's deeds\"": 'ur: "مخلوقات، جہاز، اعمال کی وجہ سے مصائب"',
  'ur: "Forgiveness, consultation, patience, defense against oppression"': 'ur: "معافی، مشاورت، صبر، ظلم کے خلاف دفاع"',
  'ur: "No guidance for whom Allah leaves astray, seeking return"': 'ur: "جسے اللہ چھوڑ دے اس کے لیے ہدایت نہیں، واپسی کی تلاش"',
  'ur: "Allah gives males, females, both, or none"': 'ur: "اللہ بیٹے دیتا ہے، بیٹیاں، دونوں یا کوئی نہیں"',
  'ur: "Three ways Allah communicates, guidance to straight path"': 'ur: "اللہ کے کلام کے تین طریقے، صراطِ مستقیم کی ہدایت"',

  // uniqueInsight
  'ur: "The Surah of Consultation and Unity"': 'ur: "مشاورت اور اتحاد کی سورت"',

  // historicalContext
  "ur: \"This Makkan surah was revealed during a period when the Prophet faced opposition and needed to clarify the nature of his mission. The emphasis on the unity of religion countered claims that Islam was a new or foreign religion - it was the same message given to all prophets. The principle of shura (consultation) established an Islamic approach to governance distinct from both the tribal absolutism of Arabia and the imperial systems of Rome and Persia. The detailed explanation of revelation modes (42:51) responded to questions about how the Prophet received divine communication.\"": 'ur: "یہ مکی سورت اس دور میں نازل ہوئی جب نبی ﷺ کو مخالفت کا سامنا تھا اور مشن کی نوعیت واضح کرنے کی ضرورت تھی۔ دین کی وحدت پر زور نے ان دعوؤں کا رد کیا کہ اسلام نیا یا اجنبی مذہب ہے - یہ وہی پیغام تھا جو تمام انبیاء کو دیا گیا۔ شوریٰ کے اصول نے اسلامی نظامِ حکومت قائم کیا جو عرب کی قبائلی مطلق العنانیت اور روم و فارس کے سلطنتی نظاموں سے مختلف تھا۔ وحی کے طریقوں کی تفصیلی وضاحت (42:51) نے سوالات کا جواب دیا کہ نبی ﷺ کو الٰہی پیغام کیسے ملتا تھا۔"',

  // linguisticFeatures
  'ur: "Double Huruf Muqatta\'at"': 'ur: "دوہرے حروفِ مقطعات"',
  'ur: "Only surah with two sets of disconnected letters"': 'ur: "واحد سورت جس میں حروفِ مقطعات کے دو مجموعے ہیں"',
  'ur: "Consultation"': 'ur: "مشاورت"',
  'ur: "Noun form emphasizing the principle itself"': 'ur: "اسمی صورت جو خود اصول پر زور دیتی ہے"',
  'ur: "Nothing like Him"': 'ur: "اس جیسا کچھ نہیں"',
  'ur: "Double negation (laysa + ka-mithlihi) for emphasis on uniqueness"': 'ur: "یکتائی پر زور کے لیے دوہری نفی (لیس + کمثلہ)"',
  'ur: "Matters of determination"': 'ur: "پختہ عزم کے معاملات"',
  "ur: \"Forgiveness requires 'azm - firm resolve\"": 'ur: "معافی کو عزم یعنی پختہ ارادے کی ضرورت ہے"',
  'ur: "Keys"': 'ur: "کنجیاں"',
  'ur: "Plural of miqlaad - keys to treasures"': 'ur: "مقلاد کی جمع - خزانوں کی کنجیاں"',
  'ur: "Gardens of Paradise"': 'ur: "جنت کے باغات"',
  'ur: "Double plural - gardens within gardens"': 'ur: "دوہری جمع - باغوں کے اندر باغات"',

  // shuraVerse
  'ur: "And those who respond to their Lord, establish prayer, and whose affair is consultation among them, and from what We have provided them, they spend"': 'ur: "اور جو لوگ اپنے رب کی بات مانتے ہیں، نماز قائم کرتے ہیں، ان کے معاملات مشاورت سے ہوتے ہیں، اور جو ہم نے انہیں دیا اس میں سے خرچ کرتے ہیں"',
  'ur: "This verse establishes Shura (consultation) as a fundamental Islamic principle alongside prayer and charity. It places collective decision-making at the heart of the Muslim community\'s identity."': 'ur: "یہ آیت شوریٰ (مشاورت) کو نماز اور زکوٰۃ کے ساتھ بنیادی اسلامی اصول قرار دیتی ہے۔ یہ اجتماعی فیصلہ سازی کو مسلم معاشرے کی شناخت کا مرکز بناتی ہے۔"',

  // transcendenceVerse
  'ur: "Creator of the heavens and earth. He made for you from yourselves mates, and among livestock, mates. He multiplies you thereby. There is nothing like Him, and He is the Hearing, the Seeing."': 'ur: "آسمانوں اور زمین کا پیدا کرنے والا۔ اس نے تمہارے لیے تم ہی میں سے جوڑے بنائے اور مویشیوں کے بھی جوڑے۔ اس طریقے سے تمہیں پھیلاتا ہے۔ اس کے مثل کوئی چیز نہیں اور وہ سننے والا دیکھنے والا ہے۔"',
  "ur: \"Contains the Quran's clearest statement of divine transcendence (laysa ka-mithlihi shay') while affirming Allah's personal attributes - the balance of tanzih (transcendence) and tashbih (similarity) in Islamic theology.\"": 'ur: "قرآن کا تنزیہ الٰہی (لیس کمثلہ شئ) کا واضح ترین بیان ہے جبکہ اللہ کی ذاتی صفات کی تصدیق بھی کرتی ہے - اسلامی عقیدے میں تنزیہ اور تشبیہ کا توازن۔"',

  // hamimConnection
  'ur: "Part of the Ha-Mim series (Surahs 40-46)"': 'ur: "حوامیم سلسلے کا حصہ (سورتیں 40-46)"',
  "ur: \"Ash-Shura is unique in the series for having an additional set of letters ('Ayn-Sin-Qaf) after Ha-Mim\"": 'ur: "الشوریٰ اس سلسلے میں منفرد ہے کیونکہ حم کے بعد اضافی حروف (عسق) ہیں"',
};

// Also handle the long uniqueInsight ur field
const longEnglishInsight042 = `ur: "Surah Ash-Shura is unique in several ways. First, it is the only surah with two sets of disconnected letters (Ha-Mim and 'Ayn-Sin-Qaf), emphasizing its special place in the Ha-Mim series. Second, it gives the surah its name from the principle of 'shura' (consultation) in verse 38 - one of the foundations of Islamic governance and community decision-making. Third, it presents the most comprehensive statement on the unity of religion: the same core message was given to Nuh, Ibrahim, Musa, Isa, and Muhammad. Division came not from different messages but from 'jealousy between themselves' after knowledge came. Fourth, it balances the right to self-defense with the superiority of forgiveness - retaliation is permitted but 'whoever pardons and makes reconciliation, his reward is with Allah.' Fifth, the famous verse 'There is nothing like Him' (42:11) is the clearest statement of divine transcendence in the Quran, yet immediately followed by 'He is the Hearing, the Seeing' - showing Allah is both utterly unique and personally aware. The surah closes with the three modes of divine communication, explaining how prophets received revelation, and ends with the powerful statement: 'To Allah return all matters.'"`;
const longUrduInsight042 = `ur: "سورۃ الشوریٰ کئی طرح سے منفرد ہے۔ اول، یہ واحد سورت ہے جس میں حروفِ مقطعات کے دو مجموعے ہیں (حم اور عسق)۔ دوم، سورت کا نام آیت 38 میں شوریٰ (مشاورت) کے اصول سے ہے جو اسلامی نظامِ حکومت کی بنیاد ہے۔ سوم، یہ دین کی وحدت کا جامع ترین بیان پیش کرتی ہے: نوح، ابراہیم، موسیٰ، عیسیٰ اور محمد ﷺ سب کو ایک ہی پیغام دیا گیا۔ تفرقہ مختلف پیغامات سے نہیں بلکہ علم آنے کے بعد آپس کی حسد سے ہوا۔ چہارم، دفاعِ نفس کے حق اور معافی کی فوقیت میں توازن ہے - بدلہ جائز ہے مگر جو معاف کرے اس کا اجر اللہ پر ہے۔ پنجم، مشہور آیت 'اس جیسی کوئی چیز نہیں' (42:11) تنزیہ کا واضح ترین بیان ہے مگر فوراً بعد 'وہ سننے والا دیکھنے والا ہے' - اللہ یکتا بھی ہے اور باخبر بھی۔ سورت وحی کے تین طریقوں پر ختم ہوتی ہے اور 'تمام معاملات اللہ ہی کی طرف لوٹتے ہیں' پر اختتام پذیر ہوتی ہے۔"`;

map[longEnglishInsight042] = longUrduInsight042;

let replaced = 0;
for (const [from, to] of Object.entries(map)) {
  if (content.includes(from)) {
    content = content.replace(from, to);
    replaced++;
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log(`042.js: Replaced ${replaced} ur: fields`);
