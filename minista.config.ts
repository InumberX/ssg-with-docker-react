import {
  defineConfig,
  pluginBeautify,
  pluginEntry,
  pluginImage,
  pluginSsg,
} from 'minista'

// CSS・画像・フォントを種類ごとに別ディレクトリへ出力する
// （pluginEntry経由のアセット名はソースパスを含むためbasenameに正規化する）
const assetFileNames = (assetInfo: { name?: string }) => {
  const name = assetInfo.name ?? ''
  const fileName = name.substring(name.lastIndexOf('/') + 1) || name
  if (name.endsWith('.css')) {
    return `assets/css/${fileName}`
  }
  if (/\.(png|jpe?g|gif|bmp|svg|webp|avif)$/.test(name)) {
    return `assets/img/${fileName}`
  }
  if (/\.(woff2?|ttf|otf|eot)$/.test(name)) {
    return `assets/font/${fileName}`
  }
  return `assets/${fileName}`
}

export default defineConfig(({ command, isSsrBuild }) => {
  // 通常ビルド（SSRビルドと切り分ける）
  const isBuild = command === 'build' && !(isSsrBuild ?? false)

  return {
    base: './',
    plugins: [
      pluginSsg(),
      pluginEntry(),
      pluginImage({ optimize: { outName: '[name]' } }),
      pluginBeautify({ src: ['**/*.{html,css,js}'] }),
    ],
    resolve: {
      // tsconfig.jsonのpaths（~/）をVite標準機能で解決する
      tsconfigPaths: true,
    },
    server: {
      host: true,
      port: 3000,
    },
    build: {
      outDir: isBuild ? 'dist' : undefined,
      // SSRビルドを壊さないよう、出力設定は通常ビルド時のみ適用する
      ...(isBuild
        ? {
            rolldownOptions: {
              output: {
                assetFileNames,
                chunkFileNames: 'assets/js/[name].js',
                entryFileNames: 'assets/js/[name].js',
              },
            },
          }
        : {}),
    },
  }
})
