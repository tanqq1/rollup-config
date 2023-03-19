module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-undef': 'error',
    'prettier/prettier': 'warn',
    // https://eslint.org/docs/latest/rules/no-use-before-define
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
