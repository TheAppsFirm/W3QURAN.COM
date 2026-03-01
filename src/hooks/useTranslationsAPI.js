/**
 * useTranslationsAPI Hook
 * Single Responsibility: Handle translation data and configuration
 *
 * @module hooks/useTranslationsAPI
 */

/**
 * Available Translations - Organized by Language
 * Maps translation IDs to their metadata
 */
export const TRANSLATIONS = {
  // === URDU (اردو) ===
  'ur.jalandhry': { name: 'فتح محمد جالندھری', nameEn: 'Fateh Muhammad Jalandhry', language: 'Urdu', languageNative: 'اردو' },
  'ur.maududi': { name: 'ابوالاعلیٰ مودودی', nameEn: 'Abul Ala Maududi', language: 'Urdu', languageNative: 'اردو' },
  'ur.junagarhi': { name: 'محمد جوناگڑھی', nameEn: 'Muhammad Junagarhi', language: 'Urdu', languageNative: 'اردو' },
  'ur.kanzuliman': { name: 'احمد رضا خان', nameEn: 'Ahmed Raza Khan (Kanz ul Iman)', language: 'Urdu', languageNative: 'اردو' },
  'ur.qadri': { name: 'طاہر القادری', nameEn: 'Tahir ul Qadri', language: 'Urdu', languageNative: 'اردو' },
  'ur.jawadi': { name: 'سید زیشان حیدر جوادی', nameEn: 'Syed Zeeshan Haider Jawadi', language: 'Urdu', languageNative: 'اردو' },
  'ur.ahmedali': { name: 'احمد علی', nameEn: 'Ahmed Ali (Urdu)', language: 'Urdu', languageNative: 'اردو' },
  'ur.najafi': { name: 'محمد حسین نجفی', nameEn: 'Muhammad Hussain Najafi', language: 'Urdu', languageNative: 'اردو' },

  // === ENGLISH ===
  'en.sahih': { name: 'Saheeh International', language: 'English' },
  'en.yusufali': { name: 'Abdullah Yusuf Ali', language: 'English' },
  'en.pickthall': { name: 'Muhammad Pickthall', language: 'English' },
  'en.asad': { name: 'Muhammad Asad', language: 'English' },
  'en.itani': { name: 'Clear Quran (Talal Itani)', language: 'English' },
  'en.hilali': { name: 'Hilali & Khan', language: 'English' },
  'en.maududi': { name: 'Abul Ala Maududi', language: 'English' },
  'en.shakir': { name: 'Mohammad Habib Shakir', language: 'English' },
  'en.sarwar': { name: 'Muhammad Sarwar', language: 'English' },
  'en.ahmedali': { name: 'Ahmed Ali', language: 'English' },
  'en.arberry': { name: 'A. J. Arberry', language: 'English' },
  'en.daryabadi': { name: 'Abdul Majid Daryabadi', language: 'English' },
  'en.qaribullah': { name: 'Qaribullah & Darwish', language: 'English' },
  'en.wahiduddin': { name: 'Wahiduddin Khan', language: 'English' },
  'en.ahmedraza': { name: 'Ahmed Raza Khan', language: 'English' },
  'en.qarai': { name: 'Qarai', language: 'English' },
  'en.mubarakpuri': { name: 'Mubarakpuri', language: 'English' },

  // === BENGALI (বাংলা) ===
  'bn.bengali': { name: 'মুহিউদ্দীন খান', nameEn: 'Muhiuddin Khan', language: 'Bengali', languageNative: 'বাংলা' },
  'bn.hoque': { name: 'জহুরুল হক', nameEn: 'Zohurul Hoque', language: 'Bengali', languageNative: 'বাংলা' },

  // === HINDI (हिन्दी) ===
  'hi.hindi': { name: 'षारूख़ खान & नदवी', nameEn: 'Suhel Farooq Khan', language: 'Hindi', languageNative: 'हिन्दी' },
  'hi.farooq': { name: 'षारूख़ खान & अहमद', nameEn: 'Muhammad Farooq Khan', language: 'Hindi', languageNative: 'हिन्दी' },

  // === CHINESE (中文) ===
  'zh.jian': { name: '马坚 (简体)', nameEn: 'Ma Jian (Simplified)', language: 'Chinese', languageNative: '中文' },
  'zh.majian': { name: '马坚 (繁體)', nameEn: 'Ma Jian (Traditional)', language: 'Chinese', languageNative: '中文' },
  'zh.mazhonggang': { name: '马仲刚', nameEn: 'Ma Zhong Gang', language: 'Chinese', languageNative: '中文' },

  // === JAPANESE (日本語) ===
  'ja.japanese': { name: '日本語翻訳', nameEn: 'Japanese Translation', language: 'Japanese', languageNative: '日本語' },

  // === KOREAN (한국어) ===
  'ko.korean': { name: '한국어 번역', nameEn: 'Korean Translation', language: 'Korean', languageNative: '한국어' },

  // === TURKISH (Türkçe) ===
  'tr.diyanet': { name: 'Diyanet İşleri', nameEn: 'Diyanet Isleri', language: 'Turkish', languageNative: 'Türkçe' },
  'tr.yazir': { name: 'Elmalılı Hamdi Yazır', nameEn: 'Elmalili Hamdi Yazir', language: 'Turkish', languageNative: 'Türkçe' },
  'tr.vakfi': { name: 'Diyanet Vakfı', nameEn: 'Diyanet Vakfi', language: 'Turkish', languageNative: 'Türkçe' },
  'tr.ates': { name: 'Süleyman Ateş', nameEn: 'Suleyman Ates', language: 'Turkish', languageNative: 'Türkçe' },
  'tr.bulac': { name: 'Ali Bulaç', nameEn: 'Ali Bulac', language: 'Turkish', languageNative: 'Türkçe' },
  'tr.ozturk': { name: 'Yaşar Nuri Öztürk', nameEn: 'Yasar Nuri Ozturk', language: 'Turkish', languageNative: 'Türkçe' },
  'tr.yildirim': { name: 'Suat Yıldırım', nameEn: 'Suat Yildirim', language: 'Turkish', languageNative: 'Türkçe' },
  'tr.golpinarli': { name: 'Abdülbâki Gölpınarlı', nameEn: 'Abdulbaki Golpinarli', language: 'Turkish', languageNative: 'Türkçe' },
  'tr.yuksel': { name: 'Edip Yüksel', nameEn: 'Edip Yuksel', language: 'Turkish', languageNative: 'Türkçe' },

  // === SPANISH (Español) ===
  'es.cortes': { name: 'Julio Cortés', nameEn: 'Julio Cortes', language: 'Spanish', languageNative: 'Español' },
  'es.asad': { name: 'Muhammad Asad (Abdurrasak Pérez)', nameEn: 'Asad (Perez)', language: 'Spanish', languageNative: 'Español' },
  'es.bornez': { name: 'Bornez', nameEn: 'Bornez', language: 'Spanish', languageNative: 'Español' },
  'es.garcia': { name: 'Isa García', nameEn: 'Isa Garcia', language: 'Spanish', languageNative: 'Español' },

  // === FRENCH (Français) ===
  'fr.hamidullah': { name: 'Muhammad Hamidullah', nameEn: 'Muhammad Hamidullah', language: 'French', languageNative: 'Français' },

  // === GERMAN (Deutsch) ===
  'de.bubenheim': { name: 'Bubenheim & Elyas', nameEn: 'Bubenheim & Elyas', language: 'German', languageNative: 'Deutsch' },
  'de.aburida': { name: 'Abu Rida', nameEn: 'Abu Rida Muhammad ibn Ahmad', language: 'German', languageNative: 'Deutsch' },
  'de.khoury': { name: 'Adel Theodor Khoury', nameEn: 'Khoury', language: 'German', languageNative: 'Deutsch' },
  'de.zaidan': { name: 'Amir Zaidan', nameEn: 'Zaidan', language: 'German', languageNative: 'Deutsch' },

  // === PORTUGUESE (Português) ===
  'pt.elhayek': { name: 'Samir El-Hayek', nameEn: 'Samir El-Hayek', language: 'Portuguese', languageNative: 'Português' },

  // === ITALIAN (Italiano) ===
  'it.piccardo': { name: 'Hamza Roberto Piccardo', nameEn: 'Piccardo', language: 'Italian', languageNative: 'Italiano' },

  // === DUTCH (Nederlands) ===
  'nl.keyzer': { name: 'Salomo Keyzer', nameEn: 'Keyzer', language: 'Dutch', languageNative: 'Nederlands' },
  'nl.leemhuis': { name: 'Leemhuis', nameEn: 'Leemhuis', language: 'Dutch', languageNative: 'Nederlands' },
  'nl.siregar': { name: 'Sofian S. Siregar', nameEn: 'Siregar', language: 'Dutch', languageNative: 'Nederlands' },

  // === INDONESIAN (Bahasa Indonesia) ===
  'id.indonesian': { name: 'Kementerian Agama', nameEn: 'Indonesian Ministry', language: 'Indonesian', languageNative: 'Bahasa Indonesia' },
  'id.muntakhab': { name: 'Quraish Shihab', nameEn: 'Quraish Shihab', language: 'Indonesian', languageNative: 'Bahasa Indonesia' },

  // === RUSSIAN (Русский) ===
  'ru.kuliev': { name: 'Эльмир Кулиев', nameEn: 'Elmir Kuliev', language: 'Russian', languageNative: 'Русский' },
  'ru.osmanov': { name: 'Магомед-Нури Османов', nameEn: 'Osmanov', language: 'Russian', languageNative: 'Русский' },
  'ru.porokhova': { name: 'Порохова', nameEn: 'Porokhova', language: 'Russian', languageNative: 'Русский' },
  'ru.abuadel': { name: 'Абу Адель', nameEn: 'Abu Adel', language: 'Russian', languageNative: 'Русский' },
  'ru.krachkovsky': { name: 'Крачковский', nameEn: 'Krachkovsky', language: 'Russian', languageNative: 'Русский' },
  'ru.muntahab': { name: 'Аль-Мунтахаб', nameEn: 'Al-Muntahab', language: 'Russian', languageNative: 'Русский' },
  'ru.sablukov': { name: 'Саблуков', nameEn: 'Sablukov', language: 'Russian', languageNative: 'Русский' },

  // === PERSIAN (فارسی) ===
  'fa.ayati': { name: 'آیتی', nameEn: 'AbdolMohammad Ayati', language: 'Persian', languageNative: 'فارسی' },
  'fa.fooladvand': { name: 'فولادوند', nameEn: 'Fooladvand', language: 'Persian', languageNative: 'فارسی' },
  'fa.ghomshei': { name: 'الهی قمشهای', nameEn: 'Elahi Ghomshei', language: 'Persian', languageNative: 'فارسی' },
  'fa.makarem': { name: 'مکارم شیرازی', nameEn: 'Makarem Shirazi', language: 'Persian', languageNative: 'فارسی' },
  'fa.ansarian': { name: 'انصاریان', nameEn: 'Ansarian', language: 'Persian', languageNative: 'فارسی' },
  'fa.bahrampour': { name: 'بهرام پور', nameEn: 'Bahrampour', language: 'Persian', languageNative: 'فارسی' },
  'fa.khorramshahi': { name: 'خرمشاهی', nameEn: 'Khorramshahi', language: 'Persian', languageNative: 'فارسی' },
  'fa.mojtabavi': { name: 'مجتبوی', nameEn: 'Mojtabavi', language: 'Persian', languageNative: 'فارسی' },
  'fa.khorramdel': { name: 'خرمدل', nameEn: 'Khorramdel', language: 'Persian', languageNative: 'فارسی' },
  'fa.moezzi': { name: 'معزی', nameEn: 'Moezzi', language: 'Persian', languageNative: 'فارسی' },
  'fa.gharaati': { name: 'قرائتی', nameEn: 'Gharaati', language: 'Persian', languageNative: 'فارسی' },
  'fa.sadeqi': { name: 'صادقی تهرانی', nameEn: 'Sadeqi Tehrani', language: 'Persian', languageNative: 'فارسی' },
  'fa.safavi': { name: 'صفوی', nameEn: 'Safavi', language: 'Persian', languageNative: 'فارسی' },

  // === MALAY (Bahasa Melayu) ===
  'ms.basmeih': { name: 'Abdullah Basmeih', nameEn: 'Basmeih', language: 'Malay', languageNative: 'Bahasa Melayu' },

  // === MALAYALAM (മലയാളം) ===
  'ml.abdulhameed': { name: 'അബ്ദുൽ ഹമീദ് & പറപ്പൂർ', nameEn: 'Abdul Hameed & Parappoor', language: 'Malayalam', languageNative: 'മലയാളം' },
  'ml.karakunnu': { name: 'കാരകുന്ന് & എളയാവൂർ', nameEn: 'Karakunnu & Elayavoor', language: 'Malayalam', languageNative: 'മലയാളം' },

  // === TAMIL (தமிழ்) ===
  'ta.tamil': { name: 'Jan Trust Foundation', nameEn: 'Jan Trust Foundation', language: 'Tamil', languageNative: 'தமிழ்' },

  // === PASHTO (پښتو) ===
  'ps.abdulwali': { name: 'عبدالولی', nameEn: 'Abdulwali', language: 'Pashto', languageNative: 'پښتو' },

  // === KURDISH (کوردی) ===
  'ku.asan': { name: 'تهفسیری ئاسان', nameEn: 'Burhan Muhammad-Amin', language: 'Kurdish', languageNative: 'کوردی' },

  // === SINDHI (سنڌي) ===
  'sd.amroti': { name: 'تاج محمود امروٹی', nameEn: 'Taj Mehmood Amroti', language: 'Sindhi', languageNative: 'سنڌي' },

  // === UYGHUR (ئۇيغۇرچە) ===
  'ug.saleh': { name: 'محمد صالح', nameEn: 'Muhammad Saleh', language: 'Uyghur', languageNative: 'ئۇيغۇرچە' },

  // === AZERBAIJANI (Azərbaycan) ===
  'az.mammadaliyev': { name: 'Məmmədəliyev & Bünyədov', nameEn: 'Mammadaliyev & Bunyadov', language: 'Azerbaijani', languageNative: 'Azərbaycan' },
  'az.musayev': { name: 'Alikhan Musayev', nameEn: 'Musayev', language: 'Azerbaijani', languageNative: 'Azərbaycan' },

  // === UZBEK (O'zbek) ===
  'uz.sodik': { name: 'Мухаммад Содик', nameEn: 'Muhammad Sodik', language: 'Uzbek', languageNative: "O'zbek" },

  // === TAJIK (Тоҷикӣ) ===
  'tg.ayati': { name: 'Оятӣ', nameEn: 'AbdolMohammad Ayati', language: 'Tajik', languageNative: 'Тоҷикӣ' },

  // === TATAR (Татарча) ===
  'tt.nugman': { name: 'Yakub Ibn Nugman', nameEn: 'Yakub Ibn Nugman', language: 'Tatar', languageNative: 'Татарча' },

  // === CHECHEN (Нохчийн) ===
  'ce.magomedov': { name: 'Магомед Магомедов', nameEn: 'Magomedov', language: 'Chechen', languageNative: 'Нохчийн' },

  // === BOSNIAN (Bosanski) ===
  'bs.mlivo': { name: 'Mustafa Mlivo', nameEn: 'Mlivo', language: 'Bosnian', languageNative: 'Bosanski' },
  'bs.korkut': { name: 'Besim Korkut', nameEn: 'Korkut', language: 'Bosnian', languageNative: 'Bosanski' },

  // === ALBANIAN (Shqip) ===
  'sq.ahmeti': { name: 'Sherif Ahmeti', nameEn: 'Sherif Ahmeti', language: 'Albanian', languageNative: 'Shqip' },
  'sq.mehdiu': { name: 'Feti Mehdiu', nameEn: 'Feti Mehdiu', language: 'Albanian', languageNative: 'Shqip' },
  'sq.nahi': { name: 'Hasan Efendi Nahi', nameEn: 'Hasan Nahi', language: 'Albanian', languageNative: 'Shqip' },

  // === ROMANIAN (Română) ===
  'ro.grigore': { name: 'George Grigore', nameEn: 'Grigore', language: 'Romanian', languageNative: 'Română' },

  // === BULGARIAN (Български) ===
  'bg.theophanov': { name: 'Цветан Теофанов', nameEn: 'Theophanov', language: 'Bulgarian', languageNative: 'Български' },

  // === POLISH (Polski) ===
  'pl.bielawskiego': { name: 'Józef Bielawski', nameEn: 'Bielawski', language: 'Polish', languageNative: 'Polski' },

  // === CZECH (Čeština) ===
  'cs.hrbek': { name: 'I. Hrbek', nameEn: 'Hrbek', language: 'Czech', languageNative: 'Čeština' },
  'cs.nykl': { name: 'A. R. Nykl', nameEn: 'Nykl', language: 'Czech', languageNative: 'Čeština' },

  // === SWEDISH (Svenska) ===
  'sv.bernstrom': { name: 'Knut Bernström', nameEn: 'Bernstrom', language: 'Swedish', languageNative: 'Svenska' },

  // === NORWEGIAN (Norsk) ===
  'no.berg': { name: 'Einar Berg', nameEn: 'Einar Berg', language: 'Norwegian', languageNative: 'Norsk' },

  // === THAI (ไทย) ===
  'th.thai': { name: 'ภาษาไทย', nameEn: 'King Fahad Quran Complex', language: 'Thai', languageNative: 'ไทย' },

  // === DIVEHI (ދިވެހި) ===
  'dv.divehi': { name: 'ދިވެހި', nameEn: 'Office of the President', language: 'Divehi', languageNative: 'ދިވެހި' },

  // === BURMESE (မြန်မာ) ===
  'my.ghazi': { name: 'Ghazi Muhammad Hashim', nameEn: 'Ghazi Muhammad Hashim', language: 'Burmese', languageNative: 'မြန်မာ' },

  // === SWAHILI (Kiswahili) ===
  'sw.barwani': { name: 'Ali Muhsin Al-Barwani', nameEn: 'Al-Barwani', language: 'Swahili', languageNative: 'Kiswahili' },

  // === HAUSA ===
  'ha.gumi': { name: 'Abubakar Mahmoud Gumi', nameEn: 'Abubakar Gumi', language: 'Hausa' },

  // === SOMALI (Soomaali) ===
  'so.abduh': { name: 'Mahmud Muhammad Abduh', nameEn: 'Mahmud Abduh', language: 'Somali', languageNative: 'Soomaali' },

  // === AMHARIC (አማርኛ) ===
  'am.sadiq': { name: 'ሳድቅ & ሳኒ ሐቢብ', nameEn: 'Sadiq & Sani', language: 'Amharic', languageNative: 'አማርኛ' },

  // === SINHALA (සිංහල) ===
  'si.naseemismail': { name: 'Naseem Ismail', nameEn: 'Naseem Ismail', language: 'Sinhala', languageNative: 'සිංහල' },

  // === AMAZIGH (ⵜⴰⵎⴰⵣⵉⵖⵜ) ===
  'ber.mensur': { name: 'At Mensur', nameEn: 'At Mensur', language: 'Amazigh', languageNative: 'ⵜⴰⵎⴰⵣⵉⵖⵜ' },
};

