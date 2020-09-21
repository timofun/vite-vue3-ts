module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "camelcase": 1,
    // 检查分号
    "no-extra-semi": 2,
    // 缩进2或4个空格
    "indent": [2],
    // function的参数前加空格
    "space-before-function-paren": 2,
    // 不检查分号
    "no-eq-null": 2, //不允许对null用==或者!=
    "no-multiple-empty-lines": [2, {"max": 2}], //空行最多不能超过两行
    "no-trailing-spaces": 2, //一行最后不允许有空格
    "no-var": 2, //使用let和const代替var
    "no-new": 0, // 不允许使用new一个实例后不赋值或者不比较
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }] // 对象字面量中冒号的前后空格
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
