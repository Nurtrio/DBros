import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyPublicPlugin() {
  return {
    name: 'copy-public-safe',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const outDir = path.resolve(__dirname, 'dist');
      const files = fs.readdirSync(publicDir);
      for (const file of files) {
        const src = path.join(publicDir, file);
        const dest = path.join(outDir, file);
        try {
          fs.copyFileSync(src, dest);
        } catch {
          // skip locked files
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyPublicPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
});
