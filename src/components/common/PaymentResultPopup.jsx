/**
 * PaymentResultPopup — Shared payment result overlay.
 * Shown after returning from Stripe checkout (success, canceled, or failed).
 * Used by App.jsx as the single centralized payment result handler.
 */
import { useTranslation } from '../../contexts/LocaleContext';

export default function PaymentResultPopup({ success, canceled, isLoading, onClose, onRetry }) {
  const { t, isRTL } = useTranslation();

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      style={{ padding: 'max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left))' }}
    >
      <div
        className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {success ? (
          <>
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">
              {t('premium.paymentSuccessful', 'Payment Successful!')}
            </h2>
            <p className="text-white/70 mb-6">
              {t('premium.welcomePremium', 'Welcome to Premium! All features are now unlocked.')}
            </p>
            <button
              onClick={onClose}
              disabled={isLoading}
              className={`w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{t('premium.activating', 'Activating Premium...')}</span>
                </>
              ) : (
                <span>{t('premium.startLearning', 'Start Learning')} 🚀</span>
              )}
            </button>
          </>
        ) : canceled ? (
          <>
            <div className="text-7xl mb-4">🤔</div>
            <h2 className="text-2xl font-bold text-amber-400 mb-2">
              {t('premium.paymentCanceled', 'Payment Canceled')}
            </h2>
            <p className="text-white/70 mb-6">
              {t('premium.cancelMessage', 'No worries! You can upgrade anytime to unlock all features.')}
            </p>
            <div className="space-y-2">
              <button
                onClick={onRetry}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all"
              >
                {t('premium.tryAgain', 'Try Again')}
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-white/50 hover:text-white/80 transition-colors"
              >
                {t('premium.continueFreeFeatures', 'Continue with Free')}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-7xl mb-4">😔</div>
            <h2 className="text-2xl font-bold text-red-400 mb-2">
              {t('premium.paymentFailed', 'Payment Failed')}
            </h2>
            <p className="text-white/70 mb-6">
              {t('premium.failedMessage', 'Something went wrong with your payment. Please try again.')}
            </p>
            <div className="space-y-2">
              <button
                onClick={onRetry}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all"
              >
                {t('premium.tryAgain', 'Try Again')}
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-white/50 hover:text-white/80 transition-colors"
              >
                {t('premium.cancel', 'Cancel')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
