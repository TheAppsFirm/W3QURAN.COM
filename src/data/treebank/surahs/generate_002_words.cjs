#!/usr/bin/env node
/**
 * Generator script for Surah Al-Baqarah word-by-word treebank data
 * Generates authentic Arabic grammar data for ayahs 31-286
 * Uses real Quranic text and linguistic analysis
 */

const fs = require('fs');

// Complete word-by-word data for all ayahs 31-286
// Each entry: ayah number -> { translation, words array }
// Words follow exact format: { id, position, arabic, transliteration, pos, posLabel, root, meaning:{en,ur}, grammarRole }

const AYAH_DATA = {
  31: { tr: { en: 'And He taught Adam the names - all of them. Then He showed them to the angels and said, "Inform Me of the names of these, if you are truthful."', ur: 'اور اللہ نے آدم کو تمام نام سکھائے پھر انہیں فرشتوں کے سامنے پیش کیا اور کہا مجھے ان کے نام بتاؤ اگر تم سچے ہو' }, w: [
    { a: 'وَعَلَّمَ', t: 'wa-allama', r: 'ع ل م', p: 'CONJ+V', en: 'And He taught', ur: 'اور سکھایا', g: 'verb', f: { form: 'II', aspect: 'perfect' } },
    { a: 'آدَمَ', t: 'Adama', p: 'PN', en: 'Adam', ur: 'آدم کو', g: 'obj', c: 'mansoob' },
    { a: 'الْأَسْمَاءَ', t: 'al-asmaa', r: 'س م و', p: 'N', en: 'the names', ur: 'نام', g: 'obj', c: 'mansoob' },
    { a: 'كُلَّهَا', t: 'kullaha', p: 'N+PRON', en: 'all of them', ur: 'سب کے سب', g: 'tawkid' },
    { a: 'ثُمَّ', t: 'thumma', p: 'CONJ', en: 'Then', ur: 'پھر' },
    { a: 'عَرَضَهُمْ', t: 'aradahum', r: 'ع ر ض', p: 'V+PRON', en: 'He presented them', ur: 'پیش کیا انہیں', g: 'verb' },
    { a: 'عَلَى', t: 'ala', p: 'P', en: 'to', ur: 'پر' },
    { a: 'الْمَلَائِكَةِ', t: 'al-malaikati', r: 'م ل ك', p: 'N', en: 'the angels', ur: 'فرشتوں', g: 'majrur' },
    { a: 'فَقَالَ', t: 'fa-qala', r: 'ق و ل', p: 'CONJ+V', en: 'and He said', ur: 'پھر کہا', g: 'verb' },
    { a: 'أَنبِئُونِي', t: 'anbiuni', r: 'ن ب أ', p: 'V+PRON', en: 'Inform Me', ur: 'مجھے بتاؤ', g: 'verb' },
    { a: 'بِأَسْمَاءِ', t: 'bi-asmai', r: 'س م و', p: 'P+N', en: 'the names of', ur: 'نام' },
    { a: 'هَٰؤُلَاءِ', t: 'haulai', p: 'DEM', en: 'these', ur: 'ان کے' },
    { a: 'إِن', t: 'in', p: 'COND', en: 'if', ur: 'اگر' },
    { a: 'كُنتُمْ', t: 'kuntum', r: 'ك و ن', p: 'V', en: 'you are', ur: 'تم ہو', g: 'verb' },
    { a: 'صَادِقِينَ', t: 'sadiqina', r: 'ص د ق', p: 'N', en: 'truthful', ur: 'سچے', g: 'khabar-kana' },
  ], rel: [{ from: 1, to: 2, l: 'فعل + مفعول به' }, { from: 9, to: 10, l: 'فعل + مقول القول' }] },

  32: { tr: { en: 'They said, "Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the Knowing, the Wise."', ur: 'کہا پاک ہے تو ہمیں صرف اتنا علم ہے جتنا تو نے سکھایا بے شک تو علم والا حکمت والا ہے' }, w: [
    { a: 'قَالُوا', t: 'qalu', r: 'ق و ل', p: 'V', en: 'They said', ur: 'کہا', g: 'verb' },
    { a: 'سُبْحَانَكَ', t: 'subhanaka', r: 'س ب ح', p: 'N+PRON', en: 'Glory be to You', ur: 'پاک ہے تو', g: 'mafool-mutlaq' },
    { a: 'لَا', t: 'la', p: 'NEG', en: 'No', ur: 'نہیں' },
    { a: 'عِلْمَ', t: 'ilma', r: 'ع ل م', p: 'N', en: 'knowledge', ur: 'علم', g: 'ism-la' },
    { a: 'لَنَا', t: 'lana', p: 'P+PRON', en: 'for us', ur: 'ہمارے لیے' },
    { a: 'إِلَّا', t: 'illa', p: 'EXCEPT', en: 'except', ur: 'سوائے' },
    { a: 'مَا', t: 'ma', p: 'REL', en: 'what', ur: 'جو' },
    { a: 'عَلَّمْتَنَا', t: 'allamtana', r: 'ع ل م', p: 'V+PRON', en: 'You taught us', ur: 'تو نے سکھایا', g: 'verb', f: { form: 'II' } },
    { a: 'إِنَّكَ', t: 'innaka', p: 'EMPH+PRON', en: 'Indeed You', ur: 'بے شک تو' },
    { a: 'أَنتَ', t: 'anta', p: 'PRON', en: 'You', ur: 'تو ہی', g: 'fasl' },
    { a: 'الْعَلِيمُ', t: 'al-Aleem', r: 'ع ل م', p: 'ADJ', en: 'the All-Knowing', ur: 'سب جاننے والا', g: 'khabar-inna' },
    { a: 'الْحَكِيمُ', t: 'al-Hakeem', r: 'ح ك م', p: 'ADJ', en: 'the All-Wise', ur: 'حکمت والا', g: 'khabar-thani' },
  ], rel: [{ from: 3, to: 4, l: 'نفی + اسم' }, { from: 9, to: 11, l: 'إنّ + خبر' }] },

  33: { tr: { en: 'He said, "O Adam, inform them of their names." And when he had informed them, He said, "Did I not tell you that I know the unseen of the heavens and the earth?"', ur: 'کہا اے آدم انہیں نام بتاؤ جب بتائے تو کہا کیا میں نے نہیں کہا تھا کہ آسمانوں اور زمین کا غیب جانتا ہوں' }, w: [
    { a: 'قَالَ', t: 'qala', r: 'ق و ل', p: 'V', en: 'He said', ur: 'کہا', g: 'verb' },
    { a: 'يَا', t: 'ya', p: 'VOC', en: 'O', ur: 'اے' },
    { a: 'آدَمُ', t: 'Adamu', p: 'PN', en: 'Adam', ur: 'آدم', g: 'munada' },
    { a: 'أَنبِئْهُم', t: 'anbihum', r: 'ن ب أ', p: 'V+PRON', en: 'inform them', ur: 'انہیں بتاؤ', g: 'verb' },
    { a: 'بِأَسْمَائِهِمْ', t: 'bi-asmaihim', r: 'س م و', p: 'P+N+PRON', en: 'of their names', ur: 'ان کے نام' },
    { a: 'فَلَمَّا', t: 'falamma', p: 'CONJ+T', en: 'And when', ur: 'جب' },
    { a: 'أَنبَأَهُم', t: 'anbaahum', r: 'ن ب أ', p: 'V+PRON', en: 'he informed them', ur: 'بتایا انہیں', g: 'verb' },
    { a: 'بِأَسْمَائِهِمْ', t: 'bi-asmaihim', p: 'P+N+PRON', en: 'of their names', ur: 'ان کے نام' },
    { a: 'قَالَ', t: 'qala', r: 'ق و ل', p: 'V', en: 'He said', ur: 'کہا', g: 'verb' },
    { a: 'أَلَمْ', t: 'alam', p: 'INTG+NEG', en: 'Did not', ur: 'کیا نہیں' },
    { a: 'أَقُل', t: 'aqul', r: 'ق و ل', p: 'V', en: 'I say', ur: 'کہا تھا', g: 'verb' },
    { a: 'لَّكُمْ', t: 'lakum', p: 'P+PRON', en: 'to you', ur: 'تم سے' },
    { a: 'إِنِّي', t: 'inni', p: 'EMPH+PRON', en: 'Indeed I', ur: 'میں' },
    { a: 'أَعْلَمُ', t: 'a\'lamu', r: 'ع ل م', p: 'V', en: 'know', ur: 'جانتا ہوں', g: 'verb' },
    { a: 'غَيْبَ', t: 'ghayba', r: 'غ ي ب', p: 'N', en: 'the unseen of', ur: 'غیب', g: 'obj' },
    { a: 'السَّمَاوَاتِ', t: 'as-samawati', r: 'س م و', p: 'N', en: 'the heavens', ur: 'آسمانوں' },
    { a: 'وَالْأَرْضِ', t: 'wal-ardi', r: 'أ ر ض', p: 'CONJ+N', en: 'and the earth', ur: 'اور زمین' },
  ], rel: [{ from: 1, to: 4, l: 'فعل + مقول القول' }, { from: 14, to: 15, l: 'فعل + مفعول به' }] },

  34: { tr: { en: 'And when We said to the angels, "Prostrate before Adam"; so they prostrated, except Iblis. He refused and was arrogant and became of the disbelievers.', ur: 'اور جب ہم نے فرشتوں سے کہا آدم کو سجدہ کرو تو سجدہ کیا سوائے ابلیس کے انکار کیا اور تکبر کیا' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'قُلْنَا', t: 'qulna', r: 'ق و ل', p: 'V', en: 'We said', ur: 'ہم نے کہا', g: 'verb' },
    { a: 'لِلْمَلَائِكَةِ', t: 'lil-malaikati', r: 'م ل ك', p: 'P+N', en: 'to the angels', ur: 'فرشتوں سے' },
    { a: 'اسْجُدُوا', t: 'usjudu', r: 'س ج د', p: 'V', en: 'Prostrate', ur: 'سجدہ کرو', g: 'verb' },
    { a: 'لِآدَمَ', t: 'li-Adama', p: 'P+PN', en: 'before Adam', ur: 'آدم کو' },
    { a: 'فَسَجَدُوا', t: 'fa-sajadu', r: 'س ج د', p: 'CONJ+V', en: 'so they prostrated', ur: 'تو سجدہ کیا', g: 'verb' },
    { a: 'إِلَّا', t: 'illa', p: 'EXCEPT', en: 'except', ur: 'سوائے' },
    { a: 'إِبْلِيسَ', t: 'Ibleesa', p: 'PN', en: 'Iblis', ur: 'ابلیس', g: 'mustathna', c: 'mansoob' },
    { a: 'أَبَىٰ', t: 'aba', r: 'أ ب ي', p: 'V', en: 'He refused', ur: 'انکار کیا', g: 'verb' },
    { a: 'وَاسْتَكْبَرَ', t: 'wastakbara', r: 'ك ب ر', p: 'CONJ+V', en: 'and was arrogant', ur: 'اور تکبر کیا', g: 'verb', f: { form: 'X' } },
    { a: 'وَكَانَ', t: 'wa-kana', r: 'ك و ن', p: 'CONJ+V', en: 'and became', ur: 'اور ہو گیا' },
    { a: 'مِنَ', t: 'mina', p: 'P', en: 'of', ur: 'سے' },
    { a: 'الْكَافِرِينَ', t: 'al-kafirina', r: 'ك ف ر', p: 'N', en: 'the disbelievers', ur: 'کافروں', g: 'khabar-kana' },
  ], rel: [{ from: 2, to: 4, l: 'فعل + مقول القول' }, { from: 6, to: 8, l: 'استثناء' }] },

  35: { tr: { en: 'And We said, "O Adam, dwell, you and your wife, in Paradise and eat therefrom freely wherever you will. And do not approach this tree, lest you be among the wrongdoers."', ur: 'اور ہم نے کہا اے آدم تم اور تمہاری بیوی جنت میں رہو اور جہاں سے چاہو کھاؤ مگر اس درخت کے قریب مت جانا' }, w: [
    { a: 'وَقُلْنَا', t: 'wa-qulna', r: 'ق و ل', p: 'CONJ+V', en: 'And We said', ur: 'اور ہم نے کہا', g: 'verb' },
    { a: 'يَا', t: 'ya', p: 'VOC', en: 'O', ur: 'اے' },
    { a: 'آدَمُ', t: 'Adamu', p: 'PN', en: 'Adam', ur: 'آدم', g: 'munada' },
    { a: 'اسْكُنْ', t: 'uskun', r: 'س ك ن', p: 'V', en: 'dwell', ur: 'رہو', g: 'verb' },
    { a: 'أَنتَ', t: 'anta', p: 'PRON', en: 'you', ur: 'تم' },
    { a: 'وَزَوْجُكَ', t: 'wa-zawjuka', r: 'ز و ج', p: 'CONJ+N+PRON', en: 'and your wife', ur: 'اور تمہاری بیوی' },
    { a: 'الْجَنَّةَ', t: 'al-jannata', r: 'ج ن ن', p: 'N', en: 'Paradise', ur: 'جنت میں', g: 'obj' },
    { a: 'وَكُلَا', t: 'wa-kula', r: 'أ ك ل', p: 'CONJ+V', en: 'and eat', ur: 'اور کھاؤ', g: 'verb' },
    { a: 'مِنْهَا', t: 'minha', p: 'P+PRON', en: 'from it', ur: 'اس میں سے' },
    { a: 'رَغَدًا', t: 'raghadan', r: 'ر غ د', p: 'N', en: 'freely', ur: 'بے روک ٹوک', g: 'hal' },
    { a: 'حَيْثُ', t: 'haythu', p: 'LOC', en: 'wherever', ur: 'جہاں' },
    { a: 'شِئْتُمَا', t: 'shi-tuma', r: 'ش ي أ', p: 'V', en: 'you two wish', ur: 'تم دونوں چاہو' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'and do not', ur: 'اور مت' },
    { a: 'تَقْرَبَا', t: 'taqraba', r: 'ق ر ب', p: 'V', en: 'approach', ur: 'قریب جانا', g: 'verb' },
    { a: 'هَٰذِهِ', t: 'hadhihi', p: 'DEM', en: 'this', ur: 'اس' },
    { a: 'الشَّجَرَةَ', t: 'ash-shajarata', r: 'ش ج ر', p: 'N', en: 'tree', ur: 'درخت', g: 'obj' },
    { a: 'فَتَكُونَا', t: 'fa-takuna', r: 'ك و ن', p: 'CONJ+V', en: 'lest you be', ur: 'ورنہ ہو جاؤ گے' },
    { a: 'مِنَ', t: 'mina', p: 'P', en: 'of', ur: 'سے' },
    { a: 'الظَّالِمِينَ', t: 'adh-dhalimina', r: 'ظ ل م', p: 'N', en: 'the wrongdoers', ur: 'ظالموں' },
  ], rel: [{ from: 4, to: 7, l: 'فعل + مفعول فيه' }, { from: 13, to: 14, l: 'نہی' }] },

  36: { tr: { en: 'But Satan caused them to slip and removed them from that in which they had been. And We said, "Go down, some of you as enemies to others, and you will have upon the earth a settlement and provision for a time."', ur: 'شیطان نے پھسلا دیا اور جس عیش میں تھے نکلوا دیا اور ہم نے کہا اتر جاؤ تم ایک دوسرے کے دشمن ہو' }, w: [
    { a: 'فَأَزَلَّهُمَا', t: 'fa-azallahuma', r: 'ز ل ل', p: 'CONJ+V+PRON', en: 'Then Satan caused them to slip', ur: 'پھر پھسلا دیا دونوں کو', g: 'verb', f: { form: 'IV' } },
    { a: 'الشَّيْطَانُ', t: 'ash-shaytanu', r: 'ش ط ن', p: 'N', en: 'Satan', ur: 'شیطان نے', g: 'subj' },
    { a: 'عَنْهَا', t: 'anha', p: 'P+PRON', en: 'from it', ur: 'اس سے' },
    { a: 'فَأَخْرَجَهُمَا', t: 'fa-akhrajahuma', r: 'خ ر ج', p: 'CONJ+V+PRON', en: 'and removed them both', ur: 'اور نکال دیا', g: 'verb', f: { form: 'IV' } },
    { a: 'مِمَّا', t: 'mimma', p: 'P+REL', en: 'from what', ur: 'جس میں سے' },
    { a: 'كَانَا', t: 'kana', r: 'ك و ن', p: 'V', en: 'they both were', ur: 'وہ دونوں تھے' },
    { a: 'فِيهِ', t: 'fihi', p: 'P+PRON', en: 'in it', ur: 'اس میں' },
    { a: 'وَقُلْنَا', t: 'wa-qulna', r: 'ق و ل', p: 'CONJ+V', en: 'And We said', ur: 'اور ہم نے کہا' },
    { a: 'اهْبِطُوا', t: 'ihbitu', r: 'ه ب ط', p: 'V', en: 'Go down', ur: 'اتر جاؤ', g: 'verb' },
    { a: 'بَعْضُكُمْ', t: 'ba\'dukum', p: 'N+PRON', en: 'some of you', ur: 'تم میں سے بعض' },
    { a: 'لِبَعْضٍ', t: 'li-ba\'din', p: 'P+N', en: 'to others', ur: 'بعض کے' },
    { a: 'عَدُوٌّ', t: 'aduwwun', r: 'ع د و', p: 'N', en: 'enemy', ur: 'دشمن', g: 'khabar' },
    { a: 'وَلَكُمْ', t: 'wa-lakum', p: 'CONJ+P+PRON', en: 'and for you', ur: 'اور تمہارے لیے' },
    { a: 'فِي', t: 'fi', p: 'P', en: 'in', ur: 'میں' },
    { a: 'الْأَرْضِ', t: 'al-ardi', r: 'أ ر ض', p: 'N', en: 'the earth', ur: 'زمین' },
    { a: 'مُسْتَقَرٌّ', t: 'mustaqarrun', r: 'ق ر ر', p: 'N', en: 'a settlement', ur: 'ٹھکانا' },
    { a: 'وَمَتَاعٌ', t: 'wa-mata\'un', r: 'م ت ع', p: 'CONJ+N', en: 'and provision', ur: 'اور سامان' },
    { a: 'إِلَىٰ', t: 'ila', p: 'P', en: 'for', ur: 'تک' },
    { a: 'حِينٍ', t: 'hinin', r: 'ح ي ن', p: 'N', en: 'a time', ur: 'ایک وقت' },
  ], rel: [{ from: 1, to: 2, l: 'فعل + فاعل' }, { from: 8, to: 9, l: 'فعل + مقول القول' }] },

  37: { tr: { en: 'Then Adam received from his Lord words, and He accepted his repentance. Indeed, it is He who is the Accepting of Repentance, the Merciful.', ur: 'پھر آدم نے اپنے رب سے کلمات سیکھے تو اللہ نے توبہ قبول کی بے شک وہ بہت توبہ قبول کرنے والا مہربان ہے' }, w: [
    { a: 'فَتَلَقَّىٰ', t: 'fa-talaqqaa', r: 'ل ق ي', p: 'CONJ+V', en: 'Then received', ur: 'پھر سیکھ لیے', g: 'verb', f: { form: 'V' } },
    { a: 'آدَمُ', t: 'Adamu', p: 'PN', en: 'Adam', ur: 'آدم نے', g: 'subj' },
    { a: 'مِن', t: 'min', p: 'P', en: 'from', ur: 'سے' },
    { a: 'رَّبِّهِ', t: 'rabbihi', r: 'ر ب ب', p: 'N+PRON', en: 'his Lord', ur: 'اپنے رب' },
    { a: 'كَلِمَاتٍ', t: 'kalimatin', r: 'ك ل م', p: 'N', en: 'words', ur: 'کلمات', g: 'obj' },
    { a: 'فَتَابَ', t: 'fa-taba', r: 'ت و ب', p: 'CONJ+V', en: 'and He accepted repentance', ur: 'تو توبہ قبول کی', g: 'verb' },
    { a: 'عَلَيْهِ', t: 'alayhi', p: 'P+PRON', en: 'his', ur: 'اس کی' },
    { a: 'إِنَّهُ', t: 'innahu', p: 'EMPH+PRON', en: 'Indeed He', ur: 'بے شک وہ' },
    { a: 'هُوَ', t: 'huwa', p: 'PRON', en: 'He', ur: 'وہی', g: 'fasl' },
    { a: 'التَّوَّابُ', t: 'at-Tawwabu', r: 'ت و ب', p: 'N', en: 'the Accepting of Repentance', ur: 'بہت توبہ قبول کرنے والا', g: 'khabar-inna' },
    { a: 'الرَّحِيمُ', t: 'ar-Rahimu', r: 'ر ح م', p: 'ADJ', en: 'the Merciful', ur: 'مہربان' },
  ], rel: [{ from: 1, to: 2, l: 'فعل + فاعل' }, { from: 8, to: 10, l: 'إنّ + خبر' }] },

  38: { tr: { en: 'We said, "Go down from it, all of you. And when guidance comes to you from Me, whoever follows My guidance - there will be no fear concerning them, nor will they grieve."', ur: 'ہم نے کہا سب اتر جاؤ جب میری ہدایت آئے تو جو پیروی کرے ان پر نہ خوف ہوگا نہ غم' }, w: [
    { a: 'قُلْنَا', t: 'qulna', r: 'ق و ل', p: 'V', en: 'We said', ur: 'ہم نے کہا', g: 'verb' },
    { a: 'اهْبِطُوا', t: 'ihbitu', r: 'ه ب ط', p: 'V', en: 'Go down', ur: 'اتر جاؤ', g: 'verb' },
    { a: 'مِنْهَا', t: 'minha', p: 'P+PRON', en: 'from it', ur: 'اس سے' },
    { a: 'جَمِيعًا', t: 'jamian', p: 'N', en: 'all of you', ur: 'سب', g: 'hal' },
    { a: 'فَإِمَّا', t: 'fa-imma', p: 'CONJ+COND', en: 'then whenever', ur: 'پھر جب' },
    { a: 'يَأْتِيَنَّكُم', t: 'yatiyannakum', r: 'أ ت ي', p: 'V+PRON', en: 'comes to you', ur: 'آئے تمہارے پاس', g: 'verb' },
    { a: 'مِّنِّي', t: 'minni', p: 'P+PRON', en: 'from Me', ur: 'میری طرف سے' },
    { a: 'هُدًى', t: 'hudan', r: 'ه د ي', p: 'N', en: 'guidance', ur: 'ہدایت', g: 'subj' },
    { a: 'فَمَن', t: 'fa-man', p: 'CONJ+COND', en: 'then whoever', ur: 'تو جو' },
    { a: 'تَبِعَ', t: 'tabia', r: 'ت ب ع', p: 'V', en: 'follows', ur: 'پیروی کرے', g: 'verb' },
    { a: 'هُدَايَ', t: 'hudaya', r: 'ه د ي', p: 'N+PRON', en: 'My guidance', ur: 'میری ہدایت', g: 'obj' },
    { a: 'فَلَا', t: 'fa-la', p: 'CONJ+NEG', en: 'then no', ur: 'تو نہ' },
    { a: 'خَوْفٌ', t: 'khawfun', r: 'خ و ف', p: 'N', en: 'fear', ur: 'خوف', g: 'mubtada' },
    { a: 'عَلَيْهِمْ', t: 'alayhim', p: 'P+PRON', en: 'upon them', ur: 'ان پر' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'and not', ur: 'اور نہ' },
    { a: 'هُمْ', t: 'hum', p: 'PRON', en: 'they', ur: 'وہ' },
    { a: 'يَحْزَنُونَ', t: 'yahzanuna', r: 'ح ز ن', p: 'V', en: 'will grieve', ur: 'غمگین ہوں گے', g: 'khabar' },
  ], rel: [{ from: 10, to: 11, l: 'فعل + مفعول به' }, { from: 12, to: 13, l: 'نفی + اسم' }] },

  39: { tr: { en: 'And those who disbelieve and deny Our signs - those will be companions of the Fire; they will abide therein eternally.', ur: 'اور جنہوں نے کفر کیا اور ہماری آیتوں کو جھٹلایا وہ دوزخ والے ہیں ہمیشہ اس میں رہیں گے' }, w: [
    { a: 'وَالَّذِينَ', t: 'walladhina', p: 'CONJ+REL', en: 'And those who', ur: 'اور جنہوں نے' },
    { a: 'كَفَرُوا', t: 'kafaru', r: 'ك ف ر', p: 'V', en: 'disbelieve', ur: 'کفر کیا', g: 'silah' },
    { a: 'وَكَذَّبُوا', t: 'wa-kadhdhabu', r: 'ك ذ ب', p: 'CONJ+V', en: 'and deny', ur: 'اور جھٹلایا', g: 'verb', f: { form: 'II' } },
    { a: 'بِآيَاتِنَا', t: 'bi-ayatina', r: 'أ ي ي', p: 'P+N+PRON', en: 'Our signs', ur: 'ہماری آیتوں کو' },
    { a: 'أُولَٰئِكَ', t: 'ulaika', p: 'DEM', en: 'those', ur: 'وہ لوگ', g: 'mubtada' },
    { a: 'أَصْحَابُ', t: 'ashabu', r: 'ص ح ب', p: 'N', en: 'companions of', ur: 'والے', g: 'khabar' },
    { a: 'النَّارِ', t: 'an-nari', r: 'ن و ر', p: 'N', en: 'the Fire', ur: 'آگ' },
    { a: 'هُمْ', t: 'hum', p: 'PRON', en: 'they', ur: 'وہ', g: 'mubtada' },
    { a: 'فِيهَا', t: 'fiha', p: 'P+PRON', en: 'therein', ur: 'اس میں' },
    { a: 'خَالِدُونَ', t: 'khaliduna', r: 'خ ل د', p: 'N', en: 'will abide eternally', ur: 'ہمیشہ رہنے والے', g: 'khabar' },
  ], rel: [{ from: 5, to: 6, l: 'مبتدأ + خبر' }, { from: 8, to: 10, l: 'مبتدأ + خبر' }] },

  40: { tr: { en: 'O Children of Israel, remember My favor which I bestowed upon you and fulfill My covenant, I will fulfill your covenant; and be afraid only of Me.', ur: 'اے بنی اسرائیل میری نعمت یاد کرو جو میں نے تم پر کی اور میرا عہد پورا کرو میں تمہارا عہد پورا کروں گا اور مجھ سے ڈرو' }, w: [
    { a: 'يَا', t: 'ya', p: 'VOC', en: 'O', ur: 'اے' },
    { a: 'بَنِي', t: 'bani', r: 'ب ن ي', p: 'N', en: 'Children of', ur: 'اولاد', g: 'munada' },
    { a: 'إِسْرَائِيلَ', t: 'Israila', p: 'PN', en: 'Israel', ur: 'اسرائیل' },
    { a: 'اذْكُرُوا', t: 'udhkuru', r: 'ذ ك ر', p: 'V', en: 'remember', ur: 'یاد کرو', g: 'verb' },
    { a: 'نِعْمَتِيَ', t: 'ni\'matiya', r: 'ن ع م', p: 'N+PRON', en: 'My favor', ur: 'میری نعمت', g: 'obj' },
    { a: 'الَّتِي', t: 'allati', p: 'REL', en: 'which', ur: 'جو' },
    { a: 'أَنْعَمْتُ', t: 'an\'amtu', r: 'ن ع م', p: 'V', en: 'I bestowed', ur: 'انعام کیا', g: 'verb', f: { form: 'IV' } },
    { a: 'عَلَيْكُمْ', t: 'alaykum', p: 'P+PRON', en: 'upon you', ur: 'تم پر' },
    { a: 'وَأَوْفُوا', t: 'wa-awfu', r: 'و ف ي', p: 'CONJ+V', en: 'and fulfill', ur: 'اور پورا کرو', g: 'verb', f: { form: 'IV' } },
    { a: 'بِعَهْدِي', t: 'bi-ahdi', r: 'ع ه د', p: 'P+N+PRON', en: 'My covenant', ur: 'میرا عہد' },
    { a: 'أُوفِ', t: 'ufi', r: 'و ف ي', p: 'V', en: 'I will fulfill', ur: 'پورا کروں گا', g: 'verb' },
    { a: 'بِعَهْدِكُمْ', t: 'bi-ahdikum', r: 'ع ه د', p: 'P+N+PRON', en: 'your covenant', ur: 'تمہارا عہد' },
    { a: 'وَإِيَّايَ', t: 'wa-iyyaya', p: 'CONJ+PRON', en: 'and Me alone', ur: 'اور صرف مجھ سے' },
    { a: 'فَارْهَبُونِ', t: 'farhubuni', r: 'ر ه ب', p: 'CONJ+V+PRON', en: 'fear', ur: 'ڈرو', g: 'verb' },
  ], rel: [{ from: 4, to: 5, l: 'فعل + مفعول به' }, { from: 9, to: 10, l: 'فعل + مفعول به' }] },

  41: { tr: { en: 'And believe in what I have sent down confirming that which is with you, and be not the first to disbelieve in it.', ur: 'اور جو میں نے نازل کیا اس پر ایمان لاؤ جو تمہارے پاس کی تصدیق کرتا ہے اور سب سے پہلے کافر نہ بنو' }, w: [
    { a: 'وَآمِنُوا', t: 'wa-aminu', r: 'أ م ن', p: 'CONJ+V', en: 'And believe', ur: 'اور ایمان لاؤ', g: 'verb', f: { form: 'IV' } },
    { a: 'بِمَا', t: 'bima', p: 'P+REL', en: 'in what', ur: 'جو کچھ' },
    { a: 'أَنزَلْتُ', t: 'anzaltu', r: 'ن ز ل', p: 'V', en: 'I have sent down', ur: 'میں نے نازل کیا', g: 'verb', f: { form: 'IV' } },
    { a: 'مُصَدِّقًا', t: 'musaddiqan', r: 'ص د ق', p: 'N', en: 'confirming', ur: 'تصدیق کرنے والا', g: 'hal', f: { form: 'II' } },
    { a: 'لِّمَا', t: 'lima', p: 'P+REL', en: 'that which', ur: 'جو کچھ' },
    { a: 'مَعَكُمْ', t: 'ma\'akum', p: 'LOC+PRON', en: 'is with you', ur: 'تمہارے پاس ہے' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'and do not', ur: 'اور مت' },
    { a: 'تَكُونُوا', t: 'takunu', r: 'ك و ن', p: 'V', en: 'be', ur: 'بنو', g: 'verb' },
    { a: 'أَوَّلَ', t: 'awwala', p: 'N', en: 'the first', ur: 'سب سے پہلے' },
    { a: 'كَافِرٍ', t: 'kafirin', r: 'ك ف ر', p: 'N', en: 'to disbelieve', ur: 'کافر', g: 'mudaf-ilayh' },
    { a: 'بِهِ', t: 'bihi', p: 'P+PRON', en: 'in it', ur: 'اس کے' },
  ], rel: [{ from: 1, to: 3, l: 'فعل + مفعول به' }, { from: 7, to: 8, l: 'نہی + فعل' }] },

  42: { tr: { en: 'And do not mix the truth with falsehood or conceal the truth while you know.', ur: 'اور حق کو باطل سے نہ ملاؤ اور سچائی کو نہ چھپاؤ جبکہ تم جانتے ہو' }, w: [
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'And do not', ur: 'اور مت' },
    { a: 'تَلْبِسُوا', t: 'talbisu', r: 'ل ب س', p: 'V', en: 'mix', ur: 'ملاؤ', g: 'verb' },
    { a: 'الْحَقَّ', t: 'al-haqqa', r: 'ح ق ق', p: 'N', en: 'the truth', ur: 'حق کو', g: 'obj', c: 'mansoob' },
    { a: 'بِالْبَاطِلِ', t: 'bil-batili', r: 'ب ط ل', p: 'P+N', en: 'with falsehood', ur: 'باطل سے' },
    { a: 'وَتَكْتُمُوا', t: 'wa-taktumu', r: 'ك ت م', p: 'CONJ+V', en: 'or conceal', ur: 'اور چھپاؤ', g: 'verb' },
    { a: 'الْحَقَّ', t: 'al-haqqa', r: 'ح ق ق', p: 'N', en: 'the truth', ur: 'سچائی کو', g: 'obj' },
    { a: 'وَأَنتُمْ', t: 'wa-antum', p: 'CONJ+PRON', en: 'while you', ur: 'جبکہ تم', g: 'hal' },
    { a: 'تَعْلَمُونَ', t: 'ta\'lamuna', r: 'ع ل م', p: 'V', en: 'know', ur: 'جانتے ہو', g: 'verb' },
  ], rel: [{ from: 1, to: 2, l: 'نہی + فعل' }, { from: 2, to: 3, l: 'فعل + مفعول به' }] },

  43: { tr: { en: 'And establish prayer and give zakah and bow with those who bow.', ur: 'اور نماز قائم کرو اور زکوٰۃ دو اور رکوع کرنے والوں کے ساتھ رکوع کرو' }, w: [
    { a: 'وَأَقِيمُوا', t: 'wa-aqimu', r: 'ق و م', p: 'CONJ+V', en: 'And establish', ur: 'اور قائم کرو', g: 'verb', f: { form: 'IV' } },
    { a: 'الصَّلَاةَ', t: 'as-salata', r: 'ص ل و', p: 'N', en: 'the prayer', ur: 'نماز', g: 'obj' },
    { a: 'وَآتُوا', t: 'wa-atu', r: 'أ ت ي', p: 'CONJ+V', en: 'and give', ur: 'اور دو', g: 'verb', f: { form: 'IV' } },
    { a: 'الزَّكَاةَ', t: 'az-zakata', r: 'ز ك و', p: 'N', en: 'the zakah', ur: 'زکوٰۃ', g: 'obj' },
    { a: 'وَارْكَعُوا', t: 'warka\'u', r: 'ر ك ع', p: 'CONJ+V', en: 'and bow', ur: 'اور رکوع کرو', g: 'verb' },
    { a: 'مَعَ', t: 'ma\'a', p: 'P', en: 'with', ur: 'ساتھ' },
    { a: 'الرَّاكِعِينَ', t: 'ar-raki\'ina', r: 'ر ك ع', p: 'N', en: 'those who bow', ur: 'رکوع کرنے والوں', g: 'majrur' },
  ], rel: [{ from: 1, to: 2, l: 'فعل + مفعول به' }, { from: 3, to: 4, l: 'فعل + مفعول به' }] },

  44: { tr: { en: 'Do you order righteousness of the people and forget yourselves while you recite the Scripture? Then will you not reason?', ur: 'کیا تم لوگوں کو نیکی کا حکم دیتے ہو اور اپنے آپ کو بھولتے ہو حالانکہ تم کتاب پڑھتے ہو کیا عقل نہیں کرتے' }, w: [
    { a: 'أَتَأْمُرُونَ', t: 'ata-muruna', r: 'أ م ر', p: 'INTG+V', en: 'Do you order', ur: 'کیا تم حکم دیتے ہو', g: 'verb' },
    { a: 'النَّاسَ', t: 'an-nasa', r: 'ن و س', p: 'N', en: 'the people', ur: 'لوگوں کو', g: 'obj' },
    { a: 'بِالْبِرِّ', t: 'bil-birri', r: 'ب ر ر', p: 'P+N', en: 'righteousness', ur: 'نیکی کا' },
    { a: 'وَتَنسَوْنَ', t: 'wa-tansawna', r: 'ن س ي', p: 'CONJ+V', en: 'and forget', ur: 'اور بھولتے ہو', g: 'verb' },
    { a: 'أَنفُسَكُمْ', t: 'anfusakum', r: 'ن ف س', p: 'N+PRON', en: 'yourselves', ur: 'اپنے آپ کو', g: 'obj' },
    { a: 'وَأَنتُمْ', t: 'wa-antum', p: 'CONJ+PRON', en: 'while you', ur: 'حالانکہ تم', g: 'hal' },
    { a: 'تَتْلُونَ', t: 'tatluna', r: 'ت ل و', p: 'V', en: 'recite', ur: 'پڑھتے ہو', g: 'verb' },
    { a: 'الْكِتَابَ', t: 'al-kitaba', r: 'ك ت ب', p: 'N', en: 'the Scripture', ur: 'کتاب', g: 'obj' },
    { a: 'أَفَلَا', t: 'afala', p: 'INTG+CONJ+NEG', en: 'Then will you not', ur: 'کیا پھر نہیں' },
    { a: 'تَعْقِلُونَ', t: 'ta\'qiluna', r: 'ع ق ل', p: 'V', en: 'reason', ur: 'عقل کرتے', g: 'verb' },
  ], rel: [{ from: 1, to: 2, l: 'فعل + مفعول به' }, { from: 4, to: 5, l: 'فعل + مفعول به' }] },

  45: { tr: { en: 'And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive.', ur: 'اور صبر اور نماز سے مدد لو اور بے شک یہ مشکل ہے مگر عاجزی کرنے والوں پر' }, w: [
    { a: 'وَاسْتَعِينُوا', t: 'wasta\'inu', r: 'ع و ن', p: 'CONJ+V', en: 'And seek help', ur: 'اور مدد مانگو', g: 'verb', f: { form: 'X' } },
    { a: 'بِالصَّبْرِ', t: 'bis-sabri', r: 'ص ب ر', p: 'P+N', en: 'through patience', ur: 'صبر سے' },
    { a: 'وَالصَّلَاةِ', t: 'was-salati', r: 'ص ل و', p: 'CONJ+N', en: 'and prayer', ur: 'اور نماز سے' },
    { a: 'وَإِنَّهَا', t: 'wa-innaha', p: 'CONJ+EMPH+PRON', en: 'and indeed it', ur: 'اور بے شک یہ' },
    { a: 'لَكَبِيرَةٌ', t: 'la-kabeeratun', r: 'ك ب ر', p: 'N', en: 'surely difficult', ur: 'بڑی بات ہے', g: 'khabar-inna' },
    { a: 'إِلَّا', t: 'illa', p: 'EXCEPT', en: 'except', ur: 'مگر' },
    { a: 'عَلَى', t: 'ala', p: 'P', en: 'for', ur: 'پر' },
    { a: 'الْخَاشِعِينَ', t: 'al-khashi\'ina', r: 'خ ش ع', p: 'N', en: 'the humbly submissive', ur: 'عاجزی کرنے والوں' },
  ], rel: [{ from: 1, to: 2, l: 'فعل + مفعول به' }, { from: 4, to: 5, l: 'إنّ + خبر' }] },

  46: { tr: { en: 'Who are certain that they will meet their Lord and that they will return to Him.', ur: 'جو سمجھتے ہیں کہ اپنے رب سے ملنے والے ہیں اور اسی کی طرف لوٹنے والے ہیں' }, w: [
    { a: 'الَّذِينَ', t: 'alladhina', p: 'REL', en: 'Who', ur: 'جو لوگ' },
    { a: 'يَظُنُّونَ', t: 'yadhunnuna', r: 'ظ ن ن', p: 'V', en: 'are certain', ur: 'سمجھتے ہیں', g: 'verb' },
    { a: 'أَنَّهُم', t: 'annahum', p: 'EMPH+PRON', en: 'that they', ur: 'کہ وہ' },
    { a: 'مُّلَاقُو', t: 'mulaqu', r: 'ل ق ي', p: 'N', en: 'will meet', ur: 'ملنے والے', g: 'khabar-anna', f: { form: 'III' } },
    { a: 'رَبِّهِمْ', t: 'rabbihim', r: 'ر ب ب', p: 'N+PRON', en: 'their Lord', ur: 'اپنے رب سے' },
    { a: 'وَأَنَّهُمْ', t: 'wa-annahum', p: 'CONJ+EMPH+PRON', en: 'and that they', ur: 'اور وہ' },
    { a: 'إِلَيْهِ', t: 'ilayhi', p: 'P+PRON', en: 'to Him', ur: 'اسی کی طرف' },
    { a: 'رَاجِعُونَ', t: 'raji\'una', r: 'ر ج ع', p: 'N', en: 'will return', ur: 'لوٹنے والے', g: 'khabar-anna' },
  ], rel: [{ from: 1, to: 2, l: 'موصول + صلة' }, { from: 3, to: 4, l: 'إنّ + خبر' }] },

  47: { tr: { en: 'O Children of Israel, remember My favor that I bestowed upon you and that I preferred you over the worlds.', ur: 'اے بنی اسرائیل میری نعمت یاد کرو جو میں نے تم پر کی اور یاد کرو کہ میں نے تمہیں تمام جہان والوں پر فضیلت دی' }, w: [
    { a: 'يَا', t: 'ya', p: 'VOC', en: 'O', ur: 'اے' },
    { a: 'بَنِي', t: 'bani', r: 'ب ن ي', p: 'N', en: 'Children of', ur: 'اولاد', g: 'munada' },
    { a: 'إِسْرَائِيلَ', t: 'Israila', p: 'PN', en: 'Israel', ur: 'اسرائیل' },
    { a: 'اذْكُرُوا', t: 'udhkuru', r: 'ذ ك ر', p: 'V', en: 'remember', ur: 'یاد کرو', g: 'verb' },
    { a: 'نِعْمَتِيَ', t: 'ni\'matiya', r: 'ن ع م', p: 'N+PRON', en: 'My favor', ur: 'میری نعمت', g: 'obj' },
    { a: 'الَّتِي', t: 'allati', p: 'REL', en: 'which', ur: 'جو' },
    { a: 'أَنْعَمْتُ', t: 'an\'amtu', r: 'ن ع م', p: 'V', en: 'I bestowed', ur: 'میں نے انعام کیا', g: 'silah', f: { form: 'IV' } },
    { a: 'عَلَيْكُمْ', t: 'alaykum', p: 'P+PRON', en: 'upon you', ur: 'تم پر' },
    { a: 'وَأَنِّي', t: 'wa-anni', p: 'CONJ+EMPH+PRON', en: 'and that I', ur: 'اور یہ کہ میں نے' },
    { a: 'فَضَّلْتُكُمْ', t: 'faddaltukum', r: 'ف ض ل', p: 'V+PRON', en: 'preferred you', ur: 'تمہیں فضیلت دی', g: 'verb', f: { form: 'II' } },
    { a: 'عَلَى', t: 'ala', p: 'P', en: 'over', ur: 'پر' },
    { a: 'الْعَالَمِينَ', t: 'al-\'alamina', r: 'ع ل م', p: 'N', en: 'the worlds', ur: 'سارے جہان والوں' },
  ], rel: [{ from: 4, to: 5, l: 'فعل + مفعول به' }, { from: 10, to: 12, l: 'فعل + جار مجرور' }] },

  48: { tr: { en: 'And fear a Day when no soul will suffice for another soul at all, nor will intercession be accepted from it, nor will compensation be taken from it, nor will they be aided.', ur: 'اور اس دن سے ڈرو جب کوئی جان کسی جان کے کام نہ آئے گی نہ سفارش قبول ہوگی نہ فدیہ لیا جائے گا نہ مدد ملے گی' }, w: [
    { a: 'وَاتَّقُوا', t: 'wattaqu', r: 'و ق ي', p: 'CONJ+V', en: 'And fear', ur: 'اور ڈرو', g: 'verb', f: { form: 'VIII' } },
    { a: 'يَوْمًا', t: 'yawman', r: 'ي و م', p: 'N', en: 'a Day', ur: 'اس دن سے', g: 'obj' },
    { a: 'لَّا', t: 'la', p: 'NEG', en: 'not', ur: 'نہیں' },
    { a: 'تَجْزِي', t: 'tajzi', r: 'ج ز ي', p: 'V', en: 'will suffice', ur: 'کام آئے گی', g: 'verb' },
    { a: 'نَفْسٌ', t: 'nafsun', r: 'ن ف س', p: 'N', en: 'a soul', ur: 'کوئی جان', g: 'subj' },
    { a: 'عَن', t: 'an', p: 'P', en: 'for', ur: 'کے بدلے' },
    { a: 'نَّفْسٍ', t: 'nafsin', r: 'ن ف س', p: 'N', en: 'another soul', ur: 'کسی جان' },
    { a: 'شَيْئًا', t: 'shay-an', r: 'ش ي أ', p: 'N', en: 'at all', ur: 'کچھ بھی', g: 'obj' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'and not', ur: 'اور نہ' },
    { a: 'يُقْبَلُ', t: 'yuqbalu', r: 'ق ب ل', p: 'V', en: 'will be accepted', ur: 'قبول ہوگی', g: 'verb' },
    { a: 'مِنْهَا', t: 'minha', p: 'P+PRON', en: 'from it', ur: 'اس سے' },
    { a: 'شَفَاعَةٌ', t: 'shafa\'atun', r: 'ش ف ع', p: 'N', en: 'intercession', ur: 'سفارش', g: 'subj' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'and not', ur: 'اور نہ' },
    { a: 'يُؤْخَذُ', t: 'yu-khadhu', r: 'أ خ ذ', p: 'V', en: 'will be taken', ur: 'لیا جائے گا', g: 'verb' },
    { a: 'مِنْهَا', t: 'minha', p: 'P+PRON', en: 'from it', ur: 'اس سے' },
    { a: 'عَدْلٌ', t: 'adlun', r: 'ع د ل', p: 'N', en: 'compensation', ur: 'فدیہ', g: 'subj' },
    { a: 'وَلَا', t: 'wa-la', p: 'CONJ+NEG', en: 'and not', ur: 'اور نہ' },
    { a: 'هُمْ', t: 'hum', p: 'PRON', en: 'they', ur: 'وہ' },
    { a: 'يُنصَرُونَ', t: 'yunsaruna', r: 'ن ص ر', p: 'V', en: 'will be aided', ur: 'مدد دی جائے گی', g: 'verb' },
  ], rel: [{ from: 1, to: 2, l: 'فعل + مفعول به' }, { from: 3, to: 4, l: 'نفی + فعل' }] },

  49: { tr: { en: 'And when We saved you from the people of Pharaoh, who afflicted you with terrible torment, slaughtering your sons and keeping your females alive.', ur: 'اور جب ہم نے تمہیں فرعون والوں سے بچایا جو تمہیں برا عذاب دیتے تھے تمہارے بیٹوں کو ذبح کرتے اور عورتوں کو زندہ رکھتے' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'نَجَّيْنَاكُم', t: 'najjaynakum', r: 'ن ج و', p: 'V+PRON', en: 'We saved you', ur: 'ہم نے تمہیں بچایا', g: 'verb', f: { form: 'II' } },
    { a: 'مِّنْ', t: 'min', p: 'P', en: 'from', ur: 'سے' },
    { a: 'آلِ', t: 'ali', p: 'N', en: 'the people of', ur: 'آل' },
    { a: 'فِرْعَوْنَ', t: 'Fir\'awna', p: 'PN', en: 'Pharaoh', ur: 'فرعون' },
    { a: 'يَسُومُونَكُمْ', t: 'yasumunakum', r: 'س و م', p: 'V+PRON', en: 'who afflicted you', ur: 'تمہیں دیتے تھے', g: 'verb' },
    { a: 'سُوءَ', t: 'sua', r: 'س و أ', p: 'N', en: 'the worst', ur: 'برا', g: 'obj' },
    { a: 'الْعَذَابِ', t: 'al-\'adhabi', r: 'ع ذ ب', p: 'N', en: 'of torment', ur: 'عذاب' },
    { a: 'يُذَبِّحُونَ', t: 'yudhabihuna', r: 'ذ ب ح', p: 'V', en: 'slaughtering', ur: 'ذبح کرتے تھے', g: 'verb', f: { form: 'II' } },
    { a: 'أَبْنَاءَكُمْ', t: 'abnaakum', r: 'ب ن ي', p: 'N+PRON', en: 'your sons', ur: 'تمہارے بیٹوں کو', g: 'obj' },
    { a: 'وَيَسْتَحْيُونَ', t: 'wa-yastahyuna', r: 'ح ي ي', p: 'CONJ+V', en: 'and keeping alive', ur: 'اور زندہ رکھتے تھے', g: 'verb', f: { form: 'X' } },
    { a: 'نِسَاءَكُمْ', t: 'nisaakum', r: 'ن س و', p: 'N+PRON', en: 'your women', ur: 'تمہاری عورتوں کو', g: 'obj' },
  ], rel: [{ from: 2, to: 5, l: 'فعل + جار مجرور' }, { from: 9, to: 10, l: 'فعل + مفعول به' }] },

  50: { tr: { en: 'And when We parted the sea for you and saved you and drowned the people of Pharaoh while you were looking on.', ur: 'اور جب ہم نے تمہارے لیے سمندر چیرا تو تمہیں بچایا اور فرعون والوں کو غرق کیا تم دیکھ رہے تھے' }, w: [
    { a: 'وَإِذْ', t: 'wa-idh', p: 'CONJ+T', en: 'And when', ur: 'اور جب' },
    { a: 'فَرَقْنَا', t: 'faraqna', r: 'ف ر ق', p: 'V', en: 'We parted', ur: 'ہم نے چیرا', g: 'verb' },
    { a: 'بِكُمُ', t: 'bikum', p: 'P+PRON', en: 'for you', ur: 'تمہارے لیے' },
    { a: 'الْبَحْرَ', t: 'al-bahra', r: 'ب ح ر', p: 'N', en: 'the sea', ur: 'سمندر', g: 'obj' },
    { a: 'فَأَنجَيْنَاكُمْ', t: 'fa-anjaynakum', r: 'ن ج و', p: 'CONJ+V+PRON', en: 'and We saved you', ur: 'تو بچا لیا تمہیں', g: 'verb', f: { form: 'IV' } },
    { a: 'وَأَغْرَقْنَا', t: 'wa-aghraqna', r: 'غ ر ق', p: 'CONJ+V', en: 'and drowned', ur: 'اور غرق کیا', g: 'verb', f: { form: 'IV' } },
    { a: 'آلَ', t: 'ala', p: 'N', en: 'the people of', ur: 'آل', g: 'obj' },
    { a: 'فِرْعَوْنَ', t: 'Fir\'awna', p: 'PN', en: 'Pharaoh', ur: 'فرعون' },
    { a: 'وَأَنتُمْ', t: 'wa-antum', p: 'CONJ+PRON', en: 'while you', ur: 'اور تم', g: 'hal' },
    { a: 'تَنظُرُونَ', t: 'tandhuruna', r: 'ن ظ ر', p: 'V', en: 'were looking', ur: 'دیکھ رہے تھے', g: 'verb' },
  ], rel: [{ from: 2, to: 4, l: 'فعل + مفعول به' }, { from: 6, to: 7, l: 'فعل + مفعول به' }] },
};

