import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  base: '/square1-helper/',
  optimizeDeps: {
    exclude: ['cubing']
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: { passes: 2 }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('cubing') || id.includes('twips')) {
            return 'cubing';
          }
        }
      }
    }
  }
});
