import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LocaleProvider } from './context'
import './index.css'

// Import logger early to set up global error handlers
import './utils/logger'

// Initialize analytics tracking
import { initAnalytics } from './utils/analyticsTracker'
initAnalytics()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
)
