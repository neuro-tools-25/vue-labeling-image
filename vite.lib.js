import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import terser from '@rollup/plugin-terser';

// https://vite.dev/config/
export default defineConfig({
  mode: 'production',
  publicDir: false,
  build: {
    lib: {
      entry: './src/components/labeling-image/index.js',
      name: 'vue-labeling-image',
      cssFileName: 'styles',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        plugins: [terser()]
      },
    },
    outDir: fileURLToPath(new URL('./lib', import.meta.url)),
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
