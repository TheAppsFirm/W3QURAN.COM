#!/usr/bin/env node
const fs = require('fs');

const AYAH_DATA = {
  86: { tr: { en: 'Those are the ones who have bought the life of this world in exchange for the Hereafter, so the punishment will not be lightened for them, nor will they be aided.', ur: 'یہ وہ لوگ ہیں جنہوں نے آخرت کے بدلے دنیا کی زندگی خریدی ان سے عذاب ہلکا نہ ہوگا نہ ان کی مدد کی جائے گی' }, w: [
    { a: 'أُولَٰئِكَ', t: 'ulaika', p: 'DEM', en: 'Those', ur: 'یہ وہ لوگ ہیں', g: 'mubtada' },
    { a: 'الَّذِينَ', t: 'alladhina', p: 'REL', en: 'who', ur: 'جنہوں نے' },
    { a: 'اشْتَرَوُا', t: 'ishtaraw', r: 'ش ر ي', p: 'V', en: 'bought', ur: 'خریدا', g: 'silah', f: { form: 'VIII' } },
    { a: 'الْحَيَاةَ', t: 'al-hayata', r: 'ح ي ي', p: 'N', en: 'the life', ur: 'زندگی', g: 'obj' },
    { a: 'الدُّنْيَا', t: 'ad-dunya', r: 'د ن و', p: 'ADJ', en: 'of this world', ur: 'دنیا کی' },
    { a: 'بِالْآخِرَةِ', t: 'bil-akhirati', r: 'أ خ ر', p: 'P+N', en: 'for the Hereafter', ur: 'آخرت کے بدلے' },
    { a: 'فَلَا', t: 'fa-la', p: 'CONJ+NEG', en: 'so not', ur: 'تو نہ' },
    { a: 'يُخَفَّفُ', t: 'yukhaffafu', r: 'خ ف ف', p: 'V', en: 'will be lightened', ur: 'ہلکا ہوگا', g: 'verb', f: { form: 'II' } },
    { a: 'عَنْهُمُ', t: 'anhum', p: 'P+PRON', en: 'from them', ur: 'ان سے' },
    { a: 'الْعَذَابُ', t: 'al-adhabu', r: 'ع ذ ب', p: 'N', en: 'the punishment', ur: 'عذاب', g: 'subj' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'nor', ur: 'اور نہ' },
    { a: 'هُمْ', t: 'hum', p: 'PRON', en: 'they', ur: 'وہ' },
    { a: 'يُنصَرُونَ', t: 'yunsaruna', r: 'ن ص ر', p: 'V', en: 'will be aided', ur: 'مدد دی جائے گی', g: 'verb' },
  ], rel: [{ from: 3, to: 4, l: 'فعل + مفعول به' }, { from: 7, to: 8, l: 'نفی + فعل' }] },

  87: { tr: { en: 'And We gave Moses the Scripture and followed up after him with messengers.', ur: 'اور ہم نے موسیٰ کو کتاب دی اور اس کے بعد پے در پے رسول بھیجے' }, w: [
    { a: 'وَلَقَدْ', t: 'wa-laqad', p: 'CONJ+EMPH', en: 'And We certainly', ur: 'اور بے شک' },
    { a: 'آتَيْنَا', t: 'atayna', r: 'أ ت ي', p: 'V', en: 'gave', ur: 'ہم نے دیا', g: 'verb', f: { form: 'IV' } },
    { a: 'مُوسَى', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ کو', g: 'obj' },
    { a: 'الْكِتَابَ', t: 'al-kitaba', r: 'ك ت ب', p: 'N', en: 'the Scripture', ur: 'کتاب', g: 'obj' },
    { a: 'وَقَفَّيْنَا', t: 'wa-qaffayna', r: 'ق ف و', p: 'CONJ+V', en: 'and followed up', ur: 'اور پے در پے بھیجے', g: 'verb', f: { form: 'II' } },
    { a: 'مِن', t: 'min', p: 'P', en: 'after', ur: 'بعد' },
    { a: 'بَعْدِهِ', t: 'ba-dihi', p: 'N+PRON', en: 'him', ur: 'اس کے' },
    { a: 'بِالرُّسُلِ', t: 'bir-rusuli', r: 'ر س ل', p: 'P+N', en: 'with messengers', ur: 'رسولوں کے ساتھ' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }] },

  88: { tr: { en: 'And they said, "Our hearts are wrapped." Rather, Allah has cursed them for their disbelief, so little is it that they believe.', ur: 'اور کہا ہمارے دلوں پر غلاف ہیں بلکہ اللہ نے ان پر لعنت کی ان کے کفر کی وجہ سے بہت کم ایمان لاتے ہیں' }, w: [
    { a: 'وَقَالُوا', t: 'wa-qalu', r: 'ق و ل', p: 'CONJ+V', en: 'And they said', ur: 'اور کہا', g: 'verb' },
    { a: 'قُلُوبُنَا', t: 'qulubuna', r: 'ق ل ب', p: 'N+PRON', en: 'Our hearts', ur: 'ہمارے دل', g: 'mubtada' },
    { a: 'غُلْفٌ', t: 'ghulfun', r: 'غ ل ف', p: 'N', en: 'are wrapped', ur: 'پردوں میں ہیں', g: 'khabar' },
    { a: 'بَل', t: 'bal', p: 'CONJ', en: 'Rather', ur: 'بلکہ' },
    { a: 'لَّعَنَهُمُ', t: 'la-anahum', r: 'ل ع ن', p: 'V+PRON', en: 'has cursed them', ur: 'لعنت کی ان پر', g: 'verb' },
    { a: 'اللَّهُ', t: 'Allahu', p: 'PN', en: 'Allah', ur: 'اللہ نے', g: 'subj' },
    { a: 'بِكُفْرِهِمْ', t: 'bi-kufrihim', r: 'ك ف ر', p: 'P+N+PRON', en: 'for their disbelief', ur: 'ان کے کفر کی وجہ سے' },
    { a: 'فَقَلِيلًا', t: 'fa-qalilan', r: 'ق ل ل', p: 'CONJ+ADJ', en: 'so little', ur: 'بہت کم' },
    { a: 'مَّا', t: 'ma', p: 'REL', en: 'is it that', ur: 'جو' },
    { a: 'يُؤْمِنُونَ', t: 'yu-minuna', r: 'أ م ن', p: 'V', en: 'they believe', ur: 'ایمان لاتے ہیں', g: 'verb', f: { form: 'IV' } },
  ], rel: [{ from: 2, to: 3, l: 'مبتدأ + خبر' }, { from: 5, to: 6, l: 'فعل + فاعل' }] },

  89: { tr: { en: 'And when there came to them a Book from Allah confirming that which was with them - they refused to believe in it.', ur: 'اور جب ان کے پاس اللہ کی طرف سے کتاب آئی جو ان کے پاس کی تصدیق کرتی ہے تو انہوں نے اسے ماننے سے انکار کیا' }, w: [
    { a: 'وَلَمَّا', t: 'wa-lamma', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'جَاءَهُمْ', t: 'ja-ahum', r: 'ج ي أ', p: 'V+PRON', en: 'came to them', ur: 'ان کے پاس آئی', g: 'verb' },
    { a: 'كِتَابٌ', t: 'kitabun', r: 'ك ت ب', p: 'N', en: 'a Book', ur: 'کتاب', g: 'subj' },
    { a: 'مِّنْ', t: 'min', p: 'P', en: 'from', ur: 'کی طرف سے' },
    { a: 'عِندِ', t: 'indi', p: 'LOC', en: 'from', ur: 'پاس' },
    { a: 'اللَّهِ', t: 'Allahi', p: 'PN', en: 'Allah', ur: 'اللہ' },
    { a: 'مُصَدِّقٌ', t: 'musaddiqun', r: 'ص د ق', p: 'N', en: 'confirming', ur: 'تصدیق کرنے والی', g: 'sifah', f: { form: 'II' } },
    { a: 'لِّمَا', t: 'lima', p: 'P+REL', en: 'that which', ur: 'اس کی جو' },
    { a: 'مَعَهُمْ', t: 'ma-ahum', p: 'LOC+PRON', en: 'was with them', ur: 'ان کے پاس تھا' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + فاعل' }] },

  90: { tr: { en: 'Evil is that for which they sold themselves - that they would disbelieve in what Allah has revealed through outrage.', ur: 'بہت بری چیز ہے جس کے بدلے انہوں نے اپنے آپ کو بیچا کہ اللہ نے جو نازل کیا اس سے کفر کریں سرکشی کی وجہ سے' }, w: [
    { a: 'بِئْسَمَا', t: 'bi-sama', p: 'V+REL', en: 'Evil is that', ur: 'بری ہے وہ چیز', g: 'verb' },
    { a: 'اشْتَرَوْا', t: 'ishtaraw', r: 'ش ر ي', p: 'V', en: 'they sold', ur: 'بیچا', g: 'verb', f: { form: 'VIII' } },
    { a: 'بِهِ', t: 'bihi', p: 'P+PRON', en: 'for which', ur: 'جس کے بدلے' },
    { a: 'أَنفُسَهُمْ', t: 'anfusahum', r: 'ن ف س', p: 'N+PRON', en: 'themselves', ur: 'اپنے آپ کو', g: 'obj' },
    { a: 'أَن', t: 'an', p: 'EMPH', en: 'that', ur: 'کہ' },
    { a: 'يَكْفُرُوا', t: 'yakfuru', r: 'ك ف ر', p: 'V', en: 'they disbelieve', ur: 'کفر کریں', g: 'verb' },
    { a: 'بِمَا', t: 'bima', p: 'P+REL', en: 'in what', ur: 'جو کچھ' },
    { a: 'أَنزَلَ', t: 'anzala', r: 'ن ز ل', p: 'V', en: 'has revealed', ur: 'نازل کیا', g: 'verb', f: { form: 'IV' } },
    { a: 'اللَّهُ', t: 'Allahu', p: 'PN', en: 'Allah', ur: 'اللہ نے', g: 'subj' },
    { a: 'بَغْيًا', t: 'baghyan', r: 'ب غ ي', p: 'N', en: 'through outrage', ur: 'سرکشی سے', g: 'mafool-li-ajlihi' },
  ], rel: [{ from: 2, to: 4, l: 'فعل + مفعول به' }, { from: 8, to: 9, l: 'فعل + فاعل' }] },

  91: { tr: { en: 'And when it is said to them, "Believe in what Allah has revealed," they say, "We believe only in what was revealed to us."', ur: 'اور جب ان سے کہا جاتا ہے اللہ نے جو نازل کیا اس پر ایمان لاؤ تو کہتے ہیں ہم صرف اسی پر ایمان لاتے ہیں جو ہم پر نازل ہوا' }, w: [
    { a: 'وَإِذَا', t: 'wa-idha', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'قِيلَ', t: 'qila', r: 'ق و ل', p: 'V', en: 'it is said', ur: 'کہا جاتا ہے', g: 'verb' },
    { a: 'لَهُمْ', t: 'lahum', p: 'P+PRON', en: 'to them', ur: 'ان سے' },
    { a: 'آمِنُوا', t: 'aminu', r: 'أ م ن', p: 'V', en: 'Believe', ur: 'ایمان لاؤ', g: 'verb', f: { form: 'IV' } },
    { a: 'بِمَا', t: 'bima', p: 'P+REL', en: 'in what', ur: 'جو کچھ' },
    { a: 'أَنزَلَ', t: 'anzala', r: 'ن ز ل', p: 'V', en: 'has revealed', ur: 'نازل کیا', g: 'verb', f: { form: 'IV' } },
    { a: 'اللَّهُ', t: 'Allahu', p: 'PN', en: 'Allah', ur: 'اللہ نے', g: 'subj' },
    { a: 'قَالُوا', t: 'qalu', r: 'ق و ل', p: 'V', en: 'they say', ur: 'کہتے ہیں', g: 'verb' },
    { a: 'نُؤْمِنُ', t: 'nu-minu', r: 'أ م ن', p: 'V', en: 'We believe', ur: 'ہم ایمان لاتے ہیں', g: 'verb', f: { form: 'IV' } },
    { a: 'بِمَا', t: 'bima', p: 'P+REL', en: 'in what', ur: 'جو' },
    { a: 'أُنزِلَ', t: 'unzila', r: 'ن ز ل', p: 'V', en: 'was revealed', ur: 'نازل ہوا', g: 'verb', f: { form: 'IV' } },
    { a: 'عَلَيْنَا', t: 'alayna', p: 'P+PRON', en: 'to us', ur: 'ہم پر' },
  ], rel: [{ from: 6, to: 7, l: 'فعل + فاعل' }] },

  92: { tr: { en: 'And Moses had certainly brought you clear proofs. Then you took the calf after him, and you were wrongdoers.', ur: 'اور بے شک موسیٰ تمہارے پاس کھلی نشانیاں لے کر آئے پھر تم نے اس کے بعد بچھڑے کو بنا لیا اور تم ظالم تھے' }, w: [
    { a: 'وَلَقَدْ', t: 'wa-laqad', p: 'CONJ+EMPH', en: 'And certainly', ur: 'اور بے شک' },
    { a: 'جَاءَكُم', t: 'ja-akum', r: 'ج ي أ', p: 'V+PRON', en: 'came to you', ur: 'تمہارے پاس آئے', g: 'verb' },
    { a: 'مُّوسَىٰ', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ', g: 'subj' },
    { a: 'بِالْبَيِّنَاتِ', t: 'bil-bayyinati', r: 'ب ي ن', p: 'P+N', en: 'with clear proofs', ur: 'کھلی نشانیوں کے ساتھ' },
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'اتَّخَذْتُمُ', t: 'ittakhadhtum', r: 'أ خ ذ', p: 'V', en: 'you took', ur: 'تم نے بنا لیا', g: 'verb', f: { form: 'VIII' } },
    { a: 'الْعِجْلَ', t: 'al-ijla', r: 'ع ج ل', p: 'N', en: 'the calf', ur: 'بچھڑے کو', g: 'obj' },
    { a: 'مِن', t: 'min', p: 'P', en: 'after', ur: 'بعد' },
    { a: 'بَعْدِهِ', t: 'ba-dihi', p: 'N+PRON', en: 'him', ur: 'اس کے' },
    { a: 'وَأَنتُمْ', t: 'wa-antum', p: 'CONJ+PRON', en: 'while you', ur: 'اور تم', g: 'hal' },
    { a: 'ظَالِمُونَ', t: 'dhalimuna', r: 'ظ ل م', p: 'N', en: 'were wrongdoers', ur: 'ظالم تھے', g: 'khabar' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + فاعل' }, { from: 6, to: 7, l: 'فعل + مفعول به' }] },

  93: { tr: { en: 'And when We took your covenant and raised over you the mount: Hold firmly to what We have given you and listen.', ur: 'اور جب ہم نے تم سے عہد لیا اور طور پہاڑ تمہارے اوپر اٹھایا جو ہم نے دیا ہے مضبوطی سے پکڑو اور سنو' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'أَخَذْنَا', t: 'akhadhna', r: 'أ خ ذ', p: 'V', en: 'We took', ur: 'ہم نے لیا', g: 'verb' },
    { a: 'مِيثَاقَكُمْ', t: 'mithaqakum', r: 'و ث ق', p: 'N+PRON', en: 'your covenant', ur: 'تمہارا عہد', g: 'obj' },
    { a: 'وَرَفَعْنَا', t: 'wa-rafa-na', r: 'ر ف ع', p: 'CONJ+V', en: 'and raised', ur: 'اور اٹھایا', g: 'verb' },
    { a: 'فَوْقَكُمُ', t: 'fawqakum', p: 'LOC+PRON', en: 'over you', ur: 'تمہارے اوپر' },
    { a: 'الطُّورَ', t: 'at-Tura', r: 'ط و ر', p: 'N', en: 'the Mount', ur: 'طور', g: 'obj' },
    { a: 'خُذُوا', t: 'khudhu', r: 'أ خ ذ', p: 'V', en: 'Hold', ur: 'پکڑو', g: 'verb' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'what', ur: 'جو' },
    { a: 'آتَيْنَاكُم', t: 'ataynakum', r: 'أ ت ي', p: 'V+PRON', en: 'We gave you', ur: 'ہم نے تمہیں دیا', g: 'verb' },
    { a: 'بِقُوَّةٍ', t: 'bi-quwwatin', r: 'ق و ي', p: 'P+N', en: 'with firmness', ur: 'مضبوطی سے' },
    { a: 'وَاسْمَعُوا', t: 'wasma-u', r: 'س م ع', p: 'CONJ+V', en: 'and listen', ur: 'اور سنو', g: 'verb' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }, { from: 4, to: 6, l: 'فعل + مفعول به' }] },

  94: { tr: { en: 'Say, "If the home of the Hereafter with Allah is for you alone excluding other people, then wish for death, if you should be truthful."', ur: 'کہو اگر اللہ کے نزدیک آخرت کا گھر تمہارے لیے خاص ہے لوگوں کو چھوڑ کر تو موت کی تمنا کرو اگر سچے ہو' }, w: [
    { a: 'قُلْ', t: 'qul', r: 'ق و ل', p: 'V', en: 'Say', ur: 'کہو', g: 'verb' },
    { a: 'إِن', t: 'in', p: 'COND', en: 'If', ur: 'اگر' },
    { a: 'كَانَتْ', t: 'kanat', r: 'ك و ن', p: 'V', en: 'is', ur: 'ہے', g: 'verb' },
    { a: 'لَكُمُ', t: 'lakum', p: 'P+PRON', en: 'for you', ur: 'تمہارے لیے' },
    { a: 'الدَّارُ', t: 'ad-daru', r: 'د و ر', p: 'N', en: 'the home', ur: 'گھر', g: 'ism-kana' },
    { a: 'الْآخِرَةُ', t: 'al-akhiratu', r: 'أ خ ر', p: 'ADJ', en: 'of the Hereafter', ur: 'آخرت کا', g: 'sifah' },
    { a: 'عِندَ', t: 'inda', p: 'LOC', en: 'with', ur: 'نزدیک' },
    { a: 'اللَّهِ', t: 'Allahi', p: 'PN', en: 'Allah', ur: 'اللہ کے' },
    { a: 'خَالِصَةً', t: 'khalisatan', r: 'خ ل ص', p: 'N', en: 'exclusively', ur: 'خاص', g: 'khabar-kana' },
    { a: 'مِّن', t: 'min', p: 'P', en: 'excluding', ur: 'چھوڑ کر' },
    { a: 'دُونِ', t: 'duni', p: 'N', en: 'other than', ur: 'سوا' },
    { a: 'النَّاسِ', t: 'an-nasi', r: 'ن و س', p: 'N', en: 'the people', ur: 'لوگوں' },
    { a: 'فَتَمَنَّوُا', t: 'fa-tamannaw', r: 'م ن ي', p: 'CONJ+V', en: 'then wish for', ur: 'تو تمنا کرو', g: 'verb', f: { form: 'V' } },
    { a: 'الْمَوْتَ', t: 'al-mawta', r: 'م و ت', p: 'N', en: 'death', ur: 'موت کی', g: 'obj' },
  ], rel: [{ from: 3, to: 5, l: 'كان + اسم' }, { from: 13, to: 14, l: 'فعل + مفعول به' }] },

  95: { tr: { en: 'But they will never wish for it, ever, because of what their hands have put forth. And Allah is Knowing of the wrongdoers.', ur: 'اور وہ اپنے ہاتھوں کی کمائی کی وجہ سے کبھی موت کی تمنا نہیں کریں گے اور اللہ ظالموں کو جاننے والا ہے' }, w: [
    { a: 'وَلَن', t: 'wa-lan', p: 'CONJ+NEG', en: 'And never', ur: 'اور ہرگز نہیں' },
    { a: 'يَتَمَنَّوْهُ', t: 'yatamannawhu', r: 'م ن ي', p: 'V+PRON', en: 'will they wish for it', ur: 'وہ اس کی تمنا کریں گے', g: 'verb', f: { form: 'V' } },
    { a: 'أَبَدًا', t: 'abadan', p: 'N', en: 'ever', ur: 'کبھی' },
    { a: 'بِمَا', t: 'bima', p: 'P+REL', en: 'because of what', ur: 'اس وجہ سے جو' },
    { a: 'قَدَّمَتْ', t: 'qaddamat', r: 'ق د م', p: 'V', en: 'have put forth', ur: 'آگے بھیجا', g: 'verb', f: { form: 'II' } },
    { a: 'أَيْدِيهِمْ', t: 'aydihim', r: 'ي د ي', p: 'N+PRON', en: 'their hands', ur: 'ان کے ہاتھوں نے', g: 'subj' },
    { a: 'وَاللَّهُ', t: 'wallahu', p: 'CONJ+PN', en: 'And Allah', ur: 'اور اللہ', g: 'mubtada' },
    { a: 'عَلِيمٌ', t: 'alimun', r: 'ع ل م', p: 'ADJ', en: 'is Knowing', ur: 'جاننے والا ہے', g: 'khabar' },
    { a: 'بِالظَّالِمِينَ', t: 'bidh-dhalimina', r: 'ظ ل م', p: 'P+N', en: 'of the wrongdoers', ur: 'ظالموں کو' },
  ], rel: [{ from: 1, to: 2, l: 'نفی + فعل' }, { from: 7, to: 8, l: 'مبتدأ + خبر' }] },

  96: { tr: { en: 'And you will surely find them the most greedy of people for life - even more than those who associate others with Allah.', ur: 'اور تم انہیں لوگوں میں سب سے زیادہ زندگی کا لالچی پاؤ گے مشرکوں سے بھی زیادہ' }, w: [
    { a: 'وَلَتَجِدَنَّهُمْ', t: 'wa-la-tajidannahum', r: 'و ج د', p: 'CONJ+EMPH+V+PRON', en: 'And you will find them', ur: 'اور ضرور تم انہیں پاؤ گے', g: 'verb' },
    { a: 'أَحْرَصَ', t: 'ahrasa', r: 'ح ر ص', p: 'ADJ', en: 'the most greedy', ur: 'سب سے زیادہ حریص' },
    { a: 'النَّاسِ', t: 'an-nasi', r: 'ن و س', p: 'N', en: 'of people', ur: 'لوگوں میں' },
    { a: 'عَلَىٰ', t: 'ala', p: 'P', en: 'for', ur: 'پر' },
    { a: 'حَيَاةٍ', t: 'hayatin', r: 'ح ي ي', p: 'N', en: 'life', ur: 'زندگی' },
    { a: 'وَمِنَ', t: 'wa-mina', p: 'CONJ+P', en: 'and more than', ur: 'اور سے' },
    { a: 'الَّذِينَ', t: 'alladhina', p: 'REL', en: 'those who', ur: 'جنہوں نے' },
    { a: 'أَشْرَكُوا', t: 'ashraku', r: 'ش ر ك', p: 'V', en: 'associate partners', ur: 'شرک کیا', g: 'silah', f: { form: 'IV' } },
  ], rel: [{ from: 1, to: 2, l: 'فعل + مفعول ثان' }] },

  97: { tr: { en: 'Say, "Whoever is an enemy to Gabriel - it is he who has brought it down upon your heart by permission of Allah."', ur: 'کہو جو جبریل کا دشمن ہو تو اسی نے اسے تمہارے دل پر اللہ کے حکم سے نازل کیا ہے' }, w: [
    { a: 'قُلْ', t: 'qul', r: 'ق و ل', p: 'V', en: 'Say', ur: 'کہو', g: 'verb' },
    { a: 'مَن', t: 'man', p: 'COND', en: 'Whoever', ur: 'جو' },
    { a: 'كَانَ', t: 'kana', r: 'ك و ن', p: 'V', en: 'is', ur: 'ہو' },
    { a: 'عَدُوًّا', t: 'aduwwan', r: 'ع د و', p: 'N', en: 'an enemy', ur: 'دشمن', g: 'khabar-kana' },
    { a: 'لِّجِبْرِيلَ', t: 'li-Jibrila', p: 'P+PN', en: 'to Gabriel', ur: 'جبریل کا' },
    { a: 'فَإِنَّهُ', t: 'fa-innahu', p: 'CONJ+EMPH+PRON', en: 'then indeed he', ur: 'تو اس نے' },
    { a: 'نَزَّلَهُ', t: 'nazzalahu', r: 'ن ز ل', p: 'V+PRON', en: 'brought it down', ur: 'نازل کیا اسے', g: 'khabar-inna', f: { form: 'II' } },
    { a: 'عَلَىٰ', t: 'ala', p: 'P', en: 'upon', ur: 'پر' },
    { a: 'قَلْبِكَ', t: 'qalbika', r: 'ق ل ب', p: 'N+PRON', en: 'your heart', ur: 'تمہارے دل' },
    { a: 'بِإِذْنِ', t: 'bi-idhni', r: 'أ ذ ن', p: 'P+N', en: 'by permission of', ur: 'حکم سے' },
    { a: 'اللَّهِ', t: 'Allahi', p: 'PN', en: 'Allah', ur: 'اللہ کے' },
  ], rel: [{ from: 3, to: 4, l: 'كان + خبر' }, { from: 6, to: 7, l: 'إنّ + خبر' }] },

  98: { tr: { en: 'Whoever is an enemy to Allah and His angels and His messengers and Gabriel and Michael - then indeed, Allah is an enemy to the disbelievers.', ur: 'جو اللہ کا اور اس کے فرشتوں اور رسولوں اور جبریل اور میکائیل کا دشمن ہو تو اللہ کافروں کا دشمن ہے' }, w: [
    { a: 'مَن', t: 'man', p: 'COND', en: 'Whoever', ur: 'جو' },
    { a: 'كَانَ', t: 'kana', r: 'ك و ن', p: 'V', en: 'is', ur: 'ہو' },
    { a: 'عَدُوًّا', t: 'aduwwan', r: 'ع د و', p: 'N', en: 'an enemy', ur: 'دشمن', g: 'khabar-kana' },
    { a: 'لِّلَّهِ', t: 'lillahi', p: 'P+PN', en: 'to Allah', ur: 'اللہ کا' },
    { a: 'وَمَلَائِكَتِهِ', t: 'wa-mala-ikatihi', r: 'م ل ك', p: 'CONJ+N+PRON', en: 'and His angels', ur: 'اور فرشتوں' },
    { a: 'وَرُسُلِهِ', t: 'wa-rusulihi', r: 'ر س ل', p: 'CONJ+N+PRON', en: 'and His messengers', ur: 'اور رسولوں' },
    { a: 'وَجِبْرِيلَ', t: 'wa-Jibrila', p: 'CONJ+PN', en: 'and Gabriel', ur: 'اور جبریل' },
    { a: 'وَمِيكَالَ', t: 'wa-Mikala', p: 'CONJ+PN', en: 'and Michael', ur: 'اور میکائیل' },
    { a: 'فَإِنَّ', t: 'fa-inna', p: 'CONJ+EMPH', en: 'then indeed', ur: 'تو بے شک' },
    { a: 'اللَّهَ', t: 'Allaha', p: 'PN', en: 'Allah', ur: 'اللہ', g: 'ism-inna' },
    { a: 'عَدُوٌّ', t: 'aduwwun', r: 'ع د و', p: 'N', en: 'is an enemy', ur: 'دشمن ہے', g: 'khabar-inna' },
    { a: 'لِّلْكَافِرِينَ', t: 'lil-kafirina', r: 'ك ف ر', p: 'P+N', en: 'to the disbelievers', ur: 'کافروں کا' },
  ], rel: [{ from: 2, to: 3, l: 'كان + خبر' }, { from: 9, to: 10, l: 'إنّ + اسم' }] },

  99: { tr: { en: 'And We have certainly revealed to you verses which are clear proofs, and no one would deny them except the defiantly disobedient.', ur: 'اور ہم نے تم پر کھلی نشانیاں نازل کیں اور ان کا انکار صرف نافرمان لوگ کرتے ہیں' }, w: [
    { a: 'وَلَقَدْ', t: 'wa-laqad', p: 'CONJ+EMPH', en: 'And certainly', ur: 'اور بے شک' },
    { a: 'أَنزَلْنَا', t: 'anzalna', r: 'ن ز ل', p: 'V', en: 'We revealed', ur: 'ہم نے نازل کیا', g: 'verb', f: { form: 'IV' } },
    { a: 'إِلَيْكَ', t: 'ilayka', p: 'P+PRON', en: 'to you', ur: 'تمہاری طرف' },
    { a: 'آيَاتٍ', t: 'ayatin', r: 'أ ي ي', p: 'N', en: 'verses', ur: 'آیات', g: 'obj' },
    { a: 'بَيِّنَاتٍ', t: 'bayyinatin', r: 'ب ي ن', p: 'ADJ', en: 'clear proofs', ur: 'واضح', g: 'sifah' },
    { a: 'وَمَا', t: 'wa-ma', p: 'CONJ+NEG', en: 'and not', ur: 'اور نہیں' },
    { a: 'يَكْفُرُ', t: 'yakfuru', r: 'ك ف ر', p: 'V', en: 'would deny', ur: 'انکار کرتا', g: 'verb' },
    { a: 'بِهَا', t: 'biha', p: 'P+PRON', en: 'them', ur: 'ان کا' },
    { a: 'إِلَّا', t: 'illa', p: 'EXCEPT', en: 'except', ur: 'سوائے' },
    { a: 'الْفَاسِقُونَ', t: 'al-fasiquna', r: 'ف س ق', p: 'N', en: 'the defiantly disobedient', ur: 'نافرمان لوگوں', g: 'subj' },
  ], rel: [{ from: 2, to: 4, l: 'فعل + مفعول به' }, { from: 4, to: 5, l: 'موصوف + صفت' }] },

  100: { tr: { en: 'Is it not so that every time they took a covenant, a party of them threw it away? Rather, most of them do not believe.', ur: 'کیا ایسا نہیں ہے کہ جب بھی انہوں نے کوئی عہد کیا تو ان کے ایک گروہ نے اسے توڑ پھینکا بلکہ ان میں سے اکثر ایمان نہیں رکھتے' }, w: [
    { a: 'أَوَكُلَّمَا', t: 'awa-kullama', p: 'INTG+CONJ+T', en: 'Is it that every time', ur: 'کیا جب بھی' },
    { a: 'عَاهَدُوا', t: 'ahadu', r: 'ع ه د', p: 'V', en: 'they took', ur: 'انہوں نے عہد کیا', g: 'verb', f: { form: 'III' } },
    { a: 'عَهْدًا', t: 'ahdan', r: 'ع ه د', p: 'N', en: 'a covenant', ur: 'عہد', g: 'mafool-mutlaq' },
    { a: 'نَّبَذَهُ', t: 'nabadhahu', r: 'ن ب ذ', p: 'V+PRON', en: 'threw it away', ur: 'اسے توڑ پھینکا', g: 'verb' },
    { a: 'فَرِيقٌ', t: 'fariqun', r: 'ف ر ق', p: 'N', en: 'a party', ur: 'ایک گروہ نے', g: 'subj' },
    { a: 'مِّنْهُم', t: 'minhum', p: 'P+PRON', en: 'of them', ur: 'ان میں سے' },
    { a: 'بَلْ', t: 'bal', p: 'CONJ', en: 'Rather', ur: 'بلکہ' },
    { a: 'أَكْثَرُهُمْ', t: 'aktharuhum', r: 'ك ث ر', p: 'N+PRON', en: 'most of them', ur: 'ان کے اکثر', g: 'mubtada' },
    { a: 'لَا', t: 'la', p: 'NEG', en: 'do not', ur: 'نہیں' },
    { a: 'يُؤْمِنُونَ', t: 'yu-minuna', r: 'أ م ن', p: 'V', en: 'believe', ur: 'ایمان رکھتے', g: 'khabar', f: { form: 'IV' } },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول مطلق' }, { from: 4, to: 5, l: 'فعل + فاعل' }] },
};

// Helper function
function formatWord(ayahNum, w, pos) {
  const parts = [`{ id: '2:${ayahNum}:${pos}'`, `position: ${pos}`, `arabic: '${w.a}'`, `transliteration: '${w.t.replace(/'/g, "\\'")}'`];
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
console.log(`Updated ${count} ayahs (86-100) with word data`);
