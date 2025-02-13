// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unocss/recommended' // 新增 Unocss 规则支持
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unocss'],
  rules: {
    // Core rules
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // TS rules
    '@typescript-eslint/consistent-type-imports': 'error',
    // Unocss rules
    'unocss/classnames-order': 'error',
    'unocss/no-duplicated-classnames': 'error'
  },
  ignorePatterns: ['dist', '**/auto-imports.d.ts']
}
