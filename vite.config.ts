import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'layout': ['./src/components/layouts/MainLayout'],
          'home': ['./src/screens/HomePage'],
          'cv': ['./src/screens/CurriculumVitaePage'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
  }
})
