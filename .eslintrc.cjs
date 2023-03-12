module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/resolver': { alias: { map: [['@', './src']] } },
    'import/extensions': ['.js', '.ts'],
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    /**
     * 禁用未声明的变量，除非它们在 global  注释中被提到
     * d.ts类型仅作全局定义 不混入代码
     */
    'no-undef': 'off',
  },
}
