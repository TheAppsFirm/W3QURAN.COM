#!/usr/bin/env node
const fs = require('fs');

const AYAH_DATA = {
  71: { tr: { en: 'He said, "He says it is a cow neither trained to plow the earth nor to irrigate the field, one free from fault with no spot upon her."', ur: 'کہا وہ فرماتا ہے وہ گائے ایسی ہے جو نہ زمین جوتنے والی ہے نہ پانی دینے والی بے عیب ہے جس میں کوئی داغ نہیں' }, w: [
    { a: 'قَالَ', t: 'qala', r: 'ق و ل', p: 'V', en: 'He said', ur: 'کہا', g: 'verb' },
    { a: 'إِنَّهُ', t: 'innahu', p: 'EMPH+PRON', en: 'Indeed He', ur: 'وہ' },
    { a: 'يَقُولُ', t: 'yaqulu', r: 'ق و ل', p: 'V', en: 'says', ur: 'فرماتا ہے' },
    { a: 'إِنَّهَا', t: 'innaha', p: 'EMPH+PRON', en: 'Indeed it is', ur: 'وہ' },
    { a: 'بَقَرَةٌ', t: 'baqaratun', r: 'ب ق ر', p: 'N', en: 'a cow', ur: 'گائے', g: 'khabar-inna' },
    { a: 'لَّا', t: 'la', p: 'NEG', en: 'not', ur: 'نہ' },
    { a: 'ذَلُولٌ', t: 'dhalulun', r: 'ذ ل ل', p: 'ADJ', en: 'trained', ur: 'سدھائی ہوئی', g: 'sifah' },
    { a: 'تُثِيرُ', t: 'tuthiru', r: 'ث و ر', p: 'V', en: 'to plow', ur: 'جوتے', g: 'verb', f: { form: 'IV' } },
    { a: 'الْأَرْضَ', t: 'al-arda', r: 'أ ر ض', p: 'N', en: 'the earth', ur: 'زمین', g: 'obj' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'nor', ur: 'اور نہ' },
    { a: 'تَسْقِي', t: 'tasqi', r: 'س ق ي', p: 'V', en: 'irrigates', ur: 'سینچتی', g: 'verb' },
    { a: 'الْحَرْثَ', t: 'al-hartha', r: 'ح ر ث', p: 'N', en: 'the field', ur: 'کھیت', g: 'obj' },
    { a: 'مُسَلَّمَةٌ', t: 'musallamatun', r: 'س ل م', p: 'N', en: 'sound', ur: 'بے عیب', g: 'sifah', f: { form: 'II' } },
    { a: 'لَّا', t: 'la', p: 'NEG', en: 'no', ur: 'نہیں' },
    { a: 'شِيَةَ', t: 'shiyata', r: 'و ش ي', p: 'N', en: 'spot', ur: 'داغ', g: 'ism-la' },
    { a: 'فِيهَا', t: 'fiha', p: 'P+PRON', en: 'upon her', ur: 'اس میں' },
  ], rel: [{ from: 4, to: 5, l: 'إنّ + خبر' }, { from: 8, to: 9, l: 'فعل + مفعول به' }] },

  72: { tr: { en: 'And when you killed a soul and disputed over it, but Allah was to bring out that which you were concealing.', ur: 'اور جب تم نے ایک شخص کو قتل کیا پھر آپس میں جھگڑنے لگے اور اللہ نکالنے والا تھا جو تم چھپا رہے تھے' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'قَتَلْتُمْ', t: 'qataltum', r: 'ق ت ل', p: 'V', en: 'you killed', ur: 'تم نے قتل کیا', g: 'verb' },
    { a: 'نَفْسًا', t: 'nafsan', r: 'ن ف س', p: 'N', en: 'a soul', ur: 'ایک شخص', g: 'obj' },
    { a: 'فَادَّارَأْتُمْ', t: 'faddara-tum', r: 'د ر أ', p: 'CONJ+V', en: 'then disputed', ur: 'جھگڑنے لگے', g: 'verb', f: { form: 'VI' } },
    { a: 'فِيهَا', t: 'fiha', p: 'P+PRON', en: 'over it', ur: 'اس میں' },
    { a: 'وَاللَّهُ', t: 'wallahu', p: 'CONJ+PN', en: 'but Allah', ur: 'اور اللہ', g: 'mubtada' },
    { a: 'مُخْرِجٌ', t: 'mukhrijun', r: 'خ ر ج', p: 'N', en: 'was to bring out', ur: 'نکالنے والا', g: 'khabar', f: { form: 'IV' } },
    { a: 'مَّا', t: 'ma', p: 'REL', en: 'that which', ur: 'جو' },
    { a: 'كُنتُمْ', t: 'kuntum', r: 'ك و ن', p: 'V', en: 'you were', ur: 'تم تھے' },
    { a: 'تَكْتُمُونَ', t: 'taktumuna', r: 'ك ت م', p: 'V', en: 'concealing', ur: 'چھپا رہے تھے', g: 'khabar-kana' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }, { from: 6, to: 7, l: 'مبتدأ + خبر' }] },

  73: { tr: { en: 'So We said, "Strike him with part of it." Thus does Allah bring the dead to life, and He shows you His signs that you might reason.', ur: 'تو ہم نے کہا اس مردے کو اس گائے کے ایک ٹکڑے سے مارو اس طرح اللہ مردوں کو زندہ کرتا ہے اور اپنی نشانیاں دکھاتا ہے تاکہ تم سمجھو' }, w: [
    { a: 'فَقُلْنَا', t: 'fa-qulna', r: 'ق و ل', p: 'CONJ+V', en: 'So We said', ur: 'تو ہم نے کہا', g: 'verb' },
    { a: 'اضْرِبُوهُ', t: 'idribuhu', r: 'ض ر ب', p: 'V+PRON', en: 'Strike him', ur: 'اسے مارو', g: 'verb' },
    { a: 'بِبَعْضِهَا', t: 'bi-ba\'diha', p: 'P+N+PRON', en: 'with part of it', ur: 'اس کے ایک ٹکڑے سے' },
    { a: 'كَذَٰلِكَ', t: 'kadhalika', p: 'P+DEM', en: 'Thus', ur: 'اسی طرح' },
    { a: 'يُحْيِي', t: 'yuhyi', r: 'ح ي ي', p: 'V', en: 'brings to life', ur: 'زندہ کرتا ہے', g: 'verb', f: { form: 'IV' } },
    { a: 'اللَّهُ', t: 'Allahu', p: 'PN', en: 'Allah', ur: 'اللہ', g: 'subj' },
    { a: 'الْمَوْتَىٰ', t: 'al-mawta', r: 'م و ت', p: 'N', en: 'the dead', ur: 'مردوں کو', g: 'obj' },
    { a: 'وَيُرِيكُمْ', t: 'wa-yurikum', r: 'ر أ ي', p: 'CONJ+V+PRON', en: 'and shows you', ur: 'اور دکھاتا ہے تمہیں', g: 'verb', f: { form: 'IV' } },
    { a: 'آيَاتِهِ', t: 'ayatihi', r: 'أ ي ي', p: 'N+PRON', en: 'His signs', ur: 'اپنی نشانیاں', g: 'obj' },
    { a: 'لَعَلَّكُمْ', t: 'la\'allakum', p: 'EMPH+PRON', en: 'that you', ur: 'تاکہ تم' },
    { a: 'تَعْقِلُونَ', t: 'ta\'qiluna', r: 'ع ق ل', p: 'V', en: 'might reason', ur: 'سمجھو', g: 'verb' },
  ], rel: [{ from: 5, to: 6, l: 'فعل + فاعل' }, { from: 5, to: 7, l: 'فعل + مفعول به' }] },

  74: { tr: { en: 'Then your hearts became hardened after that, being like stones or even harder. And indeed, from among stones are rivers that burst forth.', ur: 'پھر اس کے بعد تمہارے دل سخت ہو گئے جیسے پتھر یا اس سے بھی سخت اور بعض پتھروں سے نہریں پھوٹتی ہیں' }, w: [
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'قَسَتْ', t: 'qasat', r: 'ق س و', p: 'V', en: 'became hardened', ur: 'سخت ہو گئے', g: 'verb' },
    { a: 'قُلُوبُكُم', t: 'qulubukum', r: 'ق ل ب', p: 'N+PRON', en: 'your hearts', ur: 'تمہارے دل', g: 'subj' },
    { a: 'مِّن', t: 'min', p: 'P', en: 'after', ur: 'بعد' },
    { a: 'بَعْدِ', t: 'ba\'di', p: 'N', en: 'after', ur: 'کے بعد' },
    { a: 'ذَٰلِكَ', t: 'dhalika', p: 'DEM', en: 'that', ur: 'اس' },
    { a: 'فَهِيَ', t: 'fa-hiya', p: 'CONJ+PRON', en: 'and they are', ur: 'تو وہ ہیں' },
    { a: 'كَالْحِجَارَةِ', t: 'kal-hijarati', r: 'ح ج ر', p: 'P+N', en: 'like stones', ur: 'پتھروں جیسے' },
    { a: 'أَوْ', t: 'aw', p: 'CONJ', en: 'or', ur: 'یا' },
    { a: 'أَشَدُّ', t: 'ashaddu', r: 'ش د د', p: 'ADJ', en: 'harder', ur: 'زیادہ سخت' },
    { a: 'قَسْوَةً', t: 'qaswatan', r: 'ق س و', p: 'N', en: 'in hardness', ur: 'سختی میں', g: 'tamyeez' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + فاعل' }] },

  75: { tr: { en: 'Do you covet that they would believe for you while a party of them used to hear the words of Allah and then distort it after they had understood it?', ur: 'کیا تم لالچ کرتے ہو کہ وہ تمہارے لیے ایمان لائیں جبکہ ان کا ایک گروہ کلام اللہ سنتا تھا پھر اسے بدل دیتا تھا' }, w: [
    { a: 'أَفَتَطْمَعُونَ', t: 'afa-tatma\'una', r: 'ط م ع', p: 'INTG+CONJ+V', en: 'Do you then hope', ur: 'کیا تم لالچ کرتے ہو', g: 'verb' },
    { a: 'أَن', t: 'an', p: 'EMPH', en: 'that', ur: 'کہ' },
    { a: 'يُؤْمِنُوا', t: 'yu-minu', r: 'أ م ن', p: 'V', en: 'they would believe', ur: 'ایمان لائیں', g: 'verb', f: { form: 'IV' } },
    { a: 'لَكُمْ', t: 'lakum', p: 'P+PRON', en: 'for you', ur: 'تمہارے لیے' },
    { a: 'وَقَدْ', t: 'wa-qad', p: 'CONJ+EMPH', en: 'while already', ur: 'حالانکہ' },
    { a: 'كَانَ', t: 'kana', r: 'ك و ن', p: 'V', en: 'was', ur: 'تھا' },
    { a: 'فَرِيقٌ', t: 'fariqun', r: 'ف ر ق', p: 'N', en: 'a party', ur: 'ایک گروہ', g: 'ism-kana' },
    { a: 'مِّنْهُمْ', t: 'minhum', p: 'P+PRON', en: 'of them', ur: 'ان میں سے' },
    { a: 'يَسْمَعُونَ', t: 'yasma\'una', r: 'س م ع', p: 'V', en: 'used to hear', ur: 'سنتے تھے', g: 'khabar-kana' },
    { a: 'كَلَامَ', t: 'kalama', r: 'ك ل م', p: 'N', en: 'the words of', ur: 'کلام', g: 'obj' },
    { a: 'اللَّهِ', t: 'Allahi', p: 'PN', en: 'Allah', ur: 'اللہ کا' },
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'then', ur: 'پھر' },
    { a: 'يُحَرِّفُونَهُ', t: 'yuharrifunahu', r: 'ح ر ف', p: 'V+PRON', en: 'distort it', ur: 'بدل دیتے', g: 'verb', f: { form: 'II' } },
  ], rel: [{ from: 6, to: 7, l: 'كان + اسم' }, { from: 9, to: 10, l: 'فعل + مفعول به' }] },

  76: { tr: { en: 'And when they meet those who believe, they say, "We have believed"; but when they are alone with one another, they say, "Do you talk to them about what Allah has revealed to you?"', ur: 'جب مومنوں سے ملتے ہیں تو کہتے ہیں ایمان لائے اور جب آپس میں ملتے ہیں تو کہتے ہیں کیا تم انہیں بتاتے ہو جو اللہ نے تم پر ظاہر کیا' }, w: [
    { a: 'وَإِذَا', t: 'wa-idha', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'لَقُوا', t: 'laqu', r: 'ل ق ي', p: 'V', en: 'they meet', ur: 'ملتے ہیں', g: 'verb' },
    { a: 'الَّذِينَ', t: 'alladhina', p: 'REL', en: 'those who', ur: 'جنہوں نے' },
    { a: 'آمَنُوا', t: 'amanu', r: 'أ م ن', p: 'V', en: 'believe', ur: 'ایمان لائے', g: 'silah' },
    { a: 'قَالُوا', t: 'qalu', r: 'ق و ل', p: 'V', en: 'they say', ur: 'کہتے ہیں', g: 'verb' },
    { a: 'آمَنَّا', t: 'amanna', r: 'أ م ن', p: 'V', en: 'We believe', ur: 'ہم ایمان لائے' },
    { a: 'وَإِذَا', t: 'wa-idha', p: 'CONJ+T', en: 'and when', ur: 'اور جب' },
    { a: 'خَلَا', t: 'khala', r: 'خ ل و', p: 'V', en: 'are alone', ur: 'تنہا ہوتے ہیں', g: 'verb' },
    { a: 'بَعْضُهُمْ', t: 'ba\'duhum', p: 'N+PRON', en: 'some of them', ur: 'بعض' },
    { a: 'إِلَىٰ', t: 'ila', p: 'P', en: 'with', ur: 'کی طرف' },
    { a: 'بَعْضٍ', t: 'ba\'din', p: 'N', en: 'one another', ur: 'بعض' },
    { a: 'قَالُوا', t: 'qalu', r: 'ق و ل', p: 'V', en: 'they say', ur: 'کہتے ہیں', g: 'verb' },
    { a: 'أَتُحَدِّثُونَهُم', t: 'atuhaddithunahum', r: 'ح د ث', p: 'INTG+V+PRON', en: 'Do you tell them', ur: 'کیا تم بتاتے ہو انہیں', g: 'verb', f: { form: 'II' } },
  ], rel: [{ from: 2, to: 4, l: 'فعل + مفعول به' }] },

  77: { tr: { en: 'But do they not know that Allah knows what they conceal and what they declare?', ur: 'کیا وہ نہیں جانتے کہ اللہ جانتا ہے جو وہ چھپاتے ہیں اور جو ظاہر کرتے ہیں' }, w: [
    { a: 'أَوَلَا', t: 'awa-la', p: 'INTG+CONJ+NEG', en: 'Do they not', ur: 'کیا نہیں' },
    { a: 'يَعْلَمُونَ', t: 'ya\'lamuna', r: 'ع ل م', p: 'V', en: 'know', ur: 'جانتے', g: 'verb' },
    { a: 'أَنَّ', t: 'anna', p: 'EMPH', en: 'that', ur: 'کہ' },
    { a: 'اللَّهَ', t: 'Allaha', p: 'PN', en: 'Allah', ur: 'اللہ', g: 'ism-anna' },
    { a: 'يَعْلَمُ', t: 'ya\'lamu', r: 'ع ل م', p: 'V', en: 'knows', ur: 'جانتا ہے', g: 'khabar-anna' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'what', ur: 'جو' },
    { a: 'يُسِرُّونَ', t: 'yusirruna', r: 'س ر ر', p: 'V', en: 'they conceal', ur: 'چھپاتے ہیں', g: 'verb', f: { form: 'IV' } },
    { a: 'وَمَا', t: 'wa-ma', p: 'CONJ+REL', en: 'and what', ur: 'اور جو' },
    { a: 'يُعْلِنُونَ', t: 'yu\'linuna', r: 'ع ل ن', p: 'V', en: 'they declare', ur: 'ظاہر کرتے ہیں', g: 'verb', f: { form: 'IV' } },
  ], rel: [{ from: 3, to: 4, l: 'إنّ + اسم' }, { from: 5, to: 6, l: 'فعل + مفعول به' }] },

  78: { tr: { en: 'And among them are unlettered ones who do not know the Scripture except wishful thinking, and they are only assuming.', ur: 'اور ان میں ان پڑھ لوگ ہیں جو کتاب نہیں جانتے سوائے جھوٹی امیدوں کے اور وہ صرف گمان کرتے ہیں' }, w: [
    { a: 'وَمِنْهُمْ', t: 'wa-minhum', p: 'CONJ+P+PRON', en: 'And among them', ur: 'اور ان میں سے' },
    { a: 'أُمِّيُّونَ', t: 'ummiyyuna', r: 'أ م م', p: 'N', en: 'are unlettered', ur: 'ان پڑھ ہیں', g: 'mubtada' },
    { a: 'لَا', t: 'la', p: 'NEG', en: 'not', ur: 'نہیں' },
    { a: 'يَعْلَمُونَ', t: 'ya\'lamuna', r: 'ع ل م', p: 'V', en: 'they know', ur: 'جانتے', g: 'verb' },
    { a: 'الْكِتَابَ', t: 'al-kitaba', r: 'ك ت ب', p: 'N', en: 'the Scripture', ur: 'کتاب', g: 'obj' },
    { a: 'إِلَّا', t: 'illa', p: 'EXCEPT', en: 'except', ur: 'سوائے' },
    { a: 'أَمَانِيَّ', t: 'amaniyya', r: 'م ن ي', p: 'N', en: 'wishful thinking', ur: 'جھوٹی امیدوں', g: 'mustathna' },
    { a: 'وَإِنْ', t: 'wa-in', p: 'CONJ+NEG', en: 'and not', ur: 'اور نہیں' },
    { a: 'هُمْ', t: 'hum', p: 'PRON', en: 'they', ur: 'وہ' },
    { a: 'إِلَّا', t: 'illa', p: 'EXCEPT', en: 'except', ur: 'بس' },
    { a: 'يَظُنُّونَ', t: 'yadhunnuna', r: 'ظ ن ن', p: 'V', en: 'assuming', ur: 'گمان کرتے ہیں', g: 'verb' },
  ], rel: [{ from: 3, to: 4, l: 'نفی + فعل' }, { from: 4, to: 5, l: 'فعل + مفعول به' }] },

  79: { tr: { en: 'So woe to those who write the scripture with their own hands, then say, "This is from Allah" to exchange it for a small price.', ur: 'تو ان لوگوں کے لیے تباہی ہے جو اپنے ہاتھ سے کتاب لکھتے ہیں پھر کہتے ہیں یہ اللہ کی طرف سے ہے تھوڑی قیمت کمانے کے لیے' }, w: [
    { a: 'فَوَيْلٌ', t: 'fa-waylun', r: 'و ي ل', p: 'CONJ+N', en: 'So woe', ur: 'تو تباہی ہے', g: 'mubtada' },
    { a: 'لِّلَّذِينَ', t: 'lilladhina', p: 'P+REL', en: 'to those who', ur: 'ان لوگوں کے لیے جو' },
    { a: 'يَكْتُبُونَ', t: 'yaktubuna', r: 'ك ت ب', p: 'V', en: 'write', ur: 'لکھتے ہیں', g: 'silah' },
    { a: 'الْكِتَابَ', t: 'al-kitaba', r: 'ك ت ب', p: 'N', en: 'the scripture', ur: 'کتاب', g: 'obj' },
    { a: 'بِأَيْدِيهِمْ', t: 'bi-aydihim', r: 'ي د ي', p: 'P+N+PRON', en: 'with their hands', ur: 'اپنے ہاتھوں سے' },
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'then', ur: 'پھر' },
    { a: 'يَقُولُونَ', t: 'yaquluna', r: 'ق و ل', p: 'V', en: 'say', ur: 'کہتے ہیں', g: 'verb' },
    { a: 'هَٰذَا', t: 'hadha', p: 'DEM', en: 'This is', ur: 'یہ', g: 'mubtada' },
    { a: 'مِنْ', t: 'min', p: 'P', en: 'from', ur: 'کی طرف سے' },
    { a: 'عِندِ', t: 'indi', p: 'LOC', en: 'from', ur: 'پاس' },
    { a: 'اللَّهِ', t: 'Allahi', p: 'PN', en: 'Allah', ur: 'اللہ' },
  ], rel: [{ from: 3, to: 4, l: 'فعل + مفعول به' }] },

  80: { tr: { en: 'And they say, "Never will the Fire touch us, except for a few numbered days."', ur: 'اور کہتے ہیں ہمیں آگ نہیں چھوئے گی مگر چند گنے ہوئے دن' }, w: [
    { a: 'وَقَالُوا', t: 'wa-qalu', r: 'ق و ل', p: 'CONJ+V', en: 'And they say', ur: 'اور کہتے ہیں', g: 'verb' },
    { a: 'لَن', t: 'lan', p: 'NEG', en: 'Never', ur: 'ہرگز نہیں' },
    { a: 'تَمَسَّنَا', t: 'tamassana', r: 'م س س', p: 'V+PRON', en: 'will touch us', ur: 'ہمیں چھوئے گی', g: 'verb' },
    { a: 'النَّارُ', t: 'an-naru', r: 'ن و ر', p: 'N', en: 'the Fire', ur: 'آگ', g: 'subj' },
    { a: 'إِلَّا', t: 'illa', p: 'EXCEPT', en: 'except', ur: 'مگر' },
    { a: 'أَيَّامًا', t: 'ayyaman', r: 'ي و م', p: 'N', en: 'days', ur: 'دن', g: 'mustathna' },
    { a: 'مَّعْدُودَةً', t: 'ma\'dudatan', r: 'ع د د', p: 'ADJ', en: 'numbered', ur: 'گنتی کے', g: 'sifah' },
  ], rel: [{ from: 2, to: 3, l: 'نفی + فعل' }, { from: 6, to: 7, l: 'موصوف + صفت' }] },

  81: { tr: { en: 'Yes, whoever earns evil and his sin has encompassed him - those are the companions of the Fire; they will abide therein eternally.', ur: 'ہاں جس نے برائی کمائی اور اس کے گناہ نے اسے گھیر لیا وہ آگ والے ہیں اس میں ہمیشہ رہیں گے' }, w: [
    { a: 'بَلَىٰ', t: 'bala', p: 'EMPH', en: 'Yes', ur: 'ہاں' },
    { a: 'مَن', t: 'man', p: 'COND', en: 'whoever', ur: 'جو' },
    { a: 'كَسَبَ', t: 'kasaba', r: 'ك س ب', p: 'V', en: 'earns', ur: 'کمائے', g: 'verb' },
    { a: 'سَيِّئَةً', t: 'sayyi-atan', r: 'س و أ', p: 'N', en: 'evil', ur: 'برائی', g: 'obj' },
    { a: 'وَأَحَاطَتْ', t: 'wa-ahatat', r: 'ح و ط', p: 'CONJ+V', en: 'and encompassed', ur: 'اور گھیر لیا', g: 'verb', f: { form: 'IV' } },
    { a: 'بِهِ', t: 'bihi', p: 'P+PRON', en: 'him', ur: 'اسے' },
    { a: 'خَطِيئَتُهُ', t: 'khatiatuhu', r: 'خ ط أ', p: 'N+PRON', en: 'his sin', ur: 'اس کے گناہ نے', g: 'subj' },
    { a: 'فَأُولَٰئِكَ', t: 'fa-ulaika', p: 'CONJ+DEM', en: 'those', ur: 'تو یہ لوگ', g: 'mubtada' },
    { a: 'أَصْحَابُ', t: 'ashabu', r: 'ص ح ب', p: 'N', en: 'companions of', ur: 'والے', g: 'khabar' },
    { a: 'النَّارِ', t: 'an-nari', p: 'N', en: 'the Fire', ur: 'آگ' },
    { a: 'هُمْ', t: 'hum', p: 'PRON', en: 'they', ur: 'وہ' },
    { a: 'فِيهَا', t: 'fiha', p: 'P+PRON', en: 'therein', ur: 'اس میں' },
    { a: 'خَالِدُونَ', t: 'khaliduna', r: 'خ ل د', p: 'N', en: 'will abide eternally', ur: 'ہمیشہ رہنے والے' },
  ], rel: [{ from: 3, to: 4, l: 'فعل + مفعول به' }, { from: 8, to: 9, l: 'مبتدأ + خبر' }] },

  82: { tr: { en: 'But those who believe and do righteous deeds - those are the companions of Paradise; they will abide therein eternally.', ur: 'اور جو ایمان لائے اور نیک عمل کیے وہ جنت والے ہیں اس میں ہمیشہ رہیں گے' }, w: [
    { a: 'وَالَّذِينَ', t: 'walladhina', p: 'CONJ+REL', en: 'And those who', ur: 'اور جو لوگ' },
    { a: 'آمَنُوا', t: 'amanu', r: 'أ م ن', p: 'V', en: 'believe', ur: 'ایمان لائے', g: 'silah' },
    { a: 'وَعَمِلُوا', t: 'wa-amilu', r: 'ع م ل', p: 'CONJ+V', en: 'and do', ur: 'اور عمل کیے', g: 'verb' },
    { a: 'الصَّالِحَاتِ', t: 'as-salihati', r: 'ص ل ح', p: 'N', en: 'righteous deeds', ur: 'نیک', g: 'obj' },
    { a: 'أُولَٰئِكَ', t: 'ulaika', p: 'DEM', en: 'those', ur: 'یہ لوگ', g: 'mubtada' },
    { a: 'أَصْحَابُ', t: 'ashabu', r: 'ص ح ب', p: 'N', en: 'companions of', ur: 'والے', g: 'khabar' },
    { a: 'الْجَنَّةِ', t: 'al-jannati', r: 'ج ن ن', p: 'N', en: 'Paradise', ur: 'جنت' },
    { a: 'هُمْ', t: 'hum', p: 'PRON', en: 'they', ur: 'وہ' },
    { a: 'فِيهَا', t: 'fiha', p: 'P+PRON', en: 'therein', ur: 'اس میں' },
    { a: 'خَالِدُونَ', t: 'khaliduna', r: 'خ ل د', p: 'N', en: 'will abide eternally', ur: 'ہمیشہ رہنے والے' },
  ], rel: [{ from: 3, to: 4, l: 'فعل + مفعول به' }, { from: 5, to: 6, l: 'مبتدأ + خبر' }] },

  83: { tr: { en: 'And when We took the covenant from the Children of Israel: Do not worship except Allah; and to parents do good.', ur: 'اور جب ہم نے بنی اسرائیل سے عہد لیا کہ اللہ کے سوا کسی کی عبادت نہ کرو اور والدین کے ساتھ نیکی کرو' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'أَخَذْنَا', t: 'akhadhna', r: 'أ خ ذ', p: 'V', en: 'We took', ur: 'ہم نے لیا', g: 'verb' },
    { a: 'مِيثَاقَ', t: 'mithaqa', r: 'و ث ق', p: 'N', en: 'the covenant of', ur: 'عہد', g: 'obj' },
    { a: 'بَنِي', t: 'bani', r: 'ب ن ي', p: 'N', en: 'the Children of', ur: 'بنی' },
    { a: 'إِسْرَائِيلَ', t: 'Israila', p: 'PN', en: 'Israel', ur: 'اسرائیل' },
    { a: 'لَا', t: 'la', p: 'NEG', en: 'Do not', ur: 'مت' },
    { a: 'تَعْبُدُونَ', t: 'ta\'buduna', r: 'ع ب د', p: 'V', en: 'worship', ur: 'عبادت کرو', g: 'verb' },
    { a: 'إِلَّا', t: 'illa', p: 'EXCEPT', en: 'except', ur: 'سوائے' },
    { a: 'اللَّهَ', t: 'Allaha', p: 'PN', en: 'Allah', ur: 'اللہ کے' },
    { a: 'وَبِالْوَالِدَيْنِ', t: 'wa-bil-walidayni', r: 'و ل د', p: 'CONJ+P+N', en: 'and to parents', ur: 'اور والدین سے' },
    { a: 'إِحْسَانًا', t: 'ihsanan', r: 'ح س ن', p: 'N', en: 'do good', ur: 'نیکی', g: 'obj' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }, { from: 6, to: 7, l: 'نہی + فعل' }] },

  84: { tr: { en: 'And when We took your covenant: Do not shed each others blood or evict one another from your homes. Then you acknowledged and you were witnessing.', ur: 'اور جب ہم نے تم سے عہد لیا کہ آپس میں خون نہ بہاؤ اور ایک دوسرے کو گھروں سے نہ نکالو پھر تم نے اقرار کیا' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'أَخَذْنَا', t: 'akhadhna', r: 'أ خ ذ', p: 'V', en: 'We took', ur: 'ہم نے لیا', g: 'verb' },
    { a: 'مِيثَاقَكُمْ', t: 'mithaqakum', r: 'و ث ق', p: 'N+PRON', en: 'your covenant', ur: 'تمہارا عہد', g: 'obj' },
    { a: 'لَا', t: 'la', p: 'NEG', en: 'Do not', ur: 'مت' },
    { a: 'تَسْفِكُونَ', t: 'tasfikuna', r: 'س ف ك', p: 'V', en: 'shed', ur: 'بہاؤ', g: 'verb' },
    { a: 'دِمَاءَكُمْ', t: 'dimaakum', r: 'د م و', p: 'N+PRON', en: 'your blood', ur: 'اپنا خون', g: 'obj' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'nor', ur: 'اور نہ' },
    { a: 'تُخْرِجُونَ', t: 'tukhrijuna', r: 'خ ر ج', p: 'V', en: 'evict', ur: 'نکالو', g: 'verb', f: { form: 'IV' } },
    { a: 'أَنفُسَكُم', t: 'anfusakum', r: 'ن ف س', p: 'N+PRON', en: 'one another', ur: 'آپس میں', g: 'obj' },
    { a: 'مِّن', t: 'min', p: 'P', en: 'from', ur: 'سے' },
    { a: 'دِيَارِكُمْ', t: 'diyarikum', r: 'د و ر', p: 'N+PRON', en: 'your homes', ur: 'اپنے گھروں' },
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'أَقْرَرْتُمْ', t: 'aqrartum', r: 'ق ر ر', p: 'V', en: 'you acknowledged', ur: 'تم نے اقرار کیا', g: 'verb', f: { form: 'IV' } },
    { a: 'وَأَنتُمْ', t: 'wa-antum', p: 'CONJ+PRON', en: 'and you', ur: 'اور تم' },
    { a: 'تَشْهَدُونَ', t: 'tashhaduna', r: 'ش ه د', p: 'V', en: 'were witnessing', ur: 'گواہ ہو', g: 'verb' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }, { from: 5, to: 6, l: 'فعل + مفعول به' }] },

  85: { tr: { en: 'Then you are those who kill one another and evict a party of your people from their homes, supporting against them in sin and aggression.', ur: 'پھر تم وہی لوگ ہو جو آپس میں قتل کرتے ہو اور ایک گروہ کو ان کے گھروں سے نکالتے ہو گناہ اور زیادتی سے ان کے خلاف مدد کرتے ہو' }, w: [
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'أَنتُمْ', t: 'antum', p: 'PRON', en: 'you', ur: 'تم', g: 'mubtada' },
    { a: 'هَٰؤُلَاءِ', t: 'haulai', p: 'DEM', en: 'those', ur: 'وہی' },
    { a: 'تَقْتُلُونَ', t: 'taqtuluna', r: 'ق ت ل', p: 'V', en: 'kill', ur: 'قتل کرتے ہو', g: 'khabar' },
    { a: 'أَنفُسَكُمْ', t: 'anfusakum', r: 'ن ف س', p: 'N+PRON', en: 'one another', ur: 'آپس میں', g: 'obj' },
    { a: 'وَتُخْرِجُونَ', t: 'wa-tukhrijuna', r: 'خ ر ج', p: 'CONJ+V', en: 'and evict', ur: 'اور نکالتے ہو', g: 'verb', f: { form: 'IV' } },
    { a: 'فَرِيقًا', t: 'fariqan', r: 'ف ر ق', p: 'N', en: 'a party', ur: 'ایک گروہ کو', g: 'obj' },
    { a: 'مِّنكُم', t: 'minkum', p: 'P+PRON', en: 'of you', ur: 'تم میں سے' },
    { a: 'مِّن', t: 'min', p: 'P', en: 'from', ur: 'سے' },
    { a: 'دِيَارِهِمْ', t: 'diyarihim', r: 'د و ر', p: 'N+PRON', en: 'their homes', ur: 'ان کے گھروں' },
  ], rel: [{ from: 4, to: 5, l: 'فعل + مفعول به' }, { from: 6, to: 7, l: 'فعل + مفعول به' }] },
};

