/* eslint-disable import/no-extraneous-dependencies */
import { splitVendorChunkPlugin, defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import compress from 'vite-plugin-compression';

export default defineConfig({
  plugins: [ react(), compress(), splitVendorChunkPlugin() ],
  root: 'src',
  server: {
    proxy: {
      '/followings': {
        target: 'https://localhost:4000',
        secure: false,
        changeOrigin: true
      },
      '/stream': {
        target: 'https://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    },
  },
  build: {
    target: 'esnext',
    outDir: '../build',
    sourcemap: true
  }
});
