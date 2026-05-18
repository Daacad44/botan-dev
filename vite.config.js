import { defineConfig } from 'vite';

export default defineConfig({
  // Treat index.html as root entry
  root: '.',
  build: {
    outDir: 'dist',
    // Copy all static assets to dist
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  // Allow vite dev server to serve the sections folder
  server: {
    port: 5173,
    open: true,
  },
  // Make sure static files in /sections and /assets are copied to dist
  publicDir: 'public',
});