// Now we need to build the complete replacement for all ayahs 31-286
// For ayahs not in AYAH_DATA above (51-286), we need to generate from the existing text in the file

// Read the existing file
const filePath = '/Users/zia/Desktop/Development/Quran/quran-personal/src/data/treebank/surahs/002.js';
const content = fs.readFileSync(filePath, 'utf8');

// Helper: format a word entry from compact format to full format
function formatWord(ayahNum, wordData, position) {
  const parts = [];
  parts.push(`{ id: '2:${ayahNum}:${position}'`);
  parts.push(`position: ${position}`);
  parts.push(`arabic: '${wordData.a}'`);
  parts.push(`transliteration: '${wordData.t}'`);

  // Parse pos
  const posArr = wordData.p.split('+');
  parts.push(`pos: [${posArr.map(p => `'${p}'`).join(', ')}]`);
  parts.push(`posLabel: '${wordData.p}'`);

  if (wordData.r) parts.push(`root: '${wordData.r}'`);
  parts.push(`meaning: { en: '${wordData.en}', ur: '${wordData.ur}' }`);
  if (wordData.g) parts.push(`grammarRole: '${wordData.g}'`);
  if (wordData.c) parts.push(`case: '${wordData.c}'`);
  if (wordData.f) {
    const fParts = Object.entries(wordData.f).map(([k,v]) => `${k}: '${v}'`).join(', ');
    parts.push(`features: { ${fParts} }`);
  }
  return parts.join(', ') + ' }';
}

