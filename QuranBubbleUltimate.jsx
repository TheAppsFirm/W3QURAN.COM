import React, { useState, useMemo, useCallback, memo, useEffect, useRef, Component, Suspense } from 'react';

// ============================================================================
// ERROR BOUNDARY
// ============================================================================

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ============================================================================
// LOADING SPINNER
// ============================================================================

const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 flex items-center justify-center">
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-purple-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-emerald-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
      </div>
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  </div>
);

// ============================================================================
// QURAN DATA
// ============================================================================

const SURAHS = [
  { id: 1, name: 'Al-Fatiha', arabic: 'الفاتحة', ayahs: 7, type: 'Makki', meaning: 'The Opening', reason: 'Called "The Opening" because it opens the Quran and every prayer. It contains praise, worship, and supplication.', topics: ['prayer', 'faith', 'guidance'], chronOrder: 5 },
  { id: 2, name: 'Al-Baqarah', arabic: 'البقرة', ayahs: 286, type: 'Madani', meaning: 'The Cow', reason: 'Named after the story of the cow that Bani Israel were commanded to sacrifice (verses 67-73).', topics: ['law', 'faith', 'stories', 'fasting'], chronOrder: 87 },
  { id: 3, name: 'Al-Imran', arabic: 'آل عمران', ayahs: 200, type: 'Madani', meaning: 'Family of Imran', reason: 'Named after the family of Imran, father of Maryam (Mary), mother of Prophet Isa (Jesus).', topics: ['prophets', 'faith', 'stories'], chronOrder: 89 },
  { id: 4, name: 'An-Nisa', arabic: 'النساء', ayahs: 176, type: 'Madani', meaning: 'The Women', reason: 'Contains many rulings concerning women, marriage, inheritance, and family law.', topics: ['women', 'law', 'family', 'inheritance'], chronOrder: 92 },
  { id: 5, name: 'Al-Maidah', arabic: 'المائدة', ayahs: 120, type: 'Madani', meaning: 'The Table Spread', reason: 'Named after the story where disciples of Isa asked for a table spread from heaven (verse 112-115).', topics: ['law', 'food', 'prophets', 'covenant'], chronOrder: 112 },
  { id: 6, name: 'Al-Anam', arabic: 'الأنعام', ayahs: 165, type: 'Makki', meaning: 'The Cattle', reason: 'Discusses cattle and livestock that pagans wrongly dedicated to idols (verses 136-139).', topics: ['tawhid', 'prophets', 'faith'], chronOrder: 55 },
  { id: 7, name: 'Al-Araf', arabic: 'الأعراف', ayahs: 206, type: 'Makki', meaning: 'The Heights', reason: 'Named after Al-Araf, the elevated place between Paradise and Hell mentioned in verses 46-49.', topics: ['stories', 'prophets', 'day of judgment'], chronOrder: 39 },
  { id: 8, name: 'Al-Anfal', arabic: 'الأنفال', ayahs: 75, type: 'Madani', meaning: 'The Spoils of War', reason: 'Revealed after Battle of Badr, addressing distribution of war spoils.', topics: ['jihad', 'war', 'victory'], chronOrder: 88 },
  { id: 9, name: 'At-Tawbah', arabic: 'التوبة', ayahs: 129, type: 'Madani', meaning: 'The Repentance', reason: 'Called "Repentance" as it discusses sincere repentance and disassociation from polytheists.', topics: ['repentance', 'jihad', 'hypocrites'], chronOrder: 113 },
  { id: 10, name: 'Yunus', arabic: 'يونس', ayahs: 109, type: 'Makki', meaning: 'Jonah', reason: 'Named after Prophet Yunus (Jonah) mentioned in verse 98.', topics: ['prophets', 'faith', 'patience'], chronOrder: 51 },
  { id: 11, name: 'Hud', arabic: 'هود', ayahs: 123, type: 'Makki', meaning: 'Hud', reason: 'Named after Prophet Hud sent to the people of Ad.', topics: ['prophets', 'stories', 'patience'], chronOrder: 52 },
  { id: 12, name: 'Yusuf', arabic: 'يوسف', ayahs: 111, type: 'Makki', meaning: 'Joseph', reason: 'Entirely devoted to the beautiful story of Prophet Yusuf (Joseph).', topics: ['prophets', 'stories', 'patience', 'family'], chronOrder: 53 },
  { id: 13, name: 'Ar-Rad', arabic: 'الرعد', ayahs: 43, type: 'Madani', meaning: 'The Thunder', reason: 'Named after thunder mentioned in verse 13, glorifying Allah.', topics: ['nature', 'faith', 'signs'], chronOrder: 96 },
  { id: 14, name: 'Ibrahim', arabic: 'إبراهيم', ayahs: 52, type: 'Makki', meaning: 'Abraham', reason: 'Features the supplication of Prophet Ibrahim for Makkah and his family.', topics: ['prophets', 'prayer', 'gratitude'], chronOrder: 72 },
  { id: 15, name: 'Al-Hijr', arabic: 'الحجر', ayahs: 99, type: 'Makki', meaning: 'The Rocky Tract', reason: 'Named after the rocky region where the people of Thamud lived.', topics: ['prophets', 'stories', 'quran'], chronOrder: 54 },
  { id: 16, name: 'An-Nahl', arabic: 'النحل', ayahs: 128, type: 'Makki', meaning: 'The Bee', reason: 'Named after bees mentioned in verses 68-69 as signs of Allah\'s wisdom.', topics: ['nature', 'signs', 'gratitude', 'blessings'], chronOrder: 70 },
  { id: 17, name: 'Al-Isra', arabic: 'الإسراء', ayahs: 111, type: 'Makki', meaning: 'The Night Journey', reason: 'Opens with the miraculous night journey of Prophet Muhammad from Makkah to Jerusalem.', topics: ['prophets', 'miracles', 'ethics'], chronOrder: 50 },
  { id: 18, name: 'Al-Kahf', arabic: 'الكهف', ayahs: 110, type: 'Makki', meaning: 'The Cave', reason: 'Named after the story of the Sleepers of the Cave (Ashab al-Kahf).', topics: ['stories', 'faith', 'trials', 'friday'], chronOrder: 69 },
  { id: 19, name: 'Maryam', arabic: 'مريم', ayahs: 98, type: 'Makki', meaning: 'Mary', reason: 'Named after Maryam (Mary), mother of Prophet Isa, honoring her purity.', topics: ['prophets', 'women', 'miracles', 'family'], chronOrder: 44 },
  { id: 20, name: 'Ta-Ha', arabic: 'طه', ayahs: 135, type: 'Makki', meaning: 'Ta-Ha', reason: 'Named after the Arabic letters Ta-Ha, one of the names of Prophet Muhammad.', topics: ['prophets', 'stories', 'musa'], chronOrder: 45 },
  { id: 21, name: 'Al-Anbiya', arabic: 'الأنبياء', ayahs: 112, type: 'Makki', meaning: 'The Prophets', reason: 'Contains stories and mentions of many prophets in sequence.', topics: ['prophets', 'stories', 'day of judgment'], chronOrder: 73 },
  { id: 22, name: 'Al-Hajj', arabic: 'الحج', ayahs: 78, type: 'Madani', meaning: 'The Pilgrimage', reason: 'Contains detailed rulings and virtues of Hajj pilgrimage.', topics: ['hajj', 'worship', 'sacrifice'], chronOrder: 103 },
  { id: 23, name: 'Al-Muminun', arabic: 'المؤمنون', ayahs: 118, type: 'Makki', meaning: 'The Believers', reason: 'Opens with characteristics of successful believers.', topics: ['faith', 'character', 'success'], chronOrder: 74 },
  { id: 24, name: 'An-Nur', arabic: 'النور', ayahs: 64, type: 'Madani', meaning: 'The Light', reason: 'Contains the famous "Light Verse" (35) describing Allah as the Light of heavens and earth.', topics: ['law', 'modesty', 'family', 'light'], chronOrder: 102 },
  { id: 25, name: 'Al-Furqan', arabic: 'الفرقان', ayahs: 77, type: 'Makki', meaning: 'The Criterion', reason: 'Named after the Quran as the criterion between truth and falsehood.', topics: ['quran', 'faith', 'character'], chronOrder: 42 },
  { id: 26, name: 'Ash-Shuara', arabic: 'الشعراء', ayahs: 227, type: 'Makki', meaning: 'The Poets', reason: 'Ends with discussion of poets and contrasts them with believers.', topics: ['prophets', 'stories', 'poetry'], chronOrder: 47 },
  { id: 27, name: 'An-Naml', arabic: 'النمل', ayahs: 93, type: 'Makki', meaning: 'The Ant', reason: 'Named after the ant that warned its colony of Sulayman\'s army (verse 18).', topics: ['prophets', 'stories', 'sulayman'], chronOrder: 48 },
  { id: 28, name: 'Al-Qasas', arabic: 'القصص', ayahs: 88, type: 'Makki', meaning: 'The Stories', reason: 'Contains detailed stories, especially of Prophet Musa from birth to prophethood.', topics: ['prophets', 'stories', 'musa'], chronOrder: 49 },
  { id: 29, name: 'Al-Ankabut', arabic: 'العنكبوت', ayahs: 69, type: 'Makki', meaning: 'The Spider', reason: 'Compares false gods to a spider\'s web - fragile and weak (verse 41).', topics: ['faith', 'trials', 'parables'], chronOrder: 85 },
  { id: 30, name: 'Ar-Rum', arabic: 'الروم', ayahs: 60, type: 'Makki', meaning: 'The Romans', reason: 'Prophesied the Roman victory over Persians, which came true.', topics: ['prophecy', 'signs', 'history'], chronOrder: 84 },
  { id: 31, name: 'Luqman', arabic: 'لقمان', ayahs: 34, type: 'Makki', meaning: 'Luqman', reason: 'Named after the wise man Luqman and his advice to his son.', topics: ['wisdom', 'parenting', 'faith'], chronOrder: 57 },
  { id: 32, name: 'As-Sajdah', arabic: 'السجدة', ayahs: 30, type: 'Makki', meaning: 'The Prostration', reason: 'Contains a verse of prostration (verse 15).', topics: ['faith', 'creation', 'prostration'], chronOrder: 75 },
  { id: 33, name: 'Al-Ahzab', arabic: 'الأحزاب', ayahs: 73, type: 'Madani', meaning: 'The Confederates', reason: 'Discusses the Battle of the Trench when confederate armies attacked Madinah.', topics: ['war', 'prophets', 'women', 'hijab'], chronOrder: 90 },
  { id: 34, name: 'Saba', arabic: 'سبأ', ayahs: 54, type: 'Makki', meaning: 'Sheba', reason: 'Named after the ancient kingdom of Saba (Sheba) in Yemen.', topics: ['stories', 'gratitude', 'history'], chronOrder: 58 },
  { id: 35, name: 'Fatir', arabic: 'فاطر', ayahs: 45, type: 'Makki', meaning: 'The Originator', reason: 'Named after Allah as the Originator of heavens and earth.', topics: ['creation', 'angels', 'tawhid'], chronOrder: 43 },
  { id: 36, name: 'Ya-Sin', arabic: 'يس', ayahs: 83, type: 'Makki', meaning: 'Ya-Sin', reason: 'Called the "Heart of the Quran" due to its powerful themes of resurrection and faith.', topics: ['resurrection', 'faith', 'prophets'], chronOrder: 41 },
  { id: 37, name: 'As-Saffat', arabic: 'الصافات', ayahs: 182, type: 'Makki', meaning: 'Those Ranged in Ranks', reason: 'Opens with oath by angels standing in rows.', topics: ['angels', 'prophets', 'day of judgment'], chronOrder: 56 },
  { id: 38, name: 'Sad', arabic: 'ص', ayahs: 88, type: 'Makki', meaning: 'Sad', reason: 'Named after the Arabic letter Sad, emphasizing the Quran\'s miraculous nature.', topics: ['prophets', 'dawud', 'stories'], chronOrder: 38 },
  { id: 39, name: 'Az-Zumar', arabic: 'الزمر', ayahs: 75, type: 'Makki', meaning: 'The Groups', reason: 'Describes groups of people being driven to Paradise and Hell.', topics: ['day of judgment', 'tawhid', 'sincerity'], chronOrder: 59 },
  { id: 40, name: 'Ghafir', arabic: 'غافر', ayahs: 85, type: 'Makki', meaning: 'The Forgiver', reason: 'Named after Allah\'s attribute of forgiving sins.', topics: ['forgiveness', 'stories', 'pharaoh'], chronOrder: 60 },
  { id: 41, name: 'Fussilat', arabic: 'فصلت', ayahs: 54, type: 'Makki', meaning: 'Explained in Detail', reason: 'Refers to the Quran being explained in detail.', topics: ['quran', 'creation', 'faith'], chronOrder: 61 },
  { id: 42, name: 'Ash-Shura', arabic: 'الشورى', ayahs: 53, type: 'Makki', meaning: 'The Consultation', reason: 'Highlights the importance of mutual consultation (shura) in affairs.', topics: ['consultation', 'governance', 'faith'], chronOrder: 62 },
  { id: 43, name: 'Az-Zukhruf', arabic: 'الزخرف', ayahs: 89, type: 'Makki', meaning: 'The Gold Ornaments', reason: 'Mentions gold ornaments as worldly attractions that should not deceive.', topics: ['worldly life', 'tawhid', 'prophets'], chronOrder: 63 },
  { id: 44, name: 'Ad-Dukhan', arabic: 'الدخان', ayahs: 59, type: 'Makki', meaning: 'The Smoke', reason: 'Mentions smoke as a sign before Day of Judgment.', topics: ['day of judgment', 'signs', 'pharaoh'], chronOrder: 64 },
  { id: 45, name: 'Al-Jathiyah', arabic: 'الجاثية', ayahs: 37, type: 'Makki', meaning: 'The Kneeling', reason: 'Describes nations kneeling on Day of Judgment.', topics: ['day of judgment', 'signs', 'faith'], chronOrder: 65 },
  { id: 46, name: 'Al-Ahqaf', arabic: 'الأحقاف', ayahs: 35, type: 'Makki', meaning: 'The Wind-Curved Sandhills', reason: 'Named after the sand dunes where people of Ad lived.', topics: ['prophets', 'stories', 'jinn'], chronOrder: 66 },
  { id: 47, name: 'Muhammad', arabic: 'محمد', ayahs: 38, type: 'Madani', meaning: 'Muhammad', reason: 'Named after Prophet Muhammad, the final messenger.', topics: ['prophets', 'jihad', 'faith'], chronOrder: 95 },
  { id: 48, name: 'Al-Fath', arabic: 'الفتح', ayahs: 29, type: 'Madani', meaning: 'The Victory', reason: 'Revealed after the Treaty of Hudaybiyyah, called a "clear victory."', topics: ['victory', 'peace', 'prophets'], chronOrder: 111 },
  { id: 49, name: 'Al-Hujurat', arabic: 'الحجرات', ayahs: 18, type: 'Madani', meaning: 'The Private Chambers', reason: 'Named after the private rooms of Prophet\'s wives, teaching respect and manners.', topics: ['manners', 'brotherhood', 'respect'], chronOrder: 106 },
  { id: 50, name: 'Qaf', arabic: 'ق', ayahs: 45, type: 'Makki', meaning: 'Qaf', reason: 'Named after the Arabic letter Qaf, emphasizing resurrection.', topics: ['resurrection', 'creation', 'death'], chronOrder: 34 },
  { id: 51, name: 'Adh-Dhariyat', arabic: 'الذاريات', ayahs: 60, type: 'Makki', meaning: 'The Scattering Winds', reason: 'Opens with oath by winds that scatter dust.', topics: ['nature', 'signs', 'prophets'], chronOrder: 67 },
  { id: 52, name: 'At-Tur', arabic: 'الطور', ayahs: 49, type: 'Makki', meaning: 'The Mount', reason: 'Named after Mount Sinai where Musa received revelation.', topics: ['nature', 'day of judgment', 'paradise'], chronOrder: 76 },
  { id: 53, name: 'An-Najm', arabic: 'النجم', ayahs: 62, type: 'Makki', meaning: 'The Star', reason: 'Opens with oath by the star when it descends.', topics: ['revelation', 'miraj', 'tawhid'], chronOrder: 23 },
  { id: 54, name: 'Al-Qamar', arabic: 'القمر', ayahs: 55, type: 'Makki', meaning: 'The Moon', reason: 'Mentions the splitting of the moon as a miracle.', topics: ['miracles', 'stories', 'warnings'], chronOrder: 37 },
  { id: 55, name: 'Ar-Rahman', arabic: 'الرحمن', ayahs: 78, type: 'Madani', meaning: 'The Most Merciful', reason: 'Entirely devoted to Allah\'s mercy and blessings on creation.', topics: ['mercy', 'blessings', 'paradise', 'hell'], chronOrder: 97 },
  { id: 56, name: 'Al-Waqiah', arabic: 'الواقعة', ayahs: 96, type: 'Makki', meaning: 'The Inevitable Event', reason: 'Named after the inevitable Day of Judgment.', topics: ['day of judgment', 'paradise', 'hell'], chronOrder: 46 },
  { id: 57, name: 'Al-Hadid', arabic: 'الحديد', ayahs: 29, type: 'Madani', meaning: 'The Iron', reason: 'Mentions iron as a blessing sent down with great benefits.', topics: ['faith', 'spending', 'nature'], chronOrder: 94 },
  { id: 58, name: 'Al-Mujadila', arabic: 'المجادلة', ayahs: 22, type: 'Madani', meaning: 'The Pleading Woman', reason: 'Named after the woman who argued with the Prophet about her husband.', topics: ['women', 'law', 'social'], chronOrder: 105 },
  { id: 59, name: 'Al-Hashr', arabic: 'الحشر', ayahs: 24, type: 'Madani', meaning: 'The Gathering', reason: 'Discusses the gathering/exile of Banu Nadir tribe.', topics: ['history', 'names of allah', 'brotherhood'], chronOrder: 101 },
  { id: 60, name: 'Al-Mumtahanah', arabic: 'الممتحنة', ayahs: 13, type: 'Madani', meaning: 'The Examined Woman', reason: 'About examining women who migrated regarding their faith.', topics: ['women', 'migration', 'faith'], chronOrder: 91 },
  { id: 61, name: 'As-Saff', arabic: 'الصف', ayahs: 14, type: 'Madani', meaning: 'The Row', reason: 'Praises those who fight in Allah\'s cause in solid rows.', topics: ['jihad', 'unity', 'prophets'], chronOrder: 109 },
  { id: 62, name: 'Al-Jumuah', arabic: 'الجمعة', ayahs: 11, type: 'Madani', meaning: 'Friday', reason: 'Contains commandment for Friday congregational prayer.', topics: ['friday', 'prayer', 'worship'], chronOrder: 110 },
  { id: 63, name: 'Al-Munafiqun', arabic: 'المنافقون', ayahs: 11, type: 'Madani', meaning: 'The Hypocrites', reason: 'Exposes characteristics and dangers of hypocrites.', topics: ['hypocrites', 'faith', 'warnings'], chronOrder: 104 },
  { id: 64, name: 'At-Taghabun', arabic: 'التغابن', ayahs: 18, type: 'Madani', meaning: 'Mutual Loss and Gain', reason: 'Named after the Day when gains and losses will be clear.', topics: ['day of judgment', 'faith', 'family'], chronOrder: 108 },
  { id: 65, name: 'At-Talaq', arabic: 'الطلاق', ayahs: 12, type: 'Madani', meaning: 'The Divorce', reason: 'Contains detailed rulings on divorce procedures.', topics: ['divorce', 'law', 'family', 'women'], chronOrder: 99 },
  { id: 66, name: 'At-Tahrim', arabic: 'التحريم', ayahs: 12, type: 'Madani', meaning: 'The Prohibition', reason: 'About an incident when the Prophet prohibited something for himself.', topics: ['prophets', 'family', 'women'], chronOrder: 107 },
  { id: 67, name: 'Al-Mulk', arabic: 'الملك', ayahs: 30, type: 'Makki', meaning: 'The Sovereignty', reason: 'Opens declaring Allah\'s complete sovereignty over all creation.', topics: ['sovereignty', 'creation', 'protection'], chronOrder: 77 },
  { id: 68, name: 'Al-Qalam', arabic: 'القلم', ayahs: 52, type: 'Makki', meaning: 'The Pen', reason: 'Opens with oath by the pen and what is written.', topics: ['character', 'patience', 'writing'], chronOrder: 2 },
  { id: 69, name: 'Al-Haqqah', arabic: 'الحاقة', ayahs: 52, type: 'Makki', meaning: 'The Inevitable Reality', reason: 'Named after the Day of Judgment, the inevitable truth.', topics: ['day of judgment', 'stories', 'quran'], chronOrder: 78 },
  { id: 70, name: 'Al-Maarij', arabic: 'المعارج', ayahs: 44, type: 'Makki', meaning: 'The Ways of Ascent', reason: 'Named after the ascending stairways by which angels ascend to Allah.', topics: ['angels', 'day of judgment', 'patience'], chronOrder: 79 },
  { id: 71, name: 'Nuh', arabic: 'نوح', ayahs: 28, type: 'Makki', meaning: 'Noah', reason: 'Entirely devoted to Prophet Nuh\'s preaching to his people.', topics: ['prophets', 'patience', 'dawah'], chronOrder: 71 },
  { id: 72, name: 'Al-Jinn', arabic: 'الجن', ayahs: 28, type: 'Makki', meaning: 'The Jinn', reason: 'About jinn who heard the Quran and believed.', topics: ['jinn', 'faith', 'quran'], chronOrder: 40 },
  { id: 73, name: 'Al-Muzzammil', arabic: 'المزمل', ayahs: 20, type: 'Makki', meaning: 'The Wrapped One', reason: 'Addresses Prophet Muhammad as one wrapped in garments.', topics: ['prayer', 'night prayer', 'prophets'], chronOrder: 3 },
  { id: 74, name: 'Al-Muddaththir', arabic: 'المدثر', ayahs: 56, type: 'Makki', meaning: 'The Cloaked One', reason: 'Addresses the Prophet as one covered in a cloak.', topics: ['prophets', 'dawah', 'warnings'], chronOrder: 4 },
  { id: 75, name: 'Al-Qiyamah', arabic: 'القيامة', ayahs: 40, type: 'Makki', meaning: 'The Resurrection', reason: 'Entirely about the Day of Resurrection.', topics: ['resurrection', 'day of judgment', 'soul'], chronOrder: 31 },
  { id: 76, name: 'Al-Insan', arabic: 'الإنسان', ayahs: 31, type: 'Madani', meaning: 'The Human', reason: 'Discusses human creation and guidance to gratitude or ingratitude.', topics: ['creation', 'paradise', 'gratitude'], chronOrder: 98 },
  { id: 77, name: 'Al-Mursalat', arabic: 'المرسلات', ayahs: 50, type: 'Makki', meaning: 'Those Sent Forth', reason: 'Opens with oath by winds sent forth.', topics: ['nature', 'day of judgment', 'warnings'], chronOrder: 33 },
  { id: 78, name: 'An-Naba', arabic: 'النبأ', ayahs: 40, type: 'Makki', meaning: 'The Great News', reason: 'Opens asking about the great news - the Day of Judgment.', topics: ['day of judgment', 'creation', 'hell'], chronOrder: 80 },
  { id: 79, name: 'An-Naziat', arabic: 'النازعات', ayahs: 46, type: 'Makki', meaning: 'Those Who Pull Out', reason: 'Opens with oath by angels who extract souls.', topics: ['angels', 'death', 'musa'], chronOrder: 81 },
  { id: 80, name: 'Abasa', arabic: 'عبس', ayahs: 42, type: 'Makki', meaning: 'He Frowned', reason: 'About when the Prophet frowned at a blind man seeking knowledge.', topics: ['manners', 'equality', 'dawah'], chronOrder: 24 },
  { id: 81, name: 'At-Takwir', arabic: 'التكوير', ayahs: 29, type: 'Makki', meaning: 'The Folding Up', reason: 'Describes cosmic events when the sun is folded up.', topics: ['day of judgment', 'cosmos', 'revelation'], chronOrder: 7 },
  { id: 82, name: 'Al-Infitar', arabic: 'الإنفطار', ayahs: 19, type: 'Makki', meaning: 'The Splitting', reason: 'Describes the sky splitting apart on Judgment Day.', topics: ['day of judgment', 'angels', 'deeds'], chronOrder: 82 },
  { id: 83, name: 'Al-Mutaffifin', arabic: 'المطففين', ayahs: 36, type: 'Makki', meaning: 'Those Who Give Less', reason: 'Warns those who cheat in weights and measures.', topics: ['business', 'justice', 'warnings'], chronOrder: 86 },
  { id: 84, name: 'Al-Inshiqaq', arabic: 'الانشقاق', ayahs: 25, type: 'Makki', meaning: 'The Splitting Open', reason: 'Describes the sky splitting open on Judgment Day.', topics: ['day of judgment', 'deeds', 'cosmos'], chronOrder: 83 },
  { id: 85, name: 'Al-Buruj', arabic: 'البروج', ayahs: 22, type: 'Makki', meaning: 'The Great Stars', reason: 'Opens with oath by the sky containing great constellations.', topics: ['cosmos', 'stories', 'persecution'], chronOrder: 27 },
  { id: 86, name: 'At-Tariq', arabic: 'الطارق', ayahs: 17, type: 'Makki', meaning: 'The Night Visitor', reason: 'Opens with oath by the piercing star that visits at night.', topics: ['cosmos', 'creation', 'quran'], chronOrder: 36 },
  { id: 87, name: 'Al-Ala', arabic: 'الأعلى', ayahs: 19, type: 'Makki', meaning: 'The Most High', reason: 'Opens glorifying Allah, the Most High.', topics: ['glorification', 'quran', 'success'], chronOrder: 8 },
  { id: 88, name: 'Al-Ghashiyah', arabic: 'الغاشية', ayahs: 26, type: 'Makki', meaning: 'The Overwhelming', reason: 'Named after the overwhelming Day of Judgment.', topics: ['day of judgment', 'paradise', 'hell'], chronOrder: 68 },
  { id: 89, name: 'Al-Fajr', arabic: 'الفجر', ayahs: 30, type: 'Makki', meaning: 'The Dawn', reason: 'Opens with oath by the dawn and its special significance.', topics: ['nature', 'stories', 'trials'], chronOrder: 10 },
  { id: 90, name: 'Al-Balad', arabic: 'البلد', ayahs: 20, type: 'Makki', meaning: 'The City', reason: 'Opens with oath by the sacred city of Makkah.', topics: ['makkah', 'trials', 'charity'], chronOrder: 35 },
  { id: 91, name: 'Ash-Shams', arabic: 'الشمس', ayahs: 15, type: 'Makki', meaning: 'The Sun', reason: 'Opens with oath by the sun and its brightness.', topics: ['nature', 'soul', 'stories'], chronOrder: 26 },
  { id: 92, name: 'Al-Layl', arabic: 'الليل', ayahs: 21, type: 'Makki', meaning: 'The Night', reason: 'Opens with oath by the night as it covers.', topics: ['nature', 'charity', 'guidance'], chronOrder: 9 },
  { id: 93, name: 'Ad-Duha', arabic: 'الضحى', ayahs: 11, type: 'Makki', meaning: 'The Morning Hours', reason: 'Opens with oath by the morning brightness, comforting the Prophet.', topics: ['prophets', 'comfort', 'blessings'], chronOrder: 11 },
  { id: 94, name: 'Ash-Sharh', arabic: 'الشرح', ayahs: 8, type: 'Makki', meaning: 'The Relief', reason: 'About Allah expanding the Prophet\'s chest and easing his burden.', topics: ['prophets', 'comfort', 'ease'], chronOrder: 12 },
  { id: 95, name: 'At-Tin', arabic: 'التين', ayahs: 8, type: 'Makki', meaning: 'The Fig', reason: 'Opens with oath by the fig and olive, sacred fruits.', topics: ['nature', 'creation', 'faith'], chronOrder: 28 },
  { id: 96, name: 'Al-Alaq', arabic: 'العلق', ayahs: 19, type: 'Makki', meaning: 'The Clot', reason: 'First revealed verses, describing human creation from a clot.', topics: ['revelation', 'creation', 'knowledge'], chronOrder: 1 },
  { id: 97, name: 'Al-Qadr', arabic: 'القدر', ayahs: 5, type: 'Makki', meaning: 'The Night of Power', reason: 'About Laylatul Qadr, the night the Quran was revealed.', topics: ['ramadan', 'revelation', 'angels'], chronOrder: 25 },
  { id: 98, name: 'Al-Bayyinah', arabic: 'البينة', ayahs: 8, type: 'Madani', meaning: 'The Clear Evidence', reason: 'About the clear evidence and messenger sent to mankind.', topics: ['revelation', 'faith', 'people of book'], chronOrder: 100 },
  { id: 99, name: 'Az-Zalzalah', arabic: 'الزلزلة', ayahs: 8, type: 'Madani', meaning: 'The Earthquake', reason: 'Describes the great earthquake of the Day of Judgment.', topics: ['day of judgment', 'deeds', 'earth'], chronOrder: 93 },
  { id: 100, name: 'Al-Adiyat', arabic: 'العاديات', ayahs: 11, type: 'Makki', meaning: 'The Charging Steeds', reason: 'Opens with oath by horses charging in battle.', topics: ['nature', 'ingratitude', 'day of judgment'], chronOrder: 14 },
  { id: 101, name: 'Al-Qariah', arabic: 'القارعة', ayahs: 11, type: 'Makki', meaning: 'The Striking Calamity', reason: 'Named after the striking calamity of Judgment Day.', topics: ['day of judgment', 'scales', 'hell'], chronOrder: 30 },
  { id: 102, name: 'At-Takathur', arabic: 'التكاثر', ayahs: 8, type: 'Makki', meaning: 'Competition in Increase', reason: 'Warns against being distracted by competing for more wealth.', topics: ['wealth', 'death', 'warnings'], chronOrder: 16 },
  { id: 103, name: 'Al-Asr', arabic: 'العصر', ayahs: 3, type: 'Makki', meaning: 'The Time', reason: 'Opens with oath by time, emphasizing its value.', topics: ['time', 'faith', 'patience'], chronOrder: 13 },
  { id: 104, name: 'Al-Humazah', arabic: 'الهمزة', ayahs: 9, type: 'Makki', meaning: 'The Slanderer', reason: 'Warns against backbiters and slanderers.', topics: ['character', 'wealth', 'hell'], chronOrder: 32 },
  { id: 105, name: 'Al-Fil', arabic: 'الفيل', ayahs: 5, type: 'Makki', meaning: 'The Elephant', reason: 'About the army with elephants that attacked Kaaba.', topics: ['history', 'makkah', 'miracles'], chronOrder: 19 },
  { id: 106, name: 'Quraysh', arabic: 'قريش', ayahs: 4, type: 'Makki', meaning: 'Quraysh', reason: 'About the tribe of Quraysh and their blessings.', topics: ['makkah', 'gratitude', 'history'], chronOrder: 29 },
  { id: 107, name: 'Al-Maun', arabic: 'الماعون', ayahs: 7, type: 'Makki', meaning: 'Small Kindnesses', reason: 'About those who deny religion and refuse small kindnesses.', topics: ['charity', 'orphans', 'prayer'], chronOrder: 17 },
  { id: 108, name: 'Al-Kawthar', arabic: 'الكوثر', ayahs: 3, type: 'Makki', meaning: 'The Abundance', reason: 'About Al-Kawthar, the river in Paradise given to the Prophet.', topics: ['paradise', 'prophets', 'blessings'], chronOrder: 15 },
  { id: 109, name: 'Al-Kafirun', arabic: 'الكافرون', ayahs: 6, type: 'Makki', meaning: 'The Disbelievers', reason: 'Declares complete distinction between Islam and disbelief.', topics: ['tawhid', 'tolerance', 'faith'], chronOrder: 18 },
  { id: 110, name: 'An-Nasr', arabic: 'النصر', ayahs: 3, type: 'Madani', meaning: 'The Divine Support', reason: 'About Allah\'s help and the conquest of Makkah.', topics: ['victory', 'prophets', 'forgiveness'], chronOrder: 114 },
  { id: 111, name: 'Al-Masad', arabic: 'المسد', ayahs: 5, type: 'Makki', meaning: 'The Palm Fiber', reason: 'About Abu Lahab, enemy of Islam, and his fate.', topics: ['warnings', 'enemies', 'hell'], chronOrder: 6 },
  { id: 112, name: 'Al-Ikhlas', arabic: 'الإخلاص', ayahs: 4, type: 'Makki', meaning: 'The Sincerity', reason: 'Pure monotheism - equals 1/3 of Quran in meaning.', topics: ['tawhid', 'faith', 'names of allah'], chronOrder: 22 },
  { id: 113, name: 'Al-Falaq', arabic: 'الفلق', ayahs: 5, type: 'Makki', meaning: 'The Daybreak', reason: 'Seeking refuge with Allah from evil at daybreak.', topics: ['protection', 'evil', 'prayer'], chronOrder: 20 },
  { id: 114, name: 'An-Nas', arabic: 'الناس', ayahs: 6, type: 'Makki', meaning: 'Mankind', reason: 'Seeking refuge from whispering evil affecting mankind.', topics: ['protection', 'shaytan', 'prayer'], chronOrder: 21 },
];

