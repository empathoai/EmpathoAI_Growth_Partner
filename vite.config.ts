import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './', // Hostinger-optimized relative paths
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      assetsInlineLimit: 4096, // Inline small assets < 4kb
      rollupOptions: {
        output: {
          // Force single bundle by removing entryFileNames/chunkFileNames customization if any
          // and ensured no manualChunks are defined.
        }
      }
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    }
  };
});
