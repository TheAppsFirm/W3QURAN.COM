/**
 * CommentInput — Text input for adding comments/replies with Quran quoting.
 */

import React, { useState } from 'react';
import { Icons } from '../common';
import { SURAHS } from '../../data';
import { QUOTE_TRANSLATIONS } from './quranQuoteUtils';

export default function CommentInput({ onSubmit, placeholder = 'Write a comment...', compact = false }) {
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  const [quoteSurah, setQuoteSurah] = useState(1);
  const [quoteAyah, setQuoteAyah] = useState(1);
  const [quoteTranslation, setQuoteTranslation] = useState(234);
  const [quoteComment, setQuoteComment] = useState('');
  const [quotePreview, setQuotePreview] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || submitting) return;

    setSubmitting(true);
    setError(null);
    try {
      await onSubmit(trimmed);
      setText('');
    } catch (err) {
      setError(err.data?.error || err.message || 'Failed to post comment');
    } finally {
      setSubmitting(false);
    }
  };

  const loadPreview = async () => {
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
    } catch {
      setQuotePreview({ arabic: '', translation: 'Failed to load' });
    }
    setQuoteLoading(false);
  };

  // Use refs to avoid stale closure issues with the insert handler
  const quoteStateRef = React.useRef({ surah: 1, ayah: 1, translation: 234, comment: '' });
  quoteStateRef.current = { surah: quoteSurah, ayah: quoteAyah, translation: quoteTranslation, comment: quoteComment };

  const insertQuote = () => {
    const { surah, ayah, translation, comment: cmt } = quoteStateRef.current;
    const tag = `[quran:${surah}:${ayah}:${translation}]`;
    const trimCmt = (cmt || '').trim();
    const insert = trimCmt ? `${trimCmt} ${tag}` : tag;
    setText(prev => prev + (prev ? ' ' : '') + insert);
    setShowQuote(false);
    setQuotePreview(null);
    setQuoteComment('');
  };

  const transInfo = QUOTE_TRANSLATIONS.find(t => t.id === quoteTranslation);
  const isUrdu = transInfo?.langCode === 'ur';

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={placeholder}
          maxLength={2000}
          className={`flex-1 bg-white/5 border border-white/10 rounded-lg
            text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50
            transition-colors ${compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2.5 text-sm'}`}
        />
        <button
          type="button"
          onClick={() => setShowQuote(!showQuote)}
          className={`flex items-center justify-center rounded-lg border border-amber-500/20
            text-amber-400/60 hover:text-amber-300 hover:bg-amber-500/10 transition-all
            ${compact ? 'w-8 h-8' : 'w-10 h-10'}`}
          title="Quote Quran"
        >
          <Icons.Quote className={compact ? 'w-3 h-3' : 'w-4 h-4'} />
        </button>
        <button
          type="submit"
          disabled={!text.trim() || submitting}
          className={`flex items-center justify-center rounded-lg bg-purple-600 hover:bg-purple-500
            disabled:opacity-30 disabled:cursor-not-allowed transition-all
            ${compact ? 'w-8 h-8' : 'px-4 py-2.5'}`}
        >
          {submitting ? (
            <div className={`border-2 border-white/30 border-t-white rounded-full animate-spin ${compact ? 'w-3 h-3' : 'w-4 h-4'}`} />
          ) : (
            <Icons.Send className={compact ? 'w-3.5 h-3.5 text-white' : 'w-4 h-4 text-white'} />
          )}
        </button>
      </form>

      {error && (
        <div className="mt-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400/80 flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="text-red-400/50 hover:text-red-300 ml-2">&times;</button>
        </div>
      )}

      {showQuote && (
        <div className="mt-2 p-3 rounded-xl bg-amber-500/[0.04] border border-amber-500/15 space-y-2.5">
          {/* Surah + Ayah */}
          <div className="flex gap-2">
            <select
              value={quoteSurah}
              onChange={e => { setQuoteSurah(Number(e.target.value)); setQuotePreview(null); }}
              className="flex-1 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none appearance-none"
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
              className="w-16 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none"
            />
          </div>

          {/* Translation */}
          <select
            value={quoteTranslation}
            onChange={e => { setQuoteTranslation(Number(e.target.value)); setQuotePreview(null); }}
            className="w-full px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none appearance-none"
          >
            <optgroup label="اردو — Urdu" className="bg-slate-800">
              {QUOTE_TRANSLATIONS.filter(t => t.lang === 'Urdu').map(t => (
                <option key={t.id} value={t.id} className="bg-slate-800">{t.name} ({t.nameEn})</option>
              ))}
            </optgroup>
            <optgroup label="English" className="bg-slate-800">
              {QUOTE_TRANSLATIONS.filter(t => t.lang === 'English').map(t => (
                <option key={t.id} value={t.id} className="bg-slate-800">{t.nameEn}</option>
              ))}
            </optgroup>
          </select>

          {/* Your comment/question */}
          <input
            type="text"
            value={quoteComment}
            onChange={e => setQuoteComment(e.target.value)}
            placeholder="Your question or comment (optional)"
            className="w-full px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs
              placeholder-white/20 focus:outline-none focus:border-amber-500/50"
          />

          {/* Preview + Insert */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={loadPreview}
              disabled={quoteLoading}
              className="flex-1 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50
                hover:bg-white/10 hover:text-white/70 transition-colors disabled:opacity-30"
            >
              {quoteLoading ? 'Loading...' : 'Preview'}
            </button>
            <button
              type="button"
              onClick={insertQuote}
              className="flex-1 py-1.5 rounded-lg bg-amber-600/30 text-amber-300 text-xs font-medium
                hover:bg-amber-600/50 transition-colors border border-amber-500/20"
            >
              Insert
            </button>
          </div>

          {/* Preview display */}
          {quotePreview && (
            <div className="rounded-lg bg-amber-500/[0.06] border-l-2 border-amber-500/40 p-2.5 space-y-1">
              <p className="text-right text-sm leading-loose text-white/85" dir="rtl"
                style={{ fontFamily: "'Scheherazade New', serif" }}>
                {quotePreview.arabic}
              </p>
              {quotePreview.translation && (
                <p className={`text-[11px] leading-relaxed text-white/45 ${isUrdu ? 'text-right' : ''}`}
                  dir={isUrdu ? 'rtl' : 'ltr'}
                  style={isUrdu ? { fontFamily: "'Noto Nastaliq Urdu', serif" } : {}}>
                  {quotePreview.translation}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
