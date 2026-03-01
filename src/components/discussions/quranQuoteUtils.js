/**
 * quranQuoteUtils — Parse [quran:S:A] or [quran:S:A:TID] patterns in discussion text
 * into structured segments for rich rendering.
 * TID = Quran.com translation resource ID (optional, defaults to 234 = Urdu Jalandhry)
 */

// Matches [quran:S:A] or [quran:S:A:TID]
const QURAN_QUOTE_REGEX = /\[quran:(\d+):(\d+)(?::(\d+))?\]/g;

// Detect if text contains RTL characters (Arabic, Urdu, Farsi, Hebrew, etc.)
const RTL_CHAR_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
export function getTextDir(text) {
  return RTL_CHAR_REGEX.test((text || '').slice(0, 100)) ? 'rtl' : 'ltr';
}

/**
 * Available translations for the quote picker.
 * Uses Quran.com API v4 resource IDs.
 * Sorted by language, then popularity.
 */
export const QUOTE_TRANSLATIONS = [
  // === Urdu (اردو) ===
  { id: 234, name: 'فتح محمد جالندھری', nameEn: 'Jalandhry', lang: 'Urdu', langNative: 'اردو', langCode: 'ur' },
  { id: 9001, name: 'کنزالایمان (احمد رضا خان)', nameEn: 'Kanzul Iman', lang: 'Urdu', langNative: 'اردو', langCode: 'ur', altApi: 'ur.kanzuliman' },
  { id: 97,  name: 'مودودی (تفہیم)', nameEn: 'Maududi', lang: 'Urdu', langNative: 'اردو', langCode: 'ur' },
  { id: 54,  name: 'جوناگڑھی', nameEn: 'Junagarhi', lang: 'Urdu', langNative: 'اردو', langCode: 'ur' },
  { id: 819, name: 'وحیدالدین خان', nameEn: 'Wahiduddin Khan', lang: 'Urdu', langNative: 'اردو', langCode: 'ur' },
  { id: 158, name: 'ڈاکٹر اسرار احمد', nameEn: 'Dr. Israr Ahmad', lang: 'Urdu', langNative: 'اردو', langCode: 'ur' },
  { id: 151, name: 'شیخ الہند محمود الحسن', nameEn: 'Mahmud al-Hasan', lang: 'Urdu', langNative: 'اردو', langCode: 'ur' },
  { id: 156, name: 'فی ظلال القرآن', nameEn: 'Sayyid Qutb', lang: 'Urdu', langNative: 'اردو', langCode: 'ur' },
  { id: 831, name: 'مودودی (رومن اردو)', nameEn: 'Maududi (Roman)', lang: 'Urdu', langNative: 'اردو', langCode: 'ur' },

  // === English ===
  { id: 20,  name: 'Saheeh International', nameEn: 'Saheeh Intl', lang: 'English', langCode: 'en' },
  { id: 85,  name: 'Abdul Haleem', nameEn: 'Abdul Haleem', lang: 'English', langCode: 'en' },
  { id: 22,  name: 'Yusuf Ali', nameEn: 'Yusuf Ali', lang: 'English', langCode: 'en' },
  { id: 95,  name: 'Maududi (English)', nameEn: 'Maududi (EN)', lang: 'English', langCode: 'en' },
  { id: 203, name: 'Hilali & Khan', nameEn: 'Hilali & Khan', lang: 'English', langCode: 'en' },
  { id: 19,  name: 'Pickthall', nameEn: 'Pickthall', lang: 'English', langCode: 'en' },
  { id: 84,  name: 'Mufti Taqi Usmani', nameEn: 'Taqi Usmani', lang: 'English', langCode: 'en' },
  { id: 149, name: 'Bridges (Fadel Soliman)', nameEn: 'Bridges', lang: 'English', langCode: 'en' },
  { id: 57,  name: 'Transliteration', nameEn: 'Transliteration', lang: 'English', langCode: 'en' },

  // === Bengali (বাংলা) ===
  { id: 161, name: 'তাইসীরুল কুরআন', nameEn: 'Taisirul Quran', lang: 'Bengali', langNative: 'বাংলা', langCode: 'bn' },
  { id: 163, name: 'শেখ মুজিবুর রহমান', nameEn: 'Mujibur Rahman', lang: 'Bengali', langNative: 'বাংলা', langCode: 'bn' },
  { id: 213, name: 'ড. আবু বকর মুহাম্মাদ যাকারিয়া', nameEn: 'Dr. Zakaria', lang: 'Bengali', langNative: 'বাংলা', langCode: 'bn' },
  { id: 162, name: 'রাওয়াই আল-বায়ান', nameEn: 'Rawai Al-bayan', lang: 'Bengali', langNative: 'বাংলা', langCode: 'bn' },

  // === Hindi (हिन्दी) ===
  { id: 122, name: 'मौलाना अज़ीज़ुल हक़', nameEn: 'Azizul Haque', lang: 'Hindi', langNative: 'हिन्दी', langCode: 'hi' },

  // === Chinese (中文) ===
  { id: 56,  name: '马坚 (简体)', nameEn: 'Ma Jian (Simplified)', lang: 'Chinese', langNative: '中文', langCode: 'zh' },
  { id: 109, name: '穆罕默德·马金', nameEn: 'Muhammad Makin', lang: 'Chinese', langNative: '中文', langCode: 'zh' },

  // === Japanese (日本語) ===
  { id: 35,  name: '三田了一', nameEn: 'Ryoichi Mita', lang: 'Japanese', langNative: '日本語', langCode: 'ja' },
  { id: 218, name: 'サイード佐藤', nameEn: 'Saeed Sato', lang: 'Japanese', langNative: '日本語', langCode: 'ja' },

  // === Korean (한국어) ===
  { id: 36,  name: '한국어 번역', nameEn: 'Korean Translation', lang: 'Korean', langNative: '한국어', langCode: 'ko' },
  { id: 219, name: '하메드 최', nameEn: 'Hamed Choi', lang: 'Korean', langNative: '한국어', langCode: 'ko' },

  // === Turkish (Türkçe) ===
  { id: 77,  name: 'Diyanet İşleri', nameEn: 'Diyanet', lang: 'Turkish', langNative: 'Türkçe', langCode: 'tr' },
  { id: 52,  name: 'Elmalılı Hamdi Yazır', nameEn: 'Elmalili Yazir', lang: 'Turkish', langNative: 'Türkçe', langCode: 'tr' },
  { id: 124, name: 'Muslim Shahin', nameEn: 'Muslim Shahin', lang: 'Turkish', langNative: 'Türkçe', langCode: 'tr' },
  { id: 112, name: 'Shaban Britch', nameEn: 'Shaban Britch', lang: 'Turkish', langNative: 'Türkçe', langCode: 'tr' },
  { id: 210, name: 'Dar Al-Salam Center', nameEn: 'Dar Al-Salam', lang: 'Turkish', langNative: 'Türkçe', langCode: 'tr' },

  // === Spanish (Español) ===
  { id: 83,  name: 'Sheikh Isa García', nameEn: 'Isa Garcia', lang: 'Spanish', langNative: 'Español', langCode: 'es' },
  { id: 140, name: 'Montada Islamic Foundation', nameEn: 'Montada', lang: 'Spanish', langNative: 'Español', langCode: 'es' },
  { id: 199, name: 'Noor International Center', nameEn: 'Noor Intl', lang: 'Spanish', langNative: 'Español', langCode: 'es' },

  // === French (Français) ===
  { id: 31,  name: 'Muhammad Hamidullah', nameEn: 'Hamidullah', lang: 'French', langNative: 'Français', langCode: 'fr' },
  { id: 136, name: 'Montada Islamic Foundation', nameEn: 'Montada', lang: 'French', langNative: 'Français', langCode: 'fr' },
  { id: 779, name: 'Rashid Maash', nameEn: 'Rashid Maash', lang: 'French', langNative: 'Français', langCode: 'fr' },

  // === German (Deutsch) ===
  { id: 27,  name: 'Bubenheim & Elyas', nameEn: 'Bubenheim', lang: 'German', langNative: 'Deutsch', langCode: 'de' },
  { id: 208, name: 'Abu Reda Muhammad ibn Ahmad', nameEn: 'Abu Reda', lang: 'German', langNative: 'Deutsch', langCode: 'de' },

  // === Portuguese (Português) ===
  { id: 43,  name: 'Samir', nameEn: 'Samir', lang: 'Portuguese', langNative: 'Português', langCode: 'pt' },
  { id: 103, name: 'Helmi Nasr', nameEn: 'Helmi Nasr', lang: 'Portuguese', langNative: 'Português', langCode: 'pt' },

  // === Italian (Italiano) ===
  { id: 153, name: 'Hamza Roberto Piccardo', nameEn: 'Piccardo', lang: 'Italian', langNative: 'Italiano', langCode: 'it' },
  { id: 209, name: 'Othman al-Sharif', nameEn: 'Othman al-Sharif', lang: 'Italian', langNative: 'Italiano', langCode: 'it' },

  // === Dutch (Nederlands) ===
  { id: 144, name: 'Sofian S. Siregar', nameEn: 'Siregar', lang: 'Dutch', langNative: 'Nederlands', langCode: 'nl' },
  { id: 235, name: 'Malak Faris Abdalsalaam', nameEn: 'Abdalsalaam', lang: 'Dutch', langNative: 'Nederlands', langCode: 'nl' },

  // === Indonesian (Bahasa Indonesia) ===
  { id: 33,  name: 'Kementerian Agama', nameEn: 'Indonesian Ministry', lang: 'Indonesian', langNative: 'Bahasa Indonesia', langCode: 'id' },
  { id: 134, name: 'King Fahad Quran Complex', nameEn: 'King Fahad', lang: 'Indonesian', langNative: 'Bahasa Indonesia', langCode: 'id' },
  { id: 141, name: 'The Sabiq Company', nameEn: 'Sabiq', lang: 'Indonesian', langNative: 'Bahasa Indonesia', langCode: 'id' },

  // === Russian (Русский) ===
  { id: 45,  name: 'Эльмир Кулиев', nameEn: 'Kuliev', lang: 'Russian', langNative: 'Русский', langCode: 'ru' },
  { id: 78,  name: 'Министерство вакуфов', nameEn: 'Ministry of Awqaf', lang: 'Russian', langNative: 'Русский', langCode: 'ru' },
  { id: 79,  name: 'Абу Адель', nameEn: 'Abu Adel', lang: 'Russian', langNative: 'Русский', langCode: 'ru' },

  // === Malay (Bahasa Melayu) ===
  { id: 39,  name: 'Abdullah Basmeih', nameEn: 'Basmeih', lang: 'Malay', langNative: 'Bahasa Melayu', langCode: 'ms' },

  // === Malayalam (മലയാളം) ===
  { id: 37,  name: 'മലയാളം വിവർത്തനം', nameEn: 'Malayalam Translation', lang: 'Malayalam', langNative: 'മലയാളം', langCode: 'ml' },
  { id: 80,  name: 'മുഹമ്മദ് കാരകുന്ന്', nameEn: 'Karakunnu & Elayavoor', lang: 'Malayalam', langNative: 'മലയാളം', langCode: 'ml' },
  { id: 224, name: 'അബ്ദുൽ-ഹമീദ് & കൻഹി', nameEn: 'Abdul-Hamid & Kanhi', lang: 'Malayalam', langNative: 'മലയാളം', langCode: 'ml' },

  // === Tamil (தமிழ்) ===
  { id: 50,  name: 'Jan Trust Foundation', nameEn: 'Jan Trust', lang: 'Tamil', langNative: 'தமிழ்', langCode: 'ta' },
  { id: 133, name: 'Abdul Hameed Baqavi', nameEn: 'Baqavi', lang: 'Tamil', langNative: 'தமிழ்', langCode: 'ta' },
  { id: 229, name: 'Sheikh Omar Sharif', nameEn: 'Omar Sharif', lang: 'Tamil', langNative: 'தமிழ்', langCode: 'ta' },

  // === Persian (فارسی) ===
  { id: 29,  name: 'حسین تاجی', nameEn: 'Taji Kal Dari', lang: 'Persian', langNative: 'فارسی', langCode: 'fa' },
  { id: 135, name: 'IslamHouse.com', nameEn: 'IslamHouse', lang: 'Persian', langNative: 'فارسی', langCode: 'fa' },

  // === Pashto (پښتو) ===
  { id: 118, name: 'زکریا ابوالسلام', nameEn: 'Zakaria Abulsalam', lang: 'Pashto', langNative: 'پښتو', langCode: 'ps' },

  // === Kurdish (کوردی) ===
  { id: 143, name: 'محمد صالح بامۆکی', nameEn: 'Bamoki', lang: 'Kurdish', langNative: 'کوردی', langCode: 'ku' },
  { id: 81,  name: 'برهان محمد أمين', nameEn: 'Burhan Muhammad-Amin', lang: 'Kurdish', langNative: 'کوردی', langCode: 'ku' },

  // === Sindhi (سنڌي) ===
  { id: 238, name: 'تاج محمود امروٹی', nameEn: 'Taj Mehmood Amroti', lang: 'Sindhi', langNative: 'سنڌي', langCode: 'sd' },

  // === Dari (دری) ===
  { id: 785, name: 'مولوی محمد انور بدخشانی', nameEn: 'Badkhashani', lang: 'Dari', langNative: 'دری', langCode: 'prs' },

  // === Azerbaijani (Azərbaycan) ===
  { id: 23,  name: 'Azərbaycan tərcüməsi', nameEn: 'Azerbaijani', lang: 'Azerbaijani', langNative: 'Azərbaycan', langCode: 'az' },
  { id: 75,  name: 'Alikhan Musayev', nameEn: 'Musayev', lang: 'Azerbaijani', langNative: 'Azərbaycan', langCode: 'az' },

  // === Uzbek (O'zbek) ===
  { id: 55,  name: 'Muhammad Sodiq (Lotin)', nameEn: 'M. Sodiq (Latin)', lang: 'Uzbek', langNative: "O'zbek", langCode: 'uz' },
  { id: 101, name: 'Alauddin Mansour', nameEn: 'Alauddin Mansour', lang: 'Uzbek', langNative: "O'zbek", langCode: 'uz' },
  { id: 127, name: 'Muhammad Sodik (Kirill)', nameEn: 'M. Sodik (Cyrillic)', lang: 'Uzbek', langNative: "O'zbek", langCode: 'uz' },

  // === Kazakh (Қазақша) ===
  { id: 113, name: 'Халифа Алтай', nameEn: 'Khalifah Altai', lang: 'Kazakh', langNative: 'Қазақша', langCode: 'kk' },
  { id: 222, name: 'Халифа Алтай (жаңа)', nameEn: 'Khalifa Altay', lang: 'Kazakh', langNative: 'Қазақша', langCode: 'kk' },

  // === Tajik (Тоҷикӣ) ===
  { id: 74,  name: 'Тоҷикӣ', nameEn: 'Tajik', lang: 'Tajik', langNative: 'Тоҷикӣ', langCode: 'tg' },
  { id: 139, name: 'Хоҷа Мироф & Хоҷа Мир', nameEn: 'Khawaja Mirof', lang: 'Tajik', langNative: 'Тоҷикӣ', langCode: 'tg' },
  { id: 223, name: 'Маркази пешгомон', nameEn: 'Pioneers Center', lang: 'Tajik', langNative: 'Тоҷикӣ', langCode: 'tg' },

  // === Tatar (Татарча) ===
  { id: 53,  name: 'Татарча тәрҗемә', nameEn: 'Tatar', lang: 'Tatar', langNative: 'Татарча', langCode: 'tt' },

  // === Chechen (Нохчийн) ===
  { id: 106, name: 'Магомед Магомедов', nameEn: 'Magomed Magomedov', lang: 'Chechen', langNative: 'Нохчийн', langCode: 'ce' },

  // === Uyghur (ئۇيغۇرچە) ===
  { id: 76,  name: 'محمد صالح', nameEn: 'Muhammad Saleh', lang: 'Uyghur', langNative: 'ئۇيغۇرچە', langCode: 'ug' },

  // === Ukrainian (Українська) ===
  { id: 217, name: 'Михайло Якубович', nameEn: 'Dr. Yakubovic', lang: 'Ukrainian', langNative: 'Українська', langCode: 'uk' },

  // === Bosnian (Bosanski) ===
  { id: 25,  name: 'Muhamed Mehanović', nameEn: 'Mehanovic', lang: 'Bosnian', langNative: 'Bosanski', langCode: 'bs' },
  { id: 126, name: 'Besim Korkut', nameEn: 'Korkut', lang: 'Bosnian', langNative: 'Bosanski', langCode: 'bs' },
  { id: 214, name: 'Dar Al-Salam Center', nameEn: 'Dar Al-Salam', lang: 'Bosnian', langNative: 'Bosanski', langCode: 'bs' },

  // === Albanian (Shqip) ===
  { id: 88,  name: 'Hasan Efendi Nahi', nameEn: 'Hasan Nahi', lang: 'Albanian', langNative: 'Shqip', langCode: 'sq' },
  { id: 47,  name: 'Shqip', nameEn: 'Albanian', lang: 'Albanian', langNative: 'Shqip', langCode: 'sq' },
  { id: 89,  name: 'Përkthimi shqip', nameEn: 'Albanian Translation', lang: 'Albanian', langNative: 'Shqip', langCode: 'sq' },

  // === Romanian (Română) ===
  { id: 44,  name: 'George Grigore', nameEn: 'Grigore', lang: 'Romanian', langNative: 'Română', langCode: 'ro' },
  { id: 782, name: 'Liga Islamică', nameEn: 'Islamic & Cultural League', lang: 'Romanian', langNative: 'Română', langCode: 'ro' },

  // === Bulgarian (Български) ===
  { id: 237, name: 'Цветан Теофанов', nameEn: 'Theophanov', lang: 'Bulgarian', langNative: 'Български', langCode: 'bg' },

  // === Polish (Polski) ===
  { id: 42,  name: 'Józef Bielawski', nameEn: 'Bielawski', lang: 'Polish', langNative: 'Polski', langCode: 'pl' },

  // === Czech (Čeština) ===
  { id: 26,  name: 'Český překlad', nameEn: 'Czech', lang: 'Czech', langNative: 'Čeština', langCode: 'cs' },

  // === Swedish (Svenska) ===
  { id: 48,  name: 'Knut Bernström', nameEn: 'Bernstrom', lang: 'Swedish', langNative: 'Svenska', langCode: 'sv' },

  // === Norwegian (Norsk) ===
  { id: 41,  name: 'Norsk oversettelse', nameEn: 'Norwegian', lang: 'Norwegian', langNative: 'Norsk', langCode: 'no' },

  // === Finnish (Suomi) ===
  { id: 30,  name: 'Suomenkielinen käännös', nameEn: 'Finnish', lang: 'Finnish', langNative: 'Suomi', langCode: 'fi' },

  // === Thai (ไทย) ===
  { id: 51,  name: 'King Fahad Quran Complex', nameEn: 'King Fahad', lang: 'Thai', langNative: 'ไทย', langCode: 'th' },
  { id: 230, name: 'สมาคมสถาบันและมหาวิทยาลัย', nameEn: 'Society of Institutes', lang: 'Thai', langNative: 'ไทย', langCode: 'th' },

  // === Vietnamese (Tiếng Việt) ===
  { id: 220, name: 'Trung tâm Ruwwad', nameEn: 'Ruwwad Center', lang: 'Vietnamese', langNative: 'Tiếng Việt', langCode: 'vi' },
  { id: 221, name: 'Hasan Abdul-Karim', nameEn: 'Hasan Abdul-Karim', lang: 'Vietnamese', langNative: 'Tiếng Việt', langCode: 'vi' },

  // === Tagalog (Filipino) ===
  { id: 211, name: 'Dar Al-Salam Center', nameEn: 'Dar Al-Salam', lang: 'Tagalog', langNative: 'Filipino', langCode: 'tl' },

  // === Khmer (ខ្មែរ) ===
  { id: 128, name: 'សហគមន៍មូស្លីមកម្ពុជា', nameEn: 'Cambodian Muslim Community', lang: 'Khmer', langNative: 'ខ្មែរ', langCode: 'km' },

  // === Maranao ===
  { id: 38,  name: 'Maranao Translation', nameEn: 'Maranao', lang: 'Maranao', langCode: 'mrw' },

  // === Swahili (Kiswahili) ===
  { id: 49,  name: 'Ali Muhsin Al-Barwani', nameEn: 'Al-Barwani', lang: 'Swahili', langNative: 'Kiswahili', langCode: 'sw' },
  { id: 231, name: 'Dr. Abdullah Abu Bakr', nameEn: 'Abu Bakr & Khamis', lang: 'Swahili', langNative: 'Kiswahili', langCode: 'sw' },

  // === Hausa (Hausa) ===
  { id: 32,  name: 'Abubakar Gumi', nameEn: 'Abubakar Gumi', lang: 'Hausa', langCode: 'ha' },
  { id: 115, name: 'Abubakar Mahmood Jummi', nameEn: 'Mahmood Jummi', lang: 'Hausa', langCode: 'ha' },

  // === Yoruba (Yorùbá) ===
  { id: 125, name: 'Shaykh Mikael Aykyuni', nameEn: 'Mikael Aykyuni', lang: 'Yoruba', langNative: 'Yorùbá', langCode: 'yo' },

  // === Somali (Soomaali) ===
  { id: 46,  name: 'Mahmud Muhammad Abduh', nameEn: 'Mahmud Abduh', lang: 'Somali', langNative: 'Soomaali', langCode: 'so' },

  // === Amharic (አማርኛ) ===
  { id: 87,  name: 'ሳዲቅ & ሳኒ', nameEn: 'Sadiq & Sani', lang: 'Amharic', langNative: 'አማርኛ', langCode: 'am' },

  // === Oromo (Oromoo) ===
  { id: 111, name: 'Ghali Apapur Apaghuna', nameEn: 'Ghali Apaghuna', lang: 'Oromo', langNative: 'Oromoo', langCode: 'om' },

  // === Ganda (Luganda) ===
  { id: 232, name: 'African Development Foundation', nameEn: 'African Dev Foundation', lang: 'Ganda', langNative: 'Luganda', langCode: 'lg' },

  // === Bambara (Bamanankan) ===
  { id: 795, name: 'Suliman Kanti', nameEn: 'Suliman Kanti', lang: 'Bambara', langNative: 'Bamanankan', langCode: 'bm' },
  { id: 796, name: 'Baba Mamady Jani', nameEn: 'Baba Mamady Jani', lang: 'Bambara', langNative: 'Bamanankan', langCode: 'bm' },

  // === Kinyarwanda ===
  { id: 774, name: 'Rwanda Muslims Association', nameEn: 'Rwanda Muslims Assoc', lang: 'Kinyarwanda', langCode: 'rw' },

  // === Telugu (తెలుగు) ===
  { id: 227, name: 'మౌలానా అబ్దెర్-రహీమ్', nameEn: 'Abder-Rahim', lang: 'Telugu', langNative: 'తెలుగు', langCode: 'te' },

  // === Marathi (मराठी) ===
  { id: 226, name: "मुहम्मद शफ़ीई अन्सारी", nameEn: "Shafi'i Ansari", lang: 'Marathi', langNative: 'मराठी', langCode: 'mr' },

  // === Gujarati (ગુજરાતી) ===
  { id: 225, name: 'રબીલા અલ-ઉમરી', nameEn: 'Rabila Al-Umry', lang: 'Gujarati', langNative: 'ગુજરાતી', langCode: 'gu' },

  // === Kannada (ಕನ್ನಡ) ===
  { id: 771, name: 'ಕನ್ನಡ ಅನುವಾದ', nameEn: 'Kannada Translation', lang: 'Kannada', langNative: 'ಕನ್ನಡ', langCode: 'kn' },

  // === Assamese (অসমীয়া) ===
  { id: 120, name: 'শায়খ রফীকুল ইসলাম', nameEn: 'Rafeequl Islam', lang: 'Assamese', langNative: 'অসমীয়া', langCode: 'as' },

  // === Nepali (नेपाली) ===
  { id: 108, name: 'अहले हदीस केन्द्रीय समिति', nameEn: 'Ahl Al-Hadith Society', lang: 'Nepali', langNative: 'नेपाली', langCode: 'ne' },

  // === Sinhala (සිංහල) ===
  { id: 228, name: 'Ruwwad Center', nameEn: 'Ruwwad Center', lang: 'Sinhala', langNative: 'සිංහල', langCode: 'si' },

  // === Divehi (ދިވެހި) ===
  { id: 86,  name: 'ރައީސް އޮފީސް', nameEn: 'Office of the President', lang: 'Divehi', langNative: 'ދިވެހި', langCode: 'dv' },
  { id: 840, name: 'އަބޫ ބަކުރު އިބްރާހީމް', nameEn: 'Abu Bakr Ibrahim Ali', lang: 'Divehi', langNative: 'ދިވެހި', langCode: 'dv' },

  // === Hebrew (עברית) ===
  { id: 233, name: 'דאר אל-סלאם', nameEn: 'Dar Al-Salam', lang: 'Hebrew', langNative: 'עברית', langCode: 'he' },

  // === Amazigh (ⵜⴰⵎⴰⵣⵉⵖⵜ) ===
  { id: 236, name: 'Ramdane At Mansour', nameEn: 'Ramdane At Mansour', lang: 'Amazigh', langNative: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', langCode: 'ber' },

  // === Yau (Yaw) ===
  { id: 798, name: 'Abdul Hamid Silika', nameEn: 'Abdul Hamid Silika', lang: 'Yau', langCode: 'yaw' },
];

/**
 * Fetch a verse from the appropriate API.
 * Most translations use Quran.com API v4 (numeric IDs).
 * Translations with `altApi` field use Al Quran Cloud API (e.g. Kanzul Iman).
 */
export async function fetchVerseForQuote(surah, ayah, translationId) {
  const transInfo = QUOTE_TRANSLATIONS.find(t => t.id === translationId);

  if (transInfo?.altApi) {
    // Fetch from Al Quran Cloud API (Arabic + translation in one call)
    const res = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani,${transInfo.altApi}`
    );
    if (!res.ok) throw new Error('Fetch failed');
    const json = await res.json();
    const editions = json.data || [];
    const arabicEdition = editions.find(e => e.edition?.identifier === 'quran-uthmani');
    const transEdition = editions.find(e => e.edition?.identifier === transInfo.altApi);
    return {
      arabic: arabicEdition?.text || '',
      translation: transEdition?.text || '',
    };
  }

  // Default: Quran.com API v4
  const res = await fetch(
    `https://api.quran.com/api/v4/verses/by_key/${surah}:${ayah}?words=false&translations=${translationId}&fields=text_uthmani`
  );
  if (!res.ok) throw new Error('Fetch failed');
  const json = await res.json();
  const arabicText = json.verse?.text_uthmani || '';
  const rawTranslation = json.verse?.translations?.[0]?.text || '';
  return {
    arabic: arabicText,
    translation: rawTranslation.replace(/<[^>]+>/g, ''),
  };
}

/**
 * Parse text containing [quran:S:A] or [quran:S:A:TID] markers into segments.
 */
export function parseQuranQuotes(text) {
  if (!text) return [];

  const segments = [];
  let lastIndex = 0;

  QURAN_QUOTE_REGEX.lastIndex = 0;

  let match;
  while ((match = QURAN_QUOTE_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: text.slice(lastIndex, match.index) });
    }

    segments.push({
      type: 'quran',
      surah: parseInt(match[1], 10),
      ayah: parseInt(match[2], 10),
      translationId: match[3] ? parseInt(match[3], 10) : 234, // default Urdu
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', content: text.slice(lastIndex) });
  }

  if (segments.length === 0 && text.length > 0) {
    segments.push({ type: 'text', content: text });
  }

  return segments;
}

/**
 * Strip [quran:S:A] or [quran:S:A:TID] markers for plain text previews.
 */
export function stripQuranQuotes(text) {
  return (text || '').replace(QURAN_QUOTE_REGEX, '(Quran $1:$2)');
}
