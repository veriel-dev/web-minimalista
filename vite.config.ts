import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    visualizer({
      open: true,
      gzipSize: true
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'layout': ['./src/components/layouts/MainLayout'],
          'hero': ['./src/components/HeroSection'],
          'about': ['./src/components/AboutSection'],
          'projects': ['./src/components/ProjectsSection'],
          'skills': ['./src/components/SkillsSection'],
          'education': ['./src/components/EducationSection'],
          'contact': ['./src/components/ContactSection'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
  }
})
