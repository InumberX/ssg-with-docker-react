import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
    // tsconfig.jsonのpaths（~/）をVite標準機能で解決する
    tsconfigPaths: true,
  },
})
