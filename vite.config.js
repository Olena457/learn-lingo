import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/components/')) {
            return 'components';
          }
          if (id.includes('src/pages/')) {
            return 'pages';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][ext]',
      },
    },
    chunkSizeWarningLimit: 500,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
