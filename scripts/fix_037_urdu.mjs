// Script to fix English text in ur: fields for Surah 037 ontology
import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/data/treebank/ontology/037.js';
let content = readFileSync(filePath, 'utf8');

// Map of English text -> Urdu translation for meaning fields
const meaningTranslations = {
  // creationArgument
  'Ask them: Are they more difficult to create': 'ان سے پوچھو: کیا وہ زیادہ مشکل تخلیق ہیں',
  'Or those We created?': 'یا وہ جو ہم نے پیدا کیے؟',
  'We created them from sticky clay': 'ہم نے انہیں چپچپی مٹی سے بنایا',
  'You wonder while they mock': 'تم حیران ہوتے ہو اور وہ مذاق اڑاتے ہیں',
  'When reminded, they do not remember': 'جب یاد دلایا جائے تو یاد نہیں رکھتے',
  'When they see a sign, they ridicule': 'جب کوئی نشانی دیکھیں تو مذاق اڑاتے ہیں',

  // disbelieversOnJudgmentDay
  'Woe that Day to the deniers': 'اس دن جھٹلانے والوں پر تباہی',
  'This is the Day of Separation': 'یہ فیصلے کا دن ہے',
  'Which you used to deny': 'جسے تم جھٹلایا کرتے تھے',
  'Gather those who wronged and their kinds': 'ظالموں کو اور ان جیسوں کو جمع کرو',
  'And what they used to worship': 'اور جن کی وہ عبادت کرتے تھے',
  'Besides Allah': 'اللہ کے سوا',
  'And guide them to the path of Hellfire': 'اور انہیں جہنم کے راستے کی طرف لے جاؤ',

  // questioningInHell
  'Stop them; indeed, they are to be questioned': 'انہیں روکو؛ بیشک ان سے سوال ہونا ہے',
  'What is wrong with you that you do not help each other?': 'تمہیں کیا ہوا کہ ایک دوسرے کی مدد نہیں کرتے؟',
  'But they, that Day, are surrendering': 'لیکن وہ اس دن بالکل مسلم ہو جائیں گے',
  'They will turn to one another, questioning each other': 'وہ ایک دوسرے کی طرف رخ کریں گے، ایک دوسرے سے پوچھتے ہوئے',
  'You used to come to us from the right': 'تم ہمارے پاس دائیں طرف سے آتے تھے',
  'Rather, you were not believers': 'بلکہ تم مومن نہیں تھے',

  // followersAndLeaders
  'We had no authority over you': 'ہمارا تم پر کوئی اختیار نہیں تھا',
  'Rather, you were a transgressing people': 'بلکہ تم سرکش لوگ تھے',
  'So the word of our Lord has come into effect upon us': 'پس ہمارے رب کا فرمان ہم پر پورا ہو گیا',
  'Indeed, we are to taste [punishment]': 'بیشک ہم عذاب چکھنے والے ہیں',
  'So we led you astray; indeed, we were astray': 'پس ہم نے تمہیں گمراہ کیا؛ بیشک ہم خود گمراہ تھے',
  'So indeed they, that Day, will be sharing in the punishment': 'پس بیشک وہ اس دن عذاب میں شریک ہوں گے',

  // punishmentForArrogance
  'When it was said to them: La ilaha illallah, they were arrogant': 'جب ان سے کہا جاتا: لا الہ الا اللہ، تو وہ تکبر کرتے',
  'And saying: Should we leave our gods for a mad poet?': 'اور کہتے: کیا ہم ایک دیوانے شاعر کے لیے اپنے معبود چھوڑ دیں؟',
  'Rather, he brought the truth and confirmed the messengers': 'بلکہ وہ سچ لے کر آئے اور رسولوں کی تصدیق کی',
  'Indeed, you will taste the painful punishment': 'بیشک تم دردناک عذاب چکھو گے',

  // rewardsForBelievers
  'Except the chosen servants of Allah': 'مگر اللہ کے چنے ہوئے بندے',
  'Those will have a provision determined': 'ان کے لیے ایک معلوم رزق ہے',
  'Fruits, and they will be honored': 'پھل، اور وہ عزت پائیں گے',
  'In gardens of pleasure': 'نعمتوں کے باغات میں',
  'On thrones facing one another': 'تختوں پر آمنے سامنے',
  'There is circulated among them a cup from a flowing spring': 'ان میں بہتے چشمے سے جام گردش کر رہا ہے',
  'White, delicious to the drinkers': 'سفید، پینے والوں کے لیے لذیذ',
  'No bad effect is there in it, nor will they be intoxicated': 'نہ اس میں کوئی نقصان ہے نہ وہ بدمست ہوں گے',
  'With them will be those limiting their glances with large eyes': 'ان کے ساتھ نظریں جھکائے بڑی آنکھوں والیاں ہوں گی',
  'As if they were eggs, well-protected': 'گویا محفوظ انڈے ہیں',

  // conversationInParadise
  'They will approach one another, inquiring': 'وہ ایک دوسرے کی طرف رخ کریں گے، پوچھتے ہوئے',
  'A speaker among them will say: I had a companion': 'ان میں سے ایک کہنے والا کہے گا: میرا ایک ساتھی تھا',
  'Who would say: Are you among those who believe?': 'جو کہتا تھا: کیا تم تصدیق کرنے والوں میں سے ہو؟',
  'When we have died and become dust and bones, will we be judged?': 'جب ہم مر جائیں اور مٹی اور ہڈیاں ہو جائیں، کیا ہمارا حساب ہوگا؟',
  'He will say: Would you look?': 'وہ کہے گا: کیا تم جھانک کر دیکھو گے؟',
  'He will look and see him in the midst of Hellfire': 'وہ جھانکے گا تو اسے جہنم کے بیچ دیکھے گا',
  'He will say: By Allah, you almost ruined me': 'وہ کہے گا: اللہ کی قسم، تم نے تو مجھے تقریباً ہلاک کر دیا تھا',
  'If not for the favor of my Lord, I would have been brought [to Hell]': 'اگر میرے رب کا فضل نہ ہوتا تو میں بھی حاضر کیے جانے والوں میں ہوتا',

  // eternalParadise
  'Are we not to die?': 'کیا ہم مرنے والے نہیں؟',
  'Except for our first death, and we will not be punished': 'سوائے ہماری پہلی موت کے، اور ہمیں عذاب نہ ہوگا',
  'Indeed, this is the great attainment': 'بیشک یہی بڑی کامیابی ہے',
  'For the like of this let the workers work': 'ایسی ہی چیز کے لیے عمل کرنے والوں کو عمل کرنا چاہیے',

  // treeOfZaqqum
  'Is that [Paradise] a better accommodation or the tree of Zaqqum?': 'کیا وہ (جنت) بہتر مہمانداری ہے یا زقوم کا درخت؟',
  'We have made it a trial for the wrongdoers': 'ہم نے اسے ظالموں کے لیے آزمائش بنایا',
  'It is a tree emerging from the bottom of Hellfire': 'یہ درخت جہنم کی تہ سے نکلتا ہے',
  'Its emerging fruit as if it was heads of devils': 'اس کے پھل ایسے ہیں جیسے شیطانوں کے سر',
  'They will eat from it and fill their bellies': 'وہ اس میں سے کھائیں گے اور پیٹ بھریں گے',
  'Then they will have a scalding drink': 'پھر ان کے لیے کھولتا ہوا پانی ہوگا',
  'Then their return is to Hellfire': 'پھر ان کی واپسی جہنم کی طرف ہے',

  // blindFollowing
  'Indeed, they found their fathers astray': 'بیشک انہوں نے اپنے باپ دادا کو گمراہ پایا',
  'So they hastened in their footsteps': 'تو وہ ان کے نقشِ قدم پر دوڑ پڑے',
  'Before them, most of the ancients went astray': 'ان سے پہلے اکثر پہلے لوگ گمراہ ہو چکے تھے',
  'We had sent among them warners': 'ہم نے ان میں ڈرانے والے بھیجے تھے',
  'See how was the end of those who were warned': 'دیکھو ڈرائے جانے والوں کا انجام کیسا ہوا',

  // prophetNuh
  'And Nuh called upon Us': 'اور نوح نے ہمیں پکارا',
  'How excellent are We in responding': 'ہم کیا ہی اچھے جواب دینے والے ہیں',
  'We saved him and his family from the great distress': 'ہم نے انہیں اور ان کے گھر والوں کو بڑی مصیبت سے بچایا',
  'We made his descendants the survivors': 'ہم نے ان کی اولاد کو باقی رہنے والا بنایا',
  'And We left for him [favorable mention] among later generations': 'اور ہم نے آنے والوں میں ان کا (اچھا) ذکر باقی رکھا',
  'Peace upon Nuh among the worlds': 'جہانوں میں نوح پر سلام',
  'Indeed, he was of Our believing servants': 'بیشک وہ ہمارے مومن بندوں میں سے تھے',
  'Then We drowned the others': 'پھر ہم نے باقی سب کو ڈبو دیا',

  // prophetIbrahimSeeking
  'And indeed, among his followers was Ibrahim': 'اور بیشک ان کے پیروکاروں میں ابراہیم تھے',
  'When he came to his Lord with a sound heart': 'جب وہ اپنے رب کے پاس صاف دل لے کر آئے',
  'When he said to his father and people: What do you worship?': 'جب انہوں نے اپنے باپ اور قوم سے کہا: تم کس کی عبادت کرتے ہو؟',
  'Is it falsehood, gods other than Allah, you desire?': 'کیا تم اللہ کے سوا جھوٹے معبود چاہتے ہو؟',
  'What then is your thought about the Lord of the worlds?': 'پھر رب العالمین کے بارے میں تمہارا کیا خیال ہے؟',

  // ibrahimAndStars
  'He cast a look at the stars': 'انہوں نے ستاروں پر ایک نظر ڈالی',
  'And said: Indeed, I am ill': 'اور کہا: بیشک میں بیمار ہوں',
  'So they turned away from him, departing': 'تو وہ ان سے منہ موڑ کر چلے گئے',
  'He turned to their gods': 'وہ ان کے معبودوں کی طرف گئے',
  'And said: Do you not eat?': 'اور کہا: تم کھاتے کیوں نہیں؟',
  'What is wrong with you that you do not speak?': 'تمہیں کیا ہوا کہ بولتے نہیں؟',
  'He turned on them, striking with his right hand': 'پھر وہ ان پر ٹوٹ پڑے، دائیں ہاتھ سے مارتے ہوئے',
  'They came toward him, hastening': 'وہ ان کی طرف دوڑتے ہوئے آئے',
  'He said: Do you worship what you carve?': 'انہوں نے کہا: کیا تم وہ عبادت کرتے ہو جو خود تراشتے ہو؟',
  'While Allah created you and what you make': 'حالانکہ اللہ نے تمہیں اور تمہاری بنائی ہوئی چیزوں کو پیدا کیا',

  // ibrahimInFire
  'They said: Build for him a structure and throw him into the fire': 'انہوں نے کہا: اس کے لیے ایک عمارت بناؤ اور اسے آگ میں ڈال دو',
  'They intended a plan against him, but We made them the lowest': 'انہوں نے اس کے خلاف چال چلی لیکن ہم نے انہیں نیچا دکھایا',

  // ibrahimsSacrifice
  'He said: I am going to my Lord; He will guide me': 'انہوں نے کہا: میں اپنے رب کی طرف جا رہا ہوں؛ وہ مجھے ہدایت دے گا',
  'My Lord, grant me [a child] from among the righteous': 'میرے رب! مجھے نیک لوگوں میں سے (اولاد) عطا فرما',
  'So We gave him good tidings of a forbearing boy': 'تو ہم نے اسے ایک بردبار لڑکے کی خوشخبری دی',
  'When he reached with him [the age of] exertion': 'جب وہ اس کے ساتھ دوڑ دھوپ کی عمر کو پہنچا',
  'He said: O my son, I have seen in a dream that I sacrifice you': 'انہوں نے کہا: اے میرے بیٹے، میں نے خواب میں دیکھا کہ میں تجھے ذبح کر رہا ہوں',
  'So see what you think': 'تو دیکھو تمہاری کیا رائے ہے',
  'He said: O my father, do as you are commanded': 'اس نے کہا: اے ابا جان، جو حکم دیا جا رہا ہے وہ کیجیے',
  'You will find me, if Allah wills, of the patient': 'ان شاء اللہ آپ مجھے صبر کرنے والوں میں پائیں گے',
  'When they both submitted': 'جب دونوں نے سرِ تسلیم خم کر دیا',
  'And he put him down upon his forehead': 'اور اسے ماتھے کے بل لٹایا',
  'We called to him: O Ibrahim!': 'ہم نے اسے پکارا: اے ابراہیم!',
  'You have fulfilled the vision': 'تم نے خواب سچ کر دکھایا',
  'Indeed, We thus reward the doers of good': 'بیشک ہم نیکی کرنے والوں کو اسی طرح بدلہ دیتے ہیں',
  'Indeed, this was the clear trial': 'بیشک یہ کھلی آزمائش تھی',
  'And We ransomed him with a great sacrifice': 'اور ہم نے ایک بڑی قربانی کے ذریعے اس کا فدیہ دیا',
  'Peace upon Ibrahim': 'ابراہیم پر سلام',
  'We gave him good tidings of Ishaq, a prophet from the righteous': 'ہم نے اسے اسحاق کی خوشخبری دی، نیک لوگوں میں سے ایک نبی',
  'We blessed him and Ishaq': 'ہم نے ان پر اور اسحاق پر برکت نازل فرمائی',

  // prophetMusaHarun
  'And We bestowed favor upon Musa and Harun': 'اور ہم نے موسیٰ اور ہارون پر احسان فرمایا',
  'We saved them and their people from the great distress': 'ہم نے انہیں اور ان کی قوم کو بڑی مصیبت سے بچایا',
  'We supported them so they were the predominant': 'ہم نے ان کی مدد کی تو وہ غالب رہے',
  'We gave them the clear Scripture': 'ہم نے انہیں واضح کتاب دی',
  'We guided them to the straight path': 'ہم نے انہیں سیدھے راستے کی ہدایت دی',
  'We left for them [favorable mention] among later generations': 'ہم نے آنے والوں میں ان کا (اچھا) ذکر باقی رکھا',
  'Peace upon Musa and Harun': 'موسیٰ اور ہارون پر سلام',
  'Indeed, they were of Our believing servants': 'بیشک وہ ہمارے مومن بندوں میں سے تھے',

  // prophetIlyas
  'And indeed, Ilyas was among the messengers': 'اور بیشک الیاس رسولوں میں سے تھے',
  'When he said to his people: Will you not fear Allah?': 'جب انہوں نے اپنی قوم سے کہا: کیا تم اللہ سے نہیں ڈرتے؟',
  "Do you call upon Ba'l and leave the best of creators?": 'کیا تم بعل کو پکارتے ہو اور سب سے بہتر خالق کو چھوڑتے ہو؟',
  'Allah, your Lord and the Lord of your forefathers': 'اللہ، تمہارا رب اور تمہارے پہلے باپ دادا کا رب',
  'But they denied him, so they will be brought [for punishment]': 'لیکن انہوں نے جھٹلایا، پس وہ حاضر کیے جائیں گے',
  'Peace upon Ilyas': 'الیاس پر سلام',

  // prophetLut
  'And indeed, Lut was among the messengers': 'اور بیشک لوط رسولوں میں سے تھے',
  'When We saved him and his family, all': 'جب ہم نے انہیں اور ان کے سب گھر والوں کو بچایا',
  'Except an old woman among those who remained behind': 'مگر ایک بوڑھی عورت جو پیچھے رہ جانے والوں میں تھی',
  'Then We destroyed the others': 'پھر ہم نے باقی سب کو تباہ کر دیا',
  'And indeed, you pass by them in the morning': 'اور بیشک تم صبح کو ان کے پاس سے گزرتے ہو',
  'And at night. Will you not use reason?': 'اور رات کو۔ کیا تم عقل نہیں رکھتے؟',

  // prophetYunus
  'And indeed, Yunus was among the messengers': 'اور بیشک یونس رسولوں میں سے تھے',
  'When he ran away to the laden ship': 'جب وہ بھری ہوئی کشتی کی طرف بھاگے',
  'He drew lots and was among the losers': 'انہوں نے قرعہ ڈالا تو ہارنے والوں میں ہو گئے',
  'Then the fish swallowed him, while he was blameworthy': 'پھر مچھلی نے انہیں نگل لیا جبکہ وہ قابلِ ملامت تھے',
  'Had he not been of those who glorify Allah': 'اگر وہ تسبیح کرنے والوں میں سے نہ ہوتے',
  'He would have remained in its belly until Day of Resurrection': 'تو قیامت تک اس کے پیٹ میں رہتے',
  'We cast him onto the open shore while he was ill': 'ہم نے اسے کھلے میدان میں پھینکا جبکہ وہ بیمار تھے',
  'And We grew over him a gourd plant': 'اور ہم نے ان پر ایک کدو کی بیل اگائی',
  'We sent him to a hundred thousand or more': 'ہم نے انہیں ایک لاکھ یا اس سے زیادہ لوگوں کی طرف بھیجا',
  'They believed, so We gave them enjoyment for a time': 'وہ ایمان لائے تو ہم نے انہیں ایک مدت تک فائدہ اٹھانے دیا',

  // refutingAngelsAsDaughters
  'Ask them: Does your Lord have daughters while they have sons?': 'ان سے پوچھو: کیا تمہارے رب کے لیے بیٹیاں ہیں اور ان کے لیے بیٹے؟',
  'Or did We create the angels as females while they were witnesses?': 'کیا ہم نے فرشتوں کو مادہ بنایا جبکہ وہ دیکھ رہے تھے؟',
  'Unquestionably, it is out of their falsehood that they say': 'بلاشبہ وہ اپنے جھوٹ سے کہتے ہیں',
  'Allah has begotten, and indeed, they are liars': 'اللہ نے جنا ہے، اور بیشک وہ جھوٹے ہیں',
  'Has He chosen daughters over sons?': 'کیا اس نے بیٹوں پر بیٹیوں کو ترجیح دی؟',
  'What is wrong with you? How do you judge?': 'تمہیں کیا ہوا؟ تم کیسا فیصلہ کرتے ہو؟',
  'Will you not be reminded?': 'کیا تم نصیحت نہیں پکڑتے؟',

  // falseRelationshipWithJinn
  'And they have claimed between Him and the jinn a lineage': 'اور انہوں نے اس کے اور جنوں کے درمیان رشتہ داری جوڑی',
  'The jinn have already known that they will be brought [for judgment]': 'جنوں نے خود جان لیا کہ وہ حاضر کیے جائیں گے',
  'Exalted is Allah above what they describe': 'اللہ پاک ہے ان باتوں سے جو وہ بیان کرتے ہیں',

  // disbelieversAndIdols
  'So indeed, you and whatever you worship': 'پس بیشک تم اور جن کی تم عبادت کرتے ہو',
  'You cannot tempt [anyone] away from Him': 'تم اس سے کسی کو بہکا نہیں سکتے',
  'Except he who is to burn in Hellfire': 'مگر جو جہنم میں جلنے والا ہو',

  // angelsGlorifyingAllah
  'There is not among us except that for him is a known position': 'ہم میں سے ہر ایک کا ایک مقررہ مقام ہے',
  'And indeed, we are those who line up': 'اور بیشک ہم صف بنانے والے ہیں',
  'And indeed, we are those who glorify': 'اور بیشک ہم تسبیح کرنے والے ہیں',

  // disbelieversDenial
  'And indeed, they used to say': 'اور بیشک وہ کہا کرتے تھے',
  'If we had a message from the former peoples': 'اگر ہمارے پاس پہلے لوگوں کا کوئی پیغام ہوتا',
  'We would have been the chosen servants of Allah': 'تو ہم اللہ کے چنے ہوئے بندے ہوتے',
  'But they disbelieved in it': 'لیکن انہوں نے اس کا انکار کیا',
  'They will come to know': 'عنقریب انہیں معلوم ہو جائے گا',

  // divinePromise
  'Our word has preceded for Our servants, the messengers': 'ہمارا فرمان ہمارے بندوں رسولوں کے حق میں پہلے سے طے ہے',
  'Indeed, they will be those given victory': 'بیشک وہی غالب آنے والے ہیں',
  'And indeed, Our soldiers will be those who overcome': 'اور بیشک ہمارا لشکر ہی غالب ہوگا',
  'So turn away from them for a time': 'تو ان سے ایک وقت تک منہ موڑ لو',
  'And watch them, for they are going to see': 'اور انہیں دیکھو، عنقریب وہ بھی دیکھیں گے',

  // closingGlorification
  'Do they wish to hasten Our punishment?': 'کیا وہ ہمارے عذاب میں جلدی چاہتے ہیں؟',
  'When it descends in their territory, evil is the morning of those warned': 'جب وہ ان کے صحن میں اتر پڑے تو ڈرائے جانے والوں کی صبح بری ہوگی',
  'Turn away from them for a time': 'ان سے ایک وقت تک منہ موڑ لو',
  'And watch, for they are going to see': 'اور دیکھو، عنقریب وہ بھی دیکھیں گے',
  'Exalted is your Lord, the Lord of might, above what they describe': 'پاک ہے تیرا رب، عزت کا رب، ان باتوں سے جو وہ بیان کرتے ہیں',
  'And peace upon the messengers': 'اور رسولوں پر سلام',
  'And praise to Allah, Lord of the worlds': 'اور تمام تعریف اللہ رب العالمین کے لیے ہے',
};