/**
 * Map translation IDs to word translation language codes
 * Used for word-by-word translations
 */
export const WORD_TRANSLATION_LANGUAGES = {
  // Urdu translations
  'ur.jalandhry': 'ur', 'ur.maududi': 'ur', 'ur.junagarhi': 'ur',
  'ur.kanzuliman': 'ur', 'ur.qadri': 'ur', 'ur.jawadi': 'ur',
  'ur.ahmedali': 'ur', 'ur.najafi': 'ur',
  // English translations
  'en.sahih': 'en', 'en.yusufali': 'en', 'en.pickthall': 'en',
  'en.asad': 'en', 'en.itani': 'en', 'en.hilali': 'en',
  'en.maududi': 'en', 'en.shakir': 'en', 'en.sarwar': 'en',
  'en.ahmedali': 'en', 'en.arberry': 'en', 'en.daryabadi': 'en',
  'en.qaribullah': 'en', 'en.wahiduddin': 'en', 'en.ahmedraza': 'en',
  'en.qarai': 'en', 'en.mubarakpuri': 'en',
  // Bengali
  'bn.bengali': 'bn', 'bn.hoque': 'bn',
  // Hindi
  'hi.hindi': 'hi', 'hi.farooq': 'hi',
  // Languages with QuranWBW support
  'fr.hamidullah': 'fr', 'de.bubenheim': 'de', 'de.aburida': 'de',
  'de.khoury': 'de', 'de.zaidan': 'de',
  'id.indonesian': 'id', 'id.muntakhab': 'id',
  'tr.diyanet': 'tr', 'tr.yazir': 'tr', 'tr.vakfi': 'tr',
  'tr.ates': 'tr', 'tr.bulac': 'tr', 'tr.ozturk': 'tr',
  'tr.yildirim': 'tr', 'tr.golpinarli': 'tr', 'tr.yuksel': 'tr',
  'ta.tamil': 'ta',
  // Fallback to English for others
  'ru.kuliev': 'en', 'ru.osmanov': 'en', 'ru.porokhova': 'en',
  'ru.abuadel': 'en', 'ru.krachkovsky': 'en', 'ru.muntahab': 'en', 'ru.sablukov': 'en',
  'ml.abdulhameed': 'en', 'ml.karakunnu': 'en',
  'ms.basmeih': 'en',
  'fa.ayati': 'en', 'fa.fooladvand': 'en', 'fa.ghomshei': 'en',
  'fa.makarem': 'en', 'fa.ansarian': 'en', 'fa.bahrampour': 'en',
  'fa.khorramshahi': 'en', 'fa.mojtabavi': 'en', 'fa.khorramdel': 'en',
  'fa.moezzi': 'en', 'fa.gharaati': 'en', 'fa.sadeqi': 'en', 'fa.safavi': 'en',
  'zh.jian': 'en', 'zh.majian': 'en', 'zh.mazhonggang': 'en',
  'ja.japanese': 'en', 'ko.korean': 'en',
  'es.cortes': 'en', 'es.asad': 'en', 'es.bornez': 'en', 'es.garcia': 'en',
  'pt.elhayek': 'en', 'it.piccardo': 'en',
  'nl.keyzer': 'en', 'nl.leemhuis': 'en', 'nl.siregar': 'en',
  'ps.abdulwali': 'en', 'ku.asan': 'en', 'sd.amroti': 'en', 'ug.saleh': 'en',
  'az.mammadaliyev': 'en', 'az.musayev': 'en', 'uz.sodik': 'en',
  'tg.ayati': 'en', 'tt.nugman': 'en', 'ce.magomedov': 'en',
  'bs.mlivo': 'en', 'bs.korkut': 'en',
  'sq.ahmeti': 'en', 'sq.mehdiu': 'en', 'sq.nahi': 'en',
  'ro.grigore': 'en', 'bg.theophanov': 'en',
  'pl.bielawskiego': 'en', 'cs.hrbek': 'en', 'cs.nykl': 'en',
  'sv.bernstrom': 'en', 'no.berg': 'en', 'th.thai': 'en',
  'dv.divehi': 'en', 'my.ghazi': 'en',
  'sw.barwani': 'en', 'ha.gumi': 'en', 'so.abduh': 'en',
  'am.sadiq': 'en', 'si.naseemismail': 'en', 'ber.mensur': 'en',
};

