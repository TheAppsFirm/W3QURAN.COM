/**
 * SharePanel Component
 * Handles sharing Quran verses across multiple platforms
 *
 * Features:
 * - Multiple style themes for preview cards
 * - Quick image download
 * - Copy text functionality
 * - Social media sharing (Twitter, WhatsApp)
 * - Art generator integration
 *
 * Follows Single Responsibility Principle - handles only sharing functionality
 */

import { memo, useState, useRef, useCallback } from 'react';
import { Icons } from '../../common/Icons';
import { shareVerse } from '../../../utils/shareUtils';
import { useTranslation } from '../../../contexts/LocaleContext';

// Share card style presets
const SHARE_STYLES = [
  {
    id: 'classic',
    name: 'Classic',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    colors: ['#1a1a2e', '#16213e'],
  },
  {
    id: 'sunset',
    name: 'Sunset',
    bg: 'linear-gradient(135deg, #ff6b6b, #feca57)',
    colors: ['#ff6b6b', '#feca57'],
  },
  {
    id: 'ocean',
    name: 'Ocean',
    bg: 'linear-gradient(135deg, #667eea, #764ba2)',
    colors: ['#667eea', '#764ba2'],
  },
  {
    id: 'forest',
    name: 'Forest',
    bg: 'linear-gradient(135deg, #11998e, #38ef7d)',
    colors: ['#11998e', '#38ef7d'],
  },
  {
    id: 'gold',
    name: 'Gold',
    bg: 'linear-gradient(135deg, #f5af19, #f12711)',
    colors: ['#f5af19', '#f12711'],
  },
  {
    id: 'midnight',
    name: 'Midnight',
    bg: 'linear-gradient(135deg, #232526, #414345)',
    colors: ['#232526', '#414345'],
  },
];

