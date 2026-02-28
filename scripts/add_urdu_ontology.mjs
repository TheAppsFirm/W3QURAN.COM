/**
 * Script to add Urdu translations to ontology files 012.js and 038.js
 * Transforms plain string meaning/explanation fields to {en, ur} objects
 */

import fs from 'fs';
import path from 'path';

// Urdu translations for Surah 12 (Yusuf)
const SURAH_12_TRANSLATIONS = {
  // === CATEGORIES descriptions ===
  categories_descriptions: {},

  // === meaning translations (keyed by English text) ===
  meaning: {
    // yusufsChildhood
    "The Best of Stories": "بہترین قصص",
    "The Prophetic Dream": "نبوی خواب",
    "Eleven Stars": "گیارہ ستارے",
    "The Sun and Moon": "سورج اور چاند",
    "Don't narrate your dream": "اپنا خواب مت سناؤ",
    "Satan is a clear enemy": "شیطان کھلا دشمن ہے",
    // brothersJealousy
    "In Yusuf and his brothers are signs": "یوسف اور ان کے بھائیوں میں نشانیاں ہیں",
    "More beloved to our father": "ہمارے باپ کو ہم سے زیادہ پیارے",
    "Kill Yusuf or cast him away": "یوسف کو قتل کر دو یا کسی زمین میں پھینک دو",
    "Depths of the well": "کنویں کی تاریکی",
    "We revealed to him": "ہم نے اس کی طرف وحی کی",
    "With false blood": "جھوٹے خون کے ساتھ",
    "Beautiful Patience": "صبرِ جمیل",
    // egyptAndAziz
    "A traveling caravan": "ایک مسافر قافلہ",
    "Good news!": "خوشخبری!",
    "For a cheap price, few coins": "معمولی قیمت، گنتی کے چند درہم",
    "The Minister/Noble": "عزیزِ مصر",
    "Honor his stay": "اس کی رہائش کو عزت دو",
    "We established Yusuf in the land": "ہم نے یوسف کو زمین میں اختیار دیا",
    "Interpretation of dreams/events": "خوابوں/واقعات کی تعبیر",
    "We gave him wisdom and knowledge": "ہم نے اسے حکمت اور علم عطا کیا",
    // temptationOfZulaykha
    "She sought to seduce him": "اس نے اسے بہکانے کی کوشش کی",
    "She locked the doors": "اس نے دروازے بند کر دیے",
    "Come to me": "میرے پاس آؤ",
    "I seek refuge in Allah!": "میں اللہ کی پناہ مانگتا ہوں!",
    "He (the Aziz/Allah) has been good to me": "اس (عزیز/اللہ) نے میرے ساتھ اچھا سلوک کیا ہے",
    "She intended him, and he would have inclined": "اس عورت نے ارادہ کیا اور وہ بھی مائل ہوتا",
    "The proof from his Lord": "اپنے رب کی برہان",
    "To turn away evil and immorality from him": "اس سے بُرائی اور بے حیائی کو دور کرنے کے لیے",
    "They raced to the door": "دونوں دروازے کی طرف دوڑے",
    "She tore his shirt from behind": "اس نے اس کی قمیض پیچھے سے پھاڑ دی",
    "A witness from her family": "اس کے خاندان میں سے ایک گواہ",
    "Indeed, women's plotting is great": "بے شک عورتوں کی چال بڑی ہے",
    "They cut their hands": "انہوں نے اپنے ہاتھ کاٹ لیے",
    "This is no human!": "یہ کوئی انسان نہیں!",
    "Prison is more beloved to me": "مجھے قید زیادہ پسند ہے",
    // prisonYears
    "Two young men": "دو نوجوان",
    "I saw myself pressing wine": "میں نے دیکھا کہ میں شراب نچوڑ رہا ہوں",
    "I saw myself carrying bread on my head": "میں نے دیکھا کہ میں اپنے سر پر روٹی اٹھائے ہوں",
    "That is from what my Lord taught me": "یہ اس علم سے ہے جو میرے رب نے مجھے سکھایا",
    "Are many lords better or Allah alone?": "کیا بہت سے رب بہتر ہیں یا ایک اللہ؟",
    "You worship nothing besides names": "تم اس کے سوا محض ناموں کی عبادت کرتے ہو",
    "Mention me to your master": "اپنے آقا کے پاس میرا ذکر کرنا",
    "Satan made him forget mentioning his Lord": "شیطان نے اسے اپنے رب کا ذکر بھلا دیا",
    "So he remained in prison several years": "پھر وہ کئی سال قید میں رہا",
    // kingsVisionAndRelease
    "Seven fat cows": "سات موٹی گائیں",
    "Confused dreams": "پراگندہ خواب",
    "You will plant for seven years continuously": "تم سات سال مسلسل کاشت کرو گے",
    "Then a year when people will have rain": "پھر ایک سال آئے گا جس میں لوگوں کو بارش ملے گی",
    "Return to your master": "اپنے آقا کے پاس واپس جاؤ",
    "What was your affair when you sought Yusuf?": "تمہارا کیا معاملہ تھا جب تم نے یوسف کو پھسلانا چاہا؟",
    "Now the truth has become clear": "اب سچائی واضح ہو گئی",
    "Put me in charge of the storehouses": "مجھے ملک کے خزانوں پر مقرر کر دو",
    "I am a knowing guardian": "میں حفاظت کرنے والا، جاننے والا ہوں",
    // brothersReturn
    "They entered upon him and he recognized them": "وہ اس کے پاس آئے اور اس نے انہیں پہچان لیا",
    "Bring me your brother from your father": "اپنے باپ کی طرف سے اپنا بھائی میرے پاس لاؤ",
    "He put their merchandise in their bags": "اس نے ان کا سامان ان کے تھیلوں میں رکھ دیا",
    "Shall I trust you with him as I trusted you with his brother?": "کیا میں اس کے بارے میں تم پر اعتماد کروں جیسے اس کے بھائی پر کیا تھا؟",
    "Allah is the best Guardian": "اللہ سب سے بہتر حفاظت کرنے والا ہے",
    "Don't enter from one gate": "ایک دروازے سے داخل نہ ہونا",
    "He placed the measuring cup in his brother's bag": "اس نے پیالہ اپنے بھائی کے سامان میں رکھ دیا",
    "They said: The penalty is the one in whose bag it's found": "انہوں نے کہا: سزا یہ ہے کہ جس کے سامان میں نکلے",
    "If he steals, a brother of his stole before": "اگر اس نے چوری کی تو اس سے پہلے اس کے ایک بھائی نے بھی چوری کی تھی",
    "Yusuf concealed it within himself": "یوسف نے اسے اپنے دل میں چھپا لیا",
    "Alas, my grief for Yusuf!": "ہائے یوسف پر میرا غم!",
    "His eyes turned white from grief": "غم سے اس کی آنکھیں سفید ہو گئیں",
    "I only complain of my grief to Allah": "میں اپنا دکھ اور غم صرف اللہ سے کہتا ہوں",
    "Don't despair of Allah's mercy": "اللہ کی رحمت سے مایوس نہ ہو",
    // grandReunion
    "Hardship has touched us and our family": "ہمیں اور ہمارے گھر والوں کو تکلیف پہنچی ہے",
    "Do you know what you did to Yusuf?": "کیا تمہیں معلوم ہے تم نے یوسف کے ساتھ کیا کیا؟",
    "Are you indeed Yusuf?": "کیا واقعی تم یوسف ہو؟",
    "Allah has favored us": "اللہ نے ہم پر احسان کیا ہے",
    "Whoever has taqwa and patience": "جو تقویٰ اختیار کرے اور صبر کرے",
    "No blame on you today": "آج تم پر کوئی ملامت نہیں",
    "May Allah forgive you": "اللہ تمہیں معاف کرے",
    "Take this shirt of mine": "میری یہ قمیض لے جاؤ",
    "Cast it on my father's face, he'll regain sight": "اسے میرے باپ کے چہرے پر ڈال دو وہ بینا ہو جائیں گے",
    "I smell the scent of Yusuf": "مجھے یوسف کی خوشبو آ رہی ہے",
    "I will ask forgiveness for you from my Lord": "میں اپنے رب سے تمہارے لیے مغفرت مانگوں گا",
    "He raised his parents on the throne": "اس نے اپنے والدین کو تخت پر بٹھایا",
    "They fell down in prostration to him": "وہ اس کے لیے سجدے میں گر گئے",
    "This is the interpretation of my dream before": "یہ میرے پہلے خواب کی تعبیر ہے",
    "My Lord has made it reality": "میرے رب نے اسے سچ کر دکھایا",
    "He was kind to me when He freed me from prison": "اس نے مجھ پر احسان کیا جب مجھے قید سے نکالا",
    // closingReflections
    "That is from the news of the unseen": "یہ غیب کی خبروں میں سے ہے",
    "Most people will not believe": "اکثر لوگ ایمان نہیں لائیں گے",
    "How many signs in heavens and earth": "آسمانوں اور زمین میں کتنی نشانیاں ہیں",
    "Most don't believe except while associating partners": "اکثر لوگ ایمان نہیں لاتے مگر شرک کرتے ہوئے",
    "Say: This is my way - I call to Allah": "کہو: یہ میرا راستہ ہے - میں اللہ کی طرف بلاتا ہوں",
    "With insight - I and those who follow me": "بصیرت کے ساتھ - میں اور میرے پیروکار",
    "Until when the messengers despaired": "یہاں تک کہ جب رسول مایوس ہو گئے",
    "Our help came to them": "ہماری مدد ان کے پاس آئی",
    "In their stories is a lesson": "ان کے قصوں میں عبرت ہے",
    "This is not invented speech": "یہ گھڑی ہوئی بات نہیں ہے",
    "Confirmation of what came before": "اپنے سے پہلے کی تصدیق",
    "Detailed explanation of all things": "ہر چیز کی تفصیل",
    "Guidance and mercy for believing people": "ایمان والوں کے لیے ہدایت اور رحمت",
  },

  // === explanation translations (keyed by English text) ===
  explanation: {
    // yusufsChildhood
    "Allah calls this 'the best of stories' - perfect in narrative, moral lessons, and structure. No human author could craft such a tale.": "اللہ اسے 'بہترین قصص' کہتا ہے - بیانیہ، اخلاقی سبق اور ساخت میں کامل۔ کوئی انسانی مصنف ایسی کہانی نہیں بنا سکتا۔",
    "Young Yusuf sees eleven stars, sun, and moon prostrating to him - a prophecy of his future status. True dreams are 1/46th of prophethood.": "چھوٹا یوسف گیارہ ستاروں، سورج اور چاند کو اپنے سامنے سجدہ کرتے دیکھتا ہے - اس کے مستقبل کے مقام کی پیشگوئی۔ سچے خواب نبوت کا چھیالیسواں حصہ ہیں۔",
    "Representing his eleven brothers. Celestial imagery showing their future submission to Yusuf's authority.": "اس کے گیارہ بھائیوں کی نمائندگی۔ آسمانی تصویر کشی جو یوسف کے اختیار کے سامنے ان کی مستقبل کی تابعداری دکھاتی ہے۔",
    "Representing his father Ya'qub and mother (or aunt who raised him). They too would honor him.": "اس کے والد یعقوب اور والدہ (یا خالہ جنہوں نے پالا) کی نمائندگی۔ وہ بھی اسے عزت دیں گے۔",
    "Ya'qub wisely advises concealing the dream from brothers. Lesson: Don't share blessings with potential enviers.": "یعقوب حکمت سے بھائیوں سے خواب چھپانے کی نصیحت کرتے ہیں۔ سبق: نعمتیں حسد کرنے والوں سے نہ بانٹو۔",
    "Ya'qub explains that Satan incites jealousy between relatives. The brothers' envy was Satanic in origin.": "یعقوب بتاتے ہیں کہ شیطان رشتہ داروں میں حسد بھڑکاتا ہے۔ بھائیوں کا حسد شیطانی تحریک تھی۔",
    // brothersJealousy
    "The story is full of 'ayaat' (signs/lessons) - jealousy's destruction, patience's reward, divine planning.": "کہانی 'آیات' (نشانیوں/سبقوں) سے بھری ہے - حسد کی تباہی، صبر کا انعام، الٰہی منصوبہ بندی۔",
    "The brothers' jealousy stemmed from perceived favoritism. Parental equity is crucial to prevent sibling rivalry.": "بھائیوں کا حسد سمجھی ہوئی جانبداری سے تھا۔ بھائیوں کی رقابت روکنے کے لیے والدین کا مساوی سلوک ضروری ہے۔",
    "Extreme response to jealousy - plotting murder of their own brother. Sin escalates when unchecked.": "حسد کا انتہائی ردعمل - اپنے ہی بھائی کے قتل کی سازش۔ گناہ بے لگام ہو تو بڑھتا جاتا ہے۔",
    "One brother suggests the well instead of murder. A caravan would take him far away. Even in evil, some restraint.": "ایک بھائی نے قتل کی بجائے کنواں تجویز کیا۔ قافلہ اسے دور لے جائے گا۔ بُرائی میں بھی کسی کو کچھ روک تھی۔",
    "Allah comforts young Yusuf in the dark well with revelation: 'You will inform them of this deed.' Divine support in darkest moments.": "اللہ تاریک کنویں میں چھوٹے یوسف کو وحی سے تسلی دیتا ہے: 'تم انہیں اس کام کی خبر دو گے۔' تاریک ترین لمحات میں الٰہی مدد۔",
    "They stained Yusuf's shirt with animal blood as 'proof' of wolf attack. But Ya'qub saw through the lie.": "انہوں نے یوسف کی قمیض پر جانور کا خون لگایا بھیڑیے کے حملے کے 'ثبوت' کے طور پر۔ لیکن یعقوب نے جھوٹ پہچان لیا۔",
    "Ya'qub's response: 'Beautiful patience is most fitting.' Patience without complaint, trusting Allah completely.": "یعقوب کا جواب: 'صبرِ جمیل ہی بہتر ہے۔' شکایت کے بغیر صبر، اللہ پر مکمل بھروسہ۔",
    // egyptAndAziz
    "A caravan discovered Yusuf in the well. What seemed like disaster was Allah's plan to elevate him.": "ایک قافلے نے کنویں میں یوسف کو دریافت کیا۔ جو تباہی لگ رہی تھی وہ اللہ کا اسے بلند کرنے کا منصوبہ تھا۔",
    "The water-drawer exclaimed with joy at finding a boy. Irony: They saw monetary value; Allah planned prophethood.": "پانی نکالنے والے نے لڑکا پا کر خوشی سے پکارا۔ ستم ظریفی: انہوں نے مالی قدر دیکھی؛ اللہ نے نبوت کا منصوبہ بنایا تھا۔",
    "A future prophet sold for mere dirhams. Human valuations are nothing compared to divine worth.": "ایک مستقبل کے نبی چند درہموں میں بکے۔ انسانی قدر الٰہی قدر کے سامنے کچھ نہیں۔",
    "High official of Egypt who bought Yusuf. Title means 'mighty/dear.' He sensed Yusuf's special nature.": "مصر کے بلند مرتبہ عہدیدار جنہوں نے یوسف کو خریدا۔ لقب کا مطلب 'عزت والا'۔ انہوں نے یوسف کی خاص فطرت محسوس کی۔",
    "The Aziz instructed his wife to treat Yusuf well. Little did he know what trials this would bring.": "عزیز نے اپنی بیوی کو یوسف کے ساتھ اچھا سلوک کرنے کی ہدایت کی۔ اسے کیا معلوم تھا کہ اس سے کیا آزمائشیں آئیں گی۔",
    "Allah was positioning Yusuf for greatness. Every hardship was a stepping stone to authority.": "اللہ یوسف کو عظمت کے لیے تیار کر رہا تھا۔ ہر مشقت اقتدار کی طرف ایک سیڑھی تھی۔",
    "Allah taught Yusuf dream interpretation - a gift that would later save nations from famine.": "اللہ نے یوسف کو خوابوں کی تعبیر سکھائی - ایک تحفہ جو بعد میں قوموں کو قحط سے بچائے گا۔",
    "At maturity, Yusuf received divine wisdom. Reward for the patient and righteous (muhsineen).": "بلوغت پر یوسف کو الٰہی حکمت ملی۔ صابرین اور نیکوکاروں (محسنین) کا انعام۔",
    // temptationOfZulaykha
    "The Aziz's wife (tradition names her Zulaykha) tried to seduce Yusuf. Test of beauty, power, and opportunity.": "عزیز کی بیوی (روایت میں زلیخا) نے یوسف کو بہکانے کی کوشش کی۔ حسن، طاقت اور موقع کی آزمائش۔",
    "Multiple doors locked - Arabic intensive form shows complete privacy and planning. No escape route.": "کئی دروازے بند - عربی کا تاکیدی صیغہ مکمل رازداری اور منصوبہ بندی ظاہر کرتا ہے۔ فرار کا کوئی راستہ نہیں۔",
    "Direct, shameless invitation. She had status, beauty, privacy, persistence. Yet Yusuf resisted.": "براہ راست، بے شرم دعوت۔ اس کے پاس مقام، حسن، تنہائی، اصرار تھا۔ پھر بھی یوسف نے مزاحمت کی۔",
    "Yusuf's immediate response - fleeing to Allah, not debating or rationalizing. Model of chastity.": "یوسف کا فوری جواب - اللہ کی طرف بھاگنا، نہ بحث نہ عذر۔ عفت کا نمونہ۔",
    "Two meanings: The master treated me well (I won't betray him). Allah blessed me (I won't disobey Him).": "دو مطلب: آقا نے میرے ساتھ اچھا کیا (میں خیانت نہیں کروں گا)۔ اللہ نے مجھ پر احسان کیا (میں نافرمانی نہیں کروں گا)۔",
    "She fully intended sin. Yusuf's 'intention' was human nature's pull - but he resisted upon seeing Allah's sign.": "اس نے پوری طرح گناہ کا ارادہ کیا۔ یوسف کا 'ارادہ' انسانی فطرت کی کشش تھی - لیکن اللہ کی نشانی دیکھ کر رُک گئے۔",
    "Allah showed Yusuf a 'burhan' (proof/sign) that stopped him. Divine intervention for the sincere.": "اللہ نے یوسف کو 'برہان' (دلیل/نشانی) دکھائی جس نے روکا۔ مخلصین کے لیے الٰہی مداخلت۔",
    "Allah protected Yusuf because he was 'mukhlaseen' (sincere). Sincerity earns divine protection.": "اللہ نے یوسف کی حفاظت کی کیونکہ وہ 'مخلصین' میں سے تھے۔ اخلاص الٰہی حفاظت کا باعث ہے۔",
    "He fled, she chased. Physical escape from sin - running away is wisdom, not cowardice.": "وہ بھاگا، اس نے تعاقب کیا۔ گناہ سے جسمانی فرار - بھاگنا حکمت ہے، بزدلی نہیں۔",
    "The shirt became evidence: torn from BEHIND proves he was fleeing, not attacking. Allah provides witnesses.": "قمیض ثبوت بن گئی: پیچھے سے پھٹنا ثابت کرتا ہے کہ وہ بھاگ رہا تھا، حملہ نہیں کر رہا۔ اللہ گواہ مہیا کرتا ہے۔",
    "Her own relative testified using the shirt logic. Truth emerges from unexpected sources.": "اس کے اپنے رشتہ دار نے قمیض کی منطق سے گواہی دی۔ سچائی غیر متوقع ذرائع سے نکلتی ہے۔",
    "The Aziz's statement about deceptive schemes. Note: This refers to specific women's actions, not all women.": "عزیز کا فریبی چالوں کے بارے میں بیان۔ نوٹ: یہ مخصوص عورتوں کے اعمال کی طرف اشارہ ہے، تمام عورتوں کی طرف نہیں۔",
    "When Yusuf entered, the noblewomen were so stunned by his beauty they cut themselves unknowingly.": "جب یوسف داخل ہوا، شریف عورتیں اس کے حسن سے اتنی حیران ہوئیں کہ بے خبری میں اپنے ہاتھ کاٹ لیے۔",
    "The women declared Yusuf looked like an angel. His beauty was proverbial in all traditions.": "عورتوں نے اعلان کیا کہ یوسف فرشتے جیسا لگتا ہے۔ اس کا حسن تمام روایات میں ضرب المثل تھا۔",
    "Yusuf CHOSE prison over sin. Preferring hardship for faith over comfort in disobedience.": "یوسف نے گناہ پر قید کو ترجیح دی۔ نافرمانی میں آرام پر ایمان کے لیے مشقت کو ترجیح دی۔",
    // prisonYears
    "Two servants of the king imprisoned with Yusuf - a cupbearer and a baker. Both had dreams.": "بادشاہ کے دو خدمت گار یوسف کے ساتھ قید تھے - ساقی اور نانبائی۔ دونوں نے خواب دیکھے۔",
    "The cupbearer's dream - he would return to serving the king. Good news interpreted correctly.": "ساقی کا خواب - وہ بادشاہ کی خدمت میں واپس آئے گا۔ خوشخبری درست تعبیر۔",
    "The baker's dream - birds eating from bread on his head meant his execution. Hard truth delivered kindly.": "نانبائی کا خواب - پرندے اس کے سر سے روٹی کھا رہے ہیں یعنی اسے سولی دی جائے گی۔ سخت سچائی نرمی سے بیان۔",
    "Yusuf attributes his gift to Allah, using the opportunity for da'wah (calling to faith).": "یوسف اپنی صلاحیت اللہ کی طرف منسوب کرتا ہے اور دعوت (ایمان کی طرف بلانے) کا موقع استعمال کرتا ہے۔",
    "Yusuf's powerful da'wah question - logical argument for Tawheed even in prison.": "یوسف کا طاقتور دعوتی سوال - قید میں بھی توحید کی منطقی دلیل۔",
    "Idols are just names with no reality. Powerful critique of polytheism from prison.": "بت محض نام ہیں جن کی کوئی حقیقت نہیں۔ قید سے شرک کی طاقتور تنقید۔",
    "Yusuf asked the cupbearer to mention him to the king. Using means while trusting Allah.": "یوسف نے ساقی سے کہا بادشاہ کے پاس اس کا ذکر کرنا۔ اللہ پر بھروسہ کے ساتھ اسباب اختیار کرنا۔",
    "The cupbearer forgot for years. Some say Yusuf's reliance on human help prolonged his imprisonment.": "ساقی سالوں تک بھول گیا۔ بعض کہتے ہیں یوسف کا انسانی مدد پر بھروسہ قید لمبی ہونے کا سبب بنا۔",
    "Bid'a = 3-9 years. Long imprisonment, but it was preparation for greater responsibility.": "بضع = 3-9 سال۔ طویل قید، لیکن یہ بڑی ذمہ داری کی تیاری تھی۔",
    // kingsVisionAndRelease
    "The king's dream: 7 fat cows eaten by 7 lean, 7 green ears and 7 dry. Advisors couldn't interpret.": "بادشاہ کا خواب: 7 موٹی گائیوں کو 7 دبلی کھا گئیں، 7 سبز بالیاں اور 7 خشک۔ مشیر تعبیر نہ کر سکے۔",
    "Court advisors dismissed it as meaningless. Their incompetence would lead to Yusuf's release.": "دربار کے مشیروں نے اسے بے معنی قرار دیا۔ ان کی نااہلی یوسف کی رہائی کا سبب بنے گی۔",
    "Yusuf interpreted: 7 years of abundance, then 7 of famine. Store grain in ears to preserve it.": "یوسف نے تعبیر بتائی: 7 سال فراوانی، پھر 7 سال قحط۔ غلہ بالیوں سمیت محفوظ رکھو۔",
    "Yusuf added information NOT in the dream - a 15th year of relief. Prophetic knowledge.": "یوسف نے خواب میں نہ ہونے والی معلومات شامل کیں - پندرھواں سال سکون کا۔ نبوی علم۔",
    "When summoned, Yusuf refused to leave prison until his innocence was proven. Dignity over freedom.": "جب بلایا گیا، یوسف نے بے گناہی ثابت ہونے تک قید سے نکلنے سے انکار کیا۔ آزادی سے زیادہ عزت۔",
    "The king investigated. The women confessed: 'We know no evil of him.' Public exoneration.": "بادشاہ نے تحقیق کی۔ عورتوں نے اعتراف کیا: 'ہم اس میں کوئی بُرائی نہیں جانتیں۔' عوامی بریت۔",
    "Zulaykha finally confessed: 'I sought to seduce him, he was truthful.' Complete vindication.": "زلیخا نے آخرکار اعتراف کیا: 'میں نے اسے پھسلانے کی کوشش کی، وہ سچا تھا۔' مکمل بریت۔",
    "Yusuf requested authority over Egypt's resources. Self-recommendation when qualified is permissible.": "یوسف نے مصر کے وسائل پر اختیار کی درخواست کی۔ اہل ہونے پر خود کو پیش کرنا جائز ہے۔",
    "Yusuf's credentials: trustworthy (hafeeth) and knowledgeable ('aleem). Leadership qualities.": "یوسف کی اہلیت: امانت دار (حفیظ) اور باعلم (علیم)۔ قائدانہ صفات۔",
    "From slave to vizier. Allah's plan unfolds - patient trust leads to authority and honor.": "غلام سے وزیر تک۔ اللہ کا منصوبہ سامنے آتا ہے - صبر اور بھروسہ اقتدار اور عزت کی طرف لے جاتا ہے۔",
    // brothersReturn
    "The brothers came for grain during famine. Yusuf recognized them; they didn't recognize him.": "بھائی قحط میں غلہ لینے آئے۔ یوسف نے انہیں پہچان لیا؛ انہوں نے نہیں پہچانا۔",
    "Yusuf demanded they bring Binyamin (Benjamin), his full brother. Testing and strategizing.": "یوسف نے مطالبہ کیا کہ بنیامین (اپنا سگا بھائی) لائیں۔ آزمائش اور حکمت عملی۔",
    "Yusuf secretly returned their payment. Generosity despite their past betrayal.": "یوسف نے خفیہ طور پر ان کی قیمت واپس کر دی۔ ان کی پرانی دھوکا دہی کے باوجود سخاوت۔",
    "Ya'qub reminded them of their betrayal with Yusuf. Trust once broken is hard to restore.": "یعقوب نے انہیں یوسف کے ساتھ دھوکے کی یاد دلائی۔ ایک بار ٹوٹا اعتماد بحال ہونا مشکل ہے۔",
    "Ya'qub ultimately trusted Allah, not his sons. True tawakkul.": "یعقوب نے آخرکار بیٹوں پر نہیں اللہ پر بھروسہ کیا۔ حقیقی توکل۔",
    "Ya'qub advised separate entries to avoid attracting evil eye. Practical precaution while trusting Allah.": "یعقوب نے نظر بد سے بچنے کے لیے الگ الگ داخل ہونے کی نصیحت کی۔ اللہ پر بھروسے کے ساتھ عملی احتیاط۔",
    "Yusuf's strategy to keep Binyamin. The cup was 'found' - brothers accused of theft.": "بنیامین کو رکھنے کی یوسف کی حکمت عملی۔ پیالہ 'مل گیا' - بھائیوں پر چوری کا الزام۔",
    "By their own law (Canaanite), the 'thief' became a servant. They condemned Binyamin unknowingly.": "ان کے اپنے قانون (کنعانی) کے مطابق 'چور' خدمت گار بنتا ہے۔ انہوں نے بے خبری میں بنیامین کو محکوم کیا۔",
    "Brothers slandered Yusuf! He kept his pain hidden: 'You are worse in position.'": "بھائیوں نے یوسف کی تہمت لگائی! اس نے درد چھپا لیا: 'تمہارا درجہ بدتر ہے۔'",
    "Yusuf didn't reveal his identity or anger. Self-control in the face of injustice.": "یوسف نے نہ شناخت ظاہر کی نہ غصہ۔ ظلم کے سامنے ضبطِ نفس۔",
    "Ya'qub's cry when Binyamin was detained. His grief for Yusuf never diminished.": "بنیامین کی گرفتاری پر یعقوب کا فریاد۔ یوسف کا غم کبھی کم نہیں ہوا۔",
    "Ya'qub went blind from crying. Intense, prolonged grief for his beloved son.": "یعقوب رونے سے اندھے ہو گئے۔ اپنے پیارے بیٹے کے لیے شدید، طویل غم۔",
    "Ya'qub's grief didn't mean lack of faith. Complaining TO Allah is different from ABOUT Allah.": "یعقوب کا غم ایمان کی کمی نہیں تھا۔ اللہ سے شکایت کرنا اللہ کی شکایت کرنے سے مختلف ہے۔",
    "After decades, Ya'qub still had hope. Only disbelievers despair of Allah's relief.": "دہائیوں بعد بھی یعقوب کو امید تھی۔ صرف کافر اللہ کی رحمت سے مایوس ہوتے ہیں۔",
    // grandReunion
    "Brothers returned humbled by famine. Arrogance replaced by desperation - transformation through trial.": "بھائی قحط سے عاجز ہو کر لوٹے۔ تکبر کی جگہ لاچاری - آزمائش سے تبدیلی۔",
    "Yusuf finally reveals the question. Moment of truth after decades of concealment.": "یوسف آخرکار سوال ظاہر کرتا ہے۔ دہائیوں کی پوشیدگی کے بعد سچائی کا لمحہ۔",
    "Shock and recognition. The despised brother became the powerful vizier.": "صدمہ اور پہچان۔ حقیر سمجھا جانے والا بھائی طاقتور وزیر بن گیا۔",
    "Yusuf attributes success to Allah's favor, not his own merit. Humility in triumph.": "یوسف کامیابی کو اللہ کے فضل سے منسوب کرتا ہے، اپنی محنت سے نہیں۔ فتح میں عاجزی۔",
    "Yusuf's formula: God-consciousness (taqwa) + patience (sabr) = Allah never wastes reward.": "یوسف کا فارمولا: خدا ترسی (تقویٰ) + صبر = اللہ کبھی اجر ضائع نہیں کرتا۔",
    "Complete forgiveness! No revenge, no 'I told you so.' Model of prophetic mercy.": "مکمل معافی! نہ انتقام، نہ 'میں نے کہا تھا'۔ نبوی رحمت کا نمونہ۔",
    "Yusuf not only forgave but prayed for their divine forgiveness. Ultimate nobility.": "یوسف نے نہ صرف معاف کیا بلکہ ان کی الٰہی مغفرت کی دعا کی۔ اعلیٰ ترین شرافت۔",
    "The shirt motif returns! Once bloodied as false evidence, now a cure. Full circle.": "قمیض کا نقش واپس آتا ہے! کبھی جھوٹے ثبوت کے طور پر خون آلود، اب شفا۔ دائرہ مکمل۔",
    "Miraculous cure - Yusuf's shirt restored Ya'qub's sight. Divine healing.": "معجزانہ شفا - یوسف کی قمیض نے یعقوب کی بینائی بحال کی۔ الٰہی شفا۔",
    "Ya'qub sensed Yusuf's scent from afar! A father's heart, prophetic intuition, or miracle.": "یعقوب نے دور سے یوسف کی خوشبو محسوس کی! باپ کا دل، نبوی بصیرت، یا معجزہ۔",
    "Ya'qub also forgave his sons and promised to pray for them. Prophets forgive greatly.": "یعقوب نے بھی بیٹوں کو معاف کیا اور ان کے لیے دعا کا وعدہ کیا۔ انبیاء عظیم معافی دیتے ہیں۔",
    "Yusuf honored his parents by seating them on his throne. Ultimate filial respect.": "یوسف نے والدین کو تخت پر بٹھا کر عزت دی۔ اعلیٰ ترین والدین کی عزت۔",
    "The dream fulfilled! Parents and brothers prostrated (greeting of respect, not worship).": "خواب پورا ہوا! والدین اور بھائیوں نے سجدہ کیا (عزت کا سلام، عبادت نہیں)۔",
    "Full circle - from childhood dream to royal fulfillment. Divine promises always come true.": "دائرہ مکمل - بچپن کے خواب سے شاہی تکمیل تک۔ الٰہی وعدے ہمیشہ پورے ہوتے ہیں۔",
    "Yusuf acknowledges Allah's planning. Every hardship was a stepping stone to this moment.": "یوسف اللہ کی تدبیر کا اعتراف کرتا ہے۔ ہر مشقت اس لمحے تک ایک سیڑھی تھی۔",
    "Yusuf says 'prison' not 'well' - protecting his brothers' honor even in his triumph. Ultimate mercy.": "یوسف 'قید' کہتا ہے نہ کہ 'کنواں' - فتح میں بھی بھائیوں کی عزت محفوظ رکھنا۔ اعلیٰ ترین رحمت۔",
    // closingReflections
    "Allah confirms: This story came through revelation, not human knowledge. Proof of prophethood.": "اللہ تصدیق کرتا ہے: یہ کہانی وحی سے آئی، انسانی علم سے نہیں۔ نبوت کا ثبوت۔",
    "Despite clear signs, most reject faith. Truth doesn't guarantee acceptance by masses.": "واضح نشانیوں کے باوجود اکثر ایمان سے انکار کرتے ہیں۔ سچائی عوام کی قبولیت کی ضمانت نہیں۔",
    "Signs everywhere, yet people pass by heedlessly. Spiritual blindness despite physical sight.": "ہر جگہ نشانیاں، پھر بھی لوگ بے خبری سے گزر جاتے ہیں۔ بینائی ہونے کے باوجود روحانی اندھاپن۔",
    "Hidden shirk - believing in Allah but mixing worship with others. Dangerous spiritual state.": "پوشیدہ شرک - اللہ پر ایمان لیکن دوسروں کی عبادت ملا دینا۔ خطرناک روحانی حالت۔",
    "The Prophet's declaration of his mission - da'wah with insight (baseerah), not blind following.": "نبی ﷺ کا اپنے مشن کا اعلان - بصیرت سے دعوت، اندھی تقلید نہیں۔",
    "True followers have INSIGHT (baseerah) - understanding, not blind imitation.": "سچے پیروکاروں کے پاس بصیرت ہے - سمجھ، اندھی نقل نہیں۔",
    "Victory comes at the darkest moment - when even prophets felt hopelessness. Then Allah's help arrives.": "فتح تاریک ترین لمحے میں آتی ہے - جب انبیاء بھی مایوسی محسوس کریں۔ پھر اللہ کی مدد آتی ہے۔",
    "Divine victory after human despair. Pattern repeated throughout prophetic history.": "انسانی مایوسی کے بعد الٰہی فتح۔ نبوی تاریخ میں بار بار دہرایا گیا نمونہ۔",
    "The purpose of Quranic narratives: 'ibrah (lesson), not entertainment. Reflect and apply.": "قرآنی بیانیے کا مقصد: عبرت (سبق)، تفریح نہیں۔ غور کرو اور عمل کرو۔",
    "Final assertion: The Quran is not human fabrication but divine truth. Believe and benefit.": "آخری دعویٰ: قرآن انسانی من گھڑت نہیں بلکہ الٰہی سچائی ہے۔ ایمان لاؤ اور فائدہ اٹھاؤ۔",
    "Quran confirms previous scriptures' core message while correcting corruptions.": "قرآن پچھلے صحائف کے بنیادی پیغام کی تصدیق کرتا ہے اور تحریفات کی اصلاح کرتا ہے۔",
    "Quran contains guidance for everything essential - complete system for life.": "قرآن میں ہر ضروری چیز کے لیے رہنمائی ہے - زندگی کا مکمل نظام۔",
    "The Quran's benefit is for those who believe. Disbelief blocks its healing.": "قرآن کا فائدہ ایمان والوں کے لیے ہے۔ کفر اس کی شفا کو روکتا ہے۔",
  },

  // other text fields
  description_fields: {
    "Yusuf's shirt appears three times with transforming significance": "یوسف کی قمیض تین بار تبدیل ہوتی اہمیت کے ساتھ ظاہر ہوتی ہے",
    "Reader knows what characters don't": "قاری جانتا ہے جو کردار نہیں جانتے",
    "Story begins and ends with the dream": "کہانی خواب سے شروع اور ختم ہوتی ہے",
    "Every low leads to a higher high": "ہر پستی ایک اور بلندی کی طرف لے جاتی ہے",
    "Both Yusuf and Ya'qub exemplify 'sabr jameel' - beautiful patience without complaint": "یوسف اور یعقوب دونوں 'صبرِ جمیل' کا نمونہ ہیں - بغیر شکایت خوبصورت صبر",
    "Yusuf chose prison over sin - preferring hardship for faith over comfort in disobedience": "یوسف نے گناہ پر قید کو ترجیح دی - نافرمانی کے آرام پر ایمان کی مشقت کو ترجیح",
    "When in power, Yusuf forgave completely - 'No blame on you today'": "اقتدار میں آ کر یوسف نے مکمل معافی دی - 'آج تم پر کوئی ملامت نہیں'",
    "Every hardship was a step toward Yusuf's ultimate position - trust Allah's timing": "ہر مشقت یوسف کے حتمی مقام کی طرف ایک قدم تھی - اللہ کے وقت پر بھروسہ رکھو",
    "Ya'qub never lost hope even after decades - despair is for disbelievers": "یعقوب نے دہائیوں بعد بھی امید نہیں چھوڑی - مایوسی کافروں کے لیے ہے",
    "Jealousy destroyed the brothers' peace - don't share blessings with potential enviers": "حسد نے بھائیوں کا چین برباد کیا - نعمتیں حسد کرنے والوں سے نہ بانٹو",
    "Ya'qub grieved but directed it to Allah - expressing pain while maintaining faith": "یعقوب نے غم کیا لیکن اسے اللہ کی طرف متوجہ رکھا - ایمان برقرار رکھتے ہوئے درد کا اظہار",
    "Yusuf asked the cupbearer for help - permissible while trusting Allah ultimately": "یوسف نے ساقی سے مدد مانگی - اللہ پر بھروسہ رکھتے ہوئے اسباب اختیار کرنا جائز ہے",
  }
};