// FAQ Topics for search
const FAQ_TOPICS = [
  { id: 'prayer', label: 'Prayer (Salah)', icon: '🕌', description: 'Surahs about prayer and worship' },
  { id: 'faith', label: 'Faith (Iman)', icon: '💫', description: 'Core beliefs and faith' },
  { id: 'prophets', label: 'Prophets', icon: '📖', description: 'Stories of prophets' },
  { id: 'day of judgment', label: 'Day of Judgment', icon: '⚖️', description: 'Resurrection and accountability' },
  { id: 'paradise', label: 'Paradise (Jannah)', icon: '🌴', description: 'Descriptions of Paradise' },
  { id: 'hell', label: 'Hell (Jahannam)', icon: '🔥', description: 'Warnings about Hell' },
  { id: 'stories', label: 'Stories', icon: '📚', description: 'Historical narratives' },
  { id: 'law', label: 'Islamic Law', icon: '⚖️', description: 'Legal rulings' },
  { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', description: 'Family matters' },
  { id: 'women', label: 'Women', icon: '👩', description: 'Women in Islam' },
  { id: 'charity', label: 'Charity (Zakat)', icon: '🤲', description: 'Giving and charity' },
  { id: 'patience', label: 'Patience (Sabr)', icon: '🌱', description: 'Patience and perseverance' },
  { id: 'gratitude', label: 'Gratitude (Shukr)', icon: '🙏', description: 'Being thankful' },
  { id: 'tawhid', label: 'Monotheism', icon: '☝️', description: 'Oneness of Allah' },
  { id: 'creation', label: 'Creation', icon: '🌍', description: 'Signs in creation' },
  { id: 'forgiveness', label: 'Forgiveness', icon: '💚', description: 'Mercy and forgiveness' },
  { id: 'ramadan', label: 'Ramadan', icon: '🌙', description: 'Fasting and Ramadan' },
  { id: 'hajj', label: 'Hajj', icon: '🕋', description: 'Pilgrimage' },
  { id: 'friday', label: 'Friday', icon: '📿', description: 'Jumuah prayers' },
  { id: 'protection', label: 'Protection', icon: '🛡️', description: 'Seeking refuge' },
  { id: 'angels', label: 'Angels', icon: '✨', description: 'About angels' },
  { id: 'jinn', label: 'Jinn', icon: '👻', description: 'About jinn' },
  { id: 'death', label: 'Death', icon: '⏳', description: 'Death and afterlife' },
  { id: 'nature', label: 'Nature & Signs', icon: '🌿', description: 'Natural phenomena' },
];

// Translation options
const TRANSLATIONS = [
  { id: 'sahih', name: 'Sahih International', language: 'English', description: 'Clear and accurate modern translation' },
  { id: 'pickthall', name: 'Pickthall', language: 'English', description: 'Classic translation by Muhammad Pickthall' },
  { id: 'yusufali', name: 'Yusuf Ali', language: 'English', description: 'Widely used with detailed commentary' },
  { id: 'hilali', name: 'Hilali-Khan', language: 'English', description: 'With explanatory notes' },
  { id: 'clearquran', name: 'Clear Quran', language: 'English', description: 'Modern easy-to-read translation' },
  { id: 'urdu', name: 'Fateh Muhammad Jalandhri', language: 'Urdu', description: 'Popular Urdu translation' },
  { id: 'french', name: 'Muhammad Hamidullah', language: 'French', description: 'French translation' },
  { id: 'turkish', name: 'Diyanet Isleri', language: 'Turkish', description: 'Official Turkish translation' },
  { id: 'indonesian', name: 'Indonesian Ministry', language: 'Indonesian', description: 'Bahasa Indonesia' },
  { id: 'german', name: 'Bubenheim & Elyas', language: 'German', description: 'German translation' },
];

// Reciters
const RECITERS = [
  { id: 'mishary', name: 'Mishary Rashid Alafasy', country: 'Kuwait', style: 'Murattal', pro: false, popular: true },
  { id: 'abdulbasit', name: 'Abdul Basit Abdul Samad', country: 'Egypt', style: 'Mujawwad', pro: false, popular: true },
  { id: 'sudais', name: 'Abdur-Rahman As-Sudais', country: 'Saudi Arabia', style: 'Murattal', pro: true, popular: true },
  { id: 'shuraim', name: 'Saud Ash-Shuraim', country: 'Saudi Arabia', style: 'Murattal', pro: true, popular: true },
  { id: 'maher', name: 'Maher Al Muaiqly', country: 'Saudi Arabia', style: 'Murattal', pro: true, popular: true },
  { id: 'husary', name: 'Mahmoud Khalil Al-Husary', country: 'Egypt', style: 'Murattal', pro: false, popular: true },
  { id: 'minshawi', name: 'Mohamed Siddiq Al-Minshawi', country: 'Egypt', style: 'Mujawwad', pro: true, popular: false },
  { id: 'ghamdi', name: 'Saad Al-Ghamdi', country: 'Saudi Arabia', style: 'Murattal', pro: false, popular: false },
  { id: 'ajamy', name: 'Ahmed Al-Ajamy', country: 'Saudi Arabia', style: 'Murattal', pro: false, popular: false },
  { id: 'basfar', name: 'Abdullah Basfar', country: 'Saudi Arabia', style: 'Murattal', pro: true, popular: false },
  { id: 'bukhatir', name: 'Salah Bukhatir', country: 'UAE', style: 'Murattal', pro: true, popular: false },
  { id: 'muaiqly', name: 'Abdullah Awad Al-Juhani', country: 'Saudi Arabia', style: 'Murattal', pro: true, popular: false },
];

const JUZZ = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  arabic: ['الم', 'سيقول', 'تلك الرسل', 'لن تنالوا', 'والمحصنات', 'لا يحب الله', 'وإذا سمعوا', 'ولو أننا', 'قال الملأ', 'واعلموا', 'يعتذرون', 'وما من دابة', 'وما أبرئ', 'ربما', 'سبحان الذي', 'قال ألم', 'اقترب', 'قد أفلح', 'وقال الذين', 'أمن خلق', 'اتل ما أوحي', 'ومن يقنت', 'ومالي', 'فمن أظلم', 'إليه يرد', 'حم', 'قال فما', 'قد سمع', 'تبارك الذي', 'عم'][i],
}));

