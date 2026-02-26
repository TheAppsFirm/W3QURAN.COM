/**
 * BookmarksPanel Component
 * Manages saved verse bookmarks with notes
 *
 * Features:
 * - Add/remove bookmarks
 * - Optional notes for each bookmark
 * - Bookmark list with previews
 * - LocalStorage persistence
 *
 * Follows Single Responsibility Principle - handles only bookmark management
 */

import { memo, useState, useCallback } from 'react';
import { Icons } from '../../common/Icons';
import { useLocalStorage } from '../../../hooks';
import { useTranslation } from '../../../contexts/LocaleContext';

/**
 * Creates a new bookmark object
 * @param {Object} params - Bookmark parameters
 * @returns {Object} New bookmark object
 */
const createBookmark = ({ surahId, surahName, ayahNumber, verseArabic, notes }) => ({
  id: Date.now(),
  surahId,
  surahName,
  ayahNumber,
  versePreview: verseArabic?.substring(0, 60),
  note: notes,
  timestamp: new Date().toISOString(),
});

const BookmarksPanel = memo(function BookmarksPanel({
  surahId,
  surahName,
  ayahNumber,
  verseArabic,
  onClose,
  onNavigateToBookmark,
}) {
  const { t } = useTranslation();
  const [bookmarks, setBookmarks] = useLocalStorage('quran_bookmarks', []);
  const [notes, setNotes] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  const isCurrentBookmarked = bookmarks.some(
    (b) => b.surahId === surahId && b.ayahNumber === ayahNumber
  );

  const addBookmark = useCallback(() => {
    const newBookmark = createBookmark({
      surahId,
      surahName,
      ayahNumber,
      verseArabic,
      notes,
    });
    setBookmarks([newBookmark, ...bookmarks]);
    setNotes('');
    setShowNoteInput(false);
  }, [surahId, surahName, ayahNumber, verseArabic, notes, bookmarks, setBookmarks]);

  const removeBookmark = useCallback(
    (id) => {
      setBookmarks(bookmarks.filter((b) => b.id !== id));
    },
    [bookmarks, setBookmarks]
  );

  const handleBookmarkClick = useCallback(
    (bookmark) => {
      if (onNavigateToBookmark) {
        onNavigateToBookmark(bookmark.surahId, bookmark.ayahNumber);
      }
    },
    [onNavigateToBookmark]
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
            <Icons.Bookmark className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">{t('reader.bookmark')}</h3>
            <p className="text-white/60 text-xs">{bookmarks.length} {t('common.save').toLowerCase()}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 transition-all"
        >
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      {/* Add Bookmark Section */}
      <div className="flex-shrink-0 py-3 border-b border-white/10">
        {isCurrentBookmarked ? (
          <BookmarkedIndicator ayahNumber={ayahNumber} />
        ) : showNoteInput ? (
          <NoteInput
            notes={notes}
            onNotesChange={setNotes}
            onSave={addBookmark}
            onCancel={() => setShowNoteInput(false)}
          />
        ) : (
          <AddBookmarkButton
            ayahNumber={ayahNumber}
            onClick={() => setShowNoteInput(true)}
          />
        )}
      </div>

      {/* Bookmarks List */}
      <div className="flex-1 overflow-y-auto py-3 space-y-2">
        {bookmarks.length === 0 ? (
          <EmptyBookmarks />
        ) : (
          bookmarks.map((bookmark) => (
            <BookmarkItem
              key={bookmark.id}
              bookmark={bookmark}
              onRemove={removeBookmark}
              onClick={handleBookmarkClick}
            />
          ))
        )}
      </div>
    </div>
  );
});

/**
 * Indicator when current ayah is already bookmarked
 */
const BookmarkedIndicator = memo(function BookmarkedIndicator({ ayahNumber }) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-2 p-3 bg-pink-500/20 rounded-xl">
      <Icons.Check className="w-5 h-5 text-pink-400" />
      <span className="text-white/80 text-sm">{t('reader.ayah')} {ayahNumber} {t('reader.bookmarked').toLowerCase()}</span>
    </div>
  );
});

/**
 * Note input form for adding a bookmark
 */
const NoteInput = memo(function NoteInput({ notes, onNotesChange, onSave, onCancel }) {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <textarea
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
        placeholder="Add a note (optional)..."
        className="w-full p-3 bg-white/10 rounded-xl text-white text-sm placeholder-white/40 resize-none"
        rows={2}
      />
      <div className="flex gap-2">
        <button
          onClick={onSave}
          className="flex-1 py-2 bg-pink-500/50 hover:bg-pink-500/70 rounded-xl text-white text-sm font-medium transition-all"
        >
          {t('common.save')}
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white/70 text-sm transition-all"
        >
          {t('common.cancel')}
        </button>
      </div>
    </div>
  );
});

/**
 * Button to add a new bookmark
 */
const AddBookmarkButton = memo(function AddBookmarkButton({ ayahNumber, onClick }) {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      className="w-full py-3 bg-gradient-to-r from-pink-500/40 to-rose-500/40 hover:from-pink-500/60 hover:to-rose-500/60 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2"
    >
      <Icons.Plus className="w-4 h-4" /> {t('reader.bookmark')} {t('reader.ayah')} {ayahNumber}
    </button>
  );
});

/**
 * Empty state when no bookmarks exist
 */
const EmptyBookmarks = memo(function EmptyBookmarks() {
  const { t } = useTranslation();
  return (
    <div className="text-center py-8">
      <Icons.Bookmark className="w-12 h-12 mx-auto text-white/20 mb-3" />
      <p className="text-white/50 text-sm">{t('errors.notFound')}</p>
    </div>
  );
});

/**
 * Individual bookmark item in the list
 */
const BookmarkItem = memo(function BookmarkItem({ bookmark, onRemove, onClick }) {
  return (
    <div
      className="p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all group cursor-pointer"
      onClick={() => onClick(bookmark)}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-white font-medium text-sm">
            {bookmark.surahName} : {bookmark.ayahNumber}
          </p>
          <p
            className="text-white/50 text-xs truncate mt-1"
            dir="rtl"
            style={{ fontFamily: "'Scheherazade New', serif" }}
          >
            {bookmark.versePreview}...
          </p>
          {bookmark.note && (
            <p className="text-white/40 text-xs mt-1 italic">"{bookmark.note}"</p>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(bookmark.id);
          }}
          className="p-1.5 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white/20 transition-all"
        >
          <Icons.X className="w-3 h-3 text-white/50" />
        </button>
      </div>
    </div>
  );
});

export default BookmarksPanel;
