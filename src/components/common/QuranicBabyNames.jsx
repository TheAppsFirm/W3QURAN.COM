/**
 * Quranic Baby Names
 * Beautiful names from the Quran for boys and girls
 * With meanings, origins, and verse references
 */

import { useState, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';

// Quranic Names Database
const QURANIC_NAMES = {
  boys: [
    // Prophets & Messengers
    { name: 'Adam', arabic: 'آدم', meaning: 'The first human, made from earth', origin: 'Prophet', verses: ['2:31', '3:33'], popularity: 95 },
    { name: 'Nuh', arabic: 'نوح', meaning: 'Rest, comfort', origin: 'Prophet', verses: ['71:1', '11:25'], popularity: 75 },
    { name: 'Ibrahim', arabic: 'إبراهيم', meaning: 'Father of many nations', origin: 'Prophet', verses: ['2:124', '14:35'], popularity: 90 },
    { name: 'Ismail', arabic: 'إسماعيل', meaning: 'God will hear', origin: 'Prophet', verses: ['2:125', '19:54'], popularity: 85 },
    { name: 'Ishaq', arabic: 'إسحاق', meaning: 'He who laughs', origin: 'Prophet', verses: ['37:112', '11:71'], popularity: 70 },
    { name: 'Yaqub', arabic: 'يعقوب', meaning: 'Supplanter, holder of the heel', origin: 'Prophet', verses: ['12:6', '19:6'], popularity: 75 },
    { name: 'Yusuf', arabic: 'يوسف', meaning: 'God increases', origin: 'Prophet', verses: ['12:4', '12:84'], popularity: 92 },
    { name: 'Musa', arabic: 'موسى', meaning: 'Drawn from water', origin: 'Prophet', verses: ['20:9', '28:7'], popularity: 88 },
    { name: 'Harun', arabic: 'هارون', meaning: 'Exalted, high mountain', origin: 'Prophet', verses: ['20:30', '19:53'], popularity: 78 },
    { name: 'Dawud', arabic: 'داود', meaning: 'Beloved', origin: 'Prophet', verses: ['38:17', '21:78'], popularity: 82 },
    { name: 'Sulaiman', arabic: 'سليمان', meaning: 'Man of peace', origin: 'Prophet', verses: ['27:15', '38:30'], popularity: 80 },
    { name: 'Ayyub', arabic: 'أيوب', meaning: 'Returning to God', origin: 'Prophet', verses: ['21:83', '38:41'], popularity: 72 },
    { name: 'Yunus', arabic: 'يونس', meaning: 'Dove', origin: 'Prophet', verses: ['10:98', '37:139'], popularity: 76 },
    { name: 'Zakariya', arabic: 'زكريا', meaning: 'Remembered by God', origin: 'Prophet', verses: ['19:2', '3:37'], popularity: 74 },
    { name: 'Yahya', arabic: 'يحيى', meaning: 'God is gracious, he lives', origin: 'Prophet', verses: ['19:7', '3:39'], popularity: 83 },
    { name: 'Isa', arabic: 'عيسى', meaning: 'God saves', origin: 'Prophet', verses: ['3:45', '19:34'], popularity: 70 },
    { name: 'Muhammad', arabic: 'محمد', meaning: 'Praiseworthy', origin: 'Prophet', verses: ['47:2', '48:29'], popularity: 99 },
    { name: 'Ahmad', arabic: 'أحمد', meaning: 'Most praiseworthy', origin: 'Prophet', verses: ['61:6'], popularity: 96 },
    { name: 'Ilyas', arabic: 'إلياس', meaning: 'The Lord is my God', origin: 'Prophet', verses: ['37:123', '6:85'], popularity: 77 },
    { name: 'Idris', arabic: 'إدريس', meaning: 'Interpreter, studious', origin: 'Prophet', verses: ['19:56', '21:85'], popularity: 79 },

    // Allah's Attributes (with Abd prefix implied)
    { name: 'Rahman', arabic: 'رحمن', meaning: 'Most Merciful (use as Abd al-Rahman)', origin: 'Divine Attribute', verses: ['1:1', '55:1'], popularity: 88 },
    { name: 'Rahim', arabic: 'رحيم', meaning: 'Most Compassionate (use as Abd al-Rahim)', origin: 'Divine Attribute', verses: ['1:1', '2:163'], popularity: 85 },
    { name: 'Malik', arabic: 'مالك', meaning: 'King, Owner (use as Abd al-Malik)', origin: 'Divine Attribute', verses: ['1:4', '3:26'], popularity: 82 },
    { name: 'Aziz', arabic: 'عزيز', meaning: 'Mighty, Powerful (use as Abd al-Aziz)', origin: 'Divine Attribute', verses: ['59:23', '3:6'], popularity: 84 },
    { name: 'Kareem', arabic: 'كريم', meaning: 'Generous, Noble (use as Abd al-Kareem)', origin: 'Divine Attribute', verses: ['82:6', '27:40'], popularity: 86 },
    { name: 'Hakeem', arabic: 'حكيم', meaning: 'Wise (use as Abd al-Hakeem)', origin: 'Divine Attribute', verses: ['2:32', '31:27'], popularity: 78 },
    { name: 'Jabbar', arabic: 'جبار', meaning: 'Compeller (use as Abd al-Jabbar)', origin: 'Divine Attribute', verses: ['59:23'], popularity: 72 },
    { name: 'Wahab', arabic: 'وهاب', meaning: 'Bestower (use as Abd al-Wahab)', origin: 'Divine Attribute', verses: ['3:8', '38:35'], popularity: 75 },

    // Quranic Words & Companions
    { name: 'Hamza', arabic: 'حمزة', meaning: 'Lion, strong', origin: 'Companion', verses: [], popularity: 87 },
    { name: 'Umar', arabic: 'عمر', meaning: 'Long-lived, flourishing', origin: 'Companion', verses: [], popularity: 89 },
    { name: 'Ali', arabic: 'علي', meaning: 'Elevated, noble', origin: 'Companion', verses: [], popularity: 93 },
    { name: 'Hassan', arabic: 'حسن', meaning: 'Beautiful, good', origin: 'Family of Prophet', verses: [], popularity: 91 },
    { name: 'Hussain', arabic: 'حسين', meaning: 'Beautiful, handsome', origin: 'Family of Prophet', verses: [], popularity: 90 },
    { name: 'Bilal', arabic: 'بلال', meaning: 'Moisture, freshness', origin: 'Companion', verses: [], popularity: 84 },
    { name: 'Khalid', arabic: 'خالد', meaning: 'Eternal, immortal', origin: 'Companion', verses: [], popularity: 86 },
    { name: 'Talha', arabic: 'طلحة', meaning: 'Fruitful tree', origin: 'Companion', verses: [], popularity: 76 },
    { name: 'Zubair', arabic: 'زبير', meaning: 'Strong, powerful', origin: 'Companion', verses: [], popularity: 74 },
    { name: 'Saad', arabic: 'سعد', meaning: 'Good fortune, happiness', origin: 'Companion', verses: ['38:1'], popularity: 80 },

    // Quranic Concepts
    { name: 'Noor', arabic: 'نور', meaning: 'Light, divine light', origin: 'Quranic Word', verses: ['24:35', '5:15'], popularity: 85 },
    { name: 'Hadi', arabic: 'هادي', meaning: 'Guide', origin: 'Quranic Word', verses: ['22:54', '25:31'], popularity: 79 },
    { name: 'Salam', arabic: 'سلام', meaning: 'Peace', origin: 'Quranic Word', verses: ['6:54', '36:58'], popularity: 77 },
    { name: 'Fajr', arabic: 'فجر', meaning: 'Dawn, daybreak', origin: 'Surah Name', verses: ['89:1'], popularity: 68 },
    { name: 'Burhan', arabic: 'برهان', meaning: 'Proof, evidence', origin: 'Quranic Word', verses: ['4:174', '12:24'], popularity: 73 },
    { name: 'Furqan', arabic: 'فرقان', meaning: 'Criterion (between right and wrong)', origin: 'Surah Name', verses: ['25:1', '2:53'], popularity: 71 },
    { name: 'Rayyan', arabic: 'ريان', meaning: 'Gate of Paradise for fasting', origin: 'Islamic', verses: [], popularity: 82 },
    { name: 'Jibreel', arabic: 'جبريل', meaning: 'Angel Gabriel', origin: 'Angel', verses: ['2:97', '66:4'], popularity: 74 },
    { name: 'Mikael', arabic: 'ميكائيل', meaning: 'Angel Michael', origin: 'Angel', verses: ['2:98'], popularity: 69 },
  ],

  girls: [
    // Women in Quran
    { name: 'Maryam', arabic: 'مريم', meaning: 'Beloved, sea of bitterness', origin: 'Mother of Isa', verses: ['19:16', '3:42'], popularity: 97 },
    { name: 'Asiya', arabic: 'آسية', meaning: 'One who heals, comforts', origin: 'Wife of Pharaoh', verses: ['66:11'], popularity: 88 },
    { name: 'Hawwa', arabic: 'حواء', meaning: 'Living, life-giver (Eve)', origin: 'First Woman', verses: ['2:35', '7:19'], popularity: 75 },
    { name: 'Sarah', arabic: 'سارة', meaning: 'Princess, pure', origin: 'Wife of Ibrahim', verses: ['11:71'], popularity: 90 },
    { name: 'Hajar', arabic: 'هاجر', meaning: 'Flight, emigration', origin: 'Mother of Ismail', verses: [], popularity: 78 },

    // Quranic Words (Beautiful Meanings)
    { name: 'Ayah', arabic: 'آية', meaning: 'Sign, miracle, verse', origin: 'Quranic Word', verses: ['2:106', '3:7'], popularity: 92 },
    { name: 'Jannah', arabic: 'جنة', meaning: 'Paradise, garden', origin: 'Quranic Word', verses: ['2:35', '55:46'], popularity: 89 },
    { name: 'Noor', arabic: 'نور', meaning: 'Light, radiance', origin: 'Quranic Word', verses: ['24:35', '5:15'], popularity: 94 },
    { name: 'Rahma', arabic: 'رحمة', meaning: 'Mercy, compassion', origin: 'Quranic Word', verses: ['21:107', '12:56'], popularity: 86 },
    { name: 'Iman', arabic: 'إيمان', meaning: 'Faith, belief', origin: 'Quranic Word', verses: ['49:7', '2:285'], popularity: 91 },
    { name: 'Taqwa', arabic: 'تقوى', meaning: 'God-consciousness, piety', origin: 'Quranic Word', verses: ['2:197', '3:102'], popularity: 79 },
    { name: 'Sakeena', arabic: 'سكينة', meaning: 'Tranquility, peace of mind', origin: 'Quranic Word', verses: ['2:248', '9:26'], popularity: 84 },
    { name: 'Hidaya', arabic: 'هداية', meaning: 'Guidance', origin: 'Quranic Word', verses: ['1:6', '2:2'], popularity: 82 },
    { name: 'Baraka', arabic: 'بركة', meaning: 'Blessing', origin: 'Quranic Word', verses: ['7:96', '11:48'], popularity: 80 },
    { name: 'Shifa', arabic: 'شفاء', meaning: 'Healing, cure', origin: 'Quranic Word', verses: ['17:82', '10:57'], popularity: 83 },
    { name: 'Huda', arabic: 'هدى', meaning: 'Guidance, right path', origin: 'Quranic Word', verses: ['2:2', '20:123'], popularity: 85 },
    { name: 'Dunya', arabic: 'دنيا', meaning: 'World, life', origin: 'Quranic Word', verses: ['2:85', '3:185'], popularity: 76 },
    { name: 'Safiya', arabic: 'صفية', meaning: 'Pure, chosen', origin: 'Quranic Word', verses: [], popularity: 87 },
    { name: 'Amina', arabic: 'أمينة', meaning: 'Trustworthy, faithful', origin: 'Mother of Prophet', verses: [], popularity: 88 },
    { name: 'Khadija', arabic: 'خديجة', meaning: 'Premature child, trustworthy', origin: 'Wife of Prophet', verses: [], popularity: 86 },
    { name: 'Aisha', arabic: 'عائشة', meaning: 'Living, life', origin: 'Wife of Prophet', verses: [], popularity: 93 },
    { name: 'Fatima', arabic: 'فاطمة', meaning: 'One who weans, abstains', origin: 'Daughter of Prophet', verses: [], popularity: 95 },
    { name: 'Zainab', arabic: 'زينب', meaning: 'Fragrant flower, beauty', origin: 'Family of Prophet', verses: [], popularity: 89 },
    { name: 'Ruqayyah', arabic: 'رقية', meaning: 'Spell, charm, rise', origin: 'Daughter of Prophet', verses: [], popularity: 81 },
    { name: 'Sumayya', arabic: 'سمية', meaning: 'High, elevated', origin: 'First Martyr', verses: [], popularity: 78 },

    // Surah Names & Nature
    { name: 'Fajr', arabic: 'فجر', meaning: 'Dawn', origin: 'Surah Name', verses: ['89:1'], popularity: 72 },
    { name: 'Duha', arabic: 'ضحى', meaning: 'Morning light', origin: 'Surah Name', verses: ['93:1'], popularity: 77 },
    { name: 'Layla', arabic: 'ليلى', meaning: 'Night', origin: 'Quranic Word', verses: ['97:1'], popularity: 91 },
    { name: 'Shams', arabic: 'شمس', meaning: 'Sun', origin: 'Surah Name', verses: ['91:1'], popularity: 74 },
    { name: 'Qamar', arabic: 'قمر', meaning: 'Moon', origin: 'Surah Name', verses: ['54:1'], popularity: 73 },
    { name: 'Najma', arabic: 'نجمة', meaning: 'Star', origin: 'Quranic Word', verses: ['53:1'], popularity: 79 },
    { name: 'Yasmin', arabic: 'ياسمين', meaning: 'Jasmine flower', origin: 'Arabic', verses: [], popularity: 88 },
    { name: 'Zahra', arabic: 'زهراء', meaning: 'Flower, radiant', origin: 'Title of Fatima', verses: [], popularity: 90 },
    { name: 'Kawther', arabic: 'كوثر', meaning: 'Abundance, river in Paradise', origin: 'Surah Name', verses: ['108:1'], popularity: 82 },
    { name: 'Salsabil', arabic: 'سلسبيل', meaning: 'Spring in Paradise', origin: 'Quranic Word', verses: ['76:18'], popularity: 75 },
    { name: 'Tasnim', arabic: 'تسنيم', meaning: 'Spring in Paradise', origin: 'Quranic Word', verses: ['83:27'], popularity: 80 },
    { name: 'Sundus', arabic: 'سندس', meaning: 'Fine silk in Paradise', origin: 'Quranic Word', verses: ['18:31', '76:21'], popularity: 71 },
    { name: 'Istabraq', arabic: 'إستبرق', meaning: 'Thick silk brocade', origin: 'Quranic Word', verses: ['44:53', '76:21'], popularity: 65 },

    // Virtues
    { name: 'Sabira', arabic: 'صابرة', meaning: 'Patient', origin: 'Quranic Virtue', verses: ['2:153', '3:200'], popularity: 76 },
    { name: 'Shakira', arabic: 'شاكرة', meaning: 'Grateful', origin: 'Quranic Virtue', verses: ['14:7', '2:152'], popularity: 74 },
    { name: 'Sadiya', arabic: 'سعدية', meaning: 'Happy, fortunate', origin: 'Quranic Word', verses: [], popularity: 77 },
    { name: 'Naima', arabic: 'نعيمة', meaning: 'Living in comfort, blessing', origin: 'Quranic Word', verses: ['56:89', '69:21'], popularity: 81 },
    { name: 'Salma', arabic: 'سلمى', meaning: 'Safe, peaceful', origin: 'Quranic Word', verses: [], popularity: 84 },
    { name: 'Amani', arabic: 'أماني', meaning: 'Wishes, aspirations', origin: 'Quranic Word', verses: ['2:78', '4:123'], popularity: 86 },
  ],
};

// Origins for filtering
const ORIGINS = [
  { id: 'all', label: 'All Origins' },
  { id: 'Prophet', label: 'Prophets' },
  { id: 'Divine Attribute', label: "Allah's Names" },
  { id: 'Quranic Word', label: 'Quranic Words' },
  { id: 'Surah Name', label: 'Surah Names' },
  { id: 'Family of Prophet', label: "Prophet's Family" },
  { id: 'Companion', label: 'Companions' },
  { id: 'Wife of Prophet', label: "Prophet's Wives" },
];

// Name Card Component
const NameCard = memo(function NameCard({ name, gender, onSelect }) {
  const genderColor = gender === 'boys' ? '#3B82F6' : '#EC4899';

  return (
    <button
      onClick={() => onSelect(name)}
      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-left group"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="text-white font-bold text-lg">{name.name}</h4>
          <p className="text-2xl" style={{ fontFamily: "'Scheherazade New', serif", color: genderColor }}>
            {name.arabic}
          </p>
        </div>
        <div
          className="px-2 py-1 rounded-full text-xs"
          style={{ backgroundColor: `${genderColor}20`, color: genderColor }}
        >
          {name.origin}
        </div>
      </div>
      <p className="text-white/70 text-sm mb-2">{name.meaning}</p>
      {name.verses.length > 0 && (
        <div className="flex items-center gap-1 text-xs text-white/50">
          <Icons.BookOpen className="w-3 h-3" />
          {name.verses.slice(0, 2).join(', ')}
        </div>
      )}
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${name.popularity}%`,
              backgroundColor: genderColor,
            }}
          />
        </div>
        <span className="text-xs text-white/40">{name.popularity}%</span>
      </div>
    </button>
  );
});

// Name Detail Modal
const NameDetail = memo(function NameDetail({ name, gender, onClose, onNavigateToVerse }) {
  const genderColor = gender === 'boys' ? '#3B82F6' : '#EC4899';

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-md w-full border border-white/10"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.3s ease-out' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10">
          <Icons.X className="w-5 h-5 text-white/70" />
        </button>

        <div className="text-center mb-6">
          <p className="text-5xl mb-2" style={{ fontFamily: "'Scheherazade New', serif", color: genderColor }}>
            {name.arabic}
          </p>
          <h3 className="text-2xl font-bold text-white">{name.name}</h3>
          <p
            className="text-sm px-3 py-1 rounded-full inline-block mt-2"
            style={{ backgroundColor: `${genderColor}20`, color: genderColor }}
          >
            {name.origin}
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5">
            <h4 className="text-white/60 text-xs uppercase mb-1">Meaning</h4>
            <p className="text-white">{name.meaning}</p>
          </div>

          {name.verses.length > 0 && (
            <div className="p-4 rounded-xl bg-white/5">
              <h4 className="text-white/60 text-xs uppercase mb-2">Referenced in Quran</h4>
              <div className="flex flex-wrap gap-2">
                {name.verses.map(verse => {
                  const [surah, ayah] = verse.split(':');
                  return (
                    <button
                      key={verse}
                      onClick={() => onNavigateToVerse && onNavigateToVerse(parseInt(surah), parseInt(ayah))}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-all flex items-center gap-1"
                    >
                      <Icons.BookOpen className="w-3 h-3" />
                      Surah {surah}:{ayah}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="p-4 rounded-xl bg-white/5">
            <h4 className="text-white/60 text-xs uppercase mb-2">Popularity</h4>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${name.popularity}%`, backgroundColor: genderColor }}
                />
              </div>
              <span className="text-white font-medium">{name.popularity}%</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => {
              navigator.clipboard?.writeText(`${name.name} (${name.arabic}) - ${name.meaning}`);
            }}
            className="flex-1 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Icons.Copy className="w-4 h-4" />
            Copy
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `Quranic Name: ${name.name}`,
                  text: `${name.name} (${name.arabic}) - ${name.meaning}`,
                });
              }
            }}
            className="flex-1 py-3 rounded-xl text-white transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: genderColor }}
          >
            <Icons.Share className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
});

