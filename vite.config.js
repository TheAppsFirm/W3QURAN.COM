import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy TTS requests to Google Translate TTS in development
      // In production, Cloudflare Pages Functions handle this at /api/tts
      '/api/tts': {
        target: 'https://translate.google.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Parse the original URL to get query params
            const url = new URL(req.url, 'http://localhost');
            const text = url.searchParams.get('text') || '';
            const lang = url.searchParams.get('lang') || 'en';

            // Rewrite the path to Google TTS format
            const newPath = `/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${encodeURIComponent(text)}`;
            proxyReq.path = newPath;

            // Set required headers
            proxyReq.setHeader('Referer', 'https://translate.google.com/');
            proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
          });
        },
      },
      // Proxy for quran-words API in development
      '/api/quran-words': {
        target: 'https://api.quran.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            const url = new URL(req.url, 'http://localhost');
            const surah = url.searchParams.get('surah') || '1';
            const newPath = `/api/v4/quran/verses/uthmani?chapter_number=${surah}&words=true&word_fields=text_uthmani,text_indopak&per_page=300`;
            proxyReq.path = newPath;
          });
        },
      },
    },
  },
})
