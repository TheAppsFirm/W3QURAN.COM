/**
 * CreatePostModal — Modal form for creating a new discussion post.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Icons } from '../common';
import { SURAHS } from '../../data';
import { useTags } from '../../hooks/useDiscussion';
import { QUOTE_TRANSLATIONS } from './quranQuoteUtils';
import { useTranslation } from '../../contexts/LocaleContext';

const POST_TYPES = [
  { id: 'discussion', label: 'Discussion', icon: '💬', desc: 'General question or topic' },
  { id: 'reflection', label: 'Reflection', icon: '🌟', desc: 'Personal reflection on an ayah' },
  { id: 'tafseer',    label: 'Tafseer',    icon: '📖', desc: 'Share scholarly interpretation' },
  { id: 'question',   label: 'Question',   icon: '❓', desc: 'Seeking answers' },
];

export default function CreatePostModal({ surahId, surahName, onClose, onSubmit }) {
  const { t } = useTranslation();
  const [postType, setPostType] = useState('discussion');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [ayahInput, setAyahInput] = useState('');
  const [ayahRefs, setAyahRefs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showQuotePicker, setShowQuotePicker] = useState(false);
  const [quoteSurah, setQuoteSurah] = useState(1);
  const [quoteAyah, setQuoteAyah] = useState(1);
  const [quoteTranslation, setQuoteTranslation] = useState(234);
  const [quoteComment, setQuoteComment] = useState('');
  const [quotePreview, setQuotePreview] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // Ref to avoid stale closure in insert handler
  const quoteRef = useRef({ surah: 1, ayah: 1, translation: 234, comment: '' });
  quoteRef.current = { surah: quoteSurah, ayah: quoteAyah, translation: quoteTranslation, comment: quoteComment };
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1); // 1: type, 2: content, 3: preview
  const { tags: availableTags, fetchTags } = useTags();

  useEffect(() => { fetchTags(); }, [fetchTags]);

  const addAyahRef = () => {
    const match = ayahInput.match(/^(\d+):(\d+)(?:-(\d+))?$/);
    if (match) {
      const ref = { surah: parseInt(match[1]), ayah: parseInt(match[2]) };
      if (match[3]) ref.ayahEnd = parseInt(match[3]);
      if (ayahRefs.length < 5) {
        setAyahRefs([...ayahRefs, ref]);
        setAyahInput('');
      }
    }
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setError(null);
    setSubmitting(true);

    try {
      await onSubmit({ postType, title: title.trim(), content: body.trim(), ayahRefs, tags: selectedTags });
      onClose();
    } catch (err) {
      setError(err.data?.error || err.message || 'Failed to create post');
    } finally {
      setSubmitting(false);
    }
  };

  const canProceedStep2 = title.trim().length >= 5 && body.trim().length >= 10;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl
          bg-gradient-to-b from-slate-800/95 to-slate-900/95
          border border-white/10 shadow-2xl shadow-purple-500/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-white/10 bg-slate-800/90 backdrop-blur-sm rounded-t-2xl z-10">
          <div>
            <h2 className="text-white font-semibold text-lg">{t('discussions.newPost', 'New Post')}</h2>
            <p className="text-xs text-white/40">{surahName || `Surah ${surahId}`}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors">
            <Icons.X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Step 1: Post Type Selection */}
          {step === 1 && (
            <>
              <p className="text-sm text-white/50 mb-3">{t('discussions.whatTypeOfPost', 'What type of post?')}</p>
              <div className="grid grid-cols-2 gap-2">
                {POST_TYPES.map(type => (
                  <button
                    key={type.id}
                    onClick={() => { setPostType(type.id); setStep(2); }}
                    className={`p-3 rounded-xl border text-left transition-all
                      ${postType === type.id
                        ? 'border-purple-500/50 bg-purple-500/15'
                        : 'border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20'
                      }`}
                  >
                    <div className="text-xl mb-1">{type.icon}</div>
                    <div className="text-sm text-white font-medium">{type.label}</div>
                    <div className="text-xs text-white/40 mt-0.5">{type.desc}</div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 2: Content */}
          {step === 2 && (
            <>
              {/* Back button */}
              <button onClick={() => setStep(1)} className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1">
                <Icons.ArrowLeft className="w-3 h-3" /> {t('discussions.changeType', 'Change type')}
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{POST_TYPES.find(pt => pt.id === postType)?.icon}</span>
                <span className="text-sm text-white/60">{POST_TYPES.find(pt => pt.id === postType)?.label}</span>
              </div>

              {/* Title */}
              <div>
                <label className="text-xs text-white/40 block mb-1">{t('discussions.titleLabel', 'Title') + ' *'}</label>
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder={t('discussions.titlePlaceholder', "What's on your mind?")}
                  maxLength={200}
                  className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10
                    text-white placeholder-white/25 text-base sm:text-sm
                    focus:outline-none focus:border-purple-500/50 transition-colors"
                  autoFocus
                />
                <div className="text-[10px] text-white/20 text-right mt-0.5">{title.length}/200</div>
              </div>

              {/* Body */}
              <div>
                <label className="text-xs text-white/40 block mb-1">{t('discussions.contentLabel', 'Content') + ' *'}</label>
                <textarea
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  placeholder={t('discussions.contentPlaceholder', 'Share your thoughts, questions, or reflections...')}
                  maxLength={5000}
                  rows={6}
                  className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10
                    text-white placeholder-white/25 text-base sm:text-sm resize-none
                    focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <div className="text-[10px] text-white/20 text-right mt-0.5">{body.length}/5000</div>
              </div>

              {/* Ayah References */}
              <div>
                <label className="text-xs text-white/40 block mb-1">{t('discussions.ayahRefsLabel', 'Ayah References (optional)')}</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={ayahInput}
                    onChange={e => setAyahInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addAyahRef())}
                    placeholder={t('discussions.ayahRefsPlaceholder', 'e.g. 2:255 or 18:1-10')}
                    className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10
                      text-white placeholder-white/25 text-xs
                      focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                  <button
                    onClick={addAyahRef}
                    className="px-3 py-2 rounded-lg bg-purple-600/30 text-purple-300 text-xs hover:bg-purple-600/50 transition-colors"
                  >
                    {t('discussions.add', 'Add')}
                  </button>
                </div>
                {ayahRefs.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {ayahRefs.map((ref, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs">
                        {ref.surah}:{ref.ayah}{ref.ayahEnd ? `-${ref.ayahEnd}` : ''}
                        <button onClick={() => setAyahRefs(ayahRefs.filter((_, j) => j !== i))} className="hover:text-red-400">
                          <Icons.X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Topic Tags */}
              {availableTags.length > 0 && (
                <div>
                  <label className="text-xs text-white/40 block mb-1">{t('discussions.topicsLabel', 'Topics (max 3)')}</label>
                  <div className="flex flex-wrap gap-1.5">
                    {availableTags.map(tag => {
                      const sel = selectedTags.includes(tag.id);
                      return (
                        <button
                          key={tag.id}
                          type="button"
                          onClick={() => {
                            if (sel) setSelectedTags(selectedTags.filter(id => id !== tag.id));
                            else if (selectedTags.length < 3) setSelectedTags([...selectedTags, tag.id]);
                          }}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium border transition-all
                            ${sel
                              ? 'border-opacity-50 shadow-sm'
                              : 'border-white/10 text-white/30 hover:text-white/50 hover:bg-white/5'
                            }`}
                          style={sel ? { backgroundColor: tag.color + '20', color: tag.color, borderColor: tag.color + '40' } : {}}
                        >
                          {tag.icon} {tag.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quran Quote Inserter */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowQuotePicker(!showQuotePicker)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-amber-400/70 hover:text-amber-300 bg-amber-500/[0.06] border border-amber-500/15 hover:bg-amber-500/10 transition-all"
                >
                  <Icons.Quote className="w-3.5 h-3.5" />
                  {t('discussions.quoteQuran', 'Quote Quran Verse')}
                </button>
                {showQuotePicker && (
                  <div className="mt-2 p-3 rounded-xl bg-amber-500/[0.04] border border-amber-500/15 space-y-3">
                    {/* Row 1: Surah + Ayah */}
                    <div className="flex gap-2">
                      <select
                        value={quoteSurah}
                        onChange={e => { setQuoteSurah(Number(e.target.value)); setQuotePreview(null); }}
                        className="flex-1 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs
                          focus:outline-none focus:border-amber-500/50 appearance-none"
                      >
                        {SURAHS.map(s => (
                          <option key={s.id} value={s.id} className="bg-slate-800">{s.id}. {s.name}</option>
                        ))}
                      </select>
                      <input
                        type="number"
                        min={1}
                        max={286}
                        value={quoteAyah}
                        onChange={e => { setQuoteAyah(Number(e.target.value)); setQuotePreview(null); }}
                        placeholder="Ayah"
                        className="w-20 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs
                          focus:outline-none focus:border-amber-500/50"
                      />
                    </div>

                    {/* Row 2: Translation picker */}
                    <div>
                      <label className="text-[10px] text-white/30 block mb-1">{t('discussions.translation', 'Translation')}</label>
                      <select
                        value={quoteTranslation}
                        onChange={e => { setQuoteTranslation(Number(e.target.value)); setQuotePreview(null); }}
                        className="w-full px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs
                          focus:outline-none focus:border-amber-500/50 appearance-none"
                      >
                        <optgroup label="اردو — Urdu" className="bg-slate-800">
                          {QUOTE_TRANSLATIONS.filter(tr => tr.lang === 'Urdu').map(tr => (
                            <option key={tr.id} value={tr.id} className="bg-slate-800">{tr.name} ({tr.nameEn})</option>
                          ))}
                        </optgroup>
                        <optgroup label="English" className="bg-slate-800">
                          {QUOTE_TRANSLATIONS.filter(tr => tr.lang === 'English').map(tr => (
                            <option key={tr.id} value={tr.id} className="bg-slate-800">{tr.nameEn}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    {/* Preview button */}
                    <button
                      type="button"
                      onClick={async () => {
                        setQuoteLoading(true);
                        setQuotePreview(null);
                        try {
                          const res = await fetch(
                            `https://api.quran.com/api/v4/verses/by_key/${quoteSurah}:${quoteAyah}?words=false&translations=${quoteTranslation}&fields=text_uthmani`
                          );
                          const json = await res.json();
                          const ar = json.verse?.text_uthmani || '';
                          const tr = (json.verse?.translations?.[0]?.text || '').replace(/<[^>]+>/g, '');
                          setQuotePreview({ arabic: ar, translation: tr });
                        } catch { setQuotePreview({ arabic: '', translation: 'Failed to load' }); }
                        setQuoteLoading(false);
                      }}
                      disabled={quoteLoading}
                      className="w-full py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50
                        hover:bg-white/10 hover:text-white/70 transition-colors disabled:opacity-30"
                    >
                      {quoteLoading ? t('discussions.loading', 'Loading...') : t('discussions.previewVerse', 'Preview Verse')}
                    </button>

                    {/* Preview display */}
                    {quotePreview && (
                      <div className="rounded-lg bg-amber-500/[0.06] border-l-2 border-amber-500/40 p-3 space-y-1.5">
                        <p className="text-right text-base leading-loose text-white/85" dir="rtl"
                          style={{ fontFamily: "'Scheherazade New', serif" }}>
                          {quotePreview.arabic}
                        </p>
                        {quotePreview.translation && (
                          <p className={`text-xs leading-relaxed text-white/45 ${
                            QUOTE_TRANSLATIONS.find(tr => tr.id === quoteTranslation)?.langCode === 'ur' ? 'text-right' : ''
                          }`}
                            dir={QUOTE_TRANSLATIONS.find(tr => tr.id === quoteTranslation)?.langCode === 'ur' ? 'rtl' : 'ltr'}
                            style={QUOTE_TRANSLATIONS.find(tr => tr.id === quoteTranslation)?.langCode === 'ur' ? { fontFamily: "'Noto Nastaliq Urdu', serif" } : {}}
                          >
                            {quotePreview.translation}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Your comment/question about this verse */}
                    <div>
                      <label className="text-[10px] text-white/30 block mb-1">{t('discussions.yourComment', 'Your comment or question (optional)')}</label>
                      <input
                        type="text"
                        value={quoteComment}
                        onChange={e => setQuoteComment(e.target.value)}
                        placeholder={t('discussions.yourCommentPlaceholder', 'e.g. What does this verse mean in context?')}
                        className="w-full px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs
                          placeholder-white/20 focus:outline-none focus:border-amber-500/50"
                      />
                    </div>

                    {/* Insert button */}
                    <button
                      type="button"
                      onClick={() => {
                        const q = quoteRef.current;
                        const tag = `[quran:${q.surah}:${q.ayah}:${q.translation}]`;
                        const trimCmt = (q.comment || '').trim();
                        const insert = trimCmt ? `${trimCmt}\n${tag}` : tag;
                        setBody(prev => prev + (prev ? '\n\n' : '') + insert);
                        setShowQuotePicker(false);
                        setQuotePreview(null);
                        setQuoteComment('');
                      }}
                      className="w-full py-2 rounded-lg bg-amber-600/30 text-amber-300 text-xs font-medium
                        hover:bg-amber-600/50 transition-colors border border-amber-500/20"
                    >
                      {t('discussions.insertVerseQuote', 'Insert Verse Quote')}
                    </button>
                  </div>
                )}
              </div>

              {/* Error */}
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                  {error}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-lg bg-white/5 text-white/50 text-sm hover:bg-white/10 transition-colors"
                >
                  {t('common.cancel', 'Cancel')}
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!canProceedStep2 || submitting}
                  className="flex-1 py-2.5 rounded-lg bg-purple-600 text-white text-sm font-medium
                    hover:bg-purple-500 disabled:opacity-30 disabled:cursor-not-allowed
                    transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Icons.Send className="w-4 h-4" />
                      {t('discussions.post', 'Post')}
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
