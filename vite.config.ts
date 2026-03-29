import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

const chunkMap: Record<string, string[]> = {
  vendor: ['react', 'react-dom', 'motion'],
  layout: ['MainLayoutOutline'],
  home: ['HomePageOutline'],
  cv: ['CVPageOutline'],
};

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: 'stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          for (const [chunk, modules] of Object.entries(chunkMap)) {
            if (modules.some(m => id.includes(m))) return chunk;
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
});
