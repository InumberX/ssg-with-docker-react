import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import { importX } from 'eslint-plugin-import-x'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es2015,
      },
    },
  },
  // React
  {
    files: ['**/*.{ts,tsx,js,mjs}'],
    plugins: {
      react: pluginReact,
      'react-hooks': fixupPluginRules(pluginReactHooks),
      'import-x': importX,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      'import-x/no-extraneous-dependencies': ['off', { includeTypes: true }],
      'import-x/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['postcss.config.js', '.storybook/**/*.{ts,tsx,js}'],
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
  },
  // Custom rules
  {
    rules: {
      'react/jsx-no-target-blank': 'off',
    },
  },
  {
    ignores: ['node_modules', 'dist', 'storybook-build', 'public', '.env'],
  },
)