// Map of English text -> Urdu translation for explanation fields
const explanationTranslations = {
  // angelsInRows
  'Angels standing in perfect rows before Allah': 'فرشتے اللہ کے سامنے کامل صفوں میں کھڑے',
  'Angels driving clouds or repelling evil': 'فرشتے بادلوں کو ہنکاتے یا شر کو دور کرتے ہیں',
  'Angels reciting and conveying revelation': 'فرشتے ذکر پڑھتے اور وحی پہنچاتے ہیں',
  'Core conclusion from angelic testimony': 'فرشتوں کی گواہی سے مرکزی نتیجہ',
  "Allah's dominion over all creation": 'تمام مخلوقات پر اللہ کی حکمرانی',
  'Lord of every sunrise point throughout the year': 'سال بھر ہر طلوعِ آفتاب کے مقام کا رب',

  // creationArgument
  'Challenge to reflect on human creation': 'انسانی تخلیق پر غور کرنے کا چیلنج',
  'Comparison to heavens, earth, angels': 'آسمانوں، زمین، فرشتوں سے موازنہ',
  'Human origin from clay': 'مٹی سے انسان کی ابتدا',
  'Prophet amazed at their denial, they mock in return': 'نبی ﷺ ان کے انکار پر حیران، وہ جواب میں مذاق اڑاتے',
  'Heedless despite reminders': 'یاد دہانیوں کے باوجود غافل',
  'Mock even clear signs': 'واضح نشانیوں کا بھی مذاق',

  // disbelieversOnJudgmentDay
  'Destruction for those who denied truth': 'سچائی کا انکار کرنے والوں کی تباہی',
  'Day when truth is separated from falsehood': 'جب سچ کو جھوٹ سے الگ کیا جائے گا',
  'Confronted with what they rejected': 'جس چیز کا انکار کیا اسی سے سامنا',
  'Wrongdoers gathered with their like': 'ظالم اپنے جیسوں کے ساتھ جمع',
  'Idols gathered with idol worshippers': 'بت پوجنے والوں کے ساتھ بت جمع',
  'All false gods assembled': 'تمام جھوٹے معبود جمع',
  "Sarcastically 'guided' to Hell": 'طنزاً جہنم کی طرف رہنمائی',

  // questioningInHell
  'Held accountable for their deeds': 'اپنے اعمال کا حساب دیں گے',
  'Mocking their helplessness': 'ان کی بے بسی کا مذاق',
  'Completely subdued on Judgment Day': 'قیامت کے دن بالکل مسلم',
  'Mutual blame begins': 'باہمی الزام تراشی شروع',
  'Followers blame leaders for misleading from position of trust': 'پیروکار قائدین پر اعتماد کی پوزیشن سے گمراہ کرنے کا الزام',
  'Leaders blame followers for their own disbelief': 'قائدین پیروکاروں کو ان کے اپنے کفر کا ذمہ دار ٹھہراتے ہیں',

  // followersAndLeaders
  'Leaders deny coercing followers': 'قائدین پیروکاروں پر زبردستی سے انکار',
  'Both sides were transgressors': 'دونوں طرف سرکش تھے',
  'Divine decree fulfilled': 'الٰہی فیصلہ پورا ہو گیا',
  'Both will suffer together': 'دونوں ساتھ عذاب بھگتیں گے',
  'Misguided leading the misguided': 'گمراہ لوگ گمراہوں کی قیادت کرتے رہے',
  'Shared guilt, shared punishment': 'مشترکہ جرم، مشترکہ سزا',

  // punishmentForArrogance
  'Rejected Tawheed out of pride': 'تکبر کی وجہ سے توحید رد کی',
  'Called Prophet a mad poet': 'نبی ﷺ کو دیوانا شاعر کہا',
  'Prophet brought truth, confirmed previous prophets': 'نبی ﷺ سچائی لائے، پچھلے انبیاء کی تصدیق کی',
  'Painful punishment guaranteed': 'دردناک عذاب یقینی',

  // rewardsForBelievers
  'Sincere servants exempted from punishment': 'مخلص بندے عذاب سے مستثنیٰ',
  'Known sustenance in Paradise': 'جنت میں معلوم رزق',
  'Fruits and honor await believers': 'مومنوں کے لیے پھل اور عزت منتظر',
  'Gardens of bliss': 'نعمتوں کے باغات',
  'Seated facing each other in fellowship': 'آپس میں آمنے سامنے بیٹھے ہوئے',
  'Served pure drink from springs': 'چشموں سے پاکیزہ مشروب پیش',
  'Pure white drink, delightful': 'خالص سفید مشروب، لذیذ',
  'No headache or loss of senses': 'نہ سر درد نہ ہوش کھونا',
  'Modest companions with beautiful eyes': 'حیادار بڑی آنکھوں والی ساتھی',
  'Pure like protected pearls': 'محفوظ موتیوں کی طرح پاکیزہ',

  // conversationInParadise
  'Believers conversing in Paradise': 'مومنین جنت میں گفتگو کرتے ہوئے',
  'Remembering a skeptical friend': 'ایک شکی دوست کو یاد کرتے ہوئے',
  'The companion mocked belief in resurrection': 'ساتھی قیامت پر ایمان کا مذاق اڑاتا تھا',
  'Skeptic denied resurrection': 'شکی نے قیامت کا انکار کیا',
  'Believer asks to see former companion': 'مومن پرانے ساتھی کو دیکھنا چاہتا ہے',
  'Sees skeptic in center of Hell': 'شکی کو جہنم کے بیچ میں دیکھتا ہے',
  'Almost led astray by skeptic friend': 'شکی دوست نے تقریباً گمراہ کر دیا تھا',
  "Gratitude for Allah's guidance": 'اللہ کی ہدایت پر شکر',

  // eternalParadise
  'Believers realize eternal life': 'مومنین ابدی زندگی کا ادراک کرتے ہیں',
  'Only one death, no punishment ever': 'صرف ایک موت، کبھی عذاب نہیں',
  'Ultimate success and victory': 'آخری کامیابی اور فتح',
  'This reward is worth striving for': 'یہ اجر جدوجہد کے قابل ہے',

  // treeOfZaqqum
  'Contrast Paradise with Hell': 'جنت کا جہنم سے موازنہ',
  'Disbelievers mocked this concept': 'کافروں نے اس تصور کا مذاق اڑایا',
  'Grows from depths of Hell': 'جہنم کی گہرائیوں سے اگتا ہے',
  'Fruit resembles devil heads - hideous': 'پھل شیطانوں کے سروں جیسے - بھیانک',
  'Forced to eat until stuffed': 'زبردستی کھلایا جائے گا یہاں تک کہ پیٹ بھر جائے',
  'Boiling water to wash down Zaqqum': 'زقوم اتارنے کے لیے کھولتا پانی',
  'Cycle of punishment continues': 'عذاب کا سلسلہ جاری',

  // blindFollowing
  'Inherited misguidance from ancestors': 'باپ دادا سے موروثی گمراہی',
  'Rushed to follow in their error': 'ان کی غلطی میں پیچھا کرنے کو دوڑ پڑے',
  'History of mass misguidance': 'اجتماعی گمراہی کی تاریخ',
  'Despite prophets, they strayed': 'انبیاء کے باوجود گمراہ رہے',
  'Warned but rejected - destruction': 'خبردار کیا گیا لیکن رد کیا - تباہی',

  // prophetNuh
  "Nuh's supplication to Allah": 'نوح کی اللہ سے دعا',
  'Allah is the best responder to prayers': 'اللہ دعاؤں کا بہترین قبول کرنے والا ہے',
  'Rescued from the flood': 'سیلاب سے بچایا گیا',
  'All humanity descends from Nuh': 'تمام انسانیت نوح کی نسل سے ہے',
  'Honored legacy preserved': 'معزز ورثہ محفوظ',
  'Divine peace upon Nuh': 'نوح پر الٰہی سلامتی',
  'Praised as sincere believer': 'مخلص مومن کے طور پر تعریف',
  'Disbelievers destroyed by flood': 'کافر سیلاب سے تباہ ہوئے',

  // prophetIbrahimSeeking
  "Ibrahim followed Nuh's path": 'ابراہیم نے نوح کے راستے کی پیروی کی',
  "Ibrahim's pure, sincere heart": 'ابراہیم کا پاکیزہ، مخلص دل',
  'Questioning idol worship': 'بت پرستی پر سوال',
  'Exposing false gods as lies': 'جھوٹے معبودوں کو جھوٹ ثابت کرنا',
  'Challenging them to consider true Lord': 'سچے رب پر غور کرنے کا چیلنج',

  // ibrahimAndStars
  'Looked up at stars deliberately': 'جان بوجھ کر ستاروں کی طرف دیکھا',
  'Excuse to avoid idol festival': 'بت پرستوں کے تہوار سے بچنے کا بہانہ',
  'People left for their festival': 'لوگ اپنے تہوار کے لیے چلے گئے',
  'Approached the idols alone': 'اکیلے بتوں کے پاس گئے',
  'Mocking the idols - offered food before them': 'بتوں کا مذاق - ان کے سامنے کھانا رکھا',
  'Challenging their silence': 'ان کی خاموشی کو چیلنج',
  'Smashed idols with powerful right hand': 'طاقتور دائیں ہاتھ سے بت توڑ دیے',
  'People rushed back angrily': 'لوگ غصے میں واپس دوڑے',
  'Exposing absurdity - worshipping own carvings': 'بے تکی بات - اپنی تراشی ہوئی چیزوں کی عبادت',
  'Allah created you AND your handiwork': 'اللہ نے تمہیں بھی بنایا اور تمہارے ہاتھوں کا کام بھی',

  // ibrahimInFire
  'Plotted to burn Ibrahim alive': 'ابراہیم کو زندہ جلانے کی سازش',
  'Their plot backfired - they were humiliated': 'ان کی سازش الٹی پڑی - وہ ذلیل ہوئے',

  // ibrahimsSacrifice
  "Ibrahim emigrates for Allah's sake": 'ابراہیم اللہ کی خاطر ہجرت کرتے ہیں',
  'Dua for righteous offspring': 'نیک اولاد کے لیے دعا',
  'Glad tidings of patient son (Ismail)': 'بردبار بیٹے (اسماعیل) کی خوشخبری',
  'Son grew old enough to work alongside him': 'بیٹا اتنا بڑا ہو گیا کہ ساتھ کام کر سکے',
  'Ibrahim shares divine vision of sacrifice': 'ابراہیم قربانی کا الٰہی خواب بتاتے ہیں',
  'Consulting son, not forcing': 'بیٹے سے مشورہ، زبردستی نہیں',
  "Son's willing submission to Allah's will": 'بیٹے کا اللہ کی مرضی پر رضامندانہ سرِ تسلیم خم',
  "Son pledges patience with Allah's help": 'بیٹے نے اللہ کی مدد سے صبر کا عہد کیا',
  'Both father and son submitted to Allah': 'باپ اور بیٹے دونوں نے اللہ کے آگے سر جھکا دیا',
  'Laid son face-down for sacrifice': 'بیٹے کو قربانی کے لیے منہ کے بل لٹایا',
  'Divine intervention at critical moment': 'نازک لمحے میں الٰہی مداخلت',
  'Test passed - intention accepted': 'آزمائش میں کامیاب - نیت قبول',
  'Reward for those who do excellent': 'نیکی کرنے والوں کا بدلہ',
  'Ultimate test of faith': 'ایمان کی سب سے بڑی آزمائش',
  'Ram provided as substitute - origin of Eid sacrifice': 'مینڈھا بطور متبادل - عید قربانی کی ابتدا',
  "Ibrahim's legacy honored forever": 'ابراہیم کی وراثت ہمیشہ کے لیے معزز',
  'Divine peace upon Ibrahim': 'ابراہیم پر الٰہی سلامتی',
  'Additional blessing - another prophet son': 'اضافی نعمت - ایک اور نبی بیٹا',
  'Blessings on father and son': 'باپ اور بیٹے پر برکات',

  // prophetMusaHarun
  'Special grace upon both brothers': 'دونوں بھائیوں پر خاص فضل',
  "Saved from Pharaoh's oppression": 'فرعون کے ظلم سے بچائے',
  'Divine support led to victory': 'الٰہی مدد سے فتح ملی',
  'Given the Torah': 'توراۃ عطا کی گئی',
  'Guided to right way': 'سیدھے راستے کی ہدایت',
  'Legacy honored': 'وراثت معزز',
  'Divine peace upon both': 'دونوں پر الٰہی سلامتی',
  'Praised as sincere believers': 'مخلص مومنوں کے طور پر تعریف',

  // prophetIlyas
  'Ilyas confirmed as prophet': 'الیاس نبی کے طور پر تصدیق',
  'Calling people to taqwa': 'لوگوں کو تقویٰ کی دعوت',
  "Rebuking worship of Ba'l idol": 'بعل بت کی عبادت کی سرزنش',
  'Reminding them of one true Lord': 'ان کو ایک سچے رب کی یاد دہانی',
  'Rejection leads to punishment': 'رد کرنا سزا کی طرف لے جاتا ہے',
  'Sincere believers exempted': 'مخلص مومنین مستثنیٰ',
  "Ilyas's legacy honored": 'الیاس کی وراثت معزز',
  'Divine peace upon Ilyas': 'الیاس پر الٰہی سلامتی',

  // prophetLut
  'Lut confirmed as prophet': 'لوط نبی کے طور پر تصدیق',
  'Family rescued from destruction': 'خاندان تباہی سے بچایا گیا',
  'His wife was among the destroyed': 'ان کی بیوی ہلاک ہونے والوں میں تھی',
  'Complete destruction of his people': 'ان کی قوم کی مکمل تباہی',
  'Ruins visible in morning travel': 'کھنڈرات صبح کے سفر میں نظر آتے ہیں',
  'Signs visible day and night - reflect!': 'نشانیاں دن رات نظر آتی ہیں - غور کرو!',

  // prophetYunus
  'Yunus confirmed as prophet': 'یونس نبی کے طور پر تصدیق',
  'Fled on a fully-loaded ship': 'بھری ہوئی کشتی پر بھاگے',
  'Lost the lot and was thrown overboard': 'قرعہ ہارے اور سمندر میں پھینکے گئے',
  'Swallowed by whale while at fault': 'غلطی پر ہوتے ہوئے مچھلی نے نگل لیا',
  'His habit of glorifying Allah saved him': 'اللہ کی تسبیح کی عادت نے بچایا',
  'Would have stayed until Judgment Day': 'قیامت تک رہ جاتے',
  'Ejected onto barren shore, weakened': 'بنجر ساحل پر پھینکے گئے، کمزور حالت میں',
  'Gourd vine for shade and nourishment': 'سایہ اور غذا کے لیے کدو کی بیل',
  'Sent to over 100,000 people': 'ایک لاکھ سے زیادہ لوگوں کی طرف بھیجے گئے',
  'His people believed - rare success! Punishment averted': 'ان کی قوم ایمان لائی - نادر کامیابی! عذاب ٹل گیا',

  // refutingAngelsAsDaughters
  'Exposing hypocrisy - they dislike daughters but ascribe them to Allah': 'منافقت کا پردہ فاش - خود بیٹیاں ناپسند کرتے ہیں لیکن اللہ کو منسوب کرتے ہیں',
  "Were they present at angels' creation?": 'کیا وہ فرشتوں کی تخلیق کے وقت موجود تھے؟',
  'Their claim is pure fabrication': 'ان کا دعویٰ خالص جھوٹ ہے',
  'Claiming Allah has offspring is a lie': 'اللہ کی اولاد ہونے کا دعویٰ جھوٹ ہے',
  'Absurd - they prefer sons but say Allah prefers daughters?': 'بے تکی بات - وہ بیٹے پسند کرتے ہیں لیکن کہتے ہیں اللہ بیٹیاں پسند کرتا ہے؟',
  'Rebuking their illogical judgment': 'ان کے غیر منطقی فیصلے پر سرزنش',
  'Call to reflect and remember': 'غور و فکر اور یاد کرنے کی دعوت',

  // falseRelationshipWithJinn
  'Falsely claimed kinship between Allah and jinn': 'اللہ اور جنوں کے درمیان جھوٹا رشتہ جوڑا',
  'Even jinn know they will be judged': 'جن بھی جانتے ہیں کہ ان کا حساب ہوگا',
  'Allah is far above their false claims': 'اللہ ان کے جھوٹے دعوؤں سے بہت بلند ہے',
  'Sincere servants know the truth': 'مخلص بندے سچائی جانتے ہیں',

  // disbelieversAndIdols
  'Addressing idolaters and their gods': 'بت پرستوں اور ان کے معبودوں سے مخاطب',
  'Cannot mislead anyone destined for truth': 'سچائی کے لیے مقدر کسی کو گمراہ نہیں کر سکتے',
  'Only those destined for Hell are misled': 'صرف جہنم کے مقدر والے گمراہ ہوتے ہیں',

  // angelsGlorifyingAllah
  'Angels have designated ranks and positions': 'فرشتوں کے مقررہ مرتبے اور مقامات ہیں',
  'Angels arranged in rows for worship': 'فرشتے عبادت کے لیے صفوں میں کھڑے',
  'Angels constantly glorify Allah': 'فرشتے مسلسل اللہ کی تسبیح کرتے ہیں',

  // disbelieversDenial
  'Disbelievers claimed...': 'کافروں نے دعویٰ کیا...',
  'Claimed they would believe if given a scripture': 'دعویٰ کیا کہ اگر کتاب ملے تو ایمان لے آئیں',
  'Falsely claimed they would be sincere': 'جھوٹا دعویٰ کیا کہ وہ مخلص ہوتے',
  'When Quran came, they rejected it': 'جب قرآن آیا تو انہوں نے رد کر دیا',
  'Warning of coming consequences': 'آنے والے نتائج کی تنبیہ',

  // divinePromise
  'Promise already decreed for prophets': 'انبیاء کے حق میں وعدہ پہلے سے مقرر',
  'Prophets will ultimately be victorious': 'انبیاء آخرکار فتح پائیں گے',
  "Allah's army will prevail": 'اللہ کا لشکر غالب آئے گا',
  'Prophet told to be patient temporarily': 'نبی ﷺ کو عارضی صبر کی تلقین',
  'Prophet will witness their fate': 'نبی ﷺ ان کا انجام دیکھیں گے',

  // closingGlorification
  'Fools who mock and rush toward punishment': 'احمق جو مذاق اڑاتے اور عذاب کی طرف دوڑتے ہیں',
  'Terrible morning awaits those who were warned': 'ڈرائے جانے والوں کے لیے بھیانک صبح منتظر ہے',
  'Repeated counsel for patience': 'صبر کی بار بار نصیحت',
  'Prophet will witness their end': 'نبی ﷺ ان کا انجام دیکھیں گے',
  'Allah transcends all false descriptions': 'اللہ تمام جھوٹی تعریفات سے بالا ہے',
  'Peace upon all prophets': 'تمام انبیاء پر سلامتی',
  'Surah closes with praise of Allah': 'سورت اللہ کی حمد سے ختم ہوتی ہے',
};

// Apply meaning translations
for (const [eng, urdu] of Object.entries(meaningTranslations)) {
  const escaped = eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(meaning:\\s*\\{[^}]*ur:\\s*)"${escaped}"`, 'g');
  content = content.replace(regex, `$1"${urdu}"`);
}

// Apply explanation translations
for (const [eng, urdu] of Object.entries(explanationTranslations)) {
  const escaped = eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(explanation:\\s*\\{[^}]*ur:\\s*)"${escaped}"`, 'g');
  content = content.replace(regex, `$1"${urdu}"`);
}

writeFileSync(filePath, content, 'utf8');
console.log('Done replacing English ur: fields in 037.js');
