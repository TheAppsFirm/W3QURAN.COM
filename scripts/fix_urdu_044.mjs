import fs from 'fs';

const file = 'src/data/treebank/ontology/044.js';
let content = fs.readFileSync(file, 'utf8');

const map = {
  // laylatAlQadr
  'ur: "Disconnected letters - part of the Ha-Mim series (40-46)"': 'ur: "حروفِ مقطعات - حوامیم سلسلے کا حصہ (40-46)"',
  'ur: "By the clear Book"': 'ur: "واضح کتاب کی قسم"',
  'ur: "Oath by the Quran emphasizing its clarity"': 'ur: "قرآن کی قسم اس کی وضاحت پر زور دیتے ہوئے"',
  'ur: "Indeed, We sent it down during a blessed night"': 'ur: "بے شک ہم نے اسے ایک مبارک رات میں نازل کیا"',
  'ur: "Revelation of Quran on Laylat al-Qadr"': 'ur: "لیلۃ القدر میں قرآن کا نزول"',
  'ur: "Indeed, We were to warn"': 'ur: "بے شک ہم خبردار کرنے والے تھے"',
  'ur: "Purpose of revelation - to warn mankind"': 'ur: "نزولِ وحی کا مقصد - انسانوں کو خبردار کرنا"',
  'ur: "On that night every wise affair is determined"': 'ur: "اس رات ہر حکمت والے معاملے کا فیصلہ ہوتا ہے"',
  'ur: "Decrees for the year are decided"': 'ur: "سال بھر کے فیصلے طے ہوتے ہیں"',
  'ur: "A command from Us"': 'ur: "ہماری طرف سے ایک حکم"',
  'ur: "Divine origin of all decrees"': 'ur: "تمام فیصلوں کی الٰہی اصل"',
  'ur: "As mercy from your Lord"': 'ur: "تمہارے رب کی رحمت سے"',
  'ur: "Revelation as divine mercy"': 'ur: "وحی بطور الٰہی رحمت"',
  'ur: "Indeed, He is the Hearing, the Knowing"': 'ur: "بے شک وہ سننے والا جاننے والا ہے"',
  "ur: \"Allah's attributes of hearing and knowledge\"": 'ur: "اللہ کی سماعت اور علم کی صفات"',

  // divineCreatorship
  'ur: "Lord of the heavens and earth and what is between them"': 'ur: "آسمانوں اور زمین اور جو ان کے درمیان ہے ان سب کا رب"',
  "ur: \"Allah's sovereignty over all creation\"": 'ur: "تمام مخلوقات پر اللہ کی حاکمیت"',
  'ur: "There is no deity except Him"': 'ur: "اس کے سوا کوئی معبود نہیں"',
  'ur: "He gives life and causes death"': 'ur: "وہ زندگی دیتا ہے اور موت دیتا ہے"',
  'ur: "Allah controls life and death"': 'ur: "اللہ زندگی اور موت پر حاکم ہے"',
  'ur: "Your Lord and the Lord of your forefathers"': 'ur: "تمہارا رب اور تمہارے باپ دادا کا رب"',
  'ur: "Lordship spans all generations"': 'ur: "ربوبیت تمام نسلوں پر محیط ہے"',

  // theSmoke
  'ur: "But they are in doubt, amusing themselves"': 'ur: "بلکہ وہ شک میں کھیل رہے ہیں"',
  "ur: \"Disbelievers' heedless attitude\"": 'ur: "کافروں کا غفلت بھرا رویہ"',
  'ur: "Then watch for the Day when the sky brings visible smoke"': 'ur: "پس اس دن کا انتظار کرو جب آسمان واضح دھواں لائے گا"',
  'ur: "Prophecy of the smoke - a major sign"': 'ur: "دھوئیں کی پیشگوئی - ایک بڑی نشانی"',
  'ur: "Covering the people"': 'ur: "لوگوں کو ڈھانپ لے گا"',
  'ur: "Smoke will envelop humanity"': 'ur: "دھواں انسانوں کو ڈھانپ لے گا"',
  'ur: "This is a painful punishment"': 'ur: "یہ دردناک عذاب ہے"',
  'ur: "Nature of the smoke punishment"': 'ur: "دھوئیں کے عذاب کی نوعیت"',
  'ur: "Our Lord, remove from us the torment; indeed, we are believers"': 'ur: "اے ہمارے رب ہم سے عذاب ہٹا دے بے شک ہم ایمان لاتے ہیں"',
  "ur: \"People's desperate plea during the smoke\"": 'ur: "دھوئیں کے دوران لوگوں کی بے بس فریاد"',
  'ur: "How will they be reminded?"': 'ur: "انہیں نصیحت کہاں سے ہوگی؟"',
  'ur: "Rhetorical - too late for remembrance"': 'ur: "استفہامِ انکاری - نصیحت کا وقت گزر چکا"',
  'ur: "When a clear messenger had already come to them"': 'ur: "جبکہ ان کے پاس واضح رسول پہلے ہی آ چکا تھا"',
  'ur: "They already received clear guidance"': 'ur: "انہیں واضح ہدایت پہلے ہی مل چکی تھی"',
  'ur: "Then they turned away and said: Taught [by others], a madman"': 'ur: "پھر انہوں نے منہ پھیر لیا اور کہا: سکھایا ہوا ہے، دیوانہ ہے"',
  'ur: "Their rejection and insults"': 'ur: "ان کا انکار اور توہین"',
  'ur: "Indeed, We will remove the punishment a little"': 'ur: "بے شک ہم تھوڑی دیر کے لیے عذاب ہٹا دیں گے"',
  'ur: "Temporary respite granted"': 'ur: "عارضی مہلت دی گئی"',
  'ur: "Indeed, you will return [to disbelief]"': 'ur: "بے شک تم (کفر کی طرف) لوٹ جاؤ گے"',
  'ur: "Prophecy of their relapse"': 'ur: "ان کے پلٹ جانے کی پیشگوئی"',

  // greatSeizure
  'ur: "The Day We will strike with the greatest assault"': 'ur: "جس دن ہم سب سے بڑی پکڑ سے پکڑیں گے"',
  'ur: "Reference to Badr or Day of Judgment"': 'ur: "بدر یا یومِ قیامت کا حوالہ"',
  'ur: "Indeed, We will take retribution"': 'ur: "بے شک ہم بدلہ لیں گے"',
  'ur: "Divine vengeance upon deniers"': 'ur: "منکروں سے الٰہی انتقام"',

  // pharaohStory
  'ur: "And We had tried before them the people of Pharaoh"': 'ur: "اور ان سے پہلے ہم نے فرعون کی قوم کو آزمایا"',
  "ur: \"Historical example - Pharaoh's people tested\"": 'ur: "تاریخی مثال - فرعون کی قوم آزمائی گئی"',
  'ur: "And there came to them a noble messenger"': 'ur: "اور ان کے پاس ایک معزز رسول آیا"',
  'ur: "Prophet Musa sent to them"': 'ur: "حضرت موسیٰ ان کی طرف بھیجے گئے"',
  'ur: "Send with me the servants of Allah"': 'ur: "اللہ کے بندوں کو میرے ساتھ بھیج دو"',
  "ur: \"Musa's demand to free Israelites\"": 'ur: "بنی اسرائیل کی آزادی کا موسیٰ کا مطالبہ"',
  'ur: "Indeed, I am to you a trustworthy messenger"': 'ur: "بے شک میں تمہارے لیے ایک امانتدار رسول ہوں"',
  "ur: \"Musa's credentials\"": 'ur: "موسیٰ کی اسناد"',
  'ur: "And do not be haughty with Allah"': 'ur: "اور اللہ کے سامنے سرکشی نہ کرو"',
  'ur: "Warning against arrogance before Allah"': 'ur: "اللہ کے سامنے تکبر سے خبردار"',
  'ur: "Indeed, I come to you with clear authority"': 'ur: "بے شک میں تمہارے پاس واضح دلیل لایا ہوں"',
  "ur: \"Musa's miracles as proof\"": 'ur: "بطور ثبوت موسیٰ کے معجزات"',
  'ur: "And indeed, I have sought refuge in my Lord and your Lord, lest you stone me"': 'ur: "اور بے شک میں نے اپنے اور تمہارے رب کی پناہ لی ہے کہ تم مجھے سنگسار نہ کرو"',
  'ur: "Musa seeking divine protection"': 'ur: "موسیٰ کا الٰہی پناہ طلب کرنا"',
  'ur: "But if you do not believe me, then leave me alone"': 'ur: "لیکن اگر تم میرا یقین نہیں کرتے تو مجھ سے الگ رہو"',
  'ur: "Final ultimatum to Pharaoh"': 'ur: "فرعون کو آخری تنبیہ"',
  'ur: "So he called upon his Lord: These are a criminal people"': 'ur: "پس اس نے اپنے رب سے فریاد کی: یہ مجرم قوم ہے"',
  "ur: \"Musa's prayer against Pharaoh's people\"": 'ur: "فرعون کی قوم کے خلاف موسیٰ کی دعا"',

  // exodusAndDestruction
  'ur: "Set out with My servants by night"': 'ur: "رات کو میرے بندوں کو لے کر چلو"',
  'ur: "Command to lead Israelites at night"': 'ur: "رات کو بنی اسرائیل کو لے جانے کا حکم"',
  'ur: "Indeed, you will be pursued"': 'ur: "بے شک تمہارا پیچھا کیا جائے گا"',
  'ur: "Warning that Pharaoh will follow"': 'ur: "فرعون کے پیچھا کرنے کی خبر"',
  'ur: "And leave the sea parted"': 'ur: "اور سمندر کو کھلا چھوڑ دو"',
  'ur: "Miracle of the parted sea"': 'ur: "سمندر کے پھٹنے کا معجزہ"',
  'ur: "Indeed, they are an army to be drowned"': 'ur: "بے شک وہ ڈوبنے والا لشکر ہے"',
  "ur: \"Prophecy of Pharaoh's army drowning\"": 'ur: "فرعون کے لشکر کے ڈوبنے کی پیشگوئی"',
  'ur: "How much they left of gardens and springs"': 'ur: "کتنے باغ اور چشمے چھوڑ گئے"',
  'ur: "Material wealth abandoned"': 'ur: "مادی دولت چھوڑ دی گئی"',
  'ur: "And crops and noble residences"': 'ur: "اور کھیتیاں اور شاندار مکانات"',
  'ur: "Their luxurious dwellings left behind"': 'ur: "ان کی عالیشان رہائش گاہیں پیچھے رہ گئیں"',
  'ur: "And comfort in which they were enjoying themselves"': 'ur: "اور عیش و آرام جس میں وہ مزے لوٹ رہے تھے"',
  'ur: "Pleasures they indulged in"': 'ur: "عیش جس میں وہ مست تھے"',
  'ur: "Thus. And We caused another people to inherit them"': 'ur: "ایسا ہی ہوا۔ اور ہم نے دوسری قوم کو ان کا وارث بنا دیا"',
  'ur: "Transfer of wealth to Israelites"': 'ur: "دولت کی بنی اسرائیل کو منتقلی"',
  'ur: "And the heaven and earth wept not for them"': 'ur: "اور آسمان اور زمین نے ان پر نہیں رویا"',
  'ur: "No cosmic mourning for the wicked"': 'ur: "بدکاروں کے لیے کائناتی ماتم نہیں"',
  'ur: "Nor were they given respite"': 'ur: "اور نہ انہیں مہلت دی گئی"',
  'ur: "No delay in their punishment"': 'ur: "ان کی سزا میں کوئی تاخیر نہیں"',

  // israelitesSaved
  'ur: "And We certainly saved the Children of Israel from the humiliating torment"': 'ur: "اور ہم نے بنی اسرائیل کو ذلت آمیز عذاب سے بچا لیا"',
  'ur: "Divine rescue from oppression"': 'ur: "ظلم سے الٰہی نجات"',
  'ur: "From Pharaoh. Indeed, he was a haughty one among the transgressors"': 'ur: "فرعون سے۔ بے شک وہ حد سے بڑھنے والوں میں بلند تھا"',
  "ur: \"Pharaoh's arrogance highlighted\"": 'ur: "فرعون کے تکبر کی نشاندہی"',
  'ur: "And We chose them, with knowledge, over [all] the worlds"': 'ur: "اور ہم نے انہیں علم کی بنا پر تمام جہانوں پر چن لیا"',
  'ur: "Israelites chosen in their time"': 'ur: "بنی اسرائیل اپنے زمانے میں منتخب ہوئے"',
  'ur: "And We gave them signs in which was a clear trial"': 'ur: "اور ہم نے انہیں نشانیاں دیں جن میں واضح آزمائش تھی"',
  'ur: "Miracles that tested their faith"': 'ur: "معجزات جنہوں نے ان کے ایمان کو آزمایا"',

  // denialOfResurrection
  'ur: "Indeed, these [disbelievers] say"': 'ur: "بے شک یہ (کافر) کہتے ہیں"',
  "ur: \"Introducing Quraysh's denial\"": 'ur: "قریش کے انکار کا تعارف"',
  'ur: "There is not but our first death"': 'ur: "ہماری پہلی موت کے سوا کچھ نہیں"',
  'ur: "Denial of life after death"': 'ur: "موت کے بعد زندگی کا انکار"',
  'ur: "And we will not be resurrected"': 'ur: "اور ہم دوبارہ نہیں اٹھائے جائیں گے"',
  'ur: "Explicit denial of resurrection"': 'ur: "قیامت کا صریح انکار"',
  'ur: "Then bring [back] our forefathers, if you are truthful"': 'ur: "تو ہمارے باپ دادا کو واپس لاؤ اگر تم سچے ہو"',
  'ur: "Their mocking challenge"': 'ur: "ان کا تمسخر آمیز چیلنج"',
  "ur: \"Are they better or the people of Tubba'?\"": 'ur: "کیا یہ بہتر ہیں یا قومِ تبع؟"',
  'ur: "Comparison to destroyed Himyarite kingdom"': 'ur: "تباہ شدہ حمیری سلطنت سے موازنہ"',
  'ur: "And those before them? We destroyed them"': 'ur: "اور ان سے پہلے والوں کو؟ ہم نے انہیں ہلاک کیا"',
  'ur: "Pattern of destruction"': 'ur: "تباہی کا نمونہ"',
  'ur: "Indeed, they were criminals"': 'ur: "بے شک وہ مجرم تھے"',
  'ur: "Reason for their destruction"': 'ur: "ان کی تباہی کی وجہ"',

  // purposefulCreation
  'ur: "And We did not create the heavens and earth and what is between them in play"': 'ur: "اور ہم نے آسمانوں اور زمین اور جو ان کے درمیان ہے کو کھیل میں نہیں بنایا"',
  'ur: "Creation has serious purpose"': 'ur: "تخلیق کا سنجیدہ مقصد ہے"',
  'ur: "We did not create them except in truth"': 'ur: "ہم نے انہیں حق کے ساتھ ہی بنایا"',
  'ur: "Creation founded on truth and justice"': 'ur: "تخلیق حق اور عدل پر قائم ہے"',
  'ur: "But most of them do not know"': 'ur: "لیکن ان میں سے اکثر نہیں جانتے"',
  'ur: "Most people ignorant of this truth"': 'ur: "اکثر لوگ اس حقیقت سے بے خبر"',

  // dayOfJudgment
  'ur: "Indeed, the Day of Judgment is their appointment - all of them"': 'ur: "بے شک یومِ فصل ان سب کا وعدہ ہے"',
  'ur: "Universal gathering for judgment"': 'ur: "فیصلے کے لیے آفاقی اجتماع"',
  'ur: "The Day when no relation will avail a relative at all"': 'ur: "جس دن کوئی دوست کسی دوست کے کام نہ آئے گا"',
  'ur: "No intercession without permission"': 'ur: "اجازت کے بغیر کوئی سفارش نہیں"',
  'ur: "Nor will they be helped"': 'ur: "اور نہ ان کی مدد کی جائے گی"',
  'ur: "No external help available"': 'ur: "کوئی بیرونی مدد دستیاب نہیں"',
  'ur: "Except those on whom Allah has mercy"': 'ur: "سوائے ان کے جن پر اللہ رحم کرے"',
  "ur: \"Only Allah's mercy saves\"": 'ur: "صرف اللہ کی رحمت بچاتی ہے"',
  'ur: "Indeed, He is the Exalted in Might, the Merciful"': 'ur: "بے شک وہ غالب مہربان ہے"',
  'ur: "Power combined with mercy"': 'ur: "قدرت اور رحمت کا اجتماع"',

  // treeOfZaqqum
  'ur: "Indeed, the tree of Zaqqum"': 'ur: "بے شک زقوم کا درخت"',
  'ur: "Tree in Hell described"': 'ur: "جہنم کے درخت کا بیان"',
  'ur: "Is food for the sinful"': 'ur: "گنہگاروں کا کھانا ہے"',
  'ur: "Forced sustenance of sinners"': 'ur: "گنہگاروں کی جبری خوراک"',
  'ur: "Like murky oil, boiling in the bellies"': 'ur: "پگھلی ہوئی دھات کی طرح پیٹوں میں کھولے گا"',
  'ur: "Tormenting effect in stomachs"': 'ur: "پیٹوں میں تکلیف دہ اثر"',
  'ur: "Like the boiling of scalding water"': 'ur: "کھولتے ہوئے گرم پانی کے جوش کی طرح"',
  'ur: "Intensity of the torment"': 'ur: "عذاب کی شدت"',
  'ur: "Seize him and drag him into the midst of the Hellfire"': 'ur: "اسے پکڑو اور جہنم کے بیچ میں گھسیٹ لے جاؤ"',
  'ur: "Command to angels of punishment"': 'ur: "عذاب کے فرشتوں کو حکم"',
  'ur: "Then pour over his head the torment of scalding water"': 'ur: "پھر اس کے سر پر کھولتے پانی کا عذاب انڈیلو"',
  'ur: "Boiling water poured on sinners"': 'ur: "گنہگاروں پر کھولتا پانی ڈالا جائے گا"',
  'ur: "Taste! Indeed, you are the honored, the noble"': 'ur: "چکھو! بے شک تو ہی عزت دار ہے، شریف ہے"',
  'ur: "Ironic mockery of their worldly pride"': 'ur: "ان کے دنیاوی فخر کا طنزیہ مذاق"',
  'ur: "Indeed, this is what you used to dispute"': 'ur: "بے شک یہ وہی ہے جس میں تم شک کرتے تھے"',
  'ur: "Confirmation of what they denied"': 'ur: "جس کا وہ انکار کرتے تھے اس کی تصدیق"',

  // paradiseRewards
  'ur: "Indeed, the righteous will be in a secure place"': 'ur: "بے شک متقین امن کے مقام میں ہوں گے"',
  'ur: "Paradise as place of security"': 'ur: "جنت بطور مقامِ امان"',
  'ur: "In gardens and springs"': 'ur: "باغوں اور چشموں میں"',
  'ur: "Gardens with flowing springs"': 'ur: "بہتے چشموں والے باغات"',
  'ur: "Wearing [garments of] fine silk and brocade"': 'ur: "باریک ریشم اور اطلس پہنے ہوئے"',
  'ur: "Luxurious clothing in Paradise"': 'ur: "جنت میں عالیشان لباس"',
  'ur: "Facing one another"': 'ur: "آمنے سامنے"',
  "ur: \"Companions enjoying each other's company\"": 'ur: "ساتھی ایک دوسرے کی صحبت سے لطف اندوز"',
  'ur: "Thus. And We will marry them to fair women with large eyes"': 'ur: "ایسا ہی ہوگا۔ اور ہم ان کا جوڑا حورانِ عین سے ملائیں گے"',
  "ur: \"Pure companions in Paradise (Hur al-'In)\"": 'ur: "جنت میں پاکیزہ ساتھی (حورِ عین)"',
  'ur: "They will call therein for every [kind of] fruit, safe and secure"': 'ur: "وہ وہاں ہر قسم کا پھل منگوائیں گے امن سے"',
  'ur: "All fruits available without fear"': 'ur: "بے خوف ہر پھل دستیاب"',
  'ur: "They will not taste death therein except the first death"': 'ur: "وہاں پہلی موت کے سوا انہیں موت نہیں آئے گی"',
  'ur: "No death in Paradise - eternal life"': 'ur: "جنت میں موت نہیں - ابدی زندگی"',
  'ur: "And He will have protected them from the punishment of Hellfire"': 'ur: "اور اللہ نے انہیں دوزخ کے عذاب سے بچا لیا ہوگا"',
  'ur: "Saved from Hell"': 'ur: "جہنم سے نجات"',
  'ur: "As bounty from your Lord"': 'ur: "تمہارے رب کے فضل سے"',
  "ur: \"All rewards are Allah's favor\"": 'ur: "تمام انعامات اللہ کا فضل ہیں"',
  'ur: "That is the great attainment"': 'ur: "یہی بڑی کامیابی ہے"',
  'ur: "Ultimate success"': 'ur: "حتمی کامیابی"',

  // quranAndProphet
  'ur: "Indeed, We have made it easy in your tongue"': 'ur: "بے شک ہم نے اسے تمہاری زبان میں آسان کیا"',
  'ur: "Quran revealed in Arabic for accessibility"': 'ur: "قرآن عربی میں نازل کیا تاکہ آسان ہو"',
  'ur: "That they might be reminded"': 'ur: "تاکہ وہ نصیحت حاصل کریں"',
  'ur: "Purpose - remembrance and reflection"': 'ur: "مقصد - یاددہانی اور غور و فکر"',
  'ur: "So watch; indeed, they are watching"': 'ur: "پس انتظار کرو بے شک وہ بھی انتظار کر رہے ہیں"',
  'ur: "Mutual waiting - truth will prevail"': 'ur: "باہمی انتظار - حق غالب آئے گا"',

  // thematicFlow stages
  'ur: "Ha-Mim, oath by Quran, Laylat al-Qadr, Tawhid"': 'ur: "حم، قرآن کی قسم، لیلۃ القدر، توحید"',
  'ur: "Warning of smoke, people\'s plea, temporary respite, great seizure"': 'ur: "دھوئیں کی تنبیہ، لوگوں کی فریاد، عارضی مہلت، بڑی پکڑ"',
  'ur: "Musa sent, demand to free Israelites, exodus, drowning, inheritance"': 'ur: "موسیٰ بھیجے گئے، بنی اسرائیل کی آزادی کا مطالبہ، ہجرت، غرق، وراثت"',
  'ur: "Quraysh deny afterlife, Tubba\' mentioned, purposeful creation"': 'ur: "قریش کا آخرت سے انکار، تبع کا ذکر، مقصدی تخلیق"',
  'ur: "Day of Separation, no intercession except by Allah\'s mercy"': 'ur: "یومِ فصل، اللہ کی رحمت کے بغیر کوئی سفارش نہیں"',
  'ur: "Tree of Zaqqum, boiling drink, mockery of their pride"': 'ur: "زقوم کا درخت، کھولتا مشروب، ان کے فخر کا مذاق"',
  'ur: "Gardens, springs, silk, companions, fruits, eternal life"': 'ur: "باغات، چشمے، ریشم، ساتھی، پھل، ابدی زندگی"',
  'ur: "Quran made easy, command to watch"': 'ur: "قرآن آسان کیا گیا، انتظار کا حکم"',

  // keyTerms
  'ur: "The Smoke"': 'ur: "دھواں"',
  'ur: "A major eschatological sign, either referring to a severe famine during Prophet\'s time or a future sign before Day of Judgment"': 'ur: "آخرت کی ایک بڑی نشانی، یا نبی ﷺ کے زمانے میں شدید قحط کا حوالہ یا قیامت سے پہلے کی آنے والی نشانی"',
  'ur: "A blessed night"': 'ur: "ایک مبارک رات"',
  'ur: "Identified as Laylat al-Qadr when Quran was revealed and decrees are determined"': 'ur: "لیلۃ القدر کے طور پر پہچانی جاتی ہے جب قرآن نازل ہوا اور فیصلے طے ہوتے ہیں"',
  'ur: "Tree of Zaqqum"': 'ur: "زقوم کا درخت"',
  'ur: "A tree in Hell with bitter fruit that torments its eaters"': 'ur: "جہنم کا ایک درخت جس کا کڑوا پھل کھانے والوں کو عذاب دیتا ہے"',
  'ur: "The Greatest Assault/Seizure"': 'ur: "سب سے بڑی پکڑ"',
  'ur: "Either the Battle of Badr or the final Day of Judgment"': 'ur: "غزوۂ بدر یا آخری یومِ قیامت"',
  'ur: "Day of Separation/Decision"': 'ur: "فیصلے کا دن"',
  'ur: "Day when truth is separated from falsehood, believers from disbelievers"': 'ur: "جس دن حق باطل سے اور مومن کافروں سے الگ ہوں گے"',

  // linguisticFeatures
  'ur: "Part of the Ha-Mim series, creating unity among surahs 40-46"': 'ur: "حوامیم سلسلے کا حصہ، سورتوں 40-46 میں وحدت پیدا کرتا ہے"',
  'ur: "Emphasizes divine action without specifying agent"': 'ur: "فاعل بتائے بغیر الٰہی فعل پر زور دیتا ہے"',
  'ur: "Personalized address heightening impact of judgment"': 'ur: "ذاتی خطاب جو فیصلے کے اثر کو بڑھاتا ہے"',
  'ur: "Emphasizes impossibility of late remembrance"': 'ur: "دیر سے نصیحت کی ناممکنیت پر زور"',
  'ur: "Vivid imagery of Zaqqum\'s torment"': 'ur: "زقوم کے عذاب کی جاندار تصویر کشی"',
  "ur: \"Surah 44 is part of the seven 'Ha-Mim' surahs (40-46), all beginning with these letters and sharing themes of revelation, warning, and the fate of nations.\"": 'ur: "سورت 44 سات حوامیم سورتوں (40-46) کا حصہ ہے جو سب ان حروف سے شروع ہوتی ہیں اور وحی، تنبیہ اور قوموں کے انجام کے موضوعات میں مشترک ہیں۔"',

  // historicalContext
  "ur: \"Ad-Dukhan was revealed in Makkah during a period of intense opposition to the Prophet. The Quraysh denied resurrection, mocked the message, and persecuted believers. The surah warns them through the story of Pharaoh's destruction and prophecies the 'smoke' sign. Some scholars interpret the smoke as the severe famine that afflicted Makkah, during which people saw smoke-like mirages due to extreme hunger, and the 'great seizure' as the Battle of Badr. Others view both as eschatological signs yet to occur.\"": 'ur: "الدخان مکہ میں نبی ﷺ کی شدید مخالفت کے دور میں نازل ہوئی۔ قریش نے قیامت کا انکار کیا، پیغام کا مذاق اڑایا اور مومنوں کو ایذائیں دیں۔ سورت فرعون کی تباہی کے قصے سے انہیں خبردار کرتی ہے اور دھوئیں کی نشانی کی پیشگوئی کرتی ہے۔ بعض علماء دھوئیں کی تفسیر مکہ پر آنے والے شدید قحط سے کرتے ہیں جب لوگوں کو بھوک سے دھوئیں جیسے نظارے دکھتے تھے اور بڑی پکڑ سے مراد غزوۂ بدر لیتے ہیں۔ دوسرے دونوں کو آنے والی آخرت کی نشانیاں سمجھتے ہیں۔"',

  // uniqueInsight
  'ur: "The Night of Decree and the Day of Separation"': 'ur: "شبِ قدر اور یومِ فصل"',
  "ur: \"Ad-Dukhan uniquely connects two pivotal moments: Laylat al-Qadr (when Quran was revealed and decrees are determined) and Yawm al-Fasl (when all decrees manifest). This creates a theological bridge between divine knowledge and divine judgment. What Allah decrees on the blessed night will be fully realized on the Day of Separation. The surah moves from the mercy of revelation to the reality of recompense, with Pharaoh's story serving as a historical proof that those who reject guidance face certain destruction. The contrast between the tree of Zaqqum and the gardens of Paradise demonstrates the two ultimate destinations awaiting humanity.\"": 'ur: "الدخان دو اہم لمحات کو منفرد طریقے سے جوڑتی ہے: لیلۃ القدر (جب قرآن نازل ہوا اور فیصلے طے ہوتے ہیں) اور یومِ فصل (جب تمام فیصلے ظاہر ہوتے ہیں)۔ یہ الٰہی علم اور الٰہی فیصلے کے درمیان ایک عقائدی پل بناتی ہے۔ اللہ جو مبارک رات میں طے کرتا ہے وہ یومِ فصل میں مکمل طور پر ظاہر ہوگا۔ سورت وحی کی رحمت سے بدلے کی حقیقت کی طرف بڑھتی ہے اور فرعون کا قصہ تاریخی ثبوت ہے کہ ہدایت کے منکرین یقینی تباہی کا سامنا کرتے ہیں۔ زقوم کے درخت اور جنت کے باغات کا تضاد انسانیت کے دو حتمی ٹھکانے واضح کرتا ہے۔"',
};

let replaced = 0;
for (const [from, to] of Object.entries(map)) {
  if (content.includes(from)) {
    content = content.replaceAll(from, to);
    replaced++;
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log(`044.js: Replaced ${replaced} translation keys`);
