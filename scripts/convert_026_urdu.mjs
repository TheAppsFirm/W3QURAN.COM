/**
 * Convert 026.js ontology to bilingual {en, ur} format
 * Comprehensive Urdu translations for Surah Ash-Shu'ara
 */
import fs from 'fs';

// Read file
const filePath = 'src/data/treebank/ontology/026.js';
let content = fs.readFileSync(filePath, 'utf8');

// Translation map: English -> Urdu for meaning/explanation fields in concepts
const translations = {
  // musaStoryPart5
  "He said: If you take a god other than me, I will imprison you": "اس نے کہا: اگر تم نے میرے سوا کوئی معبود بنایا تو میں تمہیں قیدیوں میں شامل کر دوں گا",
  "Pharaoh's threat": "فرعون کی دھمکی",
  "He said: Even if I brought you clear proof?": "اس نے کہا: اگرچہ میں تمہارے پاس واضح ثبوت لاؤں؟",
  "Musa offers evidence": "موسیٰ نے دلیل پیش کی",
  "So he threw his staff and it became a clear serpent": "تو اس نے عصا پھینکا اور وہ واضح اژدہا بن گیا",
  "First miracle": "پہلا معجزہ",
  "He drew out his hand and it was white for beholders": "اس نے اپنا ہاتھ نکالا تو وہ دیکھنے والوں کے لیے سفید چمکدار تھا",
  "Second miracle": "دوسرا معجزہ",
  "He said to the eminent ones: This is a learned magician": "اس نے اعیان سے کہا: یہ تو ایک ماہر جادوگر ہے",
  "Pharaoh's dismissal as magic": "فرعون نے جادو کہہ کر ٹال دیا",
  "He wants to drive you out of your land by his magic": "یہ اپنے جادو سے تمہیں تمہاری زمین سے نکالنا چاہتا ہے",
  "Political accusation": "سیاسی الزام",
  "They said: Postpone him and his brother and send gatherers to the cities": "انہوں نے کہا: اسے اور اس کے بھائی کو مہلت دو اور شہروں میں جمع کرنے والے بھیجو",
  "Plan to summon magicians": "جادوگروں کو بلانے کا منصوبہ",
  "To bring every skilled magician": "ہر ماہر جادوگر کو لانے کے لیے",
  "Gathering magicians": "جادوگروں کو جمع کرنا",

  // musaStoryPart6
  "So the magicians were assembled for appointment of a known day": "تو جادوگر ایک مقررہ دن کی میعاد پر جمع کیے گئے",
  "Public contest arranged": "عوامی مقابلے کا بندوبست",
  "And it was said to people: Will you assemble?": "لوگوں سے کہا گیا: کیا تم جمع ہوتے ہو؟",
  "Public gathering called": "عوامی اجتماع بلایا گیا",
  "Perhaps we will follow the magicians if they prevail": "شاید ہم جادوگروں کی پیروی کریں اگر وہ غالب آئے",
  "Stakes of the contest": "مقابلے کی اہمیت",
  "They said to Pharaoh: Is there a reward if we prevail?": "انہوں نے فرعون سے کہا: کیا ہمارے لیے اجر ہے اگر ہم غالب آئے؟",
  "Magicians bargain": "جادوگروں کا سودا",
  "He said: Yes, and you will be among those near me": "اس نے کہا: ہاں، اور تم میرے مقربین میں سے ہو گے",
  "Promise of status": "مقام کا وعدہ",
  "Musa said: Throw what you will throw": "موسیٰ نے کہا: جو پھینکنا ہے پھینک دو",
  "Musa's confidence": "موسیٰ کا اعتماد",
  "So they threw their ropes and staffs": "تو انہوں نے اپنی رسیاں اور لاٹھیاں پھینکیں",
  "Magicians' trick": "جادوگروں کا داؤ",
  "And said: By Pharaoh's might, we will prevail": "اور کہا: فرعون کی عزت کی قسم، ہم ہی غالب آئیں گے",
  "Swearing by Pharaoh": "فرعون کی قسم",
  "Then Musa threw his staff and it swallowed what they faked": "پھر موسیٰ نے اپنا عصا پھینکا تو وہ ان کی بنائی ہوئی چیزوں کو نگل گیا",
  "Truth devours falsehood": "حق نے باطل کو نگل لیا",

  // musaStoryPart7
  "So the magicians fell in prostration": "تو جادوگر سجدے میں گر پڑے",
  "Immediate submission to truth": "حق کے سامنے فوری سر تسلیم خم",
  "They said: We believe in the Lord of the worlds": "انہوں نے کہا: ہم رب العالمین پر ایمان لائے",
  "Declaration of faith": "ایمان کا اعلان",
  "Lord of Musa and Harun": "موسیٰ اور ہارون کا رب",
  "Specifying their belief": "اپنے ایمان کی تصریح",
  "He said: You believed before I gave permission": "اس نے کہا: تم نے میری اجازت سے پہلے ایمان لے آئے",
  "Pharaoh's outrage": "فرعون کا غصہ",
  "He is your chief who taught you magic": "یہ تمہارا بڑا ہے جس نے تمہیں جادو سکھایا",
  "Pharaoh's conspiracy theory": "فرعون کی سازشی تھیوری",
  "So you will know": "تو تم جلد جان لو گے",
  "Pharaoh's ominous warning": "فرعون کی منحوس دھمکی",
  "I will cut your hands and feet on opposite sides": "میں تمہارے ہاتھ اور پاؤں الٹے سیدھے کاٹ دوں گا",
  "Torture threat": "اذیت کی دھمکی",
  "And I will crucify you all": "اور میں تم سب کو سولی دے دوں گا",
  "Death threat": "موت کی دھمکی",

  // musaStoryPart8
  "They said: No harm": "انہوں نے کہا: کوئی نقصان نہیں",
  "Fearless response": "بے خوف جواب",
  "Indeed to our Lord we will return": "بے شک ہم اپنے رب کی طرف لوٹنے والے ہیں",
  "Trust in afterlife": "آخرت پر بھروسا",
  "We hope our Lord forgives our sins": "ہمیں امید ہے ہمارا رب ہماری خطائیں معاف کر دے",
  "Hope for forgiveness": "مغفرت کی امید",
  "Since we are the first believers": "کیونکہ ہم پہلے ایمان لانے والے ہیں",
  "Pride in being first to believe": "پہلے ایمان لانے پر فخر",

  // musaStoryPart9
  "We revealed to Musa: Travel by night with My servants": "ہم نے موسیٰ کو وحی کی: رات کو میرے بندوں کو لے کر چلو",
  "Command to leave Egypt": "مصر سے نکلنے کا حکم",
  "You will be pursued": "تمہارا پیچھا کیا جائے گا",
  "Warning of pursuit": "پیچھا کرنے کی تنبیہ",
  "So Pharaoh sent gatherers to the cities": "تو فرعون نے شہروں میں جمع کرنے والے بھیجے",
  "Pharaoh mobilizes army": "فرعون نے فوج جمع کی",
  "Indeed these are a small band": "بے شک یہ ایک چھوٹی سی جماعت ہے",
  "Pharaoh's dismissal": "فرعون کی تحقیر",
  "And they have enraged us": "اور انہوں نے ہمیں غصے میں لایا ہے",
  "Pharaoh's anger": "فرعون کا غصہ",
  "And we are all cautious": "اور ہم سب چوکنے ہیں",
  "Military preparation": "فوجی تیاری",
  "So We removed them from gardens and springs": "تو ہم نے انہیں باغوں اور چشموں سے نکال دیا",
  "Egypt's loss of Pharaoh's people": "فرعون کی قوم سے مصر کا نقصان",
  "And treasures and noble position": "اور خزانوں اور عزت دار مقام سے",
  "Worldly loss": "دنیاوی نقصان",
  "Thus, and We made Israel inherit it": "اسی طرح اور ہم نے بنی اسرائیل کو اس کا وارث بنا دیا",
  "Transfer of inheritance": "وراثت کی منتقلی",

  // musaStoryPart10
  "So they pursued them at sunrise": "تو انہوں نے سورج نکلتے وقت ان کا پیچھا کیا",
  "Chase at dawn": "فجر کے وقت پیچھا",
  "When the two groups saw each other": "جب دونوں گروہ آمنے سامنے آئے",
  "Confrontation moment": "ٹکراؤ کا لمحہ",
  "Companions of Musa said: We will be overtaken": "موسیٰ کے ساتھیوں نے کہا: ہم پکڑے جائیں گے",
  "Moment of fear": "خوف کا لمحہ",
  "He said: No! My Lord is with me, He will guide me": "اس نے کہا: ہرگز نہیں! میرا رب میرے ساتھ ہے، وہ مجھے رہنمائی کرے گا",
  "Musa's absolute trust": "موسیٰ کا مکمل بھروسا",
  "We revealed to Musa: Strike the sea with your staff": "ہم نے موسیٰ کو وحی کی: سمندر پر اپنا عصا مارو",
  "Command to part sea": "سمندر چیرنے کا حکم",
  "So it parted, each part like a great mountain": "تو وہ پھٹ گیا، ہر حصہ بڑے پہاڑ کی طرح",
  "Sea splits into towering walls": "سمندر بلند دیواروں میں بٹ گیا",
  "And We brought near the others there": "اور ہم نے وہاں دوسروں کو قریب لے آئے",
  "Pharaoh's army approaches": "فرعون کی فوج قریب آئی",
  "And We saved Musa and all those with him": "اور ہم نے موسیٰ اور سب ساتھیوں کو بچا لیا",
  "Believers saved": "مومنین بچا لیے گئے",
  "Then We drowned the others": "پھر ہم نے باقیوں کو ڈبو دیا",
  "Pharaoh's army destroyed": "فرعون کی فوج تباہ ہوئی",
  "In that is a sign, but most were not believers": "اس میں نشانی ہے لیکن اکثر ایمان نہیں لائے",
  "Lesson and reality": "عبرت اور حقیقت",

  // ibrahimStory
  "Recite to them the story of Ibrahim": "ان کو ابراہیم کا قصہ سناؤ",
  "Command to narrate": "بیان کرنے کا حکم",
  "When he said to his father and people: What do you worship?": "جب اس نے اپنے باپ اور قوم سے کہا: تم کس کی عبادت کرتے ہو؟",
  "Opening challenge": "پہلا چیلنج",
  "They said: We worship idols and remain devoted to them": "انہوں نے کہا: ہم بتوں کی پوجا کرتے ہیں اور ان کے لیے عبادت گزار رہتے ہیں",
  "Confession of idolatry": "بت پرستی کا اعتراف",
  "He said: Do they hear you when you call?": "اس نے کہا: کیا وہ تمہاری سنتے ہیں جب تم پکارتے ہو؟",
  "First logical question": "پہلا منطقی سوال",
  "Or do they benefit or harm you?": "یا تمہیں فائدہ یا نقصان پہنچاتے ہیں؟",
  "Second logical question": "دوسرا منطقی سوال",
  "They said: We found our fathers doing so": "انہوں نے کہا: ہم نے اپنے باپ دادا کو ایسا کرتے پایا",
  "Appeal to tradition": "روایت کی دہائی",
  "He said: Have you considered what you worship?": "اس نے کہا: کیا تم نے غور کیا جس کی تم عبادت کرتے ہو؟",
  "Ibrahim challenges tradition": "ابراہیم نے روایت کو چیلنج کیا",
  "You and your ancient forefathers?": "تم اور تمہارے پرانے باپ دادا؟",
  "Questioning generations": "نسلوں پر سوال",
  "They are enemies to me, except the Lord of the worlds": "وہ سب میرے دشمن ہیں سوائے رب العالمین کے",
  "Rejection of false gods": "جھوٹے معبودوں کا انکار",

  // ibrahimPraise
  "Who created me, and He guides me": "جس نے مجھے پیدا کیا، وہی مجھے ہدایت دیتا ہے",
  "Creator and Guide": "خالق اور ہادی",
  "Who feeds me and gives me drink": "جو مجھے کھلاتا اور پلاتا ہے",
  "Provider of sustenance": "رزق دینے والا",
  "When I am ill, He heals me": "جب میں بیمار ہوتا ہوں تو وہی شفا دیتا ہے",
  "Healer - illness attributed to self, healing to Allah": "شفا دینے والا - بیماری خود کی طرف، شفا اللہ کی طرف",
  "Who will cause me to die and then bring me back": "جو مجھے موت دے گا اور پھر زندہ کرے گا",
  "Lord of death and resurrection": "موت اور حیات کا مالک",
  "Who I hope will forgive my sins on Judgment Day": "جس سے مجھے امید ہے کہ قیامت کے دن میرے گناہ معاف کرے",
  "Forgiver on Day of Judgment": "قیامت کے دن معاف کرنے والا",

  // ibrahimDua
  "My Lord, grant me wisdom and join me with the righteous": "اے میرے رب، مجھے حکمت دے اور نیک لوگوں میں شامل کر",
  "Prayer for wisdom and company": "حکمت اور صحبت کی دعا",
  "And grant me a truthful mention among later generations": "اور بعد کے لوگوں میں میرا سچا ذکر رکھ",
  "Prayer for lasting good reputation": "پائیدار نیک نامی کی دعا",
  "Make me among the inheritors of Paradise": "مجھے جنت النعیم کے وارثوں میں شامل فرما",
  "Prayer for Paradise": "جنت کی دعا",
  "And forgive my father, he was among the astray": "اور میرے باپ کو معاف فرما، وہ گمراہوں میں سے تھا",
  "Prayer for father - before prohibition": "باپ کے لیے دعا - ممانعت سے پہلے",
  "Do not disgrace me on the Day they are resurrected": "مجھے اس دن رسوا نہ کرنا جب لوگ اٹھائے جائیں گے",
  "Prayer for dignity on Judgment Day": "قیامت کے دن عزت کی دعا",
  "Day when neither wealth nor children will benefit": "جس دن مال و اولاد کام نہیں آئیں گے",
  "Description of Judgment Day": "قیامت کے دن کی تصویر",
  "Except one who comes to Allah with a sound heart": "مگر وہ جو اللہ کے پاس سلامت دل لے کر آئے",
  "The only thing that benefits - pure heart": "صرف ایک چیز فائدہ دیتی ہے - پاک دل",

  // paradiseAndHell
  "Paradise will be brought near the God-fearing": "جنت متقیوں کے قریب لائی جائے گی",
  "Paradise approaches the pious": "جنت پرہیزگاروں کے قریب آتی ہے",
  "Hellfire will be displayed for the deviators": "جہنم گمراہوں کے لیے ظاہر کی جائے گی",
  "Hell exposed to sinners": "جہنم گناہگاروں کو دکھائی گئی",
  "They will be asked: Where are those you worshipped?": "ان سے پوچھا جائے گا: کہاں ہیں وہ جن کی تم عبادت کرتے تھے؟",
  "Question about false gods": "جھوٹے معبودوں کے بارے میں سوال",
  "Besides Allah? Can they help you or themselves?": "اللہ کے سوا؟ کیا وہ تمہاری یا اپنی مدد کر سکتے ہیں؟",
  "Helplessness of idols": "بتوں کی بے بسی",
  "They will be thrown into it, they and the deviators": "وہ اس میں پھینکے جائیں گے، وہ اور گمراہ",
  "Idols and worshippers together in Hell": "بت اور ان کے پجاری ایک ساتھ جہنم میں",
  "And the soldiers of Iblis, all of them": "اور ابلیس کے تمام لشکر",
  "Shaytan's army also punished": "شیطان کی فوج کو بھی سزا",

  // hellDialogue
  "They will say while disputing therein": "وہ اس میں جھگڑتے ہوئے کہیں گے",
  "Arguments in Hell": "جہنم میں بحث",
  "By Allah, we were in clear error": "اللہ کی قسم، ہم واضح گمراہی میں تھے",
  "Confession too late": "بہت دیر سے اعتراف",
  "When we equated you with Lord of the worlds": "جب ہم نے تمہیں رب العالمین کے برابر ٹھہرایا",
  "Sin of equating idols with Allah": "بتوں کو اللہ کے برابر ٹھہرانے کا گناہ",
  "Only the criminals led us astray": "ہمیں صرف مجرموں نے گمراہ کیا",
  "Blaming their leaders": "اپنے سرداروں کو الزام دینا",
  "So we have no intercessors": "تو ہمارا کوئی سفارشی نہیں",
  "No one to intercede": "کوئی سفارش کرنے والا نہیں",
  "Nor a close friend": "نہ کوئی قریبی دوست",
  "No true friends": "کوئی سچا دوست نہیں",
  "If only we could return and be believers": "کاش ہم واپس جائیں اور مومن بن جائیں",
  "Futile wish for return": "واپسی کی بے سود تمنا",

  // nuhStory
  "The people of Nuh denied the messengers": "نوح کی قوم نے رسولوں کو جھٹلایا",
  "Denial of all messengers by denying one": "ایک رسول کا انکار سب رسولوں کا انکار ہے",
  "When their brother Nuh said: Will you not fear Allah?": "جب ان کے بھائی نوح نے کہا: کیا تم اللہ سے نہیں ڈرتے؟",
  "Nuh from among them": "نوح ان میں سے ہی تھے",
  "I am a trustworthy messenger to you": "میں تمہارے لیے ایک امانت دار رسول ہوں",
  "Trustworthiness claim": "امانتداری کا دعویٰ",
  "So fear Allah and obey me": "تو اللہ سے ڈرو اور میری اطاعت کرو",
  "Two commands": "دو احکام",
  "I ask no payment from you": "میں تم سے کوئی اجر نہیں مانگتا",
  "No worldly motive": "کوئی دنیاوی مقصد نہیں",
  "My reward is only from the Lord of the worlds": "میرا اجر صرف رب العالمین کے ذمے ہے",
  "Seeking Allah's reward only": "صرف اللہ کا اجر چاہنا",
  "They said: Shall we believe you when the lowest follow you?": "انہوں نے کہا: کیا ہم تم پر ایمان لائیں جبکہ تمہارے پیروکار نچلے لوگ ہیں؟",
  "Rejection based on followers' status": "پیروکاروں کی حیثیت کی بنا پر رد",
  "He said: What knowledge do I have of what they did?": "اس نے کہا: مجھے کیا علم کہ وہ کیا کرتے تھے؟",
  "Nuh doesn't judge backgrounds": "نوح لوگوں کے پس منظر کا فیصلہ نہیں کرتے",
  "Their account is only with my Lord": "ان کا حساب صرف میرے رب کے پاس ہے",
  "Allah judges, not prophet": "فیصلہ اللہ کرتا ہے، نبی نہیں",
  "And I will not drive away the believers": "اور میں مومنوں کو نہیں دھتکاروں گا",
  "Refusing to reject poor believers": "غریب مومنوں کو رد کرنے سے انکار",
  "I am only a clear warner": "میں صرف کھلا تنبیہ کرنے والا ہوں",
  "Role defined": "کردار کی وضاحت",
  "They said: If you don't stop, Nuh, you will be stoned": "انہوں نے کہا: اے نوح اگر تم باز نہ آئے تو سنگسار کر دیے جاؤ گے",
  "Death threat": "موت کی دھمکی",
  "He said: My Lord, my people have denied me": "اس نے کہا: اے میرے رب، میری قوم نے مجھے جھٹلا دیا",
  "Nuh's complaint to Allah": "نوح کی اللہ سے فریاد",
  "So judge between me and them decisively": "تو میرے اور ان کے درمیان فیصلہ کن فیصلہ فرما",
  "Request for judgment": "فیصلے کی درخواست",
  "And save me and the believers with me": "اور مجھے اور میرے ساتھ کے مومنوں کو بچا لے",
  "Prayer for salvation": "نجات کی دعا",
  "So We saved him and those with him in the laden ship": "تو ہم نے اسے اور اس کے ساتھیوں کو بھری ہوئی کشتی میں بچا لیا",
  "Salvation in the Ark": "کشتی میں نجات",
  "Then We drowned the rest": "پھر ہم نے باقیوں کو ڈبو دیا",
  "Flood destroys deniers": "طوفان نے منکرین کو تباہ کیا",
};

