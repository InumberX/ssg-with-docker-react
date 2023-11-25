import path from 'path'
import { StorybookConfig } from '@storybook/react-vite'
const { loadConfigFromFile, mergeConfig } = require('vite')
const tsconfigPaths = require('vite-tsconfig-paths').default

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
    },
  },
  staticDirs: ['../public'],
  viteFinal: async (config, { configType }) => {
    // Add your configuration here
    const { config: userConfig } = await loadConfigFromFile(
      configType,
      path.resolve(__dirname, '../vite.config.ts'),
    )

    // tsconfigの情報をマージし、pathaliasを有効にする
    return mergeConfig(config, {
      ...userConfig,
      plugins: [tsconfigPaths()],
      resolve: {
        alias: [
          {
            find: /^~\/assets\/scss\/(.*)$/,
            replacement: path.resolve(__dirname, '../src/assets/scss/$1'),
          },
          {
            find: /^~\/(.*)\/style$/,
            replacement: path.resolve(__dirname, '../src/$1/style'),
          },
        ],
      },
    })
  },
}

export default config
