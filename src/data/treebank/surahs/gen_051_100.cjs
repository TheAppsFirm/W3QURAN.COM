#!/usr/bin/env node
const fs = require('fs');

const AYAH_DATA = {
  51: { tr: { en: 'And when We appointed for Moses forty nights. Then you took the calf after him while you were wrongdoers.', ur: 'اور جب ہم نے موسیٰ سے چالیس راتوں کا وعدہ کیا پھر تم نے بچھڑے کو بنا لیا اور تم ظالم تھے' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'وَاعَدْنَا', t: 'wa\'adna', r: 'و ع د', p: 'V', en: 'We appointed', ur: 'ہم نے وعدہ کیا', g: 'verb', f: { form: 'III' } },
    { a: 'مُوسَىٰ', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ سے', g: 'obj' },
    { a: 'أَرْبَعِينَ', t: 'arba\'ina', p: 'N', en: 'forty', ur: 'چالیس' },
    { a: 'لَيْلَةً', t: 'laylatan', r: 'ل ي ل', p: 'N', en: 'nights', ur: 'راتیں', g: 'tamyeez' },
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'اتَّخَذْتُمُ', t: 'ittakhadhtum', r: 'أ خ ذ', p: 'V', en: 'you took', ur: 'تم نے بنا لیا', g: 'verb', f: { form: 'VIII' } },
    { a: 'الْعِجْلَ', t: 'al-\'ijla', r: 'ع ج ل', p: 'N', en: 'the calf', ur: 'بچھڑا', g: 'obj' },
    { a: 'مِن', t: 'min', p: 'P', en: 'after', ur: 'کے بعد' },
    { a: 'بَعْدِهِ', t: 'ba\'dihi', p: 'N+PRON', en: 'him', ur: 'اس' },
    { a: 'وَأَنتُمْ', t: 'wa-antum', p: 'CONJ+PRON', en: 'while you', ur: 'اور تم', g: 'hal' },
    { a: 'ظَالِمُونَ', t: 'dhalimuna', r: 'ظ ل م', p: 'N', en: 'were wrongdoers', ur: 'ظالم تھے', g: 'khabar' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }, { from: 7, to: 8, l: 'فعل + مفعول به' }] },

  52: { tr: { en: 'Then We forgave you after that so perhaps you would be grateful.', ur: 'پھر اس کے بعد ہم نے تمہیں معاف کر دیا تاکہ تم شکر کرو' }, w: [
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'عَفَوْنَا', t: 'afawna', r: 'ع ف و', p: 'V', en: 'We forgave', ur: 'ہم نے معاف کیا', g: 'verb' },
    { a: 'عَنكُم', t: 'ankum', p: 'P+PRON', en: 'you', ur: 'تمہیں' },
    { a: 'مِّن', t: 'min', p: 'P', en: 'after', ur: 'کے بعد' },
    { a: 'بَعْدِ', t: 'ba\'di', p: 'N', en: 'after', ur: 'بعد' },
    { a: 'ذَٰلِكَ', t: 'dhalika', p: 'DEM', en: 'that', ur: 'اس' },
    { a: 'لَعَلَّكُمْ', t: 'la\'allakum', p: 'EMPH+PRON', en: 'so that you', ur: 'تاکہ تم' },
    { a: 'تَشْكُرُونَ', t: 'tashkuruna', r: 'ش ك ر', p: 'V', en: 'would be grateful', ur: 'شکر کرو', g: 'verb' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + جار مجرور' }] },

  53: { tr: { en: 'And when We gave Moses the Scripture and criterion that perhaps you would be guided.', ur: 'اور جب ہم نے موسیٰ کو کتاب اور فرقان دیا تاکہ تم ہدایت پاؤ' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'آتَيْنَا', t: 'atayna', r: 'أ ت ي', p: 'V', en: 'We gave', ur: 'ہم نے دیا', g: 'verb', f: { form: 'IV' } },
    { a: 'مُوسَى', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ کو', g: 'obj' },
    { a: 'الْكِتَابَ', t: 'al-kitaba', r: 'ك ت ب', p: 'N', en: 'the Scripture', ur: 'کتاب', g: 'obj' },
    { a: 'وَالْفُرْقَانَ', t: 'wal-furqana', r: 'ف ر ق', p: 'CONJ+N', en: 'and the criterion', ur: 'اور فرقان' },
    { a: 'لَعَلَّكُمْ', t: 'la\'allakum', p: 'EMPH+PRON', en: 'that you', ur: 'تاکہ تم' },
    { a: 'تَهْتَدُونَ', t: 'tahtaduna', r: 'ه د ي', p: 'V', en: 'would be guided', ur: 'ہدایت پاؤ', g: 'verb', f: { form: 'VIII' } },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }] },

  54: { tr: { en: 'And when Moses said to his people, "O my people, indeed you have wronged yourselves by taking the calf. So repent to your Creator."', ur: 'اور جب موسیٰ نے اپنی قوم سے کہا اے میری قوم تم نے بچھڑے کو بنا کر اپنے آپ پر ظلم کیا تو اپنے بنانے والے کی طرف توبہ کرو' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'قَالَ', t: 'qala', r: 'ق و ل', p: 'V', en: 'said', ur: 'کہا', g: 'verb' },
    { a: 'مُوسَىٰ', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ نے', g: 'subj' },
    { a: 'لِقَوْمِهِ', t: 'li-qawmihi', r: 'ق و م', p: 'P+N+PRON', en: 'to his people', ur: 'اپنی قوم سے' },
    { a: 'يَا', t: 'ya', p: 'VOC', en: 'O', ur: 'اے' },
    { a: 'قَوْمِ', t: 'qawmi', r: 'ق و م', p: 'N', en: 'my people', ur: 'میری قوم', g: 'munada' },
    { a: 'إِنَّكُمْ', t: 'innakum', p: 'EMPH+PRON', en: 'indeed you', ur: 'بے شک تم نے' },
    { a: 'ظَلَمْتُمْ', t: 'dhalamtum', r: 'ظ ل م', p: 'V', en: 'have wronged', ur: 'ظلم کیا', g: 'verb' },
    { a: 'أَنفُسَكُم', t: 'anfusakum', r: 'ن ف س', p: 'N+PRON', en: 'yourselves', ur: 'اپنے آپ پر', g: 'obj' },
    { a: 'بِاتِّخَاذِكُمُ', t: 'bittikhadhikum', r: 'أ خ ذ', p: 'P+N+PRON', en: 'by your taking', ur: 'بنانے سے', f: { form: 'VIII' } },
    { a: 'الْعِجْلَ', t: 'al-\'ijla', r: 'ع ج ل', p: 'N', en: 'the calf', ur: 'بچھڑے کو' },
    { a: 'فَتُوبُوا', t: 'fa-tubu', r: 'ت و ب', p: 'CONJ+V', en: 'So repent', ur: 'تو توبہ کرو', g: 'verb' },
    { a: 'إِلَىٰ', t: 'ila', p: 'P', en: 'to', ur: 'کی طرف' },
    { a: 'بَارِئِكُمْ', t: 'bari-ikum', r: 'ب ر أ', p: 'N+PRON', en: 'your Creator', ur: 'اپنے بنانے والے' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + فاعل' }, { from: 8, to: 9, l: 'فعل + مفعول به' }] },

  55: { tr: { en: 'And when you said, "O Moses, we will never believe you until we see Allah outright"; so the thunderbolt struck you while you were looking on.', ur: 'اور جب تم نے کہا اے موسیٰ ہم تم پر ایمان نہ لائیں گے جب تک اللہ کو کھلم کھلا نہ دیکھ لیں تو تمہیں بجلی نے پکڑ لیا' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'قُلْتُمْ', t: 'qultum', r: 'ق و ل', p: 'V', en: 'you said', ur: 'تم نے کہا', g: 'verb' },
    { a: 'يَا', t: 'ya', p: 'VOC', en: 'O', ur: 'اے' },
    { a: 'مُوسَىٰ', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ', g: 'munada' },
    { a: 'لَن', t: 'lan', p: 'NEG', en: 'never', ur: 'ہرگز نہیں' },
    { a: 'نُّؤْمِنَ', t: 'nu-mina', r: 'أ م ن', p: 'V', en: 'we will believe', ur: 'ہم ایمان لائیں', g: 'verb', f: { form: 'IV' } },
    { a: 'لَكَ', t: 'laka', p: 'P+PRON', en: 'you', ur: 'تم پر' },
    { a: 'حَتَّىٰ', t: 'hatta', p: 'P', en: 'until', ur: 'جب تک' },
    { a: 'نَرَى', t: 'nara', r: 'ر أ ي', p: 'V', en: 'we see', ur: 'ہم دیکھ لیں', g: 'verb' },
    { a: 'اللَّهَ', t: 'Allaha', p: 'PN', en: 'Allah', ur: 'اللہ کو', g: 'obj' },
    { a: 'جَهْرَةً', t: 'jahratan', r: 'ج ه ر', p: 'N', en: 'outright', ur: 'کھلم کھلا', g: 'hal' },
    { a: 'فَأَخَذَتْكُمُ', t: 'fa-akhadhatkum', r: 'أ خ ذ', p: 'CONJ+V+PRON', en: 'so struck you', ur: 'تو تمہیں پکڑ لیا', g: 'verb' },
    { a: 'الصَّاعِقَةُ', t: 'as-sa\'iqatu', r: 'ص ع ق', p: 'N', en: 'the thunderbolt', ur: 'بجلی نے', g: 'subj' },
    { a: 'وَأَنتُمْ', t: 'wa-antum', p: 'CONJ+PRON', en: 'while you', ur: 'اور تم', g: 'hal' },
    { a: 'تَنظُرُونَ', t: 'tandhuruna', r: 'ن ظ ر', p: 'V', en: 'were looking', ur: 'دیکھ رہے تھے', g: 'verb' },
  ], rel: [{ from: 5, to: 6, l: 'نفی + فعل' }, { from: 12, to: 13, l: 'فعل + فاعل' }] },

  56: { tr: { en: 'Then We revived you after your death that perhaps you would be grateful.', ur: 'پھر تمہاری موت کے بعد ہم نے تمہیں زندہ کیا تاکہ تم شکر کرو' }, w: [
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'بَعَثْنَاكُم', t: 'ba\'athnakum', r: 'ب ع ث', p: 'V+PRON', en: 'We revived you', ur: 'ہم نے تمہیں اٹھایا', g: 'verb' },
    { a: 'مِّن', t: 'min', p: 'P', en: 'after', ur: 'بعد' },
    { a: 'بَعْدِ', t: 'ba\'di', p: 'N', en: 'after', ur: 'بعد' },
    { a: 'مَوْتِكُمْ', t: 'mawtikum', r: 'م و ت', p: 'N+PRON', en: 'your death', ur: 'تمہاری موت کے' },
    { a: 'لَعَلَّكُمْ', t: 'la\'allakum', p: 'EMPH+PRON', en: 'that you', ur: 'تاکہ تم' },
    { a: 'تَشْكُرُونَ', t: 'tashkuruna', r: 'ش ك ر', p: 'V', en: 'would be grateful', ur: 'شکر کرو', g: 'verb' },
  ], rel: [{ from: 2, to: 5, l: 'فعل + جار مجرور' }] },

  57: { tr: { en: 'And We shaded you with clouds and sent down to you manna and quails, saying, "Eat from the good things with which We have provided you."', ur: 'اور ہم نے تم پر بادل کا سایہ کیا اور من و سلویٰ اتارا کہ جو پاکیزہ چیزیں ہم نے تمہیں دی ہیں کھاؤ' }, w: [
    { a: 'وَظَلَّلْنَا', t: 'wa-dhallalna', r: 'ظ ل ل', p: 'CONJ+V', en: 'And We shaded', ur: 'اور ہم نے سایہ کیا', g: 'verb', f: { form: 'II' } },
    { a: 'عَلَيْكُمُ', t: 'alaykum', p: 'P+PRON', en: 'over you', ur: 'تم پر' },
    { a: 'الْغَمَامَ', t: 'al-ghamama', r: 'غ م م', p: 'N', en: 'the clouds', ur: 'بادل', g: 'obj' },
    { a: 'وَأَنزَلْنَا', t: 'wa-anzalna', r: 'ن ز ل', p: 'CONJ+V', en: 'and sent down', ur: 'اور اتارا', g: 'verb', f: { form: 'IV' } },
    { a: 'عَلَيْكُمُ', t: 'alaykum', p: 'P+PRON', en: 'to you', ur: 'تم پر' },
    { a: 'الْمَنَّ', t: 'al-manna', p: 'N', en: 'manna', ur: 'من', g: 'obj' },
    { a: 'وَالسَّلْوَىٰ', t: 'was-salwa', p: 'CONJ+N', en: 'and quails', ur: 'اور سلویٰ' },
    { a: 'كُلُوا', t: 'kulu', r: 'أ ك ل', p: 'V', en: 'Eat', ur: 'کھاؤ', g: 'verb' },
    { a: 'مِن', t: 'min', p: 'P', en: 'from', ur: 'میں سے' },
    { a: 'طَيِّبَاتِ', t: 'tayyibati', r: 'ط ي ب', p: 'N', en: 'the good things', ur: 'پاکیزہ چیزیں' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'which', ur: 'جو' },
    { a: 'رَزَقْنَاكُمْ', t: 'razaqnakum', r: 'ر ز ق', p: 'V+PRON', en: 'We provided you', ur: 'ہم نے تمہیں دیا', g: 'verb' },
  ], rel: [{ from: 1, to: 3, l: 'فعل + مفعول به' }, { from: 4, to: 6, l: 'فعل + مفعول به' }] },

  58: { tr: { en: 'And when We said, "Enter this city and eat from it wherever you will in ease, and enter the gate bowing humbly."', ur: 'اور جب ہم نے کہا اس بستی میں داخل ہو جاؤ اور جہاں سے چاہو بے روک ٹوک کھاؤ اور دروازے میں سجدہ کرتے ہوئے داخل ہو' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'قُلْنَا', t: 'qulna', r: 'ق و ل', p: 'V', en: 'We said', ur: 'ہم نے کہا', g: 'verb' },
    { a: 'ادْخُلُوا', t: 'udkhulu', r: 'د خ ل', p: 'V', en: 'Enter', ur: 'داخل ہو جاؤ', g: 'verb' },
    { a: 'هَٰذِهِ', t: 'hadhihi', p: 'DEM', en: 'this', ur: 'اس' },
    { a: 'الْقَرْيَةَ', t: 'al-qaryata', r: 'ق ر ي', p: 'N', en: 'city', ur: 'بستی میں', g: 'obj' },
    { a: 'فَكُلُوا', t: 'fa-kulu', r: 'أ ك ل', p: 'CONJ+V', en: 'and eat', ur: 'اور کھاؤ', g: 'verb' },
    { a: 'مِنْهَا', t: 'minha', p: 'P+PRON', en: 'from it', ur: 'اس میں سے' },
    { a: 'حَيْثُ', t: 'haythu', p: 'LOC', en: 'wherever', ur: 'جہاں' },
    { a: 'شِئْتُمْ', t: 'shi-tum', r: 'ش ي أ', p: 'V', en: 'you wish', ur: 'تم چاہو' },
    { a: 'رَغَدًا', t: 'raghadan', r: 'ر غ د', p: 'N', en: 'in abundance', ur: 'بے روک ٹوک', g: 'hal' },
    { a: 'وَادْخُلُوا', t: 'wadkhulu', r: 'د خ ل', p: 'CONJ+V', en: 'and enter', ur: 'اور داخل ہو', g: 'verb' },
    { a: 'الْبَابَ', t: 'al-baba', r: 'ب و ب', p: 'N', en: 'the gate', ur: 'دروازے میں', g: 'obj' },
    { a: 'سُجَّدًا', t: 'sujjadan', r: 'س ج د', p: 'N', en: 'bowing humbly', ur: 'سجدہ کرتے ہوئے', g: 'hal' },
  ], rel: [{ from: 3, to: 5, l: 'فعل + مفعول به' }, { from: 11, to: 12, l: 'فعل + مفعول به' }] },

  59: { tr: { en: 'But those who wronged changed the words to a statement other than that which had been said to them, so We sent down upon those who wronged a punishment from the sky.', ur: 'لیکن ظالموں نے بات بدل دی جو ان سے کہی گئی تھی تو ہم نے ظالموں پر آسمان سے عذاب نازل کیا' }, w: [
    { a: 'فَبَدَّلَ', t: 'fa-baddala', r: 'ب د ل', p: 'CONJ+V', en: 'But changed', ur: 'لیکن بدل دیا', g: 'verb', f: { form: 'II' } },
    { a: 'الَّذِينَ', t: 'alladhina', p: 'REL', en: 'those who', ur: 'جنہوں نے' },
    { a: 'ظَلَمُوا', t: 'dhalamu', r: 'ظ ل م', p: 'V', en: 'wronged', ur: 'ظلم کیا', g: 'silah' },
    { a: 'قَوْلًا', t: 'qawlan', r: 'ق و ل', p: 'N', en: 'a word', ur: 'بات', g: 'obj' },
    { a: 'غَيْرَ', t: 'ghayra', p: 'N', en: 'other than', ur: 'اور' },
    { a: 'الَّذِي', t: 'alladhi', p: 'REL', en: 'that which', ur: 'جو' },
    { a: 'قِيلَ', t: 'qila', r: 'ق و ل', p: 'V', en: 'was said', ur: 'کہا گیا', g: 'verb' },
    { a: 'لَهُمْ', t: 'lahum', p: 'P+PRON', en: 'to them', ur: 'ان سے' },
    { a: 'فَأَنزَلْنَا', t: 'fa-anzalna', r: 'ن ز ل', p: 'CONJ+V', en: 'so We sent down', ur: 'تو ہم نے نازل کیا', g: 'verb', f: { form: 'IV' } },
    { a: 'عَلَى', t: 'ala', p: 'P', en: 'upon', ur: 'پر' },
    { a: 'الَّذِينَ', t: 'alladhina', p: 'REL', en: 'those who', ur: 'جنہوں نے' },
    { a: 'ظَلَمُوا', t: 'dhalamu', r: 'ظ ل م', p: 'V', en: 'wronged', ur: 'ظلم کیا' },
    { a: 'رِجْزًا', t: 'rijzan', r: 'ر ج ز', p: 'N', en: 'a punishment', ur: 'عذاب', g: 'obj' },
    { a: 'مِّنَ', t: 'mina', p: 'P', en: 'from', ur: 'سے' },
    { a: 'السَّمَاءِ', t: 'as-samai', r: 'س م و', p: 'N', en: 'the sky', ur: 'آسمان' },
  ], rel: [{ from: 1, to: 4, l: 'فعل + مفعول به' }, { from: 9, to: 13, l: 'فعل + مفعول به' }] },

  60: { tr: { en: 'And when Moses prayed for water for his people, We said, "Strike with your staff the stone." And there gushed forth from it twelve springs.', ur: 'اور جب موسیٰ نے اپنی قوم کے لیے پانی مانگا تو ہم نے کہا اپنی لاٹھی پتھر پر مارو تو اس سے بارہ چشمے پھوٹ نکلے' }, w: [
    { a: 'وَإِذِ', t: 'wa-idhi', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'اسْتَسْقَىٰ', t: 'istasqa', r: 'س ق ي', p: 'V', en: 'prayed for water', ur: 'پانی مانگا', g: 'verb', f: { form: 'X' } },
    { a: 'مُوسَىٰ', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ نے', g: 'subj' },
    { a: 'لِقَوْمِهِ', t: 'li-qawmihi', r: 'ق و م', p: 'P+N+PRON', en: 'for his people', ur: 'اپنی قوم کے لیے' },
    { a: 'فَقُلْنَا', t: 'fa-qulna', r: 'ق و ل', p: 'CONJ+V', en: 'so We said', ur: 'تو ہم نے کہا', g: 'verb' },
    { a: 'اضْرِب', t: 'idrib', r: 'ض ر ب', p: 'V', en: 'Strike', ur: 'مارو', g: 'verb' },
    { a: 'بِّعَصَاكَ', t: 'bi-asaka', r: 'ع ص و', p: 'P+N+PRON', en: 'with your staff', ur: 'اپنی لاٹھی سے' },
    { a: 'الْحَجَرَ', t: 'al-hajara', r: 'ح ج ر', p: 'N', en: 'the stone', ur: 'پتھر کو', g: 'obj' },
    { a: 'فَانفَجَرَتْ', t: 'fanfajarat', r: 'ف ج ر', p: 'CONJ+V', en: 'And gushed forth', ur: 'تو پھوٹ نکلے', g: 'verb', f: { form: 'VII' } },
    { a: 'مِنْهُ', t: 'minhu', p: 'P+PRON', en: 'from it', ur: 'اس سے' },
    { a: 'اثْنَتَا', t: 'ithnata', p: 'N', en: 'twelve', ur: 'بارہ' },
    { a: 'عَشْرَةَ', t: 'ashrata', p: 'N', en: 'ten', ur: 'دس' },
    { a: 'عَيْنًا', t: 'aynan', r: 'ع ي ن', p: 'N', en: 'springs', ur: 'چشمے', g: 'tamyeez' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + فاعل' }, { from: 6, to: 8, l: 'فعل + مفعول به' }] },

  61: { tr: { en: 'And when you said, "O Moses, we can never endure one kind of food. So call upon your Lord to bring forth for us from the earth its herbs."', ur: 'اور جب تم نے کہا اے موسیٰ ہم ایک ہی کھانے پر صبر نہیں کر سکتے تو اپنے رب سے دعا کرو ہمارے لیے زمین کی اگائی ہوئی چیزیں نکالے' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'قُلْتُمْ', t: 'qultum', r: 'ق و ل', p: 'V', en: 'you said', ur: 'تم نے کہا', g: 'verb' },
    { a: 'يَا', t: 'ya', p: 'VOC', en: 'O', ur: 'اے' },
    { a: 'مُوسَىٰ', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ', g: 'munada' },
    { a: 'لَن', t: 'lan', p: 'NEG', en: 'never', ur: 'ہرگز نہیں' },
    { a: 'نَّصْبِرَ', t: 'nasbira', r: 'ص ب ر', p: 'V', en: 'we endure', ur: 'صبر کریں', g: 'verb' },
    { a: 'عَلَىٰ', t: 'ala', p: 'P', en: 'on', ur: 'پر' },
    { a: 'طَعَامٍ', t: 'ta\'amin', r: 'ط ع م', p: 'N', en: 'food', ur: 'کھانا' },
    { a: 'وَاحِدٍ', t: 'wahidin', r: 'و ح د', p: 'ADJ', en: 'one kind', ur: 'ایک', g: 'sifah' },
    { a: 'فَادْعُ', t: 'fad\'u', r: 'د ع و', p: 'CONJ+V', en: 'So call upon', ur: 'تو دعا کرو', g: 'verb' },
    { a: 'لَنَا', t: 'lana', p: 'P+PRON', en: 'for us', ur: 'ہمارے لیے' },
    { a: 'رَبَّكَ', t: 'rabbaka', r: 'ر ب ب', p: 'N+PRON', en: 'your Lord', ur: 'اپنے رب سے', g: 'obj' },
    { a: 'يُخْرِجْ', t: 'yukhrij', r: 'خ ر ج', p: 'V', en: 'to bring forth', ur: 'نکالے', g: 'verb', f: { form: 'IV' } },
    { a: 'لَنَا', t: 'lana', p: 'P+PRON', en: 'for us', ur: 'ہمارے لیے' },
    { a: 'مِمَّا', t: 'mimma', p: 'P+REL', en: 'of what', ur: 'جو کچھ' },
    { a: 'تُنبِتُ', t: 'tunbitu', r: 'ن ب ت', p: 'V', en: 'grows from', ur: 'اگاتی ہے', g: 'verb', f: { form: 'IV' } },
    { a: 'الْأَرْضُ', t: 'al-ardu', r: 'أ ر ض', p: 'N', en: 'the earth', ur: 'زمین', g: 'subj' },
  ], rel: [{ from: 5, to: 6, l: 'نفی + فعل' }, { from: 10, to: 12, l: 'فعل + مفعول به' }] },

  62: { tr: { en: 'Indeed, those who believed and those who were Jews or Christians or Sabeans - those who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord.', ur: 'بے شک جو مسلمان ہیں اور یہودی اور عیسائی اور صابی جو اللہ اور قیامت پر ایمان لائے اور نیک عمل کیے ان کے لیے ان کے رب کے پاس اجر ہے' }, w: [
    { a: 'إِنَّ', t: 'inna', p: 'EMPH', en: 'Indeed', ur: 'بے شک' },
    { a: 'الَّذِينَ', t: 'alladhina', p: 'REL', en: 'those who', ur: 'جو لوگ', g: 'ism-inna' },
    { a: 'آمَنُوا', t: 'amanu', r: 'أ م ن', p: 'V', en: 'believed', ur: 'ایمان لائے', g: 'silah', f: { form: 'IV' } },
    { a: 'وَالَّذِينَ', t: 'walladhina', p: 'CONJ+REL', en: 'and those who', ur: 'اور جو' },
    { a: 'هَادُوا', t: 'hadu', r: 'ه و د', p: 'V', en: 'were Jews', ur: 'یہودی ہوئے', g: 'silah' },
    { a: 'وَالنَّصَارَىٰ', t: 'wan-nasara', r: 'ن ص ر', p: 'CONJ+N', en: 'and the Christians', ur: 'اور عیسائی' },
    { a: 'وَالصَّابِئِينَ', t: 'was-sabi-ina', p: 'CONJ+N', en: 'and the Sabeans', ur: 'اور صابی' },
    { a: 'مَنْ', t: 'man', p: 'COND', en: 'whoever', ur: 'جو' },
    { a: 'آمَنَ', t: 'amana', r: 'أ م ن', p: 'V', en: 'believed', ur: 'ایمان لایا', g: 'verb', f: { form: 'IV' } },
    { a: 'بِاللَّهِ', t: 'billahi', p: 'P+PN', en: 'in Allah', ur: 'اللہ پر' },
    { a: 'وَالْيَوْمِ', t: 'wal-yawmi', r: 'ي و م', p: 'CONJ+N', en: 'and the Day', ur: 'اور دن' },
    { a: 'الْآخِرِ', t: 'al-akhiri', r: 'أ خ ر', p: 'ADJ', en: 'the Last', ur: 'آخرت' },
    { a: 'وَعَمِلَ', t: 'wa-amila', r: 'ع م ل', p: 'CONJ+V', en: 'and did', ur: 'اور عمل کیے', g: 'verb' },
    { a: 'صَالِحًا', t: 'salihan', r: 'ص ل ح', p: 'ADJ', en: 'righteousness', ur: 'نیک', g: 'obj' },
    { a: 'فَلَهُمْ', t: 'fa-lahum', p: 'CONJ+P+PRON', en: 'then for them', ur: 'ان کے لیے' },
    { a: 'أَجْرُهُمْ', t: 'ajruhum', r: 'أ ج ر', p: 'N+PRON', en: 'their reward', ur: 'ان کا اجر', g: 'mubtada' },
    { a: 'عِندَ', t: 'inda', p: 'LOC', en: 'with', ur: 'کے پاس' },
    { a: 'رَبِّهِمْ', t: 'rabbihim', r: 'ر ب ب', p: 'N+PRON', en: 'their Lord', ur: 'ان کے رب' },
  ], rel: [{ from: 1, to: 2, l: 'إنّ + اسم' }, { from: 13, to: 14, l: 'فعل + مفعول به' }] },

  63: { tr: { en: 'And when We took your covenant and raised over you the mount, saying, "Hold firmly to what We have given you and remember what is in it."', ur: 'اور جب ہم نے تم سے عہد لیا اور تم پر طور پہاڑ اٹھایا کہ جو ہم نے دیا ہے اسے مضبوطی سے پکڑو اور جو اس میں ہے یاد رکھو' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'أَخَذْنَا', t: 'akhadhna', r: 'أ خ ذ', p: 'V', en: 'We took', ur: 'ہم نے لیا', g: 'verb' },
    { a: 'مِيثَاقَكُمْ', t: 'mithaqakum', r: 'و ث ق', p: 'N+PRON', en: 'your covenant', ur: 'تمہارا عہد', g: 'obj' },
    { a: 'وَرَفَعْنَا', t: 'wa-rafa\'na', r: 'ر ف ع', p: 'CONJ+V', en: 'and raised', ur: 'اور اٹھایا', g: 'verb' },
    { a: 'فَوْقَكُمُ', t: 'fawqakum', p: 'LOC+PRON', en: 'over you', ur: 'تمہارے اوپر' },
    { a: 'الطُّورَ', t: 'at-Tura', r: 'ط و ر', p: 'N', en: 'the Mount', ur: 'طور', g: 'obj' },
    { a: 'خُذُوا', t: 'khudhu', r: 'أ خ ذ', p: 'V', en: 'Take', ur: 'پکڑو', g: 'verb' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'what', ur: 'جو' },
    { a: 'آتَيْنَاكُم', t: 'ataynakum', r: 'أ ت ي', p: 'V+PRON', en: 'We gave you', ur: 'ہم نے تمہیں دیا', g: 'verb' },
    { a: 'بِقُوَّةٍ', t: 'bi-quwwatin', r: 'ق و ي', p: 'P+N', en: 'with firmness', ur: 'مضبوطی سے' },
    { a: 'وَاذْكُرُوا', t: 'wadhkuru', r: 'ذ ك ر', p: 'CONJ+V', en: 'and remember', ur: 'اور یاد کرو', g: 'verb' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'what', ur: 'جو' },
    { a: 'فِيهِ', t: 'fihi', p: 'P+PRON', en: 'is in it', ur: 'اس میں ہے' },
    { a: 'لَعَلَّكُمْ', t: 'la\'allakum', p: 'EMPH+PRON', en: 'that you', ur: 'تاکہ تم' },
    { a: 'تَتَّقُونَ', t: 'tattaquna', r: 'و ق ي', p: 'V', en: 'become righteous', ur: 'پرہیزگار بنو', g: 'verb', f: { form: 'VIII' } },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }, { from: 4, to: 6, l: 'فعل + مفعول به' }] },

  64: { tr: { en: 'Then you turned away after that. And if not for the favor of Allah upon you and His mercy, you would have been among the losers.', ur: 'پھر اس کے بعد تم پھر گئے اگر اللہ کا فضل اور رحمت نہ ہوتی تو تم نقصان اٹھانے والوں میں سے ہوتے' }, w: [
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'تَوَلَّيْتُم', t: 'tawallaytum', r: 'و ل ي', p: 'V', en: 'you turned away', ur: 'تم پھر گئے', g: 'verb', f: { form: 'V' } },
    { a: 'مِّن', t: 'min', p: 'P', en: 'after', ur: 'کے بعد' },
    { a: 'بَعْدِ', t: 'ba\'di', p: 'N', en: 'after', ur: 'بعد' },
    { a: 'ذَٰلِكَ', t: 'dhalika', p: 'DEM', en: 'that', ur: 'اس' },
    { a: 'فَلَوْلَا', t: 'fa-lawla', p: 'CONJ+COND', en: 'And if not for', ur: 'اگر نہ ہوتا' },
    { a: 'فَضْلُ', t: 'fadlu', r: 'ف ض ل', p: 'N', en: 'the favor of', ur: 'فضل', g: 'mubtada' },
    { a: 'اللَّهِ', t: 'Allahi', p: 'PN', en: 'Allah', ur: 'اللہ کا' },
    { a: 'عَلَيْكُمْ', t: 'alaykum', p: 'P+PRON', en: 'upon you', ur: 'تم پر' },
    { a: 'وَرَحْمَتُهُ', t: 'wa-rahmatuhu', r: 'ر ح م', p: 'CONJ+N+PRON', en: 'and His mercy', ur: 'اور اس کی رحمت' },
    { a: 'لَكُنتُم', t: 'la-kuntum', r: 'ك و ن', p: 'EMPH+V', en: 'you would have been', ur: 'تم ہوتے' },
    { a: 'مِّنَ', t: 'mina', p: 'P', en: 'among', ur: 'سے' },
    { a: 'الْخَاسِرِينَ', t: 'al-khasirina', r: 'خ س ر', p: 'N', en: 'the losers', ur: 'نقصان اٹھانے والوں', g: 'khabar-kana' },
  ], rel: [{ from: 7, to: 8, l: 'مضاف + مضاف اليه' }] },

  65: { tr: { en: 'And you had already known about those who transgressed among you concerning the Sabbath, and We said to them, "Be apes, despised."', ur: 'اور تم جانتے ہو ان لوگوں کو جنہوں نے ہفتے کے دن زیادتی کی تو ہم نے کہا بندر بن جاؤ ذلیل و خوار' }, w: [
    { a: 'وَلَقَدْ', t: 'wa-laqad', p: 'CONJ+EMPH', en: 'And certainly', ur: 'اور بے شک' },
    { a: 'عَلِمْتُمُ', t: 'alimtum', r: 'ع ل م', p: 'V', en: 'you knew', ur: 'تم جانتے ہو', g: 'verb' },
    { a: 'الَّذِينَ', t: 'alladhina', p: 'REL', en: 'those who', ur: 'جنہوں نے' },
    { a: 'اعْتَدَوْا', t: 'i\'tadaw', r: 'ع د و', p: 'V', en: 'transgressed', ur: 'زیادتی کی', g: 'silah', f: { form: 'VIII' } },
    { a: 'مِنكُمْ', t: 'minkum', p: 'P+PRON', en: 'among you', ur: 'تم میں سے' },
    { a: 'فِي', t: 'fi', p: 'P', en: 'concerning', ur: 'میں' },
    { a: 'السَّبْتِ', t: 'as-sabti', r: 'س ب ت', p: 'N', en: 'the Sabbath', ur: 'ہفتے' },
    { a: 'فَقُلْنَا', t: 'fa-qulna', r: 'ق و ل', p: 'CONJ+V', en: 'so We said', ur: 'تو ہم نے کہا', g: 'verb' },
    { a: 'لَهُمْ', t: 'lahum', p: 'P+PRON', en: 'to them', ur: 'ان سے' },
    { a: 'كُونُوا', t: 'kunu', r: 'ك و ن', p: 'V', en: 'Be', ur: 'بن جاؤ', g: 'verb' },
    { a: 'قِرَدَةً', t: 'qiradatan', r: 'ق ر د', p: 'N', en: 'apes', ur: 'بندر', g: 'khabar-kana' },
    { a: 'خَاسِئِينَ', t: 'khasi-ina', r: 'خ س أ', p: 'ADJ', en: 'despised', ur: 'ذلیل', g: 'sifah' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + مفعول به' }, { from: 10, to: 11, l: 'كان + خبر' }] },

  66: { tr: { en: 'And We made it a deterrent punishment for those who were present and those who succeeded, and a lesson for those who fear Allah.', ur: 'تو ہم نے اسے اس وقت کے اور بعد کے لوگوں کے لیے عبرت بنا دیا اور پرہیزگاروں کے لیے نصیحت' }, w: [
    { a: 'فَجَعَلْنَاهَا', t: 'fa-ja\'alnaha', r: 'ج ع ل', p: 'CONJ+V+PRON', en: 'So We made it', ur: 'تو ہم نے اسے بنایا', g: 'verb' },
    { a: 'نَكَالًا', t: 'nakalan', r: 'ن ك ل', p: 'N', en: 'a deterrent', ur: 'عبرت', g: 'obj' },
    { a: 'لِّمَا', t: 'lima', p: 'P+REL', en: 'for those', ur: 'جو کچھ' },
    { a: 'بَيْنَ', t: 'bayna', p: 'LOC', en: 'before', ur: 'سامنے' },
    { a: 'يَدَيْهَا', t: 'yadayha', p: 'N+PRON', en: 'it', ur: 'اس کے' },
    { a: 'وَمَا', t: 'wa-ma', p: 'CONJ+REL', en: 'and what', ur: 'اور جو' },
    { a: 'خَلْفَهَا', t: 'khalfaha', r: 'خ ل ف', p: 'LOC+PRON', en: 'after it', ur: 'اس کے بعد' },
    { a: 'وَمَوْعِظَةً', t: 'wa-maw\'idhatan', r: 'و ع ظ', p: 'CONJ+N', en: 'and a lesson', ur: 'اور نصیحت' },
    { a: 'لِّلْمُتَّقِينَ', t: 'lil-muttaqina', r: 'و ق ي', p: 'P+N', en: 'for the God-fearing', ur: 'پرہیزگاروں کے لیے' },
  ], rel: [{ from: 1, to: 2, l: 'فعل + مفعول به' }] },

  67: { tr: { en: 'And when Moses said to his people, "Indeed, Allah commands you to slaughter a cow."', ur: 'اور جب موسیٰ نے اپنی قوم سے کہا بے شک اللہ تمہیں حکم دیتا ہے کہ ایک گائے ذبح کرو' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'قَالَ', t: 'qala', r: 'ق و ل', p: 'V', en: 'said', ur: 'کہا', g: 'verb' },
    { a: 'مُوسَىٰ', t: 'Musa', p: 'PN', en: 'Moses', ur: 'موسیٰ نے', g: 'subj' },
    { a: 'لِقَوْمِهِ', t: 'li-qawmihi', r: 'ق و م', p: 'P+N+PRON', en: 'to his people', ur: 'اپنی قوم سے' },
    { a: 'إِنَّ', t: 'inna', p: 'EMPH', en: 'Indeed', ur: 'بے شک' },
    { a: 'اللَّهَ', t: 'Allaha', p: 'PN', en: 'Allah', ur: 'اللہ', g: 'ism-inna' },
    { a: 'يَأْمُرُكُمْ', t: 'ya-murukum', r: 'أ م ر', p: 'V+PRON', en: 'commands you', ur: 'تمہیں حکم دیتا ہے', g: 'khabar-inna' },
    { a: 'أَن', t: 'an', p: 'EMPH', en: 'to', ur: 'کہ' },
    { a: 'تَذْبَحُوا', t: 'tadhbahu', r: 'ذ ب ح', p: 'V', en: 'slaughter', ur: 'ذبح کرو', g: 'verb' },
    { a: 'بَقَرَةً', t: 'baqaratan', r: 'ب ق ر', p: 'N', en: 'a cow', ur: 'ایک گائے', g: 'obj' },
  ], rel: [{ from: 2, to: 3, l: 'فعل + فاعل' }, { from: 9, to: 10, l: 'فعل + مفعول به' }] },

  68: { tr: { en: 'They said, "Call upon your Lord to make clear to us what it is." He said, "He says it is a cow neither old nor young but median between that."', ur: 'انہوں نے کہا اپنے رب سے دعا کرو بتائے وہ کیسی ہے کہا کہ وہ نہ بوڑھی ہے نہ بچھیا درمیانی ہے' }, w: [
    { a: 'قَالُوا', t: 'qalu', r: 'ق و ل', p: 'V', en: 'They said', ur: 'انہوں نے کہا', g: 'verb' },
    { a: 'ادْعُ', t: 'ud\'u', r: 'د ع و', p: 'V', en: 'Call upon', ur: 'دعا کرو', g: 'verb' },
    { a: 'لَنَا', t: 'lana', p: 'P+PRON', en: 'for us', ur: 'ہمارے لیے' },
    { a: 'رَبَّكَ', t: 'rabbaka', r: 'ر ب ب', p: 'N+PRON', en: 'your Lord', ur: 'اپنے رب سے', g: 'obj' },
    { a: 'يُبَيِّن', t: 'yubayyina', r: 'ب ي ن', p: 'V', en: 'to make clear', ur: 'بتائے', g: 'verb', f: { form: 'II' } },
    { a: 'لَّنَا', t: 'lana', p: 'P+PRON', en: 'to us', ur: 'ہمیں' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'what', ur: 'کیا' },
    { a: 'هِيَ', t: 'hiya', p: 'PRON', en: 'it is', ur: 'وہ ہے' },
    { a: 'قَالَ', t: 'qala', r: 'ق و ل', p: 'V', en: 'He said', ur: 'کہا', g: 'verb' },
    { a: 'إِنَّهُ', t: 'innahu', p: 'EMPH+PRON', en: 'Indeed He', ur: 'بے شک وہ' },
    { a: 'يَقُولُ', t: 'yaqulu', r: 'ق و ل', p: 'V', en: 'says', ur: 'فرماتا ہے', g: 'khabar-inna' },
    { a: 'إِنَّهَا', t: 'innaha', p: 'EMPH+PRON', en: 'Indeed it is', ur: 'بے شک وہ' },
    { a: 'بَقَرَةٌ', t: 'baqaratun', r: 'ب ق ر', p: 'N', en: 'a cow', ur: 'گائے ہے', g: 'khabar-inna' },
    { a: 'لَّا', t: 'la', p: 'NEG', en: 'neither', ur: 'نہ' },
    { a: 'فَارِضٌ', t: 'faridun', r: 'ف ر ض', p: 'ADJ', en: 'old', ur: 'بوڑھی', g: 'sifah' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'nor', ur: 'اور نہ' },
    { a: 'بِكْرٌ', t: 'bikrun', p: 'N', en: 'young', ur: 'بچھیا' },
    { a: 'عَوَانٌ', t: 'awanun', p: 'ADJ', en: 'median', ur: 'درمیانی', g: 'sifah' },
    { a: 'بَيْنَ', t: 'bayna', p: 'LOC', en: 'between', ur: 'درمیان' },
    { a: 'ذَٰلِكَ', t: 'dhalika', p: 'DEM', en: 'that', ur: 'اس کے' },
  ], rel: [{ from: 2, to: 4, l: 'فعل + مفعول به' }, { from: 12, to: 13, l: 'إنّ + خبر' }] },

  69: { tr: { en: 'They said, "Call upon your Lord to show us what is her color." He said, "He says it is a yellow cow, bright in color, pleasing to the observers."', ur: 'کہا اپنے رب سے دعا کرو بتائے اس کا رنگ کیا ہے کہا وہ زرد رنگ کی گائے ہے خوب چمکیلے رنگ کی دیکھنے والوں کو خوش کرتی ہے' }, w: [
    { a: 'قَالُوا', t: 'qalu', r: 'ق و ل', p: 'V', en: 'They said', ur: 'کہا', g: 'verb' },
    { a: 'ادْعُ', t: 'ud\'u', r: 'د ع و', p: 'V', en: 'Call upon', ur: 'دعا کرو', g: 'verb' },
    { a: 'لَنَا', t: 'lana', p: 'P+PRON', en: 'for us', ur: 'ہمارے لیے' },
    { a: 'رَبَّكَ', t: 'rabbaka', r: 'ر ب ب', p: 'N+PRON', en: 'your Lord', ur: 'اپنے رب سے', g: 'obj' },
    { a: 'يُبَيِّن', t: 'yubayyina', r: 'ب ي ن', p: 'V', en: 'to show', ur: 'بتائے', g: 'verb', f: { form: 'II' } },
    { a: 'لَّنَا', t: 'lana', p: 'P+PRON', en: 'to us', ur: 'ہمیں' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'what', ur: 'کیا' },
    { a: 'لَوْنُهَا', t: 'lawnuha', r: 'ل و ن', p: 'N+PRON', en: 'its color', ur: 'اس کا رنگ', g: 'subj' },
    { a: 'قَالَ', t: 'qala', r: 'ق و ل', p: 'V', en: 'He said', ur: 'کہا', g: 'verb' },
    { a: 'إِنَّهُ', t: 'innahu', p: 'EMPH+PRON', en: 'Indeed He', ur: 'وہ' },
    { a: 'يَقُولُ', t: 'yaqulu', r: 'ق و ل', p: 'V', en: 'says', ur: 'فرماتا ہے' },
    { a: 'إِنَّهَا', t: 'innaha', p: 'EMPH+PRON', en: 'Indeed it', ur: 'وہ' },
    { a: 'بَقَرَةٌ', t: 'baqaratun', r: 'ب ق ر', p: 'N', en: 'a cow', ur: 'گائے ہے', g: 'khabar-inna' },
    { a: 'صَفْرَاءُ', t: 'safra-u', r: 'ص ف ر', p: 'ADJ', en: 'yellow', ur: 'زرد', g: 'sifah' },
    { a: 'فَاقِعٌ', t: 'faqi\'un', r: 'ف ق ع', p: 'ADJ', en: 'bright', ur: 'خوب چمکیلا' },
    { a: 'لَّوْنُهَا', t: 'lawnuha', r: 'ل و ن', p: 'N+PRON', en: 'its color', ur: 'اس کا رنگ', g: 'subj' },
    { a: 'تَسُرُّ', t: 'tasurru', r: 'س ر ر', p: 'V', en: 'pleasing', ur: 'خوش کرتی ہے', g: 'verb' },
    { a: 'النَّاظِرِينَ', t: 'an-nadhirina', r: 'ن ظ ر', p: 'N', en: 'the observers', ur: 'دیکھنے والوں کو', g: 'obj' },
  ], rel: [{ from: 12, to: 13, l: 'إنّ + خبر' }, { from: 17, to: 18, l: 'فعل + مفعول به' }] },

  70: { tr: { en: 'They said, "Call upon your Lord to make clear to us what it is. Indeed, the cows look alike to us. And indeed we, if Allah wills, will be guided."', ur: 'کہا اپنے رب سے دعا کرو بتائے وہ کیسی ہے گائیں ہم پر مشتبہ ہو گئیں اور ہم ان شاء اللہ ہدایت پا جائیں گے' }, w: [
    { a: 'قَالُوا', t: 'qalu', r: 'ق و ل', p: 'V', en: 'They said', ur: 'کہا', g: 'verb' },
    { a: 'ادْعُ', t: 'ud\'u', r: 'د ع و', p: 'V', en: 'Call upon', ur: 'دعا کرو', g: 'verb' },
    { a: 'لَنَا', t: 'lana', p: 'P+PRON', en: 'for us', ur: 'ہمارے لیے' },
    { a: 'رَبَّكَ', t: 'rabbaka', r: 'ر ب ب', p: 'N+PRON', en: 'your Lord', ur: 'اپنے رب سے' },
    { a: 'يُبَيِّن', t: 'yubayyina', r: 'ب ي ن', p: 'V', en: 'to make clear', ur: 'بتائے', g: 'verb', f: { form: 'II' } },
    { a: 'لَّنَا', t: 'lana', p: 'P+PRON', en: 'to us', ur: 'ہمیں' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'what', ur: 'کیا' },
    { a: 'هِيَ', t: 'hiya', p: 'PRON', en: 'it is', ur: 'وہ ہے' },
    { a: 'إِنَّ', t: 'inna', p: 'EMPH', en: 'Indeed', ur: 'بے شک' },
    { a: 'الْبَقَرَ', t: 'al-baqara', r: 'ب ق ر', p: 'N', en: 'the cows', ur: 'گائیں', g: 'ism-inna' },
    { a: 'تَشَابَهَ', t: 'tashabaha', r: 'ش ب ه', p: 'V', en: 'look alike', ur: 'مشتبہ ہیں', g: 'khabar-inna', f: { form: 'VI' } },
    { a: 'عَلَيْنَا', t: 'alayna', p: 'P+PRON', en: 'to us', ur: 'ہم پر' },
    { a: 'وَإِنَّا', t: 'wa-inna', p: 'CONJ+EMPH+PRON', en: 'And indeed we', ur: 'اور ہم' },
    { a: 'إِن', t: 'in', p: 'COND', en: 'if', ur: 'اگر' },
    { a: 'شَاءَ', t: 'sha-a', r: 'ش ي أ', p: 'V', en: 'wills', ur: 'چاہے', g: 'verb' },
    { a: 'اللَّهُ', t: 'Allahu', p: 'PN', en: 'Allah', ur: 'اللہ', g: 'subj' },
    { a: 'لَمُهْتَدُونَ', t: 'la-muhtaduna', r: 'ه د ي', p: 'N', en: 'will be guided', ur: 'ہدایت پائیں گے', g: 'khabar-inna', f: { form: 'VIII' } },
  ], rel: [{ from: 9, to: 10, l: 'إنّ + اسم' }, { from: 15, to: 16, l: 'فعل + فاعل' }] },
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

for (const [ayahNum, data] of Object.entries(AYAH_DATA)) {
  const num = parseInt(ayahNum);
  const words = data.w.map((w, i) => formatWord(num, w, i + 1));
  const rels = (data.rel || []).map(r => `{ from: ${r.from}, to: ${r.to}, label: '${r.l}' }`);
  const replacement = `  ${num}: { text: '${content.match(new RegExp(`${num}: \\{ text: '([^']+)'`))?.[1] || ''}', translation: { en: '${data.tr.en.replace(/'/g, "\\'")}', ur: '${data.tr.ur.replace(/'/g, "\\'")}' }, words: [${words.join(', ')}], structure: { relationships: [${rels.join(', ')}] } },`;

  const existingRegex = new RegExp(`  ${num}: \\{ text: '[^']+', words: \\[\\] \\},?`);
  if (existingRegex.test(content)) {
    content = content.replace(existingRegex, replacement);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated ayahs 51-70 with word data');
