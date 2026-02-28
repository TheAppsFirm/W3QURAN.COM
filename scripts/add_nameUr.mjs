/**
 * Script to add nameUr field to ontology categories for surahs 020-039
 * Adds Urdu translation of category names right after the `name:` field
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Mapping of English category names to Urdu translations
// Organized by surah number
const translations = {
  // Surah 020 - Ta-Ha
  "Purpose of the Quran": "قرآن کا مقصد",
  "Musa at the Burning Bush": "موسیٰ جلتی جھاڑی کے پاس",
  "Miracles Given to Musa": "موسیٰ کو عطا کردہ معجزات",
  "Mission to Pharaoh": "فرعون کی طرف بھیجنا",
  "Musa's Early Life - Divine Protection": "موسیٰ کی ابتدائی زندگی - الٰہی حفاظت",
  "Confrontation with Pharaoh": "فرعون سے مقابلہ",
  "Contest with the Magicians": "جادوگروں سے مقابلہ",
  "Pharaoh's Threats and Magicians' Faith": "فرعون کی دھمکیاں اور جادوگروں کا ایمان",
  "Consequences: Hell and Paradise": "نتائج: جہنم اور جنت",
  "The Exodus and Parting of the Sea": "ہجرت اور سمندر کا شق ہونا",
  "Blessings Upon Bani Israel": "بنی اسرائیل پر نعمتیں",
  "The Samiri and the Golden Calf": "سامری اور سونے کا بچھڑا",
  "Musa's Return and Confrontation": "موسیٰ کی واپسی اور محاسبہ",
  "Revelation of the Torah": "تورات کا نزول",
  "The Story of Adam": "آدم کا قصہ",
  "Consequences of Following/Ignoring Guidance": "ہدایت کی پیروی یا اعراض کے نتائج",
  "Day of Judgment Scenes": "قیامت کے مناظر",
  "The Quran as Guidance": "قرآن بطور ہدایت",
  "Final Admonitions": "آخری نصیحتیں",

  // Surah 021 - Al-Anbiya
  "Approaching Judgment": "قیامت کا قریب آنا",
  "Claims of Disbelievers": "کافروں کے دعوے",
  "Prophets Were Human": "انبیاء بشر تھے",
  "Declaration of Tawheed": "توحید کا اعلان",
  "Ibrahim's Story - Breaking Idols": "ابراہیم کا قصہ - بت شکنی",
  "Ibrahim Thrown in Fire": "ابراہیم کو آگ میں ڈالنا",
  "Prophet Lut": "حضرت لوط",
  "Prophet Nuh": "حضرت نوح",
  "Prophets Dawud and Sulayman": "حضرت داؤد اور سلیمان",
  "Prophet Ayyub (Job)": "حضرت ایوب",
  "Prophets Ismail, Idris, Dhul-Kifl": "حضرت اسماعیل، ادریس، ذوالکفل",
  "Prophet Yunus (Dhun-Nun)": "حضرت یونس (ذوالنون)",
  "Prophets Zakariyya and Yahya": "حضرت زکریا اور یحییٰ",
  "Maryam and Prophet Isa": "مریم اور حضرت عیسیٰ",
  "One Ummah - Unity of Message": "ایک امت - پیغام کی وحدت",
  // "Day of Judgment" already handled below
  "Yajuj and Majuj (Gog and Magog)": "یاجوج اور ماجوج",
  "Idols and Their Worshippers": "بت اور ان کے پجاری",
  "Reward for Believers": "مومنوں کا اجر",
  "Inheritance of the Earth": "زمین کی وراثت",
  "Prophet Muhammad - Mercy to Worlds": "نبی محمد ﷺ - جہانوں کے لیے رحمت",
  "Final Supplication": "آخری دعا",

  // Surah 022 - Al-Hajj
  "The Earthquake of the Hour": "قیامت کا زلزلہ",
  "Proofs of Resurrection": "قیامت کے دلائل",
  "Earth Revival as Resurrection Sign": "زمین کی بحالی بطور دلیلِ قیامت",
  "Types of Worshippers": "عبادت گزاروں کی اقسام",
  "Divine Protection of Believers": "مومنوں کی الٰہی حفاظت",
  "Permission for Self-Defense": "دفاعِ نفس کی اجازت",
  "Protection of All Places of Worship": "تمام عبادت گاہوں کی حفاظت",
  "Hajj - The Pilgrimage": "حج - زیارتِ بیت اللہ",
  "Sacrifice and Its Reality": "قربانی اور اس کی حقیقت",
  "The Sacred House (Kaaba)": "بیت الحرام (کعبہ)",
  "Sacred Symbols of Allah": "اللہ کی مقدس نشانیاں",
  "Allah's Complete Knowledge": "اللہ کا مکمل علم",
  "Weakness of False Deities": "جھوٹے معبودوں کی کمزوری",
  "Divine Messengers and Angels": "الٰہی رسول اور فرشتے",
  "The Muslim Ummah": "مسلم امت",
  "Punishment of Previous Nations": "پچھلی قوموں کی سزا",
  "Satan's Deception": "شیطان کا دھوکا",
  "Final Guidance": "آخری ہدایت",

  // Surah 023 - Al-Mu'minun
  "Qualities of Successful Believers": "کامیاب مومنوں کی صفات",
  "Stages of Human Creation": "انسانی تخلیق کے مراحل",
  "Death and Resurrection": "موت اور قیامت",
  "Signs in Nature": "فطرت میں نشانیاں",
  "Story of Prophet Nuh (Noah)": "حضرت نوح کا قصہ",
  "Stories of Other Prophets": "دیگر انبیاء کے قصے",
  "Unity of Prophetic Message": "نبوی پیغام کی وحدت",
  "Tests of Wealth and Children": "مال اور اولاد کی آزمائش",
  "Qualities That Earn Paradise": "جنت کے مستحق اوصاف",
  "Divine Justice and Accountability": "الٰہی انصاف اور احتساب",
  "State of the Heedless": "غافلوں کی حالت",
  "Why They Rejected the Prophet": "انہوں نے نبی کو کیوں رد کیا",
  "If Truth Followed Desires": "اگر حق خواہشات کے تابع ہوتا",
  "Prophet Asks No Reward": "نبی کوئی اجر نہیں مانگتے",
  "The Arrogant Rejectors": "متکبر منکرین",
  "Divine Attributes": "الٰہی صفات",
  // "Day of Judgment Scenes" already above
  "Descriptions of Hell": "جہنم کے احوال",
  "Those Who Mocked Believers": "مومنوں کا مذاق اڑانے والے",
  "Time in the World": "دنیا میں وقت",
  "Purpose of Creation": "تخلیق کا مقصد",
  "The Closing Supplication": "اختتامی دعا",

  // Surah 024 - An-Nur
  "Legal Punishments (Hudud)": "حدود (شرعی سزائیں)",
  "Laws Against Slander (Qadhf)": "قذف کے قوانین (تہمت کے خلاف)",
  "Li'an (Spousal Accusation)": "لعان (میاں بیوی کا باہمی الزام)",
  "The Slander Incident (Al-Ifk)": "واقعۂ افک (بہتان کا واقعہ)",
  "Vindication of the Innocent": "بے گناہوں کی براءت",
  "Household Etiquette (Adab)": "گھریلو آداب",
  "Modesty Laws (Hijab)": "حجاب کے احکام (پردے کے قوانین)",
  "Exempt Relatives (Mahram)": "محرم رشتے دار",
  "Encouragement of Marriage": "نکاح کی ترغیب",
  "The Light Verse (Ayat an-Nur)": "آیتِ نور",
  "Houses of Worship": "عبادت گاہیں",
  "State of Disbelievers": "کافروں کی حالت",
  "Signs in Creation": "تخلیق میں نشانیاں",
  "Obedience to Allah and Messenger": "اللہ اور رسول کی اطاعت",
  "Promise to the Righteous": "نیکوکاروں سے وعدہ",
  "Privacy Within Household": "گھر کے اندر پردے کے آداب",
  "Elderly Women's Exemption": "بوڑھی عورتوں کی رخصت",
  "Social Dining Rules": "سماجی کھانے کے آداب",
  "Proper Conduct with Prophet": "نبی ﷺ کے ساتھ مناسب برتاؤ",

  // Surah 025 - Al-Furqan
  "Al-Furqan (The Criterion)": "الفرقان (حق و باطل میں فرق کرنے والا)",
  "Objections of Deniers": "منکرین کے اعتراضات",
  "Divine Responses": "الٰہی جوابات",
  "Stories of Previous Nations": "پچھلی قوموں کے قصے",
  // "Signs in Creation" already above
  "Servants of the Most Merciful": "رحمٰن کے بندے",
  "Repentance and Forgiveness": "توبہ اور مغفرت",
  "Reward of True Servants": "سچے بندوں کا اجر",
  // "Divine Attributes" already above
  "Day of Judgment": "یومِ قیامت",
  "Warning Against Bad Company": "بری صحبت سے خبردار",
  "Prophet's Complaint": "نبی ﷺ کی شکایت",

  // Surah 026 - Ash-Shu'ara
  "Introduction to the Quran": "قرآن کا تعارف",
  "Comfort to Prophet Muhammad": "نبی محمد ﷺ کو تسلی",
  "The Repeated Refrain": "بار بار دہرایا جانے والا نکتہ",
  "Story of Musa - Divine Call": "قصۂ موسیٰ - الٰہی پکار",
  "Story of Musa - Divine Assurance": "قصۂ موسیٰ - الٰہی اطمینان",
  "Story of Musa - Confronting Pharaoh": "قصۂ موسیٰ - فرعون سے ٹکراؤ",
  "Story of Musa - Rebutting Pharaoh": "قصۂ موسیٰ - فرعون کی تردید",
  "Story of Musa - Signs and Magicians": "قصۂ موسیٰ - نشانیاں اور جادوگر",
  "Story of Musa - The Contest": "قصۂ موسیٰ - مقابلہ",
  "Story of Musa - Magicians' Submission": "قصۂ موسیٰ - جادوگروں کا ایمان",
  "Story of Musa - Magicians' Firmness": "قصۂ موسیٰ - جادوگروں کی استقامت",
  "Story of Musa - Exodus": "قصۂ موسیٰ - ہجرت",
  "Story of Musa - Sea Crossing": "قصۂ موسیٰ - سمندر پار کرنا",
  "Story of Ibrahim": "قصۂ ابراہیم",
  "Ibrahim's Praise of Allah": "ابراہیم کی اللہ کی حمد",
  "Ibrahim's Supplication": "ابراہیم کی دعا",
  "Paradise and Hell": "جنت اور جہنم",
  "Dialogue in Hell": "جہنم میں مکالمہ",
  "Story of Nuh": "قصۂ نوح",
  "Story of Hud": "قصۂ ہود",
  "Story of Salih": "قصۂ صالح",
  "Story of Lut": "قصۂ لوط",
  "Story of Shu'ayb": "قصۂ شعیب",
  "Quran's Revelation": "قرآن کا نزول",
  "Hypothetical Non-Arab Messenger": "فرضی غیر عرب رسول",
  "Warning and Destruction": "تنبیہ اور تباہی",
  "Quran Not from Devils": "قرآن شیاطین کی طرف سے نہیں",
  "Warning Against Idolatry": "بت پرستی سے خبردار",
  "The Poets - Final Section": "شعراء - آخری حصہ",
  "Excepted Righteous Poets": "مستثنیٰ نیکوکار شعراء",

  // Surah 027 - An-Naml
  "Quran Introduction": "قرآن کا تعارف",
  "Qualities of Believers": "مومنوں کی صفات",
  // "State of Disbelievers" already above
  "Story of Musa": "قصۂ موسیٰ",
  "Kingdom of Sulayman": "سلیمان کی سلطنت",
  "Sulayman's Army": "سلیمان کا لشکر",
  "Valley of the Ants": "چیونٹیوں کی وادی",
  "Sulayman's Prayer": "سلیمان کی دعا",
  "Story of the Hoopoe": "ہدہد کا قصہ",
  "Queen of Sheba": "ملکۂ سبا",
  "Sulayman's Letter": "سلیمان کا خط",
  "Sheba's Consultation": "ملکۂ سبا کی مشاورت",
  "Sulayman Rejects Gift": "سلیمان کا تحفہ رد کرنا",
  "Transport of the Throne": "تخت کی منتقلی",
  "Queen's Arrival": "ملکہ کی آمد",
  "Queen's Submission": "ملکہ کا اسلام",
  // "Story of Salih" already above
  "Destruction of Thamud": "ثمود کی تباہی",
  // "Story of Lut" already above
  "Praise and Gratitude": "حمد و شکر",
  // "Signs in Creation" already above
  "Divine Response": "الٰہی جواب",
  "Guidance in Darkness": "اندھیروں میں ہدایت",
  "Creation and Resurrection": "تخلیق اور قیامت",
  "Knowledge of the Unseen": "علمِ غیب",
  "Disbelievers' Doubts": "کافروں کے شبہات",
  "Travel and Reflect": "سفر کرو اور غور کرو",
  // "Day of Judgment" already above
  "Recompense of Good and Evil": "نیکی اور بدی کا بدلہ",
  "Prophet's Mission": "نبی ﷺ کا مشن",
  "Closing Praise": "اختتامی حمد",

  // Surah 027 - Characters section (these are under a different section, probably not categories)
  // Will handle if they appear in categories block

  // Surah 028 - Al-Qasas
  "Musa's Early Life": "موسیٰ کی ابتدائی زندگی",
  "Divine Protection of Baby Musa": "بچے موسیٰ کی الٰہی حفاظت",
  "Musa Reaches Maturity": "موسیٰ کی بلوغت",
  "Flight to Madyan": "مدین کی طرف فرار",
  "Musa's Service and Marriage": "موسیٰ کی خدمت اور شادی",
  "Call to Prophethood": "نبوت کی دعوت",
  "Musa and Harun's Mission": "موسیٰ اور ہارون کا مشن",
  "Pharaoh's Arrogance and Defiance": "فرعون کا تکبر اور سرکشی",
  "Destruction of Pharaoh": "فرعون کی تباہی",
  "Book Given to Musa": "موسیٰ کو کتاب دینا",
  "Confirmation of Prophet Muhammad": "نبی محمد ﷺ کی تصدیق",
  "Excuses of Disbelievers": "کافروں کے بہانے",
  "People of Earlier Scripture": "پچھلی کتاب والے لوگ",
  "Guidance is from Allah Alone": "ہدایت صرف اللہ کی طرف سے ہے",
  "Destroyed Civilizations": "تباہ شدہ تہذیبیں",
  "Worldly vs. Eternal Life": "دنیاوی بمقابلہ ابدی زندگی",
  "Day of Judgment Scenes": "قیامت کے مناظر",
  "Story of Qarun (Korah)": "قارون کا قصہ",
  "Qarun's Arrogance and Downfall": "قارون کا غرور اور زوال",
  "Qarun's Display and Destruction": "قارون کی نمائش اور تباہی",
  "Qarun Swallowed by Earth": "زمین نے قارون کو نگل لیا",
  "The Hereafter's True Success": "آخرت کی حقیقی کامیابی",
  "Allah's Promise to the Prophet": "نبی ﷺ سے اللہ کا وعدہ",
  "Final Message and Tawheed": "آخری پیغام اور توحید",

  // Surah 029 - Al-Ankabut
  "Trials and Tests of Faith": "ایمان کی آزمائشیں اور امتحان",
  "The Spider's Web Parable": "مکڑی کے جالے کی مثال",
  "Story of Prophet Nuh": "حضرت نوح کا قصہ",
  "Story of Prophet Ibrahim": "حضرت ابراہیم کا قصہ",
  "Story of Prophet Lut": "حضرت لوط کا قصہ",
  "Story of Prophet Shuayb": "حضرت شعیب کا قصہ",
  "Destruction of Past Nations": "گزشتہ قوموں کی تباہی",
  "Duty to Parents": "والدین کے حقوق",
  "Hypocrisy Exposed": "منافقت کا پردہ فاش",
  "Quran and Revelation": "قرآن اور وحی",
  "Allah's Knowledge": "اللہ کا علم",
  // "Signs in Creation" already above
  "Prayer and Remembrance": "نماز اور ذکر",
  "Dialogue with People of the Book": "اہلِ کتاب سے مکالمہ",
  "Striving for Allah": "اللہ کی راہ میں جہاد",
  "Nature of Worldly Life": "دنیاوی زندگی کی حقیقت",
  "Divine Provision": "الٰہی رزق",
  "Migration for Faith": "ایمان کے لیے ہجرت",

  // Surah 030 - Ar-Rum
  "Prophecy of Roman Victory": "رومیوں کی فتح کی پیشگوئی",
  "Divine Promise": "الٰہی وعدہ",
  "Heedlessness of Creation": "تخلیق سے غفلت",
  // "Purpose of Creation" already above
  "Lessons from History": "تاریخ سے اسباق",
  // "Day of Judgment" already above
  "Times of Glorification": "تسبیح کے اوقات",
  // "Signs in Creation" already above
  "Human Creation": "انسانی تخلیق",
  "Sign of Marriage": "نکاح کی نشانی",
  "Signs of Diversity": "تنوع کی نشانیاں",
  "Signs of Sleep": "نیند کی نشانی",
  "Signs of Lightning and Rain": "بجلی اور بارش کی نشانیاں",
  "Cosmic Stability": "کائناتی استحکام",
  "Divine Ownership": "الٰہی ملکیت",
  "Pure Monotheism": "خالص توحید",
  "Turning to Allah": "اللہ کی طرف رجوع",
  "Division in Religion": "دین میں تفرقہ",
  "Human Nature": "انسانی فطرت",
  "Rights and Giving": "حقوق اور عطا",
  "Riba vs Zakat": "سود بمقابلہ زکوٰة",
  // "Divine Provision" already above
  "Corruption on Earth": "زمین پر فساد",
  "Signs in Wind and Rain": "ہوا اور بارش کی نشانیاں",
  "Proof of Resurrection": "قیامت کا ثبوت",
  "Hardness of Heart": "دلوں کی سختی",
  "Stages of Human Life": "انسانی زندگی کے مراحل",
  "Oaths of Disbelievers": "کافروں کی قسمیں",
  "Final Exhortation": "آخری نصیحت",

  // Surah 031 - Luqman
  "The Quran as Guidance": "قرآن بطور ہدایت",
  "Those Who Mislead": "گمراہ کرنے والے",
  "The Wisdom of Luqman": "لقمان کی حکمت",
  "Luqman's Advice to His Son": "لقمان کی اپنے بیٹے کو نصیحت",
  "Character and Conduct": "کردار اور اخلاق",
  "Rights of Parents": "والدین کے حقوق",
  "Limits of Parental Obedience": "والدین کی اطاعت کی حدود",
  "Allah's Infinite Knowledge": "اللہ کا لامحدود علم",
  // "Signs in Creation" already above
  "Refutation of False Worship": "جھوٹی عبادت کی تردید",
  // "State of Disbelievers" already above
  "Knowledge Only Allah Possesses": "صرف اللہ کے پاس علم",

  // Surah 032 - As-Sajdah
  "Authority of the Quran": "قرآن کا اختیار",
  "Stages of Divine Creation": "الٰہی تخلیق کے مراحل",
  "Creation of Mankind": "انسان کی تخلیق",
  "Doubts of Disbelievers": "کافروں کے شکوک",
  // "Death and Resurrection" already above
  "The Day of Judgment": "یومِ فیصلہ",
  "Reward for Believers": "مومنوں کا اجر",
  "Believer vs Disbeliever": "مومن بمقابلہ کافر",
  "Lesser Punishment": "ادنیٰ عذاب",
  "Turning Away from Truth": "حق سے اعراض",
  "Musa and the Quran": "موسیٰ اور قرآن",
  "The Day of Decision": "فیصلے کا دن",
  "Lessons from Destroyed Nations": "تباہ شدہ قوموں سے اسباق",
  "Signs of Divine Mercy": "الٰہی رحمت کی نشانیاں",
  "Mockers Demanding Judgment": "فیصلے کا مطالبہ کرنے والے مذاق اڑانے والے",
  "Final Command": "آخری حکم",

  // Surah 033 - Al-Ahzab
  "Guidance for the Prophet": "نبی ﷺ کے لیے ہدایت",
  "Reform of Adoption Laws": "گود لینے کے قوانین کی اصلاح",
  "Covenant with the Prophets": "انبیاء سے عہد",
  "Battle of the Trench": "غزوۂ خندق",
  "Hypocrites Exposed": "منافقین کا پردہ فاش",
  "Believers' Steadfastness": "مومنوں کی ثابت قدمی",
  "Defeat of the Confederates": "احزاب کی شکست",
  "The Wives' Choice": "ازواجِ مطہرات کا انتخاب",
  "Conduct of Prophet's Wives": "نبی ﷺ کی بیویوں کا طرزِ عمل",
  "Ten Qualities of Muslim Men and Women": "مسلمان مردوں اور عورتوں کی دس صفات",
  "Zayd and Zaynab - Applying the Adoption Ruling": "زید اور زینب - گود لینے کے حکم کا اطلاق",
  "Remembrance of Allah": "اللہ کا ذکر",
  "Roles of the Prophet": "نبی ﷺ کے کردار",
  "Marriage Regulations for the Prophet": "نبی ﷺ کے لیے نکاح کے احکام",
  "Etiquette in Prophet's Household": "نبی ﷺ کے گھر کے آداب",
  "Divine Knowledge": "الٰہی علم",
  "Mahram Relatives for Prophet's Wives": "نبی ﷺ کی بیویوں کے محرم رشتے دار",
  "Blessings Upon the Prophet (Salawat)": "نبی ﷺ پر درود و سلام",
  "Those Who Harm Allah and His Messenger": "اللہ اور رسول کو ایذا دینے والے",
  "The Jilbab Verse": "آیتِ جلباب (چادر کا حکم)",
  "Warning to Hypocrites and Rumormongers": "منافقوں اور افواہ پھیلانے والوں کو تنبیہ",
  "Knowledge of the Hour": "قیامت کا علم",
  "Fate of Disbelievers": "کافروں کا انجام",
  "Example of Those Who Harmed Musa": "موسیٰ کو تکلیف دینے والوں کی مثال",
  "Speaking Righteous Words": "سیدھی بات کہنا",
  "The Trust (Al-Amanah)": "امانت",

  // Surah 034 - Saba
  "Opening Praise": "ابتدائی حمد",
  // "Divine Knowledge" already above
  "Deniers of the Hour": "قیامت کے منکرین",
  "Witness of Those with Knowledge": "اہلِ علم کی گواہی",
  "Mockery of Resurrection": "قیامت کا مذاق",
  // "Signs in Creation" already above
  "Blessings upon Dawud": "داؤد پر نعمتیں",
  "Blessings upon Sulayman": "سلیمان پر نعمتیں",
  "Works of the Jinn": "جنات کے کام",
  "Death of Sulayman": "سلیمان کی وفات",
  "Blessing of Sheba": "سبا کی نعمت",
  "Ingratitude of Sheba": "سبا کی ناشکری",
  "Blessed Journey": "مبارک سفر",
  "Desire for Hardship": "مشقت کی خواہش",
  "Influence of Iblis": "ابلیس کا اثر",
  "False Intercessors": "جھوٹے سفارشی",
  "Who is the Provider?": "رزق دینے والا کون ہے؟",
  "Day of Gathering": "جمع ہونے کا دن",
  "Challenge About Partners": "شریکوں کے بارے میں چیلنج",
  "Prophet's Universal Mission": "نبی ﷺ کا عالمگیر مشن",
  "Impatience for Promise": "وعدے میں جلد بازی",
  "Rejection of Quran": "قرآن کا انکار",
  "Mutual Blame": "باہمی الزام تراشی",
  "Affluence and Arrogance": "مال داری اور تکبر",
  "Provision and Constriction": "رزق کی فراخی اور تنگی",
  "Strivers Against Signs": "آیات کے خلاف کوشش کرنے والے",
  "Spending and Replacement": "خرچ کرنا اور بدلہ پانا",
  "Angels Disowning": "فرشتوں کا انکار",
  "No Power Except Allah": "اللہ کے سوا کسی کا اختیار نہیں",
  "Clear Signs Rejected": "واضح نشانیوں کا انکار",
  "No Scripture Before Quran": "قرآن سے پہلے کوئی کتاب نہیں",
  "Prophet's Advice": "نبی ﷺ کی نصیحت",
  "Prophet Seeks No Reward": "نبی ﷺ کوئی اجر نہیں مانگتے",
  "Truth Has Come": "حق آ گیا",
  "Prophet's Guidance": "نبی ﷺ کی ہدایت",
  "Terror on Judgment Day": "قیامت کے دن کی دہشت",
  "Previous Disbelief": "پہلا کفر",

  // Surah 035 - Fatir
  "Allah - The Originator": "اللہ - پیدا کرنے والا",
  "Divine Mercy & Providence": "الٰہی رحمت اور رزق",
  "Call to Remember Blessings": "نعمتیں یاد کرنے کی دعوت",
  "Denial of Prophets": "انبیاء کا انکار",
  "Worldly Life & Deception": "دنیاوی زندگی اور دھوکا",
  "Satan - The Open Enemy": "شیطان - کھلا دشمن",
  "Two Eternal Destinations": "دو ابدی ٹھکانے",
  "Spiritual Blindness vs Insight": "روحانی اندھاپن بمقابلہ بصیرت",
  // "Proofs of Resurrection" already above
  "Honor Belongs to Allah": "عزت اللہ کے لیے ہے",
  "Human Creation from Earth": "مٹی سے انسان کی تخلیق",
  "Parable of Two Seas": "دو سمندروں کی مثال",
  "Cosmic Signs of Power": "قدرت کی کائناتی نشانیاں",
  "Powerlessness of Idols": "بتوں کی بے بسی",
  "Human Dependence on Allah": "انسان کا اللہ پر انحصار",
  "Individual Accountability": "انفرادی جوابدہی",
  "Light vs Darkness": "روشنی بمقابلہ اندھیرا",
  "The Prophetic Mission": "نبوی مشن",
  "Patterns of Denial": "انکار کے نمونے",
  "Diversity in Creation": "تخلیق میں تنوع",
  "Scholars Who Fear Allah": "اللہ سے ڈرنے والے علماء",
  // "Reward for Believers" already above
  "Truth of the Quran": "قرآن کی سچائی",
  "Three Categories of Inheritors": "وارثوں کی تین اقسام",
  "Gardens of Eternity": "ابدی باغات",
  "Regret of Disbelievers": "کافروں کا پچھتاوا",
  "Allah's Comprehensive Knowledge": "اللہ کا ہمہ گیر علم",
  "Human Stewardship": "انسان کی خلافت",
  "Challenge to Idolaters": "مشرکوں کو چیلنج",
  "Allah Upholds the Universe": "اللہ کائنات کو قائم رکھتا ہے",
  "Broken Oaths of Pagans": "مشرکوں کی ٹوٹی ہوئی قسمیں",
  "Arrogance & Evil Schemes": "تکبر اور بری چالیں",
  // "Lessons from Destroyed Nations" already above - different wording here
  "Divine Patience with Sinners": "گناہگاروں کے ساتھ الٰہی صبر",

  // Surah 036 - Ya-Sin
  "Opening Oath and Prophethood": "ابتدائی قسم اور نبوت",
  "The Sealed Hearts": "مہر شدہ دل",
  "Those Who Benefit from Warning": "تنبیہ سے فائدہ اٹھانے والے",
  "The Messengers to the Town": "بستی کی طرف بھیجے گئے رسول",
  "The Town People's Rejection": "بستی والوں کا انکار",
  "The Believer from the Edge of Town": "شہر کے کنارے سے آنے والا مومن",
  "Martyrdom and Heavenly Reward": "شہادت اور آسمانی اجر",
  "Destruction of the Town": "بستی کی تباہی",
  "Signs in the Earth": "زمین میں نشانیاں",
  "Signs in Creation - Pairs": "تخلیق میں نشانیاں - جوڑے",
  "Signs in Night and Day": "رات اور دن کی نشانیاں",
  "Signs in the Moon": "چاند کی نشانی",
  "Signs in Ships": "کشتیوں کی نشانیاں",
  "Warnings Ignored": "نظرانداز تنبیہات",
  "Mockers of Resurrection": "قیامت کا مذاق اڑانے والے",
  "The Trumpet and Rising": "صور اور اٹھنا",
  "The Swift Judgment": "تیز فیصلہ",
  "Delights of Paradise": "جنت کی نعمتیں",
  "Separation of the Sinners": "گناہگاروں کی علیحدگی",
  "Description of Hellfire": "جہنم کا بیان",
  "Divine Abilities": "الٰہی قدرتیں",
  "Aging as a Sign": "بڑھاپا بطور نشانی",
  "The Quran is Not Poetry": "قرآن شاعری نہیں",
  "Signs in Livestock": "مویشیوں میں نشانیاں",
  "Futility of False Gods": "جھوٹے معبودوں کی بے کاری",
  "Human Creation Proof": "انسانی تخلیق کا ثبوت",
  "Divine Response to Skeptics": "شک کرنے والوں کو الٰہی جواب",
  "Ultimate Proof of Divine Power": "الٰہی قدرت کا حتمی ثبوت",

  // Surah 037 - As-Saffat
  "Angels Ranged in Rows": "صف بستہ فرشتے",
  "Protection of the Heavens": "آسمانوں کی حفاظت",
  "Argument from Creation": "تخلیق سے دلیل",
  "Disbelievers on Judgment Day": "قیامت کے دن کافر",
  "Questioning in Hell": "جہنم میں سوال و جواب",
  "Followers Blame Leaders": "پیروکار رہنماؤں کو الزام دیتے ہیں",
  "Punishment for Arrogance": "تکبر کی سزا",
  "Rewards for Believers": "مومنوں کے انعامات",
  "Conversation in Paradise": "جنت میں گفتگو",
  "Eternity in Paradise": "جنت میں ہمیشگی",
  "Tree of Zaqqum": "زقوم کا درخت",
  "Blind Following of Ancestors": "آباء و اجداد کی اندھی تقلید",
  "Prophet Nuh": "حضرت نوح",
  "Ibrahim Seeks Truth": "ابراہیم حق کی تلاش میں",
  "Ibrahim's Stratagem": "ابراہیم کی تدبیر",
  "Ibrahim in the Fire": "ابراہیم آگ میں",
  "Ibrahim's Great Sacrifice": "ابراہیم کی عظیم قربانی",
  "Prophets Musa and Harun": "حضرت موسیٰ اور ہارون",
  "Prophet Ilyas (Elijah)": "حضرت الیاس",
  "Prophet Lut": "حضرت لوط",
  "Prophet Yunus": "حضرت یونس",
  "Refuting Angels as Daughters": "فرشتوں کو بیٹیاں کہنے کی تردید",
  "False Relationship with Jinn": "جنوں سے جھوٹا رشتہ",
  "Disbelievers Cannot Mislead": "کافر گمراہ نہیں کر سکتے",
  "Angels Glorifying Allah": "فرشتوں کی تسبیح",
  "Disbelievers' Denial and Regret": "کافروں کا انکار اور پچھتاوا",
  "Divine Promise of Victory": "فتح کا الٰہی وعدہ",
  "Closing Glorification": "اختتامی تسبیح",

  // Surah 038 - Sad
  "Opening and Warning to Disbelievers": "ابتدائیہ اور کافروں کو تنبیہ",
  "Previous Nations' Rejection": "پچھلی قوموں کا انکار",
  "The Story of Dawud": "داؤد کا قصہ",
  "The Story of Sulayman": "سلیمان کا قصہ",
  "The Story of Ayyub": "ایوب کا قصہ",
  "Other Prophets Mentioned": "دیگر مذکور انبیاء",
  "Description of Paradise": "جنت کا بیان",
  // "Description of Hellfire" already above
  "The Prophet's Mission": "نبی ﷺ کا مشن",
  "The Story of Iblis": "ابلیس کا قصہ",
  "Closing Message": "اختتامی پیغام",

  // Surah 039 - Az-Zumar
  "Sincerity in Worship (Ikhlas)": "عبادت میں اخلاص",
  "Refutation of Polytheism": "شرک کی تردید",
  "Intercession Denied for Polytheists": "مشرکوں کے لیے شفاعت سے انکار",
  "Allah's Boundless Mercy": "اللہ کی بے حد رحمت",
  // "Signs in Creation" already above
  "Human Creation and Nature": "انسانی تخلیق اور فطرت",
  "Description of the Quran": "قرآن کا بیان",
  "The Two Groups (Zumar)": "دو گروہ (زُمَر)",
  "Judgment Day Scenes": "قیامت کے مناظر",
  "Sleep as Death's Brother": "نیند موت کی بہن",
  "Regret of Sinners": "گناہگاروں کا پچھتاوا",
  // "Believer vs Disbeliever" already above
  "Divine Names and Attributes": "اللہ کے نام اور صفات",
  "Paradise Description": "جنت کا بیان",
  "Angels and the Throne": "فرشتے اور عرش",
  "Warning to Disbelievers": "کافروں کو تنبیہ",
};

const BASE_PATH = '/Users/zia/Desktop/Development/Quran/quran-personal/src/data/treebank/ontology';

// Process files 020-039
for (let i = 20; i <= 39; i++) {
  const filename = String(i).padStart(3, '0') + '.js';
  const filepath = join(BASE_PATH, filename);

  let content;
  try {
    content = readFileSync(filepath, 'utf-8');
  } catch (e) {
    console.error(`Could not read ${filename}: ${e.message}`);
    continue;
  }

  // Check if file already has nameUr in categories
  if (content.includes('nameUr:')) {
    console.log(`${filename}: Already has nameUr, skipping`);
    continue;
  }

  // Find the categories block
  const categoriesStart = content.indexOf('categories: {');
  if (categoriesStart === -1) {
    console.log(`${filename}: No categories block found, skipping`);
    continue;
  }

  // We need to find category-level name: fields only (inside categories block)
  // Strategy: Process line by line, track brace depth to know we're inside categories,
  // and add nameUr after each category-level name: field.

  const lines = content.split('\n');
  const newLines = [];
  let inCategories = false;
  let braceDepth = 0;
  let categoryBraceDepth = -1;
  let changesCount = 0;

  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    newLines.push(line);

    // Track categories section
    if (line.includes('categories: {') || line.includes('categories:{')) {
      inCategories = true;
      braceDepth = 0;
      // Count braces in this line
      for (const ch of line) {
        if (ch === '{') braceDepth++;
        if (ch === '}') braceDepth--;
      }
      continue;
    }

    if (inCategories) {
      // Count braces
      let prevDepth = braceDepth;
      for (const ch of line) {
        if (ch === '{') braceDepth++;
        if (ch === '}') braceDepth--;
      }

      // If brace depth reaches 0, categories block ended
      if (braceDepth <= 0) {
        inCategories = false;
        continue;
      }

      // Category-level name: is at depth 2 (categories { categoryKey { name: "..." ... } } )
      // We want name: fields that are at the top of a category object
      // They typically appear right after the opening of a category object
      // Pattern: line starts with whitespace, then 'name: "'
      const nameMatch = line.match(/^(\s+)name:\s*"([^"]+)"/);
      if (nameMatch && braceDepth >= 2) {
        const indent = nameMatch[1];
        const nameValue = nameMatch[2];

        // Look up translation
        const urduTranslation = translations[nameValue];
        if (urduTranslation) {
          newLines.push(`${indent}nameUr: "${urduTranslation}",`);
          changesCount++;
        } else {
          console.warn(`${filename}: No Urdu translation for "${nameValue}"`);
        }
      }
    }
  }

  if (changesCount > 0) {
    writeFileSync(filepath, newLines.join('\n'));
    console.log(`${filename}: Added ${changesCount} nameUr fields`);
  } else {
    console.log(`${filename}: No changes needed`);
  }
}

console.log('\nDone!');
