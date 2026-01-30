/**
 * LoadingSpinner Component
 * Single Responsibility: Shows loading state with animation
 */

const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 flex items-center justify-center">
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-purple-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
        <div
          className="absolute inset-2 rounded-full border-4 border-transparent border-t-emerald-500 animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
        ></div>
      </div>
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  </div>
);

export default LoadingSpinner;
