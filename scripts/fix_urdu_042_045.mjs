#!/usr/bin/env node
/**
 * Fix Urdu translations in ontology files 042-045
 * Replaces English text in ur: fields with proper Urdu translations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ONTOLOGY_DIR = path.join(__dirname, '..', 'src', 'data', 'treebank', 'ontology');

// Map of English -> Urdu translations for all ur: fields
// Organized by file for clarity

const translations042 = {
  // divineRevelation
  "Unique double set of disconnected letters in Quran": "قرآن میں حروفِ مقطعات کا منفرد دوہرا مجموعہ",
  "Thus He reveals to you": "اسی طرح وہ تمہاری طرف وحی کرتا ہے",
  "Continuity of revelation to Muhammad": "محمد ﷺ پر وحی کا تسلسل",
  "And to those before you": "اور تم سے پہلے والوں کی طرف",
  "Same revelation to previous prophets": "پہلے انبیاء پر بھی یہی وحی",
  "Allah, the Mighty, the Wise": "اللہ غالب، حکمت والا",
  "Source of all revelation": "تمام وحی کا سرچشمہ",
  "And thus We revealed to you a spirit from Our command": "اور اسی طرح ہم نے اپنے حکم سے تمہاری طرف روح وحی کی",
  "Quran as spiritual guidance from divine command": "قرآن الٰہی حکم سے روحانی ہدایت ہے",
  "You did not know what the Book was nor faith": "تم نہیں جانتے تھے کہ کتاب کیا ہے اور نہ ایمان",
  "Prophet's state before revelation": "وحی سے پہلے نبی ﷺ کی حالت",
  "We made it a light by which We guide whom We will": "ہم نے اسے نور بنایا جس سے ہم جسے چاہیں ہدایت دیں",
  "Quran as guiding light": "قرآن بطور نورِ ہدایت",

  // modesOfRevelation
  "It is not for a human that Allah should speak to him": "کسی بشر کی حیثیت نہیں کہ اللہ اس سے کلام کرے",
  "Human cannot directly perceive divine speech": "انسان براہ راست الٰہی کلام کا ادراک نہیں کر سکتا",
  "Except by inspiration": "مگر وحی کے ذریعے",
  "First mode: direct inspiration into the heart": "پہلا طریقہ: دل میں براہ راست القا",
  "Or from behind a veil": "یا پردے کے پیچھے سے",
  "Second mode: Allah speaks but is unseen (like to Musa)": "دوسرا طریقہ: اللہ بولتا ہے مگر نظر نہیں آتا (جیسے موسیٰ سے)",
  "Or sends a messenger to reveal by His permission": "یا کوئی فرشتہ بھیجے جو اس کے اذن سے وحی کرے",
  "Third mode: through angel Jibreel": "تیسرا طریقہ: فرشتہ جبرائیل کے ذریعے",
  "Indeed He is Most High, Most Wise": "بے شک وہ بلند مرتبہ، حکمت والا ہے",
  "Divine wisdom in communication methods": "ابلاغ کے طریقوں میں الٰہی حکمت",

  // unityOfReligion
  "He prescribed for you of religion what He enjoined upon Nuh": "اس نے تمہارے لیے دین میں وہی مقرر کیا جو نوح کو حکم دیا تھا",
  "Same religion from earliest prophet": "ابتدائی نبی سے ایک ہی دین",
  "And what We revealed to you": "اور جو ہم نے تمہاری طرف وحی کیا",
  "Muhammad receives the same message": "محمد ﷺ کو بھی وہی پیغام ملا",
  "And what We enjoined upon Ibrahim, Musa, and Isa": "اور جو ہم نے ابراہیم، موسیٰ اور عیسیٰ کو حکم دیا",
  "Major prophets received same core message": "بڑے انبیاء کو ایک ہی بنیادی پیغام ملا",
  "Establish the religion and do not be divided in it": "دین قائم کرو اور اس میں تفرقہ نہ ڈالو",
  "Core command: unity in worship": "بنیادی حکم: عبادت میں اتحاد",
  "Difficult for polytheists is what you call them to": "مشرکوں پر بھاری ہے جس چیز کی طرف تم انہیں بلاتے ہو",
  "Pure monotheism is hard for idolaters": "خالص توحید بت پرستوں کے لیے مشکل ہے",
  "Allah chooses for Himself whom He wills": "اللہ جسے چاہے اپنے لیے چن لیتا ہے",
  "Divine selection of believers": "مومنین کا الٰہی انتخاب",

  // divisionInReligion
  "They divided not except after knowledge had come to them": "انہوں نے تفرقہ نہیں ڈالا مگر علم آ جانے کے بعد",
  "Division came after clear guidance, not from ignorance": "تفرقہ واضح ہدایت کے بعد ہوا، جہالت سے نہیں",
  "Out of jealous rivalry between them": "آپس کی حسد اور زیادتی سے",
  "Cause of division: envy and transgression": "تفرقے کا سبب: حسد اور سرکشی",
  "Had it not been for a word from your Lord": "اگر تمہارے رب کی طرف سے ایک بات پہلے سے طے نہ ہوتی",
  "Divine decree delays judgment": "الٰہی فیصلہ عذاب میں تاخیر کرتا ہے",
  "Until an appointed term": "ایک مقررہ مدت تک",
  "Respite until Day of Judgment": "یومِ قیامت تک مہلت",
  "It would have been judged between them": "ان کے درمیان فیصلہ ہو چکا ہوتا",
  "Judgment would already have been issued": "فیصلہ پہلے ہی صادر ہو چکا ہوتا",

  // consultationPrinciple
  "Those who respond to their Lord": "جو لوگ اپنے رب کی بات مانتے ہیں",
  "First quality: responding to Allah": "پہلی صفت: اللہ کی اطاعت",
  "And establish prayer": "اور نماز قائم کرتے ہیں",
  "Second quality: maintaining prayer": "دوسری صفت: نماز کی پابندی",
  "And their affair is consultation among them": "اور ان کے معاملات آپس کی مشاورت سے ہوتے ہیں",
  "Third quality: mutual consultation - basis of Islamic governance": "تیسری صفت: باہمی مشاورت - اسلامی نظامِ حکومت کی بنیاد",
  "And from what We provided them, they spend": "اور جو ہم نے انہیں دیا ہے اس میں سے خرچ کرتے ہیں",
  "Fourth quality: charitable spending": "چوتھی صفت: راہِ خدا میں خرچ",

  // forgivenessAndPardon
  "Those who avoid major sins and immoralities": "جو لوگ بڑے گناہوں اور بے حیائیوں سے بچتے ہیں",
  "Avoiding grave sins": "بڑے گناہوں سے اجتناب",
  "And when they are angry, they forgive": "اور جب غصہ آتا ہے تو معاف کر دیتے ہیں",
  "Forgiving even in anger - sign of character": "غصے میں بھی معاف کرنا - اعلیٰ کردار کی نشانی",
  "And whoever is patient and forgives": "اور جس نے صبر کیا اور معاف کیا",
  "Patience combined with forgiveness": "صبر اور معافی کا امتزاج",
  "Indeed that is of the matters of determination": "بے شک یہ بڑی ہمت کے کاموں میں سے ہے",
  "Forgiveness requires strength, not weakness": "معافی طاقت چاہتی ہے، کمزوری نہیں",
  "And He is the One who accepts repentance from His servants": "اور وہی ہے جو اپنے بندوں سے توبہ قبول کرتا ہے",
  "Allah's acceptance of repentance": "اللہ کا توبہ قبول کرنا",
  "And pardons misdeeds": "اور گناہ معاف کرتا ہے",
  "Divine pardon for sins": "گناہوں کی الٰہی معافی",
  "And knows what you do": "اور جانتا ہے جو تم کرتے ہو",
  "Complete divine knowledge": "مکمل الٰہی علم",

  // standingAgainstOppression
  "Those who when tyranny strikes them, they defend themselves": "جو لوگ جب ان پر ظلم ہوتا ہے تو اپنا دفاع کرتے ہیں",
  "Right to defend against oppression": "ظلم کے خلاف دفاع کا حق",
  "The recompense of evil is an evil like it": "برائی کا بدلہ اسی جیسی برائی ہے",
  "Proportional retaliation permitted": "مناسب بدلہ جائز ہے",
  "But whoever pardons and makes reconciliation, his reward is with Allah": "لیکن جو معاف کرے اور اصلاح کرے اس کا اجر اللہ کے ذمے ہے",
  "Forgiveness is better and rewarded": "معافی بہتر اور باعثِ اجر ہے",
  "Indeed He does not love the wrongdoers": "بے شک وہ ظالموں کو پسند نہیں کرتا",
  "Allah's dislike of oppressors": "اللہ کی ظالموں سے ناپسندیدگی",
  "Whoever defends himself after being wronged, there is no blame on them": "جو ظلم کے بعد اپنا دفاع کرے ان پر کوئی الزام نہیں",
  "No sin in self-defense": "دفاعِ نفس میں کوئی گناہ نہیں",
  "The blame is only upon those who wrong people": "الزام صرف ان پر ہے جو لوگوں پر ظلم کرتے ہیں",
  "Blame lies with oppressors": "الزام ظالموں پر ہے",
  "And transgress on earth without right": "اور زمین میں ناحق زیادتی کرتے ہیں",
  "Unjust transgression condemned": "ناحق زیادتی مذموم ہے",

  // cosmicSigns
  "To Him belong the keys of heavens and earth": "آسمانوں اور زمین کی کنجیاں اسی کی ہیں",
  "Divine ownership of all creation": "تمام مخلوقات کی الٰہی ملکیت",
  "He extends provision for whom He wills and restricts": "جسے چاہے رزق کشادہ کرے اور تنگ کرے",
  "Divine control over provision": "رزق پر الٰہی اختیار",
  "And among His signs is the creation of heavens and earth": "اور اس کی نشانیوں میں سے آسمانوں اور زمین کی تخلیق ہے",
  "Cosmic creation as divine sign": "کائناتی تخلیق بطور الٰہی نشانی",
  "And what He has dispersed in them of creatures": "اور جو اس نے ان میں جانداروں کو پھیلایا ہے",
  "Life forms as signs of divine power": "جاندار الٰہی قدرت کی نشانیاں ہیں",
  "And He is able to gather them when He wills": "اور جب چاہے انہیں جمع کرنے پر قادر ہے",
  "Power to resurrect all creatures": "تمام مخلوقات کو دوبارہ اٹھانے کی قدرت",

  // maritimeSigns
  "And among His signs are ships sailing in the sea like mountains": "اور اس کی نشانیوں میں سے سمندر میں پہاڑوں کی طرح چلنے والے جہاز ہیں",
  "Ships as divine signs of Allah's power": "جہاز اللہ کی قدرت کی الٰہی نشانیاں ہیں",
  "If He wills, He can still the wind": "اگر چاہے تو ہوا کو روک دے",
  "Control over wind that moves ships": "جہازوں کو چلانے والی ہوا پر اختیار",
  "And they would remain motionless on its surface": "اور وہ اس کی سطح پر ساکت رہ جائیں",
  "Ships dependent on divine will": "جہاز الٰہی مرضی پر منحصر ہیں",
  "Indeed in that are signs for every patient and grateful one": "بے شک اس میں ہر صبر کرنے والے شکر گزار کے لیے نشانیاں ہیں",
  "Signs for those who are patient and thankful": "صبر اور شکر کرنے والوں کے لیے نشانیاں",
  "Or He could destroy them for what they earned": "یا ان کے اعمال کی وجہ سے انہیں غرق کر دے",
  "Ships can be wrecked as punishment": "جہاز بطور سزا تباہ ہو سکتے ہیں",
  "And He pardons much": "اور وہ بہت معاف کرتا ہے",
  "Divine pardon spares many": "الٰہی عفو بہت سوں کو بچاتی ہے",

  // divineSovereignty
  "To Him belongs the dominion of heavens and earth": "آسمانوں اور زمین کی بادشاہی اسی کی ہے",
  "Absolute divine sovereignty": "مطلق الٰہی حاکمیت",
  "He creates what He wills": "وہ جو چاہے پیدا کرتا ہے",
  "Unlimited creative power": "لامحدود تخلیقی قدرت",
  "He gives to whom He wills females": "جسے چاہے بیٹیاں عطا کرے",
  "Gender is divine decree": "جنس الٰہی فیصلے سے ہے",
  "And gives to whom He wills males": "اور جسے چاہے بیٹے عطا کرے",
  "Children are divine gifts": "اولاد الٰہی نعمت ہے",
  "Or He grants them both males and females": "یا انہیں بیٹے اور بیٹیاں دونوں عطا کرے",
  "Variety in family composition": "خاندانی ساخت میں تنوع",
  "And makes whom He wills barren": "اور جسے چاہے بے اولاد رکھے",
  "Fertility is divine decision": "اولاد کا ہونا الٰہی فیصلہ ہے",
  "Indeed He is Knowing, Competent": "بے شک وہ علم والا قدرت والا ہے",
  "Divine knowledge and power combined": "الٰہی علم اور قدرت کا اجتماع",

  // trialsAndRecompense
  "Whatever misfortune befalls you is for what your hands have earned": "جو مصیبت بھی تمہیں پہنچے وہ تمہارے اپنے ہاتھوں کی کمائی ہے",
  "Calamities result from one's actions": "مصائب اپنے اعمال کا نتیجہ ہیں",
  "Allah overlooks many sins": "اللہ بہت سے گناہ نظرانداز کرتا ہے",
  "You cannot escape on earth": "تم زمین میں بھاگ نہیں سکتے",
  "No escaping divine decree": "الٰہی فیصلے سے فرار ناممکن",
  "And you have besides Allah no protector and no helper": "اور اللہ کے سوا تمہارا کوئی دوست اور مددگار نہیں",
  "Only Allah provides real protection": "صرف اللہ ہی حقیقی حفاظت فراہم کرتا ہے",

  // propheticMission
  "So to that invite, and be steadfast as you are commanded": "پس اسی کی طرف دعوت دو اور ثابت قدم رہو جیسا تمہیں حکم ہوا ہے",
  "Command to invite and remain firm": "دعوت دینے اور ثابت قدم رہنے کا حکم",
  "And do not follow their desires": "اور ان کی خواہشات کی پیروی نہ کرو",
  "Not swayed by people's wishes": "لوگوں کی خواہشات سے متاثر نہ ہونا",
  "And say: I believe in whatever book Allah has sent down": "اور کہو: میں ہر اس کتاب پر ایمان لایا جو اللہ نے اتاری",
  "Belief in all revealed scriptures": "تمام نازل شدہ کتابوں پر ایمان",
  "And I have been commanded to be just among you": "اور مجھے حکم ہوا ہے کہ تمہارے درمیان انصاف کروں",
  "Justice as prophetic principle": "انصاف بطور نبوی اصول",
  "Allah is our Lord and your Lord": "اللہ ہمارا اور تمہارا رب ہے",
  "Shared Lord between all people": "تمام لوگوں کا مشترک رب",
  "For us are our deeds, and for you your deeds": "ہمارے لیے ہمارے اعمال اور تمہارے لیے تمہارے اعمال",
  "Individual accountability": "انفرادی جوابدہی",
  "There is no argument between us and you": "ہمارے اور تمہارے درمیان کوئی جھگڑا نہیں",
  "No need for debate - truth is clear": "بحث کی ضرورت نہیں - حق واضح ہے",

  // dayOfJudgment
  "A Day which there is no averting from Allah": "ایک دن جو اللہ کی طرف سے ٹلنے والا نہیں",
  "Judgment Day is unavoidable": "یومِ قیامت ناگزیر ہے",
  "No refuge for you that Day": "اس دن تمہارے لیے کوئی پناہ نہیں",
  "No place to hide on Judgment Day": "قیامت کے دن چھپنے کی کوئی جگہ نہیں",
  "Nor for you any denial": "اور نہ تمہارے لیے کوئی انکار",
  "No denying one's deeds": "اپنے اعمال کا انکار ناممکن",
  "You will see the wrongdoers fearful of what they earned": "تم ظالموں کو دیکھو گے کہ اپنے اعمال سے خوفزدہ ہوں گے",
  "Terror of wrongdoers facing their deeds": "اپنے اعمال کا سامنا کرتے ظالموں کی دہشت",
  "And it will befall them": "اور یہ ان پر واقع ہو کر رہے گا",
  "Punishment will definitely reach them": "سزا یقیناً ان تک پہنچے گی",
  "And those who believed and did righteous deeds will be in gardens of Paradise": "اور جو ایمان لائے اور نیک عمل کیے وہ جنت کے باغوں میں ہوں گے",
  "Believers in gardens of bliss": "مومنین نعمت کے باغوں میں",
  "They will have whatever they wish with their Lord": "ان کے لیے ان کے رب کے پاس جو چاہیں گے ملے گا",
  "Unlimited wishes fulfilled in Paradise": "جنت میں لامحدود خواہشات پوری ہوں گی",

  // guidanceAndMisguidance
  "Whoever Allah sends astray, for him there is no protector after Him": "جسے اللہ گمراہ کرے اس کے بعد اس کا کوئی کارساز نہیں",
  "No help for those Allah allows to stray": "جنہیں اللہ گمراہ ہونے دے ان کی کوئی مدد نہیں",
  "And you will see the wrongdoers when they see the punishment": "اور تم ظالموں کو دیکھو گے جب وہ عذاب دیکھیں گے",
  "Wrongdoers will see punishment": "ظالم عذاب دیکھیں گے",
  "Saying: Is there any way to return?": "کہیں گے: کیا واپسی کا کوئی راستہ ہے؟",
  "Desperate plea to go back": "واپس جانے کی بے بس التجا",
  "And indeed you guide to a straight path": "اور بے شک تم سیدھے راستے کی طرف رہنمائی کرتے ہو",
  "Prophet guides to the straight way": "نبی ﷺ صراطِ مستقیم کی رہنمائی کرتے ہیں",
  "The path of Allah": "اللہ کا راستہ",
  "Allah's path - the only true path": "اللہ کا راستہ - واحد سچا راستہ",
  "To whom belongs whatever is in heavens and earth": "جس کا ہے جو کچھ آسمانوں اور زمین میں ہے",
  "Allah owns all creation": "اللہ تمام مخلوقات کا مالک ہے",
  "Unquestionably, to Allah do all matters return": "سنو! تمام معاملات اللہ ہی کی طرف لوٹتے ہیں",
  "Final return to Allah - closing verse": "اللہ کی طرف آخری بازگشت - اختتامی آیت",

  // divineNames (some already have Urdu, only fix English ones)
  "The Most High, the Greatest": "بلند ترین، عظیم ترین",
  "Supreme elevation and grandeur": "اعلیٰ بلندی اور عظمت",
  "The Hearing, the Seeing": "سننے والا، دیکھنے والا",
  "All-perceiving awareness": "ہمہ گیر سماعت و بصارت",
  "The Subtle, the Aware": "باریک بین، باخبر",
  "Gentle awareness of all details": "ہر تفصیل سے نرم آگاہی",
  "The Powerful, the Mighty": "طاقتور، غالب",
  "Strength and dominance": "طاقت اور غلبہ",
  "The Protector": "حامی و ناصر",
  "Allah as guardian and supporter": "اللہ بطور محافظ اور مددگار",
  "The One who gives life to the dead": "مردوں کو زندہ کرنے والا",
  "Power of resurrection": "دوبارہ زندہ کرنے کی قدرت",

  // beliversCharacteristics
  "They respond to their Lord": "وہ اپنے رب کی بات مانتے ہیں",
  "Responsive obedience to Allah": "اللہ کی فرمانبرداری",
  "Maintaining regular prayer": "باقاعدہ نماز کی پابندی",
  "Their affair is consultation among them": "ان کے معاملات آپس کی مشاورت سے ہوتے ہیں",
  "Mutual consultation in decisions": "فیصلوں میں باہمی مشاورت",
  "Generous spending from provisions": "رزق میں سے فراخدلی سے خرچ",
  "They avoid major sins": "وہ بڑے گناہوں سے بچتے ہیں",
  "Staying away from grave sins": "بڑے گناہوں سے دور رہنا",
  "When angry, they forgive": "جب غصہ آئے تو معاف کر دیں",
  "Forgiving even in anger": "غصے میں بھی معاف کرنا",
  "They defend themselves": "وہ اپنا دفاع کرتے ہیں",
  "Standing up against oppression": "ظلم کے خلاف کھڑے ہونا",

  // transcendenceOfAllah
  "Creator of heavens and earth": "آسمانوں اور زمین کا پیدا کرنے والا",
  "Originator of the universe": "کائنات کو وجود میں لانے والا",
  "Made for you from yourselves mates": "تمہارے لیے تم ہی میں سے جوڑے بنائے",
  "Created human pairs": "انسانی جوڑے تخلیق کیے",
  "And of livestock mates": "اور مویشیوں کے بھی جوڑے",
  "Animal pairs for reproduction": "افزائشِ نسل کے لیے حیوانی جوڑے",
  "He multiplies you thereby": "اس طریقے سے تمہیں پھیلاتا ہے",
  "Reproduction system established by Allah": "اللہ کا قائم کردہ نظامِ تولید",
  "There is nothing like Him": "اس کے مثل کوئی چیز نہیں",
  "Absolute uniqueness of Allah - no comparison": "اللہ کی مطلق یکتائی - کوئی مثال نہیں",
  "And He is the Hearing, the Seeing": "اور وہ سننے والا دیکھنے والا ہے",
  "Perfect perception despite transcendence": "تنزیہ کے باوجود کامل ادراک",

  // thematicFlow stages
  "Ha-Mim 'Ayn-Sin-Qaf, revelation from the Mighty, Wise": "حم عسق، غالب حکمت والے کی طرف سے وحی",
  "Warning of gathering Day, Allah as sole Protector": "جمع ہونے کے دن کی تنبیہ، اللہ واحد محافظ",
  "Nothing like Allah, keys of heavens and earth": "اللہ کی کوئی مثل نہیں، آسمانوں اور زمین کی کنجیاں",
  "Same religion to all prophets, warning against division": "تمام انبیاء کو ایک ہی دین، تفرقے سے خبردار",
  "Call to faith, justice, accountability": "ایمان، عدل، جوابدہی کی دعوت",
  "Choosing between worldly and eternal reward": "دنیاوی اور ابدی اجر میں سے انتخاب",
  "Wrongdoers' fate vs believers' paradise, acceptance of repentance": "ظالموں کا انجام بمقابلہ مومنین کی جنت، توبہ کی قبولیت",
  "Measured provision, rain after despair": "ناپ تول سے رزق، مایوسی کے بعد بارش",
  "Creatures, ships, calamities from one's deeds": "مخلوقات، جہاز، اعمال کی وجہ سے مصائب",
  "Forgiveness, consultation, patience, defense against oppression": "معافی، مشاورت، صبر، ظلم کے خلاف دفاع",
  "No guidance for whom Allah leaves astray, seeking return": "جسے اللہ چھوڑ دے اس کی ہدایت نہیں، واپسی کی تلاش",
  "Allah gives males, females, both, or none": "اللہ بیٹے دیتا ہے، بیٹیاں، دونوں یا کوئی نہیں",
  "Three ways Allah communicates, guidance to straight path": "اللہ کے کلام کے تین طریقے، صراطِ مستقیم کی ہدایت",

  // uniqueInsight
  "The Surah of Consultation and Unity": "مشاورت اور اتحاد کی سورت",
  "Surah Ash-Shura is unique in several ways. First, it is the only surah with two sets of disconnected letters (Ha-Mim and 'Ayn-Sin-Qaf), emphasizing its special place in the Ha-Mim series. Second, it gives the surah its name from the principle of 'shura' (consultation) in verse 38 - one of the foundations of Islamic governance and community decision-making. Third, it presents the most comprehensive statement on the unity of religion: the same core message was given to Nuh, Ibrahim, Musa, Isa, and Muhammad. Division came not from different messages but from 'jealousy between themselves' after knowledge came. Fourth, it balances the right to self-defense with the superiority of forgiveness - retaliation is permitted but 'whoever pardons and makes reconciliation, his reward is with Allah.' Fifth, the famous verse 'There is nothing like Him' (42:11) is the clearest statement of divine transcendence in the Quran, yet immediately followed by 'He is the Hearing, the Seeing' - showing Allah is both utterly unique and personally aware. The surah closes with the three modes of divine communication, explaining how prophets received revelation, and ends with the powerful statement: 'To Allah return all matters.'": "سورۃ الشوریٰ کئی طرح سے منفرد ہے۔ اول، یہ واحد سورت ہے جس میں حروفِ مقطعات کے دو مجموعے ہیں (حم اور عسق)، جو حوامیم سلسلے میں اس کا خاص مقام واضح کرتے ہیں۔ دوم، سورت کا نام آیت 38 میں 'شوریٰ' (مشاورت) کے اصول سے ہے - جو اسلامی نظامِ حکومت اور فیصلہ سازی کی بنیادوں میں سے ہے۔ سوم، یہ دین کی وحدت کا سب سے جامع بیان پیش کرتی ہے: نوح، ابراہیم، موسیٰ، عیسیٰ اور محمد ﷺ سب کو ایک ہی بنیادی پیغام دیا گیا۔ تفرقہ مختلف پیغامات سے نہیں بلکہ علم آنے کے بعد 'آپس کی حسد' سے ہوا۔ چہارم، یہ دفاعِ نفس کے حق اور معافی کی فوقیت میں توازن قائم کرتی ہے - بدلہ جائز ہے لیکن 'جو معاف کرے اور اصلاح کرے اس کا اجر اللہ کے ذمے ہے'۔ پنجم، مشہور آیت 'اس جیسی کوئی چیز نہیں' (42:11) قرآن میں تنزیہ کا واضح ترین بیان ہے، مگر فوراً بعد 'وہ سننے والا دیکھنے والا ہے' - جو ظاہر کرتا ہے کہ اللہ بالکل یکتا بھی ہے اور ذاتی طور پر باخبر بھی۔ سورت وحی الٰہی کے تین طریقوں سے ختم ہوتی ہے اور طاقتور بیان 'سنو! تمام معاملات اللہ ہی کی طرف لوٹتے ہیں' پر اختتام پذیر ہوتی ہے۔",

  // historicalContext
  "This Makkan surah was revealed during a period when the Prophet faced opposition and needed to clarify the nature of his mission. The emphasis on the unity of religion countered claims that Islam was a new or foreign religion - it was the same message given to all prophets. The principle of shura (consultation) established an Islamic approach to governance distinct from both the tribal absolutism of Arabia and the imperial systems of Rome and Persia. The detailed explanation of revelation modes (42:51) responded to questions about how the Prophet received divine communication.": "یہ مکی سورت اس دور میں نازل ہوئی جب نبی ﷺ کو مخالفت کا سامنا تھا اور اپنے مشن کی نوعیت واضح کرنے کی ضرورت تھی۔ دین کی وحدت پر زور نے ان دعوؤں کا رد کیا کہ اسلام کوئی نیا یا اجنبی مذہب ہے - یہ وہی پیغام تھا جو تمام انبیاء کو دیا گیا۔ شوریٰ (مشاورت) کے اصول نے اسلامی نظامِ حکومت قائم کیا جو عرب کی قبائلی مطلق العنانیت اور روم و فارس کی سلطنتی نظاموں دونوں سے مختلف تھا۔ وحی کے طریقوں کی تفصیلی وضاحت (42:51) نے ان سوالات کا جواب دیا کہ نبی ﷺ کو الٰہی پیغام کیسے ملتا تھا۔",

  // linguisticFeatures
  "Double Huruf Muqatta'at": "دوہرے حروفِ مقطعات",
  "Only surah with two sets of disconnected letters": "واحد سورت جس میں حروفِ مقطعات کے دو مجموعے ہیں",
  "Consultation": "مشاورت",
  "Noun form emphasizing the principle itself": "اسمی صورت جو خود اصول پر زور دیتی ہے",
  "Nothing like Him": "اس جیسا کچھ نہیں",
  "Double negation (laysa + ka-mithlihi) for emphasis on uniqueness": "یکتائی پر زور کے لیے دوہری نفی (لیس + کمثلہ)",
  "Matters of determination": "پختہ عزم کے معاملات",
  "Forgiveness requires 'azm - firm resolve": "معافی کو عزم یعنی پختہ ارادے کی ضرورت ہے",
  "Keys": "کنجیاں",
  "Plural of miqlaad - keys to treasures": "مقلاد کی جمع - خزانوں کی کنجیاں",
  "Gardens of Paradise": "جنت کے باغات",
  "Double plural - gardens within gardens": "دوہری جمع - باغوں کے اندر باغات",

  // shuraVerse
  "And those who respond to their Lord, establish prayer, and whose affair is consultation among them, and from what We have provided them, they spend": "اور جو لوگ اپنے رب کی بات مانتے ہیں، نماز قائم کرتے ہیں، ان کے معاملات آپس کی مشاورت سے ہوتے ہیں، اور جو ہم نے انہیں دیا ہے اس میں سے خرچ کرتے ہیں",
  "This verse establishes Shura (consultation) as a fundamental Islamic principle alongside prayer and charity. It places collective decision-making at the heart of the Muslim community's identity.": "یہ آیت شوریٰ (مشاورت) کو نماز اور زکوٰۃ کے ساتھ ایک بنیادی اسلامی اصول قرار دیتی ہے۔ یہ اجتماعی فیصلہ سازی کو مسلم معاشرے کی شناخت کا مرکز بناتی ہے۔",

  // transcendenceVerse
  "Creator of the heavens and earth. He made for you from yourselves mates, and among livestock, mates. He multiplies you thereby. There is nothing like Him, and He is the Hearing, the Seeing.": "آسمانوں اور زمین کا پیدا کرنے والا۔ اس نے تمہارے لیے تم ہی میں سے جوڑے بنائے اور مویشیوں کے بھی جوڑے۔ اس طریقے سے تمہیں پھیلاتا ہے۔ اس کے مثل کوئی چیز نہیں، اور وہ سننے والا دیکھنے والا ہے۔",
  "Contains the Quran's clearest statement of divine transcendence (laysa ka-mithlihi shay') while affirming Allah's personal attributes - the balance of tanzih (transcendence) and tashbih (similarity) in Islamic theology.": "قرآن کا تنزیہ الٰہی (لیس کمثلہ شئ) کا واضح ترین بیان رکھتی ہے جبکہ اللہ کی ذاتی صفات کی تصدیق بھی کرتی ہے - اسلامی عقیدے میں تنزیہ اور تشبیہ کا توازن۔",

  // hamimConnection
  "Part of the Ha-Mim series (Surahs 40-46)": "حوامیم سلسلے کا حصہ (سورتیں 40-46)",
  "Ash-Shura is unique in the series for having an additional set of letters ('Ayn-Sin-Qaf) after Ha-Mim": "الشوریٰ اس سلسلے میں منفرد ہے کیونکہ حم کے بعد اضافی حروف (عسق) ہیں",
};

function applyTranslations(filePath, translationMap) {
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;

  for (const [english, urdu] of Object.entries(translationMap)) {
    // Escape special regex chars in the english text
    const escaped = english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match ur: "english text" patterns - be specific to avoid matching en: fields
    const regex = new RegExp(`(ur: ")${escaped}(")`, 'g');
    const before = content;
    content = content.replace(regex, `$1${urdu}$2`);
    if (content !== before) {
      count++;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return count;
}

// Process file 042
console.log('Processing 042.js...');
const count042 = applyTranslations(
  path.join(ONTOLOGY_DIR, '042.js'),
  translations042
);
console.log(`  Applied ${count042} translation keys to 042.js`);

console.log('\nDone! Now run node --check on each file to verify syntax.');
