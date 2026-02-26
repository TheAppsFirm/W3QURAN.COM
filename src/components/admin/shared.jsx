/**
 * Shared Admin Dashboard Components
 */
import { Icons } from '../common/Icons';

// Stat Card — metric display with icon, subtitle, trend
export const StatCard = ({ title, value, subtitle, icon: Icon, color, trend }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-white/60 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {subtitle && <p className="text-white/40 text-xs mt-1">{subtitle}</p>}
        {trend !== undefined && trend !== null && (
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

// Simple horizontal bar chart
export const SimpleBarChart = ({ data, labelKey, valueKey, color = '#A855F7', maxItems = 10, formatLabel }) => {
  if (!data || data.length === 0) return <p className="text-white/40 text-sm">No data available</p>;
  const maxValue = Math.max(...data.slice(0, maxItems).map(d => d[valueKey] || 0));
  return (
    <div className="space-y-2">
      {data.slice(0, maxItems).map((item, i) => {
        const label = formatLabel ? formatLabel(item[labelKey]) : (item[labelKey] || 'Unknown');
        return (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-white/60 w-28 truncate" title={label}>{label}</span>
            <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${maxValue > 0 ? (item[valueKey] / maxValue) * 100 : 0}%`,
                  background: `linear-gradient(90deg, ${color}80, ${color})`
                }}
              />
            </div>
            <span className="text-xs text-white font-medium w-12 text-right">{item[valueKey]}</span>
          </div>
        );
      })}
    </div>
  );
};

// Period selector dropdown
export const PeriodSelector = ({ value, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
  >
    <option value="24h" className="bg-gray-900">Last 24 Hours</option>
    <option value="7d" className="bg-gray-900">Last 7 Days</option>
    <option value="30d" className="bg-gray-900">Last 30 Days</option>
    <option value="90d" className="bg-gray-900">Last 90 Days</option>
  </select>
);

// Vertical bar trend chart (e.g. hourly errors, daily DAU)
export const TrendChart = ({ data, valueKey, color = '#3B82F6', height = 'h-24', formatTooltip }) => {
  if (!data || data.length === 0) return <p className="text-white/40 text-sm">No trend data</p>;
  const maxVal = Math.max(...data.map(d => d[valueKey] || 0), 1);
  return (
    <div className={`flex items-end gap-1 ${height}`}>
      {data.map((item, i) => {
        const pct = ((item[valueKey] || 0) / maxVal) * 100;
        const tooltip = formatTooltip ? formatTooltip(item) : `${item[valueKey]}`;
        return (
          <div key={i} className="flex-1 flex flex-col items-center justify-end" title={tooltip}>
            <div
              className="w-full rounded-t transition-all hover:opacity-80"
              style={{
                height: `${Math.max(pct, 2)}%`,
                background: (item[valueKey] || 0) > maxVal * 0.7
                  ? `linear-gradient(180deg, ${color}, ${color}DD)`
                  : `linear-gradient(180deg, ${color}80, ${color})`,
                minHeight: '2px',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

// Loading spinner
export const AdminLoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Empty state placeholder
export const EmptyState = ({ icon: Icon = Icons.FileText, title = 'No Data Yet', message }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-white/30" />
    </div>
    <p className="text-white/50 font-medium">{title}</p>
    {message && <p className="text-white/30 text-sm mt-1 max-w-sm">{message}</p>}
  </div>
);