// Helper function
function formatWord(ayahNum, w, pos) {
  const parts = [`{ id: '2:${ayahNum}:${pos}'`, `position: ${pos}`, `arabic: '${w.a}'`, `transliteration: '${w.t}'`];
  const posArr = w.p.split('+');
  parts.push(`pos: [${posArr.map(p => `'${p}'`).join(', ')}]`, `posLabel: '${w.p}'`);
  if (w.r) parts.push(`root: '${w.r}'`);
  parts.push(`meaning: { en: '${w.en.replace(/'/g, "\\'")}', ur: '${w.ur.replace(/'/g, "\\'")}' }`);
  if (w.g) parts.push(`grammarRole: '${w.g}'`);
  if (w.c) parts.push(`case: '${w.c}'`);
  if (w.f) parts.push(`features: { ${Object.entries(w.f).map(([k,v]) => `${k}: '${v}'`).join(', ')} }`);
  return parts.join(', ') + ' }';
}

const filePath = '/Users/zia/Desktop/Development/Quran/quran-personal/src/data/treebank/surahs/002.js';
let content = fs.readFileSync(filePath, 'utf8');

let count = 0;
for (const [ayahNum, data] of Object.entries(AYAH_DATA)) {
  const num = parseInt(ayahNum);
  const textMatch = content.match(new RegExp(`${num}: \\{ text: '([^']+)'`));
  if (!textMatch) continue;

  const words = data.w.map((w, i) => formatWord(num, w, i + 1));
  const rels = (data.rel || []).map(r => `{ from: ${r.from}, to: ${r.to}, label: '${r.l}' }`);
  const replacement = `  ${num}: { text: '${textMatch[1]}', translation: { en: '${data.tr.en.replace(/'/g, "\\'")}', ur: '${data.tr.ur.replace(/'/g, "\\'")}' }, words: [${words.join(', ')}], structure: { relationships: [${rels.join(', ')}] } },`;

  const existingRegex = new RegExp(`  ${num}: \\{ text: '[^']+', words: \\[\\] \\},?`);
  if (existingRegex.test(content)) {
    content = content.replace(existingRegex, replacement);
    count++;
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Updated ${count} ayahs (71-85) with word data`);