// Beautiful dreamy color palettes
const PALETTES = [
  { name: 'Ocean Dream', colors: ['#0ea5e9', '#06b6d4', '#14b8a6'], glow: '#67e8f9', accent: '#a5f3fc' },
  { name: 'Aurora', colors: ['#8b5cf6', '#a855f7', '#d946ef'], glow: '#c4b5fd', accent: '#e9d5ff' },
  { name: 'Sunset', colors: ['#f97316', '#f59e0b', '#eab308'], glow: '#fdba74', accent: '#fef08a' },
  { name: 'Rose Garden', colors: ['#ec4899', '#f43f5e', '#fb7185'], glow: '#f9a8d4', accent: '#fecdd3' },
  { name: 'Emerald Forest', colors: ['#10b981', '#14b8a6', '#06b6d4'], glow: '#6ee7b7', accent: '#a7f3d0' },
  { name: 'Royal Purple', colors: ['#7c3aed', '#8b5cf6', '#a855f7'], glow: '#a78bfa', accent: '#c4b5fd' },
  { name: 'Golden Hour', colors: ['#f59e0b', '#fbbf24', '#fcd34d'], glow: '#fde047', accent: '#fef9c3' },
  { name: 'Cherry Blossom', colors: ['#f472b6', '#ec4899', '#db2777'], glow: '#f9a8d4', accent: '#fbcfe8' },
  { name: 'Deep Sea', colors: ['#0284c7', '#0891b2', '#0d9488'], glow: '#22d3ee', accent: '#a5f3fc' },
  { name: 'Lavender Dreams', colors: ['#a855f7', '#c084fc', '#e879f9'], glow: '#d8b4fe', accent: '#f5d0fe' },
];

// Topic-based color palettes for content-based bubble coloring
const TOPIC_PALETTES = {
  prayer: { name: 'Prayer', colors: ['#0ea5e9', '#0284c7', '#0369a1'], glow: '#7dd3fc', accent: '#bae6fd' },
  faith: { name: 'Faith', colors: ['#8b5cf6', '#7c3aed', '#6d28d9'], glow: '#c4b5fd', accent: '#ddd6fe' },
  prophets: { name: 'Prophets', colors: ['#f59e0b', '#d97706', '#b45309'], glow: '#fcd34d', accent: '#fef3c7' },
  'day of judgment': { name: 'Day of Judgment', colors: ['#dc2626', '#b91c1c', '#991b1b'], glow: '#fca5a5', accent: '#fee2e2' },
  paradise: { name: 'Paradise', colors: ['#10b981', '#059669', '#047857'], glow: '#6ee7b7', accent: '#d1fae5' },
  hell: { name: 'Hell', colors: ['#ef4444', '#dc2626', '#b91c1c'], glow: '#f87171', accent: '#fecaca' },
  stories: { name: 'Stories', colors: ['#06b6d4', '#0891b2', '#0e7490'], glow: '#67e8f9', accent: '#cffafe' },
  law: { name: 'Islamic Law', colors: ['#6366f1', '#4f46e5', '#4338ca'], glow: '#a5b4fc', accent: '#e0e7ff' },
  family: { name: 'Family', colors: ['#ec4899', '#db2777', '#be185d'], glow: '#f9a8d4', accent: '#fce7f3' },
  women: { name: 'Women', colors: ['#f472b6', '#ec4899', '#db2777'], glow: '#fbcfe8', accent: '#fdf2f8' },
  charity: { name: 'Charity', colors: ['#22c55e', '#16a34a', '#15803d'], glow: '#86efac', accent: '#dcfce7' },
  patience: { name: 'Patience', colors: ['#14b8a6', '#0d9488', '#0f766e'], glow: '#5eead4', accent: '#ccfbf1' },
  gratitude: { name: 'Gratitude', colors: ['#eab308', '#ca8a04', '#a16207'], glow: '#fde047', accent: '#fef9c3' },
  tawhid: { name: 'Monotheism', colors: ['#a855f7', '#9333ea', '#7e22ce'], glow: '#d8b4fe', accent: '#f3e8ff' },
  creation: { name: 'Creation', colors: ['#3b82f6', '#2563eb', '#1d4ed8'], glow: '#93c5fd', accent: '#dbeafe' },
  forgiveness: { name: 'Forgiveness', colors: ['#22d3ee', '#06b6d4', '#0891b2'], glow: '#a5f3fc', accent: '#cffafe' },
  ramadan: { name: 'Ramadan', colors: ['#a78bfa', '#8b5cf6', '#7c3aed'], glow: '#c4b5fd', accent: '#ede9fe' },
  hajj: { name: 'Hajj', colors: ['#171717', '#404040', '#525252'], glow: '#a3a3a3', accent: '#e5e5e5' },
  friday: { name: 'Friday', colors: ['#16a34a', '#15803d', '#166534'], glow: '#86efac', accent: '#bbf7d0' },
  protection: { name: 'Protection', colors: ['#64748b', '#475569', '#334155'], glow: '#94a3b8', accent: '#cbd5e1' },
  angels: { name: 'Angels', colors: ['#f0abfc', '#e879f9', '#d946ef'], glow: '#f5d0fe', accent: '#fae8ff' },
  jinn: { name: 'Jinn', colors: ['#4c1d95', '#5b21b6', '#6d28d9'], glow: '#8b5cf6', accent: '#c4b5fd' },
  death: { name: 'Death', colors: ['#78716c', '#57534e', '#44403c'], glow: '#a8a29e', accent: '#d6d3d1' },
  nature: { name: 'Nature & Signs', colors: ['#84cc16', '#65a30d', '#4d7c0f'], glow: '#bef264', accent: '#ecfccb' },
  guidance: { name: 'Guidance', colors: ['#0ea5e9', '#0284c7', '#0369a1'], glow: '#38bdf8', accent: '#bae6fd' },
  mercy: { name: 'Mercy', colors: ['#fb7185', '#f43f5e', '#e11d48'], glow: '#fda4af', accent: '#ffe4e6' },
  resurrection: { name: 'Resurrection', colors: ['#f97316', '#ea580c', '#c2410c'], glow: '#fdba74', accent: '#ffedd5' },
  victory: { name: 'Victory', colors: ['#fbbf24', '#f59e0b', '#d97706'], glow: '#fcd34d', accent: '#fef3c7' },
  jihad: { name: 'Struggle', colors: ['#ef4444', '#dc2626', '#b91c1c'], glow: '#f87171', accent: '#fee2e2' },
  repentance: { name: 'Repentance', colors: ['#2dd4bf', '#14b8a6', '#0d9488'], glow: '#5eead4', accent: '#ccfbf1' },
  wisdom: { name: 'Wisdom', colors: ['#8b5cf6', '#7c3aed', '#6d28d9'], glow: '#a78bfa', accent: '#ddd6fe' },
  character: { name: 'Character', colors: ['#06b6d4', '#0891b2', '#0e7490'], glow: '#22d3ee', accent: '#cffafe' },
  worship: { name: 'Worship', colors: ['#3b82f6', '#2563eb', '#1d4ed8'], glow: '#60a5fa', accent: '#dbeafe' },
  quran: { name: 'Quran', colors: ['#10b981', '#059669', '#047857'], glow: '#34d399', accent: '#d1fae5' },
  makkah: { name: 'Makkah', colors: ['#171717', '#262626', '#404040'], glow: '#737373', accent: '#d4d4d4' },
  miracles: { name: 'Miracles', colors: ['#f59e0b', '#eab308', '#ca8a04'], glow: '#fde047', accent: '#fef9c3' },
  'names of allah': { name: 'Names of Allah', colors: ['#a855f7', '#9333ea', '#7e22ce'], glow: '#c084fc', accent: '#e9d5ff' },
};

// SVG icon paths for each topic (used as subtle background)
const TOPIC_ICONS = {
  prayer: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19 8v7l-7 3.5L5 15V8l7-3.2z', // mosque dome
  faith: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', // star
  prophets: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', // person with checkmark
  'day of judgment': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z', // globe
  paradise: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93V17h2v2.93c-3.95-.49-7-3.85-7-7.93h2v2h2v-2h2v2h2v-2h2c0 4.08-3.05 7.44-7 7.93z', // garden
  hell: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z', // fire warning
  stories: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z', // book
  law: 'M4 4h16v2H4V4zm0 14h16v2H4v-2zm0-7h16v2H4v-2z', // scales/lines
  family: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', // family
  women: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z', // person
  charity: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z', // heart
  patience: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z', // clock
  gratitude: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z', // happy face
  tawhid: 'M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 9.5c0 1.38-2.5 2.5-4 2.5s-4-1.12-4-2.5c0-1.5 1.5-2.7 4-2.7s4 1.2 4 2.7z', // shield with one
  creation: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z', // earth
  forgiveness: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', // checkmark
  ramadan: 'M12.7 4.1C11.97 2.82 11.1 2 10 2c-2.76 0-5 4.03-5 9s2.24 9 5 9c1.1 0 1.97-.82 2.7-2.1C13.43 19.18 14.66 20 16 20c2.76 0 5-4.03 5-9s-2.24-9-5-9c-1.34 0-2.57.82-3.3 2.1z', // crescent
  hajj: 'M12 2L6 7h12L12 2zm0 4L8.5 9H15.5L12 6zm-6 5v9h12v-9H6zm6 7c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z', // kaaba
  friday: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', // congregation
  protection: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z', // shield
  angels: 'M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z', // wing
  jinn: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6h10v2H7v-2z', // mystery
  death: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z', // hourglass
  nature: 'M6.05 8.05c-2.73 2.73-2.73 7.15-.02 9.88 1.47-3.4 4.09-6.24 7.36-7.93A15.85 15.85 0 006.05 8.05zm9.9 0c2.73 2.73 2.73 7.17 0 9.9-1.47-3.4-4.09-6.26-7.36-7.95a15.85 15.85 0 007.36-1.95z', // leaf
  guidance: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z', // compass arrow
  mercy: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z', // heart
  resurrection: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z', // sunrise/play
  victory: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z', // trophy
  jihad: 'M6 19h12v2H6zm3-10V7l-5 4 5 4v-2h12V9zm0 4V9.5l-2.5 2L9 13zm3-9h2v3h-2zm0 15h2v3h-2z', // struggle/effort
  repentance: 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z', // return arrow
  wisdom: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z', // lightbulb
  character: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z', // person
  worship: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19 8v7l-7 3.5L5 15V8l7-3.2z', // mosque
  quran: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z', // open book
  makkah: 'M12 2L6 7h12L12 2zm0 4L8.5 9H15.5L12 6zm-6 5v9h12v-9H6zm6 7c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z', // kaaba
  miracles: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', // star
  'names of allah': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-3-8c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.26-.04-.51-.1-.75l1.66-1.66c.28.72.44 1.52.44 2.41 0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c.89 0 1.69.16 2.41.44l-1.66 1.66c-.24-.06-.49-.1-.75-.1-1.66 0-3 1.34-3 3z', // 99
};

// Helper function to get primary topic palette for a surah
const getTopicPalette = (surah) => {
  if (surah.topics && surah.topics.length > 0) {
    const primaryTopic = surah.topics[0];
    return TOPIC_PALETTES[primaryTopic] || TOPIC_PALETTES.faith;
  }
  return TOPIC_PALETTES.faith;
};

// Helper function to get topic icon path
const getTopicIcon = (surah) => {
  if (surah.topics && surah.topics.length > 0) {
    const primaryTopic = surah.topics[0];
    return TOPIC_ICONS[primaryTopic] || TOPIC_ICONS.faith;
  }
  return TOPIC_ICONS.faith;
};

// ============================================================================
// QURAN VERSES DATA (Sample verses for key surahs)
// ============================================================================

