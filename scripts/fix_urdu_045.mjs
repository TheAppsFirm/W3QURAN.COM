import fs from 'fs';

const file = 'src/data/treebank/ontology/045.js';
let content = fs.readFileSync(file, 'utf8');

const map = {
  // signsInCreation
  'ur: "Signs in the heavens"': 'ur: "آسمانوں میں نشانیاں"',
  'ur: "Signs in the earth"': 'ur: "زمین میں نشانیاں"',
  'ur: "Signs for the believers"': 'ur: "مومنوں کے لیے نشانیاں"',
  'ur: "Your creation"': 'ur: "تمہاری تخلیق"',
  'ur: "Creatures He disperses"': 'ur: "جانور جو وہ پھیلاتا ہے"',
  'ur: "Alternation of night and day"': 'ur: "رات اور دن کا بدلنا"',
  'ur: "Provision from the sky (rain)"': 'ur: "آسمان سے رزق (بارش)"',
  'ur: "Reviving earth after its death"': 'ur: "زمین کو مرنے کے بعد زندہ کرنا"',
  'ur: "Directing of the winds"': 'ur: "ہواؤں کا چلانا"',

  // subjugationBlessings
  'ur: "Subjected what is in the heavens"': 'ur: "آسمانوں کی چیزیں مسخر کیں"',
  'ur: "And what is in the earth"': 'ur: "اور جو زمین میں ہے"',
  'ur: "All from Him"': 'ur: "سب اسی کی طرف سے"',
  'ur: "Subjected the sea for you"': 'ur: "سمندر کو تمہارے لیے مسخر کیا"',
  'ur: "Ships sail through it"': 'ur: "جہاز اس میں چلتے ہیں"',
  'ur: "To seek from His bounty"': 'ur: "تاکہ تم اس کے فضل سے تلاش کرو"',

  // rejectionOfSigns
  'ur: "In what message after Allah and His signs will they believe?"': 'ur: "اللہ اور اس کی آیات کے بعد کس بات پر ایمان لائیں گے؟"',
  'ur: "Every sinful liar"': 'ur: "ہر جھوٹے گنہگار کے لیے"',
  'ur: "Persists arrogantly"': 'ur: "تکبر سے اصرار کرتا ہے"',
  'ur: "As if he had not heard them"': 'ur: "گویا اس نے سنا ہی نہیں"',
  'ur: "Deafness in his ears"': 'ur: "اس کے کانوں میں بہرا پن"',
  'ur: "Takes them (signs) in ridicule"': 'ur: "ان (آیات) کا مذاق اڑاتا ہے"',

  // followingDesires
  'ur: "Takes his desire as his god"': 'ur: "اپنی خواہش کو اپنا معبود بنا لیتا ہے"',
  'ur: "Allah left him astray knowingly"': 'ur: "اللہ نے جان بوجھ کر اسے گمراہ چھوڑ دیا"',
  'ur: "Sealed his hearing"': 'ur: "اس کے کان پر مہر لگا دی"',
  'ur: "Sealed his heart"': 'ur: "اس کے دل پر مہر لگا دی"',
  'ur: "Placed over his sight a veil"': 'ur: "اس کی آنکھوں پر پردہ ڈال دیا"',
  'ur: "Who will guide him after Allah?"': 'ur: "اللہ کے بعد کون اسے ہدایت دے گا؟"',

  // denialOfHereafter
  'ur: "There is nothing but our worldly life"': 'ur: "ہماری دنیاوی زندگی کے سوا کچھ نہیں"',
  'ur: "We die and we live"': 'ur: "ہم مرتے ہیں اور جیتے ہیں"',
  'ur: "Nothing destroys us except time"': 'ur: "زمانے کے سوا ہمیں کوئی چیز ہلاک نہیں کرتی"',
  'ur: "They have no knowledge of that"': 'ur: "ان کو اس کا کوئی علم نہیں"',
  'ur: "They only assume"': 'ur: "وہ صرف گمان کرتے ہیں"',
  'ur: "Bring back our forefathers"': 'ur: "ہمارے باپ دادا کو واپس لاؤ"',

  // baniIsraelFavors
  'ur: "We gave Bani Israel the Scripture"': 'ur: "ہم نے بنی اسرائیل کو کتاب دی"',
  'ur: "And authority/judgment"': 'ur: "اور حکومت و فیصلہ"',
  'ur: "And prophethood"': 'ur: "اور نبوت"',
  'ur: "Provided them with good things"': 'ur: "انہیں پاکیزہ رزق دیا"',
  'ur: "Preferred them over the worlds"': 'ur: "انہیں جہانوں پر فضیلت دی"',
  'ur: "Clear proofs of the matter"': 'ur: "دین کے واضح دلائل"',

  // baniIsraelDivision
  'ur: "They differed only after knowledge came"': 'ur: "انہوں نے علم آنے کے بعد ہی اختلاف کیا"',
  'ur: "Out of jealousy between themselves"': 'ur: "آپس کی حسد سے"',
  'ur: "Your Lord will judge between them on Judgment Day"': 'ur: "تمہارا رب قیامت کے دن ان کے درمیان فیصلہ کرے گا"',

  // shariahAndGuidance
  'ur: "We placed you upon a Shariah"': 'ur: "ہم نے تمہیں ایک شریعت پر رکھا"',
  'ur: "So follow it"': 'ur: "پس اس کی پیروی کرو"',
  'ur: "Do not follow desires of those who do not know"': 'ur: "بے علموں کی خواہشات کی پیروی نہ کرو"',
  'ur: "They will not avail you against Allah"': 'ur: "وہ اللہ کے مقابلے میں تمہارے کام نہیں آئیں گے"',
  'ur: "The wrongdoers are allies of one another"': 'ur: "ظالم ایک دوسرے کے دوست ہیں"',
  'ur: "Allah is protector of the righteous"': 'ur: "اللہ متقیوں کا محافظ ہے"',

  // quranAsGuidance
  'ur: "This is insight for mankind"': 'ur: "یہ لوگوں کے لیے بصیرت ہے"',
  'ur: "And guidance"': 'ur: "اور ہدایت"',
  'ur: "And mercy"': 'ur: "اور رحمت"',
  'ur: "For people who have certainty"': 'ur: "یقین رکھنے والوں کے لیے"',

  // theKneeling
  'ur: "You will see every nation kneeling"': 'ur: "تم ہر امت کو گھٹنوں کے بل دیکھو گے"',
  'ur: "Each nation called to its record"': 'ur: "ہر امت کو اس کے نامۂ اعمال کی طرف بلایا جائے گا"',
  'ur: "Today you are recompensed for what you used to do"': 'ur: "آج تمہیں وہ بدلہ دیا جائے گا جو تم کرتے تھے"',
  'ur: "This Our record speaks against you with truth"': 'ur: "یہ ہمارا نامۂ اعمال تمہارے خلاف سچ بولتا ہے"',
  'ur: "We were having transcribed what you used to do"': 'ur: "ہم تمہارے اعمال کا نسخہ اتارتے تھے"',

  // fateOfBelievers
  'ur: "Their Lord will admit them into His mercy"': 'ur: "ان کا رب انہیں اپنی رحمت میں داخل کرے گا"',
  'ur: "That is the clear success"': 'ur: "یہی کھلی کامیابی ہے"',

  // fateOfDisbelievers
  'ur: "Were not My verses recited to you?"': 'ur: "کیا تم پر میری آیات نہیں پڑھی جاتی تھیں؟"',
  'ur: "But you were arrogant"': 'ur: "مگر تم نے تکبر کیا"',
  'ur: "You were a criminal people"': 'ur: "تم مجرم قوم تھے"',
  'ur: "The promise of Allah is truth"': 'ur: "اللہ کا وعدہ سچا ہے"',
  'ur: "The Hour is coming without doubt"': 'ur: "قیامت آنے والی ہے بلا شک"',
  'ur: "You said: We do not know what the Hour is"': 'ur: "تم نے کہا: ہم نہیں جانتے قیامت کیا ہے"',
  'ur: "We assume only assumption"': 'ur: "ہم تو صرف گمان کرتے ہیں"',
  'ur: "Appeared to them the evils of what they did"': 'ur: "ان کے سامنے ان کے اعمال کی برائیاں ظاہر ہوئیں"',
  'ur: "Surrounded them what they used to ridicule"': 'ur: "جس کا وہ مذاق اڑاتے تھے اس نے انہیں گھیر لیا"',

  // divineAbandonment
  'ur: "So today We forget you"': 'ur: "پس آج ہم تمہیں بھلا دیتے ہیں"',
  'ur: "As you forgot the meeting of this Day"': 'ur: "جیسے تم اس دن کی ملاقات بھول گئے"',
  'ur: "Your refuge is the Fire"': 'ur: "تمہارا ٹھکانا آگ ہے"',
  'ur: "You have no helpers"': 'ur: "تمہارا کوئی مددگار نہیں"',
  'ur: "That is because you took"': 'ur: "یہ اس لیے کہ تم نے"',
  'ur: "Signs of Allah in ridicule"': 'ur: "اللہ کی آیات کا مذاق اڑایا"',
  'ur: "The worldly life deceived you"': 'ur: "دنیاوی زندگی نے تمہیں دھوکا دیا"',

  // divineMajesty
  'ur: "So to Allah belongs all praise"': 'ur: "پس تمام تعریف اللہ ہی کے لیے ہے"',
  'ur: "Lord of the heavens"': 'ur: "آسمانوں کا رب"',
  'ur: "Lord of the earth"': 'ur: "زمین کا رب"',
  'ur: "Lord of all worlds"': 'ur: "تمام جہانوں کا رب"',
  'ur: "His is the grandeur in heavens and earth"': 'ur: "آسمانوں اور زمین میں بڑائی اسی کی ہے"',
  'ur: "And He is the Mighty, the Wise"': 'ur: "اور وہ غالب حکمت والا ہے"',

  // thematicFlow
  'ur: "From Creation Signs to Kneeling in Judgment"': 'ur: "تخلیق کی نشانیوں سے قیامت میں گھٹنے ٹیکنے تک"',
  'ur: "Ha-Mim, revelation from the Mighty, Wise"': 'ur: "حم، غالب حکمت والے کی طرف سے وحی"',
  'ur: "Signs in heavens, earth, creatures, night/day, rain, winds"': 'ur: "آسمانوں، زمین، مخلوقات، رات/دن، بارش، ہواؤں میں نشانیاں"',
  'ur: "Those who reject signs despite evidence"': 'ur: "دلائل کے باوجود نشانیوں کا انکار کرنے والے"',
  'ur: "Sea and all creation subjected for mankind"': 'ur: "سمندر اور ساری کائنات انسان کے لیے مسخر"',
  'ur: "Scripture, wisdom, prophethood given, then they divided"': 'ur: "کتاب، حکمت، نبوت دی گئی پھر تفرقے ڈالے"',
  'ur: "Follow the Shariah, not the ignorant"': 'ur: "شریعت کی پیروی کرو جاہلوں کی نہیں"',
  'ur: "Evil-doers not equal to believers"': 'ur: "بدکار مومنوں کے برابر نہیں"',
  'ur: "Creation with truth for recompense"': 'ur: "تخلیق حق کے ساتھ بدلے کے لیے"',
  'ur: "Taking desire as deity, sealed faculties"': 'ur: "خواہش کو معبود بنانا، صلاحیتوں پر مہر"',
  'ur: "Denial of afterlife, only time kills"': 'ur: "آخرت کا انکار، صرف زمانہ مارتا ہے"',
  'ur: "Dominion of heavens and earth"': 'ur: "آسمانوں اور زمین کی بادشاہی"',
  'ur: "Every nation kneeling, record speaks"': 'ur: "ہر امت گھٹنوں پر، نامۂ اعمال بولتا ہے"',
  'ur: "Admitted into mercy, clear triumph"': 'ur: "رحمت میں داخل، واضح کامیابی"',
  'ur: "Signs recited but rejected, doubted the Hour"': 'ur: "آیات سنائی گئیں مگر ٹھکرا دیں، قیامت پر شک کیا"',
  'ur: "Forgotten as they forgot, worldly deception"': 'ur: "بھلا دیے گئے جیسے وہ بھول گئے، دنیاوی دھوکا"',
  'ur: "All praise to Lord of worlds, His grandeur"': 'ur: "رب العالمین کی تمام حمد، اس کی عظمت"',

  // uniqueInsight
  "ur: \"The One Who Takes His Desire as His God (اتَّخَذَ إِلَٰهَهُ هَوَاهُ)\"": 'ur: "وہ جو اپنی خواہش کو معبود بنائے (اتَّخَذَ إِلَٰهَهُ هَوَاهُ)"',
  "ur: \"Verse 23 presents one of the Quran's most powerful psychological analyses: 'Have you seen the one who takes his own desire as his god?' This is not idol worship in the traditional sense, but a deeper form of shirk - making one's passions and whims the ultimate arbiter of truth. Allah describes the consequence: He leaves such a person astray 'upon knowledge' (ala 'ilm), meaning despite having access to truth. The sealing of hearing, heart, and sight represents the natural consequence of consistently choosing desire over guidance. The rhetorical question 'who will guide him after Allah?' emphasizes that once divine guidance is rejected, no other source can suffice.\"": 'ur: "آیت 23 قرآن کے طاقتور ترین نفسیاتی تجزیوں میں سے ایک پیش کرتی ہے: کیا تم نے اسے دیکھا جس نے اپنی خواہش کو معبود بنا لیا؟ یہ روایتی بت پرستی نہیں بلکہ شرک کی گہری شکل ہے - اپنے جذبات اور خواہشات کو حق کا حتمی فیصلہ کن بنانا۔ اللہ نتیجہ بیان کرتا ہے: وہ ایسے شخص کو باوجود علم کے گمراہ چھوڑ دیتا ہے۔ سماعت، قلب اور بصارت پر مہر لگنا مسلسل ہدایت پر خواہش کو ترجیح دینے کا فطری نتیجہ ہے۔ استفہامِ انکاری کہ اللہ کے بعد کون ہدایت دے گا اس بات پر زور دیتا ہے کہ الٰہی ہدایت ٹھکرانے کے بعد کوئی اور ذریعہ کافی نہیں۔"',
  "ur: \"ه-و-ى (hawa) - desire, passion, to fall, to love; making hawa one's ilah means following passion as one's supreme authority\"": 'ur: "ه-و-ى (ھویٰ) - خواہش، جذبہ، گرنا، محبت؛ ھویٰ کو الٰہ بنانے کا مطلب جذبات کو اعلیٰ ترین اختیار ماننا"',

  // historicalContext
  "ur: \"Revealed during the later Makkan period when the Quraysh were intensifying their denial of resurrection and the afterlife. The surah addresses their materialistic worldview ('nothing kills us except time') and their mockery of divine signs.\"": 'ur: "بعد کے مکی دور میں نازل ہوئی جب قریش قیامت اور آخرت کے انکار میں شدت اختیار کر رہے تھے۔ سورت ان کے مادہ پرستانہ نظریے (زمانے کے سوا ہمیں کوئی نہیں مارتا) اور الٰہی نشانیوں کے مذاق کا جواب دیتی ہے۔"',
  "ur: \"This surah is part of the Ha-Mim series (40-46), known as the 'Hawamim' surahs. The name 'Al-Jathiyah' (The Kneeling) comes from verse 28's vivid image of every nation kneeling before Allah on Judgment Day. It also contains the important word 'Shari'ah' (verse 18), establishing that Muhammad was given a specific divine law to follow.\"": 'ur: "یہ سورت حوامیم سلسلے (40-46) کا حصہ ہے۔ الجاثیہ (گھٹنے ٹیکنا) نام آیت 28 کی جاندار تصویر سے ہے جب ہر امت قیامت کے دن اللہ کے سامنے گھٹنوں پر ہوگی۔ اس میں شریعت کا اہم لفظ (آیت 18) بھی ہے جو واضح کرتا ہے کہ محمد ﷺ کو ایک مخصوص الٰہی قانون دیا گیا۔"',

  // linguisticFeatures
  'ur: "Part of the Hawamim series"': 'ur: "حوامیم سلسلے کا حصہ"',
  'ur: "Have you seen the one who..."': 'ur: "کیا تم نے اسے دیکھا جو..."',
  'ur: "First explicit use of Shari\'ah for divine law"': 'ur: "الٰہی قانون کے لیے شریعت کا پہلا واضح استعمال"',
  'ur: "Every nation kneeling - powerful visual"': 'ur: "ہر امت گھٹنوں پر - طاقتور منظر"',
  'ur: "Our record speaks with truth"': 'ur: "ہمارا نامۂ اعمال سچ بولتا ہے"',
  'ur: "We forget you as you forgot"': 'ur: "ہم تمہیں بھلا دیتے ہیں جیسے تم بھول گئے"',
  'ur: "All praise belongs to Allah"': 'ur: "تمام تعریف اللہ کے لیے ہے"',
};

let replaced = 0;
for (const [from, to] of Object.entries(map)) {
  if (content.includes(from)) {
    content = content.replaceAll(from, to);
    replaced++;
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log(`045.js: Replaced ${replaced} translation keys`);
