import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import { defineConfig } from 'minista'

export default defineConfig({
  base: '',
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
  },
  css: {
    preprocessorOptions: {
      scss: {
        style: 'expanded',
      },
    },
  },
})
