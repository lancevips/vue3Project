/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  env: {
    node: true // 识别 nodejs 配置
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off', // 默认vue文件必须大驼峰命名，off 关闭文件名称校验
  }
}