/**
 * User Feedback Panel — Review and manage user-submitted feedback, bug reports, and feature requests.
 * Fetches from /api/admin/feedback endpoint.
 */
import { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { StatCard, PeriodSelector, AdminLoadingSpinner, EmptyState } from './shared';

const TYPE_CONFIG = {
  bug:     { label: 'Bug',     bg: 'bg-red-500/20',    text: 'text-red-300',    border: 'border-red-500/30' },
  feature: { label: 'Feature', bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/30' },
  general: { label: 'General', bg: 'bg-white/10',      text: 'text-white/60',   border: 'border-white/20' },
};

const STATUS_CONFIG = {
  new:      { label: 'New',      bg: 'bg-amber-500/20', text: 'text-amber-300', border: 'border-amber-500/30' },
  reviewed: { label: 'Reviewed', bg: 'bg-blue-500/20',  text: 'text-blue-300',  border: 'border-blue-500/30' },
  resolved: { label: 'Resolved', bg: 'bg-green-500/20', text: 'text-green-300', border: 'border-green-500/30' },
};

const Badge = ({ config }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${config.bg} ${config.text} border ${config.border}`}>
    {config.label}
  </span>
);

const DeleteConfirmModal = ({ item, onConfirm, onCancel, loading }) => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onCancel}>
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    {/* Modal */}
    <div
      className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Red glow accent */}
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />

      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-red-500/15 border border-red-500/20 flex items-center justify-center mb-4">
          <Icons.Trash className="w-6 h-6 text-red-400" />
        </div>

        <h3 className="text-white font-semibold text-base mb-1">Delete Feedback?</h3>
        <p className="text-white/40 text-sm mb-1">This action cannot be undone.</p>

        {/* Preview of what's being deleted */}
        {item && (
          <div className="w-full bg-white/5 rounded-lg p-3 mt-3 mb-5 border border-white/10 text-left">
            <div className="flex items-center gap-2 mb-1">
              <Badge config={TYPE_CONFIG[item.type] || TYPE_CONFIG.general} />
              <span className="text-white/30 text-[10px]">{item.user_name || 'Anonymous'}</span>
            </div>
            <p className="text-white/50 text-xs line-clamp-2 leading-relaxed">{item.message}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 text-white/70 text-sm font-medium hover:bg-white/15 transition-colors disabled:opacity-40"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-4 py-2.5 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/30 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Icons.Trash className="w-3.5 h-3.5" />
                Delete
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const UserFeedbackPanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null); // item to confirm deletion
  const limit = 20;

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ page, limit });
      if (typeFilter !== 'all') params.set('type', typeFilter);
      if (statusFilter !== 'all') params.set('status', statusFilter);

      const res = await fetch(`/api/admin/feedback?${params}`, { credentials: 'include' });
      if (!res.ok) {
        const errBody = await res.text().catch(() => '');
        let detail = '';
        try { detail = JSON.parse(errBody)?.error || errBody; } catch { detail = errBody; }
        throw new Error(detail || `HTTP ${res.status}`);
      }
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error('[Feedback] Fetch failed:', e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [typeFilter, statusFilter, page]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Reset page when filters change
  useEffect(() => { setPage(1); }, [typeFilter, statusFilter]);

  const updateStatus = async (id, status) => {
    setActionLoading(id);
    try {
      const res = await fetch('/api/admin/feedback', {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error('Failed to update');
      await fetchData();
    } catch (e) {
      console.error('[Feedback] Update failed:', e);
    } finally {
      setActionLoading(null);
    }
  };

  const confirmDelete = async () => {
    if (!deleteConfirm) return;
    const id = deleteConfirm.id;
    setActionLoading(id);
    try {
      const res = await fetch('/api/admin/feedback', {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error('Failed to delete');
      if (expandedId === id) setExpandedId(null);
      setDeleteConfirm(null);
      await fetchData();
    } catch (e) {
      console.error('[Feedback] Delete failed:', e);
    } finally {
      setActionLoading(null);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch { return dateStr; }
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    } catch { return ''; }
  };

  if (loading && !data) return <AdminLoadingSpinner />;

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-white text-lg font-bold">User Feedback</h2>
          <p className="text-white/40 text-sm mt-1">Review and manage user-submitted feedback, bug reports, and feature requests.</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
          <Icons.AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
          <p className="text-red-400 font-medium">Failed to load feedback</p>
          <p className="text-white/40 text-sm mt-1">{error}</p>
          {error.includes('no such table') && (
            <p className="text-amber-400/70 text-xs mt-2">The user_feedback table needs to be created in your D1 database. Run the SQL migration below.</p>
          )}
          <button onClick={fetchData} className="mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm transition-colors">
            Retry
          </button>
        </div>
        {error.includes('no such table') && (
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-2">Create Table SQL</h4>
            <pre className="text-white/50 text-xs bg-black/30 rounded-lg p-3 overflow-x-auto">{`CREATE TABLE IF NOT EXISTS user_feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  type TEXT NOT NULL DEFAULT 'general',
  message TEXT NOT NULL,
  metadata TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);`}</pre>
          </div>
        )}
      </div>
    );
  }

  const stats = data?.stats || { total: 0, new: 0, bugs: 0, features: 0 };
  const items = data?.items || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-white text-lg font-bold">User Feedback</h2>
        <p className="text-white/40 text-sm mt-1">
          Review and manage user-submitted feedback, bug reports, and feature requests.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard title="Total Feedback" value={stats.total} icon={Icons.MessageCircle} color="#3B82F6" />
        <StatCard title="New (Unreviewed)" value={stats.new} icon={Icons.Bell} color="#F59E0B" />
        <StatCard title="Bug Reports" value={stats.bugs} icon={Icons.AlertCircle} color="#EF4444" />
        <StatCard title="Feature Requests" value={stats.features} icon={Icons.Sparkles} color="#A855F7" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Icons.Filter className="w-4 h-4 text-white/40" />
          <span className="text-white/40 text-xs">Type:</span>
          {['all', 'bug', 'feature', 'general'].map(t => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                typeFilter === t
                  ? 'bg-white/20 text-white'
                  : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
              }`}
            >
              {t === 'all' ? 'All' : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/40 text-xs">Status:</span>
          {['all', 'new', 'reviewed', 'resolved'].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === s
                  ? 'bg-white/20 text-white'
                  : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
              }`}
            >
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback Table */}
      {items.length > 0 ? (
        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-[100px_120px_80px_1fr_90px_120px] gap-3 px-4 py-3 border-b border-white/10 text-white/40 text-xs font-medium">
            <span>Date</span>
            <span>User</span>
            <span>Type</span>
            <span>Message</span>
            <span>Status</span>
            <span className="text-right">Actions</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {items.map((item) => {
              const isExpanded = expandedId === item.id;
              const typeConf = TYPE_CONFIG[item.type] || TYPE_CONFIG.general;
              const statusConf = STATUS_CONFIG[item.status] || STATUS_CONFIG.new;
              const isActioning = actionLoading === item.id;

              return (
                <div key={item.id} className="group">
                  {/* Main Row */}
                  <div
                    className="grid grid-cols-1 md:grid-cols-[100px_120px_80px_1fr_90px_120px] gap-2 md:gap-3 px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer items-center"
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  >
                    {/* Date */}
                    <div className="flex items-center gap-2 md:block">
                      <span className="text-white/60 text-xs">{formatDate(item.created_at)}</span>
                      <span className="text-white/30 text-[10px] md:block">{formatTime(item.created_at)}</span>
                    </div>

                    {/* User */}
                    <div className="min-w-0">
                      <p className="text-white/80 text-xs truncate" title={item.user_name || item.user_email || 'Anonymous'}>
                        {item.user_name || 'Anonymous'}
                      </p>
                      {item.user_email && (
                        <p className="text-white/30 text-[10px] truncate" title={item.user_email}>
                          {item.user_email}
                        </p>
                      )}
                    </div>

                    {/* Type */}
                    <div>
                      <Badge config={typeConf} />
                    </div>

                    {/* Message (truncated) */}
                    <div className="min-w-0">
                      <p className="text-white/70 text-xs truncate" title={item.message}>
                        {item.message}
                      </p>
                    </div>

                    {/* Status */}
                    <div>
                      <Badge config={statusConf} />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                      {item.status !== 'reviewed' && (
                        <button
                          onClick={() => updateStatus(item.id, 'reviewed')}
                          disabled={isActioning}
                          className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors disabled:opacity-40"
                          title="Mark as Reviewed"
                        >
                          <Icons.Eye className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {item.status !== 'resolved' && (
                        <button
                          onClick={() => updateStatus(item.id, 'resolved')}
                          disabled={isActioning}
                          className="p-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors disabled:opacity-40"
                          title="Mark as Resolved"
                        >
                          <Icons.CheckCircle className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        onClick={() => setDeleteConfirm(item)}
                        disabled={isActioning}
                        className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-40"
                        title="Delete"
                      >
                        <Icons.Trash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail */}
                  {isExpanded && (
                    <div className="px-4 pb-4 bg-white/[0.02]">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Icons.MessageCircle className="w-4 h-4 text-white/30" />
                          <span className="text-white/50 text-xs font-medium">Full Message</span>
                        </div>
                        <p className="text-white/80 text-sm whitespace-pre-wrap leading-relaxed">
                          {item.message}
                        </p>
                        {item.metadata && (
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <span className="text-white/40 text-[10px] uppercase tracking-wider">Metadata</span>
                            <pre className="text-white/50 text-[11px] mt-1 overflow-x-auto">
                              {typeof item.metadata === 'string' ? item.metadata : JSON.stringify(item.metadata, null, 2)}
                            </pre>
                          </div>
                        )}
                        <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-4 text-[10px] text-white/30">
                          <span>ID: {item.id}</span>
                          {item.user_email && <span>Email: {item.user_email}</span>}
                          {item.updated_at && <span>Updated: {formatDate(item.updated_at)} {formatTime(item.updated_at)}</span>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <EmptyState
          icon={Icons.MessageCircle}
          title="No Feedback Yet"
          message="No feedback yet — users can submit feedback from the app settings."
        />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-xs">
            Showing {(page - 1) * limit + 1}-{Math.min(page * limit, total)} of {total}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="px-3 py-1.5 rounded-lg text-xs bg-white/10 text-white/60 hover:bg-white/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-white/50 text-xs">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="px-3 py-1.5 rounded-lg text-xs bg-white/10 text-white/60 hover:bg-white/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Loading overlay for refetches */}
      {loading && data && (
        <div className="flex items-center justify-center py-4">
          <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <DeleteConfirmModal
          item={deleteConfirm}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteConfirm(null)}
          loading={actionLoading === deleteConfirm.id}
        />
      )}
    </div>
  );
};

export default UserFeedbackPanel;