// Additional translations for remaining categories
const moreTranslations = {
  // hudStory
  "'Ad denied the messengers": "عاد نے رسولوں کو جھٹلایا",
  "Denial pattern continues": "انکار کا سلسلہ جاری",
  "When their brother Hud said: Will you not fear Allah?": "جب ان کے بھائی ہود نے کہا: کیا تم اللہ سے نہیں ڈرتے؟",
  "Hud from among them": "ہود ان ہی میں سے تھے",
  "Same claim as Nuh": "نوح جیسا ہی دعویٰ",
  "Same commands": "وہی احکام",
  "Do you build on every elevation a sign for amusement?": "کیا تم ہر اونچی جگہ بے مقصد نشانی بناتے ہو؟",
  "Criticism of vanity projects": "بے مقصد منصوبوں پر تنقید",
  "And take for yourselves palaces hoping to live forever?": "اور محلات بناتے ہو گویا ہمیشہ رہو گے؟",
  "Criticism of false immortality hopes": "جھوٹی ابدیت کی امید پر تنقید",
  "When you strike, you strike as tyrants": "جب تم پکڑتے ہو تو جابروں کی طرح پکڑتے ہو",
  "Criticism of oppression": "ظلم پر تنقید",
  "Repeated call": "دوبارہ پکار",
  "Fear Him who provided you with what you know": "اس سے ڈرو جس نے تمہیں وہ سب دیا جو تم جانتے ہو",
  "Reminder of blessings": "نعمتوں کی یاد دہانی",
  "Provided you with livestock and children": "تمہیں مویشی اور اولاد عطا کیے",
  "Specific blessings": "مخصوص نعمتیں",
  "And gardens and springs": "اور باغات اور چشمے",
  "More blessings": "مزید نعمتیں",
  "I fear for you punishment of a great Day": "مجھے تمہارے لیے ایک بڑے دن کے عذاب کا ڈر ہے",
  "Warning of Judgment": "قیامت کی تنبیہ",
  "They said: Same to us whether you advise or not": "انہوں نے کہا: ہمارے لیے برابر ہے چاہے تم نصیحت کرو یا نہ کرو",
  "Complete indifference": "مکمل بے حسی",
  "This is nothing but custom of the ancients": "یہ تو بس پہلے لوگوں کا طریقہ ہے",
  "Dismissing as old tales": "پرانی کہانیاں کہہ کر ٹالنا",
  "And we will not be punished": "اور ہمیں عذاب نہیں ہوگا",
  "Denial of punishment": "عذاب کا انکار",
  "So they denied him and We destroyed them": "تو انہوں نے اسے جھٹلایا اور ہم نے انہیں تباہ کر دیا",
  "Consequence of denial": "انکار کا نتیجہ",

  // salihStory
  "Thamud denied the messengers": "ثمود نے رسولوں کو جھٹلایا",
  "Another nation denies": "ایک اور قوم نے انکار کیا",
  "When their brother Salih said: Will you not fear Allah?": "جب ان کے بھائی صالح نے کہا: کیا تم اللہ سے نہیں ڈرتے؟",
  "Salih from among them": "صالح ان ہی میں سے تھے",
  "Will you be left secure in what is here?": "کیا تم اس میں جو یہاں ہے محفوظ چھوڑ دیے جاؤ گے؟",
  "Challenge to their security": "ان کے تحفظ پر سوال",
  "In gardens and springs": "باغوں اور چشموں میں",
  "Their comfortable life": "ان کی آرام دہ زندگی",
  "And crops and date-palms with soft fruit": "اور کھیتیاں اور نرم گابھوں والے کھجور کے درخت",
  "Agricultural blessings": "زرعی نعمتیں",
  "You carve from mountains homes skillfully": "اور تم پہاڑوں میں مہارت سے گھر تراشتے ہو",
  "Architectural achievements": "تعمیراتی کارنامے",
  "Do not obey the command of the transgressors": "حد سے بڑھنے والوں کا حکم نہ مانو",
  "Warning against corrupt leaders": "بگڑے ہوئے سرداروں سے خبردار",
  "Who cause corruption and do not reform": "جو زمین میں فساد پھیلاتے ہیں اور اصلاح نہیں کرتے",
  "Description of transgressors": "حد سے بڑھنے والوں کی تفصیل",
  "They said: You are but of the bewitched": "انہوں نے کہا: تم تو جادو زدہ لوگوں میں سے ہو",
  "Accusation of being enchanted": "جادو زدہ ہونے کا الزام",
  "You are only a human like us": "تم تو ہم جیسے انسان ہو",
  "Rejection based on humanity": "انسان ہونے کی بنا پر رد",
  "So bring a sign if you are truthful": "تو کوئی نشانی لاؤ اگر تم سچے ہو",
  "Demand for proof": "ثبوت کا مطالبہ",
  "He said: This is a she-camel; she has a drink and you a drink on an appointed day": "اس نے کہا: یہ اونٹنی ہے؛ ایک دن اس کے پانی پینے کا اور ایک مقررہ دن تمہارے پانی پینے کا",
  "Miraculous she-camel": "معجزاتی اونٹنی",
  "Do not touch her with harm lest punishment of a great day seize you": "اسے نقصان نہ پہنچانا ورنہ ایک بڑے دن کا عذاب تمہیں پکڑ لے گا",
  "Warning about harming camel": "اونٹنی کو نقصان پہنچانے کی تنبیہ",
  "But they hamstrung her and became regretful": "لیکن انہوں نے اسے کاٹ ڈالا اور پچھتانے لگے",
  "They killed it and regretted": "انہوں نے اسے مار ڈالا اور پچھتائے",
  "So the punishment seized them": "تو عذاب نے انہیں پکڑ لیا",
  "Divine punishment came": "الٰہی عذاب آ گیا",
};

