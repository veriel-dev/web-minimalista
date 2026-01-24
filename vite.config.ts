import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          layout: ['./src/components/outlineUI/MainLayoutOutline'],
          home: ['./src/screens/HomePageOutline'],
          cv: ['./src/screens/CVPageOutline'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
});