const SharePanel = memo(function SharePanel({
  surahId,
  surahName,
  ayahNumber,
  verseArabic,
  verseTranslation,
  multipleVerses,
  onClose,
  onOpenArtGenerator,
}) {
  const { t } = useTranslation();
  const [shareStatus, setShareStatus] = useState(null);
  const [downloadStatus, setDownloadStatus] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('classic');
  const cardRef = useRef(null);

  // Check if we have multiple verses
  const isMultiple = multipleVerses && multipleVerses.length > 1;
  const versesToShare = isMultiple
    ? multipleVerses
    : [{ ayahNumber, arabic: verseArabic, translation: verseTranslation }];

  // Generate ayah range string for multiple verses
  const ayahRangeStr = isMultiple
    ? `${versesToShare[0].ayahNumber}-${versesToShare[versesToShare.length - 1].ayahNumber}`
    : ayahNumber;

  const handleShare = useCallback(async () => {
    setShareStatus('generating');
    try {
      if (isMultiple) {
        const combinedArabic = versesToShare.map((v) => v.arabic).join(' ');
        const combinedTranslation = versesToShare
          .map((v) => v.translation)
          .join(' ');
        await shareVerse({
          surahName,
          surahId,
          ayahNumber: ayahRangeStr,
          arabic: combinedArabic,
          translation: combinedTranslation,
        });
      } else {
        await shareVerse({
          surahName,
          surahId,
          ayahNumber,
          arabic: verseArabic,
          translation: verseTranslation,
        });
      }
      setShareStatus('copied');
      setTimeout(() => setShareStatus(null), 2000);
    } catch {
      setShareStatus('error');
      setTimeout(() => setShareStatus(null), 2000);
    }
  }, [
    isMultiple,
    versesToShare,
    surahName,
    surahId,
    ayahNumber,
    ayahRangeStr,
    verseArabic,
    verseTranslation,
  ]);

  const copyText = useCallback(() => {
    let text;
    if (isMultiple) {
      text =
        versesToShare
          .map(
            (v) =>
              `${v.arabic}\n"${v.translation}"\n(${surahId}:${v.ayahNumber})`
          )
          .join('\n\n') + `\n\n— ${surahName}`;
    } else {
      text = `${verseArabic}\n\n"${verseTranslation}"\n\n— ${surahName} (${surahId}:${ayahNumber})`;
    }
    navigator.clipboard.writeText(text);
    setShareStatus('copied');
    setTimeout(() => setShareStatus(null), 2000);
  }, [
    isMultiple,
    versesToShare,
    surahId,
    surahName,
    verseArabic,
    verseTranslation,
    ayahNumber,
  ]);

  const downloadImage = useCallback(async () => {
    setDownloadStatus('generating');
    try {
      const style = SHARE_STYLES.find((s) => s.id === selectedStyle);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size (Instagram story size)
      canvas.width = 1080;
      canvas.height = 1920;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, style.colors[0]);
      gradient.addColorStop(1, style.colors[1]);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add decorative elements
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 300, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(canvas.width * 0.2, canvas.height * 0.8, 250, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Add border
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
      ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

      // Bismillah at top
      ctx.font = '48px "Scheherazade New", serif';
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.textAlign = 'center';
      ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', canvas.width / 2, 150);

      // Arabic verse
      ctx.font = '72px "Scheherazade New", serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';

      // Word wrap for Arabic text
      const arabicText = verseArabic || '';
      const maxWidth = canvas.width - 160;
      const words = arabicText.split(' ');
      let lines = [];
      let currentLine = '';

      for (let word of words) {
        const testLine = currentLine ? currentLine + ' ' + word : word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);

      // Draw Arabic lines
      const arabicStartY = 500;
      const arabicLineHeight = 120;
      lines.forEach((line, i) => {
        ctx.fillText(line, canvas.width / 2, arabicStartY + i * arabicLineHeight);
      });

      // Translation
      ctx.font = 'italic 36px Georgia, serif';
      ctx.fillStyle = 'rgba(255,255,255,0.85)';

      const translationText = verseTranslation || '';
      const transWords = translationText.split(' ');
      let transLines = [];
      let transCurrentLine = '';

      for (let word of transWords) {
        const testLine = transCurrentLine ? transCurrentLine + ' ' + word : word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth - 100 && transCurrentLine) {
          transLines.push(transCurrentLine);
          transCurrentLine = word;
        } else {
          transCurrentLine = testLine;
        }
      }
      if (transCurrentLine) transLines.push(transCurrentLine);

      // Draw translation lines
      const transStartY = arabicStartY + lines.length * arabicLineHeight + 150;
      const transLineHeight = 55;
      transLines.slice(0, 8).forEach((line, i) => {
        ctx.fillText(
          `"${line}${i === transLines.length - 1 || i === 7 ? '"' : ''}`,
          canvas.width / 2,
          transStartY + i * transLineHeight
        );
      });

      // Surah reference
      ctx.font = '32px Georgia, serif';
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText(
        `— ${surahName} (${surahId}:${ayahNumber})`,
        canvas.width / 2,
        canvas.height - 200
      );

      // App branding
      ctx.font = '24px Arial, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fillText('w3Quran', canvas.width / 2, canvas.height - 100);

      // Convert to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Quran_${surahName}_${surahId}_${ayahNumber}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setDownloadStatus('done');
        setTimeout(() => setDownloadStatus(null), 2000);
      }, 'image/png');
    } catch (error) {
      console.error('Error generating image:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus(null), 2000);
    }
  }, [selectedStyle, verseArabic, verseTranslation, surahName, surahId, ayahNumber]);

  const shareToTwitter = useCallback(() => {
    const text = `"${verseTranslation?.substring(0, 200)}..." — ${surahName} (${surahId}:${ayahNumber})`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  }, [verseTranslation, surahName, surahId, ayahNumber]);

  const shareToWhatsApp = useCallback(() => {
    const text = `${verseArabic}\n\n"${verseTranslation}"\n\n— ${surahName} (${surahId}:${ayahNumber})`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }, [verseArabic, verseTranslation, surahName, surahId, ayahNumber]);

  const currentStyle = SHARE_STYLES.find((s) => s.id === selectedStyle);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 flex items-center justify-between pb-3 border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <Icons.Share className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">
              {isMultiple ? `${t('share.shareVerse')} (${versesToShare.length})` : t('share.shareVerse')}
            </h3>
            <p className="text-white/60 text-xs">
              {surahName} : {ayahRangeStr}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 transition-all"
        >
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-3 space-y-4">
        {/* Preview Card */}
        <div
          ref={cardRef}
          className="p-4 rounded-2xl max-h-48 overflow-y-auto"
          style={{ background: currentStyle?.bg }}
        >
          {isMultiple ? (
            <div className="space-y-3">
              {versesToShare.slice(0, 3).map((v) => (
                <div key={v.ayahNumber} className="text-center">
                  <p
                    className="text-white text-base leading-relaxed"
                    style={{ fontFamily: "'Scheherazade New', serif" }}
                    dir="rtl"
                  >
                    {v.arabic?.substring(0, 60)}
                    {v.arabic?.length > 60 ? '...' : ''}{' '}
                    <span className="text-white/50 text-xs">({v.ayahNumber})</span>
                  </p>
                  <p className="text-white/70 text-xs italic">
                    "{v.translation?.substring(0, 60)}
                    {v.translation?.length > 60 ? '...' : ''}"
                  </p>
                </div>
              ))}
              {versesToShare.length > 3 && (
                <p className="text-white/50 text-xs text-center">
                  ...and {versesToShare.length - 3} more verse(s)
                </p>
              )}
            </div>
          ) : (
            <>
              <p
                className="text-white text-lg mb-3 leading-relaxed text-center"
                style={{ fontFamily: "'Scheherazade New', serif" }}
                dir="rtl"
              >
                {verseArabic?.substring(0, 100)}
                {verseArabic?.length > 100 ? '...' : ''}
              </p>
              <p className="text-white/80 text-sm italic text-center mb-2">
                "{verseTranslation?.substring(0, 120)}
                {verseTranslation?.length > 120 ? '...' : ''}"
              </p>
            </>
          )}
          <p className="text-white/60 text-xs text-center mt-2">
            — {surahName} ({surahId}:{ayahRangeStr})
          </p>
        </div>

        {/* Style Selector */}
        <div>
          <label className="text-white/80 text-xs font-medium mb-2 block">
            {t('verseArt.style')}
          </label>
          <div className="grid grid-cols-6 gap-2">
            {SHARE_STYLES.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`aspect-square rounded-xl transition-all ${
                  selectedStyle === style.id
                    ? 'ring-2 ring-white scale-105'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{ background: style.bg }}
                title={style.name}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {/* Art Generator Button */}
          <button
            onClick={onOpenArtGenerator}
            className="w-full py-3 bg-gradient-to-r from-amber-500/60 to-orange-500/60 hover:from-amber-500/80 hover:to-orange-500/80 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2"
          >
            <Icons.Palette className="w-5 h-5" /> {t('share.shareArt')}
          </button>

          {/* Download Image Button */}
          <button
            onClick={downloadImage}
            disabled={downloadStatus === 'generating'}
            className="w-full py-3 bg-gradient-to-r from-purple-500/60 to-pink-500/60 hover:from-purple-500/80 hover:to-pink-500/80 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {downloadStatus === 'generating' ? (
              <>
                <Icons.Loader className="w-5 h-5 animate-spin" /> {t('common.loading')}
              </>
            ) : downloadStatus === 'done' ? (
              <>
                <Icons.Check className="w-5 h-5" /> {t('common.done')}
              </>
            ) : (
              <>
                <Icons.Download className="w-5 h-5" /> {t('common.download')}
              </>
            )}
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            disabled={shareStatus === 'generating'}
            className="w-full py-3 bg-gradient-to-r from-emerald-500/60 to-teal-500/60 hover:from-emerald-500/80 hover:to-teal-500/80 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {shareStatus === 'generating' ? (
              <Icons.Loader className="w-5 h-5 animate-spin" />
            ) : shareStatus === 'copied' ? (
              <>
                <Icons.Check className="w-5 h-5" /> {t('common.copied')}
              </>
            ) : (
              <>
                <Icons.Share className="w-5 h-5" /> {t('common.share')}
              </>
            )}
          </button>

          {/* Copy Text */}
          <button
            onClick={copyText}
            className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white/80 font-medium transition-all flex items-center justify-center gap-2"
          >
            <Icons.Copy className="w-4 h-4" /> {t('share.copyText')}
          </button>

          {/* Social Buttons */}
          <div className="flex gap-2">
            <button
              onClick={shareToTwitter}
              className="flex-1 py-2.5 bg-[#1DA1F2]/30 hover:bg-[#1DA1F2]/50 rounded-xl text-white font-medium transition-all text-sm"
            >
              {t('share.twitter')}
            </button>
            <button
              onClick={shareToWhatsApp}
              className="flex-1 py-2.5 bg-[#25D366]/30 hover:bg-[#25D366]/50 rounded-xl text-white font-medium transition-all text-sm"
            >
              {t('share.whatsapp')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SharePanel;