/**
 * Get list of available translations as array
 *
 * @returns {Array<Object>} - Array of translation objects with id and metadata
 *
 * @example
 * const translations = getAvailableTranslations();
 * // [{ id: 'en.sahih', name: 'Saheeh International', language: 'English' }, ...]
 */
export function getAvailableTranslations() {
  return Object.entries(TRANSLATIONS).map(([id, info]) => ({
    id,
    ...info,
  }));
}

/**
 * Get translations grouped by language
 *
 * @returns {Object} - Translations grouped by language code
 *
 * @example
 * const grouped = getTranslationsByLanguage();
 * // { Urdu: [...], English: [...], ... }
 */
export function getTranslationsByLanguage() {
  const grouped = {};

  Object.entries(TRANSLATIONS).forEach(([id, info]) => {
    const lang = info.language;
    if (!grouped[lang]) {
      grouped[lang] = [];
    }
    grouped[lang].push({ id, ...info });
  });

  return grouped;
}

/**
 * Get translation info by ID
 *
 * @param {string} translationId - Translation ID
 * @returns {Object|null} - Translation metadata or null if not found
 *
 * @example
 * const info = getTranslationInfo('ur.jalandhry');
 * // { name: 'فتح محمد جالندھری', nameEn: 'Fateh Muhammad Jalandhry', language: 'Urdu', ... }
 */
