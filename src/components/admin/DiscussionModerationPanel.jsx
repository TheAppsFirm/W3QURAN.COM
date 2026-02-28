/**
 * DiscussionModerationPanel — Admin tab for moderating community discussions.
 * Shows auto-moderation incidents, report queue, keyword management, ban management, and stats.
 *
 * 5 sub-tabs: incidents (default), reports, keywords, bans, stats
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common';

const API_BASE = '/api/admin/discussions';

async function adminFetch(url, options = {}) {
  const res = await fetch(url, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.error || `Request failed (${res.status})`);
  }
  return res.json();
}

const REASON_LABELS = {
  spam: 'Spam',
  offensive: 'Offensive',
  misinformation: 'Misinformation',
  harassment: 'Harassment',
  other: 'Other',
};

const TARGET_LABELS = {
  post: 'Post',
  comment: 'Comment',
  chat_message: 'Chat',
};

const SEVERITY_CATEGORIES = ['profanity', 'slur', 'spam', 'hate', 'general'];

// ─── Main Panel ──────────────────────────────────────────────

export default function DiscussionModerationPanel() {
  const [tab, setTab] = useState('incidents');
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);

  // Incidents state
  const [incidents, setIncidents] = useState([]);
  const [unreviewedCount, setUnreviewedCount] = useState(0);
  const [incidentFilter, setIncidentFilter] = useState('unreviewed'); // 'all' | 'unreviewed' | 'reviewed'

  // Reports state
  const [reports, setReports] = useState([]);

  // Keywords state
  const [keywords, setKeywords] = useState([]);
  const [newKeyword, setNewKeyword] = useState('');
  const [newSeverity, setNewSeverity] = useState('flag');
  const [newCategory, setNewCategory] = useState('general');
  const [bulkWords, setBulkWords] = useState('');
  const [bulkSeverity, setBulkSeverity] = useState('flag');

  // Bans state
  const [bans, setBans] = useState([]);

  // Stats state
  const [stats, setStats] = useState(null);

  // ─── Data fetching ───────────────────────────────────────

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (tab === 'incidents') {
        const data = await adminFetch(`${API_BASE}?action=incidents`);
        setIncidents(data.incidents || []);
        setUnreviewedCount(data.unreviewedCount || 0);
      } else if (tab === 'reports') {
        const data = await adminFetch(`${API_BASE}?action=reports`);
        setReports(data.reports || []);
      } else if (tab === 'keywords') {
        const data = await adminFetch(`${API_BASE}?action=keywords`);
        setKeywords(data.keywords || []);
      } else if (tab === 'bans') {
        const data = await adminFetch(`${API_BASE}?action=bans`);
        setBans(data.bans || []);
      } else if (tab === 'stats') {
        const data = await adminFetch(`${API_BASE}?action=stats`);
        setStats(data);
      }
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  }, [tab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ─── Incident actions ────────────────────────────────────

  const handleIncidentAction = async (incidentId, decision) => {
    setActionLoading(incidentId);
    try {
      await adminFetch(API_BASE, {
        method: 'POST',
        body: JSON.stringify({ action: 'review_incident', incidentId, decision }),
      });
      // Update local state: mark the incident as reviewed
      setIncidents(prev =>
        prev.map(i =>
          i.id === incidentId
            ? {
                ...i,
                actionTaken: decision === 'approve' ? 'admin_approved'
                           : decision === 'delete' ? 'admin_deleted'
                           : 'admin_banned',
                reviewedAt: new Date().toISOString(),
              }
            : i
        )
      );
      setUnreviewedCount(prev => Math.max(0, prev - 1));
    } catch { /* handled */ }
    finally { setActionLoading(null); }
  };

  // ─── Report actions ──────────────────────────────────────

  const handleReportAction = async (reportId, decision, banReason) => {
    setActionLoading(reportId);
    try {
      await adminFetch(API_BASE, {
        method: 'POST',
        body: JSON.stringify({ action: 'review_report', reportId, decision, banReason }),
      });
      setReports(prev => prev.filter(r => r.id !== reportId));
    } catch { /* handled */ }
    finally { setActionLoading(null); }
  };

  // ─── Keyword actions ─────────────────────────────────────

  const handleAddKeyword = async () => {
    if (!newKeyword.trim()) return;
    setActionLoading('add-keyword');
    try {
      await adminFetch(API_BASE, {
        method: 'POST',
        body: JSON.stringify({ action: 'add_keyword', word: newKeyword, severity: newSeverity, category: newCategory }),
      });
      setNewKeyword('');
      fetchData(); // Refresh keyword list
    } catch { /* handled */ }
    finally { setActionLoading(null); }
  };

  const handleDeleteKeyword = async (keywordId) => {
    setActionLoading(keywordId);
    try {
      await adminFetch(API_BASE, {
        method: 'POST',
        body: JSON.stringify({ action: 'delete_keyword', keywordId }),
      });
      setKeywords(prev => prev.filter(k => k.id !== keywordId));
    } catch { /* handled */ }
    finally { setActionLoading(null); }
  };

  const handleBulkAdd = async () => {
    const words = bulkWords.split('\n').map(w => w.trim()).filter(Boolean);
    if (words.length === 0) return;
    setActionLoading('bulk-add');
    try {
      const data = await adminFetch(API_BASE, {
        method: 'POST',
        body: JSON.stringify({ action: 'bulk_add_keywords', words, severity: bulkSeverity, category: newCategory }),
      });
      if (data.success) {
        setBulkWords('');
        fetchData();
      }
    } catch { /* handled */ }
    finally { setActionLoading(null); }
  };

  // ─── Ban actions ─────────────────────────────────────────

  const handleUnban = async (userId) => {
    setActionLoading(userId);
    try {
      await adminFetch(API_BASE, {
        method: 'POST',
        body: JSON.stringify({ action: 'unban_user', userId }),
      });
      setBans(prev => prev.filter(b => b.userId !== userId));
    } catch { /* handled */ }
    finally { setActionLoading(null); }
  };

  // ─── Filtered incidents ──────────────────────────────────

  const filteredIncidents = incidents.filter(i => {
    if (incidentFilter === 'unreviewed') return i.actionTaken === 'auto';
    if (incidentFilter === 'reviewed') return i.actionTaken !== 'auto';
    return true; // 'all'
  });

  // ─── Render ──────────────────────────────────────────────

  return (
    <div className="space-y-4">
      {/* Sub-tabs */}
      <div className="flex gap-2 flex-wrap">
        {[
          { id: 'incidents', label: 'Incidents', icon: Icons.AlertTriangle },
          { id: 'reports', label: 'Reports', icon: Icons.AlertCircle },
          { id: 'keywords', label: 'Keywords', icon: Icons.Tag },
          { id: 'bans', label: 'Bans', icon: Icons.Shield },
          { id: 'stats', label: 'Stats', icon: Icons.BarChart },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors relative
              ${tab === t.id
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                : 'text-white/40 hover:text-white/60 hover:bg-white/5'
              }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
            {/* Unreviewed count badge on Incidents tab */}
            {t.id === 'incidents' && unreviewedCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-red-500/80 text-white min-w-[18px] text-center">
                {unreviewedCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex items-center justify-center py-10">
          <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* ─── Incidents Tab ──────────────────────────────────── */}
      {!loading && tab === 'incidents' && (
        <div className="space-y-3">
          {/* Filter toggles */}
          <div className="flex gap-2">
            {['all', 'unreviewed', 'reviewed'].map(f => (
              <button
                key={f}
                onClick={() => setIncidentFilter(f)}
                className={`px-3 py-1 rounded-lg text-xs transition-colors capitalize
                  ${incidentFilter === f
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-white/30 hover:text-white/50 hover:bg-white/5'
                  }`}
              >
                {f}
                {f === 'unreviewed' && unreviewedCount > 0 && (
                  <span className="ml-1 text-red-400">({unreviewedCount})</span>
                )}
              </button>
            ))}
          </div>

          {filteredIncidents.length === 0 ? (
            <div className="text-center py-8 text-white/30 text-sm">
              No {incidentFilter !== 'all' ? incidentFilter : ''} incidents
            </div>
          ) : (
            filteredIncidents.map(incident => (
              <div key={incident.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                {/* Header row: severity badge + content type + timestamp */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Severity badge */}
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide
                      ${incident.severity === 'block'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}
                    >
                      {incident.severity === 'block' ? 'Blocked' : 'Flagged'}
                    </span>
                    {/* Content type badge */}
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-white/10 text-white/50">
                      {TARGET_LABELS[incident.contentType] || incident.contentType}
                    </span>
                    {/* Action taken badge (if reviewed) */}
                    {incident.actionTaken !== 'auto' && (
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium
                        ${incident.actionTaken === 'admin_approved' ? 'bg-green-500/20 text-green-400' :
                          incident.actionTaken === 'admin_deleted' ? 'bg-red-500/20 text-red-400' :
                          incident.actionTaken === 'admin_banned' ? 'bg-red-700/20 text-red-300' :
                          'bg-white/10 text-white/40'
                        }`}
                      >
                        {incident.actionTaken === 'admin_approved' ? 'Approved' :
                         incident.actionTaken === 'admin_deleted' ? 'Deleted' :
                         incident.actionTaken === 'admin_banned' ? 'Banned' :
                         incident.actionTaken}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-white/20 whitespace-nowrap ml-2">
                    {new Date(incident.createdAt).toLocaleString()}
                  </span>
                </div>

                {/* User info */}
                <p className="text-xs text-white/40 mb-1">
                  User: <span className="text-white/60 font-medium">{incident.userName || 'Unknown'}</span>
                  {incident.userEmail && (
                    <span className="text-white/30 ml-1">({incident.userEmail})</span>
                  )}
                </p>

                {/* Content preview */}
                {incident.contentPreview && (
                  <div className="text-xs text-white/50 bg-white/5 rounded-lg p-2.5 mb-2 leading-relaxed">
                    {incident.contentPreview.length > 200
                      ? incident.contentPreview.slice(0, 200) + '...'
                      : incident.contentPreview}
                  </div>
                )}

                {/* Matched keywords */}
                {incident.matchedKeywords && incident.matchedKeywords.length > 0 && (
                  <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                    <span className="text-[10px] text-white/30 uppercase tracking-wide">Matched:</span>
                    {incident.matchedKeywords.map((kw, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 text-[11px] rounded bg-red-500/15 text-red-400 border border-red-500/20 font-mono">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}

                {/* Review info */}
                {incident.reviewedBy && (
                  <p className="text-[10px] text-white/20 mb-2">
                    Reviewed by {incident.reviewedBy} on {new Date(incident.reviewedAt).toLocaleString()}
                  </p>
                )}

                {/* Action buttons (only for unreviewed) */}
                {incident.actionTaken === 'auto' && (
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleIncidentAction(incident.id, 'approve')}
                      disabled={actionLoading === incident.id}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/20 transition-colors disabled:opacity-30"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleIncidentAction(incident.id, 'delete')}
                      disabled={actionLoading === incident.id}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-colors disabled:opacity-30"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleIncidentAction(incident.id, 'ban')}
                      disabled={actionLoading === incident.id}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-700/15 text-red-300 hover:bg-red-700/25 border border-red-700/25 transition-colors disabled:opacity-30"
                    >
                      Ban User
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* ─── Reports Tab ────────────────────────────────────── */}
      {!loading && tab === 'reports' && (
        <div className="space-y-3">
          {reports.length === 0 ? (
            <div className="text-center py-8 text-white/30 text-sm">
              No pending reports
            </div>
          ) : (
            reports.map(report => (
              <div key={report.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mr-2
                      ${report.reason === 'offensive' ? 'bg-red-500/20 text-red-400' :
                        report.reason === 'spam' ? 'bg-yellow-500/20 text-yellow-400' :
                        report.reason === 'harassment' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-white/10 text-white/60'}`}
                    >
                      {REASON_LABELS[report.reason] || report.reason}
                    </span>
                    <span className="text-xs text-white/30">
                      {TARGET_LABELS[report.targetType]} #{report.targetId}
                    </span>
                  </div>
                  <span className="text-[10px] text-white/20">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-xs text-white/40 mb-1">
                  Reported by: <span className="text-white/60">{report.reporterName}</span> ({report.reporterEmail})
                </p>

                {report.details && (
                  <p className="text-xs text-white/30 bg-white/5 rounded p-2 mb-2">{report.details}</p>
                )}

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleReportAction(report.id, 'dismiss')}
                    disabled={actionLoading === report.id}
                    className="px-3 py-1 rounded-lg text-xs bg-white/5 text-white/40 hover:bg-white/10 transition-colors disabled:opacity-30"
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={() => handleReportAction(report.id, 'delete')}
                    disabled={actionLoading === report.id}
                    className="px-3 py-1 rounded-lg text-xs bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-30"
                  >
                    Delete Content
                  </button>
                  <button
                    onClick={() => handleReportAction(report.id, 'ban', 'Reported content violation')}
                    disabled={actionLoading === report.id}
                    className="px-3 py-1 rounded-lg text-xs bg-red-600/20 text-red-300 hover:bg-red-600/30 transition-colors disabled:opacity-30"
                  >
                    Delete + Ban User
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* ─── Keywords Tab ───────────────────────────────────── */}
      {!loading && tab === 'keywords' && (
        <div className="space-y-4">
          {/* Add single keyword */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h4 className="text-xs text-white/50 uppercase tracking-wide mb-3">Add Keyword</h4>
            <div className="flex gap-2 flex-wrap items-end">
              <div className="flex-1 min-w-[140px]">
                <input
                  type="text"
                  value={newKeyword}
                  onChange={e => setNewKeyword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddKeyword()}
                  placeholder="Enter keyword..."
                  className="w-full px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-white/80 placeholder:text-white/20 focus:outline-none focus:border-purple-500/40"
                />
              </div>
              <select
                value={newSeverity}
                onChange={e => setNewSeverity(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-white/60 focus:outline-none focus:border-purple-500/40"
              >
                <option value="block">Block</option>
                <option value="flag">Flag</option>
              </select>
              <select
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-white/60 focus:outline-none focus:border-purple-500/40"
              >
                {SEVERITY_CATEGORIES.map(c => (
                  <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                ))}
              </select>
              <button
                onClick={handleAddKeyword}
                disabled={actionLoading === 'add-keyword' || !newKeyword.trim()}
                className="px-4 py-1.5 rounded-lg text-sm font-medium bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/30 transition-colors disabled:opacity-30 flex items-center gap-1.5"
              >
                <Icons.Plus className="w-3.5 h-3.5" />
                Add
              </button>
            </div>
          </div>

          {/* Bulk add keywords */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h4 className="text-xs text-white/50 uppercase tracking-wide mb-3">Bulk Add Keywords</h4>
            <textarea
              value={bulkWords}
              onChange={e => setBulkWords(e.target.value)}
              placeholder="One keyword per line..."
              rows={4}
              className="w-full px-3 py-2 rounded-lg text-sm bg-white/5 border border-white/10 text-white/80 placeholder:text-white/20 focus:outline-none focus:border-purple-500/40 resize-none font-mono"
            />
            <div className="flex gap-2 mt-2 items-center">
              <select
                value={bulkSeverity}
                onChange={e => setBulkSeverity(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-white/60 focus:outline-none focus:border-purple-500/40"
              >
                <option value="block">Block</option>
                <option value="flag">Flag</option>
              </select>
              <button
                onClick={handleBulkAdd}
                disabled={actionLoading === 'bulk-add' || !bulkWords.trim()}
                className="px-4 py-1.5 rounded-lg text-sm font-medium bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30 transition-colors disabled:opacity-30"
              >
                Add All
              </button>
              {bulkWords.trim() && (
                <span className="text-xs text-white/30">
                  {bulkWords.split('\n').filter(w => w.trim()).length} words
                </span>
              )}
            </div>
          </div>

          {/* Keyword list */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs text-white/50 uppercase tracking-wide">
                All Keywords
              </h4>
              <span className="text-xs text-white/30">
                {keywords.length} total
              </span>
            </div>

            {keywords.length === 0 ? (
              <div className="text-center py-6 text-white/20 text-sm">
                No keywords configured
              </div>
            ) : (
              <div className="space-y-1.5 max-h-[400px] overflow-y-auto pr-1">
                {/* Block keywords first, then flag */}
                {['block', 'flag'].map(severity => {
                  const group = keywords.filter(k => k.severity === severity);
                  if (group.length === 0) return null;
                  return (
                    <div key={severity}>
                      <div className={`text-[10px] uppercase tracking-wider mb-1.5 mt-2 font-bold
                        ${severity === 'block' ? 'text-red-400/60' : 'text-yellow-400/60'}`}
                      >
                        {severity} ({group.length})
                      </div>
                      {group.map(kw => (
                        <div
                          key={kw.id}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg hover:bg-white/5 group transition-colors"
                        >
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-white/70 font-mono">{kw.word}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase
                              ${kw.severity === 'block'
                                ? 'bg-red-500/15 text-red-400'
                                : 'bg-yellow-500/15 text-yellow-400'
                              }`}
                            >
                              {kw.severity}
                            </span>
                            {kw.category && kw.category !== 'general' && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-white/30">
                                {kw.category}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => handleDeleteKeyword(kw.id)}
                            disabled={actionLoading === kw.id}
                            className="p-1 rounded text-white/20 hover:text-red-400 hover:bg-red-500/10 transition-colors sm:opacity-0 sm:group-hover:opacity-100 disabled:opacity-30"
                            title="Delete keyword"
                          >
                            <Icons.Trash className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── Bans Tab ───────────────────────────────────────── */}
      {!loading && tab === 'bans' && (
        <div className="space-y-3">
          {bans.length === 0 ? (
            <div className="text-center py-8 text-white/30 text-sm">
              No active bans
            </div>
          ) : (
            bans.map(ban => (
              <div key={ban.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                <div>
                  <span className="text-sm text-white/70 font-medium">{ban.userName}</span>
                  <span className="text-xs text-white/30 ml-2">{ban.userEmail}</span>
                  {ban.reason && (
                    <p className="text-xs text-white/30 mt-0.5">{ban.reason}</p>
                  )}
                  <p className="text-[10px] text-white/20 mt-0.5">
                    Banned by {ban.bannedBy} · {ban.expiresAt ? `Expires: ${new Date(ban.expiresAt).toLocaleDateString()}` : 'Permanent'}
                  </p>
                </div>
                <button
                  onClick={() => handleUnban(ban.userId)}
                  disabled={actionLoading === ban.userId}
                  className="px-3 py-1.5 rounded-lg text-xs bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors disabled:opacity-30"
                >
                  Unban
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* ─── Stats Tab ──────────────────────────────────────── */}
      {!loading && tab === 'stats' && stats && (
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Total Posts', value: stats.totalPosts, color: 'text-purple-400' },
            { label: 'Total Comments', value: stats.totalComments, color: 'text-cyan-400' },
            { label: 'Pending Reports', value: stats.pendingReports, color: stats.pendingReports > 0 ? 'text-red-400' : 'text-green-400' },
            { label: 'Active Bans', value: stats.activeBans, color: 'text-yellow-400' },
          ].map(stat => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