// Main Component
const QuranicBabyNames = memo(function QuranicBabyNames({ isVisible, onClose, onNavigateToVerse }) {
  const [gender, setGender] = useState('boys');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('all');
  const [selectedName, setSelectedName] = useState(null);
  const [sortBy, setSortBy] = useState('popularity'); // popularity, alphabetical, arabic

  // Filter and sort names
  const filteredNames = useMemo(() => {
    let names = QURANIC_NAMES[gender];

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      names = names.filter(n =>
        n.name.toLowerCase().includes(query) ||
        n.arabic.includes(searchQuery) ||
        n.meaning.toLowerCase().includes(query)
      );
    }

    // Filter by origin
    if (selectedOrigin !== 'all') {
      names = names.filter(n => n.origin === selectedOrigin);
    }

    // Sort
    if (sortBy === 'popularity') {
      names = [...names].sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'alphabetical') {
      names = [...names].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'arabic') {
      names = [...names].sort((a, b) => a.arabic.localeCompare(b.arabic, 'ar'));
    }

    return names;
  }, [gender, searchQuery, selectedOrigin, sortBy]);

  const handleSelectName = useCallback((name) => {
    setSelectedName(name);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center">
                <Icons.Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Quranic Baby Names</h2>
                <p className="text-white/60 text-sm">Beautiful names from the Holy Quran</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all">
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>

          {/* Gender Toggle */}
          <div className="flex items-center gap-2 p-1 bg-white/5 rounded-full w-fit mx-auto">
            <button
              onClick={() => setGender('boys')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                gender === 'boys'
                  ? 'bg-blue-500 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              👶 Boys ({QURANIC_NAMES.boys.length})
            </button>
            <button
              onClick={() => setGender('girls')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                gender === 'girls'
                  ? 'bg-pink-500 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              👧 Girls ({QURANIC_NAMES.girls.length})
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex-shrink-0 p-4 border-b border-white/10 flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="flex-1 min-w-[200px] relative">
            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search names..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30"
            />
          </div>

          {/* Origin Filter */}
          <select
            value={selectedOrigin}
            onChange={(e) => setSelectedOrigin(e.target.value)}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm cursor-pointer"
          >
            {ORIGINS.map(o => (
              <option key={o.id} value={o.id} className="bg-slate-800">{o.label}</option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm cursor-pointer"
          >
            <option value="popularity" className="bg-slate-800">Most Popular</option>
            <option value="alphabetical" className="bg-slate-800">A-Z</option>
            <option value="arabic" className="bg-slate-800">Arabic</option>
          </select>
        </div>

        {/* Names Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-white/40 text-sm mb-4">
            Showing {filteredNames.length} names
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredNames.map(name => (
              <NameCard
                key={name.name}
                name={name}
                gender={gender}
                onSelect={handleSelectName}
              />
            ))}
          </div>

          {filteredNames.length === 0 && (
            <div className="text-center py-12">
              <Icons.Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/60">No names found</p>
              <p className="text-white/40 text-sm">Try a different search or filter</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 border-t border-white/10 bg-white/5">
          <p className="text-white/40 text-xs text-center">
            Names sourced from the Holy Quran, Hadith, and Islamic tradition
          </p>
        </div>
      </div>

      {/* Name Detail Modal */}
      {selectedName && (
        <NameDetail
          name={selectedName}
          gender={gender}
          onClose={() => setSelectedName(null)}
          onNavigateToVerse={onNavigateToVerse}
        />
      )}
    </div>
  );
});

export default QuranicBabyNames;
