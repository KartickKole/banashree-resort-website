import { defineConfig } from 'vite';

export default defineConfig({
  base: '/banashree-resort-website/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
  },
});
