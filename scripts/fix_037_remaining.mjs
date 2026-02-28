import { readFileSync, writeFileSync } from 'fs';

const filePath = './src/data/treebank/ontology/037.js';
let content = readFileSync(filePath, 'utf8');

// All remaining English-only ur: values that need fixing
const replacements = {
  // meaning field in prophetNuh (verse 78 duplicate)
  'ur: "We left for him [favorable mention] among later generations"': 'ur: "اور ہم نے آنے والوں میں ان کا (اچھا) ذکر باقی رکھا"',

  // relationships
  'ur: "Angels ranged in rows testify to Allah\'s Oneness"': 'ur: "صف بستہ فرشتے اللہ کی وحدانیت کی گواہی دیتے ہیں"',
  'ur: "Shooting stars prevent devils from eavesdropping"': 'ur: "شہاب ثاقب شیطانوں کو کان لگانے سے روکتے ہیں"',
  'ur: "Humans from clay - not harder to create than heavens"': 'ur: "مٹی سے بنے انسان - آسمانوں سے زیادہ مشکل تخلیق نہیں"',
  'ur: "Hastening to follow misguided ancestors"': 'ur: "گمراہ باپ دادا کی پیروی میں دوڑنا"',
  "ur: \"Father's vision met with son's willing submission\"": 'ur: "باپ کے خواب پر بیٹے کی رضامندانہ فرمانبرداری"',
  'ur: "Test passed, ram substituted - origin of Qurbani"': 'ur: "آزمائش میں کامیاب، مینڈھا متبادل - قربانی کی ابتدا"',
  "ur: \"Yunus's habit of glorification led to rescue\"": 'ur: "یونس کی تسبیح کی عادت نے نجات دلائی"',
  "ur: \"Yunus's people believed - rare prophetic success\"": 'ur: "یونس کی قوم ایمان لائی - نبوی دعوت کی نادر کامیابی"',
  'ur: "Exposing hypocrisy of ascribing daughters to Allah"': 'ur: "اللہ کو بیٹیاں منسوب کرنے کی منافقت بے نقاب"',
  'ur: "Prophets and their followers will ultimately prevail"': 'ur: "انبیاء اور ان کے پیروکار آخرکار غالب آئیں گے"',

  // thematicFlow stages
  'ur: "Opening oaths - angels testifying to Tawheed, protection of heavens"': 'ur: "آغاز کی قسمیں - فرشتوں کی توحید کی گواہی، آسمانوں کی حفاظت"',
  'ur: "Humans from clay, disbelievers mock despite signs"': 'ur: "مٹی سے انسان، نشانیوں کے باوجود کافروں کا مذاق"',
  'ur: "Gathering wrongdoers, questioning, mutual blame, punishment for arrogance"': 'ur: "ظالموں کو جمع کرنا، سوال، باہمی الزام، تکبر کی سزا"',
  'ur: "Rewards for believers: gardens, drinks, companions, eternal bliss"': 'ur: "مومنوں کا اجر: باغات، مشروبات، ساتھی، ابدی نعمت"',
  'ur: "Tree of Zaqqum, boiling drink, cycle of punishment"': 'ur: "زقوم کا درخت، کھولتا مشروب، عذاب کا سلسلہ"',
  'ur: "Following misguided ancestors, warners sent but rejected"': 'ur: "گمراہ باپ دادا کی پیروی، ڈرانے والے بھیجے گئے لیکن رد کیے گئے"',
  "ur: \"Nuh's prayer answered, saved from flood, disbelievers drowned\"": 'ur: "نوح کی دعا قبول، سیلاب سے نجات، کافر ڈوب گئے"',
  'ur: "Sound heart, questioning idols, smashing them, thrown in fire"': 'ur: "صاف دل، بتوں پر سوال، توڑنا، آگ میں ڈالنا"',
  'ur: "Dua for son, vision of sacrifice, test passed, ram substituted, Ishaq promised"': 'ur: "بیٹے کی دعا، قربانی کا خواب، آزمائش میں کامیاب، مینڈھا متبادل، اسحاق کی بشارت"',
  'ur: "Saved from distress, given Torah, guided, honored"': 'ur: "مصیبت سے بچائے، توراۃ دی، ہدایت دی، عزت بخشی"',
  "ur: \"Called to taqwa, condemned Ba'l worship, rejected but honored\"": 'ur: "تقویٰ کی دعوت، بعل کی عبادت کی مذمت، رد کیے گئے لیکن عزت پائی"',
  'ur: "Family saved, wife remained, people destroyed, ruins as signs"': 'ur: "خاندان بچایا، بیوی رہ گئی، قوم تباہ، کھنڈرات بطور نشانیاں"',
  'ur: "Fled, swallowed by whale, glorified Allah, saved, people believed"': 'ur: "بھاگے، مچھلی نے نگلا، اللہ کی تسبیح، نجات، قوم ایمان لائی"',
  "ur: \"Angels not daughters, no kinship with jinn, angels' worship\"": 'ur: "فرشتے بیٹیاں نہیں، جنوں سے رشتہ نہیں، فرشتوں کی عبادت"',
  "ur: \"Disbelievers' false claims, divine promise to prophets\"": 'ur: "کافروں کے جھوٹے دعوے، انبیاء سے الٰہی وعدہ"',
  'ur: "Exalting Allah, peace on messengers, praise to Lord of worlds"': 'ur: "اللہ کی تسبیح، رسولوں پر سلام، رب العالمین کی حمد"',

  // uniqueInsight
  'ur: "The Surah of Divine Order and Prophetic Sacrifice"': 'ur: "الٰہی نظام اور نبوی قربانی کی سورت"',

  // linguisticFeatures
  'ur: "Cognate accusative"': 'ur: "مفعول مطلق"',
  'ur: "Intensifies meaning - those who truly stand in rows"': 'ur: "معنی کو شدید بناتا ہے - جو واقعی صفوں میں کھڑے ہیں"',
  'ur: "Triple oath structure"': 'ur: "تین قسموں کی ساخت"',
  'ur: "Builds to conclusion of Tawheed"': 'ur: "توحید کے نتیجے تک پہنچاتا ہے"',
  'ur: "Repeated 6 times"': 'ur: "6 بار دہرایا گیا"',
  'ur: "Unique honoring formula for prophets"': 'ur: "انبیاء کی تکریم کا منفرد فارمولا"',
  'ur: "Describing Ismail"': 'ur: "اسماعیل کی تعریف"',
  'ur: "Foreshadows patience during sacrifice"': 'ur: "قربانی کے وقت صبر کی پیشگوئی"',
  'ur: "Sound/pure heart"': 'ur: "صاف/پاکیزہ دل"',
  "ur: \"Key to Ibrahim's success - spiritual purity\"": 'ur: "ابراہیم کی کامیابی کی کنجی - روحانی پاکیزگی"',
  'ur: "Clear trial"': 'ur: "واضح آزمائش"',
  'ur: "Emphasizes test was obvious and great"': 'ur: "زور دیتا ہے کہ آزمائش واضح اور عظیم تھی"',
  'ur: "Habitual pattern"': 'ur: "عادت کا نمونہ"',
  'ur: "Those who constantly glorify - saved Yunus"': 'ur: "مسلسل تسبیح کرنے والے - یونس کو بچایا"',
  'ur: "Gourd/squash plant"': 'ur: "کدو کا پودا"',
  'ur: "Only plant specifically named in Quran for healing"': 'ur: "قرآن میں شفا کے لیے نام سے ذکر ہونے والا واحد پودا"',

  // scientificReferences
  'ur: "Stars as adornment and protection - dual function in creation"': 'ur: "ستارے بطور زینت اور حفاظت - تخلیق میں دوہرا کردار"',

  // famousDuas
  "ur: \"Ibrahim's dua for righteous offspring\"": 'ur: "ابراہیم کی نیک اولاد کے لیے دعا"',
  'ur: "Indeed, I am going to my Lord; He will guide me"': 'ur: "بیشک میں اپنے رب کی طرف جا رہا ہوں؛ وہ مجھے ہدایت دے گا"',
  "ur: \"Ibrahim's trust in Allah during migration\"": 'ur: "ہجرت کے دوران ابراہیم کا اللہ پر بھروسا"',
};

