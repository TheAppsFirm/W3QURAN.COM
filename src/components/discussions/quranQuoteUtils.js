/**
 * quranQuoteUtils — Parse [quran:S:A] or [quran:S:A:TID] patterns in discussion text
 * into structured segments for rich rendering.
 * TID = Quran.com translation resource ID (optional, defaults to 234 = Urdu Jalandhry)
 */

// Matches [quran:S:A] or [quran:S:A:TID]
const QURAN_QUOTE_REGEX = /\[quran:(\d+):(\d+)(?::(\d+))?\]/g;

/**
 * Popular translations for the quote picker.
 * Maps Quran.com API resource IDs to display info.
 */
export const QUOTE_TRANSLATIONS = [
  // Urdu
  { id: 234, name: 'فتح محمد جالندھری', nameEn: 'Jalandhry', lang: 'Urdu', langCode: 'ur' },
  { id: 97,  name: 'مودودی (تفہیم)', nameEn: 'Maududi', lang: 'Urdu', langCode: 'ur' },
  { id: 54,  name: 'جوناگڑھی', nameEn: 'Junagarhi', lang: 'Urdu', langCode: 'ur' },
  { id: 819, name: 'وحیدالدین خان', nameEn: 'Wahiduddin Khan', lang: 'Urdu', langCode: 'ur' },
  { id: 158, name: 'ڈاکٹر اسرار احمد', nameEn: 'Dr. Israr Ahmad', lang: 'Urdu', langCode: 'ur' },
  // English
  { id: 20,  name: 'Saheeh International', nameEn: 'Saheeh Intl', lang: 'English', langCode: 'en' },
  { id: 85,  name: 'Abdul Haleem', nameEn: 'Abdul Haleem', lang: 'English', langCode: 'en' },
  { id: 22,  name: 'Yusuf Ali', nameEn: 'Yusuf Ali', lang: 'English', langCode: 'en' },
  { id: 95,  name: 'Maududi (English)', nameEn: 'Maududi (EN)', lang: 'English', langCode: 'en' },
  { id: 203, name: 'Hilali & Khan', nameEn: 'Hilali & Khan', lang: 'English', langCode: 'en' },
];

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