// Now apply translations to 012.js
function transformFile(filePath, translations) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Transform meaning fields
  for (const [en, ur] of Object.entries(translations.meaning)) {
    // Escape special regex chars in the English string
    const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`meaning: "${escaped}"`, 'g');
    const replacement = `meaning: { en: "${en}", ur: "${ur}" }`;
    content = content.replace(regex, replacement);
  }

  // Transform explanation fields
  for (const [en, ur] of Object.entries(translations.explanation)) {
    const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`explanation: "${escaped}"`, 'g');
    const replacement = `explanation: { en: "${en}", ur: "${ur}" }`;
    content = content.replace(regex, replacement);
  }

  // Transform description fields in moral lessons and literary devices
  for (const [en, ur] of Object.entries(translations.description_fields)) {
    const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match both explanation: "..." and description: "..."
    const regexExpl = new RegExp(`explanation: "${escaped}"`, 'g');
    const regexDesc = new RegExp(`description: "${escaped}"`, 'g');
    content = content.replace(regexExpl, `explanation: { en: "${en}", ur: "${ur}" }`);
    content = content.replace(regexDesc, `description: { en: "${en}", ur: "${ur}" }`);
  }

  return content;
}

// Apply to 012.js
const file012 = path.resolve('src/data/treebank/ontology/012.js');
const result012 = transformFile(file012, SURAH_12_TRANSLATIONS);
fs.writeFileSync(file012, result012, 'utf8');
console.log('012.js transformed successfully');

// Check for remaining plain string meaning/explanation fields
const remainingMeaning = (result012.match(/meaning: "[^{]/g) || []).length;
const remainingExpl = (result012.match(/explanation: "[^{]/g) || []).length;
console.log(`Remaining plain meaning fields: ${remainingMeaning}`);
console.log(`Remaining plain explanation fields: ${remainingExpl}`);
