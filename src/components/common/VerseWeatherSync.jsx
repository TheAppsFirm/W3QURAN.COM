/**
 * Verse Weather Sync
 * Connects to local weather and shows relevant Quranic verses
 * Different verses for rain, sun, storm, night, etc.
 */

import { useState, useEffect, useCallback, memo } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';

// Weather-based verse collections
const WEATHER_VERSES = {
  rain: {
    condition: 'Rainy',
    icon: 'CloudRain',
    color: '#3B82F6',
    gradient: 'from-blue-600 to-cyan-500',
    theme: 'Mercy & Provision',
    themeAr: 'الرحمة والرزق',
    description: 'Rain is a sign of Allah\'s mercy and provision',
    verses: [
      { surah: 30, ayah: 48, arabic: 'اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ فَتُثِيرُ سَحَابًا', translation: 'It is Allah who sends the winds, and they stir the clouds...' },
      { surah: 25, ayah: 48, arabic: 'وَهُوَ الَّذِي أَرْسَلَ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ', translation: 'And it is He who sends the winds as good tidings before His mercy...' },
      { surah: 7, ayah: 57, arabic: 'وَهُوَ الَّذِي يُرْسِلُ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ', translation: 'And it is He who sends the winds as good tidings before His mercy...' },
      { surah: 50, ayah: 9, arabic: 'وَنَزَّلْنَا مِنَ السَّمَاءِ مَاءً مُبَارَكًا', translation: 'And We have sent down blessed rain from the sky...' },
      { surah: 15, ayah: 22, arabic: 'وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً', translation: 'And We have sent the fertilizing winds and sent down water from the sky...' },
    ],
    dua: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
    duaTranslation: 'O Allah, (bring) beneficial rain',
  },
  sunny: {
    condition: 'Sunny',
    icon: 'Sun',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-400',
    theme: 'Gratitude & Blessings',
    themeAr: 'الشكر والنعم',
    description: 'The sun is among Allah\'s greatest blessings',
    verses: [
      { surah: 14, ayah: 7, arabic: 'لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ', translation: 'If you are grateful, I will surely increase you [in favor]...' },
      { surah: 16, ayah: 12, arabic: 'وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ وَالشَّمْسَ وَالْقَمَرَ', translation: 'And He has subjected for you the night and day and the sun and moon...' },
      { surah: 36, ayah: 38, arabic: 'وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَهَا', translation: 'And the sun runs [on course] toward its stopping point...' },
      { surah: 91, ayah: 1, arabic: 'وَالشَّمْسِ وَضُحَاهَا', translation: 'By the sun and its brightness...' },
      { surah: 55, ayah: 5, arabic: 'الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ', translation: 'The sun and the moon [move] by precise calculation...' },
    ],
    dua: 'الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ',
    duaTranslation: 'All praise is due to Allah in every circumstance',
  },
  cloudy: {
    condition: 'Cloudy',
    icon: 'Cloud',
    color: '#6B7280',
    gradient: 'from-gray-500 to-slate-600',
    theme: 'Reflection & Patience',
    themeAr: 'التأمل والصبر',
    description: 'Clouds remind us of Allah\'s control over creation',
    verses: [
      { surah: 2, ayah: 164, arabic: 'وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ', translation: '...and the clouds controlled between the heaven and the earth...' },
      { surah: 24, ayah: 43, arabic: 'أَلَمْ تَرَ أَنَّ اللَّهَ يُزْجِي سَحَابًا', translation: 'Do you not see that Allah drives clouds...' },
      { surah: 13, ayah: 12, arabic: 'هُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا وَيُنْشِئُ السَّحَابَ الثِّقَالَ', translation: 'It is He who shows you lightning, [causing] fear and aspiration, and generates the heavy clouds.' },
      { surah: 35, ayah: 9, arabic: 'وَاللَّهُ الَّذِي أَرْسَلَ الرِّيَاحَ فَتُثِيرُ سَحَابًا', translation: 'And it is Allah who sends the winds, and they stir the clouds...' },
      { surah: 78, ayah: 14, arabic: 'وَأَنْزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا', translation: 'And sent down, from the rain clouds, pouring water...' },
    ],
    dua: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ',
    duaTranslation: 'Glory to Him whom thunder glorifies with His praise',
  },
  storm: {
    condition: 'Stormy',
    icon: 'CloudLightning',
    color: '#8B5CF6',
    gradient: 'from-purple-600 to-indigo-600',
    theme: 'Power of Allah',
    themeAr: 'قدرة الله',
    description: 'Storms demonstrate Allah\'s immense power',
    verses: [
      { surah: 13, ayah: 13, arabic: 'وَيُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ', translation: 'And the thunder exalts [Allah] with praise of Him - and the angels [as well] from fear of Him...' },
      { surah: 30, ayah: 24, arabic: 'وَمِنْ آيَاتِهِ يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا', translation: 'And of His signs is [that] He shows you the lightning [causing] fear and aspiration...' },
      { surah: 2, ayah: 19, arabic: 'أَوْ كَصَيِّبٍ مِنَ السَّمَاءِ فِيهِ ظُلُمَاتٌ وَرَعْدٌ وَبَرْقٌ', translation: 'Or [it is] like a rainstorm from the sky within which is darkness, thunder and lightning...' },
      { surah: 24, ayah: 43, arabic: 'يَكَادُ سَنَا بَرْقِهِ يَذْهَبُ بِالْأَبْصَارِ', translation: '...The flash of its lightning almost takes away the eyesight.' },
      { surah: 51, ayah: 41, arabic: 'وَفِي عَادٍ إِذْ أَرْسَلْنَا عَلَيْهِمُ الرِّيحَ الْعَقِيمَ', translation: 'And in Aad [there is a sign], when We sent against them the barren wind.' },
    ],
    dua: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ',
    duaTranslation: 'O Allah, I seek refuge in You from the evil within it',
  },
  snow: {
    condition: 'Snowy',
    icon: 'Snowflake',
    color: '#06B6D4',
    gradient: 'from-cyan-400 to-blue-400',
    theme: 'Purity & Renewal',
    themeAr: 'الطهارة والتجديد',
    description: 'Snow symbolizes purity and a fresh start',
    verses: [
      { surah: 78, ayah: 14, arabic: 'وَأَنْزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا', translation: 'And sent down, from the rain clouds, pouring water...' },
      { surah: 56, ayah: 68, arabic: 'أَفَرَأَيْتُمُ الْمَاءَ الَّذِي تَشْرَبُونَ', translation: 'And have you seen the water that you drink?' },
      { surah: 21, ayah: 30, arabic: 'وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ', translation: '...and made from water every living thing...' },
      { surah: 25, ayah: 54, arabic: 'وَهُوَ الَّذِي خَلَقَ مِنَ الْمَاءِ بَشَرًا', translation: 'And it is He who has created from water a human being...' },
      { surah: 39, ayah: 21, arabic: 'أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ مَاءً', translation: 'Do you not see that Allah sends down rain from the sky...' },
    ],
    dua: 'اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ',
    duaTranslation: 'O Allah, wash away my sins with snow, water and hail',
  },
  night: {
    condition: 'Night',
    icon: 'Moon',
    color: '#6366F1',
    gradient: 'from-indigo-600 to-purple-700',
    theme: 'Night Prayer & Reflection',
    themeAr: 'قيام الليل والتأمل',
    description: 'The night is a time for worship and contemplation',
    verses: [
      { surah: 73, ayah: 1, arabic: 'يَا أَيُّهَا الْمُزَّمِّلُ', translation: 'O you who wraps himself [in clothing]...' },
      { surah: 73, ayah: 6, arabic: 'إِنَّ نَاشِئَةَ اللَّيْلِ هِيَ أَشَدُّ وَطْئًا وَأَقْوَمُ قِيلًا', translation: 'Indeed, the hours of the night are more effective for concurrence [of heart and tongue] and more suitable for words.' },
      { surah: 17, ayah: 79, arabic: 'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَكَ', translation: 'And from [part of] the night, pray with it as additional [worship] for you...' },
      { surah: 51, ayah: 17, arabic: 'كَانُوا قَلِيلًا مِنَ اللَّيْلِ مَا يَهْجَعُونَ', translation: 'They used to sleep but little of the night.' },
      { surah: 92, ayah: 1, arabic: 'وَاللَّيْلِ إِذَا يَغْشَىٰ', translation: 'By the night when it covers...' },
    ],
    dua: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ',
    duaTranslation: 'O Allah, Lord of this perfect call...',
  },
  clear: {
    condition: 'Clear',
    icon: 'Star',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-500',
    theme: 'Signs in Creation',
    themeAr: 'آيات في الخلق',
    description: 'A clear sky reveals Allah\'s magnificent creation',
    verses: [
      { surah: 67, ayah: 3, arabic: 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا', translation: '[And] who created seven heavens in layers...' },
      { surah: 50, ayah: 6, arabic: 'أَفَلَمْ يَنْظُرُوا إِلَى السَّمَاءِ فَوْقَهُمْ كَيْفَ بَنَيْنَاهَا', translation: 'Have they not looked at the heaven above them - how We structured it...' },
      { surah: 37, ayah: 6, arabic: 'إِنَّا زَيَّنَّا السَّمَاءَ الدُّنْيَا بِزِينَةٍ الْكَوَاكِبِ', translation: 'Indeed, We have adorned the nearest heaven with an adornment of stars...' },
      { surah: 15, ayah: 16, arabic: 'وَلَقَدْ جَعَلْنَا فِي السَّمَاءِ بُرُوجًا وَزَيَّنَّاهَا لِلنَّاظِرِينَ', translation: 'And We have placed within the heaven great stars and have beautified it for the observers.' },
      { surah: 86, ayah: 1, arabic: 'وَالسَّمَاءِ وَالطَّارِقِ', translation: 'By the sky and the night comer...' },
    ],
    dua: 'سُبْحَانَ الَّذِي خَلَقَ هَذَا',
    duaTranslation: 'Glory be to the One who created this',
  },
  windy: {
    condition: 'Windy',
    icon: 'Wind',
    color: '#64748B',
    gradient: 'from-slate-500 to-gray-600',
    theme: 'Divine Will & Direction',
    themeAr: 'مشيئة الله والتوجيه',
    description: 'Winds are directed by Allah\'s command',
    verses: [
      { surah: 45, ayah: 5, arabic: 'وَتَصْرِيفِ الرِّيَاحِ', translation: '...and [His] directing of the winds...' },
      { surah: 15, ayah: 22, arabic: 'وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ', translation: 'And We have sent the fertilizing winds...' },
      { surah: 30, ayah: 46, arabic: 'وَمِنْ آيَاتِهِ أَنْ يُرْسِلَ الرِّيَاحَ مُبَشِّرَاتٍ', translation: 'And of His signs is that He sends the winds as bringers of good tidings...' },
      { surah: 77, ayah: 1, arabic: 'وَالْمُرْسَلَاتِ عُرْفًا', translation: 'By those [winds] sent forth in gusts...' },
      { surah: 51, ayah: 1, arabic: 'وَالذَّارِيَاتِ ذَرْوًا', translation: 'By those [winds] scattering [dust] dispersing...' },
    ],
    dua: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا',
    duaTranslation: 'O Allah, I ask You for its good',
  },
  hot: {
    condition: 'Hot',
    icon: 'Thermometer',
    color: '#EF4444',
    gradient: 'from-red-500 to-orange-500',
    theme: 'Patience & Seeking Refuge',
    themeAr: 'الصبر واللجوء إلى الله',
    description: 'Heat reminds us of the Hereafter',
    verses: [
      { surah: 9, ayah: 81, arabic: 'وَقَالُوا لَا تَنْفِرُوا فِي الْحَرِّ', translation: 'And they said, "Do not go forth in the heat..."' },
      { surah: 56, ayah: 42, arabic: 'فِي سَمُومٍ وَحَمِيمٍ', translation: '[They will be] in scorching fire and scalding water...' },
      { surah: 77, ayah: 30, arabic: 'انْطَلِقُوا إِلَىٰ ظِلٍّ ذِي ثَلَاثِ شُعَبٍ', translation: 'Proceed to a shadow [of smoke] having three columns...' },
      { surah: 4, ayah: 56, arabic: 'إِنَّ الَّذِينَ كَفَرُوا بِآيَاتِنَا سَوْفَ نُصْلِيهِمْ نَارًا', translation: 'Indeed, those who disbelieve in Our verses - We will drive them into a Fire...' },
      { surah: 35, ayah: 21, arabic: 'وَلَا الظِّلُّ وَلَا الْحَرُورُ', translation: 'And not [are equal] the shade and the heat...' },
    ],
    dua: 'اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
    duaTranslation: 'O Allah, protect me from the Fire',
  },
};

// Weather condition mapping from API codes
const mapWeatherCondition = (weatherCode, isDay, temp) => {
  // Based on common weather API codes
  if (weatherCode >= 200 && weatherCode < 300) return 'storm'; // Thunderstorm
  if (weatherCode >= 300 && weatherCode < 400) return 'rain'; // Drizzle
  if (weatherCode >= 500 && weatherCode < 600) return 'rain'; // Rain
  if (weatherCode >= 600 && weatherCode < 700) return 'snow'; // Snow
  if (weatherCode >= 700 && weatherCode < 800) return 'windy'; // Atmosphere (fog, mist)
  if (weatherCode === 800) {
    if (!isDay) return 'night';
    if (temp > 35) return 'hot';
    return 'sunny';
  }
  if (weatherCode > 800) return 'cloudy'; // Clouds

  // Default based on time
  if (!isDay) return 'night';
  return 'clear';
};

// Verse Card Component
const VerseCard = memo(function VerseCard({ verse, index, onNavigate }) {
  const surah = SURAHS.find(s => s.id === verse.surah);

  return (
    <div
      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
      onClick={() => onNavigate(verse.surah, verse.ayah)}
      style={{ animation: `slideIn 0.3s ease ${index * 0.1}s both` }}
    >
      <p
        className="text-xl text-white text-right leading-relaxed mb-3"
        style={{ fontFamily: "'Scheherazade New', serif" }}
        dir="rtl"
      >
        {verse.arabic}
      </p>
      <p className="text-white/70 text-sm italic mb-2">"{verse.translation}"</p>
      <div className="flex items-center justify-between">
        <span className="text-white/40 text-xs">
          {surah?.name || `Surah ${verse.surah}`} : {verse.ayah}
        </span>
        <span className="text-white/40 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
          Click to read →
        </span>
      </div>
    </div>
  );
});

// Weather Display Component
const WeatherDisplay = memo(function WeatherDisplay({ weather, weatherData }) {
  const Icon = Icons[weather.icon] || Icons.Cloud;

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${weather.gradient} p-6`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-10 h-10 text-white" />
            <div>
              <h3 className="text-2xl font-bold text-white">{weather.condition}</h3>
              {weatherData?.temp && (
                <p className="text-white/80 text-lg">{Math.round(weatherData.temp)}°C</p>
              )}
            </div>
          </div>
          {weatherData?.location && (
            <p className="text-white/60 text-sm flex items-center gap-1">
              <Icons.MapPin className="w-4 h-4" />
              {weatherData.location}
            </p>
          )}
        </div>

        <div className="text-right">
          <p className="text-white font-medium">{weather.theme}</p>
          <p className="text-white/70 text-sm" style={{ fontFamily: "'Scheherazade New', serif" }}>
            {weather.themeAr}
          </p>
        </div>
      </div>
    </div>
  );
});

// Dua Card Component
const DuaCard = memo(function DuaCard({ weather }) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
      <h4 className="text-amber-400 text-sm font-medium mb-2 flex items-center gap-2">
        <Icons.Star className="w-4 h-4" />
        Recommended Dua
      </h4>
      <p
        className="text-xl text-white text-center mb-2"
        style={{ fontFamily: "'Scheherazade New', serif" }}
        dir="rtl"
      >
        {weather.dua}
      </p>
      <p className="text-white/60 text-sm text-center italic">
        {weather.duaTranslation}
      </p>
    </div>
  );
});

// Main Component
const VerseWeatherSync = memo(function VerseWeatherSync({ isVisible, onClose, onNavigateToVerse }) {
  const [currentWeather, setCurrentWeather] = useState('clear');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVerse, setSelectedVerse] = useState(null);

  // Fetch weather data
  const fetchWeather = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Get user's location
      const position = await new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error('Geolocation not supported'));
          return;
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        });
      });

      const { latitude, longitude } = position.coords;

      // Fetch weather from Open-Meteo API (free, no API key needed)
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&timezone=auto`
      );

      if (!response.ok) throw new Error('Weather fetch failed');

      const data = await response.json();
      const { current } = data;

      // Get location name via reverse geocoding
      let locationName = 'Your Location';
      try {
        const geoResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          locationName = geoData.address?.city || geoData.address?.town || geoData.address?.state || 'Your Location';
        }
      } catch (e) {
        console.log('Geocoding failed, using default location name');
      }

      const condition = mapWeatherCondition(
        current.weather_code,
        current.is_day === 1,
        current.temperature_2m
      );

      setCurrentWeather(condition);
      setWeatherData({
        temp: current.temperature_2m,
        code: current.weather_code,
        isDay: current.is_day === 1,
        location: locationName,
      });
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError(err.message);

      // Fall back to time-based weather
      const hour = new Date().getHours();
      if (hour >= 20 || hour < 6) {
        setCurrentWeather('night');
      } else if (hour >= 6 && hour < 12) {
        setCurrentWeather('sunny');
      } else {
        setCurrentWeather('clear');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      fetchWeather();
    }
  }, [isVisible, fetchWeather]);

  const weather = WEATHER_VERSES[currentWeather] || WEATHER_VERSES.clear;

  const handleNavigate = useCallback((surahId, ayahNum) => {
    if (onNavigateToVerse) {
      onNavigateToVerse(surahId, ayahNum);
    }
    onClose();
  }, [onNavigateToVerse, onClose]);

  const handleManualWeather = useCallback((condition) => {
    setCurrentWeather(condition);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${weather.gradient} flex items-center justify-center`}>
                <Icons.CloudSun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Verse Weather Sync</h2>
                <p className="text-white/60 text-sm">Verses matching your weather</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
              <p className="text-white/60">Detecting your weather...</p>
            </div>
          ) : (
            <>
              {/* Weather Display */}
              <WeatherDisplay weather={weather} weatherData={weatherData} />

              {/* Manual Weather Selection */}
              <div className="flex flex-wrap gap-2">
                {Object.entries(WEATHER_VERSES).map(([key, w]) => {
                  const Icon = Icons[w.icon] || Icons.Cloud;
                  return (
                    <button
                      key={key}
                      onClick={() => handleManualWeather(key)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                        currentWeather === key
                          ? 'bg-white/20 text-white'
                          : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      {w.condition}
                    </button>
                  );
                })}
              </div>

              {/* Description */}
              <p className="text-white/70 text-center">{weather.description}</p>

              {/* Dua */}
              <DuaCard weather={weather} />

              {/* Verses */}
              <div>
                <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                  <Icons.BookOpen className="w-5 h-5 text-white/60" />
                  Related Verses
                </h3>
                <div className="space-y-3">
                  {weather.verses.map((verse, index) => (
                    <VerseCard
                      key={`${verse.surah}-${verse.ayah}`}
                      verse={verse}
                      index={index}
                      onNavigate={handleNavigate}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {error && (
            <div className="text-center py-4">
              <p className="text-amber-400 text-sm mb-2">
                Could not detect weather - showing based on time of day
              </p>
              <button
                onClick={fetchWeather}
                className="text-white/60 text-xs underline"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
});

export default VerseWeatherSync;