let count = 0;
for (const [oldStr, newStr] of Object.entries(replacements)) {
  if (content.includes(oldStr)) {
    content = content.replaceAll(oldStr, newStr);
    count++;
  }
}

// Also fix the historicalContext and uniqueInsight long text
const histOld = 'ur: "This Makkan surah addresses the polytheistic beliefs of Quraysh who considered angels to be Allah\'s daughters (a claim they found acceptable while despising daughters for themselves), and who claimed kinship between Allah and jinn. The surah was revealed during a period of intense persecution, offering comfort through prophet stories - all faced rejection but were ultimately honored. Ibrahim\'s sacrifice narrative here is the most detailed in the Quran and forms the basis of Eid al-Adha traditions. The debate over whether the sacrificed son was Ismail or Ishaq is noted by scholars, with the majority view being Ismail based on the context (Ishaq is announced separately in verse 112)."';
const histNew = 'ur: "یہ مکی سورت قریش کے مشرکانہ عقائد کو مخاطب کرتی ہے جو فرشتوں کو اللہ کی بیٹیاں سمجھتے تھے (ایک دعویٰ جو انہیں قابلِ قبول تھا جبکہ خود بیٹیوں سے نفرت کرتے تھے)، اور جنہوں نے اللہ اور جنوں میں رشتہ داری کا دعویٰ کیا۔ سورت شدید ظلم و ستم کے دور میں نازل ہوئی، انبیاء کے قصوں سے تسلی فراہم کرتی ہے - سب نے رد کا سامنا کیا لیکن آخرکار عزت پائی۔ ابراہیم کی قربانی کا بیان یہاں قرآن میں سب سے تفصیلی ہے اور عید الاضحی کی روایات کی بنیاد ہے۔ قربانی کا بیٹا اسماعیل تھا یا اسحاق، اس پر علماء کا اختلاف ہے، اکثریت کی رائے سیاق و سباق کی بنیاد پر اسماعیل کے حق میں ہے (اسحاق کا ذکر الگ سے آیت 112 میں آتا ہے)۔"';

