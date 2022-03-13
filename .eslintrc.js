module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prefer-arrow-functions',
  ],
  rules: {
    'react/function-component-definition': 'warn',
    'arrow-body-style': 'warn',
    'no-param-reassign': 'warn',
    'no-debugger': 'off',
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    // 'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'global-require': 0,
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'react/prop-types': 0,
    'react/destructuring-assignment': 'off',
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 2,
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
      },
    ],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
  },
};
