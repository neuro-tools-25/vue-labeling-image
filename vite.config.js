import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import terser from '@rollup/plugin-terser';

const projectPath = 'front';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'lib': fileURLToPath(new URL('./lib', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `${projectPath}/js/app.js`,
        assetFileNames: (file) => {
          let output = `${projectPath}/assets/[name][extname]`;
          const isStyles = file.name && file.name.endsWith('.css');

          if (isStyles) output = `${projectPath}/styles/app[extname]`;

          return output;
        },
        manualChunks: {
          common: [
            'vue',
            'vue-router',
            'lib/index.es.js'
          ]
        },
        chunkFileNames: `${projectPath}/js/[name].js`,
        plugins: [terser()]
      },
    },
  },
})