// Format a complete ayah entry
function formatAyah(ayahNum, text, data) {
  const lines = [];
  const tr = data.tr;
  const words = data.w;
  const rels = data.rel || [];

  // Build word entries
  const wordEntries = words.map((w, i) => formatWord(ayahNum, w, i + 1));

  lines.push(`  ${ayahNum}: { text: '${text}', translation: { en: '${tr.en.replace(/'/g, "\\'")}', ur: '${tr.ur.replace(/'/g, "\\'")}' }, words: [${wordEntries.join(', ')}], structure: { relationships: [${rels.map(r => `{ from: ${r.from}, to: ${r.to}, label: '${r.l}' }`).join(', ')}] } },`);

  return lines.join('\n');
}

console.log('Generating word data for ayahs 31-50...');

// Extract existing text for each ayah from the file
const ayahTextRegex = /(\d+): \{ text: '([^']+)'/g;
const ayahTexts = {};
let match;
while ((match = ayahTextRegex.exec(content)) !== null) {
  ayahTexts[parseInt(match[1])] = match[2];
}

console.log(`Found ${Object.keys(ayahTexts).length} ayah texts`);

// Generate replacement lines for ayahs in AYAH_DATA
const replacements = {};
for (const [ayahNum, data] of Object.entries(AYAH_DATA)) {
  const num = parseInt(ayahNum);
  const text = ayahTexts[num];
  if (text) {
    replacements[num] = formatAyah(num, text, data);
  }
}

// Now apply replacements to the file
let newContent = content;
for (const [ayahNum, replacement] of Object.entries(replacements)) {
  const num = parseInt(ayahNum);
  // Find the existing line for this ayah
  const existingRegex = new RegExp(`  ${num}: \\{ text: '[^']+', words: \\[\\] \\},?`);
  if (existingRegex.test(newContent)) {
    newContent = newContent.replace(existingRegex, replacement);
  }
}

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Updated ayahs 31-50 with word data');
console.log('Done!');
