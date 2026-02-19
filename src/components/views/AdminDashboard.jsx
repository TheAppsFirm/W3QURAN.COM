/**
 * Admin Dashboard - User Management & Sales Board
 * Only accessible by admin users (configured via ADMIN_EMAILS env var)
 */

import { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { useAuth } from '../../hooks';

// Stat Card Component
const StatCard = ({ title, value, subtitle, icon: Icon, color, trend }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-white/60 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {subtitle && <p className="text-white/40 text-xs mt-1">{subtitle}</p>}
        {trend && (
          <p className={`text-xs mt-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last week
          </p>
        )}
      </div>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${color}40, ${color}20)` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
    </div>
  </div>
);

// Tier Badge Component
const TierBadge = ({ tier }) => {
  const colors = {
    free: 'bg-gray-500/20 text-gray-300',
    starter: 'bg-blue-500/20 text-blue-300',
    premium: 'bg-purple-500/20 text-purple-300',
    scholar: 'bg-amber-500/20 text-amber-300',
    lifetime: 'bg-emerald-500/20 text-emerald-300',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${colors[tier] || colors.free}`}>
      {tier}
    </span>
  );
};

// User Row Component
const UserRow = ({ user, onEdit }) => (
  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
    <td className="py-3 px-4">
      <div className="flex items-center gap-3">
        {user.picture ? (
          <img src={user.picture} alt="" className="w-8 h-8 rounded-full" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {user.name?.[0] || user.email?.[0] || '?'}
            </span>
          </div>
        )}
        <div>
          <p className="text-white text-sm font-medium">{user.name || 'No name'}</p>
          <p className="text-white/50 text-xs">{user.email}</p>
        </div>
      </div>
    </td>
    <td className="py-3 px-4">
      <TierBadge tier={user.tier} />
    </td>
    <td className="py-3 px-4 text-white/70 text-sm">
      {user.credits} / {user.monthly_allowance}
    </td>
    <td className="py-3 px-4 text-white/70 text-sm">
      {user.used_this_month}
    </td>
    <td className="py-3 px-4 text-white/70 text-sm">
      {user.conversation_count}
    </td>
    <td className="py-3 px-4 text-white/50 text-xs">
      {new Date(user.created_at).toLocaleDateString()}
    </td>
    <td className="py-3 px-4">
      <button
        onClick={() => onEdit(user)}
        className="text-purple-400 hover:text-purple-300 transition-colors"
      >
        <Icons.Edit className="w-4 h-4" />
      </button>
    </td>
  </tr>
);

// Edit User Modal
const EditUserModal = ({ user, onClose, onSave }) => {
  const [credits, setCredits] = useState(user.credits || 0);
  const [tier, setTier] = useState(user.tier || 'free');
  const [monthlyAllowance, setMonthlyAllowance] = useState(user.monthly_allowance || 0);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await onSave({ userId: user.id, credits, tier, monthlyAllowance });
    setSaving(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-slate-800 rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">Edit User</h3>

        <div className="space-y-4">
          <div>
            <p className="text-white/60 text-sm mb-1">Email</p>
            <p className="text-white">{user.email}</p>
          </div>

          <div>
            <label className="text-white/60 text-sm block mb-1">Subscription Tier</label>
            <select
              value={tier}
              onChange={(e) => setTier(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
            >
              <option value="free">Free</option>
              <option value="starter">Starter</option>
              <option value="premium">Premium</option>
              <option value="scholar">Scholar</option>
              <option value="lifetime">Lifetime</option>
            </select>
          </div>

          <div>
            <label className="text-white/60 text-sm block mb-1">Credits Balance</label>
            <input
              type="number"
              value={credits}
              onChange={(e) => setCredits(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
            />
          </div>

          <div>
            <label className="text-white/60 text-sm block mb-1">Monthly Allowance</label>
            <input
              type="number"
              value={monthlyAllowance}
              onChange={(e) => setMonthlyAllowance(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AdminDashboard({ onClose }) {
  const { user, isAuthenticated, isAdmin } = useAuth();
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTier, setFilterTier] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // overview, users, transactions

  // Fetch stats
  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/stats', { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      } else if (response.status === 403) {
        setError('Access denied. Admin only.');
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  }, []);

  // Fetch users
  const fetchUsers = useCallback(async (page = 1) => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(searchTerm && { search: searchTerm }),
        ...(filterTier && { tier: filterTier }),
      });

      const response = await fetch(`/api/admin/users?${params}`, { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
        setPagination(data.pagination);
      }
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
  }, [searchTerm, filterTier]);

  // Save user changes
  const saveUserChanges = async (changes) => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(changes),
      });

      if (response.ok) {
        fetchUsers(pagination.page);
        fetchStats();
      }
    } catch (err) {
      console.error('Failed to save user:', err);
    }
  };

  // Initial load
  useEffect(() => {
    if (isAdmin) {
      setLoading(true);
      Promise.all([fetchStats(), fetchUsers()]).finally(() => setLoading(false));
    } else {
      setError('Access denied. Admin only.');
      setLoading(false);
    }
  }, [isAdmin, fetchStats, fetchUsers]);

  // Refetch users when search/filter changes
  useEffect(() => {
    if (isAdmin) {
      const timer = setTimeout(() => fetchUsers(1), 300);
      return () => clearTimeout(timer);
    }
  }, [searchTerm, filterTier, isAdmin, fetchUsers]);

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <Icons.Lock className="w-16 h-16 text-white/30 mx-auto mb-4" />
          <p className="text-white/60">Please login to access admin dashboard</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <Icons.AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <p className="text-red-400 text-lg font-medium">{error}</p>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 overflow-hidden">
      {/* Header */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Icons.Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Admin Dashboard</h1>
            <p className="text-xs text-white/50">w3Quran Management</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <Icons.X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10 px-6">
        <div className="flex gap-6">
          {[
            { id: 'overview', label: 'Overview', icon: Icons.PieChart },
            { id: 'users', label: 'Users', icon: Icons.Users },
            { id: 'transactions', label: 'Transactions', icon: Icons.CreditCard },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-white/50 hover:text-white/70'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-120px)] overflow-y-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && stats && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard
                    title="Total Users"
                    value={stats.overview.totalUsers}
                    subtitle={`+${stats.overview.usersThisMonth} this month`}
                    icon={Icons.Users}
                    color="#A855F7"
                  />
                  <StatCard
                    title="Monthly Revenue"
                    value={`$${stats.subscriptions.estimatedMonthlyRevenue?.toFixed(2) || '0'}`}
                    subtitle="Estimated from active subs"
                    icon={Icons.DollarSign}
                    color="#10B981"
                  />
                  <StatCard
                    title="Conversations"
                    value={stats.conversations.total}
                    subtitle={`${stats.conversations.today} today`}
                    icon={Icons.MessageCircle}
                    color="#EC4899"
                  />
                  <StatCard
                    title="Lifetime Sales"
                    value={stats.overview.lifetimePurchases}
                    subtitle={`$${(stats.overview.lifetimePurchases * 299).toLocaleString()} total`}
                    icon={Icons.Award}
                    color="#F59E0B"
                  />
                </div>

                {/* Subscription Breakdown */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Subscription Breakdown</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(stats.subscriptions.byTier || {}).map(([tier, count]) => (
                      <div key={tier} className="text-center">
                        <TierBadge tier={tier} />
                        <p className="text-2xl font-bold text-white mt-2">{count}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credit Usage */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Credit Usage This Month</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-white/60 text-sm">Total Available</p>
                      <p className="text-2xl font-bold text-white">{stats.credits.totalAvailable}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-sm">Total Used</p>
                      <p className="text-2xl font-bold text-purple-400">{stats.credits.totalUsedThisMonth}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-sm">Avg per User</p>
                      <p className="text-2xl font-bold text-white">{stats.credits.avgUsagePerUser}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="space-y-4">
                {/* Search & Filters */}
                <div className="flex gap-4 flex-wrap">
                  <div className="relative flex-1 min-w-[200px]">
                    <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Search by email or name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40"
                    />
                  </div>
                  <select
                    value={filterTier}
                    onChange={(e) => setFilterTier(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                  >
                    <option value="">All Tiers</option>
                    <option value="free">Free</option>
                    <option value="starter">Starter</option>
                    <option value="premium">Premium</option>
                    <option value="scholar">Scholar</option>
                    <option value="lifetime">Lifetime</option>
                  </select>
                </div>

                {/* Users Table */}
                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">User</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Tier</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Credits</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Used</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Convos</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Joined</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map(u => (
                          <UserRow key={u.id} user={u} onEdit={setEditingUser} />
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {pagination.totalPages > 1 && (
                    <div className="flex items-center justify-between p-4 border-t border-white/10">
                      <p className="text-white/50 text-sm">
                        Showing {users.length} of {pagination.total} users
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => fetchUsers(pagination.page - 1)}
                          disabled={pagination.page <= 1}
                          className="px-3 py-1 rounded bg-white/10 text-white disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <span className="px-3 py-1 text-white/60">
                          {pagination.page} / {pagination.totalPages}
                        </span>
                        <button
                          onClick={() => fetchUsers(pagination.page + 1)}
                          disabled={pagination.page >= pagination.totalPages}
                          className="px-3 py-1 rounded bg-white/10 text-white disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Transactions Tab */}
            {activeTab === 'transactions' && stats && (
              <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">User</th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Type</th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Amount</th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Description</th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recentTransactions.map((tx, i) => (
                        <tr key={tx.id || i} className="border-b border-white/10 hover:bg-white/5">
                          <td className="py-3 px-4">
                            <p className="text-white text-sm">{tx.name || 'Unknown'}</p>
                            <p className="text-white/50 text-xs">{tx.email}</p>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              tx.type === 'purchase' ? 'bg-green-500/20 text-green-300' :
                              tx.type === 'use' ? 'bg-purple-500/20 text-purple-300' :
                              tx.type === 'subscription' ? 'bg-blue-500/20 text-blue-300' :
                              'bg-gray-500/20 text-gray-300'
                            }`}>
                              {tx.type}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={tx.amount > 0 ? 'text-green-400' : 'text-red-400'}>
                              {tx.amount > 0 ? '+' : ''}{tx.amount}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-white/70 text-sm">{tx.description}</td>
                          <td className="py-3 px-4 text-white/50 text-xs">
                            {new Date(tx.created_at).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Edit User Modal */}
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={saveUserChanges}
        />
      )}
    </div>
  );
}
