/**
 * LoadingSpinner Component
 * Single Responsibility: Shows loading state with elegant animation
 * Production-ready with Islamic-themed design
 */

const LoadingSpinner = ({ message = 'Loading...', fullScreen = true }) => {
  const content = (
    <div className="text-center">
      {/* Quran-inspired geometric loading animation */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 rounded-full border-4 border-purple-200/30"></div>

        {/* Spinning gradient ring */}
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
          style={{
            borderTopColor: '#8b5cf6',
            borderRightColor: '#06b6d4',
            animationDuration: '1.5s'
          }}
        ></div>

        {/* Inner counter-rotating ring */}
        <div
          className="absolute inset-3 rounded-full border-4 border-transparent animate-spin"
          style={{
            borderTopColor: '#10b981',
            borderLeftColor: '#f59e0b',
            animationDirection: 'reverse',
            animationDuration: '1s'
          }}
        ></div>

        {/* Center Islamic star */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 animate-pulse">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-500">
              <path
                d="M12 2L14.4 9.2H22L16 14L18.4 21.2L12 17L5.6 21.2L8 14L2 9.2H9.6L12 2Z"
                fill="currentColor"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading message with subtle animation */}
      <p className="text-gray-300 font-medium text-lg animate-pulse">{message}</p>

      {/* Arabic text for authenticity */}
      <p className="text-gray-500 text-sm mt-2 font-arabic">جارٍ التحميل</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="relative z-10">{content}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      {content}
    </div>
  );
};

export default LoadingSpinner;
