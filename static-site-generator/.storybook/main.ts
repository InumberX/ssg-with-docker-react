import path from 'path'

import { StorybookConfig } from '@storybook/react-vite'
import { loadConfigFromFile, mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
    // plugins は framework の viteConfigPath 経由で既に読み込まれるため除外する
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      plugins: _plugins,
      ...userConfigWithoutPlugins
    } = userConfig
    return mergeConfig(config, {
      ...userConfigWithoutPlugins,
      plugins: [tsconfigPaths()],
    })
  },
}

export default config
