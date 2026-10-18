
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => ({
  base: '/Smart-Khaata-Pro/',

  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: 'autoUpdate',

      injectRegister: 'auto',

      includeAssets: ['favicon.ico'],

      manifest: {
        name: 'Smart Khaata Pro',
        short_name: 'Smart Khaata',
        description: 'खेती, किराया और घरेलू हिसाब का डिजिटल बहीखाता',
        theme_color: '#07130e',
        background_color: '#07130e',
        display: 'standalone',
        start_url: '/Smart-Khaata-Pro/',
        scope: '/Smart-Khaata-Pro/',

        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],

      },

      workbox: {
        navigateFallback: 'index.html',
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
}));
