module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'comma-dangle': [0, { functions: 'never' }],
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            group: 'external',
            pattern: '~/**',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
