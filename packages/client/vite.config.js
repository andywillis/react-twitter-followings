/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
// import compress from 'vite-plugin-compress';
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [ react(), splitVendorChunkPlugin() ],
  server: {
    proxy: {
      '/followings': {
        target: 'https://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'build'
  }
});