export function getTranslationInfo(translationId) {
  return TRANSLATIONS[translationId] || null;
}

/**
 * Get the language code for word-by-word translations
 *
 * @param {string} translationId - Translation ID
 * @returns {string} - Language code (defaults to 'en')
 *
 * @example
 * const lang = getWordLanguage('ur.jalandhry'); // 'ur'
 * const lang = getWordLanguage('unknown'); // 'en'
 */
export function getWordLanguage(translationId) {
  return WORD_TRANSLATION_LANGUAGES[translationId] || 'en';
}

/**
 * Check if a translation ID is valid
 *
 * @param {string} translationId - Translation ID to check
 * @returns {boolean} - True if translation exists
 */
export function isValidTranslation(translationId) {
  return translationId in TRANSLATIONS;
}

/**
 * Get all Urdu translations
 *
 * @returns {Array<Object>} - Array of Urdu translation objects
 */
export function getUrduTranslations() {
  return getAvailableTranslations().filter(t => t.language === 'Urdu');
}

/**
 * Get all English translations
 *
 * @returns {Array<Object>} - Array of English translation objects
 */
export function getEnglishTranslations() {
  return getAvailableTranslations().filter(t => t.language === 'English');
}

export default {
  TRANSLATIONS,
  WORD_TRANSLATION_LANGUAGES,
  getAvailableTranslations,
  getTranslationsByLanguage,
  getTranslationInfo,
  getWordLanguage,
  isValidTranslation,
  getUrduTranslations,
  getEnglishTranslations,
};
