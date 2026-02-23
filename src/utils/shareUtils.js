/**
 * Share Utilities
 * Handles Web Share API and fallback to clipboard
 */

/**
 * Share content using Web Share API or fallback to clipboard
 * @param {Object} data - { title, text, url }
 * @returns {Promise<{ success: boolean, method: string }>}
 */
export async function shareContent({ title, text, url }) {
  // Try Web Share API first (mobile and some desktop browsers)
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return { success: true, method: 'share' };
    } catch (err) {
      // User cancelled or share failed
      if (err.name !== 'AbortError') {
        console.error('Share failed:', err);
      }
      return { success: false, method: 'share' };
    }
  }

  // Fallback to clipboard
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return { success: false, method: 'clipboard', error: 'Clipboard API not available' };
    }
    const shareText = url ? `${text}\n\n${url}` : text;
    await navigator.clipboard.writeText(shareText);
    return { success: true, method: 'clipboard' };
  } catch (err) {
    console.error('Clipboard failed:', err);
    return { success: false, method: 'clipboard' };
  }
}

/**
 * Share a Quran verse
 * @param {Object} verse - { surahName, ayahNumber, arabic, translation }
 */
export async function shareVerse({ surahName, surahId, ayahNumber, arabic, translation }) {
  const text = `${arabic}\n\n"${translation}"\n\n— ${surahName} (${surahId}:${ayahNumber})`;
  const url = `https://w3quran.com/surah/${surahId}/${ayahNumber}`;

  return shareContent({
    title: `${surahName} - Verse ${ayahNumber}`,
    text,
    url,
  });
}

/**
 * Share a Name of Allah
 * @param {Object} name - { english, arabic, meaning }
 */
export async function shareName({ english, arabic, meaning }) {
  const text = `${arabic}\n${english}\n\n"${meaning}"\n\nOne of the 99 Names of Allah`;

  return shareContent({
    title: `${english} - Name of Allah`,
    text,
  });
}

/**
 * Share Daily Verse
 * @param {Object} verse - { surah, ayah, arabic, translation }
 */
export async function shareDailyVerse({ surah, ayah, arabic, translation, surahName }) {
  const text = `Daily Verse from w3Quran\n\n${arabic}\n\n"${translation}"\n\n— ${surahName || `Surah ${surah}`}:${ayah}`;

  return shareContent({
    title: 'Daily Quran Verse',
    text,
    url: 'https://w3quran.com',
  });
}

/**
 * Copy text to clipboard with fallback
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>}
 */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  } catch (err) {
    console.error('Copy failed:', err);
    return false;
  }
}

export default {
  shareContent,
  shareVerse,
  shareName,
  shareDailyVerse,
  copyToClipboard,
};
