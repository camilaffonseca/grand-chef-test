module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'import-helpers'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'next',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/display-name': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'operator-linebreak': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-use-before-define': ['error'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'prefer-const': ['error'],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^next/'],
          'module',
          '/^components/',
          '/^pages/',
          ['/^contexts/', '/^providers/', '/^utils/'],
          '/^theme/',
          '/^locales/',
          ['parent', 'sibling', 'index'],
          '/^./types/',
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
