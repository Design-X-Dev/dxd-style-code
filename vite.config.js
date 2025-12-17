import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'DXComponents',
      fileName: 'dx-components',
    },
    rollupOptions: {
      external: ['vue', '@heroicons/vue'],
      output: {
        globals: {
          vue: 'Vue',
          '@heroicons/vue/24/solid': 'HeroIconsSolid',
          '@heroicons/vue/24/outline': 'HeroIconsOutline',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name;
        },
      },
    },
    cssCodeSplit: false,
  },
});