if (content.includes(histOld)) {
  content = content.replace(histOld, histNew);
  count++;
}

// Fix the uniqueInsight long text
const insightOld = `ur: "As-Saffat opens with angels ranged in perfect rows (صَافَّاتٍ), establishing cosmic order and divine hierarchy. This imagery of orderly submission frames the entire surah's message: true success comes through submitting to Allah's order. The most powerful illustration is Ibrahim's sacrifice - when both father and son فَلَمَّا أَسْلَمَا (both submitted), the trial was passed. The surah mentions six prophets with the distinctive phrase 'سَلَامٌ عَلَىٰ' (peace upon): Nuh, Ibrahim, Musa, Harun, Ilyas - honoring those who submitted despite trials. Uniquely, Yunus's people are the only nation mentioned in the Quran that believed collectively and were spared punishment (37:148). The surah also refutes polytheistic beliefs about angels being Allah's daughters and jinn having kinship with Allah, emphasizing pure Tawheed. It closes with the most comprehensive ending formula in the Quran: glorifying Allah (37:180), sending peace upon all messengers (37:181), and praising the Lord of the worlds (37:182)."`;
const insightNew = `ur: "الصافات فرشتوں کی کامل صفوں (صَافَّاتٍ) سے شروع ہوتی ہے، کائناتی نظام اور الٰہی درجہ بندی قائم کرتی ہے۔ منظم فرمانبرداری کی یہ تصویر پوری سورت کے پیغام کا خاکہ بناتی ہے: سچی کامیابی اللہ کے حکم کے تابع ہونے سے ملتی ہے۔ سب سے طاقتور مثال ابراہیم کی قربانی ہے - جب باپ اور بیٹے دونوں نے فَلَمَّا أَسْلَمَا (سرِ تسلیم خم کیا)، آزمائش میں کامیاب ہوئے۔ سورت چھ انبیاء کا 'سَلَامٌ عَلَىٰ' (سلام ہو) کے منفرد انداز سے ذکر کرتی ہے: نوح، ابراہیم، موسیٰ، ہارون، الیاس - آزمائشوں کے باوجود فرمانبرداری کرنے والوں کی تکریم۔ منفرد بات یہ ہے کہ یونس کی قوم قرآن میں واحد قوم ہے جو اجتماعی طور پر ایمان لائی اور عذاب سے بچائی گئی (37:148)۔ سورت فرشتوں کو اللہ کی بیٹیاں اور جنوں کا اللہ سے رشتہ ماننے کے مشرکانہ عقائد کی تردید کرتی ہے، خالص توحید پر زور دیتی ہے۔ یہ قرآن کے سب سے جامع اختتامی فارمولے سے ختم ہوتی ہے: اللہ کی تسبیح (37:180)، تمام رسولوں پر سلام (37:181)، اور رب العالمین کی حمد (37:182)۔"`;

if (content.includes(insightOld)) {
  content = content.replace(insightOld, insightNew);
  count++;
}

writeFileSync(filePath, content, 'utf8');
console.log(`Replaced ${count} remaining fields`);
