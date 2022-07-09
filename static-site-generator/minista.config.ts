import path from 'path'
import { defineConfig } from 'minista'

export default defineConfig({
  base: './',
  vite: {
    server: {
      host: true,
    },
  },
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: path.resolve('src') + '/',
      },
    ],
  },
  assets: {
    outDir: 'assets',
    entry: [
      {
        name: 'css/style',
        input: 'src/assets/css/style.scss',
        insertPages: [],
      },
    ],
    images: {
      outDir: 'assets/img',
      outName: '[name]',
    },
  },
  beautify: {
    useAssets: true,
  },
})
