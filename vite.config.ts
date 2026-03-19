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
    cssCodeSplit: false,
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: { passes: 2 },
      format: { comments: false }
    },
    rollupOptions: {
      output: {
        hoistTransitiveImports: false,
        manualChunks: (id) => {
          if (id.includes('cubing') || id.includes('twips')) {
            return 'cubing';
          }
        }
      }
    }
  }
});
