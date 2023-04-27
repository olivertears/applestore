import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/0 - app'),
      '@processes': path.resolve(__dirname, './src/1 - processes'),
      '@pages': path.resolve(__dirname, './src/2 - pages'),
      '@widgets': path.resolve(__dirname, './src/3 - widgets'),
      '@features': path.resolve(__dirname, './src/4 - features'),
      '@entities': path.resolve(__dirname, './src/5 - entities'),
      '@shared': path.resolve(__dirname, './src/6 - shared')
    }
  }
});
