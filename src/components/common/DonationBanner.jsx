/**
 * DonationBanner Component
 *
 * A beautiful, non-intrusive banner encouraging donations
 * Shows Quranic verse about charity in Arabic, English, and Urdu
 */

import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { useLocalStorage } from '../../hooks';

// Quranic verses about charity/donation
const DONATION_VERSES = [
  {
    surah: 2,
    ayah: 261,
    arabic: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ',
    english: 'The example of those who spend their wealth in the way of Allah is like a seed that grows seven ears, in each ear a hundred grains.',
    urdu: 'جو لوگ اپنا مال اللہ کی راہ میں خرچ کرتے ہیں ان کی مثال اس دانے جیسی ہے جس سے سات بالیاں اُگیں، ہر بالی میں سو دانے ہوں۔',
    reference: 'Al-Baqarah 2:261'
  },
  {
    surah: 57,
    ayah: 18,
    arabic: 'إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ وَأَقْرَضُوا اللَّهَ قَرْضًا حَسَنًا يُضَاعَفُ لَهُمْ وَلَهُمْ أَجْرٌ كَرِيمٌ',
    english: 'Indeed, those who give charity and lend to Allah a goodly loan - it will be multiplied for them, and they will have a noble reward.',
    urdu: 'بے شک صدقہ دینے والے مرد اور عورتیں اور جنہوں نے اللہ کو قرض حسنہ دیا، ان کے لیے دگنا کیا جائے گا اور ان کے لیے عزت کا اجر ہے۔',
    reference: 'Al-Hadid 57:18'
  },
  {
    surah: 35,
    ayah: 29,
    arabic: 'إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ وَأَقَامُوا الصَّلَاةَ وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً يَرْجُونَ تِجَارَةً لَّن تَبُورَ',
    english: 'Those who recite the Book of Allah, establish prayer, and spend from what We have provided them secretly and openly - they hope for a trade that will never perish.',
    urdu: 'جو لوگ اللہ کی کتاب پڑھتے ہیں، نماز قائم کرتے ہیں، اور ہماری دی ہوئی روزی میں سے چھپا کر اور ظاہر خرچ کرتے ہیں - وہ ایسی تجارت کی امید رکھتے ہیں جو کبھی خسارے میں نہیں جائے گی۔',
    reference: 'Fatir 35:29'
  }
];

const DonationBanner = ({ onDonate }) => {
  const [isDismissed, setIsDismissed] = useLocalStorage('donationBannerDismissed', false);
  const [dismissedAt, setDismissedAt] = useLocalStorage('donationBannerDismissedAt', null);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  // Rotate verse every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % DONATION_VERSES.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Show banner again after 24 hours
  useEffect(() => {
    if (isDismissed && dismissedAt) {
      const hoursSinceDismissed = (Date.now() - dismissedAt) / (1000 * 60 * 60);
      if (hoursSinceDismissed >= 24) {
        setIsDismissed(false);
        setDismissedAt(null);
      }
    }
  }, [isDismissed, dismissedAt, setIsDismissed, setDismissedAt]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setDismissedAt(Date.now());
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  if (isDismissed) return null;

  const verse = DONATION_VERSES[currentVerseIndex];

  // Minimized state - small floating button
  if (isMinimized) {
    return (
      <button
        onClick={handleExpand}
        className="fixed bottom-28 sm:bottom-24 right-4 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
        }}
        aria-label="Show donation banner"
      >
        <Icons.Heart className="w-6 h-6 text-white" />
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-28 sm:bottom-24 left-4 right-4 z-50 mx-auto max-w-2xl"
      style={{ animation: 'slideUp 0.5s ease-out' }}
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 50%, rgba(4, 120, 87, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-2 right-2 w-20 h-20 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }} />
          <div className="absolute bottom-2 left-2 w-16 h-16 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }} />
        </div>

        {/* Top bar with controls */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Icons.Heart className="w-4 h-4 text-white/90" />
            <span className="text-white/90 text-xs font-medium">Sadaqah Jariyah - صدقہ جاریہ</span>
          </div>
          <div className="flex items-center gap-1">
            {/* Minimize button */}
            <button
              onClick={handleMinimize}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Minimize"
            >
              <Icons.Minus className="w-4 h-4 text-white/80" />
            </button>
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close for 24 hours"
            >
              <Icons.X className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="px-4 py-3">
          {/* Arabic verse */}
          <p
            className="text-center text-white leading-relaxed mb-2"
            style={{
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              fontSize: '1.1rem',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}
            dir="rtl"
            lang="ar"
          >
            {verse.arabic}
          </p>

          {/* English translation */}
          <p className="text-center text-white/90 text-sm leading-relaxed mb-1.5">
            {verse.english}
          </p>

          {/* Urdu translation */}
          <p
            className="text-center text-white/85 text-sm leading-relaxed mb-2"
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            dir="rtl"
            lang="ur"
          >
            {verse.urdu}
          </p>

          {/* Reference */}
          <p className="text-center text-white/60 text-xs mb-3">
            — {verse.reference}
          </p>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={onDonate}
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                color: '#059669',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              }}
            >
              <Icons.Heart className="w-4 h-4" />
              Donate Now
            </button>
            <button
              onClick={onDonate}
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 border-2 border-white/30 text-white hover:bg-white/10"
            >
              Become a Supporter
            </button>
          </div>

          {/* Verse indicator dots */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {DONATION_VERSES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVerseIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentVerseIndex
                    ? 'bg-white w-4'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Verse ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className="px-4 py-2 bg-black/10 text-center">
          <p className="text-white/70 text-xs">
            Your support helps bring Quran to millions worldwide • Tax-deductible
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationBanner;