// Even more translations for remaining sections
const evenMoreTranslations = {
  // lutStory
  "The people of Lut denied the messengers": "لوط کی قوم نے رسولوں کو جھٹلایا",
  "Pattern of denial": "انکار کا نمونہ",
  "When their brother Lut said: Will you not fear Allah?": "جب ان کے بھائی لوط نے کہا: کیا تم اللہ سے نہیں ڈرتے؟",
  "Lut's call to his people": "لوط کی اپنی قوم کو پکار",
  "Do you approach males of the worlds?": "کیا تم دنیا میں مردوں کے پاس جاتے ہو؟",
  "Condemning their sin": "ان کے گناہ کی مذمت",
  "And leave what your Lord created for you of your wives": "اور تمہارے رب نے جو تمہاری بیویاں تمہارے لیے بنائی ہیں انہیں چھوڑتے ہو",
  "Abandoning natural way": "فطری طریقہ چھوڑنا",
  "Rather, you are a transgressing people": "بلکہ تم حد سے بڑھنے والی قوم ہو",
  "Judgment on them": "ان پر فیصلہ",
  "They said: If you don't stop, Lut, you will be expelled": "انہوں نے کہا: اے لوط، اگر باز نہ آئے تو نکال دیے جاؤ گے",
  "Threat of expulsion": "نکالنے کی دھمکی",
  "He said: I am of those who detest your deed": "اس نے کہا: میں تمہارے عمل سے سخت نفرت کرنے والوں میں سے ہوں",
  "Lut's disgust with their sin": "لوط کی ان کے گناہ سے نفرت",
  "My Lord, save me and my family from what they do": "اے میرے رب، مجھے اور میرے گھر والوں کو ان کے کاموں سے بچا لے",
  "Lut's prayer for salvation": "لوط کی نجات کی دعا",
  "So We saved him and his family, all": "تو ہم نے اسے اور اس کے پورے گھر والوں کو بچا لیا",
  "Family saved": "خاندان بچا لیا گیا",
  "Except an old woman among those who remained": "سوائے ایک بوڑھی عورت جو پیچھے رہ جانے والوں میں تھی",
  "His wife stayed behind": "اس کی بیوی پیچھے رہ گئی",
  "Then We destroyed the others": "پھر ہم نے باقیوں کو تباہ کر دیا",
  "Destruction of sinners": "گناہگاروں کی تباہی",
  "And We rained upon them a rain": "اور ہم نے ان پر ایک بارش برسائی",
  "Rain of stones": "پتھروں کی بارش",
  "Evil was the rain of those warned": "کیا بری تھی ان تنبیہ شدہ لوگوں کی بارش",
  "Terrible punishment": "خوفناک سزا",

  // shuaybStory
  "The companions of the thicket denied the messengers": "اصحاب الایکہ (جھاڑیوں والوں) نے رسولوں کو جھٹلایا",
  "People of the woods/Midian": "جنگل/مدین کے لوگ",
  "When Shu'ayb said to them: Will you not fear Allah?": "جب شعیب نے ان سے کہا: کیا تم اللہ سے نہیں ڈرتے؟",
  "Shu'ayb's call": "شعیب کی پکار",
  "Give full measure and do not be of those who cause loss": "پورا ناپ دو اور گھٹانے والوں میں سے نہ بنو",
  "Economic justice command": "معاشی انصاف کا حکم",
  "And weigh with a straight balance": "اور سیدھی ترازو سے تولو",
  "Fair weighing": "منصفانہ تول",
  "Do not deprive people of their due": "لوگوں کو ان کی چیزیں کم دے کر نہ ٹھگو",
  "Rights of others": "دوسروں کے حقوق",
  "Do not commit abuse on earth, spreading corruption": "اور زمین میں فساد نہ پھیلاؤ",
  "Against corruption": "فساد کے خلاف",
  "Fear Him who created you and former generations": "اس سے ڈرو جس نے تمہیں اور پہلی نسلوں کو پیدا کیا",
  "Fear the Creator": "خالق سے ڈرو",
  "Same accusation as to Salih": "صالح جیسا ہی الزام",
  "Rejection of human messenger": "انسان رسول کا انکار",
  "We think you are of the liars": "ہم تمہیں جھوٹوں میں سے سمجھتے ہیں",
  "Accusation of lying": "جھوٹ بولنے کا الزام",
  "So drop upon us fragments from the sky": "تو آسمان سے ہم پر ٹکڑے گرا دو",
  "Mocking challenge": "تمسخر آمیز چیلنج",
  "Demanding proof": "ثبوت کا مطالبہ",
  "He said: My Lord knows best what you do": "اس نے کہا: میرا رب تمہارے اعمال کو خوب جانتا ہے",
  "Shu'ayb's response": "شعیب کا جواب",
  "So they denied him and punishment of the Day of Shadow seized them": "تو انہوں نے اسے جھٹلایا اور سائبان والے دن کے عذاب نے انہیں پکڑ لیا",
  "Punishment by shadow/cloud of fire": "آگ کے بادل/سائبان سے سزا",
  "It was punishment of a great day": "وہ ایک بڑے دن کا عذاب تھا",
  "Severity of their end": "ان کے انجام کی شدت",

  // quranRevelation
  "Indeed, it is revelation from the Lord of the worlds": "بے شک یہ رب العالمین کی طرف سے اتارا گیا ہے",
  "Divine source affirmed": "الٰہی ماخذ کی تصدیق",
  "The Trustworthy Spirit brought it down": "اسے روح الامین لے کر اترے",
  "Jibril as bearer": "جبرائیل بطور حامل",
  "Upon your heart so you may be a warner": "تمہارے دل پر تاکہ تم تنبیہ کرنے والے بنو",
  "Revealed to Prophet's heart": "نبی ﷺ کے دل پر نازل ہوا",
  "In clear Arabic tongue": "واضح عربی زبان میں",
  "Language of revelation": "وحی کی زبان",
  "And it is in the scriptures of former peoples": "اور یہ پہلے لوگوں کی کتابوں میں موجود ہے",
  "Mentioned in previous books": "پچھلی کتابوں میں مذکور",
  "Was it not a sign that scholars of Israel knew it?": "کیا یہ نشانی نہ تھی کہ بنی اسرائیل کے عالموں نے اسے پہچانا؟",
  "Jewish scholars recognize it": "یہودی علماء نے اسے پہچانا",

  // nonArabMessenger
  "If We had revealed it to a non-Arab": "اگر ہم اسے کسی عجمی پر نازل کرتے",
  "Hypothetical scenario": "فرضی صورتحال",
  "And he recited it to them, they would not believe": "اور وہ انہیں پڑھ کر سناتا تو وہ ایمان نہ لاتے",
  "They would still reject": "وہ پھر بھی رد کرتے",
  "Thus We inserted disbelief in hearts of criminals": "اسی طرح ہم نے مجرموں کے دلوں میں انکار ڈال دیا",
  "Denial rooted in heart": "انکار دل میں جڑا ہوا",
  "They will not believe until they see painful punishment": "وہ ایمان نہیں لائیں گے جب تک دردناک عذاب نہ دیکھ لیں",
  "Belief only when too late": "ایمان صرف تب جب بہت دیر ہو چکی ہو",
  "It will come suddenly while they perceive not": "وہ اچانک آئے گا جب انہیں خبر بھی نہ ہوگی",
  "Punishment comes unexpectedly": "عذاب غیر متوقع طور پر آتا ہے",

  // warningAndDestruction
  "They will say: Can we be reprieved?": "وہ کہیں گے: کیا ہمیں مہلت مل سکتی ہے؟",
  "Desperate plea for delay": "تاخیر کی مایوسانہ التجا",
  "Do they wish to hasten Our punishment?": "کیا یہ ہمارے عذاب میں جلدی کراتے ہیں؟",
  "Mocking those who challenge": "چیلنج کرنے والوں پر طنز",
  "Have you considered if We give them enjoyment for years": "کیا تم نے سوچا اگر ہم انہیں برسوں تک فائدہ اٹھانے دیں",
  "Even long life won't help": "طویل عمر بھی فائدہ نہیں دے گی",
  "Then what they were promised comes to them": "پھر ان سے کیا وعدہ کیا گیا تھا وہ آ جائے",
  "Promise fulfilled eventually": "وعدہ بالآخر پورا ہوتا ہے",
  "What will avail them what they enjoyed?": "جو فائدہ اٹھایا وہ ان کے کس کام آئے گا؟",
  "Enjoyment won't save them": "فائدے انہیں نہیں بچائیں گے",
  "We did not destroy any city except it had warners": "ہم نے کوئی بستی تباہ نہیں کی مگر اس میں تنبیہ کرنے والے تھے",
  "No destruction without warning": "بغیر تنبیہ کے کوئی تباہی نہیں",
  "As a reminder, and We were not unjust": "نصیحت کے طور پر، اور ہم ظالم نہیں تھے",
  "Divine justice in punishment": "سزا میں الٰہی عدل",

  // quranNotFromDevils
  "Devils did not bring it down": "شیاطین نے اسے نازل نہیں کیا",
  "Refuting accusation": "الزام کی تردید",
  "It is not befitting for them, nor could they": "نہ یہ ان کے شایان شان ہے اور نہ وہ یہ کر سکتے ہیں",
  "Devils incapable": "شیاطین عاجز",
  "They are barred from hearing": "وہ سننے سے محروم کر دیے گئے ہیں",
  "Devils cannot access revelation": "شیاطین وحی تک رسائی نہیں رکھتے",

  // warningAgainstIdolatry
  "Do not call with Allah another god": "اللہ کے ساتھ کسی اور معبود کو نہ پکارو",
  "Warning against polytheism": "شرک سے خبردار",
  "Lest you be among the punished": "ورنہ عذاب پانے والوں میں ہو جاؤ گے",
  "Consequence of shirk": "شرک کا نتیجہ",
  "Warn your closest kindred": "اپنے قریب ترین رشتہ داروں کو خبردار کرو",
  "Start with family": "خاندان سے شروع کرو",
  "Lower your wing to believers who follow you": "اپنے پیروکار مومنوں کے لیے اپنا بازو جھکاؤ",
  "Be humble with followers": "پیروکاروں سے عاجزی کرو",
  "If they disobey, say: I am free of what you do": "اگر وہ نافرمانی کریں تو کہو: میں تمہارے اعمال سے بری ہوں",
  "Disassociation from sin": "گناہ سے بیزاری",
  "And rely on the Mighty, the Merciful": "اور غالب اور رحم والے پر بھروسا رکھو",
  "Trust in Allah": "اللہ پر توکل",
  "Who sees you when you stand": "جو تمہیں دیکھتا ہے جب تم کھڑے ہوتے ہو",
  "Allah sees your prayer": "اللہ تمہاری نماز دیکھتا ہے",
  "And your movement among those who prostrate": "اور تمہارا سجدہ کرنے والوں میں حرکت کرنا",
  "Allah sees all worship": "اللہ ہر عبادت دیکھتا ہے",
  "Indeed He is the Hearing, the Knowing": "بے شک وہ سننے والا، جاننے والا ہے",
  "Divine attributes": "الٰہی صفات",

  // poetsContrast
  "Shall I tell you upon whom devils descend?": "کیا میں تمہیں بتاؤں شیاطین کس پر اترتے ہیں؟",
  "Rhetorical question": "بلاغی سوال",
  "They descend upon every sinful liar": "وہ ہر جھوٹے گناہگار پر اترتے ہیں",
  "Devils inspire liars": "شیاطین جھوٹوں کو سکھاتے ہیں",
  "They pass on what they hear, and most are liars": "جو سنتے ہیں آگے پہنچاتے ہیں اور اکثر جھوٹے ہیں",
  "Soothsayers lie": "نجومی جھوٹ بولتے ہیں",
  "As for the poets, the deviators follow them": "اور شاعروں کی پیروی گمراہ لوگ کرتے ہیں",
  "Misguided follow poets": "گمراہ شاعروں کی پیروی کرتے ہیں",
  "Do you not see that they wander in every valley?": "کیا تم نے نہیں دیکھا کہ وہ ہر وادی میں بھٹکتے ہیں؟",
  "Poets' aimless wandering in fantasy": "شاعروں کا تخیل میں بے مقصد بھٹکنا",
  "And they say what they do not do": "اور وہ کہتے ہیں جو کرتے نہیں",
  "Poetry often insincere": "شاعری اکثر غیر مخلص ہوتی ہے",

  // exceptedPoets
  "Except those who believe": "سوائے ان کے جو ایمان لائے",
  "Believing poets excepted": "مومن شاعر مستثنیٰ",
  "And do righteous deeds": "اور نیک عمل کیے",
  "Righteous action required": "نیک عمل ضروری",
  "And remember Allah often": "اور اللہ کو کثرت سے یاد کیا",
  "Frequent remembrance": "کثرت سے ذکر",
  "And defend themselves after being wronged": "اور ظلم کے بعد اپنا دفاع کیا",
  "Defending Islam through poetry": "شاعری سے اسلام کا دفاع",
  "Those who wrong will know what return they will have": "ظلم کرنے والے جلد جان لیں گے کہ ان کا انجام کیا ہوگا",
  "Warning to oppressors": "ظالموں کو تنبیہ",
};

// Merge all translations
const allTranslations = { ...translations, ...moreTranslations, ...evenMoreTranslations };

// Function to convert plain string fields to bilingual
function convertField(content, fieldName) {
  // Match fieldName: "text" (not already an object)
  const regex = new RegExp(`(${fieldName}: )"([^"]*)"`, 'g');
  return content.replace(regex, (match, prefix, englishText) => {
    const urdu = allTranslations[englishText] || englishText; // fallback to English if no translation
    return `${prefix}{ en: "${englishText}", ur: "${urdu}" }`;
  });
}

// Convert all concept fields
content = convertField(content, 'meaning');
content = convertField(content, 'explanation');

// Convert non-concept text fields
content = convertField(content, 'description');
content = convertField(content, 'significance');
content = convertField(content, 'note');
content = convertField(content, 'insight');
content = convertField(content, 'title');
content = convertField(content, 'principle');
content = convertField(content, 'how');
content = convertField(content, 'effect');

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Done converting 026.js');

// Count remaining plain strings
const remaining = (content.match(/(meaning|explanation|description|significance|note|insight|title|principle|how|effect): "[^{]/g) || []).length;
console.log('Remaining plain strings:', remaining);
