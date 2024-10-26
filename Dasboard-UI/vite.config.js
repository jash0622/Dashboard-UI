import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Relative path for serving the app
  build: {
    outDir: 'dist'
  }
});
