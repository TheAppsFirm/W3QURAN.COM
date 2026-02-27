/**
 * GamificationNotifications
 * Renders floating toast/modal notifications for XP, achievements, level-ups, and streaks.
 * Reads from useGamification().notifications.
 */

import { memo, useEffect, useState } from 'react';
import { useGamification } from '../../hooks/useGamification';
import { Icons } from './Icons';
import { useTranslation } from '../../contexts/LocaleContext';

// Auto-dismiss XP/streak toasts after this duration
const AUTO_DISMISS_MS = 3000;

/**
 * XP Toast — subtle floating pill at bottom-right
 */
const XPToast = memo(function XPToast({ amount, onDismiss }) {
  const { t, tInterpolate } = useTranslation();
  useEffect(() => {
    const timer = setTimeout(onDismiss, AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-lg animate-bounce-in"
      style={{
        background: 'linear-gradient(135deg, #F59E0B, #D97706)',
        boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
        animation: 'xpFloat 0.5s ease-out forwards',
      }}
    >
      <Icons.Star className="w-3.5 h-3.5" />
      {tInterpolate('gamification.xpGained', { amount })}
    </div>
  );
});

/**
 * Streak Toast — fire icon with milestone
 */
const StreakToast = memo(function StreakToast({ days, onDismiss }) {
  const { tInterpolate } = useTranslation();
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #EF4444, #F97316)',
        boxShadow: '0 4px 20px rgba(239, 68, 68, 0.5)',
        animation: 'xpFloat 0.5s ease-out forwards',
      }}
    >
      <Icons.Fire className="w-4 h-4 animate-pulse" />
      {tInterpolate('gamification.streakNotification', { days })}
    </div>
  );
});

/**
 * Achievement Unlocked — center modal
 */
const AchievementModal = memo(function AchievementModal({ achievement, xpGained, onDismiss }) {
  const { t, tInterpolate } = useTranslation();
  const AchIcon = Icons[achievement?.icon] || Icons.Award;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999] p-4" onClick={onDismiss}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" style={{ animation: 'fadeIn 0.3s ease-out' }} />

      {/* Card */}
      <div
        className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-white/10"
        style={{ animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ring */}
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${achievement?.color || '#F59E0B'}, ${achievement?.color || '#F59E0B'}aa)`,
            boxShadow: `0 0 40px ${achievement?.color || '#F59E0B'}60, 0 0 80px ${achievement?.color || '#F59E0B'}30`,
          }}
        >
          <AchIcon className="w-10 h-10 text-white drop-shadow-lg" />
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">{t('gamification.achievementUnlocked')}</p>
          <h3 className="text-xl font-bold text-white mb-0.5">{achievement?.name || 'Achievement'}</h3>
          {achievement?.nameAr && <p className="text-lg text-white/60 font-arabic mb-2">{achievement.nameAr}</p>}
          <p className="text-sm text-white/50 mb-4">{achievement?.description}</p>

          {xpGained > 0 && (
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold mb-4">
              <Icons.Star className="w-3.5 h-3.5" />
              {tInterpolate('gamification.xpGained', { amount: xpGained })}
            </div>
          )}
        </div>

        <button
          onClick={onDismiss}
          className="w-full py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: `linear-gradient(135deg, ${achievement?.color || '#F59E0B'}, ${achievement?.color || '#F59E0B'}cc)` }}
        >
          {t('gamification.mashaAllah')}
        </button>
      </div>
    </div>
  );
});

/**
 * Level Up — celebratory center modal
 */
const LevelUpModal = memo(function LevelUpModal({ oldLevel, newLevel, onDismiss }) {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999] p-4" onClick={onDismiss}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" style={{ animation: 'fadeIn 0.3s ease-out' }} />

      <div
        className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-white/10"
        style={{ animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Level badge glow */}
        <div
          className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4"
          style={{
            background: `linear-gradient(135deg, ${newLevel?.color || '#FFD700'}, ${newLevel?.color || '#FFD700'}aa)`,
            boxShadow: `0 0 60px ${newLevel?.color || '#FFD700'}50, 0 0 120px ${newLevel?.color || '#FFD700'}20`,
            animation: 'pulse 2s ease-in-out infinite',
          }}
        >
          <span className="text-4xl font-bold text-white drop-shadow-lg">{newLevel?.level || '?'}</span>
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">{t('gamification.levelUp')}</p>
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-sm text-white/40 line-through">{oldLevel?.name}</span>
          <Icons.ChevronRight className="w-4 h-4 text-white/30" />
          <span className="text-xl font-bold" style={{ color: newLevel?.color || '#FFD700' }}>{newLevel?.name}</span>
        </div>
        {newLevel?.nameAr && <p className="text-lg text-white/50 font-arabic mb-4">{newLevel.nameAr}</p>}

        <button
          onClick={onDismiss}
          className="w-full py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: `linear-gradient(135deg, ${newLevel?.color || '#FFD700'}, ${newLevel?.color || '#FFD700'}cc)` }}
        >
          {t('gamification.alhamdulillah')}
        </button>
      </div>
    </div>
  );
});

/**
 * Main Notifications Container
 */
const GamificationNotifications = memo(function GamificationNotifications() {
  const { notifications, dismissNotification, isActive } = useGamification();

  if (!isActive || notifications.length === 0) return null;

  // Split notifications by type
  const toasts = notifications.filter(n => n.type === 'xp' || n.type === 'streak');
  const modals = notifications.filter(n => n.type === 'achievement' || n.type === 'level_up');

  // Only show the most recent modal (one at a time)
  const activeModal = modals[0] || null;

  return (
    <>
      {/* Toast container — bottom-right, stacked */}
      {toasts.length > 0 && (
        <div className="fixed bottom-20 right-4 z-[99998] flex flex-col gap-2 items-end pointer-events-none">
          {toasts.slice(-3).map(n => (
            n.type === 'xp' ? (
              <XPToast key={n.id} amount={n.data.amount} onDismiss={() => dismissNotification(n.id)} />
            ) : (
              <StreakToast key={n.id} days={n.data.days} onDismiss={() => dismissNotification(n.id)} />
            )
          ))}
        </div>
      )}

      {/* Modal — one at a time */}
      {activeModal?.type === 'achievement' && (
        <AchievementModal
          achievement={activeModal.data.achievement}
          xpGained={activeModal.data.xpGained}
          onDismiss={() => dismissNotification(activeModal.id)}
        />
      )}
      {activeModal?.type === 'level_up' && (
        <LevelUpModal
          oldLevel={activeModal.data.oldLevel}
          newLevel={activeModal.data.newLevel}
          onDismiss={() => dismissNotification(activeModal.id)}
        />
      )}
    </>
  );
});

export default GamificationNotifications;
