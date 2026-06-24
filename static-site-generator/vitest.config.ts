import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-env.ts'],
    includeSource: ['src/**/*.{ts,tsx}'],
    exclude: ['node_modules'],
  },
  resolve: {
    // tsconfig.jsonのpaths（~/）をVite標準機能で解決する
    tsconfigPaths: true,
  },
  plugins: [react()],
})
