import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from '@rollup/plugin-terser';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          return 'main';
        },
      },
      plugins: [
        terser({
          compress: {
            drop_console: true, // Видаляє консольні логування
          },
          format: {
            comments: false, // Видаляє коментарі
          },
        }),
      ],
    },
  },
});