const QURAN_VERSES = {
  1: [ // Al-Fatiha
    { ayah: 1, arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.', transliteration: 'Bismillahir Rahmanir Raheem', tafsir: 'This verse is known as the Basmalah. It is a declaration that everything we do should begin with the name of Allah.' },
    { ayah: 2, arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', translation: 'All praise is due to Allah, Lord of the worlds.', transliteration: 'Alhamdu lillahi Rabbil aalameen', tafsir: 'This verse establishes that all praise belongs to Allah alone, who is the Lord and Sustainer of all creation.' },
    { ayah: 3, arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', translation: 'The Entirely Merciful, the Especially Merciful.', transliteration: 'Ar-Rahmanir-Raheem', tafsir: 'Rahman refers to Allah\'s mercy that encompasses all creation, while Raheem refers to His special mercy for the believers.' },
    { ayah: 4, arabic: 'مَالِكِ يَوْمِ الدِّينِ', translation: 'Sovereign of the Day of Recompense.', transliteration: 'Maliki Yawmid-Deen', tafsir: 'Allah is the sole Owner and Judge of the Day of Judgment when all will be held accountable.' },
    { ayah: 5, arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', translation: 'It is You we worship and You we ask for help.', transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een', tafsir: 'This is the essence of Tawhid - worshipping Allah alone and seeking help only from Him.' },
    { ayah: 6, arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guide us to the straight path.', transliteration: 'Ihdinas-Siratal-Mustaqeem', tafsir: 'The straight path is Islam, the Quran, and the way of Prophet Muhammad (peace be upon him).' },
    { ayah: 7, arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray.', transliteration: 'Siratal-lazeena an\'amta alaihim ghairil-maghdubi alaihim wa lad-daaalleen', tafsir: 'Those favored are the prophets, truthful, martyrs, and righteous. Those who earned anger knew truth but rejected it, while the astray are those who worship without knowledge.' },
  ],
  112: [ // Al-Ikhlas
    { ayah: 1, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', translation: 'Say, "He is Allah, the One.', transliteration: 'Qul huwa Allahu ahad', tafsir: 'This surah is equivalent to one-third of the Quran as it summarizes the concept of Tawhid (Oneness of Allah).' },
    { ayah: 2, arabic: 'اللَّهُ الصَّمَدُ', translation: 'Allah, the Eternal Refuge.', transliteration: 'Allahus-Samad', tafsir: 'As-Samad means the One upon whom all creation depends, while He depends on none.' },
    { ayah: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', translation: 'He neither begets nor is born.', transliteration: 'Lam yalid wa lam yulad', tafsir: 'Allah is unique - He has no children and no parents, negating all forms of shirk.' },
    { ayah: 4, arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', translation: 'Nor is there to Him any equivalent.', transliteration: 'Wa lam yakun lahu kufuwan ahad', tafsir: 'Nothing in creation is equal or comparable to Allah in any way.' },
  ],
  113: [ // Al-Falaq
    { ayah: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', translation: 'Say, "I seek refuge in the Lord of daybreak.', transliteration: 'Qul a\'udhu bi rabbil-falaq', tafsir: 'Seeking protection with the Lord who causes the dawn to break, showing His power over darkness.' },
    { ayah: 2, arabic: 'مِن شَرِّ مَا خَلَقَ', translation: 'From the evil of that which He created.', transliteration: 'Min sharri ma khalaq', tafsir: 'Protection from all evil in creation - seen and unseen.' },
    { ayah: 3, arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', translation: 'And from the evil of darkness when it settles.', transliteration: 'Wa min sharri ghasiqin idha waqab', tafsir: 'The night brings dangers both physical and spiritual.' },
    { ayah: 4, arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', translation: 'And from the evil of the blowers in knots.', transliteration: 'Wa min sharrin-naffathati fil-\'uqad', tafsir: 'Protection from those who practice magic by blowing on knots.' },
    { ayah: 5, arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', translation: 'And from the evil of an envier when he envies.', transliteration: 'Wa min sharri hasidin idha hasad', tafsir: 'The evil eye and envy are real harms we seek protection from.' },
  ],
  114: [ // An-Nas
    { ayah: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', translation: 'Say, "I seek refuge in the Lord of mankind.', transliteration: 'Qul a\'udhu bi rabbin-nas', tafsir: 'Seeking refuge with Allah as the Lord of all humanity.' },
    { ayah: 2, arabic: 'مَلِكِ النَّاسِ', translation: 'The Sovereign of mankind.', transliteration: 'Malikin-nas', tafsir: 'Allah is the true King and Ruler over all people.' },
    { ayah: 3, arabic: 'إِلَٰهِ النَّاسِ', translation: 'The God of mankind.', transliteration: 'Ilahin-nas', tafsir: 'He alone is worthy of worship among mankind.' },
    { ayah: 4, arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', translation: 'From the evil of the retreating whisperer.', transliteration: 'Min sharril-waswasil-khannas', tafsir: 'Shaytan whispers evil but retreats when Allah is remembered.' },
    { ayah: 5, arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', translation: 'Who whispers in the breasts of mankind.', transliteration: 'Alladhi yuwaswisu fi sudurin-nas', tafsir: 'Evil whispers target the hearts where decisions are made.' },
    { ayah: 6, arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', translation: 'From among the jinn and mankind.', transliteration: 'Minal-jinnati wan-nas', tafsir: 'Evil whispers come from both jinn (devils) and evil humans.' },
  ],
  36: [ // Ya-Sin (first few verses)
    { ayah: 1, arabic: 'يس', translation: 'Ya, Seen.', transliteration: 'Ya-Seen', tafsir: 'These are the disconnected letters (Huruf Muqatta\'at). Their meaning is known only to Allah.' },
    { ayah: 2, arabic: 'وَالْقُرْآنِ الْحَكِيمِ', translation: 'By the wise Quran.', transliteration: 'Wal-Qur\'anil-Hakeem', tafsir: 'Allah swears by the Quran, which is full of wisdom and guidance.' },
    { ayah: 3, arabic: 'إِنَّكَ لَمِنَ الْمُرْسَلِينَ', translation: 'Indeed you are from among the messengers.', transliteration: 'Innaka laminal-mursaleen', tafsir: 'Confirming the prophethood of Muhammad (peace be upon him).' },
    { ayah: 4, arabic: 'عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ', translation: 'On a straight path.', transliteration: '\'Ala siratin mustaqeem', tafsir: 'The Prophet is upon the straight path of truth and guidance.' },
    { ayah: 5, arabic: 'تَنزِيلَ الْعَزِيزِ الرَّحِيمِ', translation: 'A revelation of the Exalted in Might, the Merciful.', transliteration: 'Tanzeelal-\'Azeezir-Raheem', tafsir: 'The Quran is sent down by Allah who is both Mighty and Merciful.' },
  ],
};

// ============================================================================
// 99 NAMES OF ALLAH
// ============================================================================

const NAMES_OF_ALLAH = [
  { id: 1, name: 'Ar-Rahman', arabic: 'الرَّحْمَنُ', meaning: 'The Most Gracious', description: 'The One who has plenty of mercy for the believers and the disbelievers in this world.' },
  { id: 2, name: 'Ar-Raheem', arabic: 'الرَّحِيمُ', meaning: 'The Most Merciful', description: 'The One who has plenty of mercy for the believers.' },
  { id: 3, name: 'Al-Malik', arabic: 'الْمَلِكُ', meaning: 'The King', description: 'The One with complete dominion, whose dominion is free from imperfection.' },
  { id: 4, name: 'Al-Quddus', arabic: 'الْقُدُّوسُ', meaning: 'The Most Sacred', description: 'The One who is pure from any imperfection and clear from children and adversaries.' },
  { id: 5, name: 'As-Salam', arabic: 'السَّلاَمُ', meaning: 'The Source of Peace', description: 'The One who is free from every imperfection.' },
  { id: 6, name: 'Al-Mu\'min', arabic: 'الْمُؤْمِنُ', meaning: 'The Guardian of Faith', description: 'The One who witnessed for Himself that no one is God but Him.' },
  { id: 7, name: 'Al-Muhaymin', arabic: 'الْمُهَيْمِنُ', meaning: 'The Protector', description: 'The One who witnesses the saying and deeds of His creatures.' },
  { id: 8, name: 'Al-Aziz', arabic: 'الْعَزِيزُ', meaning: 'The Almighty', description: 'The Strong, The Defeater who is not defeated.' },
  { id: 9, name: 'Al-Jabbar', arabic: 'الْجَبَّارُ', meaning: 'The Compeller', description: 'The One that nothing happens in His Dominion except that which He willed.' },
  { id: 10, name: 'Al-Mutakabbir', arabic: 'الْمُتَكَبِّرُ', meaning: 'The Supreme', description: 'The One who is clear from the attributes of the creatures and from resembling them.' },
  { id: 11, name: 'Al-Khaliq', arabic: 'الْخَالِقُ', meaning: 'The Creator', description: 'The One who brings everything from non-existence to existence.' },
  { id: 12, name: 'Al-Bari', arabic: 'الْبَارِئُ', meaning: 'The Evolver', description: 'The Maker, The Creator who has the Power to turn the entities.' },
  { id: 13, name: 'Al-Musawwir', arabic: 'الْمُصَوِّرُ', meaning: 'The Fashioner', description: 'The One who forms His creatures in different pictures.' },
  { id: 14, name: 'Al-Ghaffar', arabic: 'الْغَفَّارُ', meaning: 'The Forgiving', description: 'The One who forgives the sins of His servants time and time again.' },
  { id: 15, name: 'Al-Qahhar', arabic: 'الْقَهَّارُ', meaning: 'The Subduer', description: 'The Dominant One, The One who has perfect Power.' },
  { id: 16, name: 'Al-Wahhab', arabic: 'الْوَهَّابُ', meaning: 'The Bestower', description: 'The One who is Generous in giving plenty without any return.' },
  { id: 17, name: 'Ar-Razzaq', arabic: 'الرَّزَّاقُ', meaning: 'The Provider', description: 'The One who gives blessings and sustenance to all.' },
  { id: 18, name: 'Al-Fattah', arabic: 'الْفَتَّاحُ', meaning: 'The Opener', description: 'The One who opens for His servants the closed worldly and religious matters.' },
  { id: 19, name: 'Al-Alim', arabic: 'الْعَلِيمُ', meaning: 'The All-Knowing', description: 'The One nothing is absent from His knowledge.' },
  { id: 20, name: 'Al-Qabid', arabic: 'الْقَابِضُ', meaning: 'The Constrictor', description: 'The One who constricts the sustenance by His wisdom.' },
  { id: 21, name: 'Al-Basit', arabic: 'الْبَاسِطُ', meaning: 'The Expander', description: 'The One who expands and widens sustenance.' },
  { id: 22, name: 'Al-Khafid', arabic: 'الْخَافِضُ', meaning: 'The Abaser', description: 'The One who lowers whoever He willed by His Destruction.' },
  { id: 23, name: 'Ar-Rafi', arabic: 'الرَّافِعُ', meaning: 'The Exalter', description: 'The One who raises whoever He willed by His Endowment.' },
  { id: 24, name: 'Al-Mu\'izz', arabic: 'الْمُعِزُّ', meaning: 'The Bestower of Honor', description: 'The One who gives esteem to whoever He willed.' },
  { id: 25, name: 'Al-Mudhill', arabic: 'الْمُذِلُّ', meaning: 'The Humiliator', description: 'The One who degrades and humiliates whoever He willed.' },
  { id: 26, name: 'As-Sami', arabic: 'السَّمِيعُ', meaning: 'The All-Hearing', description: 'The One who Hears all things that are heard by His Eternal Hearing.' },
  { id: 27, name: 'Al-Basir', arabic: 'الْبَصِيرُ', meaning: 'The All-Seeing', description: 'The One who Sees all things that are seen by His Eternal Seeing.' },
  { id: 28, name: 'Al-Hakam', arabic: 'الْحَكَمُ', meaning: 'The Judge', description: 'The One who He is the Ruler and His judgment is His Word.' },
  { id: 29, name: 'Al-Adl', arabic: 'الْعَدْلُ', meaning: 'The Just', description: 'The One who is entitled to do what He does.' },
  { id: 30, name: 'Al-Latif', arabic: 'اللَّطِيفُ', meaning: 'The Subtle One', description: 'The One who is kind to His servants and endows upon them.' },
  { id: 31, name: 'Al-Khabir', arabic: 'الْخَبِيرُ', meaning: 'The All-Aware', description: 'The One who knows the truth of things.' },
  { id: 32, name: 'Al-Halim', arabic: 'الْحَلِيمُ', meaning: 'The Forbearing', description: 'The One who delays the punishment for those who deserve it.' },
  { id: 33, name: 'Al-Azim', arabic: 'الْعَظِيمُ', meaning: 'The Magnificent', description: 'The One deserving the attributes of Exaltment, Glory, Extolment.' },
  { id: 34, name: 'Al-Ghafur', arabic: 'الْغَفُورُ', meaning: 'The All-Forgiving', description: 'The One who forgives a lot.' },
  { id: 35, name: 'Ash-Shakur', arabic: 'الشَّكُورُ', meaning: 'The Appreciative', description: 'The One who gives a lot of reward for a little obedience.' },
  { id: 36, name: 'Al-Ali', arabic: 'الْعَلِيُّ', meaning: 'The Most High', description: 'The One who is clear from the attributes of the creatures.' },
  { id: 37, name: 'Al-Kabir', arabic: 'الْكَبِيرُ', meaning: 'The Most Great', description: 'The One who is greater than everything in status.' },
  { id: 38, name: 'Al-Hafiz', arabic: 'الْحَفِيظُ', meaning: 'The Preserver', description: 'The One who protects whatever and whoever He willed.' },
  { id: 39, name: 'Al-Muqit', arabic: 'المُقِيتُ', meaning: 'The Nourisher', description: 'The One who has the Power to provide sustenance.' },
  { id: 40, name: 'Al-Hasib', arabic: 'الْحسِيبُ', meaning: 'The Reckoner', description: 'The One who gives satisfaction.' },
  { id: 41, name: 'Al-Jalil', arabic: 'الْجَلِيلُ', meaning: 'The Majestic', description: 'The One who is attributed with greatness of Power and Glory.' },
  { id: 42, name: 'Al-Karim', arabic: 'الْكَرِيمُ', meaning: 'The Generous', description: 'The One who is clear from abjectness.' },
  { id: 43, name: 'Ar-Raqib', arabic: 'الرَّقِيبُ', meaning: 'The Watchful', description: 'The One that nothing is absent from Him.' },
  { id: 44, name: 'Al-Mujib', arabic: 'الْمُجِيبُ', meaning: 'The Responsive', description: 'The One who answers the one in need if he asks Him.' },
  { id: 45, name: 'Al-Wasi', arabic: 'الْوَاسِعُ', meaning: 'The All-Encompassing', description: 'The One who has Vast Mercy and Knowledge.' },
  { id: 46, name: 'Al-Hakim', arabic: 'الْحَكِيمُ', meaning: 'The All-Wise', description: 'The One who is correct in His doings.' },
  { id: 47, name: 'Al-Wadud', arabic: 'الْوَدُودُ', meaning: 'The Most Loving', description: 'The One who loves His believing servants.' },
  { id: 48, name: 'Al-Majid', arabic: 'الْمَجِيدُ', meaning: 'The Most Glorious', description: 'The One who is with perfect Power, High Status, Compassion.' },
  { id: 49, name: 'Al-Ba\'ith', arabic: 'الْبَاعِثُ', meaning: 'The Resurrector', description: 'The One who resurrects for reward and/or punishment.' },
  { id: 50, name: 'Ash-Shahid', arabic: 'الشَّهِيدُ', meaning: 'The Witness', description: 'The One who nothing is absent from Him.' },
  { id: 51, name: 'Al-Haqq', arabic: 'الْحَقُّ', meaning: 'The Truth', description: 'The One who truly exists.' },
  { id: 52, name: 'Al-Wakil', arabic: 'الْوَكِيلُ', meaning: 'The Trustee', description: 'The One who gives the satisfaction and is relied upon.' },
  { id: 53, name: 'Al-Qawi', arabic: 'الْقَوِيُّ', meaning: 'The Most Strong', description: 'The One with complete Power.' },
  { id: 54, name: 'Al-Matin', arabic: 'الْمَتِينُ', meaning: 'The Firm One', description: 'The One with extreme Power which is un-interrupted.' },
  { id: 55, name: 'Al-Wali', arabic: 'الْوَلِيُّ', meaning: 'The Protecting Friend', description: 'The One who supports His believing servants.' },
  { id: 56, name: 'Al-Hamid', arabic: 'الْحَمِيدُ', meaning: 'The Praiseworthy', description: 'The praised One who deserves to be praised.' },
  { id: 57, name: 'Al-Muhsi', arabic: 'الْمُحْصِي', meaning: 'The Appraiser', description: 'The One who knows the count of things.' },
  { id: 58, name: 'Al-Mubdi', arabic: 'الْمُبْدِئُ', meaning: 'The Originator', description: 'The One who started the human being.' },
  { id: 59, name: 'Al-Mu\'id', arabic: 'الْمُعِيدُ', meaning: 'The Restorer', description: 'The One who brings back the creatures after death.' },
  { id: 60, name: 'Al-Muhyi', arabic: 'الْمُحْيِي', meaning: 'The Giver of Life', description: 'The One who took out a living human from dead matter.' },
  { id: 61, name: 'Al-Mumit', arabic: 'اَلْمُمِيتُ', meaning: 'The Taker of Life', description: 'The One who renders the living dead.' },
  { id: 62, name: 'Al-Hayy', arabic: 'الْحَيُّ', meaning: 'The Ever Living', description: 'The One who is attributed with a life that is unlike our life.' },
  { id: 63, name: 'Al-Qayyum', arabic: 'الْقَيُّومُ', meaning: 'The Self-Existing', description: 'The One who remains and does not end.' },
  { id: 64, name: 'Al-Wajid', arabic: 'الْوَاجِدُ', meaning: 'The Finder', description: 'The One who does not need anything.' },
  { id: 65, name: 'Al-Majid', arabic: 'الْمَاجِدُ', meaning: 'The Noble', description: 'The One who is Majid.' },
  { id: 66, name: 'Al-Wahid', arabic: 'الْوَاحِدُ', meaning: 'The One', description: 'The One without a partner.' },
  { id: 67, name: 'As-Samad', arabic: 'الصَّمَدُ', meaning: 'The Eternal', description: 'The One who is not dependent on anything.' },
  { id: 68, name: 'Al-Qadir', arabic: 'الْقَادِرُ', meaning: 'The Able', description: 'The One attributed with Power.' },
  { id: 69, name: 'Al-Muqtadir', arabic: 'الْمُقْتَدِرُ', meaning: 'The Powerful', description: 'The One with the perfect Power.' },
  { id: 70, name: 'Al-Muqaddim', arabic: 'الْمُقَدِّمُ', meaning: 'The Expediter', description: 'The One who puts things in their right places.' },
  { id: 71, name: 'Al-Mu\'akhkhir', arabic: 'الْمُؤَخِّرُ', meaning: 'The Delayer', description: 'The One who delays what He wills.' },
  { id: 72, name: 'Al-Awwal', arabic: 'الأَوَّلُ', meaning: 'The First', description: 'The One whose Existence is without a beginning.' },
  { id: 73, name: 'Al-Akhir', arabic: 'الآخِرُ', meaning: 'The Last', description: 'The One whose Existence is without an end.' },
  { id: 74, name: 'Az-Zahir', arabic: 'الظَّاهِرُ', meaning: 'The Manifest', description: 'The One above whom nothing exists.' },
  { id: 75, name: 'Al-Batin', arabic: 'الْبَاطِنُ', meaning: 'The Hidden', description: 'The One below whom nothing exists.' },
  { id: 76, name: 'Al-Wali', arabic: 'الْوَالِي', meaning: 'The Governor', description: 'The One who owns things and manages them.' },
  { id: 77, name: 'Al-Muta\'ali', arabic: 'الْمُتَعَالِي', meaning: 'The Most Exalted', description: 'The One who is clear from the attributes of the creation.' },
  { id: 78, name: 'Al-Barr', arabic: 'الْبَرُّ', meaning: 'The Source of Goodness', description: 'The One who is kind to His creatures.' },
  { id: 79, name: 'At-Tawwab', arabic: 'التَّوَابُ', meaning: 'The Acceptor of Repentance', description: 'The One who grants repentance to whoever He willed.' },
  { id: 80, name: 'Al-Muntaqim', arabic: 'الْمُنْتَقِمُ', meaning: 'The Avenger', description: 'The One who victoriously prevails over His enemies.' },
  { id: 81, name: 'Al-Afu', arabic: 'العَفُوُّ', meaning: 'The Pardoner', description: 'The One who pardons all who repent sincerely.' },
  { id: 82, name: 'Ar-Ra\'uf', arabic: 'الرَّؤُوفُ', meaning: 'The Most Kind', description: 'The One with extreme Mercy.' },
  { id: 83, name: 'Malik-ul-Mulk', arabic: 'مَالِكُ الْمُلْكِ', meaning: 'Owner of Sovereignty', description: 'The One who controls the Dominion and gives dominion to whoever He willed.' },
  { id: 84, name: 'Dhul-Jalal-wal-Ikram', arabic: 'ذُو الْجَلاَلِ وَ الإِكْرَامِ', meaning: 'Lord of Majesty and Bounty', description: 'The One who deserves to be Exalted and not denied.' },
  { id: 85, name: 'Al-Muqsit', arabic: 'الْمُقْسِطُ', meaning: 'The Equitable', description: 'The One who is Just in His judgment.' },
  { id: 86, name: 'Al-Jami', arabic: 'الْجَامِعُ', meaning: 'The Gatherer', description: 'The One who gathers the creatures on a day there is no doubt about.' },
  { id: 87, name: 'Al-Ghani', arabic: 'الْغَنِيُّ', meaning: 'The Self-Sufficient', description: 'The One who does not need the creation.' },
  { id: 88, name: 'Al-Mughni', arabic: 'الْمُغْنِي', meaning: 'The Enricher', description: 'The One who satisfies the necessities of the creatures.' },
  { id: 89, name: 'Al-Mani', arabic: 'اَلْمَانِعُ', meaning: 'The Preventer', description: 'The One who withholds by His wisdom.' },
  { id: 90, name: 'Ad-Darr', arabic: 'الضَّارُّ', meaning: 'The Distresser', description: 'The One who creates harm and damage.' },
  { id: 91, name: 'An-Nafi', arabic: 'النَّافِعُ', meaning: 'The Propitious', description: 'The One who creates benefit.' },
  { id: 92, name: 'An-Nur', arabic: 'النُّورُ', meaning: 'The Light', description: 'The One who guides.' },
  { id: 93, name: 'Al-Hadi', arabic: 'الْهَادِي', meaning: 'The Guide', description: 'The One who guides to righteousness.' },
  { id: 94, name: 'Al-Badi', arabic: 'الْبَدِيعُ', meaning: 'The Originator', description: 'The One who created creation with no preceding example.' },
  { id: 95, name: 'Al-Baqi', arabic: 'اَلْبَاقِي', meaning: 'The Everlasting', description: 'The One that His Existence remains forever.' },
  { id: 96, name: 'Al-Warith', arabic: 'الْوَارِثُ', meaning: 'The Inheritor', description: 'The One whose Existence remains after all perish.' },
  { id: 97, name: 'Ar-Rashid', arabic: 'الرَّشِيدُ', meaning: 'The Guide to Right Path', description: 'The One who guides creation to the right path.' },
  { id: 98, name: 'As-Sabur', arabic: 'الصَّبُورُ', meaning: 'The Patient', description: 'The One who does not quickly punish the sinners.' },
  { id: 99, name: 'Allah', arabic: 'اللهُ', meaning: 'The God', description: 'The Greatest Name, encompassing all attributes of perfection.' },
];

// ============================================================================
// DAILY VERSES
// ============================================================================

const DAILY_VERSES = [
  { surah: 2, ayah: 286, arabic: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا', translation: 'Allah does not burden a soul beyond that it can bear.', topic: 'comfort' },
  { surah: 94, ayah: 6, arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', translation: 'Indeed, with hardship comes ease.', topic: 'hope' },
  { surah: 3, ayah: 139, arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ', translation: 'Do not weaken and do not grieve, and you will be superior.', topic: 'strength' },
  { surah: 2, ayah: 152, arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ', translation: 'So remember Me; I will remember you.', topic: 'remembrance' },
  { surah: 13, ayah: 28, arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', translation: 'Verily, in the remembrance of Allah do hearts find rest.', topic: 'peace' },
  { surah: 2, ayah: 186, arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ', translation: 'And when My servants ask you about Me, indeed I am near.', topic: 'closeness' },
  { surah: 65, ayah: 3, arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', translation: 'Whoever relies upon Allah, then He is sufficient for him.', topic: 'trust' },
  { surah: 29, ayah: 69, arabic: 'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا', translation: 'Those who strive for Us, We will surely guide them to Our ways.', topic: 'guidance' },
  { surah: 39, ayah: 53, arabic: 'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', translation: 'Do not despair of the mercy of Allah.', topic: 'mercy' },
  { surah: 3, ayah: 159, arabic: 'فَتَوَكَّلْ عَلَى اللَّهِ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ', translation: 'Put your trust in Allah. Indeed, Allah loves those who rely upon Him.', topic: 'trust' },
];

// ============================================================================
// QUIZ QUESTIONS
// ============================================================================

const QUIZ_QUESTIONS = [
  { id: 1, question: 'How many surahs are in the Quran?', options: ['112', '113', '114', '115'], correct: 2, difficulty: 'easy' },
  { id: 2, question: 'Which surah is known as the "Heart of the Quran"?', options: ['Al-Fatiha', 'Ya-Sin', 'Al-Baqarah', 'Al-Ikhlas'], correct: 1, difficulty: 'easy' },
  { id: 3, question: 'Which is the longest surah in the Quran?', options: ['Al-Imran', 'An-Nisa', 'Al-Baqarah', 'Al-Araf'], correct: 2, difficulty: 'easy' },
  { id: 4, question: 'Which surah does not begin with "Bismillah"?', options: ['Al-Fatiha', 'At-Tawbah', 'Al-Baqarah', 'An-Nas'], correct: 1, difficulty: 'medium' },
  { id: 5, question: 'Which surah is equivalent to 1/3 of the Quran?', options: ['Al-Fatiha', 'Al-Falaq', 'Al-Ikhlas', 'An-Nas'], correct: 2, difficulty: 'easy' },
  { id: 6, question: 'In which surah is Ayatul Kursi found?', options: ['Al-Imran', 'Al-Baqarah', 'An-Nisa', 'Al-Maidah'], correct: 1, difficulty: 'medium' },
  { id: 7, question: 'How many times is the word "Allah" mentioned in the Quran?', options: ['1,000', '2,698', '3,500', '4,000'], correct: 1, difficulty: 'hard' },
  { id: 8, question: 'Which prophet is mentioned most in the Quran?', options: ['Ibrahim', 'Isa', 'Musa', 'Muhammad'], correct: 2, difficulty: 'medium' },
  { id: 9, question: 'Which surah is recited in every unit of prayer?', options: ['Al-Ikhlas', 'Al-Fatiha', 'Al-Baqarah', 'Ya-Sin'], correct: 1, difficulty: 'easy' },
  { id: 10, question: 'What was the first word revealed of the Quran?', options: ['Bismillah', 'Iqra', 'Qul', 'Alhamdulillah'], correct: 1, difficulty: 'medium' },
  { id: 11, question: 'Which surah mentions the story of the Sleepers of the Cave?', options: ['Al-Hijr', 'Al-Kahf', 'Maryam', 'Ta-Ha'], correct: 1, difficulty: 'easy' },
  { id: 12, question: 'How many Juzz (parts) is the Quran divided into?', options: ['20', '25', '30', '35'], correct: 2, difficulty: 'easy' },
  { id: 13, question: 'Which surah is named after a woman?', options: ['An-Nisa', 'Maryam', 'Al-Mumtahanah', 'All of these'], correct: 1, difficulty: 'medium' },
  { id: 14, question: 'The first complete surah revealed was?', options: ['Al-Fatiha', 'Al-Alaq', 'Al-Muddaththir', 'Al-Muzzammil'], correct: 0, difficulty: 'hard' },
  { id: 15, question: 'Which animal is mentioned in Surah An-Naml?', options: ['Cow', 'Ant', 'Elephant', 'Spider'], correct: 1, difficulty: 'easy' },
];

// Icons
const Icons = {
  Book: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  Grid: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
  Volume: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>,
  Heart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Settings: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v10"/></svg>,
  Star: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  Fire: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 23c-3.65 0-7-2.76-7-7.5 0-3.25 2.07-5.49 4-7.5 1.61-1.68 3-3.13 3-5 0-.34.27-.62.6-.58.28.03.4.32.4.58 0 2.5 1.83 4.09 3.5 5.5 2.35 2 5 4.27 5 7.5 0 4.74-3.35 7.5-7 7.5h-2.5z"/></svg>,
  Trophy: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>,
  Lock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  Filter: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  X: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Play: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5v14l11-7z"/></svg>,
  ChevronDown: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polyline points="6 9 12 15 18 9"/></svg>,
  Bookmark: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  ZoomIn: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  ZoomOut: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
  Search: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Info: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
  Tag: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  Globe: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  BarChart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  Clock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Mic: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  Check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
  Moon: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Sun: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  Compass: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  Award: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  Target: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Share: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  Eye: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  EyeOff: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
  Repeat: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  Calendar: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Edit: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  Pause: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>,
  SkipBack: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/></svg>,
  SkipForward: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>,
  Sparkles: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M5 15l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/><path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z"/></svg>,
  Brain: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>,
  HelpCircle: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  Layers: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  PieChart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
  TrendingUp: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
};

// ============================================================================
// ULTIMATE BEAUTIFUL BUBBLE
// ============================================================================

function UltimateBubble({ surah, index, onClick, maxAyahs, total, zoom = 1 }) {
  const [hovered, setHovered] = useState(false);

  // Size with zoom factor
  const baseMinSize = 78;
  const baseMaxSize = 175;
  const minSize = baseMinSize * zoom;
  const maxSize = baseMaxSize * zoom;
  const size = minSize + ((surah.ayahs / maxAyahs) * (maxSize - minSize));
  
  // Color palette - Topic-based for content-meaningful colors
  const palette = getTopicPalette(surah);
  const topicIcon = getTopicIcon(surah);
  
  // Position with zoom factor
  const baseScale = Math.min(54, 620 / Math.sqrt(total));
  const scale = baseScale * zoom;
  const r = Math.sqrt(index + 1) * scale;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);
  
  // Animation timing
  const floatDur = 6 + (index % 4);
  const floatDelay = (index % 15) * 0.2;
  const hueRotate = (index * 15) % 360;
  
  return (
    <div
      onClick={() => onClick(surah)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute cursor-pointer"
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${x}px - ${size/2}px)`,
        top: `calc(50% + ${y}px - ${size/2}px)`,
        transform: `scale(${hovered ? 1.22 : 1}) ${hovered ? 'translateY(-10px) rotateX(5deg)' : ''}`,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: hovered ? 100 : 50 - Math.floor(index * 0.3),
        animation: `floatBubble ${floatDur}s ease-in-out infinite`,
        animationDelay: `${floatDelay}s`,
        perspective: '1000px',
      }}
    >
      {/* LAYER 1: Outer Soft Glow */}
      <div 
        className="absolute rounded-full transition-all duration-700"
        style={{
          inset: '-25%',
          background: `radial-gradient(circle at 50% 50%, ${palette.glow}40 0%, ${palette.colors[0]}20 40%, transparent 70%)`,
          opacity: hovered ? 1 : 0.4,
          filter: 'blur(15px)',
          animation: hovered ? 'breathe 2s ease-in-out infinite' : 'none',
        }}
      />
      
      {/* LAYER 2: Iridescent Rainbow Ring */}
      <div 
        className="absolute rounded-full transition-all duration-500"
        style={{
          inset: '-8%',
          background: `conic-gradient(from ${hueRotate}deg, 
            ${palette.colors[0]}90, 
            ${palette.colors[1]}90, 
            ${palette.colors[2]}90, 
            ${palette.glow}90,
            ${palette.colors[0]}90
          )`,
          opacity: hovered ? 0.9 : 0.3,
          animation: hovered ? 'spinSlow 10s linear infinite' : 'none',
          filter: 'blur(2px)',
        }}
      />
      
      {/* LAYER 3: Inner Glow Ring */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: '-4%',
          background: `radial-gradient(circle at 30% 30%, ${palette.accent}60 0%, transparent 50%)`,
          opacity: hovered ? 0.8 : 0.4,
        }}
      />
      
      {/* MAIN BUBBLE */}
      <div 
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${palette.colors[0]} 0%, ${palette.colors[1]} 50%, ${palette.colors[2]} 100%)`,
          boxShadow: hovered 
            ? `
                0 30px 60px -10px ${palette.colors[0]}70,
                0 0 0 2px rgba(255,255,255,0.5),
                0 0 40px ${palette.glow}50,
                inset 0 -30px 60px ${palette.colors[2]}60,
                inset 0 30px 60px rgba(255,255,255,0.25),
                inset 0 0 30px rgba(255,255,255,0.1)
              `
            : `
                0 15px 40px -10px ${palette.colors[0]}50,
                0 0 0 1px rgba(255,255,255,0.2),
                inset 0 -20px 40px ${palette.colors[2]}40,
                inset 0 20px 40px rgba(255,255,255,0.15)
              `,
        }}
      >
        {/* Background Pattern with Blend - No external images */}
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 30%),
              radial-gradient(circle at 80% 80%, ${palette.glow}30 0%, transparent 30%),
              radial-gradient(circle at 50% 50%, ${palette.accent}20 0%, transparent 50%)
            `,
            opacity: hovered ? 0.6 : 0.4,
            transform: hovered ? 'scale(1.2)' : 'scale(1)',
          }}
        />
        
        {/* Color Overlay with Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 25% 25%, ${palette.accent}50 0%, transparent 50%),
              radial-gradient(ellipse at 75% 75%, ${palette.colors[2]}50 0%, transparent 50%),
              linear-gradient(135deg, ${palette.colors[0]}cc 0%, transparent 50%, ${palette.colors[2]}aa 100%)
            `,
          }}
        />
        
        {/* Glass Layer 1 - Main Glass */}
        <div 
          className="absolute rounded-full"
          style={{
            inset: '6%',
            background: `
              linear-gradient(145deg,
                rgba(255,255,255,0.4) 0%,
                rgba(255,255,255,0.15) 25%,
                rgba(255,255,255,0.05) 50%,
                transparent 100%
              )
            `,
            backdropFilter: 'blur(1px)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        />
        
        {/* Glass Layer 2 - Inner Circle */}
        <div 
          className="absolute rounded-full"
          style={{
            inset: '15%',
            background: `
              radial-gradient(ellipse at 30% 30%, 
                rgba(255,255,255,0.2) 0%, 
                transparent 60%
              )
            `,
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        />
        
        {/* PRIMARY HIGHLIGHT - Top Crescent */}
        <div 
          className="absolute"
          style={{
            width: '70%',
            height: '40%',
            top: '3%',
            left: '15%',
            background: `
              linear-gradient(180deg,
                rgba(255,255,255,0.85) 0%,
                rgba(255,255,255,0.4) 40%,
                rgba(255,255,255,0.1) 70%,
                transparent 100%
              )
            `,
            borderRadius: '50%',
            filter: 'blur(1px)',
            transform: 'scaleY(0.6) rotate(-5deg)',
          }}
        />
        
        {/* SECONDARY HIGHLIGHT - Small Bright Spot */}
        <div 
          className="absolute"
          style={{
            width: '18%',
            height: '12%',
            top: '12%',
            left: '18%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* TERTIARY HIGHLIGHT - Extra Sparkle */}
        <div 
          className="absolute"
          style={{
            width: '8%',
            height: '6%',
            top: '20%',
            left: '28%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* LEFT EDGE HIGHLIGHT */}
        <div 
          className="absolute"
          style={{
            width: '8%',
            height: '30%',
            top: '30%',
            left: '6%',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(3px)',
          }}
        />
        
        {/* BOTTOM REFLECTION */}
        <div 
          className="absolute"
          style={{
            width: '60%',
            height: '30%',
            bottom: '5%',
            left: '20%',
            background: `linear-gradient(0deg, ${palette.glow}50 0%, ${palette.accent}20 50%, transparent 100%)`,
            borderRadius: '50%',
            filter: 'blur(8px)',
            transform: 'scaleY(0.5)',
          }}
        />
        
        {/* RAINBOW SHIMMER ON HOVER */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          <div 
            style={{
              position: 'absolute',
              inset: '-50%',
              background: `linear-gradient(
                90deg,
                transparent 0%,
                rgba(255,255,255,0.1) 25%,
                rgba(255,255,255,0.3) 50%,
                rgba(255,255,255,0.1) 75%,
                transparent 100%
              )`,
              animation: hovered ? 'shimmerWave 2.5s ease-in-out infinite' : 'none',
            }}
          />
        </div>
        
        {/* Iridescent Color Shift Overlay */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(${45 + hueRotate}deg, 
              rgba(255,100,100,0.1) 0%, 
              rgba(100,255,100,0.1) 33%, 
              rgba(100,100,255,0.1) 66%,
              rgba(255,100,255,0.1) 100%
            )`,
            mixBlendMode: 'overlay',
            animation: hovered ? 'colorShift 4s ease-in-out infinite' : 'none',
          }}
        />
        
        {/* TOPIC SVG ICON - Subtle Background */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500"
          style={{
            opacity: hovered ? 0.25 : 0.12,
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: size * 0.55,
              height: size * 0.55,
              fill: 'rgba(255,255,255,0.4)',
              filter: `drop-shadow(0 0 8px ${palette.glow}60)`,
            }}
          >
            <path d={topicIcon} />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-10">
          {/* Arabic Text */}
          <span
            style={{
              fontSize: Math.max(size * 0.28, 20),
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              fontWeight: 'bold',
              color: 'white',
              textShadow: `
                0 2px 4px rgba(0,0,0,0.3),
                0 4px 20px ${palette.colors[1]}90,
                0 0 40px ${palette.glow}60,
                0 0 60px ${palette.glow}40
              `,
              letterSpacing: '0.03em',
              lineHeight: 1,
            }}
          >
            {surah.arabic}
          </span>

          {/* English Name */}
          <span
            style={{
              fontSize: Math.max(size * 0.09, 10),
              fontWeight: '600',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              letterSpacing: '0.05em',
              marginTop: 4,
            }}
          >
            {surah.name}
          </span>
        </div>
        
        {/* FLOATING PARTICLES */}
        {hovered && (
          <>
            <div className="absolute w-2 h-2 bg-white rounded-full" style={{ top: '15%', right: '20%', animation: 'floatParticle 2s ease-in-out infinite', boxShadow: '0 0 10px white' }} />
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ bottom: '25%', left: '15%', animation: 'floatParticle 2.5s ease-in-out infinite 0.3s', boxShadow: '0 0 8px white' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full" style={{ top: '40%', right: '10%', animation: 'floatParticle 1.8s ease-in-out infinite 0.6s', boxShadow: '0 0 6px white' }} />
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ top: '60%', left: '12%', animation: 'floatParticle 2.2s ease-in-out infinite 0.9s', boxShadow: '0 0 8px white' }} />
          </>
        )}
      </div>
      
      {/* OUTER RING BORDER */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
        style={{
          border: `2px solid ${hovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)'}`,
          boxShadow: hovered ? `0 0 20px ${palette.glow}80, inset 0 0 20px ${palette.glow}40` : 'none',
        }}
      />
    </div>
  );
}

// Memoize to prevent unnecessary re-renders when parent updates
const MemoizedBubble = memo(UltimateBubble);

// ============================================================================
// JUZZ BUBBLE
// ============================================================================

const JuzzBubble = memo(function JuzzBubble({ juzz, index }) {
  const [hovered, setHovered] = useState(false);
  const size = 105;
  const palette = PALETTES[index % 10];
  
  const r = Math.sqrt(index + 1) * 68;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute cursor-pointer"
      style={{
        width: size, height: size,
        left: `calc(50% + ${x}px - ${size/2}px)`,
        top: `calc(50% + ${y}px - ${size/2}px)`,
        transform: `scale(${hovered ? 1.22 : 1}) ${hovered ? 'translateY(-10px)' : ''}`,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: hovered ? 100 : 50 - index,
        animation: `floatBubble ${6 + (index % 3)}s ease-in-out infinite`,
        animationDelay: `${(index % 10) * 0.2}s`,
      }}
    >
      <div className="absolute rounded-full transition-all duration-700" style={{ inset: '-20%', background: `radial-gradient(circle, ${palette.glow}40 0%, transparent 70%)`, opacity: hovered ? 1 : 0.3, filter: 'blur(12px)' }} />
      <div className="absolute rounded-full transition-all duration-500" style={{ inset: '-6%', background: `conic-gradient(from 0deg, ${palette.colors[0]}90, ${palette.colors[1]}90, ${palette.colors[2]}90, ${palette.colors[0]}90)`, opacity: hovered ? 0.8 : 0.2, animation: hovered ? 'spinSlow 10s linear infinite' : 'none', filter: 'blur(2px)' }} />
      
      <div className="relative w-full h-full rounded-full overflow-hidden" style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`, boxShadow: hovered ? `0 25px 50px -10px ${palette.colors[0]}70, 0 0 30px ${palette.glow}40, inset 0 -25px 50px ${palette.colors[2]}50, inset 0 25px 50px rgba(255,255,255,0.2)` : `0 12px 30px -8px ${palette.colors[0]}40, inset 0 -15px 30px ${palette.colors[2]}30` }}>
        {/* CSS gradient pattern instead of external image */}
        <div className="absolute inset-0 transition-all duration-700" style={{ 
          background: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 35%),
            radial-gradient(circle at 75% 75%, ${palette.glow}25 0%, transparent 35%)
          `,
          opacity: hovered ? 0.5 : 0.3, 
          transform: hovered ? 'scale(1.15)' : 'scale(1)'
        }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${palette.colors[0]}cc 0%, transparent 50%, ${palette.colors[2]}aa 100%)` }} />
        <div className="absolute rounded-full" style={{ inset: '6%', background: 'linear-gradient(145deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)', border: '1px solid rgba(255,255,255,0.25)' }} />
        <div className="absolute" style={{ width: '65%', height: '35%', top: '4%', left: '17%', background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)', borderRadius: '50%', transform: 'scaleY(0.6)' }} />
        <div className="absolute" style={{ width: '15%', height: '10%', top: '14%', left: '20%', background: 'radial-gradient(ellipse, rgba(255,255,255,1) 0%, transparent 70%)', borderRadius: '50%' }} />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <span className="text-3xl font-bold text-white" style={{ textShadow: `0 2px 4px rgba(0,0,0,0.3), 0 4px 20px ${palette.colors[1]}90` }}>{juzz.id}</span>
          <span className="text-white/90 text-sm font-semibold" style={{ fontFamily: "'Amiri', serif", textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>{juzz.arabic}</span>
        </div>
        
        {hovered && (
          <>
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ top: '18%', right: '22%', animation: 'floatParticle 2s ease-in-out infinite', boxShadow: '0 0 8px white' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full" style={{ bottom: '28%', left: '18%', animation: 'floatParticle 2.3s ease-in-out infinite 0.3s', boxShadow: '0 0 6px white' }} />
          </>
        )}
      </div>
      <div className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500" style={{ border: `2px solid ${hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}`, boxShadow: hovered ? `0 0 15px ${palette.glow}60` : 'none' }} />
    </div>
  );
});

// ============================================================================
// ZOOM SLIDER
// ============================================================================

const ZoomSlider = memo(function ZoomSlider({ zoom, setZoom }) {
  return (
    <div className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border border-gray-200/60">
      <div className="flex flex-col items-center gap-2 sm:gap-3">
        <button
          onClick={() => setZoom(Math.min(2, zoom + 0.1))}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white active:scale-95 sm:hover:scale-110 transition-all shadow-lg touch-target"
        >
          <Icons.ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="relative h-20 sm:h-32 w-2">
          <div className="absolute inset-0 bg-gray-200 rounded-full" />
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500 to-teal-500 rounded-full transition-all"
            style={{ height: `${((zoom - 0.5) / 1.5) * 100}%` }}
          />
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            style={{ writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical' }}
          />
        </div>
        <button
          onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white active:scale-95 sm:hover:scale-110 transition-all shadow-lg touch-target"
        >
          <Icons.ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <span className="text-[10px] sm:text-xs font-bold text-gray-600">{Math.round(zoom * 100)}%</span>
      </div>
    </div>
  );
});

// ============================================================================
// HEADER
// ============================================================================

const Header = memo(function Header({ filters, setFilters, showAnalytics, setShowAnalytics }) {
  const [open, setOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTopics, setShowTopics] = useState(false);
  const debounceTimer = useRef(null);

  // Debounced search - only update filters after 300ms of no typing
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setFilters(prev => ({ ...prev, search: searchQuery }));
    }, 300);
    return () => clearTimeout(debounceTimer.current);
  }, [searchQuery, setFilters]);

  const filterConfigs = [
    { id: 'rev', label: 'Revelation', icon: Icons.Clock, opts: ['All', 'Makki', 'Madani'] },
    { id: 'ayahRange', label: 'Ayahs', icon: Icons.BarChart, opts: ['All', '1-20', '21-50', '51-100', '100+'] },
    { id: 'chronOrder', label: 'Order', icon: Icons.Clock, opts: ['Default', 'Chronological', 'Reverse Chron'] },
  ];

  return (
    <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-2 sm:px-4 py-2 sm:py-4 shadow-2xl relative z-40">
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap">
        {/* Search */}
        <div className="relative">
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/15 rounded-full border border-white/25">
            <Icons.Search className="w-4 h-4 text-white/70" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white placeholder-white/50 outline-none w-20 sm:w-32 text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Filter Dropdowns - Hidden on very small screens, shown on sm+ */}
        {filterConfigs.map(f => (
          <div key={f.id} className="relative hidden sm:block">
            <button
              onClick={() => setOpen(open === f.id ? null : f.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-white font-medium transition-all backdrop-blur-sm border shadow-lg text-xs sm:text-sm ${
                (f.id === 'rev' && filters.type) ||
                (f.id === 'ayahRange' && filters.ayahRange) ||
                (f.id === 'chronOrder' && filters.chronOrder)
                  ? 'bg-white/30 border-white/50'
                  : 'bg-white/15 hover:bg-white/25 border-white/25'
              }`}
            >
              <f.icon className="w-4 h-4" />
              <span className="text-sm">{f.label}</span>
              <Icons.ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open === f.id ? 'rotate-180' : ''}`} />
            </button>
            {open === f.id && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl py-2 min-w-[160px] z-50 border border-white/50">
                {f.opts.map(o => (
                  <button
                    key={o}
                    onClick={() => {
                      if (f.id === 'rev') setFilters({...filters, type: o === 'All' ? null : o});
                      if (f.id === 'ayahRange') setFilters({...filters, ayahRange: o === 'All' ? null : o});
                      if (f.id === 'chronOrder') setFilters({...filters, chronOrder: o === 'Default' ? null : o});
                      setOpen(null);
                    }}
                    className={`w-full px-5 py-3 text-left hover:bg-purple-50 text-gray-700 font-medium transition-colors flex items-center gap-2 ${
                      (f.id === 'rev' && filters.type === o) ||
                      (f.id === 'ayahRange' && filters.ayahRange === o) ||
                      (f.id === 'chronOrder' && filters.chronOrder === o)
                        ? 'bg-purple-100 text-purple-700'
                        : ''
                    }`}
                  >
                    {((f.id === 'rev' && filters.type === o) ||
                      (f.id === 'ayahRange' && filters.ayahRange === o) ||
                      (f.id === 'chronOrder' && filters.chronOrder === o)) && (
                      <Icons.Check className="w-4 h-4" />
                    )}
                    {o}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Topics/FAQ Button */}
        <button
          onClick={() => setShowTopics(!showTopics)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition-all backdrop-blur-sm border shadow-lg ${
            filters.topic ? 'bg-white/30 border-white/50' : 'bg-white/15 hover:bg-white/25 border-white/25'
          }`}
        >
          <Icons.Tag className="w-4 h-4" />
          <span className="text-sm">Topics</span>
        </button>

        {/* Analytics Toggle */}
        <button
          onClick={() => setShowAnalytics(!showAnalytics)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition-all backdrop-blur-sm border shadow-lg ${
            showAnalytics ? 'bg-white/30 border-white/50' : 'bg-white/15 hover:bg-white/25 border-white/25'
          }`}
        >
          <Icons.BarChart className="w-4 h-4" />
          <span className="text-sm">Analytics</span>
        </button>
      </div>

      {/* Topic Tags Panel */}
      {showTopics && (
        <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="flex flex-wrap gap-2 justify-center">
            {FAQ_TOPICS.map(topic => (
              <button
                key={topic.id}
                onClick={() => {
                  setFilters({...filters, topic: filters.topic === topic.id ? null : topic.id});
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filters.topic === topic.id
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="mr-1">{topic.icon}</span>
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
});

// ============================================================================
// ANALYTICS PANEL
// ============================================================================

const AnalyticsPanel = memo(function AnalyticsPanel({ surahs }) {
  const makkiCount = surahs.filter(s => s.type === 'Makki').length;
  const madaniCount = surahs.filter(s => s.type === 'Madani').length;
  const totalAyahs = surahs.reduce((sum, s) => sum + s.ayahs, 0);
  const avgAyahs = Math.round(totalAyahs / surahs.length);
  const longestSurah = surahs.reduce((max, s) => s.ayahs > max.ayahs ? s : max, surahs[0]);
  const shortestSurah = surahs.reduce((min, s) => s.ayahs < min.ayahs ? s : min, surahs[0]);

  const stats = [
    { label: 'Total Surahs', value: surahs.length, color: 'from-violet-500 to-purple-500' },
    { label: 'Total Ayahs', value: totalAyahs.toLocaleString(), color: 'from-emerald-500 to-teal-500' },
    { label: 'Makki', value: makkiCount, color: 'from-orange-500 to-amber-500' },
    { label: 'Madani', value: madaniCount, color: 'from-blue-500 to-cyan-500' },
    { label: 'Avg Ayahs', value: avgAyahs, color: 'from-pink-500 to-rose-500' },
    { label: 'Longest', value: longestSurah?.name, color: 'from-indigo-500 to-violet-500' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-xl px-4 py-4 border-b border-gray-100 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-6 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-xl p-3 text-white text-center shadow-lg`}>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

// ============================================================================
// STATS BAR
// ============================================================================

const StatsBar = memo(function StatsBar({ level, points, streak, badges, onUpgrade }) {
  return (
    <div className="bg-white/95 backdrop-blur-xl px-4 py-4 shadow-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg shadow-emerald-500/30">
            <span className="text-xl">⭐</span>
            <span className="text-white font-bold tracking-wide">{level.toUpperCase()}</span>
          </div>
          {level === 'starter' && (
            <button onClick={onUpgrade} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all">
              <Icons.Lock className="w-4 h-4 text-white" />
              <span className="text-white font-semibold">Upgrade PRO</span>
            </button>
          )}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2"><Icons.Star className="w-6 h-6 text-amber-500 drop-shadow-lg" /><span className="font-bold text-gray-700">{points} <span className="text-gray-400 font-normal">pts</span></span></div>
          <div className="flex items-center gap-2"><Icons.Fire className="w-6 h-6 text-orange-500 drop-shadow-lg" /><span className="font-bold text-gray-700">{streak} <span className="text-gray-400 font-normal">days</span></span></div>
          <div className="flex items-center gap-2"><Icons.Trophy className="w-6 h-6 text-purple-500 drop-shadow-lg" /><span className="font-bold text-gray-700">{badges}</span></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-3">
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-full relative" style={{ width: `${(points / 1000) * 100}%` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white/70 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
});

// ============================================================================
// FLOATING MENU
// ============================================================================

function FloatingMenu({ view, setView, streak, darkMode }) {
  const [showMore, setShowMore] = useState(false);

  const mainItems = [
    { id: 'surahs', label: 'Surahs', icon: Icons.Book },
    { id: 'juzz', label: 'Juzz', icon: Icons.Grid },
    { id: 'listen', label: 'Listen', icon: Icons.Volume },
    { id: 'more', label: 'More', icon: Icons.Layers, isMore: true },
  ];

  const moreItems = [
    { id: 'daily', label: 'Daily Verse', icon: Icons.Sun },
    { id: 'names', label: '99 Names', icon: Icons.Sparkles },
    { id: 'quiz', label: 'Quiz', icon: Icons.HelpCircle },
    { id: 'prayer', label: 'Prayer', icon: Icons.Clock },
    { id: 'stats', label: 'Stats', icon: Icons.PieChart },
    { id: 'donate', label: 'Donate', icon: Icons.Heart },
    { id: 'settings', label: 'Settings', icon: Icons.Settings },
  ];

  return (
    <>
      {/* More Menu Popup */}
      {showMore && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
          <div className={`grid grid-cols-3 gap-2 p-3 rounded-2xl shadow-2xl backdrop-blur-xl ${darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200/60'} border`}>
            {moreItems.map(i => {
              const Icon = i.icon;
              const active = view === i.id;
              return (
                <button
                  key={i.id}
                  onClick={() => { setView(i.id); setShowMore(false); }}
                  className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl transition-all ${
                    active
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg'
                      : darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-semibold">{i.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Bottom Menu - Responsive */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 safe-area-bottom w-[95%] sm:w-auto max-w-md">
        <div className={`flex items-center justify-around sm:justify-center gap-0 sm:gap-1 rounded-2xl px-1 sm:px-2 py-1.5 sm:py-2 shadow-2xl shadow-black/15 border backdrop-blur-xl ${darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200/60'}`}>
          {mainItems.map(i => {
            const Icon = i.icon;
            const active = i.isMore ? showMore : view === i.id;
            return (
              <button
                key={i.id}
                onClick={() => i.isMore ? setShowMore(!showMore) : setView(i.id)}
                className={`relative flex flex-col items-center gap-0.5 px-3 sm:px-5 py-2 sm:py-3 rounded-xl transition-all duration-300 touch-target ${
                  active
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/40 scale-105'
                    : darkMode ? 'text-gray-400 hover:text-gray-200 active:bg-gray-700' : 'text-gray-500 hover:text-gray-700 active:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] sm:text-xs font-semibold">{i.label}</span>
                {i.id === 'more' && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-violet-500 to-purple-500 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center shadow-lg">7</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ============================================================================
// MODAL
// ============================================================================

function Modal({ surah, onClose, onRead }) {
  const [showInfo, setShowInfo] = useState(false);
  if (!surah) return null;
  const palette = PALETTES[(surah.id - 1) % 10];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="relative h-52" style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})` }}>
          <div className="absolute inset-0 opacity-25" style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%),
              linear-gradient(135deg, ${palette.colors[0]}40 0%, ${palette.colors[2]}40 100%)
            `
          }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 30%, ${palette.glow}40 0%, transparent 60%)` }} />

          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all z-50 cursor-pointer"
          >
            <Icons.X className="w-5 h-5" />
          </button>

          {/* Info Toggle Button */}
          <button
            onClick={(e) => { e.stopPropagation(); setShowInfo(!showInfo); }}
            className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all z-50 cursor-pointer"
          >
            <Icons.Info className="w-5 h-5" />
          </button>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="w-28 h-28 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255,255,255,0.4)', boxShadow: `0 15px 40px ${palette.colors[0]}50` }}>
              <span className="text-5xl font-bold" style={{ fontFamily: "'Scheherazade New', serif", textShadow: `0 2px 15px rgba(0,0,0,0.3), 0 0 30px ${palette.glow}60` }}>{surah.arabic}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-wide">{surah.name}</h2>
            <p className="text-white/90 text-sm mt-1 font-medium">"{surah.meaning}"</p>
            <p className="text-white/70 text-xs mt-1">Surah {surah.id} • {surah.ayahs} Ayahs • {surah.type} • #{surah.chronOrder} in revelation</p>
          </div>
        </div>

        <div className="p-6">
          {/* Info Section - Why Named */}
          {showInfo && (
            <div className="mb-6 p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Icons.Info className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Why is it called "{surah.name}"?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{surah.reason}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: `${palette.glow}30`, color: palette.colors[1] }}>{surah.type}</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">{surah.ayahs} Ayahs</span>
            {surah.topics?.slice(0, 3).map(topic => (
              <span key={topic} className="px-3 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">
                {FAQ_TOPICS.find(t => t.id === topic)?.icon} {topic}
              </span>
            ))}
          </div>

          {/* Revelation Order Info */}
          <div className="mb-6 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Revelation Order</span>
              <span className="font-bold text-gray-800">#{surah.chronOrder} of 114</span>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                style={{ width: `${(surah.chronOrder / 114) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => onRead(surah)} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white transition-all hover:shadow-xl hover:scale-[1.02]" style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`, boxShadow: `0 15px 40px -10px ${palette.colors[0]}80` }}><Icons.Play className="w-5 h-5" />Start Reading</button>
            <button className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"><Icons.Volume className="w-5 h-5 text-gray-600" /></button>
            <button className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"><Icons.Bookmark className="w-5 h-5 text-gray-600" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// OTHER VIEWS
// ============================================================================

function ListView({ level }) {
  const [activeTab, setActiveTab] = useState('reciters');
  const [selectedReciter, setSelectedReciter] = useState(null);
  const [selectedTranslation, setSelectedTranslation] = useState('sahih');
  const [reciterFilter, setReciterFilter] = useState('all'); // all, popular, murattal, mujawwad

  const filteredReciters = RECITERS.filter(r => {
    if (reciterFilter === 'popular') return r.popular;
    if (reciterFilter === 'murattal') return r.style === 'Murattal';
    if (reciterFilter === 'mujawwad') return r.style === 'Mujawwad';
    return true;
  });

  return (
    <div className="h-full flex flex-col p-6 overflow-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Listen to Quran</h2>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveTab('reciters')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'reciters'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Icons.Mic className="w-4 h-4 inline mr-2" />
          Reciters
        </button>
        <button
          onClick={() => setActiveTab('translations')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'translations'
              ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Icons.Globe className="w-4 h-4 inline mr-2" />
          Translations
        </button>
      </div>

      {activeTab === 'reciters' && (
        <>
          {/* Reciter Filters */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {[
              { id: 'all', label: 'All' },
              { id: 'popular', label: 'Popular' },
              { id: 'murattal', label: 'Murattal' },
              { id: 'mujawwad', label: 'Mujawwad' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setReciterFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  reciterFilter === f.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Reciters Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {filteredReciters.map((reciter, i) => {
              const p = PALETTES[(i + 4) % 10];
              const locked = reciter.pro && level === 'starter';
              const isSelected = selectedReciter === reciter.id;
              return (
                <div
                  key={reciter.id}
                  onClick={() => !locked && setSelectedReciter(reciter.id)}
                  className={`relative rounded-2xl p-4 text-center cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                    locked ? 'opacity-60' : 'hover:scale-105'
                  } ${isSelected ? 'ring-4 ring-white ring-offset-2' : ''}`}
                  style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
                >
                  <div className="absolute inset-0 opacity-20" style={{
                    background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 40%)`
                  }} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 border border-white/30">
                      {isSelected ? (
                        <Icons.Check className="w-8 h-8 text-white" />
                      ) : (
                        <Icons.Volume className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <h3 className="font-bold text-white text-sm">{reciter.name}</h3>
                    <p className="text-white/70 text-xs">{reciter.country}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-white/20 rounded-full text-white text-xs">{reciter.style}</span>
                    {locked && (
                      <div className="flex items-center justify-center gap-1 text-yellow-200 mt-2 text-xs font-semibold">
                        <Icons.Lock className="w-3 h-3" /> PRO
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === 'translations' && (
        <div className="max-w-2xl mx-auto w-full">
          <p className="text-center text-gray-500 mb-6">Select your preferred translation</p>
          <div className="space-y-3">
            {TRANSLATIONS.map((trans, i) => {
              const isSelected = selectedTranslation === trans.id;
              const p = PALETTES[(i + 2) % 10];
              return (
                <div
                  key={trans.id}
                  onClick={() => setSelectedTranslation(trans.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r shadow-lg'
                      : 'bg-white hover:bg-gray-50 border border-gray-100'
                  }`}
                  style={isSelected ? { background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` } : {}}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-bold ${isSelected ? 'text-white' : 'text-gray-800'}`}>{trans.name}</h3>
                      <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>{trans.language} • {trans.description}</p>
                    </div>
                    {isSelected && (
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Icons.Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function DonateView() {
  const amounts = [5, 10, 25, 50, 100, 'Custom'];
  return (
    <div className="h-full flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Support the Project</h2>
      <div className="grid grid-cols-3 gap-4 max-w-md">
        {amounts.map((a, i) => {
          const p = PALETTES[(i + 6) % 10];
          return (
            <div key={i} className="relative rounded-2xl p-6 text-center cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all" style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}>
              <div className="absolute inset-0 opacity-15" style={{ 
                background: `
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)
                `
              }} />
              <div className="relative z-10"><Icons.Heart className="w-10 h-10 mx-auto text-white mb-2" /><p className="font-bold text-white text-xl">{typeof a === 'number' ? `$${a}` : a}</p></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SettingsView({ darkMode, setDarkMode }) {
  const [s, setS] = useState({ notify: true, auto: false, trans: true, tajweed: false, wordByWord: false });
  return (
    <div className={`h-full flex flex-col items-center justify-center p-6 ${darkMode ? 'text-white' : ''}`}>
      <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Settings</h2>
      <div className="w-full max-w-md space-y-4">
        {/* Dark Mode Toggle */}
        <div className={`rounded-2xl p-5 shadow-lg border flex items-center justify-between ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center gap-3">
            {darkMode ? <Icons.Moon className="w-5 h-5 text-purple-400" /> : <Icons.Sun className="w-5 h-5 text-amber-500" />}
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Dark Mode</span>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className={`w-14 h-8 rounded-full relative transition-all ${darkMode ? 'bg-gradient-to-r from-purple-500 to-violet-500 shadow-lg shadow-purple-500/30' : 'bg-gray-200'}`}>
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${darkMode ? 'left-7' : 'left-1'}`} />
          </button>
        </div>

        {[
          { k: 'notify', l: 'Notifications', icon: null },
          { k: 'auto', l: 'Auto-play Audio', icon: null },
          { k: 'trans', l: 'Show Translation', icon: null },
          { k: 'tajweed', l: 'Tajweed Highlighting', icon: null },
          { k: 'wordByWord', l: 'Word-by-Word Mode', icon: null },
        ].map(i => (
          <div key={i.k} className={`rounded-2xl p-5 shadow-lg border flex items-center justify-between ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{i.l}</span>
            <button onClick={() => setS(p => ({ ...p, [i.k]: !p[i.k] }))} className={`w-14 h-8 rounded-full relative transition-all ${s[i.k] ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30' : darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${s[i.k] ? 'left-7' : 'left-1'}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// QURAN READER VIEW
// ============================================================================

function QuranReaderView({ surah, onBack, darkMode, bookmarks, setBookmarks }) {
  const [currentAyah, setCurrentAyah] = useState(0);
  const [showTafsir, setShowTafsir] = useState(false);
  const [memorizationMode, setMemorizationMode] = useState(false);
  const [hiddenAyahs, setHiddenAyahs] = useState(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const [notes, setNotes] = useState({});
  const [showNoteInput, setShowNoteInput] = useState(null);
  const [noteText, setNoteText] = useState('');

  const verses = QURAN_VERSES[surah?.id] || [];
  const palette = PALETTES[(surah?.id - 1) % 10];

  const toggleHidden = (ayahNum) => {
    const newHidden = new Set(hiddenAyahs);
    if (newHidden.has(ayahNum)) {
      newHidden.delete(ayahNum);
    } else {
      newHidden.add(ayahNum);
    }
    setHiddenAyahs(newHidden);
  };

  const toggleBookmark = (surahId, ayahNum) => {
    const key = `${surahId}:${ayahNum}`;
    const newBookmarks = { ...bookmarks };
    if (newBookmarks[key]) {
      delete newBookmarks[key];
    } else {
      newBookmarks[key] = { surahId, ayahNum, timestamp: Date.now() };
    }
    setBookmarks(newBookmarks);
  };

  const saveNote = (ayahNum) => {
    if (noteText.trim()) {
      setNotes({ ...notes, [ayahNum]: noteText });
    }
    setShowNoteInput(null);
    setNoteText('');
  };

  if (!surah) return null;

  return (
    <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="p-4 flex items-center justify-between" style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})` }}>
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
          <Icons.X className="w-5 h-5" />
        </button>
        <div className="text-center text-white">
          <h2 className="text-xl font-bold">{surah.name}</h2>
          <p className="text-sm opacity-80">{surah.arabic} • {surah.meaning}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMemorizationMode(!memorizationMode)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${memorizationMode ? 'bg-white text-purple-600' : 'bg-white/20 text-white'}`}
          >
            <Icons.Brain className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Memorization Mode Banner */}
      {memorizationMode && (
        <div className="bg-purple-100 dark:bg-purple-900 px-4 py-2 text-center">
          <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">
            Memorization Mode: Click verses to hide/reveal
          </span>
        </div>
      )}

      {/* Verses */}
      <div className="flex-1 overflow-auto p-4">
        {verses.length > 0 ? (
          <div className="max-w-2xl mx-auto space-y-6">
            {verses.map((verse, idx) => {
              const isHidden = hiddenAyahs.has(verse.ayah);
              const isBookmarked = bookmarks[`${surah.id}:${verse.ayah}`];
              return (
                <div
                  key={verse.ayah}
                  className={`rounded-2xl p-5 transition-all ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg ${currentAyah === idx ? 'ring-2 ring-emerald-500' : ''}`}
                  onClick={() => memorizationMode && toggleHidden(verse.ayah)}
                >
                  {/* Ayah Number & Actions */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})` }}>
                      {verse.ayah}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleBookmark(surah.id, verse.ayah); }}
                        className={`p-2 rounded-full ${isBookmarked ? 'bg-amber-100 text-amber-600' : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}
                      >
                        <Icons.Bookmark className="w-4 h-4" style={{ fill: isBookmarked ? 'currentColor' : 'none' }} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setShowNoteInput(showNoteInput === verse.ayah ? null : verse.ayah); }}
                        className={`p-2 rounded-full ${notes[verse.ayah] ? 'bg-blue-100 text-blue-600' : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}
                      >
                        <Icons.Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentAyah(idx); setIsPlaying(true); }}
                        className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}
                      >
                        <Icons.Volume className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Arabic Text */}
                  <div
                    className={`text-right mb-4 leading-loose transition-all ${isHidden && memorizationMode ? 'blur-lg select-none' : ''}`}
                    style={{ fontFamily: "'Scheherazade New', 'Amiri', serif", fontSize: '1.75rem' }}
                  >
                    <span className={darkMode ? 'text-white' : 'text-gray-800'}>{verse.arabic}</span>
                  </div>

                  {/* Transliteration */}
                  <p className={`text-sm italic mb-2 ${isHidden && memorizationMode ? 'blur-lg' : ''} ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {verse.transliteration}
                  </p>

                  {/* Translation */}
                  <p className={`${isHidden && memorizationMode ? 'blur-lg' : ''} ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {verse.translation}
                  </p>

                  {/* Note Input */}
                  {showNoteInput === verse.ayah && (
                    <div className="mt-4 flex gap-2" onClick={e => e.stopPropagation()}>
                      <input
                        type="text"
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder="Add your note..."
                        className={`flex-1 px-4 py-2 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'}`}
                      />
                      <button onClick={() => saveNote(verse.ayah)} className="px-4 py-2 bg-emerald-500 text-white rounded-xl">Save</button>
                    </div>
                  )}

                  {/* Saved Note */}
                  {notes[verse.ayah] && showNoteInput !== verse.ayah && (
                    <div className={`mt-3 p-3 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                      <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                        <strong>Note:</strong> {notes[verse.ayah]}
                      </p>
                    </div>
                  )}

                  {/* Tafsir Toggle */}
                  {verse.tafsir && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setShowTafsir(showTafsir === verse.ayah ? null : verse.ayah); }}
                      className={`mt-3 text-sm font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
                    >
                      {showTafsir === verse.ayah ? 'Hide Tafsir' : 'Show Tafsir'}
                    </button>
                  )}

                  {/* Tafsir Content */}
                  {showTafsir === verse.ayah && verse.tafsir && (
                    <div className={`mt-3 p-4 rounded-xl ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                      <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                        <strong>Tafsir:</strong> {verse.tafsir}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Icons.Book className={`w-16 h-16 mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Full text coming soon for this surah.</p>
            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Try Al-Fatiha (1), Al-Ikhlas (112), Al-Falaq (113), An-Nas (114), or Ya-Sin (36)</p>
          </div>
        )}
      </div>

      {/* Audio Player Bar */}
      {isPlaying && verses.length > 0 && (
        <div className={`p-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setCurrentAyah(Math.max(0, currentAyah - 1))} className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Icons.SkipBack className="w-5 h-5" />
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                {isPlaying ? <Icons.Pause className="w-5 h-5" /> : <Icons.Play className="w-5 h-5" />}
              </button>
              <button onClick={() => setCurrentAyah(Math.min(verses.length - 1, currentAyah + 1))} className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Icons.SkipForward className="w-5 h-5" />
              </button>
            </div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Ayah {currentAyah + 1} of {verses.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 99 NAMES OF ALLAH VIEW
// ============================================================================

function NamesOfAllahView({ darkMode }) {
  const [selectedName, setSelectedName] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNames = NAMES_OF_ALLAH.filter(name =>
    name.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    name.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
    name.arabic.includes(searchQuery)
  );

  return (
    <div className={`h-full flex flex-col p-6 overflow-auto ${darkMode ? 'text-white' : ''}`}>
      <div className="text-center mb-6">
        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>99 Names of Allah</h2>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Asma ul Husna - The Beautiful Names</p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto w-full mb-6">
        <div className={`flex items-center gap-2 px-4 py-3 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <Icons.Search className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search names..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`flex-1 bg-transparent outline-none ${darkMode ? 'text-white placeholder-gray-500' : 'placeholder-gray-400'}`}
          />
        </div>
      </div>

      {/* Names Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {filteredNames.map((name, i) => {
          const p = PALETTES[i % 10];
          return (
            <div
              key={name.id}
              onClick={() => setSelectedName(name)}
              className={`rounded-2xl p-4 cursor-pointer transition-all hover:scale-105 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'
              } shadow-lg`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2" style={{ fontFamily: "'Scheherazade New', serif", color: p.colors[0] }}>
                  {name.arabic}
                </div>
                <div className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>{name.name}</div>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{name.meaning}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Name Modal */}
      {selectedName && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedName(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className={`relative rounded-3xl max-w-md w-full p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedName(null)} className="absolute top-4 right-4">
              <Icons.X className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
            <div className="text-center">
              <div className="text-6xl mb-4" style={{ fontFamily: "'Scheherazade New', serif", color: PALETTES[selectedName.id % 10].colors[0] }}>
                {selectedName.arabic}
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedName.name}</h3>
              <p className="text-lg text-emerald-500 font-medium mb-4">{selectedName.meaning}</p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{selectedName.description}</p>
              <div className="mt-4 flex justify-center gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl flex items-center gap-2">
                  <Icons.Volume className="w-4 h-4" /> Listen
                </button>
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center gap-2">
                  <Icons.Share className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// QUIZ VIEW
// ============================================================================

function QuizView({ darkMode, onEarnPoints }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [difficulty, setDifficulty] = useState('all');

  const filteredQuestions = difficulty === 'all'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter(q => q.difficulty === difficulty);

  const question = filteredQuestions[currentQuestion];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === question.correct) {
      setScore(score + 1);
      onEarnPoints(10);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <div className={`h-full flex flex-col items-center justify-center p-6 ${darkMode ? 'text-white' : ''}`}>
        <div className={`rounded-3xl p-8 text-center max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
          <Icons.Award className="w-20 h-20 mx-auto mb-4 text-amber-500" />
          <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quiz Complete!</h2>
          <p className={`text-6xl font-bold my-6 ${percentage >= 70 ? 'text-emerald-500' : percentage >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
            {percentage}%
          </p>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            You got {score} out of {filteredQuestions.length} questions correct!
          </p>
          <button
            onClick={restartQuiz}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full flex flex-col p-6 ${darkMode ? 'text-white' : ''}`}>
      <div className="text-center mb-6">
        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quran Quiz</h2>

        {/* Difficulty Selector */}
        <div className="flex justify-center gap-2 mt-4">
          {['all', 'easy', 'medium', 'hard'].map(d => (
            <button
              key={d}
              onClick={() => { setDifficulty(d); restartQuiz(); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                difficulty === d
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                  : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-lg mx-auto w-full mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Question {currentQuestion + 1} of {filteredQuestions.length}</span>
          <span className="text-emerald-500 font-bold">Score: {score}</span>
        </div>
        <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className={`rounded-3xl p-6 max-w-lg w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
            question.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
            question.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' :
            'bg-red-100 text-red-700'
          }`}>
            {question.difficulty}
          </div>

          <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              let bgColor = darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100';
              if (showResult) {
                if (idx === question.correct) {
                  bgColor = 'bg-emerald-500 text-white';
                } else if (idx === selectedAnswer && idx !== question.correct) {
                  bgColor = 'bg-red-500 text-white';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => !showResult && handleAnswer(idx)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-2xl text-left font-medium transition-all ${bgColor} ${
                    !showResult ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <span className="mr-3">{String.fromCharCode(65 + idx)}.</span>
                  {option}
                </button>
              );
            })}
          </div>

          {showResult && (
            <button
              onClick={nextQuestion}
              className="w-full mt-6 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl font-bold"
            >
              {currentQuestion < filteredQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PRAYER TIMES VIEW
// ============================================================================

function PrayerTimesView({ darkMode }) {
  const [qiblaAngle, setQiblaAngle] = useState(0);
  const [compassHeading, setCompassHeading] = useState(0);

  // Sample prayer times (in real app, these would be calculated based on location)
  const prayerTimes = [
    { name: 'Fajr', arabic: 'الفجر', time: '5:23 AM', icon: '🌅', passed: true },
    { name: 'Sunrise', arabic: 'الشروق', time: '6:45 AM', icon: '☀️', passed: true },
    { name: 'Dhuhr', arabic: 'الظهر', time: '12:30 PM', icon: '🌞', passed: false, current: true },
    { name: 'Asr', arabic: 'العصر', time: '3:45 PM', icon: '🌤️', passed: false },
    { name: 'Maghrib', arabic: 'المغرب', time: '6:15 PM', icon: '🌅', passed: false },
    { name: 'Isha', arabic: 'العشاء', time: '7:45 PM', icon: '🌙', passed: false },
  ];

  // Simulate compass (in real app, would use device orientation API)
  useState(() => {
    const interval = setInterval(() => {
      setCompassHeading(prev => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <div className={`h-full flex flex-col p-6 overflow-auto ${darkMode ? 'text-white' : ''}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Prayer Times</h2>

      {/* Prayer Times List */}
      <div className="max-w-md mx-auto w-full space-y-3 mb-8">
        {prayerTimes.map((prayer, i) => (
          <div
            key={prayer.name}
            className={`flex items-center justify-between p-4 rounded-2xl ${
              prayer.current
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : prayer.passed
                ? darkMode ? 'bg-gray-800/50 opacity-60' : 'bg-gray-100 opacity-60'
                : darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{prayer.icon}</span>
              <div>
                <div className={`font-bold ${prayer.current ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>{prayer.name}</div>
                <div className={`text-sm ${prayer.current ? 'text-white/80' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{prayer.arabic}</div>
              </div>
            </div>
            <div className={`text-xl font-bold ${prayer.current ? 'text-white' : darkMode ? 'text-white' : 'text-gray-800'}`}>
              {prayer.time}
            </div>
          </div>
        ))}
      </div>

      {/* Qibla Compass */}
      <div className={`max-w-md mx-auto w-full rounded-3xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
        <h3 className={`text-xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Qibla Direction</h3>
        <div className="relative w-48 h-48 mx-auto">
          {/* Compass Ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-emerald-500"
            style={{
              background: `conic-gradient(from 0deg, #10b981 0deg, #10b981 10deg, transparent 10deg, transparent 350deg, #10b981 350deg)`,
              transform: `rotate(${-compassHeading}deg)`,
              transition: 'transform 0.1s linear'
            }}
          />
          {/* Direction Markers */}
          {['N', 'E', 'S', 'W'].map((dir, i) => (
            <div
              key={dir}
              className="absolute font-bold text-sm"
              style={{
                top: i === 0 ? '8px' : i === 2 ? 'auto' : '50%',
                bottom: i === 2 ? '8px' : 'auto',
                left: i === 3 ? '8px' : i === 1 ? 'auto' : '50%',
                right: i === 1 ? '8px' : 'auto',
                transform: i === 0 || i === 2 ? 'translateX(-50%)' : 'translateY(-50%)',
                color: dir === 'N' ? '#ef4444' : darkMode ? '#9ca3af' : '#6b7280'
              }}
            >
              {dir}
            </div>
          ))}
          {/* Kaaba Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl">🕋</div>
          </div>
          {/* Compass Needle */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-16 bg-red-500 origin-bottom"
            style={{
              transform: `translate(-50%, -100%) rotate(${qiblaAngle - compassHeading}deg)`,
              borderRadius: '2px'
            }}
          />
        </div>
        <p className={`text-center mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Point your device towards the Qibla
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// DAILY VERSE WIDGET
// ============================================================================

function DailyVerseWidget({ darkMode }) {
  const today = new Date().getDate();
  const verse = DAILY_VERSES[today % DAILY_VERSES.length];
  const p = PALETTES[today % 10];

  return (
    <div className="rounded-3xl p-6 mb-6 text-white shadow-xl" style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}>
      <div className="flex items-center gap-2 mb-4">
        <Icons.Sparkles className="w-5 h-5" />
        <span className="font-semibold">Verse of the Day</span>
      </div>
      <div className="text-2xl mb-3 text-right leading-loose" style={{ fontFamily: "'Scheherazade New', serif" }}>
        {verse.arabic}
      </div>
      <p className="text-white/90 mb-2">{verse.translation}</p>
      <p className="text-white/60 text-sm">Surah {verse.surah}, Ayah {verse.ayah}</p>
      <div className="flex gap-2 mt-4">
        <button className="px-4 py-2 bg-white/20 rounded-xl flex items-center gap-2 hover:bg-white/30 transition-all">
          <Icons.Share className="w-4 h-4" /> Share
        </button>
        <button className="px-4 py-2 bg-white/20 rounded-xl flex items-center gap-2 hover:bg-white/30 transition-all">
          <Icons.Bookmark className="w-4 h-4" /> Save
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// DAILY VERSE VIEW (Full Page)
// ============================================================================

function DailyVerseView({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(new Date().getDate() % DAILY_VERSES.length);
  const verse = DAILY_VERSES[currentIndex];
  const p = PALETTES[currentIndex % 10];
  const surah = SURAHS.find(s => s.id === verse.surah);

  const nextVerse = () => setCurrentIndex((currentIndex + 1) % DAILY_VERSES.length);
  const prevVerse = () => setCurrentIndex((currentIndex - 1 + DAILY_VERSES.length) % DAILY_VERSES.length);

  return (
    <div className={`h-full flex flex-col items-center justify-center p-6 ${darkMode ? 'text-white' : ''}`}>
      <div className="max-w-lg w-full">
        <h2 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Daily Verses
        </h2>

        {/* Main Verse Card */}
        <div
          className="rounded-3xl p-8 text-white shadow-2xl mb-6"
          style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]}, ${p.colors[2]})` }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Icons.Sparkles className="w-6 h-6" />
              <span className="font-semibold">Verse of the Day</span>
            </div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
              {currentIndex + 1} / {DAILY_VERSES.length}
            </span>
          </div>

          {/* Arabic Text */}
          <div
            className="text-4xl mb-6 text-right leading-loose"
            style={{ fontFamily: "'Scheherazade New', serif" }}
          >
            {verse.arabic}
          </div>

          {/* Translation */}
          <p className="text-xl text-white/95 mb-4 leading-relaxed">
            "{verse.translation}"
          </p>

          {/* Reference */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 font-medium">{surah?.name || `Surah ${verse.surah}`}</p>
              <p className="text-white/60 text-sm">Ayah {verse.ayah}</p>
            </div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm capitalize">
              {verse.topic}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={prevVerse}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'
            }`}
          >
            <Icons.SkipBack className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
          </button>
          <button
            onClick={nextVerse}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'
            }`}
          >
            <Icons.SkipForward className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
            <Icons.Share className="w-5 h-5" /> Share
          </button>
          <button className={`px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
          }`}>
            <Icons.Bookmark className="w-5 h-5" /> Save
          </button>
          <button className={`px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
          }`}>
            <Icons.Volume className="w-5 h-5" /> Listen
          </button>
        </div>

        {/* Topic Pills */}
        <div className="mt-8">
          <p className={`text-center text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Browse by topic
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['comfort', 'hope', 'strength', 'peace', 'trust', 'guidance', 'mercy'].map((topic, i) => (
              <button
                key={topic}
                onClick={() => {
                  const idx = DAILY_VERSES.findIndex(v => v.topic === topic);
                  if (idx !== -1) setCurrentIndex(idx);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  verse.topic === topic
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// STATISTICS VIEW
// ============================================================================

function StatisticsView({ darkMode, readingProgress, streak, points }) {
  const completedSurahs = Object.keys(readingProgress).length;
  const totalAyahsRead = Object.values(readingProgress).reduce((sum, p) => sum + (p.ayahsRead || 0), 0);

  const weeklyData = [65, 40, 80, 30, 95, 50, 70]; // Sample data
  const maxData = Math.max(...weeklyData);

  return (
    <div className={`h-full flex flex-col p-6 overflow-auto ${darkMode ? 'text-white' : ''}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Statistics</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto w-full mb-6">
        {[
          { label: 'Surahs Read', value: completedSurahs, icon: Icons.Book, color: 'from-emerald-500 to-teal-500' },
          { label: 'Ayahs Read', value: totalAyahsRead, icon: Icons.Layers, color: 'from-violet-500 to-purple-500' },
          { label: 'Day Streak', value: streak, icon: Icons.Fire, color: 'from-orange-500 to-amber-500' },
          { label: 'Total Points', value: points, icon: Icons.Star, color: 'from-pink-500 to-rose-500' },
        ].map((stat, i) => {
          const StatIcon = stat.icon;
          return (
            <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-white shadow-lg`}>
              <StatIcon className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Weekly Activity Chart */}
      <div className={`max-w-lg mx-auto w-full rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl mb-6`}>
        <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Weekly Activity</h3>
        <div className="flex items-end justify-between h-32 gap-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-gradient-to-t from-emerald-500 to-teal-500 rounded-t-lg transition-all"
                style={{ height: `${(weeklyData[i] / maxData) * 100}%`, minHeight: '8px' }}
              />
              <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className={`max-w-lg mx-auto w-full rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
        <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Achievements</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { emoji: '📖', title: 'First Read', unlocked: true },
            { emoji: '🔥', title: '7 Day Streak', unlocked: streak >= 7 },
            { emoji: '⭐', title: '100 Points', unlocked: points >= 100 },
            { emoji: '🏆', title: 'Quiz Master', unlocked: false },
            { emoji: '📚', title: '10 Surahs', unlocked: completedSurahs >= 10 },
            { emoji: '🎯', title: 'Memorizer', unlocked: false },
            { emoji: '💎', title: 'Pro Member', unlocked: false },
            { emoji: '🌟', title: 'Dedicated', unlocked: streak >= 30 },
          ].map((ach, i) => (
            <div key={i} className={`text-center p-3 rounded-xl ${ach.unlocked ? '' : 'opacity-30 grayscale'} ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="text-2xl mb-1">{ach.emoji}</div>
              <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{ach.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN APP
// ============================================================================

function QuranBubbleAppInner() {
  // Load persisted data from localStorage
  const loadFromStorage = (key, defaultValue) => {
    try {
      const saved = localStorage.getItem(`quran_app_${key}`);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  const [view, setView] = useState('surahs');
  const [level, setLevel] = useState(() => loadFromStorage('level', 'starter'));
  const [points, setPoints] = useState(() => loadFromStorage('points', 170));
  const [streak, setStreak] = useState(() => loadFromStorage('streak', 3));
  const [badges, setBadges] = useState(() => loadFromStorage('badges', 2));
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({ type: null, ayahRange: null, chronOrder: null, topic: null, search: '' });
  const [zoom, setZoom] = useState(() => loadFromStorage('zoom', 1));
  const [showAnalytics, setShowAnalytics] = useState(false);

  // New states for added features - persisted
  const [darkMode, setDarkMode] = useState(() => loadFromStorage('darkMode', false));
  const [bookmarks, setBookmarks] = useState(() => loadFromStorage('bookmarks', {}));
  const [readingProgress, setReadingProgress] = useState(() => loadFromStorage('readingProgress', {}));

  // Persist state changes to localStorage
  useEffect(() => {
    localStorage.setItem('quran_app_darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('quran_app_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('quran_app_readingProgress', JSON.stringify(readingProgress));
  }, [readingProgress]);

  useEffect(() => {
    localStorage.setItem('quran_app_points', JSON.stringify(points));
  }, [points]);

  useEffect(() => {
    localStorage.setItem('quran_app_level', JSON.stringify(level));
  }, [level]);

  useEffect(() => {
    localStorage.setItem('quran_app_streak', JSON.stringify(streak));
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('quran_app_zoom', JSON.stringify(zoom));
  }, [zoom]);
  const [readerSurah, setReaderSurah] = useState(null);

  const filtered = useMemo(() => {
    let r = [...SURAHS];

    // Search filter
    if (filters.search) {
      const q = filters.search.toLowerCase();
      r = r.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.arabic.includes(q) ||
        s.meaning?.toLowerCase().includes(q)
      );
    }

    // Type filter (Makki/Madani)
    if (filters.type) r = r.filter(s => s.type === filters.type);

    // Ayah range filter
    if (filters.ayahRange) {
      if (filters.ayahRange === '1-20') r = r.filter(s => s.ayahs >= 1 && s.ayahs <= 20);
      if (filters.ayahRange === '21-50') r = r.filter(s => s.ayahs >= 21 && s.ayahs <= 50);
      if (filters.ayahRange === '51-100') r = r.filter(s => s.ayahs >= 51 && s.ayahs <= 100);
      if (filters.ayahRange === '100+') r = r.filter(s => s.ayahs > 100);
    }

    // Topic filter
    if (filters.topic) {
      r = r.filter(s => s.topics?.includes(filters.topic));
    }

    // Chronological order
    if (filters.chronOrder === 'Chronological') {
      r = r.sort((a, b) => a.chronOrder - b.chronOrder);
    } else if (filters.chronOrder === 'Reverse Chron') {
      r = r.sort((a, b) => b.chronOrder - a.chronOrder);
    }

    return r;
  }, [filters]);

  // Memoize maxAyahs since SURAHS is constant
  const maxAyahs = useMemo(() => Math.max(...SURAHS.map(s => s.ayahs)), []);

  // Memoize callbacks to prevent child re-renders
  const handleSelectSurah = useCallback((surah) => {
    setSelected(surah);
  }, []);

  const handleReadSurah = useCallback((surah) => {
    setReaderSurah(surah);
    setSelected(null);
    setPoints(p => p + 10);
    // Update reading progress
    setReadingProgress(prev => ({
      ...prev,
      [surah.id]: { lastRead: Date.now(), ayahsRead: (prev[surah.id]?.ayahsRead || 0) + 1 }
    }));
  }, []);

  // If reader is open, show full screen reader
  if (readerSurah) {
    return (
      <QuranReaderView
        surah={readerSurah}
        onBack={() => setReaderSurah(null)}
        darkMode={darkMode}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
    );
  }

  return (
    <div className={`h-screen flex flex-col overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : ''}`} style={darkMode ? {} : { background: 'linear-gradient(135deg, #f0fdfa 0%, #ecfeff 25%, #f0f9ff 50%, #eff6ff 75%, #eef2ff 100%)' }}>
      {view === 'surahs' && <Header filters={filters} setFilters={setFilters} showAnalytics={showAnalytics} setShowAnalytics={setShowAnalytics} />}
      {view === 'surahs' && showAnalytics && <AnalyticsPanel surahs={filtered} />}
      {view === 'surahs' && <StatsBar level={level} points={points} streak={streak} badges={badges} onUpgrade={() => setLevel('pro')} />}

      <main className="flex-1 relative overflow-hidden">
        {view === 'surahs' && (
          <>
            <ZoomSlider zoom={zoom} setZoom={setZoom} />
            <div className="absolute inset-0 overflow-auto">
              <div className="relative w-full" style={{ height: `${180 * zoom}%`, minHeight: `${1200 * zoom}px` }}>
                {filtered.map((s, i) => <MemoizedBubble key={s.id} surah={s} index={i} onClick={handleSelectSurah} maxAyahs={maxAyahs} total={filtered.length} zoom={zoom} />)}
              </div>
            </div>
            {/* Filter info */}
            {(filters.type || filters.ayahRange || filters.topic || filters.search) && (
              <div className={`absolute top-4 right-4 z-30 backdrop-blur-xl rounded-2xl px-4 py-2 shadow-lg border ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'}`}>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Showing {filtered.length} of 114 surahs</span>
                <button
                  onClick={() => setFilters({ type: null, ayahRange: null, chronOrder: null, topic: null, search: '' })}
                  className="ml-3 text-sm text-purple-600 font-semibold hover:text-purple-800"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
        {view === 'juzz' && (
          <div className="absolute inset-0 overflow-auto">
            <div className="relative w-full" style={{ height: '150%', minHeight: '1000px' }}>
              {JUZZ.map((j, i) => <JuzzBubble key={j.id} juzz={j} index={i} />)}
            </div>
          </div>
        )}
        {view === 'listen' && <ListView level={level} />}
        {view === 'donate' && <DonateView />}
        {view === 'settings' && <SettingsView darkMode={darkMode} setDarkMode={setDarkMode} />}
        {view === 'names' && <NamesOfAllahView darkMode={darkMode} />}
        {view === 'quiz' && <QuizView darkMode={darkMode} onEarnPoints={(pts) => setPoints(p => p + pts)} />}
        {view === 'prayer' && <PrayerTimesView darkMode={darkMode} />}
        {view === 'stats' && <StatisticsView darkMode={darkMode} readingProgress={readingProgress} streak={streak} points={points} />}
        {view === 'daily' && <DailyVerseView darkMode={darkMode} />}
      </main>

      <FloatingMenu view={view} setView={setView} streak={streak} darkMode={darkMode} />
      {selected && <Modal surah={selected} onClose={() => setSelected(null)} onRead={handleReadSurah} />}
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&display=swap');
        
        @keyframes floatBubble {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-1deg); }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmerWave {
          0% { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(200%) rotate(25deg); }
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-12px) scale(1.3); opacity: 0.7; }
        }
        
        @keyframes colorShift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(30deg); }
        }
      `}</style>
    </div>
  );
}

// Wrap with ErrorBoundary for graceful error handling
export default function QuranBubbleApp() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner message="Loading Quran App..." />}>
        <QuranBubbleAppInner />
      </Suspense>
    </ErrorBoundary>
  );
}
