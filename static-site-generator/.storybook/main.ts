import path from 'path'

import { StorybookConfig } from '@storybook/react-vite'
import { loadConfigFromFile, mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
      builder: {
        viteConfigPath: 'vite-storybook.config.ts',
      },
    },
  },
  staticDirs: ['../public'],
  viteFinal: async (config, { configType }) => {
    // Add your configuration here
    const configPath = path.resolve(__dirname, '../vite-storybook.config.ts')
    const viteMode = configType === 'PRODUCTION' ? 'production' : 'development'
    const result = await loadConfigFromFile(
      { mode: viteMode, command: 'build' },
      configPath,
    )
    const userConfig = result?.config ?? {}

    config.define = {
      'process.env': {},
    }

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, '../src'),
        '../../components': path.resolve(__dirname, '../src/components'),
      }
    }

    // tsconfigの情報をマージし、pathaliasを有効にする
    return mergeConfig(config, {
      ...userConfig,
      plugins: [...(userConfig.plugins ?? []), tsconfigPaths()],
    })
  },
}

export default config
